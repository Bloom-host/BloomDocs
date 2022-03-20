---
id: installing-plugin
title: Installing Plugins
slug: /installing-plugins
hide_title: true
hide_table_of_contents: false
sidebar_label: Installing Spigot Plugins
image: https://bloom.host/assets/images/logo.png
---

<div class="text--center">
<img src="https://bloom.host/logo-white.svg" alt="logo" height="50%" width="50%"/>
<h1>Spigot Plugins</h1>
</div>

:::important
This guide is for Bukkit/Spigot/Paper servers. If you are looking for instructions on how to install plugins on a BungeeCord/Waterfall or Velocity proxy, please see [this guide](proxy-plugins.md)
:::

### The Basics
> #### Requirements
> 
> In order to run plugins on your server, you have to be using a fork of Bukkit. (such as Spigot, Paper, Pupur, Pufferfish, etc. See our [guide on server jars](../running_a_server/jars.md) for more information.) If you wish to make client-side modifications (as well), see our guide on [Forge](forge-mods.md) or [Fabric](fabric-mods.md)!

> #### What are plugins?
>
> Plugins can be seen as addons which make changes to your Minecraft server. These changes can be as small as adding a simple info command or as large as a complete minigame. 

---

### Warning

Make sure you trust the source of your plugin. Plugins have high-level access to your server. Do not attempt to use plugins from leak websites or similar. In some cases malicious plugins may even corrupt other plugins installed on your server or your world. 

---

### Installing Plugins

1. You'll first need to find the plugin you wish to install. Downloads can be found on a variety of sites. Common places are [spigotmc.org](https://spigotmc.org/resources) or the [bukkit.org](https://dev.bukkit.org) website.
2. In any case, save the plugin to your local machine. Plugins can either be uploaded via the [web panel](https://mc.bloom.host) or through [SFTP](../using_the_panel/sftp.md). If you're uploading in bulk, go with the latter.
3. In your server's root directory, locate the `plugins` folder, if it's not there then create a new directory named `plugins`. Navigate into this folder, and upload your plugin's file there!
4. Most plugins will require you to restart your server before they take effect.

Once the server is online, type `plugins` in your console. If you are able to see the freshly installed plugin's name in green, you're good to go! If not, see what to do below.

---

### What To Do If A Plugin Doesn't Load

In case you can't seem to be able to install a plugin properly, be sure to do these steps before asking for help.

1. **Check if the plugin has any dependencies**: In a lot of cases, plugins require other plugins to run. These should be listed on the website you got the plugin from. Simply download and install them the same way.
2. **Check for additional settings**: In some cases plugins require additional configuration before they can be loaded properly.
3. **Check for the plugin's version**: Even though most plugins after 1.13+ should be compatible with newer versions, this may not be the case with more sophisticated plugins. Be sure to check whether the plugin officially supports your Minecraft versions.
4. **Check your startup logs**: You should also check the startup logs as this can usually give you a hint to what’s wrong and causing a particular plugin to not start up properly. 
