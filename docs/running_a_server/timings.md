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

:::note
As time has gone on, Timings has become a bit outdated, from the Bloom team we usually recommend using [Spark](https://docs.bloom.host/spark) instead.
:::

## What is a Timings Report
A timings report is a way of detecting what is causing lag on your server, if you are running Paper or other Forks of paper you can take a report using the following steps,
## How to take a Timings Report
:::info
Purpur (and forks of it) no longer supports timings as of 1.19.
:::
First, in-game or in console, run the command `/timings on`. Once you have enabled timings wait at least 10m then go onto the next step.

After waiting 10m, run the command `/timings paste`.

Said command will paste a link on the console, which when clicked will take you to a web interface similar to the one shown below.

![img](/imgs/running_a_server/timings/1.png)

Anything in red is using a excess of resources. You can also click the plugins tab to see what plugins are using the most resources on your server.
## Alternatives to Timings
Timings, while a great tool to get an overview of performance at a basic level, might not be the best utility to use for more indepth troubleshooting or performance breakdowns.
A new and popular alternative that we recommend is Spark. Learn more about it [here](https://docs.bloom.host/spark).

If you require help with reading your timings, create a ticket in [Bloom.host Discord!](https://discord.gg/bloom)
