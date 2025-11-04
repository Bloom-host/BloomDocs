---
id: mss
title: MSS Clamping
hide_title: true
hide_table_of_contents: true
sidebar_label: MSS Clamping
description: This guide will show you how to clamp TCP MSS to avoid issues with our network
---

## Introduction

MSS is the max payload size a TCP connection agrees to send, so packets don't get broken up in transit.

When traffic reaches via Cloudflare Magic Transit, the effective path MTU is smaller than standard Ethernet.  
If TCP peers advertise the default MSS of 1460, larger packets on that path can get dropped or fragmented,
causing:

- flaky HTTP(S)
- slow downloads
- stalls or resets

The fix is to clamp TCP MSS of IPv4 to 1436 on SYN at an operating-system level.

---

## Diagnosing

You can easily confirm if this is the issue by querying our utility server.

Make sure to use the one for your server's location:

- Ashburn, Virginia: `https://ash.bloom.host/mtr`
- Dallas, Texas: `https://dal.bloom.host/mtr`
- Los Angeles, California: `https://lax.bloom.host/mtr`
- Miami, Florida: `https://mia.bloom.host/mtr`
- Falkenstein, Germany: `https://fsn.bloom.host/mtr`
- Singapore: `https://sgp.bloom.host/mtr`

You can use any HTTP client, such as `curl` or `wget` on Linux, or `Invoke-WebRequest` on Windows.

// Todo (notgeri): insert picture

---

## Setting Up Clamping

All of our standard VPS and Bare Metal installations have MSS clamping enabled by default, however, if you install
your OS manually or before this change, you'll need to make sure to set this up.

_Click on the section to expand it._

<details>
<summary>
![Linux logo](/icons/linux.png)
## Linux
</summary>

### Automatically

Our script will create a new table and rule using `nftables`.

Tested on the following distributions:

- Debian 13, 12, 11
- Rocky Linux 10
- Alma Linux 10
- Oracle Linux 9
- Proxmox VE 9
- Ubuntu 20, 24

```bash
curl -s https://bloom.host/scripts/mss-clamping.sh | sudo bash
```

Check the new MSS value using the [diagnostic step](#diagnosing) to confirm it worked.

---

### IPTables

**Alternatively**, you can use `iptables` to do the same:

```bash
iptables -t mangle -A POSTROUTING -p tcp --tcp-flags SYN,RST SYN -j TCPMSS --set-mss 1436
```

To make sure it's applied after a reboot, you can do the following to add it to crontab:

```bash
(crontab -l ; echo "@reboot /sbin/iptables -t mangle -A POSTROUTING -p tcp --tcp-flags SYN,RST SYN -j TCPMSS --set-mss 1436 >> /dev/null 2>&1")| sudo crontab -
```

</details>

<details>
<summary>
![Windows logo](/icons/windows.png)
## Windows
</summary>

Open a new PowerShell window as Administrator.

Check the name of the active interface, usually something like `Ethernet0`:

```powershell
netsh interface ipv4 show subinterfaces
```

Using the interface name, set the MTU to 1476:

```powershell
netsh interface ipv4 set subinterface "<your interface here>" mtu=1476 store=persistent
```

As an example, you can see `Ethernet0` is set to 1500 currently:
![PowerShell showing the interfaces](/extras/mss/windows_powershell_interfaces.png)

We will use the following command to update it:

```powershell
netsh interface ipv4 set subinterface "Ethernet0" mtu=1476 store=persistent
```

You can re-run the original command and also check the new MSS value using the [diagnostic step](#diagnosing) to confirm
it worked.

</details>

---

## Troubleshooting

If you run into any issues, please [contact us](https://bloom.host/support/).
