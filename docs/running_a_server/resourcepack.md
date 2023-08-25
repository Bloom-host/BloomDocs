---
id: resourcepack
slug: /resourcepack
title: Serverwide Resource Packs
hide_table_of_contents: true
sidebar_label: Serverwide Resource packs
description: How to add a serverwide resource pack to your minecraft server
keywords:
  - Resource Pack
  - Server
  - Pterodactyl Panel
  - Minecraft
  - Bloom.host
---

Once you found the resource pack you want on your server you need to upload the resource pack to a website and get the direct download link of it. You can use [this website](https://mc-packs.net/).  

Click “choose file”, find your file and then click upload. Make sure the file you upload is a.zip file. A file can easily be made into a zip file by right-clicking the file, picking “send to” in the dropdown menu and then choosing “compressed (zipped) folder”  

![img](/running_a_server/resourcepack/1.png)

Once done you’ll get your download URL. (save this URL)

![img](/running_a_server/resourcepack/2.png)
  

Now go to your server and open “file management” then open “file explorer” in the dropdown menu 

Locate `server.properties` and open it. Find `resource-pack` and paste your URL in the box.

![img](/running_a_server/resourcepack/4.png)

Optionally, you can add the SHA1 checksum of your chosen resource pack so that clients will be able to reliably update the pack, even if the name doesn't change. To obtain the SHA1 checksum, you can run `certUtil -hashfile \path\to\file SHA1` on Windows or `shasum /path/to/file` on Mac or Linux. Alternitively, you can simply use [emn178's online SHA1 checksum checker](https://emn178.github.io/online-tools/sha1_checksum.html). Once you have it, simply append it to `resource-pack-sha1=` on the second-to-last line of server.properties.

![img](/running_a_server/resourcepack/4.png)

Now restart your server, feel free to open a ticket if you need any assistance.
