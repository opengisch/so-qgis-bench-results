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
        data: {"result": {"minY": 592.0, "minX": 0.0, "maxY": 10046.0, "series": [{"data": [[0.0, 592.0], [0.1, 634.0], [0.2, 696.0], [0.3, 708.0], [0.4, 718.0], [0.5, 723.0], [0.6, 737.0], [0.7, 745.0], [0.8, 748.0], [0.9, 753.0], [1.0, 756.0], [1.1, 757.0], [1.2, 758.0], [1.3, 762.0], [1.4, 766.0], [1.5, 768.0], [1.6, 770.0], [1.7, 771.0], [1.8, 774.0], [1.9, 775.0], [2.0, 777.0], [2.1, 779.0], [2.2, 781.0], [2.3, 784.0], [2.4, 786.0], [2.5, 787.0], [2.6, 790.0], [2.7, 792.0], [2.8, 793.0], [2.9, 796.0], [3.0, 798.0], [3.1, 801.0], [3.2, 804.0], [3.3, 806.0], [3.4, 809.0], [3.5, 810.0], [3.6, 811.0], [3.7, 814.0], [3.8, 817.0], [3.9, 818.0], [4.0, 819.0], [4.1, 820.0], [4.2, 822.0], [4.3, 824.0], [4.4, 827.0], [4.5, 827.0], [4.6, 830.0], [4.7, 831.0], [4.8, 833.0], [4.9, 833.0], [5.0, 836.0], [5.1, 838.0], [5.2, 839.0], [5.3, 841.0], [5.4, 843.0], [5.5, 843.0], [5.6, 844.0], [5.7, 847.0], [5.8, 848.0], [5.9, 849.0], [6.0, 850.0], [6.1, 852.0], [6.2, 853.0], [6.3, 856.0], [6.4, 857.0], [6.5, 858.0], [6.6, 859.0], [6.7, 860.0], [6.8, 861.0], [6.9, 863.0], [7.0, 865.0], [7.1, 866.0], [7.2, 868.0], [7.3, 868.0], [7.4, 870.0], [7.5, 871.0], [7.6, 873.0], [7.7, 874.0], [7.8, 876.0], [7.9, 878.0], [8.0, 881.0], [8.1, 883.0], [8.2, 883.0], [8.3, 884.0], [8.4, 886.0], [8.5, 887.0], [8.6, 889.0], [8.7, 893.0], [8.8, 895.0], [8.9, 896.0], [9.0, 898.0], [9.1, 900.0], [9.2, 902.0], [9.3, 904.0], [9.4, 905.0], [9.5, 905.0], [9.6, 908.0], [9.7, 909.0], [9.8, 913.0], [9.9, 915.0], [10.0, 917.0], [10.1, 920.0], [10.2, 921.0], [10.3, 925.0], [10.4, 926.0], [10.5, 928.0], [10.6, 930.0], [10.7, 933.0], [10.8, 939.0], [10.9, 943.0], [11.0, 945.0], [11.1, 951.0], [11.2, 955.0], [11.3, 957.0], [11.4, 961.0], [11.5, 965.0], [11.6, 971.0], [11.7, 975.0], [11.8, 978.0], [11.9, 985.0], [12.0, 988.0], [12.1, 994.0], [12.2, 1001.0], [12.3, 1003.0], [12.4, 1007.0], [12.5, 1010.0], [12.6, 1012.0], [12.7, 1014.0], [12.8, 1019.0], [12.9, 1022.0], [13.0, 1027.0], [13.1, 1030.0], [13.2, 1039.0], [13.3, 1040.0], [13.4, 1045.0], [13.5, 1047.0], [13.6, 1049.0], [13.7, 1051.0], [13.8, 1056.0], [13.9, 1058.0], [14.0, 1063.0], [14.1, 1065.0], [14.2, 1067.0], [14.3, 1072.0], [14.4, 1074.0], [14.5, 1075.0], [14.6, 1077.0], [14.7, 1080.0], [14.8, 1083.0], [14.9, 1086.0], [15.0, 1088.0], [15.1, 1090.0], [15.2, 1095.0], [15.3, 1096.0], [15.4, 1098.0], [15.5, 1100.0], [15.6, 1102.0], [15.7, 1105.0], [15.8, 1109.0], [15.9, 1112.0], [16.0, 1116.0], [16.1, 1119.0], [16.2, 1123.0], [16.3, 1125.0], [16.4, 1127.0], [16.5, 1129.0], [16.6, 1133.0], [16.7, 1134.0], [16.8, 1137.0], [16.9, 1139.0], [17.0, 1141.0], [17.1, 1142.0], [17.2, 1145.0], [17.3, 1146.0], [17.4, 1150.0], [17.5, 1152.0], [17.6, 1156.0], [17.7, 1158.0], [17.8, 1159.0], [17.9, 1161.0], [18.0, 1163.0], [18.1, 1165.0], [18.2, 1170.0], [18.3, 1174.0], [18.4, 1175.0], [18.5, 1180.0], [18.6, 1182.0], [18.7, 1185.0], [18.8, 1186.0], [18.9, 1188.0], [19.0, 1189.0], [19.1, 1190.0], [19.2, 1191.0], [19.3, 1193.0], [19.4, 1196.0], [19.5, 1199.0], [19.6, 1200.0], [19.7, 1202.0], [19.8, 1203.0], [19.9, 1204.0], [20.0, 1206.0], [20.1, 1209.0], [20.2, 1212.0], [20.3, 1213.0], [20.4, 1214.0], [20.5, 1216.0], [20.6, 1219.0], [20.7, 1220.0], [20.8, 1221.0], [20.9, 1225.0], [21.0, 1230.0], [21.1, 1232.0], [21.2, 1234.0], [21.3, 1236.0], [21.4, 1238.0], [21.5, 1239.0], [21.6, 1242.0], [21.7, 1243.0], [21.8, 1244.0], [21.9, 1246.0], [22.0, 1250.0], [22.1, 1251.0], [22.2, 1256.0], [22.3, 1258.0], [22.4, 1260.0], [22.5, 1263.0], [22.6, 1265.0], [22.7, 1270.0], [22.8, 1272.0], [22.9, 1273.0], [23.0, 1277.0], [23.1, 1281.0], [23.2, 1285.0], [23.3, 1288.0], [23.4, 1290.0], [23.5, 1293.0], [23.6, 1296.0], [23.7, 1299.0], [23.8, 1299.0], [23.9, 1301.0], [24.0, 1303.0], [24.1, 1305.0], [24.2, 1307.0], [24.3, 1309.0], [24.4, 1312.0], [24.5, 1314.0], [24.6, 1315.0], [24.7, 1317.0], [24.8, 1319.0], [24.9, 1321.0], [25.0, 1322.0], [25.1, 1323.0], [25.2, 1325.0], [25.3, 1327.0], [25.4, 1329.0], [25.5, 1330.0], [25.6, 1331.0], [25.7, 1332.0], [25.8, 1334.0], [25.9, 1335.0], [26.0, 1336.0], [26.1, 1337.0], [26.2, 1338.0], [26.3, 1340.0], [26.4, 1344.0], [26.5, 1345.0], [26.6, 1346.0], [26.7, 1349.0], [26.8, 1351.0], [26.9, 1353.0], [27.0, 1355.0], [27.1, 1357.0], [27.2, 1360.0], [27.3, 1361.0], [27.4, 1366.0], [27.5, 1368.0], [27.6, 1370.0], [27.7, 1372.0], [27.8, 1374.0], [27.9, 1374.0], [28.0, 1378.0], [28.1, 1381.0], [28.2, 1383.0], [28.3, 1386.0], [28.4, 1387.0], [28.5, 1388.0], [28.6, 1390.0], [28.7, 1394.0], [28.8, 1395.0], [28.9, 1396.0], [29.0, 1398.0], [29.1, 1401.0], [29.2, 1403.0], [29.3, 1404.0], [29.4, 1406.0], [29.5, 1408.0], [29.6, 1411.0], [29.7, 1412.0], [29.8, 1412.0], [29.9, 1414.0], [30.0, 1415.0], [30.1, 1418.0], [30.2, 1421.0], [30.3, 1424.0], [30.4, 1425.0], [30.5, 1427.0], [30.6, 1430.0], [30.7, 1431.0], [30.8, 1436.0], [30.9, 1441.0], [31.0, 1443.0], [31.1, 1445.0], [31.2, 1447.0], [31.3, 1449.0], [31.4, 1451.0], [31.5, 1453.0], [31.6, 1456.0], [31.7, 1461.0], [31.8, 1462.0], [31.9, 1464.0], [32.0, 1470.0], [32.1, 1473.0], [32.2, 1476.0], [32.3, 1479.0], [32.4, 1481.0], [32.5, 1483.0], [32.6, 1485.0], [32.7, 1490.0], [32.8, 1492.0], [32.9, 1494.0], [33.0, 1496.0], [33.1, 1499.0], [33.2, 1503.0], [33.3, 1507.0], [33.4, 1509.0], [33.5, 1509.0], [33.6, 1511.0], [33.7, 1513.0], [33.8, 1517.0], [33.9, 1519.0], [34.0, 1522.0], [34.1, 1523.0], [34.2, 1525.0], [34.3, 1526.0], [34.4, 1528.0], [34.5, 1529.0], [34.6, 1531.0], [34.7, 1533.0], [34.8, 1534.0], [34.9, 1536.0], [35.0, 1538.0], [35.1, 1539.0], [35.2, 1542.0], [35.3, 1543.0], [35.4, 1545.0], [35.5, 1548.0], [35.6, 1550.0], [35.7, 1551.0], [35.8, 1555.0], [35.9, 1556.0], [36.0, 1559.0], [36.1, 1561.0], [36.2, 1563.0], [36.3, 1565.0], [36.4, 1567.0], [36.5, 1569.0], [36.6, 1571.0], [36.7, 1572.0], [36.8, 1574.0], [36.9, 1576.0], [37.0, 1577.0], [37.1, 1579.0], [37.2, 1582.0], [37.3, 1585.0], [37.4, 1588.0], [37.5, 1590.0], [37.6, 1592.0], [37.7, 1594.0], [37.8, 1596.0], [37.9, 1600.0], [38.0, 1601.0], [38.1, 1603.0], [38.2, 1605.0], [38.3, 1607.0], [38.4, 1607.0], [38.5, 1613.0], [38.6, 1615.0], [38.7, 1617.0], [38.8, 1619.0], [38.9, 1622.0], [39.0, 1623.0], [39.1, 1625.0], [39.2, 1626.0], [39.3, 1628.0], [39.4, 1629.0], [39.5, 1631.0], [39.6, 1634.0], [39.7, 1636.0], [39.8, 1637.0], [39.9, 1639.0], [40.0, 1640.0], [40.1, 1643.0], [40.2, 1645.0], [40.3, 1647.0], [40.4, 1649.0], [40.5, 1651.0], [40.6, 1653.0], [40.7, 1654.0], [40.8, 1657.0], [40.9, 1659.0], [41.0, 1661.0], [41.1, 1663.0], [41.2, 1666.0], [41.3, 1668.0], [41.4, 1670.0], [41.5, 1671.0], [41.6, 1673.0], [41.7, 1674.0], [41.8, 1675.0], [41.9, 1678.0], [42.0, 1679.0], [42.1, 1681.0], [42.2, 1682.0], [42.3, 1684.0], [42.4, 1685.0], [42.5, 1686.0], [42.6, 1688.0], [42.7, 1690.0], [42.8, 1692.0], [42.9, 1693.0], [43.0, 1695.0], [43.1, 1696.0], [43.2, 1697.0], [43.3, 1699.0], [43.4, 1700.0], [43.5, 1702.0], [43.6, 1703.0], [43.7, 1704.0], [43.8, 1705.0], [43.9, 1707.0], [44.0, 1708.0], [44.1, 1712.0], [44.2, 1714.0], [44.3, 1716.0], [44.4, 1717.0], [44.5, 1721.0], [44.6, 1722.0], [44.7, 1724.0], [44.8, 1726.0], [44.9, 1727.0], [45.0, 1729.0], [45.1, 1731.0], [45.2, 1733.0], [45.3, 1734.0], [45.4, 1737.0], [45.5, 1738.0], [45.6, 1739.0], [45.7, 1740.0], [45.8, 1743.0], [45.9, 1744.0], [46.0, 1745.0], [46.1, 1747.0], [46.2, 1749.0], [46.3, 1750.0], [46.4, 1752.0], [46.5, 1753.0], [46.6, 1755.0], [46.7, 1756.0], [46.8, 1760.0], [46.9, 1761.0], [47.0, 1763.0], [47.1, 1764.0], [47.2, 1766.0], [47.3, 1767.0], [47.4, 1769.0], [47.5, 1771.0], [47.6, 1772.0], [47.7, 1774.0], [47.8, 1775.0], [47.9, 1778.0], [48.0, 1781.0], [48.1, 1783.0], [48.2, 1785.0], [48.3, 1787.0], [48.4, 1788.0], [48.5, 1791.0], [48.6, 1792.0], [48.7, 1793.0], [48.8, 1795.0], [48.9, 1797.0], [49.0, 1801.0], [49.1, 1803.0], [49.2, 1806.0], [49.3, 1807.0], [49.4, 1808.0], [49.5, 1809.0], [49.6, 1811.0], [49.7, 1814.0], [49.8, 1816.0], [49.9, 1817.0], [50.0, 1818.0], [50.1, 1820.0], [50.2, 1823.0], [50.3, 1826.0], [50.4, 1828.0], [50.5, 1829.0], [50.6, 1831.0], [50.7, 1833.0], [50.8, 1835.0], [50.9, 1838.0], [51.0, 1841.0], [51.1, 1843.0], [51.2, 1845.0], [51.3, 1847.0], [51.4, 1849.0], [51.5, 1852.0], [51.6, 1855.0], [51.7, 1857.0], [51.8, 1859.0], [51.9, 1861.0], [52.0, 1865.0], [52.1, 1866.0], [52.2, 1871.0], [52.3, 1872.0], [52.4, 1873.0], [52.5, 1875.0], [52.6, 1876.0], [52.7, 1878.0], [52.8, 1881.0], [52.9, 1884.0], [53.0, 1885.0], [53.1, 1887.0], [53.2, 1888.0], [53.3, 1888.0], [53.4, 1891.0], [53.5, 1893.0], [53.6, 1895.0], [53.7, 1899.0], [53.8, 1901.0], [53.9, 1902.0], [54.0, 1905.0], [54.1, 1907.0], [54.2, 1908.0], [54.3, 1909.0], [54.4, 1910.0], [54.5, 1911.0], [54.6, 1912.0], [54.7, 1914.0], [54.8, 1916.0], [54.9, 1919.0], [55.0, 1919.0], [55.1, 1921.0], [55.2, 1921.0], [55.3, 1922.0], [55.4, 1924.0], [55.5, 1925.0], [55.6, 1925.0], [55.7, 1926.0], [55.8, 1929.0], [55.9, 1931.0], [56.0, 1933.0], [56.1, 1934.0], [56.2, 1935.0], [56.3, 1939.0], [56.4, 1940.0], [56.5, 1942.0], [56.6, 1943.0], [56.7, 1946.0], [56.8, 1947.0], [56.9, 1950.0], [57.0, 1953.0], [57.1, 1954.0], [57.2, 1956.0], [57.3, 1959.0], [57.4, 1962.0], [57.5, 1963.0], [57.6, 1965.0], [57.7, 1966.0], [57.8, 1967.0], [57.9, 1968.0], [58.0, 1971.0], [58.1, 1973.0], [58.2, 1975.0], [58.3, 1977.0], [58.4, 1978.0], [58.5, 1980.0], [58.6, 1982.0], [58.7, 1983.0], [58.8, 1986.0], [58.9, 1987.0], [59.0, 1989.0], [59.1, 1993.0], [59.2, 1994.0], [59.3, 1997.0], [59.4, 1998.0], [59.5, 2000.0], [59.6, 2003.0], [59.7, 2003.0], [59.8, 2005.0], [59.9, 2007.0], [60.0, 2010.0], [60.1, 2012.0], [60.2, 2016.0], [60.3, 2019.0], [60.4, 2020.0], [60.5, 2022.0], [60.6, 2024.0], [60.7, 2024.0], [60.8, 2025.0], [60.9, 2027.0], [61.0, 2030.0], [61.1, 2032.0], [61.2, 2035.0], [61.3, 2037.0], [61.4, 2037.0], [61.5, 2039.0], [61.6, 2042.0], [61.7, 2044.0], [61.8, 2046.0], [61.9, 2048.0], [62.0, 2049.0], [62.1, 2050.0], [62.2, 2053.0], [62.3, 2054.0], [62.4, 2056.0], [62.5, 2057.0], [62.6, 2061.0], [62.7, 2063.0], [62.8, 2065.0], [62.9, 2068.0], [63.0, 2070.0], [63.1, 2071.0], [63.2, 2075.0], [63.3, 2077.0], [63.4, 2079.0], [63.5, 2082.0], [63.6, 2084.0], [63.7, 2087.0], [63.8, 2089.0], [63.9, 2090.0], [64.0, 2093.0], [64.1, 2094.0], [64.2, 2097.0], [64.3, 2101.0], [64.4, 2104.0], [64.5, 2106.0], [64.6, 2108.0], [64.7, 2109.0], [64.8, 2112.0], [64.9, 2115.0], [65.0, 2116.0], [65.1, 2119.0], [65.2, 2125.0], [65.3, 2131.0], [65.4, 2136.0], [65.5, 2138.0], [65.6, 2141.0], [65.7, 2143.0], [65.8, 2146.0], [65.9, 2149.0], [66.0, 2153.0], [66.1, 2153.0], [66.2, 2154.0], [66.3, 2156.0], [66.4, 2161.0], [66.5, 2162.0], [66.6, 2164.0], [66.7, 2166.0], [66.8, 2172.0], [66.9, 2176.0], [67.0, 2178.0], [67.1, 2181.0], [67.2, 2184.0], [67.3, 2185.0], [67.4, 2187.0], [67.5, 2190.0], [67.6, 2191.0], [67.7, 2193.0], [67.8, 2194.0], [67.9, 2196.0], [68.0, 2198.0], [68.1, 2201.0], [68.2, 2205.0], [68.3, 2207.0], [68.4, 2210.0], [68.5, 2212.0], [68.6, 2215.0], [68.7, 2217.0], [68.8, 2218.0], [68.9, 2224.0], [69.0, 2228.0], [69.1, 2230.0], [69.2, 2232.0], [69.3, 2235.0], [69.4, 2240.0], [69.5, 2245.0], [69.6, 2250.0], [69.7, 2255.0], [69.8, 2259.0], [69.9, 2262.0], [70.0, 2265.0], [70.1, 2268.0], [70.2, 2269.0], [70.3, 2271.0], [70.4, 2273.0], [70.5, 2275.0], [70.6, 2279.0], [70.7, 2283.0], [70.8, 2285.0], [70.9, 2286.0], [71.0, 2289.0], [71.1, 2290.0], [71.2, 2291.0], [71.3, 2294.0], [71.4, 2298.0], [71.5, 2301.0], [71.6, 2304.0], [71.7, 2308.0], [71.8, 2310.0], [71.9, 2315.0], [72.0, 2319.0], [72.1, 2320.0], [72.2, 2324.0], [72.3, 2328.0], [72.4, 2333.0], [72.5, 2337.0], [72.6, 2343.0], [72.7, 2345.0], [72.8, 2348.0], [72.9, 2353.0], [73.0, 2354.0], [73.1, 2356.0], [73.2, 2359.0], [73.3, 2362.0], [73.4, 2363.0], [73.5, 2366.0], [73.6, 2371.0], [73.7, 2373.0], [73.8, 2376.0], [73.9, 2382.0], [74.0, 2386.0], [74.1, 2390.0], [74.2, 2392.0], [74.3, 2395.0], [74.4, 2397.0], [74.5, 2399.0], [74.6, 2402.0], [74.7, 2406.0], [74.8, 2409.0], [74.9, 2413.0], [75.0, 2417.0], [75.1, 2420.0], [75.2, 2423.0], [75.3, 2432.0], [75.4, 2435.0], [75.5, 2439.0], [75.6, 2443.0], [75.7, 2446.0], [75.8, 2451.0], [75.9, 2455.0], [76.0, 2457.0], [76.1, 2460.0], [76.2, 2463.0], [76.3, 2468.0], [76.4, 2471.0], [76.5, 2482.0], [76.6, 2485.0], [76.7, 2487.0], [76.8, 2491.0], [76.9, 2498.0], [77.0, 2502.0], [77.1, 2505.0], [77.2, 2507.0], [77.3, 2511.0], [77.4, 2514.0], [77.5, 2516.0], [77.6, 2518.0], [77.7, 2523.0], [77.8, 2525.0], [77.9, 2532.0], [78.0, 2535.0], [78.1, 2537.0], [78.2, 2540.0], [78.3, 2543.0], [78.4, 2548.0], [78.5, 2552.0], [78.6, 2554.0], [78.7, 2557.0], [78.8, 2563.0], [78.9, 2566.0], [79.0, 2570.0], [79.1, 2572.0], [79.2, 2576.0], [79.3, 2581.0], [79.4, 2584.0], [79.5, 2588.0], [79.6, 2590.0], [79.7, 2594.0], [79.8, 2602.0], [79.9, 2603.0], [80.0, 2608.0], [80.1, 2612.0], [80.2, 2615.0], [80.3, 2618.0], [80.4, 2620.0], [80.5, 2624.0], [80.6, 2627.0], [80.7, 2631.0], [80.8, 2633.0], [80.9, 2636.0], [81.0, 2640.0], [81.1, 2644.0], [81.2, 2648.0], [81.3, 2650.0], [81.4, 2656.0], [81.5, 2661.0], [81.6, 2665.0], [81.7, 2668.0], [81.8, 2673.0], [81.9, 2675.0], [82.0, 2679.0], [82.1, 2681.0], [82.2, 2684.0], [82.3, 2686.0], [82.4, 2687.0], [82.5, 2689.0], [82.6, 2696.0], [82.7, 2698.0], [82.8, 2701.0], [82.9, 2703.0], [83.0, 2708.0], [83.1, 2710.0], [83.2, 2714.0], [83.3, 2718.0], [83.4, 2720.0], [83.5, 2724.0], [83.6, 2728.0], [83.7, 2733.0], [83.8, 2735.0], [83.9, 2737.0], [84.0, 2740.0], [84.1, 2742.0], [84.2, 2748.0], [84.3, 2753.0], [84.4, 2760.0], [84.5, 2766.0], [84.6, 2772.0], [84.7, 2778.0], [84.8, 2787.0], [84.9, 2791.0], [85.0, 2799.0], [85.1, 2803.0], [85.2, 2807.0], [85.3, 2822.0], [85.4, 2825.0], [85.5, 2828.0], [85.6, 2835.0], [85.7, 2837.0], [85.8, 2840.0], [85.9, 2843.0], [86.0, 2845.0], [86.1, 2849.0], [86.2, 2860.0], [86.3, 2865.0], [86.4, 2871.0], [86.5, 2877.0], [86.6, 2880.0], [86.7, 2883.0], [86.8, 2884.0], [86.9, 2890.0], [87.0, 2895.0], [87.1, 2898.0], [87.2, 2909.0], [87.3, 2912.0], [87.4, 2915.0], [87.5, 2922.0], [87.6, 2926.0], [87.7, 2931.0], [87.8, 2938.0], [87.9, 2943.0], [88.0, 2951.0], [88.1, 2959.0], [88.2, 2962.0], [88.3, 2970.0], [88.4, 2975.0], [88.5, 2978.0], [88.6, 2989.0], [88.7, 2997.0], [88.8, 3006.0], [88.9, 3012.0], [89.0, 3020.0], [89.1, 3029.0], [89.2, 3038.0], [89.3, 3048.0], [89.4, 3059.0], [89.5, 3065.0], [89.6, 3071.0], [89.7, 3083.0], [89.8, 3093.0], [89.9, 3099.0], [90.0, 3110.0], [90.1, 3112.0], [90.2, 3120.0], [90.3, 3129.0], [90.4, 3136.0], [90.5, 3143.0], [90.6, 3148.0], [90.7, 3157.0], [90.8, 3158.0], [90.9, 3169.0], [91.0, 3183.0], [91.1, 3189.0], [91.2, 3194.0], [91.3, 3199.0], [91.4, 3206.0], [91.5, 3211.0], [91.6, 3219.0], [91.7, 3229.0], [91.8, 3232.0], [91.9, 3245.0], [92.0, 3266.0], [92.1, 3274.0], [92.2, 3292.0], [92.3, 3298.0], [92.4, 3303.0], [92.5, 3315.0], [92.6, 3320.0], [92.7, 3338.0], [92.8, 3344.0], [92.9, 3351.0], [93.0, 3358.0], [93.1, 3363.0], [93.2, 3374.0], [93.3, 3386.0], [93.4, 3394.0], [93.5, 3405.0], [93.6, 3416.0], [93.7, 3424.0], [93.8, 3430.0], [93.9, 3436.0], [94.0, 3451.0], [94.1, 3459.0], [94.2, 3465.0], [94.3, 3479.0], [94.4, 3485.0], [94.5, 3496.0], [94.6, 3504.0], [94.7, 3509.0], [94.8, 3526.0], [94.9, 3543.0], [95.0, 3557.0], [95.1, 3566.0], [95.2, 3586.0], [95.3, 3613.0], [95.4, 3635.0], [95.5, 3651.0], [95.6, 3661.0], [95.7, 3678.0], [95.8, 3685.0], [95.9, 3698.0], [96.0, 3721.0], [96.1, 3748.0], [96.2, 3757.0], [96.3, 3791.0], [96.4, 3822.0], [96.5, 3841.0], [96.6, 3851.0], [96.7, 3865.0], [96.8, 3917.0], [96.9, 3961.0], [97.0, 4029.0], [97.1, 4056.0], [97.2, 4070.0], [97.3, 4094.0], [97.4, 4131.0], [97.5, 4150.0], [97.6, 4181.0], [97.7, 4217.0], [97.8, 4253.0], [97.9, 4294.0], [98.0, 4383.0], [98.1, 4451.0], [98.2, 4474.0], [98.3, 4555.0], [98.4, 4596.0], [98.5, 4674.0], [98.6, 4750.0], [98.7, 4837.0], [98.8, 4877.0], [98.9, 4954.0], [99.0, 5104.0], [99.1, 5214.0], [99.2, 5260.0], [99.3, 5533.0], [99.4, 5667.0], [99.5, 5969.0], [99.6, 6255.0], [99.7, 6460.0], [99.8, 6965.0], [99.9, 7033.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 500.0, "maxY": 313.0, "series": [{"data": [[600.0, 10.0], [700.0, 147.0], [800.0, 313.0], [900.0, 161.0], [1000.0, 171.0], [1100.0, 211.0], [1200.0, 222.0], [1300.0, 272.0], [1400.0, 210.0], [1500.0, 249.0], [1600.0, 284.0], [1700.0, 289.0], [1800.0, 250.0], [1900.0, 295.0], [2000.0, 252.0], [2100.0, 197.0], [2200.0, 175.0], [2300.0, 159.0], [2400.0, 127.0], [2500.0, 145.0], [2600.0, 155.0], [2700.0, 118.0], [2800.0, 109.0], [2900.0, 82.0], [3000.0, 63.0], [3100.0, 72.0], [3200.0, 54.0], [3300.0, 56.0], [3400.0, 57.0], [3500.0, 38.0], [3700.0, 22.0], [3600.0, 34.0], [3800.0, 22.0], [3900.0, 10.0], [4000.0, 19.0], [4200.0, 12.0], [4300.0, 6.0], [4100.0, 19.0], [4500.0, 7.0], [4400.0, 12.0], [4600.0, 7.0], [4800.0, 11.0], [4700.0, 6.0], [5100.0, 5.0], [5000.0, 4.0], [4900.0, 3.0], [5200.0, 6.0], [5300.0, 2.0], [5600.0, 4.0], [5400.0, 1.0], [5500.0, 4.0], [5700.0, 2.0], [5900.0, 3.0], [6000.0, 2.0], [6200.0, 6.0], [6300.0, 1.0], [6400.0, 1.0], [6700.0, 2.0], [6800.0, 1.0], [6900.0, 2.0], [7000.0, 6.0], [7300.0, 1.0], [7500.0, 1.0], [10000.0, 2.0], [500.0, 1.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 10000.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 1720.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 3470.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1720.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 3470.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 11.241379310344827, "minX": 1.60281492E12, "maxY": 12.0, "series": [{"data": [[1.6028154E12, 12.0], [1.6028157E12, 12.0], [1.6028151E12, 12.0], [1.60281504E12, 12.0], [1.60281516E12, 12.0], [1.60281576E12, 11.241379310344827], [1.60281546E12, 12.0], [1.60281492E12, 12.0], [1.60281552E12, 12.0], [1.60281558E12, 12.0], [1.60281522E12, 12.0], [1.60281534E12, 12.0], [1.60281528E12, 12.0], [1.60281498E12, 12.0], [1.60281564E12, 12.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60281576E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 1315.0, "minX": 1.0, "maxY": 3653.0, "series": [{"data": [[8.0, 1501.0], [4.0, 2140.0], [2.0, 3653.0], [1.0, 3605.0], [9.0, 2618.0], [10.0, 2544.0], [5.0, 2138.0], [11.0, 1315.0], [12.0, 1966.7478277659693], [6.0, 2191.0], [3.0, 3651.0], [7.0, 1336.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[11.987283236994216, 1967.7223506743649]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 12.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 661.5, "minX": 1.60281492E12, "maxY": 2159846.8833333333, "series": [{"data": [[1.6028154E12, 1666975.8166666667], [1.6028157E12, 1671853.3333333333], [1.6028151E12, 2159846.8833333333], [1.60281504E12, 1197338.95], [1.60281516E12, 1927237.1], [1.60281576E12, 367294.31666666665], [1.60281546E12, 1177773.5], [1.60281492E12, 1668521.2], [1.60281552E12, 2058464.4666666666], [1.60281558E12, 1696313.1], [1.60281522E12, 1864577.0333333334], [1.60281534E12, 1788123.4333333333], [1.60281528E12, 1528246.6166666667], [1.60281498E12, 1594793.5833333333], [1.60281564E12, 1605429.9333333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6028154E12, 2739.6], [1.6028157E12, 2606.0], [1.6028151E12, 2725.766666666667], [1.60281504E12, 2966.55], [1.60281516E12, 2871.1833333333334], [1.60281576E12, 661.5], [1.60281546E12, 2793.266666666667], [1.60281492E12, 2081.7], [1.60281552E12, 2403.05], [1.60281558E12, 3226.55], [1.60281522E12, 2788.3333333333335], [1.60281534E12, 2346.0], [1.60281528E12, 2698.7], [1.60281498E12, 2675.4166666666665], [1.60281564E12, 2993.7166666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60281576E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 1712.2441314553982, "minX": 1.60281492E12, "maxY": 2401.5632183908033, "series": [{"data": [[1.6028154E12, 1888.7889182058036], [1.6028157E12, 2067.2745664739887], [1.6028151E12, 2000.7604456824504], [1.60281504E12, 1775.083129584352], [1.60281516E12, 1889.9208443271752], [1.60281576E12, 2401.5632183908033], [1.60281546E12, 1895.4881889763767], [1.60281492E12, 2296.4006968641106], [1.60281552E12, 2176.088957055213], [1.60281558E12, 1712.2441314553982], [1.60281522E12, 1945.0901639344258], [1.60281534E12, 2313.9501557632384], [1.60281528E12, 1970.391666666667], [1.60281498E12, 1925.405405405406], [1.60281564E12, 1815.6395939086294]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60281576E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 1710.9201877934274, "minX": 1.60281492E12, "maxY": 2400.1034482758623, "series": [{"data": [[1.6028154E12, 1887.2928759894464], [1.6028157E12, 2065.5289017341033], [1.6028151E12, 1998.07799442897], [1.60281504E12, 1773.6894865525674], [1.60281516E12, 1887.6992084432727], [1.60281576E12, 2400.1034482758623], [1.60281546E12, 1894.3412073490815], [1.60281492E12, 2293.8745644599303], [1.60281552E12, 2173.868098159506], [1.60281558E12, 1710.9201877934274], [1.60281522E12, 1942.9781420765028], [1.60281534E12, 2312.0778816199368], [1.60281528E12, 1968.516666666667], [1.60281498E12, 1923.445945945946], [1.60281564E12, 1814.1928934010175]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60281576E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.022988505747126436, "minX": 1.60281492E12, "maxY": 0.39721254355400704, "series": [{"data": [[1.6028154E12, 0.03957783641160951], [1.6028157E12, 0.03468208092485547], [1.6028151E12, 0.03621169916434541], [1.60281504E12, 0.039119804400977974], [1.60281516E12, 0.039577836411609536], [1.60281576E12, 0.022988505747126436], [1.60281546E12, 0.03674540682414703], [1.60281492E12, 0.39721254355400704], [1.60281552E12, 0.03680981595092024], [1.60281558E12, 0.02582159624413147], [1.60281522E12, 0.038251366120218615], [1.60281534E12, 0.04049844236760128], [1.60281528E12, 0.03611111111111112], [1.60281498E12, 0.037837837837837875], [1.60281564E12, 0.03807106598984774]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60281576E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 592.0, "minX": 1.60281492E12, "maxY": 10046.0, "series": [{"data": [[1.6028154E12, 7028.0], [1.6028157E12, 5664.0], [1.6028151E12, 5260.0], [1.60281504E12, 5958.0], [1.60281516E12, 5088.0], [1.60281576E12, 4868.0], [1.60281546E12, 5533.0], [1.60281492E12, 7033.0], [1.60281552E12, 4495.0], [1.60281558E12, 4305.0], [1.60281522E12, 4742.0], [1.60281534E12, 10046.0], [1.60281528E12, 7553.0], [1.60281498E12, 7314.0], [1.60281564E12, 3973.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6028154E12, 877.2599997282028], [1.6028157E12, 690.7379995036125], [1.6028151E12, 788.4399994850158], [1.60281504E12, 749.4499995112419], [1.60281516E12, 732.8399998188019], [1.60281576E12, 1260.0], [1.60281546E12, 751.0659993624687], [1.60281492E12, 770.7359994506836], [1.60281552E12, 1012.9429999220371], [1.60281558E12, 804.3719995927811], [1.60281522E12, 790.6059998250007], [1.60281534E12, 809.225997159481], [1.60281528E12, 640.4739977622032], [1.60281498E12, 796.1019984078407], [1.60281564E12, 768.7749995291233]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6028154E12, 878.2860001087189], [1.6028157E12, 692.611800198555], [1.6028151E12, 790.3840002059936], [1.60281504E12, 751.1180000782012], [1.60281516E12, 733.5240000724792], [1.60281576E12, 1260.0], [1.60281546E12, 753.4726002550125], [1.60281492E12, 772.8096002197266], [1.60281552E12, 1013.2373000311851], [1.60281558E12, 806.1365002036094], [1.60281522E12, 791.2666000699996], [1.60281534E12, 816.568200583458], [1.60281528E12, 648.9214008951187], [1.60281498E12, 802.1122006368637], [1.60281564E12, 770.5525001883507]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6028154E12, 877.8299998641014], [1.6028157E12, 691.7789997518063], [1.6028151E12, 789.5199997425079], [1.60281504E12, 750.474999755621], [1.60281516E12, 733.2199999094009], [1.60281576E12, 1260.0], [1.60281546E12, 752.4029996812344], [1.60281492E12, 771.8879997253418], [1.60281552E12, 1013.1064999610186], [1.60281558E12, 805.2824997454882], [1.60281522E12, 790.9729999125004], [1.60281534E12, 814.1209992706775], [1.60281528E12, 645.1669988811016], [1.60281498E12, 799.4409992039203], [1.60281564E12, 769.7624997645617]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.6028154E12, 856.0], [1.6028157E12, 604.0], [1.6028151E12, 747.0], [1.60281504E12, 735.0], [1.60281516E12, 630.0], [1.60281576E12, 1260.0], [1.60281546E12, 746.0], [1.60281492E12, 762.0], [1.60281552E12, 969.0], [1.60281558E12, 783.0], [1.60281522E12, 769.0], [1.60281534E12, 756.0], [1.60281528E12, 592.0], [1.60281498E12, 760.0], [1.60281564E12, 758.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6028154E12, 1702.0], [1.6028157E12, 1952.5], [1.6028151E12, 1911.0], [1.60281504E12, 1505.0], [1.60281516E12, 1830.0], [1.60281576E12, 2258.0], [1.60281546E12, 1693.0], [1.60281492E12, 2045.0], [1.60281552E12, 1988.5], [1.60281558E12, 1533.0], [1.60281522E12, 1807.5], [1.60281534E12, 2068.0], [1.60281528E12, 1903.5], [1.60281498E12, 1771.5], [1.60281564E12, 1810.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60281576E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 821.5, "minX": 1.0, "maxY": 3197.0, "series": [{"data": [[8.0, 1706.0], [2.0, 2989.0], [9.0, 1457.0], [10.0, 1313.5], [11.0, 1076.0], [3.0, 2563.0], [12.0, 965.0], [13.0, 881.0], [14.0, 849.0], [15.0, 841.0], [1.0, 3197.0], [4.0, 2356.0], [16.0, 821.5], [5.0, 2184.0], [6.0, 1940.0], [7.0, 1872.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 16.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 821.5, "minX": 1.0, "maxY": 3195.0, "series": [{"data": [[8.0, 1705.0], [2.0, 2986.0], [9.0, 1454.5], [10.0, 1313.5], [11.0, 1076.0], [3.0, 2558.0], [12.0, 965.0], [13.0, 880.0], [14.0, 848.5], [15.0, 841.0], [1.0, 3195.0], [4.0, 2353.0], [16.0, 821.5], [5.0, 2182.0], [6.0, 1938.0], [7.0, 1870.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 16.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1.25, "minX": 1.60281492E12, "maxY": 7.1, "series": [{"data": [[1.6028154E12, 6.3], [1.6028157E12, 5.766666666666667], [1.6028151E12, 5.983333333333333], [1.60281504E12, 6.816666666666666], [1.60281516E12, 6.316666666666666], [1.60281576E12, 1.25], [1.60281546E12, 6.366666666666666], [1.60281492E12, 4.983333333333333], [1.60281552E12, 5.433333333333334], [1.60281558E12, 7.1], [1.60281522E12, 6.1], [1.60281534E12, 5.35], [1.60281528E12, 6.0], [1.60281498E12, 6.166666666666667], [1.60281564E12, 6.566666666666666]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60281576E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1.45, "minX": 1.60281492E12, "maxY": 7.1, "series": [{"data": [[1.6028154E12, 6.316666666666666], [1.6028157E12, 5.766666666666667], [1.6028151E12, 5.983333333333333], [1.60281504E12, 6.816666666666666], [1.60281516E12, 6.316666666666666], [1.60281576E12, 1.45], [1.60281546E12, 6.35], [1.60281492E12, 4.783333333333333], [1.60281552E12, 5.433333333333334], [1.60281558E12, 7.1], [1.60281522E12, 6.1], [1.60281534E12, 5.35], [1.60281528E12, 6.0], [1.60281498E12, 6.166666666666667], [1.60281564E12, 6.566666666666666]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60281576E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.45, "minX": 1.60281492E12, "maxY": 7.1, "series": [{"data": [[1.6028154E12, 6.316666666666666], [1.6028157E12, 5.766666666666667], [1.6028151E12, 5.983333333333333], [1.60281504E12, 6.816666666666666], [1.60281516E12, 6.316666666666666], [1.60281576E12, 1.45], [1.60281546E12, 6.35], [1.60281492E12, 4.783333333333333], [1.60281552E12, 5.433333333333334], [1.60281558E12, 7.1], [1.60281522E12, 6.1], [1.60281534E12, 5.35], [1.60281528E12, 6.0], [1.60281498E12, 6.166666666666667], [1.60281564E12, 6.566666666666666]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60281576E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.45, "minX": 1.60281492E12, "maxY": 7.1, "series": [{"data": [[1.6028154E12, 6.316666666666666], [1.6028157E12, 5.766666666666667], [1.6028151E12, 5.983333333333333], [1.60281504E12, 6.816666666666666], [1.60281516E12, 6.316666666666666], [1.60281576E12, 1.45], [1.60281546E12, 6.35], [1.60281492E12, 4.783333333333333], [1.60281552E12, 5.433333333333334], [1.60281558E12, 7.1], [1.60281522E12, 6.1], [1.60281534E12, 5.35], [1.60281528E12, 6.0], [1.60281498E12, 6.166666666666667], [1.60281564E12, 6.566666666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60281576E12, "title": "Total Transactions Per Second"}},
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

