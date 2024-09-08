<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UpdateStorageFeedingLitsRequest extends FormRequest
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
            "id" => ['string', 'max:255', Rule::unique('storage_feeding_lists')->ignore($this->id), 'exists:storage_feeding_lists,id'],
            "rack" => ['required', 'string', 'max:255'],
            'count_lavel' => ['required', 'string', 'max:255'],
            'start_lavel' => ['required', 'string', 'max:255'],
            'start_slot' => ['required', 'string', 'max:255'],
            'end_slot' => ['required', 'string', 'max:255'],
            'area' => ['required', 'string', 'max:255'],
        ];
    }
}
