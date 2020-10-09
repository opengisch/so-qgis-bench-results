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
        data: {"result": {"minY": 3.0, "minX": 0.0, "maxY": 12320.0, "series": [{"data": [[0.0, 3.0], [0.1, 6.0], [0.2, 8.0], [0.3, 10.0], [0.4, 11.0], [0.5, 12.0], [0.6, 13.0], [0.7, 13.0], [0.8, 13.0], [0.9, 14.0], [1.0, 15.0], [1.1, 16.0], [1.2, 17.0], [1.3, 17.0], [1.4, 17.0], [1.5, 18.0], [1.6, 19.0], [1.7, 19.0], [1.8, 20.0], [1.9, 20.0], [2.0, 21.0], [2.1, 22.0], [2.2, 22.0], [2.3, 22.0], [2.4, 23.0], [2.5, 23.0], [2.6, 24.0], [2.7, 24.0], [2.8, 25.0], [2.9, 25.0], [3.0, 26.0], [3.1, 27.0], [3.2, 28.0], [3.3, 29.0], [3.4, 31.0], [3.5, 33.0], [3.6, 34.0], [3.7, 37.0], [3.8, 37.0], [3.9, 38.0], [4.0, 39.0], [4.1, 40.0], [4.2, 41.0], [4.3, 41.0], [4.4, 42.0], [4.5, 43.0], [4.6, 44.0], [4.7, 44.0], [4.8, 46.0], [4.9, 47.0], [5.0, 48.0], [5.1, 48.0], [5.2, 49.0], [5.3, 49.0], [5.4, 50.0], [5.5, 50.0], [5.6, 51.0], [5.7, 52.0], [5.8, 53.0], [5.9, 53.0], [6.0, 55.0], [6.1, 55.0], [6.2, 56.0], [6.3, 56.0], [6.4, 57.0], [6.5, 57.0], [6.6, 58.0], [6.7, 60.0], [6.8, 61.0], [6.9, 61.0], [7.0, 62.0], [7.1, 62.0], [7.2, 63.0], [7.3, 64.0], [7.4, 64.0], [7.5, 66.0], [7.6, 66.0], [7.7, 67.0], [7.8, 69.0], [7.9, 70.0], [8.0, 71.0], [8.1, 73.0], [8.2, 76.0], [8.3, 79.0], [8.4, 81.0], [8.5, 83.0], [8.6, 84.0], [8.7, 85.0], [8.8, 85.0], [8.9, 86.0], [9.0, 87.0], [9.1, 88.0], [9.2, 88.0], [9.3, 89.0], [9.4, 90.0], [9.5, 90.0], [9.6, 91.0], [9.7, 92.0], [9.8, 92.0], [9.9, 93.0], [10.0, 93.0], [10.1, 94.0], [10.2, 94.0], [10.3, 95.0], [10.4, 95.0], [10.5, 96.0], [10.6, 96.0], [10.7, 97.0], [10.8, 97.0], [10.9, 98.0], [11.0, 99.0], [11.1, 99.0], [11.2, 100.0], [11.3, 100.0], [11.4, 101.0], [11.5, 102.0], [11.6, 103.0], [11.7, 103.0], [11.8, 104.0], [11.9, 105.0], [12.0, 107.0], [12.1, 108.0], [12.2, 109.0], [12.3, 109.0], [12.4, 109.0], [12.5, 110.0], [12.6, 111.0], [12.7, 112.0], [12.8, 112.0], [12.9, 113.0], [13.0, 114.0], [13.1, 116.0], [13.2, 116.0], [13.3, 117.0], [13.4, 117.0], [13.5, 118.0], [13.6, 119.0], [13.7, 121.0], [13.8, 122.0], [13.9, 123.0], [14.0, 124.0], [14.1, 124.0], [14.2, 125.0], [14.3, 127.0], [14.4, 128.0], [14.5, 129.0], [14.6, 130.0], [14.7, 132.0], [14.8, 132.0], [14.9, 133.0], [15.0, 134.0], [15.1, 136.0], [15.2, 137.0], [15.3, 138.0], [15.4, 139.0], [15.5, 139.0], [15.6, 141.0], [15.7, 141.0], [15.8, 142.0], [15.9, 143.0], [16.0, 145.0], [16.1, 146.0], [16.2, 149.0], [16.3, 150.0], [16.4, 151.0], [16.5, 152.0], [16.6, 152.0], [16.7, 153.0], [16.8, 154.0], [16.9, 157.0], [17.0, 158.0], [17.1, 159.0], [17.2, 161.0], [17.3, 161.0], [17.4, 163.0], [17.5, 164.0], [17.6, 165.0], [17.7, 167.0], [17.8, 168.0], [17.9, 168.0], [18.0, 170.0], [18.1, 170.0], [18.2, 171.0], [18.3, 173.0], [18.4, 174.0], [18.5, 175.0], [18.6, 176.0], [18.7, 177.0], [18.8, 178.0], [18.9, 181.0], [19.0, 181.0], [19.1, 182.0], [19.2, 183.0], [19.3, 184.0], [19.4, 186.0], [19.5, 187.0], [19.6, 187.0], [19.7, 187.0], [19.8, 188.0], [19.9, 190.0], [20.0, 190.0], [20.1, 192.0], [20.2, 194.0], [20.3, 194.0], [20.4, 195.0], [20.5, 197.0], [20.6, 199.0], [20.7, 199.0], [20.8, 200.0], [20.9, 202.0], [21.0, 204.0], [21.1, 205.0], [21.2, 206.0], [21.3, 208.0], [21.4, 209.0], [21.5, 210.0], [21.6, 211.0], [21.7, 212.0], [21.8, 214.0], [21.9, 215.0], [22.0, 216.0], [22.1, 218.0], [22.2, 219.0], [22.3, 221.0], [22.4, 222.0], [22.5, 223.0], [22.6, 225.0], [22.7, 226.0], [22.8, 228.0], [22.9, 229.0], [23.0, 230.0], [23.1, 231.0], [23.2, 233.0], [23.3, 234.0], [23.4, 235.0], [23.5, 237.0], [23.6, 238.0], [23.7, 239.0], [23.8, 240.0], [23.9, 241.0], [24.0, 243.0], [24.1, 245.0], [24.2, 246.0], [24.3, 248.0], [24.4, 249.0], [24.5, 251.0], [24.6, 252.0], [24.7, 253.0], [24.8, 255.0], [24.9, 257.0], [25.0, 258.0], [25.1, 262.0], [25.2, 265.0], [25.3, 266.0], [25.4, 267.0], [25.5, 269.0], [25.6, 269.0], [25.7, 270.0], [25.8, 272.0], [25.9, 272.0], [26.0, 274.0], [26.1, 275.0], [26.2, 277.0], [26.3, 279.0], [26.4, 280.0], [26.5, 282.0], [26.6, 284.0], [26.7, 286.0], [26.8, 289.0], [26.9, 290.0], [27.0, 292.0], [27.1, 296.0], [27.2, 299.0], [27.3, 300.0], [27.4, 301.0], [27.5, 302.0], [27.6, 304.0], [27.7, 305.0], [27.8, 306.0], [27.9, 308.0], [28.0, 309.0], [28.1, 310.0], [28.2, 312.0], [28.3, 314.0], [28.4, 316.0], [28.5, 319.0], [28.6, 321.0], [28.7, 322.0], [28.8, 324.0], [28.9, 325.0], [29.0, 330.0], [29.1, 331.0], [29.2, 336.0], [29.3, 339.0], [29.4, 342.0], [29.5, 344.0], [29.6, 346.0], [29.7, 349.0], [29.8, 351.0], [29.9, 354.0], [30.0, 356.0], [30.1, 360.0], [30.2, 362.0], [30.3, 368.0], [30.4, 371.0], [30.5, 373.0], [30.6, 378.0], [30.7, 379.0], [30.8, 383.0], [30.9, 385.0], [31.0, 388.0], [31.1, 389.0], [31.2, 391.0], [31.3, 394.0], [31.4, 396.0], [31.5, 397.0], [31.6, 399.0], [31.7, 402.0], [31.8, 403.0], [31.9, 407.0], [32.0, 409.0], [32.1, 415.0], [32.2, 419.0], [32.3, 424.0], [32.4, 428.0], [32.5, 434.0], [32.6, 440.0], [32.7, 445.0], [32.8, 446.0], [32.9, 449.0], [33.0, 452.0], [33.1, 456.0], [33.2, 459.0], [33.3, 462.0], [33.4, 463.0], [33.5, 465.0], [33.6, 467.0], [33.7, 469.0], [33.8, 472.0], [33.9, 477.0], [34.0, 479.0], [34.1, 480.0], [34.2, 482.0], [34.3, 484.0], [34.4, 485.0], [34.5, 486.0], [34.6, 488.0], [34.7, 492.0], [34.8, 494.0], [34.9, 495.0], [35.0, 498.0], [35.1, 499.0], [35.2, 501.0], [35.3, 502.0], [35.4, 507.0], [35.5, 508.0], [35.6, 511.0], [35.7, 514.0], [35.8, 519.0], [35.9, 522.0], [36.0, 522.0], [36.1, 524.0], [36.2, 526.0], [36.3, 528.0], [36.4, 534.0], [36.5, 535.0], [36.6, 536.0], [36.7, 538.0], [36.8, 542.0], [36.9, 547.0], [37.0, 549.0], [37.1, 551.0], [37.2, 552.0], [37.3, 555.0], [37.4, 556.0], [37.5, 559.0], [37.6, 562.0], [37.7, 563.0], [37.8, 565.0], [37.9, 566.0], [38.0, 567.0], [38.1, 568.0], [38.2, 570.0], [38.3, 571.0], [38.4, 573.0], [38.5, 576.0], [38.6, 577.0], [38.7, 580.0], [38.8, 582.0], [38.9, 584.0], [39.0, 587.0], [39.1, 591.0], [39.2, 594.0], [39.3, 597.0], [39.4, 599.0], [39.5, 602.0], [39.6, 604.0], [39.7, 606.0], [39.8, 608.0], [39.9, 611.0], [40.0, 612.0], [40.1, 614.0], [40.2, 616.0], [40.3, 619.0], [40.4, 624.0], [40.5, 625.0], [40.6, 628.0], [40.7, 631.0], [40.8, 635.0], [40.9, 639.0], [41.0, 642.0], [41.1, 645.0], [41.2, 646.0], [41.3, 647.0], [41.4, 651.0], [41.5, 653.0], [41.6, 655.0], [41.7, 657.0], [41.8, 660.0], [41.9, 663.0], [42.0, 665.0], [42.1, 667.0], [42.2, 670.0], [42.3, 672.0], [42.4, 674.0], [42.5, 679.0], [42.6, 681.0], [42.7, 683.0], [42.8, 684.0], [42.9, 686.0], [43.0, 690.0], [43.1, 693.0], [43.2, 694.0], [43.3, 696.0], [43.4, 698.0], [43.5, 701.0], [43.6, 705.0], [43.7, 708.0], [43.8, 711.0], [43.9, 716.0], [44.0, 722.0], [44.1, 723.0], [44.2, 726.0], [44.3, 732.0], [44.4, 733.0], [44.5, 737.0], [44.6, 743.0], [44.7, 746.0], [44.8, 748.0], [44.9, 753.0], [45.0, 758.0], [45.1, 763.0], [45.2, 766.0], [45.3, 769.0], [45.4, 773.0], [45.5, 777.0], [45.6, 782.0], [45.7, 785.0], [45.8, 788.0], [45.9, 791.0], [46.0, 794.0], [46.1, 797.0], [46.2, 803.0], [46.3, 809.0], [46.4, 813.0], [46.5, 816.0], [46.6, 823.0], [46.7, 831.0], [46.8, 833.0], [46.9, 835.0], [47.0, 837.0], [47.1, 841.0], [47.2, 847.0], [47.3, 851.0], [47.4, 857.0], [47.5, 862.0], [47.6, 865.0], [47.7, 868.0], [47.8, 873.0], [47.9, 877.0], [48.0, 879.0], [48.1, 881.0], [48.2, 888.0], [48.3, 892.0], [48.4, 898.0], [48.5, 905.0], [48.6, 910.0], [48.7, 914.0], [48.8, 922.0], [48.9, 933.0], [49.0, 941.0], [49.1, 946.0], [49.2, 951.0], [49.3, 959.0], [49.4, 965.0], [49.5, 971.0], [49.6, 979.0], [49.7, 986.0], [49.8, 994.0], [49.9, 1002.0], [50.0, 1007.0], [50.1, 1011.0], [50.2, 1021.0], [50.3, 1025.0], [50.4, 1033.0], [50.5, 1038.0], [50.6, 1043.0], [50.7, 1046.0], [50.8, 1052.0], [50.9, 1057.0], [51.0, 1060.0], [51.1, 1065.0], [51.2, 1072.0], [51.3, 1075.0], [51.4, 1083.0], [51.5, 1090.0], [51.6, 1093.0], [51.7, 1099.0], [51.8, 1105.0], [51.9, 1106.0], [52.0, 1111.0], [52.1, 1118.0], [52.2, 1126.0], [52.3, 1129.0], [52.4, 1139.0], [52.5, 1146.0], [52.6, 1154.0], [52.7, 1166.0], [52.8, 1171.0], [52.9, 1178.0], [53.0, 1182.0], [53.1, 1189.0], [53.2, 1194.0], [53.3, 1208.0], [53.4, 1214.0], [53.5, 1224.0], [53.6, 1228.0], [53.7, 1236.0], [53.8, 1248.0], [53.9, 1258.0], [54.0, 1264.0], [54.1, 1269.0], [54.2, 1274.0], [54.3, 1275.0], [54.4, 1279.0], [54.5, 1283.0], [54.6, 1287.0], [54.7, 1289.0], [54.8, 1293.0], [54.9, 1297.0], [55.0, 1304.0], [55.1, 1307.0], [55.2, 1308.0], [55.3, 1311.0], [55.4, 1317.0], [55.5, 1322.0], [55.6, 1327.0], [55.7, 1331.0], [55.8, 1337.0], [55.9, 1344.0], [56.0, 1349.0], [56.1, 1354.0], [56.2, 1360.0], [56.3, 1365.0], [56.4, 1368.0], [56.5, 1370.0], [56.6, 1382.0], [56.7, 1386.0], [56.8, 1393.0], [56.9, 1400.0], [57.0, 1410.0], [57.1, 1416.0], [57.2, 1424.0], [57.3, 1429.0], [57.4, 1438.0], [57.5, 1442.0], [57.6, 1446.0], [57.7, 1457.0], [57.8, 1465.0], [57.9, 1467.0], [58.0, 1470.0], [58.1, 1472.0], [58.2, 1479.0], [58.3, 1484.0], [58.4, 1490.0], [58.5, 1496.0], [58.6, 1505.0], [58.7, 1515.0], [58.8, 1518.0], [58.9, 1525.0], [59.0, 1529.0], [59.1, 1538.0], [59.2, 1547.0], [59.3, 1551.0], [59.4, 1555.0], [59.5, 1564.0], [59.6, 1571.0], [59.7, 1579.0], [59.8, 1583.0], [59.9, 1590.0], [60.0, 1593.0], [60.1, 1601.0], [60.2, 1605.0], [60.3, 1618.0], [60.4, 1630.0], [60.5, 1632.0], [60.6, 1636.0], [60.7, 1645.0], [60.8, 1651.0], [60.9, 1654.0], [61.0, 1659.0], [61.1, 1670.0], [61.2, 1678.0], [61.3, 1685.0], [61.4, 1690.0], [61.5, 1694.0], [61.6, 1696.0], [61.7, 1699.0], [61.8, 1708.0], [61.9, 1713.0], [62.0, 1720.0], [62.1, 1728.0], [62.2, 1736.0], [62.3, 1744.0], [62.4, 1750.0], [62.5, 1755.0], [62.6, 1761.0], [62.7, 1768.0], [62.8, 1774.0], [62.9, 1782.0], [63.0, 1789.0], [63.1, 1793.0], [63.2, 1795.0], [63.3, 1799.0], [63.4, 1807.0], [63.5, 1813.0], [63.6, 1824.0], [63.7, 1832.0], [63.8, 1843.0], [63.9, 1857.0], [64.0, 1862.0], [64.1, 1871.0], [64.2, 1882.0], [64.3, 1889.0], [64.4, 1893.0], [64.5, 1900.0], [64.6, 1916.0], [64.7, 1930.0], [64.8, 1938.0], [64.9, 1946.0], [65.0, 1953.0], [65.1, 1966.0], [65.2, 1970.0], [65.3, 1974.0], [65.4, 1979.0], [65.5, 1989.0], [65.6, 1992.0], [65.7, 2001.0], [65.8, 2003.0], [65.9, 2006.0], [66.0, 2013.0], [66.1, 2017.0], [66.2, 2021.0], [66.3, 2028.0], [66.4, 2032.0], [66.5, 2037.0], [66.6, 2043.0], [66.7, 2046.0], [66.8, 2050.0], [66.9, 2052.0], [67.0, 2055.0], [67.1, 2058.0], [67.2, 2063.0], [67.3, 2067.0], [67.4, 2071.0], [67.5, 2074.0], [67.6, 2080.0], [67.7, 2084.0], [67.8, 2087.0], [67.9, 2091.0], [68.0, 2093.0], [68.1, 2096.0], [68.2, 2099.0], [68.3, 2101.0], [68.4, 2104.0], [68.5, 2107.0], [68.6, 2109.0], [68.7, 2112.0], [68.8, 2113.0], [68.9, 2118.0], [69.0, 2122.0], [69.1, 2124.0], [69.2, 2126.0], [69.3, 2130.0], [69.4, 2131.0], [69.5, 2137.0], [69.6, 2138.0], [69.7, 2141.0], [69.8, 2142.0], [69.9, 2146.0], [70.0, 2148.0], [70.1, 2150.0], [70.2, 2155.0], [70.3, 2158.0], [70.4, 2160.0], [70.5, 2163.0], [70.6, 2167.0], [70.7, 2175.0], [70.8, 2177.0], [70.9, 2179.0], [71.0, 2182.0], [71.1, 2185.0], [71.2, 2189.0], [71.3, 2193.0], [71.4, 2197.0], [71.5, 2200.0], [71.6, 2207.0], [71.7, 2212.0], [71.8, 2217.0], [71.9, 2221.0], [72.0, 2225.0], [72.1, 2228.0], [72.2, 2231.0], [72.3, 2235.0], [72.4, 2238.0], [72.5, 2241.0], [72.6, 2243.0], [72.7, 2247.0], [72.8, 2250.0], [72.9, 2255.0], [73.0, 2260.0], [73.1, 2264.0], [73.2, 2267.0], [73.3, 2270.0], [73.4, 2272.0], [73.5, 2277.0], [73.6, 2280.0], [73.7, 2286.0], [73.8, 2290.0], [73.9, 2293.0], [74.0, 2296.0], [74.1, 2301.0], [74.2, 2308.0], [74.3, 2314.0], [74.4, 2322.0], [74.5, 2327.0], [74.6, 2339.0], [74.7, 2341.0], [74.8, 2343.0], [74.9, 2348.0], [75.0, 2353.0], [75.1, 2357.0], [75.2, 2361.0], [75.3, 2369.0], [75.4, 2374.0], [75.5, 2378.0], [75.6, 2385.0], [75.7, 2386.0], [75.8, 2389.0], [75.9, 2396.0], [76.0, 2409.0], [76.1, 2414.0], [76.2, 2431.0], [76.3, 2436.0], [76.4, 2444.0], [76.5, 2450.0], [76.6, 2460.0], [76.7, 2469.0], [76.8, 2475.0], [76.9, 2480.0], [77.0, 2490.0], [77.1, 2498.0], [77.2, 2504.0], [77.3, 2517.0], [77.4, 2525.0], [77.5, 2533.0], [77.6, 2539.0], [77.7, 2542.0], [77.8, 2553.0], [77.9, 2559.0], [78.0, 2568.0], [78.1, 2574.0], [78.2, 2581.0], [78.3, 2587.0], [78.4, 2594.0], [78.5, 2600.0], [78.6, 2607.0], [78.7, 2610.0], [78.8, 2614.0], [78.9, 2620.0], [79.0, 2627.0], [79.1, 2634.0], [79.2, 2640.0], [79.3, 2642.0], [79.4, 2644.0], [79.5, 2650.0], [79.6, 2655.0], [79.7, 2657.0], [79.8, 2662.0], [79.9, 2669.0], [80.0, 2671.0], [80.1, 2677.0], [80.2, 2686.0], [80.3, 2689.0], [80.4, 2692.0], [80.5, 2700.0], [80.6, 2703.0], [80.7, 2714.0], [80.8, 2717.0], [80.9, 2721.0], [81.0, 2724.0], [81.1, 2727.0], [81.2, 2731.0], [81.3, 2735.0], [81.4, 2739.0], [81.5, 2744.0], [81.6, 2747.0], [81.7, 2751.0], [81.8, 2758.0], [81.9, 2762.0], [82.0, 2769.0], [82.1, 2775.0], [82.2, 2781.0], [82.3, 2786.0], [82.4, 2789.0], [82.5, 2792.0], [82.6, 2796.0], [82.7, 2800.0], [82.8, 2811.0], [82.9, 2816.0], [83.0, 2821.0], [83.1, 2830.0], [83.2, 2839.0], [83.3, 2848.0], [83.4, 2851.0], [83.5, 2856.0], [83.6, 2860.0], [83.7, 2868.0], [83.8, 2884.0], [83.9, 2888.0], [84.0, 2896.0], [84.1, 2902.0], [84.2, 2916.0], [84.3, 2923.0], [84.4, 2927.0], [84.5, 2937.0], [84.6, 2941.0], [84.7, 2951.0], [84.8, 2959.0], [84.9, 2968.0], [85.0, 2983.0], [85.1, 2998.0], [85.2, 3008.0], [85.3, 3015.0], [85.4, 3020.0], [85.5, 3024.0], [85.6, 3029.0], [85.7, 3035.0], [85.8, 3051.0], [85.9, 3069.0], [86.0, 3082.0], [86.1, 3087.0], [86.2, 3096.0], [86.3, 3104.0], [86.4, 3121.0], [86.5, 3128.0], [86.6, 3143.0], [86.7, 3152.0], [86.8, 3168.0], [86.9, 3179.0], [87.0, 3192.0], [87.1, 3208.0], [87.2, 3213.0], [87.3, 3222.0], [87.4, 3234.0], [87.5, 3243.0], [87.6, 3252.0], [87.7, 3267.0], [87.8, 3271.0], [87.9, 3284.0], [88.0, 3293.0], [88.1, 3317.0], [88.2, 3338.0], [88.3, 3379.0], [88.4, 3387.0], [88.5, 3407.0], [88.6, 3418.0], [88.7, 3435.0], [88.8, 3447.0], [88.9, 3468.0], [89.0, 3482.0], [89.1, 3511.0], [89.2, 3524.0], [89.3, 3535.0], [89.4, 3550.0], [89.5, 3580.0], [89.6, 3590.0], [89.7, 3614.0], [89.8, 3630.0], [89.9, 3632.0], [90.0, 3648.0], [90.1, 3676.0], [90.2, 3692.0], [90.3, 3700.0], [90.4, 3709.0], [90.5, 3740.0], [90.6, 3770.0], [90.7, 3778.0], [90.8, 3786.0], [90.9, 3801.0], [91.0, 3806.0], [91.1, 3824.0], [91.2, 3832.0], [91.3, 3845.0], [91.4, 3877.0], [91.5, 3890.0], [91.6, 3912.0], [91.7, 3944.0], [91.8, 3957.0], [91.9, 3981.0], [92.0, 4004.0], [92.1, 4016.0], [92.2, 4042.0], [92.3, 4046.0], [92.4, 4059.0], [92.5, 4078.0], [92.6, 4091.0], [92.7, 4107.0], [92.8, 4119.0], [92.9, 4139.0], [93.0, 4143.0], [93.1, 4164.0], [93.2, 4179.0], [93.3, 4192.0], [93.4, 4199.0], [93.5, 4205.0], [93.6, 4211.0], [93.7, 4225.0], [93.8, 4234.0], [93.9, 4244.0], [94.0, 4253.0], [94.1, 4260.0], [94.2, 4272.0], [94.3, 4299.0], [94.4, 4316.0], [94.5, 4329.0], [94.6, 4343.0], [94.7, 4355.0], [94.8, 4366.0], [94.9, 4384.0], [95.0, 4403.0], [95.1, 4433.0], [95.2, 4446.0], [95.3, 4474.0], [95.4, 4490.0], [95.5, 4512.0], [95.6, 4540.0], [95.7, 4582.0], [95.8, 4613.0], [95.9, 4656.0], [96.0, 4714.0], [96.1, 4755.0], [96.2, 4804.0], [96.3, 4831.0], [96.4, 4856.0], [96.5, 4880.0], [96.6, 4903.0], [96.7, 4964.0], [96.8, 4990.0], [96.9, 5041.0], [97.0, 5072.0], [97.1, 5116.0], [97.2, 5185.0], [97.3, 5199.0], [97.4, 5251.0], [97.5, 5285.0], [97.6, 5369.0], [97.7, 5477.0], [97.8, 5530.0], [97.9, 5644.0], [98.0, 5687.0], [98.1, 5763.0], [98.2, 5857.0], [98.3, 5958.0], [98.4, 6024.0], [98.5, 6139.0], [98.6, 6260.0], [98.7, 6311.0], [98.8, 6480.0], [98.9, 6661.0], [99.0, 6679.0], [99.1, 6906.0], [99.2, 7104.0], [99.3, 7240.0], [99.4, 7359.0], [99.5, 7711.0], [99.6, 8255.0], [99.7, 8710.0], [99.8, 9010.0], [99.9, 9820.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 577.0, "series": [{"data": [[0.0, 577.0], [600.0, 211.0], [700.0, 139.0], [800.0, 118.0], [900.0, 74.0], [1000.0, 97.0], [1100.0, 79.0], [1200.0, 87.0], [1300.0, 102.0], [1400.0, 86.0], [1500.0, 80.0], [1600.0, 84.0], [1700.0, 83.0], [1800.0, 61.0], [1900.0, 60.0], [2000.0, 136.0], [2100.0, 168.0], [2200.0, 133.0], [2300.0, 96.0], [2400.0, 63.0], [2500.0, 71.0], [2600.0, 104.0], [2800.0, 71.0], [2700.0, 114.0], [2900.0, 55.0], [3000.0, 60.0], [3100.0, 42.0], [3200.0, 51.0], [3300.0, 20.0], [3400.0, 31.0], [3500.0, 31.0], [3700.0, 31.0], [3600.0, 34.0], [3800.0, 34.0], [3900.0, 22.0], [4000.0, 35.0], [4300.0, 33.0], [4200.0, 47.0], [4100.0, 40.0], [4400.0, 27.0], [4600.0, 12.0], [4500.0, 15.0], [4800.0, 20.0], [4700.0, 10.0], [5100.0, 12.0], [5000.0, 13.0], [4900.0, 13.0], [5200.0, 12.0], [5300.0, 6.0], [5500.0, 7.0], [5600.0, 8.0], [5400.0, 4.0], [5700.0, 8.0], [5800.0, 4.0], [5900.0, 6.0], [6000.0, 4.0], [6100.0, 7.0], [6200.0, 6.0], [6300.0, 2.0], [6600.0, 8.0], [6400.0, 4.0], [6500.0, 3.0], [6900.0, 3.0], [6700.0, 2.0], [6800.0, 2.0], [7100.0, 3.0], [7000.0, 2.0], [7300.0, 6.0], [7200.0, 4.0], [7400.0, 1.0], [7600.0, 2.0], [7700.0, 2.0], [7800.0, 1.0], [8000.0, 1.0], [8100.0, 1.0], [8200.0, 1.0], [8300.0, 1.0], [8400.0, 3.0], [8700.0, 1.0], [8900.0, 3.0], [9000.0, 3.0], [8800.0, 1.0], [9200.0, 1.0], [9600.0, 1.0], [9900.0, 1.0], [9800.0, 1.0], [10800.0, 1.0], [11300.0, 2.0], [12300.0, 1.0], [100.0, 498.0], [200.0, 340.0], [300.0, 226.0], [400.0, 183.0], [500.0, 222.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 12300.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2151.0, "series": [{"data": [[0.0, 1827.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1212.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 2151.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 1.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.798206278026907, "minX": 1.602252E12, "maxY": 10.0, "series": [{"data": [[1.6022526E12, 10.0], [1.6022523E12, 10.0], [1.60225224E12, 10.0], [1.60225254E12, 10.0], [1.60225248E12, 10.0], [1.60225218E12, 10.0], [1.60225212E12, 10.0], [1.60225278E12, 9.798206278026907], [1.60225272E12, 10.0], [1.60225242E12, 10.0], [1.60225236E12, 10.0], [1.60225206E12, 10.0], [1.602252E12, 10.0], [1.60225266E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60225278E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 1525.0326128907761, "minX": 1.0, "maxY": 6995.0, "series": [{"data": [[8.0, 2049.0], [4.0, 2324.0], [2.0, 6995.0], [1.0, 5617.0], [9.0, 2305.0], [10.0, 1525.0326128907761], [5.0, 2414.0], [6.0, 2270.0], [3.0, 2727.0], [7.0, 2662.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.991331150067428, 1528.0450780196497]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 1544.3, "minX": 1.602252E12, "maxY": 3244306.933333333, "series": [{"data": [[1.6022526E12, 2204754.6166666667], [1.6022523E12, 2767445.533333333], [1.60225224E12, 2533123.683333333], [1.60225254E12, 2303655.6166666667], [1.60225248E12, 2546845.55], [1.60225218E12, 2498427.3333333335], [1.60225212E12, 2164168.8333333335], [1.60225278E12, 1742784.9166666667], [1.60225272E12, 2927689.1166666667], [1.60225242E12, 3244306.933333333], [1.60225236E12, 2855565.5], [1.60225206E12, 2623814.3333333335], [1.602252E12, 1732307.2], [1.60225266E12, 2752429.6]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6022526E12, 1620.45], [1.6022523E12, 2815.8], [1.60225224E12, 2614.4333333333334], [1.60225254E12, 2613.4333333333334], [1.60225248E12, 2851.516666666667], [1.60225218E12, 1655.5833333333333], [1.60225212E12, 2836.1], [1.60225278E12, 1553.85], [1.60225272E12, 3253.8], [1.60225242E12, 2974.75], [1.60225236E12, 3078.5666666666666], [1.60225206E12, 2566.2], [1.602252E12, 1544.3], [1.60225266E12, 3171.016666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60225278E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 1270.921108742004, "minX": 1.602252E12, "maxY": 2500.5743801652884, "series": [{"data": [[1.6022526E12, 2500.5743801652884], [1.6022523E12, 1487.4815724815735], [1.60225224E12, 1651.5132275132287], [1.60225254E12, 1526.2992327365737], [1.60225248E12, 1388.7840375586838], [1.60225218E12, 2261.2560000000017], [1.60225212E12, 1403.8414918414915], [1.60225278E12, 1621.8744394618832], [1.60225272E12, 1270.921108742004], [1.60225242E12, 1352.881057268723], [1.60225236E12, 1339.4243792325055], [1.60225206E12, 1552.388020833333], [1.602252E12, 1610.5338983050847], [1.60225266E12, 1306.7167755991288]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60225278E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 1268.5735607675906, "minX": 1.602252E12, "maxY": 2497.4297520661153, "series": [{"data": [[1.6022526E12, 2497.4297520661153], [1.6022523E12, 1484.6289926289926], [1.60225224E12, 1648.6402116402116], [1.60225254E12, 1524.2327365728895], [1.60225248E12, 1386.55868544601], [1.60225218E12, 2256.6279999999997], [1.60225212E12, 1401.645687645688], [1.60225278E12, 1619.1300448430486], [1.60225272E12, 1268.5735607675906], [1.60225242E12, 1350.3458149779738], [1.60225236E12, 1336.6343115124137], [1.60225206E12, 1549.169270833334], [1.602252E12, 1607.3771186440677], [1.60225266E12, 1304.67320261438]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60225278E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.008968609865470855, "minX": 1.602252E12, "maxY": 0.7923728813559328, "series": [{"data": [[1.6022526E12, 0.045454545454545456], [1.6022523E12, 0.024570024570024603], [1.60225224E12, 0.03439153439153439], [1.60225254E12, 0.025575447570332498], [1.60225248E12, 0.025821596244131467], [1.60225218E12, 0.04800000000000002], [1.60225212E12, 0.027972027972027944], [1.60225278E12, 0.008968609865470855], [1.60225272E12, 0.036247334754797474], [1.60225242E12, 0.022026431718061693], [1.60225236E12, 0.024830699774266374], [1.60225206E12, 0.031249999999999983], [1.602252E12, 0.7923728813559328], [1.60225266E12, 0.021786492374727674]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60225278E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 3.0, "minX": 1.602252E12, "maxY": 12320.0, "series": [{"data": [[1.6022526E12, 9820.0], [1.6022523E12, 9010.0], [1.60225224E12, 12320.0], [1.60225254E12, 11307.0], [1.60225248E12, 6501.0], [1.60225218E12, 5675.0], [1.60225212E12, 9901.0], [1.60225278E12, 6995.0], [1.60225272E12, 9279.0], [1.60225242E12, 7245.0], [1.60225236E12, 6736.0], [1.60225206E12, 7166.0], [1.602252E12, 11342.0], [1.60225266E12, 7380.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6022526E12, 13.869999420642854], [1.6022523E12, 4.662999902963638], [1.60225224E12, 13.410999909639358], [1.60225254E12, 12.527999906539918], [1.60225248E12, 20.842999898195266], [1.60225218E12, 19.517999880313873], [1.60225212E12, 18.73999979496002], [1.60225278E12, 18.0], [1.60225272E12, 12.0], [1.60225242E12, 17.0], [1.60225236E12, 13.0], [1.60225206E12, 35.394999724626544], [1.602252E12, 16.0], [1.60225266E12, 6.69999945163727]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6022526E12, 16.05700023174286], [1.6022523E12, 5.029300038814545], [1.60225224E12, 13.752100036144256], [1.60225254E12, 12.880800037384034], [1.60225248E12, 21.227300040721893], [1.60225218E12, 19.96980004787445], [1.60225212E12, 19.77100012302399], [1.60225278E12, 18.0], [1.60225272E12, 12.0], [1.60225242E12, 17.0], [1.60225236E12, 13.0], [1.60225206E12, 36.434500110149386], [1.602252E12, 16.0], [1.60225266E12, 8.770000219345095]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6022526E12, 15.084999710321426], [1.6022523E12, 4.866499951481819], [1.60225224E12, 13.600499954819679], [1.60225254E12, 12.723999953269958], [1.60225248E12, 21.056499949097635], [1.60225218E12, 19.768999940156938], [1.60225212E12, 19.254999846220016], [1.60225278E12, 18.0], [1.60225272E12, 12.0], [1.60225242E12, 17.0], [1.60225236E12, 13.0], [1.60225206E12, 35.97249986231327], [1.602252E12, 16.0], [1.60225266E12, 7.849999725818634]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.6022526E12, 9.0], [1.6022523E12, 3.0], [1.60225224E12, 9.0], [1.60225254E12, 10.0], [1.60225248E12, 10.0], [1.60225218E12, 15.0], [1.60225212E12, 13.0], [1.60225278E12, 13.0], [1.60225272E12, 7.0], [1.60225242E12, 8.0], [1.60225236E12, 9.0], [1.60225206E12, 14.0], [1.602252E12, 14.0], [1.60225266E12, 3.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6022526E12, 2539.5], [1.6022523E12, 775.5], [1.60225224E12, 944.5], [1.60225254E12, 879.0], [1.60225248E12, 1287.5], [1.60225218E12, 2257.5], [1.60225212E12, 835.0], [1.60225278E12, 1274.0], [1.60225272E12, 667.0], [1.60225242E12, 744.0], [1.60225236E12, 857.0], [1.60225206E12, 1466.0], [1.602252E12, 955.0], [1.60225266E12, 663.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60225278E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 109.5, "minX": 1.0, "maxY": 2324.0, "series": [{"data": [[2.0, 2321.5], [32.0, 199.5], [34.0, 165.5], [36.0, 132.5], [3.0, 2162.0], [4.0, 2254.0], [5.0, 2036.5], [6.0, 1529.5], [7.0, 1469.0], [8.0, 951.0], [9.0, 646.0], [10.0, 705.5], [11.0, 656.0], [12.0, 611.0], [13.0, 386.0], [14.0, 498.5], [15.0, 209.5], [16.0, 530.0], [1.0, 2324.0], [17.0, 219.0], [18.0, 228.5], [19.0, 136.0], [20.0, 299.5], [21.0, 166.5], [22.0, 163.0], [23.0, 178.5], [24.0, 183.0], [25.0, 286.0], [26.0, 152.0], [29.0, 188.0], [30.0, 109.5], [31.0, 129.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[8.0, 1984.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 36.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 107.0, "minX": 1.0, "maxY": 2319.5, "series": [{"data": [[2.0, 2318.0], [32.0, 199.0], [34.0, 162.5], [36.0, 131.0], [3.0, 2155.0], [4.0, 2249.5], [5.0, 2032.5], [6.0, 1526.5], [7.0, 1468.0], [8.0, 950.0], [9.0, 644.5], [10.0, 702.5], [11.0, 654.0], [12.0, 608.5], [13.0, 386.0], [14.0, 496.0], [15.0, 207.0], [16.0, 530.0], [1.0, 2319.5], [17.0, 219.0], [18.0, 227.5], [19.0, 135.0], [20.0, 297.5], [21.0, 163.0], [22.0, 162.0], [23.0, 176.5], [24.0, 182.5], [25.0, 281.0], [26.0, 151.0], [29.0, 185.0], [30.0, 107.0], [31.0, 129.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[8.0, 1984.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 36.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 3.55, "minX": 1.602252E12, "maxY": 7.816666666666666, "series": [{"data": [[1.6022526E12, 4.033333333333333], [1.6022523E12, 6.783333333333333], [1.60225224E12, 6.3], [1.60225254E12, 6.516666666666667], [1.60225248E12, 7.1], [1.60225218E12, 4.166666666666667], [1.60225212E12, 7.15], [1.60225278E12, 3.55], [1.60225272E12, 7.816666666666666], [1.60225242E12, 7.566666666666666], [1.60225236E12, 7.383333333333334], [1.60225206E12, 6.4], [1.602252E12, 4.1], [1.60225266E12, 7.65]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60225278E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.602252E12, "maxY": 7.816666666666666, "series": [{"data": [[1.6022526E12, 4.033333333333333], [1.6022523E12, 6.766666666666667], [1.60225224E12, 6.3], [1.60225254E12, 6.516666666666667], [1.60225248E12, 7.1], [1.60225218E12, 4.166666666666667], [1.60225212E12, 7.15], [1.60225278E12, 3.716666666666667], [1.60225272E12, 7.816666666666666], [1.60225242E12, 7.566666666666666], [1.60225236E12, 7.383333333333334], [1.60225206E12, 6.4], [1.602252E12, 3.933333333333333], [1.60225266E12, 7.65]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.6022523E12, 0.016666666666666666]], "isOverall": false, "label": "400", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60225278E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.602252E12, "maxY": 7.816666666666666, "series": [{"data": [[1.6022526E12, 4.033333333333333], [1.6022523E12, 6.766666666666667], [1.60225224E12, 6.3], [1.60225254E12, 6.516666666666667], [1.60225248E12, 7.1], [1.60225218E12, 4.166666666666667], [1.60225212E12, 7.15], [1.60225278E12, 3.716666666666667], [1.60225272E12, 7.816666666666666], [1.60225242E12, 7.566666666666666], [1.60225236E12, 7.383333333333334], [1.60225206E12, 6.4], [1.602252E12, 3.933333333333333], [1.60225266E12, 7.65]], "isOverall": false, "label": "HTTP Request-success", "isController": false}, {"data": [[1.6022523E12, 0.016666666666666666]], "isOverall": false, "label": "HTTP Request-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60225278E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.602252E12, "maxY": 7.816666666666666, "series": [{"data": [[1.6022526E12, 4.033333333333333], [1.6022523E12, 6.766666666666667], [1.60225224E12, 6.3], [1.60225254E12, 6.516666666666667], [1.60225248E12, 7.1], [1.60225218E12, 4.166666666666667], [1.60225212E12, 7.15], [1.60225278E12, 3.716666666666667], [1.60225272E12, 7.816666666666666], [1.60225242E12, 7.566666666666666], [1.60225236E12, 7.383333333333334], [1.60225206E12, 6.4], [1.602252E12, 3.933333333333333], [1.60225266E12, 7.65]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.6022523E12, 0.016666666666666666]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60225278E12, "title": "Total Transactions Per Second"}},
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

