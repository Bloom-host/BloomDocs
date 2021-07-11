---
id: fabric-mods
title: Fabric Mods
slug: /fabric-mods
hide_title: true
hide_table_of_contents: true
sidebar_label: Installing Fabric Mods
description: How to install minecraft mods on your fabric server.
keywords:
  - Template
  - Bloom.host
  - Pterodactyl Panel
  - Minecraft
  - Fabric
  - Mods
image: https://bloom.host/assets/images/logo.png
---

<div class="text--center">
<img src="https://bloom.host/logo-white.svg" alt="logo" height="50%" width="50%"/>
<h1>Installing Fabric mods</h1>
</div>

# Installing Fabric mods on your server
:::note
This tutorial is for [Fabric](https://fabricmc.org) servers.
:::

You'll first need to find the mod that you wish to install. Downloads can be found on a variety of sites. Many mods can be found on [Modrinth](https://modrinth.com/mods) and [CurseForge](https://www.curseforge.com/minecraft/mc-mods/fabric). Make sure you trust the source of your downloads.

You have two choices: save the mod to your local machine and then upload it to the panel or copy the link to the mod download and use our Download from URL feature which can be found on the File Manager. Mods can either be uploaded via the [web panel](https://mc.bloom.host) or through [SFTP](https://docs.bloom.host/how-to-use-sftp). If you're uploading in bulk, go with the latter. 

In your server's root directory, locate the `/mods` folder, if it's not there then create a new directory named `/mods`. Navigate into this folder, and upload your mods' files there! The vast majority of mods require you to restart your server to take effect.

:::note
Be sure to use the correct version of the mod. Unlike Spigot/Paper, mods are likely not across minecraft versions.
:::
Additionally, many Fabric mods require the [Fabric-API](https://www.curseforge.com/minecraft/mc-mods/fabric-api). Download the relevant Fabric API for you server version, and put this file in the `/mods` directory as well.

Players *may* need to install some fabric mods locally as well. Consult the documentation of your mod to see if this is required. Some mods may provide a seperate file for players and servers.
