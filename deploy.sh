#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 这个命令用于获取指定远程仓库（这里是“origin”）的推送地址。
push_addr=`git remote get-url --push origin`
# 这行代码的作用是获取当前代码库最新提交的描述信息，增量版本号，并将其存储在 commit_info 变量中供后续使用。
commit_info=`git describe --all --always --long`
dist_path=docs/.vitepress/dist
push_branch=gh-pages

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd $dist_path

git init
git add -A
git commit -m "deploy, $commit_info"
# git push -f: 这是告诉 Git 要进行强制推送
# 这里 HEAD 表示当前本地分支的最新提交
git push -f $push_addr HEAD:$push_branch

# 返回上一级
cd -
# 删除静态资源文件
rm -rf $dist_path
