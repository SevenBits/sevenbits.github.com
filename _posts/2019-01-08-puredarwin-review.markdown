---
layout: post
title:  "PureDarwin's Work is Fantastic"
date:   2019-01-08 15:45:00
categories: osx puredarwin qemu
---
I've had a longtime interest in [PureDarwin][1], an attempt to build a version of Darwin
using only free and open-source software. Darwin is the UNIX-based environment that
underlies Apple's macOS operating system. Many parts of Darwin are open-source, but many
components are closed-source and proprietary. Apple hasn't realized a full, complete
build of Darwin usable by end-users in over 15 years.

Thus, I was very surprised and happy to see that PureDarwin has just realized a new build
based on top of macOS High Sierra (Darwin 17). You can grab the build from [their GitHub
repository][2] and, most crucially, run it on your Mac without requiring anything more
than [QEMU installed on your Mac][3].

I'll be experimenting with this new build over the next few weeks, and I want to thank
the PureDarwin team for their very hard work.

[1]: http://www.puredarwin.org
[2]: https://github.com/PureDarwin/PD-17.4-Beta
[3]: https://www.sevenbits.io/blog/iso/osx/qemu/2016/08/22/install-qemu.html
