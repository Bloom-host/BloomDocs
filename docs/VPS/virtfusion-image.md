---
id: virtfusion-image
title: Mounting an Image in VirtFusion
hide_table_of_contents: true
sidebar_label: VirtFusion Images
description: How to mount an installation or utility image on a VirtFusion VPS.
keywords:
  - VirtFusion
  - VPS
  - Image
  - ISO
  - CD/DVD
---

Use the Media tab in VirtFusion to mount an operating-system installer, driver image, or other bootable utility on your VPS.

---

## Mounting the Image

1. Sign in to the [VirtFusion dashboard](https://virt.bloom.host/dashboard) and select your VPS.
2. Open the **Media** tab.
3. Under **CD/DVD-ROM**, select the image you want to mount.
4. Click **Insert**. VirtFusion will configure the VPS to boot from the mounted CD/DVD image.

![VirtFusion Media tab showing where to select and insert an image](/VPS/virtfusion-image/mount-image.png)

The VPS will not restart automatically, do so manually after following the VNC steps below.

---

## Continuing Through VNC

Use the VNC console to interact with the installer or utility provided by the mounted image. Follow the [VirtFusion VNC guide](/VPS/virtfusion-vnc) to enable and open the console.

After finishing, return to the **Media** tab and eject the image so the VPS boots from its virtual disk normally.
