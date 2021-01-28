---
id: advancedanticheat
title: AAC (Advanced AntiCheat)
hide_title: true
hide_table_of_contents: false
sidebar_label: AAC (Advanced AntiCheat)
description: One of the most well known and efficient anticheats out there, blocking numerous gamebreaking exploits and unfair advantages
keywords:
  - AAC
  - Advanced Anticheat
  - Anticheat
  - Spigot
  - Bloom.host
  - Pterodactyl Panel
  - Minecraft
image: https://bloom.host/assets/images/logo.png
---
# Advanced Anti-Cheat

## What does the plugin do?

AAC protects your server from gamebreaking hacks and unfair advantages such as:
- Kill-aura (attacks players/entities for you, huge combat advantage)
- Reach (increases reach of hacker beyond fair vanilla reach of 3 blocks)
- Fly (allows players to fly in survival, potentially at speed that will crash your server)
- Other unfair advantages that harm your legitamate playerbase

:::caution
Advanced Anti-Cheat is very user configurable, and as a result of this, is highly sensitive. Using the default configuration will result in false positives and is not recommended to be deployed in a production environment!
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
fastbow:
  # Enable check? || true/false
  enabled: true
 
  lenience: 200
 
  decay:

    interval: 100
    delay: 100
    amount: 1
 
  mitigation:
    enabled: true
    min_vl: 8
 
  thresholds:
    9: aacnotify %aac_player% is hacking!
    13: aackick %aac_player%
```

## So what do all the numbers mean?
A "check" in an anticheat is a part of the plugin that analyzes if the player is cheating or not, or if they are displaying suspiscious interactions/behavior. In AAC, each seperate check in the config.yml can be individually configured, the above "fastbow" check being an example.

- `lenience: 200` is one of the "check-specific" configuration options, every check may have a different value that you can modify which specifically pertains to that check

The decay section of every check determines how much "VLs" or violation levels will go down (ms)
- `interval: 100` means every 100 ms, the violation level of a player will go down by the amount
- `delay: 100` how long to delay the decay of the violation level
- `amount: 1` how much the violation level decays

The thresholds section is pretty simple, it just determines what commands should be run when a player/potential-hacker reaches a certain violation level (VL)
- See [Conditional Commands](https://docs.bloom.host/plugins/conditionalcommands) for info on reducing lag related kicks/bans
- See [AAC Optimization Guide](https://www.spigotmc.org/threads/%E2%9A%A1-aac-o%E1%B4%98%E1%B4%9B%C9%AA%E1%B4%8D%C9%AA%E1%B4%A2%E1%B4%80%E1%B4%9B%C9%AA%E1%B4%8F%C9%B4-g%E1%B4%9C%C9%AA%E1%B4%85%E1%B4%87-anticheat-%E2%9A%A1.109418/) for a detailed and advanced explaination of what conditional commands are

:::tip
Many server owners use Celebrimbor's optimized config, which costs an additional $14. This configuration consists of numerous optimized changes that Celebrimbor has made over the years, and it is highly recommended to get it as a base for you to use with AAC on your server. 
:::

## There's a false positive, what do I do?
No worries, AAC's configurability means that false positives are easily fixed. There are two types of false positives:
 - Plugin related false positives: report to [AAC Github Issue Tracker](https://github.com/konsolas/AAC-Issues/issues) so the developer can fix it
 - Configuration related false positives: false positives that you can fix
 
Fixing config related false positives:
 - First, collect some information on the false positive, like what might cause it and some verbose data
   - To collect verbose data, do /aac verbose and reproduce the false positive, or look in your AAC's plugin log folder
 - The verbose data will show what part of the check is causing the false positive, you can specifically focus on that part in AAC's config.yml, go to the config
 - Check your config values, perhaps add more leniency? Perhaps increase the violation level decay? Perhaps use conditional commands? 
 - If the above three don't work, there are always people in Bloom.host's discord willing to help you out!

[Bloom.host Discord](https://discord.gg/bloom)
## Info
:::warning

Advanced Anti-Cheat is very user configurable, and as a result of this, is highly sensitive. Using the default configuration will result in false positives and is not recommended to be deployed in a production environment! READ THE SPIGOT PAGE BEFORE PURCHASING!

:::

[Spigot Page](https://www.spigotmc.org/resources/aac-advanced-anti-cheat-hack-kill-aura-blocker.6442/)  

[Optimized Config](https://www.spigotmc.org/threads/%E2%9A%94-optimized-aac-setups-%E2%9A%94-500-customer-promo-%E2%9A%94.126333/)
