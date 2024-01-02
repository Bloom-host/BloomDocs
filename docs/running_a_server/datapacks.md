---
id: datapacks
title: Datapacks
slug: /datapacks
hide_table_of_contents: true
sidebar_label: Datapacks
description: How to install a datapack onto your minecraft server.
keywords:
  - Minecraft
  - Datapack
  - Lag
  - Server
  - Plugin
  - Bloom.host
  - Pterodactyl Panel
  - Minecraft
---

Datapacks are specially structured folders or ZIP archives that you can use to customize your Minecraft experience
without using third party mods.

Installing a datapack is quite simple. Once you’ve downloaded the datapack you want to head over to your server
management tab.

Open your server in the DuckPanel and open the 'File Manager' tab.

![img](/running_a_server/datapacks/1.png)

Select the world you want to install the datapack onto.

![img](/running_a_server/datapacks/2.png)

Open the folder “datapacks” and Click the upload button in the top right corner and select upload your datapack. You can
also drag and drop the datapack .zip file.

:::important
Remember that you need to upload the .zip datapack file, you don't need to unzip it.
:::

![img](/running_a_server/datapacks/3.png)

Now restart your server, feel free to open a ticket if you need any assistance.

You can verify if the datapack was correctly installed by using the command `/datapack list enabled`.

---

## Disclaimer

While datapacks are built into the game, they can still have a large impact on server performance.

Certain creators such as [VanillaTweaks](https://vanillatweaks.net/picker/datapacks/) are mindful of this, but it's
important to note that this is not always the case.

If you notice lag spikes or tick loss, make sure to run a [Spark report](./spark.md).
If you find `CustomFunction` calls taking up a large chunk of the total server tick, it's possible one of the datapacks
is running calculation expensive commands.

![Spark report showing CustomFunctionData.executeTagFunctions using 24%](/running_a_server/datapacks/spark.png)

To further debug which datapack(s) or command(s) are causing the issue, you can use the game's built in `/perf start` profiler command.

:::caution HEADS UP
This command is removed altogether in PurpurMC. You might have to temporarily switch to PaperMC while doing this.
:::

After 10 seconds, it will generate a ZIP archive which you can find in the `debug/profiling/` folder:
![File Manager tab showing the ZIP file in the profiling folder](/running_a_server/datapacks/files.png)

Unarchive this file, and you can find the `profiling.txt` in the `server/` directory.
If you are lucky, the game also created a `deviations/ticktime/` folder with similar contents from the specific TPS drops.

![Zip file open showing the profiling.txt file](/running_a_server/datapacks/zip.png)

The easiest way to read this file is using a modern text editor, for example 
[Sublime Text](https://www.sublimetext.com/) or [Notepad++](https://notepad-plus-plus.org/downloads/).

Using any of these and find & replacing the following regular expression will allow the text editor to fold each section: `^\[.*?\]|\|`
Here is an example with Sublime Text:

![Find and replacing the file with Sublime Text 3](/running_a_server/datapacks/replace.gif)

At the top of the file, you can verify that the server was experiencing tick loss while the profiler was running. 
If this is not the case, rerun the profiler until you can catch the issue.

You can see how much of the total tick time certain actions take by the %-s next to the call. 
For example, in this case, the overworld takes up 99.55% of the 51.14%, so about ~50% of the total tick time. 

When talking about datapacks, it's crucial to note that most calls at the top of the profiling are usually not the root cause,
but are functions the game uses when processing commonly used commands.

![TPS showing 7 in the profiling.txt](/running_a_server/datapacks/tps.png)

Scrolling further down, you can find `commandFunctions` and each command that takes up any significant amount of processing time.
As mentioned above, these commands are often responsible for more processing that you can see further above, such as `getEntities` calls.
This is especially true for commands that run selectors without any filtering, such as `@e` and especially nested 
calls, such as `execute as @e at @s run <some command> @e` 

These are the raw commands, so if you want to find which datapack is executing them, you can simply do an in-folder search. 
This can be done in the DuckPanel by opening the datapacks folder under the 'File Manager' tab and searching for the command in the search bar.

![Minecraft profiler showing functions taking up 48%](/running_a_server/datapacks/profile.png)

Happy crafting!
