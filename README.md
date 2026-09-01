# hola-mundo-cicd
Mi primera app con CI/CD y GitHub Actions

Estrategia de ramificación: GitFlow
Para este proyecto se utilizará GitFlow como estrategia de ramificación, debido a que permite organizar de forma clara el desarrollo de nuevas funcionalidades, correcciones y versiones del proyecto.
GitFlow utiliza una estructura de ramas que separa el desarrollo de nuevas funcionalidades del código estable. Las principales ramas utilizadas son:

main: contiene las versiones estables del proyecto.
develop: rama principal de desarrollo, donde se integran las nuevas funcionalidades antes de llegar a main.
feature/<nombre>: ramas utilizadas para desarrollar nuevas funcionalidades de forma aislada.
hotfix/<nombre>: ramas utilizadas para solucionar errores importantes o urgentes detectados en una versión estable.

Se eligió GitFlow porque facilita la organización del trabajo colaborativo, permite mantener separadas las funcionalidades en desarrollo del código estable y proporciona una trazabilidad clara mediante Pull Requests y commits.

El flujo general utilizado es:

feature/<nombre> → develop → main

Para correcciones urgentes se utiliza:

hotfix/<nombre> → main

Los Pull Requests permiten revisar los cambios antes de integrarlos y GitHub Actions ejecuta automáticamente las pruebas para verificar que el código mantenga su funcionamiento.
