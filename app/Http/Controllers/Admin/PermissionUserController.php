<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Permission;
use App\Models\User;
use Illuminate\Http\RedirectResponse;

class PermissionUserController extends Controller
{
    public function __construct(
        private readonly Permission $permission,
        private readonly User $user,
    ) {
    }

    //vincular uma ou mais  permissões a certo perfil
    public function attachPermissionProfile($idUser, $idPermission): RedirectResponse
    {
        $permission = $this->permission->find($idPermission);
        $user = $this->user->find($idUser);

        if (!$this->user->with('permissions')->find($idUser))
            return redirect()->back();

        $user->permissions()->attach($idPermission);

        return redirect()
            ->route('users.index')
            ->with('attach', "Permissão $permission->name foi vinculada ao $user->name");
    }
    //desvincular uma ou mais permissões ao perfis
    public function detachPermissionProfile($idUser, $idPermission): RedirectResponse
    {
        $user = $this->user->find($idUser);

        $permission = $this->permission->find($idPermission);

        if (!$user || !$permission)
            return redirect()->back();

        $user->permissions()->detach($permission);

        return redirect()
            ->route('users.index')
            ->with('detach', "Permissão $permission->name foi desvinculada ao $user->name");
    }
}
