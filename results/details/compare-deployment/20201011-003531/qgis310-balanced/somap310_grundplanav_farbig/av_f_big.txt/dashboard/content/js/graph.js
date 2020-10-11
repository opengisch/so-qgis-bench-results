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
        data: {"result": {"minY": 833.0, "minX": 0.0, "maxY": 4661.0, "series": [{"data": [[0.0, 833.0], [0.1, 833.0], [0.2, 859.0], [0.3, 861.0], [0.4, 861.0], [0.5, 867.0], [0.6, 871.0], [0.7, 872.0], [0.8, 872.0], [0.9, 873.0], [1.0, 893.0], [1.1, 916.0], [1.2, 916.0], [1.3, 927.0], [1.4, 927.0], [1.5, 944.0], [1.6, 944.0], [1.7, 954.0], [1.8, 956.0], [1.9, 956.0], [2.0, 969.0], [2.1, 970.0], [2.2, 980.0], [2.3, 980.0], [2.4, 1005.0], [2.5, 1014.0], [2.6, 1023.0], [2.7, 1023.0], [2.8, 1024.0], [2.9, 1033.0], [3.0, 1040.0], [3.1, 1040.0], [3.2, 1052.0], [3.3, 1056.0], [3.4, 1056.0], [3.5, 1062.0], [3.6, 1065.0], [3.7, 1093.0], [3.8, 1093.0], [3.9, 1094.0], [4.0, 1097.0], [4.1, 1099.0], [4.2, 1099.0], [4.3, 1105.0], [4.4, 1108.0], [4.5, 1119.0], [4.6, 1119.0], [4.7, 1125.0], [4.8, 1129.0], [4.9, 1131.0], [5.0, 1131.0], [5.1, 1132.0], [5.2, 1143.0], [5.3, 1143.0], [5.4, 1148.0], [5.5, 1155.0], [5.6, 1158.0], [5.7, 1158.0], [5.8, 1159.0], [5.9, 1159.0], [6.0, 1162.0], [6.1, 1162.0], [6.2, 1164.0], [6.3, 1169.0], [6.4, 1175.0], [6.5, 1175.0], [6.6, 1177.0], [6.7, 1179.0], [6.8, 1179.0], [6.9, 1179.0], [7.0, 1191.0], [7.1, 1193.0], [7.2, 1193.0], [7.3, 1195.0], [7.4, 1198.0], [7.5, 1203.0], [7.6, 1203.0], [7.7, 1203.0], [7.8, 1205.0], [7.9, 1205.0], [8.0, 1205.0], [8.1, 1206.0], [8.2, 1212.0], [8.3, 1213.0], [8.4, 1213.0], [8.5, 1214.0], [8.6, 1221.0], [8.7, 1221.0], [8.8, 1221.0], [8.9, 1224.0], [9.0, 1225.0], [9.1, 1225.0], [9.2, 1227.0], [9.3, 1228.0], [9.4, 1228.0], [9.5, 1228.0], [9.6, 1231.0], [9.7, 1233.0], [9.8, 1233.0], [9.9, 1233.0], [10.0, 1235.0], [10.1, 1239.0], [10.2, 1239.0], [10.3, 1242.0], [10.4, 1243.0], [10.5, 1244.0], [10.6, 1244.0], [10.7, 1246.0], [10.8, 1248.0], [10.9, 1249.0], [11.0, 1249.0], [11.1, 1250.0], [11.2, 1254.0], [11.3, 1256.0], [11.4, 1256.0], [11.5, 1257.0], [11.6, 1258.0], [11.7, 1258.0], [11.8, 1262.0], [11.9, 1262.0], [12.0, 1265.0], [12.1, 1265.0], [12.2, 1267.0], [12.3, 1268.0], [12.4, 1272.0], [12.5, 1272.0], [12.6, 1272.0], [12.7, 1274.0], [12.8, 1276.0], [12.9, 1276.0], [13.0, 1277.0], [13.1, 1281.0], [13.2, 1282.0], [13.3, 1282.0], [13.4, 1283.0], [13.5, 1293.0], [13.6, 1293.0], [13.7, 1302.0], [13.8, 1305.0], [13.9, 1306.0], [14.0, 1306.0], [14.1, 1312.0], [14.2, 1318.0], [14.3, 1319.0], [14.4, 1319.0], [14.5, 1328.0], [14.6, 1336.0], [14.7, 1337.0], [14.8, 1337.0], [14.9, 1342.0], [15.0, 1342.0], [15.1, 1342.0], [15.2, 1348.0], [15.3, 1349.0], [15.4, 1351.0], [15.5, 1351.0], [15.6, 1370.0], [15.7, 1372.0], [15.8, 1373.0], [15.9, 1373.0], [16.0, 1377.0], [16.1, 1381.0], [16.2, 1383.0], [16.3, 1383.0], [16.4, 1387.0], [16.5, 1388.0], [16.6, 1390.0], [16.7, 1390.0], [16.8, 1391.0], [16.9, 1392.0], [17.0, 1392.0], [17.1, 1393.0], [17.2, 1395.0], [17.3, 1396.0], [17.4, 1396.0], [17.5, 1401.0], [17.6, 1402.0], [17.7, 1404.0], [17.8, 1404.0], [17.9, 1406.0], [18.0, 1411.0], [18.1, 1415.0], [18.2, 1415.0], [18.3, 1416.0], [18.4, 1418.0], [18.5, 1418.0], [18.6, 1418.0], [18.7, 1421.0], [18.8, 1425.0], [18.9, 1425.0], [19.0, 1433.0], [19.1, 1434.0], [19.2, 1437.0], [19.3, 1437.0], [19.4, 1448.0], [19.5, 1457.0], [19.6, 1462.0], [19.7, 1462.0], [19.8, 1466.0], [19.9, 1467.0], [20.0, 1473.0], [20.1, 1473.0], [20.2, 1477.0], [20.3, 1479.0], [20.4, 1479.0], [20.5, 1482.0], [20.6, 1490.0], [20.7, 1491.0], [20.8, 1491.0], [20.9, 1498.0], [21.0, 1498.0], [21.1, 1499.0], [21.2, 1499.0], [21.3, 1499.0], [21.4, 1499.0], [21.5, 1501.0], [21.6, 1501.0], [21.7, 1502.0], [21.8, 1504.0], [21.9, 1504.0], [22.0, 1506.0], [22.1, 1508.0], [22.2, 1512.0], [22.3, 1512.0], [22.4, 1513.0], [22.5, 1514.0], [22.6, 1515.0], [22.7, 1515.0], [22.8, 1517.0], [22.9, 1517.0], [23.0, 1527.0], [23.1, 1527.0], [23.2, 1527.0], [23.3, 1530.0], [23.4, 1530.0], [23.5, 1530.0], [23.6, 1538.0], [23.7, 1539.0], [23.8, 1539.0], [23.9, 1542.0], [24.0, 1548.0], [24.1, 1549.0], [24.2, 1549.0], [24.3, 1549.0], [24.4, 1551.0], [24.5, 1552.0], [24.6, 1552.0], [24.7, 1552.0], [24.8, 1555.0], [24.9, 1557.0], [25.0, 1557.0], [25.1, 1559.0], [25.2, 1560.0], [25.3, 1560.0], [25.4, 1560.0], [25.5, 1561.0], [25.6, 1561.0], [25.7, 1561.0], [25.8, 1561.0], [25.9, 1565.0], [26.0, 1569.0], [26.1, 1569.0], [26.2, 1570.0], [26.3, 1583.0], [26.4, 1584.0], [26.5, 1584.0], [26.6, 1587.0], [26.7, 1589.0], [26.8, 1589.0], [26.9, 1590.0], [27.0, 1593.0], [27.1, 1594.0], [27.2, 1594.0], [27.3, 1603.0], [27.4, 1606.0], [27.5, 1612.0], [27.6, 1612.0], [27.7, 1613.0], [27.8, 1614.0], [27.9, 1615.0], [28.0, 1615.0], [28.1, 1616.0], [28.2, 1619.0], [28.3, 1620.0], [28.4, 1620.0], [28.5, 1625.0], [28.6, 1627.0], [28.7, 1627.0], [28.8, 1632.0], [28.9, 1633.0], [29.0, 1635.0], [29.1, 1635.0], [29.2, 1638.0], [29.3, 1639.0], [29.4, 1642.0], [29.5, 1642.0], [29.6, 1643.0], [29.7, 1644.0], [29.8, 1645.0], [29.9, 1645.0], [30.0, 1650.0], [30.1, 1656.0], [30.2, 1656.0], [30.3, 1658.0], [30.4, 1658.0], [30.5, 1663.0], [30.6, 1663.0], [30.7, 1663.0], [30.8, 1663.0], [30.9, 1665.0], [31.0, 1665.0], [31.1, 1667.0], [31.2, 1667.0], [31.3, 1668.0], [31.4, 1668.0], [31.5, 1668.0], [31.6, 1677.0], [31.7, 1677.0], [31.8, 1678.0], [31.9, 1679.0], [32.0, 1688.0], [32.1, 1688.0], [32.2, 1689.0], [32.3, 1691.0], [32.4, 1694.0], [32.5, 1694.0], [32.6, 1697.0], [32.7, 1701.0], [32.8, 1702.0], [32.9, 1702.0], [33.0, 1705.0], [33.1, 1708.0], [33.2, 1711.0], [33.3, 1711.0], [33.4, 1713.0], [33.5, 1714.0], [33.6, 1714.0], [33.7, 1714.0], [33.8, 1716.0], [33.9, 1721.0], [34.0, 1721.0], [34.1, 1721.0], [34.2, 1721.0], [34.3, 1723.0], [34.4, 1723.0], [34.5, 1731.0], [34.6, 1732.0], [34.7, 1736.0], [34.8, 1736.0], [34.9, 1736.0], [35.0, 1745.0], [35.1, 1745.0], [35.2, 1746.0], [35.3, 1747.0], [35.4, 1748.0], [35.5, 1748.0], [35.6, 1749.0], [35.7, 1751.0], [35.8, 1754.0], [35.9, 1754.0], [36.0, 1758.0], [36.1, 1759.0], [36.2, 1762.0], [36.3, 1762.0], [36.4, 1762.0], [36.5, 1764.0], [36.6, 1768.0], [36.7, 1768.0], [36.8, 1770.0], [36.9, 1775.0], [37.0, 1775.0], [37.1, 1779.0], [37.2, 1780.0], [37.3, 1782.0], [37.4, 1782.0], [37.5, 1785.0], [37.6, 1786.0], [37.7, 1788.0], [37.8, 1788.0], [37.9, 1794.0], [38.0, 1794.0], [38.1, 1795.0], [38.2, 1795.0], [38.3, 1796.0], [38.4, 1799.0], [38.5, 1799.0], [38.6, 1800.0], [38.7, 1804.0], [38.8, 1805.0], [38.9, 1805.0], [39.0, 1806.0], [39.1, 1807.0], [39.2, 1808.0], [39.3, 1808.0], [39.4, 1810.0], [39.5, 1811.0], [39.6, 1814.0], [39.7, 1814.0], [39.8, 1816.0], [39.9, 1821.0], [40.0, 1824.0], [40.1, 1824.0], [40.2, 1826.0], [40.3, 1826.0], [40.4, 1826.0], [40.5, 1827.0], [40.6, 1830.0], [40.7, 1830.0], [40.8, 1830.0], [40.9, 1836.0], [41.0, 1837.0], [41.1, 1838.0], [41.2, 1838.0], [41.3, 1838.0], [41.4, 1840.0], [41.5, 1843.0], [41.6, 1843.0], [41.7, 1844.0], [41.8, 1845.0], [41.9, 1845.0], [42.0, 1849.0], [42.1, 1850.0], [42.2, 1851.0], [42.3, 1851.0], [42.4, 1852.0], [42.5, 1854.0], [42.6, 1862.0], [42.7, 1862.0], [42.8, 1862.0], [42.9, 1864.0], [43.0, 1864.0], [43.1, 1864.0], [43.2, 1869.0], [43.3, 1870.0], [43.4, 1870.0], [43.5, 1871.0], [43.6, 1872.0], [43.7, 1872.0], [43.8, 1872.0], [43.9, 1873.0], [44.0, 1873.0], [44.1, 1876.0], [44.2, 1876.0], [44.3, 1878.0], [44.4, 1884.0], [44.5, 1886.0], [44.6, 1886.0], [44.7, 1898.0], [44.8, 1898.0], [44.9, 1907.0], [45.0, 1907.0], [45.1, 1908.0], [45.2, 1911.0], [45.3, 1911.0], [45.4, 1913.0], [45.5, 1913.0], [45.6, 1915.0], [45.7, 1915.0], [45.8, 1920.0], [45.9, 1921.0], [46.0, 1925.0], [46.1, 1925.0], [46.2, 1926.0], [46.3, 1941.0], [46.4, 1942.0], [46.5, 1942.0], [46.6, 1944.0], [46.7, 1945.0], [46.8, 1945.0], [46.9, 1947.0], [47.0, 1954.0], [47.1, 1966.0], [47.2, 1966.0], [47.3, 1966.0], [47.4, 1972.0], [47.5, 1973.0], [47.6, 1973.0], [47.7, 1978.0], [47.8, 1979.0], [47.9, 1981.0], [48.0, 1981.0], [48.1, 1982.0], [48.2, 1982.0], [48.3, 1983.0], [48.4, 1983.0], [48.5, 1984.0], [48.6, 1987.0], [48.7, 1987.0], [48.8, 1991.0], [48.9, 1992.0], [49.0, 1996.0], [49.1, 1996.0], [49.2, 1999.0], [49.3, 1999.0], [49.4, 2008.0], [49.5, 2008.0], [49.6, 2009.0], [49.7, 2010.0], [49.8, 2011.0], [49.9, 2011.0], [50.0, 2019.0], [50.1, 2022.0], [50.2, 2022.0], [50.3, 2036.0], [50.4, 2036.0], [50.5, 2038.0], [50.6, 2038.0], [50.7, 2039.0], [50.8, 2041.0], [50.9, 2047.0], [51.0, 2047.0], [51.1, 2047.0], [51.2, 2049.0], [51.3, 2053.0], [51.4, 2053.0], [51.5, 2056.0], [51.6, 2058.0], [51.7, 2058.0], [51.8, 2058.0], [51.9, 2060.0], [52.0, 2062.0], [52.1, 2062.0], [52.2, 2068.0], [52.3, 2071.0], [52.4, 2075.0], [52.5, 2075.0], [52.6, 2076.0], [52.7, 2077.0], [52.8, 2081.0], [52.9, 2081.0], [53.0, 2083.0], [53.1, 2085.0], [53.2, 2087.0], [53.3, 2087.0], [53.4, 2098.0], [53.5, 2108.0], [53.6, 2108.0], [53.7, 2109.0], [53.8, 2109.0], [53.9, 2112.0], [54.0, 2112.0], [54.1, 2114.0], [54.2, 2114.0], [54.3, 2116.0], [54.4, 2116.0], [54.5, 2124.0], [54.6, 2135.0], [54.7, 2142.0], [54.8, 2142.0], [54.9, 2149.0], [55.0, 2152.0], [55.1, 2152.0], [55.2, 2153.0], [55.3, 2159.0], [55.4, 2159.0], [55.5, 2159.0], [55.6, 2166.0], [55.7, 2174.0], [55.8, 2175.0], [55.9, 2175.0], [56.0, 2176.0], [56.1, 2177.0], [56.2, 2184.0], [56.3, 2184.0], [56.4, 2187.0], [56.5, 2189.0], [56.6, 2198.0], [56.7, 2198.0], [56.8, 2198.0], [56.9, 2199.0], [57.0, 2199.0], [57.1, 2200.0], [57.2, 2202.0], [57.3, 2206.0], [57.4, 2206.0], [57.5, 2207.0], [57.6, 2207.0], [57.7, 2215.0], [57.8, 2215.0], [57.9, 2216.0], [58.0, 2220.0], [58.1, 2226.0], [58.2, 2226.0], [58.3, 2226.0], [58.4, 2228.0], [58.5, 2228.0], [58.6, 2235.0], [58.7, 2236.0], [58.8, 2238.0], [58.9, 2238.0], [59.0, 2240.0], [59.1, 2242.0], [59.2, 2245.0], [59.3, 2245.0], [59.4, 2247.0], [59.5, 2248.0], [59.6, 2250.0], [59.7, 2250.0], [59.8, 2250.0], [59.9, 2251.0], [60.0, 2255.0], [60.1, 2255.0], [60.2, 2258.0], [60.3, 2258.0], [60.4, 2258.0], [60.5, 2263.0], [60.6, 2267.0], [60.7, 2267.0], [60.8, 2267.0], [60.9, 2268.0], [61.0, 2275.0], [61.1, 2276.0], [61.2, 2276.0], [61.3, 2277.0], [61.4, 2282.0], [61.5, 2285.0], [61.6, 2285.0], [61.7, 2291.0], [61.8, 2293.0], [61.9, 2293.0], [62.0, 2296.0], [62.1, 2300.0], [62.2, 2301.0], [62.3, 2301.0], [62.4, 2301.0], [62.5, 2303.0], [62.6, 2304.0], [62.7, 2304.0], [62.8, 2305.0], [62.9, 2305.0], [63.0, 2306.0], [63.1, 2306.0], [63.2, 2310.0], [63.3, 2310.0], [63.4, 2310.0], [63.5, 2313.0], [63.6, 2313.0], [63.7, 2313.0], [63.8, 2313.0], [63.9, 2313.0], [64.0, 2313.0], [64.1, 2314.0], [64.2, 2314.0], [64.3, 2315.0], [64.4, 2324.0], [64.5, 2326.0], [64.6, 2326.0], [64.7, 2327.0], [64.8, 2328.0], [64.9, 2335.0], [65.0, 2335.0], [65.1, 2343.0], [65.2, 2345.0], [65.3, 2345.0], [65.4, 2350.0], [65.5, 2351.0], [65.6, 2356.0], [65.7, 2356.0], [65.8, 2364.0], [65.9, 2364.0], [66.0, 2364.0], [66.1, 2364.0], [66.2, 2365.0], [66.3, 2366.0], [66.4, 2367.0], [66.5, 2367.0], [66.6, 2368.0], [66.7, 2368.0], [66.8, 2368.0], [66.9, 2372.0], [67.0, 2377.0], [67.1, 2379.0], [67.2, 2379.0], [67.3, 2380.0], [67.4, 2385.0], [67.5, 2388.0], [67.6, 2388.0], [67.7, 2388.0], [67.8, 2388.0], [67.9, 2388.0], [68.0, 2388.0], [68.1, 2389.0], [68.2, 2389.0], [68.3, 2390.0], [68.4, 2390.0], [68.5, 2395.0], [68.6, 2396.0], [68.7, 2396.0], [68.8, 2397.0], [68.9, 2398.0], [69.0, 2401.0], [69.1, 2401.0], [69.2, 2402.0], [69.3, 2404.0], [69.4, 2409.0], [69.5, 2409.0], [69.6, 2409.0], [69.7, 2409.0], [69.8, 2413.0], [69.9, 2413.0], [70.0, 2414.0], [70.1, 2414.0], [70.2, 2414.0], [70.3, 2416.0], [70.4, 2419.0], [70.5, 2422.0], [70.6, 2422.0], [70.7, 2422.0], [70.8, 2423.0], [70.9, 2423.0], [71.0, 2423.0], [71.1, 2425.0], [71.2, 2430.0], [71.3, 2435.0], [71.4, 2435.0], [71.5, 2438.0], [71.6, 2441.0], [71.7, 2441.0], [71.8, 2449.0], [71.9, 2452.0], [72.0, 2454.0], [72.1, 2454.0], [72.2, 2463.0], [72.3, 2465.0], [72.4, 2465.0], [72.5, 2465.0], [72.6, 2467.0], [72.7, 2467.0], [72.8, 2469.0], [72.9, 2469.0], [73.0, 2471.0], [73.1, 2474.0], [73.2, 2475.0], [73.3, 2475.0], [73.4, 2477.0], [73.5, 2485.0], [73.6, 2485.0], [73.7, 2487.0], [73.8, 2488.0], [73.9, 2496.0], [74.0, 2496.0], [74.1, 2497.0], [74.2, 2497.0], [74.3, 2502.0], [74.4, 2502.0], [74.5, 2512.0], [74.6, 2517.0], [74.7, 2518.0], [74.8, 2518.0], [74.9, 2520.0], [75.0, 2521.0], [75.1, 2521.0], [75.2, 2526.0], [75.3, 2527.0], [75.4, 2529.0], [75.5, 2529.0], [75.6, 2529.0], [75.7, 2532.0], [75.8, 2532.0], [75.9, 2532.0], [76.0, 2533.0], [76.1, 2534.0], [76.2, 2537.0], [76.3, 2537.0], [76.4, 2538.0], [76.5, 2540.0], [76.6, 2548.0], [76.7, 2548.0], [76.8, 2554.0], [76.9, 2554.0], [77.0, 2554.0], [77.1, 2555.0], [77.2, 2556.0], [77.3, 2559.0], [77.4, 2559.0], [77.5, 2560.0], [77.6, 2563.0], [77.7, 2563.0], [77.8, 2563.0], [77.9, 2564.0], [78.0, 2570.0], [78.1, 2571.0], [78.2, 2571.0], [78.3, 2572.0], [78.4, 2574.0], [78.5, 2574.0], [78.6, 2575.0], [78.7, 2576.0], [78.8, 2576.0], [78.9, 2576.0], [79.0, 2578.0], [79.1, 2578.0], [79.2, 2579.0], [79.3, 2579.0], [79.4, 2582.0], [79.5, 2584.0], [79.6, 2586.0], [79.7, 2586.0], [79.8, 2586.0], [79.9, 2587.0], [80.0, 2588.0], [80.1, 2588.0], [80.2, 2591.0], [80.3, 2595.0], [80.4, 2595.0], [80.5, 2597.0], [80.6, 2597.0], [80.7, 2598.0], [80.8, 2598.0], [80.9, 2598.0], [81.0, 2601.0], [81.1, 2601.0], [81.2, 2601.0], [81.3, 2603.0], [81.4, 2603.0], [81.5, 2605.0], [81.6, 2605.0], [81.7, 2608.0], [81.8, 2611.0], [81.9, 2611.0], [82.0, 2612.0], [82.1, 2615.0], [82.2, 2616.0], [82.3, 2616.0], [82.4, 2618.0], [82.5, 2618.0], [82.6, 2634.0], [82.7, 2634.0], [82.8, 2643.0], [82.9, 2651.0], [83.0, 2655.0], [83.1, 2655.0], [83.2, 2657.0], [83.3, 2658.0], [83.4, 2658.0], [83.5, 2667.0], [83.6, 2670.0], [83.7, 2670.0], [83.8, 2670.0], [83.9, 2673.0], [84.0, 2678.0], [84.1, 2679.0], [84.2, 2679.0], [84.3, 2679.0], [84.4, 2680.0], [84.5, 2682.0], [84.6, 2682.0], [84.7, 2693.0], [84.8, 2699.0], [84.9, 2711.0], [85.0, 2711.0], [85.1, 2715.0], [85.2, 2729.0], [85.3, 2729.0], [85.4, 2730.0], [85.5, 2732.0], [85.6, 2736.0], [85.7, 2736.0], [85.8, 2738.0], [85.9, 2741.0], [86.0, 2744.0], [86.1, 2744.0], [86.2, 2745.0], [86.3, 2748.0], [86.4, 2751.0], [86.5, 2751.0], [86.6, 2756.0], [86.7, 2757.0], [86.8, 2757.0], [86.9, 2758.0], [87.0, 2759.0], [87.1, 2765.0], [87.2, 2765.0], [87.3, 2768.0], [87.4, 2775.0], [87.5, 2775.0], [87.6, 2775.0], [87.7, 2777.0], [87.8, 2781.0], [87.9, 2783.0], [88.0, 2783.0], [88.1, 2791.0], [88.2, 2793.0], [88.3, 2798.0], [88.4, 2798.0], [88.5, 2804.0], [88.6, 2805.0], [88.7, 2805.0], [88.8, 2807.0], [88.9, 2807.0], [89.0, 2809.0], [89.1, 2809.0], [89.2, 2810.0], [89.3, 2811.0], [89.4, 2821.0], [89.5, 2821.0], [89.6, 2825.0], [89.7, 2828.0], [89.8, 2831.0], [89.9, 2831.0], [90.0, 2833.0], [90.1, 2833.0], [90.2, 2833.0], [90.3, 2833.0], [90.4, 2834.0], [90.5, 2839.0], [90.6, 2839.0], [90.7, 2840.0], [90.8, 2841.0], [90.9, 2843.0], [91.0, 2843.0], [91.1, 2845.0], [91.2, 2851.0], [91.3, 2853.0], [91.4, 2853.0], [91.5, 2859.0], [91.6, 2861.0], [91.7, 2861.0], [91.8, 2862.0], [91.9, 2868.0], [92.0, 2870.0], [92.1, 2870.0], [92.2, 2875.0], [92.3, 2877.0], [92.4, 2888.0], [92.5, 2888.0], [92.6, 2889.0], [92.7, 2930.0], [92.8, 2934.0], [92.9, 2934.0], [93.0, 2936.0], [93.1, 2938.0], [93.2, 2948.0], [93.3, 2948.0], [93.4, 2969.0], [93.5, 2976.0], [93.6, 2976.0], [93.7, 2977.0], [93.8, 2982.0], [93.9, 3005.0], [94.0, 3005.0], [94.1, 3006.0], [94.2, 3007.0], [94.3, 3008.0], [94.4, 3008.0], [94.5, 3030.0], [94.6, 3051.0], [94.7, 3056.0], [94.8, 3056.0], [94.9, 3067.0], [95.0, 3082.0], [95.1, 3082.0], [95.2, 3082.0], [95.3, 3093.0], [95.4, 3096.0], [95.5, 3096.0], [95.6, 3128.0], [95.7, 3131.0], [95.8, 3149.0], [95.9, 3149.0], [96.0, 3163.0], [96.1, 3173.0], [96.2, 3175.0], [96.3, 3175.0], [96.4, 3219.0], [96.5, 3241.0], [96.6, 3299.0], [96.7, 3299.0], [96.8, 3311.0], [96.9, 3343.0], [97.0, 3343.0], [97.1, 3429.0], [97.2, 3487.0], [97.3, 3492.0], [97.4, 3492.0], [97.5, 3505.0], [97.6, 3521.0], [97.7, 3523.0], [97.8, 3523.0], [97.9, 3524.0], [98.0, 3549.0], [98.1, 3569.0], [98.2, 3569.0], [98.3, 3678.0], [98.4, 3681.0], [98.5, 3681.0], [98.6, 3702.0], [98.7, 4058.0], [98.8, 4268.0], [98.9, 4268.0], [99.0, 4291.0], [99.1, 4329.0], [99.2, 4352.0], [99.3, 4352.0], [99.4, 4480.0], [99.5, 4522.0], [99.6, 4529.0], [99.7, 4529.0], [99.8, 4547.0], [99.9, 4661.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 800.0, "maxY": 51.0, "series": [{"data": [[800.0, 8.0], [900.0, 9.0], [1000.0, 14.0], [1100.0, 24.0], [1200.0, 45.0], [1300.0, 28.0], [1400.0, 30.0], [1500.0, 42.0], [1600.0, 40.0], [1700.0, 43.0], [1800.0, 47.0], [1900.0, 33.0], [2000.0, 30.0], [2100.0, 26.0], [2200.0, 37.0], [2300.0, 51.0], [2400.0, 39.0], [2500.0, 49.0], [2600.0, 29.0], [2800.0, 31.0], [2700.0, 26.0], [2900.0, 9.0], [3000.0, 12.0], [3100.0, 6.0], [3300.0, 2.0], [3200.0, 3.0], [3400.0, 3.0], [3500.0, 6.0], [3700.0, 1.0], [3600.0, 2.0], [4000.0, 1.0], [4200.0, 2.0], [4300.0, 2.0], [4500.0, 3.0], [4600.0, 1.0], [4400.0, 1.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 4600.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 158.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 577.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 158.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 577.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 11.764285714285714, "minX": 1.60238148E12, "maxY": 12.0, "series": [{"data": [[1.6023816E12, 11.764285714285714], [1.60238148E12, 12.0], [1.60238154E12, 12.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6023816E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 1148.0, "minX": 1.0, "maxY": 4329.0, "series": [{"data": [[8.0, 4291.0], [4.0, 1225.0], [2.0, 1616.0], [1.0, 2775.0], [9.0, 1155.0], [10.0, 1148.0], [5.0, 4058.0], [11.0, 4329.0], [12.0, 2060.0234806629837], [6.0, 1179.0], [3.0, 1169.0], [7.0, 1224.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[11.910204081632651, 2062.0761904761907]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 12.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 733.9666666666667, "minX": 1.60238148E12, "maxY": 839184.9333333333, "series": [{"data": [[1.6023816E12, 615877.8333333334], [1.60238148E12, 380711.4666666667], [1.60238154E12, 839184.9333333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6023816E12, 2102.766666666667], [1.60238148E12, 733.9666666666667], [1.60238154E12, 2686.3]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6023816E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 2013.5363128491622, "minX": 1.60238148E12, "maxY": 2258.113402061855, "series": [{"data": [[1.6023816E12, 2056.2250000000004], [1.60238148E12, 2258.113402061855], [1.60238154E12, 2013.5363128491622]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6023816E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 2012.435754189945, "minX": 1.60238148E12, "maxY": 2256.5670103092775, "series": [{"data": [[1.6023816E12, 2055.2071428571417], [1.60238148E12, 2256.5670103092775], [1.60238154E12, 2012.435754189945]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6023816E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.036312849162011177, "minX": 1.60238148E12, "maxY": 0.9278350515463915, "series": [{"data": [[1.6023816E12, 0.05000000000000002], [1.60238148E12, 0.9278350515463915], [1.60238154E12, 0.036312849162011177]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6023816E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 833.0, "minX": 1.60238148E12, "maxY": 4661.0, "series": [{"data": [[1.6023816E12, 4329.0], [1.60238148E12, 4522.0], [1.60238154E12, 4661.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6023816E12, 864.1739995980263], [1.60238148E12, 956.0], [1.60238154E12, 918.540999058485]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6023816E12, 865.6914001607895], [1.60238148E12, 956.0], [1.60238154E12, 922.095100376606]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6023816E12, 865.0169997990131], [1.60238148E12, 956.0], [1.60238154E12, 920.5154995292426]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.6023816E12, 859.0], [1.60238148E12, 956.0], [1.60238154E12, 833.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6023816E12, 2076.0], [1.60238148E12, 2275.0], [1.60238154E12, 1972.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6023816E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 1218.5, "minX": 2.0, "maxY": 2529.0, "series": [{"data": [[4.0, 2529.0], [8.0, 1655.0], [2.0, 2195.5], [9.0, 1469.5], [5.0, 2259.0], [10.0, 1218.5], [11.0, 1306.0], [6.0, 2218.0], [3.0, 2225.0], [7.0, 1805.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 11.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 1218.0, "minX": 2.0, "maxY": 2527.0, "series": [{"data": [[4.0, 2527.0], [8.0, 1654.5], [2.0, 2194.0], [9.0, 1469.5], [5.0, 2258.5], [10.0, 1218.0], [11.0, 1306.0], [6.0, 2217.0], [3.0, 2223.0], [7.0, 1804.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 11.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1.8166666666666667, "minX": 1.60238148E12, "maxY": 5.966666666666667, "series": [{"data": [[1.6023816E12, 4.466666666666667], [1.60238148E12, 1.8166666666666667], [1.60238154E12, 5.966666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6023816E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1.6166666666666667, "minX": 1.60238148E12, "maxY": 5.966666666666667, "series": [{"data": [[1.6023816E12, 4.666666666666667], [1.60238148E12, 1.6166666666666667], [1.60238154E12, 5.966666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6023816E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.6166666666666667, "minX": 1.60238148E12, "maxY": 5.966666666666667, "series": [{"data": [[1.6023816E12, 4.666666666666667], [1.60238148E12, 1.6166666666666667], [1.60238154E12, 5.966666666666667]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6023816E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.6166666666666667, "minX": 1.60238148E12, "maxY": 5.966666666666667, "series": [{"data": [[1.6023816E12, 4.666666666666667], [1.60238148E12, 1.6166666666666667], [1.60238154E12, 5.966666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6023816E12, "title": "Total Transactions Per Second"}},
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

