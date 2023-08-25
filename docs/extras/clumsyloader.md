---
id: clumsyloader
title: ClumsyLoader
hide_table_of_contents: true
sidebar_label: ClumsyLoader
description: This guide will show you how to use ClumsyLoader, an alternative way to download your panel backups to your VPS or computer.
keywords:
  - Loader
  - BloomLoader
  - Backups
---

Hey Bloomers! In this guide we will be going over how to use ClumsyLoader to download your panel backups to a VPS or to your local computer.

An example use case for this tool is if you want to take your own backups, you can run this tool on a server of some kind and have it run on a schedule, constantly downloading your backups for you automatically

We can start by heading over to the [Github Releases page](https://github.com/ClumsyAdmin/ClumsyLoader/releases) and download the appropiate version for your OS. In this example we will use ```Bloomloader_windows_amd64.exe``` which is the executable for Windows. Once you have downloaded ClumsyLoader make sure to create a new folder and put the executable in it.

After we have done this, we now want to create the API Key that ClumsyLoader will use to access your server backups. To do this, simply head over to the [panel](https://mc.bloom.host/) and once you are logged in, click **Account API** on the left.

![img](/extras/srvcontrol/1.png)

Then click **Create New** and give it a relevant description so that you will remember what this API key is for. There is no need to specify the an IP in the allowed IPs field unless you want to restrict the API access to your IP address or your VPS address, by default it will allow all IP addresses to use the API key. Once you are done, click **create**. Now there will be a list of API keys, in your case there will only be one so just click the key icon to reveal the long key and copy it. 

![img](/extras/srvcontrol/2.png)

:::caution
Please keep this key secure! Anyone with this API key can utilize it to do anything to the servers hosted under your account. 
:::

After creating the API key, go back to the folder containing the executable file and create a new file named ``.env``. Then open this file with a text or code editor and copy and paste the following. Remember to put your server ID and API key: 

```YAML
SERVERID=yourserveridgoeshere
APIKEY=yourapikeygoeshere
BACKUPNUM=0
PANELURL=mc.bloom.host
```

Please keep in mind BACKUPNUM is in array, so start at 0 and count up (0 being your oldest backup).

With Pterodactyl's automatic clearing of the oldest backup when ran by a schedule, you can use this tool to automatically download the oldest backup every week, day, etc.

After you have configured the .env file you can go ahead and run the executable and it should start to download the backup in the same folder that the executable and .env file are.
