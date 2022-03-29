<?php

namespace App\Http\Controllers\Api\V1\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\UserStoreRequest;
use Symfony\Component\HttpFoundation\JsonResponse;
use App\Models\User;
use Illuminate\Auth\Events\Registered;

class RegisterController extends Controller
{

        /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest');
    }

    protected $redirectTo = '/verify';


    /**
     * Create a new user instance after a valid registration.
     *
     * @param  array  $data
     * @return \App\Models\User
     */

    protected function register(UserStoreRequest $request)
    {
        $validated = $request->validated();
        $ip        = $request->getClientIp();

        $user = User::create([
            'first_name' => $validated['first_name'],
            'last_name' => $validated['last_name'],
            'email' => $validated['email'],
            'password' => $validated['password'],
            'ip_address' => $request->getClientIp(),
        ]);

        event(new Registered($user));
        
        return $request->wantsJson() 
            ? new JsonResponse("User has been registered.", 200)
            : redirect($this->redirectPath());
    }













    
}
