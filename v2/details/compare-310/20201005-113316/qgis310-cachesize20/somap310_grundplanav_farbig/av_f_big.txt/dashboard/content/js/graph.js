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
        data: {"result": {"minY": 475.0, "minX": 0.0, "maxY": 5901.0, "series": [{"data": [[0.0, 475.0], [0.1, 475.0], [0.2, 498.0], [0.3, 511.0], [0.4, 511.0], [0.5, 515.0], [0.6, 524.0], [0.7, 544.0], [0.8, 544.0], [0.9, 555.0], [1.0, 559.0], [1.1, 569.0], [1.2, 569.0], [1.3, 569.0], [1.4, 569.0], [1.5, 569.0], [1.6, 569.0], [1.7, 573.0], [1.8, 574.0], [1.9, 574.0], [2.0, 581.0], [2.1, 583.0], [2.2, 585.0], [2.3, 585.0], [2.4, 588.0], [2.5, 590.0], [2.6, 594.0], [2.7, 594.0], [2.8, 594.0], [2.9, 598.0], [3.0, 599.0], [3.1, 599.0], [3.2, 603.0], [3.3, 603.0], [3.4, 603.0], [3.5, 604.0], [3.6, 609.0], [3.7, 609.0], [3.8, 609.0], [3.9, 610.0], [4.0, 613.0], [4.1, 613.0], [4.2, 613.0], [4.3, 614.0], [4.4, 616.0], [4.5, 621.0], [4.6, 621.0], [4.7, 624.0], [4.8, 627.0], [4.9, 630.0], [5.0, 630.0], [5.1, 630.0], [5.2, 633.0], [5.3, 633.0], [5.4, 636.0], [5.5, 636.0], [5.6, 640.0], [5.7, 640.0], [5.8, 641.0], [5.9, 642.0], [6.0, 642.0], [6.1, 642.0], [6.2, 647.0], [6.3, 647.0], [6.4, 648.0], [6.5, 648.0], [6.6, 654.0], [6.7, 654.0], [6.8, 654.0], [6.9, 659.0], [7.0, 661.0], [7.1, 664.0], [7.2, 664.0], [7.3, 665.0], [7.4, 665.0], [7.5, 666.0], [7.6, 666.0], [7.7, 666.0], [7.8, 666.0], [7.9, 667.0], [8.0, 667.0], [8.1, 671.0], [8.2, 672.0], [8.3, 679.0], [8.4, 679.0], [8.5, 681.0], [8.6, 681.0], [8.7, 681.0], [8.8, 682.0], [8.9, 683.0], [9.0, 685.0], [9.1, 685.0], [9.2, 686.0], [9.3, 687.0], [9.4, 687.0], [9.5, 687.0], [9.6, 694.0], [9.7, 696.0], [9.8, 696.0], [9.9, 696.0], [10.0, 699.0], [10.1, 703.0], [10.2, 703.0], [10.3, 704.0], [10.4, 708.0], [10.5, 710.0], [10.6, 710.0], [10.7, 711.0], [10.8, 713.0], [10.9, 714.0], [11.0, 714.0], [11.1, 716.0], [11.2, 717.0], [11.3, 717.0], [11.4, 717.0], [11.5, 718.0], [11.6, 722.0], [11.7, 722.0], [11.8, 722.0], [11.9, 722.0], [12.0, 725.0], [12.1, 725.0], [12.2, 727.0], [12.3, 727.0], [12.4, 727.0], [12.5, 727.0], [12.6, 732.0], [12.7, 732.0], [12.8, 737.0], [12.9, 737.0], [13.0, 740.0], [13.1, 747.0], [13.2, 748.0], [13.3, 748.0], [13.4, 749.0], [13.5, 751.0], [13.6, 751.0], [13.7, 752.0], [13.8, 753.0], [13.9, 753.0], [14.0, 753.0], [14.1, 754.0], [14.2, 754.0], [14.3, 756.0], [14.4, 756.0], [14.5, 764.0], [14.6, 764.0], [14.7, 767.0], [14.8, 767.0], [14.9, 768.0], [15.0, 770.0], [15.1, 770.0], [15.2, 772.0], [15.3, 772.0], [15.4, 773.0], [15.5, 773.0], [15.6, 779.0], [15.7, 780.0], [15.8, 780.0], [15.9, 780.0], [16.0, 782.0], [16.1, 785.0], [16.2, 787.0], [16.3, 787.0], [16.4, 789.0], [16.5, 792.0], [16.6, 792.0], [16.7, 792.0], [16.8, 793.0], [16.9, 794.0], [17.0, 794.0], [17.1, 795.0], [17.2, 797.0], [17.3, 798.0], [17.4, 798.0], [17.5, 801.0], [17.6, 803.0], [17.7, 803.0], [17.8, 803.0], [17.9, 805.0], [18.0, 809.0], [18.1, 812.0], [18.2, 812.0], [18.3, 813.0], [18.4, 814.0], [18.5, 814.0], [18.6, 815.0], [18.7, 815.0], [18.8, 816.0], [18.9, 816.0], [19.0, 818.0], [19.1, 821.0], [19.2, 824.0], [19.3, 824.0], [19.4, 825.0], [19.5, 827.0], [19.6, 829.0], [19.7, 829.0], [19.8, 832.0], [19.9, 835.0], [20.0, 835.0], [20.1, 837.0], [20.2, 840.0], [20.3, 846.0], [20.4, 846.0], [20.5, 846.0], [20.6, 850.0], [20.7, 852.0], [20.8, 852.0], [20.9, 852.0], [21.0, 854.0], [21.1, 855.0], [21.2, 855.0], [21.3, 858.0], [21.4, 862.0], [21.5, 862.0], [21.6, 862.0], [21.7, 863.0], [21.8, 863.0], [21.9, 863.0], [22.0, 865.0], [22.1, 868.0], [22.2, 871.0], [22.3, 871.0], [22.4, 872.0], [22.5, 879.0], [22.6, 882.0], [22.7, 882.0], [22.8, 883.0], [22.9, 884.0], [23.0, 884.0], [23.1, 884.0], [23.2, 887.0], [23.3, 888.0], [23.4, 888.0], [23.5, 891.0], [23.6, 893.0], [23.7, 895.0], [23.8, 895.0], [23.9, 898.0], [24.0, 901.0], [24.1, 906.0], [24.2, 906.0], [24.3, 912.0], [24.4, 914.0], [24.5, 916.0], [24.6, 916.0], [24.7, 918.0], [24.8, 918.0], [24.9, 920.0], [25.0, 920.0], [25.1, 922.0], [25.2, 922.0], [25.3, 922.0], [25.4, 925.0], [25.5, 928.0], [25.6, 930.0], [25.7, 930.0], [25.8, 931.0], [25.9, 931.0], [26.0, 933.0], [26.1, 933.0], [26.2, 939.0], [26.3, 942.0], [26.4, 944.0], [26.5, 944.0], [26.6, 945.0], [26.7, 948.0], [26.8, 948.0], [26.9, 950.0], [27.0, 952.0], [27.1, 953.0], [27.2, 953.0], [27.3, 955.0], [27.4, 971.0], [27.5, 975.0], [27.6, 975.0], [27.7, 977.0], [27.8, 977.0], [27.9, 977.0], [28.0, 977.0], [28.1, 978.0], [28.2, 980.0], [28.3, 980.0], [28.4, 980.0], [28.5, 981.0], [28.6, 981.0], [28.7, 981.0], [28.8, 981.0], [28.9, 981.0], [29.0, 982.0], [29.1, 982.0], [29.2, 982.0], [29.3, 984.0], [29.4, 985.0], [29.5, 985.0], [29.6, 986.0], [29.7, 987.0], [29.8, 988.0], [29.9, 988.0], [30.0, 989.0], [30.1, 990.0], [30.2, 990.0], [30.3, 991.0], [30.4, 993.0], [30.5, 999.0], [30.6, 999.0], [30.7, 1000.0], [30.8, 1004.0], [30.9, 1012.0], [31.0, 1012.0], [31.1, 1013.0], [31.2, 1014.0], [31.3, 1015.0], [31.4, 1015.0], [31.5, 1015.0], [31.6, 1018.0], [31.7, 1018.0], [31.8, 1020.0], [31.9, 1026.0], [32.0, 1029.0], [32.1, 1029.0], [32.2, 1031.0], [32.3, 1033.0], [32.4, 1034.0], [32.5, 1034.0], [32.6, 1036.0], [32.7, 1038.0], [32.8, 1038.0], [32.9, 1038.0], [33.0, 1042.0], [33.1, 1043.0], [33.2, 1043.0], [33.3, 1043.0], [33.4, 1044.0], [33.5, 1045.0], [33.6, 1045.0], [33.7, 1045.0], [33.8, 1048.0], [33.9, 1050.0], [34.0, 1050.0], [34.1, 1051.0], [34.2, 1053.0], [34.3, 1053.0], [34.4, 1053.0], [34.5, 1056.0], [34.6, 1056.0], [34.7, 1057.0], [34.8, 1057.0], [34.9, 1062.0], [35.0, 1066.0], [35.1, 1066.0], [35.2, 1067.0], [35.3, 1068.0], [35.4, 1072.0], [35.5, 1072.0], [35.6, 1073.0], [35.7, 1076.0], [35.8, 1077.0], [35.9, 1077.0], [36.0, 1078.0], [36.1, 1082.0], [36.2, 1086.0], [36.3, 1086.0], [36.4, 1089.0], [36.5, 1091.0], [36.6, 1091.0], [36.7, 1091.0], [36.8, 1093.0], [36.9, 1093.0], [37.0, 1093.0], [37.1, 1094.0], [37.2, 1097.0], [37.3, 1098.0], [37.4, 1098.0], [37.5, 1099.0], [37.6, 1099.0], [37.7, 1100.0], [37.8, 1100.0], [37.9, 1100.0], [38.0, 1103.0], [38.1, 1106.0], [38.2, 1106.0], [38.3, 1106.0], [38.4, 1107.0], [38.5, 1107.0], [38.6, 1109.0], [38.7, 1114.0], [38.8, 1114.0], [38.9, 1114.0], [39.0, 1116.0], [39.1, 1118.0], [39.2, 1119.0], [39.3, 1119.0], [39.4, 1119.0], [39.5, 1120.0], [39.6, 1121.0], [39.7, 1121.0], [39.8, 1126.0], [39.9, 1131.0], [40.0, 1132.0], [40.1, 1132.0], [40.2, 1134.0], [40.3, 1135.0], [40.4, 1135.0], [40.5, 1137.0], [40.6, 1138.0], [40.7, 1139.0], [40.8, 1139.0], [40.9, 1140.0], [41.0, 1143.0], [41.1, 1145.0], [41.2, 1145.0], [41.3, 1147.0], [41.4, 1148.0], [41.5, 1150.0], [41.6, 1150.0], [41.7, 1152.0], [41.8, 1154.0], [41.9, 1154.0], [42.0, 1155.0], [42.1, 1157.0], [42.2, 1159.0], [42.3, 1159.0], [42.4, 1160.0], [42.5, 1165.0], [42.6, 1167.0], [42.7, 1167.0], [42.8, 1167.0], [42.9, 1171.0], [43.0, 1171.0], [43.1, 1171.0], [43.2, 1172.0], [43.3, 1174.0], [43.4, 1174.0], [43.5, 1178.0], [43.6, 1179.0], [43.7, 1179.0], [43.8, 1179.0], [43.9, 1182.0], [44.0, 1182.0], [44.1, 1183.0], [44.2, 1183.0], [44.3, 1183.0], [44.4, 1184.0], [44.5, 1185.0], [44.6, 1185.0], [44.7, 1190.0], [44.8, 1193.0], [44.9, 1194.0], [45.0, 1194.0], [45.1, 1196.0], [45.2, 1196.0], [45.3, 1196.0], [45.4, 1199.0], [45.5, 1199.0], [45.6, 1201.0], [45.7, 1201.0], [45.8, 1201.0], [45.9, 1204.0], [46.0, 1205.0], [46.1, 1205.0], [46.2, 1205.0], [46.3, 1206.0], [46.4, 1207.0], [46.5, 1207.0], [46.6, 1207.0], [46.7, 1208.0], [46.8, 1208.0], [46.9, 1209.0], [47.0, 1209.0], [47.1, 1210.0], [47.2, 1210.0], [47.3, 1211.0], [47.4, 1212.0], [47.5, 1212.0], [47.6, 1212.0], [47.7, 1215.0], [47.8, 1218.0], [47.9, 1219.0], [48.0, 1219.0], [48.1, 1219.0], [48.2, 1220.0], [48.3, 1220.0], [48.4, 1220.0], [48.5, 1221.0], [48.6, 1222.0], [48.7, 1222.0], [48.8, 1222.0], [48.9, 1222.0], [49.0, 1225.0], [49.1, 1225.0], [49.2, 1225.0], [49.3, 1226.0], [49.4, 1226.0], [49.5, 1226.0], [49.6, 1227.0], [49.7, 1229.0], [49.8, 1229.0], [49.9, 1229.0], [50.0, 1230.0], [50.1, 1230.0], [50.2, 1230.0], [50.3, 1232.0], [50.4, 1233.0], [50.5, 1233.0], [50.6, 1233.0], [50.7, 1236.0], [50.8, 1237.0], [50.9, 1238.0], [51.0, 1238.0], [51.1, 1238.0], [51.2, 1239.0], [51.3, 1240.0], [51.4, 1240.0], [51.5, 1241.0], [51.6, 1241.0], [51.7, 1241.0], [51.8, 1241.0], [51.9, 1244.0], [52.0, 1244.0], [52.1, 1244.0], [52.2, 1245.0], [52.3, 1248.0], [52.4, 1250.0], [52.5, 1250.0], [52.6, 1252.0], [52.7, 1252.0], [52.8, 1252.0], [52.9, 1252.0], [53.0, 1253.0], [53.1, 1253.0], [53.2, 1253.0], [53.3, 1253.0], [53.4, 1254.0], [53.5, 1260.0], [53.6, 1260.0], [53.7, 1261.0], [53.8, 1263.0], [53.9, 1263.0], [54.0, 1263.0], [54.1, 1267.0], [54.2, 1268.0], [54.3, 1269.0], [54.4, 1269.0], [54.5, 1273.0], [54.6, 1274.0], [54.7, 1274.0], [54.8, 1274.0], [54.9, 1275.0], [55.0, 1277.0], [55.1, 1277.0], [55.2, 1279.0], [55.3, 1280.0], [55.4, 1283.0], [55.5, 1283.0], [55.6, 1285.0], [55.7, 1287.0], [55.8, 1287.0], [55.9, 1287.0], [56.0, 1290.0], [56.1, 1290.0], [56.2, 1291.0], [56.3, 1291.0], [56.4, 1292.0], [56.5, 1293.0], [56.6, 1294.0], [56.7, 1294.0], [56.8, 1294.0], [56.9, 1297.0], [57.0, 1297.0], [57.1, 1298.0], [57.2, 1300.0], [57.3, 1302.0], [57.4, 1302.0], [57.5, 1302.0], [57.6, 1302.0], [57.7, 1302.0], [57.8, 1302.0], [57.9, 1305.0], [58.0, 1305.0], [58.1, 1306.0], [58.2, 1306.0], [58.3, 1307.0], [58.4, 1310.0], [58.5, 1310.0], [58.6, 1311.0], [58.7, 1312.0], [58.8, 1312.0], [58.9, 1312.0], [59.0, 1312.0], [59.1, 1315.0], [59.2, 1315.0], [59.3, 1315.0], [59.4, 1316.0], [59.5, 1317.0], [59.6, 1318.0], [59.7, 1318.0], [59.8, 1318.0], [59.9, 1320.0], [60.0, 1321.0], [60.1, 1321.0], [60.2, 1321.0], [60.3, 1324.0], [60.4, 1324.0], [60.5, 1324.0], [60.6, 1325.0], [60.7, 1327.0], [60.8, 1327.0], [60.9, 1327.0], [61.0, 1329.0], [61.1, 1331.0], [61.2, 1331.0], [61.3, 1331.0], [61.4, 1332.0], [61.5, 1338.0], [61.6, 1338.0], [61.7, 1338.0], [61.8, 1338.0], [61.9, 1338.0], [62.0, 1338.0], [62.1, 1339.0], [62.2, 1340.0], [62.3, 1340.0], [62.4, 1341.0], [62.5, 1342.0], [62.6, 1342.0], [62.7, 1342.0], [62.8, 1343.0], [62.9, 1343.0], [63.0, 1345.0], [63.1, 1345.0], [63.2, 1347.0], [63.3, 1349.0], [63.4, 1349.0], [63.5, 1352.0], [63.6, 1353.0], [63.7, 1354.0], [63.8, 1354.0], [63.9, 1354.0], [64.0, 1358.0], [64.1, 1361.0], [64.2, 1361.0], [64.3, 1361.0], [64.4, 1361.0], [64.5, 1364.0], [64.6, 1364.0], [64.7, 1365.0], [64.8, 1366.0], [64.9, 1367.0], [65.0, 1367.0], [65.1, 1368.0], [65.2, 1368.0], [65.3, 1368.0], [65.4, 1370.0], [65.5, 1371.0], [65.6, 1371.0], [65.7, 1371.0], [65.8, 1371.0], [65.9, 1372.0], [66.0, 1372.0], [66.1, 1372.0], [66.2, 1374.0], [66.3, 1375.0], [66.4, 1375.0], [66.5, 1375.0], [66.6, 1377.0], [66.7, 1378.0], [66.8, 1378.0], [66.9, 1378.0], [67.0, 1380.0], [67.1, 1383.0], [67.2, 1383.0], [67.3, 1384.0], [67.4, 1387.0], [67.5, 1387.0], [67.6, 1387.0], [67.7, 1387.0], [67.8, 1390.0], [67.9, 1391.0], [68.0, 1391.0], [68.1, 1391.0], [68.2, 1392.0], [68.3, 1393.0], [68.4, 1393.0], [68.5, 1394.0], [68.6, 1395.0], [68.7, 1395.0], [68.8, 1395.0], [68.9, 1395.0], [69.0, 1395.0], [69.1, 1395.0], [69.2, 1396.0], [69.3, 1396.0], [69.4, 1397.0], [69.5, 1397.0], [69.6, 1400.0], [69.7, 1404.0], [69.8, 1405.0], [69.9, 1405.0], [70.0, 1407.0], [70.1, 1407.0], [70.2, 1407.0], [70.3, 1409.0], [70.4, 1410.0], [70.5, 1413.0], [70.6, 1413.0], [70.7, 1413.0], [70.8, 1416.0], [70.9, 1417.0], [71.0, 1417.0], [71.1, 1420.0], [71.2, 1420.0], [71.3, 1423.0], [71.4, 1423.0], [71.5, 1424.0], [71.6, 1424.0], [71.7, 1424.0], [71.8, 1425.0], [71.9, 1427.0], [72.0, 1428.0], [72.1, 1428.0], [72.2, 1428.0], [72.3, 1430.0], [72.4, 1431.0], [72.5, 1431.0], [72.6, 1432.0], [72.7, 1436.0], [72.8, 1439.0], [72.9, 1439.0], [73.0, 1441.0], [73.1, 1442.0], [73.2, 1443.0], [73.3, 1443.0], [73.4, 1444.0], [73.5, 1448.0], [73.6, 1448.0], [73.7, 1451.0], [73.8, 1451.0], [73.9, 1452.0], [74.0, 1452.0], [74.1, 1452.0], [74.2, 1453.0], [74.3, 1453.0], [74.4, 1453.0], [74.5, 1457.0], [74.6, 1457.0], [74.7, 1457.0], [74.8, 1457.0], [74.9, 1458.0], [75.0, 1460.0], [75.1, 1460.0], [75.2, 1460.0], [75.3, 1464.0], [75.4, 1464.0], [75.5, 1464.0], [75.6, 1472.0], [75.7, 1472.0], [75.8, 1474.0], [75.9, 1474.0], [76.0, 1476.0], [76.1, 1479.0], [76.2, 1481.0], [76.3, 1481.0], [76.4, 1483.0], [76.5, 1483.0], [76.6, 1487.0], [76.7, 1487.0], [76.8, 1488.0], [76.9, 1488.0], [77.0, 1488.0], [77.1, 1490.0], [77.2, 1493.0], [77.3, 1494.0], [77.4, 1494.0], [77.5, 1494.0], [77.6, 1495.0], [77.7, 1496.0], [77.8, 1496.0], [77.9, 1496.0], [78.0, 1496.0], [78.1, 1498.0], [78.2, 1498.0], [78.3, 1499.0], [78.4, 1500.0], [78.5, 1500.0], [78.6, 1501.0], [78.7, 1501.0], [78.8, 1503.0], [78.9, 1503.0], [79.0, 1504.0], [79.1, 1505.0], [79.2, 1508.0], [79.3, 1508.0], [79.4, 1509.0], [79.5, 1510.0], [79.6, 1511.0], [79.7, 1511.0], [79.8, 1512.0], [79.9, 1517.0], [80.0, 1519.0], [80.1, 1519.0], [80.2, 1519.0], [80.3, 1519.0], [80.4, 1519.0], [80.5, 1520.0], [80.6, 1527.0], [80.7, 1528.0], [80.8, 1528.0], [80.9, 1529.0], [81.0, 1531.0], [81.1, 1531.0], [81.2, 1531.0], [81.3, 1531.0], [81.4, 1535.0], [81.5, 1536.0], [81.6, 1536.0], [81.7, 1538.0], [81.8, 1539.0], [81.9, 1539.0], [82.0, 1541.0], [82.1, 1545.0], [82.2, 1545.0], [82.3, 1545.0], [82.4, 1547.0], [82.5, 1547.0], [82.6, 1548.0], [82.7, 1548.0], [82.8, 1548.0], [82.9, 1552.0], [83.0, 1554.0], [83.1, 1554.0], [83.2, 1566.0], [83.3, 1568.0], [83.4, 1568.0], [83.5, 1572.0], [83.6, 1573.0], [83.7, 1575.0], [83.8, 1575.0], [83.9, 1576.0], [84.0, 1580.0], [84.1, 1580.0], [84.2, 1580.0], [84.3, 1586.0], [84.4, 1589.0], [84.5, 1604.0], [84.6, 1604.0], [84.7, 1604.0], [84.8, 1606.0], [84.9, 1610.0], [85.0, 1610.0], [85.1, 1617.0], [85.2, 1618.0], [85.3, 1618.0], [85.4, 1618.0], [85.5, 1618.0], [85.6, 1621.0], [85.7, 1621.0], [85.8, 1623.0], [85.9, 1625.0], [86.0, 1626.0], [86.1, 1626.0], [86.2, 1628.0], [86.3, 1630.0], [86.4, 1631.0], [86.5, 1631.0], [86.6, 1636.0], [86.7, 1639.0], [86.8, 1639.0], [86.9, 1642.0], [87.0, 1645.0], [87.1, 1649.0], [87.2, 1649.0], [87.3, 1650.0], [87.4, 1651.0], [87.5, 1652.0], [87.6, 1652.0], [87.7, 1658.0], [87.8, 1659.0], [87.9, 1668.0], [88.0, 1668.0], [88.1, 1669.0], [88.2, 1673.0], [88.3, 1673.0], [88.4, 1673.0], [88.5, 1676.0], [88.6, 1679.0], [88.7, 1679.0], [88.8, 1681.0], [88.9, 1701.0], [89.0, 1702.0], [89.1, 1702.0], [89.2, 1709.0], [89.3, 1711.0], [89.4, 1717.0], [89.5, 1717.0], [89.6, 1720.0], [89.7, 1723.0], [89.8, 1746.0], [89.9, 1746.0], [90.0, 1770.0], [90.1, 1782.0], [90.2, 1782.0], [90.3, 1783.0], [90.4, 1807.0], [90.5, 1815.0], [90.6, 1815.0], [90.7, 1823.0], [90.8, 1838.0], [90.9, 1839.0], [91.0, 1839.0], [91.1, 1845.0], [91.2, 1848.0], [91.3, 1863.0], [91.4, 1863.0], [91.5, 1876.0], [91.6, 1887.0], [91.7, 1887.0], [91.8, 1901.0], [91.9, 1920.0], [92.0, 1944.0], [92.1, 1944.0], [92.2, 1968.0], [92.3, 1997.0], [92.4, 2009.0], [92.5, 2009.0], [92.6, 2021.0], [92.7, 2070.0], [92.8, 2131.0], [92.9, 2131.0], [93.0, 2177.0], [93.1, 2207.0], [93.2, 2224.0], [93.3, 2224.0], [93.4, 2253.0], [93.5, 2348.0], [93.6, 2348.0], [93.7, 2365.0], [93.8, 2404.0], [93.9, 2502.0], [94.0, 2502.0], [94.1, 2519.0], [94.2, 2583.0], [94.3, 2671.0], [94.4, 2671.0], [94.5, 2739.0], [94.6, 2754.0], [94.7, 2846.0], [94.8, 2846.0], [94.9, 2903.0], [95.0, 2939.0], [95.1, 2939.0], [95.2, 2939.0], [95.3, 3003.0], [95.4, 3012.0], [95.5, 3012.0], [95.6, 3034.0], [95.7, 3184.0], [95.8, 3219.0], [95.9, 3219.0], [96.0, 3223.0], [96.1, 3242.0], [96.2, 3242.0], [96.3, 3242.0], [96.4, 3245.0], [96.5, 3258.0], [96.6, 3273.0], [96.7, 3273.0], [96.8, 3281.0], [96.9, 3289.0], [97.0, 3289.0], [97.1, 3383.0], [97.2, 3390.0], [97.3, 3451.0], [97.4, 3451.0], [97.5, 3452.0], [97.6, 3495.0], [97.7, 3524.0], [97.8, 3524.0], [97.9, 3558.0], [98.0, 3592.0], [98.1, 3613.0], [98.2, 3613.0], [98.3, 3630.0], [98.4, 3633.0], [98.5, 3633.0], [98.6, 3668.0], [98.7, 3695.0], [98.8, 3784.0], [98.9, 3784.0], [99.0, 3792.0], [99.1, 3814.0], [99.2, 3892.0], [99.3, 3892.0], [99.4, 3960.0], [99.5, 3986.0], [99.6, 4339.0], [99.7, 4339.0], [99.8, 5866.0], [99.9, 5901.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 400.0, "maxY": 91.0, "series": [{"data": [[600.0, 51.0], [700.0, 54.0], [800.0, 48.0], [900.0, 49.0], [1000.0, 52.0], [1100.0, 58.0], [1200.0, 85.0], [1300.0, 91.0], [1400.0, 65.0], [1500.0, 45.0], [1600.0, 32.0], [1700.0, 11.0], [1800.0, 10.0], [1900.0, 5.0], [2000.0, 3.0], [2100.0, 2.0], [2200.0, 3.0], [2300.0, 2.0], [2400.0, 1.0], [2500.0, 3.0], [2600.0, 1.0], [2800.0, 1.0], [2700.0, 2.0], [2900.0, 3.0], [3000.0, 3.0], [3100.0, 1.0], [3200.0, 9.0], [3300.0, 2.0], [3400.0, 3.0], [3500.0, 3.0], [3600.0, 5.0], [3700.0, 2.0], [3800.0, 2.0], [3900.0, 2.0], [4300.0, 1.0], [5800.0, 1.0], [5900.0, 1.0], [400.0, 2.0], [500.0, 21.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 5900.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 2.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 571.0, "series": [{"data": [[0.0, 2.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 571.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 157.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 5.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 38.84933530280648, "minX": 1.60189848E12, "maxY": 40.0, "series": [{"data": [[1.60189854E12, 38.84933530280648], [1.60189848E12, 40.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60189854E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 604.0, "minX": 1.0, "maxY": 2365.0, "series": [{"data": [[33.0, 780.0], [32.0, 1029.0], [2.0, 2131.0], [35.0, 725.0], [34.0, 1496.0], [37.0, 1012.0], [36.0, 647.0], [39.0, 1679.0], [38.0, 694.0], [40.0, 1321.8160919540232], [3.0, 1997.0], [4.0, 2348.0], [5.0, 2365.0], [6.0, 1183.0], [7.0, 895.0], [8.0, 1300.0], [9.0, 1152.0], [10.0, 1294.0], [11.0, 1053.0], [12.0, 1413.0], [13.0, 1305.0], [14.0, 659.0], [15.0, 1425.0], [16.0, 717.0], [1.0, 2224.0], [17.0, 627.0], [18.0, 990.0], [19.0, 664.0], [20.0, 1033.0], [22.0, 1263.0], [23.0, 1676.0], [24.0, 630.0], [25.0, 1000.0], [26.0, 732.0], [27.0, 1503.0], [28.0, 1387.0], [29.0, 613.0], [30.0, 604.0], [31.0, 641.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[38.940136054421764, 1314.4666666666672]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 40.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 436.55, "minX": 1.60189848E12, "maxY": 1664821.8166666667, "series": [{"data": [[1.60189854E12, 1664821.8166666667], [1.60189848E12, 144694.91666666666]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60189854E12, 5086.483333333334], [1.60189848E12, 436.55]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60189854E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 1217.4460856720839, "minX": 1.60189848E12, "maxY": 2446.9310344827586, "series": [{"data": [[1.60189854E12, 1217.4460856720839], [1.60189848E12, 2446.9310344827586]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60189854E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 1216.3677991137365, "minX": 1.60189848E12, "maxY": 2445.7241379310344, "series": [{"data": [[1.60189854E12, 1216.3677991137365], [1.60189848E12, 2445.7241379310344]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60189854E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.004431314623338256, "minX": 1.60189848E12, "maxY": 12.310344827586212, "series": [{"data": [[1.60189854E12, 0.004431314623338256], [1.60189848E12, 12.310344827586212]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60189854E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 475.0, "minX": 1.60189848E12, "maxY": 5901.0, "series": [{"data": [[1.60189854E12, 5901.0], [1.60189848E12, 3960.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60189854E12, 544.6269982349872], [1.60189848E12, 559.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60189854E12, 551.2897007060051], [1.60189848E12, 559.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60189854E12, 548.3284991174936], [1.60189848E12, 559.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60189854E12, 475.0], [1.60189848E12, 559.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60189854E12, 1223.5], [1.60189848E12, 3023.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60189854E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 710.0, "minX": 9.0, "maxY": 5866.0, "series": [{"data": [[33.0, 1315.0], [32.0, 1339.5], [37.0, 995.0], [9.0, 1997.0], [40.0, 719.5], [41.0, 868.0], [42.0, 1200.0], [43.0, 1114.0], [47.0, 789.5], [46.0, 936.5], [21.0, 3034.0], [26.0, 1346.0], [27.0, 1228.0], [28.0, 1367.0], [29.0, 1406.5], [30.0, 1336.5]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[37.0, 722.0], [47.0, 710.0], [27.0, 5866.0], [28.0, 977.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 47.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 710.0, "minX": 9.0, "maxY": 5866.0, "series": [{"data": [[33.0, 1314.0], [32.0, 1339.5], [37.0, 994.5], [9.0, 1997.0], [40.0, 719.5], [41.0, 868.0], [42.0, 1199.0], [43.0, 1113.0], [47.0, 788.5], [46.0, 936.0], [21.0, 3033.0], [26.0, 1345.0], [27.0, 1227.0], [28.0, 1365.0], [29.0, 1405.0], [30.0, 1335.5]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[37.0, 722.0], [47.0, 710.0], [27.0, 5866.0], [28.0, 977.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 47.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1.6333333333333333, "minX": 1.60189848E12, "maxY": 10.616666666666667, "series": [{"data": [[1.60189854E12, 10.616666666666667], [1.60189848E12, 1.6333333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60189854E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.08333333333333333, "minX": 1.60189848E12, "maxY": 11.2, "series": [{"data": [[1.60189854E12, 11.2], [1.60189848E12, 0.9666666666666667]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.60189854E12, 0.08333333333333333]], "isOverall": false, "label": "500", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60189854E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.08333333333333333, "minX": 1.60189848E12, "maxY": 11.2, "series": [{"data": [[1.60189854E12, 11.2], [1.60189848E12, 0.9666666666666667]], "isOverall": false, "label": "HTTP Request-success", "isController": false}, {"data": [[1.60189854E12, 0.08333333333333333]], "isOverall": false, "label": "HTTP Request-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60189854E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.08333333333333333, "minX": 1.60189848E12, "maxY": 11.2, "series": [{"data": [[1.60189854E12, 11.2], [1.60189848E12, 0.9666666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.60189854E12, 0.08333333333333333]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60189854E12, "title": "Total Transactions Per Second"}},
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

