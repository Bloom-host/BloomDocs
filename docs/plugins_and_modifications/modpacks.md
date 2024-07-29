---
id: modpacks
title: Installing Modpacks from CurseForge
slug: /modpacks
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

## New One-Click Modpack Installer from Bloom

:::important
Before following this guide, make sure that the modpack that you want to install isn't on the 'Modpacks' tab of our Minecraft panel. If the modpack is there, you can just click it and it will be automatically installed for you. 

To see a list of available modpacks please visit our [Modpack list page](/extras/available-modpacks), in that page we also explain the process you have to follow if you want us to add a modpack to our One-Click Modpack installer.
:::

:::note
This tutorial can also be used to update your server mod pack, just replace the old files with the new generated files. Always take a backup before updating your server.
:::

# Downloading the server pack

You'll first need to find the modpack you wish to install. Downloads can be found on a variety of sites. Many modpacks and server packs can be found on the multiplayer category of [CurseForge](https://www.curseforge.com/minecraft/modpacks/multiplayer). Make sure you select the multiplayer category, otherwise the modpack may not have a server pack version, and you will need to create the server pack yourself.

![](/plugins_and_modifications/serverpacks/1.png)

The first step would be selecting the modpack we want to install, in this tutorial we will use Better Minecraft Forge version.

![](/plugins_and_modifications/serverpacks/2.png)

After selecting the modpack, click on the Files tab and scroll down to the "Additional Files" section. Here you will usually find the serverpack version of the modpack. This is the file we need, so click on the download button. 

Do note that not all modpacks have a server pack, if they don't have a server pack you will need to install everything yourself.

![](/plugins_and_modifications/serverpacks/3.png)

![](/plugins_and_modifications/serverpacks/4.png)

After downloading the server pack, extract it on a folder. The extracted files will be similar to the ones we show below. We will need to run the Forge installer to install Forge on this server. This .jar is usually named "Forge-x.xx.x-xx.x.x-installer.jar". Double click on the Forge-installer.jar file to run it.

![](/plugins_and_modifications/serverpacks/5.png)

:::note
Some server packs already come with Forge installed or require you to run a .bat file to download the mods and Forge. 

This tutorial only applies to server packs that don't come with Forge installed. if the server pack comes with Forge installed you just need to upload the files to your Bloom server and start the server with the Forge .jar (not the one that says minecraft_server.jar).

If the server doesn't come with Forge installed or a Forge installer, it most likely comes with a .bat to download all the files, in this case just click on the .bat and it should start downloading the neccesary files. Then you just need to follow the rest of this tutorial to upload the files to your Bloom server and start it.
:::

After starting the Forge installer .jar, you will be presented with 3 options. We need to select the option that says "Install server", then click on the three dots to select the directory where Forge needs to be installed. This directory needs to be the directory where you previously extracted the server pack files.

![](/plugins_and_modifications/serverpacks/6.png)

![](/plugins_and_modifications/serverpacks/7.png)

After selecting the "Install server" option and the directory where we want to install Forge, click on the "Ok" button to start the installation. This process can take a few seconds while all the files are downloaded.

![](/plugins_and_modifications/serverpacks/8.png)

![](/plugins_and_modifications/serverpacks/9.png)

After sucessfully installing Forge, you will need to select all files in the directory and compress them. It's recommended you use a tool like 7Zip to compress the files, since Windows default compression option doesn't usually work with the panel.

![](/plugins_and_modifications/serverpacks/9.png)

After compressing the files, you will need to upload the compressed/archived file to your Bloom server. But first you have to delete all your files in your Bloom server, to do this you can go to the Duck Panel, click on file manager, select all the files and click on delete.

![](/plugins_and_modifications/serverpacks/11.png)

Server packs contain a lot of files, so you will need to connect through SFTP to upload the archived file. You can follow our guide on [How to connect through SFTP](/sftp). After you connect through SFTP, you can just drag and drop the .zip to the SFTP server.

![](/plugins_and_modifications/serverpacks/13.png)

We are almost finished! Now you can go to the console page, and start the server. But don't leave this page! You will be prompted to select the .jar to be used to start the server. You will need to select the Forge .jar, but not the one that says "Installer", just select the one that looks like this: Forge-1.16.5-36.2.8.jar (the version will be different).

:::note
Some servers don't name their .jar "Forge", in some cases it may have the name of the modpack like jurassic_reborn.jar, in this case just select that .jar to start the server.

NEVER select the .jar that it's named Minecraft_server.jar (it may contain the version # on the name). This .jar will just start a Vanilla server and you will need to reinstall the server pack again.
:::

![](/plugins_and_modifications/serverpacks/14.png)

The last step is to accept the EULA, just click on the "Accept" button and the server will start.

![](/plugins_and_modifications/serverpacks/15.png)

That's everything! You have sucessfully installed a server pack on your Bloom server. 

![](/plugins_and_modifications/serverpacks/12.png)
