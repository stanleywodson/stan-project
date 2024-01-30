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
                                'label' => 'Dashboard',
                                'url' => 'dashboard',
                                'icon' => 'users'
                            ],
                            [
                                'label' => 'Permissões',
                                'url' => 'users.index',
                                'icon' => 'users'
                            ],
                            [
                                'label' => 'Células',
                                'url' => 'test',
                                'icon' => 'users'
                            ],
                            [
                                'label' => 'Palavra de Célula',
                                'url' => 'wordcell.index',
                                'icon' => ''
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
                                'label' => 'célula',
                                'url' => 'leader.index',
                                'icon' => 'dashboard'
                            ],
                            [
                                'label' => 'estudo',
                                'url' => 'test',
                                'icon' => 'dashboard'
                            ],
                            [
                                'label' => 'membros',
                                'url' => 'test',
                                'icon' => 'dashboard'
                            ],
                            [
                                'label' => 'discipulado',
                                'url' => 'test',
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
                            [
                                'label' => 'Encontro com Deus',
                                'url' => 'test',
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
