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
        data: {"result": {"minY": 382.0, "minX": 0.0, "maxY": 4145.0, "series": [{"data": [[0.0, 382.0], [0.1, 382.0], [0.2, 384.0], [0.3, 388.0], [0.4, 388.0], [0.5, 397.0], [0.6, 397.0], [0.7, 404.0], [0.8, 404.0], [0.9, 418.0], [1.0, 427.0], [1.1, 430.0], [1.2, 430.0], [1.3, 435.0], [1.4, 436.0], [1.5, 438.0], [1.6, 438.0], [1.7, 454.0], [1.8, 456.0], [1.9, 456.0], [2.0, 468.0], [2.1, 472.0], [2.2, 501.0], [2.3, 501.0], [2.4, 512.0], [2.5, 512.0], [2.6, 517.0], [2.7, 517.0], [2.8, 520.0], [2.9, 528.0], [3.0, 545.0], [3.1, 545.0], [3.2, 552.0], [3.3, 559.0], [3.4, 559.0], [3.5, 563.0], [3.6, 569.0], [3.7, 573.0], [3.8, 573.0], [3.9, 580.0], [4.0, 580.0], [4.1, 586.0], [4.2, 586.0], [4.3, 593.0], [4.4, 594.0], [4.5, 594.0], [4.6, 594.0], [4.7, 594.0], [4.8, 608.0], [4.9, 608.0], [5.0, 608.0], [5.1, 611.0], [5.2, 613.0], [5.3, 613.0], [5.4, 614.0], [5.5, 617.0], [5.6, 617.0], [5.7, 617.0], [5.8, 621.0], [5.9, 627.0], [6.0, 627.0], [6.1, 627.0], [6.2, 629.0], [6.3, 629.0], [6.4, 632.0], [6.5, 632.0], [6.6, 632.0], [6.7, 635.0], [6.8, 635.0], [6.9, 635.0], [7.0, 636.0], [7.1, 636.0], [7.2, 636.0], [7.3, 639.0], [7.4, 639.0], [7.5, 640.0], [7.6, 640.0], [7.7, 641.0], [7.8, 644.0], [7.9, 646.0], [8.0, 646.0], [8.1, 647.0], [8.2, 647.0], [8.3, 648.0], [8.4, 648.0], [8.5, 648.0], [8.6, 650.0], [8.7, 650.0], [8.8, 653.0], [8.9, 654.0], [9.0, 654.0], [9.1, 654.0], [9.2, 655.0], [9.3, 658.0], [9.4, 660.0], [9.5, 660.0], [9.6, 660.0], [9.7, 662.0], [9.8, 666.0], [9.9, 666.0], [10.0, 666.0], [10.1, 666.0], [10.2, 666.0], [10.3, 667.0], [10.4, 668.0], [10.5, 670.0], [10.6, 670.0], [10.7, 670.0], [10.8, 671.0], [10.9, 671.0], [11.0, 671.0], [11.1, 671.0], [11.2, 676.0], [11.3, 677.0], [11.4, 677.0], [11.5, 678.0], [11.6, 680.0], [11.7, 680.0], [11.8, 682.0], [11.9, 683.0], [12.0, 684.0], [12.1, 684.0], [12.2, 684.0], [12.3, 684.0], [12.4, 686.0], [12.5, 686.0], [12.6, 687.0], [12.7, 688.0], [12.8, 689.0], [12.9, 689.0], [13.0, 690.0], [13.1, 692.0], [13.2, 692.0], [13.3, 692.0], [13.4, 695.0], [13.5, 699.0], [13.6, 699.0], [13.7, 700.0], [13.8, 701.0], [13.9, 701.0], [14.0, 701.0], [14.1, 701.0], [14.2, 702.0], [14.3, 702.0], [14.4, 702.0], [14.5, 706.0], [14.6, 707.0], [14.7, 707.0], [14.8, 707.0], [14.9, 707.0], [15.0, 708.0], [15.1, 708.0], [15.2, 709.0], [15.3, 710.0], [15.4, 710.0], [15.5, 710.0], [15.6, 712.0], [15.7, 722.0], [15.8, 722.0], [15.9, 722.0], [16.0, 723.0], [16.1, 724.0], [16.2, 732.0], [16.3, 732.0], [16.4, 733.0], [16.5, 735.0], [16.6, 742.0], [16.7, 742.0], [16.8, 742.0], [16.9, 742.0], [17.0, 742.0], [17.1, 743.0], [17.2, 752.0], [17.3, 752.0], [17.4, 752.0], [17.5, 753.0], [17.6, 754.0], [17.7, 757.0], [17.8, 757.0], [17.9, 758.0], [18.0, 759.0], [18.1, 760.0], [18.2, 760.0], [18.3, 764.0], [18.4, 764.0], [18.5, 764.0], [18.6, 774.0], [18.7, 779.0], [18.8, 783.0], [18.9, 783.0], [19.0, 783.0], [19.1, 783.0], [19.2, 786.0], [19.3, 786.0], [19.4, 789.0], [19.5, 792.0], [19.6, 794.0], [19.7, 794.0], [19.8, 797.0], [19.9, 799.0], [20.0, 799.0], [20.1, 800.0], [20.2, 803.0], [20.3, 806.0], [20.4, 806.0], [20.5, 811.0], [20.6, 817.0], [20.7, 817.0], [20.8, 817.0], [20.9, 818.0], [21.0, 818.0], [21.1, 819.0], [21.2, 819.0], [21.3, 819.0], [21.4, 821.0], [21.5, 823.0], [21.6, 823.0], [21.7, 825.0], [21.8, 826.0], [21.9, 826.0], [22.0, 829.0], [22.1, 830.0], [22.2, 835.0], [22.3, 835.0], [22.4, 840.0], [22.5, 846.0], [22.6, 846.0], [22.7, 846.0], [22.8, 849.0], [22.9, 851.0], [23.0, 852.0], [23.1, 852.0], [23.2, 854.0], [23.3, 855.0], [23.4, 855.0], [23.5, 857.0], [23.6, 857.0], [23.7, 858.0], [23.8, 858.0], [23.9, 859.0], [24.0, 859.0], [24.1, 860.0], [24.2, 860.0], [24.3, 861.0], [24.4, 862.0], [24.5, 863.0], [24.6, 863.0], [24.7, 866.0], [24.8, 872.0], [24.9, 875.0], [25.0, 875.0], [25.1, 879.0], [25.2, 880.0], [25.3, 880.0], [25.4, 880.0], [25.5, 881.0], [25.6, 882.0], [25.7, 882.0], [25.8, 882.0], [25.9, 882.0], [26.0, 884.0], [26.1, 884.0], [26.2, 887.0], [26.3, 896.0], [26.4, 899.0], [26.5, 899.0], [26.6, 900.0], [26.7, 901.0], [26.8, 901.0], [26.9, 902.0], [27.0, 902.0], [27.1, 903.0], [27.2, 903.0], [27.3, 904.0], [27.4, 905.0], [27.5, 906.0], [27.6, 906.0], [27.7, 906.0], [27.8, 909.0], [27.9, 909.0], [28.0, 909.0], [28.1, 912.0], [28.2, 913.0], [28.3, 914.0], [28.4, 914.0], [28.5, 916.0], [28.6, 917.0], [28.7, 917.0], [28.8, 922.0], [28.9, 922.0], [29.0, 926.0], [29.1, 926.0], [29.2, 933.0], [29.3, 933.0], [29.4, 934.0], [29.5, 934.0], [29.6, 935.0], [29.7, 935.0], [29.8, 936.0], [29.9, 936.0], [30.0, 938.0], [30.1, 941.0], [30.2, 941.0], [30.3, 942.0], [30.4, 944.0], [30.5, 946.0], [30.6, 946.0], [30.7, 946.0], [30.8, 948.0], [30.9, 948.0], [31.0, 948.0], [31.1, 949.0], [31.2, 951.0], [31.3, 953.0], [31.4, 953.0], [31.5, 954.0], [31.6, 955.0], [31.7, 955.0], [31.8, 957.0], [31.9, 957.0], [32.0, 957.0], [32.1, 957.0], [32.2, 964.0], [32.3, 966.0], [32.4, 966.0], [32.5, 966.0], [32.6, 967.0], [32.7, 969.0], [32.8, 973.0], [32.9, 973.0], [33.0, 974.0], [33.1, 975.0], [33.2, 976.0], [33.3, 976.0], [33.4, 985.0], [33.5, 988.0], [33.6, 988.0], [33.7, 988.0], [33.8, 990.0], [33.9, 990.0], [34.0, 990.0], [34.1, 990.0], [34.2, 992.0], [34.3, 993.0], [34.4, 993.0], [34.5, 994.0], [34.6, 995.0], [34.7, 1000.0], [34.8, 1000.0], [34.9, 1000.0], [35.0, 1000.0], [35.1, 1000.0], [35.2, 1006.0], [35.3, 1009.0], [35.4, 1009.0], [35.5, 1009.0], [35.6, 1012.0], [35.7, 1012.0], [35.8, 1015.0], [35.9, 1015.0], [36.0, 1016.0], [36.1, 1017.0], [36.2, 1018.0], [36.3, 1018.0], [36.4, 1018.0], [36.5, 1019.0], [36.6, 1023.0], [36.7, 1023.0], [36.8, 1023.0], [36.9, 1026.0], [37.0, 1026.0], [37.1, 1026.0], [37.2, 1026.0], [37.3, 1027.0], [37.4, 1027.0], [37.5, 1028.0], [37.6, 1030.0], [37.7, 1030.0], [37.8, 1030.0], [37.9, 1031.0], [38.0, 1032.0], [38.1, 1033.0], [38.2, 1033.0], [38.3, 1033.0], [38.4, 1034.0], [38.5, 1034.0], [38.6, 1036.0], [38.7, 1037.0], [38.8, 1038.0], [38.9, 1038.0], [39.0, 1039.0], [39.1, 1039.0], [39.2, 1041.0], [39.3, 1041.0], [39.4, 1042.0], [39.5, 1044.0], [39.6, 1045.0], [39.7, 1045.0], [39.8, 1047.0], [39.9, 1048.0], [40.0, 1048.0], [40.1, 1048.0], [40.2, 1049.0], [40.3, 1050.0], [40.4, 1050.0], [40.5, 1052.0], [40.6, 1053.0], [40.7, 1055.0], [40.8, 1055.0], [40.9, 1055.0], [41.0, 1057.0], [41.1, 1059.0], [41.2, 1059.0], [41.3, 1059.0], [41.4, 1062.0], [41.5, 1064.0], [41.6, 1064.0], [41.7, 1065.0], [41.8, 1065.0], [41.9, 1065.0], [42.0, 1066.0], [42.1, 1066.0], [42.2, 1068.0], [42.3, 1068.0], [42.4, 1068.0], [42.5, 1070.0], [42.6, 1071.0], [42.7, 1071.0], [42.8, 1072.0], [42.9, 1072.0], [43.0, 1073.0], [43.1, 1073.0], [43.2, 1076.0], [43.3, 1078.0], [43.4, 1078.0], [43.5, 1079.0], [43.6, 1085.0], [43.7, 1086.0], [43.8, 1086.0], [43.9, 1087.0], [44.0, 1087.0], [44.1, 1093.0], [44.2, 1093.0], [44.3, 1099.0], [44.4, 1099.0], [44.5, 1099.0], [44.6, 1099.0], [44.7, 1099.0], [44.8, 1100.0], [44.9, 1101.0], [45.0, 1101.0], [45.1, 1103.0], [45.2, 1106.0], [45.3, 1106.0], [45.4, 1108.0], [45.5, 1108.0], [45.6, 1111.0], [45.7, 1111.0], [45.8, 1113.0], [45.9, 1114.0], [46.0, 1115.0], [46.1, 1115.0], [46.2, 1122.0], [46.3, 1126.0], [46.4, 1126.0], [46.5, 1126.0], [46.6, 1127.0], [46.7, 1131.0], [46.8, 1131.0], [46.9, 1132.0], [47.0, 1132.0], [47.1, 1133.0], [47.2, 1133.0], [47.3, 1134.0], [47.4, 1134.0], [47.5, 1134.0], [47.6, 1134.0], [47.7, 1134.0], [47.8, 1134.0], [47.9, 1134.0], [48.0, 1134.0], [48.1, 1135.0], [48.2, 1137.0], [48.3, 1143.0], [48.4, 1143.0], [48.5, 1148.0], [48.6, 1149.0], [48.7, 1149.0], [48.8, 1150.0], [48.9, 1150.0], [49.0, 1156.0], [49.1, 1156.0], [49.2, 1156.0], [49.3, 1158.0], [49.4, 1158.0], [49.5, 1158.0], [49.6, 1162.0], [49.7, 1162.0], [49.8, 1164.0], [49.9, 1164.0], [50.0, 1166.0], [50.1, 1167.0], [50.2, 1167.0], [50.3, 1169.0], [50.4, 1171.0], [50.5, 1171.0], [50.6, 1171.0], [50.7, 1173.0], [50.8, 1173.0], [50.9, 1174.0], [51.0, 1174.0], [51.1, 1175.0], [51.2, 1178.0], [51.3, 1179.0], [51.4, 1179.0], [51.5, 1181.0], [51.6, 1181.0], [51.7, 1181.0], [51.8, 1185.0], [51.9, 1186.0], [52.0, 1187.0], [52.1, 1187.0], [52.2, 1191.0], [52.3, 1194.0], [52.4, 1194.0], [52.5, 1194.0], [52.6, 1194.0], [52.7, 1195.0], [52.8, 1197.0], [52.9, 1197.0], [53.0, 1198.0], [53.1, 1199.0], [53.2, 1204.0], [53.3, 1204.0], [53.4, 1204.0], [53.5, 1205.0], [53.6, 1205.0], [53.7, 1207.0], [53.8, 1208.0], [53.9, 1211.0], [54.0, 1211.0], [54.1, 1213.0], [54.2, 1213.0], [54.3, 1213.0], [54.4, 1213.0], [54.5, 1215.0], [54.6, 1216.0], [54.7, 1219.0], [54.8, 1219.0], [54.9, 1225.0], [55.0, 1228.0], [55.1, 1228.0], [55.2, 1233.0], [55.3, 1233.0], [55.4, 1236.0], [55.5, 1236.0], [55.6, 1238.0], [55.7, 1239.0], [55.8, 1242.0], [55.9, 1242.0], [56.0, 1242.0], [56.1, 1242.0], [56.2, 1246.0], [56.3, 1246.0], [56.4, 1246.0], [56.5, 1246.0], [56.6, 1246.0], [56.7, 1246.0], [56.8, 1253.0], [56.9, 1258.0], [57.0, 1258.0], [57.1, 1259.0], [57.2, 1260.0], [57.3, 1260.0], [57.4, 1260.0], [57.5, 1266.0], [57.6, 1269.0], [57.7, 1274.0], [57.8, 1274.0], [57.9, 1276.0], [58.0, 1278.0], [58.1, 1278.0], [58.2, 1278.0], [58.3, 1280.0], [58.4, 1285.0], [58.5, 1285.0], [58.6, 1286.0], [58.7, 1286.0], [58.8, 1288.0], [58.9, 1288.0], [59.0, 1292.0], [59.1, 1298.0], [59.2, 1306.0], [59.3, 1306.0], [59.4, 1307.0], [59.5, 1319.0], [59.6, 1322.0], [59.7, 1322.0], [59.8, 1323.0], [59.9, 1323.0], [60.0, 1327.0], [60.1, 1327.0], [60.2, 1328.0], [60.3, 1328.0], [60.4, 1328.0], [60.5, 1328.0], [60.6, 1328.0], [60.7, 1329.0], [60.8, 1329.0], [60.9, 1330.0], [61.0, 1331.0], [61.1, 1332.0], [61.2, 1332.0], [61.3, 1334.0], [61.4, 1335.0], [61.5, 1336.0], [61.6, 1336.0], [61.7, 1336.0], [61.8, 1338.0], [61.9, 1338.0], [62.0, 1338.0], [62.1, 1339.0], [62.2, 1349.0], [62.3, 1349.0], [62.4, 1350.0], [62.5, 1351.0], [62.6, 1352.0], [62.7, 1352.0], [62.8, 1352.0], [62.9, 1355.0], [63.0, 1356.0], [63.1, 1356.0], [63.2, 1358.0], [63.3, 1362.0], [63.4, 1362.0], [63.5, 1363.0], [63.6, 1363.0], [63.7, 1364.0], [63.8, 1364.0], [63.9, 1364.0], [64.0, 1364.0], [64.1, 1365.0], [64.2, 1365.0], [64.3, 1367.0], [64.4, 1371.0], [64.5, 1377.0], [64.6, 1377.0], [64.7, 1382.0], [64.8, 1383.0], [64.9, 1386.0], [65.0, 1386.0], [65.1, 1388.0], [65.2, 1388.0], [65.3, 1388.0], [65.4, 1388.0], [65.5, 1395.0], [65.6, 1396.0], [65.7, 1396.0], [65.8, 1401.0], [65.9, 1401.0], [66.0, 1403.0], [66.1, 1403.0], [66.2, 1406.0], [66.3, 1412.0], [66.4, 1413.0], [66.5, 1413.0], [66.6, 1416.0], [66.7, 1417.0], [66.8, 1417.0], [66.9, 1418.0], [67.0, 1419.0], [67.1, 1425.0], [67.2, 1425.0], [67.3, 1425.0], [67.4, 1426.0], [67.5, 1430.0], [67.6, 1430.0], [67.7, 1431.0], [67.8, 1434.0], [67.9, 1434.0], [68.0, 1434.0], [68.1, 1435.0], [68.2, 1436.0], [68.3, 1439.0], [68.4, 1439.0], [68.5, 1443.0], [68.6, 1450.0], [68.7, 1450.0], [68.8, 1456.0], [68.9, 1457.0], [69.0, 1457.0], [69.1, 1457.0], [69.2, 1459.0], [69.3, 1459.0], [69.4, 1461.0], [69.5, 1461.0], [69.6, 1462.0], [69.7, 1462.0], [69.8, 1463.0], [69.9, 1463.0], [70.0, 1463.0], [70.1, 1463.0], [70.2, 1463.0], [70.3, 1465.0], [70.4, 1466.0], [70.5, 1467.0], [70.6, 1467.0], [70.7, 1467.0], [70.8, 1468.0], [70.9, 1469.0], [71.0, 1469.0], [71.1, 1470.0], [71.2, 1473.0], [71.3, 1473.0], [71.4, 1473.0], [71.5, 1474.0], [71.6, 1478.0], [71.7, 1478.0], [71.8, 1479.0], [71.9, 1485.0], [72.0, 1486.0], [72.1, 1486.0], [72.2, 1487.0], [72.3, 1489.0], [72.4, 1491.0], [72.5, 1491.0], [72.6, 1492.0], [72.7, 1493.0], [72.8, 1493.0], [72.9, 1493.0], [73.0, 1495.0], [73.1, 1496.0], [73.2, 1497.0], [73.3, 1497.0], [73.4, 1504.0], [73.5, 1506.0], [73.6, 1506.0], [73.7, 1508.0], [73.8, 1512.0], [73.9, 1513.0], [74.0, 1513.0], [74.1, 1523.0], [74.2, 1526.0], [74.3, 1526.0], [74.4, 1526.0], [74.5, 1532.0], [74.6, 1536.0], [74.7, 1540.0], [74.8, 1540.0], [74.9, 1541.0], [75.0, 1542.0], [75.1, 1542.0], [75.2, 1542.0], [75.3, 1542.0], [75.4, 1548.0], [75.5, 1548.0], [75.6, 1549.0], [75.7, 1554.0], [75.8, 1558.0], [75.9, 1558.0], [76.0, 1560.0], [76.1, 1561.0], [76.2, 1564.0], [76.3, 1564.0], [76.4, 1566.0], [76.5, 1569.0], [76.6, 1573.0], [76.7, 1573.0], [76.8, 1576.0], [76.9, 1580.0], [77.0, 1580.0], [77.1, 1580.0], [77.2, 1581.0], [77.3, 1583.0], [77.4, 1583.0], [77.5, 1584.0], [77.6, 1585.0], [77.7, 1589.0], [77.8, 1589.0], [77.9, 1591.0], [78.0, 1593.0], [78.1, 1595.0], [78.2, 1595.0], [78.3, 1599.0], [78.4, 1600.0], [78.5, 1600.0], [78.6, 1610.0], [78.7, 1610.0], [78.8, 1612.0], [78.9, 1612.0], [79.0, 1621.0], [79.1, 1624.0], [79.2, 1632.0], [79.3, 1632.0], [79.4, 1633.0], [79.5, 1637.0], [79.6, 1640.0], [79.7, 1640.0], [79.8, 1640.0], [79.9, 1642.0], [80.0, 1645.0], [80.1, 1645.0], [80.2, 1646.0], [80.3, 1647.0], [80.4, 1647.0], [80.5, 1650.0], [80.6, 1652.0], [80.7, 1655.0], [80.8, 1655.0], [80.9, 1657.0], [81.0, 1658.0], [81.1, 1664.0], [81.2, 1664.0], [81.3, 1665.0], [81.4, 1666.0], [81.5, 1681.0], [81.6, 1681.0], [81.7, 1684.0], [81.8, 1689.0], [81.9, 1689.0], [82.0, 1689.0], [82.1, 1691.0], [82.2, 1692.0], [82.3, 1692.0], [82.4, 1698.0], [82.5, 1698.0], [82.6, 1701.0], [82.7, 1701.0], [82.8, 1705.0], [82.9, 1717.0], [83.0, 1722.0], [83.1, 1722.0], [83.2, 1726.0], [83.3, 1728.0], [83.4, 1728.0], [83.5, 1728.0], [83.6, 1730.0], [83.7, 1730.0], [83.8, 1730.0], [83.9, 1732.0], [84.0, 1733.0], [84.1, 1734.0], [84.2, 1734.0], [84.3, 1735.0], [84.4, 1746.0], [84.5, 1746.0], [84.6, 1746.0], [84.7, 1747.0], [84.8, 1755.0], [84.9, 1756.0], [85.0, 1756.0], [85.1, 1756.0], [85.2, 1757.0], [85.3, 1757.0], [85.4, 1757.0], [85.5, 1759.0], [85.6, 1761.0], [85.7, 1761.0], [85.8, 1761.0], [85.9, 1763.0], [86.0, 1767.0], [86.1, 1767.0], [86.2, 1768.0], [86.3, 1778.0], [86.4, 1780.0], [86.5, 1780.0], [86.6, 1783.0], [86.7, 1787.0], [86.8, 1787.0], [86.9, 1788.0], [87.0, 1790.0], [87.1, 1791.0], [87.2, 1791.0], [87.3, 1792.0], [87.4, 1799.0], [87.5, 1800.0], [87.6, 1800.0], [87.7, 1805.0], [87.8, 1825.0], [87.9, 1826.0], [88.0, 1826.0], [88.1, 1828.0], [88.2, 1828.0], [88.3, 1830.0], [88.4, 1830.0], [88.5, 1834.0], [88.6, 1838.0], [88.7, 1838.0], [88.8, 1849.0], [88.9, 1853.0], [89.0, 1860.0], [89.1, 1860.0], [89.2, 1861.0], [89.3, 1863.0], [89.4, 1866.0], [89.5, 1866.0], [89.6, 1868.0], [89.7, 1874.0], [89.8, 1877.0], [89.9, 1877.0], [90.0, 1879.0], [90.1, 1888.0], [90.2, 1888.0], [90.3, 1895.0], [90.4, 1899.0], [90.5, 1910.0], [90.6, 1910.0], [90.7, 1912.0], [90.8, 1913.0], [90.9, 1914.0], [91.0, 1914.0], [91.1, 1922.0], [91.2, 1947.0], [91.3, 1947.0], [91.4, 1947.0], [91.5, 1952.0], [91.6, 1957.0], [91.7, 1957.0], [91.8, 1958.0], [91.9, 1965.0], [92.0, 1989.0], [92.1, 1989.0], [92.2, 1991.0], [92.3, 1995.0], [92.4, 2006.0], [92.5, 2006.0], [92.6, 2008.0], [92.7, 2010.0], [92.8, 2017.0], [92.9, 2017.0], [93.0, 2019.0], [93.1, 2019.0], [93.2, 2020.0], [93.3, 2020.0], [93.4, 2022.0], [93.5, 2024.0], [93.6, 2024.0], [93.7, 2037.0], [93.8, 2037.0], [93.9, 2053.0], [94.0, 2053.0], [94.1, 2073.0], [94.2, 2076.0], [94.3, 2082.0], [94.4, 2082.0], [94.5, 2087.0], [94.6, 2105.0], [94.7, 2105.0], [94.8, 2105.0], [94.9, 2108.0], [95.0, 2131.0], [95.1, 2131.0], [95.2, 2133.0], [95.3, 2180.0], [95.4, 2194.0], [95.5, 2194.0], [95.6, 2213.0], [95.7, 2265.0], [95.8, 2295.0], [95.9, 2295.0], [96.0, 2295.0], [96.1, 2314.0], [96.2, 2353.0], [96.3, 2353.0], [96.4, 2354.0], [96.5, 2367.0], [96.6, 2375.0], [96.7, 2375.0], [96.8, 2377.0], [96.9, 2391.0], [97.0, 2391.0], [97.1, 2407.0], [97.2, 2431.0], [97.3, 2465.0], [97.4, 2465.0], [97.5, 2507.0], [97.6, 2613.0], [97.7, 2749.0], [97.8, 2749.0], [97.9, 2756.0], [98.0, 2780.0], [98.1, 2820.0], [98.2, 2820.0], [98.3, 2930.0], [98.4, 2970.0], [98.5, 2970.0], [98.6, 3032.0], [98.7, 3064.0], [98.8, 3068.0], [98.9, 3068.0], [99.0, 3121.0], [99.1, 3262.0], [99.2, 3292.0], [99.3, 3292.0], [99.4, 3393.0], [99.5, 3520.0], [99.6, 3550.0], [99.7, 3550.0], [99.8, 3656.0], [99.9, 4145.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 300.0, "maxY": 74.0, "series": [{"data": [[600.0, 65.0], [700.0, 47.0], [800.0, 48.0], [900.0, 60.0], [1000.0, 74.0], [1100.0, 62.0], [1200.0, 44.0], [1300.0, 48.0], [1400.0, 56.0], [1500.0, 37.0], [1600.0, 31.0], [1700.0, 36.0], [1800.0, 22.0], [1900.0, 14.0], [2000.0, 16.0], [2100.0, 7.0], [2300.0, 7.0], [2200.0, 4.0], [2400.0, 3.0], [2500.0, 1.0], [2600.0, 1.0], [2700.0, 3.0], [2800.0, 1.0], [2900.0, 2.0], [3000.0, 3.0], [3100.0, 1.0], [3200.0, 2.0], [3300.0, 1.0], [3500.0, 2.0], [3600.0, 1.0], [4100.0, 1.0], [300.0, 5.0], [400.0, 11.0], [500.0, 19.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 4100.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 16.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 523.0, "series": [{"data": [[0.0, 16.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 523.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 196.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 4.5, "minX": 1.60231632E12, "maxY": 12.0, "series": [{"data": [[1.60231632E12, 12.0], [1.60231644E12, 4.5], [1.60231638E12, 11.989949748743719]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60231644E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 632.0, "minX": 1.0, "maxY": 2756.0, "series": [{"data": [[8.0, 699.0], [4.0, 1156.0], [2.0, 1108.0], [1.0, 1071.0], [9.0, 632.0], [10.0, 648.0], [5.0, 667.0], [11.0, 700.0], [12.0, 1256.8066298342562], [6.0, 2756.0], [3.0, 1826.0], [7.0, 678.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[11.910204081632651, 1254.243537414968]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 12.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 56.5, "minX": 1.60231632E12, "maxY": 1365883.7, "series": [{"data": [[1.60231632E12, 449516.4], [1.60231644E12, 20374.6], [1.60231638E12, 1365883.7]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60231632E12, 984.5333333333333], [1.60231644E12, 56.5], [1.60231638E12, 4482.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60231644E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 1205.396984924622, "minX": 1.60231632E12, "maxY": 1479.123076923077, "series": [{"data": [[1.60231632E12, 1479.123076923077], [1.60231644E12, 1245.125], [1.60231638E12, 1205.396984924622]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60231644E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 1204.437185929648, "minX": 1.60231632E12, "maxY": 1477.6846153846147, "series": [{"data": [[1.60231632E12, 1477.6846153846147], [1.60231644E12, 1243.75], [1.60231638E12, 1204.437185929648]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60231644E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.60231632E12, "maxY": 0.9384615384615388, "series": [{"data": [[1.60231632E12, 0.9384615384615388], [1.60231644E12, 0.0], [1.60231638E12, 0.02177554438860969]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60231644E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 382.0, "minX": 1.60231632E12, "maxY": 4145.0, "series": [{"data": [[1.60231632E12, 3656.0], [1.60231644E12, 2756.0], [1.60231638E12, 4145.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60231632E12, 384.7159998750687], [1.60231644E12, 667.0], [1.60231638E12, 428.14599957227705]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60231632E12, 385.18760004997256], [1.60231644E12, 667.0], [1.60231638E12, 429.76060017108915]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60231632E12, 384.9779999375343], [1.60231644E12, 667.0], [1.60231638E12, 429.0429997861385]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60231632E12, 384.0], [1.60231644E12, 667.0], [1.60231638E12, 382.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60231632E12, 1306.0], [1.60231644E12, 1089.5], [1.60231638E12, 1150.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60231644E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 541.5, "minX": 2.0, "maxY": 2737.5, "series": [{"data": [[2.0, 2737.5], [8.0, 1268.5], [9.0, 1325.5], [10.0, 1164.5], [11.0, 1031.0], [12.0, 840.5], [13.0, 1126.0], [14.0, 822.0], [15.0, 640.0], [16.0, 541.5], [17.0, 851.0], [6.0, 1683.5], [7.0, 1242.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 17.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 541.5, "minX": 2.0, "maxY": 2734.5, "series": [{"data": [[2.0, 2734.5], [8.0, 1266.5], [9.0, 1324.5], [10.0, 1163.5], [11.0, 1030.0], [12.0, 840.0], [13.0, 1125.0], [14.0, 822.0], [15.0, 640.0], [16.0, 541.5], [17.0, 848.0], [6.0, 1681.5], [7.0, 1241.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 17.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 2.3666666666666667, "minX": 1.60231632E12, "maxY": 9.883333333333333, "series": [{"data": [[1.60231632E12, 2.3666666666666667], [1.60231638E12, 9.883333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60231638E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.13333333333333333, "minX": 1.60231632E12, "maxY": 9.95, "series": [{"data": [[1.60231632E12, 2.1666666666666665], [1.60231644E12, 0.13333333333333333], [1.60231638E12, 9.95]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60231644E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.13333333333333333, "minX": 1.60231632E12, "maxY": 9.95, "series": [{"data": [[1.60231632E12, 2.1666666666666665], [1.60231644E12, 0.13333333333333333], [1.60231638E12, 9.95]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60231644E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.13333333333333333, "minX": 1.60231632E12, "maxY": 9.95, "series": [{"data": [[1.60231632E12, 2.1666666666666665], [1.60231644E12, 0.13333333333333333], [1.60231638E12, 9.95]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60231644E12, "title": "Total Transactions Per Second"}},
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

