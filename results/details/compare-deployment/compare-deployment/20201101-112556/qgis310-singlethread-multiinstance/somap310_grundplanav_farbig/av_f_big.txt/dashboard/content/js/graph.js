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
        data: {"result": {"minY": 407.0, "minX": 0.0, "maxY": 4069.0, "series": [{"data": [[0.0, 407.0], [0.1, 407.0], [0.2, 408.0], [0.3, 415.0], [0.4, 415.0], [0.5, 419.0], [0.6, 419.0], [0.7, 421.0], [0.8, 421.0], [0.9, 426.0], [1.0, 428.0], [1.1, 428.0], [1.2, 428.0], [1.3, 434.0], [1.4, 451.0], [1.5, 451.0], [1.6, 451.0], [1.7, 454.0], [1.8, 456.0], [1.9, 456.0], [2.0, 465.0], [2.1, 471.0], [2.2, 492.0], [2.3, 492.0], [2.4, 502.0], [2.5, 519.0], [2.6, 530.0], [2.7, 530.0], [2.8, 544.0], [2.9, 546.0], [3.0, 555.0], [3.1, 555.0], [3.2, 556.0], [3.3, 559.0], [3.4, 559.0], [3.5, 565.0], [3.6, 566.0], [3.7, 572.0], [3.8, 572.0], [3.9, 583.0], [4.0, 601.0], [4.1, 602.0], [4.2, 602.0], [4.3, 604.0], [4.4, 612.0], [4.5, 612.0], [4.6, 612.0], [4.7, 618.0], [4.8, 625.0], [4.9, 627.0], [5.0, 627.0], [5.1, 629.0], [5.2, 632.0], [5.3, 632.0], [5.4, 633.0], [5.5, 634.0], [5.6, 636.0], [5.7, 636.0], [5.8, 638.0], [5.9, 646.0], [6.0, 650.0], [6.1, 650.0], [6.2, 651.0], [6.3, 651.0], [6.4, 652.0], [6.5, 652.0], [6.6, 654.0], [6.7, 657.0], [6.8, 657.0], [6.9, 657.0], [7.0, 658.0], [7.1, 661.0], [7.2, 661.0], [7.3, 662.0], [7.4, 662.0], [7.5, 663.0], [7.6, 663.0], [7.7, 668.0], [7.8, 670.0], [7.9, 671.0], [8.0, 671.0], [8.1, 671.0], [8.2, 673.0], [8.3, 676.0], [8.4, 676.0], [8.5, 678.0], [8.6, 684.0], [8.7, 684.0], [8.8, 687.0], [8.9, 687.0], [9.0, 688.0], [9.1, 688.0], [9.2, 689.0], [9.3, 690.0], [9.4, 690.0], [9.5, 690.0], [9.6, 693.0], [9.7, 696.0], [9.8, 698.0], [9.9, 698.0], [10.0, 698.0], [10.1, 701.0], [10.2, 701.0], [10.3, 706.0], [10.4, 707.0], [10.5, 709.0], [10.6, 709.0], [10.7, 713.0], [10.8, 718.0], [10.9, 718.0], [11.0, 718.0], [11.1, 720.0], [11.2, 721.0], [11.3, 721.0], [11.4, 721.0], [11.5, 723.0], [11.6, 723.0], [11.7, 723.0], [11.8, 728.0], [11.9, 728.0], [12.0, 728.0], [12.1, 728.0], [12.2, 730.0], [12.3, 735.0], [12.4, 735.0], [12.5, 735.0], [12.6, 735.0], [12.7, 737.0], [12.8, 739.0], [12.9, 739.0], [13.0, 745.0], [13.1, 747.0], [13.2, 748.0], [13.3, 748.0], [13.4, 750.0], [13.5, 750.0], [13.6, 750.0], [13.7, 751.0], [13.8, 752.0], [13.9, 753.0], [14.0, 753.0], [14.1, 753.0], [14.2, 753.0], [14.3, 754.0], [14.4, 754.0], [14.5, 756.0], [14.6, 756.0], [14.7, 759.0], [14.8, 759.0], [14.9, 762.0], [15.0, 763.0], [15.1, 763.0], [15.2, 765.0], [15.3, 765.0], [15.4, 765.0], [15.5, 765.0], [15.6, 767.0], [15.7, 769.0], [15.8, 771.0], [15.9, 771.0], [16.0, 787.0], [16.1, 788.0], [16.2, 789.0], [16.3, 789.0], [16.4, 792.0], [16.5, 794.0], [16.6, 794.0], [16.7, 794.0], [16.8, 795.0], [16.9, 796.0], [17.0, 796.0], [17.1, 798.0], [17.2, 799.0], [17.3, 800.0], [17.4, 800.0], [17.5, 808.0], [17.6, 808.0], [17.7, 809.0], [17.8, 809.0], [17.9, 810.0], [18.0, 816.0], [18.1, 817.0], [18.2, 817.0], [18.3, 820.0], [18.4, 824.0], [18.5, 824.0], [18.6, 837.0], [18.7, 839.0], [18.8, 840.0], [18.9, 840.0], [19.0, 840.0], [19.1, 846.0], [19.2, 849.0], [19.3, 849.0], [19.4, 851.0], [19.5, 854.0], [19.6, 854.0], [19.7, 854.0], [19.8, 856.0], [19.9, 862.0], [20.0, 863.0], [20.1, 863.0], [20.2, 868.0], [20.3, 869.0], [20.4, 869.0], [20.5, 880.0], [20.6, 891.0], [20.7, 893.0], [20.8, 893.0], [20.9, 900.0], [21.0, 901.0], [21.1, 901.0], [21.2, 901.0], [21.3, 901.0], [21.4, 903.0], [21.5, 904.0], [21.6, 904.0], [21.7, 912.0], [21.8, 918.0], [21.9, 918.0], [22.0, 920.0], [22.1, 920.0], [22.2, 922.0], [22.3, 922.0], [22.4, 923.0], [22.5, 931.0], [22.6, 934.0], [22.7, 934.0], [22.8, 935.0], [22.9, 935.0], [23.0, 936.0], [23.1, 936.0], [23.2, 936.0], [23.3, 938.0], [23.4, 938.0], [23.5, 941.0], [23.6, 942.0], [23.7, 942.0], [23.8, 942.0], [23.9, 943.0], [24.0, 945.0], [24.1, 949.0], [24.2, 949.0], [24.3, 951.0], [24.4, 954.0], [24.5, 955.0], [24.6, 955.0], [24.7, 957.0], [24.8, 959.0], [24.9, 965.0], [25.0, 965.0], [25.1, 965.0], [25.2, 966.0], [25.3, 966.0], [25.4, 967.0], [25.5, 968.0], [25.6, 968.0], [25.7, 968.0], [25.8, 969.0], [25.9, 971.0], [26.0, 971.0], [26.1, 971.0], [26.2, 981.0], [26.3, 982.0], [26.4, 984.0], [26.5, 984.0], [26.6, 984.0], [26.7, 987.0], [26.8, 987.0], [26.9, 988.0], [27.0, 988.0], [27.1, 989.0], [27.2, 989.0], [27.3, 989.0], [27.4, 989.0], [27.5, 991.0], [27.6, 991.0], [27.7, 991.0], [27.8, 991.0], [27.9, 991.0], [28.0, 991.0], [28.1, 993.0], [28.2, 1000.0], [28.3, 1001.0], [28.4, 1001.0], [28.5, 1001.0], [28.6, 1001.0], [28.7, 1001.0], [28.8, 1002.0], [28.9, 1005.0], [29.0, 1012.0], [29.1, 1012.0], [29.2, 1013.0], [29.3, 1016.0], [29.4, 1017.0], [29.5, 1017.0], [29.6, 1018.0], [29.7, 1022.0], [29.8, 1027.0], [29.9, 1027.0], [30.0, 1028.0], [30.1, 1029.0], [30.2, 1029.0], [30.3, 1029.0], [30.4, 1033.0], [30.5, 1033.0], [30.6, 1033.0], [30.7, 1035.0], [30.8, 1036.0], [30.9, 1037.0], [31.0, 1037.0], [31.1, 1038.0], [31.2, 1041.0], [31.3, 1041.0], [31.4, 1041.0], [31.5, 1041.0], [31.6, 1044.0], [31.7, 1044.0], [31.8, 1045.0], [31.9, 1045.0], [32.0, 1046.0], [32.1, 1046.0], [32.2, 1049.0], [32.3, 1058.0], [32.4, 1059.0], [32.5, 1059.0], [32.6, 1060.0], [32.7, 1060.0], [32.8, 1062.0], [32.9, 1062.0], [33.0, 1063.0], [33.1, 1070.0], [33.2, 1070.0], [33.3, 1070.0], [33.4, 1072.0], [33.5, 1072.0], [33.6, 1072.0], [33.7, 1073.0], [33.8, 1075.0], [33.9, 1076.0], [34.0, 1076.0], [34.1, 1079.0], [34.2, 1084.0], [34.3, 1086.0], [34.4, 1086.0], [34.5, 1087.0], [34.6, 1087.0], [34.7, 1088.0], [34.8, 1088.0], [34.9, 1092.0], [35.0, 1092.0], [35.1, 1092.0], [35.2, 1092.0], [35.3, 1095.0], [35.4, 1095.0], [35.5, 1095.0], [35.6, 1097.0], [35.7, 1097.0], [35.8, 1102.0], [35.9, 1102.0], [36.0, 1104.0], [36.1, 1107.0], [36.2, 1110.0], [36.3, 1110.0], [36.4, 1110.0], [36.5, 1110.0], [36.6, 1110.0], [36.7, 1110.0], [36.8, 1117.0], [36.9, 1117.0], [37.0, 1117.0], [37.1, 1118.0], [37.2, 1119.0], [37.3, 1120.0], [37.4, 1120.0], [37.5, 1126.0], [37.6, 1127.0], [37.7, 1128.0], [37.8, 1128.0], [37.9, 1131.0], [38.0, 1131.0], [38.1, 1131.0], [38.2, 1131.0], [38.3, 1133.0], [38.4, 1134.0], [38.5, 1134.0], [38.6, 1139.0], [38.7, 1148.0], [38.8, 1148.0], [38.9, 1148.0], [39.0, 1149.0], [39.1, 1154.0], [39.2, 1157.0], [39.3, 1157.0], [39.4, 1159.0], [39.5, 1160.0], [39.6, 1160.0], [39.7, 1160.0], [39.8, 1160.0], [39.9, 1160.0], [40.0, 1163.0], [40.1, 1163.0], [40.2, 1164.0], [40.3, 1165.0], [40.4, 1165.0], [40.5, 1175.0], [40.6, 1178.0], [40.7, 1180.0], [40.8, 1180.0], [40.9, 1181.0], [41.0, 1184.0], [41.1, 1184.0], [41.2, 1184.0], [41.3, 1186.0], [41.4, 1187.0], [41.5, 1193.0], [41.6, 1193.0], [41.7, 1193.0], [41.8, 1193.0], [41.9, 1193.0], [42.0, 1193.0], [42.1, 1197.0], [42.2, 1197.0], [42.3, 1197.0], [42.4, 1199.0], [42.5, 1202.0], [42.6, 1204.0], [42.7, 1204.0], [42.8, 1205.0], [42.9, 1208.0], [43.0, 1208.0], [43.1, 1208.0], [43.2, 1208.0], [43.3, 1209.0], [43.4, 1209.0], [43.5, 1210.0], [43.6, 1210.0], [43.7, 1211.0], [43.8, 1211.0], [43.9, 1211.0], [44.0, 1212.0], [44.1, 1217.0], [44.2, 1217.0], [44.3, 1218.0], [44.4, 1218.0], [44.5, 1221.0], [44.6, 1221.0], [44.7, 1225.0], [44.8, 1226.0], [44.9, 1228.0], [45.0, 1228.0], [45.1, 1230.0], [45.2, 1230.0], [45.3, 1230.0], [45.4, 1235.0], [45.5, 1236.0], [45.6, 1236.0], [45.7, 1236.0], [45.8, 1237.0], [45.9, 1237.0], [46.0, 1237.0], [46.1, 1237.0], [46.2, 1239.0], [46.3, 1243.0], [46.4, 1244.0], [46.5, 1244.0], [46.6, 1244.0], [46.7, 1246.0], [46.8, 1246.0], [46.9, 1248.0], [47.0, 1248.0], [47.1, 1249.0], [47.2, 1249.0], [47.3, 1249.0], [47.4, 1250.0], [47.5, 1255.0], [47.6, 1255.0], [47.7, 1256.0], [47.8, 1256.0], [47.9, 1258.0], [48.0, 1258.0], [48.1, 1258.0], [48.2, 1259.0], [48.3, 1261.0], [48.4, 1261.0], [48.5, 1267.0], [48.6, 1268.0], [48.7, 1268.0], [48.8, 1269.0], [48.9, 1269.0], [49.0, 1270.0], [49.1, 1270.0], [49.2, 1273.0], [49.3, 1277.0], [49.4, 1278.0], [49.5, 1278.0], [49.6, 1278.0], [49.7, 1279.0], [49.8, 1280.0], [49.9, 1280.0], [50.0, 1281.0], [50.1, 1282.0], [50.2, 1282.0], [50.3, 1284.0], [50.4, 1285.0], [50.5, 1286.0], [50.6, 1286.0], [50.7, 1287.0], [50.8, 1290.0], [50.9, 1292.0], [51.0, 1292.0], [51.1, 1293.0], [51.2, 1294.0], [51.3, 1299.0], [51.4, 1299.0], [51.5, 1300.0], [51.6, 1306.0], [51.7, 1306.0], [51.8, 1308.0], [51.9, 1310.0], [52.0, 1312.0], [52.1, 1312.0], [52.2, 1316.0], [52.3, 1317.0], [52.4, 1317.0], [52.5, 1317.0], [52.6, 1317.0], [52.7, 1319.0], [52.8, 1321.0], [52.9, 1321.0], [53.0, 1322.0], [53.1, 1324.0], [53.2, 1324.0], [53.3, 1324.0], [53.4, 1325.0], [53.5, 1326.0], [53.6, 1326.0], [53.7, 1327.0], [53.8, 1330.0], [53.9, 1330.0], [54.0, 1330.0], [54.1, 1332.0], [54.2, 1333.0], [54.3, 1333.0], [54.4, 1333.0], [54.5, 1334.0], [54.6, 1337.0], [54.7, 1339.0], [54.8, 1339.0], [54.9, 1340.0], [55.0, 1341.0], [55.1, 1341.0], [55.2, 1343.0], [55.3, 1344.0], [55.4, 1345.0], [55.5, 1345.0], [55.6, 1347.0], [55.7, 1348.0], [55.8, 1351.0], [55.9, 1351.0], [56.0, 1351.0], [56.1, 1355.0], [56.2, 1356.0], [56.3, 1356.0], [56.4, 1360.0], [56.5, 1362.0], [56.6, 1362.0], [56.7, 1362.0], [56.8, 1363.0], [56.9, 1365.0], [57.0, 1365.0], [57.1, 1368.0], [57.2, 1369.0], [57.3, 1371.0], [57.4, 1371.0], [57.5, 1374.0], [57.6, 1376.0], [57.7, 1376.0], [57.8, 1376.0], [57.9, 1381.0], [58.0, 1381.0], [58.1, 1385.0], [58.2, 1385.0], [58.3, 1391.0], [58.4, 1391.0], [58.5, 1391.0], [58.6, 1391.0], [58.7, 1394.0], [58.8, 1399.0], [58.9, 1399.0], [59.0, 1400.0], [59.1, 1400.0], [59.2, 1400.0], [59.3, 1400.0], [59.4, 1400.0], [59.5, 1401.0], [59.6, 1406.0], [59.7, 1406.0], [59.8, 1406.0], [59.9, 1407.0], [60.0, 1408.0], [60.1, 1408.0], [60.2, 1415.0], [60.3, 1415.0], [60.4, 1415.0], [60.5, 1417.0], [60.6, 1418.0], [60.7, 1418.0], [60.8, 1418.0], [60.9, 1421.0], [61.0, 1424.0], [61.1, 1425.0], [61.2, 1425.0], [61.3, 1428.0], [61.4, 1430.0], [61.5, 1431.0], [61.6, 1431.0], [61.7, 1432.0], [61.8, 1433.0], [61.9, 1433.0], [62.0, 1434.0], [62.1, 1434.0], [62.2, 1435.0], [62.3, 1435.0], [62.4, 1436.0], [62.5, 1438.0], [62.6, 1439.0], [62.7, 1439.0], [62.8, 1439.0], [62.9, 1439.0], [63.0, 1442.0], [63.1, 1442.0], [63.2, 1443.0], [63.3, 1443.0], [63.4, 1443.0], [63.5, 1445.0], [63.6, 1445.0], [63.7, 1447.0], [63.8, 1447.0], [63.9, 1447.0], [64.0, 1448.0], [64.1, 1450.0], [64.2, 1450.0], [64.3, 1452.0], [64.4, 1453.0], [64.5, 1455.0], [64.6, 1455.0], [64.7, 1458.0], [64.8, 1458.0], [64.9, 1461.0], [65.0, 1461.0], [65.1, 1463.0], [65.2, 1466.0], [65.3, 1466.0], [65.4, 1471.0], [65.5, 1472.0], [65.6, 1475.0], [65.7, 1475.0], [65.8, 1477.0], [65.9, 1481.0], [66.0, 1481.0], [66.1, 1481.0], [66.2, 1483.0], [66.3, 1485.0], [66.4, 1488.0], [66.5, 1488.0], [66.6, 1489.0], [66.7, 1489.0], [66.8, 1489.0], [66.9, 1492.0], [67.0, 1493.0], [67.1, 1494.0], [67.2, 1494.0], [67.3, 1497.0], [67.4, 1498.0], [67.5, 1502.0], [67.6, 1502.0], [67.7, 1503.0], [67.8, 1503.0], [67.9, 1503.0], [68.0, 1503.0], [68.1, 1504.0], [68.2, 1504.0], [68.3, 1507.0], [68.4, 1507.0], [68.5, 1508.0], [68.6, 1511.0], [68.7, 1511.0], [68.8, 1511.0], [68.9, 1513.0], [69.0, 1514.0], [69.1, 1514.0], [69.2, 1517.0], [69.3, 1519.0], [69.4, 1520.0], [69.5, 1520.0], [69.6, 1521.0], [69.7, 1527.0], [69.8, 1527.0], [69.9, 1527.0], [70.0, 1528.0], [70.1, 1528.0], [70.2, 1528.0], [70.3, 1529.0], [70.4, 1534.0], [70.5, 1538.0], [70.6, 1538.0], [70.7, 1538.0], [70.8, 1538.0], [70.9, 1541.0], [71.0, 1541.0], [71.1, 1542.0], [71.2, 1548.0], [71.3, 1548.0], [71.4, 1548.0], [71.5, 1553.0], [71.6, 1553.0], [71.7, 1553.0], [71.8, 1556.0], [71.9, 1559.0], [72.0, 1560.0], [72.1, 1560.0], [72.2, 1561.0], [72.3, 1561.0], [72.4, 1564.0], [72.5, 1564.0], [72.6, 1564.0], [72.7, 1565.0], [72.8, 1567.0], [72.9, 1567.0], [73.0, 1569.0], [73.1, 1571.0], [73.2, 1576.0], [73.3, 1576.0], [73.4, 1578.0], [73.5, 1579.0], [73.6, 1579.0], [73.7, 1580.0], [73.8, 1581.0], [73.9, 1592.0], [74.0, 1592.0], [74.1, 1592.0], [74.2, 1592.0], [74.3, 1594.0], [74.4, 1594.0], [74.5, 1595.0], [74.6, 1596.0], [74.7, 1597.0], [74.8, 1597.0], [74.9, 1600.0], [75.0, 1600.0], [75.1, 1600.0], [75.2, 1605.0], [75.3, 1608.0], [75.4, 1609.0], [75.5, 1609.0], [75.6, 1609.0], [75.7, 1612.0], [75.8, 1612.0], [75.9, 1612.0], [76.0, 1614.0], [76.1, 1619.0], [76.2, 1619.0], [76.3, 1619.0], [76.4, 1624.0], [76.5, 1624.0], [76.6, 1626.0], [76.7, 1626.0], [76.8, 1627.0], [76.9, 1628.0], [77.0, 1628.0], [77.1, 1632.0], [77.2, 1637.0], [77.3, 1639.0], [77.4, 1639.0], [77.5, 1643.0], [77.6, 1654.0], [77.7, 1657.0], [77.8, 1657.0], [77.9, 1662.0], [78.0, 1666.0], [78.1, 1669.0], [78.2, 1669.0], [78.3, 1671.0], [78.4, 1671.0], [78.5, 1671.0], [78.6, 1674.0], [78.7, 1675.0], [78.8, 1676.0], [78.9, 1676.0], [79.0, 1679.0], [79.1, 1683.0], [79.2, 1684.0], [79.3, 1684.0], [79.4, 1685.0], [79.5, 1693.0], [79.6, 1695.0], [79.7, 1695.0], [79.8, 1698.0], [79.9, 1699.0], [80.0, 1700.0], [80.1, 1700.0], [80.2, 1703.0], [80.3, 1705.0], [80.4, 1705.0], [80.5, 1708.0], [80.6, 1709.0], [80.7, 1710.0], [80.8, 1710.0], [80.9, 1711.0], [81.0, 1713.0], [81.1, 1718.0], [81.2, 1718.0], [81.3, 1727.0], [81.4, 1729.0], [81.5, 1733.0], [81.6, 1733.0], [81.7, 1734.0], [81.8, 1738.0], [81.9, 1738.0], [82.0, 1739.0], [82.1, 1740.0], [82.2, 1740.0], [82.3, 1740.0], [82.4, 1744.0], [82.5, 1747.0], [82.6, 1751.0], [82.7, 1751.0], [82.8, 1751.0], [82.9, 1752.0], [83.0, 1753.0], [83.1, 1753.0], [83.2, 1754.0], [83.3, 1757.0], [83.4, 1757.0], [83.5, 1759.0], [83.6, 1762.0], [83.7, 1766.0], [83.8, 1766.0], [83.9, 1773.0], [84.0, 1779.0], [84.1, 1780.0], [84.2, 1780.0], [84.3, 1786.0], [84.4, 1787.0], [84.5, 1788.0], [84.6, 1788.0], [84.7, 1790.0], [84.8, 1792.0], [84.9, 1795.0], [85.0, 1795.0], [85.1, 1799.0], [85.2, 1803.0], [85.3, 1803.0], [85.4, 1812.0], [85.5, 1812.0], [85.6, 1813.0], [85.7, 1813.0], [85.8, 1816.0], [85.9, 1836.0], [86.0, 1838.0], [86.1, 1838.0], [86.2, 1843.0], [86.3, 1845.0], [86.4, 1848.0], [86.5, 1848.0], [86.6, 1856.0], [86.7, 1857.0], [86.8, 1857.0], [86.9, 1860.0], [87.0, 1863.0], [87.1, 1865.0], [87.2, 1865.0], [87.3, 1866.0], [87.4, 1869.0], [87.5, 1871.0], [87.6, 1871.0], [87.7, 1871.0], [87.8, 1872.0], [87.9, 1874.0], [88.0, 1874.0], [88.1, 1876.0], [88.2, 1877.0], [88.3, 1877.0], [88.4, 1877.0], [88.5, 1878.0], [88.6, 1879.0], [88.7, 1879.0], [88.8, 1881.0], [88.9, 1885.0], [89.0, 1902.0], [89.1, 1902.0], [89.2, 1902.0], [89.3, 1905.0], [89.4, 1921.0], [89.5, 1921.0], [89.6, 1929.0], [89.7, 1931.0], [89.8, 1935.0], [89.9, 1935.0], [90.0, 1936.0], [90.1, 1947.0], [90.2, 1947.0], [90.3, 1950.0], [90.4, 1951.0], [90.5, 1958.0], [90.6, 1958.0], [90.7, 1966.0], [90.8, 1966.0], [90.9, 1973.0], [91.0, 1973.0], [91.1, 1976.0], [91.2, 1979.0], [91.3, 1980.0], [91.4, 1980.0], [91.5, 1988.0], [91.6, 1999.0], [91.7, 1999.0], [91.8, 2010.0], [91.9, 2013.0], [92.0, 2028.0], [92.1, 2028.0], [92.2, 2031.0], [92.3, 2036.0], [92.4, 2041.0], [92.5, 2041.0], [92.6, 2044.0], [92.7, 2047.0], [92.8, 2055.0], [92.9, 2055.0], [93.0, 2062.0], [93.1, 2068.0], [93.2, 2080.0], [93.3, 2080.0], [93.4, 2094.0], [93.5, 2100.0], [93.6, 2100.0], [93.7, 2100.0], [93.8, 2107.0], [93.9, 2114.0], [94.0, 2114.0], [94.1, 2118.0], [94.2, 2123.0], [94.3, 2135.0], [94.4, 2135.0], [94.5, 2136.0], [94.6, 2149.0], [94.7, 2157.0], [94.8, 2157.0], [94.9, 2171.0], [95.0, 2181.0], [95.1, 2181.0], [95.2, 2182.0], [95.3, 2200.0], [95.4, 2201.0], [95.5, 2201.0], [95.6, 2204.0], [95.7, 2230.0], [95.8, 2244.0], [95.9, 2244.0], [96.0, 2247.0], [96.1, 2254.0], [96.2, 2296.0], [96.3, 2296.0], [96.4, 2330.0], [96.5, 2336.0], [96.6, 2346.0], [96.7, 2346.0], [96.8, 2347.0], [96.9, 2375.0], [97.0, 2375.0], [97.1, 2376.0], [97.2, 2407.0], [97.3, 2532.0], [97.4, 2532.0], [97.5, 2625.0], [97.6, 2689.0], [97.7, 2909.0], [97.8, 2909.0], [97.9, 2971.0], [98.0, 2972.0], [98.1, 3051.0], [98.2, 3051.0], [98.3, 3198.0], [98.4, 3256.0], [98.5, 3256.0], [98.6, 3308.0], [98.7, 3328.0], [98.8, 3421.0], [98.9, 3421.0], [99.0, 3459.0], [99.1, 3500.0], [99.2, 3552.0], [99.3, 3552.0], [99.4, 3656.0], [99.5, 3785.0], [99.6, 3922.0], [99.7, 3922.0], [99.8, 4044.0], [99.9, 4069.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 400.0, "maxY": 66.0, "series": [{"data": [[600.0, 45.0], [700.0, 53.0], [800.0, 26.0], [900.0, 54.0], [1000.0, 56.0], [1100.0, 49.0], [1200.0, 66.0], [1300.0, 55.0], [1400.0, 63.0], [1500.0, 54.0], [1600.0, 38.0], [1700.0, 38.0], [1800.0, 28.0], [1900.0, 20.0], [2000.0, 13.0], [2100.0, 13.0], [2300.0, 6.0], [2200.0, 8.0], [2400.0, 1.0], [2500.0, 1.0], [2600.0, 2.0], [2900.0, 3.0], [3000.0, 1.0], [3100.0, 1.0], [3200.0, 1.0], [3300.0, 2.0], [3400.0, 2.0], [3500.0, 2.0], [3600.0, 1.0], [3700.0, 1.0], [3900.0, 1.0], [4000.0, 2.0], [400.0, 17.0], [500.0, 12.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 4000.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 17.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 479.0, "series": [{"data": [[0.0, 17.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 479.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 239.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 10.754716981132077, "minX": 1.60423014E12, "maxY": 12.0, "series": [{"data": [[1.6042302E12, 12.0], [1.60423014E12, 12.0], [1.60423026E12, 10.754716981132077]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60423026E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 661.0, "minX": 1.0, "maxY": 1432.0, "series": [{"data": [[8.0, 739.0], [4.0, 769.0], [2.0, 1148.0], [1.0, 1406.0], [9.0, 678.0], [10.0, 690.0], [5.0, 709.0], [11.0, 661.0], [12.0, 1337.262430939225], [6.0, 735.0], [3.0, 1432.0], [7.0, 671.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[11.910204081632651, 1330.3619047619034]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 12.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 387.56666666666666, "minX": 1.60423014E12, "maxY": 1220249.4833333334, "series": [{"data": [[1.6042302E12, 1220249.4833333334], [1.60423014E12, 443807.38333333336], [1.60423026E12, 171753.28333333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6042302E12, 4173.6], [1.60423014E12, 961.8666666666667], [1.60423026E12, 387.56666666666666]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60423026E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 1198.2264150943397, "minX": 1.60423014E12, "maxY": 1548.5118110236222, "series": [{"data": [[1.6042302E12, 1293.061261261261], [1.60423014E12, 1548.5118110236222], [1.60423026E12, 1198.2264150943397]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60423026E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 1196.358490566038, "minX": 1.60423014E12, "maxY": 1547.2047244094483, "series": [{"data": [[1.6042302E12, 1291.902702702703], [1.60423014E12, 1547.2047244094483], [1.60423026E12, 1196.358490566038]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60423026E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.60423014E12, "maxY": 0.9370078740157488, "series": [{"data": [[1.6042302E12, 0.02882882882882883], [1.60423014E12, 0.9370078740157488], [1.60423026E12, 0.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60423026E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 407.0, "minX": 1.60423014E12, "maxY": 4069.0, "series": [{"data": [[1.6042302E12, 4069.0], [1.60423014E12, 4044.0], [1.60423026E12, 2375.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6042302E12, 426.0079997348785], [1.60423014E12, 419.0], [1.60423026E12, 559.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6042302E12, 427.00880010604857], [1.60423014E12, 419.0], [1.60423026E12, 559.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6042302E12, 426.5639998674393], [1.60423014E12, 419.0], [1.60423026E12, 559.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.6042302E12, 407.0], [1.60423014E12, 419.0], [1.60423026E12, 559.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6042302E12, 1287.0], [1.60423014E12, 1340.0], [1.60423026E12, 1058.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60423026E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 694.0, "minX": 2.0, "maxY": 3256.0, "series": [{"data": [[8.0, 1449.0], [2.0, 1277.0], [9.0, 1363.5], [10.0, 1099.5], [11.0, 1018.0], [3.0, 3256.0], [12.0, 1327.5], [13.0, 921.5], [14.0, 694.0], [15.0, 798.0], [16.0, 731.5], [17.0, 721.0], [6.0, 1517.0], [7.0, 1459.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 17.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 693.5, "minX": 2.0, "maxY": 3254.0, "series": [{"data": [[8.0, 1448.5], [2.0, 1276.5], [9.0, 1362.5], [10.0, 1099.0], [11.0, 1017.0], [3.0, 3254.0], [12.0, 1326.0], [13.0, 920.5], [14.0, 693.5], [15.0, 798.0], [16.0, 731.0], [17.0, 721.0], [6.0, 1515.5], [7.0, 1457.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 17.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.6833333333333333, "minX": 1.60423014E12, "maxY": 9.25, "series": [{"data": [[1.6042302E12, 9.25], [1.60423014E12, 2.316666666666667], [1.60423026E12, 0.6833333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60423026E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.8833333333333333, "minX": 1.60423014E12, "maxY": 9.25, "series": [{"data": [[1.6042302E12, 9.25], [1.60423014E12, 2.1166666666666667], [1.60423026E12, 0.8833333333333333]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60423026E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.8833333333333333, "minX": 1.60423014E12, "maxY": 9.25, "series": [{"data": [[1.6042302E12, 9.25], [1.60423014E12, 2.1166666666666667], [1.60423026E12, 0.8833333333333333]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60423026E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.8833333333333333, "minX": 1.60423014E12, "maxY": 9.25, "series": [{"data": [[1.6042302E12, 9.25], [1.60423014E12, 2.1166666666666667], [1.60423026E12, 0.8833333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60423026E12, "title": "Total Transactions Per Second"}},
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

