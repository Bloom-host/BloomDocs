---
id: votifier
title: Votifier
hide_title: true
hide_table_of_contents: false
sidebar_label: Votifier
description: Votifier permite poner a tu servidor en sitios de votaciones, lo cual incrementa la visibilidad de tu servidor. Superbvote permite dar premios a tus jugadores por votar. 
keywords:
  - Votifier
  - Superbvote
  - Votaciones
  - Spigot
  - BloomVPS
  - Pterodactyl Panel
  - Plugins
  - Español
  - Minecraft
image: https://bloomvps.com/assets/images/logo.png
---
# **Votifier**

## Info

[Nuvotifier Spigot](https://www.spigotmc.org/resources/nuvotifier.13449/)

[Superbvote Spigot](https://www.spigotmc.org/resources/superbvote.11626/)

## ¿Qué hace el plugin?
Votifier es un plugin que permite a tu servidor saber cuando un jugador vota por tu servidor en algún sitio web de listas de servidores.

SuperbVote es un plugin de Premios que puedes personalizar para dar premios a los jugadores que han votado.

## Uso
Primero, descarga el plugin Nuvotifier e instálalo en tu carpeta de **`plugins`**, lo mismo con el plugin Superbvote. Reinicia el servidor y entra al **`config.yml`** de Nuvotifier, anota el puerto que te aparezca.

Luego entra al [Discord de BloomVPS](https://discord.gg/bloom), y pide que tu puerto de Nuvotifiersea abierto.

Luego, entra al **`config.yml`** de Superbvote y añade que clase de premios quieres dar a tus jugadores. También puedes almacenar la información en una base de datos MySQL si lo deseas. Si no sabes cómo, puedes ir a [esta guía!](https://docs.bloom.host/languages/spanish/basico/panel/databases).

```YAML
    mysql:
     host: 123.456.789.10
     username: u420_billytheduck
     password: topsecret
     database: s420_Votifier
     table: votes
     read-only: false
```

Finalmente, guarda ambas Configs y reinicia el servidor.

