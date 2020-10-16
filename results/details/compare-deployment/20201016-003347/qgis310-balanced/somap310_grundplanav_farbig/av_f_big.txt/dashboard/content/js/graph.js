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
        data: {"result": {"minY": 504.0, "minX": 0.0, "maxY": 4309.0, "series": [{"data": [[0.0, 504.0], [0.1, 504.0], [0.2, 634.0], [0.3, 802.0], [0.4, 802.0], [0.5, 815.0], [0.6, 843.0], [0.7, 858.0], [0.8, 858.0], [0.9, 865.0], [1.0, 922.0], [1.1, 927.0], [1.2, 927.0], [1.3, 927.0], [1.4, 945.0], [1.5, 953.0], [1.6, 953.0], [1.7, 954.0], [1.8, 959.0], [1.9, 959.0], [2.0, 973.0], [2.1, 975.0], [2.2, 977.0], [2.3, 977.0], [2.4, 980.0], [2.5, 980.0], [2.6, 983.0], [2.7, 983.0], [2.8, 986.0], [2.9, 986.0], [3.0, 987.0], [3.1, 987.0], [3.2, 997.0], [3.3, 1001.0], [3.4, 1001.0], [3.5, 1006.0], [3.6, 1010.0], [3.7, 1016.0], [3.8, 1016.0], [3.9, 1030.0], [4.0, 1043.0], [4.1, 1049.0], [4.2, 1049.0], [4.3, 1052.0], [4.4, 1064.0], [4.5, 1084.0], [4.6, 1084.0], [4.7, 1107.0], [4.8, 1110.0], [4.9, 1115.0], [5.0, 1115.0], [5.1, 1122.0], [5.2, 1122.0], [5.3, 1122.0], [5.4, 1123.0], [5.5, 1123.0], [5.6, 1123.0], [5.7, 1123.0], [5.8, 1124.0], [5.9, 1127.0], [6.0, 1130.0], [6.1, 1130.0], [6.2, 1131.0], [6.3, 1132.0], [6.4, 1140.0], [6.5, 1140.0], [6.6, 1143.0], [6.7, 1145.0], [6.8, 1145.0], [6.9, 1150.0], [7.0, 1151.0], [7.1, 1152.0], [7.2, 1152.0], [7.3, 1153.0], [7.4, 1154.0], [7.5, 1154.0], [7.6, 1154.0], [7.7, 1155.0], [7.8, 1156.0], [7.9, 1156.0], [8.0, 1156.0], [8.1, 1156.0], [8.2, 1162.0], [8.3, 1181.0], [8.4, 1181.0], [8.5, 1184.0], [8.6, 1191.0], [8.7, 1191.0], [8.8, 1193.0], [8.9, 1195.0], [9.0, 1198.0], [9.1, 1198.0], [9.2, 1199.0], [9.3, 1209.0], [9.4, 1211.0], [9.5, 1211.0], [9.6, 1212.0], [9.7, 1212.0], [9.8, 1212.0], [9.9, 1212.0], [10.0, 1214.0], [10.1, 1217.0], [10.2, 1217.0], [10.3, 1221.0], [10.4, 1223.0], [10.5, 1229.0], [10.6, 1229.0], [10.7, 1234.0], [10.8, 1236.0], [10.9, 1242.0], [11.0, 1242.0], [11.1, 1244.0], [11.2, 1244.0], [11.3, 1247.0], [11.4, 1247.0], [11.5, 1247.0], [11.6, 1248.0], [11.7, 1248.0], [11.8, 1250.0], [11.9, 1250.0], [12.0, 1255.0], [12.1, 1255.0], [12.2, 1257.0], [12.3, 1258.0], [12.4, 1259.0], [12.5, 1259.0], [12.6, 1263.0], [12.7, 1269.0], [12.8, 1275.0], [12.9, 1275.0], [13.0, 1276.0], [13.1, 1278.0], [13.2, 1278.0], [13.3, 1278.0], [13.4, 1291.0], [13.5, 1296.0], [13.6, 1296.0], [13.7, 1296.0], [13.8, 1302.0], [13.9, 1302.0], [14.0, 1302.0], [14.1, 1302.0], [14.2, 1303.0], [14.3, 1309.0], [14.4, 1309.0], [14.5, 1312.0], [14.6, 1313.0], [14.7, 1313.0], [14.8, 1313.0], [14.9, 1316.0], [15.0, 1330.0], [15.1, 1330.0], [15.2, 1340.0], [15.3, 1342.0], [15.4, 1343.0], [15.5, 1343.0], [15.6, 1348.0], [15.7, 1353.0], [15.8, 1355.0], [15.9, 1355.0], [16.0, 1359.0], [16.1, 1359.0], [16.2, 1365.0], [16.3, 1365.0], [16.4, 1367.0], [16.5, 1372.0], [16.6, 1372.0], [16.7, 1372.0], [16.8, 1373.0], [16.9, 1376.0], [17.0, 1376.0], [17.1, 1378.0], [17.2, 1381.0], [17.3, 1393.0], [17.4, 1393.0], [17.5, 1396.0], [17.6, 1402.0], [17.7, 1404.0], [17.8, 1404.0], [17.9, 1404.0], [18.0, 1408.0], [18.1, 1410.0], [18.2, 1410.0], [18.3, 1411.0], [18.4, 1412.0], [18.5, 1412.0], [18.6, 1421.0], [18.7, 1425.0], [18.8, 1429.0], [18.9, 1429.0], [19.0, 1429.0], [19.1, 1431.0], [19.2, 1436.0], [19.3, 1436.0], [19.4, 1441.0], [19.5, 1441.0], [19.6, 1446.0], [19.7, 1446.0], [19.8, 1450.0], [19.9, 1451.0], [20.0, 1452.0], [20.1, 1452.0], [20.2, 1462.0], [20.3, 1465.0], [20.4, 1465.0], [20.5, 1478.0], [20.6, 1479.0], [20.7, 1481.0], [20.8, 1481.0], [20.9, 1489.0], [21.0, 1490.0], [21.1, 1495.0], [21.2, 1495.0], [21.3, 1499.0], [21.4, 1501.0], [21.5, 1503.0], [21.6, 1503.0], [21.7, 1504.0], [21.8, 1507.0], [21.9, 1507.0], [22.0, 1509.0], [22.1, 1511.0], [22.2, 1511.0], [22.3, 1511.0], [22.4, 1511.0], [22.5, 1517.0], [22.6, 1523.0], [22.7, 1523.0], [22.8, 1530.0], [22.9, 1539.0], [23.0, 1546.0], [23.1, 1546.0], [23.2, 1547.0], [23.3, 1548.0], [23.4, 1548.0], [23.5, 1551.0], [23.6, 1551.0], [23.7, 1558.0], [23.8, 1558.0], [23.9, 1560.0], [24.0, 1578.0], [24.1, 1583.0], [24.2, 1583.0], [24.3, 1589.0], [24.4, 1591.0], [24.5, 1596.0], [24.6, 1596.0], [24.7, 1596.0], [24.8, 1597.0], [24.9, 1598.0], [25.0, 1598.0], [25.1, 1599.0], [25.2, 1600.0], [25.3, 1600.0], [25.4, 1600.0], [25.5, 1600.0], [25.6, 1600.0], [25.7, 1600.0], [25.8, 1601.0], [25.9, 1602.0], [26.0, 1603.0], [26.1, 1603.0], [26.2, 1603.0], [26.3, 1614.0], [26.4, 1615.0], [26.5, 1615.0], [26.6, 1618.0], [26.7, 1618.0], [26.8, 1618.0], [26.9, 1641.0], [27.0, 1641.0], [27.1, 1641.0], [27.2, 1641.0], [27.3, 1641.0], [27.4, 1642.0], [27.5, 1643.0], [27.6, 1643.0], [27.7, 1647.0], [27.8, 1653.0], [27.9, 1658.0], [28.0, 1658.0], [28.1, 1661.0], [28.2, 1662.0], [28.3, 1667.0], [28.4, 1667.0], [28.5, 1668.0], [28.6, 1671.0], [28.7, 1671.0], [28.8, 1672.0], [28.9, 1677.0], [29.0, 1682.0], [29.1, 1682.0], [29.2, 1687.0], [29.3, 1689.0], [29.4, 1693.0], [29.5, 1693.0], [29.6, 1694.0], [29.7, 1699.0], [29.8, 1702.0], [29.9, 1702.0], [30.0, 1705.0], [30.1, 1706.0], [30.2, 1706.0], [30.3, 1713.0], [30.4, 1715.0], [30.5, 1717.0], [30.6, 1717.0], [30.7, 1717.0], [30.8, 1723.0], [30.9, 1723.0], [31.0, 1723.0], [31.1, 1727.0], [31.2, 1728.0], [31.3, 1729.0], [31.4, 1729.0], [31.5, 1736.0], [31.6, 1740.0], [31.7, 1740.0], [31.8, 1747.0], [31.9, 1769.0], [32.0, 1770.0], [32.1, 1770.0], [32.2, 1781.0], [32.3, 1790.0], [32.4, 1797.0], [32.5, 1797.0], [32.6, 1801.0], [32.7, 1807.0], [32.8, 1808.0], [32.9, 1808.0], [33.0, 1816.0], [33.1, 1820.0], [33.2, 1821.0], [33.3, 1821.0], [33.4, 1826.0], [33.5, 1828.0], [33.6, 1828.0], [33.7, 1830.0], [33.8, 1830.0], [33.9, 1831.0], [34.0, 1831.0], [34.1, 1834.0], [34.2, 1834.0], [34.3, 1836.0], [34.4, 1836.0], [34.5, 1838.0], [34.6, 1841.0], [34.7, 1841.0], [34.8, 1841.0], [34.9, 1842.0], [35.0, 1843.0], [35.1, 1843.0], [35.2, 1844.0], [35.3, 1847.0], [35.4, 1848.0], [35.5, 1848.0], [35.6, 1850.0], [35.7, 1851.0], [35.8, 1856.0], [35.9, 1856.0], [36.0, 1868.0], [36.1, 1869.0], [36.2, 1876.0], [36.3, 1876.0], [36.4, 1879.0], [36.5, 1883.0], [36.6, 1885.0], [36.7, 1885.0], [36.8, 1886.0], [36.9, 1887.0], [37.0, 1887.0], [37.1, 1888.0], [37.2, 1889.0], [37.3, 1890.0], [37.4, 1890.0], [37.5, 1894.0], [37.6, 1896.0], [37.7, 1897.0], [37.8, 1897.0], [37.9, 1898.0], [38.0, 1899.0], [38.1, 1899.0], [38.2, 1899.0], [38.3, 1900.0], [38.4, 1903.0], [38.5, 1903.0], [38.6, 1907.0], [38.7, 1907.0], [38.8, 1912.0], [38.9, 1912.0], [39.0, 1913.0], [39.1, 1930.0], [39.2, 1935.0], [39.3, 1935.0], [39.4, 1938.0], [39.5, 1942.0], [39.6, 1944.0], [39.7, 1944.0], [39.8, 1945.0], [39.9, 1948.0], [40.0, 1948.0], [40.1, 1948.0], [40.2, 1953.0], [40.3, 1953.0], [40.4, 1953.0], [40.5, 1956.0], [40.6, 1958.0], [40.7, 1961.0], [40.8, 1961.0], [40.9, 1966.0], [41.0, 1968.0], [41.1, 1970.0], [41.2, 1970.0], [41.3, 1973.0], [41.4, 1974.0], [41.5, 1975.0], [41.6, 1975.0], [41.7, 1979.0], [41.8, 1983.0], [41.9, 1983.0], [42.0, 1986.0], [42.1, 1986.0], [42.2, 1992.0], [42.3, 1992.0], [42.4, 1997.0], [42.5, 2004.0], [42.6, 2006.0], [42.7, 2006.0], [42.8, 2007.0], [42.9, 2007.0], [43.0, 2011.0], [43.1, 2011.0], [43.2, 2011.0], [43.3, 2013.0], [43.4, 2013.0], [43.5, 2019.0], [43.6, 2020.0], [43.7, 2023.0], [43.8, 2023.0], [43.9, 2024.0], [44.0, 2025.0], [44.1, 2025.0], [44.2, 2025.0], [44.3, 2026.0], [44.4, 2026.0], [44.5, 2028.0], [44.6, 2028.0], [44.7, 2030.0], [44.8, 2031.0], [44.9, 2034.0], [45.0, 2034.0], [45.1, 2035.0], [45.2, 2036.0], [45.3, 2036.0], [45.4, 2041.0], [45.5, 2041.0], [45.6, 2043.0], [45.7, 2043.0], [45.8, 2045.0], [45.9, 2047.0], [46.0, 2049.0], [46.1, 2049.0], [46.2, 2050.0], [46.3, 2054.0], [46.4, 2055.0], [46.5, 2055.0], [46.6, 2063.0], [46.7, 2063.0], [46.8, 2063.0], [46.9, 2067.0], [47.0, 2068.0], [47.1, 2075.0], [47.2, 2075.0], [47.3, 2075.0], [47.4, 2075.0], [47.5, 2076.0], [47.6, 2076.0], [47.7, 2077.0], [47.8, 2079.0], [47.9, 2079.0], [48.0, 2079.0], [48.1, 2082.0], [48.2, 2082.0], [48.3, 2083.0], [48.4, 2083.0], [48.5, 2084.0], [48.6, 2084.0], [48.7, 2084.0], [48.8, 2085.0], [48.9, 2085.0], [49.0, 2095.0], [49.1, 2095.0], [49.2, 2095.0], [49.3, 2095.0], [49.4, 2098.0], [49.5, 2098.0], [49.6, 2102.0], [49.7, 2103.0], [49.8, 2105.0], [49.9, 2105.0], [50.0, 2109.0], [50.1, 2118.0], [50.2, 2118.0], [50.3, 2119.0], [50.4, 2121.0], [50.5, 2123.0], [50.6, 2123.0], [50.7, 2125.0], [50.8, 2126.0], [50.9, 2127.0], [51.0, 2127.0], [51.1, 2134.0], [51.2, 2134.0], [51.3, 2140.0], [51.4, 2140.0], [51.5, 2141.0], [51.6, 2142.0], [51.7, 2142.0], [51.8, 2143.0], [51.9, 2143.0], [52.0, 2148.0], [52.1, 2148.0], [52.2, 2148.0], [52.3, 2149.0], [52.4, 2150.0], [52.5, 2150.0], [52.6, 2150.0], [52.7, 2151.0], [52.8, 2153.0], [52.9, 2153.0], [53.0, 2154.0], [53.1, 2155.0], [53.2, 2155.0], [53.3, 2155.0], [53.4, 2157.0], [53.5, 2159.0], [53.6, 2159.0], [53.7, 2160.0], [53.8, 2160.0], [53.9, 2164.0], [54.0, 2164.0], [54.1, 2164.0], [54.2, 2164.0], [54.3, 2165.0], [54.4, 2165.0], [54.5, 2165.0], [54.6, 2165.0], [54.7, 2169.0], [54.8, 2169.0], [54.9, 2169.0], [55.0, 2171.0], [55.1, 2171.0], [55.2, 2174.0], [55.3, 2175.0], [55.4, 2177.0], [55.5, 2177.0], [55.6, 2178.0], [55.7, 2182.0], [55.8, 2182.0], [55.9, 2182.0], [56.0, 2183.0], [56.1, 2188.0], [56.2, 2189.0], [56.3, 2189.0], [56.4, 2192.0], [56.5, 2192.0], [56.6, 2192.0], [56.7, 2192.0], [56.8, 2192.0], [56.9, 2193.0], [57.0, 2193.0], [57.1, 2198.0], [57.2, 2199.0], [57.3, 2202.0], [57.4, 2202.0], [57.5, 2209.0], [57.6, 2211.0], [57.7, 2214.0], [57.8, 2214.0], [57.9, 2215.0], [58.0, 2217.0], [58.1, 2218.0], [58.2, 2218.0], [58.3, 2221.0], [58.4, 2221.0], [58.5, 2221.0], [58.6, 2224.0], [58.7, 2224.0], [58.8, 2226.0], [58.9, 2226.0], [59.0, 2226.0], [59.1, 2227.0], [59.2, 2230.0], [59.3, 2230.0], [59.4, 2234.0], [59.5, 2235.0], [59.6, 2235.0], [59.7, 2235.0], [59.8, 2237.0], [59.9, 2238.0], [60.0, 2241.0], [60.1, 2241.0], [60.2, 2245.0], [60.3, 2247.0], [60.4, 2247.0], [60.5, 2254.0], [60.6, 2259.0], [60.7, 2261.0], [60.8, 2261.0], [60.9, 2263.0], [61.0, 2265.0], [61.1, 2265.0], [61.2, 2265.0], [61.3, 2268.0], [61.4, 2271.0], [61.5, 2274.0], [61.6, 2274.0], [61.7, 2275.0], [61.8, 2275.0], [61.9, 2275.0], [62.0, 2284.0], [62.1, 2284.0], [62.2, 2286.0], [62.3, 2286.0], [62.4, 2287.0], [62.5, 2291.0], [62.6, 2295.0], [62.7, 2295.0], [62.8, 2296.0], [62.9, 2297.0], [63.0, 2298.0], [63.1, 2298.0], [63.2, 2299.0], [63.3, 2299.0], [63.4, 2299.0], [63.5, 2300.0], [63.6, 2306.0], [63.7, 2307.0], [63.8, 2307.0], [63.9, 2307.0], [64.0, 2312.0], [64.1, 2318.0], [64.2, 2318.0], [64.3, 2321.0], [64.4, 2323.0], [64.5, 2323.0], [64.6, 2323.0], [64.7, 2325.0], [64.8, 2325.0], [64.9, 2326.0], [65.0, 2326.0], [65.1, 2326.0], [65.2, 2327.0], [65.3, 2327.0], [65.4, 2336.0], [65.5, 2342.0], [65.6, 2342.0], [65.7, 2342.0], [65.8, 2344.0], [65.9, 2344.0], [66.0, 2345.0], [66.1, 2345.0], [66.2, 2349.0], [66.3, 2350.0], [66.4, 2350.0], [66.5, 2350.0], [66.6, 2354.0], [66.7, 2354.0], [66.8, 2354.0], [66.9, 2356.0], [67.0, 2357.0], [67.1, 2357.0], [67.2, 2357.0], [67.3, 2358.0], [67.4, 2359.0], [67.5, 2359.0], [67.6, 2359.0], [67.7, 2359.0], [67.8, 2361.0], [67.9, 2364.0], [68.0, 2364.0], [68.1, 2365.0], [68.2, 2365.0], [68.3, 2366.0], [68.4, 2366.0], [68.5, 2366.0], [68.6, 2367.0], [68.7, 2367.0], [68.8, 2368.0], [68.9, 2369.0], [69.0, 2371.0], [69.1, 2371.0], [69.2, 2371.0], [69.3, 2371.0], [69.4, 2371.0], [69.5, 2371.0], [69.6, 2372.0], [69.7, 2376.0], [69.8, 2376.0], [69.9, 2376.0], [70.0, 2378.0], [70.1, 2380.0], [70.2, 2380.0], [70.3, 2381.0], [70.4, 2381.0], [70.5, 2382.0], [70.6, 2382.0], [70.7, 2383.0], [70.8, 2387.0], [70.9, 2387.0], [71.0, 2387.0], [71.1, 2390.0], [71.2, 2390.0], [71.3, 2392.0], [71.4, 2392.0], [71.5, 2393.0], [71.6, 2393.0], [71.7, 2393.0], [71.8, 2394.0], [71.9, 2396.0], [72.0, 2396.0], [72.1, 2396.0], [72.2, 2396.0], [72.3, 2398.0], [72.4, 2399.0], [72.5, 2399.0], [72.6, 2401.0], [72.7, 2402.0], [72.8, 2404.0], [72.9, 2404.0], [73.0, 2405.0], [73.1, 2412.0], [73.2, 2413.0], [73.3, 2413.0], [73.4, 2415.0], [73.5, 2416.0], [73.6, 2416.0], [73.7, 2416.0], [73.8, 2416.0], [73.9, 2417.0], [74.0, 2417.0], [74.1, 2417.0], [74.2, 2418.0], [74.3, 2421.0], [74.4, 2421.0], [74.5, 2422.0], [74.6, 2424.0], [74.7, 2424.0], [74.8, 2424.0], [74.9, 2426.0], [75.0, 2427.0], [75.1, 2427.0], [75.2, 2433.0], [75.3, 2437.0], [75.4, 2437.0], [75.5, 2437.0], [75.6, 2440.0], [75.7, 2442.0], [75.8, 2443.0], [75.9, 2443.0], [76.0, 2445.0], [76.1, 2446.0], [76.2, 2446.0], [76.3, 2446.0], [76.4, 2448.0], [76.5, 2448.0], [76.6, 2449.0], [76.7, 2449.0], [76.8, 2453.0], [76.9, 2455.0], [77.0, 2455.0], [77.1, 2460.0], [77.2, 2463.0], [77.3, 2464.0], [77.4, 2464.0], [77.5, 2465.0], [77.6, 2467.0], [77.7, 2467.0], [77.8, 2467.0], [77.9, 2469.0], [78.0, 2470.0], [78.1, 2471.0], [78.2, 2471.0], [78.3, 2476.0], [78.4, 2476.0], [78.5, 2476.0], [78.6, 2476.0], [78.7, 2482.0], [78.8, 2484.0], [78.9, 2484.0], [79.0, 2484.0], [79.1, 2490.0], [79.2, 2491.0], [79.3, 2491.0], [79.4, 2495.0], [79.5, 2495.0], [79.6, 2496.0], [79.7, 2496.0], [79.8, 2498.0], [79.9, 2502.0], [80.0, 2505.0], [80.1, 2505.0], [80.2, 2510.0], [80.3, 2512.0], [80.4, 2512.0], [80.5, 2512.0], [80.6, 2514.0], [80.7, 2514.0], [80.8, 2514.0], [80.9, 2514.0], [81.0, 2514.0], [81.1, 2516.0], [81.2, 2516.0], [81.3, 2517.0], [81.4, 2518.0], [81.5, 2519.0], [81.6, 2519.0], [81.7, 2521.0], [81.8, 2523.0], [81.9, 2523.0], [82.0, 2524.0], [82.1, 2531.0], [82.2, 2531.0], [82.3, 2531.0], [82.4, 2533.0], [82.5, 2551.0], [82.6, 2557.0], [82.7, 2557.0], [82.8, 2559.0], [82.9, 2566.0], [83.0, 2572.0], [83.1, 2572.0], [83.2, 2572.0], [83.3, 2575.0], [83.4, 2575.0], [83.5, 2578.0], [83.6, 2578.0], [83.7, 2581.0], [83.8, 2581.0], [83.9, 2583.0], [84.0, 2588.0], [84.1, 2590.0], [84.2, 2590.0], [84.3, 2591.0], [84.4, 2594.0], [84.5, 2596.0], [84.6, 2596.0], [84.7, 2600.0], [84.8, 2606.0], [84.9, 2606.0], [85.0, 2606.0], [85.1, 2606.0], [85.2, 2608.0], [85.3, 2608.0], [85.4, 2618.0], [85.5, 2621.0], [85.6, 2623.0], [85.7, 2623.0], [85.8, 2633.0], [85.9, 2642.0], [86.0, 2642.0], [86.1, 2642.0], [86.2, 2644.0], [86.3, 2649.0], [86.4, 2649.0], [86.5, 2649.0], [86.6, 2654.0], [86.7, 2654.0], [86.8, 2654.0], [86.9, 2655.0], [87.0, 2656.0], [87.1, 2657.0], [87.2, 2657.0], [87.3, 2658.0], [87.4, 2660.0], [87.5, 2660.0], [87.6, 2660.0], [87.7, 2661.0], [87.8, 2666.0], [87.9, 2670.0], [88.0, 2670.0], [88.1, 2681.0], [88.2, 2681.0], [88.3, 2685.0], [88.4, 2685.0], [88.5, 2685.0], [88.6, 2687.0], [88.7, 2687.0], [88.8, 2690.0], [88.9, 2691.0], [89.0, 2693.0], [89.1, 2693.0], [89.2, 2693.0], [89.3, 2695.0], [89.4, 2705.0], [89.5, 2705.0], [89.6, 2706.0], [89.7, 2719.0], [89.8, 2729.0], [89.9, 2729.0], [90.0, 2729.0], [90.1, 2746.0], [90.2, 2746.0], [90.3, 2750.0], [90.4, 2758.0], [90.5, 2762.0], [90.6, 2762.0], [90.7, 2766.0], [90.8, 2768.0], [90.9, 2774.0], [91.0, 2774.0], [91.1, 2788.0], [91.2, 2791.0], [91.3, 2796.0], [91.4, 2796.0], [91.5, 2799.0], [91.6, 2811.0], [91.7, 2811.0], [91.8, 2811.0], [91.9, 2813.0], [92.0, 2815.0], [92.1, 2815.0], [92.2, 2821.0], [92.3, 2823.0], [92.4, 2823.0], [92.5, 2823.0], [92.6, 2827.0], [92.7, 2843.0], [92.8, 2861.0], [92.9, 2861.0], [93.0, 2867.0], [93.1, 2873.0], [93.2, 2887.0], [93.3, 2887.0], [93.4, 2897.0], [93.5, 2904.0], [93.6, 2904.0], [93.7, 2915.0], [93.8, 2916.0], [93.9, 2929.0], [94.0, 2929.0], [94.1, 2933.0], [94.2, 2943.0], [94.3, 2944.0], [94.4, 2944.0], [94.5, 2976.0], [94.6, 2977.0], [94.7, 3007.0], [94.8, 3007.0], [94.9, 3024.0], [95.0, 3025.0], [95.1, 3025.0], [95.2, 3031.0], [95.3, 3032.0], [95.4, 3068.0], [95.5, 3068.0], [95.6, 3092.0], [95.7, 3125.0], [95.8, 3130.0], [95.9, 3130.0], [96.0, 3131.0], [96.1, 3132.0], [96.2, 3142.0], [96.3, 3142.0], [96.4, 3172.0], [96.5, 3173.0], [96.6, 3211.0], [96.7, 3211.0], [96.8, 3218.0], [96.9, 3328.0], [97.0, 3328.0], [97.1, 3356.0], [97.2, 3382.0], [97.3, 3470.0], [97.4, 3470.0], [97.5, 3558.0], [97.6, 3656.0], [97.7, 3658.0], [97.8, 3658.0], [97.9, 3667.0], [98.0, 3695.0], [98.1, 3765.0], [98.2, 3765.0], [98.3, 3801.0], [98.4, 3804.0], [98.5, 3804.0], [98.6, 3902.0], [98.7, 3999.0], [98.8, 4001.0], [98.9, 4001.0], [99.0, 4006.0], [99.1, 4050.0], [99.2, 4096.0], [99.3, 4096.0], [99.4, 4167.0], [99.5, 4202.0], [99.6, 4256.0], [99.7, 4256.0], [99.8, 4266.0], [99.9, 4309.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 500.0, "maxY": 67.0, "series": [{"data": [[600.0, 1.0], [800.0, 5.0], [900.0, 17.0], [1000.0, 10.0], [1100.0, 34.0], [1200.0, 33.0], [1300.0, 28.0], [1400.0, 28.0], [1500.0, 28.0], [1600.0, 34.0], [1700.0, 20.0], [1800.0, 42.0], [1900.0, 31.0], [2000.0, 52.0], [2100.0, 57.0], [2200.0, 45.0], [2300.0, 67.0], [2400.0, 54.0], [2500.0, 35.0], [2600.0, 35.0], [2800.0, 14.0], [2700.0, 16.0], [2900.0, 9.0], [3000.0, 7.0], [3100.0, 7.0], [3300.0, 3.0], [3200.0, 2.0], [3400.0, 1.0], [3500.0, 1.0], [3600.0, 4.0], [3700.0, 1.0], [3800.0, 2.0], [3900.0, 2.0], [4000.0, 4.0], [4200.0, 3.0], [4300.0, 1.0], [4100.0, 1.0], [500.0, 1.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 4300.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 157.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 578.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 157.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 578.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 11.785714285714286, "minX": 1.60281336E12, "maxY": 12.0, "series": [{"data": [[1.60281348E12, 11.785714285714286], [1.60281342E12, 12.0], [1.60281336E12, 12.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60281348E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 1154.0, "minX": 1.0, "maxY": 2344.0, "series": [{"data": [[8.0, 1191.0], [4.0, 1615.0], [2.0, 1600.0], [1.0, 2011.0], [9.0, 1597.0], [10.0, 1198.0], [5.0, 1223.0], [11.0, 2344.0], [12.0, 2068.363259668509], [6.0, 1154.0], [3.0, 1199.0], [7.0, 1600.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[11.910204081632651, 2060.172789115647]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 12.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 536.85, "minX": 1.60281336E12, "maxY": 874164.9166666666, "series": [{"data": [[1.60281348E12, 698336.6166666667], [1.60281342E12, 874164.9166666666], [1.60281336E12, 263269.81666666665]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60281348E12, 2314.616666666667], [1.60281342E12, 2671.5666666666666], [1.60281336E12, 536.85]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60281348E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 2020.8732394366195, "minX": 1.60281336E12, "maxY": 2094.0389610389625, "series": [{"data": [[1.60281348E12, 2094.0389610389625], [1.60281342E12, 2038.7106741573032], [1.60281336E12, 2020.8732394366195]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60281348E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 2019.6338028169012, "minX": 1.60281336E12, "maxY": 2092.957792207794, "series": [{"data": [[1.60281348E12, 2092.957792207794], [1.60281342E12, 2037.5449438202243], [1.60281336E12, 2019.6338028169012]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60281348E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.03896103896103896, "minX": 1.60281336E12, "maxY": 1.5492957746478873, "series": [{"data": [[1.60281348E12, 0.03896103896103896], [1.60281342E12, 0.04213483146067416], [1.60281336E12, 1.5492957746478873]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60281348E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 504.0, "minX": 1.60281336E12, "maxY": 4309.0, "series": [{"data": [[1.60281348E12, 4167.0], [1.60281342E12, 4309.0], [1.60281336E12, 4256.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60281348E12, 927.0], [1.60281342E12, 804.7689988934994], [1.60281336E12, 945.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60281348E12, 931.9053024458885], [1.60281342E12, 808.9459004426003], [1.60281336E12, 945.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60281348E12, 927.0], [1.60281342E12, 807.0894994467496], [1.60281336E12, 945.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60281348E12, 858.0], [1.60281342E12, 504.0], [1.60281336E12, 945.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60281348E12, 2166.5], [1.60281342E12, 2083.0], [1.60281336E12, 1705.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60281348E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 1132.0, "minX": 1.0, "maxY": 2347.5, "series": [{"data": [[2.0, 2130.0], [4.0, 2347.5], [8.0, 1509.0], [1.0, 2011.0], [9.0, 1614.0], [5.0, 2259.0], [10.0, 1431.0], [11.0, 1132.0], [3.0, 2310.0], [6.0, 2264.0], [7.0, 1600.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 11.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 1132.0, "minX": 1.0, "maxY": 2346.5, "series": [{"data": [[2.0, 2128.0], [4.0, 2346.5], [8.0, 1509.0], [1.0, 2011.0], [9.0, 1614.0], [5.0, 2259.0], [10.0, 1430.5], [11.0, 1132.0], [3.0, 2309.5], [6.0, 2263.0], [7.0, 1600.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 11.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1.3833333333333333, "minX": 1.60281336E12, "maxY": 5.933333333333334, "series": [{"data": [[1.60281348E12, 4.933333333333334], [1.60281342E12, 5.933333333333334], [1.60281336E12, 1.3833333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60281348E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1.1833333333333333, "minX": 1.60281336E12, "maxY": 5.933333333333334, "series": [{"data": [[1.60281348E12, 5.133333333333334], [1.60281342E12, 5.933333333333334], [1.60281336E12, 1.1833333333333333]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60281348E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.1833333333333333, "minX": 1.60281336E12, "maxY": 5.933333333333334, "series": [{"data": [[1.60281348E12, 5.133333333333334], [1.60281342E12, 5.933333333333334], [1.60281336E12, 1.1833333333333333]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60281348E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.1833333333333333, "minX": 1.60281336E12, "maxY": 5.933333333333334, "series": [{"data": [[1.60281348E12, 5.133333333333334], [1.60281342E12, 5.933333333333334], [1.60281336E12, 1.1833333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60281348E12, "title": "Total Transactions Per Second"}},
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

