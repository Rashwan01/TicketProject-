<?php

namespace App\Http\Controllers\Api;

use App\Role;
use App\User;
use Illuminate\Http\Request;
use App\Models\Ticket\Ticket;
use App\Http\Controllers\Controller;

class HomeController extends Controller
{
    public function __invoke(){
        return response()->json(['users'=>Role::whereName("client")->first()->users->count(),'tickets'=>Ticket::count()]);
    }
}
