<?php

namespace App\Http\Controllers;

use App\Models\Dog;
use Illuminate\Support\Collection;

class ListDogs extends Controller
{
    public function __invoke(): Collection
    {
        return Dog::all();
    }
}
