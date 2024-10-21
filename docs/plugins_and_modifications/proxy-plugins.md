---
id: install-proxy-plugin
title: Installing Proxy Plugins (BungeeCord/Velocity)
slug: /installing-proxy-plugins
hide_table_of_contents: true
sidebar_label: Proxy (BungeeCord/Velocity) Plugins
---

:::important
This guide is for BungeeCord/Velocity proxies. If you are looking for instructions on how to install plugins on a Bukkit/Spigot/Paper server, please see [this guide](installing-plugins.md)
:::

:::caution Waterfall is End of Life
Waterfall is considered end of life by the PaperMC team and is no longer maintained.
The PaperMC group recommends that all users should migrate to [Velocity](/velocity).

More information is available at: https://forums.papermc.io/threads/announcing-the-end-of-life-of-waterfall.1088/
:::

### The Basics



> #### Requirements
> 
> In order to run plugins on your proxy, you must be using BungeeCord (or a fork such as [Waterfall](/waterfall))) or [Velocity](/velocity).

> #### What are plugins?
>
> Plugins can be seen as addons which make changes to your Minecraft proxy. These changes can be as small as adding a simple info command or as large as cross-server chat systems. 

---

### Warning

Make sure you trust the source of your plugin. Plugins have high-level access to your server. Do not attempt to use plugins from leak websites or similar. In some cases malicious plugins may even corrupt other plugins installed on your proxy. 

---

### Installing Plugins

1. You'll first need to find the plugin you wish to install. Downloads can be found on a variety of sites. Common places are [spigotmc.org](https://spigotmc.org/resources) (look at the BungeeCord or Universal sections), [Hangar](https://hangar.papermc.io/) (under platforms select which proxy software you are using) or [Modrinth](https://modrinth.com/plugins) (under proxies filter select the proxy software you are using).
2. In any case, save the plugin to your local machine. Plugins can either be uploaded via the [web panel](https://mc.bloom.host) or through [SFTP](../using_the_panel/sftp.md). If you're uploading in bulk, go with the latter.
3. In your server's root directory, locate the `plugins` folder, if it's not there then create a new directory named `plugins`. Navigate into this folder, and upload your plugin's file there!
4. Most plugins will require you to restart your server before they take effect.

:::caution
BungeeCord and Velocity plugins are usually not cross-compatible, i.e. BungeeCord plugins do not work on Velocity unless it is stated to do so otherwise and vice versa (Velocity plugins can not be used on BungeeCord unless stated overwise).

Sometimes the BungeeCord and Velocity versions of a plugin might be two seperate jar files, other times plugins have one jar which works on both.

:::

Once the server is online, if using Velocity type `/velocity plugins` in your console. If you are able to see the freshly installed plugin's name, you're good to go! If not, see what to do below.

---

### What To Do If A Plugin Doesn't Load

In case you can't seem to be able to install a plugin properly, be sure to do these steps before asking for help.

1. **Check if the plugin has any dependencies**: In a lot of cases, plugins require other plugins to run. These should be listed on the website you got the plugin from. Simply download and install them the same way.
2. **Check for additional settings**: In some cases plugins require additional configuration before they can be loaded properly.
3. **Check for the plugin's version**: Even though most plugins after 1.13+ should be compatible with newer versions, this may not be the case with more sophisticated plugins. Be sure to check whether the plugin officially supports your Minecraft and proxy software versions.
4. **Check your startup logs**: You should also check the startup logs as this can usually give you a hint to what’s wrong and causing a particular plugin to not start up properly. 
