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
        data: {"result": {"minY": 139.0, "minX": 0.0, "maxY": 12492.0, "series": [{"data": [[0.0, 139.0], [0.1, 268.0], [0.2, 366.0], [0.3, 374.0], [0.4, 407.0], [0.5, 413.0], [0.6, 419.0], [0.7, 422.0], [0.8, 427.0], [0.9, 429.0], [1.0, 430.0], [1.1, 432.0], [1.2, 434.0], [1.3, 435.0], [1.4, 435.0], [1.5, 436.0], [1.6, 437.0], [1.7, 438.0], [1.8, 440.0], [1.9, 440.0], [2.0, 442.0], [2.1, 443.0], [2.2, 444.0], [2.3, 445.0], [2.4, 446.0], [2.5, 447.0], [2.6, 448.0], [2.7, 449.0], [2.8, 449.0], [2.9, 450.0], [3.0, 450.0], [3.1, 451.0], [3.2, 452.0], [3.3, 452.0], [3.4, 453.0], [3.5, 454.0], [3.6, 454.0], [3.7, 455.0], [3.8, 456.0], [3.9, 457.0], [4.0, 458.0], [4.1, 459.0], [4.2, 459.0], [4.3, 460.0], [4.4, 461.0], [4.5, 462.0], [4.6, 463.0], [4.7, 464.0], [4.8, 465.0], [4.9, 465.0], [5.0, 466.0], [5.1, 466.0], [5.2, 467.0], [5.3, 467.0], [5.4, 468.0], [5.5, 469.0], [5.6, 470.0], [5.7, 470.0], [5.8, 471.0], [5.9, 471.0], [6.0, 472.0], [6.1, 473.0], [6.2, 475.0], [6.3, 476.0], [6.4, 478.0], [6.5, 479.0], [6.6, 480.0], [6.7, 481.0], [6.8, 482.0], [6.9, 484.0], [7.0, 485.0], [7.1, 487.0], [7.2, 488.0], [7.3, 489.0], [7.4, 493.0], [7.5, 495.0], [7.6, 496.0], [7.7, 497.0], [7.8, 499.0], [7.9, 500.0], [8.0, 501.0], [8.1, 507.0], [8.2, 509.0], [8.3, 510.0], [8.4, 511.0], [8.5, 513.0], [8.6, 517.0], [8.7, 523.0], [8.8, 531.0], [8.9, 542.0], [9.0, 551.0], [9.1, 556.0], [9.2, 559.0], [9.3, 577.0], [9.4, 592.0], [9.5, 595.0], [9.6, 600.0], [9.7, 607.0], [9.8, 611.0], [9.9, 613.0], [10.0, 617.0], [10.1, 623.0], [10.2, 626.0], [10.3, 628.0], [10.4, 630.0], [10.5, 634.0], [10.6, 637.0], [10.7, 642.0], [10.8, 644.0], [10.9, 650.0], [11.0, 652.0], [11.1, 661.0], [11.2, 664.0], [11.3, 668.0], [11.4, 669.0], [11.5, 674.0], [11.6, 677.0], [11.7, 683.0], [11.8, 687.0], [11.9, 689.0], [12.0, 693.0], [12.1, 695.0], [12.2, 696.0], [12.3, 698.0], [12.4, 699.0], [12.5, 701.0], [12.6, 704.0], [12.7, 706.0], [12.8, 707.0], [12.9, 709.0], [13.0, 711.0], [13.1, 713.0], [13.2, 714.0], [13.3, 714.0], [13.4, 715.0], [13.5, 716.0], [13.6, 718.0], [13.7, 719.0], [13.8, 721.0], [13.9, 723.0], [14.0, 724.0], [14.1, 725.0], [14.2, 727.0], [14.3, 729.0], [14.4, 730.0], [14.5, 731.0], [14.6, 734.0], [14.7, 736.0], [14.8, 738.0], [14.9, 739.0], [15.0, 741.0], [15.1, 742.0], [15.2, 743.0], [15.3, 744.0], [15.4, 744.0], [15.5, 746.0], [15.6, 746.0], [15.7, 748.0], [15.8, 748.0], [15.9, 750.0], [16.0, 752.0], [16.1, 753.0], [16.2, 754.0], [16.3, 755.0], [16.4, 757.0], [16.5, 758.0], [16.6, 759.0], [16.7, 761.0], [16.8, 763.0], [16.9, 765.0], [17.0, 766.0], [17.1, 767.0], [17.2, 768.0], [17.3, 768.0], [17.4, 769.0], [17.5, 770.0], [17.6, 771.0], [17.7, 773.0], [17.8, 774.0], [17.9, 774.0], [18.0, 776.0], [18.1, 776.0], [18.2, 777.0], [18.3, 778.0], [18.4, 780.0], [18.5, 780.0], [18.6, 783.0], [18.7, 784.0], [18.8, 786.0], [18.9, 787.0], [19.0, 788.0], [19.1, 790.0], [19.2, 792.0], [19.3, 793.0], [19.4, 794.0], [19.5, 795.0], [19.6, 797.0], [19.7, 797.0], [19.8, 799.0], [19.9, 801.0], [20.0, 803.0], [20.1, 805.0], [20.2, 806.0], [20.3, 809.0], [20.4, 811.0], [20.5, 812.0], [20.6, 813.0], [20.7, 815.0], [20.8, 815.0], [20.9, 817.0], [21.0, 818.0], [21.1, 819.0], [21.2, 821.0], [21.3, 822.0], [21.4, 823.0], [21.5, 824.0], [21.6, 827.0], [21.7, 829.0], [21.8, 830.0], [21.9, 833.0], [22.0, 836.0], [22.1, 840.0], [22.2, 841.0], [22.3, 842.0], [22.4, 844.0], [22.5, 846.0], [22.6, 848.0], [22.7, 851.0], [22.8, 852.0], [22.9, 855.0], [23.0, 857.0], [23.1, 858.0], [23.2, 859.0], [23.3, 862.0], [23.4, 864.0], [23.5, 867.0], [23.6, 868.0], [23.7, 871.0], [23.8, 875.0], [23.9, 876.0], [24.0, 879.0], [24.1, 881.0], [24.2, 882.0], [24.3, 884.0], [24.4, 887.0], [24.5, 890.0], [24.6, 890.0], [24.7, 891.0], [24.8, 894.0], [24.9, 896.0], [25.0, 897.0], [25.1, 899.0], [25.2, 900.0], [25.3, 902.0], [25.4, 904.0], [25.5, 906.0], [25.6, 907.0], [25.7, 908.0], [25.8, 910.0], [25.9, 911.0], [26.0, 914.0], [26.1, 915.0], [26.2, 916.0], [26.3, 918.0], [26.4, 919.0], [26.5, 921.0], [26.6, 927.0], [26.7, 930.0], [26.8, 933.0], [26.9, 937.0], [27.0, 939.0], [27.1, 942.0], [27.2, 943.0], [27.3, 945.0], [27.4, 947.0], [27.5, 948.0], [27.6, 950.0], [27.7, 953.0], [27.8, 957.0], [27.9, 961.0], [28.0, 962.0], [28.1, 965.0], [28.2, 966.0], [28.3, 968.0], [28.4, 969.0], [28.5, 970.0], [28.6, 971.0], [28.7, 974.0], [28.8, 977.0], [28.9, 978.0], [29.0, 980.0], [29.1, 982.0], [29.2, 985.0], [29.3, 987.0], [29.4, 993.0], [29.5, 999.0], [29.6, 1003.0], [29.7, 1004.0], [29.8, 1007.0], [29.9, 1009.0], [30.0, 1011.0], [30.1, 1013.0], [30.2, 1015.0], [30.3, 1016.0], [30.4, 1018.0], [30.5, 1021.0], [30.6, 1022.0], [30.7, 1024.0], [30.8, 1025.0], [30.9, 1026.0], [31.0, 1028.0], [31.1, 1029.0], [31.2, 1030.0], [31.3, 1031.0], [31.4, 1033.0], [31.5, 1037.0], [31.6, 1039.0], [31.7, 1041.0], [31.8, 1045.0], [31.9, 1048.0], [32.0, 1050.0], [32.1, 1054.0], [32.2, 1058.0], [32.3, 1062.0], [32.4, 1065.0], [32.5, 1067.0], [32.6, 1069.0], [32.7, 1070.0], [32.8, 1072.0], [32.9, 1073.0], [33.0, 1075.0], [33.1, 1080.0], [33.2, 1082.0], [33.3, 1085.0], [33.4, 1087.0], [33.5, 1088.0], [33.6, 1091.0], [33.7, 1091.0], [33.8, 1092.0], [33.9, 1094.0], [34.0, 1095.0], [34.1, 1096.0], [34.2, 1097.0], [34.3, 1098.0], [34.4, 1101.0], [34.5, 1102.0], [34.6, 1104.0], [34.7, 1105.0], [34.8, 1107.0], [34.9, 1108.0], [35.0, 1110.0], [35.1, 1110.0], [35.2, 1113.0], [35.3, 1114.0], [35.4, 1117.0], [35.5, 1120.0], [35.6, 1123.0], [35.7, 1125.0], [35.8, 1128.0], [35.9, 1130.0], [36.0, 1133.0], [36.1, 1135.0], [36.2, 1139.0], [36.3, 1142.0], [36.4, 1145.0], [36.5, 1146.0], [36.6, 1147.0], [36.7, 1149.0], [36.8, 1153.0], [36.9, 1154.0], [37.0, 1155.0], [37.1, 1155.0], [37.2, 1159.0], [37.3, 1161.0], [37.4, 1162.0], [37.5, 1164.0], [37.6, 1169.0], [37.7, 1173.0], [37.8, 1177.0], [37.9, 1183.0], [38.0, 1186.0], [38.1, 1188.0], [38.2, 1193.0], [38.3, 1196.0], [38.4, 1199.0], [38.5, 1203.0], [38.6, 1206.0], [38.7, 1208.0], [38.8, 1209.0], [38.9, 1213.0], [39.0, 1217.0], [39.1, 1219.0], [39.2, 1221.0], [39.3, 1225.0], [39.4, 1227.0], [39.5, 1229.0], [39.6, 1231.0], [39.7, 1236.0], [39.8, 1238.0], [39.9, 1240.0], [40.0, 1242.0], [40.1, 1244.0], [40.2, 1248.0], [40.3, 1250.0], [40.4, 1253.0], [40.5, 1256.0], [40.6, 1258.0], [40.7, 1259.0], [40.8, 1259.0], [40.9, 1260.0], [41.0, 1263.0], [41.1, 1264.0], [41.2, 1266.0], [41.3, 1268.0], [41.4, 1269.0], [41.5, 1273.0], [41.6, 1274.0], [41.7, 1276.0], [41.8, 1278.0], [41.9, 1281.0], [42.0, 1285.0], [42.1, 1288.0], [42.2, 1293.0], [42.3, 1295.0], [42.4, 1296.0], [42.5, 1299.0], [42.6, 1301.0], [42.7, 1303.0], [42.8, 1306.0], [42.9, 1309.0], [43.0, 1315.0], [43.1, 1317.0], [43.2, 1320.0], [43.3, 1324.0], [43.4, 1327.0], [43.5, 1328.0], [43.6, 1330.0], [43.7, 1331.0], [43.8, 1333.0], [43.9, 1338.0], [44.0, 1343.0], [44.1, 1345.0], [44.2, 1350.0], [44.3, 1352.0], [44.4, 1356.0], [44.5, 1358.0], [44.6, 1365.0], [44.7, 1369.0], [44.8, 1371.0], [44.9, 1372.0], [45.0, 1374.0], [45.1, 1378.0], [45.2, 1382.0], [45.3, 1385.0], [45.4, 1387.0], [45.5, 1392.0], [45.6, 1394.0], [45.7, 1396.0], [45.8, 1398.0], [45.9, 1403.0], [46.0, 1404.0], [46.1, 1407.0], [46.2, 1409.0], [46.3, 1416.0], [46.4, 1420.0], [46.5, 1425.0], [46.6, 1429.0], [46.7, 1435.0], [46.8, 1438.0], [46.9, 1442.0], [47.0, 1444.0], [47.1, 1447.0], [47.2, 1451.0], [47.3, 1453.0], [47.4, 1454.0], [47.5, 1457.0], [47.6, 1458.0], [47.7, 1461.0], [47.8, 1463.0], [47.9, 1465.0], [48.0, 1467.0], [48.1, 1470.0], [48.2, 1472.0], [48.3, 1474.0], [48.4, 1477.0], [48.5, 1480.0], [48.6, 1483.0], [48.7, 1484.0], [48.8, 1486.0], [48.9, 1488.0], [49.0, 1490.0], [49.1, 1494.0], [49.2, 1495.0], [49.3, 1500.0], [49.4, 1503.0], [49.5, 1506.0], [49.6, 1508.0], [49.7, 1510.0], [49.8, 1518.0], [49.9, 1529.0], [50.0, 1536.0], [50.1, 1542.0], [50.2, 1545.0], [50.3, 1549.0], [50.4, 1554.0], [50.5, 1558.0], [50.6, 1561.0], [50.7, 1563.0], [50.8, 1565.0], [50.9, 1568.0], [51.0, 1571.0], [51.1, 1574.0], [51.2, 1576.0], [51.3, 1579.0], [51.4, 1582.0], [51.5, 1588.0], [51.6, 1593.0], [51.7, 1596.0], [51.8, 1599.0], [51.9, 1603.0], [52.0, 1605.0], [52.1, 1610.0], [52.2, 1612.0], [52.3, 1619.0], [52.4, 1622.0], [52.5, 1628.0], [52.6, 1631.0], [52.7, 1637.0], [52.8, 1638.0], [52.9, 1643.0], [53.0, 1646.0], [53.1, 1650.0], [53.2, 1654.0], [53.3, 1655.0], [53.4, 1660.0], [53.5, 1665.0], [53.6, 1667.0], [53.7, 1669.0], [53.8, 1670.0], [53.9, 1677.0], [54.0, 1680.0], [54.1, 1682.0], [54.2, 1685.0], [54.3, 1686.0], [54.4, 1691.0], [54.5, 1694.0], [54.6, 1704.0], [54.7, 1706.0], [54.8, 1710.0], [54.9, 1717.0], [55.0, 1723.0], [55.1, 1726.0], [55.2, 1731.0], [55.3, 1733.0], [55.4, 1736.0], [55.5, 1738.0], [55.6, 1743.0], [55.7, 1745.0], [55.8, 1754.0], [55.9, 1757.0], [56.0, 1766.0], [56.1, 1770.0], [56.2, 1774.0], [56.3, 1777.0], [56.4, 1789.0], [56.5, 1794.0], [56.6, 1797.0], [56.7, 1802.0], [56.8, 1810.0], [56.9, 1818.0], [57.0, 1823.0], [57.1, 1827.0], [57.2, 1836.0], [57.3, 1840.0], [57.4, 1846.0], [57.5, 1850.0], [57.6, 1852.0], [57.7, 1860.0], [57.8, 1864.0], [57.9, 1869.0], [58.0, 1871.0], [58.1, 1876.0], [58.2, 1880.0], [58.3, 1883.0], [58.4, 1890.0], [58.5, 1896.0], [58.6, 1898.0], [58.7, 1903.0], [58.8, 1916.0], [58.9, 1922.0], [59.0, 1923.0], [59.1, 1927.0], [59.2, 1933.0], [59.3, 1938.0], [59.4, 1942.0], [59.5, 1951.0], [59.6, 1954.0], [59.7, 1959.0], [59.8, 1963.0], [59.9, 1966.0], [60.0, 1968.0], [60.1, 1971.0], [60.2, 1974.0], [60.3, 1978.0], [60.4, 1981.0], [60.5, 1984.0], [60.6, 1992.0], [60.7, 2000.0], [60.8, 2007.0], [60.9, 2011.0], [61.0, 2016.0], [61.1, 2019.0], [61.2, 2026.0], [61.3, 2034.0], [61.4, 2042.0], [61.5, 2048.0], [61.6, 2055.0], [61.7, 2057.0], [61.8, 2062.0], [61.9, 2071.0], [62.0, 2073.0], [62.1, 2078.0], [62.2, 2082.0], [62.3, 2085.0], [62.4, 2094.0], [62.5, 2098.0], [62.6, 2106.0], [62.7, 2109.0], [62.8, 2113.0], [62.9, 2116.0], [63.0, 2124.0], [63.1, 2127.0], [63.2, 2131.0], [63.3, 2138.0], [63.4, 2144.0], [63.5, 2151.0], [63.6, 2153.0], [63.7, 2156.0], [63.8, 2161.0], [63.9, 2172.0], [64.0, 2176.0], [64.1, 2180.0], [64.2, 2186.0], [64.3, 2190.0], [64.4, 2196.0], [64.5, 2201.0], [64.6, 2204.0], [64.7, 2213.0], [64.8, 2218.0], [64.9, 2225.0], [65.0, 2228.0], [65.1, 2232.0], [65.2, 2235.0], [65.3, 2239.0], [65.4, 2243.0], [65.5, 2248.0], [65.6, 2252.0], [65.7, 2256.0], [65.8, 2262.0], [65.9, 2270.0], [66.0, 2272.0], [66.1, 2278.0], [66.2, 2280.0], [66.3, 2285.0], [66.4, 2290.0], [66.5, 2293.0], [66.6, 2302.0], [66.7, 2306.0], [66.8, 2310.0], [66.9, 2314.0], [67.0, 2322.0], [67.1, 2327.0], [67.2, 2329.0], [67.3, 2332.0], [67.4, 2335.0], [67.5, 2342.0], [67.6, 2354.0], [67.7, 2359.0], [67.8, 2362.0], [67.9, 2367.0], [68.0, 2375.0], [68.1, 2380.0], [68.2, 2382.0], [68.3, 2385.0], [68.4, 2394.0], [68.5, 2399.0], [68.6, 2403.0], [68.7, 2416.0], [68.8, 2422.0], [68.9, 2424.0], [69.0, 2427.0], [69.1, 2432.0], [69.2, 2438.0], [69.3, 2445.0], [69.4, 2455.0], [69.5, 2463.0], [69.6, 2470.0], [69.7, 2474.0], [69.8, 2477.0], [69.9, 2485.0], [70.0, 2492.0], [70.1, 2499.0], [70.2, 2505.0], [70.3, 2510.0], [70.4, 2513.0], [70.5, 2516.0], [70.6, 2522.0], [70.7, 2527.0], [70.8, 2531.0], [70.9, 2538.0], [71.0, 2551.0], [71.1, 2557.0], [71.2, 2569.0], [71.3, 2576.0], [71.4, 2583.0], [71.5, 2596.0], [71.6, 2600.0], [71.7, 2612.0], [71.8, 2616.0], [71.9, 2623.0], [72.0, 2630.0], [72.1, 2638.0], [72.2, 2645.0], [72.3, 2655.0], [72.4, 2662.0], [72.5, 2667.0], [72.6, 2673.0], [72.7, 2678.0], [72.8, 2690.0], [72.9, 2695.0], [73.0, 2700.0], [73.1, 2709.0], [73.2, 2713.0], [73.3, 2719.0], [73.4, 2722.0], [73.5, 2737.0], [73.6, 2747.0], [73.7, 2751.0], [73.8, 2759.0], [73.9, 2765.0], [74.0, 2774.0], [74.1, 2782.0], [74.2, 2787.0], [74.3, 2794.0], [74.4, 2802.0], [74.5, 2806.0], [74.6, 2813.0], [74.7, 2824.0], [74.8, 2829.0], [74.9, 2833.0], [75.0, 2841.0], [75.1, 2860.0], [75.2, 2865.0], [75.3, 2875.0], [75.4, 2877.0], [75.5, 2882.0], [75.6, 2893.0], [75.7, 2896.0], [75.8, 2899.0], [75.9, 2907.0], [76.0, 2914.0], [76.1, 2921.0], [76.2, 2927.0], [76.3, 2934.0], [76.4, 2949.0], [76.5, 2962.0], [76.6, 2968.0], [76.7, 2974.0], [76.8, 2987.0], [76.9, 2996.0], [77.0, 2998.0], [77.1, 3007.0], [77.2, 3015.0], [77.3, 3020.0], [77.4, 3028.0], [77.5, 3034.0], [77.6, 3038.0], [77.7, 3043.0], [77.8, 3047.0], [77.9, 3055.0], [78.0, 3062.0], [78.1, 3067.0], [78.2, 3084.0], [78.3, 3091.0], [78.4, 3094.0], [78.5, 3099.0], [78.6, 3107.0], [78.7, 3111.0], [78.8, 3117.0], [78.9, 3120.0], [79.0, 3123.0], [79.1, 3130.0], [79.2, 3133.0], [79.3, 3146.0], [79.4, 3150.0], [79.5, 3161.0], [79.6, 3165.0], [79.7, 3173.0], [79.8, 3178.0], [79.9, 3179.0], [80.0, 3184.0], [80.1, 3193.0], [80.2, 3201.0], [80.3, 3209.0], [80.4, 3214.0], [80.5, 3221.0], [80.6, 3230.0], [80.7, 3243.0], [80.8, 3250.0], [80.9, 3256.0], [81.0, 3261.0], [81.1, 3267.0], [81.2, 3277.0], [81.3, 3298.0], [81.4, 3302.0], [81.5, 3309.0], [81.6, 3315.0], [81.7, 3326.0], [81.8, 3335.0], [81.9, 3341.0], [82.0, 3344.0], [82.1, 3353.0], [82.2, 3357.0], [82.3, 3363.0], [82.4, 3371.0], [82.5, 3377.0], [82.6, 3391.0], [82.7, 3394.0], [82.8, 3398.0], [82.9, 3406.0], [83.0, 3420.0], [83.1, 3423.0], [83.2, 3432.0], [83.3, 3441.0], [83.4, 3447.0], [83.5, 3450.0], [83.6, 3460.0], [83.7, 3465.0], [83.8, 3484.0], [83.9, 3488.0], [84.0, 3492.0], [84.1, 3504.0], [84.2, 3514.0], [84.3, 3519.0], [84.4, 3526.0], [84.5, 3531.0], [84.6, 3541.0], [84.7, 3547.0], [84.8, 3556.0], [84.9, 3564.0], [85.0, 3578.0], [85.1, 3586.0], [85.2, 3601.0], [85.3, 3607.0], [85.4, 3615.0], [85.5, 3620.0], [85.6, 3631.0], [85.7, 3641.0], [85.8, 3649.0], [85.9, 3655.0], [86.0, 3660.0], [86.1, 3667.0], [86.2, 3675.0], [86.3, 3679.0], [86.4, 3687.0], [86.5, 3693.0], [86.6, 3703.0], [86.7, 3713.0], [86.8, 3722.0], [86.9, 3726.0], [87.0, 3742.0], [87.1, 3750.0], [87.2, 3757.0], [87.3, 3765.0], [87.4, 3767.0], [87.5, 3787.0], [87.6, 3792.0], [87.7, 3800.0], [87.8, 3809.0], [87.9, 3818.0], [88.0, 3825.0], [88.1, 3836.0], [88.2, 3844.0], [88.3, 3853.0], [88.4, 3866.0], [88.5, 3872.0], [88.6, 3897.0], [88.7, 3916.0], [88.8, 3929.0], [88.9, 3942.0], [89.0, 3950.0], [89.1, 3962.0], [89.2, 3967.0], [89.3, 3976.0], [89.4, 3984.0], [89.5, 3992.0], [89.6, 3995.0], [89.7, 4016.0], [89.8, 4026.0], [89.9, 4038.0], [90.0, 4052.0], [90.1, 4065.0], [90.2, 4074.0], [90.3, 4086.0], [90.4, 4102.0], [90.5, 4109.0], [90.6, 4121.0], [90.7, 4140.0], [90.8, 4164.0], [90.9, 4179.0], [91.0, 4185.0], [91.1, 4193.0], [91.2, 4203.0], [91.3, 4217.0], [91.4, 4223.0], [91.5, 4236.0], [91.6, 4248.0], [91.7, 4257.0], [91.8, 4266.0], [91.9, 4276.0], [92.0, 4294.0], [92.1, 4311.0], [92.2, 4324.0], [92.3, 4336.0], [92.4, 4342.0], [92.5, 4381.0], [92.6, 4390.0], [92.7, 4412.0], [92.8, 4425.0], [92.9, 4436.0], [93.0, 4439.0], [93.1, 4453.0], [93.2, 4482.0], [93.3, 4496.0], [93.4, 4525.0], [93.5, 4533.0], [93.6, 4550.0], [93.7, 4586.0], [93.8, 4616.0], [93.9, 4643.0], [94.0, 4656.0], [94.1, 4677.0], [94.2, 4703.0], [94.3, 4743.0], [94.4, 4744.0], [94.5, 4763.0], [94.6, 4792.0], [94.7, 4826.0], [94.8, 4876.0], [94.9, 4896.0], [95.0, 4951.0], [95.1, 4977.0], [95.2, 5056.0], [95.3, 5106.0], [95.4, 5138.0], [95.5, 5215.0], [95.6, 5284.0], [95.7, 5306.0], [95.8, 5317.0], [95.9, 5365.0], [96.0, 5420.0], [96.1, 5442.0], [96.2, 5461.0], [96.3, 5518.0], [96.4, 5576.0], [96.5, 5662.0], [96.6, 5709.0], [96.7, 5771.0], [96.8, 5907.0], [96.9, 5968.0], [97.0, 6072.0], [97.1, 6112.0], [97.2, 6152.0], [97.3, 6226.0], [97.4, 6288.0], [97.5, 6367.0], [97.6, 6481.0], [97.7, 6565.0], [97.8, 6634.0], [97.9, 6714.0], [98.0, 6770.0], [98.1, 6858.0], [98.2, 6981.0], [98.3, 7086.0], [98.4, 7154.0], [98.5, 7266.0], [98.6, 7319.0], [98.7, 7355.0], [98.8, 7437.0], [98.9, 7503.0], [99.0, 7602.0], [99.1, 7838.0], [99.2, 8277.0], [99.3, 8941.0], [99.4, 9249.0], [99.5, 9712.0], [99.6, 10613.0], [99.7, 11841.0], [99.8, 12207.0], [99.9, 12281.0], [100.0, 12492.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 395.0, "series": [{"data": [[100.0, 2.0], [200.0, 5.0], [300.0, 10.0], [400.0, 395.0], [500.0, 90.0], [600.0, 151.0], [700.0, 389.0], [800.0, 281.0], [900.0, 230.0], [1000.0, 252.0], [1100.0, 216.0], [1200.0, 216.0], [1300.0, 174.0], [1400.0, 183.0], [1500.0, 132.0], [1600.0, 146.0], [1700.0, 109.0], [1800.0, 104.0], [1900.0, 109.0], [2000.0, 95.0], [2100.0, 100.0], [2200.0, 115.0], [2300.0, 102.0], [2400.0, 83.0], [2500.0, 78.0], [2600.0, 74.0], [2700.0, 73.0], [2800.0, 75.0], [2900.0, 64.0], [3000.0, 79.0], [3100.0, 87.0], [3300.0, 77.0], [3200.0, 61.0], [3400.0, 67.0], [3500.0, 59.0], [3600.0, 71.0], [3700.0, 60.0], [3800.0, 49.0], [3900.0, 53.0], [4000.0, 40.0], [4300.0, 31.0], [4200.0, 47.0], [4100.0, 41.0], [4400.0, 35.0], [4600.0, 23.0], [4500.0, 23.0], [4700.0, 23.0], [4800.0, 15.0], [4900.0, 12.0], [5000.0, 8.0], [5100.0, 10.0], [5300.0, 14.0], [5200.0, 11.0], [5400.0, 15.0], [5600.0, 8.0], [5500.0, 9.0], [5700.0, 9.0], [5800.0, 3.0], [6100.0, 11.0], [6000.0, 8.0], [5900.0, 7.0], [6200.0, 9.0], [6300.0, 6.0], [6600.0, 5.0], [6500.0, 7.0], [6400.0, 3.0], [6700.0, 8.0], [6800.0, 6.0], [6900.0, 6.0], [7100.0, 6.0], [7000.0, 4.0], [7200.0, 8.0], [7300.0, 8.0], [7400.0, 8.0], [7500.0, 6.0], [7600.0, 3.0], [7700.0, 2.0], [7800.0, 1.0], [7900.0, 3.0], [8100.0, 1.0], [8700.0, 2.0], [8200.0, 1.0], [9200.0, 2.0], [8900.0, 3.0], [8800.0, 3.0], [9100.0, 1.0], [9000.0, 1.0], [9400.0, 2.0], [9500.0, 1.0], [9700.0, 1.0], [9800.0, 3.0], [10000.0, 1.0], [10600.0, 1.0], [10700.0, 2.0], [11100.0, 1.0], [11700.0, 1.0], [11300.0, 1.0], [11800.0, 3.0], [12000.0, 1.0], [12100.0, 1.0], [12200.0, 7.0], [12400.0, 4.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 12400.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 416.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2666.0, "series": [{"data": [[0.0, 416.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 2180.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 2666.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 11.405405405405405, "minX": 1.60263648E12, "maxY": 12.0, "series": [{"data": [[1.60263678E12, 12.0], [1.60263708E12, 12.0], [1.60263672E12, 12.0], [1.60263738E12, 11.765957446808509], [1.60263702E12, 12.0], [1.60263732E12, 12.0], [1.60263666E12, 12.0], [1.60263696E12, 12.0], [1.60263726E12, 12.0], [1.6026366E12, 12.0], [1.6026369E12, 12.0], [1.6026372E12, 12.0], [1.60263654E12, 12.0], [1.60263684E12, 12.0], [1.60263714E12, 12.0], [1.60263648E12, 11.405405405405405]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60263738E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 2046.6642502861523, "minX": 1.0, "maxY": 12411.0, "series": [{"data": [[4.0, 6173.0], [8.0, 6356.0], [2.0, 12251.0], [1.0, 12243.0], [9.0, 12411.0], [5.0, 6222.5], [10.0, 6309.5], [11.0, 6345.5], [6.0, 4331.0], [12.0, 2046.6642502861523], [3.0, 12233.0], [7.0, 4306.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[11.979095400988227, 2065.0847586469013]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 12.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 612.1333333333333, "minX": 1.60263648E12, "maxY": 472650.8, "series": [{"data": [[1.60263678E12, 404291.15], [1.60263708E12, 114149.33333333333], [1.60263672E12, 224655.28333333333], [1.60263738E12, 136208.61666666667], [1.60263702E12, 179801.01666666666], [1.60263732E12, 348374.1], [1.60263666E12, 391131.56666666665], [1.60263696E12, 330423.81666666665], [1.60263726E12, 277799.1], [1.6026366E12, 374869.13333333336], [1.6026369E12, 280072.15], [1.6026372E12, 472650.8], [1.60263654E12, 177292.98333333334], [1.60263684E12, 142648.31666666668], [1.60263714E12, 347867.63333333336], [1.60263648E12, 48661.71666666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60263678E12, 1810.4], [1.60263708E12, 3458.866666666667], [1.60263672E12, 2911.483333333333], [1.60263738E12, 2555.05], [1.60263702E12, 4489.683333333333], [1.60263732E12, 1711.8333333333333], [1.60263666E12, 2029.2833333333333], [1.60263696E12, 3056.133333333333], [1.60263726E12, 3652.5], [1.6026366E12, 2678.9333333333334], [1.6026369E12, 5050.116666666667], [1.6026372E12, 2215.3166666666666], [1.60263654E12, 3017.0], [1.60263684E12, 3137.8], [1.60263714E12, 3104.4166666666665], [1.60263648E12, 612.1333333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60263738E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 1115.1153846153861, "minX": 1.60263648E12, "maxY": 3626.5221674876857, "series": [{"data": [[1.60263678E12, 3449.175115207372], [1.60263708E12, 1867.7420212765935], [1.60263672E12, 2069.1017964071852], [1.60263738E12, 2215.535460992908], [1.60263702E12, 1468.6237623762388], [1.60263732E12, 3626.5221674876857], [1.60263666E12, 3274.141592920352], [1.60263696E12, 1913.7777777777771], [1.60263726E12, 1696.3237410071931], [1.6026366E12, 2172.8584615384616], [1.6026369E12, 1115.1153846153861], [1.6026372E12, 3024.662551440327], [1.60263654E12, 2111.821958456974], [1.60263684E12, 2111.5610465116274], [1.60263714E12, 1893.3899204244033], [1.60263648E12, 2195.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60263738E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 1114.9214743589735, "minX": 1.60263648E12, "maxY": 3625.7290640394094, "series": [{"data": [[1.60263678E12, 3448.24884792627], [1.60263708E12, 1867.5904255319165], [1.60263672E12, 2068.7664670658673], [1.60263738E12, 2215.312056737589], [1.60263702E12, 1468.447524752475], [1.60263732E12, 3625.7290640394094], [1.60263666E12, 3273.2079646017714], [1.60263696E12, 1913.3650793650788], [1.60263726E12, 1696.009592326141], [1.6026366E12, 2172.2461538461544], [1.6026369E12, 1114.9214743589735], [1.6026372E12, 3023.687242798354], [1.60263654E12, 2111.5311572700284], [1.60263684E12, 2111.311046511629], [1.60263714E12, 1892.9734748010608], [1.60263648E12, 2194.7162162162163]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60263738E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.011976047904191617, "minX": 1.60263648E12, "maxY": 1.7027027027027017, "series": [{"data": [[1.60263678E12, 0.09216589861751155], [1.60263708E12, 0.03191489361702131], [1.60263672E12, 0.011976047904191617], [1.60263738E12, 0.04964539007092203], [1.60263702E12, 0.035643564356435675], [1.60263732E12, 0.06403940886699508], [1.60263666E12, 0.06637168141592921], [1.60263696E12, 0.026455026455026436], [1.60263726E12, 0.0335731414868106], [1.6026366E12, 0.04307692307692307], [1.6026369E12, 0.012820512820512813], [1.6026372E12, 0.057613168724279865], [1.60263654E12, 0.04451038575667655], [1.60263684E12, 0.04069767441860463], [1.60263714E12, 0.03978779840848812], [1.60263648E12, 1.7027027027027017]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60263738E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 139.0, "minX": 1.60263648E12, "maxY": 12492.0, "series": [{"data": [[1.60263678E12, 7602.0], [1.60263708E12, 5088.0], [1.60263672E12, 6987.0], [1.60263738E12, 12492.0], [1.60263702E12, 5730.0], [1.60263732E12, 7714.0], [1.60263666E12, 9811.0], [1.60263696E12, 4961.0], [1.60263726E12, 3584.0], [1.6026366E12, 7766.0], [1.6026369E12, 4820.0], [1.6026372E12, 7533.0], [1.60263654E12, 4938.0], [1.60263684E12, 11843.0], [1.60263714E12, 4294.0], [1.60263648E12, 5428.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60263678E12, 451.80999974012377], [1.60263708E12, 374.3929999101162], [1.60263672E12, 428.01499992012975], [1.60263738E12, 434.0], [1.60263702E12, 455.5539998793602], [1.60263732E12, 435.17999975681306], [1.60263666E12, 365.085999891758], [1.60263696E12, 444.4109999096394], [1.60263726E12, 413.76199990034104], [1.6026366E12, 495.5379994559288], [1.6026369E12, 447.6249998509884], [1.6026372E12, 436.19599994182585], [1.60263654E12, 437.12599975824355], [1.60263684E12, 409.41999967098235], [1.60263714E12, 484.8039998197556], [1.60263648E12, 139.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60263678E12, 452.1582000207901], [1.60263708E12, 374.73230003595353], [1.60263672E12, 428.31650003194807], [1.60263738E12, 434.0], [1.60263702E12, 456.0470002412796], [1.60263732E12, 436.01960001945497], [1.60263666E12, 365.4946000432968], [1.60263696E12, 444.75210003614427], [1.60263726E12, 414.1382000398636], [1.6026366E12, 500.0932005596161], [1.6026369E12, 448.3750001192093], [1.6026372E12, 436.41560002326963], [1.60263654E12, 438.03860009670257], [1.60263684E12, 410.66200013160704], [1.60263714E12, 485.4844000720978], [1.60263648E12, 139.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60263678E12, 452.07099997401235], [1.60263708E12, 374.5814999550581], [1.60263672E12, 428.1824999600649], [1.60263738E12, 434.0], [1.60263702E12, 455.8069999396801], [1.60263732E12, 435.6899998784065], [1.60263666E12, 365.31299994587897], [1.60263696E12, 444.60049995481967], [1.60263726E12, 413.9709999501705], [1.6026366E12, 497.74599930047987], [1.6026369E12, 447.9374999254942], [1.6026372E12, 436.3179999709129], [1.60263654E12, 437.63299987912177], [1.60263684E12, 410.1099998354912], [1.60263714E12, 485.1819999098778], [1.60263648E12, 139.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60263678E12, 447.0], [1.60263708E12, 366.0], [1.60263672E12, 426.0], [1.60263738E12, 431.0], [1.60263702E12, 432.0], [1.60263732E12, 431.0], [1.60263666E12, 365.0], [1.60263696E12, 435.0], [1.60263726E12, 412.0], [1.6026366E12, 487.0], [1.6026369E12, 407.0], [1.6026372E12, 427.0], [1.60263654E12, 432.0], [1.60263684E12, 405.0], [1.60263714E12, 482.0], [1.60263648E12, 139.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60263678E12, 3472.0], [1.60263708E12, 1543.5], [1.60263672E12, 1949.5], [1.60263738E12, 1157.5], [1.60263702E12, 1107.0], [1.60263732E12, 3677.0], [1.60263666E12, 2805.0], [1.60263696E12, 1670.5], [1.60263726E12, 1613.0], [1.6026366E12, 1633.0], [1.6026369E12, 839.0], [1.6026372E12, 2839.0], [1.60263654E12, 1952.0], [1.60263684E12, 1256.5], [1.60263714E12, 1458.0], [1.60263648E12, 2241.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60263738E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 459.0, "minX": 1.0, "maxY": 6324.0, "series": [{"data": [[2.0, 4188.0], [3.0, 3564.0], [4.0, 2997.5], [5.0, 2376.5], [6.0, 2249.0], [7.0, 1667.0], [8.0, 1564.5], [9.0, 1299.0], [10.0, 1367.5], [11.0, 1163.5], [12.0, 1232.0], [13.0, 1030.5], [14.0, 897.5], [15.0, 810.0], [16.0, 786.0], [1.0, 6324.0], [17.0, 783.0], [18.0, 696.5], [19.0, 704.0], [20.0, 601.5], [21.0, 669.0], [22.0, 1095.5], [23.0, 792.0], [24.0, 503.0], [26.0, 459.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 26.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 459.0, "minX": 1.0, "maxY": 6323.0, "series": [{"data": [[2.0, 4187.0], [3.0, 3563.0], [4.0, 2996.5], [5.0, 2374.5], [6.0, 2249.0], [7.0, 1667.0], [8.0, 1563.5], [9.0, 1299.0], [10.0, 1367.5], [11.0, 1163.0], [12.0, 1232.0], [13.0, 1030.5], [14.0, 897.5], [15.0, 810.0], [16.0, 785.5], [1.0, 6323.0], [17.0, 783.0], [18.0, 696.0], [19.0, 704.0], [20.0, 601.0], [21.0, 669.0], [22.0, 1095.5], [23.0, 792.0], [24.0, 503.0], [26.0, 459.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 26.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1.4333333333333333, "minX": 1.60263648E12, "maxY": 10.4, "series": [{"data": [[1.60263678E12, 3.6166666666666667], [1.60263708E12, 6.266666666666667], [1.60263672E12, 5.566666666666666], [1.60263738E12, 4.5], [1.60263702E12, 8.416666666666666], [1.60263732E12, 3.3833333333333333], [1.60263666E12, 3.7666666666666666], [1.60263696E12, 6.3], [1.60263726E12, 6.95], [1.6026366E12, 5.416666666666667], [1.6026369E12, 10.4], [1.6026372E12, 4.05], [1.60263654E12, 5.616666666666666], [1.60263684E12, 5.733333333333333], [1.60263714E12, 6.283333333333333], [1.60263648E12, 1.4333333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60263738E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1.2333333333333334, "minX": 1.60263648E12, "maxY": 10.4, "series": [{"data": [[1.60263678E12, 3.6166666666666667], [1.60263708E12, 6.266666666666667], [1.60263672E12, 5.566666666666666], [1.60263738E12, 4.7], [1.60263702E12, 8.416666666666666], [1.60263732E12, 3.3833333333333333], [1.60263666E12, 3.7666666666666666], [1.60263696E12, 6.3], [1.60263726E12, 6.95], [1.6026366E12, 5.416666666666667], [1.6026369E12, 10.4], [1.6026372E12, 4.05], [1.60263654E12, 5.616666666666666], [1.60263684E12, 5.733333333333333], [1.60263714E12, 6.283333333333333], [1.60263648E12, 1.2333333333333334]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60263738E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.2333333333333334, "minX": 1.60263648E12, "maxY": 10.4, "series": [{"data": [[1.60263678E12, 3.6166666666666667], [1.60263708E12, 6.266666666666667], [1.60263672E12, 5.566666666666666], [1.60263738E12, 4.7], [1.60263702E12, 8.416666666666666], [1.60263732E12, 3.3833333333333333], [1.60263666E12, 3.7666666666666666], [1.60263696E12, 6.3], [1.60263726E12, 6.95], [1.6026366E12, 5.416666666666667], [1.6026369E12, 10.4], [1.6026372E12, 4.05], [1.60263654E12, 5.616666666666666], [1.60263684E12, 5.733333333333333], [1.60263714E12, 6.283333333333333], [1.60263648E12, 1.2333333333333334]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60263738E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.2333333333333334, "minX": 1.60263648E12, "maxY": 10.4, "series": [{"data": [[1.60263678E12, 3.6166666666666667], [1.60263708E12, 6.266666666666667], [1.60263672E12, 5.566666666666666], [1.60263738E12, 4.7], [1.60263702E12, 8.416666666666666], [1.60263732E12, 3.3833333333333333], [1.60263666E12, 3.7666666666666666], [1.60263696E12, 6.3], [1.60263726E12, 6.95], [1.6026366E12, 5.416666666666667], [1.6026369E12, 10.4], [1.6026372E12, 4.05], [1.60263654E12, 5.616666666666666], [1.60263684E12, 5.733333333333333], [1.60263714E12, 6.283333333333333], [1.60263648E12, 1.2333333333333334]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60263738E12, "title": "Total Transactions Per Second"}},
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

