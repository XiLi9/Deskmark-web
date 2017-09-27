# 基于Redux开发的Deskmark

* [基于Redux开发的Deskmark](#基于Redux开发的Deskmark)
    * [安装项目](#安装项目)
    * [项目文件夹分解说明](#项目文件夹分解说明)
    * [ACTION](#ACTION)
    * [全局状态树与@Reducer](#全局状态树与@Reducer)
    * [流程图](#流程图)


## 安装项目

> npm install (安装项目中用到的插件)

> npm run build 

> npm run dev

## 项目文件夹分解说明
    1. actions
        存放项目的所有行为 --action,实现 action creator
    2. reducers
    	存放项目的所有store，store是通过reducers创建的，而且不包含业务逻辑。项目中包含了 items 和 editor 两个reducer，使用combineReducers将两个reducer合并
    3. components
    	存放项目的所有组件
    4. utils
    	添加Deskmark内容持久存储的功能，并通过异步接口与持久存储交互

## ACTION

## 全局状态树与@Reducer

## 流程图

