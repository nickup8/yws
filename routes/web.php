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
    Route::get('/machines', [MachineController::class, 'index'])->name('machines.index');
    Route::get('/machines/new', [MachineController::class, 'create'])->name('machines.create');
    Route::post('/machines', [MachineController::class, 'store'])->name('machines.store');
    Route::get('/machines/{machine}/edit', [MachineController::class, 'edit'])->name('machines.edit');
    Route::put('/machines/{machine}', [MachineController::class, 'update'])->name('machines.update');
    Route::delete('/machines/{machine}', [MachineController::class, 'destroy'])->name('machines.destroy');
    Route::get('/machines/settings', [MachineController::class, 'settings_index'])->name('machines.settings');

    Route::get('/storages_feeding', [StorageFeedingController::class, 'index'])->name('storages_feeding.index');
    Route::get('/storages_feeding/new', [StorageFeedingController::class, 'create'])->name('storages_feeding.create');
    Route::post('/storages_feeding', [StorageFeedingController::class, 'store'])->name('storages_feeding.store');
    Route::get('/storages_feeding/{storage_feeding}/edit', [StorageFeedingController::class, 'edit'])->name('storages_feeding.edit');
    Route::put('/storages_feeding/{storage_feeding}', [StorageFeedingController::class, 'update'])->name('storages_feeding.update');
    Route::delete('/storages_feeding/{storage_feeding}', [StorageFeedingController::class, 'destroy'])->name('storages_feeding.destroy');
});





require __DIR__.'/auth.php';
