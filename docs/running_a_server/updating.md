![](./image-1754217438577.png)

# Updating or Changing Versions

# How to update or change version

![](./image-1754149254588.png)

# Precautions
:::info
# Take Note
Before updating or changing Minecraft versions be sure to create and test a backup of your entire server. Downgrading a world without causing corruption is near impossible.
:::
:::info
# Take Note
Moreover, if you aren't utilizing our completely free and automatic backup feature, we would highly suggest you set that up before updating.
Once you update to a new version you can't go back to any previous version, unless you reset your worlds or restore a backup that was made when the server was on the previous version.
:::

After you have selected the server type, you will be able to see the available versions of Minecraft and builds, here you can also select the type of server you want to run: Vanilla, Paper, Forge and others.

:::warning
# Warning
Keep in mind that you can upgrade Minecraft servers, but you can't downgrade versions unless you reset your Minecraft worlds. Minecraft worlds don't support downgrading to older versions.
:::

![](./image-1754149449572.png)

After this, you can click on the version you want to change, version or build your server runs on.
![](./image-1754149649328.png)

For example upgrading your server into Paper 1.21.8. Click the version 1.21.8 (highlited with pink box) and the install panel will popup. Don't forget to click the button accept EULA, and kindly click the install

:::info
# INFO
If you're going to wipe your server files you can click the "Wipe Server Files" button. If not do not click it!
:::

![](./image-1754149873031.png)

After you have followed the steps above, you can now run your server and test out your new Updated Version or Upgraded version.- Once you update to a new version you can't go back to any previous version, unless you reset your worlds or restore a backup that was made when the server was on the previous version.

### Updating or changing versions and jars through the panel

To update or change the version of your server, go to the Duck Panel, select your server and click on the **Settings** tab. There you will find a box that says **Change Server Type**.

After you have selected the server type, you will be able to see the available versions of Minecraft and builds, here you can also select the type of server you want to run: Vanilla, Paper, Forge and others. After this, you can click on the "Change Server Type" button to change the jar, version or build your server runs on. Make sure to hit "Reinstall now" if you want the upgrade to proceed.

:::caution
Keep in mind that you can upgrade Minecraft servers, but you can't downgrade versions unless you reset your Minecraft worlds. Minecraft worlds don't support downgrading to older versions.
:::

After you have followed the steps above, you can periodically check the **Settings** tab and you will see a **New build available! We recommend to update to the latest build.** message if a new build of the server jar is available.

### Updating the server manually
- Make sure that your server is backed up completely.
- [Create full backup](/backups) of your server. (As an additional step, we would suggest testing this backup on a local or a split test server)
- Remove your current server jar through [SFTP](../using_the_panel/sftp.md) or the [File Manager](../using_the_panel/file-manager-controls.md).
- Download the new version of your server software. If you are unsure which one to use, check out our guide on server jars [here](/jars).
- Upload it using SFTP or the File Manager and make sure to define the full name (such as `paper-1.18-023` in the 'Startup' tab on the panel)
