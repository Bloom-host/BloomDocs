---
id: timings
slug: /timings
title: timings
hide_table_of_contents: true
sidebar_label: Taking a Timings Report
description: How to run a timings report, which is useful for identifying causes of lag on your server.
keywords:
  - Overview
  - PaperMC
  - Lag
  - Timings Report
  - Timings
  - Spigot
  - 1.16
  - 1.17
  - Minecraft
  - Bloom.host
---

# **How to take a Timings Report**

:::important
The PaperMC team has decided to remove the Timings system and replace it with [Spark](/spark) in a future version. 
Timings should be considered depricated and no longer be used.

Paper 1.21 builds will have the timings system disabled by default.

Paper 1.21.3 and newer have timings permanently disabled and timings can no longer be used.

Purpur 1.19 and newer do not support timings.

More information can be found [here](https://github.com/PaperMC/Paper/issues/8948)
:::

:::note
As time has gone on, Timings has become a bit outdated, from the Bloom team we usually recommend using [Spark](/spark) instead.
:::

## What is a Timings Report
A timings report is a way of detecting what is causing lag on your server, if you are running Paper or other Forks of paper you can take a report using the following steps,
## How to take a Timings Report
First, in-game or in console, run the command `/timings on`. Once you have enabled timings wait at least 10m then go onto the next step.

After waiting 10m, run the command `/timings paste`.

Said command will paste a link on the console, which when clicked will take you to a web interface similar to the one shown below.

![img](/running_a_server/timings/1.png)

Anything in red is using a excess of resources. You can also click the plugins tab to see what plugins are using the most resources on your server.
## Alternatives to Timings
Timings, while a great tool to get an overview of performance at a basic level, might not be the best utility to use for more indepth troubleshooting or performance breakdowns.
A new and popular alternative that we recommend is Spark. Learn more about it [here](/spark).

If you require help with reading your timings, create a ticket in [Bloom.host Discord!](https://discord.gg/bloom)
