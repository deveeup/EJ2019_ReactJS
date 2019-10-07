- React es una librería o mejor conocida como biblioteca de javascript para construir interfaces de usuarios (esa es su única finalidad).
- Lo utilizamos para crear interfaces, dentro de sus bondades es que es declarativo y esto nos permite crear interfaces de usuario muy amigables y de forma sencilla, está basado en componente de tal manera que podemos separar el código.
- React nace en 2013 en facebook, dandole soporte al timeline...

Virtual DOM: Es una herramienta que implementa react para darle performance y velocidad a nuestros desarrollos. Su objetivo es actualizar los bloques o los componentes que se vean afectados y no toda la página.


Componentes: En react tenemos 3 tipos de componentes, los cuales son:
  - Los componentes Stateful son los más robustos de React. Los usamos creando clases que extiendan de React.Component. Nos permiten manejar estado y ciclo de vida (más adelante los estudiaremos a profundidad).
  - Stateless o Presentacionales. Los usamos creando funciones que devuelvan código en formato JSX
  - Presentational: Devuelven JSX hardcodeado, es decir es un return explicito, no trae lógica, no trae propiedades.



JSX: Javascript + html.

Ciclo de vida de los componentes:

  - Montado:
    - constructor(): Este es el primer método al que se hace un llamado, aquí es donde se inicializan los métodos controladores, eventos del estado
    - getDerivedStateFromProps(): Este método se llama antes de presentarse en el DOM y nos permite actualizar el estado interno en respuesta a un cambio en las propiedades, es considerado un método de cuidado, ya que su implementación puede causar errores sutiles.
    - render(): Si queremos representar elementos en el DOM en este método es donde se escribe esta lógica, usualmente utilizamos JSX para trabajar y presentar nuestra aplicación.
    - componentDidMount(): Este método se llama inmediatamente que ha sido montado en el DOM, aquí es donde trabajamos con eventos que permitan interactuar con nuestro componente.


  - Actualización:
    - getDerivedStateFromProps(): Este método es el primero en ejecutarse en la fase de actualización y funciona de la misma forma que en el montaje.
    - shouldComponentUpdate(): Dentro de este método se puede controlar la fase de actualización, podemos devolver un valor entre verdadero o falso si queremos actualizar o no el componente y es utilizado principalmente para optimización.
    - render(): Se llama el método render que representa los cambios en el DOM.
    - componentDidUpdate(): Este método es invocado inmediatamente después de que el componente se actualiza y recibe como argumentos las propiedades y el estado y es donde podemos manejar nuestro componente.


  - Desmontado:
    - componentWillUnmount(): Este método se llama justo antes de que el componente sea destruido o eliminado del DOM.


  - Manejo de Errores:
    - getDerivedStateFromError(): Una vez que se lanza un error este es el primer método que se llama, el cual recibe el error como argumento y cualquier valor devuelto en este método es utilizado para actualizar el estado del componente.
    - componentDidCatch(): Este método es llamado después de lanzarse un error y pasa como argumento el error y la información representada sobre el error.

#### Sass styles
mini-css-extract-plugin: Nos va a permitir extraer el css del bundle resultante para poder crear un nuevo archivo de css.


### Fake API.
sudo npm i json-server -g
 json-server fileName.json

### React hooks
Fue presentado en Octubre de 2018 en la ReactCONF en Las Vegas por Dan Abramov, quien nos contó y nos mostró como trabajar con esta implementación la cual no da estado y ciclo de vida de nuestros componentes de tipo función o mejor conocidos como states.
Esto surge debido a que la gente se complicaba un poco al momento de usar las clases, lo que quiere decir que no sabian como inicializar un state, trabajar con el constructor o inicializar el building que estabamos trabajando.
Otro de los motivos era que se volvia un poco enredado ya que tocaba pasar el estado por todos los componentes. Ahora vamos a poder hacer llamados o ciclos de vida en el componente más lejano sin necesidad de estar transmitiendo entre cada uno de ellos la información.

React Hooks solo está disponible a partir de la versión 16.8.

useState: Lo vamos a utilizar para manejar el estado.

useEffect: Vamos a hacer las transmisiones, lo que significa que vamos a poder hacer peticiones de alguna API o de algún evento que se tenga que transmitir en los componentes, asi como tambien estar escuchando algun cambio.

useEffect: Recibe dos parametros, primero recibe la función donde se hace el fetch, y luego de ello reicbe como segundo parametro el cual se encarga de estar escuchando alguna propiedad que pueda cambiar y asi volver a ejecutarse.
Si no le pasamos esta propiedad, se crea un loop infinito.


### if 
{videos.mylist.length > 0 &&}

### PropTypes
Nos ofrece una manera dínamica de comprobar las propiedades que les pasamos a nuestros componentes, de esta manera sabemos si es un string, arreglo, booleano, número, función, etc.


### Install react-router-dom
- npm i react-router-dom -D
- Create file routes/App.js
- import { BrowserRouter, Route } from 'react-router-dom'
- export default const App = () => (
  <BrowserRouter>
    <Route exact path="/" component={Home}/>
  </BrowserRouter>
)