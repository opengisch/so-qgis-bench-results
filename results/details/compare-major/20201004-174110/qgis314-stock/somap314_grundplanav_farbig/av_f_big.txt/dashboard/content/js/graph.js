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
        data: {"result": {"minY": 316.0, "minX": 0.0, "maxY": 5112.0, "series": [{"data": [[0.0, 316.0], [0.1, 316.0], [0.2, 328.0], [0.3, 410.0], [0.4, 410.0], [0.5, 417.0], [0.6, 424.0], [0.7, 425.0], [0.8, 425.0], [0.9, 425.0], [1.0, 426.0], [1.1, 432.0], [1.2, 432.0], [1.3, 438.0], [1.4, 454.0], [1.5, 461.0], [1.6, 461.0], [1.7, 469.0], [1.8, 475.0], [1.9, 475.0], [2.0, 490.0], [2.1, 505.0], [2.2, 507.0], [2.3, 507.0], [2.4, 507.0], [2.5, 510.0], [2.6, 515.0], [2.7, 515.0], [2.8, 517.0], [2.9, 523.0], [3.0, 523.0], [3.1, 523.0], [3.2, 525.0], [3.3, 528.0], [3.4, 528.0], [3.5, 529.0], [3.6, 532.0], [3.7, 538.0], [3.8, 538.0], [3.9, 539.0], [4.0, 544.0], [4.1, 544.0], [4.2, 544.0], [4.3, 545.0], [4.4, 546.0], [4.5, 548.0], [4.6, 548.0], [4.7, 550.0], [4.8, 550.0], [4.9, 554.0], [5.0, 554.0], [5.1, 555.0], [5.2, 557.0], [5.3, 557.0], [5.4, 558.0], [5.5, 559.0], [5.6, 560.0], [5.7, 560.0], [5.8, 564.0], [5.9, 566.0], [6.0, 568.0], [6.1, 568.0], [6.2, 572.0], [6.3, 573.0], [6.4, 573.0], [6.5, 573.0], [6.6, 574.0], [6.7, 574.0], [6.8, 574.0], [6.9, 577.0], [7.0, 577.0], [7.1, 578.0], [7.2, 578.0], [7.3, 579.0], [7.4, 580.0], [7.5, 581.0], [7.6, 581.0], [7.7, 585.0], [7.8, 585.0], [7.9, 587.0], [8.0, 587.0], [8.1, 588.0], [8.2, 591.0], [8.3, 593.0], [8.4, 593.0], [8.5, 596.0], [8.6, 599.0], [8.7, 599.0], [8.8, 608.0], [8.9, 608.0], [9.0, 609.0], [9.1, 609.0], [9.2, 611.0], [9.3, 612.0], [9.4, 615.0], [9.5, 615.0], [9.6, 616.0], [9.7, 622.0], [9.8, 623.0], [9.9, 623.0], [10.0, 624.0], [10.1, 624.0], [10.2, 624.0], [10.3, 624.0], [10.4, 628.0], [10.5, 630.0], [10.6, 630.0], [10.7, 631.0], [10.8, 634.0], [10.9, 637.0], [11.0, 637.0], [11.1, 642.0], [11.2, 645.0], [11.3, 657.0], [11.4, 657.0], [11.5, 658.0], [11.6, 659.0], [11.7, 659.0], [11.8, 661.0], [11.9, 662.0], [12.0, 666.0], [12.1, 666.0], [12.2, 668.0], [12.3, 670.0], [12.4, 676.0], [12.5, 676.0], [12.6, 679.0], [12.7, 679.0], [12.8, 684.0], [12.9, 684.0], [13.0, 689.0], [13.1, 694.0], [13.2, 700.0], [13.3, 700.0], [13.4, 704.0], [13.5, 706.0], [13.6, 706.0], [13.7, 708.0], [13.8, 710.0], [13.9, 711.0], [14.0, 711.0], [14.1, 711.0], [14.2, 716.0], [14.3, 716.0], [14.4, 716.0], [14.5, 718.0], [14.6, 720.0], [14.7, 723.0], [14.8, 723.0], [14.9, 724.0], [15.0, 726.0], [15.1, 726.0], [15.2, 726.0], [15.3, 730.0], [15.4, 731.0], [15.5, 731.0], [15.6, 737.0], [15.7, 739.0], [15.8, 740.0], [15.9, 740.0], [16.0, 741.0], [16.1, 742.0], [16.2, 757.0], [16.3, 757.0], [16.4, 759.0], [16.5, 760.0], [16.6, 769.0], [16.7, 769.0], [16.8, 770.0], [16.9, 772.0], [17.0, 772.0], [17.1, 773.0], [17.2, 777.0], [17.3, 780.0], [17.4, 780.0], [17.5, 780.0], [17.6, 783.0], [17.7, 784.0], [17.8, 784.0], [17.9, 792.0], [18.0, 794.0], [18.1, 797.0], [18.2, 797.0], [18.3, 799.0], [18.4, 800.0], [18.5, 800.0], [18.6, 805.0], [18.7, 806.0], [18.8, 807.0], [18.9, 807.0], [19.0, 810.0], [19.1, 820.0], [19.2, 823.0], [19.3, 823.0], [19.4, 833.0], [19.5, 838.0], [19.6, 840.0], [19.7, 840.0], [19.8, 840.0], [19.9, 841.0], [20.0, 846.0], [20.1, 846.0], [20.2, 846.0], [20.3, 848.0], [20.4, 848.0], [20.5, 849.0], [20.6, 851.0], [20.7, 854.0], [20.8, 854.0], [20.9, 859.0], [21.0, 864.0], [21.1, 867.0], [21.2, 867.0], [21.3, 867.0], [21.4, 867.0], [21.5, 869.0], [21.6, 869.0], [21.7, 870.0], [21.8, 872.0], [21.9, 872.0], [22.0, 873.0], [22.1, 873.0], [22.2, 874.0], [22.3, 874.0], [22.4, 875.0], [22.5, 876.0], [22.6, 880.0], [22.7, 880.0], [22.8, 885.0], [22.9, 885.0], [23.0, 886.0], [23.1, 886.0], [23.2, 890.0], [23.3, 892.0], [23.4, 892.0], [23.5, 892.0], [23.6, 893.0], [23.7, 893.0], [23.8, 893.0], [23.9, 894.0], [24.0, 894.0], [24.1, 896.0], [24.2, 896.0], [24.3, 896.0], [24.4, 901.0], [24.5, 903.0], [24.6, 903.0], [24.7, 904.0], [24.8, 907.0], [24.9, 910.0], [25.0, 910.0], [25.1, 910.0], [25.2, 915.0], [25.3, 915.0], [25.4, 918.0], [25.5, 921.0], [25.6, 925.0], [25.7, 925.0], [25.8, 926.0], [25.9, 927.0], [26.0, 927.0], [26.1, 927.0], [26.2, 929.0], [26.3, 929.0], [26.4, 933.0], [26.5, 933.0], [26.6, 934.0], [26.7, 935.0], [26.8, 935.0], [26.9, 935.0], [27.0, 935.0], [27.1, 936.0], [27.2, 936.0], [27.3, 936.0], [27.4, 937.0], [27.5, 941.0], [27.6, 941.0], [27.7, 945.0], [27.8, 947.0], [27.9, 953.0], [28.0, 953.0], [28.1, 954.0], [28.2, 956.0], [28.3, 956.0], [28.4, 956.0], [28.5, 959.0], [28.6, 962.0], [28.7, 962.0], [28.8, 962.0], [28.9, 964.0], [29.0, 964.0], [29.1, 964.0], [29.2, 966.0], [29.3, 969.0], [29.4, 969.0], [29.5, 969.0], [29.6, 970.0], [29.7, 972.0], [29.8, 979.0], [29.9, 979.0], [30.0, 981.0], [30.1, 985.0], [30.2, 985.0], [30.3, 987.0], [30.4, 988.0], [30.5, 989.0], [30.6, 989.0], [30.7, 989.0], [30.8, 990.0], [30.9, 992.0], [31.0, 992.0], [31.1, 992.0], [31.2, 993.0], [31.3, 995.0], [31.4, 995.0], [31.5, 1002.0], [31.6, 1003.0], [31.7, 1003.0], [31.8, 1003.0], [31.9, 1004.0], [32.0, 1012.0], [32.1, 1012.0], [32.2, 1015.0], [32.3, 1017.0], [32.4, 1017.0], [32.5, 1017.0], [32.6, 1018.0], [32.7, 1024.0], [32.8, 1029.0], [32.9, 1029.0], [33.0, 1033.0], [33.1, 1034.0], [33.2, 1034.0], [33.3, 1034.0], [33.4, 1035.0], [33.5, 1036.0], [33.6, 1036.0], [33.7, 1039.0], [33.8, 1041.0], [33.9, 1042.0], [34.0, 1042.0], [34.1, 1048.0], [34.2, 1048.0], [34.3, 1050.0], [34.4, 1050.0], [34.5, 1051.0], [34.6, 1055.0], [34.7, 1057.0], [34.8, 1057.0], [34.9, 1059.0], [35.0, 1061.0], [35.1, 1061.0], [35.2, 1065.0], [35.3, 1068.0], [35.4, 1068.0], [35.5, 1068.0], [35.6, 1070.0], [35.7, 1073.0], [35.8, 1075.0], [35.9, 1075.0], [36.0, 1076.0], [36.1, 1079.0], [36.2, 1082.0], [36.3, 1082.0], [36.4, 1084.0], [36.5, 1090.0], [36.6, 1091.0], [36.7, 1091.0], [36.8, 1091.0], [36.9, 1092.0], [37.0, 1092.0], [37.1, 1098.0], [37.2, 1099.0], [37.3, 1104.0], [37.4, 1104.0], [37.5, 1106.0], [37.6, 1108.0], [37.7, 1110.0], [37.8, 1110.0], [37.9, 1111.0], [38.0, 1112.0], [38.1, 1114.0], [38.2, 1114.0], [38.3, 1118.0], [38.4, 1118.0], [38.5, 1118.0], [38.6, 1122.0], [38.7, 1125.0], [38.8, 1126.0], [38.9, 1126.0], [39.0, 1126.0], [39.1, 1128.0], [39.2, 1129.0], [39.3, 1129.0], [39.4, 1130.0], [39.5, 1131.0], [39.6, 1131.0], [39.7, 1131.0], [39.8, 1131.0], [39.9, 1135.0], [40.0, 1137.0], [40.1, 1137.0], [40.2, 1139.0], [40.3, 1140.0], [40.4, 1140.0], [40.5, 1141.0], [40.6, 1143.0], [40.7, 1144.0], [40.8, 1144.0], [40.9, 1145.0], [41.0, 1145.0], [41.1, 1147.0], [41.2, 1147.0], [41.3, 1149.0], [41.4, 1152.0], [41.5, 1153.0], [41.6, 1153.0], [41.7, 1154.0], [41.8, 1155.0], [41.9, 1155.0], [42.0, 1155.0], [42.1, 1155.0], [42.2, 1156.0], [42.3, 1156.0], [42.4, 1157.0], [42.5, 1158.0], [42.6, 1158.0], [42.7, 1158.0], [42.8, 1160.0], [42.9, 1161.0], [43.0, 1161.0], [43.1, 1161.0], [43.2, 1161.0], [43.3, 1164.0], [43.4, 1164.0], [43.5, 1166.0], [43.6, 1168.0], [43.7, 1169.0], [43.8, 1169.0], [43.9, 1176.0], [44.0, 1182.0], [44.1, 1183.0], [44.2, 1183.0], [44.3, 1184.0], [44.4, 1184.0], [44.5, 1187.0], [44.6, 1187.0], [44.7, 1187.0], [44.8, 1188.0], [44.9, 1188.0], [45.0, 1188.0], [45.1, 1188.0], [45.2, 1190.0], [45.3, 1190.0], [45.4, 1196.0], [45.5, 1197.0], [45.6, 1199.0], [45.7, 1199.0], [45.8, 1199.0], [45.9, 1201.0], [46.0, 1205.0], [46.1, 1205.0], [46.2, 1207.0], [46.3, 1208.0], [46.4, 1211.0], [46.5, 1211.0], [46.6, 1213.0], [46.7, 1215.0], [46.8, 1215.0], [46.9, 1218.0], [47.0, 1221.0], [47.1, 1226.0], [47.2, 1226.0], [47.3, 1228.0], [47.4, 1228.0], [47.5, 1229.0], [47.6, 1229.0], [47.7, 1229.0], [47.8, 1229.0], [47.9, 1229.0], [48.0, 1229.0], [48.1, 1231.0], [48.2, 1233.0], [48.3, 1236.0], [48.4, 1236.0], [48.5, 1237.0], [48.6, 1238.0], [48.7, 1238.0], [48.8, 1240.0], [48.9, 1240.0], [49.0, 1242.0], [49.1, 1242.0], [49.2, 1243.0], [49.3, 1246.0], [49.4, 1249.0], [49.5, 1249.0], [49.6, 1251.0], [49.7, 1251.0], [49.8, 1255.0], [49.9, 1255.0], [50.0, 1257.0], [50.1, 1259.0], [50.2, 1259.0], [50.3, 1259.0], [50.4, 1261.0], [50.5, 1262.0], [50.6, 1262.0], [50.7, 1264.0], [50.8, 1266.0], [50.9, 1267.0], [51.0, 1267.0], [51.1, 1272.0], [51.2, 1272.0], [51.3, 1274.0], [51.4, 1274.0], [51.5, 1274.0], [51.6, 1277.0], [51.7, 1277.0], [51.8, 1280.0], [51.9, 1283.0], [52.0, 1288.0], [52.1, 1288.0], [52.2, 1289.0], [52.3, 1291.0], [52.4, 1292.0], [52.5, 1292.0], [52.6, 1293.0], [52.7, 1299.0], [52.8, 1300.0], [52.9, 1300.0], [53.0, 1303.0], [53.1, 1309.0], [53.2, 1312.0], [53.3, 1312.0], [53.4, 1315.0], [53.5, 1320.0], [53.6, 1320.0], [53.7, 1321.0], [53.8, 1325.0], [53.9, 1328.0], [54.0, 1328.0], [54.1, 1329.0], [54.2, 1332.0], [54.3, 1333.0], [54.4, 1333.0], [54.5, 1335.0], [54.6, 1341.0], [54.7, 1343.0], [54.8, 1343.0], [54.9, 1343.0], [55.0, 1343.0], [55.1, 1343.0], [55.2, 1344.0], [55.3, 1344.0], [55.4, 1345.0], [55.5, 1345.0], [55.6, 1346.0], [55.7, 1346.0], [55.8, 1347.0], [55.9, 1347.0], [56.0, 1349.0], [56.1, 1351.0], [56.2, 1353.0], [56.3, 1353.0], [56.4, 1356.0], [56.5, 1357.0], [56.6, 1358.0], [56.7, 1358.0], [56.8, 1358.0], [56.9, 1359.0], [57.0, 1359.0], [57.1, 1360.0], [57.2, 1362.0], [57.3, 1363.0], [57.4, 1363.0], [57.5, 1363.0], [57.6, 1365.0], [57.7, 1365.0], [57.8, 1365.0], [57.9, 1365.0], [58.0, 1367.0], [58.1, 1369.0], [58.2, 1369.0], [58.3, 1371.0], [58.4, 1374.0], [58.5, 1374.0], [58.6, 1374.0], [58.7, 1376.0], [58.8, 1376.0], [58.9, 1376.0], [59.0, 1377.0], [59.1, 1378.0], [59.2, 1384.0], [59.3, 1384.0], [59.4, 1385.0], [59.5, 1386.0], [59.6, 1386.0], [59.7, 1386.0], [59.8, 1391.0], [59.9, 1392.0], [60.0, 1395.0], [60.1, 1395.0], [60.2, 1395.0], [60.3, 1396.0], [60.4, 1396.0], [60.5, 1396.0], [60.6, 1397.0], [60.7, 1398.0], [60.8, 1398.0], [60.9, 1398.0], [61.0, 1405.0], [61.1, 1405.0], [61.2, 1405.0], [61.3, 1409.0], [61.4, 1411.0], [61.5, 1414.0], [61.6, 1414.0], [61.7, 1417.0], [61.8, 1420.0], [61.9, 1420.0], [62.0, 1421.0], [62.1, 1427.0], [62.2, 1428.0], [62.3, 1428.0], [62.4, 1430.0], [62.5, 1431.0], [62.6, 1436.0], [62.7, 1436.0], [62.8, 1438.0], [62.9, 1439.0], [63.0, 1447.0], [63.1, 1447.0], [63.2, 1448.0], [63.3, 1449.0], [63.4, 1449.0], [63.5, 1450.0], [63.6, 1452.0], [63.7, 1457.0], [63.8, 1457.0], [63.9, 1457.0], [64.0, 1459.0], [64.1, 1461.0], [64.2, 1461.0], [64.3, 1466.0], [64.4, 1466.0], [64.5, 1469.0], [64.6, 1469.0], [64.7, 1471.0], [64.8, 1474.0], [64.9, 1475.0], [65.0, 1475.0], [65.1, 1479.0], [65.2, 1481.0], [65.3, 1481.0], [65.4, 1481.0], [65.5, 1486.0], [65.6, 1488.0], [65.7, 1488.0], [65.8, 1489.0], [65.9, 1490.0], [66.0, 1491.0], [66.1, 1491.0], [66.2, 1495.0], [66.3, 1496.0], [66.4, 1499.0], [66.5, 1499.0], [66.6, 1500.0], [66.7, 1506.0], [66.8, 1506.0], [66.9, 1507.0], [67.0, 1509.0], [67.1, 1515.0], [67.2, 1515.0], [67.3, 1516.0], [67.4, 1518.0], [67.5, 1520.0], [67.6, 1520.0], [67.7, 1524.0], [67.8, 1525.0], [67.9, 1526.0], [68.0, 1526.0], [68.1, 1530.0], [68.2, 1531.0], [68.3, 1537.0], [68.4, 1537.0], [68.5, 1538.0], [68.6, 1542.0], [68.7, 1542.0], [68.8, 1544.0], [68.9, 1547.0], [69.0, 1549.0], [69.1, 1549.0], [69.2, 1551.0], [69.3, 1553.0], [69.4, 1554.0], [69.5, 1554.0], [69.6, 1555.0], [69.7, 1564.0], [69.8, 1567.0], [69.9, 1567.0], [70.0, 1570.0], [70.1, 1572.0], [70.2, 1572.0], [70.3, 1577.0], [70.4, 1581.0], [70.5, 1583.0], [70.6, 1583.0], [70.7, 1587.0], [70.8, 1587.0], [70.9, 1592.0], [71.0, 1592.0], [71.1, 1593.0], [71.2, 1593.0], [71.3, 1598.0], [71.4, 1598.0], [71.5, 1600.0], [71.6, 1600.0], [71.7, 1600.0], [71.8, 1602.0], [71.9, 1604.0], [72.0, 1604.0], [72.1, 1604.0], [72.2, 1612.0], [72.3, 1615.0], [72.4, 1616.0], [72.5, 1616.0], [72.6, 1622.0], [72.7, 1623.0], [72.8, 1637.0], [72.9, 1637.0], [73.0, 1638.0], [73.1, 1639.0], [73.2, 1641.0], [73.3, 1641.0], [73.4, 1641.0], [73.5, 1642.0], [73.6, 1642.0], [73.7, 1643.0], [73.8, 1643.0], [73.9, 1647.0], [74.0, 1647.0], [74.1, 1651.0], [74.2, 1654.0], [74.3, 1655.0], [74.4, 1655.0], [74.5, 1659.0], [74.6, 1661.0], [74.7, 1670.0], [74.8, 1670.0], [74.9, 1675.0], [75.0, 1678.0], [75.1, 1678.0], [75.2, 1678.0], [75.3, 1687.0], [75.4, 1698.0], [75.5, 1698.0], [75.6, 1700.0], [75.7, 1709.0], [75.8, 1719.0], [75.9, 1719.0], [76.0, 1721.0], [76.1, 1723.0], [76.2, 1734.0], [76.3, 1734.0], [76.4, 1738.0], [76.5, 1738.0], [76.6, 1738.0], [76.7, 1738.0], [76.8, 1742.0], [76.9, 1743.0], [77.0, 1743.0], [77.1, 1745.0], [77.2, 1748.0], [77.3, 1748.0], [77.4, 1748.0], [77.5, 1749.0], [77.6, 1750.0], [77.7, 1752.0], [77.8, 1752.0], [77.9, 1753.0], [78.0, 1757.0], [78.1, 1757.0], [78.2, 1757.0], [78.3, 1758.0], [78.4, 1759.0], [78.5, 1759.0], [78.6, 1761.0], [78.7, 1761.0], [78.8, 1762.0], [78.9, 1762.0], [79.0, 1762.0], [79.1, 1762.0], [79.2, 1774.0], [79.3, 1774.0], [79.4, 1774.0], [79.5, 1779.0], [79.6, 1780.0], [79.7, 1780.0], [79.8, 1783.0], [79.9, 1785.0], [80.0, 1785.0], [80.1, 1785.0], [80.2, 1786.0], [80.3, 1792.0], [80.4, 1792.0], [80.5, 1793.0], [80.6, 1800.0], [80.7, 1801.0], [80.8, 1801.0], [80.9, 1802.0], [81.0, 1803.0], [81.1, 1807.0], [81.2, 1807.0], [81.3, 1814.0], [81.4, 1816.0], [81.5, 1825.0], [81.6, 1825.0], [81.7, 1834.0], [81.8, 1835.0], [81.9, 1835.0], [82.0, 1837.0], [82.1, 1842.0], [82.2, 1842.0], [82.3, 1842.0], [82.4, 1845.0], [82.5, 1846.0], [82.6, 1847.0], [82.7, 1847.0], [82.8, 1848.0], [82.9, 1852.0], [83.0, 1855.0], [83.1, 1855.0], [83.2, 1858.0], [83.3, 1862.0], [83.4, 1862.0], [83.5, 1864.0], [83.6, 1866.0], [83.7, 1868.0], [83.8, 1868.0], [83.9, 1872.0], [84.0, 1878.0], [84.1, 1879.0], [84.2, 1879.0], [84.3, 1882.0], [84.4, 1885.0], [84.5, 1885.0], [84.6, 1885.0], [84.7, 1891.0], [84.8, 1900.0], [84.9, 1902.0], [85.0, 1902.0], [85.1, 1903.0], [85.2, 1909.0], [85.3, 1909.0], [85.4, 1913.0], [85.5, 1914.0], [85.6, 1916.0], [85.7, 1916.0], [85.8, 1917.0], [85.9, 1923.0], [86.0, 1935.0], [86.1, 1935.0], [86.2, 1938.0], [86.3, 1938.0], [86.4, 1941.0], [86.5, 1941.0], [86.6, 1964.0], [86.7, 1968.0], [86.8, 1968.0], [86.9, 1969.0], [87.0, 1970.0], [87.1, 1971.0], [87.2, 1971.0], [87.3, 1974.0], [87.4, 1976.0], [87.5, 1977.0], [87.6, 1977.0], [87.7, 1978.0], [87.8, 1989.0], [87.9, 1992.0], [88.0, 1992.0], [88.1, 1994.0], [88.2, 1994.0], [88.3, 1994.0], [88.4, 1994.0], [88.5, 1994.0], [88.6, 1996.0], [88.7, 1996.0], [88.8, 1998.0], [88.9, 1999.0], [89.0, 2005.0], [89.1, 2005.0], [89.2, 2008.0], [89.3, 2008.0], [89.4, 2012.0], [89.5, 2012.0], [89.6, 2012.0], [89.7, 2014.0], [89.8, 2031.0], [89.9, 2031.0], [90.0, 2043.0], [90.1, 2055.0], [90.2, 2055.0], [90.3, 2055.0], [90.4, 2056.0], [90.5, 2057.0], [90.6, 2057.0], [90.7, 2063.0], [90.8, 2063.0], [90.9, 2063.0], [91.0, 2063.0], [91.1, 2071.0], [91.2, 2076.0], [91.3, 2080.0], [91.4, 2080.0], [91.5, 2082.0], [91.6, 2097.0], [91.7, 2097.0], [91.8, 2098.0], [91.9, 2099.0], [92.0, 2099.0], [92.1, 2099.0], [92.2, 2104.0], [92.3, 2108.0], [92.4, 2111.0], [92.5, 2111.0], [92.6, 2120.0], [92.7, 2121.0], [92.8, 2126.0], [92.9, 2126.0], [93.0, 2134.0], [93.1, 2146.0], [93.2, 2147.0], [93.3, 2147.0], [93.4, 2152.0], [93.5, 2157.0], [93.6, 2157.0], [93.7, 2168.0], [93.8, 2189.0], [93.9, 2191.0], [94.0, 2191.0], [94.1, 2199.0], [94.2, 2201.0], [94.3, 2224.0], [94.4, 2224.0], [94.5, 2232.0], [94.6, 2240.0], [94.7, 2244.0], [94.8, 2244.0], [94.9, 2255.0], [95.0, 2273.0], [95.1, 2273.0], [95.2, 2281.0], [95.3, 2295.0], [95.4, 2302.0], [95.5, 2302.0], [95.6, 2321.0], [95.7, 2321.0], [95.8, 2337.0], [95.9, 2337.0], [96.0, 2348.0], [96.1, 2412.0], [96.2, 2463.0], [96.3, 2463.0], [96.4, 2495.0], [96.5, 2568.0], [96.6, 2625.0], [96.7, 2625.0], [96.8, 2670.0], [96.9, 2711.0], [97.0, 2711.0], [97.1, 2782.0], [97.2, 2783.0], [97.3, 2791.0], [97.4, 2791.0], [97.5, 2791.0], [97.6, 2795.0], [97.7, 2818.0], [97.8, 2818.0], [97.9, 2884.0], [98.0, 2901.0], [98.1, 3042.0], [98.2, 3042.0], [98.3, 3087.0], [98.4, 3088.0], [98.5, 3088.0], [98.6, 3182.0], [98.7, 3241.0], [98.8, 3279.0], [98.9, 3279.0], [99.0, 3404.0], [99.1, 3492.0], [99.2, 3620.0], [99.3, 3620.0], [99.4, 3645.0], [99.5, 3651.0], [99.6, 3756.0], [99.7, 3756.0], [99.8, 4070.0], [99.9, 5112.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 300.0, "maxY": 63.0, "series": [{"data": [[600.0, 33.0], [700.0, 38.0], [800.0, 44.0], [900.0, 52.0], [1000.0, 43.0], [1100.0, 63.0], [1200.0, 51.0], [1300.0, 60.0], [1400.0, 41.0], [1500.0, 36.0], [1600.0, 30.0], [1700.0, 37.0], [1800.0, 31.0], [1900.0, 31.0], [2000.0, 23.0], [2100.0, 15.0], [2300.0, 5.0], [2200.0, 9.0], [2400.0, 3.0], [2500.0, 1.0], [2600.0, 2.0], [2700.0, 6.0], [2800.0, 2.0], [2900.0, 1.0], [3000.0, 3.0], [3100.0, 1.0], [3200.0, 2.0], [3400.0, 2.0], [3600.0, 3.0], [3700.0, 1.0], [4000.0, 1.0], [300.0, 2.0], [5100.0, 1.0], [400.0, 13.0], [500.0, 49.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 5100.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 15.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 475.0, "series": [{"data": [[0.0, 15.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 475.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 245.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 19.741496598639458, "minX": 1.60183518E12, "maxY": 19.741496598639458, "series": [{"data": [[1.60183518E12, 19.741496598639458]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60183518E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 425.0, "minX": 1.0, "maxY": 2884.0, "series": [{"data": [[8.0, 1913.0], [2.0, 1396.0], [9.0, 642.0], [10.0, 2111.0], [11.0, 2244.0], [12.0, 550.0], [3.0, 1283.0], [13.0, 631.0], [14.0, 588.0], [15.0, 611.0], [16.0, 904.0], [4.0, 1374.0], [1.0, 2791.0], [17.0, 2884.0], [18.0, 425.0], [19.0, 555.0], [20.0, 1334.0796089385472], [5.0, 1879.0], [6.0, 2337.0], [7.0, 1793.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[19.741496598639458, 1336.2068027210883]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 20.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 5523.033333333334, "minX": 1.60183518E12, "maxY": 1835687.5666666667, "series": [{"data": [[1.60183518E12, 1835687.5666666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60183518E12, 5523.033333333334]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60183518E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 1336.2068027210883, "minX": 1.60183518E12, "maxY": 1336.2068027210883, "series": [{"data": [[1.60183518E12, 1336.2068027210883]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60183518E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 1296.2217687074824, "minX": 1.60183518E12, "maxY": 1296.2217687074824, "series": [{"data": [[1.60183518E12, 1296.2217687074824]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60183518E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.41224489795918495, "minX": 1.60183518E12, "maxY": 0.41224489795918495, "series": [{"data": [[1.60183518E12, 0.41224489795918495]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60183518E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 316.0, "minX": 1.60183518E12, "maxY": 5112.0, "series": [{"data": [[1.60183518E12, 5112.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60183518E12, 425.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60183518E12, 425.28640007019044]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60183518E12, 425.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60183518E12, 316.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60183518E12, 1257.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60183518E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 807.0, "minX": 1.0, "maxY": 2791.0, "series": [{"data": [[2.0, 2122.0], [10.0, 1301.0], [11.0, 1879.0], [12.0, 1428.5], [13.0, 1409.5], [14.0, 1394.5], [15.0, 1457.0], [16.0, 1151.5], [1.0, 2791.0], [17.0, 1191.5], [18.0, 903.5], [19.0, 1108.0], [20.0, 914.0], [21.0, 807.0], [22.0, 870.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 22.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 801.0, "minX": 1.0, "maxY": 2703.0, "series": [{"data": [[2.0, 2113.5], [10.0, 1258.0], [11.0, 1874.0], [12.0, 1378.0], [13.0, 1375.5], [14.0, 1367.0], [15.0, 1401.0], [16.0, 1087.0], [1.0, 2703.0], [17.0, 1133.5], [18.0, 892.0], [19.0, 1097.0], [20.0, 909.5], [21.0, 801.0], [22.0, 839.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 22.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 12.25, "minX": 1.60183518E12, "maxY": 12.25, "series": [{"data": [[1.60183518E12, 12.25]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60183518E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 12.25, "minX": 1.60183518E12, "maxY": 12.25, "series": [{"data": [[1.60183518E12, 12.25]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60183518E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 12.25, "minX": 1.60183518E12, "maxY": 12.25, "series": [{"data": [[1.60183518E12, 12.25]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60183518E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 12.25, "minX": 1.60183518E12, "maxY": 12.25, "series": [{"data": [[1.60183518E12, 12.25]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60183518E12, "title": "Total Transactions Per Second"}},
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

