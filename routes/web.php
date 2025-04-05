<?php

use App\Http\Controllers\ListCars;
use App\Http\Controllers\ListDogs;
use Illuminate\Support\Facades\Route;

Route::get('/api/dogs', ListDogs::class);
Route::get('/api/cars', ListCars::class);

Route::fallback(function () {
    return view('welcome');
});
