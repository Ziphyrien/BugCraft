#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 设置本仓库的 Git 用户名和密码
git config --global user.email "ygbs@bugcraft.org"
git config --global user.name "cygbs"

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd ./.vitepress/dist

# 发布到自定义域名
echo 'b2t.xin' > CNAME

# 提交到远程仓库
git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io
git push -f git@github.com:cygbs/cygbs.github.io.git master

# 回到上一个目录
cd -
