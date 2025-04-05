import { queryParams, type QueryParams } from './../../../../wayfinder'

/**
 * @see \App\Http\Controllers\ListCars::ListCars
 * @see app/Http/Controllers/ListCars.php:11
 * @route /api/cars
 */
const ListCars = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: ListCars.url(options),
    method: 'get',
})

ListCars.definition = {
    methods: ['get','head'],
    url: '\/api\/cars',
}

/**
 * @see \App\Http\Controllers\ListCars::ListCars
 * @see app/Http/Controllers/ListCars.php:11
 * @route /api/cars
 */
ListCars.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return ListCars.definition.url + queryParams(options)
}

/**
 * @see \App\Http\Controllers\ListCars::ListCars
 * @see app/Http/Controllers/ListCars.php:11
 * @route /api/cars
 */
ListCars.get = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: ListCars.url(options),
    method: 'get',
})

/**
 * @see \App\Http\Controllers\ListCars::ListCars
 * @see app/Http/Controllers/ListCars.php:11
 * @route /api/cars
 */
ListCars.head = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: ListCars.url(options),
    method: 'head',
})

export default ListCars