---
id: virtfusion-vnc
title: Virtfusion VNC
hide_table_of_contents: true
sidebar_label: Virtfusion VNC
description: We'll explain how to open the VNC console on your virt.bloom.host VPS.
keywords:
  - Virtfusion
  - Virt
  - VNC
  - Virtual Private Server
  - Console
---

## Overview

In this guide we'll learn how to enable VNC in our Virtfusion panel, and then access the VNC console via the same website.

### Enabling VNC

:::caution Security Risks
To minimize attack vectors, it's recommended that VNC be only enabled as needed. Disabling the function between uses. 
:::

First, we'll head over to our panel and access the specific VPS we want to manage, we can do so by logging in to our [dashboard](https://virt.bloom.host/dashboard)

![img](/VPS/virtfusion-vnc/1.png)

Once we've selected our server, we'll want to head over to the "Options" tab as shown above. The first option of all the subtabs available is the one we want, as shown in the screenshot. Once we've enabled VNC by clicking the highlighted button, we can proceed with the next step.

### Opening Our VNC Console

:::note VNC Use Cases
The VNC console allows access to the virtual machine when SSH fails. Either due to config changes, or the need to access the machine outside the standard OS boot procedure, like recovery.
:::

![img](/VPS/virtfusion-vnc/2.png)

Now, back on the main tab of our panel we can finally see and click the "VNC" icon. Which will finally open the VNC console as seen below. 

![img](/VPS/virtfusion-vnc/3.png)

Now with the console we can manage the virtual machine as if it were an SSH session. Using VNC allows us to complete recoveries (both files & password), and to fix other network issues preventing SSH.

### Clipboard & Paste In VNC

![img](/VPS/virtfusion-rescue/4.png)

VNC doesn't support pasting in content from your clipboard (keep in mind, VNC doesn't sync with anything but your raw key by key presses and mouse movements). But, don't worry, Virtfusion's VNC Console has a paste feature! It can be accessed as shown above.





