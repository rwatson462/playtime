import { queryParams, type QueryParams } from './../../../../wayfinder'

/**
 * @see \App\Http\Controllers\ListDogs::ListDogs
 * @see app/Http/Controllers/ListDogs.php:11
 * @route /api/dogs
 */
const ListDogs = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: ListDogs.url(options),
    method: 'get',
})

ListDogs.definition = {
    methods: ['get','head'],
    url: '\/api\/dogs',
}

/**
 * @see \App\Http\Controllers\ListDogs::ListDogs
 * @see app/Http/Controllers/ListDogs.php:11
 * @route /api/dogs
 */
ListDogs.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return ListDogs.definition.url + queryParams(options)
}

/**
 * @see \App\Http\Controllers\ListDogs::ListDogs
 * @see app/Http/Controllers/ListDogs.php:11
 * @route /api/dogs
 */
ListDogs.get = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: ListDogs.url(options),
    method: 'get',
})

/**
 * @see \App\Http\Controllers\ListDogs::ListDogs
 * @see app/Http/Controllers/ListDogs.php:11
 * @route /api/dogs
 */
ListDogs.head = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: ListDogs.url(options),
    method: 'head',
})

export default ListDogs