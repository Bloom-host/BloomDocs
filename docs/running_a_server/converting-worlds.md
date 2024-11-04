---
id: converting-worlds
title: Converting Bukkit Worlds to Vanilla
slug: /converting-worlds
hide_table_of_contents: true
sidebar_label: Converting Bukkit Worlds to vanilla
description: How to convert a Bukkit/Spigot/Paper world to a vanilla one
keywords:
 - Bukkit
 - Spigot
 - Paper
 - Bloom.host
 - Minecraft
 - world
 - saves

---

# Converting Bukkit Worlds to vanilla
If you upload or generate a world on a Bukkit/Spigot/Paper server, you will notice that when the server loads it splits the world into three folders: `world`, `world_nether` and `world_the_end`, or one for each dimension. This is fine until you want to download the world and run it in singleplayer or switch to a vanilla/Fabric/Forge server. This guide shows you how to convert Bukkit/Spigot/Paper worlds back to ones that can be used on vanilla or other server types. Note that the screenshots provided were taken on macOS, but the method should work for all platforms.

## Part 1: Download the world
**Note:** This is not strictly necessary, you CAN use SFTP or the file manager if you want, but downloading the files makes them much easier to work with.


This is most easily done by archiving the files using the Pterodactyl file manager and downloading them using SFTP. For instructions on using the file manager and SFTP, please see [File Manager Controls](/file-manager-controls/) and [How to use SFTP](/sftp/), respectively.

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

By copying the DIM-1 and DIM1 folders into `world`, you have made a copy of all the data of the Nether and End dimensions available in the `world` folder, which means that it now contains all the required data to run all three dimensions successfully (it already has its own copies of `level.dat`, `session.lock` and `uid.dat`) and can be run without issue on vanilla, Fabric, Forge and other servers. 

