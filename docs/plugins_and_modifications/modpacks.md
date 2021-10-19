---
id: modpacks
title: Installing Modpacks from CurseForge
slug: /modpacks
hide_title: true
hide_table_of_contents: true
sidebar_label: Installing Modpacks from CurseForge
description: This guide will help you setup a server pack from CurseForge
keywords:
  - Forge
  - Minecraft
  - Modded
  - CurseForge
  - Server packs
---

<div class="text--center">
<img src="https://bloom.host/logo-white.svg" alt="logo" height="50%" width="50%"/>
<h1>Installing Modpacks from CurseForge</h1>
</div>

:::note
This tutorial can also be used to update your server mod pack, just replace the old files with the new generates files. Always take a backup before updating your server.
:::

# Downloading the server pack

You'll first need to find the modpack you wish to install. Downloads can be found on a variety of sites. Many modpacks and server packs can be found on the multiplayer category of [CurseForge](https://www.curseforge.com/minecraft/modpacks/multiplayer). Make sure you select the multiplayer category, otherwise the modpack may not have a server pack version, and you will need to create the server pack yourself.

<div class="text--center"><img src={require('../../static/imgs/plugins_and_modifications/serverpacks/1.png').default} alt=""/></div>

The first step would be selecting the modpack we want to install, in this tutorial we will use Better Minecraft Forge version.

<div class="text--center"><img src={require('../../static/imgs/plugins_and_modifications/serverpacks/2.png').default} alt=""/></div>

After selecting the modpack, click on the Files tab and scroll down to the "Additional Files" section. Here you will usually find the serverpack version of the modpack. This is the file we need, so click on the download button. 

Do note that not all modpacks have a server pack, if they don't have a server pack you will need to install everything yourself.

<div class="text--center"><img src={require('../../static/imgs/plugins_and_modifications/serverpacks/3.png').default} alt=""/></div>

<div class="text--center"><img src={require('../../static/imgs/plugins_and_modifications/serverpacks/4.png').default} alt=""/></div>

After downloading the server pack, extract it on a folder. The extracted files will be similar to the ones we show below. We will need to run the Forge installer to install Forge on this server. This .jar is usually named "Forge-x.xx.x-xx.x.x-installer.jar". Double click on the Forge-installer.jar file to run it.

<div class="text--center"><img src={require('../../static/imgs/plugins_and_modifications/serverpacks/5.png').default} alt=""/></div>

:::note
Some server packs already come with Forge installed or require you to run a .bat file to download the mods and Forge. 

This tutorial only applies to server packs that don't come with Forge installed. if the server pack comes with Forge installed you just need to upload the files to your Bloom server and start the server with the Forge .jar (not the one that says minecraft_server.jar).

If the server doesn't come with a Forge installed or a installer, it most likely comes with a .bat to download all the files, in this case just click on the .bat and it should start downloading the neccesary files. Then you just need to follow the rest of this tutorial to upload the files to your Bloom server and start it.
:::

After starting the installer, you will be presented with 3 options. We need to select the option that says "Install server", then click on the three dots to select the directory where Forge needs to be installed. This directory needs to be the directory where you extracted the server pack files.

<div class="text--center"><img src={require('../../static/imgs/plugins_and_modifications/serverpacks/6.png').default} alt=""/></div>

<div class="text--center"><img src={require('../../static/imgs/plugins_and_modifications/serverpacks/7.png').default} alt=""/></div>

After selecting the "Install server" option and the directory where we want to install Forge, click on the "Ok" button to start the installation. This process can take a few seconds while all the files are downloaded.

<div class="text--center"><img src={require('../../static/imgs/plugins_and_modifications/serverpacks/8.png').default} alt=""/></div>

<div class="text--center"><img src={require('../../static/imgs/plugins_and_modifications/serverpacks/9.png').default} alt=""/></div>

After sucessfully installing Forge, you will need to select all files in the directory and compress them. It's recommended you use a tool like 7Zip to compress the files, since Windows default compress option doesn't usually work with the panel.

<div class="text--center"><img src={require('../../static/imgs/plugins_and_modifications/serverpacks/9.png').default} alt=""/></div>

After compressing the files, you will need to upload the compressed/archived file to your Bloom server. But first you have to delete all your files in your Bloom server, to do this you can go to the Duck Panel, click on file manager, select all the files and click on delete.

<div class="text--center"><img src={require('../../static/imgs/plugins_and_modifications/serverpacks/10.png').default} alt=""/></div>

Server packs contain a lot of files, so you will need to connect through SFTP to upload the archived file. You can follow this guide to connect to SFTP: [How to connect through SFTP](https://docs.bloom.host/sftp). After you connect through SFTP, you can just drag and drop the .zip to the SFTP server.

<div class="text--center"><img src={require('../../static/imgs/plugins_and_modifications/serverpacks/13.png').default} alt=""/></div>

We are almost finished! Now you can go to the console page, and start the server. But don't leave this page! You will be prompted to select the .jar to be used to start the server. You will need to select the Forge .jar, but not the one that says "Installer", just select the one that looks like this: Forge-1.16.5-36.2.8.jar (the version will be different).

:::note
Some servers don't name their .jar "Forge", in some cases it may have the name of the mod pack like jurassic_reborn.jar, in this case just select that .jar to start the server.

NEVER select the .jar that it's named Minecraft_server.jar (it may contain the version #). This .jar will just start a Vanilla server and you will need to reinstall the server pack again.
:::

<div class="text--center"><img src={require('../../static/imgs/plugins_and_modifications/serverpacks/14.png').default} alt=""/></div>

The last step is to accept the EULA, just click on the "Accept" button and the server will start.

<div class="text--center"><img src={require('../../static/imgs/plugins_and_modifications/serverpacks/15.png').default} alt=""/></div>

That's everything! You have sucessfully installed a server pack on your Bloom server. 

<div class="text--center"><img src={require('../../static/imgs/plugins_and_modifications/serverpacks/12.png').default} alt=""/></div>