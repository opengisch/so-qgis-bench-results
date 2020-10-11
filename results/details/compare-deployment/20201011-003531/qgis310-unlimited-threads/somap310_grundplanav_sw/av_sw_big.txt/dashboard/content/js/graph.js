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
        data: {"result": {"minY": 558.0, "minX": 0.0, "maxY": 9509.0, "series": [{"data": [[0.0, 558.0], [0.1, 650.0], [0.2, 732.0], [0.3, 739.0], [0.4, 744.0], [0.5, 747.0], [0.6, 750.0], [0.7, 753.0], [0.8, 755.0], [0.9, 757.0], [1.0, 762.0], [1.1, 767.0], [1.2, 771.0], [1.3, 772.0], [1.4, 774.0], [1.5, 777.0], [1.6, 779.0], [1.7, 781.0], [1.8, 783.0], [1.9, 785.0], [2.0, 788.0], [2.1, 791.0], [2.2, 794.0], [2.3, 796.0], [2.4, 801.0], [2.5, 802.0], [2.6, 803.0], [2.7, 806.0], [2.8, 807.0], [2.9, 808.0], [3.0, 809.0], [3.1, 811.0], [3.2, 815.0], [3.3, 817.0], [3.4, 819.0], [3.5, 820.0], [3.6, 822.0], [3.7, 823.0], [3.8, 825.0], [3.9, 827.0], [4.0, 828.0], [4.1, 830.0], [4.2, 831.0], [4.3, 834.0], [4.4, 835.0], [4.5, 836.0], [4.6, 837.0], [4.7, 838.0], [4.8, 840.0], [4.9, 840.0], [5.0, 843.0], [5.1, 844.0], [5.2, 845.0], [5.3, 847.0], [5.4, 850.0], [5.5, 852.0], [5.6, 853.0], [5.7, 854.0], [5.8, 857.0], [5.9, 859.0], [6.0, 860.0], [6.1, 862.0], [6.2, 863.0], [6.3, 865.0], [6.4, 866.0], [6.5, 867.0], [6.6, 869.0], [6.7, 869.0], [6.8, 870.0], [6.9, 872.0], [7.0, 874.0], [7.1, 875.0], [7.2, 876.0], [7.3, 877.0], [7.4, 878.0], [7.5, 881.0], [7.6, 882.0], [7.7, 884.0], [7.8, 885.0], [7.9, 886.0], [8.0, 887.0], [8.1, 889.0], [8.2, 890.0], [8.3, 892.0], [8.4, 894.0], [8.5, 897.0], [8.6, 901.0], [8.7, 903.0], [8.8, 907.0], [8.9, 908.0], [9.0, 911.0], [9.1, 914.0], [9.2, 917.0], [9.3, 918.0], [9.4, 920.0], [9.5, 922.0], [9.6, 925.0], [9.7, 927.0], [9.8, 929.0], [9.9, 931.0], [10.0, 934.0], [10.1, 938.0], [10.2, 939.0], [10.3, 941.0], [10.4, 944.0], [10.5, 947.0], [10.6, 950.0], [10.7, 951.0], [10.8, 953.0], [10.9, 958.0], [11.0, 960.0], [11.1, 961.0], [11.2, 965.0], [11.3, 968.0], [11.4, 972.0], [11.5, 975.0], [11.6, 978.0], [11.7, 981.0], [11.8, 985.0], [11.9, 989.0], [12.0, 993.0], [12.1, 996.0], [12.2, 1000.0], [12.3, 1005.0], [12.4, 1011.0], [12.5, 1014.0], [12.6, 1020.0], [12.7, 1024.0], [12.8, 1029.0], [12.9, 1032.0], [13.0, 1034.0], [13.1, 1042.0], [13.2, 1043.0], [13.3, 1052.0], [13.4, 1056.0], [13.5, 1059.0], [13.6, 1062.0], [13.7, 1067.0], [13.8, 1070.0], [13.9, 1072.0], [14.0, 1074.0], [14.1, 1075.0], [14.2, 1078.0], [14.3, 1081.0], [14.4, 1083.0], [14.5, 1086.0], [14.6, 1089.0], [14.7, 1094.0], [14.8, 1097.0], [14.9, 1099.0], [15.0, 1103.0], [15.1, 1105.0], [15.2, 1109.0], [15.3, 1113.0], [15.4, 1115.0], [15.5, 1118.0], [15.6, 1121.0], [15.7, 1124.0], [15.8, 1127.0], [15.9, 1129.0], [16.0, 1130.0], [16.1, 1132.0], [16.2, 1135.0], [16.3, 1140.0], [16.4, 1142.0], [16.5, 1143.0], [16.6, 1147.0], [16.7, 1149.0], [16.8, 1151.0], [16.9, 1154.0], [17.0, 1155.0], [17.1, 1158.0], [17.2, 1159.0], [17.3, 1162.0], [17.4, 1164.0], [17.5, 1167.0], [17.6, 1167.0], [17.7, 1168.0], [17.8, 1171.0], [17.9, 1173.0], [18.0, 1175.0], [18.1, 1180.0], [18.2, 1181.0], [18.3, 1184.0], [18.4, 1186.0], [18.5, 1188.0], [18.6, 1189.0], [18.7, 1192.0], [18.8, 1194.0], [18.9, 1197.0], [19.0, 1199.0], [19.1, 1202.0], [19.2, 1204.0], [19.3, 1205.0], [19.4, 1207.0], [19.5, 1210.0], [19.6, 1212.0], [19.7, 1214.0], [19.8, 1216.0], [19.9, 1220.0], [20.0, 1223.0], [20.1, 1225.0], [20.2, 1227.0], [20.3, 1228.0], [20.4, 1231.0], [20.5, 1233.0], [20.6, 1236.0], [20.7, 1238.0], [20.8, 1240.0], [20.9, 1243.0], [21.0, 1246.0], [21.1, 1248.0], [21.2, 1250.0], [21.3, 1255.0], [21.4, 1257.0], [21.5, 1259.0], [21.6, 1263.0], [21.7, 1266.0], [21.8, 1268.0], [21.9, 1269.0], [22.0, 1271.0], [22.1, 1273.0], [22.2, 1274.0], [22.3, 1276.0], [22.4, 1278.0], [22.5, 1280.0], [22.6, 1282.0], [22.7, 1284.0], [22.8, 1285.0], [22.9, 1285.0], [23.0, 1288.0], [23.1, 1293.0], [23.2, 1296.0], [23.3, 1299.0], [23.4, 1301.0], [23.5, 1302.0], [23.6, 1304.0], [23.7, 1308.0], [23.8, 1309.0], [23.9, 1311.0], [24.0, 1313.0], [24.1, 1316.0], [24.2, 1318.0], [24.3, 1323.0], [24.4, 1325.0], [24.5, 1327.0], [24.6, 1328.0], [24.7, 1330.0], [24.8, 1333.0], [24.9, 1336.0], [25.0, 1338.0], [25.1, 1341.0], [25.2, 1342.0], [25.3, 1346.0], [25.4, 1348.0], [25.5, 1351.0], [25.6, 1354.0], [25.7, 1355.0], [25.8, 1356.0], [25.9, 1358.0], [26.0, 1360.0], [26.1, 1363.0], [26.2, 1364.0], [26.3, 1365.0], [26.4, 1367.0], [26.5, 1372.0], [26.6, 1374.0], [26.7, 1377.0], [26.8, 1379.0], [26.9, 1384.0], [27.0, 1387.0], [27.1, 1390.0], [27.2, 1393.0], [27.3, 1394.0], [27.4, 1397.0], [27.5, 1399.0], [27.6, 1401.0], [27.7, 1402.0], [27.8, 1404.0], [27.9, 1406.0], [28.0, 1411.0], [28.1, 1413.0], [28.2, 1415.0], [28.3, 1418.0], [28.4, 1421.0], [28.5, 1425.0], [28.6, 1428.0], [28.7, 1430.0], [28.8, 1431.0], [28.9, 1435.0], [29.0, 1436.0], [29.1, 1438.0], [29.2, 1442.0], [29.3, 1445.0], [29.4, 1448.0], [29.5, 1452.0], [29.6, 1454.0], [29.7, 1456.0], [29.8, 1458.0], [29.9, 1462.0], [30.0, 1465.0], [30.1, 1468.0], [30.2, 1471.0], [30.3, 1473.0], [30.4, 1475.0], [30.5, 1479.0], [30.6, 1481.0], [30.7, 1484.0], [30.8, 1485.0], [30.9, 1488.0], [31.0, 1491.0], [31.1, 1493.0], [31.2, 1496.0], [31.3, 1500.0], [31.4, 1502.0], [31.5, 1505.0], [31.6, 1507.0], [31.7, 1509.0], [31.8, 1511.0], [31.9, 1512.0], [32.0, 1513.0], [32.1, 1514.0], [32.2, 1517.0], [32.3, 1519.0], [32.4, 1521.0], [32.5, 1524.0], [32.6, 1525.0], [32.7, 1530.0], [32.8, 1531.0], [32.9, 1535.0], [33.0, 1539.0], [33.1, 1540.0], [33.2, 1544.0], [33.3, 1545.0], [33.4, 1547.0], [33.5, 1548.0], [33.6, 1549.0], [33.7, 1551.0], [33.8, 1552.0], [33.9, 1556.0], [34.0, 1558.0], [34.1, 1559.0], [34.2, 1560.0], [34.3, 1562.0], [34.4, 1563.0], [34.5, 1565.0], [34.6, 1568.0], [34.7, 1570.0], [34.8, 1572.0], [34.9, 1576.0], [35.0, 1579.0], [35.1, 1583.0], [35.2, 1585.0], [35.3, 1589.0], [35.4, 1591.0], [35.5, 1593.0], [35.6, 1596.0], [35.7, 1601.0], [35.8, 1604.0], [35.9, 1608.0], [36.0, 1608.0], [36.1, 1612.0], [36.2, 1613.0], [36.3, 1615.0], [36.4, 1619.0], [36.5, 1620.0], [36.6, 1623.0], [36.7, 1625.0], [36.8, 1626.0], [36.9, 1629.0], [37.0, 1632.0], [37.1, 1633.0], [37.2, 1636.0], [37.3, 1637.0], [37.4, 1642.0], [37.5, 1645.0], [37.6, 1647.0], [37.7, 1648.0], [37.8, 1650.0], [37.9, 1652.0], [38.0, 1656.0], [38.1, 1658.0], [38.2, 1660.0], [38.3, 1664.0], [38.4, 1666.0], [38.5, 1668.0], [38.6, 1670.0], [38.7, 1674.0], [38.8, 1677.0], [38.9, 1678.0], [39.0, 1680.0], [39.1, 1680.0], [39.2, 1682.0], [39.3, 1685.0], [39.4, 1687.0], [39.5, 1689.0], [39.6, 1691.0], [39.7, 1692.0], [39.8, 1693.0], [39.9, 1697.0], [40.0, 1698.0], [40.1, 1700.0], [40.2, 1702.0], [40.3, 1706.0], [40.4, 1708.0], [40.5, 1710.0], [40.6, 1713.0], [40.7, 1715.0], [40.8, 1717.0], [40.9, 1717.0], [41.0, 1721.0], [41.1, 1723.0], [41.2, 1724.0], [41.3, 1726.0], [41.4, 1728.0], [41.5, 1728.0], [41.6, 1730.0], [41.7, 1731.0], [41.8, 1732.0], [41.9, 1733.0], [42.0, 1734.0], [42.1, 1736.0], [42.2, 1739.0], [42.3, 1741.0], [42.4, 1743.0], [42.5, 1744.0], [42.6, 1747.0], [42.7, 1749.0], [42.8, 1750.0], [42.9, 1754.0], [43.0, 1757.0], [43.1, 1761.0], [43.2, 1763.0], [43.3, 1764.0], [43.4, 1766.0], [43.5, 1768.0], [43.6, 1771.0], [43.7, 1773.0], [43.8, 1774.0], [43.9, 1777.0], [44.0, 1778.0], [44.1, 1780.0], [44.2, 1780.0], [44.3, 1781.0], [44.4, 1782.0], [44.5, 1784.0], [44.6, 1787.0], [44.7, 1790.0], [44.8, 1793.0], [44.9, 1794.0], [45.0, 1797.0], [45.1, 1798.0], [45.2, 1799.0], [45.3, 1803.0], [45.4, 1805.0], [45.5, 1806.0], [45.6, 1808.0], [45.7, 1811.0], [45.8, 1813.0], [45.9, 1815.0], [46.0, 1816.0], [46.1, 1818.0], [46.2, 1819.0], [46.3, 1821.0], [46.4, 1823.0], [46.5, 1824.0], [46.6, 1825.0], [46.7, 1827.0], [46.8, 1828.0], [46.9, 1830.0], [47.0, 1833.0], [47.1, 1834.0], [47.2, 1836.0], [47.3, 1839.0], [47.4, 1840.0], [47.5, 1842.0], [47.6, 1845.0], [47.7, 1846.0], [47.8, 1849.0], [47.9, 1852.0], [48.0, 1854.0], [48.1, 1856.0], [48.2, 1858.0], [48.3, 1858.0], [48.4, 1860.0], [48.5, 1862.0], [48.6, 1864.0], [48.7, 1865.0], [48.8, 1867.0], [48.9, 1868.0], [49.0, 1869.0], [49.1, 1870.0], [49.2, 1872.0], [49.3, 1873.0], [49.4, 1875.0], [49.5, 1876.0], [49.6, 1878.0], [49.7, 1879.0], [49.8, 1880.0], [49.9, 1883.0], [50.0, 1884.0], [50.1, 1886.0], [50.2, 1886.0], [50.3, 1888.0], [50.4, 1888.0], [50.5, 1891.0], [50.6, 1896.0], [50.7, 1896.0], [50.8, 1899.0], [50.9, 1900.0], [51.0, 1902.0], [51.1, 1903.0], [51.2, 1904.0], [51.3, 1906.0], [51.4, 1907.0], [51.5, 1909.0], [51.6, 1910.0], [51.7, 1912.0], [51.8, 1914.0], [51.9, 1915.0], [52.0, 1917.0], [52.1, 1918.0], [52.2, 1920.0], [52.3, 1922.0], [52.4, 1923.0], [52.5, 1923.0], [52.6, 1924.0], [52.7, 1926.0], [52.8, 1927.0], [52.9, 1930.0], [53.0, 1931.0], [53.1, 1932.0], [53.2, 1936.0], [53.3, 1938.0], [53.4, 1939.0], [53.5, 1941.0], [53.6, 1941.0], [53.7, 1943.0], [53.8, 1945.0], [53.9, 1948.0], [54.0, 1949.0], [54.1, 1949.0], [54.2, 1951.0], [54.3, 1953.0], [54.4, 1956.0], [54.5, 1958.0], [54.6, 1959.0], [54.7, 1960.0], [54.8, 1962.0], [54.9, 1963.0], [55.0, 1965.0], [55.1, 1967.0], [55.2, 1968.0], [55.3, 1969.0], [55.4, 1970.0], [55.5, 1972.0], [55.6, 1975.0], [55.7, 1977.0], [55.8, 1980.0], [55.9, 1982.0], [56.0, 1982.0], [56.1, 1984.0], [56.2, 1984.0], [56.3, 1986.0], [56.4, 1988.0], [56.5, 1988.0], [56.6, 1989.0], [56.7, 1991.0], [56.8, 1992.0], [56.9, 1992.0], [57.0, 1993.0], [57.1, 1996.0], [57.2, 1996.0], [57.3, 1998.0], [57.4, 2001.0], [57.5, 2003.0], [57.6, 2004.0], [57.7, 2005.0], [57.8, 2006.0], [57.9, 2008.0], [58.0, 2011.0], [58.1, 2014.0], [58.2, 2016.0], [58.3, 2018.0], [58.4, 2019.0], [58.5, 2021.0], [58.6, 2023.0], [58.7, 2025.0], [58.8, 2026.0], [58.9, 2029.0], [59.0, 2031.0], [59.1, 2033.0], [59.2, 2035.0], [59.3, 2037.0], [59.4, 2038.0], [59.5, 2041.0], [59.6, 2044.0], [59.7, 2045.0], [59.8, 2048.0], [59.9, 2049.0], [60.0, 2051.0], [60.1, 2053.0], [60.2, 2055.0], [60.3, 2056.0], [60.4, 2058.0], [60.5, 2060.0], [60.6, 2063.0], [60.7, 2066.0], [60.8, 2067.0], [60.9, 2069.0], [61.0, 2072.0], [61.1, 2075.0], [61.2, 2079.0], [61.3, 2080.0], [61.4, 2085.0], [61.5, 2086.0], [61.6, 2088.0], [61.7, 2091.0], [61.8, 2093.0], [61.9, 2097.0], [62.0, 2101.0], [62.1, 2104.0], [62.2, 2105.0], [62.3, 2109.0], [62.4, 2111.0], [62.5, 2115.0], [62.6, 2118.0], [62.7, 2122.0], [62.8, 2123.0], [62.9, 2128.0], [63.0, 2132.0], [63.1, 2134.0], [63.2, 2137.0], [63.3, 2139.0], [63.4, 2142.0], [63.5, 2145.0], [63.6, 2147.0], [63.7, 2147.0], [63.8, 2150.0], [63.9, 2152.0], [64.0, 2153.0], [64.1, 2155.0], [64.2, 2157.0], [64.3, 2159.0], [64.4, 2164.0], [64.5, 2167.0], [64.6, 2169.0], [64.7, 2171.0], [64.8, 2176.0], [64.9, 2180.0], [65.0, 2181.0], [65.1, 2182.0], [65.2, 2184.0], [65.3, 2185.0], [65.4, 2188.0], [65.5, 2190.0], [65.6, 2193.0], [65.7, 2195.0], [65.8, 2199.0], [65.9, 2202.0], [66.0, 2204.0], [66.1, 2207.0], [66.2, 2209.0], [66.3, 2211.0], [66.4, 2213.0], [66.5, 2220.0], [66.6, 2223.0], [66.7, 2225.0], [66.8, 2229.0], [66.9, 2231.0], [67.0, 2232.0], [67.1, 2234.0], [67.2, 2236.0], [67.3, 2237.0], [67.4, 2240.0], [67.5, 2244.0], [67.6, 2246.0], [67.7, 2249.0], [67.8, 2254.0], [67.9, 2260.0], [68.0, 2264.0], [68.1, 2265.0], [68.2, 2267.0], [68.3, 2270.0], [68.4, 2271.0], [68.5, 2275.0], [68.6, 2277.0], [68.7, 2280.0], [68.8, 2284.0], [68.9, 2287.0], [69.0, 2291.0], [69.1, 2293.0], [69.2, 2296.0], [69.3, 2300.0], [69.4, 2301.0], [69.5, 2304.0], [69.6, 2305.0], [69.7, 2308.0], [69.8, 2311.0], [69.9, 2315.0], [70.0, 2319.0], [70.1, 2322.0], [70.2, 2325.0], [70.3, 2327.0], [70.4, 2329.0], [70.5, 2332.0], [70.6, 2335.0], [70.7, 2337.0], [70.8, 2340.0], [70.9, 2343.0], [71.0, 2346.0], [71.1, 2348.0], [71.2, 2352.0], [71.3, 2356.0], [71.4, 2359.0], [71.5, 2361.0], [71.6, 2365.0], [71.7, 2369.0], [71.8, 2374.0], [71.9, 2381.0], [72.0, 2384.0], [72.1, 2385.0], [72.2, 2388.0], [72.3, 2393.0], [72.4, 2394.0], [72.5, 2399.0], [72.6, 2400.0], [72.7, 2402.0], [72.8, 2408.0], [72.9, 2409.0], [73.0, 2413.0], [73.1, 2414.0], [73.2, 2418.0], [73.3, 2419.0], [73.4, 2422.0], [73.5, 2427.0], [73.6, 2429.0], [73.7, 2431.0], [73.8, 2434.0], [73.9, 2439.0], [74.0, 2444.0], [74.1, 2449.0], [74.2, 2453.0], [74.3, 2459.0], [74.4, 2464.0], [74.5, 2466.0], [74.6, 2470.0], [74.7, 2473.0], [74.8, 2479.0], [74.9, 2481.0], [75.0, 2483.0], [75.1, 2486.0], [75.2, 2488.0], [75.3, 2492.0], [75.4, 2495.0], [75.5, 2500.0], [75.6, 2504.0], [75.7, 2507.0], [75.8, 2513.0], [75.9, 2517.0], [76.0, 2518.0], [76.1, 2524.0], [76.2, 2526.0], [76.3, 2530.0], [76.4, 2534.0], [76.5, 2535.0], [76.6, 2539.0], [76.7, 2543.0], [76.8, 2548.0], [76.9, 2554.0], [77.0, 2558.0], [77.1, 2562.0], [77.2, 2565.0], [77.3, 2568.0], [77.4, 2571.0], [77.5, 2574.0], [77.6, 2578.0], [77.7, 2584.0], [77.8, 2585.0], [77.9, 2589.0], [78.0, 2591.0], [78.1, 2596.0], [78.2, 2598.0], [78.3, 2600.0], [78.4, 2602.0], [78.5, 2607.0], [78.6, 2611.0], [78.7, 2616.0], [78.8, 2617.0], [78.9, 2622.0], [79.0, 2629.0], [79.1, 2637.0], [79.2, 2640.0], [79.3, 2641.0], [79.4, 2644.0], [79.5, 2650.0], [79.6, 2652.0], [79.7, 2655.0], [79.8, 2657.0], [79.9, 2658.0], [80.0, 2661.0], [80.1, 2665.0], [80.2, 2667.0], [80.3, 2668.0], [80.4, 2671.0], [80.5, 2674.0], [80.6, 2678.0], [80.7, 2684.0], [80.8, 2686.0], [80.9, 2688.0], [81.0, 2692.0], [81.1, 2696.0], [81.2, 2702.0], [81.3, 2706.0], [81.4, 2709.0], [81.5, 2713.0], [81.6, 2719.0], [81.7, 2723.0], [81.8, 2727.0], [81.9, 2729.0], [82.0, 2732.0], [82.1, 2733.0], [82.2, 2738.0], [82.3, 2740.0], [82.4, 2743.0], [82.5, 2745.0], [82.6, 2747.0], [82.7, 2752.0], [82.8, 2755.0], [82.9, 2760.0], [83.0, 2765.0], [83.1, 2769.0], [83.2, 2772.0], [83.3, 2774.0], [83.4, 2777.0], [83.5, 2779.0], [83.6, 2781.0], [83.7, 2787.0], [83.8, 2790.0], [83.9, 2797.0], [84.0, 2803.0], [84.1, 2807.0], [84.2, 2811.0], [84.3, 2817.0], [84.4, 2820.0], [84.5, 2822.0], [84.6, 2827.0], [84.7, 2830.0], [84.8, 2833.0], [84.9, 2836.0], [85.0, 2840.0], [85.1, 2845.0], [85.2, 2851.0], [85.3, 2855.0], [85.4, 2861.0], [85.5, 2865.0], [85.6, 2867.0], [85.7, 2872.0], [85.8, 2878.0], [85.9, 2882.0], [86.0, 2885.0], [86.1, 2889.0], [86.2, 2898.0], [86.3, 2903.0], [86.4, 2909.0], [86.5, 2914.0], [86.6, 2918.0], [86.7, 2923.0], [86.8, 2925.0], [86.9, 2930.0], [87.0, 2935.0], [87.1, 2942.0], [87.2, 2945.0], [87.3, 2948.0], [87.4, 2955.0], [87.5, 2958.0], [87.6, 2965.0], [87.7, 2968.0], [87.8, 2972.0], [87.9, 2978.0], [88.0, 2984.0], [88.1, 2989.0], [88.2, 2996.0], [88.3, 3001.0], [88.4, 3004.0], [88.5, 3008.0], [88.6, 3013.0], [88.7, 3015.0], [88.8, 3023.0], [88.9, 3028.0], [89.0, 3036.0], [89.1, 3049.0], [89.2, 3055.0], [89.3, 3062.0], [89.4, 3072.0], [89.5, 3085.0], [89.6, 3093.0], [89.7, 3102.0], [89.8, 3107.0], [89.9, 3112.0], [90.0, 3118.0], [90.1, 3122.0], [90.2, 3131.0], [90.3, 3139.0], [90.4, 3147.0], [90.5, 3156.0], [90.6, 3162.0], [90.7, 3173.0], [90.8, 3178.0], [90.9, 3184.0], [91.0, 3191.0], [91.1, 3201.0], [91.2, 3212.0], [91.3, 3219.0], [91.4, 3232.0], [91.5, 3237.0], [91.6, 3260.0], [91.7, 3273.0], [91.8, 3282.0], [91.9, 3297.0], [92.0, 3306.0], [92.1, 3314.0], [92.2, 3324.0], [92.3, 3343.0], [92.4, 3355.0], [92.5, 3365.0], [92.6, 3370.0], [92.7, 3377.0], [92.8, 3381.0], [92.9, 3387.0], [93.0, 3401.0], [93.1, 3407.0], [93.2, 3424.0], [93.3, 3428.0], [93.4, 3434.0], [93.5, 3443.0], [93.6, 3449.0], [93.7, 3458.0], [93.8, 3471.0], [93.9, 3483.0], [94.0, 3494.0], [94.1, 3498.0], [94.2, 3503.0], [94.3, 3515.0], [94.4, 3524.0], [94.5, 3531.0], [94.6, 3544.0], [94.7, 3560.0], [94.8, 3572.0], [94.9, 3595.0], [95.0, 3609.0], [95.1, 3632.0], [95.2, 3647.0], [95.3, 3663.0], [95.4, 3678.0], [95.5, 3693.0], [95.6, 3714.0], [95.7, 3734.0], [95.8, 3766.0], [95.9, 3794.0], [96.0, 3802.0], [96.1, 3812.0], [96.2, 3837.0], [96.3, 3855.0], [96.4, 3889.0], [96.5, 3942.0], [96.6, 3966.0], [96.7, 4008.0], [96.8, 4030.0], [96.9, 4069.0], [97.0, 4086.0], [97.1, 4123.0], [97.2, 4180.0], [97.3, 4209.0], [97.4, 4241.0], [97.5, 4279.0], [97.6, 4316.0], [97.7, 4345.0], [97.8, 4367.0], [97.9, 4395.0], [98.0, 4422.0], [98.1, 4463.0], [98.2, 4489.0], [98.3, 4539.0], [98.4, 4576.0], [98.5, 4689.0], [98.6, 4744.0], [98.7, 4801.0], [98.8, 4854.0], [98.9, 5013.0], [99.0, 5143.0], [99.1, 5400.0], [99.2, 5509.0], [99.3, 5642.0], [99.4, 5748.0], [99.5, 6084.0], [99.6, 6489.0], [99.7, 6786.0], [99.8, 7180.0], [99.9, 7513.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 500.0, "maxY": 341.0, "series": [{"data": [[600.0, 4.0], [700.0, 116.0], [800.0, 323.0], [900.0, 188.0], [1000.0, 141.0], [1100.0, 213.0], [1200.0, 225.0], [1300.0, 217.0], [1400.0, 195.0], [1500.0, 228.0], [1600.0, 226.0], [1700.0, 268.0], [1800.0, 291.0], [1900.0, 341.0], [2000.0, 236.0], [2100.0, 203.0], [2200.0, 177.0], [2300.0, 171.0], [2400.0, 153.0], [2500.0, 145.0], [2600.0, 148.0], [2700.0, 144.0], [2800.0, 119.0], [2900.0, 107.0], [3000.0, 73.0], [3100.0, 74.0], [3300.0, 56.0], [3200.0, 42.0], [3400.0, 59.0], [3500.0, 41.0], [3600.0, 31.0], [3700.0, 25.0], [3800.0, 23.0], [3900.0, 13.0], [4000.0, 18.0], [4300.0, 22.0], [4100.0, 11.0], [4200.0, 15.0], [4500.0, 12.0], [4400.0, 13.0], [4600.0, 4.0], [4800.0, 8.0], [4700.0, 9.0], [4900.0, 2.0], [5000.0, 4.0], [5100.0, 4.0], [5300.0, 2.0], [5200.0, 1.0], [5600.0, 5.0], [5500.0, 3.0], [5400.0, 5.0], [5800.0, 1.0], [5700.0, 4.0], [6000.0, 5.0], [6100.0, 1.0], [6500.0, 1.0], [6400.0, 3.0], [6700.0, 4.0], [6900.0, 3.0], [7100.0, 2.0], [7200.0, 2.0], [7500.0, 3.0], [7700.0, 1.0], [8100.0, 2.0], [9200.0, 1.0], [9500.0, 1.0], [500.0, 2.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 9500.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 1626.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 3564.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1626.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 3564.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 11.732793522267208, "minX": 1.60238304E12, "maxY": 12.0, "series": [{"data": [[1.60238304E12, 12.0], [1.60238382E12, 12.0], [1.6023834E12, 12.0], [1.6023831E12, 12.0], [1.60238376E12, 12.0], [1.60238346E12, 12.0], [1.60238316E12, 12.0], [1.6023837E12, 12.0], [1.60238322E12, 12.0], [1.60238364E12, 12.0], [1.60238328E12, 12.0], [1.60238358E12, 12.0], [1.60238388E12, 11.732793522267208], [1.60238334E12, 12.0], [1.60238352E12, 12.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60238388E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 1404.0, "minX": 1.0, "maxY": 3677.0, "series": [{"data": [[8.0, 1871.0], [4.0, 1886.0], [2.0, 3677.0], [1.0, 3653.0], [9.0, 1685.0], [10.0, 2641.0], [5.0, 1404.0], [11.0, 1507.0], [12.0, 2010.3228422475343], [6.0, 1658.0], [3.0, 1926.0], [7.0, 1650.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[11.987283236994216, 2010.60115606936]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 12.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 1395.8, "minX": 1.60238304E12, "maxY": 2025087.6333333333, "series": [{"data": [[1.60238304E12, 1298147.2666666666], [1.60238382E12, 1609175.1333333333], [1.6023834E12, 1723199.4], [1.6023831E12, 1586430.5166666666], [1.60238376E12, 1557277.75], [1.60238346E12, 1745455.7833333334], [1.60238316E12, 1125050.0166666666], [1.6023837E12, 2016339.6166666667], [1.60238322E12, 2025087.6333333333], [1.60238364E12, 1594470.5], [1.60238328E12, 1936187.9333333333], [1.60238358E12, 1373041.2166666666], [1.60238388E12, 1240467.35], [1.60238334E12, 1652938.5], [1.60238352E12, 1489691.7333333334]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60238304E12, 1395.8], [1.60238382E12, 3069.866666666667], [1.6023834E12, 2844.35], [1.6023831E12, 2691.85], [1.60238376E12, 2835.85], [1.60238346E12, 2213.5], [1.60238316E12, 2866.9166666666665], [1.6023837E12, 2834.366666666667], [1.60238322E12, 2468.633333333333], [1.60238364E12, 2923.75], [1.60238328E12, 3107.0666666666666], [1.60238358E12, 2469.85], [1.60238388E12, 1857.4666666666667], [1.60238334E12, 2612.3333333333335], [1.60238352E12, 2385.733333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60238388E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 1749.1605839416059, "minX": 1.60238304E12, "maxY": 2605.904761904762, "series": [{"data": [[1.60238304E12, 2605.904761904762], [1.60238382E12, 1758.4246913580241], [1.6023834E12, 1898.718832891247], [1.6023831E12, 1905.7002652519893], [1.60238376E12, 1938.1152815013404], [1.60238346E12, 2368.935810810813], [1.60238316E12, 1832.5064267352177], [1.6023837E12, 1924.9278074866322], [1.60238322E12, 2159.56586826347], [1.60238364E12, 1782.0778894472357], [1.60238328E12, 1749.1605839416059], [1.60238358E12, 2129.566371681414], [1.60238388E12, 2441.6801619433213], [1.60238334E12, 2112.489795918369], [1.60238352E12, 2189.69526627219]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60238388E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 1747.1630170316316, "minX": 1.60238304E12, "maxY": 2602.9735449735444, "series": [{"data": [[1.60238304E12, 2602.9735449735444], [1.60238382E12, 1757.0740740740741], [1.6023834E12, 1896.7692307692294], [1.6023831E12, 1903.8938992042438], [1.60238376E12, 1936.6487935656837], [1.60238346E12, 2366.4729729729725], [1.60238316E12, 1831.1799485861184], [1.6023837E12, 1923.1711229946532], [1.60238322E12, 2156.868263473055], [1.60238364E12, 1780.7135678391971], [1.60238328E12, 1747.1630170316316], [1.60238358E12, 2128.0648967551624], [1.60238388E12, 2439.9595141700393], [1.60238334E12, 2110.4139941690946], [1.60238352E12, 2187.8639053254465]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60238388E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.029197080291970764, "minX": 1.60238304E12, "maxY": 0.7460317460317467, "series": [{"data": [[1.60238304E12, 0.7460317460317467], [1.60238382E12, 0.03209876543209875], [1.6023834E12, 0.0371352785145889], [1.6023831E12, 0.0371352785145889], [1.60238376E12, 0.03485254691689007], [1.60238346E12, 0.04391891891891893], [1.60238316E12, 0.04627249357326478], [1.6023837E12, 0.037433155080213935], [1.60238322E12, 0.03892215568862278], [1.60238364E12, 0.03517587939698495], [1.60238328E12, 0.029197080291970764], [1.60238358E12, 0.032448377581120964], [1.60238388E12, 0.05668016194331988], [1.60238334E12, 0.04081632653061229], [1.60238352E12, 0.047337278106508826]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60238388E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 558.0, "minX": 1.60238304E12, "maxY": 9509.0, "series": [{"data": [[1.60238304E12, 9509.0], [1.60238382E12, 4854.0], [1.6023834E12, 7255.0], [1.6023831E12, 6097.0], [1.60238376E12, 4338.0], [1.60238346E12, 6055.0], [1.60238316E12, 6118.0], [1.6023837E12, 4244.0], [1.60238322E12, 5720.0], [1.60238364E12, 4433.0], [1.60238328E12, 4678.0], [1.60238358E12, 5783.0], [1.60238388E12, 6007.0], [1.60238334E12, 4116.0], [1.60238352E12, 8115.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60238304E12, 796.4599988222122], [1.60238382E12, 773.0], [1.6023834E12, 627.6079996395111], [1.6023831E12, 754.2059997296333], [1.60238376E12, 732.731999821663], [1.60238346E12, 1115.0379995751382], [1.60238316E12, 747.5499995350838], [1.6023837E12, 792.4999996423721], [1.60238322E12, 1059.1799990415573], [1.60238364E12, 749.181999809742], [1.60238328E12, 743.7079999017716], [1.60238358E12, 870.0799985408783], [1.60238388E12, 1084.1199979305268], [1.60238334E12, 807.0], [1.60238352E12, 803.968998464346]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60238304E12, 800.9060004711151], [1.60238382E12, 773.0194000387191], [1.6023834E12, 628.9688001441956], [1.6023831E12, 755.2266001081466], [1.60238376E12, 733.4052000713349], [1.60238346E12, 1116.6418001699449], [1.60238316E12, 749.3050001859665], [1.6023837E12, 793.8500001430511], [1.60238322E12, 1062.798000383377], [1.60238364E12, 749.9002000761033], [1.60238328E12, 744.0788000392914], [1.60238358E12, 875.5880005836486], [1.60238388E12, 1091.9320008277894], [1.60238334E12, 807.0], [1.60238352E12, 809.7659006142617]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60238304E12, 798.9299994111061], [1.60238382E12, 773.0], [1.6023834E12, 628.3639998197556], [1.6023831E12, 754.7729998648167], [1.60238376E12, 733.1059999108314], [1.60238346E12, 1115.928999787569], [1.60238316E12, 748.5249997675419], [1.6023837E12, 793.2499998211861], [1.60238322E12, 1061.1899995207787], [1.60238364E12, 749.580999904871], [1.60238328E12, 743.9139999508858], [1.60238358E12, 873.1399992704391], [1.60238388E12, 1088.4599989652634], [1.60238334E12, 807.0], [1.60238352E12, 807.1894992321729]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60238304E12, 778.0], [1.60238382E12, 756.0], [1.6023834E12, 558.0], [1.6023831E12, 744.0], [1.60238376E12, 723.0], [1.60238346E12, 1108.0], [1.60238316E12, 734.0], [1.6023837E12, 780.0], [1.60238322E12, 997.0], [1.60238364E12, 738.0], [1.60238328E12, 729.0], [1.60238358E12, 859.0], [1.60238388E12, 1023.0], [1.60238334E12, 777.0], [1.60238352E12, 755.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60238304E12, 2358.0], [1.60238382E12, 1668.0], [1.6023834E12, 1787.0], [1.6023831E12, 1818.0], [1.60238376E12, 1922.0], [1.60238346E12, 2200.5], [1.60238316E12, 1623.0], [1.6023837E12, 1902.5], [1.60238322E12, 1960.5], [1.60238364E12, 1710.5], [1.60238328E12, 1676.0], [1.60238358E12, 1790.0], [1.60238388E12, 2333.0], [1.60238334E12, 2126.0], [1.60238352E12, 1911.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60238388E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 814.5, "minX": 1.0, "maxY": 3378.0, "series": [{"data": [[8.0, 1659.0], [2.0, 2905.0], [9.0, 1612.0], [10.0, 1448.5], [11.0, 1264.0], [3.0, 2637.0], [12.0, 996.0], [13.0, 884.0], [14.0, 862.0], [15.0, 844.0], [4.0, 2303.5], [1.0, 3378.0], [16.0, 814.5], [5.0, 2198.0], [6.0, 1982.0], [7.0, 1891.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 16.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 814.5, "minX": 1.0, "maxY": 3377.0, "series": [{"data": [[8.0, 1657.5], [2.0, 2900.5], [9.0, 1607.0], [10.0, 1448.5], [11.0, 1264.0], [3.0, 2635.0], [12.0, 996.0], [13.0, 884.0], [14.0, 862.0], [15.0, 844.0], [4.0, 2299.0], [1.0, 3377.0], [16.0, 814.5], [5.0, 2197.0], [6.0, 1980.0], [7.0, 1890.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 16.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 3.35, "minX": 1.60238304E12, "maxY": 6.85, "series": [{"data": [[1.60238304E12, 3.35], [1.60238382E12, 6.75], [1.6023834E12, 6.283333333333333], [1.6023831E12, 6.283333333333333], [1.60238376E12, 6.216666666666667], [1.60238346E12, 4.933333333333334], [1.60238316E12, 6.483333333333333], [1.6023837E12, 6.233333333333333], [1.60238322E12, 5.566666666666666], [1.60238364E12, 6.633333333333334], [1.60238328E12, 6.85], [1.60238358E12, 5.65], [1.60238388E12, 3.9166666666666665], [1.60238334E12, 5.716666666666667], [1.60238352E12, 5.633333333333334]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60238388E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 3.15, "minX": 1.60238304E12, "maxY": 6.85, "series": [{"data": [[1.60238304E12, 3.15], [1.60238382E12, 6.75], [1.6023834E12, 6.283333333333333], [1.6023831E12, 6.283333333333333], [1.60238376E12, 6.216666666666667], [1.60238346E12, 4.933333333333334], [1.60238316E12, 6.483333333333333], [1.6023837E12, 6.233333333333333], [1.60238322E12, 5.566666666666666], [1.60238364E12, 6.633333333333334], [1.60238328E12, 6.85], [1.60238358E12, 5.65], [1.60238388E12, 4.116666666666666], [1.60238334E12, 5.716666666666667], [1.60238352E12, 5.633333333333334]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60238388E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 3.15, "minX": 1.60238304E12, "maxY": 6.85, "series": [{"data": [[1.60238304E12, 3.15], [1.60238382E12, 6.75], [1.6023834E12, 6.283333333333333], [1.6023831E12, 6.283333333333333], [1.60238376E12, 6.216666666666667], [1.60238346E12, 4.933333333333334], [1.60238316E12, 6.483333333333333], [1.6023837E12, 6.233333333333333], [1.60238322E12, 5.566666666666666], [1.60238364E12, 6.633333333333334], [1.60238328E12, 6.85], [1.60238358E12, 5.65], [1.60238388E12, 4.116666666666666], [1.60238334E12, 5.716666666666667], [1.60238352E12, 5.633333333333334]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60238388E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 3.15, "minX": 1.60238304E12, "maxY": 6.85, "series": [{"data": [[1.60238304E12, 3.15], [1.60238382E12, 6.75], [1.6023834E12, 6.283333333333333], [1.6023831E12, 6.283333333333333], [1.60238376E12, 6.216666666666667], [1.60238346E12, 4.933333333333334], [1.60238316E12, 6.483333333333333], [1.6023837E12, 6.233333333333333], [1.60238322E12, 5.566666666666666], [1.60238364E12, 6.633333333333334], [1.60238328E12, 6.85], [1.60238358E12, 5.65], [1.60238388E12, 4.116666666666666], [1.60238334E12, 5.716666666666667], [1.60238352E12, 5.633333333333334]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60238388E12, "title": "Total Transactions Per Second"}},
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

