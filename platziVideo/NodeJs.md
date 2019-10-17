NodeJS > Es un entorno de ejecución para JavaScript construido con el motor V8.
Un entorno de ejecución es una capa que corre por encima de sistema operativo y ejecuta software,
básicamente se encarga de saber como consumir memoria, como acceder a variables y cada cuanto corre el carbash collector.

V8 es un engine de javascript por the comming project para chrome y chromium.

Chrome V8 lo que hace es compilar javscript a código maquína


Lenguajes interpretados se ejecutan muy rápido (pero cuando hay un loop de código muy seguido se demoran)

Lenguajes compilados se demoran mucho en cargar (porque tienen que pasar por proceso de compilación, y luego se ejecutan muy rápido porque ya tienen esa linea compilada)


Javascript solia ser interpretado y ahora es compilado con una técologia llamada Just in time compiler.
Esta tecnología básicamente lo que tiene es un monitor que se encarga de revisar cada cuanto se ejecuta nuestro código, si el código se ejecuta mucho, lo que hace es poner un estado warn, este estado es compilar ese código. Y si el código se ejecuta mucho mucho le coloca un estado hot que lo que hace es optimizar ese código para que cuando se vuelva a llamar, se ejecute la versión optimizada del compilado.


NodeJS fue tomar el engine de javascript chrome v8 para crear un entorno de ejecución y poder usar javascript de lado del servidor...

Otros engine de javascript:
- SpiderMokey (mozilla)
- Javascript core (apple)
- chaka (microsoft) //que pronto van a usar el motor v8

2009 por primera Ryan Dahl vez se mostro nodeJS.
2011 linkedin implementó nodejs en producción
2013 ghost (CMS en node) / paypal cracked (framework de paypal)
2015 sale la competencia de nodejs llamada iodJS (que luego se junta con nodejs y crean nodejs foundation)
2017 nodejs se vuelve mainstring


Diferencias entre nodejs y javascript

En Javascript tenemos el DOM, también tenemos CSSOM, fetch api, webstorage (session storage, localstorage), canvas api, y una serie de api's...
EN nodejs tenemos una serie de modulos, como es el modulo http que nos permite crear servidores, modulo de sistema operativo (nos permite comunicarnos con el OS y tener información sobre él), modulo de utilidades (exclusivas para nodejs), debugger, strings (para manejar colecciones de datos), eventos (definir acciones y dispararlas más adelante), ecmascript modules, y la consola...


El objeto request es un writable string, y los strings heredan de los event emitters por ende también tienen eventos.

STREAMS: Son una colección de datos, tal como lo son los strings y cadenas de texto, solo que en vez de estar en su totalidad se van manejando pedazo por pedazo...
Esto hace que los streams sean poderosos debido a que podemos manejar gran cantidad de datos...



Readable y Writable Streams: Tienen eventos y funciones, tienen eventos porque heredan de la clase event emitter, en los Readable Streams los eventos más comunes son data (que es cuando está recibiendo datos) y end que es cuando termina de recibir estos datos, también tiene un evento error que es cuando ocurre un error en este proceso de datos.
Las funciones más comunes son pipe, read y push. 

Los Writable Streams tenemos el evento drame (que es cuando está emitiendo datos), el evento finish (que es cuando termina de emitir esos datos) y error (que funciona similar como en el Readable Streams)...



El console.log por debajo trabaja con una utilidad llamada utils format...

%s -> string
%d -> número
%j -> json

console.info es un alias del console.log, no cambia para nada...
En javascript de lado del cliente, si vemos utilidades de chrome, cuando hacemos console.info chrome le coloca un pequeño icono. Sin embargo en node es solo un alias...

Lo mismo sucede con console.warn, este es un alias de error y en utilidades de chrome muestra un warn...

console.assert(var1 === var2): assert se utiliza generalmente para evaluar booleanos.

console.trace('hi): El trace nos indica la linea donde está ocurriendo...




ExpressJS: Es un framework para crear aplicaicones web, web services e incluso web apis... Es free y opensource bajo la licencia MIT, fue inspirado ne un framework escrito en ruby llamado sinatra.

Sus características son:
- Liviano y minimalista
- Template engine (pug, mustach, handlebar)
- Routing (podemos manejar expresiones regulares y así capturar parametros)
- Middlewares (interceptan el request object y response object y llamar el middleware que sigue)
- Plugins (que existen por variedades en la comunidad)



Capa de servicios: 

MVC se queda corta en aplicaciones modernas, por ello es importante implementar uan capa de servicios.

Capa de servicios:
- Controllers (middlewares, Routers) -> Se comunican con el API y devuelven JSON. Y los controladores no llaman a otros controladores, solo llaman servicios.

- Services -> Corazon del app, aquí está toda la lógica de negocio. Los servicios pueden llamar otros servicios o pueden llamar librerías.

- Librerias: Capa que está adjunta a librerías externas (BDD, Cloud DB, API's)

La principal diferencia entre parametros y querys es que parametros son cuando están establecidos en la url, y query es cuando se le pone el ?nameQuery=YsePuedeConcatenar...

La única responsabilidad de la ruta es saber como recibe parametros y como se los envia a los servicios, mientras que los servicios si saben que hacer con todos esos parametros y esos datos, y saben como devolver la información


db_user_video
BOQ2MKbkGuRqg74V