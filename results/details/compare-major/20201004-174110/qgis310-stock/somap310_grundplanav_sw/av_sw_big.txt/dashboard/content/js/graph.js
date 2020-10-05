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
        data: {"result": {"minY": 2.0, "minX": 0.0, "maxY": 9203.0, "series": [{"data": [[0.0, 2.0], [0.1, 2.0], [0.2, 3.0], [0.3, 3.0], [0.4, 3.0], [0.5, 3.0], [0.6, 3.0], [0.7, 4.0], [0.8, 4.0], [0.9, 4.0], [1.0, 4.0], [1.1, 5.0], [1.2, 182.0], [1.3, 202.0], [1.4, 217.0], [1.5, 224.0], [1.6, 229.0], [1.7, 232.0], [1.8, 238.0], [1.9, 242.0], [2.0, 253.0], [2.1, 265.0], [2.2, 273.0], [2.3, 285.0], [2.4, 293.0], [2.5, 306.0], [2.6, 311.0], [2.7, 317.0], [2.8, 321.0], [2.9, 335.0], [3.0, 339.0], [3.1, 347.0], [3.2, 354.0], [3.3, 359.0], [3.4, 365.0], [3.5, 368.0], [3.6, 369.0], [3.7, 370.0], [3.8, 372.0], [3.9, 374.0], [4.0, 376.0], [4.1, 377.0], [4.2, 378.0], [4.3, 380.0], [4.4, 382.0], [4.5, 383.0], [4.6, 385.0], [4.7, 386.0], [4.8, 388.0], [4.9, 390.0], [5.0, 391.0], [5.1, 392.0], [5.2, 393.0], [5.3, 394.0], [5.4, 395.0], [5.5, 397.0], [5.6, 398.0], [5.7, 399.0], [5.8, 401.0], [5.9, 403.0], [6.0, 404.0], [6.1, 405.0], [6.2, 406.0], [6.3, 407.0], [6.4, 408.0], [6.5, 410.0], [6.6, 412.0], [6.7, 414.0], [6.8, 415.0], [6.9, 417.0], [7.0, 419.0], [7.1, 420.0], [7.2, 422.0], [7.3, 423.0], [7.4, 424.0], [7.5, 425.0], [7.6, 426.0], [7.7, 428.0], [7.8, 429.0], [7.9, 431.0], [8.0, 433.0], [8.1, 435.0], [8.2, 436.0], [8.3, 438.0], [8.4, 439.0], [8.5, 440.0], [8.6, 441.0], [8.7, 443.0], [8.8, 444.0], [8.9, 445.0], [9.0, 447.0], [9.1, 447.0], [9.2, 449.0], [9.3, 449.0], [9.4, 451.0], [9.5, 453.0], [9.6, 455.0], [9.7, 458.0], [9.8, 460.0], [9.9, 462.0], [10.0, 464.0], [10.1, 466.0], [10.2, 467.0], [10.3, 469.0], [10.4, 471.0], [10.5, 473.0], [10.6, 474.0], [10.7, 476.0], [10.8, 477.0], [10.9, 479.0], [11.0, 481.0], [11.1, 483.0], [11.2, 485.0], [11.3, 487.0], [11.4, 489.0], [11.5, 491.0], [11.6, 493.0], [11.7, 495.0], [11.8, 498.0], [11.9, 499.0], [12.0, 502.0], [12.1, 504.0], [12.2, 506.0], [12.3, 512.0], [12.4, 514.0], [12.5, 515.0], [12.6, 518.0], [12.7, 519.0], [12.8, 521.0], [12.9, 522.0], [13.0, 523.0], [13.1, 527.0], [13.2, 527.0], [13.3, 528.0], [13.4, 530.0], [13.5, 531.0], [13.6, 533.0], [13.7, 533.0], [13.8, 535.0], [13.9, 536.0], [14.0, 538.0], [14.1, 540.0], [14.2, 541.0], [14.3, 543.0], [14.4, 544.0], [14.5, 546.0], [14.6, 547.0], [14.7, 549.0], [14.8, 550.0], [14.9, 551.0], [15.0, 553.0], [15.1, 555.0], [15.2, 556.0], [15.3, 557.0], [15.4, 559.0], [15.5, 560.0], [15.6, 562.0], [15.7, 563.0], [15.8, 565.0], [15.9, 566.0], [16.0, 567.0], [16.1, 570.0], [16.2, 571.0], [16.3, 572.0], [16.4, 573.0], [16.5, 574.0], [16.6, 575.0], [16.7, 576.0], [16.8, 577.0], [16.9, 578.0], [17.0, 578.0], [17.1, 579.0], [17.2, 580.0], [17.3, 581.0], [17.4, 582.0], [17.5, 583.0], [17.6, 585.0], [17.7, 587.0], [17.8, 588.0], [17.9, 589.0], [18.0, 590.0], [18.1, 591.0], [18.2, 592.0], [18.3, 593.0], [18.4, 593.0], [18.5, 594.0], [18.6, 595.0], [18.7, 596.0], [18.8, 598.0], [18.9, 598.0], [19.0, 599.0], [19.1, 600.0], [19.2, 601.0], [19.3, 603.0], [19.4, 604.0], [19.5, 606.0], [19.6, 607.0], [19.7, 609.0], [19.8, 610.0], [19.9, 613.0], [20.0, 613.0], [20.1, 615.0], [20.2, 617.0], [20.3, 617.0], [20.4, 617.0], [20.5, 620.0], [20.6, 621.0], [20.7, 623.0], [20.8, 624.0], [20.9, 625.0], [21.0, 627.0], [21.1, 628.0], [21.2, 628.0], [21.3, 629.0], [21.4, 630.0], [21.5, 631.0], [21.6, 633.0], [21.7, 635.0], [21.8, 636.0], [21.9, 637.0], [22.0, 639.0], [22.1, 641.0], [22.2, 642.0], [22.3, 644.0], [22.4, 645.0], [22.5, 646.0], [22.6, 648.0], [22.7, 650.0], [22.8, 652.0], [22.9, 654.0], [23.0, 657.0], [23.1, 658.0], [23.2, 659.0], [23.3, 662.0], [23.4, 664.0], [23.5, 665.0], [23.6, 666.0], [23.7, 667.0], [23.8, 669.0], [23.9, 671.0], [24.0, 672.0], [24.1, 674.0], [24.2, 676.0], [24.3, 677.0], [24.4, 678.0], [24.5, 680.0], [24.6, 681.0], [24.7, 682.0], [24.8, 684.0], [24.9, 687.0], [25.0, 690.0], [25.1, 691.0], [25.2, 692.0], [25.3, 694.0], [25.4, 695.0], [25.5, 695.0], [25.6, 698.0], [25.7, 699.0], [25.8, 699.0], [25.9, 701.0], [26.0, 702.0], [26.1, 705.0], [26.2, 708.0], [26.3, 708.0], [26.4, 709.0], [26.5, 711.0], [26.6, 713.0], [26.7, 714.0], [26.8, 715.0], [26.9, 716.0], [27.0, 716.0], [27.1, 718.0], [27.2, 721.0], [27.3, 722.0], [27.4, 724.0], [27.5, 726.0], [27.6, 727.0], [27.7, 730.0], [27.8, 732.0], [27.9, 733.0], [28.0, 735.0], [28.1, 736.0], [28.2, 737.0], [28.3, 738.0], [28.4, 739.0], [28.5, 742.0], [28.6, 745.0], [28.7, 746.0], [28.8, 748.0], [28.9, 750.0], [29.0, 753.0], [29.1, 754.0], [29.2, 756.0], [29.3, 758.0], [29.4, 760.0], [29.5, 761.0], [29.6, 763.0], [29.7, 765.0], [29.8, 766.0], [29.9, 768.0], [30.0, 769.0], [30.1, 772.0], [30.2, 775.0], [30.3, 778.0], [30.4, 780.0], [30.5, 784.0], [30.6, 786.0], [30.7, 789.0], [30.8, 791.0], [30.9, 793.0], [31.0, 796.0], [31.1, 798.0], [31.2, 799.0], [31.3, 801.0], [31.4, 803.0], [31.5, 804.0], [31.6, 805.0], [31.7, 808.0], [31.8, 811.0], [31.9, 815.0], [32.0, 816.0], [32.1, 819.0], [32.2, 822.0], [32.3, 825.0], [32.4, 827.0], [32.5, 827.0], [32.6, 828.0], [32.7, 830.0], [32.8, 832.0], [32.9, 833.0], [33.0, 835.0], [33.1, 836.0], [33.2, 838.0], [33.3, 839.0], [33.4, 842.0], [33.5, 845.0], [33.6, 846.0], [33.7, 849.0], [33.8, 850.0], [33.9, 850.0], [34.0, 853.0], [34.1, 855.0], [34.2, 856.0], [34.3, 861.0], [34.4, 862.0], [34.5, 863.0], [34.6, 866.0], [34.7, 866.0], [34.8, 869.0], [34.9, 870.0], [35.0, 872.0], [35.1, 873.0], [35.2, 874.0], [35.3, 878.0], [35.4, 880.0], [35.5, 883.0], [35.6, 885.0], [35.7, 888.0], [35.8, 891.0], [35.9, 892.0], [36.0, 896.0], [36.1, 897.0], [36.2, 898.0], [36.3, 900.0], [36.4, 903.0], [36.5, 904.0], [36.6, 905.0], [36.7, 906.0], [36.8, 909.0], [36.9, 911.0], [37.0, 914.0], [37.1, 915.0], [37.2, 916.0], [37.3, 918.0], [37.4, 919.0], [37.5, 920.0], [37.6, 922.0], [37.7, 925.0], [37.8, 927.0], [37.9, 929.0], [38.0, 930.0], [38.1, 931.0], [38.2, 933.0], [38.3, 934.0], [38.4, 935.0], [38.5, 937.0], [38.6, 939.0], [38.7, 940.0], [38.8, 942.0], [38.9, 943.0], [39.0, 946.0], [39.1, 947.0], [39.2, 949.0], [39.3, 950.0], [39.4, 953.0], [39.5, 955.0], [39.6, 956.0], [39.7, 958.0], [39.8, 961.0], [39.9, 963.0], [40.0, 964.0], [40.1, 967.0], [40.2, 968.0], [40.3, 971.0], [40.4, 971.0], [40.5, 973.0], [40.6, 976.0], [40.7, 977.0], [40.8, 979.0], [40.9, 981.0], [41.0, 982.0], [41.1, 985.0], [41.2, 986.0], [41.3, 988.0], [41.4, 988.0], [41.5, 990.0], [41.6, 992.0], [41.7, 995.0], [41.8, 997.0], [41.9, 998.0], [42.0, 1000.0], [42.1, 1002.0], [42.2, 1003.0], [42.3, 1005.0], [42.4, 1006.0], [42.5, 1007.0], [42.6, 1009.0], [42.7, 1011.0], [42.8, 1012.0], [42.9, 1015.0], [43.0, 1017.0], [43.1, 1018.0], [43.2, 1020.0], [43.3, 1021.0], [43.4, 1022.0], [43.5, 1024.0], [43.6, 1026.0], [43.7, 1028.0], [43.8, 1029.0], [43.9, 1032.0], [44.0, 1033.0], [44.1, 1035.0], [44.2, 1037.0], [44.3, 1039.0], [44.4, 1039.0], [44.5, 1042.0], [44.6, 1044.0], [44.7, 1045.0], [44.8, 1047.0], [44.9, 1050.0], [45.0, 1052.0], [45.1, 1052.0], [45.2, 1054.0], [45.3, 1056.0], [45.4, 1057.0], [45.5, 1060.0], [45.6, 1061.0], [45.7, 1063.0], [45.8, 1064.0], [45.9, 1067.0], [46.0, 1068.0], [46.1, 1069.0], [46.2, 1072.0], [46.3, 1074.0], [46.4, 1075.0], [46.5, 1078.0], [46.6, 1082.0], [46.7, 1083.0], [46.8, 1085.0], [46.9, 1087.0], [47.0, 1089.0], [47.1, 1090.0], [47.2, 1093.0], [47.3, 1095.0], [47.4, 1098.0], [47.5, 1099.0], [47.6, 1101.0], [47.7, 1101.0], [47.8, 1104.0], [47.9, 1105.0], [48.0, 1106.0], [48.1, 1109.0], [48.2, 1111.0], [48.3, 1114.0], [48.4, 1115.0], [48.5, 1117.0], [48.6, 1120.0], [48.7, 1121.0], [48.8, 1123.0], [48.9, 1125.0], [49.0, 1127.0], [49.1, 1128.0], [49.2, 1130.0], [49.3, 1131.0], [49.4, 1132.0], [49.5, 1134.0], [49.6, 1135.0], [49.7, 1140.0], [49.8, 1142.0], [49.9, 1143.0], [50.0, 1146.0], [50.1, 1148.0], [50.2, 1152.0], [50.3, 1155.0], [50.4, 1156.0], [50.5, 1158.0], [50.6, 1161.0], [50.7, 1164.0], [50.8, 1167.0], [50.9, 1169.0], [51.0, 1171.0], [51.1, 1172.0], [51.2, 1176.0], [51.3, 1177.0], [51.4, 1181.0], [51.5, 1183.0], [51.6, 1184.0], [51.7, 1187.0], [51.8, 1188.0], [51.9, 1190.0], [52.0, 1192.0], [52.1, 1196.0], [52.2, 1198.0], [52.3, 1199.0], [52.4, 1200.0], [52.5, 1202.0], [52.6, 1203.0], [52.7, 1205.0], [52.8, 1208.0], [52.9, 1210.0], [53.0, 1211.0], [53.1, 1212.0], [53.2, 1215.0], [53.3, 1217.0], [53.4, 1219.0], [53.5, 1221.0], [53.6, 1223.0], [53.7, 1224.0], [53.8, 1226.0], [53.9, 1228.0], [54.0, 1229.0], [54.1, 1230.0], [54.2, 1234.0], [54.3, 1235.0], [54.4, 1237.0], [54.5, 1239.0], [54.6, 1240.0], [54.7, 1242.0], [54.8, 1246.0], [54.9, 1248.0], [55.0, 1250.0], [55.1, 1253.0], [55.2, 1255.0], [55.3, 1256.0], [55.4, 1257.0], [55.5, 1260.0], [55.6, 1264.0], [55.7, 1265.0], [55.8, 1267.0], [55.9, 1268.0], [56.0, 1269.0], [56.1, 1272.0], [56.2, 1273.0], [56.3, 1275.0], [56.4, 1277.0], [56.5, 1279.0], [56.6, 1279.0], [56.7, 1280.0], [56.8, 1281.0], [56.9, 1284.0], [57.0, 1286.0], [57.1, 1288.0], [57.2, 1289.0], [57.3, 1294.0], [57.4, 1296.0], [57.5, 1299.0], [57.6, 1300.0], [57.7, 1300.0], [57.8, 1301.0], [57.9, 1304.0], [58.0, 1306.0], [58.1, 1308.0], [58.2, 1310.0], [58.3, 1311.0], [58.4, 1313.0], [58.5, 1314.0], [58.6, 1317.0], [58.7, 1319.0], [58.8, 1320.0], [58.9, 1323.0], [59.0, 1325.0], [59.1, 1329.0], [59.2, 1331.0], [59.3, 1334.0], [59.4, 1335.0], [59.5, 1337.0], [59.6, 1339.0], [59.7, 1341.0], [59.8, 1343.0], [59.9, 1344.0], [60.0, 1346.0], [60.1, 1348.0], [60.2, 1349.0], [60.3, 1352.0], [60.4, 1353.0], [60.5, 1354.0], [60.6, 1356.0], [60.7, 1359.0], [60.8, 1361.0], [60.9, 1363.0], [61.0, 1366.0], [61.1, 1367.0], [61.2, 1368.0], [61.3, 1372.0], [61.4, 1374.0], [61.5, 1375.0], [61.6, 1378.0], [61.7, 1379.0], [61.8, 1382.0], [61.9, 1384.0], [62.0, 1385.0], [62.1, 1388.0], [62.2, 1389.0], [62.3, 1390.0], [62.4, 1391.0], [62.5, 1394.0], [62.6, 1395.0], [62.7, 1396.0], [62.8, 1398.0], [62.9, 1399.0], [63.0, 1403.0], [63.1, 1405.0], [63.2, 1407.0], [63.3, 1408.0], [63.4, 1409.0], [63.5, 1411.0], [63.6, 1413.0], [63.7, 1416.0], [63.8, 1417.0], [63.9, 1419.0], [64.0, 1422.0], [64.1, 1427.0], [64.2, 1431.0], [64.3, 1432.0], [64.4, 1434.0], [64.5, 1436.0], [64.6, 1438.0], [64.7, 1441.0], [64.8, 1444.0], [64.9, 1446.0], [65.0, 1448.0], [65.1, 1450.0], [65.2, 1451.0], [65.3, 1452.0], [65.4, 1456.0], [65.5, 1458.0], [65.6, 1463.0], [65.7, 1464.0], [65.8, 1467.0], [65.9, 1469.0], [66.0, 1472.0], [66.1, 1474.0], [66.2, 1476.0], [66.3, 1479.0], [66.4, 1480.0], [66.5, 1482.0], [66.6, 1486.0], [66.7, 1488.0], [66.8, 1490.0], [66.9, 1491.0], [67.0, 1493.0], [67.1, 1494.0], [67.2, 1496.0], [67.3, 1500.0], [67.4, 1501.0], [67.5, 1502.0], [67.6, 1504.0], [67.7, 1504.0], [67.8, 1507.0], [67.9, 1510.0], [68.0, 1513.0], [68.1, 1515.0], [68.2, 1517.0], [68.3, 1519.0], [68.4, 1520.0], [68.5, 1522.0], [68.6, 1524.0], [68.7, 1526.0], [68.8, 1528.0], [68.9, 1529.0], [69.0, 1531.0], [69.1, 1534.0], [69.2, 1536.0], [69.3, 1538.0], [69.4, 1542.0], [69.5, 1545.0], [69.6, 1551.0], [69.7, 1553.0], [69.8, 1554.0], [69.9, 1556.0], [70.0, 1557.0], [70.1, 1560.0], [70.2, 1563.0], [70.3, 1565.0], [70.4, 1571.0], [70.5, 1573.0], [70.6, 1574.0], [70.7, 1577.0], [70.8, 1579.0], [70.9, 1580.0], [71.0, 1584.0], [71.1, 1584.0], [71.2, 1587.0], [71.3, 1589.0], [71.4, 1591.0], [71.5, 1593.0], [71.6, 1596.0], [71.7, 1598.0], [71.8, 1601.0], [71.9, 1603.0], [72.0, 1605.0], [72.1, 1609.0], [72.2, 1610.0], [72.3, 1612.0], [72.4, 1614.0], [72.5, 1615.0], [72.6, 1618.0], [72.7, 1622.0], [72.8, 1625.0], [72.9, 1627.0], [73.0, 1628.0], [73.1, 1633.0], [73.2, 1637.0], [73.3, 1641.0], [73.4, 1643.0], [73.5, 1645.0], [73.6, 1648.0], [73.7, 1650.0], [73.8, 1653.0], [73.9, 1654.0], [74.0, 1656.0], [74.1, 1659.0], [74.2, 1664.0], [74.3, 1666.0], [74.4, 1667.0], [74.5, 1669.0], [74.6, 1671.0], [74.7, 1677.0], [74.8, 1680.0], [74.9, 1682.0], [75.0, 1683.0], [75.1, 1685.0], [75.2, 1689.0], [75.3, 1691.0], [75.4, 1693.0], [75.5, 1696.0], [75.6, 1700.0], [75.7, 1701.0], [75.8, 1705.0], [75.9, 1708.0], [76.0, 1711.0], [76.1, 1712.0], [76.2, 1715.0], [76.3, 1717.0], [76.4, 1720.0], [76.5, 1722.0], [76.6, 1726.0], [76.7, 1727.0], [76.8, 1732.0], [76.9, 1734.0], [77.0, 1738.0], [77.1, 1742.0], [77.2, 1744.0], [77.3, 1747.0], [77.4, 1748.0], [77.5, 1754.0], [77.6, 1756.0], [77.7, 1759.0], [77.8, 1760.0], [77.9, 1765.0], [78.0, 1768.0], [78.1, 1772.0], [78.2, 1774.0], [78.3, 1779.0], [78.4, 1784.0], [78.5, 1786.0], [78.6, 1789.0], [78.7, 1791.0], [78.8, 1795.0], [78.9, 1797.0], [79.0, 1800.0], [79.1, 1805.0], [79.2, 1805.0], [79.3, 1808.0], [79.4, 1812.0], [79.5, 1815.0], [79.6, 1821.0], [79.7, 1824.0], [79.8, 1827.0], [79.9, 1828.0], [80.0, 1830.0], [80.1, 1833.0], [80.2, 1838.0], [80.3, 1841.0], [80.4, 1845.0], [80.5, 1848.0], [80.6, 1849.0], [80.7, 1852.0], [80.8, 1858.0], [80.9, 1862.0], [81.0, 1865.0], [81.1, 1867.0], [81.2, 1871.0], [81.3, 1873.0], [81.4, 1878.0], [81.5, 1881.0], [81.6, 1886.0], [81.7, 1889.0], [81.8, 1893.0], [81.9, 1899.0], [82.0, 1904.0], [82.1, 1907.0], [82.2, 1913.0], [82.3, 1915.0], [82.4, 1919.0], [82.5, 1923.0], [82.6, 1927.0], [82.7, 1930.0], [82.8, 1933.0], [82.9, 1939.0], [83.0, 1943.0], [83.1, 1947.0], [83.2, 1956.0], [83.3, 1963.0], [83.4, 1970.0], [83.5, 1974.0], [83.6, 1980.0], [83.7, 1987.0], [83.8, 1992.0], [83.9, 1995.0], [84.0, 1999.0], [84.1, 2003.0], [84.2, 2008.0], [84.3, 2012.0], [84.4, 2014.0], [84.5, 2017.0], [84.6, 2022.0], [84.7, 2024.0], [84.8, 2030.0], [84.9, 2033.0], [85.0, 2036.0], [85.1, 2046.0], [85.2, 2052.0], [85.3, 2055.0], [85.4, 2058.0], [85.5, 2062.0], [85.6, 2069.0], [85.7, 2078.0], [85.8, 2081.0], [85.9, 2085.0], [86.0, 2088.0], [86.1, 2093.0], [86.2, 2100.0], [86.3, 2107.0], [86.4, 2111.0], [86.5, 2118.0], [86.6, 2124.0], [86.7, 2127.0], [86.8, 2132.0], [86.9, 2138.0], [87.0, 2143.0], [87.1, 2147.0], [87.2, 2152.0], [87.3, 2162.0], [87.4, 2166.0], [87.5, 2173.0], [87.6, 2179.0], [87.7, 2188.0], [87.8, 2194.0], [87.9, 2199.0], [88.0, 2206.0], [88.1, 2210.0], [88.2, 2215.0], [88.3, 2223.0], [88.4, 2224.0], [88.5, 2227.0], [88.6, 2232.0], [88.7, 2235.0], [88.8, 2241.0], [88.9, 2247.0], [89.0, 2253.0], [89.1, 2263.0], [89.2, 2269.0], [89.3, 2276.0], [89.4, 2282.0], [89.5, 2289.0], [89.6, 2296.0], [89.7, 2304.0], [89.8, 2309.0], [89.9, 2318.0], [90.0, 2328.0], [90.1, 2333.0], [90.2, 2341.0], [90.3, 2350.0], [90.4, 2353.0], [90.5, 2359.0], [90.6, 2365.0], [90.7, 2373.0], [90.8, 2375.0], [90.9, 2382.0], [91.0, 2387.0], [91.1, 2395.0], [91.2, 2401.0], [91.3, 2409.0], [91.4, 2415.0], [91.5, 2421.0], [91.6, 2428.0], [91.7, 2432.0], [91.8, 2436.0], [91.9, 2441.0], [92.0, 2456.0], [92.1, 2461.0], [92.2, 2475.0], [92.3, 2485.0], [92.4, 2489.0], [92.5, 2497.0], [92.6, 2509.0], [92.7, 2519.0], [92.8, 2530.0], [92.9, 2535.0], [93.0, 2545.0], [93.1, 2557.0], [93.2, 2564.0], [93.3, 2568.0], [93.4, 2585.0], [93.5, 2595.0], [93.6, 2604.0], [93.7, 2615.0], [93.8, 2624.0], [93.9, 2627.0], [94.0, 2642.0], [94.1, 2650.0], [94.2, 2658.0], [94.3, 2666.0], [94.4, 2673.0], [94.5, 2676.0], [94.6, 2687.0], [94.7, 2696.0], [94.8, 2709.0], [94.9, 2717.0], [95.0, 2730.0], [95.1, 2747.0], [95.2, 2756.0], [95.3, 2771.0], [95.4, 2781.0], [95.5, 2798.0], [95.6, 2807.0], [95.7, 2823.0], [95.8, 2837.0], [95.9, 2852.0], [96.0, 2875.0], [96.1, 2888.0], [96.2, 2895.0], [96.3, 2922.0], [96.4, 2940.0], [96.5, 2960.0], [96.6, 2991.0], [96.7, 3009.0], [96.8, 3024.0], [96.9, 3033.0], [97.0, 3048.0], [97.1, 3064.0], [97.2, 3121.0], [97.3, 3154.0], [97.4, 3181.0], [97.5, 3206.0], [97.6, 3239.0], [97.7, 3258.0], [97.8, 3283.0], [97.9, 3332.0], [98.0, 3382.0], [98.1, 3405.0], [98.2, 3444.0], [98.3, 3484.0], [98.4, 3527.0], [98.5, 3558.0], [98.6, 3637.0], [98.7, 3675.0], [98.8, 3702.0], [98.9, 3793.0], [99.0, 3841.0], [99.1, 3901.0], [99.2, 3996.0], [99.3, 4071.0], [99.4, 4125.0], [99.5, 4424.0], [99.6, 4941.0], [99.7, 5067.0], [99.8, 5379.0], [99.9, 6464.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 379.0, "series": [{"data": [[0.0, 64.0], [600.0, 363.0], [700.0, 291.0], [800.0, 269.0], [900.0, 306.0], [1000.0, 299.0], [1100.0, 256.0], [1200.0, 278.0], [1300.0, 285.0], [1400.0, 235.0], [1500.0, 239.0], [1600.0, 204.0], [1700.0, 181.0], [1800.0, 158.0], [1900.0, 112.0], [2000.0, 116.0], [2100.0, 92.0], [2200.0, 93.0], [2300.0, 81.0], [2400.0, 74.0], [2500.0, 55.0], [2600.0, 61.0], [2800.0, 38.0], [2700.0, 44.0], [2900.0, 23.0], [3000.0, 28.0], [3100.0, 16.0], [3300.0, 14.0], [3200.0, 17.0], [3400.0, 14.0], [3500.0, 11.0], [3600.0, 13.0], [3700.0, 7.0], [3800.0, 9.0], [3900.0, 7.0], [4000.0, 6.0], [4100.0, 7.0], [4200.0, 2.0], [4600.0, 1.0], [4400.0, 2.0], [4500.0, 1.0], [4900.0, 6.0], [5100.0, 3.0], [5000.0, 1.0], [5300.0, 2.0], [5200.0, 1.0], [5400.0, 1.0], [5500.0, 1.0], [5800.0, 1.0], [6300.0, 1.0], [6500.0, 1.0], [6400.0, 1.0], [6800.0, 1.0], [7200.0, 1.0], [8100.0, 1.0], [9200.0, 1.0], [100.0, 5.0], [200.0, 63.0], [300.0, 176.0], [400.0, 330.0], [500.0, 379.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 9200.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 155.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2919.0, "series": [{"data": [[0.0, 537.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 2919.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 1737.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 155.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 19.181818181818183, "minX": 1.60183458E12, "maxY": 20.0, "series": [{"data": [[1.60183482E12, 20.0], [1.60183464E12, 20.0], [1.6018347E12, 20.0], [1.60183458E12, 20.0], [1.60183488E12, 20.0], [1.60183494E12, 19.181818181818183], [1.60183476E12, 20.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60183494E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 819.0, "minX": 1.0, "maxY": 3529.0, "series": [{"data": [[2.0, 2023.0], [9.0, 1056.5], [10.0, 1886.0], [11.0, 852.0], [12.0, 1385.0], [3.0, 1280.0], [13.0, 1827.0], [14.0, 840.0], [15.0, 2016.0], [16.0, 1974.0], [4.0, 1490.0], [1.0, 3529.0], [17.0, 1314.0], [18.0, 2626.0], [19.0, 979.0], [20.0, 1291.2497654344136], [5.0, 1486.0], [6.0, 819.0], [7.0, 2918.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[19.964659685863875, 1292.5256170531025]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 20.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 1734.2833333333333, "minX": 1.60183458E12, "maxY": 4696751.1, "series": [{"data": [[1.60183482E12, 4117659.4166666665], [1.60183464E12, 3981142.85], [1.6018347E12, 4696751.1], [1.60183458E12, 1896200.7166666666], [1.60183488E12, 4209179.116666666], [1.60183494E12, 1106689.45], [1.60183476E12, 3966341.2333333334]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60183482E12, 6860.183333333333], [1.60183464E12, 6878.5], [1.6018347E12, 7837.15], [1.60183458E12, 2607.0], [1.60183488E12, 8268.016666666666], [1.60183494E12, 1734.2833333333333], [1.60183476E12, 6036.616666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60183494E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 1127.2882629107962, "minX": 1.60183458E12, "maxY": 1608.4112554112553, "series": [{"data": [[1.60183482E12, 1304.554712892742], [1.60183464E12, 1284.4532760472603], [1.6018347E12, 1175.7714843749993], [1.60183458E12, 1532.411764705882], [1.60183488E12, 1127.2882629107962], [1.60183494E12, 1608.4112554112553], [1.60183476E12, 1455.7294981640143]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60183494E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 1089.3399061032846, "minX": 1.60183458E12, "maxY": 1561.532467532467, "series": [{"data": [[1.60183482E12, 1261.4615384615372], [1.60183464E12, 1236.2996777658427], [1.6018347E12, 1133.656249999998], [1.60183458E12, 1461.372549019608], [1.60183488E12, 1089.3399061032846], [1.60183494E12, 1561.532467532467], [1.60183476E12, 1410.8800489596063]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60183494E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.60183458E12, "maxY": 0.9019607843137243, "series": [{"data": [[1.60183482E12, 0.026002166847237287], [1.60183464E12, 0.02900107411385605], [1.6018347E12, 0.02050781249999999], [1.60183458E12, 0.9019607843137243], [1.60183488E12, 0.022535211267605642], [1.60183494E12, 0.0], [1.60183476E12, 0.02692778457772342]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60183494E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 194.0, "minX": 1.60183458E12, "maxY": 9203.0, "series": [{"data": [[1.60183482E12, 6803.0], [1.60183464E12, 6547.0], [1.6018347E12, 4049.0], [1.60183458E12, 6317.0], [1.60183488E12, 4206.0], [1.60183494E12, 4258.0], [1.60183476E12, 9203.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60183482E12, 377.0], [1.60183464E12, 343.33499670624735], [1.6018347E12, 234.1629993069172], [1.60183458E12, 347.9299995779991], [1.60183488E12, 242.17999904155732], [1.60183494E12, 461.78399762153623], [1.60183476E12, 361.247998456955]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60183482E12, 377.0720006942749], [1.60183464E12, 354.589500439167], [1.6018347E12, 235.59310009241105], [1.60183458E12, 349.52300016880037], [1.60183488E12, 245.7980003833771], [1.60183494E12, 470.7624009513855], [1.60183476E12, 367.21840185165405]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60183482E12, 377.0], [1.60183464E12, 350.24249835312366], [1.6018347E12, 235.2054998844862], [1.60183458E12, 348.81499978899956], [1.60183488E12, 244.18999952077866], [1.60183494E12, 466.77199881076814], [1.60183476E12, 364.4839992284775]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60183482E12, 227.0], [1.60183464E12, 218.0], [1.6018347E12, 194.0], [1.60183458E12, 285.0], [1.60183488E12, 202.0], [1.60183494E12, 384.0], [1.60183476E12, 232.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60183482E12, 1168.0], [1.60183464E12, 1091.5], [1.6018347E12, 1103.5], [1.60183458E12, 1293.0], [1.60183488E12, 1030.0], [1.60183494E12, 1475.0], [1.60183476E12, 1285.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60183494E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 3.0, "minX": 1.0, "maxY": 3529.0, "series": [{"data": [[32.0, 603.0], [35.0, 560.0], [37.0, 577.0], [45.0, 538.0], [3.0, 1490.0], [51.0, 761.0], [5.0, 1853.0], [6.0, 2334.0], [7.0, 2345.0], [8.0, 1800.0], [9.0, 1671.5], [10.0, 1531.0], [11.0, 1486.5], [12.0, 1435.0], [13.0, 1403.5], [14.0, 1256.0], [15.0, 1294.0], [16.0, 1309.0], [1.0, 3529.0], [17.0, 1106.5], [18.0, 1091.5], [19.0, 1026.0], [20.0, 884.0], [21.0, 992.0], [22.0, 816.0], [23.0, 701.5], [24.0, 691.0], [25.0, 654.5], [26.0, 731.5], [27.0, 626.0], [28.0, 690.5], [29.0, 594.0], [30.0, 763.0], [31.0, 590.5]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[8.0, 1029.0], [32.0, 4.0], [35.0, 210.0], [9.0, 566.0], [10.0, 259.0], [11.0, 828.0], [45.0, 4.0], [12.0, 1070.0], [51.0, 3.0], [13.0, 607.0], [14.0, 579.0], [15.0, 866.0], [16.0, 523.5], [17.0, 982.0], [18.0, 223.5], [19.0, 1255.0], [20.0, 484.5], [22.0, 291.5], [23.0, 374.5], [24.0, 1047.0], [25.0, 1336.0], [27.0, 273.0], [28.0, 660.0], [29.0, 3.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 51.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 3.0, "minX": 1.0, "maxY": 3253.0, "series": [{"data": [[32.0, 599.5], [35.0, 559.0], [37.0, 573.0], [45.0, 535.0], [3.0, 1490.0], [51.0, 760.0], [5.0, 1651.0], [6.0, 2307.5], [7.0, 2265.5], [8.0, 1687.0], [9.0, 1592.5], [10.0, 1449.0], [11.0, 1409.0], [12.0, 1374.0], [13.0, 1341.0], [14.0, 1208.0], [15.0, 1268.0], [16.0, 1253.5], [1.0, 3253.0], [17.0, 1059.0], [18.0, 1050.0], [19.0, 969.0], [20.0, 846.0], [21.0, 964.0], [22.0, 807.5], [23.0, 695.5], [24.0, 679.0], [25.0, 652.5], [26.0, 731.5], [27.0, 625.0], [28.0, 682.5], [29.0, 579.0], [30.0, 756.5], [31.0, 587.5]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[8.0, 1029.0], [32.0, 4.0], [35.0, 210.0], [9.0, 566.0], [10.0, 259.0], [11.0, 828.0], [45.0, 4.0], [12.0, 1070.0], [51.0, 3.0], [13.0, 606.0], [14.0, 579.0], [15.0, 866.0], [16.0, 523.5], [17.0, 982.0], [18.0, 223.5], [19.0, 1255.0], [20.0, 484.0], [22.0, 291.5], [23.0, 374.0], [24.0, 1047.0], [25.0, 1336.0], [27.0, 273.0], [28.0, 660.0], [29.0, 3.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 51.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 3.5166666666666666, "minX": 1.60183458E12, "maxY": 17.75, "series": [{"data": [[1.60183482E12, 15.383333333333333], [1.60183464E12, 15.516666666666667], [1.6018347E12, 17.066666666666666], [1.60183458E12, 6.283333333333333], [1.60183488E12, 17.75], [1.60183494E12, 3.5166666666666666], [1.60183476E12, 13.616666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60183494E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.06666666666666667, "minX": 1.60183458E12, "maxY": 16.733333333333334, "series": [{"data": [[1.60183482E12, 15.15], [1.60183464E12, 15.333333333333334], [1.6018347E12, 16.133333333333333], [1.60183458E12, 5.883333333333334], [1.60183488E12, 16.733333333333334], [1.60183494E12, 3.85], [1.60183476E12, 13.466666666666667]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.60183482E12, 0.23333333333333334], [1.60183464E12, 0.18333333333333332], [1.6018347E12, 0.9333333333333333], [1.60183458E12, 0.06666666666666667], [1.60183488E12, 1.0166666666666666], [1.60183476E12, 0.15]], "isOverall": false, "label": "400", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60183494E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.06666666666666667, "minX": 1.60183458E12, "maxY": 16.733333333333334, "series": [{"data": [[1.60183482E12, 15.15], [1.60183464E12, 15.333333333333334], [1.6018347E12, 16.133333333333333], [1.60183458E12, 5.883333333333334], [1.60183488E12, 16.733333333333334], [1.60183494E12, 3.85], [1.60183476E12, 13.466666666666667]], "isOverall": false, "label": "HTTP Request-success", "isController": false}, {"data": [[1.60183482E12, 0.23333333333333334], [1.60183464E12, 0.18333333333333332], [1.6018347E12, 0.9333333333333333], [1.60183458E12, 0.06666666666666667], [1.60183488E12, 1.0166666666666666], [1.60183476E12, 0.15]], "isOverall": false, "label": "HTTP Request-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60183494E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.06666666666666667, "minX": 1.60183458E12, "maxY": 16.733333333333334, "series": [{"data": [[1.60183482E12, 15.15], [1.60183464E12, 15.333333333333334], [1.6018347E12, 16.133333333333333], [1.60183458E12, 5.883333333333334], [1.60183488E12, 16.733333333333334], [1.60183494E12, 3.85], [1.60183476E12, 13.466666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.60183482E12, 0.23333333333333334], [1.60183464E12, 0.18333333333333332], [1.6018347E12, 0.9333333333333333], [1.60183458E12, 0.06666666666666667], [1.60183488E12, 1.0166666666666666], [1.60183476E12, 0.15]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60183494E12, "title": "Total Transactions Per Second"}},
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

