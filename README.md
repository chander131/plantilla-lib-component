![Logo-Chander131](/assets/img/logo-chander131.png)

[![Build Status](https://app.travis-ci.com/chander131/plantilla-lib-component.svg?branch=main)](https://app.travis-ci.com/chander131/plantilla-lib-component)

[![Coverage Status](https://coveralls.io/repos/github/chander131/plantilla-lib-component/badge.svg?branch=main)](https://coveralls.io/github/chander131/plantilla-lib-component?branch=main)

# Plantilla para creación de librerias de componentes para React

<p>Proyecto configurado con TypeScript para la creación de librerias de componentes de React, se configuro Storybook para corroborar el funcionamiento de los componentes creados, se integro con Coveralls y Travis para CI, pruebas unitarias con Mocha y Chai<p/>

<h3>Configuraciones del proyecto:<h3/>

```
-TypeScript
-Storybook
-Coveralls
-Travis
-Mocha
-Chai
```

<hr />

## Comandos disponibles

Ejecutar en la raiz del proyecto:

#### Configuración de ambiente local.

-   Descarga el código fuente de github.

```shell
git clone urldir
```

-   Ejecutar comando de instalación.

```shell
npm install
```

#### Creación de componentes.

Para crear un nuevo componente debes de crear una nueva carpeta en el directorio **src/components** con su respectivo nombre, luego debes de crear su archivo **_.stories.tsx_** correspondiente en la carpeta **stories**.

#### Levantar ambiente.

Para levantar ambiente local y probar las historias de los componentes.\
Abrir [http://localhost:6006/](http://localhost:6006/) para ver en el navegador

```shell
yarn storybook o npm run storybook
```

#### Ejecución de pruebas unitarias

```shell
yarn test o npm run test
```

#### Para generar paquete de publicacion

```shell
yarn build o npm run build
```

### Verifica que el codigo cumpla con las reglas de TSLint configuradas en el proyecto

```shell
yarn lint o npm run lint
```

### Genera el build estatico del proyecto

```shell
yarn build-storybook o npm run build-storybook
```

### Genera la documentacion del proyecto

```shell
yarn build-docs o npm run docs
```

### Sube la documentacion del proyecto a GitHub

```shell
yarn build-gh-pages o npm run gh-pages
```

<hr />

## Contributing

Las solicitudes de extracción son bienvenidas. Para cambios importantes, primero abra un problema para discutir lo que le gustaría cambiar.

Asegúrese de actualizar las pruebas según corresponda.

Created by [Daniel Elías](https://danielalexanderelias.netlify.app/)
