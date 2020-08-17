<?php

namespace App;

use App\Models\Todo;
use Illuminate\Http\Request;
use Tymon\JWTAuth\Contracts\JWTSubject;
use Illuminate\Notifications\Notifiable;
use Laratrust\Traits\LaratrustUserTrait;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable implements JWTSubject
{
    use LaratrustUserTrait;
    use Notifiable;
    protected $fillable = ["name", "email", "password", "username","image"];
    // Rest omitted for brevity

    public function setPasswordAttribute($value)
    {

        return $this->attributes['password'] = bcrypt($value);
    }
    /**
     * Get the identifier that will be stored in the subject claim of the JWT.
     *
     * @return mixed
     */
    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

    /**
     * Return a key value array, containing any custom claims to be added to the JWT.
     *
     * @return array
     */
    public function getJWTCustomClaims()
    {
        return [];
    }
    public function getRouteKeyName()
    {
        return "username";
    }
    static  function FiltarData(Request $request)
    {
      
        if ($request->role) {
            
            return Role::whereName($request->role)->first()->users;
        }
        return User::all();
    }
    public function todos(){
        return $this->hasMany(Todo::class,"owner_id");
    }
    
   
}
