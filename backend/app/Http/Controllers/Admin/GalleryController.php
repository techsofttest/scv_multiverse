<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Gallery;

class GalleryController extends Controller
{

    public function index()
    {
        $gal= Gallery::all();

        return view('admin.gallery.index',compact('gal'));

    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
                    

        return view('admin.gallery.create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $input=$request->except('_token','_url', '_method');

        if($image = $request->file('image'))
        {
            $dest_path = 'uploads/gallery';


            

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

        Gallery::create($input);

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
        $gallery = Gallery::find($id); 

        return view('admin.gallery.edit',compact('gallery'));

    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        
        $input = $request->except('_token', '_method', 'url');

        $existingrecord = Gallery::where('id', $id)->first();
        

        if($image = $request->file('image'))
        {
            $dest_path = 'uploads/gallery';

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

       



        Gallery::where('id',$id)->update($input);

        return redirect()->back()->with('success','Updated successfully');

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $image = Gallery::where('id', $id)->first();;

        if ($image && $image->image) {
            $existingImagePath ='uploads/gallery/' . $image->image;
        
            if (file_exists($existingImagePath) && !is_dir($existingImagePath)) {
                unlink($existingImagePath);
            }
        }

        Gallery::where('id',$id)->delete();

        return redirect()->back()->with('success',' Deleted Successfully ');


    }
}


