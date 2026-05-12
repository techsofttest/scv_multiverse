<?php

namespace App\Http\Controllers\Admin;
use App\Http\Controllers\Controller;

use App\Models\Banner;
use Illuminate\Http\Request;

class BannerController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $banner=Banner::get();
        return view('admin.banner.index',compact('banner'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return view('admin.banner.create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
         $input=$request->except('_token','_url', '_method');

        if($image = $request->file('image'))
        {
            $dest_path = 'uploads/banner';

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

        Banner::create($input);

        return redirect()->back()->with('success',' Inserted Successfully');
    }

    /**
     * Display the specified resource.
     */
    public function show(Banner $banner)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $banner=Banner::where('id',$id)->first();
        return view('admin.banner.edit',compact('banner'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
         $input = $request->except('_token', '_method', 'url');

        $existingrecord = Banner::where('id', $id)->first();
        

        if($image = $request->file('image'))
        {
            $dest_path = 'uploads/banner';

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

        Banner::where('id',$id)->update($input);

        return redirect()->back()->with('success','Updated successfully');

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $image=Banner::where('id',$id)->first();
        if ($image && $image->image) {
            $existingImagePath ='uploads/banner/' . $image->image;
        
            if (file_exists($existingImagePath) && !is_dir($existingImagePath)) {
                unlink($existingImagePath);
            }
        }

        Banner::where('id',$id)->delete();
        return redirect()->back()->with('success',' Deleted Successfully ');
    }
}
