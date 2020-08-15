<?php

namespace App\Http\Requests\users;

use Illuminate\Foundation\Http\FormRequest;

class updateRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        
        return [
            "name"=>"required|min:3",
            "email"=> "required|email|unique:users,email,$this->id",
            "username"=> "required|unique:users,username,$this->id  ",
            "password"=> "sometimes|min:6",
            "role"=> "required",
        ];
    }
}
