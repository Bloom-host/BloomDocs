---
id: mcaselector
title: MCASelector CLI
slug: /mcaselector
hide_table_of_contents: true
sidebar_label: MCASelector CLI
description: Using MCASelector on your server
keywords:
  - MCASelector
  - Chunks
  - Prune chunks
  - World editing
  - Disk usage
  - CLI
---

## Overview

[MCASelector](https://github.com/Querz/mcaselector) lets you edit your Minecraft world, including removing chunks to free up disk space. Bloom’s MCASelector server type lets you run it directly through DuckPanel without downloading and re-uploading your world.

In this guide, we’ll back up your server, choose the correct world folder, configure the chunk filter, and run MCASelector.

---

## Preparation

### Backup

:::danger Back up your server
MCASelector can permanently delete chunks, including any builds inside them. Create a full backup before making changes so you can restore your world if needed.
:::

1. Open your server in DuckPanel, go to **Console**, and click **Stop**. Wait for the server to shut down.
2. Open **Backups** and click **Create Backup**.
3. Give the backup a name, such as `Before MCASelector`, then click **Start Backup**.
4. Wait until the backup’s **Archiving** phase has finished before continuing. Keep your server stopped, and don’t change its server type or run MCASelector while it’s still archiving.

Archiving can take some time, especially on larger servers. For more information about creating and managing backups, see our [backups guide](/backups#manual-backup-creation).

### Set up MCASelector

With your server still stopped, follow these steps to install MCASelector:

1. Open **Settings** in DuckPanel.
2. Find **Change Server Type** and select the **No Support Servers** category.
3. Select **MCASelector**, then click **Change Server Type**.
4. Wait for the installation to finish before continuing.

![MCASelector installation completed in DuckPanel](/running_a_server/mcaselector/1.png)

---

## Usage

### Choose your world folder

First, open **File Manager** and find the dimension you want to edit. MCASelector’s `--world` option needs the path to the folder containing `region`. The examples below assume your main world folder is named `world`. If yours has a different name, replace `world` with that folder’s name. All paths start from your server’s main directory. For example, if your main world folder is named `survival`, the Nether path would be `survival/dimensions/minecraft/the_nether`.

### Current folder structure — Minecraft 26.1 and newer

Minecraft 26.1 moved the Overworld, Nether, and End data into the `dimensions/minecraft` folder. Now both Vanilla/Modded and Paper servers share the same folder structure: 

| Dimension | Path to use with `--world` |
| --- | --- |
| Overworld | `world/dimensions/minecraft/overworld` |
| Nether | `world/dimensions/minecraft/the_nether` |
| End | `world/dimensions/minecraft/the_end` |

Keep in mind that other server software, mods, or world-management plugins may store dimensions differently. Check your actual folders in **File Manager** before choosing a path. You can find more information in the [Minecraft Wiki’s world folder reference](https://minecraft.wiki/w/Java_Edition_level_format#Current).

MCASelector added support for this structure in [version 2.7](https://github.com/Querz/mcaselector/releases/tag/2.7). Make sure you’re using a release that supports your server’s Minecraft version.

<details>
<summary>Older folder structure (before Minecraft 26.1)</summary>

On older versions, the Overworld’s `region` folder sits directly inside your main world folder. The Nether uses `DIM-1`, and the End uses `DIM1`.

The paths differ depending on your server software:

| Dimension | Vanilla | Paper |
| --- | --- | --- |
| Overworld | `world` | `world` |
| Nether | `world/DIM-1` | `world_nether/DIM-1` |
| End | `world/DIM1` | `world_the_end/DIM1` |

For example, to edit the Nether on an older Paper server, use `--world "world_nether/DIM-1"`.

</details>

### Set your MCASelector flags

Once you’ve found the correct folder, open **Startup** and find **MCA FLAGS** under **Variables**. This field controls which dimension MCASelector edits and which chunks it selects.

![DuckPanel Startup tab showing MCASelector flags for the current Overworld folder](/running_a_server/mcaselector/2.png)

For the Overworld using the current structure, enter the following flags as shown above:

```text
--mode delete --world "world/dimensions/minecraft/overworld" --query "InhabitedTime <= 20" --process-threads 2
```

This example deletes chunks in the selected dimension whose `InhabitedTime` is 20 ticks or less. That’s about one second of accumulated inhabited time, which tracks how long players have been nearby.

You can increase `20` to select chunks with more inhabited time, but a higher value can delete more of your world. A low value also doesn’t guarantee that a chunk contains no builds, so keep your backup available.

To edit the Nether or End, replace the value after `--world` with the appropriate path from the table. Run MCASelector separately for each dimension you want to edit.

For more filters and advanced options, see the [MCASelector CLI documentation](https://github.com/Querz/mcaselector/wiki/CLI-Mode).

### Run MCASelector

Once you’re happy with the path and filter, return to **Console** and click **Start**. MCASelector will process the selected dimension and delete chunks matching your filter.

![MCASelector running in the server console](/running_a_server/mcaselector/3.png)

Small worlds may finish quickly, while larger worlds can take much longer. Wait for the process to finish, then review the console output for errors before clicking **Stop**.

If MCASelector reports that it can’t find the world or region folder, return to **File Manager** and check that your `--world` path points to the folder directly containing `region`.

Once you’ve finished editing your worlds, return to **Settings → Change Server Type** and select your original server type. Start your Minecraft server again and check the world. Deleted chunks will generate again when Minecraft loads those areas.

