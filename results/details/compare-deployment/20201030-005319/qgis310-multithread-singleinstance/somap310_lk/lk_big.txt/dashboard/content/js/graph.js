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
        data: {"result": {"minY": 134.0, "minX": 0.0, "maxY": 12501.0, "series": [{"data": [[0.0, 134.0], [0.1, 251.0], [0.2, 374.0], [0.3, 394.0], [0.4, 401.0], [0.5, 407.0], [0.6, 411.0], [0.7, 414.0], [0.8, 415.0], [0.9, 416.0], [1.0, 418.0], [1.1, 418.0], [1.2, 419.0], [1.3, 420.0], [1.4, 421.0], [1.5, 422.0], [1.6, 423.0], [1.7, 424.0], [1.8, 426.0], [1.9, 427.0], [2.0, 429.0], [2.1, 430.0], [2.2, 432.0], [2.3, 435.0], [2.4, 437.0], [2.5, 438.0], [2.6, 440.0], [2.7, 442.0], [2.8, 442.0], [2.9, 443.0], [3.0, 443.0], [3.1, 444.0], [3.2, 445.0], [3.3, 446.0], [3.4, 447.0], [3.5, 447.0], [3.6, 448.0], [3.7, 449.0], [3.8, 449.0], [3.9, 450.0], [4.0, 451.0], [4.1, 451.0], [4.2, 451.0], [4.3, 452.0], [4.4, 453.0], [4.5, 454.0], [4.6, 456.0], [4.7, 456.0], [4.8, 458.0], [4.9, 460.0], [5.0, 461.0], [5.1, 461.0], [5.2, 464.0], [5.3, 465.0], [5.4, 466.0], [5.5, 467.0], [5.6, 468.0], [5.7, 469.0], [5.8, 471.0], [5.9, 471.0], [6.0, 472.0], [6.1, 473.0], [6.2, 474.0], [6.3, 475.0], [6.4, 477.0], [6.5, 478.0], [6.6, 479.0], [6.7, 479.0], [6.8, 480.0], [6.9, 481.0], [7.0, 483.0], [7.1, 484.0], [7.2, 487.0], [7.3, 490.0], [7.4, 495.0], [7.5, 499.0], [7.6, 501.0], [7.7, 505.0], [7.8, 509.0], [7.9, 513.0], [8.0, 516.0], [8.1, 519.0], [8.2, 522.0], [8.3, 524.0], [8.4, 527.0], [8.5, 530.0], [8.6, 533.0], [8.7, 536.0], [8.8, 541.0], [8.9, 543.0], [9.0, 551.0], [9.1, 558.0], [9.2, 569.0], [9.3, 575.0], [9.4, 581.0], [9.5, 592.0], [9.6, 599.0], [9.7, 605.0], [9.8, 611.0], [9.9, 614.0], [10.0, 617.0], [10.1, 618.0], [10.2, 624.0], [10.3, 627.0], [10.4, 630.0], [10.5, 631.0], [10.6, 635.0], [10.7, 642.0], [10.8, 647.0], [10.9, 651.0], [11.0, 656.0], [11.1, 661.0], [11.2, 664.0], [11.3, 667.0], [11.4, 672.0], [11.5, 677.0], [11.6, 684.0], [11.7, 690.0], [11.8, 693.0], [11.9, 695.0], [12.0, 697.0], [12.1, 699.0], [12.2, 700.0], [12.3, 701.0], [12.4, 702.0], [12.5, 704.0], [12.6, 707.0], [12.7, 708.0], [12.8, 710.0], [12.9, 711.0], [13.0, 713.0], [13.1, 714.0], [13.2, 716.0], [13.3, 717.0], [13.4, 719.0], [13.5, 722.0], [13.6, 722.0], [13.7, 724.0], [13.8, 726.0], [13.9, 727.0], [14.0, 730.0], [14.1, 731.0], [14.2, 732.0], [14.3, 733.0], [14.4, 734.0], [14.5, 736.0], [14.6, 737.0], [14.7, 738.0], [14.8, 740.0], [14.9, 741.0], [15.0, 741.0], [15.1, 743.0], [15.2, 744.0], [15.3, 745.0], [15.4, 747.0], [15.5, 747.0], [15.6, 748.0], [15.7, 750.0], [15.8, 752.0], [15.9, 754.0], [16.0, 757.0], [16.1, 758.0], [16.2, 760.0], [16.3, 761.0], [16.4, 764.0], [16.5, 766.0], [16.6, 768.0], [16.7, 769.0], [16.8, 770.0], [16.9, 770.0], [17.0, 771.0], [17.1, 772.0], [17.2, 772.0], [17.3, 773.0], [17.4, 774.0], [17.5, 774.0], [17.6, 775.0], [17.7, 776.0], [17.8, 778.0], [17.9, 779.0], [18.0, 780.0], [18.1, 781.0], [18.2, 782.0], [18.3, 783.0], [18.4, 783.0], [18.5, 784.0], [18.6, 785.0], [18.7, 786.0], [18.8, 787.0], [18.9, 788.0], [19.0, 789.0], [19.1, 790.0], [19.2, 791.0], [19.3, 793.0], [19.4, 794.0], [19.5, 795.0], [19.6, 796.0], [19.7, 797.0], [19.8, 798.0], [19.9, 799.0], [20.0, 800.0], [20.1, 801.0], [20.2, 802.0], [20.3, 803.0], [20.4, 805.0], [20.5, 806.0], [20.6, 807.0], [20.7, 808.0], [20.8, 808.0], [20.9, 809.0], [21.0, 810.0], [21.1, 810.0], [21.2, 811.0], [21.3, 812.0], [21.4, 813.0], [21.5, 814.0], [21.6, 814.0], [21.7, 815.0], [21.8, 818.0], [21.9, 818.0], [22.0, 819.0], [22.1, 821.0], [22.2, 823.0], [22.3, 824.0], [22.4, 825.0], [22.5, 827.0], [22.6, 830.0], [22.7, 832.0], [22.8, 835.0], [22.9, 836.0], [23.0, 841.0], [23.1, 842.0], [23.2, 846.0], [23.3, 850.0], [23.4, 855.0], [23.5, 857.0], [23.6, 864.0], [23.7, 866.0], [23.8, 868.0], [23.9, 869.0], [24.0, 870.0], [24.1, 871.0], [24.2, 873.0], [24.3, 875.0], [24.4, 875.0], [24.5, 877.0], [24.6, 881.0], [24.7, 884.0], [24.8, 887.0], [24.9, 891.0], [25.0, 893.0], [25.1, 894.0], [25.2, 897.0], [25.3, 899.0], [25.4, 902.0], [25.5, 903.0], [25.6, 905.0], [25.7, 907.0], [25.8, 910.0], [25.9, 911.0], [26.0, 914.0], [26.1, 916.0], [26.2, 916.0], [26.3, 918.0], [26.4, 921.0], [26.5, 922.0], [26.6, 925.0], [26.7, 928.0], [26.8, 929.0], [26.9, 932.0], [27.0, 934.0], [27.1, 938.0], [27.2, 940.0], [27.3, 943.0], [27.4, 945.0], [27.5, 946.0], [27.6, 949.0], [27.7, 953.0], [27.8, 956.0], [27.9, 958.0], [28.0, 963.0], [28.1, 965.0], [28.2, 966.0], [28.3, 971.0], [28.4, 973.0], [28.5, 977.0], [28.6, 978.0], [28.7, 979.0], [28.8, 981.0], [28.9, 982.0], [29.0, 984.0], [29.1, 985.0], [29.2, 987.0], [29.3, 991.0], [29.4, 995.0], [29.5, 997.0], [29.6, 999.0], [29.7, 1000.0], [29.8, 1002.0], [29.9, 1004.0], [30.0, 1005.0], [30.1, 1006.0], [30.2, 1008.0], [30.3, 1011.0], [30.4, 1014.0], [30.5, 1017.0], [30.6, 1020.0], [30.7, 1023.0], [30.8, 1026.0], [30.9, 1030.0], [31.0, 1037.0], [31.1, 1042.0], [31.2, 1043.0], [31.3, 1046.0], [31.4, 1049.0], [31.5, 1050.0], [31.6, 1051.0], [31.7, 1054.0], [31.8, 1055.0], [31.9, 1056.0], [32.0, 1057.0], [32.1, 1060.0], [32.2, 1064.0], [32.3, 1067.0], [32.4, 1070.0], [32.5, 1071.0], [32.6, 1073.0], [32.7, 1075.0], [32.8, 1078.0], [32.9, 1079.0], [33.0, 1080.0], [33.1, 1083.0], [33.2, 1083.0], [33.3, 1084.0], [33.4, 1086.0], [33.5, 1088.0], [33.6, 1090.0], [33.7, 1092.0], [33.8, 1094.0], [33.9, 1097.0], [34.0, 1098.0], [34.1, 1101.0], [34.2, 1103.0], [34.3, 1104.0], [34.4, 1107.0], [34.5, 1109.0], [34.6, 1111.0], [34.7, 1113.0], [34.8, 1114.0], [34.9, 1116.0], [35.0, 1117.0], [35.1, 1119.0], [35.2, 1122.0], [35.3, 1124.0], [35.4, 1125.0], [35.5, 1127.0], [35.6, 1129.0], [35.7, 1131.0], [35.8, 1135.0], [35.9, 1136.0], [36.0, 1140.0], [36.1, 1144.0], [36.2, 1147.0], [36.3, 1149.0], [36.4, 1152.0], [36.5, 1154.0], [36.6, 1158.0], [36.7, 1160.0], [36.8, 1163.0], [36.9, 1164.0], [37.0, 1170.0], [37.1, 1172.0], [37.2, 1174.0], [37.3, 1177.0], [37.4, 1180.0], [37.5, 1182.0], [37.6, 1183.0], [37.7, 1185.0], [37.8, 1186.0], [37.9, 1188.0], [38.0, 1190.0], [38.1, 1193.0], [38.2, 1196.0], [38.3, 1200.0], [38.4, 1201.0], [38.5, 1202.0], [38.6, 1206.0], [38.7, 1209.0], [38.8, 1209.0], [38.9, 1210.0], [39.0, 1212.0], [39.1, 1216.0], [39.2, 1219.0], [39.3, 1221.0], [39.4, 1222.0], [39.5, 1224.0], [39.6, 1225.0], [39.7, 1229.0], [39.8, 1230.0], [39.9, 1232.0], [40.0, 1234.0], [40.1, 1239.0], [40.2, 1243.0], [40.3, 1245.0], [40.4, 1246.0], [40.5, 1251.0], [40.6, 1252.0], [40.7, 1258.0], [40.8, 1262.0], [40.9, 1264.0], [41.0, 1266.0], [41.1, 1267.0], [41.2, 1267.0], [41.3, 1270.0], [41.4, 1271.0], [41.5, 1273.0], [41.6, 1274.0], [41.7, 1277.0], [41.8, 1279.0], [41.9, 1280.0], [42.0, 1283.0], [42.1, 1286.0], [42.2, 1287.0], [42.3, 1291.0], [42.4, 1294.0], [42.5, 1295.0], [42.6, 1296.0], [42.7, 1298.0], [42.8, 1300.0], [42.9, 1302.0], [43.0, 1303.0], [43.1, 1306.0], [43.2, 1310.0], [43.3, 1313.0], [43.4, 1315.0], [43.5, 1317.0], [43.6, 1325.0], [43.7, 1330.0], [43.8, 1335.0], [43.9, 1341.0], [44.0, 1346.0], [44.1, 1353.0], [44.2, 1356.0], [44.3, 1360.0], [44.4, 1364.0], [44.5, 1365.0], [44.6, 1368.0], [44.7, 1370.0], [44.8, 1372.0], [44.9, 1374.0], [45.0, 1378.0], [45.1, 1381.0], [45.2, 1385.0], [45.3, 1386.0], [45.4, 1388.0], [45.5, 1395.0], [45.6, 1403.0], [45.7, 1406.0], [45.8, 1410.0], [45.9, 1416.0], [46.0, 1419.0], [46.1, 1423.0], [46.2, 1425.0], [46.3, 1427.0], [46.4, 1430.0], [46.5, 1431.0], [46.6, 1433.0], [46.7, 1435.0], [46.8, 1436.0], [46.9, 1439.0], [47.0, 1442.0], [47.1, 1445.0], [47.2, 1448.0], [47.3, 1452.0], [47.4, 1455.0], [47.5, 1456.0], [47.6, 1459.0], [47.7, 1460.0], [47.8, 1463.0], [47.9, 1465.0], [48.0, 1467.0], [48.1, 1471.0], [48.2, 1475.0], [48.3, 1477.0], [48.4, 1480.0], [48.5, 1485.0], [48.6, 1486.0], [48.7, 1488.0], [48.8, 1491.0], [48.9, 1494.0], [49.0, 1498.0], [49.1, 1501.0], [49.2, 1505.0], [49.3, 1510.0], [49.4, 1512.0], [49.5, 1518.0], [49.6, 1521.0], [49.7, 1527.0], [49.8, 1531.0], [49.9, 1541.0], [50.0, 1546.0], [50.1, 1549.0], [50.2, 1553.0], [50.3, 1557.0], [50.4, 1562.0], [50.5, 1564.0], [50.6, 1566.0], [50.7, 1569.0], [50.8, 1570.0], [50.9, 1574.0], [51.0, 1576.0], [51.1, 1579.0], [51.2, 1581.0], [51.3, 1584.0], [51.4, 1587.0], [51.5, 1590.0], [51.6, 1593.0], [51.7, 1596.0], [51.8, 1601.0], [51.9, 1605.0], [52.0, 1609.0], [52.1, 1613.0], [52.2, 1617.0], [52.3, 1620.0], [52.4, 1624.0], [52.5, 1627.0], [52.6, 1632.0], [52.7, 1635.0], [52.8, 1636.0], [52.9, 1640.0], [53.0, 1643.0], [53.1, 1648.0], [53.2, 1654.0], [53.3, 1663.0], [53.4, 1670.0], [53.5, 1679.0], [53.6, 1680.0], [53.7, 1687.0], [53.8, 1688.0], [53.9, 1691.0], [54.0, 1693.0], [54.1, 1703.0], [54.2, 1707.0], [54.3, 1712.0], [54.4, 1717.0], [54.5, 1723.0], [54.6, 1725.0], [54.7, 1730.0], [54.8, 1734.0], [54.9, 1738.0], [55.0, 1740.0], [55.1, 1741.0], [55.2, 1745.0], [55.3, 1747.0], [55.4, 1751.0], [55.5, 1757.0], [55.6, 1762.0], [55.7, 1765.0], [55.8, 1770.0], [55.9, 1772.0], [56.0, 1775.0], [56.1, 1781.0], [56.2, 1787.0], [56.3, 1790.0], [56.4, 1796.0], [56.5, 1803.0], [56.6, 1810.0], [56.7, 1817.0], [56.8, 1822.0], [56.9, 1830.0], [57.0, 1835.0], [57.1, 1840.0], [57.2, 1843.0], [57.3, 1847.0], [57.4, 1849.0], [57.5, 1851.0], [57.6, 1855.0], [57.7, 1858.0], [57.8, 1863.0], [57.9, 1866.0], [58.0, 1872.0], [58.1, 1878.0], [58.2, 1880.0], [58.3, 1884.0], [58.4, 1892.0], [58.5, 1895.0], [58.6, 1900.0], [58.7, 1908.0], [58.8, 1912.0], [58.9, 1913.0], [59.0, 1920.0], [59.1, 1926.0], [59.2, 1933.0], [59.3, 1938.0], [59.4, 1944.0], [59.5, 1950.0], [59.6, 1957.0], [59.7, 1963.0], [59.8, 1968.0], [59.9, 1972.0], [60.0, 1976.0], [60.1, 1978.0], [60.2, 1980.0], [60.3, 1982.0], [60.4, 1988.0], [60.5, 1990.0], [60.6, 1995.0], [60.7, 2000.0], [60.8, 2006.0], [60.9, 2016.0], [61.0, 2020.0], [61.1, 2024.0], [61.2, 2028.0], [61.3, 2030.0], [61.4, 2032.0], [61.5, 2037.0], [61.6, 2038.0], [61.7, 2040.0], [61.8, 2046.0], [61.9, 2051.0], [62.0, 2058.0], [62.1, 2064.0], [62.2, 2071.0], [62.3, 2078.0], [62.4, 2079.0], [62.5, 2088.0], [62.6, 2093.0], [62.7, 2102.0], [62.8, 2108.0], [62.9, 2112.0], [63.0, 2119.0], [63.1, 2126.0], [63.2, 2137.0], [63.3, 2141.0], [63.4, 2149.0], [63.5, 2157.0], [63.6, 2160.0], [63.7, 2164.0], [63.8, 2170.0], [63.9, 2173.0], [64.0, 2177.0], [64.1, 2187.0], [64.2, 2194.0], [64.3, 2197.0], [64.4, 2199.0], [64.5, 2201.0], [64.6, 2204.0], [64.7, 2211.0], [64.8, 2218.0], [64.9, 2222.0], [65.0, 2224.0], [65.1, 2229.0], [65.2, 2233.0], [65.3, 2238.0], [65.4, 2242.0], [65.5, 2245.0], [65.6, 2248.0], [65.7, 2252.0], [65.8, 2254.0], [65.9, 2257.0], [66.0, 2260.0], [66.1, 2268.0], [66.2, 2274.0], [66.3, 2278.0], [66.4, 2285.0], [66.5, 2289.0], [66.6, 2306.0], [66.7, 2310.0], [66.8, 2313.0], [66.9, 2316.0], [67.0, 2320.0], [67.1, 2323.0], [67.2, 2328.0], [67.3, 2334.0], [67.4, 2336.0], [67.5, 2346.0], [67.6, 2360.0], [67.7, 2366.0], [67.8, 2375.0], [67.9, 2381.0], [68.0, 2386.0], [68.1, 2391.0], [68.2, 2401.0], [68.3, 2406.0], [68.4, 2411.0], [68.5, 2416.0], [68.6, 2418.0], [68.7, 2428.0], [68.8, 2433.0], [68.9, 2436.0], [69.0, 2442.0], [69.1, 2448.0], [69.2, 2452.0], [69.3, 2458.0], [69.4, 2465.0], [69.5, 2468.0], [69.6, 2470.0], [69.7, 2474.0], [69.8, 2476.0], [69.9, 2484.0], [70.0, 2487.0], [70.1, 2493.0], [70.2, 2498.0], [70.3, 2514.0], [70.4, 2521.0], [70.5, 2529.0], [70.6, 2537.0], [70.7, 2547.0], [70.8, 2552.0], [70.9, 2558.0], [71.0, 2564.0], [71.1, 2569.0], [71.2, 2575.0], [71.3, 2579.0], [71.4, 2585.0], [71.5, 2590.0], [71.6, 2598.0], [71.7, 2603.0], [71.8, 2613.0], [71.9, 2620.0], [72.0, 2630.0], [72.1, 2639.0], [72.2, 2647.0], [72.3, 2658.0], [72.4, 2668.0], [72.5, 2673.0], [72.6, 2680.0], [72.7, 2685.0], [72.8, 2691.0], [72.9, 2700.0], [73.0, 2704.0], [73.1, 2710.0], [73.2, 2720.0], [73.3, 2723.0], [73.4, 2727.0], [73.5, 2736.0], [73.6, 2742.0], [73.7, 2757.0], [73.8, 2763.0], [73.9, 2773.0], [74.0, 2782.0], [74.1, 2790.0], [74.2, 2800.0], [74.3, 2807.0], [74.4, 2815.0], [74.5, 2821.0], [74.6, 2828.0], [74.7, 2831.0], [74.8, 2842.0], [74.9, 2849.0], [75.0, 2856.0], [75.1, 2863.0], [75.2, 2874.0], [75.3, 2886.0], [75.4, 2891.0], [75.5, 2897.0], [75.6, 2906.0], [75.7, 2917.0], [75.8, 2927.0], [75.9, 2933.0], [76.0, 2940.0], [76.1, 2944.0], [76.2, 2952.0], [76.3, 2958.0], [76.4, 2970.0], [76.5, 2974.0], [76.6, 2978.0], [76.7, 2986.0], [76.8, 2993.0], [76.9, 2997.0], [77.0, 3002.0], [77.1, 3015.0], [77.2, 3019.0], [77.3, 3022.0], [77.4, 3029.0], [77.5, 3038.0], [77.6, 3045.0], [77.7, 3054.0], [77.8, 3060.0], [77.9, 3071.0], [78.0, 3079.0], [78.1, 3085.0], [78.2, 3093.0], [78.3, 3099.0], [78.4, 3105.0], [78.5, 3110.0], [78.6, 3114.0], [78.7, 3121.0], [78.8, 3124.0], [78.9, 3140.0], [79.0, 3148.0], [79.1, 3152.0], [79.2, 3157.0], [79.3, 3161.0], [79.4, 3166.0], [79.5, 3176.0], [79.6, 3183.0], [79.7, 3190.0], [79.8, 3196.0], [79.9, 3211.0], [80.0, 3226.0], [80.1, 3231.0], [80.2, 3237.0], [80.3, 3240.0], [80.4, 3242.0], [80.5, 3246.0], [80.6, 3252.0], [80.7, 3260.0], [80.8, 3263.0], [80.9, 3271.0], [81.0, 3281.0], [81.1, 3290.0], [81.2, 3297.0], [81.3, 3301.0], [81.4, 3308.0], [81.5, 3313.0], [81.6, 3321.0], [81.7, 3331.0], [81.8, 3337.0], [81.9, 3340.0], [82.0, 3346.0], [82.1, 3356.0], [82.2, 3366.0], [82.3, 3374.0], [82.4, 3397.0], [82.5, 3408.0], [82.6, 3423.0], [82.7, 3434.0], [82.8, 3445.0], [82.9, 3450.0], [83.0, 3454.0], [83.1, 3462.0], [83.2, 3464.0], [83.3, 3468.0], [83.4, 3476.0], [83.5, 3487.0], [83.6, 3506.0], [83.7, 3514.0], [83.8, 3523.0], [83.9, 3530.0], [84.0, 3533.0], [84.1, 3541.0], [84.2, 3547.0], [84.3, 3554.0], [84.4, 3562.0], [84.5, 3566.0], [84.6, 3571.0], [84.7, 3586.0], [84.8, 3594.0], [84.9, 3604.0], [85.0, 3613.0], [85.1, 3618.0], [85.2, 3627.0], [85.3, 3628.0], [85.4, 3634.0], [85.5, 3642.0], [85.6, 3652.0], [85.7, 3659.0], [85.8, 3665.0], [85.9, 3681.0], [86.0, 3687.0], [86.1, 3695.0], [86.2, 3698.0], [86.3, 3704.0], [86.4, 3709.0], [86.5, 3717.0], [86.6, 3728.0], [86.7, 3736.0], [86.8, 3743.0], [86.9, 3747.0], [87.0, 3759.0], [87.1, 3769.0], [87.2, 3773.0], [87.3, 3783.0], [87.4, 3794.0], [87.5, 3801.0], [87.6, 3806.0], [87.7, 3814.0], [87.8, 3822.0], [87.9, 3829.0], [88.0, 3846.0], [88.1, 3850.0], [88.2, 3859.0], [88.3, 3869.0], [88.4, 3870.0], [88.5, 3885.0], [88.6, 3891.0], [88.7, 3896.0], [88.8, 3901.0], [88.9, 3912.0], [89.0, 3936.0], [89.1, 3945.0], [89.2, 3958.0], [89.3, 3967.0], [89.4, 3982.0], [89.5, 4012.0], [89.6, 4023.0], [89.7, 4035.0], [89.8, 4053.0], [89.9, 4059.0], [90.0, 4073.0], [90.1, 4092.0], [90.2, 4113.0], [90.3, 4123.0], [90.4, 4134.0], [90.5, 4146.0], [90.6, 4155.0], [90.7, 4160.0], [90.8, 4170.0], [90.9, 4179.0], [91.0, 4192.0], [91.1, 4204.0], [91.2, 4213.0], [91.3, 4243.0], [91.4, 4251.0], [91.5, 4266.0], [91.6, 4282.0], [91.7, 4299.0], [91.8, 4306.0], [91.9, 4317.0], [92.0, 4329.0], [92.1, 4343.0], [92.2, 4351.0], [92.3, 4368.0], [92.4, 4378.0], [92.5, 4387.0], [92.6, 4396.0], [92.7, 4412.0], [92.8, 4437.0], [92.9, 4443.0], [93.0, 4452.0], [93.1, 4475.0], [93.2, 4498.0], [93.3, 4520.0], [93.4, 4540.0], [93.5, 4555.0], [93.6, 4564.0], [93.7, 4588.0], [93.8, 4612.0], [93.9, 4649.0], [94.0, 4658.0], [94.1, 4680.0], [94.2, 4703.0], [94.3, 4723.0], [94.4, 4757.0], [94.5, 4800.0], [94.6, 4839.0], [94.7, 4889.0], [94.8, 4924.0], [94.9, 4980.0], [95.0, 4996.0], [95.1, 5004.0], [95.2, 5053.0], [95.3, 5082.0], [95.4, 5165.0], [95.5, 5198.0], [95.6, 5241.0], [95.7, 5269.0], [95.8, 5337.0], [95.9, 5372.0], [96.0, 5422.0], [96.1, 5484.0], [96.2, 5519.0], [96.3, 5558.0], [96.4, 5597.0], [96.5, 5651.0], [96.6, 5753.0], [96.7, 5803.0], [96.8, 5844.0], [96.9, 5922.0], [97.0, 5966.0], [97.1, 5991.0], [97.2, 6100.0], [97.3, 6212.0], [97.4, 6321.0], [97.5, 6381.0], [97.6, 6471.0], [97.7, 6568.0], [97.8, 6626.0], [97.9, 6686.0], [98.0, 6811.0], [98.1, 6944.0], [98.2, 7091.0], [98.3, 7169.0], [98.4, 7254.0], [98.5, 7310.0], [98.6, 7329.0], [98.7, 7383.0], [98.8, 7460.0], [98.9, 7664.0], [99.0, 7749.0], [99.1, 7931.0], [99.2, 8305.0], [99.3, 8735.0], [99.4, 9123.0], [99.5, 9400.0], [99.6, 10872.0], [99.7, 11984.0], [99.8, 12159.0], [99.9, 12391.0], [100.0, 12501.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 408.0, "series": [{"data": [[100.0, 2.0], [200.0, 5.0], [300.0, 13.0], [400.0, 378.0], [500.0, 108.0], [600.0, 134.0], [700.0, 408.0], [800.0, 284.0], [900.0, 230.0], [1000.0, 229.0], [1100.0, 224.0], [1200.0, 236.0], [1300.0, 146.0], [1400.0, 184.0], [1500.0, 144.0], [1600.0, 119.0], [1700.0, 126.0], [1800.0, 113.0], [1900.0, 111.0], [2000.0, 105.0], [2100.0, 92.0], [2200.0, 112.0], [2300.0, 84.0], [2400.0, 107.0], [2500.0, 75.0], [2600.0, 66.0], [2800.0, 71.0], [2700.0, 68.0], [2900.0, 75.0], [3000.0, 72.0], [3100.0, 79.0], [3200.0, 76.0], [3300.0, 62.0], [3400.0, 60.0], [3500.0, 68.0], [3700.0, 67.0], [3600.0, 70.0], [3800.0, 69.0], [3900.0, 35.0], [4000.0, 36.0], [4300.0, 49.0], [4200.0, 34.0], [4100.0, 49.0], [4500.0, 29.0], [4400.0, 30.0], [4600.0, 22.0], [4700.0, 16.0], [4800.0, 12.0], [5000.0, 12.0], [5100.0, 11.0], [4900.0, 19.0], [5200.0, 11.0], [5300.0, 12.0], [5500.0, 13.0], [5600.0, 8.0], [5400.0, 11.0], [5700.0, 7.0], [5800.0, 7.0], [6100.0, 6.0], [6000.0, 3.0], [5900.0, 15.0], [6300.0, 6.0], [6200.0, 6.0], [6600.0, 10.0], [6500.0, 7.0], [6400.0, 6.0], [6900.0, 5.0], [6800.0, 4.0], [6700.0, 2.0], [7000.0, 3.0], [7100.0, 7.0], [7300.0, 14.0], [7400.0, 3.0], [7200.0, 8.0], [7600.0, 5.0], [7500.0, 3.0], [7700.0, 3.0], [7800.0, 2.0], [7900.0, 4.0], [8000.0, 1.0], [8500.0, 2.0], [8400.0, 2.0], [8600.0, 1.0], [8700.0, 1.0], [8300.0, 1.0], [8200.0, 1.0], [9100.0, 3.0], [9000.0, 1.0], [9200.0, 3.0], [8800.0, 2.0], [9400.0, 1.0], [9600.0, 1.0], [10200.0, 2.0], [10000.0, 1.0], [10800.0, 1.0], [11000.0, 1.0], [11400.0, 1.0], [11300.0, 1.0], [11600.0, 1.0], [12100.0, 3.0], [12000.0, 3.0], [12200.0, 1.0], [11900.0, 2.0], [12400.0, 4.0], [12500.0, 1.0], [12300.0, 3.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 12500.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 399.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2680.0, "series": [{"data": [[0.0, 399.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 2183.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 2680.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 11.431034482758623, "minX": 1.60402002E12, "maxY": 12.0, "series": [{"data": [[1.60402086E12, 12.0], [1.6040202E12, 12.0], [1.6040205E12, 12.0], [1.6040208E12, 12.0], [1.60402062E12, 12.0], [1.60402092E12, 11.431034482758623], [1.60402026E12, 12.0], [1.60402056E12, 12.0], [1.60402038E12, 12.0], [1.60402068E12, 12.0], [1.60402002E12, 11.804081632653059], [1.60402032E12, 12.0], [1.60402014E12, 12.0], [1.60402044E12, 12.0], [1.60402074E12, 12.0], [1.60402008E12, 12.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60402092E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 2053.136805953057, "minX": 1.0, "maxY": 12202.0, "series": [{"data": [[4.0, 4090.3333333333335], [8.0, 6335.5], [2.0, 12033.0], [1.0, 11919.0], [9.0, 6353.5], [10.0, 6430.0], [5.0, 12202.0], [11.0, 6460.5], [6.0, 4281.666666666666], [12.0, 2053.136805953057], [3.0, 12006.0], [7.0, 4273.333333333334]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[11.978335233751443, 2071.0271759787174]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 12.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 1034.5333333333333, "minX": 1.60402002E12, "maxY": 465949.1666666667, "series": [{"data": [[1.60402086E12, 366042.5833333333], [1.6040202E12, 342279.05], [1.6040205E12, 242559.03333333333], [1.6040208E12, 213013.45], [1.60402062E12, 158771.35], [1.60402092E12, 62902.666666666664], [1.60402026E12, 249128.83333333334], [1.60402056E12, 149860.35], [1.60402038E12, 110657.98333333334], [1.60402068E12, 420315.98333333334], [1.60402002E12, 68153.73333333334], [1.60402032E12, 370882.5333333333], [1.60402014E12, 417830.4166666667], [1.60402044E12, 376413.61666666664], [1.60402074E12, 465949.1666666667], [1.60402008E12, 236320.85]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60402086E12, 2965.366666666667], [1.6040202E12, 2712.3166666666666], [1.6040205E12, 3146.6833333333334], [1.6040208E12, 3254.3166666666666], [1.60402062E12, 3146.983333333333], [1.60402092E12, 1034.5333333333333], [1.60402026E12, 2254.3333333333335], [1.60402056E12, 4471.2], [1.60402038E12, 3239.2166666666667], [1.60402068E12, 3114.9], [1.60402002E12, 2198.483333333333], [1.60402032E12, 2919.3166666666666], [1.60402014E12, 1670.8], [1.60402044E12, 4219.85], [1.60402074E12, 2367.7833333333333], [1.60402008E12, 2774.866666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60402092E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 1285.200357781752, "minX": 1.60402002E12, "maxY": 3697.8189655172414, "series": [{"data": [[1.60402086E12, 2216.2485207100613], [1.6040202E12, 2450.629032258065], [1.6040205E12, 1971.953678474114], [1.6040208E12, 1891.8082191780823], [1.60402062E12, 2045.055072463769], [1.60402092E12, 3697.8189655172414], [1.60402026E12, 2747.836575875486], [1.60402056E12, 1447.0100000000004], [1.60402038E12, 2039.4112676056357], [1.60402068E12, 1936.3803191489365], [1.60402002E12, 1581.4530612244894], [1.60402032E12, 2202.2650602409653], [1.60402014E12, 3545.906735751296], [1.60402044E12, 1285.200357781752], [1.60402074E12, 2683.2230483271383], [1.60402008E12, 2135.2208955223873]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60402092E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 1284.8729874776388, "minX": 1.60402002E12, "maxY": 3697.5172413793116, "series": [{"data": [[1.60402086E12, 2215.7041420118326], [1.6040202E12, 2450.0193548387088], [1.6040205E12, 1971.618528610354], [1.6040208E12, 1891.506849315068], [1.60402062E12, 2044.823188405797], [1.60402092E12, 3697.5172413793116], [1.60402026E12, 2747.369649805447], [1.60402056E12, 1446.8580000000002], [1.60402038E12, 2039.2507042253533], [1.60402068E12, 1935.8510638297876], [1.60402002E12, 1581.2204081632651], [1.60402032E12, 2201.680722891565], [1.60402014E12, 3544.6683937823827], [1.60402044E12, 1284.8729874776388], [1.60402074E12, 2682.3345724907085], [1.60402008E12, 2134.9014925373144]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60402092E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.60402002E12, "maxY": 0.46530612244898, "series": [{"data": [[1.60402086E12, 0.06213017751479294], [1.6040202E12, 0.048387096774193554], [1.6040205E12, 0.04087193460490465], [1.6040208E12, 0.019178082191780823], [1.60402062E12, 0.04057971014492753], [1.60402092E12, 0.0], [1.60402026E12, 0.062256809338521374], [1.60402056E12, 0.025999999999999995], [1.60402038E12, 0.04507042253521123], [1.60402068E12, 0.03989361702127661], [1.60402002E12, 0.46530612244898], [1.60402032E12, 0.048192771084337324], [1.60402014E12, 0.08290155440414507], [1.60402044E12, 0.025044722719141325], [1.60402074E12, 0.06319702602230486], [1.60402008E12, 0.04477611940298506]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60402092E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 134.0, "minX": 1.60402002E12, "maxY": 12501.0, "series": [{"data": [[1.60402086E12, 6940.0], [1.6040202E12, 9266.0], [1.6040205E12, 5623.0], [1.6040208E12, 7479.0], [1.60402062E12, 5174.0], [1.60402092E12, 12501.0], [1.60402026E12, 7931.0], [1.60402056E12, 4710.0], [1.60402038E12, 12183.0], [1.60402068E12, 5735.0], [1.60402002E12, 5515.0], [1.60402032E12, 6820.0], [1.60402014E12, 9400.0], [1.60402044E12, 4924.0], [1.60402074E12, 7515.0], [1.60402008E12, 4953.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60402086E12, 415.0509999191761], [1.6040202E12, 374.0], [1.6040205E12, 446.24799964904787], [1.6040208E12, 420.1759996509552], [1.60402062E12, 431.2539990925789], [1.60402092E12, 603.1589999163151], [1.60402026E12, 442.32199993848803], [1.60402056E12, 418.0], [1.60402038E12, 406.203999915123], [1.60402068E12, 443.7859998202324], [1.60402002E12, 163.91399700880052], [1.60402032E12, 394.99699992060664], [1.60402014E12, 468.85599833488465], [1.60402044E12, 451.0799997329712], [1.60402074E12, 400.19999742507935], [1.60402008E12, 581.2639991188049]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60402086E12, 415.35610003232955], [1.6040202E12, 376.13030080080034], [1.6040205E12, 447.5728001403809], [1.6040208E12, 421.4936001396179], [1.60402062E12, 434.67940036296847], [1.60402092E12, 603.474900033474], [1.60402026E12, 442.5542000246048], [1.60402056E12, 418.0], [1.60402038E12, 406.5244000339508], [1.60402068E12, 444.46460007190706], [1.60402002E12, 175.2054011964798], [1.60402032E12, 395.2967000317574], [1.60402014E12, 475.14160066604614], [1.60402044E12, 452.08800010681153], [1.60402074E12, 409.92000102996826], [1.60402008E12, 584.590400352478]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60402086E12, 415.22049995958804], [1.6040202E12, 374.0], [1.6040205E12, 446.98399982452395], [1.6040208E12, 420.9079998254776], [1.60402062E12, 433.15699954628946], [1.60402092E12, 603.3344999581575], [1.60402026E12, 442.450999969244], [1.60402056E12, 418.0], [1.60402038E12, 406.3819999575615], [1.60402068E12, 444.1629999101162], [1.60402002E12, 170.18699850440024], [1.60402032E12, 395.1634999603033], [1.60402014E12, 472.3479991674423], [1.60402044E12, 451.6399998664856], [1.60402074E12, 405.5999987125397], [1.60402008E12, 583.1119995594024]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60402086E12, 414.0], [1.6040202E12, 369.0], [1.6040205E12, 433.0], [1.6040208E12, 409.0], [1.60402062E12, 411.0], [1.60402092E12, 603.0], [1.60402026E12, 442.0], [1.60402056E12, 411.0], [1.60402038E12, 402.0], [1.60402068E12, 438.0], [1.60402002E12, 134.0], [1.60402032E12, 393.0], [1.60402014E12, 442.0], [1.60402044E12, 448.0], [1.60402074E12, 376.0], [1.60402008E12, 572.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60402086E12, 1504.5], [1.6040202E12, 2280.5], [1.6040205E12, 1691.0], [1.6040208E12, 1518.0], [1.60402062E12, 1717.0], [1.60402092E12, 2513.0], [1.60402026E12, 2202.0], [1.60402056E12, 1138.0], [1.60402038E12, 1265.0], [1.60402068E12, 1439.5], [1.60402002E12, 1298.0], [1.60402032E12, 1740.0], [1.60402014E12, 3281.0], [1.60402044E12, 875.0], [1.60402074E12, 2473.0], [1.60402008E12, 1977.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60402092E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 416.5, "minX": 1.0, "maxY": 6065.0, "series": [{"data": [[2.0, 4249.0], [3.0, 3566.5], [4.0, 2907.5], [5.0, 2417.5], [6.0, 2111.0], [7.0, 1773.0], [8.0, 1524.0], [9.0, 1369.0], [10.0, 1252.0], [11.0, 1207.0], [12.0, 1317.0], [13.0, 1137.0], [14.0, 903.0], [15.0, 795.0], [16.0, 776.0], [1.0, 6065.0], [17.0, 806.0], [18.0, 760.0], [19.0, 757.0], [20.0, 623.0], [21.0, 495.0], [22.0, 531.5], [23.0, 422.5], [25.0, 475.0], [26.0, 449.5], [27.0, 451.5], [28.0, 416.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 28.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 416.5, "minX": 1.0, "maxY": 6063.0, "series": [{"data": [[2.0, 4246.5], [3.0, 3566.0], [4.0, 2907.0], [5.0, 2417.5], [6.0, 2110.0], [7.0, 1773.0], [8.0, 1523.5], [9.0, 1368.0], [10.0, 1252.0], [11.0, 1207.0], [12.0, 1316.5], [13.0, 1137.0], [14.0, 903.0], [15.0, 794.5], [16.0, 776.0], [1.0, 6063.0], [17.0, 806.0], [18.0, 760.0], [19.0, 757.0], [20.0, 623.0], [21.0, 494.0], [22.0, 531.5], [23.0, 422.5], [25.0, 475.0], [26.0, 449.5], [27.0, 451.5], [28.0, 416.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 28.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1.7333333333333334, "minX": 1.60402002E12, "maxY": 9.316666666666666, "series": [{"data": [[1.60402086E12, 5.633333333333334], [1.6040202E12, 5.166666666666667], [1.6040205E12, 6.116666666666666], [1.6040208E12, 6.083333333333333], [1.60402062E12, 5.75], [1.60402092E12, 1.7333333333333334], [1.60402026E12, 4.283333333333333], [1.60402056E12, 8.333333333333334], [1.60402038E12, 5.916666666666667], [1.60402068E12, 6.266666666666667], [1.60402002E12, 4.283333333333333], [1.60402032E12, 5.533333333333333], [1.60402014E12, 3.216666666666667], [1.60402044E12, 9.316666666666666], [1.60402074E12, 4.483333333333333], [1.60402008E12, 5.583333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60402092E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1.9333333333333333, "minX": 1.60402002E12, "maxY": 9.316666666666666, "series": [{"data": [[1.60402086E12, 5.633333333333334], [1.6040202E12, 5.166666666666667], [1.6040205E12, 6.116666666666666], [1.6040208E12, 6.083333333333333], [1.60402062E12, 5.75], [1.60402092E12, 1.9333333333333333], [1.60402026E12, 4.283333333333333], [1.60402056E12, 8.333333333333334], [1.60402038E12, 5.916666666666667], [1.60402068E12, 6.266666666666667], [1.60402002E12, 4.083333333333333], [1.60402032E12, 5.533333333333333], [1.60402014E12, 3.216666666666667], [1.60402044E12, 9.316666666666666], [1.60402074E12, 4.483333333333333], [1.60402008E12, 5.583333333333333]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60402092E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.9333333333333333, "minX": 1.60402002E12, "maxY": 9.316666666666666, "series": [{"data": [[1.60402086E12, 5.633333333333334], [1.6040202E12, 5.166666666666667], [1.6040205E12, 6.116666666666666], [1.6040208E12, 6.083333333333333], [1.60402062E12, 5.75], [1.60402092E12, 1.9333333333333333], [1.60402026E12, 4.283333333333333], [1.60402056E12, 8.333333333333334], [1.60402038E12, 5.916666666666667], [1.60402068E12, 6.266666666666667], [1.60402002E12, 4.083333333333333], [1.60402032E12, 5.533333333333333], [1.60402014E12, 3.216666666666667], [1.60402044E12, 9.316666666666666], [1.60402074E12, 4.483333333333333], [1.60402008E12, 5.583333333333333]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60402092E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.9333333333333333, "minX": 1.60402002E12, "maxY": 9.316666666666666, "series": [{"data": [[1.60402086E12, 5.633333333333334], [1.6040202E12, 5.166666666666667], [1.6040205E12, 6.116666666666666], [1.6040208E12, 6.083333333333333], [1.60402062E12, 5.75], [1.60402092E12, 1.9333333333333333], [1.60402026E12, 4.283333333333333], [1.60402056E12, 8.333333333333334], [1.60402038E12, 5.916666666666667], [1.60402068E12, 6.266666666666667], [1.60402002E12, 4.083333333333333], [1.60402032E12, 5.533333333333333], [1.60402014E12, 3.216666666666667], [1.60402044E12, 9.316666666666666], [1.60402074E12, 4.483333333333333], [1.60402008E12, 5.583333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60402092E12, "title": "Total Transactions Per Second"}},
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

