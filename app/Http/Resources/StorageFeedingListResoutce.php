<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class StorageFeedingListResoutce extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'rack' => $this->rack,
            'count_lavel' => $this->count_lavel,
            'start_lavel' => $this->start_lavel,
            'start_slot' => $this->start_slot,
            'end_slot' => $this->end_slot,
            'area' => $this->area,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at
        ];
    }
}
