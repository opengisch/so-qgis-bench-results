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
        data: {"result": {"minY": 773.0, "minX": 0.0, "maxY": 4811.0, "series": [{"data": [[0.0, 773.0], [0.1, 773.0], [0.2, 812.0], [0.3, 853.0], [0.4, 853.0], [0.5, 854.0], [0.6, 878.0], [0.7, 883.0], [0.8, 883.0], [0.9, 884.0], [1.0, 888.0], [1.1, 897.0], [1.2, 897.0], [1.3, 904.0], [1.4, 917.0], [1.5, 920.0], [1.6, 920.0], [1.7, 941.0], [1.8, 942.0], [1.9, 942.0], [2.0, 983.0], [2.1, 999.0], [2.2, 1009.0], [2.3, 1009.0], [2.4, 1009.0], [2.5, 1014.0], [2.6, 1017.0], [2.7, 1017.0], [2.8, 1017.0], [2.9, 1031.0], [3.0, 1032.0], [3.1, 1032.0], [3.2, 1036.0], [3.3, 1036.0], [3.4, 1036.0], [3.5, 1037.0], [3.6, 1043.0], [3.7, 1047.0], [3.8, 1047.0], [3.9, 1049.0], [4.0, 1053.0], [4.1, 1053.0], [4.2, 1053.0], [4.3, 1053.0], [4.4, 1054.0], [4.5, 1056.0], [4.6, 1056.0], [4.7, 1056.0], [4.8, 1056.0], [4.9, 1060.0], [5.0, 1060.0], [5.1, 1060.0], [5.2, 1062.0], [5.3, 1062.0], [5.4, 1062.0], [5.5, 1064.0], [5.6, 1067.0], [5.7, 1067.0], [5.8, 1068.0], [5.9, 1070.0], [6.0, 1071.0], [6.1, 1071.0], [6.2, 1073.0], [6.3, 1074.0], [6.4, 1074.0], [6.5, 1074.0], [6.6, 1077.0], [6.7, 1078.0], [6.8, 1078.0], [6.9, 1079.0], [7.0, 1081.0], [7.1, 1081.0], [7.2, 1081.0], [7.3, 1082.0], [7.4, 1082.0], [7.5, 1082.0], [7.6, 1082.0], [7.7, 1083.0], [7.8, 1086.0], [7.9, 1086.0], [8.0, 1086.0], [8.1, 1089.0], [8.2, 1090.0], [8.3, 1090.0], [8.4, 1090.0], [8.5, 1091.0], [8.6, 1091.0], [8.7, 1091.0], [8.8, 1093.0], [8.9, 1095.0], [9.0, 1097.0], [9.1, 1097.0], [9.2, 1101.0], [9.3, 1101.0], [9.4, 1104.0], [9.5, 1104.0], [9.6, 1105.0], [9.7, 1105.0], [9.8, 1106.0], [9.9, 1106.0], [10.0, 1107.0], [10.1, 1108.0], [10.2, 1108.0], [10.3, 1112.0], [10.4, 1112.0], [10.5, 1113.0], [10.6, 1113.0], [10.7, 1115.0], [10.8, 1115.0], [10.9, 1118.0], [11.0, 1118.0], [11.1, 1119.0], [11.2, 1122.0], [11.3, 1123.0], [11.4, 1123.0], [11.5, 1128.0], [11.6, 1131.0], [11.7, 1131.0], [11.8, 1131.0], [11.9, 1131.0], [12.0, 1132.0], [12.1, 1132.0], [12.2, 1136.0], [12.3, 1136.0], [12.4, 1136.0], [12.5, 1136.0], [12.6, 1137.0], [12.7, 1138.0], [12.8, 1139.0], [12.9, 1139.0], [13.0, 1140.0], [13.1, 1142.0], [13.2, 1146.0], [13.3, 1146.0], [13.4, 1147.0], [13.5, 1147.0], [13.6, 1147.0], [13.7, 1147.0], [13.8, 1147.0], [13.9, 1149.0], [14.0, 1149.0], [14.1, 1150.0], [14.2, 1150.0], [14.3, 1151.0], [14.4, 1151.0], [14.5, 1152.0], [14.6, 1157.0], [14.7, 1158.0], [14.8, 1158.0], [14.9, 1160.0], [15.0, 1161.0], [15.1, 1161.0], [15.2, 1166.0], [15.3, 1168.0], [15.4, 1172.0], [15.5, 1172.0], [15.6, 1172.0], [15.7, 1174.0], [15.8, 1177.0], [15.9, 1177.0], [16.0, 1179.0], [16.1, 1181.0], [16.2, 1182.0], [16.3, 1182.0], [16.4, 1185.0], [16.5, 1186.0], [16.6, 1187.0], [16.7, 1187.0], [16.8, 1192.0], [16.9, 1192.0], [17.0, 1192.0], [17.1, 1193.0], [17.2, 1194.0], [17.3, 1196.0], [17.4, 1196.0], [17.5, 1198.0], [17.6, 1202.0], [17.7, 1203.0], [17.8, 1203.0], [17.9, 1207.0], [18.0, 1210.0], [18.1, 1210.0], [18.2, 1210.0], [18.3, 1218.0], [18.4, 1218.0], [18.5, 1218.0], [18.6, 1222.0], [18.7, 1226.0], [18.8, 1228.0], [18.9, 1228.0], [19.0, 1230.0], [19.1, 1240.0], [19.2, 1242.0], [19.3, 1242.0], [19.4, 1244.0], [19.5, 1244.0], [19.6, 1244.0], [19.7, 1244.0], [19.8, 1246.0], [19.9, 1247.0], [20.0, 1247.0], [20.1, 1247.0], [20.2, 1251.0], [20.3, 1251.0], [20.4, 1251.0], [20.5, 1253.0], [20.6, 1256.0], [20.7, 1260.0], [20.8, 1260.0], [20.9, 1260.0], [21.0, 1263.0], [21.1, 1264.0], [21.2, 1264.0], [21.3, 1267.0], [21.4, 1268.0], [21.5, 1271.0], [21.6, 1271.0], [21.7, 1272.0], [21.8, 1277.0], [21.9, 1277.0], [22.0, 1280.0], [22.1, 1280.0], [22.2, 1284.0], [22.3, 1284.0], [22.4, 1290.0], [22.5, 1290.0], [22.6, 1292.0], [22.7, 1292.0], [22.8, 1292.0], [22.9, 1294.0], [23.0, 1296.0], [23.1, 1296.0], [23.2, 1299.0], [23.3, 1300.0], [23.4, 1300.0], [23.5, 1303.0], [23.6, 1306.0], [23.7, 1310.0], [23.8, 1310.0], [23.9, 1312.0], [24.0, 1317.0], [24.1, 1319.0], [24.2, 1319.0], [24.3, 1320.0], [24.4, 1322.0], [24.5, 1322.0], [24.6, 1322.0], [24.7, 1328.0], [24.8, 1330.0], [24.9, 1330.0], [25.0, 1330.0], [25.1, 1335.0], [25.2, 1354.0], [25.3, 1354.0], [25.4, 1354.0], [25.5, 1359.0], [25.6, 1359.0], [25.7, 1359.0], [25.8, 1359.0], [25.9, 1360.0], [26.0, 1360.0], [26.1, 1360.0], [26.2, 1367.0], [26.3, 1369.0], [26.4, 1371.0], [26.5, 1371.0], [26.6, 1383.0], [26.7, 1383.0], [26.8, 1383.0], [26.9, 1384.0], [27.0, 1401.0], [27.1, 1403.0], [27.2, 1403.0], [27.3, 1405.0], [27.4, 1405.0], [27.5, 1406.0], [27.6, 1406.0], [27.7, 1407.0], [27.8, 1413.0], [27.9, 1414.0], [28.0, 1414.0], [28.1, 1416.0], [28.2, 1422.0], [28.3, 1426.0], [28.4, 1426.0], [28.5, 1426.0], [28.6, 1426.0], [28.7, 1426.0], [28.8, 1428.0], [28.9, 1428.0], [29.0, 1429.0], [29.1, 1429.0], [29.2, 1430.0], [29.3, 1433.0], [29.4, 1436.0], [29.5, 1436.0], [29.6, 1444.0], [29.7, 1446.0], [29.8, 1448.0], [29.9, 1448.0], [30.0, 1454.0], [30.1, 1459.0], [30.2, 1459.0], [30.3, 1460.0], [30.4, 1462.0], [30.5, 1467.0], [30.6, 1467.0], [30.7, 1477.0], [30.8, 1478.0], [30.9, 1479.0], [31.0, 1479.0], [31.1, 1480.0], [31.2, 1481.0], [31.3, 1481.0], [31.4, 1481.0], [31.5, 1484.0], [31.6, 1489.0], [31.7, 1489.0], [31.8, 1489.0], [31.9, 1492.0], [32.0, 1494.0], [32.1, 1494.0], [32.2, 1496.0], [32.3, 1501.0], [32.4, 1508.0], [32.5, 1508.0], [32.6, 1509.0], [32.7, 1510.0], [32.8, 1514.0], [32.9, 1514.0], [33.0, 1517.0], [33.1, 1518.0], [33.2, 1521.0], [33.3, 1521.0], [33.4, 1524.0], [33.5, 1524.0], [33.6, 1524.0], [33.7, 1525.0], [33.8, 1528.0], [33.9, 1533.0], [34.0, 1533.0], [34.1, 1533.0], [34.2, 1535.0], [34.3, 1535.0], [34.4, 1535.0], [34.5, 1536.0], [34.6, 1539.0], [34.7, 1539.0], [34.8, 1539.0], [34.9, 1544.0], [35.0, 1545.0], [35.1, 1545.0], [35.2, 1548.0], [35.3, 1549.0], [35.4, 1550.0], [35.5, 1550.0], [35.6, 1551.0], [35.7, 1552.0], [35.8, 1553.0], [35.9, 1553.0], [36.0, 1554.0], [36.1, 1556.0], [36.2, 1557.0], [36.3, 1557.0], [36.4, 1558.0], [36.5, 1558.0], [36.6, 1562.0], [36.7, 1562.0], [36.8, 1567.0], [36.9, 1567.0], [37.0, 1567.0], [37.1, 1569.0], [37.2, 1570.0], [37.3, 1570.0], [37.4, 1570.0], [37.5, 1573.0], [37.6, 1574.0], [37.7, 1575.0], [37.8, 1575.0], [37.9, 1575.0], [38.0, 1586.0], [38.1, 1589.0], [38.2, 1589.0], [38.3, 1589.0], [38.4, 1595.0], [38.5, 1595.0], [38.6, 1597.0], [38.7, 1597.0], [38.8, 1599.0], [38.9, 1599.0], [39.0, 1601.0], [39.1, 1605.0], [39.2, 1609.0], [39.3, 1609.0], [39.4, 1610.0], [39.5, 1615.0], [39.6, 1616.0], [39.7, 1616.0], [39.8, 1618.0], [39.9, 1618.0], [40.0, 1619.0], [40.1, 1619.0], [40.2, 1620.0], [40.3, 1625.0], [40.4, 1625.0], [40.5, 1626.0], [40.6, 1628.0], [40.7, 1629.0], [40.8, 1629.0], [40.9, 1629.0], [41.0, 1629.0], [41.1, 1630.0], [41.2, 1630.0], [41.3, 1632.0], [41.4, 1634.0], [41.5, 1638.0], [41.6, 1638.0], [41.7, 1638.0], [41.8, 1640.0], [41.9, 1640.0], [42.0, 1643.0], [42.1, 1644.0], [42.2, 1646.0], [42.3, 1646.0], [42.4, 1650.0], [42.5, 1650.0], [42.6, 1653.0], [42.7, 1653.0], [42.8, 1655.0], [42.9, 1657.0], [43.0, 1659.0], [43.1, 1659.0], [43.2, 1660.0], [43.3, 1663.0], [43.4, 1663.0], [43.5, 1663.0], [43.6, 1667.0], [43.7, 1675.0], [43.8, 1675.0], [43.9, 1677.0], [44.0, 1677.0], [44.1, 1677.0], [44.2, 1677.0], [44.3, 1678.0], [44.4, 1680.0], [44.5, 1682.0], [44.6, 1682.0], [44.7, 1685.0], [44.8, 1686.0], [44.9, 1693.0], [45.0, 1693.0], [45.1, 1697.0], [45.2, 1698.0], [45.3, 1698.0], [45.4, 1699.0], [45.5, 1701.0], [45.6, 1703.0], [45.7, 1703.0], [45.8, 1704.0], [45.9, 1707.0], [46.0, 1707.0], [46.1, 1707.0], [46.2, 1710.0], [46.3, 1713.0], [46.4, 1714.0], [46.5, 1714.0], [46.6, 1715.0], [46.7, 1716.0], [46.8, 1716.0], [46.9, 1716.0], [47.0, 1716.0], [47.1, 1717.0], [47.2, 1717.0], [47.3, 1719.0], [47.4, 1720.0], [47.5, 1720.0], [47.6, 1720.0], [47.7, 1721.0], [47.8, 1721.0], [47.9, 1728.0], [48.0, 1728.0], [48.1, 1728.0], [48.2, 1728.0], [48.3, 1729.0], [48.4, 1729.0], [48.5, 1730.0], [48.6, 1732.0], [48.7, 1732.0], [48.8, 1732.0], [48.9, 1732.0], [49.0, 1735.0], [49.1, 1735.0], [49.2, 1739.0], [49.3, 1740.0], [49.4, 1743.0], [49.5, 1743.0], [49.6, 1745.0], [49.7, 1746.0], [49.8, 1748.0], [49.9, 1748.0], [50.0, 1748.0], [50.1, 1748.0], [50.2, 1748.0], [50.3, 1752.0], [50.4, 1752.0], [50.5, 1752.0], [50.6, 1752.0], [50.7, 1753.0], [50.8, 1757.0], [50.9, 1759.0], [51.0, 1759.0], [51.1, 1759.0], [51.2, 1759.0], [51.3, 1760.0], [51.4, 1760.0], [51.5, 1760.0], [51.6, 1760.0], [51.7, 1760.0], [51.8, 1761.0], [51.9, 1762.0], [52.0, 1762.0], [52.1, 1762.0], [52.2, 1764.0], [52.3, 1764.0], [52.4, 1765.0], [52.5, 1765.0], [52.6, 1768.0], [52.7, 1769.0], [52.8, 1769.0], [52.9, 1769.0], [53.0, 1770.0], [53.1, 1770.0], [53.2, 1771.0], [53.3, 1771.0], [53.4, 1773.0], [53.5, 1775.0], [53.6, 1775.0], [53.7, 1775.0], [53.8, 1775.0], [53.9, 1776.0], [54.0, 1776.0], [54.1, 1776.0], [54.2, 1779.0], [54.3, 1780.0], [54.4, 1780.0], [54.5, 1781.0], [54.6, 1783.0], [54.7, 1784.0], [54.8, 1784.0], [54.9, 1785.0], [55.0, 1788.0], [55.1, 1788.0], [55.2, 1788.0], [55.3, 1789.0], [55.4, 1789.0], [55.5, 1789.0], [55.6, 1789.0], [55.7, 1792.0], [55.8, 1793.0], [55.9, 1793.0], [56.0, 1793.0], [56.1, 1794.0], [56.2, 1795.0], [56.3, 1795.0], [56.4, 1795.0], [56.5, 1795.0], [56.6, 1795.0], [56.7, 1795.0], [56.8, 1797.0], [56.9, 1804.0], [57.0, 1804.0], [57.1, 1805.0], [57.2, 1805.0], [57.3, 1807.0], [57.4, 1807.0], [57.5, 1808.0], [57.6, 1809.0], [57.7, 1809.0], [57.8, 1809.0], [57.9, 1812.0], [58.0, 1812.0], [58.1, 1812.0], [58.2, 1812.0], [58.3, 1813.0], [58.4, 1813.0], [58.5, 1813.0], [58.6, 1820.0], [58.7, 1820.0], [58.8, 1825.0], [58.9, 1825.0], [59.0, 1829.0], [59.1, 1829.0], [59.2, 1829.0], [59.3, 1829.0], [59.4, 1829.0], [59.5, 1831.0], [59.6, 1831.0], [59.7, 1831.0], [59.8, 1832.0], [59.9, 1833.0], [60.0, 1838.0], [60.1, 1838.0], [60.2, 1838.0], [60.3, 1839.0], [60.4, 1839.0], [60.5, 1841.0], [60.6, 1841.0], [60.7, 1842.0], [60.8, 1842.0], [60.9, 1842.0], [61.0, 1842.0], [61.1, 1842.0], [61.2, 1842.0], [61.3, 1846.0], [61.4, 1849.0], [61.5, 1849.0], [61.6, 1849.0], [61.7, 1849.0], [61.8, 1851.0], [61.9, 1851.0], [62.0, 1851.0], [62.1, 1852.0], [62.2, 1853.0], [62.3, 1853.0], [62.4, 1856.0], [62.5, 1857.0], [62.6, 1859.0], [62.7, 1859.0], [62.8, 1862.0], [62.9, 1864.0], [63.0, 1864.0], [63.1, 1864.0], [63.2, 1867.0], [63.3, 1868.0], [63.4, 1868.0], [63.5, 1870.0], [63.6, 1870.0], [63.7, 1870.0], [63.8, 1870.0], [63.9, 1873.0], [64.0, 1874.0], [64.1, 1875.0], [64.2, 1875.0], [64.3, 1876.0], [64.4, 1877.0], [64.5, 1878.0], [64.6, 1878.0], [64.7, 1880.0], [64.8, 1882.0], [64.9, 1885.0], [65.0, 1885.0], [65.1, 1886.0], [65.2, 1887.0], [65.3, 1887.0], [65.4, 1887.0], [65.5, 1887.0], [65.6, 1888.0], [65.7, 1888.0], [65.8, 1892.0], [65.9, 1892.0], [66.0, 1892.0], [66.1, 1892.0], [66.2, 1892.0], [66.3, 1895.0], [66.4, 1897.0], [66.5, 1897.0], [66.6, 1897.0], [66.7, 1898.0], [66.8, 1898.0], [66.9, 1900.0], [67.0, 1901.0], [67.1, 1903.0], [67.2, 1903.0], [67.3, 1905.0], [67.4, 1907.0], [67.5, 1908.0], [67.6, 1908.0], [67.7, 1909.0], [67.8, 1910.0], [67.9, 1911.0], [68.0, 1911.0], [68.1, 1913.0], [68.2, 1920.0], [68.3, 1920.0], [68.4, 1920.0], [68.5, 1923.0], [68.6, 1924.0], [68.7, 1924.0], [68.8, 1925.0], [68.9, 1927.0], [69.0, 1929.0], [69.1, 1929.0], [69.2, 1931.0], [69.3, 1933.0], [69.4, 1936.0], [69.5, 1936.0], [69.6, 1936.0], [69.7, 1945.0], [69.8, 1946.0], [69.9, 1946.0], [70.0, 1948.0], [70.1, 1948.0], [70.2, 1948.0], [70.3, 1950.0], [70.4, 1952.0], [70.5, 1953.0], [70.6, 1953.0], [70.7, 1953.0], [70.8, 1959.0], [70.9, 1964.0], [71.0, 1964.0], [71.1, 1965.0], [71.2, 1965.0], [71.3, 1967.0], [71.4, 1967.0], [71.5, 1968.0], [71.6, 1969.0], [71.7, 1969.0], [71.8, 1970.0], [71.9, 1970.0], [72.0, 1971.0], [72.1, 1971.0], [72.2, 1972.0], [72.3, 1975.0], [72.4, 1982.0], [72.5, 1982.0], [72.6, 1984.0], [72.7, 1984.0], [72.8, 1985.0], [72.9, 1985.0], [73.0, 1986.0], [73.1, 1989.0], [73.2, 1992.0], [73.3, 1992.0], [73.4, 1992.0], [73.5, 1993.0], [73.6, 1993.0], [73.7, 1993.0], [73.8, 1994.0], [73.9, 1994.0], [74.0, 1994.0], [74.1, 1995.0], [74.2, 1999.0], [74.3, 1999.0], [74.4, 1999.0], [74.5, 2000.0], [74.6, 2000.0], [74.7, 2001.0], [74.8, 2001.0], [74.9, 2001.0], [75.0, 2003.0], [75.1, 2003.0], [75.2, 2003.0], [75.3, 2004.0], [75.4, 2011.0], [75.5, 2011.0], [75.6, 2017.0], [75.7, 2018.0], [75.8, 2020.0], [75.9, 2020.0], [76.0, 2022.0], [76.1, 2022.0], [76.2, 2024.0], [76.3, 2024.0], [76.4, 2024.0], [76.5, 2024.0], [76.6, 2024.0], [76.7, 2024.0], [76.8, 2027.0], [76.9, 2028.0], [77.0, 2028.0], [77.1, 2030.0], [77.2, 2033.0], [77.3, 2033.0], [77.4, 2033.0], [77.5, 2040.0], [77.6, 2041.0], [77.7, 2043.0], [77.8, 2043.0], [77.9, 2045.0], [78.0, 2049.0], [78.1, 2050.0], [78.2, 2050.0], [78.3, 2051.0], [78.4, 2053.0], [78.5, 2053.0], [78.6, 2054.0], [78.7, 2056.0], [78.8, 2056.0], [78.9, 2056.0], [79.0, 2064.0], [79.1, 2064.0], [79.2, 2065.0], [79.3, 2065.0], [79.4, 2067.0], [79.5, 2072.0], [79.6, 2074.0], [79.7, 2074.0], [79.8, 2075.0], [79.9, 2077.0], [80.0, 2078.0], [80.1, 2078.0], [80.2, 2078.0], [80.3, 2081.0], [80.4, 2081.0], [80.5, 2082.0], [80.6, 2095.0], [80.7, 2096.0], [80.8, 2096.0], [80.9, 2100.0], [81.0, 2101.0], [81.1, 2102.0], [81.2, 2102.0], [81.3, 2103.0], [81.4, 2108.0], [81.5, 2109.0], [81.6, 2109.0], [81.7, 2112.0], [81.8, 2123.0], [81.9, 2123.0], [82.0, 2126.0], [82.1, 2133.0], [82.2, 2134.0], [82.3, 2134.0], [82.4, 2135.0], [82.5, 2141.0], [82.6, 2144.0], [82.7, 2144.0], [82.8, 2144.0], [82.9, 2145.0], [83.0, 2150.0], [83.1, 2150.0], [83.2, 2153.0], [83.3, 2157.0], [83.4, 2157.0], [83.5, 2159.0], [83.6, 2164.0], [83.7, 2164.0], [83.8, 2164.0], [83.9, 2172.0], [84.0, 2173.0], [84.1, 2173.0], [84.2, 2173.0], [84.3, 2176.0], [84.4, 2177.0], [84.5, 2178.0], [84.6, 2178.0], [84.7, 2183.0], [84.8, 2186.0], [84.9, 2186.0], [85.0, 2186.0], [85.1, 2189.0], [85.2, 2191.0], [85.3, 2191.0], [85.4, 2194.0], [85.5, 2197.0], [85.6, 2197.0], [85.7, 2197.0], [85.8, 2203.0], [85.9, 2205.0], [86.0, 2207.0], [86.1, 2207.0], [86.2, 2207.0], [86.3, 2209.0], [86.4, 2210.0], [86.5, 2210.0], [86.6, 2212.0], [86.7, 2221.0], [86.8, 2221.0], [86.9, 2232.0], [87.0, 2239.0], [87.1, 2241.0], [87.2, 2241.0], [87.3, 2241.0], [87.4, 2244.0], [87.5, 2245.0], [87.6, 2245.0], [87.7, 2248.0], [87.8, 2257.0], [87.9, 2260.0], [88.0, 2260.0], [88.1, 2260.0], [88.2, 2263.0], [88.3, 2266.0], [88.4, 2266.0], [88.5, 2267.0], [88.6, 2268.0], [88.7, 2268.0], [88.8, 2280.0], [88.9, 2295.0], [89.0, 2295.0], [89.1, 2295.0], [89.2, 2297.0], [89.3, 2298.0], [89.4, 2304.0], [89.5, 2304.0], [89.6, 2317.0], [89.7, 2343.0], [89.8, 2351.0], [89.9, 2351.0], [90.0, 2362.0], [90.1, 2366.0], [90.2, 2366.0], [90.3, 2372.0], [90.4, 2389.0], [90.5, 2390.0], [90.6, 2390.0], [90.7, 2397.0], [90.8, 2401.0], [90.9, 2408.0], [91.0, 2408.0], [91.1, 2412.0], [91.2, 2418.0], [91.3, 2421.0], [91.4, 2421.0], [91.5, 2432.0], [91.6, 2439.0], [91.7, 2439.0], [91.8, 2447.0], [91.9, 2451.0], [92.0, 2460.0], [92.1, 2460.0], [92.2, 2471.0], [92.3, 2529.0], [92.4, 2536.0], [92.5, 2536.0], [92.6, 2543.0], [92.7, 2566.0], [92.8, 2591.0], [92.9, 2591.0], [93.0, 2607.0], [93.1, 2608.0], [93.2, 2628.0], [93.3, 2628.0], [93.4, 2638.0], [93.5, 2650.0], [93.6, 2650.0], [93.7, 2654.0], [93.8, 2662.0], [93.9, 2664.0], [94.0, 2664.0], [94.1, 2690.0], [94.2, 2713.0], [94.3, 2719.0], [94.4, 2719.0], [94.5, 2734.0], [94.6, 2739.0], [94.7, 2751.0], [94.8, 2751.0], [94.9, 2775.0], [95.0, 2789.0], [95.1, 2789.0], [95.2, 2804.0], [95.3, 2830.0], [95.4, 2832.0], [95.5, 2832.0], [95.6, 2836.0], [95.7, 2839.0], [95.8, 2881.0], [95.9, 2881.0], [96.0, 2890.0], [96.1, 2899.0], [96.2, 2916.0], [96.3, 2916.0], [96.4, 2957.0], [96.5, 2993.0], [96.6, 2999.0], [96.7, 2999.0], [96.8, 3005.0], [96.9, 3025.0], [97.0, 3025.0], [97.1, 3047.0], [97.2, 3053.0], [97.3, 3054.0], [97.4, 3054.0], [97.5, 3095.0], [97.6, 3140.0], [97.7, 3158.0], [97.8, 3158.0], [97.9, 3163.0], [98.0, 3205.0], [98.1, 3213.0], [98.2, 3213.0], [98.3, 3216.0], [98.4, 3296.0], [98.5, 3296.0], [98.6, 3509.0], [98.7, 3516.0], [98.8, 3654.0], [98.9, 3654.0], [99.0, 4003.0], [99.1, 4026.0], [99.2, 4273.0], [99.3, 4273.0], [99.4, 4307.0], [99.5, 4413.0], [99.6, 4588.0], [99.7, 4588.0], [99.8, 4724.0], [99.9, 4811.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 700.0, "maxY": 84.0, "series": [{"data": [[700.0, 1.0], [800.0, 8.0], [900.0, 7.0], [1000.0, 51.0], [1100.0, 62.0], [1200.0, 42.0], [1300.0, 27.0], [1400.0, 39.0], [1500.0, 49.0], [1600.0, 48.0], [1700.0, 84.0], [1800.0, 73.0], [1900.0, 56.0], [2000.0, 47.0], [2100.0, 36.0], [2200.0, 27.0], [2300.0, 10.0], [2400.0, 11.0], [2500.0, 5.0], [2600.0, 9.0], [2800.0, 8.0], [2700.0, 7.0], [2900.0, 4.0], [3000.0, 6.0], [3100.0, 3.0], [3200.0, 4.0], [3500.0, 2.0], [3600.0, 1.0], [4000.0, 2.0], [4200.0, 1.0], [4300.0, 1.0], [4500.0, 1.0], [4400.0, 1.0], [4700.0, 1.0], [4800.0, 1.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 4800.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 237.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 498.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 237.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 498.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 11.838630806845964, "minX": 1.6028148E12, "maxY": 12.0, "series": [{"data": [[1.60281486E12, 11.838630806845964], [1.6028148E12, 12.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60281486E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 1047.0, "minX": 1.0, "maxY": 1766.559392265193, "series": [{"data": [[8.0, 1091.0], [4.0, 1131.0], [2.0, 1545.0], [1.0, 1533.0], [9.0, 1105.0], [10.0, 1383.0], [5.0, 1138.0], [11.0, 1047.0], [12.0, 1766.559392265193], [6.0, 1597.0], [3.0, 1549.0], [7.0, 1119.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[11.910204081632651, 1759.4925170068022]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 12.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 2459.9333333333334, "minX": 1.6028148E12, "maxY": 986945.6333333333, "series": [{"data": [[1.60281486E12, 986945.6333333333], [1.6028148E12, 848827.6]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60281486E12, 3063.1], [1.6028148E12, 2459.9333333333334]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60281486E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 1718.9779951100259, "minX": 1.6028148E12, "maxY": 1810.322085889571, "series": [{"data": [[1.60281486E12, 1718.9779951100259], [1.6028148E12, 1810.322085889571]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60281486E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 1717.8166259168697, "minX": 1.6028148E12, "maxY": 1809.101226993865, "series": [{"data": [[1.60281486E12, 1717.8166259168697], [1.6028148E12, 1809.101226993865]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60281486E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.039119804400977974, "minX": 1.6028148E12, "maxY": 0.3312883435582822, "series": [{"data": [[1.60281486E12, 0.039119804400977974], [1.6028148E12, 0.3312883435582822]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60281486E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 773.0, "minX": 1.6028148E12, "maxY": 4811.0, "series": [{"data": [[1.60281486E12, 4588.0], [1.6028148E12, 4811.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60281486E12, 882.1399994134903], [1.6028148E12, 881.3469977390766]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60281486E12, 884.2360001564026], [1.6028148E12, 887.9833006548881]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60281486E12, 883.3699997067451], [1.6028148E12, 885.2364991813898]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60281486E12, 773.0], [1.6028148E12, 853.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60281486E12, 1728.0], [1.6028148E12, 1775.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60281486E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 1101.0, "minX": 2.0, "maxY": 2401.0, "series": [{"data": [[2.0, 1906.0], [4.0, 2230.0], [8.0, 1606.0], [9.0, 1292.0], [5.0, 1795.0], [10.0, 1317.0], [6.0, 1870.0], [3.0, 2401.0], [12.0, 1158.5], [13.0, 1101.0], [7.0, 1789.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 13.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 1101.0, "minX": 2.0, "maxY": 2399.0, "series": [{"data": [[2.0, 1904.0], [4.0, 2225.0], [8.0, 1604.0], [9.0, 1290.0], [5.0, 1794.0], [10.0, 1316.5], [6.0, 1866.0], [3.0, 2399.0], [12.0, 1158.0], [13.0, 1101.0], [7.0, 1787.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 13.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 5.633333333333334, "minX": 1.6028148E12, "maxY": 6.616666666666666, "series": [{"data": [[1.60281486E12, 6.616666666666666], [1.6028148E12, 5.633333333333334]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60281486E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 5.433333333333334, "minX": 1.6028148E12, "maxY": 6.816666666666666, "series": [{"data": [[1.60281486E12, 6.816666666666666], [1.6028148E12, 5.433333333333334]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60281486E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 5.433333333333334, "minX": 1.6028148E12, "maxY": 6.816666666666666, "series": [{"data": [[1.60281486E12, 6.816666666666666], [1.6028148E12, 5.433333333333334]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60281486E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 5.433333333333334, "minX": 1.6028148E12, "maxY": 6.816666666666666, "series": [{"data": [[1.60281486E12, 6.816666666666666], [1.6028148E12, 5.433333333333334]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60281486E12, "title": "Total Transactions Per Second"}},
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

