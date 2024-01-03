<?php

namespace App\Listeners;

use App\Models\User;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;

class SetLeaderPermisison
{
    /**
     * Create the event listener.
     */
    public function __construct() {

    }

    public function handle(object $event): void
    {
        $event->user->permissions()->attach(4);
    }
}
