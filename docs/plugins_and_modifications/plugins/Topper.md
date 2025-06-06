---
id: Topper
title: Topper
slug: /plugins/Topper
hide_table_of_contents: true
sidebar_label: Topper
description: A highly optimized plugin for leaderboard creation
keywords:
  - topper
  - paper
  - Optimized
---
### What does the plugin do?

Topper allows you to create customizable leaderboards using PlaceholderAPI placeholders and even paper. It's perfect for displaying top players, stats, or any placeholder-based data directly in-game via holograms.

![image](https://topper-mc.github.io/Wiki/spigot/quickstart/gettop.png)

### Installation

Download both [Topper](https://www.spigotmc.org/resources/topper.110417/) and [PlaceholderAPI](https://www.spigotmc.org/resources/placeholderapi.6245/), then upload them to your server's `plugins` folder. Restart the server afterward.

---

### Usage
Head to the config file: `plugins/Topper/config.yml`
Then under the `Holders` section add the following:

```jsx title="plugins/Topper/config.yml"
holders:
  money:   #Using PlaceholderAPI and vault to setup a money leaderboard
    type: placeholder
    placeholder: '%vault_eco_balance%'
  deaths:   #death leaderboard using toppers statistics feature
    type: statistic
    statistic: deaths
  playtime:   #using PlaceholderAPI for a top playtime leaderboard
    type: placeholder
    line: '%statistic_days_played%'
```
Topper allows the use of differnt types statistics:
[Paper](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Statistic.html) and [PlaceholderAPI](https://wiki.placeholderapi.com/users/placeholder-list/)

After you have added your placeholders to the config you can now restart the server.
in-game you can run the following command to test out the placeholders, 

you can do this with: 
```/gettop money 10```

---

### Leaderboard Setup

To add this to a leaderboard, follow these steps:

**Step 1:**
Create a hologram using your preferred plugin. This example uses [DecentHolograms](https://modrinth.com/plugin/decentholograms):

```
/dh create MoneyTop
```

**Step 2:**
Add a placeholder to the hologram:

```
/dh line add MoneyTop 1 %topper_money;top_name;1% &7- &b%topper_money;top_value;1%
```

**Add more lines if you want to add more rows, e.g**

```
/dh line add MoneyTop 1 %topper_money;top_name;2% &7- &b%topper_money;top_value;2%
/dh line add MoneyTop 1 %topper_money;top_name;3% &7- &b%topper_money;top_value;3%
...
continue for more places
```

**Step 3:**
You're all set!

---

### Advanced Configuration

For more detailed setup and customization, see [Topper’s Documentation](https://topper-mc.github.io/Wiki/spigot/quickstart.html).
