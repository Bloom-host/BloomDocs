---
id: updating
title: How to update or change version
slug: /updating
hide_table_of_contents: true
sidebar_label: Updating or changing versions
description: Update or change the Minecraft server type and version from DuckPanel.
keywords:
  - Updating
  - Update server
  - Change version
  - Server type
  - Server jar
  - Reinstall
---

### Introduction
![logo](/running_a_server/updating/1.png)

Updating or changing the version of your Bloom.host server is super easy and fast. We have integrated the API of many popular Minecraft jars into our panel, so you can update your server in seconds, no need to download anything to your local computer.

These same steps apply to changing the version your server runs on.

### Precautions
- Before updating or changing Minecraft versions be sure to create and test a backup of your entire server. Downgrading a world without causing corruption is near impossible.
- Moreover, if you aren't utilizing our [completely free and automatic backup feature](/backups), we would highly suggest you set that up before updating.
- Once you update to a new version you can't go back to any previous version, unless you reset your worlds or restore a backup that was made when the server was on the previous version.

### Updating or changing versions and jars through the panel

To update or change the version of your server, go to DuckPanel, select your server and click on the **Settings** tab. There you will find a box that says **Change Server Type**.

After you have selected the server type, you will be able to see the available versions of Minecraft and builds, here you can also select the type of server you want to run: Vanilla, Paper, Forge and others. After this, you can click on the "Change Server Type" button to change the jar, version or build your server runs on. Make sure to hit "Reinstall now" if you want the upgrade to proceed.

:::caution
Keep in mind that you can upgrade Minecraft servers, but you can't downgrade versions unless you reset your Minecraft worlds. Minecraft worlds don't support downgrading to older versions.
:::

After you have followed the steps above, you can periodically check the **Settings** tab and you will see a **New build available! We recommend to update to the latest build.** message if a new build of the server jar is available.

### Updating the server manually
- Make sure that your server is backed up completely.
- [Create full backup](/backups) of your server. (As an additional step, we would suggest testing this backup on a local or a split test server)
- Stop your server, then remove the current server JAR from the root (Home) directory through the [File Manager](/file-manager-controls). Keep your world, plugin, and configuration files.
- Download the new version of your server software. If you are unsure which one to use, check out our [server jars guide](/jars).
- [Upload the new server JAR through the File Manager](/file-manager-controls#uploading-files-without-sftp) into the root directory. Wait for the upload to finish, then set **Server Jar File** in the 'Startup' tab to its exact filename, including `.jar` (for example, `paper-1.18-023.jar`). Leave the JAR intact rather than extracting it, then start the server.
