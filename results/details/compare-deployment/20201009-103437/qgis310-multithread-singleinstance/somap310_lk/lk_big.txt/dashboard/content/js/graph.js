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
        data: {"result": {"minY": 155.0, "minX": 0.0, "maxY": 12554.0, "series": [{"data": [[0.0, 155.0], [0.1, 252.0], [0.2, 356.0], [0.3, 366.0], [0.4, 368.0], [0.5, 374.0], [0.6, 377.0], [0.7, 382.0], [0.8, 390.0], [0.9, 396.0], [1.0, 404.0], [1.1, 409.0], [1.2, 410.0], [1.3, 411.0], [1.4, 413.0], [1.5, 415.0], [1.6, 416.0], [1.7, 417.0], [1.8, 418.0], [1.9, 419.0], [2.0, 420.0], [2.1, 420.0], [2.2, 422.0], [2.3, 425.0], [2.4, 427.0], [2.5, 429.0], [2.6, 430.0], [2.7, 432.0], [2.8, 433.0], [2.9, 434.0], [3.0, 437.0], [3.1, 438.0], [3.2, 441.0], [3.3, 443.0], [3.4, 443.0], [3.5, 445.0], [3.6, 445.0], [3.7, 446.0], [3.8, 447.0], [3.9, 448.0], [4.0, 449.0], [4.1, 450.0], [4.2, 451.0], [4.3, 451.0], [4.4, 452.0], [4.5, 453.0], [4.6, 454.0], [4.7, 455.0], [4.8, 456.0], [4.9, 457.0], [5.0, 459.0], [5.1, 459.0], [5.2, 460.0], [5.3, 462.0], [5.4, 463.0], [5.5, 465.0], [5.6, 465.0], [5.7, 467.0], [5.8, 468.0], [5.9, 469.0], [6.0, 470.0], [6.1, 470.0], [6.2, 472.0], [6.3, 473.0], [6.4, 474.0], [6.5, 475.0], [6.6, 476.0], [6.7, 476.0], [6.8, 477.0], [6.9, 478.0], [7.0, 479.0], [7.1, 482.0], [7.2, 485.0], [7.3, 486.0], [7.4, 487.0], [7.5, 491.0], [7.6, 492.0], [7.7, 493.0], [7.8, 497.0], [7.9, 498.0], [8.0, 499.0], [8.1, 502.0], [8.2, 506.0], [8.3, 511.0], [8.4, 514.0], [8.5, 518.0], [8.6, 520.0], [8.7, 524.0], [8.8, 526.0], [8.9, 533.0], [9.0, 542.0], [9.1, 552.0], [9.2, 572.0], [9.3, 583.0], [9.4, 585.0], [9.5, 588.0], [9.6, 590.0], [9.7, 593.0], [9.8, 596.0], [9.9, 599.0], [10.0, 604.0], [10.1, 610.0], [10.2, 616.0], [10.3, 621.0], [10.4, 623.0], [10.5, 627.0], [10.6, 632.0], [10.7, 635.0], [10.8, 641.0], [10.9, 643.0], [11.0, 645.0], [11.1, 648.0], [11.2, 651.0], [11.3, 654.0], [11.4, 660.0], [11.5, 661.0], [11.6, 663.0], [11.7, 666.0], [11.8, 671.0], [11.9, 673.0], [12.0, 674.0], [12.1, 679.0], [12.2, 682.0], [12.3, 683.0], [12.4, 686.0], [12.5, 688.0], [12.6, 689.0], [12.7, 692.0], [12.8, 697.0], [12.9, 701.0], [13.0, 704.0], [13.1, 705.0], [13.2, 707.0], [13.3, 709.0], [13.4, 710.0], [13.5, 713.0], [13.6, 714.0], [13.7, 716.0], [13.8, 718.0], [13.9, 719.0], [14.0, 721.0], [14.1, 723.0], [14.2, 726.0], [14.3, 728.0], [14.4, 729.0], [14.5, 731.0], [14.6, 732.0], [14.7, 734.0], [14.8, 736.0], [14.9, 736.0], [15.0, 738.0], [15.1, 738.0], [15.2, 740.0], [15.3, 742.0], [15.4, 743.0], [15.5, 744.0], [15.6, 746.0], [15.7, 747.0], [15.8, 749.0], [15.9, 750.0], [16.0, 752.0], [16.1, 754.0], [16.2, 755.0], [16.3, 756.0], [16.4, 758.0], [16.5, 759.0], [16.6, 761.0], [16.7, 762.0], [16.8, 763.0], [16.9, 764.0], [17.0, 765.0], [17.1, 766.0], [17.2, 767.0], [17.3, 769.0], [17.4, 770.0], [17.5, 772.0], [17.6, 774.0], [17.7, 775.0], [17.8, 776.0], [17.9, 778.0], [18.0, 781.0], [18.1, 782.0], [18.2, 783.0], [18.3, 785.0], [18.4, 787.0], [18.5, 788.0], [18.6, 789.0], [18.7, 790.0], [18.8, 791.0], [18.9, 792.0], [19.0, 793.0], [19.1, 794.0], [19.2, 795.0], [19.3, 796.0], [19.4, 797.0], [19.5, 798.0], [19.6, 798.0], [19.7, 800.0], [19.8, 801.0], [19.9, 802.0], [20.0, 804.0], [20.1, 805.0], [20.2, 806.0], [20.3, 809.0], [20.4, 811.0], [20.5, 812.0], [20.6, 813.0], [20.7, 815.0], [20.8, 817.0], [20.9, 818.0], [21.0, 821.0], [21.1, 822.0], [21.2, 823.0], [21.3, 825.0], [21.4, 826.0], [21.5, 828.0], [21.6, 829.0], [21.7, 831.0], [21.8, 832.0], [21.9, 834.0], [22.0, 835.0], [22.1, 837.0], [22.2, 839.0], [22.3, 841.0], [22.4, 843.0], [22.5, 845.0], [22.6, 848.0], [22.7, 851.0], [22.8, 853.0], [22.9, 855.0], [23.0, 857.0], [23.1, 859.0], [23.2, 863.0], [23.3, 865.0], [23.4, 868.0], [23.5, 869.0], [23.6, 872.0], [23.7, 873.0], [23.8, 874.0], [23.9, 874.0], [24.0, 875.0], [24.1, 877.0], [24.2, 879.0], [24.3, 880.0], [24.4, 882.0], [24.5, 883.0], [24.6, 885.0], [24.7, 886.0], [24.8, 889.0], [24.9, 890.0], [25.0, 891.0], [25.1, 892.0], [25.2, 894.0], [25.3, 895.0], [25.4, 898.0], [25.5, 899.0], [25.6, 901.0], [25.7, 904.0], [25.8, 907.0], [25.9, 909.0], [26.0, 912.0], [26.1, 914.0], [26.2, 915.0], [26.3, 918.0], [26.4, 920.0], [26.5, 922.0], [26.6, 925.0], [26.7, 927.0], [26.8, 929.0], [26.9, 931.0], [27.0, 933.0], [27.1, 934.0], [27.2, 935.0], [27.3, 938.0], [27.4, 942.0], [27.5, 944.0], [27.6, 947.0], [27.7, 950.0], [27.8, 954.0], [27.9, 957.0], [28.0, 962.0], [28.1, 964.0], [28.2, 966.0], [28.3, 967.0], [28.4, 970.0], [28.5, 971.0], [28.6, 975.0], [28.7, 978.0], [28.8, 980.0], [28.9, 983.0], [29.0, 985.0], [29.1, 986.0], [29.2, 990.0], [29.3, 993.0], [29.4, 995.0], [29.5, 996.0], [29.6, 998.0], [29.7, 999.0], [29.8, 1001.0], [29.9, 1004.0], [30.0, 1006.0], [30.1, 1010.0], [30.2, 1018.0], [30.3, 1022.0], [30.4, 1026.0], [30.5, 1028.0], [30.6, 1030.0], [30.7, 1032.0], [30.8, 1034.0], [30.9, 1036.0], [31.0, 1038.0], [31.1, 1039.0], [31.2, 1040.0], [31.3, 1045.0], [31.4, 1046.0], [31.5, 1048.0], [31.6, 1049.0], [31.7, 1052.0], [31.8, 1053.0], [31.9, 1057.0], [32.0, 1058.0], [32.1, 1059.0], [32.2, 1062.0], [32.3, 1063.0], [32.4, 1065.0], [32.5, 1067.0], [32.6, 1069.0], [32.7, 1071.0], [32.8, 1076.0], [32.9, 1077.0], [33.0, 1079.0], [33.1, 1082.0], [33.2, 1083.0], [33.3, 1084.0], [33.4, 1086.0], [33.5, 1087.0], [33.6, 1090.0], [33.7, 1092.0], [33.8, 1093.0], [33.9, 1095.0], [34.0, 1096.0], [34.1, 1098.0], [34.2, 1102.0], [34.3, 1104.0], [34.4, 1106.0], [34.5, 1110.0], [34.6, 1113.0], [34.7, 1115.0], [34.8, 1119.0], [34.9, 1122.0], [35.0, 1123.0], [35.1, 1125.0], [35.2, 1127.0], [35.3, 1129.0], [35.4, 1131.0], [35.5, 1134.0], [35.6, 1135.0], [35.7, 1136.0], [35.8, 1140.0], [35.9, 1142.0], [36.0, 1144.0], [36.1, 1146.0], [36.2, 1148.0], [36.3, 1151.0], [36.4, 1154.0], [36.5, 1157.0], [36.6, 1161.0], [36.7, 1163.0], [36.8, 1167.0], [36.9, 1169.0], [37.0, 1172.0], [37.1, 1173.0], [37.2, 1176.0], [37.3, 1179.0], [37.4, 1183.0], [37.5, 1185.0], [37.6, 1188.0], [37.7, 1191.0], [37.8, 1192.0], [37.9, 1195.0], [38.0, 1196.0], [38.1, 1197.0], [38.2, 1198.0], [38.3, 1200.0], [38.4, 1202.0], [38.5, 1207.0], [38.6, 1211.0], [38.7, 1214.0], [38.8, 1217.0], [38.9, 1220.0], [39.0, 1224.0], [39.1, 1226.0], [39.2, 1228.0], [39.3, 1229.0], [39.4, 1232.0], [39.5, 1239.0], [39.6, 1241.0], [39.7, 1243.0], [39.8, 1245.0], [39.9, 1247.0], [40.0, 1250.0], [40.1, 1253.0], [40.2, 1255.0], [40.3, 1257.0], [40.4, 1259.0], [40.5, 1261.0], [40.6, 1263.0], [40.7, 1267.0], [40.8, 1268.0], [40.9, 1270.0], [41.0, 1271.0], [41.1, 1272.0], [41.2, 1272.0], [41.3, 1274.0], [41.4, 1276.0], [41.5, 1279.0], [41.6, 1281.0], [41.7, 1283.0], [41.8, 1286.0], [41.9, 1288.0], [42.0, 1291.0], [42.1, 1293.0], [42.2, 1295.0], [42.3, 1299.0], [42.4, 1301.0], [42.5, 1308.0], [42.6, 1310.0], [42.7, 1315.0], [42.8, 1318.0], [42.9, 1319.0], [43.0, 1323.0], [43.1, 1325.0], [43.2, 1328.0], [43.3, 1331.0], [43.4, 1335.0], [43.5, 1340.0], [43.6, 1345.0], [43.7, 1347.0], [43.8, 1352.0], [43.9, 1354.0], [44.0, 1358.0], [44.1, 1362.0], [44.2, 1365.0], [44.3, 1368.0], [44.4, 1371.0], [44.5, 1375.0], [44.6, 1377.0], [44.7, 1385.0], [44.8, 1390.0], [44.9, 1396.0], [45.0, 1397.0], [45.1, 1399.0], [45.2, 1401.0], [45.3, 1405.0], [45.4, 1406.0], [45.5, 1408.0], [45.6, 1409.0], [45.7, 1410.0], [45.8, 1411.0], [45.9, 1413.0], [46.0, 1417.0], [46.1, 1419.0], [46.2, 1421.0], [46.3, 1425.0], [46.4, 1431.0], [46.5, 1433.0], [46.6, 1437.0], [46.7, 1439.0], [46.8, 1442.0], [46.9, 1443.0], [47.0, 1446.0], [47.1, 1449.0], [47.2, 1451.0], [47.3, 1452.0], [47.4, 1458.0], [47.5, 1460.0], [47.6, 1462.0], [47.7, 1463.0], [47.8, 1469.0], [47.9, 1473.0], [48.0, 1475.0], [48.1, 1477.0], [48.2, 1479.0], [48.3, 1480.0], [48.4, 1484.0], [48.5, 1491.0], [48.6, 1494.0], [48.7, 1497.0], [48.8, 1500.0], [48.9, 1502.0], [49.0, 1505.0], [49.1, 1508.0], [49.2, 1509.0], [49.3, 1514.0], [49.4, 1518.0], [49.5, 1521.0], [49.6, 1525.0], [49.7, 1528.0], [49.8, 1533.0], [49.9, 1538.0], [50.0, 1544.0], [50.1, 1554.0], [50.2, 1557.0], [50.3, 1559.0], [50.4, 1565.0], [50.5, 1569.0], [50.6, 1572.0], [50.7, 1574.0], [50.8, 1577.0], [50.9, 1581.0], [51.0, 1587.0], [51.1, 1589.0], [51.2, 1594.0], [51.3, 1596.0], [51.4, 1598.0], [51.5, 1602.0], [51.6, 1607.0], [51.7, 1610.0], [51.8, 1614.0], [51.9, 1624.0], [52.0, 1627.0], [52.1, 1637.0], [52.2, 1639.0], [52.3, 1644.0], [52.4, 1648.0], [52.5, 1650.0], [52.6, 1658.0], [52.7, 1664.0], [52.8, 1666.0], [52.9, 1671.0], [53.0, 1674.0], [53.1, 1676.0], [53.2, 1680.0], [53.3, 1686.0], [53.4, 1690.0], [53.5, 1695.0], [53.6, 1697.0], [53.7, 1704.0], [53.8, 1706.0], [53.9, 1708.0], [54.0, 1711.0], [54.1, 1713.0], [54.2, 1715.0], [54.3, 1725.0], [54.4, 1732.0], [54.5, 1736.0], [54.6, 1742.0], [54.7, 1744.0], [54.8, 1747.0], [54.9, 1752.0], [55.0, 1755.0], [55.1, 1759.0], [55.2, 1763.0], [55.3, 1769.0], [55.4, 1773.0], [55.5, 1775.0], [55.6, 1782.0], [55.7, 1786.0], [55.8, 1793.0], [55.9, 1796.0], [56.0, 1800.0], [56.1, 1805.0], [56.2, 1809.0], [56.3, 1812.0], [56.4, 1816.0], [56.5, 1821.0], [56.6, 1831.0], [56.7, 1841.0], [56.8, 1845.0], [56.9, 1848.0], [57.0, 1851.0], [57.1, 1854.0], [57.2, 1858.0], [57.3, 1861.0], [57.4, 1865.0], [57.5, 1873.0], [57.6, 1880.0], [57.7, 1884.0], [57.8, 1890.0], [57.9, 1892.0], [58.0, 1898.0], [58.1, 1902.0], [58.2, 1908.0], [58.3, 1910.0], [58.4, 1914.0], [58.5, 1918.0], [58.6, 1923.0], [58.7, 1929.0], [58.8, 1932.0], [58.9, 1940.0], [59.0, 1943.0], [59.1, 1946.0], [59.2, 1954.0], [59.3, 1960.0], [59.4, 1965.0], [59.5, 1969.0], [59.6, 1975.0], [59.7, 1978.0], [59.8, 1983.0], [59.9, 1985.0], [60.0, 1989.0], [60.1, 1999.0], [60.2, 2004.0], [60.3, 2011.0], [60.4, 2015.0], [60.5, 2022.0], [60.6, 2028.0], [60.7, 2034.0], [60.8, 2038.0], [60.9, 2042.0], [61.0, 2046.0], [61.1, 2051.0], [61.2, 2054.0], [61.3, 2057.0], [61.4, 2068.0], [61.5, 2071.0], [61.6, 2075.0], [61.7, 2080.0], [61.8, 2089.0], [61.9, 2093.0], [62.0, 2098.0], [62.1, 2101.0], [62.2, 2114.0], [62.3, 2117.0], [62.4, 2123.0], [62.5, 2127.0], [62.6, 2133.0], [62.7, 2136.0], [62.8, 2147.0], [62.9, 2151.0], [63.0, 2159.0], [63.1, 2166.0], [63.2, 2172.0], [63.3, 2180.0], [63.4, 2182.0], [63.5, 2189.0], [63.6, 2192.0], [63.7, 2200.0], [63.8, 2204.0], [63.9, 2208.0], [64.0, 2214.0], [64.1, 2221.0], [64.2, 2231.0], [64.3, 2236.0], [64.4, 2241.0], [64.5, 2249.0], [64.6, 2253.0], [64.7, 2256.0], [64.8, 2263.0], [64.9, 2269.0], [65.0, 2270.0], [65.1, 2272.0], [65.2, 2275.0], [65.3, 2282.0], [65.4, 2284.0], [65.5, 2294.0], [65.6, 2302.0], [65.7, 2307.0], [65.8, 2309.0], [65.9, 2314.0], [66.0, 2317.0], [66.1, 2320.0], [66.2, 2326.0], [66.3, 2329.0], [66.4, 2332.0], [66.5, 2348.0], [66.6, 2355.0], [66.7, 2361.0], [66.8, 2363.0], [66.9, 2370.0], [67.0, 2374.0], [67.1, 2379.0], [67.2, 2382.0], [67.3, 2389.0], [67.4, 2394.0], [67.5, 2396.0], [67.6, 2404.0], [67.7, 2409.0], [67.8, 2421.0], [67.9, 2424.0], [68.0, 2428.0], [68.1, 2438.0], [68.2, 2446.0], [68.3, 2453.0], [68.4, 2456.0], [68.5, 2458.0], [68.6, 2462.0], [68.7, 2467.0], [68.8, 2471.0], [68.9, 2476.0], [69.0, 2483.0], [69.1, 2487.0], [69.2, 2493.0], [69.3, 2496.0], [69.4, 2501.0], [69.5, 2507.0], [69.6, 2510.0], [69.7, 2512.0], [69.8, 2520.0], [69.9, 2522.0], [70.0, 2527.0], [70.1, 2537.0], [70.2, 2548.0], [70.3, 2562.0], [70.4, 2567.0], [70.5, 2582.0], [70.6, 2589.0], [70.7, 2594.0], [70.8, 2597.0], [70.9, 2604.0], [71.0, 2609.0], [71.1, 2613.0], [71.2, 2626.0], [71.3, 2631.0], [71.4, 2632.0], [71.5, 2637.0], [71.6, 2643.0], [71.7, 2652.0], [71.8, 2657.0], [71.9, 2661.0], [72.0, 2667.0], [72.1, 2673.0], [72.2, 2679.0], [72.3, 2686.0], [72.4, 2694.0], [72.5, 2703.0], [72.6, 2707.0], [72.7, 2716.0], [72.8, 2720.0], [72.9, 2724.0], [73.0, 2746.0], [73.1, 2750.0], [73.2, 2756.0], [73.3, 2760.0], [73.4, 2769.0], [73.5, 2780.0], [73.6, 2787.0], [73.7, 2796.0], [73.8, 2802.0], [73.9, 2815.0], [74.0, 2822.0], [74.1, 2830.0], [74.2, 2834.0], [74.3, 2855.0], [74.4, 2863.0], [74.5, 2870.0], [74.6, 2878.0], [74.7, 2884.0], [74.8, 2893.0], [74.9, 2898.0], [75.0, 2911.0], [75.1, 2915.0], [75.2, 2919.0], [75.3, 2924.0], [75.4, 2934.0], [75.5, 2942.0], [75.6, 2951.0], [75.7, 2956.0], [75.8, 2962.0], [75.9, 2965.0], [76.0, 2967.0], [76.1, 2974.0], [76.2, 2978.0], [76.3, 2984.0], [76.4, 2987.0], [76.5, 2993.0], [76.6, 2999.0], [76.7, 3008.0], [76.8, 3015.0], [76.9, 3022.0], [77.0, 3024.0], [77.1, 3027.0], [77.2, 3030.0], [77.3, 3039.0], [77.4, 3048.0], [77.5, 3054.0], [77.6, 3063.0], [77.7, 3072.0], [77.8, 3075.0], [77.9, 3092.0], [78.0, 3103.0], [78.1, 3111.0], [78.2, 3119.0], [78.3, 3123.0], [78.4, 3134.0], [78.5, 3137.0], [78.6, 3142.0], [78.7, 3156.0], [78.8, 3165.0], [78.9, 3172.0], [79.0, 3181.0], [79.1, 3186.0], [79.2, 3194.0], [79.3, 3201.0], [79.4, 3205.0], [79.5, 3214.0], [79.6, 3222.0], [79.7, 3229.0], [79.8, 3233.0], [79.9, 3236.0], [80.0, 3238.0], [80.1, 3244.0], [80.2, 3249.0], [80.3, 3255.0], [80.4, 3261.0], [80.5, 3273.0], [80.6, 3281.0], [80.7, 3294.0], [80.8, 3296.0], [80.9, 3302.0], [81.0, 3309.0], [81.1, 3324.0], [81.2, 3337.0], [81.3, 3343.0], [81.4, 3351.0], [81.5, 3361.0], [81.6, 3364.0], [81.7, 3379.0], [81.8, 3384.0], [81.9, 3393.0], [82.0, 3400.0], [82.1, 3408.0], [82.2, 3418.0], [82.3, 3425.0], [82.4, 3430.0], [82.5, 3434.0], [82.6, 3441.0], [82.7, 3448.0], [82.8, 3461.0], [82.9, 3469.0], [83.0, 3488.0], [83.1, 3495.0], [83.2, 3503.0], [83.3, 3510.0], [83.4, 3512.0], [83.5, 3519.0], [83.6, 3528.0], [83.7, 3535.0], [83.8, 3544.0], [83.9, 3561.0], [84.0, 3573.0], [84.1, 3579.0], [84.2, 3589.0], [84.3, 3599.0], [84.4, 3611.0], [84.5, 3623.0], [84.6, 3633.0], [84.7, 3643.0], [84.8, 3653.0], [84.9, 3655.0], [85.0, 3658.0], [85.1, 3660.0], [85.2, 3662.0], [85.3, 3672.0], [85.4, 3680.0], [85.5, 3688.0], [85.6, 3695.0], [85.7, 3703.0], [85.8, 3715.0], [85.9, 3721.0], [86.0, 3728.0], [86.1, 3734.0], [86.2, 3739.0], [86.3, 3747.0], [86.4, 3757.0], [86.5, 3766.0], [86.6, 3775.0], [86.7, 3782.0], [86.8, 3792.0], [86.9, 3796.0], [87.0, 3806.0], [87.1, 3816.0], [87.2, 3830.0], [87.3, 3841.0], [87.4, 3844.0], [87.5, 3848.0], [87.6, 3857.0], [87.7, 3867.0], [87.8, 3875.0], [87.9, 3884.0], [88.0, 3893.0], [88.1, 3898.0], [88.2, 3900.0], [88.3, 3906.0], [88.4, 3913.0], [88.5, 3921.0], [88.6, 3927.0], [88.7, 3943.0], [88.8, 3960.0], [88.9, 3968.0], [89.0, 3977.0], [89.1, 3994.0], [89.2, 4009.0], [89.3, 4027.0], [89.4, 4039.0], [89.5, 4054.0], [89.6, 4072.0], [89.7, 4080.0], [89.8, 4087.0], [89.9, 4095.0], [90.0, 4103.0], [90.1, 4117.0], [90.2, 4121.0], [90.3, 4129.0], [90.4, 4138.0], [90.5, 4145.0], [90.6, 4149.0], [90.7, 4166.0], [90.8, 4185.0], [90.9, 4192.0], [91.0, 4199.0], [91.1, 4207.0], [91.2, 4219.0], [91.3, 4247.0], [91.4, 4258.0], [91.5, 4265.0], [91.6, 4279.0], [91.7, 4309.0], [91.8, 4321.0], [91.9, 4328.0], [92.0, 4342.0], [92.1, 4364.0], [92.2, 4376.0], [92.3, 4390.0], [92.4, 4406.0], [92.5, 4425.0], [92.6, 4448.0], [92.7, 4473.0], [92.8, 4483.0], [92.9, 4500.0], [93.0, 4508.0], [93.1, 4539.0], [93.2, 4549.0], [93.3, 4563.0], [93.4, 4584.0], [93.5, 4609.0], [93.6, 4631.0], [93.7, 4659.0], [93.8, 4687.0], [93.9, 4704.0], [94.0, 4726.0], [94.1, 4744.0], [94.2, 4762.0], [94.3, 4785.0], [94.4, 4801.0], [94.5, 4827.0], [94.6, 4916.0], [94.7, 4965.0], [94.8, 4980.0], [94.9, 5017.0], [95.0, 5019.0], [95.1, 5068.0], [95.2, 5149.0], [95.3, 5230.0], [95.4, 5250.0], [95.5, 5293.0], [95.6, 5331.0], [95.7, 5402.0], [95.8, 5415.0], [95.9, 5440.0], [96.0, 5470.0], [96.1, 5512.0], [96.2, 5563.0], [96.3, 5605.0], [96.4, 5659.0], [96.5, 5737.0], [96.6, 5786.0], [96.7, 5848.0], [96.8, 5892.0], [96.9, 5990.0], [97.0, 6066.0], [97.1, 6096.0], [97.2, 6152.0], [97.3, 6202.0], [97.4, 6377.0], [97.5, 6450.0], [97.6, 6497.0], [97.7, 6653.0], [97.8, 6707.0], [97.9, 6743.0], [98.0, 6881.0], [98.1, 7022.0], [98.2, 7120.0], [98.3, 7201.0], [98.4, 7256.0], [98.5, 7281.0], [98.6, 7344.0], [98.7, 7422.0], [98.8, 7556.0], [98.9, 7600.0], [99.0, 7743.0], [99.1, 7971.0], [99.2, 8351.0], [99.3, 8930.0], [99.4, 9295.0], [99.5, 9879.0], [99.6, 10935.0], [99.7, 12333.0], [99.8, 12412.0], [99.9, 12453.0], [100.0, 12554.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 374.0, "series": [{"data": [[100.0, 3.0], [200.0, 4.0], [300.0, 41.0], [400.0, 374.0], [500.0, 101.0], [600.0, 154.0], [700.0, 359.0], [800.0, 310.0], [900.0, 222.0], [1000.0, 230.0], [1100.0, 219.0], [1200.0, 214.0], [1300.0, 150.0], [1400.0, 189.0], [1500.0, 143.0], [1600.0, 115.0], [1700.0, 123.0], [1800.0, 110.0], [1900.0, 108.0], [2000.0, 103.0], [2100.0, 85.0], [2300.0, 104.0], [2200.0, 99.0], [2400.0, 95.0], [2500.0, 79.0], [2600.0, 84.0], [2800.0, 60.0], [2700.0, 71.0], [2900.0, 90.0], [3000.0, 70.0], [3100.0, 71.0], [3200.0, 82.0], [3300.0, 61.0], [3400.0, 60.0], [3500.0, 62.0], [3700.0, 69.0], [3600.0, 69.0], [3800.0, 66.0], [3900.0, 52.0], [4000.0, 40.0], [4200.0, 36.0], [4100.0, 57.0], [4300.0, 36.0], [4500.0, 32.0], [4400.0, 26.0], [4600.0, 21.0], [4700.0, 27.0], [4800.0, 11.0], [5100.0, 6.0], [4900.0, 13.0], [5000.0, 16.0], [5200.0, 15.0], [5300.0, 8.0], [5500.0, 11.0], [5400.0, 19.0], [5600.0, 10.0], [5700.0, 8.0], [5800.0, 12.0], [6000.0, 10.0], [6100.0, 9.0], [5900.0, 5.0], [6300.0, 4.0], [6200.0, 2.0], [6400.0, 11.0], [6600.0, 5.0], [6500.0, 3.0], [6700.0, 12.0], [6900.0, 4.0], [6800.0, 1.0], [7100.0, 4.0], [7000.0, 6.0], [7400.0, 5.0], [7300.0, 7.0], [7200.0, 14.0], [7500.0, 7.0], [7600.0, 4.0], [7700.0, 3.0], [7800.0, 2.0], [7900.0, 3.0], [8000.0, 1.0], [8100.0, 1.0], [8700.0, 1.0], [8600.0, 1.0], [8300.0, 2.0], [9200.0, 2.0], [8800.0, 3.0], [9100.0, 3.0], [8900.0, 1.0], [9300.0, 1.0], [9400.0, 1.0], [9600.0, 2.0], [9800.0, 1.0], [9900.0, 2.0], [10200.0, 1.0], [10500.0, 1.0], [11200.0, 1.0], [10900.0, 1.0], [11700.0, 1.0], [11300.0, 1.0], [11400.0, 1.0], [12200.0, 1.0], [12400.0, 10.0], [12300.0, 5.0], [12500.0, 1.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 12500.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 424.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2699.0, "series": [{"data": [[0.0, 424.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 2149.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 2699.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 8.333333333333334, "minX": 1.60224048E12, "maxY": 12.0, "series": [{"data": [[1.60224102E12, 12.0], [1.6022409E12, 12.0], [1.60224132E12, 12.0], [1.6022406E12, 12.0], [1.60224096E12, 12.0], [1.60224048E12, 10.88095238095238], [1.60224108E12, 12.0], [1.60224084E12, 12.0], [1.60224138E12, 12.0], [1.60224054E12, 12.0], [1.60224072E12, 12.0], [1.60224114E12, 12.0], [1.60224078E12, 12.0], [1.60224144E12, 8.333333333333334], [1.60224126E12, 12.0], [1.60224066E12, 12.0], [1.6022412E12, 12.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60224144E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 2072.3530756046434, "minX": 1.0, "maxY": 12442.0, "series": [{"data": [[4.0, 6257.0], [8.0, 6353.5], [2.0, 12435.0], [1.0, 12442.0], [9.0, 6383.5], [5.0, 6307.0], [10.0, 6367.5], [11.0, 6408.0], [6.0, 4345.666666666667], [12.0, 2072.3530756046434], [3.0, 12333.0], [7.0, 4297.666666666666]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[11.978566009104691, 2090.5195371775403]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 12.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 154.06666666666666, "minX": 1.60224048E12, "maxY": 508527.95, "series": [{"data": [[1.60224102E12, 253898.01666666666], [1.6022409E12, 169851.88333333333], [1.60224132E12, 301092.48333333334], [1.6022406E12, 352579.9666666667], [1.60224096E12, 348311.2166666667], [1.60224048E12, 33268.683333333334], [1.60224108E12, 76332.5], [1.60224084E12, 223864.36666666667], [1.60224138E12, 249125.15], [1.60224054E12, 149866.76666666666], [1.60224072E12, 293132.7166666667], [1.60224114E12, 239910.13333333333], [1.60224078E12, 357639.9666666667], [1.60224144E12, 25528.383333333335], [1.60224126E12, 345472.95], [1.60224066E12, 363229.05], [1.6022412E12, 508527.95]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60224102E12, 3152.0833333333335], [1.6022409E12, 4495.683333333333], [1.60224132E12, 2302.983333333333], [1.6022406E12, 2687.766666666667], [1.60224096E12, 3684.383333333333], [1.60224048E12, 331.6333333333333], [1.60224108E12, 4362.05], [1.60224084E12, 3255.516666666667], [1.60224138E12, 3163.0], [1.60224054E12, 2975.866666666667], [1.60224072E12, 3169.65], [1.60224114E12, 3095.4166666666665], [1.60224078E12, 1482.0833333333333], [1.60224144E12, 154.06666666666666], [1.60224126E12, 3286.1833333333334], [1.60224066E12, 1876.75], [1.6022412E12, 2104.4333333333334]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60224144E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 1078.904761904762, "minX": 1.60224048E12, "maxY": 11727.722222222223, "series": [{"data": [[1.60224102E12, 2046.4902506963808], [1.6022409E12, 1468.6616541353385], [1.60224132E12, 2696.4188679245267], [1.6022406E12, 2082.274924471299], [1.60224096E12, 1481.385263157893], [1.60224048E12, 1078.904761904762], [1.60224108E12, 1479.4686192468625], [1.60224084E12, 1900.3905817174527], [1.60224138E12, 1925.0849858356949], [1.60224054E12, 2213.493902439025], [1.60224072E12, 1941.7589041095891], [1.60224114E12, 1955.291105121292], [1.60224078E12, 4068.938202247192], [1.60224144E12, 11727.722222222223], [1.60224126E12, 1936.657754010695], [1.60224066E12, 3592.9999999999995], [1.6022412E12, 3049.338983050848]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60224144E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 1078.404761904762, "minX": 1.60224048E12, "maxY": 11727.055555555557, "series": [{"data": [[1.60224102E12, 2046.1671309192186], [1.6022409E12, 1468.4981203007512], [1.60224132E12, 2695.845283018869], [1.6022406E12, 2081.7039274924473], [1.60224096E12, 1481.0231578947364], [1.60224048E12, 1078.404761904762], [1.60224108E12, 1479.387029288704], [1.60224084E12, 1900.0720221606637], [1.60224138E12, 1924.739376770538], [1.60224054E12, 2213.2408536585363], [1.60224072E12, 1941.33698630137], [1.60224114E12, 1954.9865229110521], [1.60224078E12, 4067.977528089889], [1.60224144E12, 11727.055555555557], [1.60224126E12, 1936.1711229946534], [1.60224066E12, 3592.0825242718442], [1.6022412E12, 3048.300847457627]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60224144E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.60224048E12, "maxY": 3.0952380952380976, "series": [{"data": [[1.60224102E12, 0.04456824512534816], [1.6022409E12, 0.03195488721804514], [1.60224132E12, 0.049056603773584874], [1.6022406E12, 0.009063444108761335], [1.60224096E12, 0.03157894736842107], [1.60224048E12, 3.0952380952380976], [1.60224108E12, 0.03974895397489541], [1.60224084E12, 0.05817174515235473], [1.60224138E12, 0.036827195467422115], [1.60224054E12, 0.048780487804878044], [1.60224072E12, 0.04657534246575343], [1.60224114E12, 0.03504043126684635], [1.60224078E12, 0.08988764044943821], [1.60224144E12, 0.0], [1.60224126E12, 0.03743315508021393], [1.60224066E12, 0.07766990291262134], [1.6022412E12, 0.0593220338983051]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60224144E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 155.0, "minX": 1.60224048E12, "maxY": 12554.0, "series": [{"data": [[1.60224102E12, 5876.0], [1.6022409E12, 12485.0], [1.60224132E12, 7558.0], [1.6022406E12, 6487.0], [1.60224096E12, 4982.0], [1.60224048E12, 3480.0], [1.60224108E12, 4332.0], [1.60224084E12, 9152.0], [1.60224138E12, 7262.0], [1.60224054E12, 5585.0], [1.60224072E12, 5010.0], [1.60224114E12, 5236.0], [1.60224078E12, 7971.0], [1.60224144E12, 12554.0], [1.60224126E12, 4758.0], [1.60224066E12, 9879.0], [1.6022412E12, 7638.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60224102E12, 368.95999965667727], [1.6022409E12, 400.0], [1.60224132E12, 429.0], [1.6022406E12, 592.987999920845], [1.60224096E12, 438.28399988651273], [1.60224048E12, 155.0], [1.60224108E12, 418.10999885797503], [1.60224084E12, 384.77399974107743], [1.60224138E12, 410.0], [1.60224054E12, 445.9219998431206], [1.60224072E12, 417.0], [1.60224114E12, 507.851986784935], [1.60224078E12, 944.4989996159077], [1.60224144E12, 8146.0], [1.60224126E12, 489.2499994635582], [1.60224066E12, 353.1779997038841], [1.6022412E12, 389.3689947450161]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60224102E12, 370.2560001373291], [1.6022409E12, 401.10680020332336], [1.60224132E12, 429.0], [1.6022406E12, 593.860400094986], [1.60224096E12, 438.7124000453949], [1.60224048E12, 155.0], [1.60224108E12, 422.42100045681], [1.60224084E12, 385.75140010356904], [1.60224138E12, 410.0], [1.60224054E12, 446.2571000313759], [1.60224072E12, 417.0], [1.60224114E12, 557.737205286026], [1.60224078E12, 945.9489001536369], [1.60224144E12, 8146.0], [1.60224126E12, 491.2750002145767], [1.60224066E12, 354.0986000394821], [1.6022412E12, 409.20590210199356]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60224102E12, 369.6799998283386], [1.6022409E12, 400.2539997458458], [1.60224132E12, 429.0], [1.6022406E12, 593.4619998812675], [1.60224096E12, 438.5219999432564], [1.60224048E12, 155.0], [1.60224108E12, 420.5049994289875], [1.60224084E12, 385.3169998705387], [1.60224138E12, 410.0], [1.60224054E12, 446.12549996078013], [1.60224072E12, 417.0], [1.60224114E12, 535.5659933924675], [1.60224078E12, 945.3044998079538], [1.60224144E12, 8146.0], [1.60224126E12, 490.3749997317791], [1.60224066E12, 353.7989998519421], [1.6022412E12, 400.389497372508]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60224102E12, 360.0], [1.6022409E12, 388.0], [1.60224132E12, 427.0], [1.6022406E12, 590.0], [1.60224096E12, 433.0], [1.60224048E12, 155.0], [1.60224108E12, 410.0], [1.60224084E12, 380.0], [1.60224138E12, 409.0], [1.60224054E12, 443.0], [1.60224072E12, 415.0], [1.60224114E12, 452.0], [1.60224078E12, 939.0], [1.60224144E12, 8146.0], [1.60224126E12, 485.0], [1.60224066E12, 348.0], [1.6022412E12, 376.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60224102E12, 1578.0], [1.6022409E12, 894.0], [1.60224132E12, 2101.0], [1.6022406E12, 1821.0], [1.60224096E12, 914.0], [1.60224048E12, 734.5], [1.60224108E12, 1244.5], [1.60224084E12, 1253.0], [1.60224138E12, 1340.0], [1.60224054E12, 1964.5], [1.60224072E12, 1985.0], [1.60224114E12, 1589.0], [1.60224078E12, 3902.0], [1.60224144E12, 12387.5], [1.60224126E12, 1822.5], [1.60224066E12, 3063.0], [1.6022412E12, 2895.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60224144E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 420.0, "minX": 1.0, "maxY": 6375.5, "series": [{"data": [[2.0, 4330.5], [3.0, 3469.0], [4.0, 3028.0], [5.0, 2482.5], [6.0, 2142.0], [7.0, 1885.0], [8.0, 1511.0], [9.0, 1405.0], [10.0, 1327.5], [11.0, 1164.0], [12.0, 1070.5], [13.0, 1161.5], [14.0, 912.0], [15.0, 838.0], [1.0, 6375.5], [16.0, 766.5], [17.0, 792.5], [18.0, 802.0], [19.0, 654.0], [20.0, 875.0], [21.0, 633.0], [22.0, 459.0], [24.0, 497.0], [25.0, 424.0], [26.0, 463.5], [28.0, 433.0], [29.0, 420.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 29.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 420.0, "minX": 1.0, "maxY": 6375.0, "series": [{"data": [[2.0, 4330.5], [3.0, 3469.0], [4.0, 3027.0], [5.0, 2480.5], [6.0, 2142.0], [7.0, 1885.0], [8.0, 1510.5], [9.0, 1405.0], [10.0, 1327.5], [11.0, 1164.0], [12.0, 1070.5], [13.0, 1161.5], [14.0, 912.0], [15.0, 838.0], [1.0, 6375.0], [16.0, 766.5], [17.0, 792.5], [18.0, 802.0], [19.0, 654.0], [20.0, 875.0], [21.0, 633.0], [22.0, 459.0], [24.0, 497.0], [25.0, 424.0], [26.0, 463.5], [28.0, 433.0], [29.0, 420.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 29.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.1, "minX": 1.60224048E12, "maxY": 8.866666666666667, "series": [{"data": [[1.60224102E12, 5.983333333333333], [1.6022409E12, 8.866666666666667], [1.60224132E12, 4.416666666666667], [1.6022406E12, 5.516666666666667], [1.60224096E12, 7.916666666666667], [1.60224048E12, 0.9], [1.60224108E12, 7.966666666666667], [1.60224084E12, 6.016666666666667], [1.60224138E12, 5.883333333333334], [1.60224054E12, 5.466666666666667], [1.60224072E12, 6.083333333333333], [1.60224114E12, 6.183333333333334], [1.60224078E12, 2.966666666666667], [1.60224144E12, 0.1], [1.60224126E12, 6.233333333333333], [1.60224066E12, 3.433333333333333], [1.6022412E12, 3.933333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60224144E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.3, "minX": 1.60224048E12, "maxY": 8.866666666666667, "series": [{"data": [[1.60224102E12, 5.983333333333333], [1.6022409E12, 8.866666666666667], [1.60224132E12, 4.416666666666667], [1.6022406E12, 5.516666666666667], [1.60224096E12, 7.916666666666667], [1.60224048E12, 0.7], [1.60224108E12, 7.966666666666667], [1.60224084E12, 6.016666666666667], [1.60224138E12, 5.883333333333334], [1.60224054E12, 5.466666666666667], [1.60224072E12, 6.083333333333333], [1.60224114E12, 6.183333333333334], [1.60224078E12, 2.966666666666667], [1.60224144E12, 0.3], [1.60224126E12, 6.233333333333333], [1.60224066E12, 3.433333333333333], [1.6022412E12, 3.933333333333333]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60224144E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.3, "minX": 1.60224048E12, "maxY": 8.866666666666667, "series": [{"data": [[1.60224102E12, 5.983333333333333], [1.6022409E12, 8.866666666666667], [1.60224132E12, 4.416666666666667], [1.6022406E12, 5.516666666666667], [1.60224096E12, 7.916666666666667], [1.60224048E12, 0.7], [1.60224108E12, 7.966666666666667], [1.60224084E12, 6.016666666666667], [1.60224138E12, 5.883333333333334], [1.60224054E12, 5.466666666666667], [1.60224072E12, 6.083333333333333], [1.60224114E12, 6.183333333333334], [1.60224078E12, 2.966666666666667], [1.60224144E12, 0.3], [1.60224126E12, 6.233333333333333], [1.60224066E12, 3.433333333333333], [1.6022412E12, 3.933333333333333]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60224144E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.3, "minX": 1.60224048E12, "maxY": 8.866666666666667, "series": [{"data": [[1.60224102E12, 5.983333333333333], [1.6022409E12, 8.866666666666667], [1.60224132E12, 4.416666666666667], [1.6022406E12, 5.516666666666667], [1.60224096E12, 7.916666666666667], [1.60224048E12, 0.7], [1.60224108E12, 7.966666666666667], [1.60224084E12, 6.016666666666667], [1.60224138E12, 5.883333333333334], [1.60224054E12, 5.466666666666667], [1.60224072E12, 6.083333333333333], [1.60224114E12, 6.183333333333334], [1.60224078E12, 2.966666666666667], [1.60224144E12, 0.3], [1.60224126E12, 6.233333333333333], [1.60224066E12, 3.433333333333333], [1.6022412E12, 3.933333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60224144E12, "title": "Total Transactions Per Second"}},
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

