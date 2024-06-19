---
id: basic-controls
slug: /basic-controls
title: Basic Controls
hide_table_of_contents: true
sidebar_label: Basic Controls
---

### Accessing The Panel

You can access your server's main control panel [here](https://mc.bloom.host/). If you have multiple servers, you can choose which you want to modify from the panel page. Or, simply choose the server you want to control from the drop-down box of each page within the panel.

![console](/using_the_panel/basic_controls/1.png)

<iframe width="560" height="315" src="https://www.youtube.com/embed/0Gh5l5Ztw_c?si=w5bR9vGWFqGyRJ3E" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

---

### Live Information
![console](/using_the_panel/basic_controls/2.png)

- Purple - Your server's IP address and port.
- Blue - Your server's ID which is needed when opening a support ticket.
- Green - The amount of RAM your server is using. Do not be alarmed if this is maxed out, as many of our servers utilize Aikar's optimized JVM flags.
- Orange - The amount of CPU your server is using. The max amount is equivalent to 100% multiplied by the number of logical cores your plan has.
- Red - The amount of storage your server is using. If you reach the maximum amount of storage, your server will not boot until space is cleared.

---

### Game Console & Server Control
Here, you can send any command and see what everyone on your server is doing. When launching a command, remember to remove the `/`. If you still want to use a `/`, consider using [this](https://www.spigotmc.org/resources/81157) plugin!

These buttons allow you to start, stop, and restart your server. It is not recommended killing your server as plugins and worlds won’t save and may become corrupted. Only use it if your server becomes unresponsive.

![console](/using_the_panel/basic_controls/3.png)

---

### Graphs
Lastly, you can see the server's live RAM, CPU and network usage in a form of graphs! As mentioned above, with Aikar's flags, it will show up as if you were using most of this. 

![graphs](/using_the_panel/basic_controls/4.png)
