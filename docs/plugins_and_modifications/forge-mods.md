---
id: forge-mods
title: Forge Mods
slug: /forge-mods
hide_title: true
hide_table_of_contents: true
sidebar_label: Installing Forge Mods
description: How to install minecraft mods on your forge server.
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
<h1>Installing Forge mods</h1>
</div>

# Installing Forge mods on your server
:::note
This tutorial is for [Forge](https://forums.minecraftforge.net/) servers.

For Fabric servers, see the [Fabric mod installation guide](fabric-mods)
:::

You'll first need to find the mod you wish to install. Downloads can be found on a variety of sites. Many mods can be found on [CurseForge](https://www.curseforge.com/minecraft/mc-mods). Make sure you trust the source of your downloads.

In any case, save the mod to your local machine. Mods can either be uploaded via the [web panel](https://mc.bloom.host) or through [SFTP](/sftp). If you're uploading in bulk, go with the latter.

In your server's root directory, locate the `/mods` folder, if it's not there then create a new directory named `/mods`. Navigate into this folder, and upload your mods' file there! The vast majority of mods require you to restart your server to take effect.

:::note
Be sure to use the correct version of the mod. Unlike Spigot/Paper, mods are likely not compatible cross version.
:::

Nearly _all_ Forge mods need players to have them installed as well. Consult the documentation of your mod to see if this is required. Some mods may provide a seperate file for players and servers.
