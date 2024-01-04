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
        $users = $this->user->all();
        
        return Inertia::render('Admin/User', [
            'users' => $users,
        ]);
    }
}
