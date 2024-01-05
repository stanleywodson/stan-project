<?php

use App\Http\Controllers\Admin\{
    FinancialController,
    PermissionUserController,
    UserController
};
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\Site\SiteController;
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
    Route::resource('/financial', FinancialController::class)->middleware('can:financial');

    Route::middleware('can:admin')->group(function () {
        //Users
        Route::get('users', [UserController::class, 'index'])->name('users.index');

        //User - Permissions
        Route::get('user-permission/{id}', [PermissionUserController::class, 'permissions'])
            ->name('user-permission');
        Route::get('permission-user/{permission}', [PermissionUserController::class, 'users'])
            ->name('permission-user');
    });

    Route::middleware('can:leader')->group(function () {
        Route::get('leader', function () {
            return Inertia::render('Admin/Leader');
        })->name('leader.index');
    });
});

// Route::fallback(function () {
//     $user = Auth::user();
//     if (!$user) {
//         return redirect()->route('home');
//     }
//     return redirect()->route('login');
// });

require __DIR__ . '/auth.php';
