---
id: serverpackcreator
title: "Serverpack Creator"
slug: /serverpackcreator
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

While Server-pack Creator can make serverpacks it's not perfect and doesn't have a 100% guarantee in making the serverpack functional.

:::

:::important

__Requirements!__
* Java 21+
* [Serverpackcreator](https://github.com/Griefed/ServerPackCreator/releases)

__Terminology__
* Server Pack Creator -> SPC (to make it easier to type out)

:::

1. Open SPC and select your custom modpacks folder. IT CANNOT BE A ZIP/TAR.GZ OR ANY OTHER COMPRESSED FILE.
2. When selected, SPC should automatically locate the Minecraft version, Modloader, and Modloader version. If it does not you might have not selected the right folder. If you use Prism launcher, the modpack directory would be inside prismlauncher/instances/YOURMODPACK/minecraft
   ![Example](/running_a_server/SPC/spc.png)
3. Press the generate button! Then press the button under generate to find the serverpack! BE SURE TO CHECK THE SERVERPACK BEFORE ZIPPING AND UPLOADING.

:::warning

The serverpack should NOT have a double folder inside of it. Instead it should have the Mods, Configs, Default configs, (Optional folders) Kubejs, Tacz, Etc. and start files. 
Feel free to ask for help inside #community-support in the [Bloom discord server](https://bloom.host/discord)
:::

4. Install the correct server information via the settings tab on your panel. 

:::hint

Use SPC's information it uses for generating the serverpack for the server install via settings on the panel

:::

5. Zip the folder and Upload the zip with an SFTP client from the [SFTP guide](https://docs.bloom.host/sftp/)
6. Unzip the file, and make sure the mods/configs/etc are in the HOME directory, and not inside a sub folder. 
7. Start the server! Congrats, you made it to the end and now are hoping the server launches!

If you need more help. Join the [discord server](https://bloom.host/discord).
