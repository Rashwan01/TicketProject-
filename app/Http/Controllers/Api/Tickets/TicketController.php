<?php

namespace App\Http\Controllers\Api\Tickets;

use App\Models\Ticket\Ticket;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\Ticket\storeRequest;
use App\Http\Requests\Ticket\UpdateRequest;
use App\Http\Resources\Tickets\IndexResource;
use App\Http\Resources\Tickets\CreateResource;

class TicketController extends Controller
{
    public function index()
    {
        return IndexResource::collection(Ticket::all());
    }
    public function store(storeRequest $request)
    {
        $data = $request->all();
   
       $data['image'] =  uploadimage($request,"/uploads/tickets");
        Ticket::create($data);
        return response()->json(['msg' => "success"]);
    }
    public function show(Ticket $ticket)
    {
        return new CreateResource($ticket);
    }
    public function update(UpdateRequest $request, Ticket $ticket)
    {
        $data = $request->all();
        $data['image'] =  uploadimage($request, "/uploads/tickets");
        $ticket->update($data);
        
        return response()->json(['msg' => "success"]);
    }
    public function destroy(Ticket $ticket)
    {
        $ticket->delete();
        return response()->json(['msg' => "success"]);
    }
}
