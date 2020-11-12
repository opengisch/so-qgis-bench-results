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
        data: {"result": {"minY": 237.0, "minX": 0.0, "maxY": 5308.0, "series": [{"data": [[0.0, 237.0], [0.1, 237.0], [0.2, 292.0], [0.3, 363.0], [0.4, 363.0], [0.5, 383.0], [0.6, 391.0], [0.7, 396.0], [0.8, 396.0], [0.9, 397.0], [1.0, 416.0], [1.1, 423.0], [1.2, 423.0], [1.3, 430.0], [1.4, 435.0], [1.5, 438.0], [1.6, 438.0], [1.7, 443.0], [1.8, 447.0], [1.9, 447.0], [2.0, 450.0], [2.1, 455.0], [2.2, 456.0], [2.3, 456.0], [2.4, 472.0], [2.5, 474.0], [2.6, 486.0], [2.7, 486.0], [2.8, 492.0], [2.9, 501.0], [3.0, 511.0], [3.1, 511.0], [3.2, 529.0], [3.3, 534.0], [3.4, 534.0], [3.5, 543.0], [3.6, 547.0], [3.7, 551.0], [3.8, 551.0], [3.9, 561.0], [4.0, 563.0], [4.1, 570.0], [4.2, 570.0], [4.3, 574.0], [4.4, 576.0], [4.5, 578.0], [4.6, 578.0], [4.7, 585.0], [4.8, 588.0], [4.9, 591.0], [5.0, 591.0], [5.1, 594.0], [5.2, 595.0], [5.3, 595.0], [5.4, 605.0], [5.5, 609.0], [5.6, 616.0], [5.7, 616.0], [5.8, 621.0], [5.9, 631.0], [6.0, 635.0], [6.1, 635.0], [6.2, 637.0], [6.3, 640.0], [6.4, 644.0], [6.5, 644.0], [6.6, 647.0], [6.7, 648.0], [6.8, 648.0], [6.9, 651.0], [7.0, 655.0], [7.1, 656.0], [7.2, 656.0], [7.3, 656.0], [7.4, 656.0], [7.5, 657.0], [7.6, 657.0], [7.7, 657.0], [7.8, 659.0], [7.9, 659.0], [8.0, 659.0], [8.1, 659.0], [8.2, 663.0], [8.3, 664.0], [8.4, 664.0], [8.5, 665.0], [8.6, 669.0], [8.7, 669.0], [8.8, 671.0], [8.9, 671.0], [9.0, 671.0], [9.1, 671.0], [9.2, 674.0], [9.3, 675.0], [9.4, 675.0], [9.5, 675.0], [9.6, 677.0], [9.7, 678.0], [9.8, 678.0], [9.9, 678.0], [10.0, 679.0], [10.1, 680.0], [10.2, 680.0], [10.3, 682.0], [10.4, 684.0], [10.5, 685.0], [10.6, 685.0], [10.7, 685.0], [10.8, 686.0], [10.9, 688.0], [11.0, 688.0], [11.1, 688.0], [11.2, 689.0], [11.3, 689.0], [11.4, 689.0], [11.5, 689.0], [11.6, 689.0], [11.7, 689.0], [11.8, 689.0], [11.9, 691.0], [12.0, 694.0], [12.1, 694.0], [12.2, 696.0], [12.3, 696.0], [12.4, 697.0], [12.5, 697.0], [12.6, 697.0], [12.7, 699.0], [12.8, 701.0], [12.9, 701.0], [13.0, 702.0], [13.1, 707.0], [13.2, 708.0], [13.3, 708.0], [13.4, 711.0], [13.5, 714.0], [13.6, 714.0], [13.7, 714.0], [13.8, 716.0], [13.9, 717.0], [14.0, 717.0], [14.1, 718.0], [14.2, 718.0], [14.3, 718.0], [14.4, 718.0], [14.5, 718.0], [14.6, 729.0], [14.7, 729.0], [14.8, 729.0], [14.9, 730.0], [15.0, 731.0], [15.1, 731.0], [15.2, 731.0], [15.3, 734.0], [15.4, 736.0], [15.5, 736.0], [15.6, 738.0], [15.7, 740.0], [15.8, 741.0], [15.9, 741.0], [16.0, 741.0], [16.1, 742.0], [16.2, 747.0], [16.3, 747.0], [16.4, 749.0], [16.5, 750.0], [16.6, 751.0], [16.7, 751.0], [16.8, 753.0], [16.9, 758.0], [17.0, 758.0], [17.1, 760.0], [17.2, 761.0], [17.3, 762.0], [17.4, 762.0], [17.5, 762.0], [17.6, 764.0], [17.7, 767.0], [17.8, 767.0], [17.9, 767.0], [18.0, 768.0], [18.1, 769.0], [18.2, 769.0], [18.3, 772.0], [18.4, 772.0], [18.5, 772.0], [18.6, 773.0], [18.7, 776.0], [18.8, 776.0], [18.9, 776.0], [19.0, 776.0], [19.1, 779.0], [19.2, 780.0], [19.3, 780.0], [19.4, 783.0], [19.5, 789.0], [19.6, 791.0], [19.7, 791.0], [19.8, 791.0], [19.9, 796.0], [20.0, 802.0], [20.1, 802.0], [20.2, 804.0], [20.3, 806.0], [20.4, 806.0], [20.5, 808.0], [20.6, 808.0], [20.7, 809.0], [20.8, 809.0], [20.9, 812.0], [21.0, 813.0], [21.1, 815.0], [21.2, 815.0], [21.3, 816.0], [21.4, 817.0], [21.5, 817.0], [21.6, 817.0], [21.7, 817.0], [21.8, 828.0], [21.9, 828.0], [22.0, 829.0], [22.1, 834.0], [22.2, 834.0], [22.3, 834.0], [22.4, 836.0], [22.5, 839.0], [22.6, 844.0], [22.7, 844.0], [22.8, 845.0], [22.9, 848.0], [23.0, 848.0], [23.1, 848.0], [23.2, 849.0], [23.3, 850.0], [23.4, 850.0], [23.5, 850.0], [23.6, 853.0], [23.7, 854.0], [23.8, 854.0], [23.9, 854.0], [24.0, 855.0], [24.1, 862.0], [24.2, 862.0], [24.3, 866.0], [24.4, 871.0], [24.5, 873.0], [24.6, 873.0], [24.7, 876.0], [24.8, 877.0], [24.9, 878.0], [25.0, 878.0], [25.1, 880.0], [25.2, 881.0], [25.3, 881.0], [25.4, 882.0], [25.5, 883.0], [25.6, 885.0], [25.7, 885.0], [25.8, 889.0], [25.9, 893.0], [26.0, 896.0], [26.1, 896.0], [26.2, 897.0], [26.3, 904.0], [26.4, 906.0], [26.5, 906.0], [26.6, 907.0], [26.7, 908.0], [26.8, 908.0], [26.9, 910.0], [27.0, 912.0], [27.1, 912.0], [27.2, 912.0], [27.3, 914.0], [27.4, 914.0], [27.5, 914.0], [27.6, 914.0], [27.7, 915.0], [27.8, 918.0], [27.9, 919.0], [28.0, 919.0], [28.1, 920.0], [28.2, 922.0], [28.3, 927.0], [28.4, 927.0], [28.5, 929.0], [28.6, 929.0], [28.7, 929.0], [28.8, 933.0], [28.9, 934.0], [29.0, 936.0], [29.1, 936.0], [29.2, 945.0], [29.3, 945.0], [29.4, 947.0], [29.5, 947.0], [29.6, 947.0], [29.7, 948.0], [29.8, 948.0], [29.9, 948.0], [30.0, 951.0], [30.1, 951.0], [30.2, 951.0], [30.3, 951.0], [30.4, 954.0], [30.5, 954.0], [30.6, 954.0], [30.7, 958.0], [30.8, 960.0], [30.9, 961.0], [31.0, 961.0], [31.1, 962.0], [31.2, 963.0], [31.3, 964.0], [31.4, 964.0], [31.5, 967.0], [31.6, 969.0], [31.7, 969.0], [31.8, 971.0], [31.9, 975.0], [32.0, 975.0], [32.1, 975.0], [32.2, 976.0], [32.3, 977.0], [32.4, 978.0], [32.5, 978.0], [32.6, 980.0], [32.7, 980.0], [32.8, 981.0], [32.9, 981.0], [33.0, 984.0], [33.1, 985.0], [33.2, 987.0], [33.3, 987.0], [33.4, 989.0], [33.5, 993.0], [33.6, 993.0], [33.7, 995.0], [33.8, 1002.0], [33.9, 1002.0], [34.0, 1002.0], [34.1, 1004.0], [34.2, 1005.0], [34.3, 1006.0], [34.4, 1006.0], [34.5, 1007.0], [34.6, 1008.0], [34.7, 1010.0], [34.8, 1010.0], [34.9, 1011.0], [35.0, 1012.0], [35.1, 1012.0], [35.2, 1015.0], [35.3, 1016.0], [35.4, 1022.0], [35.5, 1022.0], [35.6, 1027.0], [35.7, 1030.0], [35.8, 1033.0], [35.9, 1033.0], [36.0, 1034.0], [36.1, 1036.0], [36.2, 1037.0], [36.3, 1037.0], [36.4, 1037.0], [36.5, 1048.0], [36.6, 1050.0], [36.7, 1050.0], [36.8, 1050.0], [36.9, 1050.0], [37.0, 1050.0], [37.1, 1051.0], [37.2, 1055.0], [37.3, 1056.0], [37.4, 1056.0], [37.5, 1058.0], [37.6, 1058.0], [37.7, 1059.0], [37.8, 1059.0], [37.9, 1062.0], [38.0, 1062.0], [38.1, 1063.0], [38.2, 1063.0], [38.3, 1066.0], [38.4, 1068.0], [38.5, 1068.0], [38.6, 1069.0], [38.7, 1072.0], [38.8, 1072.0], [38.9, 1072.0], [39.0, 1072.0], [39.1, 1077.0], [39.2, 1078.0], [39.3, 1078.0], [39.4, 1081.0], [39.5, 1081.0], [39.6, 1083.0], [39.7, 1083.0], [39.8, 1087.0], [39.9, 1087.0], [40.0, 1088.0], [40.1, 1088.0], [40.2, 1091.0], [40.3, 1093.0], [40.4, 1093.0], [40.5, 1094.0], [40.6, 1094.0], [40.7, 1096.0], [40.8, 1096.0], [40.9, 1098.0], [41.0, 1099.0], [41.1, 1101.0], [41.2, 1101.0], [41.3, 1101.0], [41.4, 1102.0], [41.5, 1103.0], [41.6, 1103.0], [41.7, 1104.0], [41.8, 1104.0], [41.9, 1104.0], [42.0, 1107.0], [42.1, 1110.0], [42.2, 1112.0], [42.3, 1112.0], [42.4, 1112.0], [42.5, 1112.0], [42.6, 1115.0], [42.7, 1115.0], [42.8, 1119.0], [42.9, 1119.0], [43.0, 1121.0], [43.1, 1121.0], [43.2, 1122.0], [43.3, 1122.0], [43.4, 1122.0], [43.5, 1127.0], [43.6, 1131.0], [43.7, 1131.0], [43.8, 1131.0], [43.9, 1134.0], [44.0, 1134.0], [44.1, 1137.0], [44.2, 1137.0], [44.3, 1137.0], [44.4, 1139.0], [44.5, 1140.0], [44.6, 1140.0], [44.7, 1141.0], [44.8, 1144.0], [44.9, 1145.0], [45.0, 1145.0], [45.1, 1145.0], [45.2, 1146.0], [45.3, 1146.0], [45.4, 1149.0], [45.5, 1150.0], [45.6, 1151.0], [45.7, 1151.0], [45.8, 1156.0], [45.9, 1157.0], [46.0, 1157.0], [46.1, 1157.0], [46.2, 1158.0], [46.3, 1158.0], [46.4, 1159.0], [46.5, 1159.0], [46.6, 1160.0], [46.7, 1162.0], [46.8, 1162.0], [46.9, 1163.0], [47.0, 1163.0], [47.1, 1163.0], [47.2, 1163.0], [47.3, 1163.0], [47.4, 1165.0], [47.5, 1167.0], [47.6, 1167.0], [47.7, 1170.0], [47.8, 1170.0], [47.9, 1171.0], [48.0, 1171.0], [48.1, 1172.0], [48.2, 1172.0], [48.3, 1174.0], [48.4, 1174.0], [48.5, 1174.0], [48.6, 1177.0], [48.7, 1177.0], [48.8, 1178.0], [48.9, 1179.0], [49.0, 1180.0], [49.1, 1180.0], [49.2, 1182.0], [49.3, 1182.0], [49.4, 1182.0], [49.5, 1182.0], [49.6, 1184.0], [49.7, 1187.0], [49.8, 1187.0], [49.9, 1187.0], [50.0, 1188.0], [50.1, 1189.0], [50.2, 1189.0], [50.3, 1192.0], [50.4, 1194.0], [50.5, 1195.0], [50.6, 1195.0], [50.7, 1196.0], [50.8, 1199.0], [50.9, 1200.0], [51.0, 1200.0], [51.1, 1201.0], [51.2, 1204.0], [51.3, 1217.0], [51.4, 1217.0], [51.5, 1219.0], [51.6, 1219.0], [51.7, 1219.0], [51.8, 1219.0], [51.9, 1221.0], [52.0, 1224.0], [52.1, 1224.0], [52.2, 1224.0], [52.3, 1225.0], [52.4, 1225.0], [52.5, 1225.0], [52.6, 1228.0], [52.7, 1230.0], [52.8, 1230.0], [52.9, 1230.0], [53.0, 1231.0], [53.1, 1231.0], [53.2, 1232.0], [53.3, 1232.0], [53.4, 1235.0], [53.5, 1235.0], [53.6, 1235.0], [53.7, 1237.0], [53.8, 1237.0], [53.9, 1238.0], [54.0, 1238.0], [54.1, 1239.0], [54.2, 1241.0], [54.3, 1242.0], [54.4, 1242.0], [54.5, 1242.0], [54.6, 1243.0], [54.7, 1244.0], [54.8, 1244.0], [54.9, 1244.0], [55.0, 1247.0], [55.1, 1247.0], [55.2, 1252.0], [55.3, 1252.0], [55.4, 1253.0], [55.5, 1253.0], [55.6, 1254.0], [55.7, 1256.0], [55.8, 1256.0], [55.9, 1256.0], [56.0, 1258.0], [56.1, 1261.0], [56.2, 1262.0], [56.3, 1262.0], [56.4, 1266.0], [56.5, 1267.0], [56.6, 1268.0], [56.7, 1268.0], [56.8, 1271.0], [56.9, 1273.0], [57.0, 1273.0], [57.1, 1273.0], [57.2, 1276.0], [57.3, 1276.0], [57.4, 1276.0], [57.5, 1280.0], [57.6, 1282.0], [57.7, 1289.0], [57.8, 1289.0], [57.9, 1290.0], [58.0, 1291.0], [58.1, 1291.0], [58.2, 1291.0], [58.3, 1292.0], [58.4, 1292.0], [58.5, 1292.0], [58.6, 1292.0], [58.7, 1294.0], [58.8, 1295.0], [58.9, 1295.0], [59.0, 1295.0], [59.1, 1300.0], [59.2, 1301.0], [59.3, 1301.0], [59.4, 1303.0], [59.5, 1304.0], [59.6, 1312.0], [59.7, 1312.0], [59.8, 1312.0], [59.9, 1313.0], [60.0, 1315.0], [60.1, 1315.0], [60.2, 1317.0], [60.3, 1319.0], [60.4, 1319.0], [60.5, 1321.0], [60.6, 1325.0], [60.7, 1326.0], [60.8, 1326.0], [60.9, 1331.0], [61.0, 1331.0], [61.1, 1331.0], [61.2, 1331.0], [61.3, 1334.0], [61.4, 1334.0], [61.5, 1336.0], [61.6, 1336.0], [61.7, 1337.0], [61.8, 1339.0], [61.9, 1339.0], [62.0, 1339.0], [62.1, 1346.0], [62.2, 1347.0], [62.3, 1347.0], [62.4, 1349.0], [62.5, 1349.0], [62.6, 1351.0], [62.7, 1351.0], [62.8, 1353.0], [62.9, 1355.0], [63.0, 1355.0], [63.1, 1355.0], [63.2, 1356.0], [63.3, 1357.0], [63.4, 1357.0], [63.5, 1357.0], [63.6, 1359.0], [63.7, 1362.0], [63.8, 1362.0], [63.9, 1363.0], [64.0, 1365.0], [64.1, 1369.0], [64.2, 1369.0], [64.3, 1370.0], [64.4, 1371.0], [64.5, 1373.0], [64.6, 1373.0], [64.7, 1375.0], [64.8, 1382.0], [64.9, 1384.0], [65.0, 1384.0], [65.1, 1385.0], [65.2, 1386.0], [65.3, 1386.0], [65.4, 1386.0], [65.5, 1389.0], [65.6, 1392.0], [65.7, 1392.0], [65.8, 1397.0], [65.9, 1398.0], [66.0, 1399.0], [66.1, 1399.0], [66.2, 1401.0], [66.3, 1405.0], [66.4, 1407.0], [66.5, 1407.0], [66.6, 1407.0], [66.7, 1408.0], [66.8, 1408.0], [66.9, 1410.0], [67.0, 1411.0], [67.1, 1414.0], [67.2, 1414.0], [67.3, 1418.0], [67.4, 1418.0], [67.5, 1419.0], [67.6, 1419.0], [67.7, 1420.0], [67.8, 1422.0], [67.9, 1423.0], [68.0, 1423.0], [68.1, 1425.0], [68.2, 1426.0], [68.3, 1428.0], [68.4, 1428.0], [68.5, 1429.0], [68.6, 1431.0], [68.7, 1431.0], [68.8, 1431.0], [68.9, 1432.0], [69.0, 1432.0], [69.1, 1432.0], [69.2, 1440.0], [69.3, 1442.0], [69.4, 1452.0], [69.5, 1452.0], [69.6, 1455.0], [69.7, 1455.0], [69.8, 1456.0], [69.9, 1456.0], [70.0, 1462.0], [70.1, 1463.0], [70.2, 1463.0], [70.3, 1465.0], [70.4, 1466.0], [70.5, 1467.0], [70.6, 1467.0], [70.7, 1467.0], [70.8, 1471.0], [70.9, 1473.0], [71.0, 1473.0], [71.1, 1473.0], [71.2, 1474.0], [71.3, 1477.0], [71.4, 1477.0], [71.5, 1480.0], [71.6, 1483.0], [71.7, 1483.0], [71.8, 1486.0], [71.9, 1489.0], [72.0, 1491.0], [72.1, 1491.0], [72.2, 1496.0], [72.3, 1497.0], [72.4, 1498.0], [72.5, 1498.0], [72.6, 1500.0], [72.7, 1503.0], [72.8, 1505.0], [72.9, 1505.0], [73.0, 1507.0], [73.1, 1507.0], [73.2, 1508.0], [73.3, 1508.0], [73.4, 1514.0], [73.5, 1516.0], [73.6, 1516.0], [73.7, 1518.0], [73.8, 1519.0], [73.9, 1519.0], [74.0, 1519.0], [74.1, 1520.0], [74.2, 1521.0], [74.3, 1521.0], [74.4, 1521.0], [74.5, 1523.0], [74.6, 1523.0], [74.7, 1524.0], [74.8, 1524.0], [74.9, 1528.0], [75.0, 1529.0], [75.1, 1529.0], [75.2, 1529.0], [75.3, 1531.0], [75.4, 1535.0], [75.5, 1535.0], [75.6, 1536.0], [75.7, 1551.0], [75.8, 1551.0], [75.9, 1551.0], [76.0, 1553.0], [76.1, 1554.0], [76.2, 1555.0], [76.3, 1555.0], [76.4, 1556.0], [76.5, 1556.0], [76.6, 1557.0], [76.7, 1557.0], [76.8, 1560.0], [76.9, 1566.0], [77.0, 1566.0], [77.1, 1572.0], [77.2, 1574.0], [77.3, 1581.0], [77.4, 1581.0], [77.5, 1585.0], [77.6, 1588.0], [77.7, 1591.0], [77.8, 1591.0], [77.9, 1596.0], [78.0, 1602.0], [78.1, 1604.0], [78.2, 1604.0], [78.3, 1605.0], [78.4, 1606.0], [78.5, 1606.0], [78.6, 1609.0], [78.7, 1613.0], [78.8, 1614.0], [78.9, 1614.0], [79.0, 1620.0], [79.1, 1632.0], [79.2, 1632.0], [79.3, 1632.0], [79.4, 1637.0], [79.5, 1639.0], [79.6, 1640.0], [79.7, 1640.0], [79.8, 1641.0], [79.9, 1644.0], [80.0, 1647.0], [80.1, 1647.0], [80.2, 1647.0], [80.3, 1648.0], [80.4, 1648.0], [80.5, 1648.0], [80.6, 1651.0], [80.7, 1654.0], [80.8, 1654.0], [80.9, 1655.0], [81.0, 1655.0], [81.1, 1657.0], [81.2, 1657.0], [81.3, 1663.0], [81.4, 1664.0], [81.5, 1665.0], [81.6, 1665.0], [81.7, 1665.0], [81.8, 1670.0], [81.9, 1670.0], [82.0, 1671.0], [82.1, 1674.0], [82.2, 1675.0], [82.3, 1675.0], [82.4, 1676.0], [82.5, 1678.0], [82.6, 1680.0], [82.7, 1680.0], [82.8, 1683.0], [82.9, 1683.0], [83.0, 1684.0], [83.1, 1684.0], [83.2, 1684.0], [83.3, 1687.0], [83.4, 1687.0], [83.5, 1694.0], [83.6, 1699.0], [83.7, 1699.0], [83.8, 1699.0], [83.9, 1701.0], [84.0, 1702.0], [84.1, 1704.0], [84.2, 1704.0], [84.3, 1705.0], [84.4, 1705.0], [84.5, 1710.0], [84.6, 1710.0], [84.7, 1712.0], [84.8, 1712.0], [84.9, 1713.0], [85.0, 1713.0], [85.1, 1714.0], [85.2, 1716.0], [85.3, 1716.0], [85.4, 1716.0], [85.5, 1717.0], [85.6, 1726.0], [85.7, 1726.0], [85.8, 1726.0], [85.9, 1734.0], [86.0, 1734.0], [86.1, 1734.0], [86.2, 1738.0], [86.3, 1743.0], [86.4, 1744.0], [86.5, 1744.0], [86.6, 1746.0], [86.7, 1746.0], [86.8, 1746.0], [86.9, 1747.0], [87.0, 1750.0], [87.1, 1752.0], [87.2, 1752.0], [87.3, 1752.0], [87.4, 1755.0], [87.5, 1759.0], [87.6, 1759.0], [87.7, 1764.0], [87.8, 1767.0], [87.9, 1769.0], [88.0, 1769.0], [88.1, 1771.0], [88.2, 1774.0], [88.3, 1783.0], [88.4, 1783.0], [88.5, 1785.0], [88.6, 1786.0], [88.7, 1786.0], [88.8, 1788.0], [88.9, 1791.0], [89.0, 1796.0], [89.1, 1796.0], [89.2, 1799.0], [89.3, 1803.0], [89.4, 1804.0], [89.5, 1804.0], [89.6, 1808.0], [89.7, 1808.0], [89.8, 1810.0], [89.9, 1810.0], [90.0, 1811.0], [90.1, 1815.0], [90.2, 1815.0], [90.3, 1823.0], [90.4, 1826.0], [90.5, 1832.0], [90.6, 1832.0], [90.7, 1841.0], [90.8, 1844.0], [90.9, 1848.0], [91.0, 1848.0], [91.1, 1849.0], [91.2, 1850.0], [91.3, 1864.0], [91.4, 1864.0], [91.5, 1870.0], [91.6, 1878.0], [91.7, 1878.0], [91.8, 1878.0], [91.9, 1905.0], [92.0, 1942.0], [92.1, 1942.0], [92.2, 1954.0], [92.3, 1959.0], [92.4, 1964.0], [92.5, 1964.0], [92.6, 1978.0], [92.7, 1979.0], [92.8, 1981.0], [92.9, 1981.0], [93.0, 1989.0], [93.1, 1993.0], [93.2, 2019.0], [93.3, 2019.0], [93.4, 2028.0], [93.5, 2029.0], [93.6, 2029.0], [93.7, 2042.0], [93.8, 2046.0], [93.9, 2053.0], [94.0, 2053.0], [94.1, 2067.0], [94.2, 2068.0], [94.3, 2071.0], [94.4, 2071.0], [94.5, 2080.0], [94.6, 2085.0], [94.7, 2087.0], [94.8, 2087.0], [94.9, 2095.0], [95.0, 2100.0], [95.1, 2100.0], [95.2, 2111.0], [95.3, 2112.0], [95.4, 2113.0], [95.5, 2113.0], [95.6, 2146.0], [95.7, 2147.0], [95.8, 2155.0], [95.9, 2155.0], [96.0, 2156.0], [96.1, 2189.0], [96.2, 2204.0], [96.3, 2204.0], [96.4, 2251.0], [96.5, 2291.0], [96.6, 2300.0], [96.7, 2300.0], [96.8, 2374.0], [96.9, 2396.0], [97.0, 2396.0], [97.1, 2399.0], [97.2, 2409.0], [97.3, 2458.0], [97.4, 2458.0], [97.5, 2515.0], [97.6, 2519.0], [97.7, 2522.0], [97.8, 2522.0], [97.9, 2615.0], [98.0, 2621.0], [98.1, 2765.0], [98.2, 2765.0], [98.3, 2787.0], [98.4, 2916.0], [98.5, 2916.0], [98.6, 2965.0], [98.7, 2966.0], [98.8, 2971.0], [98.9, 2971.0], [99.0, 3043.0], [99.1, 3152.0], [99.2, 3221.0], [99.3, 3221.0], [99.4, 3592.0], [99.5, 3633.0], [99.6, 3645.0], [99.7, 3645.0], [99.8, 3916.0], [99.9, 5308.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 200.0, "maxY": 72.0, "series": [{"data": [[600.0, 55.0], [700.0, 53.0], [800.0, 46.0], [900.0, 55.0], [1000.0, 54.0], [1100.0, 72.0], [1200.0, 60.0], [1300.0, 52.0], [1400.0, 47.0], [1500.0, 40.0], [1600.0, 43.0], [1700.0, 40.0], [1800.0, 19.0], [1900.0, 10.0], [2000.0, 13.0], [2100.0, 9.0], [2300.0, 4.0], [2200.0, 3.0], [2400.0, 2.0], [2500.0, 3.0], [2600.0, 2.0], [2700.0, 2.0], [2900.0, 4.0], [3000.0, 1.0], [3100.0, 1.0], [200.0, 2.0], [3200.0, 1.0], [3500.0, 1.0], [3600.0, 2.0], [3900.0, 1.0], [300.0, 5.0], [5300.0, 1.0], [400.0, 14.0], [500.0, 18.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 5300.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 21.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 513.0, "series": [{"data": [[0.0, 21.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 513.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 201.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 11.782608695652176, "minX": 1.605066E12, "maxY": 11.979357798165141, "series": [{"data": [[1.605066E12, 11.979357798165141], [1.60506606E12, 11.782608695652176]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60506606E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 237.0, "minX": 1.0, "maxY": 2621.0, "series": [{"data": [[8.0, 747.0], [4.0, 1420.0], [2.0, 1077.0], [1.0, 1497.0], [9.0, 237.0], [10.0, 716.0], [5.0, 779.0], [11.0, 714.0], [6.0, 505.0], [12.0, 1260.2368421052627], [3.0, 1523.0], [7.0, 2621.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[11.89931972789116, 1255.7115646258521]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 12.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 2246.5833333333335, "minX": 1.605066E12, "maxY": 1157844.1, "series": [{"data": [[1.605066E12, 1157844.1], [1.60506606E12, 678420.45]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.605066E12, 3276.45], [1.60506606E12, 2246.5833333333335]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60506606E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 1237.1353211009177, "minX": 1.605066E12, "maxY": 1282.79933110368, "series": [{"data": [[1.605066E12, 1237.1353211009177], [1.60506606E12, 1282.79933110368]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60506606E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 1235.7614678899079, "minX": 1.605066E12, "maxY": 1281.61872909699, "series": [{"data": [[1.605066E12, 1235.7614678899079], [1.60506606E12, 1281.61872909699]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60506606E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.05351170568561869, "minX": 1.605066E12, "maxY": 0.2889908256880739, "series": [{"data": [[1.605066E12, 0.2889908256880739], [1.60506606E12, 0.05351170568561869]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60506606E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 237.0, "minX": 1.605066E12, "maxY": 5308.0, "series": [{"data": [[1.605066E12, 5308.0], [1.60506606E12, 2971.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.605066E12, 381.65999791622164], [1.60506606E12, 552.8999980688095]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.605066E12, 385.6104003334045], [1.60506606E12, 560.1900007724762]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.605066E12, 384.21199958324434], [1.60506606E12, 556.9499990344048]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.605066E12, 237.0], [1.60506606E12, 456.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.605066E12, 1150.5], [1.60506606E12, 1271.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60506606E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 613.0, "minX": 1.0, "maxY": 1904.5, "series": [{"data": [[2.0, 1904.5], [8.0, 1355.0], [9.0, 1326.0], [10.0, 1189.0], [11.0, 999.0], [3.0, 613.0], [12.0, 1059.0], [13.0, 881.0], [14.0, 896.5], [15.0, 684.0], [1.0, 1497.0], [6.0, 1814.5], [7.0, 1473.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 15.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 611.0, "minX": 1.0, "maxY": 1904.0, "series": [{"data": [[2.0, 1904.0], [8.0, 1353.0], [9.0, 1325.0], [10.0, 1187.5], [11.0, 998.5], [3.0, 611.0], [12.0, 1059.0], [13.0, 881.0], [14.0, 895.0], [15.0, 684.0], [1.0, 1497.0], [6.0, 1813.5], [7.0, 1472.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 15.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 4.783333333333333, "minX": 1.605066E12, "maxY": 7.466666666666667, "series": [{"data": [[1.605066E12, 7.466666666666667], [1.60506606E12, 4.783333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60506606E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 4.983333333333333, "minX": 1.605066E12, "maxY": 7.266666666666667, "series": [{"data": [[1.605066E12, 7.266666666666667], [1.60506606E12, 4.983333333333333]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60506606E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 4.983333333333333, "minX": 1.605066E12, "maxY": 7.266666666666667, "series": [{"data": [[1.605066E12, 7.266666666666667], [1.60506606E12, 4.983333333333333]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60506606E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 4.983333333333333, "minX": 1.605066E12, "maxY": 7.266666666666667, "series": [{"data": [[1.605066E12, 7.266666666666667], [1.60506606E12, 4.983333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60506606E12, "title": "Total Transactions Per Second"}},
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

