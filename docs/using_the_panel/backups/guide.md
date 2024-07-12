---
id: backups
title: Managing Backups
slug: /backups
hide_table_of_contents: false
sidebar_label: Managing Backups
---

<div style={{display: 'none'}}>
// Todo (notgeri): a link that allows you to add your server ID to go to it
// Todo (notgeri): remove old images
// Todo (notgeri): 
- quick restore
- full restore
- mount
- delete
- get download/download
- ignore
- pro backup addon
</div>

## Introduction

Game services come with our free user-managed off-site incremental backup system.

This means, after the first backup, it will only save and upload the files which were changed since the last backup.

All backups are stored off-site for security!

You can create manual and even automatic backups and later [restore](#restoring-backups), [download](#downloading-backups), [mount](#mounting-backups) or [delete](#deleting-backups) them.

[MySQL databases](../databases) are also [backed up](#mysql-databases), as long as they are under 1 GB in size.

| Plan                                    | Max Stored Backups | Max Backups Per Day |
|-----------------------------------------|--------------------|---------------------|
| Essentials                              | 3                  | 3                   |
| Performance                             | 5                  | 3                   |
| Performance Plus                        | 10                 | 3                   |
| ✅ [Pro Backup Addon](#pro-backup-addon) | Base plan + 10     | 8                   |

// Todo (notgeri): update
<iframe width="560" height="315" src="https://www.youtube.com/embed/KnzimsqhwQs?si=NZM1oLrhgWiOqu4P" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

---

### Creating Manual Backups

To create a manual backup, head over to the Backups tab on the panel.

Here you will find your current backups, and a **Create Backup** button. When you click the create backup button, you
will get this screen:

![img](/using_the_panel/backups/1.png)

Simply give it a name and press the **Start Backup** button to continue. The backup then will start in the background,
this may take some time depending on the size of your server.

---

### Setting Up Automatic Backups

1. Head over to the Schedules tab on the panel.
2. We are going to add a schedule that starts a backup, but these schedules can do way more! Find some examples
   at [Schedules](schedules.md). Simply click 'Create Schedule'.
3. Select when you wish to have a backup and click 'Create Schedule'. In this case we do one every 8 hours using all 3
   daily backups.
   ![img](/using_the_panel/backups/2.png)
4. Then, simply add the action "Create Backup" on a task.
   ![img](/using_the_panel/backups/3.png)

Keep in mind that you can you can generate up to 3 backups within a 24 hours period.

**Essentials** plans can store a maximum of **3** backups.
**Performance** plans can store a maximum of **5** backups.
**Performance+** plans can store a maximum of **10** backups.

If you have reached the backup limit, the oldest backup will be rotated.

---

### Restoring Backups

To restore a backup, simply head to the backups page, select the backup and click 'Restore'. Do note, this will
overwrite any files with matching names.

![img](/using_the_panel/backups/4.png)

---

### Mounting Backups

In case you only require a limited number of files from a backup, you can 'mount' it to your server. While a backup is
mounted, you will not be able to stop or start your server nor create a new backup.

To mount a backup:

1. Head over to the backups page
2. On the right side, click other options
3. Click 'Mount', select the folder or leave it as default and click 'Mount Backup' to confirm.
4. Head over to 'File Manager' and you should be able to view a new folder with all the files from that backup!

### How to restore specific files/folders

You can restore specific files from a backup by mounting it. Once you have mounted the backup, you can go to the file
you want to restore. click on the `...` at the right of the file, and click on restore. This will restore the file to
its original directory.

![img](/using_the_panel/backups/5.png)
