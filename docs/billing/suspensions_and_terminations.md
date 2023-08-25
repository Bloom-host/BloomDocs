---
id: suspensions_and_terminations
title: Suspensions and Terminations
hide_table_of_contents: false
sidebar_label: Suspensions and Terminations
description: This guide will explain how Suspensions and Terminations work on Bloom.
keywords:
  - terminations
  - suspensions
  - payment
  - payments
  - invoices
  - billing
---

Hey Bloomers! In this guide we will be going over how service Suspensions and Terminations work.

## How can I see the due date of my service?

You can go to the [Services section](https://billing.bloom.host/clientarea.php?action=services) of our billing panel to see the next due date of your service.

You can also visit the [Invoices section](https://billing.bloom.host/clientarea.php?action=invoices) which also lists the due date of the invoices.

## At what exact time is the invoice due?

Invoices are due at 1:00 AM UTC of the due date listed on our billing portal.

## What does a suspended service means?

Your service will not be accessible when it's in a suspended state. You cannot download or edit files, you also can't start the server. The server is automatically unsuspended once the invoice is paid. No files are lost or deleted when a server is suspended.

## How Suspensions work

Failure to pay an invoice will result in the service being automatically suspended two days after the due date at 1:00AM UTC.

Example:

Your invoice is due the 1st at 1:00 AM UTC. If you don't pay it before the 3rd at 1:00 AM UTC the service will be automatically suspended the 3rd at 1:00 AM UTC.

## What is a Termination?

When a server is terminated all it's files are deleted.

## How Terminations work

The service will be terminated 7 days after the due date if no payment is received.

:::caution
If your server is terminated it doesn't necessarily mean that we can't recover your files. We keep emergency node backups from where we can get your server files - but act quick, these emergency node backups are automatically rotated (deleted and replaced
Contact us to know if we still have a backup of your files. If we do, you can order a new server and we can restore your server files to it.
:::
