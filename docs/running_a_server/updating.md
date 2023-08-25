---
id: updating
title: How to update or change version
sslug: /updating
hide_table_of_contents: true
sidebar_label: Updating or changing versions
---

### Introduction
![logo](/running_a_server/updating/1.png)

Updating or changing the version of your your Bloom.host server is super easy and fast. We have integrated the API of many popular Minecraft jars into our panel, so you can update your server in seconds, no need to download anything to your local computer.

This same steps apply to changing the version your server runs on.

### Precautions
- Before updating or changing Minecraft versions be sure to create and test a backup of your entire server. Downgrading a world without causing corruption is near impossible.
- Moreover, if you aren't utilizing our [completely free and automatic backup feature](../using_the_panel/backups.md), we would highly suggest you set that up before updating.
- Once you update to a new version you can't go back to any previous version, unless you reset your worlds or restore a backup that was made when the server was on the previous version.

### Updating or changing versions and jars through the panel

To update or change the version of your server, go to the Duck Panel, select your server and click on the **Settings** tab. There you will find a box that says **Change Server Type**.

After you have selected the server type, you will be able to see the available versions of Minecraft and builds, here you can also select the type of server you want to run: Vanilla, Paper, Forge and others. After this, you can click on the "Change Server Type" button to change the jar, version or build your server runs on. Make sure to hit "Reinstall now" if you want the upgrade to proceed.

:::caution
Keep in mind that you can upgrade Minecraft servers, but you can't downgrade versions unless you reset your Minecraft worlds. Minecraft worlds don't support downgrading to older versions.
:::

After you have followed the steps above, you can periodically check the **Settings** tab and you will see a **New build available! We recommend to update to the latest build.** message if a new build of the server jar is available.

### Updating the server manually
- Make sure that your server is backed up completely.
- [Create full backup](../using_the_panel/backups.md) of your server. (As an additional step, we would suggest testing this backup on a local or a split test server)
- Remove your current server jar through [SFTP](../using_the_panel/sftp.md) or the [File Manager](../using_the_panel/file-manager-controls.md).
- Download the new version of your server software. If you are unsure which one to use, check out our guide on server jars [here](jars.md).
- Upload it using SFTP or the File Manager and make sure to define the full name (such as `paper-1.18-023` in the 'Startup' tab on the panel)
