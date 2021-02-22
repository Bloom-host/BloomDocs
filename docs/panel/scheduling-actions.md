---
id: scheduling-actions
title: Scheduling Actions
hide_title: true
hide_table_of_contents: true
sidebar_label: Scheduling Actions
description: This guide will help you understand how to set up schedules, like daily restarts using the pterodactyl panel.
keywords:
  - Daily Restarts
  - Scheduling
  - Pterodactyl Panel
  - Bloom.host
image: https://bloom.host/assets/images/logo.png
---
# Scheduling Actions

Hey there Bloomers! 👋

In this guide, we will go over scheduling actions to go off at predetermined times for your server. 

---

First, you want to go to your server panel and go to its sidebar. There, you will find a tab called Schedules.

![Bloom.host Scheduling Actions](/static/img/scheduling-actions/scheduling-actions1.png)

Here is where all your schedules will be located in one convenient place. To add a new schedule, click the **Create New** button. Here, enter a name for your schedule and enter a valid timing for it. Basically, you have to specify which day or which week of which month get triggered and in what hours. You can also specify actions which get triggered every hour and so on. - We would suggest using a [generator](https://crontab.guru/) to make sure you can set the timing of the schedule perfectly. Keep in mind all Bloom servers run on Universal Standard Time (UTC), so make sure your schedules reflect that.

![Bloom.host Scheduling Actions](/static/img/scheduling-actions/scheduling-actions2.png)

Once finished, click create and open it from the list. Here, click 'New Task'

![Bloom.host Scheduling Actions](/static/img/scheduling-actions/scheduling-actions3.png)

![Bloom.host Scheduling Actions](/static/img/scheduling-actions/scheduling-actions4.png)

The final section is what it will send as a command or as a power action. Commands should be used without the “/” in it and doesn’t accept variables. You could send a power action, which you can have turn off the server. If you use “stop”, the server will stop itself. Available power actions (case-sensitive) are:

| Command | Description                         | 
| :------ | :---------------------------------- |
| start   | Starts up the server                |
| stop    | Stops the server                    |
| restart | Stops then start up the server      |
| kill    | Kills the server (Not recommended!) |

Here you can also specify a delay. This is useful in cases where you have to give a warning to your players 5 minutes before a restart for example. 

---

## Examples

### • Launch Day!

![Bloom.host Scheduling Actions](/static/img/scheduling-actions/scheduling-actions5.png)

### • Daily Restart

![Bloom.host Scheduling Actions](/static/img/scheduling-actions/scheduling-actions6.png)

---