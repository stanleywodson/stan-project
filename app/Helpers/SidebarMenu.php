<?php

namespace App\Helpers;

use App\Models\Permission;

class SidebarMenu
{
    public static function getMenuItems(): array
    {
        $user = auth()->user();
        $userPermission = Permission::getPermissionsName($user);

        $menuItems = [];
        foreach ($userPermission as $key => $_) {
            if ($key === 'admin') {
                $menuItems = [
                    ...$menuItems,
                    [
                        'title' => 'Administração',
                        'items' => [
                            [
                                'label' => 'Permissões',
                                'url' => 'dashboard',
                                'icon' => 'dashboard'
                            ],
                            [
                                'label' => 'Usuários',
                                'url' => 'users.index',
                                'icon' => 'users'
                            ],
                        ],
                    ]
                ];
            }
            // LEADER
            if ($key === 'leader') {
                $menuItems = [
                    ...$menuItems,
                    [
                        'title' => 'Líder',
                        'items' => [
                            [
                                'label' => 'discipulos',
                                'url' => 'leader.index',
                                'icon' => 'dashboard'
                            ],
                        ],
                    ]
                ];
            }
            // FINANCIAL
            if ($key === 'financial') {
                $menuItems = [
                    ...$menuItems,
                    [
                        'title' => 'Financeiro',
                        'items' => [
                            [
                                'label' => 'Dizimo',
                                'url' => 'financial.index',
                                'icon' => 'dashboard'
                            ],
                            [
                                'label' => 'Oferta',
                                'url' => 'financial.create',
                                'icon' => 'dashboard'
                            ],
                        ],
                    ],
                ];
            }
            if ($key === 'media') {
                $menuItems = [
                    ...$menuItems,
                    [
                        'title' => 'Mídia',
                        'items' => [
                            [
                                'label' => 'Dashboard',
                                'url' => 'dashboard',
                                'icon' => 'dashboard'
                            ]
                        ]
                    ]
                ];
            }
        }
        return $menuItems;
    }
}
