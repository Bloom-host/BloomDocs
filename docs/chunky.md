---
id: chunky
title: Chunky
hide_title: true
hide_table_of_contents: false
sidebar_label: Chunky
description: A cool plugin called chunky, which lets you pre generate a minecraft world quickly and efficiently to avoid lag.
keywords:
  - Chunky
  - Server Pregeneration
  - Spigot
  - BloomVPS
  - Pterodactyl Panel
  - Minecraft
image: https://bloomvps.com/assets/images/logo.png
---
# Chunky
## Info
[Spigot Page](https://www.spigotmc.org/resources/chunky.81534/)

[Wiki](https://github.com/pop4959/Chunky/wiki)
### What does the plugin do?
It pregenerates chunks very quickly and efficiently, which is helpful for reducing server lag.
## Usage

:::caution
While you will normally notice a significant boost in server performance, after you are done pregenerating your chunks, the process is quite intensive, and you may see server lag while generating. Generating large maps can also use a lot of storage space.
:::

To start generation, you should first select a world and a radius by using the `chunky world <world>` command, and then the `chunky radius <radius in blocks>` command.

After that, you can run `chunky start`, in order to start the pregeneration.

:::important
It's normally good to enforce this pregeneration with a worldborder, so that people don't generate new chunks and cause more lag. It's also good to increase the radius by ~ 256 blocks(16 chunks) so that you have some buffer when people are right next to the border.  
:::

If you wish to stop or cancel the pregeneration, you can run `chunky cancel`, and `chunky pause`.

To continue a pregeneration after you've paused it, run `chunky continue`.


:::tip
You can use the table below to estimate the file size of your world after you generate it. The values below are for 2k by 2k blocks(1k radius).
:::

| World         | File Size |
|---------------|-----------|
| world         | 110 MB    |
| world_nether  | 115 MB    |
| world_the_end | 75 MB     |
