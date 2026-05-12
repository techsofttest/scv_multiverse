<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Page;
use Illuminate\Support\Str;

class PageController extends Controller
{
     /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $pages =Page::all();
        return view('admin.page.index', compact('pages'));
    }

    /**
     * Show the form for editing the specified resource 
     */

     public function edit(string $id)
     {
         $page = Page::find($id);
 
         return view('admin.page.edit', compact('page'));
     }

     /**
     * Update the specified resource in  storage 
     */

     public function update(Request $request, string $id)
     {
        $updatedata = $request->except('_token','_method', '_url');

        $existingrecord = Page::where('id', $id)->first();
        

        if($image = $request->file('image'))
        {
            $dest_path = 'uploads/pages';

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
            $updatedata['image'] = $newfilename;
        }

        if($image = $request->file('image2'))
        {
            $dest_path = 'uploads/pages/more';

            //Unlunk the existing image if it exists

            if($existingrecord && $existingrecord->image2)
            {
                $existingImagePath = $dest_path . '/' . $existingrecord->image2;
                if(file_exists($existingImagePath))
                {
                    unlink($existingImagePath);
                }
            }

            // Use original name with potential conflict check
            $originalname = $image->getClientOriginalName();
            $extension = $image->getClientOriginalExtension();

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
            $updatedata['image2'] = $newfilename;
        }

       


    
        Page::where('id', $id)->update($updatedata);
        return redirect()->back()->with('success', 'Page updated successfully');

     }

      /**
     * Remove the specified resource from storage.
     */

     public function destroy(string $id)
     {
       Page::where('id',$id)->delete();
        return redirect()->back()->with('success', 'Page Deleted successfully');

     }
}
