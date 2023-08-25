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
  - MTR
  - ping
---

Hello Bloomers! 👋

This guide will go over how to run an MTR, how to diagnose ping issues and potentially fix them.

---

## How to run an MTR

MTR probes routers on the route path by limiting the number of hops individual packets may traverse, and listening to responses of their expiry.

On Windows you can use a software such as [WinMTR](https://sourceforge.net/projects/winmtr/).
1. Click the link and download the application
2. Extract the downloaded archive and open the folder.
3. Start the WinMTR.exe file and enter your server's IP address in the 'host' field.
4. Click start and let it run for at least a minute.
5. Take a screenshot of the full results so we can analyze your route.
6. You can send this screenshot to the [#support-chat](https://discord.gg/F8t6EyafMz) channel of our Discord server so we can analyze it, or you can open a ticket in our [support portal](https://billing.bloom.host/submitticket.php) and attach the screenshot.

If you want to learn how to read an MTR results, you can read [this article](https://www.exavault.com/blog/reading-mtr-output) aswell as [this doc](https://www.cloudflare.com/learning/network-layer/what-is-mtr/)

![img](/extras/ping-issues/1.png)

Assuming your issue isn't network related, you can try the steps outlined below.

---

## Paper Anti-Xray engine mode 2

Paper Anti-Xray engine mode 2 can cause ping issues for people with unstable connections or servers with high player counts. You can read more about the different engines of the anti-xray [here](https://gist.github.com/stonar96/ba18568bd91e5afd590e8038d14e245e).

We recommend you try changing to engine mode 1, then restart the server and see if the ping issues persist. If they don't then you know you can safely switch to engine mode 1.

You can find this setting in the Paper.yml file in the main server folder towards the end of the file around Line 253.

![img](/extras/ping-issues/2.png)

---
