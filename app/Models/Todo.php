<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Todo extends Model
{
    protected $fillable = ['title', 'description', 'owner_id', 'priority', 'date'];
    protected  $dates = ['date'];
    public function getRouteKeyName()
    {
        return "slug";
    }
    public function user()
    {
        return $this->belongsTo(User::class, "owner_id");
    }
    public function users()
    {
        return $this->belongsToMany(User::class, 'todo_user', 'user_id', 'todo_id');
    }
    protected static function boot()
    {
        parent::boot();
        static::creating(function ($todo) {
            $todo->owner_id = Auth()->id();
            $todo->slug = \Str::slug($todo->title, "-");
        });

        static::updating(function ($todo) {
            $todo->slug = \Str::slug($todo->title, "-");
        });
    }
}
