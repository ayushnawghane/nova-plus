<?php

use App\Http\Controllers\Admin\AuthController;
use App\Http\Controllers\Admin\BlogController;
use App\Http\Controllers\Admin\CategoryController;
use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\EnquiryController;
use App\Http\Controllers\Admin\FaqController;
use App\Http\Controllers\Admin\MediaController;
use App\Http\Controllers\Admin\RoleController;
use App\Http\Controllers\Admin\UserController;
use Illuminate\Support\Facades\Route;

Route::prefix('admin')->name('admin.')->group(function () {
    Route::middleware('guest')->group(function () {
        Route::get('/login', [AuthController::class, 'create'])->name('login');
        Route::post('/login', [AuthController::class, 'store'])->name('login.store');
    });

    Route::middleware('auth')->group(function () {
        Route::post('/logout', [AuthController::class, 'destroy'])->name('logout');

        Route::get('/', [DashboardController::class, 'index'])->name('dashboard');

        Route::middleware('permission:blogs.view')->group(function () {
            Route::get('/blogs', [BlogController::class, 'index'])->name('blogs.index');
        });
        Route::middleware('permission:blogs.create')->group(function () {
            Route::post('/blogs', [BlogController::class, 'store'])->name('blogs.store');
        });
        Route::middleware('permission:blogs.edit')->group(function () {
            Route::put('/blogs/{blog}', [BlogController::class, 'update'])->name('blogs.update');
        });
        Route::middleware('permission:blogs.delete')->group(function () {
            Route::delete('/blogs/{blog}', [BlogController::class, 'destroy'])->name('blogs.destroy');
        });

        Route::middleware('permission:roles.manage')->group(function () {
            Route::get('/roles', [RoleController::class, 'index'])->name('roles.index');
            Route::post('/roles', [RoleController::class, 'store'])->name('roles.store');
            Route::put('/roles/{role}', [RoleController::class, 'update'])->name('roles.update');
            Route::delete('/roles/{role}', [RoleController::class, 'destroy'])->name('roles.destroy');
        });

        Route::middleware('permission:users.manage')->group(function () {
            Route::get('/users', [UserController::class, 'index'])->name('users.index');
            Route::post('/users', [UserController::class, 'store'])->name('users.store');
            Route::put('/users/{user}', [UserController::class, 'update'])->name('users.update');
            Route::delete('/users/{user}', [UserController::class, 'destroy'])->name('users.destroy');
        });

        Route::middleware('permission:categories.manage')->group(function () {
            Route::get('/categories', [CategoryController::class, 'index'])->name('categories.index');
            Route::post('/categories', [CategoryController::class, 'store'])->name('categories.store');
            Route::put('/categories/{category}', [CategoryController::class, 'update'])->name('categories.update');
            Route::delete('/categories/{category}', [CategoryController::class, 'destroy'])->name('categories.destroy');
        });

        Route::middleware('permission:media.manage')->group(function () {
            Route::get('/media', [MediaController::class, 'index'])->name('media.index');
            Route::post('/media', [MediaController::class, 'store'])->name('media.store');
            Route::delete('/media/{upload}', [MediaController::class, 'destroy'])->name('media.destroy');
        });

        Route::middleware('permission:enquiries.manage')->group(function () {
            Route::get('/enquiries', [EnquiryController::class, 'index'])->name('enquiries.index');
            Route::delete('/enquiries/{enquiry}', [EnquiryController::class, 'destroy'])->name('enquiries.destroy');
        });

        Route::middleware('permission:faqs.manage')->group(function () {
            Route::get('/faqs', [FaqController::class, 'index'])->name('faqs.index');
            Route::post('/faqs', [FaqController::class, 'store'])->name('faqs.store');
            Route::put('/faqs/{faq}', [FaqController::class, 'update'])->name('faqs.update');
            Route::delete('/faqs/{faq}', [FaqController::class, 'destroy'])->name('faqs.destroy');
        });
    });
});
