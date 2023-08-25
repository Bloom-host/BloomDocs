---
id: fabric-mods
title: Mods de Fabric
slug: /fabric-mods
hide_title: true
hide_table_of_contents: true
sidebar_label: Instalando Mods de Fabric
description: Cómo instalar mods de Fabric en tu servidor de Minecraft.
keywords:
  - Template
  - Bloom.host
  - Pterodactyl Panel
  - Minecraft
  - Fabric
  - Mods
image: https://bloom.host/assets/images/logo.png
---

<div class="text--center">
![logo](https://bloom.host/logo-white.svg)
<h1>Instalando Mods de Fabric</h1>
</div>

Hola Bloomers! 👋

En esta guía veremos cómo instalar mods de Fabric en tu servidor.

---

:::note
Este tutorial es para servidores de [Fabric](https://fabricmc.org).

Para servidores de Forge, revisa nuestra [guía de instalación de mods de Forge](forge-mods)
:::

1. Encuentra un mod que quieras instalar. Algunas fuentes confiables son [Modrinth](https://modrinth.com/mods?q=&f=categories%3Afabric)
y [CurseForge](https://www.curseforge.com/minecraft/mc-mods/fabric). Asegúrate de siempre obtener tus mods de fuentes
confiables.

2. Tienes dos opciones: Guardar el mod en tu computadora y luego subirla al panel o copiar el link de descarga directo del mod 
y usar la opción de **Download from URL** (Descargar desde URL) que puede ser encontrada en el **File Manager** (Administrador
de Archivos). Si lo descargas en tu computadora puedes subirlo al servidor a través del [panel web](https://mc.bloom.host) o [SFTP](https://docs.bloom.host/how-to-use-sftp). 

3. En la carpeta raíz de tu servidor, ubica la carpeta `/mods`, si no está ahí la puedes crear. Aquí es donde pondrás los mods que quieras instalar!

4. Reinicia el servidor para que el mod se aplique en el servidor.

:::note
Asegúrate de usar la versión correcta de cada mod. A diferencia de Spigot/Paper, los mods no trabajan en más de una versión a la vez.
:::

Adicionalmente, muchos mods de Fabric necesitan la [Fabric-API](https://www.curseforge.com/minecraft/mc-mods/fabric-api).
Descarga la correspondiente a tu servidor y pónla en tu carpeta de `/mods` también.

Consulta la documentación del mod si requiere que los jugadores también instalen los mods para unirse.
