---
id: resource-packs
title: Paquete de Recursos en Servidor
hide_title: true
hide_table_of_contents: false
sidebar_label: Paquete de Recursos en Servidor
description: Cómo añadir un Paquete de Recursos para todo tu servidor de Minecraft
keywords:
  - Paquete de Recursos
  - Server
  - Bloom.host
  - Pterodactyl Panel
  - Minecraft
  - Español
image: https://bloom.host/assets/images/logo.png
---
# Paquete de Recursos en Servidores

¡Hola Bloomers! En esta guía, repasaremos cómo añadir un Paquete de Recursos para todo tu servidor de Minecraft.

:::tip
El Paquete de Recursos que apliques con esta guía será instalado para todos los usuarios que se unan al servidor (asumiendo que tienen esa opción activada).
Si solo deseas usar un paquete de recursos para ti mismo, puedes usarlo de la forma convencional de Minecraft.
:::

# ¿Cómo instalar un Paquete de Recursos para servidores?

Una vez encontraste el paquete de recursos que deseas en tu servidor, necesitarás subirlo a un sitio web y obtener el link de descarga directa. Puedes usar [este sitio web](https://mc-packs.net/).  

Click en **Examinar**, encuentra tu archivo y súbelo. Asegúrate que es un archivo .zip. Puedes crear un archivo zip en base a una carpeta presionando Click Derecho, "Enviar A" y "Carpeta comprimida (en zip)". 

![Resource Pack](https://lh6.googleusercontent.com/DGmDG2mVxEDxuMYWYyS7FIe6egMTjKLD-BbPsZp7vPb8x2XWUXXXvivePb5DHaotLbzcjnQ-EZhqfUtNk30Wam9uKs96Vv84rxFIdLmewieWF5Iycw-b3LdR4nASumtBWV8tASe4)

Presiona el botón **Upload** y espera a que termine el proceso. Una vez terminado, fíjate en el recuadro de **Download URL** y guarda el URL que aparezca debajo.

![Resource Pack](https://lh5.googleusercontent.com/72m5CjH7PbcMUBc0tdNLVipG5hbroNA4T6XeXH5NYA59QhlbiOF7dI6bHV9syTNQyTz_JcFSx0XXFDAYyie8rkdy9CPkp4IViez8duWqgcoP8Ok_abOYiSvSgpTrWlOjPVuvselG)  

Ahora entra al Explorador de Archivos de tu servidor y abre el archivo `server.properties`.

![Resource Pack](https://lh6.googleusercontent.com/DEDrE7QvDNsurXAYH_7Uy5nKJ26jCXMHjM7NFika7bwHBfN_OKOU51gwsdX5f4flAHcuEYUrebo0yIPOCkuhQdA4to7o0Lo_ZIYlde-9skK2eZ0uAhIBU6EVsQWPQCbP1JcuZHu1)  

Busca la línea que inicia con **resource-pack=** y pega el URL. Guarda el archivo después.

![Resource Pack](https://lh6.googleusercontent.com/pNZcq_2CdI8teiWw-uz_VlKCtQ-0k1z_A0vh8CHRwLHvQWyKPn1uTkKzcHI5u8G_aIsYmlLwrvSt1t-4ZE-4vh9DzXO7ao-x-MlhZyDa4vvKkv177-tJTJNfgS1QdV47vaXS5SjW)  

Reinicia el servidor y ya debería estar aplicado. No olvides de aceptar la confirmación que aparezca al entrar al servidor. Siéntete libre de abrir un ticket en el [Discord de Bloom.host](https://discord.gg/bloom) si necesitas ayuda.
