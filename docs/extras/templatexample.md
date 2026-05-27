---
id: templatexample
title: Template
hide_table_of_contents: false
sidebar_label: Template
description: The template and style guide used for contributing to Bloom.host documentation.
keywords:
  - Template
  - Contributing
  - Style Guide
  - Bloom.host
---

:::tip Before You Start
This page is a **contributor template and style reference**. Copy this file as a starting point for any new documentation page. Sections marked with `(*)` are mandatory.
:::

## Overview (*)

> Provide a short 2–4 sentence summary of what this page covers, its scope, and any limitations. A reader should be able to skim this and know if they're in the right place.

**Example:**
 This guide covers how to install and configure the Spark performance profiling plugin on your Minecraft server. It does not cover advanced JVM tuning or hardware-level optimization.

**Related Pages:** *(Link to prerequisite or related docs here)*
- [How to Install Plugins](/installing-plugins)
- [Optimizing Your Server](/optimization)

---

## Prerequisites *(if applicable)*

> For guides with significant requirements that should be tended to externally, before proceeding with the guide. For this guide, the only requirement is to install Spark, which is already explained within the scope of the guide. The example below is purely for formatting reference. This section wouldn't be added to a guide like this. 


Before following this guide, make sure you have:
- [ ] Access to the [Bloom.host Panel](https://mc.bloom.host)
- [ ] A running server (Paper, Spigot, Fabric, etc.)
- [ ] *(Add any other requirements here)*

### Important Definitions *(if applicable)*

> For guides with significant jargon load. We'll break down key concepts within this section, before proceeding with the guide. For this guide, we would expect to fill a longer list of definitions, like TPS, MSPT, etc. 

Use this sub-section to define key terms before diving in, keeping the main body lean.

| Term | Definition |
|------|------------|
| **TPS** | Ticks Per Second — a measure of server performance. 20 TPS = healthy. |
| *(Add more)* | *(Add definition)* |

---

## Section Title (*) {#section-title}

> Replace this with your first major section. Use `##` (H2) for top-level sections and `###` (H3) for sub-topics. Avoid going deeper than H4 unless absolutely necessary.

Explain the topic clearly and concisely. Write as if the reader is a Minecraft server owner who may not be highly technical. Avoid concepts that need deeper explaining if possible. If you must use more complicated concepts, define it inline or in the **Important Definitions** block (see above).

### Sub-Topic / Step Name

Break down complex sections into logical steps using H3 headers. Keep each step focused on a single action or concept.

1. **Step one**: Describe what to do and why.
2. **Step two**: Be specific. Include exact commands, file paths, or button names where relevant.
3. **Step three**: Confirm the expected outcome so the reader knows they succeeded.

---

## Another Section (*) 

### Option A vs Option B *(if applicable)*

Sometimes a step has multiple valid paths. Use a table or side-by-side breakdown to compare:

| | **Option A** | **Option B** |
|---|---|---|
| **Best for** | Beginners | Advanced users |
| **Requires** | Panel access | SFTP + Console |
| **Speed** | Slower | Faster |

### Code Examples

When referencing commands or config files, always use a code block with the appropriate language tag:

```
# Run this in your server console
spark profiler start
```

```
# Example config.yml snippet
setting: true
value: 42
```

---

## Screenshots & Images *(if applicable)*

If adding images, place them in the appropriate subfolder under `/static/` and reference them with a relative path. Always add descriptive alt text.

![](/extras/templatexample/duck.jpg)


## Docusaurus Admonitions Reference

Docusaurus supports special callout blocks called **admonitions**, created using the `:::` syntax. These render as styled callout boxes in the final documentation site.

### Syntax

The basic structure is:

```
:::type
Your content here. Supports **Markdown** formatting.
:::
```

You can also add a **custom title** by appending it after the type:

```
:::note My Custom Title
Your content here.
:::
```

### Available Types

| Type | When to Use |
|------|-------------|
| `:::note` | Neutral supplemental info, version caveats, or "good to know" context |
| `:::tip` | Best practices, shortcuts, or helpful suggestions |
| `:::info` | General informational callouts that don't fit note/tip |
| `:::important` | Critical information the reader must not miss |
| `:::caution` | Warns of a recoverable mistake or unintended side-effect |
| `:::warning` | Risk of **data loss** or serious misconfiguration — use sparingly |

### Examples

:::note
Spark is included by default in Paper versions 1.20 and above.
:::

:::tip Custom Tip Title
You can install plugins via SFTP or directly through the Panel's file manager.
:::

:::caution
Restarting your server will disconnect all online players. Warn them first!
:::

:::warning
Deleting your `world/` folder is **irreversible**. Always take a backup first.
:::

### Tips for Usage

- ✅ **Do** use admonitions to surface genuinely important context that would be easy to miss in body text.
- ✅ **Do** keep the content inside admonitions brief.
- ❌ **Don't** stack multiple admonitions back-to-back.
- ❌ **Don't** use `:::warning` for anything less than a real risk of data loss or breakage.
- ❌ **Don't** use admonitions as a substitute for well-structured body text.