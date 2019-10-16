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


