<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Service; // <--- Add this import
use App\Models\Contact;
class LayoutController extends Controller
{
    public function getLayoutData()
{
    try {
        $services = Service::all()->map(function($service) {
            return [
                'id' => $service->id,
                'title' => $service->title,
                'slug' => $service->slug,
                'description' => strip_tags($service->content),
                'image' => $service->image ? '/uploads/service/' . $service->image : null,
            ];
        });

        // Get the primary contact record
        $contactData = Contact::first();

        return response()->json([
            'services' => $services,
            'contacts' => $contactData, // Match frontend expectations
        ]);
    } catch (\Exception $e) {
        return response()->json(['error' => 'Data not found'], 500);
    }
}
}