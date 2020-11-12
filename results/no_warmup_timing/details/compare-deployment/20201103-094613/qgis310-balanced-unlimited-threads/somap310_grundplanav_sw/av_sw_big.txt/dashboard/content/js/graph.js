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
        data: {"result": {"minY": 401.0, "minX": 0.0, "maxY": 10346.0, "series": [{"data": [[0.0, 401.0], [0.1, 757.0], [0.2, 770.0], [0.3, 777.0], [0.4, 782.0], [0.5, 788.0], [0.6, 792.0], [0.7, 795.0], [0.8, 796.0], [0.9, 801.0], [1.0, 803.0], [1.1, 804.0], [1.2, 806.0], [1.3, 807.0], [1.4, 810.0], [1.5, 811.0], [1.6, 815.0], [1.7, 819.0], [1.8, 822.0], [1.9, 823.0], [2.0, 825.0], [2.1, 827.0], [2.2, 829.0], [2.3, 831.0], [2.4, 833.0], [2.5, 836.0], [2.6, 837.0], [2.7, 842.0], [2.8, 844.0], [2.9, 845.0], [3.0, 847.0], [3.1, 848.0], [3.2, 850.0], [3.3, 852.0], [3.4, 854.0], [3.5, 856.0], [3.6, 857.0], [3.7, 859.0], [3.8, 860.0], [3.9, 862.0], [4.0, 865.0], [4.1, 865.0], [4.2, 867.0], [4.3, 869.0], [4.4, 869.0], [4.5, 872.0], [4.6, 873.0], [4.7, 876.0], [4.8, 878.0], [4.9, 880.0], [5.0, 882.0], [5.1, 884.0], [5.2, 886.0], [5.3, 888.0], [5.4, 890.0], [5.5, 891.0], [5.6, 893.0], [5.7, 895.0], [5.8, 897.0], [5.9, 898.0], [6.0, 900.0], [6.1, 900.0], [6.2, 902.0], [6.3, 906.0], [6.4, 908.0], [6.5, 909.0], [6.6, 910.0], [6.7, 912.0], [6.8, 913.0], [6.9, 916.0], [7.0, 917.0], [7.1, 920.0], [7.2, 921.0], [7.3, 922.0], [7.4, 924.0], [7.5, 926.0], [7.6, 928.0], [7.7, 929.0], [7.8, 930.0], [7.9, 932.0], [8.0, 933.0], [8.1, 935.0], [8.2, 936.0], [8.3, 938.0], [8.4, 940.0], [8.5, 941.0], [8.6, 941.0], [8.7, 944.0], [8.8, 945.0], [8.9, 947.0], [9.0, 949.0], [9.1, 952.0], [9.2, 953.0], [9.3, 955.0], [9.4, 956.0], [9.5, 957.0], [9.6, 958.0], [9.7, 959.0], [9.8, 961.0], [9.9, 963.0], [10.0, 965.0], [10.1, 966.0], [10.2, 968.0], [10.3, 970.0], [10.4, 973.0], [10.5, 974.0], [10.6, 976.0], [10.7, 978.0], [10.8, 979.0], [10.9, 983.0], [11.0, 985.0], [11.1, 989.0], [11.2, 992.0], [11.3, 996.0], [11.4, 1001.0], [11.5, 1002.0], [11.6, 1003.0], [11.7, 1007.0], [11.8, 1013.0], [11.9, 1014.0], [12.0, 1019.0], [12.1, 1024.0], [12.2, 1027.0], [12.3, 1029.0], [12.4, 1038.0], [12.5, 1040.0], [12.6, 1042.0], [12.7, 1045.0], [12.8, 1048.0], [12.9, 1050.0], [13.0, 1057.0], [13.1, 1061.0], [13.2, 1066.0], [13.3, 1069.0], [13.4, 1071.0], [13.5, 1076.0], [13.6, 1077.0], [13.7, 1083.0], [13.8, 1088.0], [13.9, 1090.0], [14.0, 1094.0], [14.1, 1100.0], [14.2, 1106.0], [14.3, 1107.0], [14.4, 1109.0], [14.5, 1117.0], [14.6, 1121.0], [14.7, 1124.0], [14.8, 1126.0], [14.9, 1128.0], [15.0, 1131.0], [15.1, 1134.0], [15.2, 1137.0], [15.3, 1141.0], [15.4, 1146.0], [15.5, 1149.0], [15.6, 1150.0], [15.7, 1152.0], [15.8, 1159.0], [15.9, 1163.0], [16.0, 1167.0], [16.1, 1171.0], [16.2, 1174.0], [16.3, 1177.0], [16.4, 1181.0], [16.5, 1183.0], [16.6, 1187.0], [16.7, 1189.0], [16.8, 1192.0], [16.9, 1195.0], [17.0, 1197.0], [17.1, 1199.0], [17.2, 1201.0], [17.3, 1202.0], [17.4, 1203.0], [17.5, 1205.0], [17.6, 1208.0], [17.7, 1211.0], [17.8, 1214.0], [17.9, 1216.0], [18.0, 1218.0], [18.1, 1220.0], [18.2, 1221.0], [18.3, 1222.0], [18.4, 1225.0], [18.5, 1227.0], [18.6, 1231.0], [18.7, 1233.0], [18.8, 1234.0], [18.9, 1236.0], [19.0, 1239.0], [19.1, 1240.0], [19.2, 1242.0], [19.3, 1245.0], [19.4, 1248.0], [19.5, 1255.0], [19.6, 1256.0], [19.7, 1259.0], [19.8, 1262.0], [19.9, 1264.0], [20.0, 1267.0], [20.1, 1268.0], [20.2, 1270.0], [20.3, 1272.0], [20.4, 1275.0], [20.5, 1276.0], [20.6, 1277.0], [20.7, 1281.0], [20.8, 1283.0], [20.9, 1285.0], [21.0, 1286.0], [21.1, 1289.0], [21.2, 1291.0], [21.3, 1293.0], [21.4, 1294.0], [21.5, 1297.0], [21.6, 1300.0], [21.7, 1302.0], [21.8, 1304.0], [21.9, 1308.0], [22.0, 1311.0], [22.1, 1314.0], [22.2, 1316.0], [22.3, 1318.0], [22.4, 1321.0], [22.5, 1325.0], [22.6, 1327.0], [22.7, 1330.0], [22.8, 1332.0], [22.9, 1334.0], [23.0, 1337.0], [23.1, 1339.0], [23.2, 1343.0], [23.3, 1346.0], [23.4, 1347.0], [23.5, 1350.0], [23.6, 1351.0], [23.7, 1353.0], [23.8, 1356.0], [23.9, 1360.0], [24.0, 1363.0], [24.1, 1365.0], [24.2, 1368.0], [24.3, 1371.0], [24.4, 1372.0], [24.5, 1375.0], [24.6, 1378.0], [24.7, 1380.0], [24.8, 1382.0], [24.9, 1385.0], [25.0, 1389.0], [25.1, 1391.0], [25.2, 1392.0], [25.3, 1394.0], [25.4, 1398.0], [25.5, 1399.0], [25.6, 1403.0], [25.7, 1406.0], [25.8, 1409.0], [25.9, 1410.0], [26.0, 1414.0], [26.1, 1417.0], [26.2, 1418.0], [26.3, 1422.0], [26.4, 1424.0], [26.5, 1426.0], [26.6, 1427.0], [26.7, 1430.0], [26.8, 1431.0], [26.9, 1433.0], [27.0, 1436.0], [27.1, 1439.0], [27.2, 1440.0], [27.3, 1441.0], [27.4, 1445.0], [27.5, 1451.0], [27.6, 1455.0], [27.7, 1456.0], [27.8, 1458.0], [27.9, 1463.0], [28.0, 1467.0], [28.1, 1470.0], [28.2, 1473.0], [28.3, 1478.0], [28.4, 1481.0], [28.5, 1482.0], [28.6, 1485.0], [28.7, 1487.0], [28.8, 1491.0], [28.9, 1494.0], [29.0, 1495.0], [29.1, 1497.0], [29.2, 1499.0], [29.3, 1501.0], [29.4, 1504.0], [29.5, 1506.0], [29.6, 1509.0], [29.7, 1512.0], [29.8, 1514.0], [29.9, 1515.0], [30.0, 1516.0], [30.1, 1518.0], [30.2, 1520.0], [30.3, 1524.0], [30.4, 1527.0], [30.5, 1532.0], [30.6, 1534.0], [30.7, 1536.0], [30.8, 1538.0], [30.9, 1541.0], [31.0, 1544.0], [31.1, 1546.0], [31.2, 1548.0], [31.3, 1551.0], [31.4, 1552.0], [31.5, 1555.0], [31.6, 1557.0], [31.7, 1560.0], [31.8, 1562.0], [31.9, 1563.0], [32.0, 1565.0], [32.1, 1566.0], [32.2, 1568.0], [32.3, 1571.0], [32.4, 1573.0], [32.5, 1575.0], [32.6, 1579.0], [32.7, 1580.0], [32.8, 1584.0], [32.9, 1587.0], [33.0, 1592.0], [33.1, 1596.0], [33.2, 1599.0], [33.3, 1600.0], [33.4, 1603.0], [33.5, 1604.0], [33.6, 1608.0], [33.7, 1611.0], [33.8, 1614.0], [33.9, 1617.0], [34.0, 1618.0], [34.1, 1620.0], [34.2, 1622.0], [34.3, 1625.0], [34.4, 1628.0], [34.5, 1629.0], [34.6, 1631.0], [34.7, 1633.0], [34.8, 1636.0], [34.9, 1638.0], [35.0, 1640.0], [35.1, 1642.0], [35.2, 1644.0], [35.3, 1646.0], [35.4, 1649.0], [35.5, 1653.0], [35.6, 1654.0], [35.7, 1655.0], [35.8, 1658.0], [35.9, 1661.0], [36.0, 1662.0], [36.1, 1664.0], [36.2, 1667.0], [36.3, 1668.0], [36.4, 1669.0], [36.5, 1672.0], [36.6, 1675.0], [36.7, 1677.0], [36.8, 1680.0], [36.9, 1684.0], [37.0, 1685.0], [37.1, 1688.0], [37.2, 1690.0], [37.3, 1692.0], [37.4, 1695.0], [37.5, 1696.0], [37.6, 1698.0], [37.7, 1699.0], [37.8, 1702.0], [37.9, 1705.0], [38.0, 1708.0], [38.1, 1711.0], [38.2, 1712.0], [38.3, 1715.0], [38.4, 1717.0], [38.5, 1719.0], [38.6, 1721.0], [38.7, 1723.0], [38.8, 1727.0], [38.9, 1729.0], [39.0, 1730.0], [39.1, 1731.0], [39.2, 1733.0], [39.3, 1736.0], [39.4, 1737.0], [39.5, 1740.0], [39.6, 1741.0], [39.7, 1743.0], [39.8, 1745.0], [39.9, 1748.0], [40.0, 1751.0], [40.1, 1753.0], [40.2, 1757.0], [40.3, 1758.0], [40.4, 1760.0], [40.5, 1762.0], [40.6, 1762.0], [40.7, 1763.0], [40.8, 1765.0], [40.9, 1765.0], [41.0, 1768.0], [41.1, 1770.0], [41.2, 1771.0], [41.3, 1772.0], [41.4, 1773.0], [41.5, 1774.0], [41.6, 1775.0], [41.7, 1776.0], [41.8, 1778.0], [41.9, 1779.0], [42.0, 1780.0], [42.1, 1782.0], [42.2, 1784.0], [42.3, 1785.0], [42.4, 1787.0], [42.5, 1788.0], [42.6, 1789.0], [42.7, 1790.0], [42.8, 1793.0], [42.9, 1795.0], [43.0, 1798.0], [43.1, 1800.0], [43.2, 1800.0], [43.3, 1803.0], [43.4, 1804.0], [43.5, 1806.0], [43.6, 1808.0], [43.7, 1810.0], [43.8, 1812.0], [43.9, 1814.0], [44.0, 1815.0], [44.1, 1816.0], [44.2, 1818.0], [44.3, 1820.0], [44.4, 1822.0], [44.5, 1825.0], [44.6, 1826.0], [44.7, 1828.0], [44.8, 1829.0], [44.9, 1830.0], [45.0, 1833.0], [45.1, 1835.0], [45.2, 1838.0], [45.3, 1841.0], [45.4, 1843.0], [45.5, 1845.0], [45.6, 1849.0], [45.7, 1851.0], [45.8, 1854.0], [45.9, 1856.0], [46.0, 1857.0], [46.1, 1860.0], [46.2, 1863.0], [46.3, 1865.0], [46.4, 1867.0], [46.5, 1868.0], [46.6, 1870.0], [46.7, 1874.0], [46.8, 1874.0], [46.9, 1875.0], [47.0, 1879.0], [47.1, 1880.0], [47.2, 1883.0], [47.3, 1884.0], [47.4, 1887.0], [47.5, 1889.0], [47.6, 1890.0], [47.7, 1892.0], [47.8, 1894.0], [47.9, 1897.0], [48.0, 1899.0], [48.1, 1902.0], [48.2, 1904.0], [48.3, 1906.0], [48.4, 1907.0], [48.5, 1908.0], [48.6, 1910.0], [48.7, 1913.0], [48.8, 1914.0], [48.9, 1918.0], [49.0, 1920.0], [49.1, 1920.0], [49.2, 1922.0], [49.3, 1924.0], [49.4, 1926.0], [49.5, 1928.0], [49.6, 1929.0], [49.7, 1930.0], [49.8, 1932.0], [49.9, 1933.0], [50.0, 1934.0], [50.1, 1936.0], [50.2, 1937.0], [50.3, 1939.0], [50.4, 1940.0], [50.5, 1942.0], [50.6, 1943.0], [50.7, 1943.0], [50.8, 1945.0], [50.9, 1945.0], [51.0, 1947.0], [51.1, 1950.0], [51.2, 1952.0], [51.3, 1953.0], [51.4, 1955.0], [51.5, 1956.0], [51.6, 1958.0], [51.7, 1960.0], [51.8, 1963.0], [51.9, 1964.0], [52.0, 1966.0], [52.1, 1967.0], [52.2, 1969.0], [52.3, 1970.0], [52.4, 1972.0], [52.5, 1974.0], [52.6, 1974.0], [52.7, 1977.0], [52.8, 1978.0], [52.9, 1979.0], [53.0, 1980.0], [53.1, 1981.0], [53.2, 1983.0], [53.3, 1985.0], [53.4, 1986.0], [53.5, 1988.0], [53.6, 1990.0], [53.7, 1991.0], [53.8, 1992.0], [53.9, 1995.0], [54.0, 1997.0], [54.1, 1999.0], [54.2, 2000.0], [54.3, 2002.0], [54.4, 2004.0], [54.5, 2007.0], [54.6, 2008.0], [54.7, 2010.0], [54.8, 2012.0], [54.9, 2013.0], [55.0, 2013.0], [55.1, 2015.0], [55.2, 2015.0], [55.3, 2018.0], [55.4, 2021.0], [55.5, 2022.0], [55.6, 2024.0], [55.7, 2025.0], [55.8, 2026.0], [55.9, 2027.0], [56.0, 2029.0], [56.1, 2030.0], [56.2, 2032.0], [56.3, 2033.0], [56.4, 2035.0], [56.5, 2038.0], [56.6, 2040.0], [56.7, 2042.0], [56.8, 2044.0], [56.9, 2047.0], [57.0, 2048.0], [57.1, 2050.0], [57.2, 2051.0], [57.3, 2053.0], [57.4, 2055.0], [57.5, 2057.0], [57.6, 2060.0], [57.7, 2061.0], [57.8, 2064.0], [57.9, 2066.0], [58.0, 2071.0], [58.1, 2072.0], [58.2, 2074.0], [58.3, 2077.0], [58.4, 2078.0], [58.5, 2081.0], [58.6, 2083.0], [58.7, 2084.0], [58.8, 2087.0], [58.9, 2089.0], [59.0, 2091.0], [59.1, 2092.0], [59.2, 2095.0], [59.3, 2096.0], [59.4, 2098.0], [59.5, 2100.0], [59.6, 2101.0], [59.7, 2104.0], [59.8, 2105.0], [59.9, 2109.0], [60.0, 2111.0], [60.1, 2113.0], [60.2, 2115.0], [60.3, 2118.0], [60.4, 2119.0], [60.5, 2120.0], [60.6, 2122.0], [60.7, 2125.0], [60.8, 2127.0], [60.9, 2128.0], [61.0, 2130.0], [61.1, 2134.0], [61.2, 2134.0], [61.3, 2135.0], [61.4, 2136.0], [61.5, 2141.0], [61.6, 2144.0], [61.7, 2147.0], [61.8, 2149.0], [61.9, 2152.0], [62.0, 2154.0], [62.1, 2156.0], [62.2, 2157.0], [62.3, 2159.0], [62.4, 2166.0], [62.5, 2169.0], [62.6, 2171.0], [62.7, 2174.0], [62.8, 2180.0], [62.9, 2183.0], [63.0, 2185.0], [63.1, 2187.0], [63.2, 2190.0], [63.3, 2194.0], [63.4, 2197.0], [63.5, 2201.0], [63.6, 2203.0], [63.7, 2204.0], [63.8, 2206.0], [63.9, 2209.0], [64.0, 2212.0], [64.1, 2213.0], [64.2, 2214.0], [64.3, 2218.0], [64.4, 2221.0], [64.5, 2223.0], [64.6, 2226.0], [64.7, 2229.0], [64.8, 2233.0], [64.9, 2235.0], [65.0, 2236.0], [65.1, 2239.0], [65.2, 2241.0], [65.3, 2243.0], [65.4, 2244.0], [65.5, 2246.0], [65.6, 2248.0], [65.7, 2250.0], [65.8, 2255.0], [65.9, 2258.0], [66.0, 2261.0], [66.1, 2264.0], [66.2, 2266.0], [66.3, 2268.0], [66.4, 2269.0], [66.5, 2272.0], [66.6, 2275.0], [66.7, 2279.0], [66.8, 2280.0], [66.9, 2281.0], [67.0, 2284.0], [67.1, 2289.0], [67.2, 2292.0], [67.3, 2295.0], [67.4, 2300.0], [67.5, 2302.0], [67.6, 2305.0], [67.7, 2306.0], [67.8, 2307.0], [67.9, 2313.0], [68.0, 2317.0], [68.1, 2323.0], [68.2, 2326.0], [68.3, 2329.0], [68.4, 2330.0], [68.5, 2335.0], [68.6, 2337.0], [68.7, 2339.0], [68.8, 2345.0], [68.9, 2348.0], [69.0, 2350.0], [69.1, 2351.0], [69.2, 2355.0], [69.3, 2356.0], [69.4, 2360.0], [69.5, 2362.0], [69.6, 2365.0], [69.7, 2369.0], [69.8, 2372.0], [69.9, 2373.0], [70.0, 2376.0], [70.1, 2378.0], [70.2, 2380.0], [70.3, 2385.0], [70.4, 2385.0], [70.5, 2388.0], [70.6, 2390.0], [70.7, 2396.0], [70.8, 2398.0], [70.9, 2400.0], [71.0, 2403.0], [71.1, 2407.0], [71.2, 2409.0], [71.3, 2412.0], [71.4, 2415.0], [71.5, 2419.0], [71.6, 2421.0], [71.7, 2425.0], [71.8, 2426.0], [71.9, 2428.0], [72.0, 2432.0], [72.1, 2433.0], [72.2, 2437.0], [72.3, 2440.0], [72.4, 2441.0], [72.5, 2443.0], [72.6, 2446.0], [72.7, 2451.0], [72.8, 2458.0], [72.9, 2460.0], [73.0, 2461.0], [73.1, 2466.0], [73.2, 2468.0], [73.3, 2470.0], [73.4, 2471.0], [73.5, 2473.0], [73.6, 2480.0], [73.7, 2484.0], [73.8, 2485.0], [73.9, 2487.0], [74.0, 2489.0], [74.1, 2492.0], [74.2, 2495.0], [74.3, 2497.0], [74.4, 2501.0], [74.5, 2505.0], [74.6, 2507.0], [74.7, 2511.0], [74.8, 2516.0], [74.9, 2524.0], [75.0, 2528.0], [75.1, 2531.0], [75.2, 2534.0], [75.3, 2539.0], [75.4, 2542.0], [75.5, 2542.0], [75.6, 2546.0], [75.7, 2549.0], [75.8, 2552.0], [75.9, 2555.0], [76.0, 2559.0], [76.1, 2562.0], [76.2, 2567.0], [76.3, 2570.0], [76.4, 2573.0], [76.5, 2577.0], [76.6, 2582.0], [76.7, 2585.0], [76.8, 2588.0], [76.9, 2594.0], [77.0, 2598.0], [77.1, 2601.0], [77.2, 2606.0], [77.3, 2610.0], [77.4, 2616.0], [77.5, 2620.0], [77.6, 2624.0], [77.7, 2626.0], [77.8, 2634.0], [77.9, 2637.0], [78.0, 2643.0], [78.1, 2645.0], [78.2, 2650.0], [78.3, 2653.0], [78.4, 2657.0], [78.5, 2663.0], [78.6, 2665.0], [78.7, 2669.0], [78.8, 2671.0], [78.9, 2673.0], [79.0, 2676.0], [79.1, 2681.0], [79.2, 2685.0], [79.3, 2688.0], [79.4, 2693.0], [79.5, 2699.0], [79.6, 2701.0], [79.7, 2703.0], [79.8, 2710.0], [79.9, 2714.0], [80.0, 2717.0], [80.1, 2722.0], [80.2, 2723.0], [80.3, 2726.0], [80.4, 2732.0], [80.5, 2737.0], [80.6, 2738.0], [80.7, 2740.0], [80.8, 2745.0], [80.9, 2748.0], [81.0, 2750.0], [81.1, 2754.0], [81.2, 2756.0], [81.3, 2759.0], [81.4, 2761.0], [81.5, 2766.0], [81.6, 2769.0], [81.7, 2770.0], [81.8, 2773.0], [81.9, 2776.0], [82.0, 2779.0], [82.1, 2782.0], [82.2, 2785.0], [82.3, 2791.0], [82.4, 2793.0], [82.5, 2795.0], [82.6, 2799.0], [82.7, 2806.0], [82.8, 2808.0], [82.9, 2811.0], [83.0, 2814.0], [83.1, 2816.0], [83.2, 2818.0], [83.3, 2820.0], [83.4, 2823.0], [83.5, 2830.0], [83.6, 2836.0], [83.7, 2843.0], [83.8, 2848.0], [83.9, 2856.0], [84.0, 2859.0], [84.1, 2863.0], [84.2, 2866.0], [84.3, 2880.0], [84.4, 2883.0], [84.5, 2887.0], [84.6, 2893.0], [84.7, 2898.0], [84.8, 2906.0], [84.9, 2909.0], [85.0, 2912.0], [85.1, 2921.0], [85.2, 2923.0], [85.3, 2927.0], [85.4, 2930.0], [85.5, 2932.0], [85.6, 2940.0], [85.7, 2944.0], [85.8, 2950.0], [85.9, 2957.0], [86.0, 2964.0], [86.1, 2967.0], [86.2, 2973.0], [86.3, 2978.0], [86.4, 2982.0], [86.5, 2992.0], [86.6, 2998.0], [86.7, 3004.0], [86.8, 3008.0], [86.9, 3010.0], [87.0, 3015.0], [87.1, 3020.0], [87.2, 3024.0], [87.3, 3030.0], [87.4, 3041.0], [87.5, 3046.0], [87.6, 3055.0], [87.7, 3062.0], [87.8, 3070.0], [87.9, 3073.0], [88.0, 3079.0], [88.1, 3081.0], [88.2, 3088.0], [88.3, 3095.0], [88.4, 3100.0], [88.5, 3106.0], [88.6, 3108.0], [88.7, 3118.0], [88.8, 3123.0], [88.9, 3126.0], [89.0, 3135.0], [89.1, 3137.0], [89.2, 3148.0], [89.3, 3159.0], [89.4, 3163.0], [89.5, 3175.0], [89.6, 3182.0], [89.7, 3191.0], [89.8, 3198.0], [89.9, 3209.0], [90.0, 3213.0], [90.1, 3223.0], [90.2, 3227.0], [90.3, 3238.0], [90.4, 3248.0], [90.5, 3254.0], [90.6, 3264.0], [90.7, 3273.0], [90.8, 3279.0], [90.9, 3286.0], [91.0, 3289.0], [91.1, 3300.0], [91.2, 3308.0], [91.3, 3314.0], [91.4, 3322.0], [91.5, 3326.0], [91.6, 3331.0], [91.7, 3337.0], [91.8, 3350.0], [91.9, 3357.0], [92.0, 3366.0], [92.1, 3377.0], [92.2, 3393.0], [92.3, 3400.0], [92.4, 3416.0], [92.5, 3438.0], [92.6, 3448.0], [92.7, 3460.0], [92.8, 3472.0], [92.9, 3490.0], [93.0, 3499.0], [93.1, 3513.0], [93.2, 3523.0], [93.3, 3530.0], [93.4, 3536.0], [93.5, 3546.0], [93.6, 3551.0], [93.7, 3567.0], [93.8, 3569.0], [93.9, 3579.0], [94.0, 3586.0], [94.1, 3593.0], [94.2, 3603.0], [94.3, 3616.0], [94.4, 3624.0], [94.5, 3635.0], [94.6, 3654.0], [94.7, 3673.0], [94.8, 3687.0], [94.9, 3702.0], [95.0, 3707.0], [95.1, 3722.0], [95.2, 3725.0], [95.3, 3741.0], [95.4, 3760.0], [95.5, 3777.0], [95.6, 3786.0], [95.7, 3800.0], [95.8, 3819.0], [95.9, 3839.0], [96.0, 3871.0], [96.1, 3882.0], [96.2, 3925.0], [96.3, 3953.0], [96.4, 3987.0], [96.5, 4012.0], [96.6, 4043.0], [96.7, 4063.0], [96.8, 4093.0], [96.9, 4116.0], [97.0, 4136.0], [97.1, 4160.0], [97.2, 4183.0], [97.3, 4218.0], [97.4, 4249.0], [97.5, 4297.0], [97.6, 4333.0], [97.7, 4347.0], [97.8, 4368.0], [97.9, 4411.0], [98.0, 4430.0], [98.1, 4488.0], [98.2, 4593.0], [98.3, 4659.0], [98.4, 4705.0], [98.5, 4788.0], [98.6, 4837.0], [98.7, 4933.0], [98.8, 5120.0], [98.9, 5220.0], [99.0, 5312.0], [99.1, 5502.0], [99.2, 5587.0], [99.3, 5720.0], [99.4, 5868.0], [99.5, 6324.0], [99.6, 6544.0], [99.7, 6787.0], [99.8, 7281.0], [99.9, 8156.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 400.0, "maxY": 318.0, "series": [{"data": [[700.0, 44.0], [800.0, 266.0], [900.0, 280.0], [1000.0, 139.0], [1100.0, 160.0], [1200.0, 231.0], [1300.0, 203.0], [1400.0, 194.0], [1500.0, 208.0], [1600.0, 231.0], [1700.0, 279.0], [1800.0, 256.0], [1900.0, 318.0], [2000.0, 276.0], [2100.0, 209.0], [2300.0, 179.0], [2200.0, 203.0], [2400.0, 181.0], [2500.0, 141.0], [2600.0, 128.0], [2800.0, 111.0], [2700.0, 160.0], [2900.0, 98.0], [3000.0, 90.0], [3100.0, 78.0], [3200.0, 64.0], [3300.0, 61.0], [3400.0, 39.0], [3500.0, 60.0], [3700.0, 41.0], [3600.0, 37.0], [3800.0, 23.0], [3900.0, 16.0], [4000.0, 19.0], [4100.0, 22.0], [4200.0, 15.0], [4300.0, 20.0], [4400.0, 11.0], [4600.0, 9.0], [4500.0, 5.0], [4800.0, 8.0], [4700.0, 7.0], [5100.0, 5.0], [4900.0, 2.0], [5000.0, 4.0], [5300.0, 4.0], [5200.0, 5.0], [5600.0, 2.0], [5400.0, 2.0], [5500.0, 6.0], [5700.0, 5.0], [5800.0, 3.0], [6000.0, 4.0], [6100.0, 1.0], [6300.0, 2.0], [6500.0, 3.0], [6600.0, 1.0], [6400.0, 3.0], [6700.0, 2.0], [6800.0, 1.0], [6900.0, 1.0], [7400.0, 1.0], [7200.0, 4.0], [7600.0, 2.0], [8100.0, 1.0], [8500.0, 1.0], [8200.0, 2.0], [10000.0, 1.0], [10300.0, 1.0], [400.0, 1.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 10300.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 3670.0, "series": [{"data": [[0.0, 1.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1519.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 3670.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 11.613095238095237, "minX": 1.60440348E12, "maxY": 12.0, "series": [{"data": [[1.6044036E12, 12.0], [1.60440426E12, 12.0], [1.60440396E12, 12.0], [1.60440366E12, 12.0], [1.60440384E12, 12.0], [1.60440354E12, 12.0], [1.6044042E12, 12.0], [1.6044039E12, 12.0], [1.60440408E12, 12.0], [1.60440378E12, 12.0], [1.60440348E12, 11.945054945054945], [1.60440414E12, 12.0], [1.60440432E12, 12.0], [1.60440402E12, 12.0], [1.60440372E12, 12.0], [1.60440438E12, 11.613095238095237]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60440438E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 401.0, "minX": 1.0, "maxY": 4012.0, "series": [{"data": [[8.0, 2486.5], [4.0, 1828.0], [2.0, 4012.0], [1.0, 3892.0], [9.0, 1918.0], [10.0, 2333.0], [5.0, 1772.0], [11.0, 1816.0], [12.0, 2063.5928930088817], [6.0, 1995.0], [3.0, 1786.0], [7.0, 401.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[11.986512524084821, 2063.9710982659085]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 12.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 693.8, "minX": 1.60440348E12, "maxY": 1960515.9, "series": [{"data": [[1.6044036E12, 1435877.2333333334], [1.60440426E12, 1625156.8833333333], [1.60440396E12, 1702220.7666666666], [1.60440366E12, 1426085.0333333334], [1.60440384E12, 1772086.45], [1.60440354E12, 1601076.9], [1.6044042E12, 1717809.65], [1.6044039E12, 1409274.65], [1.60440408E12, 1092239.5], [1.60440378E12, 1833924.1666666667], [1.60440348E12, 595460.4166666666], [1.60440414E12, 1930563.4333333333], [1.60440432E12, 1488659.3666666667], [1.60440402E12, 1610103.8], [1.60440372E12, 1960515.9], [1.60440438E12, 771408.7333333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6044036E12, 2446.95], [1.60440426E12, 2601.2166666666667], [1.60440396E12, 2219.75], [1.60440366E12, 3014.7166666666667], [1.60440384E12, 2887.866666666667], [1.60440354E12, 2264.366666666667], [1.6044042E12, 3036.15], [1.6044039E12, 2314.1833333333334], [1.60440408E12, 2688.3], [1.60440378E12, 2537.5833333333335], [1.60440348E12, 693.8], [1.60440414E12, 2370.9], [1.60440432E12, 2846.483333333333], [1.60440402E12, 2582.65], [1.60440372E12, 2810.133333333333], [1.60440438E12, 1262.2833333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60440438E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 1751.9755501222494, "minX": 1.60440348E12, "maxY": 2557.8154761904743, "series": [{"data": [[1.6044036E12, 2135.191044776118], [1.60440426E12, 2131.2991202346043], [1.60440396E12, 2360.491803278688], [1.60440366E12, 1751.9755501222494], [1.60440384E12, 1903.8815789473688], [1.60440354E12, 2258.521739130434], [1.6044042E12, 1797.0972568578543], [1.6044039E12, 2308.363636363636], [1.60440408E12, 1945.2404371584737], [1.60440378E12, 2146.9104477611927], [1.60440348E12, 2389.23076923077], [1.60440414E12, 2218.97213622291], [1.60440432E12, 1871.9442970822288], [1.60440402E12, 2021.6843575419], [1.60440372E12, 1958.4609164420476], [1.60440438E12, 2557.8154761904743]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60440438E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 1750.5525672371605, "minX": 1.60440348E12, "maxY": 2556.1726190476184, "series": [{"data": [[1.6044036E12, 2133.301492537315], [1.60440426E12, 2129.6744868035184], [1.60440396E12, 2358.377049180329], [1.60440366E12, 1750.5525672371605], [1.60440384E12, 1901.9368421052632], [1.60440354E12, 2256.3385093167713], [1.6044042E12, 1795.6683291770564], [1.6044039E12, 2306.4155844155853], [1.60440408E12, 1944.1967213114754], [1.60440378E12, 2144.61791044776], [1.60440348E12, 2386.5054945054944], [1.60440414E12, 2216.969040247679], [1.60440432E12, 1870.5305039787795], [1.60440402E12, 2020.0223463687178], [1.60440372E12, 1956.2183288409706], [1.60440438E12, 2556.1726190476184]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60440438E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.01591511936339523, "minX": 1.60440348E12, "maxY": 1.3516483516483506, "series": [{"data": [[1.6044036E12, 0.05074626865671642], [1.60440426E12, 0.03519061583577712], [1.60440396E12, 0.039344262295081964], [1.60440366E12, 0.04889975550122247], [1.60440384E12, 0.03157894736842104], [1.60440354E12, 0.046583850931677016], [1.6044042E12, 0.029925187032418955], [1.6044039E12, 0.0487012987012987], [1.60440408E12, 0.03278688524590164], [1.60440378E12, 0.03880597014925375], [1.60440348E12, 1.3516483516483506], [1.60440414E12, 0.030959752321981417], [1.60440432E12, 0.01591511936339523], [1.60440402E12, 0.030726256983240233], [1.60440372E12, 0.035040431266846354], [1.60440438E12, 0.0535714285714286]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60440438E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 401.0, "minX": 1.60440348E12, "maxY": 10346.0, "series": [{"data": [[1.6044036E12, 5857.0], [1.60440426E12, 5052.0], [1.60440396E12, 10346.0], [1.60440366E12, 6403.0], [1.60440384E12, 6086.0], [1.60440354E12, 7655.0], [1.6044042E12, 4057.0], [1.6044039E12, 6985.0], [1.60440408E12, 5712.0], [1.60440378E12, 4668.0], [1.60440348E12, 4808.0], [1.60440414E12, 4423.0], [1.60440432E12, 5587.0], [1.60440402E12, 8503.0], [1.60440372E12, 4469.0], [1.60440438E12, 6061.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6044036E12, 1042.0479998397827], [1.60440426E12, 918.6239993476868], [1.60440396E12, 861.5879983949661], [1.60440366E12, 796.6899999022484], [1.60440384E12, 768.5739994549751], [1.60440354E12, 831.4419995379448], [1.6044042E12, 788.2359998083115], [1.6044039E12, 837.4299977898597], [1.60440408E12, 780.6059998250007], [1.60440378E12, 757.7199975967408], [1.60440348E12, 401.0], [1.60440414E12, 979.4399930477142], [1.60440432E12, 777.6079996395111], [1.60440402E12, 854.8659926390648], [1.60440372E12, 860.435999379158], [1.60440438E12, 1280.5039990329742]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6044036E12, 1042.652800064087], [1.60440426E12, 921.0864002609253], [1.60440396E12, 867.2646002626419], [1.60440366E12, 797.0], [1.60440384E12, 770.63140021801], [1.60440354E12, 835.1632004928589], [1.6044042E12, 788.9596000766754], [1.6044039E12, 844.2955001473426], [1.60440408E12, 781.2666000699996], [1.60440378E12, 766.7920009613038], [1.60440348E12, 401.0], [1.60440414E12, 1006.3068028736114], [1.60440432E12, 778.9688001441956], [1.60440402E12, 882.652602944374], [1.60440372E12, 862.7796002483368], [1.60440438E12, 1284.1544003868103]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6044036E12, 1042.3839999198913], [1.60440426E12, 919.9919996738433], [1.60440396E12, 864.9539991974831], [1.60440366E12, 796.8949999511242], [1.60440384E12, 769.7169997274875], [1.60440354E12, 833.0959993839264], [1.6044042E12, 788.6379999041558], [1.6044039E12, 842.0649988949299], [1.60440408E12, 780.9729999125004], [1.60440378E12, 762.7599987983704], [1.60440348E12, 401.0], [1.60440414E12, 994.2539964079857], [1.60440432E12, 778.3639998197556], [1.60440402E12, 870.3029963195323], [1.60440372E12, 861.737999689579], [1.60440438E12, 1282.531999516487]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.6044036E12, 1006.0], [1.60440426E12, 796.0], [1.60440396E12, 822.0], [1.60440366E12, 789.0], [1.60440384E12, 749.0], [1.60440354E12, 799.0], [1.6044042E12, 764.0], [1.6044039E12, 812.0], [1.60440408E12, 770.0], [1.60440378E12, 736.0], [1.60440348E12, 401.0], [1.60440414E12, 813.0], [1.60440432E12, 761.0], [1.60440402E12, 810.0], [1.60440372E12, 848.0], [1.60440438E12, 1268.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6044036E12, 1934.0], [1.60440426E12, 2078.0], [1.60440396E12, 2045.0], [1.60440366E12, 1486.0], [1.60440384E12, 1792.5], [1.60440354E12, 1943.0], [1.6044042E12, 1720.0], [1.6044039E12, 2157.0], [1.60440408E12, 1741.0], [1.60440378E12, 2095.0], [1.60440348E12, 2325.0], [1.60440414E12, 2070.0], [1.60440432E12, 1718.0], [1.60440402E12, 1812.0], [1.60440372E12, 1938.0], [1.60440438E12, 2444.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60440438E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 887.0, "minX": 1.0, "maxY": 3009.0, "series": [{"data": [[2.0, 2911.0], [8.0, 1816.0], [9.0, 1389.5], [10.0, 1290.0], [11.0, 962.5], [3.0, 2546.0], [12.0, 959.5], [13.0, 929.0], [14.0, 887.0], [15.0, 908.0], [1.0, 3009.0], [4.0, 2480.5], [5.0, 2222.0], [6.0, 2025.0], [7.0, 1942.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 15.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 887.0, "minX": 1.0, "maxY": 3002.0, "series": [{"data": [[2.0, 2907.5], [8.0, 1815.5], [9.0, 1389.0], [10.0, 1288.5], [11.0, 962.0], [3.0, 2543.0], [12.0, 959.0], [13.0, 929.0], [14.0, 887.0], [15.0, 908.0], [1.0, 3002.0], [4.0, 2478.0], [5.0, 2220.5], [6.0, 2024.0], [7.0, 1940.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 15.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1.7166666666666666, "minX": 1.60440348E12, "maxY": 6.816666666666666, "series": [{"data": [[1.6044036E12, 5.583333333333333], [1.60440426E12, 5.683333333333334], [1.60440396E12, 5.083333333333333], [1.60440366E12, 6.816666666666666], [1.60440384E12, 6.333333333333333], [1.60440354E12, 5.366666666666666], [1.6044042E12, 6.683333333333334], [1.6044039E12, 5.133333333333334], [1.60440408E12, 6.1], [1.60440378E12, 5.583333333333333], [1.60440348E12, 1.7166666666666666], [1.60440414E12, 5.383333333333334], [1.60440432E12, 6.283333333333333], [1.60440402E12, 5.966666666666667], [1.60440372E12, 6.183333333333334], [1.60440438E12, 2.6]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60440438E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1.5166666666666666, "minX": 1.60440348E12, "maxY": 6.816666666666666, "series": [{"data": [[1.6044036E12, 5.583333333333333], [1.60440426E12, 5.683333333333334], [1.60440396E12, 5.083333333333333], [1.60440366E12, 6.816666666666666], [1.60440384E12, 6.333333333333333], [1.60440354E12, 5.366666666666666], [1.6044042E12, 6.683333333333334], [1.6044039E12, 5.133333333333334], [1.60440408E12, 6.1], [1.60440378E12, 5.583333333333333], [1.60440348E12, 1.5166666666666666], [1.60440414E12, 5.383333333333334], [1.60440432E12, 6.283333333333333], [1.60440402E12, 5.966666666666667], [1.60440372E12, 6.183333333333334], [1.60440438E12, 2.8]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60440438E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.5166666666666666, "minX": 1.60440348E12, "maxY": 6.816666666666666, "series": [{"data": [[1.6044036E12, 5.583333333333333], [1.60440426E12, 5.683333333333334], [1.60440396E12, 5.083333333333333], [1.60440366E12, 6.816666666666666], [1.60440384E12, 6.333333333333333], [1.60440354E12, 5.366666666666666], [1.6044042E12, 6.683333333333334], [1.6044039E12, 5.133333333333334], [1.60440408E12, 6.1], [1.60440378E12, 5.583333333333333], [1.60440348E12, 1.5166666666666666], [1.60440414E12, 5.383333333333334], [1.60440432E12, 6.283333333333333], [1.60440402E12, 5.966666666666667], [1.60440372E12, 6.183333333333334], [1.60440438E12, 2.8]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60440438E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.5166666666666666, "minX": 1.60440348E12, "maxY": 6.816666666666666, "series": [{"data": [[1.6044036E12, 5.583333333333333], [1.60440426E12, 5.683333333333334], [1.60440396E12, 5.083333333333333], [1.60440366E12, 6.816666666666666], [1.60440384E12, 6.333333333333333], [1.60440354E12, 5.366666666666666], [1.6044042E12, 6.683333333333334], [1.6044039E12, 5.133333333333334], [1.60440408E12, 6.1], [1.60440378E12, 5.583333333333333], [1.60440348E12, 1.5166666666666666], [1.60440414E12, 5.383333333333334], [1.60440432E12, 6.283333333333333], [1.60440402E12, 5.966666666666667], [1.60440372E12, 6.183333333333334], [1.60440438E12, 2.8]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60440438E12, "title": "Total Transactions Per Second"}},
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

