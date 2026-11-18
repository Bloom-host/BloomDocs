---
id: gsit
title: GSit
slug: /plugins/gsit
hide_table_of_contents: false
sidebar_label: GSit
description: Install GSit and let players sit on benches, lie down, and crawl on your Minecraft server.
keywords:
  - GSit
  - Sitting
  - Chairs
  - Crawling
  - Paper
  - Minecraft
---

## Overview

GSit lets players sit on stairs, slabs, and carpets. If you've built a bench at spawn out of oak stairs, your players can walk up and take a seat. They can also use `/sit` to sit on the block they're standing on.

---

## Installation

1. Download the GSit `.jar` for your Minecraft version and server software, such as Paper or Spigot. [GSit downloads on Modrinth](https://modrinth.com/plugin/gsit/versions)

2. Stop your server from **Console** in DuckPanel. Open **File Manager** and upload the `.jar` to the `plugins` folder in **Home**.

3. Go back to **Console** and click **Start**. Once the server is online, type `plugins` in the console and look for GSit in the list.

If you need a hand with the upload, see our [plugin installation guide](/installing-plugins).

---

## Taking a seat

Place a stair, switch to an empty hotbar slot, and right-click the top of the stair. You should now be sitting on it. Press your sneak key (Left Shift by default) to stand up again.

If you keep sitting on stairs while working on a build, run `/sit toggle` in-game. This turns off right-click seating just for you. Run it again when you're ready to use the bench.

On Minecraft **1.18 and newer**, you can also use `/lay` to lie down or `/crawl` to fit through a one-block-high tunnel. You can find the full list in [GSit's commands and permissions](https://hangar.papermc.io/Gecolay/GSit/).

---

## Can I turn off sitting on other players?

Yes. Open `plugins/GSit/config.yml` in **File Manager**. Under `Options`, find `PlayerSit` and change `allow-sit` to `false`. Save the file, then run `gsitreload` in the server console. Players can still use the benches. [GSit default configuration](https://github.com/gecolay/GSit/blob/main/resources/config.yml)
