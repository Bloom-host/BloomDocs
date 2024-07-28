---
id: crossplay
title: Enabling Crossplay
hide_table_of_contents: true
description: Learn how you can enable mobile <-> PC crossplay on your TShock server!
---

:::caution HEADS UP!
This is not possible with the vanilla server software, so in order for this to work, you must
install [TShock](overview.md).
:::

By default the game only allows either PC, or mobile players to connect to a server. To work around this limitation, you
can use the [Crossplay](https://github.com/Moneylover3246/Crossplay) TShock plugin.

To install it, first get the current version of your server by using the `/version` command in the 'Console' tab of
the [DuckPanel](https://mc.bloom.host):

![Panel console showing the version command](/games/terraria/tshock/crossplay/console.png)

Then, head over to the [releases](https://github.com/Pryaxis/TShock/releases) page of **TShock** and find the
release that matches your server's **TShock version**:

![GitHub showing both the Terraria and TShock versions](/games/terraria/tshock/crossplay/tshock-github.png)

Now, using the Terraria version (`1.4.4.9` in our case), head over to the [releases](https://github.com/Moneylover3246/Crossplay/releases)
page of the **Crossplay** plugin, and find the compatible version for your server.

Once found, download the `Crossplay.dll` asset.

![GitHub showing the compatible cross play plugin download](/games/terraria/tshock/crossplay/crossplay-github.png)

Finally, please follow the steps to [install the Crossplay plugin](/games/terraria/tshock/plugins).
