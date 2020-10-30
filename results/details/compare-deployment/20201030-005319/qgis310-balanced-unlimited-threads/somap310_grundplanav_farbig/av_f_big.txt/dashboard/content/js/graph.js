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
        data: {"result": {"minY": 558.0, "minX": 0.0, "maxY": 4097.0, "series": [{"data": [[0.0, 558.0], [0.1, 558.0], [0.2, 719.0], [0.3, 740.0], [0.4, 740.0], [0.5, 757.0], [0.6, 794.0], [0.7, 809.0], [0.8, 809.0], [0.9, 832.0], [1.0, 858.0], [1.1, 866.0], [1.2, 866.0], [1.3, 869.0], [1.4, 874.0], [1.5, 877.0], [1.6, 877.0], [1.7, 896.0], [1.8, 904.0], [1.9, 904.0], [2.0, 905.0], [2.1, 921.0], [2.2, 923.0], [2.3, 923.0], [2.4, 923.0], [2.5, 927.0], [2.6, 943.0], [2.7, 943.0], [2.8, 960.0], [2.9, 967.0], [3.0, 974.0], [3.1, 974.0], [3.2, 978.0], [3.3, 980.0], [3.4, 980.0], [3.5, 987.0], [3.6, 991.0], [3.7, 997.0], [3.8, 997.0], [3.9, 1012.0], [4.0, 1025.0], [4.1, 1033.0], [4.2, 1033.0], [4.3, 1040.0], [4.4, 1041.0], [4.5, 1047.0], [4.6, 1047.0], [4.7, 1048.0], [4.8, 1050.0], [4.9, 1052.0], [5.0, 1052.0], [5.1, 1054.0], [5.2, 1060.0], [5.3, 1060.0], [5.4, 1064.0], [5.5, 1071.0], [5.6, 1073.0], [5.7, 1073.0], [5.8, 1076.0], [5.9, 1079.0], [6.0, 1080.0], [6.1, 1080.0], [6.2, 1080.0], [6.3, 1081.0], [6.4, 1085.0], [6.5, 1085.0], [6.6, 1086.0], [6.7, 1088.0], [6.8, 1088.0], [6.9, 1089.0], [7.0, 1092.0], [7.1, 1092.0], [7.2, 1092.0], [7.3, 1095.0], [7.4, 1096.0], [7.5, 1099.0], [7.6, 1099.0], [7.7, 1100.0], [7.8, 1100.0], [7.9, 1101.0], [8.0, 1101.0], [8.1, 1103.0], [8.2, 1107.0], [8.3, 1110.0], [8.4, 1110.0], [8.5, 1110.0], [8.6, 1118.0], [8.7, 1118.0], [8.8, 1127.0], [8.9, 1129.0], [9.0, 1130.0], [9.1, 1130.0], [9.2, 1147.0], [9.3, 1161.0], [9.4, 1163.0], [9.5, 1163.0], [9.6, 1164.0], [9.7, 1169.0], [9.8, 1169.0], [9.9, 1169.0], [10.0, 1170.0], [10.1, 1171.0], [10.2, 1171.0], [10.3, 1172.0], [10.4, 1173.0], [10.5, 1174.0], [10.6, 1174.0], [10.7, 1175.0], [10.8, 1176.0], [10.9, 1177.0], [11.0, 1177.0], [11.1, 1178.0], [11.2, 1180.0], [11.3, 1182.0], [11.4, 1182.0], [11.5, 1183.0], [11.6, 1184.0], [11.7, 1184.0], [11.8, 1186.0], [11.9, 1186.0], [12.0, 1188.0], [12.1, 1188.0], [12.2, 1189.0], [12.3, 1192.0], [12.4, 1193.0], [12.5, 1193.0], [12.6, 1202.0], [12.7, 1212.0], [12.8, 1220.0], [12.9, 1220.0], [13.0, 1222.0], [13.1, 1229.0], [13.2, 1229.0], [13.3, 1229.0], [13.4, 1229.0], [13.5, 1230.0], [13.6, 1230.0], [13.7, 1231.0], [13.8, 1232.0], [13.9, 1234.0], [14.0, 1234.0], [14.1, 1234.0], [14.2, 1235.0], [14.3, 1238.0], [14.4, 1238.0], [14.5, 1238.0], [14.6, 1239.0], [14.7, 1242.0], [14.8, 1242.0], [14.9, 1243.0], [15.0, 1246.0], [15.1, 1246.0], [15.2, 1248.0], [15.3, 1248.0], [15.4, 1250.0], [15.5, 1250.0], [15.6, 1252.0], [15.7, 1256.0], [15.8, 1261.0], [15.9, 1261.0], [16.0, 1266.0], [16.1, 1270.0], [16.2, 1271.0], [16.3, 1271.0], [16.4, 1272.0], [16.5, 1281.0], [16.6, 1285.0], [16.7, 1285.0], [16.8, 1286.0], [16.9, 1287.0], [17.0, 1287.0], [17.1, 1289.0], [17.2, 1290.0], [17.3, 1292.0], [17.4, 1292.0], [17.5, 1294.0], [17.6, 1300.0], [17.7, 1300.0], [17.8, 1300.0], [17.9, 1301.0], [18.0, 1302.0], [18.1, 1303.0], [18.2, 1303.0], [18.3, 1304.0], [18.4, 1304.0], [18.5, 1304.0], [18.6, 1306.0], [18.7, 1307.0], [18.8, 1312.0], [18.9, 1312.0], [19.0, 1319.0], [19.1, 1319.0], [19.2, 1320.0], [19.3, 1320.0], [19.4, 1326.0], [19.5, 1327.0], [19.6, 1327.0], [19.7, 1327.0], [19.8, 1328.0], [19.9, 1329.0], [20.0, 1329.0], [20.1, 1329.0], [20.2, 1332.0], [20.3, 1334.0], [20.4, 1334.0], [20.5, 1335.0], [20.6, 1338.0], [20.7, 1341.0], [20.8, 1341.0], [20.9, 1342.0], [21.0, 1349.0], [21.1, 1350.0], [21.2, 1350.0], [21.3, 1350.0], [21.4, 1355.0], [21.5, 1357.0], [21.6, 1357.0], [21.7, 1358.0], [21.8, 1365.0], [21.9, 1365.0], [22.0, 1368.0], [22.1, 1369.0], [22.2, 1376.0], [22.3, 1376.0], [22.4, 1378.0], [22.5, 1382.0], [22.6, 1382.0], [22.7, 1382.0], [22.8, 1388.0], [22.9, 1396.0], [23.0, 1400.0], [23.1, 1400.0], [23.2, 1402.0], [23.3, 1402.0], [23.4, 1402.0], [23.5, 1403.0], [23.6, 1406.0], [23.7, 1406.0], [23.8, 1406.0], [23.9, 1414.0], [24.0, 1416.0], [24.1, 1416.0], [24.2, 1416.0], [24.3, 1417.0], [24.4, 1419.0], [24.5, 1420.0], [24.6, 1420.0], [24.7, 1422.0], [24.8, 1422.0], [24.9, 1424.0], [25.0, 1424.0], [25.1, 1425.0], [25.2, 1427.0], [25.3, 1427.0], [25.4, 1430.0], [25.5, 1431.0], [25.6, 1431.0], [25.7, 1431.0], [25.8, 1438.0], [25.9, 1440.0], [26.0, 1442.0], [26.1, 1442.0], [26.2, 1443.0], [26.3, 1446.0], [26.4, 1447.0], [26.5, 1447.0], [26.6, 1449.0], [26.7, 1450.0], [26.8, 1450.0], [26.9, 1458.0], [27.0, 1466.0], [27.1, 1466.0], [27.2, 1466.0], [27.3, 1470.0], [27.4, 1470.0], [27.5, 1471.0], [27.6, 1471.0], [27.7, 1475.0], [27.8, 1475.0], [27.9, 1479.0], [28.0, 1479.0], [28.1, 1481.0], [28.2, 1481.0], [28.3, 1486.0], [28.4, 1486.0], [28.5, 1490.0], [28.6, 1490.0], [28.7, 1490.0], [28.8, 1492.0], [28.9, 1493.0], [29.0, 1493.0], [29.1, 1493.0], [29.2, 1494.0], [29.3, 1494.0], [29.4, 1495.0], [29.5, 1495.0], [29.6, 1496.0], [29.7, 1504.0], [29.8, 1505.0], [29.9, 1505.0], [30.0, 1509.0], [30.1, 1512.0], [30.2, 1512.0], [30.3, 1513.0], [30.4, 1524.0], [30.5, 1526.0], [30.6, 1526.0], [30.7, 1528.0], [30.8, 1528.0], [30.9, 1531.0], [31.0, 1531.0], [31.1, 1534.0], [31.2, 1535.0], [31.3, 1544.0], [31.4, 1544.0], [31.5, 1545.0], [31.6, 1546.0], [31.7, 1546.0], [31.8, 1550.0], [31.9, 1550.0], [32.0, 1550.0], [32.1, 1550.0], [32.2, 1555.0], [32.3, 1555.0], [32.4, 1556.0], [32.5, 1556.0], [32.6, 1558.0], [32.7, 1564.0], [32.8, 1565.0], [32.9, 1565.0], [33.0, 1568.0], [33.1, 1573.0], [33.2, 1573.0], [33.3, 1573.0], [33.4, 1574.0], [33.5, 1575.0], [33.6, 1575.0], [33.7, 1576.0], [33.8, 1576.0], [33.9, 1576.0], [34.0, 1576.0], [34.1, 1578.0], [34.2, 1578.0], [34.3, 1582.0], [34.4, 1582.0], [34.5, 1586.0], [34.6, 1594.0], [34.7, 1594.0], [34.8, 1594.0], [34.9, 1595.0], [35.0, 1602.0], [35.1, 1602.0], [35.2, 1603.0], [35.3, 1605.0], [35.4, 1606.0], [35.5, 1606.0], [35.6, 1607.0], [35.7, 1611.0], [35.8, 1613.0], [35.9, 1613.0], [36.0, 1613.0], [36.1, 1613.0], [36.2, 1618.0], [36.3, 1618.0], [36.4, 1624.0], [36.5, 1626.0], [36.6, 1629.0], [36.7, 1629.0], [36.8, 1631.0], [36.9, 1632.0], [37.0, 1632.0], [37.1, 1635.0], [37.2, 1638.0], [37.3, 1640.0], [37.4, 1640.0], [37.5, 1642.0], [37.6, 1645.0], [37.7, 1646.0], [37.8, 1646.0], [37.9, 1646.0], [38.0, 1646.0], [38.1, 1649.0], [38.2, 1649.0], [38.3, 1657.0], [38.4, 1659.0], [38.5, 1659.0], [38.6, 1661.0], [38.7, 1668.0], [38.8, 1670.0], [38.9, 1670.0], [39.0, 1671.0], [39.1, 1674.0], [39.2, 1677.0], [39.3, 1677.0], [39.4, 1680.0], [39.5, 1680.0], [39.6, 1682.0], [39.7, 1682.0], [39.8, 1683.0], [39.9, 1685.0], [40.0, 1686.0], [40.1, 1686.0], [40.2, 1686.0], [40.3, 1690.0], [40.4, 1690.0], [40.5, 1697.0], [40.6, 1697.0], [40.7, 1699.0], [40.8, 1699.0], [40.9, 1699.0], [41.0, 1699.0], [41.1, 1703.0], [41.2, 1703.0], [41.3, 1704.0], [41.4, 1705.0], [41.5, 1707.0], [41.6, 1707.0], [41.7, 1709.0], [41.8, 1710.0], [41.9, 1710.0], [42.0, 1711.0], [42.1, 1721.0], [42.2, 1722.0], [42.3, 1722.0], [42.4, 1727.0], [42.5, 1729.0], [42.6, 1730.0], [42.7, 1730.0], [42.8, 1733.0], [42.9, 1734.0], [43.0, 1734.0], [43.1, 1734.0], [43.2, 1734.0], [43.3, 1735.0], [43.4, 1735.0], [43.5, 1736.0], [43.6, 1736.0], [43.7, 1737.0], [43.8, 1737.0], [43.9, 1741.0], [44.0, 1748.0], [44.1, 1750.0], [44.2, 1750.0], [44.3, 1750.0], [44.4, 1751.0], [44.5, 1753.0], [44.6, 1753.0], [44.7, 1753.0], [44.8, 1755.0], [44.9, 1758.0], [45.0, 1758.0], [45.1, 1759.0], [45.2, 1760.0], [45.3, 1760.0], [45.4, 1763.0], [45.5, 1765.0], [45.6, 1769.0], [45.7, 1769.0], [45.8, 1776.0], [45.9, 1780.0], [46.0, 1780.0], [46.1, 1780.0], [46.2, 1782.0], [46.3, 1784.0], [46.4, 1785.0], [46.5, 1785.0], [46.6, 1786.0], [46.7, 1789.0], [46.8, 1789.0], [46.9, 1791.0], [47.0, 1792.0], [47.1, 1792.0], [47.2, 1792.0], [47.3, 1792.0], [47.4, 1792.0], [47.5, 1799.0], [47.6, 1799.0], [47.7, 1806.0], [47.8, 1806.0], [47.9, 1808.0], [48.0, 1808.0], [48.1, 1809.0], [48.2, 1813.0], [48.3, 1815.0], [48.4, 1815.0], [48.5, 1816.0], [48.6, 1817.0], [48.7, 1817.0], [48.8, 1820.0], [48.9, 1821.0], [49.0, 1824.0], [49.1, 1824.0], [49.2, 1826.0], [49.3, 1826.0], [49.4, 1827.0], [49.5, 1827.0], [49.6, 1827.0], [49.7, 1829.0], [49.8, 1831.0], [49.9, 1831.0], [50.0, 1838.0], [50.1, 1839.0], [50.2, 1839.0], [50.3, 1839.0], [50.4, 1841.0], [50.5, 1841.0], [50.6, 1841.0], [50.7, 1841.0], [50.8, 1841.0], [50.9, 1842.0], [51.0, 1842.0], [51.1, 1842.0], [51.2, 1842.0], [51.3, 1844.0], [51.4, 1844.0], [51.5, 1846.0], [51.6, 1847.0], [51.7, 1847.0], [51.8, 1848.0], [51.9, 1849.0], [52.0, 1850.0], [52.1, 1850.0], [52.2, 1853.0], [52.3, 1853.0], [52.4, 1855.0], [52.5, 1855.0], [52.6, 1855.0], [52.7, 1860.0], [52.8, 1861.0], [52.9, 1861.0], [53.0, 1863.0], [53.1, 1866.0], [53.2, 1866.0], [53.3, 1866.0], [53.4, 1868.0], [53.5, 1871.0], [53.6, 1871.0], [53.7, 1872.0], [53.8, 1874.0], [53.9, 1878.0], [54.0, 1878.0], [54.1, 1878.0], [54.2, 1879.0], [54.3, 1879.0], [54.4, 1879.0], [54.5, 1881.0], [54.6, 1885.0], [54.7, 1887.0], [54.8, 1887.0], [54.9, 1895.0], [55.0, 1896.0], [55.1, 1896.0], [55.2, 1896.0], [55.3, 1896.0], [55.4, 1897.0], [55.5, 1897.0], [55.6, 1902.0], [55.7, 1903.0], [55.8, 1905.0], [55.9, 1905.0], [56.0, 1906.0], [56.1, 1907.0], [56.2, 1907.0], [56.3, 1907.0], [56.4, 1909.0], [56.5, 1909.0], [56.6, 1910.0], [56.7, 1910.0], [56.8, 1910.0], [56.9, 1913.0], [57.0, 1913.0], [57.1, 1916.0], [57.2, 1917.0], [57.3, 1918.0], [57.4, 1918.0], [57.5, 1919.0], [57.6, 1920.0], [57.7, 1923.0], [57.8, 1923.0], [57.9, 1924.0], [58.0, 1924.0], [58.1, 1925.0], [58.2, 1925.0], [58.3, 1925.0], [58.4, 1927.0], [58.5, 1927.0], [58.6, 1933.0], [58.7, 1934.0], [58.8, 1935.0], [58.9, 1935.0], [59.0, 1936.0], [59.1, 1937.0], [59.2, 1937.0], [59.3, 1937.0], [59.4, 1937.0], [59.5, 1941.0], [59.6, 1942.0], [59.7, 1942.0], [59.8, 1943.0], [59.9, 1944.0], [60.0, 1945.0], [60.1, 1945.0], [60.2, 1945.0], [60.3, 1946.0], [60.4, 1946.0], [60.5, 1947.0], [60.6, 1947.0], [60.7, 1948.0], [60.8, 1948.0], [60.9, 1950.0], [61.0, 1956.0], [61.1, 1956.0], [61.2, 1956.0], [61.3, 1958.0], [61.4, 1959.0], [61.5, 1959.0], [61.6, 1959.0], [61.7, 1960.0], [61.8, 1961.0], [61.9, 1961.0], [62.0, 1961.0], [62.1, 1963.0], [62.2, 1964.0], [62.3, 1964.0], [62.4, 1964.0], [62.5, 1966.0], [62.6, 1970.0], [62.7, 1970.0], [62.8, 1971.0], [62.9, 1971.0], [63.0, 1972.0], [63.1, 1972.0], [63.2, 1974.0], [63.3, 1976.0], [63.4, 1976.0], [63.5, 1979.0], [63.6, 1979.0], [63.7, 1983.0], [63.8, 1983.0], [63.9, 1985.0], [64.0, 1985.0], [64.1, 1986.0], [64.2, 1986.0], [64.3, 1993.0], [64.4, 1996.0], [64.5, 1996.0], [64.6, 1996.0], [64.7, 2000.0], [64.8, 2001.0], [64.9, 2006.0], [65.0, 2006.0], [65.1, 2006.0], [65.2, 2007.0], [65.3, 2007.0], [65.4, 2008.0], [65.5, 2011.0], [65.6, 2012.0], [65.7, 2012.0], [65.8, 2012.0], [65.9, 2012.0], [66.0, 2013.0], [66.1, 2013.0], [66.2, 2013.0], [66.3, 2014.0], [66.4, 2015.0], [66.5, 2015.0], [66.6, 2017.0], [66.7, 2018.0], [66.8, 2018.0], [66.9, 2021.0], [67.0, 2022.0], [67.1, 2028.0], [67.2, 2028.0], [67.3, 2029.0], [67.4, 2037.0], [67.5, 2037.0], [67.6, 2037.0], [67.7, 2039.0], [67.8, 2040.0], [67.9, 2047.0], [68.0, 2047.0], [68.1, 2049.0], [68.2, 2049.0], [68.3, 2049.0], [68.4, 2049.0], [68.5, 2050.0], [68.6, 2051.0], [68.7, 2051.0], [68.8, 2051.0], [68.9, 2055.0], [69.0, 2055.0], [69.1, 2055.0], [69.2, 2056.0], [69.3, 2057.0], [69.4, 2059.0], [69.5, 2059.0], [69.6, 2060.0], [69.7, 2063.0], [69.8, 2063.0], [69.9, 2063.0], [70.0, 2065.0], [70.1, 2065.0], [70.2, 2065.0], [70.3, 2067.0], [70.4, 2067.0], [70.5, 2069.0], [70.6, 2069.0], [70.7, 2069.0], [70.8, 2070.0], [70.9, 2072.0], [71.0, 2072.0], [71.1, 2073.0], [71.2, 2074.0], [71.3, 2077.0], [71.4, 2077.0], [71.5, 2078.0], [71.6, 2081.0], [71.7, 2081.0], [71.8, 2081.0], [71.9, 2082.0], [72.0, 2082.0], [72.1, 2082.0], [72.2, 2084.0], [72.3, 2085.0], [72.4, 2087.0], [72.5, 2087.0], [72.6, 2090.0], [72.7, 2090.0], [72.8, 2095.0], [72.9, 2095.0], [73.0, 2095.0], [73.1, 2099.0], [73.2, 2101.0], [73.3, 2101.0], [73.4, 2104.0], [73.5, 2105.0], [73.6, 2105.0], [73.7, 2106.0], [73.8, 2110.0], [73.9, 2113.0], [74.0, 2113.0], [74.1, 2113.0], [74.2, 2114.0], [74.3, 2115.0], [74.4, 2115.0], [74.5, 2116.0], [74.6, 2119.0], [74.7, 2123.0], [74.8, 2123.0], [74.9, 2124.0], [75.0, 2125.0], [75.1, 2125.0], [75.2, 2126.0], [75.3, 2128.0], [75.4, 2132.0], [75.5, 2132.0], [75.6, 2135.0], [75.7, 2135.0], [75.8, 2135.0], [75.9, 2135.0], [76.0, 2137.0], [76.1, 2138.0], [76.2, 2138.0], [76.3, 2138.0], [76.4, 2140.0], [76.5, 2144.0], [76.6, 2145.0], [76.7, 2145.0], [76.8, 2145.0], [76.9, 2147.0], [77.0, 2147.0], [77.1, 2150.0], [77.2, 2150.0], [77.3, 2153.0], [77.4, 2153.0], [77.5, 2155.0], [77.6, 2157.0], [77.7, 2157.0], [77.8, 2157.0], [77.9, 2163.0], [78.0, 2166.0], [78.1, 2169.0], [78.2, 2169.0], [78.3, 2170.0], [78.4, 2171.0], [78.5, 2171.0], [78.6, 2172.0], [78.7, 2173.0], [78.8, 2175.0], [78.9, 2175.0], [79.0, 2178.0], [79.1, 2179.0], [79.2, 2179.0], [79.3, 2179.0], [79.4, 2179.0], [79.5, 2179.0], [79.6, 2181.0], [79.7, 2181.0], [79.8, 2183.0], [79.9, 2183.0], [80.0, 2186.0], [80.1, 2186.0], [80.2, 2191.0], [80.3, 2193.0], [80.4, 2193.0], [80.5, 2194.0], [80.6, 2203.0], [80.7, 2214.0], [80.8, 2214.0], [80.9, 2218.0], [81.0, 2219.0], [81.1, 2220.0], [81.2, 2220.0], [81.3, 2221.0], [81.4, 2221.0], [81.5, 2222.0], [81.6, 2222.0], [81.7, 2223.0], [81.8, 2225.0], [81.9, 2225.0], [82.0, 2228.0], [82.1, 2230.0], [82.2, 2237.0], [82.3, 2237.0], [82.4, 2237.0], [82.5, 2239.0], [82.6, 2242.0], [82.7, 2242.0], [82.8, 2242.0], [82.9, 2242.0], [83.0, 2244.0], [83.1, 2244.0], [83.2, 2245.0], [83.3, 2253.0], [83.4, 2253.0], [83.5, 2254.0], [83.6, 2255.0], [83.7, 2257.0], [83.8, 2257.0], [83.9, 2257.0], [84.0, 2261.0], [84.1, 2262.0], [84.2, 2262.0], [84.3, 2262.0], [84.4, 2269.0], [84.5, 2269.0], [84.6, 2269.0], [84.7, 2273.0], [84.8, 2279.0], [84.9, 2281.0], [85.0, 2281.0], [85.1, 2292.0], [85.2, 2293.0], [85.3, 2293.0], [85.4, 2296.0], [85.5, 2297.0], [85.6, 2302.0], [85.7, 2302.0], [85.8, 2305.0], [85.9, 2306.0], [86.0, 2306.0], [86.1, 2306.0], [86.2, 2307.0], [86.3, 2308.0], [86.4, 2308.0], [86.5, 2308.0], [86.6, 2308.0], [86.7, 2310.0], [86.8, 2310.0], [86.9, 2315.0], [87.0, 2317.0], [87.1, 2324.0], [87.2, 2324.0], [87.3, 2328.0], [87.4, 2333.0], [87.5, 2337.0], [87.6, 2337.0], [87.7, 2342.0], [87.8, 2353.0], [87.9, 2353.0], [88.0, 2353.0], [88.1, 2355.0], [88.2, 2357.0], [88.3, 2363.0], [88.4, 2363.0], [88.5, 2367.0], [88.6, 2370.0], [88.7, 2370.0], [88.8, 2370.0], [88.9, 2374.0], [89.0, 2376.0], [89.1, 2376.0], [89.2, 2376.0], [89.3, 2377.0], [89.4, 2390.0], [89.5, 2390.0], [89.6, 2392.0], [89.7, 2394.0], [89.8, 2403.0], [89.9, 2403.0], [90.0, 2413.0], [90.1, 2415.0], [90.2, 2415.0], [90.3, 2416.0], [90.4, 2431.0], [90.5, 2444.0], [90.6, 2444.0], [90.7, 2445.0], [90.8, 2451.0], [90.9, 2460.0], [91.0, 2460.0], [91.1, 2465.0], [91.2, 2473.0], [91.3, 2474.0], [91.4, 2474.0], [91.5, 2475.0], [91.6, 2477.0], [91.7, 2477.0], [91.8, 2487.0], [91.9, 2497.0], [92.0, 2502.0], [92.1, 2502.0], [92.2, 2505.0], [92.3, 2523.0], [92.4, 2529.0], [92.5, 2529.0], [92.6, 2534.0], [92.7, 2541.0], [92.8, 2546.0], [92.9, 2546.0], [93.0, 2560.0], [93.1, 2584.0], [93.2, 2584.0], [93.3, 2584.0], [93.4, 2597.0], [93.5, 2604.0], [93.6, 2604.0], [93.7, 2610.0], [93.8, 2621.0], [93.9, 2631.0], [94.0, 2631.0], [94.1, 2636.0], [94.2, 2649.0], [94.3, 2650.0], [94.4, 2650.0], [94.5, 2696.0], [94.6, 2705.0], [94.7, 2708.0], [94.8, 2708.0], [94.9, 2715.0], [95.0, 2721.0], [95.1, 2721.0], [95.2, 2742.0], [95.3, 2756.0], [95.4, 2764.0], [95.5, 2764.0], [95.6, 2780.0], [95.7, 2787.0], [95.8, 2790.0], [95.9, 2790.0], [96.0, 2824.0], [96.1, 2833.0], [96.2, 2839.0], [96.3, 2839.0], [96.4, 2908.0], [96.5, 2910.0], [96.6, 2993.0], [96.7, 2993.0], [96.8, 3030.0], [96.9, 3036.0], [97.0, 3036.0], [97.1, 3042.0], [97.2, 3068.0], [97.3, 3079.0], [97.4, 3079.0], [97.5, 3088.0], [97.6, 3116.0], [97.7, 3119.0], [97.8, 3119.0], [97.9, 3148.0], [98.0, 3155.0], [98.1, 3182.0], [98.2, 3182.0], [98.3, 3191.0], [98.4, 3215.0], [98.5, 3215.0], [98.6, 3247.0], [98.7, 3329.0], [98.8, 3502.0], [98.9, 3502.0], [99.0, 3604.0], [99.1, 3633.0], [99.2, 3808.0], [99.3, 3808.0], [99.4, 3900.0], [99.5, 3949.0], [99.6, 4002.0], [99.7, 4002.0], [99.8, 4078.0], [99.9, 4097.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 500.0, "maxY": 67.0, "series": [{"data": [[700.0, 4.0], [800.0, 8.0], [900.0, 15.0], [1000.0, 28.0], [1100.0, 36.0], [1200.0, 37.0], [1300.0, 40.0], [1400.0, 49.0], [1500.0, 39.0], [1600.0, 45.0], [1700.0, 48.0], [1800.0, 58.0], [1900.0, 67.0], [2000.0, 63.0], [2100.0, 54.0], [2300.0, 31.0], [2200.0, 37.0], [2400.0, 16.0], [2500.0, 11.0], [2600.0, 8.0], [2700.0, 10.0], [2800.0, 3.0], [2900.0, 3.0], [3000.0, 6.0], [3100.0, 6.0], [3200.0, 2.0], [3300.0, 1.0], [3500.0, 1.0], [3600.0, 2.0], [3800.0, 1.0], [3900.0, 2.0], [4000.0, 3.0], [500.0, 1.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 4000.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 218.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 517.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 218.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 517.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 11.095890410958905, "minX": 1.60402554E12, "maxY": 12.0, "series": [{"data": [[1.6040256E12, 12.0], [1.60402566E12, 11.095890410958905], [1.60402554E12, 12.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60402566E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 1041.0, "minX": 1.0, "maxY": 1829.9930939226517, "series": [{"data": [[8.0, 1186.0], [4.0, 1470.0], [2.0, 1490.0], [1.0, 1425.0], [9.0, 1041.0], [10.0, 1092.0], [5.0, 1272.0], [11.0, 1568.0], [12.0, 1829.9930939226517], [6.0, 1047.0], [3.0, 1256.0], [7.0, 1481.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[11.910204081632651, 1822.0993197278913]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 12.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 537.3666666666667, "minX": 1.60402554E12, "maxY": 929444.0666666667, "series": [{"data": [[1.6040256E12, 929444.0666666667], [1.60402566E12, 191095.35], [1.60402554E12, 715246.3833333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6040256E12, 3139.616666666667], [1.60402566E12, 537.3666666666667], [1.60402554E12, 1846.05]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60402566E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 1690.4383561643835, "minX": 1.60402554E12, "maxY": 2022.9016393442635, "series": [{"data": [[1.6040256E12, 1727.8779904306223], [1.60402566E12, 1690.4383561643835], [1.60402554E12, 2022.9016393442635]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60402566E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 1689.0547945205483, "minX": 1.60402554E12, "maxY": 2021.5901639344263, "series": [{"data": [[1.6040256E12, 1726.8468899521527], [1.60402566E12, 1689.0547945205483], [1.60402554E12, 2021.5901639344263]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60402566E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.60402554E12, "maxY": 0.4672131147540983, "series": [{"data": [[1.6040256E12, 0.031100478468899517], [1.60402566E12, 0.0], [1.60402554E12, 0.4672131147540983]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60402566E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 558.0, "minX": 1.60402554E12, "maxY": 4097.0, "series": [{"data": [[1.6040256E12, 4097.0], [1.60402566E12, 2764.0], [1.60402554E12, 4002.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6040256E12, 753.1069983017445], [1.60402566E12, 858.0], [1.60402554E12, 992.2299996495246]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6040256E12, 762.4797014784813], [1.60402566E12, 858.0], [1.60402554E12, 993.5530001401901]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6040256E12, 756.6684991508722], [1.60402566E12, 858.0], [1.60402554E12, 992.9649998247623]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.6040256E12, 558.0], [1.60402566E12, 858.0], [1.60402554E12, 974.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6040256E12, 1731.5], [1.60402566E12, 1594.0], [1.60402554E12, 1962.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60402566E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 1132.5, "minX": 1.0, "maxY": 2306.0, "series": [{"data": [[1.0, 2306.0], [8.0, 1522.0], [4.0, 1672.0], [2.0, 1457.5], [9.0, 1350.0], [5.0, 2129.0], [10.0, 1205.0], [11.0, 1232.0], [3.0, 1878.0], [6.0, 1960.0], [7.0, 1921.5], [14.0, 1132.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 14.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 1132.0, "minX": 1.0, "maxY": 2301.0, "series": [{"data": [[1.0, 2301.0], [8.0, 1522.0], [4.0, 1671.0], [2.0, 1457.0], [9.0, 1350.0], [5.0, 2128.0], [10.0, 1202.0], [11.0, 1231.0], [3.0, 1877.0], [6.0, 1958.0], [7.0, 1920.0], [14.0, 1132.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 14.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1.0166666666666666, "minX": 1.60402554E12, "maxY": 6.966666666666667, "series": [{"data": [[1.6040256E12, 6.966666666666667], [1.60402566E12, 1.0166666666666666], [1.60402554E12, 4.266666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60402566E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1.2166666666666666, "minX": 1.60402554E12, "maxY": 6.966666666666667, "series": [{"data": [[1.6040256E12, 6.966666666666667], [1.60402566E12, 1.2166666666666666], [1.60402554E12, 4.066666666666666]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60402566E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.2166666666666666, "minX": 1.60402554E12, "maxY": 6.966666666666667, "series": [{"data": [[1.6040256E12, 6.966666666666667], [1.60402566E12, 1.2166666666666666], [1.60402554E12, 4.066666666666666]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60402566E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.2166666666666666, "minX": 1.60402554E12, "maxY": 6.966666666666667, "series": [{"data": [[1.6040256E12, 6.966666666666667], [1.60402566E12, 1.2166666666666666], [1.60402554E12, 4.066666666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60402566E12, "title": "Total Transactions Per Second"}},
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

