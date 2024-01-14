<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class UserController extends Controller
{
    public function __construct(
        public User $user,
    )
    { }

    public function index()
    {
        $users = $this->user->with('permissions:id,name')->paginate(10);

        return Inertia::render('Admin/User', [
            'users' => $users,
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
