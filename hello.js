    
     //$http.get('https://gateway.marvel.com:443/v1/public/characters?name=Spider-Man&orderBy=name&apikey=dcf74404f29c024060e2569d3a1beb43').
   

//Controlador para admin

    function Hello($scope, $http) {





window.setInterval(function(){
    var elem = document.getElementById('ecran');
    elem.scrollTop = elem.scrollHeight;


}, 50);


var id = window.location.pathname;
  console.log (id);
  var nom_user = $http.get('http://1.16.0.62:3000/user'+id);
  var datanom = nom_user.success(function(resultado) {

 $scope.nom_user=resultado.mail;
 console.log(resultado.mail);

var nombre = resultado.mail;
var socket = io();
 
  var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();
var objToday = new Date(),
 curHour = objToday.getHours() > 12 ? objToday.getHours() - 12 : (objToday.getHours() < 10 ? "0" + objToday.getHours() : objToday.getHours()),
  curMinute = objToday.getMinutes() < 10 ? "0" + objToday.getMinutes() : objToday.getMinutes(),
  curSeconds = objToday.getSeconds() < 10 ? "0" + objToday.getSeconds() : objToday.getSeconds(),
  curMeridiem = objToday.getHours() > 12 ? "PM" : "AM";

if(dd<10) {
    dd='0'+dd
} 

if(mm<10) {
    mm='0'+mm
} 

var today = dd+'/'+mm+'/'+yyyy+' '+curHour+':'+curMinute+':'+curSeconds ;
        // el mensaje que nos llega desde el servidor
        socket.on("mensaje", function(mensaje) {
            document.getElementById("mensajesLista").innerHTML +=  '<li><div class="chat-body clearfix"><div class="header"><strong class="primary-font"></strong><small class="pull-right text-muted"></small></div><p class ="btn alert-success"><i class="fa fa-user  fa-fw"></i>'+mensaje+'</p></div></div></li>'
                
                });
        

});
$scope.logout = function () {
var URL = window.location.pathname;
$http.post(URL);
console.log(URL);

};

location.href = "#ecran"
document.getElementById('ecran').scrollBy(0,50);



$scope.enviarMensaje = function(nom_user){


            console.log("enviando: " + 'rodrigo dice: '+ document.getElementById("mensajeParaEnviar").value);
            //socket.emit('mensaje', nom_user +' ::::::::::::::::::::::::: ' + document.getElementById("mensajeParaEnviar").value);
            socket.emit('mensaje', document.getElementById("mensajeParaEnviar").value);

            
            document.getElementById("mensajeParaEnviar").value = "";




}





  $scope.mail = null;
$scope.pass = null;
$scope.msg = null;
$scope.postdata = function (mail, pass) {
var data = {
mail: mail,
pass: pass
// email: email,
// password: password,
};
//Call the services
$http.post('/usr', JSON.stringify(data)).then(function (response) {
console.log(data.pass);
$scope.msg = data.pass;
});
};


var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();

if(dd<10) {
    dd='0'+dd
} 

if(mm<10) {
    mm='0'+mm
} 

$scope.today = dd+'/'+mm+'/'+yyyy;


// get today

var objToday = new Date(),
  weekday = new Array('Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'),
  dayOfWeek = weekday[objToday.getDay()],
  domEnder = function() { var a = objToday; if (/1/.test(parseInt((a + "").charAt(0)))) return ""; a = parseInt((a + "").charAt(1)); return 1 == a ? "st" : 2 == a ? "nd" : 3 == a ? "rd" : "" }(),
  dayOfMonth = today + ( objToday.getDate() < 10) ? '' + objToday.getDate() + domEnder : objToday.getDate() + domEnder,
  months = new Array('Enero', 'Febero', 'Marzo', 'April', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'),
  curMonth = months[objToday.getMonth()],
  curYear = objToday.getFullYear(),
  curHour = objToday.getHours() > 12 ? objToday.getHours() - 12 : (objToday.getHours() < 10 ? "0" + objToday.getHours() : objToday.getHours()),
  curMinute = objToday.getMinutes() < 10 ? "0" + objToday.getMinutes() : objToday.getMinutes(),
  curSeconds = objToday.getSeconds() < 10 ? "0" + objToday.getSeconds() : objToday.getSeconds(),
  curMeridiem = objToday.getHours() > 12 ? "PM" : "AM";
var today1 = curMonth + ", " + curYear;
var today2 = dayOfMonth + " de " + curMonth;
//var today1 = curHour + ":" + curMinute + "." + curSeconds + curMeridiem + " " + dayOfWeek + " " + dayOfMonth + " de " + curMonth + ", " + curYear;
$scope.today1 = today1;
$scope.today2 = today2;

  var pendientes = $http.get('http://1.16.0.62:3000/');
  var atms = $http.get('http://1.16.0.62:3000/atms');
  var comunicacion = $http.get('http://1.16.0.62:3000/comunicaciones');
  var otros = $http.get('http://1.16.0.62:3000/otros');
  var fs = $http.get('http://1.16.0.62:3000/fs');
  var cpu = $http.get('http://1.16.0.62:3000/cpu');
  var puntos = $http.get('http://1.16.0.62:3000/puntos');
  var regionales = $http.get('http://1.16.0.62:3000/regionales');
  var regionalesdia = $http.get('http://1.16.0.62:3000/regionalesdia');
  var achs = $http.get('http://1.16.0.62:3000/achs');
  var telefonos = $http.get('http://1.16.0.62:3000/telefonos');
  var huellas = $http.get('http://1.16.0.62:3000/huellas');
  var bloqueos = $http.get('http://1.16.0.62:3000/bloqueos/bantotal');
  var bloqueos1 = $http.get('http://1.16.0.62:3000/bloqueos/baseresp');
  var bloqueos2 = $http.get('http://1.16.0.62:3000/bloqueos/tempback1');
  var bloqueos3 = $http.get('http://1.16.0.62:3000/bloqueos/temporal');
  var bloqueos4 = $http.get('http://1.16.0.62:3000/bloqueos/tempdb');
  var logtrans = $http.get('http://1.16.0.62:3000/logtrans/bantotal');
  var logtrans1 = $http.get('http://1.16.0.62:3000/logtrans/baseresp');
  var logtrans2 = $http.get('http://1.16.0.62:3000/logtrans/tempback1');
  var logtrans3 = $http.get('http://1.16.0.62:3000/logtrans/temporal');
  var logtrans4 = $http.get('http://1.16.0.62:3000/logtrans/tempdb');
  var usuarios = $http.get('http://1.16.0.62:3000/recuperar');
  var block = $http.get('http://1.16.0.62:3000/errores');
  var elog = $http.get('http://1.16.0.62:3000/errores');
  var elogequipo = $http.get('http://1.16.0.62:3000/errorequipo');
  var elogevento = $http.get('http://1.16.0.62:3000/errorevento');
  var databc = $http.get('http://35.231.78.123:3000/api/system/historian');

  databc.success(function(resultado) {
    console.log('resultado')
    console.log(resultado.eventsEmitted);

        $scope.databc=resultado;
          });

  
  elog.success(function(resultado) {

$scope.greeting=resultado;
            $scope.atms=resultado.length;

            var conteo = resultado;
            var x = $scope.cuentas;
            var arr = new Array();
            for (h = 0; h<conteo.length; h++){
                 arr.push(conteo[h]);
              }
          $scope.greeting=arr;
         
         // console.log(arr);
          $scope.elog = arr.splice(0,10);

  });
    elogequipo.success(function(resultado) {

$scope.greeting=resultado;
            $scope.atms=resultado.length;

            var conteo = resultado;
            var x = $scope.cuentas;
            var arr = new Array();
            for (h = 0; h<conteo.length; h++){
                 arr.push(conteo[h]);
              }
          $scope.greeting=arr;
         
         // console.log(arr);
          $scope.elogequipo = arr.splice(0,10);

  });
        elogevento.success(function(resultado) {

$scope.greeting=resultado;
            $scope.atms=resultado.length;

            var conteo = resultado;
            var x = $scope.cuentas;
            var arr = new Array();
            for (h = 0; h<conteo.length; h++){
                 arr.push(conteo[h]);
              }
          $scope.greeting=arr;
         
         // console.log(arr);
          $scope.elogevento = arr.splice(0,25);

  });

  
      pendientes.success(function(resultado) {
           
            $scope.greeting=resultado;
            $scope.cuentas=resultado.length;

            var conteo = resultado;
            var x = $scope.cuentas;
            var arr = new Array();
            for (h = 0; h<conteo.length; h++){
                 arr.push(conteo[h]);
              }
          $scope.greeting=arr;
         
          //console.log(arr);
          
          $scope.datos = arr.splice(1,10);
          $scope.datosall = arr;

      //   var progreso = 0;
      // var idIterval = setInterval(function(){
      //   // Aumento en 10 el progeso
      //    progreso +=1;
        
      //   $('#bar').css('width', progreso + '%');
    
      // //Si llegó a 100 elimino el interval
      //   if(progreso == x){
      //  clearInterval(idIterval);
      // }

      // },1000);

  });
 

 atms.success(function(resultado) {
           
 $scope.greeting=resultado;
            $scope.atms=resultado.length;

            var conteo = resultado;
            var x = $scope.cuentas;
            var arr = new Array();
            for (h = 0; h<conteo.length; h++){
                 arr.push(conteo[h]);
              }
          $scope.greeting=arr;
         
         // console.log(arr);
          $scope.datos_atms = arr;
  });


 comunicacion.success(function(resultado) {
           
 $scope.greeting=resultado;
            $scope.comunicacion=resultado.length;

            var conteo = resultado;
            var x = $scope.cuentas;
            var arr1 = new Array();
            for (h = 0; h<conteo.length; h++){
                 arr1.push(conteo[h]);
              }
          $scope.greeting=arr1;
         
         // console.log(arr1);
          $scope.datos_todos = arr1[3];


  });

 otros.success(function(resultado) {
           
 $scope.greeting=resultado;
            $scope.otros=resultado.length;

            var conteo = resultado;
            var x = $scope.cuentas;
            var arr1 = new Array();
            for (h = 0; h<conteo.length; h++){
                 arr1.push(conteo[h]);
              }
          $scope.greeting=arr1;
         
         // console.log(arr1);
          //$scope.datos_otros = arr1[3];


  });
 

  fs.success(function(resultado) {

 $scope.fs=resultado;

  });

 block.success(function(resultado) {

 $scope.block=resultado;

  });


   cpu.success(function(resultado) {
           
 $scope.cpu=resultado;
          //$scope.datos_otros = arr1[3];


  });

    puntos.success(function(resultado) {
           
 $scope.puntos=resultado;

  });

    regionales.success(function(resultado) {
           
 $scope.regionales=resultado;

  });

    regionalesdia.success(function(resultado) {
           
 $scope.regionalesdia=resultado;

  });

      telefonos.success(function(resultado) {
           
 //$scope.conteo = resultado.length;
 //$scope.datos = [];
 var arr = new Array();
            for (h = 1; h<resultado.length; h++){
                 arr.push(h);
              }
          $scope.res_data=arr.splice(0,resultado.length/4+1);

 $scope.telefonos=resultado.splice(0,4);
 //$scope.telefonos=resultado;
 $scope.nomb=resultado[0].Nombre;
  });
           huellas.success(function(resultado) {
           
 $scope.pendientes=resultado[0].Pendientes;

  });
      bloqueos.success(function(resultado) {
           
  $scope.bloqueos=resultado[0].FreeMB;

   Morris.Donut({
        element: 'morris-donut-chart',
         data: [
         //{
        //     label: "Tamaño",
        //     value: resultado[0].SizeMB
        // }, 
        {
            label: "GB en uso",
            value: Math.round(resultado[0].UsedMB/1024)
        }, {
            label: "GB libres",
            value: Math.round(resultado[0].FreeMB/1024)
        }],
        resize: true
    });
  //$scope.tamanio=resultado[0].SizeMB;
 // $scope.bloqueos3=resultado[2].block;
 // $scope.bloqueos3=resultado[1].program_name;

  });
  bloqueos1.success(function(resultado) {
           
  $scope.bloqueos1=resultado[0].FreeMB;

Morris.Donut({
        element: 'morris-donut-chart-baseresp',
         data: [
         //{
        //     label: "Tamaño",
        //     value: resultado[0].SizeMB
        // }, 
       {
            label: "GB en uso",
            value: Math.round(resultado[0].UsedMB/1024)
        }, {
            label: "GB libres",
            value: Math.round(resultado[0].FreeMB/1024)
        }],
        resize: true
    });
  });
   bloqueos2.success(function(resultado) {
           
  $scope.bloqueos2=resultado[0].FreeMB;
 Morris.Donut({
        element: 'morris-donut-chart-tempback1',
         data: [
         //{
        //     label: "Tamaño",
        //     value: resultado[0].SizeMB
        // }, 
       {
            label: "GB en uso",
            value: Math.round(resultado[0].UsedMB/1024)
        }, {
            label: "GB libres",
            value: Math.round(resultado[0].FreeMB/1024)
        }],
        resize: true
    });
  });
  bloqueos3.success(function(resultado) {
           
  $scope.bloqueos3=resultado[0].FreeMB;


  });
  bloqueos4.success(function(resultado) {
           
  $scope.bloqueos4=resultado[0].FreeMB;


  });

    logtrans.success(function(resultado) {
           
  $scope.logtrans=resultado[0].FreeMB;
$scope.tamanio=resultado[0].SizeMB;
Morris.Donut({
        element: 'morris-donut-chart-log',
         data: [
         //{
        //     label: "Tamaño",
        //     value: resultado[0].SizeMB
        // }, 
        {
            label: "GB en uso",
            value: Math.round(resultado[0].UsedMB/1024)
        }, {
            label: "GB libres",
            value: Math.round(resultado[0].FreeMB/1024)
        }],
        resize: true
    });
  });


     logtrans1.success(function(resultado) {
           
  $scope.logtrans1=resultado[0].FreeMB;
$scope.tamanio1=resultado[0].SizeMB;
Morris.Donut({
        element: 'morris-donut-chart-baseresp-log',
         data: [
         //{
        //     label: "Tamaño",
        //     value: resultado[0].SizeMB
        // }, 
        {
            label: "MB en uso",
            value: resultado[0].UsedMB
        }, {
            label: "MB libres",
            value: resultado[0].FreeMB
        }],
        resize: true
    });
  });
      logtrans2.success(function(resultado) {
           
  $scope.logtrans2=resultado[0].FreeMB;
$scope.tamanio2=resultado[0].SizeMB;
Morris.Donut({
        element: 'morris-donut-chart-tempback1-log',
         data: [
         //{
        //     label: "Tamaño",
        //     value: resultado[0].SizeMB
        // }, 
        {
            label: "MB en uso",
            value: resultado[0].UsedMB, 
            
        }, {
            label: "MB libres",
            value: resultado[0].FreeMB
        }],
        resize: true
    });
  });
       logtrans3.success(function(resultado) {
           
  $scope.logtrans3=resultado[0].FreeMB;
$scope.tamanio3=resultado[0].SizeMB;

  });

        logtrans4.success(function(resultado) {
           
  $scope.logtrans4=resultado[0].FreeMB;
$scope.tamanio4=resultado[0].SizeMB;

  });

    achs.success(function(resultado) {
           
 $scope.achs=resultado;
 // $scope.achs_estado1 = resultado[0].achs;
 // $scope.achs_estado2 = resultado[1].achs;
 // $scope.achs_estado3 = resultado[2].achs;
 // $scope.achs_entrantes = resultado[3].achs;
  });

    usuarios.success(function(resultado) {
           
 $scope.usuarios=resultado;

  });
    $scope.datatel = function(x) {

// console.log(x);
var telefonos = $http.get('http://1.16.0.62:3000/telefonos');

telefonos.success(function(resultado) {
           
 //$scope.conteo = resultado.length;
 //$scope.datos = [];
 var arr = new Array();
            for (h = 0; h<resultado.length; h++){
                 arr.push(resultado[h]);
              }
          //$scope.res_data=arr.splice(0,6);

 //$scope.telefonos=resultado.splice(0,4);
 //var data = x-1;
 var telefonos=arr.splice((x-1)*4,4);
 $scope.telefonos=telefonos;
 console.log(telefonos);
 //$scope.telefonos=resultado;
 //$scope.nomb=resultado[0].Nombre;
  });

 // telefonos.success(function(resultado) {
 // var arr = new Array();
 //            for (h = 1; h<resultado.length; h++){
 //                 arr.push(h);
 //              }
 //          $scope.res_data=arr.splice(0,6);

 // $scope.telefonos=resultado.splice(0,4);
 // console.log(telefonos);
 // //$scope.telefonos=resultado;
 // $scope.nomb=resultado[0].Nombre;
 //  });
}

// $scope.convertToCSV = function(objArray) {

//     var array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
//     var str = '';

//     for (var i = 0; i < array.length; i++) {
//         var line = '';
//         for (var index in array[i]) {
//             if (line != '') line += ','

//             line += array[i][index];
//         }

//         str += line + '\r\n';
//     }

//     return str;
//     console.log(str)
// }

// $scope.exportCSVFile = function(headers, items, fileTitle) {
//     if (headers) {
//         items.unshift(headers);
//     }

//     // Convert Object to JSON
//     var jsonObject = JSON.stringify(items);

//     var csv = this.convertToCSV(jsonObject);

//     var exportedFilenmae = fileTitle + '.csv' || 'export.csv';

//     var blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
//     if (navigator.msSaveBlob) { // IE 10+
//         navigator.msSaveBlob(blob, exportedFilenmae);
//     } else {
//         var link = document.createElement("a");
//         if (link.download !== undefined) { // feature detection
//             // Browsers that support HTML5 download attribute
//             var url = URL.createObjectURL(blob);
//             link.setAttribute("href", url);
//             link.setAttribute("download", exportedFilenmae);
//             link.style.visibility = 'hidden';
//             document.body.appendChild(link);
//             link.click();
//             document.body.removeChild(link);
//         }
//     }
// }

// $scope.download = function (){
//   var headers = {
//       model: 'Phone Model'.replace(/,/g, ''), // remove commas to avoid errors
//       chargers: "Chargers",
//       cases: "Cases",
//       earphones: "Earphones"
//   };

//   itemsNotFormatted = [
//       {
//           model: 'Samsung S7',
//           chargers: '55',
//           cases: '56',
//           earphones: '57',
//           scratched: '2'
//       },
//       {
//           model: 'Pixel XL',
//           chargers: '77',
//           cases: '78',
//           earphones: '79',
//           scratched: '4'
//       },
//       {
//           model: 'iPhone 7',
//           chargers: '88',
//           cases: '89',
//           earphones: '90',
//           scratched: '6'
//       }
//   ];

//   var itemsFormatted = [];

//   // format the data
//   itemsNotFormatted.forEach((item) => {
//       itemsFormatted.push({
//           model: item.model.replace(/,/g, ''), // remove commas to avoid errors,
//           chargers: item.chargers,
//           cases: item.cases,
//           earphones: item.earphones
//       });
//   });

//   var fileTitle = 'orders'; // or 'my-unique-title'
// console.log(itemsNotFormatted);
//   exportCSVFile(headers, itemsFormatted, fileTitle);
// }

 // call the exportCSVFile() function to process the JSON and trigger the download

$scope.consulta = function (datacons,tabla) {
var data = {
consulta: datacons,
tabla: tabla
}
console.log(data);
  $scope.msg ='';
  $scope.message='Procesando....'
  
var maximo = 100;
           
                      document.getElementById("barra").setAttribute('value',0);
                      document.getElementById("barra").setAttribute('max',maximo);
                  
   
//$http.post('/consultas', JSON.stringify(data));
//$http.post('/resultado', JSON.stringify(data));
//var loginusr = $http.get({'http://1.16.0.62:3000/resultado'});
$http({
            method: 'GET',
            url: '/consultas',
            params: {
                consulta: datacons,
                tabla: tabla
                
            }
        }).success(function(data) {
        
       console.log(data)

          // if(data='[]'){
          //   $scope.msg ='error:dato inexsitente';
          //          $scope.color='danger';
          //         $scope.rows = '';
          // }
          
             if(data.code=='EREQUEST'){
              // console.log(data)
              //    console.log('error de consulta')
                   $scope.msg ='error: '+data.message
                   $scope.color='danger';
                  $scope.rows = '';
                  $scope.cols = '';
                  $scope.message='Error al procesar información'


                } else {
                  // console.log(data)
                   // if(data='[]'){
          //   $scope.msg ='error:dato inexsitente';
          //          $scope.color='danger';
          //         $scope.rows = '';
          // }
                      var j = 1
                      progreso=setInterval(function aumentar(){
                        document.getElementById('valor').innerHTML = j;
                        document.getElementById('barra').setAttribute('value',j++);
                        if (j>maximo){
                          clearInterval(progreso);
                        
                        }
                      },1);
                   $scope.message='Completado...'
                  $scope.msg ='Consulta Ejecutada '
                  $scope.color='success';
                    
                      $scope.datoscons=data.length;
                      var conteo = data;
            var arr = new Array();
            for (h = 0; h<conteo.length; h++){
                 arr.push(conteo[h]);
              }
              $scope.rows = '';
              $scope.cols = '';
                  
                           $scope.rows = arr;             
                           $scope.cols = Object.keys($scope.rows[0]);
                           var cols = Object.keys($scope.rows[0]);
           //exportCSVFile(cols, arr, "tabla_resultados"); 

                }

           
        }).
        error(function() {
            console.log('Error al intentar recuperar la información.');
        });
      };

$scope.descargar = function (datacons,tabla) {
var data = {
consulta: datacons,
tabla: tabla
}
console.log(data);
  $scope.msg ='';
  $scope.message='Procesando....'
  
var maximo = 100;
           
                      document.getElementById("barra").setAttribute('value',0);
                      document.getElementById("barra").setAttribute('max',maximo);
                  
   
//$http.post('/consultas', JSON.stringify(data));
//$http.post('/resultado', JSON.stringify(data));
//var loginusr = $http.get({'http://1.16.0.62:3000/resultado'});
$http({
            method: 'GET',
            url: '/consultas',
            params: {
                consulta: datacons,
                tabla: tabla
                
            }
        }).success(function(data) {
        
       console.log(data)

          // if(data='[]'){
          //   $scope.msg ='error:dato inexsitente';
          //          $scope.color='danger';
          //         $scope.rows = '';
          // }
          
             if(data.code=='EREQUEST'){
              // console.log(data)
              //    console.log('error de consulta')
                   $scope.msg ='error: '+data.message
                   $scope.color='danger';
                  $scope.rows = '';
                  $scope.cols = '';
                  $scope.message='Error al procesar información'


                } else {
                  // console.log(data)
                   // if(data='[]'){
          //   $scope.msg ='error:dato inexsitente';
          //          $scope.color='danger';
          //         $scope.rows = '';
          // }
                      var j = 1
                      progreso=setInterval(function aumentar(){
                        document.getElementById('valor').innerHTML = j;
                        document.getElementById('barra').setAttribute('value',j++);
                        if (j>maximo){
                          clearInterval(progreso);
                        
                        }
                      },1);
                   $scope.message='Completado...'
                  $scope.msg ='Consulta Ejecutada '
                  $scope.color='success';
                    
                      $scope.datoscons=data.length;
                      var conteo = data;
            var arr = new Array();
            for (h = 0; h<conteo.length; h++){
                 arr.push(conteo[h]);
              }
              $scope.rows = '';
              $scope.cols = '';
                  
                           $scope.rows = arr;             
                           $scope.cols = Object.keys($scope.rows[0]);
                           var cols = Object.keys($scope.rows[0]);
           exportCSVFile(cols, arr, "tabla_resultados"); 

                }

           
        }).
        error(function() {
            console.log('Error al intentar recuperar la información.');
        });
      };


$scope.message='';
}

//console.time("t1");


 //Controlador para login
function Login($scope, $http) {
  console.log('solo este controlador')
$scope.mail = null;
$scope.pass = null;
$scope.token = null;
$scope.msg = ' Token';
// var qr = $http.get('http://1.16.0.62:3000/qr');
// qr.success(function(resultado) {           
//  $scope.qrcode=resultado;
//  var qrcode = resultado;
//  console.log(qrcode);
//   });

$scope.postdat = function (mail, pass, token) {

var data = {
mail: mail,
pass: pass,
token: token

}

var id = data.token;

// $http.post('/admin/:'+id,JSON.stringify(data));
// console.log(id);
// console.log('envia: '+token);
// console.log('envia: '+JSON.stringify(data.token));

//var loginusr = $http.get({'http://1.16.0.62:3000/resultado'});
var loginusr = $http({
            method: 'GET',
            url: '/consulta',
            params: {
                mail: mail,
                pass: pass,
                token: token
            }

        }).success(function(data) {
            if(typeof(data) == 'object'){
                console.log(data);
                var id = data[0].id;
                window.location='/resultadoconsulta/'+id;
                
                      }            
        }).
        error(function() {
            alert('Error al intentar conectarse con la base de datos.');
        });



}


$scope.postdata = function (mail, pass, token) {
var data = {
mail: mail,
pass: pass,
token: token

}

var id = data.token;

// $http.post('/admin/:'+id,JSON.stringify(data));
// console.log(id);
// console.log('envia: '+token);
// console.log('envia: '+JSON.stringify(data.token));

//var loginusr = $http.get({'http://1.16.0.62:3000/resultado'});
var loginusr = $http({
            method: 'GET',
            url: '/recuperar',
            params: {
                mail: mail,
                pass: pass,
                token: token
            }

        }).success(function(data) {
            if(typeof(data) == 'object'){
                $scope.mail = data.login;
                console.log(data.length);

                if(data.length==1){
                  console.log('bienvenido');
                  var id = data[0].token;
                  console.log(data[0].token);
                  window.location='http://1.16.0.62:3000/admin/'+id;
                  $scope.usuario=id;
                  $scope.color='success';
                  $scope.errorlog='Bienvenido'; 
                } else{
                  $scope.errorlog='E-mail, Password  o Token incorrecto'; 
                  $scope.color='danger';
                }
                
            }else{
                alert('Error al intentar conectarse con la Base de Datos.');
            }            
        }).
        error(function() {
            alert('Error al intentar conectarse con la base de datos.');
        });


};
$scope.tokenpost = function (mail,pass) {
var data = {
mail: mail,
pass: pass

}


//$http.post('/resultado', JSON.stringify(data));
//var loginusr = $http.get({'http://1.16.0.62:3000/resultado'});
$http({
            method: 'GET',
            url: '/generatoken',
            params: {
                mail: mail,
                pass: pass
            }
        }).success(function(data) {

             if(mail==null||pass==null){
                   $scope.errorlog='campo email y password deben ser validos para generar token'; 
                   $scope.color='danger';
                } else {
                  console.log(mail+data)
            $scope.qrcode = data;
            $scope.errorlog='Token generado, ingresar en la casilla Token'; 
                   $scope.color='success';
                }

            
                             
            
        }).
        error(function() {
            alert('Error al intentar recuperar el cliente.');
        });

  



//  loginusr.success(function(resultado) {         
// var a = data.pass;
// var a1 = data.mail;
// // var b = resultado[1].pass;
// // var b1 = resultado[1].mail;
// if (resultado[0].login == 1 ){
//   window.location='/admin';
// } else{
//   console.log('err');
//   $scope.errorlog='E-mail o Password incorrecto';
// }
// console.log(data.pass); 
//  $scope.regionalesdia=resultado;
//  console.log(resultado[0].login);
//    });


 // function log(mail, pass) {
 //        $http({
 //            method: 'GET',
 //            url: '/recuperar',
 //            params: {
 //                mail: mail,
 //                pass: pass
 //            }
 //        }).
 //        success(function(data) {
 //            if(typeof(data) == 'object'){
 //                $scope.mail = data.mail;
 //                console.log(data);
                
 //            }else{
 //                alert('Error al intentar recuperar el cliente.');
 //            }            
 //        }).
 //        error(function() {
 //            alert('Error al intentar recuperar el cliente.');
 //        });
 //    };
//Call the services
//$http.post('/usr', JSON.stringify(data));
// .then(function (response) {
// console.log(data.pass);
// console.log(response);
// var fs = $http.get('http://1.16.0.62:3000/fs');
// fs.success(function(resultado) {         
//   $scope.msg=resultado.items[0];
//   var msg = resultado.items[0];
//   if (msg == '1'){
//   console.log('err');

//   //window.location = '/admin';  
//   }
//   else{
//   console.log (msg);
//   }
//   });

// });
};

}


   