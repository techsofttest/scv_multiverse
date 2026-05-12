<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Seo;



class SeoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $seo = Seo::all();
        return view('admin.seo.index', compact('seo'));
    }

     /**
     * Show the form for editing the specified resource 
     */

     public function edit(string $id)
     {
        $seo = Seo::find($id);
        return view('admin.seo.edit', compact('seo'));
     }

     /**
     * Update the specified resource in  storage 
     */

     public function update(Request $request, string $id)
     {
        $input = $request->except('_token','_method', '_url');
        Seo::where('id',$id)->update($input);
        return redirect()->back()->with('success','Updated Successfully');

     }

   //   public function destroy(string $id)
   //   {
   //      DB::table('seo')->where('id',$id)->delete();
   //      return redirect()->back()->with('success','Product Deleted Successfully');

   //   } 
}
