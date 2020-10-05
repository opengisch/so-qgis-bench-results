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
        data: {"result": {"minY": 41.0, "minX": 0.0, "maxY": 12418.0, "series": [{"data": [[0.0, 41.0], [0.1, 69.0], [0.2, 73.0], [0.3, 395.0], [0.4, 406.0], [0.5, 413.0], [0.6, 419.0], [0.7, 425.0], [0.8, 429.0], [0.9, 432.0], [1.0, 434.0], [1.1, 435.0], [1.2, 436.0], [1.3, 438.0], [1.4, 439.0], [1.5, 441.0], [1.6, 442.0], [1.7, 444.0], [1.8, 448.0], [1.9, 451.0], [2.0, 455.0], [2.1, 456.0], [2.2, 457.0], [2.3, 459.0], [2.4, 461.0], [2.5, 463.0], [2.6, 464.0], [2.7, 466.0], [2.8, 472.0], [2.9, 480.0], [3.0, 484.0], [3.1, 495.0], [3.2, 500.0], [3.3, 503.0], [3.4, 507.0], [3.5, 510.0], [3.6, 513.0], [3.7, 520.0], [3.8, 524.0], [3.9, 529.0], [4.0, 537.0], [4.1, 545.0], [4.2, 551.0], [4.3, 557.0], [4.4, 567.0], [4.5, 573.0], [4.6, 576.0], [4.7, 582.0], [4.8, 584.0], [4.9, 602.0], [5.0, 620.0], [5.1, 629.0], [5.2, 640.0], [5.3, 645.0], [5.4, 648.0], [5.5, 651.0], [5.6, 659.0], [5.7, 662.0], [5.8, 666.0], [5.9, 669.0], [6.0, 672.0], [6.1, 674.0], [6.2, 678.0], [6.3, 680.0], [6.4, 692.0], [6.5, 696.0], [6.6, 703.0], [6.7, 709.0], [6.8, 719.0], [6.9, 724.0], [7.0, 729.0], [7.1, 731.0], [7.2, 733.0], [7.3, 737.0], [7.4, 743.0], [7.5, 747.0], [7.6, 749.0], [7.7, 755.0], [7.8, 758.0], [7.9, 762.0], [8.0, 765.0], [8.1, 767.0], [8.2, 768.0], [8.3, 772.0], [8.4, 774.0], [8.5, 777.0], [8.6, 778.0], [8.7, 779.0], [8.8, 783.0], [8.9, 787.0], [9.0, 788.0], [9.1, 791.0], [9.2, 793.0], [9.3, 796.0], [9.4, 798.0], [9.5, 801.0], [9.6, 802.0], [9.7, 804.0], [9.8, 806.0], [9.9, 807.0], [10.0, 811.0], [10.1, 814.0], [10.2, 816.0], [10.3, 818.0], [10.4, 818.0], [10.5, 822.0], [10.6, 825.0], [10.7, 827.0], [10.8, 830.0], [10.9, 831.0], [11.0, 835.0], [11.1, 837.0], [11.2, 839.0], [11.3, 842.0], [11.4, 845.0], [11.5, 847.0], [11.6, 849.0], [11.7, 851.0], [11.8, 855.0], [11.9, 856.0], [12.0, 857.0], [12.1, 860.0], [12.2, 863.0], [12.3, 865.0], [12.4, 866.0], [12.5, 869.0], [12.6, 869.0], [12.7, 871.0], [12.8, 874.0], [12.9, 877.0], [13.0, 879.0], [13.1, 880.0], [13.2, 882.0], [13.3, 885.0], [13.4, 886.0], [13.5, 887.0], [13.6, 888.0], [13.7, 890.0], [13.8, 891.0], [13.9, 892.0], [14.0, 894.0], [14.1, 895.0], [14.2, 897.0], [14.3, 901.0], [14.4, 903.0], [14.5, 906.0], [14.6, 910.0], [14.7, 911.0], [14.8, 916.0], [14.9, 918.0], [15.0, 920.0], [15.1, 923.0], [15.2, 925.0], [15.3, 927.0], [15.4, 931.0], [15.5, 932.0], [15.6, 933.0], [15.7, 935.0], [15.8, 936.0], [15.9, 937.0], [16.0, 940.0], [16.1, 941.0], [16.2, 943.0], [16.3, 946.0], [16.4, 949.0], [16.5, 951.0], [16.6, 953.0], [16.7, 956.0], [16.8, 958.0], [16.9, 960.0], [17.0, 963.0], [17.1, 966.0], [17.2, 969.0], [17.3, 972.0], [17.4, 973.0], [17.5, 975.0], [17.6, 976.0], [17.7, 979.0], [17.8, 982.0], [17.9, 983.0], [18.0, 984.0], [18.1, 990.0], [18.2, 993.0], [18.3, 997.0], [18.4, 998.0], [18.5, 1001.0], [18.6, 1004.0], [18.7, 1007.0], [18.8, 1010.0], [18.9, 1012.0], [19.0, 1016.0], [19.1, 1019.0], [19.2, 1021.0], [19.3, 1024.0], [19.4, 1026.0], [19.5, 1027.0], [19.6, 1029.0], [19.7, 1032.0], [19.8, 1035.0], [19.9, 1039.0], [20.0, 1040.0], [20.1, 1042.0], [20.2, 1046.0], [20.3, 1050.0], [20.4, 1051.0], [20.5, 1053.0], [20.6, 1056.0], [20.7, 1059.0], [20.8, 1062.0], [20.9, 1065.0], [21.0, 1068.0], [21.1, 1071.0], [21.2, 1074.0], [21.3, 1081.0], [21.4, 1083.0], [21.5, 1088.0], [21.6, 1091.0], [21.7, 1093.0], [21.8, 1096.0], [21.9, 1097.0], [22.0, 1099.0], [22.1, 1103.0], [22.2, 1108.0], [22.3, 1112.0], [22.4, 1116.0], [22.5, 1120.0], [22.6, 1121.0], [22.7, 1128.0], [22.8, 1129.0], [22.9, 1130.0], [23.0, 1133.0], [23.1, 1134.0], [23.2, 1135.0], [23.3, 1137.0], [23.4, 1138.0], [23.5, 1142.0], [23.6, 1143.0], [23.7, 1145.0], [23.8, 1148.0], [23.9, 1152.0], [24.0, 1156.0], [24.1, 1160.0], [24.2, 1161.0], [24.3, 1168.0], [24.4, 1170.0], [24.5, 1171.0], [24.6, 1172.0], [24.7, 1175.0], [24.8, 1177.0], [24.9, 1178.0], [25.0, 1180.0], [25.1, 1181.0], [25.2, 1183.0], [25.3, 1185.0], [25.4, 1187.0], [25.5, 1188.0], [25.6, 1191.0], [25.7, 1192.0], [25.8, 1196.0], [25.9, 1200.0], [26.0, 1203.0], [26.1, 1205.0], [26.2, 1208.0], [26.3, 1211.0], [26.4, 1217.0], [26.5, 1221.0], [26.6, 1224.0], [26.7, 1228.0], [26.8, 1230.0], [26.9, 1234.0], [27.0, 1236.0], [27.1, 1238.0], [27.2, 1240.0], [27.3, 1245.0], [27.4, 1245.0], [27.5, 1248.0], [27.6, 1250.0], [27.7, 1253.0], [27.8, 1256.0], [27.9, 1262.0], [28.0, 1269.0], [28.1, 1273.0], [28.2, 1275.0], [28.3, 1279.0], [28.4, 1285.0], [28.5, 1287.0], [28.6, 1289.0], [28.7, 1294.0], [28.8, 1297.0], [28.9, 1300.0], [29.0, 1302.0], [29.1, 1306.0], [29.2, 1310.0], [29.3, 1313.0], [29.4, 1316.0], [29.5, 1319.0], [29.6, 1321.0], [29.7, 1323.0], [29.8, 1328.0], [29.9, 1332.0], [30.0, 1336.0], [30.1, 1340.0], [30.2, 1342.0], [30.3, 1347.0], [30.4, 1352.0], [30.5, 1356.0], [30.6, 1359.0], [30.7, 1361.0], [30.8, 1365.0], [30.9, 1368.0], [31.0, 1374.0], [31.1, 1375.0], [31.2, 1381.0], [31.3, 1384.0], [31.4, 1387.0], [31.5, 1391.0], [31.6, 1395.0], [31.7, 1398.0], [31.8, 1400.0], [31.9, 1403.0], [32.0, 1407.0], [32.1, 1411.0], [32.2, 1413.0], [32.3, 1414.0], [32.4, 1420.0], [32.5, 1424.0], [32.6, 1427.0], [32.7, 1432.0], [32.8, 1436.0], [32.9, 1438.0], [33.0, 1441.0], [33.1, 1446.0], [33.2, 1448.0], [33.3, 1451.0], [33.4, 1453.0], [33.5, 1459.0], [33.6, 1461.0], [33.7, 1463.0], [33.8, 1472.0], [33.9, 1478.0], [34.0, 1480.0], [34.1, 1483.0], [34.2, 1486.0], [34.3, 1487.0], [34.4, 1490.0], [34.5, 1492.0], [34.6, 1496.0], [34.7, 1501.0], [34.8, 1503.0], [34.9, 1508.0], [35.0, 1514.0], [35.1, 1517.0], [35.2, 1523.0], [35.3, 1529.0], [35.4, 1533.0], [35.5, 1537.0], [35.6, 1539.0], [35.7, 1545.0], [35.8, 1550.0], [35.9, 1556.0], [36.0, 1558.0], [36.1, 1562.0], [36.2, 1565.0], [36.3, 1568.0], [36.4, 1570.0], [36.5, 1574.0], [36.6, 1576.0], [36.7, 1579.0], [36.8, 1581.0], [36.9, 1583.0], [37.0, 1586.0], [37.1, 1586.0], [37.2, 1588.0], [37.3, 1592.0], [37.4, 1594.0], [37.5, 1597.0], [37.6, 1600.0], [37.7, 1601.0], [37.8, 1604.0], [37.9, 1609.0], [38.0, 1611.0], [38.1, 1615.0], [38.2, 1619.0], [38.3, 1622.0], [38.4, 1630.0], [38.5, 1631.0], [38.6, 1633.0], [38.7, 1636.0], [38.8, 1642.0], [38.9, 1648.0], [39.0, 1651.0], [39.1, 1655.0], [39.2, 1660.0], [39.3, 1663.0], [39.4, 1664.0], [39.5, 1665.0], [39.6, 1669.0], [39.7, 1672.0], [39.8, 1674.0], [39.9, 1677.0], [40.0, 1681.0], [40.1, 1686.0], [40.2, 1697.0], [40.3, 1700.0], [40.4, 1706.0], [40.5, 1707.0], [40.6, 1714.0], [40.7, 1718.0], [40.8, 1721.0], [40.9, 1724.0], [41.0, 1726.0], [41.1, 1732.0], [41.2, 1734.0], [41.3, 1735.0], [41.4, 1737.0], [41.5, 1741.0], [41.6, 1742.0], [41.7, 1745.0], [41.8, 1748.0], [41.9, 1751.0], [42.0, 1757.0], [42.1, 1759.0], [42.2, 1762.0], [42.3, 1767.0], [42.4, 1772.0], [42.5, 1775.0], [42.6, 1777.0], [42.7, 1779.0], [42.8, 1781.0], [42.9, 1786.0], [43.0, 1790.0], [43.1, 1792.0], [43.2, 1795.0], [43.3, 1800.0], [43.4, 1802.0], [43.5, 1804.0], [43.6, 1806.0], [43.7, 1809.0], [43.8, 1812.0], [43.9, 1817.0], [44.0, 1819.0], [44.1, 1820.0], [44.2, 1826.0], [44.3, 1831.0], [44.4, 1835.0], [44.5, 1839.0], [44.6, 1841.0], [44.7, 1842.0], [44.8, 1845.0], [44.9, 1852.0], [45.0, 1856.0], [45.1, 1863.0], [45.2, 1867.0], [45.3, 1872.0], [45.4, 1877.0], [45.5, 1881.0], [45.6, 1885.0], [45.7, 1888.0], [45.8, 1889.0], [45.9, 1892.0], [46.0, 1899.0], [46.1, 1901.0], [46.2, 1903.0], [46.3, 1906.0], [46.4, 1909.0], [46.5, 1911.0], [46.6, 1914.0], [46.7, 1917.0], [46.8, 1918.0], [46.9, 1922.0], [47.0, 1925.0], [47.1, 1928.0], [47.2, 1931.0], [47.3, 1935.0], [47.4, 1938.0], [47.5, 1942.0], [47.6, 1948.0], [47.7, 1955.0], [47.8, 1960.0], [47.9, 1964.0], [48.0, 1970.0], [48.1, 1973.0], [48.2, 1975.0], [48.3, 1977.0], [48.4, 1979.0], [48.5, 1984.0], [48.6, 1991.0], [48.7, 1995.0], [48.8, 1999.0], [48.9, 2005.0], [49.0, 2009.0], [49.1, 2011.0], [49.2, 2014.0], [49.3, 2019.0], [49.4, 2021.0], [49.5, 2022.0], [49.6, 2029.0], [49.7, 2034.0], [49.8, 2039.0], [49.9, 2042.0], [50.0, 2044.0], [50.1, 2049.0], [50.2, 2051.0], [50.3, 2057.0], [50.4, 2063.0], [50.5, 2066.0], [50.6, 2069.0], [50.7, 2073.0], [50.8, 2077.0], [50.9, 2083.0], [51.0, 2086.0], [51.1, 2093.0], [51.2, 2095.0], [51.3, 2098.0], [51.4, 2101.0], [51.5, 2105.0], [51.6, 2108.0], [51.7, 2112.0], [51.8, 2116.0], [51.9, 2120.0], [52.0, 2123.0], [52.1, 2126.0], [52.2, 2129.0], [52.3, 2133.0], [52.4, 2135.0], [52.5, 2135.0], [52.6, 2138.0], [52.7, 2140.0], [52.8, 2144.0], [52.9, 2148.0], [53.0, 2154.0], [53.1, 2160.0], [53.2, 2169.0], [53.3, 2173.0], [53.4, 2180.0], [53.5, 2183.0], [53.6, 2186.0], [53.7, 2193.0], [53.8, 2196.0], [53.9, 2205.0], [54.0, 2207.0], [54.1, 2210.0], [54.2, 2213.0], [54.3, 2216.0], [54.4, 2219.0], [54.5, 2222.0], [54.6, 2226.0], [54.7, 2235.0], [54.8, 2240.0], [54.9, 2243.0], [55.0, 2245.0], [55.1, 2246.0], [55.2, 2251.0], [55.3, 2257.0], [55.4, 2264.0], [55.5, 2266.0], [55.6, 2277.0], [55.7, 2282.0], [55.8, 2285.0], [55.9, 2290.0], [56.0, 2294.0], [56.1, 2298.0], [56.2, 2303.0], [56.3, 2312.0], [56.4, 2313.0], [56.5, 2319.0], [56.6, 2320.0], [56.7, 2325.0], [56.8, 2328.0], [56.9, 2333.0], [57.0, 2337.0], [57.1, 2347.0], [57.2, 2350.0], [57.3, 2354.0], [57.4, 2359.0], [57.5, 2363.0], [57.6, 2369.0], [57.7, 2371.0], [57.8, 2377.0], [57.9, 2382.0], [58.0, 2384.0], [58.1, 2390.0], [58.2, 2401.0], [58.3, 2405.0], [58.4, 2407.0], [58.5, 2413.0], [58.6, 2416.0], [58.7, 2419.0], [58.8, 2423.0], [58.9, 2431.0], [59.0, 2434.0], [59.1, 2436.0], [59.2, 2444.0], [59.3, 2447.0], [59.4, 2448.0], [59.5, 2451.0], [59.6, 2454.0], [59.7, 2457.0], [59.8, 2463.0], [59.9, 2465.0], [60.0, 2471.0], [60.1, 2473.0], [60.2, 2475.0], [60.3, 2480.0], [60.4, 2483.0], [60.5, 2486.0], [60.6, 2491.0], [60.7, 2494.0], [60.8, 2498.0], [60.9, 2504.0], [61.0, 2508.0], [61.1, 2517.0], [61.2, 2520.0], [61.3, 2524.0], [61.4, 2532.0], [61.5, 2539.0], [61.6, 2543.0], [61.7, 2546.0], [61.8, 2553.0], [61.9, 2560.0], [62.0, 2561.0], [62.1, 2565.0], [62.2, 2572.0], [62.3, 2575.0], [62.4, 2579.0], [62.5, 2589.0], [62.6, 2599.0], [62.7, 2603.0], [62.8, 2609.0], [62.9, 2613.0], [63.0, 2622.0], [63.1, 2629.0], [63.2, 2632.0], [63.3, 2637.0], [63.4, 2639.0], [63.5, 2642.0], [63.6, 2644.0], [63.7, 2646.0], [63.8, 2650.0], [63.9, 2654.0], [64.0, 2659.0], [64.1, 2665.0], [64.2, 2670.0], [64.3, 2674.0], [64.4, 2681.0], [64.5, 2690.0], [64.6, 2696.0], [64.7, 2700.0], [64.8, 2711.0], [64.9, 2715.0], [65.0, 2720.0], [65.1, 2723.0], [65.2, 2732.0], [65.3, 2735.0], [65.4, 2741.0], [65.5, 2744.0], [65.6, 2750.0], [65.7, 2757.0], [65.8, 2763.0], [65.9, 2770.0], [66.0, 2775.0], [66.1, 2783.0], [66.2, 2790.0], [66.3, 2798.0], [66.4, 2810.0], [66.5, 2817.0], [66.6, 2820.0], [66.7, 2824.0], [66.8, 2827.0], [66.9, 2831.0], [67.0, 2834.0], [67.1, 2836.0], [67.2, 2838.0], [67.3, 2843.0], [67.4, 2849.0], [67.5, 2852.0], [67.6, 2855.0], [67.7, 2861.0], [67.8, 2865.0], [67.9, 2872.0], [68.0, 2881.0], [68.1, 2890.0], [68.2, 2902.0], [68.3, 2910.0], [68.4, 2919.0], [68.5, 2929.0], [68.6, 2939.0], [68.7, 2951.0], [68.8, 2960.0], [68.9, 2968.0], [69.0, 2971.0], [69.1, 2977.0], [69.2, 2983.0], [69.3, 2990.0], [69.4, 2998.0], [69.5, 3004.0], [69.6, 3008.0], [69.7, 3016.0], [69.8, 3019.0], [69.9, 3026.0], [70.0, 3034.0], [70.1, 3038.0], [70.2, 3045.0], [70.3, 3057.0], [70.4, 3060.0], [70.5, 3065.0], [70.6, 3071.0], [70.7, 3075.0], [70.8, 3082.0], [70.9, 3096.0], [71.0, 3105.0], [71.1, 3109.0], [71.2, 3118.0], [71.3, 3121.0], [71.4, 3129.0], [71.5, 3132.0], [71.6, 3136.0], [71.7, 3140.0], [71.8, 3144.0], [71.9, 3148.0], [72.0, 3151.0], [72.1, 3181.0], [72.2, 3204.0], [72.3, 3208.0], [72.4, 3213.0], [72.5, 3229.0], [72.6, 3235.0], [72.7, 3238.0], [72.8, 3246.0], [72.9, 3256.0], [73.0, 3259.0], [73.1, 3262.0], [73.2, 3267.0], [73.3, 3275.0], [73.4, 3285.0], [73.5, 3292.0], [73.6, 3305.0], [73.7, 3314.0], [73.8, 3317.0], [73.9, 3331.0], [74.0, 3334.0], [74.1, 3343.0], [74.2, 3348.0], [74.3, 3352.0], [74.4, 3363.0], [74.5, 3366.0], [74.6, 3374.0], [74.7, 3378.0], [74.8, 3381.0], [74.9, 3384.0], [75.0, 3387.0], [75.1, 3392.0], [75.2, 3398.0], [75.3, 3405.0], [75.4, 3410.0], [75.5, 3417.0], [75.6, 3427.0], [75.7, 3435.0], [75.8, 3461.0], [75.9, 3477.0], [76.0, 3485.0], [76.1, 3489.0], [76.2, 3496.0], [76.3, 3502.0], [76.4, 3506.0], [76.5, 3516.0], [76.6, 3523.0], [76.7, 3528.0], [76.8, 3534.0], [76.9, 3541.0], [77.0, 3548.0], [77.1, 3551.0], [77.2, 3556.0], [77.3, 3563.0], [77.4, 3570.0], [77.5, 3576.0], [77.6, 3585.0], [77.7, 3595.0], [77.8, 3602.0], [77.9, 3610.0], [78.0, 3626.0], [78.1, 3633.0], [78.2, 3639.0], [78.3, 3647.0], [78.4, 3653.0], [78.5, 3663.0], [78.6, 3672.0], [78.7, 3677.0], [78.8, 3687.0], [78.9, 3695.0], [79.0, 3703.0], [79.1, 3715.0], [79.2, 3733.0], [79.3, 3745.0], [79.4, 3749.0], [79.5, 3761.0], [79.6, 3766.0], [79.7, 3774.0], [79.8, 3782.0], [79.9, 3795.0], [80.0, 3805.0], [80.1, 3814.0], [80.2, 3829.0], [80.3, 3834.0], [80.4, 3838.0], [80.5, 3853.0], [80.6, 3858.0], [80.7, 3867.0], [80.8, 3872.0], [80.9, 3884.0], [81.0, 3898.0], [81.1, 3907.0], [81.2, 3912.0], [81.3, 3914.0], [81.4, 3929.0], [81.5, 3935.0], [81.6, 3951.0], [81.7, 3958.0], [81.8, 3968.0], [81.9, 3986.0], [82.0, 3992.0], [82.1, 4003.0], [82.2, 4020.0], [82.3, 4032.0], [82.4, 4048.0], [82.5, 4056.0], [82.6, 4067.0], [82.7, 4086.0], [82.8, 4096.0], [82.9, 4101.0], [83.0, 4107.0], [83.1, 4116.0], [83.2, 4139.0], [83.3, 4143.0], [83.4, 4154.0], [83.5, 4168.0], [83.6, 4176.0], [83.7, 4184.0], [83.8, 4211.0], [83.9, 4223.0], [84.0, 4230.0], [84.1, 4239.0], [84.2, 4249.0], [84.3, 4259.0], [84.4, 4265.0], [84.5, 4274.0], [84.6, 4282.0], [84.7, 4293.0], [84.8, 4307.0], [84.9, 4327.0], [85.0, 4342.0], [85.1, 4350.0], [85.2, 4356.0], [85.3, 4365.0], [85.4, 4368.0], [85.5, 4374.0], [85.6, 4384.0], [85.7, 4387.0], [85.8, 4399.0], [85.9, 4405.0], [86.0, 4423.0], [86.1, 4441.0], [86.2, 4456.0], [86.3, 4471.0], [86.4, 4477.0], [86.5, 4488.0], [86.6, 4496.0], [86.7, 4506.0], [86.8, 4525.0], [86.9, 4537.0], [87.0, 4543.0], [87.1, 4559.0], [87.2, 4576.0], [87.3, 4582.0], [87.4, 4588.0], [87.5, 4605.0], [87.6, 4615.0], [87.7, 4621.0], [87.8, 4637.0], [87.9, 4663.0], [88.0, 4670.0], [88.1, 4689.0], [88.2, 4703.0], [88.3, 4723.0], [88.4, 4741.0], [88.5, 4751.0], [88.6, 4753.0], [88.7, 4789.0], [88.8, 4796.0], [88.9, 4808.0], [89.0, 4824.0], [89.1, 4835.0], [89.2, 4848.0], [89.3, 4868.0], [89.4, 4890.0], [89.5, 4896.0], [89.6, 4908.0], [89.7, 4920.0], [89.8, 4931.0], [89.9, 4937.0], [90.0, 4956.0], [90.1, 4984.0], [90.2, 4996.0], [90.3, 5008.0], [90.4, 5032.0], [90.5, 5045.0], [90.6, 5056.0], [90.7, 5067.0], [90.8, 5076.0], [90.9, 5095.0], [91.0, 5106.0], [91.1, 5116.0], [91.2, 5132.0], [91.3, 5149.0], [91.4, 5156.0], [91.5, 5170.0], [91.6, 5180.0], [91.7, 5195.0], [91.8, 5222.0], [91.9, 5267.0], [92.0, 5285.0], [92.1, 5328.0], [92.2, 5336.0], [92.3, 5349.0], [92.4, 5374.0], [92.5, 5390.0], [92.6, 5412.0], [92.7, 5444.0], [92.8, 5461.0], [92.9, 5512.0], [93.0, 5528.0], [93.1, 5554.0], [93.2, 5585.0], [93.3, 5606.0], [93.4, 5620.0], [93.5, 5667.0], [93.6, 5683.0], [93.7, 5724.0], [93.8, 5753.0], [93.9, 5772.0], [94.0, 5799.0], [94.1, 5821.0], [94.2, 5852.0], [94.3, 5864.0], [94.4, 5895.0], [94.5, 5916.0], [94.6, 5934.0], [94.7, 5957.0], [94.8, 5988.0], [94.9, 5999.0], [95.0, 6015.0], [95.1, 6042.0], [95.2, 6060.0], [95.3, 6107.0], [95.4, 6136.0], [95.5, 6151.0], [95.6, 6188.0], [95.7, 6214.0], [95.8, 6257.0], [95.9, 6302.0], [96.0, 6380.0], [96.1, 6413.0], [96.2, 6469.0], [96.3, 6500.0], [96.4, 6560.0], [96.5, 6578.0], [96.6, 6616.0], [96.7, 6656.0], [96.8, 6679.0], [96.9, 6690.0], [97.0, 6719.0], [97.1, 6805.0], [97.2, 6832.0], [97.3, 6874.0], [97.4, 6893.0], [97.5, 6976.0], [97.6, 7053.0], [97.7, 7095.0], [97.8, 7146.0], [97.9, 7191.0], [98.0, 7317.0], [98.1, 7362.0], [98.2, 7406.0], [98.3, 7486.0], [98.4, 7533.0], [98.5, 7591.0], [98.6, 7666.0], [98.7, 7745.0], [98.8, 7810.0], [98.9, 7862.0], [99.0, 7946.0], [99.1, 8011.0], [99.2, 8134.0], [99.3, 8639.0], [99.4, 8743.0], [99.5, 9328.0], [99.6, 9632.0], [99.7, 10072.0], [99.8, 10794.0], [99.9, 11452.0], [100.0, 12418.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 252.0, "series": [{"data": [[0.0, 12.0], [300.0, 6.0], [400.0, 150.0], [500.0, 90.0], [600.0, 87.0], [700.0, 153.0], [800.0, 252.0], [900.0, 221.0], [1000.0, 190.0], [1100.0, 203.0], [1200.0, 158.0], [1300.0, 153.0], [1400.0, 154.0], [1500.0, 153.0], [1600.0, 142.0], [1700.0, 157.0], [1800.0, 147.0], [1900.0, 145.0], [2000.0, 134.0], [2100.0, 131.0], [2200.0, 123.0], [2300.0, 107.0], [2400.0, 139.0], [2500.0, 95.0], [2600.0, 108.0], [2700.0, 87.0], [2800.0, 97.0], [2900.0, 66.0], [3000.0, 78.0], [3100.0, 65.0], [3200.0, 75.0], [3300.0, 88.0], [3400.0, 54.0], [3500.0, 78.0], [3600.0, 64.0], [3700.0, 52.0], [3800.0, 59.0], [3900.0, 55.0], [4000.0, 41.0], [4200.0, 52.0], [4100.0, 48.0], [4300.0, 55.0], [4600.0, 38.0], [4500.0, 44.0], [4400.0, 43.0], [4700.0, 34.0], [4800.0, 38.0], [5100.0, 41.0], [5000.0, 35.0], [4900.0, 38.0], [5300.0, 24.0], [5200.0, 18.0], [5600.0, 20.0], [5500.0, 22.0], [5400.0, 19.0], [5700.0, 19.0], [5800.0, 21.0], [6100.0, 18.0], [6000.0, 20.0], [5900.0, 26.0], [6300.0, 10.0], [6200.0, 13.0], [6500.0, 15.0], [6600.0, 19.0], [6400.0, 11.0], [6900.0, 9.0], [6800.0, 16.0], [6700.0, 9.0], [7100.0, 10.0], [7000.0, 8.0], [7400.0, 9.0], [7200.0, 3.0], [7300.0, 11.0], [7500.0, 8.0], [7600.0, 7.0], [7900.0, 7.0], [7700.0, 8.0], [7800.0, 9.0], [8100.0, 4.0], [8000.0, 4.0], [8200.0, 1.0], [8700.0, 4.0], [8400.0, 1.0], [8600.0, 3.0], [9000.0, 1.0], [8800.0, 3.0], [9300.0, 2.0], [9500.0, 2.0], [9600.0, 2.0], [9400.0, 1.0], [9700.0, 1.0], [10000.0, 2.0], [9900.0, 2.0], [10700.0, 2.0], [10400.0, 1.0], [10600.0, 1.0], [10500.0, 1.0], [11100.0, 1.0], [10900.0, 1.0], [11400.0, 3.0], [11600.0, 1.0], [11900.0, 2.0], [11800.0, 1.0], [12400.0, 1.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 12400.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 169.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 3443.0, "series": [{"data": [[0.0, 169.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1660.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 3443.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 38.30065359477126, "minX": 1.60190532E12, "maxY": 40.0, "series": [{"data": [[1.6019055E12, 40.0], [1.60190562E12, 40.0], [1.60190544E12, 40.0], [1.60190556E12, 40.0], [1.60190532E12, 40.0], [1.60190538E12, 40.0], [1.60190568E12, 38.30065359477126]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60190568E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 1820.0, "minX": 1.0, "maxY": 11452.0, "series": [{"data": [[33.0, 4477.0], [32.0, 4179.0], [2.0, 10544.0], [35.0, 1820.0], [34.0, 2025.0], [37.0, 2593.0], [36.0, 2251.0], [39.0, 2326.0], [38.0, 4489.0], [40.0, 2497.6686413147304], [3.0, 10794.0], [4.0, 9906.0], [5.0, 9748.0], [6.0, 8818.0], [7.0, 8894.0], [8.0, 8740.0], [9.0, 7749.0], [10.0, 7737.0], [11.0, 7578.0], [12.0, 6884.0], [13.0, 6652.0], [14.0, 6497.0], [15.0, 5988.0], [16.0, 5683.0], [1.0, 11452.0], [17.0, 5799.0], [18.0, 5150.0], [19.0, 4593.0], [20.0, 4824.0], [21.0, 4556.0], [22.0, 3795.0], [23.0, 3241.0], [24.0, 3911.0], [25.0, 4097.0], [26.0, 4276.0], [27.0, 2487.0], [28.0, 2622.0], [29.0, 4154.0], [30.0, 4162.0], [31.0, 2193.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[39.85204855842187, 2520.4825493171425]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 40.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 277.26666666666665, "minX": 1.60190532E12, "maxY": 1076267.3666666667, "series": [{"data": [[1.6019055E12, 754218.2], [1.60190562E12, 1076267.3666666667], [1.60190544E12, 1013224.2666666667], [1.60190556E12, 525226.8], [1.60190532E12, 16826.533333333333], [1.60190538E12, 457901.7833333333], [1.60190568E12, 447820.1666666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6019055E12, 10969.6], [1.60190562E12, 8550.9], [1.60190544E12, 6386.7], [1.60190556E12, 9683.4], [1.60190532E12, 277.26666666666665], [1.60190538E12, 5668.016666666666], [1.60190568E12, 4043.6666666666665]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60190568E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 1181.3142857142857, "minX": 1.60190532E12, "maxY": 3542.561456752656, "series": [{"data": [[1.6019055E12, 1827.7165653495433], [1.60190562E12, 2324.9898682877392], [1.60190544E12, 3377.0218878248975], [1.60190556E12, 2209.2267281105997], [1.60190532E12, 1181.3142857142857], [1.60190538E12, 3542.561456752656], [1.60190568E12, 2933.4117647058806]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60190568E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 1180.942857142857, "minX": 1.60190532E12, "maxY": 3542.1153262518974, "series": [{"data": [[1.6019055E12, 1827.4551671732531], [1.60190562E12, 2324.4701114488344], [1.60190544E12, 3376.3119015047896], [1.60190556E12, 2208.9963133640586], [1.60190532E12, 1180.942857142857], [1.60190538E12, 3542.1153262518974], [1.60190568E12, 2932.9520697167754]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60190568E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.015174506828528087, "minX": 1.60190532E12, "maxY": 19.285714285714285, "series": [{"data": [[1.6019055E12, 0.032674772036474196], [1.60190562E12, 0.04154002026342452], [1.60190544E12, 0.05471956224350207], [1.60190556E12, 0.040552995391705066], [1.60190532E12, 19.285714285714285], [1.60190538E12, 0.015174506828528087], [1.60190568E12, 0.10457516339869266]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60190568E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 41.0, "minX": 1.60190532E12, "maxY": 12418.0, "series": [{"data": [[1.6019055E12, 12418.0], [1.60190562E12, 7533.0], [1.60190544E12, 11411.0], [1.60190556E12, 6386.0], [1.60190532E12, 1981.0], [1.60190538E12, 8253.0], [1.60190568E12, 11452.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6019055E12, 422.8529996860027], [1.60190562E12, 481.5679990577698], [1.60190544E12, 433.7639994764328], [1.60190556E12, 435.3219992232323], [1.60190532E12, 774.0], [1.60190538E12, 68.87999968528747], [1.60190568E12, 432.13999989032743]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6019055E12, 425.0766002511978], [1.60190562E12, 482.78120009422304], [1.60190544E12, 435.4936001396179], [1.60190556E12, 440.5084006214142], [1.60190532E12, 774.0], [1.60190538E12, 69.53400006294251], [1.60190568E12, 432.554000043869]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6019055E12, 424.0229996860027], [1.60190562E12, 482.3859998822212], [1.60190544E12, 434.8619997382164], [1.60190556E12, 437.9019992232323], [1.60190532E12, 774.0], [1.60190538E12, 69.26999992132187], [1.60190568E12, 432.3699999451637]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.6019055E12, 402.0], [1.60190562E12, 450.0], [1.60190544E12, 371.0], [1.60190556E12, 395.0], [1.60190532E12, 774.0], [1.60190538E12, 41.0], [1.60190568E12, 429.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6019055E12, 1271.0], [1.60190562E12, 2022.0], [1.60190544E12, 2657.0], [1.60190556E12, 1852.0], [1.60190532E12, 1148.0], [1.60190538E12, 3249.0], [1.60190568E12, 2479.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60190568E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 549.0, "minX": 1.0, "maxY": 11452.0, "series": [{"data": [[2.0, 4987.0], [33.0, 1562.0], [34.0, 1447.5], [35.0, 1266.0], [36.0, 1284.5], [39.0, 956.0], [38.0, 1007.5], [41.0, 993.0], [40.0, 814.0], [43.0, 1153.0], [42.0, 941.0], [44.0, 902.0], [3.0, 5779.0], [48.0, 821.5], [49.0, 980.0], [56.0, 980.0], [57.0, 756.0], [4.0, 5077.0], [65.0, 549.0], [5.0, 4356.0], [6.0, 4801.0], [7.0, 4043.0], [8.0, 4081.0], [9.0, 3121.0], [10.0, 3438.0], [11.0, 2992.5], [12.0, 3924.5], [13.0, 2502.0], [14.0, 2907.0], [15.0, 2532.0], [16.0, 2353.5], [1.0, 11452.0], [17.0, 3267.0], [18.0, 2348.5], [19.0, 2298.5], [20.0, 2351.5], [21.0, 2337.5], [22.0, 1520.0], [23.0, 2287.0], [24.0, 1837.5], [25.0, 1461.0], [27.0, 2009.0], [28.0, 2463.5], [29.0, 1406.0], [30.0, 1830.5], [31.0, 1187.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 65.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 549.0, "minX": 1.0, "maxY": 11452.0, "series": [{"data": [[2.0, 4987.0], [33.0, 1562.0], [34.0, 1447.5], [35.0, 1266.0], [36.0, 1284.5], [39.0, 955.5], [38.0, 1007.5], [41.0, 993.0], [40.0, 813.5], [43.0, 1153.0], [42.0, 941.0], [44.0, 902.0], [3.0, 5778.5], [48.0, 821.5], [49.0, 979.0], [56.0, 980.0], [57.0, 756.0], [4.0, 5072.0], [65.0, 549.0], [5.0, 4356.0], [6.0, 4801.0], [7.0, 4042.0], [8.0, 4079.0], [9.0, 3120.0], [10.0, 3438.0], [11.0, 2992.5], [12.0, 3923.5], [13.0, 2502.0], [14.0, 2906.5], [15.0, 2532.0], [16.0, 2353.0], [1.0, 11452.0], [17.0, 3267.0], [18.0, 2348.0], [19.0, 2298.5], [20.0, 2351.5], [21.0, 2336.5], [22.0, 1520.0], [23.0, 2286.5], [24.0, 1837.5], [25.0, 1461.0], [27.0, 2009.0], [28.0, 2463.5], [29.0, 1406.0], [30.0, 1830.5], [31.0, 1187.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 65.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1.25, "minX": 1.60190532E12, "maxY": 21.933333333333334, "series": [{"data": [[1.6019055E12, 21.933333333333334], [1.60190562E12, 16.45], [1.60190544E12, 12.183333333333334], [1.60190556E12, 18.083333333333332], [1.60190532E12, 1.25], [1.60190538E12, 10.983333333333333], [1.60190568E12, 6.983333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60190568E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.5833333333333334, "minX": 1.60190532E12, "maxY": 21.933333333333334, "series": [{"data": [[1.6019055E12, 21.933333333333334], [1.60190562E12, 16.45], [1.60190544E12, 12.183333333333334], [1.60190556E12, 18.083333333333332], [1.60190532E12, 0.5833333333333334], [1.60190538E12, 10.983333333333333], [1.60190568E12, 7.65]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60190568E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.5833333333333334, "minX": 1.60190532E12, "maxY": 21.933333333333334, "series": [{"data": [[1.6019055E12, 21.933333333333334], [1.60190562E12, 16.45], [1.60190544E12, 12.183333333333334], [1.60190556E12, 18.083333333333332], [1.60190532E12, 0.5833333333333334], [1.60190538E12, 10.983333333333333], [1.60190568E12, 7.65]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60190568E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.5833333333333334, "minX": 1.60190532E12, "maxY": 21.933333333333334, "series": [{"data": [[1.6019055E12, 21.933333333333334], [1.60190562E12, 16.45], [1.60190544E12, 12.183333333333334], [1.60190556E12, 18.083333333333332], [1.60190532E12, 0.5833333333333334], [1.60190538E12, 10.983333333333333], [1.60190568E12, 7.65]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60190568E12, "title": "Total Transactions Per Second"}},
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

