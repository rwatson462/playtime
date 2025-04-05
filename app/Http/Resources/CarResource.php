<?php

namespace App\Http\Resources;

use App\Models\Car;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Collection;

/**
 * @property Collection<Car> $resource
 */
class CarResource extends JsonResource
{
    public static $wrap = 'cars';

    public function toArray(Request $request): array
    {
        return $this->resource->map(fn (Car $car) => [
            'id' => $car->id,
            'make' => $car->make,
        ])->all();
    }
}
