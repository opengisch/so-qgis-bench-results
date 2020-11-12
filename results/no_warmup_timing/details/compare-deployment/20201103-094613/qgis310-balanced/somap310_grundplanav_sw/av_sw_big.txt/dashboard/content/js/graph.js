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
        data: {"result": {"minY": 663.0, "minX": 0.0, "maxY": 9038.0, "series": [{"data": [[0.0, 663.0], [0.1, 714.0], [0.2, 754.0], [0.3, 761.0], [0.4, 767.0], [0.5, 774.0], [0.6, 782.0], [0.7, 787.0], [0.8, 792.0], [0.9, 795.0], [1.0, 801.0], [1.1, 804.0], [1.2, 808.0], [1.3, 811.0], [1.4, 812.0], [1.5, 813.0], [1.6, 818.0], [1.7, 821.0], [1.8, 823.0], [1.9, 824.0], [2.0, 826.0], [2.1, 827.0], [2.2, 828.0], [2.3, 829.0], [2.4, 831.0], [2.5, 833.0], [2.6, 836.0], [2.7, 840.0], [2.8, 844.0], [2.9, 845.0], [3.0, 846.0], [3.1, 847.0], [3.2, 849.0], [3.3, 851.0], [3.4, 853.0], [3.5, 855.0], [3.6, 856.0], [3.7, 857.0], [3.8, 858.0], [3.9, 860.0], [4.0, 862.0], [4.1, 863.0], [4.2, 864.0], [4.3, 865.0], [4.4, 868.0], [4.5, 870.0], [4.6, 871.0], [4.7, 875.0], [4.8, 875.0], [4.9, 876.0], [5.0, 878.0], [5.1, 879.0], [5.2, 880.0], [5.3, 882.0], [5.4, 884.0], [5.5, 885.0], [5.6, 886.0], [5.7, 888.0], [5.8, 889.0], [5.9, 891.0], [6.0, 895.0], [6.1, 897.0], [6.2, 898.0], [6.3, 898.0], [6.4, 900.0], [6.5, 901.0], [6.6, 904.0], [6.7, 905.0], [6.8, 907.0], [6.9, 910.0], [7.0, 911.0], [7.1, 912.0], [7.2, 914.0], [7.3, 915.0], [7.4, 916.0], [7.5, 919.0], [7.6, 920.0], [7.7, 921.0], [7.8, 923.0], [7.9, 925.0], [8.0, 927.0], [8.1, 929.0], [8.2, 931.0], [8.3, 933.0], [8.4, 936.0], [8.5, 937.0], [8.6, 938.0], [8.7, 940.0], [8.8, 944.0], [8.9, 947.0], [9.0, 951.0], [9.1, 952.0], [9.2, 953.0], [9.3, 956.0], [9.4, 958.0], [9.5, 959.0], [9.6, 961.0], [9.7, 964.0], [9.8, 968.0], [9.9, 970.0], [10.0, 975.0], [10.1, 979.0], [10.2, 983.0], [10.3, 986.0], [10.4, 987.0], [10.5, 989.0], [10.6, 994.0], [10.7, 999.0], [10.8, 1004.0], [10.9, 1007.0], [11.0, 1010.0], [11.1, 1016.0], [11.2, 1020.0], [11.3, 1023.0], [11.4, 1029.0], [11.5, 1032.0], [11.6, 1036.0], [11.7, 1040.0], [11.8, 1043.0], [11.9, 1047.0], [12.0, 1049.0], [12.1, 1052.0], [12.2, 1057.0], [12.3, 1061.0], [12.4, 1063.0], [12.5, 1065.0], [12.6, 1071.0], [12.7, 1080.0], [12.8, 1083.0], [12.9, 1090.0], [13.0, 1093.0], [13.1, 1096.0], [13.2, 1098.0], [13.3, 1099.0], [13.4, 1103.0], [13.5, 1108.0], [13.6, 1110.0], [13.7, 1118.0], [13.8, 1122.0], [13.9, 1125.0], [14.0, 1127.0], [14.1, 1129.0], [14.2, 1132.0], [14.3, 1137.0], [14.4, 1142.0], [14.5, 1147.0], [14.6, 1150.0], [14.7, 1154.0], [14.8, 1160.0], [14.9, 1164.0], [15.0, 1165.0], [15.1, 1171.0], [15.2, 1175.0], [15.3, 1180.0], [15.4, 1183.0], [15.5, 1191.0], [15.6, 1195.0], [15.7, 1200.0], [15.8, 1201.0], [15.9, 1204.0], [16.0, 1209.0], [16.1, 1211.0], [16.2, 1212.0], [16.3, 1215.0], [16.4, 1217.0], [16.5, 1221.0], [16.6, 1225.0], [16.7, 1226.0], [16.8, 1229.0], [16.9, 1232.0], [17.0, 1235.0], [17.1, 1236.0], [17.2, 1238.0], [17.3, 1241.0], [17.4, 1244.0], [17.5, 1246.0], [17.6, 1248.0], [17.7, 1252.0], [17.8, 1254.0], [17.9, 1257.0], [18.0, 1259.0], [18.1, 1262.0], [18.2, 1264.0], [18.3, 1266.0], [18.4, 1267.0], [18.5, 1269.0], [18.6, 1271.0], [18.7, 1274.0], [18.8, 1276.0], [18.9, 1278.0], [19.0, 1282.0], [19.1, 1283.0], [19.2, 1285.0], [19.3, 1287.0], [19.4, 1288.0], [19.5, 1293.0], [19.6, 1296.0], [19.7, 1299.0], [19.8, 1301.0], [19.9, 1304.0], [20.0, 1308.0], [20.1, 1311.0], [20.2, 1314.0], [20.3, 1318.0], [20.4, 1319.0], [20.5, 1321.0], [20.6, 1324.0], [20.7, 1326.0], [20.8, 1331.0], [20.9, 1333.0], [21.0, 1338.0], [21.1, 1340.0], [21.2, 1344.0], [21.3, 1350.0], [21.4, 1355.0], [21.5, 1356.0], [21.6, 1361.0], [21.7, 1365.0], [21.8, 1366.0], [21.9, 1368.0], [22.0, 1371.0], [22.1, 1374.0], [22.2, 1378.0], [22.3, 1379.0], [22.4, 1382.0], [22.5, 1387.0], [22.6, 1389.0], [22.7, 1394.0], [22.8, 1396.0], [22.9, 1400.0], [23.0, 1404.0], [23.1, 1406.0], [23.2, 1412.0], [23.3, 1414.0], [23.4, 1419.0], [23.5, 1420.0], [23.6, 1423.0], [23.7, 1427.0], [23.8, 1431.0], [23.9, 1434.0], [24.0, 1439.0], [24.1, 1441.0], [24.2, 1444.0], [24.3, 1446.0], [24.4, 1450.0], [24.5, 1456.0], [24.6, 1459.0], [24.7, 1462.0], [24.8, 1466.0], [24.9, 1469.0], [25.0, 1471.0], [25.1, 1474.0], [25.2, 1478.0], [25.3, 1482.0], [25.4, 1485.0], [25.5, 1487.0], [25.6, 1492.0], [25.7, 1492.0], [25.8, 1496.0], [25.9, 1499.0], [26.0, 1502.0], [26.1, 1507.0], [26.2, 1511.0], [26.3, 1513.0], [26.4, 1516.0], [26.5, 1520.0], [26.6, 1522.0], [26.7, 1523.0], [26.8, 1525.0], [26.9, 1528.0], [27.0, 1532.0], [27.1, 1535.0], [27.2, 1536.0], [27.3, 1539.0], [27.4, 1541.0], [27.5, 1544.0], [27.6, 1546.0], [27.7, 1549.0], [27.8, 1551.0], [27.9, 1553.0], [28.0, 1555.0], [28.1, 1560.0], [28.2, 1562.0], [28.3, 1564.0], [28.4, 1565.0], [28.5, 1567.0], [28.6, 1569.0], [28.7, 1572.0], [28.8, 1575.0], [28.9, 1576.0], [29.0, 1578.0], [29.1, 1579.0], [29.2, 1582.0], [29.3, 1584.0], [29.4, 1586.0], [29.5, 1588.0], [29.6, 1595.0], [29.7, 1599.0], [29.8, 1601.0], [29.9, 1604.0], [30.0, 1607.0], [30.1, 1609.0], [30.2, 1612.0], [30.3, 1616.0], [30.4, 1620.0], [30.5, 1624.0], [30.6, 1628.0], [30.7, 1630.0], [30.8, 1632.0], [30.9, 1635.0], [31.0, 1636.0], [31.1, 1641.0], [31.2, 1643.0], [31.3, 1647.0], [31.4, 1650.0], [31.5, 1651.0], [31.6, 1654.0], [31.7, 1656.0], [31.8, 1660.0], [31.9, 1663.0], [32.0, 1664.0], [32.1, 1667.0], [32.2, 1670.0], [32.3, 1673.0], [32.4, 1676.0], [32.5, 1678.0], [32.6, 1680.0], [32.7, 1683.0], [32.8, 1684.0], [32.9, 1688.0], [33.0, 1692.0], [33.1, 1693.0], [33.2, 1696.0], [33.3, 1698.0], [33.4, 1701.0], [33.5, 1703.0], [33.6, 1705.0], [33.7, 1707.0], [33.8, 1710.0], [33.9, 1712.0], [34.0, 1715.0], [34.1, 1719.0], [34.2, 1721.0], [34.3, 1722.0], [34.4, 1725.0], [34.5, 1727.0], [34.6, 1730.0], [34.7, 1732.0], [34.8, 1734.0], [34.9, 1737.0], [35.0, 1739.0], [35.1, 1741.0], [35.2, 1742.0], [35.3, 1743.0], [35.4, 1745.0], [35.5, 1747.0], [35.6, 1748.0], [35.7, 1750.0], [35.8, 1754.0], [35.9, 1756.0], [36.0, 1759.0], [36.1, 1761.0], [36.2, 1762.0], [36.3, 1765.0], [36.4, 1769.0], [36.5, 1772.0], [36.6, 1773.0], [36.7, 1776.0], [36.8, 1779.0], [36.9, 1782.0], [37.0, 1784.0], [37.1, 1786.0], [37.2, 1788.0], [37.3, 1791.0], [37.4, 1793.0], [37.5, 1794.0], [37.6, 1796.0], [37.7, 1798.0], [37.8, 1802.0], [37.9, 1805.0], [38.0, 1807.0], [38.1, 1809.0], [38.2, 1811.0], [38.3, 1813.0], [38.4, 1815.0], [38.5, 1816.0], [38.6, 1817.0], [38.7, 1819.0], [38.8, 1820.0], [38.9, 1823.0], [39.0, 1825.0], [39.1, 1827.0], [39.2, 1828.0], [39.3, 1830.0], [39.4, 1833.0], [39.5, 1835.0], [39.6, 1837.0], [39.7, 1839.0], [39.8, 1841.0], [39.9, 1842.0], [40.0, 1844.0], [40.1, 1846.0], [40.2, 1848.0], [40.3, 1850.0], [40.4, 1854.0], [40.5, 1857.0], [40.6, 1859.0], [40.7, 1860.0], [40.8, 1861.0], [40.9, 1863.0], [41.0, 1865.0], [41.1, 1866.0], [41.2, 1869.0], [41.3, 1871.0], [41.4, 1872.0], [41.5, 1873.0], [41.6, 1875.0], [41.7, 1877.0], [41.8, 1879.0], [41.9, 1881.0], [42.0, 1883.0], [42.1, 1884.0], [42.2, 1886.0], [42.3, 1889.0], [42.4, 1890.0], [42.5, 1891.0], [42.6, 1893.0], [42.7, 1895.0], [42.8, 1897.0], [42.9, 1899.0], [43.0, 1899.0], [43.1, 1900.0], [43.2, 1903.0], [43.3, 1905.0], [43.4, 1906.0], [43.5, 1907.0], [43.6, 1910.0], [43.7, 1912.0], [43.8, 1914.0], [43.9, 1916.0], [44.0, 1917.0], [44.1, 1918.0], [44.2, 1919.0], [44.3, 1921.0], [44.4, 1922.0], [44.5, 1923.0], [44.6, 1926.0], [44.7, 1927.0], [44.8, 1928.0], [44.9, 1929.0], [45.0, 1930.0], [45.1, 1931.0], [45.2, 1932.0], [45.3, 1934.0], [45.4, 1937.0], [45.5, 1939.0], [45.6, 1941.0], [45.7, 1943.0], [45.8, 1944.0], [45.9, 1946.0], [46.0, 1947.0], [46.1, 1949.0], [46.2, 1950.0], [46.3, 1951.0], [46.4, 1952.0], [46.5, 1954.0], [46.6, 1955.0], [46.7, 1956.0], [46.8, 1957.0], [46.9, 1959.0], [47.0, 1963.0], [47.1, 1964.0], [47.2, 1967.0], [47.3, 1969.0], [47.4, 1971.0], [47.5, 1972.0], [47.6, 1974.0], [47.7, 1975.0], [47.8, 1976.0], [47.9, 1978.0], [48.0, 1979.0], [48.1, 1980.0], [48.2, 1982.0], [48.3, 1983.0], [48.4, 1985.0], [48.5, 1987.0], [48.6, 1988.0], [48.7, 1989.0], [48.8, 1991.0], [48.9, 1993.0], [49.0, 1994.0], [49.1, 1994.0], [49.2, 1996.0], [49.3, 1997.0], [49.4, 1999.0], [49.5, 2004.0], [49.6, 2006.0], [49.7, 2007.0], [49.8, 2009.0], [49.9, 2011.0], [50.0, 2012.0], [50.1, 2016.0], [50.2, 2017.0], [50.3, 2018.0], [50.4, 2021.0], [50.5, 2024.0], [50.6, 2026.0], [50.7, 2027.0], [50.8, 2030.0], [50.9, 2032.0], [51.0, 2035.0], [51.1, 2038.0], [51.2, 2039.0], [51.3, 2040.0], [51.4, 2042.0], [51.5, 2046.0], [51.6, 2049.0], [51.7, 2050.0], [51.8, 2051.0], [51.9, 2053.0], [52.0, 2055.0], [52.1, 2058.0], [52.2, 2060.0], [52.3, 2065.0], [52.4, 2066.0], [52.5, 2067.0], [52.6, 2072.0], [52.7, 2074.0], [52.8, 2076.0], [52.9, 2078.0], [53.0, 2080.0], [53.1, 2081.0], [53.2, 2082.0], [53.3, 2083.0], [53.4, 2089.0], [53.5, 2090.0], [53.6, 2091.0], [53.7, 2093.0], [53.8, 2096.0], [53.9, 2097.0], [54.0, 2099.0], [54.1, 2102.0], [54.2, 2103.0], [54.3, 2107.0], [54.4, 2110.0], [54.5, 2111.0], [54.6, 2113.0], [54.7, 2114.0], [54.8, 2116.0], [54.9, 2118.0], [55.0, 2121.0], [55.1, 2123.0], [55.2, 2125.0], [55.3, 2127.0], [55.4, 2128.0], [55.5, 2131.0], [55.6, 2132.0], [55.7, 2134.0], [55.8, 2137.0], [55.9, 2139.0], [56.0, 2141.0], [56.1, 2143.0], [56.2, 2145.0], [56.3, 2146.0], [56.4, 2148.0], [56.5, 2150.0], [56.6, 2152.0], [56.7, 2153.0], [56.8, 2155.0], [56.9, 2157.0], [57.0, 2160.0], [57.1, 2162.0], [57.2, 2165.0], [57.3, 2167.0], [57.4, 2170.0], [57.5, 2171.0], [57.6, 2173.0], [57.7, 2174.0], [57.8, 2179.0], [57.9, 2182.0], [58.0, 2185.0], [58.1, 2189.0], [58.2, 2192.0], [58.3, 2194.0], [58.4, 2197.0], [58.5, 2201.0], [58.6, 2203.0], [58.7, 2205.0], [58.8, 2208.0], [58.9, 2211.0], [59.0, 2216.0], [59.1, 2218.0], [59.2, 2222.0], [59.3, 2227.0], [59.4, 2229.0], [59.5, 2235.0], [59.6, 2236.0], [59.7, 2239.0], [59.8, 2241.0], [59.9, 2245.0], [60.0, 2246.0], [60.1, 2248.0], [60.2, 2250.0], [60.3, 2253.0], [60.4, 2255.0], [60.5, 2257.0], [60.6, 2259.0], [60.7, 2264.0], [60.8, 2267.0], [60.9, 2269.0], [61.0, 2271.0], [61.1, 2275.0], [61.2, 2276.0], [61.3, 2279.0], [61.4, 2281.0], [61.5, 2282.0], [61.6, 2284.0], [61.7, 2286.0], [61.8, 2288.0], [61.9, 2292.0], [62.0, 2293.0], [62.1, 2295.0], [62.2, 2300.0], [62.3, 2301.0], [62.4, 2302.0], [62.5, 2304.0], [62.6, 2307.0], [62.7, 2311.0], [62.8, 2312.0], [62.9, 2313.0], [63.0, 2317.0], [63.1, 2321.0], [63.2, 2325.0], [63.3, 2327.0], [63.4, 2328.0], [63.5, 2330.0], [63.6, 2332.0], [63.7, 2334.0], [63.8, 2337.0], [63.9, 2338.0], [64.0, 2342.0], [64.1, 2345.0], [64.2, 2346.0], [64.3, 2350.0], [64.4, 2352.0], [64.5, 2352.0], [64.6, 2355.0], [64.7, 2359.0], [64.8, 2364.0], [64.9, 2367.0], [65.0, 2371.0], [65.1, 2373.0], [65.2, 2379.0], [65.3, 2381.0], [65.4, 2385.0], [65.5, 2388.0], [65.6, 2392.0], [65.7, 2395.0], [65.8, 2400.0], [65.9, 2403.0], [66.0, 2404.0], [66.1, 2408.0], [66.2, 2411.0], [66.3, 2412.0], [66.4, 2415.0], [66.5, 2417.0], [66.6, 2420.0], [66.7, 2422.0], [66.8, 2425.0], [66.9, 2428.0], [67.0, 2430.0], [67.1, 2432.0], [67.2, 2434.0], [67.3, 2438.0], [67.4, 2443.0], [67.5, 2445.0], [67.6, 2448.0], [67.7, 2451.0], [67.8, 2452.0], [67.9, 2457.0], [68.0, 2458.0], [68.1, 2460.0], [68.2, 2461.0], [68.3, 2466.0], [68.4, 2468.0], [68.5, 2471.0], [68.6, 2476.0], [68.7, 2481.0], [68.8, 2483.0], [68.9, 2487.0], [69.0, 2492.0], [69.1, 2493.0], [69.2, 2495.0], [69.3, 2498.0], [69.4, 2499.0], [69.5, 2508.0], [69.6, 2510.0], [69.7, 2513.0], [69.8, 2515.0], [69.9, 2518.0], [70.0, 2519.0], [70.1, 2521.0], [70.2, 2523.0], [70.3, 2525.0], [70.4, 2527.0], [70.5, 2531.0], [70.6, 2535.0], [70.7, 2539.0], [70.8, 2542.0], [70.9, 2542.0], [71.0, 2545.0], [71.1, 2547.0], [71.2, 2550.0], [71.3, 2554.0], [71.4, 2557.0], [71.5, 2559.0], [71.6, 2561.0], [71.7, 2564.0], [71.8, 2567.0], [71.9, 2568.0], [72.0, 2572.0], [72.1, 2575.0], [72.2, 2579.0], [72.3, 2580.0], [72.4, 2583.0], [72.5, 2585.0], [72.6, 2586.0], [72.7, 2588.0], [72.8, 2593.0], [72.9, 2595.0], [73.0, 2596.0], [73.1, 2598.0], [73.2, 2600.0], [73.3, 2605.0], [73.4, 2610.0], [73.5, 2612.0], [73.6, 2616.0], [73.7, 2620.0], [73.8, 2623.0], [73.9, 2625.0], [74.0, 2627.0], [74.1, 2629.0], [74.2, 2632.0], [74.3, 2636.0], [74.4, 2637.0], [74.5, 2640.0], [74.6, 2645.0], [74.7, 2649.0], [74.8, 2654.0], [74.9, 2656.0], [75.0, 2661.0], [75.1, 2666.0], [75.2, 2669.0], [75.3, 2673.0], [75.4, 2679.0], [75.5, 2683.0], [75.6, 2686.0], [75.7, 2689.0], [75.8, 2693.0], [75.9, 2695.0], [76.0, 2696.0], [76.1, 2699.0], [76.2, 2703.0], [76.3, 2706.0], [76.4, 2708.0], [76.5, 2711.0], [76.6, 2712.0], [76.7, 2714.0], [76.8, 2717.0], [76.9, 2721.0], [77.0, 2726.0], [77.1, 2732.0], [77.2, 2736.0], [77.3, 2738.0], [77.4, 2745.0], [77.5, 2746.0], [77.6, 2750.0], [77.7, 2754.0], [77.8, 2756.0], [77.9, 2759.0], [78.0, 2765.0], [78.1, 2767.0], [78.2, 2771.0], [78.3, 2775.0], [78.4, 2779.0], [78.5, 2783.0], [78.6, 2787.0], [78.7, 2791.0], [78.8, 2795.0], [78.9, 2797.0], [79.0, 2802.0], [79.1, 2804.0], [79.2, 2809.0], [79.3, 2811.0], [79.4, 2816.0], [79.5, 2822.0], [79.6, 2828.0], [79.7, 2830.0], [79.8, 2833.0], [79.9, 2835.0], [80.0, 2843.0], [80.1, 2847.0], [80.2, 2851.0], [80.3, 2853.0], [80.4, 2857.0], [80.5, 2861.0], [80.6, 2868.0], [80.7, 2873.0], [80.8, 2877.0], [80.9, 2881.0], [81.0, 2887.0], [81.1, 2894.0], [81.2, 2897.0], [81.3, 2903.0], [81.4, 2906.0], [81.5, 2907.0], [81.6, 2911.0], [81.7, 2915.0], [81.8, 2917.0], [81.9, 2921.0], [82.0, 2925.0], [82.1, 2928.0], [82.2, 2933.0], [82.3, 2937.0], [82.4, 2939.0], [82.5, 2943.0], [82.6, 2946.0], [82.7, 2949.0], [82.8, 2952.0], [82.9, 2957.0], [83.0, 2962.0], [83.1, 2965.0], [83.2, 2969.0], [83.3, 2974.0], [83.4, 2980.0], [83.5, 2988.0], [83.6, 2994.0], [83.7, 3001.0], [83.8, 3003.0], [83.9, 3011.0], [84.0, 3015.0], [84.1, 3020.0], [84.2, 3027.0], [84.3, 3035.0], [84.4, 3039.0], [84.5, 3049.0], [84.6, 3053.0], [84.7, 3067.0], [84.8, 3070.0], [84.9, 3075.0], [85.0, 3080.0], [85.1, 3085.0], [85.2, 3088.0], [85.3, 3094.0], [85.4, 3097.0], [85.5, 3105.0], [85.6, 3110.0], [85.7, 3115.0], [85.8, 3118.0], [85.9, 3125.0], [86.0, 3131.0], [86.1, 3136.0], [86.2, 3138.0], [86.3, 3140.0], [86.4, 3146.0], [86.5, 3152.0], [86.6, 3158.0], [86.7, 3164.0], [86.8, 3169.0], [86.9, 3175.0], [87.0, 3181.0], [87.1, 3190.0], [87.2, 3193.0], [87.3, 3200.0], [87.4, 3205.0], [87.5, 3212.0], [87.6, 3218.0], [87.7, 3224.0], [87.8, 3226.0], [87.9, 3231.0], [88.0, 3235.0], [88.1, 3239.0], [88.2, 3245.0], [88.3, 3253.0], [88.4, 3256.0], [88.5, 3264.0], [88.6, 3273.0], [88.7, 3284.0], [88.8, 3290.0], [88.9, 3299.0], [89.0, 3303.0], [89.1, 3309.0], [89.2, 3317.0], [89.3, 3325.0], [89.4, 3340.0], [89.5, 3354.0], [89.6, 3364.0], [89.7, 3371.0], [89.8, 3378.0], [89.9, 3388.0], [90.0, 3399.0], [90.1, 3405.0], [90.2, 3436.0], [90.3, 3441.0], [90.4, 3445.0], [90.5, 3449.0], [90.6, 3463.0], [90.7, 3473.0], [90.8, 3478.0], [90.9, 3482.0], [91.0, 3491.0], [91.1, 3496.0], [91.2, 3499.0], [91.3, 3507.0], [91.4, 3515.0], [91.5, 3522.0], [91.6, 3535.0], [91.7, 3542.0], [91.8, 3559.0], [91.9, 3564.0], [92.0, 3574.0], [92.1, 3583.0], [92.2, 3595.0], [92.3, 3605.0], [92.4, 3610.0], [92.5, 3614.0], [92.6, 3636.0], [92.7, 3646.0], [92.8, 3649.0], [92.9, 3655.0], [93.0, 3666.0], [93.1, 3681.0], [93.2, 3691.0], [93.3, 3712.0], [93.4, 3719.0], [93.5, 3726.0], [93.6, 3747.0], [93.7, 3765.0], [93.8, 3782.0], [93.9, 3791.0], [94.0, 3807.0], [94.1, 3813.0], [94.2, 3822.0], [94.3, 3833.0], [94.4, 3838.0], [94.5, 3851.0], [94.6, 3866.0], [94.7, 3874.0], [94.8, 3891.0], [94.9, 3900.0], [95.0, 3914.0], [95.1, 3923.0], [95.2, 3928.0], [95.3, 3937.0], [95.4, 3951.0], [95.5, 3966.0], [95.6, 3986.0], [95.7, 4016.0], [95.8, 4031.0], [95.9, 4036.0], [96.0, 4050.0], [96.1, 4071.0], [96.2, 4095.0], [96.3, 4117.0], [96.4, 4137.0], [96.5, 4164.0], [96.6, 4191.0], [96.7, 4202.0], [96.8, 4220.0], [96.9, 4240.0], [97.0, 4259.0], [97.1, 4286.0], [97.2, 4317.0], [97.3, 4341.0], [97.4, 4376.0], [97.5, 4393.0], [97.6, 4422.0], [97.7, 4450.0], [97.8, 4472.0], [97.9, 4572.0], [98.0, 4612.0], [98.1, 4646.0], [98.2, 4694.0], [98.3, 4741.0], [98.4, 4774.0], [98.5, 4821.0], [98.6, 4866.0], [98.7, 4893.0], [98.8, 5054.0], [98.9, 5158.0], [99.0, 5307.0], [99.1, 5502.0], [99.2, 5827.0], [99.3, 6219.0], [99.4, 6446.0], [99.5, 6820.0], [99.6, 6975.0], [99.7, 7357.0], [99.8, 7603.0], [99.9, 8066.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 600.0, "maxY": 332.0, "series": [{"data": [[600.0, 4.0], [700.0, 47.0], [800.0, 279.0], [900.0, 226.0], [1000.0, 135.0], [1100.0, 123.0], [1200.0, 209.0], [1300.0, 165.0], [1400.0, 157.0], [1500.0, 200.0], [1600.0, 188.0], [1700.0, 228.0], [1800.0, 271.0], [1900.0, 332.0], [2000.0, 240.0], [2100.0, 230.0], [2300.0, 187.0], [2200.0, 194.0], [2400.0, 187.0], [2500.0, 193.0], [2600.0, 155.0], [2700.0, 147.0], [2800.0, 121.0], [2900.0, 126.0], [3000.0, 91.0], [3100.0, 95.0], [3200.0, 84.0], [3300.0, 58.0], [3400.0, 62.0], [3500.0, 55.0], [3700.0, 36.0], [3600.0, 52.0], [3800.0, 48.0], [3900.0, 39.0], [4000.0, 29.0], [4100.0, 25.0], [4200.0, 24.0], [4300.0, 21.0], [4500.0, 7.0], [4400.0, 14.0], [4600.0, 14.0], [4700.0, 12.0], [4800.0, 13.0], [5000.0, 4.0], [5100.0, 6.0], [4900.0, 2.0], [5300.0, 3.0], [5200.0, 3.0], [5400.0, 2.0], [5600.0, 1.0], [5500.0, 2.0], [5800.0, 3.0], [5700.0, 1.0], [6100.0, 1.0], [5900.0, 2.0], [6200.0, 4.0], [6300.0, 1.0], [6600.0, 2.0], [6500.0, 1.0], [6400.0, 1.0], [6700.0, 2.0], [6800.0, 2.0], [6900.0, 4.0], [7100.0, 1.0], [7000.0, 3.0], [7400.0, 2.0], [7300.0, 2.0], [7600.0, 2.0], [7500.0, 1.0], [7900.0, 1.0], [7800.0, 1.0], [8000.0, 3.0], [8100.0, 1.0], [8300.0, 1.0], [8200.0, 1.0], [9000.0, 1.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 9000.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 1347.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 3843.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1347.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 3843.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 11.609467455621301, "minX": 1.60440204E12, "maxY": 12.0, "series": [{"data": [[1.60440234E12, 12.0], [1.60440264E12, 12.0], [1.6044027E12, 12.0], [1.60440204E12, 12.0], [1.604403E12, 11.609467455621301], [1.60440258E12, 12.0], [1.60440288E12, 12.0], [1.60440294E12, 12.0], [1.60440228E12, 12.0], [1.60440282E12, 12.0], [1.60440216E12, 12.0], [1.60440222E12, 12.0], [1.60440252E12, 12.0], [1.6044021E12, 12.0], [1.6044024E12, 12.0], [1.60440246E12, 12.0], [1.60440276E12, 12.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.604403E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 1516.0, "minX": 1.0, "maxY": 3529.0, "series": [{"data": [[8.0, 3190.0], [4.0, 2130.0], [2.0, 3436.0], [1.0, 3441.0], [9.0, 2593.0], [10.0, 2332.0], [5.0, 2049.0], [11.0, 1516.0], [12.0, 2163.672137478275], [6.0, 2116.0], [3.0, 3529.0], [7.0, 1937.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[11.987283236994216, 2164.533140655104]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 12.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 7.433333333333334, "minX": 1.60440204E12, "maxY": 2035730.8166666667, "series": [{"data": [[1.60440234E12, 1851805.7333333334], [1.60440264E12, 1393610.35], [1.6044027E12, 1062233.6833333333], [1.60440204E12, 21376.8], [1.604403E12, 771453.6], [1.60440258E12, 1543357.65], [1.60440288E12, 1567558.4333333333], [1.60440294E12, 1482125.75], [1.60440228E12, 1915778.6333333333], [1.60440282E12, 1521454.5833333333], [1.60440216E12, 1482530.0166666666], [1.60440222E12, 975875.1666666666], [1.60440252E12, 1428441.1333333333], [1.6044021E12, 1664148.6333333333], [1.6044024E12, 1600802.0], [1.60440246E12, 1654351.3666666667], [1.60440276E12, 2035730.8166666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60440234E12, 2914.883333333333], [1.60440264E12, 2184.616666666667], [1.6044027E12, 2756.383333333333], [1.60440204E12, 7.433333333333334], [1.604403E12, 1269.6666666666667], [1.60440258E12, 2207.7], [1.60440288E12, 2464.95], [1.60440294E12, 2764.6], [1.60440228E12, 2306.95], [1.60440282E12, 3003.9666666666667], [1.60440216E12, 2458.483333333333], [1.60440222E12, 2679.266666666667], [1.60440252E12, 2020.4666666666667], [1.6044021E12, 2102.0833333333335], [1.6044024E12, 2221.633333333333], [1.60440246E12, 2967.7166666666667], [1.60440276E12, 2246.5333333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.604403E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 1281.0, "minX": 1.60440204E12, "maxY": 2674.600746268658, "series": [{"data": [[1.60440234E12, 1871.476683937823], [1.60440264E12, 2366.5166666666664], [1.6044027E12, 1918.3218997361473], [1.60440204E12, 1281.0], [1.604403E12, 2666.6449704142], [1.60440258E12, 2326.739549839228], [1.60440288E12, 2249.275541795664], [1.60440294E12, 1920.2459016393432], [1.60440228E12, 2341.061889250813], [1.60440282E12, 1818.1385390428213], [1.60440216E12, 2099.9588235294113], [1.60440222E12, 1969.5760869565227], [1.60440252E12, 2674.600746268658], [1.6044021E12, 2493.9482758620716], [1.6044024E12, 2429.0756013745718], [1.60440246E12, 1843.9821882951646], [1.60440276E12, 2387.943521594687]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.604403E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 1272.0, "minX": 1.60440204E12, "maxY": 2672.246268656717, "series": [{"data": [[1.60440234E12, 1869.409326424871], [1.60440264E12, 2364.7766666666657], [1.6044027E12, 1917.2401055408973], [1.60440204E12, 1272.0], [1.604403E12, 2665.0887573964505], [1.60440258E12, 2324.66881028939], [1.60440288E12, 2247.5944272445804], [1.60440294E12, 1918.8387978142082], [1.60440228E12, 2338.130293159608], [1.60440282E12, 1816.8438287153663], [1.60440216E12, 2098.050000000001], [1.60440222E12, 1968.3722826086957], [1.60440252E12, 2672.246268656717], [1.6044021E12, 2491.3793103448265], [1.6044024E12, 2426.7113402061873], [1.60440246E12, 1842.1857506361323], [1.60440276E12, 2385.5747508305644]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.604403E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.027707808564231766, "minX": 1.60440204E12, "maxY": 42.0, "series": [{"data": [[1.60440234E12, 0.03367875647668393], [1.60440264E12, 0.04666666666666672], [1.6044027E12, 0.03430079155672823], [1.60440204E12, 42.0], [1.604403E12, 0.06508875739644975], [1.60440258E12, 0.04501607717041807], [1.60440288E12, 0.043343653250774036], [1.60440294E12, 0.030054644808743192], [1.60440228E12, 0.042345276872964195], [1.60440282E12, 0.027707808564231766], [1.60440216E12, 0.04117647058823534], [1.60440222E12, 0.040760869565217434], [1.60440252E12, 0.05223880597014927], [1.6044021E12, 0.3344827586206891], [1.6044024E12, 0.05498281786941579], [1.60440246E12, 0.03816793893129775], [1.60440276E12, 0.029900332225913637]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.604403E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 663.0, "minX": 1.60440204E12, "maxY": 9038.0, "series": [{"data": [[1.60440234E12, 4739.0], [1.60440264E12, 9038.0], [1.6044027E12, 5857.0], [1.60440204E12, 1281.0], [1.604403E12, 5944.0], [1.60440258E12, 8346.0], [1.60440288E12, 4694.0], [1.60440294E12, 5333.0], [1.60440228E12, 6929.0], [1.60440282E12, 4070.0], [1.60440216E12, 7912.0], [1.60440222E12, 5307.0], [1.60440252E12, 7525.0], [1.6044021E12, 7114.0], [1.6044024E12, 4390.0], [1.60440246E12, 6312.0], [1.60440276E12, 4741.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60440234E12, 780.0], [1.60440264E12, 1166.835999712944], [1.6044027E12, 811.0], [1.60440204E12, 1281.0], [1.604403E12, 1337.859997487068], [1.60440258E12, 878.079999256134], [1.60440288E12, 879.4479939746857], [1.60440294E12, 770.6059998250007], [1.60440228E12, 1097.0879997062684], [1.60440282E12, 753.1639998102188], [1.60440216E12, 716.6909968292713], [1.60440222E12, 785.2099991202355], [1.60440252E12, 1165.5749951899052], [1.6044021E12, 837.4759997224808], [1.6044024E12, 1115.239994430542], [1.60440246E12, 756.7299995303154], [1.60440276E12, 1095.7439994239808]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60440234E12, 780.0], [1.60440264E12, 1167.9196001148223], [1.6044027E12, 811.0], [1.60440204E12, 1281.0], [1.604403E12, 1347.3460010051726], [1.60440258E12, 880.0], [1.60440288E12, 891.1900007724762], [1.60440294E12, 771.2666000699996], [1.60440228E12, 1098.4920002937317], [1.60440282E12, 753.8804000759125], [1.60440216E12, 728.6601012682914], [1.60440222E12, 788.5310003519058], [1.60440252E12, 1183.732501924038], [1.6044021E12, 838.5236001110077], [1.6044024E12, 1136.2640022277833], [1.60440246E12, 758.5030001878738], [1.60440276E12, 1097.9184002304078]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60440234E12, 780.0], [1.60440264E12, 1167.437999856472], [1.6044027E12, 811.0], [1.60440204E12, 1281.0], [1.604403E12, 1343.129998743534], [1.60440258E12, 879.639999628067], [1.60440288E12, 887.9499990344048], [1.60440294E12, 770.9729999125004], [1.60440228E12, 1097.703999853134], [1.60440282E12, 753.5619999051094], [1.60440216E12, 723.3404984146357], [1.60440222E12, 787.0549995601177], [1.60440252E12, 1175.6624975949526], [1.6044021E12, 838.0579998612404], [1.6044024E12, 1126.919997215271], [1.60440246E12, 757.7149997651577], [1.60440276E12, 1096.9519997119903]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60440234E12, 757.0], [1.60440264E12, 1136.0], [1.6044027E12, 804.0], [1.60440204E12, 1281.0], [1.604403E12, 1305.0], [1.60440258E12, 838.0], [1.60440288E12, 666.0], [1.60440294E12, 761.0], [1.60440228E12, 1047.0], [1.60440282E12, 663.0], [1.60440216E12, 680.0], [1.60440222E12, 771.0], [1.60440252E12, 977.0], [1.6044021E12, 828.0], [1.6044024E12, 1048.0], [1.60440246E12, 741.0], [1.60440276E12, 1076.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60440234E12, 1785.0], [1.60440264E12, 1947.5], [1.6044027E12, 1798.0], [1.60440204E12, 1281.0], [1.604403E12, 2538.0], [1.60440258E12, 2124.0], [1.60440288E12, 2172.0], [1.60440294E12, 1792.0], [1.60440228E12, 2140.0], [1.60440282E12, 1731.0], [1.60440216E12, 1943.5], [1.60440222E12, 1643.0], [1.60440252E12, 2486.5], [1.6044021E12, 2332.5], [1.6044024E12, 2381.0], [1.60440246E12, 1710.0], [1.60440276E12, 2208.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.604403E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 847.5, "minX": 1.0, "maxY": 3585.0, "series": [{"data": [[8.0, 1873.0], [2.0, 3258.5], [9.0, 1477.5], [10.0, 1288.0], [11.0, 1071.5], [3.0, 2628.5], [12.0, 923.0], [13.0, 905.0], [14.0, 907.5], [15.0, 847.5], [1.0, 3585.0], [4.0, 2352.0], [5.0, 2278.0], [6.0, 2084.5], [7.0, 1985.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 15.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 846.5, "minX": 1.0, "maxY": 3574.5, "series": [{"data": [[8.0, 1871.0], [2.0, 3257.5], [9.0, 1475.5], [10.0, 1285.5], [11.0, 1071.5], [3.0, 2623.5], [12.0, 923.0], [13.0, 904.0], [14.0, 907.5], [15.0, 846.5], [1.0, 3574.5], [4.0, 2349.5], [5.0, 2276.0], [6.0, 2083.0], [7.0, 1985.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 15.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.21666666666666667, "minX": 1.60440204E12, "maxY": 6.616666666666666, "series": [{"data": [[1.60440234E12, 6.433333333333334], [1.60440264E12, 5.0], [1.6044027E12, 6.316666666666666], [1.60440204E12, 0.21666666666666667], [1.604403E12, 2.6166666666666667], [1.60440258E12, 5.183333333333334], [1.60440288E12, 5.383333333333334], [1.60440294E12, 6.1], [1.60440228E12, 5.116666666666666], [1.60440282E12, 6.616666666666666], [1.60440216E12, 5.666666666666667], [1.60440222E12, 6.133333333333334], [1.60440252E12, 4.466666666666667], [1.6044021E12, 4.833333333333333], [1.6044024E12, 4.85], [1.60440246E12, 6.55], [1.60440276E12, 5.016666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.604403E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60440204E12, "maxY": 6.616666666666666, "series": [{"data": [[1.60440234E12, 6.433333333333334], [1.60440264E12, 5.0], [1.6044027E12, 6.316666666666666], [1.60440204E12, 0.016666666666666666], [1.604403E12, 2.816666666666667], [1.60440258E12, 5.183333333333334], [1.60440288E12, 5.383333333333334], [1.60440294E12, 6.1], [1.60440228E12, 5.116666666666666], [1.60440282E12, 6.616666666666666], [1.60440216E12, 5.666666666666667], [1.60440222E12, 6.133333333333334], [1.60440252E12, 4.466666666666667], [1.6044021E12, 4.833333333333333], [1.6044024E12, 4.85], [1.60440246E12, 6.55], [1.60440276E12, 5.016666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.604403E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60440204E12, "maxY": 6.616666666666666, "series": [{"data": [[1.60440234E12, 6.433333333333334], [1.60440264E12, 5.0], [1.6044027E12, 6.316666666666666], [1.60440204E12, 0.016666666666666666], [1.604403E12, 2.816666666666667], [1.60440258E12, 5.183333333333334], [1.60440288E12, 5.383333333333334], [1.60440294E12, 6.1], [1.60440228E12, 5.116666666666666], [1.60440282E12, 6.616666666666666], [1.60440216E12, 5.666666666666667], [1.60440222E12, 6.133333333333334], [1.60440252E12, 4.466666666666667], [1.6044021E12, 4.833333333333333], [1.6044024E12, 4.85], [1.60440246E12, 6.55], [1.60440276E12, 5.016666666666667]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.604403E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60440204E12, "maxY": 6.616666666666666, "series": [{"data": [[1.60440234E12, 6.433333333333334], [1.60440264E12, 5.0], [1.6044027E12, 6.316666666666666], [1.60440204E12, 0.016666666666666666], [1.604403E12, 2.816666666666667], [1.60440258E12, 5.183333333333334], [1.60440288E12, 5.383333333333334], [1.60440294E12, 6.1], [1.60440228E12, 5.116666666666666], [1.60440282E12, 6.616666666666666], [1.60440216E12, 5.666666666666667], [1.60440222E12, 6.133333333333334], [1.60440252E12, 4.466666666666667], [1.6044021E12, 4.833333333333333], [1.6044024E12, 4.85], [1.60440246E12, 6.55], [1.60440276E12, 5.016666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.604403E12, "title": "Total Transactions Per Second"}},
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

