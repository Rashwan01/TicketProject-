<?php

namespace App;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Tymon\JWTAuth\Contracts\JWTSubject;
use Laratrust\Traits\LaratrustUserTrait;
class User extends Authenticatable implements JWTSubject
{
    use LaratrustUserTrait;
    use Notifiable;
    protected $fillable = ["name","email","password","username"];
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
}
