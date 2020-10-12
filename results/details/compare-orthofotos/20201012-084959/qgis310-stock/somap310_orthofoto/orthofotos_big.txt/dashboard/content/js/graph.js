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
        data: {"result": {"minY": 5.0, "minX": 0.0, "maxY": 13544.0, "series": [{"data": [[0.0, 5.0], [0.1, 7.0], [0.2, 10.0], [0.3, 12.0], [0.4, 12.0], [0.5, 13.0], [0.6, 14.0], [0.7, 15.0], [0.8, 16.0], [0.9, 17.0], [1.0, 18.0], [1.1, 18.0], [1.2, 19.0], [1.3, 19.0], [1.4, 20.0], [1.5, 21.0], [1.6, 21.0], [1.7, 22.0], [1.8, 22.0], [1.9, 22.0], [2.0, 23.0], [2.1, 24.0], [2.2, 24.0], [2.3, 25.0], [2.4, 25.0], [2.5, 25.0], [2.6, 26.0], [2.7, 27.0], [2.8, 28.0], [2.9, 28.0], [3.0, 29.0], [3.1, 30.0], [3.2, 31.0], [3.3, 32.0], [3.4, 34.0], [3.5, 34.0], [3.6, 35.0], [3.7, 37.0], [3.8, 37.0], [3.9, 38.0], [4.0, 40.0], [4.1, 40.0], [4.2, 43.0], [4.3, 43.0], [4.4, 44.0], [4.5, 45.0], [4.6, 45.0], [4.7, 46.0], [4.8, 46.0], [4.9, 47.0], [5.0, 48.0], [5.1, 48.0], [5.2, 49.0], [5.3, 50.0], [5.4, 50.0], [5.5, 51.0], [5.6, 51.0], [5.7, 52.0], [5.8, 53.0], [5.9, 54.0], [6.0, 55.0], [6.1, 56.0], [6.2, 57.0], [6.3, 58.0], [6.4, 59.0], [6.5, 60.0], [6.6, 61.0], [6.7, 61.0], [6.8, 62.0], [6.9, 62.0], [7.0, 64.0], [7.1, 64.0], [7.2, 65.0], [7.3, 66.0], [7.4, 67.0], [7.5, 67.0], [7.6, 68.0], [7.7, 68.0], [7.8, 70.0], [7.9, 71.0], [8.0, 71.0], [8.1, 73.0], [8.2, 74.0], [8.3, 75.0], [8.4, 76.0], [8.5, 78.0], [8.6, 79.0], [8.7, 80.0], [8.8, 81.0], [8.9, 82.0], [9.0, 83.0], [9.1, 84.0], [9.2, 85.0], [9.3, 86.0], [9.4, 88.0], [9.5, 89.0], [9.6, 90.0], [9.7, 91.0], [9.8, 91.0], [9.9, 92.0], [10.0, 93.0], [10.1, 93.0], [10.2, 94.0], [10.3, 94.0], [10.4, 94.0], [10.5, 94.0], [10.6, 95.0], [10.7, 96.0], [10.8, 96.0], [10.9, 98.0], [11.0, 99.0], [11.1, 100.0], [11.2, 101.0], [11.3, 101.0], [11.4, 102.0], [11.5, 102.0], [11.6, 102.0], [11.7, 103.0], [11.8, 103.0], [11.9, 105.0], [12.0, 105.0], [12.1, 106.0], [12.2, 107.0], [12.3, 108.0], [12.4, 109.0], [12.5, 109.0], [12.6, 110.0], [12.7, 111.0], [12.8, 111.0], [12.9, 111.0], [13.0, 112.0], [13.1, 113.0], [13.2, 114.0], [13.3, 114.0], [13.4, 116.0], [13.5, 117.0], [13.6, 118.0], [13.7, 119.0], [13.8, 120.0], [13.9, 121.0], [14.0, 122.0], [14.1, 122.0], [14.2, 123.0], [14.3, 124.0], [14.4, 125.0], [14.5, 125.0], [14.6, 127.0], [14.7, 127.0], [14.8, 128.0], [14.9, 129.0], [15.0, 130.0], [15.1, 132.0], [15.2, 133.0], [15.3, 135.0], [15.4, 136.0], [15.5, 138.0], [15.6, 139.0], [15.7, 141.0], [15.8, 142.0], [15.9, 143.0], [16.0, 144.0], [16.1, 144.0], [16.2, 145.0], [16.3, 146.0], [16.4, 147.0], [16.5, 149.0], [16.6, 150.0], [16.7, 151.0], [16.8, 151.0], [16.9, 153.0], [17.0, 154.0], [17.1, 155.0], [17.2, 157.0], [17.3, 158.0], [17.4, 161.0], [17.5, 162.0], [17.6, 163.0], [17.7, 166.0], [17.8, 167.0], [17.9, 169.0], [18.0, 170.0], [18.1, 172.0], [18.2, 174.0], [18.3, 175.0], [18.4, 177.0], [18.5, 179.0], [18.6, 180.0], [18.7, 181.0], [18.8, 182.0], [18.9, 184.0], [19.0, 185.0], [19.1, 186.0], [19.2, 188.0], [19.3, 188.0], [19.4, 189.0], [19.5, 190.0], [19.6, 191.0], [19.7, 191.0], [19.8, 192.0], [19.9, 193.0], [20.0, 195.0], [20.1, 197.0], [20.2, 197.0], [20.3, 198.0], [20.4, 199.0], [20.5, 200.0], [20.6, 201.0], [20.7, 203.0], [20.8, 204.0], [20.9, 205.0], [21.0, 206.0], [21.1, 206.0], [21.2, 208.0], [21.3, 209.0], [21.4, 210.0], [21.5, 210.0], [21.6, 212.0], [21.7, 213.0], [21.8, 214.0], [21.9, 215.0], [22.0, 216.0], [22.1, 217.0], [22.2, 219.0], [22.3, 221.0], [22.4, 224.0], [22.5, 225.0], [22.6, 225.0], [22.7, 226.0], [22.8, 227.0], [22.9, 228.0], [23.0, 229.0], [23.1, 230.0], [23.2, 231.0], [23.3, 232.0], [23.4, 233.0], [23.5, 234.0], [23.6, 235.0], [23.7, 237.0], [23.8, 239.0], [23.9, 240.0], [24.0, 241.0], [24.1, 243.0], [24.2, 244.0], [24.3, 246.0], [24.4, 247.0], [24.5, 248.0], [24.6, 251.0], [24.7, 252.0], [24.8, 252.0], [24.9, 254.0], [25.0, 257.0], [25.1, 259.0], [25.2, 262.0], [25.3, 263.0], [25.4, 268.0], [25.5, 269.0], [25.6, 269.0], [25.7, 271.0], [25.8, 274.0], [25.9, 276.0], [26.0, 277.0], [26.1, 279.0], [26.2, 282.0], [26.3, 284.0], [26.4, 285.0], [26.5, 288.0], [26.6, 288.0], [26.7, 290.0], [26.8, 292.0], [26.9, 296.0], [27.0, 298.0], [27.1, 299.0], [27.2, 301.0], [27.3, 302.0], [27.4, 303.0], [27.5, 305.0], [27.6, 307.0], [27.7, 310.0], [27.8, 311.0], [27.9, 313.0], [28.0, 314.0], [28.1, 315.0], [28.2, 318.0], [28.3, 321.0], [28.4, 323.0], [28.5, 325.0], [28.6, 327.0], [28.7, 329.0], [28.8, 330.0], [28.9, 333.0], [29.0, 335.0], [29.1, 337.0], [29.2, 342.0], [29.3, 344.0], [29.4, 346.0], [29.5, 349.0], [29.6, 351.0], [29.7, 352.0], [29.8, 356.0], [29.9, 359.0], [30.0, 362.0], [30.1, 363.0], [30.2, 367.0], [30.3, 371.0], [30.4, 372.0], [30.5, 373.0], [30.6, 377.0], [30.7, 380.0], [30.8, 385.0], [30.9, 387.0], [31.0, 390.0], [31.1, 393.0], [31.2, 396.0], [31.3, 397.0], [31.4, 402.0], [31.5, 404.0], [31.6, 407.0], [31.7, 409.0], [31.8, 412.0], [31.9, 416.0], [32.0, 417.0], [32.1, 423.0], [32.2, 427.0], [32.3, 431.0], [32.4, 433.0], [32.5, 437.0], [32.6, 440.0], [32.7, 443.0], [32.8, 446.0], [32.9, 450.0], [33.0, 452.0], [33.1, 455.0], [33.2, 459.0], [33.3, 460.0], [33.4, 464.0], [33.5, 467.0], [33.6, 472.0], [33.7, 474.0], [33.8, 478.0], [33.9, 480.0], [34.0, 481.0], [34.1, 484.0], [34.2, 487.0], [34.3, 491.0], [34.4, 494.0], [34.5, 497.0], [34.6, 501.0], [34.7, 505.0], [34.8, 508.0], [34.9, 511.0], [35.0, 512.0], [35.1, 515.0], [35.2, 517.0], [35.3, 518.0], [35.4, 520.0], [35.5, 522.0], [35.6, 527.0], [35.7, 532.0], [35.8, 537.0], [35.9, 541.0], [36.0, 545.0], [36.1, 549.0], [36.2, 550.0], [36.3, 551.0], [36.4, 552.0], [36.5, 553.0], [36.6, 556.0], [36.7, 558.0], [36.8, 559.0], [36.9, 561.0], [37.0, 562.0], [37.1, 564.0], [37.2, 565.0], [37.3, 566.0], [37.4, 568.0], [37.5, 570.0], [37.6, 571.0], [37.7, 575.0], [37.8, 577.0], [37.9, 578.0], [38.0, 580.0], [38.1, 581.0], [38.2, 583.0], [38.3, 586.0], [38.4, 588.0], [38.5, 590.0], [38.6, 592.0], [38.7, 593.0], [38.8, 595.0], [38.9, 597.0], [39.0, 601.0], [39.1, 602.0], [39.2, 604.0], [39.3, 606.0], [39.4, 608.0], [39.5, 611.0], [39.6, 612.0], [39.7, 614.0], [39.8, 615.0], [39.9, 618.0], [40.0, 619.0], [40.1, 622.0], [40.2, 623.0], [40.3, 627.0], [40.4, 628.0], [40.5, 629.0], [40.6, 631.0], [40.7, 635.0], [40.8, 638.0], [40.9, 641.0], [41.0, 643.0], [41.1, 646.0], [41.2, 649.0], [41.3, 653.0], [41.4, 655.0], [41.5, 660.0], [41.6, 663.0], [41.7, 664.0], [41.8, 670.0], [41.9, 672.0], [42.0, 673.0], [42.1, 677.0], [42.2, 679.0], [42.3, 682.0], [42.4, 687.0], [42.5, 692.0], [42.6, 696.0], [42.7, 699.0], [42.8, 701.0], [42.9, 705.0], [43.0, 707.0], [43.1, 710.0], [43.2, 715.0], [43.3, 719.0], [43.4, 724.0], [43.5, 726.0], [43.6, 732.0], [43.7, 736.0], [43.8, 739.0], [43.9, 742.0], [44.0, 744.0], [44.1, 748.0], [44.2, 751.0], [44.3, 756.0], [44.4, 759.0], [44.5, 761.0], [44.6, 764.0], [44.7, 768.0], [44.8, 770.0], [44.9, 773.0], [45.0, 777.0], [45.1, 780.0], [45.2, 783.0], [45.3, 786.0], [45.4, 787.0], [45.5, 791.0], [45.6, 794.0], [45.7, 797.0], [45.8, 803.0], [45.9, 806.0], [46.0, 808.0], [46.1, 810.0], [46.2, 819.0], [46.3, 821.0], [46.4, 824.0], [46.5, 832.0], [46.6, 833.0], [46.7, 838.0], [46.8, 841.0], [46.9, 847.0], [47.0, 852.0], [47.1, 858.0], [47.2, 866.0], [47.3, 872.0], [47.4, 881.0], [47.5, 884.0], [47.6, 891.0], [47.7, 897.0], [47.8, 900.0], [47.9, 912.0], [48.0, 915.0], [48.1, 919.0], [48.2, 923.0], [48.3, 929.0], [48.4, 935.0], [48.5, 939.0], [48.6, 941.0], [48.7, 946.0], [48.8, 950.0], [48.9, 955.0], [49.0, 962.0], [49.1, 969.0], [49.2, 972.0], [49.3, 978.0], [49.4, 983.0], [49.5, 987.0], [49.6, 995.0], [49.7, 1000.0], [49.8, 1010.0], [49.9, 1014.0], [50.0, 1018.0], [50.1, 1022.0], [50.2, 1029.0], [50.3, 1037.0], [50.4, 1044.0], [50.5, 1051.0], [50.6, 1053.0], [50.7, 1058.0], [50.8, 1062.0], [50.9, 1067.0], [51.0, 1069.0], [51.1, 1077.0], [51.2, 1085.0], [51.3, 1088.0], [51.4, 1093.0], [51.5, 1100.0], [51.6, 1105.0], [51.7, 1111.0], [51.8, 1114.0], [51.9, 1121.0], [52.0, 1127.0], [52.1, 1134.0], [52.2, 1151.0], [52.3, 1155.0], [52.4, 1162.0], [52.5, 1164.0], [52.6, 1168.0], [52.7, 1173.0], [52.8, 1178.0], [52.9, 1181.0], [53.0, 1187.0], [53.1, 1197.0], [53.2, 1201.0], [53.3, 1207.0], [53.4, 1213.0], [53.5, 1220.0], [53.6, 1224.0], [53.7, 1225.0], [53.8, 1230.0], [53.9, 1240.0], [54.0, 1249.0], [54.1, 1252.0], [54.2, 1262.0], [54.3, 1272.0], [54.4, 1275.0], [54.5, 1285.0], [54.6, 1288.0], [54.7, 1296.0], [54.8, 1302.0], [54.9, 1306.0], [55.0, 1310.0], [55.1, 1313.0], [55.2, 1319.0], [55.3, 1324.0], [55.4, 1326.0], [55.5, 1335.0], [55.6, 1340.0], [55.7, 1343.0], [55.8, 1350.0], [55.9, 1359.0], [56.0, 1360.0], [56.1, 1368.0], [56.2, 1375.0], [56.3, 1379.0], [56.4, 1385.0], [56.5, 1392.0], [56.6, 1398.0], [56.7, 1402.0], [56.8, 1407.0], [56.9, 1409.0], [57.0, 1416.0], [57.1, 1421.0], [57.2, 1426.0], [57.3, 1437.0], [57.4, 1442.0], [57.5, 1445.0], [57.6, 1449.0], [57.7, 1456.0], [57.8, 1465.0], [57.9, 1472.0], [58.0, 1476.0], [58.1, 1483.0], [58.2, 1487.0], [58.3, 1492.0], [58.4, 1501.0], [58.5, 1509.0], [58.6, 1515.0], [58.7, 1519.0], [58.8, 1531.0], [58.9, 1535.0], [59.0, 1541.0], [59.1, 1545.0], [59.2, 1549.0], [59.3, 1554.0], [59.4, 1556.0], [59.5, 1565.0], [59.6, 1573.0], [59.7, 1578.0], [59.8, 1583.0], [59.9, 1590.0], [60.0, 1600.0], [60.1, 1608.0], [60.2, 1612.0], [60.3, 1617.0], [60.4, 1630.0], [60.5, 1643.0], [60.6, 1649.0], [60.7, 1657.0], [60.8, 1664.0], [60.9, 1666.0], [61.0, 1672.0], [61.1, 1684.0], [61.2, 1691.0], [61.3, 1698.0], [61.4, 1700.0], [61.5, 1706.0], [61.6, 1714.0], [61.7, 1724.0], [61.8, 1735.0], [61.9, 1741.0], [62.0, 1746.0], [62.1, 1756.0], [62.2, 1762.0], [62.3, 1766.0], [62.4, 1774.0], [62.5, 1778.0], [62.6, 1792.0], [62.7, 1804.0], [62.8, 1814.0], [62.9, 1818.0], [63.0, 1828.0], [63.1, 1831.0], [63.2, 1842.0], [63.3, 1847.0], [63.4, 1854.0], [63.5, 1858.0], [63.6, 1867.0], [63.7, 1883.0], [63.8, 1891.0], [63.9, 1895.0], [64.0, 1904.0], [64.1, 1914.0], [64.2, 1917.0], [64.3, 1921.0], [64.4, 1927.0], [64.5, 1935.0], [64.6, 1941.0], [64.7, 1948.0], [64.8, 1953.0], [64.9, 1956.0], [65.0, 1960.0], [65.1, 1963.0], [65.2, 1973.0], [65.3, 1978.0], [65.4, 1981.0], [65.5, 1982.0], [65.6, 1988.0], [65.7, 1993.0], [65.8, 2000.0], [65.9, 2002.0], [66.0, 2008.0], [66.1, 2015.0], [66.2, 2020.0], [66.3, 2023.0], [66.4, 2030.0], [66.5, 2033.0], [66.6, 2038.0], [66.7, 2043.0], [66.8, 2053.0], [66.9, 2057.0], [67.0, 2060.0], [67.1, 2062.0], [67.2, 2064.0], [67.3, 2069.0], [67.4, 2072.0], [67.5, 2075.0], [67.6, 2077.0], [67.7, 2080.0], [67.8, 2084.0], [67.9, 2086.0], [68.0, 2089.0], [68.1, 2095.0], [68.2, 2097.0], [68.3, 2100.0], [68.4, 2102.0], [68.5, 2105.0], [68.6, 2107.0], [68.7, 2109.0], [68.8, 2116.0], [68.9, 2121.0], [69.0, 2127.0], [69.1, 2133.0], [69.2, 2135.0], [69.3, 2140.0], [69.4, 2142.0], [69.5, 2145.0], [69.6, 2150.0], [69.7, 2155.0], [69.8, 2157.0], [69.9, 2159.0], [70.0, 2164.0], [70.1, 2169.0], [70.2, 2174.0], [70.3, 2176.0], [70.4, 2180.0], [70.5, 2183.0], [70.6, 2186.0], [70.7, 2190.0], [70.8, 2195.0], [70.9, 2197.0], [71.0, 2202.0], [71.1, 2207.0], [71.2, 2210.0], [71.3, 2213.0], [71.4, 2219.0], [71.5, 2223.0], [71.6, 2226.0], [71.7, 2231.0], [71.8, 2237.0], [71.9, 2239.0], [72.0, 2242.0], [72.1, 2246.0], [72.2, 2249.0], [72.3, 2252.0], [72.4, 2255.0], [72.5, 2260.0], [72.6, 2261.0], [72.7, 2267.0], [72.8, 2271.0], [72.9, 2275.0], [73.0, 2277.0], [73.1, 2280.0], [73.2, 2283.0], [73.3, 2291.0], [73.4, 2304.0], [73.5, 2310.0], [73.6, 2317.0], [73.7, 2322.0], [73.8, 2326.0], [73.9, 2330.0], [74.0, 2335.0], [74.1, 2340.0], [74.2, 2345.0], [74.3, 2354.0], [74.4, 2361.0], [74.5, 2369.0], [74.6, 2372.0], [74.7, 2377.0], [74.8, 2381.0], [74.9, 2385.0], [75.0, 2391.0], [75.1, 2393.0], [75.2, 2401.0], [75.3, 2413.0], [75.4, 2415.0], [75.5, 2418.0], [75.6, 2430.0], [75.7, 2434.0], [75.8, 2444.0], [75.9, 2451.0], [76.0, 2458.0], [76.1, 2463.0], [76.2, 2469.0], [76.3, 2474.0], [76.4, 2482.0], [76.5, 2488.0], [76.6, 2493.0], [76.7, 2496.0], [76.8, 2501.0], [76.9, 2508.0], [77.0, 2513.0], [77.1, 2520.0], [77.2, 2527.0], [77.3, 2536.0], [77.4, 2542.0], [77.5, 2550.0], [77.6, 2555.0], [77.7, 2559.0], [77.8, 2570.0], [77.9, 2580.0], [78.0, 2587.0], [78.1, 2594.0], [78.2, 2598.0], [78.3, 2604.0], [78.4, 2612.0], [78.5, 2619.0], [78.6, 2624.0], [78.7, 2629.0], [78.8, 2633.0], [78.9, 2635.0], [79.0, 2640.0], [79.1, 2648.0], [79.2, 2651.0], [79.3, 2654.0], [79.4, 2658.0], [79.5, 2662.0], [79.6, 2667.0], [79.7, 2673.0], [79.8, 2676.0], [79.9, 2681.0], [80.0, 2685.0], [80.1, 2696.0], [80.2, 2702.0], [80.3, 2706.0], [80.4, 2709.0], [80.5, 2713.0], [80.6, 2721.0], [80.7, 2725.0], [80.8, 2732.0], [80.9, 2735.0], [81.0, 2740.0], [81.1, 2744.0], [81.2, 2750.0], [81.3, 2758.0], [81.4, 2760.0], [81.5, 2764.0], [81.6, 2768.0], [81.7, 2772.0], [81.8, 2776.0], [81.9, 2781.0], [82.0, 2791.0], [82.1, 2794.0], [82.2, 2800.0], [82.3, 2817.0], [82.4, 2826.0], [82.5, 2832.0], [82.6, 2837.0], [82.7, 2843.0], [82.8, 2852.0], [82.9, 2864.0], [83.0, 2871.0], [83.1, 2881.0], [83.2, 2887.0], [83.3, 2897.0], [83.4, 2901.0], [83.5, 2908.0], [83.6, 2909.0], [83.7, 2914.0], [83.8, 2919.0], [83.9, 2931.0], [84.0, 2937.0], [84.1, 2939.0], [84.2, 2952.0], [84.3, 2957.0], [84.4, 2967.0], [84.5, 2977.0], [84.6, 2987.0], [84.7, 3003.0], [84.8, 3008.0], [84.9, 3013.0], [85.0, 3024.0], [85.1, 3026.0], [85.2, 3034.0], [85.3, 3040.0], [85.4, 3051.0], [85.5, 3059.0], [85.6, 3068.0], [85.7, 3078.0], [85.8, 3090.0], [85.9, 3095.0], [86.0, 3102.0], [86.1, 3115.0], [86.2, 3124.0], [86.3, 3130.0], [86.4, 3144.0], [86.5, 3158.0], [86.6, 3175.0], [86.7, 3181.0], [86.8, 3192.0], [86.9, 3205.0], [87.0, 3212.0], [87.1, 3217.0], [87.2, 3239.0], [87.3, 3249.0], [87.4, 3260.0], [87.5, 3278.0], [87.6, 3286.0], [87.7, 3304.0], [87.8, 3314.0], [87.9, 3325.0], [88.0, 3348.0], [88.1, 3354.0], [88.2, 3373.0], [88.3, 3378.0], [88.4, 3384.0], [88.5, 3409.0], [88.6, 3417.0], [88.7, 3427.0], [88.8, 3433.0], [88.9, 3454.0], [89.0, 3464.0], [89.1, 3467.0], [89.2, 3475.0], [89.3, 3484.0], [89.4, 3517.0], [89.5, 3525.0], [89.6, 3536.0], [89.7, 3545.0], [89.8, 3553.0], [89.9, 3559.0], [90.0, 3569.0], [90.1, 3578.0], [90.2, 3588.0], [90.3, 3597.0], [90.4, 3613.0], [90.5, 3623.0], [90.6, 3639.0], [90.7, 3659.0], [90.8, 3678.0], [90.9, 3702.0], [91.0, 3715.0], [91.1, 3756.0], [91.2, 3776.0], [91.3, 3799.0], [91.4, 3816.0], [91.5, 3838.0], [91.6, 3852.0], [91.7, 3859.0], [91.8, 3876.0], [91.9, 3888.0], [92.0, 3910.0], [92.1, 3920.0], [92.2, 3939.0], [92.3, 3947.0], [92.4, 3964.0], [92.5, 3983.0], [92.6, 3993.0], [92.7, 4017.0], [92.8, 4030.0], [92.9, 4058.0], [93.0, 4066.0], [93.1, 4075.0], [93.2, 4093.0], [93.3, 4108.0], [93.4, 4110.0], [93.5, 4121.0], [93.6, 4139.0], [93.7, 4152.0], [93.8, 4159.0], [93.9, 4175.0], [94.0, 4185.0], [94.1, 4209.0], [94.2, 4219.0], [94.3, 4230.0], [94.4, 4239.0], [94.5, 4257.0], [94.6, 4271.0], [94.7, 4287.0], [94.8, 4302.0], [94.9, 4305.0], [95.0, 4310.0], [95.1, 4317.0], [95.2, 4342.0], [95.3, 4357.0], [95.4, 4373.0], [95.5, 4390.0], [95.6, 4397.0], [95.7, 4418.0], [95.8, 4449.0], [95.9, 4466.0], [96.0, 4499.0], [96.1, 4509.0], [96.2, 4518.0], [96.3, 4540.0], [96.4, 4554.0], [96.5, 4629.0], [96.6, 4652.0], [96.7, 4690.0], [96.8, 4718.0], [96.9, 4821.0], [97.0, 4879.0], [97.1, 4933.0], [97.2, 4979.0], [97.3, 5021.0], [97.4, 5077.0], [97.5, 5114.0], [97.6, 5200.0], [97.7, 5286.0], [97.8, 5311.0], [97.9, 5423.0], [98.0, 5510.0], [98.1, 5568.0], [98.2, 5586.0], [98.3, 5746.0], [98.4, 5801.0], [98.5, 5940.0], [98.6, 5980.0], [98.7, 6160.0], [98.8, 6293.0], [98.9, 6485.0], [99.0, 6747.0], [99.1, 6904.0], [99.2, 7053.0], [99.3, 7184.0], [99.4, 7283.0], [99.5, 7526.0], [99.6, 7733.0], [99.7, 8072.0], [99.8, 9050.0], [99.9, 10128.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 576.0, "series": [{"data": [[0.0, 576.0], [600.0, 195.0], [700.0, 157.0], [800.0, 104.0], [900.0, 100.0], [1000.0, 94.0], [1100.0, 87.0], [1200.0, 84.0], [1300.0, 97.0], [1400.0, 90.0], [1500.0, 83.0], [1600.0, 71.0], [1700.0, 67.0], [1800.0, 67.0], [1900.0, 97.0], [2000.0, 129.0], [2100.0, 138.0], [2200.0, 126.0], [2300.0, 94.0], [2400.0, 82.0], [2500.0, 76.0], [2600.0, 101.0], [2700.0, 105.0], [2800.0, 61.0], [2900.0, 68.0], [3000.0, 67.0], [3100.0, 47.0], [3200.0, 42.0], [3300.0, 40.0], [3400.0, 46.0], [3500.0, 51.0], [3700.0, 23.0], [3600.0, 28.0], [3800.0, 32.0], [3900.0, 36.0], [4000.0, 34.0], [4200.0, 38.0], [4300.0, 43.0], [4100.0, 40.0], [4400.0, 21.0], [4600.0, 13.0], [4500.0, 24.0], [4800.0, 6.0], [4700.0, 9.0], [4900.0, 13.0], [5000.0, 10.0], [5100.0, 7.0], [5300.0, 6.0], [5200.0, 8.0], [5400.0, 7.0], [5500.0, 11.0], [5600.0, 4.0], [5800.0, 4.0], [5700.0, 5.0], [6100.0, 5.0], [5900.0, 8.0], [6000.0, 3.0], [6200.0, 2.0], [6300.0, 4.0], [6500.0, 4.0], [6600.0, 1.0], [6400.0, 1.0], [6800.0, 4.0], [6900.0, 2.0], [6700.0, 1.0], [7000.0, 4.0], [7100.0, 5.0], [7200.0, 6.0], [7400.0, 1.0], [7300.0, 2.0], [7500.0, 5.0], [7600.0, 1.0], [7700.0, 2.0], [7800.0, 2.0], [8000.0, 2.0], [8100.0, 1.0], [8200.0, 1.0], [8500.0, 1.0], [9200.0, 1.0], [8900.0, 1.0], [9000.0, 1.0], [9700.0, 1.0], [9400.0, 1.0], [9900.0, 1.0], [10100.0, 1.0], [11000.0, 1.0], [11500.0, 1.0], [11300.0, 1.0], [11700.0, 1.0], [13500.0, 1.0], [100.0, 485.0], [200.0, 346.0], [300.0, 220.0], [400.0, 164.0], [500.0, 231.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 13500.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 1235.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2160.0, "series": [{"data": [[0.0, 1795.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1235.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 2160.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.840425531914894, "minX": 1.60249284E12, "maxY": 10.0, "series": [{"data": [[1.60249302E12, 10.0], [1.60249332E12, 10.0], [1.60249362E12, 9.840425531914894], [1.60249296E12, 10.0], [1.60249308E12, 10.0], [1.60249338E12, 10.0], [1.6024935E12, 10.0], [1.60249284E12, 10.0], [1.60249314E12, 10.0], [1.60249344E12, 10.0], [1.60249326E12, 10.0], [1.60249356E12, 10.0], [1.6024929E12, 10.0], [1.6024932E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60249362E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 1521.7137618220404, "minX": 1.0, "maxY": 7035.0, "series": [{"data": [[8.0, 2346.0], [4.0, 2208.0], [2.0, 5307.0], [1.0, 3597.0], [9.0, 2510.0], [10.0, 1521.7137618220404], [5.0, 2725.0], [6.0, 2195.0], [3.0, 7035.0], [7.0, 2643.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.991329479768785, 1524.9643545279366]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 886.7833333333333, "minX": 1.60249284E12, "maxY": 2856251.8666666667, "series": [{"data": [[1.60249302E12, 2661718.05], [1.60249332E12, 2469392.8], [1.60249362E12, 2211696.8333333335], [1.60249296E12, 2390039.55], [1.60249308E12, 2382741.55], [1.60249338E12, 2590687.3666666667], [1.6024935E12, 2653869.2666666666], [1.60249284E12, 1102744.55], [1.60249314E12, 2829834.9833333334], [1.60249344E12, 2428718.1166666667], [1.60249326E12, 2856251.8666666667], [1.60249356E12, 2785208.9], [1.6024929E12, 2756282.4833333334], [1.6024932E12, 2793849.5]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60249302E12, 1877.0833333333333], [1.60249332E12, 2545.9166666666665], [1.60249362E12, 1961.45], [1.60249296E12, 3060.6666666666665], [1.60249308E12, 2383.616666666667], [1.60249338E12, 3318.4333333333334], [1.6024935E12, 3019.9], [1.60249284E12, 886.7833333333333], [1.60249314E12, 2863.15], [1.60249344E12, 1707.25], [1.60249326E12, 2481.5], [1.60249356E12, 3234.2166666666667], [1.6024929E12, 2710.5833333333335], [1.6024932E12, 3093.2166666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60249362E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 1187.2679999999998, "minX": 1.60249284E12, "maxY": 2348.378906249999, "series": [{"data": [[1.60249302E12, 2138.1153846153848], [1.60249332E12, 1580.8429319371735], [1.60249362E12, 1645.2659574468087], [1.60249296E12, 1278.1531728665198], [1.60249308E12, 1737.7188405797092], [1.60249338E12, 1187.2679999999998], [1.6024935E12, 1376.0686498855832], [1.60249284E12, 1946.1278195488712], [1.60249314E12, 1459.7077294685992], [1.60249344E12, 2348.378906249999], [1.60249326E12, 1574.513368983958], [1.60249356E12, 1289.9334763948495], [1.6024929E12, 1464.0920096852308], [1.6024932E12, 1342.9797752808988]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60249362E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 1185.2280000000007, "minX": 1.60249284E12, "maxY": 2345.01953125, "series": [{"data": [[1.60249302E12, 2133.81118881119], [1.60249332E12, 1578.4607329842927], [1.60249362E12, 1642.2269503546095], [1.60249296E12, 1275.5995623632386], [1.60249308E12, 1734.173913043478], [1.60249338E12, 1185.2280000000007], [1.6024935E12, 1373.7505720823806], [1.60249284E12, 1941.9172932330823], [1.60249314E12, 1457.0893719806777], [1.60249344E12, 2345.01953125], [1.60249326E12, 1571.6844919786108], [1.60249356E12, 1287.6802575107286], [1.6024929E12, 1460.8692493946728], [1.6024932E12, 1340.5797752808992]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60249362E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.60249284E12, "maxY": 1.2406015037593976, "series": [{"data": [[1.60249302E12, 0.038461538461538464], [1.60249332E12, 0.023560209424083763], [1.60249362E12, 0.0], [1.60249296E12, 0.024070021881838065], [1.60249308E12, 0.03478260869565214], [1.60249338E12, 0.04800000000000001], [1.6024935E12, 0.020594965675057197], [1.60249284E12, 1.2406015037593976], [1.60249314E12, 0.024154589371980686], [1.60249344E12, 0.046874999999999986], [1.60249326E12, 0.037433155080213915], [1.60249356E12, 0.03218884120171672], [1.6024929E12, 0.021791767554479417], [1.6024932E12, 0.029213483146067393]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60249362E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 5.0, "minX": 1.60249284E12, "maxY": 13544.0, "series": [{"data": [[1.60249302E12, 8072.0], [1.60249332E12, 7607.0], [1.60249362E12, 7035.0], [1.60249296E12, 11549.0], [1.60249308E12, 10128.0], [1.60249338E12, 11710.0], [1.6024935E12, 7283.0], [1.60249284E12, 9725.0], [1.60249314E12, 13544.0], [1.60249344E12, 9491.0], [1.60249326E12, 6193.0], [1.60249356E12, 7369.0], [1.6024929E12, 5873.0], [1.6024932E12, 7551.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60249302E12, 22.582999931573866], [1.60249332E12, 31.916998995542528], [1.60249362E12, 23.640999797582626], [1.60249296E12, 15.12199989080429], [1.60249308E12, 13.113999917507172], [1.60249338E12, 17.035999522209167], [1.6024935E12, 6.941999895572662], [1.60249284E12, 20.411999936103822], [1.60249314E12, 10.73499990105629], [1.60249344E12, 15.2519997549057], [1.60249326E12, 18.374999910593033], [1.60249356E12, 12.202999888658525], [1.6024929E12, 27.629999506473542], [1.6024932E12, 21.04199968099594]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60249302E12, 22.84130002737045], [1.60249332E12, 35.70870040178299], [1.60249362E12, 24.40510008096695], [1.60249296E12, 15.534200043678283], [1.60249308E12, 13.425400032997132], [1.60249338E12, 18.839600191116332], [1.6024935E12, 7.0], [1.60249284E12, 20.653200025558473], [1.60249314E12, 11.0], [1.60249344E12, 16.17720009803772], [1.60249326E12, 18.712500035762787], [1.60249356E12, 12.623300044536592], [1.6024929E12, 29.887400355339047], [1.6024932E12, 22.24620012760162]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60249302E12, 22.726499965786935], [1.60249332E12, 34.02349949777126], [1.60249362E12, 24.065499898791312], [1.60249296E12, 15.350999945402144], [1.60249308E12, 13.286999958753587], [1.60249338E12, 18.037999761104583], [1.6024935E12, 7.0], [1.60249284E12, 20.54599996805191], [1.60249314E12, 10.942499950528145], [1.60249344E12, 15.765999877452849], [1.60249326E12, 18.562499955296516], [1.60249356E12, 12.436499944329261], [1.6024929E12, 28.66499975323677], [1.6024932E12, 21.71099984049797]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60249302E12, 15.0], [1.60249332E12, 18.0], [1.60249362E12, 18.0], [1.60249296E12, 12.0], [1.60249308E12, 7.0], [1.60249338E12, 12.0], [1.6024935E12, 5.0], [1.60249284E12, 20.0], [1.60249314E12, 7.0], [1.60249344E12, 10.0], [1.60249326E12, 13.0], [1.60249356E12, 11.0], [1.6024929E12, 10.0], [1.6024932E12, 13.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60249302E12, 2194.0], [1.60249332E12, 1480.0], [1.60249362E12, 1433.5], [1.60249296E12, 713.0], [1.60249308E12, 1058.0], [1.60249338E12, 561.5], [1.6024935E12, 741.0], [1.60249284E12, 1369.0], [1.60249314E12, 739.0], [1.60249344E12, 2321.0], [1.60249326E12, 1443.0], [1.60249356E12, 758.0], [1.6024929E12, 1315.0], [1.6024932E12, 919.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60249362E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 151.5, "minX": 1.0, "maxY": 2498.0, "series": [{"data": [[2.0, 2498.0], [3.0, 2297.0], [4.0, 2228.5], [5.0, 2034.0], [6.0, 1695.5], [7.0, 1512.0], [8.0, 986.5], [9.0, 849.5], [10.0, 670.5], [11.0, 548.5], [12.0, 432.0], [13.0, 410.0], [14.0, 430.5], [15.0, 230.0], [1.0, 2256.0], [16.0, 209.5], [17.0, 315.0], [18.0, 324.0], [20.0, 151.5], [21.0, 214.0], [22.0, 217.0], [23.0, 232.0], [24.0, 283.0], [25.0, 213.5], [26.0, 181.5], [29.0, 235.0], [30.0, 260.0], [31.0, 199.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 31.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 149.0, "minX": 1.0, "maxY": 2494.0, "series": [{"data": [[2.0, 2494.0], [3.0, 2293.5], [4.0, 2224.5], [5.0, 2030.0], [6.0, 1692.0], [7.0, 1509.0], [8.0, 984.5], [9.0, 847.5], [10.0, 667.5], [11.0, 545.5], [12.0, 431.0], [13.0, 407.0], [14.0, 428.5], [15.0, 227.0], [1.0, 2253.5], [16.0, 206.5], [17.0, 313.0], [18.0, 323.0], [20.0, 149.0], [21.0, 213.0], [22.0, 215.0], [23.0, 232.0], [24.0, 267.0], [25.0, 211.0], [26.0, 177.5], [29.0, 235.0], [30.0, 258.0], [31.0, 198.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 31.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 2.3833333333333333, "minX": 1.60249284E12, "maxY": 8.333333333333334, "series": [{"data": [[1.60249302E12, 4.766666666666667], [1.60249332E12, 6.366666666666666], [1.60249362E12, 4.533333333333333], [1.60249296E12, 7.616666666666666], [1.60249308E12, 5.75], [1.60249338E12, 8.333333333333334], [1.6024935E12, 7.283333333333333], [1.60249284E12, 2.3833333333333333], [1.60249314E12, 6.9], [1.60249344E12, 4.266666666666667], [1.60249326E12, 6.233333333333333], [1.60249356E12, 7.766666666666667], [1.6024929E12, 6.883333333333334], [1.6024932E12, 7.416666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60249362E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 2.216666666666667, "minX": 1.60249284E12, "maxY": 8.333333333333334, "series": [{"data": [[1.60249302E12, 4.766666666666667], [1.60249332E12, 6.366666666666666], [1.60249362E12, 4.7], [1.60249296E12, 7.616666666666666], [1.60249308E12, 5.75], [1.60249338E12, 8.333333333333334], [1.6024935E12, 7.283333333333333], [1.60249284E12, 2.216666666666667], [1.60249314E12, 6.9], [1.60249344E12, 4.266666666666667], [1.60249326E12, 6.233333333333333], [1.60249356E12, 7.766666666666667], [1.6024929E12, 6.883333333333334], [1.6024932E12, 7.416666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60249362E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 2.216666666666667, "minX": 1.60249284E12, "maxY": 8.333333333333334, "series": [{"data": [[1.60249302E12, 4.766666666666667], [1.60249332E12, 6.366666666666666], [1.60249362E12, 4.7], [1.60249296E12, 7.616666666666666], [1.60249308E12, 5.75], [1.60249338E12, 8.333333333333334], [1.6024935E12, 7.283333333333333], [1.60249284E12, 2.216666666666667], [1.60249314E12, 6.9], [1.60249344E12, 4.266666666666667], [1.60249326E12, 6.233333333333333], [1.60249356E12, 7.766666666666667], [1.6024929E12, 6.883333333333334], [1.6024932E12, 7.416666666666667]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60249362E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 2.216666666666667, "minX": 1.60249284E12, "maxY": 8.333333333333334, "series": [{"data": [[1.60249302E12, 4.766666666666667], [1.60249332E12, 6.366666666666666], [1.60249362E12, 4.7], [1.60249296E12, 7.616666666666666], [1.60249308E12, 5.75], [1.60249338E12, 8.333333333333334], [1.6024935E12, 7.283333333333333], [1.60249284E12, 2.216666666666667], [1.60249314E12, 6.9], [1.60249344E12, 4.266666666666667], [1.60249326E12, 6.233333333333333], [1.60249356E12, 7.766666666666667], [1.6024929E12, 6.883333333333334], [1.6024932E12, 7.416666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60249362E12, "title": "Total Transactions Per Second"}},
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

