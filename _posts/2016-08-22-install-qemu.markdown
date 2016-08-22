---
layout: post
title:  "Install QEMU on OS X"
date:   2016-08-22 18:26:00
categories: iso osx qemu
---
I like virtual machines, and I especially like [qemu][1], the popular open-source virtualization software written by Fabrice Bellard. Unfortunately, qemu has a reputation of being incredibly difficult to install on Macs. Normally, one could use a package manager such as [Homebrew][2] or [MacPorts][3] to install it, but I didn't want to install a package manager and clutter up my system when I really only needed one piece of software.

Thankfully, the [rudix project][4], though also a package manager, provides an easy-to-navigate online [repository][5] containing loads of software packages to install, including qemu! Just navigate to [qemu's page][6] and select the package for your operating system version. Download it and install like any other operating system package. They even install to `/usr/local/`, so you don't have to worry about issues with System Integrity Protection on El Capitan and higher.

What more, truly, could one ask for?

[1]: http://wiki.qemu.org/Main_Page "Qemu home page"
[2]: http://brew.sh "Homebrew"
[3]: https://www.macports.org "MacPorts"
[4]: http://rudix.org "rudix"
[5]: http://rudix.org/packages/index.html "rudix packages"
[6]: http://rudix.org/packages/qemu.html "qemu at rudix"
