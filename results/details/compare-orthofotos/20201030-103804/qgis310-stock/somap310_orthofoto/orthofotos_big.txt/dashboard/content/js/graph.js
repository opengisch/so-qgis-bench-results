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
        data: {"result": {"minY": 6.0, "minX": 0.0, "maxY": 12826.0, "series": [{"data": [[0.0, 6.0], [0.1, 8.0], [0.2, 12.0], [0.3, 13.0], [0.4, 14.0], [0.5, 15.0], [0.6, 16.0], [0.7, 16.0], [0.8, 17.0], [0.9, 17.0], [1.0, 18.0], [1.1, 18.0], [1.2, 19.0], [1.3, 19.0], [1.4, 20.0], [1.5, 20.0], [1.6, 21.0], [1.7, 21.0], [1.8, 22.0], [1.9, 23.0], [2.0, 23.0], [2.1, 24.0], [2.2, 24.0], [2.3, 24.0], [2.4, 25.0], [2.5, 26.0], [2.6, 26.0], [2.7, 27.0], [2.8, 28.0], [2.9, 29.0], [3.0, 29.0], [3.1, 30.0], [3.2, 30.0], [3.3, 32.0], [3.4, 33.0], [3.5, 33.0], [3.6, 34.0], [3.7, 35.0], [3.8, 37.0], [3.9, 39.0], [4.0, 40.0], [4.1, 41.0], [4.2, 41.0], [4.3, 42.0], [4.4, 43.0], [4.5, 43.0], [4.6, 44.0], [4.7, 45.0], [4.8, 46.0], [4.9, 46.0], [5.0, 47.0], [5.1, 47.0], [5.2, 48.0], [5.3, 49.0], [5.4, 50.0], [5.5, 51.0], [5.6, 52.0], [5.7, 52.0], [5.8, 53.0], [5.9, 54.0], [6.0, 54.0], [6.1, 55.0], [6.2, 56.0], [6.3, 57.0], [6.4, 59.0], [6.5, 60.0], [6.6, 61.0], [6.7, 62.0], [6.8, 63.0], [6.9, 64.0], [7.0, 65.0], [7.1, 65.0], [7.2, 66.0], [7.3, 67.0], [7.4, 69.0], [7.5, 70.0], [7.6, 70.0], [7.7, 71.0], [7.8, 72.0], [7.9, 75.0], [8.0, 77.0], [8.1, 78.0], [8.2, 80.0], [8.3, 81.0], [8.4, 83.0], [8.5, 84.0], [8.6, 85.0], [8.7, 86.0], [8.8, 86.0], [8.9, 88.0], [9.0, 89.0], [9.1, 90.0], [9.2, 91.0], [9.3, 92.0], [9.4, 92.0], [9.5, 93.0], [9.6, 94.0], [9.7, 94.0], [9.8, 95.0], [9.9, 95.0], [10.0, 96.0], [10.1, 97.0], [10.2, 97.0], [10.3, 98.0], [10.4, 99.0], [10.5, 99.0], [10.6, 100.0], [10.7, 101.0], [10.8, 101.0], [10.9, 102.0], [11.0, 103.0], [11.1, 104.0], [11.2, 105.0], [11.3, 105.0], [11.4, 106.0], [11.5, 106.0], [11.6, 107.0], [11.7, 108.0], [11.8, 108.0], [11.9, 109.0], [12.0, 110.0], [12.1, 111.0], [12.2, 112.0], [12.3, 112.0], [12.4, 113.0], [12.5, 114.0], [12.6, 115.0], [12.7, 115.0], [12.8, 116.0], [12.9, 116.0], [13.0, 117.0], [13.1, 118.0], [13.2, 118.0], [13.3, 119.0], [13.4, 120.0], [13.5, 120.0], [13.6, 121.0], [13.7, 122.0], [13.8, 123.0], [13.9, 124.0], [14.0, 126.0], [14.1, 127.0], [14.2, 127.0], [14.3, 129.0], [14.4, 131.0], [14.5, 132.0], [14.6, 133.0], [14.7, 135.0], [14.8, 136.0], [14.9, 137.0], [15.0, 138.0], [15.1, 139.0], [15.2, 140.0], [15.3, 142.0], [15.4, 143.0], [15.5, 145.0], [15.6, 145.0], [15.7, 146.0], [15.8, 147.0], [15.9, 147.0], [16.0, 149.0], [16.1, 151.0], [16.2, 153.0], [16.3, 155.0], [16.4, 155.0], [16.5, 156.0], [16.6, 157.0], [16.7, 159.0], [16.8, 161.0], [16.9, 162.0], [17.0, 163.0], [17.1, 165.0], [17.2, 166.0], [17.3, 169.0], [17.4, 170.0], [17.5, 172.0], [17.6, 172.0], [17.7, 173.0], [17.8, 175.0], [17.9, 176.0], [18.0, 177.0], [18.1, 179.0], [18.2, 180.0], [18.3, 181.0], [18.4, 183.0], [18.5, 184.0], [18.6, 186.0], [18.7, 187.0], [18.8, 188.0], [18.9, 189.0], [19.0, 190.0], [19.1, 190.0], [19.2, 192.0], [19.3, 194.0], [19.4, 195.0], [19.5, 196.0], [19.6, 197.0], [19.7, 198.0], [19.8, 200.0], [19.9, 201.0], [20.0, 201.0], [20.1, 203.0], [20.2, 204.0], [20.3, 205.0], [20.4, 206.0], [20.5, 207.0], [20.6, 209.0], [20.7, 211.0], [20.8, 211.0], [20.9, 213.0], [21.0, 213.0], [21.1, 214.0], [21.2, 215.0], [21.3, 216.0], [21.4, 217.0], [21.5, 218.0], [21.6, 219.0], [21.7, 221.0], [21.8, 222.0], [21.9, 223.0], [22.0, 224.0], [22.1, 224.0], [22.2, 226.0], [22.3, 227.0], [22.4, 227.0], [22.5, 229.0], [22.6, 232.0], [22.7, 233.0], [22.8, 234.0], [22.9, 235.0], [23.0, 236.0], [23.1, 237.0], [23.2, 238.0], [23.3, 239.0], [23.4, 240.0], [23.5, 241.0], [23.6, 243.0], [23.7, 245.0], [23.8, 246.0], [23.9, 247.0], [24.0, 249.0], [24.1, 250.0], [24.2, 251.0], [24.3, 253.0], [24.4, 254.0], [24.5, 255.0], [24.6, 256.0], [24.7, 257.0], [24.8, 261.0], [24.9, 262.0], [25.0, 263.0], [25.1, 264.0], [25.2, 267.0], [25.3, 269.0], [25.4, 271.0], [25.5, 272.0], [25.6, 274.0], [25.7, 276.0], [25.8, 278.0], [25.9, 279.0], [26.0, 280.0], [26.1, 283.0], [26.2, 284.0], [26.3, 285.0], [26.4, 287.0], [26.5, 289.0], [26.6, 292.0], [26.7, 295.0], [26.8, 296.0], [26.9, 298.0], [27.0, 300.0], [27.1, 302.0], [27.2, 303.0], [27.3, 305.0], [27.4, 306.0], [27.5, 311.0], [27.6, 313.0], [27.7, 314.0], [27.8, 316.0], [27.9, 320.0], [28.0, 323.0], [28.1, 325.0], [28.2, 326.0], [28.3, 328.0], [28.4, 331.0], [28.5, 335.0], [28.6, 337.0], [28.7, 339.0], [28.8, 342.0], [28.9, 344.0], [29.0, 346.0], [29.1, 349.0], [29.2, 350.0], [29.3, 354.0], [29.4, 361.0], [29.5, 364.0], [29.6, 366.0], [29.7, 367.0], [29.8, 369.0], [29.9, 372.0], [30.0, 375.0], [30.1, 378.0], [30.2, 380.0], [30.3, 381.0], [30.4, 382.0], [30.5, 385.0], [30.6, 388.0], [30.7, 392.0], [30.8, 396.0], [30.9, 399.0], [31.0, 402.0], [31.1, 404.0], [31.2, 407.0], [31.3, 407.0], [31.4, 412.0], [31.5, 417.0], [31.6, 419.0], [31.7, 422.0], [31.8, 425.0], [31.9, 427.0], [32.0, 431.0], [32.1, 433.0], [32.2, 438.0], [32.3, 440.0], [32.4, 444.0], [32.5, 445.0], [32.6, 448.0], [32.7, 451.0], [32.8, 452.0], [32.9, 454.0], [33.0, 456.0], [33.1, 458.0], [33.2, 464.0], [33.3, 467.0], [33.4, 470.0], [33.5, 472.0], [33.6, 473.0], [33.7, 479.0], [33.8, 483.0], [33.9, 486.0], [34.0, 487.0], [34.1, 490.0], [34.2, 491.0], [34.3, 494.0], [34.4, 496.0], [34.5, 498.0], [34.6, 500.0], [34.7, 503.0], [34.8, 506.0], [34.9, 509.0], [35.0, 511.0], [35.1, 512.0], [35.2, 515.0], [35.3, 518.0], [35.4, 520.0], [35.5, 521.0], [35.6, 524.0], [35.7, 526.0], [35.8, 529.0], [35.9, 530.0], [36.0, 532.0], [36.1, 533.0], [36.2, 535.0], [36.3, 539.0], [36.4, 541.0], [36.5, 542.0], [36.6, 547.0], [36.7, 548.0], [36.8, 551.0], [36.9, 553.0], [37.0, 554.0], [37.1, 555.0], [37.2, 557.0], [37.3, 561.0], [37.4, 563.0], [37.5, 565.0], [37.6, 570.0], [37.7, 573.0], [37.8, 574.0], [37.9, 577.0], [38.0, 579.0], [38.1, 580.0], [38.2, 582.0], [38.3, 584.0], [38.4, 588.0], [38.5, 589.0], [38.6, 590.0], [38.7, 592.0], [38.8, 594.0], [38.9, 597.0], [39.0, 598.0], [39.1, 600.0], [39.2, 602.0], [39.3, 604.0], [39.4, 605.0], [39.5, 607.0], [39.6, 608.0], [39.7, 609.0], [39.8, 611.0], [39.9, 613.0], [40.0, 616.0], [40.1, 618.0], [40.2, 621.0], [40.3, 624.0], [40.4, 626.0], [40.5, 629.0], [40.6, 632.0], [40.7, 635.0], [40.8, 638.0], [40.9, 640.0], [41.0, 642.0], [41.1, 645.0], [41.2, 649.0], [41.3, 651.0], [41.4, 653.0], [41.5, 656.0], [41.6, 659.0], [41.7, 662.0], [41.8, 664.0], [41.9, 665.0], [42.0, 667.0], [42.1, 670.0], [42.2, 672.0], [42.3, 677.0], [42.4, 679.0], [42.5, 681.0], [42.6, 683.0], [42.7, 685.0], [42.8, 687.0], [42.9, 689.0], [43.0, 691.0], [43.1, 694.0], [43.2, 698.0], [43.3, 700.0], [43.4, 702.0], [43.5, 706.0], [43.6, 707.0], [43.7, 711.0], [43.8, 712.0], [43.9, 716.0], [44.0, 720.0], [44.1, 725.0], [44.2, 728.0], [44.3, 731.0], [44.4, 733.0], [44.5, 735.0], [44.6, 739.0], [44.7, 743.0], [44.8, 749.0], [44.9, 751.0], [45.0, 753.0], [45.1, 755.0], [45.2, 757.0], [45.3, 765.0], [45.4, 771.0], [45.5, 773.0], [45.6, 777.0], [45.7, 780.0], [45.8, 785.0], [45.9, 787.0], [46.0, 790.0], [46.1, 797.0], [46.2, 804.0], [46.3, 808.0], [46.4, 816.0], [46.5, 819.0], [46.6, 824.0], [46.7, 830.0], [46.8, 833.0], [46.9, 841.0], [47.0, 844.0], [47.1, 847.0], [47.2, 849.0], [47.3, 854.0], [47.4, 857.0], [47.5, 861.0], [47.6, 863.0], [47.7, 868.0], [47.8, 871.0], [47.9, 878.0], [48.0, 880.0], [48.1, 884.0], [48.2, 887.0], [48.3, 889.0], [48.4, 896.0], [48.5, 901.0], [48.6, 908.0], [48.7, 914.0], [48.8, 919.0], [48.9, 923.0], [49.0, 931.0], [49.1, 935.0], [49.2, 940.0], [49.3, 943.0], [49.4, 951.0], [49.5, 955.0], [49.6, 960.0], [49.7, 966.0], [49.8, 971.0], [49.9, 974.0], [50.0, 981.0], [50.1, 992.0], [50.2, 999.0], [50.3, 1007.0], [50.4, 1014.0], [50.5, 1023.0], [50.6, 1038.0], [50.7, 1040.0], [50.8, 1042.0], [50.9, 1047.0], [51.0, 1050.0], [51.1, 1055.0], [51.2, 1058.0], [51.3, 1061.0], [51.4, 1066.0], [51.5, 1071.0], [51.6, 1074.0], [51.7, 1081.0], [51.8, 1084.0], [51.9, 1087.0], [52.0, 1092.0], [52.1, 1096.0], [52.2, 1099.0], [52.3, 1119.0], [52.4, 1122.0], [52.5, 1127.0], [52.6, 1132.0], [52.7, 1139.0], [52.8, 1147.0], [52.9, 1152.0], [53.0, 1159.0], [53.1, 1168.0], [53.2, 1171.0], [53.3, 1177.0], [53.4, 1185.0], [53.5, 1189.0], [53.6, 1194.0], [53.7, 1202.0], [53.8, 1205.0], [53.9, 1213.0], [54.0, 1218.0], [54.1, 1222.0], [54.2, 1229.0], [54.3, 1232.0], [54.4, 1243.0], [54.5, 1255.0], [54.6, 1260.0], [54.7, 1268.0], [54.8, 1275.0], [54.9, 1278.0], [55.0, 1283.0], [55.1, 1290.0], [55.2, 1292.0], [55.3, 1294.0], [55.4, 1297.0], [55.5, 1304.0], [55.6, 1308.0], [55.7, 1312.0], [55.8, 1321.0], [55.9, 1327.0], [56.0, 1331.0], [56.1, 1336.0], [56.2, 1341.0], [56.3, 1349.0], [56.4, 1357.0], [56.5, 1366.0], [56.6, 1379.0], [56.7, 1383.0], [56.8, 1386.0], [56.9, 1390.0], [57.0, 1393.0], [57.1, 1398.0], [57.2, 1405.0], [57.3, 1411.0], [57.4, 1417.0], [57.5, 1424.0], [57.6, 1433.0], [57.7, 1439.0], [57.8, 1443.0], [57.9, 1449.0], [58.0, 1458.0], [58.1, 1464.0], [58.2, 1466.0], [58.3, 1471.0], [58.4, 1479.0], [58.5, 1484.0], [58.6, 1487.0], [58.7, 1493.0], [58.8, 1496.0], [58.9, 1499.0], [59.0, 1502.0], [59.1, 1508.0], [59.2, 1514.0], [59.3, 1523.0], [59.4, 1527.0], [59.5, 1540.0], [59.6, 1547.0], [59.7, 1551.0], [59.8, 1565.0], [59.9, 1580.0], [60.0, 1584.0], [60.1, 1589.0], [60.2, 1593.0], [60.3, 1598.0], [60.4, 1604.0], [60.5, 1611.0], [60.6, 1617.0], [60.7, 1632.0], [60.8, 1640.0], [60.9, 1645.0], [61.0, 1651.0], [61.1, 1655.0], [61.2, 1664.0], [61.3, 1673.0], [61.4, 1678.0], [61.5, 1685.0], [61.6, 1694.0], [61.7, 1705.0], [61.8, 1716.0], [61.9, 1720.0], [62.0, 1727.0], [62.1, 1733.0], [62.2, 1752.0], [62.3, 1759.0], [62.4, 1762.0], [62.5, 1769.0], [62.6, 1775.0], [62.7, 1783.0], [62.8, 1789.0], [62.9, 1794.0], [63.0, 1800.0], [63.1, 1806.0], [63.2, 1816.0], [63.3, 1827.0], [63.4, 1831.0], [63.5, 1842.0], [63.6, 1845.0], [63.7, 1864.0], [63.8, 1869.0], [63.9, 1878.0], [64.0, 1889.0], [64.1, 1895.0], [64.2, 1900.0], [64.3, 1909.0], [64.4, 1912.0], [64.5, 1919.0], [64.6, 1923.0], [64.7, 1934.0], [64.8, 1941.0], [64.9, 1946.0], [65.0, 1950.0], [65.1, 1956.0], [65.2, 1962.0], [65.3, 1969.0], [65.4, 1980.0], [65.5, 1984.0], [65.6, 1990.0], [65.7, 1995.0], [65.8, 2002.0], [65.9, 2007.0], [66.0, 2011.0], [66.1, 2015.0], [66.2, 2019.0], [66.3, 2022.0], [66.4, 2029.0], [66.5, 2032.0], [66.6, 2039.0], [66.7, 2045.0], [66.8, 2049.0], [66.9, 2054.0], [67.0, 2061.0], [67.1, 2064.0], [67.2, 2066.0], [67.3, 2069.0], [67.4, 2074.0], [67.5, 2081.0], [67.6, 2084.0], [67.7, 2086.0], [67.8, 2092.0], [67.9, 2097.0], [68.0, 2098.0], [68.1, 2099.0], [68.2, 2101.0], [68.3, 2105.0], [68.4, 2108.0], [68.5, 2113.0], [68.6, 2116.0], [68.7, 2119.0], [68.8, 2124.0], [68.9, 2127.0], [69.0, 2129.0], [69.1, 2132.0], [69.2, 2137.0], [69.3, 2143.0], [69.4, 2146.0], [69.5, 2156.0], [69.6, 2158.0], [69.7, 2163.0], [69.8, 2165.0], [69.9, 2169.0], [70.0, 2171.0], [70.1, 2177.0], [70.2, 2179.0], [70.3, 2181.0], [70.4, 2186.0], [70.5, 2190.0], [70.6, 2193.0], [70.7, 2198.0], [70.8, 2201.0], [70.9, 2208.0], [71.0, 2211.0], [71.1, 2217.0], [71.2, 2221.0], [71.3, 2225.0], [71.4, 2232.0], [71.5, 2234.0], [71.6, 2237.0], [71.7, 2241.0], [71.8, 2246.0], [71.9, 2250.0], [72.0, 2255.0], [72.1, 2260.0], [72.2, 2264.0], [72.3, 2267.0], [72.4, 2272.0], [72.5, 2275.0], [72.6, 2276.0], [72.7, 2281.0], [72.8, 2284.0], [72.9, 2287.0], [73.0, 2289.0], [73.1, 2293.0], [73.2, 2295.0], [73.3, 2303.0], [73.4, 2306.0], [73.5, 2310.0], [73.6, 2313.0], [73.7, 2317.0], [73.8, 2325.0], [73.9, 2330.0], [74.0, 2334.0], [74.1, 2338.0], [74.2, 2344.0], [74.3, 2351.0], [74.4, 2358.0], [74.5, 2366.0], [74.6, 2370.0], [74.7, 2386.0], [74.8, 2389.0], [74.9, 2395.0], [75.0, 2397.0], [75.1, 2404.0], [75.2, 2412.0], [75.3, 2420.0], [75.4, 2432.0], [75.5, 2436.0], [75.6, 2444.0], [75.7, 2450.0], [75.8, 2456.0], [75.9, 2462.0], [76.0, 2465.0], [76.1, 2470.0], [76.2, 2477.0], [76.3, 2480.0], [76.4, 2487.0], [76.5, 2497.0], [76.6, 2500.0], [76.7, 2508.0], [76.8, 2514.0], [76.9, 2520.0], [77.0, 2522.0], [77.1, 2531.0], [77.2, 2537.0], [77.3, 2540.0], [77.4, 2546.0], [77.5, 2555.0], [77.6, 2558.0], [77.7, 2566.0], [77.8, 2572.0], [77.9, 2580.0], [78.0, 2586.0], [78.1, 2590.0], [78.2, 2596.0], [78.3, 2599.0], [78.4, 2600.0], [78.5, 2610.0], [78.6, 2617.0], [78.7, 2621.0], [78.8, 2630.0], [78.9, 2634.0], [79.0, 2640.0], [79.1, 2645.0], [79.2, 2648.0], [79.3, 2652.0], [79.4, 2656.0], [79.5, 2662.0], [79.6, 2665.0], [79.7, 2669.0], [79.8, 2673.0], [79.9, 2679.0], [80.0, 2681.0], [80.1, 2688.0], [80.2, 2694.0], [80.3, 2703.0], [80.4, 2707.0], [80.5, 2710.0], [80.6, 2716.0], [80.7, 2718.0], [80.8, 2723.0], [80.9, 2729.0], [81.0, 2731.0], [81.1, 2734.0], [81.2, 2738.0], [81.3, 2747.0], [81.4, 2749.0], [81.5, 2754.0], [81.6, 2761.0], [81.7, 2767.0], [81.8, 2769.0], [81.9, 2772.0], [82.0, 2781.0], [82.1, 2784.0], [82.2, 2789.0], [82.3, 2791.0], [82.4, 2799.0], [82.5, 2803.0], [82.6, 2806.0], [82.7, 2815.0], [82.8, 2820.0], [82.9, 2825.0], [83.0, 2833.0], [83.1, 2837.0], [83.2, 2841.0], [83.3, 2845.0], [83.4, 2853.0], [83.5, 2858.0], [83.6, 2862.0], [83.7, 2878.0], [83.8, 2881.0], [83.9, 2887.0], [84.0, 2896.0], [84.1, 2907.0], [84.2, 2910.0], [84.3, 2914.0], [84.4, 2922.0], [84.5, 2932.0], [84.6, 2945.0], [84.7, 2949.0], [84.8, 2962.0], [84.9, 2970.0], [85.0, 2979.0], [85.1, 2992.0], [85.2, 3001.0], [85.3, 3011.0], [85.4, 3018.0], [85.5, 3028.0], [85.6, 3041.0], [85.7, 3052.0], [85.8, 3056.0], [85.9, 3067.0], [86.0, 3080.0], [86.1, 3090.0], [86.2, 3108.0], [86.3, 3122.0], [86.4, 3126.0], [86.5, 3145.0], [86.6, 3155.0], [86.7, 3162.0], [86.8, 3172.0], [86.9, 3188.0], [87.0, 3208.0], [87.1, 3214.0], [87.2, 3232.0], [87.3, 3239.0], [87.4, 3245.0], [87.5, 3254.0], [87.6, 3262.0], [87.7, 3269.0], [87.8, 3276.0], [87.9, 3282.0], [88.0, 3293.0], [88.1, 3309.0], [88.2, 3322.0], [88.3, 3341.0], [88.4, 3356.0], [88.5, 3377.0], [88.6, 3402.0], [88.7, 3416.0], [88.8, 3431.0], [88.9, 3451.0], [89.0, 3467.0], [89.1, 3483.0], [89.2, 3492.0], [89.3, 3503.0], [89.4, 3520.0], [89.5, 3534.0], [89.6, 3550.0], [89.7, 3565.0], [89.8, 3601.0], [89.9, 3617.0], [90.0, 3637.0], [90.1, 3648.0], [90.2, 3668.0], [90.3, 3676.0], [90.4, 3694.0], [90.5, 3713.0], [90.6, 3729.0], [90.7, 3755.0], [90.8, 3776.0], [90.9, 3783.0], [91.0, 3795.0], [91.1, 3808.0], [91.2, 3830.0], [91.3, 3838.0], [91.4, 3847.0], [91.5, 3864.0], [91.6, 3870.0], [91.7, 3881.0], [91.8, 3907.0], [91.9, 3923.0], [92.0, 3930.0], [92.1, 3936.0], [92.2, 3955.0], [92.3, 3988.0], [92.4, 3991.0], [92.5, 4003.0], [92.6, 4010.0], [92.7, 4023.0], [92.8, 4037.0], [92.9, 4045.0], [93.0, 4053.0], [93.1, 4065.0], [93.2, 4094.0], [93.3, 4103.0], [93.4, 4112.0], [93.5, 4117.0], [93.6, 4130.0], [93.7, 4143.0], [93.8, 4149.0], [93.9, 4156.0], [94.0, 4165.0], [94.1, 4187.0], [94.2, 4198.0], [94.3, 4208.0], [94.4, 4218.0], [94.5, 4231.0], [94.6, 4239.0], [94.7, 4246.0], [94.8, 4268.0], [94.9, 4278.0], [95.0, 4286.0], [95.1, 4306.0], [95.2, 4320.0], [95.3, 4333.0], [95.4, 4346.0], [95.5, 4376.0], [95.6, 4396.0], [95.7, 4407.0], [95.8, 4431.0], [95.9, 4459.0], [96.0, 4495.0], [96.1, 4506.0], [96.2, 4546.0], [96.3, 4573.0], [96.4, 4598.0], [96.5, 4630.0], [96.6, 4676.0], [96.7, 4694.0], [96.8, 4760.0], [96.9, 4790.0], [97.0, 4834.0], [97.1, 4925.0], [97.2, 4988.0], [97.3, 5106.0], [97.4, 5163.0], [97.5, 5216.0], [97.6, 5278.0], [97.7, 5345.0], [97.8, 5392.0], [97.9, 5471.0], [98.0, 5561.0], [98.1, 5579.0], [98.2, 5674.0], [98.3, 5757.0], [98.4, 5774.0], [98.5, 5929.0], [98.6, 6049.0], [98.7, 6133.0], [98.8, 6324.0], [98.9, 6457.0], [99.0, 6705.0], [99.1, 6825.0], [99.2, 7162.0], [99.3, 7279.0], [99.4, 7393.0], [99.5, 7642.0], [99.6, 7890.0], [99.7, 8382.0], [99.8, 8871.0], [99.9, 9491.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 546.0, "series": [{"data": [[0.0, 546.0], [600.0, 219.0], [700.0, 149.0], [800.0, 120.0], [900.0, 92.0], [1000.0, 103.0], [1100.0, 74.0], [1200.0, 93.0], [1300.0, 89.0], [1400.0, 92.0], [1500.0, 72.0], [1600.0, 70.0], [1700.0, 67.0], [1800.0, 64.0], [1900.0, 82.0], [2000.0, 123.0], [2100.0, 136.0], [2200.0, 131.0], [2300.0, 93.0], [2400.0, 79.0], [2500.0, 90.0], [2600.0, 101.0], [2700.0, 111.0], [2800.0, 85.0], [2900.0, 59.0], [3000.0, 50.0], [3100.0, 42.0], [3200.0, 57.0], [3300.0, 28.0], [3400.0, 35.0], [3500.0, 27.0], [3700.0, 31.0], [3600.0, 34.0], [3800.0, 39.0], [3900.0, 36.0], [4000.0, 40.0], [4200.0, 43.0], [4300.0, 30.0], [4100.0, 50.0], [4400.0, 22.0], [4500.0, 19.0], [4600.0, 17.0], [4800.0, 8.0], [4700.0, 9.0], [5100.0, 11.0], [5000.0, 3.0], [4900.0, 7.0], [5300.0, 8.0], [5200.0, 9.0], [5500.0, 11.0], [5400.0, 6.0], [5600.0, 6.0], [5700.0, 8.0], [5800.0, 5.0], [5900.0, 4.0], [6100.0, 3.0], [6000.0, 5.0], [6300.0, 4.0], [6200.0, 3.0], [6500.0, 3.0], [6600.0, 1.0], [6400.0, 3.0], [6700.0, 5.0], [6800.0, 3.0], [6900.0, 1.0], [7100.0, 4.0], [7300.0, 5.0], [7200.0, 3.0], [7400.0, 3.0], [7500.0, 2.0], [7600.0, 2.0], [7800.0, 3.0], [7900.0, 2.0], [7700.0, 2.0], [8400.0, 1.0], [8500.0, 1.0], [8600.0, 2.0], [8300.0, 1.0], [8200.0, 1.0], [8800.0, 1.0], [8900.0, 1.0], [9000.0, 1.0], [9400.0, 3.0], [10000.0, 1.0], [9900.0, 1.0], [11300.0, 1.0], [11500.0, 1.0], [12800.0, 1.0], [100.0, 481.0], [200.0, 373.0], [300.0, 205.0], [400.0, 190.0], [500.0, 232.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 12800.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 1262.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2132.0, "series": [{"data": [[0.0, 1796.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1262.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 2132.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.891089108910888, "minX": 1.60405452E12, "maxY": 10.0, "series": [{"data": [[1.60405476E12, 10.0], [1.60405506E12, 10.0], [1.60405452E12, 9.986486486486484], [1.60405518E12, 10.0], [1.60405482E12, 10.0], [1.60405512E12, 10.0], [1.60405494E12, 10.0], [1.60405524E12, 10.0], [1.60405458E12, 10.0], [1.60405488E12, 10.0], [1.6040547E12, 10.0], [1.604055E12, 10.0], [1.60405464E12, 10.0], [1.6040553E12, 9.891089108910888]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6040553E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 1377.5, "minX": 1.0, "maxY": 5570.0, "series": [{"data": [[8.0, 2788.0], [4.0, 5570.0], [2.0, 4110.0], [1.0, 4114.0], [9.0, 1377.5], [10.0, 1517.7806949806952], [5.0, 2542.0], [3.0, 2484.0], [7.0, 3064.5]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.991329479768792, 1520.7314065510607]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 502.73333333333335, "minX": 1.60405452E12, "maxY": 2934883.4, "series": [{"data": [[1.60405476E12, 2215303.6], [1.60405506E12, 2583343.95], [1.60405452E12, 587446.4666666667], [1.60405518E12, 2514233.3], [1.60405482E12, 2777207.7], [1.60405512E12, 2595651.216666667], [1.60405494E12, 2863843.4166666665], [1.60405524E12, 2683524.816666667], [1.60405458E12, 2934883.4], [1.60405488E12, 2797105.566666667], [1.6040547E12, 2702189.15], [1.604055E12, 2704195.6666666665], [1.60405464E12, 2221839.4], [1.6040553E12, 2732354.6666666665]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60405476E12, 2015.0833333333333], [1.60405506E12, 3429.5], [1.60405452E12, 502.73333333333335], [1.60405518E12, 2823.8333333333335], [1.60405482E12, 2851.5833333333335], [1.60405512E12, 1775.95], [1.60405494E12, 2554.483333333333], [1.60405524E12, 2828.4166666666665], [1.60405458E12, 2773.3166666666666], [1.60405488E12, 3150.9166666666665], [1.6040547E12, 2138.633333333333], [1.604055E12, 2677.233333333333], [1.60405464E12, 2809.6], [1.6040553E12, 2812.483333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6040553E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 1158.854651162791, "minX": 1.60405452E12, "maxY": 2175.187265917603, "series": [{"data": [[1.60405476E12, 2053.7551020408173], [1.60405506E12, 1158.854651162791], [1.60405452E12, 1762.1081081081088], [1.60405518E12, 1507.8014705882351], [1.60405482E12, 1438.774818401937], [1.60405512E12, 2175.187265917603], [1.60405494E12, 1559.1375661375666], [1.60405524E12, 1466.7872860635694], [1.60405458E12, 1426.7230046948375], [1.60405488E12, 1351.5430463576172], [1.6040547E12, 1872.0640243902433], [1.604055E12, 1483.3448275862077], [1.60405464E12, 1413.007246376813], [1.6040553E12, 1385.3762376237626]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6040553E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 1156.9302325581386, "minX": 1.60405452E12, "maxY": 2171.812734082397, "series": [{"data": [[1.60405476E12, 2050.574829931973], [1.60405506E12, 1156.9302325581386], [1.60405452E12, 1758.4864864864865], [1.60405518E12, 1505.2450980392157], [1.60405482E12, 1435.9733656174342], [1.60405512E12, 2171.812734082397], [1.60405494E12, 1556.3650793650786], [1.60405524E12, 1464.2469437652805], [1.60405458E12, 1423.1948356807522], [1.60405488E12, 1349.0397350993383], [1.6040547E12, 1868.01219512195], [1.604055E12, 1480.7019704433499], [1.60405464E12, 1410.4251207729462], [1.6040553E12, 1382.7995049504962]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6040553E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.019607843137254916, "minX": 1.60405452E12, "maxY": 1.68918918918919, "series": [{"data": [[1.60405476E12, 0.04081632653061224], [1.60405506E12, 0.048449612403100785], [1.60405452E12, 1.68918918918919], [1.60405518E12, 0.019607843137254916], [1.60405482E12, 0.02663438256658595], [1.60405512E12, 0.02996254681647941], [1.60405494E12, 0.026455026455026457], [1.60405524E12, 0.026894865525672357], [1.60405458E12, 0.023474178403755864], [1.60405488E12, 0.024282560706401748], [1.6040547E12, 0.03048780487804878], [1.604055E12, 0.0270935960591133], [1.60405464E12, 0.024154589371980686], [1.6040553E12, 0.03217821782178217]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6040553E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 6.0, "minX": 1.60405452E12, "maxY": 12826.0, "series": [{"data": [[1.60405476E12, 12826.0], [1.60405506E12, 9431.0], [1.60405452E12, 8466.0], [1.60405518E12, 11552.0], [1.60405482E12, 7563.0], [1.60405512E12, 6910.0], [1.60405494E12, 7944.0], [1.60405524E12, 7731.0], [1.60405458E12, 9491.0], [1.60405488E12, 9002.0], [1.6040547E12, 11388.0], [1.604055E12, 7885.0], [1.60405464E12, 7559.0], [1.6040553E12, 6705.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60405476E12, 18.30999985933304], [1.60405506E12, 16.652999876737596], [1.60405452E12, 18.0], [1.60405518E12, 17.6809999024868], [1.60405482E12, 8.0], [1.60405512E12, 18.411999936103822], [1.60405494E12, 17.410999909639358], [1.60405524E12, 9.0], [1.60405458E12, 29.5289996945858], [1.60405488E12, 18.085999891757965], [1.6040547E12, 23.843999686241148], [1.604055E12, 19.662999902963637], [1.60405464E12, 19.20499970316887], [1.6040553E12, 19.644999903440475]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60405476E12, 18.841000056266786], [1.60405506E12, 17.118300049304963], [1.60405452E12, 18.0], [1.60405518E12, 18.049100039005282], [1.60405482E12, 8.197200078964233], [1.60405512E12, 18.653200025558473], [1.60405494E12, 17.752100036144256], [1.60405524E12, 9.177000117301942], [1.60405458E12, 32.50030044794082], [1.60405488E12, 18.494600043296813], [1.6040547E12, 24.771300094127653], [1.604055E12, 20.087900116443635], [1.60405464E12, 20.0], [1.6040553E12, 20.019000077247618]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60405476E12, 18.60499992966652], [1.60405506E12, 16.9114999383688], [1.60405452E12, 18.0], [1.60405518E12, 17.8854999512434], [1.60405482E12, 8.0], [1.60405512E12, 18.54599996805191], [1.60405494E12, 17.60049995481968], [1.60405524E12, 9.0], [1.60405458E12, 30.62149944007396], [1.60405488E12, 18.312999945878982], [1.6040547E12, 24.37649988234043], [1.604055E12, 19.86649995148182], [1.60405464E12, 19.827499851584435], [1.6040553E12, 19.847499951720238]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60405476E12, 12.0], [1.60405506E12, 13.0], [1.60405452E12, 18.0], [1.60405518E12, 14.0], [1.60405482E12, 6.0], [1.60405512E12, 15.0], [1.60405494E12, 16.0], [1.60405524E12, 6.0], [1.60405458E12, 20.0], [1.60405488E12, 14.0], [1.6040547E12, 13.0], [1.604055E12, 10.0], [1.60405464E12, 13.0], [1.6040553E12, 12.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60405476E12, 1919.0], [1.60405506E12, 603.5], [1.60405452E12, 1089.0], [1.60405518E12, 735.5], [1.60405482E12, 667.0], [1.60405512E12, 2266.0], [1.60405494E12, 1231.0], [1.60405524E12, 897.0], [1.60405458E12, 1028.5], [1.60405488E12, 778.0], [1.6040547E12, 2037.5], [1.604055E12, 1396.0], [1.60405464E12, 980.5], [1.6040553E12, 913.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6040553E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 156.0, "minX": 1.0, "maxY": 2499.0, "series": [{"data": [[2.0, 2499.0], [32.0, 156.0], [3.0, 2229.5], [4.0, 2029.5], [5.0, 1996.5], [6.0, 1730.5], [7.0, 1443.0], [8.0, 955.5], [9.0, 780.0], [10.0, 711.0], [11.0, 481.0], [12.0, 554.0], [13.0, 420.0], [14.0, 417.0], [15.0, 302.0], [1.0, 2239.5], [16.0, 520.0], [17.0, 302.0], [18.0, 294.5], [19.0, 233.0], [20.0, 228.0], [21.0, 252.0], [22.0, 231.5], [23.0, 276.0], [25.0, 206.0], [29.0, 156.0], [30.0, 196.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 32.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 153.0, "minX": 1.0, "maxY": 2493.5, "series": [{"data": [[2.0, 2493.5], [32.0, 155.0], [3.0, 2227.0], [4.0, 2026.5], [5.0, 1994.5], [6.0, 1728.5], [7.0, 1441.0], [8.0, 954.5], [9.0, 779.0], [10.0, 709.5], [11.0, 481.0], [12.0, 552.0], [13.0, 419.0], [14.0, 414.5], [15.0, 300.0], [1.0, 2236.0], [16.0, 518.0], [17.0, 298.5], [18.0, 292.0], [19.0, 232.0], [20.0, 227.5], [21.0, 249.0], [22.0, 228.5], [23.0, 274.0], [25.0, 206.0], [29.0, 153.0], [30.0, 195.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 32.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1.4, "minX": 1.60405452E12, "maxY": 8.6, "series": [{"data": [[1.60405476E12, 4.9], [1.60405506E12, 8.6], [1.60405452E12, 1.4], [1.60405518E12, 6.8], [1.60405482E12, 6.883333333333334], [1.60405512E12, 4.45], [1.60405494E12, 6.3], [1.60405524E12, 6.816666666666666], [1.60405458E12, 7.1], [1.60405488E12, 7.55], [1.6040547E12, 5.466666666666667], [1.604055E12, 6.766666666666667], [1.60405464E12, 6.9], [1.6040553E12, 6.566666666666666]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6040553E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1.2333333333333334, "minX": 1.60405452E12, "maxY": 8.6, "series": [{"data": [[1.60405476E12, 4.9], [1.60405506E12, 8.6], [1.60405452E12, 1.2333333333333334], [1.60405518E12, 6.8], [1.60405482E12, 6.883333333333334], [1.60405512E12, 4.45], [1.60405494E12, 6.3], [1.60405524E12, 6.816666666666666], [1.60405458E12, 7.1], [1.60405488E12, 7.55], [1.6040547E12, 5.466666666666667], [1.604055E12, 6.766666666666667], [1.60405464E12, 6.9], [1.6040553E12, 6.733333333333333]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6040553E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.2333333333333334, "minX": 1.60405452E12, "maxY": 8.6, "series": [{"data": [[1.60405476E12, 4.9], [1.60405506E12, 8.6], [1.60405452E12, 1.2333333333333334], [1.60405518E12, 6.8], [1.60405482E12, 6.883333333333334], [1.60405512E12, 4.45], [1.60405494E12, 6.3], [1.60405524E12, 6.816666666666666], [1.60405458E12, 7.1], [1.60405488E12, 7.55], [1.6040547E12, 5.466666666666667], [1.604055E12, 6.766666666666667], [1.60405464E12, 6.9], [1.6040553E12, 6.733333333333333]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6040553E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.2333333333333334, "minX": 1.60405452E12, "maxY": 8.6, "series": [{"data": [[1.60405476E12, 4.9], [1.60405506E12, 8.6], [1.60405452E12, 1.2333333333333334], [1.60405518E12, 6.8], [1.60405482E12, 6.883333333333334], [1.60405512E12, 4.45], [1.60405494E12, 6.3], [1.60405524E12, 6.816666666666666], [1.60405458E12, 7.1], [1.60405488E12, 7.55], [1.6040547E12, 5.466666666666667], [1.604055E12, 6.766666666666667], [1.60405464E12, 6.9], [1.6040553E12, 6.733333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6040553E12, "title": "Total Transactions Per Second"}},
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

