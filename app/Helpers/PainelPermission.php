<?php

// declare(strict_types=1);

namespace App\Helpers;

use App\Models\User;
use App\Providers\RouteServiceProvider;

class PainelPermission
{
    public function __construct(
        public User $user,
    ) {
    }

    public function painelByPermissionUser()
    {
        $permissions = $this->user->permissions;
        if (count($permissions) > 0) {
            $permission = $permissions[0]['name'];
        } else {
            $permission = '';
        }
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
                return RouteServiceProvider::WITHOUTPERMISSION;
        }
    }
}
