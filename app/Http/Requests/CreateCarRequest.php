<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CreateCarRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'make' => 'required|string',
        ];
    }
}
