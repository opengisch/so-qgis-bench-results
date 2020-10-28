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
        data: {"result": {"minY": 5.0, "minX": 0.0, "maxY": 12592.0, "series": [{"data": [[0.0, 5.0], [0.1, 7.0], [0.2, 11.0], [0.3, 13.0], [0.4, 14.0], [0.5, 14.0], [0.6, 15.0], [0.7, 15.0], [0.8, 15.0], [0.9, 16.0], [1.0, 17.0], [1.1, 18.0], [1.2, 19.0], [1.3, 20.0], [1.4, 20.0], [1.5, 21.0], [1.6, 21.0], [1.7, 22.0], [1.8, 23.0], [1.9, 23.0], [2.0, 24.0], [2.1, 24.0], [2.2, 25.0], [2.3, 25.0], [2.4, 25.0], [2.5, 26.0], [2.6, 26.0], [2.7, 27.0], [2.8, 27.0], [2.9, 28.0], [3.0, 28.0], [3.1, 29.0], [3.2, 30.0], [3.3, 31.0], [3.4, 32.0], [3.5, 34.0], [3.6, 35.0], [3.7, 36.0], [3.8, 38.0], [3.9, 39.0], [4.0, 40.0], [4.1, 41.0], [4.2, 42.0], [4.3, 43.0], [4.4, 43.0], [4.5, 44.0], [4.6, 44.0], [4.7, 45.0], [4.8, 45.0], [4.9, 46.0], [5.0, 47.0], [5.1, 47.0], [5.2, 48.0], [5.3, 48.0], [5.4, 49.0], [5.5, 49.0], [5.6, 50.0], [5.7, 50.0], [5.8, 52.0], [5.9, 53.0], [6.0, 53.0], [6.1, 55.0], [6.2, 55.0], [6.3, 56.0], [6.4, 56.0], [6.5, 57.0], [6.6, 58.0], [6.7, 60.0], [6.8, 60.0], [6.9, 62.0], [7.0, 62.0], [7.1, 63.0], [7.2, 63.0], [7.3, 65.0], [7.4, 66.0], [7.5, 66.0], [7.6, 66.0], [7.7, 67.0], [7.8, 69.0], [7.9, 70.0], [8.0, 70.0], [8.1, 71.0], [8.2, 72.0], [8.3, 74.0], [8.4, 77.0], [8.5, 77.0], [8.6, 78.0], [8.7, 80.0], [8.8, 82.0], [8.9, 83.0], [9.0, 85.0], [9.1, 85.0], [9.2, 86.0], [9.3, 87.0], [9.4, 88.0], [9.5, 88.0], [9.6, 89.0], [9.7, 89.0], [9.8, 90.0], [9.9, 90.0], [10.0, 91.0], [10.1, 91.0], [10.2, 92.0], [10.3, 93.0], [10.4, 94.0], [10.5, 95.0], [10.6, 95.0], [10.7, 96.0], [10.8, 97.0], [10.9, 97.0], [11.0, 98.0], [11.1, 98.0], [11.2, 99.0], [11.3, 99.0], [11.4, 101.0], [11.5, 102.0], [11.6, 102.0], [11.7, 103.0], [11.8, 104.0], [11.9, 104.0], [12.0, 105.0], [12.1, 106.0], [12.2, 107.0], [12.3, 107.0], [12.4, 108.0], [12.5, 109.0], [12.6, 109.0], [12.7, 110.0], [12.8, 111.0], [12.9, 112.0], [13.0, 112.0], [13.1, 113.0], [13.2, 114.0], [13.3, 114.0], [13.4, 114.0], [13.5, 115.0], [13.6, 116.0], [13.7, 117.0], [13.8, 118.0], [13.9, 118.0], [14.0, 119.0], [14.1, 120.0], [14.2, 121.0], [14.3, 122.0], [14.4, 123.0], [14.5, 123.0], [14.6, 125.0], [14.7, 125.0], [14.8, 126.0], [14.9, 128.0], [15.0, 128.0], [15.1, 129.0], [15.2, 129.0], [15.3, 131.0], [15.4, 133.0], [15.5, 134.0], [15.6, 136.0], [15.7, 137.0], [15.8, 137.0], [15.9, 138.0], [16.0, 139.0], [16.1, 140.0], [16.2, 142.0], [16.3, 143.0], [16.4, 145.0], [16.5, 146.0], [16.6, 147.0], [16.7, 148.0], [16.8, 149.0], [16.9, 149.0], [17.0, 151.0], [17.1, 153.0], [17.2, 155.0], [17.3, 156.0], [17.4, 158.0], [17.5, 159.0], [17.6, 161.0], [17.7, 161.0], [17.8, 163.0], [17.9, 165.0], [18.0, 166.0], [18.1, 167.0], [18.2, 168.0], [18.3, 169.0], [18.4, 170.0], [18.5, 171.0], [18.6, 173.0], [18.7, 174.0], [18.8, 174.0], [18.9, 175.0], [19.0, 177.0], [19.1, 178.0], [19.2, 179.0], [19.3, 179.0], [19.4, 180.0], [19.5, 182.0], [19.6, 182.0], [19.7, 183.0], [19.8, 184.0], [19.9, 184.0], [20.0, 186.0], [20.1, 186.0], [20.2, 187.0], [20.3, 188.0], [20.4, 189.0], [20.5, 190.0], [20.6, 191.0], [20.7, 192.0], [20.8, 194.0], [20.9, 194.0], [21.0, 195.0], [21.1, 196.0], [21.2, 197.0], [21.3, 198.0], [21.4, 199.0], [21.5, 200.0], [21.6, 201.0], [21.7, 202.0], [21.8, 204.0], [21.9, 205.0], [22.0, 207.0], [22.1, 207.0], [22.2, 209.0], [22.3, 209.0], [22.4, 212.0], [22.5, 212.0], [22.6, 213.0], [22.7, 214.0], [22.8, 215.0], [22.9, 216.0], [23.0, 217.0], [23.1, 219.0], [23.2, 221.0], [23.3, 222.0], [23.4, 224.0], [23.5, 225.0], [23.6, 226.0], [23.7, 228.0], [23.8, 230.0], [23.9, 231.0], [24.0, 233.0], [24.1, 234.0], [24.2, 235.0], [24.3, 237.0], [24.4, 239.0], [24.5, 240.0], [24.6, 242.0], [24.7, 243.0], [24.8, 244.0], [24.9, 245.0], [25.0, 246.0], [25.1, 247.0], [25.2, 248.0], [25.3, 252.0], [25.4, 253.0], [25.5, 255.0], [25.6, 256.0], [25.7, 257.0], [25.8, 259.0], [25.9, 262.0], [26.0, 265.0], [26.1, 267.0], [26.2, 270.0], [26.3, 272.0], [26.4, 274.0], [26.5, 276.0], [26.6, 278.0], [26.7, 279.0], [26.8, 282.0], [26.9, 283.0], [27.0, 284.0], [27.1, 286.0], [27.2, 288.0], [27.3, 290.0], [27.4, 292.0], [27.5, 294.0], [27.6, 295.0], [27.7, 297.0], [27.8, 299.0], [27.9, 303.0], [28.0, 305.0], [28.1, 308.0], [28.2, 311.0], [28.3, 312.0], [28.4, 315.0], [28.5, 317.0], [28.6, 322.0], [28.7, 325.0], [28.8, 327.0], [28.9, 328.0], [29.0, 330.0], [29.1, 332.0], [29.2, 334.0], [29.3, 337.0], [29.4, 340.0], [29.5, 343.0], [29.6, 344.0], [29.7, 346.0], [29.8, 349.0], [29.9, 351.0], [30.0, 353.0], [30.1, 357.0], [30.2, 359.0], [30.3, 364.0], [30.4, 365.0], [30.5, 372.0], [30.6, 375.0], [30.7, 376.0], [30.8, 379.0], [30.9, 380.0], [31.0, 383.0], [31.1, 385.0], [31.2, 388.0], [31.3, 390.0], [31.4, 393.0], [31.5, 397.0], [31.6, 401.0], [31.7, 403.0], [31.8, 405.0], [31.9, 409.0], [32.0, 412.0], [32.1, 412.0], [32.2, 416.0], [32.3, 418.0], [32.4, 421.0], [32.5, 422.0], [32.6, 426.0], [32.7, 429.0], [32.8, 433.0], [32.9, 436.0], [33.0, 441.0], [33.1, 445.0], [33.2, 446.0], [33.3, 447.0], [33.4, 450.0], [33.5, 453.0], [33.6, 457.0], [33.7, 462.0], [33.8, 467.0], [33.9, 470.0], [34.0, 472.0], [34.1, 475.0], [34.2, 477.0], [34.3, 480.0], [34.4, 481.0], [34.5, 485.0], [34.6, 486.0], [34.7, 488.0], [34.8, 490.0], [34.9, 491.0], [35.0, 492.0], [35.1, 495.0], [35.2, 497.0], [35.3, 502.0], [35.4, 503.0], [35.5, 506.0], [35.6, 507.0], [35.7, 508.0], [35.8, 512.0], [35.9, 516.0], [36.0, 517.0], [36.1, 519.0], [36.2, 522.0], [36.3, 524.0], [36.4, 526.0], [36.5, 528.0], [36.6, 529.0], [36.7, 530.0], [36.8, 533.0], [36.9, 536.0], [37.0, 538.0], [37.1, 541.0], [37.2, 542.0], [37.3, 544.0], [37.4, 546.0], [37.5, 548.0], [37.6, 549.0], [37.7, 551.0], [37.8, 553.0], [37.9, 555.0], [38.0, 559.0], [38.1, 560.0], [38.2, 560.0], [38.3, 562.0], [38.4, 565.0], [38.5, 566.0], [38.6, 567.0], [38.7, 568.0], [38.8, 569.0], [38.9, 570.0], [39.0, 571.0], [39.1, 574.0], [39.2, 576.0], [39.3, 577.0], [39.4, 578.0], [39.5, 580.0], [39.6, 582.0], [39.7, 583.0], [39.8, 586.0], [39.9, 588.0], [40.0, 589.0], [40.1, 590.0], [40.2, 592.0], [40.3, 594.0], [40.4, 596.0], [40.5, 599.0], [40.6, 601.0], [40.7, 603.0], [40.8, 605.0], [40.9, 609.0], [41.0, 613.0], [41.1, 616.0], [41.2, 617.0], [41.3, 618.0], [41.4, 623.0], [41.5, 624.0], [41.6, 628.0], [41.7, 631.0], [41.8, 633.0], [41.9, 635.0], [42.0, 637.0], [42.1, 639.0], [42.2, 641.0], [42.3, 642.0], [42.4, 645.0], [42.5, 646.0], [42.6, 649.0], [42.7, 652.0], [42.8, 654.0], [42.9, 655.0], [43.0, 657.0], [43.1, 660.0], [43.2, 663.0], [43.3, 665.0], [43.4, 668.0], [43.5, 670.0], [43.6, 672.0], [43.7, 676.0], [43.8, 679.0], [43.9, 681.0], [44.0, 685.0], [44.1, 685.0], [44.2, 688.0], [44.3, 691.0], [44.4, 692.0], [44.5, 696.0], [44.6, 699.0], [44.7, 704.0], [44.8, 707.0], [44.9, 710.0], [45.0, 713.0], [45.1, 716.0], [45.2, 719.0], [45.3, 724.0], [45.4, 728.0], [45.5, 730.0], [45.6, 732.0], [45.7, 737.0], [45.8, 739.0], [45.9, 743.0], [46.0, 746.0], [46.1, 749.0], [46.2, 753.0], [46.3, 755.0], [46.4, 759.0], [46.5, 760.0], [46.6, 762.0], [46.7, 763.0], [46.8, 768.0], [46.9, 776.0], [47.0, 778.0], [47.1, 782.0], [47.2, 786.0], [47.3, 789.0], [47.4, 795.0], [47.5, 800.0], [47.6, 803.0], [47.7, 809.0], [47.8, 811.0], [47.9, 814.0], [48.0, 819.0], [48.1, 823.0], [48.2, 829.0], [48.3, 837.0], [48.4, 844.0], [48.5, 849.0], [48.6, 854.0], [48.7, 856.0], [48.8, 860.0], [48.9, 862.0], [49.0, 867.0], [49.1, 869.0], [49.2, 875.0], [49.3, 876.0], [49.4, 879.0], [49.5, 889.0], [49.6, 893.0], [49.7, 902.0], [49.8, 910.0], [49.9, 916.0], [50.0, 921.0], [50.1, 929.0], [50.2, 934.0], [50.3, 938.0], [50.4, 947.0], [50.5, 952.0], [50.6, 959.0], [50.7, 961.0], [50.8, 963.0], [50.9, 967.0], [51.0, 975.0], [51.1, 985.0], [51.2, 991.0], [51.3, 995.0], [51.4, 1006.0], [51.5, 1014.0], [51.6, 1020.0], [51.7, 1022.0], [51.8, 1028.0], [51.9, 1034.0], [52.0, 1039.0], [52.1, 1043.0], [52.2, 1047.0], [52.3, 1052.0], [52.4, 1052.0], [52.5, 1063.0], [52.6, 1073.0], [52.7, 1082.0], [52.8, 1086.0], [52.9, 1089.0], [53.0, 1096.0], [53.1, 1107.0], [53.2, 1116.0], [53.3, 1123.0], [53.4, 1131.0], [53.5, 1138.0], [53.6, 1143.0], [53.7, 1159.0], [53.8, 1162.0], [53.9, 1172.0], [54.0, 1177.0], [54.1, 1185.0], [54.2, 1193.0], [54.3, 1203.0], [54.4, 1210.0], [54.5, 1222.0], [54.6, 1230.0], [54.7, 1236.0], [54.8, 1240.0], [54.9, 1246.0], [55.0, 1250.0], [55.1, 1255.0], [55.2, 1263.0], [55.3, 1266.0], [55.4, 1272.0], [55.5, 1279.0], [55.6, 1285.0], [55.7, 1287.0], [55.8, 1296.0], [55.9, 1301.0], [56.0, 1305.0], [56.1, 1309.0], [56.2, 1314.0], [56.3, 1319.0], [56.4, 1325.0], [56.5, 1336.0], [56.6, 1339.0], [56.7, 1345.0], [56.8, 1347.0], [56.9, 1354.0], [57.0, 1361.0], [57.1, 1370.0], [57.2, 1371.0], [57.3, 1376.0], [57.4, 1381.0], [57.5, 1386.0], [57.6, 1392.0], [57.7, 1396.0], [57.8, 1397.0], [57.9, 1400.0], [58.0, 1406.0], [58.1, 1411.0], [58.2, 1416.0], [58.3, 1418.0], [58.4, 1425.0], [58.5, 1432.0], [58.6, 1441.0], [58.7, 1446.0], [58.8, 1456.0], [58.9, 1464.0], [59.0, 1473.0], [59.1, 1481.0], [59.2, 1485.0], [59.3, 1487.0], [59.4, 1497.0], [59.5, 1507.0], [59.6, 1510.0], [59.7, 1516.0], [59.8, 1524.0], [59.9, 1529.0], [60.0, 1534.0], [60.1, 1545.0], [60.2, 1554.0], [60.3, 1562.0], [60.4, 1569.0], [60.5, 1576.0], [60.6, 1589.0], [60.7, 1593.0], [60.8, 1601.0], [60.9, 1604.0], [61.0, 1611.0], [61.1, 1616.0], [61.2, 1621.0], [61.3, 1623.0], [61.4, 1632.0], [61.5, 1634.0], [61.6, 1642.0], [61.7, 1647.0], [61.8, 1657.0], [61.9, 1668.0], [62.0, 1673.0], [62.1, 1679.0], [62.2, 1688.0], [62.3, 1693.0], [62.4, 1702.0], [62.5, 1709.0], [62.6, 1713.0], [62.7, 1720.0], [62.8, 1726.0], [62.9, 1727.0], [63.0, 1734.0], [63.1, 1737.0], [63.2, 1742.0], [63.3, 1756.0], [63.4, 1760.0], [63.5, 1766.0], [63.6, 1775.0], [63.7, 1786.0], [63.8, 1789.0], [63.9, 1800.0], [64.0, 1805.0], [64.1, 1812.0], [64.2, 1818.0], [64.3, 1833.0], [64.4, 1838.0], [64.5, 1843.0], [64.6, 1847.0], [64.7, 1865.0], [64.8, 1871.0], [64.9, 1878.0], [65.0, 1885.0], [65.1, 1888.0], [65.2, 1895.0], [65.3, 1900.0], [65.4, 1904.0], [65.5, 1907.0], [65.6, 1916.0], [65.7, 1924.0], [65.8, 1931.0], [65.9, 1933.0], [66.0, 1937.0], [66.1, 1949.0], [66.2, 1953.0], [66.3, 1955.0], [66.4, 1962.0], [66.5, 1965.0], [66.6, 1967.0], [66.7, 1970.0], [66.8, 1972.0], [66.9, 1975.0], [67.0, 1981.0], [67.1, 1984.0], [67.2, 1987.0], [67.3, 1990.0], [67.4, 1992.0], [67.5, 1994.0], [67.6, 1999.0], [67.7, 2003.0], [67.8, 2004.0], [67.9, 2006.0], [68.0, 2010.0], [68.1, 2013.0], [68.2, 2014.0], [68.3, 2017.0], [68.4, 2021.0], [68.5, 2028.0], [68.6, 2031.0], [68.7, 2032.0], [68.8, 2037.0], [68.9, 2038.0], [69.0, 2041.0], [69.1, 2042.0], [69.2, 2045.0], [69.3, 2049.0], [69.4, 2054.0], [69.5, 2057.0], [69.6, 2060.0], [69.7, 2064.0], [69.8, 2065.0], [69.9, 2068.0], [70.0, 2073.0], [70.1, 2076.0], [70.2, 2079.0], [70.3, 2082.0], [70.4, 2087.0], [70.5, 2090.0], [70.6, 2092.0], [70.7, 2095.0], [70.8, 2098.0], [70.9, 2101.0], [71.0, 2104.0], [71.1, 2107.0], [71.2, 2113.0], [71.3, 2115.0], [71.4, 2119.0], [71.5, 2121.0], [71.6, 2127.0], [71.7, 2128.0], [71.8, 2132.0], [71.9, 2138.0], [72.0, 2139.0], [72.1, 2141.0], [72.2, 2144.0], [72.3, 2146.0], [72.4, 2151.0], [72.5, 2155.0], [72.6, 2157.0], [72.7, 2160.0], [72.8, 2168.0], [72.9, 2171.0], [73.0, 2174.0], [73.1, 2176.0], [73.2, 2180.0], [73.3, 2185.0], [73.4, 2187.0], [73.5, 2192.0], [73.6, 2195.0], [73.7, 2200.0], [73.8, 2202.0], [73.9, 2206.0], [74.0, 2213.0], [74.1, 2219.0], [74.2, 2220.0], [74.3, 2226.0], [74.4, 2231.0], [74.5, 2234.0], [74.6, 2238.0], [74.7, 2244.0], [74.8, 2248.0], [74.9, 2253.0], [75.0, 2258.0], [75.1, 2268.0], [75.2, 2274.0], [75.3, 2279.0], [75.4, 2282.0], [75.5, 2288.0], [75.6, 2293.0], [75.7, 2300.0], [75.8, 2306.0], [75.9, 2309.0], [76.0, 2324.0], [76.1, 2331.0], [76.2, 2335.0], [76.3, 2339.0], [76.4, 2344.0], [76.5, 2358.0], [76.6, 2363.0], [76.7, 2370.0], [76.8, 2378.0], [76.9, 2382.0], [77.0, 2390.0], [77.1, 2399.0], [77.2, 2404.0], [77.3, 2413.0], [77.4, 2426.0], [77.5, 2432.0], [77.6, 2438.0], [77.7, 2445.0], [77.8, 2448.0], [77.9, 2455.0], [78.0, 2460.0], [78.1, 2471.0], [78.2, 2481.0], [78.3, 2491.0], [78.4, 2497.0], [78.5, 2502.0], [78.6, 2504.0], [78.7, 2512.0], [78.8, 2515.0], [78.9, 2516.0], [79.0, 2524.0], [79.1, 2530.0], [79.2, 2535.0], [79.3, 2537.0], [79.4, 2542.0], [79.5, 2549.0], [79.6, 2552.0], [79.7, 2558.0], [79.8, 2562.0], [79.9, 2571.0], [80.0, 2573.0], [80.1, 2576.0], [80.2, 2577.0], [80.3, 2585.0], [80.4, 2588.0], [80.5, 2592.0], [80.6, 2597.0], [80.7, 2599.0], [80.8, 2603.0], [80.9, 2607.0], [81.0, 2610.0], [81.1, 2616.0], [81.2, 2618.0], [81.3, 2621.0], [81.4, 2633.0], [81.5, 2635.0], [81.6, 2645.0], [81.7, 2648.0], [81.8, 2650.0], [81.9, 2654.0], [82.0, 2659.0], [82.1, 2662.0], [82.2, 2665.0], [82.3, 2669.0], [82.4, 2672.0], [82.5, 2682.0], [82.6, 2686.0], [82.7, 2693.0], [82.8, 2700.0], [82.9, 2706.0], [83.0, 2710.0], [83.1, 2712.0], [83.2, 2723.0], [83.3, 2731.0], [83.4, 2734.0], [83.5, 2751.0], [83.6, 2758.0], [83.7, 2773.0], [83.8, 2777.0], [83.9, 2784.0], [84.0, 2789.0], [84.1, 2794.0], [84.2, 2799.0], [84.3, 2802.0], [84.4, 2808.0], [84.5, 2811.0], [84.6, 2824.0], [84.7, 2828.0], [84.8, 2838.0], [84.9, 2845.0], [85.0, 2857.0], [85.1, 2860.0], [85.2, 2875.0], [85.3, 2889.0], [85.4, 2901.0], [85.5, 2907.0], [85.6, 2917.0], [85.7, 2925.0], [85.8, 2944.0], [85.9, 2950.0], [86.0, 2953.0], [86.1, 2963.0], [86.2, 2972.0], [86.3, 2984.0], [86.4, 2991.0], [86.5, 3003.0], [86.6, 3016.0], [86.7, 3020.0], [86.8, 3042.0], [86.9, 3055.0], [87.0, 3070.0], [87.1, 3085.0], [87.2, 3093.0], [87.3, 3105.0], [87.4, 3127.0], [87.5, 3133.0], [87.6, 3137.0], [87.7, 3148.0], [87.8, 3163.0], [87.9, 3172.0], [88.0, 3182.0], [88.1, 3192.0], [88.2, 3203.0], [88.3, 3214.0], [88.4, 3234.0], [88.5, 3244.0], [88.6, 3250.0], [88.7, 3256.0], [88.8, 3263.0], [88.9, 3279.0], [89.0, 3292.0], [89.1, 3309.0], [89.2, 3326.0], [89.3, 3339.0], [89.4, 3356.0], [89.5, 3368.0], [89.6, 3399.0], [89.7, 3413.0], [89.8, 3425.0], [89.9, 3435.0], [90.0, 3448.0], [90.1, 3469.0], [90.2, 3485.0], [90.3, 3498.0], [90.4, 3506.0], [90.5, 3513.0], [90.6, 3525.0], [90.7, 3541.0], [90.8, 3554.0], [90.9, 3562.0], [91.0, 3576.0], [91.1, 3591.0], [91.2, 3615.0], [91.3, 3643.0], [91.4, 3656.0], [91.5, 3670.0], [91.6, 3696.0], [91.7, 3703.0], [91.8, 3714.0], [91.9, 3728.0], [92.0, 3736.0], [92.1, 3773.0], [92.2, 3785.0], [92.3, 3811.0], [92.4, 3819.0], [92.5, 3847.0], [92.6, 3856.0], [92.7, 3861.0], [92.8, 3881.0], [92.9, 3905.0], [93.0, 3917.0], [93.1, 3924.0], [93.2, 3939.0], [93.3, 3960.0], [93.4, 3970.0], [93.5, 3982.0], [93.6, 4001.0], [93.7, 4010.0], [93.8, 4019.0], [93.9, 4031.0], [94.0, 4040.0], [94.1, 4062.0], [94.2, 4075.0], [94.3, 4081.0], [94.4, 4098.0], [94.5, 4109.0], [94.6, 4120.0], [94.7, 4130.0], [94.8, 4137.0], [94.9, 4142.0], [95.0, 4152.0], [95.1, 4158.0], [95.2, 4167.0], [95.3, 4177.0], [95.4, 4180.0], [95.5, 4190.0], [95.6, 4202.0], [95.7, 4221.0], [95.8, 4255.0], [95.9, 4268.0], [96.0, 4278.0], [96.1, 4286.0], [96.2, 4304.0], [96.3, 4340.0], [96.4, 4376.0], [96.5, 4421.0], [96.6, 4461.0], [96.7, 4527.0], [96.8, 4570.0], [96.9, 4651.0], [97.0, 4728.0], [97.1, 4747.0], [97.2, 4833.0], [97.3, 4895.0], [97.4, 4939.0], [97.5, 5013.0], [97.6, 5097.0], [97.7, 5134.0], [97.8, 5224.0], [97.9, 5289.0], [98.0, 5360.0], [98.1, 5427.0], [98.2, 5487.0], [98.3, 5551.0], [98.4, 5617.0], [98.5, 5800.0], [98.6, 5966.0], [98.7, 6058.0], [98.8, 6135.0], [98.9, 6340.0], [99.0, 6474.0], [99.1, 6561.0], [99.2, 6791.0], [99.3, 6922.0], [99.4, 7292.0], [99.5, 7464.0], [99.6, 7956.0], [99.7, 8515.0], [99.8, 8853.0], [99.9, 10099.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 588.0, "series": [{"data": [[0.0, 588.0], [600.0, 214.0], [700.0, 147.0], [800.0, 114.0], [900.0, 88.0], [1000.0, 87.0], [1100.0, 64.0], [1200.0, 84.0], [1300.0, 104.0], [1400.0, 79.0], [1500.0, 72.0], [1600.0, 80.0], [1700.0, 81.0], [1800.0, 71.0], [1900.0, 122.0], [2000.0, 168.0], [2100.0, 148.0], [2200.0, 103.0], [2300.0, 76.0], [2400.0, 68.0], [2500.0, 118.0], [2600.0, 107.0], [2700.0, 73.0], [2800.0, 62.0], [2900.0, 55.0], [3000.0, 41.0], [3100.0, 47.0], [3300.0, 30.0], [3200.0, 47.0], [3400.0, 35.0], [3500.0, 45.0], [3600.0, 24.0], [3700.0, 33.0], [3800.0, 30.0], [3900.0, 37.0], [4000.0, 44.0], [4100.0, 60.0], [4200.0, 30.0], [4300.0, 15.0], [4500.0, 9.0], [4600.0, 8.0], [4400.0, 11.0], [4700.0, 9.0], [4800.0, 8.0], [5000.0, 8.0], [4900.0, 9.0], [5100.0, 7.0], [5200.0, 9.0], [5300.0, 7.0], [5500.0, 7.0], [5600.0, 5.0], [5400.0, 8.0], [5700.0, 2.0], [5800.0, 3.0], [6000.0, 7.0], [6100.0, 3.0], [5900.0, 4.0], [6300.0, 4.0], [6200.0, 2.0], [6500.0, 6.0], [6400.0, 4.0], [6600.0, 3.0], [6900.0, 2.0], [6800.0, 3.0], [6700.0, 1.0], [7100.0, 2.0], [7000.0, 1.0], [7400.0, 3.0], [7300.0, 3.0], [7200.0, 2.0], [7500.0, 2.0], [7600.0, 1.0], [7900.0, 1.0], [7800.0, 1.0], [8000.0, 3.0], [8500.0, 3.0], [8200.0, 1.0], [8600.0, 2.0], [9100.0, 1.0], [8900.0, 2.0], [8800.0, 1.0], [9300.0, 1.0], [10000.0, 1.0], [10100.0, 1.0], [10500.0, 1.0], [11200.0, 1.0], [11500.0, 1.0], [12500.0, 1.0], [100.0, 526.0], [200.0, 330.0], [300.0, 195.0], [400.0, 190.0], [500.0, 273.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 12500.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 1255.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2106.0, "series": [{"data": [[0.0, 1829.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1255.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 2106.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.7926267281106, "minX": 1.60388106E12, "maxY": 10.0, "series": [{"data": [[1.60388154E12, 10.0], [1.60388184E12, 9.7926267281106], [1.60388124E12, 10.0], [1.60388178E12, 10.0], [1.60388112E12, 10.0], [1.60388118E12, 10.0], [1.60388148E12, 10.0], [1.60388106E12, 9.954545454545455], [1.60388136E12, 10.0], [1.60388142E12, 10.0], [1.60388172E12, 10.0], [1.6038813E12, 10.0], [1.6038816E12, 10.0], [1.60388166E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60388184E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 1285.0, "minX": 1.0, "maxY": 5966.0, "series": [{"data": [[8.0, 3819.0], [4.0, 2616.0], [2.0, 3773.0], [1.0, 5966.0], [9.0, 1285.0], [10.0, 1455.3980694980712], [5.0, 2445.0], [6.0, 2158.0], [3.0, 5901.0], [7.0, 2381.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.991136801541433, 1458.688053949901]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 150.58333333333334, "minX": 1.60388106E12, "maxY": 3113199.783333333, "series": [{"data": [[1.60388154E12, 2660048.25], [1.60388184E12, 1689460.8166666667], [1.60388124E12, 2648320.0166666666], [1.60388178E12, 3028027.683333333], [1.60388112E12, 3113199.783333333], [1.60388118E12, 2284614.4833333334], [1.60388148E12, 3101647.9833333334], [1.60388106E12, 167843.96666666667], [1.60388136E12, 2865936.1], [1.60388142E12, 2924539.15], [1.60388172E12, 2825639.683333333], [1.6038813E12, 2311780.2], [1.6038816E12, 2855652.4166666665], [1.60388166E12, 2436411.7]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60388154E12, 2690.45], [1.60388184E12, 1512.7333333333333], [1.60388124E12, 2194.9333333333334], [1.60388178E12, 3358.266666666667], [1.60388112E12, 2865.25], [1.60388118E12, 2876.9], [1.60388148E12, 2785.383333333333], [1.60388106E12, 150.58333333333334], [1.60388136E12, 3009.9666666666667], [1.60388142E12, 3234.7166666666667], [1.60388172E12, 3239.5666666666666], [1.6038813E12, 1985.8166666666666], [1.6038816E12, 3501.616666666667], [1.60388166E12, 1737.5833333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60388184E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 1148.1477272727263, "minX": 1.60388106E12, "maxY": 2264.5346153846176, "series": [{"data": [[1.60388154E12, 1470.935483870969], [1.60388184E12, 1573.4746543778792], [1.60388124E12, 1769.4865671641785], [1.60388178E12, 1237.4979338842977], [1.60388112E12, 1371.1204545454548], [1.60388118E12, 1416.4834905660366], [1.60388148E12, 1441.6466346153832], [1.60388106E12, 1703.2272727272727], [1.60388136E12, 1351.6169724770634], [1.60388142E12, 1332.1677419354842], [1.60388172E12, 1284.3837953091681], [1.6038813E12, 2052.9725085910654], [1.6038816E12, 1148.1477272727263], [1.60388166E12, 2264.5346153846176]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60388184E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 1146.2291666666667, "minX": 1.60388106E12, "maxY": 2261.1230769230747, "series": [{"data": [[1.60388154E12, 1468.4888337468997], [1.60388184E12, 1570.640552995392], [1.60388124E12, 1765.7910447761199], [1.60388178E12, 1235.1818181818187], [1.60388112E12, 1367.6772727272726], [1.60388118E12, 1413.9339622641517], [1.60388148E12, 1438.7331730769226], [1.60388106E12, 1699.7727272727275], [1.60388136E12, 1349.0275229357796], [1.60388142E12, 1329.7741935483868], [1.60388172E12, 1282.087420042644], [1.6038813E12, 2049.4089347079043], [1.6038816E12, 1146.2291666666667], [1.60388166E12, 2261.1230769230747]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60388184E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.011940298507462688, "minX": 1.60388106E12, "maxY": 4.0, "series": [{"data": [[1.60388154E12, 0.0248138957816377], [1.60388184E12, 0.059907834101382486], [1.60388124E12, 0.011940298507462688], [1.60388178E12, 0.020661157024793396], [1.60388112E12, 0.02045454545454545], [1.60388118E12, 0.030660377358490566], [1.60388148E12, 0.02644230769230771], [1.60388106E12, 4.0], [1.60388136E12, 0.01605504587155964], [1.60388142E12, 0.025806451612903243], [1.60388172E12, 0.021321961620469104], [1.6038813E12, 0.04810996563573887], [1.6038816E12, 0.02651515151515151], [1.60388166E12, 0.09230769230769245]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60388184E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 5.0, "minX": 1.60388106E12, "maxY": 12592.0, "series": [{"data": [[1.60388154E12, 7160.0], [1.60388184E12, 6138.0], [1.60388124E12, 10099.0], [1.60388178E12, 10166.0], [1.60388112E12, 11515.0], [1.60388118E12, 6647.0], [1.60388148E12, 4902.0], [1.60388106E12, 5058.0], [1.60388136E12, 9162.0], [1.60388142E12, 8635.0], [1.60388172E12, 6474.0], [1.6038813E12, 12592.0], [1.6038816E12, 11264.0], [1.60388166E12, 8984.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60388154E12, 20.635999903678893], [1.60388184E12, 89.695999584198], [1.60388124E12, 20.02399991989136], [1.60388178E12, 15.0], [1.60388112E12, 39.689998948574065], [1.60388118E12, 18.0], [1.60388148E12, 15.0], [1.60388106E12, 22.0], [1.60388136E12, 11.0], [1.60388142E12, 24.193999888896943], [1.60388172E12, 13.0], [1.6038813E12, 14.0], [1.6038816E12, 14.0], [1.60388166E12, 26.348999937772753]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60388154E12, 20.999600038528442], [1.60388184E12, 90.3164000415802], [1.60388124E12, 20.32640003204346], [1.60388178E12, 15.0], [1.60388112E12, 41.463600168228155], [1.60388118E12, 18.622500121593475], [1.60388148E12, 15.12830003976822], [1.60388106E12, 22.0], [1.60388136E12, 11.652600083351135], [1.60388142E12, 24.613400044441224], [1.60388172E12, 13.0], [1.6038813E12, 14.0], [1.6038816E12, 14.23710005044937], [1.60388166E12, 26.5839000248909]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60388154E12, 20.837999951839446], [1.60388184E12, 90.14199994802475], [1.60388124E12, 20.19199995994568], [1.60388178E12, 15.0], [1.60388112E12, 40.757999789714816], [1.60388118E12, 18.112499848008156], [1.60388148E12, 15.0], [1.60388106E12, 22.0], [1.60388136E12, 11.30299989581108], [1.60388142E12, 24.426999944448472], [1.60388172E12, 13.0], [1.6038813E12, 14.0], [1.6038816E12, 14.025499936938285], [1.60388166E12, 26.479499968886376]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60388154E12, 7.0], [1.60388184E12, 82.0], [1.60388124E12, 15.0], [1.60388178E12, 7.0], [1.60388112E12, 17.0], [1.60388118E12, 12.0], [1.60388148E12, 10.0], [1.60388106E12, 22.0], [1.60388136E12, 5.0], [1.60388142E12, 14.0], [1.60388172E12, 5.0], [1.6038813E12, 14.0], [1.6038816E12, 13.0], [1.60388166E12, 26.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60388154E12, 1407.0], [1.60388184E12, 1246.0], [1.60388124E12, 1961.0], [1.60388178E12, 677.5], [1.60388112E12, 805.0], [1.60388118E12, 1307.5], [1.60388148E12, 948.5], [1.60388106E12, 1044.5], [1.60388136E12, 655.0], [1.60388142E12, 710.0], [1.60388172E12, 668.0], [1.6038813E12, 1904.0], [1.6038816E12, 561.5], [1.60388166E12, 2269.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60388184E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 148.0, "minX": 1.0, "maxY": 2369.0, "series": [{"data": [[2.0, 2369.0], [33.0, 148.0], [32.0, 197.0], [3.0, 2276.0], [4.0, 2176.5], [5.0, 1995.0], [6.0, 1736.0], [7.0, 1300.0], [8.0, 838.5], [9.0, 749.0], [10.0, 533.5], [11.0, 684.0], [12.0, 654.0], [13.0, 438.0], [14.0, 414.5], [15.0, 328.0], [1.0, 2238.0], [16.0, 380.0], [17.0, 237.0], [18.0, 239.0], [19.0, 216.5], [20.0, 241.5], [21.0, 271.0], [22.0, 257.0], [23.0, 220.0], [26.0, 179.0], [27.0, 185.5], [31.0, 154.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 33.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 146.0, "minX": 1.0, "maxY": 2366.0, "series": [{"data": [[2.0, 2366.0], [33.0, 146.0], [32.0, 196.0], [3.0, 2271.0], [4.0, 2167.0], [5.0, 1990.0], [6.0, 1734.0], [7.0, 1297.0], [8.0, 836.0], [9.0, 748.0], [10.0, 531.0], [11.0, 681.0], [12.0, 653.0], [13.0, 436.0], [14.0, 410.5], [15.0, 326.5], [1.0, 2230.5], [16.0, 377.0], [17.0, 236.0], [18.0, 237.5], [19.0, 214.5], [20.0, 240.0], [21.0, 269.5], [22.0, 255.5], [23.0, 219.0], [26.0, 179.0], [27.0, 183.5], [31.0, 150.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 33.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.5333333333333333, "minX": 1.60388106E12, "maxY": 8.8, "series": [{"data": [[1.60388154E12, 6.716666666666667], [1.60388184E12, 3.45], [1.60388124E12, 5.583333333333333], [1.60388178E12, 8.066666666666666], [1.60388112E12, 7.333333333333333], [1.60388118E12, 7.066666666666666], [1.60388148E12, 6.933333333333334], [1.60388106E12, 0.5333333333333333], [1.60388136E12, 7.266666666666667], [1.60388142E12, 7.75], [1.60388172E12, 7.816666666666666], [1.6038813E12, 4.85], [1.6038816E12, 8.8], [1.60388166E12, 4.333333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60388184E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.36666666666666664, "minX": 1.60388106E12, "maxY": 8.8, "series": [{"data": [[1.60388154E12, 6.716666666666667], [1.60388184E12, 3.6166666666666667], [1.60388124E12, 5.583333333333333], [1.60388178E12, 8.066666666666666], [1.60388112E12, 7.333333333333333], [1.60388118E12, 7.066666666666666], [1.60388148E12, 6.933333333333334], [1.60388106E12, 0.36666666666666664], [1.60388136E12, 7.266666666666667], [1.60388142E12, 7.75], [1.60388172E12, 7.816666666666666], [1.6038813E12, 4.85], [1.6038816E12, 8.8], [1.60388166E12, 4.333333333333333]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60388184E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.36666666666666664, "minX": 1.60388106E12, "maxY": 8.8, "series": [{"data": [[1.60388154E12, 6.716666666666667], [1.60388184E12, 3.6166666666666667], [1.60388124E12, 5.583333333333333], [1.60388178E12, 8.066666666666666], [1.60388112E12, 7.333333333333333], [1.60388118E12, 7.066666666666666], [1.60388148E12, 6.933333333333334], [1.60388106E12, 0.36666666666666664], [1.60388136E12, 7.266666666666667], [1.60388142E12, 7.75], [1.60388172E12, 7.816666666666666], [1.6038813E12, 4.85], [1.6038816E12, 8.8], [1.60388166E12, 4.333333333333333]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60388184E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.36666666666666664, "minX": 1.60388106E12, "maxY": 8.8, "series": [{"data": [[1.60388154E12, 6.716666666666667], [1.60388184E12, 3.6166666666666667], [1.60388124E12, 5.583333333333333], [1.60388178E12, 8.066666666666666], [1.60388112E12, 7.333333333333333], [1.60388118E12, 7.066666666666666], [1.60388148E12, 6.933333333333334], [1.60388106E12, 0.36666666666666664], [1.60388136E12, 7.266666666666667], [1.60388142E12, 7.75], [1.60388172E12, 7.816666666666666], [1.6038813E12, 4.85], [1.6038816E12, 8.8], [1.60388166E12, 4.333333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60388184E12, "title": "Total Transactions Per Second"}},
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

