<?php   
namespace App\Http\Controllers;

use App\Models\Service;
use App\Models\Seo;
use Illuminate\Http\JsonResponse;

class ServiceFrontController extends Controller
{
    // LIST PAGE
    public function list(): JsonResponse
    {
        $seo=Seo::find(3);
        $services = Service::select('id', 'title', 'content', 'image', 'slug')->get();

        return response()->json([
            'seo' => [
                'meta_key' => $seo->meta_key,
                'meta_title' => $seo->meta_title,
                'meta_desc' => $seo->meta_desc,
            ],
            'services' => $services->map(function ($service) {
                return [
                    'id' => $service->id,
                    'title' => $service->title,
                    'excerpt' => strip_tags($service->content),
                    'image' => $service->image ? '/uploads/service/' . $service->image : null,
                    'slug' => $service->slug,

                ];
            })
        ]);
    }

    // DETAIL PAGE
    public function show(string $slug): JsonResponse
    {
        $service = Service::where('slug', $slug)->first();
        
        if (!$service) {
            return response()->json(['error' => 'Service not found'], 404);
        }

        return response()->json([
            'service' => [
                'id' => $service->id,
                'title' => $service->title,
                'content' => $service->content,
                'image' => $service->image ? '/uploads/service/' . $service->image : null,
                'slug' => $service->slug,
                'meta_key'=>$service->meta_key,
                'meta_title'=>$service->meta_title,
                'meta_desc'=>$service->meta_desc,
            ]
        ]);
    }
}