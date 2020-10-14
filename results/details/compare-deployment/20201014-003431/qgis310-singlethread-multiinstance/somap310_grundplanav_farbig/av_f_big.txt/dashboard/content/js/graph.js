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
        data: {"result": {"minY": 411.0, "minX": 0.0, "maxY": 4486.0, "series": [{"data": [[0.0, 411.0], [0.1, 411.0], [0.2, 434.0], [0.3, 438.0], [0.4, 438.0], [0.5, 440.0], [0.6, 442.0], [0.7, 446.0], [0.8, 446.0], [0.9, 447.0], [1.0, 448.0], [1.1, 453.0], [1.2, 453.0], [1.3, 460.0], [1.4, 465.0], [1.5, 475.0], [1.6, 475.0], [1.7, 476.0], [1.8, 481.0], [1.9, 481.0], [2.0, 488.0], [2.1, 493.0], [2.2, 502.0], [2.3, 502.0], [2.4, 505.0], [2.5, 516.0], [2.6, 518.0], [2.7, 518.0], [2.8, 522.0], [2.9, 525.0], [3.0, 535.0], [3.1, 535.0], [3.2, 545.0], [3.3, 550.0], [3.4, 550.0], [3.5, 561.0], [3.6, 568.0], [3.7, 572.0], [3.8, 572.0], [3.9, 574.0], [4.0, 578.0], [4.1, 578.0], [4.2, 578.0], [4.3, 581.0], [4.4, 586.0], [4.5, 587.0], [4.6, 587.0], [4.7, 589.0], [4.8, 600.0], [4.9, 605.0], [5.0, 605.0], [5.1, 608.0], [5.2, 610.0], [5.3, 610.0], [5.4, 615.0], [5.5, 615.0], [5.6, 616.0], [5.7, 616.0], [5.8, 616.0], [5.9, 619.0], [6.0, 620.0], [6.1, 620.0], [6.2, 623.0], [6.3, 626.0], [6.4, 627.0], [6.5, 627.0], [6.6, 627.0], [6.7, 630.0], [6.8, 630.0], [6.9, 634.0], [7.0, 634.0], [7.1, 638.0], [7.2, 638.0], [7.3, 638.0], [7.4, 639.0], [7.5, 640.0], [7.6, 640.0], [7.7, 640.0], [7.8, 641.0], [7.9, 641.0], [8.0, 641.0], [8.1, 643.0], [8.2, 643.0], [8.3, 643.0], [8.4, 643.0], [8.5, 644.0], [8.6, 647.0], [8.7, 647.0], [8.8, 649.0], [8.9, 653.0], [9.0, 655.0], [9.1, 655.0], [9.2, 656.0], [9.3, 657.0], [9.4, 660.0], [9.5, 660.0], [9.6, 661.0], [9.7, 661.0], [9.8, 663.0], [9.9, 663.0], [10.0, 663.0], [10.1, 664.0], [10.2, 664.0], [10.3, 664.0], [10.4, 665.0], [10.5, 667.0], [10.6, 667.0], [10.7, 668.0], [10.8, 668.0], [10.9, 670.0], [11.0, 670.0], [11.1, 670.0], [11.2, 671.0], [11.3, 672.0], [11.4, 672.0], [11.5, 673.0], [11.6, 673.0], [11.7, 673.0], [11.8, 674.0], [11.9, 676.0], [12.0, 677.0], [12.1, 677.0], [12.2, 681.0], [12.3, 682.0], [12.4, 684.0], [12.5, 684.0], [12.6, 684.0], [12.7, 685.0], [12.8, 685.0], [12.9, 685.0], [13.0, 686.0], [13.1, 687.0], [13.2, 687.0], [13.3, 687.0], [13.4, 688.0], [13.5, 691.0], [13.6, 691.0], [13.7, 694.0], [13.8, 695.0], [13.9, 696.0], [14.0, 696.0], [14.1, 697.0], [14.2, 698.0], [14.3, 701.0], [14.4, 701.0], [14.5, 702.0], [14.6, 703.0], [14.7, 707.0], [14.8, 707.0], [14.9, 707.0], [15.0, 708.0], [15.1, 708.0], [15.2, 709.0], [15.3, 713.0], [15.4, 713.0], [15.5, 713.0], [15.6, 713.0], [15.7, 715.0], [15.8, 721.0], [15.9, 721.0], [16.0, 725.0], [16.1, 726.0], [16.2, 726.0], [16.3, 726.0], [16.4, 728.0], [16.5, 729.0], [16.6, 730.0], [16.7, 730.0], [16.8, 730.0], [16.9, 733.0], [17.0, 733.0], [17.1, 741.0], [17.2, 741.0], [17.3, 745.0], [17.4, 745.0], [17.5, 749.0], [17.6, 761.0], [17.7, 763.0], [17.8, 763.0], [17.9, 765.0], [18.0, 766.0], [18.1, 767.0], [18.2, 767.0], [18.3, 768.0], [18.4, 770.0], [18.5, 770.0], [18.6, 770.0], [18.7, 771.0], [18.8, 771.0], [18.9, 771.0], [19.0, 776.0], [19.1, 777.0], [19.2, 778.0], [19.3, 778.0], [19.4, 782.0], [19.5, 783.0], [19.6, 785.0], [19.7, 785.0], [19.8, 788.0], [19.9, 792.0], [20.0, 794.0], [20.1, 794.0], [20.2, 797.0], [20.3, 800.0], [20.4, 800.0], [20.5, 802.0], [20.6, 806.0], [20.7, 807.0], [20.8, 807.0], [20.9, 810.0], [21.0, 812.0], [21.1, 817.0], [21.2, 817.0], [21.3, 819.0], [21.4, 820.0], [21.5, 821.0], [21.6, 821.0], [21.7, 825.0], [21.8, 825.0], [21.9, 825.0], [22.0, 826.0], [22.1, 828.0], [22.2, 831.0], [22.3, 831.0], [22.4, 831.0], [22.5, 842.0], [22.6, 842.0], [22.7, 842.0], [22.8, 842.0], [22.9, 848.0], [23.0, 851.0], [23.1, 851.0], [23.2, 852.0], [23.3, 859.0], [23.4, 859.0], [23.5, 860.0], [23.6, 862.0], [23.7, 865.0], [23.8, 865.0], [23.9, 867.0], [24.0, 870.0], [24.1, 871.0], [24.2, 871.0], [24.3, 872.0], [24.4, 874.0], [24.5, 875.0], [24.6, 875.0], [24.7, 875.0], [24.8, 878.0], [24.9, 880.0], [25.0, 880.0], [25.1, 881.0], [25.2, 881.0], [25.3, 881.0], [25.4, 882.0], [25.5, 882.0], [25.6, 883.0], [25.7, 883.0], [25.8, 885.0], [25.9, 889.0], [26.0, 889.0], [26.1, 889.0], [26.2, 890.0], [26.3, 892.0], [26.4, 893.0], [26.5, 893.0], [26.6, 898.0], [26.7, 899.0], [26.8, 899.0], [26.9, 901.0], [27.0, 902.0], [27.1, 907.0], [27.2, 907.0], [27.3, 907.0], [27.4, 908.0], [27.5, 910.0], [27.6, 910.0], [27.7, 913.0], [27.8, 913.0], [27.9, 916.0], [28.0, 916.0], [28.1, 918.0], [28.2, 919.0], [28.3, 920.0], [28.4, 920.0], [28.5, 921.0], [28.6, 922.0], [28.7, 922.0], [28.8, 923.0], [28.9, 924.0], [29.0, 926.0], [29.1, 926.0], [29.2, 934.0], [29.3, 935.0], [29.4, 936.0], [29.5, 936.0], [29.6, 939.0], [29.7, 940.0], [29.8, 942.0], [29.9, 942.0], [30.0, 943.0], [30.1, 944.0], [30.2, 944.0], [30.3, 945.0], [30.4, 949.0], [30.5, 950.0], [30.6, 950.0], [30.7, 953.0], [30.8, 955.0], [30.9, 957.0], [31.0, 957.0], [31.1, 959.0], [31.2, 960.0], [31.3, 962.0], [31.4, 962.0], [31.5, 963.0], [31.6, 966.0], [31.7, 966.0], [31.8, 967.0], [31.9, 970.0], [32.0, 972.0], [32.1, 972.0], [32.2, 972.0], [32.3, 974.0], [32.4, 976.0], [32.5, 976.0], [32.6, 979.0], [32.7, 979.0], [32.8, 980.0], [32.9, 980.0], [33.0, 980.0], [33.1, 983.0], [33.2, 987.0], [33.3, 987.0], [33.4, 990.0], [33.5, 995.0], [33.6, 995.0], [33.7, 996.0], [33.8, 997.0], [33.9, 1009.0], [34.0, 1009.0], [34.1, 1009.0], [34.2, 1015.0], [34.3, 1016.0], [34.4, 1016.0], [34.5, 1017.0], [34.6, 1019.0], [34.7, 1023.0], [34.8, 1023.0], [34.9, 1024.0], [35.0, 1025.0], [35.1, 1025.0], [35.2, 1033.0], [35.3, 1035.0], [35.4, 1039.0], [35.5, 1039.0], [35.6, 1040.0], [35.7, 1041.0], [35.8, 1042.0], [35.9, 1042.0], [36.0, 1044.0], [36.1, 1044.0], [36.2, 1047.0], [36.3, 1047.0], [36.4, 1047.0], [36.5, 1048.0], [36.6, 1057.0], [36.7, 1057.0], [36.8, 1058.0], [36.9, 1058.0], [37.0, 1058.0], [37.1, 1061.0], [37.2, 1062.0], [37.3, 1063.0], [37.4, 1063.0], [37.5, 1063.0], [37.6, 1065.0], [37.7, 1065.0], [37.8, 1065.0], [37.9, 1065.0], [38.0, 1068.0], [38.1, 1068.0], [38.2, 1068.0], [38.3, 1069.0], [38.4, 1072.0], [38.5, 1072.0], [38.6, 1074.0], [38.7, 1076.0], [38.8, 1077.0], [38.9, 1077.0], [39.0, 1077.0], [39.1, 1078.0], [39.2, 1078.0], [39.3, 1078.0], [39.4, 1079.0], [39.5, 1082.0], [39.6, 1084.0], [39.7, 1084.0], [39.8, 1085.0], [39.9, 1086.0], [40.0, 1086.0], [40.1, 1086.0], [40.2, 1087.0], [40.3, 1087.0], [40.4, 1087.0], [40.5, 1089.0], [40.6, 1091.0], [40.7, 1093.0], [40.8, 1093.0], [40.9, 1094.0], [41.0, 1096.0], [41.1, 1097.0], [41.2, 1097.0], [41.3, 1097.0], [41.4, 1097.0], [41.5, 1097.0], [41.6, 1097.0], [41.7, 1101.0], [41.8, 1103.0], [41.9, 1103.0], [42.0, 1103.0], [42.1, 1105.0], [42.2, 1111.0], [42.3, 1111.0], [42.4, 1111.0], [42.5, 1112.0], [42.6, 1114.0], [42.7, 1114.0], [42.8, 1116.0], [42.9, 1116.0], [43.0, 1117.0], [43.1, 1117.0], [43.2, 1118.0], [43.3, 1119.0], [43.4, 1119.0], [43.5, 1121.0], [43.6, 1125.0], [43.7, 1125.0], [43.8, 1125.0], [43.9, 1126.0], [44.0, 1128.0], [44.1, 1128.0], [44.2, 1128.0], [44.3, 1129.0], [44.4, 1131.0], [44.5, 1131.0], [44.6, 1131.0], [44.7, 1133.0], [44.8, 1137.0], [44.9, 1137.0], [45.0, 1137.0], [45.1, 1138.0], [45.2, 1143.0], [45.3, 1143.0], [45.4, 1144.0], [45.5, 1144.0], [45.6, 1144.0], [45.7, 1144.0], [45.8, 1145.0], [45.9, 1145.0], [46.0, 1145.0], [46.1, 1145.0], [46.2, 1146.0], [46.3, 1146.0], [46.4, 1149.0], [46.5, 1149.0], [46.6, 1150.0], [46.7, 1150.0], [46.8, 1150.0], [46.9, 1150.0], [47.0, 1153.0], [47.1, 1153.0], [47.2, 1153.0], [47.3, 1154.0], [47.4, 1154.0], [47.5, 1156.0], [47.6, 1156.0], [47.7, 1157.0], [47.8, 1161.0], [47.9, 1162.0], [48.0, 1162.0], [48.1, 1163.0], [48.2, 1164.0], [48.3, 1164.0], [48.4, 1164.0], [48.5, 1164.0], [48.6, 1166.0], [48.7, 1166.0], [48.8, 1166.0], [48.9, 1166.0], [49.0, 1167.0], [49.1, 1167.0], [49.2, 1168.0], [49.3, 1171.0], [49.4, 1177.0], [49.5, 1177.0], [49.6, 1177.0], [49.7, 1179.0], [49.8, 1179.0], [49.9, 1179.0], [50.0, 1183.0], [50.1, 1183.0], [50.2, 1183.0], [50.3, 1184.0], [50.4, 1184.0], [50.5, 1189.0], [50.6, 1189.0], [50.7, 1192.0], [50.8, 1195.0], [50.9, 1196.0], [51.0, 1196.0], [51.1, 1199.0], [51.2, 1200.0], [51.3, 1200.0], [51.4, 1200.0], [51.5, 1201.0], [51.6, 1202.0], [51.7, 1202.0], [51.8, 1203.0], [51.9, 1206.0], [52.0, 1206.0], [52.1, 1206.0], [52.2, 1208.0], [52.3, 1211.0], [52.4, 1214.0], [52.5, 1214.0], [52.6, 1215.0], [52.7, 1219.0], [52.8, 1223.0], [52.9, 1223.0], [53.0, 1227.0], [53.1, 1227.0], [53.2, 1229.0], [53.3, 1229.0], [53.4, 1231.0], [53.5, 1232.0], [53.6, 1232.0], [53.7, 1232.0], [53.8, 1232.0], [53.9, 1235.0], [54.0, 1235.0], [54.1, 1235.0], [54.2, 1236.0], [54.3, 1243.0], [54.4, 1243.0], [54.5, 1243.0], [54.6, 1243.0], [54.7, 1249.0], [54.8, 1249.0], [54.9, 1250.0], [55.0, 1250.0], [55.1, 1250.0], [55.2, 1251.0], [55.3, 1255.0], [55.4, 1258.0], [55.5, 1258.0], [55.6, 1258.0], [55.7, 1261.0], [55.8, 1265.0], [55.9, 1265.0], [56.0, 1266.0], [56.1, 1268.0], [56.2, 1270.0], [56.3, 1270.0], [56.4, 1272.0], [56.5, 1272.0], [56.6, 1274.0], [56.7, 1274.0], [56.8, 1275.0], [56.9, 1275.0], [57.0, 1275.0], [57.1, 1276.0], [57.2, 1277.0], [57.3, 1278.0], [57.4, 1278.0], [57.5, 1278.0], [57.6, 1279.0], [57.7, 1279.0], [57.8, 1279.0], [57.9, 1279.0], [58.0, 1282.0], [58.1, 1282.0], [58.2, 1282.0], [58.3, 1284.0], [58.4, 1286.0], [58.5, 1286.0], [58.6, 1288.0], [58.7, 1289.0], [58.8, 1290.0], [58.9, 1290.0], [59.0, 1292.0], [59.1, 1297.0], [59.2, 1298.0], [59.3, 1298.0], [59.4, 1299.0], [59.5, 1300.0], [59.6, 1300.0], [59.7, 1300.0], [59.8, 1301.0], [59.9, 1301.0], [60.0, 1302.0], [60.1, 1302.0], [60.2, 1307.0], [60.3, 1309.0], [60.4, 1309.0], [60.5, 1310.0], [60.6, 1310.0], [60.7, 1312.0], [60.8, 1312.0], [60.9, 1313.0], [61.0, 1315.0], [61.1, 1315.0], [61.2, 1315.0], [61.3, 1316.0], [61.4, 1316.0], [61.5, 1319.0], [61.6, 1319.0], [61.7, 1320.0], [61.8, 1321.0], [61.9, 1321.0], [62.0, 1328.0], [62.1, 1331.0], [62.2, 1332.0], [62.3, 1332.0], [62.4, 1332.0], [62.5, 1333.0], [62.6, 1333.0], [62.7, 1333.0], [62.8, 1334.0], [62.9, 1335.0], [63.0, 1342.0], [63.1, 1342.0], [63.2, 1342.0], [63.3, 1347.0], [63.4, 1347.0], [63.5, 1350.0], [63.6, 1350.0], [63.7, 1352.0], [63.8, 1352.0], [63.9, 1354.0], [64.0, 1358.0], [64.1, 1363.0], [64.2, 1363.0], [64.3, 1363.0], [64.4, 1367.0], [64.5, 1368.0], [64.6, 1368.0], [64.7, 1369.0], [64.8, 1370.0], [64.9, 1372.0], [65.0, 1372.0], [65.1, 1374.0], [65.2, 1375.0], [65.3, 1375.0], [65.4, 1375.0], [65.5, 1376.0], [65.6, 1378.0], [65.7, 1378.0], [65.8, 1383.0], [65.9, 1384.0], [66.0, 1387.0], [66.1, 1387.0], [66.2, 1390.0], [66.3, 1394.0], [66.4, 1395.0], [66.5, 1395.0], [66.6, 1395.0], [66.7, 1396.0], [66.8, 1396.0], [66.9, 1397.0], [67.0, 1404.0], [67.1, 1406.0], [67.2, 1406.0], [67.3, 1410.0], [67.4, 1411.0], [67.5, 1411.0], [67.6, 1411.0], [67.7, 1413.0], [67.8, 1416.0], [67.9, 1417.0], [68.0, 1417.0], [68.1, 1417.0], [68.2, 1423.0], [68.3, 1424.0], [68.4, 1424.0], [68.5, 1430.0], [68.6, 1430.0], [68.7, 1430.0], [68.8, 1431.0], [68.9, 1432.0], [69.0, 1432.0], [69.1, 1432.0], [69.2, 1438.0], [69.3, 1439.0], [69.4, 1442.0], [69.5, 1442.0], [69.6, 1442.0], [69.7, 1443.0], [69.8, 1443.0], [69.9, 1443.0], [70.0, 1443.0], [70.1, 1445.0], [70.2, 1445.0], [70.3, 1448.0], [70.4, 1449.0], [70.5, 1453.0], [70.6, 1453.0], [70.7, 1453.0], [70.8, 1454.0], [70.9, 1454.0], [71.0, 1454.0], [71.1, 1455.0], [71.2, 1458.0], [71.3, 1458.0], [71.4, 1458.0], [71.5, 1459.0], [71.6, 1460.0], [71.7, 1460.0], [71.8, 1461.0], [71.9, 1461.0], [72.0, 1462.0], [72.1, 1462.0], [72.2, 1464.0], [72.3, 1468.0], [72.4, 1469.0], [72.5, 1469.0], [72.6, 1469.0], [72.7, 1472.0], [72.8, 1474.0], [72.9, 1474.0], [73.0, 1475.0], [73.1, 1475.0], [73.2, 1476.0], [73.3, 1476.0], [73.4, 1479.0], [73.5, 1479.0], [73.6, 1479.0], [73.7, 1481.0], [73.8, 1486.0], [73.9, 1488.0], [74.0, 1488.0], [74.1, 1488.0], [74.2, 1489.0], [74.3, 1490.0], [74.4, 1490.0], [74.5, 1493.0], [74.6, 1495.0], [74.7, 1495.0], [74.8, 1495.0], [74.9, 1497.0], [75.0, 1500.0], [75.1, 1500.0], [75.2, 1500.0], [75.3, 1502.0], [75.4, 1503.0], [75.5, 1503.0], [75.6, 1506.0], [75.7, 1507.0], [75.8, 1510.0], [75.9, 1510.0], [76.0, 1513.0], [76.1, 1513.0], [76.2, 1515.0], [76.3, 1515.0], [76.4, 1515.0], [76.5, 1515.0], [76.6, 1525.0], [76.7, 1525.0], [76.8, 1526.0], [76.9, 1530.0], [77.0, 1530.0], [77.1, 1530.0], [77.2, 1533.0], [77.3, 1536.0], [77.4, 1536.0], [77.5, 1540.0], [77.6, 1540.0], [77.7, 1544.0], [77.8, 1544.0], [77.9, 1544.0], [78.0, 1556.0], [78.1, 1565.0], [78.2, 1565.0], [78.3, 1565.0], [78.4, 1575.0], [78.5, 1575.0], [78.6, 1576.0], [78.7, 1579.0], [78.8, 1581.0], [78.9, 1581.0], [79.0, 1581.0], [79.1, 1590.0], [79.2, 1592.0], [79.3, 1592.0], [79.4, 1593.0], [79.5, 1594.0], [79.6, 1596.0], [79.7, 1596.0], [79.8, 1601.0], [79.9, 1603.0], [80.0, 1605.0], [80.1, 1605.0], [80.2, 1606.0], [80.3, 1607.0], [80.4, 1607.0], [80.5, 1613.0], [80.6, 1613.0], [80.7, 1614.0], [80.8, 1614.0], [80.9, 1614.0], [81.0, 1617.0], [81.1, 1620.0], [81.2, 1620.0], [81.3, 1623.0], [81.4, 1623.0], [81.5, 1624.0], [81.6, 1624.0], [81.7, 1632.0], [81.8, 1639.0], [81.9, 1639.0], [82.0, 1644.0], [82.1, 1646.0], [82.2, 1647.0], [82.3, 1647.0], [82.4, 1647.0], [82.5, 1647.0], [82.6, 1649.0], [82.7, 1649.0], [82.8, 1651.0], [82.9, 1658.0], [83.0, 1663.0], [83.1, 1663.0], [83.2, 1668.0], [83.3, 1670.0], [83.4, 1670.0], [83.5, 1684.0], [83.6, 1690.0], [83.7, 1699.0], [83.8, 1699.0], [83.9, 1699.0], [84.0, 1704.0], [84.1, 1704.0], [84.2, 1704.0], [84.3, 1704.0], [84.4, 1706.0], [84.5, 1708.0], [84.6, 1708.0], [84.7, 1713.0], [84.8, 1719.0], [84.9, 1732.0], [85.0, 1732.0], [85.1, 1741.0], [85.2, 1743.0], [85.3, 1743.0], [85.4, 1744.0], [85.5, 1745.0], [85.6, 1746.0], [85.7, 1746.0], [85.8, 1776.0], [85.9, 1778.0], [86.0, 1779.0], [86.1, 1779.0], [86.2, 1780.0], [86.3, 1781.0], [86.4, 1788.0], [86.5, 1788.0], [86.6, 1789.0], [86.7, 1795.0], [86.8, 1795.0], [86.9, 1796.0], [87.0, 1797.0], [87.1, 1802.0], [87.2, 1802.0], [87.3, 1802.0], [87.4, 1802.0], [87.5, 1804.0], [87.6, 1804.0], [87.7, 1811.0], [87.8, 1811.0], [87.9, 1816.0], [88.0, 1816.0], [88.1, 1819.0], [88.2, 1823.0], [88.3, 1823.0], [88.4, 1823.0], [88.5, 1826.0], [88.6, 1829.0], [88.7, 1829.0], [88.8, 1830.0], [88.9, 1831.0], [89.0, 1838.0], [89.1, 1838.0], [89.2, 1846.0], [89.3, 1846.0], [89.4, 1847.0], [89.5, 1847.0], [89.6, 1849.0], [89.7, 1853.0], [89.8, 1854.0], [89.9, 1854.0], [90.0, 1856.0], [90.1, 1858.0], [90.2, 1858.0], [90.3, 1861.0], [90.4, 1864.0], [90.5, 1868.0], [90.6, 1868.0], [90.7, 1886.0], [90.8, 1891.0], [90.9, 1892.0], [91.0, 1892.0], [91.1, 1896.0], [91.2, 1898.0], [91.3, 1907.0], [91.4, 1907.0], [91.5, 1907.0], [91.6, 1916.0], [91.7, 1916.0], [91.8, 1922.0], [91.9, 1922.0], [92.0, 1932.0], [92.1, 1932.0], [92.2, 1960.0], [92.3, 1968.0], [92.4, 1974.0], [92.5, 1974.0], [92.6, 1978.0], [92.7, 1984.0], [92.8, 1993.0], [92.9, 1993.0], [93.0, 2000.0], [93.1, 2001.0], [93.2, 2009.0], [93.3, 2009.0], [93.4, 2021.0], [93.5, 2021.0], [93.6, 2021.0], [93.7, 2026.0], [93.8, 2034.0], [93.9, 2072.0], [94.0, 2072.0], [94.1, 2075.0], [94.2, 2079.0], [94.3, 2082.0], [94.4, 2082.0], [94.5, 2093.0], [94.6, 2099.0], [94.7, 2104.0], [94.8, 2104.0], [94.9, 2107.0], [95.0, 2109.0], [95.1, 2109.0], [95.2, 2142.0], [95.3, 2143.0], [95.4, 2159.0], [95.5, 2159.0], [95.6, 2186.0], [95.7, 2207.0], [95.8, 2249.0], [95.9, 2249.0], [96.0, 2256.0], [96.1, 2261.0], [96.2, 2266.0], [96.3, 2266.0], [96.4, 2325.0], [96.5, 2336.0], [96.6, 2404.0], [96.7, 2404.0], [96.8, 2472.0], [96.9, 2483.0], [97.0, 2483.0], [97.1, 2493.0], [97.2, 2527.0], [97.3, 2530.0], [97.4, 2530.0], [97.5, 2703.0], [97.6, 2774.0], [97.7, 2866.0], [97.8, 2866.0], [97.9, 2870.0], [98.0, 2935.0], [98.1, 2974.0], [98.2, 2974.0], [98.3, 2980.0], [98.4, 3029.0], [98.5, 3029.0], [98.6, 3092.0], [98.7, 3209.0], [98.8, 3217.0], [98.9, 3217.0], [99.0, 3305.0], [99.1, 3312.0], [99.2, 3320.0], [99.3, 3320.0], [99.4, 3400.0], [99.5, 3473.0], [99.6, 3486.0], [99.7, 3486.0], [99.8, 3547.0], [99.9, 4486.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 400.0, "maxY": 70.0, "series": [{"data": [[600.0, 70.0], [700.0, 44.0], [800.0, 48.0], [900.0, 52.0], [1000.0, 57.0], [1100.0, 70.0], [1200.0, 61.0], [1300.0, 55.0], [1400.0, 59.0], [1500.0, 35.0], [1600.0, 31.0], [1700.0, 23.0], [1800.0, 31.0], [1900.0, 12.0], [2000.0, 13.0], [2100.0, 7.0], [2200.0, 5.0], [2300.0, 2.0], [2400.0, 4.0], [2500.0, 2.0], [2800.0, 2.0], [2700.0, 2.0], [2900.0, 3.0], [3000.0, 2.0], [3300.0, 3.0], [3200.0, 2.0], [3400.0, 3.0], [3500.0, 1.0], [4400.0, 1.0], [400.0, 16.0], [500.0, 19.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 4400.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 16.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 537.0, "series": [{"data": [[0.0, 16.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 537.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 182.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 11.764492753623184, "minX": 1.60263588E12, "maxY": 12.0, "series": [{"data": [[1.60263594E12, 11.764492753623184], [1.60263588E12, 12.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60263594E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 643.0, "minX": 1.0, "maxY": 2493.0, "series": [{"data": [[8.0, 2493.0], [4.0, 1505.5], [2.0, 1040.0], [1.0, 1309.0], [9.0, 655.0], [10.0, 664.0], [5.0, 694.0], [11.0, 643.0], [12.0, 1257.9060773480655], [6.0, 695.0], [7.0, 733.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[11.91156462585034, 1255.3210884353732]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 12.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 2071.633333333333, "minX": 1.60263588E12, "maxY": 1231152.0833333333, "series": [{"data": [[1.60263594E12, 604626.8166666667], [1.60263588E12, 1231152.0833333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60263594E12, 2071.633333333333], [1.60263588E12, 3451.4]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60263594E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 1232.692028985507, "minX": 1.60263588E12, "maxY": 1268.928104575165, "series": [{"data": [[1.60263594E12, 1232.692028985507], [1.60263588E12, 1268.928104575165]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60263594E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 1231.5615942028987, "minX": 1.60263588E12, "maxY": 1267.5228758169937, "series": [{"data": [[1.60263594E12, 1231.5615942028987], [1.60263588E12, 1267.5228758169937]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60263594E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.05797101449275362, "minX": 1.60263588E12, "maxY": 0.26143790849673254, "series": [{"data": [[1.60263594E12, 0.05797101449275362], [1.60263588E12, 0.26143790849673254]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60263594E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 411.0, "minX": 1.60263588E12, "maxY": 4486.0, "series": [{"data": [[1.60263594E12, 2935.0], [1.60263588E12, 4486.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60263594E12, 553.240997556448], [1.60263588E12, 440.2799997806549]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60263594E12, 562.4651009774208], [1.60263588E12, 441.10800008773805]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60263594E12, 558.365498778224], [1.60263588E12, 440.73999989032745]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60263594E12, 465.0], [1.60263588E12, 411.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60263594E12, 1180.0], [1.60263588E12, 1183.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60263594E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 638.0, "minX": 2.0, "maxY": 1423.0, "series": [{"data": [[8.0, 1365.0], [2.0, 1174.5], [17.0, 638.0], [9.0, 1192.0], [10.0, 1278.0], [11.0, 1227.0], [12.0, 966.5], [6.0, 1423.0], [13.0, 881.5], [7.0, 1390.0], [14.0, 870.0], [15.0, 1028.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 17.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 638.0, "minX": 2.0, "maxY": 1422.0, "series": [{"data": [[8.0, 1364.5], [2.0, 1174.5], [17.0, 638.0], [9.0, 1191.0], [10.0, 1277.0], [11.0, 1224.0], [12.0, 964.5], [6.0, 1422.0], [13.0, 881.5], [7.0, 1389.0], [14.0, 868.5], [15.0, 1027.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 17.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 4.4, "minX": 1.60263588E12, "maxY": 7.85, "series": [{"data": [[1.60263594E12, 4.4], [1.60263588E12, 7.85]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60263594E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 4.6, "minX": 1.60263588E12, "maxY": 7.65, "series": [{"data": [[1.60263594E12, 4.6], [1.60263588E12, 7.65]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60263594E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 4.6, "minX": 1.60263588E12, "maxY": 7.65, "series": [{"data": [[1.60263594E12, 4.6], [1.60263588E12, 7.65]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60263594E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 4.6, "minX": 1.60263588E12, "maxY": 7.65, "series": [{"data": [[1.60263594E12, 4.6], [1.60263588E12, 7.65]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60263594E12, "title": "Total Transactions Per Second"}},
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

