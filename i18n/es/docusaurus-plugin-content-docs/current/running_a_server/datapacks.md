---
id: datapacks
title: Datapacks
slug: /datapacks
hide_title: true
hide_table_of_contents: true
sidebar_label: Datapacks
description: Cómo instalar un datapack en tu servidor de Minecraft.
keywords:
  - Minecraft
  - Datapack
  - Lag
  - Server
  - Plugin
  - Bloom.host
  - Pterodactyl Panel
  - Minecraft
image: https://bloom.host/assets/images/logo.png
---

<div class="text--center">
![logo](https://bloom.host/logo-white.svg)
<h1>Datapacks</h1>
</div>

Hola Bloomers! 👋

En esta guía veremos cómo instalar datapacks en tu servidor.

---

:::warning
Los datapacks normalmente usan algo llamado funciones, las cuales corren cada tick y pueden causar mucho lag. Es 
recomendable encontrar una alternativa en plugin al datapack que quieres usar.
:::

Un datapack es un archivo .ZIP que puedes usar para personalizar tu experiencia sin usar mods.

1. Una vez hayas descargado el datapack que deseas, entra a [Duck Panel](https://mc.bloom.host/) y selecciona el servidor
al cual quieres añadir el datapack.

2. Entra a la pestaña de **File Management** (Administración de Archivos).

<div class="text--center">
![img](/imgs/running_a_server/datapacks/1.png)</div>

3. Selecciona tu mundo principal. Normalmente es una carpeta llamada `./world`.

<div class="text--center">
![img](/imgs/running_a_server/datapacks/2.png)</div>

4. Abre la carpeta `datapacks` y click en **Upload** (Subir) en la parte de arriba a la derecha y selecciona tu datapack.
También puedes arrastrar el datapack a la ventana del navegador.

:::important
Recuerda que debes subir el archivo .zip, no debes descomprimirlo.
:::

<div class="text--center">
![img](/imgs/running_a_server/datapacks/3.png)</div>

5. Listo! Reinicia tu servidor y el datapack debería estar funcionando.

:::note
Puedes verificar si el datapack fue instalado correctamente usando el comando `/datapack list enabled`.
:::
