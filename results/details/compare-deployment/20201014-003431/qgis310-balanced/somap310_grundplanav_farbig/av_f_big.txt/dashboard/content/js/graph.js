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
        data: {"result": {"minY": 538.0, "minX": 0.0, "maxY": 5204.0, "series": [{"data": [[0.0, 538.0], [0.1, 538.0], [0.2, 558.0], [0.3, 775.0], [0.4, 775.0], [0.5, 794.0], [0.6, 830.0], [0.7, 837.0], [0.8, 837.0], [0.9, 853.0], [1.0, 856.0], [1.1, 857.0], [1.2, 857.0], [1.3, 900.0], [1.4, 900.0], [1.5, 901.0], [1.6, 901.0], [1.7, 910.0], [1.8, 914.0], [1.9, 914.0], [2.0, 924.0], [2.1, 927.0], [2.2, 942.0], [2.3, 942.0], [2.4, 958.0], [2.5, 985.0], [2.6, 1002.0], [2.7, 1002.0], [2.8, 1007.0], [2.9, 1013.0], [3.0, 1027.0], [3.1, 1027.0], [3.2, 1028.0], [3.3, 1032.0], [3.4, 1032.0], [3.5, 1033.0], [3.6, 1044.0], [3.7, 1044.0], [3.8, 1044.0], [3.9, 1048.0], [4.0, 1052.0], [4.1, 1056.0], [4.2, 1056.0], [4.3, 1063.0], [4.4, 1072.0], [4.5, 1081.0], [4.6, 1081.0], [4.7, 1091.0], [4.8, 1101.0], [4.9, 1102.0], [5.0, 1102.0], [5.1, 1104.0], [5.2, 1105.0], [5.3, 1105.0], [5.4, 1107.0], [5.5, 1111.0], [5.6, 1112.0], [5.7, 1112.0], [5.8, 1112.0], [5.9, 1117.0], [6.0, 1121.0], [6.1, 1121.0], [6.2, 1129.0], [6.3, 1130.0], [6.4, 1136.0], [6.5, 1136.0], [6.6, 1139.0], [6.7, 1142.0], [6.8, 1142.0], [6.9, 1144.0], [7.0, 1144.0], [7.1, 1148.0], [7.2, 1148.0], [7.3, 1150.0], [7.4, 1155.0], [7.5, 1160.0], [7.6, 1160.0], [7.7, 1168.0], [7.8, 1178.0], [7.9, 1180.0], [8.0, 1180.0], [8.1, 1183.0], [8.2, 1183.0], [8.3, 1187.0], [8.4, 1187.0], [8.5, 1187.0], [8.6, 1197.0], [8.7, 1197.0], [8.8, 1198.0], [8.9, 1203.0], [9.0, 1223.0], [9.1, 1223.0], [9.2, 1230.0], [9.3, 1232.0], [9.4, 1232.0], [9.5, 1232.0], [9.6, 1233.0], [9.7, 1234.0], [9.8, 1237.0], [9.9, 1237.0], [10.0, 1241.0], [10.1, 1242.0], [10.2, 1242.0], [10.3, 1244.0], [10.4, 1244.0], [10.5, 1247.0], [10.6, 1247.0], [10.7, 1249.0], [10.8, 1253.0], [10.9, 1261.0], [11.0, 1261.0], [11.1, 1261.0], [11.2, 1269.0], [11.3, 1271.0], [11.4, 1271.0], [11.5, 1274.0], [11.6, 1274.0], [11.7, 1274.0], [11.8, 1279.0], [11.9, 1291.0], [12.0, 1295.0], [12.1, 1295.0], [12.2, 1298.0], [12.3, 1298.0], [12.4, 1298.0], [12.5, 1298.0], [12.6, 1300.0], [12.7, 1302.0], [12.8, 1310.0], [12.9, 1310.0], [13.0, 1312.0], [13.1, 1319.0], [13.2, 1320.0], [13.3, 1320.0], [13.4, 1320.0], [13.5, 1325.0], [13.6, 1325.0], [13.7, 1325.0], [13.8, 1328.0], [13.9, 1331.0], [14.0, 1331.0], [14.1, 1343.0], [14.2, 1344.0], [14.3, 1347.0], [14.4, 1347.0], [14.5, 1348.0], [14.6, 1352.0], [14.7, 1355.0], [14.8, 1355.0], [14.9, 1358.0], [15.0, 1358.0], [15.1, 1358.0], [15.2, 1371.0], [15.3, 1373.0], [15.4, 1378.0], [15.5, 1378.0], [15.6, 1380.0], [15.7, 1381.0], [15.8, 1384.0], [15.9, 1384.0], [16.0, 1386.0], [16.1, 1386.0], [16.2, 1389.0], [16.3, 1389.0], [16.4, 1391.0], [16.5, 1392.0], [16.6, 1405.0], [16.7, 1405.0], [16.8, 1405.0], [16.9, 1406.0], [17.0, 1406.0], [17.1, 1410.0], [17.2, 1410.0], [17.3, 1410.0], [17.4, 1410.0], [17.5, 1410.0], [17.6, 1413.0], [17.7, 1415.0], [17.8, 1415.0], [17.9, 1417.0], [18.0, 1418.0], [18.1, 1422.0], [18.2, 1422.0], [18.3, 1424.0], [18.4, 1424.0], [18.5, 1424.0], [18.6, 1425.0], [18.7, 1432.0], [18.8, 1437.0], [18.9, 1437.0], [19.0, 1438.0], [19.1, 1440.0], [19.2, 1440.0], [19.3, 1440.0], [19.4, 1441.0], [19.5, 1444.0], [19.6, 1452.0], [19.7, 1452.0], [19.8, 1456.0], [19.9, 1457.0], [20.0, 1457.0], [20.1, 1457.0], [20.2, 1459.0], [20.3, 1461.0], [20.4, 1461.0], [20.5, 1465.0], [20.6, 1467.0], [20.7, 1470.0], [20.8, 1470.0], [20.9, 1479.0], [21.0, 1487.0], [21.1, 1487.0], [21.2, 1487.0], [21.3, 1488.0], [21.4, 1489.0], [21.5, 1492.0], [21.6, 1492.0], [21.7, 1494.0], [21.8, 1507.0], [21.9, 1507.0], [22.0, 1509.0], [22.1, 1510.0], [22.2, 1511.0], [22.3, 1511.0], [22.4, 1514.0], [22.5, 1523.0], [22.6, 1527.0], [22.7, 1527.0], [22.8, 1532.0], [22.9, 1544.0], [23.0, 1546.0], [23.1, 1546.0], [23.2, 1554.0], [23.3, 1554.0], [23.4, 1554.0], [23.5, 1554.0], [23.6, 1557.0], [23.7, 1557.0], [23.8, 1557.0], [23.9, 1561.0], [24.0, 1562.0], [24.1, 1566.0], [24.2, 1566.0], [24.3, 1572.0], [24.4, 1575.0], [24.5, 1578.0], [24.6, 1578.0], [24.7, 1580.0], [24.8, 1584.0], [24.9, 1584.0], [25.0, 1584.0], [25.1, 1585.0], [25.2, 1589.0], [25.3, 1589.0], [25.4, 1597.0], [25.5, 1602.0], [25.6, 1610.0], [25.7, 1610.0], [25.8, 1616.0], [25.9, 1619.0], [26.0, 1625.0], [26.1, 1625.0], [26.2, 1627.0], [26.3, 1631.0], [26.4, 1636.0], [26.5, 1636.0], [26.6, 1637.0], [26.7, 1638.0], [26.8, 1638.0], [26.9, 1643.0], [27.0, 1643.0], [27.1, 1644.0], [27.2, 1644.0], [27.3, 1645.0], [27.4, 1647.0], [27.5, 1651.0], [27.6, 1651.0], [27.7, 1653.0], [27.8, 1654.0], [27.9, 1654.0], [28.0, 1654.0], [28.1, 1655.0], [28.2, 1656.0], [28.3, 1663.0], [28.4, 1663.0], [28.5, 1673.0], [28.6, 1674.0], [28.7, 1674.0], [28.8, 1676.0], [28.9, 1689.0], [29.0, 1694.0], [29.1, 1694.0], [29.2, 1695.0], [29.3, 1695.0], [29.4, 1699.0], [29.5, 1699.0], [29.6, 1701.0], [29.7, 1702.0], [29.8, 1703.0], [29.9, 1703.0], [30.0, 1705.0], [30.1, 1709.0], [30.2, 1709.0], [30.3, 1710.0], [30.4, 1711.0], [30.5, 1718.0], [30.6, 1718.0], [30.7, 1719.0], [30.8, 1719.0], [30.9, 1729.0], [31.0, 1729.0], [31.1, 1737.0], [31.2, 1737.0], [31.3, 1738.0], [31.4, 1738.0], [31.5, 1749.0], [31.6, 1752.0], [31.7, 1752.0], [31.8, 1754.0], [31.9, 1755.0], [32.0, 1759.0], [32.1, 1759.0], [32.2, 1759.0], [32.3, 1764.0], [32.4, 1768.0], [32.5, 1768.0], [32.6, 1769.0], [32.7, 1771.0], [32.8, 1773.0], [32.9, 1773.0], [33.0, 1774.0], [33.1, 1775.0], [33.2, 1783.0], [33.3, 1783.0], [33.4, 1789.0], [33.5, 1789.0], [33.6, 1789.0], [33.7, 1791.0], [33.8, 1796.0], [33.9, 1799.0], [34.0, 1799.0], [34.1, 1803.0], [34.2, 1806.0], [34.3, 1810.0], [34.4, 1810.0], [34.5, 1812.0], [34.6, 1824.0], [34.7, 1825.0], [34.8, 1825.0], [34.9, 1827.0], [35.0, 1828.0], [35.1, 1828.0], [35.2, 1830.0], [35.3, 1841.0], [35.4, 1844.0], [35.5, 1844.0], [35.6, 1845.0], [35.7, 1855.0], [35.8, 1855.0], [35.9, 1855.0], [36.0, 1858.0], [36.1, 1864.0], [36.2, 1866.0], [36.3, 1866.0], [36.4, 1868.0], [36.5, 1868.0], [36.6, 1869.0], [36.7, 1869.0], [36.8, 1872.0], [36.9, 1873.0], [37.0, 1873.0], [37.1, 1877.0], [37.2, 1879.0], [37.3, 1880.0], [37.4, 1880.0], [37.5, 1881.0], [37.6, 1892.0], [37.7, 1893.0], [37.8, 1893.0], [37.9, 1893.0], [38.0, 1893.0], [38.1, 1899.0], [38.2, 1899.0], [38.3, 1902.0], [38.4, 1905.0], [38.5, 1905.0], [38.6, 1909.0], [38.7, 1913.0], [38.8, 1916.0], [38.9, 1916.0], [39.0, 1916.0], [39.1, 1916.0], [39.2, 1917.0], [39.3, 1917.0], [39.4, 1917.0], [39.5, 1917.0], [39.6, 1919.0], [39.7, 1919.0], [39.8, 1922.0], [39.9, 1924.0], [40.0, 1931.0], [40.1, 1931.0], [40.2, 1931.0], [40.3, 1931.0], [40.4, 1931.0], [40.5, 1932.0], [40.6, 1936.0], [40.7, 1944.0], [40.8, 1944.0], [40.9, 1944.0], [41.0, 1949.0], [41.1, 1952.0], [41.2, 1952.0], [41.3, 1952.0], [41.4, 1954.0], [41.5, 1955.0], [41.6, 1955.0], [41.7, 1957.0], [41.8, 1960.0], [41.9, 1960.0], [42.0, 1964.0], [42.1, 1964.0], [42.2, 1964.0], [42.3, 1964.0], [42.4, 1967.0], [42.5, 1969.0], [42.6, 1971.0], [42.7, 1971.0], [42.8, 1973.0], [42.9, 1974.0], [43.0, 1978.0], [43.1, 1978.0], [43.2, 1981.0], [43.3, 1987.0], [43.4, 1987.0], [43.5, 1989.0], [43.6, 1994.0], [43.7, 1996.0], [43.8, 1996.0], [43.9, 1997.0], [44.0, 1997.0], [44.1, 1999.0], [44.2, 1999.0], [44.3, 2004.0], [44.4, 2007.0], [44.5, 2007.0], [44.6, 2007.0], [44.7, 2008.0], [44.8, 2009.0], [44.9, 2013.0], [45.0, 2013.0], [45.1, 2014.0], [45.2, 2016.0], [45.3, 2016.0], [45.4, 2016.0], [45.5, 2020.0], [45.6, 2024.0], [45.7, 2024.0], [45.8, 2026.0], [45.9, 2027.0], [46.0, 2029.0], [46.1, 2029.0], [46.2, 2030.0], [46.3, 2033.0], [46.4, 2037.0], [46.5, 2037.0], [46.6, 2041.0], [46.7, 2042.0], [46.8, 2042.0], [46.9, 2044.0], [47.0, 2047.0], [47.1, 2051.0], [47.2, 2051.0], [47.3, 2052.0], [47.4, 2052.0], [47.5, 2053.0], [47.6, 2053.0], [47.7, 2054.0], [47.8, 2057.0], [47.9, 2057.0], [48.0, 2057.0], [48.1, 2057.0], [48.2, 2058.0], [48.3, 2058.0], [48.4, 2058.0], [48.5, 2060.0], [48.6, 2065.0], [48.7, 2065.0], [48.8, 2066.0], [48.9, 2068.0], [49.0, 2068.0], [49.1, 2068.0], [49.2, 2068.0], [49.3, 2069.0], [49.4, 2070.0], [49.5, 2070.0], [49.6, 2071.0], [49.7, 2074.0], [49.8, 2080.0], [49.9, 2080.0], [50.0, 2080.0], [50.1, 2080.0], [50.2, 2080.0], [50.3, 2081.0], [50.4, 2083.0], [50.5, 2085.0], [50.6, 2085.0], [50.7, 2086.0], [50.8, 2089.0], [50.9, 2091.0], [51.0, 2091.0], [51.1, 2094.0], [51.2, 2094.0], [51.3, 2094.0], [51.4, 2094.0], [51.5, 2098.0], [51.6, 2098.0], [51.7, 2098.0], [51.8, 2102.0], [51.9, 2104.0], [52.0, 2106.0], [52.1, 2106.0], [52.2, 2106.0], [52.3, 2111.0], [52.4, 2112.0], [52.5, 2112.0], [52.6, 2112.0], [52.7, 2112.0], [52.8, 2114.0], [52.9, 2114.0], [53.0, 2116.0], [53.1, 2116.0], [53.2, 2119.0], [53.3, 2119.0], [53.4, 2121.0], [53.5, 2122.0], [53.6, 2122.0], [53.7, 2124.0], [53.8, 2125.0], [53.9, 2126.0], [54.0, 2126.0], [54.1, 2126.0], [54.2, 2129.0], [54.3, 2133.0], [54.4, 2133.0], [54.5, 2133.0], [54.6, 2135.0], [54.7, 2135.0], [54.8, 2135.0], [54.9, 2135.0], [55.0, 2136.0], [55.1, 2136.0], [55.2, 2140.0], [55.3, 2142.0], [55.4, 2150.0], [55.5, 2150.0], [55.6, 2151.0], [55.7, 2152.0], [55.8, 2152.0], [55.9, 2152.0], [56.0, 2152.0], [56.1, 2154.0], [56.2, 2156.0], [56.3, 2156.0], [56.4, 2157.0], [56.5, 2157.0], [56.6, 2160.0], [56.7, 2160.0], [56.8, 2160.0], [56.9, 2165.0], [57.0, 2165.0], [57.1, 2167.0], [57.2, 2168.0], [57.3, 2171.0], [57.4, 2171.0], [57.5, 2175.0], [57.6, 2179.0], [57.7, 2179.0], [57.8, 2179.0], [57.9, 2183.0], [58.0, 2189.0], [58.1, 2190.0], [58.2, 2190.0], [58.3, 2193.0], [58.4, 2193.0], [58.5, 2193.0], [58.6, 2194.0], [58.7, 2202.0], [58.8, 2203.0], [58.9, 2203.0], [59.0, 2205.0], [59.1, 2206.0], [59.2, 2207.0], [59.3, 2207.0], [59.4, 2209.0], [59.5, 2210.0], [59.6, 2212.0], [59.7, 2212.0], [59.8, 2218.0], [59.9, 2218.0], [60.0, 2219.0], [60.1, 2219.0], [60.2, 2221.0], [60.3, 2222.0], [60.4, 2222.0], [60.5, 2223.0], [60.6, 2224.0], [60.7, 2226.0], [60.8, 2226.0], [60.9, 2228.0], [61.0, 2229.0], [61.1, 2230.0], [61.2, 2230.0], [61.3, 2232.0], [61.4, 2233.0], [61.5, 2235.0], [61.6, 2235.0], [61.7, 2237.0], [61.8, 2237.0], [61.9, 2237.0], [62.0, 2238.0], [62.1, 2240.0], [62.2, 2242.0], [62.3, 2242.0], [62.4, 2243.0], [62.5, 2244.0], [62.6, 2246.0], [62.7, 2246.0], [62.8, 2246.0], [62.9, 2247.0], [63.0, 2247.0], [63.1, 2247.0], [63.2, 2247.0], [63.3, 2249.0], [63.4, 2249.0], [63.5, 2252.0], [63.6, 2254.0], [63.7, 2256.0], [63.8, 2256.0], [63.9, 2257.0], [64.0, 2260.0], [64.1, 2262.0], [64.2, 2262.0], [64.3, 2264.0], [64.4, 2265.0], [64.5, 2266.0], [64.6, 2266.0], [64.7, 2269.0], [64.8, 2271.0], [64.9, 2271.0], [65.0, 2271.0], [65.1, 2272.0], [65.2, 2273.0], [65.3, 2273.0], [65.4, 2274.0], [65.5, 2274.0], [65.6, 2276.0], [65.7, 2276.0], [65.8, 2277.0], [65.9, 2279.0], [66.0, 2279.0], [66.1, 2279.0], [66.2, 2280.0], [66.3, 2280.0], [66.4, 2281.0], [66.5, 2281.0], [66.6, 2282.0], [66.7, 2283.0], [66.8, 2283.0], [66.9, 2284.0], [67.0, 2288.0], [67.1, 2289.0], [67.2, 2289.0], [67.3, 2289.0], [67.4, 2291.0], [67.5, 2297.0], [67.6, 2297.0], [67.7, 2297.0], [67.8, 2298.0], [67.9, 2299.0], [68.0, 2299.0], [68.1, 2301.0], [68.2, 2301.0], [68.3, 2301.0], [68.4, 2301.0], [68.5, 2304.0], [68.6, 2304.0], [68.7, 2304.0], [68.8, 2305.0], [68.9, 2306.0], [69.0, 2306.0], [69.1, 2306.0], [69.2, 2307.0], [69.3, 2307.0], [69.4, 2310.0], [69.5, 2310.0], [69.6, 2311.0], [69.7, 2311.0], [69.8, 2313.0], [69.9, 2313.0], [70.0, 2315.0], [70.1, 2316.0], [70.2, 2316.0], [70.3, 2319.0], [70.4, 2319.0], [70.5, 2320.0], [70.6, 2320.0], [70.7, 2321.0], [70.8, 2326.0], [70.9, 2329.0], [71.0, 2329.0], [71.1, 2330.0], [71.2, 2331.0], [71.3, 2332.0], [71.4, 2332.0], [71.5, 2332.0], [71.6, 2334.0], [71.7, 2334.0], [71.8, 2338.0], [71.9, 2339.0], [72.0, 2342.0], [72.1, 2342.0], [72.2, 2345.0], [72.3, 2346.0], [72.4, 2349.0], [72.5, 2349.0], [72.6, 2351.0], [72.7, 2351.0], [72.8, 2353.0], [72.9, 2353.0], [73.0, 2360.0], [73.1, 2360.0], [73.2, 2368.0], [73.3, 2368.0], [73.4, 2369.0], [73.5, 2372.0], [73.6, 2372.0], [73.7, 2372.0], [73.8, 2378.0], [73.9, 2378.0], [74.0, 2378.0], [74.1, 2379.0], [74.2, 2383.0], [74.3, 2385.0], [74.4, 2385.0], [74.5, 2386.0], [74.6, 2386.0], [74.7, 2389.0], [74.8, 2389.0], [74.9, 2392.0], [75.0, 2399.0], [75.1, 2399.0], [75.2, 2401.0], [75.3, 2404.0], [75.4, 2409.0], [75.5, 2409.0], [75.6, 2409.0], [75.7, 2413.0], [75.8, 2413.0], [75.9, 2413.0], [76.0, 2414.0], [76.1, 2417.0], [76.2, 2417.0], [76.3, 2417.0], [76.4, 2423.0], [76.5, 2423.0], [76.6, 2428.0], [76.7, 2428.0], [76.8, 2428.0], [76.9, 2434.0], [77.0, 2434.0], [77.1, 2435.0], [77.2, 2439.0], [77.3, 2439.0], [77.4, 2439.0], [77.5, 2440.0], [77.6, 2443.0], [77.7, 2444.0], [77.8, 2444.0], [77.9, 2444.0], [78.0, 2446.0], [78.1, 2448.0], [78.2, 2448.0], [78.3, 2452.0], [78.4, 2454.0], [78.5, 2454.0], [78.6, 2455.0], [78.7, 2459.0], [78.8, 2461.0], [78.9, 2461.0], [79.0, 2465.0], [79.1, 2465.0], [79.2, 2466.0], [79.3, 2466.0], [79.4, 2466.0], [79.5, 2467.0], [79.6, 2471.0], [79.7, 2471.0], [79.8, 2474.0], [79.9, 2475.0], [80.0, 2476.0], [80.1, 2476.0], [80.2, 2479.0], [80.3, 2480.0], [80.4, 2480.0], [80.5, 2481.0], [80.6, 2490.0], [80.7, 2495.0], [80.8, 2495.0], [80.9, 2501.0], [81.0, 2505.0], [81.1, 2506.0], [81.2, 2506.0], [81.3, 2507.0], [81.4, 2508.0], [81.5, 2511.0], [81.6, 2511.0], [81.7, 2513.0], [81.8, 2521.0], [81.9, 2521.0], [82.0, 2525.0], [82.1, 2525.0], [82.2, 2526.0], [82.3, 2526.0], [82.4, 2529.0], [82.5, 2533.0], [82.6, 2535.0], [82.7, 2535.0], [82.8, 2536.0], [82.9, 2542.0], [83.0, 2542.0], [83.1, 2542.0], [83.2, 2546.0], [83.3, 2548.0], [83.4, 2548.0], [83.5, 2550.0], [83.6, 2553.0], [83.7, 2558.0], [83.8, 2558.0], [83.9, 2560.0], [84.0, 2560.0], [84.1, 2562.0], [84.2, 2562.0], [84.3, 2565.0], [84.4, 2566.0], [84.5, 2567.0], [84.6, 2567.0], [84.7, 2569.0], [84.8, 2571.0], [84.9, 2573.0], [85.0, 2573.0], [85.1, 2573.0], [85.2, 2586.0], [85.3, 2586.0], [85.4, 2587.0], [85.5, 2589.0], [85.6, 2590.0], [85.7, 2590.0], [85.8, 2590.0], [85.9, 2591.0], [86.0, 2597.0], [86.1, 2597.0], [86.2, 2600.0], [86.3, 2605.0], [86.4, 2607.0], [86.5, 2607.0], [86.6, 2615.0], [86.7, 2624.0], [86.8, 2624.0], [86.9, 2633.0], [87.0, 2637.0], [87.1, 2640.0], [87.2, 2640.0], [87.3, 2642.0], [87.4, 2644.0], [87.5, 2646.0], [87.6, 2646.0], [87.7, 2646.0], [87.8, 2647.0], [87.9, 2661.0], [88.0, 2661.0], [88.1, 2666.0], [88.2, 2682.0], [88.3, 2682.0], [88.4, 2682.0], [88.5, 2689.0], [88.6, 2693.0], [88.7, 2693.0], [88.8, 2694.0], [88.9, 2700.0], [89.0, 2702.0], [89.1, 2702.0], [89.2, 2708.0], [89.3, 2711.0], [89.4, 2711.0], [89.5, 2711.0], [89.6, 2711.0], [89.7, 2719.0], [89.8, 2720.0], [89.9, 2720.0], [90.0, 2722.0], [90.1, 2731.0], [90.2, 2731.0], [90.3, 2734.0], [90.4, 2735.0], [90.5, 2737.0], [90.6, 2737.0], [90.7, 2767.0], [90.8, 2771.0], [90.9, 2775.0], [91.0, 2775.0], [91.1, 2778.0], [91.2, 2788.0], [91.3, 2790.0], [91.4, 2790.0], [91.5, 2791.0], [91.6, 2798.0], [91.7, 2798.0], [91.8, 2822.0], [91.9, 2826.0], [92.0, 2826.0], [92.1, 2826.0], [92.2, 2837.0], [92.3, 2838.0], [92.4, 2839.0], [92.5, 2839.0], [92.6, 2850.0], [92.7, 2864.0], [92.8, 2865.0], [92.9, 2865.0], [93.0, 2867.0], [93.1, 2877.0], [93.2, 2886.0], [93.3, 2886.0], [93.4, 2887.0], [93.5, 2898.0], [93.6, 2898.0], [93.7, 2907.0], [93.8, 2916.0], [93.9, 2917.0], [94.0, 2917.0], [94.1, 2923.0], [94.2, 2955.0], [94.3, 2956.0], [94.4, 2956.0], [94.5, 2960.0], [94.6, 2961.0], [94.7, 2988.0], [94.8, 2988.0], [94.9, 2999.0], [95.0, 3002.0], [95.1, 3002.0], [95.2, 3014.0], [95.3, 3022.0], [95.4, 3038.0], [95.5, 3038.0], [95.6, 3059.0], [95.7, 3084.0], [95.8, 3094.0], [95.9, 3094.0], [96.0, 3094.0], [96.1, 3099.0], [96.2, 3114.0], [96.3, 3114.0], [96.4, 3118.0], [96.5, 3136.0], [96.6, 3148.0], [96.7, 3148.0], [96.8, 3152.0], [96.9, 3171.0], [97.0, 3171.0], [97.1, 3184.0], [97.2, 3197.0], [97.3, 3221.0], [97.4, 3221.0], [97.5, 3275.0], [97.6, 3321.0], [97.7, 3478.0], [97.8, 3478.0], [97.9, 3485.0], [98.0, 3525.0], [98.1, 3581.0], [98.2, 3581.0], [98.3, 3724.0], [98.4, 3767.0], [98.5, 3767.0], [98.6, 3777.0], [98.7, 3784.0], [98.8, 3992.0], [98.9, 3992.0], [99.0, 4019.0], [99.1, 4156.0], [99.2, 4181.0], [99.3, 4181.0], [99.4, 4222.0], [99.5, 4337.0], [99.6, 4694.0], [99.7, 4694.0], [99.8, 4960.0], [99.9, 5204.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 500.0, "maxY": 69.0, "series": [{"data": [[700.0, 2.0], [800.0, 5.0], [900.0, 10.0], [1000.0, 16.0], [1100.0, 30.0], [1200.0, 27.0], [1300.0, 30.0], [1400.0, 38.0], [1500.0, 27.0], [1600.0, 30.0], [1700.0, 33.0], [1800.0, 31.0], [1900.0, 44.0], [2000.0, 55.0], [2100.0, 51.0], [2300.0, 52.0], [2200.0, 69.0], [2400.0, 42.0], [2500.0, 39.0], [2600.0, 20.0], [2800.0, 14.0], [2700.0, 21.0], [2900.0, 10.0], [3000.0, 9.0], [3100.0, 8.0], [3300.0, 1.0], [3200.0, 2.0], [3400.0, 2.0], [3500.0, 2.0], [3700.0, 4.0], [3900.0, 1.0], [4000.0, 1.0], [4200.0, 1.0], [4100.0, 2.0], [4300.0, 1.0], [4600.0, 1.0], [4900.0, 1.0], [5200.0, 1.0], [500.0, 2.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 5200.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 160.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 575.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 160.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 575.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 11.751879699248121, "minX": 1.60264062E12, "maxY": 12.0, "series": [{"data": [[1.60264074E12, 11.751879699248121], [1.60264062E12, 12.0], [1.60264068E12, 12.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60264074E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 857.0, "minX": 1.0, "maxY": 3184.0, "series": [{"data": [[8.0, 857.0], [4.0, 1557.0], [2.0, 1546.0], [1.0, 1967.0], [9.0, 2886.0], [10.0, 901.0], [5.0, 1052.0], [11.0, 3184.0], [12.0, 2048.4143646408843], [6.0, 1584.0], [3.0, 1410.0], [7.0, 1893.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[11.910204081632651, 2043.3863945578235]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 12.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 810.7833333333333, "minX": 1.60264062E12, "maxY": 850366.9, "series": [{"data": [[1.60264074E12, 586060.0666666667], [1.60264062E12, 399349.5833333333], [1.60264068E12, 850366.9]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60264074E12, 1996.0333333333333], [1.60264062E12, 810.7833333333333], [1.60264068E12, 2716.2166666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60264074E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 2002.997237569059, "minX": 1.60264062E12, "maxY": 2243.906542056076, "series": [{"data": [[1.60264074E12, 2017.69172932331], [1.60264062E12, 2243.906542056076], [1.60264068E12, 2002.997237569059]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60264074E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 2001.792817679558, "minX": 1.60264062E12, "maxY": 2242.467289719626, "series": [{"data": [[1.60264074E12, 2016.6541353383464], [1.60264062E12, 2242.467289719626], [1.60264068E12, 2001.792817679558]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60264074E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.03867403314917129, "minX": 1.60264062E12, "maxY": 1.0747663551401871, "series": [{"data": [[1.60264074E12, 0.05263157894736841], [1.60264062E12, 1.0747663551401871], [1.60264068E12, 0.03867403314917129]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60264074E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 538.0, "minX": 1.60264062E12, "maxY": 5204.0, "series": [{"data": [[1.60264074E12, 3724.0], [1.60264062E12, 5204.0], [1.60264068E12, 4337.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60264074E12, 667.6159826850892], [1.60264062E12, 794.0], [1.60264068E12, 900.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60264074E12, 732.9776069259644], [1.60264062E12, 804.241601524353], [1.60264068E12, 900.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60264074E12, 703.9279913425445], [1.60264062E12, 797.8479980945586], [1.60264068E12, 900.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60264074E12, 538.0], [1.60264062E12, 794.0], [1.60264068E12, 775.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60264074E12, 2100.0], [1.60264062E12, 2301.0], [1.60264068E12, 2043.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60264074E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 1377.0, "minX": 1.0, "maxY": 2326.0, "series": [{"data": [[8.0, 1663.5], [4.0, 2294.5], [1.0, 1967.0], [9.0, 1377.0], [5.0, 2247.0], [10.0, 1383.0], [6.0, 2135.0], [3.0, 2326.0], [7.0, 1733.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 10.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 1377.0, "minX": 1.0, "maxY": 2321.0, "series": [{"data": [[8.0, 1663.0], [4.0, 2293.0], [1.0, 1967.0], [9.0, 1377.0], [5.0, 2246.0], [10.0, 1382.5], [6.0, 2134.0], [3.0, 2321.0], [7.0, 1732.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 10.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1.9833333333333334, "minX": 1.60264062E12, "maxY": 6.033333333333333, "series": [{"data": [[1.60264074E12, 4.233333333333333], [1.60264062E12, 1.9833333333333334], [1.60264068E12, 6.033333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60264074E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1.7833333333333334, "minX": 1.60264062E12, "maxY": 6.033333333333333, "series": [{"data": [[1.60264074E12, 4.433333333333334], [1.60264062E12, 1.7833333333333334], [1.60264068E12, 6.033333333333333]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60264074E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.7833333333333334, "minX": 1.60264062E12, "maxY": 6.033333333333333, "series": [{"data": [[1.60264074E12, 4.433333333333334], [1.60264062E12, 1.7833333333333334], [1.60264068E12, 6.033333333333333]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60264074E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.7833333333333334, "minX": 1.60264062E12, "maxY": 6.033333333333333, "series": [{"data": [[1.60264074E12, 4.433333333333334], [1.60264062E12, 1.7833333333333334], [1.60264068E12, 6.033333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60264074E12, "title": "Total Transactions Per Second"}},
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

