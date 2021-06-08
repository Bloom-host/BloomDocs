---
id: chunky
title: Chunky
slug: /plugins/chunky
hide_title: true
hide_table_of_contents: false
sidebar_label: Chunky
description: A cool plugin called chunky, which lets you pre generate a minecraft world quickly and efficiently to avoid lag.
keywords:
  - Chunky
  - Server Pregeneration
  - Spigot
  - Bloom.host
  - Pterodactyl Panel
  - Minecraft
image: https://bloom.host/assets/images/logo.png
---
# Chunky

### What does the plugin do?

Chunky pregenerates chunks very quickly and efficiently, which is helpful for reducing server lag.  

## Usage

:::caution
While you will normally notice a significant boost in server performance after you are done pregenerating your chunks, the process is quite intensive, and you may see server lag while generating. Generating large maps can also use a lot of storage space.
:::

To start generation, you should first select a world and a radius by using `chunky world <world>`, and then `chunky radius <radius in blocks>`.  

After that, you can run `chunky start` to start the generation.  

:::important
It's normally good to enforce this pregeneration with a world border so that people don't generate new chunks and cause more lag. It's also good to increase the radius of Chunky by ~ 256 blocks (16 chunks) so that you have some buffer when people are right next to the border.
:::

If you wish to pause or cancel the pregeneration, you can run `chunky cancel` or `chunky pause`.  

To continue pregeneration after you've paused it, run `chunky continue`.  


:::tip
You can use the table below to estimate the file size of your world after you generate it. The values below are for 2k by 2k blocks (1k radius).
:::

| World         | File Size |
|---------------|-----------|
| world         | 110 MB    |
| world_nether  | 115 MB    |
| world_the_end | 75 MB     |

## Info

[Spigot Page](https://www.spigotmc.org/resources/chunky.81534/)  

[Wiki](https://github.com/pop4959/Chunky/wiki)
