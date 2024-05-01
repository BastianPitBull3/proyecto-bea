<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\viewsController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('index');
});

Route::get('/manage', [viewsController::class, 'gestion'])->name('gestion');
Route::get('/transactions', [viewsController::class, 'transacciones'])->name('transacciones');
Route::get('/config', [viewsController::class, 'config'])->name('config');