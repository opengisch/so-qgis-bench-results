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
        data: {"result": {"minY": 347.0, "minX": 0.0, "maxY": 4047.0, "series": [{"data": [[0.0, 347.0], [0.1, 347.0], [0.2, 369.0], [0.3, 373.0], [0.4, 373.0], [0.5, 383.0], [0.6, 396.0], [0.7, 405.0], [0.8, 405.0], [0.9, 413.0], [1.0, 414.0], [1.1, 419.0], [1.2, 419.0], [1.3, 428.0], [1.4, 428.0], [1.5, 432.0], [1.6, 432.0], [1.7, 438.0], [1.8, 445.0], [1.9, 445.0], [2.0, 457.0], [2.1, 488.0], [2.2, 495.0], [2.3, 495.0], [2.4, 498.0], [2.5, 500.0], [2.6, 505.0], [2.7, 505.0], [2.8, 505.0], [2.9, 513.0], [3.0, 515.0], [3.1, 515.0], [3.2, 526.0], [3.3, 530.0], [3.4, 530.0], [3.5, 551.0], [3.6, 553.0], [3.7, 571.0], [3.8, 571.0], [3.9, 576.0], [4.0, 581.0], [4.1, 583.0], [4.2, 583.0], [4.3, 583.0], [4.4, 585.0], [4.5, 589.0], [4.6, 589.0], [4.7, 596.0], [4.8, 603.0], [4.9, 605.0], [5.0, 605.0], [5.1, 606.0], [5.2, 611.0], [5.3, 611.0], [5.4, 614.0], [5.5, 615.0], [5.6, 620.0], [5.7, 620.0], [5.8, 626.0], [5.9, 628.0], [6.0, 630.0], [6.1, 630.0], [6.2, 634.0], [6.3, 635.0], [6.4, 635.0], [6.5, 635.0], [6.6, 637.0], [6.7, 639.0], [6.8, 639.0], [6.9, 642.0], [7.0, 647.0], [7.1, 649.0], [7.2, 649.0], [7.3, 650.0], [7.4, 650.0], [7.5, 650.0], [7.6, 650.0], [7.7, 651.0], [7.8, 653.0], [7.9, 656.0], [8.0, 656.0], [8.1, 657.0], [8.2, 659.0], [8.3, 659.0], [8.4, 659.0], [8.5, 659.0], [8.6, 661.0], [8.7, 661.0], [8.8, 662.0], [8.9, 662.0], [9.0, 663.0], [9.1, 663.0], [9.2, 664.0], [9.3, 668.0], [9.4, 670.0], [9.5, 670.0], [9.6, 670.0], [9.7, 671.0], [9.8, 673.0], [9.9, 673.0], [10.0, 674.0], [10.1, 676.0], [10.2, 676.0], [10.3, 679.0], [10.4, 680.0], [10.5, 686.0], [10.6, 686.0], [10.7, 687.0], [10.8, 688.0], [10.9, 691.0], [11.0, 691.0], [11.1, 691.0], [11.2, 691.0], [11.3, 694.0], [11.4, 694.0], [11.5, 694.0], [11.6, 695.0], [11.7, 695.0], [11.8, 696.0], [11.9, 696.0], [12.0, 697.0], [12.1, 697.0], [12.2, 697.0], [12.3, 698.0], [12.4, 698.0], [12.5, 698.0], [12.6, 701.0], [12.7, 704.0], [12.8, 704.0], [12.9, 704.0], [13.0, 704.0], [13.1, 705.0], [13.2, 705.0], [13.3, 705.0], [13.4, 705.0], [13.5, 708.0], [13.6, 708.0], [13.7, 708.0], [13.8, 710.0], [13.9, 710.0], [14.0, 710.0], [14.1, 713.0], [14.2, 714.0], [14.3, 718.0], [14.4, 718.0], [14.5, 720.0], [14.6, 723.0], [14.7, 723.0], [14.8, 723.0], [14.9, 727.0], [15.0, 731.0], [15.1, 731.0], [15.2, 731.0], [15.3, 731.0], [15.4, 732.0], [15.5, 732.0], [15.6, 732.0], [15.7, 732.0], [15.8, 739.0], [15.9, 739.0], [16.0, 739.0], [16.1, 740.0], [16.2, 744.0], [16.3, 744.0], [16.4, 745.0], [16.5, 747.0], [16.6, 747.0], [16.7, 747.0], [16.8, 751.0], [16.9, 758.0], [17.0, 758.0], [17.1, 759.0], [17.2, 760.0], [17.3, 760.0], [17.4, 760.0], [17.5, 760.0], [17.6, 765.0], [17.7, 765.0], [17.8, 765.0], [17.9, 770.0], [18.0, 770.0], [18.1, 774.0], [18.2, 774.0], [18.3, 780.0], [18.4, 780.0], [18.5, 780.0], [18.6, 782.0], [18.7, 782.0], [18.8, 783.0], [18.9, 783.0], [19.0, 788.0], [19.1, 788.0], [19.2, 789.0], [19.3, 789.0], [19.4, 790.0], [19.5, 792.0], [19.6, 793.0], [19.7, 793.0], [19.8, 795.0], [19.9, 799.0], [20.0, 800.0], [20.1, 800.0], [20.2, 804.0], [20.3, 809.0], [20.4, 809.0], [20.5, 812.0], [20.6, 815.0], [20.7, 815.0], [20.8, 815.0], [20.9, 816.0], [21.0, 817.0], [21.1, 819.0], [21.2, 819.0], [21.3, 826.0], [21.4, 831.0], [21.5, 832.0], [21.6, 832.0], [21.7, 835.0], [21.8, 837.0], [21.9, 837.0], [22.0, 840.0], [22.1, 843.0], [22.2, 856.0], [22.3, 856.0], [22.4, 856.0], [22.5, 864.0], [22.6, 875.0], [22.7, 875.0], [22.8, 882.0], [22.9, 888.0], [23.0, 888.0], [23.1, 888.0], [23.2, 889.0], [23.3, 890.0], [23.4, 890.0], [23.5, 892.0], [23.6, 894.0], [23.7, 898.0], [23.8, 898.0], [23.9, 900.0], [24.0, 903.0], [24.1, 904.0], [24.2, 904.0], [24.3, 906.0], [24.4, 906.0], [24.5, 910.0], [24.6, 910.0], [24.7, 911.0], [24.8, 912.0], [24.9, 913.0], [25.0, 913.0], [25.1, 913.0], [25.2, 913.0], [25.3, 913.0], [25.4, 913.0], [25.5, 914.0], [25.6, 916.0], [25.7, 916.0], [25.8, 918.0], [25.9, 923.0], [26.0, 924.0], [26.1, 924.0], [26.2, 925.0], [26.3, 928.0], [26.4, 928.0], [26.5, 928.0], [26.6, 930.0], [26.7, 931.0], [26.8, 931.0], [26.9, 932.0], [27.0, 933.0], [27.1, 933.0], [27.2, 933.0], [27.3, 933.0], [27.4, 934.0], [27.5, 937.0], [27.6, 937.0], [27.7, 942.0], [27.8, 949.0], [27.9, 949.0], [28.0, 949.0], [28.1, 951.0], [28.2, 952.0], [28.3, 954.0], [28.4, 954.0], [28.5, 957.0], [28.6, 958.0], [28.7, 958.0], [28.8, 961.0], [28.9, 964.0], [29.0, 964.0], [29.1, 964.0], [29.2, 965.0], [29.3, 968.0], [29.4, 969.0], [29.5, 969.0], [29.6, 976.0], [29.7, 979.0], [29.8, 981.0], [29.9, 981.0], [30.0, 989.0], [30.1, 989.0], [30.2, 989.0], [30.3, 996.0], [30.4, 999.0], [30.5, 1001.0], [30.6, 1001.0], [30.7, 1001.0], [30.8, 1005.0], [30.9, 1007.0], [31.0, 1007.0], [31.1, 1009.0], [31.2, 1009.0], [31.3, 1011.0], [31.4, 1011.0], [31.5, 1013.0], [31.6, 1013.0], [31.7, 1013.0], [31.8, 1016.0], [31.9, 1018.0], [32.0, 1018.0], [32.1, 1018.0], [32.2, 1019.0], [32.3, 1022.0], [32.4, 1024.0], [32.5, 1024.0], [32.6, 1035.0], [32.7, 1035.0], [32.8, 1036.0], [32.9, 1036.0], [33.0, 1036.0], [33.1, 1038.0], [33.2, 1041.0], [33.3, 1041.0], [33.4, 1051.0], [33.5, 1052.0], [33.6, 1052.0], [33.7, 1053.0], [33.8, 1054.0], [33.9, 1055.0], [34.0, 1055.0], [34.1, 1058.0], [34.2, 1058.0], [34.3, 1059.0], [34.4, 1059.0], [34.5, 1059.0], [34.6, 1059.0], [34.7, 1060.0], [34.8, 1060.0], [34.9, 1063.0], [35.0, 1064.0], [35.1, 1064.0], [35.2, 1066.0], [35.3, 1066.0], [35.4, 1071.0], [35.5, 1071.0], [35.6, 1072.0], [35.7, 1073.0], [35.8, 1074.0], [35.9, 1074.0], [36.0, 1075.0], [36.1, 1075.0], [36.2, 1075.0], [36.3, 1075.0], [36.4, 1076.0], [36.5, 1078.0], [36.6, 1081.0], [36.7, 1081.0], [36.8, 1084.0], [36.9, 1084.0], [37.0, 1084.0], [37.1, 1088.0], [37.2, 1089.0], [37.3, 1089.0], [37.4, 1089.0], [37.5, 1091.0], [37.6, 1095.0], [37.7, 1098.0], [37.8, 1098.0], [37.9, 1099.0], [38.0, 1099.0], [38.1, 1100.0], [38.2, 1100.0], [38.3, 1101.0], [38.4, 1101.0], [38.5, 1101.0], [38.6, 1104.0], [38.7, 1104.0], [38.8, 1105.0], [38.9, 1105.0], [39.0, 1106.0], [39.1, 1107.0], [39.2, 1111.0], [39.3, 1111.0], [39.4, 1113.0], [39.5, 1113.0], [39.6, 1117.0], [39.7, 1117.0], [39.8, 1119.0], [39.9, 1122.0], [40.0, 1126.0], [40.1, 1126.0], [40.2, 1127.0], [40.3, 1128.0], [40.4, 1128.0], [40.5, 1128.0], [40.6, 1130.0], [40.7, 1132.0], [40.8, 1132.0], [40.9, 1135.0], [41.0, 1135.0], [41.1, 1136.0], [41.2, 1136.0], [41.3, 1137.0], [41.4, 1139.0], [41.5, 1144.0], [41.6, 1144.0], [41.7, 1145.0], [41.8, 1146.0], [41.9, 1146.0], [42.0, 1148.0], [42.1, 1148.0], [42.2, 1150.0], [42.3, 1150.0], [42.4, 1153.0], [42.5, 1154.0], [42.6, 1155.0], [42.7, 1155.0], [42.8, 1155.0], [42.9, 1156.0], [43.0, 1156.0], [43.1, 1156.0], [43.2, 1157.0], [43.3, 1157.0], [43.4, 1157.0], [43.5, 1162.0], [43.6, 1163.0], [43.7, 1164.0], [43.8, 1164.0], [43.9, 1165.0], [44.0, 1167.0], [44.1, 1167.0], [44.2, 1167.0], [44.3, 1168.0], [44.4, 1170.0], [44.5, 1170.0], [44.6, 1170.0], [44.7, 1171.0], [44.8, 1171.0], [44.9, 1174.0], [45.0, 1174.0], [45.1, 1174.0], [45.2, 1179.0], [45.3, 1179.0], [45.4, 1180.0], [45.5, 1180.0], [45.6, 1184.0], [45.7, 1184.0], [45.8, 1184.0], [45.9, 1184.0], [46.0, 1187.0], [46.1, 1187.0], [46.2, 1189.0], [46.3, 1192.0], [46.4, 1194.0], [46.5, 1194.0], [46.6, 1194.0], [46.7, 1195.0], [46.8, 1195.0], [46.9, 1196.0], [47.0, 1196.0], [47.1, 1197.0], [47.2, 1197.0], [47.3, 1198.0], [47.4, 1199.0], [47.5, 1201.0], [47.6, 1201.0], [47.7, 1204.0], [47.8, 1207.0], [47.9, 1210.0], [48.0, 1210.0], [48.1, 1216.0], [48.2, 1218.0], [48.3, 1220.0], [48.4, 1220.0], [48.5, 1223.0], [48.6, 1224.0], [48.7, 1224.0], [48.8, 1228.0], [48.9, 1229.0], [49.0, 1232.0], [49.1, 1232.0], [49.2, 1238.0], [49.3, 1240.0], [49.4, 1243.0], [49.5, 1243.0], [49.6, 1244.0], [49.7, 1245.0], [49.8, 1248.0], [49.9, 1248.0], [50.0, 1248.0], [50.1, 1249.0], [50.2, 1249.0], [50.3, 1252.0], [50.4, 1252.0], [50.5, 1252.0], [50.6, 1252.0], [50.7, 1253.0], [50.8, 1253.0], [50.9, 1254.0], [51.0, 1254.0], [51.1, 1254.0], [51.2, 1255.0], [51.3, 1256.0], [51.4, 1256.0], [51.5, 1257.0], [51.6, 1258.0], [51.7, 1258.0], [51.8, 1259.0], [51.9, 1259.0], [52.0, 1265.0], [52.1, 1265.0], [52.2, 1266.0], [52.3, 1266.0], [52.4, 1272.0], [52.5, 1272.0], [52.6, 1273.0], [52.7, 1274.0], [52.8, 1276.0], [52.9, 1276.0], [53.0, 1277.0], [53.1, 1280.0], [53.2, 1280.0], [53.3, 1280.0], [53.4, 1282.0], [53.5, 1282.0], [53.6, 1282.0], [53.7, 1284.0], [53.8, 1285.0], [53.9, 1285.0], [54.0, 1285.0], [54.1, 1287.0], [54.2, 1292.0], [54.3, 1297.0], [54.4, 1297.0], [54.5, 1297.0], [54.6, 1299.0], [54.7, 1299.0], [54.8, 1299.0], [54.9, 1300.0], [55.0, 1301.0], [55.1, 1301.0], [55.2, 1304.0], [55.3, 1306.0], [55.4, 1313.0], [55.5, 1313.0], [55.6, 1314.0], [55.7, 1315.0], [55.8, 1316.0], [55.9, 1316.0], [56.0, 1317.0], [56.1, 1318.0], [56.2, 1320.0], [56.3, 1320.0], [56.4, 1322.0], [56.5, 1322.0], [56.6, 1323.0], [56.7, 1323.0], [56.8, 1324.0], [56.9, 1325.0], [57.0, 1325.0], [57.1, 1326.0], [57.2, 1329.0], [57.3, 1329.0], [57.4, 1329.0], [57.5, 1329.0], [57.6, 1331.0], [57.7, 1332.0], [57.8, 1332.0], [57.9, 1333.0], [58.0, 1340.0], [58.1, 1342.0], [58.2, 1342.0], [58.3, 1342.0], [58.4, 1343.0], [58.5, 1343.0], [58.6, 1348.0], [58.7, 1353.0], [58.8, 1353.0], [58.9, 1353.0], [59.0, 1356.0], [59.1, 1356.0], [59.2, 1357.0], [59.3, 1357.0], [59.4, 1357.0], [59.5, 1363.0], [59.6, 1368.0], [59.7, 1368.0], [59.8, 1386.0], [59.9, 1387.0], [60.0, 1392.0], [60.1, 1392.0], [60.2, 1394.0], [60.3, 1397.0], [60.4, 1397.0], [60.5, 1398.0], [60.6, 1402.0], [60.7, 1405.0], [60.8, 1405.0], [60.9, 1409.0], [61.0, 1410.0], [61.1, 1412.0], [61.2, 1412.0], [61.3, 1413.0], [61.4, 1415.0], [61.5, 1418.0], [61.6, 1418.0], [61.7, 1418.0], [61.8, 1419.0], [61.9, 1419.0], [62.0, 1425.0], [62.1, 1430.0], [62.2, 1430.0], [62.3, 1430.0], [62.4, 1431.0], [62.5, 1432.0], [62.6, 1432.0], [62.7, 1432.0], [62.8, 1434.0], [62.9, 1435.0], [63.0, 1435.0], [63.1, 1435.0], [63.2, 1436.0], [63.3, 1436.0], [63.4, 1436.0], [63.5, 1437.0], [63.6, 1442.0], [63.7, 1444.0], [63.8, 1444.0], [63.9, 1445.0], [64.0, 1445.0], [64.1, 1445.0], [64.2, 1445.0], [64.3, 1447.0], [64.4, 1447.0], [64.5, 1448.0], [64.6, 1448.0], [64.7, 1449.0], [64.8, 1450.0], [64.9, 1451.0], [65.0, 1451.0], [65.1, 1451.0], [65.2, 1451.0], [65.3, 1451.0], [65.4, 1452.0], [65.5, 1454.0], [65.6, 1456.0], [65.7, 1456.0], [65.8, 1459.0], [65.9, 1462.0], [66.0, 1465.0], [66.1, 1465.0], [66.2, 1468.0], [66.3, 1469.0], [66.4, 1469.0], [66.5, 1469.0], [66.6, 1471.0], [66.7, 1474.0], [66.8, 1474.0], [66.9, 1474.0], [67.0, 1475.0], [67.1, 1475.0], [67.2, 1475.0], [67.3, 1477.0], [67.4, 1478.0], [67.5, 1481.0], [67.6, 1481.0], [67.7, 1481.0], [67.8, 1481.0], [67.9, 1482.0], [68.0, 1482.0], [68.1, 1484.0], [68.2, 1489.0], [68.3, 1489.0], [68.4, 1489.0], [68.5, 1491.0], [68.6, 1497.0], [68.7, 1497.0], [68.8, 1498.0], [68.9, 1499.0], [69.0, 1500.0], [69.1, 1500.0], [69.2, 1502.0], [69.3, 1505.0], [69.4, 1505.0], [69.5, 1505.0], [69.6, 1506.0], [69.7, 1507.0], [69.8, 1508.0], [69.9, 1508.0], [70.0, 1510.0], [70.1, 1513.0], [70.2, 1513.0], [70.3, 1515.0], [70.4, 1519.0], [70.5, 1521.0], [70.6, 1521.0], [70.7, 1524.0], [70.8, 1526.0], [70.9, 1532.0], [71.0, 1532.0], [71.1, 1538.0], [71.2, 1538.0], [71.3, 1542.0], [71.4, 1542.0], [71.5, 1542.0], [71.6, 1544.0], [71.7, 1544.0], [71.8, 1545.0], [71.9, 1547.0], [72.0, 1548.0], [72.1, 1548.0], [72.2, 1549.0], [72.3, 1550.0], [72.4, 1551.0], [72.5, 1551.0], [72.6, 1551.0], [72.7, 1556.0], [72.8, 1561.0], [72.9, 1561.0], [73.0, 1564.0], [73.1, 1565.0], [73.2, 1568.0], [73.3, 1568.0], [73.4, 1572.0], [73.5, 1573.0], [73.6, 1573.0], [73.7, 1575.0], [73.8, 1577.0], [73.9, 1584.0], [74.0, 1584.0], [74.1, 1584.0], [74.2, 1584.0], [74.3, 1585.0], [74.4, 1585.0], [74.5, 1585.0], [74.6, 1588.0], [74.7, 1589.0], [74.8, 1589.0], [74.9, 1593.0], [75.0, 1594.0], [75.1, 1594.0], [75.2, 1597.0], [75.3, 1604.0], [75.4, 1604.0], [75.5, 1604.0], [75.6, 1605.0], [75.7, 1607.0], [75.8, 1607.0], [75.9, 1607.0], [76.0, 1609.0], [76.1, 1610.0], [76.2, 1611.0], [76.3, 1611.0], [76.4, 1612.0], [76.5, 1614.0], [76.6, 1616.0], [76.7, 1616.0], [76.8, 1616.0], [76.9, 1618.0], [77.0, 1618.0], [77.1, 1619.0], [77.2, 1621.0], [77.3, 1621.0], [77.4, 1621.0], [77.5, 1621.0], [77.6, 1623.0], [77.7, 1625.0], [77.8, 1625.0], [77.9, 1631.0], [78.0, 1641.0], [78.1, 1646.0], [78.2, 1646.0], [78.3, 1651.0], [78.4, 1653.0], [78.5, 1653.0], [78.6, 1654.0], [78.7, 1658.0], [78.8, 1670.0], [78.9, 1670.0], [79.0, 1674.0], [79.1, 1674.0], [79.2, 1676.0], [79.3, 1676.0], [79.4, 1681.0], [79.5, 1685.0], [79.6, 1689.0], [79.7, 1689.0], [79.8, 1690.0], [79.9, 1691.0], [80.0, 1692.0], [80.1, 1692.0], [80.2, 1694.0], [80.3, 1698.0], [80.4, 1698.0], [80.5, 1702.0], [80.6, 1707.0], [80.7, 1708.0], [80.8, 1708.0], [80.9, 1708.0], [81.0, 1709.0], [81.1, 1716.0], [81.2, 1716.0], [81.3, 1720.0], [81.4, 1720.0], [81.5, 1721.0], [81.6, 1721.0], [81.7, 1722.0], [81.8, 1727.0], [81.9, 1727.0], [82.0, 1731.0], [82.1, 1731.0], [82.2, 1733.0], [82.3, 1733.0], [82.4, 1736.0], [82.5, 1736.0], [82.6, 1738.0], [82.7, 1738.0], [82.8, 1739.0], [82.9, 1741.0], [83.0, 1744.0], [83.1, 1744.0], [83.2, 1751.0], [83.3, 1753.0], [83.4, 1753.0], [83.5, 1754.0], [83.6, 1755.0], [83.7, 1755.0], [83.8, 1755.0], [83.9, 1755.0], [84.0, 1758.0], [84.1, 1758.0], [84.2, 1758.0], [84.3, 1759.0], [84.4, 1765.0], [84.5, 1766.0], [84.6, 1766.0], [84.7, 1772.0], [84.8, 1776.0], [84.9, 1778.0], [85.0, 1778.0], [85.1, 1779.0], [85.2, 1784.0], [85.3, 1784.0], [85.4, 1786.0], [85.5, 1789.0], [85.6, 1790.0], [85.7, 1790.0], [85.8, 1794.0], [85.9, 1801.0], [86.0, 1805.0], [86.1, 1805.0], [86.2, 1809.0], [86.3, 1810.0], [86.4, 1811.0], [86.5, 1811.0], [86.6, 1813.0], [86.7, 1814.0], [86.8, 1814.0], [86.9, 1814.0], [87.0, 1822.0], [87.1, 1822.0], [87.2, 1822.0], [87.3, 1829.0], [87.4, 1836.0], [87.5, 1836.0], [87.6, 1836.0], [87.7, 1848.0], [87.8, 1849.0], [87.9, 1854.0], [88.0, 1854.0], [88.1, 1856.0], [88.2, 1856.0], [88.3, 1858.0], [88.4, 1858.0], [88.5, 1860.0], [88.6, 1866.0], [88.7, 1866.0], [88.8, 1866.0], [88.9, 1876.0], [89.0, 1876.0], [89.1, 1876.0], [89.2, 1877.0], [89.3, 1879.0], [89.4, 1880.0], [89.5, 1880.0], [89.6, 1882.0], [89.7, 1894.0], [89.8, 1906.0], [89.9, 1906.0], [90.0, 1918.0], [90.1, 1925.0], [90.2, 1925.0], [90.3, 1926.0], [90.4, 1927.0], [90.5, 1928.0], [90.6, 1928.0], [90.7, 1938.0], [90.8, 1952.0], [90.9, 1959.0], [91.0, 1959.0], [91.1, 1961.0], [91.2, 1961.0], [91.3, 1962.0], [91.4, 1962.0], [91.5, 1962.0], [91.6, 1967.0], [91.7, 1967.0], [91.8, 1971.0], [91.9, 1977.0], [92.0, 1985.0], [92.1, 1985.0], [92.2, 1987.0], [92.3, 1988.0], [92.4, 1997.0], [92.5, 1997.0], [92.6, 1997.0], [92.7, 2002.0], [92.8, 2029.0], [92.9, 2029.0], [93.0, 2031.0], [93.1, 2031.0], [93.2, 2042.0], [93.3, 2042.0], [93.4, 2044.0], [93.5, 2051.0], [93.6, 2051.0], [93.7, 2059.0], [93.8, 2073.0], [93.9, 2077.0], [94.0, 2077.0], [94.1, 2085.0], [94.2, 2088.0], [94.3, 2089.0], [94.4, 2089.0], [94.5, 2091.0], [94.6, 2097.0], [94.7, 2098.0], [94.8, 2098.0], [94.9, 2100.0], [95.0, 2102.0], [95.1, 2102.0], [95.2, 2112.0], [95.3, 2124.0], [95.4, 2165.0], [95.5, 2165.0], [95.6, 2205.0], [95.7, 2243.0], [95.8, 2244.0], [95.9, 2244.0], [96.0, 2284.0], [96.1, 2297.0], [96.2, 2304.0], [96.3, 2304.0], [96.4, 2326.0], [96.5, 2340.0], [96.6, 2351.0], [96.7, 2351.0], [96.8, 2394.0], [96.9, 2412.0], [97.0, 2412.0], [97.1, 2437.0], [97.2, 2467.0], [97.3, 2498.0], [97.4, 2498.0], [97.5, 2520.0], [97.6, 2612.0], [97.7, 2772.0], [97.8, 2772.0], [97.9, 2775.0], [98.0, 2782.0], [98.1, 2785.0], [98.2, 2785.0], [98.3, 2930.0], [98.4, 3022.0], [98.5, 3022.0], [98.6, 3036.0], [98.7, 3054.0], [98.8, 3164.0], [98.9, 3164.0], [99.0, 3238.0], [99.1, 3364.0], [99.2, 3467.0], [99.3, 3467.0], [99.4, 3497.0], [99.5, 3643.0], [99.6, 3756.0], [99.7, 3756.0], [99.8, 3884.0], [99.9, 4047.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 300.0, "maxY": 69.0, "series": [{"data": [[600.0, 57.0], [700.0, 55.0], [800.0, 28.0], [900.0, 49.0], [1000.0, 56.0], [1100.0, 69.0], [1200.0, 54.0], [1300.0, 42.0], [1400.0, 62.0], [1500.0, 46.0], [1600.0, 38.0], [1700.0, 40.0], [1800.0, 29.0], [1900.0, 21.0], [2000.0, 16.0], [2100.0, 5.0], [2200.0, 5.0], [2300.0, 5.0], [2400.0, 4.0], [2500.0, 1.0], [2600.0, 1.0], [2700.0, 4.0], [2900.0, 1.0], [3000.0, 3.0], [3100.0, 1.0], [3200.0, 1.0], [3300.0, 1.0], [3400.0, 2.0], [3600.0, 1.0], [3700.0, 1.0], [3800.0, 1.0], [4000.0, 1.0], [300.0, 5.0], [400.0, 13.0], [500.0, 17.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 4000.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 19.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 489.0, "series": [{"data": [[0.0, 19.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 489.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 227.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 11.867999999999999, "minX": 1.60384542E12, "maxY": 12.0, "series": [{"data": [[1.60384542E12, 12.0], [1.60384548E12, 11.867999999999999]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60384548E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 663.0, "minX": 1.0, "maxY": 1542.0, "series": [{"data": [[8.0, 663.0], [4.0, 694.0], [2.0, 1162.0], [1.0, 1058.0], [9.0, 670.0], [10.0, 691.0], [5.0, 708.0], [11.0, 1542.0], [12.0, 1301.7569060773478], [6.0, 740.0], [3.0, 1194.0], [7.0, 1156.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[11.910204081632651, 1296.2585034013605]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 12.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 1778.1, "minX": 1.60384542E12, "maxY": 1136640.1833333333, "series": [{"data": [[1.60384542E12, 699149.0333333333], [1.60384548E12, 1136640.1833333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60384542E12, 1778.1], [1.60384548E12, 3744.9333333333334]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60384548E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 1188.9599999999987, "minX": 1.60384542E12, "maxY": 1524.5531914893609, "series": [{"data": [[1.60384542E12, 1524.5531914893609], [1.60384548E12, 1188.9599999999987]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60384548E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 1187.8059999999998, "minX": 1.60384542E12, "maxY": 1523.063829787233, "series": [{"data": [[1.60384542E12, 1523.063829787233], [1.60384548E12, 1187.8059999999998]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60384548E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.042, "minX": 1.60384542E12, "maxY": 0.6340425531914894, "series": [{"data": [[1.60384542E12, 0.6340425531914894], [1.60384548E12, 0.042]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60384548E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 347.0, "minX": 1.60384542E12, "maxY": 4047.0, "series": [{"data": [[1.60384542E12, 3884.0], [1.60384548E12, 4047.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60384542E12, 377.55599611759186], [1.60384548E12, 409.07199904441836]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60384542E12, 392.21160155296326], [1.60384548E12, 412.6792003822327]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60384542E12, 385.6979980587959], [1.60384548E12, 411.07599952220914]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60384542E12, 347.0], [1.60384548E12, 373.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60384542E12, 1474.0], [1.60384548E12, 1145.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60384548E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 610.0, "minX": 1.0, "maxY": 2772.0, "series": [{"data": [[8.0, 1424.0], [9.0, 1334.5], [10.0, 1251.0], [11.0, 1547.0], [12.0, 943.0], [13.0, 834.5], [14.0, 794.0], [15.0, 892.0], [1.0, 2772.0], [18.0, 610.0], [5.0, 1565.0], [6.0, 1409.0], [7.0, 1526.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 18.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 609.5, "minX": 1.0, "maxY": 2768.0, "series": [{"data": [[8.0, 1424.0], [9.0, 1331.5], [10.0, 1250.0], [11.0, 1546.0], [12.0, 940.0], [13.0, 834.0], [14.0, 794.0], [15.0, 891.0], [1.0, 2768.0], [18.0, 609.5], [5.0, 1565.0], [6.0, 1406.0], [7.0, 1523.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 18.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 4.116666666666666, "minX": 1.60384542E12, "maxY": 8.133333333333333, "series": [{"data": [[1.60384542E12, 4.116666666666666], [1.60384548E12, 8.133333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60384548E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 3.9166666666666665, "minX": 1.60384542E12, "maxY": 8.333333333333334, "series": [{"data": [[1.60384542E12, 3.9166666666666665], [1.60384548E12, 8.333333333333334]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60384548E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 3.9166666666666665, "minX": 1.60384542E12, "maxY": 8.333333333333334, "series": [{"data": [[1.60384542E12, 3.9166666666666665], [1.60384548E12, 8.333333333333334]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60384548E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 3.9166666666666665, "minX": 1.60384542E12, "maxY": 8.333333333333334, "series": [{"data": [[1.60384542E12, 3.9166666666666665], [1.60384548E12, 8.333333333333334]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60384548E12, "title": "Total Transactions Per Second"}},
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

