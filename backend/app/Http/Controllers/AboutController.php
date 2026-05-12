<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Page;
use App\Models\Seo;
use App\Models\Banner;
use Illuminate\Http\JsonResponse;

class AboutController extends Controller
{
    public function index(Request $request): JsonResponse
    {
        try {
            $seo=Seo::find(2);
            $banner=Banner::find(1);
            $aboutModel = Page::where('id', 7)->first();
            
            if (!$aboutModel) {
                return response()->json([
                    'abouts' => null,
                    'why' => null,
                    'message' => 'About page data not found'
                ], 404);
            }

            $aboutData = [
                'id' => $aboutModel->id,
                'content' => $aboutModel->content,
                'cms_title' => strip_tags($aboutModel->cms_title),
                'image' => '/uploads/pages/' . $aboutModel->image,
            ];

            // Try to get "Why Choose Us" data from Page ID 8, but don't fail if it doesn't exist
            $why = Page::where('id', 8)->first();
            $whyData = null;
            
            if ($why) {
                $whyData = [
                    'id' => $why->id,
                    'content' => $why->content,
                    'cms_title' => strip_tags($why->cms_title),
                    'image' => '/uploads/pages/' . $why->image,
                ];
            }

            return response()->json([
                 'seo' => [
                'meta_key' => $seo->meta_key,
                'meta_title' => $seo->meta_title,
                'meta_desc' => $seo->meta_desc,
            ],
                'banner' => [
                    'title' => $banner->title,
                    'content' => strip_tags($banner->content),
                    'image' => '/uploads/banner/' . $banner->image,
                ],
                'abouts' => $aboutData,
                'why' => $whyData,
               
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'error' => 'Failed to fetch about data',
                'message' => $e->getMessage()
            ], 500);
        }
    }
}