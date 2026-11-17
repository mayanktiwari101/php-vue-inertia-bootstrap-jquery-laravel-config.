<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {

    return Inertia::render('Home', [
        'message' => 'Vue, Inertia and Bootstrap are working!'
    ]);

});