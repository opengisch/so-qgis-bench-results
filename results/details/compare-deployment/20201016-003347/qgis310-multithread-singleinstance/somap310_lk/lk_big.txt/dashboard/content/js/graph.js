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
        data: {"result": {"minY": 137.0, "minX": 0.0, "maxY": 12724.0, "series": [{"data": [[0.0, 137.0], [0.1, 234.0], [0.2, 388.0], [0.3, 397.0], [0.4, 406.0], [0.5, 410.0], [0.6, 411.0], [0.7, 414.0], [0.8, 416.0], [0.9, 417.0], [1.0, 422.0], [1.1, 425.0], [1.2, 426.0], [1.3, 427.0], [1.4, 430.0], [1.5, 433.0], [1.6, 435.0], [1.7, 436.0], [1.8, 437.0], [1.9, 439.0], [2.0, 440.0], [2.1, 441.0], [2.2, 443.0], [2.3, 443.0], [2.4, 444.0], [2.5, 445.0], [2.6, 447.0], [2.7, 448.0], [2.8, 449.0], [2.9, 449.0], [3.0, 449.0], [3.1, 451.0], [3.2, 451.0], [3.3, 453.0], [3.4, 454.0], [3.5, 456.0], [3.6, 457.0], [3.7, 458.0], [3.8, 460.0], [3.9, 461.0], [4.0, 462.0], [4.1, 463.0], [4.2, 464.0], [4.3, 465.0], [4.4, 466.0], [4.5, 467.0], [4.6, 469.0], [4.7, 471.0], [4.8, 472.0], [4.9, 473.0], [5.0, 474.0], [5.1, 475.0], [5.2, 477.0], [5.3, 479.0], [5.4, 481.0], [5.5, 482.0], [5.6, 483.0], [5.7, 483.0], [5.8, 485.0], [5.9, 486.0], [6.0, 486.0], [6.1, 488.0], [6.2, 491.0], [6.3, 493.0], [6.4, 495.0], [6.5, 497.0], [6.6, 498.0], [6.7, 499.0], [6.8, 501.0], [6.9, 503.0], [7.0, 504.0], [7.1, 505.0], [7.2, 506.0], [7.3, 508.0], [7.4, 509.0], [7.5, 511.0], [7.6, 514.0], [7.7, 517.0], [7.8, 520.0], [7.9, 522.0], [8.0, 529.0], [8.1, 533.0], [8.2, 536.0], [8.3, 544.0], [8.4, 549.0], [8.5, 552.0], [8.6, 555.0], [8.7, 558.0], [8.8, 563.0], [8.9, 567.0], [9.0, 571.0], [9.1, 573.0], [9.2, 574.0], [9.3, 580.0], [9.4, 583.0], [9.5, 587.0], [9.6, 595.0], [9.7, 596.0], [9.8, 607.0], [9.9, 611.0], [10.0, 617.0], [10.1, 625.0], [10.2, 627.0], [10.3, 631.0], [10.4, 636.0], [10.5, 642.0], [10.6, 647.0], [10.7, 651.0], [10.8, 653.0], [10.9, 656.0], [11.0, 658.0], [11.1, 659.0], [11.2, 660.0], [11.3, 663.0], [11.4, 668.0], [11.5, 676.0], [11.6, 678.0], [11.7, 681.0], [11.8, 681.0], [11.9, 685.0], [12.0, 686.0], [12.1, 689.0], [12.2, 690.0], [12.3, 694.0], [12.4, 698.0], [12.5, 700.0], [12.6, 703.0], [12.7, 706.0], [12.8, 707.0], [12.9, 709.0], [13.0, 712.0], [13.1, 713.0], [13.2, 714.0], [13.3, 716.0], [13.4, 717.0], [13.5, 719.0], [13.6, 720.0], [13.7, 721.0], [13.8, 724.0], [13.9, 725.0], [14.0, 727.0], [14.1, 729.0], [14.2, 731.0], [14.3, 732.0], [14.4, 734.0], [14.5, 734.0], [14.6, 738.0], [14.7, 739.0], [14.8, 741.0], [14.9, 743.0], [15.0, 745.0], [15.1, 746.0], [15.2, 746.0], [15.3, 747.0], [15.4, 748.0], [15.5, 749.0], [15.6, 749.0], [15.7, 750.0], [15.8, 750.0], [15.9, 750.0], [16.0, 751.0], [16.1, 753.0], [16.2, 754.0], [16.3, 755.0], [16.4, 756.0], [16.5, 758.0], [16.6, 758.0], [16.7, 759.0], [16.8, 760.0], [16.9, 761.0], [17.0, 762.0], [17.1, 763.0], [17.2, 764.0], [17.3, 766.0], [17.4, 767.0], [17.5, 768.0], [17.6, 768.0], [17.7, 769.0], [17.8, 769.0], [17.9, 771.0], [18.0, 772.0], [18.1, 772.0], [18.2, 774.0], [18.3, 774.0], [18.4, 777.0], [18.5, 778.0], [18.6, 779.0], [18.7, 779.0], [18.8, 781.0], [18.9, 782.0], [19.0, 783.0], [19.1, 785.0], [19.2, 786.0], [19.3, 786.0], [19.4, 787.0], [19.5, 789.0], [19.6, 792.0], [19.7, 794.0], [19.8, 795.0], [19.9, 796.0], [20.0, 799.0], [20.1, 801.0], [20.2, 802.0], [20.3, 804.0], [20.4, 806.0], [20.5, 807.0], [20.6, 808.0], [20.7, 809.0], [20.8, 810.0], [20.9, 811.0], [21.0, 813.0], [21.1, 815.0], [21.2, 816.0], [21.3, 817.0], [21.4, 818.0], [21.5, 819.0], [21.6, 820.0], [21.7, 821.0], [21.8, 823.0], [21.9, 824.0], [22.0, 825.0], [22.1, 828.0], [22.2, 830.0], [22.3, 831.0], [22.4, 833.0], [22.5, 835.0], [22.6, 836.0], [22.7, 837.0], [22.8, 839.0], [22.9, 844.0], [23.0, 848.0], [23.1, 851.0], [23.2, 853.0], [23.3, 857.0], [23.4, 859.0], [23.5, 863.0], [23.6, 864.0], [23.7, 866.0], [23.8, 867.0], [23.9, 869.0], [24.0, 871.0], [24.1, 871.0], [24.2, 873.0], [24.3, 874.0], [24.4, 876.0], [24.5, 879.0], [24.6, 880.0], [24.7, 882.0], [24.8, 883.0], [24.9, 885.0], [25.0, 887.0], [25.1, 888.0], [25.2, 889.0], [25.3, 890.0], [25.4, 891.0], [25.5, 892.0], [25.6, 895.0], [25.7, 896.0], [25.8, 899.0], [25.9, 904.0], [26.0, 907.0], [26.1, 911.0], [26.2, 913.0], [26.3, 916.0], [26.4, 920.0], [26.5, 922.0], [26.6, 924.0], [26.7, 928.0], [26.8, 934.0], [26.9, 938.0], [27.0, 942.0], [27.1, 944.0], [27.2, 946.0], [27.3, 947.0], [27.4, 949.0], [27.5, 950.0], [27.6, 951.0], [27.7, 952.0], [27.8, 954.0], [27.9, 955.0], [28.0, 956.0], [28.1, 957.0], [28.2, 960.0], [28.3, 962.0], [28.4, 963.0], [28.5, 965.0], [28.6, 967.0], [28.7, 970.0], [28.8, 971.0], [28.9, 974.0], [29.0, 976.0], [29.1, 979.0], [29.2, 981.0], [29.3, 983.0], [29.4, 985.0], [29.5, 986.0], [29.6, 988.0], [29.7, 988.0], [29.8, 992.0], [29.9, 996.0], [30.0, 998.0], [30.1, 1000.0], [30.2, 1004.0], [30.3, 1007.0], [30.4, 1011.0], [30.5, 1013.0], [30.6, 1017.0], [30.7, 1019.0], [30.8, 1021.0], [30.9, 1023.0], [31.0, 1027.0], [31.1, 1031.0], [31.2, 1033.0], [31.3, 1038.0], [31.4, 1039.0], [31.5, 1041.0], [31.6, 1044.0], [31.7, 1046.0], [31.8, 1047.0], [31.9, 1049.0], [32.0, 1050.0], [32.1, 1053.0], [32.2, 1055.0], [32.3, 1060.0], [32.4, 1061.0], [32.5, 1063.0], [32.6, 1066.0], [32.7, 1067.0], [32.8, 1069.0], [32.9, 1070.0], [33.0, 1071.0], [33.1, 1072.0], [33.2, 1073.0], [33.3, 1077.0], [33.4, 1079.0], [33.5, 1081.0], [33.6, 1082.0], [33.7, 1083.0], [33.8, 1084.0], [33.9, 1087.0], [34.0, 1090.0], [34.1, 1090.0], [34.2, 1092.0], [34.3, 1092.0], [34.4, 1095.0], [34.5, 1097.0], [34.6, 1101.0], [34.7, 1103.0], [34.8, 1106.0], [34.9, 1107.0], [35.0, 1107.0], [35.1, 1109.0], [35.2, 1111.0], [35.3, 1112.0], [35.4, 1114.0], [35.5, 1118.0], [35.6, 1119.0], [35.7, 1123.0], [35.8, 1127.0], [35.9, 1131.0], [36.0, 1135.0], [36.1, 1137.0], [36.2, 1139.0], [36.3, 1141.0], [36.4, 1145.0], [36.5, 1148.0], [36.6, 1150.0], [36.7, 1153.0], [36.8, 1153.0], [36.9, 1156.0], [37.0, 1158.0], [37.1, 1163.0], [37.2, 1167.0], [37.3, 1170.0], [37.4, 1173.0], [37.5, 1176.0], [37.6, 1178.0], [37.7, 1180.0], [37.8, 1181.0], [37.9, 1182.0], [38.0, 1184.0], [38.1, 1186.0], [38.2, 1189.0], [38.3, 1191.0], [38.4, 1193.0], [38.5, 1196.0], [38.6, 1200.0], [38.7, 1203.0], [38.8, 1205.0], [38.9, 1206.0], [39.0, 1210.0], [39.1, 1211.0], [39.2, 1213.0], [39.3, 1219.0], [39.4, 1225.0], [39.5, 1227.0], [39.6, 1231.0], [39.7, 1233.0], [39.8, 1235.0], [39.9, 1238.0], [40.0, 1240.0], [40.1, 1243.0], [40.2, 1245.0], [40.3, 1249.0], [40.4, 1251.0], [40.5, 1253.0], [40.6, 1254.0], [40.7, 1257.0], [40.8, 1260.0], [40.9, 1262.0], [41.0, 1264.0], [41.1, 1267.0], [41.2, 1273.0], [41.3, 1274.0], [41.4, 1276.0], [41.5, 1278.0], [41.6, 1280.0], [41.7, 1282.0], [41.8, 1285.0], [41.9, 1287.0], [42.0, 1289.0], [42.1, 1292.0], [42.2, 1295.0], [42.3, 1299.0], [42.4, 1301.0], [42.5, 1304.0], [42.6, 1305.0], [42.7, 1309.0], [42.8, 1311.0], [42.9, 1314.0], [43.0, 1315.0], [43.1, 1317.0], [43.2, 1320.0], [43.3, 1321.0], [43.4, 1324.0], [43.5, 1326.0], [43.6, 1329.0], [43.7, 1332.0], [43.8, 1335.0], [43.9, 1337.0], [44.0, 1339.0], [44.1, 1342.0], [44.2, 1343.0], [44.3, 1345.0], [44.4, 1347.0], [44.5, 1352.0], [44.6, 1359.0], [44.7, 1367.0], [44.8, 1371.0], [44.9, 1374.0], [45.0, 1377.0], [45.1, 1379.0], [45.2, 1380.0], [45.3, 1381.0], [45.4, 1382.0], [45.5, 1384.0], [45.6, 1386.0], [45.7, 1387.0], [45.8, 1389.0], [45.9, 1394.0], [46.0, 1397.0], [46.1, 1400.0], [46.2, 1406.0], [46.3, 1410.0], [46.4, 1412.0], [46.5, 1414.0], [46.6, 1418.0], [46.7, 1422.0], [46.8, 1428.0], [46.9, 1431.0], [47.0, 1434.0], [47.1, 1437.0], [47.2, 1439.0], [47.3, 1440.0], [47.4, 1443.0], [47.5, 1445.0], [47.6, 1446.0], [47.7, 1447.0], [47.8, 1448.0], [47.9, 1450.0], [48.0, 1451.0], [48.1, 1454.0], [48.2, 1456.0], [48.3, 1458.0], [48.4, 1460.0], [48.5, 1467.0], [48.6, 1470.0], [48.7, 1474.0], [48.8, 1477.0], [48.9, 1480.0], [49.0, 1484.0], [49.1, 1486.0], [49.2, 1488.0], [49.3, 1498.0], [49.4, 1501.0], [49.5, 1503.0], [49.6, 1508.0], [49.7, 1511.0], [49.8, 1514.0], [49.9, 1522.0], [50.0, 1525.0], [50.1, 1532.0], [50.2, 1534.0], [50.3, 1539.0], [50.4, 1543.0], [50.5, 1547.0], [50.6, 1551.0], [50.7, 1554.0], [50.8, 1563.0], [50.9, 1565.0], [51.0, 1570.0], [51.1, 1574.0], [51.2, 1578.0], [51.3, 1583.0], [51.4, 1588.0], [51.5, 1592.0], [51.6, 1602.0], [51.7, 1604.0], [51.8, 1606.0], [51.9, 1610.0], [52.0, 1614.0], [52.1, 1618.0], [52.2, 1623.0], [52.3, 1629.0], [52.4, 1637.0], [52.5, 1646.0], [52.6, 1656.0], [52.7, 1661.0], [52.8, 1664.0], [52.9, 1668.0], [53.0, 1672.0], [53.1, 1676.0], [53.2, 1681.0], [53.3, 1683.0], [53.4, 1685.0], [53.5, 1689.0], [53.6, 1692.0], [53.7, 1694.0], [53.8, 1696.0], [53.9, 1698.0], [54.0, 1698.0], [54.1, 1700.0], [54.2, 1702.0], [54.3, 1705.0], [54.4, 1707.0], [54.5, 1708.0], [54.6, 1713.0], [54.7, 1715.0], [54.8, 1719.0], [54.9, 1724.0], [55.0, 1731.0], [55.1, 1735.0], [55.2, 1741.0], [55.3, 1742.0], [55.4, 1746.0], [55.5, 1753.0], [55.6, 1757.0], [55.7, 1759.0], [55.8, 1765.0], [55.9, 1768.0], [56.0, 1771.0], [56.1, 1777.0], [56.2, 1781.0], [56.3, 1788.0], [56.4, 1792.0], [56.5, 1795.0], [56.6, 1799.0], [56.7, 1802.0], [56.8, 1808.0], [56.9, 1816.0], [57.0, 1818.0], [57.1, 1821.0], [57.2, 1825.0], [57.3, 1828.0], [57.4, 1835.0], [57.5, 1837.0], [57.6, 1841.0], [57.7, 1847.0], [57.8, 1852.0], [57.9, 1856.0], [58.0, 1865.0], [58.1, 1871.0], [58.2, 1875.0], [58.3, 1880.0], [58.4, 1885.0], [58.5, 1891.0], [58.6, 1894.0], [58.7, 1899.0], [58.8, 1910.0], [58.9, 1914.0], [59.0, 1917.0], [59.1, 1919.0], [59.2, 1923.0], [59.3, 1928.0], [59.4, 1929.0], [59.5, 1934.0], [59.6, 1945.0], [59.7, 1949.0], [59.8, 1952.0], [59.9, 1961.0], [60.0, 1969.0], [60.1, 1976.0], [60.2, 1982.0], [60.3, 1991.0], [60.4, 1996.0], [60.5, 2003.0], [60.6, 2007.0], [60.7, 2013.0], [60.8, 2015.0], [60.9, 2022.0], [61.0, 2025.0], [61.1, 2028.0], [61.2, 2037.0], [61.3, 2042.0], [61.4, 2046.0], [61.5, 2049.0], [61.6, 2052.0], [61.7, 2057.0], [61.8, 2061.0], [61.9, 2067.0], [62.0, 2071.0], [62.1, 2077.0], [62.2, 2081.0], [62.3, 2087.0], [62.4, 2093.0], [62.5, 2097.0], [62.6, 2104.0], [62.7, 2107.0], [62.8, 2113.0], [62.9, 2116.0], [63.0, 2121.0], [63.1, 2124.0], [63.2, 2126.0], [63.3, 2130.0], [63.4, 2135.0], [63.5, 2137.0], [63.6, 2142.0], [63.7, 2147.0], [63.8, 2153.0], [63.9, 2159.0], [64.0, 2164.0], [64.1, 2167.0], [64.2, 2173.0], [64.3, 2175.0], [64.4, 2178.0], [64.5, 2184.0], [64.6, 2190.0], [64.7, 2196.0], [64.8, 2200.0], [64.9, 2206.0], [65.0, 2208.0], [65.1, 2212.0], [65.2, 2214.0], [65.3, 2219.0], [65.4, 2222.0], [65.5, 2225.0], [65.6, 2228.0], [65.7, 2231.0], [65.8, 2234.0], [65.9, 2246.0], [66.0, 2250.0], [66.1, 2255.0], [66.2, 2259.0], [66.3, 2264.0], [66.4, 2267.0], [66.5, 2276.0], [66.6, 2286.0], [66.7, 2288.0], [66.8, 2291.0], [66.9, 2295.0], [67.0, 2302.0], [67.1, 2310.0], [67.2, 2319.0], [67.3, 2323.0], [67.4, 2332.0], [67.5, 2337.0], [67.6, 2346.0], [67.7, 2355.0], [67.8, 2363.0], [67.9, 2368.0], [68.0, 2379.0], [68.1, 2386.0], [68.2, 2392.0], [68.3, 2397.0], [68.4, 2401.0], [68.5, 2408.0], [68.6, 2413.0], [68.7, 2419.0], [68.8, 2421.0], [68.9, 2426.0], [69.0, 2429.0], [69.1, 2437.0], [69.2, 2446.0], [69.3, 2453.0], [69.4, 2455.0], [69.5, 2460.0], [69.6, 2469.0], [69.7, 2473.0], [69.8, 2480.0], [69.9, 2493.0], [70.0, 2501.0], [70.1, 2512.0], [70.2, 2516.0], [70.3, 2525.0], [70.4, 2528.0], [70.5, 2530.0], [70.6, 2533.0], [70.7, 2540.0], [70.8, 2547.0], [70.9, 2554.0], [71.0, 2562.0], [71.1, 2564.0], [71.2, 2570.0], [71.3, 2579.0], [71.4, 2588.0], [71.5, 2597.0], [71.6, 2600.0], [71.7, 2606.0], [71.8, 2615.0], [71.9, 2619.0], [72.0, 2627.0], [72.1, 2631.0], [72.2, 2637.0], [72.3, 2644.0], [72.4, 2647.0], [72.5, 2650.0], [72.6, 2657.0], [72.7, 2664.0], [72.8, 2669.0], [72.9, 2676.0], [73.0, 2682.0], [73.1, 2687.0], [73.2, 2692.0], [73.3, 2706.0], [73.4, 2714.0], [73.5, 2723.0], [73.6, 2732.0], [73.7, 2740.0], [73.8, 2750.0], [73.9, 2756.0], [74.0, 2760.0], [74.1, 2770.0], [74.2, 2778.0], [74.3, 2784.0], [74.4, 2788.0], [74.5, 2796.0], [74.6, 2801.0], [74.7, 2805.0], [74.8, 2814.0], [74.9, 2826.0], [75.0, 2828.0], [75.1, 2842.0], [75.2, 2852.0], [75.3, 2858.0], [75.4, 2865.0], [75.5, 2870.0], [75.6, 2876.0], [75.7, 2888.0], [75.8, 2890.0], [75.9, 2897.0], [76.0, 2907.0], [76.1, 2914.0], [76.2, 2924.0], [76.3, 2928.0], [76.4, 2941.0], [76.5, 2946.0], [76.6, 2950.0], [76.7, 2964.0], [76.8, 2976.0], [76.9, 2981.0], [77.0, 2985.0], [77.1, 2994.0], [77.2, 2996.0], [77.3, 3001.0], [77.4, 3012.0], [77.5, 3018.0], [77.6, 3024.0], [77.7, 3035.0], [77.8, 3039.0], [77.9, 3049.0], [78.0, 3054.0], [78.1, 3060.0], [78.2, 3072.0], [78.3, 3090.0], [78.4, 3100.0], [78.5, 3115.0], [78.6, 3119.0], [78.7, 3123.0], [78.8, 3135.0], [78.9, 3143.0], [79.0, 3151.0], [79.1, 3160.0], [79.2, 3167.0], [79.3, 3172.0], [79.4, 3178.0], [79.5, 3185.0], [79.6, 3189.0], [79.7, 3193.0], [79.8, 3199.0], [79.9, 3206.0], [80.0, 3215.0], [80.1, 3221.0], [80.2, 3233.0], [80.3, 3240.0], [80.4, 3254.0], [80.5, 3257.0], [80.6, 3272.0], [80.7, 3286.0], [80.8, 3295.0], [80.9, 3305.0], [81.0, 3314.0], [81.1, 3319.0], [81.2, 3325.0], [81.3, 3331.0], [81.4, 3337.0], [81.5, 3346.0], [81.6, 3350.0], [81.7, 3358.0], [81.8, 3367.0], [81.9, 3381.0], [82.0, 3388.0], [82.1, 3397.0], [82.2, 3401.0], [82.3, 3405.0], [82.4, 3410.0], [82.5, 3418.0], [82.6, 3422.0], [82.7, 3426.0], [82.8, 3432.0], [82.9, 3443.0], [83.0, 3449.0], [83.1, 3454.0], [83.2, 3463.0], [83.3, 3469.0], [83.4, 3476.0], [83.5, 3482.0], [83.6, 3490.0], [83.7, 3495.0], [83.8, 3504.0], [83.9, 3510.0], [84.0, 3519.0], [84.1, 3523.0], [84.2, 3528.0], [84.3, 3531.0], [84.4, 3534.0], [84.5, 3538.0], [84.6, 3542.0], [84.7, 3546.0], [84.8, 3554.0], [84.9, 3562.0], [85.0, 3573.0], [85.1, 3581.0], [85.2, 3586.0], [85.3, 3602.0], [85.4, 3607.0], [85.5, 3614.0], [85.6, 3623.0], [85.7, 3626.0], [85.8, 3632.0], [85.9, 3638.0], [86.0, 3645.0], [86.1, 3653.0], [86.2, 3660.0], [86.3, 3669.0], [86.4, 3676.0], [86.5, 3677.0], [86.6, 3686.0], [86.7, 3702.0], [86.8, 3715.0], [86.9, 3723.0], [87.0, 3728.0], [87.1, 3733.0], [87.2, 3743.0], [87.3, 3750.0], [87.4, 3762.0], [87.5, 3778.0], [87.6, 3786.0], [87.7, 3788.0], [87.8, 3800.0], [87.9, 3805.0], [88.0, 3811.0], [88.1, 3821.0], [88.2, 3830.0], [88.3, 3839.0], [88.4, 3848.0], [88.5, 3857.0], [88.6, 3871.0], [88.7, 3881.0], [88.8, 3895.0], [88.9, 3908.0], [89.0, 3924.0], [89.1, 3934.0], [89.2, 3949.0], [89.3, 3964.0], [89.4, 3977.0], [89.5, 3995.0], [89.6, 4005.0], [89.7, 4008.0], [89.8, 4013.0], [89.9, 4022.0], [90.0, 4048.0], [90.1, 4059.0], [90.2, 4083.0], [90.3, 4094.0], [90.4, 4099.0], [90.5, 4109.0], [90.6, 4118.0], [90.7, 4122.0], [90.8, 4138.0], [90.9, 4154.0], [91.0, 4165.0], [91.1, 4181.0], [91.2, 4196.0], [91.3, 4203.0], [91.4, 4211.0], [91.5, 4241.0], [91.6, 4258.0], [91.7, 4267.0], [91.8, 4289.0], [91.9, 4298.0], [92.0, 4307.0], [92.1, 4316.0], [92.2, 4335.0], [92.3, 4360.0], [92.4, 4370.0], [92.5, 4388.0], [92.6, 4412.0], [92.7, 4429.0], [92.8, 4440.0], [92.9, 4459.0], [93.0, 4467.0], [93.1, 4484.0], [93.2, 4536.0], [93.3, 4552.0], [93.4, 4573.0], [93.5, 4598.0], [93.6, 4617.0], [93.7, 4629.0], [93.8, 4645.0], [93.9, 4669.0], [94.0, 4688.0], [94.1, 4708.0], [94.2, 4714.0], [94.3, 4733.0], [94.4, 4772.0], [94.5, 4794.0], [94.6, 4815.0], [94.7, 4845.0], [94.8, 4935.0], [94.9, 4959.0], [95.0, 5021.0], [95.1, 5057.0], [95.2, 5095.0], [95.3, 5132.0], [95.4, 5166.0], [95.5, 5225.0], [95.6, 5237.0], [95.7, 5263.0], [95.8, 5282.0], [95.9, 5343.0], [96.0, 5410.0], [96.1, 5472.0], [96.2, 5519.0], [96.3, 5557.0], [96.4, 5591.0], [96.5, 5632.0], [96.6, 5694.0], [96.7, 5806.0], [96.8, 5902.0], [96.9, 5945.0], [97.0, 6034.0], [97.1, 6077.0], [97.2, 6154.0], [97.3, 6186.0], [97.4, 6286.0], [97.5, 6403.0], [97.6, 6447.0], [97.7, 6527.0], [97.8, 6668.0], [97.9, 6706.0], [98.0, 6792.0], [98.1, 6883.0], [98.2, 7054.0], [98.3, 7133.0], [98.4, 7188.0], [98.5, 7237.0], [98.6, 7283.0], [98.7, 7352.0], [98.8, 7397.0], [98.9, 7570.0], [99.0, 7760.0], [99.1, 7913.0], [99.2, 8238.0], [99.3, 8808.0], [99.4, 9293.0], [99.5, 9648.0], [99.6, 10780.0], [99.7, 12106.0], [99.8, 12183.0], [99.9, 12523.0], [100.0, 12724.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 396.0, "series": [{"data": [[100.0, 3.0], [200.0, 5.0], [300.0, 9.0], [400.0, 337.0], [500.0, 158.0], [600.0, 145.0], [700.0, 396.0], [800.0, 305.0], [900.0, 225.0], [1000.0, 237.0], [1100.0, 210.0], [1200.0, 196.0], [1300.0, 197.0], [1400.0, 176.0], [1500.0, 114.0], [1600.0, 132.0], [1700.0, 134.0], [1800.0, 111.0], [1900.0, 90.0], [2000.0, 112.0], [2100.0, 117.0], [2300.0, 73.0], [2200.0, 115.0], [2400.0, 86.0], [2500.0, 84.0], [2600.0, 88.0], [2800.0, 73.0], [2700.0, 67.0], [2900.0, 71.0], [3000.0, 59.0], [3100.0, 75.0], [3200.0, 54.0], [3300.0, 68.0], [3400.0, 85.0], [3500.0, 80.0], [3700.0, 58.0], [3600.0, 75.0], [3800.0, 54.0], [3900.0, 37.0], [4000.0, 46.0], [4300.0, 33.0], [4200.0, 37.0], [4100.0, 43.0], [4500.0, 21.0], [4600.0, 29.0], [4400.0, 29.0], [4700.0, 27.0], [4800.0, 8.0], [5000.0, 13.0], [4900.0, 13.0], [5100.0, 13.0], [5200.0, 19.0], [5300.0, 9.0], [5500.0, 14.0], [5600.0, 10.0], [5400.0, 9.0], [5800.0, 5.0], [5700.0, 4.0], [6000.0, 11.0], [6100.0, 10.0], [5900.0, 8.0], [6200.0, 6.0], [6300.0, 2.0], [6500.0, 5.0], [6400.0, 7.0], [6600.0, 7.0], [6800.0, 4.0], [6700.0, 10.0], [6900.0, 4.0], [7100.0, 11.0], [7000.0, 1.0], [7200.0, 12.0], [7300.0, 8.0], [7400.0, 2.0], [7500.0, 4.0], [7600.0, 3.0], [7700.0, 3.0], [7800.0, 3.0], [7900.0, 3.0], [8100.0, 2.0], [8700.0, 4.0], [8500.0, 1.0], [8200.0, 1.0], [9200.0, 1.0], [9000.0, 1.0], [8800.0, 2.0], [9100.0, 2.0], [9300.0, 2.0], [9500.0, 2.0], [9600.0, 2.0], [10200.0, 1.0], [10100.0, 1.0], [10000.0, 1.0], [10700.0, 1.0], [11100.0, 1.0], [11000.0, 1.0], [11500.0, 1.0], [11600.0, 1.0], [12100.0, 7.0], [11900.0, 1.0], [12500.0, 5.0], [12700.0, 1.0], [12600.0, 2.0], [12300.0, 1.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 12700.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 356.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2663.0, "series": [{"data": [[0.0, 356.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 2243.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 2663.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.130434782608695, "minX": 1.60280928E12, "maxY": 12.0, "series": [{"data": [[1.60280952E12, 12.0], [1.60281018E12, 9.130434782608695], [1.60280988E12, 12.0], [1.60280958E12, 12.0], [1.60280976E12, 12.0], [1.60280946E12, 12.0], [1.60281012E12, 12.0], [1.60280982E12, 12.0], [1.60281E12, 12.0], [1.6028097E12, 12.0], [1.6028094E12, 12.0], [1.60281006E12, 12.0], [1.60280928E12, 11.847352024922118], [1.60280994E12, 12.0], [1.60280964E12, 12.0], [1.60280934E12, 12.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60281018E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 2049.1015073459266, "minX": 1.0, "maxY": 12505.0, "series": [{"data": [[4.0, 4155.333333333334], [8.0, 12505.0], [2.0, 12110.0], [1.0, 11964.0], [9.0, 6426.5], [10.0, 6516.0], [5.0, 12312.0], [11.0, 6543.5], [6.0, 4329.666666666667], [12.0, 2049.1015073459266], [3.0, 12116.0], [7.0, 3296.75]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[11.978145191942236, 2067.2675788673523]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 12.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 196.0, "minX": 1.60280928E12, "maxY": 472902.88333333336, "series": [{"data": [[1.60280952E12, 304567.31666666665], [1.60281018E12, 31421.633333333335], [1.60280988E12, 234407.35], [1.60280958E12, 270887.4666666667], [1.60280976E12, 244575.11666666667], [1.60280946E12, 331071.4], [1.60281012E12, 272342.88333333336], [1.60280982E12, 96765.83333333333], [1.60281E12, 385124.0333333333], [1.6028097E12, 359340.61666666664], [1.6028094E12, 397100.68333333335], [1.60281006E12, 282203.11666666664], [1.60280928E12, 126207.85], [1.60280994E12, 472902.88333333336], [1.60280964E12, 152133.73333333334], [1.60280934E12, 289752.2166666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60280952E12, 1640.3166666666666], [1.60281018E12, 196.0], [1.60280988E12, 3058.9333333333334], [1.60280958E12, 3331.3333333333335], [1.60280976E12, 2356.233333333333], [1.60280946E12, 3325.7833333333333], [1.60281012E12, 3429.766666666667], [1.60280982E12, 4942.483333333334], [1.60281E12, 3134.95], [1.6028097E12, 4203.6], [1.6028094E12, 1709.9333333333334], [1.60281006E12, 2480.6833333333334], [1.60280928E12, 2886.883333333333], [1.60280994E12, 2347.05], [1.60280964E12, 3806.5666666666666], [1.60280934E12, 2640.4333333333334]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60281018E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 1306.1651542649736, "minX": 1.60280928E12, "maxY": 10478.304347826088, "series": [{"data": [[1.60280952E12, 3647.5520833333303], [1.60281018E12, 10478.304347826088], [1.60280988E12, 2052.0730337078694], [1.60280958E12, 1972.7801608579111], [1.60280976E12, 2618.1575091575105], [1.60280946E12, 1964.3359580052474], [1.60281012E12, 1855.3385416666672], [1.60280982E12, 1312.9631675874755], [1.60281E12, 2030.5758426966302], [1.6028097E12, 1306.1651542649736], [1.6028094E12, 3680.8210526315775], [1.60281006E12, 2511.243816254417], [1.60280928E12, 1810.9844236760134], [1.60280994E12, 2587.9854014598563], [1.60280964E12, 1654.4655963302757], [1.60280934E12, 2200.266871165644]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60281018E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 1305.8221415607982, "minX": 1.60280928E12, "maxY": 10477.608695652172, "series": [{"data": [[1.60280952E12, 3646.7447916666647], [1.60281018E12, 10477.608695652172], [1.60280988E12, 2051.7556179775283], [1.60280958E12, 1972.3806970509395], [1.60280976E12, 2617.743589743589], [1.60280946E12, 1963.9002624671907], [1.60281012E12, 1854.9817708333348], [1.60280982E12, 1312.8802946592994], [1.60281E12, 2030.0646067415726], [1.6028097E12, 1305.8221415607982], [1.6028094E12, 3679.7210526315785], [1.60281006E12, 2510.731448763251], [1.60280928E12, 1810.7320872274151], [1.60280994E12, 2587.186131386861], [1.60280964E12, 1654.2752293577973], [1.60280934E12, 2199.8190184049076]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60281018E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.60280928E12, "maxY": 0.3644859813084113, "series": [{"data": [[1.60280952E12, 0.08333333333333334], [1.60281018E12, 0.0], [1.60280988E12, 0.033707865168539304], [1.60280958E12, 0.04021447721179625], [1.60280976E12, 0.05494505494505492], [1.60280946E12, 0.0393700787401575], [1.60281012E12, 0.04166666666666668], [1.60280982E12, 0.025782688766114194], [1.60281E12, 0.03651685393258428], [1.6028097E12, 0.027223230490018152], [1.6028094E12, 0.06842105263157895], [1.60281006E12, 0.045936395759717315], [1.60280928E12, 0.3644859813084113], [1.60280994E12, 0.04379562043795621], [1.60280964E12, 0.029816513761467888], [1.60280934E12, 0.04601226993865033]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60281018E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 137.0, "minX": 1.60280928E12, "maxY": 12724.0, "series": [{"data": [[1.60280952E12, 7957.0], [1.60281018E12, 12724.0], [1.60280988E12, 5166.0], [1.60280958E12, 6822.0], [1.60280976E12, 5780.0], [1.60280946E12, 4710.0], [1.60281012E12, 5727.0], [1.60280982E12, 4265.0], [1.60281E12, 5141.0], [1.6028097E12, 5008.0], [1.6028094E12, 9673.0], [1.60281006E12, 7429.0], [1.60280928E12, 5519.0], [1.60280994E12, 7413.0], [1.60280964E12, 12191.0], [1.60280934E12, 4617.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60280952E12, 447.21099986195566], [1.60281018E12, 4413.0], [1.60280988E12, 581.3689818704128], [1.60280958E12, 423.0979997324944], [1.60280976E12, 410.0], [1.60280946E12, 428.3139997267723], [1.60281012E12, 415.0], [1.60280982E12, 395.7919997406006], [1.60281E12, 448.6389997446537], [1.6028097E12, 470.8399993419647], [1.6028094E12, 405.47099959015844], [1.60281006E12, 438.6679997968674], [1.60280928E12, 195.5319973897934], [1.60280994E12, 456.4749999344349], [1.60280964E12, 461.5979993748665], [1.60280934E12, 573.6579995322228]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60280952E12, 447.73210005521776], [1.60281018E12, 4413.0], [1.60280988E12, 649.8059072518348], [1.60280958E12, 424.1078001070023], [1.60280976E12, 410.0], [1.60280946E12, 429.34540010929106], [1.60281012E12, 415.0], [1.60280982E12, 396.38560005187986], [1.60281E12, 449.6029001021385], [1.6028097E12, 471.0], [1.6028094E12, 407.0181001639366], [1.60281006E12, 439.43480008125306], [1.60280928E12, 201.06580033779144], [1.60280994E12, 456.72250002622604], [1.60280964E12, 462.0], [1.60280934E12, 575.4238001871109]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60280952E12, 447.5004999309778], [1.60281018E12, 4413.0], [1.60280988E12, 619.3894909352064], [1.60280958E12, 423.6589998662472], [1.60280976E12, 410.0], [1.60280946E12, 428.88699986338617], [1.60281012E12, 415.0], [1.60280982E12, 396.16799993515014], [1.60281E12, 449.17449987232686], [1.6028097E12, 471.0], [1.6028094E12, 406.3304997950792], [1.60281006E12, 439.0939998984337], [1.60280928E12, 199.6489995777607], [1.60280994E12, 456.61249996721745], [1.60280964E12, 462.0], [1.60280934E12, 574.6389997661114]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60280952E12, 445.0], [1.60281018E12, 4413.0], [1.60280988E12, 500.0], [1.60280958E12, 422.0], [1.60280976E12, 408.0], [1.60280946E12, 426.0], [1.60281012E12, 408.0], [1.60280982E12, 385.0], [1.60281E12, 440.0], [1.6028097E12, 459.0], [1.6028094E12, 399.0], [1.60281006E12, 437.0], [1.60280928E12, 137.0], [1.60280994E12, 456.0], [1.60280964E12, 443.0], [1.60280934E12, 563.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60280952E12, 3738.5], [1.60281018E12, 12110.0], [1.60280988E12, 1684.5], [1.60280958E12, 1324.0], [1.60280976E12, 2549.0], [1.60280946E12, 2028.0], [1.60281012E12, 1329.5], [1.60280982E12, 1042.0], [1.60281E12, 2016.5], [1.6028097E12, 851.0], [1.6028094E12, 2907.0], [1.60281006E12, 1889.0], [1.60280928E12, 1531.0], [1.60280994E12, 2013.5], [1.60280964E12, 1044.0], [1.60280934E12, 2152.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60281018E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 444.5, "minX": 1.0, "maxY": 6309.0, "series": [{"data": [[2.0, 4137.0], [3.0, 3534.0], [4.0, 3049.0], [5.0, 2337.0], [6.0, 2113.5], [7.0, 1812.0], [8.0, 1535.5], [9.0, 1418.0], [10.0, 1445.5], [11.0, 1268.5], [12.0, 995.5], [13.0, 1067.0], [14.0, 848.0], [15.0, 818.5], [1.0, 6309.0], [16.0, 795.0], [17.0, 746.5], [18.0, 782.5], [19.0, 828.5], [20.0, 466.0], [21.0, 753.0], [22.0, 554.5], [23.0, 505.0], [24.0, 495.0], [25.0, 489.0], [27.0, 444.5], [28.0, 449.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 28.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 444.5, "minX": 1.0, "maxY": 6309.0, "series": [{"data": [[2.0, 4137.0], [3.0, 3534.0], [4.0, 3048.0], [5.0, 2337.0], [6.0, 2113.0], [7.0, 1811.0], [8.0, 1535.5], [9.0, 1418.0], [10.0, 1445.0], [11.0, 1268.5], [12.0, 994.5], [13.0, 1067.0], [14.0, 848.0], [15.0, 818.5], [1.0, 6309.0], [16.0, 795.0], [17.0, 746.5], [18.0, 782.5], [19.0, 828.0], [20.0, 466.0], [21.0, 753.0], [22.0, 554.5], [23.0, 505.0], [24.0, 495.0], [25.0, 489.0], [27.0, 444.5], [28.0, 449.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 28.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.18333333333333332, "minX": 1.60280928E12, "maxY": 9.183333333333334, "series": [{"data": [[1.60280952E12, 3.2], [1.60281018E12, 0.18333333333333332], [1.60280988E12, 5.933333333333334], [1.60280958E12, 6.216666666666667], [1.60280976E12, 4.55], [1.60280946E12, 6.35], [1.60281012E12, 6.4], [1.60280982E12, 9.05], [1.60281E12, 5.933333333333334], [1.6028097E12, 9.183333333333334], [1.6028094E12, 3.1666666666666665], [1.60281006E12, 4.716666666666667], [1.60280928E12, 5.55], [1.60280994E12, 4.566666666666666], [1.60280964E12, 7.266666666666667], [1.60280934E12, 5.433333333333334]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60281018E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.38333333333333336, "minX": 1.60280928E12, "maxY": 9.183333333333334, "series": [{"data": [[1.60280952E12, 3.2], [1.60281018E12, 0.38333333333333336], [1.60280988E12, 5.933333333333334], [1.60280958E12, 6.216666666666667], [1.60280976E12, 4.55], [1.60280946E12, 6.35], [1.60281012E12, 6.4], [1.60280982E12, 9.05], [1.60281E12, 5.933333333333334], [1.6028097E12, 9.183333333333334], [1.6028094E12, 3.1666666666666665], [1.60281006E12, 4.716666666666667], [1.60280928E12, 5.35], [1.60280994E12, 4.566666666666666], [1.60280964E12, 7.266666666666667], [1.60280934E12, 5.433333333333334]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60281018E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.38333333333333336, "minX": 1.60280928E12, "maxY": 9.183333333333334, "series": [{"data": [[1.60280952E12, 3.2], [1.60281018E12, 0.38333333333333336], [1.60280988E12, 5.933333333333334], [1.60280958E12, 6.216666666666667], [1.60280976E12, 4.55], [1.60280946E12, 6.35], [1.60281012E12, 6.4], [1.60280982E12, 9.05], [1.60281E12, 5.933333333333334], [1.6028097E12, 9.183333333333334], [1.6028094E12, 3.1666666666666665], [1.60281006E12, 4.716666666666667], [1.60280928E12, 5.35], [1.60280994E12, 4.566666666666666], [1.60280964E12, 7.266666666666667], [1.60280934E12, 5.433333333333334]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60281018E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.38333333333333336, "minX": 1.60280928E12, "maxY": 9.183333333333334, "series": [{"data": [[1.60280952E12, 3.2], [1.60281018E12, 0.38333333333333336], [1.60280988E12, 5.933333333333334], [1.60280958E12, 6.216666666666667], [1.60280976E12, 4.55], [1.60280946E12, 6.35], [1.60281012E12, 6.4], [1.60280982E12, 9.05], [1.60281E12, 5.933333333333334], [1.6028097E12, 9.183333333333334], [1.6028094E12, 3.1666666666666665], [1.60281006E12, 4.716666666666667], [1.60280928E12, 5.35], [1.60280994E12, 4.566666666666666], [1.60280964E12, 7.266666666666667], [1.60280934E12, 5.433333333333334]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60281018E12, "title": "Total Transactions Per Second"}},
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

