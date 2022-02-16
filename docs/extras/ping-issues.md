---
id: ping-issues
title: How to diagnose and fix ping issues
hide_title: true
hide_table_of_contents: false
sidebar_label: How to diagnose and fix ping issues
description: This guide will help you diagnose and potentially fix ping issues.
keywords:
  - Bloom.host
  - ping issues
  - MTR
  - ping
image: https://bloom.host/assets/images/logo.png
---

<div class="text--center">
<img src="https://bloom.host/logo-white.svg" alt="logo" height="50%" width="50%"/>
<h1>Ping Issues</h1>
</div>

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

If you want to learn how to read an MTR results, you can read [this article](https://www.exavault.com/blog/reading-mtr-output)

<div class="text--center">
<img src={require('../../static/imgs/extras/ping-issues/1.png').default} alt="img"/></div>

Assuming your issue isn't network related, you can try the steps outlined below.

---

## Paper's Anti-Xray engine mode 2

Paper Anti-Xray engine mode 2 can cause ping issues for people with unstable connections or servers with high player counts. You can read more about the different engines of the anti-xray [here](https://gist.github.com/stonar96/ba18568bd91e5afd590e8038d14e245e).

We recommend you try changing to engine mode 1, then restart the server and see if the ping issues persist. If they don't then you know you can safely switch to engine mode 1.

You can find this setting in the Paper.yml file in the main server folder towards the end of the file around Line 253.

<div class="text--center">
<img src={require('../../static/imgs/extras/ping-issues/2.png').default} alt="img"/></div>

---

## Changes to chunk loading on Minecraft 1.18+

Mojang did some heavy changes to how chunk loading works on Minecraft 1.18+, this has caused ping issues, slow world loading, lag when teleporting and kicks for some servers and players. The Paper team is currently developing a fix for this issue, but it is not yet available on the production branch. 

You can go [here](https://github.com/PaperMC/Paper/pull/7368), download the experimental Paper server jar and replace the one you are currently using with this experimental one which has fixed ping issues for most people that are running 1.18. If the ping issue went away, then you can temporarily continue using this jar until the Paper team merges this fixes into the production branch.

<div class="text--center">
<img src={require('../../static/imgs/extras/ping-issues/2.png').default} alt="img"/></div>

---