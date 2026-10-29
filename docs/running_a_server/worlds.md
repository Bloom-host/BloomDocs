---
id: worlds
title: Managing Worlds
slug: /worlds
hide_table_of_contents: false
sidebar_label: Managing Worlds
description: Learn how you can upload, export and manage your Minecraft worlds.
keywords:
  - Worlds
  - Import world
  - Java Edition
  - Bedrock Edition
  - Realms
  - level-name
  - .mcworld
---

:::note
If you'd like to import ALL your files from another hosting company, please follow our [Server Importer](/server-importer) guide instead!
:::

## Importing Worlds
Depending on your specific edition and world, there are a couple of methods of importing worlds.

## From Java Edition Single Player
If you have a single player world in Java Edition, this is what you need to do:

Open the single player menu and select your world. Then, press the 'Edit' button:
![Minecraft single-player world selected with the Edit button](/running_a_server/worlds/1.png)

Here, press the 'Open World Folder' button:
![Minecraft world settings with the Open World Folder button](/running_a_server/worlds/2.png)

Then, select all the files within the open directory and right click. Select 'Send To' and 'Compressed (zipped) folder':
![Windows context menu for creating a compressed world folder](/running_a_server/worlds/3.png)
You may get a warning about empty folders being skipped but that is okay!

Stop your Bloom server and open its File Manager. In the root (Home) directory, create a new folder such as `my-world` and open it. Use a new folder name to avoid mixing the imported world with an existing world.

Follow our [File Manager upload guide](/file-manager-controls#uploading-files-without-sftp) to drag the ZIP you created into this folder. Keep the panel open and wait for the upload to finish before continuing.

Press the '...' button next to your ZIP and click 'Unarchive'. Wait for extraction to finish; large worlds may take a few minutes.
![File Manager context menu with the Unarchive action](/running_a_server/worlds/6.png)

After unzipping, check that `level.dat` and the world's other files are directly inside `my-world`, rather than inside another nested folder. Here is how it should generally look.
![Extracted Java world files in the File Manager](/running_a_server/worlds/7.png)

Now, if you'd like this to be your main world, open the `server.properties` file in the main directory of your server and ensure the `level-name=` setting matches with the folder that you created before:
![server.properties level-name set to the uploaded world folder](/running_a_server/worlds/8.png)

Alternatively, if you'd like to use a plugin or mod such as [Multiverse-Core](/plugins/multiverse), you can import it using the folder's name.
In our example, for Multiverse-Core, you'd do `/mvimport my-world NORMAL`

That's it! Make sure to restart your server to apply the changes.

---

## From Java Realms
If you have a Minecraft Realm on Java Edition, this is what you need to do:

Open the Realm menu, select your Realm and press 'Configure':
![Minecraft Realms menu with the Configure button](/running_a_server/worlds/9.png)

Switch to the world you'd like to import to your Bloom server by clicking it, if you haven't already.
There press the 'World backups' button:
![Minecraft Realm settings with the World backups button](/running_a_server/worlds/10.png)

Lastly, press the 'Download latest' button which will download the very latest backup of your Realm to your single player saves folder: 
![Minecraft Realm backup with the Download latest button](/running_a_server/worlds/11.png)

That's it! Now you can follow the ['From Java Edition Single Player'](#from-java-edition-single-player) chapter to import your Realm world!

---

## From Bedrock Edition Single Player
If you have a single player world in Bedrock Edition, this is what you need to do:  

Open the worlds list and press the edit button next to your desired world:
![Minecraft Bedrock worlds list with an edit button](/running_a_server/worlds/12.png)

Scroll down to the very bottom of the main page and press 'Export World':
![Minecraft Bedrock world settings with the Export World button](/running_a_server/worlds/13.png)

Select your desktop, or another easy to access location:
![File picker saving the exported Bedrock world to the desktop](/running_a_server/worlds/14.png)

Stop your Bloom server and open its File Manager. Open the `worlds` directory, create a new folder such as `my-world`, and open it. Use a new folder name to avoid mixing the imported world with an existing world.

Follow our [File Manager upload guide](/file-manager-controls#uploading-files-without-sftp) to drag the exported `.mcworld` file into `worlds/my-world`. Keep the panel open and wait for the upload to finish. Then use the file's context menu to rename its extension from `.mcworld` to `.zip` so the panel can extract it.

Press the '...' button next to your ZIP and click 'Unarchive'. Wait for extraction to finish; large worlds may take a few minutes.
![File Manager context menu unarchiving the Bedrock world](/running_a_server/worlds/17.png)

After unzipping, check that `level.dat` and the `db` folder are directly inside `worlds/my-world`, rather than inside another nested folder. Here is how it should generally look.
![Extracted Bedrock world files in the File Manager](/running_a_server/worlds/18.png)

Lastly, open the `server.properties` file in the main directory of your server and ensure the `level-name=` setting matches with the folder that you created before:
![server.properties level-name set to the imported Bedrock world folder](/running_a_server/worlds/8.png)

That's it! Make sure to restart your server to apply the changes.

---

## Resetting Worlds
See our full [world reset guide](/world-reset)!

<!--
// Todo:
---

## Exporting Worlds

## To Java Single Player

## To Bedrock Single Player (`.mcworld`)

-->
