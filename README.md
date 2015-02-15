qn
======

[qiniu](http://www.qiniu.com/) client

Install
-------
* `npm install qn -g`
* modify '{Install Path}/config/global-sample.js' to '{Install Path}/config/global.js' and replace keys `accessKey`,`secretKey`,`bucket`,`domain` to your own


Usage
-----
`qn` —— uplod all files in current directory

`qn test.jpg` —— upload test.jpg 

All files will be uploaded to your qiniu drivers.You should first have qiniu account.

Put files to a directory, and use `cd` command to it.Just type `qn`, these files will start uploading.

![qn](http://aslinwang.u.qiniudn.com/qn.png)

This tool can only upload files in current directory, can not files in child directory.