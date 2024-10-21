# 👋 Welcome! 
This is the community-maintained documentation for [Bloom.host](https://bloom.host)!

# 🌿 Contributing

<details>

<summary>

## 📚 To The Documentation

</summary>

You can help contribute to the Bloom.host documentation in one of two ways:

### Option #1:

You can also contribute to the docs directly by doing the following:

This method makes it easier to import the document(s) and to make sure that the formatting is correct and to make it
look the way you want it when it is imported.

1. Create a fork of the [GitHub Repository](https://github.com/Bloom-host/BloomDocs)
2. Optionally, create a new branch, such as `feature/my-changes` to make it easier to merge upstream changes.
3. Make edits to your fork of this repository.
   Note that there is a document format when creating new pages, see below for details.
4. Create a pull request to have the changes added into the repository.

**Note:** If you are adding new pages, be sure to add it into [`sidebars.js`](/sidebars.js) (located in the root of the
repo).

---

### Option #2:

You can write an article in a format you prefer and create a support ticket in
our [Discord server](https://discord.gg/bloom), and it will be converted over for you.
Note that documents in Markdown are preferred, however, Microsoft Word and Google Docs files can be accepted,
and they can be uploaded to the documentation.

---

### Document format:

When adding new pages to the documentation, be sure to use the document format.
The document format is listed below, and also listed in [`README.md`](/README.md) in the root of the repo.

```yaml

---
id: <id>
title: <title>
slug: <id>
hide_table_of_contents: true
sidebar_label: <sidebar title>
description: <short description>
---

... rest of the document ...
```

---

### Templates and formatting help:

There is a [Markdown template](https://raw.githubusercontent.com/Bloom-host/BloomDocs/master/docs/extras/template.md)
which has some examples of markdown-formatting elements (and how to use them) such as bold text, strikethrough, headings
and links.

You can also see [a formatted version of the template](https://docs.bloom.host/extras/template/) to see what the
formatted elements will look like when imported into the documentation website.

### Internationalisation (i18n)

You can also help translate the wiki into another language that you’re fluent in. Please see
the [guide on how to do this](https://docs.bloom.host/extras/contributing#adding-a-language).

You may also find the [Docusaurus documentation about i18n](https://docusaurus.io/docs/i18n/introduction) useful.

---

### Note

When contributing information, make sure that the information is useful and that you know what you are talking about. Do
not ramble or write useless information into articles as this is not helpful to users who may look at the wiki for
information about the user panel or information about running Minecraft servers.

---

</details>

<details>

<summary>

## 🤖 To BloomBot's Embeds

</summary>

You can also contribute to the embeds used by BloomBot in the [Discord](https://discord.gg/bloom) where a command is used, and it can provide
troubleshooting information or quick information to users such as those who are requesting support.

You can edit [`embeds.yml`](/embeds.yml) and this can be contributed along with documentation changes and can be
contributed in the same PR.

Here is the format of the embeds:
![img](https://raw.githubusercontent.com/Bloom-host/BloomDocs/master/static/discord/embed-help.png)

```yml
embed_name:
  # A list of aliases that can be used to call the command
  # You can also do the short format: aliases: ['embed_name_alias', 'another_alias']
  aliases:
    - 'embed_name_alias'
    - 'another_alias'
  # The text of the message
  text: 'Suspendisse vitae sem imperdiet suspicit magna sed'
  # The title of the embed
  title: 'Vestibulum luctus fermentum nisl'
  # The icon next to the title
  title-icon: '%guildicon%'
  # The thumbnail of the embed
  thumbnail: '%guildicon%'
  # The description of the embed. |+ keeps new lines, > does not
  description: |+
    Lorem [ipsum dolor](https://example.tld) `consectetur adpicing elit`. **Morbi id lorem turpis fascillisis**
    veneantis eget dapibus est. _Prasent sed_ est et ~~lectus secleisque~~ lacina.

    ```yaml
    natoque: "Vivamus dapibus ex id"
    tortor:
    - porta
    - gravida
    ```
  # A list of fields. Each can have a title, a description and whether they are inline
  fields:
    - title: 'Etiam magna nulla, sollicitudin necleo at'
      description: |+
        Etiam maximus augue at velit cornmcxio, eu suscipit
        nisl consequat. Aliquam sollicitudin metus quis justo
        aliquet, eu convallis sem porta. Praesent leo
        nunc, id sodales rugna placerat sed. Mauris
        dignissim pretium cma.
      inline: false
    - title: ''
      description: ''
      inline: false
    - title: 'Mauris dignissim pretium porta.'
      description: 'Etiam magna nulla, sollicitudn nec leo at.'
      inline: true
    - title: 'Etiam maximum augue'
      description: 'In hac habitssa platea'
      inline: true
    - title: 'Nulla molestie sapien sit'
      description: 'Prasend sed est et'
      inline: true
  # The image of the embed
  image: 'https://bloom.host/favicon/favicon-og.png'
  # The footer of the embed
  footer: 'Phasellus effictur dictum sem egel pretium'
  # A list of buttons. [ <display name>, <link>, <emoji>, <order> ] 
  buttons:
    - [ 'Label', 'https://example.tld', '1️⃣' ]
    - [ 'Label', 'https://example.tld', '2️⃣' ]
    - [ 'Label', 'https://example.tld', '3️⃣' ] 
```

Users with the `@Gardener` role can use the `!et` (embed test) command with YAML code to quickly test commands.

You can use these global placeholders anywhere: `%useravatar%`, `%guildicon%`

If you have any questions or concerns, please ask in our Discord!

Please note that changes are not instant and may take up to 24 hours to apply.

---

</details>

## 🦆 Wall Of Gardeners
These are the awesome people who have contributed at least three guides to our documentation so far!
If your name is missing, please let us know on [Discord](https://bloom.host/discord)!

- Razboy20 (`razboy20`)
- Evident (`evident._.`)
- Zax71 (`zax71`)
- Eagle (`legaleagality`)
- Euan (`Euan#7980`)
- Kieran (`krnbrz`)
- Southpaw (`southpaw1496`)
- just a random person (`just.a.random.person`)
- Technofied (`technofied`)
- LGLOVER (`lglover`)
- Clumsy (`clumsy`)
- RelativeSure (`relativesure`)
- robot (`robot`)
- Billy (`billydanoob`)
- LoJoSho (`lojosho`)
- si (`himitsucakes`)
- alau740 (`alau740`)
- water (`waterswimmer`)
- Geri (`bloom.geri.dev`)
- Roan (`roanv`)
- lk2107 (`lk2107`)
- Artic (`artic_.`)
- Kurumi78 (`kurumitokisaki`)
- Amgelo (`amgelo563`)
- ProGamingDk (`progamingdk`)
