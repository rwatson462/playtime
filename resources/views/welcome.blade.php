<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Playtime</title>

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />

        <!-- Styles / Scripts -->
        @vite(['resources/css/app.css', 'resources/js/app.js'])
    </head>
    <body class="bg-gradient-to-br from-slate-800 to-slate-900 text-white">
        <div class="max-w-4xl ml-40 min-h-dvh bg-black/30 flex flex-col p-4 gap-y-4">
            <header class="min-h-20 flex justify-between items-center">
                <p>Playtime</p>
            </header>
            <main class="flex-grow">
                <h1 class="text-4xl font-black">This is a test</h1>
            </main>

            <footer class="min-h-20 flex items-center justify-center">
                &copy; 2025 Source Pot
            </footer>
        </div>
    </body>
</html>
