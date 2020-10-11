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
        data: {"result": {"minY": 4.0, "minX": 0.0, "maxY": 11279.0, "series": [{"data": [[0.0, 4.0], [0.1, 7.0], [0.2, 10.0], [0.3, 12.0], [0.4, 13.0], [0.5, 14.0], [0.6, 14.0], [0.7, 15.0], [0.8, 15.0], [0.9, 16.0], [1.0, 16.0], [1.1, 17.0], [1.2, 18.0], [1.3, 18.0], [1.4, 19.0], [1.5, 20.0], [1.6, 21.0], [1.7, 21.0], [1.8, 22.0], [1.9, 22.0], [2.0, 22.0], [2.1, 23.0], [2.2, 23.0], [2.3, 24.0], [2.4, 24.0], [2.5, 25.0], [2.6, 25.0], [2.7, 26.0], [2.8, 27.0], [2.9, 27.0], [3.0, 28.0], [3.1, 28.0], [3.2, 29.0], [3.3, 30.0], [3.4, 30.0], [3.5, 31.0], [3.6, 32.0], [3.7, 33.0], [3.8, 34.0], [3.9, 35.0], [4.0, 37.0], [4.1, 38.0], [4.2, 39.0], [4.3, 40.0], [4.4, 42.0], [4.5, 42.0], [4.6, 43.0], [4.7, 43.0], [4.8, 44.0], [4.9, 45.0], [5.0, 45.0], [5.1, 46.0], [5.2, 46.0], [5.3, 47.0], [5.4, 47.0], [5.5, 48.0], [5.6, 48.0], [5.7, 49.0], [5.8, 49.0], [5.9, 51.0], [6.0, 51.0], [6.1, 52.0], [6.2, 53.0], [6.3, 54.0], [6.4, 54.0], [6.5, 55.0], [6.6, 56.0], [6.7, 57.0], [6.8, 58.0], [6.9, 59.0], [7.0, 59.0], [7.1, 60.0], [7.2, 60.0], [7.3, 61.0], [7.4, 62.0], [7.5, 63.0], [7.6, 63.0], [7.7, 64.0], [7.8, 64.0], [7.9, 65.0], [8.0, 67.0], [8.1, 67.0], [8.2, 68.0], [8.3, 69.0], [8.4, 70.0], [8.5, 72.0], [8.6, 74.0], [8.7, 76.0], [8.8, 77.0], [8.9, 79.0], [9.0, 81.0], [9.1, 82.0], [9.2, 84.0], [9.3, 85.0], [9.4, 86.0], [9.5, 86.0], [9.6, 87.0], [9.7, 88.0], [9.8, 89.0], [9.9, 89.0], [10.0, 90.0], [10.1, 91.0], [10.2, 92.0], [10.3, 93.0], [10.4, 93.0], [10.5, 94.0], [10.6, 95.0], [10.7, 95.0], [10.8, 96.0], [10.9, 96.0], [11.0, 97.0], [11.1, 98.0], [11.2, 99.0], [11.3, 99.0], [11.4, 100.0], [11.5, 101.0], [11.6, 101.0], [11.7, 102.0], [11.8, 102.0], [11.9, 102.0], [12.0, 103.0], [12.1, 104.0], [12.2, 105.0], [12.3, 107.0], [12.4, 108.0], [12.5, 109.0], [12.6, 109.0], [12.7, 110.0], [12.8, 111.0], [12.9, 111.0], [13.0, 112.0], [13.1, 112.0], [13.2, 113.0], [13.3, 113.0], [13.4, 114.0], [13.5, 115.0], [13.6, 116.0], [13.7, 117.0], [13.8, 118.0], [13.9, 118.0], [14.0, 120.0], [14.1, 120.0], [14.2, 122.0], [14.3, 123.0], [14.4, 124.0], [14.5, 125.0], [14.6, 126.0], [14.7, 127.0], [14.8, 129.0], [14.9, 129.0], [15.0, 131.0], [15.1, 131.0], [15.2, 132.0], [15.3, 134.0], [15.4, 135.0], [15.5, 135.0], [15.6, 136.0], [15.7, 138.0], [15.8, 139.0], [15.9, 140.0], [16.0, 141.0], [16.1, 141.0], [16.2, 141.0], [16.3, 143.0], [16.4, 145.0], [16.5, 145.0], [16.6, 146.0], [16.7, 147.0], [16.8, 148.0], [16.9, 149.0], [17.0, 149.0], [17.1, 151.0], [17.2, 152.0], [17.3, 154.0], [17.4, 156.0], [17.5, 157.0], [17.6, 158.0], [17.7, 158.0], [17.8, 161.0], [17.9, 162.0], [18.0, 163.0], [18.1, 164.0], [18.2, 165.0], [18.3, 166.0], [18.4, 168.0], [18.5, 170.0], [18.6, 171.0], [18.7, 172.0], [18.8, 173.0], [18.9, 174.0], [19.0, 176.0], [19.1, 177.0], [19.2, 179.0], [19.3, 181.0], [19.4, 182.0], [19.5, 183.0], [19.6, 184.0], [19.7, 184.0], [19.8, 185.0], [19.9, 185.0], [20.0, 185.0], [20.1, 187.0], [20.2, 187.0], [20.3, 188.0], [20.4, 188.0], [20.5, 189.0], [20.6, 190.0], [20.7, 191.0], [20.8, 193.0], [20.9, 195.0], [21.0, 196.0], [21.1, 197.0], [21.2, 198.0], [21.3, 199.0], [21.4, 200.0], [21.5, 202.0], [21.6, 203.0], [21.7, 205.0], [21.8, 206.0], [21.9, 207.0], [22.0, 208.0], [22.1, 210.0], [22.2, 213.0], [22.3, 214.0], [22.4, 215.0], [22.5, 216.0], [22.6, 217.0], [22.7, 218.0], [22.8, 219.0], [22.9, 220.0], [23.0, 220.0], [23.1, 221.0], [23.2, 222.0], [23.3, 224.0], [23.4, 225.0], [23.5, 226.0], [23.6, 228.0], [23.7, 229.0], [23.8, 230.0], [23.9, 232.0], [24.0, 233.0], [24.1, 234.0], [24.2, 237.0], [24.3, 238.0], [24.4, 239.0], [24.5, 240.0], [24.6, 241.0], [24.7, 242.0], [24.8, 243.0], [24.9, 244.0], [25.0, 246.0], [25.1, 247.0], [25.2, 248.0], [25.3, 250.0], [25.4, 251.0], [25.5, 253.0], [25.6, 254.0], [25.7, 255.0], [25.8, 256.0], [25.9, 260.0], [26.0, 262.0], [26.1, 264.0], [26.2, 266.0], [26.3, 267.0], [26.4, 269.0], [26.5, 271.0], [26.6, 272.0], [26.7, 275.0], [26.8, 278.0], [26.9, 281.0], [27.0, 282.0], [27.1, 283.0], [27.2, 285.0], [27.3, 286.0], [27.4, 287.0], [27.5, 289.0], [27.6, 291.0], [27.7, 292.0], [27.8, 293.0], [27.9, 295.0], [28.0, 297.0], [28.1, 300.0], [28.2, 301.0], [28.3, 304.0], [28.4, 307.0], [28.5, 310.0], [28.6, 311.0], [28.7, 313.0], [28.8, 316.0], [28.9, 319.0], [29.0, 322.0], [29.1, 325.0], [29.2, 327.0], [29.3, 329.0], [29.4, 331.0], [29.5, 334.0], [29.6, 339.0], [29.7, 342.0], [29.8, 344.0], [29.9, 345.0], [30.0, 348.0], [30.1, 349.0], [30.2, 354.0], [30.3, 355.0], [30.4, 360.0], [30.5, 362.0], [30.6, 366.0], [30.7, 369.0], [30.8, 373.0], [30.9, 376.0], [31.0, 377.0], [31.1, 379.0], [31.2, 382.0], [31.3, 384.0], [31.4, 388.0], [31.5, 389.0], [31.6, 391.0], [31.7, 394.0], [31.8, 397.0], [31.9, 398.0], [32.0, 398.0], [32.1, 400.0], [32.2, 403.0], [32.3, 409.0], [32.4, 410.0], [32.5, 413.0], [32.6, 416.0], [32.7, 419.0], [32.8, 425.0], [32.9, 426.0], [33.0, 429.0], [33.1, 436.0], [33.2, 442.0], [33.3, 443.0], [33.4, 448.0], [33.5, 453.0], [33.6, 458.0], [33.7, 462.0], [33.8, 464.0], [33.9, 467.0], [34.0, 472.0], [34.1, 475.0], [34.2, 476.0], [34.3, 479.0], [34.4, 482.0], [34.5, 484.0], [34.6, 486.0], [34.7, 488.0], [34.8, 490.0], [34.9, 492.0], [35.0, 495.0], [35.1, 496.0], [35.2, 498.0], [35.3, 499.0], [35.4, 501.0], [35.5, 503.0], [35.6, 505.0], [35.7, 506.0], [35.8, 508.0], [35.9, 510.0], [36.0, 514.0], [36.1, 515.0], [36.2, 518.0], [36.3, 519.0], [36.4, 522.0], [36.5, 525.0], [36.6, 527.0], [36.7, 528.0], [36.8, 532.0], [36.9, 534.0], [37.0, 536.0], [37.1, 538.0], [37.2, 541.0], [37.3, 543.0], [37.4, 545.0], [37.5, 546.0], [37.6, 548.0], [37.7, 550.0], [37.8, 551.0], [37.9, 553.0], [38.0, 554.0], [38.1, 556.0], [38.2, 557.0], [38.3, 558.0], [38.4, 560.0], [38.5, 563.0], [38.6, 564.0], [38.7, 565.0], [38.8, 567.0], [38.9, 571.0], [39.0, 573.0], [39.1, 575.0], [39.2, 578.0], [39.3, 580.0], [39.4, 583.0], [39.5, 584.0], [39.6, 585.0], [39.7, 587.0], [39.8, 589.0], [39.9, 593.0], [40.0, 595.0], [40.1, 597.0], [40.2, 599.0], [40.3, 600.0], [40.4, 601.0], [40.5, 604.0], [40.6, 606.0], [40.7, 607.0], [40.8, 609.0], [40.9, 611.0], [41.0, 612.0], [41.1, 614.0], [41.2, 616.0], [41.3, 618.0], [41.4, 620.0], [41.5, 623.0], [41.6, 627.0], [41.7, 629.0], [41.8, 632.0], [41.9, 634.0], [42.0, 635.0], [42.1, 637.0], [42.2, 642.0], [42.3, 644.0], [42.4, 648.0], [42.5, 651.0], [42.6, 653.0], [42.7, 656.0], [42.8, 658.0], [42.9, 661.0], [43.0, 663.0], [43.1, 664.0], [43.2, 667.0], [43.3, 669.0], [43.4, 672.0], [43.5, 674.0], [43.6, 676.0], [43.7, 681.0], [43.8, 683.0], [43.9, 685.0], [44.0, 688.0], [44.1, 690.0], [44.2, 693.0], [44.3, 699.0], [44.4, 701.0], [44.5, 703.0], [44.6, 708.0], [44.7, 713.0], [44.8, 715.0], [44.9, 718.0], [45.0, 721.0], [45.1, 726.0], [45.2, 727.0], [45.3, 732.0], [45.4, 736.0], [45.5, 737.0], [45.6, 741.0], [45.7, 743.0], [45.8, 747.0], [45.9, 748.0], [46.0, 752.0], [46.1, 754.0], [46.2, 757.0], [46.3, 761.0], [46.4, 766.0], [46.5, 768.0], [46.6, 772.0], [46.7, 777.0], [46.8, 782.0], [46.9, 784.0], [47.0, 788.0], [47.1, 794.0], [47.2, 797.0], [47.3, 801.0], [47.4, 807.0], [47.5, 810.0], [47.6, 817.0], [47.7, 821.0], [47.8, 827.0], [47.9, 830.0], [48.0, 834.0], [48.1, 837.0], [48.2, 839.0], [48.3, 843.0], [48.4, 845.0], [48.5, 849.0], [48.6, 852.0], [48.7, 854.0], [48.8, 859.0], [48.9, 865.0], [49.0, 871.0], [49.1, 874.0], [49.2, 877.0], [49.3, 880.0], [49.4, 883.0], [49.5, 884.0], [49.6, 889.0], [49.7, 895.0], [49.8, 897.0], [49.9, 899.0], [50.0, 904.0], [50.1, 914.0], [50.2, 921.0], [50.3, 928.0], [50.4, 941.0], [50.5, 945.0], [50.6, 948.0], [50.7, 952.0], [50.8, 961.0], [50.9, 964.0], [51.0, 969.0], [51.1, 976.0], [51.2, 980.0], [51.3, 985.0], [51.4, 988.0], [51.5, 991.0], [51.6, 995.0], [51.7, 1008.0], [51.8, 1012.0], [51.9, 1017.0], [52.0, 1022.0], [52.1, 1030.0], [52.2, 1041.0], [52.3, 1047.0], [52.4, 1053.0], [52.5, 1059.0], [52.6, 1064.0], [52.7, 1070.0], [52.8, 1072.0], [52.9, 1075.0], [53.0, 1084.0], [53.1, 1093.0], [53.2, 1096.0], [53.3, 1105.0], [53.4, 1110.0], [53.5, 1114.0], [53.6, 1119.0], [53.7, 1123.0], [53.8, 1125.0], [53.9, 1134.0], [54.0, 1142.0], [54.1, 1147.0], [54.2, 1156.0], [54.3, 1160.0], [54.4, 1169.0], [54.5, 1178.0], [54.6, 1184.0], [54.7, 1189.0], [54.8, 1193.0], [54.9, 1198.0], [55.0, 1201.0], [55.1, 1215.0], [55.2, 1221.0], [55.3, 1228.0], [55.4, 1236.0], [55.5, 1240.0], [55.6, 1241.0], [55.7, 1248.0], [55.8, 1250.0], [55.9, 1257.0], [56.0, 1262.0], [56.1, 1266.0], [56.2, 1275.0], [56.3, 1279.0], [56.4, 1285.0], [56.5, 1289.0], [56.6, 1292.0], [56.7, 1303.0], [56.8, 1310.0], [56.9, 1314.0], [57.0, 1323.0], [57.1, 1329.0], [57.2, 1332.0], [57.3, 1338.0], [57.4, 1342.0], [57.5, 1345.0], [57.6, 1352.0], [57.7, 1355.0], [57.8, 1360.0], [57.9, 1370.0], [58.0, 1375.0], [58.1, 1379.0], [58.2, 1384.0], [58.3, 1389.0], [58.4, 1394.0], [58.5, 1398.0], [58.6, 1401.0], [58.7, 1408.0], [58.8, 1414.0], [58.9, 1424.0], [59.0, 1427.0], [59.1, 1434.0], [59.2, 1440.0], [59.3, 1444.0], [59.4, 1449.0], [59.5, 1456.0], [59.6, 1465.0], [59.7, 1473.0], [59.8, 1477.0], [59.9, 1488.0], [60.0, 1493.0], [60.1, 1500.0], [60.2, 1503.0], [60.3, 1508.0], [60.4, 1524.0], [60.5, 1529.0], [60.6, 1540.0], [60.7, 1548.0], [60.8, 1552.0], [60.9, 1555.0], [61.0, 1565.0], [61.1, 1579.0], [61.2, 1583.0], [61.3, 1589.0], [61.4, 1594.0], [61.5, 1599.0], [61.6, 1602.0], [61.7, 1604.0], [61.8, 1609.0], [61.9, 1617.0], [62.0, 1621.0], [62.1, 1624.0], [62.2, 1633.0], [62.3, 1634.0], [62.4, 1637.0], [62.5, 1643.0], [62.6, 1658.0], [62.7, 1667.0], [62.8, 1670.0], [62.9, 1682.0], [63.0, 1693.0], [63.1, 1698.0], [63.2, 1706.0], [63.3, 1711.0], [63.4, 1725.0], [63.5, 1730.0], [63.6, 1738.0], [63.7, 1746.0], [63.8, 1761.0], [63.9, 1766.0], [64.0, 1770.0], [64.1, 1776.0], [64.2, 1781.0], [64.3, 1787.0], [64.4, 1797.0], [64.5, 1802.0], [64.6, 1804.0], [64.7, 1809.0], [64.8, 1814.0], [64.9, 1820.0], [65.0, 1828.0], [65.1, 1838.0], [65.2, 1848.0], [65.3, 1861.0], [65.4, 1864.0], [65.5, 1869.0], [65.6, 1882.0], [65.7, 1885.0], [65.8, 1902.0], [65.9, 1910.0], [66.0, 1921.0], [66.1, 1929.0], [66.2, 1935.0], [66.3, 1942.0], [66.4, 1952.0], [66.5, 1953.0], [66.6, 1957.0], [66.7, 1960.0], [66.8, 1961.0], [66.9, 1967.0], [67.0, 1970.0], [67.1, 1972.0], [67.2, 1974.0], [67.3, 1979.0], [67.4, 1984.0], [67.5, 1986.0], [67.6, 1987.0], [67.7, 1989.0], [67.8, 1992.0], [67.9, 1997.0], [68.0, 1999.0], [68.1, 2002.0], [68.2, 2003.0], [68.3, 2007.0], [68.4, 2011.0], [68.5, 2016.0], [68.6, 2018.0], [68.7, 2022.0], [68.8, 2025.0], [68.9, 2026.0], [69.0, 2030.0], [69.1, 2031.0], [69.2, 2036.0], [69.3, 2039.0], [69.4, 2040.0], [69.5, 2043.0], [69.6, 2044.0], [69.7, 2047.0], [69.8, 2049.0], [69.9, 2052.0], [70.0, 2054.0], [70.1, 2057.0], [70.2, 2058.0], [70.3, 2059.0], [70.4, 2063.0], [70.5, 2066.0], [70.6, 2069.0], [70.7, 2072.0], [70.8, 2075.0], [70.9, 2078.0], [71.0, 2080.0], [71.1, 2083.0], [71.2, 2087.0], [71.3, 2090.0], [71.4, 2097.0], [71.5, 2102.0], [71.6, 2104.0], [71.7, 2106.0], [71.8, 2109.0], [71.9, 2111.0], [72.0, 2118.0], [72.1, 2122.0], [72.2, 2129.0], [72.3, 2136.0], [72.4, 2140.0], [72.5, 2142.0], [72.6, 2144.0], [72.7, 2147.0], [72.8, 2150.0], [72.9, 2158.0], [73.0, 2164.0], [73.1, 2168.0], [73.2, 2172.0], [73.3, 2175.0], [73.4, 2181.0], [73.5, 2186.0], [73.6, 2188.0], [73.7, 2191.0], [73.8, 2196.0], [73.9, 2199.0], [74.0, 2205.0], [74.1, 2209.0], [74.2, 2218.0], [74.3, 2222.0], [74.4, 2229.0], [74.5, 2238.0], [74.6, 2244.0], [74.7, 2248.0], [74.8, 2253.0], [74.9, 2262.0], [75.0, 2266.0], [75.1, 2271.0], [75.2, 2277.0], [75.3, 2283.0], [75.4, 2288.0], [75.5, 2292.0], [75.6, 2297.0], [75.7, 2302.0], [75.8, 2305.0], [75.9, 2310.0], [76.0, 2314.0], [76.1, 2319.0], [76.2, 2322.0], [76.3, 2334.0], [76.4, 2346.0], [76.5, 2349.0], [76.6, 2358.0], [76.7, 2365.0], [76.8, 2370.0], [76.9, 2378.0], [77.0, 2386.0], [77.1, 2393.0], [77.2, 2400.0], [77.3, 2408.0], [77.4, 2420.0], [77.5, 2429.0], [77.6, 2434.0], [77.7, 2441.0], [77.8, 2444.0], [77.9, 2456.0], [78.0, 2466.0], [78.1, 2480.0], [78.2, 2485.0], [78.3, 2491.0], [78.4, 2499.0], [78.5, 2504.0], [78.6, 2509.0], [78.7, 2512.0], [78.8, 2516.0], [78.9, 2521.0], [79.0, 2530.0], [79.1, 2533.0], [79.2, 2537.0], [79.3, 2542.0], [79.4, 2546.0], [79.5, 2554.0], [79.6, 2557.0], [79.7, 2562.0], [79.8, 2563.0], [79.9, 2566.0], [80.0, 2574.0], [80.1, 2576.0], [80.2, 2582.0], [80.3, 2591.0], [80.4, 2595.0], [80.5, 2601.0], [80.6, 2609.0], [80.7, 2614.0], [80.8, 2620.0], [80.9, 2624.0], [81.0, 2627.0], [81.1, 2632.0], [81.2, 2635.0], [81.3, 2637.0], [81.4, 2641.0], [81.5, 2648.0], [81.6, 2657.0], [81.7, 2660.0], [81.8, 2663.0], [81.9, 2669.0], [82.0, 2672.0], [82.1, 2680.0], [82.2, 2685.0], [82.3, 2689.0], [82.4, 2693.0], [82.5, 2699.0], [82.6, 2706.0], [82.7, 2717.0], [82.8, 2729.0], [82.9, 2735.0], [83.0, 2745.0], [83.1, 2750.0], [83.2, 2755.0], [83.3, 2760.0], [83.4, 2766.0], [83.5, 2768.0], [83.6, 2776.0], [83.7, 2778.0], [83.8, 2785.0], [83.9, 2797.0], [84.0, 2813.0], [84.1, 2819.0], [84.2, 2830.0], [84.3, 2845.0], [84.4, 2851.0], [84.5, 2856.0], [84.6, 2860.0], [84.7, 2867.0], [84.8, 2874.0], [84.9, 2885.0], [85.0, 2900.0], [85.1, 2907.0], [85.2, 2919.0], [85.3, 2931.0], [85.4, 2937.0], [85.5, 2941.0], [85.6, 2948.0], [85.7, 2961.0], [85.8, 2971.0], [85.9, 2979.0], [86.0, 2987.0], [86.1, 2995.0], [86.2, 2999.0], [86.3, 3019.0], [86.4, 3033.0], [86.5, 3042.0], [86.6, 3054.0], [86.7, 3068.0], [86.8, 3079.0], [86.9, 3098.0], [87.0, 3104.0], [87.1, 3110.0], [87.2, 3118.0], [87.3, 3121.0], [87.4, 3135.0], [87.5, 3143.0], [87.6, 3146.0], [87.7, 3163.0], [87.8, 3172.0], [87.9, 3177.0], [88.0, 3192.0], [88.1, 3201.0], [88.2, 3217.0], [88.3, 3227.0], [88.4, 3249.0], [88.5, 3261.0], [88.6, 3272.0], [88.7, 3282.0], [88.8, 3290.0], [88.9, 3296.0], [89.0, 3304.0], [89.1, 3318.0], [89.2, 3334.0], [89.3, 3348.0], [89.4, 3361.0], [89.5, 3375.0], [89.6, 3405.0], [89.7, 3413.0], [89.8, 3428.0], [89.9, 3442.0], [90.0, 3466.0], [90.1, 3482.0], [90.2, 3489.0], [90.3, 3506.0], [90.4, 3517.0], [90.5, 3530.0], [90.6, 3537.0], [90.7, 3571.0], [90.8, 3593.0], [90.9, 3615.0], [91.0, 3622.0], [91.1, 3645.0], [91.2, 3661.0], [91.3, 3680.0], [91.4, 3697.0], [91.5, 3706.0], [91.6, 3734.0], [91.7, 3747.0], [91.8, 3763.0], [91.9, 3780.0], [92.0, 3796.0], [92.1, 3804.0], [92.2, 3824.0], [92.3, 3845.0], [92.4, 3864.0], [92.5, 3874.0], [92.6, 3886.0], [92.7, 3900.0], [92.8, 3907.0], [92.9, 3919.0], [93.0, 3939.0], [93.1, 3947.0], [93.2, 3953.0], [93.3, 3962.0], [93.4, 3969.0], [93.5, 3979.0], [93.6, 3990.0], [93.7, 3999.0], [93.8, 4011.0], [93.9, 4021.0], [94.0, 4026.0], [94.1, 4028.0], [94.2, 4040.0], [94.3, 4048.0], [94.4, 4055.0], [94.5, 4065.0], [94.6, 4075.0], [94.7, 4084.0], [94.8, 4096.0], [94.9, 4112.0], [95.0, 4121.0], [95.1, 4125.0], [95.2, 4145.0], [95.3, 4167.0], [95.4, 4179.0], [95.5, 4187.0], [95.6, 4205.0], [95.7, 4220.0], [95.8, 4238.0], [95.9, 4260.0], [96.0, 4271.0], [96.1, 4286.0], [96.2, 4327.0], [96.3, 4388.0], [96.4, 4501.0], [96.5, 4533.0], [96.6, 4581.0], [96.7, 4611.0], [96.8, 4658.0], [96.9, 4727.0], [97.0, 4799.0], [97.1, 4886.0], [97.2, 4933.0], [97.3, 5003.0], [97.4, 5045.0], [97.5, 5126.0], [97.6, 5181.0], [97.7, 5216.0], [97.8, 5258.0], [97.9, 5306.0], [98.0, 5392.0], [98.1, 5463.0], [98.2, 5540.0], [98.3, 5622.0], [98.4, 5737.0], [98.5, 5803.0], [98.6, 5848.0], [98.7, 5946.0], [98.8, 6036.0], [98.9, 6184.0], [99.0, 6292.0], [99.1, 6607.0], [99.2, 6695.0], [99.3, 6840.0], [99.4, 7017.0], [99.5, 7258.0], [99.6, 7554.0], [99.7, 7874.0], [99.8, 8415.0], [99.9, 9009.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 590.0, "series": [{"data": [[0.0, 590.0], [600.0, 212.0], [700.0, 154.0], [800.0, 137.0], [900.0, 91.0], [1000.0, 81.0], [1100.0, 88.0], [1200.0, 90.0], [1300.0, 97.0], [1400.0, 81.0], [1500.0, 75.0], [1600.0, 81.0], [1700.0, 70.0], [1800.0, 69.0], [1900.0, 116.0], [2000.0, 179.0], [2100.0, 128.0], [2300.0, 79.0], [2200.0, 90.0], [2400.0, 63.0], [2500.0, 106.0], [2600.0, 108.0], [2700.0, 72.0], [2800.0, 55.0], [2900.0, 64.0], [3000.0, 37.0], [3100.0, 60.0], [3300.0, 30.0], [3200.0, 47.0], [3400.0, 37.0], [3500.0, 30.0], [3700.0, 31.0], [3600.0, 29.0], [3800.0, 36.0], [3900.0, 53.0], [4000.0, 57.0], [4300.0, 7.0], [4100.0, 39.0], [4200.0, 31.0], [4500.0, 13.0], [4600.0, 9.0], [4400.0, 5.0], [4700.0, 10.0], [4800.0, 8.0], [5100.0, 12.0], [4900.0, 6.0], [5000.0, 8.0], [5300.0, 7.0], [5200.0, 11.0], [5400.0, 6.0], [5500.0, 7.0], [5600.0, 6.0], [5700.0, 6.0], [5800.0, 7.0], [6100.0, 5.0], [6000.0, 5.0], [5900.0, 5.0], [6300.0, 2.0], [6200.0, 5.0], [6600.0, 6.0], [6400.0, 1.0], [6500.0, 1.0], [6900.0, 2.0], [6800.0, 2.0], [6700.0, 4.0], [7100.0, 3.0], [7000.0, 2.0], [7200.0, 5.0], [7300.0, 1.0], [7400.0, 1.0], [7600.0, 1.0], [7500.0, 1.0], [7800.0, 3.0], [7900.0, 1.0], [7700.0, 2.0], [8000.0, 1.0], [8100.0, 1.0], [8400.0, 2.0], [9100.0, 1.0], [8800.0, 2.0], [9000.0, 1.0], [8900.0, 1.0], [9900.0, 1.0], [10500.0, 1.0], [11100.0, 1.0], [11200.0, 1.0], [100.0, 516.0], [200.0, 351.0], [300.0, 208.0], [400.0, 168.0], [500.0, 255.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 11200.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 1284.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2070.0, "series": [{"data": [[0.0, 1836.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1284.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 2070.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.785714285714286, "minX": 1.60239246E12, "maxY": 10.0, "series": [{"data": [[1.60239318E12, 10.0], [1.60239252E12, 10.0], [1.60239282E12, 10.0], [1.60239312E12, 10.0], [1.60239294E12, 10.0], [1.60239324E12, 9.785714285714286], [1.60239258E12, 10.0], [1.60239288E12, 10.0], [1.6023927E12, 10.0], [1.602393E12, 10.0], [1.60239264E12, 10.0], [1.60239246E12, 9.923076923076923], [1.60239276E12, 10.0], [1.60239306E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60239324E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 1449.5496138996125, "minX": 1.0, "maxY": 4960.0, "series": [{"data": [[8.0, 3926.0], [4.0, 4960.0], [2.0, 2734.0], [1.0, 4048.0], [9.0, 1639.5], [10.0, 1449.5496138996125], [5.0, 2602.0], [6.0, 2311.0], [3.0, 2629.0], [7.0, 2137.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.991136801541433, 1452.272254335258]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 88.08333333333333, "minX": 1.60239246E12, "maxY": 3153735.8833333333, "series": [{"data": [[1.60239318E12, 2970658.9833333334], [1.60239252E12, 3153735.8833333333], [1.60239282E12, 3005063.8], [1.60239312E12, 2916534.3833333333], [1.60239294E12, 2748978.45], [1.60239324E12, 1622777.5], [1.60239258E12, 2312125.1166666667], [1.60239288E12, 2971676.933333333], [1.6023927E12, 2300453.433333333], [1.602393E12, 2699002.2333333334], [1.60239264E12, 2697407.0166666666], [1.60239246E12, 106001.61666666667], [1.60239276E12, 2965175.933333333], [1.60239306E12, 2443444.3666666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60239318E12, 3239.266666666667], [1.60239252E12, 2894.55], [1.60239282E12, 3346.6833333333334], [1.60239312E12, 3380.2], [1.60239294E12, 2722.983333333333], [1.60239324E12, 1464.25], [1.60239258E12, 2909.5333333333333], [1.60239288E12, 2672.05], [1.6023927E12, 2008.15], [1.602393E12, 3386.0666666666666], [1.60239264E12, 2228.1], [1.60239246E12, 88.08333333333333], [1.60239276E12, 3052.516666666667], [1.60239306E12, 1751.3333333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60239324E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 1144.7058823529403, "minX": 1.60239246E12, "maxY": 2327.3854961832044, "series": [{"data": [[1.60239318E12, 1261.9892933618853], [1.60239252E12, 1355.0585585585598], [1.60239282E12, 1247.5613305613306], [1.60239312E12, 1236.0245398773004], [1.60239294E12, 1479.779411764704], [1.60239324E12, 1545.4523809523807], [1.60239258E12, 1395.6037296037314], [1.60239288E12, 1479.162094763091], [1.6023927E12, 2023.2142857142858], [1.602393E12, 1144.7058823529403], [1.60239264E12, 1763.1676470588234], [1.60239246E12, 1827.5384615384614], [1.60239276E12, 1380.1289592760174], [1.60239306E12, 2327.3854961832044]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60239324E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 1142.654901960786, "minX": 1.60239246E12, "maxY": 2323.916030534354, "series": [{"data": [[1.60239318E12, 1259.7601713062088], [1.60239252E12, 1351.6914414414414], [1.60239282E12, 1245.280665280665], [1.60239312E12, 1233.8629856850719], [1.60239294E12, 1477.3186274509787], [1.60239324E12, 1542.580952380953], [1.60239258E12, 1392.9906759906758], [1.60239288E12, 1476.3092269326692], [1.6023927E12, 2019.578231292516], [1.602393E12, 1142.654901960786], [1.60239264E12, 1759.411764705883], [1.60239246E12, 1822.8461538461538], [1.60239276E12, 1376.984162895926], [1.60239306E12, 2323.916030534354]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60239324E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.013513513513513514, "minX": 1.60239246E12, "maxY": 5.6923076923076925, "series": [{"data": [[1.60239318E12, 0.014989293361884393], [1.60239252E12, 0.013513513513513514], [1.60239282E12, 0.027027027027027018], [1.60239312E12, 0.02044989775051124], [1.60239294E12, 0.03186274509803921], [1.60239324E12, 0.04285714285714285], [1.60239258E12, 0.01864801864801863], [1.60239288E12, 0.024937655860349142], [1.6023927E12, 0.034013605442176895], [1.602393E12, 0.019607843137254926], [1.60239264E12, 0.03823529411764709], [1.60239246E12, 5.6923076923076925], [1.60239276E12, 0.02036199095022626], [1.60239306E12, 0.041984732824427516]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60239324E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 4.0, "minX": 1.60239246E12, "maxY": 11279.0, "series": [{"data": [[1.60239318E12, 8919.0], [1.60239252E12, 11196.0], [1.60239282E12, 8811.0], [1.60239312E12, 9009.0], [1.60239294E12, 7240.0], [1.60239324E12, 5622.0], [1.60239258E12, 6695.0], [1.60239288E12, 7554.0], [1.6023927E12, 10597.0], [1.602393E12, 11279.0], [1.60239264E12, 9906.0], [1.60239246E12, 3304.0], [1.60239276E12, 7156.0], [1.60239306E12, 8814.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60239318E12, 14.0], [1.60239252E12, 23.004999893903733], [1.60239282E12, 14.013999655246735], [1.60239312E12, 11.0], [1.60239294E12, 17.361999804973603], [1.60239324E12, 27.09099954724312], [1.60239258E12, 16.0], [1.60239288E12, 15.617999904155731], [1.6023927E12, 17.65499992966652], [1.602393E12, 15.598999878168106], [1.60239264E12, 20.206999756097794], [1.60239246E12, 315.0], [1.60239276E12, 10.960999683141708], [1.60239306E12, 20.302999435663224]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60239318E12, 14.0], [1.60239252E12, 23.405500042438508], [1.60239282E12, 15.315400137901307], [1.60239312E12, 11.0], [1.60239294E12, 18.39280031204224], [1.60239324E12, 34.045201368331924], [1.60239258E12, 16.257000041007995], [1.60239288E12, 15.979800038337707], [1.6023927E12, 17.920500028133393], [1.602393E12, 16.05890004873276], [1.60239264E12, 21.127700097560883], [1.60239246E12, 315.0], [1.60239276E12, 11.385700042247773], [1.60239306E12, 22.433300225734712]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60239318E12, 14.0], [1.60239252E12, 23.227499946951866], [1.60239282E12, 14.736999827623366], [1.60239312E12, 11.0], [1.60239294E12, 17.7709999024868], [1.60239324E12, 28.3059982895851], [1.60239258E12, 16.084999948740005], [1.60239288E12, 15.818999952077865], [1.6023927E12, 17.80249996483326], [1.602393E12, 15.854499939084054], [1.60239264E12, 20.718499878048895], [1.60239246E12, 315.0], [1.60239276E12, 11.208499947190283], [1.60239306E12, 21.486499717831613]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60239318E12, 9.0], [1.60239252E12, 15.0], [1.60239282E12, 12.0], [1.60239312E12, 5.0], [1.60239294E12, 7.0], [1.60239324E12, 19.0], [1.60239258E12, 8.0], [1.60239288E12, 14.0], [1.6023927E12, 14.0], [1.602393E12, 14.0], [1.60239264E12, 18.0], [1.60239246E12, 315.0], [1.60239276E12, 4.0], [1.60239306E12, 13.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60239318E12, 673.0], [1.60239252E12, 709.5], [1.60239282E12, 738.0], [1.60239312E12, 648.0], [1.60239294E12, 1401.0], [1.60239324E12, 1201.0], [1.60239258E12, 1249.0], [1.60239288E12, 1232.0], [1.6023927E12, 1847.5], [1.602393E12, 583.5], [1.60239264E12, 1795.5], [1.60239246E12, 2080.0], [1.60239276E12, 639.0], [1.60239306E12, 2226.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60239324E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 118.5, "minX": 1.0, "maxY": 2802.5, "series": [{"data": [[2.0, 2340.5], [33.0, 177.0], [3.0, 2213.5], [4.0, 2007.0], [5.0, 1974.0], [6.0, 1957.0], [7.0, 1470.0], [8.0, 983.0], [9.0, 764.0], [10.0, 745.5], [11.0, 785.0], [12.0, 585.5], [13.0, 555.0], [14.0, 299.0], [15.0, 355.0], [1.0, 2802.5], [16.0, 292.5], [17.0, 208.0], [18.0, 389.0], [19.0, 286.0], [20.0, 167.0], [21.0, 293.5], [22.0, 231.5], [23.0, 214.0], [26.0, 189.0], [28.0, 118.5], [29.0, 163.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 33.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 117.5, "minX": 1.0, "maxY": 2798.5, "series": [{"data": [[2.0, 2334.0], [33.0, 175.0], [3.0, 2206.5], [4.0, 2002.5], [5.0, 1970.0], [6.0, 1955.0], [7.0, 1467.0], [8.0, 982.0], [9.0, 761.5], [10.0, 743.0], [11.0, 778.5], [12.0, 582.5], [13.0, 551.0], [14.0, 297.0], [15.0, 351.0], [1.0, 2798.5], [16.0, 290.0], [17.0, 208.0], [18.0, 386.5], [19.0, 285.0], [20.0, 165.0], [21.0, 292.0], [22.0, 229.5], [23.0, 212.0], [26.0, 186.0], [28.0, 117.5], [29.0, 160.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 33.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.38333333333333336, "minX": 1.60239246E12, "maxY": 8.5, "series": [{"data": [[1.60239318E12, 7.783333333333333], [1.60239252E12, 7.4], [1.60239282E12, 8.016666666666667], [1.60239312E12, 8.15], [1.60239294E12, 6.8], [1.60239324E12, 3.3333333333333335], [1.60239258E12, 7.15], [1.60239288E12, 6.683333333333334], [1.6023927E12, 4.9], [1.602393E12, 8.5], [1.60239264E12, 5.666666666666667], [1.60239246E12, 0.38333333333333336], [1.60239276E12, 7.366666666666666], [1.60239306E12, 4.366666666666666]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60239324E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.21666666666666667, "minX": 1.60239246E12, "maxY": 8.5, "series": [{"data": [[1.60239318E12, 7.783333333333333], [1.60239252E12, 7.4], [1.60239282E12, 8.016666666666667], [1.60239312E12, 8.15], [1.60239294E12, 6.8], [1.60239324E12, 3.5], [1.60239258E12, 7.15], [1.60239288E12, 6.683333333333334], [1.6023927E12, 4.9], [1.602393E12, 8.5], [1.60239264E12, 5.666666666666667], [1.60239246E12, 0.21666666666666667], [1.60239276E12, 7.366666666666666], [1.60239306E12, 4.366666666666666]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60239324E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.21666666666666667, "minX": 1.60239246E12, "maxY": 8.5, "series": [{"data": [[1.60239318E12, 7.783333333333333], [1.60239252E12, 7.4], [1.60239282E12, 8.016666666666667], [1.60239312E12, 8.15], [1.60239294E12, 6.8], [1.60239324E12, 3.5], [1.60239258E12, 7.15], [1.60239288E12, 6.683333333333334], [1.6023927E12, 4.9], [1.602393E12, 8.5], [1.60239264E12, 5.666666666666667], [1.60239246E12, 0.21666666666666667], [1.60239276E12, 7.366666666666666], [1.60239306E12, 4.366666666666666]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60239324E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.21666666666666667, "minX": 1.60239246E12, "maxY": 8.5, "series": [{"data": [[1.60239318E12, 7.783333333333333], [1.60239252E12, 7.4], [1.60239282E12, 8.016666666666667], [1.60239312E12, 8.15], [1.60239294E12, 6.8], [1.60239324E12, 3.5], [1.60239258E12, 7.15], [1.60239288E12, 6.683333333333334], [1.6023927E12, 4.9], [1.602393E12, 8.5], [1.60239264E12, 5.666666666666667], [1.60239246E12, 0.21666666666666667], [1.60239276E12, 7.366666666666666], [1.60239306E12, 4.366666666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60239324E12, "title": "Total Transactions Per Second"}},
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

