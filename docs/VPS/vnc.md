---
id: vnc
title: Connecting via VNC
hide_table_of_contents: true
sidebar_label: Connecting via VNC
description: This guide will show you how to connect to your VPS via VNC
keywords:
  - VNC
  - VPS
  - Virtual Private Server
---

Hey Bloomers! In this guide we will be going over how to connect to your VPS via VNC.

## VNC Credentials

First off, the VNC password is not the same as your root credentials by default. The VNC password you received on the first email after ordering the VPS is the password to be used when connecting to VNC using a VNC application installed on your computer. 

When you use the HTML 5 VNC Client provided by our VPS control panel, the password is the same as your SSH password.

Once you order a VPS from Bloom you receive an email titled "VPS Created", this emails contains both: the credentials to connect via SSH and the credentials to connect through VNC. The VNC credentials are located at the end of the email.

If you forgot your VNC Password you can go to our [VPS Panel](https://VPS.bloom.host), sign in, select the VPS, click on the settings tab and then click on VNC Password. There you can change your VNC password.

Keep in mind that you may need to shutdown and power back on your VPS for the VNC password change to take effect. To do this, click on the red power button at the top right of the panel, wait for the VPS to turn on and then click on the green start button to turn it back on.

## How to connect to VNC via the panel using your SSH credentials

Our panel provides an HTML 5 VNC Client that you can use to connect to your VPS.

To use the HTML 5 VNC Client, go to our [VPS Panel](https://VPS.bloom.host), sign in, select the VPS and click on the VNC button at the top right.

![img](/VPS/VNC/1.png)

Then click on the "Launch HTML 5 VNC Client"

![img](/VPS/VNC/2.png)

After you launch the HTML 5 VNC Client, you will be prompted to put your SSH credentials. 

:::important
The default username is "root" and the password is the SSH password you received on your email or the one you changed it to. 

Don't use your VNC credentials when using the HTML 5 VNC Client from our VPS Control Panel, you need to use the same credentials you use when connecting through SSH.
:::

Remember that it doesn't show the password or that you are typing, but it does work, so type your SSH password and click enter, then you should be signed in into the VPS.
