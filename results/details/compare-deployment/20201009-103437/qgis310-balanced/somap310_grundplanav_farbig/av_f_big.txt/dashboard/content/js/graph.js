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
        data: {"result": {"minY": 725.0, "minX": 0.0, "maxY": 5010.0, "series": [{"data": [[0.0, 725.0], [0.1, 725.0], [0.2, 740.0], [0.3, 780.0], [0.4, 780.0], [0.5, 830.0], [0.6, 836.0], [0.7, 843.0], [0.8, 843.0], [0.9, 852.0], [1.0, 853.0], [1.1, 864.0], [1.2, 864.0], [1.3, 865.0], [1.4, 872.0], [1.5, 883.0], [1.6, 883.0], [1.7, 886.0], [1.8, 891.0], [1.9, 891.0], [2.0, 914.0], [2.1, 923.0], [2.2, 932.0], [2.3, 932.0], [2.4, 951.0], [2.5, 958.0], [2.6, 962.0], [2.7, 962.0], [2.8, 967.0], [2.9, 984.0], [3.0, 994.0], [3.1, 994.0], [3.2, 1015.0], [3.3, 1021.0], [3.4, 1021.0], [3.5, 1023.0], [3.6, 1028.0], [3.7, 1028.0], [3.8, 1028.0], [3.9, 1031.0], [4.0, 1035.0], [4.1, 1038.0], [4.2, 1038.0], [4.3, 1048.0], [4.4, 1049.0], [4.5, 1052.0], [4.6, 1052.0], [4.7, 1052.0], [4.8, 1053.0], [4.9, 1081.0], [5.0, 1081.0], [5.1, 1082.0], [5.2, 1084.0], [5.3, 1084.0], [5.4, 1092.0], [5.5, 1093.0], [5.6, 1094.0], [5.7, 1094.0], [5.8, 1094.0], [5.9, 1095.0], [6.0, 1096.0], [6.1, 1096.0], [6.2, 1096.0], [6.3, 1098.0], [6.4, 1102.0], [6.5, 1102.0], [6.6, 1110.0], [6.7, 1116.0], [6.8, 1116.0], [6.9, 1117.0], [7.0, 1123.0], [7.1, 1124.0], [7.2, 1124.0], [7.3, 1124.0], [7.4, 1129.0], [7.5, 1129.0], [7.6, 1129.0], [7.7, 1132.0], [7.8, 1134.0], [7.9, 1136.0], [8.0, 1136.0], [8.1, 1151.0], [8.2, 1152.0], [8.3, 1152.0], [8.4, 1152.0], [8.5, 1157.0], [8.6, 1164.0], [8.7, 1164.0], [8.8, 1167.0], [8.9, 1168.0], [9.0, 1176.0], [9.1, 1176.0], [9.2, 1184.0], [9.3, 1186.0], [9.4, 1186.0], [9.5, 1186.0], [9.6, 1188.0], [9.7, 1188.0], [9.8, 1192.0], [9.9, 1192.0], [10.0, 1195.0], [10.1, 1197.0], [10.2, 1197.0], [10.3, 1205.0], [10.4, 1205.0], [10.5, 1206.0], [10.6, 1206.0], [10.7, 1210.0], [10.8, 1210.0], [10.9, 1211.0], [11.0, 1211.0], [11.1, 1212.0], [11.2, 1223.0], [11.3, 1227.0], [11.4, 1227.0], [11.5, 1229.0], [11.6, 1230.0], [11.7, 1230.0], [11.8, 1232.0], [11.9, 1245.0], [12.0, 1257.0], [12.1, 1257.0], [12.2, 1260.0], [12.3, 1261.0], [12.4, 1272.0], [12.5, 1272.0], [12.6, 1277.0], [12.7, 1277.0], [12.8, 1280.0], [12.9, 1280.0], [13.0, 1281.0], [13.1, 1282.0], [13.2, 1287.0], [13.3, 1287.0], [13.4, 1292.0], [13.5, 1292.0], [13.6, 1292.0], [13.7, 1296.0], [13.8, 1298.0], [13.9, 1302.0], [14.0, 1302.0], [14.1, 1307.0], [14.2, 1308.0], [14.3, 1310.0], [14.4, 1310.0], [14.5, 1318.0], [14.6, 1321.0], [14.7, 1327.0], [14.8, 1327.0], [14.9, 1328.0], [15.0, 1330.0], [15.1, 1330.0], [15.2, 1337.0], [15.3, 1338.0], [15.4, 1341.0], [15.5, 1341.0], [15.6, 1348.0], [15.7, 1351.0], [15.8, 1353.0], [15.9, 1353.0], [16.0, 1357.0], [16.1, 1360.0], [16.2, 1374.0], [16.3, 1374.0], [16.4, 1376.0], [16.5, 1378.0], [16.6, 1381.0], [16.7, 1381.0], [16.8, 1383.0], [16.9, 1388.0], [17.0, 1388.0], [17.1, 1391.0], [17.2, 1401.0], [17.3, 1404.0], [17.4, 1404.0], [17.5, 1405.0], [17.6, 1406.0], [17.7, 1408.0], [17.8, 1408.0], [17.9, 1410.0], [18.0, 1413.0], [18.1, 1419.0], [18.2, 1419.0], [18.3, 1420.0], [18.4, 1420.0], [18.5, 1420.0], [18.6, 1422.0], [18.7, 1422.0], [18.8, 1426.0], [18.9, 1426.0], [19.0, 1427.0], [19.1, 1428.0], [19.2, 1432.0], [19.3, 1432.0], [19.4, 1440.0], [19.5, 1442.0], [19.6, 1448.0], [19.7, 1448.0], [19.8, 1449.0], [19.9, 1451.0], [20.0, 1454.0], [20.1, 1454.0], [20.2, 1457.0], [20.3, 1457.0], [20.4, 1457.0], [20.5, 1459.0], [20.6, 1463.0], [20.7, 1463.0], [20.8, 1463.0], [20.9, 1473.0], [21.0, 1475.0], [21.1, 1475.0], [21.2, 1475.0], [21.3, 1482.0], [21.4, 1485.0], [21.5, 1485.0], [21.6, 1485.0], [21.7, 1485.0], [21.8, 1488.0], [21.9, 1488.0], [22.0, 1490.0], [22.1, 1490.0], [22.2, 1495.0], [22.3, 1495.0], [22.4, 1506.0], [22.5, 1508.0], [22.6, 1508.0], [22.7, 1508.0], [22.8, 1512.0], [22.9, 1524.0], [23.0, 1525.0], [23.1, 1525.0], [23.2, 1525.0], [23.3, 1528.0], [23.4, 1528.0], [23.5, 1530.0], [23.6, 1532.0], [23.7, 1532.0], [23.8, 1532.0], [23.9, 1535.0], [24.0, 1536.0], [24.1, 1537.0], [24.2, 1537.0], [24.3, 1538.0], [24.4, 1539.0], [24.5, 1543.0], [24.6, 1543.0], [24.7, 1543.0], [24.8, 1544.0], [24.9, 1549.0], [25.0, 1549.0], [25.1, 1552.0], [25.2, 1552.0], [25.3, 1552.0], [25.4, 1554.0], [25.5, 1563.0], [25.6, 1565.0], [25.7, 1565.0], [25.8, 1567.0], [25.9, 1569.0], [26.0, 1575.0], [26.1, 1575.0], [26.2, 1578.0], [26.3, 1578.0], [26.4, 1578.0], [26.5, 1578.0], [26.6, 1584.0], [26.7, 1585.0], [26.8, 1585.0], [26.9, 1586.0], [27.0, 1588.0], [27.1, 1591.0], [27.2, 1591.0], [27.3, 1592.0], [27.4, 1595.0], [27.5, 1596.0], [27.6, 1596.0], [27.7, 1599.0], [27.8, 1599.0], [27.9, 1601.0], [28.0, 1601.0], [28.1, 1608.0], [28.2, 1609.0], [28.3, 1611.0], [28.4, 1611.0], [28.5, 1611.0], [28.6, 1619.0], [28.7, 1619.0], [28.8, 1621.0], [28.9, 1621.0], [29.0, 1623.0], [29.1, 1623.0], [29.2, 1623.0], [29.3, 1626.0], [29.4, 1633.0], [29.5, 1633.0], [29.6, 1636.0], [29.7, 1639.0], [29.8, 1641.0], [29.9, 1641.0], [30.0, 1642.0], [30.1, 1643.0], [30.2, 1643.0], [30.3, 1646.0], [30.4, 1650.0], [30.5, 1651.0], [30.6, 1651.0], [30.7, 1656.0], [30.8, 1660.0], [30.9, 1661.0], [31.0, 1661.0], [31.1, 1663.0], [31.2, 1672.0], [31.3, 1675.0], [31.4, 1675.0], [31.5, 1680.0], [31.6, 1680.0], [31.7, 1680.0], [31.8, 1683.0], [31.9, 1687.0], [32.0, 1687.0], [32.1, 1687.0], [32.2, 1692.0], [32.3, 1699.0], [32.4, 1703.0], [32.5, 1703.0], [32.6, 1704.0], [32.7, 1704.0], [32.8, 1706.0], [32.9, 1706.0], [33.0, 1711.0], [33.1, 1716.0], [33.2, 1717.0], [33.3, 1717.0], [33.4, 1718.0], [33.5, 1720.0], [33.6, 1720.0], [33.7, 1729.0], [33.8, 1730.0], [33.9, 1738.0], [34.0, 1738.0], [34.1, 1739.0], [34.2, 1740.0], [34.3, 1740.0], [34.4, 1740.0], [34.5, 1742.0], [34.6, 1743.0], [34.7, 1746.0], [34.8, 1746.0], [34.9, 1746.0], [35.0, 1747.0], [35.1, 1747.0], [35.2, 1750.0], [35.3, 1754.0], [35.4, 1759.0], [35.5, 1759.0], [35.6, 1762.0], [35.7, 1766.0], [35.8, 1767.0], [35.9, 1767.0], [36.0, 1769.0], [36.1, 1769.0], [36.2, 1771.0], [36.3, 1771.0], [36.4, 1773.0], [36.5, 1773.0], [36.6, 1776.0], [36.7, 1776.0], [36.8, 1779.0], [36.9, 1781.0], [37.0, 1781.0], [37.1, 1784.0], [37.2, 1788.0], [37.3, 1794.0], [37.4, 1794.0], [37.5, 1798.0], [37.6, 1798.0], [37.7, 1799.0], [37.8, 1799.0], [37.9, 1800.0], [38.0, 1801.0], [38.1, 1801.0], [38.2, 1801.0], [38.3, 1802.0], [38.4, 1803.0], [38.5, 1803.0], [38.6, 1804.0], [38.7, 1808.0], [38.8, 1808.0], [38.9, 1808.0], [39.0, 1811.0], [39.1, 1812.0], [39.2, 1815.0], [39.3, 1815.0], [39.4, 1816.0], [39.5, 1819.0], [39.6, 1820.0], [39.7, 1820.0], [39.8, 1821.0], [39.9, 1822.0], [40.0, 1823.0], [40.1, 1823.0], [40.2, 1824.0], [40.3, 1825.0], [40.4, 1825.0], [40.5, 1826.0], [40.6, 1827.0], [40.7, 1831.0], [40.8, 1831.0], [40.9, 1832.0], [41.0, 1833.0], [41.1, 1836.0], [41.2, 1836.0], [41.3, 1837.0], [41.4, 1838.0], [41.5, 1838.0], [41.6, 1838.0], [41.7, 1839.0], [41.8, 1842.0], [41.9, 1842.0], [42.0, 1846.0], [42.1, 1847.0], [42.2, 1848.0], [42.3, 1848.0], [42.4, 1849.0], [42.5, 1850.0], [42.6, 1850.0], [42.7, 1850.0], [42.8, 1857.0], [42.9, 1857.0], [43.0, 1861.0], [43.1, 1861.0], [43.2, 1869.0], [43.3, 1870.0], [43.4, 1870.0], [43.5, 1871.0], [43.6, 1871.0], [43.7, 1872.0], [43.8, 1872.0], [43.9, 1879.0], [44.0, 1880.0], [44.1, 1886.0], [44.2, 1886.0], [44.3, 1887.0], [44.4, 1887.0], [44.5, 1890.0], [44.6, 1890.0], [44.7, 1892.0], [44.8, 1893.0], [44.9, 1898.0], [45.0, 1898.0], [45.1, 1902.0], [45.2, 1904.0], [45.3, 1904.0], [45.4, 1909.0], [45.5, 1909.0], [45.6, 1910.0], [45.7, 1910.0], [45.8, 1911.0], [45.9, 1912.0], [46.0, 1915.0], [46.1, 1915.0], [46.2, 1918.0], [46.3, 1920.0], [46.4, 1921.0], [46.5, 1921.0], [46.6, 1921.0], [46.7, 1922.0], [46.8, 1922.0], [46.9, 1923.0], [47.0, 1923.0], [47.1, 1924.0], [47.2, 1924.0], [47.3, 1932.0], [47.4, 1939.0], [47.5, 1942.0], [47.6, 1942.0], [47.7, 1943.0], [47.8, 1945.0], [47.9, 1945.0], [48.0, 1945.0], [48.1, 1950.0], [48.2, 1951.0], [48.3, 1952.0], [48.4, 1952.0], [48.5, 1952.0], [48.6, 1952.0], [48.7, 1952.0], [48.8, 1954.0], [48.9, 1954.0], [49.0, 1956.0], [49.1, 1956.0], [49.2, 1956.0], [49.3, 1956.0], [49.4, 1957.0], [49.5, 1957.0], [49.6, 1961.0], [49.7, 1965.0], [49.8, 1966.0], [49.9, 1966.0], [50.0, 1968.0], [50.1, 1969.0], [50.2, 1969.0], [50.3, 1969.0], [50.4, 1971.0], [50.5, 1973.0], [50.6, 1973.0], [50.7, 1973.0], [50.8, 1974.0], [50.9, 1975.0], [51.0, 1975.0], [51.1, 1976.0], [51.2, 1978.0], [51.3, 1979.0], [51.4, 1979.0], [51.5, 1979.0], [51.6, 1981.0], [51.7, 1981.0], [51.8, 1984.0], [51.9, 1985.0], [52.0, 1991.0], [52.1, 1991.0], [52.2, 1995.0], [52.3, 1995.0], [52.4, 1995.0], [52.5, 1995.0], [52.6, 1999.0], [52.7, 2004.0], [52.8, 2008.0], [52.9, 2008.0], [53.0, 2009.0], [53.1, 2012.0], [53.2, 2013.0], [53.3, 2013.0], [53.4, 2015.0], [53.5, 2017.0], [53.6, 2017.0], [53.7, 2021.0], [53.8, 2022.0], [53.9, 2023.0], [54.0, 2023.0], [54.1, 2023.0], [54.2, 2025.0], [54.3, 2033.0], [54.4, 2033.0], [54.5, 2033.0], [54.6, 2038.0], [54.7, 2041.0], [54.8, 2041.0], [54.9, 2043.0], [55.0, 2046.0], [55.1, 2046.0], [55.2, 2050.0], [55.3, 2052.0], [55.4, 2053.0], [55.5, 2053.0], [55.6, 2054.0], [55.7, 2055.0], [55.8, 2055.0], [55.9, 2055.0], [56.0, 2060.0], [56.1, 2063.0], [56.2, 2065.0], [56.3, 2065.0], [56.4, 2066.0], [56.5, 2067.0], [56.6, 2069.0], [56.7, 2069.0], [56.8, 2069.0], [56.9, 2070.0], [57.0, 2070.0], [57.1, 2071.0], [57.2, 2071.0], [57.3, 2071.0], [57.4, 2071.0], [57.5, 2076.0], [57.6, 2078.0], [57.7, 2078.0], [57.8, 2078.0], [57.9, 2086.0], [58.0, 2086.0], [58.1, 2089.0], [58.2, 2089.0], [58.3, 2089.0], [58.4, 2091.0], [58.5, 2091.0], [58.6, 2092.0], [58.7, 2094.0], [58.8, 2097.0], [58.9, 2097.0], [59.0, 2098.0], [59.1, 2101.0], [59.2, 2101.0], [59.3, 2101.0], [59.4, 2109.0], [59.5, 2110.0], [59.6, 2111.0], [59.7, 2111.0], [59.8, 2113.0], [59.9, 2113.0], [60.0, 2116.0], [60.1, 2116.0], [60.2, 2118.0], [60.3, 2118.0], [60.4, 2118.0], [60.5, 2118.0], [60.6, 2121.0], [60.7, 2123.0], [60.8, 2123.0], [60.9, 2124.0], [61.0, 2126.0], [61.1, 2128.0], [61.2, 2128.0], [61.3, 2132.0], [61.4, 2136.0], [61.5, 2138.0], [61.6, 2138.0], [61.7, 2138.0], [61.8, 2140.0], [61.9, 2140.0], [62.0, 2145.0], [62.1, 2145.0], [62.2, 2145.0], [62.3, 2145.0], [62.4, 2146.0], [62.5, 2147.0], [62.6, 2148.0], [62.7, 2148.0], [62.8, 2149.0], [62.9, 2151.0], [63.0, 2152.0], [63.1, 2152.0], [63.2, 2153.0], [63.3, 2155.0], [63.4, 2155.0], [63.5, 2156.0], [63.6, 2156.0], [63.7, 2158.0], [63.8, 2158.0], [63.9, 2160.0], [64.0, 2161.0], [64.1, 2162.0], [64.2, 2162.0], [64.3, 2163.0], [64.4, 2164.0], [64.5, 2167.0], [64.6, 2167.0], [64.7, 2167.0], [64.8, 2169.0], [64.9, 2171.0], [65.0, 2171.0], [65.1, 2171.0], [65.2, 2172.0], [65.3, 2172.0], [65.4, 2181.0], [65.5, 2185.0], [65.6, 2185.0], [65.7, 2185.0], [65.8, 2186.0], [65.9, 2186.0], [66.0, 2187.0], [66.1, 2187.0], [66.2, 2187.0], [66.3, 2187.0], [66.4, 2189.0], [66.5, 2189.0], [66.6, 2189.0], [66.7, 2194.0], [66.8, 2194.0], [66.9, 2198.0], [67.0, 2200.0], [67.1, 2211.0], [67.2, 2211.0], [67.3, 2212.0], [67.4, 2220.0], [67.5, 2223.0], [67.6, 2223.0], [67.7, 2224.0], [67.8, 2230.0], [67.9, 2231.0], [68.0, 2231.0], [68.1, 2233.0], [68.2, 2234.0], [68.3, 2234.0], [68.4, 2234.0], [68.5, 2235.0], [68.6, 2235.0], [68.7, 2235.0], [68.8, 2237.0], [68.9, 2237.0], [69.0, 2238.0], [69.1, 2238.0], [69.2, 2248.0], [69.3, 2249.0], [69.4, 2250.0], [69.5, 2250.0], [69.6, 2251.0], [69.7, 2253.0], [69.8, 2254.0], [69.9, 2254.0], [70.0, 2267.0], [70.1, 2277.0], [70.2, 2277.0], [70.3, 2278.0], [70.4, 2283.0], [70.5, 2287.0], [70.6, 2287.0], [70.7, 2289.0], [70.8, 2292.0], [70.9, 2294.0], [71.0, 2294.0], [71.1, 2302.0], [71.2, 2306.0], [71.3, 2308.0], [71.4, 2308.0], [71.5, 2310.0], [71.6, 2310.0], [71.7, 2310.0], [71.8, 2311.0], [71.9, 2318.0], [72.0, 2328.0], [72.1, 2328.0], [72.2, 2330.0], [72.3, 2336.0], [72.4, 2338.0], [72.5, 2338.0], [72.6, 2342.0], [72.7, 2347.0], [72.8, 2347.0], [72.9, 2347.0], [73.0, 2348.0], [73.1, 2351.0], [73.2, 2361.0], [73.3, 2361.0], [73.4, 2362.0], [73.5, 2366.0], [73.6, 2366.0], [73.7, 2370.0], [73.8, 2374.0], [73.9, 2375.0], [74.0, 2375.0], [74.1, 2377.0], [74.2, 2377.0], [74.3, 2379.0], [74.4, 2379.0], [74.5, 2382.0], [74.6, 2383.0], [74.7, 2383.0], [74.8, 2383.0], [74.9, 2384.0], [75.0, 2385.0], [75.1, 2385.0], [75.2, 2385.0], [75.3, 2385.0], [75.4, 2387.0], [75.5, 2387.0], [75.6, 2390.0], [75.7, 2390.0], [75.8, 2396.0], [75.9, 2396.0], [76.0, 2402.0], [76.1, 2403.0], [76.2, 2413.0], [76.3, 2413.0], [76.4, 2421.0], [76.5, 2422.0], [76.6, 2422.0], [76.7, 2422.0], [76.8, 2423.0], [76.9, 2424.0], [77.0, 2424.0], [77.1, 2425.0], [77.2, 2426.0], [77.3, 2443.0], [77.4, 2443.0], [77.5, 2447.0], [77.6, 2449.0], [77.7, 2455.0], [77.8, 2455.0], [77.9, 2457.0], [78.0, 2461.0], [78.1, 2461.0], [78.2, 2461.0], [78.3, 2465.0], [78.4, 2469.0], [78.5, 2469.0], [78.6, 2472.0], [78.7, 2473.0], [78.8, 2475.0], [78.9, 2475.0], [79.0, 2480.0], [79.1, 2492.0], [79.2, 2492.0], [79.3, 2492.0], [79.4, 2497.0], [79.5, 2497.0], [79.6, 2500.0], [79.7, 2500.0], [79.8, 2504.0], [79.9, 2504.0], [80.0, 2506.0], [80.1, 2506.0], [80.2, 2509.0], [80.3, 2509.0], [80.4, 2509.0], [80.5, 2519.0], [80.6, 2535.0], [80.7, 2536.0], [80.8, 2536.0], [80.9, 2536.0], [81.0, 2547.0], [81.1, 2553.0], [81.2, 2553.0], [81.3, 2553.0], [81.4, 2554.0], [81.5, 2557.0], [81.6, 2557.0], [81.7, 2568.0], [81.8, 2573.0], [81.9, 2573.0], [82.0, 2574.0], [82.1, 2575.0], [82.2, 2577.0], [82.3, 2577.0], [82.4, 2579.0], [82.5, 2579.0], [82.6, 2580.0], [82.7, 2580.0], [82.8, 2582.0], [82.9, 2583.0], [83.0, 2590.0], [83.1, 2590.0], [83.2, 2592.0], [83.3, 2595.0], [83.4, 2595.0], [83.5, 2595.0], [83.6, 2596.0], [83.7, 2598.0], [83.8, 2598.0], [83.9, 2605.0], [84.0, 2605.0], [84.1, 2608.0], [84.2, 2608.0], [84.3, 2615.0], [84.4, 2616.0], [84.5, 2629.0], [84.6, 2629.0], [84.7, 2629.0], [84.8, 2634.0], [84.9, 2636.0], [85.0, 2636.0], [85.1, 2644.0], [85.2, 2644.0], [85.3, 2644.0], [85.4, 2648.0], [85.5, 2650.0], [85.6, 2650.0], [85.7, 2650.0], [85.8, 2652.0], [85.9, 2657.0], [86.0, 2661.0], [86.1, 2661.0], [86.2, 2665.0], [86.3, 2666.0], [86.4, 2672.0], [86.5, 2672.0], [86.6, 2672.0], [86.7, 2676.0], [86.8, 2676.0], [86.9, 2679.0], [87.0, 2682.0], [87.1, 2690.0], [87.2, 2690.0], [87.3, 2693.0], [87.4, 2693.0], [87.5, 2695.0], [87.6, 2695.0], [87.7, 2707.0], [87.8, 2710.0], [87.9, 2713.0], [88.0, 2713.0], [88.1, 2722.0], [88.2, 2725.0], [88.3, 2727.0], [88.4, 2727.0], [88.5, 2733.0], [88.6, 2734.0], [88.7, 2734.0], [88.8, 2734.0], [88.9, 2737.0], [89.0, 2740.0], [89.1, 2740.0], [89.2, 2743.0], [89.3, 2746.0], [89.4, 2752.0], [89.5, 2752.0], [89.6, 2759.0], [89.7, 2763.0], [89.8, 2764.0], [89.9, 2764.0], [90.0, 2765.0], [90.1, 2776.0], [90.2, 2776.0], [90.3, 2777.0], [90.4, 2779.0], [90.5, 2780.0], [90.6, 2780.0], [90.7, 2782.0], [90.8, 2784.0], [90.9, 2786.0], [91.0, 2786.0], [91.1, 2789.0], [91.2, 2792.0], [91.3, 2799.0], [91.4, 2799.0], [91.5, 2814.0], [91.6, 2828.0], [91.7, 2828.0], [91.8, 2831.0], [91.9, 2837.0], [92.0, 2840.0], [92.1, 2840.0], [92.2, 2840.0], [92.3, 2841.0], [92.4, 2848.0], [92.5, 2848.0], [92.6, 2852.0], [92.7, 2865.0], [92.8, 2871.0], [92.9, 2871.0], [93.0, 2876.0], [93.1, 2879.0], [93.2, 2884.0], [93.3, 2884.0], [93.4, 2886.0], [93.5, 2897.0], [93.6, 2897.0], [93.7, 2923.0], [93.8, 2928.0], [93.9, 2930.0], [94.0, 2930.0], [94.1, 2933.0], [94.2, 2939.0], [94.3, 2962.0], [94.4, 2962.0], [94.5, 2990.0], [94.6, 2997.0], [94.7, 3015.0], [94.8, 3015.0], [94.9, 3023.0], [95.0, 3028.0], [95.1, 3028.0], [95.2, 3051.0], [95.3, 3053.0], [95.4, 3055.0], [95.5, 3055.0], [95.6, 3060.0], [95.7, 3089.0], [95.8, 3105.0], [95.9, 3105.0], [96.0, 3121.0], [96.1, 3130.0], [96.2, 3136.0], [96.3, 3136.0], [96.4, 3140.0], [96.5, 3151.0], [96.6, 3167.0], [96.7, 3167.0], [96.8, 3170.0], [96.9, 3208.0], [97.0, 3208.0], [97.1, 3224.0], [97.2, 3238.0], [97.3, 3257.0], [97.4, 3257.0], [97.5, 3292.0], [97.6, 3337.0], [97.7, 3430.0], [97.8, 3430.0], [97.9, 3488.0], [98.0, 3602.0], [98.1, 3721.0], [98.2, 3721.0], [98.3, 3732.0], [98.4, 3776.0], [98.5, 3776.0], [98.6, 3889.0], [98.7, 3914.0], [98.8, 3955.0], [98.9, 3955.0], [99.0, 3958.0], [99.1, 3959.0], [99.2, 4166.0], [99.3, 4166.0], [99.4, 4173.0], [99.5, 4218.0], [99.6, 4436.0], [99.7, 4436.0], [99.8, 4585.0], [99.9, 5010.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 700.0, "maxY": 58.0, "series": [{"data": [[700.0, 3.0], [800.0, 11.0], [900.0, 9.0], [1000.0, 24.0], [1100.0, 28.0], [1200.0, 27.0], [1300.0, 24.0], [1400.0, 38.0], [1500.0, 41.0], [1600.0, 33.0], [1700.0, 40.0], [1800.0, 53.0], [1900.0, 56.0], [2000.0, 47.0], [2100.0, 58.0], [2300.0, 36.0], [2200.0, 30.0], [2400.0, 27.0], [2500.0, 31.0], [2600.0, 28.0], [2800.0, 16.0], [2700.0, 28.0], [2900.0, 8.0], [3000.0, 8.0], [3100.0, 8.0], [3200.0, 5.0], [3300.0, 1.0], [3400.0, 2.0], [3700.0, 3.0], [3600.0, 1.0], [3800.0, 1.0], [3900.0, 4.0], [4200.0, 1.0], [4100.0, 2.0], [4500.0, 1.0], [4400.0, 1.0], [5000.0, 1.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 5000.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 11.764285714285714, "minX": 1.60224468E12, "maxY": 12.0, "series": [{"data": [[1.60224468E12, 12.0], [1.6022448E12, 11.764285714285714], [1.60224474E12, 12.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6022448E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 883.0, "minX": 1.0, "maxY": 2939.0, "series": [{"data": [[8.0, 886.0], [4.0, 1296.0], [2.0, 2237.0], [1.0, 1945.0], [9.0, 1432.0], [10.0, 2939.0], [5.0, 1495.0], [11.0, 883.0], [12.0, 2005.6132596685088], [6.0, 1308.0], [3.0, 2234.0], [7.0, 2071.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[11.910204081632651, 2001.0748299319735]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 12.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 665.9833333333333, "minX": 1.60224468E12, "maxY": 877744.2, "series": [{"data": [[1.60224468E12, 342301.13333333336], [1.6022448E12, 615722.9833333333], [1.60224474E12, 877744.2]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60224468E12, 665.9833333333333], [1.6022448E12, 2102.766666666667], [1.60224474E12, 2754.2833333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6022448E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 1973.1961852861032, "minX": 1.60224468E12, "maxY": 2171.329545454546, "series": [{"data": [[1.60224468E12, 2171.329545454546], [1.6022448E12, 1984.1071428571433], [1.60224474E12, 1973.1961852861032]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6022448E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 1972.0817438692102, "minX": 1.60224468E12, "maxY": 2169.8181818181815, "series": [{"data": [[1.60224468E12, 2169.8181818181815], [1.6022448E12, 1983.1392857142873], [1.60224474E12, 1972.0817438692102]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6022448E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.03571428571428571, "minX": 1.60224468E12, "maxY": 1.6136363636363642, "series": [{"data": [[1.60224468E12, 1.6136363636363642], [1.6022448E12, 0.03571428571428571], [1.60224474E12, 0.043596730245231606]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6022448E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 725.0, "minX": 1.60224468E12, "maxY": 5010.0, "series": [{"data": [[1.60224468E12, 4218.0], [1.6022448E12, 4166.0], [1.60224474E12, 5010.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60224468E12, 852.0], [1.6022448E12, 884.5869997990131], [1.60224474E12, 795.5999956130981]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60224468E12, 852.0], [1.6022448E12, 885.3457000803947], [1.60224474E12, 812.1600017547607]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60224468E12, 852.0], [1.6022448E12, 885.0084998995065], [1.60224474E12, 804.7999978065491]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60224468E12, 852.0], [1.6022448E12, 843.0], [1.60224474E12, 725.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60224468E12, 1896.0], [1.6022448E12, 1972.0], [1.60224474E12, 1969.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6022448E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 1360.0, "minX": 1.0, "maxY": 2506.5, "series": [{"data": [[2.0, 2506.5], [1.0, 1891.5], [8.0, 1626.0], [4.0, 2402.5], [9.0, 1360.0], [10.0, 2324.0], [5.0, 2109.0], [11.0, 1406.5], [3.0, 2492.5], [6.0, 2035.5], [7.0, 1636.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 11.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 1360.0, "minX": 1.0, "maxY": 2503.5, "series": [{"data": [[2.0, 2503.5], [1.0, 1890.5], [8.0, 1626.0], [4.0, 2402.0], [9.0, 1360.0], [10.0, 2320.5], [5.0, 2108.0], [11.0, 1406.5], [3.0, 2490.0], [6.0, 2034.5], [7.0, 1635.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 11.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.60224468E12, "maxY": 6.116666666666666, "series": [{"data": [[1.60224468E12, 1.6666666666666667], [1.6022448E12, 4.466666666666667], [1.60224474E12, 6.116666666666666]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6022448E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1.4666666666666666, "minX": 1.60224468E12, "maxY": 6.116666666666666, "series": [{"data": [[1.60224468E12, 1.4666666666666666], [1.6022448E12, 4.666666666666667], [1.60224474E12, 6.116666666666666]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6022448E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.4666666666666666, "minX": 1.60224468E12, "maxY": 6.116666666666666, "series": [{"data": [[1.60224468E12, 1.4666666666666666], [1.6022448E12, 4.666666666666667], [1.60224474E12, 6.116666666666666]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6022448E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.4666666666666666, "minX": 1.60224468E12, "maxY": 6.116666666666666, "series": [{"data": [[1.60224468E12, 1.4666666666666666], [1.6022448E12, 4.666666666666667], [1.60224474E12, 6.116666666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6022448E12, "title": "Total Transactions Per Second"}},
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

