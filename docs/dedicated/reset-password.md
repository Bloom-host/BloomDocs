---
id: reset-password
title: How to change your dedicated server's password
hide_table_of_contents: true
sidebar_label: How to change your dedicated server's password
description: This guide will show you how to change your dedi password
keywords:
  - Dedi password
  - Dedicated
---

Hey Bloomers! In this guide we will be going over how to change your dedicated server password.

## How to change your dedicated server's SSH password?

First we'll head to dedi.bloom.host and then go to the Rescue tab of your server. Please select Rescue System CD 9, set a root password of the rescue system, and start the rescue.

Now we can login to the rescue system via your systems IP address and the password you just set. This guide is specifically for LVM password resets as our system uses LVM. 

Once logged in you'll want to make sure the LVM kernel module is loaded by doing `modprobe dm_mod`, then we will want to scan for volume groups with `vgscan` and we can activate them via `vgchange -ay`. Now the volumes should be activated and can be listed via `lvs`. Now lets create a directory that we can mount the system to via `mkdir /mnt/debian` (in our example we're using Debian), then we can mount the root volume group by doing the command below

:::important
Please remember to replace the volume group name with the volume group listed via lvs
:::

`mount /dev/<example-VG>/root /mnt/debian`

Now we can mount all other essential filesystems

`mount -t proc proc /mnt/debian/proc`
`mount -t sysfs sys /mnt/debian/sys`
`mount -o bind /dev /mnt/debian/dev`

Once that is done we can now chroot into the machine and change the password

`chroot /mnt/debian`

Now change the password of the user you want to change
`passwd <USER>`

And now you can simply `exit` and then `reboot` and your users password has now been sucessfully changed :)
