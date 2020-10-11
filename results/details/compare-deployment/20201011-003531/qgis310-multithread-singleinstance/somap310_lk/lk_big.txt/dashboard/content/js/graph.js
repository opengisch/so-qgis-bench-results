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
        data: {"result": {"minY": 171.0, "minX": 0.0, "maxY": 12631.0, "series": [{"data": [[0.0, 171.0], [0.1, 217.0], [0.2, 390.0], [0.3, 392.0], [0.4, 395.0], [0.5, 401.0], [0.6, 405.0], [0.7, 408.0], [0.8, 413.0], [0.9, 417.0], [1.0, 420.0], [1.1, 422.0], [1.2, 427.0], [1.3, 430.0], [1.4, 431.0], [1.5, 433.0], [1.6, 435.0], [1.7, 436.0], [1.8, 437.0], [1.9, 439.0], [2.0, 440.0], [2.1, 441.0], [2.2, 442.0], [2.3, 443.0], [2.4, 445.0], [2.5, 446.0], [2.6, 447.0], [2.7, 447.0], [2.8, 448.0], [2.9, 448.0], [3.0, 449.0], [3.1, 450.0], [3.2, 450.0], [3.3, 452.0], [3.4, 453.0], [3.5, 454.0], [3.6, 454.0], [3.7, 456.0], [3.8, 457.0], [3.9, 459.0], [4.0, 460.0], [4.1, 461.0], [4.2, 462.0], [4.3, 463.0], [4.4, 464.0], [4.5, 464.0], [4.6, 464.0], [4.7, 465.0], [4.8, 466.0], [4.9, 467.0], [5.0, 468.0], [5.1, 468.0], [5.2, 469.0], [5.3, 470.0], [5.4, 470.0], [5.5, 472.0], [5.6, 473.0], [5.7, 474.0], [5.8, 476.0], [5.9, 477.0], [6.0, 478.0], [6.1, 480.0], [6.2, 482.0], [6.3, 483.0], [6.4, 483.0], [6.5, 486.0], [6.6, 487.0], [6.7, 489.0], [6.8, 489.0], [6.9, 490.0], [7.0, 492.0], [7.1, 492.0], [7.2, 493.0], [7.3, 494.0], [7.4, 495.0], [7.5, 495.0], [7.6, 498.0], [7.7, 500.0], [7.8, 501.0], [7.9, 503.0], [8.0, 504.0], [8.1, 506.0], [8.2, 507.0], [8.3, 510.0], [8.4, 515.0], [8.5, 517.0], [8.6, 522.0], [8.7, 524.0], [8.8, 531.0], [8.9, 537.0], [9.0, 551.0], [9.1, 558.0], [9.2, 575.0], [9.3, 585.0], [9.4, 591.0], [9.5, 594.0], [9.6, 598.0], [9.7, 603.0], [9.8, 605.0], [9.9, 607.0], [10.0, 609.0], [10.1, 611.0], [10.2, 618.0], [10.3, 619.0], [10.4, 627.0], [10.5, 628.0], [10.6, 631.0], [10.7, 634.0], [10.8, 641.0], [10.9, 652.0], [11.0, 656.0], [11.1, 660.0], [11.2, 662.0], [11.3, 666.0], [11.4, 669.0], [11.5, 674.0], [11.6, 678.0], [11.7, 680.0], [11.8, 684.0], [11.9, 686.0], [12.0, 688.0], [12.1, 691.0], [12.2, 692.0], [12.3, 695.0], [12.4, 696.0], [12.5, 697.0], [12.6, 700.0], [12.7, 702.0], [12.8, 703.0], [12.9, 704.0], [13.0, 705.0], [13.1, 707.0], [13.2, 708.0], [13.3, 709.0], [13.4, 710.0], [13.5, 711.0], [13.6, 713.0], [13.7, 714.0], [13.8, 715.0], [13.9, 717.0], [14.0, 719.0], [14.1, 722.0], [14.2, 725.0], [14.3, 728.0], [14.4, 731.0], [14.5, 733.0], [14.6, 735.0], [14.7, 736.0], [14.8, 737.0], [14.9, 739.0], [15.0, 740.0], [15.1, 741.0], [15.2, 743.0], [15.3, 744.0], [15.4, 746.0], [15.5, 748.0], [15.6, 749.0], [15.7, 751.0], [15.8, 754.0], [15.9, 755.0], [16.0, 756.0], [16.1, 758.0], [16.2, 759.0], [16.3, 760.0], [16.4, 761.0], [16.5, 762.0], [16.6, 763.0], [16.7, 764.0], [16.8, 766.0], [16.9, 767.0], [17.0, 768.0], [17.1, 770.0], [17.2, 771.0], [17.3, 772.0], [17.4, 774.0], [17.5, 775.0], [17.6, 777.0], [17.7, 777.0], [17.8, 778.0], [17.9, 779.0], [18.0, 779.0], [18.1, 782.0], [18.2, 784.0], [18.3, 785.0], [18.4, 786.0], [18.5, 787.0], [18.6, 788.0], [18.7, 788.0], [18.8, 789.0], [18.9, 791.0], [19.0, 791.0], [19.1, 792.0], [19.2, 793.0], [19.3, 794.0], [19.4, 795.0], [19.5, 796.0], [19.6, 797.0], [19.7, 798.0], [19.8, 799.0], [19.9, 800.0], [20.0, 801.0], [20.1, 801.0], [20.2, 802.0], [20.3, 804.0], [20.4, 805.0], [20.5, 806.0], [20.6, 808.0], [20.7, 812.0], [20.8, 813.0], [20.9, 815.0], [21.0, 818.0], [21.1, 819.0], [21.2, 820.0], [21.3, 822.0], [21.4, 823.0], [21.5, 824.0], [21.6, 826.0], [21.7, 828.0], [21.8, 829.0], [21.9, 830.0], [22.0, 831.0], [22.1, 832.0], [22.2, 834.0], [22.3, 838.0], [22.4, 839.0], [22.5, 842.0], [22.6, 844.0], [22.7, 845.0], [22.8, 848.0], [22.9, 849.0], [23.0, 852.0], [23.1, 854.0], [23.2, 855.0], [23.3, 859.0], [23.4, 861.0], [23.5, 862.0], [23.6, 863.0], [23.7, 866.0], [23.8, 867.0], [23.9, 869.0], [24.0, 870.0], [24.1, 872.0], [24.2, 875.0], [24.3, 880.0], [24.4, 882.0], [24.5, 884.0], [24.6, 885.0], [24.7, 887.0], [24.8, 889.0], [24.9, 891.0], [25.0, 893.0], [25.1, 893.0], [25.2, 898.0], [25.3, 900.0], [25.4, 906.0], [25.5, 909.0], [25.6, 911.0], [25.7, 913.0], [25.8, 915.0], [25.9, 919.0], [26.0, 923.0], [26.1, 927.0], [26.2, 928.0], [26.3, 930.0], [26.4, 933.0], [26.5, 935.0], [26.6, 936.0], [26.7, 937.0], [26.8, 940.0], [26.9, 942.0], [27.0, 943.0], [27.1, 945.0], [27.2, 946.0], [27.3, 947.0], [27.4, 948.0], [27.5, 949.0], [27.6, 952.0], [27.7, 956.0], [27.8, 958.0], [27.9, 961.0], [28.0, 962.0], [28.1, 963.0], [28.2, 969.0], [28.3, 973.0], [28.4, 978.0], [28.5, 982.0], [28.6, 985.0], [28.7, 987.0], [28.8, 988.0], [28.9, 990.0], [29.0, 994.0], [29.1, 996.0], [29.2, 1000.0], [29.3, 1002.0], [29.4, 1004.0], [29.5, 1006.0], [29.6, 1010.0], [29.7, 1012.0], [29.8, 1014.0], [29.9, 1016.0], [30.0, 1018.0], [30.1, 1019.0], [30.2, 1026.0], [30.3, 1032.0], [30.4, 1035.0], [30.5, 1037.0], [30.6, 1040.0], [30.7, 1043.0], [30.8, 1046.0], [30.9, 1048.0], [31.0, 1051.0], [31.1, 1053.0], [31.2, 1054.0], [31.3, 1058.0], [31.4, 1059.0], [31.5, 1060.0], [31.6, 1061.0], [31.7, 1062.0], [31.8, 1064.0], [31.9, 1065.0], [32.0, 1067.0], [32.1, 1068.0], [32.2, 1069.0], [32.3, 1070.0], [32.4, 1071.0], [32.5, 1073.0], [32.6, 1075.0], [32.7, 1076.0], [32.8, 1078.0], [32.9, 1081.0], [33.0, 1086.0], [33.1, 1087.0], [33.2, 1090.0], [33.3, 1093.0], [33.4, 1095.0], [33.5, 1097.0], [33.6, 1099.0], [33.7, 1102.0], [33.8, 1104.0], [33.9, 1107.0], [34.0, 1109.0], [34.1, 1111.0], [34.2, 1112.0], [34.3, 1113.0], [34.4, 1114.0], [34.5, 1114.0], [34.6, 1116.0], [34.7, 1119.0], [34.8, 1120.0], [34.9, 1121.0], [35.0, 1123.0], [35.1, 1126.0], [35.2, 1128.0], [35.3, 1129.0], [35.4, 1131.0], [35.5, 1134.0], [35.6, 1136.0], [35.7, 1138.0], [35.8, 1140.0], [35.9, 1142.0], [36.0, 1144.0], [36.1, 1146.0], [36.2, 1148.0], [36.3, 1151.0], [36.4, 1153.0], [36.5, 1156.0], [36.6, 1158.0], [36.7, 1159.0], [36.8, 1161.0], [36.9, 1163.0], [37.0, 1169.0], [37.1, 1176.0], [37.2, 1181.0], [37.3, 1184.0], [37.4, 1185.0], [37.5, 1188.0], [37.6, 1192.0], [37.7, 1194.0], [37.8, 1195.0], [37.9, 1199.0], [38.0, 1200.0], [38.1, 1201.0], [38.2, 1204.0], [38.3, 1205.0], [38.4, 1207.0], [38.5, 1209.0], [38.6, 1214.0], [38.7, 1217.0], [38.8, 1219.0], [38.9, 1223.0], [39.0, 1225.0], [39.1, 1229.0], [39.2, 1230.0], [39.3, 1232.0], [39.4, 1233.0], [39.5, 1236.0], [39.6, 1237.0], [39.7, 1239.0], [39.8, 1241.0], [39.9, 1242.0], [40.0, 1244.0], [40.1, 1247.0], [40.2, 1251.0], [40.3, 1253.0], [40.4, 1257.0], [40.5, 1259.0], [40.6, 1263.0], [40.7, 1265.0], [40.8, 1267.0], [40.9, 1269.0], [41.0, 1273.0], [41.1, 1274.0], [41.2, 1278.0], [41.3, 1280.0], [41.4, 1285.0], [41.5, 1289.0], [41.6, 1294.0], [41.7, 1297.0], [41.8, 1299.0], [41.9, 1301.0], [42.0, 1307.0], [42.1, 1310.0], [42.2, 1315.0], [42.3, 1317.0], [42.4, 1320.0], [42.5, 1321.0], [42.6, 1322.0], [42.7, 1325.0], [42.8, 1328.0], [42.9, 1331.0], [43.0, 1332.0], [43.1, 1335.0], [43.2, 1336.0], [43.3, 1339.0], [43.4, 1341.0], [43.5, 1343.0], [43.6, 1345.0], [43.7, 1347.0], [43.8, 1351.0], [43.9, 1354.0], [44.0, 1357.0], [44.1, 1358.0], [44.2, 1360.0], [44.3, 1365.0], [44.4, 1367.0], [44.5, 1369.0], [44.6, 1371.0], [44.7, 1375.0], [44.8, 1377.0], [44.9, 1380.0], [45.0, 1383.0], [45.1, 1385.0], [45.2, 1389.0], [45.3, 1396.0], [45.4, 1398.0], [45.5, 1402.0], [45.6, 1405.0], [45.7, 1408.0], [45.8, 1412.0], [45.9, 1417.0], [46.0, 1421.0], [46.1, 1425.0], [46.2, 1429.0], [46.3, 1430.0], [46.4, 1431.0], [46.5, 1434.0], [46.6, 1439.0], [46.7, 1441.0], [46.8, 1447.0], [46.9, 1448.0], [47.0, 1454.0], [47.1, 1455.0], [47.2, 1458.0], [47.3, 1459.0], [47.4, 1462.0], [47.5, 1465.0], [47.6, 1467.0], [47.7, 1469.0], [47.8, 1476.0], [47.9, 1478.0], [48.0, 1481.0], [48.1, 1484.0], [48.2, 1486.0], [48.3, 1486.0], [48.4, 1492.0], [48.5, 1496.0], [48.6, 1498.0], [48.7, 1500.0], [48.8, 1504.0], [48.9, 1505.0], [49.0, 1507.0], [49.1, 1511.0], [49.2, 1514.0], [49.3, 1521.0], [49.4, 1524.0], [49.5, 1527.0], [49.6, 1531.0], [49.7, 1533.0], [49.8, 1535.0], [49.9, 1541.0], [50.0, 1544.0], [50.1, 1546.0], [50.2, 1546.0], [50.3, 1552.0], [50.4, 1559.0], [50.5, 1564.0], [50.6, 1567.0], [50.7, 1570.0], [50.8, 1574.0], [50.9, 1579.0], [51.0, 1582.0], [51.1, 1585.0], [51.2, 1589.0], [51.3, 1591.0], [51.4, 1597.0], [51.5, 1599.0], [51.6, 1605.0], [51.7, 1607.0], [51.8, 1611.0], [51.9, 1614.0], [52.0, 1617.0], [52.1, 1621.0], [52.2, 1625.0], [52.3, 1629.0], [52.4, 1631.0], [52.5, 1638.0], [52.6, 1647.0], [52.7, 1653.0], [52.8, 1658.0], [52.9, 1660.0], [53.0, 1664.0], [53.1, 1666.0], [53.2, 1668.0], [53.3, 1672.0], [53.4, 1674.0], [53.5, 1679.0], [53.6, 1684.0], [53.7, 1689.0], [53.8, 1690.0], [53.9, 1695.0], [54.0, 1697.0], [54.1, 1702.0], [54.2, 1704.0], [54.3, 1705.0], [54.4, 1708.0], [54.5, 1711.0], [54.6, 1719.0], [54.7, 1722.0], [54.8, 1726.0], [54.9, 1731.0], [55.0, 1735.0], [55.1, 1738.0], [55.2, 1745.0], [55.3, 1757.0], [55.4, 1766.0], [55.5, 1771.0], [55.6, 1776.0], [55.7, 1778.0], [55.8, 1782.0], [55.9, 1784.0], [56.0, 1789.0], [56.1, 1793.0], [56.2, 1795.0], [56.3, 1796.0], [56.4, 1801.0], [56.5, 1802.0], [56.6, 1808.0], [56.7, 1811.0], [56.8, 1816.0], [56.9, 1820.0], [57.0, 1822.0], [57.1, 1827.0], [57.2, 1831.0], [57.3, 1835.0], [57.4, 1843.0], [57.5, 1852.0], [57.6, 1862.0], [57.7, 1867.0], [57.8, 1870.0], [57.9, 1877.0], [58.0, 1879.0], [58.1, 1887.0], [58.2, 1891.0], [58.3, 1893.0], [58.4, 1898.0], [58.5, 1901.0], [58.6, 1903.0], [58.7, 1903.0], [58.8, 1907.0], [58.9, 1913.0], [59.0, 1916.0], [59.1, 1920.0], [59.2, 1924.0], [59.3, 1933.0], [59.4, 1936.0], [59.5, 1941.0], [59.6, 1952.0], [59.7, 1963.0], [59.8, 1968.0], [59.9, 1974.0], [60.0, 1979.0], [60.1, 1984.0], [60.2, 1987.0], [60.3, 1993.0], [60.4, 2004.0], [60.5, 2010.0], [60.6, 2014.0], [60.7, 2022.0], [60.8, 2025.0], [60.9, 2029.0], [61.0, 2035.0], [61.1, 2038.0], [61.2, 2050.0], [61.3, 2051.0], [61.4, 2055.0], [61.5, 2058.0], [61.6, 2061.0], [61.7, 2064.0], [61.8, 2073.0], [61.9, 2077.0], [62.0, 2081.0], [62.1, 2086.0], [62.2, 2088.0], [62.3, 2092.0], [62.4, 2096.0], [62.5, 2102.0], [62.6, 2108.0], [62.7, 2116.0], [62.8, 2118.0], [62.9, 2121.0], [63.0, 2126.0], [63.1, 2137.0], [63.2, 2141.0], [63.3, 2144.0], [63.4, 2151.0], [63.5, 2156.0], [63.6, 2159.0], [63.7, 2167.0], [63.8, 2172.0], [63.9, 2177.0], [64.0, 2181.0], [64.1, 2183.0], [64.2, 2187.0], [64.3, 2193.0], [64.4, 2196.0], [64.5, 2199.0], [64.6, 2205.0], [64.7, 2208.0], [64.8, 2211.0], [64.9, 2220.0], [65.0, 2225.0], [65.1, 2229.0], [65.2, 2232.0], [65.3, 2235.0], [65.4, 2239.0], [65.5, 2248.0], [65.6, 2251.0], [65.7, 2260.0], [65.8, 2262.0], [65.9, 2270.0], [66.0, 2278.0], [66.1, 2285.0], [66.2, 2291.0], [66.3, 2301.0], [66.4, 2304.0], [66.5, 2310.0], [66.6, 2318.0], [66.7, 2326.0], [66.8, 2337.0], [66.9, 2341.0], [67.0, 2344.0], [67.1, 2348.0], [67.2, 2353.0], [67.3, 2359.0], [67.4, 2366.0], [67.5, 2370.0], [67.6, 2380.0], [67.7, 2382.0], [67.8, 2385.0], [67.9, 2387.0], [68.0, 2390.0], [68.1, 2394.0], [68.2, 2396.0], [68.3, 2403.0], [68.4, 2409.0], [68.5, 2416.0], [68.6, 2419.0], [68.7, 2424.0], [68.8, 2429.0], [68.9, 2434.0], [69.0, 2437.0], [69.1, 2444.0], [69.2, 2449.0], [69.3, 2456.0], [69.4, 2459.0], [69.5, 2461.0], [69.6, 2466.0], [69.7, 2468.0], [69.8, 2477.0], [69.9, 2486.0], [70.0, 2492.0], [70.1, 2499.0], [70.2, 2503.0], [70.3, 2506.0], [70.4, 2519.0], [70.5, 2526.0], [70.6, 2529.0], [70.7, 2532.0], [70.8, 2538.0], [70.9, 2541.0], [71.0, 2555.0], [71.1, 2566.0], [71.2, 2577.0], [71.3, 2582.0], [71.4, 2588.0], [71.5, 2597.0], [71.6, 2598.0], [71.7, 2604.0], [71.8, 2608.0], [71.9, 2614.0], [72.0, 2620.0], [72.1, 2628.0], [72.2, 2634.0], [72.3, 2643.0], [72.4, 2655.0], [72.5, 2662.0], [72.6, 2669.0], [72.7, 2674.0], [72.8, 2682.0], [72.9, 2686.0], [73.0, 2691.0], [73.1, 2700.0], [73.2, 2704.0], [73.3, 2719.0], [73.4, 2727.0], [73.5, 2731.0], [73.6, 2736.0], [73.7, 2748.0], [73.8, 2754.0], [73.9, 2761.0], [74.0, 2778.0], [74.1, 2791.0], [74.2, 2795.0], [74.3, 2804.0], [74.4, 2809.0], [74.5, 2813.0], [74.6, 2817.0], [74.7, 2823.0], [74.8, 2834.0], [74.9, 2844.0], [75.0, 2851.0], [75.1, 2855.0], [75.2, 2864.0], [75.3, 2878.0], [75.4, 2883.0], [75.5, 2894.0], [75.6, 2907.0], [75.7, 2914.0], [75.8, 2923.0], [75.9, 2929.0], [76.0, 2936.0], [76.1, 2942.0], [76.2, 2947.0], [76.3, 2952.0], [76.4, 2961.0], [76.5, 2969.0], [76.6, 2981.0], [76.7, 2988.0], [76.8, 2992.0], [76.9, 3000.0], [77.0, 3013.0], [77.1, 3025.0], [77.2, 3033.0], [77.3, 3035.0], [77.4, 3037.0], [77.5, 3054.0], [77.6, 3057.0], [77.7, 3061.0], [77.8, 3066.0], [77.9, 3073.0], [78.0, 3077.0], [78.1, 3088.0], [78.2, 3093.0], [78.3, 3100.0], [78.4, 3107.0], [78.5, 3118.0], [78.6, 3127.0], [78.7, 3133.0], [78.8, 3135.0], [78.9, 3140.0], [79.0, 3141.0], [79.1, 3150.0], [79.2, 3156.0], [79.3, 3159.0], [79.4, 3164.0], [79.5, 3165.0], [79.6, 3170.0], [79.7, 3187.0], [79.8, 3195.0], [79.9, 3200.0], [80.0, 3204.0], [80.1, 3211.0], [80.2, 3219.0], [80.3, 3223.0], [80.4, 3228.0], [80.5, 3240.0], [80.6, 3247.0], [80.7, 3252.0], [80.8, 3256.0], [80.9, 3264.0], [81.0, 3272.0], [81.1, 3280.0], [81.2, 3287.0], [81.3, 3290.0], [81.4, 3299.0], [81.5, 3302.0], [81.6, 3312.0], [81.7, 3321.0], [81.8, 3334.0], [81.9, 3352.0], [82.0, 3360.0], [82.1, 3372.0], [82.2, 3378.0], [82.3, 3384.0], [82.4, 3389.0], [82.5, 3403.0], [82.6, 3416.0], [82.7, 3423.0], [82.8, 3427.0], [82.9, 3443.0], [83.0, 3453.0], [83.1, 3458.0], [83.2, 3474.0], [83.3, 3488.0], [83.4, 3491.0], [83.5, 3493.0], [83.6, 3499.0], [83.7, 3503.0], [83.8, 3512.0], [83.9, 3518.0], [84.0, 3531.0], [84.1, 3534.0], [84.2, 3542.0], [84.3, 3547.0], [84.4, 3555.0], [84.5, 3563.0], [84.6, 3570.0], [84.7, 3578.0], [84.8, 3587.0], [84.9, 3599.0], [85.0, 3604.0], [85.1, 3610.0], [85.2, 3617.0], [85.3, 3630.0], [85.4, 3638.0], [85.5, 3647.0], [85.6, 3652.0], [85.7, 3660.0], [85.8, 3667.0], [85.9, 3680.0], [86.0, 3685.0], [86.1, 3693.0], [86.2, 3704.0], [86.3, 3714.0], [86.4, 3723.0], [86.5, 3729.0], [86.6, 3736.0], [86.7, 3746.0], [86.8, 3759.0], [86.9, 3761.0], [87.0, 3767.0], [87.1, 3777.0], [87.2, 3781.0], [87.3, 3789.0], [87.4, 3798.0], [87.5, 3806.0], [87.6, 3814.0], [87.7, 3826.0], [87.8, 3834.0], [87.9, 3842.0], [88.0, 3847.0], [88.1, 3851.0], [88.2, 3866.0], [88.3, 3879.0], [88.4, 3889.0], [88.5, 3897.0], [88.6, 3910.0], [88.7, 3918.0], [88.8, 3926.0], [88.9, 3949.0], [89.0, 3965.0], [89.1, 3975.0], [89.2, 3986.0], [89.3, 3992.0], [89.4, 4000.0], [89.5, 4003.0], [89.6, 4007.0], [89.7, 4023.0], [89.8, 4047.0], [89.9, 4052.0], [90.0, 4079.0], [90.1, 4094.0], [90.2, 4108.0], [90.3, 4117.0], [90.4, 4128.0], [90.5, 4139.0], [90.6, 4150.0], [90.7, 4161.0], [90.8, 4168.0], [90.9, 4176.0], [91.0, 4194.0], [91.1, 4218.0], [91.2, 4224.0], [91.3, 4240.0], [91.4, 4248.0], [91.5, 4257.0], [91.6, 4264.0], [91.7, 4277.0], [91.8, 4287.0], [91.9, 4297.0], [92.0, 4313.0], [92.1, 4328.0], [92.2, 4350.0], [92.3, 4364.0], [92.4, 4371.0], [92.5, 4386.0], [92.6, 4393.0], [92.7, 4408.0], [92.8, 4432.0], [92.9, 4451.0], [93.0, 4477.0], [93.1, 4490.0], [93.2, 4518.0], [93.3, 4530.0], [93.4, 4556.0], [93.5, 4575.0], [93.6, 4605.0], [93.7, 4639.0], [93.8, 4682.0], [93.9, 4701.0], [94.0, 4715.0], [94.1, 4743.0], [94.2, 4772.0], [94.3, 4788.0], [94.4, 4800.0], [94.5, 4852.0], [94.6, 4870.0], [94.7, 4902.0], [94.8, 4929.0], [94.9, 4966.0], [95.0, 5025.0], [95.1, 5071.0], [95.2, 5157.0], [95.3, 5175.0], [95.4, 5241.0], [95.5, 5264.0], [95.6, 5284.0], [95.7, 5365.0], [95.8, 5429.0], [95.9, 5482.0], [96.0, 5572.0], [96.1, 5594.0], [96.2, 5641.0], [96.3, 5721.0], [96.4, 5750.0], [96.5, 5811.0], [96.6, 5839.0], [96.7, 5877.0], [96.8, 5933.0], [96.9, 6049.0], [97.0, 6099.0], [97.1, 6172.0], [97.2, 6227.0], [97.3, 6348.0], [97.4, 6411.0], [97.5, 6461.0], [97.6, 6595.0], [97.7, 6691.0], [97.8, 6773.0], [97.9, 6797.0], [98.0, 6899.0], [98.1, 6948.0], [98.2, 7023.0], [98.3, 7096.0], [98.4, 7204.0], [98.5, 7290.0], [98.6, 7357.0], [98.7, 7409.0], [98.8, 7499.0], [98.9, 7599.0], [99.0, 7794.0], [99.1, 7966.0], [99.2, 8241.0], [99.3, 8843.0], [99.4, 9197.0], [99.5, 9579.0], [99.6, 10831.0], [99.7, 12055.0], [99.8, 12239.0], [99.9, 12415.0], [100.0, 12631.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 380.0, "series": [{"data": [[100.0, 3.0], [200.0, 4.0], [300.0, 19.0], [400.0, 377.0], [500.0, 103.0], [600.0, 157.0], [700.0, 380.0], [800.0, 286.0], [900.0, 207.0], [1000.0, 234.0], [1100.0, 226.0], [1200.0, 205.0], [1300.0, 189.0], [1400.0, 170.0], [1500.0, 150.0], [1600.0, 136.0], [1700.0, 121.0], [1800.0, 109.0], [1900.0, 100.0], [2000.0, 109.0], [2100.0, 109.0], [2200.0, 93.0], [2300.0, 103.0], [2400.0, 100.0], [2500.0, 78.0], [2600.0, 77.0], [2700.0, 61.0], [2800.0, 70.0], [2900.0, 70.0], [3000.0, 74.0], [3100.0, 84.0], [3200.0, 82.0], [3300.0, 54.0], [3400.0, 60.0], [3500.0, 69.0], [3600.0, 65.0], [3700.0, 67.0], [3800.0, 57.0], [3900.0, 45.0], [4000.0, 40.0], [4300.0, 38.0], [4200.0, 46.0], [4100.0, 47.0], [4400.0, 27.0], [4500.0, 22.0], [4600.0, 18.0], [4700.0, 26.0], [4800.0, 16.0], [5000.0, 9.0], [5100.0, 11.0], [4900.0, 15.0], [5200.0, 14.0], [5300.0, 5.0], [5400.0, 11.0], [5500.0, 9.0], [5600.0, 8.0], [5800.0, 15.0], [5700.0, 12.0], [5900.0, 4.0], [6100.0, 6.0], [6000.0, 9.0], [6200.0, 6.0], [6300.0, 6.0], [6400.0, 8.0], [6500.0, 5.0], [6600.0, 5.0], [6700.0, 11.0], [6900.0, 8.0], [6800.0, 5.0], [7000.0, 8.0], [7100.0, 4.0], [7400.0, 6.0], [7300.0, 8.0], [7200.0, 8.0], [7500.0, 6.0], [7600.0, 1.0], [7700.0, 5.0], [7900.0, 3.0], [7800.0, 1.0], [8000.0, 2.0], [8100.0, 2.0], [8600.0, 1.0], [8700.0, 3.0], [8200.0, 1.0], [9100.0, 2.0], [9200.0, 2.0], [8800.0, 2.0], [9000.0, 1.0], [8900.0, 2.0], [9500.0, 3.0], [9600.0, 1.0], [10100.0, 1.0], [9800.0, 1.0], [10300.0, 1.0], [10800.0, 2.0], [11100.0, 1.0], [11500.0, 1.0], [11400.0, 1.0], [12100.0, 2.0], [12000.0, 2.0], [11900.0, 1.0], [12200.0, 4.0], [12400.0, 5.0], [12300.0, 1.0], [12500.0, 1.0], [12600.0, 1.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 12600.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 408.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2699.0, "series": [{"data": [[0.0, 408.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 2155.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 2699.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 5.5, "minX": 1.60237734E12, "maxY": 12.0, "series": [{"data": [[1.60237764E12, 12.0], [1.6023783E12, 5.5], [1.60237734E12, 11.188679245283021], [1.60237824E12, 11.997014925373135], [1.60237794E12, 12.0], [1.6023774E12, 12.0], [1.60237806E12, 12.0], [1.602378E12, 12.0], [1.6023777E12, 12.0], [1.60237812E12, 12.0], [1.60237782E12, 12.0], [1.60237776E12, 12.0], [1.60237746E12, 12.0], [1.60237788E12, 12.0], [1.60237758E12, 12.0], [1.60237752E12, 12.0], [1.60237818E12, 12.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6023783E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 2060.624570774513, "minX": 1.0, "maxY": 12420.0, "series": [{"data": [[8.0, 6338.0], [4.0, 12288.0], [2.0, 12239.0], [1.0, 12145.0], [9.0, 12420.0], [5.0, 4288.0], [10.0, 6359.0], [11.0, 6415.5], [6.0, 4365.666666666667], [12.0, 2060.624570774513], [3.0, 12221.0], [7.0, 4299.666666666667]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[11.979285442797421, 2079.0938806537447]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 12.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 85.46666666666667, "minX": 1.60237734E12, "maxY": 445471.88333333336, "series": [{"data": [[1.60237764E12, 369779.9], [1.6023783E12, 13635.033333333333], [1.60237734E12, 44065.683333333334], [1.60237824E12, 205059.38333333333], [1.60237794E12, 87489.31666666667], [1.6023774E12, 141008.96666666667], [1.60237806E12, 445471.88333333336], [1.602378E12, 305002.43333333335], [1.6023777E12, 189898.85], [1.60237812E12, 337163.2], [1.60237782E12, 368917.8333333333], [1.60237776E12, 208583.11666666667], [1.60237746E12, 373706.6666666667], [1.60237788E12, 211070.86666666667], [1.60237758E12, 278043.48333333334], [1.60237752E12, 358059.4166666667], [1.60237818E12, 313973.81666666665]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60237764E12, 1426.6], [1.6023783E12, 85.46666666666667], [1.60237734E12, 425.76666666666665], [1.60237824E12, 3018.4166666666665], [1.60237794E12, 3695.266666666667], [1.6023774E12, 2986.85], [1.60237806E12, 2463.55], [1.602378E12, 3086.45], [1.6023777E12, 3203.45], [1.60237812E12, 3153.9166666666665], [1.60237782E12, 3101.2], [1.60237776E12, 5205.016666666666], [1.60237746E12, 2616.3166666666666], [1.60237788E12, 3854.3166666666666], [1.60237758E12, 3054.516666666667], [1.60237752E12, 2046.55], [1.60237818E12, 2067.3]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6023783E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 1250.4060031595582, "minX": 1.60237734E12, "maxY": 12379.599999999999, "series": [{"data": [[1.60237764E12, 4090.2080924855495], [1.6023783E12, 12379.599999999999], [1.60237734E12, 1556.4150943396226], [1.60237824E12, 1996.1820895522394], [1.60237794E12, 1757.5965346534658], [1.6023774E12, 2186.4242424242416], [1.60237806E12, 2689.7380073800746], [1.602378E12, 1919.5737265415555], [1.6023777E12, 1916.180790960452], [1.60237812E12, 1967.6574585635387], [1.60237782E12, 1791.349614395887], [1.60237776E12, 1250.4060031595582], [1.60237746E12, 2124.006211180125], [1.60237788E12, 1701.784403669726], [1.60237758E12, 2007.815864022664], [1.60237752E12, 3386.5982142857133], [1.60237818E12, 2953.512499999999]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6023783E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 1250.2559241706156, "minX": 1.60237734E12, "maxY": 12378.9, "series": [{"data": [[1.60237764E12, 4089.1849710982633], [1.6023783E12, 12378.9], [1.60237734E12, 1555.9433962264147], [1.60237824E12, 1995.8835820895517], [1.60237794E12, 1757.4975247524746], [1.6023774E12, 2186.1606060606073], [1.60237806E12, 2688.9077490774894], [1.602378E12, 1919.1876675603216], [1.6023777E12, 1915.9039548022602], [1.60237812E12, 1967.2154696132607], [1.60237782E12, 1790.8508997429312], [1.60237776E12, 1250.2559241706156], [1.60237746E12, 2123.4037267080735], [1.60237788E12, 1701.566513761469], [1.60237758E12, 2007.3966005665716], [1.60237752E12, 3385.7410714285684], [1.60237818E12, 2952.904166666666]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6023783E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.60237734E12, "maxY": 2.056603773584906, "series": [{"data": [[1.60237764E12, 0.08092485549132947], [1.6023783E12, 0.0], [1.60237734E12, 2.056603773584906], [1.60237824E12, 0.04179104477611945], [1.60237794E12, 0.037128712871287155], [1.6023774E12, 0.03939393939393939], [1.60237806E12, 0.05535055350553505], [1.602378E12, 0.04021447721179626], [1.6023777E12, 0.03954802259887009], [1.60237812E12, 0.03591160220994475], [1.60237782E12, 0.03341902313624678], [1.60237776E12, 0.02527646129541866], [1.60237746E12, 0.0], [1.60237788E12, 0.03440366972477071], [1.60237758E12, 0.025495750708215314], [1.60237752E12, 0.0982142857142857], [1.60237818E12, 0.05000000000000003]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6023783E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 171.0, "minX": 1.60237734E12, "maxY": 12631.0, "series": [{"data": [[1.60237764E12, 7585.0], [1.6023783E12, 12631.0], [1.60237734E12, 3693.0], [1.60237824E12, 12415.0], [1.60237794E12, 5184.0], [1.6023774E12, 5485.0], [1.60237806E12, 7771.0], [1.602378E12, 4313.0], [1.6023777E12, 12118.0], [1.60237812E12, 4802.0], [1.60237782E12, 5105.0], [1.60237776E12, 12063.0], [1.60237746E12, 7794.0], [1.60237788E12, 5775.0], [1.60237758E12, 6763.0], [1.60237752E12, 9691.0], [1.60237818E12, 7499.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60237764E12, 939.6599995851517], [1.6023783E12, 12145.0], [1.60237734E12, 171.0], [1.60237824E12, 433.02399991989137], [1.60237794E12, 409.64499990344046], [1.6023774E12, 447.97899992108347], [1.60237806E12, 424.40799863815306], [1.602378E12, 518.9719873380661], [1.6023777E12, 391.1949999153614], [1.60237812E12, 603.8009997403622], [1.60237782E12, 423.0199998140335], [1.60237776E12, 460.0], [1.60237746E12, 573.2559993839263], [1.60237788E12, 425.6649994790554], [1.60237758E12, 446.18599991559984], [1.60237752E12, 391.0249999463558], [1.60237818E12, 396.0139996552467]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60237764E12, 941.2260001659394], [1.6023783E12, 12145.0], [1.60237734E12, 171.0], [1.60237824E12, 433.32640003204347], [1.60237794E12, 410.49400200843814], [1.6023774E12, 448.0], [1.60237806E12, 429.54880054473875], [1.602378E12, 566.7692050647736], [1.6023777E12, 391.5145000338554], [1.60237812E12, 604.7811001038551], [1.60237782E12, 423.7220000743866], [1.60237776E12, 460.0], [1.60237746E12, 574.1977000308037], [1.60237788E12, 426.65260008335116], [1.60237758E12, 446.5046000337601], [1.60237752E12, 391.2275000214577], [1.60237818E12, 397.3154001379013]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60237764E12, 940.5299997925758], [1.6023783E12, 12145.0], [1.60237734E12, 171.0], [1.60237824E12, 433.1919999599457], [1.60237794E12, 409.84749995172024], [1.6023774E12, 448.0], [1.60237806E12, 427.2639993190765], [1.602378E12, 545.525993669033], [1.6023777E12, 391.3724999576807], [1.60237812E12, 604.3454998701811], [1.60237782E12, 423.40999990701675], [1.60237776E12, 460.0], [1.60237746E12, 574.0684999614954], [1.60237788E12, 426.30299989581107], [1.60237758E12, 446.3629999577999], [1.60237752E12, 391.1374999731779], [1.60237818E12, 396.7369998276234]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60237764E12, 934.0], [1.6023783E12, 12145.0], [1.60237734E12, 171.0], [1.60237824E12, 433.0], [1.60237794E12, 403.0], [1.6023774E12, 446.0], [1.60237806E12, 406.0], [1.602378E12, 464.0], [1.6023777E12, 386.0], [1.60237812E12, 592.0], [1.60237782E12, 420.0], [1.60237776E12, 452.0], [1.60237746E12, 560.0], [1.60237788E12, 417.0], [1.60237758E12, 446.0], [1.60237752E12, 390.0], [1.60237818E12, 391.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60237764E12, 3970.0], [1.6023783E12, 12398.5], [1.60237734E12, 909.0], [1.60237824E12, 1247.0], [1.60237794E12, 1419.5], [1.6023774E12, 1940.0], [1.60237806E12, 2144.0], [1.602378E12, 1597.0], [1.6023777E12, 1232.5], [1.60237812E12, 1878.5], [1.60237782E12, 1576.0], [1.60237776E12, 846.0], [1.60237746E12, 1761.5], [1.60237788E12, 1202.5], [1.60237758E12, 2021.0], [1.60237752E12, 2941.5], [1.60237818E12, 2839.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6023783E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 430.0, "minX": 1.0, "maxY": 6690.5, "series": [{"data": [[2.0, 4280.0], [3.0, 3531.5], [4.0, 3045.0], [5.0, 2352.0], [6.0, 2226.5], [7.0, 1608.5], [8.0, 1419.0], [9.0, 1321.5], [10.0, 1425.0], [11.0, 1329.0], [12.0, 1255.0], [13.0, 1040.0], [14.0, 990.5], [15.0, 801.5], [1.0, 6690.5], [16.0, 779.0], [17.0, 882.5], [18.0, 679.0], [19.0, 656.0], [20.0, 734.5], [21.0, 836.0], [23.0, 1102.0], [24.0, 507.0], [25.0, 544.0], [26.0, 446.5], [27.0, 468.0], [29.0, 430.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 29.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 430.0, "minX": 1.0, "maxY": 6689.0, "series": [{"data": [[2.0, 4280.0], [3.0, 3530.5], [4.0, 3043.5], [5.0, 2352.0], [6.0, 2226.5], [7.0, 1608.5], [8.0, 1418.5], [9.0, 1321.5], [10.0, 1425.0], [11.0, 1329.0], [12.0, 1255.0], [13.0, 1040.0], [14.0, 990.0], [15.0, 801.5], [1.0, 6689.0], [16.0, 779.0], [17.0, 882.5], [18.0, 679.0], [19.0, 656.0], [20.0, 734.5], [21.0, 836.0], [23.0, 1102.0], [24.0, 507.0], [25.0, 544.0], [26.0, 446.5], [27.0, 468.0], [29.0, 430.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 29.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1.0833333333333333, "minX": 1.60237734E12, "maxY": 10.55, "series": [{"data": [[1.60237764E12, 2.8833333333333333], [1.60237734E12, 1.0833333333333333], [1.60237824E12, 5.55], [1.60237794E12, 6.733333333333333], [1.6023774E12, 5.5], [1.60237806E12, 4.516666666666667], [1.602378E12, 6.216666666666667], [1.6023777E12, 5.9], [1.60237812E12, 6.033333333333333], [1.60237782E12, 6.483333333333333], [1.60237776E12, 10.55], [1.60237746E12, 5.366666666666666], [1.60237788E12, 7.266666666666667], [1.60237758E12, 5.883333333333334], [1.60237752E12, 3.7333333333333334], [1.60237818E12, 4.0]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60237824E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.16666666666666666, "minX": 1.60237734E12, "maxY": 10.55, "series": [{"data": [[1.60237764E12, 2.8833333333333333], [1.6023783E12, 0.16666666666666666], [1.60237734E12, 0.8833333333333333], [1.60237824E12, 5.583333333333333], [1.60237794E12, 6.733333333333333], [1.6023774E12, 5.5], [1.60237806E12, 4.516666666666667], [1.602378E12, 6.216666666666667], [1.6023777E12, 5.9], [1.60237812E12, 6.033333333333333], [1.60237782E12, 6.483333333333333], [1.60237776E12, 10.55], [1.60237746E12, 5.366666666666666], [1.60237788E12, 7.266666666666667], [1.60237758E12, 5.883333333333334], [1.60237752E12, 3.7333333333333334], [1.60237818E12, 4.0]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6023783E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.16666666666666666, "minX": 1.60237734E12, "maxY": 10.55, "series": [{"data": [[1.60237764E12, 2.8833333333333333], [1.6023783E12, 0.16666666666666666], [1.60237734E12, 0.8833333333333333], [1.60237824E12, 5.583333333333333], [1.60237794E12, 6.733333333333333], [1.6023774E12, 5.5], [1.60237806E12, 4.516666666666667], [1.602378E12, 6.216666666666667], [1.6023777E12, 5.9], [1.60237812E12, 6.033333333333333], [1.60237782E12, 6.483333333333333], [1.60237776E12, 10.55], [1.60237746E12, 5.366666666666666], [1.60237788E12, 7.266666666666667], [1.60237758E12, 5.883333333333334], [1.60237752E12, 3.7333333333333334], [1.60237818E12, 4.0]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6023783E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.16666666666666666, "minX": 1.60237734E12, "maxY": 10.55, "series": [{"data": [[1.60237764E12, 2.8833333333333333], [1.6023783E12, 0.16666666666666666], [1.60237734E12, 0.8833333333333333], [1.60237824E12, 5.583333333333333], [1.60237794E12, 6.733333333333333], [1.6023774E12, 5.5], [1.60237806E12, 4.516666666666667], [1.602378E12, 6.216666666666667], [1.6023777E12, 5.9], [1.60237812E12, 6.033333333333333], [1.60237782E12, 6.483333333333333], [1.60237776E12, 10.55], [1.60237746E12, 5.366666666666666], [1.60237788E12, 7.266666666666667], [1.60237758E12, 5.883333333333334], [1.60237752E12, 3.7333333333333334], [1.60237818E12, 4.0]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6023783E12, "title": "Total Transactions Per Second"}},
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

