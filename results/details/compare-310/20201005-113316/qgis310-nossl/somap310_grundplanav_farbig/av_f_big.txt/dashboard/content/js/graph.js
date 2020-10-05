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
        data: {"result": {"minY": 466.0, "minX": 0.0, "maxY": 6413.0, "series": [{"data": [[0.0, 466.0], [0.1, 466.0], [0.2, 476.0], [0.3, 478.0], [0.4, 478.0], [0.5, 496.0], [0.6, 515.0], [0.7, 518.0], [0.8, 518.0], [0.9, 524.0], [1.0, 530.0], [1.1, 531.0], [1.2, 531.0], [1.3, 541.0], [1.4, 548.0], [1.5, 548.0], [1.6, 548.0], [1.7, 553.0], [1.8, 554.0], [1.9, 554.0], [2.0, 558.0], [2.1, 558.0], [2.2, 560.0], [2.3, 560.0], [2.4, 562.0], [2.5, 566.0], [2.6, 569.0], [2.7, 569.0], [2.8, 574.0], [2.9, 580.0], [3.0, 585.0], [3.1, 585.0], [3.2, 585.0], [3.3, 587.0], [3.4, 587.0], [3.5, 593.0], [3.6, 595.0], [3.7, 596.0], [3.8, 596.0], [3.9, 598.0], [4.0, 602.0], [4.1, 603.0], [4.2, 603.0], [4.3, 605.0], [4.4, 615.0], [4.5, 617.0], [4.6, 617.0], [4.7, 619.0], [4.8, 622.0], [4.9, 623.0], [5.0, 623.0], [5.1, 629.0], [5.2, 634.0], [5.3, 634.0], [5.4, 634.0], [5.5, 639.0], [5.6, 642.0], [5.7, 642.0], [5.8, 643.0], [5.9, 643.0], [6.0, 645.0], [6.1, 645.0], [6.2, 649.0], [6.3, 653.0], [6.4, 655.0], [6.5, 655.0], [6.6, 660.0], [6.7, 662.0], [6.8, 662.0], [6.9, 663.0], [7.0, 663.0], [7.1, 664.0], [7.2, 664.0], [7.3, 664.0], [7.4, 667.0], [7.5, 668.0], [7.6, 668.0], [7.7, 669.0], [7.8, 673.0], [7.9, 673.0], [8.0, 673.0], [8.1, 675.0], [8.2, 675.0], [8.3, 678.0], [8.4, 678.0], [8.5, 678.0], [8.6, 678.0], [8.7, 678.0], [8.8, 680.0], [8.9, 682.0], [9.0, 683.0], [9.1, 683.0], [9.2, 683.0], [9.3, 685.0], [9.4, 685.0], [9.5, 685.0], [9.6, 686.0], [9.7, 689.0], [9.8, 691.0], [9.9, 691.0], [10.0, 691.0], [10.1, 693.0], [10.2, 693.0], [10.3, 694.0], [10.4, 694.0], [10.5, 694.0], [10.6, 694.0], [10.7, 696.0], [10.8, 698.0], [10.9, 700.0], [11.0, 700.0], [11.1, 703.0], [11.2, 706.0], [11.3, 706.0], [11.4, 706.0], [11.5, 710.0], [11.6, 711.0], [11.7, 711.0], [11.8, 712.0], [11.9, 713.0], [12.0, 714.0], [12.1, 714.0], [12.2, 715.0], [12.3, 719.0], [12.4, 720.0], [12.5, 720.0], [12.6, 721.0], [12.7, 721.0], [12.8, 723.0], [12.9, 723.0], [13.0, 726.0], [13.1, 728.0], [13.2, 730.0], [13.3, 730.0], [13.4, 731.0], [13.5, 731.0], [13.6, 731.0], [13.7, 732.0], [13.8, 736.0], [13.9, 737.0], [14.0, 737.0], [14.1, 741.0], [14.2, 743.0], [14.3, 744.0], [14.4, 744.0], [14.5, 745.0], [14.6, 746.0], [14.7, 747.0], [14.8, 747.0], [14.9, 751.0], [15.0, 752.0], [15.1, 752.0], [15.2, 754.0], [15.3, 756.0], [15.4, 757.0], [15.5, 757.0], [15.6, 758.0], [15.7, 759.0], [15.8, 762.0], [15.9, 762.0], [16.0, 763.0], [16.1, 765.0], [16.2, 767.0], [16.3, 767.0], [16.4, 767.0], [16.5, 773.0], [16.6, 774.0], [16.7, 774.0], [16.8, 775.0], [16.9, 780.0], [17.0, 780.0], [17.1, 781.0], [17.2, 784.0], [17.3, 784.0], [17.4, 784.0], [17.5, 786.0], [17.6, 788.0], [17.7, 795.0], [17.8, 795.0], [17.9, 796.0], [18.0, 796.0], [18.1, 798.0], [18.2, 798.0], [18.3, 802.0], [18.4, 809.0], [18.5, 809.0], [18.6, 809.0], [18.7, 810.0], [18.8, 812.0], [18.9, 812.0], [19.0, 812.0], [19.1, 815.0], [19.2, 816.0], [19.3, 816.0], [19.4, 819.0], [19.5, 821.0], [19.6, 822.0], [19.7, 822.0], [19.8, 824.0], [19.9, 825.0], [20.0, 826.0], [20.1, 826.0], [20.2, 831.0], [20.3, 835.0], [20.4, 835.0], [20.5, 835.0], [20.6, 836.0], [20.7, 837.0], [20.8, 837.0], [20.9, 841.0], [21.0, 843.0], [21.1, 843.0], [21.2, 843.0], [21.3, 844.0], [21.4, 846.0], [21.5, 847.0], [21.6, 847.0], [21.7, 852.0], [21.8, 853.0], [21.9, 853.0], [22.0, 859.0], [22.1, 862.0], [22.2, 870.0], [22.3, 870.0], [22.4, 870.0], [22.5, 872.0], [22.6, 873.0], [22.7, 873.0], [22.8, 876.0], [22.9, 877.0], [23.0, 878.0], [23.1, 878.0], [23.2, 883.0], [23.3, 886.0], [23.4, 886.0], [23.5, 891.0], [23.6, 893.0], [23.7, 902.0], [23.8, 902.0], [23.9, 903.0], [24.0, 904.0], [24.1, 907.0], [24.2, 907.0], [24.3, 907.0], [24.4, 908.0], [24.5, 909.0], [24.6, 909.0], [24.7, 911.0], [24.8, 912.0], [24.9, 916.0], [25.0, 916.0], [25.1, 916.0], [25.2, 919.0], [25.3, 919.0], [25.4, 919.0], [25.5, 922.0], [25.6, 922.0], [25.7, 922.0], [25.8, 929.0], [25.9, 931.0], [26.0, 934.0], [26.1, 934.0], [26.2, 934.0], [26.3, 936.0], [26.4, 937.0], [26.5, 937.0], [26.6, 937.0], [26.7, 937.0], [26.8, 937.0], [26.9, 938.0], [27.0, 943.0], [27.1, 946.0], [27.2, 946.0], [27.3, 949.0], [27.4, 951.0], [27.5, 952.0], [27.6, 952.0], [27.7, 954.0], [27.8, 954.0], [27.9, 960.0], [28.0, 960.0], [28.1, 966.0], [28.2, 971.0], [28.3, 973.0], [28.4, 973.0], [28.5, 974.0], [28.6, 976.0], [28.7, 976.0], [28.8, 983.0], [28.9, 988.0], [29.0, 992.0], [29.1, 992.0], [29.2, 995.0], [29.3, 996.0], [29.4, 996.0], [29.5, 996.0], [29.6, 998.0], [29.7, 999.0], [29.8, 999.0], [29.9, 999.0], [30.0, 1002.0], [30.1, 1007.0], [30.2, 1007.0], [30.3, 1008.0], [30.4, 1008.0], [30.5, 1009.0], [30.6, 1009.0], [30.7, 1013.0], [30.8, 1016.0], [30.9, 1016.0], [31.0, 1016.0], [31.1, 1027.0], [31.2, 1028.0], [31.3, 1029.0], [31.4, 1029.0], [31.5, 1030.0], [31.6, 1035.0], [31.7, 1035.0], [31.8, 1035.0], [31.9, 1035.0], [32.0, 1037.0], [32.1, 1037.0], [32.2, 1038.0], [32.3, 1042.0], [32.4, 1046.0], [32.5, 1046.0], [32.6, 1047.0], [32.7, 1048.0], [32.8, 1049.0], [32.9, 1049.0], [33.0, 1054.0], [33.1, 1057.0], [33.2, 1059.0], [33.3, 1059.0], [33.4, 1059.0], [33.5, 1060.0], [33.6, 1060.0], [33.7, 1061.0], [33.8, 1062.0], [33.9, 1068.0], [34.0, 1068.0], [34.1, 1068.0], [34.2, 1069.0], [34.3, 1070.0], [34.4, 1070.0], [34.5, 1072.0], [34.6, 1074.0], [34.7, 1076.0], [34.8, 1076.0], [34.9, 1080.0], [35.0, 1083.0], [35.1, 1083.0], [35.2, 1086.0], [35.3, 1088.0], [35.4, 1091.0], [35.5, 1091.0], [35.6, 1092.0], [35.7, 1092.0], [35.8, 1096.0], [35.9, 1096.0], [36.0, 1097.0], [36.1, 1098.0], [36.2, 1101.0], [36.3, 1101.0], [36.4, 1104.0], [36.5, 1104.0], [36.6, 1104.0], [36.7, 1104.0], [36.8, 1107.0], [36.9, 1108.0], [37.0, 1108.0], [37.1, 1109.0], [37.2, 1111.0], [37.3, 1113.0], [37.4, 1113.0], [37.5, 1115.0], [37.6, 1117.0], [37.7, 1117.0], [37.8, 1117.0], [37.9, 1119.0], [38.0, 1120.0], [38.1, 1126.0], [38.2, 1126.0], [38.3, 1127.0], [38.4, 1127.0], [38.5, 1127.0], [38.6, 1130.0], [38.7, 1135.0], [38.8, 1136.0], [38.9, 1136.0], [39.0, 1139.0], [39.1, 1140.0], [39.2, 1142.0], [39.3, 1142.0], [39.4, 1144.0], [39.5, 1144.0], [39.6, 1145.0], [39.7, 1145.0], [39.8, 1146.0], [39.9, 1147.0], [40.0, 1152.0], [40.1, 1152.0], [40.2, 1154.0], [40.3, 1155.0], [40.4, 1155.0], [40.5, 1156.0], [40.6, 1156.0], [40.7, 1159.0], [40.8, 1159.0], [40.9, 1159.0], [41.0, 1161.0], [41.1, 1162.0], [41.2, 1162.0], [41.3, 1163.0], [41.4, 1166.0], [41.5, 1169.0], [41.6, 1169.0], [41.7, 1171.0], [41.8, 1171.0], [41.9, 1171.0], [42.0, 1171.0], [42.1, 1172.0], [42.2, 1173.0], [42.3, 1173.0], [42.4, 1175.0], [42.5, 1175.0], [42.6, 1176.0], [42.7, 1176.0], [42.8, 1177.0], [42.9, 1177.0], [43.0, 1179.0], [43.1, 1179.0], [43.2, 1180.0], [43.3, 1180.0], [43.4, 1180.0], [43.5, 1180.0], [43.6, 1182.0], [43.7, 1182.0], [43.8, 1182.0], [43.9, 1183.0], [44.0, 1185.0], [44.1, 1189.0], [44.2, 1189.0], [44.3, 1191.0], [44.4, 1191.0], [44.5, 1192.0], [44.6, 1192.0], [44.7, 1200.0], [44.8, 1201.0], [44.9, 1202.0], [45.0, 1202.0], [45.1, 1203.0], [45.2, 1204.0], [45.3, 1204.0], [45.4, 1204.0], [45.5, 1205.0], [45.6, 1208.0], [45.7, 1208.0], [45.8, 1208.0], [45.9, 1210.0], [46.0, 1211.0], [46.1, 1211.0], [46.2, 1213.0], [46.3, 1214.0], [46.4, 1217.0], [46.5, 1217.0], [46.6, 1222.0], [46.7, 1223.0], [46.8, 1223.0], [46.9, 1226.0], [47.0, 1226.0], [47.1, 1228.0], [47.2, 1228.0], [47.3, 1229.0], [47.4, 1230.0], [47.5, 1231.0], [47.6, 1231.0], [47.7, 1231.0], [47.8, 1234.0], [47.9, 1239.0], [48.0, 1239.0], [48.1, 1239.0], [48.2, 1242.0], [48.3, 1243.0], [48.4, 1243.0], [48.5, 1244.0], [48.6, 1245.0], [48.7, 1245.0], [48.8, 1245.0], [48.9, 1247.0], [49.0, 1247.0], [49.1, 1247.0], [49.2, 1248.0], [49.3, 1250.0], [49.4, 1251.0], [49.5, 1251.0], [49.6, 1252.0], [49.7, 1253.0], [49.8, 1253.0], [49.9, 1253.0], [50.0, 1254.0], [50.1, 1258.0], [50.2, 1258.0], [50.3, 1259.0], [50.4, 1260.0], [50.5, 1264.0], [50.6, 1264.0], [50.7, 1268.0], [50.8, 1269.0], [50.9, 1270.0], [51.0, 1270.0], [51.1, 1273.0], [51.2, 1276.0], [51.3, 1279.0], [51.4, 1279.0], [51.5, 1280.0], [51.6, 1280.0], [51.7, 1280.0], [51.8, 1281.0], [51.9, 1281.0], [52.0, 1282.0], [52.1, 1282.0], [52.2, 1282.0], [52.3, 1283.0], [52.4, 1287.0], [52.5, 1287.0], [52.6, 1288.0], [52.7, 1289.0], [52.8, 1291.0], [52.9, 1291.0], [53.0, 1292.0], [53.1, 1293.0], [53.2, 1293.0], [53.3, 1293.0], [53.4, 1294.0], [53.5, 1294.0], [53.6, 1294.0], [53.7, 1294.0], [53.8, 1296.0], [53.9, 1297.0], [54.0, 1297.0], [54.1, 1297.0], [54.2, 1297.0], [54.3, 1297.0], [54.4, 1297.0], [54.5, 1299.0], [54.6, 1300.0], [54.7, 1300.0], [54.8, 1300.0], [54.9, 1300.0], [55.0, 1301.0], [55.1, 1301.0], [55.2, 1301.0], [55.3, 1302.0], [55.4, 1302.0], [55.5, 1302.0], [55.6, 1302.0], [55.7, 1306.0], [55.8, 1306.0], [55.9, 1306.0], [56.0, 1307.0], [56.1, 1307.0], [56.2, 1308.0], [56.3, 1308.0], [56.4, 1309.0], [56.5, 1311.0], [56.6, 1312.0], [56.7, 1312.0], [56.8, 1313.0], [56.9, 1315.0], [57.0, 1315.0], [57.1, 1315.0], [57.2, 1315.0], [57.3, 1317.0], [57.4, 1317.0], [57.5, 1317.0], [57.6, 1318.0], [57.7, 1318.0], [57.8, 1318.0], [57.9, 1318.0], [58.0, 1319.0], [58.1, 1322.0], [58.2, 1322.0], [58.3, 1324.0], [58.4, 1324.0], [58.5, 1324.0], [58.6, 1326.0], [58.7, 1326.0], [58.8, 1329.0], [58.9, 1329.0], [59.0, 1331.0], [59.1, 1335.0], [59.2, 1336.0], [59.3, 1336.0], [59.4, 1336.0], [59.5, 1336.0], [59.6, 1336.0], [59.7, 1336.0], [59.8, 1340.0], [59.9, 1340.0], [60.0, 1342.0], [60.1, 1342.0], [60.2, 1343.0], [60.3, 1344.0], [60.4, 1344.0], [60.5, 1344.0], [60.6, 1346.0], [60.7, 1346.0], [60.8, 1346.0], [60.9, 1347.0], [61.0, 1348.0], [61.1, 1349.0], [61.2, 1349.0], [61.3, 1350.0], [61.4, 1351.0], [61.5, 1352.0], [61.6, 1352.0], [61.7, 1354.0], [61.8, 1354.0], [61.9, 1354.0], [62.0, 1357.0], [62.1, 1359.0], [62.2, 1360.0], [62.3, 1360.0], [62.4, 1360.0], [62.5, 1361.0], [62.6, 1362.0], [62.7, 1362.0], [62.8, 1362.0], [62.9, 1363.0], [63.0, 1363.0], [63.1, 1363.0], [63.2, 1364.0], [63.3, 1364.0], [63.4, 1364.0], [63.5, 1365.0], [63.6, 1367.0], [63.7, 1368.0], [63.8, 1368.0], [63.9, 1369.0], [64.0, 1369.0], [64.1, 1369.0], [64.2, 1369.0], [64.3, 1371.0], [64.4, 1373.0], [64.5, 1374.0], [64.6, 1374.0], [64.7, 1375.0], [64.8, 1375.0], [64.9, 1376.0], [65.0, 1376.0], [65.1, 1377.0], [65.2, 1377.0], [65.3, 1377.0], [65.4, 1379.0], [65.5, 1379.0], [65.6, 1381.0], [65.7, 1381.0], [65.8, 1384.0], [65.9, 1384.0], [66.0, 1385.0], [66.1, 1385.0], [66.2, 1386.0], [66.3, 1392.0], [66.4, 1396.0], [66.5, 1396.0], [66.6, 1398.0], [66.7, 1398.0], [66.8, 1398.0], [66.9, 1399.0], [67.0, 1400.0], [67.1, 1401.0], [67.2, 1401.0], [67.3, 1402.0], [67.4, 1405.0], [67.5, 1406.0], [67.6, 1406.0], [67.7, 1406.0], [67.8, 1406.0], [67.9, 1407.0], [68.0, 1407.0], [68.1, 1408.0], [68.2, 1410.0], [68.3, 1410.0], [68.4, 1410.0], [68.5, 1411.0], [68.6, 1412.0], [68.7, 1412.0], [68.8, 1416.0], [68.9, 1419.0], [69.0, 1420.0], [69.1, 1420.0], [69.2, 1422.0], [69.3, 1423.0], [69.4, 1423.0], [69.5, 1423.0], [69.6, 1423.0], [69.7, 1423.0], [69.8, 1424.0], [69.9, 1424.0], [70.0, 1424.0], [70.1, 1426.0], [70.2, 1426.0], [70.3, 1428.0], [70.4, 1430.0], [70.5, 1430.0], [70.6, 1430.0], [70.7, 1431.0], [70.8, 1431.0], [70.9, 1433.0], [71.0, 1433.0], [71.1, 1433.0], [71.2, 1433.0], [71.3, 1434.0], [71.4, 1434.0], [71.5, 1438.0], [71.6, 1440.0], [71.7, 1440.0], [71.8, 1444.0], [71.9, 1445.0], [72.0, 1445.0], [72.1, 1445.0], [72.2, 1446.0], [72.3, 1448.0], [72.4, 1452.0], [72.5, 1452.0], [72.6, 1453.0], [72.7, 1453.0], [72.8, 1456.0], [72.9, 1456.0], [73.0, 1456.0], [73.1, 1457.0], [73.2, 1457.0], [73.3, 1457.0], [73.4, 1462.0], [73.5, 1465.0], [73.6, 1465.0], [73.7, 1468.0], [73.8, 1468.0], [73.9, 1470.0], [74.0, 1470.0], [74.1, 1472.0], [74.2, 1475.0], [74.3, 1475.0], [74.4, 1475.0], [74.5, 1475.0], [74.6, 1482.0], [74.7, 1483.0], [74.8, 1483.0], [74.9, 1484.0], [75.0, 1485.0], [75.1, 1485.0], [75.2, 1485.0], [75.3, 1487.0], [75.4, 1490.0], [75.5, 1490.0], [75.6, 1490.0], [75.7, 1491.0], [75.8, 1494.0], [75.9, 1494.0], [76.0, 1495.0], [76.1, 1496.0], [76.2, 1498.0], [76.3, 1498.0], [76.4, 1499.0], [76.5, 1499.0], [76.6, 1503.0], [76.7, 1503.0], [76.8, 1503.0], [76.9, 1503.0], [77.0, 1503.0], [77.1, 1505.0], [77.2, 1506.0], [77.3, 1507.0], [77.4, 1507.0], [77.5, 1511.0], [77.6, 1513.0], [77.7, 1514.0], [77.8, 1514.0], [77.9, 1519.0], [78.0, 1519.0], [78.1, 1519.0], [78.2, 1519.0], [78.3, 1526.0], [78.4, 1526.0], [78.5, 1526.0], [78.6, 1527.0], [78.7, 1528.0], [78.8, 1531.0], [78.9, 1531.0], [79.0, 1531.0], [79.1, 1532.0], [79.2, 1536.0], [79.3, 1536.0], [79.4, 1536.0], [79.5, 1537.0], [79.6, 1538.0], [79.7, 1538.0], [79.8, 1538.0], [79.9, 1542.0], [80.0, 1543.0], [80.1, 1543.0], [80.2, 1546.0], [80.3, 1547.0], [80.4, 1547.0], [80.5, 1550.0], [80.6, 1550.0], [80.7, 1552.0], [80.8, 1552.0], [80.9, 1553.0], [81.0, 1555.0], [81.1, 1555.0], [81.2, 1555.0], [81.3, 1564.0], [81.4, 1569.0], [81.5, 1571.0], [81.6, 1571.0], [81.7, 1572.0], [81.8, 1574.0], [81.9, 1574.0], [82.0, 1575.0], [82.1, 1577.0], [82.2, 1586.0], [82.3, 1586.0], [82.4, 1587.0], [82.5, 1590.0], [82.6, 1591.0], [82.7, 1591.0], [82.8, 1593.0], [82.9, 1593.0], [83.0, 1600.0], [83.1, 1600.0], [83.2, 1601.0], [83.3, 1603.0], [83.4, 1603.0], [83.5, 1603.0], [83.6, 1605.0], [83.7, 1607.0], [83.8, 1607.0], [83.9, 1617.0], [84.0, 1619.0], [84.1, 1622.0], [84.2, 1622.0], [84.3, 1622.0], [84.4, 1623.0], [84.5, 1624.0], [84.6, 1624.0], [84.7, 1628.0], [84.8, 1632.0], [84.9, 1632.0], [85.0, 1632.0], [85.1, 1633.0], [85.2, 1636.0], [85.3, 1636.0], [85.4, 1637.0], [85.5, 1639.0], [85.6, 1644.0], [85.7, 1644.0], [85.8, 1644.0], [85.9, 1648.0], [86.0, 1654.0], [86.1, 1654.0], [86.2, 1656.0], [86.3, 1659.0], [86.4, 1661.0], [86.5, 1661.0], [86.6, 1667.0], [86.7, 1673.0], [86.8, 1673.0], [86.9, 1678.0], [87.0, 1687.0], [87.1, 1687.0], [87.2, 1687.0], [87.3, 1691.0], [87.4, 1692.0], [87.5, 1698.0], [87.6, 1698.0], [87.7, 1704.0], [87.8, 1707.0], [87.9, 1715.0], [88.0, 1715.0], [88.1, 1716.0], [88.2, 1726.0], [88.3, 1731.0], [88.4, 1731.0], [88.5, 1734.0], [88.6, 1735.0], [88.7, 1735.0], [88.8, 1749.0], [88.9, 1755.0], [89.0, 1759.0], [89.1, 1759.0], [89.2, 1763.0], [89.3, 1767.0], [89.4, 1768.0], [89.5, 1768.0], [89.6, 1770.0], [89.7, 1772.0], [89.8, 1773.0], [89.9, 1773.0], [90.0, 1781.0], [90.1, 1783.0], [90.2, 1783.0], [90.3, 1790.0], [90.4, 1794.0], [90.5, 1806.0], [90.6, 1806.0], [90.7, 1808.0], [90.8, 1810.0], [90.9, 1811.0], [91.0, 1811.0], [91.1, 1813.0], [91.2, 1831.0], [91.3, 1833.0], [91.4, 1833.0], [91.5, 1850.0], [91.6, 1853.0], [91.7, 1853.0], [91.8, 1875.0], [91.9, 1879.0], [92.0, 1898.0], [92.1, 1898.0], [92.2, 1926.0], [92.3, 1956.0], [92.4, 1973.0], [92.5, 1973.0], [92.6, 2017.0], [92.7, 2018.0], [92.8, 2037.0], [92.9, 2037.0], [93.0, 2098.0], [93.1, 2141.0], [93.2, 2166.0], [93.3, 2166.0], [93.4, 2187.0], [93.5, 2190.0], [93.6, 2190.0], [93.7, 2204.0], [93.8, 2218.0], [93.9, 2338.0], [94.0, 2338.0], [94.1, 2390.0], [94.2, 2422.0], [94.3, 2490.0], [94.4, 2490.0], [94.5, 2549.0], [94.6, 2555.0], [94.7, 2596.0], [94.8, 2596.0], [94.9, 2612.0], [95.0, 2678.0], [95.1, 2678.0], [95.2, 2705.0], [95.3, 2752.0], [95.4, 2756.0], [95.5, 2756.0], [95.6, 2761.0], [95.7, 2784.0], [95.8, 2843.0], [95.9, 2843.0], [96.0, 2853.0], [96.1, 2945.0], [96.2, 3013.0], [96.3, 3013.0], [96.4, 3034.0], [96.5, 3142.0], [96.6, 3312.0], [96.7, 3312.0], [96.8, 3319.0], [96.9, 3321.0], [97.0, 3321.0], [97.1, 3342.0], [97.2, 3354.0], [97.3, 3400.0], [97.4, 3400.0], [97.5, 3443.0], [97.6, 3445.0], [97.7, 3510.0], [97.8, 3510.0], [97.9, 3510.0], [98.0, 3537.0], [98.1, 3542.0], [98.2, 3542.0], [98.3, 3576.0], [98.4, 3679.0], [98.5, 3679.0], [98.6, 3698.0], [98.7, 3706.0], [98.8, 3708.0], [98.9, 3708.0], [99.0, 3818.0], [99.1, 3972.0], [99.2, 4031.0], [99.3, 4031.0], [99.4, 4220.0], [99.5, 4413.0], [99.6, 4510.0], [99.7, 4510.0], [99.8, 6394.0], [99.9, 6413.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 400.0, "maxY": 91.0, "series": [{"data": [[600.0, 51.0], [700.0, 54.0], [800.0, 40.0], [900.0, 46.0], [1000.0, 46.0], [1100.0, 62.0], [1200.0, 73.0], [1300.0, 91.0], [1400.0, 71.0], [1500.0, 47.0], [1600.0, 34.0], [1700.0, 21.0], [1800.0, 12.0], [1900.0, 3.0], [2000.0, 4.0], [2100.0, 4.0], [2200.0, 2.0], [2300.0, 2.0], [2400.0, 2.0], [2500.0, 3.0], [2600.0, 2.0], [2700.0, 5.0], [2800.0, 2.0], [2900.0, 1.0], [3000.0, 2.0], [3100.0, 1.0], [3300.0, 5.0], [3400.0, 3.0], [3500.0, 5.0], [3700.0, 2.0], [3600.0, 2.0], [3800.0, 1.0], [3900.0, 1.0], [4000.0, 1.0], [4200.0, 1.0], [4500.0, 1.0], [4400.0, 1.0], [6300.0, 1.0], [6400.0, 1.0], [400.0, 4.0], [500.0, 25.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 6400.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 4.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 554.0, "series": [{"data": [[0.0, 4.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 554.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 171.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 6.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 38.94285714285714, "minX": 1.60189908E12, "maxY": 38.94285714285714, "series": [{"data": [[1.60189908E12, 38.94285714285714]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60189908E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 548.0, "minX": 1.0, "maxY": 2338.0, "series": [{"data": [[32.0, 1268.0], [2.0, 1898.0], [35.0, 548.0], [34.0, 835.0], [37.0, 721.0], [36.0, 1169.0], [39.0, 732.0], [38.0, 1230.0], [40.0, 1325.4655172413795], [3.0, 1526.0], [4.0, 2141.0], [5.0, 1008.0], [6.0, 2338.0], [7.0, 954.0], [8.0, 1506.0], [9.0, 2190.0], [10.0, 1571.0], [11.0, 1068.0], [12.0, 1772.0], [13.0, 1214.0], [14.0, 1260.0], [15.0, 663.0], [16.0, 1813.0], [1.0, 1956.0], [18.0, 739.5], [19.0, 1336.0], [20.0, 1794.0], [21.0, 1200.0], [22.0, 698.0], [23.0, 593.0], [24.0, 622.0], [26.0, 961.0], [27.0, 1406.0], [28.0, 759.0], [29.0, 643.0], [30.0, 1542.0], [31.0, 566.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[38.94285714285714, 1318.7755102040824]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 40.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 5523.033333333334, "minX": 1.60189908E12, "maxY": 1827631.9, "series": [{"data": [[1.60189908E12, 1827631.9]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60189908E12, 5523.033333333334]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60189908E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 1318.7755102040824, "minX": 1.60189908E12, "maxY": 1318.7755102040824, "series": [{"data": [[1.60189908E12, 1318.7755102040824]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60189908E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 1317.6612244897947, "minX": 1.60189908E12, "maxY": 1317.6612244897947, "series": [{"data": [[1.60189908E12, 1317.6612244897947]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60189908E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.9972789115646247, "minX": 1.60189908E12, "maxY": 0.9972789115646247, "series": [{"data": [[1.60189908E12, 0.9972789115646247]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60189908E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 466.0, "minX": 1.60189908E12, "maxY": 6413.0, "series": [{"data": [[1.60189908E12, 6413.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60189908E12, 521.4199989557267]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60189908E12, 525.3620004177094]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60189908E12, 523.6099994778633]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60189908E12, 466.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60189908E12, 1259.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60189908E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 730.5, "minX": 18.0, "maxY": 2772.5, "series": [{"data": [[32.0, 1307.5], [34.0, 1402.0], [36.0, 844.0], [38.0, 743.0], [39.0, 1032.5], [41.0, 910.5], [43.0, 1336.0], [47.0, 822.0], [18.0, 1516.0], [23.0, 1456.0], [24.0, 2772.5], [26.0, 1320.5], [27.0, 1423.0], [29.0, 1500.5], [30.0, 1363.5], [31.0, 1381.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[38.0, 730.5], [41.0, 784.0], [26.0, 825.0], [29.0, 1514.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 47.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 730.5, "minX": 18.0, "maxY": 2772.0, "series": [{"data": [[32.0, 1307.0], [34.0, 1401.5], [36.0, 843.5], [38.0, 742.0], [39.0, 1032.5], [41.0, 908.5], [43.0, 1335.0], [47.0, 822.0], [18.0, 1516.0], [23.0, 1455.0], [24.0, 2772.0], [26.0, 1319.5], [27.0, 1421.0], [29.0, 1497.5], [30.0, 1360.0], [31.0, 1379.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[38.0, 730.5], [41.0, 784.0], [26.0, 825.0], [29.0, 1514.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 47.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 12.25, "minX": 1.60189908E12, "maxY": 12.25, "series": [{"data": [[1.60189908E12, 12.25]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60189908E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.1, "minX": 1.60189908E12, "maxY": 12.15, "series": [{"data": [[1.60189908E12, 12.15]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.60189908E12, 0.1]], "isOverall": false, "label": "500", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60189908E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.1, "minX": 1.60189908E12, "maxY": 12.15, "series": [{"data": [[1.60189908E12, 12.15]], "isOverall": false, "label": "HTTP Request-success", "isController": false}, {"data": [[1.60189908E12, 0.1]], "isOverall": false, "label": "HTTP Request-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60189908E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.1, "minX": 1.60189908E12, "maxY": 12.15, "series": [{"data": [[1.60189908E12, 12.15]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.60189908E12, 0.1]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60189908E12, "title": "Total Transactions Per Second"}},
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

