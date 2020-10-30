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
        data: {"result": {"minY": 568.0, "minX": 0.0, "maxY": 10970.0, "series": [{"data": [[0.0, 568.0], [0.1, 629.0], [0.2, 706.0], [0.3, 719.0], [0.4, 727.0], [0.5, 733.0], [0.6, 737.0], [0.7, 741.0], [0.8, 746.0], [0.9, 749.0], [1.0, 752.0], [1.1, 754.0], [1.2, 757.0], [1.3, 761.0], [1.4, 765.0], [1.5, 770.0], [1.6, 773.0], [1.7, 776.0], [1.8, 779.0], [1.9, 780.0], [2.0, 782.0], [2.1, 784.0], [2.2, 786.0], [2.3, 789.0], [2.4, 791.0], [2.5, 792.0], [2.6, 795.0], [2.7, 800.0], [2.8, 802.0], [2.9, 804.0], [3.0, 804.0], [3.1, 806.0], [3.2, 809.0], [3.3, 811.0], [3.4, 812.0], [3.5, 814.0], [3.6, 815.0], [3.7, 817.0], [3.8, 819.0], [3.9, 821.0], [4.0, 822.0], [4.1, 823.0], [4.2, 824.0], [4.3, 825.0], [4.4, 827.0], [4.5, 828.0], [4.6, 830.0], [4.7, 831.0], [4.8, 833.0], [4.9, 833.0], [5.0, 834.0], [5.1, 835.0], [5.2, 838.0], [5.3, 839.0], [5.4, 841.0], [5.5, 844.0], [5.6, 846.0], [5.7, 846.0], [5.8, 847.0], [5.9, 848.0], [6.0, 850.0], [6.1, 852.0], [6.2, 853.0], [6.3, 854.0], [6.4, 856.0], [6.5, 858.0], [6.6, 859.0], [6.7, 861.0], [6.8, 864.0], [6.9, 864.0], [7.0, 866.0], [7.1, 867.0], [7.2, 870.0], [7.3, 872.0], [7.4, 874.0], [7.5, 876.0], [7.6, 878.0], [7.7, 879.0], [7.8, 881.0], [7.9, 883.0], [8.0, 886.0], [8.1, 888.0], [8.2, 890.0], [8.3, 891.0], [8.4, 892.0], [8.5, 894.0], [8.6, 895.0], [8.7, 896.0], [8.8, 897.0], [8.9, 898.0], [9.0, 902.0], [9.1, 904.0], [9.2, 907.0], [9.3, 908.0], [9.4, 910.0], [9.5, 912.0], [9.6, 913.0], [9.7, 915.0], [9.8, 916.0], [9.9, 917.0], [10.0, 921.0], [10.1, 924.0], [10.2, 927.0], [10.3, 931.0], [10.4, 933.0], [10.5, 936.0], [10.6, 939.0], [10.7, 940.0], [10.8, 943.0], [10.9, 948.0], [11.0, 950.0], [11.1, 952.0], [11.2, 954.0], [11.3, 957.0], [11.4, 959.0], [11.5, 962.0], [11.6, 971.0], [11.7, 974.0], [11.8, 978.0], [11.9, 981.0], [12.0, 985.0], [12.1, 992.0], [12.2, 996.0], [12.3, 1001.0], [12.4, 1005.0], [12.5, 1008.0], [12.6, 1010.0], [12.7, 1021.0], [12.8, 1025.0], [12.9, 1031.0], [13.0, 1033.0], [13.1, 1040.0], [13.2, 1042.0], [13.3, 1046.0], [13.4, 1050.0], [13.5, 1055.0], [13.6, 1062.0], [13.7, 1069.0], [13.8, 1074.0], [13.9, 1075.0], [14.0, 1078.0], [14.1, 1082.0], [14.2, 1086.0], [14.3, 1090.0], [14.4, 1093.0], [14.5, 1095.0], [14.6, 1098.0], [14.7, 1099.0], [14.8, 1102.0], [14.9, 1104.0], [15.0, 1109.0], [15.1, 1113.0], [15.2, 1114.0], [15.3, 1116.0], [15.4, 1119.0], [15.5, 1121.0], [15.6, 1122.0], [15.7, 1125.0], [15.8, 1127.0], [15.9, 1131.0], [16.0, 1133.0], [16.1, 1134.0], [16.2, 1139.0], [16.3, 1144.0], [16.4, 1145.0], [16.5, 1150.0], [16.6, 1153.0], [16.7, 1156.0], [16.8, 1158.0], [16.9, 1163.0], [17.0, 1168.0], [17.1, 1172.0], [17.2, 1176.0], [17.3, 1179.0], [17.4, 1183.0], [17.5, 1183.0], [17.6, 1186.0], [17.7, 1189.0], [17.8, 1192.0], [17.9, 1197.0], [18.0, 1201.0], [18.1, 1205.0], [18.2, 1208.0], [18.3, 1213.0], [18.4, 1215.0], [18.5, 1217.0], [18.6, 1219.0], [18.7, 1222.0], [18.8, 1225.0], [18.9, 1228.0], [19.0, 1231.0], [19.1, 1234.0], [19.2, 1235.0], [19.3, 1237.0], [19.4, 1240.0], [19.5, 1242.0], [19.6, 1246.0], [19.7, 1251.0], [19.8, 1253.0], [19.9, 1256.0], [20.0, 1258.0], [20.1, 1259.0], [20.2, 1262.0], [20.3, 1264.0], [20.4, 1266.0], [20.5, 1270.0], [20.6, 1277.0], [20.7, 1278.0], [20.8, 1280.0], [20.9, 1283.0], [21.0, 1284.0], [21.1, 1285.0], [21.2, 1292.0], [21.3, 1295.0], [21.4, 1298.0], [21.5, 1300.0], [21.6, 1301.0], [21.7, 1307.0], [21.8, 1309.0], [21.9, 1312.0], [22.0, 1317.0], [22.1, 1319.0], [22.2, 1320.0], [22.3, 1321.0], [22.4, 1324.0], [22.5, 1326.0], [22.6, 1329.0], [22.7, 1332.0], [22.8, 1334.0], [22.9, 1336.0], [23.0, 1341.0], [23.1, 1343.0], [23.2, 1345.0], [23.3, 1347.0], [23.4, 1353.0], [23.5, 1355.0], [23.6, 1358.0], [23.7, 1359.0], [23.8, 1361.0], [23.9, 1363.0], [24.0, 1366.0], [24.1, 1371.0], [24.2, 1374.0], [24.3, 1378.0], [24.4, 1381.0], [24.5, 1383.0], [24.6, 1386.0], [24.7, 1388.0], [24.8, 1391.0], [24.9, 1392.0], [25.0, 1394.0], [25.1, 1395.0], [25.2, 1401.0], [25.3, 1407.0], [25.4, 1411.0], [25.5, 1414.0], [25.6, 1416.0], [25.7, 1418.0], [25.8, 1420.0], [25.9, 1423.0], [26.0, 1426.0], [26.1, 1428.0], [26.2, 1430.0], [26.3, 1432.0], [26.4, 1435.0], [26.5, 1439.0], [26.6, 1441.0], [26.7, 1442.0], [26.8, 1445.0], [26.9, 1450.0], [27.0, 1452.0], [27.1, 1454.0], [27.2, 1457.0], [27.3, 1459.0], [27.4, 1462.0], [27.5, 1465.0], [27.6, 1466.0], [27.7, 1471.0], [27.8, 1475.0], [27.9, 1477.0], [28.0, 1479.0], [28.1, 1483.0], [28.2, 1484.0], [28.3, 1488.0], [28.4, 1492.0], [28.5, 1496.0], [28.6, 1499.0], [28.7, 1502.0], [28.8, 1504.0], [28.9, 1507.0], [29.0, 1509.0], [29.1, 1515.0], [29.2, 1518.0], [29.3, 1519.0], [29.4, 1524.0], [29.5, 1528.0], [29.6, 1529.0], [29.7, 1532.0], [29.8, 1536.0], [29.9, 1538.0], [30.0, 1543.0], [30.1, 1544.0], [30.2, 1545.0], [30.3, 1547.0], [30.4, 1551.0], [30.5, 1553.0], [30.6, 1556.0], [30.7, 1557.0], [30.8, 1560.0], [30.9, 1561.0], [31.0, 1562.0], [31.1, 1564.0], [31.2, 1568.0], [31.3, 1572.0], [31.4, 1574.0], [31.5, 1575.0], [31.6, 1576.0], [31.7, 1580.0], [31.8, 1582.0], [31.9, 1583.0], [32.0, 1585.0], [32.1, 1586.0], [32.2, 1589.0], [32.3, 1593.0], [32.4, 1595.0], [32.5, 1598.0], [32.6, 1600.0], [32.7, 1603.0], [32.8, 1605.0], [32.9, 1608.0], [33.0, 1611.0], [33.1, 1612.0], [33.2, 1615.0], [33.3, 1618.0], [33.4, 1620.0], [33.5, 1622.0], [33.6, 1624.0], [33.7, 1629.0], [33.8, 1632.0], [33.9, 1636.0], [34.0, 1639.0], [34.1, 1642.0], [34.2, 1644.0], [34.3, 1646.0], [34.4, 1648.0], [34.5, 1652.0], [34.6, 1654.0], [34.7, 1656.0], [34.8, 1659.0], [34.9, 1662.0], [35.0, 1664.0], [35.1, 1666.0], [35.2, 1668.0], [35.3, 1671.0], [35.4, 1673.0], [35.5, 1675.0], [35.6, 1676.0], [35.7, 1678.0], [35.8, 1681.0], [35.9, 1684.0], [36.0, 1685.0], [36.1, 1688.0], [36.2, 1690.0], [36.3, 1692.0], [36.4, 1696.0], [36.5, 1699.0], [36.6, 1702.0], [36.7, 1702.0], [36.8, 1705.0], [36.9, 1710.0], [37.0, 1713.0], [37.1, 1717.0], [37.2, 1717.0], [37.3, 1719.0], [37.4, 1722.0], [37.5, 1724.0], [37.6, 1725.0], [37.7, 1727.0], [37.8, 1729.0], [37.9, 1731.0], [38.0, 1733.0], [38.1, 1735.0], [38.2, 1736.0], [38.3, 1737.0], [38.4, 1741.0], [38.5, 1741.0], [38.6, 1744.0], [38.7, 1746.0], [38.8, 1748.0], [38.9, 1750.0], [39.0, 1751.0], [39.1, 1753.0], [39.2, 1754.0], [39.3, 1755.0], [39.4, 1759.0], [39.5, 1761.0], [39.6, 1765.0], [39.7, 1767.0], [39.8, 1768.0], [39.9, 1770.0], [40.0, 1773.0], [40.1, 1774.0], [40.2, 1777.0], [40.3, 1778.0], [40.4, 1780.0], [40.5, 1781.0], [40.6, 1785.0], [40.7, 1787.0], [40.8, 1789.0], [40.9, 1791.0], [41.0, 1792.0], [41.1, 1794.0], [41.2, 1796.0], [41.3, 1797.0], [41.4, 1799.0], [41.5, 1800.0], [41.6, 1803.0], [41.7, 1804.0], [41.8, 1807.0], [41.9, 1809.0], [42.0, 1811.0], [42.1, 1814.0], [42.2, 1816.0], [42.3, 1819.0], [42.4, 1823.0], [42.5, 1825.0], [42.6, 1828.0], [42.7, 1830.0], [42.8, 1831.0], [42.9, 1832.0], [43.0, 1834.0], [43.1, 1837.0], [43.2, 1840.0], [43.3, 1842.0], [43.4, 1844.0], [43.5, 1845.0], [43.6, 1846.0], [43.7, 1849.0], [43.8, 1851.0], [43.9, 1853.0], [44.0, 1855.0], [44.1, 1856.0], [44.2, 1858.0], [44.3, 1860.0], [44.4, 1860.0], [44.5, 1863.0], [44.6, 1864.0], [44.7, 1867.0], [44.8, 1868.0], [44.9, 1870.0], [45.0, 1870.0], [45.1, 1872.0], [45.2, 1874.0], [45.3, 1875.0], [45.4, 1877.0], [45.5, 1878.0], [45.6, 1879.0], [45.7, 1881.0], [45.8, 1884.0], [45.9, 1885.0], [46.0, 1886.0], [46.1, 1888.0], [46.2, 1889.0], [46.3, 1891.0], [46.4, 1893.0], [46.5, 1894.0], [46.6, 1895.0], [46.7, 1896.0], [46.8, 1898.0], [46.9, 1900.0], [47.0, 1902.0], [47.1, 1904.0], [47.2, 1906.0], [47.3, 1906.0], [47.4, 1909.0], [47.5, 1911.0], [47.6, 1913.0], [47.7, 1915.0], [47.8, 1915.0], [47.9, 1917.0], [48.0, 1918.0], [48.1, 1919.0], [48.2, 1920.0], [48.3, 1921.0], [48.4, 1923.0], [48.5, 1925.0], [48.6, 1925.0], [48.7, 1926.0], [48.8, 1930.0], [48.9, 1930.0], [49.0, 1932.0], [49.1, 1934.0], [49.2, 1936.0], [49.3, 1937.0], [49.4, 1938.0], [49.5, 1941.0], [49.6, 1942.0], [49.7, 1944.0], [49.8, 1945.0], [49.9, 1948.0], [50.0, 1949.0], [50.1, 1951.0], [50.2, 1953.0], [50.3, 1957.0], [50.4, 1958.0], [50.5, 1959.0], [50.6, 1960.0], [50.7, 1963.0], [50.8, 1964.0], [50.9, 1965.0], [51.0, 1966.0], [51.1, 1968.0], [51.2, 1970.0], [51.3, 1973.0], [51.4, 1976.0], [51.5, 1977.0], [51.6, 1979.0], [51.7, 1980.0], [51.8, 1981.0], [51.9, 1982.0], [52.0, 1983.0], [52.1, 1985.0], [52.2, 1986.0], [52.3, 1988.0], [52.4, 1989.0], [52.5, 1991.0], [52.6, 1993.0], [52.7, 1997.0], [52.8, 1997.0], [52.9, 1998.0], [53.0, 1999.0], [53.1, 2001.0], [53.2, 2003.0], [53.3, 2005.0], [53.4, 2006.0], [53.5, 2007.0], [53.6, 2010.0], [53.7, 2012.0], [53.8, 2013.0], [53.9, 2013.0], [54.0, 2015.0], [54.1, 2018.0], [54.2, 2019.0], [54.3, 2022.0], [54.4, 2023.0], [54.5, 2026.0], [54.6, 2028.0], [54.7, 2030.0], [54.8, 2032.0], [54.9, 2035.0], [55.0, 2036.0], [55.1, 2039.0], [55.2, 2040.0], [55.3, 2042.0], [55.4, 2047.0], [55.5, 2048.0], [55.6, 2050.0], [55.7, 2051.0], [55.8, 2053.0], [55.9, 2056.0], [56.0, 2058.0], [56.1, 2060.0], [56.2, 2062.0], [56.3, 2064.0], [56.4, 2066.0], [56.5, 2067.0], [56.6, 2068.0], [56.7, 2071.0], [56.8, 2073.0], [56.9, 2075.0], [57.0, 2078.0], [57.1, 2080.0], [57.2, 2083.0], [57.3, 2086.0], [57.4, 2089.0], [57.5, 2092.0], [57.6, 2094.0], [57.7, 2095.0], [57.8, 2096.0], [57.9, 2098.0], [58.0, 2100.0], [58.1, 2103.0], [58.2, 2104.0], [58.3, 2107.0], [58.4, 2108.0], [58.5, 2110.0], [58.6, 2112.0], [58.7, 2114.0], [58.8, 2117.0], [58.9, 2120.0], [59.0, 2122.0], [59.1, 2127.0], [59.2, 2129.0], [59.3, 2132.0], [59.4, 2133.0], [59.5, 2135.0], [59.6, 2137.0], [59.7, 2138.0], [59.8, 2141.0], [59.9, 2144.0], [60.0, 2146.0], [60.1, 2150.0], [60.2, 2151.0], [60.3, 2154.0], [60.4, 2156.0], [60.5, 2160.0], [60.6, 2162.0], [60.7, 2165.0], [60.8, 2167.0], [60.9, 2169.0], [61.0, 2170.0], [61.1, 2171.0], [61.2, 2174.0], [61.3, 2176.0], [61.4, 2180.0], [61.5, 2184.0], [61.6, 2187.0], [61.7, 2189.0], [61.8, 2192.0], [61.9, 2194.0], [62.0, 2195.0], [62.1, 2197.0], [62.2, 2200.0], [62.3, 2201.0], [62.4, 2203.0], [62.5, 2208.0], [62.6, 2210.0], [62.7, 2213.0], [62.8, 2214.0], [62.9, 2217.0], [63.0, 2220.0], [63.1, 2221.0], [63.2, 2225.0], [63.3, 2228.0], [63.4, 2230.0], [63.5, 2232.0], [63.6, 2235.0], [63.7, 2239.0], [63.8, 2241.0], [63.9, 2243.0], [64.0, 2244.0], [64.1, 2247.0], [64.2, 2248.0], [64.3, 2250.0], [64.4, 2252.0], [64.5, 2253.0], [64.6, 2256.0], [64.7, 2258.0], [64.8, 2262.0], [64.9, 2266.0], [65.0, 2268.0], [65.1, 2270.0], [65.2, 2272.0], [65.3, 2278.0], [65.4, 2281.0], [65.5, 2284.0], [65.6, 2287.0], [65.7, 2289.0], [65.8, 2292.0], [65.9, 2294.0], [66.0, 2296.0], [66.1, 2300.0], [66.2, 2302.0], [66.3, 2304.0], [66.4, 2308.0], [66.5, 2311.0], [66.6, 2313.0], [66.7, 2315.0], [66.8, 2317.0], [66.9, 2320.0], [67.0, 2323.0], [67.1, 2329.0], [67.2, 2334.0], [67.3, 2336.0], [67.4, 2339.0], [67.5, 2341.0], [67.6, 2345.0], [67.7, 2350.0], [67.8, 2359.0], [67.9, 2361.0], [68.0, 2365.0], [68.1, 2367.0], [68.2, 2369.0], [68.3, 2372.0], [68.4, 2376.0], [68.5, 2379.0], [68.6, 2383.0], [68.7, 2385.0], [68.8, 2391.0], [68.9, 2393.0], [69.0, 2398.0], [69.1, 2400.0], [69.2, 2402.0], [69.3, 2403.0], [69.4, 2406.0], [69.5, 2408.0], [69.6, 2410.0], [69.7, 2411.0], [69.8, 2413.0], [69.9, 2416.0], [70.0, 2420.0], [70.1, 2425.0], [70.2, 2428.0], [70.3, 2431.0], [70.4, 2436.0], [70.5, 2438.0], [70.6, 2440.0], [70.7, 2443.0], [70.8, 2445.0], [70.9, 2449.0], [71.0, 2452.0], [71.1, 2456.0], [71.2, 2461.0], [71.3, 2464.0], [71.4, 2466.0], [71.5, 2468.0], [71.6, 2472.0], [71.7, 2475.0], [71.8, 2478.0], [71.9, 2480.0], [72.0, 2484.0], [72.1, 2488.0], [72.2, 2491.0], [72.3, 2493.0], [72.4, 2497.0], [72.5, 2499.0], [72.6, 2501.0], [72.7, 2504.0], [72.8, 2507.0], [72.9, 2509.0], [73.0, 2511.0], [73.1, 2514.0], [73.2, 2521.0], [73.3, 2525.0], [73.4, 2529.0], [73.5, 2531.0], [73.6, 2533.0], [73.7, 2533.0], [73.8, 2537.0], [73.9, 2543.0], [74.0, 2546.0], [74.1, 2550.0], [74.2, 2554.0], [74.3, 2560.0], [74.4, 2565.0], [74.5, 2570.0], [74.6, 2572.0], [74.7, 2574.0], [74.8, 2577.0], [74.9, 2581.0], [75.0, 2584.0], [75.1, 2587.0], [75.2, 2590.0], [75.3, 2592.0], [75.4, 2595.0], [75.5, 2600.0], [75.6, 2601.0], [75.7, 2603.0], [75.8, 2607.0], [75.9, 2609.0], [76.0, 2614.0], [76.1, 2618.0], [76.2, 2622.0], [76.3, 2628.0], [76.4, 2634.0], [76.5, 2636.0], [76.6, 2639.0], [76.7, 2642.0], [76.8, 2644.0], [76.9, 2648.0], [77.0, 2652.0], [77.1, 2656.0], [77.2, 2658.0], [77.3, 2659.0], [77.4, 2662.0], [77.5, 2664.0], [77.6, 2666.0], [77.7, 2670.0], [77.8, 2674.0], [77.9, 2677.0], [78.0, 2680.0], [78.1, 2683.0], [78.2, 2684.0], [78.3, 2689.0], [78.4, 2691.0], [78.5, 2694.0], [78.6, 2698.0], [78.7, 2701.0], [78.8, 2703.0], [78.9, 2706.0], [79.0, 2708.0], [79.1, 2713.0], [79.2, 2716.0], [79.3, 2719.0], [79.4, 2722.0], [79.5, 2726.0], [79.6, 2729.0], [79.7, 2733.0], [79.8, 2734.0], [79.9, 2736.0], [80.0, 2740.0], [80.1, 2747.0], [80.2, 2749.0], [80.3, 2750.0], [80.4, 2753.0], [80.5, 2754.0], [80.6, 2759.0], [80.7, 2761.0], [80.8, 2765.0], [80.9, 2771.0], [81.0, 2773.0], [81.1, 2776.0], [81.2, 2780.0], [81.3, 2788.0], [81.4, 2789.0], [81.5, 2792.0], [81.6, 2796.0], [81.7, 2799.0], [81.8, 2804.0], [81.9, 2807.0], [82.0, 2811.0], [82.1, 2815.0], [82.2, 2818.0], [82.3, 2820.0], [82.4, 2823.0], [82.5, 2828.0], [82.6, 2830.0], [82.7, 2833.0], [82.8, 2837.0], [82.9, 2839.0], [83.0, 2845.0], [83.1, 2848.0], [83.2, 2849.0], [83.3, 2856.0], [83.4, 2859.0], [83.5, 2862.0], [83.6, 2866.0], [83.7, 2871.0], [83.8, 2873.0], [83.9, 2876.0], [84.0, 2877.0], [84.1, 2882.0], [84.2, 2883.0], [84.3, 2892.0], [84.4, 2895.0], [84.5, 2903.0], [84.6, 2910.0], [84.7, 2911.0], [84.8, 2921.0], [84.9, 2930.0], [85.0, 2939.0], [85.1, 2944.0], [85.2, 2948.0], [85.3, 2953.0], [85.4, 2960.0], [85.5, 2969.0], [85.6, 2976.0], [85.7, 2982.0], [85.8, 2991.0], [85.9, 2997.0], [86.0, 3007.0], [86.1, 3013.0], [86.2, 3016.0], [86.3, 3020.0], [86.4, 3026.0], [86.5, 3031.0], [86.6, 3040.0], [86.7, 3046.0], [86.8, 3052.0], [86.9, 3057.0], [87.0, 3059.0], [87.1, 3065.0], [87.2, 3069.0], [87.3, 3079.0], [87.4, 3089.0], [87.5, 3100.0], [87.6, 3104.0], [87.7, 3112.0], [87.8, 3118.0], [87.9, 3123.0], [88.0, 3130.0], [88.1, 3140.0], [88.2, 3146.0], [88.3, 3149.0], [88.4, 3154.0], [88.5, 3161.0], [88.6, 3165.0], [88.7, 3171.0], [88.8, 3177.0], [88.9, 3186.0], [89.0, 3194.0], [89.1, 3204.0], [89.2, 3210.0], [89.3, 3217.0], [89.4, 3225.0], [89.5, 3229.0], [89.6, 3235.0], [89.7, 3237.0], [89.8, 3243.0], [89.9, 3251.0], [90.0, 3261.0], [90.1, 3264.0], [90.2, 3267.0], [90.3, 3276.0], [90.4, 3286.0], [90.5, 3290.0], [90.6, 3305.0], [90.7, 3311.0], [90.8, 3316.0], [90.9, 3322.0], [91.0, 3334.0], [91.1, 3347.0], [91.2, 3358.0], [91.3, 3368.0], [91.4, 3372.0], [91.5, 3378.0], [91.6, 3385.0], [91.7, 3398.0], [91.8, 3404.0], [91.9, 3415.0], [92.0, 3420.0], [92.1, 3425.0], [92.2, 3439.0], [92.3, 3448.0], [92.4, 3453.0], [92.5, 3468.0], [92.6, 3474.0], [92.7, 3484.0], [92.8, 3487.0], [92.9, 3492.0], [93.0, 3498.0], [93.1, 3504.0], [93.2, 3517.0], [93.3, 3531.0], [93.4, 3543.0], [93.5, 3552.0], [93.6, 3570.0], [93.7, 3578.0], [93.8, 3590.0], [93.9, 3601.0], [94.0, 3610.0], [94.1, 3612.0], [94.2, 3622.0], [94.3, 3633.0], [94.4, 3639.0], [94.5, 3665.0], [94.6, 3679.0], [94.7, 3701.0], [94.8, 3729.0], [94.9, 3749.0], [95.0, 3764.0], [95.1, 3780.0], [95.2, 3796.0], [95.3, 3803.0], [95.4, 3817.0], [95.5, 3841.0], [95.6, 3852.0], [95.7, 3879.0], [95.8, 3897.0], [95.9, 3932.0], [96.0, 3950.0], [96.1, 3975.0], [96.2, 4001.0], [96.3, 4013.0], [96.4, 4081.0], [96.5, 4111.0], [96.6, 4134.0], [96.7, 4146.0], [96.8, 4158.0], [96.9, 4176.0], [97.0, 4202.0], [97.1, 4225.0], [97.2, 4247.0], [97.3, 4282.0], [97.4, 4310.0], [97.5, 4360.0], [97.6, 4430.0], [97.7, 4447.0], [97.8, 4460.0], [97.9, 4514.0], [98.0, 4584.0], [98.1, 4594.0], [98.2, 4632.0], [98.3, 4707.0], [98.4, 4721.0], [98.5, 4741.0], [98.6, 4834.0], [98.7, 4904.0], [98.8, 5035.0], [98.9, 5113.0], [99.0, 5285.0], [99.1, 5321.0], [99.2, 5455.0], [99.3, 5542.0], [99.4, 5865.0], [99.5, 6111.0], [99.6, 6490.0], [99.7, 6710.0], [99.8, 7270.0], [99.9, 7687.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 500.0, "maxY": 322.0, "series": [{"data": [[600.0, 8.0], [700.0, 130.0], [800.0, 322.0], [900.0, 175.0], [1000.0, 126.0], [1100.0, 170.0], [1200.0, 182.0], [1300.0, 191.0], [1400.0, 181.0], [1500.0, 204.0], [1600.0, 205.0], [1700.0, 253.0], [1800.0, 283.0], [1900.0, 319.0], [2000.0, 258.0], [2100.0, 217.0], [2200.0, 203.0], [2300.0, 155.0], [2400.0, 179.0], [2500.0, 155.0], [2600.0, 164.0], [2800.0, 143.0], [2700.0, 159.0], [2900.0, 77.0], [3000.0, 80.0], [3100.0, 81.0], [3200.0, 79.0], [3300.0, 60.0], [3400.0, 68.0], [3500.0, 44.0], [3600.0, 41.0], [3700.0, 28.0], [3800.0, 32.0], [3900.0, 18.0], [4000.0, 16.0], [4100.0, 24.0], [4300.0, 9.0], [4200.0, 22.0], [4600.0, 9.0], [4400.0, 15.0], [4500.0, 14.0], [4700.0, 15.0], [4800.0, 6.0], [5100.0, 2.0], [5000.0, 5.0], [4900.0, 5.0], [5200.0, 7.0], [5300.0, 5.0], [5500.0, 4.0], [5400.0, 5.0], [5600.0, 1.0], [5800.0, 3.0], [5700.0, 2.0], [6100.0, 3.0], [5900.0, 2.0], [6000.0, 1.0], [6300.0, 2.0], [6600.0, 2.0], [6500.0, 2.0], [6400.0, 1.0], [6700.0, 2.0], [6900.0, 1.0], [6800.0, 1.0], [7200.0, 3.0], [7400.0, 1.0], [7300.0, 1.0], [7600.0, 1.0], [7500.0, 1.0], [7700.0, 1.0], [8100.0, 1.0], [9300.0, 1.0], [10400.0, 1.0], [10900.0, 1.0], [500.0, 2.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 10900.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 1487.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 3703.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1487.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 3703.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 11.620689655172415, "minX": 1.60402428E12, "maxY": 12.0, "series": [{"data": [[1.60402434E12, 12.0], [1.60402464E12, 12.0], [1.6040247E12, 12.0], [1.604025E12, 12.0], [1.60402506E12, 12.0], [1.6040244E12, 12.0], [1.60402446E12, 12.0], [1.60402476E12, 12.0], [1.60402482E12, 12.0], [1.60402512E12, 12.0], [1.60402518E12, 11.620689655172415], [1.60402452E12, 12.0], [1.60402458E12, 12.0], [1.60402488E12, 12.0], [1.60402494E12, 12.0], [1.60402428E12, 12.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60402518E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 1761.0, "minX": 1.0, "maxY": 3879.0, "series": [{"data": [[8.0, 1834.0], [4.0, 1761.0], [2.0, 3879.0], [1.0, 3630.0], [9.0, 1937.0], [10.0, 2097.0], [5.0, 1785.0], [11.0, 2532.0], [12.0, 2079.6790886271456], [6.0, 1896.0], [3.0, 3774.0], [7.0, 1868.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[11.987283236994216, 2080.472254335258]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 12.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 833.8666666666667, "minX": 1.60402428E12, "maxY": 1967026.2333333334, "series": [{"data": [[1.60402434E12, 1498333.0333333334], [1.60402464E12, 1733951.1333333333], [1.6040247E12, 1464159.7666666666], [1.604025E12, 1740782.9], [1.60402506E12, 1608217.2], [1.6040244E12, 1371188.6166666667], [1.60402446E12, 1438923.5166666666], [1.60402476E12, 1663590.3166666667], [1.60402482E12, 1564953.35], [1.60402512E12, 1525926.5], [1.60402518E12, 793248.4833333333], [1.60402452E12, 1967026.2333333334], [1.60402458E12, 1824751.3666666667], [1.60402488E12, 1069988.7833333334], [1.60402494E12, 1914373.85], [1.60402428E12, 793281.9166666666]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60402434E12, 2277.766666666667], [1.60402464E12, 2854.9], [1.6040247E12, 2285.616666666667], [1.604025E12, 3051.45], [1.60402506E12, 2555.2166666666667], [1.6040244E12, 2366.2], [1.60402446E12, 2995.2833333333333], [1.60402476E12, 2218.0], [1.60402482E12, 2508.383333333333], [1.60402512E12, 2893.45], [1.60402518E12, 1306.7333333333333], [1.60402452E12, 2817.983333333333], [1.60402458E12, 2568.866666666667], [1.60402488E12, 2656.9166666666665], [1.60402494E12, 2386.7], [1.60402428E12, 833.8666666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60402518E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 1753.6206896551719, "minX": 1.60402428E12, "maxY": 2586.432432432433, "series": [{"data": [[1.60402434E12, 2251.938080495351], [1.60402464E12, 1911.662234042554], [1.6040247E12, 2342.240131578947], [1.604025E12, 1791.6079404466502], [1.60402506E12, 2164.22985074627], [1.6040244E12, 2229.5], [1.60402446E12, 1753.6206896551719], [1.60402476E12, 2372.7278688524584], [1.60402482E12, 2081.741379310343], [1.60402512E12, 1836.383812010444], [1.60402518E12, 2552.5], [1.60402452E12, 1944.6639784946246], [1.60402458E12, 2130.1769911504393], [1.60402488E12, 1983.433701657458], [1.60402494E12, 2190.2953846153837], [1.60402428E12, 2586.432432432433]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60402518E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 1751.928571428572, "minX": 1.60402428E12, "maxY": 2583.252252252251, "series": [{"data": [[1.60402434E12, 2249.7770897832834], [1.60402464E12, 1909.7127659574453], [1.6040247E12, 2340.0855263157887], [1.604025E12, 1790.0421836228293], [1.60402506E12, 2162.3850746268663], [1.6040244E12, 2227.5617283950605], [1.60402446E12, 1751.928571428572], [1.60402476E12, 2370.3934426229484], [1.60402482E12, 2080.0890804597675], [1.60402512E12, 1834.9425587467363], [1.60402518E12, 2550.7816091954023], [1.60402452E12, 1942.2688172043008], [1.60402458E12, 2127.8112094395287], [1.60402488E12, 1982.3535911602216], [1.60402494E12, 2188.193846153846], [1.60402428E12, 2583.252252252251]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60402518E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.00574712643678161, "minX": 1.60402428E12, "maxY": 1.117117117117117, "series": [{"data": [[1.60402434E12, 0.049535603715170275], [1.60402464E12, 0.03457446808510637], [1.6040247E12, 0.04276315789473684], [1.604025E12, 0.027295285359801493], [1.60402506E12, 0.035820895522388055], [1.6040244E12, 0.061728395061728454], [1.60402446E12, 0.03694581280788182], [1.60402476E12, 0.03934426229508196], [1.60402482E12, 0.03448275862068966], [1.60402512E12, 0.03133159268929505], [1.60402518E12, 0.00574712643678161], [1.60402452E12, 0.03763440860215057], [1.60402458E12, 0.041297935103244865], [1.60402488E12, 0.03867403314917127], [1.60402494E12, 0.04000000000000002], [1.60402428E12, 1.117117117117117]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60402518E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 568.0, "minX": 1.60402428E12, "maxY": 10970.0, "series": [{"data": [[1.60402434E12, 9329.0], [1.60402464E12, 5877.0], [1.6040247E12, 7222.0], [1.604025E12, 4225.0], [1.60402506E12, 4834.0], [1.6040244E12, 5498.0], [1.60402446E12, 5484.0], [1.60402476E12, 10970.0], [1.60402482E12, 7505.0], [1.60402512E12, 5790.0], [1.60402518E12, 5455.0], [1.60402452E12, 4731.0], [1.60402458E12, 5321.0], [1.60402488E12, 6050.0], [1.60402494E12, 4529.0], [1.60402428E12, 5120.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60402434E12, 598.3959976053238], [1.60402464E12, 748.7509993708134], [1.6040247E12, 742.939999127388], [1.604025E12, 768.1799995183944], [1.60402506E12, 785.1119929504395], [1.6040244E12, 1008.6499986052513], [1.60402446E12, 741.9779994177818], [1.60402476E12, 768.5119906616211], [1.60402482E12, 858.5639996671676], [1.60402512E12, 715.3679997253417], [1.60402518E12, 1243.6499974131584], [1.60402452E12, 746.0709997332096], [1.60402458E12, 754.4199994325638], [1.60402488E12, 737.266999913454], [1.60402494E12, 1027.9739952588081], [1.60402428E12, 1099.191999359131]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60402434E12, 608.8888011741639], [1.60402464E12, 751.1261002516746], [1.6040247E12, 746.4680006980896], [1.604025E12, 769.9980001926422], [1.60402506E12, 811.7232028198242], [1.6040244E12, 1012.8275004029274], [1.60402446E12, 744.2344003105163], [1.60402476E12, 800.4410004377365], [1.60402482E12, 859.8204001331329], [1.60402512E12, 716.4048001098632], [1.60402518E12, 1253.4150010347366], [1.60402452E12, 747.0781001067162], [1.60402458E12, 756.5620002269745], [1.60402488E12, 737.5937000346183], [1.60402494E12, 1034.046600279808], [1.60402428E12, 1101.6112002563477]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60402434E12, 603.9639985322952], [1.60402464E12, 750.0704996854067], [1.6040247E12, 744.769999563694], [1.604025E12, 769.1899997591972], [1.60402506E12, 799.8959964752197], [1.6040244E12, 1011.1374994963408], [1.60402446E12, 743.1989997088909], [1.60402476E12, 788.0959953308105], [1.60402482E12, 859.2619998335838], [1.60402512E12, 715.9439998626709], [1.60402518E12, 1249.0749987065792], [1.60402452E12, 746.6304998666049], [1.60402458E12, 755.6099997162819], [1.60402488E12, 737.448499956727], [1.60402494E12, 1032.87299965024], [1.60402428E12, 1100.5359996795655]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60402434E12, 568.0], [1.60402464E12, 735.0], [1.6040247E12, 719.0], [1.604025E12, 629.0], [1.60402506E12, 751.0], [1.6040244E12, 979.0], [1.60402446E12, 733.0], [1.60402476E12, 628.0], [1.60402482E12, 785.0], [1.60402512E12, 706.0], [1.60402518E12, 1208.0], [1.60402452E12, 736.0], [1.60402458E12, 727.0], [1.60402488E12, 623.0], [1.60402494E12, 804.0], [1.60402428E12, 1099.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60402434E12, 2013.0], [1.60402464E12, 1903.5], [1.6040247E12, 2200.5], [1.604025E12, 1680.0], [1.60402506E12, 2065.0], [1.6040244E12, 2058.0], [1.60402446E12, 1507.5], [1.60402476E12, 2187.0], [1.60402482E12, 1914.5], [1.60402512E12, 1653.0], [1.60402518E12, 2444.0], [1.60402452E12, 1902.5], [1.60402458E12, 2013.0], [1.60402488E12, 1770.5], [1.60402494E12, 2053.0], [1.60402428E12, 2533.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60402518E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 829.5, "minX": 1.0, "maxY": 2797.5, "series": [{"data": [[8.0, 1777.5], [2.0, 2694.0], [9.0, 1473.0], [10.0, 1316.5], [11.0, 979.0], [3.0, 2617.0], [12.0, 973.0], [13.0, 891.0], [14.0, 878.0], [15.0, 829.5], [1.0, 2797.5], [4.0, 2454.0], [16.0, 852.0], [5.0, 2186.0], [6.0, 2095.0], [7.0, 1962.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 16.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 829.5, "minX": 1.0, "maxY": 2794.5, "series": [{"data": [[8.0, 1777.5], [2.0, 2687.5], [9.0, 1473.0], [10.0, 1316.5], [11.0, 979.0], [3.0, 2613.0], [12.0, 973.0], [13.0, 890.5], [14.0, 877.5], [15.0, 829.5], [1.0, 2794.5], [4.0, 2453.0], [16.0, 851.5], [5.0, 2181.0], [6.0, 2094.0], [7.0, 1960.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 16.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 2.05, "minX": 1.60402428E12, "maxY": 6.766666666666667, "series": [{"data": [[1.60402434E12, 5.383333333333334], [1.60402464E12, 6.266666666666667], [1.6040247E12, 5.066666666666666], [1.604025E12, 6.716666666666667], [1.60402506E12, 5.583333333333333], [1.6040244E12, 5.4], [1.60402446E12, 6.766666666666667], [1.60402476E12, 5.083333333333333], [1.60402482E12, 5.8], [1.60402512E12, 6.383333333333334], [1.60402518E12, 2.7], [1.60402452E12, 6.2], [1.60402458E12, 5.65], [1.60402488E12, 6.033333333333333], [1.60402494E12, 5.416666666666667], [1.60402428E12, 2.05]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60402518E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1.85, "minX": 1.60402428E12, "maxY": 6.766666666666667, "series": [{"data": [[1.60402434E12, 5.383333333333334], [1.60402464E12, 6.266666666666667], [1.6040247E12, 5.066666666666666], [1.604025E12, 6.716666666666667], [1.60402506E12, 5.583333333333333], [1.6040244E12, 5.4], [1.60402446E12, 6.766666666666667], [1.60402476E12, 5.083333333333333], [1.60402482E12, 5.8], [1.60402512E12, 6.383333333333334], [1.60402518E12, 2.9], [1.60402452E12, 6.2], [1.60402458E12, 5.65], [1.60402488E12, 6.033333333333333], [1.60402494E12, 5.416666666666667], [1.60402428E12, 1.85]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60402518E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.85, "minX": 1.60402428E12, "maxY": 6.766666666666667, "series": [{"data": [[1.60402434E12, 5.383333333333334], [1.60402464E12, 6.266666666666667], [1.6040247E12, 5.066666666666666], [1.604025E12, 6.716666666666667], [1.60402506E12, 5.583333333333333], [1.6040244E12, 5.4], [1.60402446E12, 6.766666666666667], [1.60402476E12, 5.083333333333333], [1.60402482E12, 5.8], [1.60402512E12, 6.383333333333334], [1.60402518E12, 2.9], [1.60402452E12, 6.2], [1.60402458E12, 5.65], [1.60402488E12, 6.033333333333333], [1.60402494E12, 5.416666666666667], [1.60402428E12, 1.85]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60402518E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.85, "minX": 1.60402428E12, "maxY": 6.766666666666667, "series": [{"data": [[1.60402434E12, 5.383333333333334], [1.60402464E12, 6.266666666666667], [1.6040247E12, 5.066666666666666], [1.604025E12, 6.716666666666667], [1.60402506E12, 5.583333333333333], [1.6040244E12, 5.4], [1.60402446E12, 6.766666666666667], [1.60402476E12, 5.083333333333333], [1.60402482E12, 5.8], [1.60402512E12, 6.383333333333334], [1.60402518E12, 2.9], [1.60402452E12, 6.2], [1.60402458E12, 5.65], [1.60402488E12, 6.033333333333333], [1.60402494E12, 5.416666666666667], [1.60402428E12, 1.85]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60402518E12, "title": "Total Transactions Per Second"}},
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

