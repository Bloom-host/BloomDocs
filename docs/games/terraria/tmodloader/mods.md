---
id: mods
title: Using Mods
hide_table_of_contents: true
description: Learn how you can install and use mods on your tModLoader server!
note: This is referenced on the /terraria page on the main site
---

:::caution HEADS UP!
Mods are not part of the vanilla server software, so in order for this to work, you must
install [tModLoader](overview.md).
:::

Mods are a way for developers to add new items, bosses, mechanics and more into the game.

tModloader itself has a built-in mod list where you can browser and install mods.
You can find this by clicking 'Workshop' in the main menu, and then the 'Download Mods' option.

![Download Mods menu item highlighted in game](/games/terraria/tmodloader/mods/menu_download.png)

Once you have found a mod you'd like to use, press the 'Download with dependencies' button. This may take a few moments
to process.

![Download with dependencies button highlighted in game](/games/terraria/tmodloader/mods/download_mod.png)

Once downloaded, click the 'Back' button and open the 'Manage Mods' option.

![Manage Mods menu item highlighted in game](/games/terraria/tmodloader/mods/menu_manage.png)

Click the 'Disabled' label to enable the mod.
Next, press the 'Open Mods Folder' button which will open the folder in your file explorer.

![Disabled label highlighted in game](/games/terraria/tmodloader/mods/enable.png)

For newer versions of tModLoader, the files will be nested in some numbered directories. If you are unsure
which one your mod is, you can search it up in the Steam workshop to get its ID!
![Mods directory open in file explorer](/games/terraria/tmodloader/mods/folder.png)

Open your server in the [DuckPanel](https://mc.bloom.host/) and select
the [File Manager](/using_the_panel/file-manager-controls.md) tab.

Here, open the `mods` folder and drag & drop all the files ending in `.tmod` from the previously opened local folder.

Lastly, make sure to upload the `enabled.json` file. You will be prompted whether to overwrite the existing file; make
sure to **allow it to overwrite the file**.

Now, going back to the 'Console' page of the panel and restarting the server will apply our changes.

![Panel console showing the mod is loaded](/games/terraria/tmodloader/mods/console.png)

That's it! You can now connect to the server and use the mods! Make sure all players who want to play on the server
have all the necessary mods installed.
