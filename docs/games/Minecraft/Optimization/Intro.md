# **🛠️Server Optimization Guide**

This guide helps you to prevent lagging (TPS ISSUES) on your servers by optimizing the configurations

Note for users that are on vanilla, Fabric or Spigot (or anything below Paper) - go to your [server.properties](http://server.properties) and change `sync-chunk-writes` to `false`. This option is forcibly set to false on Paper and its forks, but on other server implementations you need to switch this to false manually. This allows the server to save chunks off the main thread, lessening the load on the main tick loop.

Guide for version 1.21.5. Some things may still apply to 1.15 - 1.21.4.

Based on [this guide](https://www.spigotmc.org/threads/guide-server-optimization%E2%9A%A1.283181/) and other sources (all of them are linked throughout the guide when relevant).

## **INTRO**

There will never be a guide that will give you perfect results. Each server has their own needs and limits on how much you can or are willing to sacrifice. Tinkering around with the options to fine tune them to your servers needs is what it's all about. This guide only aims to help you understand what options have impact on performance and what exactly they change. If you think you found inaccurate information within this guide, you're free to open an issue or set up a pull request to correct it.

## **PREPARATIONS**

### **Server JAR**

Your choice of server software can make a huge difference in performance and API possibilities. There are currently multiple viable popular server JARs, but there are also a few that you should stay away from for various reasons.

Recommended top picks:

*   [Paper](https://github.com/PaperMC/Paper) - The most popular server software that aims to improve performance while fixing gameplay and mechanics inconsistencies.
*   [Purpur](https://github.com/PurpurMC/Purpur) - Paper fork focused on features and the freedom of customization.

You should stay away from:

*   Any paid server JAR that claims async anything - 99.99% chance of being a scam.
*   Bukkit/CraftBukkit/Spigot - Extremely outdated in terms of performance compared to other server software you have access to.
*   Any plugin/software that enables/disables/reloads plugins on runtime. See [this section](https://github.com/YouHaveTrouble/minecraft-optimization#plugins-enablingdisabling-other-plugins) to understand why.
*   Many forks further downstream from Paper or Purpur will encounter instability and other issues. If you're seeking more performance gains, optimize your server or invest in a personal private fork.
