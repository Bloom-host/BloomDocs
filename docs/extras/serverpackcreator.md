---
id: serverpackcreator
title: "Serverpack Creator"
slug: /extras/serverpackcreator
hide_table_of_contents: true
sidebar_label: "Serverpack Creator"
description: How can I make a serverpack to upload to my server?
keywords:
  - Minecraft
  - Forge
  - Fabric
  - Neoforge
  - Server
---
This guide gives you a step by step method on creating your own server-pack for a custom modpack, or a modpack that doesn't have a useable server-pack yet.

:::warning

While Server-pack Creator can make serverpacks it's not perfect and doesn't have a 100% guarantee in making the serverpack functional. Test to be sure it works.

:::

:::important

__Requirements!__
* Java 21+
* Download [Serverpackcreator](https://github.com/Griefed/ServerPackCreator/releases)

__Terminology__
* Server Pack Creator -> SPC (to make it easier to type out)

:::

1. Open SPC and select your custom modpacks folder. IT CANNOT BE A ZIP/TAR.GZ OR ANY OTHER COMPRESSED FILE.
2. When selected, SPC should automatically locate the Minecraft version, Modloader, and Modloader version. If it does not you might have not selected the right folder. 
  For For *prism launcher* specifically. You need to select the **\YOURMODPACK** folder FIRST to get the modloader, minecraft version, and mod loader version information, **then** go to **\YOURMODPACK\minecraft** for the mods and configs. Ignore the Yellow Warning Symbol at the top left.
  :::tip
  Prism launcher -> prismlauncher\instances\YOURMODPACK\minecraft

  AT-Launcher -> ATLauncher\instances\YOURMODPACK 
  
  Curseforge Launcher -> Curseforge\instances\YOURMODPACK
  :::
   ![Example](/extras/serverpackcreator/spc.png)
3. Press the generate button! Then press the button under generate to find the serverpack! BE SURE TO CHECK THE SERVERPACK BEFORE ZIPPING AND UPLOADING.

:::warning

The serverpack should NOT have a double folder inside of it. Instead it should have the Mods, Configs, Default configs, (Optional folders) Kubejs, Tacz, Etc. and start files. 

Feel free to ask for help inside #community-support in the [Bloom discord server](https://bloom.host/discord)
:::

4. Install the correct server information via the settings tab on your panel. If you are new, follow this guide [Bloom install guide](https://docs.bloom.host/jars)

:::tip

You can use SPC's serverpack generator information to install the server from the settings tab, for more information you can visit this. [Bloom jar guide](https://docs.bloom.host/jars)

:::

5. Zip the folder and Upload the zip with an SFTP client from the [SFTP guide](https://docs.bloom.host/sftp/)
6. Unzip the file via the panel, and make sure the folders of mods, configs, etc are in the /HOME/ directory, and not inside a sub folder such as home/mods/mods. Use the image as a correct example.
![Example](/extras/serverpackcreator/correct.png)
7. Start the server! Congrats, you made it to the end and now are hoping the server launches!

If you need more help. Join the [discord server](https://bloom.host/discord).
