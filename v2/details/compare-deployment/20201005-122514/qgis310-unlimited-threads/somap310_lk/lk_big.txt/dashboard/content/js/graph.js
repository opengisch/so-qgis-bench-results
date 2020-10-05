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
        data: {"result": {"minY": 123.0, "minX": 0.0, "maxY": 15075.0, "series": [{"data": [[0.0, 123.0], [0.1, 144.0], [0.2, 153.0], [0.3, 215.0], [0.4, 305.0], [0.5, 338.0], [0.6, 354.0], [0.7, 375.0], [0.8, 387.0], [0.9, 404.0], [1.0, 429.0], [1.1, 432.0], [1.2, 435.0], [1.3, 438.0], [1.4, 438.0], [1.5, 440.0], [1.6, 442.0], [1.7, 444.0], [1.8, 447.0], [1.9, 448.0], [2.0, 448.0], [2.1, 450.0], [2.2, 451.0], [2.3, 452.0], [2.4, 452.0], [2.5, 453.0], [2.6, 454.0], [2.7, 455.0], [2.8, 456.0], [2.9, 456.0], [3.0, 457.0], [3.1, 458.0], [3.2, 459.0], [3.3, 459.0], [3.4, 461.0], [3.5, 463.0], [3.6, 465.0], [3.7, 467.0], [3.8, 468.0], [3.9, 470.0], [4.0, 474.0], [4.1, 477.0], [4.2, 486.0], [4.3, 495.0], [4.4, 503.0], [4.5, 509.0], [4.6, 516.0], [4.7, 522.0], [4.8, 527.0], [4.9, 530.0], [5.0, 533.0], [5.1, 539.0], [5.2, 547.0], [5.3, 550.0], [5.4, 553.0], [5.5, 561.0], [5.6, 570.0], [5.7, 591.0], [5.8, 594.0], [5.9, 599.0], [6.0, 602.0], [6.1, 605.0], [6.2, 611.0], [6.3, 617.0], [6.4, 620.0], [6.5, 624.0], [6.6, 627.0], [6.7, 630.0], [6.8, 636.0], [6.9, 646.0], [7.0, 650.0], [7.1, 652.0], [7.2, 655.0], [7.3, 658.0], [7.4, 661.0], [7.5, 667.0], [7.6, 670.0], [7.7, 676.0], [7.8, 681.0], [7.9, 686.0], [8.0, 691.0], [8.1, 693.0], [8.2, 698.0], [8.3, 703.0], [8.4, 708.0], [8.5, 717.0], [8.6, 720.0], [8.7, 722.0], [8.8, 724.0], [8.9, 729.0], [9.0, 730.0], [9.1, 732.0], [9.2, 734.0], [9.3, 736.0], [9.4, 738.0], [9.5, 740.0], [9.6, 743.0], [9.7, 745.0], [9.8, 747.0], [9.9, 750.0], [10.0, 751.0], [10.1, 752.0], [10.2, 752.0], [10.3, 755.0], [10.4, 756.0], [10.5, 758.0], [10.6, 762.0], [10.7, 763.0], [10.8, 766.0], [10.9, 773.0], [11.0, 775.0], [11.1, 776.0], [11.2, 779.0], [11.3, 781.0], [11.4, 783.0], [11.5, 784.0], [11.6, 786.0], [11.7, 789.0], [11.8, 791.0], [11.9, 793.0], [12.0, 795.0], [12.1, 798.0], [12.2, 799.0], [12.3, 800.0], [12.4, 801.0], [12.5, 803.0], [12.6, 803.0], [12.7, 805.0], [12.8, 806.0], [12.9, 809.0], [13.0, 809.0], [13.1, 811.0], [13.2, 813.0], [13.3, 814.0], [13.4, 815.0], [13.5, 816.0], [13.6, 817.0], [13.7, 819.0], [13.8, 820.0], [13.9, 823.0], [14.0, 826.0], [14.1, 827.0], [14.2, 828.0], [14.3, 829.0], [14.4, 830.0], [14.5, 831.0], [14.6, 831.0], [14.7, 834.0], [14.8, 835.0], [14.9, 836.0], [15.0, 836.0], [15.1, 838.0], [15.2, 839.0], [15.3, 840.0], [15.4, 842.0], [15.5, 845.0], [15.6, 848.0], [15.7, 849.0], [15.8, 850.0], [15.9, 850.0], [16.0, 851.0], [16.1, 852.0], [16.2, 854.0], [16.3, 856.0], [16.4, 857.0], [16.5, 861.0], [16.6, 864.0], [16.7, 864.0], [16.8, 866.0], [16.9, 867.0], [17.0, 869.0], [17.1, 872.0], [17.2, 873.0], [17.3, 875.0], [17.4, 877.0], [17.5, 879.0], [17.6, 882.0], [17.7, 887.0], [17.8, 888.0], [17.9, 890.0], [18.0, 894.0], [18.1, 897.0], [18.2, 901.0], [18.3, 906.0], [18.4, 910.0], [18.5, 915.0], [18.6, 917.0], [18.7, 921.0], [18.8, 926.0], [18.9, 930.0], [19.0, 932.0], [19.1, 936.0], [19.2, 938.0], [19.3, 939.0], [19.4, 941.0], [19.5, 944.0], [19.6, 945.0], [19.7, 948.0], [19.8, 950.0], [19.9, 953.0], [20.0, 954.0], [20.1, 955.0], [20.2, 956.0], [20.3, 959.0], [20.4, 961.0], [20.5, 962.0], [20.6, 965.0], [20.7, 967.0], [20.8, 970.0], [20.9, 972.0], [21.0, 973.0], [21.1, 975.0], [21.2, 977.0], [21.3, 978.0], [21.4, 981.0], [21.5, 982.0], [21.6, 984.0], [21.7, 986.0], [21.8, 988.0], [21.9, 989.0], [22.0, 992.0], [22.1, 997.0], [22.2, 1001.0], [22.3, 1005.0], [22.4, 1008.0], [22.5, 1010.0], [22.6, 1013.0], [22.7, 1015.0], [22.8, 1019.0], [22.9, 1022.0], [23.0, 1026.0], [23.1, 1029.0], [23.2, 1031.0], [23.3, 1034.0], [23.4, 1038.0], [23.5, 1039.0], [23.6, 1042.0], [23.7, 1045.0], [23.8, 1046.0], [23.9, 1053.0], [24.0, 1057.0], [24.1, 1059.0], [24.2, 1065.0], [24.3, 1069.0], [24.4, 1072.0], [24.5, 1074.0], [24.6, 1075.0], [24.7, 1079.0], [24.8, 1081.0], [24.9, 1083.0], [25.0, 1084.0], [25.1, 1085.0], [25.2, 1088.0], [25.3, 1093.0], [25.4, 1095.0], [25.5, 1095.0], [25.6, 1096.0], [25.7, 1098.0], [25.8, 1102.0], [25.9, 1107.0], [26.0, 1111.0], [26.1, 1113.0], [26.2, 1115.0], [26.3, 1116.0], [26.4, 1118.0], [26.5, 1119.0], [26.6, 1121.0], [26.7, 1126.0], [26.8, 1127.0], [26.9, 1130.0], [27.0, 1132.0], [27.1, 1133.0], [27.2, 1137.0], [27.3, 1139.0], [27.4, 1142.0], [27.5, 1145.0], [27.6, 1147.0], [27.7, 1150.0], [27.8, 1152.0], [27.9, 1155.0], [28.0, 1162.0], [28.1, 1164.0], [28.2, 1166.0], [28.3, 1169.0], [28.4, 1173.0], [28.5, 1181.0], [28.6, 1188.0], [28.7, 1191.0], [28.8, 1194.0], [28.9, 1198.0], [29.0, 1201.0], [29.1, 1203.0], [29.2, 1209.0], [29.3, 1211.0], [29.4, 1213.0], [29.5, 1216.0], [29.6, 1222.0], [29.7, 1224.0], [29.8, 1226.0], [29.9, 1228.0], [30.0, 1231.0], [30.1, 1233.0], [30.2, 1236.0], [30.3, 1239.0], [30.4, 1242.0], [30.5, 1244.0], [30.6, 1247.0], [30.7, 1249.0], [30.8, 1250.0], [30.9, 1251.0], [31.0, 1252.0], [31.1, 1255.0], [31.2, 1256.0], [31.3, 1257.0], [31.4, 1259.0], [31.5, 1262.0], [31.6, 1263.0], [31.7, 1268.0], [31.8, 1269.0], [31.9, 1270.0], [32.0, 1272.0], [32.1, 1275.0], [32.2, 1278.0], [32.3, 1279.0], [32.4, 1282.0], [32.5, 1284.0], [32.6, 1285.0], [32.7, 1287.0], [32.8, 1290.0], [32.9, 1292.0], [33.0, 1295.0], [33.1, 1299.0], [33.2, 1301.0], [33.3, 1303.0], [33.4, 1306.0], [33.5, 1309.0], [33.6, 1311.0], [33.7, 1315.0], [33.8, 1317.0], [33.9, 1320.0], [34.0, 1324.0], [34.1, 1325.0], [34.2, 1328.0], [34.3, 1332.0], [34.4, 1334.0], [34.5, 1336.0], [34.6, 1343.0], [34.7, 1347.0], [34.8, 1348.0], [34.9, 1351.0], [35.0, 1354.0], [35.1, 1361.0], [35.2, 1366.0], [35.3, 1371.0], [35.4, 1375.0], [35.5, 1378.0], [35.6, 1380.0], [35.7, 1385.0], [35.8, 1389.0], [35.9, 1394.0], [36.0, 1398.0], [36.1, 1402.0], [36.2, 1406.0], [36.3, 1410.0], [36.4, 1414.0], [36.5, 1417.0], [36.6, 1419.0], [36.7, 1426.0], [36.8, 1429.0], [36.9, 1431.0], [37.0, 1432.0], [37.1, 1435.0], [37.2, 1440.0], [37.3, 1444.0], [37.4, 1446.0], [37.5, 1448.0], [37.6, 1450.0], [37.7, 1454.0], [37.8, 1457.0], [37.9, 1462.0], [38.0, 1467.0], [38.1, 1469.0], [38.2, 1472.0], [38.3, 1476.0], [38.4, 1478.0], [38.5, 1481.0], [38.6, 1487.0], [38.7, 1489.0], [38.8, 1493.0], [38.9, 1495.0], [39.0, 1499.0], [39.1, 1505.0], [39.2, 1509.0], [39.3, 1514.0], [39.4, 1518.0], [39.5, 1520.0], [39.6, 1524.0], [39.7, 1527.0], [39.8, 1531.0], [39.9, 1534.0], [40.0, 1537.0], [40.1, 1544.0], [40.2, 1548.0], [40.3, 1549.0], [40.4, 1552.0], [40.5, 1560.0], [40.6, 1566.0], [40.7, 1568.0], [40.8, 1570.0], [40.9, 1575.0], [41.0, 1578.0], [41.1, 1580.0], [41.2, 1581.0], [41.3, 1584.0], [41.4, 1585.0], [41.5, 1591.0], [41.6, 1597.0], [41.7, 1601.0], [41.8, 1608.0], [41.9, 1609.0], [42.0, 1614.0], [42.1, 1617.0], [42.2, 1619.0], [42.3, 1623.0], [42.4, 1625.0], [42.5, 1630.0], [42.6, 1634.0], [42.7, 1637.0], [42.8, 1641.0], [42.9, 1644.0], [43.0, 1648.0], [43.1, 1657.0], [43.2, 1659.0], [43.3, 1661.0], [43.4, 1663.0], [43.5, 1667.0], [43.6, 1672.0], [43.7, 1676.0], [43.8, 1680.0], [43.9, 1682.0], [44.0, 1685.0], [44.1, 1686.0], [44.2, 1691.0], [44.3, 1693.0], [44.4, 1695.0], [44.5, 1699.0], [44.6, 1701.0], [44.7, 1703.0], [44.8, 1706.0], [44.9, 1708.0], [45.0, 1710.0], [45.1, 1711.0], [45.2, 1715.0], [45.3, 1719.0], [45.4, 1722.0], [45.5, 1724.0], [45.6, 1731.0], [45.7, 1733.0], [45.8, 1739.0], [45.9, 1743.0], [46.0, 1745.0], [46.1, 1750.0], [46.2, 1754.0], [46.3, 1756.0], [46.4, 1759.0], [46.5, 1763.0], [46.6, 1766.0], [46.7, 1770.0], [46.8, 1773.0], [46.9, 1780.0], [47.0, 1784.0], [47.1, 1786.0], [47.2, 1792.0], [47.3, 1797.0], [47.4, 1799.0], [47.5, 1805.0], [47.6, 1811.0], [47.7, 1815.0], [47.8, 1820.0], [47.9, 1821.0], [48.0, 1825.0], [48.1, 1828.0], [48.2, 1834.0], [48.3, 1837.0], [48.4, 1843.0], [48.5, 1847.0], [48.6, 1853.0], [48.7, 1855.0], [48.8, 1858.0], [48.9, 1863.0], [49.0, 1867.0], [49.1, 1872.0], [49.2, 1875.0], [49.3, 1879.0], [49.4, 1881.0], [49.5, 1883.0], [49.6, 1887.0], [49.7, 1889.0], [49.8, 1891.0], [49.9, 1895.0], [50.0, 1897.0], [50.1, 1901.0], [50.2, 1904.0], [50.3, 1906.0], [50.4, 1909.0], [50.5, 1914.0], [50.6, 1920.0], [50.7, 1925.0], [50.8, 1931.0], [50.9, 1933.0], [51.0, 1934.0], [51.1, 1936.0], [51.2, 1940.0], [51.3, 1942.0], [51.4, 1946.0], [51.5, 1953.0], [51.6, 1960.0], [51.7, 1963.0], [51.8, 1967.0], [51.9, 1973.0], [52.0, 1979.0], [52.1, 1981.0], [52.2, 1984.0], [52.3, 1986.0], [52.4, 1991.0], [52.5, 1995.0], [52.6, 2000.0], [52.7, 2004.0], [52.8, 2008.0], [52.9, 2013.0], [53.0, 2019.0], [53.1, 2021.0], [53.2, 2027.0], [53.3, 2027.0], [53.4, 2032.0], [53.5, 2033.0], [53.6, 2038.0], [53.7, 2043.0], [53.8, 2049.0], [53.9, 2051.0], [54.0, 2055.0], [54.1, 2059.0], [54.2, 2061.0], [54.3, 2063.0], [54.4, 2066.0], [54.5, 2070.0], [54.6, 2076.0], [54.7, 2078.0], [54.8, 2082.0], [54.9, 2087.0], [55.0, 2091.0], [55.1, 2097.0], [55.2, 2102.0], [55.3, 2107.0], [55.4, 2120.0], [55.5, 2124.0], [55.6, 2129.0], [55.7, 2133.0], [55.8, 2135.0], [55.9, 2139.0], [56.0, 2142.0], [56.1, 2144.0], [56.2, 2146.0], [56.3, 2152.0], [56.4, 2153.0], [56.5, 2157.0], [56.6, 2161.0], [56.7, 2164.0], [56.8, 2170.0], [56.9, 2172.0], [57.0, 2175.0], [57.1, 2181.0], [57.2, 2190.0], [57.3, 2200.0], [57.4, 2205.0], [57.5, 2213.0], [57.6, 2214.0], [57.7, 2216.0], [57.8, 2218.0], [57.9, 2222.0], [58.0, 2224.0], [58.1, 2233.0], [58.2, 2237.0], [58.3, 2240.0], [58.4, 2243.0], [58.5, 2251.0], [58.6, 2256.0], [58.7, 2262.0], [58.8, 2267.0], [58.9, 2272.0], [59.0, 2277.0], [59.1, 2282.0], [59.2, 2285.0], [59.3, 2291.0], [59.4, 2295.0], [59.5, 2301.0], [59.6, 2304.0], [59.7, 2307.0], [59.8, 2319.0], [59.9, 2324.0], [60.0, 2332.0], [60.1, 2339.0], [60.2, 2341.0], [60.3, 2351.0], [60.4, 2353.0], [60.5, 2356.0], [60.6, 2363.0], [60.7, 2365.0], [60.8, 2369.0], [60.9, 2372.0], [61.0, 2376.0], [61.1, 2381.0], [61.2, 2385.0], [61.3, 2389.0], [61.4, 2393.0], [61.5, 2399.0], [61.6, 2401.0], [61.7, 2405.0], [61.8, 2409.0], [61.9, 2413.0], [62.0, 2422.0], [62.1, 2422.0], [62.2, 2428.0], [62.3, 2433.0], [62.4, 2442.0], [62.5, 2449.0], [62.6, 2457.0], [62.7, 2462.0], [62.8, 2464.0], [62.9, 2469.0], [63.0, 2475.0], [63.1, 2480.0], [63.2, 2484.0], [63.3, 2499.0], [63.4, 2507.0], [63.5, 2513.0], [63.6, 2516.0], [63.7, 2521.0], [63.8, 2523.0], [63.9, 2532.0], [64.0, 2535.0], [64.1, 2543.0], [64.2, 2546.0], [64.3, 2548.0], [64.4, 2550.0], [64.5, 2554.0], [64.6, 2558.0], [64.7, 2564.0], [64.8, 2569.0], [64.9, 2577.0], [65.0, 2582.0], [65.1, 2589.0], [65.2, 2592.0], [65.3, 2599.0], [65.4, 2604.0], [65.5, 2607.0], [65.6, 2611.0], [65.7, 2621.0], [65.8, 2625.0], [65.9, 2633.0], [66.0, 2637.0], [66.1, 2640.0], [66.2, 2648.0], [66.3, 2657.0], [66.4, 2663.0], [66.5, 2670.0], [66.6, 2674.0], [66.7, 2678.0], [66.8, 2687.0], [66.9, 2694.0], [67.0, 2697.0], [67.1, 2700.0], [67.2, 2703.0], [67.3, 2712.0], [67.4, 2714.0], [67.5, 2718.0], [67.6, 2720.0], [67.7, 2723.0], [67.8, 2727.0], [67.9, 2731.0], [68.0, 2739.0], [68.1, 2742.0], [68.2, 2747.0], [68.3, 2751.0], [68.4, 2757.0], [68.5, 2765.0], [68.6, 2770.0], [68.7, 2775.0], [68.8, 2781.0], [68.9, 2789.0], [69.0, 2794.0], [69.1, 2811.0], [69.2, 2819.0], [69.3, 2823.0], [69.4, 2829.0], [69.5, 2840.0], [69.6, 2843.0], [69.7, 2848.0], [69.8, 2854.0], [69.9, 2864.0], [70.0, 2871.0], [70.1, 2877.0], [70.2, 2879.0], [70.3, 2891.0], [70.4, 2894.0], [70.5, 2903.0], [70.6, 2910.0], [70.7, 2914.0], [70.8, 2915.0], [70.9, 2919.0], [71.0, 2926.0], [71.1, 2930.0], [71.2, 2938.0], [71.3, 2944.0], [71.4, 2948.0], [71.5, 2955.0], [71.6, 2959.0], [71.7, 2965.0], [71.8, 2969.0], [71.9, 2971.0], [72.0, 2980.0], [72.1, 2985.0], [72.2, 2993.0], [72.3, 2997.0], [72.4, 3001.0], [72.5, 3012.0], [72.6, 3016.0], [72.7, 3026.0], [72.8, 3037.0], [72.9, 3049.0], [73.0, 3061.0], [73.1, 3067.0], [73.2, 3078.0], [73.3, 3084.0], [73.4, 3087.0], [73.5, 3094.0], [73.6, 3101.0], [73.7, 3108.0], [73.8, 3120.0], [73.9, 3132.0], [74.0, 3135.0], [74.1, 3137.0], [74.2, 3141.0], [74.3, 3146.0], [74.4, 3153.0], [74.5, 3161.0], [74.6, 3169.0], [74.7, 3177.0], [74.8, 3180.0], [74.9, 3184.0], [75.0, 3188.0], [75.1, 3196.0], [75.2, 3204.0], [75.3, 3210.0], [75.4, 3221.0], [75.5, 3223.0], [75.6, 3226.0], [75.7, 3242.0], [75.8, 3249.0], [75.9, 3254.0], [76.0, 3262.0], [76.1, 3270.0], [76.2, 3280.0], [76.3, 3287.0], [76.4, 3293.0], [76.5, 3297.0], [76.6, 3301.0], [76.7, 3306.0], [76.8, 3310.0], [76.9, 3318.0], [77.0, 3323.0], [77.1, 3333.0], [77.2, 3341.0], [77.3, 3345.0], [77.4, 3352.0], [77.5, 3358.0], [77.6, 3365.0], [77.7, 3374.0], [77.8, 3381.0], [77.9, 3388.0], [78.0, 3405.0], [78.1, 3414.0], [78.2, 3418.0], [78.3, 3421.0], [78.4, 3426.0], [78.5, 3432.0], [78.6, 3438.0], [78.7, 3440.0], [78.8, 3445.0], [78.9, 3456.0], [79.0, 3460.0], [79.1, 3467.0], [79.2, 3476.0], [79.3, 3483.0], [79.4, 3496.0], [79.5, 3504.0], [79.6, 3513.0], [79.7, 3525.0], [79.8, 3536.0], [79.9, 3544.0], [80.0, 3558.0], [80.1, 3566.0], [80.2, 3579.0], [80.3, 3583.0], [80.4, 3593.0], [80.5, 3602.0], [80.6, 3609.0], [80.7, 3621.0], [80.8, 3637.0], [80.9, 3647.0], [81.0, 3655.0], [81.1, 3668.0], [81.2, 3672.0], [81.3, 3684.0], [81.4, 3704.0], [81.5, 3716.0], [81.6, 3722.0], [81.7, 3729.0], [81.8, 3741.0], [81.9, 3746.0], [82.0, 3760.0], [82.1, 3770.0], [82.2, 3779.0], [82.3, 3797.0], [82.4, 3807.0], [82.5, 3814.0], [82.6, 3827.0], [82.7, 3834.0], [82.8, 3853.0], [82.9, 3862.0], [83.0, 3867.0], [83.1, 3877.0], [83.2, 3885.0], [83.3, 3894.0], [83.4, 3901.0], [83.5, 3908.0], [83.6, 3912.0], [83.7, 3931.0], [83.8, 3939.0], [83.9, 3955.0], [84.0, 3966.0], [84.1, 3970.0], [84.2, 3974.0], [84.3, 3988.0], [84.4, 3997.0], [84.5, 4001.0], [84.6, 4012.0], [84.7, 4020.0], [84.8, 4027.0], [84.9, 4047.0], [85.0, 4059.0], [85.1, 4064.0], [85.2, 4082.0], [85.3, 4100.0], [85.4, 4103.0], [85.5, 4111.0], [85.6, 4122.0], [85.7, 4131.0], [85.8, 4142.0], [85.9, 4156.0], [86.0, 4165.0], [86.1, 4184.0], [86.2, 4206.0], [86.3, 4215.0], [86.4, 4235.0], [86.5, 4246.0], [86.6, 4249.0], [86.7, 4259.0], [86.8, 4275.0], [86.9, 4288.0], [87.0, 4298.0], [87.1, 4307.0], [87.2, 4324.0], [87.3, 4332.0], [87.4, 4364.0], [87.5, 4375.0], [87.6, 4387.0], [87.7, 4395.0], [87.8, 4421.0], [87.9, 4426.0], [88.0, 4433.0], [88.1, 4444.0], [88.2, 4466.0], [88.3, 4492.0], [88.4, 4529.0], [88.5, 4544.0], [88.6, 4561.0], [88.7, 4575.0], [88.8, 4588.0], [88.9, 4601.0], [89.0, 4618.0], [89.1, 4628.0], [89.2, 4636.0], [89.3, 4649.0], [89.4, 4697.0], [89.5, 4704.0], [89.6, 4713.0], [89.7, 4728.0], [89.8, 4745.0], [89.9, 4757.0], [90.0, 4773.0], [90.1, 4794.0], [90.2, 4811.0], [90.3, 4831.0], [90.4, 4847.0], [90.5, 4859.0], [90.6, 4876.0], [90.7, 4887.0], [90.8, 4931.0], [90.9, 4950.0], [91.0, 4961.0], [91.1, 4972.0], [91.2, 4982.0], [91.3, 5004.0], [91.4, 5032.0], [91.5, 5052.0], [91.6, 5079.0], [91.7, 5094.0], [91.8, 5115.0], [91.9, 5133.0], [92.0, 5149.0], [92.1, 5165.0], [92.2, 5175.0], [92.3, 5198.0], [92.4, 5211.0], [92.5, 5234.0], [92.6, 5261.0], [92.7, 5289.0], [92.8, 5304.0], [92.9, 5322.0], [93.0, 5347.0], [93.1, 5373.0], [93.2, 5380.0], [93.3, 5401.0], [93.4, 5445.0], [93.5, 5473.0], [93.6, 5490.0], [93.7, 5512.0], [93.8, 5557.0], [93.9, 5577.0], [94.0, 5599.0], [94.1, 5620.0], [94.2, 5640.0], [94.3, 5688.0], [94.4, 5711.0], [94.5, 5757.0], [94.6, 5776.0], [94.7, 5844.0], [94.8, 5893.0], [94.9, 5915.0], [95.0, 5942.0], [95.1, 5995.0], [95.2, 6014.0], [95.3, 6053.0], [95.4, 6115.0], [95.5, 6143.0], [95.6, 6157.0], [95.7, 6162.0], [95.8, 6198.0], [95.9, 6209.0], [96.0, 6276.0], [96.1, 6335.0], [96.2, 6408.0], [96.3, 6439.0], [96.4, 6494.0], [96.5, 6505.0], [96.6, 6521.0], [96.7, 6593.0], [96.8, 6628.0], [96.9, 6654.0], [97.0, 6673.0], [97.1, 6773.0], [97.2, 6801.0], [97.3, 6838.0], [97.4, 6869.0], [97.5, 6912.0], [97.6, 7001.0], [97.7, 7020.0], [97.8, 7050.0], [97.9, 7139.0], [98.0, 7196.0], [98.1, 7239.0], [98.2, 7324.0], [98.3, 7448.0], [98.4, 7522.0], [98.5, 7637.0], [98.6, 7752.0], [98.7, 7858.0], [98.8, 7988.0], [98.9, 8079.0], [99.0, 8200.0], [99.1, 8467.0], [99.2, 8673.0], [99.3, 9094.0], [99.4, 9392.0], [99.5, 9697.0], [99.6, 11101.0], [99.7, 12966.0], [99.8, 14329.0], [99.9, 14474.0], [100.0, 15075.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 312.0, "series": [{"data": [[100.0, 14.0], [200.0, 5.0], [300.0, 27.0], [400.0, 182.0], [500.0, 84.0], [600.0, 121.0], [700.0, 213.0], [800.0, 312.0], [900.0, 212.0], [1000.0, 188.0], [1100.0, 169.0], [1200.0, 220.0], [1300.0, 152.0], [1400.0, 158.0], [1500.0, 140.0], [1600.0, 150.0], [1700.0, 152.0], [1800.0, 139.0], [1900.0, 134.0], [2000.0, 135.0], [2100.0, 113.0], [2200.0, 115.0], [2300.0, 109.0], [2400.0, 94.0], [2500.0, 105.0], [2600.0, 93.0], [2800.0, 74.0], [2700.0, 104.0], [2900.0, 101.0], [3000.0, 64.0], [3100.0, 83.0], [3300.0, 75.0], [3200.0, 74.0], [3400.0, 76.0], [3500.0, 54.0], [3700.0, 51.0], [3600.0, 50.0], [3800.0, 54.0], [3900.0, 57.0], [4000.0, 44.0], [4200.0, 45.0], [4300.0, 36.0], [4100.0, 46.0], [4600.0, 30.0], [4500.0, 30.0], [4400.0, 32.0], [4700.0, 37.0], [4800.0, 30.0], [5100.0, 32.0], [5000.0, 23.0], [4900.0, 29.0], [5200.0, 24.0], [5300.0, 27.0], [5400.0, 17.0], [5500.0, 21.0], [5600.0, 16.0], [5800.0, 11.0], [5700.0, 17.0], [6000.0, 12.0], [6100.0, 25.0], [5900.0, 15.0], [6200.0, 11.0], [6300.0, 8.0], [6400.0, 13.0], [6600.0, 16.0], [6500.0, 17.0], [6900.0, 7.0], [6800.0, 13.0], [6700.0, 7.0], [7000.0, 14.0], [7100.0, 9.0], [7300.0, 4.0], [7200.0, 8.0], [7400.0, 8.0], [7600.0, 8.0], [7500.0, 3.0], [7700.0, 3.0], [7900.0, 5.0], [7800.0, 4.0], [8100.0, 3.0], [8000.0, 6.0], [8500.0, 4.0], [8300.0, 2.0], [8200.0, 3.0], [8700.0, 1.0], [8600.0, 1.0], [8400.0, 1.0], [8800.0, 3.0], [9100.0, 3.0], [9000.0, 2.0], [9300.0, 4.0], [9600.0, 3.0], [10200.0, 1.0], [10100.0, 1.0], [10600.0, 1.0], [10400.0, 1.0], [11100.0, 2.0], [11200.0, 1.0], [11600.0, 1.0], [12000.0, 1.0], [12500.0, 1.0], [13300.0, 1.0], [12900.0, 1.0], [13500.0, 1.0], [14200.0, 1.0], [14300.0, 6.0], [14700.0, 2.0], [14400.0, 1.0], [14800.0, 2.0], [15000.0, 1.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 15000.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 50.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 3176.0, "series": [{"data": [[0.0, 225.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1821.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 3176.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 50.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 38.17757009345795, "minX": 1.60190676E12, "maxY": 40.0, "series": [{"data": [[1.60190694E12, 40.0], [1.60190676E12, 39.536082474226774], [1.60190706E12, 38.17757009345795], [1.60190688E12, 40.0], [1.601907E12, 40.0], [1.60190682E12, 40.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60190706E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 883.6666666666667, "minX": 1.0, "maxY": 10489.0, "series": [{"data": [[33.0, 883.6666666666667], [32.0, 2936.0], [2.0, 10147.0], [35.0, 2926.0], [34.0, 3496.0], [36.0, 936.3333333333333], [37.0, 3422.0], [38.0, 2050.0], [39.0, 1283.0], [40.0, 2388.915563231629], [3.0, 9658.0], [4.0, 9122.0], [5.0, 9094.0], [6.0, 8206.0], [7.0, 8059.0], [8.0, 7457.0], [9.0, 6661.0], [10.0, 7127.0], [11.0, 6459.0], [12.0, 6022.0], [13.0, 6179.0], [14.0, 2824.5], [15.0, 1802.6666666666667], [16.0, 5204.0], [1.0, 10489.0], [17.0, 2524.0], [18.0, 2266.5], [19.0, 2284.5], [20.0, 2111.5], [21.0, 1926.5], [22.0, 1867.0], [23.0, 3444.0], [24.0, 1056.3333333333335], [25.0, 2841.0], [26.0, 1614.5], [27.0, 1486.0], [28.0, 1678.5], [29.0, 3336.0], [30.0, 1238.3333333333335], [31.0, 3511.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[39.79229893778454, 2399.472685887712]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 40.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 3791.05, "minX": 1.60190676E12, "maxY": 1146398.2, "series": [{"data": [[1.60190694E12, 590267.7166666667], [1.60190676E12, 425560.8], [1.60190706E12, 363509.43333333335], [1.60190688E12, 900800.05], [1.601907E12, 1146398.2], [1.60190682E12, 830500.4666666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60190694E12, 11077.75], [1.60190676E12, 5394.233333333334], [1.60190706E12, 3791.05], [1.60190688E12, 10493.1], [1.601907E12, 8679.5], [1.60190682E12, 5728.966666666666]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60190706E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 1910.2787539936107, "minX": 1.60190676E12, "maxY": 3688.2196620583695, "series": [{"data": [[1.60190694E12, 1910.2787539936107], [1.60190676E12, 2966.3667157584664], [1.60190706E12, 2438.25934579439], [1.60190688E12, 1950.236507936506], [1.601907E12, 2337.60878243513], [1.60190682E12, 3688.2196620583695]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60190706E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 1910.0375399361042, "minX": 1.60190676E12, "maxY": 3687.569892473121, "series": [{"data": [[1.60190694E12, 1910.0375399361042], [1.60190676E12, 2766.19734904271], [1.60190706E12, 2437.8481308411224], [1.60190688E12, 1949.8753968253982], [1.601907E12, 2337.0528942115766], [1.60190682E12, 3687.569892473121]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60190706E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.007009345794392528, "minX": 1.60190676E12, "maxY": 1.223858615611192, "series": [{"data": [[1.60190694E12, 0.03594249201277958], [1.60190676E12, 1.223858615611192], [1.60190706E12, 0.007009345794392528], [1.60190688E12, 0.035714285714285685], [1.601907E12, 0.04291417165668661], [1.60190682E12, 0.07219662058371738]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60190706E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 123.0, "minX": 1.60190676E12, "maxY": 15075.0, "series": [{"data": [[1.60190694E12, 5919.0], [1.60190676E12, 8143.0], [1.60190706E12, 10489.0], [1.60190688E12, 9000.0], [1.601907E12, 8467.0], [1.60190682E12, 15075.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60190694E12, 452.0], [1.60190676E12, 225.7199975967407], [1.60190706E12, 448.0], [1.60190688E12, 438.0], [1.601907E12, 638.1889983260631], [1.60190682E12, 146.60399953365325]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60190694E12, 452.4047001194954], [1.60190676E12, 241.42800264358522], [1.60190706E12, 448.0], [1.60190688E12, 438.48390012025834], [1.601907E12, 644.5079006695747], [1.60190682E12, 147.45480006217957]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60190694E12, 452.0], [1.60190676E12, 230.75999879837036], [1.60190706E12, 448.0], [1.60190688E12, 438.0], [1.601907E12, 641.6994991630315], [1.60190682E12, 147.19399992227554]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60190694E12, 343.0], [1.60190676E12, 140.0], [1.60190706E12, 447.0], [1.60190688E12, 404.0], [1.601907E12, 442.0], [1.60190682E12, 123.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60190694E12, 1668.0], [1.60190676E12, 2390.0], [1.60190706E12, 2249.5], [1.60190688E12, 1429.0], [1.601907E12, 1905.0], [1.60190682E12, 3154.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60190706E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 452.0, "minX": 2.0, "maxY": 8203.0, "series": [{"data": [[2.0, 8203.0], [3.0, 5517.0], [4.0, 4102.5], [5.0, 4986.0], [6.0, 4989.0], [7.0, 3590.5], [8.0, 3629.5], [9.0, 2819.0], [10.0, 3824.5], [11.0, 2881.0], [12.0, 2986.5], [13.0, 3466.0], [14.0, 2409.0], [15.0, 2773.0], [16.0, 2311.5], [17.0, 2604.0], [18.0, 2321.5], [19.0, 2367.0], [20.0, 1905.0], [21.0, 2061.0], [22.0, 1841.5], [23.0, 2589.0], [24.0, 1923.5], [25.0, 2634.0], [26.0, 1707.0], [27.0, 1514.0], [28.0, 2066.5], [29.0, 1719.0], [30.0, 850.5], [31.0, 1274.0], [32.0, 1531.0], [33.0, 1312.0], [35.0, 1118.0], [34.0, 1096.0], [37.0, 1224.0], [36.0, 1048.0], [39.0, 1488.5], [38.0, 922.5], [41.0, 843.5], [42.0, 2217.0], [43.0, 1009.0], [44.0, 849.5], [46.0, 841.5], [47.0, 888.0], [49.0, 842.0], [48.0, 969.5], [52.0, 786.5], [55.0, 452.0], [58.0, 1028.0], [65.0, 543.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[49.0, 3445.5], [26.0, 1827.5]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 65.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 0.0, "minX": 2.0, "maxY": 8201.5, "series": [{"data": [[2.0, 8201.5], [3.0, 5515.0], [4.0, 4102.0], [5.0, 4984.0], [6.0, 4988.0], [7.0, 3590.0], [8.0, 3629.0], [9.0, 2818.0], [10.0, 3822.5], [11.0, 2880.5], [12.0, 2986.0], [13.0, 3466.0], [14.0, 2408.5], [15.0, 2772.5], [16.0, 2311.5], [17.0, 2602.0], [18.0, 2321.5], [19.0, 2367.0], [20.0, 1904.5], [21.0, 2061.0], [22.0, 1841.5], [23.0, 2589.0], [24.0, 1923.5], [25.0, 2634.0], [26.0, 1707.0], [27.0, 1514.0], [28.0, 2066.0], [29.0, 1719.0], [30.0, 850.5], [31.0, 1274.0], [32.0, 1531.0], [33.0, 1312.0], [35.0, 1118.0], [34.0, 1096.0], [37.0, 1224.0], [36.0, 1048.0], [39.0, 1488.5], [38.0, 922.0], [41.0, 843.5], [42.0, 2217.0], [43.0, 1009.0], [44.0, 849.5], [46.0, 841.5], [47.0, 887.0], [49.0, 842.0], [48.0, 969.5], [52.0, 786.0], [55.0, 452.0], [58.0, 1028.0], [65.0, 543.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[49.0, 0.0], [26.0, 0.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 65.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 6.466666666666667, "minX": 1.60190676E12, "maxY": 21.0, "series": [{"data": [[1.60190694E12, 20.866666666666667], [1.60190676E12, 11.983333333333333], [1.60190706E12, 6.466666666666667], [1.60190688E12, 21.0], [1.601907E12, 16.7], [1.60190682E12, 10.85]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60190706E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.8333333333333334, "minX": 1.60190676E12, "maxY": 21.0, "series": [{"data": [[1.60190694E12, 20.866666666666667], [1.60190676E12, 10.483333333333333], [1.60190706E12, 7.133333333333334], [1.60190688E12, 21.0], [1.601907E12, 16.7], [1.60190682E12, 10.85]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.60190676E12, 0.8333333333333334]], "isOverall": false, "label": "Non HTTP response code: org.apache.http.NoHttpResponseException", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60190706E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.8333333333333334, "minX": 1.60190676E12, "maxY": 21.0, "series": [{"data": [[1.60190694E12, 20.866666666666667], [1.60190676E12, 10.483333333333333], [1.60190706E12, 7.133333333333334], [1.60190688E12, 21.0], [1.601907E12, 16.7], [1.60190682E12, 10.85]], "isOverall": false, "label": "HTTP Request-success", "isController": false}, {"data": [[1.60190676E12, 0.8333333333333334]], "isOverall": false, "label": "HTTP Request-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60190706E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.8333333333333334, "minX": 1.60190676E12, "maxY": 21.0, "series": [{"data": [[1.60190694E12, 20.866666666666667], [1.60190676E12, 10.483333333333333], [1.60190706E12, 7.133333333333334], [1.60190688E12, 21.0], [1.601907E12, 16.7], [1.60190682E12, 10.85]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.60190676E12, 0.8333333333333334]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60190706E12, "title": "Total Transactions Per Second"}},
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

