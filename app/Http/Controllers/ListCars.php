<?php

namespace App\Http\Controllers;

use App\Models\Car;
use Illuminate\Support\Collection;

class ListCars extends Controller
{
    public function __invoke(): Collection
    {
        return Car::all();
    }
}
