<?php

declare(strict_types=1);

namespace App\Helpers;

use App\Models\User;
use App\Providers\RouteServiceProvider;

class PainelPermission
{
    public function __construct(
        public User $user,
    ) {
    }

    public function painelByPermissionUser(): string
    {
        $user = $this->user->with('permissions')->find($this->user->id);
        $permissions = $user->permissions;
        $permission = $permissions[0]['name'];

        switch ($permission) {
            case "admin":
                return RouteServiceProvider::HOME;
            case "financial":
                return RouteServiceProvider::FINANCIAL;
            case "media":
                return RouteServiceProvider::MEDIA;
            case "leader":
                return RouteServiceProvider::LEADER;
            default:
                return redirect()->back();
        }
    }
}
