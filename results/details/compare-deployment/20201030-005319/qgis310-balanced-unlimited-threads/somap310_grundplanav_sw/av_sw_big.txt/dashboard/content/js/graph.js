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
        data: {"result": {"minY": 551.0, "minX": 0.0, "maxY": 8309.0, "series": [{"data": [[0.0, 551.0], [0.1, 606.0], [0.2, 642.0], [0.3, 709.0], [0.4, 715.0], [0.5, 732.0], [0.6, 736.0], [0.7, 739.0], [0.8, 745.0], [0.9, 747.0], [1.0, 753.0], [1.1, 757.0], [1.2, 760.0], [1.3, 762.0], [1.4, 765.0], [1.5, 768.0], [1.6, 769.0], [1.7, 771.0], [1.8, 771.0], [1.9, 773.0], [2.0, 775.0], [2.1, 777.0], [2.2, 778.0], [2.3, 781.0], [2.4, 782.0], [2.5, 783.0], [2.6, 784.0], [2.7, 787.0], [2.8, 789.0], [2.9, 791.0], [3.0, 793.0], [3.1, 793.0], [3.2, 793.0], [3.3, 795.0], [3.4, 797.0], [3.5, 798.0], [3.6, 800.0], [3.7, 802.0], [3.8, 803.0], [3.9, 807.0], [4.0, 809.0], [4.1, 810.0], [4.2, 812.0], [4.3, 815.0], [4.4, 816.0], [4.5, 818.0], [4.6, 819.0], [4.7, 820.0], [4.8, 822.0], [4.9, 824.0], [5.0, 824.0], [5.1, 826.0], [5.2, 827.0], [5.3, 828.0], [5.4, 829.0], [5.5, 831.0], [5.6, 834.0], [5.7, 836.0], [5.8, 838.0], [5.9, 839.0], [6.0, 841.0], [6.1, 842.0], [6.2, 844.0], [6.3, 846.0], [6.4, 849.0], [6.5, 852.0], [6.6, 854.0], [6.7, 856.0], [6.8, 857.0], [6.9, 860.0], [7.0, 861.0], [7.1, 862.0], [7.2, 862.0], [7.3, 865.0], [7.4, 866.0], [7.5, 868.0], [7.6, 870.0], [7.7, 873.0], [7.8, 875.0], [7.9, 877.0], [8.0, 879.0], [8.1, 881.0], [8.2, 882.0], [8.3, 884.0], [8.4, 886.0], [8.5, 888.0], [8.6, 889.0], [8.7, 891.0], [8.8, 893.0], [8.9, 895.0], [9.0, 896.0], [9.1, 898.0], [9.2, 901.0], [9.3, 901.0], [9.4, 903.0], [9.5, 907.0], [9.6, 909.0], [9.7, 910.0], [9.8, 913.0], [9.9, 918.0], [10.0, 922.0], [10.1, 925.0], [10.2, 929.0], [10.3, 931.0], [10.4, 933.0], [10.5, 935.0], [10.6, 940.0], [10.7, 942.0], [10.8, 944.0], [10.9, 945.0], [11.0, 947.0], [11.1, 952.0], [11.2, 954.0], [11.3, 955.0], [11.4, 957.0], [11.5, 959.0], [11.6, 965.0], [11.7, 971.0], [11.8, 976.0], [11.9, 980.0], [12.0, 982.0], [12.1, 986.0], [12.2, 993.0], [12.3, 996.0], [12.4, 999.0], [12.5, 1002.0], [12.6, 1005.0], [12.7, 1006.0], [12.8, 1012.0], [12.9, 1016.0], [13.0, 1019.0], [13.1, 1022.0], [13.2, 1025.0], [13.3, 1029.0], [13.4, 1030.0], [13.5, 1033.0], [13.6, 1037.0], [13.7, 1040.0], [13.8, 1042.0], [13.9, 1044.0], [14.0, 1049.0], [14.1, 1052.0], [14.2, 1055.0], [14.3, 1057.0], [14.4, 1058.0], [14.5, 1060.0], [14.6, 1062.0], [14.7, 1065.0], [14.8, 1067.0], [14.9, 1071.0], [15.0, 1076.0], [15.1, 1078.0], [15.2, 1081.0], [15.3, 1084.0], [15.4, 1085.0], [15.5, 1087.0], [15.6, 1089.0], [15.7, 1092.0], [15.8, 1096.0], [15.9, 1101.0], [16.0, 1102.0], [16.1, 1105.0], [16.2, 1108.0], [16.3, 1112.0], [16.4, 1116.0], [16.5, 1118.0], [16.6, 1120.0], [16.7, 1122.0], [16.8, 1126.0], [16.9, 1128.0], [17.0, 1129.0], [17.1, 1133.0], [17.2, 1137.0], [17.3, 1141.0], [17.4, 1144.0], [17.5, 1145.0], [17.6, 1148.0], [17.7, 1150.0], [17.8, 1153.0], [17.9, 1154.0], [18.0, 1156.0], [18.1, 1157.0], [18.2, 1159.0], [18.3, 1161.0], [18.4, 1163.0], [18.5, 1165.0], [18.6, 1167.0], [18.7, 1169.0], [18.8, 1171.0], [18.9, 1174.0], [19.0, 1175.0], [19.1, 1179.0], [19.2, 1180.0], [19.3, 1182.0], [19.4, 1185.0], [19.5, 1188.0], [19.6, 1191.0], [19.7, 1193.0], [19.8, 1195.0], [19.9, 1202.0], [20.0, 1203.0], [20.1, 1206.0], [20.2, 1207.0], [20.3, 1209.0], [20.4, 1212.0], [20.5, 1215.0], [20.6, 1218.0], [20.7, 1221.0], [20.8, 1223.0], [20.9, 1226.0], [21.0, 1227.0], [21.1, 1230.0], [21.2, 1232.0], [21.3, 1234.0], [21.4, 1236.0], [21.5, 1239.0], [21.6, 1242.0], [21.7, 1247.0], [21.8, 1248.0], [21.9, 1250.0], [22.0, 1252.0], [22.1, 1253.0], [22.2, 1258.0], [22.3, 1260.0], [22.4, 1264.0], [22.5, 1268.0], [22.6, 1271.0], [22.7, 1273.0], [22.8, 1275.0], [22.9, 1278.0], [23.0, 1279.0], [23.1, 1282.0], [23.2, 1286.0], [23.3, 1290.0], [23.4, 1293.0], [23.5, 1295.0], [23.6, 1296.0], [23.7, 1299.0], [23.8, 1300.0], [23.9, 1301.0], [24.0, 1303.0], [24.1, 1306.0], [24.2, 1308.0], [24.3, 1313.0], [24.4, 1315.0], [24.5, 1316.0], [24.6, 1321.0], [24.7, 1322.0], [24.8, 1324.0], [24.9, 1325.0], [25.0, 1328.0], [25.1, 1332.0], [25.2, 1336.0], [25.3, 1338.0], [25.4, 1339.0], [25.5, 1341.0], [25.6, 1343.0], [25.7, 1345.0], [25.8, 1347.0], [25.9, 1348.0], [26.0, 1350.0], [26.1, 1351.0], [26.2, 1354.0], [26.3, 1356.0], [26.4, 1358.0], [26.5, 1359.0], [26.6, 1360.0], [26.7, 1362.0], [26.8, 1364.0], [26.9, 1367.0], [27.0, 1368.0], [27.1, 1371.0], [27.2, 1372.0], [27.3, 1374.0], [27.4, 1377.0], [27.5, 1380.0], [27.6, 1383.0], [27.7, 1389.0], [27.8, 1391.0], [27.9, 1393.0], [28.0, 1394.0], [28.1, 1396.0], [28.2, 1399.0], [28.3, 1402.0], [28.4, 1403.0], [28.5, 1405.0], [28.6, 1407.0], [28.7, 1409.0], [28.8, 1413.0], [28.9, 1414.0], [29.0, 1417.0], [29.1, 1418.0], [29.2, 1420.0], [29.3, 1423.0], [29.4, 1424.0], [29.5, 1428.0], [29.6, 1430.0], [29.7, 1432.0], [29.8, 1436.0], [29.9, 1439.0], [30.0, 1441.0], [30.1, 1444.0], [30.2, 1446.0], [30.3, 1449.0], [30.4, 1451.0], [30.5, 1453.0], [30.6, 1456.0], [30.7, 1458.0], [30.8, 1463.0], [30.9, 1465.0], [31.0, 1466.0], [31.1, 1468.0], [31.2, 1471.0], [31.3, 1472.0], [31.4, 1473.0], [31.5, 1477.0], [31.6, 1480.0], [31.7, 1481.0], [31.8, 1482.0], [31.9, 1485.0], [32.0, 1487.0], [32.1, 1489.0], [32.2, 1493.0], [32.3, 1496.0], [32.4, 1499.0], [32.5, 1505.0], [32.6, 1506.0], [32.7, 1509.0], [32.8, 1511.0], [32.9, 1516.0], [33.0, 1519.0], [33.1, 1522.0], [33.2, 1527.0], [33.3, 1528.0], [33.4, 1530.0], [33.5, 1532.0], [33.6, 1534.0], [33.7, 1537.0], [33.8, 1540.0], [33.9, 1541.0], [34.0, 1543.0], [34.1, 1545.0], [34.2, 1547.0], [34.3, 1549.0], [34.4, 1554.0], [34.5, 1557.0], [34.6, 1559.0], [34.7, 1562.0], [34.8, 1563.0], [34.9, 1566.0], [35.0, 1567.0], [35.1, 1570.0], [35.2, 1572.0], [35.3, 1575.0], [35.4, 1576.0], [35.5, 1577.0], [35.6, 1579.0], [35.7, 1581.0], [35.8, 1582.0], [35.9, 1584.0], [36.0, 1588.0], [36.1, 1589.0], [36.2, 1593.0], [36.3, 1595.0], [36.4, 1598.0], [36.5, 1600.0], [36.6, 1603.0], [36.7, 1605.0], [36.8, 1606.0], [36.9, 1607.0], [37.0, 1608.0], [37.1, 1612.0], [37.2, 1615.0], [37.3, 1616.0], [37.4, 1617.0], [37.5, 1622.0], [37.6, 1622.0], [37.7, 1625.0], [37.8, 1626.0], [37.9, 1630.0], [38.0, 1632.0], [38.1, 1633.0], [38.2, 1634.0], [38.3, 1636.0], [38.4, 1639.0], [38.5, 1642.0], [38.6, 1643.0], [38.7, 1646.0], [38.8, 1649.0], [38.9, 1652.0], [39.0, 1654.0], [39.1, 1656.0], [39.2, 1657.0], [39.3, 1658.0], [39.4, 1661.0], [39.5, 1665.0], [39.6, 1667.0], [39.7, 1669.0], [39.8, 1671.0], [39.9, 1673.0], [40.0, 1675.0], [40.1, 1677.0], [40.2, 1678.0], [40.3, 1680.0], [40.4, 1681.0], [40.5, 1682.0], [40.6, 1685.0], [40.7, 1686.0], [40.8, 1688.0], [40.9, 1689.0], [41.0, 1690.0], [41.1, 1691.0], [41.2, 1693.0], [41.3, 1697.0], [41.4, 1699.0], [41.5, 1700.0], [41.6, 1704.0], [41.7, 1707.0], [41.8, 1707.0], [41.9, 1709.0], [42.0, 1710.0], [42.1, 1713.0], [42.2, 1714.0], [42.3, 1716.0], [42.4, 1718.0], [42.5, 1719.0], [42.6, 1722.0], [42.7, 1725.0], [42.8, 1726.0], [42.9, 1727.0], [43.0, 1729.0], [43.1, 1729.0], [43.2, 1733.0], [43.3, 1734.0], [43.4, 1736.0], [43.5, 1738.0], [43.6, 1740.0], [43.7, 1741.0], [43.8, 1742.0], [43.9, 1745.0], [44.0, 1747.0], [44.1, 1751.0], [44.2, 1752.0], [44.3, 1754.0], [44.4, 1755.0], [44.5, 1757.0], [44.6, 1758.0], [44.7, 1759.0], [44.8, 1760.0], [44.9, 1762.0], [45.0, 1763.0], [45.1, 1765.0], [45.2, 1767.0], [45.3, 1769.0], [45.4, 1770.0], [45.5, 1772.0], [45.6, 1773.0], [45.7, 1776.0], [45.8, 1778.0], [45.9, 1779.0], [46.0, 1782.0], [46.1, 1783.0], [46.2, 1786.0], [46.3, 1788.0], [46.4, 1790.0], [46.5, 1791.0], [46.6, 1792.0], [46.7, 1796.0], [46.8, 1799.0], [46.9, 1801.0], [47.0, 1802.0], [47.1, 1805.0], [47.2, 1806.0], [47.3, 1808.0], [47.4, 1810.0], [47.5, 1813.0], [47.6, 1814.0], [47.7, 1816.0], [47.8, 1819.0], [47.9, 1822.0], [48.0, 1822.0], [48.1, 1825.0], [48.2, 1826.0], [48.3, 1827.0], [48.4, 1828.0], [48.5, 1829.0], [48.6, 1831.0], [48.7, 1832.0], [48.8, 1833.0], [48.9, 1835.0], [49.0, 1837.0], [49.1, 1838.0], [49.2, 1841.0], [49.3, 1842.0], [49.4, 1843.0], [49.5, 1845.0], [49.6, 1848.0], [49.7, 1850.0], [49.8, 1851.0], [49.9, 1852.0], [50.0, 1854.0], [50.1, 1857.0], [50.2, 1859.0], [50.3, 1862.0], [50.4, 1864.0], [50.5, 1865.0], [50.6, 1868.0], [50.7, 1869.0], [50.8, 1873.0], [50.9, 1875.0], [51.0, 1876.0], [51.1, 1878.0], [51.2, 1879.0], [51.3, 1882.0], [51.4, 1885.0], [51.5, 1887.0], [51.6, 1890.0], [51.7, 1892.0], [51.8, 1893.0], [51.9, 1894.0], [52.0, 1895.0], [52.1, 1897.0], [52.2, 1899.0], [52.3, 1900.0], [52.4, 1902.0], [52.5, 1904.0], [52.6, 1905.0], [52.7, 1907.0], [52.8, 1908.0], [52.9, 1909.0], [53.0, 1911.0], [53.1, 1913.0], [53.2, 1914.0], [53.3, 1915.0], [53.4, 1918.0], [53.5, 1920.0], [53.6, 1922.0], [53.7, 1924.0], [53.8, 1926.0], [53.9, 1927.0], [54.0, 1929.0], [54.1, 1930.0], [54.2, 1932.0], [54.3, 1934.0], [54.4, 1936.0], [54.5, 1937.0], [54.6, 1939.0], [54.7, 1942.0], [54.8, 1944.0], [54.9, 1945.0], [55.0, 1948.0], [55.1, 1949.0], [55.2, 1952.0], [55.3, 1953.0], [55.4, 1954.0], [55.5, 1956.0], [55.6, 1957.0], [55.7, 1959.0], [55.8, 1963.0], [55.9, 1964.0], [56.0, 1965.0], [56.1, 1965.0], [56.2, 1967.0], [56.3, 1969.0], [56.4, 1970.0], [56.5, 1972.0], [56.6, 1973.0], [56.7, 1975.0], [56.8, 1978.0], [56.9, 1980.0], [57.0, 1981.0], [57.1, 1982.0], [57.2, 1984.0], [57.3, 1986.0], [57.4, 1988.0], [57.5, 1991.0], [57.6, 1993.0], [57.7, 1995.0], [57.8, 1997.0], [57.9, 1999.0], [58.0, 2001.0], [58.1, 2003.0], [58.2, 2004.0], [58.3, 2005.0], [58.4, 2007.0], [58.5, 2008.0], [58.6, 2011.0], [58.7, 2013.0], [58.8, 2015.0], [58.9, 2017.0], [59.0, 2020.0], [59.1, 2021.0], [59.2, 2024.0], [59.3, 2026.0], [59.4, 2027.0], [59.5, 2028.0], [59.6, 2029.0], [59.7, 2030.0], [59.8, 2032.0], [59.9, 2036.0], [60.0, 2038.0], [60.1, 2041.0], [60.2, 2045.0], [60.3, 2046.0], [60.4, 2050.0], [60.5, 2051.0], [60.6, 2057.0], [60.7, 2059.0], [60.8, 2060.0], [60.9, 2062.0], [61.0, 2063.0], [61.1, 2065.0], [61.2, 2068.0], [61.3, 2069.0], [61.4, 2073.0], [61.5, 2074.0], [61.6, 2075.0], [61.7, 2080.0], [61.8, 2084.0], [61.9, 2087.0], [62.0, 2093.0], [62.1, 2095.0], [62.2, 2098.0], [62.3, 2099.0], [62.4, 2103.0], [62.5, 2106.0], [62.6, 2107.0], [62.7, 2109.0], [62.8, 2111.0], [62.9, 2115.0], [63.0, 2118.0], [63.1, 2121.0], [63.2, 2122.0], [63.3, 2126.0], [63.4, 2127.0], [63.5, 2131.0], [63.6, 2133.0], [63.7, 2137.0], [63.8, 2139.0], [63.9, 2141.0], [64.0, 2144.0], [64.1, 2146.0], [64.2, 2150.0], [64.3, 2155.0], [64.4, 2157.0], [64.5, 2159.0], [64.6, 2160.0], [64.7, 2163.0], [64.8, 2165.0], [64.9, 2167.0], [65.0, 2169.0], [65.1, 2170.0], [65.2, 2171.0], [65.3, 2174.0], [65.4, 2178.0], [65.5, 2180.0], [65.6, 2184.0], [65.7, 2188.0], [65.8, 2189.0], [65.9, 2190.0], [66.0, 2193.0], [66.1, 2195.0], [66.2, 2198.0], [66.3, 2200.0], [66.4, 2203.0], [66.5, 2205.0], [66.6, 2207.0], [66.7, 2211.0], [66.8, 2216.0], [66.9, 2221.0], [67.0, 2225.0], [67.1, 2228.0], [67.2, 2232.0], [67.3, 2233.0], [67.4, 2246.0], [67.5, 2251.0], [67.6, 2252.0], [67.7, 2256.0], [67.8, 2258.0], [67.9, 2262.0], [68.0, 2264.0], [68.1, 2266.0], [68.2, 2268.0], [68.3, 2270.0], [68.4, 2273.0], [68.5, 2275.0], [68.6, 2278.0], [68.7, 2282.0], [68.8, 2285.0], [68.9, 2289.0], [69.0, 2294.0], [69.1, 2296.0], [69.2, 2297.0], [69.3, 2299.0], [69.4, 2302.0], [69.5, 2306.0], [69.6, 2311.0], [69.7, 2316.0], [69.8, 2318.0], [69.9, 2320.0], [70.0, 2326.0], [70.1, 2328.0], [70.2, 2330.0], [70.3, 2335.0], [70.4, 2340.0], [70.5, 2343.0], [70.6, 2347.0], [70.7, 2350.0], [70.8, 2352.0], [70.9, 2356.0], [71.0, 2357.0], [71.1, 2362.0], [71.2, 2367.0], [71.3, 2369.0], [71.4, 2371.0], [71.5, 2372.0], [71.6, 2375.0], [71.7, 2377.0], [71.8, 2379.0], [71.9, 2382.0], [72.0, 2385.0], [72.1, 2386.0], [72.2, 2391.0], [72.3, 2394.0], [72.4, 2397.0], [72.5, 2399.0], [72.6, 2402.0], [72.7, 2405.0], [72.8, 2407.0], [72.9, 2412.0], [73.0, 2414.0], [73.1, 2417.0], [73.2, 2422.0], [73.3, 2426.0], [73.4, 2427.0], [73.5, 2429.0], [73.6, 2433.0], [73.7, 2436.0], [73.8, 2441.0], [73.9, 2445.0], [74.0, 2448.0], [74.1, 2451.0], [74.2, 2452.0], [74.3, 2456.0], [74.4, 2459.0], [74.5, 2463.0], [74.6, 2468.0], [74.7, 2471.0], [74.8, 2476.0], [74.9, 2486.0], [75.0, 2490.0], [75.1, 2493.0], [75.2, 2497.0], [75.3, 2501.0], [75.4, 2503.0], [75.5, 2504.0], [75.6, 2506.0], [75.7, 2510.0], [75.8, 2513.0], [75.9, 2515.0], [76.0, 2519.0], [76.1, 2522.0], [76.2, 2527.0], [76.3, 2529.0], [76.4, 2532.0], [76.5, 2536.0], [76.6, 2539.0], [76.7, 2542.0], [76.8, 2544.0], [76.9, 2549.0], [77.0, 2551.0], [77.1, 2558.0], [77.2, 2561.0], [77.3, 2565.0], [77.4, 2577.0], [77.5, 2579.0], [77.6, 2582.0], [77.7, 2590.0], [77.8, 2592.0], [77.9, 2595.0], [78.0, 2598.0], [78.1, 2600.0], [78.2, 2605.0], [78.3, 2607.0], [78.4, 2610.0], [78.5, 2612.0], [78.6, 2617.0], [78.7, 2619.0], [78.8, 2624.0], [78.9, 2628.0], [79.0, 2634.0], [79.1, 2636.0], [79.2, 2640.0], [79.3, 2644.0], [79.4, 2648.0], [79.5, 2653.0], [79.6, 2656.0], [79.7, 2659.0], [79.8, 2660.0], [79.9, 2664.0], [80.0, 2668.0], [80.1, 2670.0], [80.2, 2673.0], [80.3, 2675.0], [80.4, 2679.0], [80.5, 2682.0], [80.6, 2684.0], [80.7, 2686.0], [80.8, 2688.0], [80.9, 2690.0], [81.0, 2694.0], [81.1, 2697.0], [81.2, 2700.0], [81.3, 2706.0], [81.4, 2708.0], [81.5, 2711.0], [81.6, 2715.0], [81.7, 2718.0], [81.8, 2720.0], [81.9, 2724.0], [82.0, 2727.0], [82.1, 2730.0], [82.2, 2732.0], [82.3, 2734.0], [82.4, 2737.0], [82.5, 2738.0], [82.6, 2743.0], [82.7, 2745.0], [82.8, 2747.0], [82.9, 2753.0], [83.0, 2757.0], [83.1, 2760.0], [83.2, 2762.0], [83.3, 2766.0], [83.4, 2769.0], [83.5, 2772.0], [83.6, 2774.0], [83.7, 2779.0], [83.8, 2785.0], [83.9, 2791.0], [84.0, 2793.0], [84.1, 2795.0], [84.2, 2800.0], [84.3, 2802.0], [84.4, 2807.0], [84.5, 2809.0], [84.6, 2811.0], [84.7, 2816.0], [84.8, 2820.0], [84.9, 2824.0], [85.0, 2825.0], [85.1, 2826.0], [85.2, 2831.0], [85.3, 2835.0], [85.4, 2838.0], [85.5, 2844.0], [85.6, 2848.0], [85.7, 2851.0], [85.8, 2858.0], [85.9, 2863.0], [86.0, 2866.0], [86.1, 2870.0], [86.2, 2878.0], [86.3, 2888.0], [86.4, 2897.0], [86.5, 2900.0], [86.6, 2902.0], [86.7, 2906.0], [86.8, 2912.0], [86.9, 2919.0], [87.0, 2925.0], [87.1, 2928.0], [87.2, 2933.0], [87.3, 2943.0], [87.4, 2950.0], [87.5, 2953.0], [87.6, 2960.0], [87.7, 2965.0], [87.8, 2970.0], [87.9, 2978.0], [88.0, 2984.0], [88.1, 2987.0], [88.2, 2995.0], [88.3, 2998.0], [88.4, 3008.0], [88.5, 3015.0], [88.6, 3022.0], [88.7, 3025.0], [88.8, 3032.0], [88.9, 3038.0], [89.0, 3042.0], [89.1, 3050.0], [89.2, 3060.0], [89.3, 3070.0], [89.4, 3074.0], [89.5, 3085.0], [89.6, 3093.0], [89.7, 3100.0], [89.8, 3107.0], [89.9, 3110.0], [90.0, 3114.0], [90.1, 3125.0], [90.2, 3131.0], [90.3, 3141.0], [90.4, 3150.0], [90.5, 3158.0], [90.6, 3171.0], [90.7, 3175.0], [90.8, 3184.0], [90.9, 3193.0], [91.0, 3195.0], [91.1, 3207.0], [91.2, 3218.0], [91.3, 3225.0], [91.4, 3228.0], [91.5, 3244.0], [91.6, 3254.0], [91.7, 3263.0], [91.8, 3277.0], [91.9, 3282.0], [92.0, 3286.0], [92.1, 3295.0], [92.2, 3303.0], [92.3, 3309.0], [92.4, 3312.0], [92.5, 3324.0], [92.6, 3329.0], [92.7, 3345.0], [92.8, 3348.0], [92.9, 3356.0], [93.0, 3362.0], [93.1, 3381.0], [93.2, 3397.0], [93.3, 3408.0], [93.4, 3417.0], [93.5, 3422.0], [93.6, 3429.0], [93.7, 3446.0], [93.8, 3452.0], [93.9, 3458.0], [94.0, 3464.0], [94.1, 3468.0], [94.2, 3478.0], [94.3, 3485.0], [94.4, 3504.0], [94.5, 3517.0], [94.6, 3525.0], [94.7, 3539.0], [94.8, 3552.0], [94.9, 3556.0], [95.0, 3568.0], [95.1, 3579.0], [95.2, 3592.0], [95.3, 3609.0], [95.4, 3620.0], [95.5, 3646.0], [95.6, 3665.0], [95.7, 3681.0], [95.8, 3693.0], [95.9, 3729.0], [96.0, 3739.0], [96.1, 3758.0], [96.2, 3783.0], [96.3, 3809.0], [96.4, 3833.0], [96.5, 3843.0], [96.6, 3884.0], [96.7, 3900.0], [96.8, 3904.0], [96.9, 3924.0], [97.0, 3953.0], [97.1, 3977.0], [97.2, 4037.0], [97.3, 4079.0], [97.4, 4109.0], [97.5, 4148.0], [97.6, 4169.0], [97.7, 4233.0], [97.8, 4286.0], [97.9, 4350.0], [98.0, 4418.0], [98.1, 4484.0], [98.2, 4510.0], [98.3, 4603.0], [98.4, 4757.0], [98.5, 4834.0], [98.6, 4894.0], [98.7, 4929.0], [98.8, 5073.0], [98.9, 5168.0], [99.0, 5375.0], [99.1, 5572.0], [99.2, 5755.0], [99.3, 5879.0], [99.4, 6077.0], [99.5, 6402.0], [99.6, 6592.0], [99.7, 6709.0], [99.8, 7000.0], [99.9, 7394.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 500.0, "maxY": 295.0, "series": [{"data": [[600.0, 10.0], [700.0, 171.0], [800.0, 290.0], [900.0, 168.0], [1000.0, 180.0], [1100.0, 207.0], [1200.0, 204.0], [1300.0, 229.0], [1400.0, 218.0], [1500.0, 210.0], [1600.0, 258.0], [1700.0, 282.0], [1800.0, 280.0], [1900.0, 295.0], [2000.0, 227.0], [2100.0, 206.0], [2300.0, 166.0], [2200.0, 158.0], [2400.0, 141.0], [2500.0, 147.0], [2600.0, 160.0], [2800.0, 119.0], [2700.0, 157.0], [2900.0, 95.0], [3000.0, 72.0], [3100.0, 71.0], [3200.0, 58.0], [3300.0, 54.0], [3400.0, 60.0], [3500.0, 46.0], [3600.0, 30.0], [3700.0, 21.0], [3800.0, 23.0], [3900.0, 25.0], [4000.0, 12.0], [4200.0, 8.0], [4300.0, 9.0], [4100.0, 13.0], [4600.0, 4.0], [4400.0, 10.0], [4500.0, 6.0], [4800.0, 8.0], [4700.0, 5.0], [5100.0, 3.0], [4900.0, 8.0], [5000.0, 4.0], [5200.0, 3.0], [5300.0, 3.0], [5500.0, 3.0], [5600.0, 2.0], [5400.0, 3.0], [5700.0, 4.0], [5800.0, 5.0], [6000.0, 2.0], [5900.0, 2.0], [6100.0, 1.0], [6300.0, 1.0], [6200.0, 2.0], [6500.0, 2.0], [6600.0, 4.0], [6400.0, 4.0], [6900.0, 3.0], [6700.0, 2.0], [7100.0, 1.0], [7000.0, 3.0], [7300.0, 2.0], [7600.0, 2.0], [7800.0, 1.0], [7900.0, 1.0], [8300.0, 1.0], [500.0, 5.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 8300.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 1683.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 3507.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1683.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 3507.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 11.678048780487803, "minX": 1.60402566E12, "maxY": 12.0, "series": [{"data": [[1.60402626E12, 12.0], [1.60402596E12, 12.0], [1.60402566E12, 12.0], [1.60402632E12, 12.0], [1.60402602E12, 12.0], [1.60402572E12, 12.0], [1.60402638E12, 12.0], [1.60402608E12, 12.0], [1.60402578E12, 12.0], [1.60402644E12, 12.0], [1.60402614E12, 12.0], [1.60402584E12, 12.0], [1.6040265E12, 11.678048780487803], [1.6040262E12, 12.0], [1.6040259E12, 12.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6040265E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 1446.0, "minX": 1.0, "maxY": 4118.0, "series": [{"data": [[8.0, 1693.0], [4.0, 1581.0], [2.0, 4118.0], [1.0, 3556.0], [9.0, 2204.0], [10.0, 2377.0], [5.0, 1602.0], [11.0, 2121.0], [12.0, 1995.2450279976827], [6.0, 1446.0], [3.0, 1610.0], [7.0, 2109.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[11.987283236994216, 1995.7208092485548]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 12.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 1525.75, "minX": 1.60402566E12, "maxY": 2061859.5166666666, "series": [{"data": [[1.60402626E12, 1747658.1333333333], [1.60402596E12, 1564496.6166666667], [1.60402566E12, 1386149.4666666666], [1.60402632E12, 1999210.05], [1.60402602E12, 1687545.4166666667], [1.60402572E12, 1652963.7166666666], [1.60402638E12, 1557228.5], [1.60402608E12, 1762575.6666666667], [1.60402578E12, 1080303.3833333333], [1.60402644E12, 1722395.25], [1.60402614E12, 1545033.2833333334], [1.60402584E12, 2061859.5166666666], [1.6040265E12, 952411.65], [1.6040262E12, 1296676.5], [1.6040259E12, 1956248.8166666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60402626E12, 2736.7833333333333], [1.60402596E12, 2696.483333333333], [1.60402566E12, 1525.75], [1.60402632E12, 2888.383333333333], [1.60402602E12, 2641.3], [1.60402572E12, 2778.2166666666667], [1.60402638E12, 2864.5], [1.60402608E12, 2144.766666666667], [1.60402578E12, 2908.983333333333], [1.60402644E12, 3091.766666666667], [1.60402614E12, 2544.766666666667], [1.60402584E12, 2463.05], [1.6040265E12, 1539.6333333333334], [1.6040262E12, 2690.9166666666665], [1.6040259E12, 3062.0333333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6040265E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 1766.725490196078, "minX": 1.60402566E12, "maxY": 2466.403846153846, "series": [{"data": [[1.60402626E12, 1908.1989247311817], [1.60402596E12, 2044.7577464788744], [1.60402566E12, 2466.403846153846], [1.60402632E12, 1895.1338582677174], [1.60402602E12, 2015.7399999999993], [1.60402572E12, 1875.470284237725], [1.60402638E12, 1901.0291777188324], [1.60402608E12, 2401.5609756097574], [1.60402578E12, 1799.3082706766927], [1.60402644E12, 1766.725490196078], [1.60402614E12, 2111.0362116991655], [1.60402584E12, 2179.8262195121933], [1.6040265E12, 2402.0536585365858], [1.6040262E12, 1959.203252032519], [1.6040259E12, 1784.6469135802474]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6040265E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 1765.1642156862745, "minX": 1.60402566E12, "maxY": 2463.5576923076937, "series": [{"data": [[1.60402626E12, 1906.3978494623645], [1.60402596E12, 2042.898591549296], [1.60402566E12, 2463.5576923076937], [1.60402632E12, 1893.2677165354337], [1.60402602E12, 2013.6685714285709], [1.60402572E12, 1873.638242894057], [1.60402638E12, 1899.4350132626005], [1.60402608E12, 2398.749128919861], [1.60402578E12, 1798.1052631578948], [1.60402644E12, 1765.1642156862745], [1.60402614E12, 2109.286908077998], [1.60402584E12, 2176.9390243902426], [1.6040265E12, 2400.2731707317084], [1.6040262E12, 1957.8943089430902], [1.6040259E12, 1782.619753086418]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6040265E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.028871391076115516, "minX": 1.60402566E12, "maxY": 0.5528846153846162, "series": [{"data": [[1.60402626E12, 0.04032258064516131], [1.60402596E12, 0.036619718309859155], [1.60402566E12, 0.5528846153846162], [1.60402632E12, 0.028871391076115516], [1.60402602E12, 0.08000000000000007], [1.60402572E12, 0.041343669250645955], [1.60402638E12, 0.0397877984084881], [1.60402608E12, 0.045296167247386755], [1.60402578E12, 0.04010025062656639], [1.60402644E12, 0.03431372549019611], [1.60402614E12, 0.03342618384401114], [1.60402584E12, 0.03963414634146345], [1.6040265E12, 0.04878048780487805], [1.6040262E12, 0.029810298102981053], [1.6040259E12, 0.034567901234567947]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6040265E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 551.0, "minX": 1.60402566E12, "maxY": 8309.0, "series": [{"data": [[1.60402626E12, 4262.0], [1.60402596E12, 4930.0], [1.60402566E12, 6614.0], [1.60402632E12, 4047.0], [1.60402602E12, 7377.0], [1.60402572E12, 7107.0], [1.60402638E12, 3924.0], [1.60402608E12, 6080.0], [1.60402578E12, 6402.0], [1.60402644E12, 5843.0], [1.60402614E12, 8309.0], [1.60402584E12, 6592.0], [1.6040265E12, 5621.0], [1.6040262E12, 7988.0], [1.6040259E12, 5211.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60402626E12, 767.7849995553494], [1.60402596E12, 821.8159996604919], [1.60402566E12, 799.1669996511936], [1.60402632E12, 610.8259975409508], [1.60402602E12, 608.3849987447262], [1.60402572E12, 819.9679996299743], [1.60402638E12, 740.2259988284111], [1.60402608E12, 1031.7439960861207], [1.60402578E12, 742.9999990463257], [1.60402644E12, 714.3619998049736], [1.60402614E12, 768.4799998283386], [1.60402584E12, 878.7659995293617], [1.6040265E12, 1165.3939994597436], [1.6040262E12, 739.3299999117851], [1.6040259E12, 750.2319992256165]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60402626E12, 769.4635001778603], [1.60402596E12, 823.0976001358032], [1.60402566E12, 802.0730005979538], [1.60402632E12, 620.1086009836197], [1.60402602E12, 613.1235005021096], [1.60402572E12, 821.3648001480102], [1.60402638E12, 744.6486004686355], [1.60402608E12, 1046.5184015655518], [1.60402578E12, 746.6000003814697], [1.60402644E12, 715.0], [1.60402614E12, 769.1280000686645], [1.60402584E12, 880.7997002196312], [1.6040265E12, 1168.3790006875993], [1.6040262E12, 739.6630000352859], [1.6040259E12, 753.2716005420684]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60402626E12, 768.7174997776747], [1.60402596E12, 822.527999830246], [1.60402566E12, 799.8984998255968], [1.60402632E12, 615.9829987704754], [1.60402602E12, 611.0174993723631], [1.60402572E12, 820.7439998149872], [1.60402638E12, 742.6829994142056], [1.60402608E12, 1039.9519980430603], [1.60402578E12, 744.9999995231628], [1.60402644E12, 714.7709999024868], [1.60402614E12, 768.8399999141693], [1.60402584E12, 879.878499725461], [1.6040265E12, 1166.5269997298717], [1.6040262E12, 739.5149999558926], [1.6040259E12, 751.8559996128082]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60402626E12, 756.0], [1.60402596E12, 790.0], [1.60402566E12, 793.0], [1.60402632E12, 555.0], [1.60402602E12, 551.0], [1.60402572E12, 771.0], [1.60402638E12, 680.0], [1.60402608E12, 996.0], [1.60402578E12, 732.0], [1.60402644E12, 709.0], [1.60402614E12, 753.0], [1.60402584E12, 871.0], [1.6040265E12, 1156.0], [1.6040262E12, 736.0], [1.6040259E12, 632.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60402626E12, 1794.0], [1.60402596E12, 2030.0], [1.60402566E12, 2236.5], [1.60402632E12, 1834.0], [1.60402602E12, 1939.0], [1.60402572E12, 1792.0], [1.60402638E12, 1852.0], [1.60402608E12, 2306.0], [1.60402578E12, 1531.0], [1.60402644E12, 1572.0], [1.60402614E12, 1849.0], [1.60402584E12, 2013.0], [1.6040265E12, 2270.0], [1.6040262E12, 1679.0], [1.6040259E12, 1674.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6040265E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 787.5, "minX": 1.0, "maxY": 3176.5, "series": [{"data": [[8.0, 1806.0], [2.0, 2974.5], [9.0, 1398.0], [10.0, 1301.5], [11.0, 1014.0], [3.0, 2480.5], [12.0, 909.0], [13.0, 826.0], [14.0, 928.5], [15.0, 837.0], [1.0, 3176.5], [4.0, 2392.5], [16.0, 787.5], [5.0, 2260.0], [6.0, 1946.5], [7.0, 1864.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 16.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 787.5, "minX": 1.0, "maxY": 3175.5, "series": [{"data": [[8.0, 1805.0], [2.0, 2966.0], [9.0, 1396.5], [10.0, 1301.0], [11.0, 1014.0], [3.0, 2476.5], [12.0, 909.0], [13.0, 825.0], [14.0, 928.5], [15.0, 837.0], [1.0, 3175.5], [4.0, 2390.5], [16.0, 787.5], [5.0, 2257.0], [6.0, 1945.5], [7.0, 1862.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 16.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 3.216666666666667, "minX": 1.60402566E12, "maxY": 6.8, "series": [{"data": [[1.60402626E12, 6.2], [1.60402596E12, 5.916666666666667], [1.60402566E12, 3.6666666666666665], [1.60402632E12, 6.35], [1.60402602E12, 5.833333333333333], [1.60402572E12, 6.45], [1.60402638E12, 6.283333333333333], [1.60402608E12, 4.783333333333333], [1.60402578E12, 6.65], [1.60402644E12, 6.8], [1.60402614E12, 5.983333333333333], [1.60402584E12, 5.466666666666667], [1.6040265E12, 3.216666666666667], [1.6040262E12, 6.15], [1.6040259E12, 6.75]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6040265E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 3.4166666666666665, "minX": 1.60402566E12, "maxY": 6.8, "series": [{"data": [[1.60402626E12, 6.2], [1.60402596E12, 5.916666666666667], [1.60402566E12, 3.466666666666667], [1.60402632E12, 6.35], [1.60402602E12, 5.833333333333333], [1.60402572E12, 6.45], [1.60402638E12, 6.283333333333333], [1.60402608E12, 4.783333333333333], [1.60402578E12, 6.65], [1.60402644E12, 6.8], [1.60402614E12, 5.983333333333333], [1.60402584E12, 5.466666666666667], [1.6040265E12, 3.4166666666666665], [1.6040262E12, 6.15], [1.6040259E12, 6.75]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6040265E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 3.4166666666666665, "minX": 1.60402566E12, "maxY": 6.8, "series": [{"data": [[1.60402626E12, 6.2], [1.60402596E12, 5.916666666666667], [1.60402566E12, 3.466666666666667], [1.60402632E12, 6.35], [1.60402602E12, 5.833333333333333], [1.60402572E12, 6.45], [1.60402638E12, 6.283333333333333], [1.60402608E12, 4.783333333333333], [1.60402578E12, 6.65], [1.60402644E12, 6.8], [1.60402614E12, 5.983333333333333], [1.60402584E12, 5.466666666666667], [1.6040265E12, 3.4166666666666665], [1.6040262E12, 6.15], [1.6040259E12, 6.75]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6040265E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 3.4166666666666665, "minX": 1.60402566E12, "maxY": 6.8, "series": [{"data": [[1.60402626E12, 6.2], [1.60402596E12, 5.916666666666667], [1.60402566E12, 3.466666666666667], [1.60402632E12, 6.35], [1.60402602E12, 5.833333333333333], [1.60402572E12, 6.45], [1.60402638E12, 6.283333333333333], [1.60402608E12, 4.783333333333333], [1.60402578E12, 6.65], [1.60402644E12, 6.8], [1.60402614E12, 5.983333333333333], [1.60402584E12, 5.466666666666667], [1.6040265E12, 3.4166666666666665], [1.6040262E12, 6.15], [1.6040259E12, 6.75]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6040265E12, "title": "Total Transactions Per Second"}},
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

