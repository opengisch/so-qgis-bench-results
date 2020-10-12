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
        data: {"result": {"minY": 558.0, "minX": 0.0, "maxY": 10820.0, "series": [{"data": [[0.0, 558.0], [0.1, 611.0], [0.2, 636.0], [0.3, 671.0], [0.4, 721.0], [0.5, 731.0], [0.6, 744.0], [0.7, 748.0], [0.8, 750.0], [0.9, 752.0], [1.0, 754.0], [1.1, 758.0], [1.2, 760.0], [1.3, 764.0], [1.4, 766.0], [1.5, 768.0], [1.6, 772.0], [1.7, 776.0], [1.8, 779.0], [1.9, 782.0], [2.0, 783.0], [2.1, 785.0], [2.2, 787.0], [2.3, 788.0], [2.4, 790.0], [2.5, 792.0], [2.6, 793.0], [2.7, 794.0], [2.8, 795.0], [2.9, 797.0], [3.0, 799.0], [3.1, 800.0], [3.2, 803.0], [3.3, 805.0], [3.4, 807.0], [3.5, 810.0], [3.6, 812.0], [3.7, 814.0], [3.8, 816.0], [3.9, 818.0], [4.0, 819.0], [4.1, 821.0], [4.2, 822.0], [4.3, 824.0], [4.4, 825.0], [4.5, 828.0], [4.6, 829.0], [4.7, 830.0], [4.8, 832.0], [4.9, 833.0], [5.0, 834.0], [5.1, 836.0], [5.2, 838.0], [5.3, 840.0], [5.4, 841.0], [5.5, 842.0], [5.6, 844.0], [5.7, 846.0], [5.8, 848.0], [5.9, 850.0], [6.0, 852.0], [6.1, 854.0], [6.2, 856.0], [6.3, 856.0], [6.4, 859.0], [6.5, 862.0], [6.6, 863.0], [6.7, 864.0], [6.8, 868.0], [6.9, 869.0], [7.0, 871.0], [7.1, 873.0], [7.2, 875.0], [7.3, 876.0], [7.4, 877.0], [7.5, 879.0], [7.6, 881.0], [7.7, 882.0], [7.8, 883.0], [7.9, 884.0], [8.0, 886.0], [8.1, 889.0], [8.2, 892.0], [8.3, 894.0], [8.4, 896.0], [8.5, 900.0], [8.6, 901.0], [8.7, 904.0], [8.8, 905.0], [8.9, 907.0], [9.0, 909.0], [9.1, 912.0], [9.2, 914.0], [9.3, 916.0], [9.4, 919.0], [9.5, 921.0], [9.6, 923.0], [9.7, 925.0], [9.8, 927.0], [9.9, 929.0], [10.0, 932.0], [10.1, 936.0], [10.2, 937.0], [10.3, 941.0], [10.4, 944.0], [10.5, 947.0], [10.6, 949.0], [10.7, 951.0], [10.8, 956.0], [10.9, 960.0], [11.0, 962.0], [11.1, 965.0], [11.2, 968.0], [11.3, 970.0], [11.4, 975.0], [11.5, 978.0], [11.6, 987.0], [11.7, 989.0], [11.8, 990.0], [11.9, 992.0], [12.0, 996.0], [12.1, 998.0], [12.2, 1002.0], [12.3, 1005.0], [12.4, 1009.0], [12.5, 1015.0], [12.6, 1016.0], [12.7, 1019.0], [12.8, 1022.0], [12.9, 1024.0], [13.0, 1027.0], [13.1, 1031.0], [13.2, 1034.0], [13.3, 1038.0], [13.4, 1041.0], [13.5, 1045.0], [13.6, 1049.0], [13.7, 1055.0], [13.8, 1056.0], [13.9, 1059.0], [14.0, 1061.0], [14.1, 1063.0], [14.2, 1065.0], [14.3, 1067.0], [14.4, 1071.0], [14.5, 1072.0], [14.6, 1076.0], [14.7, 1080.0], [14.8, 1083.0], [14.9, 1084.0], [15.0, 1088.0], [15.1, 1089.0], [15.2, 1092.0], [15.3, 1095.0], [15.4, 1098.0], [15.5, 1100.0], [15.6, 1105.0], [15.7, 1107.0], [15.8, 1110.0], [15.9, 1112.0], [16.0, 1116.0], [16.1, 1120.0], [16.2, 1124.0], [16.3, 1126.0], [16.4, 1127.0], [16.5, 1132.0], [16.6, 1134.0], [16.7, 1137.0], [16.8, 1138.0], [16.9, 1139.0], [17.0, 1142.0], [17.1, 1144.0], [17.2, 1146.0], [17.3, 1148.0], [17.4, 1150.0], [17.5, 1151.0], [17.6, 1153.0], [17.7, 1156.0], [17.8, 1158.0], [17.9, 1160.0], [18.0, 1162.0], [18.1, 1164.0], [18.2, 1168.0], [18.3, 1172.0], [18.4, 1172.0], [18.5, 1174.0], [18.6, 1176.0], [18.7, 1178.0], [18.8, 1179.0], [18.9, 1183.0], [19.0, 1188.0], [19.1, 1188.0], [19.2, 1193.0], [19.3, 1196.0], [19.4, 1198.0], [19.5, 1199.0], [19.6, 1201.0], [19.7, 1204.0], [19.8, 1207.0], [19.9, 1210.0], [20.0, 1213.0], [20.1, 1217.0], [20.2, 1220.0], [20.3, 1222.0], [20.4, 1224.0], [20.5, 1225.0], [20.6, 1225.0], [20.7, 1228.0], [20.8, 1231.0], [20.9, 1234.0], [21.0, 1236.0], [21.1, 1238.0], [21.2, 1240.0], [21.3, 1243.0], [21.4, 1245.0], [21.5, 1248.0], [21.6, 1249.0], [21.7, 1251.0], [21.8, 1253.0], [21.9, 1256.0], [22.0, 1259.0], [22.1, 1260.0], [22.2, 1262.0], [22.3, 1263.0], [22.4, 1267.0], [22.5, 1270.0], [22.6, 1272.0], [22.7, 1273.0], [22.8, 1276.0], [22.9, 1278.0], [23.0, 1281.0], [23.1, 1282.0], [23.2, 1287.0], [23.3, 1290.0], [23.4, 1293.0], [23.5, 1297.0], [23.6, 1300.0], [23.7, 1303.0], [23.8, 1306.0], [23.9, 1310.0], [24.0, 1311.0], [24.1, 1312.0], [24.2, 1314.0], [24.3, 1316.0], [24.4, 1318.0], [24.5, 1319.0], [24.6, 1321.0], [24.7, 1324.0], [24.8, 1326.0], [24.9, 1328.0], [25.0, 1330.0], [25.1, 1333.0], [25.2, 1335.0], [25.3, 1336.0], [25.4, 1336.0], [25.5, 1337.0], [25.6, 1341.0], [25.7, 1342.0], [25.8, 1345.0], [25.9, 1348.0], [26.0, 1351.0], [26.1, 1352.0], [26.2, 1354.0], [26.3, 1357.0], [26.4, 1360.0], [26.5, 1362.0], [26.6, 1364.0], [26.7, 1366.0], [26.8, 1369.0], [26.9, 1371.0], [27.0, 1373.0], [27.1, 1376.0], [27.2, 1379.0], [27.3, 1381.0], [27.4, 1383.0], [27.5, 1385.0], [27.6, 1386.0], [27.7, 1387.0], [27.8, 1389.0], [27.9, 1394.0], [28.0, 1396.0], [28.1, 1398.0], [28.2, 1401.0], [28.3, 1402.0], [28.4, 1404.0], [28.5, 1405.0], [28.6, 1408.0], [28.7, 1412.0], [28.8, 1416.0], [28.9, 1418.0], [29.0, 1420.0], [29.1, 1421.0], [29.2, 1424.0], [29.3, 1428.0], [29.4, 1431.0], [29.5, 1434.0], [29.6, 1436.0], [29.7, 1439.0], [29.8, 1443.0], [29.9, 1446.0], [30.0, 1447.0], [30.1, 1448.0], [30.2, 1450.0], [30.3, 1454.0], [30.4, 1457.0], [30.5, 1459.0], [30.6, 1461.0], [30.7, 1467.0], [30.8, 1469.0], [30.9, 1470.0], [31.0, 1475.0], [31.1, 1477.0], [31.2, 1478.0], [31.3, 1480.0], [31.4, 1483.0], [31.5, 1486.0], [31.6, 1488.0], [31.7, 1489.0], [31.8, 1491.0], [31.9, 1494.0], [32.0, 1497.0], [32.1, 1498.0], [32.2, 1502.0], [32.3, 1503.0], [32.4, 1506.0], [32.5, 1508.0], [32.6, 1509.0], [32.7, 1510.0], [32.8, 1512.0], [32.9, 1516.0], [33.0, 1518.0], [33.1, 1520.0], [33.2, 1523.0], [33.3, 1524.0], [33.4, 1525.0], [33.5, 1528.0], [33.6, 1530.0], [33.7, 1532.0], [33.8, 1535.0], [33.9, 1538.0], [34.0, 1539.0], [34.1, 1541.0], [34.2, 1543.0], [34.3, 1545.0], [34.4, 1546.0], [34.5, 1548.0], [34.6, 1550.0], [34.7, 1553.0], [34.8, 1559.0], [34.9, 1560.0], [35.0, 1563.0], [35.1, 1564.0], [35.2, 1566.0], [35.3, 1569.0], [35.4, 1571.0], [35.5, 1574.0], [35.6, 1576.0], [35.7, 1579.0], [35.8, 1581.0], [35.9, 1583.0], [36.0, 1585.0], [36.1, 1587.0], [36.2, 1589.0], [36.3, 1590.0], [36.4, 1592.0], [36.5, 1594.0], [36.6, 1597.0], [36.7, 1600.0], [36.8, 1603.0], [36.9, 1604.0], [37.0, 1605.0], [37.1, 1607.0], [37.2, 1610.0], [37.3, 1612.0], [37.4, 1615.0], [37.5, 1616.0], [37.6, 1617.0], [37.7, 1620.0], [37.8, 1622.0], [37.9, 1623.0], [38.0, 1627.0], [38.1, 1628.0], [38.2, 1632.0], [38.3, 1633.0], [38.4, 1635.0], [38.5, 1638.0], [38.6, 1639.0], [38.7, 1643.0], [38.8, 1645.0], [38.9, 1647.0], [39.0, 1649.0], [39.1, 1650.0], [39.2, 1650.0], [39.3, 1653.0], [39.4, 1653.0], [39.5, 1657.0], [39.6, 1658.0], [39.7, 1660.0], [39.8, 1661.0], [39.9, 1662.0], [40.0, 1664.0], [40.1, 1667.0], [40.2, 1669.0], [40.3, 1673.0], [40.4, 1674.0], [40.5, 1675.0], [40.6, 1676.0], [40.7, 1677.0], [40.8, 1682.0], [40.9, 1685.0], [41.0, 1686.0], [41.1, 1688.0], [41.2, 1689.0], [41.3, 1690.0], [41.4, 1692.0], [41.5, 1695.0], [41.6, 1696.0], [41.7, 1698.0], [41.8, 1699.0], [41.9, 1701.0], [42.0, 1703.0], [42.1, 1704.0], [42.2, 1705.0], [42.3, 1708.0], [42.4, 1709.0], [42.5, 1711.0], [42.6, 1712.0], [42.7, 1714.0], [42.8, 1716.0], [42.9, 1718.0], [43.0, 1719.0], [43.1, 1722.0], [43.2, 1724.0], [43.3, 1727.0], [43.4, 1729.0], [43.5, 1731.0], [43.6, 1733.0], [43.7, 1734.0], [43.8, 1737.0], [43.9, 1738.0], [44.0, 1740.0], [44.1, 1742.0], [44.2, 1744.0], [44.3, 1746.0], [44.4, 1746.0], [44.5, 1748.0], [44.6, 1750.0], [44.7, 1751.0], [44.8, 1752.0], [44.9, 1754.0], [45.0, 1756.0], [45.1, 1757.0], [45.2, 1761.0], [45.3, 1763.0], [45.4, 1764.0], [45.5, 1766.0], [45.6, 1768.0], [45.7, 1769.0], [45.8, 1773.0], [45.9, 1774.0], [46.0, 1777.0], [46.1, 1780.0], [46.2, 1782.0], [46.3, 1783.0], [46.4, 1787.0], [46.5, 1789.0], [46.6, 1791.0], [46.7, 1793.0], [46.8, 1796.0], [46.9, 1797.0], [47.0, 1798.0], [47.1, 1799.0], [47.2, 1800.0], [47.3, 1801.0], [47.4, 1804.0], [47.5, 1805.0], [47.6, 1808.0], [47.7, 1809.0], [47.8, 1812.0], [47.9, 1813.0], [48.0, 1815.0], [48.1, 1816.0], [48.2, 1819.0], [48.3, 1819.0], [48.4, 1822.0], [48.5, 1824.0], [48.6, 1825.0], [48.7, 1830.0], [48.8, 1831.0], [48.9, 1834.0], [49.0, 1836.0], [49.1, 1839.0], [49.2, 1839.0], [49.3, 1841.0], [49.4, 1842.0], [49.5, 1844.0], [49.6, 1846.0], [49.7, 1847.0], [49.8, 1849.0], [49.9, 1851.0], [50.0, 1853.0], [50.1, 1854.0], [50.2, 1856.0], [50.3, 1859.0], [50.4, 1860.0], [50.5, 1861.0], [50.6, 1864.0], [50.7, 1865.0], [50.8, 1866.0], [50.9, 1869.0], [51.0, 1870.0], [51.1, 1873.0], [51.2, 1875.0], [51.3, 1876.0], [51.4, 1878.0], [51.5, 1879.0], [51.6, 1880.0], [51.7, 1881.0], [51.8, 1883.0], [51.9, 1884.0], [52.0, 1886.0], [52.1, 1887.0], [52.2, 1889.0], [52.3, 1891.0], [52.4, 1892.0], [52.5, 1893.0], [52.6, 1895.0], [52.7, 1898.0], [52.8, 1899.0], [52.9, 1901.0], [53.0, 1902.0], [53.1, 1904.0], [53.2, 1906.0], [53.3, 1907.0], [53.4, 1909.0], [53.5, 1911.0], [53.6, 1912.0], [53.7, 1916.0], [53.8, 1917.0], [53.9, 1918.0], [54.0, 1920.0], [54.1, 1921.0], [54.2, 1922.0], [54.3, 1925.0], [54.4, 1926.0], [54.5, 1928.0], [54.6, 1931.0], [54.7, 1933.0], [54.8, 1934.0], [54.9, 1936.0], [55.0, 1938.0], [55.1, 1938.0], [55.2, 1940.0], [55.3, 1942.0], [55.4, 1944.0], [55.5, 1946.0], [55.6, 1948.0], [55.7, 1949.0], [55.8, 1951.0], [55.9, 1952.0], [56.0, 1954.0], [56.1, 1955.0], [56.2, 1957.0], [56.3, 1959.0], [56.4, 1961.0], [56.5, 1963.0], [56.6, 1966.0], [56.7, 1967.0], [56.8, 1969.0], [56.9, 1971.0], [57.0, 1973.0], [57.1, 1975.0], [57.2, 1978.0], [57.3, 1980.0], [57.4, 1984.0], [57.5, 1986.0], [57.6, 1988.0], [57.7, 1991.0], [57.8, 1993.0], [57.9, 1994.0], [58.0, 1996.0], [58.1, 1997.0], [58.2, 2001.0], [58.3, 2003.0], [58.4, 2003.0], [58.5, 2007.0], [58.6, 2009.0], [58.7, 2010.0], [58.8, 2012.0], [58.9, 2013.0], [59.0, 2015.0], [59.1, 2017.0], [59.2, 2019.0], [59.3, 2021.0], [59.4, 2023.0], [59.5, 2027.0], [59.6, 2030.0], [59.7, 2032.0], [59.8, 2035.0], [59.9, 2036.0], [60.0, 2038.0], [60.1, 2043.0], [60.2, 2045.0], [60.3, 2047.0], [60.4, 2050.0], [60.5, 2051.0], [60.6, 2054.0], [60.7, 2057.0], [60.8, 2058.0], [60.9, 2059.0], [61.0, 2061.0], [61.1, 2065.0], [61.2, 2066.0], [61.3, 2067.0], [61.4, 2068.0], [61.5, 2070.0], [61.6, 2075.0], [61.7, 2076.0], [61.8, 2079.0], [61.9, 2080.0], [62.0, 2083.0], [62.1, 2083.0], [62.2, 2087.0], [62.3, 2089.0], [62.4, 2090.0], [62.5, 2093.0], [62.6, 2094.0], [62.7, 2096.0], [62.8, 2097.0], [62.9, 2099.0], [63.0, 2100.0], [63.1, 2101.0], [63.2, 2104.0], [63.3, 2106.0], [63.4, 2109.0], [63.5, 2111.0], [63.6, 2113.0], [63.7, 2115.0], [63.8, 2118.0], [63.9, 2121.0], [64.0, 2122.0], [64.1, 2124.0], [64.2, 2126.0], [64.3, 2130.0], [64.4, 2132.0], [64.5, 2133.0], [64.6, 2135.0], [64.7, 2138.0], [64.8, 2139.0], [64.9, 2140.0], [65.0, 2143.0], [65.1, 2144.0], [65.2, 2146.0], [65.3, 2148.0], [65.4, 2153.0], [65.5, 2156.0], [65.6, 2157.0], [65.7, 2161.0], [65.8, 2164.0], [65.9, 2167.0], [66.0, 2169.0], [66.1, 2170.0], [66.2, 2176.0], [66.3, 2177.0], [66.4, 2179.0], [66.5, 2183.0], [66.6, 2185.0], [66.7, 2187.0], [66.8, 2191.0], [66.9, 2194.0], [67.0, 2196.0], [67.1, 2199.0], [67.2, 2201.0], [67.3, 2206.0], [67.4, 2208.0], [67.5, 2211.0], [67.6, 2215.0], [67.7, 2216.0], [67.8, 2220.0], [67.9, 2224.0], [68.0, 2226.0], [68.1, 2230.0], [68.2, 2232.0], [68.3, 2235.0], [68.4, 2238.0], [68.5, 2239.0], [68.6, 2243.0], [68.7, 2247.0], [68.8, 2249.0], [68.9, 2257.0], [69.0, 2261.0], [69.1, 2263.0], [69.2, 2265.0], [69.3, 2269.0], [69.4, 2270.0], [69.5, 2273.0], [69.6, 2277.0], [69.7, 2279.0], [69.8, 2281.0], [69.9, 2282.0], [70.0, 2285.0], [70.1, 2290.0], [70.2, 2292.0], [70.3, 2296.0], [70.4, 2298.0], [70.5, 2302.0], [70.6, 2304.0], [70.7, 2306.0], [70.8, 2309.0], [70.9, 2311.0], [71.0, 2313.0], [71.1, 2314.0], [71.2, 2322.0], [71.3, 2325.0], [71.4, 2328.0], [71.5, 2331.0], [71.6, 2338.0], [71.7, 2341.0], [71.8, 2344.0], [71.9, 2345.0], [72.0, 2349.0], [72.1, 2353.0], [72.2, 2357.0], [72.3, 2362.0], [72.4, 2372.0], [72.5, 2374.0], [72.6, 2377.0], [72.7, 2383.0], [72.8, 2386.0], [72.9, 2387.0], [73.0, 2390.0], [73.1, 2393.0], [73.2, 2396.0], [73.3, 2401.0], [73.4, 2402.0], [73.5, 2403.0], [73.6, 2405.0], [73.7, 2409.0], [73.8, 2413.0], [73.9, 2416.0], [74.0, 2418.0], [74.1, 2421.0], [74.2, 2423.0], [74.3, 2425.0], [74.4, 2427.0], [74.5, 2431.0], [74.6, 2435.0], [74.7, 2438.0], [74.8, 2444.0], [74.9, 2447.0], [75.0, 2450.0], [75.1, 2453.0], [75.2, 2455.0], [75.3, 2459.0], [75.4, 2463.0], [75.5, 2469.0], [75.6, 2472.0], [75.7, 2477.0], [75.8, 2482.0], [75.9, 2483.0], [76.0, 2486.0], [76.1, 2491.0], [76.2, 2497.0], [76.3, 2500.0], [76.4, 2506.0], [76.5, 2509.0], [76.6, 2514.0], [76.7, 2520.0], [76.8, 2525.0], [76.9, 2529.0], [77.0, 2535.0], [77.1, 2537.0], [77.2, 2538.0], [77.3, 2541.0], [77.4, 2545.0], [77.5, 2549.0], [77.6, 2551.0], [77.7, 2558.0], [77.8, 2561.0], [77.9, 2566.0], [78.0, 2568.0], [78.1, 2571.0], [78.2, 2572.0], [78.3, 2577.0], [78.4, 2584.0], [78.5, 2586.0], [78.6, 2588.0], [78.7, 2592.0], [78.8, 2596.0], [78.9, 2601.0], [79.0, 2608.0], [79.1, 2610.0], [79.2, 2611.0], [79.3, 2616.0], [79.4, 2619.0], [79.5, 2623.0], [79.6, 2626.0], [79.7, 2628.0], [79.8, 2632.0], [79.9, 2634.0], [80.0, 2637.0], [80.1, 2639.0], [80.2, 2643.0], [80.3, 2644.0], [80.4, 2648.0], [80.5, 2654.0], [80.6, 2656.0], [80.7, 2660.0], [80.8, 2660.0], [80.9, 2665.0], [81.0, 2666.0], [81.1, 2669.0], [81.2, 2672.0], [81.3, 2676.0], [81.4, 2681.0], [81.5, 2684.0], [81.6, 2690.0], [81.7, 2694.0], [81.8, 2698.0], [81.9, 2707.0], [82.0, 2714.0], [82.1, 2719.0], [82.2, 2724.0], [82.3, 2729.0], [82.4, 2731.0], [82.5, 2734.0], [82.6, 2737.0], [82.7, 2739.0], [82.8, 2741.0], [82.9, 2745.0], [83.0, 2748.0], [83.1, 2750.0], [83.2, 2753.0], [83.3, 2757.0], [83.4, 2761.0], [83.5, 2763.0], [83.6, 2768.0], [83.7, 2771.0], [83.8, 2774.0], [83.9, 2779.0], [84.0, 2782.0], [84.1, 2788.0], [84.2, 2793.0], [84.3, 2795.0], [84.4, 2798.0], [84.5, 2803.0], [84.6, 2806.0], [84.7, 2813.0], [84.8, 2816.0], [84.9, 2822.0], [85.0, 2827.0], [85.1, 2829.0], [85.2, 2832.0], [85.3, 2835.0], [85.4, 2838.0], [85.5, 2842.0], [85.6, 2848.0], [85.7, 2851.0], [85.8, 2853.0], [85.9, 2860.0], [86.0, 2865.0], [86.1, 2870.0], [86.2, 2876.0], [86.3, 2882.0], [86.4, 2886.0], [86.5, 2893.0], [86.6, 2898.0], [86.7, 2902.0], [86.8, 2910.0], [86.9, 2916.0], [87.0, 2924.0], [87.1, 2927.0], [87.2, 2931.0], [87.3, 2933.0], [87.4, 2944.0], [87.5, 2949.0], [87.6, 2953.0], [87.7, 2958.0], [87.8, 2962.0], [87.9, 2967.0], [88.0, 2972.0], [88.1, 2977.0], [88.2, 2984.0], [88.3, 2989.0], [88.4, 2993.0], [88.5, 3009.0], [88.6, 3013.0], [88.7, 3021.0], [88.8, 3027.0], [88.9, 3037.0], [89.0, 3043.0], [89.1, 3049.0], [89.2, 3057.0], [89.3, 3059.0], [89.4, 3065.0], [89.5, 3076.0], [89.6, 3084.0], [89.7, 3090.0], [89.8, 3095.0], [89.9, 3102.0], [90.0, 3112.0], [90.1, 3115.0], [90.2, 3123.0], [90.3, 3129.0], [90.4, 3137.0], [90.5, 3145.0], [90.6, 3153.0], [90.7, 3160.0], [90.8, 3171.0], [90.9, 3178.0], [91.0, 3185.0], [91.1, 3192.0], [91.2, 3198.0], [91.3, 3201.0], [91.4, 3218.0], [91.5, 3225.0], [91.6, 3240.0], [91.7, 3261.0], [91.8, 3270.0], [91.9, 3275.0], [92.0, 3285.0], [92.1, 3294.0], [92.2, 3311.0], [92.3, 3316.0], [92.4, 3329.0], [92.5, 3339.0], [92.6, 3342.0], [92.7, 3352.0], [92.8, 3360.0], [92.9, 3370.0], [93.0, 3379.0], [93.1, 3387.0], [93.2, 3401.0], [93.3, 3412.0], [93.4, 3426.0], [93.5, 3433.0], [93.6, 3440.0], [93.7, 3451.0], [93.8, 3465.0], [93.9, 3470.0], [94.0, 3482.0], [94.1, 3485.0], [94.2, 3497.0], [94.3, 3510.0], [94.4, 3522.0], [94.5, 3532.0], [94.6, 3540.0], [94.7, 3553.0], [94.8, 3573.0], [94.9, 3592.0], [95.0, 3610.0], [95.1, 3625.0], [95.2, 3637.0], [95.3, 3656.0], [95.4, 3676.0], [95.5, 3684.0], [95.6, 3716.0], [95.7, 3727.0], [95.8, 3744.0], [95.9, 3761.0], [96.0, 3772.0], [96.1, 3781.0], [96.2, 3803.0], [96.3, 3820.0], [96.4, 3835.0], [96.5, 3856.0], [96.6, 3888.0], [96.7, 3917.0], [96.8, 3925.0], [96.9, 3987.0], [97.0, 4002.0], [97.1, 4028.0], [97.2, 4054.0], [97.3, 4122.0], [97.4, 4191.0], [97.5, 4204.0], [97.6, 4232.0], [97.7, 4271.0], [97.8, 4371.0], [97.9, 4407.0], [98.0, 4439.0], [98.1, 4520.0], [98.2, 4552.0], [98.3, 4625.0], [98.4, 4680.0], [98.5, 4729.0], [98.6, 4777.0], [98.7, 4852.0], [98.8, 4902.0], [98.9, 4936.0], [99.0, 5058.0], [99.1, 5174.0], [99.2, 5397.0], [99.3, 5559.0], [99.4, 5676.0], [99.5, 6110.0], [99.6, 6549.0], [99.7, 6799.0], [99.8, 7209.0], [99.9, 7785.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 500.0, "maxY": 296.0, "series": [{"data": [[600.0, 12.0], [700.0, 144.0], [800.0, 281.0], [900.0, 190.0], [1000.0, 172.0], [1100.0, 210.0], [1200.0, 211.0], [1300.0, 237.0], [1400.0, 208.0], [1500.0, 234.0], [1600.0, 267.0], [1700.0, 277.0], [1800.0, 296.0], [1900.0, 276.0], [2000.0, 250.0], [2100.0, 215.0], [2200.0, 172.0], [2300.0, 147.0], [2400.0, 156.0], [2500.0, 135.0], [2600.0, 153.0], [2700.0, 135.0], [2800.0, 115.0], [2900.0, 94.0], [3000.0, 73.0], [3100.0, 72.0], [3300.0, 57.0], [3200.0, 44.0], [3400.0, 52.0], [3500.0, 40.0], [3700.0, 30.0], [3600.0, 32.0], [3800.0, 26.0], [3900.0, 17.0], [4000.0, 13.0], [4300.0, 10.0], [4200.0, 12.0], [4100.0, 12.0], [4600.0, 11.0], [4400.0, 10.0], [4500.0, 8.0], [4700.0, 9.0], [4800.0, 8.0], [4900.0, 10.0], [5100.0, 4.0], [5000.0, 3.0], [5300.0, 5.0], [5500.0, 3.0], [5600.0, 4.0], [5400.0, 3.0], [5800.0, 1.0], [6000.0, 2.0], [6100.0, 2.0], [5900.0, 2.0], [6300.0, 1.0], [6200.0, 1.0], [6500.0, 3.0], [6600.0, 2.0], [6800.0, 2.0], [6900.0, 1.0], [6700.0, 2.0], [7100.0, 1.0], [7200.0, 1.0], [7400.0, 3.0], [7500.0, 1.0], [7900.0, 2.0], [7700.0, 1.0], [9700.0, 1.0], [9900.0, 1.0], [10800.0, 1.0], [500.0, 4.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 10800.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 1670.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 3520.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1670.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 3520.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 11.741176470588233, "minX": 1.60247172E12, "maxY": 12.0, "series": [{"data": [[1.60247226E12, 12.0], [1.60247256E12, 11.741176470588233], [1.60247196E12, 12.0], [1.6024725E12, 12.0], [1.60247184E12, 12.0], [1.6024719E12, 12.0], [1.6024722E12, 12.0], [1.60247178E12, 12.0], [1.60247208E12, 12.0], [1.60247214E12, 12.0], [1.60247244E12, 12.0], [1.60247202E12, 12.0], [1.60247232E12, 12.0], [1.60247238E12, 12.0], [1.60247172E12, 12.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60247256E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 1510.0, "minX": 1.0, "maxY": 3729.0, "series": [{"data": [[8.0, 2639.0], [4.0, 1510.0], [2.0, 3729.0], [1.0, 3628.0], [9.0, 2763.0], [10.0, 2448.0], [5.0, 2030.0], [11.0, 1708.0], [12.0, 1990.1287893415729], [6.0, 1650.0], [3.0, 1975.0], [7.0, 2080.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[11.987283236994216, 1990.951252408479]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 12.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 1025.2666666666667, "minX": 1.60247172E12, "maxY": 2119238.6166666667, "series": [{"data": [[1.60247226E12, 1411562.7166666666], [1.60247256E12, 1304142.6666666667], [1.60247196E12, 1898284.6833333333], [1.6024725E12, 1635704.3166666667], [1.60247184E12, 1159591.0833333333], [1.6024719E12, 1971450.7833333334], [1.6024722E12, 1574735.8666666667], [1.60247178E12, 1581471.3666666667], [1.60247208E12, 1786374.5333333334], [1.60247214E12, 1613330.25], [1.60247244E12, 1609427.2666666666], [1.60247202E12, 1792573.7833333334], [1.60247232E12, 1460812.35], [1.60247238E12, 2119238.6166666667], [1.60247172E12, 1053104.3833333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60247226E12, 2407.016666666667], [1.60247256E12, 1918.35], [1.60247196E12, 3074.5], [1.6024725E12, 3170.616666666667], [1.60247184E12, 2895.0333333333333], [1.6024719E12, 2498.233333333333], [1.6024722E12, 2237.6833333333334], [1.60247178E12, 2660.95], [1.60247208E12, 3125.733333333333], [1.60247214E12, 2239.633333333333], [1.60247244E12, 2958.9333333333334], [1.60247202E12, 2505.95], [1.60247232E12, 3088.616666666667], [1.60247238E12, 2770.8166666666666], [1.60247172E12, 1025.2666666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60247256E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 1679.6415094339613, "minX": 1.60247172E12, "maxY": 2593.471014492754, "series": [{"data": [[1.60247226E12, 2226.906060606061], [1.60247256E12, 2402.5529411764705], [1.60247196E12, 1761.6231527093591], [1.6024725E12, 1722.148325358852], [1.60247184E12, 1814.8375634517763], [1.6024719E12, 2134.9674556213013], [1.6024722E12, 2235.511041009462], [1.60247178E12, 1955.4197860962568], [1.60247208E12, 1741.63768115942], [1.60247214E12, 2407.0100671140945], [1.60247244E12, 1840.0], [1.60247202E12, 2190.6291793313067], [1.60247232E12, 1679.6415094339613], [1.60247238E12, 1991.9726027397267], [1.60247172E12, 2593.471014492754]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60247256E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 1678.4386792452829, "minX": 1.60247172E12, "maxY": 2590.3333333333326, "series": [{"data": [[1.60247226E12, 2225.5303030303035], [1.60247256E12, 2400.8666666666663], [1.60247196E12, 1759.5689655172412], [1.6024725E12, 1720.815789473684], [1.60247184E12, 1813.4923857868014], [1.6024719E12, 2132.319526627218], [1.6024722E12, 2233.4794952681405], [1.60247178E12, 1953.403743315509], [1.60247208E12, 1739.9057971014495], [1.60247214E12, 2404.667785234898], [1.60247244E12, 1838.5820512820515], [1.60247202E12, 2188.3465045592707], [1.60247232E12, 1678.4386792452829], [1.60247238E12, 1990.0328767123285], [1.60247172E12, 2590.3333333333326]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60247256E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.028205128205128216, "minX": 1.60247172E12, "maxY": 0.9855072463768113, "series": [{"data": [[1.60247226E12, 0.036363636363636334], [1.60247256E12, 0.04705882352941176], [1.60247196E12, 0.03201970443349752], [1.6024725E12, 0.031100478468899517], [1.60247184E12, 0.032994923857867994], [1.6024719E12, 0.044378698224852055], [1.6024722E12, 0.03785488958990534], [1.60247178E12, 0.045454545454545484], [1.60247208E12, 0.04106280193236714], [1.60247214E12, 0.040268456375838896], [1.60247244E12, 0.028205128205128216], [1.60247202E12, 0.04559270516717325], [1.60247232E12, 0.03537735849056606], [1.60247238E12, 0.038356164383561646], [1.60247172E12, 0.9855072463768113]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60247256E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 558.0, "minX": 1.60247172E12, "maxY": 10820.0, "series": [{"data": [[1.60247226E12, 7430.0], [1.60247256E12, 5395.0], [1.60247196E12, 4928.0], [1.6024725E12, 5146.0], [1.60247184E12, 5540.0], [1.6024719E12, 5559.0], [1.6024722E12, 10820.0], [1.60247178E12, 7974.0], [1.60247208E12, 5878.0], [1.60247214E12, 6841.0], [1.60247244E12, 5458.0], [1.60247202E12, 4889.0], [1.60247232E12, 4039.0], [1.60247238E12, 4335.0], [1.60247172E12, 5171.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60247226E12, 1111.7269989740848], [1.60247256E12, 932.3039923095703], [1.60247196E12, 766.3149995148182], [1.6024725E12, 721.0], [1.60247184E12, 749.5549999058246], [1.6024719E12, 943.4279977369308], [1.6024722E12, 822.0679989385604], [1.60247178E12, 767.4999982118607], [1.60247208E12, 600.9399996042251], [1.60247214E12, 1022.5279994297027], [1.60247244E12, 736.556999720335], [1.60247202E12, 840.1299977183342], [1.60247232E12, 761.0], [1.60247238E12, 633.1759996509552], [1.60247172E12, 1186.7929985749722]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60247226E12, 1114.7690003156663], [1.60247256E12, 961.3344030761718], [1.60247196E12, 768.0586000776291], [1.6024725E12, 722.0367002797127], [1.60247184E12, 749.9105000376701], [1.6024719E12, 951.9708009052276], [1.6024722E12, 824.1482000303268], [1.60247178E12, 774.2500007152557], [1.60247208E12, 603.6275005936623], [1.60247214E12, 1024.6808002281189], [1.60247244E12, 737.612700111866], [1.60247202E12, 855.9520017623902], [1.60247232E12, 761.4150000810623], [1.60247238E12, 634.4936001396179], [1.60247172E12, 1192.1723005700112]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60247226E12, 1113.4449996054173], [1.60247256E12, 948.4319961547851], [1.60247196E12, 767.3324997574091], [1.6024725E12, 721.0], [1.60247184E12, 749.7524999529123], [1.6024719E12, 948.1739988684654], [1.6024722E12, 824.0209999620914], [1.60247178E12, 771.2499991059303], [1.60247208E12, 601.7699998021126], [1.60247214E12, 1023.7239997148514], [1.60247244E12, 737.1434998601675], [1.60247202E12, 848.5599977970123], [1.60247232E12, 761.0749998986721], [1.60247238E12, 633.9079998254776], [1.60247172E12, 1189.781499287486]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60247226E12, 1092.0], [1.60247256E12, 877.0], [1.60247196E12, 744.0], [1.6024725E12, 671.0], [1.60247184E12, 745.0], [1.6024719E12, 774.0], [1.6024722E12, 794.0], [1.60247178E12, 748.0], [1.60247208E12, 558.0], [1.60247214E12, 981.0], [1.60247244E12, 713.0], [1.60247202E12, 797.0], [1.60247232E12, 758.0], [1.60247238E12, 580.0], [1.60247172E12, 1176.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60247226E12, 1792.5], [1.60247256E12, 2285.0], [1.60247196E12, 1704.5], [1.6024725E12, 1563.5], [1.60247184E12, 1572.5], [1.6024719E12, 1951.5], [1.6024722E12, 1984.0], [1.60247178E12, 1745.0], [1.60247208E12, 1599.5], [1.60247214E12, 2239.5], [1.60247244E12, 1753.0], [1.60247202E12, 2132.0], [1.60247232E12, 1563.0], [1.60247238E12, 1921.0], [1.60247172E12, 2583.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60247256E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 825.5, "minX": 1.0, "maxY": 3405.5, "series": [{"data": [[8.0, 1745.0], [2.0, 2866.0], [9.0, 1488.0], [10.0, 1334.0], [11.0, 1210.0], [3.0, 2450.0], [12.0, 982.0], [13.0, 883.0], [14.0, 860.5], [15.0, 828.5], [1.0, 3405.5], [4.0, 2311.5], [16.0, 825.5], [5.0, 2106.0], [6.0, 2002.0], [7.0, 1832.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 16.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 825.5, "minX": 1.0, "maxY": 3399.0, "series": [{"data": [[8.0, 1743.5], [2.0, 2859.5], [9.0, 1488.0], [10.0, 1333.5], [11.0, 1210.0], [3.0, 2449.0], [12.0, 982.0], [13.0, 883.0], [14.0, 860.5], [15.0, 828.5], [1.0, 3399.0], [4.0, 2310.5], [16.0, 825.5], [5.0, 2103.5], [6.0, 2002.0], [7.0, 1831.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 16.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 2.5, "minX": 1.60247172E12, "maxY": 7.066666666666666, "series": [{"data": [[1.60247226E12, 5.5], [1.60247256E12, 4.05], [1.60247196E12, 6.766666666666667], [1.6024725E12, 6.966666666666667], [1.60247184E12, 6.566666666666666], [1.6024719E12, 5.633333333333334], [1.6024722E12, 5.283333333333333], [1.60247178E12, 6.233333333333333], [1.60247208E12, 6.9], [1.60247214E12, 4.966666666666667], [1.60247244E12, 6.5], [1.60247202E12, 5.483333333333333], [1.60247232E12, 7.066666666666666], [1.60247238E12, 6.083333333333333], [1.60247172E12, 2.5]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60247256E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 2.3, "minX": 1.60247172E12, "maxY": 7.066666666666666, "series": [{"data": [[1.60247226E12, 5.5], [1.60247256E12, 4.25], [1.60247196E12, 6.766666666666667], [1.6024725E12, 6.966666666666667], [1.60247184E12, 6.566666666666666], [1.6024719E12, 5.633333333333334], [1.6024722E12, 5.283333333333333], [1.60247178E12, 6.233333333333333], [1.60247208E12, 6.9], [1.60247214E12, 4.966666666666667], [1.60247244E12, 6.5], [1.60247202E12, 5.483333333333333], [1.60247232E12, 7.066666666666666], [1.60247238E12, 6.083333333333333], [1.60247172E12, 2.3]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60247256E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 2.3, "minX": 1.60247172E12, "maxY": 7.066666666666666, "series": [{"data": [[1.60247226E12, 5.5], [1.60247256E12, 4.25], [1.60247196E12, 6.766666666666667], [1.6024725E12, 6.966666666666667], [1.60247184E12, 6.566666666666666], [1.6024719E12, 5.633333333333334], [1.6024722E12, 5.283333333333333], [1.60247178E12, 6.233333333333333], [1.60247208E12, 6.9], [1.60247214E12, 4.966666666666667], [1.60247244E12, 6.5], [1.60247202E12, 5.483333333333333], [1.60247232E12, 7.066666666666666], [1.60247238E12, 6.083333333333333], [1.60247172E12, 2.3]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60247256E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 2.3, "minX": 1.60247172E12, "maxY": 7.066666666666666, "series": [{"data": [[1.60247226E12, 5.5], [1.60247256E12, 4.25], [1.60247196E12, 6.766666666666667], [1.6024725E12, 6.966666666666667], [1.60247184E12, 6.566666666666666], [1.6024719E12, 5.633333333333334], [1.6024722E12, 5.283333333333333], [1.60247178E12, 6.233333333333333], [1.60247208E12, 6.9], [1.60247214E12, 4.966666666666667], [1.60247244E12, 6.5], [1.60247202E12, 5.483333333333333], [1.60247232E12, 7.066666666666666], [1.60247238E12, 6.083333333333333], [1.60247172E12, 2.3]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60247256E12, "title": "Total Transactions Per Second"}},
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

