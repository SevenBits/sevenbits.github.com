---
layout: post
title:  "Developing EFI Programs: Part 1"
date:   2015-02-03 16:31:00
categories: enterprise efi
---
Today, I'm going to write the first of a three-part series on how to write EFI programs. The focus of this lesson is writing EFI programs which can run on a Mac, but I don't discriminate *too* much between different platforms.

I am writing this because there was an outstanding lack of tutorials for EFI programs available when I began writing [Enterprise][1]. Even now, if you want to write EFI programs, you have to dive into sample code and kind of figure out how it all works. So, to make it easier for everyone in the future, I made this tutorial. Before we begin, you'll need a couple of things:

- **A C compiler**
 This is most important. Unfortunately, writing EFI programs is currently only possible in C. I assume that you have a functional knowledge of the system; I am not going to teach it.
- **A UNIX or Linux machine with GCC installed**
- **A copy of the EFI specification, available from Intel** (optional, but recommended)

The requirement for Linux is a practical one. There exists an official EFI development kit from Intel, known as [Tianocore][2]; it runs on both OS X and Linux. Sadly, it is not easy to set up and uses a different system that is different from what you are likely used to if you write code on mainly POSIX platforms. Since OS X uses Mach-O as its executable format, Apple's default compiler toolchain does not ship with the ability to create ELF executables, which complicates the matter. Tianocore uses a "special" tool (more like a hack) to convert the executable into an EFI-compatible format, which is bothersome.

Rather than invest in black magic, we will be sticking to building our sample EFI programs using **GNU-EFI**, a simple EFI toolkit, and **Linux**.

> If you want to compile on OS X, you *can*, but you need a cross-compiler. Unfortunately, pre-compiled GCC toolchains with support for EFI are hard to come by. There is [this one][3], but it is ancient by computing standards; the link dates back to 2006, and it only contains GCC 4.1. Worse, it only builds x86 binaries. There are many x86-64 Linux GCC toolkits available online that can be run on a Mac, but none that I have found have a copy of `objcopy` which supports EFI. If any reader knows of one, please do let me know, and I will happily include a link to it.

Part the First
==============

To dive in, get yourself onto a Linux machine and make sure it has **GCC** installed (GNU-EFI does not support clang). The first step is to install GNU-EFI. This is a relatively straightforward affair. You can install it through your package manager or build it from source. In this tutorial, we will be building from source for two reasons:

1. Many distributions ship woefully outdated packages of GNU-EFI, and
2. Depending on your distribution, where the package manager installs GNU-EFI can vary, complicating the build system

Building from source, luckily, is straightforward. Start by creating a new temporary directory to hold the source files and intermediate build products:

    cd /tmp
	mkdir build-deps
	cd build-deps

If that wasn't too hard (it shouldn't have been), then you're ready to download GNU-EFI. We will be downloading version `3.0w`. To begin, type this into your terminal:

    wget -q http://downloads.sourceforge.net/project/gnu-efi/gnu-efi_3.0w.orig.tar.gz
    tar -zxvf gnu-efi_3.0w.orig.tar.gz >> /dev/null

> GNU-EFI version numbers have remained at 3.0 for years, with minor successive letters denoting improvements. If the version is higher by the time you view this tutorial, you may have to adapt these instructions or just use an older version.

The `wget` command retrieves the source tarball from the Internet, and the following `tar` command unpacks it into a directory named `gnu-efi-3.0`. To build from source, simply go into that directory and run the `make` command, and your computer will send its little minions to do your bidding:


    cd gnu-efi-3.0
    make

If the build completed, then you're all set and ready to continue. If not, then it's the end of the line - you'll need to research why the build failed. If not, then you're ready to continue: run the following command and type your administrator (root user) password:

    sudo make install

With that all taken care of, you're ready to write to write your first EFI application!

**Part 2 Coming Soon!**

[1]: https://sevenbits.github.io/Enterprise/ "Enterprise EFI Linux Loader"
[2]: http://tianocore.sourceforge.net/wiki/Welcome "Tianocore"
[3]: http://osxbook.com/book/bonus/chapter4/efiprogramming/ "OS X Book: EFI Toolchain"
[4]: https://sevenbits.github.io/contact.html "Contact Me"