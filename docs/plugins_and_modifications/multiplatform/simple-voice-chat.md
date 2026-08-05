---
id: simple-voice-chat
title: Simple Voice Chat
slug: /multiplatform/simple-voice-chat
hide_table_of_contents: false
sidebar_label: Simple Voice Chat
description: Install and configure Simple Voice Chat for supported Minecraft server platforms.
keywords:
  - Simple Voice Chat
  - Voice chat
  - Fabric
  - Forge
  - Bukkit
  - Quilt
  - Proximity chat
---

:::note
You also need to install **Simple Voice Chat** on your game client!
:::

## Requirements

In order to run Simple Voice Chat on your server, you need one of the following [server jars](/updating) installed:

- [Fabric](#fabric)
- [Forge](#forge)
- [Bukkit/Spigot/Paper](#bukkitspigotpaper)
- [Quilt](#quilt)

---

## Installation

### Fabric

1. Download the Fabric version of [Simple Voice Chat](https://modrinth.com/mod/simple-voice-chat/versions?l=fabric) ([Alternative download link](https://www.curseforge.com/minecraft/mc-mods/simple-voice-chat/files/all?filter-game-version=2020709689%3A7499))
2. Open the [File Manager](/file-manager-controls) in your dashboard
3. Open the **mods** folder or create it if it doesn't exist
![File Manager with the mods folder open](/plugins_and_modifications/simple_voice_chat/1.png)
4. Drag and drop the **Simple Voice Chat jar** into the browser window.
![Simple Voice Chat jar uploaded to the mods folder](/plugins_and_modifications/simple_voice_chat/2.png)
5. Continue with the [common installation](#common)

### Forge

1. Download the Forge version of [Simple Voice Chat](https://modrinth.com/mod/simple-voice-chat/versions?l=forge) ([Alternative download link](https://www.curseforge.com/minecraft/mc-mods/simple-voice-chat/files/all?filter-game-version=2020709689%3A7498))
2. Open the [File Manager](/file-manager-controls) in your dashboard
3. Open the **mods** folder or create it if it doesn't exist
![File Manager with the mods folder open](/plugins_and_modifications/simple_voice_chat/1.png)
4. Drag and drop the **Simple Voice Chat jar** into the browser window.
5. Continue with the [common installation](#common)

### Bukkit/Spigot/Paper

1. Download the Bukkit version of [Simple Voice Chat](https://modrinth.com/mod/simple-voice-chat/versions?l=bukkit) ([Alternative download link](https://www.curseforge.com/minecraft/bukkit-plugins/simple-voice-chat/files/all))
2. Open the [File Manager](/file-manager-controls) in your dashboard
3. Open the **plugins** folder or create it if it doesn't exist
4. Drag and drop the **Simple Voice Chat jar** into the browser window.
5. Continue with the [common installation](#common)

### Quilt

1. Download the Quilt version of [Simple Voice Chat](https://modrinth.com/mod/simple-voice-chat/versions?l=quilt) ([Alternative download link](https://www.curseforge.com/minecraft/mc-mods/simple-voice-chat/files/all?filter-game-version=2020709689%3A9153))
2. Open the [File Manager](/file-manager-controls) in your dashboard
3. Open the **mods** folder or create it if it doesn't exist
4. Drag and drop the **Simple Voice Chat jar** into the browser window.
5. Continue with the [common installation](#common)

### Common

1. Make sure you followed the steps for [Fabric](#fabric), [Forge](#forge), [Bukkit/Spigot/Paper](#bukkitspigotpaper) or [Quilt](#quilt)
2. Open the **Ports & Proxies** section in your dashboard
3. Click on **OPEN PORT**
![DuckPanel Ports and Proxies tab with the Open Port button](/plugins_and_modifications/simple_voice_chat/3.png)
4. Enter the number `24454` in the port field and click on **OPEN PORT**
![Open Port dialog configured for Simple Voice Chat port 24454](/plugins_and_modifications/simple_voice_chat/4.png)
**NOTE:** Please use ports within the range `24454` - `24459`, otherwise voicechat might be cut off during attacks. It is strongly recommended that you do not use port `25565` for voicechat. 

 
5. If your server is already running, you will be prompted to restart your server - If this is the case, click on **RESTART NOW**
![DuckPanel prompt to restart the server after opening the port](/plugins_and_modifications/simple_voice_chat/5.png)
6. Go to the **Console** section of your dashboard
7. If you didn't get the prompt to restart the server, click on **RESTART**
![DuckPanel console with the Restart control](/plugins_and_modifications/simple_voice_chat/6.png)
8. After the server has restarted, check your logs for the line **Server started at port 24454** - If this line exists, you successfully installed Simple Voice Chat!
![Server log confirming Simple Voice Chat started on port 24454](/plugins_and_modifications/simple_voice_chat/7.png)
