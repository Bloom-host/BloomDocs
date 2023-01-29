---
id: file-manager-controls
slug: /file-manager-controls
title: File Manager Controls
hide_title: true
hide_table_of_contents: true
sidebar_label: File Manager Controls
image: https://bloom.host/assets/images/logo.png
---

<div class="text--center">
<img src="https://bloom.host/logo-white.svg" alt="logo" height="50%" width="50%"/>
<h1>File Manager Controls</h1>
</div>

### SFTP

If you would prefer to use SFTP to manage your files, please see our [guide on SFTP](sftp.md).

---

### Controls Summary
By default you will be able to see the main/root folder of your server. You can click other folders to view their contents. On the top left corner you can see your current path.

<div class="text--center"><img src={require('../../static/imgs/using_the_panel/file_manager_controls/1.png').default} alt="console"/></div>

#### Without selecting any files you can:
- Open the Recycle Bin to retrieve previously deleted files (up to 24h)
- Download files from a link (if the link directly leads to a file!)
- Create new directories or files
- Upload files directly from your computer
- Select all files with the checkbox in the top left corner.

You can also select individual files by clicking the checkbox to the left of the filename.

---

#### While having file(s) selected you can:
- Copy or move the file within the current server's directories or even to <u>other split servers</u>! Simply select the server's name and enter the destination directory. You can enter `../`to go up a directory and `/<directory>` to enter one. Here you can also specify whether to overwrite any files or folders with the same name.
- Archive files/folder into a single compressed file. Selecting this option will create a file named `archive-yyyy-mm-dd.tar.gz`
- Delete files. By default, this will send files to the Recycle Bin (space permitting) for 24 hours or until manualy purged.

---

#### You can also click `...` next to a file for additional options. Here you can also:
- Rename a file/folder
- Duplicate files
- Download files
