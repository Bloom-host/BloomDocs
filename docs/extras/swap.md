---
id: swap
title: Swap
hide_table_of_contents: true
sidebar_label: Swap
description: Information about swap, and what to do if you want to disable it
keywords:
  - swap
  - no swap
  - swapping
  - ram
  - Bloom.host
  - Pterodactyl Panel
  - Minecraft
---

## SWAP

Hello! This guide will walk you through disabling swap, and issues that may arise with doing so.

:::note
First off, 99% of customers DO NOT NEED to touch this. If you'd like to play around with it, please read this documentation fully.
:::

**I want to make this especially clear. There may be a slight benefit in some scenarios, but if you're happy with your performance as it is there is NO NEED to disable swap. You're just making more work for yourself.**

___

### Okay let's start off with, what is swap?

Swap is virtual memory stored on a disk, rather than physical memory. So it acts as memory but is not as fast as physical memory (RAM).

### How does Bloom use swap?

By default, all servers are allowed to use swap. We cover Aikar's overhead with swap, and this leads to almost no performance degradation itself, however there's specific scenarios where you may not want to use swap which is why we're allowing you the option.

### Why are you giving the customer the option?

The main reason is modpacks running forge. Modpacks are extremely memory intensive during startup, so with Aikar's Flags customers experienced bad performance due to Aikar's causing the server to swap (not Aikar's themselves). But we are also giving customers the option if they want to get a tiny boost out of it, say maybe being able to hold a few more players, or better MSPT.

By default we deploy Forge with no aikar's and just plain vanilla flags, this is great and leads to no swapping and performance degredation because of it, however GC (Garbage Collection) is worse and because of that RAM is eventually filled up faster with garbage and may need restarts more often.

So in typical scenarios, the ideal conditions for Forge (unless modpack developer says otherwise), are Aikar's Flags with swap disabled.

___

Now, before you start disabling swap, you first have to understand that your server needs some overhead for the JVM process itself. So if you disable swap by default and your server is using Aikar's Flags (which it does if you're using the Paper egg), your server will be unable to boot since there is no overhead for the JVM process. So you must change your startup ram % (under the Startup tab) so there's overhead.

For most situations the typical % recommended is 70%. However it is something that you may have to change as every server is different, Aikar himself doesn't know why there is so much variation.

If your server freezes, it's typically the overhead not having enough ram. If your server states "out of memory" in logs and such, then the JVM itself is out of memory (so either increase JVM by purchasing more ram, or figure out if you have a memory leak by Paper/Spark Heapdump and inspecting via Eclipse MAT) or simply just enable swap, however there will be a performance impact due to the hard swapping of the memory leak.

And that's basically it, at Bloom we try to give as much administrative power to our customer of their server and this is just another feature we'd like to give to our customers :)
