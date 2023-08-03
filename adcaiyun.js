[rewrite_local]
^https?:\/\/(biz|wrapper)\.cyapi\.cn\/(.+\/(user.+|visitors|activity)|p\/v\d\/vip_info) url script-response-body https://raw.githubusercontent.com/boolen35/antiad/main/adcaiyun.js
^http:\/\/adx\.sogaha\.cn\/sdk\/ad\/get url reject-200

[mitm]
hostname = *.cyapi.cn, adx.sogaha.cn

*************************************/


var boolen35 = JSON.parse($response.body);
const vip = '/vip_info';
const adhf = '/activity';
const user = '(user|visitors)';

if ($request.url.indexOf(vip) != -1){
    boolen35.vip = {
    "expires_time" : "4092599349",
    "is_auto_renewal" : true
  };
    boolen35.svip = {
    "expires_time" : "4092599349",
    "is_auto_renewal" : true
  };
}

if ($request.url.indexOf(adhf) != -1){
    boolen35.activities = [];
}

if ($request.url.indexOf('user') != -1){
    boolen35.result.ranking_above = 99;
    boolen35.result.is_vip = true;
    boolen35.result.vip_expired_at = 4092599349;
    boolen35.result.svip_given = 9999;
    boolen35.result.is_xy_vip = true;
    boolen35.result.xy_svip_expire = 4092599349; 
    boolen35.result.wt.vip = {
        "auto_renewal_type" : "",
        "expired_at" : 0,
        "enabled" : true,
        "svip_apple_expired_at" : 4092599349,
        "is_auto_renewal" : true,
        "svip_expired_at" : 4092599349,
        "svip_auto_renewal_type" : ""
      };
    boolen35.result.wt.svip_given = 9999;
    boolen35.result.wt.ranking_above = 99;
    boolen35.result.is_phone_verified = true;
    boolen35.result.phone_num = "13145200000";
    boolen35.result.vip_take_effect = 1;
    boolen35.result.is_primary = true;
    boolen35.result.xy_vip_expire = 4092599349;
    boolen35.result.svip_expired_at = 4092599349;
    boolen35.result.svip_take_effect = 1;
    boolen35.result.vip_type = "s";
}

$done({ body: JSON.stringify(boolen35)});
