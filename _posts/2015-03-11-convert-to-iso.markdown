---
layout: post
title:  "How to Convert a VMDK to an ISO File"
date:   2015-03-11 17:28:00
categories: iso puredarwin osx
---
Here's a short post showing a little trick that I found.

Recently, I was trying out [PureDarwin][1], and I wanted to run their Xmas release (shipping with X11) on native hardware. Problem is, I needed to copy the files onto a hard disk, but the only thing that I could find was a VMware disk image. You can't easily extract the files from an image of this type, but luckily in two commands I was able to create an ISO file which I could mount in OS X and then copy files from. This took some experimentation, but I guessed (correctly!) that UNIX's legendary `dd` tool could create an ISO file from the raw disk images which QEMU can create (don't get anything unless you try, right?).

This was easy because I'd installed QEMU earlier on my system via Homebrew, so it was easy to convert the VMDK (the VMware disk image) to a RAW image image:

    qemu-img convert -f vmdk puredarwinxmas.vmdk pd.raw

This captures the contents of the VMware image into a raw image in some (unbeknownst to me) format. You can then write this to an ISO file:

    dd if=pd.raw of=pd.iso

That's it. You can then mount this ISO, put it up for download, or whatever. This shouldn't be limited to PureDarwin, and should work for most VMware disk images as long as it is stored as a VMDK file.

Any comments or questions? Feel free to [contact me][2] and please [donate][3] if this was useful to you.

[1]: http://www.puredarwin.org "PureDarwin homepage"
[2]: https://sevenbits.github.io/contact.html "Contact Me"
[3]: https://sevenbits.github.io/donate.html "Donate to Me"