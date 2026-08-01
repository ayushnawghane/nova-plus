<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', fn () => Inertia::render('Home'))
    ->name('home');

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

Route::get('/contact-us', fn () => Inertia::render('ContactUs'))
    ->name('contact-us');

Route::get('/insights', fn () => Inertia::render('Insights'))
    ->name('insights');
