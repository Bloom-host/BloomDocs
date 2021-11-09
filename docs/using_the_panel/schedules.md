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
<img src="https://bloom.host/logo-white.svg" alt="logo" height="50%" width="50%"/>
<h1>Scheduling</h1>
</div>


### What Are Schedules?

Schedules are ways to automate certain tasks through the Duck Panel such as starting/stopping/restarting the server, executing commands or even creating a backup.

---
:::note
The schedule system and our nodes use the UTC time zone. Please keep this in mind while creating schedules. You can use this [website](https://www.timeanddate.com/worldclock/converter.html) to convert time zones. 
:::

### Creating A Schedule

First, go to your [Duck Panel](https://mc.bloom.host/) and select **Schedules** on the navigation bar.

The main page will list all of our current schedules. To add a schedule, click the **Create New** button. Enter a name for your schedule and select when and how often you would like it to run. For advanced users familiar with cron syntax, click the **Advanced** tab.

<div class="text--center"><img src={require('../../static/imgs/using_the_panel/schedules/1.png').default} alt="img"/></div>

Once created, click the schedule on the main list to view the tasks. Then, click **New Task** to add your first schedule action.

<div class="text--center"><img src={require('../../static/imgs/using_the_panel/schedules/2.png').default} alt="img"/></div>

The final section is what will be sent as a command or as a power action. Commands should be used without the `/`. You can also choose a power action or create a backup.

Here you can also specify a delay. This is useful if you would like to send a timed warning to your players before a restart for example.

<div class="text--center"><img src={require('../../static/imgs/using_the_panel/schedules/3.png').default}/></div>

---

## Examples

#### ➤ Daily Restart

<div class="text--center"><img src={require('../../static/imgs/using_the_panel/schedules/4.png').default}/></div>

#### ➤ Daily Backups
See our [guide](backups.md) on backups!
