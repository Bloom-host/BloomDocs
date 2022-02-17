---
id: forge-setup
title: Setting up Forge
slug: /forge-setup
hide_title: true
hide_table_of_contents: false
sidebar_label: Setting up Forge
description: This guide will help you setup Forge on your Minecraft server
keywords:
  - Forge
  - Minecraft
  - Modded
  - Bloom.host
---

<div class="text--center">
<img src="https://bloom.host/logo-white.svg" alt="logo" height="50%" width="50%"/>
<h1>Setting Up Forge</h1>
</div>

### What is Forge?
> Forge is a modding API for Minecraft. Users who download and install Minecraft Forge can install mods (modifications) to their Minecraft Instance.
>
### Installing Forge
> To begin installing Forge, head over to their [website](http://files.minecraftforge.net/) to download their installer and launch the jar file. Have it open up in an empty directory and hit install server. Have something like the screenshot below.
>
> ![Bloom.host Forge](../../static/imgs/plugins_and_modifications/forge_setup/1.png)

After you have installed it, head over to an [SFTP client](https://docs.bloom.host/how-to-use-sftp) such as FileZilla and upload everything inside your folder to your server.

Next, rename your forge-xxx.jar file to server.jar. The file name must match the Server Jar File field in the Startup tab.

Then, create a new folder called `mods`. Place any jars of mods you want in here.

Restart your server. This may take a few minutes. 

Once the restarted, login to your server!

In the end, it should look like this: 

![Bloom.host Forge](../../static/imgs/plugins_and_modifications/forge_setup/2.png)

### Installing Forge Mods 
> 
> Refer to [this](forge-mods) guide.

---
