<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreStorageFeedingLitsRequest extends FormRequest
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
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            "rack" => ['required', 'string', 'max:255'],
            'count_lavel' => ['required', 'string', 'max:255'],
            'start_lavel' => ['required', 'string', 'max:255'],
            'start_slot' => ['required', 'string', 'max:255'],
            'end_slot' => ['required', 'string', 'max:255'],
            'area' => ['required', 'string', 'max:255'],
        ];
    }
}
