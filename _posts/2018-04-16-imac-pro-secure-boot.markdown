---
layout: post
title:  "Information Regarding Secure Boot on the iMac Pro"
date:   2018-04-16
categories: iso osx mlul
---
Recently, Apple's newest iMac Pro introduced a feature known as [Secure Boot][1], a feature that is similar to, but different from,
the secure boot feature available on PCs.

Secure Boot, if enabled, will prevent you from booting USB drives created with Mac Linux USB Loader. Therefore, if you have Secure Boot
enabled on your iMac Pro, you will need to turn it off.

In order to turn off Secure Boot, follow these steps:

1. Turn on your iMac Pro, then press and hold Command (⌘)-R immediately after you see the Apple logo to start up from macOS Recovery.
2. When you see the macOS Utilities window, choose Utilities > Startup Security Utility from the menu bar.
3. When you're asked to authenticate, click Enter macOS Password, then choose an administrator account and enter its password.

The Startup Security Utility looks like this:

![Startup Security Utility][2]

Ensure that the checkbox is set to "No Security". We are currently investigating a way to make Mac Linux USB Loader compatible with Secure
Boot, but in the meantime, it must be disabled.

[1]: https://support.apple.com/en-us/HT208330 "About Secure Boot"
[2]: https://www.sevenbits.io/blog/assets/images/secure-boot.png
