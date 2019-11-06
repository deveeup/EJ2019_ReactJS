Cookies vs Session Storage vs Local Storage

Local Storage: tiene un almacenamiento máximo de 5MB y la información almacenada en el LocalStorage no se va con cada request que hacemos al servidor.
Esta información persiste aún así cerremos la ventana del navegador.

Session Storage: Es muy similar al local storage, solo que la información está disponible por tab o window, por ende cuando se cierra el tab o el window la información deja de persistir.

Cookies: Tienen un almacenamiento de 4KB, y lo interesant es que si se le puede establecer un tiempo de expiración, para localStorage o sessionStorage esto lo tendríamos que hacer programaticamente con JavaScript
Una de las desventajas que tienen las cookies es que cada petición que se haga al servidor (bien sea img o html), la cookie se va a ir adjuntoa en la petición.
Una de sus ventajas es que las cookies se pueden hacer seguras mediante un flag llamado http-only, esto permite que la información de la cookie solo sea accedida y modificada en el servidor.

¿Cuando debemos usar uno u otro?
- Si la información no es sensible se puede guardar en localstorage o session storage.
- Si la información es medianamente sensible lo más recomendado es usar el session storage.
- Si la información es sensible como contraseñas o jwt, lo más recomendado es almacenarlo en una cookie teniendo en cuenta el flag http only.

