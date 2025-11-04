---
id: mtr
title: MTRs
slug: /mtr
hide_table_of_contents: true
sidebar_label: MTRs
description: Learn how you can run an MTR to help us diagnose network issues
---

## Introduction

MTR is a tool we use to diagnose network issues between your internet provider and the server.
It traces each step along the connection path to detect latency increase, packet loss, or other problems.

---

## Running An MTR

Each operating system has its own way of running an MTR. 

_Click on the section to expand it._

<details>
<summary>
![Windows logo](/icons/windows.png)
## Windows
</summary>
On Windows you can use a software such as [WinMTR](https://sourceforge.net/projects/winmtr/).

1. Click the link and download the application.
2. Extract the downloaded archive and open the folder.
3. Start the WinMTR.exe file and enter your server's IP address in the 'host' field.
4. Click start and let it run for at least a minute.
5. Take a screenshot of the full results so we can analyze your route.

![img](/extras/ping-issues/1.png)
</details>

<details>
<summary>
![Apple logo](/icons/apple.png)
## macOS
</summary>
1. Open the Terminal.  
2. If you don’t have Homebrew, install it:  
`/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"`  
3.  Install MTR:  
`brew install mtr`  
4. Run the test: `sudo /opt/homebrew/opt/mtr/sbin/mtr -b <server ip>`  
  Make sure to replace `<server ip>` with your actual server IP **without the port**. It will ask you for your user password, make sure to type it and hit enter (it won't show it in the temrinal)

![img](/extras/ping-issues/mac-mtr.png)
</details>

<details>
<summary>
![Linux logo](/icons/linux.png)
## Linux
</summary>
1. Open a terminal.
2. Install MTR with your package manager:
    - Debian/Ubuntu: `sudo apt install mtr`
    - CentOS/RHEL: `sudo yum install mtr`
    - Fedora: `sudo dnf install mtr`  
3. Run the test: `mtr -b <server ip>`  
  Make sure to replace `<server ip>` with your actual server IP **without the port**.

![img](/extras/ping-issues/linux-mtr.png)
</details>

In any case, let it run for at least a minute.

The easiest way to share it is to take a screenshot and send it to us in a [ticket](https://bloom.host/support/) for
review.

Please also make sure to share the source IP address so we can run a reverse-MTR as well.  
This is **not** your server's IP address, and you can find it on a site such as this: https://whatismyipaddress.com/

---

## Reading The Results

If you want to learn how to read MTR results yourself, you can read the following articles:

- https://www.exavault.com/blog/reading-mtr-output
- https://www.cloudflare.com/learning/network-layer/what-is-mtr/
