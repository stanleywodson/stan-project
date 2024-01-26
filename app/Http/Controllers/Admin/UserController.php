<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Permission;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Database\Eloquent\Builder;
use Inertia\Inertia;
use Inertia\Response;

class UserController extends Controller
{
    public function __construct(
        public User $user,
    ) {
    }

    public function index(Request $request): Response
    {
        $users = User::search($request->search)
            ->query(fn (Builder $query) => $query->with('permissions:id,name'))
            ->orderBy('created_at', 'desc')
            ->paginate(5)
            ->appends('query', null)->withQueryString();

        // $users = $this->user->with('permissions')->paginate(5);

        $permissions = Permission::all(['id', 'name']);

        return Inertia::render('Admin/User', [
            'users' => $users,
            'permissions' => $permissions,
            'resultSearch' => $request->search ?? '',
        ]);
    }
}
