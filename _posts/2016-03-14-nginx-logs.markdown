---
layout: post
title:  "Easily Parse nginx Logs on UNIX"
date:   2016-03-14 18:51:00
categories: linux nginx
---
This is a very short post covering how to easily access several different sets of information from the logs of your nginx
server using only tools that you can find on any standard *nix machine (I personally run [FreeBSD][1] on a virtual
private server from [DigitalOcean][2]). These will probably also work on Linux and possibly even Mac OS X, though I haven't
tried these on those platforms, due to the fact that I do not use them for hosting.

These instructions assume a standard nginx setup on FreeBSD, though you may have to vary these steps depending on where
you've chosen to put your log files. I don't claim that these are the greatest methods for obtaining information on your
users, and they are certainly no replacement for third-party analytics solutions, but I have found them useful for obtaining
information about your users quickly in a flash.

## 1: Get The IP Addresses of Your Users ##

This can be handy if you want to know the IP address of every client that has connected to your server. You could use this
to check if you are being visited frequently by the IP addresses of known troublesome users, perhaps. Assuming your log
files are stored in the `/var/log` directory (as [they should be][3]), then viewing this is as simple as running:

    cat /var/log/nginx-access.log | awk '{ print $1}' | sort | uniq -c | sort

This will print a long list of IP addresses that have been accessed in the log file. Note that if you have configured your
server to turn over log files after they reach a certain size, this command will only print the IP addresses located in
the current iteration of the log file. If this does not suffice, then you can use a wildcard in the filename to have the
shell select multiple files.

> *Note*: you can pipe this output through a paging program such as `less` or re-direct it to a file, if you wish.

## 2: Get a Full Printout of the Files Accessed by The Users ##

This command functions rather similarly to the above one, except that it prints out a sorted list of the files that the
users on your server have attempted to access:

    cat /var/log/nginx-access.log | awk '{ print $7}' | sort | uniq -c | sort

This can even be quite useful for auditing to see if a specific file has been accessed:

    cat /var/log/nginx-access.log | awk '{ print $7}' | sort | uniq -c | sort | grep "secret.txt"

You can even check the error logs as well. This can tell you if your users are frequently stumbling upon 404 pages, for
instance:

    cat /var/log/nginx-error.log | awk '{ print $7}' | sort | uniq -c | sort

## 3: View the URLs Accessed by The Users ##

This is relatively similar to the previous entry, except that instead of telling you the *name* of the file that the user
tried to access, you can see the entire URL that they entered:

    cat /var/log/nginx-access.log | awk '{ print $11}' | sort | uniq -c | sort

As before, you can do the same thing with the error requests as well:

    cat /var/log/nginx-error.log | awk '{ print $21}' | sort | uniq -c | sort

That's all for now. Stay tuned for Part II, hopefully coming soon!

[1]: https://www.freebsd.org "FreeBSD"
[2]: https://m.do.co/c/bdfb3b740642 "DigitalOcean"
[3]: https://en.wikipedia.org/wiki/Filesystem_Hierarchy_Standard "Filesystem Hierarchy Standard"
