---
id: geysermc
title: GeyserMC
slug: /multiplatform/geysermc
hide_table_of_contents: true
sidebar_label: GeyserMC
description: A bridge between Bedrock Edition and Java Edition.
keywords:
  - Bedrock
  - Java
  - Geyser
  - GeyserMC
  - BungeeCord
  - Fabric
  - NeoForge
  - Spigot
  - Paper
  - Standalone
  - Velocity
  - ViaProxy
  - Bloom.host
  - Pterodactyl Panel
  - Minecraft
---

Geyser translates network traffic so Bedrock players can join Java servers. It makes the server think the player is a Java Edition client, allowing Bedrock clients to connect to Java servers running the latest Minecraft versions.

## Installation

[Download the plugin](https://geysermc.org/download) according to your platform and upload the `.jar` into your `plugins` or `mods` folder. Restart the server once to generate the configuration files.

If you need help installing plugins, check out [this guide](/installing-plugins).  

Once installed, go to the **Ports & Proxies** page on the Bloom.Host panel. Create a new port allocation using `19132`. While it is the default, you can use any available port assigned to your server.

After assigning the port, update the `port:` value in Geyser's `config.yml` to match your new allocation (if not the default), then restart the server.

:::important
Players on consoles must follow the instructions on [this page](https://wiki.geysermc.org/geyser/using-geyser-with-consoles/) as consoles do not allow joining custom servers by default.
:::

:::note
If you are also using Floodgate, set `auth-type` to `floodgate` in your Geyser `config.yml`.
:::

## Geyser Addons & Extensions

There are two ways to extend Geyser. The first is through standard server plugins or mods that interact with the Geyser/Floodgate API. The second is via **Geyser Extensions**, which are platform-agnostic and run directly inside Geyser.

To install an extension, place the `.jar` file into Geyser's `/extensions/` folder and restart the server.

### Some Examples of Addons

* [Junction ↗](https://modrinth.com/plugin/junction) provides automated group assignment using [LuckPerms](https://luckperms.net/), [Vault](https://www.spigotmc.org/resources/vault.34315/), or [VaultUnlocked](https://modrinth.com/plugin/vaultunlocked) to put Bedrock players into specific permission groups upon join.

  You can also configure edition-specific console commands that run separately for Java and Bedrock players when they join or quit, allowing you to tailor the experience for each edition.
* [GeyserReversion ↗](https://modrinth.com/plugin/geyserreversion) is like [ViaBackwards](/plugins/viaversion), but for Geyser! It allows older Bedrock clients that aren't supported natively by Geyser to be supported.
* [GeyserBlockJavaPlayers ↗](https://github.com/Camotoy/GeyserBlockJavaPlayers/releases) is a plugin that prevents Java Edition players from joining your server. This is useful if you want to make a Bedrock-only server but still want to use Geyser for some reason.
* [GeyserPreventServerSwitch ↗](https://github.com/Camotoy/GeyserPreventServerSwitch/releases) prevents Bedrock Edition players from joining specific subservers on your proxy. This is useful if you want to limit Bedrock players from joining certain subservers on your proxy, such as a PvP server.
* [Hurricane ↗](https://github.com/GeyserMC/Hurricane) is a Paper/Spigot plugin, and Fabric mod (unofficial port), that fixes some bugs that otherwise cannot be fixed without server modification, particularly bamboo and dripstone collision.

## Additional Resources

* [Official Website](https://geysermc.org/)
* [Wiki](https://geysermc.org/wiki/)
