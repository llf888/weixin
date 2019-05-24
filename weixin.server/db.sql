SET names utf8;
CREATE DATABASE foot charset=utf8;
use foot;
CREATE table home(
  tid int primary key auto_increment,
  img varchar(50),
  title varchar(50),
  tprice decimal(5,1),
  dprice decimal(5,2),
  sub varchar(10)
);
insert into home values(null,"http://127.0.0.1:3000/img/bg.jpg","超值拼团","","","");
insert into home values(null,"http://127.0.0.1:3000/img/s1.jpg","意大利牛排","15.9","55.88","免费配送");
insert into home values(null,"http://127.0.0.1:3000/img/s2.jpg","糖醋排骨","12.7","35.88","1元配送");
insert into home values(null,"http://127.0.0.1:3000/img/s3.jpg","大锅煎饺","25.9","45.88","免费配送");
insert into home values(null,"http://127.0.0.1:3000/img/s4.jpg","海鲜寿司","35.9","75.88","免费配送");

CREATE table choose(
  cid int primary key auto_increment,
  img1 varchar(255),
  img2 varchar(255),
  sub varchar(10),
  title varchar(20),
  according varchar(50)
);
insert into choose values(null,"http://127.0.0.1:3000/img/x1.jpg","http://127.0.0.1:3000/img/d1.jpg","4减4","麻辣小龙虾","根据你吃过的店推荐");
insert into choose values(null,"http://127.0.0.1:3000/img/x2.jpg","http://127.0.0.1:3000/img/d2.jpg","24减8","豆角烧茄子","根据你吃过的店推荐");
insert into choose values(null,"http://127.0.0.1:3000/img/x3.jpg","http://127.0.0.1:3000/img/d3.jpg","12减4","意大利拉面","销量排行第三");
insert into choose values(null,"http://127.0.0.1:3000/img/x4.jpg","http://127.0.0.1:3000/img/d4.jpg","40减10","韭菜鸡蛋水饺","根据你吃过的店推荐");

CREATE table list(
  lid int primary key auto_increment,
  img varchar(255),
  title varchar(255),
  grade decimal(2,1),
  count int,
  km  int,
  fen  int,
  start int,
  song decimal(2,1),
  tit varchar(255),
  t1 varchar(255),
  t2 varchar(255),
  t3 varchar(255)
);
insert into list values(null,"http://127.0.0.1:3000/img/l1.jpg","胖哥俩肉蟹煲(店铺1)",4.5,1555,1900,52,15,5,"郑州本帮浙江才人气第3名","80减32","首单减13","");
insert into list values(null,"http://127.0.0.1:3000/img/l1.jpg","胖哥俩肉蟹煲(店铺2)",4.0,1205,190,12,15,5,"郑州本帮浙江才人气第3名","80减32","首单减13","支持自取");
insert into list values(null,"http://127.0.0.1:3000/img/l1.jpg","胖哥俩肉蟹煲(店铺3)",4.5,1555,1900,52,15,5,"郑州本帮浙江才人气第3名","80减32","首单减13","");
insert into list values(null,"http://127.0.0.1:3000/img/l1.jpg","胖哥俩肉蟹煲(店铺4)",4.5,1555,1900,52,15,5,"郑州本帮浙江才人气第3名","80减32","首单减13","");
insert into list values(null,"http://127.0.0.1:3000/img/l1.jpg","胖哥俩肉蟹煲(店铺5)",4.7,1555,1900,52,15,5,"郑州本帮浙江才人气第3名","80减32","首单减13","");
insert into list values(null,"http://127.0.0.1:3000/img/l1.jpg","胖哥俩肉蟹煲(店铺6)",4.5,1555,1900,52,15,5,"郑州本帮浙江才人气第3名","80减32","首单减13","");
insert into list values(null,"http://127.0.0.1:3000/img/l1.jpg","胖哥俩肉蟹煲(店铺7)",4.6,1555,1900,52,15,5,"郑州本帮浙江才人气第3名","80减32","首单减13","");
insert into list values(null,"http://127.0.0.1:3000/img/l1.jpg","胖哥俩肉蟹煲(店铺8)",4.5,1555,1900,52,15,5,"郑州本帮浙江才人气第3名","80减32","首单减13","");
insert into list values(null,"http://127.0.0.1:3000/img/l1.jpg","胖哥俩肉蟹煲(店铺9)",4.9,1555,1900,52,15,5,"郑州本帮浙江才人气第3名","80减32","首单减13","");
insert into list values(null,"http://127.0.0.1:3000/img/l1.jpg","胖哥俩肉蟹煲(店铺10)",4.5,1555,1900,52,15,5,"郑州本帮浙江才人气第3名","80减32","首单减13","");
insert into list values(null,"http://127.0.0.1:3000/img/l1.jpg","胖哥俩肉蟹煲(店铺11)",4.8,1555,1900,52,15,5,"郑州本帮浙江才人气第3名","80减32","首单减13","");
insert into list values(null,"http://127.0.0.1:3000/img/l1.jpg","胖哥俩肉蟹煲(店铺12)",4.5,1555,1900,52,15,5,"郑州本帮浙江才人气第3名","80减32","首单减13","");