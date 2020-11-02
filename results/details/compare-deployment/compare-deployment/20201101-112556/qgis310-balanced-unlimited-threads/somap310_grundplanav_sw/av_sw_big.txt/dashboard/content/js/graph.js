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
        data: {"result": {"minY": 604.0, "minX": 0.0, "maxY": 13342.0, "series": [{"data": [[0.0, 604.0], [0.1, 738.0], [0.2, 752.0], [0.3, 761.0], [0.4, 768.0], [0.5, 773.0], [0.6, 779.0], [0.7, 782.0], [0.8, 784.0], [0.9, 787.0], [1.0, 789.0], [1.1, 792.0], [1.2, 795.0], [1.3, 798.0], [1.4, 799.0], [1.5, 800.0], [1.6, 803.0], [1.7, 806.0], [1.8, 807.0], [1.9, 810.0], [2.0, 812.0], [2.1, 813.0], [2.2, 814.0], [2.3, 817.0], [2.4, 818.0], [2.5, 820.0], [2.6, 821.0], [2.7, 825.0], [2.8, 826.0], [2.9, 828.0], [3.0, 829.0], [3.1, 830.0], [3.2, 831.0], [3.3, 834.0], [3.4, 834.0], [3.5, 835.0], [3.6, 837.0], [3.7, 838.0], [3.8, 840.0], [3.9, 841.0], [4.0, 843.0], [4.1, 844.0], [4.2, 846.0], [4.3, 847.0], [4.4, 848.0], [4.5, 850.0], [4.6, 851.0], [4.7, 852.0], [4.8, 853.0], [4.9, 855.0], [5.0, 857.0], [5.1, 858.0], [5.2, 859.0], [5.3, 860.0], [5.4, 861.0], [5.5, 862.0], [5.6, 863.0], [5.7, 864.0], [5.8, 866.0], [5.9, 867.0], [6.0, 868.0], [6.1, 869.0], [6.2, 870.0], [6.3, 871.0], [6.4, 872.0], [6.5, 873.0], [6.6, 874.0], [6.7, 876.0], [6.8, 878.0], [6.9, 879.0], [7.0, 882.0], [7.1, 883.0], [7.2, 884.0], [7.3, 886.0], [7.4, 887.0], [7.5, 888.0], [7.6, 889.0], [7.7, 890.0], [7.8, 892.0], [7.9, 893.0], [8.0, 894.0], [8.1, 896.0], [8.2, 897.0], [8.3, 898.0], [8.4, 900.0], [8.5, 902.0], [8.6, 905.0], [8.7, 907.0], [8.8, 908.0], [8.9, 910.0], [9.0, 913.0], [9.1, 914.0], [9.2, 915.0], [9.3, 916.0], [9.4, 919.0], [9.5, 921.0], [9.6, 922.0], [9.7, 924.0], [9.8, 925.0], [9.9, 927.0], [10.0, 930.0], [10.1, 933.0], [10.2, 936.0], [10.3, 939.0], [10.4, 942.0], [10.5, 944.0], [10.6, 950.0], [10.7, 952.0], [10.8, 957.0], [10.9, 959.0], [11.0, 961.0], [11.1, 964.0], [11.2, 967.0], [11.3, 972.0], [11.4, 977.0], [11.5, 979.0], [11.6, 983.0], [11.7, 986.0], [11.8, 988.0], [11.9, 989.0], [12.0, 995.0], [12.1, 998.0], [12.2, 1005.0], [12.3, 1007.0], [12.4, 1011.0], [12.5, 1013.0], [12.6, 1019.0], [12.7, 1022.0], [12.8, 1023.0], [12.9, 1029.0], [13.0, 1033.0], [13.1, 1035.0], [13.2, 1039.0], [13.3, 1046.0], [13.4, 1049.0], [13.5, 1053.0], [13.6, 1055.0], [13.7, 1062.0], [13.8, 1066.0], [13.9, 1067.0], [14.0, 1071.0], [14.1, 1073.0], [14.2, 1081.0], [14.3, 1084.0], [14.4, 1087.0], [14.5, 1090.0], [14.6, 1092.0], [14.7, 1094.0], [14.8, 1097.0], [14.9, 1100.0], [15.0, 1102.0], [15.1, 1104.0], [15.2, 1110.0], [15.3, 1113.0], [15.4, 1115.0], [15.5, 1117.0], [15.6, 1119.0], [15.7, 1121.0], [15.8, 1124.0], [15.9, 1127.0], [16.0, 1130.0], [16.1, 1132.0], [16.2, 1134.0], [16.3, 1135.0], [16.4, 1141.0], [16.5, 1145.0], [16.6, 1149.0], [16.7, 1152.0], [16.8, 1155.0], [16.9, 1158.0], [17.0, 1161.0], [17.1, 1163.0], [17.2, 1166.0], [17.3, 1167.0], [17.4, 1172.0], [17.5, 1175.0], [17.6, 1177.0], [17.7, 1180.0], [17.8, 1183.0], [17.9, 1185.0], [18.0, 1188.0], [18.1, 1189.0], [18.2, 1191.0], [18.3, 1193.0], [18.4, 1196.0], [18.5, 1199.0], [18.6, 1201.0], [18.7, 1204.0], [18.8, 1207.0], [18.9, 1209.0], [19.0, 1214.0], [19.1, 1217.0], [19.2, 1219.0], [19.3, 1223.0], [19.4, 1224.0], [19.5, 1226.0], [19.6, 1228.0], [19.7, 1231.0], [19.8, 1232.0], [19.9, 1234.0], [20.0, 1236.0], [20.1, 1239.0], [20.2, 1240.0], [20.3, 1242.0], [20.4, 1244.0], [20.5, 1246.0], [20.6, 1249.0], [20.7, 1253.0], [20.8, 1258.0], [20.9, 1259.0], [21.0, 1261.0], [21.1, 1265.0], [21.2, 1266.0], [21.3, 1268.0], [21.4, 1272.0], [21.5, 1275.0], [21.6, 1277.0], [21.7, 1280.0], [21.8, 1281.0], [21.9, 1284.0], [22.0, 1287.0], [22.1, 1289.0], [22.2, 1294.0], [22.3, 1297.0], [22.4, 1298.0], [22.5, 1300.0], [22.6, 1302.0], [22.7, 1304.0], [22.8, 1305.0], [22.9, 1307.0], [23.0, 1308.0], [23.1, 1310.0], [23.2, 1314.0], [23.3, 1317.0], [23.4, 1320.0], [23.5, 1322.0], [23.6, 1325.0], [23.7, 1327.0], [23.8, 1329.0], [23.9, 1331.0], [24.0, 1332.0], [24.1, 1334.0], [24.2, 1337.0], [24.3, 1341.0], [24.4, 1343.0], [24.5, 1345.0], [24.6, 1350.0], [24.7, 1354.0], [24.8, 1357.0], [24.9, 1358.0], [25.0, 1358.0], [25.1, 1360.0], [25.2, 1362.0], [25.3, 1363.0], [25.4, 1364.0], [25.5, 1367.0], [25.6, 1368.0], [25.7, 1371.0], [25.8, 1374.0], [25.9, 1376.0], [26.0, 1378.0], [26.1, 1379.0], [26.2, 1381.0], [26.3, 1382.0], [26.4, 1384.0], [26.5, 1386.0], [26.6, 1388.0], [26.7, 1390.0], [26.8, 1393.0], [26.9, 1397.0], [27.0, 1398.0], [27.1, 1398.0], [27.2, 1400.0], [27.3, 1402.0], [27.4, 1404.0], [27.5, 1406.0], [27.6, 1410.0], [27.7, 1412.0], [27.8, 1413.0], [27.9, 1414.0], [28.0, 1416.0], [28.1, 1417.0], [28.2, 1420.0], [28.3, 1422.0], [28.4, 1424.0], [28.5, 1429.0], [28.6, 1432.0], [28.7, 1436.0], [28.8, 1439.0], [28.9, 1441.0], [29.0, 1444.0], [29.1, 1445.0], [29.2, 1447.0], [29.3, 1452.0], [29.4, 1458.0], [29.5, 1462.0], [29.6, 1464.0], [29.7, 1468.0], [29.8, 1470.0], [29.9, 1473.0], [30.0, 1475.0], [30.1, 1477.0], [30.2, 1481.0], [30.3, 1484.0], [30.4, 1487.0], [30.5, 1488.0], [30.6, 1490.0], [30.7, 1490.0], [30.8, 1491.0], [30.9, 1493.0], [31.0, 1496.0], [31.1, 1499.0], [31.2, 1502.0], [31.3, 1505.0], [31.4, 1509.0], [31.5, 1513.0], [31.6, 1515.0], [31.7, 1517.0], [31.8, 1521.0], [31.9, 1522.0], [32.0, 1523.0], [32.1, 1526.0], [32.2, 1528.0], [32.3, 1531.0], [32.4, 1532.0], [32.5, 1535.0], [32.6, 1538.0], [32.7, 1541.0], [32.8, 1544.0], [32.9, 1547.0], [33.0, 1549.0], [33.1, 1552.0], [33.2, 1554.0], [33.3, 1557.0], [33.4, 1558.0], [33.5, 1560.0], [33.6, 1562.0], [33.7, 1564.0], [33.8, 1566.0], [33.9, 1569.0], [34.0, 1573.0], [34.1, 1575.0], [34.2, 1578.0], [34.3, 1580.0], [34.4, 1582.0], [34.5, 1586.0], [34.6, 1588.0], [34.7, 1591.0], [34.8, 1594.0], [34.9, 1599.0], [35.0, 1601.0], [35.1, 1603.0], [35.2, 1604.0], [35.3, 1607.0], [35.4, 1609.0], [35.5, 1613.0], [35.6, 1615.0], [35.7, 1617.0], [35.8, 1621.0], [35.9, 1622.0], [36.0, 1623.0], [36.1, 1625.0], [36.2, 1627.0], [36.3, 1632.0], [36.4, 1636.0], [36.5, 1637.0], [36.6, 1640.0], [36.7, 1643.0], [36.8, 1645.0], [36.9, 1649.0], [37.0, 1649.0], [37.1, 1651.0], [37.2, 1653.0], [37.3, 1657.0], [37.4, 1661.0], [37.5, 1662.0], [37.6, 1664.0], [37.7, 1667.0], [37.8, 1670.0], [37.9, 1671.0], [38.0, 1674.0], [38.1, 1675.0], [38.2, 1678.0], [38.3, 1681.0], [38.4, 1683.0], [38.5, 1685.0], [38.6, 1687.0], [38.7, 1689.0], [38.8, 1690.0], [38.9, 1691.0], [39.0, 1693.0], [39.1, 1695.0], [39.2, 1698.0], [39.3, 1699.0], [39.4, 1701.0], [39.5, 1704.0], [39.6, 1707.0], [39.7, 1708.0], [39.8, 1711.0], [39.9, 1712.0], [40.0, 1714.0], [40.1, 1716.0], [40.2, 1718.0], [40.3, 1719.0], [40.4, 1720.0], [40.5, 1722.0], [40.6, 1726.0], [40.7, 1728.0], [40.8, 1729.0], [40.9, 1731.0], [41.0, 1733.0], [41.1, 1737.0], [41.2, 1738.0], [41.3, 1740.0], [41.4, 1742.0], [41.5, 1745.0], [41.6, 1747.0], [41.7, 1749.0], [41.8, 1750.0], [41.9, 1753.0], [42.0, 1755.0], [42.1, 1756.0], [42.2, 1758.0], [42.3, 1759.0], [42.4, 1760.0], [42.5, 1764.0], [42.6, 1766.0], [42.7, 1767.0], [42.8, 1768.0], [42.9, 1770.0], [43.0, 1772.0], [43.1, 1774.0], [43.2, 1776.0], [43.3, 1777.0], [43.4, 1779.0], [43.5, 1779.0], [43.6, 1781.0], [43.7, 1782.0], [43.8, 1782.0], [43.9, 1785.0], [44.0, 1786.0], [44.1, 1787.0], [44.2, 1789.0], [44.3, 1790.0], [44.4, 1791.0], [44.5, 1792.0], [44.6, 1793.0], [44.7, 1795.0], [44.8, 1797.0], [44.9, 1798.0], [45.0, 1801.0], [45.1, 1803.0], [45.2, 1804.0], [45.3, 1806.0], [45.4, 1809.0], [45.5, 1810.0], [45.6, 1811.0], [45.7, 1812.0], [45.8, 1814.0], [45.9, 1819.0], [46.0, 1820.0], [46.1, 1822.0], [46.2, 1825.0], [46.3, 1826.0], [46.4, 1828.0], [46.5, 1829.0], [46.6, 1832.0], [46.7, 1834.0], [46.8, 1835.0], [46.9, 1838.0], [47.0, 1840.0], [47.1, 1843.0], [47.2, 1844.0], [47.3, 1847.0], [47.4, 1848.0], [47.5, 1851.0], [47.6, 1854.0], [47.7, 1855.0], [47.8, 1856.0], [47.9, 1858.0], [48.0, 1859.0], [48.1, 1860.0], [48.2, 1861.0], [48.3, 1864.0], [48.4, 1865.0], [48.5, 1867.0], [48.6, 1869.0], [48.7, 1871.0], [48.8, 1872.0], [48.9, 1874.0], [49.0, 1878.0], [49.1, 1880.0], [49.2, 1881.0], [49.3, 1883.0], [49.4, 1884.0], [49.5, 1888.0], [49.6, 1889.0], [49.7, 1891.0], [49.8, 1893.0], [49.9, 1895.0], [50.0, 1896.0], [50.1, 1897.0], [50.2, 1898.0], [50.3, 1900.0], [50.4, 1901.0], [50.5, 1905.0], [50.6, 1907.0], [50.7, 1910.0], [50.8, 1912.0], [50.9, 1915.0], [51.0, 1917.0], [51.1, 1920.0], [51.2, 1921.0], [51.3, 1922.0], [51.4, 1923.0], [51.5, 1924.0], [51.6, 1925.0], [51.7, 1926.0], [51.8, 1927.0], [51.9, 1928.0], [52.0, 1930.0], [52.1, 1930.0], [52.2, 1934.0], [52.3, 1937.0], [52.4, 1938.0], [52.5, 1940.0], [52.6, 1941.0], [52.7, 1943.0], [52.8, 1945.0], [52.9, 1947.0], [53.0, 1949.0], [53.1, 1952.0], [53.2, 1954.0], [53.3, 1956.0], [53.4, 1957.0], [53.5, 1958.0], [53.6, 1960.0], [53.7, 1961.0], [53.8, 1962.0], [53.9, 1964.0], [54.0, 1964.0], [54.1, 1966.0], [54.2, 1967.0], [54.3, 1970.0], [54.4, 1971.0], [54.5, 1975.0], [54.6, 1976.0], [54.7, 1979.0], [54.8, 1980.0], [54.9, 1981.0], [55.0, 1982.0], [55.1, 1984.0], [55.2, 1986.0], [55.3, 1988.0], [55.4, 1989.0], [55.5, 1991.0], [55.6, 1993.0], [55.7, 1995.0], [55.8, 1997.0], [55.9, 1999.0], [56.0, 2000.0], [56.1, 2001.0], [56.2, 2003.0], [56.3, 2004.0], [56.4, 2006.0], [56.5, 2009.0], [56.6, 2012.0], [56.7, 2015.0], [56.8, 2016.0], [56.9, 2019.0], [57.0, 2021.0], [57.1, 2023.0], [57.2, 2025.0], [57.3, 2026.0], [57.4, 2026.0], [57.5, 2028.0], [57.6, 2030.0], [57.7, 2031.0], [57.8, 2032.0], [57.9, 2033.0], [58.0, 2036.0], [58.1, 2037.0], [58.2, 2038.0], [58.3, 2038.0], [58.4, 2040.0], [58.5, 2042.0], [58.6, 2043.0], [58.7, 2046.0], [58.8, 2047.0], [58.9, 2049.0], [59.0, 2053.0], [59.1, 2054.0], [59.2, 2057.0], [59.3, 2059.0], [59.4, 2060.0], [59.5, 2062.0], [59.6, 2063.0], [59.7, 2064.0], [59.8, 2067.0], [59.9, 2069.0], [60.0, 2071.0], [60.1, 2074.0], [60.2, 2075.0], [60.3, 2076.0], [60.4, 2077.0], [60.5, 2080.0], [60.6, 2081.0], [60.7, 2083.0], [60.8, 2084.0], [60.9, 2086.0], [61.0, 2089.0], [61.1, 2091.0], [61.2, 2093.0], [61.3, 2096.0], [61.4, 2099.0], [61.5, 2101.0], [61.6, 2102.0], [61.7, 2107.0], [61.8, 2109.0], [61.9, 2111.0], [62.0, 2117.0], [62.1, 2120.0], [62.2, 2122.0], [62.3, 2123.0], [62.4, 2126.0], [62.5, 2128.0], [62.6, 2129.0], [62.7, 2131.0], [62.8, 2134.0], [62.9, 2137.0], [63.0, 2143.0], [63.1, 2145.0], [63.2, 2147.0], [63.3, 2149.0], [63.4, 2151.0], [63.5, 2153.0], [63.6, 2156.0], [63.7, 2160.0], [63.8, 2162.0], [63.9, 2165.0], [64.0, 2168.0], [64.1, 2170.0], [64.2, 2173.0], [64.3, 2176.0], [64.4, 2179.0], [64.5, 2181.0], [64.6, 2183.0], [64.7, 2185.0], [64.8, 2189.0], [64.9, 2190.0], [65.0, 2194.0], [65.1, 2197.0], [65.2, 2201.0], [65.3, 2202.0], [65.4, 2203.0], [65.5, 2207.0], [65.6, 2210.0], [65.7, 2214.0], [65.8, 2219.0], [65.9, 2222.0], [66.0, 2224.0], [66.1, 2227.0], [66.2, 2228.0], [66.3, 2231.0], [66.4, 2232.0], [66.5, 2233.0], [66.6, 2235.0], [66.7, 2238.0], [66.8, 2242.0], [66.9, 2244.0], [67.0, 2247.0], [67.1, 2249.0], [67.2, 2253.0], [67.3, 2255.0], [67.4, 2263.0], [67.5, 2267.0], [67.6, 2269.0], [67.7, 2270.0], [67.8, 2271.0], [67.9, 2274.0], [68.0, 2276.0], [68.1, 2279.0], [68.2, 2282.0], [68.3, 2287.0], [68.4, 2290.0], [68.5, 2294.0], [68.6, 2297.0], [68.7, 2299.0], [68.8, 2303.0], [68.9, 2305.0], [69.0, 2309.0], [69.1, 2311.0], [69.2, 2314.0], [69.3, 2319.0], [69.4, 2322.0], [69.5, 2325.0], [69.6, 2327.0], [69.7, 2329.0], [69.8, 2334.0], [69.9, 2337.0], [70.0, 2339.0], [70.1, 2342.0], [70.2, 2345.0], [70.3, 2347.0], [70.4, 2351.0], [70.5, 2354.0], [70.6, 2357.0], [70.7, 2360.0], [70.8, 2363.0], [70.9, 2369.0], [71.0, 2373.0], [71.1, 2376.0], [71.2, 2379.0], [71.3, 2380.0], [71.4, 2383.0], [71.5, 2385.0], [71.6, 2388.0], [71.7, 2389.0], [71.8, 2391.0], [71.9, 2397.0], [72.0, 2398.0], [72.1, 2403.0], [72.2, 2405.0], [72.3, 2408.0], [72.4, 2413.0], [72.5, 2415.0], [72.6, 2416.0], [72.7, 2417.0], [72.8, 2420.0], [72.9, 2424.0], [73.0, 2424.0], [73.1, 2427.0], [73.2, 2430.0], [73.3, 2432.0], [73.4, 2435.0], [73.5, 2438.0], [73.6, 2439.0], [73.7, 2442.0], [73.8, 2444.0], [73.9, 2452.0], [74.0, 2455.0], [74.1, 2457.0], [74.2, 2461.0], [74.3, 2464.0], [74.4, 2468.0], [74.5, 2471.0], [74.6, 2473.0], [74.7, 2474.0], [74.8, 2478.0], [74.9, 2480.0], [75.0, 2485.0], [75.1, 2488.0], [75.2, 2493.0], [75.3, 2494.0], [75.4, 2497.0], [75.5, 2501.0], [75.6, 2505.0], [75.7, 2506.0], [75.8, 2513.0], [75.9, 2516.0], [76.0, 2522.0], [76.1, 2526.0], [76.2, 2529.0], [76.3, 2531.0], [76.4, 2535.0], [76.5, 2540.0], [76.6, 2546.0], [76.7, 2548.0], [76.8, 2549.0], [76.9, 2556.0], [77.0, 2559.0], [77.1, 2563.0], [77.2, 2565.0], [77.3, 2568.0], [77.4, 2571.0], [77.5, 2573.0], [77.6, 2576.0], [77.7, 2580.0], [77.8, 2583.0], [77.9, 2586.0], [78.0, 2591.0], [78.1, 2595.0], [78.2, 2599.0], [78.3, 2600.0], [78.4, 2602.0], [78.5, 2608.0], [78.6, 2612.0], [78.7, 2615.0], [78.8, 2619.0], [78.9, 2623.0], [79.0, 2628.0], [79.1, 2635.0], [79.2, 2638.0], [79.3, 2642.0], [79.4, 2644.0], [79.5, 2649.0], [79.6, 2653.0], [79.7, 2657.0], [79.8, 2663.0], [79.9, 2665.0], [80.0, 2670.0], [80.1, 2674.0], [80.2, 2681.0], [80.3, 2683.0], [80.4, 2686.0], [80.5, 2690.0], [80.6, 2694.0], [80.7, 2697.0], [80.8, 2701.0], [80.9, 2702.0], [81.0, 2707.0], [81.1, 2708.0], [81.2, 2714.0], [81.3, 2715.0], [81.4, 2719.0], [81.5, 2724.0], [81.6, 2730.0], [81.7, 2735.0], [81.8, 2738.0], [81.9, 2738.0], [82.0, 2740.0], [82.1, 2742.0], [82.2, 2745.0], [82.3, 2747.0], [82.4, 2749.0], [82.5, 2755.0], [82.6, 2758.0], [82.7, 2766.0], [82.8, 2771.0], [82.9, 2776.0], [83.0, 2782.0], [83.1, 2784.0], [83.2, 2787.0], [83.3, 2792.0], [83.4, 2793.0], [83.5, 2797.0], [83.6, 2804.0], [83.7, 2808.0], [83.8, 2811.0], [83.9, 2811.0], [84.0, 2814.0], [84.1, 2818.0], [84.2, 2821.0], [84.3, 2824.0], [84.4, 2829.0], [84.5, 2831.0], [84.6, 2834.0], [84.7, 2838.0], [84.8, 2843.0], [84.9, 2849.0], [85.0, 2850.0], [85.1, 2855.0], [85.2, 2860.0], [85.3, 2872.0], [85.4, 2878.0], [85.5, 2881.0], [85.6, 2887.0], [85.7, 2891.0], [85.8, 2900.0], [85.9, 2906.0], [86.0, 2911.0], [86.1, 2913.0], [86.2, 2919.0], [86.3, 2925.0], [86.4, 2931.0], [86.5, 2936.0], [86.6, 2940.0], [86.7, 2949.0], [86.8, 2952.0], [86.9, 2956.0], [87.0, 2960.0], [87.1, 2963.0], [87.2, 2966.0], [87.3, 2970.0], [87.4, 2978.0], [87.5, 2985.0], [87.6, 2994.0], [87.7, 3002.0], [87.8, 3005.0], [87.9, 3010.0], [88.0, 3022.0], [88.1, 3032.0], [88.2, 3039.0], [88.3, 3048.0], [88.4, 3056.0], [88.5, 3063.0], [88.6, 3072.0], [88.7, 3076.0], [88.8, 3082.0], [88.9, 3094.0], [89.0, 3107.0], [89.1, 3112.0], [89.2, 3120.0], [89.3, 3128.0], [89.4, 3136.0], [89.5, 3143.0], [89.6, 3147.0], [89.7, 3167.0], [89.8, 3175.0], [89.9, 3184.0], [90.0, 3190.0], [90.1, 3194.0], [90.2, 3206.0], [90.3, 3211.0], [90.4, 3218.0], [90.5, 3228.0], [90.6, 3233.0], [90.7, 3242.0], [90.8, 3258.0], [90.9, 3269.0], [91.0, 3280.0], [91.1, 3288.0], [91.2, 3298.0], [91.3, 3302.0], [91.4, 3316.0], [91.5, 3321.0], [91.6, 3336.0], [91.7, 3348.0], [91.8, 3355.0], [91.9, 3363.0], [92.0, 3367.0], [92.1, 3375.0], [92.2, 3379.0], [92.3, 3390.0], [92.4, 3402.0], [92.5, 3409.0], [92.6, 3421.0], [92.7, 3427.0], [92.8, 3431.0], [92.9, 3441.0], [93.0, 3451.0], [93.1, 3462.0], [93.2, 3472.0], [93.3, 3482.0], [93.4, 3495.0], [93.5, 3510.0], [93.6, 3515.0], [93.7, 3546.0], [93.8, 3554.0], [93.9, 3566.0], [94.0, 3577.0], [94.1, 3589.0], [94.2, 3598.0], [94.3, 3606.0], [94.4, 3615.0], [94.5, 3636.0], [94.6, 3644.0], [94.7, 3652.0], [94.8, 3663.0], [94.9, 3671.0], [95.0, 3683.0], [95.1, 3695.0], [95.2, 3709.0], [95.3, 3724.0], [95.4, 3742.0], [95.5, 3793.0], [95.6, 3801.0], [95.7, 3814.0], [95.8, 3838.0], [95.9, 3853.0], [96.0, 3870.0], [96.1, 3878.0], [96.2, 3890.0], [96.3, 3912.0], [96.4, 3928.0], [96.5, 3942.0], [96.6, 3966.0], [96.7, 4007.0], [96.8, 4040.0], [96.9, 4069.0], [97.0, 4090.0], [97.1, 4136.0], [97.2, 4156.0], [97.3, 4193.0], [97.4, 4224.0], [97.5, 4234.0], [97.6, 4272.0], [97.7, 4303.0], [97.8, 4356.0], [97.9, 4414.0], [98.0, 4468.0], [98.1, 4506.0], [98.2, 4560.0], [98.3, 4583.0], [98.4, 4642.0], [98.5, 4669.0], [98.6, 4762.0], [98.7, 4784.0], [98.8, 4856.0], [98.9, 4888.0], [99.0, 5023.0], [99.1, 5079.0], [99.2, 5164.0], [99.3, 5347.0], [99.4, 5442.0], [99.5, 5590.0], [99.6, 5747.0], [99.7, 6415.0], [99.8, 6980.0], [99.9, 7451.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 600.0, "maxY": 358.0, "series": [{"data": [[600.0, 3.0], [700.0, 72.0], [800.0, 358.0], [900.0, 197.0], [1000.0, 143.0], [1100.0, 188.0], [1200.0, 204.0], [1300.0, 245.0], [1400.0, 207.0], [1500.0, 195.0], [1600.0, 228.0], [1700.0, 294.0], [1800.0, 276.0], [1900.0, 296.0], [2000.0, 283.0], [2100.0, 193.0], [2300.0, 171.0], [2200.0, 184.0], [2400.0, 180.0], [2500.0, 146.0], [2600.0, 129.0], [2800.0, 119.0], [2700.0, 142.0], [2900.0, 97.0], [3000.0, 65.0], [3100.0, 63.0], [3300.0, 57.0], [3200.0, 59.0], [3400.0, 55.0], [3500.0, 41.0], [3600.0, 47.0], [3700.0, 21.0], [3800.0, 37.0], [3900.0, 23.0], [4000.0, 19.0], [4100.0, 13.0], [4200.0, 20.0], [4300.0, 9.0], [4400.0, 11.0], [4600.0, 12.0], [4500.0, 12.0], [4800.0, 9.0], [4700.0, 10.0], [4900.0, 4.0], [5000.0, 9.0], [5100.0, 3.0], [5300.0, 7.0], [5200.0, 1.0], [5600.0, 3.0], [5400.0, 4.0], [5500.0, 4.0], [5800.0, 1.0], [5700.0, 4.0], [6000.0, 1.0], [6400.0, 1.0], [6600.0, 1.0], [6900.0, 2.0], [6800.0, 1.0], [6700.0, 1.0], [7000.0, 1.0], [7400.0, 3.0], [7200.0, 1.0], [7300.0, 1.0], [9500.0, 1.0], [10500.0, 1.0], [13300.0, 1.0], [13100.0, 1.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 13300.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 1618.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 3572.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1618.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 3572.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 11.365384615384617, "minX": 1.60423656E12, "maxY": 12.0, "series": [{"data": [[1.60423656E12, 12.0], [1.60423722E12, 12.0], [1.60423692E12, 12.0], [1.60423662E12, 12.0], [1.6042368E12, 12.0], [1.6042374E12, 12.0], [1.60423716E12, 12.0], [1.60423686E12, 12.0], [1.60423704E12, 12.0], [1.60423674E12, 12.0], [1.60423746E12, 11.365384615384617], [1.6042371E12, 12.0], [1.60423728E12, 12.0], [1.60423698E12, 12.0], [1.60423668E12, 12.0], [1.60423734E12, 12.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60423746E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 1416.0, "minX": 1.0, "maxY": 3440.0, "series": [{"data": [[8.0, 2037.0], [4.0, 1636.0], [2.0, 3440.0], [1.0, 3190.0], [9.0, 2844.0], [10.0, 1416.0], [5.0, 2174.0], [11.0, 2457.0], [12.0, 2025.865418034371], [6.0, 1695.0], [3.0, 2243.0], [7.0, 1592.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[11.987283236994216, 2026.3354527938357]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 12.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 547.5166666666667, "minX": 1.60423656E12, "maxY": 2053599.75, "series": [{"data": [[1.60423656E12, 468943.61666666664], [1.60423722E12, 2053599.75], [1.60423692E12, 1809035.9833333334], [1.60423662E12, 1630748.35], [1.6042368E12, 2034152.9], [1.6042374E12, 1681348.9833333334], [1.60423716E12, 1139399.2666666666], [1.60423686E12, 1874790.3], [1.60423704E12, 1715459.8833333333], [1.60423674E12, 1338523.5333333334], [1.60423746E12, 463307.9666666667], [1.6042371E12, 1619208.65], [1.60423728E12, 1664817.05], [1.60423698E12, 1481318.35], [1.60423668E12, 1468495.7833333334], [1.60423734E12, 1529534.85]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60423656E12, 547.5166666666667], [1.60423722E12, 2367.483333333333], [1.60423692E12, 2903.75], [1.60423662E12, 2248.3333333333335], [1.6042368E12, 2802.7], [1.6042374E12, 2587.1833333333334], [1.60423716E12, 2808.9666666666667], [1.60423686E12, 2627.883333333333], [1.60423704E12, 2304.7833333333333], [1.60423674E12, 3069.516666666667], [1.60423746E12, 788.4], [1.6042371E12, 2600.516666666667], [1.60423728E12, 3172.55], [1.60423698E12, 2390.3333333333335], [1.60423668E12, 2440.9333333333334], [1.60423734E12, 2916.483333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60423746E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 1712.6435406698552, "minX": 1.60423656E12, "maxY": 2543.9999999999995, "series": [{"data": [[1.60423656E12, 2476.1805555555566], [1.60423722E12, 2233.6990595611273], [1.60423692E12, 1898.5785340314133], [1.60423662E12, 2251.3438485804436], [1.6042368E12, 1952.8378378378372], [1.6042374E12, 2094.4489795918366], [1.60423716E12, 1906.5948051948055], [1.60423686E12, 2072.270893371758], [1.60423704E12, 2280.9116719242916], [1.60423674E12, 1712.6435406698552], [1.60423746E12, 2543.9999999999995], [1.6042371E12, 1964.680555555555], [1.60423728E12, 1724.8114558472573], [1.60423698E12, 2233.8836477987406], [1.60423668E12, 2186.5164179104477], [1.60423734E12, 1865.8880208333317]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60423746E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 1711.210526315788, "minX": 1.60423656E12, "maxY": 2542.2500000000014, "series": [{"data": [[1.60423656E12, 2473.291666666668], [1.60423722E12, 2231.564263322885], [1.60423692E12, 1896.6020942408381], [1.60423662E12, 2249.050473186121], [1.6042368E12, 1950.364864864864], [1.6042374E12, 2092.795918367347], [1.60423716E12, 1905.5688311688305], [1.60423686E12, 2069.9827089337186], [1.60423704E12, 2278.946372239747], [1.60423674E12, 1711.210526315788], [1.60423746E12, 2542.2500000000014], [1.6042371E12, 1963.1499999999999], [1.60423728E12, 1723.5322195704045], [1.60423698E12, 2231.930817610064], [1.60423668E12, 2184.6119402985073], [1.60423734E12, 1864.5156250000002]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60423746E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.018808777429467082, "minX": 1.60423656E12, "maxY": 1.6111111111111103, "series": [{"data": [[1.60423656E12, 1.6111111111111103], [1.60423722E12, 0.018808777429467082], [1.60423692E12, 0.03141361256544502], [1.60423662E12, 0.050473186119873815], [1.6042368E12, 0.04324324324324323], [1.6042374E12, 0.032069970845481084], [1.60423716E12, 0.03376623376623377], [1.60423686E12, 0.04322766570605189], [1.60423704E12, 0.034700315457413256], [1.60423674E12, 0.0382775119617225], [1.60423746E12, 0.0673076923076923], [1.6042371E12, 0.027777777777777773], [1.60423728E12, 0.03579952267303099], [1.60423698E12, 0.040880503144654086], [1.60423668E12, 0.04477611940298506], [1.60423734E12, 0.033854166666666664]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60423746E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 604.0, "minX": 1.60423656E12, "maxY": 13342.0, "series": [{"data": [[1.60423656E12, 4856.0], [1.60423722E12, 4583.0], [1.60423692E12, 5530.0], [1.60423662E12, 7457.0], [1.6042368E12, 4527.0], [1.6042374E12, 5475.0], [1.60423716E12, 5590.0], [1.60423686E12, 5086.0], [1.60423704E12, 13342.0], [1.60423674E12, 5573.0], [1.60423746E12, 5064.0], [1.6042371E12, 7055.0], [1.60423728E12, 4303.0], [1.60423698E12, 5783.0], [1.60423668E12, 7432.0], [1.60423734E12, 4884.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60423656E12, 1134.0], [1.60423722E12, 993.43999710083], [1.60423692E12, 771.340999726057], [1.60423662E12, 639.0679989385604], [1.6042368E12, 804.762998496294], [1.6042374E12, 744.575999507904], [1.60423716E12, 784.4739999079704], [1.60423686E12, 802.3199991703034], [1.60423704E12, 840.9639983320236], [1.60423674E12, 762.0839996004105], [1.60423746E12, 1081.0], [1.6042371E12, 840.2489999139309], [1.60423728E12, 775.8199980974198], [1.60423698E12, 796.5809991633892], [1.60423668E12, 1029.1439995193482], [1.60423734E12, 782.4649999082088]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60423656E12, 1134.0], [1.60423722E12, 1008.5840019226074], [1.60423692E12, 772.3751001095771], [1.60423662E12, 659.3768037605286], [1.6042368E12, 810.4393006014824], [1.6042374E12, 746.4336001968384], [1.60423716E12, 784.8214000368118], [1.60423686E12, 805.4520003318787], [1.60423704E12, 844.8892001819611], [1.60423674E12, 763.5924001598358], [1.60423746E12, 1084.6340009212495], [1.6042371E12, 840.5739000344277], [1.60423728E12, 780.4740001201629], [1.60423698E12, 798.6324001216889], [1.60423668E12, 1030.9584001922608], [1.60423734E12, 782.8115000367164]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60423656E12, 1134.0], [1.60423722E12, 1000.5199975967407], [1.60423692E12, 771.9154998630286], [1.60423662E12, 643.6039952993393], [1.6042368E12, 807.916499248147], [1.6042374E12, 745.6079997539521], [1.60423716E12, 784.6669999539852], [1.60423686E12, 804.0599995851517], [1.60423704E12, 844.1259997725487], [1.60423674E12, 762.9219998002052], [1.60423746E12, 1081.0], [1.6042371E12, 840.4294999569654], [1.60423728E12, 779.8099990487099], [1.60423698E12, 798.1219998478889], [1.60423668E12, 1030.151999759674], [1.60423734E12, 782.6574999541044]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60423656E12, 1134.0], [1.60423722E12, 924.0], [1.60423692E12, 753.0], [1.60423662E12, 604.0], [1.6042368E12, 757.0], [1.6042374E12, 733.0], [1.60423716E12, 761.0], [1.60423686E12, 782.0], [1.60423704E12, 792.0], [1.60423674E12, 742.0], [1.60423746E12, 1081.0], [1.6042371E12, 789.0], [1.60423728E12, 732.0], [1.60423698E12, 784.0], [1.60423668E12, 1012.0], [1.60423734E12, 772.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60423656E12, 2400.0], [1.60423722E12, 2020.0], [1.60423692E12, 1752.0], [1.60423662E12, 2063.0], [1.6042368E12, 1906.0], [1.6042374E12, 1970.0], [1.60423716E12, 1718.0], [1.60423686E12, 1989.0], [1.60423704E12, 2003.0], [1.60423674E12, 1459.5], [1.60423746E12, 2385.5], [1.6042371E12, 1793.0], [1.60423728E12, 1645.0], [1.60423698E12, 2186.0], [1.60423668E12, 1934.0], [1.60423734E12, 1790.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60423746E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 858.5, "minX": 1.0, "maxY": 3224.0, "series": [{"data": [[8.0, 1678.0], [2.0, 2523.5], [9.0, 1647.0], [10.0, 1436.0], [11.0, 1084.0], [3.0, 2626.0], [12.0, 925.5], [13.0, 872.5], [14.0, 858.5], [15.0, 875.0], [1.0, 3224.0], [4.0, 2458.0], [5.0, 2179.5], [6.0, 1963.0], [7.0, 1897.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 15.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 858.5, "minX": 1.0, "maxY": 3219.0, "series": [{"data": [[8.0, 1678.0], [2.0, 2521.0], [9.0, 1647.0], [10.0, 1435.0], [11.0, 1083.0], [3.0, 2622.0], [12.0, 925.0], [13.0, 872.0], [14.0, 858.5], [15.0, 875.0], [1.0, 3219.0], [4.0, 2455.5], [5.0, 2177.5], [6.0, 1962.0], [7.0, 1896.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 15.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1.4, "minX": 1.60423656E12, "maxY": 6.983333333333333, "series": [{"data": [[1.60423656E12, 1.4], [1.60423722E12, 5.316666666666666], [1.60423692E12, 6.366666666666666], [1.60423662E12, 5.283333333333333], [1.6042368E12, 6.166666666666667], [1.6042374E12, 5.716666666666667], [1.60423716E12, 6.416666666666667], [1.60423686E12, 5.783333333333333], [1.60423704E12, 5.283333333333333], [1.60423674E12, 6.966666666666667], [1.60423746E12, 1.5333333333333334], [1.6042371E12, 6.0], [1.60423728E12, 6.983333333333333], [1.60423698E12, 5.3], [1.60423668E12, 5.583333333333333], [1.60423734E12, 6.4]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60423746E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1.2, "minX": 1.60423656E12, "maxY": 6.983333333333333, "series": [{"data": [[1.60423656E12, 1.2], [1.60423722E12, 5.316666666666666], [1.60423692E12, 6.366666666666666], [1.60423662E12, 5.283333333333333], [1.6042368E12, 6.166666666666667], [1.6042374E12, 5.716666666666667], [1.60423716E12, 6.416666666666667], [1.60423686E12, 5.783333333333333], [1.60423704E12, 5.283333333333333], [1.60423674E12, 6.966666666666667], [1.60423746E12, 1.7333333333333334], [1.6042371E12, 6.0], [1.60423728E12, 6.983333333333333], [1.60423698E12, 5.3], [1.60423668E12, 5.583333333333333], [1.60423734E12, 6.4]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60423746E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.2, "minX": 1.60423656E12, "maxY": 6.983333333333333, "series": [{"data": [[1.60423656E12, 1.2], [1.60423722E12, 5.316666666666666], [1.60423692E12, 6.366666666666666], [1.60423662E12, 5.283333333333333], [1.6042368E12, 6.166666666666667], [1.6042374E12, 5.716666666666667], [1.60423716E12, 6.416666666666667], [1.60423686E12, 5.783333333333333], [1.60423704E12, 5.283333333333333], [1.60423674E12, 6.966666666666667], [1.60423746E12, 1.7333333333333334], [1.6042371E12, 6.0], [1.60423728E12, 6.983333333333333], [1.60423698E12, 5.3], [1.60423668E12, 5.583333333333333], [1.60423734E12, 6.4]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60423746E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.2, "minX": 1.60423656E12, "maxY": 6.983333333333333, "series": [{"data": [[1.60423656E12, 1.2], [1.60423722E12, 5.316666666666666], [1.60423692E12, 6.366666666666666], [1.60423662E12, 5.283333333333333], [1.6042368E12, 6.166666666666667], [1.6042374E12, 5.716666666666667], [1.60423716E12, 6.416666666666667], [1.60423686E12, 5.783333333333333], [1.60423704E12, 5.283333333333333], [1.60423674E12, 6.966666666666667], [1.60423746E12, 1.7333333333333334], [1.6042371E12, 6.0], [1.60423728E12, 6.983333333333333], [1.60423698E12, 5.3], [1.60423668E12, 5.583333333333333], [1.60423734E12, 6.4]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60423746E12, "title": "Total Transactions Per Second"}},
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

