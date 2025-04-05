import {RouterProvider} from "react-router";
import {router} from './lib/router'
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

const client = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            retry: false,
        }
    }
})

export function App() {
    return (
        <QueryClientProvider client={client}>
            <RouterProvider router={router}/>
        </QueryClientProvider>
    )
}
