<?php

namespace App\Http\Controllers;

use App\Http\Resources\DogResource;
use App\Models\Dog;
use Illuminate\Http\Resources\Json\JsonResource;

class ListDogs extends Controller
{
    public function __invoke(): JsonResource
    {
        return new DogResource(Dog::all());
    }
}
