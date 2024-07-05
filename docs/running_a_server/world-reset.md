---
id: world-reset
slug: /world-reset
title: Resetting your World(s)
hide_table_of_contents: true
sidebar_label: Resetting your world(s)
description: How to reset the world(s) on your Minecraft server.
keywords:
  - Template
  - Pterodactyl Panel
  - Minecraft
  - Spigot
  - Plugins
  - Bloom.host
---

You'll need a way to access your server files. This tutorial references the [web panel](https://mc.bloom.host), but you can also use [SFTP](/using_the_panel/sftp.md). **Shutdown your server before proceeding!**

Either way, go to the root directory of your server. On the web panel, this can be done by selecting your server, dropping down the "File Management" menu, then selecting "File Explorer". When you connect to your server via SFTP, you should be already at your root directory.

:::caution
The following steps will __completely erase__ your worlds.

If you wish to have multiple worlds on your server at once, add a prefix to the end of each world (such as `_old`), OR use a plugin such as [Multiverse](https://dev.bukkit.org/projects/multiverse-core).

We recommend you take a backup before deleting any worlds in your server. Follow this [guide](/using_the_panel/backups.md) to learn how to make and schedule backups.
:::

You now have to locate your world files, on *most* Minecraft servers these folders will be `world`, `world_nether`, and `world_the_end` - if not, check your `level-name` in `server.properties`.

Select the world(s) you want to delete with the checkboxes on the side, then drop down the "Mass Actions" menu and select "Delete Files" - then confirm the deletion. Deleting these files should only take a few seconds at most.

Then, go ahead and start back up your server. This will take longer than usual as it generates the spawn area.
