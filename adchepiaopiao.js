[rewrite_local]
^https?:\/\/api\.revenuecat\.com\/.+\/(receipts$|subscribers\/?(.*?)*$) url script-response-body https://raw.githubusercontent.com/boolen35/antiad/main/adchepiaopiao.js
^https?:\/\/api\.revenuecat\.com\/.+\/(receipts$|subscribers\/?(.*?)*$) url script-request-header https://raw.githubusercontent.com/boolen35/antiad/main/adchepiaopiao.js

[mitm]
hostname = api.revenuecat.com

*************************************/


const boolen35 = {};
const chxm1024 = JSON.parse(typeof $response != "undefined" && $response.body || null);
if (typeof $response == "undefined") {
  delete $request.headers["x-revenuecat-etag"];
  delete $request.headers["X-RevenueCat-ETag"];
  boolen35.headers = $request.headers;
} else if (chxm1024 && chxm1024.subscriber) {
  chxm1024.subscriber.subscriptions = chxm1024.subscriber.subscriptions || {};
  chxm1024.subscriber.entitlement = chxm1024.subscriber.entitlement || {};
  const app = 'cm';const list = {'cm':{name: 'vip', id: 'eticket_3_life'}};
  const data = {
   "Author": "boolen35",
   "Telegram" : "https://t.me/boolen35",
   "warning": "仅供学习，禁止转载或售卖",
   "original_purchase_date": "2022-09-09T09:09:09Z",
   "purchase_date": "2022-09-09T09:09:09Z",
   "ownership_type": "PURCHASED"};
for (const i in list) { if (new RegExp(`^${i}`, `i`).test(app)) {
  chxm1024.subscriber.subscriptions[list[i].id] = data;
  chxm1024.subscriber.entitlements[list[i].name] = JSON.parse(JSON.stringify(data));
  chxm1024.subscriber.entitlements[list[i].name].product_identifier = list[i].id;
                break;
          }
    }
    boolen35.body = JSON.stringify(chxm1024);
}

$done(boolen35);
