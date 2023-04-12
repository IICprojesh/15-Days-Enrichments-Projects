<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\RegisterController;
use App\Http\Controllers\SessionsController;
use App\Http\Controllers\CommentController;
use App\Http\Controllers\NewsletterController;
use App\Http\Controllers\PetrolumController;

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


Route::get('/', [PostController::class, 'index'])->name('home');


Route::get('posts/{post:slug}', [PostController::class, 'show']);
Route::post('posts/{post:slug}/comments', [CommentController::class, 'store']);

Route::post('newsletter', NewsletterController::class);

Route::get('register', [RegisterController::class, 'create'])->middleware('guest');
Route::post('registers', [RegisterController::class, 'store'])->middleware('guest');

Route::get('login', [SessionsController::class, 'create'])->middleware('guest');
Route::post('sessions', [SessionsController::class, 'store'])->middleware('guest');

Route::post('logout', [SessionsController::class, 'destroy'])->middleware('auth');

//Admin
    //if the routes within the same controller contains all seven functions, can resolve into code below
    //Route::resource('admin/posts', AdminController::class)->except('show');

Route::get('admin/posts/create', [AdminController::class, 'create']);
Route::post('admin/posts', [AdminController::class, 'store']);

Route::get('admin/posts', [AdminController::class, 'index']);
Route::get('admin/posts/{post}/edit', [AdminController::class, 'edit']);

Route::patch('admin/posts/{post}', [AdminController::class, 'update']);
Route::delete('admin/posts/{post}', [AdminController::class, 'destory']);







