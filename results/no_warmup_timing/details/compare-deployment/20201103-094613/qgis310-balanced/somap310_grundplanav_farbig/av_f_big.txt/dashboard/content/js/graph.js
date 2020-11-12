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
        data: {"result": {"minY": 692.0, "minX": 0.0, "maxY": 5637.0, "series": [{"data": [[0.0, 692.0], [0.1, 692.0], [0.2, 801.0], [0.3, 890.0], [0.4, 890.0], [0.5, 932.0], [0.6, 952.0], [0.7, 954.0], [0.8, 954.0], [0.9, 963.0], [1.0, 964.0], [1.1, 966.0], [1.2, 966.0], [1.3, 970.0], [1.4, 971.0], [1.5, 971.0], [1.6, 971.0], [1.7, 975.0], [1.8, 982.0], [1.9, 982.0], [2.0, 983.0], [2.1, 995.0], [2.2, 999.0], [2.3, 999.0], [2.4, 1005.0], [2.5, 1024.0], [2.6, 1028.0], [2.7, 1028.0], [2.8, 1038.0], [2.9, 1040.0], [3.0, 1058.0], [3.1, 1058.0], [3.2, 1061.0], [3.3, 1067.0], [3.4, 1067.0], [3.5, 1070.0], [3.6, 1095.0], [3.7, 1097.0], [3.8, 1097.0], [3.9, 1099.0], [4.0, 1107.0], [4.1, 1107.0], [4.2, 1107.0], [4.3, 1115.0], [4.4, 1115.0], [4.5, 1116.0], [4.6, 1116.0], [4.7, 1118.0], [4.8, 1121.0], [4.9, 1127.0], [5.0, 1127.0], [5.1, 1128.0], [5.2, 1134.0], [5.3, 1134.0], [5.4, 1134.0], [5.5, 1134.0], [5.6, 1135.0], [5.7, 1135.0], [5.8, 1146.0], [5.9, 1159.0], [6.0, 1166.0], [6.1, 1166.0], [6.2, 1171.0], [6.3, 1172.0], [6.4, 1183.0], [6.5, 1183.0], [6.6, 1185.0], [6.7, 1195.0], [6.8, 1195.0], [6.9, 1196.0], [7.0, 1197.0], [7.1, 1198.0], [7.2, 1198.0], [7.3, 1199.0], [7.4, 1204.0], [7.5, 1206.0], [7.6, 1206.0], [7.7, 1207.0], [7.8, 1208.0], [7.9, 1214.0], [8.0, 1214.0], [8.1, 1219.0], [8.2, 1222.0], [8.3, 1224.0], [8.4, 1224.0], [8.5, 1227.0], [8.6, 1229.0], [8.7, 1229.0], [8.8, 1240.0], [8.9, 1242.0], [9.0, 1242.0], [9.1, 1242.0], [9.2, 1243.0], [9.3, 1250.0], [9.4, 1256.0], [9.5, 1256.0], [9.6, 1259.0], [9.7, 1263.0], [9.8, 1266.0], [9.9, 1266.0], [10.0, 1268.0], [10.1, 1272.0], [10.2, 1272.0], [10.3, 1272.0], [10.4, 1274.0], [10.5, 1275.0], [10.6, 1275.0], [10.7, 1279.0], [10.8, 1283.0], [10.9, 1284.0], [11.0, 1284.0], [11.1, 1293.0], [11.2, 1293.0], [11.3, 1294.0], [11.4, 1294.0], [11.5, 1295.0], [11.6, 1295.0], [11.7, 1295.0], [11.8, 1301.0], [11.9, 1301.0], [12.0, 1303.0], [12.1, 1303.0], [12.2, 1307.0], [12.3, 1311.0], [12.4, 1316.0], [12.5, 1316.0], [12.6, 1317.0], [12.7, 1318.0], [12.8, 1321.0], [12.9, 1321.0], [13.0, 1324.0], [13.1, 1324.0], [13.2, 1325.0], [13.3, 1325.0], [13.4, 1325.0], [13.5, 1326.0], [13.6, 1326.0], [13.7, 1332.0], [13.8, 1334.0], [13.9, 1334.0], [14.0, 1334.0], [14.1, 1335.0], [14.2, 1337.0], [14.3, 1345.0], [14.4, 1345.0], [14.5, 1346.0], [14.6, 1352.0], [14.7, 1353.0], [14.8, 1353.0], [14.9, 1355.0], [15.0, 1358.0], [15.1, 1358.0], [15.2, 1359.0], [15.3, 1362.0], [15.4, 1364.0], [15.5, 1364.0], [15.6, 1364.0], [15.7, 1365.0], [15.8, 1366.0], [15.9, 1366.0], [16.0, 1373.0], [16.1, 1374.0], [16.2, 1377.0], [16.3, 1377.0], [16.4, 1378.0], [16.5, 1381.0], [16.6, 1383.0], [16.7, 1383.0], [16.8, 1384.0], [16.9, 1384.0], [17.0, 1384.0], [17.1, 1386.0], [17.2, 1390.0], [17.3, 1391.0], [17.4, 1391.0], [17.5, 1395.0], [17.6, 1397.0], [17.7, 1401.0], [17.8, 1401.0], [17.9, 1401.0], [18.0, 1403.0], [18.1, 1404.0], [18.2, 1404.0], [18.3, 1405.0], [18.4, 1406.0], [18.5, 1406.0], [18.6, 1408.0], [18.7, 1410.0], [18.8, 1416.0], [18.9, 1416.0], [19.0, 1417.0], [19.1, 1420.0], [19.2, 1423.0], [19.3, 1423.0], [19.4, 1424.0], [19.5, 1427.0], [19.6, 1431.0], [19.7, 1431.0], [19.8, 1442.0], [19.9, 1444.0], [20.0, 1444.0], [20.1, 1445.0], [20.2, 1450.0], [20.3, 1462.0], [20.4, 1462.0], [20.5, 1463.0], [20.6, 1464.0], [20.7, 1466.0], [20.8, 1466.0], [20.9, 1476.0], [21.0, 1480.0], [21.1, 1485.0], [21.2, 1485.0], [21.3, 1488.0], [21.4, 1489.0], [21.5, 1489.0], [21.6, 1489.0], [21.7, 1492.0], [21.8, 1493.0], [21.9, 1493.0], [22.0, 1495.0], [22.1, 1496.0], [22.2, 1496.0], [22.3, 1496.0], [22.4, 1502.0], [22.5, 1505.0], [22.6, 1508.0], [22.7, 1508.0], [22.8, 1509.0], [22.9, 1509.0], [23.0, 1516.0], [23.1, 1516.0], [23.2, 1516.0], [23.3, 1517.0], [23.4, 1517.0], [23.5, 1527.0], [23.6, 1531.0], [23.7, 1532.0], [23.8, 1532.0], [23.9, 1533.0], [24.0, 1538.0], [24.1, 1538.0], [24.2, 1538.0], [24.3, 1539.0], [24.4, 1545.0], [24.5, 1547.0], [24.6, 1547.0], [24.7, 1549.0], [24.8, 1549.0], [24.9, 1550.0], [25.0, 1550.0], [25.1, 1550.0], [25.2, 1554.0], [25.3, 1554.0], [25.4, 1556.0], [25.5, 1558.0], [25.6, 1558.0], [25.7, 1558.0], [25.8, 1565.0], [25.9, 1567.0], [26.0, 1572.0], [26.1, 1572.0], [26.2, 1576.0], [26.3, 1577.0], [26.4, 1595.0], [26.5, 1595.0], [26.6, 1597.0], [26.7, 1602.0], [26.8, 1602.0], [26.9, 1605.0], [27.0, 1607.0], [27.1, 1623.0], [27.2, 1623.0], [27.3, 1639.0], [27.4, 1640.0], [27.5, 1644.0], [27.6, 1644.0], [27.7, 1650.0], [27.8, 1656.0], [27.9, 1664.0], [28.0, 1664.0], [28.1, 1666.0], [28.2, 1666.0], [28.3, 1667.0], [28.4, 1667.0], [28.5, 1667.0], [28.6, 1668.0], [28.7, 1668.0], [28.8, 1670.0], [28.9, 1670.0], [29.0, 1671.0], [29.1, 1671.0], [29.2, 1673.0], [29.3, 1673.0], [29.4, 1675.0], [29.5, 1675.0], [29.6, 1681.0], [29.7, 1683.0], [29.8, 1695.0], [29.9, 1695.0], [30.0, 1696.0], [30.1, 1700.0], [30.2, 1700.0], [30.3, 1703.0], [30.4, 1709.0], [30.5, 1713.0], [30.6, 1713.0], [30.7, 1713.0], [30.8, 1713.0], [30.9, 1715.0], [31.0, 1715.0], [31.1, 1722.0], [31.2, 1727.0], [31.3, 1728.0], [31.4, 1728.0], [31.5, 1728.0], [31.6, 1730.0], [31.7, 1730.0], [31.8, 1735.0], [31.9, 1739.0], [32.0, 1742.0], [32.1, 1742.0], [32.2, 1745.0], [32.3, 1745.0], [32.4, 1746.0], [32.5, 1746.0], [32.6, 1747.0], [32.7, 1752.0], [32.8, 1753.0], [32.9, 1753.0], [33.0, 1755.0], [33.1, 1757.0], [33.2, 1760.0], [33.3, 1760.0], [33.4, 1762.0], [33.5, 1762.0], [33.6, 1762.0], [33.7, 1763.0], [33.8, 1768.0], [33.9, 1768.0], [34.0, 1768.0], [34.1, 1769.0], [34.2, 1770.0], [34.3, 1774.0], [34.4, 1774.0], [34.5, 1774.0], [34.6, 1776.0], [34.7, 1778.0], [34.8, 1778.0], [34.9, 1784.0], [35.0, 1784.0], [35.1, 1784.0], [35.2, 1784.0], [35.3, 1789.0], [35.4, 1790.0], [35.5, 1790.0], [35.6, 1791.0], [35.7, 1791.0], [35.8, 1792.0], [35.9, 1792.0], [36.0, 1795.0], [36.1, 1798.0], [36.2, 1798.0], [36.3, 1798.0], [36.4, 1800.0], [36.5, 1801.0], [36.6, 1801.0], [36.7, 1801.0], [36.8, 1802.0], [36.9, 1802.0], [37.0, 1802.0], [37.1, 1806.0], [37.2, 1806.0], [37.3, 1813.0], [37.4, 1813.0], [37.5, 1816.0], [37.6, 1817.0], [37.7, 1825.0], [37.8, 1825.0], [37.9, 1826.0], [38.0, 1827.0], [38.1, 1828.0], [38.2, 1828.0], [38.3, 1829.0], [38.4, 1830.0], [38.5, 1830.0], [38.6, 1831.0], [38.7, 1832.0], [38.8, 1833.0], [38.9, 1833.0], [39.0, 1833.0], [39.1, 1834.0], [39.2, 1834.0], [39.3, 1834.0], [39.4, 1835.0], [39.5, 1837.0], [39.6, 1839.0], [39.7, 1839.0], [39.8, 1839.0], [39.9, 1842.0], [40.0, 1842.0], [40.1, 1842.0], [40.2, 1843.0], [40.3, 1843.0], [40.4, 1843.0], [40.5, 1844.0], [40.6, 1845.0], [40.7, 1845.0], [40.8, 1845.0], [40.9, 1852.0], [41.0, 1853.0], [41.1, 1853.0], [41.2, 1853.0], [41.3, 1856.0], [41.4, 1860.0], [41.5, 1860.0], [41.6, 1860.0], [41.7, 1863.0], [41.8, 1865.0], [41.9, 1865.0], [42.0, 1874.0], [42.1, 1876.0], [42.2, 1876.0], [42.3, 1876.0], [42.4, 1877.0], [42.5, 1878.0], [42.6, 1882.0], [42.7, 1882.0], [42.8, 1883.0], [42.9, 1883.0], [43.0, 1885.0], [43.1, 1885.0], [43.2, 1887.0], [43.3, 1889.0], [43.4, 1889.0], [43.5, 1890.0], [43.6, 1899.0], [43.7, 1900.0], [43.8, 1900.0], [43.9, 1904.0], [44.0, 1905.0], [44.1, 1905.0], [44.2, 1905.0], [44.3, 1905.0], [44.4, 1907.0], [44.5, 1910.0], [44.6, 1910.0], [44.7, 1910.0], [44.8, 1913.0], [44.9, 1914.0], [45.0, 1914.0], [45.1, 1914.0], [45.2, 1916.0], [45.3, 1916.0], [45.4, 1916.0], [45.5, 1917.0], [45.6, 1921.0], [45.7, 1921.0], [45.8, 1921.0], [45.9, 1925.0], [46.0, 1927.0], [46.1, 1927.0], [46.2, 1928.0], [46.3, 1928.0], [46.4, 1930.0], [46.5, 1930.0], [46.6, 1930.0], [46.7, 1931.0], [46.8, 1931.0], [46.9, 1935.0], [47.0, 1937.0], [47.1, 1937.0], [47.2, 1937.0], [47.3, 1937.0], [47.4, 1941.0], [47.5, 1941.0], [47.6, 1941.0], [47.7, 1942.0], [47.8, 1942.0], [47.9, 1945.0], [48.0, 1945.0], [48.1, 1947.0], [48.2, 1949.0], [48.3, 1950.0], [48.4, 1950.0], [48.5, 1950.0], [48.6, 1951.0], [48.7, 1951.0], [48.8, 1953.0], [48.9, 1954.0], [49.0, 1958.0], [49.1, 1958.0], [49.2, 1960.0], [49.3, 1960.0], [49.4, 1961.0], [49.5, 1961.0], [49.6, 1961.0], [49.7, 1962.0], [49.8, 1962.0], [49.9, 1962.0], [50.0, 1963.0], [50.1, 1965.0], [50.2, 1965.0], [50.3, 1966.0], [50.4, 1969.0], [50.5, 1972.0], [50.6, 1972.0], [50.7, 1972.0], [50.8, 1974.0], [50.9, 1985.0], [51.0, 1985.0], [51.1, 1987.0], [51.2, 1988.0], [51.3, 1989.0], [51.4, 1989.0], [51.5, 1992.0], [51.6, 1992.0], [51.7, 1992.0], [51.8, 1994.0], [51.9, 2004.0], [52.0, 2004.0], [52.1, 2004.0], [52.2, 2004.0], [52.3, 2004.0], [52.4, 2007.0], [52.5, 2007.0], [52.6, 2007.0], [52.7, 2008.0], [52.8, 2009.0], [52.9, 2009.0], [53.0, 2009.0], [53.1, 2010.0], [53.2, 2013.0], [53.3, 2013.0], [53.4, 2016.0], [53.5, 2017.0], [53.6, 2017.0], [53.7, 2017.0], [53.8, 2018.0], [53.9, 2020.0], [54.0, 2020.0], [54.1, 2021.0], [54.2, 2022.0], [54.3, 2022.0], [54.4, 2022.0], [54.5, 2022.0], [54.6, 2024.0], [54.7, 2026.0], [54.8, 2026.0], [54.9, 2028.0], [55.0, 2029.0], [55.1, 2029.0], [55.2, 2029.0], [55.3, 2030.0], [55.4, 2030.0], [55.5, 2030.0], [55.6, 2031.0], [55.7, 2032.0], [55.8, 2033.0], [55.9, 2033.0], [56.0, 2034.0], [56.1, 2035.0], [56.2, 2038.0], [56.3, 2038.0], [56.4, 2040.0], [56.5, 2040.0], [56.6, 2041.0], [56.7, 2041.0], [56.8, 2044.0], [56.9, 2052.0], [57.0, 2052.0], [57.1, 2053.0], [57.2, 2056.0], [57.3, 2057.0], [57.4, 2057.0], [57.5, 2062.0], [57.6, 2063.0], [57.7, 2063.0], [57.8, 2063.0], [57.9, 2063.0], [58.0, 2064.0], [58.1, 2064.0], [58.2, 2064.0], [58.3, 2065.0], [58.4, 2067.0], [58.5, 2067.0], [58.6, 2067.0], [58.7, 2071.0], [58.8, 2071.0], [58.9, 2071.0], [59.0, 2074.0], [59.1, 2076.0], [59.2, 2078.0], [59.3, 2078.0], [59.4, 2080.0], [59.5, 2081.0], [59.6, 2087.0], [59.7, 2087.0], [59.8, 2092.0], [59.9, 2092.0], [60.0, 2095.0], [60.1, 2095.0], [60.2, 2096.0], [60.3, 2097.0], [60.4, 2097.0], [60.5, 2101.0], [60.6, 2101.0], [60.7, 2107.0], [60.8, 2107.0], [60.9, 2108.0], [61.0, 2109.0], [61.1, 2115.0], [61.2, 2115.0], [61.3, 2119.0], [61.4, 2120.0], [61.5, 2122.0], [61.6, 2122.0], [61.7, 2123.0], [61.8, 2124.0], [61.9, 2124.0], [62.0, 2128.0], [62.1, 2130.0], [62.2, 2136.0], [62.3, 2136.0], [62.4, 2138.0], [62.5, 2139.0], [62.6, 2141.0], [62.7, 2141.0], [62.8, 2151.0], [62.9, 2154.0], [63.0, 2154.0], [63.1, 2154.0], [63.2, 2157.0], [63.3, 2158.0], [63.4, 2158.0], [63.5, 2159.0], [63.6, 2159.0], [63.7, 2162.0], [63.8, 2162.0], [63.9, 2167.0], [64.0, 2169.0], [64.1, 2175.0], [64.2, 2175.0], [64.3, 2177.0], [64.4, 2180.0], [64.5, 2181.0], [64.6, 2181.0], [64.7, 2181.0], [64.8, 2183.0], [64.9, 2189.0], [65.0, 2189.0], [65.1, 2190.0], [65.2, 2191.0], [65.3, 2191.0], [65.4, 2195.0], [65.5, 2197.0], [65.6, 2199.0], [65.7, 2199.0], [65.8, 2202.0], [65.9, 2206.0], [66.0, 2213.0], [66.1, 2213.0], [66.2, 2213.0], [66.3, 2216.0], [66.4, 2219.0], [66.5, 2219.0], [66.6, 2220.0], [66.7, 2221.0], [66.8, 2221.0], [66.9, 2222.0], [67.0, 2222.0], [67.1, 2224.0], [67.2, 2224.0], [67.3, 2224.0], [67.4, 2227.0], [67.5, 2229.0], [67.6, 2229.0], [67.7, 2232.0], [67.8, 2232.0], [67.9, 2236.0], [68.0, 2236.0], [68.1, 2236.0], [68.2, 2240.0], [68.3, 2247.0], [68.4, 2247.0], [68.5, 2247.0], [68.6, 2248.0], [68.7, 2248.0], [68.8, 2255.0], [68.9, 2255.0], [69.0, 2257.0], [69.1, 2257.0], [69.2, 2258.0], [69.3, 2259.0], [69.4, 2261.0], [69.5, 2261.0], [69.6, 2268.0], [69.7, 2275.0], [69.8, 2275.0], [69.9, 2275.0], [70.0, 2285.0], [70.1, 2285.0], [70.2, 2285.0], [70.3, 2287.0], [70.4, 2289.0], [70.5, 2291.0], [70.6, 2291.0], [70.7, 2299.0], [70.8, 2300.0], [70.9, 2304.0], [71.0, 2304.0], [71.1, 2311.0], [71.2, 2313.0], [71.3, 2316.0], [71.4, 2316.0], [71.5, 2318.0], [71.6, 2318.0], [71.7, 2318.0], [71.8, 2319.0], [71.9, 2323.0], [72.0, 2324.0], [72.1, 2324.0], [72.2, 2324.0], [72.3, 2330.0], [72.4, 2340.0], [72.5, 2340.0], [72.6, 2344.0], [72.7, 2346.0], [72.8, 2350.0], [72.9, 2350.0], [73.0, 2352.0], [73.1, 2353.0], [73.2, 2354.0], [73.3, 2354.0], [73.4, 2362.0], [73.5, 2371.0], [73.6, 2371.0], [73.7, 2371.0], [73.8, 2375.0], [73.9, 2375.0], [74.0, 2375.0], [74.1, 2376.0], [74.2, 2380.0], [74.3, 2381.0], [74.4, 2381.0], [74.5, 2383.0], [74.6, 2383.0], [74.7, 2391.0], [74.8, 2391.0], [74.9, 2392.0], [75.0, 2392.0], [75.1, 2392.0], [75.2, 2395.0], [75.3, 2408.0], [75.4, 2411.0], [75.5, 2411.0], [75.6, 2427.0], [75.7, 2434.0], [75.8, 2439.0], [75.9, 2439.0], [76.0, 2440.0], [76.1, 2440.0], [76.2, 2441.0], [76.3, 2441.0], [76.4, 2442.0], [76.5, 2445.0], [76.6, 2448.0], [76.7, 2448.0], [76.8, 2449.0], [76.9, 2450.0], [77.0, 2450.0], [77.1, 2458.0], [77.2, 2461.0], [77.3, 2462.0], [77.4, 2462.0], [77.5, 2464.0], [77.6, 2465.0], [77.7, 2465.0], [77.8, 2465.0], [77.9, 2469.0], [78.0, 2473.0], [78.1, 2480.0], [78.2, 2480.0], [78.3, 2482.0], [78.4, 2484.0], [78.5, 2484.0], [78.6, 2484.0], [78.7, 2484.0], [78.8, 2484.0], [78.9, 2484.0], [79.0, 2485.0], [79.1, 2487.0], [79.2, 2491.0], [79.3, 2491.0], [79.4, 2492.0], [79.5, 2496.0], [79.6, 2499.0], [79.7, 2499.0], [79.8, 2500.0], [79.9, 2504.0], [80.0, 2525.0], [80.1, 2525.0], [80.2, 2526.0], [80.3, 2528.0], [80.4, 2528.0], [80.5, 2531.0], [80.6, 2531.0], [80.7, 2532.0], [80.8, 2532.0], [80.9, 2532.0], [81.0, 2535.0], [81.1, 2545.0], [81.2, 2545.0], [81.3, 2546.0], [81.4, 2546.0], [81.5, 2552.0], [81.6, 2552.0], [81.7, 2552.0], [81.8, 2554.0], [81.9, 2554.0], [82.0, 2563.0], [82.1, 2563.0], [82.2, 2570.0], [82.3, 2570.0], [82.4, 2570.0], [82.5, 2570.0], [82.6, 2570.0], [82.7, 2570.0], [82.8, 2576.0], [82.9, 2577.0], [83.0, 2579.0], [83.1, 2579.0], [83.2, 2600.0], [83.3, 2603.0], [83.4, 2603.0], [83.5, 2608.0], [83.6, 2608.0], [83.7, 2611.0], [83.8, 2611.0], [83.9, 2613.0], [84.0, 2614.0], [84.1, 2615.0], [84.2, 2615.0], [84.3, 2618.0], [84.4, 2620.0], [84.5, 2621.0], [84.6, 2621.0], [84.7, 2631.0], [84.8, 2636.0], [84.9, 2645.0], [85.0, 2645.0], [85.1, 2648.0], [85.2, 2648.0], [85.3, 2648.0], [85.4, 2649.0], [85.5, 2650.0], [85.6, 2654.0], [85.7, 2654.0], [85.8, 2655.0], [85.9, 2657.0], [86.0, 2660.0], [86.1, 2660.0], [86.2, 2661.0], [86.3, 2675.0], [86.4, 2675.0], [86.5, 2675.0], [86.6, 2678.0], [86.7, 2679.0], [86.8, 2679.0], [86.9, 2688.0], [87.0, 2697.0], [87.1, 2704.0], [87.2, 2704.0], [87.3, 2715.0], [87.4, 2716.0], [87.5, 2718.0], [87.6, 2718.0], [87.7, 2725.0], [87.8, 2732.0], [87.9, 2735.0], [88.0, 2735.0], [88.1, 2735.0], [88.2, 2746.0], [88.3, 2767.0], [88.4, 2767.0], [88.5, 2768.0], [88.6, 2771.0], [88.7, 2771.0], [88.8, 2776.0], [88.9, 2781.0], [89.0, 2783.0], [89.1, 2783.0], [89.2, 2787.0], [89.3, 2799.0], [89.4, 2799.0], [89.5, 2799.0], [89.6, 2810.0], [89.7, 2811.0], [89.8, 2812.0], [89.9, 2812.0], [90.0, 2823.0], [90.1, 2823.0], [90.2, 2823.0], [90.3, 2824.0], [90.4, 2840.0], [90.5, 2846.0], [90.6, 2846.0], [90.7, 2860.0], [90.8, 2874.0], [90.9, 2877.0], [91.0, 2877.0], [91.1, 2880.0], [91.2, 2889.0], [91.3, 2907.0], [91.4, 2907.0], [91.5, 2918.0], [91.6, 2941.0], [91.7, 2941.0], [91.8, 2948.0], [91.9, 2959.0], [92.0, 2967.0], [92.1, 2967.0], [92.2, 2971.0], [92.3, 2974.0], [92.4, 2988.0], [92.5, 2988.0], [92.6, 2993.0], [92.7, 3004.0], [92.8, 3005.0], [92.9, 3005.0], [93.0, 3032.0], [93.1, 3041.0], [93.2, 3048.0], [93.3, 3048.0], [93.4, 3052.0], [93.5, 3055.0], [93.6, 3055.0], [93.7, 3065.0], [93.8, 3070.0], [93.9, 3071.0], [94.0, 3071.0], [94.1, 3078.0], [94.2, 3093.0], [94.3, 3117.0], [94.4, 3117.0], [94.5, 3129.0], [94.6, 3150.0], [94.7, 3156.0], [94.8, 3156.0], [94.9, 3157.0], [95.0, 3159.0], [95.1, 3159.0], [95.2, 3176.0], [95.3, 3178.0], [95.4, 3178.0], [95.5, 3178.0], [95.6, 3178.0], [95.7, 3190.0], [95.8, 3313.0], [95.9, 3313.0], [96.0, 3338.0], [96.1, 3340.0], [96.2, 3353.0], [96.3, 3353.0], [96.4, 3372.0], [96.5, 3397.0], [96.6, 3406.0], [96.7, 3406.0], [96.8, 3406.0], [96.9, 3414.0], [97.0, 3414.0], [97.1, 3421.0], [97.2, 3450.0], [97.3, 3472.0], [97.4, 3472.0], [97.5, 3511.0], [97.6, 3529.0], [97.7, 3578.0], [97.8, 3578.0], [97.9, 3624.0], [98.0, 3641.0], [98.1, 3683.0], [98.2, 3683.0], [98.3, 3695.0], [98.4, 3714.0], [98.5, 3714.0], [98.6, 3941.0], [98.7, 3969.0], [98.8, 3994.0], [98.9, 3994.0], [99.0, 4203.0], [99.1, 4290.0], [99.2, 4486.0], [99.3, 4486.0], [99.4, 4503.0], [99.5, 4735.0], [99.6, 4955.0], [99.7, 4955.0], [99.8, 5576.0], [99.9, 5637.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 600.0, "maxY": 63.0, "series": [{"data": [[600.0, 1.0], [800.0, 2.0], [900.0, 14.0], [1000.0, 12.0], [1100.0, 25.0], [1200.0, 32.0], [1300.0, 44.0], [1400.0, 34.0], [1500.0, 32.0], [1600.0, 25.0], [1700.0, 46.0], [1800.0, 54.0], [1900.0, 60.0], [2000.0, 63.0], [2100.0, 39.0], [2200.0, 37.0], [2300.0, 33.0], [2400.0, 33.0], [2500.0, 25.0], [2600.0, 29.0], [2700.0, 18.0], [2800.0, 13.0], [2900.0, 10.0], [3000.0, 12.0], [3100.0, 11.0], [3300.0, 6.0], [3400.0, 6.0], [3500.0, 3.0], [3700.0, 1.0], [3600.0, 4.0], [3900.0, 3.0], [4200.0, 2.0], [4400.0, 1.0], [4500.0, 1.0], [4700.0, 1.0], [4900.0, 1.0], [5500.0, 1.0], [5600.0, 1.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 5600.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 164.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 571.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 164.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 571.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 11.787096774193547, "minX": 1.60440192E12, "maxY": 12.0, "series": [{"data": [[1.60440204E12, 11.787096774193547], [1.60440192E12, 11.984848484848483], [1.60440198E12, 12.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60440204E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 1004.0, "minX": 1.0, "maxY": 2874.0, "series": [{"data": [[8.0, 1279.0], [4.0, 1199.0], [2.0, 1640.0], [1.0, 1656.0], [9.0, 1576.0], [10.0, 2874.0], [5.0, 1272.0], [11.0, 1004.0], [12.0, 2042.4744121715094], [6.0, 1595.0], [3.0, 1644.0], [7.0, 2631.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[11.908843537414967, 2035.4870748299322]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 12.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 498.4166666666667, "minX": 1.60440192E12, "maxY": 905824.8, "series": [{"data": [[1.60440204E12, 700794.6166666667], [1.60440192E12, 229162.75], [1.60440198E12, 905824.8]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60440204E12, 2330.05], [1.60440192E12, 498.4166666666667], [1.60440198E12, 2694.5666666666666]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60440204E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 1990.4242424242423, "minX": 1.60440192E12, "maxY": 2048.9161290322586, "series": [{"data": [[1.60440204E12, 2048.9161290322586], [1.60440192E12, 1990.4242424242423], [1.60440198E12, 2032.17548746518]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60440204E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 1989.1212121212125, "minX": 1.60440192E12, "maxY": 2047.9064516129038, "series": [{"data": [[1.60440204E12, 2047.9064516129038], [1.60440192E12, 1989.1212121212125], [1.60440198E12, 2030.9498607242328]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60440204E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.03899721448467966, "minX": 1.60440192E12, "maxY": 2.0606060606060597, "series": [{"data": [[1.60440204E12, 0.04838709677419355], [1.60440192E12, 2.0606060606060597], [1.60440198E12, 0.03899721448467966]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60440204E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 692.0, "minX": 1.60440192E12, "maxY": 5637.0, "series": [{"data": [[1.60440204E12, 3641.0], [1.60440192E12, 5637.0], [1.60440198E12, 4735.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60440204E12, 947.9799985170364], [1.60440192E12, 692.0], [1.60440198E12, 963.2399999141693]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60440204E12, 953.1046004152298], [1.60440192E12, 692.0], [1.60440198E12, 963.5640000343323]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60440204E12, 951.0899992585182], [1.60440192E12, 692.0], [1.60440198E12, 963.4199999570847]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60440204E12, 890.0], [1.60440192E12, 692.0], [1.60440198E12, 801.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60440204E12, 2026.5], [1.60440192E12, 1708.5], [1.60440198E12, 1960.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60440204E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 692.0, "minX": 1.0, "maxY": 2487.0, "series": [{"data": [[1.0, 692.0], [2.0, 1225.5], [4.0, 2337.5], [8.0, 1453.0], [9.0, 1728.0], [5.0, 2117.0], [10.0, 1701.5], [11.0, 1355.0], [6.0, 2037.0], [3.0, 2487.0], [7.0, 1814.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 11.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 687.0, "minX": 1.0, "maxY": 2484.0, "series": [{"data": [[1.0, 687.0], [2.0, 1223.0], [4.0, 2336.0], [8.0, 1452.5], [9.0, 1728.0], [5.0, 2116.0], [10.0, 1699.5], [11.0, 1354.5], [6.0, 2035.0], [3.0, 2484.0], [7.0, 1813.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 11.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1.3, "minX": 1.60440192E12, "maxY": 5.983333333333333, "series": [{"data": [[1.60440204E12, 4.966666666666667], [1.60440192E12, 1.3], [1.60440198E12, 5.983333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60440204E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1.1, "minX": 1.60440192E12, "maxY": 5.983333333333333, "series": [{"data": [[1.60440204E12, 5.166666666666667], [1.60440192E12, 1.1], [1.60440198E12, 5.983333333333333]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60440204E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.1, "minX": 1.60440192E12, "maxY": 5.983333333333333, "series": [{"data": [[1.60440204E12, 5.166666666666667], [1.60440192E12, 1.1], [1.60440198E12, 5.983333333333333]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60440204E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.1, "minX": 1.60440192E12, "maxY": 5.983333333333333, "series": [{"data": [[1.60440204E12, 5.166666666666667], [1.60440192E12, 1.1], [1.60440198E12, 5.983333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60440204E12, "title": "Total Transactions Per Second"}},
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

