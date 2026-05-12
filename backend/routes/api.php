<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\AboutController;
use App\Http\Controllers\LayoutController;
use App\Http\Controllers\GalleryController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\ServiceFrontController;

Route::get('/layout-data', [LayoutController::class, 'getLayoutData']);

Route::get('/contact', [ContactController::class, 'getInfo']);
Route::post('/contact-submit', [ContactController::class, 'submitForm']);

// Add these routes
Route::get('/pages', [HomeController::class, 'index']);
Route::get('/about', [AboutController::class, 'index']);
Route::get('/gallery', [GalleryController::class, 'index']);
Route::get('/services', [ServiceFrontController::class, 'list']);
Route::get('/services/{slug}', [ServiceFrontController::class, 'show']);
Route::get('/terms', [HomeController::class, 'terms']);
Route::get('/privacy', [HomeController::class, 'privacy']);
Route::get('/cookie-policy', [HomeController::class, 'cookiePolicy']);