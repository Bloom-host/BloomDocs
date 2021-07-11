---
id: server-importer
slug: /server-importer
title: Server Importer
hide_title: true
hide_table_of_contents: true
sidebar_label: Server Importer
image: https://bloom.host/assets/images/logo.png
---

<div class="text--center">
<img src="https://bloom.host/logo-white.svg" alt="logo" height="50%" width="50%"/>
<h1>Server Importer</h1>
</div>

### How it works

DuckPanel has an easy-to-use server importer feature. The server importer allows you to easily import your server into Bloom and start gaming in a short amount of time. 

This feature connects to your old host FTP server and downloads all your files into your new Bloom server.

:::important
You can also import the databases hosted on your old host! Follow this [guide](https://docs.bloom.host/databases#importing-mysql-databases) to see how to import databases.
:::

---

### Getting your old host FTP credentials
First you will need the credentials to connect to your old host FTP server. This are usually found is the game panel. You will need the following details:
- Server type (FTP, FTPS or SFTP) - If you don't know which one it its, you can contact us via our [Discord](http://discord.gg/bloom) and we can guide you through the process.
- Host and Port
- Username
- Password

:::important
Need help importing your server files? Contact us through [Discord](https://discord.gg/bloom) and we can guide you through the process!
:::

:::note
We recommend you zip all the server files that you want to transfer from your old host. Not zipping your server files will make the server import process take much longer, because our system will need to go file by file to transfer everything. By zipping all files the system only has to transfer one .zip file, which greatly increases transfer speed. You can zip all your server files using your old host web file manager located in their control panel.
:::

#### How to start the server import
- First go to our [Duck Panel](https://mc.bloom.host)
- Select the server to which you want to import the files.
- Click on "*Server Importer*" at the left.
- Fill in the form with your old host FTP, FTPS or SFTP credentials.
- You can leave the "Base Directory" on `/` if you want to import all the files. If you want to import an specific file or folder, you will need to import the directory path here.

That's it! Now wait for the server importer to finish downloading all the files into your new Bloom server.

<div class="text--center"><img src={require('../../static/imgs/using_the_panel/server-importer/1.png').default} alt="console"/></div>