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

    public function permissions($idPermission): Response
    {
        $user = $this->user->with('permissions')->find($idPermission);
        if (!$user) {
            return redirect()->back();
        }
        $permissions = $user->permissions;

        return Inertia::render('Admin/PermissionUser', [
            'user' => $user,
            'permissions' => $permissions,
        ]);
    }

    public function users($idUser): Response
    {
        $permission = $this->permission->with('users')->find($idUser);
        if (!$permission) {
            return redirect()->back();
        }
        $users = $permission->users;

        return Inertia::render('Admin/PermissionUser', [
            'permission' => $permission,
            'users' => $users,
        ]);
    }
    //-------------------------------
    public function permissionsAvailable($idProfile)
    {
        if (!$profile = $this->profile->find($idProfile))
            return redirect()->back();

        $permissions = $profile->permissionsAvailable();

        return view('admin.pages.profiles.permissions.available', compact('profile', 'permissions'));
    }

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
    public function detachPermissionProfile($idProfile, $idPermission)
    {
        $profile = $this->profile->find($idProfile);

        $permission = $this->permission->find($idPermission);

        if (!$profile || !$permission)
            return redirect()->back();

        $profile->permissions()->detach($permission);
        return redirect()->route('profiles.permissions', $profile->id);
    }
}
