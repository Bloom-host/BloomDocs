---
id: contributing
title: Contributing
header: How to contribute
hide_title: true
hide_table_of_contents: true
sidebar_label: How to contribute to the docs
description: How to contribute to the Bloom.host documentation.
keywords:
  - Template
  - Bloom.host
  - Pterodactyl Panel
  - Minecraft
image: https://bloom.host/assets/images/logo.png
---

## The simple way
Write new articles in your preferred format, and make a support ticket in our [Discord](https://discord.gg/bloom), and we will convert it over for you. The recommended format would be Markdown. You can also send a Word or Google Docs document and we will upload it to our documentation.

## Editing Github stuffs (Advanced)
Hey! This is LoJo, one of the contributors. Here is how to make it easy for us to import your document and for you to have it the way you want when we import it!

1. Fork the [Github Repository](https://github.com/Bloom-host/BloomDocs).
2. Make any edits. Remember we run in markdown. If you add a page, make sure to also add it in `sidebars.js`.
3. Make Pull Request to have it added.

Easy as that.

# i18n (Internationalization)
[Docusaurus' official article on the matter](https://docusaurus.io/docs/i18n/introduction)

## Adding a Language
:::important
Before adding a language make sure you have a decent amount of articles which are already translated to the language you
want to add. This way languages with little to none articles are not added to the docs.
:::

Add your language key to `docusaurus.config.js`, on `i18n/locales`. For example if you were to add French you would do like so:
```js
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es', 'fr']
  }
```

## Translating
To translate the sidebar and other menu parts of the docs, use the `npm run docusaurus write-translations -- --locale <locale key>`
command. (In our French example, it would be `npm run docusaurus write-translations -- --locale fr`). This will generate
a file inside `./i18n/<language>/docusaurus-plugin-content-docs` called `current.json` which is where you add your translated keys.

To translate actual articles, open the `./i18n/<language>/docusaurus-plugin-content-docs/current` folder and look at the
folder structure on `./docs`. Follow the same folder structure for each article you want to translate, for example, for
adding a translation for this article (located on `./docs/extras/contributing.md`) you would add a translated version at
`./i18n/<language>/docusaurus-plugin-content-docs/current/extras/contributing.md`. Docusaurus will handle the rest.

Unfortunately at the moment Docusaurus only supports building locally one language at a time. To do so, you can use the
`npm start -- --locale <locale key>` command. (In our French example, it would be `npm start -- --locale fr`).

## Recommendations
These are not requirements but overall recommendations which you can use while translating.

- Try not translating too literally. You can mix the grammar and wording a little so it can be more understandable in
your language and by people who don't know about the matter.
- You can translate constants like button names by adding the translation at the side in parentheses. For example in
Spanish you could replace `Press Users` to `Presiona **Users** (Usuarios)`. This way people can know to which
button you're specifically referring to while also knowing what the button actually stands for in their language.
- If there isn't an exact translation for something like a proper noun (like Duck Panel), it'd be advisable to keep
it like that, as long as the context around the word is still understandable.

# Help Resources

- [Raw MD Template](https://raw.githubusercontent.com/Bloom-host/BloomDocs/master/docs/extras/template.md) and [this is what it turned out to be](https://docs.bloom.host/extras/template/)!
- [BloomBot Embed Gist](https://gist.github.com/NotGeri/cb11552ab7a12e20ab495a20826c341f)
- [Github Repo](https://github.com/Bloom-host/BloomDocs)

Right, one last thing. Make sure you know what you are talking about. Don't write stuff and ramble your way through it just for a role on Discord. Contribute useful information and you will be fine!

We can't wait to see what you will contribute! See you soon!


## Wall of Ducks
|  **Billy**  |  **Euan**  |  **Kaaale**  |  **LoJoSho** | **LGLover**  |  **Nessie** | **Virgil.Gunder**  |  **Zeus**  |  **waterswimmer111**  | **just a random person** | **Rei** | **Simonee** | **Geri**
