<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateCarRequest;
use App\Models\Car;
use Illuminate\Http\Response;

class CreateCar extends Controller
{
    public function __invoke(CreateCarRequest $request): Response
    {
        Car::create($request->validated());

        return response(status: 204);
    }
}
