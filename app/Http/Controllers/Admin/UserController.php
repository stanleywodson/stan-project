<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Permission;
use App\Models\User;
use Inertia\Inertia;

class UserController extends Controller
{
    public function __construct(
        public User $user,
    )
    { }

    public function index()
    {
        $users = $this->user->with('permissions:id,name')->paginate(10);
        $permissions = Permission::all(['id', 'name']);

        return Inertia::render('Admin/User', [
            'users' => $users,
            'permissions' => $permissions,
        ]);
    }
    //--- Estou usando um find no Front-End para retornar esse Usuário ----->
    // public function show(User $user)
    // {
    //     $permissions = $user->permissions()->pluck('name');

    //     return Inertia::render('Admin/User', [
    //         'user' => $user,
    //         'permission' => $permissions,
    //     ]);

    // }
}
