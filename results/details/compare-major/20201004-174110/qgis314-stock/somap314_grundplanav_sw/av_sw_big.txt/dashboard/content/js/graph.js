/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 2.0, "minX": 0.0, "maxY": 9826.0, "series": [{"data": [[0.0, 2.0], [0.1, 2.0], [0.2, 2.0], [0.3, 2.0], [0.4, 2.0], [0.5, 3.0], [0.6, 3.0], [0.7, 3.0], [0.8, 4.0], [0.9, 4.0], [1.0, 5.0], [1.1, 5.0], [1.2, 7.0], [1.3, 214.0], [1.4, 229.0], [1.5, 241.0], [1.6, 245.0], [1.7, 252.0], [1.8, 262.0], [1.9, 278.0], [2.0, 286.0], [2.1, 305.0], [2.2, 314.0], [2.3, 324.0], [2.4, 332.0], [2.5, 337.0], [2.6, 346.0], [2.7, 351.0], [2.8, 361.0], [2.9, 364.0], [3.0, 374.0], [3.1, 381.0], [3.2, 383.0], [3.3, 387.0], [3.4, 389.0], [3.5, 392.0], [3.6, 393.0], [3.7, 395.0], [3.8, 396.0], [3.9, 399.0], [4.0, 401.0], [4.1, 404.0], [4.2, 405.0], [4.3, 407.0], [4.4, 409.0], [4.5, 410.0], [4.6, 413.0], [4.7, 413.0], [4.8, 414.0], [4.9, 416.0], [5.0, 417.0], [5.1, 419.0], [5.2, 420.0], [5.3, 422.0], [5.4, 423.0], [5.5, 424.0], [5.6, 425.0], [5.7, 426.0], [5.8, 428.0], [5.9, 429.0], [6.0, 429.0], [6.1, 429.0], [6.2, 430.0], [6.3, 431.0], [6.4, 433.0], [6.5, 434.0], [6.6, 435.0], [6.7, 436.0], [6.8, 437.0], [6.9, 438.0], [7.0, 438.0], [7.1, 440.0], [7.2, 441.0], [7.3, 442.0], [7.4, 443.0], [7.5, 444.0], [7.6, 445.0], [7.7, 446.0], [7.8, 448.0], [7.9, 451.0], [8.0, 452.0], [8.1, 453.0], [8.2, 454.0], [8.3, 454.0], [8.4, 456.0], [8.5, 457.0], [8.6, 459.0], [8.7, 460.0], [8.8, 461.0], [8.9, 463.0], [9.0, 464.0], [9.1, 465.0], [9.2, 466.0], [9.3, 466.0], [9.4, 468.0], [9.5, 470.0], [9.6, 471.0], [9.7, 472.0], [9.8, 474.0], [9.9, 476.0], [10.0, 477.0], [10.1, 478.0], [10.2, 481.0], [10.3, 483.0], [10.4, 484.0], [10.5, 485.0], [10.6, 489.0], [10.7, 491.0], [10.8, 492.0], [10.9, 494.0], [11.0, 496.0], [11.1, 497.0], [11.2, 501.0], [11.3, 503.0], [11.4, 505.0], [11.5, 507.0], [11.6, 509.0], [11.7, 512.0], [11.8, 514.0], [11.9, 515.0], [12.0, 516.0], [12.1, 518.0], [12.2, 519.0], [12.3, 522.0], [12.4, 528.0], [12.5, 529.0], [12.6, 530.0], [12.7, 531.0], [12.8, 534.0], [12.9, 535.0], [13.0, 540.0], [13.1, 543.0], [13.2, 544.0], [13.3, 545.0], [13.4, 549.0], [13.5, 551.0], [13.6, 554.0], [13.7, 556.0], [13.8, 559.0], [13.9, 560.0], [14.0, 561.0], [14.1, 563.0], [14.2, 565.0], [14.3, 567.0], [14.4, 568.0], [14.5, 570.0], [14.6, 570.0], [14.7, 572.0], [14.8, 573.0], [14.9, 575.0], [15.0, 578.0], [15.1, 579.0], [15.2, 581.0], [15.3, 584.0], [15.4, 584.0], [15.5, 585.0], [15.6, 587.0], [15.7, 587.0], [15.8, 588.0], [15.9, 589.0], [16.0, 590.0], [16.1, 593.0], [16.2, 593.0], [16.3, 594.0], [16.4, 596.0], [16.5, 597.0], [16.6, 598.0], [16.7, 600.0], [16.8, 600.0], [16.9, 602.0], [17.0, 604.0], [17.1, 605.0], [17.2, 606.0], [17.3, 608.0], [17.4, 610.0], [17.5, 611.0], [17.6, 613.0], [17.7, 614.0], [17.8, 615.0], [17.9, 617.0], [18.0, 619.0], [18.1, 620.0], [18.2, 621.0], [18.3, 622.0], [18.4, 623.0], [18.5, 626.0], [18.6, 627.0], [18.7, 628.0], [18.8, 629.0], [18.9, 629.0], [19.0, 631.0], [19.1, 631.0], [19.2, 633.0], [19.3, 634.0], [19.4, 636.0], [19.5, 636.0], [19.6, 638.0], [19.7, 640.0], [19.8, 641.0], [19.9, 642.0], [20.0, 644.0], [20.1, 644.0], [20.2, 647.0], [20.3, 649.0], [20.4, 650.0], [20.5, 651.0], [20.6, 652.0], [20.7, 653.0], [20.8, 654.0], [20.9, 656.0], [21.0, 658.0], [21.1, 660.0], [21.2, 660.0], [21.3, 661.0], [21.4, 662.0], [21.5, 663.0], [21.6, 665.0], [21.7, 666.0], [21.8, 667.0], [21.9, 668.0], [22.0, 671.0], [22.1, 672.0], [22.2, 674.0], [22.3, 675.0], [22.4, 676.0], [22.5, 677.0], [22.6, 679.0], [22.7, 681.0], [22.8, 682.0], [22.9, 683.0], [23.0, 685.0], [23.1, 686.0], [23.2, 687.0], [23.3, 690.0], [23.4, 692.0], [23.5, 693.0], [23.6, 694.0], [23.7, 696.0], [23.8, 696.0], [23.9, 698.0], [24.0, 699.0], [24.1, 701.0], [24.2, 703.0], [24.3, 703.0], [24.4, 705.0], [24.5, 706.0], [24.6, 707.0], [24.7, 709.0], [24.8, 711.0], [24.9, 712.0], [25.0, 713.0], [25.1, 714.0], [25.2, 716.0], [25.3, 718.0], [25.4, 719.0], [25.5, 720.0], [25.6, 721.0], [25.7, 721.0], [25.8, 723.0], [25.9, 726.0], [26.0, 726.0], [26.1, 728.0], [26.2, 728.0], [26.3, 730.0], [26.4, 731.0], [26.5, 733.0], [26.6, 735.0], [26.7, 736.0], [26.8, 737.0], [26.9, 739.0], [27.0, 740.0], [27.1, 742.0], [27.2, 743.0], [27.3, 745.0], [27.4, 746.0], [27.5, 748.0], [27.6, 751.0], [27.7, 752.0], [27.8, 753.0], [27.9, 754.0], [28.0, 756.0], [28.1, 758.0], [28.2, 760.0], [28.3, 764.0], [28.4, 765.0], [28.5, 767.0], [28.6, 768.0], [28.7, 770.0], [28.8, 772.0], [28.9, 775.0], [29.0, 776.0], [29.1, 777.0], [29.2, 778.0], [29.3, 780.0], [29.4, 783.0], [29.5, 784.0], [29.6, 784.0], [29.7, 786.0], [29.8, 789.0], [29.9, 792.0], [30.0, 795.0], [30.1, 798.0], [30.2, 798.0], [30.3, 801.0], [30.4, 803.0], [30.5, 804.0], [30.6, 807.0], [30.7, 809.0], [30.8, 810.0], [30.9, 811.0], [31.0, 813.0], [31.1, 815.0], [31.2, 816.0], [31.3, 818.0], [31.4, 821.0], [31.5, 823.0], [31.6, 825.0], [31.7, 827.0], [31.8, 829.0], [31.9, 832.0], [32.0, 833.0], [32.1, 836.0], [32.2, 839.0], [32.3, 839.0], [32.4, 840.0], [32.5, 843.0], [32.6, 844.0], [32.7, 845.0], [32.8, 847.0], [32.9, 849.0], [33.0, 849.0], [33.1, 852.0], [33.2, 854.0], [33.3, 855.0], [33.4, 856.0], [33.5, 857.0], [33.6, 858.0], [33.7, 860.0], [33.8, 862.0], [33.9, 864.0], [34.0, 865.0], [34.1, 867.0], [34.2, 872.0], [34.3, 873.0], [34.4, 874.0], [34.5, 876.0], [34.6, 878.0], [34.7, 879.0], [34.8, 883.0], [34.9, 884.0], [35.0, 885.0], [35.1, 887.0], [35.2, 888.0], [35.3, 890.0], [35.4, 893.0], [35.5, 894.0], [35.6, 896.0], [35.7, 897.0], [35.8, 899.0], [35.9, 901.0], [36.0, 902.0], [36.1, 904.0], [36.2, 905.0], [36.3, 907.0], [36.4, 909.0], [36.5, 911.0], [36.6, 912.0], [36.7, 915.0], [36.8, 918.0], [36.9, 920.0], [37.0, 921.0], [37.1, 922.0], [37.2, 924.0], [37.3, 926.0], [37.4, 928.0], [37.5, 929.0], [37.6, 929.0], [37.7, 932.0], [37.8, 933.0], [37.9, 934.0], [38.0, 936.0], [38.1, 937.0], [38.2, 938.0], [38.3, 939.0], [38.4, 940.0], [38.5, 941.0], [38.6, 943.0], [38.7, 944.0], [38.8, 947.0], [38.9, 949.0], [39.0, 950.0], [39.1, 951.0], [39.2, 953.0], [39.3, 956.0], [39.4, 958.0], [39.5, 959.0], [39.6, 960.0], [39.7, 962.0], [39.8, 963.0], [39.9, 964.0], [40.0, 965.0], [40.1, 966.0], [40.2, 967.0], [40.3, 969.0], [40.4, 969.0], [40.5, 971.0], [40.6, 974.0], [40.7, 975.0], [40.8, 976.0], [40.9, 982.0], [41.0, 984.0], [41.1, 986.0], [41.2, 988.0], [41.3, 991.0], [41.4, 993.0], [41.5, 996.0], [41.6, 997.0], [41.7, 1000.0], [41.8, 1002.0], [41.9, 1005.0], [42.0, 1007.0], [42.1, 1010.0], [42.2, 1012.0], [42.3, 1015.0], [42.4, 1016.0], [42.5, 1018.0], [42.6, 1020.0], [42.7, 1021.0], [42.8, 1023.0], [42.9, 1025.0], [43.0, 1027.0], [43.1, 1028.0], [43.2, 1030.0], [43.3, 1033.0], [43.4, 1034.0], [43.5, 1037.0], [43.6, 1039.0], [43.7, 1041.0], [43.8, 1044.0], [43.9, 1045.0], [44.0, 1046.0], [44.1, 1047.0], [44.2, 1049.0], [44.3, 1051.0], [44.4, 1053.0], [44.5, 1055.0], [44.6, 1057.0], [44.7, 1058.0], [44.8, 1060.0], [44.9, 1062.0], [45.0, 1064.0], [45.1, 1065.0], [45.2, 1068.0], [45.3, 1070.0], [45.4, 1071.0], [45.5, 1073.0], [45.6, 1075.0], [45.7, 1076.0], [45.8, 1077.0], [45.9, 1079.0], [46.0, 1080.0], [46.1, 1083.0], [46.2, 1085.0], [46.3, 1088.0], [46.4, 1090.0], [46.5, 1092.0], [46.6, 1094.0], [46.7, 1095.0], [46.8, 1097.0], [46.9, 1098.0], [47.0, 1100.0], [47.1, 1102.0], [47.2, 1103.0], [47.3, 1105.0], [47.4, 1108.0], [47.5, 1110.0], [47.6, 1113.0], [47.7, 1115.0], [47.8, 1119.0], [47.9, 1121.0], [48.0, 1122.0], [48.1, 1123.0], [48.2, 1125.0], [48.3, 1126.0], [48.4, 1127.0], [48.5, 1129.0], [48.6, 1132.0], [48.7, 1135.0], [48.8, 1136.0], [48.9, 1140.0], [49.0, 1141.0], [49.1, 1144.0], [49.2, 1146.0], [49.3, 1148.0], [49.4, 1148.0], [49.5, 1150.0], [49.6, 1153.0], [49.7, 1156.0], [49.8, 1158.0], [49.9, 1159.0], [50.0, 1163.0], [50.1, 1164.0], [50.2, 1165.0], [50.3, 1167.0], [50.4, 1168.0], [50.5, 1170.0], [50.6, 1172.0], [50.7, 1173.0], [50.8, 1174.0], [50.9, 1176.0], [51.0, 1179.0], [51.1, 1182.0], [51.2, 1184.0], [51.3, 1185.0], [51.4, 1186.0], [51.5, 1189.0], [51.6, 1192.0], [51.7, 1194.0], [51.8, 1197.0], [51.9, 1200.0], [52.0, 1204.0], [52.1, 1206.0], [52.2, 1207.0], [52.3, 1209.0], [52.4, 1210.0], [52.5, 1213.0], [52.6, 1215.0], [52.7, 1217.0], [52.8, 1218.0], [52.9, 1219.0], [53.0, 1222.0], [53.1, 1224.0], [53.2, 1226.0], [53.3, 1229.0], [53.4, 1230.0], [53.5, 1232.0], [53.6, 1234.0], [53.7, 1237.0], [53.8, 1240.0], [53.9, 1242.0], [54.0, 1245.0], [54.1, 1246.0], [54.2, 1249.0], [54.3, 1251.0], [54.4, 1252.0], [54.5, 1253.0], [54.6, 1256.0], [54.7, 1259.0], [54.8, 1261.0], [54.9, 1263.0], [55.0, 1265.0], [55.1, 1268.0], [55.2, 1269.0], [55.3, 1270.0], [55.4, 1274.0], [55.5, 1276.0], [55.6, 1279.0], [55.7, 1280.0], [55.8, 1282.0], [55.9, 1283.0], [56.0, 1284.0], [56.1, 1284.0], [56.2, 1289.0], [56.3, 1290.0], [56.4, 1292.0], [56.5, 1295.0], [56.6, 1297.0], [56.7, 1298.0], [56.8, 1302.0], [56.9, 1303.0], [57.0, 1305.0], [57.1, 1306.0], [57.2, 1308.0], [57.3, 1309.0], [57.4, 1310.0], [57.5, 1311.0], [57.6, 1314.0], [57.7, 1316.0], [57.8, 1316.0], [57.9, 1318.0], [58.0, 1320.0], [58.1, 1324.0], [58.2, 1326.0], [58.3, 1329.0], [58.4, 1330.0], [58.5, 1333.0], [58.6, 1335.0], [58.7, 1337.0], [58.8, 1341.0], [58.9, 1342.0], [59.0, 1342.0], [59.1, 1347.0], [59.2, 1349.0], [59.3, 1351.0], [59.4, 1353.0], [59.5, 1358.0], [59.6, 1362.0], [59.7, 1363.0], [59.8, 1364.0], [59.9, 1366.0], [60.0, 1367.0], [60.1, 1369.0], [60.2, 1372.0], [60.3, 1375.0], [60.4, 1378.0], [60.5, 1379.0], [60.6, 1381.0], [60.7, 1383.0], [60.8, 1384.0], [60.9, 1385.0], [61.0, 1387.0], [61.1, 1389.0], [61.2, 1391.0], [61.3, 1393.0], [61.4, 1395.0], [61.5, 1397.0], [61.6, 1399.0], [61.7, 1401.0], [61.8, 1403.0], [61.9, 1404.0], [62.0, 1406.0], [62.1, 1410.0], [62.2, 1412.0], [62.3, 1413.0], [62.4, 1415.0], [62.5, 1416.0], [62.6, 1417.0], [62.7, 1419.0], [62.8, 1420.0], [62.9, 1422.0], [63.0, 1424.0], [63.1, 1426.0], [63.2, 1430.0], [63.3, 1434.0], [63.4, 1435.0], [63.5, 1436.0], [63.6, 1437.0], [63.7, 1440.0], [63.8, 1443.0], [63.9, 1444.0], [64.0, 1446.0], [64.1, 1449.0], [64.2, 1450.0], [64.3, 1452.0], [64.4, 1455.0], [64.5, 1457.0], [64.6, 1458.0], [64.7, 1461.0], [64.8, 1462.0], [64.9, 1464.0], [65.0, 1466.0], [65.1, 1468.0], [65.2, 1471.0], [65.3, 1473.0], [65.4, 1475.0], [65.5, 1476.0], [65.6, 1477.0], [65.7, 1480.0], [65.8, 1483.0], [65.9, 1485.0], [66.0, 1486.0], [66.1, 1489.0], [66.2, 1490.0], [66.3, 1492.0], [66.4, 1495.0], [66.5, 1496.0], [66.6, 1497.0], [66.7, 1499.0], [66.8, 1502.0], [66.9, 1504.0], [67.0, 1506.0], [67.1, 1509.0], [67.2, 1511.0], [67.3, 1514.0], [67.4, 1516.0], [67.5, 1517.0], [67.6, 1521.0], [67.7, 1524.0], [67.8, 1525.0], [67.9, 1529.0], [68.0, 1529.0], [68.1, 1532.0], [68.2, 1534.0], [68.3, 1537.0], [68.4, 1538.0], [68.5, 1540.0], [68.6, 1542.0], [68.7, 1545.0], [68.8, 1546.0], [68.9, 1547.0], [69.0, 1552.0], [69.1, 1554.0], [69.2, 1555.0], [69.3, 1557.0], [69.4, 1560.0], [69.5, 1561.0], [69.6, 1565.0], [69.7, 1568.0], [69.8, 1569.0], [69.9, 1570.0], [70.0, 1574.0], [70.1, 1575.0], [70.2, 1579.0], [70.3, 1580.0], [70.4, 1582.0], [70.5, 1584.0], [70.6, 1586.0], [70.7, 1587.0], [70.8, 1590.0], [70.9, 1595.0], [71.0, 1599.0], [71.1, 1601.0], [71.2, 1605.0], [71.3, 1608.0], [71.4, 1609.0], [71.5, 1611.0], [71.6, 1615.0], [71.7, 1617.0], [71.8, 1619.0], [71.9, 1622.0], [72.0, 1624.0], [72.1, 1627.0], [72.2, 1631.0], [72.3, 1631.0], [72.4, 1634.0], [72.5, 1636.0], [72.6, 1637.0], [72.7, 1640.0], [72.8, 1642.0], [72.9, 1644.0], [73.0, 1646.0], [73.1, 1648.0], [73.2, 1650.0], [73.3, 1652.0], [73.4, 1655.0], [73.5, 1657.0], [73.6, 1659.0], [73.7, 1661.0], [73.8, 1664.0], [73.9, 1666.0], [74.0, 1668.0], [74.1, 1671.0], [74.2, 1673.0], [74.3, 1674.0], [74.4, 1678.0], [74.5, 1681.0], [74.6, 1683.0], [74.7, 1686.0], [74.8, 1688.0], [74.9, 1691.0], [75.0, 1692.0], [75.1, 1695.0], [75.2, 1697.0], [75.3, 1701.0], [75.4, 1704.0], [75.5, 1705.0], [75.6, 1707.0], [75.7, 1709.0], [75.8, 1713.0], [75.9, 1717.0], [76.0, 1718.0], [76.1, 1720.0], [76.2, 1722.0], [76.3, 1724.0], [76.4, 1726.0], [76.5, 1727.0], [76.6, 1728.0], [76.7, 1730.0], [76.8, 1731.0], [76.9, 1734.0], [77.0, 1736.0], [77.1, 1741.0], [77.2, 1742.0], [77.3, 1744.0], [77.4, 1747.0], [77.5, 1748.0], [77.6, 1754.0], [77.7, 1761.0], [77.8, 1762.0], [77.9, 1769.0], [78.0, 1771.0], [78.1, 1773.0], [78.2, 1777.0], [78.3, 1780.0], [78.4, 1785.0], [78.5, 1787.0], [78.6, 1789.0], [78.7, 1794.0], [78.8, 1798.0], [78.9, 1801.0], [79.0, 1802.0], [79.1, 1809.0], [79.2, 1812.0], [79.3, 1817.0], [79.4, 1821.0], [79.5, 1825.0], [79.6, 1828.0], [79.7, 1832.0], [79.8, 1835.0], [79.9, 1840.0], [80.0, 1844.0], [80.1, 1845.0], [80.2, 1848.0], [80.3, 1849.0], [80.4, 1853.0], [80.5, 1856.0], [80.6, 1859.0], [80.7, 1865.0], [80.8, 1870.0], [80.9, 1875.0], [81.0, 1878.0], [81.1, 1881.0], [81.2, 1884.0], [81.3, 1887.0], [81.4, 1890.0], [81.5, 1893.0], [81.6, 1898.0], [81.7, 1903.0], [81.8, 1909.0], [81.9, 1911.0], [82.0, 1914.0], [82.1, 1916.0], [82.2, 1919.0], [82.3, 1922.0], [82.4, 1930.0], [82.5, 1934.0], [82.6, 1938.0], [82.7, 1940.0], [82.8, 1944.0], [82.9, 1945.0], [83.0, 1950.0], [83.1, 1954.0], [83.2, 1957.0], [83.3, 1959.0], [83.4, 1963.0], [83.5, 1964.0], [83.6, 1966.0], [83.7, 1969.0], [83.8, 1973.0], [83.9, 1974.0], [84.0, 1979.0], [84.1, 1983.0], [84.2, 1993.0], [84.3, 1999.0], [84.4, 2001.0], [84.5, 2003.0], [84.6, 2011.0], [84.7, 2017.0], [84.8, 2019.0], [84.9, 2024.0], [85.0, 2029.0], [85.1, 2032.0], [85.2, 2038.0], [85.3, 2041.0], [85.4, 2048.0], [85.5, 2053.0], [85.6, 2056.0], [85.7, 2060.0], [85.8, 2064.0], [85.9, 2070.0], [86.0, 2076.0], [86.1, 2083.0], [86.2, 2088.0], [86.3, 2090.0], [86.4, 2093.0], [86.5, 2100.0], [86.6, 2105.0], [86.7, 2111.0], [86.8, 2120.0], [86.9, 2123.0], [87.0, 2125.0], [87.1, 2128.0], [87.2, 2135.0], [87.3, 2143.0], [87.4, 2146.0], [87.5, 2147.0], [87.6, 2150.0], [87.7, 2161.0], [87.8, 2168.0], [87.9, 2172.0], [88.0, 2181.0], [88.1, 2185.0], [88.2, 2189.0], [88.3, 2195.0], [88.4, 2201.0], [88.5, 2205.0], [88.6, 2211.0], [88.7, 2214.0], [88.8, 2220.0], [88.9, 2224.0], [89.0, 2231.0], [89.1, 2237.0], [89.2, 2242.0], [89.3, 2249.0], [89.4, 2256.0], [89.5, 2261.0], [89.6, 2266.0], [89.7, 2269.0], [89.8, 2274.0], [89.9, 2278.0], [90.0, 2285.0], [90.1, 2289.0], [90.2, 2293.0], [90.3, 2302.0], [90.4, 2308.0], [90.5, 2313.0], [90.6, 2317.0], [90.7, 2324.0], [90.8, 2329.0], [90.9, 2334.0], [91.0, 2340.0], [91.1, 2346.0], [91.2, 2358.0], [91.3, 2361.0], [91.4, 2375.0], [91.5, 2377.0], [91.6, 2382.0], [91.7, 2388.0], [91.8, 2395.0], [91.9, 2403.0], [92.0, 2419.0], [92.1, 2423.0], [92.2, 2436.0], [92.3, 2445.0], [92.4, 2452.0], [92.5, 2459.0], [92.6, 2467.0], [92.7, 2476.0], [92.8, 2486.0], [92.9, 2496.0], [93.0, 2505.0], [93.1, 2512.0], [93.2, 2521.0], [93.3, 2534.0], [93.4, 2537.0], [93.5, 2544.0], [93.6, 2552.0], [93.7, 2564.0], [93.8, 2574.0], [93.9, 2585.0], [94.0, 2598.0], [94.1, 2608.0], [94.2, 2623.0], [94.3, 2633.0], [94.4, 2637.0], [94.5, 2645.0], [94.6, 2657.0], [94.7, 2663.0], [94.8, 2676.0], [94.9, 2695.0], [95.0, 2705.0], [95.1, 2731.0], [95.2, 2739.0], [95.3, 2750.0], [95.4, 2767.0], [95.5, 2796.0], [95.6, 2818.0], [95.7, 2832.0], [95.8, 2856.0], [95.9, 2860.0], [96.0, 2870.0], [96.1, 2891.0], [96.2, 2917.0], [96.3, 2926.0], [96.4, 2937.0], [96.5, 2948.0], [96.6, 2990.0], [96.7, 3010.0], [96.8, 3018.0], [96.9, 3033.0], [97.0, 3068.0], [97.1, 3085.0], [97.2, 3129.0], [97.3, 3154.0], [97.4, 3176.0], [97.5, 3205.0], [97.6, 3229.0], [97.7, 3248.0], [97.8, 3315.0], [97.9, 3356.0], [98.0, 3395.0], [98.1, 3408.0], [98.2, 3431.0], [98.3, 3482.0], [98.4, 3508.0], [98.5, 3541.0], [98.6, 3606.0], [98.7, 3653.0], [98.8, 3712.0], [98.9, 3800.0], [99.0, 3845.0], [99.1, 3909.0], [99.2, 4024.0], [99.3, 4097.0], [99.4, 4186.0], [99.5, 4519.0], [99.6, 4788.0], [99.7, 4885.0], [99.8, 5544.0], [99.9, 6123.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 394.0, "series": [{"data": [[0.0, 65.0], [600.0, 394.0], [700.0, 331.0], [800.0, 299.0], [900.0, 313.0], [1000.0, 284.0], [1100.0, 263.0], [1200.0, 259.0], [1300.0, 261.0], [1400.0, 273.0], [1500.0, 231.0], [1600.0, 224.0], [1700.0, 195.0], [1800.0, 147.0], [1900.0, 145.0], [2000.0, 116.0], [2100.0, 101.0], [2200.0, 101.0], [2300.0, 84.0], [2400.0, 59.0], [2500.0, 58.0], [2600.0, 51.0], [2700.0, 28.0], [2800.0, 33.0], [2900.0, 28.0], [3000.0, 28.0], [3100.0, 17.0], [3200.0, 15.0], [3300.0, 14.0], [3400.0, 18.0], [3500.0, 12.0], [3700.0, 7.0], [3600.0, 9.0], [3800.0, 10.0], [3900.0, 3.0], [4000.0, 9.0], [4200.0, 2.0], [4100.0, 6.0], [4300.0, 1.0], [4600.0, 2.0], [4500.0, 2.0], [4400.0, 1.0], [4700.0, 3.0], [4800.0, 4.0], [5100.0, 2.0], [4900.0, 2.0], [5500.0, 3.0], [5600.0, 1.0], [5700.0, 1.0], [6000.0, 1.0], [6100.0, 1.0], [6700.0, 1.0], [6800.0, 1.0], [7000.0, 1.0], [8800.0, 1.0], [9800.0, 1.0], [100.0, 2.0], [200.0, 43.0], [300.0, 99.0], [400.0, 386.0], [500.0, 296.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 9800.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 155.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2925.0, "series": [{"data": [[0.0, 502.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 2925.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 1766.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 155.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 19.744966442953015, "minX": 1.60183524E12, "maxY": 20.0, "series": [{"data": [[1.6018353E12, 20.0], [1.60183548E12, 20.0], [1.60183554E12, 19.744966442953015], [1.60183536E12, 20.0], [1.60183542E12, 20.0], [1.60183524E12, 20.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60183554E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 856.0, "minX": 1.0, "maxY": 3692.0, "series": [{"data": [[8.0, 1404.0], [2.0, 2918.0], [9.0, 1163.0], [10.0, 869.0], [11.0, 3193.0], [12.0, 975.0], [3.0, 3692.0], [13.0, 1303.0], [14.0, 1586.0], [15.0, 1397.0], [16.0, 856.0], [4.0, 1753.0], [1.0, 2634.0], [17.0, 3082.0], [18.0, 1651.0], [19.0, 1064.0], [20.0, 1300.5843497842009], [5.0, 3167.0], [6.0, 3431.0], [7.0, 2037.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[19.964472700074797, 1303.10190725505]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 20.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 5664.583333333333, "minX": 1.60183524E12, "maxY": 4683770.716666667, "series": [{"data": [[1.6018353E12, 4683770.716666667], [1.60183548E12, 4566067.533333333], [1.60183554E12, 3212741.783333333], [1.60183536E12, 4135595.6], [1.60183542E12, 3642790.316666667], [1.60183524E12, 3732031.8333333335]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6018353E12, 7706.35], [1.60183548E12, 7705.433333333333], [1.60183554E12, 5664.583333333333], [1.60183536E12, 6791.25], [1.60183542E12, 6339.383333333333], [1.60183524E12, 6014.75]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60183554E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 1173.4525691699605, "minX": 1.60183524E12, "maxY": 1442.6634382566583, "series": [{"data": [[1.6018353E12, 1173.4525691699605], [1.60183548E12, 1197.3796203796207], [1.60183554E12, 1329.5140939597313], [1.60183536E12, 1348.8312710911123], [1.60183542E12, 1373.3017142857132], [1.60183524E12, 1442.6634382566583]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60183554E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 1133.8992094861653, "minX": 1.60183524E12, "maxY": 1386.0883777239694, "series": [{"data": [[1.6018353E12, 1133.8992094861653], [1.60183548E12, 1159.264735264736], [1.60183554E12, 1292.8496644295287], [1.60183536E12, 1308.8627671541062], [1.60183542E12, 1336.7748571428576], [1.60183524E12, 1386.0883777239694]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60183554E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 0.025974025974025986, "minX": 1.60183524E12, "maxY": 0.4104116222760294, "series": [{"data": [[1.6018353E12, 0.02865612648221341], [1.60183548E12, 0.025974025974025986], [1.60183554E12, 0.04026845637583895], [1.60183536E12, 0.030371203599550006], [1.60183542E12, 0.02628571428571427], [1.60183524E12, 0.4104116222760294]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60183554E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 212.0, "minX": 1.60183524E12, "maxY": 9826.0, "series": [{"data": [[1.6018353E12, 4190.0], [1.60183548E12, 3895.0], [1.60183554E12, 4860.0], [1.60183536E12, 5622.0], [1.60183542E12, 9826.0], [1.60183524E12, 6861.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6018353E12, 289.5419893097877], [1.60183548E12, 299.54399866104126], [1.60183554E12, 369.74199102640154], [1.60183536E12, 365.0], [1.60183542E12, 413.5979993748665], [1.60183524E12, 325.4769978415966]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6018353E12, 311.66760054588315], [1.60183548E12, 304.5984005355835], [1.60183554E12, 388.0], [1.60183536E12, 372.83120100021364], [1.60183542E12, 414.65260008335116], [1.60183524E12, 336.7264025115967]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6018353E12, 309.377999317646], [1.60183548E12, 302.35199933052064], [1.60183554E12, 388.0], [1.60183536E12, 368.63599874973295], [1.60183542E12, 414.30299989581107], [1.60183524E12, 330.0034989207983]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.6018353E12, 212.0], [1.60183548E12, 214.0], [1.60183554E12, 244.0], [1.60183536E12, 241.0], [1.60183542E12, 354.0], [1.60183524E12, 250.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6018353E12, 1046.0], [1.60183548E12, 1176.0], [1.60183554E12, 1167.0], [1.60183536E12, 1265.0], [1.60183542E12, 1174.0], [1.60183524E12, 1240.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60183554E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 3.0, "minX": 2.0, "maxY": 3167.0, "series": [{"data": [[33.0, 596.0], [2.0, 2776.0], [35.0, 632.0], [34.0, 642.0], [43.0, 492.0], [3.0, 3167.0], [50.0, 643.5], [6.0, 1589.5], [7.0, 1806.0], [8.0, 1673.5], [9.0, 1614.0], [10.0, 1656.5], [11.0, 1517.0], [12.0, 1395.0], [13.0, 1379.5], [14.0, 1245.5], [15.0, 1302.0], [16.0, 1233.5], [17.0, 1104.0], [18.0, 1094.0], [19.0, 1137.5], [20.0, 1058.0], [21.0, 765.0], [22.0, 811.0], [23.0, 719.0], [24.0, 776.0], [25.0, 844.0], [26.0, 660.5], [27.0, 544.0], [28.0, 679.5], [29.0, 636.0], [30.0, 653.0], [31.0, 658.5]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[33.0, 241.0], [43.0, 3.0], [11.0, 459.5], [12.0, 1180.0], [50.0, 3.0], [13.0, 1165.0], [14.0, 817.5], [15.0, 550.0], [17.0, 736.0], [18.0, 891.0], [19.0, 210.0], [20.0, 722.5], [22.0, 643.5], [24.0, 1375.0], [27.0, 858.5], [28.0, 2241.0], [30.0, 4.5], [31.0, 6.5]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 50.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 2.5, "minX": 2.0, "maxY": 3160.0, "series": [{"data": [[33.0, 594.5], [2.0, 2651.5], [35.0, 629.0], [34.0, 641.5], [43.0, 490.0], [3.0, 3160.0], [50.0, 642.0], [6.0, 1486.0], [7.0, 1754.0], [8.0, 1596.5], [9.0, 1585.0], [10.0, 1627.0], [11.0, 1416.0], [12.0, 1360.0], [13.0, 1343.0], [14.0, 1205.5], [15.0, 1260.0], [16.0, 1207.5], [17.0, 1077.0], [18.0, 1076.0], [19.0, 1105.0], [20.0, 1037.0], [21.0, 764.5], [22.0, 809.0], [23.0, 713.0], [24.0, 753.0], [25.0, 838.0], [26.0, 657.5], [27.0, 542.0], [28.0, 674.0], [29.0, 635.0], [30.0, 650.0], [31.0, 657.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[33.0, 241.0], [43.0, 3.0], [11.0, 459.5], [12.0, 1179.5], [50.0, 2.5], [13.0, 1165.0], [14.0, 817.5], [15.0, 550.0], [17.0, 736.0], [18.0, 891.0], [19.0, 210.0], [20.0, 722.5], [22.0, 643.5], [24.0, 1375.0], [27.0, 858.5], [28.0, 2241.0], [30.0, 4.0], [31.0, 6.5]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 50.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 0.13333333333333333, "minX": 1.60183518E12, "maxY": 16.866666666666667, "series": [{"data": [[1.6018353E12, 16.866666666666667], [1.60183518E12, 0.13333333333333333], [1.60183548E12, 16.683333333333334], [1.60183554E12, 12.083333333333334], [1.60183536E12, 14.816666666666666], [1.60183542E12, 14.583333333333334], [1.60183524E12, 13.966666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60183554E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.60183524E12, "maxY": 15.883333333333333, "series": [{"data": [[1.6018353E12, 15.883333333333333], [1.60183548E12, 15.583333333333334], [1.60183554E12, 12.283333333333333], [1.60183536E12, 14.55], [1.60183542E12, 14.55], [1.60183524E12, 13.7]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.6018353E12, 0.9833333333333333], [1.60183548E12, 1.1], [1.60183554E12, 0.13333333333333333], [1.60183536E12, 0.26666666666666666], [1.60183542E12, 0.03333333333333333], [1.60183524E12, 0.06666666666666667]], "isOverall": false, "label": "400", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60183554E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.60183524E12, "maxY": 15.883333333333333, "series": [{"data": [[1.6018353E12, 15.883333333333333], [1.60183548E12, 15.583333333333334], [1.60183554E12, 12.283333333333333], [1.60183536E12, 14.55], [1.60183542E12, 14.55], [1.60183524E12, 13.7]], "isOverall": false, "label": "HTTP Request-success", "isController": false}, {"data": [[1.6018353E12, 0.9833333333333333], [1.60183548E12, 1.1], [1.60183554E12, 0.13333333333333333], [1.60183536E12, 0.26666666666666666], [1.60183542E12, 0.03333333333333333], [1.60183524E12, 0.06666666666666667]], "isOverall": false, "label": "HTTP Request-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60183554E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.60183524E12, "maxY": 15.883333333333333, "series": [{"data": [[1.6018353E12, 15.883333333333333], [1.60183548E12, 15.583333333333334], [1.60183554E12, 12.283333333333333], [1.60183536E12, 14.55], [1.60183542E12, 14.55], [1.60183524E12, 13.7]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.6018353E12, 0.9833333333333333], [1.60183548E12, 1.1], [1.60183554E12, 0.13333333333333333], [1.60183536E12, 0.26666666666666666], [1.60183542E12, 0.03333333333333333], [1.60183524E12, 0.06666666666666667]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60183554E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}
