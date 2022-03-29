<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UserLoginRequest extends FormRequest
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
            'email' => 'required',
            'password' => 'required',
            'remember'
        ];
    }
    
    /**
     * Custom message for validation
     * @ return array
     */
    
     public function messages()
     {
         return [
             'email.required' => __('email-address-is-required'),
             'password.required' => __('password-is-required'),
         ];
     }

}
