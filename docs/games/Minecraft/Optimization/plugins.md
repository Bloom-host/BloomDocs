# **DOWNLOAD OPTIMIZATION PLUGINS**

Knowing how to optimize your server is vital in preventing server lag. Luckily, there are a lot of tools available for you to use to get the best possible performance out of your server and even push it beyond its normal performance limits.

## **CHUNKY**

Map pregeneration, thanks to various optimizations to chunk generation added over the years is now only useful on servers with terrible, single threaded, or limited CPUs. Though, pregeneration is commonly used to generate chunks for world-map plugins such as Pl3xMap or Dynmap.

If you still want to pregen the world, you can use a plugin such as [Chunky](https://github.com/pop4959/Chunky) to do it. Make sure to set up a world border so your players don't generate new chunks! Note that pregenning can sometimes take hours depending on the radius you set in the pregen plugin. Keep in mind that with Paper and above your tps will not be affected by chunk loading, but the speed of loading chunks can significantly slow down when your server's cpu is overloaded.

It's key to remember that the overworld, nether and the end have separate world borders that need to be set up for each world. The nether dimension is 8x smaller than the overworld (if not modified with a datapack), so if you set the size wrong your players might end up outside of the world border!

**Make sure to set up a vanilla world border (**`/worldborder set [diameter]`**), as it limits certain functionalities such as lookup range for treasure maps that can cause lag spikes.**

A vital step in lag removal is pre-generating the world. This should be done before anything else. The best way to do this is with the [Chunky plugin](https://www.spigotmc.org/resources/chunky.81534/). All you have to do is install the plugin and run the following commands: /chunky radius 5000 followed by /chunky start.

This will pre-generate a 5,000 block radius around your world spawn. The server will lag heavily while the process is running, but once it is done your performance will improve dramatically. You can increase the radius as much as you like, but we recommend keeping it under 20,000 blocks. Any larger and you could possibly create more lag than you would be preventing.

## **SPARK PLUGIN**

**Spark Plugin**: To install spark, just need to download the latest spark **.jar** file from our [downloads page](https://spark.lucko.me/download) and place in the server `mods` or `plugins` folder. Spark will load the next time your server (re)starts.

You will be able to control spark with the `/spark` command.

## **OPTIONAL PLUGINS**

**[RoseStacker](https://www.spigotmc.org/resources/rosestacker.82729/) **(This plugin is perfect for servers that wish to alleviate common sources of lag, whilst also gaining access to features that improve the functionality and feel of the server.) **[MobFarmManager](https://www.spigotmc.org/resources/mob-farm-manager-supports-1-7-10-up-to-1-21-hopper-support.15127/)**(Limit total amount of entities in chunks or from huge spawner farms to prevent from unnecessary server load. It can limit entity amount in each chunk by set limit. In example by default there can be only 20 pigs in one chunk and 100 animals (pigs, cows, horses, rabbits, chickens). Set your own limits and avoid lags from unnecessary mob grinders ir huge animal farms.)
 
