---
id: modpacks
title: Installing Modpacks from CurseForge
slug: /modpacks
hide_table_of_contents: true
sidebar_label: Installing Modpacks from CurseForge
description: This guide will help you set up a server pack from CurseForge
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

To see a list of available modpacks please visit our [Modpack list page](https://bloom.host/modpacks/), in that page we also explain the process you have to follow if you want us to add a modpack to our One-Click Modpack installer.
:::

:::note
This tutorial can also be used to update your server mod pack, just replace the old files with the new generated files. Always take a backup before updating your server.
:::

# Downloading the server pack

You'll first need to find the modpack you wish to install. Downloads can be found on a variety of sites. Many modpacks and server packs can be found on the multiplayer category of [CurseForge](https://www.curseforge.com/minecraft/modpacks/multiplayer). Make sure you select the multiplayer category, otherwise the modpack may not have a server pack version, and you will need to create the server pack yourself.

![](/plugins_and_modifications/serverpacks/1.png)

The example below uses Better Minecraft on Forge for Minecraft 1.16.5.

![](/plugins_and_modifications/serverpacks/2.png)

After selecting the modpack, click on the Files tab and scroll down to the "Additional Files" section. Here you will usually find the serverpack version of the modpack. This is the file we need, so click on the download button. 

Do note that not all modpacks have a server pack, if they don't have a server pack you will need to install everything yourself.

![](/plugins_and_modifications/serverpacks/3.png)

![](/plugins_and_modifications/serverpacks/4.png)

After downloading the server pack, extract it on a folder. The extracted files will be similar to the ones we show below. We will need to run the Forge installer to install Forge on this server. This .jar is usually named "Forge-x.xx.x-xx.x.x-installer.jar". Double click on the Forge-installer.jar file to run it.

![](/plugins_and_modifications/serverpacks/5.png)

:::note
Some server packs already come with Forge installed or require you to run a .bat file to download the mods and Forge. 

If your server pack already comes with Forge installed, you can skip the installer and go straight to uploading the pack to your Bloom server.

If the server doesn't come with Forge installed or a Forge installer, it most likely comes with a .bat to download all the files, in this case just click on the .bat and it should start downloading the necessary files. Then you just need to follow the rest of this tutorial to upload the files to your Bloom server and start it.
:::

After starting the Forge installer .jar, you will be presented with 3 options. We need to select the option that says "Install server", then click on the three dots to select the directory where Forge needs to be installed. This directory needs to be the directory where you previously extracted the server pack files.

![](/plugins_and_modifications/serverpacks/6.png)

![](/plugins_and_modifications/serverpacks/7.png)

After selecting the "Install server" option and the directory where we want to install Forge, click on the "Ok" button to start the installation. This process can take a few seconds while all the files are downloaded.

![](/plugins_and_modifications/serverpacks/8.png)

![](/plugins_and_modifications/serverpacks/9.png)

After successfully installing Forge, you will need to select all files in the directory and compress them. It's recommended you use a tool like 7Zip to compress the files, since Windows default compression option doesn't usually work with the panel.

![](/plugins_and_modifications/serverpacks/9.png)

After compressing the files, you will need to upload the compressed/archived file to your Bloom server. But first you have to delete all your files in your Bloom server, to do this you can go to the Duck Panel, click on file manager, select all the files and click on delete.

![](/plugins_and_modifications/serverpacks/11.png)

Server packs contain a lot of files, so you will need to connect through SFTP to upload the archived file. You can follow our guide on [How to connect through SFTP](/sftp). After you connect through SFTP, you can just drag and drop the .zip to the SFTP server.

![](/plugins_and_modifications/serverpacks/13.png)

Before starting the server, make sure the pack's files and folders, such as `mods` and `config`, are directly in the server's Home directory. If the archive extracted into an extra parent folder, [move its contents](/file-manager-controls#controls-summary) into the Home directory. Wait for extraction and any file moves to finish before continuing.

If your pack uses **Forge for Minecraft 1.17.1 or newer**, or **any version of NeoForge**, check that `unix_args.txt` is in **Home**. Then go to **Console** and click **Start**. If you can't find the file, see our [Forge and NeoForge startup guide](/forge-unix-args).

For **Forge on Minecraft 1.16.5 or older**, go to **Console** and click **Start**. When prompted to select a JAR, choose the Forge server JAR. In our example, that's `forge-1.16.5-36.2.8.jar`.

:::note
Some servers don't name their .jar "Forge", in some cases it may have the name of the modpack like jurassic_reborn.jar, in this case just select that .jar to start the server.

NEVER select the .jar that it's named Minecraft_server.jar (it may contain the version # on the name). This .jar will just start a Vanilla server and you will need to reinstall the server pack again.
:::

![](/plugins_and_modifications/serverpacks/14.png)

The last step is to accept the EULA, just click on the "Accept" button and the server will start.

![](/plugins_and_modifications/serverpacks/15.png)

That's everything! You have successfully installed a server pack on your Bloom server.

![](/plugins_and_modifications/serverpacks/12.png)
