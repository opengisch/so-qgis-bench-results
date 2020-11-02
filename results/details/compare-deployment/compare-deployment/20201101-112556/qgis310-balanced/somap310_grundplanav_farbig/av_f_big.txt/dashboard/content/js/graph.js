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
        data: {"result": {"minY": 772.0, "minX": 0.0, "maxY": 4979.0, "series": [{"data": [[0.0, 772.0], [0.1, 772.0], [0.2, 783.0], [0.3, 838.0], [0.4, 838.0], [0.5, 854.0], [0.6, 923.0], [0.7, 928.0], [0.8, 928.0], [0.9, 928.0], [1.0, 932.0], [1.1, 947.0], [1.2, 947.0], [1.3, 948.0], [1.4, 948.0], [1.5, 958.0], [1.6, 958.0], [1.7, 966.0], [1.8, 972.0], [1.9, 972.0], [2.0, 989.0], [2.1, 995.0], [2.2, 999.0], [2.3, 999.0], [2.4, 1001.0], [2.5, 1005.0], [2.6, 1005.0], [2.7, 1005.0], [2.8, 1014.0], [2.9, 1017.0], [3.0, 1020.0], [3.1, 1020.0], [3.2, 1035.0], [3.3, 1045.0], [3.4, 1045.0], [3.5, 1052.0], [3.6, 1053.0], [3.7, 1054.0], [3.8, 1054.0], [3.9, 1075.0], [4.0, 1077.0], [4.1, 1080.0], [4.2, 1080.0], [4.3, 1081.0], [4.4, 1089.0], [4.5, 1091.0], [4.6, 1091.0], [4.7, 1110.0], [4.8, 1115.0], [4.9, 1119.0], [5.0, 1119.0], [5.1, 1129.0], [5.2, 1132.0], [5.3, 1132.0], [5.4, 1133.0], [5.5, 1135.0], [5.6, 1136.0], [5.7, 1136.0], [5.8, 1142.0], [5.9, 1152.0], [6.0, 1159.0], [6.1, 1159.0], [6.2, 1160.0], [6.3, 1163.0], [6.4, 1164.0], [6.5, 1164.0], [6.6, 1167.0], [6.7, 1169.0], [6.8, 1169.0], [6.9, 1176.0], [7.0, 1177.0], [7.1, 1177.0], [7.2, 1177.0], [7.3, 1180.0], [7.4, 1180.0], [7.5, 1181.0], [7.6, 1181.0], [7.7, 1182.0], [7.8, 1182.0], [7.9, 1187.0], [8.0, 1187.0], [8.1, 1192.0], [8.2, 1192.0], [8.3, 1192.0], [8.4, 1192.0], [8.5, 1193.0], [8.6, 1198.0], [8.7, 1198.0], [8.8, 1204.0], [8.9, 1204.0], [9.0, 1206.0], [9.1, 1206.0], [9.2, 1207.0], [9.3, 1208.0], [9.4, 1208.0], [9.5, 1208.0], [9.6, 1211.0], [9.7, 1211.0], [9.8, 1215.0], [9.9, 1215.0], [10.0, 1216.0], [10.1, 1216.0], [10.2, 1216.0], [10.3, 1217.0], [10.4, 1218.0], [10.5, 1223.0], [10.6, 1223.0], [10.7, 1223.0], [10.8, 1226.0], [10.9, 1228.0], [11.0, 1228.0], [11.1, 1232.0], [11.2, 1233.0], [11.3, 1236.0], [11.4, 1236.0], [11.5, 1239.0], [11.6, 1240.0], [11.7, 1240.0], [11.8, 1247.0], [11.9, 1248.0], [12.0, 1249.0], [12.1, 1249.0], [12.2, 1251.0], [12.3, 1252.0], [12.4, 1253.0], [12.5, 1253.0], [12.6, 1255.0], [12.7, 1256.0], [12.8, 1256.0], [12.9, 1256.0], [13.0, 1263.0], [13.1, 1266.0], [13.2, 1268.0], [13.3, 1268.0], [13.4, 1275.0], [13.5, 1278.0], [13.6, 1278.0], [13.7, 1284.0], [13.8, 1285.0], [13.9, 1287.0], [14.0, 1287.0], [14.1, 1288.0], [14.2, 1291.0], [14.3, 1300.0], [14.4, 1300.0], [14.5, 1305.0], [14.6, 1307.0], [14.7, 1311.0], [14.8, 1311.0], [14.9, 1312.0], [15.0, 1313.0], [15.1, 1313.0], [15.2, 1317.0], [15.3, 1320.0], [15.4, 1325.0], [15.5, 1325.0], [15.6, 1325.0], [15.7, 1325.0], [15.8, 1329.0], [15.9, 1329.0], [16.0, 1334.0], [16.1, 1337.0], [16.2, 1338.0], [16.3, 1338.0], [16.4, 1342.0], [16.5, 1346.0], [16.6, 1348.0], [16.7, 1348.0], [16.8, 1356.0], [16.9, 1360.0], [17.0, 1360.0], [17.1, 1363.0], [17.2, 1365.0], [17.3, 1369.0], [17.4, 1369.0], [17.5, 1373.0], [17.6, 1375.0], [17.7, 1377.0], [17.8, 1377.0], [17.9, 1380.0], [18.0, 1381.0], [18.1, 1382.0], [18.2, 1382.0], [18.3, 1382.0], [18.4, 1398.0], [18.5, 1398.0], [18.6, 1400.0], [18.7, 1402.0], [18.8, 1403.0], [18.9, 1403.0], [19.0, 1406.0], [19.1, 1407.0], [19.2, 1411.0], [19.3, 1411.0], [19.4, 1412.0], [19.5, 1412.0], [19.6, 1414.0], [19.7, 1414.0], [19.8, 1417.0], [19.9, 1418.0], [20.0, 1421.0], [20.1, 1421.0], [20.2, 1430.0], [20.3, 1430.0], [20.4, 1430.0], [20.5, 1432.0], [20.6, 1437.0], [20.7, 1440.0], [20.8, 1440.0], [20.9, 1444.0], [21.0, 1449.0], [21.1, 1453.0], [21.2, 1453.0], [21.3, 1458.0], [21.4, 1460.0], [21.5, 1464.0], [21.6, 1464.0], [21.7, 1466.0], [21.8, 1467.0], [21.9, 1467.0], [22.0, 1468.0], [22.1, 1470.0], [22.2, 1478.0], [22.3, 1478.0], [22.4, 1478.0], [22.5, 1479.0], [22.6, 1481.0], [22.7, 1481.0], [22.8, 1482.0], [22.9, 1485.0], [23.0, 1488.0], [23.1, 1488.0], [23.2, 1497.0], [23.3, 1500.0], [23.4, 1500.0], [23.5, 1504.0], [23.6, 1505.0], [23.7, 1506.0], [23.8, 1506.0], [23.9, 1512.0], [24.0, 1515.0], [24.1, 1525.0], [24.2, 1525.0], [24.3, 1527.0], [24.4, 1529.0], [24.5, 1531.0], [24.6, 1531.0], [24.7, 1531.0], [24.8, 1531.0], [24.9, 1533.0], [25.0, 1533.0], [25.1, 1533.0], [25.2, 1535.0], [25.3, 1535.0], [25.4, 1545.0], [25.5, 1549.0], [25.6, 1551.0], [25.7, 1551.0], [25.8, 1551.0], [25.9, 1555.0], [26.0, 1555.0], [26.1, 1555.0], [26.2, 1556.0], [26.3, 1556.0], [26.4, 1556.0], [26.5, 1556.0], [26.6, 1560.0], [26.7, 1561.0], [26.8, 1561.0], [26.9, 1562.0], [27.0, 1564.0], [27.1, 1565.0], [27.2, 1565.0], [27.3, 1566.0], [27.4, 1567.0], [27.5, 1572.0], [27.6, 1572.0], [27.7, 1572.0], [27.8, 1573.0], [27.9, 1575.0], [28.0, 1575.0], [28.1, 1583.0], [28.2, 1583.0], [28.3, 1584.0], [28.4, 1584.0], [28.5, 1586.0], [28.6, 1589.0], [28.7, 1589.0], [28.8, 1591.0], [28.9, 1593.0], [29.0, 1593.0], [29.1, 1593.0], [29.2, 1594.0], [29.3, 1595.0], [29.4, 1598.0], [29.5, 1598.0], [29.6, 1605.0], [29.7, 1607.0], [29.8, 1609.0], [29.9, 1609.0], [30.0, 1609.0], [30.1, 1614.0], [30.2, 1614.0], [30.3, 1617.0], [30.4, 1618.0], [30.5, 1620.0], [30.6, 1620.0], [30.7, 1621.0], [30.8, 1626.0], [30.9, 1627.0], [31.0, 1627.0], [31.1, 1631.0], [31.2, 1633.0], [31.3, 1636.0], [31.4, 1636.0], [31.5, 1637.0], [31.6, 1640.0], [31.7, 1640.0], [31.8, 1642.0], [31.9, 1644.0], [32.0, 1645.0], [32.1, 1645.0], [32.2, 1646.0], [32.3, 1648.0], [32.4, 1650.0], [32.5, 1650.0], [32.6, 1651.0], [32.7, 1653.0], [32.8, 1656.0], [32.9, 1656.0], [33.0, 1658.0], [33.1, 1669.0], [33.2, 1676.0], [33.3, 1676.0], [33.4, 1677.0], [33.5, 1687.0], [33.6, 1687.0], [33.7, 1689.0], [33.8, 1696.0], [33.9, 1704.0], [34.0, 1704.0], [34.1, 1709.0], [34.2, 1710.0], [34.3, 1711.0], [34.4, 1711.0], [34.5, 1711.0], [34.6, 1711.0], [34.7, 1711.0], [34.8, 1711.0], [34.9, 1714.0], [35.0, 1715.0], [35.1, 1715.0], [35.2, 1725.0], [35.3, 1727.0], [35.4, 1730.0], [35.5, 1730.0], [35.6, 1733.0], [35.7, 1738.0], [35.8, 1742.0], [35.9, 1742.0], [36.0, 1744.0], [36.1, 1749.0], [36.2, 1756.0], [36.3, 1756.0], [36.4, 1760.0], [36.5, 1765.0], [36.6, 1765.0], [36.7, 1765.0], [36.8, 1769.0], [36.9, 1772.0], [37.0, 1772.0], [37.1, 1772.0], [37.2, 1772.0], [37.3, 1773.0], [37.4, 1773.0], [37.5, 1780.0], [37.6, 1780.0], [37.7, 1784.0], [37.8, 1784.0], [37.9, 1789.0], [38.0, 1792.0], [38.1, 1793.0], [38.2, 1793.0], [38.3, 1794.0], [38.4, 1794.0], [38.5, 1794.0], [38.6, 1796.0], [38.7, 1799.0], [38.8, 1799.0], [38.9, 1799.0], [39.0, 1802.0], [39.1, 1802.0], [39.2, 1802.0], [39.3, 1802.0], [39.4, 1802.0], [39.5, 1804.0], [39.6, 1806.0], [39.7, 1806.0], [39.8, 1808.0], [39.9, 1808.0], [40.0, 1809.0], [40.1, 1809.0], [40.2, 1809.0], [40.3, 1811.0], [40.4, 1811.0], [40.5, 1812.0], [40.6, 1812.0], [40.7, 1815.0], [40.8, 1815.0], [40.9, 1816.0], [41.0, 1818.0], [41.1, 1820.0], [41.2, 1820.0], [41.3, 1824.0], [41.4, 1829.0], [41.5, 1830.0], [41.6, 1830.0], [41.7, 1830.0], [41.8, 1837.0], [41.9, 1837.0], [42.0, 1843.0], [42.1, 1844.0], [42.2, 1844.0], [42.3, 1844.0], [42.4, 1845.0], [42.5, 1846.0], [42.6, 1846.0], [42.7, 1846.0], [42.8, 1847.0], [42.9, 1847.0], [43.0, 1849.0], [43.1, 1849.0], [43.2, 1850.0], [43.3, 1851.0], [43.4, 1851.0], [43.5, 1852.0], [43.6, 1853.0], [43.7, 1857.0], [43.8, 1857.0], [43.9, 1858.0], [44.0, 1861.0], [44.1, 1863.0], [44.2, 1863.0], [44.3, 1866.0], [44.4, 1866.0], [44.5, 1866.0], [44.6, 1866.0], [44.7, 1869.0], [44.8, 1872.0], [44.9, 1872.0], [45.0, 1872.0], [45.1, 1874.0], [45.2, 1876.0], [45.3, 1876.0], [45.4, 1877.0], [45.5, 1879.0], [45.6, 1882.0], [45.7, 1882.0], [45.8, 1885.0], [45.9, 1886.0], [46.0, 1887.0], [46.1, 1887.0], [46.2, 1888.0], [46.3, 1889.0], [46.4, 1890.0], [46.5, 1890.0], [46.6, 1892.0], [46.7, 1897.0], [46.8, 1897.0], [46.9, 1899.0], [47.0, 1900.0], [47.1, 1903.0], [47.2, 1903.0], [47.3, 1903.0], [47.4, 1905.0], [47.5, 1912.0], [47.6, 1912.0], [47.7, 1916.0], [47.8, 1917.0], [47.9, 1920.0], [48.0, 1920.0], [48.1, 1920.0], [48.2, 1921.0], [48.3, 1929.0], [48.4, 1929.0], [48.5, 1931.0], [48.6, 1935.0], [48.7, 1935.0], [48.8, 1937.0], [48.9, 1945.0], [49.0, 1947.0], [49.1, 1947.0], [49.2, 1948.0], [49.3, 1951.0], [49.4, 1955.0], [49.5, 1955.0], [49.6, 1956.0], [49.7, 1958.0], [49.8, 1959.0], [49.9, 1959.0], [50.0, 1960.0], [50.1, 1961.0], [50.2, 1961.0], [50.3, 1962.0], [50.4, 1963.0], [50.5, 1964.0], [50.6, 1964.0], [50.7, 1964.0], [50.8, 1965.0], [50.9, 1966.0], [51.0, 1966.0], [51.1, 1967.0], [51.2, 1976.0], [51.3, 1978.0], [51.4, 1978.0], [51.5, 1982.0], [51.6, 1982.0], [51.7, 1982.0], [51.8, 1985.0], [51.9, 1986.0], [52.0, 1991.0], [52.1, 1991.0], [52.2, 1992.0], [52.3, 1993.0], [52.4, 1993.0], [52.5, 1993.0], [52.6, 1994.0], [52.7, 1995.0], [52.8, 1996.0], [52.9, 1996.0], [53.0, 1996.0], [53.1, 2001.0], [53.2, 2002.0], [53.3, 2002.0], [53.4, 2005.0], [53.5, 2008.0], [53.6, 2008.0], [53.7, 2010.0], [53.8, 2012.0], [53.9, 2013.0], [54.0, 2013.0], [54.1, 2015.0], [54.2, 2016.0], [54.3, 2018.0], [54.4, 2018.0], [54.5, 2021.0], [54.6, 2022.0], [54.7, 2023.0], [54.8, 2023.0], [54.9, 2026.0], [55.0, 2029.0], [55.1, 2029.0], [55.2, 2031.0], [55.3, 2032.0], [55.4, 2038.0], [55.5, 2038.0], [55.6, 2039.0], [55.7, 2040.0], [55.8, 2040.0], [55.9, 2040.0], [56.0, 2043.0], [56.1, 2044.0], [56.2, 2046.0], [56.3, 2046.0], [56.4, 2046.0], [56.5, 2046.0], [56.6, 2047.0], [56.7, 2047.0], [56.8, 2049.0], [56.9, 2052.0], [57.0, 2052.0], [57.1, 2053.0], [57.2, 2055.0], [57.3, 2056.0], [57.4, 2056.0], [57.5, 2057.0], [57.6, 2059.0], [57.7, 2068.0], [57.8, 2068.0], [57.9, 2069.0], [58.0, 2069.0], [58.1, 2071.0], [58.2, 2071.0], [58.3, 2071.0], [58.4, 2072.0], [58.5, 2072.0], [58.6, 2073.0], [58.7, 2076.0], [58.8, 2078.0], [58.9, 2078.0], [59.0, 2079.0], [59.1, 2079.0], [59.2, 2080.0], [59.3, 2080.0], [59.4, 2081.0], [59.5, 2083.0], [59.6, 2084.0], [59.7, 2084.0], [59.8, 2086.0], [59.9, 2087.0], [60.0, 2088.0], [60.1, 2088.0], [60.2, 2092.0], [60.3, 2093.0], [60.4, 2093.0], [60.5, 2100.0], [60.6, 2101.0], [60.7, 2101.0], [60.8, 2101.0], [60.9, 2102.0], [61.0, 2103.0], [61.1, 2107.0], [61.2, 2107.0], [61.3, 2107.0], [61.4, 2109.0], [61.5, 2110.0], [61.6, 2110.0], [61.7, 2111.0], [61.8, 2111.0], [61.9, 2111.0], [62.0, 2115.0], [62.1, 2116.0], [62.2, 2117.0], [62.3, 2117.0], [62.4, 2118.0], [62.5, 2121.0], [62.6, 2123.0], [62.7, 2123.0], [62.8, 2126.0], [62.9, 2126.0], [63.0, 2126.0], [63.1, 2126.0], [63.2, 2127.0], [63.3, 2128.0], [63.4, 2128.0], [63.5, 2135.0], [63.6, 2138.0], [63.7, 2138.0], [63.8, 2138.0], [63.9, 2138.0], [64.0, 2139.0], [64.1, 2143.0], [64.2, 2143.0], [64.3, 2143.0], [64.4, 2143.0], [64.5, 2146.0], [64.6, 2146.0], [64.7, 2148.0], [64.8, 2148.0], [64.9, 2148.0], [65.0, 2148.0], [65.1, 2148.0], [65.2, 2149.0], [65.3, 2149.0], [65.4, 2151.0], [65.5, 2151.0], [65.6, 2152.0], [65.7, 2152.0], [65.8, 2152.0], [65.9, 2154.0], [66.0, 2159.0], [66.1, 2159.0], [66.2, 2159.0], [66.3, 2160.0], [66.4, 2161.0], [66.5, 2161.0], [66.6, 2163.0], [66.7, 2166.0], [66.8, 2166.0], [66.9, 2167.0], [67.0, 2168.0], [67.1, 2169.0], [67.2, 2169.0], [67.3, 2170.0], [67.4, 2171.0], [67.5, 2174.0], [67.6, 2174.0], [67.7, 2177.0], [67.8, 2179.0], [67.9, 2180.0], [68.0, 2180.0], [68.1, 2180.0], [68.2, 2180.0], [68.3, 2180.0], [68.4, 2180.0], [68.5, 2181.0], [68.6, 2183.0], [68.7, 2183.0], [68.8, 2184.0], [68.9, 2185.0], [69.0, 2186.0], [69.1, 2186.0], [69.2, 2186.0], [69.3, 2187.0], [69.4, 2192.0], [69.5, 2192.0], [69.6, 2192.0], [69.7, 2194.0], [69.8, 2194.0], [69.9, 2194.0], [70.0, 2194.0], [70.1, 2195.0], [70.2, 2195.0], [70.3, 2195.0], [70.4, 2197.0], [70.5, 2199.0], [70.6, 2199.0], [70.7, 2199.0], [70.8, 2200.0], [70.9, 2200.0], [71.0, 2200.0], [71.1, 2202.0], [71.2, 2202.0], [71.3, 2204.0], [71.4, 2204.0], [71.5, 2206.0], [71.6, 2208.0], [71.7, 2208.0], [71.8, 2210.0], [71.9, 2212.0], [72.0, 2216.0], [72.1, 2216.0], [72.2, 2218.0], [72.3, 2219.0], [72.4, 2219.0], [72.5, 2219.0], [72.6, 2221.0], [72.7, 2223.0], [72.8, 2224.0], [72.9, 2224.0], [73.0, 2224.0], [73.1, 2229.0], [73.2, 2230.0], [73.3, 2230.0], [73.4, 2231.0], [73.5, 2232.0], [73.6, 2232.0], [73.7, 2235.0], [73.8, 2236.0], [73.9, 2236.0], [74.0, 2236.0], [74.1, 2236.0], [74.2, 2239.0], [74.3, 2240.0], [74.4, 2240.0], [74.5, 2241.0], [74.6, 2242.0], [74.7, 2243.0], [74.8, 2243.0], [74.9, 2244.0], [75.0, 2245.0], [75.1, 2245.0], [75.2, 2249.0], [75.3, 2252.0], [75.4, 2252.0], [75.5, 2252.0], [75.6, 2252.0], [75.7, 2253.0], [75.8, 2253.0], [75.9, 2253.0], [76.0, 2254.0], [76.1, 2256.0], [76.2, 2257.0], [76.3, 2257.0], [76.4, 2258.0], [76.5, 2259.0], [76.6, 2259.0], [76.7, 2259.0], [76.8, 2260.0], [76.9, 2262.0], [77.0, 2262.0], [77.1, 2267.0], [77.2, 2270.0], [77.3, 2270.0], [77.4, 2270.0], [77.5, 2270.0], [77.6, 2276.0], [77.7, 2279.0], [77.8, 2279.0], [77.9, 2281.0], [78.0, 2283.0], [78.1, 2283.0], [78.2, 2283.0], [78.3, 2284.0], [78.4, 2285.0], [78.5, 2285.0], [78.6, 2286.0], [78.7, 2286.0], [78.8, 2287.0], [78.9, 2287.0], [79.0, 2287.0], [79.1, 2292.0], [79.2, 2298.0], [79.3, 2298.0], [79.4, 2299.0], [79.5, 2305.0], [79.6, 2308.0], [79.7, 2308.0], [79.8, 2311.0], [79.9, 2321.0], [80.0, 2323.0], [80.1, 2323.0], [80.2, 2326.0], [80.3, 2329.0], [80.4, 2329.0], [80.5, 2335.0], [80.6, 2338.0], [80.7, 2342.0], [80.8, 2342.0], [80.9, 2349.0], [81.0, 2351.0], [81.1, 2353.0], [81.2, 2353.0], [81.3, 2357.0], [81.4, 2361.0], [81.5, 2364.0], [81.6, 2364.0], [81.7, 2367.0], [81.8, 2367.0], [81.9, 2367.0], [82.0, 2373.0], [82.1, 2373.0], [82.2, 2374.0], [82.3, 2374.0], [82.4, 2377.0], [82.5, 2378.0], [82.6, 2378.0], [82.7, 2378.0], [82.8, 2380.0], [82.9, 2386.0], [83.0, 2390.0], [83.1, 2390.0], [83.2, 2391.0], [83.3, 2395.0], [83.4, 2395.0], [83.5, 2403.0], [83.6, 2409.0], [83.7, 2411.0], [83.8, 2411.0], [83.9, 2414.0], [84.0, 2418.0], [84.1, 2418.0], [84.2, 2418.0], [84.3, 2419.0], [84.4, 2426.0], [84.5, 2426.0], [84.6, 2426.0], [84.7, 2430.0], [84.8, 2436.0], [84.9, 2437.0], [85.0, 2437.0], [85.1, 2444.0], [85.2, 2445.0], [85.3, 2445.0], [85.4, 2447.0], [85.5, 2448.0], [85.6, 2449.0], [85.7, 2449.0], [85.8, 2453.0], [85.9, 2456.0], [86.0, 2466.0], [86.1, 2466.0], [86.2, 2471.0], [86.3, 2475.0], [86.4, 2490.0], [86.5, 2490.0], [86.6, 2491.0], [86.7, 2500.0], [86.8, 2500.0], [86.9, 2502.0], [87.0, 2503.0], [87.1, 2504.0], [87.2, 2504.0], [87.3, 2505.0], [87.4, 2525.0], [87.5, 2526.0], [87.6, 2526.0], [87.7, 2532.0], [87.8, 2535.0], [87.9, 2539.0], [88.0, 2539.0], [88.1, 2541.0], [88.2, 2542.0], [88.3, 2542.0], [88.4, 2542.0], [88.5, 2543.0], [88.6, 2545.0], [88.7, 2545.0], [88.8, 2551.0], [88.9, 2552.0], [89.0, 2562.0], [89.1, 2562.0], [89.2, 2564.0], [89.3, 2569.0], [89.4, 2569.0], [89.5, 2569.0], [89.6, 2573.0], [89.7, 2573.0], [89.8, 2576.0], [89.9, 2576.0], [90.0, 2582.0], [90.1, 2599.0], [90.2, 2599.0], [90.3, 2601.0], [90.4, 2608.0], [90.5, 2619.0], [90.6, 2619.0], [90.7, 2621.0], [90.8, 2632.0], [90.9, 2637.0], [91.0, 2637.0], [91.1, 2649.0], [91.2, 2656.0], [91.3, 2662.0], [91.4, 2662.0], [91.5, 2665.0], [91.6, 2673.0], [91.7, 2673.0], [91.8, 2694.0], [91.9, 2699.0], [92.0, 2720.0], [92.1, 2720.0], [92.2, 2745.0], [92.3, 2747.0], [92.4, 2755.0], [92.5, 2755.0], [92.6, 2773.0], [92.7, 2789.0], [92.8, 2797.0], [92.9, 2797.0], [93.0, 2798.0], [93.1, 2807.0], [93.2, 2808.0], [93.3, 2808.0], [93.4, 2814.0], [93.5, 2845.0], [93.6, 2845.0], [93.7, 2846.0], [93.8, 2853.0], [93.9, 2870.0], [94.0, 2870.0], [94.1, 2877.0], [94.2, 2891.0], [94.3, 2894.0], [94.4, 2894.0], [94.5, 2904.0], [94.6, 2918.0], [94.7, 2920.0], [94.8, 2920.0], [94.9, 2928.0], [95.0, 3011.0], [95.1, 3011.0], [95.2, 3024.0], [95.3, 3195.0], [95.4, 3198.0], [95.5, 3198.0], [95.6, 3204.0], [95.7, 3209.0], [95.8, 3219.0], [95.9, 3219.0], [96.0, 3220.0], [96.1, 3221.0], [96.2, 3231.0], [96.3, 3231.0], [96.4, 3231.0], [96.5, 3233.0], [96.6, 3276.0], [96.7, 3276.0], [96.8, 3305.0], [96.9, 3316.0], [97.0, 3316.0], [97.1, 3327.0], [97.2, 3333.0], [97.3, 3343.0], [97.4, 3343.0], [97.5, 3344.0], [97.6, 3361.0], [97.7, 3382.0], [97.8, 3382.0], [97.9, 3489.0], [98.0, 3509.0], [98.1, 3588.0], [98.2, 3588.0], [98.3, 3750.0], [98.4, 3810.0], [98.5, 3810.0], [98.6, 3824.0], [98.7, 3898.0], [98.8, 4159.0], [98.9, 4159.0], [99.0, 4221.0], [99.1, 4311.0], [99.2, 4414.0], [99.3, 4414.0], [99.4, 4479.0], [99.5, 4640.0], [99.6, 4865.0], [99.7, 4865.0], [99.8, 4895.0], [99.9, 4979.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 700.0, "maxY": 76.0, "series": [{"data": [[700.0, 2.0], [800.0, 2.0], [900.0, 13.0], [1000.0, 17.0], [1100.0, 30.0], [1200.0, 41.0], [1300.0, 31.0], [1400.0, 35.0], [1500.0, 46.0], [1600.0, 32.0], [1700.0, 37.0], [1800.0, 59.0], [1900.0, 45.0], [2000.0, 54.0], [2100.0, 76.0], [2300.0, 29.0], [2200.0, 64.0], [2400.0, 24.0], [2500.0, 26.0], [2600.0, 13.0], [2700.0, 8.0], [2800.0, 10.0], [2900.0, 4.0], [3000.0, 2.0], [3100.0, 2.0], [3200.0, 9.0], [3300.0, 8.0], [3400.0, 1.0], [3500.0, 2.0], [3700.0, 1.0], [3800.0, 3.0], [4100.0, 1.0], [4200.0, 1.0], [4300.0, 1.0], [4400.0, 2.0], [4600.0, 1.0], [4800.0, 2.0], [4900.0, 1.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 4900.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 172.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 563.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 172.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 563.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 11.629213483146069, "minX": 1.60423506E12, "maxY": 12.0, "series": [{"data": [[1.60423512E12, 12.0], [1.60423518E12, 11.629213483146069], [1.60423506E12, 12.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60423518E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 1182.0, "minX": 1.0, "maxY": 2040.0, "series": [{"data": [[8.0, 1208.0], [4.0, 1620.0], [2.0, 1651.0], [1.0, 2040.0], [9.0, 1211.0], [10.0, 1211.0], [5.0, 1239.0], [11.0, 1182.0], [12.0, 1967.8784530386745], [6.0, 1207.0], [3.0, 1253.0], [7.0, 1645.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[11.910204081632651, 1959.4707482993197]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 12.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 1330.1666666666667, "minX": 1.60423506E12, "maxY": 890061.05, "series": [{"data": [[1.60423512E12, 890061.05], [1.60423518E12, 380807.38333333336], [1.60423506E12, 564946.4333333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60423512E12, 2838.05], [1.60423518E12, 1330.1666666666667], [1.60423506E12, 1354.8166666666666]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60423518E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 1859.5337078651685, "minX": 1.60423506E12, "maxY": 2171.7150837988825, "series": [{"data": [[1.60423512E12, 1906.0238095238085], [1.60423518E12, 1859.5337078651685], [1.60423506E12, 2171.7150837988825]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60423518E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 1858.6011235955052, "minX": 1.60423506E12, "maxY": 2170.379888268157, "series": [{"data": [[1.60423512E12, 1904.899470899472], [1.60423518E12, 1858.6011235955052], [1.60423506E12, 2170.379888268157]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60423518E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.60423506E12, "maxY": 0.7988826815642464, "series": [{"data": [[1.60423512E12, 0.05291005291005297], [1.60423518E12, 0.0], [1.60423506E12, 0.7988826815642464]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60423518E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 772.0, "minX": 1.60423506E12, "maxY": 4979.0, "series": [{"data": [[1.60423512E12, 4979.0], [1.60423518E12, 3898.0], [1.60423506E12, 4479.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60423512E12, 884.4139933133125], [1.60423518E12, 1000.7679962444306], [1.60423506E12, 869.7999939918518]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60423512E12, 909.655402674675], [1.60423518E12, 1014.9448015022278], [1.60423506E12, 892.4800024032593]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60423512E12, 898.4369966566562], [1.60423518E12, 1008.6439981222153], [1.60423506E12, 882.3999969959259]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60423512E12, 772.0], [1.60423518E12, 947.0], [1.60423506E12, 783.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60423512E12, 1904.0], [1.60423518E12, 1840.0], [1.60423506E12, 2086.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60423518E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 1264.5, "minX": 3.0, "maxY": 2201.0, "series": [{"data": [[4.0, 2201.0], [8.0, 1642.5], [9.0, 1405.5], [10.0, 1264.5], [5.0, 2151.0], [11.0, 1392.0], [3.0, 2023.0], [6.0, 2005.5], [7.0, 1963.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 11.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 1264.5, "minX": 3.0, "maxY": 2200.5, "series": [{"data": [[4.0, 2200.5], [8.0, 1641.5], [9.0, 1405.5], [10.0, 1264.5], [5.0, 2151.0], [11.0, 1391.5], [3.0, 2022.0], [6.0, 2005.0], [7.0, 1962.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 11.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 2.7666666666666666, "minX": 1.60423506E12, "maxY": 6.3, "series": [{"data": [[1.60423512E12, 6.3], [1.60423518E12, 2.7666666666666666], [1.60423506E12, 3.183333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60423518E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 2.966666666666667, "minX": 1.60423506E12, "maxY": 6.3, "series": [{"data": [[1.60423512E12, 6.3], [1.60423518E12, 2.966666666666667], [1.60423506E12, 2.9833333333333334]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60423518E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 2.966666666666667, "minX": 1.60423506E12, "maxY": 6.3, "series": [{"data": [[1.60423512E12, 6.3], [1.60423518E12, 2.966666666666667], [1.60423506E12, 2.9833333333333334]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60423518E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 2.966666666666667, "minX": 1.60423506E12, "maxY": 6.3, "series": [{"data": [[1.60423512E12, 6.3], [1.60423518E12, 2.966666666666667], [1.60423506E12, 2.9833333333333334]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60423518E12, "title": "Total Transactions Per Second"}},
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

