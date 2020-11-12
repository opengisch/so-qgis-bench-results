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
        data: {"result": {"minY": 182.0, "minX": 0.0, "maxY": 12885.0, "series": [{"data": [[0.0, 182.0], [0.1, 234.0], [0.2, 411.0], [0.3, 417.0], [0.4, 423.0], [0.5, 428.0], [0.6, 433.0], [0.7, 439.0], [0.8, 452.0], [0.9, 457.0], [1.0, 466.0], [1.1, 472.0], [1.2, 475.0], [1.3, 476.0], [1.4, 479.0], [1.5, 483.0], [1.6, 487.0], [1.7, 490.0], [1.8, 492.0], [1.9, 494.0], [2.0, 496.0], [2.1, 498.0], [2.2, 498.0], [2.3, 499.0], [2.4, 501.0], [2.5, 502.0], [2.6, 503.0], [2.7, 503.0], [2.8, 504.0], [2.9, 505.0], [3.0, 505.0], [3.1, 506.0], [3.2, 506.0], [3.3, 507.0], [3.4, 507.0], [3.5, 508.0], [3.6, 509.0], [3.7, 509.0], [3.8, 510.0], [3.9, 510.0], [4.0, 510.0], [4.1, 511.0], [4.2, 512.0], [4.3, 513.0], [4.4, 514.0], [4.5, 515.0], [4.6, 517.0], [4.7, 518.0], [4.8, 519.0], [4.9, 520.0], [5.0, 521.0], [5.1, 523.0], [5.2, 524.0], [5.3, 527.0], [5.4, 528.0], [5.5, 529.0], [5.6, 530.0], [5.7, 532.0], [5.8, 534.0], [5.9, 535.0], [6.0, 536.0], [6.1, 537.0], [6.2, 538.0], [6.3, 539.0], [6.4, 541.0], [6.5, 542.0], [6.6, 545.0], [6.7, 546.0], [6.8, 548.0], [6.9, 550.0], [7.0, 551.0], [7.1, 552.0], [7.2, 553.0], [7.3, 555.0], [7.4, 556.0], [7.5, 560.0], [7.6, 564.0], [7.7, 568.0], [7.8, 569.0], [7.9, 570.0], [8.0, 571.0], [8.1, 572.0], [8.2, 574.0], [8.3, 575.0], [8.4, 576.0], [8.5, 582.0], [8.6, 587.0], [8.7, 594.0], [8.8, 604.0], [8.9, 607.0], [9.0, 612.0], [9.1, 616.0], [9.2, 619.0], [9.3, 627.0], [9.4, 634.0], [9.5, 642.0], [9.6, 648.0], [9.7, 651.0], [9.8, 658.0], [9.9, 665.0], [10.0, 669.0], [10.1, 672.0], [10.2, 676.0], [10.3, 680.0], [10.4, 685.0], [10.5, 686.0], [10.6, 692.0], [10.7, 706.0], [10.8, 712.0], [10.9, 715.0], [11.0, 716.0], [11.1, 719.0], [11.2, 722.0], [11.3, 723.0], [11.4, 725.0], [11.5, 728.0], [11.6, 731.0], [11.7, 733.0], [11.8, 735.0], [11.9, 738.0], [12.0, 741.0], [12.1, 743.0], [12.2, 745.0], [12.3, 747.0], [12.4, 749.0], [12.5, 751.0], [12.6, 754.0], [12.7, 756.0], [12.8, 759.0], [12.9, 760.0], [13.0, 762.0], [13.1, 766.0], [13.2, 767.0], [13.3, 769.0], [13.4, 772.0], [13.5, 775.0], [13.6, 776.0], [13.7, 779.0], [13.8, 781.0], [13.9, 786.0], [14.0, 788.0], [14.1, 789.0], [14.2, 790.0], [14.3, 791.0], [14.4, 793.0], [14.5, 794.0], [14.6, 796.0], [14.7, 797.0], [14.8, 799.0], [14.9, 800.0], [15.0, 802.0], [15.1, 802.0], [15.2, 803.0], [15.3, 805.0], [15.4, 806.0], [15.5, 808.0], [15.6, 811.0], [15.7, 815.0], [15.8, 817.0], [15.9, 820.0], [16.0, 821.0], [16.1, 824.0], [16.2, 825.0], [16.3, 826.0], [16.4, 828.0], [16.5, 828.0], [16.6, 830.0], [16.7, 830.0], [16.8, 831.0], [16.9, 833.0], [17.0, 833.0], [17.1, 834.0], [17.2, 836.0], [17.3, 837.0], [17.4, 838.0], [17.5, 839.0], [17.6, 841.0], [17.7, 842.0], [17.8, 843.0], [17.9, 844.0], [18.0, 845.0], [18.1, 846.0], [18.2, 847.0], [18.3, 848.0], [18.4, 850.0], [18.5, 851.0], [18.6, 852.0], [18.7, 853.0], [18.8, 853.0], [18.9, 854.0], [19.0, 855.0], [19.1, 856.0], [19.2, 857.0], [19.3, 857.0], [19.4, 858.0], [19.5, 859.0], [19.6, 859.0], [19.7, 860.0], [19.8, 861.0], [19.9, 863.0], [20.0, 863.0], [20.1, 864.0], [20.2, 865.0], [20.3, 866.0], [20.4, 867.0], [20.5, 868.0], [20.6, 870.0], [20.7, 871.0], [20.8, 873.0], [20.9, 875.0], [21.0, 876.0], [21.1, 878.0], [21.2, 881.0], [21.3, 883.0], [21.4, 884.0], [21.5, 885.0], [21.6, 887.0], [21.7, 888.0], [21.8, 890.0], [21.9, 893.0], [22.0, 896.0], [22.1, 898.0], [22.2, 901.0], [22.3, 902.0], [22.4, 903.0], [22.5, 904.0], [22.6, 907.0], [22.7, 910.0], [22.8, 911.0], [22.9, 913.0], [23.0, 915.0], [23.1, 917.0], [23.2, 918.0], [23.3, 921.0], [23.4, 922.0], [23.5, 923.0], [23.6, 925.0], [23.7, 927.0], [23.8, 929.0], [23.9, 930.0], [24.0, 931.0], [24.1, 934.0], [24.2, 935.0], [24.3, 936.0], [24.4, 938.0], [24.5, 940.0], [24.6, 942.0], [24.7, 943.0], [24.8, 946.0], [24.9, 949.0], [25.0, 952.0], [25.1, 953.0], [25.2, 956.0], [25.3, 957.0], [25.4, 960.0], [25.5, 962.0], [25.6, 964.0], [25.7, 966.0], [25.8, 968.0], [25.9, 969.0], [26.0, 972.0], [26.1, 976.0], [26.2, 978.0], [26.3, 980.0], [26.4, 984.0], [26.5, 987.0], [26.6, 989.0], [26.7, 992.0], [26.8, 994.0], [26.9, 995.0], [27.0, 997.0], [27.1, 1000.0], [27.2, 1002.0], [27.3, 1004.0], [27.4, 1005.0], [27.5, 1009.0], [27.6, 1012.0], [27.7, 1014.0], [27.8, 1016.0], [27.9, 1016.0], [28.0, 1020.0], [28.1, 1022.0], [28.2, 1025.0], [28.3, 1027.0], [28.4, 1034.0], [28.5, 1035.0], [28.6, 1036.0], [28.7, 1039.0], [28.8, 1043.0], [28.9, 1045.0], [29.0, 1048.0], [29.1, 1050.0], [29.2, 1052.0], [29.3, 1054.0], [29.4, 1056.0], [29.5, 1059.0], [29.6, 1062.0], [29.7, 1064.0], [29.8, 1067.0], [29.9, 1070.0], [30.0, 1071.0], [30.1, 1074.0], [30.2, 1076.0], [30.3, 1078.0], [30.4, 1079.0], [30.5, 1082.0], [30.6, 1084.0], [30.7, 1086.0], [30.8, 1090.0], [30.9, 1091.0], [31.0, 1093.0], [31.1, 1095.0], [31.2, 1097.0], [31.3, 1098.0], [31.4, 1099.0], [31.5, 1101.0], [31.6, 1102.0], [31.7, 1104.0], [31.8, 1104.0], [31.9, 1105.0], [32.0, 1108.0], [32.1, 1110.0], [32.2, 1113.0], [32.3, 1115.0], [32.4, 1116.0], [32.5, 1119.0], [32.6, 1121.0], [32.7, 1123.0], [32.8, 1126.0], [32.9, 1132.0], [33.0, 1135.0], [33.1, 1136.0], [33.2, 1137.0], [33.3, 1139.0], [33.4, 1140.0], [33.5, 1141.0], [33.6, 1143.0], [33.7, 1145.0], [33.8, 1148.0], [33.9, 1150.0], [34.0, 1151.0], [34.1, 1153.0], [34.2, 1155.0], [34.3, 1157.0], [34.4, 1161.0], [34.5, 1164.0], [34.6, 1167.0], [34.7, 1169.0], [34.8, 1174.0], [34.9, 1177.0], [35.0, 1179.0], [35.1, 1181.0], [35.2, 1185.0], [35.3, 1186.0], [35.4, 1188.0], [35.5, 1189.0], [35.6, 1191.0], [35.7, 1193.0], [35.8, 1195.0], [35.9, 1196.0], [36.0, 1200.0], [36.1, 1200.0], [36.2, 1202.0], [36.3, 1205.0], [36.4, 1207.0], [36.5, 1211.0], [36.6, 1213.0], [36.7, 1216.0], [36.8, 1218.0], [36.9, 1219.0], [37.0, 1221.0], [37.1, 1225.0], [37.2, 1229.0], [37.3, 1232.0], [37.4, 1233.0], [37.5, 1235.0], [37.6, 1238.0], [37.7, 1239.0], [37.8, 1242.0], [37.9, 1243.0], [38.0, 1245.0], [38.1, 1248.0], [38.2, 1251.0], [38.3, 1254.0], [38.4, 1257.0], [38.5, 1260.0], [38.6, 1262.0], [38.7, 1265.0], [38.8, 1267.0], [38.9, 1270.0], [39.0, 1272.0], [39.1, 1273.0], [39.2, 1275.0], [39.3, 1278.0], [39.4, 1283.0], [39.5, 1286.0], [39.6, 1289.0], [39.7, 1290.0], [39.8, 1292.0], [39.9, 1300.0], [40.0, 1302.0], [40.1, 1306.0], [40.2, 1310.0], [40.3, 1312.0], [40.4, 1315.0], [40.5, 1316.0], [40.6, 1320.0], [40.7, 1323.0], [40.8, 1324.0], [40.9, 1328.0], [41.0, 1329.0], [41.1, 1332.0], [41.2, 1335.0], [41.3, 1338.0], [41.4, 1339.0], [41.5, 1341.0], [41.6, 1344.0], [41.7, 1345.0], [41.8, 1348.0], [41.9, 1350.0], [42.0, 1352.0], [42.1, 1356.0], [42.2, 1358.0], [42.3, 1361.0], [42.4, 1364.0], [42.5, 1366.0], [42.6, 1368.0], [42.7, 1375.0], [42.8, 1382.0], [42.9, 1386.0], [43.0, 1389.0], [43.1, 1392.0], [43.2, 1394.0], [43.3, 1396.0], [43.4, 1398.0], [43.5, 1400.0], [43.6, 1404.0], [43.7, 1407.0], [43.8, 1410.0], [43.9, 1412.0], [44.0, 1415.0], [44.1, 1421.0], [44.2, 1424.0], [44.3, 1427.0], [44.4, 1430.0], [44.5, 1432.0], [44.6, 1434.0], [44.7, 1436.0], [44.8, 1438.0], [44.9, 1440.0], [45.0, 1445.0], [45.1, 1449.0], [45.2, 1451.0], [45.3, 1455.0], [45.4, 1457.0], [45.5, 1459.0], [45.6, 1462.0], [45.7, 1464.0], [45.8, 1465.0], [45.9, 1469.0], [46.0, 1476.0], [46.1, 1478.0], [46.2, 1482.0], [46.3, 1485.0], [46.4, 1490.0], [46.5, 1493.0], [46.6, 1497.0], [46.7, 1498.0], [46.8, 1500.0], [46.9, 1505.0], [47.0, 1508.0], [47.1, 1510.0], [47.2, 1512.0], [47.3, 1514.0], [47.4, 1518.0], [47.5, 1521.0], [47.6, 1522.0], [47.7, 1525.0], [47.8, 1529.0], [47.9, 1533.0], [48.0, 1537.0], [48.1, 1538.0], [48.2, 1539.0], [48.3, 1540.0], [48.4, 1541.0], [48.5, 1543.0], [48.6, 1545.0], [48.7, 1546.0], [48.8, 1549.0], [48.9, 1552.0], [49.0, 1553.0], [49.1, 1556.0], [49.2, 1560.0], [49.3, 1564.0], [49.4, 1566.0], [49.5, 1571.0], [49.6, 1573.0], [49.7, 1576.0], [49.8, 1581.0], [49.9, 1583.0], [50.0, 1590.0], [50.1, 1596.0], [50.2, 1603.0], [50.3, 1608.0], [50.4, 1615.0], [50.5, 1619.0], [50.6, 1621.0], [50.7, 1624.0], [50.8, 1629.0], [50.9, 1634.0], [51.0, 1638.0], [51.1, 1639.0], [51.2, 1641.0], [51.3, 1642.0], [51.4, 1646.0], [51.5, 1649.0], [51.6, 1655.0], [51.7, 1656.0], [51.8, 1657.0], [51.9, 1658.0], [52.0, 1659.0], [52.1, 1664.0], [52.2, 1666.0], [52.3, 1672.0], [52.4, 1675.0], [52.5, 1681.0], [52.6, 1685.0], [52.7, 1690.0], [52.8, 1695.0], [52.9, 1698.0], [53.0, 1700.0], [53.1, 1702.0], [53.2, 1708.0], [53.3, 1711.0], [53.4, 1714.0], [53.5, 1719.0], [53.6, 1722.0], [53.7, 1723.0], [53.8, 1726.0], [53.9, 1728.0], [54.0, 1730.0], [54.1, 1735.0], [54.2, 1742.0], [54.3, 1748.0], [54.4, 1752.0], [54.5, 1761.0], [54.6, 1766.0], [54.7, 1770.0], [54.8, 1773.0], [54.9, 1775.0], [55.0, 1782.0], [55.1, 1792.0], [55.2, 1802.0], [55.3, 1807.0], [55.4, 1809.0], [55.5, 1810.0], [55.6, 1815.0], [55.7, 1820.0], [55.8, 1826.0], [55.9, 1830.0], [56.0, 1837.0], [56.1, 1838.0], [56.2, 1846.0], [56.3, 1848.0], [56.4, 1853.0], [56.5, 1857.0], [56.6, 1861.0], [56.7, 1865.0], [56.8, 1871.0], [56.9, 1873.0], [57.0, 1880.0], [57.1, 1884.0], [57.2, 1887.0], [57.3, 1893.0], [57.4, 1902.0], [57.5, 1916.0], [57.6, 1918.0], [57.7, 1924.0], [57.8, 1927.0], [57.9, 1931.0], [58.0, 1935.0], [58.1, 1943.0], [58.2, 1947.0], [58.3, 1950.0], [58.4, 1956.0], [58.5, 1960.0], [58.6, 1969.0], [58.7, 1973.0], [58.8, 1983.0], [58.9, 1988.0], [59.0, 1991.0], [59.1, 1994.0], [59.2, 1999.0], [59.3, 2002.0], [59.4, 2008.0], [59.5, 2010.0], [59.6, 2016.0], [59.7, 2021.0], [59.8, 2027.0], [59.9, 2029.0], [60.0, 2032.0], [60.1, 2035.0], [60.2, 2039.0], [60.3, 2042.0], [60.4, 2045.0], [60.5, 2047.0], [60.6, 2049.0], [60.7, 2053.0], [60.8, 2060.0], [60.9, 2066.0], [61.0, 2073.0], [61.1, 2083.0], [61.2, 2091.0], [61.3, 2098.0], [61.4, 2099.0], [61.5, 2104.0], [61.6, 2108.0], [61.7, 2112.0], [61.8, 2118.0], [61.9, 2126.0], [62.0, 2129.0], [62.1, 2134.0], [62.2, 2139.0], [62.3, 2147.0], [62.4, 2151.0], [62.5, 2158.0], [62.6, 2162.0], [62.7, 2166.0], [62.8, 2175.0], [62.9, 2178.0], [63.0, 2186.0], [63.1, 2197.0], [63.2, 2200.0], [63.3, 2202.0], [63.4, 2210.0], [63.5, 2217.0], [63.6, 2225.0], [63.7, 2232.0], [63.8, 2236.0], [63.9, 2240.0], [64.0, 2245.0], [64.1, 2248.0], [64.2, 2254.0], [64.3, 2256.0], [64.4, 2262.0], [64.5, 2266.0], [64.6, 2269.0], [64.7, 2274.0], [64.8, 2282.0], [64.9, 2283.0], [65.0, 2288.0], [65.1, 2290.0], [65.2, 2291.0], [65.3, 2297.0], [65.4, 2301.0], [65.5, 2304.0], [65.6, 2307.0], [65.7, 2315.0], [65.8, 2326.0], [65.9, 2328.0], [66.0, 2335.0], [66.1, 2339.0], [66.2, 2340.0], [66.3, 2344.0], [66.4, 2346.0], [66.5, 2357.0], [66.6, 2363.0], [66.7, 2367.0], [66.8, 2373.0], [66.9, 2380.0], [67.0, 2394.0], [67.1, 2403.0], [67.2, 2407.0], [67.3, 2410.0], [67.4, 2416.0], [67.5, 2419.0], [67.6, 2426.0], [67.7, 2430.0], [67.8, 2439.0], [67.9, 2445.0], [68.0, 2455.0], [68.1, 2456.0], [68.2, 2459.0], [68.3, 2464.0], [68.4, 2474.0], [68.5, 2479.0], [68.6, 2482.0], [68.7, 2487.0], [68.8, 2494.0], [68.9, 2498.0], [69.0, 2503.0], [69.1, 2507.0], [69.2, 2511.0], [69.3, 2517.0], [69.4, 2524.0], [69.5, 2530.0], [69.6, 2534.0], [69.7, 2536.0], [69.8, 2540.0], [69.9, 2544.0], [70.0, 2548.0], [70.1, 2552.0], [70.2, 2554.0], [70.3, 2558.0], [70.4, 2560.0], [70.5, 2570.0], [70.6, 2580.0], [70.7, 2586.0], [70.8, 2592.0], [70.9, 2597.0], [71.0, 2604.0], [71.1, 2608.0], [71.2, 2622.0], [71.3, 2632.0], [71.4, 2639.0], [71.5, 2647.0], [71.6, 2649.0], [71.7, 2652.0], [71.8, 2660.0], [71.9, 2667.0], [72.0, 2671.0], [72.1, 2674.0], [72.2, 2682.0], [72.3, 2684.0], [72.4, 2692.0], [72.5, 2700.0], [72.6, 2711.0], [72.7, 2718.0], [72.8, 2726.0], [72.9, 2736.0], [73.0, 2746.0], [73.1, 2755.0], [73.2, 2765.0], [73.3, 2774.0], [73.4, 2780.0], [73.5, 2790.0], [73.6, 2794.0], [73.7, 2806.0], [73.8, 2816.0], [73.9, 2826.0], [74.0, 2832.0], [74.1, 2841.0], [74.2, 2852.0], [74.3, 2859.0], [74.4, 2864.0], [74.5, 2870.0], [74.6, 2876.0], [74.7, 2891.0], [74.8, 2904.0], [74.9, 2909.0], [75.0, 2918.0], [75.1, 2924.0], [75.2, 2934.0], [75.3, 2941.0], [75.4, 2945.0], [75.5, 2949.0], [75.6, 2957.0], [75.7, 2963.0], [75.8, 2971.0], [75.9, 2984.0], [76.0, 2992.0], [76.1, 2997.0], [76.2, 3004.0], [76.3, 3011.0], [76.4, 3024.0], [76.5, 3029.0], [76.6, 3033.0], [76.7, 3040.0], [76.8, 3049.0], [76.9, 3055.0], [77.0, 3066.0], [77.1, 3071.0], [77.2, 3081.0], [77.3, 3088.0], [77.4, 3099.0], [77.5, 3106.0], [77.6, 3112.0], [77.7, 3122.0], [77.8, 3124.0], [77.9, 3132.0], [78.0, 3141.0], [78.1, 3146.0], [78.2, 3152.0], [78.3, 3157.0], [78.4, 3159.0], [78.5, 3168.0], [78.6, 3172.0], [78.7, 3181.0], [78.8, 3187.0], [78.9, 3190.0], [79.0, 3199.0], [79.1, 3209.0], [79.2, 3219.0], [79.3, 3221.0], [79.4, 3228.0], [79.5, 3234.0], [79.6, 3241.0], [79.7, 3246.0], [79.8, 3258.0], [79.9, 3264.0], [80.0, 3278.0], [80.1, 3282.0], [80.2, 3285.0], [80.3, 3295.0], [80.4, 3303.0], [80.5, 3314.0], [80.6, 3322.0], [80.7, 3330.0], [80.8, 3332.0], [80.9, 3336.0], [81.0, 3343.0], [81.1, 3345.0], [81.2, 3351.0], [81.3, 3358.0], [81.4, 3368.0], [81.5, 3370.0], [81.6, 3372.0], [81.7, 3376.0], [81.8, 3384.0], [81.9, 3399.0], [82.0, 3407.0], [82.1, 3419.0], [82.2, 3427.0], [82.3, 3435.0], [82.4, 3449.0], [82.5, 3461.0], [82.6, 3476.0], [82.7, 3485.0], [82.8, 3495.0], [82.9, 3506.0], [83.0, 3515.0], [83.1, 3523.0], [83.2, 3529.0], [83.3, 3540.0], [83.4, 3549.0], [83.5, 3555.0], [83.6, 3558.0], [83.7, 3561.0], [83.8, 3571.0], [83.9, 3574.0], [84.0, 3593.0], [84.1, 3597.0], [84.2, 3601.0], [84.3, 3611.0], [84.4, 3618.0], [84.5, 3624.0], [84.6, 3635.0], [84.7, 3649.0], [84.8, 3659.0], [84.9, 3664.0], [85.0, 3670.0], [85.1, 3676.0], [85.2, 3689.0], [85.3, 3695.0], [85.4, 3709.0], [85.5, 3720.0], [85.6, 3733.0], [85.7, 3741.0], [85.8, 3744.0], [85.9, 3754.0], [86.0, 3761.0], [86.1, 3767.0], [86.2, 3774.0], [86.3, 3780.0], [86.4, 3785.0], [86.5, 3789.0], [86.6, 3791.0], [86.7, 3802.0], [86.8, 3813.0], [86.9, 3818.0], [87.0, 3821.0], [87.1, 3831.0], [87.2, 3847.0], [87.3, 3856.0], [87.4, 3860.0], [87.5, 3870.0], [87.6, 3879.0], [87.7, 3888.0], [87.8, 3895.0], [87.9, 3902.0], [88.0, 3908.0], [88.1, 3919.0], [88.2, 3923.0], [88.3, 3930.0], [88.4, 3942.0], [88.5, 3947.0], [88.6, 3959.0], [88.7, 3969.0], [88.8, 3980.0], [88.9, 3987.0], [89.0, 4007.0], [89.1, 4015.0], [89.2, 4022.0], [89.3, 4042.0], [89.4, 4053.0], [89.5, 4064.0], [89.6, 4080.0], [89.7, 4096.0], [89.8, 4108.0], [89.9, 4125.0], [90.0, 4136.0], [90.1, 4151.0], [90.2, 4157.0], [90.3, 4175.0], [90.4, 4184.0], [90.5, 4198.0], [90.6, 4208.0], [90.7, 4213.0], [90.8, 4231.0], [90.9, 4239.0], [91.0, 4253.0], [91.1, 4260.0], [91.2, 4267.0], [91.3, 4289.0], [91.4, 4305.0], [91.5, 4313.0], [91.6, 4318.0], [91.7, 4329.0], [91.8, 4339.0], [91.9, 4353.0], [92.0, 4360.0], [92.1, 4369.0], [92.2, 4382.0], [92.3, 4413.0], [92.4, 4437.0], [92.5, 4438.0], [92.6, 4448.0], [92.7, 4462.0], [92.8, 4478.0], [92.9, 4510.0], [93.0, 4525.0], [93.1, 4535.0], [93.2, 4560.0], [93.3, 4577.0], [93.4, 4596.0], [93.5, 4618.0], [93.6, 4638.0], [93.7, 4669.0], [93.8, 4683.0], [93.9, 4695.0], [94.0, 4731.0], [94.1, 4749.0], [94.2, 4763.0], [94.3, 4802.0], [94.4, 4825.0], [94.5, 4868.0], [94.6, 4903.0], [94.7, 4925.0], [94.8, 4949.0], [94.9, 4972.0], [95.0, 4992.0], [95.1, 5070.0], [95.2, 5122.0], [95.3, 5134.0], [95.4, 5256.0], [95.5, 5289.0], [95.6, 5302.0], [95.7, 5337.0], [95.8, 5379.0], [95.9, 5458.0], [96.0, 5467.0], [96.1, 5510.0], [96.2, 5551.0], [96.3, 5574.0], [96.4, 5654.0], [96.5, 5710.0], [96.6, 5795.0], [96.7, 5818.0], [96.8, 5891.0], [96.9, 5996.0], [97.0, 6052.0], [97.1, 6143.0], [97.2, 6248.0], [97.3, 6293.0], [97.4, 6417.0], [97.5, 6503.0], [97.6, 6558.0], [97.7, 6625.0], [97.8, 6730.0], [97.9, 6826.0], [98.0, 6901.0], [98.1, 6981.0], [98.2, 7052.0], [98.3, 7124.0], [98.4, 7211.0], [98.5, 7299.0], [98.6, 7422.0], [98.7, 7449.0], [98.8, 7495.0], [98.9, 7554.0], [99.0, 7627.0], [99.1, 7744.0], [99.2, 8463.0], [99.3, 9024.0], [99.4, 9222.0], [99.5, 9697.0], [99.6, 10835.0], [99.7, 12241.0], [99.8, 12485.0], [99.9, 12664.0], [100.0, 12885.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 385.0, "series": [{"data": [[100.0, 3.0], [200.0, 4.0], [300.0, 2.0], [400.0, 113.0], [500.0, 341.0], [600.0, 96.0], [700.0, 222.0], [800.0, 385.0], [900.0, 258.0], [1000.0, 229.0], [1100.0, 241.0], [1200.0, 205.0], [1300.0, 188.0], [1400.0, 175.0], [1500.0, 175.0], [1600.0, 148.0], [1700.0, 118.0], [1800.0, 114.0], [1900.0, 99.0], [2000.0, 115.0], [2100.0, 94.0], [2200.0, 116.0], [2300.0, 88.0], [2400.0, 97.0], [2500.0, 107.0], [2600.0, 81.0], [2700.0, 62.0], [2800.0, 59.0], [2900.0, 72.0], [3000.0, 66.0], [3100.0, 84.0], [3300.0, 82.0], [3200.0, 71.0], [3400.0, 48.0], [3500.0, 71.0], [3700.0, 71.0], [3600.0, 61.0], [3800.0, 63.0], [3900.0, 57.0], [4000.0, 41.0], [4300.0, 47.0], [4200.0, 44.0], [4100.0, 42.0], [4500.0, 29.0], [4600.0, 27.0], [4400.0, 31.0], [4800.0, 15.0], [4700.0, 20.0], [5000.0, 9.0], [4900.0, 22.0], [5100.0, 8.0], [5300.0, 12.0], [5200.0, 14.0], [5400.0, 12.0], [5500.0, 15.0], [5600.0, 6.0], [5700.0, 10.0], [5800.0, 9.0], [6100.0, 8.0], [5900.0, 6.0], [6000.0, 5.0], [6200.0, 7.0], [6300.0, 3.0], [6500.0, 8.0], [6600.0, 6.0], [6400.0, 7.0], [6700.0, 6.0], [6900.0, 8.0], [6800.0, 6.0], [7000.0, 7.0], [7100.0, 3.0], [7200.0, 10.0], [7300.0, 4.0], [7400.0, 11.0], [7500.0, 9.0], [7600.0, 4.0], [7700.0, 3.0], [8000.0, 1.0], [8100.0, 2.0], [8400.0, 2.0], [8700.0, 1.0], [8200.0, 1.0], [9000.0, 3.0], [9200.0, 3.0], [8900.0, 3.0], [9100.0, 1.0], [9500.0, 1.0], [9700.0, 1.0], [9600.0, 2.0], [9400.0, 1.0], [10200.0, 1.0], [10000.0, 1.0], [10300.0, 1.0], [10800.0, 1.0], [11000.0, 1.0], [11400.0, 1.0], [11300.0, 1.0], [11700.0, 1.0], [12100.0, 1.0], [12200.0, 2.0], [12300.0, 1.0], [12500.0, 1.0], [12600.0, 4.0], [12700.0, 3.0], [12400.0, 3.0], [12800.0, 2.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 12800.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 126.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2799.0, "series": [{"data": [[0.0, 126.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 2337.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 2799.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 11.440677966101696, "minX": 1.60506666E12, "maxY": 12.0, "series": [{"data": [[1.6050672E12, 12.0], [1.6050669E12, 12.0], [1.60506756E12, 11.440677966101696], [1.60506726E12, 12.0], [1.60506696E12, 12.0], [1.60506666E12, 11.867647058823536], [1.60506732E12, 12.0], [1.60506702E12, 12.0], [1.60506672E12, 12.0], [1.60506738E12, 12.0], [1.60506708E12, 12.0], [1.60506678E12, 12.0], [1.60506744E12, 12.0], [1.60506714E12, 12.0], [1.60506684E12, 12.0], [1.6050675E12, 12.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60506756E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 2112.601602747561, "minX": 1.0, "maxY": 12732.0, "series": [{"data": [[8.0, 6498.5], [4.0, 12621.0], [2.0, 12450.0], [1.0, 12442.0], [9.0, 12732.0], [5.0, 4377.0], [10.0, 4462.666666666667], [11.0, 6519.5], [6.0, 4460.0], [12.0, 2112.601602747561], [3.0, 12485.0], [7.0, 4397.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[11.978905359179056, 2131.1290383884457]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 12.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 1052.2666666666667, "minX": 1.60506666E12, "maxY": 457862.56666666665, "series": [{"data": [[1.6050672E12, 125464.93333333333], [1.6050669E12, 309709.7166666667], [1.60506756E12, 62986.65], [1.60506726E12, 183001.13333333333], [1.60506696E12, 253240.6], [1.60506666E12, 155111.38333333333], [1.60506732E12, 414439.2166666667], [1.60506702E12, 132098.78333333333], [1.60506672E12, 300283.25], [1.60506738E12, 457862.56666666665], [1.60506708E12, 361568.55], [1.60506678E12, 373394.25], [1.60506744E12, 204714.98333333334], [1.60506714E12, 228949.75], [1.60506684E12, 327258.5], [1.6050675E12, 361146.2833333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6050672E12, 4988.933333333333], [1.6050669E12, 1546.05], [1.60506756E12, 1052.2666666666667], [1.60506726E12, 2554.2166666666667], [1.60506696E12, 3224.983333333333], [1.60506666E12, 3051.0333333333333], [1.60506732E12, 2987.016666666667], [1.60506702E12, 3566.4333333333334], [1.60506672E12, 2730.5333333333333], [1.60506738E12, 2543.65], [1.60506708E12, 4135.25], [1.60506678E12, 1637.7333333333333], [1.60506744E12, 2960.85], [1.60506714E12, 2283.733333333333], [1.60506684E12, 3297.8166666666666], [1.6050675E12, 2930.45]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60506756E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 1283.1384335154837, "minX": 1.60506666E12, "maxY": 4016.342541436466, "series": [{"data": [[1.6050672E12, 1352.007272727273], [1.6050669E12, 3954.8131868131886], [1.60506756E12, 3726.2372881355936], [1.60506726E12, 2488.017421602789], [1.60506696E12, 2023.3434903047084], [1.60506666E12, 1985.2588235294131], [1.60506732E12, 1952.159217877095], [1.60506702E12, 1797.700748129676], [1.60506672E12, 2131.9017857142862], [1.60506738E12, 2572.719723183388], [1.60506708E12, 1283.1384335154837], [1.60506678E12, 4016.342541436466], [1.60506744E12, 2075.734939759036], [1.60506714E12, 2676.936090225567], [1.60506684E12, 1924.698412698413], [1.6050675E12, 2250.6497005988044]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60506756E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 1282.8069216757754, "minX": 1.60506666E12, "maxY": 4015.2817679558016, "series": [{"data": [[1.6050672E12, 1351.878181818181], [1.6050669E12, 3953.9725274725242], [1.60506756E12, 3726.0084745762715], [1.60506726E12, 2487.6724738675975], [1.60506696E12, 2022.9833795013856], [1.60506666E12, 1984.9558823529408], [1.60506732E12, 1951.6284916201116], [1.60506702E12, 1797.551122194514], [1.60506672E12, 2131.3958333333326], [1.60506738E12, 2571.930795847751], [1.60506708E12, 1282.8069216757754], [1.60506678E12, 4015.2817679558016], [1.60506744E12, 2075.427710843373], [1.60506714E12, 2676.518796992482], [1.60506684E12, 1924.2566137566137], [1.6050675E12, 2250.110778443114]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60506756E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.01694915254237288, "minX": 1.60506666E12, "maxY": 0.30882352941176455, "series": [{"data": [[1.6050672E12, 0.027272727272727275], [1.6050669E12, 0.08791208791208793], [1.60506756E12, 0.01694915254237288], [1.60506726E12, 0.055749128919860606], [1.60506696E12, 0.03878116343490308], [1.60506666E12, 0.30882352941176455], [1.60506732E12, 0.03910614525139666], [1.60506702E12, 0.04488778054862846], [1.60506672E12, 0.04464285714285717], [1.60506738E12, 0.04152249134948096], [1.60506708E12, 0.021857923497267756], [1.60506678E12, 0.08287292817679562], [1.60506744E12, 0.04518072289156625], [1.60506714E12, 0.04887218045112782], [1.60506684E12, 0.0423280423280423], [1.6050675E12, 0.041916167664670705]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60506756E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 182.0, "minX": 1.60506666E12, "maxY": 12885.0, "series": [{"data": [[1.6050672E12, 4915.0], [1.6050669E12, 7704.0], [1.60506756E12, 12885.0], [1.60506726E12, 5280.0], [1.60506696E12, 6856.0], [1.60506666E12, 5467.0], [1.60506732E12, 5706.0], [1.60506702E12, 12337.0], [1.60506672E12, 4797.0], [1.60506738E12, 7530.0], [1.60506708E12, 4989.0], [1.60506678E12, 9765.0], [1.60506744E12, 7722.0], [1.60506714E12, 5855.0], [1.60506684E12, 3902.0], [1.6050675E12, 7025.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6050672E12, 419.87699960589407], [1.6050669E12, 965.9409998691082], [1.60506756E12, 648.0], [1.60506726E12, 508.1839998626709], [1.60506696E12, 450.25799991369246], [1.60506666E12, 196.1729986178875], [1.60506732E12, 515.2309999144077], [1.60506702E12, 489.0], [1.60506672E12, 617.0659998393058], [1.60506738E12, 522.7399976491928], [1.60506708E12, 495.0], [1.60506678E12, 435.2759999132156], [1.60506744E12, 512.9909997618198], [1.60506714E12, 504.4029999363422], [1.60506684E12, 506.64399963855743], [1.6050675E12, 417.01499992012975]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6050672E12, 420.9098001050949], [1.6050669E12, 966.4351000523567], [1.60506756E12, 648.0], [1.60506726E12, 508.7024000549316], [1.60506696E12, 450.583800034523], [1.60506666E12, 201.390300552845], [1.60506732E12, 515.5541000342369], [1.60506702E12, 489.0], [1.60506672E12, 617.6726000642776], [1.60506738E12, 531.6140009403229], [1.60506708E12, 495.8900001049042], [1.60506678E12, 435.60360003471374], [1.60506744E12, 514.1868001270294], [1.60506714E12, 504.6433000254631], [1.60506684E12, 508.008400144577], [1.6050675E12, 417.31650003194807]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6050672E12, 420.4689998686314], [1.6050669E12, 966.2154999345541], [1.60506756E12, 648.0], [1.60506726E12, 508.47199993133546], [1.60506696E12, 450.43899995684626], [1.60506666E12, 199.07149930894374], [1.60506732E12, 515.4104999572039], [1.60506702E12, 489.0], [1.60506672E12, 617.402999919653], [1.60506738E12, 527.6699988245964], [1.60506708E12, 495.4499998688698], [1.60506678E12, 435.4579999566078], [1.60506744E12, 513.6539998412132], [1.60506714E12, 504.53649996817114], [1.60506684E12, 507.4019998192787], [1.6050675E12, 417.1824999600649]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.6050672E12, 411.0], [1.6050669E12, 964.0], [1.60506756E12, 648.0], [1.60506726E12, 476.0], [1.60506696E12, 443.0], [1.60506666E12, 182.0], [1.60506732E12, 513.0], [1.60506702E12, 486.0], [1.60506672E12, 612.0], [1.60506738E12, 492.0], [1.60506708E12, 491.0], [1.60506678E12, 434.0], [1.60506744E12, 506.0], [1.60506714E12, 502.0], [1.60506684E12, 503.0], [1.6050675E12, 408.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6050672E12, 1096.5], [1.6050669E12, 3914.5], [1.60506756E12, 2510.0], [1.60506726E12, 2455.0], [1.60506696E12, 1358.0], [1.60506666E12, 1725.5], [1.60506732E12, 1437.0], [1.60506702E12, 1180.0], [1.60506672E12, 1880.0], [1.60506738E12, 2304.0], [1.60506708E12, 880.0], [1.60506678E12, 3620.0], [1.60506744E12, 1656.5], [1.60506714E12, 2641.5], [1.60506684E12, 1947.5], [1.6050675E12, 1545.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60506756E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 475.5, "minX": 1.0, "maxY": 6405.0, "series": [{"data": [[2.0, 4236.0], [3.0, 3561.0], [4.0, 2945.5], [5.0, 2365.0], [6.0, 2154.0], [7.0, 1927.0], [8.0, 1647.5], [9.0, 1415.0], [10.0, 1522.5], [11.0, 1105.5], [12.0, 1133.0], [13.0, 1041.0], [14.0, 898.5], [15.0, 856.0], [1.0, 6405.0], [16.0, 777.5], [17.0, 797.0], [18.0, 718.5], [19.0, 580.0], [20.0, 610.0], [21.0, 572.0], [22.0, 555.0], [23.0, 527.5], [24.0, 510.5], [25.0, 475.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 25.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 475.5, "minX": 1.0, "maxY": 6403.0, "series": [{"data": [[2.0, 4233.5], [3.0, 3559.0], [4.0, 2945.5], [5.0, 2365.0], [6.0, 2153.5], [7.0, 1927.0], [8.0, 1645.5], [9.0, 1415.0], [10.0, 1522.5], [11.0, 1104.5], [12.0, 1133.0], [13.0, 1041.0], [14.0, 898.5], [15.0, 856.0], [1.0, 6403.0], [16.0, 776.5], [17.0, 797.0], [18.0, 718.5], [19.0, 580.0], [20.0, 610.0], [21.0, 572.0], [22.0, 555.0], [23.0, 527.5], [24.0, 510.5], [25.0, 475.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 25.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1.7666666666666666, "minX": 1.60506666E12, "maxY": 9.166666666666666, "series": [{"data": [[1.6050672E12, 9.166666666666666], [1.6050669E12, 3.033333333333333], [1.60506756E12, 1.7666666666666666], [1.60506726E12, 4.783333333333333], [1.60506696E12, 6.016666666666667], [1.60506666E12, 5.866666666666666], [1.60506732E12, 5.966666666666667], [1.60506702E12, 6.683333333333334], [1.60506672E12, 5.6], [1.60506738E12, 4.816666666666666], [1.60506708E12, 9.15], [1.60506678E12, 3.0166666666666666], [1.60506744E12, 5.533333333333333], [1.60506714E12, 4.433333333333334], [1.60506684E12, 6.3], [1.6050675E12, 5.566666666666666]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60506756E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1.9666666666666666, "minX": 1.60506666E12, "maxY": 9.166666666666666, "series": [{"data": [[1.6050672E12, 9.166666666666666], [1.6050669E12, 3.033333333333333], [1.60506756E12, 1.9666666666666666], [1.60506726E12, 4.783333333333333], [1.60506696E12, 6.016666666666667], [1.60506666E12, 5.666666666666667], [1.60506732E12, 5.966666666666667], [1.60506702E12, 6.683333333333334], [1.60506672E12, 5.6], [1.60506738E12, 4.816666666666666], [1.60506708E12, 9.15], [1.60506678E12, 3.0166666666666666], [1.60506744E12, 5.533333333333333], [1.60506714E12, 4.433333333333334], [1.60506684E12, 6.3], [1.6050675E12, 5.566666666666666]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60506756E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.9666666666666666, "minX": 1.60506666E12, "maxY": 9.166666666666666, "series": [{"data": [[1.6050672E12, 9.166666666666666], [1.6050669E12, 3.033333333333333], [1.60506756E12, 1.9666666666666666], [1.60506726E12, 4.783333333333333], [1.60506696E12, 6.016666666666667], [1.60506666E12, 5.666666666666667], [1.60506732E12, 5.966666666666667], [1.60506702E12, 6.683333333333334], [1.60506672E12, 5.6], [1.60506738E12, 4.816666666666666], [1.60506708E12, 9.15], [1.60506678E12, 3.0166666666666666], [1.60506744E12, 5.533333333333333], [1.60506714E12, 4.433333333333334], [1.60506684E12, 6.3], [1.6050675E12, 5.566666666666666]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60506756E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.9666666666666666, "minX": 1.60506666E12, "maxY": 9.166666666666666, "series": [{"data": [[1.6050672E12, 9.166666666666666], [1.6050669E12, 3.033333333333333], [1.60506756E12, 1.9666666666666666], [1.60506726E12, 4.783333333333333], [1.60506696E12, 6.016666666666667], [1.60506666E12, 5.666666666666667], [1.60506732E12, 5.966666666666667], [1.60506702E12, 6.683333333333334], [1.60506672E12, 5.6], [1.60506738E12, 4.816666666666666], [1.60506708E12, 9.15], [1.60506678E12, 3.0166666666666666], [1.60506744E12, 5.533333333333333], [1.60506714E12, 4.433333333333334], [1.60506684E12, 6.3], [1.6050675E12, 5.566666666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60506756E12, "title": "Total Transactions Per Second"}},
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

