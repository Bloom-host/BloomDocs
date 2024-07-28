---
id: advancedanticheat
title: AAC (Advanced AntiCheat)
slug: /plugins/aac
hide_table_of_contents: true
sidebar_label: AAC (Advanced AntiCheat)
description: One of the most well known and efficient anticheats out there, blocking numerous movement, combat, and other hacks
keywords:
  - AAC
  - Advanced Anticheat
  - Anticheat
  - Spigot
  - Bloom.host
  - Minecraft
---

:::warning
Advanced Anti Cheat (AAC) has become inactive on spigotmc.org and is no longer available to purchase. It is not recommended to use AAC in your servers and it has not been updated for the latest versions of Minecraft (last update was for 1.17.1). 

![AAC inactive resource](/plugins_and_modifications/plugins/advancedanticheat/inactiveResource.png)

It is recomended to use an alternative solution such as [Vulcan](vulcan.md).

The following information is for archival purposes only.
:::

<details>
<summary>
VIEW LEGACY DOCUMENTATION
</summary>

## What does the plugin do?

AAC protects your server from gamebreaking hacks and unfair advantages such as:
- Aimbot/aura (attacks players/entities for you, huge combat advantage)
- Reach (increases reach of hacker beyond fair vanilla reach of 3 blocks)
- Fly (allows players to fly in survival, potentially at speed that will crash your server)
- Other unfair advantages that harm your legitamate playerbase

:::caution
Advanced Anti-Cheat is very user configurable, and as a result of this, is highly sensitive. Using the default configuration may result in false positives
:::

## Installation:

Install AAC by dragging it into your plugin folder, and restart your server.

## Configuration:

Edit the config YAML to configure your commands to execute at a specific violation level.

:::important
It's best practice to have a test server (even a local one if getting a hosted one isn't an option) to test your anti-cheat configuration before deploying 
:::
Here is an example snippet of AAC's config:
```
  move:
    enabled: true

    # move.vl represents an estimate of the total extra distance a player has travelled by cheating
    vl:
      mitigate: true
      threshold: 1.0
      max: 1.0
      decay: 0.01
```

## So what do all the numbers mean?
A "check" in an anticheat is a part of the plugin that analyzes if the player is cheating or not. In AAC, each seperate check category in the config.yml can be individually configured, the above "move" subcategory being an example.

- `enabled:` determines whether or not the check will be enabled or not
- `mitigate:` determines whether or not AAC will "setback" or cancel illegal actions, such as flying at high speeds
- `threshold:` is a coefficient that will determine how strong AAC will attempt to cancel/mitigate illegal actions
- `max:` also affects the mitigation threshold
- `decay:` determines how fast violations for a player will decay

The thresholds section is pretty simple, it just determines what commands should be run when a player/potential-hacker reaches a certain violation level (VL)
- See [Conditional Commands](/plugins/cc) for info on reducing lag related kicks/bans

## There's a false positive, what do I do?
### AAC's configurability means that false positives are easily fixed. There are two types of false positives:
 - Plugin related false positives: report to [AAC Github Issue Tracker](https://github.com/konsolas/AAC-Issues/issues) so the developer can fix it
 - Configuration related false positives: false positives that you can fix
 
### Fixing config related false positives:
 - First, collect some information on the false positive, like what might cause it and some verbose data
   - To collect verbose data, `do /aac debug <player>` and reproduce the false positive, or look in your console and copy the output into a paste service like pastebin
 - The data will show what part of the check is causing the false positive, you can specifically focus on that part in AAC's config.yml, go to the config
 - Check your config values, perhaps add more leniency? Perhaps increase the violation level decay? Perhaps use conditional commands? 
 - If the above three don't work, there are always people in Bloom.host's discord willing to help you out!

[Bloom.host Discord](https://discord.gg/bloom)

## Optimized Configurations
Configuring Advanced Anti-Cheat will be time consuming, there are premade configurations available:
- [Chibo's Configuration](https://www.mc-market.org/resources/18783/)
- [Celebrimbor's Configuration](https://www.spigotmc.org/threads/%E2%9A%94-optimized-aac-setups-%E2%9A%94-500-customer-promo-%E2%9A%94.126333/)

## Info
:::warning

Advanced Anti-Cheat is very user configurable, and as a result of this, is highly sensitive. Using the default configuration may result in false positives and is not recommended to be deployed in a production environment! Read the Spigot page overview for AAC before purchasing.

:::

[Spigot Page](https://www.spigotmc.org/resources/aac-advanced-anti-cheat-hack-kill-aura-blocker.6442/)  

</details>
