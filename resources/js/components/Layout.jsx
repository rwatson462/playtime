import React, {Suspense} from "react";
import {Link, Outlet} from "react-router";
import {Loading} from "./Loading.js";

export function Layout() {
    return (
        <div className="w-4xl mx-auto min-h-dvh bg-black/20 flex flex-col p-4 gap-y-4">
            <header className="min-h-20 flex justify-between items-center">
                <p><Link to={'/'}>Playtime</Link></p>
            </header>
            <main className="flex-grow">
                <h1 className="text-4xl font-black">This is a test</h1>
                <Suspense fallback={<Loading/>}>
                    <Outlet/>
                </Suspense>
            </main>

            <footer className="min-h-20 flex items-center justify-center">
                &copy; 2025 Source Pot
            </footer>
        </div>
    )
}
