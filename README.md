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


Naming de ramas

Se utilizan nombres descriptivos según el tipo de cambio:

feature/<nombre> para nuevas funcionalidades.
hotfix/<nombre> para correcciones urgentes.
develop para integrar cambios durante el desarrollo.
main para mantener el código estable.

Los nombres deben ser claros, escritos en minúsculas y utilizando guiones para separar palabras. Por ejemplo:

feature/agregar-despedida
feature/agregar-fecha
hotfix/corregir-saludo
Convención de commits

Los commits utilizan prefijos que permiten identificar rápidamente el tipo de cambio:

feat: para nuevas funcionalidades.
fix: para correcciones de errores.
test: para agregar o modificar pruebas.
docs: para modificaciones de documentación.
chore: para tareas de mantenimiento o configuración.

Ejemplos:

feat: agrega función despedir
fix: corrige validación del nombre
test: agrega pruebas para despedir
docs: actualiza README
Flujo de Pull Requests y Merge

Los cambios se desarrollan inicialmente en ramas feature o hotfix. Una vez terminados, se crea un Pull Request para revisar los cambios antes de integrarlos.

Antes de realizar el merge se debe verificar que:

Los cambios hayan sido revisados.
Los tests automáticos de GitHub Actions estén en verde.
No existan errores conocidos.
El código cumpla las convenciones establecidas.

Después de la aprobación, el Pull Request puede integrarse mediante merge. Una vez integrado el cambio, la rama temporal puede eliminarse para mantener el repositorio organizado.

