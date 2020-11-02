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
        data: {"result": {"minY": 5.0, "minX": 0.0, "maxY": 11206.0, "series": [{"data": [[0.0, 5.0], [0.1, 7.0], [0.2, 10.0], [0.3, 12.0], [0.4, 14.0], [0.5, 15.0], [0.6, 15.0], [0.7, 16.0], [0.8, 17.0], [0.9, 18.0], [1.0, 19.0], [1.1, 20.0], [1.2, 21.0], [1.3, 21.0], [1.4, 22.0], [1.5, 22.0], [1.6, 23.0], [1.7, 23.0], [1.8, 24.0], [1.9, 24.0], [2.0, 25.0], [2.1, 25.0], [2.2, 25.0], [2.3, 26.0], [2.4, 27.0], [2.5, 28.0], [2.6, 29.0], [2.7, 29.0], [2.8, 30.0], [2.9, 31.0], [3.0, 32.0], [3.1, 33.0], [3.2, 34.0], [3.3, 35.0], [3.4, 37.0], [3.5, 38.0], [3.6, 39.0], [3.7, 40.0], [3.8, 41.0], [3.9, 42.0], [4.0, 43.0], [4.1, 45.0], [4.2, 45.0], [4.3, 46.0], [4.4, 47.0], [4.5, 48.0], [4.6, 49.0], [4.7, 49.0], [4.8, 50.0], [4.9, 51.0], [5.0, 51.0], [5.1, 52.0], [5.2, 52.0], [5.3, 53.0], [5.4, 54.0], [5.5, 56.0], [5.6, 57.0], [5.7, 58.0], [5.8, 59.0], [5.9, 60.0], [6.0, 62.0], [6.1, 63.0], [6.2, 63.0], [6.3, 65.0], [6.4, 65.0], [6.5, 67.0], [6.6, 68.0], [6.7, 70.0], [6.8, 72.0], [6.9, 73.0], [7.0, 74.0], [7.1, 75.0], [7.2, 76.0], [7.3, 78.0], [7.4, 80.0], [7.5, 81.0], [7.6, 82.0], [7.7, 83.0], [7.8, 84.0], [7.9, 85.0], [8.0, 86.0], [8.1, 87.0], [8.2, 88.0], [8.3, 89.0], [8.4, 89.0], [8.5, 90.0], [8.6, 91.0], [8.7, 91.0], [8.8, 92.0], [8.9, 92.0], [9.0, 93.0], [9.1, 94.0], [9.2, 95.0], [9.3, 96.0], [9.4, 97.0], [9.5, 98.0], [9.6, 99.0], [9.7, 100.0], [9.8, 100.0], [9.9, 100.0], [10.0, 102.0], [10.1, 102.0], [10.2, 103.0], [10.3, 104.0], [10.4, 105.0], [10.5, 107.0], [10.6, 107.0], [10.7, 108.0], [10.8, 109.0], [10.9, 109.0], [11.0, 110.0], [11.1, 111.0], [11.2, 112.0], [11.3, 112.0], [11.4, 113.0], [11.5, 113.0], [11.6, 114.0], [11.7, 115.0], [11.8, 115.0], [11.9, 116.0], [12.0, 117.0], [12.1, 117.0], [12.2, 118.0], [12.3, 119.0], [12.4, 119.0], [12.5, 120.0], [12.6, 120.0], [12.7, 122.0], [12.8, 122.0], [12.9, 124.0], [13.0, 124.0], [13.1, 125.0], [13.2, 126.0], [13.3, 126.0], [13.4, 128.0], [13.5, 128.0], [13.6, 129.0], [13.7, 130.0], [13.8, 131.0], [13.9, 132.0], [14.0, 133.0], [14.1, 134.0], [14.2, 134.0], [14.3, 135.0], [14.4, 136.0], [14.5, 136.0], [14.6, 138.0], [14.7, 139.0], [14.8, 140.0], [14.9, 141.0], [15.0, 143.0], [15.1, 144.0], [15.2, 145.0], [15.3, 146.0], [15.4, 148.0], [15.5, 149.0], [15.6, 150.0], [15.7, 151.0], [15.8, 152.0], [15.9, 153.0], [16.0, 154.0], [16.1, 155.0], [16.2, 157.0], [16.3, 157.0], [16.4, 158.0], [16.5, 160.0], [16.6, 162.0], [16.7, 163.0], [16.8, 164.0], [16.9, 165.0], [17.0, 166.0], [17.1, 167.0], [17.2, 169.0], [17.3, 170.0], [17.4, 171.0], [17.5, 173.0], [17.6, 173.0], [17.7, 175.0], [17.8, 176.0], [17.9, 177.0], [18.0, 179.0], [18.1, 180.0], [18.2, 181.0], [18.3, 182.0], [18.4, 183.0], [18.5, 185.0], [18.6, 185.0], [18.7, 186.0], [18.8, 187.0], [18.9, 188.0], [19.0, 189.0], [19.1, 190.0], [19.2, 191.0], [19.3, 192.0], [19.4, 193.0], [19.5, 193.0], [19.6, 194.0], [19.7, 195.0], [19.8, 196.0], [19.9, 197.0], [20.0, 198.0], [20.1, 199.0], [20.2, 199.0], [20.3, 201.0], [20.4, 202.0], [20.5, 203.0], [20.6, 204.0], [20.7, 205.0], [20.8, 206.0], [20.9, 207.0], [21.0, 208.0], [21.1, 209.0], [21.2, 210.0], [21.3, 211.0], [21.4, 212.0], [21.5, 214.0], [21.6, 216.0], [21.7, 218.0], [21.8, 220.0], [21.9, 220.0], [22.0, 221.0], [22.1, 223.0], [22.2, 224.0], [22.3, 226.0], [22.4, 228.0], [22.5, 229.0], [22.6, 230.0], [22.7, 232.0], [22.8, 233.0], [22.9, 234.0], [23.0, 234.0], [23.1, 235.0], [23.2, 236.0], [23.3, 237.0], [23.4, 237.0], [23.5, 239.0], [23.6, 239.0], [23.7, 241.0], [23.8, 242.0], [23.9, 244.0], [24.0, 246.0], [24.1, 247.0], [24.2, 248.0], [24.3, 249.0], [24.4, 251.0], [24.5, 254.0], [24.6, 256.0], [24.7, 257.0], [24.8, 260.0], [24.9, 262.0], [25.0, 263.0], [25.1, 264.0], [25.2, 266.0], [25.3, 268.0], [25.4, 269.0], [25.5, 270.0], [25.6, 273.0], [25.7, 274.0], [25.8, 275.0], [25.9, 276.0], [26.0, 278.0], [26.1, 280.0], [26.2, 283.0], [26.3, 286.0], [26.4, 287.0], [26.5, 290.0], [26.6, 293.0], [26.7, 294.0], [26.8, 295.0], [26.9, 298.0], [27.0, 300.0], [27.1, 304.0], [27.2, 306.0], [27.3, 308.0], [27.4, 311.0], [27.5, 313.0], [27.6, 315.0], [27.7, 316.0], [27.8, 318.0], [27.9, 321.0], [28.0, 322.0], [28.1, 323.0], [28.2, 326.0], [28.3, 328.0], [28.4, 329.0], [28.5, 330.0], [28.6, 332.0], [28.7, 335.0], [28.8, 337.0], [28.9, 338.0], [29.0, 340.0], [29.1, 345.0], [29.2, 348.0], [29.3, 350.0], [29.4, 353.0], [29.5, 355.0], [29.6, 359.0], [29.7, 362.0], [29.8, 368.0], [29.9, 372.0], [30.0, 375.0], [30.1, 377.0], [30.2, 380.0], [30.3, 382.0], [30.4, 386.0], [30.5, 387.0], [30.6, 389.0], [30.7, 391.0], [30.8, 395.0], [30.9, 398.0], [31.0, 400.0], [31.1, 402.0], [31.2, 403.0], [31.3, 408.0], [31.4, 411.0], [31.5, 415.0], [31.6, 420.0], [31.7, 423.0], [31.8, 424.0], [31.9, 427.0], [32.0, 430.0], [32.1, 433.0], [32.2, 438.0], [32.3, 444.0], [32.4, 448.0], [32.5, 450.0], [32.6, 451.0], [32.7, 453.0], [32.8, 456.0], [32.9, 459.0], [33.0, 462.0], [33.1, 465.0], [33.2, 469.0], [33.3, 471.0], [33.4, 475.0], [33.5, 478.0], [33.6, 480.0], [33.7, 482.0], [33.8, 486.0], [33.9, 486.0], [34.0, 488.0], [34.1, 489.0], [34.2, 494.0], [34.3, 497.0], [34.4, 499.0], [34.5, 502.0], [34.6, 504.0], [34.7, 505.0], [34.8, 506.0], [34.9, 508.0], [35.0, 511.0], [35.1, 512.0], [35.2, 514.0], [35.3, 516.0], [35.4, 518.0], [35.5, 519.0], [35.6, 522.0], [35.7, 523.0], [35.8, 526.0], [35.9, 529.0], [36.0, 531.0], [36.1, 535.0], [36.2, 537.0], [36.3, 538.0], [36.4, 541.0], [36.5, 543.0], [36.6, 544.0], [36.7, 546.0], [36.8, 548.0], [36.9, 550.0], [37.0, 552.0], [37.1, 554.0], [37.2, 555.0], [37.3, 557.0], [37.4, 558.0], [37.5, 559.0], [37.6, 561.0], [37.7, 562.0], [37.8, 564.0], [37.9, 566.0], [38.0, 567.0], [38.1, 570.0], [38.2, 573.0], [38.3, 575.0], [38.4, 576.0], [38.5, 580.0], [38.6, 582.0], [38.7, 584.0], [38.8, 586.0], [38.9, 588.0], [39.0, 591.0], [39.1, 593.0], [39.2, 595.0], [39.3, 598.0], [39.4, 600.0], [39.5, 601.0], [39.6, 604.0], [39.7, 605.0], [39.8, 607.0], [39.9, 609.0], [40.0, 611.0], [40.1, 614.0], [40.2, 616.0], [40.3, 617.0], [40.4, 621.0], [40.5, 625.0], [40.6, 627.0], [40.7, 628.0], [40.8, 630.0], [40.9, 633.0], [41.0, 636.0], [41.1, 638.0], [41.2, 641.0], [41.3, 642.0], [41.4, 644.0], [41.5, 645.0], [41.6, 648.0], [41.7, 650.0], [41.8, 652.0], [41.9, 654.0], [42.0, 657.0], [42.1, 659.0], [42.2, 661.0], [42.3, 664.0], [42.4, 667.0], [42.5, 668.0], [42.6, 670.0], [42.7, 674.0], [42.8, 676.0], [42.9, 677.0], [43.0, 680.0], [43.1, 682.0], [43.2, 685.0], [43.3, 686.0], [43.4, 689.0], [43.5, 689.0], [43.6, 692.0], [43.7, 694.0], [43.8, 700.0], [43.9, 704.0], [44.0, 707.0], [44.1, 707.0], [44.2, 711.0], [44.3, 717.0], [44.4, 720.0], [44.5, 725.0], [44.6, 728.0], [44.7, 729.0], [44.8, 732.0], [44.9, 735.0], [45.0, 737.0], [45.1, 738.0], [45.2, 742.0], [45.3, 744.0], [45.4, 746.0], [45.5, 748.0], [45.6, 750.0], [45.7, 752.0], [45.8, 755.0], [45.9, 759.0], [46.0, 764.0], [46.1, 767.0], [46.2, 771.0], [46.3, 778.0], [46.4, 783.0], [46.5, 785.0], [46.6, 792.0], [46.7, 798.0], [46.8, 807.0], [46.9, 811.0], [47.0, 815.0], [47.1, 821.0], [47.2, 826.0], [47.3, 830.0], [47.4, 835.0], [47.5, 843.0], [47.6, 846.0], [47.7, 847.0], [47.8, 848.0], [47.9, 850.0], [48.0, 856.0], [48.1, 860.0], [48.2, 862.0], [48.3, 868.0], [48.4, 876.0], [48.5, 884.0], [48.6, 891.0], [48.7, 894.0], [48.8, 898.0], [48.9, 902.0], [49.0, 905.0], [49.1, 908.0], [49.2, 914.0], [49.3, 916.0], [49.4, 920.0], [49.5, 926.0], [49.6, 931.0], [49.7, 936.0], [49.8, 939.0], [49.9, 943.0], [50.0, 948.0], [50.1, 955.0], [50.2, 963.0], [50.3, 967.0], [50.4, 971.0], [50.5, 976.0], [50.6, 984.0], [50.7, 990.0], [50.8, 999.0], [50.9, 1005.0], [51.0, 1013.0], [51.1, 1021.0], [51.2, 1026.0], [51.3, 1028.0], [51.4, 1031.0], [51.5, 1035.0], [51.6, 1045.0], [51.7, 1053.0], [51.8, 1055.0], [51.9, 1059.0], [52.0, 1062.0], [52.1, 1067.0], [52.2, 1073.0], [52.3, 1081.0], [52.4, 1086.0], [52.5, 1093.0], [52.6, 1097.0], [52.7, 1100.0], [52.8, 1105.0], [52.9, 1109.0], [53.0, 1117.0], [53.1, 1132.0], [53.2, 1146.0], [53.3, 1149.0], [53.4, 1154.0], [53.5, 1161.0], [53.6, 1167.0], [53.7, 1173.0], [53.8, 1182.0], [53.9, 1184.0], [54.0, 1189.0], [54.1, 1193.0], [54.2, 1200.0], [54.3, 1207.0], [54.4, 1212.0], [54.5, 1217.0], [54.6, 1235.0], [54.7, 1240.0], [54.8, 1248.0], [54.9, 1262.0], [55.0, 1266.0], [55.1, 1269.0], [55.2, 1272.0], [55.3, 1280.0], [55.4, 1285.0], [55.5, 1290.0], [55.6, 1293.0], [55.7, 1298.0], [55.8, 1307.0], [55.9, 1312.0], [56.0, 1315.0], [56.1, 1317.0], [56.2, 1321.0], [56.3, 1330.0], [56.4, 1332.0], [56.5, 1343.0], [56.6, 1347.0], [56.7, 1357.0], [56.8, 1363.0], [56.9, 1370.0], [57.0, 1380.0], [57.1, 1384.0], [57.2, 1392.0], [57.3, 1394.0], [57.4, 1399.0], [57.5, 1406.0], [57.6, 1409.0], [57.7, 1413.0], [57.8, 1416.0], [57.9, 1423.0], [58.0, 1425.0], [58.1, 1432.0], [58.2, 1434.0], [58.3, 1441.0], [58.4, 1450.0], [58.5, 1455.0], [58.6, 1461.0], [58.7, 1467.0], [58.8, 1470.0], [58.9, 1477.0], [59.0, 1486.0], [59.1, 1489.0], [59.2, 1500.0], [59.3, 1509.0], [59.4, 1520.0], [59.5, 1534.0], [59.6, 1538.0], [59.7, 1542.0], [59.8, 1553.0], [59.9, 1557.0], [60.0, 1565.0], [60.1, 1571.0], [60.2, 1576.0], [60.3, 1582.0], [60.4, 1588.0], [60.5, 1594.0], [60.6, 1611.0], [60.7, 1613.0], [60.8, 1620.0], [60.9, 1626.0], [61.0, 1635.0], [61.1, 1641.0], [61.2, 1650.0], [61.3, 1653.0], [61.4, 1658.0], [61.5, 1667.0], [61.6, 1673.0], [61.7, 1680.0], [61.8, 1686.0], [61.9, 1691.0], [62.0, 1696.0], [62.1, 1702.0], [62.2, 1708.0], [62.3, 1713.0], [62.4, 1717.0], [62.5, 1721.0], [62.6, 1723.0], [62.7, 1728.0], [62.8, 1737.0], [62.9, 1744.0], [63.0, 1748.0], [63.1, 1753.0], [63.2, 1765.0], [63.3, 1769.0], [63.4, 1774.0], [63.5, 1776.0], [63.6, 1782.0], [63.7, 1786.0], [63.8, 1791.0], [63.9, 1801.0], [64.0, 1803.0], [64.1, 1809.0], [64.2, 1814.0], [64.3, 1823.0], [64.4, 1830.0], [64.5, 1844.0], [64.6, 1848.0], [64.7, 1852.0], [64.8, 1857.0], [64.9, 1869.0], [65.0, 1873.0], [65.1, 1882.0], [65.2, 1888.0], [65.3, 1901.0], [65.4, 1906.0], [65.5, 1913.0], [65.6, 1919.0], [65.7, 1932.0], [65.8, 1936.0], [65.9, 1940.0], [66.0, 1942.0], [66.1, 1953.0], [66.2, 1958.0], [66.3, 1963.0], [66.4, 1968.0], [66.5, 1974.0], [66.6, 1978.0], [66.7, 1983.0], [66.8, 1986.0], [66.9, 1989.0], [67.0, 1992.0], [67.1, 1997.0], [67.2, 2001.0], [67.3, 2003.0], [67.4, 2006.0], [67.5, 2009.0], [67.6, 2014.0], [67.7, 2016.0], [67.8, 2019.0], [67.9, 2027.0], [68.0, 2029.0], [68.1, 2035.0], [68.2, 2038.0], [68.3, 2045.0], [68.4, 2049.0], [68.5, 2052.0], [68.6, 2055.0], [68.7, 2060.0], [68.8, 2062.0], [68.9, 2070.0], [69.0, 2075.0], [69.1, 2077.0], [69.2, 2079.0], [69.3, 2081.0], [69.4, 2086.0], [69.5, 2091.0], [69.6, 2094.0], [69.7, 2099.0], [69.8, 2100.0], [69.9, 2103.0], [70.0, 2107.0], [70.1, 2113.0], [70.2, 2114.0], [70.3, 2119.0], [70.4, 2121.0], [70.5, 2123.0], [70.6, 2126.0], [70.7, 2129.0], [70.8, 2134.0], [70.9, 2142.0], [71.0, 2145.0], [71.1, 2150.0], [71.2, 2151.0], [71.3, 2155.0], [71.4, 2157.0], [71.5, 2158.0], [71.6, 2162.0], [71.7, 2166.0], [71.8, 2169.0], [71.9, 2171.0], [72.0, 2176.0], [72.1, 2180.0], [72.2, 2185.0], [72.3, 2189.0], [72.4, 2193.0], [72.5, 2196.0], [72.6, 2199.0], [72.7, 2204.0], [72.8, 2210.0], [72.9, 2212.0], [73.0, 2221.0], [73.1, 2223.0], [73.2, 2228.0], [73.3, 2232.0], [73.4, 2235.0], [73.5, 2238.0], [73.6, 2240.0], [73.7, 2247.0], [73.8, 2251.0], [73.9, 2253.0], [74.0, 2257.0], [74.1, 2265.0], [74.2, 2269.0], [74.3, 2272.0], [74.4, 2275.0], [74.5, 2280.0], [74.6, 2284.0], [74.7, 2286.0], [74.8, 2293.0], [74.9, 2301.0], [75.0, 2310.0], [75.1, 2320.0], [75.2, 2325.0], [75.3, 2330.0], [75.4, 2333.0], [75.5, 2343.0], [75.6, 2349.0], [75.7, 2352.0], [75.8, 2362.0], [75.9, 2370.0], [76.0, 2382.0], [76.1, 2389.0], [76.2, 2395.0], [76.3, 2400.0], [76.4, 2407.0], [76.5, 2410.0], [76.6, 2414.0], [76.7, 2418.0], [76.8, 2424.0], [76.9, 2429.0], [77.0, 2436.0], [77.1, 2437.0], [77.2, 2443.0], [77.3, 2452.0], [77.4, 2459.0], [77.5, 2462.0], [77.6, 2467.0], [77.7, 2476.0], [77.8, 2486.0], [77.9, 2492.0], [78.0, 2496.0], [78.1, 2502.0], [78.2, 2508.0], [78.3, 2511.0], [78.4, 2517.0], [78.5, 2526.0], [78.6, 2529.0], [78.7, 2531.0], [78.8, 2541.0], [78.9, 2545.0], [79.0, 2550.0], [79.1, 2557.0], [79.2, 2563.0], [79.3, 2568.0], [79.4, 2572.0], [79.5, 2581.0], [79.6, 2585.0], [79.7, 2589.0], [79.8, 2593.0], [79.9, 2603.0], [80.0, 2609.0], [80.1, 2616.0], [80.2, 2620.0], [80.3, 2623.0], [80.4, 2631.0], [80.5, 2633.0], [80.6, 2638.0], [80.7, 2640.0], [80.8, 2645.0], [80.9, 2654.0], [81.0, 2659.0], [81.1, 2663.0], [81.2, 2666.0], [81.3, 2669.0], [81.4, 2674.0], [81.5, 2678.0], [81.6, 2686.0], [81.7, 2694.0], [81.8, 2699.0], [81.9, 2704.0], [82.0, 2709.0], [82.1, 2713.0], [82.2, 2717.0], [82.3, 2721.0], [82.4, 2724.0], [82.5, 2727.0], [82.6, 2732.0], [82.7, 2738.0], [82.8, 2744.0], [82.9, 2754.0], [83.0, 2764.0], [83.1, 2771.0], [83.2, 2777.0], [83.3, 2782.0], [83.4, 2791.0], [83.5, 2804.0], [83.6, 2814.0], [83.7, 2823.0], [83.8, 2831.0], [83.9, 2839.0], [84.0, 2843.0], [84.1, 2848.0], [84.2, 2856.0], [84.3, 2864.0], [84.4, 2871.0], [84.5, 2875.0], [84.6, 2880.0], [84.7, 2887.0], [84.8, 2896.0], [84.9, 2903.0], [85.0, 2911.0], [85.1, 2919.0], [85.2, 2924.0], [85.3, 2927.0], [85.4, 2940.0], [85.5, 2954.0], [85.6, 2968.0], [85.7, 2975.0], [85.8, 2986.0], [85.9, 2991.0], [86.0, 3006.0], [86.1, 3016.0], [86.2, 3029.0], [86.3, 3039.0], [86.4, 3048.0], [86.5, 3054.0], [86.6, 3076.0], [86.7, 3089.0], [86.8, 3103.0], [86.9, 3112.0], [87.0, 3123.0], [87.1, 3130.0], [87.2, 3139.0], [87.3, 3149.0], [87.4, 3163.0], [87.5, 3178.0], [87.6, 3201.0], [87.7, 3227.0], [87.8, 3238.0], [87.9, 3258.0], [88.0, 3272.0], [88.1, 3283.0], [88.2, 3298.0], [88.3, 3318.0], [88.4, 3335.0], [88.5, 3355.0], [88.6, 3364.0], [88.7, 3383.0], [88.8, 3396.0], [88.9, 3406.0], [89.0, 3411.0], [89.1, 3423.0], [89.2, 3434.0], [89.3, 3447.0], [89.4, 3467.0], [89.5, 3484.0], [89.6, 3492.0], [89.7, 3514.0], [89.8, 3525.0], [89.9, 3538.0], [90.0, 3543.0], [90.1, 3551.0], [90.2, 3563.0], [90.3, 3587.0], [90.4, 3609.0], [90.5, 3621.0], [90.6, 3644.0], [90.7, 3661.0], [90.8, 3667.0], [90.9, 3679.0], [91.0, 3685.0], [91.1, 3695.0], [91.2, 3708.0], [91.3, 3732.0], [91.4, 3749.0], [91.5, 3765.0], [91.6, 3774.0], [91.7, 3795.0], [91.8, 3812.0], [91.9, 3820.0], [92.0, 3843.0], [92.1, 3859.0], [92.2, 3876.0], [92.3, 3889.0], [92.4, 3900.0], [92.5, 3916.0], [92.6, 3932.0], [92.7, 3947.0], [92.8, 3957.0], [92.9, 3963.0], [93.0, 3974.0], [93.1, 3981.0], [93.2, 4009.0], [93.3, 4023.0], [93.4, 4028.0], [93.5, 4044.0], [93.6, 4049.0], [93.7, 4070.0], [93.8, 4080.0], [93.9, 4102.0], [94.0, 4113.0], [94.1, 4119.0], [94.2, 4138.0], [94.3, 4157.0], [94.4, 4166.0], [94.5, 4184.0], [94.6, 4195.0], [94.7, 4206.0], [94.8, 4221.0], [94.9, 4233.0], [95.0, 4245.0], [95.1, 4251.0], [95.2, 4267.0], [95.3, 4281.0], [95.4, 4293.0], [95.5, 4335.0], [95.6, 4345.0], [95.7, 4381.0], [95.8, 4395.0], [95.9, 4430.0], [96.0, 4443.0], [96.1, 4483.0], [96.2, 4502.0], [96.3, 4513.0], [96.4, 4551.0], [96.5, 4583.0], [96.6, 4611.0], [96.7, 4670.0], [96.8, 4735.0], [96.9, 4782.0], [97.0, 4801.0], [97.1, 4815.0], [97.2, 4895.0], [97.3, 4929.0], [97.4, 4982.0], [97.5, 5064.0], [97.6, 5169.0], [97.7, 5184.0], [97.8, 5235.0], [97.9, 5347.0], [98.0, 5401.0], [98.1, 5517.0], [98.2, 5604.0], [98.3, 5748.0], [98.4, 5904.0], [98.5, 6103.0], [98.6, 6154.0], [98.7, 6197.0], [98.8, 6247.0], [98.9, 6359.0], [99.0, 6567.0], [99.1, 6706.0], [99.2, 6981.0], [99.3, 7067.0], [99.4, 7097.0], [99.5, 7456.0], [99.6, 7702.0], [99.7, 8162.0], [99.8, 9152.0], [99.9, 10050.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 548.0, "series": [{"data": [[0.0, 502.0], [600.0, 229.0], [700.0, 152.0], [800.0, 108.0], [900.0, 104.0], [1000.0, 98.0], [1100.0, 77.0], [1200.0, 81.0], [1300.0, 87.0], [1400.0, 92.0], [1500.0, 69.0], [1600.0, 78.0], [1700.0, 95.0], [1800.0, 73.0], [1900.0, 99.0], [2000.0, 133.0], [2100.0, 149.0], [2300.0, 72.0], [2200.0, 119.0], [2400.0, 93.0], [2500.0, 93.0], [2600.0, 101.0], [2700.0, 86.0], [2800.0, 71.0], [2900.0, 59.0], [3000.0, 41.0], [3100.0, 43.0], [3200.0, 32.0], [3300.0, 33.0], [3400.0, 42.0], [3500.0, 36.0], [3600.0, 40.0], [3700.0, 32.0], [3800.0, 34.0], [3900.0, 40.0], [4000.0, 38.0], [4300.0, 21.0], [4200.0, 40.0], [4100.0, 39.0], [4400.0, 17.0], [4500.0, 22.0], [4600.0, 8.0], [4700.0, 14.0], [4800.0, 11.0], [4900.0, 12.0], [5000.0, 5.0], [5100.0, 10.0], [5300.0, 6.0], [5200.0, 8.0], [5400.0, 4.0], [5500.0, 6.0], [5600.0, 4.0], [5800.0, 2.0], [5700.0, 4.0], [6100.0, 11.0], [6000.0, 4.0], [5900.0, 2.0], [6300.0, 4.0], [6200.0, 7.0], [6400.0, 4.0], [6600.0, 4.0], [6500.0, 1.0], [6700.0, 4.0], [6900.0, 3.0], [7000.0, 9.0], [7100.0, 3.0], [7400.0, 2.0], [7200.0, 1.0], [7500.0, 2.0], [7600.0, 2.0], [7900.0, 4.0], [7700.0, 1.0], [8100.0, 1.0], [8300.0, 1.0], [8500.0, 1.0], [8400.0, 1.0], [8900.0, 1.0], [9100.0, 1.0], [9300.0, 1.0], [9400.0, 1.0], [9700.0, 1.0], [10000.0, 2.0], [10100.0, 1.0], [10500.0, 1.0], [10400.0, 1.0], [10600.0, 1.0], [11200.0, 1.0], [100.0, 548.0], [200.0, 350.0], [300.0, 207.0], [400.0, 179.0], [500.0, 258.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 11200.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 1286.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2117.0, "series": [{"data": [[0.0, 1787.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1286.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 2117.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.845360824742269, "minX": 1.60422144E12, "maxY": 10.0, "series": [{"data": [[1.6042215E12, 10.0], [1.6042218E12, 10.0], [1.6042221E12, 10.0], [1.60422144E12, 9.972222222222221], [1.60422222E12, 9.845360824742269], [1.60422156E12, 10.0], [1.60422186E12, 10.0], [1.60422216E12, 10.0], [1.60422198E12, 10.0], [1.60422162E12, 10.0], [1.60422192E12, 10.0], [1.60422174E12, 10.0], [1.60422204E12, 10.0], [1.60422168E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60422222E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 1486.5243243243242, "minX": 1.0, "maxY": 5786.0, "series": [{"data": [[8.0, 2262.0], [4.0, 2764.0], [2.0, 5786.0], [1.0, 4153.0], [9.0, 1591.5], [10.0, 1486.5243243243242], [5.0, 2609.0], [6.0, 3642.0], [3.0, 2664.0], [7.0, 2264.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.991136801541433, 1489.3107899807294]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 246.25, "minX": 1.60422144E12, "maxY": 3039630.283333333, "series": [{"data": [[1.6042215E12, 3039630.283333333], [1.6042218E12, 2738517.783333333], [1.6042221E12, 2644552.183333333], [1.60422144E12, 284515.2166666667], [1.60422222E12, 2291679.35], [1.60422156E12, 2272629.1], [1.60422186E12, 2982684.183333333], [1.60422216E12, 2806204.9], [1.60422198E12, 2658713.6166666667], [1.60422162E12, 2628286.0833333335], [1.60422192E12, 2764581.4], [1.60422174E12, 2861836.316666667], [1.60422204E12, 2621882.4], [1.60422168E12, 2317409.5]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6042215E12, 2836.866666666667], [1.6042218E12, 3074.3166666666666], [1.6042221E12, 3007.016666666667], [1.60422144E12, 246.25], [1.60422222E12, 2024.45], [1.60422156E12, 2843.5333333333333], [1.60422186E12, 2665.1666666666665], [1.60422216E12, 3303.1833333333334], [1.60422198E12, 3457.8166666666666], [1.60422162E12, 2167.45], [1.60422192E12, 2734.133333333333], [1.60422174E12, 2989.4], [1.60422204E12, 1793.8], [1.60422168E12, 2000.3833333333334]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60422222E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 1149.3666026871404, "minX": 1.60422144E12, "maxY": 2228.82156133829, "series": [{"data": [[1.6042215E12, 1414.4472477064223], [1.6042218E12, 1380.1515837104064], [1.6042221E12, 1389.2281105990787], [1.60422144E12, 1638.9444444444446], [1.60422222E12, 1578.137457044674], [1.60422156E12, 1420.0930787589493], [1.60422186E12, 1513.436548223349], [1.60422216E12, 1272.0041928721157], [1.60422198E12, 1149.3666026871404], [1.60422162E12, 1777.6042296072521], [1.60422192E12, 1450.1811594202902], [1.60422174E12, 1355.4480369515002], [1.60422204E12, 2228.82156133829], [1.60422168E12, 2080.303754266212]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60422222E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 1147.4107485604607, "minX": 1.60422144E12, "maxY": 2224.944237918217, "series": [{"data": [[1.6042215E12, 1410.9839449541287], [1.6042218E12, 1377.8371040723978], [1.6042221E12, 1386.804147465438], [1.60422144E12, 1635.5833333333337], [1.60422222E12, 1575.2714776632301], [1.60422156E12, 1417.4940334128892], [1.60422186E12, 1510.6269035532982], [1.60422216E12, 1269.6813417190772], [1.60422198E12, 1147.4107485604607], [1.60422162E12, 1773.8791540785508], [1.60422192E12, 1447.5652173913047], [1.60422174E12, 1352.6928406466504], [1.60422204E12, 2224.944237918217], [1.60422168E12, 2076.754266211606]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60422222E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0115473441108545, "minX": 1.60422144E12, "maxY": 3.3888888888888897, "series": [{"data": [[1.6042215E12, 0.03211009174311926], [1.6042218E12, 0.018099547511312226], [1.6042221E12, 0.023041474654377864], [1.60422144E12, 3.3888888888888897], [1.60422222E12, 0.041237113402061876], [1.60422156E12, 0.033412887828162284], [1.60422186E12, 0.020304568527918804], [1.60422216E12, 0.03354297693920337], [1.60422198E12, 0.02303262955854129], [1.60422162E12, 0.02416918429003021], [1.60422192E12, 0.024154589371980686], [1.60422174E12, 0.0115473441108545], [1.60422204E12, 0.03345724907063198], [1.60422168E12, 0.05802047781569964]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60422222E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 5.0, "minX": 1.60422144E12, "maxY": 11206.0, "series": [{"data": [[1.6042215E12, 10036.0], [1.6042218E12, 11206.0], [1.6042221E12, 7663.0], [1.60422144E12, 4910.0], [1.60422222E12, 6090.0], [1.60422156E12, 6057.0], [1.60422186E12, 6359.0], [1.60422216E12, 10050.0], [1.60422198E12, 8495.0], [1.60422162E12, 10174.0], [1.60422192E12, 7702.0], [1.60422174E12, 9152.0], [1.60422204E12, 7166.0], [1.60422168E12, 10541.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6042215E12, 24.597999374866486], [1.6042218E12, 16.97399978876114], [1.6042221E12, 16.0], [1.60422144E12, 42.0], [1.60422222E12, 24.5119997215271], [1.60422156E12, 19.239999198913576], [1.60422186E12, 17.554999905824662], [1.60422216E12, 7.603999772071839], [1.60422198E12, 20.0], [1.60422162E12, 21.98799992084503], [1.60422192E12, 26.879999208450318], [1.60422174E12, 9.71799968957901], [1.60422204E12, 17.149999678134918], [1.60422168E12, 13.291999859809875]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6042215E12, 27.936700375080108], [1.6042218E12, 17.771400084495546], [1.6042221E12, 16.30650004148483], [1.60422144E12, 42.0], [1.60422222E12, 25.56320011138916], [1.60422156E12, 21.158000040054322], [1.60422186E12, 17.910500037670136], [1.60422216E12, 8.464400091171266], [1.60422198E12, 20.1678000497818], [1.60422162E12, 22.286800031661986], [1.60422192E12, 29.54250019788742], [1.60422174E12, 10.296600041389466], [1.60422204E12, 18.365000128746033], [1.60422168E12, 13.82120005607605]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6042215E12, 26.363499531149863], [1.6042218E12, 17.416999894380567], [1.6042221E12, 16.13249994814396], [1.60422144E12, 42.0], [1.60422222E12, 25.09599986076355], [1.60422156E12, 20.919999599456784], [1.60422186E12, 17.75249995291233], [1.60422216E12, 8.081999886035918], [1.60422198E12, 20.0], [1.60422162E12, 22.153999960422517], [1.60422192E12, 28.539999604225155], [1.60422174E12, 10.122999948263168], [1.60422204E12, 17.82499983906746], [1.60422168E12, 13.585999929904936]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.6042215E12, 17.0], [1.6042218E12, 11.0], [1.6042221E12, 15.0], [1.60422144E12, 42.0], [1.60422222E12, 22.0], [1.60422156E12, 12.0], [1.60422186E12, 14.0], [1.60422216E12, 6.0], [1.60422198E12, 16.0], [1.60422162E12, 15.0], [1.60422192E12, 8.0], [1.60422174E12, 5.0], [1.60422204E12, 14.0], [1.60422168E12, 9.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6042215E12, 794.5], [1.6042218E12, 731.0], [1.6042221E12, 697.0], [1.60422144E12, 1176.5], [1.60422222E12, 1121.0], [1.60422156E12, 1342.0], [1.60422186E12, 1160.0], [1.60422216E12, 742.0], [1.60422198E12, 565.0], [1.60422162E12, 1672.0], [1.60422192E12, 1394.0], [1.60422174E12, 642.0], [1.60422204E12, 2239.0], [1.60422168E12, 1961.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60422222E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 163.0, "minX": 1.0, "maxY": 2568.0, "series": [{"data": [[2.0, 2568.0], [33.0, 169.0], [35.0, 203.0], [39.0, 163.0], [3.0, 2366.0], [4.0, 2088.5], [5.0, 2070.0], [6.0, 1532.0], [7.0, 1381.0], [8.0, 859.0], [9.0, 845.0], [10.0, 683.5], [11.0, 597.0], [12.0, 605.0], [13.0, 569.0], [14.0, 420.0], [15.0, 472.5], [1.0, 2500.5], [16.0, 301.5], [17.0, 293.0], [18.0, 229.0], [19.0, 288.5], [21.0, 497.0], [23.0, 229.5], [24.0, 279.5], [26.0, 167.0], [27.0, 275.0], [28.0, 169.0], [29.0, 190.0], [30.0, 195.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 39.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 161.0, "minX": 1.0, "maxY": 2561.5, "series": [{"data": [[2.0, 2561.5], [33.0, 166.0], [35.0, 201.5], [39.0, 161.0], [3.0, 2361.0], [4.0, 2082.5], [5.0, 2067.0], [6.0, 1529.5], [7.0, 1379.0], [8.0, 855.5], [9.0, 844.0], [10.0, 680.5], [11.0, 592.0], [12.0, 603.5], [13.0, 566.0], [14.0, 419.0], [15.0, 468.5], [1.0, 2497.5], [16.0, 296.0], [17.0, 288.0], [18.0, 224.5], [19.0, 288.5], [21.0, 497.0], [23.0, 227.5], [24.0, 277.5], [26.0, 165.0], [27.0, 274.5], [28.0, 167.5], [29.0, 189.0], [30.0, 194.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 39.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.7666666666666667, "minX": 1.60422144E12, "maxY": 8.683333333333334, "series": [{"data": [[1.6042215E12, 7.266666666666667], [1.6042218E12, 7.366666666666666], [1.6042221E12, 7.233333333333333], [1.60422144E12, 0.7666666666666667], [1.60422222E12, 4.683333333333334], [1.60422156E12, 6.983333333333333], [1.60422186E12, 6.566666666666666], [1.60422216E12, 7.95], [1.60422198E12, 8.683333333333334], [1.60422162E12, 5.516666666666667], [1.60422192E12, 6.9], [1.60422174E12, 7.216666666666667], [1.60422204E12, 4.483333333333333], [1.60422168E12, 4.883333333333334]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60422222E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.6, "minX": 1.60422144E12, "maxY": 8.683333333333334, "series": [{"data": [[1.6042215E12, 7.266666666666667], [1.6042218E12, 7.366666666666666], [1.6042221E12, 7.233333333333333], [1.60422144E12, 0.6], [1.60422222E12, 4.85], [1.60422156E12, 6.983333333333333], [1.60422186E12, 6.566666666666666], [1.60422216E12, 7.95], [1.60422198E12, 8.683333333333334], [1.60422162E12, 5.516666666666667], [1.60422192E12, 6.9], [1.60422174E12, 7.216666666666667], [1.60422204E12, 4.483333333333333], [1.60422168E12, 4.883333333333334]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60422222E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.6, "minX": 1.60422144E12, "maxY": 8.683333333333334, "series": [{"data": [[1.6042215E12, 7.266666666666667], [1.6042218E12, 7.366666666666666], [1.6042221E12, 7.233333333333333], [1.60422144E12, 0.6], [1.60422222E12, 4.85], [1.60422156E12, 6.983333333333333], [1.60422186E12, 6.566666666666666], [1.60422216E12, 7.95], [1.60422198E12, 8.683333333333334], [1.60422162E12, 5.516666666666667], [1.60422192E12, 6.9], [1.60422174E12, 7.216666666666667], [1.60422204E12, 4.483333333333333], [1.60422168E12, 4.883333333333334]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60422222E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.6, "minX": 1.60422144E12, "maxY": 8.683333333333334, "series": [{"data": [[1.6042215E12, 7.266666666666667], [1.6042218E12, 7.366666666666666], [1.6042221E12, 7.233333333333333], [1.60422144E12, 0.6], [1.60422222E12, 4.85], [1.60422156E12, 6.983333333333333], [1.60422186E12, 6.566666666666666], [1.60422216E12, 7.95], [1.60422198E12, 8.683333333333334], [1.60422162E12, 5.516666666666667], [1.60422192E12, 6.9], [1.60422174E12, 7.216666666666667], [1.60422204E12, 4.483333333333333], [1.60422168E12, 4.883333333333334]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60422222E12, "title": "Total Transactions Per Second"}},
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

