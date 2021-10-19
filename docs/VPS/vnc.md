---
id: vnc
title: Connecting via VNC
hide_title: true
hide_table_of_contents: false
sidebar_label: Connecting via VNC
description: This guide will show you how to connect to your VPS via VNC
keywords:
  - VNC
  - VPS
  - Virtual Private Server
---

<div class="text--center">
<img src="https://bloom.host/logo-white.svg" alt="logo" height="50%" width="50%"/>
<h1>How to connect via VNC</h1>
</div>

Hey Bloomers! In this guide we will be going over how to connect to your VPS via VNC.

## VNC Credentials

First off, the VNC password is not the same as your root credentials by default.

Once you order a VPS from Bloom you receive an email titled "VPS Created", this emails contains both: the credentials to connect via SSH and the credentials to connect through VNC. The VNC credentials are located at the end of the email.

If you forgot your VNC Password you can go to our [VPS Panel](https://vps.bloom.host), sign in, select the VPS, click on the settings tab and then click on VNC Password. There you can change your VNC password.

Keep in mind that you may need to shutdown and power back on your VPS for the VNC password change to take effect. To do this, click on the red power button at the top right of the panel, wait for the VPS to turn on and then click on the green start button to turn it back on.

## How to connect to VNC via the panel

Our panel provides an HTML 5 VNC Client that you can use to connect to your VPS.

To use the HTML 5 VNC Client, go to our [VPS Panel](https://vps.bloom.host), sign in, select the VPS and click on the VNC button at the top right.

<div class="text--center">
<img src={require('../../static/imgs/vps/vnc/1.png').default} alt="img"/></div>

Then click on the "Launch HTML 5 VNC Client"

<div class="text--center">
<img src={require('../../static/imgs/vps/vnc/2.png').default} alt="img"/></div>

After you launch the HTML 5 VNC Client, you will be prompted to put your VNC credentials. The default username is "root" and the password is the one you received on your email, or the one you configured if you changed it via the panel.

<div class="text--center">
<img src={require('../../static/imgs/vps/vnc/2.png').default} alt="img"/></div>

Remember that it doesn't show the password or that you are typing, but it does work, so type your VNC password and click enter, then you should be signed in into the VPS.

:::important
Need to connect to your VPS via VNC? Check out our guide here: [How to connect to your VPS via VNC](https://docs.bloom.host/vnc)
:::