---
id: simple-voice-chat
title: Simple Voice Chat
slug: /multiplatform/simple-voice-chat
hide_title: true
hide_table_of_contents: true
sidebar_label: Simple Voice Chat
image: https://bloom.host/assets/images/logo.png
---

<div class="text--center">
<img src="https://bloom.host/logo-white.svg" alt="logo" height="50%" width="50%"/>
<h1>Installing Simple Voice Chat</h1>
</div>

:::note
You also need to install **Simple Voice Chat** on your game client!
:::

## Requirements

In order to run Simple Voice Chat on your server, you need one of the following [server jars](./jars) installed:

- [Fabric](#fabric)
- [Forge](#forge)
- [Bukkit/Spigot/Paper](#bukkitspigotpaper)

## Installation

### Fabric

1. Download the latest version of the [Fabric API](https://www.curseforge.com/minecraft/mc-mods/fabric-api/files/all) for your Minecraft version
2. Download the Fabric version of [Simple Voice Chat](https://www.curseforge.com/minecraft/mc-mods/simple-voice-chat/files/all?filter-status=1&filter-game-version=2020709689%3A7499) ([Alternative download link](https://modrinth.com/mod/simple-voice-chat))
3. Open the [file manager](/file-manager-controls) in your dashboard
4. Open the **mods** folder or create it if it doesn't exist
<div class="text--center"><img src={require('../../../static/imgs/plugins_and_modifications/simple_voice_chat/1.png').default} alt="console"/></div>
5. Drag and drop the **Fabric API jar** and the **Simple Voice Chat jar** into the browser window.
<div class="text--center"><img src={require('../../../static/imgs/plugins_and_modifications/simple_voice_chat/2.png').default} alt="console"/></div>
6. Continue with the [common installation](#common)

### Forge

1. Download the Forge version of [Simple Voice Chat](https://www.curseforge.com/minecraft/mc-mods/simple-voice-chat/files/all?filter-status=1&filter-game-version=2020709689%3A7498) ([Alternative download link](https://modrinth.com/mod/simple-voice-chat))
3. Open the [file manager](/file-manager-controls) in your dashboard
4. Open the **mods** folder or create it if it doesn't exist
<div class="text--center"><img src={require('../../../static/imgs/plugins_and_modifications/simple_voice_chat/1.png').default} alt="console"/></div>
5. Drag and drop the the **Simple Voice Chat jar** into the browser window.
6. Continue with the [common installation](#common)

### Bukkit/Spigot/Paper

1. Download the Bukkit based version of [Simple Voice Chat](https://www.curseforge.com/minecraft/bukkit-plugins/simple-voice-chat/files/all) ([Alternative download link](https://modrinth.com/mod/simple-voice-chat))
2. Download [ProtocolLib](https://www.spigotmc.org/resources/protocollib.1997/)
3. Open the [file manager](/file-manager-controls) in your dashboard
4. Open the **plugins** folder or create it if it doesn't exist
5. Drag and drop the the **Simple Voice Chat jar** and the **ProtocolLib jar** into the browser window.
6. Continue with the [common installation](#common)

### Common

1. Make sure you followed the steps for [Fabric](#fabric), [Forge](#forge) or [Bukkit/Spigot/Paper](#bukkitspigotpaper)
2. Open the **Ports & Proxies** section in your dashboard
3. Click on **CREATE ALLOCATION**
<div class="text--center"><img src={require('../../../static/imgs/plugins_and_modifications/simple_voice_chat/3.png').default} alt="console"/></div>
4. Enter the number `24454` in the port field and click on **CREATE ALLOCATION**
<div class="text--center"><img src={require('../../../static/imgs/plugins_and_modifications/simple_voice_chat/4.png').default} alt="console"/></div>
5. If your server is already running, you will be prompted to restart your server - If this is the case, click on **RESTART NOW**
<div class="text--center"><img src={require('../../../static/imgs/plugins_and_modifications/simple_voice_chat/5.png').default} alt="console"/></div>
6. Go to the **Console** section of your dashboard
7. If you didn't get the prompt to restart the server, click on **RESTART**
<div class="text--center"><img src={require('../../../static/imgs/plugins_and_modifications/simple_voice_chat/6.png').default} alt="console"/></div>
8. After the server has restarted, check your logs for the line **Server started at port 24454** - If this line exists, you successfully installed Simple Voice Chat!
<div class="text--center"><img src={require('../../../static/imgs/plugins_and_modifications/simple_voice_chat/7.png').default} alt="console"/></div>