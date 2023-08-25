---
id: backups
title: Backups
slug: /backups
hide_title: true
hide_table_of_contents: false
sidebar_label: Administrando Backups
image: https://bloom.host/assets/images/logo.png
---

<div class="text--center">
![logo](https://bloom.host/logo-white.svg)
<h1>Backups</h1>
</div>

### ¿Cómo son administrados los Backups?

- Puedes crear backups incrementales completamente gratuitos. Incrementales significa que, después del primer backup,
solo se van a guardar y subir los archivos que han cambiado desde el último backup. Todos los backups son guardados en 
la nube!

- Puedes crear backups manuales e incluso automáticos y luego restaurarlos, descargarlos, montarlos o borrarlos luego.

Puedes crear hasta 3 backups por cada 24 horas.

- Planes **Essentials** pueden almacenar hasta **3** backups.
- Planes **Performance** pueden almacenar hasta **5** backups.
- Planes **Performance+** pueden almacenar hasta **10** backups.

---

### Creando Backups Manuales

1. Entra a la sección de Backups en el panel.
Aquí puedes encontrar tus backups actuales, juntos con un botón de **Create Backup** (Crear Backup).

2. Al darle click a este botón, te saldrá esta ventana:

![img](/imgs/using_the_panel/backups/1.png)

3. Dale un nombre a tu backup y presiona el botón **Start Backup** (Iniciar Backup) para continuar.
El backup empezará a correr en el fondo. Esto puede demorar un tiempo dependiendo del tamaño de tu servidor.

---

### Configurando Backups Automáticos

1. Entra a la sección de Schedules en el panel.
2. Vamos a añadir un schedule que cree un backup, aunque los schedules pueden hacer mucho más!
Mira algunos ejemplos en nuestra guía de [Schedules](schedules.md). Ahora mismo solo da click a **Create Schedule** (Crear Schedule). 
3. Elige cuándo deseas crear un backup y da click a **Create Schedule** (Crear Schedule). En este caso haremos uno cada
8 horas, creando 3 backups por día.
![img](/imgs/using_the_panel/backups/2.png)
4. Luego, simplemente añade los comandos y acciones que deseas tener.
En este ejemplo apagaremos el servidor antes de crear el backup y lo iniciaremos después que sea creado.
Este no es un paso necesario pero es una buena práctica para evitar corrupción de datos.
![img](/imgs/using_the_panel/backups/3.png)

Si alcanzas el límite de backups de tu plan, el backup más viejo será reemplazado por uno nuevo.

---

### Restaurando Backups

Para restaurar un backup, simplemente entra a la sección de Backups, selecciona el backup y dale click a **Restore** (Restaurar).
Ten en cuenta que esto va a reemplazar todos los archivos con nombres duplicados. 

![img](/imgs/using_the_panel/backups/4.png)

---

### Montando Backups

En caso que solo quieres sacar una pequeña cantidad de archivos de un backup, puedes 'montar' el backup en tu servidor.
Mientras un backup está montado, no puedes apagar o iniciar tu servidor ni crear nuevos backups. 

Para montar un backup:
1. Entra en la página de backups
2. En la parte derecha, da click en otras opciones
3. Click en **Mount** (Montar), selecciona la carpeta donde quieres montarlo o déjalo como está por defecto.
4. Click en **Mount Backup** (Montar Backup) para confirmar.
5. Entra al **File Manager** (Administrador de Archivos) y verás una carpeta con todos los archivos de tu backup!

### Cómo restaurar archivos/carpeta específicas de un backup

1. Puedes restaurar archivos específicos de un backup montándolo.
2. Una vez hayas montado el backup, busca el archivo que quieres restaurar.
3. Da click en `...` al lado del archivo y click en **Restore** (Restaurar). Esto devolverá el archivo a su carpeta original.

![img](/imgs/using_the_panel/backups/5.png)
