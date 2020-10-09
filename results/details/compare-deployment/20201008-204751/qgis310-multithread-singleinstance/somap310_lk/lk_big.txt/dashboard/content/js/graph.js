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
        data: {"result": {"minY": 141.0, "minX": 0.0, "maxY": 12790.0, "series": [{"data": [[0.0, 141.0], [0.1, 210.0], [0.2, 340.0], [0.3, 347.0], [0.4, 356.0], [0.5, 359.0], [0.6, 365.0], [0.7, 367.0], [0.8, 371.0], [0.9, 376.0], [1.0, 382.0], [1.1, 387.0], [1.2, 391.0], [1.3, 396.0], [1.4, 405.0], [1.5, 408.0], [1.6, 410.0], [1.7, 413.0], [1.8, 415.0], [1.9, 416.0], [2.0, 417.0], [2.1, 419.0], [2.2, 419.0], [2.3, 423.0], [2.4, 424.0], [2.5, 425.0], [2.6, 426.0], [2.7, 428.0], [2.8, 429.0], [2.9, 431.0], [3.0, 433.0], [3.1, 435.0], [3.2, 436.0], [3.3, 438.0], [3.4, 438.0], [3.5, 439.0], [3.6, 440.0], [3.7, 441.0], [3.8, 442.0], [3.9, 443.0], [4.0, 443.0], [4.1, 444.0], [4.2, 445.0], [4.3, 445.0], [4.4, 446.0], [4.5, 447.0], [4.6, 448.0], [4.7, 449.0], [4.8, 449.0], [4.9, 450.0], [5.0, 452.0], [5.1, 452.0], [5.2, 454.0], [5.3, 455.0], [5.4, 455.0], [5.5, 457.0], [5.6, 458.0], [5.7, 458.0], [5.8, 459.0], [5.9, 460.0], [6.0, 461.0], [6.1, 463.0], [6.2, 464.0], [6.3, 465.0], [6.4, 468.0], [6.5, 469.0], [6.6, 470.0], [6.7, 471.0], [6.8, 471.0], [6.9, 472.0], [7.0, 473.0], [7.1, 473.0], [7.2, 474.0], [7.3, 476.0], [7.4, 479.0], [7.5, 482.0], [7.6, 485.0], [7.7, 486.0], [7.8, 490.0], [7.9, 493.0], [8.0, 499.0], [8.1, 502.0], [8.2, 507.0], [8.3, 508.0], [8.4, 509.0], [8.5, 512.0], [8.6, 515.0], [8.7, 519.0], [8.8, 521.0], [8.9, 525.0], [9.0, 535.0], [9.1, 545.0], [9.2, 552.0], [9.3, 561.0], [9.4, 571.0], [9.5, 579.0], [9.6, 589.0], [9.7, 596.0], [9.8, 602.0], [9.9, 605.0], [10.0, 613.0], [10.1, 615.0], [10.2, 618.0], [10.3, 622.0], [10.4, 627.0], [10.5, 633.0], [10.6, 635.0], [10.7, 640.0], [10.8, 642.0], [10.9, 645.0], [11.0, 648.0], [11.1, 650.0], [11.2, 655.0], [11.3, 656.0], [11.4, 658.0], [11.5, 658.0], [11.6, 661.0], [11.7, 664.0], [11.8, 666.0], [11.9, 669.0], [12.0, 669.0], [12.1, 674.0], [12.2, 676.0], [12.3, 678.0], [12.4, 679.0], [12.5, 684.0], [12.6, 687.0], [12.7, 689.0], [12.8, 691.0], [12.9, 694.0], [13.0, 696.0], [13.1, 698.0], [13.2, 700.0], [13.3, 701.0], [13.4, 703.0], [13.5, 707.0], [13.6, 709.0], [13.7, 709.0], [13.8, 711.0], [13.9, 712.0], [14.0, 714.0], [14.1, 715.0], [14.2, 717.0], [14.3, 718.0], [14.4, 721.0], [14.5, 722.0], [14.6, 724.0], [14.7, 727.0], [14.8, 728.0], [14.9, 729.0], [15.0, 730.0], [15.1, 732.0], [15.2, 734.0], [15.3, 735.0], [15.4, 736.0], [15.5, 738.0], [15.6, 739.0], [15.7, 739.0], [15.8, 741.0], [15.9, 742.0], [16.0, 742.0], [16.1, 743.0], [16.2, 744.0], [16.3, 745.0], [16.4, 746.0], [16.5, 749.0], [16.6, 750.0], [16.7, 751.0], [16.8, 752.0], [16.9, 753.0], [17.0, 754.0], [17.1, 755.0], [17.2, 756.0], [17.3, 757.0], [17.4, 757.0], [17.5, 757.0], [17.6, 758.0], [17.7, 760.0], [17.8, 761.0], [17.9, 762.0], [18.0, 763.0], [18.1, 764.0], [18.2, 765.0], [18.3, 766.0], [18.4, 768.0], [18.5, 770.0], [18.6, 771.0], [18.7, 772.0], [18.8, 773.0], [18.9, 774.0], [19.0, 776.0], [19.1, 777.0], [19.2, 778.0], [19.3, 779.0], [19.4, 780.0], [19.5, 782.0], [19.6, 783.0], [19.7, 783.0], [19.8, 784.0], [19.9, 785.0], [20.0, 786.0], [20.1, 787.0], [20.2, 787.0], [20.3, 789.0], [20.4, 790.0], [20.5, 791.0], [20.6, 792.0], [20.7, 793.0], [20.8, 793.0], [20.9, 795.0], [21.0, 795.0], [21.1, 796.0], [21.2, 797.0], [21.3, 800.0], [21.4, 801.0], [21.5, 801.0], [21.6, 802.0], [21.7, 804.0], [21.8, 805.0], [21.9, 806.0], [22.0, 807.0], [22.1, 807.0], [22.2, 809.0], [22.3, 810.0], [22.4, 811.0], [22.5, 814.0], [22.6, 816.0], [22.7, 820.0], [22.8, 823.0], [22.9, 826.0], [23.0, 827.0], [23.1, 828.0], [23.2, 832.0], [23.3, 834.0], [23.4, 835.0], [23.5, 838.0], [23.6, 841.0], [23.7, 843.0], [23.8, 846.0], [23.9, 847.0], [24.0, 849.0], [24.1, 850.0], [24.2, 853.0], [24.3, 856.0], [24.4, 858.0], [24.5, 860.0], [24.6, 863.0], [24.7, 865.0], [24.8, 867.0], [24.9, 869.0], [25.0, 871.0], [25.1, 874.0], [25.2, 876.0], [25.3, 878.0], [25.4, 882.0], [25.5, 883.0], [25.6, 886.0], [25.7, 889.0], [25.8, 894.0], [25.9, 894.0], [26.0, 897.0], [26.1, 901.0], [26.2, 906.0], [26.3, 910.0], [26.4, 911.0], [26.5, 914.0], [26.6, 916.0], [26.7, 918.0], [26.8, 919.0], [26.9, 921.0], [27.0, 925.0], [27.1, 927.0], [27.2, 928.0], [27.3, 932.0], [27.4, 933.0], [27.5, 936.0], [27.6, 940.0], [27.7, 942.0], [27.8, 943.0], [27.9, 945.0], [28.0, 946.0], [28.1, 949.0], [28.2, 953.0], [28.3, 955.0], [28.4, 956.0], [28.5, 958.0], [28.6, 961.0], [28.7, 964.0], [28.8, 966.0], [28.9, 967.0], [29.0, 967.0], [29.1, 970.0], [29.2, 971.0], [29.3, 975.0], [29.4, 978.0], [29.5, 980.0], [29.6, 983.0], [29.7, 984.0], [29.8, 988.0], [29.9, 989.0], [30.0, 992.0], [30.1, 993.0], [30.2, 995.0], [30.3, 998.0], [30.4, 1000.0], [30.5, 1001.0], [30.6, 1002.0], [30.7, 1003.0], [30.8, 1005.0], [30.9, 1007.0], [31.0, 1011.0], [31.1, 1014.0], [31.2, 1017.0], [31.3, 1021.0], [31.4, 1025.0], [31.5, 1028.0], [31.6, 1031.0], [31.7, 1036.0], [31.8, 1038.0], [31.9, 1039.0], [32.0, 1040.0], [32.1, 1042.0], [32.2, 1043.0], [32.3, 1045.0], [32.4, 1047.0], [32.5, 1049.0], [32.6, 1052.0], [32.7, 1053.0], [32.8, 1057.0], [32.9, 1058.0], [33.0, 1061.0], [33.1, 1064.0], [33.2, 1069.0], [33.3, 1070.0], [33.4, 1071.0], [33.5, 1073.0], [33.6, 1077.0], [33.7, 1079.0], [33.8, 1081.0], [33.9, 1081.0], [34.0, 1083.0], [34.1, 1085.0], [34.2, 1086.0], [34.3, 1088.0], [34.4, 1092.0], [34.5, 1095.0], [34.6, 1096.0], [34.7, 1098.0], [34.8, 1099.0], [34.9, 1102.0], [35.0, 1105.0], [35.1, 1107.0], [35.2, 1110.0], [35.3, 1114.0], [35.4, 1118.0], [35.5, 1119.0], [35.6, 1120.0], [35.7, 1122.0], [35.8, 1125.0], [35.9, 1128.0], [36.0, 1131.0], [36.1, 1133.0], [36.2, 1135.0], [36.3, 1136.0], [36.4, 1140.0], [36.5, 1142.0], [36.6, 1146.0], [36.7, 1147.0], [36.8, 1152.0], [36.9, 1157.0], [37.0, 1158.0], [37.1, 1163.0], [37.2, 1166.0], [37.3, 1168.0], [37.4, 1169.0], [37.5, 1171.0], [37.6, 1172.0], [37.7, 1174.0], [37.8, 1175.0], [37.9, 1179.0], [38.0, 1182.0], [38.1, 1184.0], [38.2, 1186.0], [38.3, 1189.0], [38.4, 1191.0], [38.5, 1192.0], [38.6, 1194.0], [38.7, 1197.0], [38.8, 1198.0], [38.9, 1199.0], [39.0, 1202.0], [39.1, 1203.0], [39.2, 1205.0], [39.3, 1206.0], [39.4, 1208.0], [39.5, 1209.0], [39.6, 1210.0], [39.7, 1214.0], [39.8, 1215.0], [39.9, 1217.0], [40.0, 1221.0], [40.1, 1227.0], [40.2, 1229.0], [40.3, 1230.0], [40.4, 1233.0], [40.5, 1234.0], [40.6, 1238.0], [40.7, 1240.0], [40.8, 1243.0], [40.9, 1244.0], [41.0, 1246.0], [41.1, 1248.0], [41.2, 1252.0], [41.3, 1255.0], [41.4, 1258.0], [41.5, 1259.0], [41.6, 1260.0], [41.7, 1266.0], [41.8, 1267.0], [41.9, 1269.0], [42.0, 1272.0], [42.1, 1275.0], [42.2, 1276.0], [42.3, 1279.0], [42.4, 1281.0], [42.5, 1283.0], [42.6, 1286.0], [42.7, 1291.0], [42.8, 1294.0], [42.9, 1298.0], [43.0, 1302.0], [43.1, 1304.0], [43.2, 1306.0], [43.3, 1314.0], [43.4, 1316.0], [43.5, 1321.0], [43.6, 1326.0], [43.7, 1332.0], [43.8, 1335.0], [43.9, 1340.0], [44.0, 1341.0], [44.1, 1342.0], [44.2, 1344.0], [44.3, 1348.0], [44.4, 1352.0], [44.5, 1357.0], [44.6, 1361.0], [44.7, 1363.0], [44.8, 1371.0], [44.9, 1376.0], [45.0, 1379.0], [45.1, 1381.0], [45.2, 1383.0], [45.3, 1384.0], [45.4, 1387.0], [45.5, 1389.0], [45.6, 1391.0], [45.7, 1393.0], [45.8, 1396.0], [45.9, 1397.0], [46.0, 1400.0], [46.1, 1402.0], [46.2, 1404.0], [46.3, 1406.0], [46.4, 1409.0], [46.5, 1414.0], [46.6, 1416.0], [46.7, 1419.0], [46.8, 1420.0], [46.9, 1422.0], [47.0, 1424.0], [47.1, 1426.0], [47.2, 1428.0], [47.3, 1430.0], [47.4, 1433.0], [47.5, 1436.0], [47.6, 1439.0], [47.7, 1444.0], [47.8, 1450.0], [47.9, 1453.0], [48.0, 1456.0], [48.1, 1459.0], [48.2, 1461.0], [48.3, 1469.0], [48.4, 1471.0], [48.5, 1477.0], [48.6, 1483.0], [48.7, 1487.0], [48.8, 1489.0], [48.9, 1491.0], [49.0, 1492.0], [49.1, 1494.0], [49.2, 1497.0], [49.3, 1498.0], [49.4, 1500.0], [49.5, 1503.0], [49.6, 1503.0], [49.7, 1508.0], [49.8, 1509.0], [49.9, 1510.0], [50.0, 1513.0], [50.1, 1522.0], [50.2, 1527.0], [50.3, 1530.0], [50.4, 1537.0], [50.5, 1539.0], [50.6, 1541.0], [50.7, 1542.0], [50.8, 1547.0], [50.9, 1552.0], [51.0, 1557.0], [51.1, 1561.0], [51.2, 1569.0], [51.3, 1572.0], [51.4, 1576.0], [51.5, 1584.0], [51.6, 1588.0], [51.7, 1591.0], [51.8, 1594.0], [51.9, 1600.0], [52.0, 1609.0], [52.1, 1613.0], [52.2, 1619.0], [52.3, 1627.0], [52.4, 1632.0], [52.5, 1637.0], [52.6, 1640.0], [52.7, 1650.0], [52.8, 1655.0], [52.9, 1659.0], [53.0, 1663.0], [53.1, 1665.0], [53.2, 1666.0], [53.3, 1670.0], [53.4, 1675.0], [53.5, 1679.0], [53.6, 1682.0], [53.7, 1690.0], [53.8, 1691.0], [53.9, 1693.0], [54.0, 1695.0], [54.1, 1696.0], [54.2, 1697.0], [54.3, 1699.0], [54.4, 1702.0], [54.5, 1704.0], [54.6, 1706.0], [54.7, 1708.0], [54.8, 1715.0], [54.9, 1719.0], [55.0, 1726.0], [55.1, 1728.0], [55.2, 1731.0], [55.3, 1741.0], [55.4, 1744.0], [55.5, 1746.0], [55.6, 1754.0], [55.7, 1757.0], [55.8, 1760.0], [55.9, 1763.0], [56.0, 1767.0], [56.1, 1777.0], [56.2, 1782.0], [56.3, 1789.0], [56.4, 1793.0], [56.5, 1797.0], [56.6, 1802.0], [56.7, 1809.0], [56.8, 1814.0], [56.9, 1816.0], [57.0, 1818.0], [57.1, 1825.0], [57.2, 1833.0], [57.3, 1837.0], [57.4, 1844.0], [57.5, 1847.0], [57.6, 1851.0], [57.7, 1856.0], [57.8, 1860.0], [57.9, 1862.0], [58.0, 1869.0], [58.1, 1871.0], [58.2, 1876.0], [58.3, 1878.0], [58.4, 1880.0], [58.5, 1883.0], [58.6, 1885.0], [58.7, 1890.0], [58.8, 1896.0], [58.9, 1899.0], [59.0, 1904.0], [59.1, 1909.0], [59.2, 1914.0], [59.3, 1921.0], [59.4, 1929.0], [59.5, 1933.0], [59.6, 1950.0], [59.7, 1957.0], [59.8, 1959.0], [59.9, 1969.0], [60.0, 1975.0], [60.1, 1986.0], [60.2, 1989.0], [60.3, 1992.0], [60.4, 1995.0], [60.5, 2001.0], [60.6, 2005.0], [60.7, 2007.0], [60.8, 2012.0], [60.9, 2018.0], [61.0, 2024.0], [61.1, 2030.0], [61.2, 2036.0], [61.3, 2038.0], [61.4, 2045.0], [61.5, 2052.0], [61.6, 2060.0], [61.7, 2063.0], [61.8, 2072.0], [61.9, 2076.0], [62.0, 2080.0], [62.1, 2084.0], [62.2, 2086.0], [62.3, 2090.0], [62.4, 2092.0], [62.5, 2097.0], [62.6, 2099.0], [62.7, 2103.0], [62.8, 2107.0], [62.9, 2112.0], [63.0, 2114.0], [63.1, 2119.0], [63.2, 2123.0], [63.3, 2133.0], [63.4, 2136.0], [63.5, 2138.0], [63.6, 2141.0], [63.7, 2146.0], [63.8, 2148.0], [63.9, 2153.0], [64.0, 2162.0], [64.1, 2165.0], [64.2, 2171.0], [64.3, 2180.0], [64.4, 2190.0], [64.5, 2194.0], [64.6, 2198.0], [64.7, 2203.0], [64.8, 2212.0], [64.9, 2214.0], [65.0, 2217.0], [65.1, 2223.0], [65.2, 2229.0], [65.3, 2230.0], [65.4, 2233.0], [65.5, 2238.0], [65.6, 2245.0], [65.7, 2250.0], [65.8, 2259.0], [65.9, 2265.0], [66.0, 2271.0], [66.1, 2277.0], [66.2, 2281.0], [66.3, 2288.0], [66.4, 2291.0], [66.5, 2293.0], [66.6, 2299.0], [66.7, 2305.0], [66.8, 2309.0], [66.9, 2312.0], [67.0, 2324.0], [67.1, 2328.0], [67.2, 2333.0], [67.3, 2336.0], [67.4, 2343.0], [67.5, 2353.0], [67.6, 2359.0], [67.7, 2365.0], [67.8, 2372.0], [67.9, 2374.0], [68.0, 2379.0], [68.1, 2391.0], [68.2, 2397.0], [68.3, 2400.0], [68.4, 2406.0], [68.5, 2414.0], [68.6, 2418.0], [68.7, 2421.0], [68.8, 2427.0], [68.9, 2429.0], [69.0, 2439.0], [69.1, 2443.0], [69.2, 2452.0], [69.3, 2461.0], [69.4, 2474.0], [69.5, 2478.0], [69.6, 2480.0], [69.7, 2486.0], [69.8, 2493.0], [69.9, 2497.0], [70.0, 2503.0], [70.1, 2511.0], [70.2, 2519.0], [70.3, 2531.0], [70.4, 2533.0], [70.5, 2536.0], [70.6, 2539.0], [70.7, 2544.0], [70.8, 2557.0], [70.9, 2560.0], [71.0, 2567.0], [71.1, 2573.0], [71.2, 2580.0], [71.3, 2588.0], [71.4, 2596.0], [71.5, 2602.0], [71.6, 2615.0], [71.7, 2622.0], [71.8, 2624.0], [71.9, 2628.0], [72.0, 2632.0], [72.1, 2639.0], [72.2, 2641.0], [72.3, 2644.0], [72.4, 2649.0], [72.5, 2657.0], [72.6, 2665.0], [72.7, 2670.0], [72.8, 2681.0], [72.9, 2686.0], [73.0, 2695.0], [73.1, 2703.0], [73.2, 2716.0], [73.3, 2720.0], [73.4, 2721.0], [73.5, 2726.0], [73.6, 2738.0], [73.7, 2757.0], [73.8, 2766.0], [73.9, 2777.0], [74.0, 2793.0], [74.1, 2802.0], [74.2, 2812.0], [74.3, 2817.0], [74.4, 2822.0], [74.5, 2826.0], [74.6, 2830.0], [74.7, 2840.0], [74.8, 2850.0], [74.9, 2856.0], [75.0, 2858.0], [75.1, 2869.0], [75.2, 2877.0], [75.3, 2884.0], [75.4, 2888.0], [75.5, 2892.0], [75.6, 2896.0], [75.7, 2908.0], [75.8, 2926.0], [75.9, 2939.0], [76.0, 2944.0], [76.1, 2948.0], [76.2, 2953.0], [76.3, 2960.0], [76.4, 2965.0], [76.5, 2976.0], [76.6, 2985.0], [76.7, 2993.0], [76.8, 2998.0], [76.9, 3004.0], [77.0, 3011.0], [77.1, 3019.0], [77.2, 3033.0], [77.3, 3045.0], [77.4, 3050.0], [77.5, 3059.0], [77.6, 3065.0], [77.7, 3074.0], [77.8, 3083.0], [77.9, 3088.0], [78.0, 3094.0], [78.1, 3096.0], [78.2, 3100.0], [78.3, 3107.0], [78.4, 3112.0], [78.5, 3118.0], [78.6, 3121.0], [78.7, 3138.0], [78.8, 3148.0], [78.9, 3151.0], [79.0, 3160.0], [79.1, 3169.0], [79.2, 3178.0], [79.3, 3185.0], [79.4, 3191.0], [79.5, 3200.0], [79.6, 3202.0], [79.7, 3207.0], [79.8, 3216.0], [79.9, 3217.0], [80.0, 3221.0], [80.1, 3226.0], [80.2, 3232.0], [80.3, 3239.0], [80.4, 3245.0], [80.5, 3258.0], [80.6, 3266.0], [80.7, 3274.0], [80.8, 3280.0], [80.9, 3295.0], [81.0, 3302.0], [81.1, 3308.0], [81.2, 3312.0], [81.3, 3325.0], [81.4, 3332.0], [81.5, 3336.0], [81.6, 3342.0], [81.7, 3351.0], [81.8, 3354.0], [81.9, 3362.0], [82.0, 3371.0], [82.1, 3382.0], [82.2, 3394.0], [82.3, 3403.0], [82.4, 3410.0], [82.5, 3422.0], [82.6, 3428.0], [82.7, 3442.0], [82.8, 3448.0], [82.9, 3453.0], [83.0, 3459.0], [83.1, 3470.0], [83.2, 3477.0], [83.3, 3483.0], [83.4, 3489.0], [83.5, 3506.0], [83.6, 3515.0], [83.7, 3520.0], [83.8, 3524.0], [83.9, 3534.0], [84.0, 3538.0], [84.1, 3541.0], [84.2, 3544.0], [84.3, 3548.0], [84.4, 3559.0], [84.5, 3570.0], [84.6, 3574.0], [84.7, 3579.0], [84.8, 3592.0], [84.9, 3598.0], [85.0, 3602.0], [85.1, 3610.0], [85.2, 3614.0], [85.3, 3620.0], [85.4, 3622.0], [85.5, 3635.0], [85.6, 3644.0], [85.7, 3649.0], [85.8, 3655.0], [85.9, 3662.0], [86.0, 3671.0], [86.1, 3678.0], [86.2, 3684.0], [86.3, 3690.0], [86.4, 3703.0], [86.5, 3713.0], [86.6, 3722.0], [86.7, 3728.0], [86.8, 3735.0], [86.9, 3745.0], [87.0, 3757.0], [87.1, 3765.0], [87.2, 3777.0], [87.3, 3782.0], [87.4, 3788.0], [87.5, 3791.0], [87.6, 3798.0], [87.7, 3804.0], [87.8, 3809.0], [87.9, 3823.0], [88.0, 3832.0], [88.1, 3842.0], [88.2, 3851.0], [88.3, 3866.0], [88.4, 3872.0], [88.5, 3878.0], [88.6, 3886.0], [88.7, 3905.0], [88.8, 3912.0], [88.9, 3922.0], [89.0, 3940.0], [89.1, 3953.0], [89.2, 3966.0], [89.3, 3979.0], [89.4, 3987.0], [89.5, 3994.0], [89.6, 4000.0], [89.7, 4028.0], [89.8, 4041.0], [89.9, 4053.0], [90.0, 4056.0], [90.1, 4069.0], [90.2, 4082.0], [90.3, 4105.0], [90.4, 4133.0], [90.5, 4140.0], [90.6, 4154.0], [90.7, 4163.0], [90.8, 4170.0], [90.9, 4177.0], [91.0, 4205.0], [91.1, 4214.0], [91.2, 4229.0], [91.3, 4249.0], [91.4, 4261.0], [91.5, 4267.0], [91.6, 4275.0], [91.7, 4290.0], [91.8, 4296.0], [91.9, 4311.0], [92.0, 4324.0], [92.1, 4335.0], [92.2, 4352.0], [92.3, 4367.0], [92.4, 4381.0], [92.5, 4391.0], [92.6, 4412.0], [92.7, 4421.0], [92.8, 4430.0], [92.9, 4458.0], [93.0, 4470.0], [93.1, 4499.0], [93.2, 4511.0], [93.3, 4535.0], [93.4, 4563.0], [93.5, 4582.0], [93.6, 4613.0], [93.7, 4628.0], [93.8, 4667.0], [93.9, 4693.0], [94.0, 4709.0], [94.1, 4722.0], [94.2, 4748.0], [94.3, 4763.0], [94.4, 4810.0], [94.5, 4853.0], [94.6, 4872.0], [94.7, 4885.0], [94.8, 4945.0], [94.9, 4985.0], [95.0, 5042.0], [95.1, 5073.0], [95.2, 5149.0], [95.3, 5186.0], [95.4, 5216.0], [95.5, 5270.0], [95.6, 5290.0], [95.7, 5322.0], [95.8, 5334.0], [95.9, 5411.0], [96.0, 5471.0], [96.1, 5504.0], [96.2, 5555.0], [96.3, 5605.0], [96.4, 5642.0], [96.5, 5686.0], [96.6, 5739.0], [96.7, 5784.0], [96.8, 5844.0], [96.9, 5922.0], [97.0, 6022.0], [97.1, 6151.0], [97.2, 6183.0], [97.3, 6299.0], [97.4, 6355.0], [97.5, 6417.0], [97.6, 6516.0], [97.7, 6579.0], [97.8, 6699.0], [97.9, 6854.0], [98.0, 6925.0], [98.1, 6973.0], [98.2, 7110.0], [98.3, 7143.0], [98.4, 7204.0], [98.5, 7261.0], [98.6, 7339.0], [98.7, 7412.0], [98.8, 7561.0], [98.9, 7647.0], [99.0, 7774.0], [99.1, 7885.0], [99.2, 8245.0], [99.3, 8939.0], [99.4, 9261.0], [99.5, 9726.0], [99.6, 10833.0], [99.7, 12195.0], [99.8, 12414.0], [99.9, 12629.0], [100.0, 12790.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 427.0, "series": [{"data": [[100.0, 5.0], [200.0, 3.0], [300.0, 62.0], [400.0, 352.0], [500.0, 91.0], [600.0, 182.0], [700.0, 427.0], [800.0, 251.0], [900.0, 228.0], [1000.0, 234.0], [1100.0, 216.0], [1200.0, 214.0], [1300.0, 160.0], [1400.0, 178.0], [1500.0, 133.0], [1600.0, 128.0], [1700.0, 117.0], [1800.0, 125.0], [1900.0, 81.0], [2000.0, 114.0], [2100.0, 106.0], [2300.0, 87.0], [2200.0, 106.0], [2400.0, 86.0], [2500.0, 80.0], [2600.0, 87.0], [2700.0, 52.0], [2800.0, 82.0], [2900.0, 63.0], [3000.0, 72.0], [3100.0, 67.0], [3200.0, 79.0], [3300.0, 69.0], [3400.0, 64.0], [3500.0, 77.0], [3600.0, 75.0], [3700.0, 67.0], [3800.0, 56.0], [3900.0, 47.0], [4000.0, 36.0], [4300.0, 37.0], [4200.0, 45.0], [4100.0, 38.0], [4500.0, 22.0], [4600.0, 23.0], [4400.0, 30.0], [4700.0, 22.0], [4800.0, 17.0], [4900.0, 12.0], [5000.0, 9.0], [5100.0, 12.0], [5300.0, 13.0], [5200.0, 16.0], [5400.0, 9.0], [5600.0, 14.0], [5500.0, 11.0], [5800.0, 9.0], [5700.0, 10.0], [6100.0, 10.0], [6000.0, 2.0], [5900.0, 5.0], [6200.0, 5.0], [6300.0, 9.0], [6600.0, 6.0], [6400.0, 5.0], [6500.0, 7.0], [6800.0, 6.0], [6900.0, 9.0], [6700.0, 1.0], [7100.0, 9.0], [7000.0, 4.0], [7300.0, 6.0], [7400.0, 3.0], [7200.0, 11.0], [7600.0, 5.0], [7500.0, 6.0], [7700.0, 7.0], [7800.0, 1.0], [7900.0, 1.0], [8000.0, 1.0], [8100.0, 2.0], [8600.0, 1.0], [8700.0, 1.0], [8200.0, 1.0], [9200.0, 2.0], [8900.0, 4.0], [8800.0, 1.0], [9000.0, 1.0], [9100.0, 1.0], [9300.0, 1.0], [9400.0, 1.0], [9600.0, 2.0], [9700.0, 1.0], [9800.0, 1.0], [10200.0, 2.0], [10000.0, 1.0], [10800.0, 1.0], [11200.0, 1.0], [10900.0, 1.0], [11400.0, 1.0], [11500.0, 1.0], [12100.0, 2.0], [12200.0, 2.0], [12300.0, 2.0], [12500.0, 1.0], [12600.0, 4.0], [12700.0, 2.0], [12400.0, 4.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 12700.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 425.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2667.0, "series": [{"data": [[0.0, 425.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 2180.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 2667.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 11.650793650793654, "minX": 1.60219092E12, "maxY": 12.0, "series": [{"data": [[1.60219158E12, 12.0], [1.60219092E12, 11.768867924528298], [1.60219122E12, 12.0], [1.60219152E12, 12.0], [1.60219134E12, 12.0], [1.60219164E12, 12.0], [1.60219098E12, 12.0], [1.60219128E12, 12.0], [1.6021911E12, 12.0], [1.6021914E12, 12.0], [1.6021917E12, 12.0], [1.60219104E12, 12.0], [1.60219182E12, 11.650793650793654], [1.60219116E12, 12.0], [1.60219146E12, 12.0], [1.60219176E12, 12.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60219182E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 2049.18491715864, "minX": 1.0, "maxY": 12707.0, "series": [{"data": [[4.0, 6316.0], [8.0, 12707.0], [2.0, 12414.0], [1.0, 12385.0], [9.0, 6538.0], [5.0, 6348.0], [10.0, 6520.0], [11.0, 6535.0], [6.0, 3314.0], [12.0, 2049.18491715864], [3.0, 12435.0], [7.0, 4334.666666666667]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[11.978186646434006, 2067.713391502275]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 12.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 1714.1833333333334, "minX": 1.60219092E12, "maxY": 460839.8, "series": [{"data": [[1.60219158E12, 416075.73333333334], [1.60219092E12, 55891.1], [1.60219122E12, 412297.8333333333], [1.60219152E12, 149641.98333333334], [1.60219134E12, 363437.0833333333], [1.60219164E12, 460839.8], [1.60219098E12, 243463.0], [1.60219128E12, 104696.3], [1.6021911E12, 377265.1], [1.6021914E12, 248710.45], [1.6021917E12, 216427.66666666666], [1.60219104E12, 385799.75], [1.60219182E12, 71357.38333333333], [1.60219116E12, 228180.61666666667], [1.60219146E12, 170710.91666666666], [1.60219176E12, 386573.2833333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60219158E12, 3088.6666666666665], [1.60219092E12, 1896.2833333333333], [1.60219122E12, 2244.616666666667], [1.60219152E12, 3314.1833333333334], [1.60219134E12, 4562.483333333334], [1.60219164E12, 2270.3333333333335], [1.60219098E12, 2885.5833333333335], [1.60219128E12, 3511.95], [1.6021911E12, 2605.866666666667], [1.6021914E12, 3091.5], [1.6021917E12, 3420.516666666667], [1.60219104E12, 1817.7666666666667], [1.60219182E12, 1714.1833333333334], [1.60219116E12, 2339.4333333333334], [1.60219146E12, 4443.716666666666], [1.60219176E12, 2372.4666666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60219182E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 1213.0221088435374, "minX": 1.60219092E12, "maxY": 3167.3773584905666, "series": [{"data": [[1.60219158E12, 1891.5588235294115], [1.60219092E12, 1608.9905660377349], [1.60219122E12, 2830.389312977101], [1.60219152E12, 2006.5497237569057], [1.60219134E12, 1213.0221088435374], [1.60219164E12, 2893.196078431371], [1.60219098E12, 2093.5552325581407], [1.60219128E12, 1873.8203125000002], [1.6021911E12, 2553.9191919191917], [1.6021914E12, 1947.2888283378743], [1.6021917E12, 1789.541450777202], [1.60219104E12, 3167.3773584905666], [1.60219182E12, 2539.4603174603176], [1.60219116E12, 2662.691729323308], [1.60219146E12, 1426.3947895791582], [1.60219176E12, 2757.5636363636354]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60219182E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 1212.7363945578238, "minX": 1.60219092E12, "maxY": 3166.3490566037735, "series": [{"data": [[1.60219158E12, 1891.032085561497], [1.60219092E12, 1608.7877358490578], [1.60219122E12, 2829.62213740458], [1.60219152E12, 2006.3480662983425], [1.60219134E12, 1212.7363945578238], [1.60219164E12, 2892.2784313725483], [1.60219098E12, 2093.2209302325605], [1.60219128E12, 1873.6614583333323], [1.6021911E12, 2553.2323232323233], [1.6021914E12, 1946.934604904632], [1.6021917E12, 1789.2720207253876], [1.60219104E12, 3166.3490566037735], [1.60219182E12, 2539.2857142857147], [1.60219116E12, 2662.233082706765], [1.60219146E12, 1426.2304609218431], [1.60219176E12, 2756.898181818182]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60219182E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.020725388601036284, "minX": 1.60219092E12, "maxY": 0.6462264150943402, "series": [{"data": [[1.60219158E12, 0.021390374331550808], [1.60219092E12, 0.6462264150943402], [1.60219122E12, 0.061068702290076354], [1.60219152E12, 0.03591160220994476], [1.60219134E12, 0.028911564625850338], [1.60219164E12, 0.05490196078431373], [1.60219098E12, 0.04360465116279069], [1.60219128E12, 0.03906250000000004], [1.6021911E12, 0.05387205387205385], [1.6021914E12, 0.03542234332425068], [1.6021917E12, 0.020725388601036284], [1.60219104E12, 0.07547169811320753], [1.60219182E12, 0.047619047619047596], [1.60219116E12, 0.04887218045112781], [1.60219146E12, 0.02605210420841684], [1.60219176E12, 0.05818181818181814]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60219182E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 141.0, "minX": 1.60219092E12, "maxY": 12790.0, "series": [{"data": [[1.60219158E12, 5761.0], [1.60219092E12, 5394.0], [1.60219122E12, 6601.0], [1.60219152E12, 5411.0], [1.60219134E12, 4872.0], [1.60219164E12, 7775.0], [1.60219098E12, 4957.0], [1.60219128E12, 12241.0], [1.6021911E12, 9834.0], [1.6021914E12, 5822.0], [1.6021917E12, 7561.0], [1.60219104E12, 8689.0], [1.60219182E12, 12790.0], [1.60219116E12, 7787.0], [1.60219146E12, 4783.0], [1.60219176E12, 7215.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60219158E12, 427.49999964237213], [1.60219092E12, 177.67999796867372], [1.60219122E12, 414.10099981188773], [1.60219152E12, 393.2669999134541], [1.60219134E12, 439.0], [1.60219164E12, 432.91199981689454], [1.60219098E12, 552.8899985194206], [1.60219128E12, 340.4649999082088], [1.6021911E12, 351.0919995737076], [1.6021914E12, 427.31199991226197], [1.6021917E12, 408.0], [1.60219104E12, 460.78699436306954], [1.60219182E12, 356.41999990940093], [1.60219116E12, 425.8059998726845], [1.60219146E12, 407.4999998807907], [1.60219176E12, 395.29199914455415]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60219158E12, 428.85000014305115], [1.60219092E12, 181.10870002031325], [1.60219122E12, 414.8111000752449], [1.60219152E12, 393.5937000346184], [1.60219134E12, 439.0], [1.60219164E12, 433.6032000732422], [1.60219098E12, 558.4790005922317], [1.60219128E12, 340.81150003671644], [1.6021911E12, 352.701200170517], [1.6021914E12, 427.6432000350952], [1.6021917E12, 408.0], [1.60219104E12, 470.1087000203133], [1.60219182E12, 356.7620000362396], [1.60219116E12, 426.2866000509262], [1.60219146E12, 407.9500000476837], [1.60219176E12, 398.52120034217836]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60219158E12, 428.24999982118607], [1.60219092E12, 181.02349997460843], [1.60219122E12, 414.49549990594386], [1.60219152E12, 393.448499956727], [1.60219134E12, 439.0], [1.60219164E12, 433.29599990844724], [1.60219098E12, 555.9949992597103], [1.60219128E12, 340.6574999541044], [1.6021911E12, 351.98599978685377], [1.6021914E12, 427.49599995613096], [1.6021917E12, 408.0], [1.60219104E12, 470.0234999746084], [1.60219182E12, 356.60999995470047], [1.60219116E12, 426.0729999363422], [1.60219146E12, 407.74999994039536], [1.60219176E12, 397.08599957227705]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60219158E12, 422.0], [1.60219092E12, 141.0], [1.60219122E12, 411.0], [1.60219152E12, 387.0], [1.60219134E12, 399.0], [1.60219164E12, 429.0], [1.60219098E12, 544.0], [1.60219128E12, 335.0], [1.6021911E12, 346.0], [1.6021914E12, 425.0], [1.6021917E12, 408.0], [1.60219104E12, 359.0], [1.60219182E12, 355.0], [1.60219116E12, 425.0], [1.60219146E12, 393.0], [1.60219176E12, 376.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60219158E12, 1404.0], [1.60219092E12, 1341.0], [1.60219122E12, 2914.5], [1.60219152E12, 1689.0], [1.60219134E12, 818.0], [1.60219164E12, 2644.0], [1.60219098E12, 1917.5], [1.60219128E12, 1164.5], [1.6021911E12, 2276.0], [1.6021914E12, 1665.0], [1.6021917E12, 1500.5], [1.60219104E12, 2998.0], [1.60219182E12, 1041.0], [1.60219116E12, 2265.0], [1.60219146E12, 1102.0], [1.60219176E12, 2404.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60219182E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 366.0, "minX": 1.0, "maxY": 6462.5, "series": [{"data": [[2.0, 4106.5], [33.0, 366.0], [3.0, 3678.0], [4.0, 2996.5], [5.0, 2372.0], [6.0, 2197.0], [7.0, 1878.0], [8.0, 1478.5], [9.0, 1277.0], [10.0, 1437.5], [11.0, 1119.0], [12.0, 1233.0], [13.0, 965.0], [14.0, 934.5], [15.0, 774.0], [1.0, 6462.5], [16.0, 787.0], [17.0, 727.5], [18.0, 793.0], [19.0, 742.0], [20.0, 718.0], [21.0, 658.0], [22.0, 678.0], [24.0, 519.5], [25.0, 460.0], [26.0, 474.5], [27.0, 445.0], [28.0, 471.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 33.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 366.0, "minX": 1.0, "maxY": 6460.0, "series": [{"data": [[2.0, 4105.0], [33.0, 366.0], [3.0, 3677.0], [4.0, 2996.0], [5.0, 2371.0], [6.0, 2196.5], [7.0, 1878.0], [8.0, 1478.5], [9.0, 1277.0], [10.0, 1437.0], [11.0, 1118.0], [12.0, 1233.0], [13.0, 965.0], [14.0, 934.0], [15.0, 774.0], [1.0, 6460.0], [16.0, 786.5], [17.0, 727.0], [18.0, 793.0], [19.0, 742.0], [20.0, 718.0], [21.0, 658.0], [22.0, 678.0], [24.0, 519.5], [25.0, 460.0], [26.0, 474.5], [27.0, 445.0], [28.0, 471.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 33.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 2.95, "minX": 1.60219092E12, "maxY": 9.8, "series": [{"data": [[1.60219158E12, 6.233333333333333], [1.60219092E12, 3.716666666666667], [1.60219122E12, 4.366666666666666], [1.60219152E12, 6.033333333333333], [1.60219134E12, 9.8], [1.60219164E12, 4.25], [1.60219098E12, 5.75], [1.60219128E12, 6.4], [1.6021911E12, 4.95], [1.6021914E12, 6.116666666666666], [1.6021917E12, 6.433333333333334], [1.60219104E12, 3.533333333333333], [1.60219182E12, 2.95], [1.60219116E12, 4.433333333333334], [1.60219146E12, 8.316666666666666], [1.60219176E12, 4.583333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60219182E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 3.15, "minX": 1.60219092E12, "maxY": 9.8, "series": [{"data": [[1.60219158E12, 6.233333333333333], [1.60219092E12, 3.533333333333333], [1.60219122E12, 4.366666666666666], [1.60219152E12, 6.033333333333333], [1.60219134E12, 9.8], [1.60219164E12, 4.25], [1.60219098E12, 5.733333333333333], [1.60219128E12, 6.4], [1.6021911E12, 4.95], [1.6021914E12, 6.116666666666666], [1.6021917E12, 6.433333333333334], [1.60219104E12, 3.533333333333333], [1.60219182E12, 3.15], [1.60219116E12, 4.433333333333334], [1.60219146E12, 8.316666666666666], [1.60219176E12, 4.583333333333333]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60219182E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 3.15, "minX": 1.60219092E12, "maxY": 9.8, "series": [{"data": [[1.60219158E12, 6.233333333333333], [1.60219092E12, 3.533333333333333], [1.60219122E12, 4.366666666666666], [1.60219152E12, 6.033333333333333], [1.60219134E12, 9.8], [1.60219164E12, 4.25], [1.60219098E12, 5.733333333333333], [1.60219128E12, 6.4], [1.6021911E12, 4.95], [1.6021914E12, 6.116666666666666], [1.6021917E12, 6.433333333333334], [1.60219104E12, 3.533333333333333], [1.60219182E12, 3.15], [1.60219116E12, 4.433333333333334], [1.60219146E12, 8.316666666666666], [1.60219176E12, 4.583333333333333]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60219182E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 3.15, "minX": 1.60219092E12, "maxY": 9.8, "series": [{"data": [[1.60219158E12, 6.233333333333333], [1.60219092E12, 3.533333333333333], [1.60219122E12, 4.366666666666666], [1.60219152E12, 6.033333333333333], [1.60219134E12, 9.8], [1.60219164E12, 4.25], [1.60219098E12, 5.733333333333333], [1.60219128E12, 6.4], [1.6021911E12, 4.95], [1.6021914E12, 6.116666666666666], [1.6021917E12, 6.433333333333334], [1.60219104E12, 3.533333333333333], [1.60219182E12, 3.15], [1.60219116E12, 4.433333333333334], [1.60219146E12, 8.316666666666666], [1.60219176E12, 4.583333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60219182E12, "title": "Total Transactions Per Second"}},
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

