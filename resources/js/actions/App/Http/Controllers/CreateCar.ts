import { queryParams, type QueryParams } from './../../../../wayfinder'

/**
 * @see \App\Http\Controllers\CreateCar::CreateCar
 * @see app/Http/Controllers/CreateCar.php:11
 * @route /api/cars
 */
const CreateCar = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'post',
} => ({
    url: CreateCar.url(options),
    method: 'post',
})

CreateCar.definition = {
    methods: ['post'],
    url: '\/api\/cars',
}

/**
 * @see \App\Http\Controllers\CreateCar::CreateCar
 * @see app/Http/Controllers/CreateCar.php:11
 * @route /api/cars
 */
CreateCar.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return CreateCar.definition.url + queryParams(options)
}

/**
 * @see \App\Http\Controllers\CreateCar::CreateCar
 * @see app/Http/Controllers/CreateCar.php:11
 * @route /api/cars
 */
CreateCar.post = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'post',
} => ({
    url: CreateCar.url(options),
    method: 'post',
})

export default CreateCar