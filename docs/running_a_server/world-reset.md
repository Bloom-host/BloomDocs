![](./image-1754207478811.png)

# Resetting your World(s)

You'll need a way to access your server files. This tutorial references the [web panel](https://panel.atbphosting.com/), but you can also use SFTP. Shutdown your server before proceeding!

# Step 1: Go to your "Files" Tab on your Panel
After clicking the button , you will see the container which your server files in.
![](./image-1754207694333.png) 

# Step 2: Find you worlds to delete.
There are three types of worlds: Overworld (world), Nether (nether_world), and The End (world_the_end). If you want to delete all of them, simply check the box on the left side of each file.
![](./image-1754207900994.png)

# Step 3:
After selecting your worlds, locate the Delete button (highlighted with a pink box) and click it.

![](./image-1754208382976.png)

:::warning
# CAUTION
We recommend backing up your old world before resetting, so you can restore it later if needed. But if you’re sure you don’t need it, you can skip the backup.
:::

# Optional Step:
You can archive your world by clicking the archive button (highlighted with pink box) to the bottom right side on the panel.

![](./image-1754208620310.png)

> [!IMPORTANT]
> Once you've completed these steps, you can now start your server again with a fresh new world!

If you wish to have multiple worlds on your server at once, add a prefix to the end of each world (such as `_old`), OR use a plugin such as [Multiverse](https://dev.bukkit.org/projects/multiverse-core).

We recommend you take a backup before deleting any worlds in your server. Follow this [guide](/using_the_panel/backups/guide.md) to learn how to make and schedule backups.
:::

You now have to locate your world files, on *most* Minecraft servers these folders will be `world`, `world_nether`, and `world_the_end` - if not, check your `level-name` in `server.properties`.

Select the world(s) you want to delete with the checkboxes on the side, then drop down the "Mass Actions" menu and select "Delete Files" - then confirm the deletion. Deleting these files should only take a few seconds at most.

Then, go ahead and start back up your server. This will take longer than usual as it generates the spawn area.
