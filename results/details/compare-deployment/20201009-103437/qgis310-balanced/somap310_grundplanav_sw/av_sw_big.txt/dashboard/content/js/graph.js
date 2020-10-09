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
        data: {"result": {"minY": 573.0, "minX": 0.0, "maxY": 11536.0, "series": [{"data": [[0.0, 573.0], [0.1, 669.0], [0.2, 716.0], [0.3, 722.0], [0.4, 725.0], [0.5, 732.0], [0.6, 738.0], [0.7, 743.0], [0.8, 748.0], [0.9, 752.0], [1.0, 754.0], [1.1, 758.0], [1.2, 759.0], [1.3, 760.0], [1.4, 761.0], [1.5, 764.0], [1.6, 766.0], [1.7, 768.0], [1.8, 771.0], [1.9, 774.0], [2.0, 775.0], [2.1, 777.0], [2.2, 778.0], [2.3, 780.0], [2.4, 782.0], [2.5, 784.0], [2.6, 784.0], [2.7, 785.0], [2.8, 786.0], [2.9, 788.0], [3.0, 789.0], [3.1, 791.0], [3.2, 794.0], [3.3, 796.0], [3.4, 798.0], [3.5, 799.0], [3.6, 801.0], [3.7, 803.0], [3.8, 804.0], [3.9, 806.0], [4.0, 808.0], [4.1, 809.0], [4.2, 811.0], [4.3, 812.0], [4.4, 814.0], [4.5, 816.0], [4.6, 818.0], [4.7, 820.0], [4.8, 821.0], [4.9, 822.0], [5.0, 824.0], [5.1, 825.0], [5.2, 828.0], [5.3, 829.0], [5.4, 832.0], [5.5, 834.0], [5.6, 835.0], [5.7, 836.0], [5.8, 837.0], [5.9, 838.0], [6.0, 840.0], [6.1, 841.0], [6.2, 842.0], [6.3, 846.0], [6.4, 848.0], [6.5, 850.0], [6.6, 851.0], [6.7, 852.0], [6.8, 853.0], [6.9, 855.0], [7.0, 857.0], [7.1, 858.0], [7.2, 861.0], [7.3, 863.0], [7.4, 865.0], [7.5, 870.0], [7.6, 871.0], [7.7, 873.0], [7.8, 877.0], [7.9, 878.0], [8.0, 880.0], [8.1, 882.0], [8.2, 882.0], [8.3, 884.0], [8.4, 887.0], [8.5, 888.0], [8.6, 891.0], [8.7, 893.0], [8.8, 897.0], [8.9, 899.0], [9.0, 902.0], [9.1, 903.0], [9.2, 905.0], [9.3, 908.0], [9.4, 910.0], [9.5, 913.0], [9.6, 914.0], [9.7, 917.0], [9.8, 920.0], [9.9, 922.0], [10.0, 925.0], [10.1, 929.0], [10.2, 930.0], [10.3, 935.0], [10.4, 937.0], [10.5, 942.0], [10.6, 943.0], [10.7, 948.0], [10.8, 950.0], [10.9, 957.0], [11.0, 965.0], [11.1, 967.0], [11.2, 968.0], [11.3, 970.0], [11.4, 973.0], [11.5, 978.0], [11.6, 981.0], [11.7, 983.0], [11.8, 988.0], [11.9, 990.0], [12.0, 994.0], [12.1, 998.0], [12.2, 1003.0], [12.3, 1005.0], [12.4, 1009.0], [12.5, 1017.0], [12.6, 1020.0], [12.7, 1025.0], [12.8, 1025.0], [12.9, 1036.0], [13.0, 1039.0], [13.1, 1046.0], [13.2, 1052.0], [13.3, 1055.0], [13.4, 1063.0], [13.5, 1072.0], [13.6, 1076.0], [13.7, 1080.0], [13.8, 1083.0], [13.9, 1084.0], [14.0, 1087.0], [14.1, 1092.0], [14.2, 1097.0], [14.3, 1100.0], [14.4, 1104.0], [14.5, 1106.0], [14.6, 1110.0], [14.7, 1113.0], [14.8, 1116.0], [14.9, 1118.0], [15.0, 1120.0], [15.1, 1123.0], [15.2, 1129.0], [15.3, 1133.0], [15.4, 1135.0], [15.5, 1137.0], [15.6, 1138.0], [15.7, 1140.0], [15.8, 1143.0], [15.9, 1148.0], [16.0, 1152.0], [16.1, 1155.0], [16.2, 1157.0], [16.3, 1162.0], [16.4, 1167.0], [16.5, 1169.0], [16.6, 1172.0], [16.7, 1174.0], [16.8, 1179.0], [16.9, 1181.0], [17.0, 1184.0], [17.1, 1188.0], [17.2, 1189.0], [17.3, 1193.0], [17.4, 1196.0], [17.5, 1198.0], [17.6, 1201.0], [17.7, 1203.0], [17.8, 1207.0], [17.9, 1212.0], [18.0, 1216.0], [18.1, 1218.0], [18.2, 1219.0], [18.3, 1221.0], [18.4, 1223.0], [18.5, 1225.0], [18.6, 1227.0], [18.7, 1232.0], [18.8, 1237.0], [18.9, 1241.0], [19.0, 1245.0], [19.1, 1248.0], [19.2, 1253.0], [19.3, 1257.0], [19.4, 1258.0], [19.5, 1261.0], [19.6, 1269.0], [19.7, 1273.0], [19.8, 1274.0], [19.9, 1279.0], [20.0, 1283.0], [20.1, 1286.0], [20.2, 1288.0], [20.3, 1293.0], [20.4, 1296.0], [20.5, 1298.0], [20.6, 1300.0], [20.7, 1303.0], [20.8, 1307.0], [20.9, 1310.0], [21.0, 1312.0], [21.1, 1313.0], [21.2, 1318.0], [21.3, 1324.0], [21.4, 1325.0], [21.5, 1328.0], [21.6, 1330.0], [21.7, 1335.0], [21.8, 1338.0], [21.9, 1340.0], [22.0, 1344.0], [22.1, 1345.0], [22.2, 1350.0], [22.3, 1352.0], [22.4, 1355.0], [22.5, 1357.0], [22.6, 1360.0], [22.7, 1361.0], [22.8, 1366.0], [22.9, 1369.0], [23.0, 1371.0], [23.1, 1376.0], [23.2, 1379.0], [23.3, 1382.0], [23.4, 1387.0], [23.5, 1390.0], [23.6, 1394.0], [23.7, 1396.0], [23.8, 1398.0], [23.9, 1401.0], [24.0, 1405.0], [24.1, 1407.0], [24.2, 1408.0], [24.3, 1412.0], [24.4, 1415.0], [24.5, 1417.0], [24.6, 1419.0], [24.7, 1423.0], [24.8, 1425.0], [24.9, 1428.0], [25.0, 1431.0], [25.1, 1435.0], [25.2, 1438.0], [25.3, 1440.0], [25.4, 1443.0], [25.5, 1445.0], [25.6, 1447.0], [25.7, 1452.0], [25.8, 1454.0], [25.9, 1457.0], [26.0, 1461.0], [26.1, 1461.0], [26.2, 1464.0], [26.3, 1468.0], [26.4, 1471.0], [26.5, 1474.0], [26.6, 1477.0], [26.7, 1478.0], [26.8, 1481.0], [26.9, 1484.0], [27.0, 1486.0], [27.1, 1489.0], [27.2, 1490.0], [27.3, 1492.0], [27.4, 1495.0], [27.5, 1496.0], [27.6, 1500.0], [27.7, 1503.0], [27.8, 1506.0], [27.9, 1508.0], [28.0, 1510.0], [28.1, 1513.0], [28.2, 1517.0], [28.3, 1521.0], [28.4, 1522.0], [28.5, 1524.0], [28.6, 1525.0], [28.7, 1528.0], [28.8, 1531.0], [28.9, 1532.0], [29.0, 1534.0], [29.1, 1537.0], [29.2, 1538.0], [29.3, 1540.0], [29.4, 1544.0], [29.5, 1547.0], [29.6, 1548.0], [29.7, 1550.0], [29.8, 1551.0], [29.9, 1553.0], [30.0, 1556.0], [30.1, 1557.0], [30.2, 1561.0], [30.3, 1564.0], [30.4, 1567.0], [30.5, 1571.0], [30.6, 1573.0], [30.7, 1576.0], [30.8, 1578.0], [30.9, 1580.0], [31.0, 1582.0], [31.1, 1582.0], [31.2, 1585.0], [31.3, 1588.0], [31.4, 1590.0], [31.5, 1591.0], [31.6, 1594.0], [31.7, 1595.0], [31.8, 1597.0], [31.9, 1598.0], [32.0, 1600.0], [32.1, 1602.0], [32.2, 1605.0], [32.3, 1610.0], [32.4, 1613.0], [32.5, 1618.0], [32.6, 1619.0], [32.7, 1621.0], [32.8, 1624.0], [32.9, 1627.0], [33.0, 1629.0], [33.1, 1632.0], [33.2, 1635.0], [33.3, 1637.0], [33.4, 1639.0], [33.5, 1642.0], [33.6, 1648.0], [33.7, 1649.0], [33.8, 1652.0], [33.9, 1652.0], [34.0, 1654.0], [34.1, 1656.0], [34.2, 1659.0], [34.3, 1661.0], [34.4, 1664.0], [34.5, 1667.0], [34.6, 1669.0], [34.7, 1671.0], [34.8, 1673.0], [34.9, 1674.0], [35.0, 1676.0], [35.1, 1678.0], [35.2, 1680.0], [35.3, 1682.0], [35.4, 1684.0], [35.5, 1686.0], [35.6, 1688.0], [35.7, 1689.0], [35.8, 1691.0], [35.9, 1694.0], [36.0, 1696.0], [36.1, 1699.0], [36.2, 1703.0], [36.3, 1705.0], [36.4, 1707.0], [36.5, 1709.0], [36.6, 1710.0], [36.7, 1713.0], [36.8, 1715.0], [36.9, 1716.0], [37.0, 1719.0], [37.1, 1722.0], [37.2, 1724.0], [37.3, 1725.0], [37.4, 1731.0], [37.5, 1733.0], [37.6, 1737.0], [37.7, 1740.0], [37.8, 1741.0], [37.9, 1745.0], [38.0, 1748.0], [38.1, 1749.0], [38.2, 1751.0], [38.3, 1752.0], [38.4, 1754.0], [38.5, 1757.0], [38.6, 1759.0], [38.7, 1761.0], [38.8, 1762.0], [38.9, 1763.0], [39.0, 1765.0], [39.1, 1766.0], [39.2, 1769.0], [39.3, 1772.0], [39.4, 1775.0], [39.5, 1777.0], [39.6, 1779.0], [39.7, 1780.0], [39.8, 1782.0], [39.9, 1783.0], [40.0, 1784.0], [40.1, 1787.0], [40.2, 1790.0], [40.3, 1791.0], [40.4, 1794.0], [40.5, 1797.0], [40.6, 1800.0], [40.7, 1803.0], [40.8, 1805.0], [40.9, 1806.0], [41.0, 1807.0], [41.1, 1809.0], [41.2, 1810.0], [41.3, 1814.0], [41.4, 1816.0], [41.5, 1818.0], [41.6, 1820.0], [41.7, 1823.0], [41.8, 1824.0], [41.9, 1827.0], [42.0, 1828.0], [42.1, 1830.0], [42.2, 1831.0], [42.3, 1834.0], [42.4, 1835.0], [42.5, 1836.0], [42.6, 1839.0], [42.7, 1840.0], [42.8, 1841.0], [42.9, 1843.0], [43.0, 1845.0], [43.1, 1848.0], [43.2, 1850.0], [43.3, 1851.0], [43.4, 1852.0], [43.5, 1855.0], [43.6, 1857.0], [43.7, 1860.0], [43.8, 1861.0], [43.9, 1862.0], [44.0, 1865.0], [44.1, 1866.0], [44.2, 1868.0], [44.3, 1869.0], [44.4, 1871.0], [44.5, 1874.0], [44.6, 1876.0], [44.7, 1877.0], [44.8, 1879.0], [44.9, 1881.0], [45.0, 1882.0], [45.1, 1884.0], [45.2, 1886.0], [45.3, 1888.0], [45.4, 1888.0], [45.5, 1890.0], [45.6, 1892.0], [45.7, 1894.0], [45.8, 1895.0], [45.9, 1896.0], [46.0, 1898.0], [46.1, 1899.0], [46.2, 1901.0], [46.3, 1905.0], [46.4, 1908.0], [46.5, 1909.0], [46.6, 1910.0], [46.7, 1911.0], [46.8, 1912.0], [46.9, 1913.0], [47.0, 1917.0], [47.1, 1918.0], [47.2, 1919.0], [47.3, 1921.0], [47.4, 1922.0], [47.5, 1924.0], [47.6, 1927.0], [47.7, 1929.0], [47.8, 1930.0], [47.9, 1932.0], [48.0, 1933.0], [48.1, 1935.0], [48.2, 1937.0], [48.3, 1940.0], [48.4, 1941.0], [48.5, 1943.0], [48.6, 1944.0], [48.7, 1947.0], [48.8, 1948.0], [48.9, 1951.0], [49.0, 1954.0], [49.1, 1955.0], [49.2, 1957.0], [49.3, 1959.0], [49.4, 1960.0], [49.5, 1962.0], [49.6, 1964.0], [49.7, 1966.0], [49.8, 1969.0], [49.9, 1970.0], [50.0, 1970.0], [50.1, 1973.0], [50.2, 1974.0], [50.3, 1977.0], [50.4, 1978.0], [50.5, 1979.0], [50.6, 1981.0], [50.7, 1982.0], [50.8, 1984.0], [50.9, 1985.0], [51.0, 1987.0], [51.1, 1989.0], [51.2, 1991.0], [51.3, 1992.0], [51.4, 1995.0], [51.5, 1997.0], [51.6, 1998.0], [51.7, 2000.0], [51.8, 2000.0], [51.9, 2001.0], [52.0, 2004.0], [52.1, 2005.0], [52.2, 2006.0], [52.3, 2006.0], [52.4, 2007.0], [52.5, 2008.0], [52.6, 2009.0], [52.7, 2010.0], [52.8, 2011.0], [52.9, 2014.0], [53.0, 2015.0], [53.1, 2016.0], [53.2, 2016.0], [53.3, 2018.0], [53.4, 2021.0], [53.5, 2023.0], [53.6, 2025.0], [53.7, 2028.0], [53.8, 2029.0], [53.9, 2030.0], [54.0, 2032.0], [54.1, 2034.0], [54.2, 2035.0], [54.3, 2038.0], [54.4, 2041.0], [54.5, 2042.0], [54.6, 2044.0], [54.7, 2046.0], [54.8, 2049.0], [54.9, 2051.0], [55.0, 2053.0], [55.1, 2055.0], [55.2, 2056.0], [55.3, 2060.0], [55.4, 2063.0], [55.5, 2067.0], [55.6, 2068.0], [55.7, 2070.0], [55.8, 2073.0], [55.9, 2075.0], [56.0, 2077.0], [56.1, 2078.0], [56.2, 2080.0], [56.3, 2081.0], [56.4, 2084.0], [56.5, 2086.0], [56.6, 2091.0], [56.7, 2093.0], [56.8, 2094.0], [56.9, 2096.0], [57.0, 2097.0], [57.1, 2101.0], [57.2, 2104.0], [57.3, 2105.0], [57.4, 2106.0], [57.5, 2108.0], [57.6, 2111.0], [57.7, 2112.0], [57.8, 2117.0], [57.9, 2118.0], [58.0, 2121.0], [58.1, 2123.0], [58.2, 2126.0], [58.3, 2127.0], [58.4, 2131.0], [58.5, 2132.0], [58.6, 2137.0], [58.7, 2138.0], [58.8, 2140.0], [58.9, 2144.0], [59.0, 2146.0], [59.1, 2148.0], [59.2, 2154.0], [59.3, 2157.0], [59.4, 2159.0], [59.5, 2161.0], [59.6, 2162.0], [59.7, 2164.0], [59.8, 2165.0], [59.9, 2170.0], [60.0, 2172.0], [60.1, 2175.0], [60.2, 2180.0], [60.3, 2182.0], [60.4, 2185.0], [60.5, 2188.0], [60.6, 2190.0], [60.7, 2192.0], [60.8, 2195.0], [60.9, 2200.0], [61.0, 2203.0], [61.1, 2204.0], [61.2, 2208.0], [61.3, 2213.0], [61.4, 2216.0], [61.5, 2220.0], [61.6, 2222.0], [61.7, 2224.0], [61.8, 2227.0], [61.9, 2229.0], [62.0, 2232.0], [62.1, 2234.0], [62.2, 2237.0], [62.3, 2239.0], [62.4, 2242.0], [62.5, 2247.0], [62.6, 2250.0], [62.7, 2254.0], [62.8, 2255.0], [62.9, 2257.0], [63.0, 2259.0], [63.1, 2261.0], [63.2, 2263.0], [63.3, 2264.0], [63.4, 2266.0], [63.5, 2267.0], [63.6, 2269.0], [63.7, 2275.0], [63.8, 2279.0], [63.9, 2282.0], [64.0, 2284.0], [64.1, 2290.0], [64.2, 2294.0], [64.3, 2296.0], [64.4, 2299.0], [64.5, 2302.0], [64.6, 2303.0], [64.7, 2306.0], [64.8, 2307.0], [64.9, 2309.0], [65.0, 2311.0], [65.1, 2314.0], [65.2, 2316.0], [65.3, 2317.0], [65.4, 2320.0], [65.5, 2323.0], [65.6, 2324.0], [65.7, 2330.0], [65.8, 2332.0], [65.9, 2337.0], [66.0, 2341.0], [66.1, 2343.0], [66.2, 2346.0], [66.3, 2351.0], [66.4, 2355.0], [66.5, 2358.0], [66.6, 2363.0], [66.7, 2366.0], [66.8, 2374.0], [66.9, 2375.0], [67.0, 2377.0], [67.1, 2382.0], [67.2, 2385.0], [67.3, 2386.0], [67.4, 2389.0], [67.5, 2391.0], [67.6, 2393.0], [67.7, 2396.0], [67.8, 2398.0], [67.9, 2401.0], [68.0, 2402.0], [68.1, 2405.0], [68.2, 2408.0], [68.3, 2413.0], [68.4, 2418.0], [68.5, 2420.0], [68.6, 2422.0], [68.7, 2425.0], [68.8, 2429.0], [68.9, 2430.0], [69.0, 2431.0], [69.1, 2434.0], [69.2, 2438.0], [69.3, 2441.0], [69.4, 2443.0], [69.5, 2447.0], [69.6, 2455.0], [69.7, 2461.0], [69.8, 2464.0], [69.9, 2468.0], [70.0, 2470.0], [70.1, 2472.0], [70.2, 2477.0], [70.3, 2478.0], [70.4, 2485.0], [70.5, 2489.0], [70.6, 2492.0], [70.7, 2497.0], [70.8, 2500.0], [70.9, 2502.0], [71.0, 2505.0], [71.1, 2507.0], [71.2, 2508.0], [71.3, 2510.0], [71.4, 2513.0], [71.5, 2518.0], [71.6, 2520.0], [71.7, 2522.0], [71.8, 2526.0], [71.9, 2531.0], [72.0, 2533.0], [72.1, 2537.0], [72.2, 2540.0], [72.3, 2543.0], [72.4, 2545.0], [72.5, 2548.0], [72.6, 2552.0], [72.7, 2554.0], [72.8, 2559.0], [72.9, 2561.0], [73.0, 2569.0], [73.1, 2570.0], [73.2, 2573.0], [73.3, 2576.0], [73.4, 2576.0], [73.5, 2582.0], [73.6, 2586.0], [73.7, 2588.0], [73.8, 2590.0], [73.9, 2592.0], [74.0, 2598.0], [74.1, 2602.0], [74.2, 2604.0], [74.3, 2607.0], [74.4, 2611.0], [74.5, 2612.0], [74.6, 2615.0], [74.7, 2618.0], [74.8, 2622.0], [74.9, 2628.0], [75.0, 2630.0], [75.1, 2631.0], [75.2, 2634.0], [75.3, 2636.0], [75.4, 2638.0], [75.5, 2642.0], [75.6, 2649.0], [75.7, 2652.0], [75.8, 2654.0], [75.9, 2656.0], [76.0, 2661.0], [76.1, 2662.0], [76.2, 2665.0], [76.3, 2666.0], [76.4, 2668.0], [76.5, 2672.0], [76.6, 2674.0], [76.7, 2677.0], [76.8, 2678.0], [76.9, 2681.0], [77.0, 2683.0], [77.1, 2686.0], [77.2, 2689.0], [77.3, 2691.0], [77.4, 2693.0], [77.5, 2698.0], [77.6, 2700.0], [77.7, 2701.0], [77.8, 2703.0], [77.9, 2706.0], [78.0, 2708.0], [78.1, 2711.0], [78.2, 2714.0], [78.3, 2717.0], [78.4, 2720.0], [78.5, 2720.0], [78.6, 2723.0], [78.7, 2727.0], [78.8, 2731.0], [78.9, 2737.0], [79.0, 2741.0], [79.1, 2750.0], [79.2, 2754.0], [79.3, 2760.0], [79.4, 2765.0], [79.5, 2768.0], [79.6, 2772.0], [79.7, 2777.0], [79.8, 2780.0], [79.9, 2784.0], [80.0, 2788.0], [80.1, 2792.0], [80.2, 2797.0], [80.3, 2799.0], [80.4, 2803.0], [80.5, 2809.0], [80.6, 2812.0], [80.7, 2815.0], [80.8, 2819.0], [80.9, 2821.0], [81.0, 2825.0], [81.1, 2829.0], [81.2, 2833.0], [81.3, 2837.0], [81.4, 2843.0], [81.5, 2847.0], [81.6, 2850.0], [81.7, 2853.0], [81.8, 2857.0], [81.9, 2860.0], [82.0, 2863.0], [82.1, 2868.0], [82.2, 2873.0], [82.3, 2877.0], [82.4, 2880.0], [82.5, 2884.0], [82.6, 2886.0], [82.7, 2890.0], [82.8, 2894.0], [82.9, 2897.0], [83.0, 2899.0], [83.1, 2904.0], [83.2, 2908.0], [83.3, 2911.0], [83.4, 2915.0], [83.5, 2921.0], [83.6, 2924.0], [83.7, 2925.0], [83.8, 2928.0], [83.9, 2933.0], [84.0, 2943.0], [84.1, 2951.0], [84.2, 2955.0], [84.3, 2960.0], [84.4, 2967.0], [84.5, 2970.0], [84.6, 2975.0], [84.7, 2979.0], [84.8, 2983.0], [84.9, 2985.0], [85.0, 2989.0], [85.1, 2992.0], [85.2, 2998.0], [85.3, 3000.0], [85.4, 3007.0], [85.5, 3009.0], [85.6, 3016.0], [85.7, 3020.0], [85.8, 3033.0], [85.9, 3037.0], [86.0, 3048.0], [86.1, 3055.0], [86.2, 3057.0], [86.3, 3062.0], [86.4, 3071.0], [86.5, 3078.0], [86.6, 3080.0], [86.7, 3092.0], [86.8, 3096.0], [86.9, 3099.0], [87.0, 3105.0], [87.1, 3115.0], [87.2, 3129.0], [87.3, 3136.0], [87.4, 3141.0], [87.5, 3151.0], [87.6, 3158.0], [87.7, 3165.0], [87.8, 3168.0], [87.9, 3179.0], [88.0, 3183.0], [88.1, 3187.0], [88.2, 3191.0], [88.3, 3201.0], [88.4, 3207.0], [88.5, 3220.0], [88.6, 3232.0], [88.7, 3239.0], [88.8, 3244.0], [88.9, 3252.0], [89.0, 3256.0], [89.1, 3258.0], [89.2, 3262.0], [89.3, 3269.0], [89.4, 3271.0], [89.5, 3277.0], [89.6, 3283.0], [89.7, 3287.0], [89.8, 3293.0], [89.9, 3295.0], [90.0, 3301.0], [90.1, 3322.0], [90.2, 3333.0], [90.3, 3346.0], [90.4, 3353.0], [90.5, 3359.0], [90.6, 3371.0], [90.7, 3380.0], [90.8, 3385.0], [90.9, 3396.0], [91.0, 3406.0], [91.1, 3414.0], [91.2, 3419.0], [91.3, 3424.0], [91.4, 3430.0], [91.5, 3436.0], [91.6, 3445.0], [91.7, 3449.0], [91.8, 3460.0], [91.9, 3468.0], [92.0, 3479.0], [92.1, 3486.0], [92.2, 3501.0], [92.3, 3511.0], [92.4, 3518.0], [92.5, 3528.0], [92.6, 3533.0], [92.7, 3546.0], [92.8, 3559.0], [92.9, 3564.0], [93.0, 3571.0], [93.1, 3583.0], [93.2, 3592.0], [93.3, 3605.0], [93.4, 3619.0], [93.5, 3626.0], [93.6, 3638.0], [93.7, 3654.0], [93.8, 3671.0], [93.9, 3677.0], [94.0, 3708.0], [94.1, 3724.0], [94.2, 3731.0], [94.3, 3748.0], [94.4, 3756.0], [94.5, 3760.0], [94.6, 3766.0], [94.7, 3776.0], [94.8, 3795.0], [94.9, 3805.0], [95.0, 3813.0], [95.1, 3831.0], [95.2, 3842.0], [95.3, 3856.0], [95.4, 3875.0], [95.5, 3879.0], [95.6, 3905.0], [95.7, 3918.0], [95.8, 3927.0], [95.9, 3960.0], [96.0, 3987.0], [96.1, 3997.0], [96.2, 4008.0], [96.3, 4015.0], [96.4, 4036.0], [96.5, 4065.0], [96.6, 4092.0], [96.7, 4111.0], [96.8, 4123.0], [96.9, 4164.0], [97.0, 4177.0], [97.1, 4197.0], [97.2, 4211.0], [97.3, 4231.0], [97.4, 4273.0], [97.5, 4307.0], [97.6, 4334.0], [97.7, 4359.0], [97.8, 4381.0], [97.9, 4431.0], [98.0, 4503.0], [98.1, 4576.0], [98.2, 4671.0], [98.3, 4740.0], [98.4, 4842.0], [98.5, 4907.0], [98.6, 4943.0], [98.7, 4994.0], [98.8, 5101.0], [98.9, 5184.0], [99.0, 5461.0], [99.1, 5536.0], [99.2, 5749.0], [99.3, 5838.0], [99.4, 5987.0], [99.5, 6378.0], [99.6, 6480.0], [99.7, 6611.0], [99.8, 6986.0], [99.9, 7239.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 500.0, "maxY": 289.0, "series": [{"data": [[600.0, 5.0], [700.0, 174.0], [800.0, 280.0], [900.0, 168.0], [1000.0, 112.0], [1100.0, 169.0], [1200.0, 156.0], [1300.0, 170.0], [1400.0, 195.0], [1500.0, 229.0], [1600.0, 213.0], [1700.0, 233.0], [1800.0, 287.0], [1900.0, 289.0], [2000.0, 281.0], [2100.0, 197.0], [2200.0, 183.0], [2300.0, 178.0], [2400.0, 153.0], [2500.0, 169.0], [2600.0, 184.0], [2800.0, 140.0], [2700.0, 141.0], [2900.0, 115.0], [3000.0, 87.0], [3100.0, 72.0], [3200.0, 88.0], [3300.0, 48.0], [3400.0, 67.0], [3500.0, 54.0], [3700.0, 48.0], [3600.0, 36.0], [3800.0, 37.0], [3900.0, 28.0], [4000.0, 27.0], [4200.0, 18.0], [4300.0, 17.0], [4100.0, 26.0], [4400.0, 10.0], [4600.0, 6.0], [4500.0, 6.0], [4800.0, 7.0], [4700.0, 7.0], [5100.0, 6.0], [4900.0, 11.0], [5000.0, 4.0], [5300.0, 4.0], [5200.0, 1.0], [5500.0, 4.0], [5400.0, 3.0], [5600.0, 3.0], [5800.0, 3.0], [5700.0, 3.0], [5900.0, 5.0], [6100.0, 3.0], [6200.0, 2.0], [6300.0, 3.0], [6600.0, 3.0], [6500.0, 3.0], [6400.0, 3.0], [6900.0, 4.0], [7000.0, 1.0], [7100.0, 2.0], [7200.0, 2.0], [7500.0, 2.0], [8000.0, 1.0], [10700.0, 1.0], [11500.0, 1.0], [500.0, 3.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 11500.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 3758.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1432.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 3758.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 1.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.130434782608695, "minX": 1.6022448E12, "maxY": 12.0, "series": [{"data": [[1.60224546E12, 12.0], [1.60224486E12, 12.0], [1.60224576E12, 9.130434782608695], [1.6022448E12, 12.0], [1.60224516E12, 12.0], [1.60224492E12, 12.0], [1.60224522E12, 12.0], [1.60224552E12, 12.0], [1.60224558E12, 12.0], [1.60224528E12, 12.0], [1.60224534E12, 12.0], [1.60224498E12, 12.0], [1.60224564E12, 12.0], [1.6022457E12, 12.0], [1.60224504E12, 12.0], [1.6022451E12, 12.0], [1.6022454E12, 12.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60224576E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 1219.0, "minX": 1.0, "maxY": 3918.0, "series": [{"data": [[8.0, 2009.0], [4.0, 2308.0], [2.0, 3789.0], [1.0, 3731.0], [9.0, 2962.0], [10.0, 1476.0], [5.0, 2138.0], [11.0, 1620.0], [12.0, 2106.525289575288], [6.0, 1219.0], [3.0, 3918.0], [7.0, 1557.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[11.987285686765556, 2107.2101714505866]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 12.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 179.0, "minX": 1.6022448E12, "maxY": 2058670.3, "series": [{"data": [[1.60224546E12, 1430878.1833333333], [1.60224486E12, 1633532.8833333333], [1.60224576E12, 133041.73333333334], [1.6022448E12, 239151.45], [1.60224516E12, 1535052.8833333333], [1.60224492E12, 1433792.1], [1.60224522E12, 1645063.45], [1.60224552E12, 1997062.1833333333], [1.60224558E12, 1539040.0833333333], [1.60224528E12, 1680259.55], [1.60224534E12, 1371046.7166666666], [1.60224498E12, 1140120.5833333333], [1.60224564E12, 1532602.9833333334], [1.6022457E12, 1424288.9166666667], [1.60224504E12, 2058670.3], [1.6022451E12, 1901941.55], [1.6022454E12, 1276998.7]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60224546E12, 2930.95], [1.60224486E12, 2257.0833333333335], [1.60224576E12, 179.0], [1.6022448E12, 237.03333333333333], [1.60224516E12, 2686.633333333333], [1.60224492E12, 2341.866666666667], [1.60224522E12, 2581.5833333333335], [1.60224552E12, 2629.8], [1.60224558E12, 2838.766666666667], [1.60224528E12, 1938.8], [1.60224534E12, 2402.133333333333], [1.60224498E12, 2872.5666666666666], [1.60224564E12, 2964.483333333333], [1.6022457E12, 2199.483333333333], [1.60224504E12, 2602.516666666667], [1.6022451E12, 2756.2166666666667], [1.6022454E12, 2165.133333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60224576E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 1773.8678304239404, "minX": 1.6022448E12, "maxY": 2716.2258064516122, "series": [{"data": [[1.60224546E12, 1773.8678304239404], [1.60224486E12, 2298.974603174604], [1.60224576E12, 2533.6521739130435], [1.6022448E12, 2716.2258064516122], [1.60224516E12, 2037.9661016949149], [1.60224492E12, 2222.360248447204], [1.60224522E12, 2096.174927113704], [1.60224552E12, 2097.3843930635844], [1.60224558E12, 1931.8799999999994], [1.60224528E12, 2686.9923076923073], [1.60224534E12, 2187.98820058997], [1.60224498E12, 1827.8106060606056], [1.60224564E12, 1840.78717948718], [1.6022457E12, 2440.924914675768], [1.60224504E12, 2099.218658892129], [1.6022451E12, 1972.7520661157027], [1.6022454E12, 2427.5319865319857]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60224576E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 1772.5062344139656, "minX": 1.6022448E12, "maxY": 2713.1612903225814, "series": [{"data": [[1.60224546E12, 1772.5062344139656], [1.60224486E12, 2296.7492063492073], [1.60224576E12, 2531.652173913044], [1.6022448E12, 2713.1612903225814], [1.60224516E12, 2036.1214689265544], [1.60224492E12, 2220.4472049689443], [1.60224522E12, 2094.1370262390674], [1.60224552E12, 2095.433526011561], [1.60224558E12, 1930.413333333333], [1.60224528E12, 2684.676923076925], [1.60224534E12, 2186.5103244837765], [1.60224498E12, 1826.5252525252529], [1.60224564E12, 1839.2923076923091], [1.6022457E12, 2439.2354948805455], [1.60224504E12, 2096.6180758017504], [1.6022451E12, 1970.5564738292012], [1.6022454E12, 2426.0370370370374]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60224576E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.6022448E12, "maxY": 5.645161290322581, "series": [{"data": [[1.60224546E12, 0.03491271820448883], [1.60224486E12, 0.047619047619047616], [1.60224576E12, 0.0], [1.6022448E12, 5.645161290322581], [1.60224516E12, 0.0367231638418079], [1.60224492E12, 0.040372670807453416], [1.60224522E12, 0.037900874635568536], [1.60224552E12, 0.04624277456647395], [1.60224558E12, 0.03733333333333337], [1.60224528E12, 0.038461538461538415], [1.60224534E12, 0.041297935103244886], [1.60224498E12, 0.032828282828282825], [1.60224564E12, 0.025641025641025644], [1.6022457E12, 0.04095563139931747], [1.60224504E12, 0.04373177842565598], [1.6022451E12, 0.016528925619834708], [1.6022454E12, 0.04040404040404045]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60224576E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 573.0, "minX": 1.6022448E12, "maxY": 11536.0, "series": [{"data": [[1.60224546E12, 5027.0], [1.60224486E12, 7585.0], [1.60224576E12, 4370.0], [1.6022448E12, 4854.0], [1.60224516E12, 4939.0], [1.60224492E12, 7218.0], [1.60224522E12, 6961.0], [1.60224552E12, 4348.0], [1.60224558E12, 4740.0], [1.60224528E12, 7115.0], [1.60224534E12, 11536.0], [1.60224498E12, 5024.0], [1.60224564E12, 5506.0], [1.6022457E12, 6392.0], [1.60224504E12, 5177.0], [1.6022451E12, 4624.0], [1.6022454E12, 6378.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60224546E12, 671.3059887862206], [1.60224486E12, 682.5039987945556], [1.60224576E12, 1219.0], [1.6022448E12, 1219.0], [1.60224516E12, 783.5579997467995], [1.60224492E12, 1071.6979989218712], [1.60224522E12, 722.095999917984], [1.60224552E12, 752.1069992554188], [1.60224558E12, 762.7679998207092], [1.60224528E12, 1247.583999004364], [1.60224534E12, 796.959998703003], [1.60224498E12, 750.7189997160435], [1.60224564E12, 722.5949995338917], [1.6022457E12, 786.0], [1.60224504E12, 822.47999958992], [1.6022451E12, 726.4839992189408], [1.6022454E12, 1001.0459997868538]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60224546E12, 713.6366044855118], [1.60224486E12, 685.3852000904084], [1.60224576E12, 1219.0], [1.6022448E12, 1219.0], [1.60224516E12, 784.5138001012803], [1.60224492E12, 1077.7448007392884], [1.60224522E12, 722.4056000328064], [1.60224552E12, 754.9177002978325], [1.60224558E12, 763.4448000717163], [1.60224528E12, 1251.3424003982543], [1.60224534E12, 801.8560005187989], [1.60224498E12, 751.7909001135827], [1.60224564E12, 724.3545001864434], [1.6022457E12, 786.0], [1.60224504E12, 824.0280001640319], [1.6022451E12, 729.4324003124237], [1.6022454E12, 1001.8506000852585]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60224546E12, 694.8229943931102], [1.60224486E12, 685.0059998869896], [1.60224576E12, 1219.0], [1.6022448E12, 1219.0], [1.60224516E12, 784.0889998733998], [1.60224492E12, 1074.6439990758895], [1.60224522E12, 722.267999958992], [1.60224552E12, 753.6684996277094], [1.60224558E12, 763.1439999103546], [1.60224528E12, 1249.671999502182], [1.60224534E12, 799.6799993515015], [1.60224498E12, 751.3144998580217], [1.60224564E12, 723.5724997669458], [1.6022457E12, 786.0], [1.60224504E12, 823.33999979496], [1.6022451E12, 728.1219996094703], [1.6022454E12, 1001.4929998934269]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60224546E12, 573.0], [1.60224486E12, 611.0], [1.60224576E12, 1219.0], [1.6022448E12, 1219.0], [1.60224516E12, 761.0], [1.60224492E12, 982.0], [1.60224522E12, 718.0], [1.60224552E12, 739.0], [1.60224558E12, 743.0], [1.60224528E12, 1180.0], [1.60224534E12, 758.0], [1.60224498E12, 657.0], [1.60224564E12, 711.0], [1.6022457E12, 784.0], [1.60224504E12, 804.0], [1.6022451E12, 719.0], [1.6022454E12, 981.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60224546E12, 1686.0], [1.60224486E12, 2042.0], [1.60224576E12, 2324.0], [1.6022448E12, 2389.0], [1.60224516E12, 1977.0], [1.60224492E12, 1939.0], [1.60224522E12, 2000.0], [1.60224552E12, 2021.0], [1.60224558E12, 1857.0], [1.60224528E12, 2513.0], [1.60224534E12, 1970.0], [1.60224498E12, 1577.5], [1.60224564E12, 1780.0], [1.6022457E12, 2379.0], [1.60224504E12, 1974.0], [1.6022451E12, 1907.0], [1.6022454E12, 2038.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60224576E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 743.0, "minX": 1.0, "maxY": 3583.0, "series": [{"data": [[2.0, 3002.5], [8.0, 1782.0], [9.0, 1551.0], [10.0, 1280.5], [11.0, 1154.0], [3.0, 2703.5], [12.0, 914.5], [13.0, 901.0], [14.0, 811.0], [15.0, 799.0], [4.0, 2463.5], [1.0, 3583.0], [16.0, 782.5], [17.0, 743.0], [5.0, 2151.0], [6.0, 2096.0], [7.0, 1933.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[5.0, 1221.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 17.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 743.0, "minX": 1.0, "maxY": 3577.0, "series": [{"data": [[2.0, 3000.5], [8.0, 1780.5], [9.0, 1551.0], [10.0, 1280.0], [11.0, 1154.0], [3.0, 2702.5], [12.0, 914.0], [13.0, 901.0], [14.0, 811.0], [15.0, 799.0], [4.0, 2459.5], [1.0, 3577.0], [16.0, 782.5], [17.0, 743.0], [5.0, 2146.0], [6.0, 2093.0], [7.0, 1931.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[5.0, 1221.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 17.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.18333333333333332, "minX": 1.6022448E12, "maxY": 6.683333333333334, "series": [{"data": [[1.60224546E12, 6.683333333333334], [1.60224486E12, 5.25], [1.60224576E12, 0.18333333333333332], [1.6022448E12, 0.7166666666666667], [1.60224516E12, 5.9], [1.60224492E12, 5.366666666666666], [1.60224522E12, 5.716666666666667], [1.60224552E12, 5.766666666666667], [1.60224558E12, 6.25], [1.60224528E12, 4.333333333333333], [1.60224534E12, 5.65], [1.60224498E12, 6.6], [1.60224564E12, 6.5], [1.6022457E12, 4.883333333333334], [1.60224504E12, 5.716666666666667], [1.6022451E12, 6.05], [1.6022454E12, 4.95]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60224576E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.6022448E12, "maxY": 6.683333333333334, "series": [{"data": [[1.60224546E12, 6.683333333333334], [1.60224486E12, 5.25], [1.60224576E12, 0.38333333333333336], [1.6022448E12, 0.5166666666666667], [1.60224516E12, 5.883333333333334], [1.60224492E12, 5.366666666666666], [1.60224522E12, 5.716666666666667], [1.60224552E12, 5.766666666666667], [1.60224558E12, 6.25], [1.60224528E12, 4.333333333333333], [1.60224534E12, 5.65], [1.60224498E12, 6.6], [1.60224564E12, 6.5], [1.6022457E12, 4.883333333333334], [1.60224504E12, 5.716666666666667], [1.6022451E12, 6.05], [1.6022454E12, 4.95]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.60224516E12, 0.016666666666666666]], "isOverall": false, "label": "400", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60224576E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.6022448E12, "maxY": 6.683333333333334, "series": [{"data": [[1.60224546E12, 6.683333333333334], [1.60224486E12, 5.25], [1.60224576E12, 0.38333333333333336], [1.6022448E12, 0.5166666666666667], [1.60224516E12, 5.883333333333334], [1.60224492E12, 5.366666666666666], [1.60224522E12, 5.716666666666667], [1.60224552E12, 5.766666666666667], [1.60224558E12, 6.25], [1.60224528E12, 4.333333333333333], [1.60224534E12, 5.65], [1.60224498E12, 6.6], [1.60224564E12, 6.5], [1.6022457E12, 4.883333333333334], [1.60224504E12, 5.716666666666667], [1.6022451E12, 6.05], [1.6022454E12, 4.95]], "isOverall": false, "label": "HTTP Request-success", "isController": false}, {"data": [[1.60224516E12, 0.016666666666666666]], "isOverall": false, "label": "HTTP Request-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60224576E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.6022448E12, "maxY": 6.683333333333334, "series": [{"data": [[1.60224546E12, 6.683333333333334], [1.60224486E12, 5.25], [1.60224576E12, 0.38333333333333336], [1.6022448E12, 0.5166666666666667], [1.60224516E12, 5.883333333333334], [1.60224492E12, 5.366666666666666], [1.60224522E12, 5.716666666666667], [1.60224552E12, 5.766666666666667], [1.60224558E12, 6.25], [1.60224528E12, 4.333333333333333], [1.60224534E12, 5.65], [1.60224498E12, 6.6], [1.60224564E12, 6.5], [1.6022457E12, 4.883333333333334], [1.60224504E12, 5.716666666666667], [1.6022451E12, 6.05], [1.6022454E12, 4.95]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.60224516E12, 0.016666666666666666]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60224576E12, "title": "Total Transactions Per Second"}},
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

