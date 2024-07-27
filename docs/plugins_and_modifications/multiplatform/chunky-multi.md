---
id: chunky
title: Chunky
slug: /multiplatform/chunky
hide_table_of_contents: true
sidebar_label: Chunky
description: A cool plugin/mod called chunky, which lets you pre generate a minecraft world quickly and efficiently to avoid lag.
keywords:
  - Chunky
  - Server Pregeneration
  - Spigot
  - Fabric
  - Bloom.host
  - Pterodactyl Panel
  - Minecraft
---

## What does the plugin/mod do?

Chunky is a fast, easy, and safe tool for pre-generating chunks on your server.

Chunk generation in Minecraft is slow, which can sometimes cause server lag or slow chunk loading for players. Generating them upfront will help improve performance and gameplay on almost any server.

## How to install

:::important
If you run Chunky on Paper, adding the argument shown below can greatly improve performance. You can add this argument on the "Startup" section of the panel, within the "Startup Flags" field. This flag should be the last one in the startup command. Remember to remove this flag once world generation is complete.

 -DPaper.WorkerThreadCount=# (# = the core count of your plan)
:::

For Bukkit/Spigot/Paper servers, check out the [Installing Bukkit/Spigot/Paper plugins](/installing-plugins) page.

For Forge/Fabric servers, check out the [Installing Fabric Mods](/mods-install) page.

## Usage

:::caution
While you will normally notice a significant boost in server performance after you are done pre-generating your chunks, the process is quite intensive, and you may see server lag while generating. Generating large worlds can also use a lot of storage space.
:::

To start generation, you should first select a world by using `chunky world <world>`, and then the radius with `chunky radius <blocks>`.

After that, you can run `chunky start` to start generating.

:::important
It's a good idea to reinforce the pre-generated area by using a world border so that players don't explore too far in your world and generate new chunks. When doing this, you can also increase the radius by ~200 blocks (10 chunks) so that there is some buffer when players are right next to the border.
:::

If you wish to pause or cancel pre-generation, you can run `chunky pause` or `chunky cancel`.

If it is paused, you can run `chunky continue` to resume pre-generation.


## File Size

The table below can be used to estimate the file size of your world after you generate it. The values below are for 2k by 2k blocks (1k radius). Note that every time you double the radius, the area (and correspondingly the disk space / time taken) increases by 4x.


| World         | File Size |
|---------------|-----------|
| world         | 110 MB    |
| world_nether  | 115 MB    |
| world_the_end | 75 MB     |

## Info & Sources

[Spigot Page](https://www.spigotmc.org/resources/chunky.81534/)  

[CurseForge Page (Fabric version)](https://www.curseforge.com/minecraft/mc-mods/chunky-pregenerator/)

[CurseForge Page (Forge version)](https://www.curseforge.com/minecraft/mc-mods/chunky-pregenerator-forge)

[Modrinth Page](https://modrinth.com/mod/chunky)

[GitHub](https://github.com/pop4959/Chunky)

[Wiki](https://github.com/pop4959/Chunky/wiki)

