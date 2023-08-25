---
id: binarysearch
title: "Diagnosticando: Búsqueda binaria"
slug: /binarysearch
hide_title: true
hide_table_of_contents: true
sidebar_label: "Búsqueda binaria"
description: Cómo encontrar un error causado por un plugin desconocido?
keywords:
  - Binary search
  - Plugins
  - Troubleshoot
  - Troubleshooting
  - Error
image: https://bloom.host/assets/images/logo.png
---

Hola Bloomers! 👋

En esta guía veremos realizar una búsqueda binaria en tu servidor.

---

Un problema común es encontrar un bug que no es causado por el JAR del servidor u otro factor externo.
Cuando te has asegurado que es un plugin el que está causado el problema pero no **cuál** plugin, una de las mejores
formas de encontrarlo es con una búsqueda binaria.

:::warning
Aunque es posible usar plugins como ServerUtils para descargar y cargar plugins, esto puede ser inseguro y es muy probable
que eventualmente se rompa algo.
:::

## Paso 0
Primero debes asegurarte al 100% que este bug no es causado por tu JAR de servidor. Si usas forks de Paper como Purpur
o Airplane, intenta cambiando temporalmente a Paper y revisa si no has configurado algo por casualidad. Puedes también
revisar tus flags de inicio, detalles de base de datos, puertos, etc.

## Paso 1
:::warning
Es recomendable crear un backup antes de empezar con la búsqueda por si quieres regresar fácilmente todo a como
estaba antes.
:::

Quita la mitad de tus plugins. Para hacer esto, selecciona la mitad de tus plugins y muévelos fuera de la carpeta
`/plugins`. Luego reinicia tu servidor.

## Paso 2
- Si el bug sigue sin ser solucionado, ahora sabes que el bug se encuentra en la mitad de plugins que quedan.
- Si el bug fue solucionado, ahora sabes que se encuentra en la mitad de plugins que quitaste.

## Step 3
Repite hasta que encuentres al culpable. Una vez lo hayas hecho, puedes reportarlo con el autor respectivo y regresar
todo a como estaba antes. 

