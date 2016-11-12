---
layout: post
title:  "Veertu is Great"
date:   2016-11-11 21:08:00
categories: iso osx veertu qemu
---
Last time, I discussed [how to install Qemu on your Mac][1]. This time, I want to discuss [Veertu][2], an impressive virtualization solution for OS X. I shelled out the money to buy the full version, and I’m going to share my thoughts briefly on what I like, and what I don’t like, about the program.

What I like about Veertu, first and foremost, is how lightweight it is. The developers themselves brag about how the app itself is only 13 megabytes — an impressive feat, to say the least. Part of the reason for this lean size is Veertu’s reliance on the built-in OS X hypervisor; because of this, it does not need to include its own, bringing the app’s size way down and eliminating the need for complex kernel extensions.

Veertu ships with a modest selection of Linux ISOs ready for download, which even users using the free version can download. However, support ends there for the free version; it is not possible to use your own ISO unless you buy the full version, which is, however, a reasonable trade-off. This does mean, however, that you can’t install Windows without paying.

The downsides of Veertu are that, in my experience, it is not as fast as VMware or even Virtualbox in some cases, though that will hopefully improve over time. One big drawback is the lack of guest additions available for Linux installations, which hampers productivity. On OS X El Capitan, it was not possible to install a network adapter to the system so that the host’s network could be partitioned from that of the guest. While this was reportedly fixed in macOS Sierra, I haven’t tried.

Overall, I like Veertu, mainly because of its price and its lightweight nature compared to its competitors. You should try it. 

[1]: http://blog.sevenbits.tk/iso/osx/qemu/2016/08/22/install-qemu.html "Post on Qemu"
[2]: https://veertu.com "Veertu home page"