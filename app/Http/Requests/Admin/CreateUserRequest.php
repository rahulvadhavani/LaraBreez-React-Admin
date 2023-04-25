<?php

namespace App\Http\Requests\Admin;

use Illuminate\Foundation\Http\FormRequest;

class CreateUserRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        $rules =  [
            'first_name' => 'required|string|max:100',
            'last_name' => 'required|string|max:100',
            'email' => 'required|string|email|max:255|unique:users,email',
            'password' => ['required', 'confirmed', 'max:8'],
            'avatar' => ['nullable', 'image', 'max:2048', 'mimes:png,jpg,svg,jpeg,gif'],
        ];

        if (isset(request()->id) && !empty(request()->id)) {
            $rules['email'] = 'required|string|email|max:255|unique:users,email,' . request()->id;
            $rules['password'] = ['nullable','required_with:current_password', 'confirmed', 'max:8'];
            $rules['current_password'] = ['required_with:password'];
        }
        return $rules;
    }
}
