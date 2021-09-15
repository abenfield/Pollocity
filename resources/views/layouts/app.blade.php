<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no" />

        <title>{{ config('app.name', 'Pollocity') }}</title>

        <meta name="csrf-token" content="{{ csrf_token() }}">

        <script src="{{ mix('/js/app.js') }}" defer="true"></script>

        <script>CSRF = '@csrf';</script>

        <link href="{{ mix('css/app.css') }}" rel="stylesheet">
    </head>
    <body>
        @yield('content')
    </body>
</html>