<?php

use App\Http\Controllers\BlogController;
use App\Http\Controllers\ContactController;
use App\Models\Faq;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', fn () => Inertia::render('Home', [
    'faqs' => Faq::active()->orderBy('sort_order')->orderBy('id')->get(['question', 'answer']),
]))->name('home');

Route::get('/blog', [BlogController::class, 'index'])
    ->name('blog.index');

Route::get('/blog/{slug}', [BlogController::class, 'show'])
    ->name('blog.show');

Route::get('/about-us', fn () => Inertia::render('AboutUs'))
    ->name('about-us');

Route::get('/services', fn () => Inertia::render('Services/Index'))
    ->name('services');

Route::get('/services/esg-carbon-market', fn () => Inertia::render('Services/EsgCarbonMarket'))
    ->name('services.esg-carbon-market');

Route::get('/services/corporate-training', fn () => Inertia::render('Services/CorporateTraining'))
    ->name('services.corporate-training');

Route::get('/services/learning-management-system', fn () => Inertia::render('Services/LearningManagementSystem'))
    ->name('services.lms');

Route::get('/contact-us', [ContactController::class, 'index'])
    ->name('contact-us');

Route::post('/contact-us', [ContactController::class, 'store'])
    ->name('contact-us.store');

Route::get('/insights', fn () => Inertia::render('Insights'))
    ->name('insights');

require __DIR__.'/admin.php';
