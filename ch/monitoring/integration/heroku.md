---
layout: page
title: Quick Start with PM2
menu: starter
lang: ch
---

# 在Heroku中监控您的Node.js应用

只需几秒，本教程将向您展示如何使用`pm2`和Heroku监控node.js应用。

我们假设您的应用已被pm2包装了。 如果没有，请按照[heroku教程](runtime/integration/heroku.md)进行。

---

## 创建一个账户

在[这里](https://app.keymetrics.io/api/oauth/register)注册。

---

## 与pm2 Monitoring关联

为了将pm2连接到仪表板，您需要在环境中添加公钥和私钥。

用此添加您的密钥：

```bash
heroku config:set PM2_PUBLIC_KEY=XXXXXXXXXX PM2_SECRET_KEY=YYYYY
```

?> 您可以在仪表板的右上方访问您的密钥

---

## 在pm2 Monitoring中设置服务器名称

设置 `PM2_MACHINE_NAME`环境变量以指定服务器名称:

```bash
heroku config:set PM2_MACHINE_NAME=heroku-server
```

?> 默认的服务器名称是带有几个随机字符的主机名（`HOST`环境变量）.

?> 请注意，如果主机名重复，仪表板将接收来自两个实例和闪烁的数据.

---

## 下一步

完成您的[仪表板配置](monitoring/guide/configuration.md)

---

## 疑问？

我们一直乐于帮您解决可能遇到的问题。搜索我们的文档或查看常见问题的答案。您也可以在我们的社区论坛发布问题或评论。