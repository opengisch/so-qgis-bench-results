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
        data: {"result": {"minY": 366.0, "minX": 0.0, "maxY": 4479.0, "series": [{"data": [[0.0, 366.0], [0.1, 366.0], [0.2, 386.0], [0.3, 387.0], [0.4, 387.0], [0.5, 389.0], [0.6, 390.0], [0.7, 401.0], [0.8, 401.0], [0.9, 416.0], [1.0, 440.0], [1.1, 446.0], [1.2, 446.0], [1.3, 452.0], [1.4, 468.0], [1.5, 472.0], [1.6, 472.0], [1.7, 491.0], [1.8, 504.0], [1.9, 504.0], [2.0, 508.0], [2.1, 509.0], [2.2, 511.0], [2.3, 511.0], [2.4, 515.0], [2.5, 519.0], [2.6, 533.0], [2.7, 533.0], [2.8, 535.0], [2.9, 540.0], [3.0, 546.0], [3.1, 546.0], [3.2, 549.0], [3.3, 549.0], [3.4, 549.0], [3.5, 550.0], [3.6, 557.0], [3.7, 561.0], [3.8, 561.0], [3.9, 562.0], [4.0, 563.0], [4.1, 571.0], [4.2, 571.0], [4.3, 575.0], [4.4, 581.0], [4.5, 583.0], [4.6, 583.0], [4.7, 589.0], [4.8, 590.0], [4.9, 593.0], [5.0, 593.0], [5.1, 602.0], [5.2, 606.0], [5.3, 606.0], [5.4, 606.0], [5.5, 610.0], [5.6, 610.0], [5.7, 610.0], [5.8, 612.0], [5.9, 617.0], [6.0, 618.0], [6.1, 618.0], [6.2, 626.0], [6.3, 628.0], [6.4, 629.0], [6.5, 629.0], [6.6, 630.0], [6.7, 631.0], [6.8, 631.0], [6.9, 632.0], [7.0, 632.0], [7.1, 633.0], [7.2, 633.0], [7.3, 639.0], [7.4, 639.0], [7.5, 640.0], [7.6, 640.0], [7.7, 642.0], [7.8, 643.0], [7.9, 644.0], [8.0, 644.0], [8.1, 644.0], [8.2, 645.0], [8.3, 647.0], [8.4, 647.0], [8.5, 647.0], [8.6, 648.0], [8.7, 648.0], [8.8, 649.0], [8.9, 651.0], [9.0, 651.0], [9.1, 651.0], [9.2, 651.0], [9.3, 655.0], [9.4, 655.0], [9.5, 655.0], [9.6, 655.0], [9.7, 655.0], [9.8, 656.0], [9.9, 656.0], [10.0, 660.0], [10.1, 661.0], [10.2, 661.0], [10.3, 661.0], [10.4, 665.0], [10.5, 666.0], [10.6, 666.0], [10.7, 668.0], [10.8, 668.0], [10.9, 669.0], [11.0, 669.0], [11.1, 669.0], [11.2, 673.0], [11.3, 673.0], [11.4, 673.0], [11.5, 677.0], [11.6, 678.0], [11.7, 678.0], [11.8, 680.0], [11.9, 681.0], [12.0, 682.0], [12.1, 682.0], [12.2, 684.0], [12.3, 685.0], [12.4, 686.0], [12.5, 686.0], [12.6, 690.0], [12.7, 691.0], [12.8, 692.0], [12.9, 692.0], [13.0, 692.0], [13.1, 692.0], [13.2, 693.0], [13.3, 693.0], [13.4, 693.0], [13.5, 694.0], [13.6, 694.0], [13.7, 694.0], [13.8, 696.0], [13.9, 696.0], [14.0, 696.0], [14.1, 697.0], [14.2, 698.0], [14.3, 698.0], [14.4, 698.0], [14.5, 698.0], [14.6, 700.0], [14.7, 701.0], [14.8, 701.0], [14.9, 703.0], [15.0, 703.0], [15.1, 703.0], [15.2, 706.0], [15.3, 706.0], [15.4, 708.0], [15.5, 708.0], [15.6, 710.0], [15.7, 710.0], [15.8, 711.0], [15.9, 711.0], [16.0, 713.0], [16.1, 713.0], [16.2, 715.0], [16.3, 715.0], [16.4, 715.0], [16.5, 717.0], [16.6, 718.0], [16.7, 718.0], [16.8, 718.0], [16.9, 719.0], [17.0, 719.0], [17.1, 720.0], [17.2, 720.0], [17.3, 720.0], [17.4, 720.0], [17.5, 720.0], [17.6, 721.0], [17.7, 723.0], [17.8, 723.0], [17.9, 723.0], [18.0, 725.0], [18.1, 726.0], [18.2, 726.0], [18.3, 727.0], [18.4, 727.0], [18.5, 727.0], [18.6, 735.0], [18.7, 735.0], [18.8, 735.0], [18.9, 735.0], [19.0, 735.0], [19.1, 741.0], [19.2, 749.0], [19.3, 749.0], [19.4, 755.0], [19.5, 755.0], [19.6, 760.0], [19.7, 760.0], [19.8, 760.0], [19.9, 765.0], [20.0, 772.0], [20.1, 772.0], [20.2, 776.0], [20.3, 776.0], [20.4, 776.0], [20.5, 777.0], [20.6, 777.0], [20.7, 779.0], [20.8, 779.0], [20.9, 779.0], [21.0, 781.0], [21.1, 781.0], [21.2, 781.0], [21.3, 785.0], [21.4, 787.0], [21.5, 789.0], [21.6, 789.0], [21.7, 790.0], [21.8, 791.0], [21.9, 791.0], [22.0, 792.0], [22.1, 795.0], [22.2, 802.0], [22.3, 802.0], [22.4, 803.0], [22.5, 803.0], [22.6, 803.0], [22.7, 803.0], [22.8, 814.0], [22.9, 815.0], [23.0, 822.0], [23.1, 822.0], [23.2, 825.0], [23.3, 826.0], [23.4, 826.0], [23.5, 831.0], [23.6, 834.0], [23.7, 839.0], [23.8, 839.0], [23.9, 840.0], [24.0, 840.0], [24.1, 842.0], [24.2, 842.0], [24.3, 844.0], [24.4, 852.0], [24.5, 855.0], [24.6, 855.0], [24.7, 862.0], [24.8, 863.0], [24.9, 864.0], [25.0, 864.0], [25.1, 867.0], [25.2, 867.0], [25.3, 867.0], [25.4, 868.0], [25.5, 869.0], [25.6, 871.0], [25.7, 871.0], [25.8, 871.0], [25.9, 872.0], [26.0, 876.0], [26.1, 876.0], [26.2, 876.0], [26.3, 876.0], [26.4, 876.0], [26.5, 876.0], [26.6, 878.0], [26.7, 879.0], [26.8, 879.0], [26.9, 880.0], [27.0, 883.0], [27.1, 884.0], [27.2, 884.0], [27.3, 884.0], [27.4, 886.0], [27.5, 888.0], [27.6, 888.0], [27.7, 890.0], [27.8, 890.0], [27.9, 893.0], [28.0, 893.0], [28.1, 895.0], [28.2, 896.0], [28.3, 899.0], [28.4, 899.0], [28.5, 901.0], [28.6, 902.0], [28.7, 902.0], [28.8, 903.0], [28.9, 905.0], [29.0, 905.0], [29.1, 905.0], [29.2, 909.0], [29.3, 911.0], [29.4, 917.0], [29.5, 917.0], [29.6, 918.0], [29.7, 919.0], [29.8, 920.0], [29.9, 920.0], [30.0, 924.0], [30.1, 924.0], [30.2, 924.0], [30.3, 928.0], [30.4, 928.0], [30.5, 929.0], [30.6, 929.0], [30.7, 930.0], [30.8, 932.0], [30.9, 932.0], [31.0, 932.0], [31.1, 936.0], [31.2, 940.0], [31.3, 940.0], [31.4, 940.0], [31.5, 943.0], [31.6, 943.0], [31.7, 943.0], [31.8, 944.0], [31.9, 945.0], [32.0, 946.0], [32.1, 946.0], [32.2, 946.0], [32.3, 947.0], [32.4, 948.0], [32.5, 948.0], [32.6, 950.0], [32.7, 952.0], [32.8, 952.0], [32.9, 952.0], [33.0, 958.0], [33.1, 958.0], [33.2, 959.0], [33.3, 959.0], [33.4, 959.0], [33.5, 961.0], [33.6, 961.0], [33.7, 961.0], [33.8, 965.0], [33.9, 966.0], [34.0, 966.0], [34.1, 968.0], [34.2, 971.0], [34.3, 971.0], [34.4, 971.0], [34.5, 972.0], [34.6, 975.0], [34.7, 977.0], [34.8, 977.0], [34.9, 982.0], [35.0, 984.0], [35.1, 984.0], [35.2, 985.0], [35.3, 986.0], [35.4, 987.0], [35.5, 987.0], [35.6, 987.0], [35.7, 991.0], [35.8, 993.0], [35.9, 993.0], [36.0, 993.0], [36.1, 995.0], [36.2, 1001.0], [36.3, 1001.0], [36.4, 1004.0], [36.5, 1004.0], [36.6, 1004.0], [36.7, 1004.0], [36.8, 1006.0], [36.9, 1007.0], [37.0, 1007.0], [37.1, 1008.0], [37.2, 1009.0], [37.3, 1010.0], [37.4, 1010.0], [37.5, 1010.0], [37.6, 1011.0], [37.7, 1013.0], [37.8, 1013.0], [37.9, 1014.0], [38.0, 1019.0], [38.1, 1020.0], [38.2, 1020.0], [38.3, 1022.0], [38.4, 1026.0], [38.5, 1026.0], [38.6, 1028.0], [38.7, 1031.0], [38.8, 1033.0], [38.9, 1033.0], [39.0, 1034.0], [39.1, 1043.0], [39.2, 1045.0], [39.3, 1045.0], [39.4, 1047.0], [39.5, 1048.0], [39.6, 1050.0], [39.7, 1050.0], [39.8, 1052.0], [39.9, 1055.0], [40.0, 1058.0], [40.1, 1058.0], [40.2, 1059.0], [40.3, 1060.0], [40.4, 1060.0], [40.5, 1060.0], [40.6, 1061.0], [40.7, 1061.0], [40.8, 1061.0], [40.9, 1063.0], [41.0, 1063.0], [41.1, 1064.0], [41.2, 1064.0], [41.3, 1065.0], [41.4, 1073.0], [41.5, 1073.0], [41.6, 1073.0], [41.7, 1075.0], [41.8, 1079.0], [41.9, 1079.0], [42.0, 1079.0], [42.1, 1080.0], [42.2, 1080.0], [42.3, 1080.0], [42.4, 1083.0], [42.5, 1085.0], [42.6, 1085.0], [42.7, 1085.0], [42.8, 1085.0], [42.9, 1085.0], [43.0, 1086.0], [43.1, 1086.0], [43.2, 1086.0], [43.3, 1088.0], [43.4, 1088.0], [43.5, 1091.0], [43.6, 1091.0], [43.7, 1093.0], [43.8, 1093.0], [43.9, 1094.0], [44.0, 1095.0], [44.1, 1096.0], [44.2, 1096.0], [44.3, 1097.0], [44.4, 1100.0], [44.5, 1102.0], [44.6, 1102.0], [44.7, 1104.0], [44.8, 1107.0], [44.9, 1107.0], [45.0, 1107.0], [45.1, 1107.0], [45.2, 1110.0], [45.3, 1110.0], [45.4, 1110.0], [45.5, 1113.0], [45.6, 1113.0], [45.7, 1113.0], [45.8, 1113.0], [45.9, 1113.0], [46.0, 1116.0], [46.1, 1116.0], [46.2, 1121.0], [46.3, 1121.0], [46.4, 1122.0], [46.5, 1122.0], [46.6, 1123.0], [46.7, 1124.0], [46.8, 1124.0], [46.9, 1130.0], [47.0, 1131.0], [47.1, 1132.0], [47.2, 1132.0], [47.3, 1134.0], [47.4, 1134.0], [47.5, 1134.0], [47.6, 1134.0], [47.7, 1135.0], [47.8, 1137.0], [47.9, 1138.0], [48.0, 1138.0], [48.1, 1140.0], [48.2, 1141.0], [48.3, 1141.0], [48.4, 1141.0], [48.5, 1142.0], [48.6, 1143.0], [48.7, 1143.0], [48.8, 1144.0], [48.9, 1145.0], [49.0, 1145.0], [49.1, 1145.0], [49.2, 1146.0], [49.3, 1146.0], [49.4, 1146.0], [49.5, 1146.0], [49.6, 1148.0], [49.7, 1149.0], [49.8, 1151.0], [49.9, 1151.0], [50.0, 1156.0], [50.1, 1156.0], [50.2, 1156.0], [50.3, 1156.0], [50.4, 1160.0], [50.5, 1160.0], [50.6, 1160.0], [50.7, 1161.0], [50.8, 1161.0], [50.9, 1162.0], [51.0, 1162.0], [51.1, 1162.0], [51.2, 1168.0], [51.3, 1168.0], [51.4, 1168.0], [51.5, 1173.0], [51.6, 1173.0], [51.7, 1173.0], [51.8, 1173.0], [51.9, 1174.0], [52.0, 1175.0], [52.1, 1175.0], [52.2, 1175.0], [52.3, 1176.0], [52.4, 1177.0], [52.5, 1177.0], [52.6, 1178.0], [52.7, 1179.0], [52.8, 1179.0], [52.9, 1179.0], [53.0, 1181.0], [53.1, 1183.0], [53.2, 1183.0], [53.3, 1183.0], [53.4, 1185.0], [53.5, 1186.0], [53.6, 1186.0], [53.7, 1189.0], [53.8, 1190.0], [53.9, 1194.0], [54.0, 1194.0], [54.1, 1195.0], [54.2, 1195.0], [54.3, 1198.0], [54.4, 1198.0], [54.5, 1199.0], [54.6, 1204.0], [54.7, 1206.0], [54.8, 1206.0], [54.9, 1206.0], [55.0, 1207.0], [55.1, 1207.0], [55.2, 1211.0], [55.3, 1212.0], [55.4, 1213.0], [55.5, 1213.0], [55.6, 1218.0], [55.7, 1218.0], [55.8, 1222.0], [55.9, 1222.0], [56.0, 1227.0], [56.1, 1228.0], [56.2, 1228.0], [56.3, 1228.0], [56.4, 1241.0], [56.5, 1244.0], [56.6, 1244.0], [56.7, 1244.0], [56.8, 1246.0], [56.9, 1247.0], [57.0, 1247.0], [57.1, 1249.0], [57.2, 1250.0], [57.3, 1250.0], [57.4, 1250.0], [57.5, 1251.0], [57.6, 1257.0], [57.7, 1257.0], [57.8, 1257.0], [57.9, 1258.0], [58.0, 1259.0], [58.1, 1263.0], [58.2, 1263.0], [58.3, 1264.0], [58.4, 1266.0], [58.5, 1266.0], [58.6, 1271.0], [58.7, 1272.0], [58.8, 1273.0], [58.9, 1273.0], [59.0, 1275.0], [59.1, 1280.0], [59.2, 1281.0], [59.3, 1281.0], [59.4, 1281.0], [59.5, 1283.0], [59.6, 1284.0], [59.7, 1284.0], [59.8, 1285.0], [59.9, 1286.0], [60.0, 1288.0], [60.1, 1288.0], [60.2, 1290.0], [60.3, 1291.0], [60.4, 1291.0], [60.5, 1293.0], [60.6, 1294.0], [60.7, 1294.0], [60.8, 1294.0], [60.9, 1295.0], [61.0, 1298.0], [61.1, 1298.0], [61.2, 1298.0], [61.3, 1299.0], [61.4, 1303.0], [61.5, 1303.0], [61.6, 1303.0], [61.7, 1310.0], [61.8, 1310.0], [61.9, 1310.0], [62.0, 1314.0], [62.1, 1315.0], [62.2, 1316.0], [62.3, 1316.0], [62.4, 1317.0], [62.5, 1318.0], [62.6, 1319.0], [62.7, 1319.0], [62.8, 1319.0], [62.9, 1320.0], [63.0, 1322.0], [63.1, 1322.0], [63.2, 1324.0], [63.3, 1326.0], [63.4, 1326.0], [63.5, 1329.0], [63.6, 1331.0], [63.7, 1333.0], [63.8, 1333.0], [63.9, 1333.0], [64.0, 1335.0], [64.1, 1337.0], [64.2, 1337.0], [64.3, 1346.0], [64.4, 1346.0], [64.5, 1349.0], [64.6, 1349.0], [64.7, 1350.0], [64.8, 1351.0], [64.9, 1354.0], [65.0, 1354.0], [65.1, 1359.0], [65.2, 1361.0], [65.3, 1361.0], [65.4, 1364.0], [65.5, 1366.0], [65.6, 1373.0], [65.7, 1373.0], [65.8, 1375.0], [65.9, 1379.0], [66.0, 1381.0], [66.1, 1381.0], [66.2, 1383.0], [66.3, 1386.0], [66.4, 1390.0], [66.5, 1390.0], [66.6, 1392.0], [66.7, 1393.0], [66.8, 1393.0], [66.9, 1394.0], [67.0, 1399.0], [67.1, 1401.0], [67.2, 1401.0], [67.3, 1402.0], [67.4, 1403.0], [67.5, 1403.0], [67.6, 1403.0], [67.7, 1408.0], [67.8, 1408.0], [67.9, 1409.0], [68.0, 1409.0], [68.1, 1411.0], [68.2, 1413.0], [68.3, 1417.0], [68.4, 1417.0], [68.5, 1418.0], [68.6, 1423.0], [68.7, 1423.0], [68.8, 1425.0], [68.9, 1427.0], [69.0, 1428.0], [69.1, 1428.0], [69.2, 1428.0], [69.3, 1429.0], [69.4, 1431.0], [69.5, 1431.0], [69.6, 1433.0], [69.7, 1434.0], [69.8, 1438.0], [69.9, 1438.0], [70.0, 1440.0], [70.1, 1441.0], [70.2, 1441.0], [70.3, 1447.0], [70.4, 1447.0], [70.5, 1449.0], [70.6, 1449.0], [70.7, 1451.0], [70.8, 1452.0], [70.9, 1452.0], [71.0, 1452.0], [71.1, 1456.0], [71.2, 1456.0], [71.3, 1457.0], [71.4, 1457.0], [71.5, 1458.0], [71.6, 1459.0], [71.7, 1459.0], [71.8, 1462.0], [71.9, 1466.0], [72.0, 1467.0], [72.1, 1467.0], [72.2, 1470.0], [72.3, 1471.0], [72.4, 1472.0], [72.5, 1472.0], [72.6, 1474.0], [72.7, 1483.0], [72.8, 1483.0], [72.9, 1483.0], [73.0, 1484.0], [73.1, 1485.0], [73.2, 1487.0], [73.3, 1487.0], [73.4, 1488.0], [73.5, 1491.0], [73.6, 1491.0], [73.7, 1491.0], [73.8, 1493.0], [73.9, 1493.0], [74.0, 1493.0], [74.1, 1495.0], [74.2, 1496.0], [74.3, 1498.0], [74.4, 1498.0], [74.5, 1498.0], [74.6, 1499.0], [74.7, 1499.0], [74.8, 1499.0], [74.9, 1500.0], [75.0, 1501.0], [75.1, 1501.0], [75.2, 1503.0], [75.3, 1505.0], [75.4, 1506.0], [75.5, 1506.0], [75.6, 1506.0], [75.7, 1508.0], [75.8, 1511.0], [75.9, 1511.0], [76.0, 1513.0], [76.1, 1515.0], [76.2, 1515.0], [76.3, 1515.0], [76.4, 1519.0], [76.5, 1521.0], [76.6, 1522.0], [76.7, 1522.0], [76.8, 1526.0], [76.9, 1532.0], [77.0, 1532.0], [77.1, 1534.0], [77.2, 1541.0], [77.3, 1541.0], [77.4, 1541.0], [77.5, 1545.0], [77.6, 1551.0], [77.7, 1551.0], [77.8, 1551.0], [77.9, 1555.0], [78.0, 1558.0], [78.1, 1564.0], [78.2, 1564.0], [78.3, 1568.0], [78.4, 1570.0], [78.5, 1570.0], [78.6, 1572.0], [78.7, 1573.0], [78.8, 1574.0], [78.9, 1574.0], [79.0, 1576.0], [79.1, 1581.0], [79.2, 1583.0], [79.3, 1583.0], [79.4, 1584.0], [79.5, 1587.0], [79.6, 1587.0], [79.7, 1587.0], [79.8, 1597.0], [79.9, 1601.0], [80.0, 1606.0], [80.1, 1606.0], [80.2, 1606.0], [80.3, 1609.0], [80.4, 1609.0], [80.5, 1609.0], [80.6, 1613.0], [80.7, 1616.0], [80.8, 1616.0], [80.9, 1617.0], [81.0, 1619.0], [81.1, 1621.0], [81.2, 1621.0], [81.3, 1628.0], [81.4, 1628.0], [81.5, 1631.0], [81.6, 1631.0], [81.7, 1633.0], [81.8, 1636.0], [81.9, 1636.0], [82.0, 1637.0], [82.1, 1642.0], [82.2, 1644.0], [82.3, 1644.0], [82.4, 1645.0], [82.5, 1647.0], [82.6, 1654.0], [82.7, 1654.0], [82.8, 1655.0], [82.9, 1656.0], [83.0, 1657.0], [83.1, 1657.0], [83.2, 1660.0], [83.3, 1664.0], [83.4, 1664.0], [83.5, 1664.0], [83.6, 1668.0], [83.7, 1670.0], [83.8, 1670.0], [83.9, 1674.0], [84.0, 1682.0], [84.1, 1685.0], [84.2, 1685.0], [84.3, 1685.0], [84.4, 1695.0], [84.5, 1701.0], [84.6, 1701.0], [84.7, 1706.0], [84.8, 1711.0], [84.9, 1716.0], [85.0, 1716.0], [85.1, 1718.0], [85.2, 1726.0], [85.3, 1726.0], [85.4, 1729.0], [85.5, 1731.0], [85.6, 1732.0], [85.7, 1732.0], [85.8, 1735.0], [85.9, 1737.0], [86.0, 1742.0], [86.1, 1742.0], [86.2, 1752.0], [86.3, 1753.0], [86.4, 1753.0], [86.5, 1753.0], [86.6, 1758.0], [86.7, 1758.0], [86.8, 1758.0], [86.9, 1760.0], [87.0, 1764.0], [87.1, 1772.0], [87.2, 1772.0], [87.3, 1778.0], [87.4, 1779.0], [87.5, 1781.0], [87.6, 1781.0], [87.7, 1783.0], [87.8, 1798.0], [87.9, 1800.0], [88.0, 1800.0], [88.1, 1812.0], [88.2, 1821.0], [88.3, 1821.0], [88.4, 1821.0], [88.5, 1826.0], [88.6, 1827.0], [88.7, 1827.0], [88.8, 1827.0], [88.9, 1832.0], [89.0, 1842.0], [89.1, 1842.0], [89.2, 1849.0], [89.3, 1860.0], [89.4, 1862.0], [89.5, 1862.0], [89.6, 1864.0], [89.7, 1865.0], [89.8, 1873.0], [89.9, 1873.0], [90.0, 1875.0], [90.1, 1883.0], [90.2, 1883.0], [90.3, 1885.0], [90.4, 1886.0], [90.5, 1903.0], [90.6, 1903.0], [90.7, 1905.0], [90.8, 1915.0], [90.9, 1921.0], [91.0, 1921.0], [91.1, 1922.0], [91.2, 1924.0], [91.3, 1928.0], [91.4, 1928.0], [91.5, 1932.0], [91.6, 1938.0], [91.7, 1938.0], [91.8, 1939.0], [91.9, 1940.0], [92.0, 1947.0], [92.1, 1947.0], [92.2, 1947.0], [92.3, 1959.0], [92.4, 1960.0], [92.5, 1960.0], [92.6, 1963.0], [92.7, 1968.0], [92.8, 1975.0], [92.9, 1975.0], [93.0, 1976.0], [93.1, 1980.0], [93.2, 1987.0], [93.3, 1987.0], [93.4, 1988.0], [93.5, 1998.0], [93.6, 1998.0], [93.7, 1999.0], [93.8, 2003.0], [93.9, 2017.0], [94.0, 2017.0], [94.1, 2019.0], [94.2, 2020.0], [94.3, 2026.0], [94.4, 2026.0], [94.5, 2029.0], [94.6, 2053.0], [94.7, 2065.0], [94.8, 2065.0], [94.9, 2065.0], [95.0, 2073.0], [95.1, 2073.0], [95.2, 2092.0], [95.3, 2113.0], [95.4, 2113.0], [95.5, 2113.0], [95.6, 2145.0], [95.7, 2156.0], [95.8, 2162.0], [95.9, 2162.0], [96.0, 2164.0], [96.1, 2193.0], [96.2, 2226.0], [96.3, 2226.0], [96.4, 2231.0], [96.5, 2255.0], [96.6, 2332.0], [96.7, 2332.0], [96.8, 2338.0], [96.9, 2391.0], [97.0, 2391.0], [97.1, 2402.0], [97.2, 2485.0], [97.3, 2578.0], [97.4, 2578.0], [97.5, 2634.0], [97.6, 2674.0], [97.7, 2721.0], [97.8, 2721.0], [97.9, 2727.0], [98.0, 2834.0], [98.1, 2891.0], [98.2, 2891.0], [98.3, 2909.0], [98.4, 2952.0], [98.5, 2952.0], [98.6, 3013.0], [98.7, 3033.0], [98.8, 3065.0], [98.9, 3065.0], [99.0, 3217.0], [99.1, 3289.0], [99.2, 3546.0], [99.3, 3546.0], [99.4, 3609.0], [99.5, 4131.0], [99.6, 4277.0], [99.7, 4277.0], [99.8, 4357.0], [99.9, 4479.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 300.0, "maxY": 75.0, "series": [{"data": [[600.0, 70.0], [700.0, 56.0], [800.0, 46.0], [900.0, 57.0], [1000.0, 60.0], [1100.0, 75.0], [1200.0, 50.0], [1300.0, 42.0], [1400.0, 57.0], [1500.0, 37.0], [1600.0, 34.0], [1700.0, 25.0], [1800.0, 19.0], [1900.0, 24.0], [2000.0, 11.0], [2100.0, 7.0], [2300.0, 3.0], [2200.0, 3.0], [2400.0, 2.0], [2500.0, 1.0], [2600.0, 2.0], [2800.0, 2.0], [2700.0, 2.0], [2900.0, 2.0], [3000.0, 3.0], [3200.0, 2.0], [3500.0, 1.0], [3600.0, 1.0], [4100.0, 1.0], [4300.0, 1.0], [4200.0, 1.0], [4400.0, 1.0], [300.0, 5.0], [400.0, 8.0], [500.0, 24.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 4400.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 13.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 538.0, "series": [{"data": [[0.0, 13.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 538.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 184.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 11.799392097264436, "minX": 1.60223988E12, "maxY": 12.0, "series": [{"data": [[1.60223994E12, 11.799392097264436], [1.60223988E12, 12.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60223994E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 668.0, "minX": 1.0, "maxY": 2156.0, "series": [{"data": [[8.0, 694.0], [4.0, 1283.0], [2.0, 1284.0], [1.0, 1085.0], [9.0, 680.0], [10.0, 720.0], [5.0, 668.0], [11.0, 2156.0], [12.0, 1243.0234806629833], [6.0, 1156.0], [3.0, 669.0], [7.0, 706.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[11.910204081632651, 1239.5238095238094]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 12.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 2477.8, "minX": 1.60223988E12, "maxY": 1039204.3, "series": [{"data": [[1.60223994E12, 796583.9166666666], [1.60223988E12, 1039204.3]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60223994E12, 2477.8], [1.60223988E12, 3045.233333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60223994E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 1226.1403940886687, "minX": 1.60223988E12, "maxY": 1256.039513677812, "series": [{"data": [[1.60223994E12, 1256.039513677812], [1.60223988E12, 1226.1403940886687]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60223994E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 1225.1428571428569, "minX": 1.60223988E12, "maxY": 1255.0030395136778, "series": [{"data": [[1.60223994E12, 1255.0030395136778], [1.60223988E12, 1225.1428571428569]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60223994E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.04255319148936176, "minX": 1.60223988E12, "maxY": 0.34236453201970407, "series": [{"data": [[1.60223994E12, 0.04255319148936176], [1.60223988E12, 0.34236453201970407]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60223994E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 366.0, "minX": 1.60223988E12, "maxY": 4479.0, "series": [{"data": [[1.60223994E12, 4479.0], [1.60223988E12, 4357.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60223994E12, 514.6699991345406], [1.60223988E12, 388.32599980592727]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60223994E12, 524.0780010700225], [1.60223988E12, 389.02930003881454]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60223994E12, 519.5899986624718], [1.60223988E12, 388.7329999029636]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60223994E12, 440.0], [1.60223988E12, 366.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60223994E12, 1168.0], [1.60223988E12, 1142.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60223994E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 653.0, "minX": 1.0, "maxY": 2391.0, "series": [{"data": [[8.0, 1356.0], [9.0, 1211.0], [10.0, 1155.0], [11.0, 1060.0], [12.0, 1053.5], [13.0, 980.0], [14.0, 808.5], [15.0, 692.0], [1.0, 2391.0], [16.0, 653.0], [17.0, 839.0], [6.0, 1453.5], [7.0, 1527.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 17.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 653.0, "minX": 1.0, "maxY": 2386.0, "series": [{"data": [[8.0, 1355.0], [9.0, 1210.0], [10.0, 1154.5], [11.0, 1060.0], [12.0, 1052.5], [13.0, 979.5], [14.0, 808.0], [15.0, 692.0], [1.0, 2386.0], [16.0, 653.0], [17.0, 839.0], [6.0, 1447.5], [7.0, 1526.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 17.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 5.283333333333333, "minX": 1.60223988E12, "maxY": 6.966666666666667, "series": [{"data": [[1.60223994E12, 5.283333333333333], [1.60223988E12, 6.966666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60223994E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 5.483333333333333, "minX": 1.60223988E12, "maxY": 6.766666666666667, "series": [{"data": [[1.60223994E12, 5.483333333333333], [1.60223988E12, 6.766666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60223994E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 5.483333333333333, "minX": 1.60223988E12, "maxY": 6.766666666666667, "series": [{"data": [[1.60223994E12, 5.483333333333333], [1.60223988E12, 6.766666666666667]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60223994E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 5.483333333333333, "minX": 1.60223988E12, "maxY": 6.766666666666667, "series": [{"data": [[1.60223994E12, 5.483333333333333], [1.60223988E12, 6.766666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60223994E12, "title": "Total Transactions Per Second"}},
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

