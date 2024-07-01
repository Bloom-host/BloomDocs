---
id: sftp
title: Using SFTP
slug: /sftp
hide_table_of_contents: true
sidebar_label: Using SFTP For Files
description: This guide will help you use SFTP (MobaXTerm/WinSCP/FileZilla) to transfer files.
keywords:
  - Bloom.host
  - Import Files
  - Export Files
  - Transfer Files
  - SFTP
  - File Access
  - Bloom.host file access
  - Pterodactyl Panel
---

### What is SFTP? 
**S**SH **F**ile **T**ransfer **P**rotocol is one of the most popular methods of securely transferring files to remote servers.

:::important
We recommend you zip the files you want to upload to your server, uploading individual files through SFTP can take a long time. Once you have uploaded the .zip file to your server, you can go to the file manager in our Duck Panel, click on the three dots `...` to the right of the .zip and click on `Extract`.  
:::

### More Actions like compress, extract, rename, and others
If you wish to archive, unarchive or mass delete files, please check out or [guide](../using_the_panel/file-manager-controls.md) on file management through the panel.

### Using SFTP

![console](/using_the_panel/sftp/2.png)

There are several so called *SFTP Clients* few of the more popular ones being [WinSCP](https://winscp.net/), [MobaXTerm](https://mobaxterm.mobatek.net/) or [FileZilla](https://filezilla-project.org/). 

To find the login details, navigate to the sidebar of the server, then open the 'Settings' section.

Here you will be able to see your server's SFTP host IP address and port as well as your username! Your SFTP password is the same as your game panel password.
 
*If you have WinSCP installed, you can launch straight away by clicking `Launch SFTP`.*

### Using WinSCP
Firstly, you'll have to download [WinSCP](https://winscp.net/eng/download.php) to your computer. - This should be simple with their installation wizard.

With our new panel, you can simply head over to the [Duck Panel](https://mc.bloom.host/) and click 'Launch SFTP' under 'Settings' on the left side of the screen. You'll simply need to enter your panel password and you are good to go!

![console](/using_the_panel/sftp/3.png)

WinSCP is very similar to your basic Windows Explorer. However, on the right side of the screen (green area) you can see your local files and on the left side (blue area), you can see the remote server's files.
You can drag, drop, rename and delete files as you wish. 

### Using MobaXTerm
Firstly, you'll have to download [MobaXTerm](https://mobaxterm.mobatek.net/download.html). They do have a free edition and also a professional, paid one. - This should be simple with their installation wizard.
 
Once that's done, simply launch the application. Right-click on the left side of the screen and click 'New Session'!
Here, select 'SFTP' in the middle.

![console](/using_the_panel/sftp/4.png)

You'll have to enter your host's IP, port and SFTP username (as discussed above). Once that's done, simply click 'Ok'.
 
You'll be asked for your panel password. By default, this password will be stored.

![console](/using_the_panel/sftp/5.png)

On the left side (green area) of your screen, you can see your local file tree and files and on the left side (blue area) you can see your remote files.
You can drag, drop, rename and delete files as you wish.

---

### Using Visual Studio Code
You can also use VSC to edit files via SFTP!

To do this, we will use the **SFTP** addon for Visual Studio Code for efficient transferring files to remote servers.

1. Install the extension on your IDE:
   ![VSC addon](/using_the_panel/sftp/vsc/addon.png)
2. Open a folder for your SFTP files (preferably separated so as not to be cluttered)
   ![Windows context menu](/using_the_panel/sftp/vsc/context-menu.png)
3. Open the command palette in VSC, (By default, CTRL+SHIFT+P), and find the 'SFTP: Config' command:
   ![VSC command palette](/using_the_panel/sftp/vsc/command-palette.png)
4. Set up your SFTP credentials in the `sftp.json` config. Make sure to set `uploadOnSave` to `true`
   ![sftp.json file](/using_the_panel/sftp/vsc/sftp.json.png)
5. After that, go to your settings and ensure 'Download When Open In Remote Explorer' is enabled. 
   ![Remote explorer setting](/using_the_panel/sftp/vsc/remote-explorer.png) 
6. That's it! You can find your files in the sidebar:
   ![VSC sidebar](/using_the_panel/sftp/vsc/sidebar.png)

**TIP**: when you open a file that has a copy from local version, we highly suggested
not modifying the local. If you edit the same file somewhere (e.g Bloom
File Explorer) there is a chance that the local file will be uploaded to delete the file
you have edited.
