---
id: mcaselector
title: MCASelector CLI
slug: /mcaselector
hide_table_of_contents: true
sidebar_label: MCASelector CLI
description: Using MCASelector on your server
---

[MCASelector](https://github.com/Querz/mcaselector) is an extremely helpful graphical and CLI tool that server administrators can use to modify their worlds, for example, to remove unused chunks to lower disk usage and so on.

To avoid having to download and re-upload your world each time, Bloom has a pre-installation for this under 'No Support Games'.

## Preparation

:::danger
**WARNING**: Before doing anything else, please head over to the **[backups](../using_the_panel/backups.md)** guide to create a full backup of your server.
:::

1. In the DuckPanel open your server and, select the 'Settings' tab.
2. On the right side of the page, locate 'Change Server Type' and select the 'No Support Servers' server category.
3. Select the 'MCASelector' server type within the category and click the 'Change Server Type' button.
4. After a few moments, the installation will finish, and you are good to go!

![](/running_a_server/mcaselector/1.png)

---

## Usage
For this pre-install, everything is done in the 'Startup' tab of the panel:

Here you can modify which specific flags are passed to MCASelector when you start the server.

![](/running_a_server/mcaselector/2.png)

The default flags will delete all chunks that have only been visited for **1 second or less** in the `world` world.
`InhabitedTime` is given in ticks, so while this is very safe, it's likely too low for survival servers and the like, so you may have to change `20` to something higher.

If your world is named differently, make sure to adjust it!

Once you are happy with the flags, return to the 'Console' tab and start the server.

![](/running_a_server/mcaselector/3.png)

In our example, it was only a few dozen chunks, so it only took a few moments but this process may take a very long time for larger worlds.
Once it's finished, you can review the logs to ensure everything worked fine and then stop the server with the 'Stop' button.

If there is nothing else you want to do with MCASelector, head back to 'Settings' and select your original pre-install, such as Paper or Purpur.

🔗 For more advanced concepts, you can find the full documentation for the CLI mode here: https://github.com/Querz/mcaselector/wiki/CLI-Mode
