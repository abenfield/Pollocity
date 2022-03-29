<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UserStoreRequest extends FormRequest
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
     *Email
     */
    public function rules()
    {
        return [
            'email' => 'required|email|unique:users',
            'first_name' => 'required',
            'last_name' => 'required',
            'password'  => 'required',
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
             'email.unique' => __('email-address-already-in-use'),
             'first_name.required' => __('first-name-is-required'),
             'last_name.required' => __('last-name-is-required'),
             'password.required' => __('password-is-required')
         ];
     }

}
