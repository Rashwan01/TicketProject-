<?php

namespace App\Http\Controllers\Api\Todo;

use App\Http\Controllers\Controller;
use App\Http\Requests\Todo\StoreRequest;
use App\Http\Resources\Todo\IndexResource;
use App\Models\Todo;
use Illuminate\Contracts\Cache\Store;
use Illuminate\Http\Request;

class TodoController extends Controller
{
    public function index()
    {
        return IndexResource::collection(Auth()->user()->todos);
    }
    public function store(StoreRequest $request)
    {
        Todo::create($request->all());
        return response()->json(['msg' => "success"]);
    }
    public function update()
    {
    }
    public function destroy( Todo $todo)
    {
        $todo->delete();
        return response()->json(['msg' => "success"]);

    }
}
