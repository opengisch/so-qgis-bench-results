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
        data: {"result": {"minY": 7.0, "minX": 0.0, "maxY": 12456.0, "series": [{"data": [[0.0, 7.0], [0.1, 11.0], [0.2, 12.0], [0.3, 13.0], [0.4, 14.0], [0.5, 15.0], [0.6, 15.0], [0.7, 16.0], [0.8, 16.0], [0.9, 17.0], [1.0, 17.0], [1.1, 18.0], [1.2, 19.0], [1.3, 19.0], [1.4, 20.0], [1.5, 20.0], [1.6, 21.0], [1.7, 21.0], [1.8, 22.0], [1.9, 22.0], [2.0, 23.0], [2.1, 23.0], [2.2, 24.0], [2.3, 24.0], [2.4, 25.0], [2.5, 25.0], [2.6, 26.0], [2.7, 26.0], [2.8, 26.0], [2.9, 27.0], [3.0, 27.0], [3.1, 28.0], [3.2, 28.0], [3.3, 29.0], [3.4, 29.0], [3.5, 30.0], [3.6, 32.0], [3.7, 34.0], [3.8, 35.0], [3.9, 36.0], [4.0, 38.0], [4.1, 39.0], [4.2, 40.0], [4.3, 41.0], [4.4, 42.0], [4.5, 43.0], [4.6, 43.0], [4.7, 44.0], [4.8, 46.0], [4.9, 46.0], [5.0, 47.0], [5.1, 48.0], [5.2, 48.0], [5.3, 50.0], [5.4, 50.0], [5.5, 51.0], [5.6, 51.0], [5.7, 52.0], [5.8, 53.0], [5.9, 54.0], [6.0, 54.0], [6.1, 56.0], [6.2, 56.0], [6.3, 57.0], [6.4, 58.0], [6.5, 59.0], [6.6, 60.0], [6.7, 61.0], [6.8, 61.0], [6.9, 62.0], [7.0, 64.0], [7.1, 64.0], [7.2, 65.0], [7.3, 66.0], [7.4, 67.0], [7.5, 67.0], [7.6, 69.0], [7.7, 69.0], [7.8, 70.0], [7.9, 73.0], [8.0, 73.0], [8.1, 75.0], [8.2, 76.0], [8.3, 78.0], [8.4, 79.0], [8.5, 82.0], [8.6, 83.0], [8.7, 85.0], [8.8, 85.0], [8.9, 86.0], [9.0, 87.0], [9.1, 88.0], [9.2, 89.0], [9.3, 90.0], [9.4, 91.0], [9.5, 92.0], [9.6, 93.0], [9.7, 94.0], [9.8, 95.0], [9.9, 95.0], [10.0, 96.0], [10.1, 97.0], [10.2, 97.0], [10.3, 98.0], [10.4, 98.0], [10.5, 100.0], [10.6, 100.0], [10.7, 101.0], [10.8, 101.0], [10.9, 102.0], [11.0, 103.0], [11.1, 103.0], [11.2, 104.0], [11.3, 104.0], [11.4, 105.0], [11.5, 107.0], [11.6, 107.0], [11.7, 107.0], [11.8, 108.0], [11.9, 109.0], [12.0, 109.0], [12.1, 110.0], [12.2, 110.0], [12.3, 110.0], [12.4, 111.0], [12.5, 112.0], [12.6, 113.0], [12.7, 113.0], [12.8, 114.0], [12.9, 116.0], [13.0, 117.0], [13.1, 117.0], [13.2, 119.0], [13.3, 120.0], [13.4, 120.0], [13.5, 121.0], [13.6, 121.0], [13.7, 122.0], [13.8, 123.0], [13.9, 124.0], [14.0, 125.0], [14.1, 126.0], [14.2, 127.0], [14.3, 128.0], [14.4, 129.0], [14.5, 131.0], [14.6, 132.0], [14.7, 134.0], [14.8, 134.0], [14.9, 135.0], [15.0, 136.0], [15.1, 137.0], [15.2, 137.0], [15.3, 139.0], [15.4, 141.0], [15.5, 142.0], [15.6, 143.0], [15.7, 144.0], [15.8, 145.0], [15.9, 147.0], [16.0, 147.0], [16.1, 148.0], [16.2, 149.0], [16.3, 150.0], [16.4, 150.0], [16.5, 152.0], [16.6, 154.0], [16.7, 155.0], [16.8, 155.0], [16.9, 156.0], [17.0, 158.0], [17.1, 159.0], [17.2, 160.0], [17.3, 161.0], [17.4, 162.0], [17.5, 163.0], [17.6, 163.0], [17.7, 164.0], [17.8, 165.0], [17.9, 166.0], [18.0, 167.0], [18.1, 167.0], [18.2, 168.0], [18.3, 169.0], [18.4, 170.0], [18.5, 171.0], [18.6, 173.0], [18.7, 174.0], [18.8, 175.0], [18.9, 176.0], [19.0, 177.0], [19.1, 177.0], [19.2, 178.0], [19.3, 179.0], [19.4, 179.0], [19.5, 180.0], [19.6, 181.0], [19.7, 183.0], [19.8, 184.0], [19.9, 185.0], [20.0, 186.0], [20.1, 187.0], [20.2, 189.0], [20.3, 190.0], [20.4, 191.0], [20.5, 192.0], [20.6, 193.0], [20.7, 194.0], [20.8, 195.0], [20.9, 196.0], [21.0, 197.0], [21.1, 199.0], [21.2, 200.0], [21.3, 201.0], [21.4, 202.0], [21.5, 202.0], [21.6, 203.0], [21.7, 203.0], [21.8, 205.0], [21.9, 206.0], [22.0, 207.0], [22.1, 208.0], [22.2, 209.0], [22.3, 210.0], [22.4, 210.0], [22.5, 211.0], [22.6, 211.0], [22.7, 213.0], [22.8, 215.0], [22.9, 217.0], [23.0, 218.0], [23.1, 219.0], [23.2, 221.0], [23.3, 223.0], [23.4, 224.0], [23.5, 225.0], [23.6, 227.0], [23.7, 229.0], [23.8, 230.0], [23.9, 230.0], [24.0, 232.0], [24.1, 233.0], [24.2, 234.0], [24.3, 236.0], [24.4, 237.0], [24.5, 239.0], [24.6, 240.0], [24.7, 241.0], [24.8, 242.0], [24.9, 244.0], [25.0, 246.0], [25.1, 248.0], [25.2, 249.0], [25.3, 249.0], [25.4, 250.0], [25.5, 252.0], [25.6, 254.0], [25.7, 255.0], [25.8, 257.0], [25.9, 259.0], [26.0, 261.0], [26.1, 262.0], [26.2, 263.0], [26.3, 264.0], [26.4, 267.0], [26.5, 268.0], [26.6, 269.0], [26.7, 270.0], [26.8, 271.0], [26.9, 272.0], [27.0, 274.0], [27.1, 277.0], [27.2, 281.0], [27.3, 282.0], [27.4, 284.0], [27.5, 284.0], [27.6, 286.0], [27.7, 288.0], [27.8, 289.0], [27.9, 291.0], [28.0, 293.0], [28.1, 295.0], [28.2, 297.0], [28.3, 299.0], [28.4, 302.0], [28.5, 304.0], [28.6, 306.0], [28.7, 309.0], [28.8, 311.0], [28.9, 313.0], [29.0, 315.0], [29.1, 317.0], [29.2, 318.0], [29.3, 319.0], [29.4, 320.0], [29.5, 325.0], [29.6, 326.0], [29.7, 327.0], [29.8, 329.0], [29.9, 330.0], [30.0, 332.0], [30.1, 334.0], [30.2, 336.0], [30.3, 338.0], [30.4, 340.0], [30.5, 345.0], [30.6, 348.0], [30.7, 353.0], [30.8, 354.0], [30.9, 358.0], [31.0, 360.0], [31.1, 363.0], [31.2, 368.0], [31.3, 372.0], [31.4, 374.0], [31.5, 378.0], [31.6, 380.0], [31.7, 382.0], [31.8, 383.0], [31.9, 384.0], [32.0, 386.0], [32.1, 390.0], [32.2, 393.0], [32.3, 396.0], [32.4, 397.0], [32.5, 399.0], [32.6, 403.0], [32.7, 409.0], [32.8, 412.0], [32.9, 414.0], [33.0, 415.0], [33.1, 420.0], [33.2, 425.0], [33.3, 428.0], [33.4, 432.0], [33.5, 435.0], [33.6, 438.0], [33.7, 440.0], [33.8, 447.0], [33.9, 449.0], [34.0, 451.0], [34.1, 454.0], [34.2, 457.0], [34.3, 463.0], [34.4, 466.0], [34.5, 467.0], [34.6, 469.0], [34.7, 470.0], [34.8, 473.0], [34.9, 476.0], [35.0, 478.0], [35.1, 479.0], [35.2, 482.0], [35.3, 486.0], [35.4, 488.0], [35.5, 492.0], [35.6, 494.0], [35.7, 497.0], [35.8, 497.0], [35.9, 499.0], [36.0, 501.0], [36.1, 503.0], [36.2, 505.0], [36.3, 506.0], [36.4, 510.0], [36.5, 510.0], [36.6, 513.0], [36.7, 515.0], [36.8, 517.0], [36.9, 520.0], [37.0, 521.0], [37.1, 522.0], [37.2, 524.0], [37.3, 527.0], [37.4, 529.0], [37.5, 530.0], [37.6, 531.0], [37.7, 534.0], [37.8, 535.0], [37.9, 537.0], [38.0, 539.0], [38.1, 539.0], [38.2, 541.0], [38.3, 543.0], [38.4, 544.0], [38.5, 546.0], [38.6, 548.0], [38.7, 550.0], [38.8, 552.0], [38.9, 554.0], [39.0, 555.0], [39.1, 558.0], [39.2, 561.0], [39.3, 562.0], [39.4, 564.0], [39.5, 567.0], [39.6, 568.0], [39.7, 570.0], [39.8, 572.0], [39.9, 576.0], [40.0, 578.0], [40.1, 579.0], [40.2, 581.0], [40.3, 583.0], [40.4, 585.0], [40.5, 587.0], [40.6, 589.0], [40.7, 592.0], [40.8, 595.0], [40.9, 598.0], [41.0, 601.0], [41.1, 605.0], [41.2, 608.0], [41.3, 611.0], [41.4, 614.0], [41.5, 618.0], [41.6, 622.0], [41.7, 624.0], [41.8, 627.0], [41.9, 628.0], [42.0, 630.0], [42.1, 633.0], [42.2, 635.0], [42.3, 637.0], [42.4, 639.0], [42.5, 642.0], [42.6, 644.0], [42.7, 648.0], [42.8, 650.0], [42.9, 653.0], [43.0, 654.0], [43.1, 656.0], [43.2, 660.0], [43.3, 662.0], [43.4, 664.0], [43.5, 667.0], [43.6, 670.0], [43.7, 673.0], [43.8, 675.0], [43.9, 678.0], [44.0, 681.0], [44.1, 686.0], [44.2, 690.0], [44.3, 692.0], [44.4, 693.0], [44.5, 696.0], [44.6, 700.0], [44.7, 703.0], [44.8, 708.0], [44.9, 709.0], [45.0, 715.0], [45.1, 718.0], [45.2, 720.0], [45.3, 724.0], [45.4, 728.0], [45.5, 732.0], [45.6, 735.0], [45.7, 738.0], [45.8, 743.0], [45.9, 746.0], [46.0, 748.0], [46.1, 753.0], [46.2, 757.0], [46.3, 760.0], [46.4, 764.0], [46.5, 769.0], [46.6, 774.0], [46.7, 781.0], [46.8, 784.0], [46.9, 794.0], [47.0, 798.0], [47.1, 803.0], [47.2, 807.0], [47.3, 811.0], [47.4, 817.0], [47.5, 820.0], [47.6, 824.0], [47.7, 828.0], [47.8, 833.0], [47.9, 840.0], [48.0, 842.0], [48.1, 845.0], [48.2, 846.0], [48.3, 848.0], [48.4, 853.0], [48.5, 859.0], [48.6, 863.0], [48.7, 866.0], [48.8, 870.0], [48.9, 872.0], [49.0, 876.0], [49.1, 878.0], [49.2, 881.0], [49.3, 887.0], [49.4, 895.0], [49.5, 904.0], [49.6, 906.0], [49.7, 911.0], [49.8, 913.0], [49.9, 919.0], [50.0, 923.0], [50.1, 929.0], [50.2, 932.0], [50.3, 936.0], [50.4, 939.0], [50.5, 945.0], [50.6, 951.0], [50.7, 955.0], [50.8, 959.0], [50.9, 968.0], [51.0, 971.0], [51.1, 977.0], [51.2, 982.0], [51.3, 987.0], [51.4, 990.0], [51.5, 995.0], [51.6, 1004.0], [51.7, 1010.0], [51.8, 1015.0], [51.9, 1020.0], [52.0, 1025.0], [52.1, 1033.0], [52.2, 1041.0], [52.3, 1045.0], [52.4, 1048.0], [52.5, 1057.0], [52.6, 1060.0], [52.7, 1066.0], [52.8, 1070.0], [52.9, 1077.0], [53.0, 1083.0], [53.1, 1086.0], [53.2, 1095.0], [53.3, 1103.0], [53.4, 1110.0], [53.5, 1116.0], [53.6, 1121.0], [53.7, 1127.0], [53.8, 1131.0], [53.9, 1134.0], [54.0, 1144.0], [54.1, 1146.0], [54.2, 1154.0], [54.3, 1156.0], [54.4, 1159.0], [54.5, 1168.0], [54.6, 1170.0], [54.7, 1177.0], [54.8, 1182.0], [54.9, 1193.0], [55.0, 1202.0], [55.1, 1203.0], [55.2, 1216.0], [55.3, 1221.0], [55.4, 1224.0], [55.5, 1234.0], [55.6, 1238.0], [55.7, 1243.0], [55.8, 1251.0], [55.9, 1257.0], [56.0, 1259.0], [56.1, 1261.0], [56.2, 1267.0], [56.3, 1270.0], [56.4, 1277.0], [56.5, 1279.0], [56.6, 1288.0], [56.7, 1293.0], [56.8, 1299.0], [56.9, 1304.0], [57.0, 1315.0], [57.1, 1319.0], [57.2, 1326.0], [57.3, 1330.0], [57.4, 1334.0], [57.5, 1339.0], [57.6, 1344.0], [57.7, 1347.0], [57.8, 1351.0], [57.9, 1360.0], [58.0, 1363.0], [58.1, 1369.0], [58.2, 1374.0], [58.3, 1377.0], [58.4, 1390.0], [58.5, 1392.0], [58.6, 1398.0], [58.7, 1401.0], [58.8, 1412.0], [58.9, 1418.0], [59.0, 1426.0], [59.1, 1431.0], [59.2, 1445.0], [59.3, 1454.0], [59.4, 1459.0], [59.5, 1464.0], [59.6, 1470.0], [59.7, 1475.0], [59.8, 1485.0], [59.9, 1488.0], [60.0, 1496.0], [60.1, 1500.0], [60.2, 1503.0], [60.3, 1510.0], [60.4, 1514.0], [60.5, 1522.0], [60.6, 1527.0], [60.7, 1535.0], [60.8, 1543.0], [60.9, 1549.0], [61.0, 1552.0], [61.1, 1558.0], [61.2, 1561.0], [61.3, 1572.0], [61.4, 1578.0], [61.5, 1584.0], [61.6, 1590.0], [61.7, 1599.0], [61.8, 1605.0], [61.9, 1610.0], [62.0, 1622.0], [62.1, 1627.0], [62.2, 1633.0], [62.3, 1639.0], [62.4, 1646.0], [62.5, 1652.0], [62.6, 1663.0], [62.7, 1670.0], [62.8, 1680.0], [62.9, 1687.0], [63.0, 1691.0], [63.1, 1697.0], [63.2, 1702.0], [63.3, 1710.0], [63.4, 1715.0], [63.5, 1720.0], [63.6, 1738.0], [63.7, 1748.0], [63.8, 1751.0], [63.9, 1760.0], [64.0, 1765.0], [64.1, 1772.0], [64.2, 1776.0], [64.3, 1787.0], [64.4, 1791.0], [64.5, 1799.0], [64.6, 1811.0], [64.7, 1813.0], [64.8, 1819.0], [64.9, 1826.0], [65.0, 1832.0], [65.1, 1838.0], [65.2, 1846.0], [65.3, 1853.0], [65.4, 1861.0], [65.5, 1872.0], [65.6, 1878.0], [65.7, 1882.0], [65.8, 1886.0], [65.9, 1891.0], [66.0, 1894.0], [66.1, 1898.0], [66.2, 1902.0], [66.3, 1907.0], [66.4, 1911.0], [66.5, 1913.0], [66.6, 1915.0], [66.7, 1919.0], [66.8, 1923.0], [66.9, 1926.0], [67.0, 1929.0], [67.1, 1933.0], [67.2, 1937.0], [67.3, 1939.0], [67.4, 1945.0], [67.5, 1947.0], [67.6, 1948.0], [67.7, 1949.0], [67.8, 1950.0], [67.9, 1953.0], [68.0, 1956.0], [68.1, 1961.0], [68.2, 1964.0], [68.3, 1968.0], [68.4, 1973.0], [68.5, 1976.0], [68.6, 1979.0], [68.7, 1981.0], [68.8, 1984.0], [68.9, 1987.0], [69.0, 1991.0], [69.1, 1993.0], [69.2, 1996.0], [69.3, 1999.0], [69.4, 2000.0], [69.5, 2004.0], [69.6, 2008.0], [69.7, 2010.0], [69.8, 2013.0], [69.9, 2013.0], [70.0, 2016.0], [70.1, 2021.0], [70.2, 2024.0], [70.3, 2025.0], [70.4, 2029.0], [70.5, 2032.0], [70.6, 2035.0], [70.7, 2038.0], [70.8, 2039.0], [70.9, 2041.0], [71.0, 2044.0], [71.1, 2047.0], [71.2, 2049.0], [71.3, 2053.0], [71.4, 2057.0], [71.5, 2059.0], [71.6, 2062.0], [71.7, 2065.0], [71.8, 2068.0], [71.9, 2071.0], [72.0, 2078.0], [72.1, 2081.0], [72.2, 2086.0], [72.3, 2090.0], [72.4, 2090.0], [72.5, 2094.0], [72.6, 2099.0], [72.7, 2102.0], [72.8, 2107.0], [72.9, 2112.0], [73.0, 2114.0], [73.1, 2118.0], [73.2, 2120.0], [73.3, 2122.0], [73.4, 2125.0], [73.5, 2131.0], [73.6, 2133.0], [73.7, 2137.0], [73.8, 2141.0], [73.9, 2145.0], [74.0, 2151.0], [74.1, 2154.0], [74.2, 2158.0], [74.3, 2166.0], [74.4, 2170.0], [74.5, 2176.0], [74.6, 2180.0], [74.7, 2189.0], [74.8, 2197.0], [74.9, 2202.0], [75.0, 2208.0], [75.1, 2216.0], [75.2, 2227.0], [75.3, 2231.0], [75.4, 2243.0], [75.5, 2248.0], [75.6, 2253.0], [75.7, 2262.0], [75.8, 2268.0], [75.9, 2279.0], [76.0, 2290.0], [76.1, 2294.0], [76.2, 2299.0], [76.3, 2306.0], [76.4, 2313.0], [76.5, 2321.0], [76.6, 2324.0], [76.7, 2328.0], [76.8, 2336.0], [76.9, 2343.0], [77.0, 2350.0], [77.1, 2360.0], [77.2, 2367.0], [77.3, 2375.0], [77.4, 2383.0], [77.5, 2386.0], [77.6, 2392.0], [77.7, 2395.0], [77.8, 2408.0], [77.9, 2412.0], [78.0, 2419.0], [78.1, 2426.0], [78.2, 2428.0], [78.3, 2431.0], [78.4, 2435.0], [78.5, 2439.0], [78.6, 2443.0], [78.7, 2447.0], [78.8, 2451.0], [78.9, 2455.0], [79.0, 2462.0], [79.1, 2465.0], [79.2, 2470.0], [79.3, 2476.0], [79.4, 2483.0], [79.5, 2489.0], [79.6, 2492.0], [79.7, 2496.0], [79.8, 2501.0], [79.9, 2504.0], [80.0, 2508.0], [80.1, 2513.0], [80.2, 2514.0], [80.3, 2518.0], [80.4, 2520.0], [80.5, 2525.0], [80.6, 2531.0], [80.7, 2536.0], [80.8, 2539.0], [80.9, 2542.0], [81.0, 2544.0], [81.1, 2551.0], [81.2, 2562.0], [81.3, 2569.0], [81.4, 2573.0], [81.5, 2578.0], [81.6, 2586.0], [81.7, 2594.0], [81.8, 2601.0], [81.9, 2604.0], [82.0, 2611.0], [82.1, 2617.0], [82.2, 2621.0], [82.3, 2626.0], [82.4, 2629.0], [82.5, 2634.0], [82.6, 2635.0], [82.7, 2646.0], [82.8, 2649.0], [82.9, 2654.0], [83.0, 2664.0], [83.1, 2670.0], [83.2, 2680.0], [83.3, 2684.0], [83.4, 2687.0], [83.5, 2690.0], [83.6, 2697.0], [83.7, 2704.0], [83.8, 2710.0], [83.9, 2718.0], [84.0, 2725.0], [84.1, 2734.0], [84.2, 2742.0], [84.3, 2747.0], [84.4, 2753.0], [84.5, 2757.0], [84.6, 2760.0], [84.7, 2766.0], [84.8, 2778.0], [84.9, 2787.0], [85.0, 2792.0], [85.1, 2797.0], [85.2, 2804.0], [85.3, 2815.0], [85.4, 2817.0], [85.5, 2840.0], [85.6, 2850.0], [85.7, 2859.0], [85.8, 2865.0], [85.9, 2875.0], [86.0, 2883.0], [86.1, 2898.0], [86.2, 2903.0], [86.3, 2919.0], [86.4, 2928.0], [86.5, 2938.0], [86.6, 2947.0], [86.7, 2952.0], [86.8, 2960.0], [86.9, 2967.0], [87.0, 2973.0], [87.1, 2989.0], [87.2, 2997.0], [87.3, 3007.0], [87.4, 3029.0], [87.5, 3036.0], [87.6, 3048.0], [87.7, 3058.0], [87.8, 3068.0], [87.9, 3085.0], [88.0, 3103.0], [88.1, 3121.0], [88.2, 3140.0], [88.3, 3145.0], [88.4, 3157.0], [88.5, 3169.0], [88.6, 3174.0], [88.7, 3182.0], [88.8, 3196.0], [88.9, 3210.0], [89.0, 3224.0], [89.1, 3232.0], [89.2, 3247.0], [89.3, 3259.0], [89.4, 3270.0], [89.5, 3276.0], [89.6, 3299.0], [89.7, 3311.0], [89.8, 3338.0], [89.9, 3355.0], [90.0, 3375.0], [90.1, 3382.0], [90.2, 3406.0], [90.3, 3419.0], [90.4, 3432.0], [90.5, 3448.0], [90.6, 3464.0], [90.7, 3475.0], [90.8, 3496.0], [90.9, 3508.0], [91.0, 3519.0], [91.1, 3531.0], [91.2, 3542.0], [91.3, 3555.0], [91.4, 3567.0], [91.5, 3587.0], [91.6, 3606.0], [91.7, 3637.0], [91.8, 3643.0], [91.9, 3655.0], [92.0, 3670.0], [92.1, 3679.0], [92.2, 3691.0], [92.3, 3698.0], [92.4, 3705.0], [92.5, 3717.0], [92.6, 3748.0], [92.7, 3755.0], [92.8, 3760.0], [92.9, 3775.0], [93.0, 3780.0], [93.1, 3789.0], [93.2, 3800.0], [93.3, 3816.0], [93.4, 3818.0], [93.5, 3831.0], [93.6, 3840.0], [93.7, 3861.0], [93.8, 3870.0], [93.9, 3879.0], [94.0, 3887.0], [94.1, 3897.0], [94.2, 3902.0], [94.3, 3916.0], [94.4, 3920.0], [94.5, 3930.0], [94.6, 3939.0], [94.7, 3959.0], [94.8, 3978.0], [94.9, 3995.0], [95.0, 4001.0], [95.1, 4014.0], [95.2, 4027.0], [95.3, 4044.0], [95.4, 4067.0], [95.5, 4090.0], [95.6, 4108.0], [95.7, 4121.0], [95.8, 4142.0], [95.9, 4158.0], [96.0, 4184.0], [96.1, 4200.0], [96.2, 4236.0], [96.3, 4277.0], [96.4, 4306.0], [96.5, 4327.0], [96.6, 4340.0], [96.7, 4405.0], [96.8, 4436.0], [96.9, 4490.0], [97.0, 4534.0], [97.1, 4615.0], [97.2, 4632.0], [97.3, 4702.0], [97.4, 4741.0], [97.5, 4811.0], [97.6, 4869.0], [97.7, 4910.0], [97.8, 4964.0], [97.9, 5026.0], [98.0, 5075.0], [98.1, 5171.0], [98.2, 5244.0], [98.3, 5313.0], [98.4, 5420.0], [98.5, 5571.0], [98.6, 5635.0], [98.7, 5753.0], [98.8, 5811.0], [98.9, 5876.0], [99.0, 5979.0], [99.1, 6148.0], [99.2, 6546.0], [99.3, 6617.0], [99.4, 6917.0], [99.5, 7049.0], [99.6, 7248.0], [99.7, 7866.0], [99.8, 8925.0], [99.9, 10738.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 556.0, "series": [{"data": [[0.0, 543.0], [600.0, 187.0], [700.0, 128.0], [800.0, 125.0], [900.0, 108.0], [1000.0, 91.0], [1100.0, 88.0], [1200.0, 95.0], [1300.0, 96.0], [1400.0, 75.0], [1500.0, 84.0], [1600.0, 74.0], [1700.0, 71.0], [1800.0, 84.0], [1900.0, 166.0], [2000.0, 172.0], [2100.0, 116.0], [2300.0, 78.0], [2200.0, 69.0], [2400.0, 107.0], [2500.0, 103.0], [2600.0, 97.0], [2700.0, 78.0], [2800.0, 53.0], [2900.0, 56.0], [3000.0, 39.0], [3100.0, 44.0], [3200.0, 41.0], [3300.0, 29.0], [3400.0, 34.0], [3500.0, 40.0], [3700.0, 45.0], [3600.0, 38.0], [3800.0, 50.0], [3900.0, 41.0], [4000.0, 32.0], [4300.0, 15.0], [4100.0, 27.0], [4200.0, 15.0], [4400.0, 14.0], [4500.0, 8.0], [4600.0, 10.0], [4700.0, 10.0], [4800.0, 9.0], [4900.0, 11.0], [5000.0, 8.0], [5100.0, 6.0], [5200.0, 8.0], [5300.0, 5.0], [5500.0, 5.0], [5400.0, 3.0], [5600.0, 5.0], [5800.0, 8.0], [5700.0, 8.0], [5900.0, 5.0], [6100.0, 2.0], [6000.0, 2.0], [6200.0, 1.0], [6300.0, 1.0], [6500.0, 6.0], [6400.0, 1.0], [6600.0, 2.0], [6700.0, 1.0], [6800.0, 2.0], [6900.0, 3.0], [7000.0, 5.0], [7100.0, 2.0], [7300.0, 2.0], [7400.0, 2.0], [7200.0, 2.0], [7800.0, 2.0], [8000.0, 1.0], [8300.0, 1.0], [8400.0, 1.0], [9000.0, 1.0], [8900.0, 1.0], [9100.0, 2.0], [10300.0, 1.0], [10700.0, 1.0], [11000.0, 1.0], [10800.0, 1.0], [10900.0, 1.0], [12100.0, 1.0], [12400.0, 1.0], [100.0, 556.0], [200.0, 370.0], [300.0, 218.0], [400.0, 178.0], [500.0, 261.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 12400.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 1254.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2070.0, "series": [{"data": [[0.0, 1866.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1254.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 2070.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.895104895104895, "minX": 1.60506102E12, "maxY": 10.0, "series": [{"data": [[1.6050615E12, 10.0], [1.60506114E12, 10.0], [1.60506144E12, 10.0], [1.60506126E12, 10.0], [1.60506156E12, 10.0], [1.6050612E12, 10.0], [1.60506102E12, 9.974789915966388], [1.60506132E12, 10.0], [1.60506162E12, 10.0], [1.60506108E12, 10.0], [1.60506174E12, 9.895104895104895], [1.60506138E12, 10.0], [1.60506168E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60506174E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 1418.2138996139015, "minX": 1.0, "maxY": 5115.0, "series": [{"data": [[8.0, 3519.0], [4.0, 2725.0], [2.0, 2517.0], [1.0, 3406.0], [9.0, 2683.0], [10.0, 1418.2138996139015], [5.0, 5115.0], [6.0, 2190.0], [3.0, 2923.0], [7.0, 1494.5]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.990751445086751, 1420.8892100192704]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 794.3333333333334, "minX": 1.60506102E12, "maxY": 3480488.1, "series": [{"data": [[1.6050615E12, 2405389.216666667], [1.60506114E12, 2544025.2666666666], [1.60506144E12, 3480488.1], [1.60506126E12, 2689285.0166666666], [1.60506156E12, 2897301.25], [1.6050612E12, 2709091.4833333334], [1.60506102E12, 997598.15], [1.60506132E12, 2888189.65], [1.60506162E12, 2781637.966666667], [1.60506108E12, 2857888.1], [1.60506174E12, 2990526.033333333], [1.60506138E12, 2941648.1166666667], [1.60506168E12, 2730053.966666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6050615E12, 2995.8], [1.60506114E12, 3282.633333333333], [1.60506144E12, 3305.016666666667], [1.60506126E12, 2807.8166666666666], [1.60506156E12, 2441.8333333333335], [1.6050612E12, 1770.9166666666667], [1.60506102E12, 794.3333333333334], [1.60506132E12, 2957.616666666667], [1.60506162E12, 3002.15], [1.60506108E12, 2796.0], [1.60506174E12, 2986.4], [1.60506138E12, 3063.7], [1.60506168E12, 2939.55]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60506174E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 1194.134122287969, "minX": 1.60506102E12, "maxY": 2181.4756554307123, "series": [{"data": [[1.6050615E12, 1347.7959183673472], [1.60506114E12, 1213.951318458418], [1.60506144E12, 1194.134122287969], [1.60506126E12, 1494.433497536947], [1.60506156E12, 1618.8230563002676], [1.6050612E12, 2181.4756554307123], [1.60506102E12, 1845.663865546218], [1.60506132E12, 1408.1358313817336], [1.60506162E12, 1369.5963302752298], [1.60506108E12, 1403.0798122065737], [1.60506174E12, 1310.8951048951053], [1.60506138E12, 1362.0068027210887], [1.60506168E12, 1421.9647058823534]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60506174E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 1191.3984220907287, "minX": 1.60506102E12, "maxY": 2176.9700374531853, "series": [{"data": [[1.6050615E12, 1345.4081632653042], [1.60506114E12, 1211.6409736308328], [1.60506144E12, 1191.3984220907287], [1.60506126E12, 1491.1674876847296], [1.60506156E12, 1615.1554959785522], [1.6050612E12, 2176.9700374531853], [1.60506102E12, 1840.9747899159665], [1.60506132E12, 1405.1920374707272], [1.60506162E12, 1366.9518348623867], [1.60506108E12, 1399.7018779342718], [1.60506174E12, 1308.009324009324], [1.60506138E12, 1359.1995464852612], [1.60506168E12, 1419.3647058823542]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60506174E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.018648018648018648, "minX": 1.60506102E12, "maxY": 0.7058823529411771, "series": [{"data": [[1.6050615E12, 0.022675736961451247], [1.60506114E12, 0.02231237322515211], [1.60506144E12, 0.029585798816568042], [1.60506126E12, 0.03201970443349755], [1.60506156E12, 0.04557640750670241], [1.6050612E12, 0.04494382022471909], [1.60506102E12, 0.7058823529411771], [1.60506132E12, 0.03981264637002343], [1.60506162E12, 0.032110091743119275], [1.60506108E12, 0.03286384976525823], [1.60506174E12, 0.018648018648018648], [1.60506138E12, 0.027210884353741506], [1.60506168E12, 0.018823529411764704]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60506174E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 7.0, "minX": 1.60506102E12, "maxY": 12456.0, "series": [{"data": [[1.6050615E12, 10738.0], [1.60506114E12, 7885.0], [1.60506144E12, 6780.0], [1.60506126E12, 12100.0], [1.60506156E12, 11050.0], [1.6050612E12, 6586.0], [1.60506102E12, 12456.0], [1.60506132E12, 9170.0], [1.60506162E12, 7372.0], [1.60506108E12, 5876.0], [1.60506174E12, 8011.0], [1.60506138E12, 5914.0], [1.60506168E12, 10987.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6050615E12, 15.0], [1.60506114E12, 21.0], [1.60506144E12, 24.715999636650086], [1.60506126E12, 14.662999902963637], [1.60506156E12, 12.731999821662903], [1.6050612E12, 18.235999808311462], [1.60506102E12, 18.07999997138977], [1.60506132E12, 15.407999591827393], [1.60506162E12, 19.798999687433245], [1.60506108E12, 37.33099826931954], [1.60506174E12, 15.0], [1.60506138E12, 13.97799989461899], [1.60506168E12, 14.833999898433685]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6050615E12, 15.0], [1.60506114E12, 21.0], [1.60506144E12, 26.029200048446654], [1.60506126E12, 15.117200155258178], [1.60506156E12, 13.40520007133484], [1.6050612E12, 18.959600076675414], [1.60506102E12, 18.188000011444093], [1.60506132E12, 16.0], [1.60506162E12, 20.978900125026705], [1.60506108E12, 40.22730004072189], [1.60506174E12, 15.0], [1.60506138E12, 14.75160008430481], [1.60506168E12, 15.217400040626526]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6050615E12, 15.0], [1.60506114E12, 21.0], [1.60506144E12, 25.477999818325042], [1.60506126E12, 14.866499951481819], [1.60506156E12, 13.10599991083145], [1.6050612E12, 18.63799990415573], [1.60506102E12, 18.139999985694885], [1.60506132E12, 16.0], [1.60506162E12, 20.45449984371662], [1.60506108E12, 40.056499949097635], [1.60506174E12, 15.0], [1.60506138E12, 14.397999894618987], [1.60506168E12, 15.046999949216843]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.6050615E12, 12.0], [1.60506114E12, 8.0], [1.60506144E12, 17.0], [1.60506126E12, 11.0], [1.60506156E12, 10.0], [1.6050612E12, 16.0], [1.60506102E12, 18.0], [1.60506132E12, 7.0], [1.60506162E12, 16.0], [1.60506108E12, 12.0], [1.60506174E12, 14.0], [1.60506138E12, 11.0], [1.60506168E12, 11.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6050615E12, 1060.0], [1.60506114E12, 748.0], [1.60506144E12, 599.0], [1.60506126E12, 871.5], [1.60506156E12, 1057.0], [1.6050612E12, 2154.0], [1.60506102E12, 1146.0], [1.60506132E12, 709.0], [1.60506162E12, 701.0], [1.60506108E12, 1285.5], [1.60506174E12, 871.0], [1.60506138E12, 906.0], [1.60506168E12, 718.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60506174E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 138.0, "minX": 1.0, "maxY": 2858.5, "series": [{"data": [[2.0, 2500.0], [32.0, 156.5], [34.0, 152.0], [3.0, 1914.0], [4.0, 2093.5], [5.0, 1963.5], [6.0, 2002.0], [7.0, 1182.0], [8.0, 1059.5], [9.0, 767.0], [10.0, 658.5], [11.0, 555.0], [12.0, 387.5], [13.0, 397.5], [14.0, 434.0], [15.0, 343.5], [1.0, 2858.5], [16.0, 297.0], [17.0, 223.5], [18.0, 217.5], [19.0, 269.0], [20.0, 242.5], [22.0, 195.5], [23.0, 138.0], [24.0, 262.5], [27.0, 226.5], [28.0, 173.5], [29.0, 163.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 34.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 135.0, "minX": 1.0, "maxY": 2853.0, "series": [{"data": [[2.0, 2498.0], [32.0, 154.0], [34.0, 150.5], [3.0, 1907.0], [4.0, 2090.5], [5.0, 1958.0], [6.0, 1998.5], [7.0, 1181.0], [8.0, 1058.0], [9.0, 765.0], [10.0, 656.0], [11.0, 554.0], [12.0, 386.5], [13.0, 396.5], [14.0, 432.5], [15.0, 341.5], [1.0, 2853.0], [16.0, 295.5], [17.0, 222.0], [18.0, 214.5], [19.0, 266.5], [20.0, 241.5], [22.0, 193.0], [23.0, 135.0], [24.0, 254.5], [27.0, 224.5], [28.0, 172.0], [29.0, 161.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 34.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 2.15, "minX": 1.60506102E12, "maxY": 8.45, "series": [{"data": [[1.6050615E12, 7.35], [1.60506114E12, 8.216666666666667], [1.60506144E12, 8.45], [1.60506126E12, 6.766666666666667], [1.60506156E12, 6.2], [1.6050612E12, 4.45], [1.60506102E12, 2.15], [1.60506132E12, 7.116666666666666], [1.60506162E12, 7.283333333333333], [1.60506108E12, 7.1], [1.60506174E12, 6.983333333333333], [1.60506138E12, 7.35], [1.60506168E12, 7.083333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60506174E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1.9833333333333334, "minX": 1.60506102E12, "maxY": 8.45, "series": [{"data": [[1.6050615E12, 7.35], [1.60506114E12, 8.216666666666667], [1.60506144E12, 8.45], [1.60506126E12, 6.766666666666667], [1.60506156E12, 6.216666666666667], [1.6050612E12, 4.45], [1.60506102E12, 1.9833333333333334], [1.60506132E12, 7.116666666666666], [1.60506162E12, 7.266666666666667], [1.60506108E12, 7.1], [1.60506174E12, 7.15], [1.60506138E12, 7.35], [1.60506168E12, 7.083333333333333]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60506174E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.9833333333333334, "minX": 1.60506102E12, "maxY": 8.45, "series": [{"data": [[1.6050615E12, 7.35], [1.60506114E12, 8.216666666666667], [1.60506144E12, 8.45], [1.60506126E12, 6.766666666666667], [1.60506156E12, 6.216666666666667], [1.6050612E12, 4.45], [1.60506102E12, 1.9833333333333334], [1.60506132E12, 7.116666666666666], [1.60506162E12, 7.266666666666667], [1.60506108E12, 7.1], [1.60506174E12, 7.15], [1.60506138E12, 7.35], [1.60506168E12, 7.083333333333333]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60506174E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.9833333333333334, "minX": 1.60506102E12, "maxY": 8.45, "series": [{"data": [[1.6050615E12, 7.35], [1.60506114E12, 8.216666666666667], [1.60506144E12, 8.45], [1.60506126E12, 6.766666666666667], [1.60506156E12, 6.216666666666667], [1.6050612E12, 4.45], [1.60506102E12, 1.9833333333333334], [1.60506132E12, 7.116666666666666], [1.60506162E12, 7.266666666666667], [1.60506108E12, 7.1], [1.60506174E12, 7.15], [1.60506138E12, 7.35], [1.60506168E12, 7.083333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60506174E12, "title": "Total Transactions Per Second"}},
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

