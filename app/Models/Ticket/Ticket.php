<?php

namespace App\Models\Ticket;

use App\User;
use Illuminate\Database\Eloquent\Model;

class Ticket extends Model
{
    protected $fillable = ['id', 'title', 'description', 'user_id','image'];
    protected  static function boot()
    {

        parent::boot();
        static::creating(function ($ticket) {
            $ticket->slug = \Str::slug($ticket->title, "-");
        });
        static::updating(function ($ticket) {
            $ticket->slug = \Str::slug($ticket->title, "-");
        });
    }
    public function getRouteKeyName()
    {
        return "slug";
    }
    public function user()
    {
        return $this->belongsTo(User::class);
    }
    public function comments(){
        return $this->hasMany(Comment::class);
    }
    public function status(){
    if($this->status == 0)
    {
        return "pending To accept";
    }
    elseif($this->status ==1)
    {
        return "proccessing";
    }
    return "closed";
    
    }
}
