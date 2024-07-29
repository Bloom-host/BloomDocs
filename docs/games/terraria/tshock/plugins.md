---
id: plugins
title: Using Plugins
hide_table_of_contents: true
description: Learn how you can install and use plugins on your TShock server!
note: This is referenced on the /terraria page on the main site
---

:::caution HEADS UP!
Plugins are not part of the vanilla server software, so in order for this to work, you must
install [TShock](overview.md).
:::

First, find some plugins you would like to install. A safe source is
the [official plugin list](https://github.com/Pryaxis/Plugins).

Additionally, make sure all plugins support your server's version. You can find the version of the server with
the `/version` command in-game or in the console.

For the purpose of this guide, we'll be installing [Creative Mode](https://github.com/bippity/CreativeMode) by Bippity.
![GitHub list showing a download link](/games/terraria/tshock/plugins/list.png)

Once you have your plugin(s), head over to the [File Manager](/using_the_panel/file-manager-controls.md) in
the [DuckPanel](https://mc.bloom.host/). Here, locate and open the `ServerPlugins` folder.
![Panel file manager showing ServerPlugins folder](/games/terraria/tshock/plugins/folder.png)

Within, you can already find the TShock API files. Simply upload all your plugins' files into the same directory:
![Panel file manager showing the install plugins folder](/games/terraria/tshock/plugins/files.png)

Then, head back to the 'Console' tab of the panel and restart the server.

While the server is loading, you should be able to see each plugin load:
![Panel console showing the plugins loaded](/games/terraria/tshock/plugins/console.png)

In our case, we can also verify that it worked by using the `/creativemode` command as
an [Admin](/games/terraria/tshock/admin) in-game!
![In-game creative mode plugin showing](/games/terraria/tshock/plugins/game.png)
