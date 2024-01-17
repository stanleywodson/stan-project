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

Route::get('/test', fn () => 'test')->name('test');
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

        // Permission User
        //detach
        Route::get('permission-user/{user}/{permission}', [PermissionUserController::class, 'detachPermissionProfile'])
            ->name('permission-user');
        //atach
        Route::get('permission-user-atach/{user}/{permission}', [PermissionUserController::class, 'attachPermissionProfile'])
            ->name('permission-user-atach');
    });

    Route::middleware('can:leader')->group(function () {
        Route::get('leader', function () {
            return Inertia::render('Admin/Leader');
        })->name('leader.index');
    });

    //Page - WithOutPermission
    Route::get('without-permission', function () {
        return Inertia::render('Admin/WithOutPermission');
    })->name('withoutpermission');
});

// Route::fallback(function () {
//     $user = Auth::user();
//     if (!$user) {
//         return redirect()->route('home');
//     }
//     return redirect()->route('login');
// });

require __DIR__ . '/auth.php';
