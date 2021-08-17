### Nodejs 配置密钥 (Github Actions)

<details>

  <summary>
    <span style="font-size:22">
       Actions Secrets 
    </span>
  </summary>  

| Name | 脚本相关YML | Value分割符 | 必须 / 可选 | 注意事项及样式(其中"xxx"代表任意字符) |
| :-------: | :------: | :-------: | ------ | ------- |
| YOUTH_HEADER | <span style="font-size:18; color:#0000ff"> 中青看点 youth.yml </span> |  #或者换行  | 必须 | 请求地址:  "https://kd.youth.cn/WebApi/NewTaskIos/getTaskList"，  <br>中青签到请求头引用: uid=xxx&cookie_id=xxx&cookie=xxx |
| YOUTH_ARTBODY | 同上 | &或者换行 | 必须 | 请求地址: "https://ios.baertt.com/v5/article/complete"， <br>阅读请求体: p=xxx |
| YOUTH_TIME | 同上 | &或者换行 | 必须 | 请求地址: "https://ios.baertt.com/v5/user/stay.json"，  <br>阅读时长请求体: p=xxx |
| YOUTH_NOTIFY_CONTROL | 同上 | true/false | 可选 | 中青通知开关 <br>默认当转盘次数为50或者100并且余额大于10元时推送通知 |
|  |  |  | - |  |
| YOUTH_READ | <span style="font-size:18; color:#0000ff">中青阅读 youth_read.yml</span> | &或者换行 | 必须 | 请求地址: "https://ios.baertt.com/v5/article/complete"，  <br>阅读请求体: p=xxx |
| YOUTH_START | <span style="font-size:18; color:#0000ff">中青浏览赚 youth_gain.yml</span> | & | 必须 | 请求地址: "https://ios.baertt.com/v5/task/browse_start.json"，  <br>阅读请求体: p=xxx |
| YOUTH_END | 同上 | & | 必须 | 请求地址: "https://ios.baertt.com/v5/task/browse_end.json"，  <br>阅读请求体: p=xxx |

</details>
