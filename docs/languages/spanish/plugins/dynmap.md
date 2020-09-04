---
id: dynmap
title: Dynmap
hide_title: true
hide_table_of_contents: false
sidebar_label: Dynmap
description: Dynmap es un plugin que muestra un mapa de tu servidor via una página web, permitiendo a los jugadores ver tu mundo desde su navegador.
keywords:
  - Dynmap
  - Mapa
  - Dynmap
  - Plugin
  - Google Earth
  - Google Maps
  - Sitio Web
  - Spigot
  - BloomVPS
  - Pterodactyl Panel
  - Minecraft
  - Español
  - Plugins
image: https://bloomvps.com/assets/images/logo.png
---
# **Dynmap**

## Info

[Dynmap Spigot](https://www.spigotmc.org/resources/dynmap.274/)

[Dynmap Reddit](https://www.reddit.com/r/Dynmap/)

[Dynmap Discord](https://discord.gg/U9aXXUw)

[Dynmap Wiki](https://github.com/webbukkit/dynmap/wiki)

## ¿Qué hace el plugin?
Permite ver tu mundo de Minecraft en 3D en tiempo real; Como Google Maps, puede ser accedido desde donde sea.

![Dynmap preview](https://cdn.discordapp.com/attachments/716405933105872938/750877749954084875/unknown.png)

# Uso
Descarga el plugin Dynmap y ponlo en la carpeta **`plugins`** y reinicia el servidor para generar el archivo **`configuration.txt`**, luego crea una base de datos MySQL. Si tienes dudas en este paso, puedes ver [esta guía](https://docs.bloomvps.com/languages/spanish/basico/panel/databases).

Ahora ingresa la información de la base de datos, recordando eliminar el `#` al inicio de la línea.
(Nota: **No ingreses** la información de abajo, ingresa la información de tu propia base de datos)
```YAML
    storage: 
    type: mysql
     hostname: 123.456.67.2
     port: 3306
     database: s123_dynmap
     userid: u12323402
     password:  123456789
```
Ahora entra el discord de BloomVPS y abre un ticket y pide que el puerto de Dynmap sea abierto para tu servidor. Puedes [unirte desde aquí!](https://discord.com/invite/bloom)

También puedes pedir que tu IP de Dynmap sea añadida al Proxy inverso de BloomVPS, cambiando el link del sitio web de `123.456.67.2:8123` a algo como `mapa.tuservidor.com`, puedes usar [esta guía!](https://docs.bloomvps.com/languages/spanish/extras/reverse-proxy).


