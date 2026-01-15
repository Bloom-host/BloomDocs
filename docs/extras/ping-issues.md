---
id: ping-issues
title: How to diagnose and fix ping issues
header: Ping Issues
hide_table_of_contents: true
sidebar_label: How to diagnose and fix ping issues
description: This guide will help you diagnose and potentially fix ping issues.
keywords:
  - Bloom.host
  - ping issues
  - ping
---

Hello Bloomers! 👋

This guide will go over how to run an MTR, how to diagnose ping issues and potentially fix them.

---

## How to run an MTR

:::warning
Please follow our [MTR guide](mtr.md).
:::

---

## Paper Anti-Xray engine mode 2

Paper Anti-Xray engine mode 2 can cause ping issues for people with unstable connections or servers with high player counts. You can read more about the different engines of the anti-xray [here](https://gist.github.com/stonar96/ba18568bd91e5afd590e8038d14e245e).

We recommend you try changing to engine mode 1, then restart the server and see if the ping issues persist. If they don't then you know you can safely switch to engine mode 1.

You can find this setting in the Paper.yml file in the main server folder towards the end of the file around Line 253.

![img](/extras/ping-issues/2.png)

---
