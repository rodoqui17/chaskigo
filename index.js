const express = require('express');
const bodyParser = require('body-parser');
const os = require('os');
const restService = express();
//var firebase = require("firebase-admin");
var mysql = require('mysql');
//var Pusher = require('pusher');
var google = require('googleapis');
var path = require('path');
var fs = require('fs');
var body_parser = require('body-parser');

restService.use(body_parser.json());
restService.use(body_parser.urlencoded({ extended: true }));
//var serviceAccount = require("/My First App-61c04ffb88bc.json");
restService.use(bodyParser.urlencoded({
    extended: true
}));

restService.use(bodyParser.json());




const connection = mysql.createConnection({
    host: '',
   host: 'localhost',
   user: 'root',
   password: '',
   //password: '',
   database: 'test',
   port: 3306
});

var EmailCtrl = require('./ckaskigo/mailCtrl');
//email route
restService.post('/email', EmailCtrl.sendEmail);

restService.get('/data',function(req,res){

connection.connect(function(error){
   if(error){
      throw error;
   }else{
      console.log('Conexion correcta.');
      res.send('conexion establecida');
   }
});
connection.end();
});

restService.use(bodyParser.urlencoded({
    extended: true
}));

restService.use(bodyParser.json());

restService.get('/formulario',function(req,res){
	//res.redirect('https://goo.gl/forms/fLjEg67W4yZ6As7q2');
	res.redirect('https://aswtwech.typeform.com/to/oYuInO');
	 });
	 
	 restService.get('/cuidadores',function(req,res){
	res.sendFile(__dirname + '/papu/www/cuidadores.html');
console.log(__dirname);
	//res.sendFile(path.resolve('./previous-landing/index.html'));
	restService.use(express.static(__dirname+'/papu/www'));

	
	 });
	 
	 restService.get('/consultas',function(req,res){
	 var forma = req.query.forma;
  var servicios = req.query.servicios;
  console.log('consulta: '+forma+' tabla:'+servicios);
  
//  var query = "SELECT * FROM test.doctores where id = \""+forma+"\" LIMIT 1";
var query = "SELECT * FROM test.doctores";
connection.query(query, function(err, results, fields) {
    if (err) {
        console.log("ERROR: ", err);
        res.send('teléfono no registrado...');
 }
 console.log(results);
res.send(results);
});
  
	
	 });
	 

restService.get('/',function(req,res){
	res.sendFile(__dirname+'/index.html');
	//res.sendFile(path.resolve('./previous-landing/index.html'));
	//restService.use(express.static(path.resolve('./previous-landing')));
	restService.use(express.static(__dirname+'/'));
});
restService.get('/contactos',function(req,res){
	res.sendFile(__dirname+'/contact.html');
	//res.sendFile(path.resolve('./previous-landing/index.html'));
	//restService.use(express.static(path.resolve('./previous-landing')));
	restService.use(express.static(__dirname+'/'));
});
restService.get('/funcionamiento',function(req,res){
	res.sendFile(__dirname+'/funcionamiento.html');
	//res.sendFile(path.resolve('./previous-landing/index.html'));
	//restService.use(express.static(path.resolve('./previous-landing')));
	restService.use(express.static(__dirname+'/'));
});
//restService.get('/conif',function(req,res){
//	res.sendFile(__dirname+'/conif/index.html');
//	//res.sendFile(path.resolve('./previous-landing/index.html'));
//	//restService.use(express.static(path.resolve('./previous-landing')));
//	restService.use(express.static(__dirname+'/conif'));
//});

restService.get('/admin',function(req,res){
res.sendFile(__dirname + '/blur-admin/src/app/pages/dashboard');
	//res.sendFile(path.resolve('./previous-landing/index.html'));
	restService.use(express.static(__dirname+'/blur-admin/src'));

});

restService.get('/papu',function(req,res){
res.sendFile(__dirname + '/papu_web/www/index.html');
console.log(__dirname);
	//res.sendFile(path.resolve('./previous-landing/index.html'));
	restService.use(express.static(__dirname+'/papu_web/www'));

});

restService.get('/servicios',function(req,res){
res.sendFile(__dirname + '/papu_web/www/formulario.html');
console.log(__dirname);
	//res.sendFile(path.resolve('./previous-landing/index.html'));
	restService.use(express.static(__dirname+'/papu_web/www'));

});

restService.get('/login',function(req,res){
res.sendFile(__dirname + '/Theme/login.html');
	//res.sendFile(path.resolve('./previous-landing/index.html'));
	restService.use(express.static(__dirname+'/Theme'));

});


restService.get('/panel/:iden',function(req,res){

var id = req.params.iden;

var TokenGenerator = require( 'token-generator' )({
        salt: 'abcdefghijklmnopqrstuvwxyz1234567890',
        timestampMap: 'qwertyuiop', // 10 chars array for obfuscation proposes 
    });

var token = TokenGenerator.generate();
console.log(token);

if (id ==='token'){

res.sendFile(__dirname+'/Theme/index.html');
	//res.sendFile(path.resolve('./previous-landing/index.html'));
	restService.use(express.static(__dirname+'/Theme'));

	}else{
	res.sendFile(__dirname+'/Theme/lock_screen.html');
	//res.sendFile(path.resolve('./previous-landing/index.html'));
	restService.use(express.static(__dirname+'/Theme'));
	}
	
});

restService.get('/generatoken/:tel',function(req,res){
	
var val = req.params.tel;
var TokenGenerator = require( 'token-generator' )({
        salt: 'abcdefghijklmnopqrstuvwxyz1234567890',
        timestampMap: 'qwertyuiop', // 10 chars array for obfuscation proposes 
    });

var token = TokenGenerator.generate();

var query = "SELECT id FROM test.doctores where id = \""+val+"\" LIMIT 1";
connection.query(query, function(err, results, fields) {
    if (err) {
        console.log("ERROR: ", err);
        res.send('teléfono no registrado...');
 }
// Twilio Credentials 
var accountSid = 'ACeb312f0fa2e1e051ba84ce542a3071d8'; 
var authToken = '7dcd6e6eb2efb13d8cbe03fc1093398e'; 
 
//require the Twilio module and create a REST client 
var client = require('twilio')(accountSid, authToken); 
 
client.messages.create({ 
    to: "+591"+val, 
    from: "+19142920804", 
  	body: "hola tu codigo en papu.com es: "+token+" Saludos", 
    //mediaUrl: "https://chatbol.herokuapp.com/papu", 
}, function(err, message) { 
     // console.log(message.sid); 
     if(err){
     	console.log("error, el nro. no existe");
     }
     else{
     	console.log(message.sid); 
		res.redirect('/login');
     	
     }
});

});

});

restService.get('/mensaje/:tel',function(req,res){
	
var val = req.params.tel;
var TokenGenerator = require( 'token-generator' )({
        salt: 'abcdefghijklmnopqrstuvwxyz1234567890',
        timestampMap: 'qwertyuiop', // 10 chars array for obfuscation proposes 
    });

var token = TokenGenerator.generate();
var url = 'http://chatbol.herokuapp.com/panel'

var query = "SELECT id FROM test.doctores where id = \""+val+"\" LIMIT 1";
connection.query(query, function(err, results, fields) {
    if (err) {
        console.log("ERROR: ", err);
        res.send('teléfono no registrado...');
 }
// Twilio Credentials 
var accountSid = 'ACeb312f0fa2e1e051ba84ce542a3071d8'; 
var authToken = '7dcd6e6eb2efb13d8cbe03fc1093398e'; 
 
//require the Twilio module and create a REST client 
var client = require('twilio')(accountSid, authToken); 
 
client.messages.create({ 
    to: "+591"+val, 
    from: "+19142920804", 
  	body: "hola una persona solicitó tus servicios, estas disponible ?, ingresa a tu panel en la siguiente dirección: "+url+"/token", 
    //mediaUrl: "https://chatbol.herokuapp.com/papu", 
}, function(err, message) { 
     // console.log(message.sid); 
     if(err){
     	console.log("error, el nro. no existe");
     }
     else{
     	console.log(message.sid); 
		res.redirect('/login');
     	
     }
});

});

});


restService.get('/personal/:id',function(req,res){
	
	res.sendFile(__dirname+'/orbit-v1.0/index.html');
	//res.sendFile(path.resolve('./previous-landing/index.html'));
	//restService.use(express.static(path.resolve('./previous-landing')));
	restService.use(express.static(__dirname+'/orbit-v1.0'));
});

  
restService.all("/predict/:id", function(req,res){
//var expr = req.body.result.parameters["Criterio"];
//var criterio = "Pediatria";
var expr = req.params.id;
// Copyright 2015-2016, Google, Inc.
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';

// [START predict]


function auth (callback) {
  google.auth.getApplicationDefault(function (err, authClient) {
    if (err) {
      return callback(err);
    }

    // The createScopedRequired method returns true when running on GAE or a
    // local developer machine. In that case, the desired scopes must be passed
    // in manually. When the code is  running in GCE or GAE Flexible, the scopes
    // are pulled from the GCE metadata server.
    // See https://cloud.google.com/compute/docs/authentication for more
    // information.
    if (authClient.createScopedRequired && authClient.createScopedRequired()) {
      // Scopes can be specified either as an array or as a single,
      // space-delimited string.
      authClient = authClient.createScoped([
        'https://www.googleapis.com/auth/prediction'
      ]);
    }
    callback(null, authClient);
  });
}

/**
 * @param {string} phrase The phrase for which to predict sentiment,
 * e.g. "good morning".
 * @param {Function} callback Callback function.
 */
function predict (phrase, callback) {
  auth(function (err, authClient) {
    if (err) {
      return callback(err);
    }
    var trainedmodels = google.prediction({
      version: 'v1.6',
      auth: authClient
    }).trainedmodels;
    // Predict the sentiment for the provided phrase
    trainedmodels.predict({
      // Project id used for this sample
      project: 'fintech-159823',
      id: 'Mesas',
      resource: {
        input: {
          // Predict sentiment of the provided phrase
          csvInstance: phrase.split(/\s/gi)
        }
      }
    }, function (err, prediction) {
      if (err) {
        return callback(err);
      }

      // Received prediction result
      console.log('Sentiment for "' + phrase + '": ' + prediction.outputLabel);
      //res.send('Sentiment for "' + phrase + '": ' + prediction.outputLabel);
  return res.json({
data:{
"facebook": {
	"text":"Selecciona una pagina:",
    "quick_replies":[
      {
        "content_type":"text",
        "title":prediction.outputLabel,
        "payload":prediction.outputLabel
      }
    ]
	   
 }
 }
});
      //callback("Hola mundo", prediction);
    });
  });
}
// [END predict]

// Run the examples


exports.main = function (phrase, cb) {
  predict(phrase || expr, cb || res.json);
   
};

if (module === require.main) {
  exports.main(process.argv.slice(2).shift());
}



});

restService.all('/con', function(req,res){
	var db = firebase.database();
	var ref = db.ref("citas");

var expr = req.body.result.parameters["Criterio"];

//var expr = req.body.result.parameters["Zonas"];

return res.json({
data:{
"facebook": {
"attachment": {
"type": "template",
"payload": {
"template_type": "list",
"top_element_style":"compact",
"elements":expr,
"buttons":[
      {
        "type":"postback",
        "title": "hola",
        "payload": expr
      }
            
    ]
}
}
}
}
});
//  return res.json({
//data:{
//"facebook": {
//	"text":expr,
//    "quick_replies":[
//      {
//        "content_type":"text",
//        "title":"Pagina 1",
//        "payload":"prediction.outputLabel"
//      },
//      {
//        "content_type":"text",
//        "title":"Pagina 2",
//        "payload":"DEVELOPER_DEFINED_PAYLOAD_FOR_PICKING_GREEN"
//      }
//      ,
//      {
//        "content_type":"text",
//        "title":"Pagina 3",
//        "payload":"DEVELOPER_DEFINED_PAYLOAD_FOR_PICKING_GREEN"
//      }
//      ,
//      {
//        "content_type":"text",
//        "title":"Pagina 4",
//        "payload":"DEVELOPER_DEFINED_PAYLOAD_FOR_PICKING_GREEN"
//      }
//      ,
//      {
//        "content_type":"text",
//        "title":"Pagina 5",
//        "payload":"DEVELOPER_DEFINED_PAYLOAD_FOR_PICKING_GREEN"
//      }
//    ]
//	   
// }
// }
//});

//return res.json({
// data2:{
//"facebook": {
// "attachment":{
//      "type":"template",
//      "payload":{
//        "template_type":"receipt",
//        "recipient_name":"Stephane Crozatier",
//        "order_number":"12345678902",
//        "currency":"USD",
//        "payment_method":"Visa 2345",        
//        "order_url":"http://petersapparel.parseapp.com/order?order_id=123456",
//        "timestamp":"1428444852", 
//        "elements":[
//          {
//            "title":"Classic White T-Shirt",
//            "subtitle":"100% Soft and Luxurious Cotton",
//            "quantity":2,
//            "price":50,
//            "currency":"USD",
//            "image_url":"http://petersapparel.parseapp.com/img/whiteshirt.png"
//          },
//          {
//            "title":"Classic Gray T-Shirt",
//            "subtitle":"100% Soft and Luxurious Cotton",
//            "quantity":1,
//            "price":25,
//            "currency":"USD",
//            "image_url":"http://petersapparel.parseapp.com/img/grayshirt.png"
//          }
//        ],
//        "address":{
//          "street_1":"1 Hacker Way",
//          "street_2":"",
//          "city":"Menlo Park",
//          "postal_code":"94025",
//          "state":"CA",
//          "country":"US"
//        },
//        "summary":{
//          "subtotal":75.00,
//          "shipping_cost":4.95,
//          "total_tax":6.19,
//          "total_cost":56.14
//        },
//        "adjustments":[
//          {
//            "name":"New Customer Discount",
//            "amount":20
//          },
//          {
//            "name":"$10 Off Coupon",
//            "amount":10
//          }
//        ]
//      }
//    }
//}
//}
//});

});
 
restService.get('/base', function(req,res){
	


connection.query('SELECT 1', function(err, rows) {

if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
console.log('connected!');
res.send("conectado");
});

 });

restService.get('/usua', function(req,res){
	


connection.query('SELECT * FROM test.doctores', function(err, results, fields) {

if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
console.log(results);
return res.json(results);
});

 });


restService.get('/consulta/:nombre', function(req,res){
  
var cod_doc = req.params.nombre;
var query = "SELECT test.exp_laboral.perfil, test.exp_laboral.puesto, test.exp_laboral.anio_inic, test.exp_laboral.anio_fin, test.exp_laboral.emp, test.exp_laboral.ciudad, test.exp_laboral.Detalle, test.doctores.nombre, test.doctores.cod_doc,test.especialidades.nombre as especialidad,test.doctores.img,test.doctores.telefono,test.doctores.id_fb FROM test.doctores INNER join test.especialidades INNER join test.exp_laboral where test.doctores.especialidad = test.especialidades.esp_cod and test.doctores.cod_doc = test.exp_laboral.cod_doc and test.doctores.cod_doc = \""+cod_doc+"\"";
connection.query(query, function(err, results, fields) {

if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
console.log(results[0]);
return res.json(results[0]);
});

 });
 
 restService.get('/experiencia/:nombre', function(req,res){
  
var cod_doc = req.params.nombre;
var query = "SELECT * FROM test.exp_laboral where test.exp_laboral.cod_doc = \""+cod_doc+"\" order by anio_inic desc";
connection.query(query, function(err, results, fields) {

if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
console.log(results);
return res.json(results);
});

 });
 
  restService.get('/educacion/:nombre', function(req,res){
  
var cod_doc = req.params.nombre;
var query = "SELECT * FROM test.educacion where test.educacion.cod_doc = \""+cod_doc+"\" order by anio_lic desc";
connection.query(query, function(err, results, fields) {

if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
console.log(results);
return res.json(results);
});

 });
 
  restService.get('/idioma/:nombre', function(req,res){
  
var cod_doc = req.params.nombre;
var query = "SELECT * FROM test.idiomas where test.idiomas.cod_doc = \""+cod_doc+"\" order by id_idiomas desc";
connection.query(query, function(err, results, fields) {

if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
console.log(results);
return res.json(results);
});

 });
 
   restService.get('/interes/:nombre', function(req,res){
  
var cod_doc = req.params.nombre;
var query = "SELECT * FROM test.intereses where test.intereses.cod_doc = \""+cod_doc+"\" order by int_doc desc";
connection.query(query, function(err, results, fields) {

if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
console.log(results);
return res.json(results);
});

 });
 
    restService.get('/referencias/:nombre', function(req,res){
  
var cod_doc = req.params.nombre;
var query = "SELECT * FROM test.referencias where test.referencias.cod_doc = \""+cod_doc+"\" order by id_referencias desc";
connection.query(query, function(err, results, fields) {

if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
console.log(results);
return res.json(results);
});

 });
 
 restService.get('/habilidades/:nombre', function(req,res){
  
var cod_doc = req.params.nombre;
var query = "SELECT * FROM test.habilidades where test.habilidades.cod_doc = \""+cod_doc+"\" order by habilidad desc";
connection.query(query, function(err, results, fields) {

if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
console.log(results);
return res.json(results);
});

 });

//firebase.initializeApp({ // CHANGED
//  credential: firebase.credential('My First App-61c04ffb88bc.json'), // CHANGED
//  databaseURL: 'https://blinding-heat-3569.firebaseio.com/'
//});


//firebase.initializeApp({
//  serviceAccount: "My First App-61c04ffb88bc.json",
//  databaseURL: "https://blinding-heat-3569.firebaseio.com/"
//});





//restService.post("/token-device", function(req, res){
//    var token = req.body.token;
//        var db = firebase.database();
//        var tokenDevices = db.ref("token-device").push();
//    tokenDevices.set({
//        token: token
//    });
//    res.send(req.body.token);
//    
//});

//restService.all("/token-device", function(req,res){
//        var nombre = req.body.token;
//        res.send('el nombre es:'+nombre);
//        var db = firebase.database();
//    //     var tokenDevices = db.ref("token-device").push();
//    // tokenDevices.set({
//    //     token: token
//    // });
//    // res.send("guardado existoso");
//    var usersRef = db.ref("users").push();
//usersRef.set({
//  alanisawesome: {
//    date_of_birth: "June 23, 1912",
//    full_name: "Alan Turing2",
//  },
//  gracehop: {
//    date_of_birth: "December 9, 1906",
//    full_name: "Grace Hopper"
//  }
//});


//});

//restService.get('/recupera', function(req,res){
//var db = firebase.database();
//var ref = db.ref("citas");
//ref.orderByKey().on("child_added", function(snapshot) {
//    console.log(snapshot.key);
//  res.send(snapshot.val());
//});
//});
var cont = 0;
var contador = 4;
restService.all('/echo', function(req,res){
	var db = firebase.database();
	var ref = db.ref("citas");

var expr = req.body.result.parameters["Criterio"];

//var expr = req.body.result.parameters["Zonas"];

var google = require('googleapis');

function auth (callback) {
  google.auth.getApplicationDefault(function (err, authClient) {
    if (err) {
      return callback(err);
    }

    // The createScopedRequired method returns true when running on GAE or a
    // local developer machine. In that case, the desired scopes must be passed
    // in manually. When the code is  running in GCE or GAE Flexible, the scopes
    // are pulled from the GCE metadata server.
    // See https://cloud.google.com/compute/docs/authentication for more
    // information.
    if (authClient.createScopedRequired && authClient.createScopedRequired()) {
      // Scopes can be specified either as an array or as a single,
      // space-delimited string.
      authClient = authClient.createScoped([
        'https://www.googleapis.com/auth/prediction'
      ]);
    }
    callback(null, authClient);
  });
}

/**
 * @param {string} phrase The phrase for which to predict sentiment,
 * e.g. "good morning".
 * @param {Function} callback Callback function.
 */
function predict (phrase, callback) {
  auth(function (err, authClient) {
    if (err) {
      return callback(err);
    }
    var trainedmodels = google.prediction({
      version: 'v1.6',
      auth: authClient
    }).trainedmodels;
    // Predict the sentiment for the provided phrase
    trainedmodels.predict({
      // Project id used for this sample
      project: 'fintech-159823',
      id: 'Mesas',
      resource: {
        input: {
          // Predict sentiment of the provided phrase
          csvInstance: phrase.split(/\s/gi)
        }
      }
    }, function (err, prediction) {
      if (err) {
        return callback(err);
      }

      // Received prediction result
      console.log('Sentiment for "' + phrase + '": ' + prediction.outputLabel);
      //res.send('Sentiment for "' + phrase + '": ' + prediction.outputLabel);
  return res.json({
data:{
"facebook": {
	"text":"su requerimiento sera atendido por:",
    "quick_replies":[
      {
        "content_type":"text",
        "title":prediction.outputLabel,
        "payload":prediction.outputLabel
      }
    ]
	   
 }
 }
});
      //callback("Hola mundo", prediction);
    });
  });
}
// [END predict]

// Run the examples


exports.main = function (phrase, cb) {
  predict(phrase || expr, cb || res.json);
   
};

if (module === require.main) {
  exports.main(process.argv.slice(2).shift());
}


//var query = connection.query('INSERT INTO usuarios SET ?', consulta, function(err, result) {
//  // Neat!
//});
//console.log(query.sql); // INSERT INTO posts SET `id` = 1, `title` = 'Hello MySQL'
// 
 //INSERT INTO myTable (field1, field2, field3) VALUES ?
// var query = 'INSERT INTO usuarios VALUES '+(cod_doc,apellido,apellido,telefono);
//connection.query(query,function(err, result) {
//    	if (err){
//    console.log(err);
//    }
//    else{
//        console.log(result);
//        }
//    });




	//var ID = req.params.id;
	
//lanzarSiempreALaHora(hora,minutos, respuesta);


});

restService.post('/echo_origen', function(req, res) {

var db = firebase.database();
var cod_doc = req.body.result.parameters["codigo"];
var fecha = req.body.result.parameters["time"];
var apellido = req.body.result.parameters["any"];
var telefono = req.body.result.parameters["number"];
var doctor = req.body.result.parameters["Doctores"];
var esp = req.body.result.parameters["Especialidades"];
var zona = req.body.result.parameters["Doctores"];

//var ref = db.ref("citas");
var usersRef = db.ref("citas").push;
usersRef.set({
     especialista: cod_doc,
    fecha: fecha,
	paciente: apellido,
	telefono: telefono
  
});

connection.connect();

var consulta = {
usuarioscol: apellido,
    usuarioscol1: cod_doc,
    usuarioscol2: telefono
};
 
 
 connection.query(quer,function(err, result) {
    	if (err){
    console.log(err);
    }
    else{
        console.log(result);
        }
    });

connection.end();

//var datalist = 
return res.json({
	data: {
"facebook": {
"attachment": {
"type": "template",
"payload": {
"template_type": "generic",
"elements":[{
	"title":"Tu cita ha sido registrada con:",
	"subtitle":doctor+' a horas: ',
	"image_url":"http://shared.frenys.com/assets/1003092/6113427.png",
	"buttons":[{
		"type":"element_share",
		"title":doctor,
	}
//	,
//	{
//		"type":"phone_number",
//		"title":"telefono",
//		"payload":telefono
//	}
	]
}
//,
//{
//	"title":"Gracias por confiar en:",
//	"subtitle":doctor,
//	"image_url":"http://shared.frenys.com/assets/1003092/6113427.png",
//	"buttons":[{
//		"type":"element_share"
//	}]
//},
//{
//	"title":"Gracias por confiar en nosotros:",
//	"subtitle":doctor,
//	"image_url":"http://shared.frenys.com/assets/1003092/6113427.png",
//	"buttons":[{
//		"type":"element_share"
//	}]
//}

]
}
}
}
}
	
});


	   
	   
//      return res.json({
//      
//        //speech: 'su información se ha guardado con los siguientes datos'+'\n'+ 'Nombre: '+lastname+'\n'+'CI: '+numero+'\n'+'Gracias, sera notificado el día de su cita',
//        speech : 'se ha registrado tu cita, con '+doctor+' te enviaremos un mensaje 30 min. antes de la consulta, para hacerte recuerdo.',
//        data: cod_doc,
//        displayText: cod_doc,
//        source: 'webhook-echo-sample'
//    });
    
});


//restService.post('/slack-test', function(req, res) {
//
//    var slack_message = {
//        "text": "Details of JIRA board for Browse and Commerce",
//        "attachments": [{
//            "title": "JIRA Board",
//            "title_link": "http://www.google.com",
//            "color": "#36a64f",
//
//            "fields": [{
//                "title": "Epic Count",
//                "value": "50",
//                "short": "false"
//            }, {
//                "title": "Story Count",
//                "value": "40",
//                "short": "false"
//            }],
//
//            "thumb_url": "https://stiltsoft.com/blog/wp-content/uploads/2016/01/5.jira_.png"
//        }, {
//            "title": "Story status count",
//            "title_link": "http://www.google.com",
//            "color": "#f49e42",
//
//            "fields": [{
//                "title": "Not started",
//                "value": "50",
//                "short": "false"
//            }, {
//                "title": "Development",
//                "value": "40",
//                "short": "false"
//            }, {
//                "title": "Development",
//                "value": "40",
//                "short": "false"
//            }, {
//                "title": "Development",
//                "value": "40",
//                "short": "false"
//            }]
//        }]
//    }
//    return res.json({
//        speech: "speech",
//        displayText: "speech",
//        source: 'webhook-echo-sample',
//        data: {
//            "slack": slack_message
//        }
//    });
//});

//lanzar mensaje

restService.get('/tareas:id', function(req,res){
	res.send("ejecutando tarea de copia de datos al"+new Date());
	
	var workFrom = "11:40";
	var time = new Date("01/01/1970" + " " + workFrom);
	console.log(time.getHours() + ':' + time.getMinutes());
	
	var ID = req.params.id;
	
lanzarSiempreALaHora(20,ID, tarea);
});



function tarea(){
	
	
console.log('acá va la tarea', new Date()); 

//	var db = firebase.database();
//	//var ref = db.ref(ID);
////var ID = req.params.id;
////		var user = req.params.user;
////			var anio = req.params.anio;
//	var usersRef = ref.child("tarea");
//	usersRef.set({
//     especialista: "jquiroz",
//    fecha: "13:00",
//	paciente: "quiroz",
//	telefono: "6543233"  
//});

}




function lanzarSiempreALaHora(hora, minutos, tarea){
	


    var ahora = new Date();
    //var maniana = new Date(ahora.getFullYear(), ahora.getMonth(), ahora.getDate(), time.getHours(), time.getMinutes());
    console.log('lanzado el :',ahora);
//    console.log('ejecutando el :',maniana);
    var momento = new Date(ahora.getFullYear(), ahora.getMonth(), ahora.getDate(), hora, minutos);
    if(momento<=ahora){ // la hora era anterior a la hora actual, debo sumar un día
		momento = new Date(momento.getTime()+1000*60*60*24);
        //momento = new Date(momento.getTime()+1000*60);
    }
    console.log('para ser ejecutado en',momento,momento.getTime()-ahora.getTime());
        setTimeout(function(){
        tarea();
        lanzarSiempreALaHora(hora,minutos,tarea);
    },momento.getTime()-ahora.getTime());
    
}

//lanzarSiempreALaHora(18,42, tarea);




restService.listen((process.env.PORT || 8080), function() {
    console.log("Server up and listening");
});
