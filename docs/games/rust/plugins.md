---
id: plugins
title: Using Plugins
hide_table_of_contents: true
description: Learn how you can install and use plugins on your Rust server!
---

## Introduction

It's possible to modify certain aspects of your server by utilizing plugins.

In order to modify the game, the server must use [Oxide/uMod](https://umod.org).

---

## Enabling Oxide/uMod

Before installing any plugins, we have to enable Oxide/uMod on the server.

To do this, open your server in the [DuckPanel](https://mc.bloom.host) and navigate to the 'Startup' tab.

Here, ensure the 'Oxidemod' slider is enabled.

![Oxide slider enabled in the panel](/games/rust/plugins/enable.png)

---

## Installing Plugins

First, we should find some plugins to install. Please ensure to only download plugins from trusted sources, such
as [the official plugin list](https://umod.org/plugins?page=1&sort=downloads&sortdir=desc&categories=rust).

In this example, we will install [Welcomer](https://umod.org/plugins/welcomer) by [Dana](https://umod.org/user/Dana).
![Download button on Oxide](/games/rust/plugins/download.png)

Once downloaded, head over to the [File Manager](/file-manager-controls) tab and open the `plugins`
directory within the `oxide` one.

If you have not restarted the server after installing Oxide/uMod, feel free to create these folders manually.

Drag & drop the plugin file into the directory.
![File showing in plugins folder](/games/rust/plugins/upload.png)

Lastly, head back to the 'Console' tab and restart the server. It may take a little while for the server to load for the
first time after installing new plugins, but you will see the status show as 'Running' when it's ready.
![Server showing loaded](/games/rust/plugins/loaded.png)

Lastly, you can verify that the plugin is installed by using the `plugins` command in-game as
an [administrator](admin.md) or in the console.
![Command verifying successful installation](/games/rust/plugins/list.png)

---

## Configuring Plugins

Almost all plugins have configurations to modify certain aspects of their behaviours.

You can find these configs in the `config` directory within the `oxide` one:
![Configs in file manager](/games/rust/plugins/config-list.png)

Every config is different, but they usually use easy to understand formats, such as JSON or YAML.
![Config in editor](/games/rust/plugins/config.png)

Make sure to restart the server to apply the changes.
