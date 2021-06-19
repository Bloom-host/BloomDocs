---
id: performance-mods
title: Performance Mods
slug: /f_performance_mods
hide_title: true
hide_table_of_contents: false
sidebar_label: Performance Mods
description: A list of mods that will help combat lag on fabric servers.
keywords:
  - Performance
  - Fabric
  - Bloom.host
  - Pterodactyl Panel
  - Minecraft
image: https://bloom.host/assets/images/logo.png
---

<div class="text--center">
<img src="https://bloom.host/assets/images/logo.png" alt="logo" height="50%" width="50%"/>
<h1>Performance Mods for Fabric</h1>
</div>

# Performance Mods

Make sure to also check out the [Server Optimization Guide](../../running_a_server/optimization.md)

## How to install these mods

Check out the [Installing Fabric Mods](../fabric-setup.md) page.

## The mod list

### Carpet Mod

Carpet mod adds several new features to the game, which are all disabled by default. It also has several modules that can be enabled, which can optimize the game. To start, download it from [here](https://www.curseforge.com/minecraft/mc-mods/carpet), and put it in your mods folder. Then restart the server, and type the following commands.

`/carpet setDefault lagFreeSpawning true` 

`/carpet setDefault maxEntityCollisions 2`

### Chunky 

Chunk pre-generation mod, which is helpful for reducing server lag caused by chunk loading.  
See [Fabric Mods: Chunky](../fabric_mods/chunky_fabric.md)

[Modrinth Page](https://modrinth.com/mod/chunky)  
[CurseForge Page](https://www.curseforge.com/minecraft/mc-mods/chunky-pregenerator)

### Lithium

Performance enhancing mod by Jellysquid that optimizes general-purpose systems.

"Lithium is a general-purpose optimization mod for Minecraft which works to improve a number of systems (game physics, mob AI, block ticking, etc) without changing any behavior. It works on both the client and server, and can be installed on servers without requiring clients to also have the mod. With the mod installed, you can see on average a 45% improvement to server tick times, resulting in a much leaner game."

[Modrinth Page](https://modrinth.com/mod/phosphor)  
[CurseForge Page](https://www.curseforge.com/minecraft/mc-mods/phosphor/)  

### Phosphor

Performance enhancing mod by Jellysquid that optimizes the lighting engine.

"Phosphor is a Minecraft mod which works to optimize one of game's most inefficient areas-- the lighting engine. It works on both the client and server, and can be installed on servers without requiring clients to also have the mod. With Phosphor, the amount of time the game takes to generate chunks can be halved for some dimensions, and frame stuttering experienced while traversing the world can be significantly reduced. It's a no-compromises solution for improving performance either in single-player or large multi-player servers, and changes no features or behaviors of the vanilla game."

[Modrinth Page](https://modrinth.com/mod/lithium)  
[CurseForge Page](https://www.curseforge.com/minecraft/mc-mods/phosphor/)

### Starlight

:::caution
This mod is still in beta, do NOT use this on servers you care about.
:::

Performance enhancing mod by Spottedleaf that completely rewrites the vanilla lighting engine.  
It's faster than phosphor, but the author does not considered it fully stable yet.

[Github Page](https://github.com/Spottedleaf/Starlight)
