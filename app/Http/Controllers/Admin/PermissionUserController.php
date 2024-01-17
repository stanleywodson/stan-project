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

    //vincular uma ou mais  permissões a certo perfil
    public function attachPermissionProfile($idUser, $idPermission)
    {
        $permission = $this->permission->find($idPermission);
        $user = $this->user->find($idUser);

        if (!$this->user->with('permissions')->find($idUser))
            return redirect()->back();

        $user->permissions()->attach($idPermission);

        return redirect()
            ->route('users.index')
            ->with('attach', "Permissão {$permission->name} foi vinculada ao {$user->name}");
    }
    //desvincular uma ou mais permissões ao perfis
    public function detachPermissionProfile($idUser, $idPermission)
    {
        $user = $this->user->find($idUser);

        $permission = $this->permission->find($idPermission);

        if (!$user || !$permission)
            return redirect()->back();

        $user->permissions()->detach($permission);

        return redirect()->route('users.index');
    }
}
