---
id: reset-bmc
title: How to clear kvm sessions on dedicated panel.
hide_table_of_contents: true
sidebar_label: How to clear kvm sessions.
description: This guide will show you how to clean out your idle kvm sessions.
keywords:
  - kvm clear
  - bmc reset
  - Dedicated
---

Hey dedicted bloomer! If you are reciveing an error with **"Maximum number of allowed sessions reached. Please close other sessions and try again"** You have arrived to the right guide.

This error occurs when your *KVM* (Web consoles) have reached its **max allowed limit**, when this happens you cannot create more session links.

To fix this you go to your dedi.bloom.host
- Go to power options on the top right
- Press BMC Reset
- This reset will not harm anything setup and will clear the console sessions, the BMC reset takes its time 5-15 minutes to be exact.

If you are reciving further issues with the dedi panel open a ticket on our [website](https://billing.bloom.host/submitticket.php?step=2&deptid=3).