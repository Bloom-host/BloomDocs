---
id: citizens2
title: Citizens 2
hide_title: true
hide_table_of_contents: false
sidebar_label: Citizens 2
description: How do I find you when I cannot solve this problem
keywords:
  - Citizens
  - Minecraft
  - Bloom.host
image: https://bloom.host/assets/images/logo.png
---
# Citizens 2

## What does the plugin do?

Citizens2 is an advanced NPC plugin for Spigot that allows developers to extend basic NPCs to provide varied gameplay and functionality.


## Installation

1. Download the plugin [directly from the developer](https://wiki.citizensnpcs.co/Versions) or [from the Premium spigot page](https://www.spigotmc.org/resources/citizens.13811/) (The premium version posted as a premium resource to motivate the continued development.  Citizens can be used for free though.).  
1. Upload the jar(s) to your `/plugins` folder.
1. Restart the server. 

If you need help installing plugins, check [How to install plugins](https://docs.bloom.host/bukkit-plugins).

:::note
You may also want to look at installing the Denzien, Sentinel, and dtlTraders plugins for Citizens.
- Denizen is an extension for Citizens that allows scripting of NPCs to handle tasks, quests, player interaction and more!
- Sentinel is an extension for Citizens that allows Combat NPCs who can protect players, towns, etc.
- dtlTraders is an extension for Citizens that allows NPCs as merchants who can buy, sell, and/or trade with players.
::: 

## Configuration

Citizens (and the related plugins) can be tweaked via the config settings.  

:::note
Generally, you can probably get started using Citizens (and the related plugins) without having to go a lot of configuration.
:::

The config files are:
- Citizens - `/plugins/Citizens/config.yml` - [Docs](https://wiki.citizensnpcs.co/Configuration)
- Sentinel - `/plugins/Denizen/config.yml` - [Docs](https://github.com/mcmonkeyprojects/Sentinel/blob/master/README.md)
- dtlTraders - `/plugins/dtlTraders/config.yml` - [Docs](https://www.spigotmc.org/resources/dtltraders.35890/)
- dtlTradersPlus (Premium Version) - `/plugins/dtlTradersPlus/config.yml` - [Docs](https://www.spigotmc.org/resources/dtltradersplus.63690/)

## Commands

Rather than go over basic commands, listed below are several examples on how to use Citizens.  For details on the commands, see the documentation.

### Creating an NPC

:::note
These examples are assuming you have instaled Citizens as well as Denzien, Sentinel, and dtlTraders plugins.
:::

#### Basic Human NPC

In this example, we will create a basic human NPC who says "Hello!":

1. Create the NPC: `/npc2 create Bob` (Note... the NPC skin will be set based on the name.  You can change this later. )
1. Make the NPC look at you: `/npc2 look`
1. Change the skin `/npc2 skin --url https://www.minecraftskins.com/uploads/skins/2020/12/06/farmer-alex-15963302.png?v292`
1. Open the Text editor: `/npc2 text`
1. Type `add` to add text.
1. Type `Hello!` to make the NPC say "Hello".
1. Type `close` to make the NPC only talk when you are close to them.
1. Type `delay 10` to make the NPC wait 10 seconds between each text.
1. Type `/npc2 text` to exit the text editor.

:::note
For NPC skins, you can go to [Minecraft Skins](https://www.minecraftskins.com/) or a similar website.  You will need a direct link to the NPC skin to apply it.  For Minecraft Skins, you can click on the "Image Link"

![minecraft skins image link](../../static/img/citizens/citizens-image-link.png)
:::

:::note
You can add multiple lines by repeating the `add` command while in the text editor.  You can also use placeholders if you have the plugin installed and enabled.  For example `Hello %player_name%!`  YMMV...
:::

#### Wolf NPC

In this example, we will create a wolf NPC:
1. Create the NPC: `/npc2 create Rover --type wolf` (Note... the NPC skin will be set based on the name.  You can change this later. )
1. Make the NPC look at you: `/npc2 look`

### Selecting an NPC

To switch to a different NPC, do the following:
1. Make sure your cross-hairs are pointed to the NPC you want.
1. Type `/npc2 select` to choose that NPC.

### Renaming an NPC

To rename an NPC, do the following:
1. Make sure you have the NPC selected (see above)
1. Type `/npc2 rename [name]` (For example, to rename Bob above to Jill, type `/npc2 rename Jill`).

### Deleting or despawing

- To delete an NPC, make sure you have the NPC selected and then type `/npc2 remove`.  Note that there is no undo!
- To despawn an NPC without deleting them, make sure you have the NPC selected and then type `/npc2 despawn`.  To repawn them, type `/npc2 spawn [name]` (e.g. `/npc2 spawn Jill`)

### Creating a Shop NPC

In this example, we will create a basic shop

1. Put the item or items you want to sell in your inventory.  For this example, put a single stone block.
1. Type `/dtltraders trait`.  This will open up a creation GUI
1. Select `Create trader NPC`
1. Choose the `Yes` block
1. Name the NPC
1. Select `Create Shop`
1. Name the Shop
1. Select `Edit Shop Pages`
1. Select the default page (usually something like `Page 71122`).  You can in the next screen by choosing `Change title`.
1. Select `Change Contents`
1. In the bottom right corner there is a stone block.  This block lets you toggle between the Buy, Sell, and Trade functions.  We will be using `Buy` to allow players to buy items (so don't change it).  You can create shops for players to sell items to the trader or trade `X item` for `Y item` (for example in Skyblock, trade 10xRedstone for 1 dirt).
1. Drag the stone block into the box above, then click `Exit`.
1. Click on `Change content functions`
1. Click on the stone block
1. Click on `Change trade price` and type in a price (e.g. 50).
1. Click `Save and go back`
1. Click on `Exit`
1. Click `Save and go back` until you are completely out of the GUI.
1. Click on your new NPC and you should be able to buy stone blocks for 50 gold.

### Managing shops

- To edit existing shops, type `/dtltraders edit` and select the shop you want to edit.
- To delete a shop, type `/dtltraders delete [shopname]`

:::note
Notes:
- Sometimes it is easier to delete an item or shop and start over if things are behaving oddly.
- You can use the NPC commands above on shop NPCs (e.g. `/npc2 look`, `/npc2 skin`, etc.).  You can also make non-human NPC shops (like a wolf that buys bones!)
- You may want to set a shop's permission to something players don't have while you are creating the shop (e.g. youdonhaveaccess.shop).  The permission can be anything you want.
- You can set up shops to sell commands (e.g. an NPC that sells flight time!)
- You can enable or disable the buy, sell, and/or trade functions in the shop independently.
- You can set permissions on individual shop items
- You can limit the number of items a player can buy, sell, or trade to a shop.
:::

## Additional Information

### Downloads
- [Spigot Page](https://www.spigotmc.org/resources/citizens.13811/)
- [Downloads](https://wiki.citizensnpcs.co/Versions)

### Documentation
- [Citizens Docs](https://wiki.citizensnpcs.co/Configuration)
- [Sentinel Docs](https://github.com/mcmonkeyprojects/Sentinel/blob/master/README.md)
- [dtlTraders Docs](https://www.spigotmc.org/resources/dtltraders.35890/)
- [dtlTradersPlus (Premium Version) Docs](https://www.spigotmc.org/resources/dtltradersplus.63690/)

### Need Help

Check the docs for details.  Asking nicely on Bloom's discord and/or other Minecraft related discord servers may also work.