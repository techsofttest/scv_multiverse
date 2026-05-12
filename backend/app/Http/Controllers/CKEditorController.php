<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class CKEditorController extends Controller
{
    public function upload(Request $request)
    {
        if ($request->hasFile('upload')) {
            $file = $request->file('upload');
            $filename = time() . '_' . $file->getClientOriginalName();
            $destinationPath = public_path('uploads/ckeditor');
            
            // Ensure the directory exists
            if (!file_exists($destinationPath)) {
                mkdir($destinationPath, 0755, true);
            }
            
            // Move the file to the public/uploads directory
            $file->move($destinationPath, $filename);

            $url = asset('uploads/ckeditor/' . $filename);

            return response()->json([
                'uploaded' => true,
                'url' => $url,
            ]);
        }



        return response()->json(['uploaded' => false]);
    }

    public function uploadVideo(Request $request)
    {

    if ($request->hasFile('upload')) {
        $file = $request->file('upload');
        $filename = time() . '_' . $file->getClientOriginalName();

        // Determine folder based on MIME type
        $isVideo = str_starts_with($file->getMimeType(), 'video/');
        $folder = $isVideo ? 'uploads/ckeditor/videos' : 'uploads/ckeditor';

        $destinationPath = public_path($folder);

        if (!file_exists($destinationPath)) {
            mkdir($destinationPath, 0755, true);
        }

        $file->move($destinationPath, $filename);

        return response()->json([
            'uploaded' => true,
            'url' => asset($folder . '/' . $filename),
        ]);
    }

    return response()->json(['uploaded' => false]);
}
      
}

