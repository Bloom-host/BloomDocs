# Contributing to the documentation

You can help contribute to the Bloom.host documentation in one of two ways:

## Option one:

You can write an article in a format you prefer and create a support ticket in our [Discord server](https://discord.gg/bloom) and it will be converted over for you. Note that documents in Markdown is preferred however Microsoft Word and Google Docs files can be accepted and they can be uploaded to the documentation.

## Option two (Advanced):

You can also contribute to the docs directly by doing the following:

This method makes it easier to import the document(s) and to make sure that the formatting is correct and to make it look the way you want it when it is imported.

1. Create a fork of the [GitHub Repository](https://github.com/Bloom-host/BloomDocs)
2. Make edits to your fork of this repository. Note that there is a document format when creating new pages, see below for details.
3. Create a pull request to have the changes added into the repository.

**Note:** If you are adding new pages, be sure to add it into [`sidebars.js`](/sidebars.js) (located in the root of the repo)

### Document format:
When adding new pages to the documentation, be sure to use the document format.

The document format is listed below, and also listed in [`README.md`](/README.md) in the root of the repo.

```yaml

---
id: <id>
title: <title>
slug: <id>
hide_title: true
hide_table_of_contents: true
sidebar_label: <sidebar title>
description: <short description>
image: https://bloom.host/assets/images/logo.png
---
```
```html
<div class="text--center">
<img src="https://bloom.host/logo-white.svg" alt="logo" height="50%" width="50%"/>
<h1>[sidebar title]</h1>
</div>

... rest of the document ...

```

### Templates and formatting help:

There is a [Markdown Template](https://raw.githubusercontent.com/Billy-Bloom/BloomDocs/master/docs/extras/template.md) which has some examples of markdown formatting elements (and how to use them) such as bold text, strikethrough, headings and links.

You can also see [a formatted version of the template](https://docs.bloom.host/extras/template/) to see what the formatted elements will look like when imported into the documentation website. 

## BloomBot embeds 

You can also contribute to the embeds used by BloomBot in the Discord where a command is used and it can provide troubleshooting information or quick information to users such as those who are requesting support. 

You can edit [`embeds.toml`](/embeds.toml) and this can be contributed along with documentation changes and can be contributed in the same PR.

If you are attempting to add something to add something to these, please see the [formatting guide](https://gist.github.com/NotGeri/cb11552ab7a12e20ab495a20826c341f) on how to add embeds (there is a specific format the embed must follow.)

Please note that changes are not instant and may take up to 24 hours to apply.

## Note

When contributing information, make sure that the information is useful and that you know what you are talking about. Do not ramble or write useless information into articles as this is not helpful to users who may look at the wiki for information about the user panel or information about running Minecraft servers.
