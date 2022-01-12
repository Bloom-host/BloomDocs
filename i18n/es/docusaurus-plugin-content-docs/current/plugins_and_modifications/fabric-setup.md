---
id: fabric-setup
title: Instalando Fabric
slug: /fabric-setup
hide_title: true
hide_table_of_contents: false
sidebar_label: Instalando Fabric
description: Esta guía te ayudará a instalar Fabric en tu servidor de Minecraft
keywords:
  - Fabric
  - Minecraft
  - Modded
  - Bloom.host
---

<div class="text--center">
<img src="https://bloom.host/logo-white.svg" alt="logo" height="50%" width="50%"/>
<h1>Setting Up Fabric</h1>
</div>

Hola Bloomers! 👋

En esta guía veremos cómo instalar Fabric en tu servidor.

---

### Qué es Fabric?

Fabric es una plataforma de mods ligera para Minecraft.
Los mods pueden ser usados para modificar, remover o incluso añadir contenido a Minecraft.

### Instalando Fabric

1. Dirígete a [fabricmc.net](https://fabricmc.net/use/?page=server) y descarga el instalador.
2. Inicia el Instalador de Fabric que descargaste, selecciona la pestaña de **Server** (Servidor) y selecciona la versión
de Minecraft que deseas instalar. 

:::note
Da click en **Show Snapshots** (Mostrar Snapshots) si quieres usar Snapshots.
:::

![Bloom.host Fabric](../../../../../static/imgs/plugins_and_modifications/fabric_setup/1.png)

3. Click en install, lo cual va a descargar un **fabric-server-launch.jar**. También te va a mostrar un botón de 
**Download server jar** (Descargar Server Jar). Presiona eso también.

![Bloom.host Fabric](../../../../../static/imgs/plugins_and_modifications/fabric_setup/2.png)

4. Ahora puedes cerrar el launcher de Fabric, y deberías tener un `fabric-server-launch.jar` y un `server.jar`.  
5. Sube esos archivos a tu servidor de Bloom mediante [SFTP](../using_the_panel/sftp.md) o [Duck Panel](https://mc.bloom.host/).
6. Dirígete a la pestaña de **Startup** (Inicio) de [Duck Panel](https://mc.bloom.host/) y cambia la opción de
**Server Jar File** (Archivo de Jar de Servidor) a `fabric-server-launch.jar`.  
7. Reinicia el servidor y deja que los archivos se generen. Esto puede tomar unos minutos.
8. Tu servidor de Fabric está ahora listo!

### Instalando Mods de Fabric

Entra a [esta guía](fabric-mods) para aprender cómo instalar mods en Fabric.

---
