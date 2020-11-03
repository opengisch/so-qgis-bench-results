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
        data: {"result": {"minY": 158.0, "minX": 0.0, "maxY": 12928.0, "series": [{"data": [[0.0, 158.0], [0.1, 294.0], [0.2, 419.0], [0.3, 460.0], [0.4, 478.0], [0.5, 491.0], [0.6, 498.0], [0.7, 502.0], [0.8, 505.0], [0.9, 506.0], [1.0, 507.0], [1.1, 509.0], [1.2, 512.0], [1.3, 514.0], [1.4, 516.0], [1.5, 517.0], [1.6, 518.0], [1.7, 520.0], [1.8, 523.0], [1.9, 524.0], [2.0, 526.0], [2.1, 528.0], [2.2, 530.0], [2.3, 531.0], [2.4, 532.0], [2.5, 533.0], [2.6, 535.0], [2.7, 537.0], [2.8, 537.0], [2.9, 539.0], [3.0, 540.0], [3.1, 542.0], [3.2, 544.0], [3.3, 545.0], [3.4, 546.0], [3.5, 546.0], [3.6, 548.0], [3.7, 550.0], [3.8, 550.0], [3.9, 552.0], [4.0, 553.0], [4.1, 554.0], [4.2, 554.0], [4.3, 556.0], [4.4, 556.0], [4.5, 557.0], [4.6, 557.0], [4.7, 557.0], [4.8, 559.0], [4.9, 559.0], [5.0, 560.0], [5.1, 561.0], [5.2, 562.0], [5.3, 563.0], [5.4, 564.0], [5.5, 566.0], [5.6, 566.0], [5.7, 568.0], [5.8, 569.0], [5.9, 571.0], [6.0, 573.0], [6.1, 574.0], [6.2, 575.0], [6.3, 577.0], [6.4, 580.0], [6.5, 583.0], [6.6, 586.0], [6.7, 588.0], [6.8, 590.0], [6.9, 591.0], [7.0, 593.0], [7.1, 595.0], [7.2, 596.0], [7.3, 599.0], [7.4, 601.0], [7.5, 603.0], [7.6, 605.0], [7.7, 608.0], [7.8, 611.0], [7.9, 613.0], [8.0, 614.0], [8.1, 615.0], [8.2, 618.0], [8.3, 621.0], [8.4, 624.0], [8.5, 629.0], [8.6, 630.0], [8.7, 636.0], [8.8, 645.0], [8.9, 649.0], [9.0, 651.0], [9.1, 655.0], [9.2, 660.0], [9.3, 661.0], [9.4, 671.0], [9.5, 679.0], [9.6, 683.0], [9.7, 688.0], [9.8, 691.0], [9.9, 694.0], [10.0, 696.0], [10.1, 699.0], [10.2, 702.0], [10.3, 710.0], [10.4, 715.0], [10.5, 719.0], [10.6, 727.0], [10.7, 735.0], [10.8, 745.0], [10.9, 752.0], [11.0, 754.0], [11.1, 759.0], [11.2, 761.0], [11.3, 762.0], [11.4, 767.0], [11.5, 769.0], [11.6, 773.0], [11.7, 774.0], [11.8, 776.0], [11.9, 779.0], [12.0, 780.0], [12.1, 782.0], [12.2, 784.0], [12.3, 787.0], [12.4, 789.0], [12.5, 790.0], [12.6, 794.0], [12.7, 797.0], [12.8, 798.0], [12.9, 799.0], [13.0, 802.0], [13.1, 805.0], [13.2, 806.0], [13.3, 808.0], [13.4, 809.0], [13.5, 811.0], [13.6, 813.0], [13.7, 814.0], [13.8, 816.0], [13.9, 816.0], [14.0, 817.0], [14.1, 818.0], [14.2, 819.0], [14.3, 820.0], [14.4, 821.0], [14.5, 822.0], [14.6, 824.0], [14.7, 825.0], [14.8, 826.0], [14.9, 828.0], [15.0, 829.0], [15.1, 830.0], [15.2, 830.0], [15.3, 832.0], [15.4, 833.0], [15.5, 834.0], [15.6, 835.0], [15.7, 837.0], [15.8, 838.0], [15.9, 840.0], [16.0, 841.0], [16.1, 842.0], [16.2, 844.0], [16.3, 845.0], [16.4, 847.0], [16.5, 849.0], [16.6, 850.0], [16.7, 851.0], [16.8, 852.0], [16.9, 853.0], [17.0, 854.0], [17.1, 856.0], [17.2, 857.0], [17.3, 859.0], [17.4, 860.0], [17.5, 862.0], [17.6, 864.0], [17.7, 865.0], [17.8, 866.0], [17.9, 867.0], [18.0, 869.0], [18.1, 873.0], [18.2, 873.0], [18.3, 875.0], [18.4, 875.0], [18.5, 877.0], [18.6, 879.0], [18.7, 881.0], [18.8, 883.0], [18.9, 884.0], [19.0, 885.0], [19.1, 887.0], [19.2, 888.0], [19.3, 889.0], [19.4, 890.0], [19.5, 892.0], [19.6, 893.0], [19.7, 894.0], [19.8, 895.0], [19.9, 897.0], [20.0, 897.0], [20.1, 900.0], [20.2, 903.0], [20.3, 903.0], [20.4, 904.0], [20.5, 905.0], [20.6, 907.0], [20.7, 908.0], [20.8, 910.0], [20.9, 911.0], [21.0, 912.0], [21.1, 913.0], [21.2, 914.0], [21.3, 915.0], [21.4, 916.0], [21.5, 917.0], [21.6, 919.0], [21.7, 920.0], [21.8, 920.0], [21.9, 922.0], [22.0, 924.0], [22.1, 924.0], [22.2, 926.0], [22.3, 928.0], [22.4, 929.0], [22.5, 931.0], [22.6, 932.0], [22.7, 934.0], [22.8, 935.0], [22.9, 936.0], [23.0, 938.0], [23.1, 941.0], [23.2, 943.0], [23.3, 947.0], [23.4, 950.0], [23.5, 955.0], [23.6, 957.0], [23.7, 958.0], [23.8, 960.0], [23.9, 963.0], [24.0, 964.0], [24.1, 964.0], [24.2, 968.0], [24.3, 969.0], [24.4, 970.0], [24.5, 972.0], [24.6, 972.0], [24.7, 974.0], [24.8, 975.0], [24.9, 979.0], [25.0, 981.0], [25.1, 983.0], [25.2, 985.0], [25.3, 988.0], [25.4, 988.0], [25.5, 991.0], [25.6, 994.0], [25.7, 999.0], [25.8, 1004.0], [25.9, 1007.0], [26.0, 1010.0], [26.1, 1015.0], [26.2, 1019.0], [26.3, 1022.0], [26.4, 1023.0], [26.5, 1026.0], [26.6, 1027.0], [26.7, 1029.0], [26.8, 1031.0], [26.9, 1031.0], [27.0, 1033.0], [27.1, 1039.0], [27.2, 1040.0], [27.3, 1041.0], [27.4, 1043.0], [27.5, 1046.0], [27.6, 1047.0], [27.7, 1048.0], [27.8, 1051.0], [27.9, 1054.0], [28.0, 1055.0], [28.1, 1058.0], [28.2, 1059.0], [28.3, 1063.0], [28.4, 1065.0], [28.5, 1067.0], [28.6, 1072.0], [28.7, 1076.0], [28.8, 1079.0], [28.9, 1084.0], [29.0, 1086.0], [29.1, 1087.0], [29.2, 1091.0], [29.3, 1092.0], [29.4, 1096.0], [29.5, 1100.0], [29.6, 1101.0], [29.7, 1105.0], [29.8, 1109.0], [29.9, 1111.0], [30.0, 1113.0], [30.1, 1115.0], [30.2, 1118.0], [30.3, 1120.0], [30.4, 1122.0], [30.5, 1123.0], [30.6, 1127.0], [30.7, 1128.0], [30.8, 1130.0], [30.9, 1132.0], [31.0, 1134.0], [31.1, 1135.0], [31.2, 1136.0], [31.3, 1139.0], [31.4, 1141.0], [31.5, 1142.0], [31.6, 1145.0], [31.7, 1147.0], [31.8, 1150.0], [31.9, 1153.0], [32.0, 1155.0], [32.1, 1158.0], [32.2, 1160.0], [32.3, 1161.0], [32.4, 1163.0], [32.5, 1166.0], [32.6, 1169.0], [32.7, 1170.0], [32.8, 1173.0], [32.9, 1175.0], [33.0, 1177.0], [33.1, 1178.0], [33.2, 1182.0], [33.3, 1183.0], [33.4, 1184.0], [33.5, 1185.0], [33.6, 1187.0], [33.7, 1188.0], [33.8, 1189.0], [33.9, 1190.0], [34.0, 1192.0], [34.1, 1194.0], [34.2, 1195.0], [34.3, 1197.0], [34.4, 1199.0], [34.5, 1205.0], [34.6, 1207.0], [34.7, 1209.0], [34.8, 1211.0], [34.9, 1213.0], [35.0, 1216.0], [35.1, 1218.0], [35.2, 1220.0], [35.3, 1225.0], [35.4, 1227.0], [35.5, 1230.0], [35.6, 1233.0], [35.7, 1236.0], [35.8, 1238.0], [35.9, 1242.0], [36.0, 1244.0], [36.1, 1245.0], [36.2, 1250.0], [36.3, 1253.0], [36.4, 1255.0], [36.5, 1257.0], [36.6, 1259.0], [36.7, 1263.0], [36.8, 1264.0], [36.9, 1265.0], [37.0, 1267.0], [37.1, 1269.0], [37.2, 1271.0], [37.3, 1274.0], [37.4, 1276.0], [37.5, 1278.0], [37.6, 1280.0], [37.7, 1283.0], [37.8, 1285.0], [37.9, 1288.0], [38.0, 1289.0], [38.1, 1290.0], [38.2, 1293.0], [38.3, 1300.0], [38.4, 1303.0], [38.5, 1304.0], [38.6, 1307.0], [38.7, 1309.0], [38.8, 1311.0], [38.9, 1315.0], [39.0, 1317.0], [39.1, 1320.0], [39.2, 1324.0], [39.3, 1327.0], [39.4, 1330.0], [39.5, 1332.0], [39.6, 1333.0], [39.7, 1335.0], [39.8, 1337.0], [39.9, 1341.0], [40.0, 1342.0], [40.1, 1345.0], [40.2, 1346.0], [40.3, 1348.0], [40.4, 1351.0], [40.5, 1353.0], [40.6, 1357.0], [40.7, 1359.0], [40.8, 1363.0], [40.9, 1366.0], [41.0, 1368.0], [41.1, 1370.0], [41.2, 1372.0], [41.3, 1377.0], [41.4, 1379.0], [41.5, 1381.0], [41.6, 1385.0], [41.7, 1390.0], [41.8, 1393.0], [41.9, 1395.0], [42.0, 1397.0], [42.1, 1401.0], [42.2, 1403.0], [42.3, 1405.0], [42.4, 1408.0], [42.5, 1411.0], [42.6, 1415.0], [42.7, 1419.0], [42.8, 1421.0], [42.9, 1424.0], [43.0, 1426.0], [43.1, 1429.0], [43.2, 1434.0], [43.3, 1434.0], [43.4, 1437.0], [43.5, 1440.0], [43.6, 1443.0], [43.7, 1445.0], [43.8, 1447.0], [43.9, 1454.0], [44.0, 1459.0], [44.1, 1462.0], [44.2, 1463.0], [44.3, 1466.0], [44.4, 1468.0], [44.5, 1471.0], [44.6, 1474.0], [44.7, 1477.0], [44.8, 1482.0], [44.9, 1486.0], [45.0, 1492.0], [45.1, 1494.0], [45.2, 1502.0], [45.3, 1505.0], [45.4, 1508.0], [45.5, 1509.0], [45.6, 1512.0], [45.7, 1515.0], [45.8, 1517.0], [45.9, 1521.0], [46.0, 1523.0], [46.1, 1524.0], [46.2, 1527.0], [46.3, 1529.0], [46.4, 1530.0], [46.5, 1531.0], [46.6, 1534.0], [46.7, 1538.0], [46.8, 1542.0], [46.9, 1545.0], [47.0, 1547.0], [47.1, 1550.0], [47.2, 1552.0], [47.3, 1558.0], [47.4, 1562.0], [47.5, 1564.0], [47.6, 1570.0], [47.7, 1573.0], [47.8, 1576.0], [47.9, 1578.0], [48.0, 1583.0], [48.1, 1587.0], [48.2, 1589.0], [48.3, 1591.0], [48.4, 1594.0], [48.5, 1596.0], [48.6, 1598.0], [48.7, 1599.0], [48.8, 1600.0], [48.9, 1602.0], [49.0, 1603.0], [49.1, 1605.0], [49.2, 1608.0], [49.3, 1611.0], [49.4, 1613.0], [49.5, 1616.0], [49.6, 1621.0], [49.7, 1625.0], [49.8, 1629.0], [49.9, 1633.0], [50.0, 1637.0], [50.1, 1641.0], [50.2, 1647.0], [50.3, 1651.0], [50.4, 1660.0], [50.5, 1666.0], [50.6, 1671.0], [50.7, 1674.0], [50.8, 1678.0], [50.9, 1685.0], [51.0, 1691.0], [51.1, 1696.0], [51.2, 1698.0], [51.3, 1700.0], [51.4, 1701.0], [51.5, 1704.0], [51.6, 1706.0], [51.7, 1710.0], [51.8, 1717.0], [51.9, 1719.0], [52.0, 1730.0], [52.1, 1733.0], [52.2, 1736.0], [52.3, 1744.0], [52.4, 1748.0], [52.5, 1754.0], [52.6, 1761.0], [52.7, 1767.0], [52.8, 1773.0], [52.9, 1782.0], [53.0, 1787.0], [53.1, 1791.0], [53.2, 1794.0], [53.3, 1798.0], [53.4, 1801.0], [53.5, 1805.0], [53.6, 1806.0], [53.7, 1809.0], [53.8, 1812.0], [53.9, 1814.0], [54.0, 1816.0], [54.1, 1818.0], [54.2, 1821.0], [54.3, 1825.0], [54.4, 1829.0], [54.5, 1832.0], [54.6, 1836.0], [54.7, 1840.0], [54.8, 1844.0], [54.9, 1850.0], [55.0, 1853.0], [55.1, 1857.0], [55.2, 1863.0], [55.3, 1868.0], [55.4, 1874.0], [55.5, 1880.0], [55.6, 1885.0], [55.7, 1892.0], [55.8, 1896.0], [55.9, 1901.0], [56.0, 1903.0], [56.1, 1908.0], [56.2, 1917.0], [56.3, 1918.0], [56.4, 1920.0], [56.5, 1926.0], [56.6, 1932.0], [56.7, 1936.0], [56.8, 1946.0], [56.9, 1950.0], [57.0, 1954.0], [57.1, 1955.0], [57.2, 1958.0], [57.3, 1963.0], [57.4, 1967.0], [57.5, 1972.0], [57.6, 1974.0], [57.7, 1978.0], [57.8, 1982.0], [57.9, 1984.0], [58.0, 1987.0], [58.1, 1991.0], [58.2, 1995.0], [58.3, 2001.0], [58.4, 2006.0], [58.5, 2009.0], [58.6, 2011.0], [58.7, 2014.0], [58.8, 2024.0], [58.9, 2028.0], [59.0, 2032.0], [59.1, 2036.0], [59.2, 2043.0], [59.3, 2051.0], [59.4, 2056.0], [59.5, 2064.0], [59.6, 2068.0], [59.7, 2072.0], [59.8, 2077.0], [59.9, 2080.0], [60.0, 2085.0], [60.1, 2090.0], [60.2, 2099.0], [60.3, 2103.0], [60.4, 2109.0], [60.5, 2116.0], [60.6, 2121.0], [60.7, 2128.0], [60.8, 2132.0], [60.9, 2137.0], [61.0, 2145.0], [61.1, 2151.0], [61.2, 2155.0], [61.3, 2162.0], [61.4, 2169.0], [61.5, 2179.0], [61.6, 2184.0], [61.7, 2187.0], [61.8, 2192.0], [61.9, 2198.0], [62.0, 2207.0], [62.1, 2212.0], [62.2, 2215.0], [62.3, 2223.0], [62.4, 2226.0], [62.5, 2229.0], [62.6, 2233.0], [62.7, 2238.0], [62.8, 2244.0], [62.9, 2245.0], [63.0, 2250.0], [63.1, 2253.0], [63.2, 2256.0], [63.3, 2259.0], [63.4, 2265.0], [63.5, 2268.0], [63.6, 2274.0], [63.7, 2275.0], [63.8, 2277.0], [63.9, 2282.0], [64.0, 2286.0], [64.1, 2288.0], [64.2, 2292.0], [64.3, 2297.0], [64.4, 2306.0], [64.5, 2310.0], [64.6, 2317.0], [64.7, 2322.0], [64.8, 2324.0], [64.9, 2332.0], [65.0, 2337.0], [65.1, 2341.0], [65.2, 2347.0], [65.3, 2351.0], [65.4, 2356.0], [65.5, 2363.0], [65.6, 2368.0], [65.7, 2376.0], [65.8, 2384.0], [65.9, 2386.0], [66.0, 2393.0], [66.1, 2405.0], [66.2, 2407.0], [66.3, 2409.0], [66.4, 2415.0], [66.5, 2419.0], [66.6, 2422.0], [66.7, 2425.0], [66.8, 2431.0], [66.9, 2437.0], [67.0, 2441.0], [67.1, 2449.0], [67.2, 2459.0], [67.3, 2466.0], [67.4, 2472.0], [67.5, 2479.0], [67.6, 2485.0], [67.7, 2493.0], [67.8, 2497.0], [67.9, 2504.0], [68.0, 2514.0], [68.1, 2521.0], [68.2, 2526.0], [68.3, 2533.0], [68.4, 2536.0], [68.5, 2542.0], [68.6, 2547.0], [68.7, 2550.0], [68.8, 2562.0], [68.9, 2567.0], [69.0, 2573.0], [69.1, 2579.0], [69.2, 2585.0], [69.3, 2590.0], [69.4, 2595.0], [69.5, 2602.0], [69.6, 2605.0], [69.7, 2608.0], [69.8, 2612.0], [69.9, 2619.0], [70.0, 2622.0], [70.1, 2630.0], [70.2, 2637.0], [70.3, 2642.0], [70.4, 2647.0], [70.5, 2651.0], [70.6, 2659.0], [70.7, 2661.0], [70.8, 2669.0], [70.9, 2673.0], [71.0, 2682.0], [71.1, 2686.0], [71.2, 2692.0], [71.3, 2695.0], [71.4, 2703.0], [71.5, 2707.0], [71.6, 2717.0], [71.7, 2720.0], [71.8, 2729.0], [71.9, 2736.0], [72.0, 2749.0], [72.1, 2754.0], [72.2, 2759.0], [72.3, 2766.0], [72.4, 2772.0], [72.5, 2781.0], [72.6, 2788.0], [72.7, 2791.0], [72.8, 2798.0], [72.9, 2807.0], [73.0, 2812.0], [73.1, 2821.0], [73.2, 2832.0], [73.3, 2847.0], [73.4, 2854.0], [73.5, 2864.0], [73.6, 2869.0], [73.7, 2876.0], [73.8, 2883.0], [73.9, 2888.0], [74.0, 2905.0], [74.1, 2911.0], [74.2, 2919.0], [74.3, 2923.0], [74.4, 2929.0], [74.5, 2935.0], [74.6, 2944.0], [74.7, 2957.0], [74.8, 2961.0], [74.9, 2967.0], [75.0, 2977.0], [75.1, 2981.0], [75.2, 2988.0], [75.3, 2995.0], [75.4, 3005.0], [75.5, 3014.0], [75.6, 3023.0], [75.7, 3034.0], [75.8, 3041.0], [75.9, 3047.0], [76.0, 3054.0], [76.1, 3063.0], [76.2, 3076.0], [76.3, 3085.0], [76.4, 3091.0], [76.5, 3097.0], [76.6, 3110.0], [76.7, 3115.0], [76.8, 3129.0], [76.9, 3136.0], [77.0, 3140.0], [77.1, 3146.0], [77.2, 3153.0], [77.3, 3159.0], [77.4, 3164.0], [77.5, 3173.0], [77.6, 3185.0], [77.7, 3189.0], [77.8, 3196.0], [77.9, 3204.0], [78.0, 3219.0], [78.1, 3229.0], [78.2, 3232.0], [78.3, 3238.0], [78.4, 3241.0], [78.5, 3259.0], [78.6, 3266.0], [78.7, 3276.0], [78.8, 3278.0], [78.9, 3286.0], [79.0, 3293.0], [79.1, 3300.0], [79.2, 3304.0], [79.3, 3309.0], [79.4, 3315.0], [79.5, 3321.0], [79.6, 3333.0], [79.7, 3341.0], [79.8, 3346.0], [79.9, 3354.0], [80.0, 3360.0], [80.1, 3366.0], [80.2, 3371.0], [80.3, 3372.0], [80.4, 3375.0], [80.5, 3387.0], [80.6, 3391.0], [80.7, 3395.0], [80.8, 3400.0], [80.9, 3402.0], [81.0, 3404.0], [81.1, 3412.0], [81.2, 3424.0], [81.3, 3428.0], [81.4, 3431.0], [81.5, 3446.0], [81.6, 3455.0], [81.7, 3463.0], [81.8, 3470.0], [81.9, 3478.0], [82.0, 3482.0], [82.1, 3493.0], [82.2, 3501.0], [82.3, 3505.0], [82.4, 3516.0], [82.5, 3529.0], [82.6, 3536.0], [82.7, 3545.0], [82.8, 3554.0], [82.9, 3565.0], [83.0, 3570.0], [83.1, 3578.0], [83.2, 3594.0], [83.3, 3615.0], [83.4, 3620.0], [83.5, 3634.0], [83.6, 3649.0], [83.7, 3657.0], [83.8, 3662.0], [83.9, 3670.0], [84.0, 3676.0], [84.1, 3680.0], [84.2, 3689.0], [84.3, 3695.0], [84.4, 3711.0], [84.5, 3715.0], [84.6, 3722.0], [84.7, 3732.0], [84.8, 3741.0], [84.9, 3748.0], [85.0, 3754.0], [85.1, 3763.0], [85.2, 3768.0], [85.3, 3779.0], [85.4, 3788.0], [85.5, 3803.0], [85.6, 3812.0], [85.7, 3818.0], [85.8, 3826.0], [85.9, 3837.0], [86.0, 3847.0], [86.1, 3854.0], [86.2, 3857.0], [86.3, 3867.0], [86.4, 3877.0], [86.5, 3885.0], [86.6, 3894.0], [86.7, 3898.0], [86.8, 3908.0], [86.9, 3912.0], [87.0, 3919.0], [87.1, 3941.0], [87.2, 3947.0], [87.3, 3956.0], [87.4, 3962.0], [87.5, 3973.0], [87.6, 3977.0], [87.7, 3988.0], [87.8, 4003.0], [87.9, 4007.0], [88.0, 4022.0], [88.1, 4027.0], [88.2, 4036.0], [88.3, 4046.0], [88.4, 4059.0], [88.5, 4068.0], [88.6, 4077.0], [88.7, 4082.0], [88.8, 4094.0], [88.9, 4105.0], [89.0, 4118.0], [89.1, 4123.0], [89.2, 4132.0], [89.3, 4144.0], [89.4, 4155.0], [89.5, 4159.0], [89.6, 4174.0], [89.7, 4187.0], [89.8, 4198.0], [89.9, 4216.0], [90.0, 4230.0], [90.1, 4240.0], [90.2, 4264.0], [90.3, 4272.0], [90.4, 4287.0], [90.5, 4307.0], [90.6, 4315.0], [90.7, 4321.0], [90.8, 4333.0], [90.9, 4346.0], [91.0, 4355.0], [91.1, 4360.0], [91.2, 4382.0], [91.3, 4402.0], [91.4, 4410.0], [91.5, 4418.0], [91.6, 4423.0], [91.7, 4435.0], [91.8, 4451.0], [91.9, 4467.0], [92.0, 4480.0], [92.1, 4493.0], [92.2, 4500.0], [92.3, 4508.0], [92.4, 4526.0], [92.5, 4537.0], [92.6, 4548.0], [92.7, 4573.0], [92.8, 4604.0], [92.9, 4619.0], [93.0, 4637.0], [93.1, 4656.0], [93.2, 4679.0], [93.3, 4690.0], [93.4, 4702.0], [93.5, 4733.0], [93.6, 4780.0], [93.7, 4802.0], [93.8, 4808.0], [93.9, 4854.0], [94.0, 4870.0], [94.1, 4899.0], [94.2, 4922.0], [94.3, 4949.0], [94.4, 5002.0], [94.5, 5007.0], [94.6, 5026.0], [94.7, 5084.0], [94.8, 5100.0], [94.9, 5114.0], [95.0, 5149.0], [95.1, 5195.0], [95.2, 5234.0], [95.3, 5369.0], [95.4, 5391.0], [95.5, 5409.0], [95.6, 5435.0], [95.7, 5453.0], [95.8, 5516.0], [95.9, 5557.0], [96.0, 5631.0], [96.1, 5660.0], [96.2, 5709.0], [96.3, 5752.0], [96.4, 5788.0], [96.5, 5895.0], [96.6, 6027.0], [96.7, 6054.0], [96.8, 6177.0], [96.9, 6205.0], [97.0, 6257.0], [97.1, 6314.0], [97.2, 6341.0], [97.3, 6456.0], [97.4, 6560.0], [97.5, 6681.0], [97.6, 6750.0], [97.7, 6812.0], [97.8, 6899.0], [97.9, 6953.0], [98.0, 7059.0], [98.1, 7170.0], [98.2, 7289.0], [98.3, 7367.0], [98.4, 7433.0], [98.5, 7480.0], [98.6, 7595.0], [98.7, 7703.0], [98.8, 7829.0], [98.9, 7915.0], [99.0, 8002.0], [99.1, 8165.0], [99.2, 8481.0], [99.3, 9097.0], [99.4, 9505.0], [99.5, 9860.0], [99.6, 11026.0], [99.7, 12302.0], [99.8, 12695.0], [99.9, 12830.0], [100.0, 12928.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 377.0, "series": [{"data": [[100.0, 2.0], [200.0, 4.0], [300.0, 2.0], [400.0, 24.0], [500.0, 356.0], [600.0, 144.0], [700.0, 147.0], [800.0, 377.0], [900.0, 297.0], [1000.0, 199.0], [1100.0, 259.0], [1200.0, 204.0], [1300.0, 198.0], [1400.0, 164.0], [1500.0, 189.0], [1600.0, 133.0], [1700.0, 108.0], [1800.0, 134.0], [1900.0, 126.0], [2000.0, 101.0], [2100.0, 91.0], [2200.0, 126.0], [2300.0, 91.0], [2400.0, 96.0], [2500.0, 84.0], [2600.0, 99.0], [2700.0, 76.0], [2800.0, 61.0], [2900.0, 74.0], [3000.0, 60.0], [3100.0, 69.0], [3300.0, 88.0], [3200.0, 67.0], [3400.0, 74.0], [3500.0, 54.0], [3600.0, 60.0], [3700.0, 60.0], [3800.0, 65.0], [3900.0, 54.0], [4000.0, 58.0], [4300.0, 43.0], [4200.0, 33.0], [4100.0, 52.0], [4500.0, 34.0], [4400.0, 46.0], [4600.0, 30.0], [4800.0, 26.0], [4700.0, 14.0], [5100.0, 17.0], [4900.0, 14.0], [5000.0, 21.0], [5200.0, 8.0], [5300.0, 11.0], [5600.0, 12.0], [5400.0, 16.0], [5500.0, 10.0], [5700.0, 11.0], [5800.0, 5.0], [6000.0, 9.0], [6100.0, 6.0], [5900.0, 4.0], [6200.0, 11.0], [6300.0, 9.0], [6600.0, 7.0], [6400.0, 7.0], [6500.0, 2.0], [6800.0, 8.0], [6900.0, 6.0], [6700.0, 6.0], [7100.0, 5.0], [7000.0, 5.0], [7400.0, 10.0], [7200.0, 6.0], [7300.0, 5.0], [7500.0, 5.0], [7600.0, 3.0], [7800.0, 6.0], [7900.0, 5.0], [7700.0, 5.0], [8000.0, 5.0], [8100.0, 3.0], [8200.0, 2.0], [8400.0, 2.0], [8900.0, 3.0], [9000.0, 2.0], [9100.0, 1.0], [8800.0, 1.0], [9500.0, 3.0], [9400.0, 1.0], [9300.0, 2.0], [9700.0, 1.0], [9800.0, 2.0], [9900.0, 1.0], [10400.0, 2.0], [10300.0, 1.0], [11000.0, 1.0], [11600.0, 1.0], [11300.0, 2.0], [12200.0, 1.0], [11900.0, 1.0], [12300.0, 3.0], [12600.0, 3.0], [12700.0, 3.0], [12800.0, 4.0], [12900.0, 3.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 12900.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 35.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2884.0, "series": [{"data": [[0.0, 35.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 2343.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 2884.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 11.288135593220337, "minX": 1.60439766E12, "maxY": 12.0, "series": [{"data": [[1.6043979E12, 12.0], [1.6043982E12, 12.0], [1.6043985E12, 12.0], [1.60439784E12, 12.0], [1.60439814E12, 12.0], [1.60439844E12, 12.0], [1.60439778E12, 12.0], [1.60439808E12, 12.0], [1.60439838E12, 12.0], [1.60439772E12, 12.0], [1.60439802E12, 12.0], [1.60439832E12, 12.0], [1.60439862E12, 11.75912408759124], [1.60439766E12, 11.288135593220337], [1.60439796E12, 12.0], [1.60439826E12, 12.0], [1.60439856E12, 12.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60439862E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 2174.8187714612764, "minX": 1.0, "maxY": 12918.0, "series": [{"data": [[4.0, 6426.5], [8.0, 4502.666666666667], [2.0, 12830.0], [1.0, 12918.0], [9.0, 12869.0], [5.0, 6403.5], [10.0, 6598.5], [11.0, 6629.0], [6.0, 6572.0], [12.0, 2174.8187714612764], [3.0, 12777.0], [7.0, 4471.666666666667]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[11.979475484606624, 2193.838084378571]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 12.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 478.06666666666666, "minX": 1.60439766E12, "maxY": 428160.15, "series": [{"data": [[1.6043979E12, 311345.15], [1.6043982E12, 222645.0], [1.6043985E12, 210706.18333333332], [1.60439784E12, 344501.43333333335], [1.60439814E12, 345173.01666666666], [1.60439844E12, 428160.15], [1.60439778E12, 345583.61666666664], [1.60439808E12, 138818.45], [1.60439838E12, 411633.88333333336], [1.60439772E12, 138460.58333333334], [1.60439802E12, 235187.63333333333], [1.60439832E12, 157297.68333333332], [1.60439862E12, 120680.65], [1.60439766E12, 45588.96666666667], [1.60439796E12, 307914.61666666664], [1.60439826E12, 130139.05], [1.60439856E12, 357152.18333333335]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6043979E12, 3164.25], [1.6043982E12, 2251.8333333333335], [1.6043985E12, 3442.4], [1.60439784E12, 1805.9], [1.60439814E12, 3913.0833333333335], [1.60439844E12, 2137.9333333333334], [1.60439778E12, 2619.6666666666665], [1.60439808E12, 3628.766666666667], [1.60439838E12, 2994.05], [1.60439772E12, 2889.0], [1.60439802E12, 3263.2833333333333], [1.60439832E12, 2847.7833333333333], [1.60439862E12, 2487.0333333333333], [1.60439766E12, 478.06666666666666], [1.60439796E12, 1427.8166666666666], [1.60439826E12, 4455.966666666666], [1.60439856E12, 1684.1166666666666]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60439862E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 1361.9536679536682, "minX": 1.60439766E12, "maxY": 4110.456140350878, "series": [{"data": [[1.6043979E12, 2007.0521978021986], [1.6043982E12, 2756.557251908395], [1.6043985E12, 1777.5307692307688], [1.60439784E12, 3752.0000000000014], [1.60439814E12, 1361.9536679536682], [1.60439844E12, 3073.5966386554637], [1.60439778E12, 2148.7894736842104], [1.60439808E12, 1789.555555555555], [1.60439838E12, 1970.7300275482098], [1.60439772E12, 2270.584905660378], [1.60439802E12, 1981.73002754821], [1.60439832E12, 2250.958466453676], [1.60439862E12, 2364.437956204379], [1.60439766E12, 1707.3898305084742], [1.60439796E12, 4110.456140350878], [1.60439826E12, 1477.121457489878], [1.60439856E12, 3702.99]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60439862E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 1361.6196911196896, "minX": 1.60439766E12, "maxY": 4109.614035087721, "series": [{"data": [[1.6043979E12, 2006.6456043956036], [1.6043982E12, 2756.145038167939], [1.6043985E12, 1777.2717948717948], [1.60439784E12, 3751.0858585858596], [1.60439814E12, 1361.6196911196896], [1.60439844E12, 3072.7100840336134], [1.60439778E12, 2148.1671826625384], [1.60439808E12, 1789.3671497584564], [1.60439838E12, 1970.1955922865016], [1.60439772E12, 2270.3113207547167], [1.60439802E12, 1981.366391184573], [1.60439832E12, 2250.718849840257], [1.60439862E12, 2364.2299270072986], [1.60439766E12, 1706.949152542373], [1.60439796E12, 4109.614035087721], [1.60439826E12, 1476.9757085020221], [1.60439856E12, 3702.090000000004]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60439862E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.02702702702702705, "minX": 1.60439766E12, "maxY": 2.3559322033898304, "series": [{"data": [[1.6043979E12, 0.041208791208791194], [1.6043982E12, 0.06106870229007633], [1.6043985E12, 0.04102564102564101], [1.60439784E12, 0.08080808080808079], [1.60439814E12, 0.02702702702702705], [1.60439844E12, 0.05042016806722697], [1.60439778E12, 0.030959752321981428], [1.60439808E12, 0.036231884057971085], [1.60439838E12, 0.03581267217630857], [1.60439772E12, 0.05031446540880502], [1.60439802E12, 0.04407713498622587], [1.60439832E12, 0.044728434504792386], [1.60439862E12, 0.062043795620437915], [1.60439766E12, 2.3559322033898304], [1.60439796E12, 0.03508771929824565], [1.60439826E12, 0.030364372469635675], [1.60439856E12, 0.065]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60439862E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 158.0, "minX": 1.60439766E12, "maxY": 12928.0, "series": [{"data": [[1.6043979E12, 4451.0], [1.6043982E12, 6193.0], [1.6043985E12, 6033.0], [1.60439784E12, 9967.0], [1.60439814E12, 5235.0], [1.60439844E12, 7915.0], [1.60439778E12, 6205.0], [1.60439808E12, 12347.0], [1.60439838E12, 5857.0], [1.60439772E12, 5666.0], [1.60439802E12, 7074.0], [1.60439832E12, 5438.0], [1.60439862E12, 12928.0], [1.60439766E12, 3727.0], [1.60439796E12, 8181.0], [1.60439826E12, 5084.0], [1.60439856E12, 7940.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6043979E12, 548.5699998259545], [1.6043982E12, 554.3669999372959], [1.6043985E12, 520.4179979491233], [1.60439784E12, 413.1639998102188], [1.60439814E12, 545.6709998762608], [1.60439844E12, 525.6609993731976], [1.60439778E12, 659.7479997682572], [1.60439808E12, 521.2049997031688], [1.60439838E12, 596.0], [1.60439772E12, 515.3549996197223], [1.60439802E12, 464.3799995660782], [1.60439832E12, 529.6519998502731], [1.60439862E12, 529.0], [1.60439766E12, 158.0], [1.60439796E12, 1009.3839996719361], [1.60439826E12, 502.4549998819828], [1.60439856E12, 505.80899995207784]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6043979E12, 549.2270000696183], [1.6043982E12, 554.6037000250816], [1.6043985E12, 528.1598008203506], [1.60439784E12, 413.88040007591246], [1.60439814E12, 546.0], [1.60439844E12, 528.027100250721], [1.60439778E12, 663.1140004634857], [1.60439808E12, 522.217000079155], [1.60439838E12, 596.0], [1.60439772E12, 516.0], [1.60439802E12, 466.01800017356874], [1.60439832E12, 530.0], [1.60439862E12, 529.0], [1.60439766E12, 158.0], [1.60439796E12, 1010.6224001312256], [1.60439826E12, 502.9005000472069], [1.60439856E12, 505.98990001916883]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6043979E12, 548.9349999129772], [1.6043982E12, 554.4984999686479], [1.6043985E12, 524.7189989745617], [1.60439784E12, 413.5619999051094], [1.60439814E12, 545.9304999381304], [1.60439844E12, 526.9754996865988], [1.60439778E12, 661.1699994206429], [1.60439808E12, 521.8274998515844], [1.60439838E12, 596.0], [1.60439772E12, 516.0], [1.60439802E12, 465.2899997830391], [1.60439832E12, 529.9659999251365], [1.60439862E12, 529.0], [1.60439766E12, 158.0], [1.60439796E12, 1010.071999835968], [1.60439826E12, 502.7024999409914], [1.60439856E12, 505.90949997603894]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.6043979E12, 528.0], [1.6043982E12, 552.0], [1.6043985E12, 505.0], [1.60439784E12, 410.0], [1.60439814E12, 541.0], [1.60439844E12, 521.0], [1.60439778E12, 645.0], [1.60439808E12, 515.0], [1.60439838E12, 594.0], [1.60439772E12, 511.0], [1.60439802E12, 452.0], [1.60439832E12, 526.0], [1.60439862E12, 524.0], [1.60439766E12, 158.0], [1.60439796E12, 1005.0], [1.60439826E12, 495.0], [1.60439856E12, 505.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6043979E12, 2112.5], [1.6043982E12, 2623.5], [1.6043985E12, 1677.0], [1.60439784E12, 3025.0], [1.60439814E12, 895.0], [1.60439844E12, 2876.5], [1.60439778E12, 1822.0], [1.60439808E12, 1128.5], [1.60439838E12, 1582.0], [1.60439772E12, 2015.5], [1.60439802E12, 1364.0], [1.60439832E12, 1973.0], [1.60439862E12, 1255.5], [1.60439766E12, 1334.0], [1.60439796E12, 4007.0], [1.60439826E12, 1167.0], [1.60439856E12, 3665.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60439862E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 498.5, "minX": 1.0, "maxY": 6205.0, "series": [{"data": [[2.0, 4149.5], [8.0, 1504.0], [9.0, 1434.5], [10.0, 1428.0], [11.0, 1197.0], [3.0, 3574.0], [12.0, 1347.5], [13.0, 942.0], [14.0, 884.5], [15.0, 827.0], [4.0, 2999.0], [1.0, 6205.0], [16.0, 1016.0], [17.0, 939.0], [18.0, 851.0], [19.0, 701.5], [5.0, 2535.0], [20.0, 620.0], [21.0, 569.0], [22.0, 549.5], [6.0, 1903.0], [24.0, 498.5], [7.0, 1722.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 24.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 498.5, "minX": 1.0, "maxY": 6202.0, "series": [{"data": [[2.0, 4147.5], [8.0, 1503.0], [9.0, 1434.5], [10.0, 1428.0], [11.0, 1197.0], [3.0, 3572.0], [12.0, 1347.5], [13.0, 942.0], [14.0, 884.5], [15.0, 827.0], [4.0, 2999.0], [1.0, 6202.0], [16.0, 1015.5], [17.0, 938.5], [18.0, 851.0], [19.0, 701.5], [5.0, 2535.0], [20.0, 620.0], [21.0, 569.0], [22.0, 549.5], [6.0, 1903.0], [24.0, 498.5], [7.0, 1722.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 24.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1.1833333333333333, "minX": 1.60439766E12, "maxY": 8.633333333333333, "series": [{"data": [[1.6043979E12, 6.066666666666666], [1.6043982E12, 4.366666666666666], [1.6043985E12, 6.5], [1.60439784E12, 3.3], [1.60439814E12, 8.633333333333333], [1.60439844E12, 3.966666666666667], [1.60439778E12, 5.383333333333334], [1.60439808E12, 6.9], [1.60439838E12, 6.05], [1.60439772E12, 5.3], [1.60439802E12, 6.05], [1.60439832E12, 5.216666666666667], [1.60439862E12, 4.366666666666666], [1.60439766E12, 1.1833333333333333], [1.60439796E12, 2.85], [1.60439826E12, 8.233333333333333], [1.60439856E12, 3.3333333333333335]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60439862E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.9833333333333333, "minX": 1.60439766E12, "maxY": 8.633333333333333, "series": [{"data": [[1.6043979E12, 6.066666666666666], [1.6043982E12, 4.366666666666666], [1.6043985E12, 6.5], [1.60439784E12, 3.3], [1.60439814E12, 8.633333333333333], [1.60439844E12, 3.966666666666667], [1.60439778E12, 5.383333333333334], [1.60439808E12, 6.9], [1.60439838E12, 6.05], [1.60439772E12, 5.3], [1.60439802E12, 6.05], [1.60439832E12, 5.216666666666667], [1.60439862E12, 4.566666666666666], [1.60439766E12, 0.9833333333333333], [1.60439796E12, 2.85], [1.60439826E12, 8.233333333333333], [1.60439856E12, 3.3333333333333335]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60439862E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.9833333333333333, "minX": 1.60439766E12, "maxY": 8.633333333333333, "series": [{"data": [[1.6043979E12, 6.066666666666666], [1.6043982E12, 4.366666666666666], [1.6043985E12, 6.5], [1.60439784E12, 3.3], [1.60439814E12, 8.633333333333333], [1.60439844E12, 3.966666666666667], [1.60439778E12, 5.383333333333334], [1.60439808E12, 6.9], [1.60439838E12, 6.05], [1.60439772E12, 5.3], [1.60439802E12, 6.05], [1.60439832E12, 5.216666666666667], [1.60439862E12, 4.566666666666666], [1.60439766E12, 0.9833333333333333], [1.60439796E12, 2.85], [1.60439826E12, 8.233333333333333], [1.60439856E12, 3.3333333333333335]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60439862E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.9833333333333333, "minX": 1.60439766E12, "maxY": 8.633333333333333, "series": [{"data": [[1.6043979E12, 6.066666666666666], [1.6043982E12, 4.366666666666666], [1.6043985E12, 6.5], [1.60439784E12, 3.3], [1.60439814E12, 8.633333333333333], [1.60439844E12, 3.966666666666667], [1.60439778E12, 5.383333333333334], [1.60439808E12, 6.9], [1.60439838E12, 6.05], [1.60439772E12, 5.3], [1.60439802E12, 6.05], [1.60439832E12, 5.216666666666667], [1.60439862E12, 4.566666666666666], [1.60439766E12, 0.9833333333333333], [1.60439796E12, 2.85], [1.60439826E12, 8.233333333333333], [1.60439856E12, 3.3333333333333335]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60439862E12, "title": "Total Transactions Per Second"}},
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

