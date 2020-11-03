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
        data: {"result": {"minY": 7.0, "minX": 0.0, "maxY": 14260.0, "series": [{"data": [[0.0, 7.0], [0.1, 9.0], [0.2, 11.0], [0.3, 12.0], [0.4, 13.0], [0.5, 14.0], [0.6, 15.0], [0.7, 16.0], [0.8, 16.0], [0.9, 17.0], [1.0, 18.0], [1.1, 18.0], [1.2, 19.0], [1.3, 20.0], [1.4, 20.0], [1.5, 21.0], [1.6, 22.0], [1.7, 22.0], [1.8, 23.0], [1.9, 24.0], [2.0, 24.0], [2.1, 24.0], [2.2, 26.0], [2.3, 26.0], [2.4, 27.0], [2.5, 27.0], [2.6, 28.0], [2.7, 28.0], [2.8, 29.0], [2.9, 29.0], [3.0, 30.0], [3.1, 30.0], [3.2, 31.0], [3.3, 31.0], [3.4, 33.0], [3.5, 34.0], [3.6, 35.0], [3.7, 37.0], [3.8, 38.0], [3.9, 38.0], [4.0, 40.0], [4.1, 41.0], [4.2, 42.0], [4.3, 43.0], [4.4, 43.0], [4.5, 44.0], [4.6, 44.0], [4.7, 45.0], [4.8, 46.0], [4.9, 46.0], [5.0, 47.0], [5.1, 48.0], [5.2, 49.0], [5.3, 49.0], [5.4, 50.0], [5.5, 50.0], [5.6, 51.0], [5.7, 52.0], [5.8, 53.0], [5.9, 53.0], [6.0, 54.0], [6.1, 54.0], [6.2, 55.0], [6.3, 57.0], [6.4, 58.0], [6.5, 59.0], [6.6, 60.0], [6.7, 60.0], [6.8, 61.0], [6.9, 63.0], [7.0, 63.0], [7.1, 65.0], [7.2, 66.0], [7.3, 67.0], [7.4, 68.0], [7.5, 70.0], [7.6, 70.0], [7.7, 71.0], [7.8, 72.0], [7.9, 74.0], [8.0, 76.0], [8.1, 76.0], [8.2, 77.0], [8.3, 78.0], [8.4, 79.0], [8.5, 81.0], [8.6, 82.0], [8.7, 84.0], [8.8, 86.0], [8.9, 88.0], [9.0, 89.0], [9.1, 89.0], [9.2, 91.0], [9.3, 91.0], [9.4, 92.0], [9.5, 93.0], [9.6, 94.0], [9.7, 94.0], [9.8, 95.0], [9.9, 95.0], [10.0, 95.0], [10.1, 96.0], [10.2, 96.0], [10.3, 97.0], [10.4, 98.0], [10.5, 99.0], [10.6, 99.0], [10.7, 100.0], [10.8, 100.0], [10.9, 101.0], [11.0, 102.0], [11.1, 103.0], [11.2, 103.0], [11.3, 103.0], [11.4, 104.0], [11.5, 105.0], [11.6, 106.0], [11.7, 107.0], [11.8, 108.0], [11.9, 108.0], [12.0, 109.0], [12.1, 109.0], [12.2, 110.0], [12.3, 110.0], [12.4, 110.0], [12.5, 111.0], [12.6, 112.0], [12.7, 113.0], [12.8, 114.0], [12.9, 115.0], [13.0, 116.0], [13.1, 117.0], [13.2, 117.0], [13.3, 118.0], [13.4, 119.0], [13.5, 120.0], [13.6, 121.0], [13.7, 122.0], [13.8, 123.0], [13.9, 124.0], [14.0, 125.0], [14.1, 126.0], [14.2, 127.0], [14.3, 128.0], [14.4, 129.0], [14.5, 130.0], [14.6, 131.0], [14.7, 134.0], [14.8, 136.0], [14.9, 137.0], [15.0, 138.0], [15.1, 140.0], [15.2, 141.0], [15.3, 143.0], [15.4, 144.0], [15.5, 145.0], [15.6, 146.0], [15.7, 147.0], [15.8, 148.0], [15.9, 149.0], [16.0, 150.0], [16.1, 152.0], [16.2, 153.0], [16.3, 154.0], [16.4, 155.0], [16.5, 157.0], [16.6, 157.0], [16.7, 158.0], [16.8, 159.0], [16.9, 161.0], [17.0, 162.0], [17.1, 164.0], [17.2, 165.0], [17.3, 166.0], [17.4, 166.0], [17.5, 167.0], [17.6, 169.0], [17.7, 169.0], [17.8, 171.0], [17.9, 173.0], [18.0, 174.0], [18.1, 175.0], [18.2, 177.0], [18.3, 178.0], [18.4, 179.0], [18.5, 180.0], [18.6, 180.0], [18.7, 181.0], [18.8, 183.0], [18.9, 184.0], [19.0, 185.0], [19.1, 186.0], [19.2, 186.0], [19.3, 188.0], [19.4, 189.0], [19.5, 190.0], [19.6, 191.0], [19.7, 191.0], [19.8, 193.0], [19.9, 196.0], [20.0, 196.0], [20.1, 198.0], [20.2, 199.0], [20.3, 200.0], [20.4, 201.0], [20.5, 202.0], [20.6, 205.0], [20.7, 205.0], [20.8, 206.0], [20.9, 208.0], [21.0, 209.0], [21.1, 210.0], [21.2, 212.0], [21.3, 213.0], [21.4, 216.0], [21.5, 218.0], [21.6, 219.0], [21.7, 220.0], [21.8, 221.0], [21.9, 223.0], [22.0, 225.0], [22.1, 227.0], [22.2, 229.0], [22.3, 230.0], [22.4, 232.0], [22.5, 233.0], [22.6, 235.0], [22.7, 236.0], [22.8, 238.0], [22.9, 239.0], [23.0, 241.0], [23.1, 243.0], [23.2, 245.0], [23.3, 247.0], [23.4, 249.0], [23.5, 250.0], [23.6, 251.0], [23.7, 252.0], [23.8, 256.0], [23.9, 257.0], [24.0, 258.0], [24.1, 259.0], [24.2, 260.0], [24.3, 262.0], [24.4, 264.0], [24.5, 265.0], [24.6, 267.0], [24.7, 268.0], [24.8, 271.0], [24.9, 272.0], [25.0, 273.0], [25.1, 274.0], [25.2, 275.0], [25.3, 278.0], [25.4, 279.0], [25.5, 281.0], [25.6, 284.0], [25.7, 285.0], [25.8, 287.0], [25.9, 288.0], [26.0, 290.0], [26.1, 291.0], [26.2, 293.0], [26.3, 294.0], [26.4, 296.0], [26.5, 297.0], [26.6, 298.0], [26.7, 300.0], [26.8, 301.0], [26.9, 306.0], [27.0, 308.0], [27.1, 309.0], [27.2, 312.0], [27.3, 313.0], [27.4, 316.0], [27.5, 318.0], [27.6, 320.0], [27.7, 321.0], [27.8, 322.0], [27.9, 323.0], [28.0, 325.0], [28.1, 327.0], [28.2, 329.0], [28.3, 330.0], [28.4, 333.0], [28.5, 336.0], [28.6, 337.0], [28.7, 342.0], [28.8, 345.0], [28.9, 347.0], [29.0, 350.0], [29.1, 352.0], [29.2, 352.0], [29.3, 353.0], [29.4, 356.0], [29.5, 359.0], [29.6, 360.0], [29.7, 362.0], [29.8, 365.0], [29.9, 369.0], [30.0, 371.0], [30.1, 374.0], [30.2, 377.0], [30.3, 379.0], [30.4, 381.0], [30.5, 383.0], [30.6, 384.0], [30.7, 387.0], [30.8, 392.0], [30.9, 396.0], [31.0, 401.0], [31.1, 405.0], [31.2, 408.0], [31.3, 412.0], [31.4, 416.0], [31.5, 419.0], [31.6, 422.0], [31.7, 429.0], [31.8, 430.0], [31.9, 433.0], [32.0, 435.0], [32.1, 440.0], [32.2, 443.0], [32.3, 445.0], [32.4, 450.0], [32.5, 452.0], [32.6, 454.0], [32.7, 457.0], [32.8, 461.0], [32.9, 464.0], [33.0, 469.0], [33.1, 472.0], [33.2, 477.0], [33.3, 480.0], [33.4, 485.0], [33.5, 486.0], [33.6, 488.0], [33.7, 490.0], [33.8, 493.0], [33.9, 495.0], [34.0, 498.0], [34.1, 500.0], [34.2, 501.0], [34.3, 506.0], [34.4, 508.0], [34.5, 510.0], [34.6, 512.0], [34.7, 513.0], [34.8, 516.0], [34.9, 520.0], [35.0, 524.0], [35.1, 527.0], [35.2, 531.0], [35.3, 533.0], [35.4, 535.0], [35.5, 539.0], [35.6, 541.0], [35.7, 546.0], [35.8, 549.0], [35.9, 552.0], [36.0, 554.0], [36.1, 556.0], [36.2, 559.0], [36.3, 561.0], [36.4, 562.0], [36.5, 564.0], [36.6, 567.0], [36.7, 568.0], [36.8, 570.0], [36.9, 573.0], [37.0, 575.0], [37.1, 576.0], [37.2, 579.0], [37.3, 581.0], [37.4, 583.0], [37.5, 586.0], [37.6, 588.0], [37.7, 590.0], [37.8, 593.0], [37.9, 596.0], [38.0, 598.0], [38.1, 599.0], [38.2, 600.0], [38.3, 602.0], [38.4, 604.0], [38.5, 608.0], [38.6, 609.0], [38.7, 611.0], [38.8, 613.0], [38.9, 615.0], [39.0, 617.0], [39.1, 619.0], [39.2, 622.0], [39.3, 624.0], [39.4, 626.0], [39.5, 629.0], [39.6, 632.0], [39.7, 634.0], [39.8, 638.0], [39.9, 640.0], [40.0, 641.0], [40.1, 646.0], [40.2, 648.0], [40.3, 650.0], [40.4, 652.0], [40.5, 653.0], [40.6, 656.0], [40.7, 657.0], [40.8, 660.0], [40.9, 665.0], [41.0, 668.0], [41.1, 670.0], [41.2, 673.0], [41.3, 678.0], [41.4, 681.0], [41.5, 684.0], [41.6, 685.0], [41.7, 688.0], [41.8, 690.0], [41.9, 691.0], [42.0, 694.0], [42.1, 696.0], [42.2, 698.0], [42.3, 700.0], [42.4, 703.0], [42.5, 705.0], [42.6, 707.0], [42.7, 710.0], [42.8, 713.0], [42.9, 715.0], [43.0, 717.0], [43.1, 722.0], [43.2, 725.0], [43.3, 727.0], [43.4, 731.0], [43.5, 733.0], [43.6, 736.0], [43.7, 739.0], [43.8, 742.0], [43.9, 745.0], [44.0, 748.0], [44.1, 753.0], [44.2, 757.0], [44.3, 762.0], [44.4, 765.0], [44.5, 773.0], [44.6, 774.0], [44.7, 779.0], [44.8, 782.0], [44.9, 787.0], [45.0, 791.0], [45.1, 797.0], [45.2, 801.0], [45.3, 807.0], [45.4, 811.0], [45.5, 816.0], [45.6, 820.0], [45.7, 823.0], [45.8, 827.0], [45.9, 833.0], [46.0, 837.0], [46.1, 842.0], [46.2, 845.0], [46.3, 849.0], [46.4, 854.0], [46.5, 855.0], [46.6, 862.0], [46.7, 866.0], [46.8, 871.0], [46.9, 877.0], [47.0, 884.0], [47.1, 887.0], [47.2, 889.0], [47.3, 895.0], [47.4, 898.0], [47.5, 907.0], [47.6, 911.0], [47.7, 914.0], [47.8, 917.0], [47.9, 921.0], [48.0, 929.0], [48.1, 936.0], [48.2, 939.0], [48.3, 945.0], [48.4, 949.0], [48.5, 955.0], [48.6, 960.0], [48.7, 969.0], [48.8, 976.0], [48.9, 981.0], [49.0, 987.0], [49.1, 989.0], [49.2, 994.0], [49.3, 996.0], [49.4, 1001.0], [49.5, 1009.0], [49.6, 1013.0], [49.7, 1017.0], [49.8, 1019.0], [49.9, 1022.0], [50.0, 1033.0], [50.1, 1037.0], [50.2, 1043.0], [50.3, 1046.0], [50.4, 1049.0], [50.5, 1055.0], [50.6, 1061.0], [50.7, 1068.0], [50.8, 1072.0], [50.9, 1077.0], [51.0, 1084.0], [51.1, 1092.0], [51.2, 1100.0], [51.3, 1103.0], [51.4, 1109.0], [51.5, 1115.0], [51.6, 1119.0], [51.7, 1122.0], [51.8, 1127.0], [51.9, 1133.0], [52.0, 1136.0], [52.1, 1145.0], [52.2, 1151.0], [52.3, 1156.0], [52.4, 1165.0], [52.5, 1167.0], [52.6, 1170.0], [52.7, 1182.0], [52.8, 1188.0], [52.9, 1195.0], [53.0, 1200.0], [53.1, 1203.0], [53.2, 1211.0], [53.3, 1218.0], [53.4, 1225.0], [53.5, 1230.0], [53.6, 1235.0], [53.7, 1243.0], [53.8, 1247.0], [53.9, 1251.0], [54.0, 1255.0], [54.1, 1261.0], [54.2, 1266.0], [54.3, 1275.0], [54.4, 1277.0], [54.5, 1280.0], [54.6, 1286.0], [54.7, 1291.0], [54.8, 1296.0], [54.9, 1297.0], [55.0, 1301.0], [55.1, 1308.0], [55.2, 1311.0], [55.3, 1315.0], [55.4, 1323.0], [55.5, 1329.0], [55.6, 1333.0], [55.7, 1339.0], [55.8, 1344.0], [55.9, 1351.0], [56.0, 1356.0], [56.1, 1362.0], [56.2, 1371.0], [56.3, 1380.0], [56.4, 1388.0], [56.5, 1394.0], [56.6, 1401.0], [56.7, 1409.0], [56.8, 1415.0], [56.9, 1424.0], [57.0, 1427.0], [57.1, 1429.0], [57.2, 1435.0], [57.3, 1438.0], [57.4, 1445.0], [57.5, 1447.0], [57.6, 1453.0], [57.7, 1456.0], [57.8, 1460.0], [57.9, 1464.0], [58.0, 1471.0], [58.1, 1477.0], [58.2, 1482.0], [58.3, 1486.0], [58.4, 1492.0], [58.5, 1501.0], [58.6, 1506.0], [58.7, 1512.0], [58.8, 1520.0], [58.9, 1531.0], [59.0, 1541.0], [59.1, 1546.0], [59.2, 1551.0], [59.3, 1556.0], [59.4, 1559.0], [59.5, 1569.0], [59.6, 1580.0], [59.7, 1586.0], [59.8, 1594.0], [59.9, 1601.0], [60.0, 1605.0], [60.1, 1622.0], [60.2, 1629.0], [60.3, 1631.0], [60.4, 1633.0], [60.5, 1638.0], [60.6, 1643.0], [60.7, 1648.0], [60.8, 1654.0], [60.9, 1656.0], [61.0, 1664.0], [61.1, 1672.0], [61.2, 1681.0], [61.3, 1693.0], [61.4, 1701.0], [61.5, 1709.0], [61.6, 1715.0], [61.7, 1720.0], [61.8, 1724.0], [61.9, 1739.0], [62.0, 1752.0], [62.1, 1765.0], [62.2, 1784.0], [62.3, 1792.0], [62.4, 1798.0], [62.5, 1810.0], [62.6, 1815.0], [62.7, 1820.0], [62.8, 1830.0], [62.9, 1833.0], [63.0, 1838.0], [63.1, 1841.0], [63.2, 1853.0], [63.3, 1860.0], [63.4, 1869.0], [63.5, 1873.0], [63.6, 1881.0], [63.7, 1886.0], [63.8, 1892.0], [63.9, 1899.0], [64.0, 1907.0], [64.1, 1913.0], [64.2, 1926.0], [64.3, 1930.0], [64.4, 1934.0], [64.5, 1945.0], [64.6, 1952.0], [64.7, 1958.0], [64.8, 1964.0], [64.9, 1969.0], [65.0, 1973.0], [65.1, 1976.0], [65.2, 1980.0], [65.3, 1992.0], [65.4, 1996.0], [65.5, 2003.0], [65.6, 2008.0], [65.7, 2014.0], [65.8, 2018.0], [65.9, 2024.0], [66.0, 2031.0], [66.1, 2038.0], [66.2, 2041.0], [66.3, 2045.0], [66.4, 2049.0], [66.5, 2055.0], [66.6, 2058.0], [66.7, 2062.0], [66.8, 2065.0], [66.9, 2069.0], [67.0, 2072.0], [67.1, 2073.0], [67.2, 2075.0], [67.3, 2077.0], [67.4, 2079.0], [67.5, 2082.0], [67.6, 2083.0], [67.7, 2087.0], [67.8, 2089.0], [67.9, 2094.0], [68.0, 2097.0], [68.1, 2099.0], [68.2, 2103.0], [68.3, 2104.0], [68.4, 2109.0], [68.5, 2113.0], [68.6, 2118.0], [68.7, 2119.0], [68.8, 2122.0], [68.9, 2124.0], [69.0, 2128.0], [69.1, 2129.0], [69.2, 2132.0], [69.3, 2136.0], [69.4, 2139.0], [69.5, 2142.0], [69.6, 2145.0], [69.7, 2146.0], [69.8, 2149.0], [69.9, 2153.0], [70.0, 2154.0], [70.1, 2159.0], [70.2, 2162.0], [70.3, 2164.0], [70.4, 2166.0], [70.5, 2167.0], [70.6, 2171.0], [70.7, 2174.0], [70.8, 2178.0], [70.9, 2181.0], [71.0, 2189.0], [71.1, 2192.0], [71.2, 2196.0], [71.3, 2200.0], [71.4, 2207.0], [71.5, 2211.0], [71.6, 2215.0], [71.7, 2217.0], [71.8, 2219.0], [71.9, 2220.0], [72.0, 2224.0], [72.1, 2226.0], [72.2, 2230.0], [72.3, 2233.0], [72.4, 2236.0], [72.5, 2238.0], [72.6, 2244.0], [72.7, 2247.0], [72.8, 2249.0], [72.9, 2251.0], [73.0, 2252.0], [73.1, 2259.0], [73.2, 2264.0], [73.3, 2269.0], [73.4, 2275.0], [73.5, 2279.0], [73.6, 2285.0], [73.7, 2287.0], [73.8, 2290.0], [73.9, 2294.0], [74.0, 2296.0], [74.1, 2303.0], [74.2, 2306.0], [74.3, 2311.0], [74.4, 2319.0], [74.5, 2327.0], [74.6, 2328.0], [74.7, 2331.0], [74.8, 2333.0], [74.9, 2339.0], [75.0, 2341.0], [75.1, 2349.0], [75.2, 2355.0], [75.3, 2360.0], [75.4, 2370.0], [75.5, 2374.0], [75.6, 2376.0], [75.7, 2383.0], [75.8, 2385.0], [75.9, 2393.0], [76.0, 2401.0], [76.1, 2406.0], [76.2, 2415.0], [76.3, 2418.0], [76.4, 2428.0], [76.5, 2437.0], [76.6, 2442.0], [76.7, 2446.0], [76.8, 2452.0], [76.9, 2462.0], [77.0, 2466.0], [77.1, 2468.0], [77.2, 2477.0], [77.3, 2487.0], [77.4, 2500.0], [77.5, 2509.0], [77.6, 2512.0], [77.7, 2520.0], [77.8, 2531.0], [77.9, 2540.0], [78.0, 2547.0], [78.1, 2551.0], [78.2, 2554.0], [78.3, 2556.0], [78.4, 2560.0], [78.5, 2566.0], [78.6, 2571.0], [78.7, 2576.0], [78.8, 2585.0], [78.9, 2588.0], [79.0, 2595.0], [79.1, 2598.0], [79.2, 2606.0], [79.3, 2612.0], [79.4, 2614.0], [79.5, 2619.0], [79.6, 2621.0], [79.7, 2628.0], [79.8, 2631.0], [79.9, 2637.0], [80.0, 2640.0], [80.1, 2646.0], [80.2, 2647.0], [80.3, 2652.0], [80.4, 2655.0], [80.5, 2657.0], [80.6, 2667.0], [80.7, 2672.0], [80.8, 2679.0], [80.9, 2685.0], [81.0, 2690.0], [81.1, 2702.0], [81.2, 2707.0], [81.3, 2711.0], [81.4, 2716.0], [81.5, 2717.0], [81.6, 2723.0], [81.7, 2728.0], [81.8, 2733.0], [81.9, 2738.0], [82.0, 2742.0], [82.1, 2747.0], [82.2, 2754.0], [82.3, 2757.0], [82.4, 2762.0], [82.5, 2768.0], [82.6, 2771.0], [82.7, 2777.0], [82.8, 2781.0], [82.9, 2786.0], [83.0, 2793.0], [83.1, 2802.0], [83.2, 2815.0], [83.3, 2826.0], [83.4, 2837.0], [83.5, 2843.0], [83.6, 2847.0], [83.7, 2853.0], [83.8, 2857.0], [83.9, 2865.0], [84.0, 2882.0], [84.1, 2887.0], [84.2, 2896.0], [84.3, 2904.0], [84.4, 2909.0], [84.5, 2920.0], [84.6, 2928.0], [84.7, 2935.0], [84.8, 2941.0], [84.9, 2949.0], [85.0, 2957.0], [85.1, 2962.0], [85.2, 2970.0], [85.3, 2985.0], [85.4, 2993.0], [85.5, 3000.0], [85.6, 3010.0], [85.7, 3013.0], [85.8, 3024.0], [85.9, 3029.0], [86.0, 3041.0], [86.1, 3047.0], [86.2, 3053.0], [86.3, 3061.0], [86.4, 3074.0], [86.5, 3085.0], [86.6, 3091.0], [86.7, 3096.0], [86.8, 3101.0], [86.9, 3107.0], [87.0, 3114.0], [87.1, 3125.0], [87.2, 3136.0], [87.3, 3146.0], [87.4, 3157.0], [87.5, 3162.0], [87.6, 3173.0], [87.7, 3193.0], [87.8, 3203.0], [87.9, 3225.0], [88.0, 3235.0], [88.1, 3246.0], [88.2, 3261.0], [88.3, 3268.0], [88.4, 3292.0], [88.5, 3298.0], [88.6, 3324.0], [88.7, 3347.0], [88.8, 3352.0], [88.9, 3362.0], [89.0, 3386.0], [89.1, 3403.0], [89.2, 3411.0], [89.3, 3424.0], [89.4, 3436.0], [89.5, 3443.0], [89.6, 3474.0], [89.7, 3482.0], [89.8, 3494.0], [89.9, 3504.0], [90.0, 3513.0], [90.1, 3525.0], [90.2, 3534.0], [90.3, 3543.0], [90.4, 3559.0], [90.5, 3575.0], [90.6, 3583.0], [90.7, 3595.0], [90.8, 3611.0], [90.9, 3634.0], [91.0, 3646.0], [91.1, 3659.0], [91.2, 3680.0], [91.3, 3690.0], [91.4, 3706.0], [91.5, 3726.0], [91.6, 3746.0], [91.7, 3767.0], [91.8, 3783.0], [91.9, 3809.0], [92.0, 3822.0], [92.1, 3847.0], [92.2, 3863.0], [92.3, 3868.0], [92.4, 3883.0], [92.5, 3906.0], [92.6, 3915.0], [92.7, 3927.0], [92.8, 3942.0], [92.9, 3963.0], [93.0, 3979.0], [93.1, 4001.0], [93.2, 4015.0], [93.3, 4026.0], [93.4, 4031.0], [93.5, 4049.0], [93.6, 4058.0], [93.7, 4073.0], [93.8, 4090.0], [93.9, 4102.0], [94.0, 4124.0], [94.1, 4137.0], [94.2, 4152.0], [94.3, 4163.0], [94.4, 4179.0], [94.5, 4185.0], [94.6, 4200.0], [94.7, 4209.0], [94.8, 4220.0], [94.9, 4239.0], [95.0, 4260.0], [95.1, 4266.0], [95.2, 4280.0], [95.3, 4303.0], [95.4, 4316.0], [95.5, 4330.0], [95.6, 4338.0], [95.7, 4353.0], [95.8, 4362.0], [95.9, 4367.0], [96.0, 4391.0], [96.1, 4414.0], [96.2, 4481.0], [96.3, 4539.0], [96.4, 4594.0], [96.5, 4608.0], [96.6, 4650.0], [96.7, 4748.0], [96.8, 4801.0], [96.9, 4843.0], [97.0, 4887.0], [97.1, 4931.0], [97.2, 4976.0], [97.3, 5052.0], [97.4, 5114.0], [97.5, 5180.0], [97.6, 5211.0], [97.7, 5306.0], [97.8, 5327.0], [97.9, 5462.0], [98.0, 5549.0], [98.1, 5620.0], [98.2, 5706.0], [98.3, 5747.0], [98.4, 5885.0], [98.5, 5976.0], [98.6, 6068.0], [98.7, 6111.0], [98.8, 6245.0], [98.9, 6332.0], [99.0, 6558.0], [99.1, 6717.0], [99.2, 7020.0], [99.3, 7384.0], [99.4, 7589.0], [99.5, 8046.0], [99.6, 8286.0], [99.7, 8586.0], [99.8, 8967.0], [99.9, 9479.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 551.0, "series": [{"data": [[0.0, 551.0], [600.0, 215.0], [700.0, 148.0], [800.0, 118.0], [900.0, 100.0], [1000.0, 96.0], [1100.0, 93.0], [1200.0, 103.0], [1300.0, 84.0], [1400.0, 99.0], [1500.0, 71.0], [1600.0, 78.0], [1700.0, 54.0], [1800.0, 78.0], [1900.0, 80.0], [2000.0, 138.0], [2100.0, 163.0], [2300.0, 100.0], [2200.0, 145.0], [2400.0, 74.0], [2500.0, 89.0], [2600.0, 102.0], [2700.0, 103.0], [2800.0, 61.0], [2900.0, 65.0], [3000.0, 65.0], [3100.0, 53.0], [3300.0, 30.0], [3200.0, 39.0], [3400.0, 39.0], [3500.0, 46.0], [3700.0, 26.0], [3600.0, 33.0], [3800.0, 31.0], [3900.0, 31.0], [4000.0, 41.0], [4300.0, 41.0], [4100.0, 38.0], [4200.0, 37.0], [4400.0, 8.0], [4600.0, 11.0], [4500.0, 10.0], [4700.0, 7.0], [4800.0, 15.0], [5100.0, 9.0], [4900.0, 9.0], [5000.0, 8.0], [5300.0, 9.0], [5200.0, 5.0], [5500.0, 4.0], [5600.0, 8.0], [5400.0, 6.0], [5700.0, 8.0], [5800.0, 3.0], [6000.0, 8.0], [6100.0, 6.0], [5900.0, 6.0], [6200.0, 2.0], [6300.0, 5.0], [6500.0, 3.0], [6600.0, 1.0], [6400.0, 3.0], [6900.0, 3.0], [6700.0, 4.0], [7100.0, 1.0], [7000.0, 3.0], [7300.0, 3.0], [7500.0, 4.0], [7600.0, 2.0], [7800.0, 2.0], [7700.0, 1.0], [8100.0, 2.0], [8000.0, 2.0], [8400.0, 2.0], [8600.0, 3.0], [8200.0, 2.0], [8500.0, 2.0], [8300.0, 1.0], [9100.0, 1.0], [8900.0, 2.0], [9000.0, 3.0], [9500.0, 1.0], [9400.0, 1.0], [10300.0, 1.0], [10700.0, 1.0], [11300.0, 1.0], [14200.0, 1.0], [100.0, 498.0], [200.0, 335.0], [300.0, 224.0], [400.0, 158.0], [500.0, 214.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 14200.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 1266.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2154.0, "series": [{"data": [[0.0, 1770.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1266.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 2154.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 1.5, "minX": 1.60439154E12, "maxY": 10.0, "series": [{"data": [[1.60439172E12, 10.0], [1.60439238E12, 1.5], [1.60439232E12, 9.935632183908043], [1.60439202E12, 10.0], [1.60439214E12, 10.0], [1.60439208E12, 10.0], [1.60439178E12, 10.0], [1.6043922E12, 10.0], [1.6043919E12, 10.0], [1.60439184E12, 10.0], [1.60439154E12, 9.947368421052634], [1.60439196E12, 10.0], [1.60439166E12, 10.0], [1.6043916E12, 10.0], [1.60439226E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60439238E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 763.5, "minX": 1.0, "maxY": 6474.0, "series": [{"data": [[8.0, 763.5], [4.0, 2131.0], [2.0, 5814.0], [1.0, 4072.0], [9.0, 2211.0], [10.0, 1514.2951737451742], [5.0, 2072.0], [6.0, 2424.0], [3.0, 6474.0], [7.0, 2250.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.99094412331403, 1516.9603082851636]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 13.766666666666667, "minX": 1.60439154E12, "maxY": 3009600.0166666666, "series": [{"data": [[1.60439172E12, 2557936.3333333335], [1.60439238E12, 17947.483333333334], [1.60439232E12, 3009600.0166666666], [1.60439202E12, 2824855.0833333335], [1.60439214E12, 2706714.4], [1.60439208E12, 2396969.05], [1.60439178E12, 2197315.1666666665], [1.6043922E12, 2620131.716666667], [1.6043919E12, 2798568.466666667], [1.60439184E12, 2791084.25], [1.60439154E12, 305850.51666666666], [1.60439196E12, 2846733.3833333333], [1.60439166E12, 2224526.433333333], [1.6043916E12, 3003958.65], [1.60439226E12, 2610931.283333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60439172E12, 2164.3], [1.60439238E12, 13.766666666666667], [1.60439232E12, 3028.2833333333333], [1.60439202E12, 2751.483333333333], [1.60439214E12, 2092.5], [1.60439208E12, 3078.6666666666665], [1.60439178E12, 1752.9666666666667], [1.6043922E12, 2942.05], [1.6043919E12, 3067.4], [1.60439184E12, 3039.516666666667], [1.60439154E12, 259.76666666666665], [1.60439196E12, 2568.05], [1.60439166E12, 2776.516666666667], [1.6043916E12, 2815.45], [1.60439226E12, 2793.05]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60439238E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 1316.015418502203, "minX": 1.60439154E12, "maxY": 4943.0, "series": [{"data": [[1.60439172E12, 1810.712121212122], [1.60439238E12, 4943.0], [1.60439232E12, 1348.6160919540227], [1.60439202E12, 1424.3309523809517], [1.60439214E12, 1852.4613003095967], [1.60439208E12, 1316.015418502203], [1.60439178E12, 2328.8720930232566], [1.6043922E12, 1404.7723004694824], [1.6043919E12, 1381.2902494331076], [1.60439184E12, 1351.3795454545464], [1.60439154E12, 1658.921052631579], [1.60439196E12, 1580.084880636605], [1.60439166E12, 1461.1246943765275], [1.6043916E12, 1431.6512702078512], [1.60439226E12, 1499.1237623762374]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60439238E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 1313.8898678414093, "minX": 1.60439154E12, "maxY": 4940.5, "series": [{"data": [[1.60439172E12, 1806.9848484848483], [1.60439238E12, 4940.5], [1.60439232E12, 1345.7931034482758], [1.60439202E12, 1421.7642857142848], [1.60439214E12, 1849.30959752322], [1.60439208E12, 1313.8898678414093], [1.60439178E12, 2324.844961240313], [1.6043922E12, 1402.3568075117366], [1.6043919E12, 1378.752834467121], [1.60439184E12, 1348.8000000000002], [1.60439154E12, 1655.368421052631], [1.60439196E12, 1577.209549071618], [1.60439166E12, 1458.5403422982881], [1.6043916E12, 1428.3025404157038], [1.60439226E12, 1496.3613861386136]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60439238E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.60439154E12, "maxY": 3.0263157894736863, "series": [{"data": [[1.60439172E12, 0.030303030303030304], [1.60439238E12, 0.0], [1.60439232E12, 0.036781609195402284], [1.60439202E12, 0.01904761904761905], [1.60439214E12, 0.03405572755417956], [1.60439208E12, 0.02643171806167402], [1.60439178E12, 0.02713178294573644], [1.6043922E12, 0.016431924882629134], [1.6043919E12, 0.036281179138322], [1.60439184E12, 0.020454545454545447], [1.60439154E12, 3.0263157894736863], [1.60439196E12, 0.02917771883289124], [1.60439166E12, 0.02689486552567238], [1.6043916E12, 0.030023094688221712], [1.60439226E12, 0.029702970297029722]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60439238E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 7.0, "minX": 1.60439154E12, "maxY": 14260.0, "series": [{"data": [[1.60439172E12, 10312.0], [1.60439238E12, 5814.0], [1.60439232E12, 6717.0], [1.60439202E12, 5885.0], [1.60439214E12, 6558.0], [1.60439208E12, 8586.0], [1.60439178E12, 11376.0], [1.6043922E12, 9053.0], [1.6043919E12, 14260.0], [1.60439184E12, 8545.0], [1.60439154E12, 5192.0], [1.60439196E12, 6323.0], [1.60439166E12, 5324.0], [1.6043916E12, 9543.0], [1.60439226E12, 9005.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60439172E12, 26.97899992108345], [1.60439238E12, 4072.0], [1.60439232E12, 16.0], [1.60439202E12, 22.577999799251558], [1.60439214E12, 28.83199984550476], [1.60439208E12, 15.284999674558641], [1.60439178E12, 16.330999938249587], [1.6043922E12, 15.842999898195266], [1.6043919E12, 18.97799989461899], [1.60439184E12, 8.0], [1.60439154E12, 99.0], [1.60439196E12, 18.0], [1.60439166E12, 19.449999511241913], [1.6043916E12, 24.0], [1.60439226E12, 11.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60439172E12, 27.0], [1.60439238E12, 4072.0], [1.60439232E12, 16.316400041580202], [1.60439202E12, 23.33580008029938], [1.60439214E12, 29.207600030899048], [1.60439208E12, 16.513500130176546], [1.60439178E12, 16.564100024700164], [1.6043922E12, 16.227300040721893], [1.6043919E12, 19.751600084304812], [1.60439184E12, 8.365900042057039], [1.60439154E12, 99.0], [1.60439196E12, 18.0], [1.60439166E12, 21.295000195503235], [1.6043916E12, 25.186400165557863], [1.60439226E12, 11.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60439172E12, 27.0], [1.60439238E12, 4072.0], [1.60439232E12, 16.14199994802475], [1.60439202E12, 22.99899989962578], [1.60439214E12, 29.07799996137619], [1.60439208E12, 15.96749983727932], [1.60439178E12, 16.460499969124793], [1.6043922E12, 16.056499949097635], [1.6043919E12, 19.397999894618987], [1.60439184E12, 8.189499947428704], [1.60439154E12, 99.0], [1.60439196E12, 18.0], [1.60439166E12, 20.474999755620956], [1.6043916E12, 24.49199979305267], [1.60439226E12, 11.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60439172E12, 20.0], [1.60439238E12, 4072.0], [1.60439232E12, 11.0], [1.60439202E12, 20.0], [1.60439214E12, 14.0], [1.60439208E12, 12.0], [1.60439178E12, 10.0], [1.6043922E12, 13.0], [1.6043919E12, 14.0], [1.60439184E12, 7.0], [1.60439154E12, 99.0], [1.60439196E12, 12.0], [1.60439166E12, 14.0], [1.6043916E12, 12.0], [1.60439226E12, 10.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60439172E12, 1920.5], [1.60439238E12, 4943.0], [1.60439232E12, 931.0], [1.60439202E12, 1341.0], [1.60439214E12, 2132.0], [1.60439208E12, 755.0], [1.60439178E12, 2122.0], [1.6043922E12, 696.0], [1.6043919E12, 736.0], [1.60439184E12, 701.0], [1.60439154E12, 1458.0], [1.60439196E12, 1238.0], [1.60439166E12, 1248.0], [1.6043916E12, 764.0], [1.60439226E12, 1095.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60439238E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 128.5, "minX": 1.0, "maxY": 2547.5, "series": [{"data": [[2.0, 2327.0], [33.0, 174.0], [3.0, 2169.0], [4.0, 2212.0], [5.0, 2042.0], [6.0, 1909.5], [7.0, 1187.5], [8.0, 1093.0], [9.0, 864.0], [10.0, 826.5], [11.0, 528.0], [12.0, 567.0], [13.0, 579.0], [14.0, 424.5], [15.0, 246.5], [1.0, 2547.5], [16.0, 308.5], [17.0, 379.5], [18.0, 258.0], [19.0, 191.0], [20.0, 328.0], [21.0, 205.0], [22.0, 203.0], [23.0, 200.0], [24.0, 149.0], [25.0, 251.0], [27.0, 218.0], [29.0, 172.5], [30.0, 128.5], [31.0, 167.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 33.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 126.0, "minX": 1.0, "maxY": 2542.0, "series": [{"data": [[2.0, 2324.0], [33.0, 171.0], [3.0, 2165.5], [4.0, 2209.0], [5.0, 2035.0], [6.0, 1906.5], [7.0, 1184.5], [8.0, 1092.0], [9.0, 864.0], [10.0, 825.0], [11.0, 527.0], [12.0, 565.0], [13.0, 578.0], [14.0, 423.0], [15.0, 245.0], [1.0, 2542.0], [16.0, 306.0], [17.0, 377.0], [18.0, 257.0], [19.0, 190.5], [20.0, 325.0], [21.0, 203.0], [22.0, 200.5], [23.0, 194.0], [24.0, 146.0], [25.0, 249.0], [27.0, 216.0], [29.0, 169.0], [30.0, 126.0], [31.0, 164.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 33.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.8, "minX": 1.60439154E12, "maxY": 7.566666666666666, "series": [{"data": [[1.60439172E12, 5.5], [1.60439232E12, 7.116666666666666], [1.60439202E12, 7.0], [1.60439214E12, 5.383333333333334], [1.60439208E12, 7.566666666666666], [1.60439178E12, 4.3], [1.6043922E12, 7.1], [1.6043919E12, 7.366666666666666], [1.60439184E12, 7.316666666666666], [1.60439154E12, 0.8], [1.60439196E12, 6.283333333333333], [1.60439166E12, 6.816666666666666], [1.6043916E12, 7.216666666666667], [1.60439226E12, 6.733333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60439232E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.60439154E12, "maxY": 7.566666666666666, "series": [{"data": [[1.60439172E12, 5.5], [1.60439238E12, 0.03333333333333333], [1.60439232E12, 7.25], [1.60439202E12, 7.0], [1.60439214E12, 5.383333333333334], [1.60439208E12, 7.566666666666666], [1.60439178E12, 4.3], [1.6043922E12, 7.1], [1.6043919E12, 7.35], [1.60439184E12, 7.333333333333333], [1.60439154E12, 0.6333333333333333], [1.60439196E12, 6.283333333333333], [1.60439166E12, 6.816666666666666], [1.6043916E12, 7.216666666666667], [1.60439226E12, 6.733333333333333]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60439238E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.60439154E12, "maxY": 7.566666666666666, "series": [{"data": [[1.60439172E12, 5.5], [1.60439238E12, 0.03333333333333333], [1.60439232E12, 7.25], [1.60439202E12, 7.0], [1.60439214E12, 5.383333333333334], [1.60439208E12, 7.566666666666666], [1.60439178E12, 4.3], [1.6043922E12, 7.1], [1.6043919E12, 7.35], [1.60439184E12, 7.333333333333333], [1.60439154E12, 0.6333333333333333], [1.60439196E12, 6.283333333333333], [1.60439166E12, 6.816666666666666], [1.6043916E12, 7.216666666666667], [1.60439226E12, 6.733333333333333]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60439238E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.60439154E12, "maxY": 7.566666666666666, "series": [{"data": [[1.60439172E12, 5.5], [1.60439238E12, 0.03333333333333333], [1.60439232E12, 7.25], [1.60439202E12, 7.0], [1.60439214E12, 5.383333333333334], [1.60439208E12, 7.566666666666666], [1.60439178E12, 4.3], [1.6043922E12, 7.1], [1.6043919E12, 7.35], [1.60439184E12, 7.333333333333333], [1.60439154E12, 0.6333333333333333], [1.60439196E12, 6.283333333333333], [1.60439166E12, 6.816666666666666], [1.6043916E12, 7.216666666666667], [1.60439226E12, 6.733333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60439238E12, "title": "Total Transactions Per Second"}},
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

