---
id: file-manager-controls
slug: /file-manager-controls
title: File Manager Controls
hide_table_of_contents: true
sidebar_label: File Manager Controls
---

### SFTP

If you would prefer to use SFTP to manage your files, please see our [guide on SFTP](sftp.md).

---

<iframe width="560" height="315" src="https://www.youtube.com/embed/Dgl5JNRju-A?si=howzfCpQT7hsEfyo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


### Controls Summary
By default you will be able to see the main/root folder of your server. You can click other folders to view their contents. On the top left corner you can see your current path.

![console](/using_the_panel/file_manager_controls/1.png)

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
