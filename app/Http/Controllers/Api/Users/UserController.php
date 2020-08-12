<?php

namespace App\Http\Controllers\Api\Users;


use App\Role;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use App\Http\Requests\users\storeRequest;
use App\Http\Resources\users\indexResource;
use Illuminate\Contracts\Support\Renderable;


class UserController extends Controller
{
    public function index(){
        return indexResource::collection(User::all());
    }
    public function create()
    {
        return response()->json(['roles'=> Role::all()]) ;
    }
    public function Store(storeRequest $request)
    {
$data = $request->except("role_id");
$user = User::create($data);
$user->attachRole($request->role_id);   

        return response()->json(["msg" => "success"]);
    }
}
