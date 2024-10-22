<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PostController;
Route::get('/', function () {
    return view('welcome');
});


// Route::get('posts', [PostController::class, 'index']);
// Route::post('posts', [PostController::class, 'store']);
// Route::delete('posts/{id}', [PostController::class, 'destroy']);
// Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
