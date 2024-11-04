---
id: binarysearch
title: "Troubleshooting: Binary Search"
slug: /binarysearch
hide_table_of_contents: true
sidebar_label: "Troubleshooting: Binary Search"
description: How do I fix an obscure error caused by an unknown plugin?
keywords:
  - Binary search
  - Plugins
  - Troubleshoot
  - Troubleshooting
  - Error
---

A common problem that server owners encounter is that they have a bug on their server that is not caused by the server JAR or any of its configurations, server settings, and other external factors. When you are certain that it is a plugin causing the issue but not sure which among your plugins are causing the issue, one of the best things to do is conduct a binary search.

:::warning

While it is technically possible to use plugins such as ServerUtils to unload and load the plugins, doing so is unreliable and is very likely to break something.

:::

## Step 1

First, you need to be 100% sure that this bug is not caused by the server JAR you are using. If you are using forks of Paper switch back to Paper first or check if you set something in the JAR configuration that you did not mean to. Also check if it is not an issue with your startup flags, database details, ports and proxies, etc.

## Step 2

Remove half of your plugins. To do this, select the plugins and move them outside of the /plugins folder. After this, reboot your server.

## Step 3

If the bug is not fixed after that, now you know that the bug is among the plugins that are left. If the bug was fixed, you know that the bug is among the plugins that you removed. If you still cannot determine which plugin is the culprit after narrowing it down, remove half of the group of plugins again.

## Step 4

Rinse and repeat. After you have finally found the culprit, you can fix the bug and then bring back all the plugins to your server. 

