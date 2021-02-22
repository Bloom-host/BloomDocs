---
id: server-resource-packs
title: Serverwide Resource Packs
hide_title: true
hide_table_of_contents: false
sidebar_label: Serverwide Resource packs
description: How to add a serverwide resource pack to your minecraft server
keywords:
  - Resource Pack
  - Server
  - Pterodactyl Panel
  - Minecraft
  - Bloom.host
image: https://bloom.host/assets/images/logo.png
---
# Serverwide Resource Packs
Once you found the resource pack you want on your server you need to upload the resource pack to a website and get the direct download link of it. You can use [this website](https://mc-packs.net/).  

Click “choose file”, find your file and then click upload. Make sure the file you upload is a.zip file. A file can easily be made into a zip file by right-clicking the file, picking “send to” in the dropdown menu and then choosing “compressed (zipped) folder”  

![](https://lh6.googleusercontent.com/DGmDG2mVxEDxuMYWYyS7FIe6egMTjKLD-BbPsZp7vPb8x2XWUXXXvivePb5DHaotLbzcjnQ-EZhqfUtNk30Wam9uKs96Vv84rxFIdLmewieWF5Iycw-b3LdR4nASumtBWV8tASe4)

Once done you’ll get your download URL. (save this URL)

![](https://lh5.googleusercontent.com/72m5CjH7PbcMUBc0tdNLVipG5hbroNA4T6XeXH5NYA59QhlbiOF7dI6bHV9syTNQyTz_JcFSx0XXFDAYyie8rkdy9CPkp4IViez8duWqgcoP8Ok_abOYiSvSgpTrWlOjPVuvselG)
  

Now go to your server and open “file management” then open “file explorer” in the dropdown menu.

![](https://lh5.googleusercontent.com/vawkbTT-6Ssh21R2IqE34URhds01frGtjOJnj4ueeKJKMrIoFTWto-aTG0Af2F4Jg8raQuEmuOP9IvMroGLcfbqERBHOEvG9MSMDsbUFJqREInV27rCol3ij9qgz6Wzqkm-GYA0h)  

Locate “server.properties” and open it.  

![](https://lh6.googleusercontent.com/DEDrE7QvDNsurXAYH_7Uy5nKJ26jCXMHjM7NFika7bwHBfN_OKOU51gwsdX5f4flAHcuEYUrebo0yIPOCkuhQdA4to7o0Lo_ZIYlde-9skK2eZ0uAhIBU6EVsQWPQCbP1JcuZHu1)

Find “resource-pack” and paste your URL in the box.

![](https://lh6.googleusercontent.com/pNZcq_2CdI8teiWw-uz_VlKCtQ-0k1z_A0vh8CHRwLHvQWyKPn1uTkKzcHI5u8G_aIsYmlLwrvSt1t-4ZE-4vh9DzXO7ao-x-MlhZyDa4vvKkv177-tJTJNfgS1QdV47vaXS5SjW)

Optionally, you can add the SHA1 checksum of your chosen resource pack so that clients will be able to reliably update the pack, even if the name doesn't change. To obtain the SHA1 checksum, you can run `certUtil -hashfile \path\to\file SHA1` on Windows or `shasum /path/to/file` on Mac or Linux. Alternitively, you can simply use [emn178's online SHA1 checksum checker](https://emn178.github.io/online-tools/sha1_checksum.html). Once you have it, simply append it to `resource-pack-sha1=` on the second-to-last line of server.properties.

Now restart your server, feel free to open a ticket if you need any assistance.
