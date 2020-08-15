<?php

namespace App\Http\Resources\users;

use Illuminate\Http\Resources\Json\JsonResource;

class indexResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            "id"=>$this->id,
            "name"=>$this->name,
            "username"=>$this->username,
            "email"=>$this->email,
            "role"=>$this->roles->first()->display_name,
        ];
    }
}
