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
<img src="https://bloom.host/assets/images/logo.png" alt="logo" height="50%" width="50%"/>
<h1>Backups</h1>
</div>

### How Are Backups Handled?

- Create completely free backups with the panel utilizing Borg for incremental backups. This means, after the first backup, it will only save and upload the files which were changed since the last backup. All backups are off-site!

- You can create manual and even automatic backups and later restore, download, mount or delete them.

- You may create 3 backups every 24 hours and store up to 8 at a time. In case all backup slots are used, automatic backups will rotate meaning the oldest one will be deleted and replaced with the newest one.

---

### Creating Manual Backups
To create a manual backup, head over to the Backups tab on the panel.

Here you will find your current backups, and a **Create Backup** button. When you click the create backup button, you will get this screen:

<div class="text--center"><img src={require('../../static/imgs/using_the_panel/backups/1.png').default}"img"/></div>

Simply give it a name and press the **Start Backup** button to continue. The backup then will start in the background, this may take some time depending on the size of your server.

---

### Setting Up Automatic Backups

1. Head over to the Schedules tab on the panel.
2. We are going to add a schedule that starts a backup, but these schedules can do way more! Find some examples at [Schedules](schedules.md). Simply click 'Create Schedule'. 
3. Select when you wish to have a backup and click 'Create Schedule'. In this case we do one every 8 hours using all 3 daily backups.
<div class="text--center"><img src={require('../../static/imgs/using_the_panel/backups/2.png').default}"img"/></div>
4. Then, simply add the commands and actions you wish to have. Here, we stop the server before and start it after the backup is created. This isn't a neccessary step but it's a better practice.
<div class="text--center"><img src={require('../../static/imgs/using_the_panel/backups/3.png').default}"img"/></div>


Keep in mind that you can store up to 5 backups at any time with a max of 3 backups within a 24 hour period.  
If you have reached the backup limit, the oldest backup will be rotated.

---

### Restoring Backups

To restore a backup, simply head to the backups page, select the backup and click 'Restore'. Do note, this will overwrite any files with matching names. 

<div class="text--center"><img src={require('../../static/imgs/using_the_panel/backups/4.png').default}"img"/></div>

---

### Mounting Backups

In case you only require a limited number of files from a backup, you can 'mount' it to your server. While a backup is mounted, you will not be able to stop or start your server nor create a new backup. 

To mount a backup:
1. Head over to the backups page
2. On the right side, click other options
3. Click 'Mount', select the folder or leave it as default and click 'Mount Backup' to confirm.
4. Head over to 'File Manager' and you should be able to view a new folder with all the files from that backup!