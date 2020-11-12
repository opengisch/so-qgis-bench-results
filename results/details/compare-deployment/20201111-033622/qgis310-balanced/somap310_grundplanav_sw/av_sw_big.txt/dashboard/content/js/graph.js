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
        data: {"result": {"minY": 368.0, "minX": 0.0, "maxY": 10312.0, "series": [{"data": [[0.0, 368.0], [0.1, 722.0], [0.2, 730.0], [0.3, 736.0], [0.4, 742.0], [0.5, 750.0], [0.6, 758.0], [0.7, 760.0], [0.8, 762.0], [0.9, 765.0], [1.0, 771.0], [1.1, 774.0], [1.2, 777.0], [1.3, 782.0], [1.4, 785.0], [1.5, 786.0], [1.6, 788.0], [1.7, 789.0], [1.8, 791.0], [1.9, 794.0], [2.0, 796.0], [2.1, 798.0], [2.2, 801.0], [2.3, 802.0], [2.4, 803.0], [2.5, 804.0], [2.6, 805.0], [2.7, 806.0], [2.8, 809.0], [2.9, 811.0], [3.0, 814.0], [3.1, 815.0], [3.2, 815.0], [3.3, 817.0], [3.4, 818.0], [3.5, 819.0], [3.6, 822.0], [3.7, 824.0], [3.8, 825.0], [3.9, 827.0], [4.0, 828.0], [4.1, 829.0], [4.2, 830.0], [4.3, 832.0], [4.4, 833.0], [4.5, 834.0], [4.6, 837.0], [4.7, 838.0], [4.8, 840.0], [4.9, 841.0], [5.0, 843.0], [5.1, 844.0], [5.2, 845.0], [5.3, 846.0], [5.4, 847.0], [5.5, 848.0], [5.6, 850.0], [5.7, 851.0], [5.8, 853.0], [5.9, 855.0], [6.0, 857.0], [6.1, 859.0], [6.2, 860.0], [6.3, 861.0], [6.4, 863.0], [6.5, 865.0], [6.6, 866.0], [6.7, 867.0], [6.8, 870.0], [6.9, 871.0], [7.0, 872.0], [7.1, 873.0], [7.2, 874.0], [7.3, 875.0], [7.4, 878.0], [7.5, 880.0], [7.6, 881.0], [7.7, 882.0], [7.8, 885.0], [7.9, 887.0], [8.0, 890.0], [8.1, 892.0], [8.2, 894.0], [8.3, 896.0], [8.4, 898.0], [8.5, 900.0], [8.6, 901.0], [8.7, 904.0], [8.8, 905.0], [8.9, 906.0], [9.0, 909.0], [9.1, 911.0], [9.2, 913.0], [9.3, 914.0], [9.4, 915.0], [9.5, 918.0], [9.6, 919.0], [9.7, 921.0], [9.8, 923.0], [9.9, 924.0], [10.0, 928.0], [10.1, 930.0], [10.2, 932.0], [10.3, 933.0], [10.4, 935.0], [10.5, 937.0], [10.6, 940.0], [10.7, 943.0], [10.8, 947.0], [10.9, 951.0], [11.0, 953.0], [11.1, 956.0], [11.2, 960.0], [11.3, 963.0], [11.4, 970.0], [11.5, 973.0], [11.6, 979.0], [11.7, 980.0], [11.8, 984.0], [11.9, 989.0], [12.0, 995.0], [12.1, 997.0], [12.2, 1002.0], [12.3, 1009.0], [12.4, 1013.0], [12.5, 1016.0], [12.6, 1020.0], [12.7, 1024.0], [12.8, 1028.0], [12.9, 1029.0], [13.0, 1033.0], [13.1, 1041.0], [13.2, 1045.0], [13.3, 1047.0], [13.4, 1048.0], [13.5, 1057.0], [13.6, 1060.0], [13.7, 1064.0], [13.8, 1069.0], [13.9, 1072.0], [14.0, 1074.0], [14.1, 1079.0], [14.2, 1083.0], [14.3, 1087.0], [14.4, 1092.0], [14.5, 1097.0], [14.6, 1098.0], [14.7, 1100.0], [14.8, 1102.0], [14.9, 1104.0], [15.0, 1107.0], [15.1, 1110.0], [15.2, 1112.0], [15.3, 1116.0], [15.4, 1119.0], [15.5, 1124.0], [15.6, 1125.0], [15.7, 1127.0], [15.8, 1130.0], [15.9, 1135.0], [16.0, 1140.0], [16.1, 1143.0], [16.2, 1145.0], [16.3, 1145.0], [16.4, 1149.0], [16.5, 1151.0], [16.6, 1153.0], [16.7, 1154.0], [16.8, 1157.0], [16.9, 1159.0], [17.0, 1162.0], [17.1, 1165.0], [17.2, 1169.0], [17.3, 1173.0], [17.4, 1175.0], [17.5, 1177.0], [17.6, 1180.0], [17.7, 1185.0], [17.8, 1188.0], [17.9, 1190.0], [18.0, 1193.0], [18.1, 1194.0], [18.2, 1197.0], [18.3, 1199.0], [18.4, 1201.0], [18.5, 1204.0], [18.6, 1206.0], [18.7, 1207.0], [18.8, 1209.0], [18.9, 1212.0], [19.0, 1218.0], [19.1, 1221.0], [19.2, 1223.0], [19.3, 1226.0], [19.4, 1228.0], [19.5, 1231.0], [19.6, 1235.0], [19.7, 1239.0], [19.8, 1243.0], [19.9, 1244.0], [20.0, 1248.0], [20.1, 1252.0], [20.2, 1260.0], [20.3, 1261.0], [20.4, 1264.0], [20.5, 1266.0], [20.6, 1270.0], [20.7, 1271.0], [20.8, 1274.0], [20.9, 1276.0], [21.0, 1280.0], [21.1, 1284.0], [21.2, 1285.0], [21.3, 1287.0], [21.4, 1291.0], [21.5, 1294.0], [21.6, 1296.0], [21.7, 1298.0], [21.8, 1301.0], [21.9, 1303.0], [22.0, 1304.0], [22.1, 1307.0], [22.2, 1308.0], [22.3, 1310.0], [22.4, 1313.0], [22.5, 1315.0], [22.6, 1316.0], [22.7, 1318.0], [22.8, 1320.0], [22.9, 1322.0], [23.0, 1323.0], [23.1, 1325.0], [23.2, 1327.0], [23.3, 1329.0], [23.4, 1333.0], [23.5, 1334.0], [23.6, 1339.0], [23.7, 1343.0], [23.8, 1345.0], [23.9, 1347.0], [24.0, 1349.0], [24.1, 1350.0], [24.2, 1351.0], [24.3, 1354.0], [24.4, 1358.0], [24.5, 1360.0], [24.6, 1365.0], [24.7, 1367.0], [24.8, 1369.0], [24.9, 1371.0], [25.0, 1373.0], [25.1, 1375.0], [25.2, 1377.0], [25.3, 1378.0], [25.4, 1382.0], [25.5, 1386.0], [25.6, 1387.0], [25.7, 1390.0], [25.8, 1395.0], [25.9, 1397.0], [26.0, 1399.0], [26.1, 1401.0], [26.2, 1404.0], [26.3, 1406.0], [26.4, 1407.0], [26.5, 1410.0], [26.6, 1411.0], [26.7, 1414.0], [26.8, 1415.0], [26.9, 1419.0], [27.0, 1421.0], [27.1, 1423.0], [27.2, 1426.0], [27.3, 1428.0], [27.4, 1429.0], [27.5, 1432.0], [27.6, 1433.0], [27.7, 1434.0], [27.8, 1436.0], [27.9, 1440.0], [28.0, 1442.0], [28.1, 1443.0], [28.2, 1445.0], [28.3, 1448.0], [28.4, 1452.0], [28.5, 1455.0], [28.6, 1457.0], [28.7, 1459.0], [28.8, 1460.0], [28.9, 1463.0], [29.0, 1467.0], [29.1, 1469.0], [29.2, 1471.0], [29.3, 1471.0], [29.4, 1473.0], [29.5, 1475.0], [29.6, 1478.0], [29.7, 1483.0], [29.8, 1487.0], [29.9, 1489.0], [30.0, 1490.0], [30.1, 1495.0], [30.2, 1500.0], [30.3, 1505.0], [30.4, 1506.0], [30.5, 1508.0], [30.6, 1514.0], [30.7, 1515.0], [30.8, 1517.0], [30.9, 1522.0], [31.0, 1528.0], [31.1, 1531.0], [31.2, 1533.0], [31.3, 1537.0], [31.4, 1540.0], [31.5, 1542.0], [31.6, 1546.0], [31.7, 1549.0], [31.8, 1551.0], [31.9, 1554.0], [32.0, 1556.0], [32.1, 1561.0], [32.2, 1562.0], [32.3, 1564.0], [32.4, 1567.0], [32.5, 1569.0], [32.6, 1571.0], [32.7, 1573.0], [32.8, 1576.0], [32.9, 1578.0], [33.0, 1582.0], [33.1, 1584.0], [33.2, 1587.0], [33.3, 1588.0], [33.4, 1590.0], [33.5, 1591.0], [33.6, 1594.0], [33.7, 1597.0], [33.8, 1599.0], [33.9, 1603.0], [34.0, 1604.0], [34.1, 1605.0], [34.2, 1608.0], [34.3, 1611.0], [34.4, 1615.0], [34.5, 1616.0], [34.6, 1618.0], [34.7, 1620.0], [34.8, 1623.0], [34.9, 1626.0], [35.0, 1629.0], [35.1, 1630.0], [35.2, 1632.0], [35.3, 1634.0], [35.4, 1636.0], [35.5, 1638.0], [35.6, 1640.0], [35.7, 1644.0], [35.8, 1648.0], [35.9, 1649.0], [36.0, 1651.0], [36.1, 1653.0], [36.2, 1656.0], [36.3, 1660.0], [36.4, 1661.0], [36.5, 1663.0], [36.6, 1665.0], [36.7, 1668.0], [36.8, 1669.0], [36.9, 1670.0], [37.0, 1671.0], [37.1, 1673.0], [37.2, 1675.0], [37.3, 1678.0], [37.4, 1680.0], [37.5, 1682.0], [37.6, 1685.0], [37.7, 1688.0], [37.8, 1692.0], [37.9, 1696.0], [38.0, 1696.0], [38.1, 1699.0], [38.2, 1700.0], [38.3, 1702.0], [38.4, 1703.0], [38.5, 1706.0], [38.6, 1708.0], [38.7, 1710.0], [38.8, 1712.0], [38.9, 1715.0], [39.0, 1718.0], [39.1, 1719.0], [39.2, 1720.0], [39.3, 1721.0], [39.4, 1725.0], [39.5, 1727.0], [39.6, 1728.0], [39.7, 1730.0], [39.8, 1733.0], [39.9, 1734.0], [40.0, 1737.0], [40.1, 1738.0], [40.2, 1740.0], [40.3, 1742.0], [40.4, 1744.0], [40.5, 1745.0], [40.6, 1747.0], [40.7, 1749.0], [40.8, 1752.0], [40.9, 1753.0], [41.0, 1754.0], [41.1, 1756.0], [41.2, 1758.0], [41.3, 1760.0], [41.4, 1760.0], [41.5, 1761.0], [41.6, 1762.0], [41.7, 1764.0], [41.8, 1765.0], [41.9, 1766.0], [42.0, 1767.0], [42.1, 1769.0], [42.2, 1770.0], [42.3, 1772.0], [42.4, 1772.0], [42.5, 1774.0], [42.6, 1776.0], [42.7, 1778.0], [42.8, 1779.0], [42.9, 1780.0], [43.0, 1782.0], [43.1, 1784.0], [43.2, 1787.0], [43.3, 1788.0], [43.4, 1790.0], [43.5, 1791.0], [43.6, 1793.0], [43.7, 1794.0], [43.8, 1797.0], [43.9, 1798.0], [44.0, 1801.0], [44.1, 1803.0], [44.2, 1803.0], [44.3, 1806.0], [44.4, 1807.0], [44.5, 1808.0], [44.6, 1809.0], [44.7, 1811.0], [44.8, 1812.0], [44.9, 1814.0], [45.0, 1816.0], [45.1, 1819.0], [45.2, 1822.0], [45.3, 1825.0], [45.4, 1827.0], [45.5, 1831.0], [45.6, 1832.0], [45.7, 1834.0], [45.8, 1837.0], [45.9, 1839.0], [46.0, 1842.0], [46.1, 1843.0], [46.2, 1845.0], [46.3, 1847.0], [46.4, 1847.0], [46.5, 1850.0], [46.6, 1852.0], [46.7, 1854.0], [46.8, 1855.0], [46.9, 1857.0], [47.0, 1859.0], [47.1, 1859.0], [47.2, 1861.0], [47.3, 1863.0], [47.4, 1864.0], [47.5, 1865.0], [47.6, 1867.0], [47.7, 1869.0], [47.8, 1870.0], [47.9, 1873.0], [48.0, 1873.0], [48.1, 1875.0], [48.2, 1877.0], [48.3, 1879.0], [48.4, 1880.0], [48.5, 1884.0], [48.6, 1885.0], [48.7, 1887.0], [48.8, 1890.0], [48.9, 1891.0], [49.0, 1892.0], [49.1, 1894.0], [49.2, 1896.0], [49.3, 1898.0], [49.4, 1899.0], [49.5, 1900.0], [49.6, 1901.0], [49.7, 1903.0], [49.8, 1904.0], [49.9, 1907.0], [50.0, 1908.0], [50.1, 1910.0], [50.2, 1912.0], [50.3, 1914.0], [50.4, 1916.0], [50.5, 1918.0], [50.6, 1920.0], [50.7, 1921.0], [50.8, 1922.0], [50.9, 1923.0], [51.0, 1925.0], [51.1, 1927.0], [51.2, 1928.0], [51.3, 1930.0], [51.4, 1933.0], [51.5, 1934.0], [51.6, 1937.0], [51.7, 1939.0], [51.8, 1941.0], [51.9, 1942.0], [52.0, 1944.0], [52.1, 1947.0], [52.2, 1949.0], [52.3, 1950.0], [52.4, 1951.0], [52.5, 1953.0], [52.6, 1954.0], [52.7, 1956.0], [52.8, 1958.0], [52.9, 1959.0], [53.0, 1962.0], [53.1, 1965.0], [53.2, 1966.0], [53.3, 1966.0], [53.4, 1969.0], [53.5, 1970.0], [53.6, 1971.0], [53.7, 1974.0], [53.8, 1976.0], [53.9, 1978.0], [54.0, 1980.0], [54.1, 1981.0], [54.2, 1983.0], [54.3, 1985.0], [54.4, 1986.0], [54.5, 1988.0], [54.6, 1991.0], [54.7, 1992.0], [54.8, 1993.0], [54.9, 1996.0], [55.0, 1996.0], [55.1, 1998.0], [55.2, 2000.0], [55.3, 2003.0], [55.4, 2004.0], [55.5, 2006.0], [55.6, 2007.0], [55.7, 2009.0], [55.8, 2012.0], [55.9, 2014.0], [56.0, 2018.0], [56.1, 2019.0], [56.2, 2020.0], [56.3, 2021.0], [56.4, 2024.0], [56.5, 2026.0], [56.6, 2028.0], [56.7, 2030.0], [56.8, 2031.0], [56.9, 2034.0], [57.0, 2036.0], [57.1, 2037.0], [57.2, 2038.0], [57.3, 2039.0], [57.4, 2043.0], [57.5, 2049.0], [57.6, 2051.0], [57.7, 2052.0], [57.8, 2053.0], [57.9, 2055.0], [58.0, 2057.0], [58.1, 2061.0], [58.2, 2062.0], [58.3, 2063.0], [58.4, 2065.0], [58.5, 2067.0], [58.6, 2070.0], [58.7, 2073.0], [58.8, 2074.0], [58.9, 2077.0], [59.0, 2078.0], [59.1, 2079.0], [59.2, 2081.0], [59.3, 2083.0], [59.4, 2084.0], [59.5, 2088.0], [59.6, 2089.0], [59.7, 2089.0], [59.8, 2093.0], [59.9, 2095.0], [60.0, 2097.0], [60.1, 2100.0], [60.2, 2103.0], [60.3, 2107.0], [60.4, 2110.0], [60.5, 2112.0], [60.6, 2114.0], [60.7, 2116.0], [60.8, 2117.0], [60.9, 2119.0], [61.0, 2121.0], [61.1, 2123.0], [61.2, 2126.0], [61.3, 2131.0], [61.4, 2134.0], [61.5, 2136.0], [61.6, 2138.0], [61.7, 2142.0], [61.8, 2143.0], [61.9, 2145.0], [62.0, 2147.0], [62.1, 2148.0], [62.2, 2153.0], [62.3, 2156.0], [62.4, 2156.0], [62.5, 2159.0], [62.6, 2162.0], [62.7, 2164.0], [62.8, 2166.0], [62.9, 2168.0], [63.0, 2170.0], [63.1, 2172.0], [63.2, 2175.0], [63.3, 2179.0], [63.4, 2182.0], [63.5, 2184.0], [63.6, 2186.0], [63.7, 2192.0], [63.8, 2196.0], [63.9, 2200.0], [64.0, 2203.0], [64.1, 2204.0], [64.2, 2207.0], [64.3, 2210.0], [64.4, 2212.0], [64.5, 2215.0], [64.6, 2218.0], [64.7, 2220.0], [64.8, 2222.0], [64.9, 2223.0], [65.0, 2226.0], [65.1, 2233.0], [65.2, 2236.0], [65.3, 2239.0], [65.4, 2241.0], [65.5, 2243.0], [65.6, 2244.0], [65.7, 2249.0], [65.8, 2251.0], [65.9, 2254.0], [66.0, 2257.0], [66.1, 2262.0], [66.2, 2263.0], [66.3, 2265.0], [66.4, 2268.0], [66.5, 2268.0], [66.6, 2273.0], [66.7, 2276.0], [66.8, 2278.0], [66.9, 2281.0], [67.0, 2283.0], [67.1, 2285.0], [67.2, 2287.0], [67.3, 2290.0], [67.4, 2295.0], [67.5, 2297.0], [67.6, 2300.0], [67.7, 2304.0], [67.8, 2307.0], [67.9, 2311.0], [68.0, 2312.0], [68.1, 2314.0], [68.2, 2317.0], [68.3, 2320.0], [68.4, 2324.0], [68.5, 2327.0], [68.6, 2329.0], [68.7, 2331.0], [68.8, 2335.0], [68.9, 2339.0], [69.0, 2341.0], [69.1, 2343.0], [69.2, 2348.0], [69.3, 2350.0], [69.4, 2352.0], [69.5, 2355.0], [69.6, 2361.0], [69.7, 2365.0], [69.8, 2367.0], [69.9, 2370.0], [70.0, 2372.0], [70.1, 2377.0], [70.2, 2381.0], [70.3, 2385.0], [70.4, 2387.0], [70.5, 2389.0], [70.6, 2393.0], [70.7, 2395.0], [70.8, 2397.0], [70.9, 2398.0], [71.0, 2402.0], [71.1, 2407.0], [71.2, 2411.0], [71.3, 2412.0], [71.4, 2414.0], [71.5, 2416.0], [71.6, 2421.0], [71.7, 2423.0], [71.8, 2425.0], [71.9, 2428.0], [72.0, 2432.0], [72.1, 2434.0], [72.2, 2437.0], [72.3, 2439.0], [72.4, 2440.0], [72.5, 2443.0], [72.6, 2449.0], [72.7, 2451.0], [72.8, 2455.0], [72.9, 2458.0], [73.0, 2462.0], [73.1, 2465.0], [73.2, 2468.0], [73.3, 2472.0], [73.4, 2474.0], [73.5, 2476.0], [73.6, 2480.0], [73.7, 2483.0], [73.8, 2486.0], [73.9, 2488.0], [74.0, 2491.0], [74.1, 2494.0], [74.2, 2497.0], [74.3, 2503.0], [74.4, 2508.0], [74.5, 2510.0], [74.6, 2513.0], [74.7, 2516.0], [74.8, 2518.0], [74.9, 2522.0], [75.0, 2528.0], [75.1, 2533.0], [75.2, 2534.0], [75.3, 2540.0], [75.4, 2543.0], [75.5, 2549.0], [75.6, 2551.0], [75.7, 2554.0], [75.8, 2557.0], [75.9, 2561.0], [76.0, 2564.0], [76.1, 2567.0], [76.2, 2570.0], [76.3, 2575.0], [76.4, 2581.0], [76.5, 2584.0], [76.6, 2588.0], [76.7, 2592.0], [76.8, 2594.0], [76.9, 2598.0], [77.0, 2601.0], [77.1, 2604.0], [77.2, 2608.0], [77.3, 2611.0], [77.4, 2614.0], [77.5, 2615.0], [77.6, 2618.0], [77.7, 2620.0], [77.8, 2624.0], [77.9, 2628.0], [78.0, 2630.0], [78.1, 2634.0], [78.2, 2637.0], [78.3, 2639.0], [78.4, 2641.0], [78.5, 2643.0], [78.6, 2645.0], [78.7, 2647.0], [78.8, 2650.0], [78.9, 2651.0], [79.0, 2655.0], [79.1, 2657.0], [79.2, 2659.0], [79.3, 2661.0], [79.4, 2665.0], [79.5, 2668.0], [79.6, 2673.0], [79.7, 2677.0], [79.8, 2679.0], [79.9, 2682.0], [80.0, 2684.0], [80.1, 2687.0], [80.2, 2689.0], [80.3, 2692.0], [80.4, 2695.0], [80.5, 2697.0], [80.6, 2701.0], [80.7, 2703.0], [80.8, 2706.0], [80.9, 2708.0], [81.0, 2711.0], [81.1, 2713.0], [81.2, 2715.0], [81.3, 2717.0], [81.4, 2718.0], [81.5, 2721.0], [81.6, 2721.0], [81.7, 2723.0], [81.8, 2724.0], [81.9, 2727.0], [82.0, 2731.0], [82.1, 2734.0], [82.2, 2738.0], [82.3, 2744.0], [82.4, 2747.0], [82.5, 2748.0], [82.6, 2749.0], [82.7, 2751.0], [82.8, 2754.0], [82.9, 2759.0], [83.0, 2763.0], [83.1, 2767.0], [83.2, 2769.0], [83.3, 2777.0], [83.4, 2782.0], [83.5, 2787.0], [83.6, 2792.0], [83.7, 2793.0], [83.8, 2803.0], [83.9, 2807.0], [84.0, 2814.0], [84.1, 2819.0], [84.2, 2823.0], [84.3, 2829.0], [84.4, 2832.0], [84.5, 2836.0], [84.6, 2842.0], [84.7, 2848.0], [84.8, 2850.0], [84.9, 2860.0], [85.0, 2868.0], [85.1, 2877.0], [85.2, 2882.0], [85.3, 2887.0], [85.4, 2892.0], [85.5, 2896.0], [85.6, 2899.0], [85.7, 2904.0], [85.8, 2908.0], [85.9, 2914.0], [86.0, 2923.0], [86.1, 2929.0], [86.2, 2930.0], [86.3, 2932.0], [86.4, 2934.0], [86.5, 2937.0], [86.6, 2939.0], [86.7, 2946.0], [86.8, 2954.0], [86.9, 2956.0], [87.0, 2964.0], [87.1, 2968.0], [87.2, 2972.0], [87.3, 2981.0], [87.4, 2984.0], [87.5, 2993.0], [87.6, 2998.0], [87.7, 3001.0], [87.8, 3002.0], [87.9, 3008.0], [88.0, 3014.0], [88.1, 3018.0], [88.2, 3026.0], [88.3, 3036.0], [88.4, 3041.0], [88.5, 3046.0], [88.6, 3050.0], [88.7, 3052.0], [88.8, 3060.0], [88.9, 3063.0], [89.0, 3068.0], [89.1, 3075.0], [89.2, 3087.0], [89.3, 3091.0], [89.4, 3099.0], [89.5, 3112.0], [89.6, 3117.0], [89.7, 3119.0], [89.8, 3130.0], [89.9, 3134.0], [90.0, 3150.0], [90.1, 3157.0], [90.2, 3161.0], [90.3, 3169.0], [90.4, 3177.0], [90.5, 3183.0], [90.6, 3189.0], [90.7, 3196.0], [90.8, 3203.0], [90.9, 3212.0], [91.0, 3230.0], [91.1, 3241.0], [91.2, 3244.0], [91.3, 3259.0], [91.4, 3267.0], [91.5, 3274.0], [91.6, 3289.0], [91.7, 3299.0], [91.8, 3303.0], [91.9, 3316.0], [92.0, 3322.0], [92.1, 3329.0], [92.2, 3340.0], [92.3, 3348.0], [92.4, 3360.0], [92.5, 3371.0], [92.6, 3393.0], [92.7, 3403.0], [92.8, 3410.0], [92.9, 3417.0], [93.0, 3428.0], [93.1, 3442.0], [93.2, 3459.0], [93.3, 3467.0], [93.4, 3472.0], [93.5, 3483.0], [93.6, 3495.0], [93.7, 3500.0], [93.8, 3509.0], [93.9, 3520.0], [94.0, 3528.0], [94.1, 3545.0], [94.2, 3553.0], [94.3, 3566.0], [94.4, 3573.0], [94.5, 3593.0], [94.6, 3602.0], [94.7, 3612.0], [94.8, 3626.0], [94.9, 3642.0], [95.0, 3671.0], [95.1, 3682.0], [95.2, 3689.0], [95.3, 3705.0], [95.4, 3714.0], [95.5, 3727.0], [95.6, 3747.0], [95.7, 3761.0], [95.8, 3773.0], [95.9, 3782.0], [96.0, 3822.0], [96.1, 3840.0], [96.2, 3857.0], [96.3, 3890.0], [96.4, 3933.0], [96.5, 3955.0], [96.6, 3974.0], [96.7, 3995.0], [96.8, 4018.0], [96.9, 4045.0], [97.0, 4060.0], [97.1, 4081.0], [97.2, 4126.0], [97.3, 4144.0], [97.4, 4188.0], [97.5, 4247.0], [97.6, 4275.0], [97.7, 4354.0], [97.8, 4399.0], [97.9, 4451.0], [98.0, 4514.0], [98.1, 4553.0], [98.2, 4581.0], [98.3, 4626.0], [98.4, 4692.0], [98.5, 4779.0], [98.6, 4817.0], [98.7, 4901.0], [98.8, 4956.0], [98.9, 5024.0], [99.0, 5155.0], [99.1, 5227.0], [99.2, 5343.0], [99.3, 5468.0], [99.4, 5559.0], [99.5, 5819.0], [99.6, 6075.0], [99.7, 6314.0], [99.8, 6633.0], [99.9, 7395.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 300.0, "maxY": 331.0, "series": [{"data": [[700.0, 106.0], [800.0, 331.0], [900.0, 191.0], [1000.0, 128.0], [1100.0, 192.0], [1200.0, 179.0], [1300.0, 220.0], [1400.0, 217.0], [1500.0, 188.0], [1600.0, 226.0], [1700.0, 300.0], [1800.0, 283.0], [1900.0, 300.0], [2000.0, 255.0], [2100.0, 197.0], [2200.0, 191.0], [2300.0, 174.0], [2400.0, 172.0], [2500.0, 141.0], [2600.0, 185.0], [2800.0, 96.0], [2700.0, 169.0], [2900.0, 105.0], [3000.0, 91.0], [3100.0, 72.0], [3300.0, 48.0], [3200.0, 49.0], [3400.0, 54.0], [3500.0, 45.0], [3700.0, 33.0], [3600.0, 38.0], [3800.0, 19.0], [3900.0, 22.0], [4000.0, 21.0], [4200.0, 11.0], [4100.0, 16.0], [4300.0, 8.0], [4400.0, 10.0], [4500.0, 12.0], [4600.0, 10.0], [4700.0, 6.0], [4800.0, 8.0], [5000.0, 7.0], [5100.0, 7.0], [4900.0, 7.0], [5300.0, 4.0], [5200.0, 4.0], [5400.0, 5.0], [5600.0, 1.0], [5500.0, 5.0], [5700.0, 1.0], [5800.0, 5.0], [5900.0, 1.0], [6000.0, 2.0], [6100.0, 2.0], [6300.0, 3.0], [6200.0, 1.0], [6400.0, 2.0], [6600.0, 2.0], [6800.0, 1.0], [6700.0, 1.0], [7000.0, 1.0], [7300.0, 1.0], [7800.0, 1.0], [8200.0, 1.0], [9200.0, 1.0], [10100.0, 1.0], [10300.0, 1.0], [300.0, 1.0], [400.0, 1.0], [500.0, 1.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 10300.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 2.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 3621.0, "series": [{"data": [[0.0, 2.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1567.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 3621.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 11.340000000000002, "minX": 1.60507092E12, "maxY": 12.0, "series": [{"data": [[1.60507116E12, 12.0], [1.60507182E12, 11.340000000000002], [1.60507176E12, 12.0], [1.60507146E12, 12.0], [1.6050714E12, 12.0], [1.6050711E12, 12.0], [1.60507104E12, 12.0], [1.6050717E12, 12.0], [1.60507164E12, 12.0], [1.60507134E12, 12.0], [1.60507128E12, 12.0], [1.60507098E12, 12.0], [1.60507092E12, 11.932038834951454], [1.60507158E12, 12.0], [1.60507152E12, 12.0], [1.60507122E12, 12.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60507182E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 1221.0, "minX": 1.0, "maxY": 3843.0, "series": [{"data": [[8.0, 2745.0], [4.0, 1826.0], [2.0, 3689.0], [1.0, 3837.0], [9.0, 1862.0], [10.0, 1650.0], [5.0, 1540.0], [11.0, 2650.0], [12.0, 2036.0388255746611], [6.0, 1644.0], [3.0, 3843.0], [7.0, 1221.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[11.985934489402672, 2036.59942196532]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 12.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 758.7833333333333, "minX": 1.60507092E12, "maxY": 2102470.55, "series": [{"data": [[1.60507116E12, 1924412.25], [1.60507182E12, 434270.5833333333], [1.60507176E12, 1642633.8333333333], [1.60507146E12, 1532796.3833333333], [1.6050714E12, 1653322.3666666667], [1.6050711E12, 1554859.9], [1.60507104E12, 1401577.6333333333], [1.6050717E12, 1536705.8333333333], [1.60507164E12, 1655820.2], [1.60507134E12, 1572610.9166666667], [1.60507128E12, 1736955.6666666667], [1.60507098E12, 1572087.55], [1.60507092E12, 720813.15], [1.60507158E12, 2102470.55], [1.60507152E12, 1113725.75], [1.60507122E12, 1827159.65]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60507116E12, 2850.7833333333333], [1.60507182E12, 758.7833333333333], [1.60507176E12, 2555.0666666666666], [1.60507146E12, 2407.8166666666666], [1.6050714E12, 2315.7833333333333], [1.6050711E12, 2997.883333333333], [1.60507104E12, 2468.616666666667], [1.6050717E12, 2886.1], [1.60507164E12, 3126.383333333333], [1.60507134E12, 2194.266666666667], [1.60507128E12, 3069.05], [1.60507098E12, 2325.016666666667], [1.60507092E12, 779.2], [1.60507158E12, 2390.8], [1.60507152E12, 2851.7], [1.60507122E12, 2600.0833333333335]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60507182E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 1730.9612590799036, "minX": 1.60507092E12, "maxY": 2615.9800000000014, "series": [{"data": [[1.60507116E12, 1903.8829787234033], [1.60507182E12, 2615.9800000000014], [1.60507176E12, 2107.486725663716], [1.60507146E12, 2122.3513513513503], [1.6050714E12, 2250.912772585669], [1.6050711E12, 1761.123152709358], [1.60507104E12, 2130.497041420119], [1.6050717E12, 1897.5868421052637], [1.60507164E12, 1730.9612590799036], [1.60507134E12, 2462.4364261168394], [1.60507128E12, 1792.6641975308642], [1.60507098E12, 2184.1242424242428], [1.60507092E12, 2315.6407766990296], [1.60507158E12, 2272.6990595611283], [1.60507152E12, 1848.3231552162856], [1.60507122E12, 2112.0204081632633]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60507182E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 1729.513317191284, "minX": 1.60507092E12, "maxY": 2614.4799999999996, "series": [{"data": [[1.60507116E12, 1901.53989361702], [1.60507182E12, 2614.4799999999996], [1.60507176E12, 2105.8820058997053], [1.60507146E12, 2120.8918918918926], [1.6050714E12, 2249.30218068536], [1.6050711E12, 1759.364532019704], [1.60507104E12, 2128.644970414199], [1.6050717E12, 1896.326315789475], [1.60507164E12, 1729.513317191284], [1.60507134E12, 2460.680412371135], [1.60507128E12, 1791.0493827160503], [1.60507098E12, 2181.9727272727296], [1.60507092E12, 2312.5922330097087], [1.60507158E12, 2270.692789968653], [1.60507152E12, 1847.4147582697196], [1.60507122E12, 2109.679300291543]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60507182E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.020000000000000007, "minX": 1.60507092E12, "maxY": 1.0582524271844664, "series": [{"data": [[1.60507116E12, 0.03989361702127661], [1.60507182E12, 0.020000000000000007], [1.60507176E12, 0.035398230088495575], [1.60507146E12, 0.036036036036036036], [1.6050714E12, 0.03738317757009345], [1.6050711E12, 0.03940886699507389], [1.60507104E12, 0.0384615384615385], [1.6050717E12, 0.026315789473684213], [1.60507164E12, 0.03147699757869249], [1.60507134E12, 0.048109965635738855], [1.60507128E12, 0.03456790123456791], [1.60507098E12, 0.04848484848484844], [1.60507092E12, 1.0582524271844664], [1.60507158E12, 0.03448275862068966], [1.60507152E12, 0.030534351145038153], [1.60507122E12, 0.03790087463556851]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60507182E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 368.0, "minX": 1.60507092E12, "maxY": 10312.0, "series": [{"data": [[1.60507116E12, 4267.0], [1.60507182E12, 4732.0], [1.60507176E12, 5819.0], [1.60507146E12, 7823.0], [1.6050714E12, 10312.0], [1.6050711E12, 5504.0], [1.60507104E12, 5351.0], [1.6050717E12, 4451.0], [1.60507164E12, 4065.0], [1.60507134E12, 6320.0], [1.60507128E12, 6649.0], [1.60507098E12, 9298.0], [1.60507092E12, 4704.0], [1.60507158E12, 4794.0], [1.60507152E12, 6467.0], [1.60507122E12, 5165.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60507116E12, 794.2529981124401], [1.60507182E12, 1490.0], [1.60507176E12, 734.1199998378754], [1.60507146E12, 1017.0299996018409], [1.6050714E12, 802.081999309063], [1.6050711E12, 767.6519996118545], [1.60507104E12, 840.2039996767044], [1.6050717E12, 797.0029993641376], [1.60507164E12, 755.5339991116524], [1.60507134E12, 892.0959977722168], [1.60507128E12, 741.8859991288185], [1.60507098E12, 776.8109992897511], [1.60507092E12, 368.0], [1.60507158E12, 994.1199981689454], [1.60507152E12, 725.0919998121261], [1.60507122E12, 808.4399987697601]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60507116E12, 801.3783007550239], [1.60507182E12, 1490.0], [1.60507176E12, 734.7320000648499], [1.60507146E12, 1018.5330001592636], [1.6050714E12, 807.5072007369995], [1.6050711E12, 769.1172001552582], [1.60507104E12, 841.4244001293182], [1.6050717E12, 799.4033002543449], [1.60507164E12, 758.4930001974105], [1.60507134E12, 900.5056008911133], [1.60507128E12, 745.0970001935959], [1.60507098E12, 781.4304005050659], [1.60507092E12, 370.87120096206667], [1.60507158E12, 1005.4000015258789], [1.60507152E12, 725.8012000751495], [1.60507122E12, 813.0840004920959]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60507116E12, 798.2114990562201], [1.60507182E12, 1490.0], [1.60507176E12, 734.4599999189377], [1.60507146E12, 1017.8649998009205], [1.6050714E12, 804.4159990787506], [1.6050711E12, 768.4659998059273], [1.60507104E12, 840.8819998383522], [1.6050717E12, 798.3364996820688], [1.60507164E12, 757.3969995558261], [1.60507134E12, 896.7679988861084], [1.60507128E12, 743.7129995644093], [1.60507098E12, 779.3119993686676], [1.60507092E12, 368.0], [1.60507158E12, 998.9999980926514], [1.60507152E12, 725.4859999060631], [1.60507122E12, 811.0199993848801]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60507116E12, 761.0], [1.60507182E12, 1490.0], [1.60507176E12, 722.0], [1.60507146E12, 782.0], [1.6050714E12, 786.0], [1.6050711E12, 754.0], [1.60507104E12, 816.0], [1.6050717E12, 785.0], [1.60507164E12, 719.0], [1.60507134E12, 864.0], [1.60507128E12, 592.0], [1.60507098E12, 761.0], [1.60507092E12, 368.0], [1.60507158E12, 923.0], [1.60507152E12, 720.0], [1.60507122E12, 794.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60507116E12, 1891.5], [1.60507182E12, 2406.0], [1.60507176E12, 1984.0], [1.60507146E12, 1833.0], [1.6050714E12, 2021.0], [1.6050711E12, 1480.5], [1.60507104E12, 1896.5], [1.6050717E12, 1883.5], [1.60507164E12, 1670.0], [1.60507134E12, 2289.0], [1.60507128E12, 1714.0], [1.60507098E12, 1932.5], [1.60507092E12, 2306.0], [1.60507158E12, 2146.0], [1.60507152E12, 1671.0], [1.60507122E12, 2146.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60507182E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 832.5, "minX": 1.0, "maxY": 3134.0, "series": [{"data": [[2.0, 2697.0], [8.0, 1708.5], [9.0, 1457.0], [10.0, 1428.5], [11.0, 1203.0], [3.0, 2643.0], [12.0, 978.5], [13.0, 911.5], [14.0, 844.0], [15.0, 832.5], [1.0, 3134.0], [4.0, 2379.5], [5.0, 2236.0], [6.0, 1969.0], [7.0, 1950.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 15.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 832.5, "minX": 1.0, "maxY": 3133.5, "series": [{"data": [[2.0, 2695.5], [8.0, 1707.5], [9.0, 1454.0], [10.0, 1428.0], [11.0, 1203.0], [3.0, 2643.0], [12.0, 978.5], [13.0, 911.5], [14.0, 844.0], [15.0, 832.5], [1.0, 3133.5], [4.0, 2376.5], [5.0, 2233.0], [6.0, 1967.0], [7.0, 1949.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 15.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1.4666666666666666, "minX": 1.60507092E12, "maxY": 6.883333333333334, "series": [{"data": [[1.60507116E12, 6.266666666666667], [1.60507182E12, 1.4666666666666666], [1.60507176E12, 5.65], [1.60507146E12, 5.55], [1.6050714E12, 5.35], [1.6050711E12, 6.766666666666667], [1.60507104E12, 5.633333333333334], [1.6050717E12, 6.333333333333333], [1.60507164E12, 6.883333333333334], [1.60507134E12, 4.85], [1.60507128E12, 6.75], [1.60507098E12, 5.5], [1.60507092E12, 1.9166666666666667], [1.60507158E12, 5.316666666666666], [1.60507152E12, 6.55], [1.60507122E12, 5.716666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60507182E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.60507092E12, "maxY": 6.883333333333334, "series": [{"data": [[1.60507116E12, 6.266666666666667], [1.60507182E12, 1.6666666666666667], [1.60507176E12, 5.65], [1.60507146E12, 5.55], [1.6050714E12, 5.35], [1.6050711E12, 6.766666666666667], [1.60507104E12, 5.633333333333334], [1.6050717E12, 6.333333333333333], [1.60507164E12, 6.883333333333334], [1.60507134E12, 4.85], [1.60507128E12, 6.75], [1.60507098E12, 5.5], [1.60507092E12, 1.7166666666666666], [1.60507158E12, 5.316666666666666], [1.60507152E12, 6.55], [1.60507122E12, 5.716666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60507182E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.60507092E12, "maxY": 6.883333333333334, "series": [{"data": [[1.60507116E12, 6.266666666666667], [1.60507182E12, 1.6666666666666667], [1.60507176E12, 5.65], [1.60507146E12, 5.55], [1.6050714E12, 5.35], [1.6050711E12, 6.766666666666667], [1.60507104E12, 5.633333333333334], [1.6050717E12, 6.333333333333333], [1.60507164E12, 6.883333333333334], [1.60507134E12, 4.85], [1.60507128E12, 6.75], [1.60507098E12, 5.5], [1.60507092E12, 1.7166666666666666], [1.60507158E12, 5.316666666666666], [1.60507152E12, 6.55], [1.60507122E12, 5.716666666666667]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60507182E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.60507092E12, "maxY": 6.883333333333334, "series": [{"data": [[1.60507116E12, 6.266666666666667], [1.60507182E12, 1.6666666666666667], [1.60507176E12, 5.65], [1.60507146E12, 5.55], [1.6050714E12, 5.35], [1.6050711E12, 6.766666666666667], [1.60507104E12, 5.633333333333334], [1.6050717E12, 6.333333333333333], [1.60507164E12, 6.883333333333334], [1.60507134E12, 4.85], [1.60507128E12, 6.75], [1.60507098E12, 5.5], [1.60507092E12, 1.7166666666666666], [1.60507158E12, 5.316666666666666], [1.60507152E12, 6.55], [1.60507122E12, 5.716666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60507182E12, "title": "Total Transactions Per Second"}},
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

