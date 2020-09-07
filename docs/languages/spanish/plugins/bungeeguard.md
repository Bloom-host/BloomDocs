---
id: bungeeguard
title: BungeeGuard
hide_title: true
hide_table_of_contents: false
sidebar_label: BungeeGuard
description: Un plugin que protege contra la falsificación de UUID de BungeeCord. 
keywords:
  - Bungee
  - BungeeCord
  - Java
  - Spigot
  - BloomVPS
  - Pterodactyl Panel
  - Minecraft
  - Español
  - Plugins
image: https://bloomvps.com/assets/images/logo.png
---
# BungeeGuard
## Info
[Jenkins](https://ci.lucko.me/job/BungeeGuard/)

[Wiki](https://github.com/lucko/BungeeGuard)

### ¿Qué hace el plugin?

BungeeGuard es un plugin usado para proteger contra la falsificación de UUID de BungeeCord, lo cual permite a usuarios conectarse como cualquier persona, incluido el dueño del servidor.

## Uso

:::important
Asegúrate que BungeeCord está en la última versión, también asegúrate de usar la versión 1.2 o mayor de BungeeGuard, pues versiones anteriores tienen errores. 
:::

[Descarga el plugin](https://ci.lucko.me/job/BungeeGuard/lastBuild/artifact/bungeeguard-universal/target/BungeeGuard.jar), luego sube el jar en las carpetas de ``plugins`` de Spigot y Bungeecord, y reinicia los servidores. Si necesitas ayuda instalando plugins, puedes ir a [esta guía](https://docs.bloom.host/languages/spanish/basico/instalar-plugins/).

Una vez reiniciados los servidores con Bungeeguard, entra al archivo ``config.yml`` localizado en el directorio de Bungeeguard en el servidor de Bungeecord, y copia el token de autentificación. Luego pega este token dentro del archivo ``config.yml`` en el directorio de Bungeeguard en tu servidor de Spigot.

Ejemplo:
```YAML
# Allowed authentication tokens.  
allowed-tokens:
  - "AUSXEwebkOGVnbihJM8gBS0QUutDzvIG009xoAfo1Huba9pGvhfjrA21r8dWVsa8"
```

Ahora reinicia todos tus servidores con BungeeGuard y prueba si es que funciona correctamente!
