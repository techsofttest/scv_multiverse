<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});
// This disables the registration functionality entirely
Route::get('/admin/dashboard', function () {
    return view('admin.dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::prefix('admin')->middleware('auth')->group(function(){
        Route::resource('contact',App\Http\Controllers\Admin\ContactController::class);
        Route::resource('page',App\Http\Controllers\Admin\PageController::class);
        Route::resource('seo',App\Http\Controllers\Admin\SeoController::class);
        Route::resource('service',App\Http\Controllers\Admin\ServiceController::class);
        Route::resource('gallery',App\Http\Controllers\Admin\GalleryController::class);
        Route::resource('banner',App\Http\Controllers\Admin\BannerController::class);
        Route::get('change-password', [App\Http\Controllers\Admin\ChangePasswordController::class, 'index'])->name('change-password');
        Route::post('update-password',[App\Http\Controllers\Admin\ChangePasswordController::class,'update_password'])->name('update-password');
        Route::get('service/delete1/{id}', [App\Http\Controllers\Admin\ServiceController::class, 'delete1'])->name('delete.moreimage');
       
    });
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});
    Route::post('/ckeditor/upload', [CKEditorController::class, 'upload'])->name('ckeditor.upload');
require __DIR__.'/auth.php';
