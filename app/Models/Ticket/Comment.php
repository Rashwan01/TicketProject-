<?php

namespace App\Models\Ticket;

use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
 public $table= "ticket_comment";
 public function ticket(){
     return $this->belongsTo(Ticket::class);
 }
}
