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
        data: {"result": {"minY": 381.0, "minX": 0.0, "maxY": 3897.0, "series": [{"data": [[0.0, 381.0], [0.1, 381.0], [0.2, 392.0], [0.3, 392.0], [0.4, 392.0], [0.5, 399.0], [0.6, 400.0], [0.7, 403.0], [0.8, 403.0], [0.9, 406.0], [1.0, 406.0], [1.1, 412.0], [1.2, 412.0], [1.3, 412.0], [1.4, 412.0], [1.5, 424.0], [1.6, 424.0], [1.7, 446.0], [1.8, 448.0], [1.9, 448.0], [2.0, 449.0], [2.1, 458.0], [2.2, 458.0], [2.3, 458.0], [2.4, 470.0], [2.5, 475.0], [2.6, 494.0], [2.7, 494.0], [2.8, 496.0], [2.9, 517.0], [3.0, 534.0], [3.1, 534.0], [3.2, 537.0], [3.3, 541.0], [3.4, 541.0], [3.5, 554.0], [3.6, 559.0], [3.7, 561.0], [3.8, 561.0], [3.9, 564.0], [4.0, 570.0], [4.1, 573.0], [4.2, 573.0], [4.3, 573.0], [4.4, 577.0], [4.5, 578.0], [4.6, 578.0], [4.7, 584.0], [4.8, 586.0], [4.9, 589.0], [5.0, 589.0], [5.1, 590.0], [5.2, 590.0], [5.3, 590.0], [5.4, 590.0], [5.5, 591.0], [5.6, 594.0], [5.7, 594.0], [5.8, 594.0], [5.9, 595.0], [6.0, 598.0], [6.1, 598.0], [6.2, 599.0], [6.3, 601.0], [6.4, 602.0], [6.5, 602.0], [6.6, 602.0], [6.7, 604.0], [6.8, 604.0], [6.9, 607.0], [7.0, 611.0], [7.1, 612.0], [7.2, 612.0], [7.3, 612.0], [7.4, 613.0], [7.5, 621.0], [7.6, 621.0], [7.7, 623.0], [7.8, 625.0], [7.9, 625.0], [8.0, 625.0], [8.1, 626.0], [8.2, 626.0], [8.3, 630.0], [8.4, 630.0], [8.5, 631.0], [8.6, 631.0], [8.7, 631.0], [8.8, 631.0], [8.9, 632.0], [9.0, 634.0], [9.1, 634.0], [9.2, 634.0], [9.3, 635.0], [9.4, 635.0], [9.5, 635.0], [9.6, 636.0], [9.7, 636.0], [9.8, 643.0], [9.9, 643.0], [10.0, 643.0], [10.1, 644.0], [10.2, 644.0], [10.3, 646.0], [10.4, 648.0], [10.5, 650.0], [10.6, 650.0], [10.7, 652.0], [10.8, 652.0], [10.9, 657.0], [11.0, 657.0], [11.1, 657.0], [11.2, 659.0], [11.3, 660.0], [11.4, 660.0], [11.5, 660.0], [11.6, 660.0], [11.7, 660.0], [11.8, 662.0], [11.9, 663.0], [12.0, 665.0], [12.1, 665.0], [12.2, 665.0], [12.3, 666.0], [12.4, 668.0], [12.5, 668.0], [12.6, 669.0], [12.7, 670.0], [12.8, 671.0], [12.9, 671.0], [13.0, 672.0], [13.1, 672.0], [13.2, 678.0], [13.3, 678.0], [13.4, 680.0], [13.5, 681.0], [13.6, 681.0], [13.7, 683.0], [13.8, 683.0], [13.9, 687.0], [14.0, 687.0], [14.1, 689.0], [14.2, 690.0], [14.3, 690.0], [14.4, 690.0], [14.5, 692.0], [14.6, 692.0], [14.7, 696.0], [14.8, 696.0], [14.9, 698.0], [15.0, 699.0], [15.1, 699.0], [15.2, 701.0], [15.3, 701.0], [15.4, 702.0], [15.5, 702.0], [15.6, 704.0], [15.7, 704.0], [15.8, 705.0], [15.9, 705.0], [16.0, 705.0], [16.1, 708.0], [16.2, 708.0], [16.3, 708.0], [16.4, 708.0], [16.5, 709.0], [16.6, 709.0], [16.7, 709.0], [16.8, 710.0], [16.9, 716.0], [17.0, 716.0], [17.1, 717.0], [17.2, 717.0], [17.3, 718.0], [17.4, 718.0], [17.5, 720.0], [17.6, 721.0], [17.7, 723.0], [17.8, 723.0], [17.9, 723.0], [18.0, 725.0], [18.1, 726.0], [18.2, 726.0], [18.3, 733.0], [18.4, 736.0], [18.5, 736.0], [18.6, 746.0], [18.7, 749.0], [18.8, 749.0], [18.9, 749.0], [19.0, 750.0], [19.1, 751.0], [19.2, 752.0], [19.3, 752.0], [19.4, 756.0], [19.5, 759.0], [19.6, 761.0], [19.7, 761.0], [19.8, 769.0], [19.9, 770.0], [20.0, 770.0], [20.1, 771.0], [20.2, 789.0], [20.3, 792.0], [20.4, 792.0], [20.5, 800.0], [20.6, 800.0], [20.7, 803.0], [20.8, 803.0], [20.9, 809.0], [21.0, 812.0], [21.1, 812.0], [21.2, 812.0], [21.3, 813.0], [21.4, 819.0], [21.5, 819.0], [21.6, 819.0], [21.7, 821.0], [21.8, 824.0], [21.9, 824.0], [22.0, 826.0], [22.1, 828.0], [22.2, 834.0], [22.3, 834.0], [22.4, 834.0], [22.5, 836.0], [22.6, 844.0], [22.7, 844.0], [22.8, 857.0], [22.9, 860.0], [23.0, 863.0], [23.1, 863.0], [23.2, 863.0], [23.3, 863.0], [23.4, 863.0], [23.5, 865.0], [23.6, 868.0], [23.7, 872.0], [23.8, 872.0], [23.9, 873.0], [24.0, 877.0], [24.1, 880.0], [24.2, 880.0], [24.3, 884.0], [24.4, 884.0], [24.5, 885.0], [24.6, 885.0], [24.7, 885.0], [24.8, 885.0], [24.9, 887.0], [25.0, 887.0], [25.1, 888.0], [25.2, 888.0], [25.3, 888.0], [25.4, 889.0], [25.5, 889.0], [25.6, 889.0], [25.7, 889.0], [25.8, 890.0], [25.9, 896.0], [26.0, 900.0], [26.1, 900.0], [26.2, 905.0], [26.3, 907.0], [26.4, 908.0], [26.5, 908.0], [26.6, 909.0], [26.7, 913.0], [26.8, 913.0], [26.9, 915.0], [27.0, 916.0], [27.1, 916.0], [27.2, 916.0], [27.3, 918.0], [27.4, 919.0], [27.5, 920.0], [27.6, 920.0], [27.7, 920.0], [27.8, 922.0], [27.9, 923.0], [28.0, 923.0], [28.1, 928.0], [28.2, 930.0], [28.3, 932.0], [28.4, 932.0], [28.5, 932.0], [28.6, 933.0], [28.7, 933.0], [28.8, 933.0], [28.9, 936.0], [29.0, 940.0], [29.1, 940.0], [29.2, 940.0], [29.3, 944.0], [29.4, 946.0], [29.5, 946.0], [29.6, 947.0], [29.7, 950.0], [29.8, 950.0], [29.9, 950.0], [30.0, 953.0], [30.1, 963.0], [30.2, 963.0], [30.3, 963.0], [30.4, 965.0], [30.5, 966.0], [30.6, 966.0], [30.7, 971.0], [30.8, 979.0], [30.9, 980.0], [31.0, 980.0], [31.1, 980.0], [31.2, 981.0], [31.3, 981.0], [31.4, 981.0], [31.5, 981.0], [31.6, 981.0], [31.7, 981.0], [31.8, 982.0], [31.9, 994.0], [32.0, 999.0], [32.1, 999.0], [32.2, 1000.0], [32.3, 1001.0], [32.4, 1001.0], [32.5, 1001.0], [32.6, 1009.0], [32.7, 1021.0], [32.8, 1026.0], [32.9, 1026.0], [33.0, 1028.0], [33.1, 1029.0], [33.2, 1031.0], [33.3, 1031.0], [33.4, 1033.0], [33.5, 1034.0], [33.6, 1034.0], [33.7, 1034.0], [33.8, 1035.0], [33.9, 1040.0], [34.0, 1040.0], [34.1, 1040.0], [34.2, 1042.0], [34.3, 1043.0], [34.4, 1043.0], [34.5, 1046.0], [34.6, 1051.0], [34.7, 1053.0], [34.8, 1053.0], [34.9, 1055.0], [35.0, 1056.0], [35.1, 1056.0], [35.2, 1058.0], [35.3, 1059.0], [35.4, 1059.0], [35.5, 1059.0], [35.6, 1061.0], [35.7, 1062.0], [35.8, 1068.0], [35.9, 1068.0], [36.0, 1069.0], [36.1, 1072.0], [36.2, 1073.0], [36.3, 1073.0], [36.4, 1073.0], [36.5, 1077.0], [36.6, 1077.0], [36.7, 1077.0], [36.8, 1079.0], [36.9, 1081.0], [37.0, 1081.0], [37.1, 1082.0], [37.2, 1082.0], [37.3, 1082.0], [37.4, 1082.0], [37.5, 1084.0], [37.6, 1086.0], [37.7, 1086.0], [37.8, 1086.0], [37.9, 1087.0], [38.0, 1087.0], [38.1, 1088.0], [38.2, 1088.0], [38.3, 1088.0], [38.4, 1090.0], [38.5, 1090.0], [38.6, 1090.0], [38.7, 1091.0], [38.8, 1096.0], [38.9, 1096.0], [39.0, 1098.0], [39.1, 1101.0], [39.2, 1102.0], [39.3, 1102.0], [39.4, 1103.0], [39.5, 1106.0], [39.6, 1106.0], [39.7, 1106.0], [39.8, 1107.0], [39.9, 1109.0], [40.0, 1109.0], [40.1, 1109.0], [40.2, 1111.0], [40.3, 1111.0], [40.4, 1111.0], [40.5, 1113.0], [40.6, 1113.0], [40.7, 1114.0], [40.8, 1114.0], [40.9, 1114.0], [41.0, 1117.0], [41.1, 1124.0], [41.2, 1124.0], [41.3, 1124.0], [41.4, 1126.0], [41.5, 1132.0], [41.6, 1132.0], [41.7, 1134.0], [41.8, 1136.0], [41.9, 1136.0], [42.0, 1136.0], [42.1, 1141.0], [42.2, 1141.0], [42.3, 1141.0], [42.4, 1147.0], [42.5, 1147.0], [42.6, 1148.0], [42.7, 1148.0], [42.8, 1157.0], [42.9, 1159.0], [43.0, 1162.0], [43.1, 1162.0], [43.2, 1165.0], [43.3, 1165.0], [43.4, 1165.0], [43.5, 1165.0], [43.6, 1166.0], [43.7, 1169.0], [43.8, 1169.0], [43.9, 1169.0], [44.0, 1169.0], [44.1, 1169.0], [44.2, 1169.0], [44.3, 1171.0], [44.4, 1171.0], [44.5, 1176.0], [44.6, 1176.0], [44.7, 1176.0], [44.8, 1177.0], [44.9, 1177.0], [45.0, 1177.0], [45.1, 1181.0], [45.2, 1186.0], [45.3, 1186.0], [45.4, 1186.0], [45.5, 1186.0], [45.6, 1192.0], [45.7, 1192.0], [45.8, 1194.0], [45.9, 1195.0], [46.0, 1195.0], [46.1, 1195.0], [46.2, 1195.0], [46.3, 1196.0], [46.4, 1196.0], [46.5, 1196.0], [46.6, 1200.0], [46.7, 1202.0], [46.8, 1202.0], [46.9, 1205.0], [47.0, 1206.0], [47.1, 1206.0], [47.2, 1206.0], [47.3, 1207.0], [47.4, 1207.0], [47.5, 1210.0], [47.6, 1210.0], [47.7, 1213.0], [47.8, 1213.0], [47.9, 1213.0], [48.0, 1213.0], [48.1, 1216.0], [48.2, 1219.0], [48.3, 1219.0], [48.4, 1219.0], [48.5, 1221.0], [48.6, 1222.0], [48.7, 1222.0], [48.8, 1225.0], [48.9, 1226.0], [49.0, 1226.0], [49.1, 1226.0], [49.2, 1227.0], [49.3, 1228.0], [49.4, 1228.0], [49.5, 1228.0], [49.6, 1228.0], [49.7, 1229.0], [49.8, 1230.0], [49.9, 1230.0], [50.0, 1232.0], [50.1, 1234.0], [50.2, 1234.0], [50.3, 1237.0], [50.4, 1240.0], [50.5, 1240.0], [50.6, 1240.0], [50.7, 1241.0], [50.8, 1243.0], [50.9, 1244.0], [51.0, 1244.0], [51.1, 1245.0], [51.2, 1246.0], [51.3, 1250.0], [51.4, 1250.0], [51.5, 1252.0], [51.6, 1254.0], [51.7, 1254.0], [51.8, 1257.0], [51.9, 1257.0], [52.0, 1261.0], [52.1, 1261.0], [52.2, 1263.0], [52.3, 1264.0], [52.4, 1265.0], [52.5, 1265.0], [52.6, 1265.0], [52.7, 1265.0], [52.8, 1267.0], [52.9, 1267.0], [53.0, 1268.0], [53.1, 1269.0], [53.2, 1269.0], [53.3, 1269.0], [53.4, 1270.0], [53.5, 1272.0], [53.6, 1272.0], [53.7, 1272.0], [53.8, 1274.0], [53.9, 1275.0], [54.0, 1275.0], [54.1, 1275.0], [54.2, 1277.0], [54.3, 1282.0], [54.4, 1282.0], [54.5, 1284.0], [54.6, 1286.0], [54.7, 1288.0], [54.8, 1288.0], [54.9, 1290.0], [55.0, 1292.0], [55.1, 1292.0], [55.2, 1293.0], [55.3, 1297.0], [55.4, 1297.0], [55.5, 1297.0], [55.6, 1297.0], [55.7, 1298.0], [55.8, 1299.0], [55.9, 1299.0], [56.0, 1299.0], [56.1, 1300.0], [56.2, 1303.0], [56.3, 1303.0], [56.4, 1304.0], [56.5, 1309.0], [56.6, 1310.0], [56.7, 1310.0], [56.8, 1312.0], [56.9, 1316.0], [57.0, 1316.0], [57.1, 1317.0], [57.2, 1322.0], [57.3, 1324.0], [57.4, 1324.0], [57.5, 1324.0], [57.6, 1326.0], [57.7, 1327.0], [57.8, 1327.0], [57.9, 1329.0], [58.0, 1331.0], [58.1, 1333.0], [58.2, 1333.0], [58.3, 1333.0], [58.4, 1334.0], [58.5, 1334.0], [58.6, 1334.0], [58.7, 1335.0], [58.8, 1339.0], [58.9, 1339.0], [59.0, 1339.0], [59.1, 1342.0], [59.2, 1346.0], [59.3, 1346.0], [59.4, 1347.0], [59.5, 1348.0], [59.6, 1349.0], [59.7, 1349.0], [59.8, 1350.0], [59.9, 1352.0], [60.0, 1353.0], [60.1, 1353.0], [60.2, 1354.0], [60.3, 1355.0], [60.4, 1355.0], [60.5, 1355.0], [60.6, 1356.0], [60.7, 1356.0], [60.8, 1356.0], [60.9, 1363.0], [61.0, 1367.0], [61.1, 1367.0], [61.2, 1367.0], [61.3, 1369.0], [61.4, 1369.0], [61.5, 1370.0], [61.6, 1370.0], [61.7, 1373.0], [61.8, 1373.0], [61.9, 1373.0], [62.0, 1374.0], [62.1, 1374.0], [62.2, 1376.0], [62.3, 1376.0], [62.4, 1379.0], [62.5, 1384.0], [62.6, 1384.0], [62.7, 1384.0], [62.8, 1384.0], [62.9, 1385.0], [63.0, 1386.0], [63.1, 1386.0], [63.2, 1386.0], [63.3, 1386.0], [63.4, 1386.0], [63.5, 1387.0], [63.6, 1388.0], [63.7, 1390.0], [63.8, 1390.0], [63.9, 1392.0], [64.0, 1394.0], [64.1, 1394.0], [64.2, 1394.0], [64.3, 1394.0], [64.4, 1398.0], [64.5, 1400.0], [64.6, 1400.0], [64.7, 1402.0], [64.8, 1402.0], [64.9, 1405.0], [65.0, 1405.0], [65.1, 1408.0], [65.2, 1410.0], [65.3, 1410.0], [65.4, 1413.0], [65.5, 1415.0], [65.6, 1416.0], [65.7, 1416.0], [65.8, 1417.0], [65.9, 1422.0], [66.0, 1422.0], [66.1, 1422.0], [66.2, 1423.0], [66.3, 1423.0], [66.4, 1425.0], [66.5, 1425.0], [66.6, 1427.0], [66.7, 1428.0], [66.8, 1428.0], [66.9, 1428.0], [67.0, 1429.0], [67.1, 1431.0], [67.2, 1431.0], [67.3, 1431.0], [67.4, 1433.0], [67.5, 1434.0], [67.6, 1434.0], [67.7, 1435.0], [67.8, 1438.0], [67.9, 1440.0], [68.0, 1440.0], [68.1, 1445.0], [68.2, 1447.0], [68.3, 1448.0], [68.4, 1448.0], [68.5, 1451.0], [68.6, 1452.0], [68.7, 1452.0], [68.8, 1455.0], [68.9, 1457.0], [69.0, 1457.0], [69.1, 1457.0], [69.2, 1458.0], [69.3, 1460.0], [69.4, 1461.0], [69.5, 1461.0], [69.6, 1462.0], [69.7, 1464.0], [69.8, 1466.0], [69.9, 1466.0], [70.0, 1466.0], [70.1, 1467.0], [70.2, 1467.0], [70.3, 1468.0], [70.4, 1472.0], [70.5, 1472.0], [70.6, 1472.0], [70.7, 1473.0], [70.8, 1478.0], [70.9, 1478.0], [71.0, 1478.0], [71.1, 1479.0], [71.2, 1480.0], [71.3, 1480.0], [71.4, 1480.0], [71.5, 1482.0], [71.6, 1482.0], [71.7, 1482.0], [71.8, 1484.0], [71.9, 1489.0], [72.0, 1492.0], [72.1, 1492.0], [72.2, 1495.0], [72.3, 1497.0], [72.4, 1497.0], [72.5, 1497.0], [72.6, 1498.0], [72.7, 1501.0], [72.8, 1504.0], [72.9, 1504.0], [73.0, 1506.0], [73.1, 1508.0], [73.2, 1510.0], [73.3, 1510.0], [73.4, 1511.0], [73.5, 1512.0], [73.6, 1512.0], [73.7, 1512.0], [73.8, 1515.0], [73.9, 1527.0], [74.0, 1527.0], [74.1, 1528.0], [74.2, 1536.0], [74.3, 1537.0], [74.4, 1537.0], [74.5, 1538.0], [74.6, 1541.0], [74.7, 1544.0], [74.8, 1544.0], [74.9, 1547.0], [75.0, 1548.0], [75.1, 1548.0], [75.2, 1550.0], [75.3, 1555.0], [75.4, 1556.0], [75.5, 1556.0], [75.6, 1561.0], [75.7, 1564.0], [75.8, 1569.0], [75.9, 1569.0], [76.0, 1575.0], [76.1, 1577.0], [76.2, 1577.0], [76.3, 1577.0], [76.4, 1578.0], [76.5, 1578.0], [76.6, 1578.0], [76.7, 1578.0], [76.8, 1579.0], [76.9, 1579.0], [77.0, 1579.0], [77.1, 1587.0], [77.2, 1593.0], [77.3, 1596.0], [77.4, 1596.0], [77.5, 1596.0], [77.6, 1602.0], [77.7, 1605.0], [77.8, 1605.0], [77.9, 1610.0], [78.0, 1617.0], [78.1, 1619.0], [78.2, 1619.0], [78.3, 1625.0], [78.4, 1631.0], [78.5, 1631.0], [78.6, 1633.0], [78.7, 1636.0], [78.8, 1638.0], [78.9, 1638.0], [79.0, 1639.0], [79.1, 1644.0], [79.2, 1646.0], [79.3, 1646.0], [79.4, 1646.0], [79.5, 1651.0], [79.6, 1651.0], [79.7, 1651.0], [79.8, 1655.0], [79.9, 1655.0], [80.0, 1658.0], [80.1, 1658.0], [80.2, 1662.0], [80.3, 1666.0], [80.4, 1666.0], [80.5, 1669.0], [80.6, 1673.0], [80.7, 1679.0], [80.8, 1679.0], [80.9, 1681.0], [81.0, 1681.0], [81.1, 1688.0], [81.2, 1688.0], [81.3, 1692.0], [81.4, 1695.0], [81.5, 1704.0], [81.6, 1704.0], [81.7, 1714.0], [81.8, 1714.0], [81.9, 1714.0], [82.0, 1716.0], [82.1, 1719.0], [82.2, 1724.0], [82.3, 1724.0], [82.4, 1724.0], [82.5, 1727.0], [82.6, 1728.0], [82.7, 1728.0], [82.8, 1732.0], [82.9, 1733.0], [83.0, 1740.0], [83.1, 1740.0], [83.2, 1743.0], [83.3, 1745.0], [83.4, 1745.0], [83.5, 1752.0], [83.6, 1759.0], [83.7, 1759.0], [83.8, 1759.0], [83.9, 1759.0], [84.0, 1761.0], [84.1, 1761.0], [84.2, 1761.0], [84.3, 1766.0], [84.4, 1766.0], [84.5, 1769.0], [84.6, 1769.0], [84.7, 1770.0], [84.8, 1773.0], [84.9, 1782.0], [85.0, 1782.0], [85.1, 1783.0], [85.2, 1783.0], [85.3, 1783.0], [85.4, 1790.0], [85.5, 1790.0], [85.6, 1790.0], [85.7, 1790.0], [85.8, 1791.0], [85.9, 1792.0], [86.0, 1794.0], [86.1, 1794.0], [86.2, 1795.0], [86.3, 1800.0], [86.4, 1803.0], [86.5, 1803.0], [86.6, 1811.0], [86.7, 1811.0], [86.8, 1811.0], [86.9, 1812.0], [87.0, 1812.0], [87.1, 1821.0], [87.2, 1821.0], [87.3, 1832.0], [87.4, 1837.0], [87.5, 1841.0], [87.6, 1841.0], [87.7, 1845.0], [87.8, 1855.0], [87.9, 1856.0], [88.0, 1856.0], [88.1, 1857.0], [88.2, 1859.0], [88.3, 1863.0], [88.4, 1863.0], [88.5, 1867.0], [88.6, 1867.0], [88.7, 1867.0], [88.8, 1868.0], [88.9, 1869.0], [89.0, 1870.0], [89.1, 1870.0], [89.2, 1876.0], [89.3, 1882.0], [89.4, 1887.0], [89.5, 1887.0], [89.6, 1887.0], [89.7, 1888.0], [89.8, 1893.0], [89.9, 1893.0], [90.0, 1901.0], [90.1, 1907.0], [90.2, 1907.0], [90.3, 1910.0], [90.4, 1913.0], [90.5, 1917.0], [90.6, 1917.0], [90.7, 1925.0], [90.8, 1927.0], [90.9, 1928.0], [91.0, 1928.0], [91.1, 1930.0], [91.2, 1936.0], [91.3, 1941.0], [91.4, 1941.0], [91.5, 1942.0], [91.6, 1946.0], [91.7, 1946.0], [91.8, 1956.0], [91.9, 1982.0], [92.0, 1988.0], [92.1, 1988.0], [92.2, 1991.0], [92.3, 1993.0], [92.4, 1996.0], [92.5, 1996.0], [92.6, 2003.0], [92.7, 2003.0], [92.8, 2013.0], [92.9, 2013.0], [93.0, 2019.0], [93.1, 2020.0], [93.2, 2029.0], [93.3, 2029.0], [93.4, 2037.0], [93.5, 2047.0], [93.6, 2047.0], [93.7, 2048.0], [93.8, 2062.0], [93.9, 2080.0], [94.0, 2080.0], [94.1, 2081.0], [94.2, 2130.0], [94.3, 2145.0], [94.4, 2145.0], [94.5, 2153.0], [94.6, 2171.0], [94.7, 2175.0], [94.8, 2175.0], [94.9, 2177.0], [95.0, 2185.0], [95.1, 2185.0], [95.2, 2188.0], [95.3, 2208.0], [95.4, 2215.0], [95.5, 2215.0], [95.6, 2248.0], [95.7, 2254.0], [95.8, 2257.0], [95.9, 2257.0], [96.0, 2276.0], [96.1, 2306.0], [96.2, 2403.0], [96.3, 2403.0], [96.4, 2408.0], [96.5, 2424.0], [96.6, 2433.0], [96.7, 2433.0], [96.8, 2454.0], [96.9, 2499.0], [97.0, 2499.0], [97.1, 2523.0], [97.2, 2601.0], [97.3, 2608.0], [97.4, 2608.0], [97.5, 2620.0], [97.6, 2657.0], [97.7, 2665.0], [97.8, 2665.0], [97.9, 2718.0], [98.0, 2927.0], [98.1, 2933.0], [98.2, 2933.0], [98.3, 3036.0], [98.4, 3086.0], [98.5, 3086.0], [98.6, 3102.0], [98.7, 3142.0], [98.8, 3249.0], [98.9, 3249.0], [99.0, 3251.0], [99.1, 3326.0], [99.2, 3537.0], [99.3, 3537.0], [99.4, 3610.0], [99.5, 3735.0], [99.6, 3747.0], [99.7, 3747.0], [99.8, 3885.0], [99.9, 3897.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 300.0, "maxY": 70.0, "series": [{"data": [[600.0, 65.0], [700.0, 39.0], [800.0, 41.0], [900.0, 45.0], [1000.0, 51.0], [1100.0, 55.0], [1200.0, 70.0], [1300.0, 62.0], [1400.0, 60.0], [1500.0, 36.0], [1600.0, 29.0], [1700.0, 35.0], [1800.0, 27.0], [1900.0, 19.0], [2000.0, 12.0], [2100.0, 8.0], [2200.0, 6.0], [2300.0, 1.0], [2400.0, 6.0], [2500.0, 1.0], [2600.0, 5.0], [2700.0, 1.0], [2900.0, 2.0], [3000.0, 2.0], [3100.0, 2.0], [3200.0, 2.0], [3300.0, 1.0], [3500.0, 1.0], [3600.0, 1.0], [3700.0, 2.0], [3800.0, 2.0], [300.0, 4.0], [400.0, 17.0], [500.0, 25.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3800.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 11.312500000000002, "minX": 1.60219026E12, "maxY": 12.0, "series": [{"data": [[1.60219032E12, 12.0], [1.60219038E12, 11.312500000000002], [1.60219026E12, 12.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60219038E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 586.0, "minX": 1.0, "maxY": 2657.0, "series": [{"data": [[8.0, 652.0], [4.0, 681.0], [2.0, 1026.0], [1.0, 1415.0], [9.0, 670.0], [10.0, 586.0], [5.0, 594.0], [11.0, 2657.0], [12.0, 1281.9613259668508], [6.0, 1759.0], [3.0, 1422.0], [7.0, 646.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[11.910204081632651, 1279.2489795918366]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 12.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 598.0, "minX": 1.60219026E12, "maxY": 1305133.5, "series": [{"data": [[1.60219032E12, 1305133.5], [1.60219038E12, 217073.03333333333], [1.60219026E12, 313553.6666666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60219032E12, 4214.016666666666], [1.60219038E12, 711.0166666666667], [1.60219026E12, 598.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60219038E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 1047.7395833333335, "minX": 1.60219026E12, "maxY": 1462.405063291139, "series": [{"data": [[1.60219032E12, 1293.098214285714], [1.60219038E12, 1047.7395833333335], [1.60219026E12, 1462.405063291139]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60219038E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 1046.75, "minX": 1.60219026E12, "maxY": 1461.037974683545, "series": [{"data": [[1.60219032E12, 1292.1160714285704], [1.60219038E12, 1046.75], [1.60219026E12, 1461.037974683545]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60219038E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.60219026E12, "maxY": 1.848101265822785, "series": [{"data": [[1.60219032E12, 0.023214285714285698], [1.60219038E12, 0.0], [1.60219026E12, 1.848101265822785]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60219038E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 381.0, "minX": 1.60219026E12, "maxY": 3897.0, "series": [{"data": [[1.60219032E12, 3897.0], [1.60219038E12, 2933.0], [1.60219026E12, 3885.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60219032E12, 400.14699959874156], [1.60219038E12, 448.0], [1.60219026E12, 458.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60219032E12, 401.6617001605034], [1.60219038E12, 448.0], [1.60219026E12, 458.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60219032E12, 400.98849979937074], [1.60219038E12, 448.0], [1.60219026E12, 458.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60219032E12, 381.0], [1.60219038E12, 448.0], [1.60219026E12, 458.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60219032E12, 1290.0], [1.60219038E12, 919.5], [1.60219026E12, 1077.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60219038E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 589.0, "minX": 1.0, "maxY": 2454.0, "series": [{"data": [[8.0, 1345.5], [9.0, 1339.0], [10.0, 1248.0], [11.0, 1124.0], [12.0, 763.5], [3.0, 1415.0], [13.0, 860.0], [14.0, 856.5], [1.0, 2454.0], [16.0, 661.0], [19.0, 589.0], [6.0, 1510.5], [7.0, 1530.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 19.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 589.0, "minX": 1.0, "maxY": 2451.0, "series": [{"data": [[8.0, 1344.5], [9.0, 1337.0], [10.0, 1246.0], [11.0, 1123.0], [12.0, 763.5], [3.0, 1415.0], [13.0, 859.0], [14.0, 856.5], [1.0, 2451.0], [16.0, 660.5], [19.0, 589.0], [6.0, 1509.5], [7.0, 1529.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 19.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1.4, "minX": 1.60219026E12, "maxY": 9.333333333333334, "series": [{"data": [[1.60219032E12, 9.333333333333334], [1.60219038E12, 1.4], [1.60219026E12, 1.5166666666666666]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60219038E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1.3166666666666667, "minX": 1.60219026E12, "maxY": 9.333333333333334, "series": [{"data": [[1.60219032E12, 9.333333333333334], [1.60219038E12, 1.6], [1.60219026E12, 1.3166666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60219038E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.3166666666666667, "minX": 1.60219026E12, "maxY": 9.333333333333334, "series": [{"data": [[1.60219032E12, 9.333333333333334], [1.60219038E12, 1.6], [1.60219026E12, 1.3166666666666667]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60219038E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.3166666666666667, "minX": 1.60219026E12, "maxY": 9.333333333333334, "series": [{"data": [[1.60219032E12, 9.333333333333334], [1.60219038E12, 1.6], [1.60219026E12, 1.3166666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60219038E12, "title": "Total Transactions Per Second"}},
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

