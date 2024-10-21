---
id: mods-install
title: Server Mods
slug: /mods-install
hide_table_of_contents: true
sidebar_label: Installing Mods
description: How to install minecraft mods on your forge/fabric server.
keywords:
  - Template
  - Bloom.host
  - Pterodactyl Panel
  - Minecraft
  - Fabric
  - Forge
  - Mods
---
# Install Guide
You'll first need to find the mod that you wish to install. Downloads can be found on a variety of sites. Many mods can be found on [Modrinth](https://modrinth.com/mods) and [CurseForge](https://www.curseforge.com/minecraft/mc-mods). Make sure you trust the source of your downloads.

:::important
Make sure you are downloading the correct version of your mods. Forge and Fabric mods are most likely not cross compatible with each other unless stated so otherwise by the developer of those mods.
:::

You have two choices: save the mod to your local machine and then upload it to the panel or copy the link to the mod download and use our Download from URL feature which can be found on the File Manager. Mods can either be uploaded via the [web panel](https://mc.bloom.host) or through [SFTP](/using_the_panel/sftp.md). If you're uploading in bulk, go with the latter. 

In your server's root directory, locate the `/mods` folder, if it's not there then create a new directory named `/mods`. Navigate into this folder, and upload your mods' files there! The vast majority of mods require you to restart your server to take effect.

Additionally, many Fabric mods require the [Fabric-API](https://www.curseforge.com/minecraft/mc-mods/fabric-api). Download the relevant Fabric API for you server version, and put this file in the `/mods` directory as well.

:::note
Be sure to use the correct version of the mod. Unlike Spigot/Paper plugins, mods likely won't work across minecraft versions.
:::


Some mods need players to install them locally as well. Consult the documentation of your mod to see if this is required. Some mods may provide a seperate file for players and servers.
