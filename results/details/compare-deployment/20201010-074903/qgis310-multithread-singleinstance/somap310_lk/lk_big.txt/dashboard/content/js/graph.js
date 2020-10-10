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
        data: {"result": {"minY": 144.0, "minX": 0.0, "maxY": 12730.0, "series": [{"data": [[0.0, 144.0], [0.1, 203.0], [0.2, 366.0], [0.3, 368.0], [0.4, 371.0], [0.5, 376.0], [0.6, 378.0], [0.7, 385.0], [0.8, 388.0], [0.9, 393.0], [1.0, 396.0], [1.1, 398.0], [1.2, 400.0], [1.3, 401.0], [1.4, 403.0], [1.5, 405.0], [1.6, 408.0], [1.7, 409.0], [1.8, 410.0], [1.9, 413.0], [2.0, 415.0], [2.1, 416.0], [2.2, 418.0], [2.3, 419.0], [2.4, 419.0], [2.5, 420.0], [2.6, 421.0], [2.7, 422.0], [2.8, 422.0], [2.9, 422.0], [3.0, 423.0], [3.1, 424.0], [3.2, 425.0], [3.3, 426.0], [3.4, 427.0], [3.5, 428.0], [3.6, 428.0], [3.7, 429.0], [3.8, 429.0], [3.9, 430.0], [4.0, 430.0], [4.1, 431.0], [4.2, 432.0], [4.3, 433.0], [4.4, 433.0], [4.5, 435.0], [4.6, 435.0], [4.7, 436.0], [4.8, 437.0], [4.9, 438.0], [5.0, 438.0], [5.1, 439.0], [5.2, 442.0], [5.3, 443.0], [5.4, 444.0], [5.5, 445.0], [5.6, 446.0], [5.7, 447.0], [5.8, 448.0], [5.9, 449.0], [6.0, 450.0], [6.1, 452.0], [6.2, 453.0], [6.3, 455.0], [6.4, 456.0], [6.5, 456.0], [6.6, 457.0], [6.7, 459.0], [6.8, 461.0], [6.9, 462.0], [7.0, 465.0], [7.1, 466.0], [7.2, 468.0], [7.3, 470.0], [7.4, 472.0], [7.5, 474.0], [7.6, 475.0], [7.7, 476.0], [7.8, 481.0], [7.9, 482.0], [8.0, 488.0], [8.1, 492.0], [8.2, 495.0], [8.3, 502.0], [8.4, 505.0], [8.5, 510.0], [8.6, 511.0], [8.7, 517.0], [8.8, 521.0], [8.9, 526.0], [9.0, 537.0], [9.1, 542.0], [9.2, 546.0], [9.3, 555.0], [9.4, 563.0], [9.5, 566.0], [9.6, 570.0], [9.7, 574.0], [9.8, 581.0], [9.9, 589.0], [10.0, 592.0], [10.1, 596.0], [10.2, 602.0], [10.3, 608.0], [10.4, 621.0], [10.5, 626.0], [10.6, 630.0], [10.7, 636.0], [10.8, 637.0], [10.9, 638.0], [11.0, 641.0], [11.1, 646.0], [11.2, 648.0], [11.3, 650.0], [11.4, 653.0], [11.5, 654.0], [11.6, 655.0], [11.7, 657.0], [11.8, 659.0], [11.9, 663.0], [12.0, 665.0], [12.1, 668.0], [12.2, 671.0], [12.3, 673.0], [12.4, 675.0], [12.5, 677.0], [12.6, 678.0], [12.7, 681.0], [12.8, 685.0], [12.9, 687.0], [13.0, 689.0], [13.1, 690.0], [13.2, 693.0], [13.3, 696.0], [13.4, 697.0], [13.5, 698.0], [13.6, 698.0], [13.7, 701.0], [13.8, 702.0], [13.9, 703.0], [14.0, 706.0], [14.1, 708.0], [14.2, 710.0], [14.3, 711.0], [14.4, 713.0], [14.5, 715.0], [14.6, 716.0], [14.7, 716.0], [14.8, 717.0], [14.9, 718.0], [15.0, 720.0], [15.1, 723.0], [15.2, 724.0], [15.3, 724.0], [15.4, 725.0], [15.5, 727.0], [15.6, 730.0], [15.7, 732.0], [15.8, 734.0], [15.9, 736.0], [16.0, 737.0], [16.1, 739.0], [16.2, 740.0], [16.3, 741.0], [16.4, 743.0], [16.5, 744.0], [16.6, 745.0], [16.7, 746.0], [16.8, 746.0], [16.9, 746.0], [17.0, 747.0], [17.1, 750.0], [17.2, 752.0], [17.3, 754.0], [17.4, 756.0], [17.5, 757.0], [17.6, 757.0], [17.7, 758.0], [17.8, 760.0], [17.9, 760.0], [18.0, 763.0], [18.1, 763.0], [18.2, 764.0], [18.3, 765.0], [18.4, 766.0], [18.5, 767.0], [18.6, 770.0], [18.7, 770.0], [18.8, 771.0], [18.9, 772.0], [19.0, 773.0], [19.1, 774.0], [19.2, 776.0], [19.3, 777.0], [19.4, 778.0], [19.5, 780.0], [19.6, 781.0], [19.7, 782.0], [19.8, 782.0], [19.9, 784.0], [20.0, 785.0], [20.1, 786.0], [20.2, 786.0], [20.3, 787.0], [20.4, 788.0], [20.5, 790.0], [20.6, 791.0], [20.7, 792.0], [20.8, 793.0], [20.9, 795.0], [21.0, 797.0], [21.1, 799.0], [21.2, 801.0], [21.3, 802.0], [21.4, 805.0], [21.5, 806.0], [21.6, 807.0], [21.7, 809.0], [21.8, 810.0], [21.9, 811.0], [22.0, 813.0], [22.1, 814.0], [22.2, 816.0], [22.3, 818.0], [22.4, 819.0], [22.5, 821.0], [22.6, 822.0], [22.7, 825.0], [22.8, 827.0], [22.9, 830.0], [23.0, 832.0], [23.1, 833.0], [23.2, 834.0], [23.3, 836.0], [23.4, 839.0], [23.5, 842.0], [23.6, 844.0], [23.7, 845.0], [23.8, 846.0], [23.9, 850.0], [24.0, 854.0], [24.1, 855.0], [24.2, 856.0], [24.3, 858.0], [24.4, 861.0], [24.5, 861.0], [24.6, 863.0], [24.7, 866.0], [24.8, 869.0], [24.9, 872.0], [25.0, 873.0], [25.1, 876.0], [25.2, 878.0], [25.3, 881.0], [25.4, 883.0], [25.5, 885.0], [25.6, 887.0], [25.7, 890.0], [25.8, 894.0], [25.9, 895.0], [26.0, 897.0], [26.1, 902.0], [26.2, 906.0], [26.3, 907.0], [26.4, 908.0], [26.5, 911.0], [26.6, 913.0], [26.7, 915.0], [26.8, 918.0], [26.9, 921.0], [27.0, 923.0], [27.1, 925.0], [27.2, 928.0], [27.3, 930.0], [27.4, 931.0], [27.5, 933.0], [27.6, 936.0], [27.7, 938.0], [27.8, 940.0], [27.9, 942.0], [28.0, 944.0], [28.1, 945.0], [28.2, 947.0], [28.3, 948.0], [28.4, 949.0], [28.5, 951.0], [28.6, 952.0], [28.7, 953.0], [28.8, 955.0], [28.9, 955.0], [29.0, 957.0], [29.1, 961.0], [29.2, 962.0], [29.3, 963.0], [29.4, 965.0], [29.5, 969.0], [29.6, 970.0], [29.7, 973.0], [29.8, 977.0], [29.9, 978.0], [30.0, 982.0], [30.1, 984.0], [30.2, 988.0], [30.3, 989.0], [30.4, 992.0], [30.5, 994.0], [30.6, 998.0], [30.7, 1003.0], [30.8, 1010.0], [30.9, 1011.0], [31.0, 1016.0], [31.1, 1017.0], [31.2, 1020.0], [31.3, 1021.0], [31.4, 1022.0], [31.5, 1024.0], [31.6, 1031.0], [31.7, 1036.0], [31.8, 1041.0], [31.9, 1042.0], [32.0, 1045.0], [32.1, 1047.0], [32.2, 1048.0], [32.3, 1050.0], [32.4, 1051.0], [32.5, 1054.0], [32.6, 1055.0], [32.7, 1057.0], [32.8, 1058.0], [32.9, 1061.0], [33.0, 1062.0], [33.1, 1065.0], [33.2, 1067.0], [33.3, 1070.0], [33.4, 1073.0], [33.5, 1075.0], [33.6, 1076.0], [33.7, 1078.0], [33.8, 1080.0], [33.9, 1081.0], [34.0, 1083.0], [34.1, 1084.0], [34.2, 1086.0], [34.3, 1087.0], [34.4, 1088.0], [34.5, 1090.0], [34.6, 1095.0], [34.7, 1097.0], [34.8, 1098.0], [34.9, 1099.0], [35.0, 1102.0], [35.1, 1103.0], [35.2, 1105.0], [35.3, 1108.0], [35.4, 1109.0], [35.5, 1110.0], [35.6, 1115.0], [35.7, 1117.0], [35.8, 1118.0], [35.9, 1119.0], [36.0, 1120.0], [36.1, 1123.0], [36.2, 1123.0], [36.3, 1125.0], [36.4, 1130.0], [36.5, 1132.0], [36.6, 1134.0], [36.7, 1138.0], [36.8, 1140.0], [36.9, 1142.0], [37.0, 1143.0], [37.1, 1146.0], [37.2, 1150.0], [37.3, 1153.0], [37.4, 1154.0], [37.5, 1158.0], [37.6, 1160.0], [37.7, 1162.0], [37.8, 1164.0], [37.9, 1165.0], [38.0, 1168.0], [38.1, 1170.0], [38.2, 1171.0], [38.3, 1175.0], [38.4, 1179.0], [38.5, 1181.0], [38.6, 1184.0], [38.7, 1188.0], [38.8, 1190.0], [38.9, 1192.0], [39.0, 1195.0], [39.1, 1198.0], [39.2, 1201.0], [39.3, 1202.0], [39.4, 1204.0], [39.5, 1207.0], [39.6, 1211.0], [39.7, 1213.0], [39.8, 1216.0], [39.9, 1218.0], [40.0, 1223.0], [40.1, 1228.0], [40.2, 1230.0], [40.3, 1232.0], [40.4, 1235.0], [40.5, 1238.0], [40.6, 1240.0], [40.7, 1242.0], [40.8, 1243.0], [40.9, 1246.0], [41.0, 1247.0], [41.1, 1250.0], [41.2, 1254.0], [41.3, 1257.0], [41.4, 1260.0], [41.5, 1262.0], [41.6, 1264.0], [41.7, 1266.0], [41.8, 1268.0], [41.9, 1271.0], [42.0, 1274.0], [42.1, 1276.0], [42.2, 1277.0], [42.3, 1277.0], [42.4, 1279.0], [42.5, 1281.0], [42.6, 1282.0], [42.7, 1285.0], [42.8, 1287.0], [42.9, 1291.0], [43.0, 1293.0], [43.1, 1294.0], [43.2, 1298.0], [43.3, 1301.0], [43.4, 1304.0], [43.5, 1307.0], [43.6, 1311.0], [43.7, 1312.0], [43.8, 1315.0], [43.9, 1320.0], [44.0, 1322.0], [44.1, 1326.0], [44.2, 1330.0], [44.3, 1334.0], [44.4, 1338.0], [44.5, 1347.0], [44.6, 1349.0], [44.7, 1353.0], [44.8, 1356.0], [44.9, 1360.0], [45.0, 1361.0], [45.1, 1363.0], [45.2, 1364.0], [45.3, 1367.0], [45.4, 1369.0], [45.5, 1371.0], [45.6, 1374.0], [45.7, 1377.0], [45.8, 1380.0], [45.9, 1384.0], [46.0, 1386.0], [46.1, 1388.0], [46.2, 1389.0], [46.3, 1392.0], [46.4, 1395.0], [46.5, 1400.0], [46.6, 1401.0], [46.7, 1403.0], [46.8, 1404.0], [46.9, 1406.0], [47.0, 1408.0], [47.1, 1410.0], [47.2, 1415.0], [47.3, 1417.0], [47.4, 1422.0], [47.5, 1429.0], [47.6, 1434.0], [47.7, 1436.0], [47.8, 1438.0], [47.9, 1439.0], [48.0, 1440.0], [48.1, 1441.0], [48.2, 1443.0], [48.3, 1446.0], [48.4, 1447.0], [48.5, 1449.0], [48.6, 1450.0], [48.7, 1453.0], [48.8, 1456.0], [48.9, 1459.0], [49.0, 1462.0], [49.1, 1466.0], [49.2, 1468.0], [49.3, 1475.0], [49.4, 1480.0], [49.5, 1481.0], [49.6, 1486.0], [49.7, 1502.0], [49.8, 1510.0], [49.9, 1512.0], [50.0, 1515.0], [50.1, 1520.0], [50.2, 1526.0], [50.3, 1530.0], [50.4, 1536.0], [50.5, 1539.0], [50.6, 1546.0], [50.7, 1548.0], [50.8, 1552.0], [50.9, 1558.0], [51.0, 1561.0], [51.1, 1562.0], [51.2, 1564.0], [51.3, 1566.0], [51.4, 1568.0], [51.5, 1574.0], [51.6, 1574.0], [51.7, 1577.0], [51.8, 1580.0], [51.9, 1584.0], [52.0, 1590.0], [52.1, 1594.0], [52.2, 1602.0], [52.3, 1606.0], [52.4, 1608.0], [52.5, 1611.0], [52.6, 1616.0], [52.7, 1618.0], [52.8, 1621.0], [52.9, 1625.0], [53.0, 1629.0], [53.1, 1630.0], [53.2, 1633.0], [53.3, 1635.0], [53.4, 1640.0], [53.5, 1643.0], [53.6, 1646.0], [53.7, 1657.0], [53.8, 1661.0], [53.9, 1665.0], [54.0, 1668.0], [54.1, 1669.0], [54.2, 1672.0], [54.3, 1673.0], [54.4, 1675.0], [54.5, 1678.0], [54.6, 1679.0], [54.7, 1683.0], [54.8, 1693.0], [54.9, 1697.0], [55.0, 1702.0], [55.1, 1707.0], [55.2, 1715.0], [55.3, 1720.0], [55.4, 1722.0], [55.5, 1726.0], [55.6, 1733.0], [55.7, 1744.0], [55.8, 1745.0], [55.9, 1748.0], [56.0, 1756.0], [56.1, 1760.0], [56.2, 1766.0], [56.3, 1769.0], [56.4, 1774.0], [56.5, 1779.0], [56.6, 1784.0], [56.7, 1792.0], [56.8, 1798.0], [56.9, 1803.0], [57.0, 1806.0], [57.1, 1811.0], [57.2, 1814.0], [57.3, 1821.0], [57.4, 1824.0], [57.5, 1829.0], [57.6, 1838.0], [57.7, 1844.0], [57.8, 1846.0], [57.9, 1852.0], [58.0, 1865.0], [58.1, 1871.0], [58.2, 1876.0], [58.3, 1880.0], [58.4, 1884.0], [58.5, 1889.0], [58.6, 1891.0], [58.7, 1894.0], [58.8, 1896.0], [58.9, 1899.0], [59.0, 1905.0], [59.1, 1907.0], [59.2, 1910.0], [59.3, 1913.0], [59.4, 1925.0], [59.5, 1930.0], [59.6, 1936.0], [59.7, 1941.0], [59.8, 1942.0], [59.9, 1948.0], [60.0, 1960.0], [60.1, 1965.0], [60.2, 1969.0], [60.3, 1973.0], [60.4, 1984.0], [60.5, 1988.0], [60.6, 1992.0], [60.7, 1995.0], [60.8, 1997.0], [60.9, 2001.0], [61.0, 2003.0], [61.1, 2006.0], [61.2, 2008.0], [61.3, 2013.0], [61.4, 2023.0], [61.5, 2031.0], [61.6, 2037.0], [61.7, 2045.0], [61.8, 2049.0], [61.9, 2056.0], [62.0, 2061.0], [62.1, 2065.0], [62.2, 2074.0], [62.3, 2078.0], [62.4, 2082.0], [62.5, 2090.0], [62.6, 2095.0], [62.7, 2101.0], [62.8, 2104.0], [62.9, 2117.0], [63.0, 2122.0], [63.1, 2126.0], [63.2, 2129.0], [63.3, 2134.0], [63.4, 2135.0], [63.5, 2137.0], [63.6, 2140.0], [63.7, 2146.0], [63.8, 2149.0], [63.9, 2153.0], [64.0, 2157.0], [64.1, 2162.0], [64.2, 2165.0], [64.3, 2169.0], [64.4, 2176.0], [64.5, 2179.0], [64.6, 2182.0], [64.7, 2187.0], [64.8, 2191.0], [64.9, 2200.0], [65.0, 2205.0], [65.1, 2209.0], [65.2, 2213.0], [65.3, 2218.0], [65.4, 2221.0], [65.5, 2228.0], [65.6, 2230.0], [65.7, 2239.0], [65.8, 2243.0], [65.9, 2251.0], [66.0, 2254.0], [66.1, 2263.0], [66.2, 2268.0], [66.3, 2273.0], [66.4, 2282.0], [66.5, 2286.0], [66.6, 2294.0], [66.7, 2303.0], [66.8, 2306.0], [66.9, 2309.0], [67.0, 2311.0], [67.1, 2314.0], [67.2, 2322.0], [67.3, 2332.0], [67.4, 2338.0], [67.5, 2342.0], [67.6, 2344.0], [67.7, 2349.0], [67.8, 2357.0], [67.9, 2365.0], [68.0, 2369.0], [68.1, 2375.0], [68.2, 2383.0], [68.3, 2389.0], [68.4, 2393.0], [68.5, 2401.0], [68.6, 2404.0], [68.7, 2407.0], [68.8, 2416.0], [68.9, 2422.0], [69.0, 2429.0], [69.1, 2432.0], [69.2, 2439.0], [69.3, 2446.0], [69.4, 2450.0], [69.5, 2460.0], [69.6, 2472.0], [69.7, 2475.0], [69.8, 2479.0], [69.9, 2485.0], [70.0, 2498.0], [70.1, 2503.0], [70.2, 2512.0], [70.3, 2519.0], [70.4, 2524.0], [70.5, 2531.0], [70.6, 2543.0], [70.7, 2550.0], [70.8, 2553.0], [70.9, 2557.0], [71.0, 2564.0], [71.1, 2572.0], [71.2, 2578.0], [71.3, 2585.0], [71.4, 2589.0], [71.5, 2597.0], [71.6, 2605.0], [71.7, 2614.0], [71.8, 2620.0], [71.9, 2630.0], [72.0, 2639.0], [72.1, 2644.0], [72.2, 2646.0], [72.3, 2651.0], [72.4, 2662.0], [72.5, 2665.0], [72.6, 2668.0], [72.7, 2673.0], [72.8, 2681.0], [72.9, 2688.0], [73.0, 2700.0], [73.1, 2706.0], [73.2, 2714.0], [73.3, 2720.0], [73.4, 2725.0], [73.5, 2739.0], [73.6, 2746.0], [73.7, 2756.0], [73.8, 2761.0], [73.9, 2767.0], [74.0, 2770.0], [74.1, 2777.0], [74.2, 2785.0], [74.3, 2800.0], [74.4, 2813.0], [74.5, 2817.0], [74.6, 2819.0], [74.7, 2828.0], [74.8, 2837.0], [74.9, 2843.0], [75.0, 2845.0], [75.1, 2854.0], [75.2, 2861.0], [75.3, 2867.0], [75.4, 2881.0], [75.5, 2889.0], [75.6, 2896.0], [75.7, 2908.0], [75.8, 2916.0], [75.9, 2922.0], [76.0, 2930.0], [76.1, 2939.0], [76.2, 2947.0], [76.3, 2952.0], [76.4, 2958.0], [76.5, 2967.0], [76.6, 2973.0], [76.7, 2977.0], [76.8, 2981.0], [76.9, 2986.0], [77.0, 2995.0], [77.1, 3010.0], [77.2, 3021.0], [77.3, 3027.0], [77.4, 3035.0], [77.5, 3042.0], [77.6, 3048.0], [77.7, 3049.0], [77.8, 3054.0], [77.9, 3061.0], [78.0, 3069.0], [78.1, 3077.0], [78.2, 3081.0], [78.3, 3083.0], [78.4, 3087.0], [78.5, 3095.0], [78.6, 3104.0], [78.7, 3116.0], [78.8, 3125.0], [78.9, 3132.0], [79.0, 3140.0], [79.1, 3150.0], [79.2, 3157.0], [79.3, 3166.0], [79.4, 3171.0], [79.5, 3177.0], [79.6, 3182.0], [79.7, 3185.0], [79.8, 3189.0], [79.9, 3193.0], [80.0, 3204.0], [80.1, 3210.0], [80.2, 3214.0], [80.3, 3221.0], [80.4, 3230.0], [80.5, 3247.0], [80.6, 3255.0], [80.7, 3263.0], [80.8, 3271.0], [80.9, 3273.0], [81.0, 3277.0], [81.1, 3286.0], [81.2, 3296.0], [81.3, 3303.0], [81.4, 3307.0], [81.5, 3314.0], [81.6, 3323.0], [81.7, 3331.0], [81.8, 3340.0], [81.9, 3344.0], [82.0, 3352.0], [82.1, 3356.0], [82.2, 3361.0], [82.3, 3374.0], [82.4, 3380.0], [82.5, 3389.0], [82.6, 3398.0], [82.7, 3404.0], [82.8, 3409.0], [82.9, 3418.0], [83.0, 3426.0], [83.1, 3441.0], [83.2, 3447.0], [83.3, 3451.0], [83.4, 3453.0], [83.5, 3460.0], [83.6, 3465.0], [83.7, 3469.0], [83.8, 3476.0], [83.9, 3492.0], [84.0, 3496.0], [84.1, 3504.0], [84.2, 3511.0], [84.3, 3517.0], [84.4, 3528.0], [84.5, 3538.0], [84.6, 3546.0], [84.7, 3553.0], [84.8, 3555.0], [84.9, 3561.0], [85.0, 3574.0], [85.1, 3579.0], [85.2, 3586.0], [85.3, 3589.0], [85.4, 3592.0], [85.5, 3601.0], [85.6, 3603.0], [85.7, 3610.0], [85.8, 3614.0], [85.9, 3624.0], [86.0, 3637.0], [86.1, 3650.0], [86.2, 3670.0], [86.3, 3676.0], [86.4, 3681.0], [86.5, 3689.0], [86.6, 3694.0], [86.7, 3710.0], [86.8, 3716.0], [86.9, 3732.0], [87.0, 3740.0], [87.1, 3749.0], [87.2, 3754.0], [87.3, 3763.0], [87.4, 3774.0], [87.5, 3779.0], [87.6, 3783.0], [87.7, 3792.0], [87.8, 3797.0], [87.9, 3816.0], [88.0, 3824.0], [88.1, 3829.0], [88.2, 3836.0], [88.3, 3845.0], [88.4, 3858.0], [88.5, 3868.0], [88.6, 3880.0], [88.7, 3888.0], [88.8, 3894.0], [88.9, 3906.0], [89.0, 3922.0], [89.1, 3929.0], [89.2, 3934.0], [89.3, 3940.0], [89.4, 3972.0], [89.5, 3990.0], [89.6, 4001.0], [89.7, 4009.0], [89.8, 4023.0], [89.9, 4033.0], [90.0, 4041.0], [90.1, 4055.0], [90.2, 4061.0], [90.3, 4070.0], [90.4, 4079.0], [90.5, 4088.0], [90.6, 4093.0], [90.7, 4106.0], [90.8, 4119.0], [90.9, 4128.0], [91.0, 4138.0], [91.1, 4164.0], [91.2, 4175.0], [91.3, 4181.0], [91.4, 4195.0], [91.5, 4207.0], [91.6, 4231.0], [91.7, 4259.0], [91.8, 4267.0], [91.9, 4274.0], [92.0, 4283.0], [92.1, 4299.0], [92.2, 4314.0], [92.3, 4327.0], [92.4, 4338.0], [92.5, 4367.0], [92.6, 4385.0], [92.7, 4396.0], [92.8, 4402.0], [92.9, 4419.0], [93.0, 4433.0], [93.1, 4456.0], [93.2, 4476.0], [93.3, 4497.0], [93.4, 4551.0], [93.5, 4574.0], [93.6, 4597.0], [93.7, 4618.0], [93.8, 4638.0], [93.9, 4664.0], [94.0, 4697.0], [94.1, 4715.0], [94.2, 4741.0], [94.3, 4781.0], [94.4, 4798.0], [94.5, 4824.0], [94.6, 4836.0], [94.7, 4856.0], [94.8, 4921.0], [94.9, 4956.0], [95.0, 4980.0], [95.1, 5031.0], [95.2, 5080.0], [95.3, 5162.0], [95.4, 5187.0], [95.5, 5235.0], [95.6, 5330.0], [95.7, 5366.0], [95.8, 5376.0], [95.9, 5396.0], [96.0, 5434.0], [96.1, 5465.0], [96.2, 5507.0], [96.3, 5540.0], [96.4, 5632.0], [96.5, 5664.0], [96.6, 5712.0], [96.7, 5767.0], [96.8, 5807.0], [96.9, 5883.0], [97.0, 6012.0], [97.1, 6086.0], [97.2, 6128.0], [97.3, 6216.0], [97.4, 6279.0], [97.5, 6389.0], [97.6, 6414.0], [97.7, 6550.0], [97.8, 6660.0], [97.9, 6753.0], [98.0, 6825.0], [98.1, 6962.0], [98.2, 7088.0], [98.3, 7199.0], [98.4, 7251.0], [98.5, 7301.0], [98.6, 7351.0], [98.7, 7387.0], [98.8, 7448.0], [98.9, 7578.0], [99.0, 7725.0], [99.1, 7944.0], [99.2, 8319.0], [99.3, 8996.0], [99.4, 9351.0], [99.5, 9845.0], [99.6, 10663.0], [99.7, 11846.0], [99.8, 12309.0], [99.9, 12574.0], [100.0, 12730.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 399.0, "series": [{"data": [[100.0, 5.0], [200.0, 2.0], [300.0, 56.0], [400.0, 373.0], [500.0, 99.0], [600.0, 183.0], [700.0, 399.0], [800.0, 255.0], [900.0, 243.0], [1000.0, 227.0], [1100.0, 222.0], [1200.0, 216.0], [1300.0, 171.0], [1400.0, 169.0], [1500.0, 129.0], [1600.0, 147.0], [1700.0, 99.0], [1800.0, 111.0], [1900.0, 103.0], [2000.0, 96.0], [2100.0, 115.0], [2300.0, 97.0], [2200.0, 94.0], [2400.0, 80.0], [2500.0, 82.0], [2600.0, 75.0], [2800.0, 71.0], [2700.0, 68.0], [2900.0, 73.0], [3000.0, 82.0], [3100.0, 73.0], [3200.0, 68.0], [3300.0, 74.0], [3400.0, 75.0], [3500.0, 74.0], [3600.0, 61.0], [3700.0, 62.0], [3800.0, 55.0], [3900.0, 38.0], [4000.0, 58.0], [4300.0, 34.0], [4200.0, 36.0], [4100.0, 40.0], [4500.0, 17.0], [4600.0, 20.0], [4400.0, 29.0], [4800.0, 18.0], [4700.0, 21.0], [4900.0, 16.0], [5000.0, 9.0], [5100.0, 12.0], [5200.0, 6.0], [5300.0, 18.0], [5400.0, 15.0], [5500.0, 8.0], [5600.0, 11.0], [5700.0, 12.0], [5800.0, 7.0], [6100.0, 7.0], [6000.0, 8.0], [5900.0, 4.0], [6300.0, 8.0], [6200.0, 8.0], [6500.0, 4.0], [6400.0, 4.0], [6600.0, 8.0], [6700.0, 6.0], [6800.0, 4.0], [6900.0, 6.0], [7100.0, 3.0], [7000.0, 4.0], [7200.0, 9.0], [7300.0, 13.0], [7400.0, 5.0], [7500.0, 5.0], [7600.0, 2.0], [7700.0, 5.0], [7900.0, 3.0], [7800.0, 1.0], [8100.0, 1.0], [8300.0, 1.0], [8200.0, 2.0], [8700.0, 1.0], [8800.0, 2.0], [8900.0, 3.0], [9200.0, 2.0], [9000.0, 2.0], [9300.0, 2.0], [9400.0, 2.0], [9700.0, 1.0], [9900.0, 1.0], [9800.0, 1.0], [10000.0, 3.0], [10600.0, 1.0], [11200.0, 1.0], [10900.0, 1.0], [11000.0, 1.0], [11600.0, 1.0], [11800.0, 4.0], [12200.0, 2.0], [12300.0, 4.0], [12500.0, 2.0], [12600.0, 3.0], [12700.0, 2.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 12700.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 436.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2652.0, "series": [{"data": [[0.0, 436.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 2184.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 2652.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 11.057142857142855, "minX": 1.60231698E12, "maxY": 12.0, "series": [{"data": [[1.60231758E12, 12.0], [1.60231788E12, 11.057142857142855], [1.60231722E12, 12.0], [1.60231752E12, 12.0], [1.60231782E12, 12.0], [1.60231716E12, 12.0], [1.60231746E12, 12.0], [1.60231776E12, 12.0], [1.6023171E12, 12.0], [1.6023174E12, 12.0], [1.6023177E12, 12.0], [1.60231704E12, 12.0], [1.60231734E12, 12.0], [1.60231764E12, 12.0], [1.60231698E12, 11.805555555555554], [1.60231728E12, 12.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60231788E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 2036.9504856217832, "minX": 1.0, "maxY": 12605.0, "series": [{"data": [[8.0, 12605.0], [4.0, 12348.0], [2.0, 12244.0], [1.0, 12237.0], [9.0, 6511.5], [5.0, 3252.75], [10.0, 6548.5], [11.0, 6528.0], [6.0, 4301.333333333333], [12.0, 2036.9504856217832], [3.0, 12309.0], [7.0, 4321.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[11.978186646434006, 2055.353566009109]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 12.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 614.2666666666667, "minX": 1.60231698E12, "maxY": 453890.1666666667, "series": [{"data": [[1.60231758E12, 181035.7], [1.60231788E12, 40118.45], [1.60231722E12, 297690.48333333334], [1.60231752E12, 140240.65], [1.60231782E12, 368537.06666666665], [1.60231716E12, 335290.73333333334], [1.60231746E12, 240299.68333333332], [1.60231776E12, 216452.21666666667], [1.6023171E12, 421885.36666666664], [1.6023174E12, 389172.81666666665], [1.6023177E12, 453890.1666666667], [1.60231704E12, 235335.95], [1.60231734E12, 109772.1], [1.60231764E12, 436185.38333333336], [1.60231698E12, 79743.78333333334], [1.60231728E12, 346010.85]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60231758E12, 2794.6666666666665], [1.60231788E12, 614.2666666666667], [1.60231722E12, 2076.733333333333], [1.60231752E12, 4892.8], [1.60231782E12, 3262.2833333333333], [1.60231716E12, 2965.3], [1.60231746E12, 2919.866666666667], [1.60231776E12, 2813.75], [1.6023171E12, 1616.7166666666667], [1.6023174E12, 4218.416666666667], [1.6023177E12, 2796.8333333333335], [1.60231704E12, 2795.1833333333334], [1.60231734E12, 3370.9333333333334], [1.60231764E12, 3019.116666666667], [1.60231698E12, 2259.483333333333], [1.60231728E12, 3163.2]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60231788E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 1270.9753521126763, "minX": 1.60231698E12, "maxY": 5241.085714285716, "series": [{"data": [[1.60231758E12, 2290.4294871794887], [1.60231788E12, 5241.085714285716], [1.60231722E12, 2941.823529411764], [1.60231752E12, 1336.6040515653772], [1.60231782E12, 1935.4417344173435], [1.60231716E12, 2266.5384615384614], [1.60231746E12, 2121.8328358208946], [1.60231776E12, 2240.5899053627763], [1.6023171E12, 3662.1881720430106], [1.6023174E12, 1270.9753521126763], [1.6023177E12, 2381.32807570978], [1.60231704E12, 2121.065088757398], [1.60231734E12, 1951.4688346883488], [1.60231764E12, 1900.0662983425414], [1.60231698E12, 1590.9126984126995], [1.60231728E12, 2076.3882681564246]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60231788E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 1270.6883802816897, "minX": 1.60231698E12, "maxY": 5240.857142857144, "series": [{"data": [[1.60231758E12, 2290.166666666668], [1.60231788E12, 5240.857142857144], [1.60231722E12, 2941.2436974789925], [1.60231752E12, 1336.4769797421739], [1.60231782E12, 1934.9864498644974], [1.60231716E12, 2266.0177514792895], [1.60231746E12, 2121.474626865671], [1.60231776E12, 2240.255520504733], [1.6023171E12, 3661.0322580645143], [1.6023174E12, 1270.6883802816897], [1.6023177E12, 2380.611987381702], [1.60231704E12, 2120.7692307692278], [1.60231734E12, 1951.311653116531], [1.60231764E12, 1899.5303867403316], [1.60231698E12, 1590.7023809523812], [1.60231728E12, 2075.9245810055886]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60231788E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.021126760563380285, "minX": 1.60231698E12, "maxY": 0.4642857142857143, "series": [{"data": [[1.60231758E12, 0.038461538461538464], [1.60231788E12, 0.02857142857142857], [1.60231722E12, 0.05882352941176475], [1.60231752E12, 0.023941068139963145], [1.60231782E12, 0.03523035230352305], [1.60231716E12, 0.04142011834319531], [1.60231746E12, 0.03582089552238804], [1.60231776E12, 0.03470031545741325], [1.6023171E12, 0.08064516129032255], [1.6023174E12, 0.021126760563380285], [1.6023177E12, 0.041009463722397485], [1.60231704E12, 0.04733727810650884], [1.60231734E12, 0.035230352303523026], [1.60231764E12, 0.03591160220994475], [1.60231698E12, 0.4642857142857143], [1.60231728E12, 0.03910614525139668]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60231788E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 144.0, "minX": 1.60231698E12, "maxY": 12730.0, "series": [{"data": [[1.60231758E12, 5162.0], [1.60231788E12, 12730.0], [1.60231722E12, 7944.0], [1.60231752E12, 4795.0], [1.60231782E12, 5785.0], [1.60231716E12, 9209.0], [1.60231746E12, 5706.0], [1.60231776E12, 7534.0], [1.6023171E12, 9920.0], [1.6023174E12, 5031.0], [1.6023177E12, 7506.0], [1.60231704E12, 4970.0], [1.60231734E12, 11879.0], [1.60231764E12, 5808.0], [1.60231698E12, 5451.0], [1.60231728E12, 6461.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60231758E12, 449.9019995522499], [1.60231788E12, 1215.0], [1.60231722E12, 418.0], [1.60231752E12, 367.0], [1.60231782E12, 401.6599998235703], [1.60231716E12, 372.0509999191761], [1.60231746E12, 383.04799983978273], [1.60231776E12, 409.0339994692802], [1.6023171E12, 480.371996254921], [1.6023174E12, 503.8469990503788], [1.6023177E12, 419.6539987111092], [1.60231704E12, 558.6629989492893], [1.60231734E12, 420.0], [1.60231764E12, 468.5339998269081], [1.60231698E12, 165.7089989745617], [1.60231728E12, 388.3859994864464]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60231758E12, 451.1974000597], [1.60231788E12, 1215.0], [1.60231722E12, 418.0], [1.60231752E12, 367.38560005187986], [1.60231782E12, 402.3260000705719], [1.60231716E12, 372.35610003232955], [1.60231746E12, 383.65280006408693], [1.60231776E12, 411.1856002426147], [1.6023171E12, 494.50920149803164], [1.6023174E12, 507.4317003798485], [1.6023177E12, 422.0], [1.60231704E12, 562.6293004202843], [1.60231734E12, 420.0], [1.60231764E12, 469.18740006923673], [1.60231698E12, 169.57990041017533], [1.60231728E12, 390.32460020542146]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60231758E12, 450.84099977612493], [1.60231788E12, 1215.0], [1.60231722E12, 418.0], [1.60231752E12, 367.16799993515014], [1.60231782E12, 402.0299999117851], [1.60231716E12, 372.22049995958804], [1.60231746E12, 383.3839999198914], [1.60231776E12, 410.16799969673156], [1.6023171E12, 488.22599812746046], [1.6023174E12, 505.8384995251894], [1.6023177E12, 422.0], [1.60231704E12, 560.8664994746447], [1.60231734E12, 420.0], [1.60231764E12, 468.89699991345407], [1.60231698E12, 167.85949948728086], [1.60231728E12, 389.4629997432232]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60231758E12, 445.0], [1.60231788E12, 1215.0], [1.60231722E12, 416.0], [1.60231752E12, 362.0], [1.60231782E12, 399.0], [1.60231716E12, 368.0], [1.60231746E12, 377.0], [1.60231776E12, 401.0], [1.6023171E12, 423.0], [1.6023174E12, 408.0], [1.6023177E12, 400.0], [1.60231704E12, 554.0], [1.60231734E12, 419.0], [1.60231764E12, 464.0], [1.60231698E12, 144.0], [1.60231728E12, 382.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60231758E12, 2169.0], [1.60231788E12, 3623.5], [1.60231722E12, 2770.5], [1.60231752E12, 1075.0], [1.60231782E12, 1280.0], [1.60231716E12, 2129.5], [1.60231746E12, 1922.0], [1.60231776E12, 1744.0], [1.6023171E12, 3436.0], [1.6023174E12, 848.5], [1.6023177E12, 2002.0], [1.60231704E12, 1910.5], [1.60231734E12, 1211.0], [1.60231764E12, 1377.5], [1.60231698E12, 1320.0], [1.60231728E12, 1556.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60231788E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 409.5, "minX": 1.0, "maxY": 6279.0, "series": [{"data": [[2.0, 4203.5], [3.0, 3519.0], [4.0, 3053.0], [5.0, 2439.0], [6.0, 2172.5], [7.0, 1829.0], [8.0, 1508.5], [9.0, 1385.0], [10.0, 1299.0], [11.0, 1238.0], [12.0, 1249.0], [13.0, 1022.0], [14.0, 963.5], [15.0, 785.0], [1.0, 6279.0], [16.0, 757.0], [17.0, 724.0], [18.0, 800.0], [19.0, 614.0], [20.0, 662.5], [21.0, 505.0], [23.0, 526.0], [25.0, 421.0], [26.0, 437.5], [27.0, 437.0], [28.0, 437.0], [30.0, 409.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 30.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 409.5, "minX": 1.0, "maxY": 6279.0, "series": [{"data": [[2.0, 4202.0], [3.0, 3516.5], [4.0, 3051.5], [5.0, 2437.0], [6.0, 2172.0], [7.0, 1829.0], [8.0, 1508.0], [9.0, 1385.0], [10.0, 1299.0], [11.0, 1238.0], [12.0, 1249.0], [13.0, 1020.0], [14.0, 963.0], [15.0, 785.0], [1.0, 6279.0], [16.0, 756.5], [17.0, 723.0], [18.0, 800.0], [19.0, 613.0], [20.0, 662.0], [21.0, 505.0], [23.0, 526.0], [25.0, 421.0], [26.0, 437.5], [27.0, 437.0], [28.0, 437.0], [30.0, 409.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 30.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.9666666666666667, "minX": 1.60231698E12, "maxY": 9.466666666666667, "series": [{"data": [[1.60231758E12, 5.2], [1.60231788E12, 0.9666666666666667], [1.60231722E12, 3.966666666666667], [1.60231752E12, 9.05], [1.60231782E12, 6.15], [1.60231716E12, 5.633333333333334], [1.60231746E12, 5.583333333333333], [1.60231776E12, 5.283333333333333], [1.6023171E12, 3.1], [1.6023174E12, 9.466666666666667], [1.6023177E12, 5.283333333333333], [1.60231704E12, 5.633333333333334], [1.60231734E12, 6.15], [1.60231764E12, 6.033333333333333], [1.60231698E12, 4.4], [1.60231728E12, 5.966666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60231788E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1.1666666666666667, "minX": 1.60231698E12, "maxY": 9.466666666666667, "series": [{"data": [[1.60231758E12, 5.2], [1.60231788E12, 1.1666666666666667], [1.60231722E12, 3.966666666666667], [1.60231752E12, 9.05], [1.60231782E12, 6.15], [1.60231716E12, 5.633333333333334], [1.60231746E12, 5.583333333333333], [1.60231776E12, 5.283333333333333], [1.6023171E12, 3.1], [1.6023174E12, 9.466666666666667], [1.6023177E12, 5.283333333333333], [1.60231704E12, 5.633333333333334], [1.60231734E12, 6.15], [1.60231764E12, 6.033333333333333], [1.60231698E12, 4.2], [1.60231728E12, 5.966666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60231788E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.1666666666666667, "minX": 1.60231698E12, "maxY": 9.466666666666667, "series": [{"data": [[1.60231758E12, 5.2], [1.60231788E12, 1.1666666666666667], [1.60231722E12, 3.966666666666667], [1.60231752E12, 9.05], [1.60231782E12, 6.15], [1.60231716E12, 5.633333333333334], [1.60231746E12, 5.583333333333333], [1.60231776E12, 5.283333333333333], [1.6023171E12, 3.1], [1.6023174E12, 9.466666666666667], [1.6023177E12, 5.283333333333333], [1.60231704E12, 5.633333333333334], [1.60231734E12, 6.15], [1.60231764E12, 6.033333333333333], [1.60231698E12, 4.2], [1.60231728E12, 5.966666666666667]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60231788E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.1666666666666667, "minX": 1.60231698E12, "maxY": 9.466666666666667, "series": [{"data": [[1.60231758E12, 5.2], [1.60231788E12, 1.1666666666666667], [1.60231722E12, 3.966666666666667], [1.60231752E12, 9.05], [1.60231782E12, 6.15], [1.60231716E12, 5.633333333333334], [1.60231746E12, 5.583333333333333], [1.60231776E12, 5.283333333333333], [1.6023171E12, 3.1], [1.6023174E12, 9.466666666666667], [1.6023177E12, 5.283333333333333], [1.60231704E12, 5.633333333333334], [1.60231734E12, 6.15], [1.60231764E12, 6.033333333333333], [1.60231698E12, 4.2], [1.60231728E12, 5.966666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60231788E12, "title": "Total Transactions Per Second"}},
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

