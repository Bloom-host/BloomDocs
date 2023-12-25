---
id: namelessmc
title: NamelessMC
slug: /other-servers/namelessmc
hide_table_of_contents: true
sidebar_label: NamelessMC
description: NamelessMC is a free, easy to use & powerful website software for your Minecraft server, which includes a large range of features.
keywords:
- Forum
- CMS
- NamelessMC
- Nameless
- Website Software
- Website
- Pterodactyl Panel
- Bloom.host
---

### What is NamelessMC
NamelessMC is a Free and Open-Source forum software that you can use to supercharge your Minecraft Server!

## Installation
:::note
You **will need** a Database to use NamelessMC. See [this guide](/databases) if you are not familiar with using a database.
:::

To begin installing NamelessMC, you will need access to a Web Server - we will use [CaddyServer](/other-servers/caddy-server) for this guide.

After your Caddy server has been set up, [Download](https://github.com/NamelessMC/Nameless/releases) the latest NamelessMC release from GitHub.
Scroll to the bottom of the "Assets" section of the latest release, and download "nameless-deps-dist.zip"

![nmc-release-img](https://i.imgur.com/xasuqVz.png)

From there, open your File Manager for the webserver you just setup. navigate to `home/public/`, and delete the default file (`index.html`).
After deleting this file, you can upload the zipped folder you just downloaded to this directory.

![file-mgr-img](https://i.imgur.com/KKdmU58.png)

Right-click your newly uploaded zip, and `Unarchive` it. This will generate a bunch of new files. After this is completed, feel free to delete the zipped folder.

To use your website, you will need a domain, preferably using [Bloom's Reverse Proxy](/ports-and-proxies)

![rev-proxy-img](https://i.imgur.com/ZUxAW6g.png)

NamelessMC is installed, and you are ready to set it up! Navigate to your domain to begin setting up your website.

## Setup

After navigating to your website, you should see this page. Select "New Installation", then "Proceed".

![nmc-new-install-img](https://i.imgur.com/F7DIsxy.png)

Your Hostname is the website address you specified earlier.

Friendly URLs removes the extra information from the website link, turning `namelessmc.bloom.host/index.php?route=/forum` into `namelessmc.bloom.host/forum`

![nmc-gen-cfg-img](https://i.imgur.com/a6mxN95.png)

:::info
If you want to use Friendly URLs, see [#Friendly URLs](#friendly-urls)
:::

You will need to reference the database you created earlier for the next part.
Fill the appropriate information in, and "Proceed".

![nmc-db-cfg-img](https://i.imgur.com/xGjYJyT.png)

Site name is the name the website known as. this will show on the site.

Contact Email should be a valid email address that you can be contacted with.

Outgoing Email will be used to send users emails, for notifications or account information.

![nmc-cfg-img](https://i.imgur.com/48IsLKw.png)

This is self-explanatory, you set up the Username, Email Address, and Password for your Administrator account.
This account will be the "Owner" of the website.

![nmc-cfg-email-img](https://i.imgur.com/gdJjySS.png)

If this is your first time setting up a forum, and you don't have any data to import, select "No", and then "Finish"

![nmc-cvt-img](https://i.imgur.com/PiJildm.png)

Congratulations! Your forum now set up, and ready to go! You will be prompted to sign in to your Admin Control Panel after completion.
This is the password you set up for your admin account.

# Additional Information

## Friendly URLs
To use Friendly URL's, navigate to your CaddyServer Configuration (`home/caddy/Caddyfile`), and uncomment `# import namelessmc`
```
    # Uncomment for NamelessMC websites; if Nameless is under a sub directory add route /forum { ... } around the code.
    import namelessmc
```

## Links
[GitHub](https://github.com/NamelessMC/Nameless)

[CaddyServer](https://caddyserver.com)
