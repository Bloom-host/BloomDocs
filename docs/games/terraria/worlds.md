---
id: worlds
title: Worlds
hide_table_of_contents: true
description: Learn how you can manage worlds for your Terraria server!
---

## Importing An Existing World

In case you have an existing world on another server or in single player, you can import it to your Bloom Terraria
server with all your structures and progress.

:::caution HEADS UP!
Terraria stores player profiles (items, perks, and so on) locally.
Each player has to make sure their profile is stored safely.
:::

First, you will need to find the world file. If the world is from a server, you can find it in the `saves/Worlds/`
directory with the `.wld` extension.
You can find your single player worlds by pressing Windows Key + R and entering: `Documents/My Games/Terraria/Worlds`

Once you have found the file, you can use the panel's [File Manager](/using_the_panel/file-manager-controls.md)
or [SFTP](/using_the_panel/sftp.md) to access your server's files.

Here, find for the `saves/Worlds/` directory and upload your `.wld` into it.

![Panel worlds folder](/games/terraria/worlds/panel.png)

Once the file is uploaded, head over to the 'Startup' tab and ensure the 'World Name' matches with the file you
uploaded. As an example, if the file is called `my_world.wld`, set this field as `my_world`.

![Panel startup tab showing world name](/games/terraria/worlds/startup.png)

Lastly, head back to the 'Console' tab and restart the server to apply the changes.

![Structure showing in game verifying the process](/games/terraria/worlds/verification.png)

---

## Using Steam Workshop Maps

In order to use any of the workshop maps, you will need to import them locally first.
To do this, open the workshop map you wish to import and click 'Subscribe'.

![Steam workshop subscribe button](/games/terraria/worlds/steam.png)

Then, in-game, click 'Workshop' in the main menu. Here, select the 'Import Worlds' option.

![Steam workshop subscribe button](/games/terraria/worlds/menu.png)

Within, you will see all the subscribed worlds that you have not imported. Click the play button to do so.

![Steam workshop subscribe button](/games/terraria/worlds/import.png)

You will be prompted to enter a name, and it may take a few moments to import afterward.

Lastly, follow the [Importing An Existing World](#importing-an-existing-world) steps to upload the imported world to
your Bloom Terraria server!

![Structures showing in game verifying the process](/games/terraria/worlds/imported.png)

---

## Creating A New World

In order to change seed, size or difficulty of the world, you will generally want to create a new one.

First, open your Bloom Terraria server in the [DuckPanel](https://mc.bloom.host/). Click the 'Console' tab and stop the
server. Then, head to the 'Startup' tab.

Here, you can adjust the size of the world, the difficulty and the seed as well.

:::caution HEADS UP!
Journey player profiles can only connected to worlds using the Journey difficulty, and regular characters cannot
connect when this is selected.
:::

:::note
Terraria has several special seeds as easter-eggs. You can find a full list of them on
the [Terraria Wiki](https://terraria.fandom.com/wiki/Secret_world_seeds)!
:::

![Panel world fields](/games/terraria/worlds/fields.png)

Once you are done, there are two ways to proceed:

1. Set a new world name. This will allow the server to create a new world.
2. If you wish to keep the existing name and reset the world, head to the 'File Manager' tab, open the `saves` directory
   and then the `Worlds` within. Select and delete all the files with the name of your world. (The `.bak` files are
   only backups created by the game, but it's best to remove them to avoid confusion)

Lastly, start the server back up in the 'Console' tab!


