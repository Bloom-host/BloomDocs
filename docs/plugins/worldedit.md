---
id: worldedit
title: WorldEdit
hide_title: true
hide_table_of_contents: false
sidebar_label: WorldEdit
description: An in-game world editing plugin to manipulate blocks
keywords:
  - WorldEdit
  - Performance
  - Spigot
  - Paper
  - Bloom.host
  - Pterodactyl Panel
  - Minecraft
image: https://bloom.host/assets/images/logo.png
---
# WorldEdit

### What does the plugin do?

WorldEdit is an in-game world editing plugin. You can select areas, fill them in with a block (or multiple types of blocks), save the area as a schematic, and more.  

### Setup

Download the latest version for your Minecraft version (e.g. if your server is 1.16.2, download the latest one compatible with 1.16.2). Drop it in your plugins folder. Turn on or restart the server, and it should be working! If you need help installing plugins, check [How to install plugins](https://docs.bloom.host/bukkit-plugins).  

## Commands

There are many commands in WorldEdit. This doc will go over a few simple ones, but if you want to learn more, consult WorldEdit's [Wiki](https://worldedit.enginehub.org/en/latest/).  

#### //wand and //pos

Running the command `//wand` in-game will give you a wooden axe. You can use this to make area selections by *left clicking* on a block to set pos1, and *right clicking* on a block to set pos2. If you don't have a block to click on, you can run `//pos1` and `//pos2` in each position to make selections in the air.  

#### //set and //walls

You can run the command `//set [block]` to fill your selection entirely with that one block. You can also run `//set [block],[another block]` to fill 50% of the selection with the first block, and the other 50% with the second block. You can, of course, create more complicated patterns (like setting percentages of blocks), but for that, you should consult the [Wiki](https://worldedit.enginehub.org/en/latest/). `//walls [block]` will build the four sides of your selection out of that block or pattern, and it uses the same syntax as `//set`.  

#### Shapes

This part of the doc will go over how to make 2 shapes, spheres and cylinders. If you want to learn how to make other shapes, check out WorldEdit's [Wiki](https://worldedit.enginehub.org/en/latest/).  

In order to make a sphere, run `//sphere [block] [radii]`. This command will create a sphere out of `[block]` at your feet, with `[radii]` as the distance in blocks to each part of the shell. You can run `//hsphere` with the same syntax to create a hollow sphere.  

If you feel like making a cylinder, run `//cyl [block] [radii] [height]`. This will create a solid cylinder out of `[block]`, with `[radii]` as the distance to the edges and `[height]` as how tall it is going up from your feet. Like spheres, you can run `//hcyl` with the same syntax to create the same shape, but hollow.  

## Info

[Bukkit](https://dev.bukkit.org/projects/worldedit)  

[Github](https://github.com/EngineHub/WorldEdit)  

[Wiki](https://worldedit.enginehub.org/en/latest/)
