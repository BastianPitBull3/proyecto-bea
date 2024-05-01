<!DOCTYPE html>
<html lang="en" id="app">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Menú Bea</title>
    <script src="{{asset('js/temas.js')}}"></script>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-HwwvtgBNo3bZJJLYd8oVXjrBZt8cqVSpeBNS5n7C8IVInixGAoxmnlMuBnhbgrkm" crossorigin="anonymous"></script>
    <link rel="stylesheet" type="text/css" href="{{ asset('css/app.css') }}">
</head>
<body id="body">
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid menu">
            <a class="navbar-brand" href="#">Menú</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                <a class="nav-link aria-current="page" href="{{route('gestion')}}" id="user-management">Gestión de usuarios</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="{{route('transacciones')}}" id="transactions">Transacciones</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="{{route('config')}}" id="config">Configuración</a>
                </li>
            </ul>
            </div>
        </div>
    </nav>
    @yield('content')
</body>
</html>
