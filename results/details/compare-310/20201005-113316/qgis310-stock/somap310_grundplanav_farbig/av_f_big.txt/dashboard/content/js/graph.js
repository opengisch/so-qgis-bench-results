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
        data: {"result": {"minY": 437.0, "minX": 0.0, "maxY": 6157.0, "series": [{"data": [[0.0, 437.0], [0.1, 437.0], [0.2, 451.0], [0.3, 463.0], [0.4, 463.0], [0.5, 474.0], [0.6, 498.0], [0.7, 499.0], [0.8, 499.0], [0.9, 505.0], [1.0, 506.0], [1.1, 511.0], [1.2, 511.0], [1.3, 520.0], [1.4, 529.0], [1.5, 537.0], [1.6, 537.0], [1.7, 539.0], [1.8, 547.0], [1.9, 547.0], [2.0, 553.0], [2.1, 555.0], [2.2, 556.0], [2.3, 556.0], [2.4, 566.0], [2.5, 567.0], [2.6, 573.0], [2.7, 573.0], [2.8, 573.0], [2.9, 577.0], [3.0, 581.0], [3.1, 581.0], [3.2, 581.0], [3.3, 586.0], [3.4, 586.0], [3.5, 587.0], [3.6, 591.0], [3.7, 592.0], [3.8, 592.0], [3.9, 594.0], [4.0, 600.0], [4.1, 607.0], [4.2, 607.0], [4.3, 608.0], [4.4, 609.0], [4.5, 609.0], [4.6, 609.0], [4.7, 615.0], [4.8, 616.0], [4.9, 622.0], [5.0, 622.0], [5.1, 624.0], [5.2, 627.0], [5.3, 627.0], [5.4, 627.0], [5.5, 631.0], [5.6, 632.0], [5.7, 632.0], [5.8, 641.0], [5.9, 641.0], [6.0, 644.0], [6.1, 644.0], [6.2, 649.0], [6.3, 651.0], [6.4, 651.0], [6.5, 651.0], [6.6, 653.0], [6.7, 654.0], [6.8, 654.0], [6.9, 654.0], [7.0, 656.0], [7.1, 656.0], [7.2, 656.0], [7.3, 658.0], [7.4, 659.0], [7.5, 660.0], [7.6, 660.0], [7.7, 665.0], [7.8, 665.0], [7.9, 670.0], [8.0, 670.0], [8.1, 673.0], [8.2, 673.0], [8.3, 674.0], [8.4, 674.0], [8.5, 675.0], [8.6, 676.0], [8.7, 676.0], [8.8, 677.0], [8.9, 678.0], [9.0, 679.0], [9.1, 679.0], [9.2, 680.0], [9.3, 682.0], [9.4, 687.0], [9.5, 687.0], [9.6, 692.0], [9.7, 695.0], [9.8, 696.0], [9.9, 696.0], [10.0, 697.0], [10.1, 698.0], [10.2, 698.0], [10.3, 699.0], [10.4, 700.0], [10.5, 702.0], [10.6, 702.0], [10.7, 702.0], [10.8, 705.0], [10.9, 706.0], [11.0, 706.0], [11.1, 708.0], [11.2, 710.0], [11.3, 712.0], [11.4, 712.0], [11.5, 716.0], [11.6, 720.0], [11.7, 720.0], [11.8, 725.0], [11.9, 726.0], [12.0, 727.0], [12.1, 727.0], [12.2, 727.0], [12.3, 730.0], [12.4, 731.0], [12.5, 731.0], [12.6, 732.0], [12.7, 733.0], [12.8, 735.0], [12.9, 735.0], [13.0, 738.0], [13.1, 738.0], [13.2, 738.0], [13.3, 738.0], [13.4, 743.0], [13.5, 744.0], [13.6, 744.0], [13.7, 744.0], [13.8, 744.0], [13.9, 746.0], [14.0, 746.0], [14.1, 746.0], [14.2, 749.0], [14.3, 750.0], [14.4, 750.0], [14.5, 754.0], [14.6, 755.0], [14.7, 758.0], [14.8, 758.0], [14.9, 759.0], [15.0, 761.0], [15.1, 761.0], [15.2, 762.0], [15.3, 766.0], [15.4, 769.0], [15.5, 769.0], [15.6, 770.0], [15.7, 774.0], [15.8, 776.0], [15.9, 776.0], [16.0, 787.0], [16.1, 789.0], [16.2, 793.0], [16.3, 793.0], [16.4, 794.0], [16.5, 798.0], [16.6, 798.0], [16.7, 798.0], [16.8, 801.0], [16.9, 803.0], [17.0, 803.0], [17.1, 804.0], [17.2, 804.0], [17.3, 809.0], [17.4, 809.0], [17.5, 818.0], [17.6, 818.0], [17.7, 821.0], [17.8, 821.0], [17.9, 822.0], [18.0, 822.0], [18.1, 826.0], [18.2, 826.0], [18.3, 830.0], [18.4, 831.0], [18.5, 831.0], [18.6, 832.0], [18.7, 834.0], [18.8, 837.0], [18.9, 837.0], [19.0, 838.0], [19.1, 839.0], [19.2, 847.0], [19.3, 847.0], [19.4, 850.0], [19.5, 851.0], [19.6, 852.0], [19.7, 852.0], [19.8, 854.0], [19.9, 855.0], [20.0, 862.0], [20.1, 862.0], [20.2, 868.0], [20.3, 869.0], [20.4, 869.0], [20.5, 871.0], [20.6, 872.0], [20.7, 875.0], [20.8, 875.0], [20.9, 875.0], [21.0, 879.0], [21.1, 880.0], [21.2, 880.0], [21.3, 880.0], [21.4, 882.0], [21.5, 884.0], [21.6, 884.0], [21.7, 887.0], [21.8, 897.0], [21.9, 897.0], [22.0, 898.0], [22.1, 904.0], [22.2, 905.0], [22.3, 905.0], [22.4, 905.0], [22.5, 906.0], [22.6, 913.0], [22.7, 913.0], [22.8, 916.0], [22.9, 920.0], [23.0, 922.0], [23.1, 922.0], [23.2, 923.0], [23.3, 925.0], [23.4, 925.0], [23.5, 928.0], [23.6, 931.0], [23.7, 931.0], [23.8, 931.0], [23.9, 936.0], [24.0, 938.0], [24.1, 940.0], [24.2, 940.0], [24.3, 941.0], [24.4, 941.0], [24.5, 944.0], [24.6, 944.0], [24.7, 946.0], [24.8, 947.0], [24.9, 948.0], [25.0, 948.0], [25.1, 949.0], [25.2, 950.0], [25.3, 950.0], [25.4, 961.0], [25.5, 966.0], [25.6, 967.0], [25.7, 967.0], [25.8, 971.0], [25.9, 973.0], [26.0, 973.0], [26.1, 973.0], [26.2, 976.0], [26.3, 981.0], [26.4, 981.0], [26.5, 981.0], [26.6, 985.0], [26.7, 995.0], [26.8, 995.0], [26.9, 997.0], [27.0, 997.0], [27.1, 997.0], [27.2, 997.0], [27.3, 1001.0], [27.4, 1001.0], [27.5, 1001.0], [27.6, 1001.0], [27.7, 1006.0], [27.8, 1008.0], [27.9, 1009.0], [28.0, 1009.0], [28.1, 1010.0], [28.2, 1011.0], [28.3, 1012.0], [28.4, 1012.0], [28.5, 1016.0], [28.6, 1017.0], [28.7, 1017.0], [28.8, 1019.0], [28.9, 1019.0], [29.0, 1023.0], [29.1, 1023.0], [29.2, 1026.0], [29.3, 1027.0], [29.4, 1027.0], [29.5, 1027.0], [29.6, 1029.0], [29.7, 1033.0], [29.8, 1040.0], [29.9, 1040.0], [30.0, 1041.0], [30.1, 1041.0], [30.2, 1041.0], [30.3, 1046.0], [30.4, 1055.0], [30.5, 1055.0], [30.6, 1055.0], [30.7, 1060.0], [30.8, 1062.0], [30.9, 1062.0], [31.0, 1062.0], [31.1, 1064.0], [31.2, 1067.0], [31.3, 1069.0], [31.4, 1069.0], [31.5, 1074.0], [31.6, 1077.0], [31.7, 1077.0], [31.8, 1079.0], [31.9, 1080.0], [32.0, 1081.0], [32.1, 1081.0], [32.2, 1081.0], [32.3, 1085.0], [32.4, 1088.0], [32.5, 1088.0], [32.6, 1088.0], [32.7, 1093.0], [32.8, 1093.0], [32.9, 1093.0], [33.0, 1103.0], [33.1, 1104.0], [33.2, 1107.0], [33.3, 1107.0], [33.4, 1107.0], [33.5, 1108.0], [33.6, 1108.0], [33.7, 1109.0], [33.8, 1111.0], [33.9, 1114.0], [34.0, 1114.0], [34.1, 1118.0], [34.2, 1119.0], [34.3, 1120.0], [34.4, 1120.0], [34.5, 1125.0], [34.6, 1126.0], [34.7, 1127.0], [34.8, 1127.0], [34.9, 1131.0], [35.0, 1133.0], [35.1, 1133.0], [35.2, 1134.0], [35.3, 1142.0], [35.4, 1143.0], [35.5, 1143.0], [35.6, 1144.0], [35.7, 1148.0], [35.8, 1148.0], [35.9, 1148.0], [36.0, 1149.0], [36.1, 1153.0], [36.2, 1153.0], [36.3, 1153.0], [36.4, 1156.0], [36.5, 1160.0], [36.6, 1165.0], [36.7, 1165.0], [36.8, 1166.0], [36.9, 1166.0], [37.0, 1166.0], [37.1, 1167.0], [37.2, 1171.0], [37.3, 1171.0], [37.4, 1171.0], [37.5, 1174.0], [37.6, 1175.0], [37.7, 1177.0], [37.8, 1177.0], [37.9, 1177.0], [38.0, 1178.0], [38.1, 1181.0], [38.2, 1181.0], [38.3, 1182.0], [38.4, 1182.0], [38.5, 1182.0], [38.6, 1183.0], [38.7, 1189.0], [38.8, 1192.0], [38.9, 1192.0], [39.0, 1193.0], [39.1, 1193.0], [39.2, 1194.0], [39.3, 1194.0], [39.4, 1195.0], [39.5, 1200.0], [39.6, 1201.0], [39.7, 1201.0], [39.8, 1201.0], [39.9, 1202.0], [40.0, 1204.0], [40.1, 1204.0], [40.2, 1204.0], [40.3, 1205.0], [40.4, 1205.0], [40.5, 1207.0], [40.6, 1208.0], [40.7, 1212.0], [40.8, 1212.0], [40.9, 1215.0], [41.0, 1216.0], [41.1, 1219.0], [41.2, 1219.0], [41.3, 1225.0], [41.4, 1225.0], [41.5, 1226.0], [41.6, 1226.0], [41.7, 1230.0], [41.8, 1231.0], [41.9, 1231.0], [42.0, 1231.0], [42.1, 1233.0], [42.2, 1235.0], [42.3, 1235.0], [42.4, 1236.0], [42.5, 1239.0], [42.6, 1242.0], [42.7, 1242.0], [42.8, 1243.0], [42.9, 1245.0], [43.0, 1248.0], [43.1, 1248.0], [43.2, 1249.0], [43.3, 1250.0], [43.4, 1250.0], [43.5, 1251.0], [43.6, 1251.0], [43.7, 1252.0], [43.8, 1252.0], [43.9, 1253.0], [44.0, 1254.0], [44.1, 1256.0], [44.2, 1256.0], [44.3, 1257.0], [44.4, 1263.0], [44.5, 1263.0], [44.6, 1263.0], [44.7, 1264.0], [44.8, 1265.0], [44.9, 1270.0], [45.0, 1270.0], [45.1, 1271.0], [45.2, 1273.0], [45.3, 1273.0], [45.4, 1275.0], [45.5, 1275.0], [45.6, 1279.0], [45.7, 1279.0], [45.8, 1280.0], [45.9, 1282.0], [46.0, 1283.0], [46.1, 1283.0], [46.2, 1284.0], [46.3, 1286.0], [46.4, 1286.0], [46.5, 1286.0], [46.6, 1288.0], [46.7, 1290.0], [46.8, 1290.0], [46.9, 1291.0], [47.0, 1292.0], [47.1, 1293.0], [47.2, 1293.0], [47.3, 1293.0], [47.4, 1294.0], [47.5, 1296.0], [47.6, 1296.0], [47.7, 1297.0], [47.8, 1306.0], [47.9, 1306.0], [48.0, 1306.0], [48.1, 1308.0], [48.2, 1309.0], [48.3, 1312.0], [48.4, 1312.0], [48.5, 1313.0], [48.6, 1313.0], [48.7, 1313.0], [48.8, 1314.0], [48.9, 1317.0], [49.0, 1321.0], [49.1, 1321.0], [49.2, 1322.0], [49.3, 1325.0], [49.4, 1325.0], [49.5, 1325.0], [49.6, 1331.0], [49.7, 1335.0], [49.8, 1337.0], [49.9, 1337.0], [50.0, 1338.0], [50.1, 1338.0], [50.2, 1338.0], [50.3, 1340.0], [50.4, 1341.0], [50.5, 1341.0], [50.6, 1341.0], [50.7, 1348.0], [50.8, 1349.0], [50.9, 1350.0], [51.0, 1350.0], [51.1, 1353.0], [51.2, 1353.0], [51.3, 1355.0], [51.4, 1355.0], [51.5, 1356.0], [51.6, 1360.0], [51.7, 1360.0], [51.8, 1361.0], [51.9, 1362.0], [52.0, 1365.0], [52.1, 1365.0], [52.2, 1367.0], [52.3, 1369.0], [52.4, 1370.0], [52.5, 1370.0], [52.6, 1371.0], [52.7, 1375.0], [52.8, 1377.0], [52.9, 1377.0], [53.0, 1378.0], [53.1, 1378.0], [53.2, 1380.0], [53.3, 1380.0], [53.4, 1380.0], [53.5, 1381.0], [53.6, 1381.0], [53.7, 1382.0], [53.8, 1383.0], [53.9, 1386.0], [54.0, 1386.0], [54.1, 1386.0], [54.2, 1386.0], [54.3, 1386.0], [54.4, 1386.0], [54.5, 1391.0], [54.6, 1392.0], [54.7, 1393.0], [54.8, 1393.0], [54.9, 1395.0], [55.0, 1397.0], [55.1, 1397.0], [55.2, 1397.0], [55.3, 1400.0], [55.4, 1402.0], [55.5, 1402.0], [55.6, 1403.0], [55.7, 1405.0], [55.8, 1406.0], [55.9, 1406.0], [56.0, 1406.0], [56.1, 1406.0], [56.2, 1407.0], [56.3, 1407.0], [56.4, 1409.0], [56.5, 1410.0], [56.6, 1411.0], [56.7, 1411.0], [56.8, 1412.0], [56.9, 1413.0], [57.0, 1413.0], [57.1, 1419.0], [57.2, 1419.0], [57.3, 1419.0], [57.4, 1419.0], [57.5, 1420.0], [57.6, 1424.0], [57.7, 1427.0], [57.8, 1427.0], [57.9, 1428.0], [58.0, 1429.0], [58.1, 1431.0], [58.2, 1431.0], [58.3, 1431.0], [58.4, 1431.0], [58.5, 1431.0], [58.6, 1432.0], [58.7, 1432.0], [58.8, 1433.0], [58.9, 1433.0], [59.0, 1434.0], [59.1, 1435.0], [59.2, 1435.0], [59.3, 1435.0], [59.4, 1435.0], [59.5, 1435.0], [59.6, 1436.0], [59.7, 1436.0], [59.8, 1438.0], [59.9, 1438.0], [60.0, 1444.0], [60.1, 1444.0], [60.2, 1446.0], [60.3, 1447.0], [60.4, 1447.0], [60.5, 1448.0], [60.6, 1450.0], [60.7, 1451.0], [60.8, 1451.0], [60.9, 1453.0], [61.0, 1454.0], [61.1, 1455.0], [61.2, 1455.0], [61.3, 1457.0], [61.4, 1460.0], [61.5, 1466.0], [61.6, 1466.0], [61.7, 1466.0], [61.8, 1467.0], [61.9, 1467.0], [62.0, 1468.0], [62.1, 1469.0], [62.2, 1470.0], [62.3, 1470.0], [62.4, 1471.0], [62.5, 1474.0], [62.6, 1474.0], [62.7, 1474.0], [62.8, 1477.0], [62.9, 1480.0], [63.0, 1483.0], [63.1, 1483.0], [63.2, 1484.0], [63.3, 1485.0], [63.4, 1485.0], [63.5, 1485.0], [63.6, 1486.0], [63.7, 1487.0], [63.8, 1487.0], [63.9, 1488.0], [64.0, 1490.0], [64.1, 1493.0], [64.2, 1493.0], [64.3, 1494.0], [64.4, 1494.0], [64.5, 1494.0], [64.6, 1494.0], [64.7, 1494.0], [64.8, 1496.0], [64.9, 1499.0], [65.0, 1499.0], [65.1, 1499.0], [65.2, 1502.0], [65.3, 1502.0], [65.4, 1503.0], [65.5, 1504.0], [65.6, 1506.0], [65.7, 1506.0], [65.8, 1511.0], [65.9, 1512.0], [66.0, 1512.0], [66.1, 1512.0], [66.2, 1515.0], [66.3, 1518.0], [66.4, 1518.0], [66.5, 1518.0], [66.6, 1520.0], [66.7, 1520.0], [66.8, 1520.0], [66.9, 1521.0], [67.0, 1522.0], [67.1, 1522.0], [67.2, 1522.0], [67.3, 1524.0], [67.4, 1526.0], [67.5, 1527.0], [67.6, 1527.0], [67.7, 1529.0], [67.8, 1530.0], [67.9, 1530.0], [68.0, 1530.0], [68.1, 1531.0], [68.2, 1532.0], [68.3, 1533.0], [68.4, 1533.0], [68.5, 1534.0], [68.6, 1534.0], [68.7, 1534.0], [68.8, 1535.0], [68.9, 1535.0], [69.0, 1537.0], [69.1, 1537.0], [69.2, 1538.0], [69.3, 1540.0], [69.4, 1541.0], [69.5, 1541.0], [69.6, 1545.0], [69.7, 1547.0], [69.8, 1548.0], [69.9, 1548.0], [70.0, 1549.0], [70.1, 1549.0], [70.2, 1549.0], [70.3, 1552.0], [70.4, 1553.0], [70.5, 1555.0], [70.6, 1555.0], [70.7, 1556.0], [70.8, 1558.0], [70.9, 1559.0], [71.0, 1559.0], [71.1, 1560.0], [71.2, 1562.0], [71.3, 1565.0], [71.4, 1565.0], [71.5, 1566.0], [71.6, 1568.0], [71.7, 1568.0], [71.8, 1568.0], [71.9, 1572.0], [72.0, 1573.0], [72.1, 1573.0], [72.2, 1576.0], [72.3, 1577.0], [72.4, 1578.0], [72.5, 1578.0], [72.6, 1587.0], [72.7, 1589.0], [72.8, 1589.0], [72.9, 1589.0], [73.0, 1590.0], [73.1, 1590.0], [73.2, 1590.0], [73.3, 1590.0], [73.4, 1592.0], [73.5, 1597.0], [73.6, 1597.0], [73.7, 1599.0], [73.8, 1599.0], [73.9, 1601.0], [74.0, 1601.0], [74.1, 1603.0], [74.2, 1603.0], [74.3, 1604.0], [74.4, 1604.0], [74.5, 1607.0], [74.6, 1607.0], [74.7, 1608.0], [74.8, 1608.0], [74.9, 1615.0], [75.0, 1617.0], [75.1, 1617.0], [75.2, 1620.0], [75.3, 1620.0], [75.4, 1620.0], [75.5, 1620.0], [75.6, 1623.0], [75.7, 1625.0], [75.8, 1626.0], [75.9, 1626.0], [76.0, 1628.0], [76.1, 1628.0], [76.2, 1630.0], [76.3, 1630.0], [76.4, 1638.0], [76.5, 1639.0], [76.6, 1641.0], [76.7, 1641.0], [76.8, 1643.0], [76.9, 1644.0], [77.0, 1644.0], [77.1, 1648.0], [77.2, 1658.0], [77.3, 1659.0], [77.4, 1659.0], [77.5, 1659.0], [77.6, 1660.0], [77.7, 1661.0], [77.8, 1661.0], [77.9, 1664.0], [78.0, 1667.0], [78.1, 1669.0], [78.2, 1669.0], [78.3, 1671.0], [78.4, 1674.0], [78.5, 1674.0], [78.6, 1675.0], [78.7, 1676.0], [78.8, 1681.0], [78.9, 1681.0], [79.0, 1682.0], [79.1, 1683.0], [79.2, 1690.0], [79.3, 1690.0], [79.4, 1691.0], [79.5, 1693.0], [79.6, 1694.0], [79.7, 1694.0], [79.8, 1695.0], [79.9, 1700.0], [80.0, 1700.0], [80.1, 1700.0], [80.2, 1700.0], [80.3, 1702.0], [80.4, 1702.0], [80.5, 1709.0], [80.6, 1709.0], [80.7, 1714.0], [80.8, 1714.0], [80.9, 1715.0], [81.0, 1718.0], [81.1, 1723.0], [81.2, 1723.0], [81.3, 1724.0], [81.4, 1730.0], [81.5, 1731.0], [81.6, 1731.0], [81.7, 1733.0], [81.8, 1734.0], [81.9, 1734.0], [82.0, 1736.0], [82.1, 1741.0], [82.2, 1742.0], [82.3, 1742.0], [82.4, 1743.0], [82.5, 1748.0], [82.6, 1751.0], [82.7, 1751.0], [82.8, 1751.0], [82.9, 1755.0], [83.0, 1757.0], [83.1, 1757.0], [83.2, 1757.0], [83.3, 1760.0], [83.4, 1760.0], [83.5, 1765.0], [83.6, 1769.0], [83.7, 1771.0], [83.8, 1771.0], [83.9, 1771.0], [84.0, 1774.0], [84.1, 1776.0], [84.2, 1776.0], [84.3, 1778.0], [84.4, 1779.0], [84.5, 1786.0], [84.6, 1786.0], [84.7, 1787.0], [84.8, 1788.0], [84.9, 1789.0], [85.0, 1789.0], [85.1, 1790.0], [85.2, 1793.0], [85.3, 1793.0], [85.4, 1801.0], [85.5, 1803.0], [85.6, 1803.0], [85.7, 1803.0], [85.8, 1804.0], [85.9, 1812.0], [86.0, 1818.0], [86.1, 1818.0], [86.2, 1819.0], [86.3, 1819.0], [86.4, 1837.0], [86.5, 1837.0], [86.6, 1840.0], [86.7, 1848.0], [86.8, 1848.0], [86.9, 1856.0], [87.0, 1857.0], [87.1, 1863.0], [87.2, 1863.0], [87.3, 1868.0], [87.4, 1870.0], [87.5, 1878.0], [87.6, 1878.0], [87.7, 1882.0], [87.8, 1885.0], [87.9, 1892.0], [88.0, 1892.0], [88.1, 1892.0], [88.2, 1893.0], [88.3, 1895.0], [88.4, 1895.0], [88.5, 1900.0], [88.6, 1900.0], [88.7, 1900.0], [88.8, 1903.0], [88.9, 1907.0], [89.0, 1908.0], [89.1, 1908.0], [89.2, 1913.0], [89.3, 1917.0], [89.4, 1931.0], [89.5, 1931.0], [89.6, 1942.0], [89.7, 1946.0], [89.8, 1951.0], [89.9, 1951.0], [90.0, 1955.0], [90.1, 1956.0], [90.2, 1956.0], [90.3, 1957.0], [90.4, 1957.0], [90.5, 1959.0], [90.6, 1959.0], [90.7, 1960.0], [90.8, 1983.0], [90.9, 1989.0], [91.0, 1989.0], [91.1, 1991.0], [91.2, 2001.0], [91.3, 2001.0], [91.4, 2001.0], [91.5, 2006.0], [91.6, 2037.0], [91.7, 2037.0], [91.8, 2058.0], [91.9, 2071.0], [92.0, 2087.0], [92.1, 2087.0], [92.2, 2091.0], [92.3, 2100.0], [92.4, 2113.0], [92.5, 2113.0], [92.6, 2124.0], [92.7, 2140.0], [92.8, 2174.0], [92.9, 2174.0], [93.0, 2201.0], [93.1, 2285.0], [93.2, 2298.0], [93.3, 2298.0], [93.4, 2358.0], [93.5, 2364.0], [93.6, 2364.0], [93.7, 2421.0], [93.8, 2452.0], [93.9, 2488.0], [94.0, 2488.0], [94.1, 2550.0], [94.2, 2571.0], [94.3, 2846.0], [94.4, 2846.0], [94.5, 2915.0], [94.6, 2938.0], [94.7, 2940.0], [94.8, 2940.0], [94.9, 2957.0], [95.0, 3025.0], [95.1, 3025.0], [95.2, 3034.0], [95.3, 3073.0], [95.4, 3074.0], [95.5, 3074.0], [95.6, 3080.0], [95.7, 3124.0], [95.8, 3133.0], [95.9, 3133.0], [96.0, 3144.0], [96.1, 3189.0], [96.2, 3229.0], [96.3, 3229.0], [96.4, 3274.0], [96.5, 3314.0], [96.6, 3320.0], [96.7, 3320.0], [96.8, 3321.0], [96.9, 3389.0], [97.0, 3389.0], [97.1, 3389.0], [97.2, 3426.0], [97.3, 3433.0], [97.4, 3433.0], [97.5, 3444.0], [97.6, 3489.0], [97.7, 3567.0], [97.8, 3567.0], [97.9, 3597.0], [98.0, 3626.0], [98.1, 3669.0], [98.2, 3669.0], [98.3, 3783.0], [98.4, 3799.0], [98.5, 3799.0], [98.6, 3800.0], [98.7, 3834.0], [98.8, 3922.0], [98.9, 3922.0], [99.0, 3936.0], [99.1, 4163.0], [99.2, 4234.0], [99.3, 4234.0], [99.4, 4294.0], [99.5, 4324.0], [99.6, 4608.0], [99.7, 4608.0], [99.8, 6129.0], [99.9, 6157.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 400.0, "maxY": 73.0, "series": [{"data": [[600.0, 47.0], [700.0, 47.0], [800.0, 39.0], [900.0, 38.0], [1000.0, 42.0], [1100.0, 48.0], [1200.0, 61.0], [1300.0, 55.0], [1400.0, 73.0], [1500.0, 64.0], [1600.0, 44.0], [1700.0, 40.0], [1800.0, 23.0], [1900.0, 20.0], [2000.0, 8.0], [2100.0, 5.0], [2200.0, 3.0], [2300.0, 2.0], [2400.0, 3.0], [2500.0, 2.0], [2800.0, 1.0], [2900.0, 4.0], [3000.0, 5.0], [3100.0, 4.0], [3300.0, 5.0], [3200.0, 2.0], [3400.0, 4.0], [3500.0, 2.0], [3600.0, 2.0], [3700.0, 2.0], [3800.0, 2.0], [3900.0, 2.0], [4200.0, 2.0], [4300.0, 1.0], [4100.0, 1.0], [4600.0, 1.0], [6100.0, 2.0], [400.0, 6.0], [500.0, 23.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 6100.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 6.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 466.0, "series": [{"data": [[0.0, 6.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 466.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 256.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 7.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 37.519108280254784, "minX": 1.60189764E12, "maxY": 40.0, "series": [{"data": [[1.6018977E12, 37.519108280254784], [1.60189764E12, 40.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6018977E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 520.0, "minX": 1.0, "maxY": 2488.0, "series": [{"data": [[33.0, 670.0], [32.0, 678.0], [2.0, 1741.0], [35.0, 769.0], [34.0, 1630.0], [37.0, 520.0], [36.0, 697.0], [39.0, 1085.0], [38.0, 674.0], [40.0, 1413.755747126436], [3.0, 1991.0], [4.0, 2087.0], [5.0, 2488.0], [6.0, 1757.0], [7.0, 1242.0], [8.0, 997.0], [9.0, 2364.0], [10.0, 1008.0], [11.0, 1041.0], [12.0, 1309.0], [13.0, 1734.0], [14.0, 1040.0], [15.0, 1432.0], [16.0, 1487.0], [1.0, 2358.0], [17.0, 1174.0], [19.0, 695.0], [20.0, 1118.0], [21.0, 1369.0], [22.0, 573.0], [23.0, 660.0], [24.0, 1046.0], [25.0, 567.0], [26.0, 1942.0], [27.0, 680.0], [28.0, 1541.0], [29.0, 754.0], [30.0, 622.0], [31.0, 653.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[38.940136054421764, 1402.5333333333326]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 40.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 2360.733333333333, "minX": 1.60189764E12, "maxY": 1083983.6, "series": [{"data": [[1.6018977E12, 746570.05], [1.60189764E12, 1083983.6]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6018977E12, 2360.733333333333], [1.60189764E12, 3162.3]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6018977E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 1309.1178343949032, "minX": 1.60189764E12, "maxY": 1472.206650831353, "series": [{"data": [[1.6018977E12, 1309.1178343949032], [1.60189764E12, 1472.206650831353]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6018977E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 1308.0987261146508, "minX": 1.60189764E12, "maxY": 1470.8313539192377, "series": [{"data": [[1.6018977E12, 1308.0987261146508], [1.60189764E12, 1470.8313539192377]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6018977E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.60189764E12, "maxY": 1.470308788598577, "series": [{"data": [[1.6018977E12, 0.0], [1.60189764E12, 1.470308788598577]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6018977E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 437.0, "minX": 1.60189764E12, "maxY": 6157.0, "series": [{"data": [[1.6018977E12, 4294.0], [1.60189764E12, 6157.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6018977E12, 571.793999555111], [1.60189764E12, 471.48099890112877]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6018977E12, 574.1046004152298], [1.60189764E12, 477.5544009590149]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6018977E12, 572.7269997775554], [1.60189764E12, 473.7854994505644]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.6018977E12, 520.0], [1.60189764E12, 437.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6018977E12, 1337.5], [1.60189764E12, 1352.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6018977E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 665.0, "minX": 6.0, "maxY": 3144.0, "series": [{"data": [[34.0, 1958.0], [40.0, 1457.5], [42.0, 872.0], [43.0, 904.5], [44.0, 893.0], [17.0, 3144.0], [22.0, 1536.0], [23.0, 1293.0], [24.0, 1638.0], [6.0, 2039.0], [25.0, 1435.0], [26.0, 1700.0], [27.0, 1469.0], [29.0, 1424.0], [30.0, 1008.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[42.0, 755.0], [43.0, 665.0], [44.0, 784.0], [24.0, 1181.0], [27.0, 920.0], [30.0, 680.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 44.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 665.0, "minX": 6.0, "maxY": 3144.0, "series": [{"data": [[34.0, 1956.5], [40.0, 1456.5], [42.0, 872.0], [43.0, 904.5], [44.0, 893.0], [17.0, 3144.0], [22.0, 1535.0], [23.0, 1290.0], [24.0, 1637.0], [6.0, 2036.0], [25.0, 1434.0], [26.0, 1700.0], [27.0, 1468.0], [29.0, 1422.0], [30.0, 1008.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[42.0, 755.0], [43.0, 665.0], [44.0, 784.0], [24.0, 1181.0], [27.0, 920.0], [30.0, 680.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 44.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 4.566666666666666, "minX": 1.60189764E12, "maxY": 7.683333333333334, "series": [{"data": [[1.6018977E12, 4.566666666666666], [1.60189764E12, 7.683333333333334]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6018977E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.05, "minX": 1.60189764E12, "maxY": 6.966666666666667, "series": [{"data": [[1.6018977E12, 5.166666666666667], [1.60189764E12, 6.966666666666667]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.6018977E12, 0.06666666666666667], [1.60189764E12, 0.05]], "isOverall": false, "label": "500", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6018977E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.05, "minX": 1.60189764E12, "maxY": 6.966666666666667, "series": [{"data": [[1.6018977E12, 5.166666666666667], [1.60189764E12, 6.966666666666667]], "isOverall": false, "label": "HTTP Request-success", "isController": false}, {"data": [[1.6018977E12, 0.06666666666666667], [1.60189764E12, 0.05]], "isOverall": false, "label": "HTTP Request-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6018977E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.05, "minX": 1.60189764E12, "maxY": 6.966666666666667, "series": [{"data": [[1.6018977E12, 5.166666666666667], [1.60189764E12, 6.966666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.6018977E12, 0.06666666666666667], [1.60189764E12, 0.05]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6018977E12, "title": "Total Transactions Per Second"}},
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

