---
id: server-optimization
title: Paper Server Optimization
hide_title: true
hide_table_of_contents: true
sidebar_label: Server Optimization
description: How to optimize your paper minecraft server.
keywords:
  - Template
  - paper
  - Lag
  - Server
  - Server Optimization
  - Bloom.host
  - Pterodactyl Panel
  - Minecraft
  - Bloom.host
image: https://bloom.host/assets/images/logo.png
---
# Server Optimization Guide
#### `By Sancires`

Updated for version 1.16.4! 

Since 1.13, Minecraft servers have gotten progressively harder to run. Paper, a fork of Spigot, offers many settings that greatly improve performance. For this guide, we will be dealing with four main files.  
(If you use fabric make sure to also check out [Fabric Performance Mods](fabric_mods/performance-mods.md))

Download Paper: [papermc.io](https://papermc.io/)


Keep in mind, this guide merely provides suggestions, and should not be taken exactly, as every server is different.

#### ~ While Paper is reccomended, many optimizations here can be done without the need for it.

---

## server.properties
#### ~ Applies to Vanilla, Bukkit, Spigot and Paper.
### `allow-flight`
- Default: false
- Recommended: true
- Importance: Very Low
- Explanation: Stops players from getting kicked for flying, hack clients will normally bypass this anyway.

### `spawn-protection`
- Default: 16
- Recommended: 0
- Importance: Medium
- Explanation: Vanilla spawn protection will protect a certain amount of chunks surrounding your world spawn. The vanilla implementation is buggy, and something such as WorldGuard or GriefPrevention should be used instead.

### `view-distance`
- Default: 10
- Recommended: 4-7
- Importance: Very High
- Explanation: This is a big performance setting as it sets how many chunks around the player should be “active” at any given moment. This is not how far the player can see. (See paper.yml’s “no-tick-view-distance”.

---

## bukkit.yml
#### ~ Only applies to Bukkit, Spigot and Paper.
### `spawn-limits`
- Default: monsters:70, animals:10, water-animals:15, water-ambient: 2, ambient:15
- Recommended: monsters:15, animals:6, water-animals:2, water-ambient: 2, ambient:0
- Importance: High
- Explanation: Entities are a large cause of lag in newer versions. Simply put, lower values mean less mobs spawning. Do not set these limits too low or players will notice a shortage of mobs. You can experiment with this setting and go higher/lower if you feel like your server needs it. Ambient mobs are set to 0 as the only ambient mobs are bats, which can cause quite a bit of lag and are useless.  

### `chunk-gc.period-in-ticks`
- Default: 600
- Recommended: 400
- Importance: Medium
- Explanation: This option will unload empty chunks faster, which will lead to less TPS consumption by the server.  

### `ticks-per.monster-spawns`
- Default: 1
- Recommended: 4
- Importance: Medium
- Explanation: This option will increase how often (in ticks) the server tries to spawn a hostile mob. Slightly increasing the time in between monster spawns will not impact spawn rates, and if you are noticing substantial TPS loss due to mobs, you can try raising this option even more.

---

## spigot.yml
#### ~ Only applies to Spigot and Paper.
### `save-user-cache-on-stop-only`
- Default: true
- Recommended: False
- Importance: Medium
- Explanation: Toggles whether to constantly save new user cache data to disk or only to do so when the server stops.

### `moved-wrongly-threshold`
- Default: 0.0625
- Recommended : 1.0
- Importance: Very Low
- Explanation: Decreases the amount of players from getting rubber banded, you should use an anti-cheat instead to prevent movement hacks.   

### `moved-too-quickly-multiplier`
- Default: 10
- Recommended: 200
- Importance: Low
- Explanation:  Decreases the amount of players from getting rubber banded, you should use an anti-cheat instead to prevent movement hacks.   

### `mob-spawn-range`
- Default: 8
- Recommended: 3-6
- Importance: Medium
- Explanation: This option sets how far from the player mobs will attempt to spawn. If you are using a view-distance lower than 6, this option is best set at 1 lower than your view distance. This value should never be higher than your view-distance, or you will experience inconsistent mob behavior.

### `entity-activation-range`
- Default: animals: 32, monsters: 32, raiders: 48, misc: 16, water: 16
- Recommended: animals: 16, monsters: 24, raiders: 16, misc: 8, water: 8
- Importance: High
- Explanation: Entities outside of the defined range will be ticked less often, which has a large impact on server performance. Avoid setting this option too low or you could break some mob behaviors, such as raids and mob aggression.

### `tick-inactive-villagers`
- Default: true
- Recommended: false
- Importance: Medium
- Explanation: This option sets whether or not villagers outside of the standard mob activation range should be ticked. Villagers can be very performance heavy, however, this setting can affect villager breeders.

### `ticks-per.hopper-transfer`
- Default: 8
- Recommended: 32
- Importance: Low
- Explanation: This option will slow down hoppers to transferring items only once per second. This option is not essential, but can reduce hopper inflicted lag,

### `hopper-amount`
- Default: 1
- Recommended: 4
- Importance: Low
- Explanation: This option is very “per-server” and reduces the amount of times that a hopper needs to move an item. This setting will negatively impact item sorters. If you are playing on a very technical server and looking to keep vanilla mechanics, do not change this setting.

### `merge-radius`
- Default: item:2.5, exp:3.0
- Recommended: item:5.0, exp:6.0
- Importance: Medium
- Explanation: Large amounts of dropped items and experience can cause a significant performance hit. This option will allow more items to appear in “piles”, reducing lag.

### `enable-zombie-pigmen-portal-spawns`
- Default: true
- Recommended: false
- Importance: Medium
- Explanation: This is another, “per-server” option. If you are attempting to stay close to vanilla behaviors, you will want to keep this option as true. Setting this option to false will prevent players from making large overworld Zombie Pigmen farms, which can cause a large amount of entity lag.

### `max-entity-collisions`
- Default: 8
- Recommended: 0-4
- Importance: Medium
- Explanation: Having many entities in one area can cause extreme lag on a server through entity collisions. If you plan on disabling it completely, this means that players won't be able to push mobs, so you'll need to find some other way for them to push mobs (like being able to lead villagers).

---

## paper.yml
#### ~ Only applies to Paper.
### `max-auto-save-chunks-per-tick`
- Default:  24
- Recommended:  6-8
- Importance: Very High
- Explanation: Chunk saving is incredibly inefficient in modern versions of Minecraft. This option will slow incremental chunk saving. Setting this too low can result in unsaved chunks; If you have a larger player base that is very spread out throughout the map, you should keep this around 8 to be safe.

### `optimize-explosions`
- Default:  false
- Recommended:  true
- Importance: Medium
- Explanation: Paper will very efficiently optimize and clean up explosions. This will have no impact on game play, so there is no reason to keep this disabled.  

### `mob-spawner-tick-rate`
- Default:  1
- Recommended:  2-6
- Importance: Medium
- Explanation: This option defines the delay before an active spawner attempts to spawn a mob. Spawners can have a significant impact on server resources; Most servers should be fine with this option on 2 or 3, however, servers with a heavy spawner focus should keep this around 5 or 6 for the best performance.

### `container-update-tick-rate`
- Default:  1
- Recommended: 2-3
- Importance: Low
- Explanation: This option defines how often inventories are refreshed. Do not set this above 3, or else you will experience visual glitches.

### `armor-stands-do-collision-entity-lookups`
- Default: true
- Recommended: false
- Importance: Low
- Explanation: Stops armor stands from checking for collisions, they normally won't be colliding so this option can normally be safely disabled. (May break vehicles / other plugins & datapacks that rely on it).

### `armor-stands-tick`
- Default: true
- Recommended: false
- Importance: Low
- Explanation: Stops armor stands from being ticked, (May break vehicles / other plugins & datapacks that rely on it).

### `disable-chest-cat-detection`
- Default:  false
- Recommended: true
- Importance: Low
- Explanation: This option sets whether or not chests will test if a cat is sitting on top of it. This mechanic is useless and causes lag, so it is best to enable this option.

### `max-entity-collisions`
- Default: 8
- Recommended: 4-6
- Importance: High
- Explanation: Having many entities in one area can cause extreme lag on a server.  This option can give players some difficulty in pushing around mobs, so do not lower it too much unless you are having severe mob related lag.

### `grass-spread-tick-rate`
- Default: 1
- Recommended: 4-6
- Importance: Medium
- Explanation: This option sets the amount of time before grass will attempt to spread to a dirt block. This option will have almost no impact on gameplay, however, Skyblock servers may wish to keep this at default.

### `despawn-ranges`
- Default: soft: 32, hard: 128
- Recommended: soft: 28, hard: 96
- Importance: High
- Explanation: This option will clear mobs and allow more to be spawned near players. You should experiment with this option and see what works best with your respective view-distance.

### `non-player-arrow-despawn-rate`
- Default: -1
- Recommended: 1
- Importance: Low
- Explanation: You cannot pick these items up, so there is no reason to have them stay in the world.

### `creative-arrow-despawn-rate`
- Default: -1
- Recommended: 1
- Importance: Low
- Explanation: You cannot pick these items up, so there is no reason to have them stay in the world.

### `prevent-moving-into-unloaded-chunks`
- Default: false
- Recommended: true
- Importance: Very High
- Explanation: This setting is critical, if a player attempts to enter an unloaded chunk, the server can experience high amounts of lag, so this option will teleport them out.

### `use-faster-eigencraft-redstone`
- Default: false
- Recommended: true
- Importance: Very High
- Explanation: This setting will optimize redstone without breaking vanilla contraptions. It significantly reduces lag, and there is no reason to not have this enabled.

### `per-player-mob-spawns`
- Default: false
- Recommended: true
- Importance: Very High
- Explanation: This option is critical to servers and better represent single-player behavior. Additionally, this option will evenly distribute mob spawns so that one player does not receive all spawns.

### `no-tick-view-distance`
- Default:
- Recommended: 6-12
- Importance: Very High
- Explanation: This option is critical, it will allow players to see farther than the defined view-distance in server.properties. Things such as entities won’t be ticking in the no-tick-view-distance, and will give the illusion of a higher view-distance.

### `anti-xray-enabled`
- Default: false
- Recommended: true
- Importance: Low
- Explanation: This option will effectively stop X-raying on your server, with a slight performance cost. Engine 1 is less heavy, but can be bypassed, so Engine 2 is recommended for survival servers. For more information regarding Xray settings, see [here](https://gist.github.com/stonar96/ba18568bd91e5afd590e8038d14e245e).

---

## Recommended Plugins for Performance:

[Farm Limiter(Paid)](https://www.spigotmc.org/resources/farm-limiter.1419/) - Farm Limiter prevents players from making abnormal mob farms, limiting groups of near entities of the same type.


[Spark](https://www.spigotmc.org/resources/spark.57242/) - Diagnoses performance of your server, and provides server health reports.

## What to avoid:

[ClearLagg & other entity clear plugins](https://dev.bukkit.org/projects/clearlagg) - Plugins like these will kill & remove all entities, which will temporarily help with lag, but mobs will spawn back very quickly, and this will also causes additional lag, while the amount of entities will go back up to what it was before.

---
