---
id: backups
title: Backups
slug: /backups
hide_title: true
hide_table_of_contents: false
sidebar_label: Managing Backups
image: https://bloom.host/assets/images/logo.png
---

<div class="text--center">
![logo](https://bloom.host/logo-white.svg)
<h1>Backups</h1>
</div>

### How Are Backups Handled?

- Create completely free backups with the panel utilizing Borg for incremental backups. This means, after the first backup, it will only save and upload the files which were changed since the last backup. All backups are off-site!

- You can create manual and even automatic backups and later restore, download, mount or delete them.

- [MySQL databases](databases.md) are even backed up too, as long as they are under 1GB in size.

You can you can generate up to 3 backups within a 24 hour period.

**Essentials** plans can store a maximum of **3** backups.
**Performance** plans can store a maximum of **5** backups.
**Performance+** plans can store a maximum of **10** backups.

---

### Creating Manual Backups
To create a manual backup, head over to the Backups tab on the panel.

Here you will find your current backups, and a **Create Backup** button. When you click the create backup button, you will get this screen:

![img](/imgs/using_the_panel/backups/1.png)

Simply give it a name and press the **Start Backup** button to continue. The backup then will start in the background, this may take some time depending on the size of your server.

---

### Setting Up Automatic Backups

1. Head over to the Schedules tab on the panel.
2. We are going to add a schedule that starts a backup, but these schedules can do way more! Find some examples at [Schedules](schedules.md). Simply click 'Create Schedule'. 
3. Select when you wish to have a backup and click 'Create Schedule'. In this case we do one every 8 hours using all 3 daily backups.
![img](/imgs/using_the_panel/backups/2.png)
4. Then, simply add the action "Create Backup" on a task.
![img](/imgs/using_the_panel/backups/3.png)


Keep in mind that you can you can generate up to 3 backups within a 24 hours period.

**Essentials** plans can store a maximum of **3** backups.
**Performance** plans can store a maximum of **5** backups.
**Performance+** plans can store a maximum of **10** backups.

If you have reached the backup limit, the oldest backup will be rotated.

---

### Restoring Backups

To restore a backup, simply head to the backups page, select the backup and click 'Restore'. Do note, this will overwrite any files with matching names. 

![img](/imgs/using_the_panel/backups/4.png)

---

### Mounting Backups

In case you only require a limited number of files from a backup, you can 'mount' it to your server. While a backup is mounted, you will not be able to stop or start your server nor create a new backup. 

To mount a backup:
1. Head over to the backups page
2. On the right side, click other options
3. Click 'Mount', select the folder or leave it as default and click 'Mount Backup' to confirm.
4. Head over to 'File Manager' and you should be able to view a new folder with all the files from that backup!

### How to restore specific files/folders

You can restore specific files from a backup by mounting it. Once you have mounted the backup, you can go to the file you want to restore. click on the `...` at the right of the file, and click on restore. This will restore the file to its original directory.

![img](/imgs/using_the_panel/backups/5.png)
