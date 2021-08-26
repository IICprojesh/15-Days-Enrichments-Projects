<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;

class SessionsController extends Controller
{

    public function create()
    {
        return view('sessions.create');
    }

    public function store()
    {
        //validate  the request
        $attributes = request()->validate([
            'email' => 'required|exists:users,email',
            'password' => 'required'
        ]);

        //attempt to authenticate and log in the user
        //based on the provided credentials
        if(! Auth::attempt($attributes))
        {
            //throwing exception 
            throw ValidationException::withMessages([
                'email' => 'Your provided credentials could not be verified.'
            ]);
        }
        
         //redirect with a success flash message
         session()->regenerate();
         return redirect('/')->with('success', 'Welcome Back!');

        //auth failed
        // return back()
        //     ->withInput()
        //     ->withErrors(['email' => 'Your provided credentials could not be verified.']); //
    }

    public function destroy()
    {
        Auth::logout();

        return redirect('/')->with('success','GoodBye!!');
    }
}
