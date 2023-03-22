var obj=JSON.parse($request.body),
ad12306={};
"0007"==obj.placementNo?(ad12306.materialsList=[{billMaterialsId:"6491",filePath:"ad12306",creativeType:1}],
ad12306.advertParam={skipTime:1},
ad12306.code="00"):ad12306="G0054"==obj.placementNo?{code:"00",materialsList:[{}]}:{code:"00",message:"无广告返回"},
$done({body:JSON.stringify(ad12306)});
