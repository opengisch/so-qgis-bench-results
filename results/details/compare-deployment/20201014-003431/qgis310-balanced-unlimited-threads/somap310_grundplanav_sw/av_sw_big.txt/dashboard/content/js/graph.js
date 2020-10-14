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
        data: {"result": {"minY": 613.0, "minX": 0.0, "maxY": 10780.0, "series": [{"data": [[0.0, 613.0], [0.1, 673.0], [0.2, 726.0], [0.3, 736.0], [0.4, 742.0], [0.5, 748.0], [0.6, 751.0], [0.7, 754.0], [0.8, 755.0], [0.9, 757.0], [1.0, 758.0], [1.1, 760.0], [1.2, 762.0], [1.3, 764.0], [1.4, 766.0], [1.5, 770.0], [1.6, 773.0], [1.7, 775.0], [1.8, 778.0], [1.9, 782.0], [2.0, 784.0], [2.1, 787.0], [2.2, 790.0], [2.3, 792.0], [2.4, 793.0], [2.5, 795.0], [2.6, 797.0], [2.7, 800.0], [2.8, 802.0], [2.9, 805.0], [3.0, 807.0], [3.1, 808.0], [3.2, 810.0], [3.3, 813.0], [3.4, 815.0], [3.5, 816.0], [3.6, 818.0], [3.7, 819.0], [3.8, 820.0], [3.9, 821.0], [4.0, 822.0], [4.1, 824.0], [4.2, 825.0], [4.3, 828.0], [4.4, 828.0], [4.5, 830.0], [4.6, 831.0], [4.7, 832.0], [4.8, 833.0], [4.9, 834.0], [5.0, 835.0], [5.1, 836.0], [5.2, 837.0], [5.3, 837.0], [5.4, 839.0], [5.5, 840.0], [5.6, 841.0], [5.7, 843.0], [5.8, 844.0], [5.9, 845.0], [6.0, 846.0], [6.1, 848.0], [6.2, 849.0], [6.3, 849.0], [6.4, 851.0], [6.5, 852.0], [6.6, 853.0], [6.7, 854.0], [6.8, 855.0], [6.9, 856.0], [7.0, 857.0], [7.1, 858.0], [7.2, 859.0], [7.3, 860.0], [7.4, 863.0], [7.5, 864.0], [7.6, 865.0], [7.7, 866.0], [7.8, 868.0], [7.9, 870.0], [8.0, 871.0], [8.1, 873.0], [8.2, 874.0], [8.3, 877.0], [8.4, 879.0], [8.5, 880.0], [8.6, 882.0], [8.7, 884.0], [8.8, 885.0], [8.9, 889.0], [9.0, 890.0], [9.1, 891.0], [9.2, 892.0], [9.3, 894.0], [9.4, 895.0], [9.5, 898.0], [9.6, 899.0], [9.7, 902.0], [9.8, 904.0], [9.9, 908.0], [10.0, 912.0], [10.1, 915.0], [10.2, 920.0], [10.3, 921.0], [10.4, 922.0], [10.5, 925.0], [10.6, 929.0], [10.7, 933.0], [10.8, 935.0], [10.9, 937.0], [11.0, 941.0], [11.1, 944.0], [11.2, 947.0], [11.3, 950.0], [11.4, 955.0], [11.5, 958.0], [11.6, 964.0], [11.7, 967.0], [11.8, 971.0], [11.9, 975.0], [12.0, 979.0], [12.1, 982.0], [12.2, 984.0], [12.3, 989.0], [12.4, 994.0], [12.5, 996.0], [12.6, 999.0], [12.7, 1004.0], [12.8, 1010.0], [12.9, 1011.0], [13.0, 1017.0], [13.1, 1019.0], [13.2, 1025.0], [13.3, 1030.0], [13.4, 1034.0], [13.5, 1037.0], [13.6, 1043.0], [13.7, 1047.0], [13.8, 1049.0], [13.9, 1052.0], [14.0, 1054.0], [14.1, 1058.0], [14.2, 1059.0], [14.3, 1064.0], [14.4, 1071.0], [14.5, 1073.0], [14.6, 1077.0], [14.7, 1079.0], [14.8, 1083.0], [14.9, 1086.0], [15.0, 1087.0], [15.1, 1091.0], [15.2, 1094.0], [15.3, 1097.0], [15.4, 1102.0], [15.5, 1104.0], [15.6, 1108.0], [15.7, 1110.0], [15.8, 1113.0], [15.9, 1116.0], [16.0, 1118.0], [16.1, 1121.0], [16.2, 1122.0], [16.3, 1124.0], [16.4, 1128.0], [16.5, 1130.0], [16.6, 1131.0], [16.7, 1133.0], [16.8, 1136.0], [16.9, 1140.0], [17.0, 1143.0], [17.1, 1145.0], [17.2, 1147.0], [17.3, 1149.0], [17.4, 1151.0], [17.5, 1152.0], [17.6, 1153.0], [17.7, 1154.0], [17.8, 1156.0], [17.9, 1159.0], [18.0, 1160.0], [18.1, 1161.0], [18.2, 1162.0], [18.3, 1164.0], [18.4, 1167.0], [18.5, 1168.0], [18.6, 1169.0], [18.7, 1171.0], [18.8, 1175.0], [18.9, 1179.0], [19.0, 1182.0], [19.1, 1185.0], [19.2, 1187.0], [19.3, 1190.0], [19.4, 1194.0], [19.5, 1196.0], [19.6, 1197.0], [19.7, 1199.0], [19.8, 1199.0], [19.9, 1200.0], [20.0, 1202.0], [20.1, 1205.0], [20.2, 1206.0], [20.3, 1210.0], [20.4, 1213.0], [20.5, 1216.0], [20.6, 1217.0], [20.7, 1219.0], [20.8, 1220.0], [20.9, 1223.0], [21.0, 1226.0], [21.1, 1232.0], [21.2, 1234.0], [21.3, 1235.0], [21.4, 1237.0], [21.5, 1241.0], [21.6, 1243.0], [21.7, 1245.0], [21.8, 1247.0], [21.9, 1249.0], [22.0, 1250.0], [22.1, 1252.0], [22.2, 1256.0], [22.3, 1259.0], [22.4, 1262.0], [22.5, 1264.0], [22.6, 1266.0], [22.7, 1268.0], [22.8, 1270.0], [22.9, 1271.0], [23.0, 1272.0], [23.1, 1274.0], [23.2, 1277.0], [23.3, 1279.0], [23.4, 1282.0], [23.5, 1285.0], [23.6, 1287.0], [23.7, 1290.0], [23.8, 1292.0], [23.9, 1294.0], [24.0, 1296.0], [24.1, 1298.0], [24.2, 1300.0], [24.3, 1303.0], [24.4, 1304.0], [24.5, 1308.0], [24.6, 1309.0], [24.7, 1311.0], [24.8, 1315.0], [24.9, 1316.0], [25.0, 1321.0], [25.1, 1324.0], [25.2, 1324.0], [25.3, 1326.0], [25.4, 1329.0], [25.5, 1331.0], [25.6, 1334.0], [25.7, 1336.0], [25.8, 1341.0], [25.9, 1342.0], [26.0, 1346.0], [26.1, 1347.0], [26.2, 1349.0], [26.3, 1351.0], [26.4, 1354.0], [26.5, 1357.0], [26.6, 1360.0], [26.7, 1363.0], [26.8, 1370.0], [26.9, 1373.0], [27.0, 1375.0], [27.1, 1377.0], [27.2, 1380.0], [27.3, 1381.0], [27.4, 1382.0], [27.5, 1385.0], [27.6, 1390.0], [27.7, 1392.0], [27.8, 1395.0], [27.9, 1398.0], [28.0, 1400.0], [28.1, 1403.0], [28.2, 1405.0], [28.3, 1407.0], [28.4, 1410.0], [28.5, 1412.0], [28.6, 1414.0], [28.7, 1417.0], [28.8, 1419.0], [28.9, 1420.0], [29.0, 1423.0], [29.1, 1425.0], [29.2, 1427.0], [29.3, 1428.0], [29.4, 1430.0], [29.5, 1432.0], [29.6, 1433.0], [29.7, 1436.0], [29.8, 1437.0], [29.9, 1440.0], [30.0, 1442.0], [30.1, 1445.0], [30.2, 1447.0], [30.3, 1449.0], [30.4, 1451.0], [30.5, 1456.0], [30.6, 1457.0], [30.7, 1461.0], [30.8, 1462.0], [30.9, 1464.0], [31.0, 1467.0], [31.1, 1470.0], [31.2, 1472.0], [31.3, 1474.0], [31.4, 1474.0], [31.5, 1477.0], [31.6, 1483.0], [31.7, 1486.0], [31.8, 1488.0], [31.9, 1490.0], [32.0, 1493.0], [32.1, 1497.0], [32.2, 1500.0], [32.3, 1501.0], [32.4, 1503.0], [32.5, 1508.0], [32.6, 1509.0], [32.7, 1513.0], [32.8, 1517.0], [32.9, 1520.0], [33.0, 1524.0], [33.1, 1528.0], [33.2, 1532.0], [33.3, 1533.0], [33.4, 1535.0], [33.5, 1538.0], [33.6, 1540.0], [33.7, 1545.0], [33.8, 1548.0], [33.9, 1551.0], [34.0, 1553.0], [34.1, 1555.0], [34.2, 1560.0], [34.3, 1562.0], [34.4, 1564.0], [34.5, 1566.0], [34.6, 1568.0], [34.7, 1572.0], [34.8, 1573.0], [34.9, 1575.0], [35.0, 1575.0], [35.1, 1580.0], [35.2, 1581.0], [35.3, 1585.0], [35.4, 1587.0], [35.5, 1590.0], [35.6, 1592.0], [35.7, 1596.0], [35.8, 1598.0], [35.9, 1601.0], [36.0, 1604.0], [36.1, 1609.0], [36.2, 1610.0], [36.3, 1612.0], [36.4, 1613.0], [36.5, 1615.0], [36.6, 1617.0], [36.7, 1621.0], [36.8, 1623.0], [36.9, 1626.0], [37.0, 1630.0], [37.1, 1636.0], [37.2, 1639.0], [37.3, 1641.0], [37.4, 1644.0], [37.5, 1647.0], [37.6, 1649.0], [37.7, 1650.0], [37.8, 1653.0], [37.9, 1655.0], [38.0, 1659.0], [38.1, 1661.0], [38.2, 1663.0], [38.3, 1664.0], [38.4, 1665.0], [38.5, 1670.0], [38.6, 1674.0], [38.7, 1676.0], [38.8, 1678.0], [38.9, 1681.0], [39.0, 1684.0], [39.1, 1686.0], [39.2, 1687.0], [39.3, 1689.0], [39.4, 1689.0], [39.5, 1692.0], [39.6, 1694.0], [39.7, 1695.0], [39.8, 1697.0], [39.9, 1699.0], [40.0, 1703.0], [40.1, 1704.0], [40.2, 1705.0], [40.3, 1707.0], [40.4, 1710.0], [40.5, 1713.0], [40.6, 1714.0], [40.7, 1715.0], [40.8, 1717.0], [40.9, 1719.0], [41.0, 1722.0], [41.1, 1724.0], [41.2, 1726.0], [41.3, 1727.0], [41.4, 1730.0], [41.5, 1733.0], [41.6, 1734.0], [41.7, 1735.0], [41.8, 1737.0], [41.9, 1740.0], [42.0, 1741.0], [42.1, 1743.0], [42.2, 1745.0], [42.3, 1747.0], [42.4, 1748.0], [42.5, 1749.0], [42.6, 1750.0], [42.7, 1752.0], [42.8, 1753.0], [42.9, 1754.0], [43.0, 1756.0], [43.1, 1758.0], [43.2, 1759.0], [43.3, 1761.0], [43.4, 1764.0], [43.5, 1766.0], [43.6, 1768.0], [43.7, 1771.0], [43.8, 1773.0], [43.9, 1775.0], [44.0, 1776.0], [44.1, 1779.0], [44.2, 1779.0], [44.3, 1781.0], [44.4, 1782.0], [44.5, 1785.0], [44.6, 1787.0], [44.7, 1789.0], [44.8, 1790.0], [44.9, 1793.0], [45.0, 1796.0], [45.1, 1798.0], [45.2, 1798.0], [45.3, 1799.0], [45.4, 1801.0], [45.5, 1804.0], [45.6, 1806.0], [45.7, 1807.0], [45.8, 1808.0], [45.9, 1811.0], [46.0, 1812.0], [46.1, 1813.0], [46.2, 1815.0], [46.3, 1816.0], [46.4, 1818.0], [46.5, 1819.0], [46.6, 1820.0], [46.7, 1821.0], [46.8, 1824.0], [46.9, 1825.0], [47.0, 1827.0], [47.1, 1829.0], [47.2, 1831.0], [47.3, 1832.0], [47.4, 1834.0], [47.5, 1837.0], [47.6, 1838.0], [47.7, 1839.0], [47.8, 1840.0], [47.9, 1842.0], [48.0, 1843.0], [48.1, 1845.0], [48.2, 1847.0], [48.3, 1849.0], [48.4, 1851.0], [48.5, 1852.0], [48.6, 1856.0], [48.7, 1859.0], [48.8, 1860.0], [48.9, 1860.0], [49.0, 1862.0], [49.1, 1863.0], [49.2, 1864.0], [49.3, 1866.0], [49.4, 1868.0], [49.5, 1871.0], [49.6, 1872.0], [49.7, 1874.0], [49.8, 1877.0], [49.9, 1878.0], [50.0, 1879.0], [50.1, 1882.0], [50.2, 1883.0], [50.3, 1884.0], [50.4, 1887.0], [50.5, 1887.0], [50.6, 1889.0], [50.7, 1891.0], [50.8, 1892.0], [50.9, 1894.0], [51.0, 1897.0], [51.1, 1901.0], [51.2, 1902.0], [51.3, 1903.0], [51.4, 1905.0], [51.5, 1906.0], [51.6, 1908.0], [51.7, 1909.0], [51.8, 1911.0], [51.9, 1912.0], [52.0, 1913.0], [52.1, 1915.0], [52.2, 1916.0], [52.3, 1918.0], [52.4, 1919.0], [52.5, 1920.0], [52.6, 1922.0], [52.7, 1922.0], [52.8, 1924.0], [52.9, 1925.0], [53.0, 1926.0], [53.1, 1926.0], [53.2, 1927.0], [53.3, 1928.0], [53.4, 1929.0], [53.5, 1930.0], [53.6, 1932.0], [53.7, 1934.0], [53.8, 1935.0], [53.9, 1937.0], [54.0, 1940.0], [54.1, 1941.0], [54.2, 1942.0], [54.3, 1944.0], [54.4, 1946.0], [54.5, 1947.0], [54.6, 1948.0], [54.7, 1950.0], [54.8, 1952.0], [54.9, 1955.0], [55.0, 1956.0], [55.1, 1959.0], [55.2, 1961.0], [55.3, 1962.0], [55.4, 1963.0], [55.5, 1965.0], [55.6, 1966.0], [55.7, 1968.0], [55.8, 1971.0], [55.9, 1973.0], [56.0, 1975.0], [56.1, 1977.0], [56.2, 1978.0], [56.3, 1980.0], [56.4, 1982.0], [56.5, 1983.0], [56.6, 1984.0], [56.7, 1988.0], [56.8, 1990.0], [56.9, 1991.0], [57.0, 1992.0], [57.1, 1996.0], [57.2, 1997.0], [57.3, 1998.0], [57.4, 1999.0], [57.5, 2001.0], [57.6, 2006.0], [57.7, 2007.0], [57.8, 2010.0], [57.9, 2010.0], [58.0, 2012.0], [58.1, 2013.0], [58.2, 2015.0], [58.3, 2017.0], [58.4, 2020.0], [58.5, 2021.0], [58.6, 2023.0], [58.7, 2026.0], [58.8, 2027.0], [58.9, 2029.0], [59.0, 2031.0], [59.1, 2035.0], [59.2, 2037.0], [59.3, 2039.0], [59.4, 2042.0], [59.5, 2047.0], [59.6, 2048.0], [59.7, 2051.0], [59.8, 2052.0], [59.9, 2054.0], [60.0, 2058.0], [60.1, 2061.0], [60.2, 2064.0], [60.3, 2066.0], [60.4, 2068.0], [60.5, 2069.0], [60.6, 2072.0], [60.7, 2076.0], [60.8, 2079.0], [60.9, 2083.0], [61.0, 2087.0], [61.1, 2090.0], [61.2, 2091.0], [61.3, 2092.0], [61.4, 2094.0], [61.5, 2097.0], [61.6, 2098.0], [61.7, 2100.0], [61.8, 2103.0], [61.9, 2106.0], [62.0, 2107.0], [62.1, 2108.0], [62.2, 2111.0], [62.3, 2113.0], [62.4, 2116.0], [62.5, 2119.0], [62.6, 2120.0], [62.7, 2124.0], [62.8, 2126.0], [62.9, 2129.0], [63.0, 2133.0], [63.1, 2134.0], [63.2, 2135.0], [63.3, 2138.0], [63.4, 2140.0], [63.5, 2143.0], [63.6, 2148.0], [63.7, 2149.0], [63.8, 2151.0], [63.9, 2156.0], [64.0, 2159.0], [64.1, 2163.0], [64.2, 2166.0], [64.3, 2168.0], [64.4, 2169.0], [64.5, 2172.0], [64.6, 2174.0], [64.7, 2176.0], [64.8, 2180.0], [64.9, 2182.0], [65.0, 2183.0], [65.1, 2185.0], [65.2, 2186.0], [65.3, 2189.0], [65.4, 2191.0], [65.5, 2192.0], [65.6, 2194.0], [65.7, 2197.0], [65.8, 2200.0], [65.9, 2202.0], [66.0, 2202.0], [66.1, 2206.0], [66.2, 2207.0], [66.3, 2210.0], [66.4, 2211.0], [66.5, 2214.0], [66.6, 2218.0], [66.7, 2218.0], [66.8, 2221.0], [66.9, 2222.0], [67.0, 2226.0], [67.1, 2229.0], [67.2, 2233.0], [67.3, 2235.0], [67.4, 2238.0], [67.5, 2242.0], [67.6, 2243.0], [67.7, 2246.0], [67.8, 2249.0], [67.9, 2254.0], [68.0, 2254.0], [68.1, 2256.0], [68.2, 2259.0], [68.3, 2260.0], [68.4, 2264.0], [68.5, 2267.0], [68.6, 2271.0], [68.7, 2273.0], [68.8, 2274.0], [68.9, 2277.0], [69.0, 2279.0], [69.1, 2281.0], [69.2, 2283.0], [69.3, 2287.0], [69.4, 2291.0], [69.5, 2294.0], [69.6, 2296.0], [69.7, 2296.0], [69.8, 2297.0], [69.9, 2299.0], [70.0, 2303.0], [70.1, 2306.0], [70.2, 2311.0], [70.3, 2317.0], [70.4, 2322.0], [70.5, 2325.0], [70.6, 2329.0], [70.7, 2333.0], [70.8, 2335.0], [70.9, 2339.0], [71.0, 2342.0], [71.1, 2344.0], [71.2, 2348.0], [71.3, 2351.0], [71.4, 2353.0], [71.5, 2357.0], [71.6, 2359.0], [71.7, 2362.0], [71.8, 2367.0], [71.9, 2372.0], [72.0, 2375.0], [72.1, 2382.0], [72.2, 2385.0], [72.3, 2387.0], [72.4, 2390.0], [72.5, 2393.0], [72.6, 2395.0], [72.7, 2400.0], [72.8, 2405.0], [72.9, 2409.0], [73.0, 2413.0], [73.1, 2416.0], [73.2, 2421.0], [73.3, 2423.0], [73.4, 2425.0], [73.5, 2429.0], [73.6, 2431.0], [73.7, 2435.0], [73.8, 2438.0], [73.9, 2440.0], [74.0, 2442.0], [74.1, 2445.0], [74.2, 2447.0], [74.3, 2449.0], [74.4, 2452.0], [74.5, 2458.0], [74.6, 2461.0], [74.7, 2464.0], [74.8, 2469.0], [74.9, 2470.0], [75.0, 2473.0], [75.1, 2474.0], [75.2, 2478.0], [75.3, 2483.0], [75.4, 2487.0], [75.5, 2488.0], [75.6, 2497.0], [75.7, 2500.0], [75.8, 2503.0], [75.9, 2505.0], [76.0, 2509.0], [76.1, 2513.0], [76.2, 2518.0], [76.3, 2521.0], [76.4, 2524.0], [76.5, 2527.0], [76.6, 2529.0], [76.7, 2533.0], [76.8, 2537.0], [76.9, 2541.0], [77.0, 2546.0], [77.1, 2550.0], [77.2, 2558.0], [77.3, 2562.0], [77.4, 2566.0], [77.5, 2570.0], [77.6, 2574.0], [77.7, 2576.0], [77.8, 2580.0], [77.9, 2587.0], [78.0, 2589.0], [78.1, 2591.0], [78.2, 2594.0], [78.3, 2599.0], [78.4, 2605.0], [78.5, 2615.0], [78.6, 2618.0], [78.7, 2619.0], [78.8, 2621.0], [78.9, 2629.0], [79.0, 2633.0], [79.1, 2635.0], [79.2, 2639.0], [79.3, 2641.0], [79.4, 2643.0], [79.5, 2645.0], [79.6, 2647.0], [79.7, 2651.0], [79.8, 2655.0], [79.9, 2658.0], [80.0, 2661.0], [80.1, 2667.0], [80.2, 2671.0], [80.3, 2677.0], [80.4, 2681.0], [80.5, 2682.0], [80.6, 2685.0], [80.7, 2687.0], [80.8, 2692.0], [80.9, 2695.0], [81.0, 2698.0], [81.1, 2703.0], [81.2, 2707.0], [81.3, 2709.0], [81.4, 2710.0], [81.5, 2711.0], [81.6, 2714.0], [81.7, 2722.0], [81.8, 2725.0], [81.9, 2726.0], [82.0, 2730.0], [82.1, 2733.0], [82.2, 2736.0], [82.3, 2742.0], [82.4, 2745.0], [82.5, 2747.0], [82.6, 2750.0], [82.7, 2755.0], [82.8, 2757.0], [82.9, 2762.0], [83.0, 2765.0], [83.1, 2768.0], [83.2, 2771.0], [83.3, 2776.0], [83.4, 2781.0], [83.5, 2784.0], [83.6, 2786.0], [83.7, 2791.0], [83.8, 2792.0], [83.9, 2798.0], [84.0, 2801.0], [84.1, 2804.0], [84.2, 2809.0], [84.3, 2815.0], [84.4, 2820.0], [84.5, 2825.0], [84.6, 2832.0], [84.7, 2840.0], [84.8, 2844.0], [84.9, 2848.0], [85.0, 2851.0], [85.1, 2861.0], [85.2, 2865.0], [85.3, 2866.0], [85.4, 2871.0], [85.5, 2875.0], [85.6, 2882.0], [85.7, 2887.0], [85.8, 2889.0], [85.9, 2897.0], [86.0, 2901.0], [86.1, 2907.0], [86.2, 2911.0], [86.3, 2915.0], [86.4, 2921.0], [86.5, 2923.0], [86.6, 2929.0], [86.7, 2937.0], [86.8, 2939.0], [86.9, 2949.0], [87.0, 2953.0], [87.1, 2960.0], [87.2, 2970.0], [87.3, 2977.0], [87.4, 2980.0], [87.5, 2988.0], [87.6, 2993.0], [87.7, 3000.0], [87.8, 3003.0], [87.9, 3011.0], [88.0, 3016.0], [88.1, 3023.0], [88.2, 3026.0], [88.3, 3035.0], [88.4, 3042.0], [88.5, 3049.0], [88.6, 3058.0], [88.7, 3064.0], [88.8, 3065.0], [88.9, 3070.0], [89.0, 3077.0], [89.1, 3084.0], [89.2, 3089.0], [89.3, 3094.0], [89.4, 3103.0], [89.5, 3113.0], [89.6, 3120.0], [89.7, 3127.0], [89.8, 3138.0], [89.9, 3142.0], [90.0, 3152.0], [90.1, 3156.0], [90.2, 3160.0], [90.3, 3165.0], [90.4, 3177.0], [90.5, 3181.0], [90.6, 3194.0], [90.7, 3203.0], [90.8, 3208.0], [90.9, 3217.0], [91.0, 3222.0], [91.1, 3232.0], [91.2, 3242.0], [91.3, 3249.0], [91.4, 3254.0], [91.5, 3262.0], [91.6, 3269.0], [91.7, 3280.0], [91.8, 3289.0], [91.9, 3301.0], [92.0, 3312.0], [92.1, 3320.0], [92.2, 3326.0], [92.3, 3338.0], [92.4, 3347.0], [92.5, 3359.0], [92.6, 3381.0], [92.7, 3392.0], [92.8, 3401.0], [92.9, 3421.0], [93.0, 3429.0], [93.1, 3435.0], [93.2, 3445.0], [93.3, 3458.0], [93.4, 3468.0], [93.5, 3474.0], [93.6, 3486.0], [93.7, 3491.0], [93.8, 3498.0], [93.9, 3503.0], [94.0, 3519.0], [94.1, 3521.0], [94.2, 3527.0], [94.3, 3534.0], [94.4, 3549.0], [94.5, 3569.0], [94.6, 3582.0], [94.7, 3596.0], [94.8, 3617.0], [94.9, 3626.0], [95.0, 3634.0], [95.1, 3651.0], [95.2, 3669.0], [95.3, 3681.0], [95.4, 3691.0], [95.5, 3709.0], [95.6, 3724.0], [95.7, 3745.0], [95.8, 3787.0], [95.9, 3800.0], [96.0, 3809.0], [96.1, 3819.0], [96.2, 3841.0], [96.3, 3861.0], [96.4, 3875.0], [96.5, 3891.0], [96.6, 3930.0], [96.7, 3946.0], [96.8, 3975.0], [96.9, 4007.0], [97.0, 4036.0], [97.1, 4078.0], [97.2, 4107.0], [97.3, 4133.0], [97.4, 4181.0], [97.5, 4210.0], [97.6, 4233.0], [97.7, 4254.0], [97.8, 4284.0], [97.9, 4322.0], [98.0, 4390.0], [98.1, 4453.0], [98.2, 4511.0], [98.3, 4578.0], [98.4, 4663.0], [98.5, 4747.0], [98.6, 4781.0], [98.7, 4840.0], [98.8, 4951.0], [98.9, 5034.0], [99.0, 5103.0], [99.1, 5270.0], [99.2, 5505.0], [99.3, 5583.0], [99.4, 5748.0], [99.5, 6068.0], [99.6, 6245.0], [99.7, 6541.0], [99.8, 7045.0], [99.9, 7834.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 600.0, "maxY": 360.0, "series": [{"data": [[600.0, 7.0], [700.0, 133.0], [800.0, 360.0], [900.0, 154.0], [1000.0, 142.0], [1100.0, 232.0], [1200.0, 225.0], [1300.0, 200.0], [1400.0, 217.0], [1500.0, 189.0], [1600.0, 212.0], [1700.0, 281.0], [1800.0, 296.0], [1900.0, 333.0], [2000.0, 219.0], [2100.0, 215.0], [2300.0, 145.0], [2200.0, 213.0], [2400.0, 152.0], [2500.0, 139.0], [2600.0, 141.0], [2700.0, 152.0], [2800.0, 104.0], [2900.0, 90.0], [3000.0, 85.0], [3100.0, 70.0], [3300.0, 47.0], [3200.0, 63.0], [3400.0, 54.0], [3500.0, 46.0], [3700.0, 21.0], [3600.0, 40.0], [3800.0, 33.0], [3900.0, 18.0], [4000.0, 14.0], [4100.0, 18.0], [4200.0, 18.0], [4300.0, 9.0], [4500.0, 6.0], [4400.0, 9.0], [4600.0, 7.0], [4700.0, 10.0], [4800.0, 6.0], [5000.0, 7.0], [5100.0, 6.0], [4900.0, 5.0], [5200.0, 2.0], [5300.0, 1.0], [5600.0, 1.0], [5500.0, 7.0], [5400.0, 2.0], [5700.0, 4.0], [6000.0, 4.0], [6100.0, 1.0], [5900.0, 2.0], [6200.0, 5.0], [6400.0, 2.0], [6500.0, 1.0], [6700.0, 1.0], [6900.0, 1.0], [6800.0, 2.0], [7000.0, 1.0], [7200.0, 1.0], [7500.0, 2.0], [7700.0, 1.0], [7900.0, 1.0], [7800.0, 1.0], [8500.0, 1.0], [9400.0, 1.0], [10500.0, 1.0], [10700.0, 1.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 10700.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 1676.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 3514.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1676.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 3514.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 11.405405405405407, "minX": 1.60264212E12, "maxY": 12.0, "series": [{"data": [[1.60264248E12, 12.0], [1.60264218E12, 12.0], [1.60264284E12, 12.0], [1.60264254E12, 12.0], [1.60264272E12, 12.0], [1.60264242E12, 12.0], [1.60264212E12, 12.0], [1.60264278E12, 12.0], [1.60264296E12, 12.0], [1.60264266E12, 12.0], [1.60264236E12, 12.0], [1.60264302E12, 11.405405405405407], [1.60264224E12, 12.0], [1.6026429E12, 12.0], [1.6026426E12, 12.0], [1.6026423E12, 12.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60264302E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 1382.0, "minX": 1.0, "maxY": 4401.0, "series": [{"data": [[8.0, 2370.0], [4.0, 1617.0], [2.0, 4401.0], [1.0, 4237.0], [9.0, 1532.0], [10.0, 3282.0], [5.0, 2639.0], [11.0, 1382.0], [12.0, 2005.6927978374188], [6.0, 1537.0], [3.0, 1543.0], [7.0, 2742.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[11.987283236994216, 2006.698458574179]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 12.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 167.96666666666667, "minX": 1.60264212E12, "maxY": 2150473.9166666665, "series": [{"data": [[1.60264248E12, 1860301.5833333333], [1.60264218E12, 1714231.9333333333], [1.60264284E12, 1703546.2833333334], [1.60264254E12, 1448187.6166666667], [1.60264272E12, 1111132.6166666667], [1.60264242E12, 1860316.9333333333], [1.60264212E12, 192453.83333333334], [1.60264278E12, 2034546.8], [1.60264296E12, 1682710.1666666667], [1.60264266E12, 1642217.8333333333], [1.60264236E12, 2150473.9166666665], [1.60264302E12, 503160.4], [1.60264224E12, 1467166.6], [1.6026429E12, 1562728.0833333333], [1.6026426E12, 1736386.15], [1.6026423E12, 1303190.1333333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60264248E12, 2763.8], [1.60264218E12, 2408.366666666667], [1.60264284E12, 3209.733333333333], [1.60264254E12, 2650.9], [1.60264272E12, 2721.0666666666666], [1.60264242E12, 2757.266666666667], [1.60264212E12, 167.96666666666667], [1.60264278E12, 2391.85], [1.60264296E12, 2618.2166666666667], [1.60264266E12, 2671.9166666666665], [1.60264236E12, 2649.35], [1.60264302E12, 840.2666666666667], [1.60264224E12, 2403.5], [1.6026429E12, 2949.05], [1.6026426E12, 2299.9666666666667], [1.6026423E12, 3074.116666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60264302E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 1701.9009433962265, "minX": 1.60264212E12, "maxY": 2934.363636363637, "series": [{"data": [[1.60264248E12, 2005.729281767958], [1.60264218E12, 2154.5922619047633], [1.60264284E12, 1701.9009433962265], [1.60264254E12, 2029.3587570621469], [1.60264272E12, 1942.6999999999987], [1.60264242E12, 1966.5342465753433], [1.60264212E12, 2934.363636363637], [1.60264278E12, 2185.3895705521454], [1.60264296E12, 2048.2132564841495], [1.60264266E12, 1949.8432432432426], [1.60264236E12, 2056.2664756446975], [1.60264302E12, 2528.297297297297], [1.60264224E12, 2158.224242424243], [1.6026429E12, 1874.0154639175275], [1.6026426E12, 2288.723809523809], [1.6026423E12, 1711.2636579572438]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60264302E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 1700.4882075471694, "minX": 1.60264212E12, "maxY": 2930.7272727272725, "series": [{"data": [[1.60264248E12, 2003.6243093922642], [1.60264218E12, 2152.3363095238083], [1.60264284E12, 1700.4882075471694], [1.60264254E12, 2027.7090395480227], [1.60264272E12, 1941.6837837837847], [1.60264242E12, 1964.2410958904104], [1.60264212E12, 2930.7272727272725], [1.60264278E12, 2183.2699386503095], [1.60264296E12, 2046.6080691642646], [1.60264266E12, 1948.5135135135117], [1.60264236E12, 2053.6418338108897], [1.60264302E12, 2526.7477477477487], [1.60264224E12, 2156.296969696969], [1.6026429E12, 1872.5618556701031], [1.6026426E12, 2286.9682539682517], [1.6026423E12, 1709.8788598574836]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60264302E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.02424242424242424, "minX": 1.60264212E12, "maxY": 6.6363636363636385, "series": [{"data": [[1.60264248E12, 0.027624309392265182], [1.60264218E12, 0.041666666666666664], [1.60264284E12, 0.030660377358490563], [1.60264254E12, 0.0338983050847458], [1.60264272E12, 0.029729729729729763], [1.60264242E12, 0.03561643835616442], [1.60264212E12, 6.6363636363636385], [1.60264278E12, 0.03374233128834359], [1.60264296E12, 0.04034582132564846], [1.60264266E12, 0.03243243243243244], [1.60264236E12, 0.037249283667621785], [1.60264302E12, 0.12612612612612611], [1.60264224E12, 0.02424242424242424], [1.6026429E12, 0.03350515463917525], [1.6026426E12, 0.03809523809523811], [1.6026423E12, 0.02612826603325417]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60264302E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 613.0, "minX": 1.60264212E12, "maxY": 10780.0, "series": [{"data": [[1.60264248E12, 6245.0], [1.60264218E12, 9423.0], [1.60264284E12, 4117.0], [1.60264254E12, 6541.0], [1.60264272E12, 6271.0], [1.60264242E12, 4819.0], [1.60264212E12, 5034.0], [1.60264278E12, 4642.0], [1.60264296E12, 5748.0], [1.60264266E12, 7834.0], [1.60264236E12, 5562.0], [1.60264302E12, 4520.0], [1.60264224E12, 7299.0], [1.6026429E12, 3953.0], [1.6026426E12, 10780.0], [1.6026423E12, 5172.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60264248E12, 822.1359993076325], [1.60264218E12, 751.4289989554882], [1.60264284E12, 752.1249994933605], [1.60264254E12, 645.1449990689755], [1.60264272E12, 756.3559996461868], [1.60264242E12, 729.0579993891716], [1.60264212E12, 1276.0], [1.60264278E12, 1043.4609978950023], [1.60264296E12, 758.0], [1.60264266E12, 860.8309974348546], [1.60264236E12, 831.5499985814095], [1.60264302E12, 1140.9919966888428], [1.60264224E12, 932.6429986584186], [1.6026429E12, 762.0], [1.6026426E12, 844.8799984931945], [1.6026423E12, 748.5959997987748]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60264248E12, 824.749600276947], [1.60264218E12, 755.3719004178047], [1.60264284E12, 753.0], [1.60264254E12, 648.6595003724099], [1.60264272E12, 757.6916001415252], [1.60264242E12, 731.3638002443314], [1.60264212E12, 1276.0], [1.60264278E12, 1045.2373000311852], [1.60264296E12, 758.0], [1.60264266E12, 870.5141010260581], [1.60264236E12, 836.9050005674362], [1.60264302E12, 1153.491201324463], [1.60264224E12, 944.3529012942314], [1.6026429E12, 762.0], [1.6026426E12, 849.0272002410888], [1.6026423E12, 749.3556000804901]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60264248E12, 823.5879996538163], [1.60264218E12, 753.6194994777441], [1.60264284E12, 753.0], [1.60264254E12, 647.0974995344877], [1.60264272E12, 757.0979998230935], [1.60264242E12, 730.3389996945858], [1.60264212E12, 1276.0], [1.60264278E12, 1045.1064999610185], [1.60264296E12, 758.0], [1.60264266E12, 866.2104987174273], [1.60264236E12, 834.5249992907047], [1.60264302E12, 1147.9359983444215], [1.60264224E12, 938.9244983822107], [1.6026429E12, 762.0], [1.6026426E12, 848.0159996986389], [1.6026423E12, 749.0179998993874]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60264248E12, 762.0], [1.60264218E12, 726.0], [1.60264284E12, 726.0], [1.60264254E12, 613.0], [1.60264272E12, 749.0], [1.60264242E12, 703.0], [1.60264212E12, 1276.0], [1.60264278E12, 958.0], [1.60264296E12, 738.0], [1.60264266E12, 841.0], [1.60264236E12, 809.0], [1.60264302E12, 1140.0], [1.60264224E12, 909.0], [1.6026429E12, 754.0], [1.6026426E12, 824.0], [1.6026423E12, 737.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60264248E12, 1890.5], [1.60264218E12, 1967.0], [1.60264284E12, 1645.0], [1.60264254E12, 1909.5], [1.60264272E12, 1753.0], [1.60264242E12, 1946.0], [1.60264212E12, 2774.5], [1.60264278E12, 1987.5], [1.60264296E12, 1878.0], [1.60264266E12, 1797.5], [1.60264236E12, 1950.0], [1.60264302E12, 2370.0], [1.60264224E12, 1913.0], [1.6026429E12, 1857.5], [1.6026426E12, 2035.0], [1.6026423E12, 1483.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60264302E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 836.0, "minX": 1.0, "maxY": 3358.0, "series": [{"data": [[2.0, 2791.5], [8.0, 1742.5], [9.0, 1433.5], [10.0, 1182.0], [11.0, 1240.0], [3.0, 2617.5], [12.0, 1033.0], [13.0, 873.5], [14.0, 868.5], [15.0, 836.0], [4.0, 2343.0], [1.0, 3358.0], [5.0, 2194.0], [6.0, 2051.0], [7.0, 1829.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 15.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 836.0, "minX": 1.0, "maxY": 3357.5, "series": [{"data": [[2.0, 2790.5], [8.0, 1740.0], [9.0, 1433.5], [10.0, 1181.5], [11.0, 1240.0], [3.0, 2614.0], [12.0, 1033.0], [13.0, 873.5], [14.0, 868.5], [15.0, 836.0], [4.0, 2342.0], [1.0, 3357.5], [5.0, 2192.5], [6.0, 2050.5], [7.0, 1826.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 15.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.5666666666666667, "minX": 1.60264212E12, "maxY": 7.066666666666666, "series": [{"data": [[1.60264248E12, 6.033333333333333], [1.60264218E12, 5.6], [1.60264284E12, 7.066666666666666], [1.60264254E12, 5.9], [1.60264272E12, 6.166666666666667], [1.60264242E12, 6.083333333333333], [1.60264212E12, 0.5666666666666667], [1.60264278E12, 5.433333333333334], [1.60264296E12, 5.783333333333333], [1.60264266E12, 6.166666666666667], [1.60264236E12, 5.816666666666666], [1.60264302E12, 1.65], [1.60264224E12, 5.5], [1.6026429E12, 6.466666666666667], [1.6026426E12, 5.25], [1.6026423E12, 7.016666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60264302E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.36666666666666664, "minX": 1.60264212E12, "maxY": 7.066666666666666, "series": [{"data": [[1.60264248E12, 6.033333333333333], [1.60264218E12, 5.6], [1.60264284E12, 7.066666666666666], [1.60264254E12, 5.9], [1.60264272E12, 6.166666666666667], [1.60264242E12, 6.083333333333333], [1.60264212E12, 0.36666666666666664], [1.60264278E12, 5.433333333333334], [1.60264296E12, 5.783333333333333], [1.60264266E12, 6.166666666666667], [1.60264236E12, 5.816666666666666], [1.60264302E12, 1.85], [1.60264224E12, 5.5], [1.6026429E12, 6.466666666666667], [1.6026426E12, 5.25], [1.6026423E12, 7.016666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60264302E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.36666666666666664, "minX": 1.60264212E12, "maxY": 7.066666666666666, "series": [{"data": [[1.60264248E12, 6.033333333333333], [1.60264218E12, 5.6], [1.60264284E12, 7.066666666666666], [1.60264254E12, 5.9], [1.60264272E12, 6.166666666666667], [1.60264242E12, 6.083333333333333], [1.60264212E12, 0.36666666666666664], [1.60264278E12, 5.433333333333334], [1.60264296E12, 5.783333333333333], [1.60264266E12, 6.166666666666667], [1.60264236E12, 5.816666666666666], [1.60264302E12, 1.85], [1.60264224E12, 5.5], [1.6026429E12, 6.466666666666667], [1.6026426E12, 5.25], [1.6026423E12, 7.016666666666667]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60264302E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.36666666666666664, "minX": 1.60264212E12, "maxY": 7.066666666666666, "series": [{"data": [[1.60264248E12, 6.033333333333333], [1.60264218E12, 5.6], [1.60264284E12, 7.066666666666666], [1.60264254E12, 5.9], [1.60264272E12, 6.166666666666667], [1.60264242E12, 6.083333333333333], [1.60264212E12, 0.36666666666666664], [1.60264278E12, 5.433333333333334], [1.60264296E12, 5.783333333333333], [1.60264266E12, 6.166666666666667], [1.60264236E12, 5.816666666666666], [1.60264302E12, 1.85], [1.60264224E12, 5.5], [1.6026429E12, 6.466666666666667], [1.6026426E12, 5.25], [1.6026423E12, 7.016666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60264302E12, "title": "Total Transactions Per Second"}},
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

