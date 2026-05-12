<?php

namespace App\Http\Controllers\Admin;
use App\Http\Controllers\Controller;
use App\Models\Service;
use App\Models\Servicemore;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class ServiceController extends Controller
{

    public function index()
    {
        $service= Service::all();
        return view('admin.service.index',compact('service'));  
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return view('admin.service.create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $input=$request->except('_token','_url', '_method');
          $cleanInput = strip_tags($input['title'] ?? '');
    $slug = Str::slug($cleanInput);
    $input['slug'] = ucfirst($slug);

    $input['slug'] = strtolower($slug);

        if($image = $request->file('image'))
        {
            $dest_path = 'uploads/service';

            // Use original name with potential conflict check
            $originalname = $image->getClientOriginalName();
            $extension = $image->getClientOriginalExtension();

            // Remove spaces, brackets, and special characters from filename
            $originalname = preg_replace('/[\s\[\]\(\)-]+/', '_', pathinfo($originalname, PATHINFO_FILENAME));
            $originalname = preg_replace('/[^a-zA-Z0-9_]/', '', $originalname); // Keeps only alphanumeric and underscores
    
            $counter = 1;
            $newfilename = $originalname . '.' . $extension;

            //Check if the file already exist and rename it if necessary
            while(file_exists($dest_path. '/' . $newfilename))
            {
                $newfilename = $originalname . '_' . $counter . '.' . $extension;
                $counter++;
            }
    
            // MOve the file to the destination
            $image->move($dest_path, $newfilename);

            // Store the filename in the input array
            $input['image'] = $newfilename;
        }
        Service::create($input);
        // $project=Service::create($input);

        // $id = $project->id;
 
//  if ($files = $request->file('more_image')) {

//     $photoData = [];

//     foreach ($files as $index => $it_image) {

//         $dest_path = 'uploads/service/more';

//         $originalname = pathinfo($it_image->getClientOriginalName(), PATHINFO_FILENAME);
//         $extension = $it_image->getClientOriginalExtension();

//         if ($extension === 'jfif') {
//             $extension = 'jpg';
//         }

//         $counter = 1;
//         $newfilename = $originalname . '.' . $extension;

//         while (file_exists($dest_path . '/' . $newfilename)) {
//             $newfilename = $originalname . '_' . $counter . '.' . $extension;
//             $counter++;
//         }

//         $it_image->move($dest_path, $newfilename);

//         // 🔥 FIX: icon must be indexed
//         // $icon = $request->input('more_icon')[$index] ?? null;

//         $photoData[] = [
//             'service_id'   => $id,
//             'more_title'   => $request->input('more_title')[$index] ?? null,
//             'more_content' => $request->input('more_content')[$index] ?? null,
//             // 'more_icon'    => $icon,
//             'more_image'   => $newfilename,
//         ];
//     }

//     Servicemore::insert($photoData);
// }

        

        return redirect()->back()->with('success',' Inserted Successfully');

    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $service = Service::find($id); 

        return view('admin.service.edit',compact('service'));

    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        
        $input = $request->except('_token', '_method', 'url');

        $existingrecord = Service::where('id', $id)->first();
        
        if (!$existingrecord) {
            return redirect()->back()->with('error', 'Course not found');
        }
        $cleanInput = strip_tags($input['title'] ?? '');
        $slug = Str::slug($cleanInput);
        $input['slug'] = ucfirst($slug);
        if($image = $request->file('image'))
        {
            $dest_path = 'uploads/service';

            //Unlunk the existing image if it exists

            if($existingrecord && $existingrecord->image)
            {
                $existingImagePath = $dest_path . '/' . $existingrecord->image;
                if(file_exists($existingImagePath))
                {
                    unlink($existingImagePath);
                }
            }

            // Use original name with potential conflict check
            $originalname = $image->getClientOriginalName();
            $extension = $image->getClientOriginalExtension();

             // Remove spaces, brackets, and special characters from filename
             $originalname = preg_replace('/[\s\[\]\(\)-]+/', '_', pathinfo($originalname, PATHINFO_FILENAME));
             $originalname = preg_replace('/[^a-zA-Z0-9_]/', '', $originalname); // Keeps only alphanumeric and underscores

    
            $counter = 1;
            $newfilename = $originalname . '.' . $extension;

            
            //Check if the file already exist and rename it if necessary
            while(file_exists($dest_path. '/' . $newfilename))
            {
                $newfilename = $originalname . '_' . $counter . '.' . $extension;
                $counter++;
            }
    
            // MOve the file to the destination
            $image->move($dest_path, $newfilename);

            // Store the filename in the input array
            $input['image'] = $newfilename;
        }

        Service::where('id',$id)->update($input);

         $titles2 = $request->input('more_title_old');
        if ($titles2) {
            foreach ($titles2 as $recordId5 => $title) {
                Servicemore::where('id', $recordId5)
                                ->update(['more_title' => $title]);
            }
        }
        
        
          $answers2 = $request->input('more_content_old');
        if ($answers2) {
            foreach ($answers2 as $recordId6 => $answer) {
                Servicemore::where('id', $recordId6)
                                ->update(['more_content' => $answer]);
            }
        }
        
        
        //   $icon2 = $request->input('more_icon_old');
        // if ($icon2) {
        //     foreach ($icon2 as $recordId6 => $icon) {
        //         Servicemore::where('id', $recordId6)
        //                         ->update(['more_icon' => $icon]);
        //     }
        // }
                
             // Update old images
if ($request->hasFile('more_image_old')) {
    foreach ($request->file('more_image_old') as $recordId => $image) {
        if ($image && $image->isValid()) {
            // Find the existing record
            $serviceMore = Servicemore::find($recordId);
            if ($serviceMore) {
                // Delete old image if it exists
                if ($serviceMore->more_image) {
                    $oldImagePath = public_path('uploads/service/more/' . $serviceMore->more_image);
                    if (file_exists($oldImagePath)) {
                        unlink($oldImagePath);
                    }
                }

                // Generate new filename
                $originalName = pathinfo($image->getClientOriginalName(), PATHINFO_FILENAME);
                $originalName = preg_replace('/[^a-zA-Z0-9_]/', '', str_replace(' ', '_', $originalName));
                $extension = $image->getClientOriginalExtension();

                if ($extension === 'jfif') {
                    $extension = 'jpg';
                }

                $dest_path = 'uploads/service/more';
                $newfilename = $originalName . '.' . $extension;
                $counter = 1;

                // Check for filename conflicts
                while (file_exists(public_path($dest_path . '/' . $newfilename))) {
                    $newfilename = $originalName . '_' . $counter . '.' . $extension;
                    $counter++;
                }

                // Move the uploaded file
                $image->move(public_path($dest_path), $newfilename);

                // Update database
                $serviceMore->update(['more_image' => $newfilename]);
            }
        }
    }
}
    
              
// 1. Retrieve inputs as arrays
$titles   = $request->input('more_title', []);
$contents = $request->input('more_content', []); 
// $icons    = $request->input('more_icon', []); // Changed variable name to $icons for clarity
$files    = $request->file('more_image') ?? [];

$photoData = [];

if (!empty($titles)) {
    foreach ($titles as $index => $title) {
        // Skip empty rows to prevent duplicate/empty entries
        if (empty($title) && empty($contents[$index]) && !isset($files[$index])) {
            continue;
        }

        $imageName = null;

        // Handle File Upload for this specific index
        if (isset($files[$index]) && $files[$index]) {
            $image = $files[$index];
            $dest_path = 'uploads/service/more';
            
            $originalname = pathinfo($image->getClientOriginalName(), PATHINFO_FILENAME);
            $originalname = preg_replace('/[^a-zA-Z0-9_]/', '', str_replace(' ', '_', $originalname));
            $extension = $image->getClientOriginalExtension();

            if ($extension === 'jfif') { $extension = 'jpg'; }

            $newfilename = $originalname . '.' . $extension;
            $counter = 1;

            while (file_exists(public_path($dest_path . '/' . $newfilename))) {
                $newfilename = $originalname . '_' . $counter . '.' . $extension;
                $counter++;
            }

            $image->move(public_path($dest_path), $newfilename);
            $imageName = $newfilename;
        }

        // Prepare data for this row
        $photoData[] = [
            'service_id'   => $id,
            'more_image'   => $imageName,
            'more_title'   => $title,
            'more_content' => $contents[$index] ?? null,
            // 'more_icon'    => $icons[$index] ?? null, 
            'created_at'   => now(),
            'updated_at'   => now(),
        ];
    }
}

// 2. Perform a single batch insert
if (!empty($photoData)) {
    Servicemore::insert($photoData);
}

        return redirect()->back()->with('success','Updated successfully');

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $image = Seervice::where('id', $id)->first();;

        if ($image && $image->image) {
            $existingImagePath ='uploads/service/' . $image->image;
        
            if (file_exists($existingImagePath) && !is_dir($existingImagePath)) {
                unlink($existingImagePath);
            }
        }

        Service::where('id',$id)->delete();

        return redirect()->back()->with('success',' Deleted Successfully ');


    }
//  public function destroy(string $id)
// {
//     DB::beginTransaction();

//     try {
//         // ✅ 1. Delete main destination image
//         $destination = Service::find($id);
//         if ($destination && $destination->image) {
//             $imagePath = public_path('uploads/service/' . $destination->image);
//             if (file_exists($imagePath) && !is_dir($imagePath)) {
//                 unlink($imagePath);
//             }
//         }

//         // ✅ 2. Delete "More Destinations" images and records
//         $moreDestinations = Servicemore::where('service_id', $id)->get();
//         foreach ($moreDestinations as $item) {
//             if ($item->image) {
//                 $imagePath = public_path('uploads/service/more/' . $item->more_image);
         

//                 if (file_exists($imagePath) && !is_dir($imagePath)) {
//                     unlink($imagePath);
//                 }
              
//             }

//             $item->delete();
//         }

        

//         // ✅ 6. Delete the main destination record
//         Service::where('id', $id)->delete();

//         DB::commit();
//         return redirect()->back()->with('success', 'Deleted Successfully');

//     } catch (\Exception $e) {
//         DB::rollBack();
//         return redirect()->back()->with('error', 'Failed to delete: ' . $e->getMessage());
//     }
// }



// public function delete1($id)
// {
//   $image = Servicemore::find($id);

//     if ($image && $image->more_image) {
//         $existingImagePath = public_path('uploads/service/more/' . $image->more_image);
        
//         if (file_exists($existingImagePath) && !is_dir($existingImagePath)) {
//             unlink($existingImagePath);
//         }
//     }

//     Servicemore::where('id', $id)->delete();

//     return redirect()->back()->with('success', 'Deleted Successfully');
// }


}

