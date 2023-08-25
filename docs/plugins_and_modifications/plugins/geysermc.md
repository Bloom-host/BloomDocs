---
id: geysermc
title: GeyserMC
slug: /plugins/geysermc
hide_title: true
hide_table_of_contents: true
sidebar_label: GeyserMC
description: A cool plugin called GeyserMC, which allows users to connect to java servers through the bedrock client.
keywords:
  - Bedrock
  - Java
  - Geyser
  - geyserMC
  - Spigot
  - Bloom.host
  - Pterodactyl Panel
  - Minecraft
image: https://bloom.host/assets/images/logo.png
---

<div class="text--center">
![logo](https://bloom.host/logo-white.svg)
<h1>GeyserMC</h1>
</div>

### What does the plugin do?

GeyserMC enables clients from Minecraft Bedrock Edition to join your Minecraft Java server.  

## Usage

:::important
GeyserMC requires your server to be on the latest version.
:::

[Download the plugin](https://ci.nukkitx.com/job/GeyserMC/job/Geyser/job/master/lastSuccessfulBuild/artifact/bootstrap/spigot/target/Geyser-Spigot.jar) and upload the jar into your `plugins` folder. Restart or turn on the server. If you need help installing plugins, check out [this guide](https://docs.bloom.host/installing-plugins).  

Once you've installed it, create the allocation 19132 under the ports & proxies on the panel.  

After that, just restart the server, and Bedrock players should now be able to connect to your Java server.  

:::important
Players who are using the console version of Bedrock Minecraft must follow the instructions listed on [this page](https://wiki.geysermc.org/geyser/using-geyser-with-consoles/) as the console version does not allow joining of custom servers by default
:::

:::note
If you're also using Floodgate, you will have to set `auth-type` to `floodgate` in your Geyser config.yml
:::
## Info
[Website](https://geysermc.org/)  

[Console workaround instructions](https://wiki.geysermc.org/geyser/using-geyser-with-consoles/) (consoles cannot connect to custom servers by default; these instructions are to work around this)

[Jenkins](https://ci.nukkitx.com/job/GeyserMC/job/Geyser/job/master/)  

[Wiki](https://github.com/GeyserMC/Geyser/wiki)
