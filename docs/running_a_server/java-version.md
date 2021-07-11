---
id: java-version
title: Change Java Version
slug: /java-version
hide_title: true
hide_table_of_contents: true
sidebar_label: Changing Java Version
description: Instructions on how to change the version of Java used on your server
image: https://bloom.host/assets/images/logo.png
---

<div class="text--center">
<img src="https://bloom.host/logo-white.svg" alt="logo" height="50%" width="50%"/>
<h1>Changing Java Version</h1>
</div>

Bloom.host offers different versions of Java to suit your server. The default Java 11 (8 for Forge servers if you specified that when purchasing your server.) will suit most people.
This guide will show you how to change the version of Java if it does not work for your server.

1. Firstly you want to go to the [Minecraft server control panel](https://mc.bloom.host/) and select the server that you want to change the Java version of.
2. On the left side, select 'Startup'.
3. Next, find the Java Version tab (usually on the top right of the page)

:::caution
All Minecraft 1.17+ versions require Java 16 to work. Use the openjdk-16 option to use Java 16 on your server.
:::

![java version](../../static/imgs/running_a_server/java_version/1.png)

:::important
If you are unable to change this next setting and you see a message such as "This server's Docker image has been manually set by an administrator and cannot be changed through this UI.", please [open a ticket on the support Discord.](https://discord.com/invite/bloom) and Bloom.host staff will need to change this for you.
:::
:::caution
The OpenJ9 image is **not** recommended for Minecraft servers, you should be using hotspot (the other Java images) instead!
:::
4. You should be able to change the Java version to a version of Java you need. In this image you can see that we can change between these versions:
    - Java 8 (`quay.io/pterodactyl/core:java`)
    - Java 11 OpenJ9 - not recommended! (`quay.io/parkervcp/pterodactyl-images:debian_openjdk-11-openj9`)
    - Java 11 (`quay.io/parkervcp/pterodactyl-images:debian_openjdk-11` and `quay.io/pterodactyl/core:java-11`)
    - Java 14 (`quay.io/parkervcp/pterodactyl-images:debian_openjdk-14`)
    - Java 15 (`quay.io/parkervcp/pterodactyl-images:debian_openjdk-15`)
    - Java 16 (`quay.io/parkervcp/pterodactyl-images:debian_openjdk-16`)
5. Simply change this to the version of Java that you need and then restart the server. You have successfully changed the version of Java your server uses.