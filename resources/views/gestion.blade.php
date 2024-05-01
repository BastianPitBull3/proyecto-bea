@extends('app')

@section('content')
<section id="main">
    <header class="header">
        <h3 class="header-text">Gestión de usuarios</h3>
    </header>
    <div class="content">
        <div class="row">
            <div class="container d-flex col-md-4 add-user">
                <div class="container">
                    <h4>Agregar nuevo usuario</h4>
                    <form>
                        <div class="mb-2">
                            <label for="name" class="form-label">Nombre(s)</label>
                            <input type="text" class="form-control form-control-sm" id="name" aria-describedby="name">
                        </div>
                        <div class="row">
                            <div class="mb-2 col">
                                <label for="pat-surname" class="form-label">Apellido paterno</label>
                                <input type="text" class="form-control form-control-sm" id="pat-surname">
                            </div>
                            <div class="mb-2 col-6">
                                <label for="mat-surname" class="form-label">Apellido materno</label>
                                <input type="text" class="form-control form-control-sm" id="mat-surname">
                            </div>
                        </div>
                        <div class="row mb-2">
                            <div class="mb-2 col">
                                <label for="e-mail" class="form-label">E-Mail</label>
                                <input type="email" class="form-control form-control-sm" id="e-mail">
                            </div>
                            <div class="mb-2 col-5">
                                <label for="tel" class="form-label">Teléfono</label>
                                <input type="tel" class="form-control form-control-sm" id="tel">
                            </div>
                        </div>
                        <div class="d-flex justify-content-center mt-3">
                            <button type="submit" class="btn btn-success add-button">Agregar</button>
                        </div>
                    </form>
                </div> 
            </div>
    
            <div class="container justify-content-center col-md-8 search" >
                <div class="mb-2 col-12">
                    <h4>Buscar usuario</h4>
                    <form action="#">
                        <div class="row">
                            <div class="col">Buscar por:
                                <div class="form-check d-inline-block">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
                                    <label class="form-check-label" for="flexRadioDefault2">
                                        Nombre
                                    </label>
                                </div>
                                <div class="form-check d-inline-block">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                                    <label class="form-check-label" for="flexRadioDefault1">
                                        ID
                                    </label>
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="input-group mb-3">
                                    <input type="text" class="form-control" placeholder="Buscar" aria-label="Recipient's username" aria-describedby="button-addon2">
                                    <button class="btn btn-outline-primary" type="button" id="button-addon2">Buscar</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="d-block col-12">
                    <table class="table">
                        <thead>
                            <tr class="tr-head">
                                <th scope="col" class="t-text">ID</th>
                                <th scope="col" class="t-text">Nombre(s)</th>
                                <th scope="col" class="t-text">Apellidos</th>
                                <th scope="col" class="t-text">E-Mail</th>
                                <th scope="col" class="t-text">Teléfono</th>
                                <th scope="col" class="t-text">Acciones</th>
                                <th scope="col" class="t-text"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row" class="t-content">00001</th>
                                <td class="t-content">Jacobo</td>
                                <td class="t-content">Gómez</td>
                                <td class="t-content">jgmz32@gmail.com</td>
                                <td class="t-content">5551234512</td>
                                <td class="td-actions">
                                    <button class="btn btn-outline-secondary btn-sm btn-actions" style="display: block" size="1">Editar</button>
                                    <button class="btn btn-outline-danger btn-sm btn-actions" style="display: block">Eliminar</button>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row" class="t-content">00002</th>
                                <td class="t-content">Fátima</td>
                                <td class="t-content">Jiménez</td>
                                <td class="t-content">fatjmz2415@outlook.com</td>
                                <td class="t-content">5553214521</td>
                                <td class="td-actions">
                                    <button class="btn btn-outline-secondary btn-sm btn-actions" style="display: block" size="1">Editar</button>
                                    <button class="btn btn-outline-danger btn-sm btn-actions" style="display: block">Eliminar</button>
                                </td>
                            </tr>
                            </tr>
                            <tr>
                                <th scope="row" class="t-content">00003</th>
                                <td class="t-content">Alonso</td>
                                <td class="t-content">López</td>
                                <td class="t-content">allpzz41@yahoo.com</td>
                                <td class="t-content">5557894501</td>
                                <td class="td-actions">
                                    <button class="btn btn-outline-secondary btn-sm btn-actions" style="display: block" size="1">Editar</button>
                                    <button class="btn btn-outline-danger btn-sm btn-actions" style="display: block">Eliminar</button>
                                </td>
                            </tr>
    
                            <tr>
                                <th scope="row" class="t-content">00003</th>
                                <td class="t-content">Alonso</td>
                                <td class="t-content">López</td>
                                <td class="t-content">allpzz41@yahoo.com</td>
                                <td class="t-content">5557894501</td>
                                <td class="td-actions">
                                    <button class="btn btn-outline-secondary btn-sm btn-actions" style="display: block" size="1">Editar</button>
                                    <button class="btn btn-outline-danger btn-sm btn-actions" style="display: block">Eliminar</button>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row" class="t-content">00003</th>
                                <td class="t-content">Alonso</td>
                                <td class="t-content">López</td>
                                <td class="t-content">allpzz41@yahoo.com</td>
                                <td class="t-content">5557894501</td>
                                <td class="td-actions">
                                    <button class="btn btn-outline-secondary btn-sm btn-actions" style="display: block" size="1">Editar</button>
                                    <button class="btn btn-outline-danger btn-sm btn-actions" style="display: block">Eliminar</button>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row" class="t-content">00003</th>
                                <td class="t-content">Alonso</td>
                                <td class="t-content">López</td>
                                <td class="t-content">allpzz41@yahoo.com</td>
                                <td class="t-content">5557894501</td>
                                <td class="td-actions">
                                    <button class="btn btn-outline-secondary btn-sm btn-actions" style="display: block" size="1">Editar</button>
                                    <button class="btn btn-outline-danger btn-sm btn-actions" style="display: block">Eliminar</button>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row" class="t-content">00003</th>
                                <td class="t-content">Alonso</td>
                                <td class="t-content">López</td>
                                <td class="t-content">allpzz41@yahoo.com</td>
                                <td class="t-content">5557894501</td>
                                <td class="td-actions">
                                    <button class="btn btn-outline-secondary btn-sm btn-actions" style="display: block" size="1">Editar</button>
                                    <button class="btn btn-outline-danger btn-sm btn-actions" style="display: block">Eliminar</button>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row" class="t-content">00003</th>
                                <td class="t-content">Alonso</td>
                                <td class="t-content">López</td>
                                <td class="t-content">allpzz41@yahoo.com</td>
                                <td class="t-content">5557894501</td>
                                <td class="td-actions">
                                    <button class="btn btn-outline-secondary btn-sm btn-actions" style="display: block" size="1">Editar</button>
                                    <button class="btn btn-outline-danger btn-sm btn-actions" style="display: block">Eliminar</button>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row" class="t-content">00003</th>
                                <td class="t-content">Alonso</td>
                                <td class="t-content">López</td>
                                <td class="t-content">allpzz41@yahoo.com</td>
                                <td class="t-content">5557894501</td>
                                <td class="td-actions">
                                    <button class="btn btn-outline-secondary btn-sm btn-actions" style="display: block" size="1">Editar</button>
                                    <button class="btn btn-outline-danger btn-sm btn-actions" style="display: block">Eliminar</button>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row" class="t-content">00003</th>
                                <td class="t-content">Alonso</td>
                                <td class="t-content">López</td>
                                <td class="t-content">allpzz41@yahoo.com</td>
                                <td class="t-content">5557894501</td>
                                <td class="td-actions">
                                    <button class="btn btn-outline-secondary btn-sm btn-actions" style="display: block" size="1">Editar</button>
                                    <button class="btn btn-outline-danger btn-sm btn-actions" style="display: block">Eliminar</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>  
            </div>
        </div>
    </div>
</section>


@endsection