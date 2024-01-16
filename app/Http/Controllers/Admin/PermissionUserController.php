<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Permission;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Response;
use Inertia\Inertia;

class PermissionUserController extends Controller
{
    public function __construct(
        private Permission $permission,
        private User $user,
    ) {
    }

    // public function permissions()
    // {
    //     $permissions = $this->permission->all(['id', 'name']);
    //     return Inertia::render('Admin/PermissionUser', [
    //         'permissions' => $permissions,
    //     ]);

    // }

    // public function permissions($idPermission): Response
    // {
    //     $user = $this->user->with('permissions')->find($idPermission);
    //     if (!$user) {
    //         return redirect()->back();
    //     }
    //     $permissions = $user->permissions;

    //     return Inertia::render('Admin/PermissionUser', [
    //         'user' => $user,
    //         'permissions' => $permissions,
    //     ]);
    // }

    // public function users($idUser): Response
    // {
    //     $permission = $this->permission->with('users')->find($idUser);
    //     if (!$permission) {
    //         return redirect()->back();
    //     }
    //     $users = $permission->users;

    //     return Inertia::render('Admin/PermissionUser', [
    //         'permission' => $permission,
    //         'users' => $users,
    //     ]);
    // }
    public function permissionsAvailable($idUser)
    {
        if (!$user = $this->user->find($idUser))
            return redirect()->back();

        $permissions = $user->permissionsAvailable();

        // return Inertia::render('Admin/PermissionUser', [
        //     'users' => $users,
        //     'permission' => $permissions,
        // ]);
    }
    //-------------------------------

    //vincular uma ou mais  permissões a certo perfil
    public function attachPermissionProfile(Request $request, $idProfile)
    {
        if (!$profile = $this->profile->with('permissions')->find($idProfile))
            return redirect()->back();

        if (!$request->permissions || count($request->permissions) == 0) {
            return redirect()->back()->with('error', 'Checkbox vazio');
        }

        $profile->permissions()->attach($request->permissions);
        return redirect()->route('profiles.permissions', $profile->id)->with('permissions', 'Viculado com sucesso!');
    }
    //desvincular uma ou mais permissões ao perfis
    public function detachPermissionProfile($idUser, $idPermission)
    {
        $user = $this->user->find($idUser);

        $permission = $this->permission->find($idPermission);

        if (!$user || !$permission)
            return redirect()->back();

        $user->permissions()->detach($permission);
        // return redirect()->route('profiles.permissions', $profile->id);
        return redirect()->route('users.index');

    }
}
