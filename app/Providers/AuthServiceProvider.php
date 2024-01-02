<?php

namespace App\Providers;

// use Illuminate\Support\Facades\Gate;

use App\Models\User;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Gate;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The model to policy mappings for the application.
     *
     * @var array<class-string, class-string>
     */
    protected $policies = [
        //
    ];

    /**
     * Register any authentication / authorization services.
     */
    public function boot(): void
    {
        Gate::define('admin', function (User $user) {
            return $user->hasPermission('admin');
        });

        Gate::define('financial', function (User $user) {
            return $user->hasPermission('financial');
        });

        Gate::define('media', function (User $user) {
            return $user->hasPermission('media');
        });

        Gate::define('leader', function (User $user) {
            return $user->hasPermission('leader');
        });
    }
}
