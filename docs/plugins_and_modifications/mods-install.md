---
id: mods-install
title: Server Mods
slug: /mods-install
hide_table_of_contents: true
sidebar_label: Installing Mods
description: How to install minecraft mods on your forge/fabric server.
keywords:
  - Template
  - Pterodactyl Panel
  - Minecraft
  - Fabric
  - Forge
  - Mods
---
## Install Guide
You'll first need to find the mod that you wish to install. Downloads can be found on a variety of sites. Many mods can be found on [Modrinth](https://modrinth.com/mods) and [CurseForge](https://www.curseforge.com/minecraft/mc-mods). Make sure you trust the source of your downloads.

:::important
Make sure you are downloading the correct version of your mods. Forge and Fabric mods are most likely not cross compatible with each other unless stated so otherwise by the developer of those mods.
:::

Save the mod files to your computer, then open your server's File Manager in [DuckPanel](https://mc.bloom.host). Follow our [File Manager upload guide](/file-manager-controls#uploading-files-without-sftp) to drag and drop one or multiple mods at once. Alternatively, use the File Manager's **Download from URL** feature if you have a direct link to the mod file, rather than its download page.

In your server's root directory, locate the `mods` folder. If it isn't there, create it. Open this folder before uploading or downloading the mod files from a URL. Wait for all transfers to finish, and leave the mod `.jar` files intact rather than extracting them. The vast majority of mods require you to restart your server to take effect.

Additionally, many Fabric mods require the [Fabric-API](https://www.curseforge.com/minecraft/mc-mods/fabric-api). Download the relevant Fabric API for you server version, and put this file in the `/mods` directory as well.

:::note
Be sure to use the correct version of the mod. Unlike Spigot/Paper plugins, mods likely won't work across minecraft versions.
:::


Some mods need players to install them locally as well. Consult the documentation of your mod to see if this is required. Some mods may provide a separate file for players and servers.
