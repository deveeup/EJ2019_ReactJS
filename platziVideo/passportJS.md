Stack de seguridad moderno: JSON web tokens, O Auth 2.0, OpenIdConnect.

Autenticación: Es la acción de verificar la identidad de un usuario (verificar si el usuario existe y si en efecto es él).

Autorización: Es la acción de otorgar permisos de manera limitada a nuestros recursos.

Sesiones: Cuando visitamos un sitio web se crea una petición HTTP (Http es un protocolo que no tiene estado), esto quiere decir que diferentes peticiones http nunca comparten información entre si.
Así que la manera de poder compartir esta información entre peticiones http es mediante el uso de una sesión.


JSONwebToken (JWT): Es un estandar de la industria que nos permite generar demandas entre dos clientes de manera segura.
Consta de 3 partes:
- Header: Este cuenta con dos atributos (typ, alg) que son el tipo y el algoritmo de encriptación de la firma.
- Payload: Acá guardamos toda la información de nuestro usuario, incluso todos los scopt de autorización.
- Signature: Esta parte es la firma y está compuesto del payload y del header codificados, aplicando el algoritmo de encriptación utilizando un secret.

