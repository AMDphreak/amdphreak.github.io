---
title: "Installers as OS-native craft"
description: "Windows still treats packaging as a third-party cottage industry. Easy Installer and msi-generator are a bet that PATH, project files, and real package bytes should be ordinary developer furniture."
pubDate: 2026-08-06
draft: false
tags: ["devtools", "packaging", "windows"]
---

![Idealized Easy Installer UI — frosted glass project panel with plugin chips](/blog/installers-as-os-native-craft.webp)

Operating systems got very good at *running* programs and oddly shy about *admitting them into the machine*. On Windows especially, “make an installer” still means learning a foreign toolchain, or copying a zip and hoping PATH cooperates. That gap is not a personality quirk of developers. It is missing OS furniture.

## When PATH is the install

Sometimes the honest product is not an MSI. It is a folder of tools you already built, and you want new shells to find them. **Install in-place (add to PATH)** is that product: append the directory, keep a ledger, undo later. No copy into `%ProgramFiles%`, no Start Menu ceremony, no pretending a debug build is a shipping channel.

That action belongs on the Explorer menu the way “Open with” does. We put it there.

![DevCentr extension — Easy Installer on the toolbar and folder context menu](/blog/easy-installer-devcentr-extension.webp)

## Projects before wizards

A serious installer still wants a project: name, version, files, backend. We chose a small KDL file and a plugin ABI instead of a single megatool. Portable zip is the always-works path. NSIS and Inno emit scripts and call tools you may already have. MSI and MSIX call a pure-D engine so CI on Linux can still produce Windows packages. Optional GUIs stay optional — discoverable, not mandatory.

## Engines should be real bytes

Calling something an “MSI generator” while writing empty stubs teaches the wrong lesson. The generator now emits compound files, cabinets, and tables you can inspect. Unsigned and incomplete relative to enterprise WiX is fine to say out loud. Fake files are not.

## What this is arguing

Installers should feel closer to **New → Text Document** than to a consulting engagement. OS vendors may never ship that. Tooling can still behave as if they should have.

- [Easy Installer](https://github.com/dev-centr/easy-installer)
- [msi-generator](https://github.com/dev-centr/msi-generator)
- [DevCentr news](https://devcentr.org/news)
- Homepage showcase: standalone Easy Installer + DevCentr extension cards
