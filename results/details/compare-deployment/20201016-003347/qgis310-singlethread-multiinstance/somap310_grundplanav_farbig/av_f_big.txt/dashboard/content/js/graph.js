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
        data: {"result": {"minY": 356.0, "minX": 0.0, "maxY": 3995.0, "series": [{"data": [[0.0, 356.0], [0.1, 356.0], [0.2, 375.0], [0.3, 381.0], [0.4, 381.0], [0.5, 386.0], [0.6, 392.0], [0.7, 396.0], [0.8, 396.0], [0.9, 400.0], [1.0, 403.0], [1.1, 408.0], [1.2, 408.0], [1.3, 409.0], [1.4, 414.0], [1.5, 429.0], [1.6, 429.0], [1.7, 432.0], [1.8, 433.0], [1.9, 433.0], [2.0, 437.0], [2.1, 442.0], [2.2, 444.0], [2.3, 444.0], [2.4, 445.0], [2.5, 449.0], [2.6, 450.0], [2.7, 450.0], [2.8, 479.0], [2.9, 483.0], [3.0, 506.0], [3.1, 506.0], [3.2, 524.0], [3.3, 525.0], [3.4, 525.0], [3.5, 539.0], [3.6, 545.0], [3.7, 547.0], [3.8, 547.0], [3.9, 554.0], [4.0, 554.0], [4.1, 562.0], [4.2, 562.0], [4.3, 575.0], [4.4, 580.0], [4.5, 580.0], [4.6, 580.0], [4.7, 583.0], [4.8, 591.0], [4.9, 594.0], [5.0, 594.0], [5.1, 595.0], [5.2, 607.0], [5.3, 607.0], [5.4, 608.0], [5.5, 611.0], [5.6, 612.0], [5.7, 612.0], [5.8, 620.0], [5.9, 624.0], [6.0, 626.0], [6.1, 626.0], [6.2, 627.0], [6.3, 629.0], [6.4, 630.0], [6.5, 630.0], [6.6, 632.0], [6.7, 633.0], [6.8, 633.0], [6.9, 639.0], [7.0, 641.0], [7.1, 642.0], [7.2, 642.0], [7.3, 651.0], [7.4, 656.0], [7.5, 658.0], [7.6, 658.0], [7.7, 659.0], [7.8, 660.0], [7.9, 665.0], [8.0, 665.0], [8.1, 665.0], [8.2, 665.0], [8.3, 668.0], [8.4, 668.0], [8.5, 670.0], [8.6, 670.0], [8.7, 670.0], [8.8, 671.0], [8.9, 672.0], [9.0, 672.0], [9.1, 672.0], [9.2, 672.0], [9.3, 674.0], [9.4, 676.0], [9.5, 676.0], [9.6, 679.0], [9.7, 681.0], [9.8, 683.0], [9.9, 683.0], [10.0, 683.0], [10.1, 683.0], [10.2, 683.0], [10.3, 684.0], [10.4, 684.0], [10.5, 686.0], [10.6, 686.0], [10.7, 687.0], [10.8, 688.0], [10.9, 690.0], [11.0, 690.0], [11.1, 691.0], [11.2, 693.0], [11.3, 693.0], [11.4, 693.0], [11.5, 693.0], [11.6, 693.0], [11.7, 693.0], [11.8, 695.0], [11.9, 696.0], [12.0, 697.0], [12.1, 697.0], [12.2, 700.0], [12.3, 700.0], [12.4, 700.0], [12.5, 700.0], [12.6, 701.0], [12.7, 703.0], [12.8, 706.0], [12.9, 706.0], [13.0, 708.0], [13.1, 708.0], [13.2, 709.0], [13.3, 709.0], [13.4, 712.0], [13.5, 712.0], [13.6, 712.0], [13.7, 713.0], [13.8, 713.0], [13.9, 715.0], [14.0, 715.0], [14.1, 717.0], [14.2, 719.0], [14.3, 720.0], [14.4, 720.0], [14.5, 721.0], [14.6, 721.0], [14.7, 725.0], [14.8, 725.0], [14.9, 725.0], [15.0, 725.0], [15.1, 725.0], [15.2, 728.0], [15.3, 729.0], [15.4, 734.0], [15.5, 734.0], [15.6, 736.0], [15.7, 741.0], [15.8, 742.0], [15.9, 742.0], [16.0, 751.0], [16.1, 754.0], [16.2, 757.0], [16.3, 757.0], [16.4, 759.0], [16.5, 766.0], [16.6, 774.0], [16.7, 774.0], [16.8, 776.0], [16.9, 777.0], [17.0, 777.0], [17.1, 779.0], [17.2, 780.0], [17.3, 782.0], [17.4, 782.0], [17.5, 783.0], [17.6, 783.0], [17.7, 784.0], [17.8, 784.0], [17.9, 786.0], [18.0, 787.0], [18.1, 787.0], [18.2, 787.0], [18.3, 789.0], [18.4, 789.0], [18.5, 789.0], [18.6, 791.0], [18.7, 792.0], [18.8, 795.0], [18.9, 795.0], [19.0, 798.0], [19.1, 804.0], [19.2, 807.0], [19.3, 807.0], [19.4, 808.0], [19.5, 808.0], [19.6, 808.0], [19.7, 808.0], [19.8, 810.0], [19.9, 812.0], [20.0, 812.0], [20.1, 812.0], [20.2, 812.0], [20.3, 815.0], [20.4, 815.0], [20.5, 816.0], [20.6, 822.0], [20.7, 822.0], [20.8, 822.0], [20.9, 827.0], [21.0, 832.0], [21.1, 836.0], [21.2, 836.0], [21.3, 838.0], [21.4, 839.0], [21.5, 847.0], [21.6, 847.0], [21.7, 848.0], [21.8, 849.0], [21.9, 849.0], [22.0, 852.0], [22.1, 855.0], [22.2, 859.0], [22.3, 859.0], [22.4, 859.0], [22.5, 859.0], [22.6, 861.0], [22.7, 861.0], [22.8, 861.0], [22.9, 864.0], [23.0, 876.0], [23.1, 876.0], [23.2, 877.0], [23.3, 881.0], [23.4, 881.0], [23.5, 882.0], [23.6, 883.0], [23.7, 883.0], [23.8, 883.0], [23.9, 887.0], [24.0, 888.0], [24.1, 888.0], [24.2, 888.0], [24.3, 888.0], [24.4, 890.0], [24.5, 891.0], [24.6, 891.0], [24.7, 893.0], [24.8, 893.0], [24.9, 893.0], [25.0, 893.0], [25.1, 899.0], [25.2, 900.0], [25.3, 900.0], [25.4, 901.0], [25.5, 903.0], [25.6, 908.0], [25.7, 908.0], [25.8, 908.0], [25.9, 908.0], [26.0, 910.0], [26.1, 910.0], [26.2, 911.0], [26.3, 911.0], [26.4, 911.0], [26.5, 911.0], [26.6, 911.0], [26.7, 914.0], [26.8, 914.0], [26.9, 917.0], [27.0, 917.0], [27.1, 921.0], [27.2, 921.0], [27.3, 921.0], [27.4, 924.0], [27.5, 925.0], [27.6, 925.0], [27.7, 926.0], [27.8, 928.0], [27.9, 929.0], [28.0, 929.0], [28.1, 930.0], [28.2, 931.0], [28.3, 931.0], [28.4, 931.0], [28.5, 931.0], [28.6, 934.0], [28.7, 934.0], [28.8, 935.0], [28.9, 935.0], [29.0, 941.0], [29.1, 941.0], [29.2, 942.0], [29.3, 945.0], [29.4, 946.0], [29.5, 946.0], [29.6, 953.0], [29.7, 954.0], [29.8, 954.0], [29.9, 954.0], [30.0, 956.0], [30.1, 958.0], [30.2, 958.0], [30.3, 959.0], [30.4, 964.0], [30.5, 965.0], [30.6, 965.0], [30.7, 966.0], [30.8, 967.0], [30.9, 968.0], [31.0, 968.0], [31.1, 968.0], [31.2, 969.0], [31.3, 974.0], [31.4, 974.0], [31.5, 976.0], [31.6, 977.0], [31.7, 977.0], [31.8, 981.0], [31.9, 982.0], [32.0, 983.0], [32.1, 983.0], [32.2, 985.0], [32.3, 986.0], [32.4, 992.0], [32.5, 992.0], [32.6, 993.0], [32.7, 996.0], [32.8, 997.0], [32.9, 997.0], [33.0, 999.0], [33.1, 1001.0], [33.2, 1002.0], [33.3, 1002.0], [33.4, 1002.0], [33.5, 1006.0], [33.6, 1006.0], [33.7, 1006.0], [33.8, 1010.0], [33.9, 1014.0], [34.0, 1014.0], [34.1, 1017.0], [34.2, 1017.0], [34.3, 1022.0], [34.4, 1022.0], [34.5, 1025.0], [34.6, 1027.0], [34.7, 1030.0], [34.8, 1030.0], [34.9, 1032.0], [35.0, 1033.0], [35.1, 1033.0], [35.2, 1036.0], [35.3, 1036.0], [35.4, 1038.0], [35.5, 1038.0], [35.6, 1040.0], [35.7, 1042.0], [35.8, 1043.0], [35.9, 1043.0], [36.0, 1044.0], [36.1, 1046.0], [36.2, 1046.0], [36.3, 1046.0], [36.4, 1051.0], [36.5, 1053.0], [36.6, 1053.0], [36.7, 1053.0], [36.8, 1053.0], [36.9, 1057.0], [37.0, 1057.0], [37.1, 1058.0], [37.2, 1058.0], [37.3, 1060.0], [37.4, 1060.0], [37.5, 1061.0], [37.6, 1068.0], [37.7, 1070.0], [37.8, 1070.0], [37.9, 1070.0], [38.0, 1072.0], [38.1, 1073.0], [38.2, 1073.0], [38.3, 1074.0], [38.4, 1076.0], [38.5, 1076.0], [38.6, 1076.0], [38.7, 1082.0], [38.8, 1083.0], [38.9, 1083.0], [39.0, 1083.0], [39.1, 1083.0], [39.2, 1084.0], [39.3, 1084.0], [39.4, 1086.0], [39.5, 1087.0], [39.6, 1088.0], [39.7, 1088.0], [39.8, 1090.0], [39.9, 1090.0], [40.0, 1092.0], [40.1, 1092.0], [40.2, 1092.0], [40.3, 1093.0], [40.4, 1093.0], [40.5, 1097.0], [40.6, 1097.0], [40.7, 1098.0], [40.8, 1098.0], [40.9, 1100.0], [41.0, 1102.0], [41.1, 1102.0], [41.2, 1102.0], [41.3, 1103.0], [41.4, 1103.0], [41.5, 1104.0], [41.6, 1104.0], [41.7, 1105.0], [41.8, 1105.0], [41.9, 1105.0], [42.0, 1107.0], [42.1, 1109.0], [42.2, 1110.0], [42.3, 1110.0], [42.4, 1111.0], [42.5, 1111.0], [42.6, 1112.0], [42.7, 1112.0], [42.8, 1112.0], [42.9, 1118.0], [43.0, 1123.0], [43.1, 1123.0], [43.2, 1123.0], [43.3, 1126.0], [43.4, 1126.0], [43.5, 1127.0], [43.6, 1128.0], [43.7, 1128.0], [43.8, 1128.0], [43.9, 1129.0], [44.0, 1129.0], [44.1, 1130.0], [44.2, 1130.0], [44.3, 1130.0], [44.4, 1130.0], [44.5, 1131.0], [44.6, 1131.0], [44.7, 1131.0], [44.8, 1132.0], [44.9, 1133.0], [45.0, 1133.0], [45.1, 1133.0], [45.2, 1136.0], [45.3, 1136.0], [45.4, 1137.0], [45.5, 1140.0], [45.6, 1153.0], [45.7, 1153.0], [45.8, 1156.0], [45.9, 1157.0], [46.0, 1162.0], [46.1, 1162.0], [46.2, 1166.0], [46.3, 1166.0], [46.4, 1168.0], [46.5, 1168.0], [46.6, 1171.0], [46.7, 1174.0], [46.8, 1174.0], [46.9, 1175.0], [47.0, 1178.0], [47.1, 1178.0], [47.2, 1178.0], [47.3, 1182.0], [47.4, 1187.0], [47.5, 1192.0], [47.6, 1192.0], [47.7, 1192.0], [47.8, 1193.0], [47.9, 1194.0], [48.0, 1194.0], [48.1, 1195.0], [48.2, 1196.0], [48.3, 1196.0], [48.4, 1196.0], [48.5, 1197.0], [48.6, 1198.0], [48.7, 1198.0], [48.8, 1201.0], [48.9, 1201.0], [49.0, 1204.0], [49.1, 1204.0], [49.2, 1204.0], [49.3, 1205.0], [49.4, 1206.0], [49.5, 1206.0], [49.6, 1206.0], [49.7, 1212.0], [49.8, 1212.0], [49.9, 1212.0], [50.0, 1214.0], [50.1, 1215.0], [50.2, 1215.0], [50.3, 1215.0], [50.4, 1221.0], [50.5, 1223.0], [50.6, 1223.0], [50.7, 1225.0], [50.8, 1226.0], [50.9, 1232.0], [51.0, 1232.0], [51.1, 1234.0], [51.2, 1237.0], [51.3, 1238.0], [51.4, 1238.0], [51.5, 1244.0], [51.6, 1245.0], [51.7, 1245.0], [51.8, 1245.0], [51.9, 1245.0], [52.0, 1251.0], [52.1, 1251.0], [52.2, 1253.0], [52.3, 1253.0], [52.4, 1253.0], [52.5, 1253.0], [52.6, 1257.0], [52.7, 1259.0], [52.8, 1262.0], [52.9, 1262.0], [53.0, 1264.0], [53.1, 1270.0], [53.2, 1272.0], [53.3, 1272.0], [53.4, 1273.0], [53.5, 1276.0], [53.6, 1276.0], [53.7, 1276.0], [53.8, 1277.0], [53.9, 1278.0], [54.0, 1278.0], [54.1, 1279.0], [54.2, 1280.0], [54.3, 1280.0], [54.4, 1280.0], [54.5, 1281.0], [54.6, 1281.0], [54.7, 1285.0], [54.8, 1285.0], [54.9, 1286.0], [55.0, 1287.0], [55.1, 1287.0], [55.2, 1289.0], [55.3, 1292.0], [55.4, 1292.0], [55.5, 1292.0], [55.6, 1294.0], [55.7, 1294.0], [55.8, 1297.0], [55.9, 1297.0], [56.0, 1298.0], [56.1, 1299.0], [56.2, 1303.0], [56.3, 1303.0], [56.4, 1304.0], [56.5, 1307.0], [56.6, 1307.0], [56.7, 1307.0], [56.8, 1309.0], [56.9, 1313.0], [57.0, 1313.0], [57.1, 1313.0], [57.2, 1313.0], [57.3, 1314.0], [57.4, 1314.0], [57.5, 1314.0], [57.6, 1314.0], [57.7, 1316.0], [57.8, 1316.0], [57.9, 1318.0], [58.0, 1318.0], [58.1, 1320.0], [58.2, 1320.0], [58.3, 1320.0], [58.4, 1321.0], [58.5, 1321.0], [58.6, 1322.0], [58.7, 1327.0], [58.8, 1327.0], [58.9, 1327.0], [59.0, 1328.0], [59.1, 1330.0], [59.2, 1333.0], [59.3, 1333.0], [59.4, 1335.0], [59.5, 1336.0], [59.6, 1337.0], [59.7, 1337.0], [59.8, 1341.0], [59.9, 1342.0], [60.0, 1348.0], [60.1, 1348.0], [60.2, 1350.0], [60.3, 1350.0], [60.4, 1350.0], [60.5, 1351.0], [60.6, 1355.0], [60.7, 1359.0], [60.8, 1359.0], [60.9, 1364.0], [61.0, 1367.0], [61.1, 1368.0], [61.2, 1368.0], [61.3, 1376.0], [61.4, 1377.0], [61.5, 1378.0], [61.6, 1378.0], [61.7, 1378.0], [61.8, 1379.0], [61.9, 1379.0], [62.0, 1383.0], [62.1, 1383.0], [62.2, 1389.0], [62.3, 1389.0], [62.4, 1389.0], [62.5, 1390.0], [62.6, 1391.0], [62.7, 1391.0], [62.8, 1391.0], [62.9, 1392.0], [63.0, 1393.0], [63.1, 1393.0], [63.2, 1393.0], [63.3, 1395.0], [63.4, 1395.0], [63.5, 1396.0], [63.6, 1408.0], [63.7, 1410.0], [63.8, 1410.0], [63.9, 1412.0], [64.0, 1415.0], [64.1, 1420.0], [64.2, 1420.0], [64.3, 1420.0], [64.4, 1421.0], [64.5, 1424.0], [64.6, 1424.0], [64.7, 1428.0], [64.8, 1433.0], [64.9, 1434.0], [65.0, 1434.0], [65.1, 1436.0], [65.2, 1437.0], [65.3, 1437.0], [65.4, 1441.0], [65.5, 1443.0], [65.6, 1447.0], [65.7, 1447.0], [65.8, 1447.0], [65.9, 1448.0], [66.0, 1452.0], [66.1, 1452.0], [66.2, 1454.0], [66.3, 1457.0], [66.4, 1460.0], [66.5, 1460.0], [66.6, 1460.0], [66.7, 1464.0], [66.8, 1464.0], [66.9, 1467.0], [67.0, 1470.0], [67.1, 1470.0], [67.2, 1470.0], [67.3, 1475.0], [67.4, 1475.0], [67.5, 1476.0], [67.6, 1476.0], [67.7, 1477.0], [67.8, 1478.0], [67.9, 1479.0], [68.0, 1479.0], [68.1, 1482.0], [68.2, 1484.0], [68.3, 1484.0], [68.4, 1484.0], [68.5, 1494.0], [68.6, 1496.0], [68.7, 1496.0], [68.8, 1496.0], [68.9, 1497.0], [69.0, 1498.0], [69.1, 1498.0], [69.2, 1501.0], [69.3, 1502.0], [69.4, 1506.0], [69.5, 1506.0], [69.6, 1508.0], [69.7, 1512.0], [69.8, 1514.0], [69.9, 1514.0], [70.0, 1514.0], [70.1, 1518.0], [70.2, 1518.0], [70.3, 1519.0], [70.4, 1521.0], [70.5, 1521.0], [70.6, 1521.0], [70.7, 1527.0], [70.8, 1535.0], [70.9, 1535.0], [71.0, 1535.0], [71.1, 1535.0], [71.2, 1537.0], [71.3, 1537.0], [71.4, 1537.0], [71.5, 1538.0], [71.6, 1540.0], [71.7, 1540.0], [71.8, 1546.0], [71.9, 1547.0], [72.0, 1551.0], [72.1, 1551.0], [72.2, 1552.0], [72.3, 1554.0], [72.4, 1554.0], [72.5, 1554.0], [72.6, 1555.0], [72.7, 1556.0], [72.8, 1557.0], [72.9, 1557.0], [73.0, 1559.0], [73.1, 1559.0], [73.2, 1562.0], [73.3, 1562.0], [73.4, 1563.0], [73.5, 1565.0], [73.6, 1565.0], [73.7, 1566.0], [73.8, 1566.0], [73.9, 1568.0], [74.0, 1568.0], [74.1, 1568.0], [74.2, 1569.0], [74.3, 1570.0], [74.4, 1570.0], [74.5, 1575.0], [74.6, 1578.0], [74.7, 1580.0], [74.8, 1580.0], [74.9, 1580.0], [75.0, 1584.0], [75.1, 1584.0], [75.2, 1584.0], [75.3, 1585.0], [75.4, 1591.0], [75.5, 1591.0], [75.6, 1598.0], [75.7, 1599.0], [75.8, 1600.0], [75.9, 1600.0], [76.0, 1601.0], [76.1, 1609.0], [76.2, 1609.0], [76.3, 1609.0], [76.4, 1610.0], [76.5, 1613.0], [76.6, 1613.0], [76.7, 1613.0], [76.8, 1616.0], [76.9, 1616.0], [77.0, 1616.0], [77.1, 1620.0], [77.2, 1622.0], [77.3, 1622.0], [77.4, 1622.0], [77.5, 1625.0], [77.6, 1627.0], [77.7, 1631.0], [77.8, 1631.0], [77.9, 1632.0], [78.0, 1633.0], [78.1, 1635.0], [78.2, 1635.0], [78.3, 1652.0], [78.4, 1655.0], [78.5, 1655.0], [78.6, 1660.0], [78.7, 1664.0], [78.8, 1665.0], [78.9, 1665.0], [79.0, 1665.0], [79.1, 1669.0], [79.2, 1672.0], [79.3, 1672.0], [79.4, 1674.0], [79.5, 1676.0], [79.6, 1676.0], [79.7, 1676.0], [79.8, 1684.0], [79.9, 1690.0], [80.0, 1693.0], [80.1, 1693.0], [80.2, 1694.0], [80.3, 1695.0], [80.4, 1695.0], [80.5, 1696.0], [80.6, 1696.0], [80.7, 1696.0], [80.8, 1696.0], [80.9, 1699.0], [81.0, 1705.0], [81.1, 1705.0], [81.2, 1705.0], [81.3, 1707.0], [81.4, 1709.0], [81.5, 1711.0], [81.6, 1711.0], [81.7, 1712.0], [81.8, 1714.0], [81.9, 1714.0], [82.0, 1715.0], [82.1, 1716.0], [82.2, 1724.0], [82.3, 1724.0], [82.4, 1728.0], [82.5, 1730.0], [82.6, 1731.0], [82.7, 1731.0], [82.8, 1733.0], [82.9, 1735.0], [83.0, 1737.0], [83.1, 1737.0], [83.2, 1738.0], [83.3, 1740.0], [83.4, 1740.0], [83.5, 1742.0], [83.6, 1748.0], [83.7, 1748.0], [83.8, 1748.0], [83.9, 1753.0], [84.0, 1763.0], [84.1, 1765.0], [84.2, 1765.0], [84.3, 1767.0], [84.4, 1767.0], [84.5, 1769.0], [84.6, 1769.0], [84.7, 1769.0], [84.8, 1770.0], [84.9, 1770.0], [85.0, 1770.0], [85.1, 1772.0], [85.2, 1773.0], [85.3, 1773.0], [85.4, 1774.0], [85.5, 1774.0], [85.6, 1779.0], [85.7, 1779.0], [85.8, 1779.0], [85.9, 1780.0], [86.0, 1785.0], [86.1, 1785.0], [86.2, 1787.0], [86.3, 1789.0], [86.4, 1789.0], [86.5, 1789.0], [86.6, 1791.0], [86.7, 1792.0], [86.8, 1792.0], [86.9, 1794.0], [87.0, 1800.0], [87.1, 1803.0], [87.2, 1803.0], [87.3, 1803.0], [87.4, 1803.0], [87.5, 1812.0], [87.6, 1812.0], [87.7, 1816.0], [87.8, 1816.0], [87.9, 1827.0], [88.0, 1827.0], [88.1, 1828.0], [88.2, 1837.0], [88.3, 1841.0], [88.4, 1841.0], [88.5, 1842.0], [88.6, 1845.0], [88.7, 1845.0], [88.8, 1845.0], [88.9, 1851.0], [89.0, 1853.0], [89.1, 1853.0], [89.2, 1854.0], [89.3, 1857.0], [89.4, 1858.0], [89.5, 1858.0], [89.6, 1859.0], [89.7, 1861.0], [89.8, 1883.0], [89.9, 1883.0], [90.0, 1891.0], [90.1, 1891.0], [90.2, 1891.0], [90.3, 1892.0], [90.4, 1897.0], [90.5, 1907.0], [90.6, 1907.0], [90.7, 1912.0], [90.8, 1930.0], [90.9, 1932.0], [91.0, 1932.0], [91.1, 1942.0], [91.2, 1951.0], [91.3, 1954.0], [91.4, 1954.0], [91.5, 1956.0], [91.6, 1963.0], [91.7, 1963.0], [91.8, 1987.0], [91.9, 1988.0], [92.0, 1994.0], [92.1, 1994.0], [92.2, 1998.0], [92.3, 2006.0], [92.4, 2008.0], [92.5, 2008.0], [92.6, 2014.0], [92.7, 2026.0], [92.8, 2027.0], [92.9, 2027.0], [93.0, 2034.0], [93.1, 2045.0], [93.2, 2053.0], [93.3, 2053.0], [93.4, 2058.0], [93.5, 2059.0], [93.6, 2059.0], [93.7, 2072.0], [93.8, 2082.0], [93.9, 2083.0], [94.0, 2083.0], [94.1, 2086.0], [94.2, 2094.0], [94.3, 2102.0], [94.4, 2102.0], [94.5, 2110.0], [94.6, 2114.0], [94.7, 2116.0], [94.8, 2116.0], [94.9, 2123.0], [95.0, 2136.0], [95.1, 2136.0], [95.2, 2144.0], [95.3, 2153.0], [95.4, 2158.0], [95.5, 2158.0], [95.6, 2185.0], [95.7, 2203.0], [95.8, 2253.0], [95.9, 2253.0], [96.0, 2260.0], [96.1, 2260.0], [96.2, 2327.0], [96.3, 2327.0], [96.4, 2337.0], [96.5, 2346.0], [96.6, 2356.0], [96.7, 2356.0], [96.8, 2379.0], [96.9, 2402.0], [97.0, 2402.0], [97.1, 2438.0], [97.2, 2616.0], [97.3, 2632.0], [97.4, 2632.0], [97.5, 2641.0], [97.6, 2683.0], [97.7, 2792.0], [97.8, 2792.0], [97.9, 2919.0], [98.0, 2944.0], [98.1, 2952.0], [98.2, 2952.0], [98.3, 2981.0], [98.4, 3131.0], [98.5, 3131.0], [98.6, 3207.0], [98.7, 3245.0], [98.8, 3275.0], [98.9, 3275.0], [99.0, 3300.0], [99.1, 3339.0], [99.2, 3388.0], [99.3, 3388.0], [99.4, 3528.0], [99.5, 3575.0], [99.6, 3662.0], [99.7, 3662.0], [99.8, 3679.0], [99.9, 3995.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 300.0, "maxY": 58.0, "series": [{"data": [[600.0, 51.0], [700.0, 51.0], [800.0, 45.0], [900.0, 58.0], [1000.0, 57.0], [1100.0, 58.0], [1200.0, 55.0], [1300.0, 54.0], [1400.0, 41.0], [1500.0, 49.0], [1600.0, 38.0], [1700.0, 44.0], [1800.0, 26.0], [1900.0, 13.0], [2000.0, 15.0], [2100.0, 10.0], [2300.0, 5.0], [2200.0, 4.0], [2400.0, 2.0], [2600.0, 4.0], [2700.0, 1.0], [2900.0, 4.0], [3100.0, 1.0], [3200.0, 3.0], [3300.0, 3.0], [3500.0, 2.0], [3600.0, 2.0], [3900.0, 1.0], [300.0, 6.0], [400.0, 16.0], [500.0, 16.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3900.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 22.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 486.0, "series": [{"data": [[0.0, 22.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 486.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 227.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 11.855263157894738, "minX": 1.60280862E12, "maxY": 12.0, "series": [{"data": [[1.60280862E12, 12.0], [1.60280868E12, 11.855263157894738]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60280868E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 632.0, "minX": 1.0, "maxY": 2402.0, "series": [{"data": [[8.0, 676.0], [4.0, 690.0], [2.0, 1076.0], [1.0, 1665.0], [9.0, 642.0], [10.0, 684.0], [5.0, 712.0], [11.0, 1336.0], [12.0, 1288.6781767955813], [6.0, 2402.0], [3.0, 656.0], [7.0, 632.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[11.910204081632651, 1284.5904761904774]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 12.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 2110.4166666666665, "minX": 1.60280862E12, "maxY": 1068979.4, "series": [{"data": [[1.60280862E12, 766802.3166666667], [1.60280868E12, 1068979.4]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60280862E12, 2110.4166666666665], [1.60280868E12, 3412.616666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60280868E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 1202.3596491228059, "minX": 1.60280862E12, "maxY": 1418.9892473118282, "series": [{"data": [[1.60280862E12, 1418.9892473118282], [1.60280868E12, 1202.3596491228059]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60280868E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 1201.1798245614036, "minX": 1.60280862E12, "maxY": 1417.6487455197132, "series": [{"data": [[1.60280862E12, 1417.6487455197132], [1.60280868E12, 1201.1798245614036]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60280868E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.04166666666666668, "minX": 1.60280862E12, "maxY": 0.48028673835125474, "series": [{"data": [[1.60280862E12, 0.48028673835125474], [1.60280868E12, 0.04166666666666668]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60280868E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 356.0, "minX": 1.60280862E12, "maxY": 3995.0, "series": [{"data": [[1.60280862E12, 3995.0], [1.60280868E12, 3662.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60280862E12, 391.199999332428], [1.60280868E12, 400.9039991283417]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60280862E12, 393.7200002670288], [1.60280868E12, 404.19440034866335]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60280862E12, 392.599999666214], [1.60280868E12, 402.73199956417085]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60280862E12, 356.0], [1.60280868E12, 375.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60280862E12, 1341.0], [1.60280868E12, 1120.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60280868E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 580.0, "minX": 1.0, "maxY": 2952.0, "series": [{"data": [[8.0, 1324.5], [9.0, 1316.0], [10.0, 1317.5], [11.0, 1046.0], [12.0, 1146.5], [13.0, 1064.5], [14.0, 910.5], [15.0, 870.5], [1.0, 2952.0], [17.0, 676.0], [18.0, 580.0], [5.0, 1378.5], [6.0, 1498.0], [7.0, 1510.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 18.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 580.0, "minX": 1.0, "maxY": 2948.0, "series": [{"data": [[8.0, 1322.5], [9.0, 1314.0], [10.0, 1317.0], [11.0, 1046.0], [12.0, 1142.5], [13.0, 1063.0], [14.0, 910.5], [15.0, 870.5], [1.0, 2948.0], [17.0, 675.0], [18.0, 580.0], [5.0, 1377.5], [6.0, 1497.5], [7.0, 1509.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 18.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 4.85, "minX": 1.60280862E12, "maxY": 7.4, "series": [{"data": [[1.60280862E12, 4.85], [1.60280868E12, 7.4]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60280868E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 4.65, "minX": 1.60280862E12, "maxY": 7.6, "series": [{"data": [[1.60280862E12, 4.65], [1.60280868E12, 7.6]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60280868E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 4.65, "minX": 1.60280862E12, "maxY": 7.6, "series": [{"data": [[1.60280862E12, 4.65], [1.60280868E12, 7.6]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60280868E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 4.65, "minX": 1.60280862E12, "maxY": 7.6, "series": [{"data": [[1.60280862E12, 4.65], [1.60280868E12, 7.6]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60280868E12, "title": "Total Transactions Per Second"}},
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

