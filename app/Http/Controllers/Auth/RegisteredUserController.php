<?php

namespace App\Http\Controllers\Auth;

use App\Helpers\PainelPermission;
use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Inertia\Inertia;
use Inertia\Response;

class RegisteredUserController extends Controller
{
    /**
     * Display the registration view.
     */
    public function create(): Response
    {
        return Inertia::render('Auth/Register');
    }

    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request): RedirectResponse
    {
        $request->validate(
            [
                'name' => 'required|string|max:255',
                'email' => 'required|string|lowercase|email|max:255|unique:' . User::class,
                'cpf' => 'required|cpf|unique:' . User::class,
                'birth' => 'required|date',
                'gender' => 'required|string',
                'address.cep' => 'required|string',
                'address.city' => 'required|string',
                'address.neighborhood' => 'required|string',
                'address.phone' => 'required|string',
                'address.number' => 'required|string',
                'password' => ['required', 'confirmed', Rules\Password::defaults()],
            ]
        );

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'cpf' => $request->cpf,
            'password' => Hash::make($request->password),
        ]);

        event(new Registered($user));

        Auth::login($user);
        return redirect(PainelPermission::painelByPermissionUser());
    }
}
