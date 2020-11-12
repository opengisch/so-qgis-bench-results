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
        data: {"result": {"minY": 225.0, "minX": 0.0, "maxY": 6990.0, "series": [{"data": [[0.0, 225.0], [0.1, 304.0], [0.2, 346.0], [0.3, 364.0], [0.4, 391.0], [0.5, 398.0], [0.6, 404.0], [0.7, 405.0], [0.8, 407.0], [0.9, 409.0], [1.0, 410.0], [1.1, 412.0], [1.2, 413.0], [1.3, 416.0], [1.4, 417.0], [1.5, 419.0], [1.6, 420.0], [1.7, 422.0], [1.8, 423.0], [1.9, 425.0], [2.0, 425.0], [2.1, 427.0], [2.2, 429.0], [2.3, 431.0], [2.4, 433.0], [2.5, 434.0], [2.6, 435.0], [2.7, 436.0], [2.8, 436.0], [2.9, 438.0], [3.0, 438.0], [3.1, 439.0], [3.2, 440.0], [3.3, 441.0], [3.4, 442.0], [3.5, 442.0], [3.6, 444.0], [3.7, 445.0], [3.8, 446.0], [3.9, 446.0], [4.0, 447.0], [4.1, 448.0], [4.2, 449.0], [4.3, 451.0], [4.4, 451.0], [4.5, 452.0], [4.6, 453.0], [4.7, 454.0], [4.8, 455.0], [4.9, 456.0], [5.0, 457.0], [5.1, 457.0], [5.2, 458.0], [5.3, 459.0], [5.4, 461.0], [5.5, 461.0], [5.6, 463.0], [5.7, 464.0], [5.8, 464.0], [5.9, 465.0], [6.0, 466.0], [6.1, 467.0], [6.2, 468.0], [6.3, 469.0], [6.4, 470.0], [6.5, 470.0], [6.6, 471.0], [6.7, 472.0], [6.8, 472.0], [6.9, 473.0], [7.0, 473.0], [7.1, 474.0], [7.2, 475.0], [7.3, 476.0], [7.4, 477.0], [7.5, 477.0], [7.6, 478.0], [7.7, 479.0], [7.8, 479.0], [7.9, 482.0], [8.0, 483.0], [8.1, 483.0], [8.2, 484.0], [8.3, 486.0], [8.4, 486.0], [8.5, 488.0], [8.6, 488.0], [8.7, 488.0], [8.8, 488.0], [8.9, 489.0], [9.0, 490.0], [9.1, 491.0], [9.2, 491.0], [9.3, 492.0], [9.4, 493.0], [9.5, 494.0], [9.6, 494.0], [9.7, 495.0], [9.8, 495.0], [9.9, 497.0], [10.0, 497.0], [10.1, 498.0], [10.2, 499.0], [10.3, 501.0], [10.4, 501.0], [10.5, 502.0], [10.6, 503.0], [10.7, 505.0], [10.8, 505.0], [10.9, 507.0], [11.0, 507.0], [11.1, 509.0], [11.2, 510.0], [11.3, 511.0], [11.4, 512.0], [11.5, 512.0], [11.6, 514.0], [11.7, 515.0], [11.8, 517.0], [11.9, 519.0], [12.0, 520.0], [12.1, 520.0], [12.2, 522.0], [12.3, 524.0], [12.4, 525.0], [12.5, 526.0], [12.6, 528.0], [12.7, 529.0], [12.8, 531.0], [12.9, 533.0], [13.0, 535.0], [13.1, 536.0], [13.2, 537.0], [13.3, 539.0], [13.4, 541.0], [13.5, 543.0], [13.6, 545.0], [13.7, 546.0], [13.8, 548.0], [13.9, 549.0], [14.0, 550.0], [14.1, 550.0], [14.2, 552.0], [14.3, 552.0], [14.4, 555.0], [14.5, 555.0], [14.6, 557.0], [14.7, 559.0], [14.8, 561.0], [14.9, 563.0], [15.0, 564.0], [15.1, 565.0], [15.2, 566.0], [15.3, 567.0], [15.4, 569.0], [15.5, 570.0], [15.6, 572.0], [15.7, 574.0], [15.8, 576.0], [15.9, 577.0], [16.0, 578.0], [16.1, 579.0], [16.2, 579.0], [16.3, 580.0], [16.4, 581.0], [16.5, 582.0], [16.6, 583.0], [16.7, 583.0], [16.8, 584.0], [16.9, 586.0], [17.0, 587.0], [17.1, 589.0], [17.2, 591.0], [17.3, 592.0], [17.4, 594.0], [17.5, 595.0], [17.6, 596.0], [17.7, 597.0], [17.8, 599.0], [17.9, 600.0], [18.0, 602.0], [18.1, 603.0], [18.2, 604.0], [18.3, 606.0], [18.4, 608.0], [18.5, 610.0], [18.6, 612.0], [18.7, 615.0], [18.8, 616.0], [18.9, 616.0], [19.0, 619.0], [19.1, 622.0], [19.2, 623.0], [19.3, 625.0], [19.4, 625.0], [19.5, 627.0], [19.6, 627.0], [19.7, 629.0], [19.8, 632.0], [19.9, 633.0], [20.0, 634.0], [20.1, 635.0], [20.2, 636.0], [20.3, 638.0], [20.4, 639.0], [20.5, 641.0], [20.6, 642.0], [20.7, 643.0], [20.8, 644.0], [20.9, 645.0], [21.0, 647.0], [21.1, 649.0], [21.2, 649.0], [21.3, 651.0], [21.4, 652.0], [21.5, 653.0], [21.6, 653.0], [21.7, 656.0], [21.8, 656.0], [21.9, 657.0], [22.0, 658.0], [22.1, 659.0], [22.2, 660.0], [22.3, 662.0], [22.4, 663.0], [22.5, 665.0], [22.6, 666.0], [22.7, 667.0], [22.8, 670.0], [22.9, 670.0], [23.0, 672.0], [23.1, 672.0], [23.2, 674.0], [23.3, 675.0], [23.4, 676.0], [23.5, 676.0], [23.6, 677.0], [23.7, 677.0], [23.8, 678.0], [23.9, 680.0], [24.0, 680.0], [24.1, 682.0], [24.2, 683.0], [24.3, 684.0], [24.4, 685.0], [24.5, 686.0], [24.6, 687.0], [24.7, 688.0], [24.8, 688.0], [24.9, 690.0], [25.0, 692.0], [25.1, 692.0], [25.2, 693.0], [25.3, 695.0], [25.4, 696.0], [25.5, 698.0], [25.6, 699.0], [25.7, 702.0], [25.8, 703.0], [25.9, 704.0], [26.0, 705.0], [26.1, 707.0], [26.2, 708.0], [26.3, 709.0], [26.4, 711.0], [26.5, 712.0], [26.6, 713.0], [26.7, 713.0], [26.8, 714.0], [26.9, 715.0], [27.0, 717.0], [27.1, 718.0], [27.2, 719.0], [27.3, 719.0], [27.4, 720.0], [27.5, 722.0], [27.6, 723.0], [27.7, 724.0], [27.8, 725.0], [27.9, 727.0], [28.0, 728.0], [28.1, 730.0], [28.2, 732.0], [28.3, 735.0], [28.4, 736.0], [28.5, 737.0], [28.6, 739.0], [28.7, 740.0], [28.8, 741.0], [28.9, 744.0], [29.0, 745.0], [29.1, 747.0], [29.2, 749.0], [29.3, 749.0], [29.4, 750.0], [29.5, 752.0], [29.6, 754.0], [29.7, 757.0], [29.8, 758.0], [29.9, 761.0], [30.0, 762.0], [30.1, 765.0], [30.2, 766.0], [30.3, 768.0], [30.4, 769.0], [30.5, 772.0], [30.6, 772.0], [30.7, 773.0], [30.8, 776.0], [30.9, 777.0], [31.0, 778.0], [31.1, 780.0], [31.2, 781.0], [31.3, 783.0], [31.4, 785.0], [31.5, 787.0], [31.6, 788.0], [31.7, 791.0], [31.8, 792.0], [31.9, 794.0], [32.0, 796.0], [32.1, 797.0], [32.2, 800.0], [32.3, 801.0], [32.4, 805.0], [32.5, 808.0], [32.6, 810.0], [32.7, 814.0], [32.8, 815.0], [32.9, 817.0], [33.0, 819.0], [33.1, 820.0], [33.2, 822.0], [33.3, 825.0], [33.4, 826.0], [33.5, 828.0], [33.6, 830.0], [33.7, 833.0], [33.8, 835.0], [33.9, 837.0], [34.0, 838.0], [34.1, 840.0], [34.2, 842.0], [34.3, 846.0], [34.4, 847.0], [34.5, 850.0], [34.6, 851.0], [34.7, 853.0], [34.8, 855.0], [34.9, 857.0], [35.0, 858.0], [35.1, 861.0], [35.2, 864.0], [35.3, 867.0], [35.4, 869.0], [35.5, 870.0], [35.6, 873.0], [35.7, 876.0], [35.8, 878.0], [35.9, 883.0], [36.0, 887.0], [36.1, 887.0], [36.2, 888.0], [36.3, 891.0], [36.4, 894.0], [36.5, 896.0], [36.6, 897.0], [36.7, 897.0], [36.8, 898.0], [36.9, 902.0], [37.0, 904.0], [37.1, 906.0], [37.2, 909.0], [37.3, 912.0], [37.4, 916.0], [37.5, 917.0], [37.6, 922.0], [37.7, 925.0], [37.8, 926.0], [37.9, 928.0], [38.0, 929.0], [38.1, 932.0], [38.2, 934.0], [38.3, 936.0], [38.4, 938.0], [38.5, 940.0], [38.6, 942.0], [38.7, 944.0], [38.8, 945.0], [38.9, 950.0], [39.0, 954.0], [39.1, 955.0], [39.2, 957.0], [39.3, 958.0], [39.4, 960.0], [39.5, 961.0], [39.6, 963.0], [39.7, 966.0], [39.8, 969.0], [39.9, 971.0], [40.0, 974.0], [40.1, 975.0], [40.2, 976.0], [40.3, 977.0], [40.4, 979.0], [40.5, 982.0], [40.6, 984.0], [40.7, 987.0], [40.8, 988.0], [40.9, 991.0], [41.0, 992.0], [41.1, 994.0], [41.2, 997.0], [41.3, 998.0], [41.4, 1000.0], [41.5, 1001.0], [41.6, 1005.0], [41.7, 1006.0], [41.8, 1008.0], [41.9, 1009.0], [42.0, 1011.0], [42.1, 1013.0], [42.2, 1018.0], [42.3, 1019.0], [42.4, 1021.0], [42.5, 1022.0], [42.6, 1024.0], [42.7, 1026.0], [42.8, 1028.0], [42.9, 1029.0], [43.0, 1030.0], [43.1, 1032.0], [43.2, 1034.0], [43.3, 1035.0], [43.4, 1038.0], [43.5, 1040.0], [43.6, 1041.0], [43.7, 1045.0], [43.8, 1048.0], [43.9, 1050.0], [44.0, 1052.0], [44.1, 1053.0], [44.2, 1055.0], [44.3, 1057.0], [44.4, 1059.0], [44.5, 1062.0], [44.6, 1063.0], [44.7, 1065.0], [44.8, 1067.0], [44.9, 1069.0], [45.0, 1070.0], [45.1, 1073.0], [45.2, 1075.0], [45.3, 1077.0], [45.4, 1078.0], [45.5, 1080.0], [45.6, 1082.0], [45.7, 1083.0], [45.8, 1085.0], [45.9, 1088.0], [46.0, 1089.0], [46.1, 1091.0], [46.2, 1094.0], [46.3, 1095.0], [46.4, 1100.0], [46.5, 1102.0], [46.6, 1103.0], [46.7, 1104.0], [46.8, 1108.0], [46.9, 1110.0], [47.0, 1113.0], [47.1, 1114.0], [47.2, 1117.0], [47.3, 1119.0], [47.4, 1121.0], [47.5, 1122.0], [47.6, 1123.0], [47.7, 1124.0], [47.8, 1127.0], [47.9, 1128.0], [48.0, 1129.0], [48.1, 1131.0], [48.2, 1132.0], [48.3, 1134.0], [48.4, 1136.0], [48.5, 1138.0], [48.6, 1141.0], [48.7, 1143.0], [48.8, 1144.0], [48.9, 1146.0], [49.0, 1148.0], [49.1, 1150.0], [49.2, 1153.0], [49.3, 1155.0], [49.4, 1158.0], [49.5, 1161.0], [49.6, 1163.0], [49.7, 1165.0], [49.8, 1167.0], [49.9, 1169.0], [50.0, 1170.0], [50.1, 1174.0], [50.2, 1178.0], [50.3, 1179.0], [50.4, 1181.0], [50.5, 1182.0], [50.6, 1183.0], [50.7, 1186.0], [50.8, 1188.0], [50.9, 1189.0], [51.0, 1190.0], [51.1, 1191.0], [51.2, 1192.0], [51.3, 1194.0], [51.4, 1195.0], [51.5, 1197.0], [51.6, 1199.0], [51.7, 1200.0], [51.8, 1201.0], [51.9, 1203.0], [52.0, 1204.0], [52.1, 1207.0], [52.2, 1208.0], [52.3, 1212.0], [52.4, 1214.0], [52.5, 1215.0], [52.6, 1216.0], [52.7, 1216.0], [52.8, 1218.0], [52.9, 1219.0], [53.0, 1221.0], [53.1, 1224.0], [53.2, 1226.0], [53.3, 1229.0], [53.4, 1231.0], [53.5, 1232.0], [53.6, 1234.0], [53.7, 1236.0], [53.8, 1237.0], [53.9, 1239.0], [54.0, 1241.0], [54.1, 1242.0], [54.2, 1244.0], [54.3, 1247.0], [54.4, 1249.0], [54.5, 1251.0], [54.6, 1252.0], [54.7, 1255.0], [54.8, 1256.0], [54.9, 1259.0], [55.0, 1260.0], [55.1, 1262.0], [55.2, 1264.0], [55.3, 1265.0], [55.4, 1269.0], [55.5, 1270.0], [55.6, 1271.0], [55.7, 1273.0], [55.8, 1277.0], [55.9, 1279.0], [56.0, 1281.0], [56.1, 1282.0], [56.2, 1283.0], [56.3, 1286.0], [56.4, 1290.0], [56.5, 1292.0], [56.6, 1296.0], [56.7, 1298.0], [56.8, 1299.0], [56.9, 1301.0], [57.0, 1305.0], [57.1, 1307.0], [57.2, 1309.0], [57.3, 1310.0], [57.4, 1312.0], [57.5, 1314.0], [57.6, 1315.0], [57.7, 1317.0], [57.8, 1319.0], [57.9, 1321.0], [58.0, 1323.0], [58.1, 1325.0], [58.2, 1327.0], [58.3, 1328.0], [58.4, 1331.0], [58.5, 1332.0], [58.6, 1334.0], [58.7, 1335.0], [58.8, 1336.0], [58.9, 1338.0], [59.0, 1339.0], [59.1, 1340.0], [59.2, 1341.0], [59.3, 1346.0], [59.4, 1347.0], [59.5, 1348.0], [59.6, 1349.0], [59.7, 1351.0], [59.8, 1351.0], [59.9, 1354.0], [60.0, 1355.0], [60.1, 1357.0], [60.2, 1359.0], [60.3, 1360.0], [60.4, 1364.0], [60.5, 1366.0], [60.6, 1367.0], [60.7, 1369.0], [60.8, 1370.0], [60.9, 1373.0], [61.0, 1374.0], [61.1, 1378.0], [61.2, 1380.0], [61.3, 1382.0], [61.4, 1386.0], [61.5, 1387.0], [61.6, 1390.0], [61.7, 1392.0], [61.8, 1393.0], [61.9, 1396.0], [62.0, 1400.0], [62.1, 1403.0], [62.2, 1407.0], [62.3, 1408.0], [62.4, 1410.0], [62.5, 1411.0], [62.6, 1412.0], [62.7, 1416.0], [62.8, 1418.0], [62.9, 1420.0], [63.0, 1420.0], [63.1, 1423.0], [63.2, 1427.0], [63.3, 1429.0], [63.4, 1431.0], [63.5, 1433.0], [63.6, 1436.0], [63.7, 1439.0], [63.8, 1446.0], [63.9, 1448.0], [64.0, 1452.0], [64.1, 1453.0], [64.2, 1455.0], [64.3, 1456.0], [64.4, 1458.0], [64.5, 1459.0], [64.6, 1463.0], [64.7, 1464.0], [64.8, 1467.0], [64.9, 1468.0], [65.0, 1469.0], [65.1, 1472.0], [65.2, 1473.0], [65.3, 1474.0], [65.4, 1476.0], [65.5, 1477.0], [65.6, 1479.0], [65.7, 1481.0], [65.8, 1484.0], [65.9, 1487.0], [66.0, 1489.0], [66.1, 1491.0], [66.2, 1494.0], [66.3, 1495.0], [66.4, 1499.0], [66.5, 1500.0], [66.6, 1504.0], [66.7, 1505.0], [66.8, 1506.0], [66.9, 1507.0], [67.0, 1510.0], [67.1, 1512.0], [67.2, 1514.0], [67.3, 1515.0], [67.4, 1518.0], [67.5, 1519.0], [67.6, 1521.0], [67.7, 1524.0], [67.8, 1526.0], [67.9, 1527.0], [68.0, 1529.0], [68.1, 1532.0], [68.2, 1533.0], [68.3, 1535.0], [68.4, 1537.0], [68.5, 1541.0], [68.6, 1541.0], [68.7, 1543.0], [68.8, 1545.0], [68.9, 1549.0], [69.0, 1552.0], [69.1, 1554.0], [69.2, 1556.0], [69.3, 1559.0], [69.4, 1559.0], [69.5, 1562.0], [69.6, 1563.0], [69.7, 1565.0], [69.8, 1568.0], [69.9, 1569.0], [70.0, 1570.0], [70.1, 1573.0], [70.2, 1573.0], [70.3, 1576.0], [70.4, 1577.0], [70.5, 1580.0], [70.6, 1582.0], [70.7, 1583.0], [70.8, 1586.0], [70.9, 1587.0], [71.0, 1589.0], [71.1, 1590.0], [71.2, 1592.0], [71.3, 1594.0], [71.4, 1596.0], [71.5, 1597.0], [71.6, 1601.0], [71.7, 1602.0], [71.8, 1604.0], [71.9, 1606.0], [72.0, 1606.0], [72.1, 1607.0], [72.2, 1610.0], [72.3, 1611.0], [72.4, 1613.0], [72.5, 1617.0], [72.6, 1619.0], [72.7, 1622.0], [72.8, 1626.0], [72.9, 1628.0], [73.0, 1631.0], [73.1, 1634.0], [73.2, 1635.0], [73.3, 1636.0], [73.4, 1639.0], [73.5, 1642.0], [73.6, 1644.0], [73.7, 1646.0], [73.8, 1649.0], [73.9, 1651.0], [74.0, 1655.0], [74.1, 1656.0], [74.2, 1657.0], [74.3, 1660.0], [74.4, 1662.0], [74.5, 1664.0], [74.6, 1665.0], [74.7, 1667.0], [74.8, 1668.0], [74.9, 1669.0], [75.0, 1671.0], [75.1, 1673.0], [75.2, 1677.0], [75.3, 1677.0], [75.4, 1680.0], [75.5, 1681.0], [75.6, 1683.0], [75.7, 1685.0], [75.8, 1688.0], [75.9, 1691.0], [76.0, 1694.0], [76.1, 1698.0], [76.2, 1699.0], [76.3, 1701.0], [76.4, 1703.0], [76.5, 1705.0], [76.6, 1706.0], [76.7, 1708.0], [76.8, 1710.0], [76.9, 1713.0], [77.0, 1714.0], [77.1, 1717.0], [77.2, 1718.0], [77.3, 1720.0], [77.4, 1722.0], [77.5, 1725.0], [77.6, 1728.0], [77.7, 1731.0], [77.8, 1733.0], [77.9, 1735.0], [78.0, 1738.0], [78.1, 1740.0], [78.2, 1742.0], [78.3, 1746.0], [78.4, 1749.0], [78.5, 1751.0], [78.6, 1753.0], [78.7, 1756.0], [78.8, 1757.0], [78.9, 1759.0], [79.0, 1760.0], [79.1, 1764.0], [79.2, 1767.0], [79.3, 1768.0], [79.4, 1770.0], [79.5, 1774.0], [79.6, 1777.0], [79.7, 1781.0], [79.8, 1782.0], [79.9, 1783.0], [80.0, 1785.0], [80.1, 1788.0], [80.2, 1790.0], [80.3, 1792.0], [80.4, 1794.0], [80.5, 1796.0], [80.6, 1800.0], [80.7, 1803.0], [80.8, 1804.0], [80.9, 1808.0], [81.0, 1809.0], [81.1, 1812.0], [81.2, 1815.0], [81.3, 1818.0], [81.4, 1820.0], [81.5, 1822.0], [81.6, 1824.0], [81.7, 1826.0], [81.8, 1830.0], [81.9, 1834.0], [82.0, 1840.0], [82.1, 1841.0], [82.2, 1846.0], [82.3, 1856.0], [82.4, 1861.0], [82.5, 1863.0], [82.6, 1864.0], [82.7, 1868.0], [82.8, 1871.0], [82.9, 1875.0], [83.0, 1876.0], [83.1, 1877.0], [83.2, 1880.0], [83.3, 1883.0], [83.4, 1887.0], [83.5, 1890.0], [83.6, 1891.0], [83.7, 1896.0], [83.8, 1900.0], [83.9, 1904.0], [84.0, 1907.0], [84.1, 1912.0], [84.2, 1914.0], [84.3, 1920.0], [84.4, 1927.0], [84.5, 1933.0], [84.6, 1936.0], [84.7, 1938.0], [84.8, 1943.0], [84.9, 1946.0], [85.0, 1949.0], [85.1, 1954.0], [85.2, 1959.0], [85.3, 1963.0], [85.4, 1972.0], [85.5, 1976.0], [85.6, 1979.0], [85.7, 1983.0], [85.8, 1990.0], [85.9, 1993.0], [86.0, 1996.0], [86.1, 1999.0], [86.2, 2000.0], [86.3, 2009.0], [86.4, 2016.0], [86.5, 2021.0], [86.6, 2027.0], [86.7, 2032.0], [86.8, 2038.0], [86.9, 2042.0], [87.0, 2046.0], [87.1, 2055.0], [87.2, 2060.0], [87.3, 2063.0], [87.4, 2068.0], [87.5, 2081.0], [87.6, 2087.0], [87.7, 2093.0], [87.8, 2099.0], [87.9, 2105.0], [88.0, 2108.0], [88.1, 2115.0], [88.2, 2119.0], [88.3, 2123.0], [88.4, 2125.0], [88.5, 2128.0], [88.6, 2134.0], [88.7, 2136.0], [88.8, 2142.0], [88.9, 2146.0], [89.0, 2151.0], [89.1, 2156.0], [89.2, 2162.0], [89.3, 2169.0], [89.4, 2177.0], [89.5, 2188.0], [89.6, 2199.0], [89.7, 2208.0], [89.8, 2213.0], [89.9, 2221.0], [90.0, 2225.0], [90.1, 2233.0], [90.2, 2245.0], [90.3, 2252.0], [90.4, 2258.0], [90.5, 2267.0], [90.6, 2277.0], [90.7, 2281.0], [90.8, 2289.0], [90.9, 2301.0], [91.0, 2308.0], [91.1, 2313.0], [91.2, 2322.0], [91.3, 2333.0], [91.4, 2338.0], [91.5, 2344.0], [91.6, 2352.0], [91.7, 2361.0], [91.8, 2374.0], [91.9, 2384.0], [92.0, 2395.0], [92.1, 2405.0], [92.2, 2410.0], [92.3, 2416.0], [92.4, 2423.0], [92.5, 2429.0], [92.6, 2434.0], [92.7, 2438.0], [92.8, 2440.0], [92.9, 2447.0], [93.0, 2463.0], [93.1, 2479.0], [93.2, 2495.0], [93.3, 2503.0], [93.4, 2514.0], [93.5, 2519.0], [93.6, 2534.0], [93.7, 2542.0], [93.8, 2547.0], [93.9, 2551.0], [94.0, 2560.0], [94.1, 2564.0], [94.2, 2574.0], [94.3, 2593.0], [94.4, 2602.0], [94.5, 2619.0], [94.6, 2625.0], [94.7, 2634.0], [94.8, 2648.0], [94.9, 2659.0], [95.0, 2669.0], [95.1, 2684.0], [95.2, 2693.0], [95.3, 2704.0], [95.4, 2710.0], [95.5, 2724.0], [95.6, 2730.0], [95.7, 2749.0], [95.8, 2767.0], [95.9, 2776.0], [96.0, 2787.0], [96.1, 2799.0], [96.2, 2814.0], [96.3, 2837.0], [96.4, 2875.0], [96.5, 2899.0], [96.6, 2914.0], [96.7, 2925.0], [96.8, 2946.0], [96.9, 2961.0], [97.0, 2970.0], [97.1, 2980.0], [97.2, 2992.0], [97.3, 3016.0], [97.4, 3044.0], [97.5, 3066.0], [97.6, 3078.0], [97.7, 3109.0], [97.8, 3132.0], [97.9, 3154.0], [98.0, 3187.0], [98.1, 3210.0], [98.2, 3244.0], [98.3, 3281.0], [98.4, 3294.0], [98.5, 3323.0], [98.6, 3356.0], [98.7, 3429.0], [98.8, 3518.0], [98.9, 3582.0], [99.0, 3670.0], [99.1, 3715.0], [99.2, 3799.0], [99.3, 4009.0], [99.4, 4064.0], [99.5, 4372.0], [99.6, 4667.0], [99.7, 5328.0], [99.8, 5816.0], [99.9, 6288.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 200.0, "maxY": 501.0, "series": [{"data": [[600.0, 401.0], [700.0, 342.0], [800.0, 241.0], [900.0, 236.0], [1000.0, 258.0], [1100.0, 276.0], [1200.0, 266.0], [1300.0, 268.0], [1400.0, 232.0], [1500.0, 266.0], [1600.0, 241.0], [1700.0, 228.0], [1800.0, 165.0], [1900.0, 124.0], [2000.0, 85.0], [2100.0, 94.0], [2200.0, 65.0], [2300.0, 60.0], [2400.0, 64.0], [2500.0, 59.0], [2600.0, 43.0], [2800.0, 21.0], [2700.0, 46.0], [2900.0, 37.0], [3000.0, 24.0], [3100.0, 19.0], [3200.0, 18.0], [3300.0, 13.0], [3400.0, 7.0], [3500.0, 7.0], [3700.0, 8.0], [3600.0, 7.0], [3800.0, 1.0], [3900.0, 2.0], [4000.0, 7.0], [4200.0, 3.0], [4100.0, 2.0], [4300.0, 1.0], [4600.0, 4.0], [4400.0, 1.0], [4500.0, 1.0], [4800.0, 1.0], [5300.0, 2.0], [5200.0, 1.0], [5400.0, 1.0], [5600.0, 2.0], [5500.0, 1.0], [5800.0, 3.0], [6000.0, 1.0], [5900.0, 1.0], [6200.0, 2.0], [6400.0, 1.0], [6600.0, 1.0], [6500.0, 1.0], [6900.0, 1.0], [200.0, 5.0], [300.0, 24.0], [400.0, 501.0], [500.0, 398.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 6900.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 534.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2918.0, "series": [{"data": [[0.0, 534.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 2918.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 1738.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 11.405405405405407, "minX": 1.60439706E12, "maxY": 12.0, "series": [{"data": [[1.60439742E12, 12.0], [1.60439724E12, 12.0], [1.60439706E12, 12.0], [1.60439754E12, 12.0], [1.60439736E12, 12.0], [1.60439718E12, 12.0], [1.60439766E12, 11.405405405405407], [1.60439748E12, 12.0], [1.6043973E12, 12.0], [1.60439712E12, 12.0], [1.6043976E12, 12.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60439766E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 745.0, "minX": 1.0, "maxY": 3745.0, "series": [{"data": [[8.0, 2093.0], [4.0, 819.0], [2.0, 3745.0], [1.0, 3313.0], [9.0, 1281.0], [10.0, 1785.0], [5.0, 1335.0], [11.0, 1409.0], [12.0, 1289.7484070283854], [6.0, 1296.0], [3.0, 1408.0], [7.0, 745.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[11.987283236994216, 1290.7198458574194]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 12.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 160.45, "minX": 1.60439706E12, "maxY": 3314375.6166666667, "series": [{"data": [[1.60439742E12, 2262507.35], [1.60439724E12, 3314375.6166666667], [1.60439706E12, 139434.65], [1.60439754E12, 2750343.783333333], [1.60439736E12, 2717125.4], [1.60439718E12, 1916864.9166666667], [1.60439766E12, 503491.26666666666], [1.60439748E12, 2517323.25], [1.6043973E12, 2774914.1666666665], [1.60439712E12, 2554575.0166666666], [1.6043976E12, 2521489.45]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60439742E12, 3868.2], [1.60439724E12, 4491.416666666667], [1.60439706E12, 160.45], [1.60439754E12, 4670.633333333333], [1.60439736E12, 3323.55], [1.60439718E12, 4240.516666666666], [1.60439766E12, 840.2666666666667], [1.60439748E12, 4466.116666666667], [1.6043973E12, 4567.816666666667], [1.60439712E12, 3607.5666666666666], [1.6043976E12, 4340.8]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60439766E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 1166.8750000000002, "minX": 1.60439706E12, "maxY": 1949.7142857142856, "series": [{"data": [[1.60439742E12, 1344.2383612662936], [1.60439724E12, 1217.9072512647558], [1.60439706E12, 1949.7142857142856], [1.60439754E12, 1166.8750000000002], [1.60439736E12, 1599.7242152466374], [1.60439718E12, 1239.506896551725], [1.60439766E12, 1627.36036036036], [1.60439748E12, 1181.3371710526337], [1.6043973E12, 1199.8621262458475], [1.60439712E12, 1441.0239043824704], [1.6043976E12, 1250.9233449477354]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60439766E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 1164.9577922077922, "minX": 1.60439706E12, "maxY": 1946.8095238095239, "series": [{"data": [[1.60439742E12, 1342.5456238361267], [1.60439724E12, 1215.0573355817874], [1.60439706E12, 1946.8095238095239], [1.60439754E12, 1164.9577922077922], [1.60439736E12, 1596.6860986547092], [1.60439718E12, 1237.8568965517245], [1.60439766E12, 1625.4504504504507], [1.60439748E12, 1179.4309210526299], [1.6043973E12, 1197.704318936877], [1.60439712E12, 1438.7669322709164], [1.6043976E12, 1248.9843205574912]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60439766E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.011210762331838568, "minX": 1.60439706E12, "maxY": 7.333333333333333, "series": [{"data": [[1.60439742E12, 0.018621973929236504], [1.60439724E12, 0.020236087689713324], [1.60439706E12, 7.333333333333333], [1.60439754E12, 0.02110389610389607], [1.60439736E12, 0.011210762331838568], [1.60439718E12, 0.0396551724137931], [1.60439766E12, 0.1351351351351352], [1.60439748E12, 0.01480263157894738], [1.6043973E12, 0.02325581395348837], [1.60439712E12, 0.031872509960159376], [1.6043976E12, 0.036585365853658604]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60439766E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 225.0, "minX": 1.60439706E12, "maxY": 6990.0, "series": [{"data": [[1.60439742E12, 6670.0], [1.60439724E12, 5279.0], [1.60439706E12, 4667.0], [1.60439754E12, 4037.0], [1.60439736E12, 6450.0], [1.60439718E12, 3799.0], [1.60439766E12, 4569.0], [1.60439748E12, 3281.0], [1.6043973E12, 6990.0], [1.60439712E12, 6288.0], [1.6043976E12, 4277.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60439742E12, 459.89399910211563], [1.60439724E12, 348.45199121952055], [1.60439706E12, 569.0], [1.60439754E12, 382.63599823474885], [1.60439736E12, 460.9429956305027], [1.60439718E12, 427.4579997229576], [1.60439766E12, 341.6239945793152], [1.60439748E12, 408.4809998548031], [1.6043973E12, 395.6969984185696], [1.60439712E12, 458.0], [1.6043976E12, 417.34999972581863]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60439742E12, 462.3048002052307], [1.60439724E12, 381.59720351219175], [1.60439706E12, 569.0], [1.60439754E12, 388.3249001765251], [1.60439736E12, 477.4373017477989], [1.60439718E12, 428.50380011081694], [1.60439766E12, 362.08640216827393], [1.60439748E12, 409.0], [1.6043973E12, 401.6667006325722], [1.60439712E12, 458.0], [1.6043976E12, 418.38500010967255]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60439742E12, 461.44399974346163], [1.60439724E12, 366.86599560976026], [1.60439706E12, 569.0], [1.60439754E12, 386.3379991173744], [1.60439736E12, 470.1064978152513], [1.60439718E12, 428.0389998614788], [1.60439766E12, 352.99199728965755], [1.60439748E12, 408.78549992740153], [1.6043973E12, 399.01349920928476], [1.60439712E12, 458.0], [1.6043976E12, 417.9249998629093]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60439742E12, 409.0], [1.60439724E12, 225.0], [1.60439706E12, 569.0], [1.60439754E12, 313.0], [1.60439736E12, 396.0], [1.60439718E12, 356.0], [1.60439766E12, 340.0], [1.60439748E12, 304.0], [1.6043973E12, 230.0], [1.60439712E12, 435.0], [1.6043976E12, 412.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60439742E12, 1181.0], [1.60439724E12, 961.0], [1.60439706E12, 1698.0], [1.60439754E12, 1038.0], [1.60439736E12, 1457.0], [1.60439718E12, 1007.0], [1.60439766E12, 1418.0], [1.60439748E12, 1041.5], [1.6043973E12, 1157.5], [1.60439712E12, 1257.0], [1.6043976E12, 1127.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60439766E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 441.0, "minX": 1.0, "maxY": 2072.5, "series": [{"data": [[2.0, 1741.0], [3.0, 1947.0], [4.0, 1789.0], [5.0, 1573.0], [6.0, 1477.5], [7.0, 1505.0], [8.0, 1357.0], [9.0, 1314.0], [10.0, 1212.5], [11.0, 1127.0], [12.0, 1009.5], [13.0, 846.5], [14.0, 681.5], [15.0, 718.0], [1.0, 2072.5], [16.0, 551.0], [17.0, 510.0], [18.0, 519.5], [19.0, 531.5], [20.0, 497.5], [21.0, 502.0], [22.0, 519.5], [23.0, 441.0], [24.0, 454.5], [25.0, 503.5], [26.0, 491.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 26.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 441.0, "minX": 1.0, "maxY": 2070.5, "series": [{"data": [[2.0, 1731.5], [3.0, 1945.5], [4.0, 1787.5], [5.0, 1566.0], [6.0, 1477.0], [7.0, 1504.0], [8.0, 1355.5], [9.0, 1311.0], [10.0, 1209.0], [11.0, 1126.0], [12.0, 1008.0], [13.0, 845.0], [14.0, 681.0], [15.0, 716.0], [1.0, 2070.5], [16.0, 550.5], [17.0, 510.0], [18.0, 519.0], [19.0, 531.5], [20.0, 497.5], [21.0, 502.0], [22.0, 519.5], [23.0, 441.0], [24.0, 454.0], [25.0, 503.5], [26.0, 491.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 26.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.55, "minX": 1.60439706E12, "maxY": 10.266666666666667, "series": [{"data": [[1.60439742E12, 8.95], [1.60439724E12, 9.883333333333333], [1.60439706E12, 0.55], [1.60439754E12, 10.266666666666667], [1.60439736E12, 7.433333333333334], [1.60439718E12, 9.666666666666666], [1.60439766E12, 1.65], [1.60439748E12, 10.133333333333333], [1.6043973E12, 10.033333333333333], [1.60439712E12, 8.366666666666667], [1.6043976E12, 9.566666666666666]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60439766E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.35, "minX": 1.60439706E12, "maxY": 10.266666666666667, "series": [{"data": [[1.60439742E12, 8.95], [1.60439724E12, 9.883333333333333], [1.60439706E12, 0.35], [1.60439754E12, 10.266666666666667], [1.60439736E12, 7.433333333333334], [1.60439718E12, 9.666666666666666], [1.60439766E12, 1.85], [1.60439748E12, 10.133333333333333], [1.6043973E12, 10.033333333333333], [1.60439712E12, 8.366666666666667], [1.6043976E12, 9.566666666666666]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60439766E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.35, "minX": 1.60439706E12, "maxY": 10.266666666666667, "series": [{"data": [[1.60439742E12, 8.95], [1.60439724E12, 9.883333333333333], [1.60439706E12, 0.35], [1.60439754E12, 10.266666666666667], [1.60439736E12, 7.433333333333334], [1.60439718E12, 9.666666666666666], [1.60439766E12, 1.85], [1.60439748E12, 10.133333333333333], [1.6043973E12, 10.033333333333333], [1.60439712E12, 8.366666666666667], [1.6043976E12, 9.566666666666666]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60439766E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.35, "minX": 1.60439706E12, "maxY": 10.266666666666667, "series": [{"data": [[1.60439742E12, 8.95], [1.60439724E12, 9.883333333333333], [1.60439706E12, 0.35], [1.60439754E12, 10.266666666666667], [1.60439736E12, 7.433333333333334], [1.60439718E12, 9.666666666666666], [1.60439766E12, 1.85], [1.60439748E12, 10.133333333333333], [1.6043973E12, 10.033333333333333], [1.60439712E12, 8.366666666666667], [1.6043976E12, 9.566666666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60439766E12, "title": "Total Transactions Per Second"}},
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

