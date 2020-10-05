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
        data: {"result": {"minY": 399.0, "minX": 0.0, "maxY": 6468.0, "series": [{"data": [[0.0, 399.0], [0.1, 399.0], [0.2, 425.0], [0.3, 463.0], [0.4, 463.0], [0.5, 475.0], [0.6, 478.0], [0.7, 487.0], [0.8, 487.0], [0.9, 494.0], [1.0, 501.0], [1.1, 505.0], [1.2, 505.0], [1.3, 506.0], [1.4, 509.0], [1.5, 515.0], [1.6, 515.0], [1.7, 520.0], [1.8, 522.0], [1.9, 522.0], [2.0, 527.0], [2.1, 532.0], [2.2, 539.0], [2.3, 539.0], [2.4, 539.0], [2.5, 547.0], [2.6, 554.0], [2.7, 554.0], [2.8, 561.0], [2.9, 564.0], [3.0, 564.0], [3.1, 564.0], [3.2, 569.0], [3.3, 572.0], [3.4, 572.0], [3.5, 574.0], [3.6, 578.0], [3.7, 578.0], [3.8, 578.0], [3.9, 579.0], [4.0, 580.0], [4.1, 581.0], [4.2, 581.0], [4.3, 584.0], [4.4, 585.0], [4.5, 590.0], [4.6, 590.0], [4.7, 594.0], [4.8, 607.0], [4.9, 607.0], [5.0, 607.0], [5.1, 608.0], [5.2, 610.0], [5.3, 610.0], [5.4, 611.0], [5.5, 615.0], [5.6, 616.0], [5.7, 616.0], [5.8, 618.0], [5.9, 620.0], [6.0, 624.0], [6.1, 624.0], [6.2, 624.0], [6.3, 624.0], [6.4, 624.0], [6.5, 624.0], [6.6, 627.0], [6.7, 628.0], [6.8, 628.0], [6.9, 631.0], [7.0, 632.0], [7.1, 633.0], [7.2, 633.0], [7.3, 634.0], [7.4, 640.0], [7.5, 644.0], [7.6, 644.0], [7.7, 651.0], [7.8, 651.0], [7.9, 654.0], [8.0, 654.0], [8.1, 655.0], [8.2, 655.0], [8.3, 660.0], [8.4, 660.0], [8.5, 663.0], [8.6, 664.0], [8.7, 664.0], [8.8, 668.0], [8.9, 669.0], [9.0, 671.0], [9.1, 671.0], [9.2, 672.0], [9.3, 677.0], [9.4, 678.0], [9.5, 678.0], [9.6, 679.0], [9.7, 679.0], [9.8, 679.0], [9.9, 679.0], [10.0, 685.0], [10.1, 685.0], [10.2, 685.0], [10.3, 686.0], [10.4, 688.0], [10.5, 691.0], [10.6, 691.0], [10.7, 692.0], [10.8, 693.0], [10.9, 694.0], [11.0, 694.0], [11.1, 695.0], [11.2, 695.0], [11.3, 696.0], [11.4, 696.0], [11.5, 698.0], [11.6, 699.0], [11.7, 699.0], [11.8, 699.0], [11.9, 702.0], [12.0, 704.0], [12.1, 704.0], [12.2, 705.0], [12.3, 706.0], [12.4, 708.0], [12.5, 708.0], [12.6, 708.0], [12.7, 713.0], [12.8, 714.0], [12.9, 714.0], [13.0, 718.0], [13.1, 719.0], [13.2, 719.0], [13.3, 719.0], [13.4, 720.0], [13.5, 726.0], [13.6, 726.0], [13.7, 730.0], [13.8, 733.0], [13.9, 739.0], [14.0, 739.0], [14.1, 740.0], [14.2, 741.0], [14.3, 741.0], [14.4, 741.0], [14.5, 742.0], [14.6, 743.0], [14.7, 748.0], [14.8, 748.0], [14.9, 748.0], [15.0, 751.0], [15.1, 751.0], [15.2, 752.0], [15.3, 755.0], [15.4, 759.0], [15.5, 759.0], [15.6, 765.0], [15.7, 767.0], [15.8, 768.0], [15.9, 768.0], [16.0, 770.0], [16.1, 771.0], [16.2, 771.0], [16.3, 771.0], [16.4, 771.0], [16.5, 772.0], [16.6, 774.0], [16.7, 774.0], [16.8, 776.0], [16.9, 777.0], [17.0, 777.0], [17.1, 779.0], [17.2, 784.0], [17.3, 785.0], [17.4, 785.0], [17.5, 790.0], [17.6, 791.0], [17.7, 793.0], [17.8, 793.0], [17.9, 795.0], [18.0, 796.0], [18.1, 804.0], [18.2, 804.0], [18.3, 805.0], [18.4, 811.0], [18.5, 811.0], [18.6, 813.0], [18.7, 815.0], [18.8, 815.0], [18.9, 815.0], [19.0, 815.0], [19.1, 820.0], [19.2, 825.0], [19.3, 825.0], [19.4, 837.0], [19.5, 841.0], [19.6, 841.0], [19.7, 841.0], [19.8, 842.0], [19.9, 845.0], [20.0, 846.0], [20.1, 846.0], [20.2, 850.0], [20.3, 854.0], [20.4, 854.0], [20.5, 854.0], [20.6, 857.0], [20.7, 858.0], [20.8, 858.0], [20.9, 865.0], [21.0, 867.0], [21.1, 871.0], [21.2, 871.0], [21.3, 871.0], [21.4, 872.0], [21.5, 872.0], [21.6, 872.0], [21.7, 876.0], [21.8, 876.0], [21.9, 876.0], [22.0, 878.0], [22.1, 880.0], [22.2, 880.0], [22.3, 880.0], [22.4, 883.0], [22.5, 885.0], [22.6, 887.0], [22.7, 887.0], [22.8, 891.0], [22.9, 894.0], [23.0, 896.0], [23.1, 896.0], [23.2, 897.0], [23.3, 897.0], [23.4, 897.0], [23.5, 900.0], [23.6, 900.0], [23.7, 901.0], [23.8, 901.0], [23.9, 902.0], [24.0, 906.0], [24.1, 909.0], [24.2, 909.0], [24.3, 909.0], [24.4, 910.0], [24.5, 916.0], [24.6, 916.0], [24.7, 917.0], [24.8, 921.0], [24.9, 924.0], [25.0, 924.0], [25.1, 925.0], [25.2, 928.0], [25.3, 928.0], [25.4, 929.0], [25.5, 936.0], [25.6, 937.0], [25.7, 937.0], [25.8, 937.0], [25.9, 941.0], [26.0, 943.0], [26.1, 943.0], [26.2, 943.0], [26.3, 944.0], [26.4, 945.0], [26.5, 945.0], [26.6, 945.0], [26.7, 949.0], [26.8, 949.0], [26.9, 950.0], [27.0, 950.0], [27.1, 955.0], [27.2, 955.0], [27.3, 959.0], [27.4, 960.0], [27.5, 962.0], [27.6, 962.0], [27.7, 966.0], [27.8, 968.0], [27.9, 970.0], [28.0, 970.0], [28.1, 977.0], [28.2, 977.0], [28.3, 980.0], [28.4, 980.0], [28.5, 981.0], [28.6, 982.0], [28.7, 982.0], [28.8, 982.0], [28.9, 984.0], [29.0, 985.0], [29.1, 985.0], [29.2, 988.0], [29.3, 990.0], [29.4, 991.0], [29.5, 991.0], [29.6, 992.0], [29.7, 994.0], [29.8, 994.0], [29.9, 994.0], [30.0, 997.0], [30.1, 999.0], [30.2, 999.0], [30.3, 999.0], [30.4, 1000.0], [30.5, 1002.0], [30.6, 1002.0], [30.7, 1003.0], [30.8, 1003.0], [30.9, 1005.0], [31.0, 1005.0], [31.1, 1006.0], [31.2, 1006.0], [31.3, 1007.0], [31.4, 1007.0], [31.5, 1008.0], [31.6, 1008.0], [31.7, 1008.0], [31.8, 1010.0], [31.9, 1012.0], [32.0, 1021.0], [32.1, 1021.0], [32.2, 1024.0], [32.3, 1024.0], [32.4, 1025.0], [32.5, 1025.0], [32.6, 1030.0], [32.7, 1038.0], [32.8, 1040.0], [32.9, 1040.0], [33.0, 1041.0], [33.1, 1043.0], [33.2, 1044.0], [33.3, 1044.0], [33.4, 1044.0], [33.5, 1044.0], [33.6, 1044.0], [33.7, 1045.0], [33.8, 1045.0], [33.9, 1046.0], [34.0, 1046.0], [34.1, 1047.0], [34.2, 1051.0], [34.3, 1053.0], [34.4, 1053.0], [34.5, 1054.0], [34.6, 1055.0], [34.7, 1056.0], [34.8, 1056.0], [34.9, 1059.0], [35.0, 1059.0], [35.1, 1059.0], [35.2, 1059.0], [35.3, 1061.0], [35.4, 1062.0], [35.5, 1062.0], [35.6, 1064.0], [35.7, 1065.0], [35.8, 1065.0], [35.9, 1065.0], [36.0, 1066.0], [36.1, 1067.0], [36.2, 1067.0], [36.3, 1067.0], [36.4, 1067.0], [36.5, 1068.0], [36.6, 1072.0], [36.7, 1072.0], [36.8, 1073.0], [36.9, 1074.0], [37.0, 1074.0], [37.1, 1074.0], [37.2, 1075.0], [37.3, 1075.0], [37.4, 1075.0], [37.5, 1075.0], [37.6, 1079.0], [37.7, 1081.0], [37.8, 1081.0], [37.9, 1086.0], [38.0, 1088.0], [38.1, 1088.0], [38.2, 1088.0], [38.3, 1089.0], [38.4, 1092.0], [38.5, 1092.0], [38.6, 1093.0], [38.7, 1093.0], [38.8, 1096.0], [38.9, 1096.0], [39.0, 1100.0], [39.1, 1100.0], [39.2, 1100.0], [39.3, 1100.0], [39.4, 1100.0], [39.5, 1101.0], [39.6, 1102.0], [39.7, 1102.0], [39.8, 1102.0], [39.9, 1104.0], [40.0, 1104.0], [40.1, 1104.0], [40.2, 1105.0], [40.3, 1107.0], [40.4, 1107.0], [40.5, 1108.0], [40.6, 1109.0], [40.7, 1110.0], [40.8, 1110.0], [40.9, 1112.0], [41.0, 1115.0], [41.1, 1118.0], [41.2, 1118.0], [41.3, 1119.0], [41.4, 1121.0], [41.5, 1122.0], [41.6, 1122.0], [41.7, 1123.0], [41.8, 1124.0], [41.9, 1124.0], [42.0, 1124.0], [42.1, 1129.0], [42.2, 1130.0], [42.3, 1130.0], [42.4, 1130.0], [42.5, 1132.0], [42.6, 1136.0], [42.7, 1136.0], [42.8, 1136.0], [42.9, 1137.0], [43.0, 1138.0], [43.1, 1138.0], [43.2, 1139.0], [43.3, 1141.0], [43.4, 1141.0], [43.5, 1142.0], [43.6, 1143.0], [43.7, 1144.0], [43.8, 1144.0], [43.9, 1144.0], [44.0, 1145.0], [44.1, 1148.0], [44.2, 1148.0], [44.3, 1148.0], [44.4, 1148.0], [44.5, 1148.0], [44.6, 1148.0], [44.7, 1151.0], [44.8, 1153.0], [44.9, 1153.0], [45.0, 1153.0], [45.1, 1153.0], [45.2, 1154.0], [45.3, 1154.0], [45.4, 1156.0], [45.5, 1158.0], [45.6, 1158.0], [45.7, 1158.0], [45.8, 1158.0], [45.9, 1161.0], [46.0, 1163.0], [46.1, 1163.0], [46.2, 1163.0], [46.3, 1163.0], [46.4, 1165.0], [46.5, 1165.0], [46.6, 1166.0], [46.7, 1166.0], [46.8, 1166.0], [46.9, 1167.0], [47.0, 1169.0], [47.1, 1169.0], [47.2, 1169.0], [47.3, 1169.0], [47.4, 1170.0], [47.5, 1170.0], [47.6, 1170.0], [47.7, 1171.0], [47.8, 1171.0], [47.9, 1177.0], [48.0, 1177.0], [48.1, 1179.0], [48.2, 1180.0], [48.3, 1183.0], [48.4, 1183.0], [48.5, 1183.0], [48.6, 1185.0], [48.7, 1185.0], [48.8, 1188.0], [48.9, 1189.0], [49.0, 1192.0], [49.1, 1192.0], [49.2, 1193.0], [49.3, 1194.0], [49.4, 1195.0], [49.5, 1195.0], [49.6, 1195.0], [49.7, 1198.0], [49.8, 1200.0], [49.9, 1200.0], [50.0, 1203.0], [50.1, 1204.0], [50.2, 1204.0], [50.3, 1205.0], [50.4, 1206.0], [50.5, 1209.0], [50.6, 1209.0], [50.7, 1210.0], [50.8, 1210.0], [50.9, 1211.0], [51.0, 1211.0], [51.1, 1212.0], [51.2, 1212.0], [51.3, 1212.0], [51.4, 1212.0], [51.5, 1218.0], [51.6, 1222.0], [51.7, 1222.0], [51.8, 1225.0], [51.9, 1225.0], [52.0, 1225.0], [52.1, 1225.0], [52.2, 1225.0], [52.3, 1229.0], [52.4, 1230.0], [52.5, 1230.0], [52.6, 1233.0], [52.7, 1234.0], [52.8, 1238.0], [52.9, 1238.0], [53.0, 1238.0], [53.1, 1241.0], [53.2, 1242.0], [53.3, 1242.0], [53.4, 1245.0], [53.5, 1246.0], [53.6, 1246.0], [53.7, 1246.0], [53.8, 1246.0], [53.9, 1248.0], [54.0, 1248.0], [54.1, 1248.0], [54.2, 1248.0], [54.3, 1250.0], [54.4, 1250.0], [54.5, 1253.0], [54.6, 1254.0], [54.7, 1254.0], [54.8, 1254.0], [54.9, 1254.0], [55.0, 1256.0], [55.1, 1256.0], [55.2, 1256.0], [55.3, 1256.0], [55.4, 1257.0], [55.5, 1257.0], [55.6, 1259.0], [55.7, 1262.0], [55.8, 1262.0], [55.9, 1262.0], [56.0, 1265.0], [56.1, 1265.0], [56.2, 1267.0], [56.3, 1267.0], [56.4, 1267.0], [56.5, 1268.0], [56.6, 1272.0], [56.7, 1272.0], [56.8, 1275.0], [56.9, 1276.0], [57.0, 1276.0], [57.1, 1277.0], [57.2, 1277.0], [57.3, 1278.0], [57.4, 1278.0], [57.5, 1278.0], [57.6, 1279.0], [57.7, 1279.0], [57.8, 1279.0], [57.9, 1281.0], [58.0, 1282.0], [58.1, 1288.0], [58.2, 1288.0], [58.3, 1294.0], [58.4, 1296.0], [58.5, 1296.0], [58.6, 1297.0], [58.7, 1298.0], [58.8, 1298.0], [58.9, 1298.0], [59.0, 1299.0], [59.1, 1300.0], [59.2, 1301.0], [59.3, 1301.0], [59.4, 1302.0], [59.5, 1304.0], [59.6, 1305.0], [59.7, 1305.0], [59.8, 1305.0], [59.9, 1306.0], [60.0, 1306.0], [60.1, 1306.0], [60.2, 1307.0], [60.3, 1309.0], [60.4, 1309.0], [60.5, 1310.0], [60.6, 1316.0], [60.7, 1318.0], [60.8, 1318.0], [60.9, 1319.0], [61.0, 1320.0], [61.1, 1321.0], [61.2, 1321.0], [61.3, 1322.0], [61.4, 1322.0], [61.5, 1322.0], [61.6, 1322.0], [61.7, 1324.0], [61.8, 1325.0], [61.9, 1325.0], [62.0, 1326.0], [62.1, 1326.0], [62.2, 1329.0], [62.3, 1329.0], [62.4, 1329.0], [62.5, 1330.0], [62.6, 1332.0], [62.7, 1332.0], [62.8, 1333.0], [62.9, 1335.0], [63.0, 1336.0], [63.1, 1336.0], [63.2, 1339.0], [63.3, 1340.0], [63.4, 1340.0], [63.5, 1342.0], [63.6, 1343.0], [63.7, 1345.0], [63.8, 1345.0], [63.9, 1345.0], [64.0, 1346.0], [64.1, 1346.0], [64.2, 1346.0], [64.3, 1346.0], [64.4, 1348.0], [64.5, 1350.0], [64.6, 1350.0], [64.7, 1354.0], [64.8, 1354.0], [64.9, 1357.0], [65.0, 1357.0], [65.1, 1357.0], [65.2, 1357.0], [65.3, 1357.0], [65.4, 1357.0], [65.5, 1357.0], [65.6, 1358.0], [65.7, 1358.0], [65.8, 1359.0], [65.9, 1359.0], [66.0, 1361.0], [66.1, 1361.0], [66.2, 1362.0], [66.3, 1363.0], [66.4, 1363.0], [66.5, 1363.0], [66.6, 1363.0], [66.7, 1364.0], [66.8, 1364.0], [66.9, 1364.0], [67.0, 1366.0], [67.1, 1367.0], [67.2, 1367.0], [67.3, 1369.0], [67.4, 1369.0], [67.5, 1371.0], [67.6, 1371.0], [67.7, 1373.0], [67.8, 1373.0], [67.9, 1375.0], [68.0, 1375.0], [68.1, 1376.0], [68.2, 1378.0], [68.3, 1379.0], [68.4, 1379.0], [68.5, 1380.0], [68.6, 1380.0], [68.7, 1380.0], [68.8, 1381.0], [68.9, 1381.0], [69.0, 1383.0], [69.1, 1383.0], [69.2, 1384.0], [69.3, 1385.0], [69.4, 1387.0], [69.5, 1387.0], [69.6, 1387.0], [69.7, 1389.0], [69.8, 1389.0], [69.9, 1389.0], [70.0, 1393.0], [70.1, 1394.0], [70.2, 1394.0], [70.3, 1395.0], [70.4, 1396.0], [70.5, 1397.0], [70.6, 1397.0], [70.7, 1397.0], [70.8, 1402.0], [70.9, 1403.0], [71.0, 1403.0], [71.1, 1403.0], [71.2, 1403.0], [71.3, 1403.0], [71.4, 1403.0], [71.5, 1405.0], [71.6, 1405.0], [71.7, 1405.0], [71.8, 1406.0], [71.9, 1408.0], [72.0, 1408.0], [72.1, 1408.0], [72.2, 1408.0], [72.3, 1409.0], [72.4, 1410.0], [72.5, 1410.0], [72.6, 1412.0], [72.7, 1413.0], [72.8, 1413.0], [72.9, 1413.0], [73.0, 1415.0], [73.1, 1417.0], [73.2, 1418.0], [73.3, 1418.0], [73.4, 1418.0], [73.5, 1422.0], [73.6, 1422.0], [73.7, 1423.0], [73.8, 1423.0], [73.9, 1427.0], [74.0, 1427.0], [74.1, 1428.0], [74.2, 1431.0], [74.3, 1431.0], [74.4, 1431.0], [74.5, 1432.0], [74.6, 1435.0], [74.7, 1436.0], [74.8, 1436.0], [74.9, 1440.0], [75.0, 1440.0], [75.1, 1440.0], [75.2, 1443.0], [75.3, 1443.0], [75.4, 1444.0], [75.5, 1444.0], [75.6, 1444.0], [75.7, 1445.0], [75.8, 1447.0], [75.9, 1447.0], [76.0, 1448.0], [76.1, 1452.0], [76.2, 1452.0], [76.3, 1452.0], [76.4, 1452.0], [76.5, 1454.0], [76.6, 1455.0], [76.7, 1455.0], [76.8, 1455.0], [76.9, 1455.0], [77.0, 1455.0], [77.1, 1460.0], [77.2, 1465.0], [77.3, 1466.0], [77.4, 1466.0], [77.5, 1467.0], [77.6, 1472.0], [77.7, 1473.0], [77.8, 1473.0], [77.9, 1473.0], [78.0, 1473.0], [78.1, 1474.0], [78.2, 1474.0], [78.3, 1475.0], [78.4, 1475.0], [78.5, 1475.0], [78.6, 1476.0], [78.7, 1483.0], [78.8, 1485.0], [78.9, 1485.0], [79.0, 1490.0], [79.1, 1494.0], [79.2, 1495.0], [79.3, 1495.0], [79.4, 1497.0], [79.5, 1498.0], [79.6, 1498.0], [79.7, 1498.0], [79.8, 1499.0], [79.9, 1501.0], [80.0, 1502.0], [80.1, 1502.0], [80.2, 1503.0], [80.3, 1504.0], [80.4, 1504.0], [80.5, 1505.0], [80.6, 1508.0], [80.7, 1509.0], [80.8, 1509.0], [80.9, 1510.0], [81.0, 1510.0], [81.1, 1510.0], [81.2, 1510.0], [81.3, 1510.0], [81.4, 1513.0], [81.5, 1516.0], [81.6, 1516.0], [81.7, 1517.0], [81.8, 1518.0], [81.9, 1518.0], [82.0, 1522.0], [82.1, 1523.0], [82.2, 1526.0], [82.3, 1526.0], [82.4, 1527.0], [82.5, 1534.0], [82.6, 1535.0], [82.7, 1535.0], [82.8, 1536.0], [82.9, 1537.0], [83.0, 1539.0], [83.1, 1539.0], [83.2, 1539.0], [83.3, 1540.0], [83.4, 1540.0], [83.5, 1548.0], [83.6, 1550.0], [83.7, 1554.0], [83.8, 1554.0], [83.9, 1554.0], [84.0, 1556.0], [84.1, 1562.0], [84.2, 1562.0], [84.3, 1564.0], [84.4, 1566.0], [84.5, 1572.0], [84.6, 1572.0], [84.7, 1574.0], [84.8, 1574.0], [84.9, 1579.0], [85.0, 1579.0], [85.1, 1586.0], [85.2, 1587.0], [85.3, 1587.0], [85.4, 1591.0], [85.5, 1593.0], [85.6, 1594.0], [85.7, 1594.0], [85.8, 1598.0], [85.9, 1602.0], [86.0, 1602.0], [86.1, 1602.0], [86.2, 1603.0], [86.3, 1606.0], [86.4, 1611.0], [86.5, 1611.0], [86.6, 1616.0], [86.7, 1622.0], [86.8, 1622.0], [86.9, 1629.0], [87.0, 1629.0], [87.1, 1630.0], [87.2, 1630.0], [87.3, 1631.0], [87.4, 1632.0], [87.5, 1634.0], [87.6, 1634.0], [87.7, 1637.0], [87.8, 1656.0], [87.9, 1662.0], [88.0, 1662.0], [88.1, 1666.0], [88.2, 1669.0], [88.3, 1678.0], [88.4, 1678.0], [88.5, 1679.0], [88.6, 1687.0], [88.7, 1687.0], [88.8, 1695.0], [88.9, 1701.0], [89.0, 1709.0], [89.1, 1709.0], [89.2, 1711.0], [89.3, 1713.0], [89.4, 1722.0], [89.5, 1722.0], [89.6, 1726.0], [89.7, 1737.0], [89.8, 1747.0], [89.9, 1747.0], [90.0, 1748.0], [90.1, 1749.0], [90.2, 1749.0], [90.3, 1768.0], [90.4, 1788.0], [90.5, 1790.0], [90.6, 1790.0], [90.7, 1790.0], [90.8, 1807.0], [90.9, 1808.0], [91.0, 1808.0], [91.1, 1812.0], [91.2, 1827.0], [91.3, 1832.0], [91.4, 1832.0], [91.5, 1848.0], [91.6, 1855.0], [91.7, 1855.0], [91.8, 1856.0], [91.9, 1878.0], [92.0, 1879.0], [92.1, 1879.0], [92.2, 1893.0], [92.3, 1895.0], [92.4, 1925.0], [92.5, 1925.0], [92.6, 1934.0], [92.7, 1970.0], [92.8, 1970.0], [92.9, 1970.0], [93.0, 1988.0], [93.1, 2026.0], [93.2, 2034.0], [93.3, 2034.0], [93.4, 2137.0], [93.5, 2248.0], [93.6, 2248.0], [93.7, 2314.0], [93.8, 2318.0], [93.9, 2332.0], [94.0, 2332.0], [94.1, 2380.0], [94.2, 2389.0], [94.3, 2665.0], [94.4, 2665.0], [94.5, 2800.0], [94.6, 2811.0], [94.7, 2814.0], [94.8, 2814.0], [94.9, 2824.0], [95.0, 2863.0], [95.1, 2863.0], [95.2, 2918.0], [95.3, 2928.0], [95.4, 3001.0], [95.5, 3001.0], [95.6, 3020.0], [95.7, 3037.0], [95.8, 3057.0], [95.9, 3057.0], [96.0, 3094.0], [96.1, 3114.0], [96.2, 3127.0], [96.3, 3127.0], [96.4, 3195.0], [96.5, 3263.0], [96.6, 3321.0], [96.7, 3321.0], [96.8, 3338.0], [96.9, 3344.0], [97.0, 3344.0], [97.1, 3344.0], [97.2, 3383.0], [97.3, 3445.0], [97.4, 3445.0], [97.5, 3446.0], [97.6, 3448.0], [97.7, 3484.0], [97.8, 3484.0], [97.9, 3509.0], [98.0, 3513.0], [98.1, 3546.0], [98.2, 3546.0], [98.3, 3568.0], [98.4, 3579.0], [98.5, 3579.0], [98.6, 3585.0], [98.7, 3608.0], [98.8, 3649.0], [98.9, 3649.0], [99.0, 3658.0], [99.1, 3721.0], [99.2, 3803.0], [99.3, 3803.0], [99.4, 4063.0], [99.5, 4151.0], [99.6, 4385.0], [99.7, 4385.0], [99.8, 6409.0], [99.9, 6468.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 300.0, "maxY": 86.0, "series": [{"data": [[600.0, 52.0], [700.0, 46.0], [800.0, 39.0], [900.0, 51.0], [1000.0, 63.0], [1100.0, 80.0], [1200.0, 68.0], [1300.0, 86.0], [1400.0, 67.0], [1500.0, 44.0], [1600.0, 22.0], [1700.0, 14.0], [1800.0, 12.0], [1900.0, 5.0], [2000.0, 2.0], [2100.0, 1.0], [2300.0, 5.0], [2200.0, 1.0], [2600.0, 1.0], [2800.0, 5.0], [2900.0, 2.0], [3000.0, 5.0], [3100.0, 3.0], [3200.0, 1.0], [3300.0, 5.0], [3400.0, 4.0], [3500.0, 6.0], [3600.0, 3.0], [3700.0, 1.0], [3800.0, 1.0], [4000.0, 1.0], [4300.0, 1.0], [4100.0, 1.0], [300.0, 1.0], [6400.0, 2.0], [400.0, 6.0], [500.0, 28.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 6400.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 3.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 577.0, "series": [{"data": [[0.0, 7.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 577.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 148.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 3.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 38.94013605442178, "minX": 1.60189824E12, "maxY": 38.94013605442178, "series": [{"data": [[1.60189824E12, 38.94013605442178]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60189824E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 505.0, "minX": 1.0, "maxY": 2389.0, "series": [{"data": [[33.0, 624.0], [32.0, 572.0], [2.0, 1855.0], [35.0, 977.0], [34.0, 695.0], [37.0, 685.0], [36.0, 578.0], [39.0, 708.0], [38.0, 1722.0], [40.0, 1302.2658045977016], [3.0, 1934.0], [4.0, 2380.0], [5.0, 2248.0], [6.0, 1306.0], [7.0, 900.0], [8.0, 1554.0], [10.0, 1182.5], [11.0, 1267.0], [12.0, 1086.0], [13.0, 1406.0], [14.0, 1678.0], [15.0, 624.0], [16.0, 1167.0], [1.0, 2389.0], [17.0, 1279.0], [18.0, 887.0], [19.0, 651.0], [20.0, 1021.0], [21.0, 608.0], [22.0, 505.0], [23.0, 1321.0], [24.0, 688.0], [25.0, 1121.0], [26.0, 1499.0], [27.0, 1574.0], [28.0, 672.0], [29.0, 627.0], [30.0, 713.0], [31.0, 1384.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[38.94013605442178, 1294.7578231292518]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 40.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 5523.033333333334, "minX": 1.60189824E12, "maxY": 1829432.8666666667, "series": [{"data": [[1.60189824E12, 1829432.8666666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60189824E12, 5523.033333333334]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60189824E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 1294.7578231292518, "minX": 1.60189824E12, "maxY": 1294.7578231292518, "series": [{"data": [[1.60189824E12, 1294.7578231292518]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60189824E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 1293.678911564625, "minX": 1.60189824E12, "maxY": 1293.678911564625, "series": [{"data": [[1.60189824E12, 1293.678911564625]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60189824E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.9210884353741491, "minX": 1.60189824E12, "maxY": 0.9210884353741491, "series": [{"data": [[1.60189824E12, 0.9210884353741491]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60189824E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 399.0, "minX": 1.60189824E12, "maxY": 6468.0, "series": [{"data": [[1.60189824E12, 6468.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60189824E12, 491.1789987766743]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60189824E12, 495.7969004893303]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60189824E12, 493.74449938833715]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60189824E12, 399.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60189824E12, 1203.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60189824E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 615.0, "minX": 2.0, "maxY": 3120.5, "series": [{"data": [[2.0, 2601.5], [32.0, 1398.5], [34.0, 3120.5], [39.0, 710.5], [40.0, 868.0], [41.0, 1262.0], [47.0, 872.0], [22.0, 1185.5], [26.0, 1309.0], [27.0, 1368.5], [28.0, 1260.5], [29.0, 1371.0], [30.0, 1027.5], [31.0, 1329.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[39.0, 1045.0], [47.0, 615.0], [26.0, 1357.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 47.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 615.0, "minX": 2.0, "maxY": 3119.5, "series": [{"data": [[2.0, 2599.5], [32.0, 1397.0], [34.0, 3119.5], [39.0, 710.0], [40.0, 865.5], [41.0, 1260.0], [47.0, 871.0], [22.0, 1183.0], [26.0, 1308.0], [27.0, 1367.0], [28.0, 1259.5], [29.0, 1370.0], [30.0, 1026.5], [31.0, 1328.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[39.0, 1045.0], [47.0, 615.0], [26.0, 1357.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 47.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 12.25, "minX": 1.60189824E12, "maxY": 12.25, "series": [{"data": [[1.60189824E12, 12.25]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60189824E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.05, "minX": 1.60189824E12, "maxY": 12.2, "series": [{"data": [[1.60189824E12, 12.2]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.60189824E12, 0.05]], "isOverall": false, "label": "500", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60189824E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.05, "minX": 1.60189824E12, "maxY": 12.2, "series": [{"data": [[1.60189824E12, 12.2]], "isOverall": false, "label": "HTTP Request-success", "isController": false}, {"data": [[1.60189824E12, 0.05]], "isOverall": false, "label": "HTTP Request-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60189824E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.05, "minX": 1.60189824E12, "maxY": 12.2, "series": [{"data": [[1.60189824E12, 12.2]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.60189824E12, 0.05]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60189824E12, "title": "Total Transactions Per Second"}},
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

