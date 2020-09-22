---
id: chunky
title: Chunky
hide_title: true
hide_table_of_contents: false
sidebar_label: Chunky
description: Un buen plugin llamado Chunky, que permite pregenerar un mundo de Minecraft rápida y eficazmente para poder lidiar con el lag.
keywords:
  - Chunky
  - Server Pregeneration
  - Spigot
  - Bloom.host
  - Pterodactyl Panel
  - Minecraft
  - Lag
  - Plugins
  - Español
image: https://bloom.host/assets/images/logo.png
---
# Chunky
## Info
[Página de Spigot](https://www.spigotmc.org/resources/chunky.81534/)

[Wiki](https://github.com/pop4959/Chunky/wiki)
### ¿Qué hace el plugin?
Pregenera chunks rápida y eficazmente, lo cual puede servir para poder lidiar con el lag.

## Uso

:::caution
Aunque normalmente notarás un aumento significante en el rendimiento del servidor, el proceso es tan intenso que puede que experimentes lag mientras está siendo usado. Generar mapas muy grandes también puede usar mucho espacio de disco.
:::

Para comenzar a generar, primero debes elegir un mundo y un radio con el comando `/chunky world <mundo>`, y luego el comando `/chunky radius <radio en bloques>`.

Luego de eso, puedes usar `/chunky start`, para comenzar a pregenerar.

:::important
Normalmente es mejor forzar esta pregeneración con un worldborder (Borde de Mundo), de modo que las personas no generen más chunks y causen más lag. También es bueno incrementar el radio por ~ 256 bloques (16 chunks), de modo que no se generen más chunks, incluso si es que las personas están justo al lado del borde.  
:::

Si deseas parar o cancelar la pregeneración, puedes usar `/chunky cancel`, y `/chunky pause`.

Para continuar una pregeneración pausada, usa `/chunky continue`.


:::tip
Puedes usar la tabla de abajo para hacer un estimado del espacio que ocupará tu mundo después de ser pregenerado. Los valores de abajo son basados en 2k por 2k bloques (1k radio).
:::

| Mundo         |  Tamaño   |
|---------------|-----------|
| world         | 110 MB    |
| world_nether  | 115 MB    |
| world_the_end | 75 MB     |
