---
id: converting-worlds
title: Converting Bukkit Worlds to Vanilla
slug: /converting-worlds
hide_table_of_contents: true
sidebar_label: Converting Bukkit Worlds to vanilla
description: How to convert a Bukkit/Spigot/Paper world to a Vanilla one
keywords:
 - Bukkit
 - Spigot
 - Paper
 - Minecraft
 - world
 - saves

---

## Converting Bukkit Worlds to Vanilla
If you upload or generate a world on a Bukkit/Spigot/Paper server, you will notice that when the server loads it splits the world into three folders: `world`, `world_nether` and `world_the_end`, or one for each dimension. This is fine until you want to download the world and run it in singleplayer or switch to a Vanilla/Fabric/Forge server. This guide shows you how to convert Bukkit/Spigot/Paper worlds back to ones that can be used on Vanilla or other server types. Note that the screenshots provided were taken on macOS, but the method should work for all platforms.

---

## Part 1: Download the world
Stop your server so its world files do not change during the download. In DuckPanel's File Manager, select the `world`, `world_nether`, and `world_the_end` folders together and follow our [file and folder download guide](/file-manager-controls#downloading-files). If your world uses a different name, select its corresponding three folders instead.

The panel packages multiple folders into a `.tar.gz` archive. Extract it on your computer, keeping all three world folders together. Your extraction tool may require two passes: first extract the `.gz` layer, then the resulting `.tar` file.

**Note:** You can also copy the dimension folders directly within the [File Manager](/file-manager-controls), but the steps below use a downloaded copy.

---

## Part 2: Converting the world

Once you have downloaded and extracted your archive from the server, you should have three folders that look like  this:

![converting worlds](/running_a_server/converting_worlds/1.png)
In this guide, we will be referring to the folder where these folders are located as the "root" folder

First, go into `world_nether` and copy the `DIM-1` folder. You can safely ignore everything else.

![converting worlds](/running_a_server/converting_worlds/2.png)

Now, return to the root folder open the `world` folder and paste the `DIM-1` folder.

![converting worlds](/running_a_server/converting_worlds/3.png)

Return to the root folder once again and go into `world_the_end`. From here, copy the `DIM1` folder and paste it in the `world` folder, as we did with the `DIM-1` folder previously.

![converting worlds](/running_a_server/converting_worlds/4.png)
![converting worlds](/running_a_server/converting_worlds/5.png)

By copying the DIM-1 and DIM1 folders into `world`, you have made a copy of all the data of the Nether and End dimensions available in the `world` folder, which means that it now contains all the required data to run all three dimensions successfully (it already has its own copies of `level.dat`, `session.lock` and `uid.dat`) and can be run without issue on Vanilla, Fabric, Forge and other servers. 

