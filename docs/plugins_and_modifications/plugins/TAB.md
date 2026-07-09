---
id: TAB
title: TAB
slug: /plugins/TAB
hide_table_of_contents: true
sidebar_label: TAB
description: The tab plugin for Paper
keywords:
  - TAB
  - Scoreboard
  - Minecraft
  - Plugin
  - Paper
  - Spigot
  - Tablist
  - Nametags
---

## Overview

[TAB](https://modrinth.com/plugin/tab-was-taken) Is "the" tab plugin you were looking for, with [PlaceholderAPI](https://docs.bloom.host/plugins/placeholderapi) it's the most versatily open source tab plugin available. This guide will explain the basic setup to use this plugin on Paper. 

## Installation

### Plugin installer

Currently, this plugin is only available for download on [Modrinth](https://modrinth.com/plugin/tab-was-taken) and [GitHub](https://github.com/NEZNAMY/TAB/releases)

### Manual

Even manually, the process is still pretty simple to follow:

1. **Download:** Download the plugin from [Modrinth](https://modrinth.com/plugin/tab-was-taken). Here you'll be prompted by the website to select the Version and Server Type, select the appropriate settings for your server.  
2. **Upload:** Once downloaded, drag the `.jar` file from your file explorer to your `plugins` folder in the `"File Manager"`. 
3. **Restart** Restart your server to generate the config files. 

You can also read our [Plugin Installation Doc](https://docs.bloom.host/installing-plugins) for additional information on the process.

## Configuration

We'll edit the plugin's main config file at `home/plugins/TAB/config.yml`. We'll focus on what most people are looking to edit, which would be the `tablist` and `nametags`.

### PlaceholderAPI

Before getting to the config file itself, we should import any `eCloud` packages we might want to use later on. To learn how please refer to our [PlaceholderAPI Doc](https://docs.bloom.host/plugins/placeholderapi).

### Tab / Tablist

[TAB's Wiki](https://github.com/NEZNAMY/TAB/wiki/Why-TAB%3F) is quite comprehensive. But to edit the `tablist` we can follow the [Header & Footer Guide](https://github.com/NEZNAMY/TAB/wiki/Feature-guide:-Header-&-Footer), for the player names on the list we can proceed with [Tablist Names Guide](https://github.com/NEZNAMY/TAB/wiki/Feature-guide:-Tablist-name-formatting), and finally for the layout within the tabslots available we can check their [Layout Guide](https://github.com/NEZNAMY/TAB/wiki/Feature-guide:-Layout).

### Nametags

The other main feature most people care about is the nametags for players, which show up like any other nametag but for players themselves. To edit this we can check their [Nametag Guide](https://github.com/NEZNAMY/TAB/wiki/Feature-guide:-Nametags)

## Info

[TAB Wiki](https://github.com/NEZNAMY/TAB/wiki)

[TAB Releases](https://github.com/NEZNAMY/TAB/releases)

