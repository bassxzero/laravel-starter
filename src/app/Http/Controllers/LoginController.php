<?php

namespace App\Http\Controllers;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class LoginController extends Controller
{

    /**
     * @param Request $request
     * @return JsonResponse
     */
    public function createToken(Request $request)
    {
        $token = $request->user()->createToken($request->token_name);

        return response()->json(['token' => $token->plainTextToken]);
    }
}
