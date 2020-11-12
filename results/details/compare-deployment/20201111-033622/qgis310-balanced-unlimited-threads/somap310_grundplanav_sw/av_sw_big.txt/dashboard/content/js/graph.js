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
        data: {"result": {"minY": 565.0, "minX": 0.0, "maxY": 11044.0, "series": [{"data": [[0.0, 565.0], [0.1, 631.0], [0.2, 713.0], [0.3, 737.0], [0.4, 740.0], [0.5, 745.0], [0.6, 753.0], [0.7, 756.0], [0.8, 760.0], [0.9, 762.0], [1.0, 765.0], [1.1, 770.0], [1.2, 773.0], [1.3, 776.0], [1.4, 782.0], [1.5, 789.0], [1.6, 791.0], [1.7, 792.0], [1.8, 793.0], [1.9, 793.0], [2.0, 795.0], [2.1, 798.0], [2.2, 799.0], [2.3, 801.0], [2.4, 805.0], [2.5, 807.0], [2.6, 809.0], [2.7, 810.0], [2.8, 811.0], [2.9, 813.0], [3.0, 815.0], [3.1, 818.0], [3.2, 821.0], [3.3, 822.0], [3.4, 823.0], [3.5, 824.0], [3.6, 826.0], [3.7, 828.0], [3.8, 830.0], [3.9, 831.0], [4.0, 833.0], [4.1, 834.0], [4.2, 835.0], [4.3, 837.0], [4.4, 838.0], [4.5, 838.0], [4.6, 839.0], [4.7, 841.0], [4.8, 844.0], [4.9, 845.0], [5.0, 848.0], [5.1, 849.0], [5.2, 850.0], [5.3, 854.0], [5.4, 854.0], [5.5, 857.0], [5.6, 858.0], [5.7, 859.0], [5.8, 862.0], [5.9, 863.0], [6.0, 865.0], [6.1, 866.0], [6.2, 868.0], [6.3, 870.0], [6.4, 872.0], [6.5, 874.0], [6.6, 875.0], [6.7, 876.0], [6.8, 876.0], [6.9, 878.0], [7.0, 880.0], [7.1, 881.0], [7.2, 883.0], [7.3, 886.0], [7.4, 890.0], [7.5, 890.0], [7.6, 891.0], [7.7, 892.0], [7.8, 893.0], [7.9, 896.0], [8.0, 898.0], [8.1, 901.0], [8.2, 901.0], [8.3, 903.0], [8.4, 904.0], [8.5, 905.0], [8.6, 907.0], [8.7, 910.0], [8.8, 911.0], [8.9, 912.0], [9.0, 914.0], [9.1, 918.0], [9.2, 920.0], [9.3, 922.0], [9.4, 924.0], [9.5, 925.0], [9.6, 928.0], [9.7, 930.0], [9.8, 931.0], [9.9, 933.0], [10.0, 935.0], [10.1, 941.0], [10.2, 945.0], [10.3, 947.0], [10.4, 951.0], [10.5, 952.0], [10.6, 954.0], [10.7, 957.0], [10.8, 960.0], [10.9, 962.0], [11.0, 966.0], [11.1, 969.0], [11.2, 972.0], [11.3, 974.0], [11.4, 978.0], [11.5, 983.0], [11.6, 989.0], [11.7, 993.0], [11.8, 998.0], [11.9, 1000.0], [12.0, 1004.0], [12.1, 1006.0], [12.2, 1011.0], [12.3, 1015.0], [12.4, 1016.0], [12.5, 1021.0], [12.6, 1023.0], [12.7, 1030.0], [12.8, 1037.0], [12.9, 1040.0], [13.0, 1043.0], [13.1, 1051.0], [13.2, 1057.0], [13.3, 1059.0], [13.4, 1063.0], [13.5, 1066.0], [13.6, 1069.0], [13.7, 1073.0], [13.8, 1077.0], [13.9, 1079.0], [14.0, 1082.0], [14.1, 1084.0], [14.2, 1086.0], [14.3, 1089.0], [14.4, 1091.0], [14.5, 1095.0], [14.6, 1097.0], [14.7, 1100.0], [14.8, 1106.0], [14.9, 1110.0], [15.0, 1113.0], [15.1, 1116.0], [15.2, 1120.0], [15.3, 1123.0], [15.4, 1126.0], [15.5, 1128.0], [15.6, 1131.0], [15.7, 1134.0], [15.8, 1140.0], [15.9, 1143.0], [16.0, 1146.0], [16.1, 1147.0], [16.2, 1150.0], [16.3, 1152.0], [16.4, 1154.0], [16.5, 1157.0], [16.6, 1159.0], [16.7, 1161.0], [16.8, 1163.0], [16.9, 1166.0], [17.0, 1167.0], [17.1, 1170.0], [17.2, 1172.0], [17.3, 1173.0], [17.4, 1176.0], [17.5, 1179.0], [17.6, 1181.0], [17.7, 1182.0], [17.8, 1186.0], [17.9, 1192.0], [18.0, 1194.0], [18.1, 1195.0], [18.2, 1197.0], [18.3, 1199.0], [18.4, 1202.0], [18.5, 1204.0], [18.6, 1210.0], [18.7, 1214.0], [18.8, 1217.0], [18.9, 1220.0], [19.0, 1223.0], [19.1, 1225.0], [19.2, 1227.0], [19.3, 1229.0], [19.4, 1231.0], [19.5, 1232.0], [19.6, 1234.0], [19.7, 1236.0], [19.8, 1238.0], [19.9, 1243.0], [20.0, 1247.0], [20.1, 1249.0], [20.2, 1253.0], [20.3, 1257.0], [20.4, 1258.0], [20.5, 1260.0], [20.6, 1263.0], [20.7, 1264.0], [20.8, 1266.0], [20.9, 1267.0], [21.0, 1270.0], [21.1, 1273.0], [21.2, 1274.0], [21.3, 1276.0], [21.4, 1278.0], [21.5, 1280.0], [21.6, 1283.0], [21.7, 1284.0], [21.8, 1287.0], [21.9, 1288.0], [22.0, 1293.0], [22.1, 1294.0], [22.2, 1298.0], [22.3, 1300.0], [22.4, 1302.0], [22.5, 1305.0], [22.6, 1307.0], [22.7, 1309.0], [22.8, 1311.0], [22.9, 1314.0], [23.0, 1318.0], [23.1, 1320.0], [23.2, 1322.0], [23.3, 1325.0], [23.4, 1329.0], [23.5, 1331.0], [23.6, 1336.0], [23.7, 1339.0], [23.8, 1341.0], [23.9, 1342.0], [24.0, 1344.0], [24.1, 1346.0], [24.2, 1348.0], [24.3, 1353.0], [24.4, 1354.0], [24.5, 1355.0], [24.6, 1357.0], [24.7, 1358.0], [24.8, 1361.0], [24.9, 1362.0], [25.0, 1363.0], [25.1, 1369.0], [25.2, 1372.0], [25.3, 1375.0], [25.4, 1376.0], [25.5, 1381.0], [25.6, 1382.0], [25.7, 1383.0], [25.8, 1387.0], [25.9, 1389.0], [26.0, 1393.0], [26.1, 1396.0], [26.2, 1397.0], [26.3, 1399.0], [26.4, 1402.0], [26.5, 1403.0], [26.6, 1406.0], [26.7, 1410.0], [26.8, 1413.0], [26.9, 1415.0], [27.0, 1416.0], [27.1, 1420.0], [27.2, 1423.0], [27.3, 1425.0], [27.4, 1428.0], [27.5, 1431.0], [27.6, 1432.0], [27.7, 1435.0], [27.8, 1438.0], [27.9, 1441.0], [28.0, 1443.0], [28.1, 1445.0], [28.2, 1449.0], [28.3, 1452.0], [28.4, 1456.0], [28.5, 1459.0], [28.6, 1460.0], [28.7, 1462.0], [28.8, 1466.0], [28.9, 1467.0], [29.0, 1470.0], [29.1, 1472.0], [29.2, 1473.0], [29.3, 1475.0], [29.4, 1478.0], [29.5, 1481.0], [29.6, 1484.0], [29.7, 1488.0], [29.8, 1491.0], [29.9, 1493.0], [30.0, 1494.0], [30.1, 1495.0], [30.2, 1498.0], [30.3, 1499.0], [30.4, 1502.0], [30.5, 1504.0], [30.6, 1507.0], [30.7, 1508.0], [30.8, 1511.0], [30.9, 1518.0], [31.0, 1521.0], [31.1, 1523.0], [31.2, 1525.0], [31.3, 1529.0], [31.4, 1531.0], [31.5, 1534.0], [31.6, 1537.0], [31.7, 1541.0], [31.8, 1543.0], [31.9, 1544.0], [32.0, 1545.0], [32.1, 1547.0], [32.2, 1551.0], [32.3, 1552.0], [32.4, 1554.0], [32.5, 1556.0], [32.6, 1561.0], [32.7, 1562.0], [32.8, 1564.0], [32.9, 1566.0], [33.0, 1569.0], [33.1, 1573.0], [33.2, 1576.0], [33.3, 1578.0], [33.4, 1583.0], [33.5, 1584.0], [33.6, 1587.0], [33.7, 1588.0], [33.8, 1590.0], [33.9, 1592.0], [34.0, 1594.0], [34.1, 1595.0], [34.2, 1597.0], [34.3, 1599.0], [34.4, 1601.0], [34.5, 1602.0], [34.6, 1603.0], [34.7, 1604.0], [34.8, 1606.0], [34.9, 1608.0], [35.0, 1609.0], [35.1, 1611.0], [35.2, 1614.0], [35.3, 1616.0], [35.4, 1617.0], [35.5, 1620.0], [35.6, 1623.0], [35.7, 1624.0], [35.8, 1627.0], [35.9, 1627.0], [36.0, 1628.0], [36.1, 1629.0], [36.2, 1631.0], [36.3, 1633.0], [36.4, 1636.0], [36.5, 1637.0], [36.6, 1640.0], [36.7, 1642.0], [36.8, 1643.0], [36.9, 1644.0], [37.0, 1647.0], [37.1, 1649.0], [37.2, 1651.0], [37.3, 1652.0], [37.4, 1655.0], [37.5, 1657.0], [37.6, 1658.0], [37.7, 1660.0], [37.8, 1662.0], [37.9, 1664.0], [38.0, 1665.0], [38.1, 1667.0], [38.2, 1669.0], [38.3, 1670.0], [38.4, 1672.0], [38.5, 1674.0], [38.6, 1675.0], [38.7, 1676.0], [38.8, 1677.0], [38.9, 1678.0], [39.0, 1681.0], [39.1, 1683.0], [39.2, 1686.0], [39.3, 1687.0], [39.4, 1690.0], [39.5, 1695.0], [39.6, 1696.0], [39.7, 1698.0], [39.8, 1699.0], [39.9, 1700.0], [40.0, 1702.0], [40.1, 1705.0], [40.2, 1707.0], [40.3, 1708.0], [40.4, 1711.0], [40.5, 1713.0], [40.6, 1716.0], [40.7, 1718.0], [40.8, 1719.0], [40.9, 1719.0], [41.0, 1720.0], [41.1, 1723.0], [41.2, 1724.0], [41.3, 1725.0], [41.4, 1726.0], [41.5, 1731.0], [41.6, 1733.0], [41.7, 1736.0], [41.8, 1736.0], [41.9, 1741.0], [42.0, 1742.0], [42.1, 1743.0], [42.2, 1746.0], [42.3, 1748.0], [42.4, 1750.0], [42.5, 1753.0], [42.6, 1755.0], [42.7, 1757.0], [42.8, 1759.0], [42.9, 1760.0], [43.0, 1762.0], [43.1, 1764.0], [43.2, 1766.0], [43.3, 1769.0], [43.4, 1772.0], [43.5, 1775.0], [43.6, 1776.0], [43.7, 1778.0], [43.8, 1779.0], [43.9, 1780.0], [44.0, 1782.0], [44.1, 1784.0], [44.2, 1786.0], [44.3, 1786.0], [44.4, 1788.0], [44.5, 1789.0], [44.6, 1791.0], [44.7, 1793.0], [44.8, 1795.0], [44.9, 1799.0], [45.0, 1802.0], [45.1, 1804.0], [45.2, 1805.0], [45.3, 1807.0], [45.4, 1808.0], [45.5, 1809.0], [45.6, 1811.0], [45.7, 1814.0], [45.8, 1815.0], [45.9, 1817.0], [46.0, 1819.0], [46.1, 1820.0], [46.2, 1821.0], [46.3, 1822.0], [46.4, 1823.0], [46.5, 1824.0], [46.6, 1826.0], [46.7, 1828.0], [46.8, 1828.0], [46.9, 1830.0], [47.0, 1832.0], [47.1, 1837.0], [47.2, 1839.0], [47.3, 1840.0], [47.4, 1841.0], [47.5, 1842.0], [47.6, 1844.0], [47.7, 1846.0], [47.8, 1846.0], [47.9, 1847.0], [48.0, 1848.0], [48.1, 1850.0], [48.2, 1851.0], [48.3, 1853.0], [48.4, 1857.0], [48.5, 1858.0], [48.6, 1858.0], [48.7, 1859.0], [48.8, 1861.0], [48.9, 1863.0], [49.0, 1867.0], [49.1, 1868.0], [49.2, 1869.0], [49.3, 1872.0], [49.4, 1873.0], [49.5, 1875.0], [49.6, 1877.0], [49.7, 1878.0], [49.8, 1881.0], [49.9, 1882.0], [50.0, 1885.0], [50.1, 1886.0], [50.2, 1887.0], [50.3, 1887.0], [50.4, 1889.0], [50.5, 1891.0], [50.6, 1893.0], [50.7, 1894.0], [50.8, 1896.0], [50.9, 1898.0], [51.0, 1899.0], [51.1, 1900.0], [51.2, 1901.0], [51.3, 1904.0], [51.4, 1905.0], [51.5, 1908.0], [51.6, 1909.0], [51.7, 1911.0], [51.8, 1912.0], [51.9, 1913.0], [52.0, 1914.0], [52.1, 1915.0], [52.2, 1918.0], [52.3, 1920.0], [52.4, 1921.0], [52.5, 1924.0], [52.6, 1925.0], [52.7, 1926.0], [52.8, 1928.0], [52.9, 1929.0], [53.0, 1930.0], [53.1, 1934.0], [53.2, 1934.0], [53.3, 1936.0], [53.4, 1938.0], [53.5, 1939.0], [53.6, 1940.0], [53.7, 1943.0], [53.8, 1944.0], [53.9, 1945.0], [54.0, 1946.0], [54.1, 1949.0], [54.2, 1951.0], [54.3, 1952.0], [54.4, 1954.0], [54.5, 1956.0], [54.6, 1959.0], [54.7, 1960.0], [54.8, 1962.0], [54.9, 1964.0], [55.0, 1965.0], [55.1, 1967.0], [55.2, 1968.0], [55.3, 1971.0], [55.4, 1972.0], [55.5, 1973.0], [55.6, 1975.0], [55.7, 1977.0], [55.8, 1979.0], [55.9, 1981.0], [56.0, 1982.0], [56.1, 1983.0], [56.2, 1986.0], [56.3, 1989.0], [56.4, 1992.0], [56.5, 1995.0], [56.6, 1997.0], [56.7, 2000.0], [56.8, 2001.0], [56.9, 2003.0], [57.0, 2005.0], [57.1, 2007.0], [57.2, 2009.0], [57.3, 2011.0], [57.4, 2013.0], [57.5, 2017.0], [57.6, 2020.0], [57.7, 2023.0], [57.8, 2025.0], [57.9, 2026.0], [58.0, 2029.0], [58.1, 2032.0], [58.2, 2034.0], [58.3, 2035.0], [58.4, 2037.0], [58.5, 2041.0], [58.6, 2044.0], [58.7, 2045.0], [58.8, 2047.0], [58.9, 2048.0], [59.0, 2049.0], [59.1, 2053.0], [59.2, 2054.0], [59.3, 2056.0], [59.4, 2058.0], [59.5, 2060.0], [59.6, 2063.0], [59.7, 2065.0], [59.8, 2067.0], [59.9, 2069.0], [60.0, 2071.0], [60.1, 2072.0], [60.2, 2074.0], [60.3, 2075.0], [60.4, 2078.0], [60.5, 2079.0], [60.6, 2081.0], [60.7, 2083.0], [60.8, 2084.0], [60.9, 2085.0], [61.0, 2087.0], [61.1, 2089.0], [61.2, 2091.0], [61.3, 2092.0], [61.4, 2095.0], [61.5, 2099.0], [61.6, 2102.0], [61.7, 2103.0], [61.8, 2105.0], [61.9, 2107.0], [62.0, 2108.0], [62.1, 2112.0], [62.2, 2113.0], [62.3, 2117.0], [62.4, 2118.0], [62.5, 2121.0], [62.6, 2124.0], [62.7, 2126.0], [62.8, 2129.0], [62.9, 2132.0], [63.0, 2134.0], [63.1, 2138.0], [63.2, 2141.0], [63.3, 2142.0], [63.4, 2144.0], [63.5, 2147.0], [63.6, 2149.0], [63.7, 2153.0], [63.8, 2155.0], [63.9, 2158.0], [64.0, 2160.0], [64.1, 2163.0], [64.2, 2167.0], [64.3, 2168.0], [64.4, 2171.0], [64.5, 2173.0], [64.6, 2175.0], [64.7, 2178.0], [64.8, 2180.0], [64.9, 2183.0], [65.0, 2184.0], [65.1, 2187.0], [65.2, 2188.0], [65.3, 2190.0], [65.4, 2192.0], [65.5, 2193.0], [65.6, 2197.0], [65.7, 2199.0], [65.8, 2202.0], [65.9, 2204.0], [66.0, 2206.0], [66.1, 2212.0], [66.2, 2215.0], [66.3, 2219.0], [66.4, 2223.0], [66.5, 2228.0], [66.6, 2232.0], [66.7, 2235.0], [66.8, 2237.0], [66.9, 2240.0], [67.0, 2242.0], [67.1, 2243.0], [67.2, 2246.0], [67.3, 2249.0], [67.4, 2254.0], [67.5, 2257.0], [67.6, 2258.0], [67.7, 2260.0], [67.8, 2263.0], [67.9, 2266.0], [68.0, 2268.0], [68.1, 2269.0], [68.2, 2274.0], [68.3, 2275.0], [68.4, 2278.0], [68.5, 2281.0], [68.6, 2283.0], [68.7, 2285.0], [68.8, 2289.0], [68.9, 2292.0], [69.0, 2296.0], [69.1, 2297.0], [69.2, 2299.0], [69.3, 2302.0], [69.4, 2303.0], [69.5, 2308.0], [69.6, 2313.0], [69.7, 2317.0], [69.8, 2320.0], [69.9, 2323.0], [70.0, 2328.0], [70.1, 2330.0], [70.2, 2335.0], [70.3, 2340.0], [70.4, 2342.0], [70.5, 2344.0], [70.6, 2345.0], [70.7, 2349.0], [70.8, 2350.0], [70.9, 2354.0], [71.0, 2356.0], [71.1, 2360.0], [71.2, 2362.0], [71.3, 2364.0], [71.4, 2367.0], [71.5, 2369.0], [71.6, 2374.0], [71.7, 2377.0], [71.8, 2380.0], [71.9, 2383.0], [72.0, 2385.0], [72.1, 2393.0], [72.2, 2398.0], [72.3, 2399.0], [72.4, 2406.0], [72.5, 2412.0], [72.6, 2414.0], [72.7, 2420.0], [72.8, 2423.0], [72.9, 2429.0], [73.0, 2431.0], [73.1, 2433.0], [73.2, 2437.0], [73.3, 2440.0], [73.4, 2443.0], [73.5, 2446.0], [73.6, 2451.0], [73.7, 2454.0], [73.8, 2456.0], [73.9, 2460.0], [74.0, 2463.0], [74.1, 2465.0], [74.2, 2467.0], [74.3, 2472.0], [74.4, 2474.0], [74.5, 2477.0], [74.6, 2481.0], [74.7, 2485.0], [74.8, 2490.0], [74.9, 2495.0], [75.0, 2496.0], [75.1, 2499.0], [75.2, 2505.0], [75.3, 2510.0], [75.4, 2515.0], [75.5, 2519.0], [75.6, 2523.0], [75.7, 2529.0], [75.8, 2533.0], [75.9, 2538.0], [76.0, 2541.0], [76.1, 2543.0], [76.2, 2550.0], [76.3, 2555.0], [76.4, 2559.0], [76.5, 2563.0], [76.6, 2567.0], [76.7, 2569.0], [76.8, 2574.0], [76.9, 2579.0], [77.0, 2584.0], [77.1, 2589.0], [77.2, 2591.0], [77.3, 2595.0], [77.4, 2598.0], [77.5, 2603.0], [77.6, 2609.0], [77.7, 2614.0], [77.8, 2617.0], [77.9, 2619.0], [78.0, 2624.0], [78.1, 2626.0], [78.2, 2630.0], [78.3, 2633.0], [78.4, 2636.0], [78.5, 2641.0], [78.6, 2644.0], [78.7, 2648.0], [78.8, 2650.0], [78.9, 2653.0], [79.0, 2656.0], [79.1, 2661.0], [79.2, 2665.0], [79.3, 2666.0], [79.4, 2671.0], [79.5, 2677.0], [79.6, 2679.0], [79.7, 2683.0], [79.8, 2684.0], [79.9, 2690.0], [80.0, 2694.0], [80.1, 2698.0], [80.2, 2708.0], [80.3, 2711.0], [80.4, 2714.0], [80.5, 2716.0], [80.6, 2717.0], [80.7, 2719.0], [80.8, 2725.0], [80.9, 2727.0], [81.0, 2732.0], [81.1, 2734.0], [81.2, 2738.0], [81.3, 2739.0], [81.4, 2742.0], [81.5, 2747.0], [81.6, 2752.0], [81.7, 2753.0], [81.8, 2758.0], [81.9, 2762.0], [82.0, 2765.0], [82.1, 2766.0], [82.2, 2767.0], [82.3, 2769.0], [82.4, 2773.0], [82.5, 2775.0], [82.6, 2779.0], [82.7, 2782.0], [82.8, 2786.0], [82.9, 2789.0], [83.0, 2792.0], [83.1, 2795.0], [83.2, 2799.0], [83.3, 2803.0], [83.4, 2806.0], [83.5, 2809.0], [83.6, 2812.0], [83.7, 2815.0], [83.8, 2818.0], [83.9, 2822.0], [84.0, 2824.0], [84.1, 2828.0], [84.2, 2833.0], [84.3, 2835.0], [84.4, 2840.0], [84.5, 2844.0], [84.6, 2849.0], [84.7, 2851.0], [84.8, 2858.0], [84.9, 2863.0], [85.0, 2868.0], [85.1, 2872.0], [85.2, 2879.0], [85.3, 2884.0], [85.4, 2887.0], [85.5, 2891.0], [85.6, 2895.0], [85.7, 2902.0], [85.8, 2905.0], [85.9, 2907.0], [86.0, 2912.0], [86.1, 2918.0], [86.2, 2922.0], [86.3, 2926.0], [86.4, 2932.0], [86.5, 2941.0], [86.6, 2945.0], [86.7, 2950.0], [86.8, 2954.0], [86.9, 2959.0], [87.0, 2961.0], [87.1, 2969.0], [87.2, 2971.0], [87.3, 2978.0], [87.4, 2984.0], [87.5, 2987.0], [87.6, 2993.0], [87.7, 2995.0], [87.8, 3000.0], [87.9, 3007.0], [88.0, 3013.0], [88.1, 3018.0], [88.2, 3022.0], [88.3, 3029.0], [88.4, 3038.0], [88.5, 3044.0], [88.6, 3049.0], [88.7, 3056.0], [88.8, 3063.0], [88.9, 3066.0], [89.0, 3070.0], [89.1, 3084.0], [89.2, 3092.0], [89.3, 3096.0], [89.4, 3103.0], [89.5, 3119.0], [89.6, 3132.0], [89.7, 3135.0], [89.8, 3141.0], [89.9, 3148.0], [90.0, 3154.0], [90.1, 3161.0], [90.2, 3174.0], [90.3, 3178.0], [90.4, 3188.0], [90.5, 3196.0], [90.6, 3203.0], [90.7, 3209.0], [90.8, 3216.0], [90.9, 3221.0], [91.0, 3227.0], [91.1, 3234.0], [91.2, 3244.0], [91.3, 3249.0], [91.4, 3256.0], [91.5, 3264.0], [91.6, 3269.0], [91.7, 3273.0], [91.8, 3280.0], [91.9, 3285.0], [92.0, 3291.0], [92.1, 3301.0], [92.2, 3307.0], [92.3, 3320.0], [92.4, 3326.0], [92.5, 3333.0], [92.6, 3339.0], [92.7, 3349.0], [92.8, 3354.0], [92.9, 3367.0], [93.0, 3379.0], [93.1, 3394.0], [93.2, 3407.0], [93.3, 3433.0], [93.4, 3445.0], [93.5, 3450.0], [93.6, 3456.0], [93.7, 3465.0], [93.8, 3484.0], [93.9, 3491.0], [94.0, 3500.0], [94.1, 3508.0], [94.2, 3517.0], [94.3, 3524.0], [94.4, 3530.0], [94.5, 3544.0], [94.6, 3547.0], [94.7, 3565.0], [94.8, 3582.0], [94.9, 3598.0], [95.0, 3612.0], [95.1, 3626.0], [95.2, 3637.0], [95.3, 3654.0], [95.4, 3667.0], [95.5, 3682.0], [95.6, 3705.0], [95.7, 3729.0], [95.8, 3760.0], [95.9, 3772.0], [96.0, 3784.0], [96.1, 3806.0], [96.2, 3851.0], [96.3, 3880.0], [96.4, 3925.0], [96.5, 3961.0], [96.6, 3971.0], [96.7, 3999.0], [96.8, 4032.0], [96.9, 4068.0], [97.0, 4095.0], [97.1, 4118.0], [97.2, 4128.0], [97.3, 4152.0], [97.4, 4210.0], [97.5, 4263.0], [97.6, 4285.0], [97.7, 4319.0], [97.8, 4340.0], [97.9, 4394.0], [98.0, 4413.0], [98.1, 4472.0], [98.2, 4521.0], [98.3, 4572.0], [98.4, 4628.0], [98.5, 4697.0], [98.6, 4773.0], [98.7, 4820.0], [98.8, 4872.0], [98.9, 4955.0], [99.0, 5091.0], [99.1, 5176.0], [99.2, 5289.0], [99.3, 5398.0], [99.4, 5581.0], [99.5, 5861.0], [99.6, 6095.0], [99.7, 6583.0], [99.8, 6902.0], [99.9, 7553.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 500.0, "maxY": 318.0, "series": [{"data": [[600.0, 6.0], [700.0, 108.0], [800.0, 301.0], [900.0, 197.0], [1000.0, 146.0], [1100.0, 189.0], [1200.0, 205.0], [1300.0, 212.0], [1400.0, 207.0], [1500.0, 209.0], [1600.0, 284.0], [1700.0, 264.0], [1800.0, 318.0], [1900.0, 293.0], [2000.0, 251.0], [2100.0, 217.0], [2200.0, 183.0], [2300.0, 160.0], [2400.0, 145.0], [2500.0, 122.0], [2600.0, 138.0], [2700.0, 162.0], [2800.0, 127.0], [2900.0, 109.0], [3000.0, 81.0], [3100.0, 64.0], [3200.0, 75.0], [3300.0, 59.0], [3400.0, 43.0], [3500.0, 50.0], [3700.0, 25.0], [3600.0, 33.0], [3800.0, 13.0], [3900.0, 20.0], [4000.0, 19.0], [4100.0, 17.0], [4300.0, 15.0], [4200.0, 14.0], [4400.0, 11.0], [4500.0, 9.0], [4600.0, 9.0], [4700.0, 6.0], [4800.0, 10.0], [5000.0, 6.0], [5100.0, 5.0], [4900.0, 4.0], [5200.0, 5.0], [5300.0, 6.0], [5400.0, 1.0], [5600.0, 5.0], [5500.0, 3.0], [5800.0, 3.0], [6000.0, 3.0], [6100.0, 1.0], [6500.0, 3.0], [6600.0, 1.0], [6400.0, 2.0], [6800.0, 1.0], [6700.0, 1.0], [6900.0, 1.0], [7100.0, 2.0], [7200.0, 2.0], [7500.0, 1.0], [7600.0, 1.0], [7800.0, 1.0], [7700.0, 2.0], [11000.0, 1.0], [500.0, 3.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 11000.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 1575.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 3615.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1575.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 3615.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 11.717948717948717, "minX": 1.6050723E12, "maxY": 12.0, "series": [{"data": [[1.60507242E12, 12.0], [1.60507272E12, 12.0], [1.60507278E12, 12.0], [1.60507308E12, 12.0], [1.60507266E12, 12.0], [1.60507296E12, 12.0], [1.60507302E12, 12.0], [1.60507236E12, 12.0], [1.6050729E12, 12.0], [1.6050723E12, 12.0], [1.6050726E12, 12.0], [1.60507314E12, 11.717948717948717], [1.60507248E12, 12.0], [1.60507254E12, 12.0], [1.60507284E12, 12.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60507314E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 1342.0, "minX": 1.0, "maxY": 4108.0, "series": [{"data": [[8.0, 2242.0], [4.0, 1409.0], [2.0, 4108.0], [1.0, 3985.0], [9.0, 1377.0], [10.0, 2906.0], [5.0, 3057.0], [11.0, 1897.0], [12.0, 2021.1911565939374], [6.0, 1364.0], [3.0, 1942.0], [7.0, 1342.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[11.987283236994216, 2021.8454720616576]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 12.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 1742.1166666666666, "minX": 1.6050723E12, "maxY": 2071728.2833333334, "series": [{"data": [[1.60507242E12, 1070039.3333333333], [1.60507272E12, 1745772.9333333333], [1.60507278E12, 1460027.5166666666], [1.60507308E12, 1648538.9333333333], [1.60507266E12, 1721036.9], [1.60507296E12, 1978262.35], [1.60507302E12, 1514324.25], [1.60507236E12, 1638823.85], [1.6050729E12, 1722890.6333333333], [1.6050723E12, 1473028.1], [1.6050726E12, 1614891.5833333333], [1.60507314E12, 1115103.8833333333], [1.60507248E12, 2071728.2833333334], [1.60507254E12, 1990661.5166666666], [1.60507284E12, 1217348.2]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60507242E12, 2857.45], [1.60507272E12, 1994.8666666666666], [1.60507278E12, 2617.116666666667], [1.60507308E12, 3024.65], [1.60507266E12, 2689.616666666667], [1.60507296E12, 2811.8333333333335], [1.60507302E12, 2798.266666666667], [1.60507236E12, 2758.1], [1.6050729E12, 2639.383333333333], [1.6050723E12, 1742.1166666666666], [1.6050726E12, 2755.45], [1.60507314E12, 1756.9666666666667], [1.60507248E12, 2492.4666666666667], [1.60507254E12, 3018.766666666667], [1.60507284E12, 2620.2833333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60507314E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 1782.0451127819551, "minX": 1.6050723E12, "maxY": 2609.3582089552237, "series": [{"data": [[1.60507242E12, 1830.584810126581], [1.60507272E12, 2609.3582089552237], [1.60507278E12, 2022.6956521739128], [1.60507308E12, 1785.884711779449], [1.60507266E12, 2019.596638655462], [1.60507296E12, 1948.4285714285709], [1.60507302E12, 1959.4266304347827], [1.60507236E12, 1881.9658792650919], [1.6050729E12, 1983.6239554317556], [1.6050723E12, 2398.783333333332], [1.6050726E12, 1982.7851239669415], [1.60507314E12, 2427.4658119658125], [1.60507248E12, 2195.0729483282657], [1.60507254E12, 1782.0451127819551], [1.60507284E12, 2014.7242339832862]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60507314E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 1779.8270676691732, "minX": 1.6050723E12, "maxY": 2607.2686567164174, "series": [{"data": [[1.60507242E12, 1829.3468354430383], [1.60507272E12, 2607.2686567164174], [1.60507278E12, 2021.3559782608693], [1.60507308E12, 1784.5513784461134], [1.60507266E12, 2017.966386554621], [1.60507296E12, 1946.5633423180602], [1.60507302E12, 1958.0978260869558], [1.60507236E12, 1880.0419947506562], [1.6050729E12, 1981.9665738161566], [1.6050723E12, 2396.0999999999995], [1.6050726E12, 1980.6942148760334], [1.60507314E12, 2425.9957264957256], [1.60507248E12, 2192.1580547112453], [1.60507254E12, 1779.8270676691732], [1.60507284E12, 2013.5682451253479]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60507314E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.025062656641604043, "minX": 1.6050723E12, "maxY": 0.5291666666666662, "series": [{"data": [[1.60507242E12, 0.03291139240506328], [1.60507272E12, 0.04104477611940302], [1.60507278E12, 0.0380434782608696], [1.60507308E12, 0.025062656641604043], [1.60507266E12, 0.04481792717086832], [1.60507296E12, 0.03773584905660381], [1.60507302E12, 0.043478260869565216], [1.60507236E12, 0.03674540682414703], [1.6050729E12, 0.041782729805013935], [1.6050723E12, 0.5291666666666662], [1.6050726E12, 0.04407713498622588], [1.60507314E12, 0.04700854700854703], [1.60507248E12, 0.05167173252279639], [1.60507254E12, 0.0300751879699248], [1.60507284E12, 0.03621169916434541]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60507314E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 565.0, "minX": 1.6050723E12, "maxY": 11044.0, "series": [{"data": [[1.60507242E12, 5622.0], [1.60507272E12, 7553.0], [1.60507278E12, 11044.0], [1.60507308E12, 4804.0], [1.60507266E12, 5658.0], [1.60507296E12, 4908.0], [1.60507302E12, 4014.0], [1.60507236E12, 6832.0], [1.6050729E12, 4489.0], [1.6050723E12, 7817.0], [1.6050726E12, 5288.0], [1.60507314E12, 5660.0], [1.60507248E12, 5538.0], [1.60507254E12, 4753.0], [1.60507284E12, 5398.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60507242E12, 747.51199924469], [1.60507272E12, 1189.7889994227887], [1.60507278E12, 794.6049995601177], [1.60507308E12, 713.0], [1.60507266E12, 597.2159976100921], [1.60507296E12, 777.435999379158], [1.60507302E12, 810.3209999120236], [1.60507236E12, 857.4379999089241], [1.6050729E12, 832.6799993991851], [1.6050723E12, 818.0419989657402], [1.6050726E12, 796.5519998264313], [1.60507314E12, 1015.7249991595745], [1.60507248E12, 857.8899970889091], [1.60507254E12, 745.5999999046326], [1.60507284E12, 759.9599996566773]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60507242E12, 750.363200302124], [1.60507272E12, 1191.9679002308847], [1.60507278E12, 796.2655001759529], [1.60507308E12, 713.0], [1.60507266E12, 606.2376009559631], [1.60507296E12, 779.7796002483368], [1.60507302E12, 810.6531000351906], [1.60507236E12, 857.7818000364304], [1.6050729E12, 834.9480002403259], [1.6050723E12, 821.9462004137039], [1.6050726E12, 797.2072000694275], [1.60507314E12, 1018.8975003361702], [1.60507248E12, 868.0780010700225], [1.60507254E12, 745.960000038147], [1.60507284E12, 761.2560001373291]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60507242E12, 749.095999622345], [1.60507272E12, 1190.9994997113943], [1.60507278E12, 795.5274997800589], [1.60507308E12, 713.0], [1.60507266E12, 602.2279988050461], [1.60507296E12, 778.737999689579], [1.60507302E12, 810.5054999560118], [1.60507236E12, 857.6289999544621], [1.6050729E12, 833.9399996995926], [1.6050723E12, 820.2109994828701], [1.6050726E12, 796.9159999132156], [1.60507314E12, 1017.4874995797873], [1.60507248E12, 863.5899986624718], [1.60507254E12, 745.7999999523163], [1.60507284E12, 760.6799998283386]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60507242E12, 697.0], [1.60507272E12, 1160.0], [1.60507278E12, 761.0], [1.60507308E12, 670.0], [1.60507266E12, 565.0], [1.60507296E12, 756.0], [1.60507302E12, 792.0], [1.60507236E12, 769.0], [1.6050729E12, 824.0], [1.6050723E12, 811.0], [1.6050726E12, 789.0], [1.60507314E12, 882.0], [1.60507248E12, 740.0], [1.60507254E12, 743.0], [1.60507284E12, 756.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60507242E12, 1541.0], [1.60507272E12, 2363.0], [1.60507278E12, 1843.0], [1.60507308E12, 1634.0], [1.60507266E12, 1925.0], [1.60507296E12, 1911.0], [1.60507302E12, 1898.5], [1.60507236E12, 1766.0], [1.6050729E12, 1885.0], [1.6050723E12, 2196.5], [1.6050726E12, 1924.0], [1.60507314E12, 2248.5], [1.60507248E12, 2011.0], [1.60507254E12, 1676.0], [1.60507284E12, 1754.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60507314E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 818.0, "minX": 1.0, "maxY": 3985.0, "series": [{"data": [[2.0, 2878.5], [8.0, 1707.0], [9.0, 1530.0], [10.0, 1207.5], [11.0, 1109.0], [3.0, 2613.0], [12.0, 930.0], [13.0, 932.0], [14.0, 876.0], [15.0, 885.0], [4.0, 2378.5], [1.0, 3985.0], [16.0, 818.0], [5.0, 2169.5], [6.0, 2070.0], [7.0, 1845.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 16.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 818.0, "minX": 1.0, "maxY": 3984.0, "series": [{"data": [[2.0, 2878.0], [8.0, 1704.5], [9.0, 1530.0], [10.0, 1207.5], [11.0, 1109.0], [3.0, 2608.5], [12.0, 930.0], [13.0, 932.0], [14.0, 876.0], [15.0, 884.5], [4.0, 2376.5], [1.0, 3984.0], [16.0, 818.0], [5.0, 2166.5], [6.0, 2069.0], [7.0, 1844.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 16.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 3.7, "minX": 1.6050723E12, "maxY": 6.65, "series": [{"data": [[1.60507242E12, 6.583333333333333], [1.60507272E12, 4.466666666666667], [1.60507278E12, 6.133333333333334], [1.60507308E12, 6.65], [1.60507266E12, 5.95], [1.60507296E12, 6.183333333333334], [1.60507302E12, 6.133333333333334], [1.60507236E12, 6.35], [1.6050729E12, 5.983333333333333], [1.6050723E12, 4.2], [1.6050726E12, 6.05], [1.60507314E12, 3.7], [1.60507248E12, 5.483333333333333], [1.60507254E12, 6.65], [1.60507284E12, 5.983333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60507314E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 3.9, "minX": 1.6050723E12, "maxY": 6.65, "series": [{"data": [[1.60507242E12, 6.583333333333333], [1.60507272E12, 4.466666666666667], [1.60507278E12, 6.133333333333334], [1.60507308E12, 6.65], [1.60507266E12, 5.95], [1.60507296E12, 6.183333333333334], [1.60507302E12, 6.133333333333334], [1.60507236E12, 6.35], [1.6050729E12, 5.983333333333333], [1.6050723E12, 4.0], [1.6050726E12, 6.05], [1.60507314E12, 3.9], [1.60507248E12, 5.483333333333333], [1.60507254E12, 6.65], [1.60507284E12, 5.983333333333333]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60507314E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 3.9, "minX": 1.6050723E12, "maxY": 6.65, "series": [{"data": [[1.60507242E12, 6.583333333333333], [1.60507272E12, 4.466666666666667], [1.60507278E12, 6.133333333333334], [1.60507308E12, 6.65], [1.60507266E12, 5.95], [1.60507296E12, 6.183333333333334], [1.60507302E12, 6.133333333333334], [1.60507236E12, 6.35], [1.6050729E12, 5.983333333333333], [1.6050723E12, 4.0], [1.6050726E12, 6.05], [1.60507314E12, 3.9], [1.60507248E12, 5.483333333333333], [1.60507254E12, 6.65], [1.60507284E12, 5.983333333333333]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60507314E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 3.9, "minX": 1.6050723E12, "maxY": 6.65, "series": [{"data": [[1.60507242E12, 6.583333333333333], [1.60507272E12, 4.466666666666667], [1.60507278E12, 6.133333333333334], [1.60507308E12, 6.65], [1.60507266E12, 5.95], [1.60507296E12, 6.183333333333334], [1.60507302E12, 6.133333333333334], [1.60507236E12, 6.35], [1.6050729E12, 5.983333333333333], [1.6050723E12, 4.0], [1.6050726E12, 6.05], [1.60507314E12, 3.9], [1.60507248E12, 5.483333333333333], [1.60507254E12, 6.65], [1.60507284E12, 5.983333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60507314E12, "title": "Total Transactions Per Second"}},
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

