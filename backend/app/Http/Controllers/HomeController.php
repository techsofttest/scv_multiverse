<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use App\Models\Page;
use App\Models\Seo;
use App\Models\Gallery;
use App\Models\Service;

class HomeController extends Controller
{
   public function index(): JsonResponse
{
    $seo=Seo::find(1);
    // 1. Fetch Metrics (Collection)
    $pages = Page::whereIn('id', [1, 2, 3, 4])->get()->map(function ($metric) {
        return [
            'id' => $metric->id,
            'content' => strip_tags($metric->content), 
            'cms_title' => strip_tags($metric->cms_title),
        ];
    });

    // 2. Fetch Services (Collection)
    $services = Service::latest()->take(4)->get()->map(function ($service) {
        return [
            'id' => $service->id,
            'title' => $service->title,     
            'description' => \Illuminate\Support\Str::limit(strip_tags($service->content), 150),
            'image' => '/uploads/service/' . $service->image,
            'link' => '/contact'
        ];
    });

    // 3. Fetch About (Single Model - FIXED)
    $aboutModel = Page::find(5);
    $aboutData = null;

    if ($aboutModel) {
        $aboutData = [
            'id' => $aboutModel->id,
            'content' => strip_tags($aboutModel->content), 
            'cms_title' => strip_tags($aboutModel->cms_title),
            'image' => '/uploads/pages/' . $aboutModel->image, 
        ];
    }
    $gallery = Gallery::latest()->take(6)->get()->map(function ($gal) {
        return [
            'id' => $gal->id,
            'title' => $gal->title,     
            'location' => $gal->location,
            'image' => '/uploads/gallery/' . $gal->image,
        ];
    });
    $contactModel = Page::where('id', 6)->first(); 
    $contactData = null;

    if ($contactModel) {
        $contactData = [
            'id' => $contactModel->id,
            'cms_title' => strip_tags($contactModel->cms_title), 
            'content' => strip_tags($contactModel->content),
            'image' => '/uploads/pages/' . $contactModel->image,
        ];
    }

    return response()->json([
        'seo' => [
            'meta_key' => $seo->meta_key,
            'meta_title' => $seo->meta_title,
            'meta_desc' => $seo->meta_desc,
        ],
        'pages' => $pages,
        'services' => $services,
        'abouts' => $aboutData,
        'gallery' => $gallery,
        'contact' => $contactData, // Sending single object
    ]);
}
public function terms(): JsonResponse
{
    $seo = Seo::find(6);

    if (!$page) {
        return response()->json(['error' => 'Terms and Conditions page not found'], 404);
    }

    return response()->json([
        'seo' => [
            'meta_key' => $seo->meta_key,
            'meta_title' => $seo->meta_title,
            'meta_desc' => $seo->meta_desc,
        ],
    ]);
}
public function privacy(): JsonResponse
{
    $seo = Seo::find(7);
    $page = Page::find(8);

    if (!$page) {
        return response()->json(['error' => 'Privacy Policy page not found'], 404);
    }

    return response()->json([
        'seo' => [
            'meta_key' => $seo->meta_key,
            'meta_title' => $seo->meta_title,
            'meta_desc' => $seo->meta_desc,
        ],
        'privacy' => [
            'id' => $page->id,
            'cms_title' => strip_tags($page->cms_title),
            'content' => strip_tags($page->content),
            'image' => '/uploads/pages/' . $page->image,
        ]
    ]);
}
public function cookiePolicy(): JsonResponse
{
    $seo = Seo::find(8);
    $page = Page::find(9);

    if (!$page) {
        return response()->json(['error' => 'Cookie Policy page not found'], 404);
    }

    return response()->json([
        'seo' => [
            'meta_key' => $seo->meta_key,
            'meta_title' => $seo->meta_title,
            'meta_desc' => $seo->meta_desc,
        ],
        'cookiePolicy' => [
            'id' => $page->id,
            'cms_title' => strip_tags($page->cms_title),
            'content' => strip_tags($page->content),
            'image' => '/uploads/pages/' . $page->image,
        ]
    ]);
}
}