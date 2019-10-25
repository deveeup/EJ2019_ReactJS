vendorsfile: Es una herramienta de optimización para que nuestro proyecto tenga una configuración mucho más eficiente al momento de enviar a producción.
Su configuración se hace en webpack con optimization: {...}

renderToString from 'react-dom/server': permite renderizar el componente o app de react a un string.

StaticRouter from 'react'router': Debido a que react-router no tiene como tal una ruta en el servidor, staticRouter nos permite crear una ruta estatsica (que no cambie) para que el servidor no tenga ningun problema al momento de crear las rutas a las cuales vamos a enviar nuestra app.

renderRoutes from 'react-router-config': Nos permite acceder a un metodo que se llama renderRoutes y ahí vamos a poder renderizar las rutas del staticRouter que estamos definiendo anteriormente.

Hydrate: Hace un bind a los eventos y llama a todos los eventos necesarios que tenemos disponibles en el navegador, para que no tengamos que llamar dos veces el mismo contenido.

