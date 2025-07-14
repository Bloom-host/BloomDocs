---
id: worldguard
title: WorldGuard
slug: worldguard
hide_table_of_contents: true
sidebar_label: WorldGuard
description: An in-game world guard plugin to protect blocks and regions.
  - WorldGuard
  - Protection
  - Spigot
  - Paper
  - regions
  - region
  - Minecraft
---

:::important
To use WorldGuard, you need to install [WorldEdit](../multiplatform/worldedit.md) onto your server.
:::

### What does the plugin do?

WorldGuard protects your Minecraft world by allowing you to define regions with specific falgs(rules). You can prevent griefing, control mob spawning, manage PvP, and customize many other settings per area.

### Region setup
How to Create a Simple Region and Set Flags

**Step 1: Select the region**
Use WorldEdit’s wand tool (usually a wooden axe) to select two opposite corners of the area you want to protect. Left-click one corner, right-click the opposite corner.

**Step 2: Define the region**
Run the command:

```/rg define <region_name>```

to create a region with your chosen name.

**Step 3: Set flags**
Flags control what players can do in the region. Some common examples:


* Example: Disabling pvp in a region

  ```/rg flag <region_name> pvp deny```
  
* Step 4: Check your region
  Use:
`/rg info <region_name>`
to view details and flags set on your region.

**You can also use `/rg flags` to view and edit the region’s flags directly through the chat.**



### Setup

Download the latest WorldGuard version compatible with your Minecraft server. Place the plugin in your `plugins` folder and restart the server. It should be ready to use! For help installing plugins, see [How to install plugins](/installing-plugins).

For a more detail wiki check the official wiki here: [EngineHub WorldGuard installation guide](https://worldguard.enginehub.org/en/latest/install/).

