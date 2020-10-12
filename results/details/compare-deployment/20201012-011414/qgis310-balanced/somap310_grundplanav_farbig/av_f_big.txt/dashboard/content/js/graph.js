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
        data: {"result": {"minY": 793.0, "minX": 0.0, "maxY": 5301.0, "series": [{"data": [[0.0, 793.0], [0.1, 793.0], [0.2, 797.0], [0.3, 820.0], [0.4, 820.0], [0.5, 836.0], [0.6, 852.0], [0.7, 878.0], [0.8, 878.0], [0.9, 916.0], [1.0, 916.0], [1.1, 920.0], [1.2, 920.0], [1.3, 947.0], [1.4, 962.0], [1.5, 966.0], [1.6, 966.0], [1.7, 973.0], [1.8, 982.0], [1.9, 982.0], [2.0, 985.0], [2.1, 989.0], [2.2, 1007.0], [2.3, 1007.0], [2.4, 1023.0], [2.5, 1028.0], [2.6, 1031.0], [2.7, 1031.0], [2.8, 1046.0], [2.9, 1064.0], [3.0, 1065.0], [3.1, 1065.0], [3.2, 1080.0], [3.3, 1081.0], [3.4, 1081.0], [3.5, 1087.0], [3.6, 1092.0], [3.7, 1096.0], [3.8, 1096.0], [3.9, 1097.0], [4.0, 1100.0], [4.1, 1102.0], [4.2, 1102.0], [4.3, 1103.0], [4.4, 1107.0], [4.5, 1110.0], [4.6, 1110.0], [4.7, 1112.0], [4.8, 1116.0], [4.9, 1121.0], [5.0, 1121.0], [5.1, 1122.0], [5.2, 1126.0], [5.3, 1126.0], [5.4, 1130.0], [5.5, 1137.0], [5.6, 1140.0], [5.7, 1140.0], [5.8, 1142.0], [5.9, 1143.0], [6.0, 1144.0], [6.1, 1144.0], [6.2, 1146.0], [6.3, 1151.0], [6.4, 1152.0], [6.5, 1152.0], [6.6, 1155.0], [6.7, 1156.0], [6.8, 1156.0], [6.9, 1157.0], [7.0, 1159.0], [7.1, 1166.0], [7.2, 1166.0], [7.3, 1172.0], [7.4, 1175.0], [7.5, 1183.0], [7.6, 1183.0], [7.7, 1188.0], [7.8, 1191.0], [7.9, 1193.0], [8.0, 1193.0], [8.1, 1203.0], [8.2, 1206.0], [8.3, 1211.0], [8.4, 1211.0], [8.5, 1213.0], [8.6, 1216.0], [8.7, 1216.0], [8.8, 1216.0], [8.9, 1218.0], [9.0, 1219.0], [9.1, 1219.0], [9.2, 1222.0], [9.3, 1229.0], [9.4, 1235.0], [9.5, 1235.0], [9.6, 1237.0], [9.7, 1245.0], [9.8, 1245.0], [9.9, 1245.0], [10.0, 1248.0], [10.1, 1249.0], [10.2, 1249.0], [10.3, 1253.0], [10.4, 1253.0], [10.5, 1253.0], [10.6, 1253.0], [10.7, 1254.0], [10.8, 1256.0], [10.9, 1257.0], [11.0, 1257.0], [11.1, 1258.0], [11.2, 1258.0], [11.3, 1259.0], [11.4, 1259.0], [11.5, 1265.0], [11.6, 1269.0], [11.7, 1269.0], [11.8, 1272.0], [11.9, 1273.0], [12.0, 1279.0], [12.1, 1279.0], [12.2, 1281.0], [12.3, 1288.0], [12.4, 1288.0], [12.5, 1288.0], [12.6, 1295.0], [12.7, 1301.0], [12.8, 1304.0], [12.9, 1304.0], [13.0, 1305.0], [13.1, 1306.0], [13.2, 1309.0], [13.3, 1309.0], [13.4, 1311.0], [13.5, 1316.0], [13.6, 1316.0], [13.7, 1317.0], [13.8, 1317.0], [13.9, 1321.0], [14.0, 1321.0], [14.1, 1337.0], [14.2, 1338.0], [14.3, 1341.0], [14.4, 1341.0], [14.5, 1345.0], [14.6, 1347.0], [14.7, 1351.0], [14.8, 1351.0], [14.9, 1360.0], [15.0, 1367.0], [15.1, 1367.0], [15.2, 1367.0], [15.3, 1367.0], [15.4, 1381.0], [15.5, 1381.0], [15.6, 1385.0], [15.7, 1385.0], [15.8, 1390.0], [15.9, 1390.0], [16.0, 1393.0], [16.1, 1407.0], [16.2, 1408.0], [16.3, 1408.0], [16.4, 1409.0], [16.5, 1424.0], [16.6, 1427.0], [16.7, 1427.0], [16.8, 1435.0], [16.9, 1437.0], [17.0, 1437.0], [17.1, 1441.0], [17.2, 1443.0], [17.3, 1447.0], [17.4, 1447.0], [17.5, 1449.0], [17.6, 1450.0], [17.7, 1451.0], [17.8, 1451.0], [17.9, 1452.0], [18.0, 1453.0], [18.1, 1453.0], [18.2, 1453.0], [18.3, 1461.0], [18.4, 1461.0], [18.5, 1461.0], [18.6, 1463.0], [18.7, 1464.0], [18.8, 1464.0], [18.9, 1464.0], [19.0, 1465.0], [19.1, 1468.0], [19.2, 1473.0], [19.3, 1473.0], [19.4, 1477.0], [19.5, 1478.0], [19.6, 1486.0], [19.7, 1486.0], [19.8, 1495.0], [19.9, 1496.0], [20.0, 1496.0], [20.1, 1496.0], [20.2, 1497.0], [20.3, 1497.0], [20.4, 1497.0], [20.5, 1502.0], [20.6, 1503.0], [20.7, 1504.0], [20.8, 1504.0], [20.9, 1504.0], [21.0, 1504.0], [21.1, 1511.0], [21.2, 1511.0], [21.3, 1513.0], [21.4, 1514.0], [21.5, 1516.0], [21.6, 1516.0], [21.7, 1517.0], [21.8, 1518.0], [21.9, 1518.0], [22.0, 1524.0], [22.1, 1524.0], [22.2, 1525.0], [22.3, 1525.0], [22.4, 1526.0], [22.5, 1537.0], [22.6, 1537.0], [22.7, 1537.0], [22.8, 1544.0], [22.9, 1550.0], [23.0, 1551.0], [23.1, 1551.0], [23.2, 1551.0], [23.3, 1554.0], [23.4, 1554.0], [23.5, 1554.0], [23.6, 1555.0], [23.7, 1557.0], [23.8, 1557.0], [23.9, 1560.0], [24.0, 1561.0], [24.1, 1563.0], [24.2, 1563.0], [24.3, 1564.0], [24.4, 1567.0], [24.5, 1568.0], [24.6, 1568.0], [24.7, 1569.0], [24.8, 1570.0], [24.9, 1572.0], [25.0, 1572.0], [25.1, 1576.0], [25.2, 1577.0], [25.3, 1577.0], [25.4, 1580.0], [25.5, 1589.0], [25.6, 1592.0], [25.7, 1592.0], [25.8, 1593.0], [25.9, 1599.0], [26.0, 1599.0], [26.1, 1599.0], [26.2, 1600.0], [26.3, 1600.0], [26.4, 1602.0], [26.5, 1602.0], [26.6, 1604.0], [26.7, 1604.0], [26.8, 1604.0], [26.9, 1610.0], [27.0, 1613.0], [27.1, 1614.0], [27.2, 1614.0], [27.3, 1615.0], [27.4, 1617.0], [27.5, 1617.0], [27.6, 1617.0], [27.7, 1623.0], [27.8, 1627.0], [27.9, 1627.0], [28.0, 1627.0], [28.1, 1628.0], [28.2, 1632.0], [28.3, 1643.0], [28.4, 1643.0], [28.5, 1643.0], [28.6, 1645.0], [28.7, 1645.0], [28.8, 1645.0], [28.9, 1648.0], [29.0, 1651.0], [29.1, 1651.0], [29.2, 1652.0], [29.3, 1652.0], [29.4, 1652.0], [29.5, 1652.0], [29.6, 1653.0], [29.7, 1655.0], [29.8, 1662.0], [29.9, 1662.0], [30.0, 1665.0], [30.1, 1665.0], [30.2, 1665.0], [30.3, 1665.0], [30.4, 1666.0], [30.5, 1674.0], [30.6, 1674.0], [30.7, 1674.0], [30.8, 1676.0], [30.9, 1677.0], [31.0, 1677.0], [31.1, 1681.0], [31.2, 1688.0], [31.3, 1689.0], [31.4, 1689.0], [31.5, 1703.0], [31.6, 1703.0], [31.7, 1703.0], [31.8, 1706.0], [31.9, 1706.0], [32.0, 1706.0], [32.1, 1706.0], [32.2, 1710.0], [32.3, 1711.0], [32.4, 1713.0], [32.5, 1713.0], [32.6, 1714.0], [32.7, 1715.0], [32.8, 1719.0], [32.9, 1719.0], [33.0, 1726.0], [33.1, 1730.0], [33.2, 1731.0], [33.3, 1731.0], [33.4, 1733.0], [33.5, 1734.0], [33.6, 1734.0], [33.7, 1736.0], [33.8, 1737.0], [33.9, 1737.0], [34.0, 1737.0], [34.1, 1738.0], [34.2, 1738.0], [34.3, 1739.0], [34.4, 1739.0], [34.5, 1740.0], [34.6, 1740.0], [34.7, 1741.0], [34.8, 1741.0], [34.9, 1742.0], [35.0, 1745.0], [35.1, 1745.0], [35.2, 1745.0], [35.3, 1746.0], [35.4, 1747.0], [35.5, 1747.0], [35.6, 1747.0], [35.7, 1749.0], [35.8, 1750.0], [35.9, 1750.0], [36.0, 1750.0], [36.1, 1751.0], [36.2, 1756.0], [36.3, 1756.0], [36.4, 1757.0], [36.5, 1759.0], [36.6, 1760.0], [36.7, 1760.0], [36.8, 1764.0], [36.9, 1765.0], [37.0, 1765.0], [37.1, 1766.0], [37.2, 1767.0], [37.3, 1768.0], [37.4, 1768.0], [37.5, 1770.0], [37.6, 1776.0], [37.7, 1782.0], [37.8, 1782.0], [37.9, 1785.0], [38.0, 1786.0], [38.1, 1786.0], [38.2, 1786.0], [38.3, 1790.0], [38.4, 1790.0], [38.5, 1790.0], [38.6, 1793.0], [38.7, 1794.0], [38.8, 1795.0], [38.9, 1795.0], [39.0, 1796.0], [39.1, 1796.0], [39.2, 1796.0], [39.3, 1796.0], [39.4, 1800.0], [39.5, 1802.0], [39.6, 1805.0], [39.7, 1805.0], [39.8, 1818.0], [39.9, 1819.0], [40.0, 1820.0], [40.1, 1820.0], [40.2, 1822.0], [40.3, 1822.0], [40.4, 1822.0], [40.5, 1824.0], [40.6, 1826.0], [40.7, 1826.0], [40.8, 1826.0], [40.9, 1828.0], [41.0, 1829.0], [41.1, 1837.0], [41.2, 1837.0], [41.3, 1841.0], [41.4, 1849.0], [41.5, 1860.0], [41.6, 1860.0], [41.7, 1865.0], [41.8, 1877.0], [41.9, 1877.0], [42.0, 1877.0], [42.1, 1879.0], [42.2, 1880.0], [42.3, 1880.0], [42.4, 1883.0], [42.5, 1887.0], [42.6, 1887.0], [42.7, 1887.0], [42.8, 1890.0], [42.9, 1891.0], [43.0, 1891.0], [43.1, 1891.0], [43.2, 1895.0], [43.3, 1895.0], [43.4, 1895.0], [43.5, 1903.0], [43.6, 1907.0], [43.7, 1912.0], [43.8, 1912.0], [43.9, 1912.0], [44.0, 1913.0], [44.1, 1913.0], [44.2, 1913.0], [44.3, 1913.0], [44.4, 1914.0], [44.5, 1916.0], [44.6, 1916.0], [44.7, 1916.0], [44.8, 1916.0], [44.9, 1918.0], [45.0, 1918.0], [45.1, 1923.0], [45.2, 1924.0], [45.3, 1924.0], [45.4, 1925.0], [45.5, 1925.0], [45.6, 1925.0], [45.7, 1925.0], [45.8, 1926.0], [45.9, 1928.0], [46.0, 1929.0], [46.1, 1929.0], [46.2, 1932.0], [46.3, 1932.0], [46.4, 1933.0], [46.5, 1933.0], [46.6, 1933.0], [46.7, 1935.0], [46.8, 1935.0], [46.9, 1937.0], [47.0, 1942.0], [47.1, 1944.0], [47.2, 1944.0], [47.3, 1947.0], [47.4, 1949.0], [47.5, 1949.0], [47.6, 1949.0], [47.7, 1952.0], [47.8, 1954.0], [47.9, 1955.0], [48.0, 1955.0], [48.1, 1955.0], [48.2, 1956.0], [48.3, 1957.0], [48.4, 1957.0], [48.5, 1965.0], [48.6, 1965.0], [48.7, 1965.0], [48.8, 1965.0], [48.9, 1968.0], [49.0, 1968.0], [49.1, 1968.0], [49.2, 1972.0], [49.3, 1977.0], [49.4, 1978.0], [49.5, 1978.0], [49.6, 1981.0], [49.7, 1985.0], [49.8, 1985.0], [49.9, 1985.0], [50.0, 1986.0], [50.1, 1991.0], [50.2, 1991.0], [50.3, 1992.0], [50.4, 1992.0], [50.5, 1995.0], [50.6, 1995.0], [50.7, 1995.0], [50.8, 1996.0], [50.9, 1999.0], [51.0, 1999.0], [51.1, 2000.0], [51.2, 2004.0], [51.3, 2006.0], [51.4, 2006.0], [51.5, 2006.0], [51.6, 2007.0], [51.7, 2007.0], [51.8, 2008.0], [51.9, 2008.0], [52.0, 2009.0], [52.1, 2009.0], [52.2, 2011.0], [52.3, 2013.0], [52.4, 2021.0], [52.5, 2021.0], [52.6, 2022.0], [52.7, 2025.0], [52.8, 2026.0], [52.9, 2026.0], [53.0, 2029.0], [53.1, 2029.0], [53.2, 2030.0], [53.3, 2030.0], [53.4, 2033.0], [53.5, 2037.0], [53.6, 2037.0], [53.7, 2038.0], [53.8, 2038.0], [53.9, 2040.0], [54.0, 2040.0], [54.1, 2040.0], [54.2, 2040.0], [54.3, 2042.0], [54.4, 2042.0], [54.5, 2042.0], [54.6, 2044.0], [54.7, 2045.0], [54.8, 2045.0], [54.9, 2046.0], [55.0, 2049.0], [55.1, 2049.0], [55.2, 2050.0], [55.3, 2050.0], [55.4, 2050.0], [55.5, 2050.0], [55.6, 2051.0], [55.7, 2053.0], [55.8, 2059.0], [55.9, 2059.0], [56.0, 2059.0], [56.1, 2061.0], [56.2, 2062.0], [56.3, 2062.0], [56.4, 2063.0], [56.5, 2064.0], [56.6, 2065.0], [56.7, 2065.0], [56.8, 2065.0], [56.9, 2066.0], [57.0, 2066.0], [57.1, 2066.0], [57.2, 2067.0], [57.3, 2067.0], [57.4, 2067.0], [57.5, 2068.0], [57.6, 2068.0], [57.7, 2069.0], [57.8, 2069.0], [57.9, 2071.0], [58.0, 2073.0], [58.1, 2074.0], [58.2, 2074.0], [58.3, 2075.0], [58.4, 2076.0], [58.5, 2076.0], [58.6, 2079.0], [58.7, 2081.0], [58.8, 2082.0], [58.9, 2082.0], [59.0, 2082.0], [59.1, 2085.0], [59.2, 2087.0], [59.3, 2087.0], [59.4, 2087.0], [59.5, 2095.0], [59.6, 2097.0], [59.7, 2097.0], [59.8, 2105.0], [59.9, 2105.0], [60.0, 2105.0], [60.1, 2105.0], [60.2, 2106.0], [60.3, 2107.0], [60.4, 2107.0], [60.5, 2108.0], [60.6, 2111.0], [60.7, 2112.0], [60.8, 2112.0], [60.9, 2115.0], [61.0, 2117.0], [61.1, 2118.0], [61.2, 2118.0], [61.3, 2119.0], [61.4, 2120.0], [61.5, 2126.0], [61.6, 2126.0], [61.7, 2128.0], [61.8, 2132.0], [61.9, 2132.0], [62.0, 2133.0], [62.1, 2134.0], [62.2, 2135.0], [62.3, 2135.0], [62.4, 2136.0], [62.5, 2137.0], [62.6, 2138.0], [62.7, 2138.0], [62.8, 2139.0], [62.9, 2140.0], [63.0, 2141.0], [63.1, 2141.0], [63.2, 2144.0], [63.3, 2144.0], [63.4, 2144.0], [63.5, 2152.0], [63.6, 2156.0], [63.7, 2159.0], [63.8, 2159.0], [63.9, 2160.0], [64.0, 2173.0], [64.1, 2174.0], [64.2, 2174.0], [64.3, 2182.0], [64.4, 2182.0], [64.5, 2186.0], [64.6, 2186.0], [64.7, 2195.0], [64.8, 2195.0], [64.9, 2198.0], [65.0, 2198.0], [65.1, 2199.0], [65.2, 2201.0], [65.3, 2201.0], [65.4, 2203.0], [65.5, 2205.0], [65.6, 2208.0], [65.7, 2208.0], [65.8, 2209.0], [65.9, 2211.0], [66.0, 2211.0], [66.1, 2211.0], [66.2, 2212.0], [66.3, 2213.0], [66.4, 2216.0], [66.5, 2216.0], [66.6, 2218.0], [66.7, 2219.0], [66.8, 2219.0], [66.9, 2220.0], [67.0, 2220.0], [67.1, 2225.0], [67.2, 2225.0], [67.3, 2227.0], [67.4, 2228.0], [67.5, 2229.0], [67.6, 2229.0], [67.7, 2242.0], [67.8, 2246.0], [67.9, 2249.0], [68.0, 2249.0], [68.1, 2249.0], [68.2, 2249.0], [68.3, 2251.0], [68.4, 2251.0], [68.5, 2252.0], [68.6, 2253.0], [68.7, 2253.0], [68.8, 2254.0], [68.9, 2258.0], [69.0, 2258.0], [69.1, 2258.0], [69.2, 2264.0], [69.3, 2266.0], [69.4, 2267.0], [69.5, 2267.0], [69.6, 2269.0], [69.7, 2276.0], [69.8, 2282.0], [69.9, 2282.0], [70.0, 2283.0], [70.1, 2284.0], [70.2, 2284.0], [70.3, 2285.0], [70.4, 2290.0], [70.5, 2291.0], [70.6, 2291.0], [70.7, 2291.0], [70.8, 2292.0], [70.9, 2294.0], [71.0, 2294.0], [71.1, 2295.0], [71.2, 2301.0], [71.3, 2301.0], [71.4, 2301.0], [71.5, 2302.0], [71.6, 2305.0], [71.7, 2305.0], [71.8, 2305.0], [71.9, 2306.0], [72.0, 2307.0], [72.1, 2307.0], [72.2, 2308.0], [72.3, 2309.0], [72.4, 2311.0], [72.5, 2311.0], [72.6, 2317.0], [72.7, 2323.0], [72.8, 2327.0], [72.9, 2327.0], [73.0, 2330.0], [73.1, 2330.0], [73.2, 2332.0], [73.3, 2332.0], [73.4, 2334.0], [73.5, 2339.0], [73.6, 2339.0], [73.7, 2339.0], [73.8, 2342.0], [73.9, 2344.0], [74.0, 2344.0], [74.1, 2344.0], [74.2, 2346.0], [74.3, 2347.0], [74.4, 2347.0], [74.5, 2349.0], [74.6, 2349.0], [74.7, 2352.0], [74.8, 2352.0], [74.9, 2355.0], [75.0, 2356.0], [75.1, 2356.0], [75.2, 2357.0], [75.3, 2357.0], [75.4, 2363.0], [75.5, 2363.0], [75.6, 2367.0], [75.7, 2368.0], [75.8, 2369.0], [75.9, 2369.0], [76.0, 2376.0], [76.1, 2380.0], [76.2, 2380.0], [76.3, 2380.0], [76.4, 2384.0], [76.5, 2386.0], [76.6, 2389.0], [76.7, 2389.0], [76.8, 2390.0], [76.9, 2390.0], [77.0, 2390.0], [77.1, 2390.0], [77.2, 2391.0], [77.3, 2393.0], [77.4, 2393.0], [77.5, 2398.0], [77.6, 2403.0], [77.7, 2407.0], [77.8, 2407.0], [77.9, 2410.0], [78.0, 2413.0], [78.1, 2415.0], [78.2, 2415.0], [78.3, 2428.0], [78.4, 2429.0], [78.5, 2429.0], [78.6, 2430.0], [78.7, 2430.0], [78.8, 2438.0], [78.9, 2438.0], [79.0, 2438.0], [79.1, 2442.0], [79.2, 2444.0], [79.3, 2444.0], [79.4, 2447.0], [79.5, 2451.0], [79.6, 2452.0], [79.7, 2452.0], [79.8, 2462.0], [79.9, 2469.0], [80.0, 2469.0], [80.1, 2469.0], [80.2, 2471.0], [80.3, 2473.0], [80.4, 2473.0], [80.5, 2488.0], [80.6, 2491.0], [80.7, 2496.0], [80.8, 2496.0], [80.9, 2499.0], [81.0, 2511.0], [81.1, 2511.0], [81.2, 2511.0], [81.3, 2512.0], [81.4, 2512.0], [81.5, 2513.0], [81.6, 2513.0], [81.7, 2519.0], [81.8, 2522.0], [81.9, 2522.0], [82.0, 2526.0], [82.1, 2531.0], [82.2, 2534.0], [82.3, 2534.0], [82.4, 2539.0], [82.5, 2542.0], [82.6, 2542.0], [82.7, 2542.0], [82.8, 2544.0], [82.9, 2553.0], [83.0, 2553.0], [83.1, 2553.0], [83.2, 2554.0], [83.3, 2555.0], [83.4, 2555.0], [83.5, 2555.0], [83.6, 2555.0], [83.7, 2559.0], [83.8, 2559.0], [83.9, 2564.0], [84.0, 2567.0], [84.1, 2570.0], [84.2, 2570.0], [84.3, 2571.0], [84.4, 2573.0], [84.5, 2575.0], [84.6, 2575.0], [84.7, 2585.0], [84.8, 2586.0], [84.9, 2586.0], [85.0, 2586.0], [85.1, 2589.0], [85.2, 2590.0], [85.3, 2590.0], [85.4, 2597.0], [85.5, 2599.0], [85.6, 2602.0], [85.7, 2602.0], [85.8, 2603.0], [85.9, 2605.0], [86.0, 2607.0], [86.1, 2607.0], [86.2, 2607.0], [86.3, 2611.0], [86.4, 2614.0], [86.5, 2614.0], [86.6, 2617.0], [86.7, 2617.0], [86.8, 2617.0], [86.9, 2624.0], [87.0, 2629.0], [87.1, 2631.0], [87.2, 2631.0], [87.3, 2633.0], [87.4, 2635.0], [87.5, 2635.0], [87.6, 2635.0], [87.7, 2636.0], [87.8, 2636.0], [87.9, 2637.0], [88.0, 2637.0], [88.1, 2650.0], [88.2, 2652.0], [88.3, 2654.0], [88.4, 2654.0], [88.5, 2657.0], [88.6, 2670.0], [88.7, 2670.0], [88.8, 2670.0], [88.9, 2671.0], [89.0, 2677.0], [89.1, 2677.0], [89.2, 2689.0], [89.3, 2690.0], [89.4, 2691.0], [89.5, 2691.0], [89.6, 2700.0], [89.7, 2704.0], [89.8, 2706.0], [89.9, 2706.0], [90.0, 2707.0], [90.1, 2716.0], [90.2, 2716.0], [90.3, 2721.0], [90.4, 2733.0], [90.5, 2734.0], [90.6, 2734.0], [90.7, 2735.0], [90.8, 2742.0], [90.9, 2746.0], [91.0, 2746.0], [91.1, 2751.0], [91.2, 2755.0], [91.3, 2756.0], [91.4, 2756.0], [91.5, 2760.0], [91.6, 2765.0], [91.7, 2765.0], [91.8, 2787.0], [91.9, 2792.0], [92.0, 2793.0], [92.1, 2793.0], [92.2, 2796.0], [92.3, 2812.0], [92.4, 2812.0], [92.5, 2812.0], [92.6, 2813.0], [92.7, 2814.0], [92.8, 2825.0], [92.9, 2825.0], [93.0, 2826.0], [93.1, 2835.0], [93.2, 2848.0], [93.3, 2848.0], [93.4, 2859.0], [93.5, 2859.0], [93.6, 2859.0], [93.7, 2872.0], [93.8, 2896.0], [93.9, 2911.0], [94.0, 2911.0], [94.1, 2915.0], [94.2, 2917.0], [94.3, 2918.0], [94.4, 2918.0], [94.5, 2921.0], [94.6, 2925.0], [94.7, 2934.0], [94.8, 2934.0], [94.9, 2954.0], [95.0, 2955.0], [95.1, 2955.0], [95.2, 2956.0], [95.3, 2957.0], [95.4, 2991.0], [95.5, 2991.0], [95.6, 2992.0], [95.7, 3003.0], [95.8, 3007.0], [95.9, 3007.0], [96.0, 3016.0], [96.1, 3022.0], [96.2, 3028.0], [96.3, 3028.0], [96.4, 3038.0], [96.5, 3054.0], [96.6, 3078.0], [96.7, 3078.0], [96.8, 3111.0], [96.9, 3122.0], [97.0, 3122.0], [97.1, 3198.0], [97.2, 3200.0], [97.3, 3234.0], [97.4, 3234.0], [97.5, 3235.0], [97.6, 3295.0], [97.7, 3311.0], [97.8, 3311.0], [97.9, 3331.0], [98.0, 3333.0], [98.1, 3353.0], [98.2, 3353.0], [98.3, 3443.0], [98.4, 3464.0], [98.5, 3464.0], [98.6, 3744.0], [98.7, 3775.0], [98.8, 3856.0], [98.9, 3856.0], [99.0, 3909.0], [99.1, 4349.0], [99.2, 4542.0], [99.3, 4542.0], [99.4, 4659.0], [99.5, 4799.0], [99.6, 4900.0], [99.7, 4900.0], [99.8, 5140.0], [99.9, 5301.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 700.0, "maxY": 64.0, "series": [{"data": [[700.0, 2.0], [800.0, 4.0], [900.0, 10.0], [1000.0, 13.0], [1100.0, 30.0], [1200.0, 34.0], [1300.0, 25.0], [1400.0, 32.0], [1500.0, 42.0], [1600.0, 39.0], [1700.0, 58.0], [1800.0, 30.0], [1900.0, 56.0], [2000.0, 64.0], [2100.0, 40.0], [2300.0, 47.0], [2200.0, 44.0], [2400.0, 25.0], [2500.0, 34.0], [2600.0, 29.0], [2700.0, 20.0], [2800.0, 12.0], [2900.0, 13.0], [3000.0, 8.0], [3100.0, 3.0], [3300.0, 4.0], [3200.0, 4.0], [3400.0, 2.0], [3700.0, 2.0], [3800.0, 1.0], [3900.0, 1.0], [4300.0, 1.0], [4600.0, 1.0], [4500.0, 1.0], [4700.0, 1.0], [4900.0, 1.0], [5100.0, 1.0], [5300.0, 1.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 5300.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 150.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 585.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 150.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 585.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 11.693023255813953, "minX": 1.60247022E12, "maxY": 12.0, "series": [{"data": [[1.60247022E12, 12.0], [1.60247034E12, 11.693023255813953], [1.60247028E12, 12.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60247034E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 1121.0, "minX": 1.0, "maxY": 2015.57320441989, "series": [{"data": [[8.0, 1175.0], [4.0, 1569.0], [2.0, 1560.0], [1.0, 1617.0], [9.0, 1156.0], [10.0, 1144.0], [5.0, 1248.0], [11.0, 1121.0], [12.0, 2015.57320441989], [6.0, 1216.0], [3.0, 1306.0], [7.0, 1604.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[11.910204081632651, 2005.42993197279]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 12.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 1150.8166666666666, "minX": 1.60247022E12, "maxY": 864113.4166666666, "series": [{"data": [[1.60247022E12, 500656.5333333333], [1.60247034E12, 470994.1], [1.60247028E12, 864113.4166666666]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60247022E12, 1150.8166666666666], [1.60247034E12, 1610.7166666666667], [1.60247028E12, 2761.5]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60247034E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 1930.4790697674423, "minX": 1.60247022E12, "maxY": 2230.006578947367, "series": [{"data": [[1.60247022E12, 2230.006578947367], [1.60247034E12, 1930.4790697674423], [1.60247028E12, 1956.4592391304348]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60247034E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 1929.418604651163, "minX": 1.60247022E12, "maxY": 2228.6381578947376, "series": [{"data": [[1.60247022E12, 2228.6381578947376], [1.60247034E12, 1929.418604651163], [1.60247028E12, 1955.3315217391307]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60247034E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.03260869565217391, "minX": 1.60247022E12, "maxY": 0.6973684210526317, "series": [{"data": [[1.60247022E12, 0.6973684210526317], [1.60247034E12, 0.05581395348837209], [1.60247028E12, 0.03260869565217391]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60247034E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 793.0, "minX": 1.60247022E12, "maxY": 5301.0, "series": [{"data": [[1.60247022E12, 4900.0], [1.60247034E12, 3111.0], [1.60247028E12, 5301.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60247022E12, 966.1469995987416], [1.60247034E12, 1088.5839968585967], [1.60247028E12, 825.1359985923767]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60247022E12, 967.6617001605034], [1.60247034E12, 1096.0136005973816], [1.60247028E12, 830.4496005630493]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60247022E12, 966.9884997993707], [1.60247034E12, 1093.507999253273], [1.60247028E12, 828.0879992961884]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60247022E12, 962.0], [1.60247034E12, 1031.0], [1.60247028E12, 793.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60247022E12, 2137.0], [1.60247034E12, 1965.0], [1.60247028E12, 1928.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60247034E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 1246.0, "minX": 1.0, "maxY": 2511.0, "series": [{"data": [[1.0, 2511.0], [8.0, 1580.5], [4.0, 2191.0], [9.0, 1606.0], [10.0, 1256.0], [5.0, 2209.5], [11.0, 1246.0], [6.0, 2057.5], [3.0, 1999.0], [7.0, 1710.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 11.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 1244.0, "minX": 1.0, "maxY": 2507.0, "series": [{"data": [[1.0, 2507.0], [8.0, 1578.5], [4.0, 2189.5], [9.0, 1606.0], [10.0, 1256.0], [5.0, 2208.5], [11.0, 1244.0], [6.0, 2056.0], [3.0, 1996.0], [7.0, 1709.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 11.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 2.7333333333333334, "minX": 1.60247022E12, "maxY": 6.133333333333334, "series": [{"data": [[1.60247022E12, 2.7333333333333334], [1.60247034E12, 3.3833333333333333], [1.60247028E12, 6.133333333333334]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60247034E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 2.533333333333333, "minX": 1.60247022E12, "maxY": 6.133333333333334, "series": [{"data": [[1.60247022E12, 2.533333333333333], [1.60247034E12, 3.5833333333333335], [1.60247028E12, 6.133333333333334]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60247034E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 2.533333333333333, "minX": 1.60247022E12, "maxY": 6.133333333333334, "series": [{"data": [[1.60247022E12, 2.533333333333333], [1.60247034E12, 3.5833333333333335], [1.60247028E12, 6.133333333333334]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60247034E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 2.533333333333333, "minX": 1.60247022E12, "maxY": 6.133333333333334, "series": [{"data": [[1.60247022E12, 2.533333333333333], [1.60247034E12, 3.5833333333333335], [1.60247028E12, 6.133333333333334]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60247034E12, "title": "Total Transactions Per Second"}},
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

