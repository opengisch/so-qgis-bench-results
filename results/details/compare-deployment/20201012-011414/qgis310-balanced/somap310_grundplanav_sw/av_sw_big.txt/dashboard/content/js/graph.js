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
        data: {"result": {"minY": 702.0, "minX": 0.0, "maxY": 10931.0, "series": [{"data": [[0.0, 702.0], [0.1, 717.0], [0.2, 735.0], [0.3, 745.0], [0.4, 750.0], [0.5, 755.0], [0.6, 758.0], [0.7, 759.0], [0.8, 762.0], [0.9, 764.0], [1.0, 767.0], [1.1, 770.0], [1.2, 773.0], [1.3, 775.0], [1.4, 778.0], [1.5, 780.0], [1.6, 781.0], [1.7, 783.0], [1.8, 784.0], [1.9, 786.0], [2.0, 789.0], [2.1, 790.0], [2.2, 794.0], [2.3, 796.0], [2.4, 799.0], [2.5, 801.0], [2.6, 802.0], [2.7, 804.0], [2.8, 806.0], [2.9, 810.0], [3.0, 811.0], [3.1, 813.0], [3.2, 814.0], [3.3, 815.0], [3.4, 816.0], [3.5, 819.0], [3.6, 823.0], [3.7, 825.0], [3.8, 826.0], [3.9, 829.0], [4.0, 831.0], [4.1, 833.0], [4.2, 834.0], [4.3, 836.0], [4.4, 837.0], [4.5, 839.0], [4.6, 840.0], [4.7, 842.0], [4.8, 845.0], [4.9, 847.0], [5.0, 848.0], [5.1, 850.0], [5.2, 851.0], [5.3, 852.0], [5.4, 853.0], [5.5, 854.0], [5.6, 855.0], [5.7, 856.0], [5.8, 858.0], [5.9, 860.0], [6.0, 861.0], [6.1, 862.0], [6.2, 864.0], [6.3, 865.0], [6.4, 867.0], [6.5, 870.0], [6.6, 870.0], [6.7, 872.0], [6.8, 873.0], [6.9, 875.0], [7.0, 877.0], [7.1, 878.0], [7.2, 880.0], [7.3, 880.0], [7.4, 883.0], [7.5, 886.0], [7.6, 888.0], [7.7, 890.0], [7.8, 892.0], [7.9, 895.0], [8.0, 896.0], [8.1, 897.0], [8.2, 899.0], [8.3, 901.0], [8.4, 903.0], [8.5, 906.0], [8.6, 908.0], [8.7, 910.0], [8.8, 912.0], [8.9, 913.0], [9.0, 915.0], [9.1, 918.0], [9.2, 919.0], [9.3, 920.0], [9.4, 922.0], [9.5, 924.0], [9.6, 926.0], [9.7, 928.0], [9.8, 930.0], [9.9, 931.0], [10.0, 934.0], [10.1, 937.0], [10.2, 940.0], [10.3, 943.0], [10.4, 945.0], [10.5, 948.0], [10.6, 950.0], [10.7, 952.0], [10.8, 957.0], [10.9, 957.0], [11.0, 960.0], [11.1, 963.0], [11.2, 965.0], [11.3, 971.0], [11.4, 973.0], [11.5, 976.0], [11.6, 980.0], [11.7, 982.0], [11.8, 984.0], [11.9, 985.0], [12.0, 987.0], [12.1, 991.0], [12.2, 994.0], [12.3, 996.0], [12.4, 1001.0], [12.5, 1009.0], [12.6, 1014.0], [12.7, 1019.0], [12.8, 1024.0], [12.9, 1030.0], [13.0, 1034.0], [13.1, 1042.0], [13.2, 1049.0], [13.3, 1053.0], [13.4, 1056.0], [13.5, 1061.0], [13.6, 1067.0], [13.7, 1071.0], [13.8, 1074.0], [13.9, 1080.0], [14.0, 1083.0], [14.1, 1087.0], [14.2, 1090.0], [14.3, 1095.0], [14.4, 1100.0], [14.5, 1103.0], [14.6, 1105.0], [14.7, 1111.0], [14.8, 1113.0], [14.9, 1115.0], [15.0, 1117.0], [15.1, 1119.0], [15.2, 1123.0], [15.3, 1127.0], [15.4, 1127.0], [15.5, 1132.0], [15.6, 1134.0], [15.7, 1137.0], [15.8, 1144.0], [15.9, 1149.0], [16.0, 1154.0], [16.1, 1157.0], [16.2, 1160.0], [16.3, 1163.0], [16.4, 1165.0], [16.5, 1169.0], [16.6, 1174.0], [16.7, 1177.0], [16.8, 1181.0], [16.9, 1185.0], [17.0, 1189.0], [17.1, 1193.0], [17.2, 1197.0], [17.3, 1201.0], [17.4, 1203.0], [17.5, 1204.0], [17.6, 1206.0], [17.7, 1207.0], [17.8, 1208.0], [17.9, 1212.0], [18.0, 1215.0], [18.1, 1218.0], [18.2, 1221.0], [18.3, 1224.0], [18.4, 1227.0], [18.5, 1233.0], [18.6, 1235.0], [18.7, 1241.0], [18.8, 1243.0], [18.9, 1247.0], [19.0, 1249.0], [19.1, 1253.0], [19.2, 1256.0], [19.3, 1259.0], [19.4, 1263.0], [19.5, 1265.0], [19.6, 1269.0], [19.7, 1272.0], [19.8, 1274.0], [19.9, 1276.0], [20.0, 1279.0], [20.1, 1284.0], [20.2, 1288.0], [20.3, 1293.0], [20.4, 1295.0], [20.5, 1297.0], [20.6, 1299.0], [20.7, 1301.0], [20.8, 1304.0], [20.9, 1308.0], [21.0, 1311.0], [21.1, 1313.0], [21.2, 1315.0], [21.3, 1318.0], [21.4, 1323.0], [21.5, 1325.0], [21.6, 1332.0], [21.7, 1332.0], [21.8, 1333.0], [21.9, 1337.0], [22.0, 1343.0], [22.1, 1345.0], [22.2, 1347.0], [22.3, 1349.0], [22.4, 1350.0], [22.5, 1353.0], [22.6, 1356.0], [22.7, 1358.0], [22.8, 1362.0], [22.9, 1362.0], [23.0, 1364.0], [23.1, 1367.0], [23.2, 1371.0], [23.3, 1373.0], [23.4, 1377.0], [23.5, 1379.0], [23.6, 1381.0], [23.7, 1386.0], [23.8, 1388.0], [23.9, 1391.0], [24.0, 1393.0], [24.1, 1395.0], [24.2, 1397.0], [24.3, 1399.0], [24.4, 1402.0], [24.5, 1403.0], [24.6, 1405.0], [24.7, 1407.0], [24.8, 1409.0], [24.9, 1411.0], [25.0, 1415.0], [25.1, 1421.0], [25.2, 1426.0], [25.3, 1428.0], [25.4, 1431.0], [25.5, 1436.0], [25.6, 1440.0], [25.7, 1442.0], [25.8, 1446.0], [25.9, 1450.0], [26.0, 1451.0], [26.1, 1454.0], [26.2, 1456.0], [26.3, 1457.0], [26.4, 1459.0], [26.5, 1462.0], [26.6, 1463.0], [26.7, 1467.0], [26.8, 1469.0], [26.9, 1473.0], [27.0, 1478.0], [27.1, 1480.0], [27.2, 1484.0], [27.3, 1488.0], [27.4, 1491.0], [27.5, 1496.0], [27.6, 1497.0], [27.7, 1499.0], [27.8, 1502.0], [27.9, 1506.0], [28.0, 1510.0], [28.1, 1512.0], [28.2, 1513.0], [28.3, 1517.0], [28.4, 1520.0], [28.5, 1523.0], [28.6, 1525.0], [28.7, 1527.0], [28.8, 1529.0], [28.9, 1530.0], [29.0, 1533.0], [29.1, 1537.0], [29.2, 1538.0], [29.3, 1541.0], [29.4, 1543.0], [29.5, 1544.0], [29.6, 1546.0], [29.7, 1548.0], [29.8, 1553.0], [29.9, 1557.0], [30.0, 1559.0], [30.1, 1561.0], [30.2, 1564.0], [30.3, 1566.0], [30.4, 1570.0], [30.5, 1572.0], [30.6, 1575.0], [30.7, 1576.0], [30.8, 1577.0], [30.9, 1578.0], [31.0, 1582.0], [31.1, 1585.0], [31.2, 1589.0], [31.3, 1592.0], [31.4, 1593.0], [31.5, 1594.0], [31.6, 1599.0], [31.7, 1601.0], [31.8, 1606.0], [31.9, 1608.0], [32.0, 1610.0], [32.1, 1614.0], [32.2, 1617.0], [32.3, 1619.0], [32.4, 1622.0], [32.5, 1626.0], [32.6, 1628.0], [32.7, 1631.0], [32.8, 1634.0], [32.9, 1635.0], [33.0, 1637.0], [33.1, 1639.0], [33.2, 1642.0], [33.3, 1645.0], [33.4, 1647.0], [33.5, 1651.0], [33.6, 1652.0], [33.7, 1655.0], [33.8, 1656.0], [33.9, 1658.0], [34.0, 1660.0], [34.1, 1665.0], [34.2, 1667.0], [34.3, 1669.0], [34.4, 1671.0], [34.5, 1672.0], [34.6, 1673.0], [34.7, 1674.0], [34.8, 1675.0], [34.9, 1677.0], [35.0, 1678.0], [35.1, 1680.0], [35.2, 1681.0], [35.3, 1684.0], [35.4, 1687.0], [35.5, 1690.0], [35.6, 1692.0], [35.7, 1694.0], [35.8, 1696.0], [35.9, 1699.0], [36.0, 1701.0], [36.1, 1703.0], [36.2, 1705.0], [36.3, 1707.0], [36.4, 1708.0], [36.5, 1710.0], [36.6, 1713.0], [36.7, 1714.0], [36.8, 1717.0], [36.9, 1719.0], [37.0, 1722.0], [37.1, 1725.0], [37.2, 1728.0], [37.3, 1729.0], [37.4, 1731.0], [37.5, 1733.0], [37.6, 1736.0], [37.7, 1738.0], [37.8, 1741.0], [37.9, 1744.0], [38.0, 1748.0], [38.1, 1749.0], [38.2, 1750.0], [38.3, 1751.0], [38.4, 1753.0], [38.5, 1756.0], [38.6, 1757.0], [38.7, 1758.0], [38.8, 1763.0], [38.9, 1764.0], [39.0, 1766.0], [39.1, 1769.0], [39.2, 1770.0], [39.3, 1771.0], [39.4, 1774.0], [39.5, 1776.0], [39.6, 1779.0], [39.7, 1781.0], [39.8, 1783.0], [39.9, 1785.0], [40.0, 1786.0], [40.1, 1787.0], [40.2, 1788.0], [40.3, 1791.0], [40.4, 1793.0], [40.5, 1794.0], [40.6, 1800.0], [40.7, 1803.0], [40.8, 1804.0], [40.9, 1806.0], [41.0, 1807.0], [41.1, 1810.0], [41.2, 1811.0], [41.3, 1813.0], [41.4, 1814.0], [41.5, 1815.0], [41.6, 1817.0], [41.7, 1819.0], [41.8, 1820.0], [41.9, 1821.0], [42.0, 1824.0], [42.1, 1825.0], [42.2, 1827.0], [42.3, 1829.0], [42.4, 1831.0], [42.5, 1833.0], [42.6, 1834.0], [42.7, 1837.0], [42.8, 1838.0], [42.9, 1840.0], [43.0, 1840.0], [43.1, 1841.0], [43.2, 1844.0], [43.3, 1845.0], [43.4, 1846.0], [43.5, 1849.0], [43.6, 1851.0], [43.7, 1855.0], [43.8, 1857.0], [43.9, 1860.0], [44.0, 1862.0], [44.1, 1864.0], [44.2, 1865.0], [44.3, 1867.0], [44.4, 1869.0], [44.5, 1871.0], [44.6, 1872.0], [44.7, 1874.0], [44.8, 1876.0], [44.9, 1877.0], [45.0, 1879.0], [45.1, 1880.0], [45.2, 1880.0], [45.3, 1882.0], [45.4, 1883.0], [45.5, 1885.0], [45.6, 1888.0], [45.7, 1889.0], [45.8, 1890.0], [45.9, 1892.0], [46.0, 1893.0], [46.1, 1895.0], [46.2, 1897.0], [46.3, 1897.0], [46.4, 1899.0], [46.5, 1901.0], [46.6, 1903.0], [46.7, 1904.0], [46.8, 1905.0], [46.9, 1909.0], [47.0, 1910.0], [47.1, 1911.0], [47.2, 1912.0], [47.3, 1914.0], [47.4, 1914.0], [47.5, 1916.0], [47.6, 1918.0], [47.7, 1920.0], [47.8, 1921.0], [47.9, 1922.0], [48.0, 1923.0], [48.1, 1924.0], [48.2, 1926.0], [48.3, 1927.0], [48.4, 1929.0], [48.5, 1932.0], [48.6, 1933.0], [48.7, 1936.0], [48.8, 1937.0], [48.9, 1940.0], [49.0, 1941.0], [49.1, 1942.0], [49.2, 1944.0], [49.3, 1945.0], [49.4, 1947.0], [49.5, 1948.0], [49.6, 1948.0], [49.7, 1951.0], [49.8, 1952.0], [49.9, 1956.0], [50.0, 1960.0], [50.1, 1962.0], [50.2, 1965.0], [50.3, 1966.0], [50.4, 1969.0], [50.5, 1970.0], [50.6, 1972.0], [50.7, 1974.0], [50.8, 1975.0], [50.9, 1977.0], [51.0, 1978.0], [51.1, 1979.0], [51.2, 1980.0], [51.3, 1982.0], [51.4, 1983.0], [51.5, 1984.0], [51.6, 1985.0], [51.7, 1988.0], [51.8, 1990.0], [51.9, 1992.0], [52.0, 1995.0], [52.1, 1996.0], [52.2, 1998.0], [52.3, 1999.0], [52.4, 2001.0], [52.5, 2002.0], [52.6, 2003.0], [52.7, 2005.0], [52.8, 2008.0], [52.9, 2010.0], [53.0, 2013.0], [53.1, 2016.0], [53.2, 2019.0], [53.3, 2020.0], [53.4, 2022.0], [53.5, 2024.0], [53.6, 2026.0], [53.7, 2029.0], [53.8, 2032.0], [53.9, 2035.0], [54.0, 2037.0], [54.1, 2038.0], [54.2, 2042.0], [54.3, 2043.0], [54.4, 2044.0], [54.5, 2048.0], [54.6, 2049.0], [54.7, 2051.0], [54.8, 2053.0], [54.9, 2055.0], [55.0, 2056.0], [55.1, 2058.0], [55.2, 2060.0], [55.3, 2061.0], [55.4, 2064.0], [55.5, 2066.0], [55.6, 2067.0], [55.7, 2070.0], [55.8, 2073.0], [55.9, 2076.0], [56.0, 2077.0], [56.1, 2080.0], [56.2, 2082.0], [56.3, 2083.0], [56.4, 2086.0], [56.5, 2089.0], [56.6, 2090.0], [56.7, 2093.0], [56.8, 2095.0], [56.9, 2097.0], [57.0, 2101.0], [57.1, 2102.0], [57.2, 2104.0], [57.3, 2105.0], [57.4, 2107.0], [57.5, 2110.0], [57.6, 2112.0], [57.7, 2114.0], [57.8, 2117.0], [57.9, 2118.0], [58.0, 2123.0], [58.1, 2124.0], [58.2, 2126.0], [58.3, 2130.0], [58.4, 2133.0], [58.5, 2135.0], [58.6, 2138.0], [58.7, 2140.0], [58.8, 2142.0], [58.9, 2144.0], [59.0, 2148.0], [59.1, 2150.0], [59.2, 2153.0], [59.3, 2156.0], [59.4, 2158.0], [59.5, 2160.0], [59.6, 2162.0], [59.7, 2164.0], [59.8, 2166.0], [59.9, 2168.0], [60.0, 2169.0], [60.1, 2172.0], [60.2, 2176.0], [60.3, 2178.0], [60.4, 2181.0], [60.5, 2183.0], [60.6, 2187.0], [60.7, 2189.0], [60.8, 2192.0], [60.9, 2194.0], [61.0, 2196.0], [61.1, 2197.0], [61.2, 2201.0], [61.3, 2204.0], [61.4, 2208.0], [61.5, 2211.0], [61.6, 2214.0], [61.7, 2217.0], [61.8, 2219.0], [61.9, 2222.0], [62.0, 2224.0], [62.1, 2225.0], [62.2, 2227.0], [62.3, 2231.0], [62.4, 2232.0], [62.5, 2235.0], [62.6, 2238.0], [62.7, 2241.0], [62.8, 2246.0], [62.9, 2252.0], [63.0, 2253.0], [63.1, 2255.0], [63.2, 2257.0], [63.3, 2260.0], [63.4, 2262.0], [63.5, 2266.0], [63.6, 2267.0], [63.7, 2270.0], [63.8, 2271.0], [63.9, 2273.0], [64.0, 2274.0], [64.1, 2278.0], [64.2, 2280.0], [64.3, 2283.0], [64.4, 2287.0], [64.5, 2290.0], [64.6, 2292.0], [64.7, 2295.0], [64.8, 2298.0], [64.9, 2301.0], [65.0, 2306.0], [65.1, 2308.0], [65.2, 2310.0], [65.3, 2312.0], [65.4, 2314.0], [65.5, 2315.0], [65.6, 2318.0], [65.7, 2321.0], [65.8, 2322.0], [65.9, 2329.0], [66.0, 2331.0], [66.1, 2332.0], [66.2, 2334.0], [66.3, 2337.0], [66.4, 2340.0], [66.5, 2342.0], [66.6, 2345.0], [66.7, 2347.0], [66.8, 2351.0], [66.9, 2353.0], [67.0, 2354.0], [67.1, 2356.0], [67.2, 2361.0], [67.3, 2364.0], [67.4, 2368.0], [67.5, 2372.0], [67.6, 2375.0], [67.7, 2376.0], [67.8, 2379.0], [67.9, 2382.0], [68.0, 2384.0], [68.1, 2386.0], [68.2, 2389.0], [68.3, 2391.0], [68.4, 2393.0], [68.5, 2396.0], [68.6, 2401.0], [68.7, 2405.0], [68.8, 2408.0], [68.9, 2411.0], [69.0, 2413.0], [69.1, 2416.0], [69.2, 2417.0], [69.3, 2419.0], [69.4, 2422.0], [69.5, 2427.0], [69.6, 2432.0], [69.7, 2436.0], [69.8, 2440.0], [69.9, 2443.0], [70.0, 2445.0], [70.1, 2450.0], [70.2, 2452.0], [70.3, 2455.0], [70.4, 2458.0], [70.5, 2462.0], [70.6, 2465.0], [70.7, 2468.0], [70.8, 2471.0], [70.9, 2473.0], [71.0, 2478.0], [71.1, 2479.0], [71.2, 2483.0], [71.3, 2484.0], [71.4, 2487.0], [71.5, 2492.0], [71.6, 2497.0], [71.7, 2500.0], [71.8, 2504.0], [71.9, 2510.0], [72.0, 2512.0], [72.1, 2514.0], [72.2, 2519.0], [72.3, 2524.0], [72.4, 2527.0], [72.5, 2528.0], [72.6, 2530.0], [72.7, 2533.0], [72.8, 2535.0], [72.9, 2537.0], [73.0, 2539.0], [73.1, 2542.0], [73.2, 2547.0], [73.3, 2549.0], [73.4, 2551.0], [73.5, 2554.0], [73.6, 2557.0], [73.7, 2562.0], [73.8, 2564.0], [73.9, 2567.0], [74.0, 2569.0], [74.1, 2572.0], [74.2, 2576.0], [74.3, 2582.0], [74.4, 2584.0], [74.5, 2588.0], [74.6, 2591.0], [74.7, 2593.0], [74.8, 2596.0], [74.9, 2599.0], [75.0, 2602.0], [75.1, 2605.0], [75.2, 2608.0], [75.3, 2612.0], [75.4, 2615.0], [75.5, 2617.0], [75.6, 2619.0], [75.7, 2624.0], [75.8, 2628.0], [75.9, 2631.0], [76.0, 2635.0], [76.1, 2638.0], [76.2, 2642.0], [76.3, 2645.0], [76.4, 2648.0], [76.5, 2652.0], [76.6, 2654.0], [76.7, 2657.0], [76.8, 2659.0], [76.9, 2663.0], [77.0, 2665.0], [77.1, 2670.0], [77.2, 2671.0], [77.3, 2674.0], [77.4, 2676.0], [77.5, 2679.0], [77.6, 2683.0], [77.7, 2687.0], [77.8, 2692.0], [77.9, 2694.0], [78.0, 2699.0], [78.1, 2704.0], [78.2, 2705.0], [78.3, 2707.0], [78.4, 2708.0], [78.5, 2715.0], [78.6, 2718.0], [78.7, 2720.0], [78.8, 2723.0], [78.9, 2724.0], [79.0, 2726.0], [79.1, 2730.0], [79.2, 2731.0], [79.3, 2735.0], [79.4, 2738.0], [79.5, 2746.0], [79.6, 2748.0], [79.7, 2752.0], [79.8, 2754.0], [79.9, 2758.0], [80.0, 2760.0], [80.1, 2763.0], [80.2, 2766.0], [80.3, 2769.0], [80.4, 2776.0], [80.5, 2777.0], [80.6, 2780.0], [80.7, 2786.0], [80.8, 2792.0], [80.9, 2796.0], [81.0, 2799.0], [81.1, 2802.0], [81.2, 2807.0], [81.3, 2810.0], [81.4, 2815.0], [81.5, 2820.0], [81.6, 2823.0], [81.7, 2827.0], [81.8, 2829.0], [81.9, 2833.0], [82.0, 2837.0], [82.1, 2842.0], [82.2, 2845.0], [82.3, 2847.0], [82.4, 2848.0], [82.5, 2851.0], [82.6, 2859.0], [82.7, 2866.0], [82.8, 2871.0], [82.9, 2879.0], [83.0, 2884.0], [83.1, 2884.0], [83.2, 2891.0], [83.3, 2894.0], [83.4, 2895.0], [83.5, 2896.0], [83.6, 2904.0], [83.7, 2909.0], [83.8, 2912.0], [83.9, 2918.0], [84.0, 2921.0], [84.1, 2925.0], [84.2, 2928.0], [84.3, 2937.0], [84.4, 2938.0], [84.5, 2941.0], [84.6, 2943.0], [84.7, 2949.0], [84.8, 2952.0], [84.9, 2956.0], [85.0, 2962.0], [85.1, 2966.0], [85.2, 2972.0], [85.3, 2976.0], [85.4, 2979.0], [85.5, 2984.0], [85.6, 2988.0], [85.7, 2991.0], [85.8, 2996.0], [85.9, 3005.0], [86.0, 3007.0], [86.1, 3011.0], [86.2, 3018.0], [86.3, 3021.0], [86.4, 3031.0], [86.5, 3040.0], [86.6, 3047.0], [86.7, 3064.0], [86.8, 3076.0], [86.9, 3084.0], [87.0, 3090.0], [87.1, 3098.0], [87.2, 3104.0], [87.3, 3112.0], [87.4, 3119.0], [87.5, 3125.0], [87.6, 3130.0], [87.7, 3132.0], [87.8, 3138.0], [87.9, 3143.0], [88.0, 3148.0], [88.1, 3152.0], [88.2, 3154.0], [88.3, 3162.0], [88.4, 3170.0], [88.5, 3178.0], [88.6, 3184.0], [88.7, 3189.0], [88.8, 3193.0], [88.9, 3198.0], [89.0, 3205.0], [89.1, 3207.0], [89.2, 3214.0], [89.3, 3218.0], [89.4, 3221.0], [89.5, 3229.0], [89.6, 3233.0], [89.7, 3237.0], [89.8, 3246.0], [89.9, 3250.0], [90.0, 3258.0], [90.1, 3264.0], [90.2, 3268.0], [90.3, 3280.0], [90.4, 3290.0], [90.5, 3300.0], [90.6, 3312.0], [90.7, 3317.0], [90.8, 3325.0], [90.9, 3337.0], [91.0, 3344.0], [91.1, 3352.0], [91.2, 3367.0], [91.3, 3376.0], [91.4, 3387.0], [91.5, 3397.0], [91.6, 3406.0], [91.7, 3410.0], [91.8, 3418.0], [91.9, 3428.0], [92.0, 3436.0], [92.1, 3449.0], [92.2, 3459.0], [92.3, 3462.0], [92.4, 3471.0], [92.5, 3486.0], [92.6, 3497.0], [92.7, 3510.0], [92.8, 3522.0], [92.9, 3526.0], [93.0, 3533.0], [93.1, 3540.0], [93.2, 3543.0], [93.3, 3556.0], [93.4, 3567.0], [93.5, 3574.0], [93.6, 3579.0], [93.7, 3591.0], [93.8, 3600.0], [93.9, 3609.0], [94.0, 3626.0], [94.1, 3647.0], [94.2, 3661.0], [94.3, 3674.0], [94.4, 3691.0], [94.5, 3702.0], [94.6, 3720.0], [94.7, 3725.0], [94.8, 3741.0], [94.9, 3753.0], [95.0, 3765.0], [95.1, 3772.0], [95.2, 3782.0], [95.3, 3806.0], [95.4, 3818.0], [95.5, 3833.0], [95.6, 3861.0], [95.7, 3879.0], [95.8, 3901.0], [95.9, 3914.0], [96.0, 3937.0], [96.1, 3948.0], [96.2, 3969.0], [96.3, 3994.0], [96.4, 4030.0], [96.5, 4060.0], [96.6, 4098.0], [96.7, 4118.0], [96.8, 4126.0], [96.9, 4153.0], [97.0, 4173.0], [97.1, 4202.0], [97.2, 4236.0], [97.3, 4269.0], [97.4, 4301.0], [97.5, 4330.0], [97.6, 4399.0], [97.7, 4456.0], [97.8, 4476.0], [97.9, 4508.0], [98.0, 4533.0], [98.1, 4577.0], [98.2, 4679.0], [98.3, 4708.0], [98.4, 4739.0], [98.5, 4787.0], [98.6, 4859.0], [98.7, 4967.0], [98.8, 5060.0], [98.9, 5218.0], [99.0, 5297.0], [99.1, 5403.0], [99.2, 5619.0], [99.3, 5914.0], [99.4, 6158.0], [99.5, 6565.0], [99.6, 6695.0], [99.7, 6946.0], [99.8, 7302.0], [99.9, 7927.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 700.0, "maxY": 306.0, "series": [{"data": [[700.0, 126.0], [800.0, 300.0], [900.0, 216.0], [1000.0, 105.0], [1100.0, 149.0], [1200.0, 174.0], [1300.0, 192.0], [1400.0, 177.0], [1500.0, 202.0], [1600.0, 225.0], [1700.0, 241.0], [1800.0, 303.0], [1900.0, 306.0], [2000.0, 240.0], [2100.0, 220.0], [2300.0, 194.0], [2200.0, 189.0], [2400.0, 159.0], [2500.0, 170.0], [2600.0, 162.0], [2700.0, 154.0], [2800.0, 131.0], [2900.0, 122.0], [3000.0, 64.0], [3100.0, 96.0], [3200.0, 79.0], [3300.0, 55.0], [3400.0, 57.0], [3500.0, 59.0], [3600.0, 36.0], [3700.0, 39.0], [3800.0, 30.0], [3900.0, 27.0], [4000.0, 15.0], [4200.0, 15.0], [4100.0, 25.0], [4300.0, 12.0], [4400.0, 15.0], [4500.0, 14.0], [4600.0, 5.0], [4700.0, 13.0], [4800.0, 9.0], [5100.0, 2.0], [4900.0, 4.0], [5000.0, 3.0], [5200.0, 8.0], [5300.0, 4.0], [5500.0, 1.0], [5600.0, 3.0], [5400.0, 3.0], [5800.0, 1.0], [5700.0, 2.0], [6100.0, 4.0], [5900.0, 2.0], [6000.0, 1.0], [6200.0, 2.0], [6500.0, 2.0], [6400.0, 2.0], [6600.0, 4.0], [6900.0, 3.0], [6800.0, 1.0], [6700.0, 2.0], [7000.0, 2.0], [7300.0, 2.0], [7200.0, 1.0], [7600.0, 3.0], [7900.0, 1.0], [8100.0, 1.0], [8500.0, 1.0], [9400.0, 1.0], [10400.0, 1.0], [10900.0, 1.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 10900.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 1441.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 3749.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1441.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 3749.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 11.72033898305085, "minX": 1.60247034E12, "maxY": 12.0, "series": [{"data": [[1.602471E12, 12.0], [1.6024707E12, 12.0], [1.60247064E12, 12.0], [1.60247034E12, 12.0], [1.60247124E12, 11.72033898305085], [1.60247094E12, 12.0], [1.60247088E12, 12.0], [1.60247058E12, 12.0], [1.60247052E12, 12.0], [1.60247118E12, 12.0], [1.60247112E12, 12.0], [1.60247082E12, 12.0], [1.60247076E12, 12.0], [1.60247046E12, 12.0], [1.6024704E12, 12.0], [1.60247106E12, 12.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60247124E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 1586.0, "minX": 1.0, "maxY": 3774.0, "series": [{"data": [[8.0, 2033.0], [4.0, 2079.0], [2.0, 3742.0], [1.0, 3667.0], [9.0, 2978.0], [10.0, 2365.0], [5.0, 2079.0], [11.0, 1586.0], [12.0, 2098.7383664800145], [6.0, 2048.0], [3.0, 3774.0], [7.0, 2166.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[11.987283236994216, 2099.784778420037]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 12.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 663.2666666666667, "minX": 1.60247034E12, "maxY": 2069528.9333333333, "series": [{"data": [[1.602471E12, 1712873.9166666667], [1.6024707E12, 1702312.55], [1.60247064E12, 1768394.8333333333], [1.60247034E12, 563321.7166666667], [1.60247124E12, 1139119.7], [1.60247094E12, 1076389.55], [1.60247088E12, 1422264.4], [1.60247058E12, 2069528.9333333333], [1.60247052E12, 1300678.9333333333], [1.60247118E12, 1539948.0], [1.60247112E12, 1519479.0333333334], [1.60247082E12, 1731417.75], [1.60247076E12, 1508679.7166666666], [1.60247046E12, 1419064.0666666667], [1.6024704E12, 1554711.4666666666], [1.60247106E12, 1943949.1333333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.602471E12, 2573.633333333333], [1.6024707E12, 2647.516666666667], [1.60247064E12, 2673.45], [1.60247034E12, 663.2666666666667], [1.60247124E12, 1772.5], [1.60247094E12, 2550.15], [1.60247088E12, 2481.55], [1.60247058E12, 2634.5833333333335], [1.60247052E12, 2968.2166666666667], [1.60247118E12, 2965.2166666666667], [1.60247112E12, 2689.05], [1.60247082E12, 2045.2166666666667], [1.60247076E12, 2640.1], [1.60247046E12, 2333.6666666666665], [1.6024704E12, 2172.7833333333333], [1.60247106E12, 2766.4333333333334]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60247124E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 1766.2709359605897, "minX": 1.60247034E12, "maxY": 2605.5956678700345, "series": [{"data": [[1.602471E12, 2056.514285714286], [1.6024707E12, 2055.6368876080696], [1.60247064E12, 2015.6892655367233], [1.60247034E12, 2593.5517241379307], [1.60247124E12, 2559.6991525423714], [1.60247094E12, 2070.977077363899], [1.60247088E12, 2056.0862068965516], [1.60247058E12, 2068.2939481268027], [1.60247052E12, 1766.2709359605897], [1.60247118E12, 1835.4168797953964], [1.60247112E12, 2027.8050847457616], [1.60247082E12, 2605.5956678700345], [1.60247076E12, 2077.4488636363635], [1.60247046E12, 2317.247648902822], [1.6024704E12, 2274.8571428571413], [1.60247106E12, 1972.769863013699]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60247124E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 1764.8029556650247, "minX": 1.60247034E12, "maxY": 2602.938628158845, "series": [{"data": [[1.602471E12, 2054.880000000001], [1.6024707E12, 2053.605187319885], [1.60247064E12, 2013.5254237288127], [1.60247034E12, 2590.8045977011498], [1.60247124E12, 2558.1101694915255], [1.60247094E12, 2069.962750716331], [1.60247088E12, 2054.4942528735637], [1.60247058E12, 2065.703170028819], [1.60247052E12, 1764.8029556650247], [1.60247118E12, 1834.1534526854218], [1.60247112E12, 2026.353107344632], [1.60247082E12, 2602.938628158845], [1.60247076E12, 2075.7102272727275], [1.60247046E12, 2315.341692789967], [1.6024704E12, 2272.574675324675], [1.60247106E12, 1971.0082191780818]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60247124E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.023017902813299223, "minX": 1.60247034E12, "maxY": 1.7931034482758625, "series": [{"data": [[1.602471E12, 0.02857142857142857], [1.6024707E12, 0.04034582132564841], [1.60247064E12, 0.04237288135593221], [1.60247034E12, 1.7931034482758625], [1.60247124E12, 0.029661016949152557], [1.60247094E12, 0.03724928366762177], [1.60247088E12, 0.03160919540229884], [1.60247058E12, 0.043227665706051875], [1.60247052E12, 0.03694581280788181], [1.60247118E12, 0.023017902813299223], [1.60247112E12, 0.025423728813559327], [1.60247082E12, 0.03971119133574007], [1.60247076E12, 0.04829545454545453], [1.60247046E12, 0.04075235109717871], [1.6024704E12, 0.042207792207792215], [1.60247106E12, 0.03287671232876713]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60247124E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 702.0, "minX": 1.60247034E12, "maxY": 10931.0, "series": [{"data": [[1.602471E12, 4887.0], [1.6024707E12, 5068.0], [1.60247064E12, 4967.0], [1.60247034E12, 4774.0], [1.60247124E12, 6714.0], [1.60247094E12, 5921.0], [1.60247088E12, 8518.0], [1.60247058E12, 3671.0], [1.60247052E12, 5438.0], [1.60247118E12, 5392.0], [1.60247112E12, 3736.0], [1.60247082E12, 10931.0], [1.60247076E12, 6942.0], [1.60247046E12, 7651.0], [1.6024704E12, 9439.0], [1.60247106E12, 4348.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.602471E12, 862.3179998326301], [1.6024707E12, 774.2639998340607], [1.60247064E12, 719.3399989843368], [1.60247034E12, 1103.0], [1.60247124E12, 1249.1329999434947], [1.60247094E12, 757.1499999165535], [1.60247088E12, 853.4229997503758], [1.60247058E12, 789.6199970960618], [1.60247052E12, 784.6629999029636], [1.60247118E12, 749.5279999065399], [1.60247112E12, 803.3399989843368], [1.60247082E12, 756.5259991383552], [1.60247076E12, 716.8319986534119], [1.60247046E12, 979.3599983215332], [1.6024704E12, 787.3719991159439], [1.60247106E12, 763.8819997382165]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.602471E12, 862.9498000669479], [1.6024707E12, 774.8904000663757], [1.60247064E12, 723.1740004062652], [1.60247034E12, 1103.0], [1.60247124E12, 1249.346300022602], [1.60247094E12, 757.4650000333786], [1.60247088E12, 854.3653000998497], [1.60247058E12, 800.5820011615754], [1.60247052E12, 785.2051002717018], [1.60247118E12, 749.880800037384], [1.60247112E12, 807.1740004062652], [1.60247082E12, 759.7786003446579], [1.60247076E12, 721.9152005386353], [1.60247046E12, 987.2080009460449], [1.6024704E12, 790.0591000294685], [1.60247106E12, 764.8702001047135]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.602471E12, 862.6689999163151], [1.6024707E12, 774.6119999170303], [1.60247064E12, 721.4699994921684], [1.60247034E12, 1103.0], [1.60247124E12, 1249.2514999717473], [1.60247094E12, 757.3249999582767], [1.60247088E12, 853.9464998751879], [1.60247058E12, 795.7099985480309], [1.60247052E12, 784.8664999514818], [1.60247118E12, 749.72399995327], [1.60247112E12, 805.4699994921684], [1.60247082E12, 758.3329995691777], [1.60247076E12, 719.6559993267059], [1.60247046E12, 983.2399988174438], [1.6024704E12, 789.2259995579719], [1.60247106E12, 764.4309998691082]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.602471E12, 837.0], [1.6024707E12, 767.0], [1.60247064E12, 702.0], [1.60247034E12, 1103.0], [1.60247124E12, 1245.0], [1.60247094E12, 749.0], [1.60247088E12, 846.0], [1.60247058E12, 768.0], [1.60247052E12, 755.0], [1.60247118E12, 740.0], [1.60247112E12, 780.0], [1.60247082E12, 748.0], [1.60247076E12, 710.0], [1.60247046E12, 935.0], [1.6024704E12, 761.0], [1.60247106E12, 746.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.602471E12, 1949.0], [1.6024707E12, 2041.0], [1.60247064E12, 1892.0], [1.60247034E12, 2399.0], [1.60247124E12, 2387.5], [1.60247094E12, 1824.0], [1.60247088E12, 1904.0], [1.60247058E12, 1982.0], [1.60247052E12, 1509.5], [1.60247118E12, 1681.0], [1.60247112E12, 2010.5], [1.60247082E12, 2334.0], [1.60247076E12, 2002.0], [1.60247046E12, 1979.0], [1.6024704E12, 2092.5], [1.60247106E12, 1926.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60247124E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 789.0, "minX": 1.0, "maxY": 2888.0, "series": [{"data": [[8.0, 1695.0], [2.0, 2754.5], [9.0, 1634.0], [10.0, 1500.0], [11.0, 982.0], [3.0, 2674.0], [12.0, 921.0], [13.0, 903.5], [14.0, 879.0], [15.0, 868.5], [1.0, 2888.0], [4.0, 2479.5], [16.0, 789.0], [5.0, 2252.0], [6.0, 2037.5], [7.0, 1921.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 16.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 788.5, "minX": 1.0, "maxY": 2887.0, "series": [{"data": [[8.0, 1691.0], [2.0, 2753.0], [9.0, 1634.0], [10.0, 1499.0], [11.0, 982.0], [3.0, 2674.0], [12.0, 920.5], [13.0, 903.5], [14.0, 878.5], [15.0, 868.0], [1.0, 2887.0], [4.0, 2479.0], [16.0, 788.5], [5.0, 2248.0], [6.0, 2036.5], [7.0, 1919.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 16.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1.65, "minX": 1.60247034E12, "maxY": 6.766666666666667, "series": [{"data": [[1.602471E12, 5.833333333333333], [1.6024707E12, 5.783333333333333], [1.60247064E12, 5.9], [1.60247034E12, 1.65], [1.60247124E12, 3.7333333333333334], [1.60247094E12, 5.816666666666666], [1.60247088E12, 5.8], [1.60247058E12, 5.783333333333333], [1.60247052E12, 6.766666666666667], [1.60247118E12, 6.516666666666667], [1.60247112E12, 5.9], [1.60247082E12, 4.616666666666666], [1.60247076E12, 5.866666666666666], [1.60247046E12, 5.316666666666666], [1.6024704E12, 5.133333333333334], [1.60247106E12, 6.083333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60247124E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1.45, "minX": 1.60247034E12, "maxY": 6.766666666666667, "series": [{"data": [[1.602471E12, 5.833333333333333], [1.6024707E12, 5.783333333333333], [1.60247064E12, 5.9], [1.60247034E12, 1.45], [1.60247124E12, 3.933333333333333], [1.60247094E12, 5.816666666666666], [1.60247088E12, 5.8], [1.60247058E12, 5.783333333333333], [1.60247052E12, 6.766666666666667], [1.60247118E12, 6.516666666666667], [1.60247112E12, 5.9], [1.60247082E12, 4.616666666666666], [1.60247076E12, 5.866666666666666], [1.60247046E12, 5.316666666666666], [1.6024704E12, 5.133333333333334], [1.60247106E12, 6.083333333333333]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60247124E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.45, "minX": 1.60247034E12, "maxY": 6.766666666666667, "series": [{"data": [[1.602471E12, 5.833333333333333], [1.6024707E12, 5.783333333333333], [1.60247064E12, 5.9], [1.60247034E12, 1.45], [1.60247124E12, 3.933333333333333], [1.60247094E12, 5.816666666666666], [1.60247088E12, 5.8], [1.60247058E12, 5.783333333333333], [1.60247052E12, 6.766666666666667], [1.60247118E12, 6.516666666666667], [1.60247112E12, 5.9], [1.60247082E12, 4.616666666666666], [1.60247076E12, 5.866666666666666], [1.60247046E12, 5.316666666666666], [1.6024704E12, 5.133333333333334], [1.60247106E12, 6.083333333333333]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60247124E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.45, "minX": 1.60247034E12, "maxY": 6.766666666666667, "series": [{"data": [[1.602471E12, 5.833333333333333], [1.6024707E12, 5.783333333333333], [1.60247064E12, 5.9], [1.60247034E12, 1.45], [1.60247124E12, 3.933333333333333], [1.60247094E12, 5.816666666666666], [1.60247088E12, 5.8], [1.60247058E12, 5.783333333333333], [1.60247052E12, 6.766666666666667], [1.60247118E12, 6.516666666666667], [1.60247112E12, 5.9], [1.60247082E12, 4.616666666666666], [1.60247076E12, 5.866666666666666], [1.60247046E12, 5.316666666666666], [1.6024704E12, 5.133333333333334], [1.60247106E12, 6.083333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60247124E12, "title": "Total Transactions Per Second"}},
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

