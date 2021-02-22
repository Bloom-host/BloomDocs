---
id: how-to-use-sftp
title: How to use SFTP to transfer files
hide_title: true
hide_table_of_contents: false
sidebar_label: Using SFTP For Files
description: This guide will help you use SFTP (FileZilla/WinSCP) to transfer files.
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
# How to use SFTP to transfer files



Hey Bloomers! 👋

In this guide we will be using SFTP to import and export files. The SFTP client we will be using is called FileZilla, which you can download from [here](https://filezilla-project.org/download.php?show_all=1). Alternatively you could try using [WinSCP](https://winscp.net/) or even [MobaXterm](https://mobaxterm.mobatek.net/)!

---

To find the login details, navigate to the sidebar of the server, then open the 'Settings' section.

![Bloom.host How to use SFTP](../static/img/how-to-use-sftp/how-to-use-sftp2.png)

---

Here you will be able to see your server's SFTP host name (red), and SFTP username (cyan). 

*With our new panel if you have WinSCP installed, you can launch straight away by clicking `Launch SFTP` (green)*

![Bloom.host How to use SFTP](../static/img/how-to-use-sftp/how-to-use-sftp3.png)

---

In case you aren't using WinSCP like in our case, input your login details in the top left. 
- Host: This can be seen on the panel, without the prefix or suffix. As an example: `sftp://testnode.bloom.host:2022` would be `testnode.bloom.host`
- Username: Just your SFTP username from the Settings Section.
- Password: Your game panel password. <u>Not your billing password!</u>
- Port: This will be `2022` for everyone. 

![Bloom.host How to use SFTP](../static/img/how-to-use-sftp/how-to-use-sftp4.png)

The left side contains the files stored on your computer (yellow), and the right (orange) contains the files on the server. The bottom, shown in blue, gives you information on the file transfer. 

If you wish to archive or unarchive files, please check out or [guide](file-manager-controls.md) on file management through the panel.

---