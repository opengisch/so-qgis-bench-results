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
        data: {"result": {"minY": 5.0, "minX": 0.0, "maxY": 12890.0, "series": [{"data": [[0.0, 5.0], [0.1, 8.0], [0.2, 9.0], [0.3, 11.0], [0.4, 11.0], [0.5, 12.0], [0.6, 13.0], [0.7, 13.0], [0.8, 14.0], [0.9, 15.0], [1.0, 15.0], [1.1, 16.0], [1.2, 16.0], [1.3, 17.0], [1.4, 17.0], [1.5, 17.0], [1.6, 18.0], [1.7, 19.0], [1.8, 19.0], [1.9, 20.0], [2.0, 20.0], [2.1, 21.0], [2.2, 21.0], [2.3, 22.0], [2.4, 23.0], [2.5, 23.0], [2.6, 24.0], [2.7, 25.0], [2.8, 25.0], [2.9, 26.0], [3.0, 26.0], [3.1, 28.0], [3.2, 29.0], [3.3, 30.0], [3.4, 31.0], [3.5, 31.0], [3.6, 32.0], [3.7, 34.0], [3.8, 35.0], [3.9, 36.0], [4.0, 37.0], [4.1, 38.0], [4.2, 39.0], [4.3, 40.0], [4.4, 40.0], [4.5, 42.0], [4.6, 42.0], [4.7, 42.0], [4.8, 43.0], [4.9, 44.0], [5.0, 45.0], [5.1, 45.0], [5.2, 47.0], [5.3, 48.0], [5.4, 49.0], [5.5, 49.0], [5.6, 50.0], [5.7, 51.0], [5.8, 53.0], [5.9, 53.0], [6.0, 54.0], [6.1, 54.0], [6.2, 56.0], [6.3, 58.0], [6.4, 58.0], [6.5, 60.0], [6.6, 60.0], [6.7, 61.0], [6.8, 61.0], [6.9, 62.0], [7.0, 63.0], [7.1, 65.0], [7.2, 66.0], [7.3, 67.0], [7.4, 68.0], [7.5, 69.0], [7.6, 70.0], [7.7, 71.0], [7.8, 73.0], [7.9, 75.0], [8.0, 78.0], [8.1, 81.0], [8.2, 82.0], [8.3, 83.0], [8.4, 84.0], [8.5, 85.0], [8.6, 85.0], [8.7, 86.0], [8.8, 87.0], [8.9, 88.0], [9.0, 89.0], [9.1, 89.0], [9.2, 91.0], [9.3, 91.0], [9.4, 92.0], [9.5, 93.0], [9.6, 93.0], [9.7, 94.0], [9.8, 95.0], [9.9, 95.0], [10.0, 96.0], [10.1, 97.0], [10.2, 97.0], [10.3, 98.0], [10.4, 98.0], [10.5, 99.0], [10.6, 99.0], [10.7, 100.0], [10.8, 101.0], [10.9, 101.0], [11.0, 103.0], [11.1, 104.0], [11.2, 105.0], [11.3, 106.0], [11.4, 106.0], [11.5, 107.0], [11.6, 108.0], [11.7, 108.0], [11.8, 108.0], [11.9, 109.0], [12.0, 110.0], [12.1, 110.0], [12.2, 111.0], [12.3, 112.0], [12.4, 112.0], [12.5, 112.0], [12.6, 113.0], [12.7, 114.0], [12.8, 116.0], [12.9, 116.0], [13.0, 117.0], [13.1, 118.0], [13.2, 119.0], [13.3, 120.0], [13.4, 120.0], [13.5, 121.0], [13.6, 122.0], [13.7, 123.0], [13.8, 123.0], [13.9, 124.0], [14.0, 125.0], [14.1, 126.0], [14.2, 127.0], [14.3, 127.0], [14.4, 129.0], [14.5, 130.0], [14.6, 131.0], [14.7, 133.0], [14.8, 134.0], [14.9, 135.0], [15.0, 136.0], [15.1, 138.0], [15.2, 139.0], [15.3, 141.0], [15.4, 141.0], [15.5, 143.0], [15.6, 145.0], [15.7, 146.0], [15.8, 147.0], [15.9, 148.0], [16.0, 149.0], [16.1, 150.0], [16.2, 151.0], [16.3, 152.0], [16.4, 153.0], [16.5, 154.0], [16.6, 155.0], [16.7, 156.0], [16.8, 157.0], [16.9, 159.0], [17.0, 160.0], [17.1, 162.0], [17.2, 164.0], [17.3, 165.0], [17.4, 166.0], [17.5, 166.0], [17.6, 167.0], [17.7, 167.0], [17.8, 168.0], [17.9, 169.0], [18.0, 171.0], [18.1, 172.0], [18.2, 174.0], [18.3, 175.0], [18.4, 176.0], [18.5, 177.0], [18.6, 178.0], [18.7, 180.0], [18.8, 181.0], [18.9, 182.0], [19.0, 184.0], [19.1, 184.0], [19.2, 184.0], [19.3, 185.0], [19.4, 186.0], [19.5, 188.0], [19.6, 189.0], [19.7, 190.0], [19.8, 191.0], [19.9, 192.0], [20.0, 193.0], [20.1, 194.0], [20.2, 195.0], [20.3, 195.0], [20.4, 196.0], [20.5, 197.0], [20.6, 197.0], [20.7, 198.0], [20.8, 200.0], [20.9, 200.0], [21.0, 201.0], [21.1, 202.0], [21.2, 204.0], [21.3, 205.0], [21.4, 206.0], [21.5, 207.0], [21.6, 207.0], [21.7, 208.0], [21.8, 210.0], [21.9, 211.0], [22.0, 213.0], [22.1, 215.0], [22.2, 216.0], [22.3, 218.0], [22.4, 219.0], [22.5, 221.0], [22.6, 221.0], [22.7, 223.0], [22.8, 224.0], [22.9, 225.0], [23.0, 226.0], [23.1, 227.0], [23.2, 228.0], [23.3, 229.0], [23.4, 230.0], [23.5, 232.0], [23.6, 235.0], [23.7, 235.0], [23.8, 238.0], [23.9, 239.0], [24.0, 240.0], [24.1, 242.0], [24.2, 243.0], [24.3, 244.0], [24.4, 246.0], [24.5, 249.0], [24.6, 252.0], [24.7, 254.0], [24.8, 255.0], [24.9, 258.0], [25.0, 260.0], [25.1, 261.0], [25.2, 262.0], [25.3, 264.0], [25.4, 267.0], [25.5, 269.0], [25.6, 271.0], [25.7, 273.0], [25.8, 276.0], [25.9, 277.0], [26.0, 279.0], [26.1, 281.0], [26.2, 284.0], [26.3, 285.0], [26.4, 287.0], [26.5, 289.0], [26.6, 290.0], [26.7, 291.0], [26.8, 293.0], [26.9, 295.0], [27.0, 297.0], [27.1, 298.0], [27.2, 300.0], [27.3, 303.0], [27.4, 306.0], [27.5, 310.0], [27.6, 312.0], [27.7, 314.0], [27.8, 316.0], [27.9, 317.0], [28.0, 319.0], [28.1, 320.0], [28.2, 323.0], [28.3, 325.0], [28.4, 327.0], [28.5, 330.0], [28.6, 334.0], [28.7, 335.0], [28.8, 340.0], [28.9, 343.0], [29.0, 344.0], [29.1, 349.0], [29.2, 351.0], [29.3, 356.0], [29.4, 360.0], [29.5, 360.0], [29.6, 361.0], [29.7, 363.0], [29.8, 367.0], [29.9, 372.0], [30.0, 373.0], [30.1, 375.0], [30.2, 377.0], [30.3, 378.0], [30.4, 380.0], [30.5, 383.0], [30.6, 384.0], [30.7, 386.0], [30.8, 388.0], [30.9, 390.0], [31.0, 395.0], [31.1, 398.0], [31.2, 400.0], [31.3, 404.0], [31.4, 410.0], [31.5, 414.0], [31.6, 420.0], [31.7, 426.0], [31.8, 429.0], [31.9, 434.0], [32.0, 439.0], [32.1, 444.0], [32.2, 446.0], [32.3, 449.0], [32.4, 456.0], [32.5, 460.0], [32.6, 464.0], [32.7, 464.0], [32.8, 471.0], [32.9, 474.0], [33.0, 477.0], [33.1, 481.0], [33.2, 483.0], [33.3, 487.0], [33.4, 490.0], [33.5, 491.0], [33.6, 493.0], [33.7, 494.0], [33.8, 495.0], [33.9, 496.0], [34.0, 499.0], [34.1, 501.0], [34.2, 503.0], [34.3, 504.0], [34.4, 507.0], [34.5, 509.0], [34.6, 511.0], [34.7, 513.0], [34.8, 515.0], [34.9, 516.0], [35.0, 518.0], [35.1, 521.0], [35.2, 522.0], [35.3, 524.0], [35.4, 527.0], [35.5, 528.0], [35.6, 531.0], [35.7, 535.0], [35.8, 536.0], [35.9, 539.0], [36.0, 541.0], [36.1, 543.0], [36.2, 549.0], [36.3, 550.0], [36.4, 553.0], [36.5, 554.0], [36.6, 555.0], [36.7, 556.0], [36.8, 556.0], [36.9, 557.0], [37.0, 559.0], [37.1, 560.0], [37.2, 562.0], [37.3, 564.0], [37.4, 565.0], [37.5, 566.0], [37.6, 569.0], [37.7, 572.0], [37.8, 574.0], [37.9, 577.0], [38.0, 580.0], [38.1, 581.0], [38.2, 583.0], [38.3, 586.0], [38.4, 590.0], [38.5, 592.0], [38.6, 594.0], [38.7, 597.0], [38.8, 600.0], [38.9, 601.0], [39.0, 603.0], [39.1, 608.0], [39.2, 610.0], [39.3, 613.0], [39.4, 614.0], [39.5, 615.0], [39.6, 617.0], [39.7, 622.0], [39.8, 624.0], [39.9, 626.0], [40.0, 629.0], [40.1, 632.0], [40.2, 635.0], [40.3, 638.0], [40.4, 641.0], [40.5, 643.0], [40.6, 644.0], [40.7, 647.0], [40.8, 648.0], [40.9, 649.0], [41.0, 651.0], [41.1, 655.0], [41.2, 656.0], [41.3, 658.0], [41.4, 661.0], [41.5, 663.0], [41.6, 666.0], [41.7, 668.0], [41.8, 674.0], [41.9, 675.0], [42.0, 677.0], [42.1, 679.0], [42.2, 682.0], [42.3, 684.0], [42.4, 686.0], [42.5, 692.0], [42.6, 694.0], [42.7, 697.0], [42.8, 699.0], [42.9, 700.0], [43.0, 706.0], [43.1, 709.0], [43.2, 712.0], [43.3, 715.0], [43.4, 718.0], [43.5, 727.0], [43.6, 731.0], [43.7, 736.0], [43.8, 741.0], [43.9, 744.0], [44.0, 748.0], [44.1, 751.0], [44.2, 754.0], [44.3, 757.0], [44.4, 758.0], [44.5, 762.0], [44.6, 765.0], [44.7, 768.0], [44.8, 771.0], [44.9, 773.0], [45.0, 775.0], [45.1, 779.0], [45.2, 781.0], [45.3, 786.0], [45.4, 792.0], [45.5, 793.0], [45.6, 799.0], [45.7, 803.0], [45.8, 809.0], [45.9, 814.0], [46.0, 818.0], [46.1, 825.0], [46.2, 826.0], [46.3, 830.0], [46.4, 833.0], [46.5, 846.0], [46.6, 849.0], [46.7, 852.0], [46.8, 854.0], [46.9, 859.0], [47.0, 861.0], [47.1, 865.0], [47.2, 872.0], [47.3, 875.0], [47.4, 878.0], [47.5, 884.0], [47.6, 889.0], [47.7, 900.0], [47.8, 903.0], [47.9, 909.0], [48.0, 913.0], [48.1, 924.0], [48.2, 931.0], [48.3, 934.0], [48.4, 937.0], [48.5, 941.0], [48.6, 948.0], [48.7, 955.0], [48.8, 957.0], [48.9, 960.0], [49.0, 965.0], [49.1, 966.0], [49.2, 972.0], [49.3, 983.0], [49.4, 991.0], [49.5, 999.0], [49.6, 1012.0], [49.7, 1018.0], [49.8, 1024.0], [49.9, 1028.0], [50.0, 1030.0], [50.1, 1036.0], [50.2, 1041.0], [50.3, 1051.0], [50.4, 1059.0], [50.5, 1063.0], [50.6, 1070.0], [50.7, 1074.0], [50.8, 1083.0], [50.9, 1088.0], [51.0, 1095.0], [51.1, 1100.0], [51.2, 1104.0], [51.3, 1111.0], [51.4, 1118.0], [51.5, 1124.0], [51.6, 1130.0], [51.7, 1140.0], [51.8, 1145.0], [51.9, 1149.0], [52.0, 1154.0], [52.1, 1159.0], [52.2, 1166.0], [52.3, 1171.0], [52.4, 1177.0], [52.5, 1180.0], [52.6, 1183.0], [52.7, 1190.0], [52.8, 1195.0], [52.9, 1203.0], [53.0, 1210.0], [53.1, 1218.0], [53.2, 1221.0], [53.3, 1231.0], [53.4, 1233.0], [53.5, 1236.0], [53.6, 1240.0], [53.7, 1249.0], [53.8, 1261.0], [53.9, 1263.0], [54.0, 1268.0], [54.1, 1271.0], [54.2, 1275.0], [54.3, 1279.0], [54.4, 1282.0], [54.5, 1289.0], [54.6, 1294.0], [54.7, 1298.0], [54.8, 1305.0], [54.9, 1308.0], [55.0, 1311.0], [55.1, 1319.0], [55.2, 1327.0], [55.3, 1333.0], [55.4, 1336.0], [55.5, 1339.0], [55.6, 1345.0], [55.7, 1347.0], [55.8, 1349.0], [55.9, 1356.0], [56.0, 1361.0], [56.1, 1366.0], [56.2, 1369.0], [56.3, 1375.0], [56.4, 1377.0], [56.5, 1391.0], [56.6, 1397.0], [56.7, 1403.0], [56.8, 1407.0], [56.9, 1411.0], [57.0, 1420.0], [57.1, 1424.0], [57.2, 1430.0], [57.3, 1436.0], [57.4, 1440.0], [57.5, 1448.0], [57.6, 1457.0], [57.7, 1465.0], [57.8, 1468.0], [57.9, 1477.0], [58.0, 1494.0], [58.1, 1503.0], [58.2, 1512.0], [58.3, 1518.0], [58.4, 1529.0], [58.5, 1534.0], [58.6, 1539.0], [58.7, 1546.0], [58.8, 1552.0], [58.9, 1556.0], [59.0, 1563.0], [59.1, 1569.0], [59.2, 1578.0], [59.3, 1583.0], [59.4, 1588.0], [59.5, 1596.0], [59.6, 1600.0], [59.7, 1611.0], [59.8, 1620.0], [59.9, 1627.0], [60.0, 1637.0], [60.1, 1645.0], [60.2, 1649.0], [60.3, 1655.0], [60.4, 1659.0], [60.5, 1664.0], [60.6, 1667.0], [60.7, 1676.0], [60.8, 1680.0], [60.9, 1686.0], [61.0, 1690.0], [61.1, 1693.0], [61.2, 1696.0], [61.3, 1710.0], [61.4, 1713.0], [61.5, 1716.0], [61.6, 1723.0], [61.7, 1731.0], [61.8, 1739.0], [61.9, 1745.0], [62.0, 1756.0], [62.1, 1762.0], [62.2, 1768.0], [62.3, 1773.0], [62.4, 1781.0], [62.5, 1786.0], [62.6, 1789.0], [62.7, 1791.0], [62.8, 1796.0], [62.9, 1802.0], [63.0, 1807.0], [63.1, 1813.0], [63.2, 1825.0], [63.3, 1833.0], [63.4, 1841.0], [63.5, 1848.0], [63.6, 1855.0], [63.7, 1861.0], [63.8, 1867.0], [63.9, 1875.0], [64.0, 1881.0], [64.1, 1887.0], [64.2, 1894.0], [64.3, 1902.0], [64.4, 1916.0], [64.5, 1923.0], [64.6, 1928.0], [64.7, 1930.0], [64.8, 1934.0], [64.9, 1942.0], [65.0, 1948.0], [65.1, 1955.0], [65.2, 1964.0], [65.3, 1966.0], [65.4, 1972.0], [65.5, 1976.0], [65.6, 1979.0], [65.7, 1983.0], [65.8, 1988.0], [65.9, 1993.0], [66.0, 1997.0], [66.1, 1999.0], [66.2, 2002.0], [66.3, 2006.0], [66.4, 2010.0], [66.5, 2013.0], [66.6, 2017.0], [66.7, 2020.0], [66.8, 2023.0], [66.9, 2024.0], [67.0, 2027.0], [67.1, 2031.0], [67.2, 2033.0], [67.3, 2036.0], [67.4, 2038.0], [67.5, 2041.0], [67.6, 2045.0], [67.7, 2047.0], [67.8, 2048.0], [67.9, 2050.0], [68.0, 2053.0], [68.1, 2056.0], [68.2, 2059.0], [68.3, 2061.0], [68.4, 2062.0], [68.5, 2068.0], [68.6, 2074.0], [68.7, 2077.0], [68.8, 2079.0], [68.9, 2081.0], [69.0, 2085.0], [69.1, 2089.0], [69.2, 2092.0], [69.3, 2095.0], [69.4, 2096.0], [69.5, 2099.0], [69.6, 2102.0], [69.7, 2105.0], [69.8, 2107.0], [69.9, 2109.0], [70.0, 2110.0], [70.1, 2115.0], [70.2, 2116.0], [70.3, 2117.0], [70.4, 2119.0], [70.5, 2123.0], [70.6, 2126.0], [70.7, 2128.0], [70.8, 2131.0], [70.9, 2134.0], [71.0, 2136.0], [71.1, 2138.0], [71.2, 2140.0], [71.3, 2145.0], [71.4, 2151.0], [71.5, 2153.0], [71.6, 2158.0], [71.7, 2159.0], [71.8, 2167.0], [71.9, 2168.0], [72.0, 2171.0], [72.1, 2172.0], [72.2, 2178.0], [72.3, 2180.0], [72.4, 2183.0], [72.5, 2187.0], [72.6, 2190.0], [72.7, 2199.0], [72.8, 2206.0], [72.9, 2207.0], [73.0, 2210.0], [73.1, 2213.0], [73.2, 2217.0], [73.3, 2221.0], [73.4, 2223.0], [73.5, 2232.0], [73.6, 2236.0], [73.7, 2239.0], [73.8, 2242.0], [73.9, 2250.0], [74.0, 2255.0], [74.1, 2258.0], [74.2, 2265.0], [74.3, 2272.0], [74.4, 2277.0], [74.5, 2280.0], [74.6, 2285.0], [74.7, 2293.0], [74.8, 2300.0], [74.9, 2304.0], [75.0, 2308.0], [75.1, 2315.0], [75.2, 2322.0], [75.3, 2332.0], [75.4, 2342.0], [75.5, 2349.0], [75.6, 2355.0], [75.7, 2366.0], [75.8, 2372.0], [75.9, 2379.0], [76.0, 2385.0], [76.1, 2394.0], [76.2, 2398.0], [76.3, 2402.0], [76.4, 2412.0], [76.5, 2420.0], [76.6, 2425.0], [76.7, 2431.0], [76.8, 2439.0], [76.9, 2444.0], [77.0, 2455.0], [77.1, 2468.0], [77.2, 2474.0], [77.3, 2477.0], [77.4, 2479.0], [77.5, 2492.0], [77.6, 2496.0], [77.7, 2507.0], [77.8, 2512.0], [77.9, 2517.0], [78.0, 2518.0], [78.1, 2525.0], [78.2, 2534.0], [78.3, 2540.0], [78.4, 2542.0], [78.5, 2546.0], [78.6, 2551.0], [78.7, 2556.0], [78.8, 2560.0], [78.9, 2568.0], [79.0, 2572.0], [79.1, 2575.0], [79.2, 2580.0], [79.3, 2583.0], [79.4, 2591.0], [79.5, 2596.0], [79.6, 2602.0], [79.7, 2611.0], [79.8, 2616.0], [79.9, 2621.0], [80.0, 2623.0], [80.1, 2632.0], [80.2, 2635.0], [80.3, 2638.0], [80.4, 2643.0], [80.5, 2651.0], [80.6, 2653.0], [80.7, 2655.0], [80.8, 2660.0], [80.9, 2666.0], [81.0, 2674.0], [81.1, 2679.0], [81.2, 2686.0], [81.3, 2696.0], [81.4, 2700.0], [81.5, 2704.0], [81.6, 2709.0], [81.7, 2713.0], [81.8, 2723.0], [81.9, 2730.0], [82.0, 2737.0], [82.1, 2744.0], [82.2, 2748.0], [82.3, 2755.0], [82.4, 2758.0], [82.5, 2766.0], [82.6, 2774.0], [82.7, 2783.0], [82.8, 2794.0], [82.9, 2797.0], [83.0, 2807.0], [83.1, 2816.0], [83.2, 2818.0], [83.3, 2823.0], [83.4, 2827.0], [83.5, 2835.0], [83.6, 2849.0], [83.7, 2856.0], [83.8, 2862.0], [83.9, 2869.0], [84.0, 2878.0], [84.1, 2883.0], [84.2, 2893.0], [84.3, 2906.0], [84.4, 2914.0], [84.5, 2918.0], [84.6, 2926.0], [84.7, 2928.0], [84.8, 2938.0], [84.9, 2944.0], [85.0, 2952.0], [85.1, 2968.0], [85.2, 2977.0], [85.3, 2981.0], [85.4, 2989.0], [85.5, 2998.0], [85.6, 3004.0], [85.7, 3017.0], [85.8, 3024.0], [85.9, 3036.0], [86.0, 3042.0], [86.1, 3077.0], [86.2, 3089.0], [86.3, 3097.0], [86.4, 3105.0], [86.5, 3114.0], [86.6, 3121.0], [86.7, 3127.0], [86.8, 3136.0], [86.9, 3141.0], [87.0, 3154.0], [87.1, 3161.0], [87.2, 3164.0], [87.3, 3176.0], [87.4, 3192.0], [87.5, 3202.0], [87.6, 3219.0], [87.7, 3232.0], [87.8, 3249.0], [87.9, 3272.0], [88.0, 3290.0], [88.1, 3300.0], [88.2, 3320.0], [88.3, 3337.0], [88.4, 3347.0], [88.5, 3370.0], [88.6, 3384.0], [88.7, 3397.0], [88.8, 3410.0], [88.9, 3423.0], [89.0, 3445.0], [89.1, 3451.0], [89.2, 3478.0], [89.3, 3496.0], [89.4, 3502.0], [89.5, 3507.0], [89.6, 3521.0], [89.7, 3532.0], [89.8, 3546.0], [89.9, 3563.0], [90.0, 3578.0], [90.1, 3588.0], [90.2, 3595.0], [90.3, 3614.0], [90.4, 3631.0], [90.5, 3640.0], [90.6, 3669.0], [90.7, 3685.0], [90.8, 3697.0], [90.9, 3703.0], [91.0, 3716.0], [91.1, 3738.0], [91.2, 3766.0], [91.3, 3779.0], [91.4, 3786.0], [91.5, 3802.0], [91.6, 3809.0], [91.7, 3828.0], [91.8, 3856.0], [91.9, 3866.0], [92.0, 3905.0], [92.1, 3921.0], [92.2, 3931.0], [92.3, 3951.0], [92.4, 3954.0], [92.5, 3964.0], [92.6, 3987.0], [92.7, 4002.0], [92.8, 4013.0], [92.9, 4027.0], [93.0, 4031.0], [93.1, 4045.0], [93.2, 4057.0], [93.3, 4071.0], [93.4, 4090.0], [93.5, 4098.0], [93.6, 4105.0], [93.7, 4119.0], [93.8, 4126.0], [93.9, 4145.0], [94.0, 4152.0], [94.1, 4158.0], [94.2, 4163.0], [94.3, 4178.0], [94.4, 4186.0], [94.5, 4199.0], [94.6, 4202.0], [94.7, 4206.0], [94.8, 4208.0], [94.9, 4215.0], [95.0, 4221.0], [95.1, 4245.0], [95.2, 4260.0], [95.3, 4265.0], [95.4, 4278.0], [95.5, 4292.0], [95.6, 4308.0], [95.7, 4333.0], [95.8, 4348.0], [95.9, 4393.0], [96.0, 4420.0], [96.1, 4452.0], [96.2, 4499.0], [96.3, 4563.0], [96.4, 4641.0], [96.5, 4662.0], [96.6, 4716.0], [96.7, 4766.0], [96.8, 4786.0], [96.9, 4835.0], [97.0, 4870.0], [97.1, 4927.0], [97.2, 5011.0], [97.3, 5091.0], [97.4, 5150.0], [97.5, 5189.0], [97.6, 5240.0], [97.7, 5312.0], [97.8, 5398.0], [97.9, 5450.0], [98.0, 5524.0], [98.1, 5594.0], [98.2, 5673.0], [98.3, 5789.0], [98.4, 5847.0], [98.5, 5904.0], [98.6, 5951.0], [98.7, 6071.0], [98.8, 6168.0], [98.9, 6230.0], [99.0, 6427.0], [99.1, 6592.0], [99.2, 6684.0], [99.3, 6972.0], [99.4, 7161.0], [99.5, 7289.0], [99.6, 7741.0], [99.7, 7979.0], [99.8, 8374.0], [99.9, 9811.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 555.0, "series": [{"data": [[0.0, 555.0], [600.0, 210.0], [700.0, 145.0], [800.0, 108.0], [900.0, 94.0], [1000.0, 82.0], [1100.0, 91.0], [1200.0, 98.0], [1300.0, 98.0], [1400.0, 75.0], [1500.0, 79.0], [1600.0, 84.0], [1700.0, 86.0], [1800.0, 73.0], [1900.0, 97.0], [2000.0, 175.0], [2100.0, 167.0], [2200.0, 106.0], [2300.0, 77.0], [2400.0, 71.0], [2500.0, 99.0], [2600.0, 95.0], [2700.0, 82.0], [2800.0, 68.0], [2900.0, 67.0], [3000.0, 42.0], [3100.0, 60.0], [3300.0, 34.0], [3200.0, 31.0], [3400.0, 30.0], [3500.0, 48.0], [3700.0, 32.0], [3600.0, 32.0], [3800.0, 26.0], [3900.0, 35.0], [4000.0, 44.0], [4200.0, 54.0], [4100.0, 52.0], [4300.0, 22.0], [4400.0, 12.0], [4500.0, 8.0], [4600.0, 9.0], [4800.0, 11.0], [4700.0, 15.0], [5100.0, 10.0], [5000.0, 8.0], [4900.0, 7.0], [5200.0, 8.0], [5300.0, 7.0], [5400.0, 9.0], [5600.0, 5.0], [5500.0, 7.0], [5700.0, 6.0], [5800.0, 8.0], [5900.0, 8.0], [6100.0, 6.0], [6000.0, 5.0], [6200.0, 4.0], [6300.0, 4.0], [6500.0, 3.0], [6400.0, 3.0], [6600.0, 5.0], [6900.0, 2.0], [6800.0, 2.0], [6700.0, 1.0], [7100.0, 3.0], [7000.0, 3.0], [7200.0, 5.0], [7300.0, 1.0], [7600.0, 1.0], [7500.0, 2.0], [7800.0, 3.0], [7700.0, 2.0], [7900.0, 1.0], [8100.0, 2.0], [8000.0, 1.0], [8600.0, 1.0], [8700.0, 2.0], [8300.0, 2.0], [9000.0, 1.0], [9800.0, 1.0], [9900.0, 1.0], [10600.0, 1.0], [10500.0, 1.0], [11400.0, 1.0], [12800.0, 1.0], [100.0, 523.0], [200.0, 332.0], [300.0, 206.0], [400.0, 152.0], [500.0, 245.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 12800.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2177.0, "series": [{"data": [[0.0, 1767.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1246.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 2177.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 1.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.891304347826088, "minX": 1.60225116E12, "maxY": 10.0, "series": [{"data": [[1.60225134E12, 10.0], [1.60225164E12, 10.0], [1.60225128E12, 10.0], [1.60225194E12, 9.891304347826088], [1.60225188E12, 10.0], [1.60225158E12, 10.0], [1.60225122E12, 10.0], [1.60225152E12, 10.0], [1.60225116E12, 9.970588235294118], [1.60225182E12, 10.0], [1.60225176E12, 10.0], [1.60225146E12, 10.0], [1.6022514E12, 10.0], [1.6022517E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60225194E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 1506.412082609533, "minX": 1.0, "maxY": 5616.0, "series": [{"data": [[8.0, 2139.0], [4.0, 4161.0], [2.0, 5616.0], [1.0, 3928.0], [9.0, 1596.5], [10.0, 1506.412082609533], [5.0, 2412.0], [6.0, 2005.0], [3.0, 5312.0], [7.0, 2109.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.991138508957821, 1509.4579079175458]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 232.55, "minX": 1.60225116E12, "maxY": 3087255.7, "series": [{"data": [[1.60225134E12, 2452971.0166666666], [1.60225164E12, 2728560.8833333333], [1.60225128E12, 2133779.066666667], [1.60225194E12, 2870347.05], [1.60225188E12, 2671201.7], [1.60225158E12, 3087255.7], [1.60225122E12, 3051845.0833333335], [1.60225152E12, 2853392.816666667], [1.60225116E12, 272138.9666666667], [1.60225182E12, 2535680.1333333333], [1.60225176E12, 2759994.0166666666], [1.60225146E12, 2804961.3], [1.6022514E12, 2314150.9], [1.6022517E12, 2361559.316666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60225134E12, 2212.366666666667], [1.60225164E12, 2682.766666666667], [1.60225128E12, 2621.866666666667], [1.60225194E12, 2882.75], [1.60225188E12, 2870.5666666666666], [1.60225158E12, 2790.266666666667], [1.60225122E12, 2838.383333333333], [1.60225152E12, 3114.3166666666666], [1.60225116E12, 232.55], [1.60225182E12, 2868.0666666666666], [1.60225176E12, 2060.4166666666665], [1.60225146E12, 3087.866666666667], [1.6022514E12, 1781.0333333333333], [1.6022517E12, 3106.5833333333335]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60225194E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 1318.294372294372, "minX": 1.60225116E12, "maxY": 2280.12547528517, "series": [{"data": [[1.60225134E12, 1786.282738095239], [1.60225164E12, 1467.0442260442255], [1.60225128E12, 1556.790697674418], [1.60225194E12, 1374.9130434782621], [1.60225188E12, 1457.3975903614457], [1.60225158E12, 1471.461165048544], [1.60225122E12, 1387.6330275229361], [1.60225152E12, 1336.6473214285697], [1.60225116E12, 1759.7647058823527], [1.60225182E12, 1430.961445783133], [1.60225176E12, 1875.5650793650793], [1.60225146E12, 1338.991051454138], [1.6022514E12, 2280.12547528517], [1.6022517E12, 1318.294372294372]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60225194E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 1316.545454545454, "minX": 1.60225116E12, "maxY": 2276.4904942965786, "series": [{"data": [[1.60225134E12, 1782.8303571428555], [1.60225164E12, 1464.6461916461906], [1.60225128E12, 1554.2868217054258], [1.60225194E12, 1372.4154589371983], [1.60225188E12, 1455.0265060240945], [1.60225158E12, 1468.4296116504865], [1.60225122E12, 1384.3646788990823], [1.60225152E12, 1334.3683035714275], [1.60225116E12, 1756.2058823529417], [1.60225182E12, 1428.7373493975904], [1.60225176E12, 1872.0095238095241], [1.60225146E12, 1336.7427293064868], [1.6022514E12, 2276.4904942965786], [1.6022517E12, 1316.545454545454]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60225194E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.015151515151515176, "minX": 1.60225116E12, "maxY": 3.4411764705882346, "series": [{"data": [[1.60225134E12, 0.026785714285714284], [1.60225164E12, 0.027027027027027035], [1.60225128E12, 0.025839793281653745], [1.60225194E12, 0.03381642512077299], [1.60225188E12, 0.024096385542168686], [1.60225158E12, 0.031553398058252455], [1.60225122E12, 0.027522935779816515], [1.60225152E12, 0.024553571428571425], [1.60225116E12, 3.4411764705882346], [1.60225182E12, 0.021686746987951824], [1.60225176E12, 0.041269841269841304], [1.60225146E12, 0.024608501118568236], [1.6022514E12, 0.03422053231939163], [1.6022517E12, 0.015151515151515176]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60225194E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 5.0, "minX": 1.60225116E12, "maxY": 12890.0, "series": [{"data": [[1.60225134E12, 9956.0], [1.60225164E12, 5550.0], [1.60225128E12, 8634.0], [1.60225194E12, 8374.0], [1.60225188E12, 7760.0], [1.60225158E12, 5847.0], [1.60225122E12, 9811.0], [1.60225152E12, 7849.0], [1.60225116E12, 5172.0], [1.60225182E12, 11401.0], [1.60225176E12, 8016.0], [1.60225146E12, 9004.0], [1.6022514E12, 12890.0], [1.6022517E12, 7741.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60225134E12, 19.032999919652937], [1.60225164E12, 35.76799815177918], [1.60225128E12, 14.0], [1.60225194E12, 13.0], [1.60225188E12, 7.743999900817871], [1.60225158E12, 15.867999606132507], [1.60225122E12, 37.99499843716622], [1.60225152E12, 15.0], [1.60225116E12, 92.0], [1.60225182E12, 13.487999801635741], [1.60225176E12, 15.531999773979187], [1.60225146E12, 9.045999786853791], [1.6022514E12, 8.75199987411499], [1.6022517E12, 17.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60225134E12, 19.336300032138823], [1.60225164E12, 42.11760011672973], [1.60225128E12, 14.0], [1.60225194E12, 13.217000079154968], [1.60225188E12, 8.118400039672853], [1.60225158E12, 17.1774000787735], [1.60225122E12, 39.326300041675566], [1.60225152E12, 15.0], [1.60225116E12, 92.0], [1.60225182E12, 14.118400039672853], [1.60225176E12, 16.0], [1.60225146E12, 9.850600085258485], [1.6022514E12, 9.227200050354003], [1.6022517E12, 17.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60225134E12, 19.20149995982647], [1.60225164E12, 39.64399907588958], [1.60225128E12, 14.0], [1.60225194E12, 13.0], [1.60225188E12, 7.951999950408935], [1.60225158E12, 16.693999803066255], [1.60225122E12, 39.15149994790554], [1.60225152E12, 15.0], [1.60225116E12, 92.0], [1.60225182E12, 13.90399990081787], [1.60225176E12, 16.0], [1.60225146E12, 9.492999893426894], [1.6022514E12, 9.015999937057494], [1.6022517E12, 17.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60225134E12, 16.0], [1.60225164E12, 17.0], [1.60225128E12, 11.0], [1.60225194E12, 8.0], [1.60225188E12, 5.0], [1.60225158E12, 11.0], [1.60225122E12, 14.0], [1.60225152E12, 10.0], [1.60225116E12, 92.0], [1.60225182E12, 11.0], [1.60225176E12, 11.0], [1.60225146E12, 5.0], [1.6022514E12, 8.0], [1.6022517E12, 12.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60225134E12, 1968.5], [1.60225164E12, 1391.0], [1.60225128E12, 1349.0], [1.60225194E12, 876.0], [1.60225188E12, 747.0], [1.60225158E12, 1017.0], [1.60225122E12, 725.0], [1.60225152E12, 763.0], [1.60225116E12, 1880.0], [1.60225182E12, 655.0], [1.60225176E12, 2048.0], [1.60225146E12, 662.5], [1.6022514E12, 2113.0], [1.6022517E12, 798.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60225194E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 112.0, "minX": 1.0, "maxY": 2520.0, "series": [{"data": [[2.0, 2520.0], [33.0, 141.0], [34.0, 154.0], [37.0, 153.0], [36.0, 163.0], [3.0, 2181.5], [4.0, 2075.5], [5.0, 2029.5], [6.0, 1575.0], [7.0, 1137.0], [8.0, 1177.5], [9.0, 823.0], [10.0, 843.0], [11.0, 688.0], [12.0, 570.0], [13.0, 347.0], [14.0, 474.0], [15.0, 322.0], [1.0, 2315.0], [16.0, 294.0], [17.0, 240.0], [18.0, 583.5], [19.0, 202.0], [20.0, 282.0], [21.0, 192.5], [22.0, 160.0], [23.0, 314.5], [24.0, 112.0], [26.0, 138.0], [29.0, 196.5]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[6.0, 217.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 37.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 111.5, "minX": 1.0, "maxY": 2513.0, "series": [{"data": [[2.0, 2513.0], [33.0, 141.0], [34.0, 152.0], [37.0, 151.0], [36.0, 162.0], [3.0, 2176.0], [4.0, 2073.5], [5.0, 2027.0], [6.0, 1573.0], [7.0, 1136.0], [8.0, 1177.5], [9.0, 820.0], [10.0, 842.0], [11.0, 685.0], [12.0, 567.5], [13.0, 346.0], [14.0, 467.5], [15.0, 321.0], [1.0, 2311.0], [16.0, 292.0], [17.0, 240.0], [18.0, 581.0], [19.0, 199.0], [20.0, 280.5], [21.0, 190.0], [22.0, 158.0], [23.0, 311.0], [24.0, 111.5], [26.0, 137.0], [29.0, 195.5]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[6.0, 217.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 37.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.7333333333333333, "minX": 1.60225116E12, "maxY": 7.7, "series": [{"data": [[1.60225134E12, 5.6], [1.60225164E12, 6.783333333333333], [1.60225128E12, 6.45], [1.60225194E12, 6.733333333333333], [1.60225188E12, 6.916666666666667], [1.60225158E12, 6.866666666666666], [1.60225122E12, 7.266666666666667], [1.60225152E12, 7.466666666666667], [1.60225116E12, 0.7333333333333333], [1.60225182E12, 6.916666666666667], [1.60225176E12, 5.25], [1.60225146E12, 7.45], [1.6022514E12, 4.383333333333334], [1.6022517E12, 7.7]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60225194E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60225116E12, "maxY": 7.7, "series": [{"data": [[1.60225134E12, 5.6], [1.60225164E12, 6.783333333333333], [1.60225128E12, 6.45], [1.60225194E12, 6.9], [1.60225188E12, 6.916666666666667], [1.60225158E12, 6.866666666666666], [1.60225122E12, 7.266666666666667], [1.60225152E12, 7.466666666666667], [1.60225116E12, 0.5666666666666667], [1.60225182E12, 6.916666666666667], [1.60225176E12, 5.25], [1.60225146E12, 7.433333333333334], [1.6022514E12, 4.383333333333334], [1.6022517E12, 7.7]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.60225146E12, 0.016666666666666666]], "isOverall": false, "label": "400", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60225194E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60225116E12, "maxY": 7.7, "series": [{"data": [[1.60225134E12, 5.6], [1.60225164E12, 6.783333333333333], [1.60225128E12, 6.45], [1.60225194E12, 6.9], [1.60225188E12, 6.916666666666667], [1.60225158E12, 6.866666666666666], [1.60225122E12, 7.266666666666667], [1.60225152E12, 7.466666666666667], [1.60225116E12, 0.5666666666666667], [1.60225182E12, 6.916666666666667], [1.60225176E12, 5.25], [1.60225146E12, 7.433333333333334], [1.6022514E12, 4.383333333333334], [1.6022517E12, 7.7]], "isOverall": false, "label": "HTTP Request-success", "isController": false}, {"data": [[1.60225146E12, 0.016666666666666666]], "isOverall": false, "label": "HTTP Request-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60225194E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60225116E12, "maxY": 7.7, "series": [{"data": [[1.60225134E12, 5.6], [1.60225164E12, 6.783333333333333], [1.60225128E12, 6.45], [1.60225194E12, 6.9], [1.60225188E12, 6.916666666666667], [1.60225158E12, 6.866666666666666], [1.60225122E12, 7.266666666666667], [1.60225152E12, 7.466666666666667], [1.60225116E12, 0.5666666666666667], [1.60225182E12, 6.916666666666667], [1.60225176E12, 5.25], [1.60225146E12, 7.433333333333334], [1.6022514E12, 4.383333333333334], [1.6022517E12, 7.7]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.60225146E12, 0.016666666666666666]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60225194E12, "title": "Total Transactions Per Second"}},
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

