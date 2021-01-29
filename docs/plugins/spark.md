---
id: spark
title: Spark
hide_title: true
hide_table_of_contents: false
sidebar_label: Spark
description: A performance profiling plugin to display server information like TPS and memory usage.
keywords:
  - Spark
  - Performance
  - Spigot
  - Paper
  - Bloom.host
  - Bloom.host
  - Pterodactyl Panel
  - Minecraft
image: https://bloom.host/assets/images/logo.png
---
# Spark

### What does the plugin do?
Spark is a performance profiling plugin that can display server information, such as TPS, memory, tick durations, CPU usage, and disk usage. It does not require any configuration and is incredibly easy to install, and as such there is not much of a reason to not have it.

### Setup
Download the latest build from [Spigot](https://www.spigotmc.org/resources/spark.57242/updates) and drop it into your plugins folder. Turn on or restart the server, and you're done! If you need help installing plugins, check [How to install plugins](https://docs.bloom.host/bukkit-plugins).

## Usage
There are only a few simple commands that you need to use in Spark. Running `/tps` in-game or in the console will display an output that looks somewhat like this:

![Bloom.host Spark TPS](https://i.gyazo.com/5f8c04b4928b4ceab3a077c01877ce2a.png)  

Running `/spark healthreport` will display an output that looks like this:

![Bloom.host Spark Healthreport](https://i.gyazo.com/eab09f8df7f8dbc91cbce757e90b4f31.png)  

As you can probably guess, the values will depend on your server.

### Other Tips
To make things simpler, you can link `/healthreport` to run `/spark healthreport`. This may be useful if you like to often check how your server is doing.  

Open the file manager in the panel or login via SFTP. Open the file in the root directory named `commands.yml`. Under `aliases`, add the follow text using correct YML indentation.

```yml
healthreport:
- spark healthreport
```

Boom! After you restart or turn on your server, running `/healthreport` will now show you `/spark healthreport`!

## Info

[Spigot](https://www.spigotmc.org/resources/spark.57242)  

[Github](https://github.com/lucko/spark)
