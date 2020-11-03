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
        data: {"result": {"minY": 242.0, "minX": 0.0, "maxY": 6002.0, "series": [{"data": [[0.0, 242.0], [0.1, 242.0], [0.2, 312.0], [0.3, 372.0], [0.4, 372.0], [0.5, 390.0], [0.6, 444.0], [0.7, 466.0], [0.8, 466.0], [0.9, 480.0], [1.0, 487.0], [1.1, 489.0], [1.2, 489.0], [1.3, 496.0], [1.4, 509.0], [1.5, 512.0], [1.6, 512.0], [1.7, 522.0], [1.8, 525.0], [1.9, 525.0], [2.0, 530.0], [2.1, 538.0], [2.2, 546.0], [2.3, 546.0], [2.4, 556.0], [2.5, 558.0], [2.6, 563.0], [2.7, 563.0], [2.8, 577.0], [2.9, 580.0], [3.0, 588.0], [3.1, 588.0], [3.2, 589.0], [3.3, 596.0], [3.4, 596.0], [3.5, 597.0], [3.6, 617.0], [3.7, 619.0], [3.8, 619.0], [3.9, 626.0], [4.0, 627.0], [4.1, 632.0], [4.2, 632.0], [4.3, 638.0], [4.4, 643.0], [4.5, 645.0], [4.6, 645.0], [4.7, 645.0], [4.8, 657.0], [4.9, 666.0], [5.0, 666.0], [5.1, 670.0], [5.2, 676.0], [5.3, 676.0], [5.4, 677.0], [5.5, 678.0], [5.6, 682.0], [5.7, 682.0], [5.8, 685.0], [5.9, 687.0], [6.0, 687.0], [6.1, 687.0], [6.2, 691.0], [6.3, 693.0], [6.4, 699.0], [6.5, 699.0], [6.6, 699.0], [6.7, 699.0], [6.8, 699.0], [6.9, 699.0], [7.0, 701.0], [7.1, 703.0], [7.2, 703.0], [7.3, 706.0], [7.4, 706.0], [7.5, 706.0], [7.6, 706.0], [7.7, 708.0], [7.8, 708.0], [7.9, 709.0], [8.0, 709.0], [8.1, 713.0], [8.2, 713.0], [8.3, 717.0], [8.4, 717.0], [8.5, 718.0], [8.6, 720.0], [8.7, 720.0], [8.8, 720.0], [8.9, 725.0], [9.0, 726.0], [9.1, 726.0], [9.2, 726.0], [9.3, 727.0], [9.4, 727.0], [9.5, 727.0], [9.6, 727.0], [9.7, 728.0], [9.8, 730.0], [9.9, 730.0], [10.0, 731.0], [10.1, 731.0], [10.2, 731.0], [10.3, 732.0], [10.4, 733.0], [10.5, 741.0], [10.6, 741.0], [10.7, 742.0], [10.8, 744.0], [10.9, 745.0], [11.0, 745.0], [11.1, 750.0], [11.2, 750.0], [11.3, 752.0], [11.4, 752.0], [11.5, 753.0], [11.6, 754.0], [11.7, 754.0], [11.8, 755.0], [11.9, 757.0], [12.0, 758.0], [12.1, 758.0], [12.2, 759.0], [12.3, 760.0], [12.4, 760.0], [12.5, 760.0], [12.6, 762.0], [12.7, 762.0], [12.8, 763.0], [12.9, 763.0], [13.0, 763.0], [13.1, 764.0], [13.2, 766.0], [13.3, 766.0], [13.4, 772.0], [13.5, 772.0], [13.6, 772.0], [13.7, 772.0], [13.8, 775.0], [13.9, 776.0], [14.0, 776.0], [14.1, 777.0], [14.2, 779.0], [14.3, 785.0], [14.4, 785.0], [14.5, 785.0], [14.6, 786.0], [14.7, 789.0], [14.8, 789.0], [14.9, 792.0], [15.0, 792.0], [15.1, 792.0], [15.2, 796.0], [15.3, 797.0], [15.4, 799.0], [15.5, 799.0], [15.6, 800.0], [15.7, 800.0], [15.8, 801.0], [15.9, 801.0], [16.0, 801.0], [16.1, 808.0], [16.2, 809.0], [16.3, 809.0], [16.4, 810.0], [16.5, 816.0], [16.6, 818.0], [16.7, 818.0], [16.8, 822.0], [16.9, 825.0], [17.0, 825.0], [17.1, 826.0], [17.2, 826.0], [17.3, 829.0], [17.4, 829.0], [17.5, 830.0], [17.6, 835.0], [17.7, 836.0], [17.8, 836.0], [17.9, 838.0], [18.0, 839.0], [18.1, 839.0], [18.2, 839.0], [18.3, 839.0], [18.4, 840.0], [18.5, 840.0], [18.6, 842.0], [18.7, 852.0], [18.8, 858.0], [18.9, 858.0], [19.0, 862.0], [19.1, 863.0], [19.2, 864.0], [19.3, 864.0], [19.4, 864.0], [19.5, 869.0], [19.6, 869.0], [19.7, 869.0], [19.8, 869.0], [19.9, 877.0], [20.0, 877.0], [20.1, 877.0], [20.2, 880.0], [20.3, 890.0], [20.4, 890.0], [20.5, 890.0], [20.6, 896.0], [20.7, 897.0], [20.8, 897.0], [20.9, 898.0], [21.0, 901.0], [21.1, 904.0], [21.2, 904.0], [21.3, 907.0], [21.4, 907.0], [21.5, 909.0], [21.6, 909.0], [21.7, 913.0], [21.8, 918.0], [21.9, 918.0], [22.0, 919.0], [22.1, 920.0], [22.2, 921.0], [22.3, 921.0], [22.4, 923.0], [22.5, 923.0], [22.6, 924.0], [22.7, 924.0], [22.8, 925.0], [22.9, 926.0], [23.0, 930.0], [23.1, 930.0], [23.2, 934.0], [23.3, 938.0], [23.4, 938.0], [23.5, 938.0], [23.6, 938.0], [23.7, 940.0], [23.8, 940.0], [23.9, 944.0], [24.0, 945.0], [24.1, 946.0], [24.2, 946.0], [24.3, 947.0], [24.4, 950.0], [24.5, 952.0], [24.6, 952.0], [24.7, 955.0], [24.8, 956.0], [24.9, 957.0], [25.0, 957.0], [25.1, 960.0], [25.2, 963.0], [25.3, 963.0], [25.4, 967.0], [25.5, 968.0], [25.6, 968.0], [25.7, 968.0], [25.8, 969.0], [25.9, 970.0], [26.0, 971.0], [26.1, 971.0], [26.2, 972.0], [26.3, 973.0], [26.4, 976.0], [26.5, 976.0], [26.6, 977.0], [26.7, 978.0], [26.8, 978.0], [26.9, 980.0], [27.0, 980.0], [27.1, 982.0], [27.2, 982.0], [27.3, 983.0], [27.4, 983.0], [27.5, 984.0], [27.6, 984.0], [27.7, 985.0], [27.8, 987.0], [27.9, 988.0], [28.0, 988.0], [28.1, 988.0], [28.2, 992.0], [28.3, 995.0], [28.4, 995.0], [28.5, 999.0], [28.6, 999.0], [28.7, 999.0], [28.8, 1000.0], [28.9, 1006.0], [29.0, 1009.0], [29.1, 1009.0], [29.2, 1009.0], [29.3, 1011.0], [29.4, 1014.0], [29.5, 1014.0], [29.6, 1014.0], [29.7, 1014.0], [29.8, 1015.0], [29.9, 1015.0], [30.0, 1015.0], [30.1, 1016.0], [30.2, 1016.0], [30.3, 1018.0], [30.4, 1019.0], [30.5, 1026.0], [30.6, 1026.0], [30.7, 1030.0], [30.8, 1032.0], [30.9, 1035.0], [31.0, 1035.0], [31.1, 1038.0], [31.2, 1039.0], [31.3, 1054.0], [31.4, 1054.0], [31.5, 1058.0], [31.6, 1060.0], [31.7, 1060.0], [31.8, 1060.0], [31.9, 1064.0], [32.0, 1064.0], [32.1, 1064.0], [32.2, 1065.0], [32.3, 1068.0], [32.4, 1070.0], [32.5, 1070.0], [32.6, 1071.0], [32.7, 1073.0], [32.8, 1073.0], [32.9, 1073.0], [33.0, 1074.0], [33.1, 1077.0], [33.2, 1077.0], [33.3, 1077.0], [33.4, 1090.0], [33.5, 1092.0], [33.6, 1092.0], [33.7, 1093.0], [33.8, 1094.0], [33.9, 1100.0], [34.0, 1100.0], [34.1, 1101.0], [34.2, 1102.0], [34.3, 1102.0], [34.4, 1102.0], [34.5, 1103.0], [34.6, 1105.0], [34.7, 1107.0], [34.8, 1107.0], [34.9, 1109.0], [35.0, 1112.0], [35.1, 1112.0], [35.2, 1114.0], [35.3, 1114.0], [35.4, 1116.0], [35.5, 1116.0], [35.6, 1122.0], [35.7, 1130.0], [35.8, 1131.0], [35.9, 1131.0], [36.0, 1131.0], [36.1, 1132.0], [36.2, 1133.0], [36.3, 1133.0], [36.4, 1136.0], [36.5, 1139.0], [36.6, 1139.0], [36.7, 1139.0], [36.8, 1141.0], [36.9, 1142.0], [37.0, 1142.0], [37.1, 1150.0], [37.2, 1151.0], [37.3, 1152.0], [37.4, 1152.0], [37.5, 1152.0], [37.6, 1153.0], [37.7, 1153.0], [37.8, 1153.0], [37.9, 1155.0], [38.0, 1156.0], [38.1, 1161.0], [38.2, 1161.0], [38.3, 1163.0], [38.4, 1166.0], [38.5, 1166.0], [38.6, 1168.0], [38.7, 1168.0], [38.8, 1169.0], [38.9, 1169.0], [39.0, 1169.0], [39.1, 1175.0], [39.2, 1177.0], [39.3, 1177.0], [39.4, 1178.0], [39.5, 1184.0], [39.6, 1185.0], [39.7, 1185.0], [39.8, 1186.0], [39.9, 1188.0], [40.0, 1188.0], [40.1, 1188.0], [40.2, 1189.0], [40.3, 1190.0], [40.4, 1190.0], [40.5, 1191.0], [40.6, 1192.0], [40.7, 1194.0], [40.8, 1194.0], [40.9, 1195.0], [41.0, 1201.0], [41.1, 1202.0], [41.2, 1202.0], [41.3, 1203.0], [41.4, 1204.0], [41.5, 1204.0], [41.6, 1204.0], [41.7, 1210.0], [41.8, 1211.0], [41.9, 1211.0], [42.0, 1212.0], [42.1, 1215.0], [42.2, 1217.0], [42.3, 1217.0], [42.4, 1218.0], [42.5, 1218.0], [42.6, 1219.0], [42.7, 1219.0], [42.8, 1219.0], [42.9, 1219.0], [43.0, 1220.0], [43.1, 1220.0], [43.2, 1224.0], [43.3, 1227.0], [43.4, 1227.0], [43.5, 1228.0], [43.6, 1231.0], [43.7, 1233.0], [43.8, 1233.0], [43.9, 1236.0], [44.0, 1236.0], [44.1, 1237.0], [44.2, 1237.0], [44.3, 1237.0], [44.4, 1238.0], [44.5, 1239.0], [44.6, 1239.0], [44.7, 1239.0], [44.8, 1242.0], [44.9, 1244.0], [45.0, 1244.0], [45.1, 1244.0], [45.2, 1248.0], [45.3, 1248.0], [45.4, 1251.0], [45.5, 1255.0], [45.6, 1258.0], [45.7, 1258.0], [45.8, 1262.0], [45.9, 1270.0], [46.0, 1272.0], [46.1, 1272.0], [46.2, 1274.0], [46.3, 1275.0], [46.4, 1275.0], [46.5, 1275.0], [46.6, 1277.0], [46.7, 1277.0], [46.8, 1277.0], [46.9, 1279.0], [47.0, 1280.0], [47.1, 1281.0], [47.2, 1281.0], [47.3, 1284.0], [47.4, 1284.0], [47.5, 1285.0], [47.6, 1285.0], [47.7, 1285.0], [47.8, 1286.0], [47.9, 1288.0], [48.0, 1288.0], [48.1, 1291.0], [48.2, 1293.0], [48.3, 1299.0], [48.4, 1299.0], [48.5, 1299.0], [48.6, 1304.0], [48.7, 1304.0], [48.8, 1304.0], [48.9, 1306.0], [49.0, 1307.0], [49.1, 1307.0], [49.2, 1308.0], [49.3, 1310.0], [49.4, 1310.0], [49.5, 1310.0], [49.6, 1311.0], [49.7, 1317.0], [49.8, 1321.0], [49.9, 1321.0], [50.0, 1325.0], [50.1, 1326.0], [50.2, 1326.0], [50.3, 1327.0], [50.4, 1332.0], [50.5, 1335.0], [50.6, 1335.0], [50.7, 1338.0], [50.8, 1339.0], [50.9, 1340.0], [51.0, 1340.0], [51.1, 1343.0], [51.2, 1344.0], [51.3, 1346.0], [51.4, 1346.0], [51.5, 1346.0], [51.6, 1349.0], [51.7, 1349.0], [51.8, 1352.0], [51.9, 1355.0], [52.0, 1355.0], [52.1, 1355.0], [52.2, 1356.0], [52.3, 1357.0], [52.4, 1358.0], [52.5, 1358.0], [52.6, 1359.0], [52.7, 1361.0], [52.8, 1361.0], [52.9, 1361.0], [53.0, 1364.0], [53.1, 1364.0], [53.2, 1364.0], [53.3, 1364.0], [53.4, 1367.0], [53.5, 1367.0], [53.6, 1367.0], [53.7, 1367.0], [53.8, 1368.0], [53.9, 1371.0], [54.0, 1371.0], [54.1, 1373.0], [54.2, 1374.0], [54.3, 1378.0], [54.4, 1378.0], [54.5, 1386.0], [54.6, 1387.0], [54.7, 1395.0], [54.8, 1395.0], [54.9, 1397.0], [55.0, 1399.0], [55.1, 1399.0], [55.2, 1399.0], [55.3, 1401.0], [55.4, 1401.0], [55.5, 1401.0], [55.6, 1403.0], [55.7, 1405.0], [55.8, 1406.0], [55.9, 1406.0], [56.0, 1407.0], [56.1, 1409.0], [56.2, 1413.0], [56.3, 1413.0], [56.4, 1414.0], [56.5, 1414.0], [56.6, 1415.0], [56.7, 1415.0], [56.8, 1415.0], [56.9, 1416.0], [57.0, 1416.0], [57.1, 1423.0], [57.2, 1426.0], [57.3, 1426.0], [57.4, 1426.0], [57.5, 1427.0], [57.6, 1428.0], [57.7, 1429.0], [57.8, 1429.0], [57.9, 1429.0], [58.0, 1432.0], [58.1, 1434.0], [58.2, 1434.0], [58.3, 1437.0], [58.4, 1439.0], [58.5, 1439.0], [58.6, 1439.0], [58.7, 1440.0], [58.8, 1440.0], [58.9, 1440.0], [59.0, 1440.0], [59.1, 1441.0], [59.2, 1442.0], [59.3, 1442.0], [59.4, 1443.0], [59.5, 1444.0], [59.6, 1447.0], [59.7, 1447.0], [59.8, 1448.0], [59.9, 1449.0], [60.0, 1451.0], [60.1, 1451.0], [60.2, 1451.0], [60.3, 1452.0], [60.4, 1452.0], [60.5, 1454.0], [60.6, 1454.0], [60.7, 1455.0], [60.8, 1455.0], [60.9, 1456.0], [61.0, 1459.0], [61.1, 1460.0], [61.2, 1460.0], [61.3, 1461.0], [61.4, 1470.0], [61.5, 1473.0], [61.6, 1473.0], [61.7, 1477.0], [61.8, 1481.0], [61.9, 1481.0], [62.0, 1488.0], [62.1, 1488.0], [62.2, 1491.0], [62.3, 1491.0], [62.4, 1492.0], [62.5, 1493.0], [62.6, 1495.0], [62.7, 1495.0], [62.8, 1496.0], [62.9, 1497.0], [63.0, 1497.0], [63.1, 1497.0], [63.2, 1499.0], [63.3, 1500.0], [63.4, 1500.0], [63.5, 1505.0], [63.6, 1506.0], [63.7, 1507.0], [63.8, 1507.0], [63.9, 1508.0], [64.0, 1510.0], [64.1, 1511.0], [64.2, 1511.0], [64.3, 1514.0], [64.4, 1514.0], [64.5, 1516.0], [64.6, 1516.0], [64.7, 1517.0], [64.8, 1518.0], [64.9, 1521.0], [65.0, 1521.0], [65.1, 1522.0], [65.2, 1523.0], [65.3, 1523.0], [65.4, 1525.0], [65.5, 1526.0], [65.6, 1526.0], [65.7, 1526.0], [65.8, 1534.0], [65.9, 1534.0], [66.0, 1539.0], [66.1, 1539.0], [66.2, 1545.0], [66.3, 1545.0], [66.4, 1546.0], [66.5, 1546.0], [66.6, 1546.0], [66.7, 1552.0], [66.8, 1552.0], [66.9, 1554.0], [67.0, 1554.0], [67.1, 1554.0], [67.2, 1554.0], [67.3, 1556.0], [67.4, 1558.0], [67.5, 1562.0], [67.6, 1562.0], [67.7, 1563.0], [67.8, 1563.0], [67.9, 1567.0], [68.0, 1567.0], [68.1, 1568.0], [68.2, 1568.0], [68.3, 1569.0], [68.4, 1569.0], [68.5, 1573.0], [68.6, 1578.0], [68.7, 1578.0], [68.8, 1580.0], [68.9, 1583.0], [69.0, 1586.0], [69.1, 1586.0], [69.2, 1588.0], [69.3, 1589.0], [69.4, 1590.0], [69.5, 1590.0], [69.6, 1593.0], [69.7, 1593.0], [69.8, 1595.0], [69.9, 1595.0], [70.0, 1597.0], [70.1, 1597.0], [70.2, 1597.0], [70.3, 1610.0], [70.4, 1611.0], [70.5, 1614.0], [70.6, 1614.0], [70.7, 1616.0], [70.8, 1619.0], [70.9, 1621.0], [71.0, 1621.0], [71.1, 1630.0], [71.2, 1630.0], [71.3, 1631.0], [71.4, 1631.0], [71.5, 1635.0], [71.6, 1637.0], [71.7, 1637.0], [71.8, 1639.0], [71.9, 1641.0], [72.0, 1644.0], [72.1, 1644.0], [72.2, 1645.0], [72.3, 1645.0], [72.4, 1648.0], [72.5, 1648.0], [72.6, 1653.0], [72.7, 1654.0], [72.8, 1661.0], [72.9, 1661.0], [73.0, 1662.0], [73.1, 1667.0], [73.2, 1673.0], [73.3, 1673.0], [73.4, 1679.0], [73.5, 1681.0], [73.6, 1681.0], [73.7, 1683.0], [73.8, 1684.0], [73.9, 1684.0], [74.0, 1684.0], [74.1, 1684.0], [74.2, 1685.0], [74.3, 1688.0], [74.4, 1688.0], [74.5, 1691.0], [74.6, 1694.0], [74.7, 1694.0], [74.8, 1694.0], [74.9, 1697.0], [75.0, 1699.0], [75.1, 1699.0], [75.2, 1700.0], [75.3, 1700.0], [75.4, 1701.0], [75.5, 1701.0], [75.6, 1703.0], [75.7, 1711.0], [75.8, 1716.0], [75.9, 1716.0], [76.0, 1716.0], [76.1, 1723.0], [76.2, 1723.0], [76.3, 1723.0], [76.4, 1725.0], [76.5, 1727.0], [76.6, 1728.0], [76.7, 1728.0], [76.8, 1729.0], [76.9, 1730.0], [77.0, 1730.0], [77.1, 1733.0], [77.2, 1735.0], [77.3, 1736.0], [77.4, 1736.0], [77.5, 1736.0], [77.6, 1737.0], [77.7, 1740.0], [77.8, 1740.0], [77.9, 1742.0], [78.0, 1742.0], [78.1, 1744.0], [78.2, 1744.0], [78.3, 1747.0], [78.4, 1747.0], [78.5, 1747.0], [78.6, 1749.0], [78.7, 1751.0], [78.8, 1751.0], [78.9, 1751.0], [79.0, 1754.0], [79.1, 1757.0], [79.2, 1759.0], [79.3, 1759.0], [79.4, 1761.0], [79.5, 1762.0], [79.6, 1764.0], [79.7, 1764.0], [79.8, 1765.0], [79.9, 1774.0], [80.0, 1775.0], [80.1, 1775.0], [80.2, 1776.0], [80.3, 1783.0], [80.4, 1783.0], [80.5, 1784.0], [80.6, 1786.0], [80.7, 1788.0], [80.8, 1788.0], [80.9, 1789.0], [81.0, 1792.0], [81.1, 1794.0], [81.2, 1794.0], [81.3, 1796.0], [81.4, 1798.0], [81.5, 1799.0], [81.6, 1799.0], [81.7, 1803.0], [81.8, 1803.0], [81.9, 1803.0], [82.0, 1804.0], [82.1, 1806.0], [82.2, 1806.0], [82.3, 1806.0], [82.4, 1808.0], [82.5, 1815.0], [82.6, 1822.0], [82.7, 1822.0], [82.8, 1822.0], [82.9, 1825.0], [83.0, 1830.0], [83.1, 1830.0], [83.2, 1830.0], [83.3, 1831.0], [83.4, 1831.0], [83.5, 1865.0], [83.6, 1868.0], [83.7, 1870.0], [83.8, 1870.0], [83.9, 1871.0], [84.0, 1872.0], [84.1, 1873.0], [84.2, 1873.0], [84.3, 1878.0], [84.4, 1883.0], [84.5, 1884.0], [84.6, 1884.0], [84.7, 1887.0], [84.8, 1889.0], [84.9, 1890.0], [85.0, 1890.0], [85.1, 1895.0], [85.2, 1899.0], [85.3, 1899.0], [85.4, 1900.0], [85.5, 1911.0], [85.6, 1915.0], [85.7, 1915.0], [85.8, 1921.0], [85.9, 1924.0], [86.0, 1925.0], [86.1, 1925.0], [86.2, 1925.0], [86.3, 1927.0], [86.4, 1930.0], [86.5, 1930.0], [86.6, 1933.0], [86.7, 1945.0], [86.8, 1945.0], [86.9, 1957.0], [87.0, 1957.0], [87.1, 1962.0], [87.2, 1962.0], [87.3, 1964.0], [87.4, 1965.0], [87.5, 1968.0], [87.6, 1968.0], [87.7, 1971.0], [87.8, 1972.0], [87.9, 1979.0], [88.0, 1979.0], [88.1, 1980.0], [88.2, 1980.0], [88.3, 1984.0], [88.4, 1984.0], [88.5, 1987.0], [88.6, 1987.0], [88.7, 1987.0], [88.8, 1990.0], [88.9, 1993.0], [89.0, 1998.0], [89.1, 1998.0], [89.2, 1998.0], [89.3, 2011.0], [89.4, 2021.0], [89.5, 2021.0], [89.6, 2027.0], [89.7, 2032.0], [89.8, 2034.0], [89.9, 2034.0], [90.0, 2042.0], [90.1, 2042.0], [90.2, 2042.0], [90.3, 2048.0], [90.4, 2051.0], [90.5, 2053.0], [90.6, 2053.0], [90.7, 2056.0], [90.8, 2063.0], [90.9, 2065.0], [91.0, 2065.0], [91.1, 2068.0], [91.2, 2072.0], [91.3, 2104.0], [91.4, 2104.0], [91.5, 2108.0], [91.6, 2111.0], [91.7, 2111.0], [91.8, 2114.0], [91.9, 2126.0], [92.0, 2126.0], [92.1, 2126.0], [92.2, 2128.0], [92.3, 2133.0], [92.4, 2142.0], [92.5, 2142.0], [92.6, 2148.0], [92.7, 2150.0], [92.8, 2151.0], [92.9, 2151.0], [93.0, 2154.0], [93.1, 2157.0], [93.2, 2160.0], [93.3, 2160.0], [93.4, 2176.0], [93.5, 2179.0], [93.6, 2179.0], [93.7, 2180.0], [93.8, 2185.0], [93.9, 2192.0], [94.0, 2192.0], [94.1, 2194.0], [94.2, 2206.0], [94.3, 2210.0], [94.4, 2210.0], [94.5, 2215.0], [94.6, 2240.0], [94.7, 2246.0], [94.8, 2246.0], [94.9, 2250.0], [95.0, 2258.0], [95.1, 2258.0], [95.2, 2267.0], [95.3, 2270.0], [95.4, 2278.0], [95.5, 2278.0], [95.6, 2331.0], [95.7, 2337.0], [95.8, 2365.0], [95.9, 2365.0], [96.0, 2383.0], [96.1, 2388.0], [96.2, 2408.0], [96.3, 2408.0], [96.4, 2410.0], [96.5, 2436.0], [96.6, 2478.0], [96.7, 2478.0], [96.8, 2559.0], [96.9, 2601.0], [97.0, 2601.0], [97.1, 2629.0], [97.2, 2629.0], [97.3, 2647.0], [97.4, 2647.0], [97.5, 2665.0], [97.6, 2782.0], [97.7, 2833.0], [97.8, 2833.0], [97.9, 2840.0], [98.0, 2873.0], [98.1, 2941.0], [98.2, 2941.0], [98.3, 2977.0], [98.4, 3205.0], [98.5, 3205.0], [98.6, 3427.0], [98.7, 3433.0], [98.8, 3514.0], [98.9, 3514.0], [99.0, 3666.0], [99.1, 3688.0], [99.2, 3758.0], [99.3, 3758.0], [99.4, 4272.0], [99.5, 4344.0], [99.6, 4530.0], [99.7, 4530.0], [99.8, 4751.0], [99.9, 6002.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 200.0, "maxY": 63.0, "series": [{"data": [[600.0, 25.0], [700.0, 63.0], [800.0, 40.0], [900.0, 57.0], [1000.0, 38.0], [1100.0, 52.0], [1200.0, 56.0], [1300.0, 49.0], [1400.0, 59.0], [1500.0, 51.0], [1600.0, 36.0], [1700.0, 48.0], [1800.0, 27.0], [1900.0, 29.0], [2000.0, 15.0], [2100.0, 21.0], [2200.0, 10.0], [2300.0, 5.0], [2400.0, 4.0], [2500.0, 1.0], [2600.0, 5.0], [2700.0, 1.0], [2800.0, 3.0], [2900.0, 2.0], [200.0, 1.0], [3200.0, 1.0], [3400.0, 2.0], [3500.0, 1.0], [3600.0, 2.0], [3700.0, 1.0], [4200.0, 1.0], [4300.0, 1.0], [4500.0, 1.0], [300.0, 3.0], [4700.0, 1.0], [6000.0, 1.0], [400.0, 6.0], [500.0, 16.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 6000.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 10.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 456.0, "series": [{"data": [[0.0, 10.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 456.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 269.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 11.85201793721973, "minX": 1.604397E12, "maxY": 11.96885813148789, "series": [{"data": [[1.60439706E12, 11.85201793721973], [1.604397E12, 11.96885813148789]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60439706E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 484.5, "minX": 1.0, "maxY": 1711.0, "series": [{"data": [[8.0, 839.0], [4.0, 792.0], [2.0, 1711.0], [1.0, 1648.0], [9.0, 484.5], [10.0, 762.0], [5.0, 836.0], [11.0, 772.0], [6.0, 521.5], [12.0, 1392.0000000000002], [3.0, 1168.0], [7.0, 785.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[11.897959183673473, 1382.787755102041]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 12.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 2185.8166666666666, "minX": 1.604397E12, "maxY": 1058747.5333333334, "series": [{"data": [[1.60439706E12, 1058747.5333333334], [1.604397E12, 777026.3333333334]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60439706E12, 3337.2166666666667], [1.604397E12, 2185.8166666666666]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60439706E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 1302.4058295964119, "minX": 1.604397E12, "maxY": 1506.837370242215, "series": [{"data": [[1.60439706E12, 1302.4058295964119], [1.604397E12, 1506.837370242215]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60439706E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 1301.1681614349784, "minX": 1.604397E12, "maxY": 1505.4602076124568, "series": [{"data": [[1.60439706E12, 1301.1681614349784], [1.604397E12, 1505.4602076124568]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60439706E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.04035874439461884, "minX": 1.604397E12, "maxY": 0.49826989619377193, "series": [{"data": [[1.60439706E12, 0.04035874439461884], [1.604397E12, 0.49826989619377193]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60439706E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 242.0, "minX": 1.604397E12, "maxY": 6002.0, "series": [{"data": [[1.60439706E12, 4751.0], [1.604397E12, 6002.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60439706E12, 480.1609992539883], [1.604397E12, 405.9399893522263]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60439706E12, 482.9771002984047], [1.604397E12, 446.1340042591095]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60439706E12, 481.7254996269941], [1.604397E12, 428.26999467611313]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60439706E12, 372.0], [1.604397E12, 242.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60439706E12, 1234.5], [1.604397E12, 1427.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60439706E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 277.0, "minX": 1.0, "maxY": 1576.0, "series": [{"data": [[2.0, 277.0], [8.0, 1433.0], [9.0, 1422.0], [10.0, 1233.5], [11.0, 1080.5], [12.0, 1398.5], [13.0, 845.5], [15.0, 842.0], [4.0, 1140.0], [1.0, 1011.0], [16.0, 688.0], [5.0, 1485.5], [6.0, 1576.0], [7.0, 1554.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 16.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 274.0, "minX": 1.0, "maxY": 1575.0, "series": [{"data": [[2.0, 274.0], [8.0, 1432.0], [9.0, 1420.5], [10.0, 1233.0], [11.0, 1080.5], [12.0, 1397.0], [13.0, 845.5], [15.0, 841.0], [4.0, 1135.5], [1.0, 1011.0], [16.0, 687.0], [5.0, 1484.5], [6.0, 1575.0], [7.0, 1552.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 16.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 5.016666666666667, "minX": 1.604397E12, "maxY": 7.233333333333333, "series": [{"data": [[1.60439706E12, 7.233333333333333], [1.604397E12, 5.016666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60439706E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 4.816666666666666, "minX": 1.604397E12, "maxY": 7.433333333333334, "series": [{"data": [[1.60439706E12, 7.433333333333334], [1.604397E12, 4.816666666666666]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60439706E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 4.816666666666666, "minX": 1.604397E12, "maxY": 7.433333333333334, "series": [{"data": [[1.60439706E12, 7.433333333333334], [1.604397E12, 4.816666666666666]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60439706E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 4.816666666666666, "minX": 1.604397E12, "maxY": 7.433333333333334, "series": [{"data": [[1.60439706E12, 7.433333333333334], [1.604397E12, 4.816666666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60439706E12, "title": "Total Transactions Per Second"}},
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

