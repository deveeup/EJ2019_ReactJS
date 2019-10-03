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

