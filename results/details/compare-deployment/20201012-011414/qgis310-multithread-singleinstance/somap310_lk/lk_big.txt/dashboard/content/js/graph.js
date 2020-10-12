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
        data: {"result": {"minY": 129.0, "minX": 0.0, "maxY": 12528.0, "series": [{"data": [[0.0, 129.0], [0.1, 200.0], [0.2, 365.0], [0.3, 367.0], [0.4, 374.0], [0.5, 388.0], [0.6, 403.0], [0.7, 418.0], [0.8, 424.0], [0.9, 427.0], [1.0, 432.0], [1.1, 436.0], [1.2, 440.0], [1.3, 443.0], [1.4, 444.0], [1.5, 445.0], [1.6, 446.0], [1.7, 447.0], [1.8, 448.0], [1.9, 448.0], [2.0, 449.0], [2.1, 450.0], [2.2, 451.0], [2.3, 451.0], [2.4, 452.0], [2.5, 453.0], [2.6, 454.0], [2.7, 455.0], [2.8, 455.0], [2.9, 457.0], [3.0, 458.0], [3.1, 459.0], [3.2, 459.0], [3.3, 460.0], [3.4, 461.0], [3.5, 462.0], [3.6, 463.0], [3.7, 464.0], [3.8, 465.0], [3.9, 466.0], [4.0, 467.0], [4.1, 468.0], [4.2, 469.0], [4.3, 469.0], [4.4, 470.0], [4.5, 472.0], [4.6, 473.0], [4.7, 473.0], [4.8, 474.0], [4.9, 475.0], [5.0, 475.0], [5.1, 476.0], [5.2, 476.0], [5.3, 477.0], [5.4, 478.0], [5.5, 479.0], [5.6, 480.0], [5.7, 480.0], [5.8, 481.0], [5.9, 481.0], [6.0, 482.0], [6.1, 483.0], [6.2, 484.0], [6.3, 486.0], [6.4, 487.0], [6.5, 488.0], [6.6, 490.0], [6.7, 492.0], [6.8, 493.0], [6.9, 494.0], [7.0, 496.0], [7.1, 496.0], [7.2, 499.0], [7.3, 501.0], [7.4, 503.0], [7.5, 504.0], [7.6, 505.0], [7.7, 507.0], [7.8, 508.0], [7.9, 510.0], [8.0, 515.0], [8.1, 519.0], [8.2, 522.0], [8.3, 527.0], [8.4, 529.0], [8.5, 533.0], [8.6, 537.0], [8.7, 539.0], [8.8, 545.0], [8.9, 548.0], [9.0, 553.0], [9.1, 557.0], [9.2, 564.0], [9.3, 571.0], [9.4, 574.0], [9.5, 579.0], [9.6, 581.0], [9.7, 586.0], [9.8, 590.0], [9.9, 592.0], [10.0, 604.0], [10.1, 610.0], [10.2, 615.0], [10.3, 618.0], [10.4, 624.0], [10.5, 626.0], [10.6, 629.0], [10.7, 631.0], [10.8, 635.0], [10.9, 640.0], [11.0, 643.0], [11.1, 652.0], [11.2, 656.0], [11.3, 660.0], [11.4, 664.0], [11.5, 667.0], [11.6, 673.0], [11.7, 674.0], [11.8, 677.0], [11.9, 680.0], [12.0, 685.0], [12.1, 689.0], [12.2, 691.0], [12.3, 693.0], [12.4, 694.0], [12.5, 695.0], [12.6, 698.0], [12.7, 701.0], [12.8, 703.0], [12.9, 704.0], [13.0, 708.0], [13.1, 709.0], [13.2, 710.0], [13.3, 710.0], [13.4, 713.0], [13.5, 714.0], [13.6, 715.0], [13.7, 717.0], [13.8, 719.0], [13.9, 719.0], [14.0, 721.0], [14.1, 723.0], [14.2, 727.0], [14.3, 728.0], [14.4, 730.0], [14.5, 731.0], [14.6, 735.0], [14.7, 737.0], [14.8, 738.0], [14.9, 740.0], [15.0, 741.0], [15.1, 743.0], [15.2, 744.0], [15.3, 745.0], [15.4, 746.0], [15.5, 747.0], [15.6, 748.0], [15.7, 749.0], [15.8, 750.0], [15.9, 751.0], [16.0, 751.0], [16.1, 754.0], [16.2, 755.0], [16.3, 755.0], [16.4, 756.0], [16.5, 757.0], [16.6, 759.0], [16.7, 761.0], [16.8, 762.0], [16.9, 763.0], [17.0, 764.0], [17.1, 765.0], [17.2, 767.0], [17.3, 768.0], [17.4, 770.0], [17.5, 771.0], [17.6, 772.0], [17.7, 773.0], [17.8, 775.0], [17.9, 776.0], [18.0, 777.0], [18.1, 778.0], [18.2, 780.0], [18.3, 781.0], [18.4, 783.0], [18.5, 785.0], [18.6, 785.0], [18.7, 787.0], [18.8, 788.0], [18.9, 788.0], [19.0, 789.0], [19.1, 790.0], [19.2, 791.0], [19.3, 792.0], [19.4, 793.0], [19.5, 793.0], [19.6, 794.0], [19.7, 795.0], [19.8, 795.0], [19.9, 797.0], [20.0, 798.0], [20.1, 798.0], [20.2, 799.0], [20.3, 800.0], [20.4, 801.0], [20.5, 804.0], [20.6, 805.0], [20.7, 807.0], [20.8, 808.0], [20.9, 809.0], [21.0, 811.0], [21.1, 812.0], [21.2, 813.0], [21.3, 814.0], [21.4, 815.0], [21.5, 816.0], [21.6, 818.0], [21.7, 820.0], [21.8, 821.0], [21.9, 822.0], [22.0, 823.0], [22.1, 824.0], [22.2, 825.0], [22.3, 827.0], [22.4, 829.0], [22.5, 830.0], [22.6, 835.0], [22.7, 839.0], [22.8, 841.0], [22.9, 842.0], [23.0, 847.0], [23.1, 850.0], [23.2, 850.0], [23.3, 852.0], [23.4, 855.0], [23.5, 858.0], [23.6, 861.0], [23.7, 863.0], [23.8, 865.0], [23.9, 870.0], [24.0, 874.0], [24.1, 879.0], [24.2, 883.0], [24.3, 885.0], [24.4, 888.0], [24.5, 891.0], [24.6, 892.0], [24.7, 893.0], [24.8, 898.0], [24.9, 900.0], [25.0, 902.0], [25.1, 904.0], [25.2, 905.0], [25.3, 907.0], [25.4, 909.0], [25.5, 911.0], [25.6, 916.0], [25.7, 918.0], [25.8, 920.0], [25.9, 922.0], [26.0, 924.0], [26.1, 926.0], [26.2, 927.0], [26.3, 928.0], [26.4, 930.0], [26.5, 933.0], [26.6, 935.0], [26.7, 939.0], [26.8, 941.0], [26.9, 943.0], [27.0, 947.0], [27.1, 950.0], [27.2, 951.0], [27.3, 952.0], [27.4, 953.0], [27.5, 954.0], [27.6, 956.0], [27.7, 957.0], [27.8, 959.0], [27.9, 962.0], [28.0, 963.0], [28.1, 966.0], [28.2, 967.0], [28.3, 970.0], [28.4, 972.0], [28.5, 974.0], [28.6, 976.0], [28.7, 978.0], [28.8, 979.0], [28.9, 981.0], [29.0, 984.0], [29.1, 991.0], [29.2, 993.0], [29.3, 996.0], [29.4, 998.0], [29.5, 1000.0], [29.6, 1003.0], [29.7, 1004.0], [29.8, 1006.0], [29.9, 1008.0], [30.0, 1010.0], [30.1, 1012.0], [30.2, 1016.0], [30.3, 1022.0], [30.4, 1024.0], [30.5, 1026.0], [30.6, 1028.0], [30.7, 1029.0], [30.8, 1031.0], [30.9, 1031.0], [31.0, 1035.0], [31.1, 1039.0], [31.2, 1042.0], [31.3, 1048.0], [31.4, 1048.0], [31.5, 1050.0], [31.6, 1050.0], [31.7, 1055.0], [31.8, 1058.0], [31.9, 1059.0], [32.0, 1061.0], [32.1, 1065.0], [32.2, 1066.0], [32.3, 1068.0], [32.4, 1070.0], [32.5, 1071.0], [32.6, 1073.0], [32.7, 1075.0], [32.8, 1077.0], [32.9, 1078.0], [33.0, 1081.0], [33.1, 1083.0], [33.2, 1085.0], [33.3, 1087.0], [33.4, 1089.0], [33.5, 1093.0], [33.6, 1095.0], [33.7, 1097.0], [33.8, 1099.0], [33.9, 1100.0], [34.0, 1101.0], [34.1, 1102.0], [34.2, 1103.0], [34.3, 1105.0], [34.4, 1107.0], [34.5, 1109.0], [34.6, 1112.0], [34.7, 1114.0], [34.8, 1116.0], [34.9, 1118.0], [35.0, 1119.0], [35.1, 1122.0], [35.2, 1123.0], [35.3, 1126.0], [35.4, 1130.0], [35.5, 1134.0], [35.6, 1137.0], [35.7, 1138.0], [35.8, 1139.0], [35.9, 1140.0], [36.0, 1143.0], [36.1, 1144.0], [36.2, 1146.0], [36.3, 1151.0], [36.4, 1156.0], [36.5, 1158.0], [36.6, 1160.0], [36.7, 1161.0], [36.8, 1162.0], [36.9, 1166.0], [37.0, 1168.0], [37.1, 1170.0], [37.2, 1171.0], [37.3, 1172.0], [37.4, 1175.0], [37.5, 1177.0], [37.6, 1180.0], [37.7, 1182.0], [37.8, 1184.0], [37.9, 1186.0], [38.0, 1187.0], [38.1, 1188.0], [38.2, 1191.0], [38.3, 1193.0], [38.4, 1196.0], [38.5, 1199.0], [38.6, 1208.0], [38.7, 1211.0], [38.8, 1215.0], [38.9, 1216.0], [39.0, 1218.0], [39.1, 1219.0], [39.2, 1220.0], [39.3, 1221.0], [39.4, 1224.0], [39.5, 1227.0], [39.6, 1228.0], [39.7, 1233.0], [39.8, 1239.0], [39.9, 1241.0], [40.0, 1243.0], [40.1, 1249.0], [40.2, 1250.0], [40.3, 1251.0], [40.4, 1253.0], [40.5, 1256.0], [40.6, 1258.0], [40.7, 1260.0], [40.8, 1264.0], [40.9, 1265.0], [41.0, 1268.0], [41.1, 1271.0], [41.2, 1271.0], [41.3, 1274.0], [41.4, 1279.0], [41.5, 1285.0], [41.6, 1289.0], [41.7, 1291.0], [41.8, 1294.0], [41.9, 1297.0], [42.0, 1299.0], [42.1, 1301.0], [42.2, 1304.0], [42.3, 1308.0], [42.4, 1312.0], [42.5, 1316.0], [42.6, 1317.0], [42.7, 1320.0], [42.8, 1322.0], [42.9, 1325.0], [43.0, 1327.0], [43.1, 1333.0], [43.2, 1334.0], [43.3, 1336.0], [43.4, 1338.0], [43.5, 1340.0], [43.6, 1343.0], [43.7, 1345.0], [43.8, 1346.0], [43.9, 1349.0], [44.0, 1351.0], [44.1, 1352.0], [44.2, 1355.0], [44.3, 1357.0], [44.4, 1360.0], [44.5, 1361.0], [44.6, 1364.0], [44.7, 1367.0], [44.8, 1370.0], [44.9, 1373.0], [45.0, 1375.0], [45.1, 1379.0], [45.2, 1381.0], [45.3, 1384.0], [45.4, 1387.0], [45.5, 1392.0], [45.6, 1394.0], [45.7, 1397.0], [45.8, 1402.0], [45.9, 1405.0], [46.0, 1408.0], [46.1, 1410.0], [46.2, 1415.0], [46.3, 1416.0], [46.4, 1419.0], [46.5, 1421.0], [46.6, 1424.0], [46.7, 1428.0], [46.8, 1430.0], [46.9, 1431.0], [47.0, 1434.0], [47.1, 1436.0], [47.2, 1438.0], [47.3, 1441.0], [47.4, 1444.0], [47.5, 1446.0], [47.6, 1455.0], [47.7, 1458.0], [47.8, 1460.0], [47.9, 1464.0], [48.0, 1465.0], [48.1, 1468.0], [48.2, 1470.0], [48.3, 1471.0], [48.4, 1474.0], [48.5, 1476.0], [48.6, 1478.0], [48.7, 1483.0], [48.8, 1487.0], [48.9, 1490.0], [49.0, 1492.0], [49.1, 1494.0], [49.2, 1500.0], [49.3, 1503.0], [49.4, 1507.0], [49.5, 1509.0], [49.6, 1515.0], [49.7, 1520.0], [49.8, 1522.0], [49.9, 1525.0], [50.0, 1527.0], [50.1, 1529.0], [50.2, 1533.0], [50.3, 1541.0], [50.4, 1547.0], [50.5, 1551.0], [50.6, 1552.0], [50.7, 1555.0], [50.8, 1556.0], [50.9, 1557.0], [51.0, 1564.0], [51.1, 1567.0], [51.2, 1571.0], [51.3, 1574.0], [51.4, 1577.0], [51.5, 1580.0], [51.6, 1583.0], [51.7, 1586.0], [51.8, 1588.0], [51.9, 1593.0], [52.0, 1597.0], [52.1, 1599.0], [52.2, 1604.0], [52.3, 1606.0], [52.4, 1610.0], [52.5, 1613.0], [52.6, 1618.0], [52.7, 1620.0], [52.8, 1622.0], [52.9, 1625.0], [53.0, 1628.0], [53.1, 1634.0], [53.2, 1641.0], [53.3, 1643.0], [53.4, 1648.0], [53.5, 1651.0], [53.6, 1656.0], [53.7, 1664.0], [53.8, 1667.0], [53.9, 1676.0], [54.0, 1689.0], [54.1, 1693.0], [54.2, 1695.0], [54.3, 1699.0], [54.4, 1702.0], [54.5, 1705.0], [54.6, 1708.0], [54.7, 1712.0], [54.8, 1715.0], [54.9, 1718.0], [55.0, 1722.0], [55.1, 1724.0], [55.2, 1727.0], [55.3, 1728.0], [55.4, 1734.0], [55.5, 1738.0], [55.6, 1741.0], [55.7, 1744.0], [55.8, 1746.0], [55.9, 1748.0], [56.0, 1751.0], [56.1, 1754.0], [56.2, 1762.0], [56.3, 1765.0], [56.4, 1769.0], [56.5, 1777.0], [56.6, 1781.0], [56.7, 1786.0], [56.8, 1793.0], [56.9, 1799.0], [57.0, 1805.0], [57.1, 1810.0], [57.2, 1817.0], [57.3, 1830.0], [57.4, 1836.0], [57.5, 1841.0], [57.6, 1846.0], [57.7, 1853.0], [57.8, 1859.0], [57.9, 1864.0], [58.0, 1867.0], [58.1, 1871.0], [58.2, 1874.0], [58.3, 1879.0], [58.4, 1883.0], [58.5, 1884.0], [58.6, 1887.0], [58.7, 1890.0], [58.8, 1893.0], [58.9, 1903.0], [59.0, 1905.0], [59.1, 1913.0], [59.2, 1920.0], [59.3, 1923.0], [59.4, 1933.0], [59.5, 1935.0], [59.6, 1942.0], [59.7, 1949.0], [59.8, 1954.0], [59.9, 1957.0], [60.0, 1967.0], [60.1, 1974.0], [60.2, 1979.0], [60.3, 1985.0], [60.4, 1991.0], [60.5, 1994.0], [60.6, 1997.0], [60.7, 2004.0], [60.8, 2010.0], [60.9, 2013.0], [61.0, 2015.0], [61.1, 2026.0], [61.2, 2031.0], [61.3, 2033.0], [61.4, 2036.0], [61.5, 2041.0], [61.6, 2045.0], [61.7, 2051.0], [61.8, 2054.0], [61.9, 2058.0], [62.0, 2064.0], [62.1, 2071.0], [62.2, 2077.0], [62.3, 2081.0], [62.4, 2086.0], [62.5, 2094.0], [62.6, 2098.0], [62.7, 2101.0], [62.8, 2109.0], [62.9, 2112.0], [63.0, 2119.0], [63.1, 2127.0], [63.2, 2128.0], [63.3, 2139.0], [63.4, 2142.0], [63.5, 2145.0], [63.6, 2150.0], [63.7, 2152.0], [63.8, 2161.0], [63.9, 2169.0], [64.0, 2173.0], [64.1, 2177.0], [64.2, 2180.0], [64.3, 2186.0], [64.4, 2189.0], [64.5, 2198.0], [64.6, 2206.0], [64.7, 2209.0], [64.8, 2213.0], [64.9, 2222.0], [65.0, 2225.0], [65.1, 2227.0], [65.2, 2231.0], [65.3, 2235.0], [65.4, 2239.0], [65.5, 2245.0], [65.6, 2250.0], [65.7, 2254.0], [65.8, 2255.0], [65.9, 2258.0], [66.0, 2261.0], [66.1, 2271.0], [66.2, 2276.0], [66.3, 2282.0], [66.4, 2288.0], [66.5, 2293.0], [66.6, 2296.0], [66.7, 2299.0], [66.8, 2309.0], [66.9, 2312.0], [67.0, 2315.0], [67.1, 2328.0], [67.2, 2343.0], [67.3, 2347.0], [67.4, 2350.0], [67.5, 2355.0], [67.6, 2367.0], [67.7, 2374.0], [67.8, 2379.0], [67.9, 2386.0], [68.0, 2389.0], [68.1, 2396.0], [68.2, 2402.0], [68.3, 2404.0], [68.4, 2408.0], [68.5, 2411.0], [68.6, 2413.0], [68.7, 2415.0], [68.8, 2422.0], [68.9, 2424.0], [69.0, 2428.0], [69.1, 2432.0], [69.2, 2438.0], [69.3, 2446.0], [69.4, 2450.0], [69.5, 2459.0], [69.6, 2461.0], [69.7, 2464.0], [69.8, 2473.0], [69.9, 2482.0], [70.0, 2485.0], [70.1, 2494.0], [70.2, 2498.0], [70.3, 2504.0], [70.4, 2509.0], [70.5, 2512.0], [70.6, 2516.0], [70.7, 2523.0], [70.8, 2527.0], [70.9, 2535.0], [71.0, 2542.0], [71.1, 2545.0], [71.2, 2551.0], [71.3, 2556.0], [71.4, 2566.0], [71.5, 2574.0], [71.6, 2583.0], [71.7, 2591.0], [71.8, 2602.0], [71.9, 2611.0], [72.0, 2619.0], [72.1, 2628.0], [72.2, 2633.0], [72.3, 2639.0], [72.4, 2647.0], [72.5, 2652.0], [72.6, 2662.0], [72.7, 2664.0], [72.8, 2674.0], [72.9, 2677.0], [73.0, 2684.0], [73.1, 2687.0], [73.2, 2698.0], [73.3, 2712.0], [73.4, 2720.0], [73.5, 2727.0], [73.6, 2731.0], [73.7, 2748.0], [73.8, 2756.0], [73.9, 2758.0], [74.0, 2763.0], [74.1, 2767.0], [74.2, 2771.0], [74.3, 2779.0], [74.4, 2792.0], [74.5, 2800.0], [74.6, 2809.0], [74.7, 2815.0], [74.8, 2818.0], [74.9, 2828.0], [75.0, 2834.0], [75.1, 2845.0], [75.2, 2855.0], [75.3, 2859.0], [75.4, 2866.0], [75.5, 2870.0], [75.6, 2875.0], [75.7, 2886.0], [75.8, 2897.0], [75.9, 2903.0], [76.0, 2912.0], [76.1, 2921.0], [76.2, 2930.0], [76.3, 2933.0], [76.4, 2942.0], [76.5, 2950.0], [76.6, 2961.0], [76.7, 2967.0], [76.8, 2971.0], [76.9, 2976.0], [77.0, 2981.0], [77.1, 2986.0], [77.2, 2991.0], [77.3, 2998.0], [77.4, 3004.0], [77.5, 3013.0], [77.6, 3026.0], [77.7, 3036.0], [77.8, 3040.0], [77.9, 3055.0], [78.0, 3068.0], [78.1, 3076.0], [78.2, 3079.0], [78.3, 3088.0], [78.4, 3094.0], [78.5, 3109.0], [78.6, 3116.0], [78.7, 3123.0], [78.8, 3132.0], [78.9, 3140.0], [79.0, 3145.0], [79.1, 3151.0], [79.2, 3157.0], [79.3, 3161.0], [79.4, 3169.0], [79.5, 3174.0], [79.6, 3178.0], [79.7, 3184.0], [79.8, 3187.0], [79.9, 3191.0], [80.0, 3200.0], [80.1, 3204.0], [80.2, 3213.0], [80.3, 3216.0], [80.4, 3219.0], [80.5, 3225.0], [80.6, 3234.0], [80.7, 3239.0], [80.8, 3247.0], [80.9, 3257.0], [81.0, 3264.0], [81.1, 3275.0], [81.2, 3285.0], [81.3, 3295.0], [81.4, 3308.0], [81.5, 3312.0], [81.6, 3322.0], [81.7, 3330.0], [81.8, 3335.0], [81.9, 3346.0], [82.0, 3358.0], [82.1, 3373.0], [82.2, 3380.0], [82.3, 3388.0], [82.4, 3394.0], [82.5, 3408.0], [82.6, 3419.0], [82.7, 3423.0], [82.8, 3432.0], [82.9, 3439.0], [83.0, 3448.0], [83.1, 3455.0], [83.2, 3465.0], [83.3, 3475.0], [83.4, 3479.0], [83.5, 3485.0], [83.6, 3492.0], [83.7, 3496.0], [83.8, 3503.0], [83.9, 3505.0], [84.0, 3510.0], [84.1, 3515.0], [84.2, 3522.0], [84.3, 3526.0], [84.4, 3530.0], [84.5, 3538.0], [84.6, 3549.0], [84.7, 3556.0], [84.8, 3562.0], [84.9, 3569.0], [85.0, 3572.0], [85.1, 3582.0], [85.2, 3590.0], [85.3, 3599.0], [85.4, 3604.0], [85.5, 3615.0], [85.6, 3621.0], [85.7, 3624.0], [85.8, 3629.0], [85.9, 3639.0], [86.0, 3646.0], [86.1, 3653.0], [86.2, 3661.0], [86.3, 3667.0], [86.4, 3675.0], [86.5, 3688.0], [86.6, 3697.0], [86.7, 3707.0], [86.8, 3710.0], [86.9, 3718.0], [87.0, 3726.0], [87.1, 3751.0], [87.2, 3761.0], [87.3, 3768.0], [87.4, 3770.0], [87.5, 3784.0], [87.6, 3790.0], [87.7, 3794.0], [87.8, 3807.0], [87.9, 3817.0], [88.0, 3824.0], [88.1, 3831.0], [88.2, 3841.0], [88.3, 3854.0], [88.4, 3872.0], [88.5, 3880.0], [88.6, 3890.0], [88.7, 3896.0], [88.8, 3905.0], [88.9, 3922.0], [89.0, 3937.0], [89.1, 3945.0], [89.2, 3960.0], [89.3, 3968.0], [89.4, 3978.0], [89.5, 3986.0], [89.6, 3997.0], [89.7, 4010.0], [89.8, 4012.0], [89.9, 4019.0], [90.0, 4029.0], [90.1, 4042.0], [90.2, 4057.0], [90.3, 4068.0], [90.4, 4078.0], [90.5, 4092.0], [90.6, 4116.0], [90.7, 4133.0], [90.8, 4140.0], [90.9, 4147.0], [91.0, 4157.0], [91.1, 4170.0], [91.2, 4194.0], [91.3, 4209.0], [91.4, 4215.0], [91.5, 4228.0], [91.6, 4241.0], [91.7, 4248.0], [91.8, 4258.0], [91.9, 4271.0], [92.0, 4287.0], [92.1, 4302.0], [92.2, 4314.0], [92.3, 4322.0], [92.4, 4338.0], [92.5, 4345.0], [92.6, 4363.0], [92.7, 4378.0], [92.8, 4406.0], [92.9, 4422.0], [93.0, 4436.0], [93.1, 4460.0], [93.2, 4480.0], [93.3, 4508.0], [93.4, 4526.0], [93.5, 4541.0], [93.6, 4575.0], [93.7, 4588.0], [93.8, 4608.0], [93.9, 4635.0], [94.0, 4654.0], [94.1, 4683.0], [94.2, 4710.0], [94.3, 4756.0], [94.4, 4795.0], [94.5, 4817.0], [94.6, 4843.0], [94.7, 4870.0], [94.8, 4896.0], [94.9, 4943.0], [95.0, 4986.0], [95.1, 5032.0], [95.2, 5068.0], [95.3, 5112.0], [95.4, 5165.0], [95.5, 5195.0], [95.6, 5272.0], [95.7, 5322.0], [95.8, 5377.0], [95.9, 5422.0], [96.0, 5451.0], [96.1, 5478.0], [96.2, 5568.0], [96.3, 5600.0], [96.4, 5658.0], [96.5, 5696.0], [96.6, 5789.0], [96.7, 5834.0], [96.8, 5925.0], [96.9, 5977.0], [97.0, 6073.0], [97.1, 6164.0], [97.2, 6223.0], [97.3, 6257.0], [97.4, 6330.0], [97.5, 6412.0], [97.6, 6474.0], [97.7, 6556.0], [97.8, 6669.0], [97.9, 6778.0], [98.0, 6898.0], [98.1, 7001.0], [98.2, 7071.0], [98.3, 7138.0], [98.4, 7194.0], [98.5, 7315.0], [98.6, 7374.0], [98.7, 7464.0], [98.8, 7492.0], [98.9, 7661.0], [99.0, 7759.0], [99.1, 7915.0], [99.2, 8223.0], [99.3, 8975.0], [99.4, 9339.0], [99.5, 9711.0], [99.6, 10831.0], [99.7, 11853.0], [99.8, 12045.0], [99.9, 12323.0], [100.0, 12528.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 396.0, "series": [{"data": [[100.0, 5.0], [200.0, 2.0], [300.0, 24.0], [400.0, 351.0], [500.0, 143.0], [600.0, 142.0], [700.0, 396.0], [800.0, 247.0], [900.0, 240.0], [1000.0, 232.0], [1100.0, 244.0], [1200.0, 186.0], [1300.0, 195.0], [1400.0, 181.0], [1500.0, 154.0], [1600.0, 117.0], [1700.0, 136.0], [1800.0, 102.0], [1900.0, 94.0], [2000.0, 107.0], [2100.0, 97.0], [2200.0, 115.0], [2300.0, 75.0], [2400.0, 110.0], [2500.0, 82.0], [2600.0, 75.0], [2700.0, 68.0], [2800.0, 70.0], [2900.0, 82.0], [3000.0, 56.0], [3100.0, 81.0], [3300.0, 56.0], [3200.0, 73.0], [3400.0, 69.0], [3500.0, 82.0], [3600.0, 72.0], [3700.0, 59.0], [3800.0, 49.0], [3900.0, 46.0], [4000.0, 50.0], [4200.0, 45.0], [4300.0, 36.0], [4100.0, 36.0], [4400.0, 24.0], [4600.0, 18.0], [4500.0, 29.0], [4800.0, 21.0], [4700.0, 15.0], [5000.0, 13.0], [5100.0, 13.0], [4900.0, 11.0], [5300.0, 13.0], [5200.0, 6.0], [5400.0, 14.0], [5600.0, 11.0], [5500.0, 8.0], [5700.0, 7.0], [5800.0, 8.0], [6000.0, 6.0], [6100.0, 7.0], [5900.0, 7.0], [6300.0, 6.0], [6200.0, 11.0], [6400.0, 8.0], [6600.0, 8.0], [6500.0, 3.0], [6800.0, 4.0], [6700.0, 4.0], [6900.0, 5.0], [7100.0, 9.0], [7000.0, 7.0], [7200.0, 4.0], [7400.0, 11.0], [7300.0, 7.0], [7500.0, 2.0], [7600.0, 7.0], [7700.0, 2.0], [7900.0, 3.0], [7800.0, 2.0], [8100.0, 2.0], [8000.0, 1.0], [8700.0, 2.0], [8200.0, 1.0], [8900.0, 3.0], [8800.0, 2.0], [9000.0, 3.0], [9300.0, 2.0], [9400.0, 1.0], [9600.0, 2.0], [9700.0, 2.0], [10200.0, 1.0], [10000.0, 1.0], [9800.0, 1.0], [10800.0, 2.0], [11000.0, 1.0], [11400.0, 1.0], [11500.0, 1.0], [11700.0, 1.0], [11900.0, 4.0], [12000.0, 3.0], [12200.0, 1.0], [11800.0, 1.0], [12300.0, 3.0], [12500.0, 1.0], [12400.0, 3.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 12500.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 382.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2673.0, "series": [{"data": [[0.0, 382.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 2207.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 2673.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 11.142857142857144, "minX": 1.60246608E12, "maxY": 12.0, "series": [{"data": [[1.60246608E12, 11.804687499999998], [1.60246674E12, 12.0], [1.60246644E12, 12.0], [1.60246614E12, 12.0], [1.6024668E12, 12.0], [1.6024665E12, 12.0], [1.6024662E12, 12.0], [1.60246686E12, 12.0], [1.60246656E12, 12.0], [1.60246626E12, 12.0], [1.60246692E12, 12.0], [1.60246662E12, 12.0], [1.60246632E12, 12.0], [1.60246698E12, 11.142857142857144], [1.60246668E12, 12.0], [1.60246638E12, 12.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60246698E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 2049.768937225726, "minX": 1.0, "maxY": 12323.0, "series": [{"data": [[4.0, 6100.5], [8.0, 12323.0], [2.0, 11853.0], [1.0, 11767.0], [9.0, 6360.5], [5.0, 4156.333333333334], [10.0, 6401.5], [11.0, 6450.5], [6.0, 4226.666666666666], [12.0, 2049.768937225726], [3.0, 11912.0], [7.0, 4212.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[11.97795515013302, 2067.484796655264]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 12.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 675.4833333333333, "minX": 1.60246608E12, "maxY": 453134.81666666665, "series": [{"data": [[1.60246608E12, 86274.78333333334], [1.60246674E12, 434639.65], [1.60246644E12, 105847.06666666667], [1.60246614E12, 228727.45], [1.6024668E12, 453134.81666666665], [1.6024665E12, 389371.9166666667], [1.6024662E12, 421890.61666666664], [1.60246686E12, 215433.23333333334], [1.60246656E12, 239714.6], [1.60246626E12, 335449.5], [1.60246692E12, 356207.7833333333], [1.60246662E12, 139938.96666666667], [1.60246632E12, 296423.23333333334], [1.60246698E12, 50395.76666666667], [1.60246668E12, 175686.11666666667], [1.60246638E12, 321768.3333333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60246608E12, 2292.983333333333], [1.60246674E12, 3096.0333333333333], [1.60246644E12, 3286.733333333333], [1.60246614E12, 2761.6833333333334], [1.6024668E12, 2669.983333333333], [1.6024665E12, 4270.05], [1.6024662E12, 1616.7166666666667], [1.60246686E12, 2882.983333333333], [1.60246656E12, 2844.133333333333], [1.60246626E12, 2982.4666666666667], [1.60246692E12, 3249.866666666667], [1.60246662E12, 4814.866666666667], [1.60246632E12, 2044.5833333333333], [1.60246698E12, 675.4833333333333], [1.60246668E12, 2810.9], [1.60246638E12, 3191.483333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60246698E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 1257.55574912892, "minX": 1.60246608E12, "maxY": 5019.8831168831175, "series": [{"data": [[1.60246608E12, 1632.37109375], [1.60246674E12, 1880.626344086021], [1.60246644E12, 2000.4055555555535], [1.60246614E12, 2158.694610778443], [1.6024668E12, 2462.7128712871254], [1.6024665E12, 1257.55574912892], [1.6024662E12, 3674.172043010752], [1.60246686E12, 2150.7407407407404], [1.60246656E12, 2178.4693251533736], [1.60246626E12, 2245.4294117647046], [1.60246692E12, 1980.747282608695], [1.60246662E12, 1361.3999999999996], [1.60246632E12, 3000.868085106383], [1.60246698E12, 5019.8831168831175], [1.60246668E12, 2276.5160256410254], [1.60246638E12, 2053.61388888889]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60246698E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 1257.2003484320564, "minX": 1.60246608E12, "maxY": 5019.623376623377, "series": [{"data": [[1.60246608E12, 1632.1640625000007], [1.60246674E12, 1880.1397849462371], [1.60246644E12, 2000.2250000000006], [1.60246614E12, 2158.33233532934], [1.6024668E12, 2461.9966996699673], [1.6024665E12, 1257.2003484320564], [1.6024662E12, 3672.9677419354853], [1.60246686E12, 2150.3950617283954], [1.60246656E12, 2178.110429447852], [1.60246626E12, 2244.902941176471], [1.60246692E12, 1980.249999999999], [1.60246662E12, 1361.2747663551397], [1.60246632E12, 3000.2765957446795], [1.60246698E12, 5019.623376623377], [1.60246668E12, 2276.224358974358], [1.60246638E12, 2053.1750000000006]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60246698E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.012987012987012997, "minX": 1.60246608E12, "maxY": 0.32421875000000017, "series": [{"data": [[1.60246608E12, 0.32421875000000017], [1.60246674E12, 0.040322580645161296], [1.60246644E12, 0.038888888888888924], [1.60246614E12, 0.04491017964071855], [1.6024668E12, 0.05280528052805279], [1.6024665E12, 0.024390243902439036], [1.6024662E12, 0.07526881720430104], [1.60246686E12, 0.03703703703703704], [1.60246656E12, 0.033742331288343565], [1.60246626E12, 0.047058823529411715], [1.60246692E12, 0.04076086956521742], [1.60246662E12, 0.02616822429906541], [1.60246632E12, 0.05957446808510643], [1.60246698E12, 0.012987012987012997], [1.60246668E12, 0.05128205128205125], [1.60246638E12, 0.038888888888888924]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60246698E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 129.0, "minX": 1.60246608E12, "maxY": 12528.0, "series": [{"data": [[1.60246608E12, 5356.0], [1.60246674E12, 5654.0], [1.60246644E12, 12055.0], [1.60246614E12, 5049.0], [1.6024668E12, 7672.0], [1.6024665E12, 5068.0], [1.6024662E12, 9766.0], [1.60246686E12, 7656.0], [1.60246656E12, 5834.0], [1.60246626E12, 9090.0], [1.60246692E12, 5834.0], [1.60246662E12, 4611.0], [1.60246632E12, 7900.0], [1.60246698E12, 12528.0], [1.60246668E12, 5201.0], [1.60246638E12, 6934.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60246608E12, 177.31299993872642], [1.60246674E12, 461.7139998221397], [1.60246644E12, 447.0], [1.60246614E12, 553.0599996805191], [1.6024668E12, 440.73599992752077], [1.6024665E12, 519.1749998629093], [1.6024662E12, 449.7319998216629], [1.60246686E12, 457.7749997675419], [1.60246656E12, 444.94299992203713], [1.60246626E12, 365.06899991869926], [1.60246692E12, 448.0], [1.60246662E12, 389.6479997444153], [1.60246632E12, 436.24799988746645], [1.60246698E12, 1160.0], [1.60246668E12, 476.16999925374984], [1.60246638E12, 426.99599965572355]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60246608E12, 177.54430002450943], [1.60246674E12, 462.3854000711441], [1.60246644E12, 447.0], [1.60246614E12, 554.2660001277924], [1.6024668E12, 441.0288000869751], [1.6024665E12, 519.6925000548363], [1.6024662E12, 450.40520007133483], [1.60246686E12, 458.2175000309944], [1.60246656E12, 445.0], [1.60246626E12, 365.3759000325203], [1.60246692E12, 448.0], [1.60246662E12, 390.6128001022339], [1.60246632E12, 436.67280004501345], [1.60246698E12, 1160.0], [1.60246668E12, 478.0], [1.60246638E12, 428.29560013771055]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60246608E12, 177.4414999693632], [1.60246674E12, 462.0869999110699], [1.60246644E12, 447.0], [1.60246614E12, 553.7299998402596], [1.6024668E12, 440.88799996376036], [1.6024665E12, 519.4624999314547], [1.6024662E12, 450.10599991083143], [1.60246686E12, 458.087499961257], [1.60246656E12, 445.0], [1.60246626E12, 365.23949995934964], [1.60246692E12, 448.0], [1.60246662E12, 390.18399987220766], [1.60246632E12, 436.48399994373324], [1.60246698E12, 1160.0], [1.60246668E12, 477.7349996268749], [1.60246638E12, 427.7179998278618]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60246608E12, 129.0], [1.60246674E12, 459.0], [1.60246644E12, 446.0], [1.60246614E12, 537.0], [1.6024668E12, 440.0], [1.6024665E12, 462.0], [1.6024662E12, 447.0], [1.60246686E12, 453.0], [1.60246656E12, 444.0], [1.60246626E12, 364.0], [1.60246692E12, 444.0], [1.60246662E12, 373.0], [1.60246632E12, 436.0], [1.60246698E12, 1160.0], [1.60246668E12, 467.0], [1.60246638E12, 420.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60246608E12, 1368.5], [1.60246674E12, 1431.5], [1.60246644E12, 1238.0], [1.60246614E12, 1934.0], [1.6024668E12, 2145.0], [1.6024665E12, 850.0], [1.6024662E12, 3471.0], [1.60246686E12, 1629.0], [1.60246656E12, 1967.0], [1.60246626E12, 2162.5], [1.60246692E12, 1333.5], [1.60246662E12, 1070.0], [1.60246632E12, 2816.0], [1.60246698E12, 3633.0], [1.60246668E12, 2094.0], [1.60246638E12, 1524.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60246698E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 457.0, "minX": 1.0, "maxY": 6249.5, "series": [{"data": [[2.0, 4149.5], [3.0, 3611.0], [4.0, 2960.5], [5.0, 2457.0], [6.0, 2123.0], [7.0, 1433.0], [8.0, 1698.5], [9.0, 1511.0], [10.0, 1314.0], [11.0, 1216.5], [12.0, 1197.0], [13.0, 1170.0], [14.0, 950.0], [15.0, 790.0], [16.0, 763.0], [1.0, 6249.5], [17.0, 744.5], [18.0, 784.5], [19.0, 717.0], [20.0, 792.5], [21.0, 735.0], [22.0, 537.0], [23.0, 486.0], [24.0, 482.5], [25.0, 477.0], [26.0, 483.5], [27.0, 457.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 27.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 457.0, "minX": 1.0, "maxY": 6248.5, "series": [{"data": [[2.0, 4149.5], [3.0, 3611.0], [4.0, 2959.5], [5.0, 2456.0], [6.0, 2122.5], [7.0, 1433.0], [8.0, 1698.5], [9.0, 1511.0], [10.0, 1314.0], [11.0, 1216.0], [12.0, 1197.0], [13.0, 1170.0], [14.0, 950.0], [15.0, 790.0], [16.0, 763.0], [1.0, 6248.5], [17.0, 744.5], [18.0, 784.5], [19.0, 717.0], [20.0, 792.5], [21.0, 735.0], [22.0, 537.0], [23.0, 486.0], [24.0, 482.5], [25.0, 477.0], [26.0, 483.5], [27.0, 457.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 27.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1.0833333333333333, "minX": 1.60246608E12, "maxY": 9.566666666666666, "series": [{"data": [[1.60246608E12, 4.466666666666667], [1.60246674E12, 6.2], [1.60246644E12, 6.0], [1.60246614E12, 5.566666666666666], [1.6024668E12, 5.05], [1.6024665E12, 9.566666666666666], [1.6024662E12, 3.1], [1.60246686E12, 5.4], [1.60246656E12, 5.433333333333334], [1.60246626E12, 5.666666666666667], [1.60246692E12, 6.133333333333334], [1.60246662E12, 8.916666666666666], [1.60246632E12, 3.9166666666666665], [1.60246698E12, 1.0833333333333333], [1.60246668E12, 5.2], [1.60246638E12, 6.0]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60246698E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1.2833333333333334, "minX": 1.60246608E12, "maxY": 9.566666666666666, "series": [{"data": [[1.60246608E12, 4.266666666666667], [1.60246674E12, 6.2], [1.60246644E12, 6.0], [1.60246614E12, 5.566666666666666], [1.6024668E12, 5.05], [1.6024665E12, 9.566666666666666], [1.6024662E12, 3.1], [1.60246686E12, 5.4], [1.60246656E12, 5.433333333333334], [1.60246626E12, 5.666666666666667], [1.60246692E12, 6.133333333333334], [1.60246662E12, 8.916666666666666], [1.60246632E12, 3.9166666666666665], [1.60246698E12, 1.2833333333333334], [1.60246668E12, 5.2], [1.60246638E12, 6.0]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60246698E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.2833333333333334, "minX": 1.60246608E12, "maxY": 9.566666666666666, "series": [{"data": [[1.60246608E12, 4.266666666666667], [1.60246674E12, 6.2], [1.60246644E12, 6.0], [1.60246614E12, 5.566666666666666], [1.6024668E12, 5.05], [1.6024665E12, 9.566666666666666], [1.6024662E12, 3.1], [1.60246686E12, 5.4], [1.60246656E12, 5.433333333333334], [1.60246626E12, 5.666666666666667], [1.60246692E12, 6.133333333333334], [1.60246662E12, 8.916666666666666], [1.60246632E12, 3.9166666666666665], [1.60246698E12, 1.2833333333333334], [1.60246668E12, 5.2], [1.60246638E12, 6.0]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60246698E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.2833333333333334, "minX": 1.60246608E12, "maxY": 9.566666666666666, "series": [{"data": [[1.60246608E12, 4.266666666666667], [1.60246674E12, 6.2], [1.60246644E12, 6.0], [1.60246614E12, 5.566666666666666], [1.6024668E12, 5.05], [1.6024665E12, 9.566666666666666], [1.6024662E12, 3.1], [1.60246686E12, 5.4], [1.60246656E12, 5.433333333333334], [1.60246626E12, 5.666666666666667], [1.60246692E12, 6.133333333333334], [1.60246662E12, 8.916666666666666], [1.60246632E12, 3.9166666666666665], [1.60246698E12, 1.2833333333333334], [1.60246668E12, 5.2], [1.60246638E12, 6.0]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60246698E12, "title": "Total Transactions Per Second"}},
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

