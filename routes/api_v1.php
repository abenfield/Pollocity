<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

/* User Routes */
/*====================*/

/* Register User */
Route::post('/users', 'Auth\RegisterController@register');

/* Login User */
Route::post('/user/login', 'Auth\LoginController@login');

/* Logout User */
Route::post('/user/logout', 'Auth\LoginController@logout');


/* Verfication Routes */
/*====================*/
/* Verify Reminder */
Route::get('/verify', 'Auth\VerificationController@reminder')
    ->middleware('auth')->name('verification.notice');

/* Verify Verification Email */
Route::get('/verify/{id}/{hash}','Auth\VerificationController@verify')
    ->middleware(['signed'])->name('verification.verify');

/* Resend Verification Email */
Route::post('/verify/resend', 'Auth\VerificationController@resend');


/* Ping Routes */
/*====================*/
Route::get('/ping', 'PingController@ping')->middleware('verified');;
