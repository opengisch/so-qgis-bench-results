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
        data: {"result": {"minY": 275.0, "minX": 0.0, "maxY": 5746.0, "series": [{"data": [[0.0, 275.0], [0.1, 275.0], [0.2, 341.0], [0.3, 365.0], [0.4, 365.0], [0.5, 370.0], [0.6, 370.0], [0.7, 415.0], [0.8, 415.0], [0.9, 418.0], [1.0, 437.0], [1.1, 442.0], [1.2, 442.0], [1.3, 446.0], [1.4, 446.0], [1.5, 452.0], [1.6, 452.0], [1.7, 474.0], [1.8, 478.0], [1.9, 478.0], [2.0, 481.0], [2.1, 483.0], [2.2, 498.0], [2.3, 498.0], [2.4, 499.0], [2.5, 502.0], [2.6, 503.0], [2.7, 503.0], [2.8, 506.0], [2.9, 507.0], [3.0, 512.0], [3.1, 512.0], [3.2, 515.0], [3.3, 518.0], [3.4, 518.0], [3.5, 523.0], [3.6, 523.0], [3.7, 523.0], [3.8, 523.0], [3.9, 527.0], [4.0, 532.0], [4.1, 539.0], [4.2, 539.0], [4.3, 541.0], [4.4, 543.0], [4.5, 544.0], [4.6, 544.0], [4.7, 549.0], [4.8, 553.0], [4.9, 553.0], [5.0, 553.0], [5.1, 559.0], [5.2, 562.0], [5.3, 562.0], [5.4, 563.0], [5.5, 564.0], [5.6, 564.0], [5.7, 564.0], [5.8, 565.0], [5.9, 567.0], [6.0, 568.0], [6.1, 568.0], [6.2, 570.0], [6.3, 572.0], [6.4, 582.0], [6.5, 582.0], [6.6, 583.0], [6.7, 583.0], [6.8, 583.0], [6.9, 586.0], [7.0, 587.0], [7.1, 588.0], [7.2, 588.0], [7.3, 592.0], [7.4, 592.0], [7.5, 594.0], [7.6, 594.0], [7.7, 596.0], [7.8, 601.0], [7.9, 601.0], [8.0, 601.0], [8.1, 603.0], [8.2, 606.0], [8.3, 607.0], [8.4, 607.0], [8.5, 626.0], [8.6, 627.0], [8.7, 627.0], [8.8, 628.0], [8.9, 629.0], [9.0, 630.0], [9.1, 630.0], [9.2, 630.0], [9.3, 637.0], [9.4, 639.0], [9.5, 639.0], [9.6, 647.0], [9.7, 647.0], [9.8, 655.0], [9.9, 655.0], [10.0, 657.0], [10.1, 661.0], [10.2, 661.0], [10.3, 668.0], [10.4, 683.0], [10.5, 684.0], [10.6, 684.0], [10.7, 686.0], [10.8, 688.0], [10.9, 691.0], [11.0, 691.0], [11.1, 694.0], [11.2, 694.0], [11.3, 696.0], [11.4, 696.0], [11.5, 697.0], [11.6, 703.0], [11.7, 703.0], [11.8, 706.0], [11.9, 707.0], [12.0, 709.0], [12.1, 709.0], [12.2, 713.0], [12.3, 718.0], [12.4, 718.0], [12.5, 718.0], [12.6, 729.0], [12.7, 735.0], [12.8, 737.0], [12.9, 737.0], [13.0, 740.0], [13.1, 741.0], [13.2, 741.0], [13.3, 741.0], [13.4, 745.0], [13.5, 745.0], [13.6, 745.0], [13.7, 746.0], [13.8, 752.0], [13.9, 752.0], [14.0, 752.0], [14.1, 762.0], [14.2, 764.0], [14.3, 767.0], [14.4, 767.0], [14.5, 768.0], [14.6, 774.0], [14.7, 777.0], [14.8, 777.0], [14.9, 778.0], [15.0, 779.0], [15.1, 779.0], [15.2, 780.0], [15.3, 780.0], [15.4, 786.0], [15.5, 786.0], [15.6, 788.0], [15.7, 791.0], [15.8, 796.0], [15.9, 796.0], [16.0, 796.0], [16.1, 800.0], [16.2, 800.0], [16.3, 800.0], [16.4, 800.0], [16.5, 801.0], [16.6, 804.0], [16.7, 804.0], [16.8, 804.0], [16.9, 805.0], [17.0, 805.0], [17.1, 805.0], [17.2, 818.0], [17.3, 820.0], [17.4, 820.0], [17.5, 822.0], [17.6, 825.0], [17.7, 825.0], [17.8, 825.0], [17.9, 825.0], [18.0, 828.0], [18.1, 828.0], [18.2, 828.0], [18.3, 830.0], [18.4, 834.0], [18.5, 834.0], [18.6, 835.0], [18.7, 837.0], [18.8, 838.0], [18.9, 838.0], [19.0, 847.0], [19.1, 850.0], [19.2, 853.0], [19.3, 853.0], [19.4, 854.0], [19.5, 855.0], [19.6, 856.0], [19.7, 856.0], [19.8, 859.0], [19.9, 860.0], [20.0, 860.0], [20.1, 860.0], [20.2, 869.0], [20.3, 871.0], [20.4, 871.0], [20.5, 874.0], [20.6, 876.0], [20.7, 881.0], [20.8, 881.0], [20.9, 882.0], [21.0, 883.0], [21.1, 883.0], [21.2, 883.0], [21.3, 883.0], [21.4, 888.0], [21.5, 893.0], [21.6, 893.0], [21.7, 895.0], [21.8, 897.0], [21.9, 897.0], [22.0, 898.0], [22.1, 899.0], [22.2, 901.0], [22.3, 901.0], [22.4, 901.0], [22.5, 905.0], [22.6, 905.0], [22.7, 905.0], [22.8, 910.0], [22.9, 911.0], [23.0, 912.0], [23.1, 912.0], [23.2, 913.0], [23.3, 917.0], [23.4, 917.0], [23.5, 917.0], [23.6, 921.0], [23.7, 922.0], [23.8, 922.0], [23.9, 922.0], [24.0, 924.0], [24.1, 927.0], [24.2, 927.0], [24.3, 930.0], [24.4, 933.0], [24.5, 935.0], [24.6, 935.0], [24.7, 936.0], [24.8, 937.0], [24.9, 937.0], [25.0, 937.0], [25.1, 938.0], [25.2, 939.0], [25.3, 939.0], [25.4, 939.0], [25.5, 942.0], [25.6, 946.0], [25.7, 946.0], [25.8, 949.0], [25.9, 950.0], [26.0, 952.0], [26.1, 952.0], [26.2, 953.0], [26.3, 954.0], [26.4, 955.0], [26.5, 955.0], [26.6, 955.0], [26.7, 960.0], [26.8, 960.0], [26.9, 962.0], [27.0, 965.0], [27.1, 969.0], [27.2, 969.0], [27.3, 970.0], [27.4, 973.0], [27.5, 976.0], [27.6, 976.0], [27.7, 976.0], [27.8, 976.0], [27.9, 977.0], [28.0, 977.0], [28.1, 978.0], [28.2, 981.0], [28.3, 983.0], [28.4, 983.0], [28.5, 986.0], [28.6, 986.0], [28.7, 986.0], [28.8, 986.0], [28.9, 993.0], [29.0, 993.0], [29.1, 993.0], [29.2, 994.0], [29.3, 994.0], [29.4, 996.0], [29.5, 996.0], [29.6, 997.0], [29.7, 1000.0], [29.8, 1001.0], [29.9, 1001.0], [30.0, 1006.0], [30.1, 1007.0], [30.2, 1007.0], [30.3, 1007.0], [30.4, 1007.0], [30.5, 1008.0], [30.6, 1008.0], [30.7, 1009.0], [30.8, 1009.0], [30.9, 1010.0], [31.0, 1010.0], [31.1, 1014.0], [31.2, 1016.0], [31.3, 1017.0], [31.4, 1017.0], [31.5, 1017.0], [31.6, 1019.0], [31.7, 1019.0], [31.8, 1019.0], [31.9, 1020.0], [32.0, 1021.0], [32.1, 1021.0], [32.2, 1022.0], [32.3, 1024.0], [32.4, 1025.0], [32.5, 1025.0], [32.6, 1028.0], [32.7, 1031.0], [32.8, 1031.0], [32.9, 1031.0], [33.0, 1032.0], [33.1, 1032.0], [33.2, 1036.0], [33.3, 1036.0], [33.4, 1038.0], [33.5, 1039.0], [33.6, 1039.0], [33.7, 1042.0], [33.8, 1042.0], [33.9, 1045.0], [34.0, 1045.0], [34.1, 1047.0], [34.2, 1049.0], [34.3, 1051.0], [34.4, 1051.0], [34.5, 1054.0], [34.6, 1061.0], [34.7, 1061.0], [34.8, 1061.0], [34.9, 1067.0], [35.0, 1068.0], [35.1, 1068.0], [35.2, 1069.0], [35.3, 1072.0], [35.4, 1074.0], [35.5, 1074.0], [35.6, 1075.0], [35.7, 1075.0], [35.8, 1077.0], [35.9, 1077.0], [36.0, 1081.0], [36.1, 1082.0], [36.2, 1082.0], [36.3, 1082.0], [36.4, 1083.0], [36.5, 1091.0], [36.6, 1092.0], [36.7, 1092.0], [36.8, 1092.0], [36.9, 1093.0], [37.0, 1093.0], [37.1, 1094.0], [37.2, 1094.0], [37.3, 1095.0], [37.4, 1095.0], [37.5, 1095.0], [37.6, 1096.0], [37.7, 1099.0], [37.8, 1099.0], [37.9, 1103.0], [38.0, 1106.0], [38.1, 1107.0], [38.2, 1107.0], [38.3, 1108.0], [38.4, 1109.0], [38.5, 1109.0], [38.6, 1109.0], [38.7, 1113.0], [38.8, 1113.0], [38.9, 1113.0], [39.0, 1118.0], [39.1, 1119.0], [39.2, 1120.0], [39.3, 1120.0], [39.4, 1121.0], [39.5, 1122.0], [39.6, 1127.0], [39.7, 1127.0], [39.8, 1129.0], [39.9, 1129.0], [40.0, 1130.0], [40.1, 1130.0], [40.2, 1132.0], [40.3, 1132.0], [40.4, 1132.0], [40.5, 1134.0], [40.6, 1135.0], [40.7, 1137.0], [40.8, 1137.0], [40.9, 1140.0], [41.0, 1142.0], [41.1, 1143.0], [41.2, 1143.0], [41.3, 1144.0], [41.4, 1144.0], [41.5, 1147.0], [41.6, 1147.0], [41.7, 1148.0], [41.8, 1150.0], [41.9, 1150.0], [42.0, 1151.0], [42.1, 1152.0], [42.2, 1153.0], [42.3, 1153.0], [42.4, 1156.0], [42.5, 1156.0], [42.6, 1156.0], [42.7, 1156.0], [42.8, 1159.0], [42.9, 1160.0], [43.0, 1161.0], [43.1, 1161.0], [43.2, 1166.0], [43.3, 1170.0], [43.4, 1170.0], [43.5, 1171.0], [43.6, 1174.0], [43.7, 1176.0], [43.8, 1176.0], [43.9, 1178.0], [44.0, 1180.0], [44.1, 1181.0], [44.2, 1181.0], [44.3, 1183.0], [44.4, 1184.0], [44.5, 1186.0], [44.6, 1186.0], [44.7, 1191.0], [44.8, 1193.0], [44.9, 1193.0], [45.0, 1193.0], [45.1, 1194.0], [45.2, 1194.0], [45.3, 1194.0], [45.4, 1194.0], [45.5, 1195.0], [45.6, 1196.0], [45.7, 1196.0], [45.8, 1200.0], [45.9, 1206.0], [46.0, 1206.0], [46.1, 1206.0], [46.2, 1208.0], [46.3, 1209.0], [46.4, 1212.0], [46.5, 1212.0], [46.6, 1212.0], [46.7, 1215.0], [46.8, 1215.0], [46.9, 1216.0], [47.0, 1219.0], [47.1, 1220.0], [47.2, 1220.0], [47.3, 1220.0], [47.4, 1223.0], [47.5, 1223.0], [47.6, 1223.0], [47.7, 1226.0], [47.8, 1227.0], [47.9, 1228.0], [48.0, 1228.0], [48.1, 1228.0], [48.2, 1231.0], [48.3, 1233.0], [48.4, 1233.0], [48.5, 1233.0], [48.6, 1235.0], [48.7, 1235.0], [48.8, 1239.0], [48.9, 1241.0], [49.0, 1244.0], [49.1, 1244.0], [49.2, 1244.0], [49.3, 1246.0], [49.4, 1250.0], [49.5, 1250.0], [49.6, 1250.0], [49.7, 1252.0], [49.8, 1254.0], [49.9, 1254.0], [50.0, 1254.0], [50.1, 1255.0], [50.2, 1255.0], [50.3, 1255.0], [50.4, 1255.0], [50.5, 1257.0], [50.6, 1257.0], [50.7, 1257.0], [50.8, 1259.0], [50.9, 1261.0], [51.0, 1261.0], [51.1, 1262.0], [51.2, 1263.0], [51.3, 1265.0], [51.4, 1265.0], [51.5, 1266.0], [51.6, 1269.0], [51.7, 1269.0], [51.8, 1269.0], [51.9, 1271.0], [52.0, 1271.0], [52.1, 1271.0], [52.2, 1272.0], [52.3, 1273.0], [52.4, 1274.0], [52.5, 1274.0], [52.6, 1274.0], [52.7, 1274.0], [52.8, 1275.0], [52.9, 1275.0], [53.0, 1275.0], [53.1, 1275.0], [53.2, 1276.0], [53.3, 1276.0], [53.4, 1281.0], [53.5, 1282.0], [53.6, 1282.0], [53.7, 1289.0], [53.8, 1291.0], [53.9, 1293.0], [54.0, 1293.0], [54.1, 1297.0], [54.2, 1298.0], [54.3, 1299.0], [54.4, 1299.0], [54.5, 1299.0], [54.6, 1300.0], [54.7, 1304.0], [54.8, 1304.0], [54.9, 1305.0], [55.0, 1308.0], [55.1, 1308.0], [55.2, 1311.0], [55.3, 1313.0], [55.4, 1313.0], [55.5, 1313.0], [55.6, 1318.0], [55.7, 1319.0], [55.8, 1320.0], [55.9, 1320.0], [56.0, 1321.0], [56.1, 1326.0], [56.2, 1330.0], [56.3, 1330.0], [56.4, 1331.0], [56.5, 1331.0], [56.6, 1335.0], [56.7, 1335.0], [56.8, 1338.0], [56.9, 1342.0], [57.0, 1342.0], [57.1, 1348.0], [57.2, 1355.0], [57.3, 1355.0], [57.4, 1355.0], [57.5, 1356.0], [57.6, 1357.0], [57.7, 1358.0], [57.8, 1358.0], [57.9, 1359.0], [58.0, 1363.0], [58.1, 1367.0], [58.2, 1367.0], [58.3, 1367.0], [58.4, 1370.0], [58.5, 1370.0], [58.6, 1370.0], [58.7, 1371.0], [58.8, 1372.0], [58.9, 1372.0], [59.0, 1374.0], [59.1, 1379.0], [59.2, 1380.0], [59.3, 1380.0], [59.4, 1381.0], [59.5, 1385.0], [59.6, 1386.0], [59.7, 1386.0], [59.8, 1393.0], [59.9, 1395.0], [60.0, 1398.0], [60.1, 1398.0], [60.2, 1398.0], [60.3, 1401.0], [60.4, 1401.0], [60.5, 1402.0], [60.6, 1404.0], [60.7, 1405.0], [60.8, 1405.0], [60.9, 1405.0], [61.0, 1406.0], [61.1, 1406.0], [61.2, 1406.0], [61.3, 1407.0], [61.4, 1408.0], [61.5, 1410.0], [61.6, 1410.0], [61.7, 1411.0], [61.8, 1419.0], [61.9, 1419.0], [62.0, 1423.0], [62.1, 1426.0], [62.2, 1431.0], [62.3, 1431.0], [62.4, 1431.0], [62.5, 1432.0], [62.6, 1439.0], [62.7, 1439.0], [62.8, 1440.0], [62.9, 1442.0], [63.0, 1447.0], [63.1, 1447.0], [63.2, 1451.0], [63.3, 1451.0], [63.4, 1451.0], [63.5, 1453.0], [63.6, 1454.0], [63.7, 1461.0], [63.8, 1461.0], [63.9, 1462.0], [64.0, 1463.0], [64.1, 1463.0], [64.2, 1463.0], [64.3, 1465.0], [64.4, 1471.0], [64.5, 1473.0], [64.6, 1473.0], [64.7, 1477.0], [64.8, 1479.0], [64.9, 1483.0], [65.0, 1483.0], [65.1, 1484.0], [65.2, 1488.0], [65.3, 1488.0], [65.4, 1488.0], [65.5, 1491.0], [65.6, 1492.0], [65.7, 1492.0], [65.8, 1492.0], [65.9, 1493.0], [66.0, 1497.0], [66.1, 1497.0], [66.2, 1499.0], [66.3, 1499.0], [66.4, 1501.0], [66.5, 1501.0], [66.6, 1505.0], [66.7, 1506.0], [66.8, 1506.0], [66.9, 1506.0], [67.0, 1511.0], [67.1, 1512.0], [67.2, 1512.0], [67.3, 1514.0], [67.4, 1517.0], [67.5, 1517.0], [67.6, 1517.0], [67.7, 1518.0], [67.8, 1519.0], [67.9, 1522.0], [68.0, 1522.0], [68.1, 1523.0], [68.2, 1523.0], [68.3, 1528.0], [68.4, 1528.0], [68.5, 1528.0], [68.6, 1529.0], [68.7, 1529.0], [68.8, 1529.0], [68.9, 1533.0], [69.0, 1535.0], [69.1, 1535.0], [69.2, 1536.0], [69.3, 1537.0], [69.4, 1541.0], [69.5, 1541.0], [69.6, 1542.0], [69.7, 1543.0], [69.8, 1550.0], [69.9, 1550.0], [70.0, 1551.0], [70.1, 1559.0], [70.2, 1559.0], [70.3, 1561.0], [70.4, 1566.0], [70.5, 1570.0], [70.6, 1570.0], [70.7, 1577.0], [70.8, 1583.0], [70.9, 1585.0], [71.0, 1585.0], [71.1, 1585.0], [71.2, 1592.0], [71.3, 1592.0], [71.4, 1592.0], [71.5, 1592.0], [71.6, 1593.0], [71.7, 1593.0], [71.8, 1593.0], [71.9, 1595.0], [72.0, 1596.0], [72.1, 1596.0], [72.2, 1596.0], [72.3, 1599.0], [72.4, 1602.0], [72.5, 1602.0], [72.6, 1602.0], [72.7, 1604.0], [72.8, 1606.0], [72.9, 1606.0], [73.0, 1607.0], [73.1, 1612.0], [73.2, 1614.0], [73.3, 1614.0], [73.4, 1617.0], [73.5, 1617.0], [73.6, 1617.0], [73.7, 1617.0], [73.8, 1618.0], [73.9, 1621.0], [74.0, 1621.0], [74.1, 1621.0], [74.2, 1622.0], [74.3, 1626.0], [74.4, 1626.0], [74.5, 1627.0], [74.6, 1628.0], [74.7, 1629.0], [74.8, 1629.0], [74.9, 1634.0], [75.0, 1636.0], [75.1, 1636.0], [75.2, 1637.0], [75.3, 1639.0], [75.4, 1640.0], [75.5, 1640.0], [75.6, 1644.0], [75.7, 1646.0], [75.8, 1647.0], [75.9, 1647.0], [76.0, 1648.0], [76.1, 1648.0], [76.2, 1650.0], [76.3, 1650.0], [76.4, 1654.0], [76.5, 1665.0], [76.6, 1667.0], [76.7, 1667.0], [76.8, 1668.0], [76.9, 1670.0], [77.0, 1670.0], [77.1, 1675.0], [77.2, 1675.0], [77.3, 1677.0], [77.4, 1677.0], [77.5, 1682.0], [77.6, 1685.0], [77.7, 1686.0], [77.8, 1686.0], [77.9, 1690.0], [78.0, 1692.0], [78.1, 1695.0], [78.2, 1695.0], [78.3, 1695.0], [78.4, 1695.0], [78.5, 1695.0], [78.6, 1698.0], [78.7, 1699.0], [78.8, 1699.0], [78.9, 1699.0], [79.0, 1701.0], [79.1, 1702.0], [79.2, 1702.0], [79.3, 1702.0], [79.4, 1703.0], [79.5, 1705.0], [79.6, 1708.0], [79.7, 1708.0], [79.8, 1709.0], [79.9, 1720.0], [80.0, 1722.0], [80.1, 1722.0], [80.2, 1723.0], [80.3, 1730.0], [80.4, 1730.0], [80.5, 1733.0], [80.6, 1733.0], [80.7, 1735.0], [80.8, 1735.0], [80.9, 1737.0], [81.0, 1737.0], [81.1, 1738.0], [81.2, 1738.0], [81.3, 1740.0], [81.4, 1743.0], [81.5, 1743.0], [81.6, 1743.0], [81.7, 1745.0], [81.8, 1745.0], [81.9, 1745.0], [82.0, 1748.0], [82.1, 1750.0], [82.2, 1753.0], [82.3, 1753.0], [82.4, 1760.0], [82.5, 1762.0], [82.6, 1763.0], [82.7, 1763.0], [82.8, 1763.0], [82.9, 1767.0], [83.0, 1779.0], [83.1, 1779.0], [83.2, 1780.0], [83.3, 1787.0], [83.4, 1787.0], [83.5, 1787.0], [83.6, 1790.0], [83.7, 1792.0], [83.8, 1792.0], [83.9, 1792.0], [84.0, 1793.0], [84.1, 1803.0], [84.2, 1803.0], [84.3, 1803.0], [84.4, 1809.0], [84.5, 1812.0], [84.6, 1812.0], [84.7, 1814.0], [84.8, 1818.0], [84.9, 1820.0], [85.0, 1820.0], [85.1, 1821.0], [85.2, 1821.0], [85.3, 1821.0], [85.4, 1831.0], [85.5, 1832.0], [85.6, 1832.0], [85.7, 1832.0], [85.8, 1833.0], [85.9, 1833.0], [86.0, 1846.0], [86.1, 1846.0], [86.2, 1851.0], [86.3, 1853.0], [86.4, 1854.0], [86.5, 1854.0], [86.6, 1856.0], [86.7, 1857.0], [86.8, 1857.0], [86.9, 1858.0], [87.0, 1859.0], [87.1, 1865.0], [87.2, 1865.0], [87.3, 1866.0], [87.4, 1871.0], [87.5, 1874.0], [87.6, 1874.0], [87.7, 1877.0], [87.8, 1877.0], [87.9, 1881.0], [88.0, 1881.0], [88.1, 1889.0], [88.2, 1895.0], [88.3, 1900.0], [88.4, 1900.0], [88.5, 1902.0], [88.6, 1911.0], [88.7, 1911.0], [88.8, 1915.0], [88.9, 1922.0], [89.0, 1940.0], [89.1, 1940.0], [89.2, 1943.0], [89.3, 1946.0], [89.4, 1957.0], [89.5, 1957.0], [89.6, 1958.0], [89.7, 1960.0], [89.8, 1962.0], [89.9, 1962.0], [90.0, 1963.0], [90.1, 1966.0], [90.2, 1966.0], [90.3, 1974.0], [90.4, 1975.0], [90.5, 1977.0], [90.6, 1977.0], [90.7, 1977.0], [90.8, 1979.0], [90.9, 1989.0], [91.0, 1989.0], [91.1, 1991.0], [91.2, 2008.0], [91.3, 2017.0], [91.4, 2017.0], [91.5, 2018.0], [91.6, 2023.0], [91.7, 2023.0], [91.8, 2025.0], [91.9, 2025.0], [92.0, 2041.0], [92.1, 2041.0], [92.2, 2048.0], [92.3, 2050.0], [92.4, 2051.0], [92.5, 2051.0], [92.6, 2055.0], [92.7, 2063.0], [92.8, 2084.0], [92.9, 2084.0], [93.0, 2084.0], [93.1, 2088.0], [93.2, 2089.0], [93.3, 2089.0], [93.4, 2095.0], [93.5, 2115.0], [93.6, 2115.0], [93.7, 2127.0], [93.8, 2142.0], [93.9, 2167.0], [94.0, 2167.0], [94.1, 2209.0], [94.2, 2242.0], [94.3, 2271.0], [94.4, 2271.0], [94.5, 2277.0], [94.6, 2278.0], [94.7, 2288.0], [94.8, 2288.0], [94.9, 2294.0], [95.0, 2401.0], [95.1, 2401.0], [95.2, 2404.0], [95.3, 2437.0], [95.4, 2470.0], [95.5, 2470.0], [95.6, 2532.0], [95.7, 2572.0], [95.8, 2604.0], [95.9, 2604.0], [96.0, 2624.0], [96.1, 2692.0], [96.2, 2709.0], [96.3, 2709.0], [96.4, 2714.0], [96.5, 2757.0], [96.6, 2797.0], [96.7, 2797.0], [96.8, 2805.0], [96.9, 2831.0], [97.0, 2831.0], [97.1, 2862.0], [97.2, 2866.0], [97.3, 2895.0], [97.4, 2895.0], [97.5, 2900.0], [97.6, 2953.0], [97.7, 2980.0], [97.8, 2980.0], [97.9, 3027.0], [98.0, 3031.0], [98.1, 3053.0], [98.2, 3053.0], [98.3, 3093.0], [98.4, 3102.0], [98.5, 3102.0], [98.6, 3221.0], [98.7, 3252.0], [98.8, 3383.0], [98.9, 3383.0], [99.0, 3447.0], [99.1, 3457.0], [99.2, 3511.0], [99.3, 3511.0], [99.4, 3541.0], [99.5, 3545.0], [99.6, 4237.0], [99.7, 4237.0], [99.8, 4333.0], [99.9, 5746.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 200.0, "maxY": 65.0, "series": [{"data": [[600.0, 28.0], [700.0, 33.0], [800.0, 45.0], [900.0, 55.0], [1000.0, 60.0], [1100.0, 58.0], [1200.0, 65.0], [1300.0, 42.0], [1400.0, 45.0], [1500.0, 44.0], [1600.0, 48.0], [1700.0, 38.0], [1800.0, 31.0], [1900.0, 21.0], [2000.0, 17.0], [2100.0, 4.0], [2200.0, 7.0], [2400.0, 4.0], [2500.0, 2.0], [2600.0, 3.0], [2700.0, 4.0], [2800.0, 5.0], [2900.0, 3.0], [3000.0, 4.0], [3100.0, 1.0], [3200.0, 2.0], [200.0, 1.0], [3300.0, 1.0], [3400.0, 2.0], [3500.0, 3.0], [4300.0, 1.0], [4200.0, 1.0], [300.0, 4.0], [5700.0, 1.0], [400.0, 13.0], [500.0, 39.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 5700.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 18.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 470.0, "series": [{"data": [[0.0, 18.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 470.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 247.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 19.46760563380282, "minX": 1.60183452E12, "maxY": 20.0, "series": [{"data": [[1.60183452E12, 20.0], [1.60183458E12, 19.46760563380282]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60183458E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 418.0, "minX": 1.0, "maxY": 3102.0, "series": [{"data": [[8.0, 2381.0], [2.0, 1701.0], [9.0, 820.0], [10.0, 583.0], [11.0, 1326.0], [12.0, 418.0], [3.0, 939.0], [13.0, 628.0], [14.0, 639.0], [15.0, 586.0], [16.0, 606.0], [4.0, 1621.0], [1.0, 2025.0], [17.0, 1432.0], [18.0, 994.0], [19.0, 1551.0], [20.0, 1332.6326815642442], [5.0, 2437.0], [6.0, 3102.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[19.74285714285715, 1333.7891156462565]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 20.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 2663.983333333333, "minX": 1.60183452E12, "maxY": 1010514.2833333333, "series": [{"data": [[1.60183452E12, 1010514.2833333333], [1.60183458E12, 825255.2833333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60183452E12, 2859.05], [1.60183458E12, 2663.983333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60183458E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 1292.484507042253, "minX": 1.60183452E12, "maxY": 1372.3763157894743, "series": [{"data": [[1.60183452E12, 1372.3763157894743], [1.60183458E12, 1292.484507042253]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60183458E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 1254.6957746478886, "minX": 1.60183452E12, "maxY": 1331.1578947368432, "series": [{"data": [[1.60183452E12, 1331.1578947368432], [1.60183458E12, 1254.6957746478886]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60183458E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.60183452E12, "maxY": 0.7921052631578958, "series": [{"data": [[1.60183452E12, 0.7921052631578958], [1.60183458E12, 0.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60183458E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 275.0, "minX": 1.60183452E12, "maxY": 5746.0, "series": [{"data": [[1.60183452E12, 5746.0], [1.60183458E12, 4237.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60183452E12, 443.7159996366501], [1.60183458E12, 370.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60183452E12, 445.08760014534], [1.60183458E12, 370.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60183452E12, 444.47799981832503], [1.60183458E12, 370.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60183452E12, 341.0], [1.60183458E12, 275.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60183452E12, 1273.5], [1.60183458E12, 1235.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60183458E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 800.0, "minX": 1.0, "maxY": 2735.5, "series": [{"data": [[10.0, 1509.0], [11.0, 1223.0], [12.0, 1425.0], [13.0, 1527.5], [14.0, 1217.5], [15.0, 1451.0], [4.0, 2735.5], [16.0, 1118.5], [1.0, 2025.0], [17.0, 1386.5], [18.0, 1154.5], [19.0, 989.0], [20.0, 938.0], [21.0, 942.0], [22.0, 1212.0], [27.0, 800.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 27.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 788.0, "minX": 1.0, "maxY": 2701.5, "series": [{"data": [[10.0, 1430.5], [11.0, 1196.0], [12.0, 1397.0], [13.0, 1478.5], [14.0, 1173.5], [15.0, 1419.0], [4.0, 2701.5], [16.0, 1089.0], [1.0, 1946.0], [17.0, 1329.5], [18.0, 1130.0], [19.0, 968.5], [20.0, 897.5], [21.0, 915.0], [22.0, 1179.0], [27.0, 788.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 27.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 5.583333333333333, "minX": 1.60183452E12, "maxY": 6.666666666666667, "series": [{"data": [[1.60183452E12, 6.666666666666667], [1.60183458E12, 5.583333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60183458E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 5.916666666666667, "minX": 1.60183452E12, "maxY": 6.333333333333333, "series": [{"data": [[1.60183452E12, 6.333333333333333], [1.60183458E12, 5.916666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60183458E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 5.916666666666667, "minX": 1.60183452E12, "maxY": 6.333333333333333, "series": [{"data": [[1.60183452E12, 6.333333333333333], [1.60183458E12, 5.916666666666667]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60183458E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 5.916666666666667, "minX": 1.60183452E12, "maxY": 6.333333333333333, "series": [{"data": [[1.60183452E12, 6.333333333333333], [1.60183458E12, 5.916666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60183458E12, "title": "Total Transactions Per Second"}},
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

