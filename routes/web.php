<?php

use App\Http\Controllers\Admin\FinancialController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\Site\SiteController;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::get('/', SiteController::class)->name('home');

Route::get('/admin/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

// Route Admin
Route::middleware('auth')->prefix('admin')->group(function () {
    //Profile
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    //Financial
    Route::resource('/financial', FinancialController::class);
});

Route::fallback(function () {
    $user = Auth::user();
    if (!$user) {
        return redirect()->route('home');
    }
    return redirect()->route('login');
});

require __DIR__.'/auth.php';
