@extends('app')

@section('content')
<section id="main">
  <header class="header">
    <h3 class="header-text">Transacciones financieras</h3>
  </header>
    <div class="transactions-div" class="content"+.>
        <div class="container content">
            <div class="container row">
                <div class="mb-2 d-flex col">
                    <div class="row">
                    </div>
                    <div class="col-3 d-flex ps-4">
                        <label for="id" class="form-label custom-label">Año</label>
                    </div>
                    <div class="col-4"> 
                        <input class="form-control form-control-sm" type="number" id="id">
                    </div>
                    <div class="mb-2 col"></div>               
                </div>
                <div class="mb-2 col-8">
                    <div class="d-flex row">
                        <div class="col-1">
                            <label for="month" class="form-label custom-label">Mes</label>
                        </div>
                      <div class="col-6">
                        <select class="form-select form-select-sm custom-select" id="month" aria-label="Elija el mes">
                            <option selected> -- Escoge el mes --</option>
                            <option value="1">Enero</option>
                            <option value="2">Febrero</option>
                            <option value="3">Marzo</option>
                            <option value="4">Abril</option>
                            <option value="5">Mayo</option>
                            <option value="6">Junio</option>
                            <option value="7">Julio</option>
                            <option value="8">Agosto</option>
                            <option value="9">Septiembre</option>
                            <option value="10">Octubre</option>
                            <option value="11">Noviembre</option>
                            <option value="12">Diciembre</option>
                        </select>
                      </div>
                      <div class="mb-2 col"></div>  
                    </div>
                </div>
            </div>
            <table class="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">Día</th>
                    <th scope="col">Id de usuario</th>
                    <th scope="col">No. de movimiento</th>
                    <th scope="col">Tipo</th>
                    <th scope="col">Cantidad</th>
                    <th scope="col">Saldo</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>12345</td>
                    <td>1234567891011</td>
                    <td>Ingreso</td>
                    <td>165</td>
                    <td>200</td>
                  </tr>
                  <tr>
                    <th scope="row">1</th>
                    <td>85475</td>
                    <td>1234145874145</td>
                    <td>Retiro</td>
                    <td>214</td>
                    <td>100</td>
                  </tr>
                  <tr>
                    <th scope="row">1</th>
                    <td>83476</td>
                    <td>5935280505740</td>
                    <td>Retiro</td>
                    <td>710</td>
                    <td>1000</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>15687</td>
                    <td>4308428176958</td>
                    <td>Retiro</td>
                    <td>214</td>
                    <td>300</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>31854</td>
                    <td>1234145874145</td>
                    <td>Ingreso</td>
                    <td>540</td>
                    <td>680</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>98756</td>
                    <td>9874563210321</td>
                    <td>Ingreso</td>
                    <td>120</td>
                    <td>420</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>41256</td>
                    <td>8547145823698</td>
                    <td>Retiro</td>
                    <td>50</td>
                    <td>100</td>
                  </tr>
                  
                  <tr>
                    <th scope="row">3</th>
                    <td>69824</td>
                    <td>1573946820101</td>
                    <td>Ingreso</td>
                    <td>800</td>
                    <td>1340</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>78912</td>
                    <td>741258963014</td>
                    <td>Retiro</td>
                    <td>140</td>
                    <td>140</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>52852</td>
                    <td>2905040187458</td>
                    <td>Ingreso</td>
                    <td>110</td>
                    <td>360</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>71879</td>
                    <td>9889655632127</td>
                    <td>Retiro</td>
                    <td>200</td>
                    <td>100</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>45654</td>
                    <td>7894561654987</td>
                    <td>Retiro</td>
                    <td>101</td>
                    <td>303</td>
                  </tr>
                  <tr>
                    <th scope="row">4</th>
                    <td>10874</td>
                    <td>7414785258963</td>
                    <td>Ingreso</td>
                    <td>320</td>
                    <td>450</td>
                  </tr>
                  <tr>
                    <th scope="row">4</th>
                    <td>98710</td>
                    <td>3579510258741</td>
                    <td>Ingreso</td>
                    <td>90</td>
                    <td>150</td>
                  </tr>
                  <tr>
                    <th scope="row">4</th>
                    <td>51984</td>
                    <td>8715307174887</td>
                    <td>Retiro</td>
                    <td>100</td>
                    <td>100</td>
                  </tr>
                </tbody>
              </table>
        </div>
    </div>
</section>
@endsection