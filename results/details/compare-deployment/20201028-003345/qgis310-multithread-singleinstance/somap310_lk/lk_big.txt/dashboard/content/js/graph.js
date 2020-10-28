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
        data: {"result": {"minY": 167.0, "minX": 0.0, "maxY": 12616.0, "series": [{"data": [[0.0, 167.0], [0.1, 237.0], [0.2, 365.0], [0.3, 414.0], [0.4, 418.0], [0.5, 420.0], [0.6, 422.0], [0.7, 425.0], [0.8, 431.0], [0.9, 435.0], [1.0, 438.0], [1.1, 440.0], [1.2, 443.0], [1.3, 444.0], [1.4, 445.0], [1.5, 447.0], [1.6, 448.0], [1.7, 449.0], [1.8, 450.0], [1.9, 451.0], [2.0, 451.0], [2.1, 453.0], [2.2, 454.0], [2.3, 455.0], [2.4, 456.0], [2.5, 456.0], [2.6, 458.0], [2.7, 459.0], [2.8, 460.0], [2.9, 461.0], [3.0, 462.0], [3.1, 463.0], [3.2, 463.0], [3.3, 464.0], [3.4, 465.0], [3.5, 465.0], [3.6, 466.0], [3.7, 466.0], [3.8, 468.0], [3.9, 469.0], [4.0, 470.0], [4.1, 471.0], [4.2, 472.0], [4.3, 473.0], [4.4, 473.0], [4.5, 474.0], [4.6, 476.0], [4.7, 477.0], [4.8, 478.0], [4.9, 479.0], [5.0, 480.0], [5.1, 481.0], [5.2, 482.0], [5.3, 482.0], [5.4, 483.0], [5.5, 484.0], [5.6, 485.0], [5.7, 485.0], [5.8, 486.0], [5.9, 486.0], [6.0, 487.0], [6.1, 488.0], [6.2, 490.0], [6.3, 490.0], [6.4, 492.0], [6.5, 494.0], [6.6, 494.0], [6.7, 495.0], [6.8, 497.0], [6.9, 499.0], [7.0, 501.0], [7.1, 502.0], [7.2, 504.0], [7.3, 507.0], [7.4, 509.0], [7.5, 512.0], [7.6, 514.0], [7.7, 516.0], [7.8, 519.0], [7.9, 521.0], [8.0, 524.0], [8.1, 527.0], [8.2, 529.0], [8.3, 532.0], [8.4, 533.0], [8.5, 535.0], [8.6, 538.0], [8.7, 542.0], [8.8, 553.0], [8.9, 562.0], [9.0, 569.0], [9.1, 572.0], [9.2, 579.0], [9.3, 584.0], [9.4, 589.0], [9.5, 593.0], [9.6, 600.0], [9.7, 605.0], [9.8, 607.0], [9.9, 613.0], [10.0, 617.0], [10.1, 627.0], [10.2, 631.0], [10.3, 635.0], [10.4, 637.0], [10.5, 640.0], [10.6, 644.0], [10.7, 650.0], [10.8, 651.0], [10.9, 652.0], [11.0, 655.0], [11.1, 662.0], [11.2, 665.0], [11.3, 668.0], [11.4, 671.0], [11.5, 673.0], [11.6, 675.0], [11.7, 678.0], [11.8, 684.0], [11.9, 687.0], [12.0, 689.0], [12.1, 691.0], [12.2, 695.0], [12.3, 698.0], [12.4, 703.0], [12.5, 705.0], [12.6, 707.0], [12.7, 709.0], [12.8, 711.0], [12.9, 712.0], [13.0, 715.0], [13.1, 716.0], [13.2, 718.0], [13.3, 719.0], [13.4, 722.0], [13.5, 725.0], [13.6, 726.0], [13.7, 727.0], [13.8, 730.0], [13.9, 732.0], [14.0, 733.0], [14.1, 737.0], [14.2, 739.0], [14.3, 740.0], [14.4, 742.0], [14.5, 745.0], [14.6, 747.0], [14.7, 749.0], [14.8, 750.0], [14.9, 752.0], [15.0, 753.0], [15.1, 755.0], [15.2, 757.0], [15.3, 758.0], [15.4, 759.0], [15.5, 760.0], [15.6, 761.0], [15.7, 764.0], [15.8, 764.0], [15.9, 766.0], [16.0, 767.0], [16.1, 769.0], [16.2, 769.0], [16.3, 770.0], [16.4, 771.0], [16.5, 773.0], [16.6, 774.0], [16.7, 775.0], [16.8, 777.0], [16.9, 779.0], [17.0, 779.0], [17.1, 781.0], [17.2, 781.0], [17.3, 782.0], [17.4, 783.0], [17.5, 783.0], [17.6, 784.0], [17.7, 786.0], [17.8, 786.0], [17.9, 789.0], [18.0, 790.0], [18.1, 793.0], [18.2, 794.0], [18.3, 795.0], [18.4, 796.0], [18.5, 797.0], [18.6, 798.0], [18.7, 800.0], [18.8, 802.0], [18.9, 802.0], [19.0, 803.0], [19.1, 805.0], [19.2, 806.0], [19.3, 807.0], [19.4, 809.0], [19.5, 811.0], [19.6, 812.0], [19.7, 814.0], [19.8, 814.0], [19.9, 815.0], [20.0, 817.0], [20.1, 818.0], [20.2, 820.0], [20.3, 823.0], [20.4, 825.0], [20.5, 826.0], [20.6, 828.0], [20.7, 830.0], [20.8, 831.0], [20.9, 833.0], [21.0, 835.0], [21.1, 836.0], [21.2, 838.0], [21.3, 839.0], [21.4, 840.0], [21.5, 841.0], [21.6, 843.0], [21.7, 844.0], [21.8, 846.0], [21.9, 847.0], [22.0, 848.0], [22.1, 850.0], [22.2, 851.0], [22.3, 855.0], [22.4, 856.0], [22.5, 858.0], [22.6, 860.0], [22.7, 862.0], [22.8, 863.0], [22.9, 865.0], [23.0, 867.0], [23.1, 869.0], [23.2, 869.0], [23.3, 872.0], [23.4, 874.0], [23.5, 875.0], [23.6, 876.0], [23.7, 879.0], [23.8, 880.0], [23.9, 880.0], [24.0, 881.0], [24.1, 884.0], [24.2, 886.0], [24.3, 888.0], [24.4, 890.0], [24.5, 892.0], [24.6, 896.0], [24.7, 897.0], [24.8, 900.0], [24.9, 903.0], [25.0, 904.0], [25.1, 906.0], [25.2, 907.0], [25.3, 909.0], [25.4, 912.0], [25.5, 914.0], [25.6, 917.0], [25.7, 918.0], [25.8, 919.0], [25.9, 922.0], [26.0, 923.0], [26.1, 925.0], [26.2, 926.0], [26.3, 928.0], [26.4, 931.0], [26.5, 933.0], [26.6, 934.0], [26.7, 935.0], [26.8, 938.0], [26.9, 942.0], [27.0, 944.0], [27.1, 948.0], [27.2, 952.0], [27.3, 954.0], [27.4, 957.0], [27.5, 961.0], [27.6, 962.0], [27.7, 965.0], [27.8, 968.0], [27.9, 970.0], [28.0, 971.0], [28.1, 972.0], [28.2, 974.0], [28.3, 978.0], [28.4, 981.0], [28.5, 983.0], [28.6, 984.0], [28.7, 989.0], [28.8, 991.0], [28.9, 993.0], [29.0, 995.0], [29.1, 998.0], [29.2, 999.0], [29.3, 1000.0], [29.4, 1002.0], [29.5, 1005.0], [29.6, 1008.0], [29.7, 1012.0], [29.8, 1016.0], [29.9, 1017.0], [30.0, 1019.0], [30.1, 1020.0], [30.2, 1024.0], [30.3, 1025.0], [30.4, 1028.0], [30.5, 1030.0], [30.6, 1036.0], [30.7, 1040.0], [30.8, 1041.0], [30.9, 1044.0], [31.0, 1046.0], [31.1, 1048.0], [31.2, 1051.0], [31.3, 1053.0], [31.4, 1055.0], [31.5, 1057.0], [31.6, 1058.0], [31.7, 1060.0], [31.8, 1061.0], [31.9, 1064.0], [32.0, 1064.0], [32.1, 1066.0], [32.2, 1069.0], [32.3, 1070.0], [32.4, 1073.0], [32.5, 1074.0], [32.6, 1076.0], [32.7, 1079.0], [32.8, 1079.0], [32.9, 1081.0], [33.0, 1082.0], [33.1, 1084.0], [33.2, 1087.0], [33.3, 1089.0], [33.4, 1090.0], [33.5, 1091.0], [33.6, 1095.0], [33.7, 1097.0], [33.8, 1100.0], [33.9, 1103.0], [34.0, 1106.0], [34.1, 1107.0], [34.2, 1111.0], [34.3, 1114.0], [34.4, 1115.0], [34.5, 1117.0], [34.6, 1120.0], [34.7, 1121.0], [34.8, 1123.0], [34.9, 1126.0], [35.0, 1127.0], [35.1, 1130.0], [35.2, 1132.0], [35.3, 1134.0], [35.4, 1136.0], [35.5, 1138.0], [35.6, 1140.0], [35.7, 1140.0], [35.8, 1143.0], [35.9, 1145.0], [36.0, 1148.0], [36.1, 1152.0], [36.2, 1154.0], [36.3, 1156.0], [36.4, 1159.0], [36.5, 1161.0], [36.6, 1165.0], [36.7, 1169.0], [36.8, 1172.0], [36.9, 1174.0], [37.0, 1177.0], [37.1, 1183.0], [37.2, 1185.0], [37.3, 1188.0], [37.4, 1189.0], [37.5, 1194.0], [37.6, 1197.0], [37.7, 1201.0], [37.8, 1204.0], [37.9, 1206.0], [38.0, 1208.0], [38.1, 1211.0], [38.2, 1213.0], [38.3, 1214.0], [38.4, 1217.0], [38.5, 1218.0], [38.6, 1219.0], [38.7, 1220.0], [38.8, 1222.0], [38.9, 1223.0], [39.0, 1225.0], [39.1, 1226.0], [39.2, 1229.0], [39.3, 1231.0], [39.4, 1232.0], [39.5, 1235.0], [39.6, 1237.0], [39.7, 1238.0], [39.8, 1240.0], [39.9, 1242.0], [40.0, 1242.0], [40.1, 1244.0], [40.2, 1246.0], [40.3, 1248.0], [40.4, 1249.0], [40.5, 1252.0], [40.6, 1256.0], [40.7, 1258.0], [40.8, 1259.0], [40.9, 1263.0], [41.0, 1265.0], [41.1, 1269.0], [41.2, 1272.0], [41.3, 1275.0], [41.4, 1277.0], [41.5, 1279.0], [41.6, 1283.0], [41.7, 1285.0], [41.8, 1288.0], [41.9, 1292.0], [42.0, 1294.0], [42.1, 1295.0], [42.2, 1296.0], [42.3, 1297.0], [42.4, 1300.0], [42.5, 1301.0], [42.6, 1304.0], [42.7, 1305.0], [42.8, 1311.0], [42.9, 1313.0], [43.0, 1317.0], [43.1, 1319.0], [43.2, 1322.0], [43.3, 1325.0], [43.4, 1328.0], [43.5, 1329.0], [43.6, 1337.0], [43.7, 1339.0], [43.8, 1341.0], [43.9, 1343.0], [44.0, 1346.0], [44.1, 1349.0], [44.2, 1353.0], [44.3, 1358.0], [44.4, 1359.0], [44.5, 1361.0], [44.6, 1362.0], [44.7, 1366.0], [44.8, 1368.0], [44.9, 1371.0], [45.0, 1372.0], [45.1, 1379.0], [45.2, 1382.0], [45.3, 1384.0], [45.4, 1388.0], [45.5, 1391.0], [45.6, 1396.0], [45.7, 1402.0], [45.8, 1405.0], [45.9, 1406.0], [46.0, 1409.0], [46.1, 1410.0], [46.2, 1412.0], [46.3, 1414.0], [46.4, 1415.0], [46.5, 1421.0], [46.6, 1425.0], [46.7, 1430.0], [46.8, 1433.0], [46.9, 1439.0], [47.0, 1442.0], [47.1, 1445.0], [47.2, 1446.0], [47.3, 1449.0], [47.4, 1450.0], [47.5, 1453.0], [47.6, 1458.0], [47.7, 1461.0], [47.8, 1463.0], [47.9, 1466.0], [48.0, 1469.0], [48.1, 1471.0], [48.2, 1473.0], [48.3, 1476.0], [48.4, 1480.0], [48.5, 1483.0], [48.6, 1484.0], [48.7, 1487.0], [48.8, 1488.0], [48.9, 1493.0], [49.0, 1499.0], [49.1, 1501.0], [49.2, 1503.0], [49.3, 1507.0], [49.4, 1516.0], [49.5, 1518.0], [49.6, 1521.0], [49.7, 1527.0], [49.8, 1535.0], [49.9, 1537.0], [50.0, 1542.0], [50.1, 1545.0], [50.2, 1548.0], [50.3, 1551.0], [50.4, 1554.0], [50.5, 1556.0], [50.6, 1560.0], [50.7, 1564.0], [50.8, 1566.0], [50.9, 1570.0], [51.0, 1571.0], [51.1, 1575.0], [51.2, 1580.0], [51.3, 1584.0], [51.4, 1588.0], [51.5, 1590.0], [51.6, 1598.0], [51.7, 1604.0], [51.8, 1608.0], [51.9, 1616.0], [52.0, 1622.0], [52.1, 1627.0], [52.2, 1632.0], [52.3, 1641.0], [52.4, 1650.0], [52.5, 1654.0], [52.6, 1657.0], [52.7, 1662.0], [52.8, 1665.0], [52.9, 1669.0], [53.0, 1671.0], [53.1, 1675.0], [53.2, 1677.0], [53.3, 1679.0], [53.4, 1681.0], [53.5, 1688.0], [53.6, 1692.0], [53.7, 1697.0], [53.8, 1698.0], [53.9, 1707.0], [54.0, 1708.0], [54.1, 1709.0], [54.2, 1711.0], [54.3, 1713.0], [54.4, 1714.0], [54.5, 1719.0], [54.6, 1723.0], [54.7, 1725.0], [54.8, 1730.0], [54.9, 1732.0], [55.0, 1735.0], [55.1, 1741.0], [55.2, 1744.0], [55.3, 1749.0], [55.4, 1756.0], [55.5, 1761.0], [55.6, 1765.0], [55.7, 1772.0], [55.8, 1776.0], [55.9, 1779.0], [56.0, 1784.0], [56.1, 1789.0], [56.2, 1799.0], [56.3, 1805.0], [56.4, 1809.0], [56.5, 1811.0], [56.6, 1814.0], [56.7, 1819.0], [56.8, 1825.0], [56.9, 1830.0], [57.0, 1837.0], [57.1, 1839.0], [57.2, 1845.0], [57.3, 1856.0], [57.4, 1859.0], [57.5, 1861.0], [57.6, 1862.0], [57.7, 1865.0], [57.8, 1867.0], [57.9, 1868.0], [58.0, 1874.0], [58.1, 1884.0], [58.2, 1891.0], [58.3, 1895.0], [58.4, 1900.0], [58.5, 1905.0], [58.6, 1911.0], [58.7, 1914.0], [58.8, 1917.0], [58.9, 1919.0], [59.0, 1922.0], [59.1, 1932.0], [59.2, 1935.0], [59.3, 1941.0], [59.4, 1947.0], [59.5, 1955.0], [59.6, 1960.0], [59.7, 1967.0], [59.8, 1970.0], [59.9, 1975.0], [60.0, 1981.0], [60.1, 1990.0], [60.2, 1994.0], [60.3, 1998.0], [60.4, 2000.0], [60.5, 2006.0], [60.6, 2007.0], [60.7, 2011.0], [60.8, 2019.0], [60.9, 2022.0], [61.0, 2026.0], [61.1, 2032.0], [61.2, 2041.0], [61.3, 2047.0], [61.4, 2052.0], [61.5, 2054.0], [61.6, 2059.0], [61.7, 2063.0], [61.8, 2068.0], [61.9, 2077.0], [62.0, 2078.0], [62.1, 2086.0], [62.2, 2101.0], [62.3, 2105.0], [62.4, 2114.0], [62.5, 2119.0], [62.6, 2127.0], [62.7, 2130.0], [62.8, 2134.0], [62.9, 2138.0], [63.0, 2142.0], [63.1, 2148.0], [63.2, 2152.0], [63.3, 2154.0], [63.4, 2159.0], [63.5, 2165.0], [63.6, 2169.0], [63.7, 2176.0], [63.8, 2179.0], [63.9, 2181.0], [64.0, 2191.0], [64.1, 2195.0], [64.2, 2201.0], [64.3, 2204.0], [64.4, 2210.0], [64.5, 2213.0], [64.6, 2217.0], [64.7, 2220.0], [64.8, 2223.0], [64.9, 2226.0], [65.0, 2228.0], [65.1, 2234.0], [65.2, 2241.0], [65.3, 2245.0], [65.4, 2248.0], [65.5, 2256.0], [65.6, 2259.0], [65.7, 2266.0], [65.8, 2269.0], [65.9, 2273.0], [66.0, 2276.0], [66.1, 2283.0], [66.2, 2285.0], [66.3, 2289.0], [66.4, 2294.0], [66.5, 2306.0], [66.6, 2309.0], [66.7, 2313.0], [66.8, 2320.0], [66.9, 2329.0], [67.0, 2332.0], [67.1, 2340.0], [67.2, 2345.0], [67.3, 2351.0], [67.4, 2362.0], [67.5, 2369.0], [67.6, 2371.0], [67.7, 2373.0], [67.8, 2379.0], [67.9, 2388.0], [68.0, 2398.0], [68.1, 2403.0], [68.2, 2408.0], [68.3, 2412.0], [68.4, 2420.0], [68.5, 2424.0], [68.6, 2429.0], [68.7, 2435.0], [68.8, 2441.0], [68.9, 2450.0], [69.0, 2455.0], [69.1, 2460.0], [69.2, 2464.0], [69.3, 2466.0], [69.4, 2469.0], [69.5, 2479.0], [69.6, 2485.0], [69.7, 2493.0], [69.8, 2501.0], [69.9, 2505.0], [70.0, 2508.0], [70.1, 2514.0], [70.2, 2519.0], [70.3, 2528.0], [70.4, 2534.0], [70.5, 2536.0], [70.6, 2545.0], [70.7, 2552.0], [70.8, 2561.0], [70.9, 2568.0], [71.0, 2572.0], [71.1, 2577.0], [71.2, 2586.0], [71.3, 2591.0], [71.4, 2606.0], [71.5, 2609.0], [71.6, 2616.0], [71.7, 2623.0], [71.8, 2630.0], [71.9, 2636.0], [72.0, 2640.0], [72.1, 2644.0], [72.2, 2649.0], [72.3, 2658.0], [72.4, 2663.0], [72.5, 2669.0], [72.6, 2678.0], [72.7, 2681.0], [72.8, 2691.0], [72.9, 2703.0], [73.0, 2716.0], [73.1, 2724.0], [73.2, 2731.0], [73.3, 2736.0], [73.4, 2744.0], [73.5, 2753.0], [73.6, 2756.0], [73.7, 2767.0], [73.8, 2776.0], [73.9, 2787.0], [74.0, 2789.0], [74.1, 2801.0], [74.2, 2807.0], [74.3, 2812.0], [74.4, 2822.0], [74.5, 2827.0], [74.6, 2832.0], [74.7, 2841.0], [74.8, 2843.0], [74.9, 2848.0], [75.0, 2854.0], [75.1, 2865.0], [75.2, 2872.0], [75.3, 2882.0], [75.4, 2900.0], [75.5, 2904.0], [75.6, 2912.0], [75.7, 2914.0], [75.8, 2926.0], [75.9, 2942.0], [76.0, 2953.0], [76.1, 2958.0], [76.2, 2962.0], [76.3, 2966.0], [76.4, 2975.0], [76.5, 2985.0], [76.6, 2987.0], [76.7, 2991.0], [76.8, 2999.0], [76.9, 3007.0], [77.0, 3013.0], [77.1, 3019.0], [77.2, 3025.0], [77.3, 3027.0], [77.4, 3036.0], [77.5, 3042.0], [77.6, 3050.0], [77.7, 3052.0], [77.8, 3058.0], [77.9, 3064.0], [78.0, 3079.0], [78.1, 3086.0], [78.2, 3095.0], [78.3, 3097.0], [78.4, 3105.0], [78.5, 3113.0], [78.6, 3121.0], [78.7, 3127.0], [78.8, 3129.0], [78.9, 3143.0], [79.0, 3152.0], [79.1, 3160.0], [79.2, 3170.0], [79.3, 3175.0], [79.4, 3187.0], [79.5, 3192.0], [79.6, 3202.0], [79.7, 3206.0], [79.8, 3213.0], [79.9, 3222.0], [80.0, 3225.0], [80.1, 3231.0], [80.2, 3240.0], [80.3, 3243.0], [80.4, 3249.0], [80.5, 3253.0], [80.6, 3260.0], [80.7, 3264.0], [80.8, 3275.0], [80.9, 3279.0], [81.0, 3285.0], [81.1, 3295.0], [81.2, 3305.0], [81.3, 3309.0], [81.4, 3315.0], [81.5, 3330.0], [81.6, 3343.0], [81.7, 3355.0], [81.8, 3365.0], [81.9, 3372.0], [82.0, 3383.0], [82.1, 3392.0], [82.2, 3400.0], [82.3, 3402.0], [82.4, 3415.0], [82.5, 3428.0], [82.6, 3434.0], [82.7, 3444.0], [82.8, 3456.0], [82.9, 3466.0], [83.0, 3470.0], [83.1, 3473.0], [83.2, 3483.0], [83.3, 3489.0], [83.4, 3500.0], [83.5, 3505.0], [83.6, 3514.0], [83.7, 3518.0], [83.8, 3529.0], [83.9, 3534.0], [84.0, 3548.0], [84.1, 3551.0], [84.2, 3553.0], [84.3, 3561.0], [84.4, 3564.0], [84.5, 3572.0], [84.6, 3578.0], [84.7, 3588.0], [84.8, 3594.0], [84.9, 3594.0], [85.0, 3605.0], [85.1, 3611.0], [85.2, 3616.0], [85.3, 3627.0], [85.4, 3634.0], [85.5, 3644.0], [85.6, 3649.0], [85.7, 3663.0], [85.8, 3668.0], [85.9, 3681.0], [86.0, 3686.0], [86.1, 3693.0], [86.2, 3710.0], [86.3, 3718.0], [86.4, 3723.0], [86.5, 3734.0], [86.6, 3738.0], [86.7, 3742.0], [86.8, 3751.0], [86.9, 3764.0], [87.0, 3771.0], [87.1, 3780.0], [87.2, 3786.0], [87.3, 3792.0], [87.4, 3802.0], [87.5, 3809.0], [87.6, 3816.0], [87.7, 3823.0], [87.8, 3831.0], [87.9, 3838.0], [88.0, 3857.0], [88.1, 3867.0], [88.2, 3875.0], [88.3, 3884.0], [88.4, 3894.0], [88.5, 3907.0], [88.6, 3923.0], [88.7, 3946.0], [88.8, 3954.0], [88.9, 3958.0], [89.0, 3970.0], [89.1, 3974.0], [89.2, 3986.0], [89.3, 3998.0], [89.4, 4017.0], [89.5, 4039.0], [89.6, 4057.0], [89.7, 4071.0], [89.8, 4083.0], [89.9, 4092.0], [90.0, 4104.0], [90.1, 4121.0], [90.2, 4131.0], [90.3, 4137.0], [90.4, 4145.0], [90.5, 4161.0], [90.6, 4167.0], [90.7, 4172.0], [90.8, 4174.0], [90.9, 4183.0], [91.0, 4200.0], [91.1, 4210.0], [91.2, 4217.0], [91.3, 4231.0], [91.4, 4243.0], [91.5, 4250.0], [91.6, 4255.0], [91.7, 4279.0], [91.8, 4301.0], [91.9, 4315.0], [92.0, 4335.0], [92.1, 4346.0], [92.2, 4354.0], [92.3, 4371.0], [92.4, 4387.0], [92.5, 4411.0], [92.6, 4430.0], [92.7, 4440.0], [92.8, 4451.0], [92.9, 4463.0], [93.0, 4476.0], [93.1, 4491.0], [93.2, 4547.0], [93.3, 4576.0], [93.4, 4599.0], [93.5, 4611.0], [93.6, 4633.0], [93.7, 4654.0], [93.8, 4671.0], [93.9, 4723.0], [94.0, 4733.0], [94.1, 4749.0], [94.2, 4780.0], [94.3, 4791.0], [94.4, 4810.0], [94.5, 4829.0], [94.6, 4873.0], [94.7, 4938.0], [94.8, 4962.0], [94.9, 4980.0], [95.0, 5001.0], [95.1, 5064.0], [95.2, 5098.0], [95.3, 5201.0], [95.4, 5265.0], [95.5, 5309.0], [95.6, 5334.0], [95.7, 5373.0], [95.8, 5423.0], [95.9, 5461.0], [96.0, 5500.0], [96.1, 5550.0], [96.2, 5588.0], [96.3, 5598.0], [96.4, 5635.0], [96.5, 5682.0], [96.6, 5803.0], [96.7, 5875.0], [96.8, 5941.0], [96.9, 5968.0], [97.0, 6027.0], [97.1, 6118.0], [97.2, 6160.0], [97.3, 6274.0], [97.4, 6335.0], [97.5, 6420.0], [97.6, 6481.0], [97.7, 6547.0], [97.8, 6652.0], [97.9, 6670.0], [98.0, 6737.0], [98.1, 6939.0], [98.2, 7036.0], [98.3, 7151.0], [98.4, 7241.0], [98.5, 7285.0], [98.6, 7308.0], [98.7, 7339.0], [98.8, 7559.0], [98.9, 7672.0], [99.0, 7769.0], [99.1, 7988.0], [99.2, 8754.0], [99.3, 8946.0], [99.4, 9349.0], [99.5, 9763.0], [99.6, 10747.0], [99.7, 12028.0], [99.8, 12329.0], [99.9, 12477.0], [100.0, 12616.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 352.0, "series": [{"data": [[100.0, 3.0], [200.0, 4.0], [300.0, 6.0], [400.0, 352.0], [500.0, 140.0], [600.0, 144.0], [700.0, 334.0], [800.0, 319.0], [900.0, 236.0], [1000.0, 240.0], [1100.0, 204.0], [1200.0, 249.0], [1300.0, 172.0], [1400.0, 176.0], [1500.0, 137.0], [1600.0, 116.0], [1700.0, 126.0], [1800.0, 115.0], [1900.0, 103.0], [2000.0, 96.0], [2100.0, 103.0], [2200.0, 121.0], [2300.0, 83.0], [2400.0, 92.0], [2500.0, 83.0], [2600.0, 79.0], [2700.0, 65.0], [2800.0, 69.0], [2900.0, 75.0], [3000.0, 81.0], [3100.0, 65.0], [3300.0, 55.0], [3200.0, 82.0], [3400.0, 62.0], [3500.0, 83.0], [3600.0, 63.0], [3700.0, 63.0], [3800.0, 58.0], [3900.0, 46.0], [4000.0, 33.0], [4200.0, 42.0], [4300.0, 35.0], [4100.0, 55.0], [4600.0, 22.0], [4500.0, 16.0], [4400.0, 34.0], [4700.0, 27.0], [4800.0, 15.0], [5000.0, 12.0], [4900.0, 19.0], [5100.0, 4.0], [5200.0, 9.0], [5300.0, 17.0], [5400.0, 11.0], [5500.0, 17.0], [5600.0, 11.0], [5800.0, 8.0], [5700.0, 4.0], [5900.0, 10.0], [6100.0, 9.0], [6000.0, 7.0], [6200.0, 5.0], [6300.0, 7.0], [6500.0, 6.0], [6400.0, 9.0], [6600.0, 10.0], [6900.0, 6.0], [6700.0, 5.0], [6800.0, 2.0], [7100.0, 3.0], [7000.0, 5.0], [7200.0, 11.0], [7300.0, 10.0], [7400.0, 2.0], [7600.0, 6.0], [7500.0, 2.0], [7700.0, 5.0], [7900.0, 3.0], [7800.0, 1.0], [8100.0, 2.0], [8000.0, 1.0], [8700.0, 3.0], [8200.0, 1.0], [9200.0, 1.0], [8800.0, 3.0], [9100.0, 1.0], [8900.0, 2.0], [9000.0, 1.0], [9300.0, 1.0], [9400.0, 1.0], [9500.0, 1.0], [9700.0, 3.0], [9600.0, 1.0], [9800.0, 1.0], [10400.0, 1.0], [10500.0, 1.0], [10700.0, 1.0], [11100.0, 1.0], [11500.0, 1.0], [11300.0, 1.0], [11800.0, 1.0], [12100.0, 1.0], [12000.0, 5.0], [12600.0, 2.0], [12400.0, 5.0], [12300.0, 3.0], [12500.0, 1.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 12600.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 366.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2679.0, "series": [{"data": [[0.0, 366.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 2217.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 2679.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 11.647058823529413, "minX": 1.60384608E12, "maxY": 12.0, "series": [{"data": [[1.60384668E12, 12.0], [1.60384638E12, 12.0], [1.60384632E12, 12.0], [1.60384698E12, 11.647058823529413], [1.60384692E12, 12.0], [1.60384662E12, 12.0], [1.60384656E12, 12.0], [1.60384626E12, 12.0], [1.6038462E12, 12.0], [1.60384686E12, 12.0], [1.6038468E12, 12.0], [1.6038465E12, 12.0], [1.60384644E12, 12.0], [1.60384614E12, 12.0], [1.60384608E12, 11.812244897959182], [1.60384674E12, 12.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60384698E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 2066.4035489410385, "minX": 1.0, "maxY": 12037.0, "series": [{"data": [[8.0, 6361.0], [4.0, 12028.0], [2.0, 12037.0], [1.0, 12019.0], [9.0, 6352.5], [5.0, 4180.333333333334], [10.0, 6392.5], [11.0, 6425.5], [6.0, 4280.0], [12.0, 2066.4035489410385], [3.0, 12033.0], [7.0, 4274.333333333333]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[11.9787153173698, 2084.265488407449]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 12.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 1670.4833333333333, "minX": 1.60384608E12, "maxY": 463992.06666666665, "series": [{"data": [[1.60384668E12, 149247.6], [1.60384638E12, 382309.26666666666], [1.60384632E12, 236213.68333333332], [1.60384698E12, 71348.56666666667], [1.60384692E12, 379340.6666666667], [1.60384662E12, 169889.93333333332], [1.60384656E12, 241167.35], [1.60384626E12, 351803.7166666667], [1.6038462E12, 407982.95], [1.60384686E12, 216040.0], [1.6038468E12, 463992.06666666665], [1.6038465E12, 368166.76666666666], [1.60384644E12, 99292.23333333334], [1.60384614E12, 236218.31666666668], [1.60384608E12, 68193.56666666667], [1.60384674E12, 409896.9166666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60384668E12, 3288.5], [1.60384638E12, 2884.016666666667], [1.60384632E12, 2270.8], [1.60384698E12, 1695.1333333333334], [1.60384692E12, 2382.366666666667], [1.60384662E12, 4426.45], [1.60384656E12, 3073.366666666667], [1.60384626E12, 2687.8333333333335], [1.6038462E12, 1670.4833333333333], [1.60384686E12, 3426.4666666666667], [1.6038468E12, 2273.016666666667], [1.6038465E12, 4265.033333333334], [1.60384644E12, 3076.95], [1.60384614E12, 2766.2833333333333], [1.60384608E12, 2198.483333333333], [1.60384674E12, 3105.766666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60384698E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 1268.6122082585282, "minX": 1.60384608E12, "maxY": 3533.668393782383, "series": [{"data": [[1.60384668E12, 2024.2200557103054], [1.60384638E12, 2246.8475609756106], [1.60384632E12, 2729.9498069498063], [1.60384698E12, 2543.11229946524], [1.60384692E12, 2739.8007246376824], [1.60384662E12, 1447.2394366197188], [1.60384656E12, 1964.618131868132], [1.60384626E12, 2480.1400651465797], [1.6038462E12, 3533.668393782383], [1.60384686E12, 1786.9922480620164], [1.6038468E12, 2875.313725490198], [1.6038465E12, 1268.6122082585282], [1.60384644E12, 2142.825443786983], [1.60384614E12, 2143.125748502993], [1.60384608E12, 1649.2653061224494], [1.60384674E12, 1892.5611702127676]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60384698E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 1268.2890484739676, "minX": 1.60384608E12, "maxY": 3532.512953367875, "series": [{"data": [[1.60384668E12, 2024.0334261838432], [1.60384638E12, 2246.246951219515], [1.60384632E12, 2729.4710424710443], [1.60384698E12, 2542.9304812834225], [1.60384692E12, 2739.1449275362334], [1.60384662E12, 1447.060362173037], [1.60384656E12, 1964.2719780219797], [1.60384626E12, 2479.5244299674273], [1.6038462E12, 3532.512953367875], [1.60384686E12, 1786.7235142118873], [1.6038468E12, 2874.4470588235313], [1.6038465E12, 1268.2890484739676], [1.60384644E12, 2142.692307692309], [1.60384614E12, 2142.7634730538907], [1.60384608E12, 1649.0530612244906], [1.60384674E12, 1892.0638297872338]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60384698E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.60384608E12, "maxY": 0.5020408163265309, "series": [{"data": [[1.60384668E12, 0.04178272980501393], [1.60384638E12, 0.04878048780487801], [1.60384632E12, 0.0579150579150579], [1.60384698E12, 0.0], [1.60384692E12, 0.05797101449275365], [1.60384662E12, 0.030181086519114674], [1.60384656E12, 0.038461538461538464], [1.60384626E12, 0.05537459283387626], [1.6038462E12, 0.07772020725388598], [1.60384686E12, 0.028423772609819133], [1.6038468E12, 0.05490196078431372], [1.6038465E12, 0.026929982046678628], [1.60384644E12, 0.044378698224852055], [1.60384614E12, 0.04790419161676644], [1.60384608E12, 0.5020408163265309], [1.60384674E12, 0.0345744680851064]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60384698E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 167.0, "minX": 1.60384608E12, "maxY": 12616.0, "series": [{"data": [[1.60384668E12, 5208.0], [1.60384638E12, 7084.0], [1.60384632E12, 8033.0], [1.60384698E12, 12537.0], [1.60384692E12, 7151.0], [1.60384662E12, 4819.0], [1.60384656E12, 5845.0], [1.60384626E12, 9780.0], [1.6038462E12, 9579.0], [1.60384686E12, 7559.0], [1.6038468E12, 7347.0], [1.6038465E12, 5001.0], [1.60384644E12, 12616.0], [1.60384614E12, 5092.0], [1.60384608E12, 5981.0], [1.60384674E12, 5803.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60384668E12, 442.2399999141693], [1.60384638E12, 418.9609999215603], [1.60384632E12, 459.0], [1.60384698E12, 431.6919999551773], [1.60384692E12, 458.0], [1.60384662E12, 457.8919992876053], [1.60384656E12, 472.28499991297724], [1.60384626E12, 363.8599996328354], [1.6038462E12, 487.93599925994874], [1.60384686E12, 425.98399981498716], [1.6038468E12, 425.55199768066404], [1.6038465E12, 459.1319992017746], [1.60384644E12, 477.0], [1.60384614E12, 584.134999281168], [1.60384608E12, 176.35399935483932], [1.60384674E12, 454.3929999101162]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60384668E12, 442.56400003433225], [1.60384638E12, 419.2571000313759], [1.60384632E12, 459.0], [1.60384698E12, 431.8612000179291], [1.60384692E12, 458.0], [1.60384662E12, 460.5812002849579], [1.60384656E12, 472.61350003480914], [1.60384626E12, 366.08240064620975], [1.6038462E12, 490.7296002960205], [1.60384686E12, 426.6824000740051], [1.6038468E12, 434.30720092773436], [1.6038465E12, 462.14520031929015], [1.60384644E12, 477.0], [1.60384614E12, 586.8485002875328], [1.60384608E12, 178.78940025806426], [1.60384674E12, 454.73230003595353]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60384668E12, 442.41999995708466], [1.60384638E12, 419.12549996078013], [1.60384632E12, 459.0], [1.60384698E12, 431.78599997758863], [1.60384692E12, 458.0], [1.60384662E12, 459.3859996438026], [1.60384656E12, 472.4674999564886], [1.60384626E12, 364.6299998164177], [1.6038462E12, 489.48799962997435], [1.60384686E12, 426.3719999074936], [1.6038468E12, 430.415998840332], [1.6038465E12, 460.8059996008873], [1.60384644E12, 477.0], [1.60384614E12, 585.642499640584], [1.60384608E12, 177.70699967741967], [1.60384674E12, 454.5814999550581]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60384668E12, 439.0], [1.60384638E12, 415.0], [1.60384632E12, 458.0], [1.60384698E12, 431.0], [1.60384692E12, 456.0], [1.60384662E12, 450.0], [1.60384656E12, 470.0], [1.60384626E12, 358.0], [1.6038462E12, 476.0], [1.60384686E12, 423.0], [1.6038468E12, 405.0], [1.6038465E12, 451.0], [1.60384644E12, 469.0], [1.60384614E12, 578.0], [1.60384608E12, 167.0], [1.60384674E12, 452.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60384668E12, 1690.0], [1.60384638E12, 1773.5], [1.60384632E12, 2259.0], [1.60384698E12, 1079.0], [1.60384692E12, 2370.5], [1.60384662E12, 1111.0], [1.60384656E12, 1689.5], [1.60384626E12, 2273.0], [1.6038462E12, 3283.0], [1.60384686E12, 1537.0], [1.6038468E12, 2661.0], [1.6038465E12, 869.0], [1.60384644E12, 1304.0], [1.60384614E12, 1968.0], [1.60384608E12, 1298.0], [1.60384674E12, 1390.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60384698E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 448.0, "minX": 1.0, "maxY": 5780.0, "series": [{"data": [[2.0, 4193.0], [8.0, 1380.5], [9.0, 1465.0], [10.0, 1230.0], [11.0, 1220.0], [3.0, 3581.0], [12.0, 1105.0], [13.0, 1166.0], [14.0, 882.5], [15.0, 835.0], [1.0, 5780.0], [4.0, 2850.0], [16.0, 761.0], [17.0, 880.5], [18.0, 669.5], [19.0, 959.5], [5.0, 2405.0], [20.0, 602.0], [22.0, 562.5], [6.0, 2234.5], [24.0, 507.0], [25.0, 481.5], [27.0, 448.0], [7.0, 1723.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 27.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 448.0, "minX": 1.0, "maxY": 5777.5, "series": [{"data": [[2.0, 4191.0], [8.0, 1380.5], [9.0, 1465.0], [10.0, 1230.0], [11.0, 1219.0], [3.0, 3577.0], [12.0, 1105.0], [13.0, 1166.0], [14.0, 882.5], [15.0, 834.0], [1.0, 5777.5], [4.0, 2849.0], [16.0, 760.0], [17.0, 880.5], [18.0, 669.5], [19.0, 959.5], [5.0, 2405.0], [20.0, 602.0], [22.0, 562.5], [6.0, 2234.0], [24.0, 507.0], [25.0, 481.5], [27.0, 448.0], [7.0, 1723.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 27.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 2.9166666666666665, "minX": 1.60384608E12, "maxY": 9.283333333333333, "series": [{"data": [[1.60384668E12, 5.983333333333333], [1.60384638E12, 5.466666666666667], [1.60384632E12, 4.316666666666666], [1.60384698E12, 2.9166666666666665], [1.60384692E12, 4.6], [1.60384662E12, 8.283333333333333], [1.60384656E12, 6.066666666666666], [1.60384626E12, 5.116666666666666], [1.6038462E12, 3.216666666666667], [1.60384686E12, 6.45], [1.6038468E12, 4.25], [1.6038465E12, 9.283333333333333], [1.60384644E12, 5.633333333333334], [1.60384614E12, 5.566666666666666], [1.60384608E12, 4.283333333333333], [1.60384674E12, 6.266666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60384698E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 3.1166666666666667, "minX": 1.60384608E12, "maxY": 9.283333333333333, "series": [{"data": [[1.60384668E12, 5.983333333333333], [1.60384638E12, 5.466666666666667], [1.60384632E12, 4.316666666666666], [1.60384698E12, 3.1166666666666667], [1.60384692E12, 4.6], [1.60384662E12, 8.283333333333333], [1.60384656E12, 6.066666666666666], [1.60384626E12, 5.116666666666666], [1.6038462E12, 3.216666666666667], [1.60384686E12, 6.45], [1.6038468E12, 4.25], [1.6038465E12, 9.283333333333333], [1.60384644E12, 5.633333333333334], [1.60384614E12, 5.566666666666666], [1.60384608E12, 4.083333333333333], [1.60384674E12, 6.266666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60384698E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 3.1166666666666667, "minX": 1.60384608E12, "maxY": 9.283333333333333, "series": [{"data": [[1.60384668E12, 5.983333333333333], [1.60384638E12, 5.466666666666667], [1.60384632E12, 4.316666666666666], [1.60384698E12, 3.1166666666666667], [1.60384692E12, 4.6], [1.60384662E12, 8.283333333333333], [1.60384656E12, 6.066666666666666], [1.60384626E12, 5.116666666666666], [1.6038462E12, 3.216666666666667], [1.60384686E12, 6.45], [1.6038468E12, 4.25], [1.6038465E12, 9.283333333333333], [1.60384644E12, 5.633333333333334], [1.60384614E12, 5.566666666666666], [1.60384608E12, 4.083333333333333], [1.60384674E12, 6.266666666666667]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60384698E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 3.1166666666666667, "minX": 1.60384608E12, "maxY": 9.283333333333333, "series": [{"data": [[1.60384668E12, 5.983333333333333], [1.60384638E12, 5.466666666666667], [1.60384632E12, 4.316666666666666], [1.60384698E12, 3.1166666666666667], [1.60384692E12, 4.6], [1.60384662E12, 8.283333333333333], [1.60384656E12, 6.066666666666666], [1.60384626E12, 5.116666666666666], [1.6038462E12, 3.216666666666667], [1.60384686E12, 6.45], [1.6038468E12, 4.25], [1.6038465E12, 9.283333333333333], [1.60384644E12, 5.633333333333334], [1.60384614E12, 5.566666666666666], [1.60384608E12, 4.083333333333333], [1.60384674E12, 6.266666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60384698E12, "title": "Total Transactions Per Second"}},
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

