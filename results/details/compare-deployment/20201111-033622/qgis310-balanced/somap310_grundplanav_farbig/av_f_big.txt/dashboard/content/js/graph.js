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
        data: {"result": {"minY": 615.0, "minX": 0.0, "maxY": 5643.0, "series": [{"data": [[0.0, 615.0], [0.1, 615.0], [0.2, 753.0], [0.3, 766.0], [0.4, 766.0], [0.5, 767.0], [0.6, 846.0], [0.7, 850.0], [0.8, 850.0], [0.9, 872.0], [1.0, 888.0], [1.1, 890.0], [1.2, 890.0], [1.3, 898.0], [1.4, 910.0], [1.5, 912.0], [1.6, 912.0], [1.7, 918.0], [1.8, 920.0], [1.9, 920.0], [2.0, 929.0], [2.1, 932.0], [2.2, 933.0], [2.3, 933.0], [2.4, 938.0], [2.5, 938.0], [2.6, 948.0], [2.7, 948.0], [2.8, 953.0], [2.9, 967.0], [3.0, 971.0], [3.1, 971.0], [3.2, 973.0], [3.3, 977.0], [3.4, 977.0], [3.5, 978.0], [3.6, 989.0], [3.7, 999.0], [3.8, 999.0], [3.9, 1011.0], [4.0, 1014.0], [4.1, 1035.0], [4.2, 1035.0], [4.3, 1040.0], [4.4, 1051.0], [4.5, 1055.0], [4.6, 1055.0], [4.7, 1058.0], [4.8, 1061.0], [4.9, 1077.0], [5.0, 1077.0], [5.1, 1079.0], [5.2, 1086.0], [5.3, 1086.0], [5.4, 1089.0], [5.5, 1090.0], [5.6, 1094.0], [5.7, 1094.0], [5.8, 1095.0], [5.9, 1100.0], [6.0, 1103.0], [6.1, 1103.0], [6.2, 1124.0], [6.3, 1131.0], [6.4, 1135.0], [6.5, 1135.0], [6.6, 1136.0], [6.7, 1139.0], [6.8, 1139.0], [6.9, 1140.0], [7.0, 1145.0], [7.1, 1147.0], [7.2, 1147.0], [7.3, 1148.0], [7.4, 1153.0], [7.5, 1156.0], [7.6, 1156.0], [7.7, 1162.0], [7.8, 1163.0], [7.9, 1164.0], [8.0, 1164.0], [8.1, 1164.0], [8.2, 1164.0], [8.3, 1166.0], [8.4, 1166.0], [8.5, 1169.0], [8.6, 1169.0], [8.7, 1169.0], [8.8, 1171.0], [8.9, 1178.0], [9.0, 1179.0], [9.1, 1179.0], [9.2, 1191.0], [9.3, 1191.0], [9.4, 1192.0], [9.5, 1192.0], [9.6, 1193.0], [9.7, 1194.0], [9.8, 1194.0], [9.9, 1194.0], [10.0, 1194.0], [10.1, 1199.0], [10.2, 1199.0], [10.3, 1202.0], [10.4, 1203.0], [10.5, 1208.0], [10.6, 1208.0], [10.7, 1210.0], [10.8, 1213.0], [10.9, 1213.0], [11.0, 1213.0], [11.1, 1214.0], [11.2, 1219.0], [11.3, 1219.0], [11.4, 1219.0], [11.5, 1222.0], [11.6, 1222.0], [11.7, 1222.0], [11.8, 1227.0], [11.9, 1228.0], [12.0, 1228.0], [12.1, 1228.0], [12.2, 1234.0], [12.3, 1242.0], [12.4, 1243.0], [12.5, 1243.0], [12.6, 1247.0], [12.7, 1251.0], [12.8, 1264.0], [12.9, 1264.0], [13.0, 1267.0], [13.1, 1273.0], [13.2, 1274.0], [13.3, 1274.0], [13.4, 1275.0], [13.5, 1277.0], [13.6, 1277.0], [13.7, 1291.0], [13.8, 1294.0], [13.9, 1298.0], [14.0, 1298.0], [14.1, 1302.0], [14.2, 1302.0], [14.3, 1308.0], [14.4, 1308.0], [14.5, 1310.0], [14.6, 1314.0], [14.7, 1318.0], [14.8, 1318.0], [14.9, 1328.0], [15.0, 1330.0], [15.1, 1330.0], [15.2, 1332.0], [15.3, 1334.0], [15.4, 1335.0], [15.5, 1335.0], [15.6, 1336.0], [15.7, 1336.0], [15.8, 1337.0], [15.9, 1337.0], [16.0, 1340.0], [16.1, 1341.0], [16.2, 1342.0], [16.3, 1342.0], [16.4, 1342.0], [16.5, 1342.0], [16.6, 1345.0], [16.7, 1345.0], [16.8, 1346.0], [16.9, 1355.0], [17.0, 1355.0], [17.1, 1362.0], [17.2, 1367.0], [17.3, 1368.0], [17.4, 1368.0], [17.5, 1369.0], [17.6, 1375.0], [17.7, 1376.0], [17.8, 1376.0], [17.9, 1381.0], [18.0, 1384.0], [18.1, 1385.0], [18.2, 1385.0], [18.3, 1385.0], [18.4, 1387.0], [18.5, 1387.0], [18.6, 1395.0], [18.7, 1399.0], [18.8, 1399.0], [18.9, 1399.0], [19.0, 1399.0], [19.1, 1403.0], [19.2, 1405.0], [19.3, 1405.0], [19.4, 1406.0], [19.5, 1409.0], [19.6, 1411.0], [19.7, 1411.0], [19.8, 1414.0], [19.9, 1414.0], [20.0, 1416.0], [20.1, 1416.0], [20.2, 1417.0], [20.3, 1417.0], [20.4, 1417.0], [20.5, 1417.0], [20.6, 1418.0], [20.7, 1426.0], [20.8, 1426.0], [20.9, 1435.0], [21.0, 1436.0], [21.1, 1439.0], [21.2, 1439.0], [21.3, 1456.0], [21.4, 1456.0], [21.5, 1457.0], [21.6, 1457.0], [21.7, 1458.0], [21.8, 1460.0], [21.9, 1460.0], [22.0, 1463.0], [22.1, 1467.0], [22.2, 1467.0], [22.3, 1467.0], [22.4, 1470.0], [22.5, 1475.0], [22.6, 1478.0], [22.7, 1478.0], [22.8, 1480.0], [22.9, 1482.0], [23.0, 1483.0], [23.1, 1483.0], [23.2, 1484.0], [23.3, 1484.0], [23.4, 1484.0], [23.5, 1486.0], [23.6, 1491.0], [23.7, 1491.0], [23.8, 1491.0], [23.9, 1491.0], [24.0, 1495.0], [24.1, 1495.0], [24.2, 1495.0], [24.3, 1496.0], [24.4, 1497.0], [24.5, 1499.0], [24.6, 1499.0], [24.7, 1505.0], [24.8, 1506.0], [24.9, 1507.0], [25.0, 1507.0], [25.1, 1509.0], [25.2, 1512.0], [25.3, 1512.0], [25.4, 1512.0], [25.5, 1517.0], [25.6, 1520.0], [25.7, 1520.0], [25.8, 1522.0], [25.9, 1528.0], [26.0, 1533.0], [26.1, 1533.0], [26.2, 1540.0], [26.3, 1542.0], [26.4, 1547.0], [26.5, 1547.0], [26.6, 1550.0], [26.7, 1552.0], [26.8, 1552.0], [26.9, 1557.0], [27.0, 1562.0], [27.1, 1564.0], [27.2, 1564.0], [27.3, 1567.0], [27.4, 1567.0], [27.5, 1571.0], [27.6, 1571.0], [27.7, 1571.0], [27.8, 1576.0], [27.9, 1578.0], [28.0, 1578.0], [28.1, 1578.0], [28.2, 1578.0], [28.3, 1579.0], [28.4, 1579.0], [28.5, 1583.0], [28.6, 1583.0], [28.7, 1583.0], [28.8, 1585.0], [28.9, 1595.0], [29.0, 1597.0], [29.1, 1597.0], [29.2, 1599.0], [29.3, 1601.0], [29.4, 1601.0], [29.5, 1601.0], [29.6, 1607.0], [29.7, 1611.0], [29.8, 1612.0], [29.9, 1612.0], [30.0, 1615.0], [30.1, 1616.0], [30.2, 1616.0], [30.3, 1618.0], [30.4, 1619.0], [30.5, 1623.0], [30.6, 1623.0], [30.7, 1628.0], [30.8, 1629.0], [30.9, 1630.0], [31.0, 1630.0], [31.1, 1630.0], [31.2, 1632.0], [31.3, 1634.0], [31.4, 1634.0], [31.5, 1635.0], [31.6, 1636.0], [31.7, 1636.0], [31.8, 1645.0], [31.9, 1645.0], [32.0, 1649.0], [32.1, 1649.0], [32.2, 1651.0], [32.3, 1651.0], [32.4, 1654.0], [32.5, 1654.0], [32.6, 1655.0], [32.7, 1657.0], [32.8, 1657.0], [32.9, 1657.0], [33.0, 1659.0], [33.1, 1660.0], [33.2, 1662.0], [33.3, 1662.0], [33.4, 1666.0], [33.5, 1670.0], [33.6, 1670.0], [33.7, 1671.0], [33.8, 1672.0], [33.9, 1675.0], [34.0, 1675.0], [34.1, 1678.0], [34.2, 1679.0], [34.3, 1679.0], [34.4, 1679.0], [34.5, 1680.0], [34.6, 1683.0], [34.7, 1683.0], [34.8, 1683.0], [34.9, 1684.0], [35.0, 1689.0], [35.1, 1689.0], [35.2, 1692.0], [35.3, 1699.0], [35.4, 1701.0], [35.5, 1701.0], [35.6, 1707.0], [35.7, 1708.0], [35.8, 1711.0], [35.9, 1711.0], [36.0, 1714.0], [36.1, 1714.0], [36.2, 1714.0], [36.3, 1714.0], [36.4, 1715.0], [36.5, 1716.0], [36.6, 1716.0], [36.7, 1716.0], [36.8, 1716.0], [36.9, 1717.0], [37.0, 1717.0], [37.1, 1720.0], [37.2, 1720.0], [37.3, 1722.0], [37.4, 1722.0], [37.5, 1727.0], [37.6, 1727.0], [37.7, 1727.0], [37.8, 1727.0], [37.9, 1728.0], [38.0, 1729.0], [38.1, 1729.0], [38.2, 1729.0], [38.3, 1731.0], [38.4, 1731.0], [38.5, 1731.0], [38.6, 1733.0], [38.7, 1733.0], [38.8, 1734.0], [38.9, 1734.0], [39.0, 1735.0], [39.1, 1737.0], [39.2, 1738.0], [39.3, 1738.0], [39.4, 1740.0], [39.5, 1748.0], [39.6, 1748.0], [39.7, 1748.0], [39.8, 1749.0], [39.9, 1751.0], [40.0, 1751.0], [40.1, 1751.0], [40.2, 1753.0], [40.3, 1755.0], [40.4, 1755.0], [40.5, 1755.0], [40.6, 1755.0], [40.7, 1755.0], [40.8, 1755.0], [40.9, 1756.0], [41.0, 1759.0], [41.1, 1759.0], [41.2, 1759.0], [41.3, 1764.0], [41.4, 1765.0], [41.5, 1766.0], [41.6, 1766.0], [41.7, 1768.0], [41.8, 1770.0], [41.9, 1770.0], [42.0, 1771.0], [42.1, 1771.0], [42.2, 1772.0], [42.3, 1772.0], [42.4, 1773.0], [42.5, 1773.0], [42.6, 1773.0], [42.7, 1773.0], [42.8, 1774.0], [42.9, 1777.0], [43.0, 1778.0], [43.1, 1778.0], [43.2, 1780.0], [43.3, 1787.0], [43.4, 1787.0], [43.5, 1789.0], [43.6, 1794.0], [43.7, 1797.0], [43.8, 1797.0], [43.9, 1797.0], [44.0, 1799.0], [44.1, 1800.0], [44.2, 1800.0], [44.3, 1801.0], [44.4, 1801.0], [44.5, 1806.0], [44.6, 1806.0], [44.7, 1808.0], [44.8, 1808.0], [44.9, 1809.0], [45.0, 1809.0], [45.1, 1809.0], [45.2, 1810.0], [45.3, 1810.0], [45.4, 1811.0], [45.5, 1816.0], [45.6, 1816.0], [45.7, 1816.0], [45.8, 1817.0], [45.9, 1822.0], [46.0, 1823.0], [46.1, 1823.0], [46.2, 1832.0], [46.3, 1832.0], [46.4, 1835.0], [46.5, 1835.0], [46.6, 1841.0], [46.7, 1848.0], [46.8, 1848.0], [46.9, 1851.0], [47.0, 1852.0], [47.1, 1858.0], [47.2, 1858.0], [47.3, 1859.0], [47.4, 1859.0], [47.5, 1861.0], [47.6, 1861.0], [47.7, 1863.0], [47.8, 1865.0], [47.9, 1867.0], [48.0, 1867.0], [48.1, 1867.0], [48.2, 1868.0], [48.3, 1876.0], [48.4, 1876.0], [48.5, 1877.0], [48.6, 1879.0], [48.7, 1879.0], [48.8, 1880.0], [48.9, 1882.0], [49.0, 1883.0], [49.1, 1883.0], [49.2, 1886.0], [49.3, 1887.0], [49.4, 1887.0], [49.5, 1887.0], [49.6, 1888.0], [49.7, 1888.0], [49.8, 1889.0], [49.9, 1889.0], [50.0, 1889.0], [50.1, 1889.0], [50.2, 1889.0], [50.3, 1890.0], [50.4, 1894.0], [50.5, 1894.0], [50.6, 1894.0], [50.7, 1894.0], [50.8, 1898.0], [50.9, 1901.0], [51.0, 1901.0], [51.1, 1902.0], [51.2, 1906.0], [51.3, 1910.0], [51.4, 1910.0], [51.5, 1913.0], [51.6, 1914.0], [51.7, 1914.0], [51.8, 1919.0], [51.9, 1919.0], [52.0, 1920.0], [52.1, 1920.0], [52.2, 1922.0], [52.3, 1923.0], [52.4, 1923.0], [52.5, 1923.0], [52.6, 1925.0], [52.7, 1930.0], [52.8, 1930.0], [52.9, 1930.0], [53.0, 1933.0], [53.1, 1934.0], [53.2, 1934.0], [53.3, 1934.0], [53.4, 1935.0], [53.5, 1937.0], [53.6, 1937.0], [53.7, 1944.0], [53.8, 1947.0], [53.9, 1952.0], [54.0, 1952.0], [54.1, 1955.0], [54.2, 1955.0], [54.3, 1958.0], [54.4, 1958.0], [54.5, 1959.0], [54.6, 1960.0], [54.7, 1961.0], [54.8, 1961.0], [54.9, 1962.0], [55.0, 1962.0], [55.1, 1962.0], [55.2, 1964.0], [55.3, 1965.0], [55.4, 1967.0], [55.5, 1967.0], [55.6, 1969.0], [55.7, 1969.0], [55.8, 1971.0], [55.9, 1971.0], [56.0, 1972.0], [56.1, 1972.0], [56.2, 1972.0], [56.3, 1972.0], [56.4, 1976.0], [56.5, 1980.0], [56.6, 1986.0], [56.7, 1986.0], [56.8, 1988.0], [56.9, 1989.0], [57.0, 1989.0], [57.1, 1990.0], [57.2, 1991.0], [57.3, 1991.0], [57.4, 1991.0], [57.5, 1991.0], [57.6, 1992.0], [57.7, 1995.0], [57.8, 1995.0], [57.9, 1996.0], [58.0, 1996.0], [58.1, 1998.0], [58.2, 1998.0], [58.3, 2001.0], [58.4, 2002.0], [58.5, 2002.0], [58.6, 2002.0], [58.7, 2002.0], [58.8, 2003.0], [58.9, 2003.0], [59.0, 2006.0], [59.1, 2006.0], [59.2, 2007.0], [59.3, 2007.0], [59.4, 2007.0], [59.5, 2012.0], [59.6, 2012.0], [59.7, 2012.0], [59.8, 2015.0], [59.9, 2016.0], [60.0, 2016.0], [60.1, 2016.0], [60.2, 2016.0], [60.3, 2016.0], [60.4, 2016.0], [60.5, 2017.0], [60.6, 2020.0], [60.7, 2022.0], [60.8, 2022.0], [60.9, 2024.0], [61.0, 2024.0], [61.1, 2025.0], [61.2, 2025.0], [61.3, 2028.0], [61.4, 2029.0], [61.5, 2030.0], [61.6, 2030.0], [61.7, 2032.0], [61.8, 2034.0], [61.9, 2034.0], [62.0, 2034.0], [62.1, 2035.0], [62.2, 2038.0], [62.3, 2038.0], [62.4, 2038.0], [62.5, 2039.0], [62.6, 2040.0], [62.7, 2040.0], [62.8, 2041.0], [62.9, 2046.0], [63.0, 2050.0], [63.1, 2050.0], [63.2, 2051.0], [63.3, 2052.0], [63.4, 2052.0], [63.5, 2052.0], [63.6, 2054.0], [63.7, 2054.0], [63.8, 2054.0], [63.9, 2055.0], [64.0, 2055.0], [64.1, 2057.0], [64.2, 2057.0], [64.3, 2060.0], [64.4, 2060.0], [64.5, 2061.0], [64.6, 2061.0], [64.7, 2061.0], [64.8, 2062.0], [64.9, 2066.0], [65.0, 2066.0], [65.1, 2069.0], [65.2, 2071.0], [65.3, 2071.0], [65.4, 2072.0], [65.5, 2072.0], [65.6, 2078.0], [65.7, 2078.0], [65.8, 2083.0], [65.9, 2087.0], [66.0, 2090.0], [66.1, 2090.0], [66.2, 2092.0], [66.3, 2092.0], [66.4, 2093.0], [66.5, 2093.0], [66.6, 2096.0], [66.7, 2101.0], [66.8, 2101.0], [66.9, 2102.0], [67.0, 2102.0], [67.1, 2103.0], [67.2, 2103.0], [67.3, 2107.0], [67.4, 2107.0], [67.5, 2109.0], [67.6, 2109.0], [67.7, 2110.0], [67.8, 2110.0], [67.9, 2112.0], [68.0, 2112.0], [68.1, 2113.0], [68.2, 2113.0], [68.3, 2114.0], [68.4, 2114.0], [68.5, 2117.0], [68.6, 2117.0], [68.7, 2117.0], [68.8, 2117.0], [68.9, 2118.0], [69.0, 2120.0], [69.1, 2120.0], [69.2, 2121.0], [69.3, 2121.0], [69.4, 2123.0], [69.5, 2123.0], [69.6, 2123.0], [69.7, 2124.0], [69.8, 2126.0], [69.9, 2126.0], [70.0, 2127.0], [70.1, 2128.0], [70.2, 2128.0], [70.3, 2129.0], [70.4, 2129.0], [70.5, 2129.0], [70.6, 2129.0], [70.7, 2131.0], [70.8, 2132.0], [70.9, 2133.0], [71.0, 2133.0], [71.1, 2136.0], [71.2, 2138.0], [71.3, 2138.0], [71.4, 2138.0], [71.5, 2139.0], [71.6, 2143.0], [71.7, 2143.0], [71.8, 2148.0], [71.9, 2150.0], [72.0, 2150.0], [72.1, 2150.0], [72.2, 2151.0], [72.3, 2153.0], [72.4, 2156.0], [72.5, 2156.0], [72.6, 2163.0], [72.7, 2164.0], [72.8, 2166.0], [72.9, 2166.0], [73.0, 2167.0], [73.1, 2169.0], [73.2, 2172.0], [73.3, 2172.0], [73.4, 2173.0], [73.5, 2178.0], [73.6, 2178.0], [73.7, 2179.0], [73.8, 2180.0], [73.9, 2181.0], [74.0, 2181.0], [74.1, 2183.0], [74.2, 2188.0], [74.3, 2189.0], [74.4, 2189.0], [74.5, 2189.0], [74.6, 2190.0], [74.7, 2192.0], [74.8, 2192.0], [74.9, 2192.0], [75.0, 2192.0], [75.1, 2192.0], [75.2, 2195.0], [75.3, 2195.0], [75.4, 2195.0], [75.5, 2195.0], [75.6, 2199.0], [75.7, 2200.0], [75.8, 2201.0], [75.9, 2201.0], [76.0, 2203.0], [76.1, 2206.0], [76.2, 2206.0], [76.3, 2206.0], [76.4, 2221.0], [76.5, 2222.0], [76.6, 2225.0], [76.7, 2225.0], [76.8, 2228.0], [76.9, 2229.0], [77.0, 2229.0], [77.1, 2230.0], [77.2, 2235.0], [77.3, 2236.0], [77.4, 2236.0], [77.5, 2238.0], [77.6, 2239.0], [77.7, 2241.0], [77.8, 2241.0], [77.9, 2242.0], [78.0, 2245.0], [78.1, 2250.0], [78.2, 2250.0], [78.3, 2254.0], [78.4, 2256.0], [78.5, 2256.0], [78.6, 2260.0], [78.7, 2269.0], [78.8, 2272.0], [78.9, 2272.0], [79.0, 2275.0], [79.1, 2276.0], [79.2, 2276.0], [79.3, 2276.0], [79.4, 2281.0], [79.5, 2285.0], [79.6, 2288.0], [79.7, 2288.0], [79.8, 2290.0], [79.9, 2290.0], [80.0, 2293.0], [80.1, 2293.0], [80.2, 2294.0], [80.3, 2296.0], [80.4, 2296.0], [80.5, 2298.0], [80.6, 2301.0], [80.7, 2305.0], [80.8, 2305.0], [80.9, 2309.0], [81.0, 2310.0], [81.1, 2310.0], [81.2, 2310.0], [81.3, 2310.0], [81.4, 2311.0], [81.5, 2315.0], [81.6, 2315.0], [81.7, 2317.0], [81.8, 2324.0], [81.9, 2324.0], [82.0, 2329.0], [82.1, 2334.0], [82.2, 2341.0], [82.3, 2341.0], [82.4, 2343.0], [82.5, 2343.0], [82.6, 2349.0], [82.7, 2349.0], [82.8, 2350.0], [82.9, 2364.0], [83.0, 2365.0], [83.1, 2365.0], [83.2, 2366.0], [83.3, 2366.0], [83.4, 2366.0], [83.5, 2369.0], [83.6, 2370.0], [83.7, 2372.0], [83.8, 2372.0], [83.9, 2373.0], [84.0, 2375.0], [84.1, 2376.0], [84.2, 2376.0], [84.3, 2381.0], [84.4, 2384.0], [84.5, 2386.0], [84.6, 2386.0], [84.7, 2387.0], [84.8, 2388.0], [84.9, 2391.0], [85.0, 2391.0], [85.1, 2393.0], [85.2, 2397.0], [85.3, 2397.0], [85.4, 2398.0], [85.5, 2401.0], [85.6, 2404.0], [85.7, 2404.0], [85.8, 2408.0], [85.9, 2411.0], [86.0, 2411.0], [86.1, 2411.0], [86.2, 2413.0], [86.3, 2416.0], [86.4, 2417.0], [86.5, 2417.0], [86.6, 2418.0], [86.7, 2421.0], [86.8, 2421.0], [86.9, 2426.0], [87.0, 2427.0], [87.1, 2429.0], [87.2, 2429.0], [87.3, 2443.0], [87.4, 2444.0], [87.5, 2444.0], [87.6, 2444.0], [87.7, 2445.0], [87.8, 2446.0], [87.9, 2449.0], [88.0, 2449.0], [88.1, 2457.0], [88.2, 2457.0], [88.3, 2469.0], [88.4, 2469.0], [88.5, 2478.0], [88.6, 2485.0], [88.7, 2485.0], [88.8, 2489.0], [88.9, 2511.0], [89.0, 2513.0], [89.1, 2513.0], [89.2, 2517.0], [89.3, 2518.0], [89.4, 2521.0], [89.5, 2521.0], [89.6, 2534.0], [89.7, 2544.0], [89.8, 2548.0], [89.9, 2548.0], [90.0, 2552.0], [90.1, 2556.0], [90.2, 2556.0], [90.3, 2563.0], [90.4, 2574.0], [90.5, 2575.0], [90.6, 2575.0], [90.7, 2579.0], [90.8, 2584.0], [90.9, 2586.0], [91.0, 2586.0], [91.1, 2588.0], [91.2, 2591.0], [91.3, 2591.0], [91.4, 2591.0], [91.5, 2593.0], [91.6, 2593.0], [91.7, 2593.0], [91.8, 2604.0], [91.9, 2619.0], [92.0, 2625.0], [92.1, 2625.0], [92.2, 2637.0], [92.3, 2641.0], [92.4, 2662.0], [92.5, 2662.0], [92.6, 2663.0], [92.7, 2665.0], [92.8, 2673.0], [92.9, 2673.0], [93.0, 2674.0], [93.1, 2679.0], [93.2, 2690.0], [93.3, 2690.0], [93.4, 2696.0], [93.5, 2698.0], [93.6, 2698.0], [93.7, 2707.0], [93.8, 2709.0], [93.9, 2712.0], [94.0, 2712.0], [94.1, 2716.0], [94.2, 2725.0], [94.3, 2725.0], [94.4, 2725.0], [94.5, 2725.0], [94.6, 2740.0], [94.7, 2747.0], [94.8, 2747.0], [94.9, 2771.0], [95.0, 2830.0], [95.1, 2830.0], [95.2, 2840.0], [95.3, 2862.0], [95.4, 2873.0], [95.5, 2873.0], [95.6, 2874.0], [95.7, 2882.0], [95.8, 2919.0], [95.9, 2919.0], [96.0, 2921.0], [96.1, 2931.0], [96.2, 2972.0], [96.3, 2972.0], [96.4, 3007.0], [96.5, 3029.0], [96.6, 3044.0], [96.7, 3044.0], [96.8, 3080.0], [96.9, 3084.0], [97.0, 3084.0], [97.1, 3096.0], [97.2, 3113.0], [97.3, 3115.0], [97.4, 3115.0], [97.5, 3123.0], [97.6, 3146.0], [97.7, 3178.0], [97.8, 3178.0], [97.9, 3192.0], [98.0, 3200.0], [98.1, 3352.0], [98.2, 3352.0], [98.3, 3525.0], [98.4, 3663.0], [98.5, 3663.0], [98.6, 3840.0], [98.7, 3851.0], [98.8, 3946.0], [98.9, 3946.0], [99.0, 4022.0], [99.1, 4026.0], [99.2, 4117.0], [99.3, 4117.0], [99.4, 4204.0], [99.5, 4251.0], [99.6, 4993.0], [99.7, 4993.0], [99.8, 5533.0], [99.9, 5643.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 600.0, "maxY": 66.0, "series": [{"data": [[600.0, 1.0], [700.0, 3.0], [800.0, 6.0], [900.0, 18.0], [1000.0, 15.0], [1100.0, 32.0], [1200.0, 28.0], [1300.0, 37.0], [1400.0, 41.0], [1500.0, 34.0], [1600.0, 45.0], [1700.0, 64.0], [1800.0, 50.0], [1900.0, 54.0], [2000.0, 62.0], [2100.0, 66.0], [2200.0, 36.0], [2300.0, 36.0], [2400.0, 25.0], [2500.0, 21.0], [2600.0, 14.0], [2800.0, 6.0], [2700.0, 10.0], [2900.0, 4.0], [3000.0, 6.0], [3100.0, 6.0], [3200.0, 1.0], [3300.0, 1.0], [3500.0, 1.0], [3600.0, 1.0], [3800.0, 2.0], [3900.0, 1.0], [4000.0, 2.0], [4200.0, 2.0], [4100.0, 1.0], [4900.0, 1.0], [5600.0, 1.0], [5500.0, 1.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 5600.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 181.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 554.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 181.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 554.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 11.69158878504673, "minX": 1.6050708E12, "maxY": 12.0, "series": [{"data": [[1.60507086E12, 12.0], [1.6050708E12, 11.985611510791369], [1.60507092E12, 11.69158878504673]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60507092E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 889.5, "minX": 1.0, "maxY": 1916.09266943292, "series": [{"data": [[8.0, 1222.0], [4.0, 1234.0], [2.0, 1722.0], [1.0, 1632.0], [9.0, 1147.0], [10.0, 889.5], [5.0, 1227.0], [11.0, 1135.0], [12.0, 1916.09266943292], [6.0, 1214.0], [3.0, 1735.0], [7.0, 1683.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[11.907482993197277, 1906.2108843537417]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 12.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 1052.6, "minX": 1.6050708E12, "maxY": 894812.2166666667, "series": [{"data": [[1.60507086E12, 894812.2166666667], [1.6050708E12, 473561.63333333336], [1.60507092E12, 467912.85]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60507086E12, 2867.2833333333333], [1.6050708E12, 1052.6], [1.60507092E12, 1603.15]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60507092E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 1844.0887850467304, "minX": 1.6050708E12, "maxY": 2052.690647482014, "series": [{"data": [[1.60507086E12, 1887.7120418848167], [1.6050708E12, 2052.690647482014], [1.60507092E12, 1844.0887850467304]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60507092E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 1842.9859813084113, "minX": 1.6050708E12, "maxY": 2051.2014388489206, "series": [{"data": [[1.60507086E12, 1886.5680628272248], [1.6050708E12, 2051.2014388489206], [1.60507092E12, 1842.9859813084113]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60507092E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.6050708E12, "maxY": 0.9784172661870496, "series": [{"data": [[1.60507086E12, 0.034031413612565425], [1.6050708E12, 0.9784172661870496], [1.60507092E12, 0.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60507092E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 615.0, "minX": 1.6050708E12, "maxY": 5643.0, "series": [{"data": [[1.60507086E12, 4251.0], [1.6050708E12, 5643.0], [1.60507092E12, 4026.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60507086E12, 847.7879996347427], [1.6050708E12, 654.2599949598313], [1.60507092E12, 1054.0249992311]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60507086E12, 849.1668001461029], [1.6050708E12, 673.2860020160675], [1.60507092E12, 1063.866501414776]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60507086E12, 848.5539998173714], [1.6050708E12, 664.8299974799156], [1.60507092E12, 1057.9324982315302]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60507086E12, 753.0], [1.6050708E12, 615.0], [1.60507092E12, 1040.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60507086E12, 1898.0], [1.6050708E12, 1991.0], [1.60507092E12, 1808.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60507092E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 1171.0, "minX": 3.0, "maxY": 2205.5, "series": [{"data": [[4.0, 2205.5], [8.0, 1589.0], [9.0, 1417.0], [5.0, 2016.0], [10.0, 1411.0], [11.0, 1171.0], [3.0, 1318.0], [6.0, 2038.0], [7.0, 1893.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 11.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 1171.0, "minX": 3.0, "maxY": 2203.0, "series": [{"data": [[4.0, 2203.0], [8.0, 1589.0], [9.0, 1417.0], [5.0, 2015.5], [10.0, 1410.5], [11.0, 1171.0], [3.0, 1317.0], [6.0, 2037.0], [7.0, 1893.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 11.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 2.5166666666666666, "minX": 1.6050708E12, "maxY": 6.366666666666666, "series": [{"data": [[1.60507086E12, 6.366666666666666], [1.6050708E12, 2.5166666666666666], [1.60507092E12, 3.3666666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60507092E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 2.316666666666667, "minX": 1.6050708E12, "maxY": 6.366666666666666, "series": [{"data": [[1.60507086E12, 6.366666666666666], [1.6050708E12, 2.316666666666667], [1.60507092E12, 3.566666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60507092E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 2.316666666666667, "minX": 1.6050708E12, "maxY": 6.366666666666666, "series": [{"data": [[1.60507086E12, 6.366666666666666], [1.6050708E12, 2.316666666666667], [1.60507092E12, 3.566666666666667]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60507092E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 2.316666666666667, "minX": 1.6050708E12, "maxY": 6.366666666666666, "series": [{"data": [[1.60507086E12, 6.366666666666666], [1.6050708E12, 2.316666666666667], [1.60507092E12, 3.566666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60507092E12, "title": "Total Transactions Per Second"}},
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

