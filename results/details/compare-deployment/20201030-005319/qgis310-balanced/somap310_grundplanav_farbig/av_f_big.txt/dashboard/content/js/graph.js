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
        data: {"result": {"minY": 779.0, "minX": 0.0, "maxY": 4409.0, "series": [{"data": [[0.0, 779.0], [0.1, 779.0], [0.2, 786.0], [0.3, 836.0], [0.4, 836.0], [0.5, 836.0], [0.6, 875.0], [0.7, 889.0], [0.8, 889.0], [0.9, 890.0], [1.0, 905.0], [1.1, 906.0], [1.2, 906.0], [1.3, 909.0], [1.4, 946.0], [1.5, 950.0], [1.6, 950.0], [1.7, 953.0], [1.8, 976.0], [1.9, 976.0], [2.0, 977.0], [2.1, 994.0], [2.2, 998.0], [2.3, 998.0], [2.4, 999.0], [2.5, 1006.0], [2.6, 1009.0], [2.7, 1009.0], [2.8, 1013.0], [2.9, 1013.0], [3.0, 1018.0], [3.1, 1018.0], [3.2, 1029.0], [3.3, 1031.0], [3.4, 1031.0], [3.5, 1046.0], [3.6, 1055.0], [3.7, 1056.0], [3.8, 1056.0], [3.9, 1058.0], [4.0, 1060.0], [4.1, 1076.0], [4.2, 1076.0], [4.3, 1076.0], [4.4, 1081.0], [4.5, 1088.0], [4.6, 1088.0], [4.7, 1093.0], [4.8, 1094.0], [4.9, 1095.0], [5.0, 1095.0], [5.1, 1096.0], [5.2, 1103.0], [5.3, 1103.0], [5.4, 1110.0], [5.5, 1113.0], [5.6, 1116.0], [5.7, 1116.0], [5.8, 1122.0], [5.9, 1131.0], [6.0, 1136.0], [6.1, 1136.0], [6.2, 1138.0], [6.3, 1149.0], [6.4, 1150.0], [6.5, 1150.0], [6.6, 1154.0], [6.7, 1154.0], [6.8, 1154.0], [6.9, 1154.0], [7.0, 1161.0], [7.1, 1164.0], [7.2, 1164.0], [7.3, 1167.0], [7.4, 1168.0], [7.5, 1169.0], [7.6, 1169.0], [7.7, 1169.0], [7.8, 1170.0], [7.9, 1170.0], [8.0, 1170.0], [8.1, 1173.0], [8.2, 1176.0], [8.3, 1177.0], [8.4, 1177.0], [8.5, 1178.0], [8.6, 1179.0], [8.7, 1179.0], [8.8, 1183.0], [8.9, 1185.0], [9.0, 1185.0], [9.1, 1185.0], [9.2, 1197.0], [9.3, 1198.0], [9.4, 1199.0], [9.5, 1199.0], [9.6, 1199.0], [9.7, 1208.0], [9.8, 1209.0], [9.9, 1209.0], [10.0, 1217.0], [10.1, 1218.0], [10.2, 1218.0], [10.3, 1223.0], [10.4, 1223.0], [10.5, 1234.0], [10.6, 1234.0], [10.7, 1235.0], [10.8, 1239.0], [10.9, 1242.0], [11.0, 1242.0], [11.1, 1242.0], [11.2, 1243.0], [11.3, 1244.0], [11.4, 1244.0], [11.5, 1245.0], [11.6, 1248.0], [11.7, 1248.0], [11.8, 1248.0], [11.9, 1249.0], [12.0, 1252.0], [12.1, 1252.0], [12.2, 1254.0], [12.3, 1256.0], [12.4, 1257.0], [12.5, 1257.0], [12.6, 1259.0], [12.7, 1262.0], [12.8, 1262.0], [12.9, 1262.0], [13.0, 1265.0], [13.1, 1267.0], [13.2, 1275.0], [13.3, 1275.0], [13.4, 1277.0], [13.5, 1277.0], [13.6, 1277.0], [13.7, 1279.0], [13.8, 1280.0], [13.9, 1281.0], [14.0, 1281.0], [14.1, 1282.0], [14.2, 1295.0], [14.3, 1296.0], [14.4, 1296.0], [14.5, 1303.0], [14.6, 1309.0], [14.7, 1309.0], [14.8, 1309.0], [14.9, 1316.0], [15.0, 1316.0], [15.1, 1316.0], [15.2, 1318.0], [15.3, 1322.0], [15.4, 1325.0], [15.5, 1325.0], [15.6, 1326.0], [15.7, 1327.0], [15.8, 1327.0], [15.9, 1327.0], [16.0, 1329.0], [16.1, 1330.0], [16.2, 1340.0], [16.3, 1340.0], [16.4, 1344.0], [16.5, 1344.0], [16.6, 1350.0], [16.7, 1350.0], [16.8, 1351.0], [16.9, 1355.0], [17.0, 1355.0], [17.1, 1356.0], [17.2, 1357.0], [17.3, 1357.0], [17.4, 1357.0], [17.5, 1364.0], [17.6, 1368.0], [17.7, 1368.0], [17.8, 1368.0], [17.9, 1369.0], [18.0, 1372.0], [18.1, 1390.0], [18.2, 1390.0], [18.3, 1391.0], [18.4, 1395.0], [18.5, 1395.0], [18.6, 1401.0], [18.7, 1403.0], [18.8, 1404.0], [18.9, 1404.0], [19.0, 1409.0], [19.1, 1412.0], [19.2, 1416.0], [19.3, 1416.0], [19.4, 1429.0], [19.5, 1434.0], [19.6, 1435.0], [19.7, 1435.0], [19.8, 1436.0], [19.9, 1446.0], [20.0, 1446.0], [20.1, 1446.0], [20.2, 1452.0], [20.3, 1453.0], [20.4, 1453.0], [20.5, 1455.0], [20.6, 1457.0], [20.7, 1458.0], [20.8, 1458.0], [20.9, 1459.0], [21.0, 1460.0], [21.1, 1464.0], [21.2, 1464.0], [21.3, 1468.0], [21.4, 1469.0], [21.5, 1469.0], [21.6, 1469.0], [21.7, 1478.0], [21.8, 1480.0], [21.9, 1480.0], [22.0, 1482.0], [22.1, 1483.0], [22.2, 1484.0], [22.3, 1484.0], [22.4, 1485.0], [22.5, 1487.0], [22.6, 1488.0], [22.7, 1488.0], [22.8, 1491.0], [22.9, 1493.0], [23.0, 1494.0], [23.1, 1494.0], [23.2, 1494.0], [23.3, 1497.0], [23.4, 1497.0], [23.5, 1499.0], [23.6, 1501.0], [23.7, 1506.0], [23.8, 1506.0], [23.9, 1511.0], [24.0, 1516.0], [24.1, 1517.0], [24.2, 1517.0], [24.3, 1522.0], [24.4, 1522.0], [24.5, 1524.0], [24.6, 1524.0], [24.7, 1528.0], [24.8, 1528.0], [24.9, 1530.0], [25.0, 1530.0], [25.1, 1530.0], [25.2, 1530.0], [25.3, 1530.0], [25.4, 1531.0], [25.5, 1532.0], [25.6, 1537.0], [25.7, 1537.0], [25.8, 1537.0], [25.9, 1547.0], [26.0, 1548.0], [26.1, 1548.0], [26.2, 1548.0], [26.3, 1552.0], [26.4, 1553.0], [26.5, 1553.0], [26.6, 1556.0], [26.7, 1557.0], [26.8, 1557.0], [26.9, 1568.0], [27.0, 1571.0], [27.1, 1573.0], [27.2, 1573.0], [27.3, 1573.0], [27.4, 1573.0], [27.5, 1573.0], [27.6, 1573.0], [27.7, 1576.0], [27.8, 1581.0], [27.9, 1585.0], [28.0, 1585.0], [28.1, 1586.0], [28.2, 1587.0], [28.3, 1592.0], [28.4, 1592.0], [28.5, 1595.0], [28.6, 1595.0], [28.7, 1595.0], [28.8, 1596.0], [28.9, 1596.0], [29.0, 1598.0], [29.1, 1598.0], [29.2, 1598.0], [29.3, 1601.0], [29.4, 1601.0], [29.5, 1601.0], [29.6, 1607.0], [29.7, 1607.0], [29.8, 1610.0], [29.9, 1610.0], [30.0, 1615.0], [30.1, 1622.0], [30.2, 1622.0], [30.3, 1624.0], [30.4, 1625.0], [30.5, 1626.0], [30.6, 1626.0], [30.7, 1626.0], [30.8, 1628.0], [30.9, 1631.0], [31.0, 1631.0], [31.1, 1637.0], [31.2, 1637.0], [31.3, 1644.0], [31.4, 1644.0], [31.5, 1645.0], [31.6, 1646.0], [31.7, 1646.0], [31.8, 1650.0], [31.9, 1651.0], [32.0, 1651.0], [32.1, 1651.0], [32.2, 1652.0], [32.3, 1652.0], [32.4, 1656.0], [32.5, 1656.0], [32.6, 1657.0], [32.7, 1658.0], [32.8, 1659.0], [32.9, 1659.0], [33.0, 1660.0], [33.1, 1665.0], [33.2, 1666.0], [33.3, 1666.0], [33.4, 1666.0], [33.5, 1669.0], [33.6, 1669.0], [33.7, 1671.0], [33.8, 1677.0], [33.9, 1678.0], [34.0, 1678.0], [34.1, 1678.0], [34.2, 1678.0], [34.3, 1682.0], [34.4, 1682.0], [34.5, 1682.0], [34.6, 1685.0], [34.7, 1687.0], [34.8, 1687.0], [34.9, 1687.0], [35.0, 1696.0], [35.1, 1696.0], [35.2, 1697.0], [35.3, 1698.0], [35.4, 1704.0], [35.5, 1704.0], [35.6, 1705.0], [35.7, 1706.0], [35.8, 1706.0], [35.9, 1706.0], [36.0, 1707.0], [36.1, 1708.0], [36.2, 1712.0], [36.3, 1712.0], [36.4, 1717.0], [36.5, 1719.0], [36.6, 1721.0], [36.7, 1721.0], [36.8, 1721.0], [36.9, 1722.0], [37.0, 1722.0], [37.1, 1723.0], [37.2, 1725.0], [37.3, 1727.0], [37.4, 1727.0], [37.5, 1728.0], [37.6, 1732.0], [37.7, 1736.0], [37.8, 1736.0], [37.9, 1737.0], [38.0, 1738.0], [38.1, 1742.0], [38.2, 1742.0], [38.3, 1745.0], [38.4, 1746.0], [38.5, 1746.0], [38.6, 1747.0], [38.7, 1753.0], [38.8, 1757.0], [38.9, 1757.0], [39.0, 1757.0], [39.1, 1759.0], [39.2, 1759.0], [39.3, 1759.0], [39.4, 1763.0], [39.5, 1764.0], [39.6, 1769.0], [39.7, 1769.0], [39.8, 1771.0], [39.9, 1775.0], [40.0, 1775.0], [40.1, 1775.0], [40.2, 1776.0], [40.3, 1777.0], [40.4, 1777.0], [40.5, 1780.0], [40.6, 1782.0], [40.7, 1784.0], [40.8, 1784.0], [40.9, 1785.0], [41.0, 1786.0], [41.1, 1787.0], [41.2, 1787.0], [41.3, 1789.0], [41.4, 1792.0], [41.5, 1793.0], [41.6, 1793.0], [41.7, 1793.0], [41.8, 1799.0], [41.9, 1799.0], [42.0, 1799.0], [42.1, 1801.0], [42.2, 1806.0], [42.3, 1806.0], [42.4, 1817.0], [42.5, 1821.0], [42.6, 1823.0], [42.7, 1823.0], [42.8, 1823.0], [42.9, 1827.0], [43.0, 1828.0], [43.1, 1828.0], [43.2, 1829.0], [43.3, 1830.0], [43.4, 1830.0], [43.5, 1830.0], [43.6, 1832.0], [43.7, 1833.0], [43.8, 1833.0], [43.9, 1834.0], [44.0, 1838.0], [44.1, 1843.0], [44.2, 1843.0], [44.3, 1843.0], [44.4, 1843.0], [44.5, 1843.0], [44.6, 1843.0], [44.7, 1846.0], [44.8, 1847.0], [44.9, 1850.0], [45.0, 1850.0], [45.1, 1856.0], [45.2, 1859.0], [45.3, 1859.0], [45.4, 1863.0], [45.5, 1867.0], [45.6, 1870.0], [45.7, 1870.0], [45.8, 1870.0], [45.9, 1871.0], [46.0, 1873.0], [46.1, 1873.0], [46.2, 1873.0], [46.3, 1873.0], [46.4, 1877.0], [46.5, 1877.0], [46.6, 1883.0], [46.7, 1895.0], [46.8, 1895.0], [46.9, 1903.0], [47.0, 1903.0], [47.1, 1903.0], [47.2, 1903.0], [47.3, 1906.0], [47.4, 1909.0], [47.5, 1913.0], [47.6, 1913.0], [47.7, 1917.0], [47.8, 1919.0], [47.9, 1924.0], [48.0, 1924.0], [48.1, 1925.0], [48.2, 1927.0], [48.3, 1933.0], [48.4, 1933.0], [48.5, 1933.0], [48.6, 1944.0], [48.7, 1944.0], [48.8, 1950.0], [48.9, 1951.0], [49.0, 1951.0], [49.1, 1951.0], [49.2, 1951.0], [49.3, 1952.0], [49.4, 1952.0], [49.5, 1952.0], [49.6, 1952.0], [49.7, 1953.0], [49.8, 1954.0], [49.9, 1954.0], [50.0, 1955.0], [50.1, 1956.0], [50.2, 1956.0], [50.3, 1957.0], [50.4, 1961.0], [50.5, 1963.0], [50.6, 1963.0], [50.7, 1968.0], [50.8, 1969.0], [50.9, 1971.0], [51.0, 1971.0], [51.1, 1971.0], [51.2, 1972.0], [51.3, 1972.0], [51.4, 1972.0], [51.5, 1975.0], [51.6, 1981.0], [51.7, 1981.0], [51.8, 1981.0], [51.9, 1986.0], [52.0, 2002.0], [52.1, 2002.0], [52.2, 2003.0], [52.3, 2003.0], [52.4, 2005.0], [52.5, 2005.0], [52.6, 2005.0], [52.7, 2006.0], [52.8, 2008.0], [52.9, 2008.0], [53.0, 2009.0], [53.1, 2013.0], [53.2, 2013.0], [53.3, 2013.0], [53.4, 2015.0], [53.5, 2015.0], [53.6, 2015.0], [53.7, 2016.0], [53.8, 2017.0], [53.9, 2017.0], [54.0, 2017.0], [54.1, 2019.0], [54.2, 2020.0], [54.3, 2021.0], [54.4, 2021.0], [54.5, 2022.0], [54.6, 2022.0], [54.7, 2023.0], [54.8, 2023.0], [54.9, 2024.0], [55.0, 2025.0], [55.1, 2025.0], [55.2, 2026.0], [55.3, 2026.0], [55.4, 2027.0], [55.5, 2027.0], [55.6, 2027.0], [55.7, 2029.0], [55.8, 2032.0], [55.9, 2032.0], [56.0, 2033.0], [56.1, 2042.0], [56.2, 2043.0], [56.3, 2043.0], [56.4, 2044.0], [56.5, 2046.0], [56.6, 2046.0], [56.7, 2046.0], [56.8, 2048.0], [56.9, 2048.0], [57.0, 2048.0], [57.1, 2052.0], [57.2, 2054.0], [57.3, 2061.0], [57.4, 2061.0], [57.5, 2062.0], [57.6, 2063.0], [57.7, 2066.0], [57.8, 2066.0], [57.9, 2067.0], [58.0, 2076.0], [58.1, 2079.0], [58.2, 2079.0], [58.3, 2085.0], [58.4, 2093.0], [58.5, 2093.0], [58.6, 2100.0], [58.7, 2101.0], [58.8, 2102.0], [58.9, 2102.0], [59.0, 2102.0], [59.1, 2103.0], [59.2, 2103.0], [59.3, 2103.0], [59.4, 2105.0], [59.5, 2108.0], [59.6, 2113.0], [59.7, 2113.0], [59.8, 2114.0], [59.9, 2115.0], [60.0, 2115.0], [60.1, 2115.0], [60.2, 2115.0], [60.3, 2117.0], [60.4, 2117.0], [60.5, 2124.0], [60.6, 2124.0], [60.7, 2129.0], [60.8, 2129.0], [60.9, 2129.0], [61.0, 2133.0], [61.1, 2134.0], [61.2, 2134.0], [61.3, 2142.0], [61.4, 2144.0], [61.5, 2145.0], [61.6, 2145.0], [61.7, 2149.0], [61.8, 2152.0], [61.9, 2152.0], [62.0, 2153.0], [62.1, 2155.0], [62.2, 2155.0], [62.3, 2155.0], [62.4, 2157.0], [62.5, 2162.0], [62.6, 2162.0], [62.7, 2162.0], [62.8, 2163.0], [62.9, 2169.0], [63.0, 2174.0], [63.1, 2174.0], [63.2, 2176.0], [63.3, 2179.0], [63.4, 2179.0], [63.5, 2181.0], [63.6, 2183.0], [63.7, 2184.0], [63.8, 2184.0], [63.9, 2185.0], [64.0, 2186.0], [64.1, 2188.0], [64.2, 2188.0], [64.3, 2190.0], [64.4, 2190.0], [64.5, 2192.0], [64.6, 2192.0], [64.7, 2194.0], [64.8, 2196.0], [64.9, 2197.0], [65.0, 2197.0], [65.1, 2198.0], [65.2, 2199.0], [65.3, 2199.0], [65.4, 2200.0], [65.5, 2200.0], [65.6, 2202.0], [65.7, 2202.0], [65.8, 2205.0], [65.9, 2206.0], [66.0, 2206.0], [66.1, 2206.0], [66.2, 2206.0], [66.3, 2208.0], [66.4, 2209.0], [66.5, 2209.0], [66.6, 2209.0], [66.7, 2209.0], [66.8, 2209.0], [66.9, 2213.0], [67.0, 2215.0], [67.1, 2216.0], [67.2, 2216.0], [67.3, 2217.0], [67.4, 2218.0], [67.5, 2222.0], [67.6, 2222.0], [67.7, 2225.0], [67.8, 2225.0], [67.9, 2233.0], [68.0, 2233.0], [68.1, 2237.0], [68.2, 2238.0], [68.3, 2244.0], [68.4, 2244.0], [68.5, 2246.0], [68.6, 2248.0], [68.7, 2248.0], [68.8, 2255.0], [68.9, 2260.0], [69.0, 2262.0], [69.1, 2262.0], [69.2, 2263.0], [69.3, 2269.0], [69.4, 2270.0], [69.5, 2270.0], [69.6, 2271.0], [69.7, 2274.0], [69.8, 2274.0], [69.9, 2274.0], [70.0, 2281.0], [70.1, 2284.0], [70.2, 2284.0], [70.3, 2286.0], [70.4, 2286.0], [70.5, 2293.0], [70.6, 2293.0], [70.7, 2299.0], [70.8, 2300.0], [70.9, 2307.0], [71.0, 2307.0], [71.1, 2308.0], [71.2, 2309.0], [71.3, 2310.0], [71.4, 2310.0], [71.5, 2314.0], [71.6, 2318.0], [71.7, 2318.0], [71.8, 2319.0], [71.9, 2320.0], [72.0, 2322.0], [72.1, 2322.0], [72.2, 2323.0], [72.3, 2331.0], [72.4, 2333.0], [72.5, 2333.0], [72.6, 2334.0], [72.7, 2335.0], [72.8, 2338.0], [72.9, 2338.0], [73.0, 2341.0], [73.1, 2342.0], [73.2, 2343.0], [73.3, 2343.0], [73.4, 2345.0], [73.5, 2345.0], [73.6, 2345.0], [73.7, 2345.0], [73.8, 2345.0], [73.9, 2348.0], [74.0, 2348.0], [74.1, 2350.0], [74.2, 2351.0], [74.3, 2352.0], [74.4, 2352.0], [74.5, 2354.0], [74.6, 2356.0], [74.7, 2358.0], [74.8, 2358.0], [74.9, 2362.0], [75.0, 2365.0], [75.1, 2365.0], [75.2, 2369.0], [75.3, 2370.0], [75.4, 2371.0], [75.5, 2371.0], [75.6, 2372.0], [75.7, 2373.0], [75.8, 2373.0], [75.9, 2373.0], [76.0, 2376.0], [76.1, 2381.0], [76.2, 2384.0], [76.3, 2384.0], [76.4, 2384.0], [76.5, 2386.0], [76.6, 2388.0], [76.7, 2388.0], [76.8, 2391.0], [76.9, 2395.0], [77.0, 2395.0], [77.1, 2399.0], [77.2, 2403.0], [77.3, 2408.0], [77.4, 2408.0], [77.5, 2411.0], [77.6, 2412.0], [77.7, 2415.0], [77.8, 2415.0], [77.9, 2420.0], [78.0, 2421.0], [78.1, 2421.0], [78.2, 2421.0], [78.3, 2424.0], [78.4, 2424.0], [78.5, 2424.0], [78.6, 2424.0], [78.7, 2424.0], [78.8, 2426.0], [78.9, 2426.0], [79.0, 2426.0], [79.1, 2428.0], [79.2, 2431.0], [79.3, 2431.0], [79.4, 2432.0], [79.5, 2434.0], [79.6, 2437.0], [79.7, 2437.0], [79.8, 2438.0], [79.9, 2439.0], [80.0, 2439.0], [80.1, 2439.0], [80.2, 2440.0], [80.3, 2440.0], [80.4, 2440.0], [80.5, 2441.0], [80.6, 2442.0], [80.7, 2442.0], [80.8, 2442.0], [80.9, 2456.0], [81.0, 2458.0], [81.1, 2460.0], [81.2, 2460.0], [81.3, 2465.0], [81.4, 2467.0], [81.5, 2475.0], [81.6, 2475.0], [81.7, 2478.0], [81.8, 2480.0], [81.9, 2480.0], [82.0, 2480.0], [82.1, 2483.0], [82.2, 2484.0], [82.3, 2484.0], [82.4, 2493.0], [82.5, 2495.0], [82.6, 2496.0], [82.7, 2496.0], [82.8, 2498.0], [82.9, 2512.0], [83.0, 2514.0], [83.1, 2514.0], [83.2, 2515.0], [83.3, 2517.0], [83.4, 2517.0], [83.5, 2517.0], [83.6, 2522.0], [83.7, 2530.0], [83.8, 2530.0], [83.9, 2533.0], [84.0, 2537.0], [84.1, 2538.0], [84.2, 2538.0], [84.3, 2539.0], [84.4, 2545.0], [84.5, 2546.0], [84.6, 2546.0], [84.7, 2549.0], [84.8, 2551.0], [84.9, 2556.0], [85.0, 2556.0], [85.1, 2557.0], [85.2, 2558.0], [85.3, 2558.0], [85.4, 2560.0], [85.5, 2569.0], [85.6, 2575.0], [85.7, 2575.0], [85.8, 2580.0], [85.9, 2587.0], [86.0, 2588.0], [86.1, 2588.0], [86.2, 2591.0], [86.3, 2596.0], [86.4, 2601.0], [86.5, 2601.0], [86.6, 2601.0], [86.7, 2602.0], [86.8, 2602.0], [86.9, 2607.0], [87.0, 2611.0], [87.1, 2611.0], [87.2, 2611.0], [87.3, 2611.0], [87.4, 2611.0], [87.5, 2611.0], [87.6, 2611.0], [87.7, 2620.0], [87.8, 2633.0], [87.9, 2634.0], [88.0, 2634.0], [88.1, 2637.0], [88.2, 2645.0], [88.3, 2650.0], [88.4, 2650.0], [88.5, 2652.0], [88.6, 2652.0], [88.7, 2652.0], [88.8, 2657.0], [88.9, 2659.0], [89.0, 2660.0], [89.1, 2660.0], [89.2, 2667.0], [89.3, 2676.0], [89.4, 2677.0], [89.5, 2677.0], [89.6, 2688.0], [89.7, 2726.0], [89.8, 2732.0], [89.9, 2732.0], [90.0, 2733.0], [90.1, 2734.0], [90.2, 2734.0], [90.3, 2738.0], [90.4, 2743.0], [90.5, 2747.0], [90.6, 2747.0], [90.7, 2747.0], [90.8, 2747.0], [90.9, 2750.0], [91.0, 2750.0], [91.1, 2753.0], [91.2, 2754.0], [91.3, 2756.0], [91.4, 2756.0], [91.5, 2760.0], [91.6, 2762.0], [91.7, 2762.0], [91.8, 2763.0], [91.9, 2766.0], [92.0, 2785.0], [92.1, 2785.0], [92.2, 2793.0], [92.3, 2794.0], [92.4, 2795.0], [92.5, 2795.0], [92.6, 2804.0], [92.7, 2822.0], [92.8, 2824.0], [92.9, 2824.0], [93.0, 2832.0], [93.1, 2843.0], [93.2, 2865.0], [93.3, 2865.0], [93.4, 2882.0], [93.5, 2901.0], [93.6, 2901.0], [93.7, 2908.0], [93.8, 2921.0], [93.9, 2930.0], [94.0, 2930.0], [94.1, 2949.0], [94.2, 2954.0], [94.3, 2955.0], [94.4, 2955.0], [94.5, 2988.0], [94.6, 2994.0], [94.7, 3011.0], [94.8, 3011.0], [94.9, 3018.0], [95.0, 3034.0], [95.1, 3034.0], [95.2, 3037.0], [95.3, 3059.0], [95.4, 3060.0], [95.5, 3060.0], [95.6, 3103.0], [95.7, 3121.0], [95.8, 3123.0], [95.9, 3123.0], [96.0, 3146.0], [96.1, 3155.0], [96.2, 3168.0], [96.3, 3168.0], [96.4, 3168.0], [96.5, 3169.0], [96.6, 3176.0], [96.7, 3176.0], [96.8, 3197.0], [96.9, 3201.0], [97.0, 3201.0], [97.1, 3223.0], [97.2, 3241.0], [97.3, 3277.0], [97.4, 3277.0], [97.5, 3279.0], [97.6, 3313.0], [97.7, 3333.0], [97.8, 3333.0], [97.9, 3355.0], [98.0, 3387.0], [98.1, 3435.0], [98.2, 3435.0], [98.3, 3571.0], [98.4, 3616.0], [98.5, 3616.0], [98.6, 3871.0], [98.7, 3884.0], [98.8, 4023.0], [98.9, 4023.0], [99.0, 4161.0], [99.1, 4175.0], [99.2, 4233.0], [99.3, 4233.0], [99.4, 4292.0], [99.5, 4343.0], [99.6, 4347.0], [99.7, 4347.0], [99.8, 4361.0], [99.9, 4409.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 700.0, "maxY": 50.0, "series": [{"data": [[700.0, 2.0], [800.0, 5.0], [900.0, 11.0], [1000.0, 20.0], [1100.0, 33.0], [1200.0, 35.0], [1300.0, 30.0], [1400.0, 37.0], [1500.0, 42.0], [1600.0, 45.0], [1700.0, 49.0], [1800.0, 35.0], [1900.0, 38.0], [2000.0, 48.0], [2100.0, 50.0], [2300.0, 47.0], [2200.0, 40.0], [2400.0, 42.0], [2500.0, 26.0], [2600.0, 24.0], [2800.0, 7.0], [2700.0, 21.0], [2900.0, 9.0], [3000.0, 6.0], [3100.0, 10.0], [3200.0, 5.0], [3300.0, 4.0], [3400.0, 1.0], [3500.0, 1.0], [3600.0, 1.0], [3800.0, 2.0], [4000.0, 1.0], [4100.0, 2.0], [4300.0, 3.0], [4200.0, 2.0], [4400.0, 1.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 4400.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 173.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 562.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 173.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 562.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 11.639344262295083, "minX": 1.60402416E12, "maxY": 12.0, "series": [{"data": [[1.60402416E12, 12.0], [1.60402422E12, 12.0], [1.60402428E12, 11.639344262295083]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60402428E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 1094.0, "minX": 1.0, "maxY": 2061.0, "series": [{"data": [[8.0, 1138.0], [4.0, 1568.0], [2.0, 1592.0], [1.0, 2061.0], [9.0, 1113.0], [10.0, 1517.0], [5.0, 1154.0], [11.0, 1094.0], [12.0, 1989.595303867402], [6.0, 1169.0], [3.0, 1179.0], [7.0, 1573.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[11.910204081632651, 1980.4421768707473]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 12.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 1354.8166666666666, "minX": 1.60402416E12, "maxY": 881208.25, "series": [{"data": [[1.60402416E12, 563938.35], [1.60402422E12, 881208.25], [1.60402428E12, 390635.25]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60402416E12, 1354.8166666666666], [1.60402422E12, 2799.9666666666667], [1.60402428E12, 1368.25]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60402428E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 1864.3224043715838, "minX": 1.60402416E12, "maxY": 2210.0223463687166, "series": [{"data": [[1.60402416E12, 2210.0223463687166], [1.60402422E12, 1927.2386058981212], [1.60402428E12, 1864.3224043715838]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60402428E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 1863.3442622950815, "minX": 1.60402416E12, "maxY": 2208.6033519553057, "series": [{"data": [[1.60402416E12, 2208.6033519553057], [1.60402422E12, 1926.1286863270775], [1.60402428E12, 1863.3442622950815]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60402428E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.01092896174863388, "minX": 1.60402416E12, "maxY": 0.7150837988826817, "series": [{"data": [[1.60402416E12, 0.7150837988826817], [1.60402422E12, 0.040214477211796266], [1.60402428E12, 0.01092896174863388]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60402428E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 779.0, "minX": 1.60402416E12, "maxY": 4409.0, "series": [{"data": [[1.60402416E12, 4409.0], [1.60402422E12, 4292.0], [1.60402428E12, 3121.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60402416E12, 936.2799981117248], [1.60402422E12, 836.0], [1.60402428E12, 1056.967999868393]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60402416E12, 943.40800075531], [1.60402422E12, 836.0], [1.60402428E12, 1057.4648000526429]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60402416E12, 940.2399990558624], [1.60402422E12, 836.0], [1.60402428E12, 1057.2439999341964]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60402416E12, 909.0], [1.60402422E12, 779.0], [1.60402428E12, 1055.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60402416E12, 2149.0], [1.60402422E12, 1903.0], [1.60402428E12, 1830.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60402428E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 1192.5, "minX": 1.0, "maxY": 2509.0, "series": [{"data": [[4.0, 2509.0], [2.0, 1234.0], [8.0, 1464.0], [1.0, 2061.0], [9.0, 1583.5], [5.0, 2138.0], [10.0, 1459.5], [11.0, 1520.5], [6.0, 2034.5], [3.0, 2217.0], [12.0, 1192.5], [7.0, 1825.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 12.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 1192.5, "minX": 1.0, "maxY": 2508.0, "series": [{"data": [[4.0, 2508.0], [2.0, 1233.5], [8.0, 1464.0], [1.0, 2060.0], [9.0, 1583.5], [5.0, 2136.5], [10.0, 1459.5], [11.0, 1520.5], [6.0, 2032.0], [3.0, 2216.5], [12.0, 1192.5], [7.0, 1825.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 12.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 2.85, "minX": 1.60402416E12, "maxY": 6.216666666666667, "series": [{"data": [[1.60402416E12, 3.183333333333333], [1.60402422E12, 6.216666666666667], [1.60402428E12, 2.85]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60402428E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 2.9833333333333334, "minX": 1.60402416E12, "maxY": 6.216666666666667, "series": [{"data": [[1.60402416E12, 2.9833333333333334], [1.60402422E12, 6.216666666666667], [1.60402428E12, 3.05]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60402428E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 2.9833333333333334, "minX": 1.60402416E12, "maxY": 6.216666666666667, "series": [{"data": [[1.60402416E12, 2.9833333333333334], [1.60402422E12, 6.216666666666667], [1.60402428E12, 3.05]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60402428E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 2.9833333333333334, "minX": 1.60402416E12, "maxY": 6.216666666666667, "series": [{"data": [[1.60402416E12, 2.9833333333333334], [1.60402422E12, 6.216666666666667], [1.60402428E12, 3.05]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60402428E12, "title": "Total Transactions Per Second"}},
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

