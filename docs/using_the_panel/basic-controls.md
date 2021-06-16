---
id: basic-controls
slug: /basic-controls
title: Basic Controls
hide_title: true
hide_table_of_contents: true
sidebar_label: Basic Controls
image: https://bloom.host/assets/images/logo.png
---

<div class="text--center">
<img src="https://bloom.host/assets/images/logo.png" alt="logo" height="50%" width="50%"/>
<h1>Basic Panel Controls</h1>
</div>

### Accessing The Panel

You can access your server's main control panel [here](https://mc.bloom.host/)! - If you have several servers, you will have to select the one you wish to modify.

<div class="text--center"><img src={require('../../static/imgs/using_the_panel/basic_controls/1.png').default}"console"/></div>


---

### Live Information
<div class="text--center"><img src={require('../../static/imgs/using_the_panel/basic_controls/2.png').default}"console"/></div>
- Here you can see your server's public IP address which is used to connect to your server (Purple) and your server's ID which is crucial when reciving support! (Blue)
- Green is your memory the memory usage your server is using. With Aikar's flags, you will be using most of this. Unused memory is wasted memory!
- Orange is the CPU usage of your two cores. Minecraft Paper will only utilize 2 cores, meaning, having more doesn’t mean better performance. If you wish to have more, consider getting a VPS.
- Red is the disk space that you have used. Plugins that store a lot of data such as Dynmap may take up lots of storage, so it’s recommended to keep an eye on the amount of storage you have left. If you reach the maximum amount of storage, your server will shut down and wait until you have enough storage to restart again.

---

### Game Console & Server Control
Here, you can send any command and see what everyone on your server is doing. When launching a command, remember to remove the `/`. If you still want to use a `/`, consider using [this](https://www.spigotmc.org/resources/81157) plugin!

These buttons allow you to start, stop, and restart your server. It is not recommended killing your server as plugins and worlds won’t save and may become corrupted. Only use it if your server becomes unresponsive.

<div class="text--center"><img src={require('../../static/imgs/using_the_panel/basic_controls/3.png').default}"console"/></div>

---

### Graphs
Lastly, you can see view the server's live RAM, CPU and network usage in a form of graphs! As mentioned above, with Aikar's flags, it will show up as if you were using most of this. 

<div class="text--center"><img src={require('../../static/imgs/using_the_panel/basic_controls/4.png').default}"graphs"/></div>