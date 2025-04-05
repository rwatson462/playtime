<?php

namespace App\Http\Resources;

use App\Models\Dog;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Collection;

/**
 * @property Collection<Dog> $resource
 */
class DogResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return $this->resource->map(fn (Dog $dog) => [
            'id' => $dog->id,
            'breed' => $dog->breed,
        ])->all();
    }
}
