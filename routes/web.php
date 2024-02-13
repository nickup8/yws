<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\SupplierController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('suppliers', [SupplierController::class, 'index'])->middleware(['auth', 'verified'])->name('suppliers.index');
Route::get('suppliers/new', [SupplierController::class, 'create'])->middleware(['auth', 'verified'])->name('suppliers.new');
Route::get('suppliers/edit/{id}', [SupplierController::class, 'edit'])->middleware(['auth', 'verified'])->name('suppliers.edit');
Route::post('suppliers/store', [SupplierController::class, 'store'])->middleware(['auth', 'verified'])->name('suppliers.store');
Route::patch('suppliers/edit/{id}', [SupplierController::class, 'update'])->middleware(['auth', 'verified'])->name('suppliers.update');
Route::get('suppliers/{id}', [SupplierController::class, 'show'])->middleware(['auth', 'verified'])->name('suppliers.show');


require __DIR__ . '/auth.php';
