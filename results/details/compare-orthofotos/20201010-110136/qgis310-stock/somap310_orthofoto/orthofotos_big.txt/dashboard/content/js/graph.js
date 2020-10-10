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
        data: {"result": {"minY": 5.0, "minX": 0.0, "maxY": 10969.0, "series": [{"data": [[0.0, 5.0], [0.1, 8.0], [0.2, 9.0], [0.3, 11.0], [0.4, 11.0], [0.5, 12.0], [0.6, 12.0], [0.7, 13.0], [0.8, 13.0], [0.9, 14.0], [1.0, 14.0], [1.1, 15.0], [1.2, 16.0], [1.3, 16.0], [1.4, 17.0], [1.5, 17.0], [1.6, 18.0], [1.7, 18.0], [1.8, 19.0], [1.9, 19.0], [2.0, 20.0], [2.1, 20.0], [2.2, 20.0], [2.3, 21.0], [2.4, 21.0], [2.5, 22.0], [2.6, 23.0], [2.7, 23.0], [2.8, 24.0], [2.9, 25.0], [3.0, 26.0], [3.1, 27.0], [3.2, 28.0], [3.3, 29.0], [3.4, 30.0], [3.5, 31.0], [3.6, 32.0], [3.7, 34.0], [3.8, 36.0], [3.9, 37.0], [4.0, 37.0], [4.1, 38.0], [4.2, 38.0], [4.3, 38.0], [4.4, 39.0], [4.5, 40.0], [4.6, 41.0], [4.7, 42.0], [4.8, 42.0], [4.9, 43.0], [5.0, 44.0], [5.1, 45.0], [5.2, 45.0], [5.3, 46.0], [5.4, 48.0], [5.5, 49.0], [5.6, 50.0], [5.7, 50.0], [5.8, 52.0], [5.9, 53.0], [6.0, 53.0], [6.1, 54.0], [6.2, 54.0], [6.3, 56.0], [6.4, 57.0], [6.5, 58.0], [6.6, 59.0], [6.7, 60.0], [6.8, 61.0], [6.9, 61.0], [7.0, 62.0], [7.1, 63.0], [7.2, 64.0], [7.3, 65.0], [7.4, 65.0], [7.5, 66.0], [7.6, 66.0], [7.7, 68.0], [7.8, 69.0], [7.9, 71.0], [8.0, 73.0], [8.1, 74.0], [8.2, 76.0], [8.3, 77.0], [8.4, 79.0], [8.5, 81.0], [8.6, 82.0], [8.7, 82.0], [8.8, 83.0], [8.9, 84.0], [9.0, 85.0], [9.1, 86.0], [9.2, 87.0], [9.3, 88.0], [9.4, 89.0], [9.5, 90.0], [9.6, 90.0], [9.7, 91.0], [9.8, 91.0], [9.9, 92.0], [10.0, 92.0], [10.1, 93.0], [10.2, 93.0], [10.3, 93.0], [10.4, 94.0], [10.5, 95.0], [10.6, 95.0], [10.7, 96.0], [10.8, 97.0], [10.9, 97.0], [11.0, 98.0], [11.1, 99.0], [11.2, 99.0], [11.3, 100.0], [11.4, 101.0], [11.5, 102.0], [11.6, 102.0], [11.7, 104.0], [11.8, 105.0], [11.9, 105.0], [12.0, 106.0], [12.1, 107.0], [12.2, 107.0], [12.3, 107.0], [12.4, 108.0], [12.5, 109.0], [12.6, 110.0], [12.7, 110.0], [12.8, 111.0], [12.9, 112.0], [13.0, 113.0], [13.1, 114.0], [13.2, 115.0], [13.3, 116.0], [13.4, 117.0], [13.5, 117.0], [13.6, 118.0], [13.7, 119.0], [13.8, 120.0], [13.9, 121.0], [14.0, 121.0], [14.1, 123.0], [14.2, 124.0], [14.3, 124.0], [14.4, 125.0], [14.5, 126.0], [14.6, 126.0], [14.7, 127.0], [14.8, 128.0], [14.9, 129.0], [15.0, 129.0], [15.1, 130.0], [15.2, 132.0], [15.3, 133.0], [15.4, 134.0], [15.5, 134.0], [15.6, 135.0], [15.7, 136.0], [15.8, 139.0], [15.9, 139.0], [16.0, 140.0], [16.1, 141.0], [16.2, 142.0], [16.3, 144.0], [16.4, 145.0], [16.5, 145.0], [16.6, 146.0], [16.7, 149.0], [16.8, 151.0], [16.9, 152.0], [17.0, 153.0], [17.1, 155.0], [17.2, 156.0], [17.3, 159.0], [17.4, 160.0], [17.5, 161.0], [17.6, 163.0], [17.7, 163.0], [17.8, 164.0], [17.9, 166.0], [18.0, 166.0], [18.1, 168.0], [18.2, 169.0], [18.3, 170.0], [18.4, 171.0], [18.5, 173.0], [18.6, 174.0], [18.7, 174.0], [18.8, 176.0], [18.9, 177.0], [19.0, 177.0], [19.1, 178.0], [19.2, 179.0], [19.3, 180.0], [19.4, 181.0], [19.5, 182.0], [19.6, 182.0], [19.7, 183.0], [19.8, 184.0], [19.9, 184.0], [20.0, 185.0], [20.1, 186.0], [20.2, 186.0], [20.3, 187.0], [20.4, 188.0], [20.5, 189.0], [20.6, 190.0], [20.7, 191.0], [20.8, 193.0], [20.9, 193.0], [21.0, 195.0], [21.1, 196.0], [21.2, 197.0], [21.3, 198.0], [21.4, 198.0], [21.5, 200.0], [21.6, 201.0], [21.7, 201.0], [21.8, 204.0], [21.9, 205.0], [22.0, 207.0], [22.1, 209.0], [22.2, 209.0], [22.3, 210.0], [22.4, 212.0], [22.5, 213.0], [22.6, 214.0], [22.7, 215.0], [22.8, 217.0], [22.9, 217.0], [23.0, 219.0], [23.1, 220.0], [23.2, 222.0], [23.3, 223.0], [23.4, 225.0], [23.5, 226.0], [23.6, 229.0], [23.7, 232.0], [23.8, 234.0], [23.9, 235.0], [24.0, 238.0], [24.1, 240.0], [24.2, 242.0], [24.3, 244.0], [24.4, 246.0], [24.5, 247.0], [24.6, 249.0], [24.7, 251.0], [24.8, 253.0], [24.9, 255.0], [25.0, 256.0], [25.1, 258.0], [25.2, 260.0], [25.3, 263.0], [25.4, 264.0], [25.5, 266.0], [25.6, 267.0], [25.7, 268.0], [25.8, 270.0], [25.9, 271.0], [26.0, 272.0], [26.1, 275.0], [26.2, 276.0], [26.3, 279.0], [26.4, 280.0], [26.5, 280.0], [26.6, 283.0], [26.7, 284.0], [26.8, 287.0], [26.9, 289.0], [27.0, 292.0], [27.1, 294.0], [27.2, 296.0], [27.3, 299.0], [27.4, 300.0], [27.5, 305.0], [27.6, 306.0], [27.7, 308.0], [27.8, 310.0], [27.9, 311.0], [28.0, 311.0], [28.1, 312.0], [28.2, 315.0], [28.3, 316.0], [28.4, 319.0], [28.5, 320.0], [28.6, 323.0], [28.7, 326.0], [28.8, 328.0], [28.9, 329.0], [29.0, 332.0], [29.1, 336.0], [29.2, 340.0], [29.3, 343.0], [29.4, 345.0], [29.5, 346.0], [29.6, 348.0], [29.7, 350.0], [29.8, 353.0], [29.9, 355.0], [30.0, 360.0], [30.1, 362.0], [30.2, 365.0], [30.3, 366.0], [30.4, 371.0], [30.5, 374.0], [30.6, 376.0], [30.7, 377.0], [30.8, 379.0], [30.9, 382.0], [31.0, 386.0], [31.1, 389.0], [31.2, 392.0], [31.3, 395.0], [31.4, 398.0], [31.5, 402.0], [31.6, 406.0], [31.7, 406.0], [31.8, 412.0], [31.9, 413.0], [32.0, 418.0], [32.1, 421.0], [32.2, 425.0], [32.3, 428.0], [32.4, 430.0], [32.5, 432.0], [32.6, 436.0], [32.7, 440.0], [32.8, 447.0], [32.9, 448.0], [33.0, 451.0], [33.1, 452.0], [33.2, 454.0], [33.3, 456.0], [33.4, 459.0], [33.5, 460.0], [33.6, 463.0], [33.7, 466.0], [33.8, 470.0], [33.9, 472.0], [34.0, 474.0], [34.1, 477.0], [34.2, 483.0], [34.3, 486.0], [34.4, 487.0], [34.5, 488.0], [34.6, 491.0], [34.7, 492.0], [34.8, 494.0], [34.9, 495.0], [35.0, 498.0], [35.1, 500.0], [35.2, 501.0], [35.3, 502.0], [35.4, 504.0], [35.5, 508.0], [35.6, 511.0], [35.7, 513.0], [35.8, 514.0], [35.9, 515.0], [36.0, 518.0], [36.1, 519.0], [36.2, 522.0], [36.3, 525.0], [36.4, 531.0], [36.5, 537.0], [36.6, 539.0], [36.7, 543.0], [36.8, 546.0], [36.9, 547.0], [37.0, 550.0], [37.1, 552.0], [37.2, 553.0], [37.3, 554.0], [37.4, 556.0], [37.5, 559.0], [37.6, 561.0], [37.7, 563.0], [37.8, 563.0], [37.9, 564.0], [38.0, 566.0], [38.1, 567.0], [38.2, 568.0], [38.3, 571.0], [38.4, 573.0], [38.5, 574.0], [38.6, 576.0], [38.7, 577.0], [38.8, 579.0], [38.9, 580.0], [39.0, 582.0], [39.1, 583.0], [39.2, 585.0], [39.3, 587.0], [39.4, 589.0], [39.5, 591.0], [39.6, 592.0], [39.7, 596.0], [39.8, 598.0], [39.9, 599.0], [40.0, 600.0], [40.1, 604.0], [40.2, 605.0], [40.3, 607.0], [40.4, 609.0], [40.5, 613.0], [40.6, 615.0], [40.7, 619.0], [40.8, 621.0], [40.9, 625.0], [41.0, 627.0], [41.1, 629.0], [41.2, 631.0], [41.3, 633.0], [41.4, 636.0], [41.5, 637.0], [41.6, 640.0], [41.7, 641.0], [41.8, 644.0], [41.9, 645.0], [42.0, 647.0], [42.1, 650.0], [42.2, 654.0], [42.3, 656.0], [42.4, 658.0], [42.5, 659.0], [42.6, 662.0], [42.7, 667.0], [42.8, 668.0], [42.9, 672.0], [43.0, 675.0], [43.1, 678.0], [43.2, 680.0], [43.3, 681.0], [43.4, 684.0], [43.5, 687.0], [43.6, 690.0], [43.7, 693.0], [43.8, 698.0], [43.9, 700.0], [44.0, 703.0], [44.1, 706.0], [44.2, 709.0], [44.3, 711.0], [44.4, 713.0], [44.5, 717.0], [44.6, 719.0], [44.7, 722.0], [44.8, 724.0], [44.9, 729.0], [45.0, 733.0], [45.1, 737.0], [45.2, 740.0], [45.3, 743.0], [45.4, 746.0], [45.5, 751.0], [45.6, 760.0], [45.7, 762.0], [45.8, 767.0], [45.9, 773.0], [46.0, 777.0], [46.1, 783.0], [46.2, 786.0], [46.3, 788.0], [46.4, 793.0], [46.5, 797.0], [46.6, 800.0], [46.7, 807.0], [46.8, 810.0], [46.9, 815.0], [47.0, 815.0], [47.1, 825.0], [47.2, 831.0], [47.3, 834.0], [47.4, 837.0], [47.5, 840.0], [47.6, 844.0], [47.7, 849.0], [47.8, 854.0], [47.9, 863.0], [48.0, 866.0], [48.1, 871.0], [48.2, 873.0], [48.3, 874.0], [48.4, 877.0], [48.5, 884.0], [48.6, 885.0], [48.7, 896.0], [48.8, 902.0], [48.9, 907.0], [49.0, 909.0], [49.1, 914.0], [49.2, 921.0], [49.3, 928.0], [49.4, 932.0], [49.5, 935.0], [49.6, 940.0], [49.7, 944.0], [49.8, 954.0], [49.9, 958.0], [50.0, 966.0], [50.1, 972.0], [50.2, 976.0], [50.3, 984.0], [50.4, 989.0], [50.5, 998.0], [50.6, 1003.0], [50.7, 1006.0], [50.8, 1016.0], [50.9, 1022.0], [51.0, 1027.0], [51.1, 1032.0], [51.2, 1044.0], [51.3, 1049.0], [51.4, 1052.0], [51.5, 1055.0], [51.6, 1063.0], [51.7, 1066.0], [51.8, 1073.0], [51.9, 1077.0], [52.0, 1087.0], [52.1, 1091.0], [52.2, 1098.0], [52.3, 1105.0], [52.4, 1110.0], [52.5, 1115.0], [52.6, 1123.0], [52.7, 1129.0], [52.8, 1137.0], [52.9, 1145.0], [53.0, 1152.0], [53.1, 1159.0], [53.2, 1162.0], [53.3, 1167.0], [53.4, 1173.0], [53.5, 1181.0], [53.6, 1188.0], [53.7, 1195.0], [53.8, 1198.0], [53.9, 1205.0], [54.0, 1213.0], [54.1, 1216.0], [54.2, 1221.0], [54.3, 1227.0], [54.4, 1241.0], [54.5, 1248.0], [54.6, 1254.0], [54.7, 1256.0], [54.8, 1258.0], [54.9, 1265.0], [55.0, 1271.0], [55.1, 1275.0], [55.2, 1277.0], [55.3, 1285.0], [55.4, 1291.0], [55.5, 1296.0], [55.6, 1302.0], [55.7, 1307.0], [55.8, 1309.0], [55.9, 1314.0], [56.0, 1318.0], [56.1, 1332.0], [56.2, 1335.0], [56.3, 1337.0], [56.4, 1341.0], [56.5, 1345.0], [56.6, 1350.0], [56.7, 1352.0], [56.8, 1354.0], [56.9, 1356.0], [57.0, 1363.0], [57.1, 1368.0], [57.2, 1372.0], [57.3, 1375.0], [57.4, 1385.0], [57.5, 1391.0], [57.6, 1400.0], [57.7, 1408.0], [57.8, 1413.0], [57.9, 1419.0], [58.0, 1431.0], [58.1, 1433.0], [58.2, 1437.0], [58.3, 1440.0], [58.4, 1445.0], [58.5, 1450.0], [58.6, 1459.0], [58.7, 1465.0], [58.8, 1467.0], [58.9, 1477.0], [59.0, 1483.0], [59.1, 1488.0], [59.2, 1492.0], [59.3, 1496.0], [59.4, 1500.0], [59.5, 1503.0], [59.6, 1511.0], [59.7, 1513.0], [59.8, 1518.0], [59.9, 1526.0], [60.0, 1530.0], [60.1, 1539.0], [60.2, 1541.0], [60.3, 1544.0], [60.4, 1548.0], [60.5, 1550.0], [60.6, 1556.0], [60.7, 1560.0], [60.8, 1569.0], [60.9, 1580.0], [61.0, 1583.0], [61.1, 1594.0], [61.2, 1600.0], [61.3, 1611.0], [61.4, 1618.0], [61.5, 1621.0], [61.6, 1626.0], [61.7, 1630.0], [61.8, 1635.0], [61.9, 1643.0], [62.0, 1648.0], [62.1, 1650.0], [62.2, 1655.0], [62.3, 1674.0], [62.4, 1678.0], [62.5, 1680.0], [62.6, 1687.0], [62.7, 1695.0], [62.8, 1701.0], [62.9, 1713.0], [63.0, 1722.0], [63.1, 1727.0], [63.2, 1737.0], [63.3, 1743.0], [63.4, 1750.0], [63.5, 1758.0], [63.6, 1762.0], [63.7, 1769.0], [63.8, 1773.0], [63.9, 1781.0], [64.0, 1786.0], [64.1, 1794.0], [64.2, 1812.0], [64.3, 1820.0], [64.4, 1829.0], [64.5, 1841.0], [64.6, 1844.0], [64.7, 1856.0], [64.8, 1866.0], [64.9, 1874.0], [65.0, 1884.0], [65.1, 1888.0], [65.2, 1895.0], [65.3, 1908.0], [65.4, 1911.0], [65.5, 1919.0], [65.6, 1928.0], [65.7, 1932.0], [65.8, 1936.0], [65.9, 1943.0], [66.0, 1945.0], [66.1, 1949.0], [66.2, 1952.0], [66.3, 1954.0], [66.4, 1961.0], [66.5, 1966.0], [66.6, 1968.0], [66.7, 1970.0], [66.8, 1973.0], [66.9, 1977.0], [67.0, 1981.0], [67.1, 1985.0], [67.2, 1991.0], [67.3, 1996.0], [67.4, 1998.0], [67.5, 2002.0], [67.6, 2007.0], [67.7, 2008.0], [67.8, 2012.0], [67.9, 2013.0], [68.0, 2016.0], [68.1, 2017.0], [68.2, 2020.0], [68.3, 2022.0], [68.4, 2025.0], [68.5, 2026.0], [68.6, 2030.0], [68.7, 2036.0], [68.8, 2037.0], [68.9, 2040.0], [69.0, 2042.0], [69.1, 2044.0], [69.2, 2046.0], [69.3, 2050.0], [69.4, 2053.0], [69.5, 2055.0], [69.6, 2058.0], [69.7, 2064.0], [69.8, 2066.0], [69.9, 2070.0], [70.0, 2073.0], [70.1, 2077.0], [70.2, 2081.0], [70.3, 2085.0], [70.4, 2087.0], [70.5, 2092.0], [70.6, 2097.0], [70.7, 2100.0], [70.8, 2102.0], [70.9, 2105.0], [71.0, 2108.0], [71.1, 2112.0], [71.2, 2117.0], [71.3, 2120.0], [71.4, 2123.0], [71.5, 2128.0], [71.6, 2133.0], [71.7, 2135.0], [71.8, 2140.0], [71.9, 2143.0], [72.0, 2145.0], [72.1, 2151.0], [72.2, 2155.0], [72.3, 2157.0], [72.4, 2163.0], [72.5, 2166.0], [72.6, 2174.0], [72.7, 2176.0], [72.8, 2182.0], [72.9, 2188.0], [73.0, 2191.0], [73.1, 2193.0], [73.2, 2200.0], [73.3, 2207.0], [73.4, 2211.0], [73.5, 2216.0], [73.6, 2219.0], [73.7, 2223.0], [73.8, 2228.0], [73.9, 2233.0], [74.0, 2236.0], [74.1, 2242.0], [74.2, 2246.0], [74.3, 2250.0], [74.4, 2256.0], [74.5, 2259.0], [74.6, 2271.0], [74.7, 2277.0], [74.8, 2281.0], [74.9, 2286.0], [75.0, 2293.0], [75.1, 2299.0], [75.2, 2303.0], [75.3, 2305.0], [75.4, 2310.0], [75.5, 2321.0], [75.6, 2330.0], [75.7, 2334.0], [75.8, 2338.0], [75.9, 2344.0], [76.0, 2352.0], [76.1, 2359.0], [76.2, 2367.0], [76.3, 2372.0], [76.4, 2381.0], [76.5, 2398.0], [76.6, 2401.0], [76.7, 2405.0], [76.8, 2413.0], [76.9, 2415.0], [77.0, 2419.0], [77.1, 2425.0], [77.2, 2435.0], [77.3, 2441.0], [77.4, 2452.0], [77.5, 2459.0], [77.6, 2468.0], [77.7, 2472.0], [77.8, 2476.0], [77.9, 2481.0], [78.0, 2487.0], [78.1, 2497.0], [78.2, 2503.0], [78.3, 2510.0], [78.4, 2515.0], [78.5, 2518.0], [78.6, 2522.0], [78.7, 2523.0], [78.8, 2528.0], [78.9, 2533.0], [79.0, 2536.0], [79.1, 2542.0], [79.2, 2546.0], [79.3, 2549.0], [79.4, 2551.0], [79.5, 2558.0], [79.6, 2565.0], [79.7, 2569.0], [79.8, 2572.0], [79.9, 2576.0], [80.0, 2579.0], [80.1, 2587.0], [80.2, 2592.0], [80.3, 2596.0], [80.4, 2602.0], [80.5, 2606.0], [80.6, 2613.0], [80.7, 2617.0], [80.8, 2625.0], [80.9, 2629.0], [81.0, 2632.0], [81.1, 2639.0], [81.2, 2646.0], [81.3, 2657.0], [81.4, 2664.0], [81.5, 2671.0], [81.6, 2677.0], [81.7, 2682.0], [81.8, 2685.0], [81.9, 2691.0], [82.0, 2696.0], [82.1, 2701.0], [82.2, 2712.0], [82.3, 2717.0], [82.4, 2722.0], [82.5, 2725.0], [82.6, 2731.0], [82.7, 2738.0], [82.8, 2747.0], [82.9, 2754.0], [83.0, 2760.0], [83.1, 2764.0], [83.2, 2770.0], [83.3, 2778.0], [83.4, 2782.0], [83.5, 2788.0], [83.6, 2796.0], [83.7, 2800.0], [83.8, 2806.0], [83.9, 2820.0], [84.0, 2828.0], [84.1, 2838.0], [84.2, 2846.0], [84.3, 2857.0], [84.4, 2861.0], [84.5, 2867.0], [84.6, 2868.0], [84.7, 2872.0], [84.8, 2877.0], [84.9, 2886.0], [85.0, 2892.0], [85.1, 2898.0], [85.2, 2903.0], [85.3, 2914.0], [85.4, 2919.0], [85.5, 2926.0], [85.6, 2931.0], [85.7, 2940.0], [85.8, 2950.0], [85.9, 2958.0], [86.0, 2967.0], [86.1, 2976.0], [86.2, 2983.0], [86.3, 2993.0], [86.4, 2999.0], [86.5, 3003.0], [86.6, 3010.0], [86.7, 3022.0], [86.8, 3030.0], [86.9, 3042.0], [87.0, 3054.0], [87.1, 3073.0], [87.2, 3082.0], [87.3, 3089.0], [87.4, 3100.0], [87.5, 3118.0], [87.6, 3123.0], [87.7, 3146.0], [87.8, 3157.0], [87.9, 3162.0], [88.0, 3174.0], [88.1, 3182.0], [88.2, 3197.0], [88.3, 3219.0], [88.4, 3238.0], [88.5, 3249.0], [88.6, 3254.0], [88.7, 3271.0], [88.8, 3286.0], [88.9, 3300.0], [89.0, 3312.0], [89.1, 3324.0], [89.2, 3328.0], [89.3, 3353.0], [89.4, 3368.0], [89.5, 3389.0], [89.6, 3402.0], [89.7, 3417.0], [89.8, 3428.0], [89.9, 3440.0], [90.0, 3452.0], [90.1, 3460.0], [90.2, 3475.0], [90.3, 3494.0], [90.4, 3504.0], [90.5, 3513.0], [90.6, 3521.0], [90.7, 3533.0], [90.8, 3553.0], [90.9, 3564.0], [91.0, 3569.0], [91.1, 3587.0], [91.2, 3610.0], [91.3, 3625.0], [91.4, 3634.0], [91.5, 3648.0], [91.6, 3666.0], [91.7, 3679.0], [91.8, 3698.0], [91.9, 3723.0], [92.0, 3750.0], [92.1, 3763.0], [92.2, 3786.0], [92.3, 3800.0], [92.4, 3820.0], [92.5, 3824.0], [92.6, 3845.0], [92.7, 3852.0], [92.8, 3864.0], [92.9, 3869.0], [93.0, 3886.0], [93.1, 3907.0], [93.2, 3920.0], [93.3, 3930.0], [93.4, 3947.0], [93.5, 3962.0], [93.6, 3973.0], [93.7, 3981.0], [93.8, 3992.0], [93.9, 3999.0], [94.0, 4019.0], [94.1, 4027.0], [94.2, 4044.0], [94.3, 4060.0], [94.4, 4071.0], [94.5, 4084.0], [94.6, 4095.0], [94.7, 4104.0], [94.8, 4114.0], [94.9, 4123.0], [95.0, 4136.0], [95.1, 4147.0], [95.2, 4165.0], [95.3, 4179.0], [95.4, 4186.0], [95.5, 4197.0], [95.6, 4213.0], [95.7, 4223.0], [95.8, 4259.0], [95.9, 4280.0], [96.0, 4297.0], [96.1, 4317.0], [96.2, 4350.0], [96.3, 4371.0], [96.4, 4399.0], [96.5, 4451.0], [96.6, 4481.0], [96.7, 4501.0], [96.8, 4585.0], [96.9, 4624.0], [97.0, 4693.0], [97.1, 4807.0], [97.2, 4872.0], [97.3, 4923.0], [97.4, 4970.0], [97.5, 5111.0], [97.6, 5167.0], [97.7, 5207.0], [97.8, 5261.0], [97.9, 5334.0], [98.0, 5419.0], [98.1, 5540.0], [98.2, 5644.0], [98.3, 5683.0], [98.4, 5757.0], [98.5, 5831.0], [98.6, 5931.0], [98.7, 5985.0], [98.8, 6216.0], [98.9, 6381.0], [99.0, 6582.0], [99.1, 6731.0], [99.2, 6986.0], [99.3, 7316.0], [99.4, 7333.0], [99.5, 7501.0], [99.6, 7727.0], [99.7, 8393.0], [99.8, 8583.0], [99.9, 9135.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 583.0, "series": [{"data": [[0.0, 583.0], [600.0, 204.0], [700.0, 142.0], [800.0, 113.0], [900.0, 92.0], [1000.0, 87.0], [1100.0, 83.0], [1200.0, 90.0], [1300.0, 106.0], [1400.0, 92.0], [1500.0, 94.0], [1600.0, 82.0], [1700.0, 72.0], [1800.0, 56.0], [1900.0, 114.0], [2000.0, 169.0], [2100.0, 129.0], [2200.0, 101.0], [2300.0, 76.0], [2400.0, 81.0], [2500.0, 116.0], [2600.0, 88.0], [2800.0, 76.0], [2700.0, 84.0], [2900.0, 67.0], [3000.0, 49.0], [3100.0, 43.0], [3300.0, 37.0], [3200.0, 35.0], [3400.0, 37.0], [3500.0, 45.0], [3600.0, 35.0], [3700.0, 23.0], [3800.0, 38.0], [3900.0, 46.0], [4000.0, 39.0], [4200.0, 25.0], [4100.0, 46.0], [4300.0, 20.0], [4400.0, 14.0], [4600.0, 9.0], [4500.0, 8.0], [4700.0, 4.0], [4800.0, 8.0], [5100.0, 11.0], [4900.0, 9.0], [5000.0, 3.0], [5200.0, 8.0], [5300.0, 7.0], [5400.0, 5.0], [5600.0, 10.0], [5500.0, 2.0], [5800.0, 6.0], [5700.0, 8.0], [5900.0, 8.0], [6100.0, 1.0], [6000.0, 1.0], [6300.0, 2.0], [6200.0, 6.0], [6600.0, 3.0], [6400.0, 2.0], [6500.0, 4.0], [6800.0, 2.0], [6700.0, 1.0], [6900.0, 4.0], [7000.0, 2.0], [7300.0, 8.0], [7400.0, 3.0], [7200.0, 1.0], [7500.0, 4.0], [7600.0, 1.0], [7700.0, 2.0], [7800.0, 1.0], [8000.0, 1.0], [8300.0, 2.0], [8500.0, 1.0], [8600.0, 1.0], [8200.0, 1.0], [8400.0, 3.0], [9100.0, 2.0], [9000.0, 1.0], [8800.0, 1.0], [9700.0, 2.0], [10200.0, 1.0], [10500.0, 1.0], [10900.0, 1.0], [100.0, 533.0], [200.0, 305.0], [300.0, 210.0], [400.0, 191.0], [500.0, 251.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 10900.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2107.0, "series": [{"data": [[0.0, 1823.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1260.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 2107.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 1.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.860681114551083, "minX": 1.60232796E12, "maxY": 10.0, "series": [{"data": [[1.6023282E12, 10.0], [1.6023285E12, 10.0], [1.60232796E12, 10.0], [1.60232862E12, 10.0], [1.60232856E12, 10.0], [1.60232826E12, 10.0], [1.60232868E12, 9.860681114551083], [1.60232838E12, 10.0], [1.60232832E12, 10.0], [1.60232802E12, 10.0], [1.60232844E12, 10.0], [1.60232814E12, 10.0], [1.60232808E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60232868E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 1463.747201852569, "minX": 1.0, "maxY": 7897.0, "series": [{"data": [[8.0, 2209.0], [4.0, 5931.0], [2.0, 4136.0], [1.0, 7897.0], [9.0, 1566.0], [10.0, 1463.747201852569], [5.0, 4066.0], [6.0, 2075.0], [3.0, 4526.0], [7.0, 2577.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.991331150067428, 1467.948564823736]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 1715.4666666666667, "minX": 1.60232796E12, "maxY": 3008685.3833333333, "series": [{"data": [[1.6023282E12, 2762334.033333333], [1.6023285E12, 2706473.0], [1.60232796E12, 2826062.283333333], [1.60232862E12, 2844382.316666667], [1.60232856E12, 2694179.5166666666], [1.60232826E12, 2877275.183333333], [1.60232868E12, 2407804.8], [1.60232838E12, 2954818.466666667], [1.60232832E12, 3008685.3833333333], [1.60232802E12, 2443493.05], [1.60232844E12, 2598142.183333333], [1.60232814E12, 2253385.5], [1.60232808E12, 2536006.716666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6023282E12, 2955.2166666666667], [1.6023285E12, 1866.0333333333333], [1.60232796E12, 2545.116666666667], [1.60232862E12, 3254.2], [1.60232856E12, 2990.1], [1.60232826E12, 3218.983333333333], [1.60232868E12, 2246.7166666666667], [1.60232838E12, 2875.366666666667], [1.60232832E12, 2701.45], [1.60232802E12, 2730.616666666667], [1.60232844E12, 3479.4333333333334], [1.60232814E12, 1715.4666666666667], [1.60232808E12, 2571.1]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60232868E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 1152.439770554492, "minX": 1.60232796E12, "maxY": 2348.6220472440978, "series": [{"data": [[1.6023282E12, 1409.5514018691588], [1.6023285E12, 2064.153571428572], [1.60232796E12, 1412.1150895140656], [1.60232862E12, 1278.7723404255294], [1.60232856E12, 1440.9467592592596], [1.60232826E12, 1292.6328293736508], [1.60232868E12, 1455.3653250774003], [1.60232838E12, 1362.8013698630136], [1.60232832E12, 1511.0454545454536], [1.60232802E12, 1459.0640394088664], [1.60232844E12, 1152.439770554492], [1.60232814E12, 2348.6220472440978], [1.60232808E12, 1570.315245478036]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60232868E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 1150.8260038240926, "minX": 1.60232796E12, "maxY": 2344.921259842519, "series": [{"data": [[1.6023282E12, 1406.8294392523353], [1.6023285E12, 2060.6214285714295], [1.60232796E12, 1408.8388746803078], [1.60232862E12, 1276.7914893617026], [1.60232856E12, 1438.8194444444443], [1.60232826E12, 1290.460043196545], [1.60232868E12, 1452.814241486069], [1.60232838E12, 1360.5022831050233], [1.60232832E12, 1508.3939393939395], [1.60232802E12, 1456.5147783251236], [1.60232844E12, 1150.8260038240926], [1.60232814E12, 2344.921259842519], [1.60232808E12, 1567.4444444444446]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60232868E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0182648401826484, "minX": 1.60232796E12, "maxY": 0.21227621483375975, "series": [{"data": [[1.6023282E12, 0.028037383177570097], [1.6023285E12, 0.08214285714285709], [1.60232796E12, 0.21227621483375975], [1.60232862E12, 0.021276595744680868], [1.60232856E12, 0.025462962962962972], [1.60232826E12, 0.023758099352051837], [1.60232868E12, 0.03095975232198146], [1.60232838E12, 0.0182648401826484], [1.60232832E12, 0.025252525252525266], [1.60232802E12, 0.019704433497536936], [1.60232844E12, 0.019120458891013423], [1.60232814E12, 0.03543307086614175], [1.60232808E12, 0.031007751937984492]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60232868E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 6.0, "minX": 1.60232796E12, "maxY": 10969.0, "series": [{"data": [[1.6023282E12, 7677.0], [1.6023285E12, 6572.0], [1.60232796E12, 10215.0], [1.60232862E12, 7409.0], [1.60232856E12, 7316.0], [1.60232826E12, 10969.0], [1.60232868E12, 7897.0], [1.60232838E12, 7337.0], [1.60232832E12, 7317.0], [1.60232802E12, 6194.0], [1.60232844E12, 7727.0], [1.60232814E12, 9734.0], [1.60232808E12, 10516.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6023282E12, 8.851999897956848], [1.6023285E12, 11.115999732017517], [1.60232796E12, 17.527999906539918], [1.60232862E12, 9.0], [1.60232856E12, 14.896999896764756], [1.60232826E12, 12.175999889373779], [1.60232868E12, 14.91599992275238], [1.60232838E12, 46.90199979066849], [1.60232832E12, 15.145999810695649], [1.60232802E12, 19.0], [1.60232844E12, 13.715999875068665], [1.60232814E12, 14.3599995136261], [1.60232808E12, 15.491999907493591]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6023282E12, 9.23720004081726], [1.6023285E12, 12.127600107192993], [1.60232796E12, 17.880800037384034], [1.60232862E12, 9.0], [1.60232856E12, 15.286700041294097], [1.60232826E12, 12.593600044250488], [1.60232868E12, 15.415200061798096], [1.60232838E12, 47.3461000418663], [1.60232832E12, 15.860600075721742], [1.60232802E12, 19.0], [1.60232844E12, 14.0], [1.60232814E12, 16.196000194549562], [1.60232808E12, 15.841200037002563]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6023282E12, 9.065999948978423], [1.6023285E12, 11.677999866008758], [1.60232796E12, 17.72399995326996], [1.60232862E12, 9.0], [1.60232856E12, 15.113499948382376], [1.60232826E12, 12.407999944686889], [1.60232868E12, 15.155999922752379], [1.60232838E12, 47.170499947667125], [1.60232832E12, 15.542999905347823], [1.60232802E12, 19.0], [1.60232844E12, 13.977999937534332], [1.60232814E12, 15.37999975681305], [1.60232808E12, 15.685999953746796]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.6023282E12, 6.0], [1.6023285E12, 9.0], [1.60232796E12, 12.0], [1.60232862E12, 8.0], [1.60232856E12, 13.0], [1.60232826E12, 10.0], [1.60232868E12, 12.0], [1.60232838E12, 11.0], [1.60232832E12, 12.0], [1.60232802E12, 14.0], [1.60232844E12, 12.0], [1.60232814E12, 12.0], [1.60232808E12, 12.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6023282E12, 717.0], [1.6023285E12, 2138.5], [1.60232796E12, 695.0], [1.60232862E12, 718.0], [1.60232856E12, 720.5], [1.60232826E12, 699.0], [1.60232868E12, 1055.0], [1.60232838E12, 1309.5], [1.60232832E12, 1127.5], [1.60232802E12, 1346.0], [1.60232844E12, 596.0], [1.60232814E12, 2110.0], [1.60232808E12, 975.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60232868E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 5.0, "minX": 1.0, "maxY": 2294.0, "series": [{"data": [[2.0, 2156.0], [32.0, 149.0], [3.0, 2280.0], [4.0, 2129.5], [5.0, 1935.0], [6.0, 1481.5], [7.0, 1347.0], [8.0, 1005.5], [9.0, 1029.0], [10.0, 718.5], [11.0, 671.5], [12.0, 513.5], [13.0, 443.0], [14.0, 449.5], [15.0, 475.5], [1.0, 2294.0], [16.0, 294.5], [17.0, 284.0], [18.0, 224.5], [19.0, 209.0], [21.0, 311.0], [22.0, 217.5], [23.0, 163.0], [24.0, 234.5], [25.0, 267.0], [26.0, 159.0], [29.0, 153.0], [30.0, 116.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[9.0, 5.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 32.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 5.0, "minX": 1.0, "maxY": 2288.5, "series": [{"data": [[2.0, 2151.5], [32.0, 146.0], [3.0, 2277.0], [4.0, 2125.5], [5.0, 1931.0], [6.0, 1478.0], [7.0, 1346.0], [8.0, 1004.5], [9.0, 1025.0], [10.0, 716.5], [11.0, 669.5], [12.0, 510.5], [13.0, 442.5], [14.0, 447.5], [15.0, 473.0], [1.0, 2288.5], [16.0, 288.5], [17.0, 283.0], [18.0, 221.5], [19.0, 209.0], [21.0, 311.0], [22.0, 216.0], [23.0, 161.0], [24.0, 234.0], [25.0, 264.0], [26.0, 157.0], [29.0, 152.0], [30.0, 115.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[9.0, 5.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 32.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 4.233333333333333, "minX": 1.60232796E12, "maxY": 8.716666666666667, "series": [{"data": [[1.6023282E12, 7.133333333333334], [1.6023285E12, 4.666666666666667], [1.60232796E12, 6.683333333333334], [1.60232862E12, 7.833333333333333], [1.60232856E12, 7.2], [1.60232826E12, 7.716666666666667], [1.60232868E12, 5.216666666666667], [1.60232838E12, 7.3], [1.60232832E12, 6.6], [1.60232802E12, 6.766666666666667], [1.60232844E12, 8.716666666666667], [1.60232814E12, 4.233333333333333], [1.60232808E12, 6.45]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60232868E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60232796E12, "maxY": 8.716666666666667, "series": [{"data": [[1.6023282E12, 7.116666666666666], [1.6023285E12, 4.666666666666667], [1.60232796E12, 6.516666666666667], [1.60232862E12, 7.833333333333333], [1.60232856E12, 7.2], [1.60232826E12, 7.716666666666667], [1.60232868E12, 5.383333333333334], [1.60232838E12, 7.3], [1.60232832E12, 6.6], [1.60232802E12, 6.766666666666667], [1.60232844E12, 8.716666666666667], [1.60232814E12, 4.233333333333333], [1.60232808E12, 6.45]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.6023282E12, 0.016666666666666666]], "isOverall": false, "label": "400", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60232868E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60232796E12, "maxY": 8.716666666666667, "series": [{"data": [[1.6023282E12, 7.116666666666666], [1.6023285E12, 4.666666666666667], [1.60232796E12, 6.516666666666667], [1.60232862E12, 7.833333333333333], [1.60232856E12, 7.2], [1.60232826E12, 7.716666666666667], [1.60232868E12, 5.383333333333334], [1.60232838E12, 7.3], [1.60232832E12, 6.6], [1.60232802E12, 6.766666666666667], [1.60232844E12, 8.716666666666667], [1.60232814E12, 4.233333333333333], [1.60232808E12, 6.45]], "isOverall": false, "label": "HTTP Request-success", "isController": false}, {"data": [[1.6023282E12, 0.016666666666666666]], "isOverall": false, "label": "HTTP Request-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60232868E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60232796E12, "maxY": 8.716666666666667, "series": [{"data": [[1.6023282E12, 7.116666666666666], [1.6023285E12, 4.666666666666667], [1.60232796E12, 6.516666666666667], [1.60232862E12, 7.833333333333333], [1.60232856E12, 7.2], [1.60232826E12, 7.716666666666667], [1.60232868E12, 5.383333333333334], [1.60232838E12, 7.3], [1.60232832E12, 6.6], [1.60232802E12, 6.766666666666667], [1.60232844E12, 8.716666666666667], [1.60232814E12, 4.233333333333333], [1.60232808E12, 6.45]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.6023282E12, 0.016666666666666666]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60232868E12, "title": "Total Transactions Per Second"}},
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

