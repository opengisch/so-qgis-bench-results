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
        data: {"result": {"minY": 484.0, "minX": 0.0, "maxY": 5981.0, "series": [{"data": [[0.0, 484.0], [0.1, 484.0], [0.2, 501.0], [0.3, 502.0], [0.4, 502.0], [0.5, 515.0], [0.6, 544.0], [0.7, 547.0], [0.8, 547.0], [0.9, 549.0], [1.0, 552.0], [1.1, 553.0], [1.2, 553.0], [1.3, 555.0], [1.4, 557.0], [1.5, 560.0], [1.6, 560.0], [1.7, 561.0], [1.8, 569.0], [1.9, 569.0], [2.0, 569.0], [2.1, 572.0], [2.2, 578.0], [2.3, 578.0], [2.4, 580.0], [2.5, 583.0], [2.6, 586.0], [2.7, 586.0], [2.8, 591.0], [2.9, 591.0], [3.0, 592.0], [3.1, 592.0], [3.2, 597.0], [3.3, 597.0], [3.4, 597.0], [3.5, 599.0], [3.6, 599.0], [3.7, 604.0], [3.8, 604.0], [3.9, 606.0], [4.0, 610.0], [4.1, 610.0], [4.2, 610.0], [4.3, 612.0], [4.4, 613.0], [4.5, 614.0], [4.6, 614.0], [4.7, 617.0], [4.8, 618.0], [4.9, 619.0], [5.0, 619.0], [5.1, 620.0], [5.2, 622.0], [5.3, 622.0], [5.4, 626.0], [5.5, 629.0], [5.6, 630.0], [5.7, 630.0], [5.8, 632.0], [5.9, 634.0], [6.0, 636.0], [6.1, 636.0], [6.2, 636.0], [6.3, 640.0], [6.4, 640.0], [6.5, 640.0], [6.6, 641.0], [6.7, 643.0], [6.8, 643.0], [6.9, 646.0], [7.0, 647.0], [7.1, 650.0], [7.2, 650.0], [7.3, 650.0], [7.4, 651.0], [7.5, 652.0], [7.6, 652.0], [7.7, 654.0], [7.8, 654.0], [7.9, 654.0], [8.0, 654.0], [8.1, 654.0], [8.2, 658.0], [8.3, 660.0], [8.4, 660.0], [8.5, 661.0], [8.6, 661.0], [8.7, 661.0], [8.8, 664.0], [8.9, 666.0], [9.0, 667.0], [9.1, 667.0], [9.2, 668.0], [9.3, 673.0], [9.4, 676.0], [9.5, 676.0], [9.6, 677.0], [9.7, 677.0], [9.8, 679.0], [9.9, 679.0], [10.0, 680.0], [10.1, 681.0], [10.2, 681.0], [10.3, 681.0], [10.4, 682.0], [10.5, 688.0], [10.6, 688.0], [10.7, 690.0], [10.8, 691.0], [10.9, 697.0], [11.0, 697.0], [11.1, 700.0], [11.2, 704.0], [11.3, 709.0], [11.4, 709.0], [11.5, 709.0], [11.6, 711.0], [11.7, 711.0], [11.8, 714.0], [11.9, 714.0], [12.0, 718.0], [12.1, 718.0], [12.2, 721.0], [12.3, 721.0], [12.4, 721.0], [12.5, 721.0], [12.6, 722.0], [12.7, 722.0], [12.8, 723.0], [12.9, 723.0], [13.0, 724.0], [13.1, 724.0], [13.2, 725.0], [13.3, 725.0], [13.4, 727.0], [13.5, 729.0], [13.6, 729.0], [13.7, 730.0], [13.8, 731.0], [13.9, 731.0], [14.0, 731.0], [14.1, 737.0], [14.2, 737.0], [14.3, 737.0], [14.4, 737.0], [14.5, 740.0], [14.6, 740.0], [14.7, 742.0], [14.8, 742.0], [14.9, 745.0], [15.0, 747.0], [15.1, 747.0], [15.2, 752.0], [15.3, 755.0], [15.4, 759.0], [15.5, 759.0], [15.6, 760.0], [15.7, 763.0], [15.8, 765.0], [15.9, 765.0], [16.0, 767.0], [16.1, 771.0], [16.2, 775.0], [16.3, 775.0], [16.4, 777.0], [16.5, 779.0], [16.6, 783.0], [16.7, 783.0], [16.8, 783.0], [16.9, 784.0], [17.0, 784.0], [17.1, 787.0], [17.2, 788.0], [17.3, 789.0], [17.4, 789.0], [17.5, 790.0], [17.6, 790.0], [17.7, 792.0], [17.8, 792.0], [17.9, 792.0], [18.0, 794.0], [18.1, 796.0], [18.2, 796.0], [18.3, 797.0], [18.4, 804.0], [18.5, 804.0], [18.6, 815.0], [18.7, 815.0], [18.8, 817.0], [18.9, 817.0], [19.0, 818.0], [19.1, 820.0], [19.2, 825.0], [19.3, 825.0], [19.4, 843.0], [19.5, 845.0], [19.6, 847.0], [19.7, 847.0], [19.8, 850.0], [19.9, 859.0], [20.0, 860.0], [20.1, 860.0], [20.2, 863.0], [20.3, 868.0], [20.4, 868.0], [20.5, 869.0], [20.6, 871.0], [20.7, 876.0], [20.8, 876.0], [20.9, 880.0], [21.0, 885.0], [21.1, 889.0], [21.2, 889.0], [21.3, 894.0], [21.4, 895.0], [21.5, 895.0], [21.6, 895.0], [21.7, 896.0], [21.8, 901.0], [21.9, 901.0], [22.0, 901.0], [22.1, 901.0], [22.2, 902.0], [22.3, 902.0], [22.4, 909.0], [22.5, 914.0], [22.6, 919.0], [22.7, 919.0], [22.8, 919.0], [22.9, 921.0], [23.0, 922.0], [23.1, 922.0], [23.2, 923.0], [23.3, 924.0], [23.4, 924.0], [23.5, 930.0], [23.6, 931.0], [23.7, 932.0], [23.8, 932.0], [23.9, 932.0], [24.0, 935.0], [24.1, 935.0], [24.2, 935.0], [24.3, 938.0], [24.4, 942.0], [24.5, 942.0], [24.6, 942.0], [24.7, 943.0], [24.8, 944.0], [24.9, 946.0], [25.0, 946.0], [25.1, 950.0], [25.2, 952.0], [25.3, 952.0], [25.4, 953.0], [25.5, 965.0], [25.6, 966.0], [25.7, 966.0], [25.8, 966.0], [25.9, 967.0], [26.0, 968.0], [26.1, 968.0], [26.2, 968.0], [26.3, 970.0], [26.4, 974.0], [26.5, 974.0], [26.6, 974.0], [26.7, 975.0], [26.8, 975.0], [26.9, 981.0], [27.0, 981.0], [27.1, 981.0], [27.2, 981.0], [27.3, 985.0], [27.4, 985.0], [27.5, 985.0], [27.6, 985.0], [27.7, 986.0], [27.8, 988.0], [27.9, 992.0], [28.0, 992.0], [28.1, 993.0], [28.2, 994.0], [28.3, 995.0], [28.4, 995.0], [28.5, 995.0], [28.6, 995.0], [28.7, 995.0], [28.8, 996.0], [28.9, 997.0], [29.0, 998.0], [29.1, 998.0], [29.2, 1006.0], [29.3, 1008.0], [29.4, 1009.0], [29.5, 1009.0], [29.6, 1009.0], [29.7, 1010.0], [29.8, 1012.0], [29.9, 1012.0], [30.0, 1012.0], [30.1, 1016.0], [30.2, 1016.0], [30.3, 1017.0], [30.4, 1017.0], [30.5, 1017.0], [30.6, 1017.0], [30.7, 1017.0], [30.8, 1018.0], [30.9, 1019.0], [31.0, 1019.0], [31.1, 1023.0], [31.2, 1023.0], [31.3, 1026.0], [31.4, 1026.0], [31.5, 1026.0], [31.6, 1028.0], [31.7, 1028.0], [31.8, 1028.0], [31.9, 1029.0], [32.0, 1030.0], [32.1, 1030.0], [32.2, 1030.0], [32.3, 1031.0], [32.4, 1032.0], [32.5, 1032.0], [32.6, 1032.0], [32.7, 1032.0], [32.8, 1034.0], [32.9, 1034.0], [33.0, 1041.0], [33.1, 1041.0], [33.2, 1043.0], [33.3, 1043.0], [33.4, 1044.0], [33.5, 1046.0], [33.6, 1046.0], [33.7, 1047.0], [33.8, 1049.0], [33.9, 1050.0], [34.0, 1050.0], [34.1, 1051.0], [34.2, 1052.0], [34.3, 1052.0], [34.4, 1052.0], [34.5, 1054.0], [34.6, 1055.0], [34.7, 1056.0], [34.8, 1056.0], [34.9, 1062.0], [35.0, 1064.0], [35.1, 1064.0], [35.2, 1066.0], [35.3, 1068.0], [35.4, 1070.0], [35.5, 1070.0], [35.6, 1072.0], [35.7, 1074.0], [35.8, 1076.0], [35.9, 1076.0], [36.0, 1076.0], [36.1, 1077.0], [36.2, 1078.0], [36.3, 1078.0], [36.4, 1079.0], [36.5, 1079.0], [36.6, 1080.0], [36.7, 1080.0], [36.8, 1083.0], [36.9, 1083.0], [37.0, 1083.0], [37.1, 1083.0], [37.2, 1085.0], [37.3, 1086.0], [37.4, 1086.0], [37.5, 1088.0], [37.6, 1089.0], [37.7, 1089.0], [37.8, 1089.0], [37.9, 1095.0], [38.0, 1095.0], [38.1, 1095.0], [38.2, 1095.0], [38.3, 1097.0], [38.4, 1100.0], [38.5, 1100.0], [38.6, 1102.0], [38.7, 1106.0], [38.8, 1107.0], [38.9, 1107.0], [39.0, 1107.0], [39.1, 1108.0], [39.2, 1116.0], [39.3, 1116.0], [39.4, 1116.0], [39.5, 1117.0], [39.6, 1119.0], [39.7, 1119.0], [39.8, 1120.0], [39.9, 1120.0], [40.0, 1122.0], [40.1, 1122.0], [40.2, 1122.0], [40.3, 1122.0], [40.4, 1122.0], [40.5, 1125.0], [40.6, 1127.0], [40.7, 1131.0], [40.8, 1131.0], [40.9, 1131.0], [41.0, 1131.0], [41.1, 1133.0], [41.2, 1133.0], [41.3, 1133.0], [41.4, 1134.0], [41.5, 1137.0], [41.6, 1137.0], [41.7, 1138.0], [41.8, 1140.0], [41.9, 1140.0], [42.0, 1142.0], [42.1, 1142.0], [42.2, 1146.0], [42.3, 1146.0], [42.4, 1147.0], [42.5, 1147.0], [42.6, 1149.0], [42.7, 1149.0], [42.8, 1150.0], [42.9, 1151.0], [43.0, 1152.0], [43.1, 1152.0], [43.2, 1153.0], [43.3, 1156.0], [43.4, 1156.0], [43.5, 1160.0], [43.6, 1160.0], [43.7, 1162.0], [43.8, 1162.0], [43.9, 1163.0], [44.0, 1163.0], [44.1, 1166.0], [44.2, 1166.0], [44.3, 1166.0], [44.4, 1167.0], [44.5, 1168.0], [44.6, 1168.0], [44.7, 1169.0], [44.8, 1171.0], [44.9, 1172.0], [45.0, 1172.0], [45.1, 1173.0], [45.2, 1176.0], [45.3, 1176.0], [45.4, 1176.0], [45.5, 1179.0], [45.6, 1181.0], [45.7, 1181.0], [45.8, 1184.0], [45.9, 1187.0], [46.0, 1191.0], [46.1, 1191.0], [46.2, 1192.0], [46.3, 1193.0], [46.4, 1194.0], [46.5, 1194.0], [46.6, 1194.0], [46.7, 1195.0], [46.8, 1195.0], [46.9, 1195.0], [47.0, 1196.0], [47.1, 1197.0], [47.2, 1197.0], [47.3, 1197.0], [47.4, 1201.0], [47.5, 1204.0], [47.6, 1204.0], [47.7, 1206.0], [47.8, 1206.0], [47.9, 1207.0], [48.0, 1207.0], [48.1, 1208.0], [48.2, 1208.0], [48.3, 1210.0], [48.4, 1210.0], [48.5, 1210.0], [48.6, 1211.0], [48.7, 1211.0], [48.8, 1211.0], [48.9, 1211.0], [49.0, 1211.0], [49.1, 1211.0], [49.2, 1213.0], [49.3, 1215.0], [49.4, 1216.0], [49.5, 1216.0], [49.6, 1220.0], [49.7, 1222.0], [49.8, 1228.0], [49.9, 1228.0], [50.0, 1230.0], [50.1, 1231.0], [50.2, 1231.0], [50.3, 1232.0], [50.4, 1233.0], [50.5, 1233.0], [50.6, 1233.0], [50.7, 1235.0], [50.8, 1236.0], [50.9, 1238.0], [51.0, 1238.0], [51.1, 1239.0], [51.2, 1240.0], [51.3, 1241.0], [51.4, 1241.0], [51.5, 1241.0], [51.6, 1242.0], [51.7, 1242.0], [51.8, 1243.0], [51.9, 1245.0], [52.0, 1246.0], [52.1, 1246.0], [52.2, 1247.0], [52.3, 1247.0], [52.4, 1248.0], [52.5, 1248.0], [52.6, 1248.0], [52.7, 1249.0], [52.8, 1249.0], [52.9, 1249.0], [53.0, 1251.0], [53.1, 1251.0], [53.2, 1254.0], [53.3, 1254.0], [53.4, 1255.0], [53.5, 1255.0], [53.6, 1255.0], [53.7, 1256.0], [53.8, 1257.0], [53.9, 1258.0], [54.0, 1258.0], [54.1, 1259.0], [54.2, 1260.0], [54.3, 1260.0], [54.4, 1260.0], [54.5, 1262.0], [54.6, 1263.0], [54.7, 1264.0], [54.8, 1264.0], [54.9, 1266.0], [55.0, 1267.0], [55.1, 1267.0], [55.2, 1273.0], [55.3, 1276.0], [55.4, 1278.0], [55.5, 1278.0], [55.6, 1279.0], [55.7, 1280.0], [55.8, 1282.0], [55.9, 1282.0], [56.0, 1283.0], [56.1, 1283.0], [56.2, 1285.0], [56.3, 1285.0], [56.4, 1290.0], [56.5, 1292.0], [56.6, 1294.0], [56.7, 1294.0], [56.8, 1295.0], [56.9, 1296.0], [57.0, 1296.0], [57.1, 1298.0], [57.2, 1300.0], [57.3, 1302.0], [57.4, 1302.0], [57.5, 1303.0], [57.6, 1304.0], [57.7, 1304.0], [57.8, 1304.0], [57.9, 1305.0], [58.0, 1307.0], [58.1, 1307.0], [58.2, 1307.0], [58.3, 1307.0], [58.4, 1309.0], [58.5, 1309.0], [58.6, 1311.0], [58.7, 1312.0], [58.8, 1312.0], [58.9, 1312.0], [59.0, 1315.0], [59.1, 1315.0], [59.2, 1315.0], [59.3, 1315.0], [59.4, 1317.0], [59.5, 1320.0], [59.6, 1322.0], [59.7, 1322.0], [59.8, 1325.0], [59.9, 1328.0], [60.0, 1329.0], [60.1, 1329.0], [60.2, 1330.0], [60.3, 1331.0], [60.4, 1331.0], [60.5, 1332.0], [60.6, 1333.0], [60.7, 1334.0], [60.8, 1334.0], [60.9, 1335.0], [61.0, 1336.0], [61.1, 1336.0], [61.2, 1336.0], [61.3, 1336.0], [61.4, 1338.0], [61.5, 1339.0], [61.6, 1339.0], [61.7, 1344.0], [61.8, 1345.0], [61.9, 1345.0], [62.0, 1346.0], [62.1, 1347.0], [62.2, 1348.0], [62.3, 1348.0], [62.4, 1348.0], [62.5, 1349.0], [62.6, 1350.0], [62.7, 1350.0], [62.8, 1351.0], [62.9, 1352.0], [63.0, 1353.0], [63.1, 1353.0], [63.2, 1354.0], [63.3, 1354.0], [63.4, 1354.0], [63.5, 1355.0], [63.6, 1355.0], [63.7, 1356.0], [63.8, 1356.0], [63.9, 1356.0], [64.0, 1357.0], [64.1, 1358.0], [64.2, 1358.0], [64.3, 1358.0], [64.4, 1361.0], [64.5, 1362.0], [64.6, 1362.0], [64.7, 1364.0], [64.8, 1365.0], [64.9, 1365.0], [65.0, 1365.0], [65.1, 1366.0], [65.2, 1368.0], [65.3, 1368.0], [65.4, 1369.0], [65.5, 1369.0], [65.6, 1372.0], [65.7, 1372.0], [65.8, 1372.0], [65.9, 1373.0], [66.0, 1374.0], [66.1, 1374.0], [66.2, 1379.0], [66.3, 1379.0], [66.4, 1380.0], [66.5, 1380.0], [66.6, 1380.0], [66.7, 1381.0], [66.8, 1381.0], [66.9, 1381.0], [67.0, 1382.0], [67.1, 1383.0], [67.2, 1383.0], [67.3, 1383.0], [67.4, 1385.0], [67.5, 1387.0], [67.6, 1387.0], [67.7, 1389.0], [67.8, 1389.0], [67.9, 1391.0], [68.0, 1391.0], [68.1, 1393.0], [68.2, 1394.0], [68.3, 1394.0], [68.4, 1394.0], [68.5, 1394.0], [68.6, 1396.0], [68.7, 1396.0], [68.8, 1397.0], [68.9, 1397.0], [69.0, 1398.0], [69.1, 1398.0], [69.2, 1398.0], [69.3, 1399.0], [69.4, 1400.0], [69.5, 1400.0], [69.6, 1401.0], [69.7, 1401.0], [69.8, 1401.0], [69.9, 1401.0], [70.0, 1401.0], [70.1, 1402.0], [70.2, 1402.0], [70.3, 1403.0], [70.4, 1408.0], [70.5, 1409.0], [70.6, 1409.0], [70.7, 1411.0], [70.8, 1411.0], [70.9, 1411.0], [71.0, 1411.0], [71.1, 1413.0], [71.2, 1413.0], [71.3, 1414.0], [71.4, 1414.0], [71.5, 1418.0], [71.6, 1419.0], [71.7, 1419.0], [71.8, 1425.0], [71.9, 1428.0], [72.0, 1434.0], [72.1, 1434.0], [72.2, 1434.0], [72.3, 1434.0], [72.4, 1441.0], [72.5, 1441.0], [72.6, 1441.0], [72.7, 1442.0], [72.8, 1442.0], [72.9, 1442.0], [73.0, 1443.0], [73.1, 1444.0], [73.2, 1445.0], [73.3, 1445.0], [73.4, 1445.0], [73.5, 1447.0], [73.6, 1447.0], [73.7, 1447.0], [73.8, 1448.0], [73.9, 1451.0], [74.0, 1451.0], [74.1, 1454.0], [74.2, 1455.0], [74.3, 1456.0], [74.4, 1456.0], [74.5, 1457.0], [74.6, 1460.0], [74.7, 1463.0], [74.8, 1463.0], [74.9, 1465.0], [75.0, 1471.0], [75.1, 1471.0], [75.2, 1474.0], [75.3, 1475.0], [75.4, 1475.0], [75.5, 1475.0], [75.6, 1475.0], [75.7, 1476.0], [75.8, 1479.0], [75.9, 1479.0], [76.0, 1480.0], [76.1, 1487.0], [76.2, 1488.0], [76.3, 1488.0], [76.4, 1489.0], [76.5, 1489.0], [76.6, 1489.0], [76.7, 1489.0], [76.8, 1493.0], [76.9, 1493.0], [77.0, 1493.0], [77.1, 1493.0], [77.2, 1495.0], [77.3, 1495.0], [77.4, 1495.0], [77.5, 1496.0], [77.6, 1497.0], [77.7, 1498.0], [77.8, 1498.0], [77.9, 1499.0], [78.0, 1501.0], [78.1, 1505.0], [78.2, 1505.0], [78.3, 1506.0], [78.4, 1511.0], [78.5, 1511.0], [78.6, 1512.0], [78.7, 1513.0], [78.8, 1518.0], [78.9, 1518.0], [79.0, 1520.0], [79.1, 1522.0], [79.2, 1525.0], [79.3, 1525.0], [79.4, 1525.0], [79.5, 1526.0], [79.6, 1528.0], [79.7, 1528.0], [79.8, 1528.0], [79.9, 1529.0], [80.0, 1532.0], [80.1, 1532.0], [80.2, 1537.0], [80.3, 1540.0], [80.4, 1540.0], [80.5, 1540.0], [80.6, 1542.0], [80.7, 1543.0], [80.8, 1543.0], [80.9, 1543.0], [81.0, 1543.0], [81.1, 1548.0], [81.2, 1548.0], [81.3, 1549.0], [81.4, 1549.0], [81.5, 1550.0], [81.6, 1550.0], [81.7, 1550.0], [81.8, 1550.0], [81.9, 1550.0], [82.0, 1551.0], [82.1, 1551.0], [82.2, 1561.0], [82.3, 1561.0], [82.4, 1563.0], [82.5, 1563.0], [82.6, 1566.0], [82.7, 1566.0], [82.8, 1576.0], [82.9, 1577.0], [83.0, 1579.0], [83.1, 1579.0], [83.2, 1582.0], [83.3, 1583.0], [83.4, 1583.0], [83.5, 1584.0], [83.6, 1593.0], [83.7, 1594.0], [83.8, 1594.0], [83.9, 1594.0], [84.0, 1598.0], [84.1, 1610.0], [84.2, 1610.0], [84.3, 1621.0], [84.4, 1621.0], [84.5, 1626.0], [84.6, 1626.0], [84.7, 1628.0], [84.8, 1631.0], [84.9, 1638.0], [85.0, 1638.0], [85.1, 1640.0], [85.2, 1641.0], [85.3, 1641.0], [85.4, 1645.0], [85.5, 1646.0], [85.6, 1647.0], [85.7, 1647.0], [85.8, 1648.0], [85.9, 1650.0], [86.0, 1652.0], [86.1, 1652.0], [86.2, 1653.0], [86.3, 1665.0], [86.4, 1668.0], [86.5, 1668.0], [86.6, 1672.0], [86.7, 1672.0], [86.8, 1672.0], [86.9, 1675.0], [87.0, 1683.0], [87.1, 1683.0], [87.2, 1683.0], [87.3, 1684.0], [87.4, 1686.0], [87.5, 1687.0], [87.6, 1687.0], [87.7, 1690.0], [87.8, 1710.0], [87.9, 1719.0], [88.0, 1719.0], [88.1, 1731.0], [88.2, 1733.0], [88.3, 1735.0], [88.4, 1735.0], [88.5, 1739.0], [88.6, 1752.0], [88.7, 1752.0], [88.8, 1755.0], [88.9, 1759.0], [89.0, 1762.0], [89.1, 1762.0], [89.2, 1762.0], [89.3, 1764.0], [89.4, 1772.0], [89.5, 1772.0], [89.6, 1783.0], [89.7, 1784.0], [89.8, 1797.0], [89.9, 1797.0], [90.0, 1801.0], [90.1, 1811.0], [90.2, 1811.0], [90.3, 1814.0], [90.4, 1832.0], [90.5, 1839.0], [90.6, 1839.0], [90.7, 1858.0], [90.8, 1860.0], [90.9, 1881.0], [91.0, 1881.0], [91.1, 1887.0], [91.2, 1891.0], [91.3, 1899.0], [91.4, 1899.0], [91.5, 1912.0], [91.6, 1912.0], [91.7, 1912.0], [91.8, 1912.0], [91.9, 1922.0], [92.0, 1945.0], [92.1, 1945.0], [92.2, 1948.0], [92.3, 1954.0], [92.4, 1965.0], [92.5, 1965.0], [92.6, 1970.0], [92.7, 1982.0], [92.8, 2027.0], [92.9, 2027.0], [93.0, 2033.0], [93.1, 2034.0], [93.2, 2049.0], [93.3, 2049.0], [93.4, 2075.0], [93.5, 2132.0], [93.6, 2132.0], [93.7, 2137.0], [93.8, 2145.0], [93.9, 2200.0], [94.0, 2200.0], [94.1, 2352.0], [94.2, 2673.0], [94.3, 2711.0], [94.4, 2711.0], [94.5, 2735.0], [94.6, 2763.0], [94.7, 2788.0], [94.8, 2788.0], [94.9, 2796.0], [95.0, 2910.0], [95.1, 2910.0], [95.2, 2929.0], [95.3, 2940.0], [95.4, 2946.0], [95.5, 2946.0], [95.6, 2952.0], [95.7, 2960.0], [95.8, 3000.0], [95.9, 3000.0], [96.0, 3062.0], [96.1, 3066.0], [96.2, 3071.0], [96.3, 3071.0], [96.4, 3122.0], [96.5, 3122.0], [96.6, 3144.0], [96.7, 3144.0], [96.8, 3224.0], [96.9, 3228.0], [97.0, 3228.0], [97.1, 3263.0], [97.2, 3294.0], [97.3, 3296.0], [97.4, 3296.0], [97.5, 3310.0], [97.6, 3320.0], [97.7, 3390.0], [97.8, 3390.0], [97.9, 3428.0], [98.0, 3455.0], [98.1, 3459.0], [98.2, 3459.0], [98.3, 3466.0], [98.4, 3513.0], [98.5, 3513.0], [98.6, 3516.0], [98.7, 3521.0], [98.8, 3622.0], [98.9, 3622.0], [99.0, 3812.0], [99.1, 3923.0], [99.2, 3938.0], [99.3, 3938.0], [99.4, 4075.0], [99.5, 4396.0], [99.6, 4706.0], [99.7, 4706.0], [99.8, 5914.0], [99.9, 5981.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 400.0, "maxY": 90.0, "series": [{"data": [[600.0, 54.0], [700.0, 54.0], [800.0, 25.0], [900.0, 54.0], [1000.0, 68.0], [1100.0, 66.0], [1200.0, 72.0], [1300.0, 90.0], [1400.0, 63.0], [1500.0, 45.0], [1600.0, 27.0], [1700.0, 16.0], [1800.0, 11.0], [1900.0, 10.0], [2000.0, 5.0], [2100.0, 3.0], [2200.0, 1.0], [2300.0, 1.0], [2600.0, 1.0], [2700.0, 5.0], [2900.0, 6.0], [3000.0, 4.0], [3100.0, 3.0], [3200.0, 5.0], [3300.0, 3.0], [3400.0, 4.0], [3500.0, 3.0], [3600.0, 1.0], [3800.0, 1.0], [3900.0, 2.0], [4000.0, 1.0], [4300.0, 1.0], [4700.0, 1.0], [5900.0, 2.0], [400.0, 1.0], [500.0, 26.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 5900.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 568.0, "series": [{"data": [[0.0, 1.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 568.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 161.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 5.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 38.93877551020409, "minX": 1.60189794E12, "maxY": 38.93877551020409, "series": [{"data": [[1.60189794E12, 38.93877551020409]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60189794E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 515.0, "minX": 1.0, "maxY": 2352.0, "series": [{"data": [[33.0, 1012.0], [32.0, 994.0], [2.0, 1447.0], [35.0, 583.0], [34.0, 1029.0], [37.0, 650.0], [36.0, 1208.0], [39.0, 654.0], [38.0, 617.0], [40.0, 1320.6479885057481], [3.0, 1922.0], [4.0, 950.0], [5.0, 1518.0], [6.0, 1350.0], [7.0, 2132.0], [8.0, 1497.0], [9.0, 1077.0], [10.0, 1400.0], [11.0, 1122.0], [12.0, 2075.0], [13.0, 704.0], [14.0, 1684.0], [15.0, 1332.0], [16.0, 688.0], [1.0, 2352.0], [17.0, 1361.0], [18.0, 1044.0], [19.0, 1672.0], [20.0, 569.0], [21.0, 1017.0], [22.0, 1137.0], [23.0, 580.0], [24.0, 629.0], [25.0, 661.0], [26.0, 515.0], [27.0, 1419.0], [28.0, 763.0], [29.0, 731.0], [30.0, 752.0], [31.0, 1784.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[38.93877551020409, 1311.2952380952393]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 40.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 5523.033333333334, "minX": 1.60189794E12, "maxY": 1833348.1166666667, "series": [{"data": [[1.60189794E12, 1833348.1166666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60189794E12, 5523.033333333334]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60189794E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 1311.2952380952393, "minX": 1.60189794E12, "maxY": 1311.2952380952393, "series": [{"data": [[1.60189794E12, 1311.2952380952393]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60189794E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 1310.2557823129246, "minX": 1.60189794E12, "maxY": 1310.2557823129246, "series": [{"data": [[1.60189794E12, 1310.2557823129246]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60189794E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.7959183673469405, "minX": 1.60189794E12, "maxY": 0.7959183673469405, "series": [{"data": [[1.60189794E12, 0.7959183673469405]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60189794E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 484.0, "minX": 1.60189794E12, "maxY": 5981.0, "series": [{"data": [[1.60189794E12, 5981.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60189794E12, 548.1579996514321]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60189794E12, 549.7107002091408]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60189794E12, 548.888999825716]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60189794E12, 484.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60189794E12, 1231.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60189794E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 669.5, "minX": 1.0, "maxY": 3071.0, "series": [{"data": [[33.0, 1353.0], [35.0, 3071.0], [37.0, 1044.0], [38.0, 732.0], [40.0, 885.5], [43.0, 1037.5], [45.0, 1233.0], [44.0, 796.0], [3.0, 2796.0], [49.0, 740.0], [1.0, 2352.0], [23.0, 1441.0], [26.0, 1138.0], [28.0, 1360.0], [29.0, 1320.0], [30.0, 1364.5], [31.0, 1331.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[40.0, 669.5], [43.0, 817.0], [44.0, 1887.0], [26.0, 775.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 49.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 669.5, "minX": 1.0, "maxY": 3071.0, "series": [{"data": [[33.0, 1352.0], [35.0, 3071.0], [37.0, 1044.0], [38.0, 732.0], [40.0, 884.5], [43.0, 1037.5], [45.0, 1232.0], [44.0, 796.0], [3.0, 2796.0], [49.0, 740.0], [1.0, 2350.0], [23.0, 1441.0], [26.0, 1137.0], [28.0, 1359.5], [29.0, 1318.0], [30.0, 1363.0], [31.0, 1331.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[40.0, 669.5], [43.0, 817.0], [44.0, 1887.0], [26.0, 774.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 49.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 12.25, "minX": 1.60189794E12, "maxY": 12.25, "series": [{"data": [[1.60189794E12, 12.25]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60189794E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.08333333333333333, "minX": 1.60189794E12, "maxY": 12.166666666666666, "series": [{"data": [[1.60189794E12, 12.166666666666666]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.60189794E12, 0.08333333333333333]], "isOverall": false, "label": "500", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60189794E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.08333333333333333, "minX": 1.60189794E12, "maxY": 12.166666666666666, "series": [{"data": [[1.60189794E12, 12.166666666666666]], "isOverall": false, "label": "HTTP Request-success", "isController": false}, {"data": [[1.60189794E12, 0.08333333333333333]], "isOverall": false, "label": "HTTP Request-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60189794E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.08333333333333333, "minX": 1.60189794E12, "maxY": 12.166666666666666, "series": [{"data": [[1.60189794E12, 12.166666666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.60189794E12, 0.08333333333333333]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60189794E12, "title": "Total Transactions Per Second"}},
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

