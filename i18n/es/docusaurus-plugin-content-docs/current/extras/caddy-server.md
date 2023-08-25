---
id: caddy-server
title: Creando un split Caddy
hide_title: true
hide_table_of_contents: false
sidebar_label: Servidor Web Caddy
description: Esta guía te ayudará a crear un split de Caddy.
keywords:
  - Caddy
  - Caddy Server
---

<div class="text--center">
![logo](https://bloom.host/logo-white.svg)
<h1>Creando un split de Servidor Web Caddy</h1>
</div>

Hola Bloomers! 👋

En esta guía veremos cómo crear un split Caddy para poder hostear páginas web en tu servidor de Bloom.host.

---

## Creando el split Caddy

1. Dirígete a la ventana de **Server Splitter** (División de Servidor) en el panel de control de tu servidor.
![caddyserver](/imgs/extras/caddy_server/1.PNG)

2. En **SERVER NAME** (NOMBRE DEL SERVIDOR) ingresa un nombre para tu split y en **SERVER CATEGORY** (CATEGORÍA DEL SERVIDOR)
   elige **NO SUPPORT SERVERS** (SERVIDORES SIN SOPORTE), en **SERVER TYPE** (TIPO DE SERVIDOR) elige "Caddy Server".
   Para iniciar puedes dejar **MEMORY** (MEMORIA) en 100MB y **DISK** en cuánto espacio tu servidor web necesita. Finalmente
   presiona **SPLIT SERVER** (DIVIDIR SERVIDOR).
![caddyserver](/imgs/extras/caddy_server/2.PNG)

3. Te saldrá una ventana de confirmación como la de abajo. Presiona **YES, SPLIT THIS SERVER** (SÍ, DIVIDIR ESTE SERVIDOR).
   Esto dividirá tu servidor principal y creará un split Caddy.
![caddyserver](/imgs/extras/caddy_server/3.PNG)

---

## Configurando el servidor Caddy.

Para iniciar, simplemente deja los archivos html/php en la carpeta `/public` del servidor Caddy. Ahora ya puedes iniciar el servidor!
Si quieres usar un dominio para tu servidor puedes seguir [esta guía](https://docs.bloom.host/es/ports-and-proxies/) para usar un
proxy inverso.
