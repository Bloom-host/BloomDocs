---
id: databases
title: Databases
slug: /databases
hide_table_of_contents: true
sidebar_label: MySQL Databases
---

### Overview
Databases can be used by certain plugins to allow for a more efficient, organized method of storing large amounts of data. Common plugins that can utilize MySQL databases are Dynmap, CoreProtect, and LuckPerms.

### Database Storage
The data stored by these databases do not affect your servers storage limit.
> This does not apply to dedicated servers and MySQL databases will contribute the dedicated servers overall data usage.

<iframe width="560" height="315" src="https://www.youtube.com/embed/X_JCB6NbIEI?si=NHmEau_Za8Yy2_hS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


### Adding MySQL Databases
 
From the [Duck Panel](https://mc.bloom.host/) select the **Databases** tab on the navigation bar.

Click **New Database** to start the process.

In the first box, you assign the database a name. In the second, you can specify what IP addresses can connect to the database. We recommend leaving it as the default wildcard of `%`, which will allow all IP addresses to connect.

![img](/using_the_panel/databases/1.png)

---

### Managing Databases

Once you have created the database, it will appear in your database list. From here you can view basic details, advanced details, import to the database, export from the database, or delete the database.

![img](/using_the_panel/databases/2.png)

---
### Importing MySQL Databases through the panel

To import a database you first have to create a new database in your Bloom server. Once it is created, you can then click on the import button which will open a prompt. Fill in the form with the database connection details from the remote MySQL server. Keep in mind that database imports are limited to **5GB**.

![img](/using_the_panel/databases/4.png)

![img](/using_the_panel/databases/3.png)

---
### Importing an .SQL database dump through the file manager

:::note
In some cases the encoding, formatting or how the database dump was made isn't compatible with the database importing. If you get an error when importing the database, you can try to import the .SQL dump through HeidiSQL.
:::

You can also upload an SQL file to import a database. Once the file is uploaded, go to the file manager, click the three dots to the right of the .sql file and click on **Import Database** then select the database you want to import it to. Keep in mind that not all .sql files are in the correct format and this option may not work if it wasn't a database properly dumped from an MySQL server.

![img](/using_the_panel/databases/5.png)

---
### Importing an .SQL database dump through HeidiSQL

:::important
Keep in mind that not all .SQL files such as sqlite and others can't be imported into MySQL.
:::

To import an .SQL database dump through HeidiSQL first connect to your database, select your database then click on the **File** menu option and select **Run SQL file**, this will run your .SQL file in HeidiSQL and should import it into your database.

![img](/using_the_panel/databases/6.png)

---

### Examples of how to configure a database in different plugins
#### ➤ Luckperms:
```YAML
storage-method: MySQL

# The following block defines the settings for remote database storage methods.
#
# - You don't need to touch any of the settings here if you're using a local storage method!
# - The connection detail options are shared between all remote storage types.
data:

  # Define the address and port for the database.
  # - The standard DB engine port is used by default
  #   (MySQL: 3306, PostgreSQL: 5432, MongoDB: 27017)
  # - Specify as "host:port" if differs
  address: prophet6.bloom.host:3306

  # The name of the database to store LuckPerms data in.
  # - This must be created already. Don't worry about this setting if you're using MongoDB.
  database: s178_test

  # Credentials for the database.
  username: u178_uIxN5UjEZy
  password: '@CSyH7IV8r4TUnaA3A7lu^2T'
```
#### ➤ LiteBans
```YAML
sql:
  # H2, MySQL, MariaDB, and PostgreSQL are supported database drivers.
  driver: MySQL

  ## MySQL/PostgreSQL settings ##
  # If using H2, the database will be stored in the LiteBans plugin folder,
  # and most of these settings won't apply.

  # Database server address.
  address: prophet6.bloom.host:3306

  # Database name, username and password.
  database: 's178_test'
  username: 'u178_uIxN5UjEZy'
  password: '@CSyH7IV8r4TUnaA3A7lu^2T'
```
#### ➤ CoreProtect
```YAML
use-mysql: true
table-prefix: co_
mysql-host: prophet6.bloom.host
mysql-port: 3306
mysql-database: s178_test
mysql-username: u178_uIxN5UjEZy
mysql-password: @CSyH7IV8r4TUnaA3A7lu^2T
```
#### ➤ Plan
```YAML
Database:
    Type: MySQL
    MySQL:
        Host: prophet6.bloom.host
        Port: 3306
        User: u178_uIxN5UjEZy
        Password: @CSyH7IV8r4TUnaA3A7lu^2T
        Database: s178_test
        # Launch options to append after mysql driver address
        Launch_options: "?rewriteBatchedStatements=true&useSSL=false&serverTimezone=UTC"
```
#### ➤ AdvancedBan
```YAML
# If set to false all bans will be saved locally in a HSQLDB-Database
UseMySQL: true

MySQL:
  IP: prophet6.bloom.host
  DB-Name: s178_test
  Username: u178_uIxN5UjEZy
  Password: @CSyH7IV8r4TUnaA3A7lu^2T
  Port: 3306
  Properties: 'verifyServerCertificate=false&useSSL=false&useUnicode=true&characterEncoding=utf8'
```
