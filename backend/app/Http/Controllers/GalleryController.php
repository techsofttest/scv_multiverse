<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Gallery;
use App\Models\Seo;
use App\Models\Banner;
use Illuminate\Http\JsonResponse;

class GalleryController extends Controller
{
    public function index(): JsonResponse
    {
        try {
            $seo=Seo::find(4);
            $banner=Banner::find(2);
            $gallery = Gallery::latest()->get()->map(function ($item) {
                return [
                    'id' => $item->id,
                    'title' => $item->title,
                    'location'=>$item->location,
                    'image' => '/uploads/gallery/' . $item->image,
                ];
            });

            return response()->json([
                'seo' => [
                        'meta_title' => $seo->meta_title,
                        'meta_desc' => $seo->meta_desc,
                        'meta_key' => $seo->meta_key,
                    ],
                'gallery' => $gallery,
                'banner' => [
                    'title' => $banner->title,
                    'content' => strip_tags($banner->content),
                    'image' => '/uploads/banner/' . $banner->image,
                ],
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'error' => 'Failed to fetch gallery',
                'message' => $e->getMessage()
            ], 500);
        }
    }
}
