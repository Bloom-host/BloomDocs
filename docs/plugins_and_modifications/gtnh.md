---
id: gtnh
title: Installing Gregtech New Horizons
slug: /gtnh
hide_table_of_contents: true
sidebar_label: Installing Gregtech New Horizons
description: This guide will help you setup the Gregtech New Horizons modpack on Bloom.host
keywords:
  - Forge
  - Minecraft
  - Modded
  - GTNH
---

## Requirements

:::warning
This was written before Bloom's one click modpack installer was updated and hence does not apply for bloom servers any more
:::

:::important
Before following this guide, make sure that the appropriate version of Java is installed on your computer and that you have at least 6GB of RAM available for the first time setup on your computer.

You should also familiarize yourself with using SFTP to transfer files using our [SFTP guide](/sftp), it will be needed to transfer files.
:::

:::note
This tutorial is written with the Java 17-21 version of Gregtech New Horizons in mind, but the process is the same for the Java 8 version. The only difference being what Java version is selected during configuration of the server on the startup page.

The Java 17-21 version is recommended because it offers better performance than the Java 8 version. The Java version of the server does not need to match the Java version of your client.
:::

# Downloading the server pack

You'll first need the Gregtech New Horizons server pack you wish to install. This tutorial will assume that you are planning to install the latest version of the pack using the Java 17-21 version. Download the latest pack version from the official repository on the [GTNH website](https://gtnewhorizons.com/). Ensure you have downloaded the latest version ending in "Java_17-21". You can find the server packs in the "Sever Zips" section of "Downloads".

Once downloaded extract the server pack zip on your computer to a folder of your choice. This may take a few minutes to complete.

Navigate inside the folder you extracted the server pack into. Inside are the server pack files. If you are on Windows, find the file named "startserver-java9.bat" run it to start the server. If you are running Linux, open a terminal in the folder and run the server using the command `./startserver-java9.sh`. It is important to do this via a terminal rather than launching the file from a file explorer as it will run in the background if launched from the explorer, and the auto restarting feature of the launch script will require more advanced knowledge of Linux to stop.

The server will generate config files, and you must accept the EULA before continuing. Stop the server and edit the file called "eula.txt." Change the line reading "eula=false" to "eula=true" and save the file.  Restart the server using the setups listed above.

After starting the server, Gregtech New Horizons will perform its initial setup. This may take a long while, depending on your computer. Wait for the server to complete setup.

Setup is complete when the console window does not produce any output for 30 or so seconds. Alternatively the line "[Server thread/INFO] [FML]: Unloading dimension 1" will be printed to the console. At this point, stop the server by typing "stop" into the command window and pressing enter. Allow the server to come to a complete stop. On Windows, the window will automatically exit when the server stops. On Linux, you will be prompted to press a key within 10 seconds of stopping, or the server will restart. Do this as soon as prompted.

:::note
If the default Java version on your system is not Java 17 or 21, you will need to manually specify it by editing the "serverstart-java9.bat" or "serverstart-java9.sh".

For Windows, open "serverstart-java9.bat" and replace "java" on the second line with the path to your Java 17 or Java 21 executable enclosed in quotes. Save the file and continue.

For Linux, open the "serverstart-java9.sh" and replace "java" on line 6 with the appropriate command to run Java 17 or 21. Save the file and continue.
:::

# Preparing your Bloom server

In your Bloom control panel, navigate to the server settings panel. In the "Change Server Type" section, change the server type to "Java - Forge" and the version to "1.7.10". It should automatically select the latest recommended build of Forge. Press the "Change Build" button.

![](/plugins_and_modifications/gtnh/1.png)

Next, in the settings panel in the "Reinstall Server" section, check the "Remove All Files" option. Then click the "Reinstall Server" button and wait for the process to complete.

![](/plugins_and_modifications/gtnh/2.png)

Finally, navigate to the "Startup" section of the panel. Change the "Java Version" to Java 21. Change the "Server Jar File" to "lwjgl3ify-forgePatches.jar". Change the "Startup Flags" to "-Dfml.readTimeout=180 @java9args.txt".

![](/plugins_and_modifications/gtnh/3.png)

In "File Manager" select and delete all files.

# Uploading your server.

Ensure you have familiarized yourself with using SFTP. You can follow our guide on [how to connect through SFTP](/sftp).

In the folder where you extracted the Gregtech New Horizons server pack, select all files and compress them into a zip. It is a good idea to name it something like "GTNH.zip" so that you can easily find it for the next step. This is recommended as it will significantly speed up transfer via SFTP. Wait for the zipping to complete.

Next, open your SFTP client and connect to your Bloom server. Navigate to the server pack directory on your computer. Drag the zip you just made to the Bloom server in your SFTP client. This will begin the upload. Wait for the upload to complete.

After the upload has been completed, open your Bloom control panel and go to the "File Manager" tab. You will see your uploaded Gregtech New Horizons zip file. Select it. At the bottom of the screen a new option will appear named "unzip/extract". Press this and wait for extraction to finish. You can then delete the zip you uploaded, as you will not need it anymore.

In the "Console" tab of the Bloom panel, press "Start" and your server should start, assuming you followed the steps in this guide correctly.

Congratulations, you are ready to start grinding away in Gregtech New Horizons!
