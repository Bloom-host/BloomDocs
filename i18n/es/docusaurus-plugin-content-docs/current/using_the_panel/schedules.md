---
id: schedules
title: Acciones Automáticas
slug: /schedules
hide_title: true
hide_table_of_contents: true
sidebar_label: Acciones Automáticas
image: https://bloom.host/assets/images/logo.png
---

<div class="text--center">
![logo](https://bloom.host/logo-white.svg)
<h1>Acciones Automáticas</h1>
</div>


### Qué son las Acciones Automáticas?

Acciones Automáticas (o Schedules), son formas de automatizar ciertas acciones a través de  Duck Panel como 
iniciar/apagar/reiniciar el servidor, ejecutar comandos o incluso crear un backup.

La forma en la que funcionan las Acciones Automáticas consisten en ejecutar una serie de Tareas (Tasks) cada vez que pase
el tiempo especificado de esa Acción, por ejemplo, reinicios diarios o anuncios automáticos cada ciertas horas.

---
:::note
El sistema de acciones automáticas y nuestros nodos usan la zona horaria UTC. Toma esto en cuenta al crear acciones 
automáticas. Puedes usar este [sitio web](https://www.timeanddate.com/worldclock/converter.html) para convertir zonas horarias. 
:::

### Creando una Acción Automática

1. Entra al [panel de tu servidor](https://mc.bloom.host/) y selecciona **Schedules** (Acciones Automáticas) en la barra lateral.

2. El menú principal muestra tus acciones programadas actualmente. Para añadir una acción, da click en **Create New** (Crear Nuevo).
 
3. Ingresa un nombre para tu acción y selecciona cuándo y cada cuánto quieres que se repita. Para usuarios avanzados que
son familiares con cron syntax, click en **Advanced** (Avanzado).

<div class="text--center">![img](/imgs/using_the_panel/schedules/1.png)</div>

4. Una vez creada, da click en la acción en la lista principal para ver las tareas a ejecutar. Luego, click en **New Task**
   (Nueva Tarea) para añadir una tarea a tu acción automática.

<div class="text--center">![img](/imgs/using_the_panel/schedules/2.png)</div>

5. En la parte final especificas si quieres correr un comando o una acción de energía. Los comandos se escriben sin el `/`.
También puedes especificar una acción de energía (apagar, encender, etc) o crear un backup como tarea.

6. Aquí también puedes especificar un delay. Esto es útil si quieres hacer algo como mandar un anuncio a tus usuarios
antes de reiniciar el servidor.

<div class="text--center"><img src="/imgs/using_the_panel/schedules/3.png"/></div>

---

## Ejemplos

#### ➤ Reinicios Diarios

<div class="text--center"><img src="/imgs/using_the_panel/schedules/4.png"/></div>

#### ➤ Backups Diarios
Revisa nuestra [guía](backups.md) sobre backups!
