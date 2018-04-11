---
layout: post
title:  "How to Compile and Build Enterprise"
date:   2014-12-23 17:59:00
categories: mlul enterprise efi
---
I've recieved a few emails from users asking how to compile Enterprise from source code so that they can create their own builds to be used with Mac Linux USB Loader. Since there's not yet any official documentation on the topic, I figured that I'd write a post about it for everyone's edification.

The first thing that you need is a Linux box, though this is more of a practical requirement more than anything else; since OS X uses Mach-O as its executable format, Apple's default compiler toolchain does not ship with the ability to create ELF executables, a requirement for GNU-EFI, the library that Enterprise uses to facilitate access to EFI functions.

> If you want to compile on OS X, you *can*, but you need a cross-compiler. Unfortunately, pre-compiled GCC toolchains with support for EFI are hard to come by. There is [this one][1], but it is ancient by computing standards; the link dates back to 2006, and it only contains GCC 4.1. Worse, it only builds x86 binaries. There are many x86-64 Linux GCC toolkits available online that can be run on a Mac, but none that I have found have a copy of `objcopy` which supports EFI. If any reader knows of one, please do let me know, and I will happily include a link to it.

Next, you need to either clone Enterprise from its official repository using `git` or [download the source code][2]. To clone the repository from `git`, open up your terminal emulator of choice and in your chosen directory run:

    git clone https://github.com/SevenBits/Enterprise.git
    cd Enterprise-git-master

Now that you're inside of the Enterprise source directory, you need to install the dependencies. The only real dependency for this simple program is GNU-EFI, which you can install via your package manager. Alternatively, you can use the included script, `install-deps.sh`, to download and install it for you; this is the option that I recommend, though it does make GNU-EFI a bit harder to remove later.

Assuming that everything has been done properly, you just kick off the compilation:

    ./build.sh

You may want to grab a coffee here, though it really shouldn't take that long. If it takes longer than a minute on a modern machine, then something is wrong. **Please note:** there shouldn't be any build errors or warnings if the program has been built like I describe here. If there are, then please [contact me][3] and let me know.

The whole process should result in two files inside of the newly-created `bin` directory of the source tree: `bootX64.efi` and `install-enterprise`, an installer program. If those are present, you're good, and you can use Enterprise to your heart's content. Happy hunting!

[1]: http://osxbook.com/book/bonus/chapter4/efiprogramming/ "OS X Book: EFI Toolchain"
[2]: https://github.com/SevenBits/Enterprise/archive/master.zip "Enterprise Source Download"
[3]: https://sevenbits.github.io/contact.html "Contact Me"
