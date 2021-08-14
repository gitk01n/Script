# 食用方法
在 QuantumultX 中添加rewrite_local和hostname 和 task_local，也可直接远程订阅  
用 微信 打开链接http://w.s74ptk.top/?p=327314即可获取阅读cookie，也可扫描最底下二维码  
跳转到阅读文章时首次阅读5秒后下拉最底下再返回即可退出，QuantumultX将自动运行脚本  
一天稳定3元 自动体现 微信3毛 支付宝1毛即可体现  
***
* [rewrite_local]
``````
http://\S+sign/info\Stime=\S+ url script-request-header https://raw.githubusercontent.com/gitk01n/Script/master/tuifenbao/tfb.js
``````
* [MitM]
``````
hostname = api.hijmlvvg.cn
``````
* [task_local]
``````
*/5 * * * * https://raw.githubusercontent.com/gitk01n/Script/master/tuifenbao/tfb.js, tag=推粉宝阅读, enabled=true 
``````
* 远程订阅 重写-引用
``````
https://raw.githubusercontent.com/gitk01n/Script/master/tuifenbao/rewrite-remote-tfb.conf
``````
***
* 订阅重写后也可保存下方二维码扫描获取cookie
<div align=center><img width="230" height="310" src="https://github.com/gitk01n/Script/blob/master/tuifenbao/tfb.jpg"/></div>
