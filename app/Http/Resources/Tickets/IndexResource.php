<?php

namespace App\Http\Resources\Tickets;

use Illuminate\Support\Str;
use Illuminate\Http\Resources\Json\JsonResource;

class IndexResource extends JsonResource
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
            "id" => $this->id,
            "title" => $this->title,
            "slug" =>$this->slug,
            "user"=>$this->user->name,
            "description" => $this->description,
            "image" => $this->image,
            "status"=>$this->status(),

        ];
    }
}
