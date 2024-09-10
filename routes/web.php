<?php

use App\Http\Controllers\MachineController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\StorageFeedingController;
use App\Http\Controllers\SupplierController;
use App\Http\Controllers\UserController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});



Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});
Route::group(['middleware' => ['auth', 'role:Логистика|Администратор|Инженер-технолог']], function () {
    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');


    Route::get('/users', [UserController::class, 'index'])->name('users.index');
    Route::get('/users/new', [UserController::class, 'create'])->name('users.create');

});

Route::group(['middleware' => ['auth', 'role:Администратор|Логистика']], function () {
    Route::resource('suppliers', SupplierController::class);
});

Route::group(['middleware' => ['auth', 'role:Администратор|Инженер-технолог']], function () {
    Route::resource('machines', MachineController::class);
    Route::get('/machines/{machine}/settings', [MachineController::class, 'settings_index'])->name('machines.settings');

    Route::resource('storages_feeding', StorageFeedingController::class);
});





require __DIR__.'/auth.php';
