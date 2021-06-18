---
id: datapacks
title: Datapacks
slug: /datapacks
hide_title: true
hide_table_of_contents: false
sidebar_label: Datapacks
description: How to install a datapack onto your minecraft server.
keywords:
  - Minecraft
  - Datapack
  - Lag
  - Server
  - Plugin
  - Bloom.host
  - Pterodactyl Panel
  - Minecraft
image: https://bloom.host/assets/images/logo.png
---
# Datapacks

:::warning
Datapacks normally use something called functions, which run every tick, and can cause a lot of lag. It's recommended to find a plugin alternative whenever possible.
:::

A datapack is a .ZIP file that you can use to customize your Minecraft experience without using mods.

Installing a datapack is quite simple. Once you’ve downloaded the datapack you want to head over to your server management tab.

Now go to your server and open “file management” then open “file explorer” in the dropdown menu.

<div class="text--center">
<img src={require('../../static/imgs/running_a_server/datapacks/1.png').default} alt="img" height="50%" width="50%"/>
</div>

Select the world you want to install the datapack onto.

<div class="text--center">
<img src={require('../../static/imgs/running_a_server/datapacks/2.png').default} alt="img" height="50%" width="50%"/>
</div>

Open the folder “datapacks” and Click the upload button in the top right corner and select upload your datapack. You can also drag and drop the datapack .zip file.

:::important
Remember that you need to upload the .zip datapack file, you don't need to unzip it.
:::

<div class="text--center">
<img src={require('../../static/imgs/running_a_server/datapacks/3.png').default} alt="img" height="50%" width="50%"/>
</div>

Now restart your server, feel free to open a ticket if you need any assistance.\

:::note
You can verify if the datapack was correctly installed by using the command `/datapack list enabled`.
:::
