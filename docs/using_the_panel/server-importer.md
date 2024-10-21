---
id: server-importer
slug: /server-importer
title: Server Importer
hide_table_of_contents: true
sidebar_label: Server Importer
---

### How it works

Duck Panel has a convenient server importer feature. The server importer allows you to easily import your server into Bloom, saving time and avoiding having to download/upload files yourself.

:::note
You can also import the databases hosted on your old host! Follow this [guide](/databases#importing-mysql-databases) to see how to import databases.
:::

<iframe width="560" height="315" src="https://www.youtube.com/embed/pkaASL6Xros?si=XUdlLLzRMGGoU2bF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

---

### Remote S/FTP credentials
First you will need the credentials to connect to the remote S/FTP server. If you are importing from another game host, this information should be located in their panel. You will need the following details:
- Server type (FTP, FTPS or SFTP)
- Host and Port
- Username
- Password

:::note
We recommend you compress all the server files that you want to import before starting. Many game host panels support the ability to compress your files. This will greatly increase the speed of the server import.
:::

### How to start the server import
- First go to our [Duck Panel](https://mc.bloom.host)
- Select the server to which you want to import the files.
- Click on "*Server Importer*" on the navigation bar.
- Fill in the form with the appropriate credentials.
- Leave the "Base Directory" on `/` if you want to import all the files. If you want to import a specific folder, you can specify that in this box. If you have archived your server files, you can place the zip/tar within a folder, and follow the previous steps, to import just that specific file. 

Once the import begins, you can navigate to the Console page to view the current progress.

![console](/using_the_panel/server-importer/1.png)


#### Failsafe if your previous host is having issues with S/FTP
If your previous provider is having issues with S/FTP connections, be it from having an outdated panel, or other credential complications, you can follow the steps below.

:::note
This method only works if your former provider offers backups with the option to download them directly froma a link.
:::

- Go to the backup section in your panel.
- Download the backup directly with your browser.
- Once the download has started, go to the "Downloads" manager of your browser of choice, and copy the link attached to the file-download.
- In your Duck Panel, go to File Manager, then click the top right button "Download From URL".
- If the link is direct, then it will begin the download. Once it's completed your backup archive will be available in the Home directory of your server.
