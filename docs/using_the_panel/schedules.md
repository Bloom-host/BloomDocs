---
id: schedules
title: Scheduling Actions
slug: /schedules
hide_title: true
hide_table_of_contents: true
sidebar_label: Scheduling Actions
image: https://bloom.host/assets/images/logo.png
---

<div class="text--center">
<img src="https://bloom.host/assets/images/logo.png" alt="logo" height="50%" width="50%"/>
<h1>Scheduling</h1>
</div>


### What Are Schedules?

Schedules are ways to automate doing certain tasks through the panel such as starting, stopping or restarting the server, executing commands or even creating a backup. Using a user-friendly click format!

---

---
:::important
The schedule system and our nodes use the UTC time zone. Please keep this in mind while creating schedules. You can use this [website](https://www.timeanddate.com/worldclock/converter.html) to convert time zones. 
:::

### Creating A Schedule

First, go to your [game panel](https://mc.bloom.host/) and on the left sidebar, select 'Schedules'.

Here is where all your schedules will be located in one convenient place. To add a new schedule, click the **Create New** button. Here, enter a name for your schedule and select when you wish for it to run. In case you would like to use the more advanced syntax, crontab, click the 'Advanced' tab!  

<div class="text--center"><img src={require('../../static/imgs/using_the_panel/schedules/1.png').default} alt="img"/></div>

Once finished, click create and open it from the list. Here, click 'New Task'

<div class="text--center"><img src={require('../../static/imgs/using_the_panel/schedules/2.png').default} alt="img"/></div>

The final section is what it will send as a command or as a power action. Commands should be used without the “/” in it and doesn’t accept variables. You can send a power action, with which can have turn the server on or off.

Here you can also specify a delay. This is useful in cases where you have to give a warning to your players 5 minutes before a restart for example.

<div class="text--center"><img src={require('../../static/imgs/using_the_panel/schedules/3.png').default}/></div>

---

## Examples

#### ➤ Daily Restart

<div class="text--center"><img src={require('../../static/imgs/using_the_panel/schedules/4.png').default}/></div>

#### ➤ Daily Backups
See our [guide](backups.md) on backups!