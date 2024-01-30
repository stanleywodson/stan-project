<?php

namespace App\Http\Middleware;

use App\Helpers\SidebarMenu;
use Illuminate\Http\Request;
use Inertia\Middleware;
use Tightenco\Ziggy\Ziggy;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     */
    public function version(Request $request): string|null
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        return [
            ...parent::share($request),
            'auth' => [
                'user' => $request->user(),
                'countUserWithoutPermission' => $request->user() ? $request->user()->countUserWithoutPermission() : '',
            ],

            'flash' => [
                'attach' => fn () => $request->session()->get('attach'),
                'detach' => fn () => $request->session()->get('detach'),
                'wordcellMessage' => fn () => $request->session()->get('successWordcell')
            ],

            'sidebarMenus' => fn () => $request->user() ? SidebarMenu::getMenuItems() : [],

            'ziggy' => fn () => [
                ...(new Ziggy)->toArray(),
                'location' => $request->url(),
            ],
        ];
    }
}
