# hola-mundo-cicd
Mi primera app con CI/CD y GitHub Actions

Integrantes: Ignacio chamorro y Agustin

# Hola Mundo CI/CD

## Descripción

Proyecto desarrollado en Node.js para aplicar control de versiones, trabajo colaborativo e integración continua mediante Git, GitHub y GitHub Actions.

## Estrategia de ramas

Se utiliza **GitFlow**, separando el desarrollo de funcionalidades de la versión estable.

```text
main
 ├── develop
 │    ├── feature/agregar-mayusculas
 │    └── feature/agregar-contador
 │
 └── hotfix/...
```

Flujo utilizado:

```text
feature/* → develop → main
hotfix/*  → main
```

Las funcionalidades y correcciones se integran mediante Pull Requests.

## Convenciones

### Ramas

* `main`: versión estable.
* `develop`: integración del desarrollo.
* `feature/nombre`: nuevas funcionalidades.
* `hotfix/nombre`: correcciones urgentes.

### Commits

Se utilizan prefijos descriptivos:

* `feat:` nuevas funcionalidades.
* `fix:` correcciones.
* `test:` pruebas.
* `docs:` documentación.

Ejemplos:

```text
feat: agrega contador de caracteres
feat: agrega función para convertir texto a mayúsculas
test: actualiza imports de funcionalidades
```

## Pull Requests

Las `feature` se integran a `develop` y posteriormente `develop` se integra a `main`.

Los `hotfix` se integran directamente a `main`.

Antes del merge se verifica que los tests y GitHub Actions sean exitosos y que no existan conflictos.

## GitHub Actions

El pipeline de CI se ejecuta:

* Con cada `push` a `develop`.
* Con cada Pull Request hacia `main`.

El pipeline instala las dependencias, ejecuta los tests con Jest y verifica la ejecución de la aplicación.

## Estructura

```text
├── .github/workflows/
│   └── ci.yml
├── app.js
├── app.test.js
├── package.json
└── README.md
```

## Funcionalidades

* Convertir texto a mayúsculas.
* Contar caracteres.
* Funciones base de saludo, despedida y fecha.

Todas cuentan con pruebas unitarias.

## Control de versiones

Se utilizan Git y GitHub para registrar y compartir los cambios mediante `clone`, `branch`, `checkout`, `add`, `commit`, `push`, `pull` y `merge`.


