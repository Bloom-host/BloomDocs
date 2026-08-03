---
id: motd
title: How to Change Your MOTD
slug: /motd
hide_table_of_contents: false
sidebar_label: How to change MOTD
description: How to change the MOTD that people see on the server list. 
keywords:
  - Overview
  - MOTD
  - Spigot
  - 1.16
  - Minecraft
---

The message of the day (MOTD) is the text players see beside your server in the multiplayer server list. This guide covers the built-in `server.properties` setting, ServerListPlus, and MiniMOTD. Choose the option that matches your server software and the features you need.

---

## How to change your MOTD without a plugin

1. Write your MOTD using the [Minecraft MOTD creator](https://mctools.org/motd-creator), then copy the generated `server.properties` value.
2. In your server panel, open File Manager and then open `server.properties`. See the [File Manager guide](/file-manager-controls) if you need help finding the file.
   ![server.properties file showing the MOTD setting](/running_a_server/motd/server-properties.png)
3. Replace the existing `motd` value with the copied text and restart the server to apply the change.

---

## How to change your MOTD with MiniMOTD

MiniMOTD is a plugin for Spigot, Paper, BungeeCord, and Velocity, or a mod for Fabric and Sponge. It uses the MiniMessage system and supports RGB colors on Minecraft 1.16 and newer. Download it from the [MiniMOTD project page](https://www.spigotmc.org/resources/minimotd-server-list-motd-plugin-with-rgb-gradients.81254/), then:

1. Upload the plugin to your server's `plugins` folder, or the mod to its `mods` folder, and restart the server.
2. Open the generated MiniMOTD `config.hocon` file.
3. Use the [MiniMessage documentation](https://docs.papermc.io/adventure/minimessage/format/) to create your MOTD. MiniMOTD also supports multiple icons and [different MOTDs per virtual host](https://github.com/jpenilla/MiniMOTD/wiki#advanced-configuration) on BungeeCord and Velocity.
   ![MiniMOTD configuration and resulting server-list preview](/running_a_server/motd/minimotd-1.png)
4. Restart the server after saving the configuration.

---

## How to change your MOTD with ServerListPlus

:::note ServerListPlus maintenance
ServerListPlus is no longer in active development. For current configuration details and supported options, refer to the [ServerListPlus wiki](https://github.com/Minecrell/ServerListPlus/wiki).
:::

ServerListPlus can customize the MOTD and add separate messages for different players. Download it from the [ServerListPlus project page](https://www.spigotmc.org/resources/serverlistplus.241/), then:

1. Upload the plugin to your server's `plugins` folder and restart the server.
2. Open the generated ServerListPlus `config.yml` file.
3. Follow the [ServerListPlus wiki](https://github.com/Minecrell/ServerListPlus/wiki) to configure the MOTD format and any player-specific messages.
4. Restart the server after saving the configuration.



