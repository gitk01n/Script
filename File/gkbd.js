let obj = JSON.parse($response.body);
obj = {
  "code": 1000,
  "data": {
    "result":true
   },
   "msg": "success"
};

$done({body: JSON.stringify(obj)});