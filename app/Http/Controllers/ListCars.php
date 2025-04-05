<?php

namespace App\Http\Controllers;

use App\Http\Resources\CarResource;
use App\Models\Car;
use Illuminate\Http\Resources\Json\JsonResource;

class ListCars extends Controller
{
    public function __invoke(): JsonResource
    {
        return new CarResource(Car::query()->orderBy('make')->get());
    }
}
