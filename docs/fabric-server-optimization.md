---
id: fabric-server-optimization
title: Fabric Server Optimization
hide_title: true
hide_table_of_contents: false
sidebar_label: Fabric Server Optimization
description: How to optimize your fabric minecraft server. 
keywords:
  - Template
  - Fabric
  - Lag
  - Server
  - Server Optimization
  - BloomVPS
  - Pterodactyl Panel
  - Minecraft
image: https://bloomvps.com/assets/images/logo.png
---
# Fabric Server Optimization

## Server.Properties

Navigate to the server.properties file, which can be found in the root directory of the panel after the server is first run. Once there, change the following settings:  
sync-chunk-writes=true<- change this to false instead

view-distance=10<- change to a smaller number, maybe 7 or 8, smaller if still lagging

## Lithium + Phosphor

First, download both [lithium](https://www.curseforge.com/minecraft/mc-mods/lithium) and [phosphor](https://www.curseforge.com/minecraft/mc-mods/phosphor), and put them in your mods folder(created when you first launch the server). The mods will be activated on the next time the server boots up. The mods come with all the optimizations enabled by default, so you won’t need to configure anything.

## Carpet Mod

Carpet mod adds several new features to the game, which are all disabled by default. It also has several modules that can be enabled, which can optimize the game. To start, download it from [here](https://www.curseforge.com/minecraft/mc-mods/carpet), and put it in your mods folder. Then restart the server, and type the following commands.

`/carpet setDefault fastRedstoneDust true` <- Optimizes redstone algorithm

`/carpet setDefault lagFreeSpawning true` <- Optimizes the spawning algorithm

`/carpet setDefault maxEntityCollisions 2` <- Sets a cap to entity collisions

## Chunk Pregeneration

:::important
You should do this before the server is open, as it will cause quite a lot of lag while it is happening. It also takes a lot of time (up to a week)
:::

Generating chunks for the first time often causes a lot of lag, which can severely impact TPS. To pre generate the chunks, we will be using [this](https://www.curseforge.com/minecraft/mc-mods/chunk-pregenerator-fabric) mod. To install it, we just need to place it in our mods folder, and then restart the server. Once this is done, log onto the server and run the following command in the world you want to generate for(only run one task at a time).

`/pregen start <radius>` , where radius is in blocks  
Recommended values: 15,000 radius for overworld, 10,000 for end, 5,000 for nether