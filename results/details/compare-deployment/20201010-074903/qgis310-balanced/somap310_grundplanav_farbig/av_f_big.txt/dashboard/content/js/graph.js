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
        data: {"result": {"minY": 580.0, "minX": 0.0, "maxY": 4928.0, "series": [{"data": [[0.0, 580.0], [0.1, 580.0], [0.2, 589.0], [0.3, 733.0], [0.4, 733.0], [0.5, 745.0], [0.6, 753.0], [0.7, 753.0], [0.8, 753.0], [0.9, 760.0], [1.0, 768.0], [1.1, 773.0], [1.2, 773.0], [1.3, 846.0], [1.4, 851.0], [1.5, 890.0], [1.6, 890.0], [1.7, 897.0], [1.8, 903.0], [1.9, 903.0], [2.0, 905.0], [2.1, 906.0], [2.2, 908.0], [2.3, 908.0], [2.4, 915.0], [2.5, 925.0], [2.6, 926.0], [2.7, 926.0], [2.8, 929.0], [2.9, 932.0], [3.0, 937.0], [3.1, 937.0], [3.2, 942.0], [3.3, 966.0], [3.4, 966.0], [3.5, 977.0], [3.6, 1006.0], [3.7, 1009.0], [3.8, 1009.0], [3.9, 1010.0], [4.0, 1014.0], [4.1, 1021.0], [4.2, 1021.0], [4.3, 1029.0], [4.4, 1039.0], [4.5, 1043.0], [4.6, 1043.0], [4.7, 1044.0], [4.8, 1064.0], [4.9, 1067.0], [5.0, 1067.0], [5.1, 1077.0], [5.2, 1082.0], [5.3, 1082.0], [5.4, 1083.0], [5.5, 1086.0], [5.6, 1086.0], [5.7, 1086.0], [5.8, 1086.0], [5.9, 1093.0], [6.0, 1094.0], [6.1, 1094.0], [6.2, 1100.0], [6.3, 1100.0], [6.4, 1105.0], [6.5, 1105.0], [6.6, 1107.0], [6.7, 1115.0], [6.8, 1115.0], [6.9, 1115.0], [7.0, 1116.0], [7.1, 1119.0], [7.2, 1119.0], [7.3, 1122.0], [7.4, 1124.0], [7.5, 1124.0], [7.6, 1124.0], [7.7, 1127.0], [7.8, 1130.0], [7.9, 1135.0], [8.0, 1135.0], [8.1, 1135.0], [8.2, 1137.0], [8.3, 1140.0], [8.4, 1140.0], [8.5, 1140.0], [8.6, 1144.0], [8.7, 1144.0], [8.8, 1145.0], [8.9, 1146.0], [9.0, 1147.0], [9.1, 1147.0], [9.2, 1147.0], [9.3, 1148.0], [9.4, 1149.0], [9.5, 1149.0], [9.6, 1150.0], [9.7, 1150.0], [9.8, 1151.0], [9.9, 1151.0], [10.0, 1152.0], [10.1, 1152.0], [10.2, 1152.0], [10.3, 1154.0], [10.4, 1154.0], [10.5, 1154.0], [10.6, 1154.0], [10.7, 1159.0], [10.8, 1163.0], [10.9, 1167.0], [11.0, 1167.0], [11.1, 1172.0], [11.2, 1179.0], [11.3, 1191.0], [11.4, 1191.0], [11.5, 1192.0], [11.6, 1192.0], [11.7, 1192.0], [11.8, 1197.0], [11.9, 1200.0], [12.0, 1200.0], [12.1, 1200.0], [12.2, 1206.0], [12.3, 1214.0], [12.4, 1215.0], [12.5, 1215.0], [12.6, 1215.0], [12.7, 1216.0], [12.8, 1217.0], [12.9, 1217.0], [13.0, 1218.0], [13.1, 1221.0], [13.2, 1223.0], [13.3, 1223.0], [13.4, 1227.0], [13.5, 1229.0], [13.6, 1229.0], [13.7, 1231.0], [13.8, 1237.0], [13.9, 1238.0], [14.0, 1238.0], [14.1, 1238.0], [14.2, 1239.0], [14.3, 1242.0], [14.4, 1242.0], [14.5, 1243.0], [14.6, 1243.0], [14.7, 1244.0], [14.8, 1244.0], [14.9, 1244.0], [15.0, 1245.0], [15.1, 1245.0], [15.2, 1246.0], [15.3, 1248.0], [15.4, 1249.0], [15.5, 1249.0], [15.6, 1251.0], [15.7, 1258.0], [15.8, 1258.0], [15.9, 1258.0], [16.0, 1259.0], [16.1, 1259.0], [16.2, 1264.0], [16.3, 1264.0], [16.4, 1265.0], [16.5, 1276.0], [16.6, 1278.0], [16.7, 1278.0], [16.8, 1282.0], [16.9, 1285.0], [17.0, 1285.0], [17.1, 1285.0], [17.2, 1287.0], [17.3, 1300.0], [17.4, 1300.0], [17.5, 1300.0], [17.6, 1301.0], [17.7, 1304.0], [17.8, 1304.0], [17.9, 1305.0], [18.0, 1306.0], [18.1, 1306.0], [18.2, 1306.0], [18.3, 1307.0], [18.4, 1308.0], [18.5, 1308.0], [18.6, 1308.0], [18.7, 1308.0], [18.8, 1309.0], [18.9, 1309.0], [19.0, 1310.0], [19.1, 1312.0], [19.2, 1314.0], [19.3, 1314.0], [19.4, 1316.0], [19.5, 1319.0], [19.6, 1326.0], [19.7, 1326.0], [19.8, 1327.0], [19.9, 1327.0], [20.0, 1327.0], [20.1, 1327.0], [20.2, 1328.0], [20.3, 1328.0], [20.4, 1328.0], [20.5, 1329.0], [20.6, 1333.0], [20.7, 1340.0], [20.8, 1340.0], [20.9, 1341.0], [21.0, 1341.0], [21.1, 1343.0], [21.2, 1343.0], [21.3, 1353.0], [21.4, 1355.0], [21.5, 1356.0], [21.6, 1356.0], [21.7, 1356.0], [21.8, 1359.0], [21.9, 1359.0], [22.0, 1360.0], [22.1, 1361.0], [22.2, 1368.0], [22.3, 1368.0], [22.4, 1371.0], [22.5, 1373.0], [22.6, 1373.0], [22.7, 1373.0], [22.8, 1375.0], [22.9, 1376.0], [23.0, 1386.0], [23.1, 1386.0], [23.2, 1389.0], [23.3, 1399.0], [23.4, 1399.0], [23.5, 1405.0], [23.6, 1407.0], [23.7, 1407.0], [23.8, 1407.0], [23.9, 1410.0], [24.0, 1411.0], [24.1, 1412.0], [24.2, 1412.0], [24.3, 1412.0], [24.4, 1417.0], [24.5, 1424.0], [24.6, 1424.0], [24.7, 1425.0], [24.8, 1430.0], [24.9, 1434.0], [25.0, 1434.0], [25.1, 1434.0], [25.2, 1437.0], [25.3, 1437.0], [25.4, 1437.0], [25.5, 1440.0], [25.6, 1440.0], [25.7, 1440.0], [25.8, 1442.0], [25.9, 1447.0], [26.0, 1448.0], [26.1, 1448.0], [26.2, 1452.0], [26.3, 1456.0], [26.4, 1457.0], [26.5, 1457.0], [26.6, 1461.0], [26.7, 1462.0], [26.8, 1462.0], [26.9, 1464.0], [27.0, 1465.0], [27.1, 1467.0], [27.2, 1467.0], [27.3, 1469.0], [27.4, 1471.0], [27.5, 1476.0], [27.6, 1476.0], [27.7, 1479.0], [27.8, 1483.0], [27.9, 1485.0], [28.0, 1485.0], [28.1, 1485.0], [28.2, 1488.0], [28.3, 1490.0], [28.4, 1490.0], [28.5, 1492.0], [28.6, 1493.0], [28.7, 1493.0], [28.8, 1497.0], [28.9, 1500.0], [29.0, 1501.0], [29.1, 1501.0], [29.2, 1501.0], [29.3, 1503.0], [29.4, 1507.0], [29.5, 1507.0], [29.6, 1508.0], [29.7, 1509.0], [29.8, 1516.0], [29.9, 1516.0], [30.0, 1518.0], [30.1, 1518.0], [30.2, 1518.0], [30.3, 1519.0], [30.4, 1519.0], [30.5, 1523.0], [30.6, 1523.0], [30.7, 1526.0], [30.8, 1526.0], [30.9, 1529.0], [31.0, 1529.0], [31.1, 1529.0], [31.2, 1530.0], [31.3, 1534.0], [31.4, 1534.0], [31.5, 1535.0], [31.6, 1537.0], [31.7, 1537.0], [31.8, 1537.0], [31.9, 1539.0], [32.0, 1541.0], [32.1, 1541.0], [32.2, 1544.0], [32.3, 1545.0], [32.4, 1546.0], [32.5, 1546.0], [32.6, 1547.0], [32.7, 1554.0], [32.8, 1554.0], [32.9, 1554.0], [33.0, 1558.0], [33.1, 1558.0], [33.2, 1559.0], [33.3, 1559.0], [33.4, 1560.0], [33.5, 1562.0], [33.6, 1562.0], [33.7, 1562.0], [33.8, 1566.0], [33.9, 1567.0], [34.0, 1567.0], [34.1, 1570.0], [34.2, 1579.0], [34.3, 1581.0], [34.4, 1581.0], [34.5, 1582.0], [34.6, 1586.0], [34.7, 1589.0], [34.8, 1589.0], [34.9, 1591.0], [35.0, 1594.0], [35.1, 1594.0], [35.2, 1594.0], [35.3, 1595.0], [35.4, 1595.0], [35.5, 1595.0], [35.6, 1611.0], [35.7, 1613.0], [35.8, 1613.0], [35.9, 1613.0], [36.0, 1615.0], [36.1, 1617.0], [36.2, 1618.0], [36.3, 1618.0], [36.4, 1618.0], [36.5, 1619.0], [36.6, 1623.0], [36.7, 1623.0], [36.8, 1623.0], [36.9, 1627.0], [37.0, 1627.0], [37.1, 1633.0], [37.2, 1633.0], [37.3, 1635.0], [37.4, 1635.0], [37.5, 1636.0], [37.6, 1638.0], [37.7, 1645.0], [37.8, 1645.0], [37.9, 1648.0], [38.0, 1655.0], [38.1, 1656.0], [38.2, 1656.0], [38.3, 1659.0], [38.4, 1667.0], [38.5, 1667.0], [38.6, 1669.0], [38.7, 1687.0], [38.8, 1687.0], [38.9, 1687.0], [39.0, 1687.0], [39.1, 1691.0], [39.2, 1693.0], [39.3, 1693.0], [39.4, 1695.0], [39.5, 1696.0], [39.6, 1697.0], [39.7, 1697.0], [39.8, 1697.0], [39.9, 1698.0], [40.0, 1698.0], [40.1, 1698.0], [40.2, 1698.0], [40.3, 1700.0], [40.4, 1700.0], [40.5, 1701.0], [40.6, 1702.0], [40.7, 1702.0], [40.8, 1702.0], [40.9, 1702.0], [41.0, 1705.0], [41.1, 1706.0], [41.2, 1706.0], [41.3, 1707.0], [41.4, 1708.0], [41.5, 1709.0], [41.6, 1709.0], [41.7, 1710.0], [41.8, 1711.0], [41.9, 1711.0], [42.0, 1714.0], [42.1, 1715.0], [42.2, 1715.0], [42.3, 1715.0], [42.4, 1715.0], [42.5, 1718.0], [42.6, 1719.0], [42.7, 1719.0], [42.8, 1720.0], [42.9, 1723.0], [43.0, 1723.0], [43.1, 1723.0], [43.2, 1729.0], [43.3, 1729.0], [43.4, 1729.0], [43.5, 1730.0], [43.6, 1730.0], [43.7, 1732.0], [43.8, 1732.0], [43.9, 1735.0], [44.0, 1737.0], [44.1, 1738.0], [44.2, 1738.0], [44.3, 1739.0], [44.4, 1740.0], [44.5, 1741.0], [44.6, 1741.0], [44.7, 1747.0], [44.8, 1751.0], [44.9, 1751.0], [45.0, 1751.0], [45.1, 1753.0], [45.2, 1756.0], [45.3, 1756.0], [45.4, 1757.0], [45.5, 1757.0], [45.6, 1758.0], [45.7, 1758.0], [45.8, 1758.0], [45.9, 1761.0], [46.0, 1761.0], [46.1, 1761.0], [46.2, 1763.0], [46.3, 1765.0], [46.4, 1766.0], [46.5, 1766.0], [46.6, 1767.0], [46.7, 1768.0], [46.8, 1768.0], [46.9, 1771.0], [47.0, 1774.0], [47.1, 1775.0], [47.2, 1775.0], [47.3, 1776.0], [47.4, 1778.0], [47.5, 1781.0], [47.6, 1781.0], [47.7, 1783.0], [47.8, 1783.0], [47.9, 1785.0], [48.0, 1785.0], [48.1, 1791.0], [48.2, 1799.0], [48.3, 1800.0], [48.4, 1800.0], [48.5, 1800.0], [48.6, 1801.0], [48.7, 1801.0], [48.8, 1803.0], [48.9, 1806.0], [49.0, 1807.0], [49.1, 1807.0], [49.2, 1808.0], [49.3, 1811.0], [49.4, 1812.0], [49.5, 1812.0], [49.6, 1813.0], [49.7, 1815.0], [49.8, 1815.0], [49.9, 1815.0], [50.0, 1815.0], [50.1, 1818.0], [50.2, 1818.0], [50.3, 1820.0], [50.4, 1824.0], [50.5, 1825.0], [50.6, 1825.0], [50.7, 1826.0], [50.8, 1828.0], [50.9, 1831.0], [51.0, 1831.0], [51.1, 1836.0], [51.2, 1836.0], [51.3, 1840.0], [51.4, 1840.0], [51.5, 1844.0], [51.6, 1845.0], [51.7, 1845.0], [51.8, 1846.0], [51.9, 1846.0], [52.0, 1848.0], [52.1, 1848.0], [52.2, 1852.0], [52.3, 1853.0], [52.4, 1855.0], [52.5, 1855.0], [52.6, 1855.0], [52.7, 1860.0], [52.8, 1860.0], [52.9, 1860.0], [53.0, 1861.0], [53.1, 1862.0], [53.2, 1862.0], [53.3, 1862.0], [53.4, 1864.0], [53.5, 1865.0], [53.6, 1865.0], [53.7, 1869.0], [53.8, 1873.0], [53.9, 1874.0], [54.0, 1874.0], [54.1, 1876.0], [54.2, 1876.0], [54.3, 1877.0], [54.4, 1877.0], [54.5, 1877.0], [54.6, 1878.0], [54.7, 1879.0], [54.8, 1879.0], [54.9, 1880.0], [55.0, 1884.0], [55.1, 1884.0], [55.2, 1884.0], [55.3, 1886.0], [55.4, 1887.0], [55.5, 1887.0], [55.6, 1888.0], [55.7, 1891.0], [55.8, 1891.0], [55.9, 1891.0], [56.0, 1892.0], [56.1, 1892.0], [56.2, 1893.0], [56.3, 1893.0], [56.4, 1898.0], [56.5, 1898.0], [56.6, 1899.0], [56.7, 1899.0], [56.8, 1899.0], [56.9, 1903.0], [57.0, 1903.0], [57.1, 1907.0], [57.2, 1916.0], [57.3, 1917.0], [57.4, 1917.0], [57.5, 1924.0], [57.6, 1927.0], [57.7, 1929.0], [57.8, 1929.0], [57.9, 1931.0], [58.0, 1933.0], [58.1, 1938.0], [58.2, 1938.0], [58.3, 1938.0], [58.4, 1939.0], [58.5, 1939.0], [58.6, 1939.0], [58.7, 1941.0], [58.8, 1943.0], [58.9, 1943.0], [59.0, 1944.0], [59.1, 1945.0], [59.2, 1947.0], [59.3, 1947.0], [59.4, 1947.0], [59.5, 1950.0], [59.6, 1952.0], [59.7, 1952.0], [59.8, 1953.0], [59.9, 1954.0], [60.0, 1954.0], [60.1, 1954.0], [60.2, 1954.0], [60.3, 1963.0], [60.4, 1963.0], [60.5, 1966.0], [60.6, 1966.0], [60.7, 1966.0], [60.8, 1966.0], [60.9, 1968.0], [61.0, 1971.0], [61.1, 1972.0], [61.2, 1972.0], [61.3, 1976.0], [61.4, 1976.0], [61.5, 1978.0], [61.6, 1978.0], [61.7, 1980.0], [61.8, 1981.0], [61.9, 1981.0], [62.0, 1982.0], [62.1, 1985.0], [62.2, 1985.0], [62.3, 1985.0], [62.4, 1990.0], [62.5, 1993.0], [62.6, 1998.0], [62.7, 1998.0], [62.8, 2000.0], [62.9, 2000.0], [63.0, 2001.0], [63.1, 2001.0], [63.2, 2001.0], [63.3, 2001.0], [63.4, 2001.0], [63.5, 2002.0], [63.6, 2002.0], [63.7, 2003.0], [63.8, 2003.0], [63.9, 2005.0], [64.0, 2007.0], [64.1, 2008.0], [64.2, 2008.0], [64.3, 2010.0], [64.4, 2013.0], [64.5, 2016.0], [64.6, 2016.0], [64.7, 2018.0], [64.8, 2020.0], [64.9, 2020.0], [65.0, 2020.0], [65.1, 2022.0], [65.2, 2024.0], [65.3, 2024.0], [65.4, 2026.0], [65.5, 2028.0], [65.6, 2028.0], [65.7, 2028.0], [65.8, 2028.0], [65.9, 2030.0], [66.0, 2032.0], [66.1, 2032.0], [66.2, 2033.0], [66.3, 2036.0], [66.4, 2037.0], [66.5, 2037.0], [66.6, 2040.0], [66.7, 2044.0], [66.8, 2044.0], [66.9, 2046.0], [67.0, 2048.0], [67.1, 2049.0], [67.2, 2049.0], [67.3, 2049.0], [67.4, 2050.0], [67.5, 2051.0], [67.6, 2051.0], [67.7, 2052.0], [67.8, 2052.0], [67.9, 2055.0], [68.0, 2055.0], [68.1, 2056.0], [68.2, 2057.0], [68.3, 2059.0], [68.4, 2059.0], [68.5, 2060.0], [68.6, 2063.0], [68.7, 2063.0], [68.8, 2063.0], [68.9, 2063.0], [69.0, 2064.0], [69.1, 2064.0], [69.2, 2064.0], [69.3, 2065.0], [69.4, 2065.0], [69.5, 2065.0], [69.6, 2066.0], [69.7, 2066.0], [69.8, 2066.0], [69.9, 2066.0], [70.0, 2067.0], [70.1, 2071.0], [70.2, 2071.0], [70.3, 2071.0], [70.4, 2072.0], [70.5, 2072.0], [70.6, 2072.0], [70.7, 2075.0], [70.8, 2076.0], [70.9, 2078.0], [71.0, 2078.0], [71.1, 2084.0], [71.2, 2086.0], [71.3, 2087.0], [71.4, 2087.0], [71.5, 2089.0], [71.6, 2089.0], [71.7, 2089.0], [71.8, 2093.0], [71.9, 2094.0], [72.0, 2094.0], [72.1, 2094.0], [72.2, 2096.0], [72.3, 2097.0], [72.4, 2098.0], [72.5, 2098.0], [72.6, 2099.0], [72.7, 2100.0], [72.8, 2100.0], [72.9, 2100.0], [73.0, 2100.0], [73.1, 2101.0], [73.2, 2102.0], [73.3, 2102.0], [73.4, 2102.0], [73.5, 2104.0], [73.6, 2104.0], [73.7, 2107.0], [73.8, 2107.0], [73.9, 2108.0], [74.0, 2108.0], [74.1, 2111.0], [74.2, 2111.0], [74.3, 2112.0], [74.4, 2112.0], [74.5, 2114.0], [74.6, 2115.0], [74.7, 2116.0], [74.8, 2116.0], [74.9, 2119.0], [75.0, 2120.0], [75.1, 2120.0], [75.2, 2122.0], [75.3, 2122.0], [75.4, 2123.0], [75.5, 2123.0], [75.6, 2125.0], [75.7, 2130.0], [75.8, 2131.0], [75.9, 2131.0], [76.0, 2132.0], [76.1, 2134.0], [76.2, 2136.0], [76.3, 2136.0], [76.4, 2136.0], [76.5, 2137.0], [76.6, 2139.0], [76.7, 2139.0], [76.8, 2140.0], [76.9, 2142.0], [77.0, 2142.0], [77.1, 2144.0], [77.2, 2148.0], [77.3, 2152.0], [77.4, 2152.0], [77.5, 2154.0], [77.6, 2156.0], [77.7, 2158.0], [77.8, 2158.0], [77.9, 2161.0], [78.0, 2166.0], [78.1, 2169.0], [78.2, 2169.0], [78.3, 2175.0], [78.4, 2176.0], [78.5, 2176.0], [78.6, 2176.0], [78.7, 2177.0], [78.8, 2179.0], [78.9, 2179.0], [79.0, 2187.0], [79.1, 2187.0], [79.2, 2190.0], [79.3, 2190.0], [79.4, 2195.0], [79.5, 2199.0], [79.6, 2201.0], [79.7, 2201.0], [79.8, 2204.0], [79.9, 2206.0], [80.0, 2210.0], [80.1, 2210.0], [80.2, 2213.0], [80.3, 2215.0], [80.4, 2215.0], [80.5, 2217.0], [80.6, 2221.0], [80.7, 2223.0], [80.8, 2223.0], [80.9, 2224.0], [81.0, 2225.0], [81.1, 2230.0], [81.2, 2230.0], [81.3, 2236.0], [81.4, 2237.0], [81.5, 2241.0], [81.6, 2241.0], [81.7, 2243.0], [81.8, 2247.0], [81.9, 2247.0], [82.0, 2250.0], [82.1, 2255.0], [82.2, 2259.0], [82.3, 2259.0], [82.4, 2271.0], [82.5, 2273.0], [82.6, 2278.0], [82.7, 2278.0], [82.8, 2279.0], [82.9, 2279.0], [83.0, 2279.0], [83.1, 2279.0], [83.2, 2281.0], [83.3, 2283.0], [83.4, 2283.0], [83.5, 2283.0], [83.6, 2284.0], [83.7, 2286.0], [83.8, 2286.0], [83.9, 2289.0], [84.0, 2294.0], [84.1, 2297.0], [84.2, 2297.0], [84.3, 2298.0], [84.4, 2302.0], [84.5, 2303.0], [84.6, 2303.0], [84.7, 2306.0], [84.8, 2308.0], [84.9, 2312.0], [85.0, 2312.0], [85.1, 2312.0], [85.2, 2313.0], [85.3, 2313.0], [85.4, 2315.0], [85.5, 2319.0], [85.6, 2320.0], [85.7, 2320.0], [85.8, 2321.0], [85.9, 2323.0], [86.0, 2324.0], [86.1, 2324.0], [86.2, 2325.0], [86.3, 2331.0], [86.4, 2337.0], [86.5, 2337.0], [86.6, 2348.0], [86.7, 2360.0], [86.8, 2360.0], [86.9, 2361.0], [87.0, 2369.0], [87.1, 2376.0], [87.2, 2376.0], [87.3, 2379.0], [87.4, 2383.0], [87.5, 2389.0], [87.6, 2389.0], [87.7, 2389.0], [87.8, 2390.0], [87.9, 2398.0], [88.0, 2398.0], [88.1, 2410.0], [88.2, 2422.0], [88.3, 2433.0], [88.4, 2433.0], [88.5, 2437.0], [88.6, 2447.0], [88.7, 2447.0], [88.8, 2453.0], [88.9, 2460.0], [89.0, 2463.0], [89.1, 2463.0], [89.2, 2469.0], [89.3, 2481.0], [89.4, 2502.0], [89.5, 2502.0], [89.6, 2520.0], [89.7, 2523.0], [89.8, 2528.0], [89.9, 2528.0], [90.0, 2529.0], [90.1, 2535.0], [90.2, 2535.0], [90.3, 2536.0], [90.4, 2537.0], [90.5, 2553.0], [90.6, 2553.0], [90.7, 2555.0], [90.8, 2561.0], [90.9, 2565.0], [91.0, 2565.0], [91.1, 2570.0], [91.2, 2580.0], [91.3, 2584.0], [91.4, 2584.0], [91.5, 2592.0], [91.6, 2608.0], [91.7, 2608.0], [91.8, 2621.0], [91.9, 2636.0], [92.0, 2639.0], [92.1, 2639.0], [92.2, 2659.0], [92.3, 2676.0], [92.4, 2687.0], [92.5, 2687.0], [92.6, 2688.0], [92.7, 2703.0], [92.8, 2710.0], [92.9, 2710.0], [93.0, 2711.0], [93.1, 2718.0], [93.2, 2718.0], [93.3, 2718.0], [93.4, 2756.0], [93.5, 2764.0], [93.6, 2764.0], [93.7, 2773.0], [93.8, 2773.0], [93.9, 2773.0], [94.0, 2773.0], [94.1, 2785.0], [94.2, 2793.0], [94.3, 2797.0], [94.4, 2797.0], [94.5, 2800.0], [94.6, 2801.0], [94.7, 2823.0], [94.8, 2823.0], [94.9, 2832.0], [95.0, 2843.0], [95.1, 2843.0], [95.2, 2868.0], [95.3, 2892.0], [95.4, 2922.0], [95.5, 2922.0], [95.6, 2923.0], [95.7, 2964.0], [95.8, 2987.0], [95.9, 2987.0], [96.0, 3004.0], [96.1, 3025.0], [96.2, 3041.0], [96.3, 3041.0], [96.4, 3046.0], [96.5, 3052.0], [96.6, 3061.0], [96.7, 3061.0], [96.8, 3065.0], [96.9, 3085.0], [97.0, 3085.0], [97.1, 3186.0], [97.2, 3193.0], [97.3, 3197.0], [97.4, 3197.0], [97.5, 3278.0], [97.6, 3339.0], [97.7, 3344.0], [97.8, 3344.0], [97.9, 3347.0], [98.0, 3367.0], [98.1, 3374.0], [98.2, 3374.0], [98.3, 3389.0], [98.4, 3596.0], [98.5, 3596.0], [98.6, 3598.0], [98.7, 3733.0], [98.8, 3767.0], [98.9, 3767.0], [99.0, 3773.0], [99.1, 3800.0], [99.2, 3821.0], [99.3, 3821.0], [99.4, 3935.0], [99.5, 4098.0], [99.6, 4304.0], [99.7, 4304.0], [99.8, 4878.0], [99.9, 4928.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 500.0, "maxY": 73.0, "series": [{"data": [[700.0, 7.0], [800.0, 4.0], [900.0, 13.0], [1000.0, 19.0], [1100.0, 42.0], [1200.0, 40.0], [1300.0, 45.0], [1400.0, 40.0], [1500.0, 49.0], [1600.0, 35.0], [1700.0, 59.0], [1800.0, 63.0], [1900.0, 43.0], [2000.0, 73.0], [2100.0, 51.0], [2300.0, 27.0], [2200.0, 35.0], [2400.0, 10.0], [2500.0, 16.0], [2600.0, 8.0], [2800.0, 7.0], [2700.0, 13.0], [2900.0, 4.0], [3000.0, 8.0], [3100.0, 3.0], [3300.0, 6.0], [3200.0, 1.0], [3500.0, 2.0], [3700.0, 3.0], [3800.0, 2.0], [3900.0, 1.0], [4000.0, 1.0], [4300.0, 1.0], [4800.0, 1.0], [4900.0, 1.0], [500.0, 2.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 4900.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 213.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 522.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 213.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 522.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 11.815642458100559, "minX": 1.60232112E12, "maxY": 12.0, "series": [{"data": [[1.60232112E12, 12.0], [1.60232118E12, 11.815642458100559]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60232118E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 1130.0, "minX": 1.0, "maxY": 2086.0, "series": [{"data": [[8.0, 1613.0], [4.0, 1541.0], [2.0, 1509.0], [1.0, 1899.0], [9.0, 1146.0], [10.0, 2086.0], [5.0, 1130.0], [11.0, 1154.0], [12.0, 1849.5511049723748], [6.0, 1215.0], [3.0, 1242.0], [7.0, 1560.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[11.910204081632651, 1843.7687074829926]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 12.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 2685.7833333333333, "minX": 1.60232112E12, "maxY": 1005729.4833333333, "series": [{"data": [[1.60232112E12, 1005729.4833333333], [1.60232118E12, 830049.0166666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60232112E12, 2837.25], [1.60232118E12, 2685.7833333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60232118E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 1833.583798882682, "minX": 1.60232112E12, "maxY": 1853.4403183023862, "series": [{"data": [[1.60232112E12, 1853.4403183023862], [1.60232118E12, 1833.583798882682]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60232118E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 1832.5446927374294, "minX": 1.60232112E12, "maxY": 1852.3023872679046, "series": [{"data": [[1.60232112E12, 1852.3023872679046], [1.60232118E12, 1832.5446927374294]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60232118E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.03910614525139668, "minX": 1.60232112E12, "maxY": 0.3129973474801062, "series": [{"data": [[1.60232112E12, 0.3129973474801062], [1.60232118E12, 0.03910614525139668]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60232118E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 580.0, "minX": 1.60232112E12, "maxY": 4928.0, "series": [{"data": [[1.60232112E12, 4098.0], [1.60232118E12, 4928.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60232112E12, 802.3459934210778], [1.60232118E12, 735.7719989728928]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60232112E12, 827.180602631569], [1.60232118E12, 739.6492004108429]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60232112E12, 816.1429967105389], [1.60232118E12, 737.9259994864464]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60232112E12, 760.0], [1.60232118E12, 580.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60232112E12, 1811.0], [1.60232118E12, 1832.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60232118E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 907.0, "minX": 1.0, "maxY": 2330.5, "series": [{"data": [[4.0, 2330.5], [8.0, 1454.5], [1.0, 1899.0], [9.0, 1527.0], [5.0, 2065.0], [10.0, 1261.0], [11.0, 1307.0], [3.0, 1962.0], [6.0, 1951.0], [12.0, 907.0], [7.0, 1815.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 12.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 906.0, "minX": 1.0, "maxY": 2329.5, "series": [{"data": [[4.0, 2329.5], [8.0, 1453.5], [1.0, 1899.0], [9.0, 1526.5], [5.0, 2064.0], [10.0, 1260.5], [11.0, 1306.5], [3.0, 1958.0], [6.0, 1950.0], [12.0, 906.0], [7.0, 1814.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 12.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 5.766666666666667, "minX": 1.60232112E12, "maxY": 6.483333333333333, "series": [{"data": [[1.60232112E12, 6.483333333333333], [1.60232118E12, 5.766666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60232118E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 5.966666666666667, "minX": 1.60232112E12, "maxY": 6.283333333333333, "series": [{"data": [[1.60232112E12, 6.283333333333333], [1.60232118E12, 5.966666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60232118E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 5.966666666666667, "minX": 1.60232112E12, "maxY": 6.283333333333333, "series": [{"data": [[1.60232112E12, 6.283333333333333], [1.60232118E12, 5.966666666666667]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60232118E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 5.966666666666667, "minX": 1.60232112E12, "maxY": 6.283333333333333, "series": [{"data": [[1.60232112E12, 6.283333333333333], [1.60232118E12, 5.966666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60232118E12, "title": "Total Transactions Per Second"}},
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

