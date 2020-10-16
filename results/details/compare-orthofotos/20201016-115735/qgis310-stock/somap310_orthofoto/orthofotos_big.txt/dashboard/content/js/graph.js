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
        data: {"result": {"minY": 8.0, "minX": 0.0, "maxY": 14126.0, "series": [{"data": [[0.0, 8.0], [0.1, 9.0], [0.2, 10.0], [0.3, 12.0], [0.4, 12.0], [0.5, 12.0], [0.6, 13.0], [0.7, 14.0], [0.8, 15.0], [0.9, 16.0], [1.0, 17.0], [1.1, 18.0], [1.2, 18.0], [1.3, 19.0], [1.4, 19.0], [1.5, 19.0], [1.6, 20.0], [1.7, 21.0], [1.8, 22.0], [1.9, 23.0], [2.0, 23.0], [2.1, 24.0], [2.2, 24.0], [2.3, 25.0], [2.4, 25.0], [2.5, 26.0], [2.6, 26.0], [2.7, 27.0], [2.8, 27.0], [2.9, 28.0], [3.0, 28.0], [3.1, 29.0], [3.2, 30.0], [3.3, 31.0], [3.4, 33.0], [3.5, 33.0], [3.6, 34.0], [3.7, 34.0], [3.8, 36.0], [3.9, 36.0], [4.0, 38.0], [4.1, 39.0], [4.2, 40.0], [4.3, 42.0], [4.4, 42.0], [4.5, 43.0], [4.6, 44.0], [4.7, 45.0], [4.8, 46.0], [4.9, 47.0], [5.0, 47.0], [5.1, 48.0], [5.2, 49.0], [5.3, 51.0], [5.4, 51.0], [5.5, 52.0], [5.6, 52.0], [5.7, 53.0], [5.8, 53.0], [5.9, 53.0], [6.0, 54.0], [6.1, 56.0], [6.2, 56.0], [6.3, 57.0], [6.4, 59.0], [6.5, 60.0], [6.6, 61.0], [6.7, 62.0], [6.8, 63.0], [6.9, 65.0], [7.0, 65.0], [7.1, 66.0], [7.2, 67.0], [7.3, 68.0], [7.4, 69.0], [7.5, 70.0], [7.6, 71.0], [7.7, 72.0], [7.8, 74.0], [7.9, 75.0], [8.0, 76.0], [8.1, 78.0], [8.2, 79.0], [8.3, 80.0], [8.4, 81.0], [8.5, 83.0], [8.6, 85.0], [8.7, 86.0], [8.8, 87.0], [8.9, 88.0], [9.0, 89.0], [9.1, 90.0], [9.2, 91.0], [9.3, 91.0], [9.4, 92.0], [9.5, 93.0], [9.6, 95.0], [9.7, 96.0], [9.8, 96.0], [9.9, 97.0], [10.0, 98.0], [10.1, 99.0], [10.2, 100.0], [10.3, 100.0], [10.4, 100.0], [10.5, 101.0], [10.6, 102.0], [10.7, 103.0], [10.8, 104.0], [10.9, 104.0], [11.0, 105.0], [11.1, 106.0], [11.2, 107.0], [11.3, 107.0], [11.4, 108.0], [11.5, 109.0], [11.6, 109.0], [11.7, 110.0], [11.8, 111.0], [11.9, 112.0], [12.0, 113.0], [12.1, 114.0], [12.2, 115.0], [12.3, 116.0], [12.4, 117.0], [12.5, 117.0], [12.6, 118.0], [12.7, 119.0], [12.8, 120.0], [12.9, 121.0], [13.0, 122.0], [13.1, 122.0], [13.2, 124.0], [13.3, 124.0], [13.4, 125.0], [13.5, 126.0], [13.6, 127.0], [13.7, 128.0], [13.8, 129.0], [13.9, 130.0], [14.0, 131.0], [14.1, 132.0], [14.2, 133.0], [14.3, 135.0], [14.4, 135.0], [14.5, 138.0], [14.6, 139.0], [14.7, 140.0], [14.8, 141.0], [14.9, 142.0], [15.0, 143.0], [15.1, 143.0], [15.2, 145.0], [15.3, 147.0], [15.4, 148.0], [15.5, 149.0], [15.6, 150.0], [15.7, 152.0], [15.8, 152.0], [15.9, 153.0], [16.0, 155.0], [16.1, 156.0], [16.2, 158.0], [16.3, 158.0], [16.4, 159.0], [16.5, 161.0], [16.6, 161.0], [16.7, 163.0], [16.8, 164.0], [16.9, 166.0], [17.0, 167.0], [17.1, 168.0], [17.2, 169.0], [17.3, 170.0], [17.4, 171.0], [17.5, 172.0], [17.6, 173.0], [17.7, 174.0], [17.8, 175.0], [17.9, 176.0], [18.0, 177.0], [18.1, 177.0], [18.2, 178.0], [18.3, 178.0], [18.4, 180.0], [18.5, 181.0], [18.6, 182.0], [18.7, 183.0], [18.8, 184.0], [18.9, 185.0], [19.0, 186.0], [19.1, 186.0], [19.2, 187.0], [19.3, 188.0], [19.4, 189.0], [19.5, 190.0], [19.6, 191.0], [19.7, 192.0], [19.8, 193.0], [19.9, 194.0], [20.0, 194.0], [20.1, 197.0], [20.2, 199.0], [20.3, 199.0], [20.4, 201.0], [20.5, 202.0], [20.6, 203.0], [20.7, 204.0], [20.8, 205.0], [20.9, 206.0], [21.0, 208.0], [21.1, 209.0], [21.2, 210.0], [21.3, 211.0], [21.4, 212.0], [21.5, 214.0], [21.6, 216.0], [21.7, 218.0], [21.8, 219.0], [21.9, 220.0], [22.0, 221.0], [22.1, 223.0], [22.2, 225.0], [22.3, 226.0], [22.4, 227.0], [22.5, 228.0], [22.6, 229.0], [22.7, 231.0], [22.8, 233.0], [22.9, 234.0], [23.0, 235.0], [23.1, 237.0], [23.2, 239.0], [23.3, 242.0], [23.4, 244.0], [23.5, 244.0], [23.6, 246.0], [23.7, 246.0], [23.8, 248.0], [23.9, 249.0], [24.0, 250.0], [24.1, 252.0], [24.2, 253.0], [24.3, 254.0], [24.4, 256.0], [24.5, 257.0], [24.6, 259.0], [24.7, 260.0], [24.8, 261.0], [24.9, 263.0], [25.0, 265.0], [25.1, 266.0], [25.2, 268.0], [25.3, 270.0], [25.4, 273.0], [25.5, 274.0], [25.6, 276.0], [25.7, 278.0], [25.8, 280.0], [25.9, 282.0], [26.0, 283.0], [26.1, 284.0], [26.2, 285.0], [26.3, 288.0], [26.4, 289.0], [26.5, 291.0], [26.6, 293.0], [26.7, 297.0], [26.8, 298.0], [26.9, 299.0], [27.0, 301.0], [27.1, 302.0], [27.2, 303.0], [27.3, 304.0], [27.4, 308.0], [27.5, 310.0], [27.6, 312.0], [27.7, 314.0], [27.8, 319.0], [27.9, 321.0], [28.0, 322.0], [28.1, 323.0], [28.2, 326.0], [28.3, 329.0], [28.4, 330.0], [28.5, 334.0], [28.6, 337.0], [28.7, 338.0], [28.8, 341.0], [28.9, 342.0], [29.0, 345.0], [29.1, 347.0], [29.2, 350.0], [29.3, 355.0], [29.4, 356.0], [29.5, 361.0], [29.6, 363.0], [29.7, 366.0], [29.8, 367.0], [29.9, 370.0], [30.0, 371.0], [30.1, 373.0], [30.2, 377.0], [30.3, 380.0], [30.4, 382.0], [30.5, 383.0], [30.6, 386.0], [30.7, 388.0], [30.8, 391.0], [30.9, 392.0], [31.0, 395.0], [31.1, 400.0], [31.2, 403.0], [31.3, 404.0], [31.4, 411.0], [31.5, 414.0], [31.6, 416.0], [31.7, 419.0], [31.8, 422.0], [31.9, 431.0], [32.0, 433.0], [32.1, 437.0], [32.2, 440.0], [32.3, 442.0], [32.4, 446.0], [32.5, 450.0], [32.6, 454.0], [32.7, 457.0], [32.8, 459.0], [32.9, 462.0], [33.0, 464.0], [33.1, 468.0], [33.2, 471.0], [33.3, 473.0], [33.4, 476.0], [33.5, 477.0], [33.6, 479.0], [33.7, 484.0], [33.8, 488.0], [33.9, 491.0], [34.0, 492.0], [34.1, 495.0], [34.2, 498.0], [34.3, 502.0], [34.4, 505.0], [34.5, 506.0], [34.6, 508.0], [34.7, 511.0], [34.8, 515.0], [34.9, 516.0], [35.0, 517.0], [35.1, 518.0], [35.2, 521.0], [35.3, 524.0], [35.4, 527.0], [35.5, 529.0], [35.6, 534.0], [35.7, 538.0], [35.8, 541.0], [35.9, 544.0], [36.0, 547.0], [36.1, 549.0], [36.2, 553.0], [36.3, 556.0], [36.4, 557.0], [36.5, 559.0], [36.6, 560.0], [36.7, 562.0], [36.8, 562.0], [36.9, 565.0], [37.0, 565.0], [37.1, 568.0], [37.2, 569.0], [37.3, 571.0], [37.4, 573.0], [37.5, 574.0], [37.6, 575.0], [37.7, 576.0], [37.8, 578.0], [37.9, 580.0], [38.0, 584.0], [38.1, 585.0], [38.2, 587.0], [38.3, 589.0], [38.4, 590.0], [38.5, 592.0], [38.6, 595.0], [38.7, 597.0], [38.8, 600.0], [38.9, 602.0], [39.0, 603.0], [39.1, 605.0], [39.2, 606.0], [39.3, 607.0], [39.4, 608.0], [39.5, 609.0], [39.6, 611.0], [39.7, 613.0], [39.8, 615.0], [39.9, 618.0], [40.0, 620.0], [40.1, 622.0], [40.2, 625.0], [40.3, 627.0], [40.4, 628.0], [40.5, 629.0], [40.6, 631.0], [40.7, 635.0], [40.8, 637.0], [40.9, 641.0], [41.0, 643.0], [41.1, 646.0], [41.2, 650.0], [41.3, 652.0], [41.4, 655.0], [41.5, 656.0], [41.6, 661.0], [41.7, 664.0], [41.8, 668.0], [41.9, 672.0], [42.0, 673.0], [42.1, 675.0], [42.2, 676.0], [42.3, 677.0], [42.4, 680.0], [42.5, 681.0], [42.6, 683.0], [42.7, 688.0], [42.8, 691.0], [42.9, 693.0], [43.0, 694.0], [43.1, 696.0], [43.2, 700.0], [43.3, 703.0], [43.4, 705.0], [43.5, 707.0], [43.6, 709.0], [43.7, 716.0], [43.8, 719.0], [43.9, 721.0], [44.0, 722.0], [44.1, 726.0], [44.2, 729.0], [44.3, 732.0], [44.4, 736.0], [44.5, 741.0], [44.6, 744.0], [44.7, 746.0], [44.8, 751.0], [44.9, 754.0], [45.0, 756.0], [45.1, 758.0], [45.2, 760.0], [45.3, 763.0], [45.4, 766.0], [45.5, 770.0], [45.6, 776.0], [45.7, 779.0], [45.8, 786.0], [45.9, 790.0], [46.0, 795.0], [46.1, 799.0], [46.2, 806.0], [46.3, 809.0], [46.4, 816.0], [46.5, 820.0], [46.6, 827.0], [46.7, 831.0], [46.8, 834.0], [46.9, 839.0], [47.0, 847.0], [47.1, 850.0], [47.2, 855.0], [47.3, 857.0], [47.4, 863.0], [47.5, 866.0], [47.6, 869.0], [47.7, 873.0], [47.8, 879.0], [47.9, 884.0], [48.0, 890.0], [48.1, 893.0], [48.2, 897.0], [48.3, 899.0], [48.4, 904.0], [48.5, 913.0], [48.6, 918.0], [48.7, 923.0], [48.8, 927.0], [48.9, 930.0], [49.0, 937.0], [49.1, 939.0], [49.2, 942.0], [49.3, 947.0], [49.4, 950.0], [49.5, 957.0], [49.6, 960.0], [49.7, 965.0], [49.8, 971.0], [49.9, 973.0], [50.0, 980.0], [50.1, 986.0], [50.2, 991.0], [50.3, 1002.0], [50.4, 1005.0], [50.5, 1010.0], [50.6, 1014.0], [50.7, 1020.0], [50.8, 1025.0], [50.9, 1031.0], [51.0, 1034.0], [51.1, 1045.0], [51.2, 1054.0], [51.3, 1059.0], [51.4, 1071.0], [51.5, 1081.0], [51.6, 1086.0], [51.7, 1095.0], [51.8, 1100.0], [51.9, 1104.0], [52.0, 1108.0], [52.1, 1117.0], [52.2, 1120.0], [52.3, 1135.0], [52.4, 1142.0], [52.5, 1148.0], [52.6, 1159.0], [52.7, 1165.0], [52.8, 1174.0], [52.9, 1182.0], [53.0, 1188.0], [53.1, 1195.0], [53.2, 1202.0], [53.3, 1210.0], [53.4, 1213.0], [53.5, 1223.0], [53.6, 1234.0], [53.7, 1240.0], [53.8, 1246.0], [53.9, 1249.0], [54.0, 1256.0], [54.1, 1261.0], [54.2, 1265.0], [54.3, 1268.0], [54.4, 1270.0], [54.5, 1273.0], [54.6, 1279.0], [54.7, 1283.0], [54.8, 1291.0], [54.9, 1297.0], [55.0, 1301.0], [55.1, 1307.0], [55.2, 1310.0], [55.3, 1316.0], [55.4, 1322.0], [55.5, 1328.0], [55.6, 1331.0], [55.7, 1334.0], [55.8, 1344.0], [55.9, 1349.0], [56.0, 1353.0], [56.1, 1358.0], [56.2, 1363.0], [56.3, 1367.0], [56.4, 1374.0], [56.5, 1384.0], [56.6, 1391.0], [56.7, 1395.0], [56.8, 1400.0], [56.9, 1404.0], [57.0, 1408.0], [57.1, 1411.0], [57.2, 1416.0], [57.3, 1421.0], [57.4, 1431.0], [57.5, 1434.0], [57.6, 1444.0], [57.7, 1452.0], [57.8, 1459.0], [57.9, 1463.0], [58.0, 1468.0], [58.1, 1471.0], [58.2, 1476.0], [58.3, 1480.0], [58.4, 1490.0], [58.5, 1495.0], [58.6, 1500.0], [58.7, 1505.0], [58.8, 1510.0], [58.9, 1520.0], [59.0, 1526.0], [59.1, 1532.0], [59.2, 1538.0], [59.3, 1541.0], [59.4, 1548.0], [59.5, 1553.0], [59.6, 1562.0], [59.7, 1568.0], [59.8, 1572.0], [59.9, 1576.0], [60.0, 1584.0], [60.1, 1595.0], [60.2, 1601.0], [60.3, 1606.0], [60.4, 1610.0], [60.5, 1620.0], [60.6, 1627.0], [60.7, 1631.0], [60.8, 1639.0], [60.9, 1645.0], [61.0, 1655.0], [61.1, 1663.0], [61.2, 1668.0], [61.3, 1674.0], [61.4, 1680.0], [61.5, 1686.0], [61.6, 1690.0], [61.7, 1694.0], [61.8, 1699.0], [61.9, 1706.0], [62.0, 1722.0], [62.1, 1729.0], [62.2, 1740.0], [62.3, 1743.0], [62.4, 1749.0], [62.5, 1760.0], [62.6, 1768.0], [62.7, 1778.0], [62.8, 1791.0], [62.9, 1796.0], [63.0, 1805.0], [63.1, 1813.0], [63.2, 1821.0], [63.3, 1830.0], [63.4, 1840.0], [63.5, 1844.0], [63.6, 1849.0], [63.7, 1862.0], [63.8, 1869.0], [63.9, 1874.0], [64.0, 1878.0], [64.1, 1885.0], [64.2, 1889.0], [64.3, 1896.0], [64.4, 1912.0], [64.5, 1920.0], [64.6, 1923.0], [64.7, 1927.0], [64.8, 1937.0], [64.9, 1945.0], [65.0, 1948.0], [65.1, 1962.0], [65.2, 1970.0], [65.3, 1977.0], [65.4, 1983.0], [65.5, 1986.0], [65.6, 1990.0], [65.7, 1995.0], [65.8, 1998.0], [65.9, 2005.0], [66.0, 2011.0], [66.1, 2014.0], [66.2, 2018.0], [66.3, 2019.0], [66.4, 2024.0], [66.5, 2028.0], [66.6, 2031.0], [66.7, 2036.0], [66.8, 2041.0], [66.9, 2045.0], [67.0, 2051.0], [67.1, 2053.0], [67.2, 2057.0], [67.3, 2062.0], [67.4, 2065.0], [67.5, 2068.0], [67.6, 2070.0], [67.7, 2076.0], [67.8, 2083.0], [67.9, 2086.0], [68.0, 2088.0], [68.1, 2091.0], [68.2, 2092.0], [68.3, 2095.0], [68.4, 2099.0], [68.5, 2104.0], [68.6, 2110.0], [68.7, 2113.0], [68.8, 2117.0], [68.9, 2122.0], [69.0, 2124.0], [69.1, 2127.0], [69.2, 2134.0], [69.3, 2136.0], [69.4, 2138.0], [69.5, 2143.0], [69.6, 2148.0], [69.7, 2151.0], [69.8, 2156.0], [69.9, 2159.0], [70.0, 2161.0], [70.1, 2162.0], [70.2, 2168.0], [70.3, 2175.0], [70.4, 2177.0], [70.5, 2181.0], [70.6, 2186.0], [70.7, 2189.0], [70.8, 2190.0], [70.9, 2195.0], [71.0, 2200.0], [71.1, 2202.0], [71.2, 2208.0], [71.3, 2212.0], [71.4, 2215.0], [71.5, 2216.0], [71.6, 2221.0], [71.7, 2225.0], [71.8, 2229.0], [71.9, 2232.0], [72.0, 2235.0], [72.1, 2240.0], [72.2, 2244.0], [72.3, 2247.0], [72.4, 2248.0], [72.5, 2250.0], [72.6, 2252.0], [72.7, 2257.0], [72.8, 2260.0], [72.9, 2263.0], [73.0, 2267.0], [73.1, 2270.0], [73.2, 2276.0], [73.3, 2282.0], [73.4, 2286.0], [73.5, 2292.0], [73.6, 2295.0], [73.7, 2299.0], [73.8, 2303.0], [73.9, 2312.0], [74.0, 2317.0], [74.1, 2325.0], [74.2, 2332.0], [74.3, 2336.0], [74.4, 2340.0], [74.5, 2345.0], [74.6, 2348.0], [74.7, 2353.0], [74.8, 2355.0], [74.9, 2356.0], [75.0, 2360.0], [75.1, 2363.0], [75.2, 2374.0], [75.3, 2380.0], [75.4, 2384.0], [75.5, 2387.0], [75.6, 2391.0], [75.7, 2401.0], [75.8, 2410.0], [75.9, 2419.0], [76.0, 2422.0], [76.1, 2429.0], [76.2, 2437.0], [76.3, 2441.0], [76.4, 2445.0], [76.5, 2452.0], [76.6, 2455.0], [76.7, 2459.0], [76.8, 2463.0], [76.9, 2471.0], [77.0, 2484.0], [77.1, 2490.0], [77.2, 2496.0], [77.3, 2507.0], [77.4, 2519.0], [77.5, 2525.0], [77.6, 2529.0], [77.7, 2536.0], [77.8, 2542.0], [77.9, 2549.0], [78.0, 2555.0], [78.1, 2562.0], [78.2, 2565.0], [78.3, 2570.0], [78.4, 2577.0], [78.5, 2587.0], [78.6, 2591.0], [78.7, 2600.0], [78.8, 2604.0], [78.9, 2605.0], [79.0, 2611.0], [79.1, 2615.0], [79.2, 2619.0], [79.3, 2625.0], [79.4, 2627.0], [79.5, 2630.0], [79.6, 2640.0], [79.7, 2648.0], [79.8, 2655.0], [79.9, 2662.0], [80.0, 2668.0], [80.1, 2677.0], [80.2, 2680.0], [80.3, 2682.0], [80.4, 2686.0], [80.5, 2691.0], [80.6, 2696.0], [80.7, 2701.0], [80.8, 2707.0], [80.9, 2713.0], [81.0, 2716.0], [81.1, 2725.0], [81.2, 2728.0], [81.3, 2730.0], [81.4, 2733.0], [81.5, 2735.0], [81.6, 2740.0], [81.7, 2749.0], [81.8, 2751.0], [81.9, 2756.0], [82.0, 2762.0], [82.1, 2767.0], [82.2, 2771.0], [82.3, 2776.0], [82.4, 2785.0], [82.5, 2789.0], [82.6, 2794.0], [82.7, 2803.0], [82.8, 2811.0], [82.9, 2818.0], [83.0, 2821.0], [83.1, 2831.0], [83.2, 2836.0], [83.3, 2848.0], [83.4, 2855.0], [83.5, 2864.0], [83.6, 2876.0], [83.7, 2881.0], [83.8, 2888.0], [83.9, 2894.0], [84.0, 2899.0], [84.1, 2903.0], [84.2, 2910.0], [84.3, 2922.0], [84.4, 2927.0], [84.5, 2943.0], [84.6, 2952.0], [84.7, 2956.0], [84.8, 2961.0], [84.9, 2971.0], [85.0, 2977.0], [85.1, 2986.0], [85.2, 2996.0], [85.3, 3007.0], [85.4, 3014.0], [85.5, 3026.0], [85.6, 3030.0], [85.7, 3034.0], [85.8, 3044.0], [85.9, 3061.0], [86.0, 3065.0], [86.1, 3074.0], [86.2, 3080.0], [86.3, 3091.0], [86.4, 3099.0], [86.5, 3110.0], [86.6, 3115.0], [86.7, 3129.0], [86.8, 3145.0], [86.9, 3153.0], [87.0, 3160.0], [87.1, 3171.0], [87.2, 3178.0], [87.3, 3187.0], [87.4, 3202.0], [87.5, 3209.0], [87.6, 3221.0], [87.7, 3233.0], [87.8, 3245.0], [87.9, 3264.0], [88.0, 3282.0], [88.1, 3306.0], [88.2, 3314.0], [88.3, 3326.0], [88.4, 3338.0], [88.5, 3349.0], [88.6, 3362.0], [88.7, 3381.0], [88.8, 3397.0], [88.9, 3414.0], [89.0, 3427.0], [89.1, 3443.0], [89.2, 3465.0], [89.3, 3478.0], [89.4, 3492.0], [89.5, 3502.0], [89.6, 3515.0], [89.7, 3531.0], [89.8, 3545.0], [89.9, 3567.0], [90.0, 3584.0], [90.1, 3610.0], [90.2, 3628.0], [90.3, 3642.0], [90.4, 3655.0], [90.5, 3666.0], [90.6, 3691.0], [90.7, 3708.0], [90.8, 3721.0], [90.9, 3737.0], [91.0, 3746.0], [91.1, 3763.0], [91.2, 3793.0], [91.3, 3801.0], [91.4, 3831.0], [91.5, 3840.0], [91.6, 3850.0], [91.7, 3858.0], [91.8, 3867.0], [91.9, 3885.0], [92.0, 3906.0], [92.1, 3914.0], [92.2, 3930.0], [92.3, 3942.0], [92.4, 3964.0], [92.5, 3978.0], [92.6, 3985.0], [92.7, 4003.0], [92.8, 4020.0], [92.9, 4035.0], [93.0, 4042.0], [93.1, 4049.0], [93.2, 4066.0], [93.3, 4071.0], [93.4, 4091.0], [93.5, 4097.0], [93.6, 4114.0], [93.7, 4139.0], [93.8, 4152.0], [93.9, 4160.0], [94.0, 4167.0], [94.1, 4176.0], [94.2, 4194.0], [94.3, 4198.0], [94.4, 4222.0], [94.5, 4238.0], [94.6, 4249.0], [94.7, 4264.0], [94.8, 4272.0], [94.9, 4289.0], [95.0, 4301.0], [95.1, 4315.0], [95.2, 4352.0], [95.3, 4372.0], [95.4, 4408.0], [95.5, 4418.0], [95.6, 4438.0], [95.7, 4447.0], [95.8, 4475.0], [95.9, 4492.0], [96.0, 4520.0], [96.1, 4554.0], [96.2, 4593.0], [96.3, 4638.0], [96.4, 4676.0], [96.5, 4723.0], [96.6, 4784.0], [96.7, 4840.0], [96.8, 4858.0], [96.9, 4904.0], [97.0, 4936.0], [97.1, 4963.0], [97.2, 5018.0], [97.3, 5071.0], [97.4, 5121.0], [97.5, 5243.0], [97.6, 5324.0], [97.7, 5365.0], [97.8, 5449.0], [97.9, 5561.0], [98.0, 5600.0], [98.1, 5664.0], [98.2, 5708.0], [98.3, 5756.0], [98.4, 5931.0], [98.5, 6008.0], [98.6, 6078.0], [98.7, 6176.0], [98.8, 6301.0], [98.9, 6488.0], [99.0, 6819.0], [99.1, 6982.0], [99.2, 7075.0], [99.3, 7163.0], [99.4, 7340.0], [99.5, 7520.0], [99.6, 7931.0], [99.7, 8114.0], [99.8, 8768.0], [99.9, 9179.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 529.0, "series": [{"data": [[0.0, 529.0], [600.0, 229.0], [700.0, 152.0], [800.0, 113.0], [900.0, 101.0], [1000.0, 80.0], [1100.0, 71.0], [1200.0, 94.0], [1300.0, 94.0], [1400.0, 92.0], [1500.0, 84.0], [1600.0, 86.0], [1700.0, 57.0], [1800.0, 73.0], [1900.0, 79.0], [2000.0, 132.0], [2100.0, 134.0], [2200.0, 142.0], [2300.0, 99.0], [2400.0, 83.0], [2500.0, 76.0], [2600.0, 104.0], [2800.0, 73.0], [2700.0, 100.0], [2900.0, 61.0], [3000.0, 64.0], [3100.0, 50.0], [3200.0, 36.0], [3300.0, 37.0], [3400.0, 35.0], [3500.0, 32.0], [3600.0, 29.0], [3700.0, 32.0], [3800.0, 37.0], [3900.0, 37.0], [4000.0, 42.0], [4200.0, 35.0], [4100.0, 42.0], [4300.0, 21.0], [4400.0, 30.0], [4600.0, 14.0], [4500.0, 12.0], [4700.0, 7.0], [4800.0, 15.0], [5100.0, 5.0], [4900.0, 12.0], [5000.0, 12.0], [5300.0, 11.0], [5200.0, 4.0], [5400.0, 5.0], [5500.0, 8.0], [5600.0, 10.0], [5800.0, 4.0], [5700.0, 6.0], [6000.0, 9.0], [6100.0, 3.0], [5900.0, 5.0], [6200.0, 4.0], [6300.0, 4.0], [6600.0, 2.0], [6400.0, 2.0], [6500.0, 1.0], [6900.0, 3.0], [6800.0, 3.0], [6700.0, 2.0], [7000.0, 6.0], [7100.0, 7.0], [7300.0, 3.0], [7400.0, 2.0], [7200.0, 1.0], [7500.0, 2.0], [7600.0, 1.0], [7900.0, 2.0], [7700.0, 2.0], [7800.0, 1.0], [8000.0, 3.0], [8100.0, 1.0], [8600.0, 1.0], [8200.0, 2.0], [8500.0, 1.0], [8700.0, 2.0], [8900.0, 1.0], [9000.0, 1.0], [8800.0, 1.0], [9100.0, 1.0], [9900.0, 1.0], [10400.0, 1.0], [11900.0, 1.0], [12500.0, 1.0], [14100.0, 1.0], [100.0, 525.0], [200.0, 343.0], [300.0, 217.0], [400.0, 165.0], [500.0, 234.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 14100.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 1262.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2148.0, "series": [{"data": [[0.0, 1780.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1262.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 2148.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.676258992805757, "minX": 1.60284972E12, "maxY": 10.0, "series": [{"data": [[1.60285026E12, 10.0], [1.60284996E12, 10.0], [1.60285002E12, 10.0], [1.60285032E12, 10.0], [1.60285038E12, 10.0], [1.60284972E12, 10.0], [1.60284978E12, 10.0], [1.60285008E12, 10.0], [1.60285014E12, 10.0], [1.60285044E12, 10.0], [1.6028505E12, 9.676258992805757], [1.60284984E12, 10.0], [1.6028499E12, 10.0], [1.6028502E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6028505E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 1515.8131634819547, "minX": 1.0, "maxY": 6791.0, "series": [{"data": [[8.0, 2247.0], [4.0, 4689.0], [2.0, 5243.0], [1.0, 3964.0], [9.0, 2542.0], [10.0, 1515.8131634819547], [5.0, 2570.0], [6.0, 2134.0], [3.0, 6791.0], [7.0, 3183.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.991329479768785, 1519.6129094412347]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 969.0333333333333, "minX": 1.60284972E12, "maxY": 3368341.5833333335, "series": [{"data": [[1.60285026E12, 2570525.5166666666], [1.60284996E12, 2572042.3666666667], [1.60285002E12, 2824578.716666667], [1.60285032E12, 2448770.7], [1.60285038E12, 2683395.9166666665], [1.60284972E12, 1969311.8166666667], [1.60284978E12, 2604681.8666666667], [1.60285008E12, 2783594.4833333334], [1.60285014E12, 3368341.5833333335], [1.60285044E12, 3045972.2333333334], [1.6028505E12, 1109605.7333333334], [1.60284984E12, 2426960.95], [1.6028499E12, 2420543.066666667], [1.6028502E12, 2084710.7833333334]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60285026E12, 2542.65], [1.60284996E12, 2730.7166666666667], [1.60285002E12, 2915.733333333333], [1.60285032E12, 2118.383333333333], [1.60285038E12, 2968.616666666667], [1.60284972E12, 1708.4833333333333], [1.60284978E12, 2623.366666666667], [1.60285008E12, 2952.9666666666667], [1.60285014E12, 3180.0833333333335], [1.60285044E12, 3334.4666666666667], [1.6028505E12, 969.0333333333333], [1.60284984E12, 2985.016666666667], [1.6028499E12, 1536.3], [1.6028502E12, 2577.95]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6028505E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 1223.314928425358, "minX": 1.60284972E12, "maxY": 2545.7672413793102, "series": [{"data": [[1.60285026E12, 1536.167101827676], [1.60284996E12, 1532.6725888324877], [1.60285002E12, 1419.9786223277904], [1.60285032E12, 1953.326923076923], [1.60285038E12, 1353.4802784222738], [1.60284972E12, 1669.026819923371], [1.60284978E12, 1548.5419847328246], [1.60285008E12, 1445.084705882353], [1.60285014E12, 1223.314928425358], [1.60285044E12, 1289.0668058455124], [1.6028505E12, 1802.2805755395682], [1.60284984E12, 1312.706666666666], [1.6028499E12, 2545.7672413793102], [1.6028502E12, 1569.805774278216]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6028505E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 1220.6134969325153, "minX": 1.60284972E12, "maxY": 2540.879310344826, "series": [{"data": [[1.60285026E12, 1533.5352480417737], [1.60284996E12, 1529.3680203045692], [1.60285002E12, 1417.2541567695953], [1.60285032E12, 1950.474358974359], [1.60285038E12, 1350.9141531322514], [1.60284972E12, 1665.4521072796936], [1.60284978E12, 1545.414758269719], [1.60285008E12, 1442.4611764705878], [1.60285014E12, 1220.6134969325153], [1.60285044E12, 1286.6346555323587], [1.6028505E12, 1798.7194244604318], [1.60284984E12, 1310.168888888889], [1.6028499E12, 2540.879310344826], [1.6028502E12, 1567.8162729658793]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6028505E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.60284972E12, "maxY": 0.4176245210727971, "series": [{"data": [[1.60285026E12, 0.03133159268929502], [1.60284996E12, 0.03299492385786801], [1.60285002E12, 0.02612826603325417], [1.60285032E12, 0.02884615384615386], [1.60285038E12, 0.02552204176334108], [1.60284972E12, 0.4176245210727971], [1.60284978E12, 0.027989821882951686], [1.60285008E12, 0.02588235294117648], [1.60285014E12, 0.018404907975460124], [1.60285044E12, 0.02296450939457201], [1.6028505E12, 0.0], [1.60284984E12, 0.026666666666666627], [1.6028499E12, 0.04741379310344831], [1.6028502E12, 0.023622047244094495]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6028505E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 8.0, "minX": 1.60284972E12, "maxY": 14126.0, "series": [{"data": [[1.60285026E12, 11932.0], [1.60284996E12, 9012.0], [1.60285002E12, 9179.0], [1.60285032E12, 7797.0], [1.60285038E12, 8284.0], [1.60284972E12, 10485.0], [1.60284978E12, 5878.0], [1.60285008E12, 6222.0], [1.60285014E12, 7520.0], [1.60285044E12, 7869.0], [1.6028505E12, 6791.0], [1.60284984E12, 14126.0], [1.6028499E12, 12560.0], [1.6028502E12, 7101.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60285026E12, 20.367999725341797], [1.60284996E12, 14.554999905824662], [1.60285002E12, 11.0], [1.60285032E12, 15.816999925374985], [1.60285038E12, 10.775999794006347], [1.60284972E12, 28.715999875068665], [1.60284978E12, 10.637999718189239], [1.60285008E12, 16.0], [1.60285014E12, 19.81999976634979], [1.60285044E12, 14.0], [1.6028505E12, 20.299999833106995], [1.60284984E12, 17.11799978494644], [1.6028499E12, 27.036998833417897], [1.6028502E12, 17.437999908924102]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60285026E12, 21.40480010986328], [1.60284996E12, 14.910500037670136], [1.60285002E12, 11.177800040245057], [1.60285032E12, 16.197400059700012], [1.60285038E12, 11.55360008239746], [1.60284972E12, 29.187600049972534], [1.60284978E12, 11.701800112724303], [1.60285008E12, 16.217400040626526], [1.60285014E12, 20.702000093460082], [1.60285044E12, 14.0], [1.6028505E12, 20.930000066757202], [1.60284984E12, 17.929800086021423], [1.6028499E12, 31.440700466632848], [1.6028502E12, 17.781800036430358]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60285026E12, 20.943999862670896], [1.60284996E12, 14.75249995291233], [1.60285002E12, 11.00899994969368], [1.60285032E12, 15.973499962687493], [1.60285038E12, 11.207999897003173], [1.60284972E12, 28.97799993753433], [1.60284978E12, 11.22899985909462], [1.60285008E12, 16.046999949216843], [1.60285014E12, 20.309999883174896], [1.60285044E12, 14.0], [1.6028505E12, 20.649999916553497], [1.60284984E12, 17.568999892473222], [1.6028499E12, 29.483499416708945], [1.6028502E12, 17.628999954462053]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60285026E12, 18.0], [1.60284996E12, 8.0], [1.60285002E12, 10.0], [1.60285032E12, 14.0], [1.60285038E12, 8.0], [1.60284972E12, 24.0], [1.60284978E12, 8.0], [1.60285008E12, 12.0], [1.60285014E12, 12.0], [1.60285044E12, 10.0], [1.6028505E12, 19.0], [1.60284984E12, 9.0], [1.6028499E12, 19.0], [1.6028502E12, 12.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60285026E12, 834.0], [1.60284996E12, 762.0], [1.60285002E12, 737.0], [1.60285032E12, 2102.5], [1.60285038E12, 661.0], [1.60284972E12, 1272.0], [1.60284978E12, 1475.0], [1.60285008E12, 1011.0], [1.60285014E12, 620.0], [1.60285044E12, 743.0], [1.6028505E12, 1878.0], [1.60284984E12, 626.5], [1.6028499E12, 2453.0], [1.6028502E12, 1398.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6028505E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 159.5, "minX": 1.0, "maxY": 2609.5, "series": [{"data": [[2.0, 2448.0], [37.0, 172.0], [3.0, 2192.0], [4.0, 2191.5], [5.0, 2061.5], [6.0, 1573.0], [7.0, 1168.0], [8.0, 1270.5], [9.0, 734.0], [10.0, 795.5], [11.0, 593.0], [12.0, 612.5], [13.0, 522.0], [14.0, 438.5], [15.0, 313.0], [1.0, 2609.5], [16.0, 388.0], [17.0, 283.0], [18.0, 253.0], [19.0, 203.0], [20.0, 218.0], [21.0, 237.5], [22.0, 224.5], [23.0, 194.0], [24.0, 186.0], [25.0, 159.5], [26.0, 291.5], [27.0, 182.0], [30.0, 234.5], [31.0, 177.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 37.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 157.5, "minX": 1.0, "maxY": 2603.0, "series": [{"data": [[2.0, 2442.5], [37.0, 171.0], [3.0, 2188.0], [4.0, 2185.0], [5.0, 2056.5], [6.0, 1571.0], [7.0, 1165.0], [8.0, 1269.0], [9.0, 731.0], [10.0, 793.5], [11.0, 589.0], [12.0, 609.0], [13.0, 518.0], [14.0, 436.5], [15.0, 309.0], [1.0, 2603.0], [16.0, 386.0], [17.0, 280.0], [18.0, 250.5], [19.0, 203.0], [20.0, 215.5], [21.0, 235.0], [22.0, 223.0], [23.0, 193.0], [24.0, 184.0], [25.0, 157.5], [26.0, 286.5], [27.0, 182.0], [30.0, 232.5], [31.0, 172.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 37.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 2.15, "minX": 1.60284972E12, "maxY": 8.15, "series": [{"data": [[1.60285026E12, 6.383333333333334], [1.60284996E12, 6.566666666666666], [1.60285002E12, 7.016666666666667], [1.60285032E12, 5.2], [1.60285038E12, 7.183333333333334], [1.60284972E12, 4.516666666666667], [1.60284978E12, 6.55], [1.60285008E12, 7.083333333333333], [1.60285014E12, 8.15], [1.60285044E12, 7.983333333333333], [1.6028505E12, 2.15], [1.60284984E12, 7.5], [1.6028499E12, 3.8666666666666667], [1.6028502E12, 6.35]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6028505E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 2.316666666666667, "minX": 1.60284972E12, "maxY": 8.15, "series": [{"data": [[1.60285026E12, 6.383333333333334], [1.60284996E12, 6.566666666666666], [1.60285002E12, 7.016666666666667], [1.60285032E12, 5.2], [1.60285038E12, 7.183333333333334], [1.60284972E12, 4.35], [1.60284978E12, 6.55], [1.60285008E12, 7.083333333333333], [1.60285014E12, 8.15], [1.60285044E12, 7.983333333333333], [1.6028505E12, 2.316666666666667], [1.60284984E12, 7.5], [1.6028499E12, 3.8666666666666667], [1.6028502E12, 6.35]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6028505E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 2.316666666666667, "minX": 1.60284972E12, "maxY": 8.15, "series": [{"data": [[1.60285026E12, 6.383333333333334], [1.60284996E12, 6.566666666666666], [1.60285002E12, 7.016666666666667], [1.60285032E12, 5.2], [1.60285038E12, 7.183333333333334], [1.60284972E12, 4.35], [1.60284978E12, 6.55], [1.60285008E12, 7.083333333333333], [1.60285014E12, 8.15], [1.60285044E12, 7.983333333333333], [1.6028505E12, 2.316666666666667], [1.60284984E12, 7.5], [1.6028499E12, 3.8666666666666667], [1.6028502E12, 6.35]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6028505E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 2.316666666666667, "minX": 1.60284972E12, "maxY": 8.15, "series": [{"data": [[1.60285026E12, 6.383333333333334], [1.60284996E12, 6.566666666666666], [1.60285002E12, 7.016666666666667], [1.60285032E12, 5.2], [1.60285038E12, 7.183333333333334], [1.60284972E12, 4.35], [1.60284978E12, 6.55], [1.60285008E12, 7.083333333333333], [1.60285014E12, 8.15], [1.60285044E12, 7.983333333333333], [1.6028505E12, 2.316666666666667], [1.60284984E12, 7.5], [1.6028499E12, 3.8666666666666667], [1.6028502E12, 6.35]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6028505E12, "title": "Total Transactions Per Second"}},
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

