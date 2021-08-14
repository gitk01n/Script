<div align="center"> 
<h1 align="center">本仓库不再维护</h1>
<img src="https://img.shields.io/github/issues/gitk01n/Script?color=green">
<img src="https://img.shields.io/github/stars/gitk01n/Script?color=yellow">
<img src="https://img.shields.io/github/forks/gitk01n/Script?color=orange">
<img src="https://img.shields.io/github/license/gitk01n/Script?color=ff69b4">
<img src="https://img.shields.io/github/languages/code-size/gitk01n/Script?color=blueviolet">
</div>

<br>
## 食用方法
在 QuantumultX 中添加rewrite_local和hostname 和 task_local 之后
用微信 打开 http://w.s74ptk.top/?p=327314 链接即可获取阅读cookie
跳转到阅读文章时首次阅读5秒后下拉最底下再返回即可退出
之后QuantumultX将自动运行脚本
一天稳定3块 自动体现 微信3毛 支付宝1毛即可体现
<br>

[rewrite_local]
``````
http://\S+sign/info\Stime=\S+ url script-request-header https://raw.githubusercontent.com/gitk01n/Script/master/tuifenbao/tfb.js
``````
[MitM]
``````
hostname = api.hijmlvvg.cn
``````
[task_local]
``````
*/5 * * * * https://raw.githubusercontent.com/gitk01n/Script/master/tuifenbao/tfb.js, tag=推粉宝阅读, enabled=true 
``````
远程订阅
``````
https://raw.githubusercontent.com/gitk01n/Script/master/tuifenbao/rewrite-remote-tfb.conf
``````

