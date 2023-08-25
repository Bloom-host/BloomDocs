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

![img](/imgs/running_a_server/datapacks/1.png)

3. Selecciona tu mundo principal. Normalmente es una carpeta llamada `./world`.

![img](/imgs/running_a_server/datapacks/2.png)

4. Abre la carpeta `datapacks` y click en **Upload** (Subir) en la parte de arriba a la derecha y selecciona tu datapack.
También puedes arrastrar el datapack a la ventana del navegador.

:::important
Recuerda que debes subir el archivo .zip, no debes descomprimirlo.
:::

![img](/imgs/running_a_server/datapacks/3.png)

5. Listo! Reinicia tu servidor y el datapack debería estar funcionando.

:::note
Puedes verificar si el datapack fue instalado correctamente usando el comando `/datapack list enabled`.
:::
