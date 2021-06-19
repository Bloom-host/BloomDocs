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
<img src="https://bloom.host/assets/images/logo.png" alt="logo" height="50%" width="50%"/>
<h1>File Manager Controls</h1>
</div>

### SFTP

We would highly suggest using an SFTP client over the built-in file manager in most cases such as for editing large configuration files, down/uploading large archives files and more. The file manager still has loads of useful features however. See our [guide on SFTP](sftp.md).

---

### Basic Rundown
By default you will be able to see the main/root folder of your server. You can click other folders to view their content. On the top left corner you can see your current path.

<div class="text--center"><img src={require('../../static/imgs/using_the_panel/file_manager_controls/1.png').default} alt="console"/></div>

#### Without selecting any files you can:
- download files from a link (if the link directly leads to a file!)
- create new directories or files
- upload files directly from your computer
- select all files with the checkbox in the top left corner.

You can also select induvidual files by clicking the checkbox right next to their names.

---

#### While having file(s) selected you can:
- copy or move the file within the current server's directories or even to <u>other split servers</u>! Simply select the server's name and the path of the new files' locations. You can use `..`to go up a directory and `/<directory>` to go into one. Here you can also specify whether to overwrite any files or folders with the same name.
- archive files together. This will depending on the size of the files take a while. Once it's done, you will be able to see a file called `archive-yyyy-mm-dd.tar.gz` with all the selected files and folders inside it.
- delete files. We would suggest using this feature when deleting loads of small files over using SFTP.

---

#### You can also click `...` next to a file to do even more. Here you can:
- rename a file/folder
- duplicate files
- download files