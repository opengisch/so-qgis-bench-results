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
        data: {"result": {"minY": 130.0, "minX": 0.0, "maxY": 12423.0, "series": [{"data": [[0.0, 130.0], [0.1, 250.0], [0.2, 403.0], [0.3, 424.0], [0.4, 428.0], [0.5, 432.0], [0.6, 443.0], [0.7, 444.0], [0.8, 448.0], [0.9, 451.0], [1.0, 454.0], [1.1, 458.0], [1.2, 460.0], [1.3, 463.0], [1.4, 463.0], [1.5, 463.0], [1.6, 464.0], [1.7, 465.0], [1.8, 465.0], [1.9, 467.0], [2.0, 467.0], [2.1, 469.0], [2.2, 470.0], [2.3, 471.0], [2.4, 472.0], [2.5, 473.0], [2.6, 473.0], [2.7, 474.0], [2.8, 475.0], [2.9, 475.0], [3.0, 476.0], [3.1, 476.0], [3.2, 477.0], [3.3, 477.0], [3.4, 478.0], [3.5, 479.0], [3.6, 480.0], [3.7, 481.0], [3.8, 481.0], [3.9, 482.0], [4.0, 484.0], [4.1, 485.0], [4.2, 486.0], [4.3, 486.0], [4.4, 486.0], [4.5, 488.0], [4.6, 489.0], [4.7, 491.0], [4.8, 492.0], [4.9, 493.0], [5.0, 494.0], [5.1, 495.0], [5.2, 496.0], [5.3, 497.0], [5.4, 498.0], [5.5, 499.0], [5.6, 501.0], [5.7, 501.0], [5.8, 503.0], [5.9, 504.0], [6.0, 508.0], [6.1, 509.0], [6.2, 511.0], [6.3, 513.0], [6.4, 515.0], [6.5, 520.0], [6.6, 521.0], [6.7, 522.0], [6.8, 523.0], [6.9, 527.0], [7.0, 529.0], [7.1, 530.0], [7.2, 531.0], [7.3, 533.0], [7.4, 534.0], [7.5, 535.0], [7.6, 537.0], [7.7, 540.0], [7.8, 543.0], [7.9, 546.0], [8.0, 548.0], [8.1, 551.0], [8.2, 553.0], [8.3, 555.0], [8.4, 558.0], [8.5, 562.0], [8.6, 568.0], [8.7, 574.0], [8.8, 580.0], [8.9, 583.0], [9.0, 586.0], [9.1, 587.0], [9.2, 591.0], [9.3, 595.0], [9.4, 598.0], [9.5, 601.0], [9.6, 604.0], [9.7, 612.0], [9.8, 618.0], [9.9, 624.0], [10.0, 629.0], [10.1, 632.0], [10.2, 642.0], [10.3, 645.0], [10.4, 648.0], [10.5, 652.0], [10.6, 654.0], [10.7, 663.0], [10.8, 670.0], [10.9, 673.0], [11.0, 678.0], [11.1, 679.0], [11.2, 682.0], [11.3, 686.0], [11.4, 689.0], [11.5, 692.0], [11.6, 693.0], [11.7, 696.0], [11.8, 700.0], [11.9, 702.0], [12.0, 704.0], [12.1, 708.0], [12.2, 709.0], [12.3, 712.0], [12.4, 713.0], [12.5, 716.0], [12.6, 718.0], [12.7, 720.0], [12.8, 723.0], [12.9, 725.0], [13.0, 726.0], [13.1, 728.0], [13.2, 731.0], [13.3, 733.0], [13.4, 734.0], [13.5, 735.0], [13.6, 737.0], [13.7, 738.0], [13.8, 741.0], [13.9, 745.0], [14.0, 745.0], [14.1, 748.0], [14.2, 749.0], [14.3, 751.0], [14.4, 753.0], [14.5, 754.0], [14.6, 755.0], [14.7, 756.0], [14.8, 757.0], [14.9, 758.0], [15.0, 759.0], [15.1, 760.0], [15.2, 760.0], [15.3, 762.0], [15.4, 763.0], [15.5, 764.0], [15.6, 765.0], [15.7, 768.0], [15.8, 769.0], [15.9, 772.0], [16.0, 772.0], [16.1, 773.0], [16.2, 774.0], [16.3, 775.0], [16.4, 778.0], [16.5, 779.0], [16.6, 783.0], [16.7, 785.0], [16.8, 786.0], [16.9, 787.0], [17.0, 788.0], [17.1, 790.0], [17.2, 790.0], [17.3, 793.0], [17.4, 793.0], [17.5, 794.0], [17.6, 794.0], [17.7, 796.0], [17.8, 798.0], [17.9, 800.0], [18.0, 801.0], [18.1, 802.0], [18.2, 803.0], [18.3, 804.0], [18.4, 805.0], [18.5, 806.0], [18.6, 807.0], [18.7, 808.0], [18.8, 809.0], [18.9, 810.0], [19.0, 812.0], [19.1, 813.0], [19.2, 814.0], [19.3, 815.0], [19.4, 816.0], [19.5, 818.0], [19.6, 818.0], [19.7, 819.0], [19.8, 821.0], [19.9, 822.0], [20.0, 823.0], [20.1, 825.0], [20.2, 826.0], [20.3, 828.0], [20.4, 829.0], [20.5, 830.0], [20.6, 831.0], [20.7, 836.0], [20.8, 838.0], [20.9, 842.0], [21.0, 845.0], [21.1, 847.0], [21.2, 847.0], [21.3, 849.0], [21.4, 850.0], [21.5, 852.0], [21.6, 854.0], [21.7, 857.0], [21.8, 860.0], [21.9, 862.0], [22.0, 863.0], [22.1, 865.0], [22.2, 865.0], [22.3, 868.0], [22.4, 869.0], [22.5, 870.0], [22.6, 871.0], [22.7, 873.0], [22.8, 875.0], [22.9, 876.0], [23.0, 878.0], [23.1, 879.0], [23.2, 880.0], [23.3, 881.0], [23.4, 885.0], [23.5, 887.0], [23.6, 888.0], [23.7, 891.0], [23.8, 894.0], [23.9, 895.0], [24.0, 896.0], [24.1, 897.0], [24.2, 898.0], [24.3, 899.0], [24.4, 900.0], [24.5, 904.0], [24.6, 905.0], [24.7, 908.0], [24.8, 909.0], [24.9, 914.0], [25.0, 917.0], [25.1, 919.0], [25.2, 921.0], [25.3, 927.0], [25.4, 931.0], [25.5, 934.0], [25.6, 937.0], [25.7, 939.0], [25.8, 939.0], [25.9, 940.0], [26.0, 943.0], [26.1, 946.0], [26.2, 948.0], [26.3, 949.0], [26.4, 950.0], [26.5, 951.0], [26.6, 954.0], [26.7, 954.0], [26.8, 956.0], [26.9, 958.0], [27.0, 959.0], [27.1, 961.0], [27.2, 964.0], [27.3, 968.0], [27.4, 971.0], [27.5, 973.0], [27.6, 980.0], [27.7, 984.0], [27.8, 985.0], [27.9, 987.0], [28.0, 988.0], [28.1, 990.0], [28.2, 991.0], [28.3, 993.0], [28.4, 994.0], [28.5, 995.0], [28.6, 997.0], [28.7, 1000.0], [28.8, 1003.0], [28.9, 1006.0], [29.0, 1008.0], [29.1, 1010.0], [29.2, 1013.0], [29.3, 1015.0], [29.4, 1019.0], [29.5, 1021.0], [29.6, 1022.0], [29.7, 1027.0], [29.8, 1030.0], [29.9, 1034.0], [30.0, 1035.0], [30.1, 1038.0], [30.2, 1041.0], [30.3, 1042.0], [30.4, 1045.0], [30.5, 1047.0], [30.6, 1050.0], [30.7, 1050.0], [30.8, 1052.0], [30.9, 1055.0], [31.0, 1058.0], [31.1, 1063.0], [31.2, 1066.0], [31.3, 1069.0], [31.4, 1070.0], [31.5, 1074.0], [31.6, 1075.0], [31.7, 1080.0], [31.8, 1083.0], [31.9, 1088.0], [32.0, 1090.0], [32.1, 1092.0], [32.2, 1094.0], [32.3, 1100.0], [32.4, 1101.0], [32.5, 1105.0], [32.6, 1107.0], [32.7, 1107.0], [32.8, 1108.0], [32.9, 1111.0], [33.0, 1112.0], [33.1, 1113.0], [33.2, 1115.0], [33.3, 1116.0], [33.4, 1116.0], [33.5, 1118.0], [33.6, 1120.0], [33.7, 1121.0], [33.8, 1123.0], [33.9, 1125.0], [34.0, 1126.0], [34.1, 1127.0], [34.2, 1129.0], [34.3, 1129.0], [34.4, 1132.0], [34.5, 1134.0], [34.6, 1136.0], [34.7, 1139.0], [34.8, 1140.0], [34.9, 1141.0], [35.0, 1142.0], [35.1, 1143.0], [35.2, 1145.0], [35.3, 1146.0], [35.4, 1147.0], [35.5, 1150.0], [35.6, 1151.0], [35.7, 1152.0], [35.8, 1153.0], [35.9, 1155.0], [36.0, 1158.0], [36.1, 1162.0], [36.2, 1165.0], [36.3, 1168.0], [36.4, 1170.0], [36.5, 1172.0], [36.6, 1178.0], [36.7, 1179.0], [36.8, 1185.0], [36.9, 1188.0], [37.0, 1189.0], [37.1, 1193.0], [37.2, 1195.0], [37.3, 1197.0], [37.4, 1200.0], [37.5, 1203.0], [37.6, 1206.0], [37.7, 1208.0], [37.8, 1212.0], [37.9, 1213.0], [38.0, 1215.0], [38.1, 1218.0], [38.2, 1220.0], [38.3, 1222.0], [38.4, 1225.0], [38.5, 1226.0], [38.6, 1230.0], [38.7, 1233.0], [38.8, 1236.0], [38.9, 1238.0], [39.0, 1240.0], [39.1, 1242.0], [39.2, 1245.0], [39.3, 1248.0], [39.4, 1250.0], [39.5, 1252.0], [39.6, 1254.0], [39.7, 1257.0], [39.8, 1258.0], [39.9, 1262.0], [40.0, 1264.0], [40.1, 1267.0], [40.2, 1270.0], [40.3, 1273.0], [40.4, 1276.0], [40.5, 1281.0], [40.6, 1284.0], [40.7, 1286.0], [40.8, 1290.0], [40.9, 1293.0], [41.0, 1295.0], [41.1, 1301.0], [41.2, 1304.0], [41.3, 1306.0], [41.4, 1311.0], [41.5, 1314.0], [41.6, 1318.0], [41.7, 1321.0], [41.8, 1326.0], [41.9, 1329.0], [42.0, 1333.0], [42.1, 1336.0], [42.2, 1338.0], [42.3, 1339.0], [42.4, 1340.0], [42.5, 1343.0], [42.6, 1345.0], [42.7, 1349.0], [42.8, 1350.0], [42.9, 1352.0], [43.0, 1354.0], [43.1, 1356.0], [43.2, 1359.0], [43.3, 1361.0], [43.4, 1365.0], [43.5, 1367.0], [43.6, 1372.0], [43.7, 1374.0], [43.8, 1378.0], [43.9, 1382.0], [44.0, 1383.0], [44.1, 1388.0], [44.2, 1391.0], [44.3, 1393.0], [44.4, 1396.0], [44.5, 1400.0], [44.6, 1402.0], [44.7, 1405.0], [44.8, 1406.0], [44.9, 1407.0], [45.0, 1410.0], [45.1, 1412.0], [45.2, 1414.0], [45.3, 1420.0], [45.4, 1423.0], [45.5, 1426.0], [45.6, 1429.0], [45.7, 1433.0], [45.8, 1435.0], [45.9, 1440.0], [46.0, 1442.0], [46.1, 1445.0], [46.2, 1447.0], [46.3, 1449.0], [46.4, 1451.0], [46.5, 1453.0], [46.6, 1455.0], [46.7, 1456.0], [46.8, 1458.0], [46.9, 1462.0], [47.0, 1467.0], [47.1, 1470.0], [47.2, 1473.0], [47.3, 1474.0], [47.4, 1477.0], [47.5, 1480.0], [47.6, 1482.0], [47.7, 1484.0], [47.8, 1489.0], [47.9, 1490.0], [48.0, 1492.0], [48.1, 1496.0], [48.2, 1498.0], [48.3, 1499.0], [48.4, 1503.0], [48.5, 1508.0], [48.6, 1511.0], [48.7, 1517.0], [48.8, 1521.0], [48.9, 1525.0], [49.0, 1527.0], [49.1, 1530.0], [49.2, 1534.0], [49.3, 1538.0], [49.4, 1544.0], [49.5, 1548.0], [49.6, 1552.0], [49.7, 1558.0], [49.8, 1560.0], [49.9, 1564.0], [50.0, 1565.0], [50.1, 1567.0], [50.2, 1569.0], [50.3, 1575.0], [50.4, 1579.0], [50.5, 1582.0], [50.6, 1583.0], [50.7, 1587.0], [50.8, 1591.0], [50.9, 1597.0], [51.0, 1603.0], [51.1, 1606.0], [51.2, 1610.0], [51.3, 1619.0], [51.4, 1625.0], [51.5, 1632.0], [51.6, 1638.0], [51.7, 1641.0], [51.8, 1649.0], [51.9, 1655.0], [52.0, 1661.0], [52.1, 1664.0], [52.2, 1666.0], [52.3, 1674.0], [52.4, 1679.0], [52.5, 1682.0], [52.6, 1684.0], [52.7, 1687.0], [52.8, 1690.0], [52.9, 1693.0], [53.0, 1697.0], [53.1, 1701.0], [53.2, 1708.0], [53.3, 1711.0], [53.4, 1715.0], [53.5, 1719.0], [53.6, 1722.0], [53.7, 1723.0], [53.8, 1727.0], [53.9, 1733.0], [54.0, 1735.0], [54.1, 1738.0], [54.2, 1741.0], [54.3, 1743.0], [54.4, 1749.0], [54.5, 1755.0], [54.6, 1759.0], [54.7, 1763.0], [54.8, 1765.0], [54.9, 1766.0], [55.0, 1771.0], [55.1, 1773.0], [55.2, 1777.0], [55.3, 1779.0], [55.4, 1782.0], [55.5, 1787.0], [55.6, 1791.0], [55.7, 1796.0], [55.8, 1802.0], [55.9, 1809.0], [56.0, 1812.0], [56.1, 1815.0], [56.2, 1823.0], [56.3, 1835.0], [56.4, 1838.0], [56.5, 1842.0], [56.6, 1845.0], [56.7, 1848.0], [56.8, 1852.0], [56.9, 1857.0], [57.0, 1863.0], [57.1, 1867.0], [57.2, 1869.0], [57.3, 1875.0], [57.4, 1878.0], [57.5, 1884.0], [57.6, 1886.0], [57.7, 1890.0], [57.8, 1895.0], [57.9, 1898.0], [58.0, 1902.0], [58.1, 1909.0], [58.2, 1911.0], [58.3, 1913.0], [58.4, 1915.0], [58.5, 1920.0], [58.6, 1922.0], [58.7, 1925.0], [58.8, 1931.0], [58.9, 1934.0], [59.0, 1946.0], [59.1, 1955.0], [59.2, 1958.0], [59.3, 1961.0], [59.4, 1972.0], [59.5, 1977.0], [59.6, 1985.0], [59.7, 1991.0], [59.8, 1997.0], [59.9, 2006.0], [60.0, 2011.0], [60.1, 2018.0], [60.2, 2022.0], [60.3, 2029.0], [60.4, 2034.0], [60.5, 2037.0], [60.6, 2044.0], [60.7, 2050.0], [60.8, 2055.0], [60.9, 2057.0], [61.0, 2059.0], [61.1, 2065.0], [61.2, 2069.0], [61.3, 2072.0], [61.4, 2075.0], [61.5, 2080.0], [61.6, 2086.0], [61.7, 2090.0], [61.8, 2096.0], [61.9, 2099.0], [62.0, 2105.0], [62.1, 2111.0], [62.2, 2118.0], [62.3, 2120.0], [62.4, 2123.0], [62.5, 2125.0], [62.6, 2130.0], [62.7, 2133.0], [62.8, 2137.0], [62.9, 2142.0], [63.0, 2149.0], [63.1, 2155.0], [63.2, 2168.0], [63.3, 2173.0], [63.4, 2181.0], [63.5, 2186.0], [63.6, 2191.0], [63.7, 2194.0], [63.8, 2201.0], [63.9, 2206.0], [64.0, 2211.0], [64.1, 2221.0], [64.2, 2229.0], [64.3, 2234.0], [64.4, 2239.0], [64.5, 2243.0], [64.6, 2252.0], [64.7, 2256.0], [64.8, 2259.0], [64.9, 2268.0], [65.0, 2273.0], [65.1, 2282.0], [65.2, 2284.0], [65.3, 2289.0], [65.4, 2290.0], [65.5, 2294.0], [65.6, 2296.0], [65.7, 2302.0], [65.8, 2303.0], [65.9, 2307.0], [66.0, 2312.0], [66.1, 2319.0], [66.2, 2331.0], [66.3, 2338.0], [66.4, 2343.0], [66.5, 2346.0], [66.6, 2351.0], [66.7, 2359.0], [66.8, 2363.0], [66.9, 2371.0], [67.0, 2379.0], [67.1, 2382.0], [67.2, 2385.0], [67.3, 2388.0], [67.4, 2395.0], [67.5, 2401.0], [67.6, 2407.0], [67.7, 2411.0], [67.8, 2420.0], [67.9, 2426.0], [68.0, 2435.0], [68.1, 2438.0], [68.2, 2441.0], [68.3, 2445.0], [68.4, 2450.0], [68.5, 2455.0], [68.6, 2456.0], [68.7, 2461.0], [68.8, 2470.0], [68.9, 2476.0], [69.0, 2482.0], [69.1, 2490.0], [69.2, 2494.0], [69.3, 2502.0], [69.4, 2508.0], [69.5, 2513.0], [69.6, 2523.0], [69.7, 2525.0], [69.8, 2530.0], [69.9, 2538.0], [70.0, 2540.0], [70.1, 2548.0], [70.2, 2552.0], [70.3, 2558.0], [70.4, 2563.0], [70.5, 2571.0], [70.6, 2574.0], [70.7, 2579.0], [70.8, 2585.0], [70.9, 2589.0], [71.0, 2599.0], [71.1, 2603.0], [71.2, 2610.0], [71.3, 2615.0], [71.4, 2620.0], [71.5, 2625.0], [71.6, 2629.0], [71.7, 2640.0], [71.8, 2644.0], [71.9, 2651.0], [72.0, 2659.0], [72.1, 2668.0], [72.2, 2669.0], [72.3, 2675.0], [72.4, 2677.0], [72.5, 2681.0], [72.6, 2690.0], [72.7, 2695.0], [72.8, 2703.0], [72.9, 2712.0], [73.0, 2720.0], [73.1, 2728.0], [73.2, 2746.0], [73.3, 2755.0], [73.4, 2759.0], [73.5, 2767.0], [73.6, 2779.0], [73.7, 2801.0], [73.8, 2806.0], [73.9, 2815.0], [74.0, 2822.0], [74.1, 2839.0], [74.2, 2850.0], [74.3, 2854.0], [74.4, 2858.0], [74.5, 2864.0], [74.6, 2871.0], [74.7, 2885.0], [74.8, 2893.0], [74.9, 2907.0], [75.0, 2910.0], [75.1, 2916.0], [75.2, 2928.0], [75.3, 2936.0], [75.4, 2943.0], [75.5, 2950.0], [75.6, 2955.0], [75.7, 2965.0], [75.8, 2972.0], [75.9, 2983.0], [76.0, 2987.0], [76.1, 2993.0], [76.2, 3001.0], [76.3, 3007.0], [76.4, 3010.0], [76.5, 3022.0], [76.6, 3027.0], [76.7, 3037.0], [76.8, 3047.0], [76.9, 3051.0], [77.0, 3064.0], [77.1, 3067.0], [77.2, 3074.0], [77.3, 3079.0], [77.4, 3086.0], [77.5, 3096.0], [77.6, 3097.0], [77.7, 3101.0], [77.8, 3111.0], [77.9, 3122.0], [78.0, 3131.0], [78.1, 3138.0], [78.2, 3155.0], [78.3, 3163.0], [78.4, 3168.0], [78.5, 3178.0], [78.6, 3184.0], [78.7, 3190.0], [78.8, 3194.0], [78.9, 3203.0], [79.0, 3210.0], [79.1, 3216.0], [79.2, 3221.0], [79.3, 3226.0], [79.4, 3232.0], [79.5, 3235.0], [79.6, 3236.0], [79.7, 3241.0], [79.8, 3249.0], [79.9, 3253.0], [80.0, 3258.0], [80.1, 3266.0], [80.2, 3271.0], [80.3, 3280.0], [80.4, 3285.0], [80.5, 3294.0], [80.6, 3304.0], [80.7, 3312.0], [80.8, 3319.0], [80.9, 3324.0], [81.0, 3334.0], [81.1, 3343.0], [81.2, 3348.0], [81.3, 3354.0], [81.4, 3365.0], [81.5, 3374.0], [81.6, 3386.0], [81.7, 3395.0], [81.8, 3406.0], [81.9, 3416.0], [82.0, 3426.0], [82.1, 3443.0], [82.2, 3450.0], [82.3, 3455.0], [82.4, 3460.0], [82.5, 3466.0], [82.6, 3470.0], [82.7, 3476.0], [82.8, 3482.0], [82.9, 3505.0], [83.0, 3511.0], [83.1, 3517.0], [83.2, 3523.0], [83.3, 3528.0], [83.4, 3536.0], [83.5, 3540.0], [83.6, 3550.0], [83.7, 3561.0], [83.8, 3567.0], [83.9, 3582.0], [84.0, 3587.0], [84.1, 3600.0], [84.2, 3606.0], [84.3, 3617.0], [84.4, 3623.0], [84.5, 3627.0], [84.6, 3630.0], [84.7, 3637.0], [84.8, 3646.0], [84.9, 3653.0], [85.0, 3662.0], [85.1, 3665.0], [85.2, 3674.0], [85.3, 3681.0], [85.4, 3689.0], [85.5, 3695.0], [85.6, 3697.0], [85.7, 3702.0], [85.8, 3709.0], [85.9, 3716.0], [86.0, 3724.0], [86.1, 3736.0], [86.2, 3745.0], [86.3, 3754.0], [86.4, 3760.0], [86.5, 3767.0], [86.6, 3778.0], [86.7, 3783.0], [86.8, 3795.0], [86.9, 3807.0], [87.0, 3815.0], [87.1, 3827.0], [87.2, 3834.0], [87.3, 3836.0], [87.4, 3851.0], [87.5, 3857.0], [87.6, 3861.0], [87.7, 3865.0], [87.8, 3880.0], [87.9, 3894.0], [88.0, 3900.0], [88.1, 3915.0], [88.2, 3925.0], [88.3, 3933.0], [88.4, 3943.0], [88.5, 3958.0], [88.6, 3965.0], [88.7, 3976.0], [88.8, 3985.0], [88.9, 3995.0], [89.0, 4001.0], [89.1, 4013.0], [89.2, 4022.0], [89.3, 4037.0], [89.4, 4061.0], [89.5, 4070.0], [89.6, 4081.0], [89.7, 4097.0], [89.8, 4109.0], [89.9, 4123.0], [90.0, 4132.0], [90.1, 4146.0], [90.2, 4155.0], [90.3, 4166.0], [90.4, 4176.0], [90.5, 4181.0], [90.6, 4192.0], [90.7, 4201.0], [90.8, 4203.0], [90.9, 4215.0], [91.0, 4222.0], [91.1, 4232.0], [91.2, 4261.0], [91.3, 4291.0], [91.4, 4293.0], [91.5, 4300.0], [91.6, 4314.0], [91.7, 4331.0], [91.8, 4338.0], [91.9, 4349.0], [92.0, 4368.0], [92.1, 4384.0], [92.2, 4410.0], [92.3, 4418.0], [92.4, 4429.0], [92.5, 4437.0], [92.6, 4449.0], [92.7, 4461.0], [92.8, 4479.0], [92.9, 4495.0], [93.0, 4524.0], [93.1, 4546.0], [93.2, 4563.0], [93.3, 4582.0], [93.4, 4594.0], [93.5, 4636.0], [93.6, 4656.0], [93.7, 4680.0], [93.8, 4694.0], [93.9, 4721.0], [94.0, 4757.0], [94.1, 4785.0], [94.2, 4806.0], [94.3, 4828.0], [94.4, 4842.0], [94.5, 4878.0], [94.6, 4913.0], [94.7, 4964.0], [94.8, 4992.0], [94.9, 5036.0], [95.0, 5088.0], [95.1, 5130.0], [95.2, 5188.0], [95.3, 5298.0], [95.4, 5336.0], [95.5, 5359.0], [95.6, 5385.0], [95.7, 5406.0], [95.8, 5418.0], [95.9, 5455.0], [96.0, 5545.0], [96.1, 5621.0], [96.2, 5651.0], [96.3, 5720.0], [96.4, 5763.0], [96.5, 5829.0], [96.6, 5865.0], [96.7, 5928.0], [96.8, 5967.0], [96.9, 6083.0], [97.0, 6195.0], [97.1, 6220.0], [97.2, 6336.0], [97.3, 6441.0], [97.4, 6484.0], [97.5, 6559.0], [97.6, 6671.0], [97.7, 6723.0], [97.8, 6883.0], [97.9, 6983.0], [98.0, 7042.0], [98.1, 7127.0], [98.2, 7184.0], [98.3, 7215.0], [98.4, 7267.0], [98.5, 7336.0], [98.6, 7395.0], [98.7, 7576.0], [98.8, 7618.0], [98.9, 7704.0], [99.0, 7761.0], [99.1, 7911.0], [99.2, 8259.0], [99.3, 9046.0], [99.4, 9278.0], [99.5, 9802.0], [99.6, 10958.0], [99.7, 12017.0], [99.8, 12174.0], [99.9, 12361.0], [100.0, 12423.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 341.0, "series": [{"data": [[100.0, 1.0], [200.0, 6.0], [300.0, 3.0], [400.0, 280.0], [500.0, 206.0], [600.0, 124.0], [700.0, 320.0], [800.0, 341.0], [900.0, 226.0], [1000.0, 192.0], [1100.0, 268.0], [1200.0, 195.0], [1300.0, 179.0], [1400.0, 201.0], [1500.0, 140.0], [1600.0, 112.0], [1700.0, 141.0], [1800.0, 115.0], [1900.0, 99.0], [2000.0, 109.0], [2100.0, 98.0], [2300.0, 97.0], [2200.0, 97.0], [2400.0, 95.0], [2500.0, 92.0], [2600.0, 90.0], [2800.0, 63.0], [2700.0, 49.0], [2900.0, 68.0], [3000.0, 78.0], [3100.0, 63.0], [3200.0, 89.0], [3300.0, 66.0], [3400.0, 58.0], [3500.0, 64.0], [3600.0, 82.0], [3700.0, 64.0], [3800.0, 59.0], [3900.0, 52.0], [4000.0, 41.0], [4300.0, 37.0], [4200.0, 42.0], [4100.0, 49.0], [4500.0, 25.0], [4600.0, 21.0], [4400.0, 39.0], [4800.0, 23.0], [4700.0, 17.0], [4900.0, 13.0], [5100.0, 10.0], [5000.0, 11.0], [5200.0, 5.0], [5300.0, 20.0], [5400.0, 13.0], [5600.0, 11.0], [5500.0, 7.0], [5700.0, 10.0], [5800.0, 10.0], [6100.0, 8.0], [6000.0, 4.0], [5900.0, 9.0], [6200.0, 7.0], [6300.0, 3.0], [6600.0, 8.0], [6400.0, 9.0], [6500.0, 5.0], [6800.0, 7.0], [6900.0, 4.0], [6700.0, 4.0], [7000.0, 7.0], [7100.0, 10.0], [7300.0, 8.0], [7200.0, 10.0], [7400.0, 3.0], [7600.0, 8.0], [7500.0, 4.0], [7700.0, 9.0], [7800.0, 1.0], [7900.0, 1.0], [8100.0, 2.0], [8000.0, 1.0], [8600.0, 1.0], [8200.0, 2.0], [9200.0, 1.0], [8900.0, 1.0], [8800.0, 2.0], [9100.0, 2.0], [9000.0, 4.0], [9400.0, 1.0], [9300.0, 1.0], [9600.0, 1.0], [9700.0, 1.0], [9800.0, 2.0], [10100.0, 1.0], [9900.0, 1.0], [10400.0, 1.0], [10900.0, 2.0], [11200.0, 1.0], [11400.0, 1.0], [11500.0, 1.0], [12100.0, 5.0], [12200.0, 2.0], [12000.0, 3.0], [11900.0, 1.0], [12400.0, 2.0], [12300.0, 4.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 12400.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 291.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2720.0, "series": [{"data": [[0.0, 291.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 2251.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 2720.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 8.857142857142856, "minX": 1.6042308E12, "maxY": 12.0, "series": [{"data": [[1.60423086E12, 12.0], [1.60423116E12, 12.0], [1.60423176E12, 8.857142857142856], [1.6042308E12, 11.32258064516129], [1.60423146E12, 12.0], [1.6042311E12, 12.0], [1.6042314E12, 12.0], [1.60423104E12, 12.0], [1.6042317E12, 12.0], [1.60423164E12, 12.0], [1.60423134E12, 12.0], [1.60423098E12, 12.0], [1.60423128E12, 12.0], [1.60423092E12, 12.0], [1.60423158E12, 12.0], [1.60423152E12, 12.0], [1.60423122E12, 12.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60423176E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 2094.3859214040426, "minX": 1.0, "maxY": 12369.0, "series": [{"data": [[4.0, 6098.5], [8.0, 4283.0], [2.0, 12017.0], [1.0, 12060.0], [9.0, 12369.0], [5.0, 6198.0], [10.0, 6330.0], [11.0, 6396.0], [6.0, 6347.5], [12.0, 2094.3859214040426], [3.0, 11949.0], [7.0, 4285.333333333334]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[11.979475484606624, 2112.430824781451]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 12.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 179.11666666666667, "minX": 1.6042308E12, "maxY": 496491.65, "series": [{"data": [[1.60423086E12, 141635.38333333333], [1.60423116E12, 196534.68333333332], [1.60423176E12, 29309.15], [1.6042308E12, 46444.683333333334], [1.60423146E12, 240701.68333333332], [1.6042311E12, 358566.2833333333], [1.6042314E12, 68240.25], [1.60423104E12, 271382.11666666664], [1.6042317E12, 255513.36666666667], [1.60423164E12, 285838.56666666665], [1.60423134E12, 236263.23333333334], [1.60423098E12, 351766.48333333334], [1.60423128E12, 351519.4], [1.60423092E12, 382669.2166666667], [1.60423158E12, 355289.2833333333], [1.60423152E12, 496491.65], [1.60423122E12, 182872.8]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60423086E12, 2985.4333333333334], [1.60423116E12, 3217.9], [1.60423176E12, 179.11666666666667], [1.6042308E12, 504.03333333333336], [1.60423146E12, 3089.95], [1.6042311E12, 1449.2333333333333], [1.6042314E12, 4164.1], [1.60423104E12, 2991.633333333333], [1.6042317E12, 3232.516666666667], [1.60423164E12, 2333.516666666667], [1.60423134E12, 3290.75], [1.60423098E12, 2038.1166666666666], [1.60423128E12, 3449.1666666666665], [1.60423092E12, 2556.483333333333], [1.60423158E12, 3226.516666666667], [1.60423152E12, 2043.7833333333333], [1.60423122E12, 4738.7]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60423176E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 1379.283950617285, "minX": 1.6042308E12, "maxY": 10864.619047619046, "series": [{"data": [[1.60423086E12, 2211.3474320241703], [1.60423116E12, 1935.6432584269655], [1.60423176E12, 10864.619047619046], [1.6042308E12, 1708.6935483870973], [1.60423146E12, 1969.5945945945944], [1.6042311E12, 4150.085714285717], [1.6042314E12, 1540.162280701754], [1.60423104E12, 1992.3005780346825], [1.6042317E12, 1918.7596685082872], [1.60423164E12, 2679.1198501872664], [1.60423134E12, 1969.315508021392], [1.60423098E12, 3407.2556053811677], [1.60423128E12, 1592.049886621317], [1.60423092E12, 2169.0127388535034], [1.60423158E12, 1985.444141689373], [1.60423152E12, 3102.9173913043487], [1.60423122E12, 1379.283950617285]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60423176E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 1379.111111111111, "minX": 1.6042308E12, "maxY": 10864.0, "series": [{"data": [[1.60423086E12, 2211.078549848943], [1.60423116E12, 1935.345505617978], [1.60423176E12, 10864.0], [1.6042308E12, 1708.3548387096776], [1.60423146E12, 1969.3135135135144], [1.6042311E12, 4149.085714285717], [1.6042314E12, 1540.076754385965], [1.60423104E12, 1991.8988439306352], [1.6042317E12, 1918.4254143646403], [1.60423164E12, 2678.569288389514], [1.60423134E12, 1969.0053475935802], [1.60423098E12, 3406.381165919285], [1.60423128E12, 1591.6145124716545], [1.60423092E12, 2168.3407643312107], [1.60423158E12, 1984.9891008174368], [1.60423152E12, 3101.878260869565], [1.60423122E12, 1379.111111111111]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60423176E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.6042308E12, "maxY": 1.9999999999999991, "series": [{"data": [[1.60423086E12, 0.042296072507552865], [1.60423116E12, 0.0421348314606742], [1.60423176E12, 0.0], [1.6042308E12, 1.9999999999999991], [1.60423146E12, 0.037837837837837875], [1.6042311E12, 0.09142857142857144], [1.6042314E12, 0.041666666666666685], [1.60423104E12, 0.017341040462427765], [1.6042317E12, 0.038674033149171304], [1.60423164E12, 0.04494382022471909], [1.60423134E12, 0.034759358288770054], [1.60423098E12, 0.10313901345291485], [1.60423128E12, 0.03174603174603179], [1.60423092E12, 0.006369426751592357], [1.60423158E12, 0.04359673024523158], [1.60423152E12, 0.07391304347826085], [1.60423122E12, 0.02821869488536155]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60423176E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 130.0, "minX": 1.6042308E12, "maxY": 12423.0, "series": [{"data": [[1.60423086E12, 5425.0], [1.60423116E12, 11495.0], [1.60423176E12, 12423.0], [1.6042308E12, 3640.0], [1.60423146E12, 5365.0], [1.6042311E12, 7911.0], [1.6042314E12, 4291.0], [1.60423104E12, 7216.0], [1.6042317E12, 5900.0], [1.60423164E12, 7678.0], [1.60423134E12, 5775.0], [1.60423098E12, 9802.0], [1.60423128E12, 5038.0], [1.60423092E12, 7761.0], [1.60423158E12, 4832.0], [1.60423152E12, 7742.0], [1.60423122E12, 12185.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60423086E12, 473.97599984169005], [1.60423116E12, 457.21299991488456], [1.60423176E12, 5765.0], [1.6042308E12, 130.0], [1.60423146E12, 516.104982751608], [1.6042311E12, 927.5839999580384], [1.6042314E12, 465.2259997820854], [1.60423104E12, 461.2459998345375], [1.6042317E12, 412.66999913454055], [1.60423164E12, 464.4119999361038], [1.60423134E12, 471.74999982118607], [1.60423098E12, 424.0], [1.60423128E12, 503.955999789238], [1.60423092E12, 586.8449994742871], [1.60423158E12, 465.0], [1.60423152E12, 468.6609967505932], [1.60423122E12, 463.33599959373475]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60423086E12, 474.0], [1.60423116E12, 457.53430003404617], [1.60423176E12, 5765.0], [1.6042308E12, 130.0], [1.60423146E12, 581.2155068993568], [1.6042311E12, 927.7424000167847], [1.6042314E12, 466.0486000871658], [1.60423104E12, 461.870600066185], [1.6042317E12, 415.93700034618377], [1.60423164E12, 464.6532000255585], [1.60423134E12, 472.4250000715256], [1.60423098E12, 424.0], [1.60423128E12, 504.0], [1.60423092E12, 588.3555000901222], [1.60423158E12, 465.0], [1.60423152E12, 480.92710129976274], [1.60423122E12, 464.8696001625061]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60423086E12, 474.0], [1.60423116E12, 457.3914999574423], [1.60423176E12, 5765.0], [1.6042308E12, 130.0], [1.60423146E12, 552.277491375804], [1.6042311E12, 927.6719999790191], [1.6042314E12, 465.6829998910427], [1.60423104E12, 461.59299991726874], [1.6042317E12, 414.4849995672703], [1.60423164E12, 464.5459999680519], [1.60423134E12, 472.12499991059303], [1.60423098E12, 424.0], [1.60423128E12, 504.0], [1.60423092E12, 587.9474997371435], [1.60423158E12, 465.0], [1.60423152E12, 475.4754983752966], [1.60423122E12, 464.18799979686736]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60423086E12, 472.0], [1.60423116E12, 447.0], [1.60423176E12, 5765.0], [1.6042308E12, 130.0], [1.60423146E12, 423.0], [1.6042311E12, 927.0], [1.6042314E12, 453.0], [1.60423104E12, 455.0], [1.6042317E12, 398.0], [1.60423164E12, 463.0], [1.60423134E12, 449.0], [1.60423098E12, 387.0], [1.60423128E12, 493.0], [1.60423092E12, 581.0], [1.60423158E12, 459.0], [1.60423152E12, 454.0], [1.60423122E12, 458.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60423086E12, 1974.0], [1.60423116E12, 1242.5], [1.60423176E12, 12060.0], [1.6042308E12, 1600.0], [1.60423146E12, 1577.0], [1.6042311E12, 4028.0], [1.6042314E12, 1323.0], [1.60423104E12, 2011.5], [1.6042317E12, 1382.5], [1.60423164E12, 1914.0], [1.60423134E12, 1482.0], [1.60423098E12, 2949.0], [1.60423128E12, 1139.0], [1.60423092E12, 1744.5], [1.60423158E12, 1911.0], [1.60423152E12, 2877.5], [1.60423122E12, 903.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60423176E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 487.0, "minX": 1.0, "maxY": 6532.0, "series": [{"data": [[2.0, 4292.0], [8.0, 1356.0], [9.0, 1458.0], [10.0, 1333.0], [11.0, 1245.5], [3.0, 3600.5], [12.0, 1251.5], [13.0, 989.0], [14.0, 872.0], [15.0, 808.0], [16.0, 760.0], [4.0, 2980.5], [1.0, 6532.0], [17.0, 731.5], [18.0, 888.0], [19.0, 773.5], [20.0, 730.0], [5.0, 2470.0], [21.0, 496.0], [22.0, 547.0], [23.0, 529.0], [6.0, 2273.0], [25.0, 487.0], [7.0, 1688.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 25.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 487.0, "minX": 1.0, "maxY": 6532.0, "series": [{"data": [[2.0, 4292.0], [8.0, 1355.5], [9.0, 1458.0], [10.0, 1333.0], [11.0, 1245.5], [3.0, 3599.5], [12.0, 1251.5], [13.0, 989.0], [14.0, 872.0], [15.0, 808.0], [16.0, 760.0], [4.0, 2980.0], [1.0, 6532.0], [17.0, 731.5], [18.0, 888.0], [19.0, 773.5], [20.0, 730.0], [5.0, 2470.0], [21.0, 496.0], [22.0, 547.0], [23.0, 529.0], [6.0, 2273.0], [25.0, 487.0], [7.0, 1687.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 25.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.15, "minX": 1.6042308E12, "maxY": 9.45, "series": [{"data": [[1.60423086E12, 5.516666666666667], [1.60423116E12, 5.933333333333334], [1.60423176E12, 0.15], [1.6042308E12, 1.2333333333333334], [1.60423146E12, 6.166666666666667], [1.6042311E12, 2.9166666666666665], [1.6042314E12, 7.6], [1.60423104E12, 5.766666666666667], [1.6042317E12, 6.033333333333333], [1.60423164E12, 4.45], [1.60423134E12, 6.233333333333333], [1.60423098E12, 3.716666666666667], [1.60423128E12, 7.35], [1.60423092E12, 5.233333333333333], [1.60423158E12, 6.116666666666666], [1.60423152E12, 3.8333333333333335], [1.60423122E12, 9.45]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60423176E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.35, "minX": 1.6042308E12, "maxY": 9.45, "series": [{"data": [[1.60423086E12, 5.516666666666667], [1.60423116E12, 5.933333333333334], [1.60423176E12, 0.35], [1.6042308E12, 1.0333333333333334], [1.60423146E12, 6.166666666666667], [1.6042311E12, 2.9166666666666665], [1.6042314E12, 7.6], [1.60423104E12, 5.766666666666667], [1.6042317E12, 6.033333333333333], [1.60423164E12, 4.45], [1.60423134E12, 6.233333333333333], [1.60423098E12, 3.716666666666667], [1.60423128E12, 7.35], [1.60423092E12, 5.233333333333333], [1.60423158E12, 6.116666666666666], [1.60423152E12, 3.8333333333333335], [1.60423122E12, 9.45]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60423176E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.35, "minX": 1.6042308E12, "maxY": 9.45, "series": [{"data": [[1.60423086E12, 5.516666666666667], [1.60423116E12, 5.933333333333334], [1.60423176E12, 0.35], [1.6042308E12, 1.0333333333333334], [1.60423146E12, 6.166666666666667], [1.6042311E12, 2.9166666666666665], [1.6042314E12, 7.6], [1.60423104E12, 5.766666666666667], [1.6042317E12, 6.033333333333333], [1.60423164E12, 4.45], [1.60423134E12, 6.233333333333333], [1.60423098E12, 3.716666666666667], [1.60423128E12, 7.35], [1.60423092E12, 5.233333333333333], [1.60423158E12, 6.116666666666666], [1.60423152E12, 3.8333333333333335], [1.60423122E12, 9.45]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60423176E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.35, "minX": 1.6042308E12, "maxY": 9.45, "series": [{"data": [[1.60423086E12, 5.516666666666667], [1.60423116E12, 5.933333333333334], [1.60423176E12, 0.35], [1.6042308E12, 1.0333333333333334], [1.60423146E12, 6.166666666666667], [1.6042311E12, 2.9166666666666665], [1.6042314E12, 7.6], [1.60423104E12, 5.766666666666667], [1.6042317E12, 6.033333333333333], [1.60423164E12, 4.45], [1.60423134E12, 6.233333333333333], [1.60423098E12, 3.716666666666667], [1.60423128E12, 7.35], [1.60423092E12, 5.233333333333333], [1.60423158E12, 6.116666666666666], [1.60423152E12, 3.8333333333333335], [1.60423122E12, 9.45]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60423176E12, "title": "Total Transactions Per Second"}},
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

