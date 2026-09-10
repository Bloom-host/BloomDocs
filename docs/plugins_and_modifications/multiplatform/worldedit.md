---
id: worldedit
title: WorldEdit
slug: /multiplatform/worldedit
hide_table_of_contents: false
sidebar_label: WorldEdit
description: An in-game world editing plugin to manipulate blocks.
keywords:
  - WorldEdit
  - Building
  - Spigot
  - Paper
  - Fabric
  - NeoForge
  - Pterodactyl Panel
  - Minecraft
---

## Overview

WorldEdit is an in-game world editing plugin. You can select areas, fill them in with a block (or multiple types of blocks), save the area as a schematic, and more. We'll learn the basics of this plugin and how to install it.

If you regularly work with large selections or schematics, you can also check out our [FastAsyncWorldEdit guide](/plugins/fawe). FAWE is an alternative to WorldEdit that focuses on improving editing performance while keeping the familiar commands. However, FAWE is only available for Paper forks, while WorldEdit is multiplatform.

## Setup

Download the latest [WorldEdit version](https://modrinth.com/plugin/worldedit/versions) compatible with your Minecraft version and server platform.

### Bukkit, Spigot, or Paper

Download the Bukkit version and drop the `.jar` file into your server's `plugins` folder. Turn on or restart the server, and it should be working! If you need help installing plugins, check [How to install plugins](/installing-plugins).

### Fabric or NeoForge

Make sure your server is already running Fabric or NeoForge, then download the WorldEdit version for that mod loader and your Minecraft version.

Stop your server, drop the `.jar` file into your server's `mods` folder, and start it again. WorldEdit should now be ready to use! If you need help installing mods, check [How to install mods](/mods-install).

For more information about installation on these and other platforms, refer to [EngineHub's guide on installing WorldEdit](https://worldedit.enginehub.org/en/latest/install/).

---

## Commands

There are many commands in WorldEdit. This doc will go over a few simple ones, but if you want to learn more, consult WorldEdit's [Wiki](https://worldedit.enginehub.org/en/latest/).

Run these commands in-game. You'll need operator access or the appropriate [WorldEdit permissions](https://worldedit.enginehub.org/en/latest/permissions/).

### //wand, //pos1, and //pos2

Running the command `//wand` in-game will give you a wooden axe. You can use this to make area selections by left-clicking a block to set the first position, and right-clicking another block to set the second position.

By default, these positions mark two opposite corners of your selection. Make sure to include the full height of the area you want to edit.

If you don't have a block to click on, you can run `//pos1` and `//pos2` at each position to make selections in the air.

### //set and //walls

You can run the command `//set <block>` to fill your entire selection with that block. For example, `//set stone` will fill it with stone.

You can also run `//set stone,dirt` to fill the selection with a random mixture of stone and dirt. Each block has an equal chance of being chosen, so the result will be roughly half stone and half dirt.

You can, of course, create more complicated patterns. For example, `//set 75%stone,25%dirt` gives stone a higher chance of being chosen. For more examples, check out WorldEdit's [pattern documentation](https://worldedit.enginehub.org/en/latest/usage/general/patterns/).

The command `//walls <block>` will build the four sides of your selection out of that block or pattern. It uses the same pattern syntax as `//set`, but leaves the floor and ceiling unchanged.

### Shapes

This part of the doc will go over how to make two shapes: spheres and cylinders. If you want to learn how to make other shapes, check out WorldEdit's [shape documentation](https://worldedit.enginehub.org/en/latest/usage/generation/).

To make a sphere, run `//sphere <block> <radius>`. For example, `//sphere glass 5` will create a solid glass sphere with a radius of 5 blocks, centered at your feet by default. You can run `//hsphere glass 5` to create a hollow sphere instead.

If you feel like making a cylinder, run `//cyl <block> <radius> <height>`. For example, `//cyl stone 5 10` will create a solid stone cylinder with a radius of 5 blocks and a height of 10 blocks, extending upward from your feet.

Like spheres, you can run `//hcyl` with the same arguments to create a hollow cylinder.

These shape commands use your position by default, so you don't need to make a selection first.

### //undo and //redo

If you make a mistake, run `//undo` to undo your last WorldEdit operation. You can also run `//redo` to apply it again.

For more information about which changes are recorded, check out WorldEdit's [history documentation](https://worldedit.enginehub.org/en/latest/usage/general/history/).

---

## Useful additions

### WorldGuard

WorldGuard allows you to create regions to protect areas of your world. You can use your WorldEdit selection to define the area you want to protect.

Download WorldGuard from its [Bukkit page](https://dev.bukkit.org/projects/worldguard/files), and check out our [WorldGuard guide](/plugins/worldguard) to get started.

---

## Info

[Modrinth](https://modrinth.com/plugin/worldedit)

[Bukkit](https://dev.bukkit.org/projects/worldedit)

[GitHub](https://github.com/EngineHub/WorldEdit)

[WorldEdit Wiki](https://worldedit.enginehub.org/en/latest/)

[Support Discord](https://discord.gg/enginehub)

[FastAsyncWorldEdit guide](/plugins/fawe)