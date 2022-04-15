<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@200;600&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="{{ mix('css/app.css') }}" />

    @production
        <link rel="manifest" href="/app.manifest">
        @php
            $manifest = json_decode(file_get_contents(public_path('js/manifest.json')), true);
        @endphp
        @foreach ($manifest['resources/js/app.js']['imports'] as $importName)
            <link rel="modulepreload" href="/js/{{ $manifest[$importName]['file'] }}" as="script">
        @endforeach
        @foreach ($manifest as $export)
            @if (isset($export['css']))
                @foreach ($export['css'] as $url)
                    <link rel="stylesheet" href="/js/{{ $url }}" />
                @endforeach
            @endif
        @endforeach
    @endproduction

    <title>{{env('APP_NAME')}}</title>
</head>
<body>
    <div id="app"></div>

    @production
        <script type="module" src="/js/{{ $manifest['resources/js/app.js']['file'] }}"></script>
    @else
        <script type="module" src="http://localhost:3000/@vite/client"></script>
        <script type="module" src="http://localhost:3000/resources/js/app.js"></script>
    @endproduction
</body>
</html>

<style>
body {
	background-color: #1f1f1f;
}
</style>