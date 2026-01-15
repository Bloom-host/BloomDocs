---
id: performance
title: Performance optimizations
hide_table_of_contents: true
sidebar_label: Performance
description: This guide will help fix some general issues with hytale performance
keywords:
  - hytale lag
  - hytale performance
  - hytale optimizations
---

## Overview

Hytale servers can experience performance issues for a variety of reasons, including world size, player activity, and server configuration. This guide outlines several common optimization methods that can help reduce lag and improve overall server stability.

These optimizations are general recommendations and results may vary depending on your server setup.

For reading into where lag is coming from, [spark has ported their mod to hytale](https://www.curseforge.com/hytale/mods/spark)!

## Lowering Render Distance

Render distance has a direct impact on server performance. Higher render distances require the server to process and send more world data to players, which can increase CPU and memory usage.

Lowering the render distance is recommended if your server has frequent lag spikes or you are hosting a large number of players.

To lower the render distance, navigate to your server’s [File Manager](/file-manager-controls), open config.json, and locate the default render distance value on line 7, the specific value name is "MaxViewRadius". Change this value from 32 to a number below 16, then save the file and restart your server.

## Installing Performance mods

At the moment, there are limited performance-focused plugins available for Hytale, as the game was recently released. However, some plugins can still help improve stability and support larger player counts.

One example plugin you can try is the [Hytale-Plugin-Performance-Saver](https://github.com/nitrado/hytale-plugin-performance-saver/releases)

## Pregenerating the World

When players explore new areas, the server must generate new chunks. This can cause noticeable lag, especially when the render distance is left at the default value (32). One of the most effective ways to reduce this type of lag is to pregenerate the world.

Thankfully, Hytale includes built-in world pregeneration tools, making this process straightforward.

We recommend taking a [Backup](https://docs.bloom.host/backups#manual-backup-creation) before starting pregeneration, pregenerating new chunks can cause World corruption in rare cases due to server instability.

To pregen the server simply use this command ``world settings pregenerate <x1,y1> <x2,y2> <Optional --world <name>>``

Example; ``world settings pregenerate 1200 1200 -1200 -1200``

Then restart your hytale server so pregen can begin. 

You can cancel the pregen anytime via the command: ```world settings pregenerate cancel```

## Checking Performance Improvements

After applying optimizations, it’s important to monitor your server to ensure performance has improved.

You can do this by:

>Observing in-game lag and TPS.
>
>Using Spark profilers to identify TPS drops and performance bottlenecks.
>
>Running commands such as server stats cpu, server stats memory, and Garbage Collection Stats.

If you need more assistance, you can create a ticket with us in [discord](https://discord.gg/bloom) or [billing](https://billing.bloom.host/submitticket.php?step=2&deptid=3)
