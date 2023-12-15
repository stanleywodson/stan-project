<?php

namespace App\Http\Controllers\Site;

use App\Http\Controllers\Controller;
use Illuminate\Foundation\Application;
use Inertia\Inertia;

class SiteController extends Controller
{
    // will be return all datas for website
    public function __invoke()
    {
        return Inertia::render('Welcome', [
            'laravelVersion' => Application::VERSION,
            'phpVersion' => PHP_VERSION,
        ]);
    }
}
