---
id: fabric
title: Optimización de Servidores Fabric
hide_title: true
hide_table_of_contents: false
sidebar_label: Optimización de Servidores Fabric
description: Cómo optimizar tu servidor de Minecraft Fabric.
keywords:
  - Template
  - Fabric
  - Lag
  - Server
  - Optimización
  - Optimizacion
  - BloomVPS
  - Pterodactyl Panel
  - Minecraft
  - Español
image: https://bloomvps.com/assets/images/logo.png
---
# Optimización de Servidores Fabric

## Server.Properties

Entra al archivo server.properties, el cual puede ser encontrado en la carpeta raíz de tu servidor después de iniciarlo al menos una vez. Una vez ahí, cambia las siguientes opciones:  
`sync-chunk-writes=true`

Cambia el true por un false (`sync-chunk-writes=false`)

`view-distance=10`

Cambia la view-distance (Distancia de Renderizado) a un número más bajo, entre 7-8, más bajo si el servidor experimenta mucho lag.

## Lithium + Phosphor

Primero, descarga los mods [Lithium](https://www.curseforge.com/minecraft/mc-mods/lithium) y [Phosphor](https://www.curseforge.com/minecraft/mc-mods/phosphor), y colócalos en tu carpeta de mods (creada cuando inicias por primera vez el servidor con Fabric). Los mods serán activados la siguiente vez que inicie el servidor. Estos vienen con todas las optimizaciones activadas por defecto, así que no necesitarás configurar nada.

## Carpet Mod

Carpet mod añade muchas mecánicas al juego, las cuales todas están desactivadas por defecto. Tiene muchos módulos que pueden ser activados, los cuales pueden optimizar el juego. Para iniciar, descárgalo [desde aquí](https://www.curseforge.com/minecraft/mc-mods/carpet), y ponlo en tu carpeta de mods. Luego reinicia el servidor, y escribe los siguientes comandos:

- `/carpet setDefault combineXPOrbs true`
- `/carpet setDefault leadFix true`
- `/carpet setDefault placementRotationFix true`
- `/carpet setDefault fastRedstoneDust true`
- `/carpet setDefault lagFreeSpawning true` 
- `/carpet setDefault maxEntityCollisions 2`

## Pregeneración de Chunks

:::important
Deberías hacer esto antes de abrir el servidor al público, pues va a causar mucho lag mientras procesa. También demora mucho tiempo (hasta varios días)
:::

Generar chunks por primera vez causa mucho lag, lo cual puede impactar mucho los TPS. Para pregenerar, usaremos [este mod](https://www.curseforge.com/minecraft/mc-mods/chunk-pregenerator-fabric). Para instalarlo, simplemente lo pondremos en nuestra carpeta de mods, y luego reinicia el servidor. Una vez esto termine, entra al servidor y escribe el siguiente comando en el mundo que quieras pregenerar (solo un mundo a la vez).

`/pregen start <radius in blocks>`
Valores Recomendados: Radio de 15 000 para el overworld, 10 000 para el End, 5 000 para el Nether.