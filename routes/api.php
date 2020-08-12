<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

       
Route::prefix('auth')->group(function () {
        Route::Post('/login', 'AuthController@login');
        Route::post('logout', 'AuthController@logout');
        Route::post('refresh', 'AuthController@refresh');
        Route::post('me', 'AuthController@me');
});

Route::resource("users","Users\UserController");
