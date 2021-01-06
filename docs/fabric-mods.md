---
id: fabric-mods
title: Fabric Mods
hide_title: true
hide_table_of_contents: false
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
# Installing Fabric mods on your server
:::note
This tutorial is for [Fabric](https://fabricmc.org) servers.
:::

You'll first need to find the mod you wish to install. Downloads can be found on a variety of sites. Many mods can be found on [CurseForge](https://www.curseforge.com/minecraft/mc-mods/fabric). Make sure you trust the source of your downloads.

In any case, save the mod to your local machine. Mods can either be uploaded via the [web panel](https://mc.bloom.host) or through [SFTP](https://docs.bloom.host/how-to-use-sftp). If you're uploading in bulk, go with the latter.

In your server's root directory, locate the `/mods` folder, if it's not there then create a new directory named `/mods`. Navigate into this folder, and upload your mods' file there! The vast majority of mods require you to restart your server to take effect.

:::note
Be sure to use the correct version of the mod. Unlike Spigot/Paper, mods are likely not across minecraft versions.
:::
Additionally, many Fabric mods require the [Fabric-API](https://www.curseforge.com/minecraft/mc-mods/fabric-api). Download the relevant Fabric API for you server version, and put this file in the `/mods` directory as well.

Players *may* need to install some fabric mods locally as well. Consult the documentation of your mod to see if this is required. Some mods may provide a seperate file for players and servers.
