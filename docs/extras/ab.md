---
id: ab
title: Bloom Anti Bot
slug: /ab
hide_table_of_contents: true
description: Learn more about Bloom's Anti Bot plugin!
---

## Introduction

This is a **beta** plugin for Minecraft servers that interacts with our custom on-site DDoS protection to provide Layer
7 protection for Minecraft: Java Edition.

**Note**: This plugin is not meant to block very slow bot attacks. It's designed to prevent server crashes and performance issues when bot attacks occur.

The plugin is open source, and can be found here: https://github.com/Bloom-host/BloomAB/

Please report any issues or suggestions on our [Discord server](https://discord.gg/bloom)!

---

## Installation

:::caution HEADS UP!

This is currently **only supported in the following regions**:  
- Ashburn, Virginia
- Los Angeles, California
- Falkenstein, Germany

Additionally, please make sure you are using Waterfall, Velocity or a Spigot-based server software.
:::

Here is how you can install the plugin:

1. Ensure your server is using a supported port. Currently, this is `25565`, `25566` and `25567`.
  If this isn't the case, please update your main port to one of the supported ones in the [Ports & Proxies tab](../using_the_panel/ports-and-proxies.md) 
2. Open the [latest release on GitHub](https://github.com/Bloom-host/BloomAB/releases/latest) and download the `BloomAB-xxx.jar` file.  
  This JAR file will work for all 3 platforms.
3. Open your server in the [DuckPanel](https://mc.bloom.host) and click the 'File Manager' tab.  
   ⚠️ **Note**: If you have a network using Waterfall or Velocity, please ensure to only install it on the proxy, not the backend server.
4. Open the `plugins` folder and drag & drop the JAR file.
5. Restart your server to apply the changes.
6. Using the `bloomab set location <location>` console command set your server's location.  
   As an example, if your server is located in Germany, you would do: `bloomab set location GERMANY`  
  Alternatively, you can modify the location in the `plugins/BloomAB/config.yml` file and restart the server.

---

## Usage

By default, you do not need to modify anything after the initial setup for this to work. Whenever a bot attack happens, the plugin will detect it and notify the DDoS protection.

There are a few commands you can use in-game with the `bab.admin.manage` [permission](../plugins_and_modifications/multiplatform/luckperms.md) or in the console:
- `/bloomab force <seconds>`: Force trigger the protection for X seconds.
- `/bloomab forcestop <seconds>`: Force disable the protection for X seconds.
- `/bloomab set <maxjps|duration|location> <new value>`: Modify the `config.yml` and update the values live. 

Additionally, here are other settings that you can modify in the `config.yml` of the plugin:
- `options.catch-raw-connections`: Whether to use reflection to catch any raw connections, or attempt to use the platform's built-in method for connections.  
  At the moment, Waterfall only works using this and Spigot based servers cannot use this setting.
- `options.block-new-joins`: Whether to block new joins for all players, only new players or not block at all when the plugin is triggered.

---

## Updating
When updating from \<1.4, please make sure to reset your `config.yml` by renaming or deleting it.

Otherwise, simply re-upload the latest JAR file will work!  
