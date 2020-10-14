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
        data: {"result": {"minY": 6.0, "minX": 0.0, "maxY": 13626.0, "series": [{"data": [[0.0, 6.0], [0.1, 10.0], [0.2, 12.0], [0.3, 14.0], [0.4, 14.0], [0.5, 15.0], [0.6, 15.0], [0.7, 16.0], [0.8, 16.0], [0.9, 17.0], [1.0, 17.0], [1.1, 17.0], [1.2, 18.0], [1.3, 18.0], [1.4, 19.0], [1.5, 20.0], [1.6, 21.0], [1.7, 21.0], [1.8, 21.0], [1.9, 22.0], [2.0, 23.0], [2.1, 23.0], [2.2, 24.0], [2.3, 24.0], [2.4, 25.0], [2.5, 25.0], [2.6, 26.0], [2.7, 26.0], [2.8, 27.0], [2.9, 27.0], [3.0, 28.0], [3.1, 29.0], [3.2, 30.0], [3.3, 30.0], [3.4, 31.0], [3.5, 32.0], [3.6, 34.0], [3.7, 35.0], [3.8, 35.0], [3.9, 37.0], [4.0, 38.0], [4.1, 39.0], [4.2, 40.0], [4.3, 41.0], [4.4, 42.0], [4.5, 42.0], [4.6, 43.0], [4.7, 43.0], [4.8, 45.0], [4.9, 46.0], [5.0, 46.0], [5.1, 47.0], [5.2, 49.0], [5.3, 50.0], [5.4, 51.0], [5.5, 52.0], [5.6, 52.0], [5.7, 53.0], [5.8, 54.0], [5.9, 54.0], [6.0, 55.0], [6.1, 56.0], [6.2, 58.0], [6.3, 59.0], [6.4, 59.0], [6.5, 60.0], [6.6, 61.0], [6.7, 61.0], [6.8, 62.0], [6.9, 63.0], [7.0, 64.0], [7.1, 65.0], [7.2, 66.0], [7.3, 67.0], [7.4, 67.0], [7.5, 68.0], [7.6, 69.0], [7.7, 70.0], [7.8, 71.0], [7.9, 73.0], [8.0, 74.0], [8.1, 75.0], [8.2, 77.0], [8.3, 79.0], [8.4, 81.0], [8.5, 83.0], [8.6, 84.0], [8.7, 85.0], [8.8, 86.0], [8.9, 86.0], [9.0, 88.0], [9.1, 89.0], [9.2, 89.0], [9.3, 90.0], [9.4, 91.0], [9.5, 91.0], [9.6, 92.0], [9.7, 93.0], [9.8, 94.0], [9.9, 95.0], [10.0, 96.0], [10.1, 97.0], [10.2, 97.0], [10.3, 98.0], [10.4, 99.0], [10.5, 99.0], [10.6, 100.0], [10.7, 101.0], [10.8, 101.0], [10.9, 102.0], [11.0, 102.0], [11.1, 103.0], [11.2, 104.0], [11.3, 106.0], [11.4, 107.0], [11.5, 107.0], [11.6, 108.0], [11.7, 109.0], [11.8, 109.0], [11.9, 110.0], [12.0, 111.0], [12.1, 111.0], [12.2, 112.0], [12.3, 113.0], [12.4, 114.0], [12.5, 115.0], [12.6, 115.0], [12.7, 116.0], [12.8, 117.0], [12.9, 117.0], [13.0, 118.0], [13.1, 119.0], [13.2, 120.0], [13.3, 121.0], [13.4, 122.0], [13.5, 122.0], [13.6, 123.0], [13.7, 124.0], [13.8, 125.0], [13.9, 126.0], [14.0, 127.0], [14.1, 128.0], [14.2, 129.0], [14.3, 131.0], [14.4, 132.0], [14.5, 133.0], [14.6, 134.0], [14.7, 134.0], [14.8, 135.0], [14.9, 136.0], [15.0, 136.0], [15.1, 137.0], [15.2, 138.0], [15.3, 140.0], [15.4, 141.0], [15.5, 142.0], [15.6, 143.0], [15.7, 144.0], [15.8, 145.0], [15.9, 146.0], [16.0, 147.0], [16.1, 148.0], [16.2, 149.0], [16.3, 150.0], [16.4, 151.0], [16.5, 152.0], [16.6, 154.0], [16.7, 154.0], [16.8, 155.0], [16.9, 157.0], [17.0, 158.0], [17.1, 159.0], [17.2, 159.0], [17.3, 160.0], [17.4, 162.0], [17.5, 163.0], [17.6, 164.0], [17.7, 165.0], [17.8, 167.0], [17.9, 168.0], [18.0, 169.0], [18.1, 170.0], [18.2, 172.0], [18.3, 173.0], [18.4, 173.0], [18.5, 175.0], [18.6, 176.0], [18.7, 177.0], [18.8, 178.0], [18.9, 180.0], [19.0, 181.0], [19.1, 182.0], [19.2, 183.0], [19.3, 183.0], [19.4, 184.0], [19.5, 185.0], [19.6, 186.0], [19.7, 187.0], [19.8, 187.0], [19.9, 189.0], [20.0, 190.0], [20.1, 191.0], [20.2, 192.0], [20.3, 193.0], [20.4, 193.0], [20.5, 194.0], [20.6, 195.0], [20.7, 196.0], [20.8, 197.0], [20.9, 198.0], [21.0, 199.0], [21.1, 200.0], [21.2, 201.0], [21.3, 201.0], [21.4, 204.0], [21.5, 205.0], [21.6, 206.0], [21.7, 208.0], [21.8, 209.0], [21.9, 210.0], [22.0, 211.0], [22.1, 212.0], [22.2, 212.0], [22.3, 214.0], [22.4, 215.0], [22.5, 216.0], [22.6, 216.0], [22.7, 218.0], [22.8, 218.0], [22.9, 219.0], [23.0, 220.0], [23.1, 221.0], [23.2, 223.0], [23.3, 225.0], [23.4, 226.0], [23.5, 227.0], [23.6, 228.0], [23.7, 230.0], [23.8, 231.0], [23.9, 234.0], [24.0, 234.0], [24.1, 236.0], [24.2, 237.0], [24.3, 238.0], [24.4, 239.0], [24.5, 241.0], [24.6, 243.0], [24.7, 247.0], [24.8, 249.0], [24.9, 250.0], [25.0, 252.0], [25.1, 253.0], [25.2, 254.0], [25.3, 255.0], [25.4, 256.0], [25.5, 257.0], [25.6, 258.0], [25.7, 259.0], [25.8, 261.0], [25.9, 262.0], [26.0, 263.0], [26.1, 266.0], [26.2, 267.0], [26.3, 270.0], [26.4, 274.0], [26.5, 274.0], [26.6, 275.0], [26.7, 276.0], [26.8, 277.0], [26.9, 279.0], [27.0, 281.0], [27.1, 282.0], [27.2, 283.0], [27.3, 285.0], [27.4, 288.0], [27.5, 290.0], [27.6, 291.0], [27.7, 294.0], [27.8, 295.0], [27.9, 298.0], [28.0, 299.0], [28.1, 301.0], [28.2, 303.0], [28.3, 305.0], [28.4, 308.0], [28.5, 309.0], [28.6, 310.0], [28.7, 314.0], [28.8, 316.0], [28.9, 319.0], [29.0, 321.0], [29.1, 322.0], [29.2, 324.0], [29.3, 327.0], [29.4, 330.0], [29.5, 334.0], [29.6, 336.0], [29.7, 342.0], [29.8, 344.0], [29.9, 346.0], [30.0, 349.0], [30.1, 353.0], [30.2, 355.0], [30.3, 358.0], [30.4, 362.0], [30.5, 365.0], [30.6, 368.0], [30.7, 370.0], [30.8, 373.0], [30.9, 375.0], [31.0, 377.0], [31.1, 379.0], [31.2, 384.0], [31.3, 389.0], [31.4, 391.0], [31.5, 396.0], [31.6, 401.0], [31.7, 403.0], [31.8, 408.0], [31.9, 409.0], [32.0, 413.0], [32.1, 416.0], [32.2, 421.0], [32.3, 427.0], [32.4, 432.0], [32.5, 435.0], [32.6, 439.0], [32.7, 442.0], [32.8, 444.0], [32.9, 445.0], [33.0, 447.0], [33.1, 450.0], [33.2, 454.0], [33.3, 458.0], [33.4, 463.0], [33.5, 468.0], [33.6, 470.0], [33.7, 472.0], [33.8, 474.0], [33.9, 476.0], [34.0, 480.0], [34.1, 485.0], [34.2, 489.0], [34.3, 491.0], [34.4, 495.0], [34.5, 497.0], [34.6, 499.0], [34.7, 500.0], [34.8, 502.0], [34.9, 503.0], [35.0, 504.0], [35.1, 506.0], [35.2, 509.0], [35.3, 512.0], [35.4, 515.0], [35.5, 517.0], [35.6, 519.0], [35.7, 521.0], [35.8, 523.0], [35.9, 524.0], [36.0, 525.0], [36.1, 529.0], [36.2, 531.0], [36.3, 532.0], [36.4, 534.0], [36.5, 537.0], [36.6, 539.0], [36.7, 542.0], [36.8, 544.0], [36.9, 546.0], [37.0, 548.0], [37.1, 549.0], [37.2, 551.0], [37.3, 552.0], [37.4, 554.0], [37.5, 555.0], [37.6, 557.0], [37.7, 557.0], [37.8, 559.0], [37.9, 561.0], [38.0, 563.0], [38.1, 565.0], [38.2, 567.0], [38.3, 568.0], [38.4, 570.0], [38.5, 571.0], [38.6, 573.0], [38.7, 575.0], [38.8, 577.0], [38.9, 579.0], [39.0, 581.0], [39.1, 584.0], [39.2, 586.0], [39.3, 587.0], [39.4, 589.0], [39.5, 591.0], [39.6, 593.0], [39.7, 596.0], [39.8, 598.0], [39.9, 599.0], [40.0, 602.0], [40.1, 605.0], [40.2, 607.0], [40.3, 609.0], [40.4, 613.0], [40.5, 615.0], [40.6, 617.0], [40.7, 619.0], [40.8, 621.0], [40.9, 623.0], [41.0, 626.0], [41.1, 627.0], [41.2, 631.0], [41.3, 633.0], [41.4, 634.0], [41.5, 637.0], [41.6, 639.0], [41.7, 641.0], [41.8, 644.0], [41.9, 648.0], [42.0, 650.0], [42.1, 652.0], [42.2, 653.0], [42.3, 654.0], [42.4, 657.0], [42.5, 658.0], [42.6, 659.0], [42.7, 662.0], [42.8, 665.0], [42.9, 668.0], [43.0, 670.0], [43.1, 676.0], [43.2, 678.0], [43.3, 683.0], [43.4, 687.0], [43.5, 693.0], [43.6, 694.0], [43.7, 696.0], [43.8, 698.0], [43.9, 702.0], [44.0, 703.0], [44.1, 706.0], [44.2, 707.0], [44.3, 709.0], [44.4, 711.0], [44.5, 712.0], [44.6, 717.0], [44.7, 720.0], [44.8, 727.0], [44.9, 730.0], [45.0, 734.0], [45.1, 737.0], [45.2, 738.0], [45.3, 743.0], [45.4, 751.0], [45.5, 754.0], [45.6, 757.0], [45.7, 758.0], [45.8, 766.0], [45.9, 769.0], [46.0, 771.0], [46.1, 776.0], [46.2, 779.0], [46.3, 782.0], [46.4, 789.0], [46.5, 794.0], [46.6, 797.0], [46.7, 798.0], [46.8, 803.0], [46.9, 808.0], [47.0, 812.0], [47.1, 816.0], [47.2, 822.0], [47.3, 825.0], [47.4, 829.0], [47.5, 832.0], [47.6, 833.0], [47.7, 838.0], [47.8, 840.0], [47.9, 843.0], [48.0, 848.0], [48.1, 851.0], [48.2, 858.0], [48.3, 860.0], [48.4, 867.0], [48.5, 871.0], [48.6, 876.0], [48.7, 879.0], [48.8, 882.0], [48.9, 885.0], [49.0, 891.0], [49.1, 897.0], [49.2, 902.0], [49.3, 904.0], [49.4, 907.0], [49.5, 914.0], [49.6, 918.0], [49.7, 921.0], [49.8, 926.0], [49.9, 929.0], [50.0, 932.0], [50.1, 936.0], [50.2, 940.0], [50.3, 944.0], [50.4, 948.0], [50.5, 954.0], [50.6, 957.0], [50.7, 961.0], [50.8, 965.0], [50.9, 970.0], [51.0, 979.0], [51.1, 984.0], [51.2, 995.0], [51.3, 998.0], [51.4, 1001.0], [51.5, 1012.0], [51.6, 1023.0], [51.7, 1026.0], [51.8, 1028.0], [51.9, 1041.0], [52.0, 1047.0], [52.1, 1051.0], [52.2, 1056.0], [52.3, 1062.0], [52.4, 1067.0], [52.5, 1074.0], [52.6, 1082.0], [52.7, 1096.0], [52.8, 1107.0], [52.9, 1119.0], [53.0, 1122.0], [53.1, 1134.0], [53.2, 1141.0], [53.3, 1146.0], [53.4, 1152.0], [53.5, 1156.0], [53.6, 1160.0], [53.7, 1173.0], [53.8, 1179.0], [53.9, 1188.0], [54.0, 1203.0], [54.1, 1206.0], [54.2, 1220.0], [54.3, 1227.0], [54.4, 1229.0], [54.5, 1236.0], [54.6, 1242.0], [54.7, 1245.0], [54.8, 1253.0], [54.9, 1256.0], [55.0, 1263.0], [55.1, 1269.0], [55.2, 1273.0], [55.3, 1278.0], [55.4, 1282.0], [55.5, 1287.0], [55.6, 1290.0], [55.7, 1293.0], [55.8, 1299.0], [55.9, 1304.0], [56.0, 1309.0], [56.1, 1310.0], [56.2, 1316.0], [56.3, 1320.0], [56.4, 1328.0], [56.5, 1334.0], [56.6, 1341.0], [56.7, 1345.0], [56.8, 1352.0], [56.9, 1356.0], [57.0, 1365.0], [57.1, 1367.0], [57.2, 1371.0], [57.3, 1377.0], [57.4, 1383.0], [57.5, 1392.0], [57.6, 1400.0], [57.7, 1409.0], [57.8, 1414.0], [57.9, 1418.0], [58.0, 1428.0], [58.1, 1435.0], [58.2, 1440.0], [58.3, 1446.0], [58.4, 1451.0], [58.5, 1455.0], [58.6, 1461.0], [58.7, 1468.0], [58.8, 1475.0], [58.9, 1482.0], [59.0, 1492.0], [59.1, 1496.0], [59.2, 1505.0], [59.3, 1511.0], [59.4, 1516.0], [59.5, 1523.0], [59.6, 1526.0], [59.7, 1535.0], [59.8, 1540.0], [59.9, 1546.0], [60.0, 1554.0], [60.1, 1562.0], [60.2, 1568.0], [60.3, 1573.0], [60.4, 1582.0], [60.5, 1587.0], [60.6, 1596.0], [60.7, 1602.0], [60.8, 1614.0], [60.9, 1621.0], [61.0, 1632.0], [61.1, 1639.0], [61.2, 1651.0], [61.3, 1655.0], [61.4, 1657.0], [61.5, 1660.0], [61.6, 1666.0], [61.7, 1669.0], [61.8, 1675.0], [61.9, 1678.0], [62.0, 1681.0], [62.1, 1686.0], [62.2, 1689.0], [62.3, 1695.0], [62.4, 1699.0], [62.5, 1704.0], [62.6, 1710.0], [62.7, 1718.0], [62.8, 1723.0], [62.9, 1730.0], [63.0, 1733.0], [63.1, 1743.0], [63.2, 1757.0], [63.3, 1766.0], [63.4, 1769.0], [63.5, 1777.0], [63.6, 1782.0], [63.7, 1785.0], [63.8, 1796.0], [63.9, 1801.0], [64.0, 1811.0], [64.1, 1818.0], [64.2, 1822.0], [64.3, 1830.0], [64.4, 1833.0], [64.5, 1839.0], [64.6, 1847.0], [64.7, 1856.0], [64.8, 1862.0], [64.9, 1865.0], [65.0, 1869.0], [65.1, 1878.0], [65.2, 1887.0], [65.3, 1905.0], [65.4, 1913.0], [65.5, 1918.0], [65.6, 1922.0], [65.7, 1926.0], [65.8, 1930.0], [65.9, 1933.0], [66.0, 1937.0], [66.1, 1945.0], [66.2, 1955.0], [66.3, 1961.0], [66.4, 1967.0], [66.5, 1975.0], [66.6, 1979.0], [66.7, 1981.0], [66.8, 1985.0], [66.9, 1992.0], [67.0, 1997.0], [67.1, 2004.0], [67.2, 2009.0], [67.3, 2013.0], [67.4, 2014.0], [67.5, 2016.0], [67.6, 2018.0], [67.7, 2021.0], [67.8, 2023.0], [67.9, 2029.0], [68.0, 2033.0], [68.1, 2035.0], [68.2, 2037.0], [68.3, 2040.0], [68.4, 2041.0], [68.5, 2044.0], [68.6, 2049.0], [68.7, 2052.0], [68.8, 2056.0], [68.9, 2059.0], [69.0, 2062.0], [69.1, 2066.0], [69.2, 2068.0], [69.3, 2071.0], [69.4, 2076.0], [69.5, 2078.0], [69.6, 2081.0], [69.7, 2084.0], [69.8, 2087.0], [69.9, 2090.0], [70.0, 2095.0], [70.1, 2097.0], [70.2, 2100.0], [70.3, 2104.0], [70.4, 2105.0], [70.5, 2107.0], [70.6, 2111.0], [70.7, 2114.0], [70.8, 2123.0], [70.9, 2130.0], [71.0, 2133.0], [71.1, 2137.0], [71.2, 2141.0], [71.3, 2146.0], [71.4, 2150.0], [71.5, 2153.0], [71.6, 2159.0], [71.7, 2162.0], [71.8, 2165.0], [71.9, 2169.0], [72.0, 2171.0], [72.1, 2175.0], [72.2, 2177.0], [72.3, 2180.0], [72.4, 2181.0], [72.5, 2184.0], [72.6, 2188.0], [72.7, 2191.0], [72.8, 2198.0], [72.9, 2201.0], [73.0, 2204.0], [73.1, 2206.0], [73.2, 2209.0], [73.3, 2212.0], [73.4, 2215.0], [73.5, 2223.0], [73.6, 2224.0], [73.7, 2231.0], [73.8, 2233.0], [73.9, 2239.0], [74.0, 2243.0], [74.1, 2247.0], [74.2, 2255.0], [74.3, 2256.0], [74.4, 2259.0], [74.5, 2263.0], [74.6, 2270.0], [74.7, 2274.0], [74.8, 2278.0], [74.9, 2281.0], [75.0, 2285.0], [75.1, 2293.0], [75.2, 2296.0], [75.3, 2305.0], [75.4, 2309.0], [75.5, 2315.0], [75.6, 2324.0], [75.7, 2331.0], [75.8, 2339.0], [75.9, 2346.0], [76.0, 2350.0], [76.1, 2355.0], [76.2, 2364.0], [76.3, 2374.0], [76.4, 2382.0], [76.5, 2387.0], [76.6, 2398.0], [76.7, 2408.0], [76.8, 2414.0], [76.9, 2425.0], [77.0, 2429.0], [77.1, 2435.0], [77.2, 2441.0], [77.3, 2449.0], [77.4, 2460.0], [77.5, 2470.0], [77.6, 2478.0], [77.7, 2485.0], [77.8, 2487.0], [77.9, 2493.0], [78.0, 2499.0], [78.1, 2503.0], [78.2, 2513.0], [78.3, 2518.0], [78.4, 2522.0], [78.5, 2533.0], [78.6, 2540.0], [78.7, 2543.0], [78.8, 2546.0], [78.9, 2549.0], [79.0, 2557.0], [79.1, 2561.0], [79.2, 2567.0], [79.3, 2572.0], [79.4, 2579.0], [79.5, 2581.0], [79.6, 2584.0], [79.7, 2592.0], [79.8, 2594.0], [79.9, 2601.0], [80.0, 2609.0], [80.1, 2618.0], [80.2, 2620.0], [80.3, 2624.0], [80.4, 2630.0], [80.5, 2635.0], [80.6, 2636.0], [80.7, 2640.0], [80.8, 2648.0], [80.9, 2653.0], [81.0, 2655.0], [81.1, 2657.0], [81.2, 2662.0], [81.3, 2668.0], [81.4, 2670.0], [81.5, 2674.0], [81.6, 2677.0], [81.7, 2682.0], [81.8, 2686.0], [81.9, 2693.0], [82.0, 2695.0], [82.1, 2705.0], [82.2, 2713.0], [82.3, 2719.0], [82.4, 2728.0], [82.5, 2733.0], [82.6, 2742.0], [82.7, 2748.0], [82.8, 2753.0], [82.9, 2758.0], [83.0, 2767.0], [83.1, 2771.0], [83.2, 2777.0], [83.3, 2782.0], [83.4, 2788.0], [83.5, 2793.0], [83.6, 2795.0], [83.7, 2802.0], [83.8, 2808.0], [83.9, 2814.0], [84.0, 2820.0], [84.1, 2824.0], [84.2, 2828.0], [84.3, 2834.0], [84.4, 2840.0], [84.5, 2847.0], [84.6, 2852.0], [84.7, 2858.0], [84.8, 2864.0], [84.9, 2869.0], [85.0, 2878.0], [85.1, 2882.0], [85.2, 2890.0], [85.3, 2894.0], [85.4, 2900.0], [85.5, 2905.0], [85.6, 2919.0], [85.7, 2924.0], [85.8, 2934.0], [85.9, 2953.0], [86.0, 2959.0], [86.1, 2970.0], [86.2, 2975.0], [86.3, 2983.0], [86.4, 2996.0], [86.5, 3004.0], [86.6, 3010.0], [86.7, 3026.0], [86.8, 3035.0], [86.9, 3049.0], [87.0, 3060.0], [87.1, 3070.0], [87.2, 3083.0], [87.3, 3093.0], [87.4, 3109.0], [87.5, 3121.0], [87.6, 3136.0], [87.7, 3145.0], [87.8, 3151.0], [87.9, 3161.0], [88.0, 3167.0], [88.1, 3181.0], [88.2, 3186.0], [88.3, 3201.0], [88.4, 3213.0], [88.5, 3255.0], [88.6, 3263.0], [88.7, 3278.0], [88.8, 3307.0], [88.9, 3322.0], [89.0, 3342.0], [89.1, 3354.0], [89.2, 3378.0], [89.3, 3386.0], [89.4, 3390.0], [89.5, 3411.0], [89.6, 3419.0], [89.7, 3426.0], [89.8, 3437.0], [89.9, 3460.0], [90.0, 3471.0], [90.1, 3478.0], [90.2, 3494.0], [90.3, 3505.0], [90.4, 3525.0], [90.5, 3542.0], [90.6, 3551.0], [90.7, 3564.0], [90.8, 3591.0], [90.9, 3602.0], [91.0, 3634.0], [91.1, 3650.0], [91.2, 3665.0], [91.3, 3687.0], [91.4, 3695.0], [91.5, 3710.0], [91.6, 3743.0], [91.7, 3755.0], [91.8, 3782.0], [91.9, 3796.0], [92.0, 3804.0], [92.1, 3814.0], [92.2, 3839.0], [92.3, 3851.0], [92.4, 3867.0], [92.5, 3873.0], [92.6, 3894.0], [92.7, 3912.0], [92.8, 3926.0], [92.9, 3934.0], [93.0, 3943.0], [93.1, 3958.0], [93.2, 3975.0], [93.3, 3988.0], [93.4, 3995.0], [93.5, 4008.0], [93.6, 4021.0], [93.7, 4032.0], [93.8, 4039.0], [93.9, 4054.0], [94.0, 4066.0], [94.1, 4076.0], [94.2, 4085.0], [94.3, 4097.0], [94.4, 4109.0], [94.5, 4115.0], [94.6, 4125.0], [94.7, 4132.0], [94.8, 4151.0], [94.9, 4176.0], [95.0, 4185.0], [95.1, 4191.0], [95.2, 4204.0], [95.3, 4225.0], [95.4, 4242.0], [95.5, 4257.0], [95.6, 4277.0], [95.7, 4294.0], [95.8, 4337.0], [95.9, 4357.0], [96.0, 4384.0], [96.1, 4406.0], [96.2, 4428.0], [96.3, 4452.0], [96.4, 4482.0], [96.5, 4502.0], [96.6, 4521.0], [96.7, 4582.0], [96.8, 4628.0], [96.9, 4695.0], [97.0, 4794.0], [97.1, 4822.0], [97.2, 4892.0], [97.3, 4964.0], [97.4, 4993.0], [97.5, 5039.0], [97.6, 5098.0], [97.7, 5142.0], [97.8, 5194.0], [97.9, 5283.0], [98.0, 5351.0], [98.1, 5382.0], [98.2, 5403.0], [98.3, 5485.0], [98.4, 5560.0], [98.5, 5707.0], [98.6, 5849.0], [98.7, 5969.0], [98.8, 6173.0], [98.9, 6241.0], [99.0, 6465.0], [99.1, 6751.0], [99.2, 6835.0], [99.3, 7004.0], [99.4, 7114.0], [99.5, 7301.0], [99.6, 7576.0], [99.7, 8279.0], [99.8, 8559.0], [99.9, 10964.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 545.0, "series": [{"data": [[0.0, 545.0], [600.0, 204.0], [700.0, 148.0], [800.0, 127.0], [900.0, 112.0], [1000.0, 73.0], [1100.0, 63.0], [1200.0, 98.0], [1300.0, 91.0], [1400.0, 81.0], [1500.0, 79.0], [1600.0, 90.0], [1700.0, 77.0], [1800.0, 73.0], [1900.0, 90.0], [2000.0, 163.0], [2100.0, 139.0], [2300.0, 72.0], [2200.0, 123.0], [2400.0, 75.0], [2500.0, 94.0], [2600.0, 112.0], [2800.0, 90.0], [2700.0, 85.0], [2900.0, 55.0], [3000.0, 46.0], [3100.0, 49.0], [3300.0, 36.0], [3200.0, 26.0], [3400.0, 40.0], [3500.0, 33.0], [3600.0, 29.0], [3700.0, 25.0], [3800.0, 39.0], [3900.0, 39.0], [4000.0, 46.0], [4200.0, 31.0], [4100.0, 43.0], [4300.0, 16.0], [4500.0, 13.0], [4400.0, 22.0], [4600.0, 12.0], [4800.0, 11.0], [4700.0, 3.0], [5000.0, 10.0], [4900.0, 10.0], [5100.0, 11.0], [5300.0, 14.0], [5200.0, 5.0], [5500.0, 4.0], [5400.0, 7.0], [5600.0, 4.0], [5700.0, 4.0], [5800.0, 4.0], [5900.0, 5.0], [6100.0, 4.0], [6000.0, 1.0], [6300.0, 3.0], [6200.0, 5.0], [6400.0, 2.0], [6600.0, 2.0], [6500.0, 1.0], [6900.0, 3.0], [6700.0, 5.0], [6800.0, 2.0], [7000.0, 6.0], [7100.0, 3.0], [7300.0, 3.0], [7200.0, 3.0], [7500.0, 3.0], [7800.0, 1.0], [8400.0, 3.0], [8200.0, 4.0], [8500.0, 2.0], [9200.0, 2.0], [9900.0, 1.0], [11000.0, 1.0], [10900.0, 2.0], [11200.0, 2.0], [11400.0, 1.0], [13600.0, 1.0], [100.0, 545.0], [200.0, 366.0], [300.0, 182.0], [400.0, 160.0], [500.0, 275.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 13600.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 1267.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2120.0, "series": [{"data": [[0.0, 1803.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1267.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 2120.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.224137931034482, "minX": 1.6026642E12, "maxY": 10.0, "series": [{"data": [[1.6026642E12, 10.0], [1.6026648E12, 10.0], [1.60266486E12, 10.0], [1.6026645E12, 10.0], [1.60266456E12, 10.0], [1.60266462E12, 10.0], [1.60266426E12, 10.0], [1.60266492E12, 10.0], [1.60266498E12, 9.224137931034482], [1.60266438E12, 10.0], [1.60266432E12, 10.0], [1.60266468E12, 10.0], [1.60266444E12, 10.0], [1.60266474E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60266498E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 1469.7907739818556, "minX": 1.0, "maxY": 6976.0, "series": [{"data": [[8.0, 2230.0], [4.0, 2676.0], [2.0, 5707.0], [1.0, 4986.0], [9.0, 2693.0], [10.0, 1469.7907739818556], [5.0, 2062.0], [6.0, 2301.0], [3.0, 6976.0], [7.0, 2305.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.991329479768785, 1473.3953757225422]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 405.4, "minX": 1.6026642E12, "maxY": 3422001.8666666667, "series": [{"data": [[1.6026642E12, 1377597.4666666666], [1.6026648E12, 2407696.6666666665], [1.60266486E12, 2777693.6666666665], [1.6026645E12, 2851367.783333333], [1.60266456E12, 2872634.5], [1.60266462E12, 3422001.8666666667], [1.60266426E12, 2734609.5166666666], [1.60266492E12, 3269182.2333333334], [1.60266498E12, 479086.15], [1.60266438E12, 2581546.966666667], [1.60266432E12, 2511480.45], [1.60266468E12, 2304640.0833333335], [1.60266444E12, 2637179.3333333335], [1.60266474E12, 2686319.05]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6026642E12, 1153.6333333333334], [1.6026648E12, 2248.3333333333335], [1.60266486E12, 3019.5833333333335], [1.6026645E12, 2944.5], [1.60266456E12, 3008.766666666667], [1.60266462E12, 3220.983333333333], [1.60266426E12, 2681.0833333333335], [1.60266492E12, 3508.9333333333334], [1.60266498E12, 405.4], [1.60266438E12, 1671.0166666666667], [1.60266432E12, 3183.866666666667], [1.60266468E12, 2885.6833333333334], [1.60266444E12, 2782.233333333333], [1.60266474E12, 2429.75]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60266498E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 1197.1884920634914, "minX": 1.6026642E12, "maxY": 2420.5344827586214, "series": [{"data": [[1.6026642E12, 1800.5862068965514], [1.6026648E12, 1815.3191489361693], [1.60266486E12, 1366.627853881279], [1.6026645E12, 1417.7741176470577], [1.60266456E12, 1394.7852193995382], [1.60266462E12, 1213.0020202020194], [1.60266426E12, 1476.5862068965534], [1.60266492E12, 1197.1884920634914], [1.60266498E12, 2420.5344827586214], [1.60266438E12, 2281.0039682539687], [1.60266432E12, 1250.8874999999998], [1.60266468E12, 1387.7858823529405], [1.60266444E12, 1533.0696517412935], [1.60266474E12, 1642.9674796747975]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60266498E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 1194.7837301587297, "minX": 1.6026642E12, "maxY": 2417.4482758620693, "series": [{"data": [[1.6026642E12, 1796.3390804597693], [1.6026648E12, 1812.6626139817638], [1.60266486E12, 1364.3675799086755], [1.6026645E12, 1415.1341176470576], [1.60266456E12, 1391.9792147805992], [1.60266462E12, 1210.292929292929], [1.60266426E12, 1473.327586206898], [1.60266492E12, 1194.7837301587297], [1.60266498E12, 2417.4482758620693], [1.60266438E12, 2275.924603174604], [1.60266432E12, 1248.2937499999996], [1.60266468E12, 1385.7764705882346], [1.60266444E12, 1530.3208955223886], [1.60266474E12, 1640.008130081301]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60266498E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.6026642E12, "maxY": 0.5574712643678156, "series": [{"data": [[1.6026642E12, 0.5574712643678156], [1.6026648E12, 0.03343465045592706], [1.60266486E12, 0.018264840182648394], [1.6026645E12, 0.025882352941176485], [1.60266456E12, 0.027713625866050817], [1.60266462E12, 0.024242424242424246], [1.60266426E12, 0.029556650246305393], [1.60266492E12, 0.029761904761904736], [1.60266498E12, 0.0], [1.60266438E12, 0.03174603174603174], [1.60266432E12, 0.03749999999999997], [1.60266468E12, 0.018823529411764704], [1.60266444E12, 0.0248756218905473], [1.60266474E12, 0.03252032520325204]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60266498E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 6.0, "minX": 1.6026642E12, "maxY": 13626.0, "series": [{"data": [[1.6026642E12, 8451.0], [1.6026648E12, 11447.0], [1.60266486E12, 7883.0], [1.6026645E12, 13626.0], [1.60266456E12, 7014.0], [1.60266462E12, 8559.0], [1.60266426E12, 5486.0], [1.60266492E12, 10964.0], [1.60266498E12, 6976.0], [1.60266438E12, 8513.0], [1.60266432E12, 11092.0], [1.60266468E12, 7255.0], [1.60266444E12, 10963.0], [1.60266474E12, 11234.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6026642E12, 37.299999833106995], [1.6026648E12, 15.0], [1.60266486E12, 10.901999790668487], [1.6026645E12, 14.833999898433685], [1.60266456E12, 15.905999896526337], [1.60266462E12, 17.0], [1.60266426E12, 38.29299893260002], [1.60266492E12, 16.0], [1.60266498E12, 112.0], [1.60266438E12, 18.553999879360198], [1.60266432E12, 16.657999770641325], [1.60266468E12, 16.33599959373474], [1.60266444E12, 16.0], [1.60266474E12, 21.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6026642E12, 37.9300000667572], [1.6026648E12, 15.0], [1.60266486E12, 12.038300125598907], [1.6026645E12, 15.0], [1.60266456E12, 16.296600041389468], [1.60266462E12, 17.0], [1.60266426E12, 42.087900116443635], [1.60266492E12, 16.0], [1.60266498E12, 112.0], [1.60266438E12, 19.00940004825592], [1.60266432E12, 17.523800091743468], [1.60266468E12, 17.43480008125305], [1.60266444E12, 16.0], [1.60266474E12, 21.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6026642E12, 37.6499999165535], [1.6026648E12, 15.0], [1.60266486E12, 11.511499843001364], [1.6026645E12, 15.0], [1.60266456E12, 16.122999948263168], [1.60266462E12, 17.0], [1.60266426E12, 40.531499466300005], [1.60266492E12, 16.0], [1.60266498E12, 112.0], [1.60266438E12, 18.8069999396801], [1.60266432E12, 17.138999885320665], [1.60266468E12, 17.093999898433687], [1.60266444E12, 16.0], [1.60266474E12, 21.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.6026642E12, 35.0], [1.6026648E12, 12.0], [1.60266486E12, 6.0], [1.6026645E12, 10.0], [1.60266456E12, 10.0], [1.60266462E12, 16.0], [1.60266426E12, 11.0], [1.60266492E12, 11.0], [1.60266498E12, 112.0], [1.60266438E12, 15.0], [1.60266432E12, 14.0], [1.60266468E12, 11.0], [1.60266444E12, 10.0], [1.60266474E12, 15.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6026642E12, 1391.5], [1.6026648E12, 1659.0], [1.60266486E12, 673.0], [1.6026645E12, 712.0], [1.60266456E12, 905.0], [1.60266462E12, 631.0], [1.60266426E12, 1413.0], [1.60266492E12, 785.5], [1.60266498E12, 2189.5], [1.60266438E12, 2197.5], [1.60266432E12, 703.5], [1.60266468E12, 1144.0], [1.60266444E12, 883.5], [1.60266474E12, 961.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60266498E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 109.0, "minX": 1.0, "maxY": 2615.5, "series": [{"data": [[2.0, 2615.5], [33.0, 173.0], [35.0, 155.0], [37.0, 109.0], [3.0, 2471.5], [4.0, 2078.0], [5.0, 2078.5], [6.0, 1509.5], [7.0, 1293.5], [8.0, 959.5], [9.0, 926.0], [10.0, 661.0], [11.0, 638.5], [12.0, 479.5], [13.0, 641.0], [14.0, 552.5], [15.0, 284.5], [1.0, 2144.0], [16.0, 253.5], [17.0, 479.0], [18.0, 235.5], [19.0, 239.5], [20.0, 275.5], [21.0, 256.0], [22.0, 203.5], [24.0, 284.0], [25.0, 155.0], [27.0, 181.0], [29.0, 173.0], [30.0, 155.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 37.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 108.0, "minX": 1.0, "maxY": 2611.5, "series": [{"data": [[2.0, 2611.5], [33.0, 170.0], [35.0, 155.0], [37.0, 108.0], [3.0, 2468.0], [4.0, 2073.0], [5.0, 2076.0], [6.0, 1504.5], [7.0, 1291.0], [8.0, 957.5], [9.0, 924.0], [10.0, 659.5], [11.0, 636.0], [12.0, 477.0], [13.0, 636.0], [14.0, 550.5], [15.0, 283.0], [1.0, 2141.0], [16.0, 253.0], [17.0, 477.0], [18.0, 231.5], [19.0, 237.5], [20.0, 273.0], [21.0, 254.5], [22.0, 201.5], [24.0, 283.5], [25.0, 152.5], [27.0, 176.0], [29.0, 170.0], [30.0, 152.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 37.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.8, "minX": 1.6026642E12, "maxY": 8.4, "series": [{"data": [[1.6026642E12, 3.066666666666667], [1.6026648E12, 5.483333333333333], [1.60266486E12, 7.3], [1.6026645E12, 7.083333333333333], [1.60266456E12, 7.216666666666667], [1.60266462E12, 8.25], [1.60266426E12, 6.766666666666667], [1.60266492E12, 8.4], [1.60266498E12, 0.8], [1.60266438E12, 4.2], [1.60266432E12, 8.0], [1.60266468E12, 7.083333333333333], [1.60266444E12, 6.7], [1.60266474E12, 6.15]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60266498E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.9666666666666667, "minX": 1.6026642E12, "maxY": 8.4, "series": [{"data": [[1.6026642E12, 2.9], [1.6026648E12, 5.483333333333333], [1.60266486E12, 7.3], [1.6026645E12, 7.083333333333333], [1.60266456E12, 7.216666666666667], [1.60266462E12, 8.25], [1.60266426E12, 6.766666666666667], [1.60266492E12, 8.4], [1.60266498E12, 0.9666666666666667], [1.60266438E12, 4.2], [1.60266432E12, 8.0], [1.60266468E12, 7.083333333333333], [1.60266444E12, 6.7], [1.60266474E12, 6.15]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60266498E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.9666666666666667, "minX": 1.6026642E12, "maxY": 8.4, "series": [{"data": [[1.6026642E12, 2.9], [1.6026648E12, 5.483333333333333], [1.60266486E12, 7.3], [1.6026645E12, 7.083333333333333], [1.60266456E12, 7.216666666666667], [1.60266462E12, 8.25], [1.60266426E12, 6.766666666666667], [1.60266492E12, 8.4], [1.60266498E12, 0.9666666666666667], [1.60266438E12, 4.2], [1.60266432E12, 8.0], [1.60266468E12, 7.083333333333333], [1.60266444E12, 6.7], [1.60266474E12, 6.15]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60266498E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.9666666666666667, "minX": 1.6026642E12, "maxY": 8.4, "series": [{"data": [[1.6026642E12, 2.9], [1.6026648E12, 5.483333333333333], [1.60266486E12, 7.3], [1.6026645E12, 7.083333333333333], [1.60266456E12, 7.216666666666667], [1.60266462E12, 8.25], [1.60266426E12, 6.766666666666667], [1.60266492E12, 8.4], [1.60266498E12, 0.9666666666666667], [1.60266438E12, 4.2], [1.60266432E12, 8.0], [1.60266468E12, 7.083333333333333], [1.60266444E12, 6.7], [1.60266474E12, 6.15]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60266498E12, "title": "Total Transactions Per Second"}},
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

