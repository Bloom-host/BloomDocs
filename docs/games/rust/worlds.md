---
id: worlds
title: Managing Worlds
hide_table_of_contents: true
description: Learn how you can modify, manage, wipe or use custom worlds on your Rust server!
---

## Changing Worlds Seeds, Sizes

Here is how you can start a new world with a special seed or size. You can also create a new map with the same seed this
way.

If you are unsure which size of seed to use, you can use this handy site to find a great map with all the features
you would like to have: https://rustmaps.com/

For this example, we will use this map. You can see the seed and size of the map on the left side:
![Map preview](/games/rust/worlds/map-preview.png)

Once you have your desired seed and size, open your server's 'Startup' tab in the [DuckPanel](https://mc.bloom.host) and
change the following fields:
![Panel showing size and seed startup variables](/games/rust/worlds/seed-variables.png)

Make sure to enable the 'Regen Server' option to wipe the current map and progress.

Then, head over to the 'Settings' tab and reinstall the server:
![Panel showing size and seed startup variables](/games/rust/worlds/reinstall.png)

Lastly, head back to the 'Console' tab of your server and restart it to apply the change.

And that's it! You can see the custom seed map in-game:
![Same seed showing in-game](/games/rust/worlds/seed-results.png)


---

## Using Custom Worlds

It's possibly to use a completely custom created world on your server.
You can find them from various sources, but in the end they should all just be files with the `.map` extension.

For this example, we will be using this [Rust Island map](https://codefling.com/maps/rust-island)
by [Caitthulu](https://codefling.com/caitthulu).

Once you have your map, you will need a way to host it. There are several ways, such as:

1. Using a [Caddy](/other-servers/caddy-server.md) server split
2. Using Dropbox's free tier
3. Any other direct file hosting services

We will go with the Dropbox free tier one:

1. Register to [Dropbox](https://www.dropbox.com/home)
2. Upload the `.map` file
3. Once uploaded, click 'Copy link'
4. Change the URL so instead of `&dl=0`, it ends with `&dl=1`.

![Dropbox showing map file](/games/rust/worlds/dropbox.png)

Once you have your map available online, head over to your server's 'Startup' tab in
the [DuckPanel](https://mc.bloom.host).

Here, paste the URL in the 'Custom Map URL' option:
![Panel variables showing map link](/games/rust/worlds/custom-variables.png)

Make sure you go to the startup flag and click the 'Reset default' button under the following fields: Level, World Seed, World Size. This only needs to be done if you made changes to these before.

Lastly, head back to the 'Console' tab of the server and restart it to apply the change.

:::caution HEADS UP
Lots of maps do not set up proper spawn points. If you are disconnected with the `InsideTerrain Violation Level 200`
message, you can temporarily disable this check with the `antihack.terrain_protection 0` console command.
:::

And that's it! Once you are connected, you should see the custom map in-game:
![Custom map showing in-game](/games/rust/worlds/custom-results.png)

---


