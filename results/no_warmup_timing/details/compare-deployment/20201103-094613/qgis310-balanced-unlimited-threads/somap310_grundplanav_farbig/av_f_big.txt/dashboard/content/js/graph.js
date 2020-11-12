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
        data: {"result": {"minY": 306.0, "minX": 0.0, "maxY": 5673.0, "series": [{"data": [[0.0, 306.0], [0.1, 306.0], [0.2, 657.0], [0.3, 713.0], [0.4, 713.0], [0.5, 835.0], [0.6, 892.0], [0.7, 913.0], [0.8, 913.0], [0.9, 927.0], [1.0, 933.0], [1.1, 944.0], [1.2, 944.0], [1.3, 960.0], [1.4, 969.0], [1.5, 971.0], [1.6, 971.0], [1.7, 976.0], [1.8, 978.0], [1.9, 978.0], [2.0, 980.0], [2.1, 983.0], [2.2, 987.0], [2.3, 987.0], [2.4, 992.0], [2.5, 1035.0], [2.6, 1052.0], [2.7, 1052.0], [2.8, 1069.0], [2.9, 1081.0], [3.0, 1100.0], [3.1, 1100.0], [3.2, 1101.0], [3.3, 1102.0], [3.4, 1102.0], [3.5, 1102.0], [3.6, 1103.0], [3.7, 1103.0], [3.8, 1103.0], [3.9, 1104.0], [4.0, 1107.0], [4.1, 1108.0], [4.2, 1108.0], [4.3, 1114.0], [4.4, 1117.0], [4.5, 1124.0], [4.6, 1124.0], [4.7, 1126.0], [4.8, 1128.0], [4.9, 1130.0], [5.0, 1130.0], [5.1, 1137.0], [5.2, 1140.0], [5.3, 1140.0], [5.4, 1142.0], [5.5, 1143.0], [5.6, 1147.0], [5.7, 1147.0], [5.8, 1149.0], [5.9, 1155.0], [6.0, 1156.0], [6.1, 1156.0], [6.2, 1157.0], [6.3, 1157.0], [6.4, 1159.0], [6.5, 1159.0], [6.6, 1161.0], [6.7, 1162.0], [6.8, 1162.0], [6.9, 1163.0], [7.0, 1166.0], [7.1, 1166.0], [7.2, 1166.0], [7.3, 1167.0], [7.4, 1168.0], [7.5, 1169.0], [7.6, 1169.0], [7.7, 1170.0], [7.8, 1170.0], [7.9, 1170.0], [8.0, 1170.0], [8.1, 1170.0], [8.2, 1171.0], [8.3, 1172.0], [8.4, 1172.0], [8.5, 1173.0], [8.6, 1174.0], [8.7, 1174.0], [8.8, 1176.0], [8.9, 1177.0], [9.0, 1177.0], [9.1, 1177.0], [9.2, 1178.0], [9.3, 1178.0], [9.4, 1179.0], [9.5, 1179.0], [9.6, 1180.0], [9.7, 1180.0], [9.8, 1181.0], [9.9, 1181.0], [10.0, 1184.0], [10.1, 1185.0], [10.2, 1185.0], [10.3, 1188.0], [10.4, 1190.0], [10.5, 1190.0], [10.6, 1190.0], [10.7, 1190.0], [10.8, 1191.0], [10.9, 1191.0], [11.0, 1191.0], [11.1, 1192.0], [11.2, 1192.0], [11.3, 1197.0], [11.4, 1197.0], [11.5, 1197.0], [11.6, 1199.0], [11.7, 1199.0], [11.8, 1201.0], [11.9, 1201.0], [12.0, 1202.0], [12.1, 1202.0], [12.2, 1203.0], [12.3, 1208.0], [12.4, 1208.0], [12.5, 1208.0], [12.6, 1213.0], [12.7, 1217.0], [12.8, 1220.0], [12.9, 1220.0], [13.0, 1223.0], [13.1, 1225.0], [13.2, 1229.0], [13.3, 1229.0], [13.4, 1229.0], [13.5, 1233.0], [13.6, 1233.0], [13.7, 1237.0], [13.8, 1245.0], [13.9, 1249.0], [14.0, 1249.0], [14.1, 1256.0], [14.2, 1257.0], [14.3, 1259.0], [14.4, 1259.0], [14.5, 1259.0], [14.6, 1261.0], [14.7, 1263.0], [14.8, 1263.0], [14.9, 1263.0], [15.0, 1264.0], [15.1, 1264.0], [15.2, 1266.0], [15.3, 1273.0], [15.4, 1275.0], [15.5, 1275.0], [15.6, 1278.0], [15.7, 1279.0], [15.8, 1283.0], [15.9, 1283.0], [16.0, 1285.0], [16.1, 1288.0], [16.2, 1290.0], [16.3, 1290.0], [16.4, 1299.0], [16.5, 1300.0], [16.6, 1305.0], [16.7, 1305.0], [16.8, 1305.0], [16.9, 1305.0], [17.0, 1305.0], [17.1, 1308.0], [17.2, 1309.0], [17.3, 1310.0], [17.4, 1310.0], [17.5, 1312.0], [17.6, 1312.0], [17.7, 1312.0], [17.8, 1312.0], [17.9, 1315.0], [18.0, 1317.0], [18.1, 1317.0], [18.2, 1317.0], [18.3, 1317.0], [18.4, 1318.0], [18.5, 1318.0], [18.6, 1320.0], [18.7, 1329.0], [18.8, 1329.0], [18.9, 1329.0], [19.0, 1330.0], [19.1, 1331.0], [19.2, 1337.0], [19.3, 1337.0], [19.4, 1339.0], [19.5, 1340.0], [19.6, 1341.0], [19.7, 1341.0], [19.8, 1342.0], [19.9, 1347.0], [20.0, 1350.0], [20.1, 1350.0], [20.2, 1350.0], [20.3, 1354.0], [20.4, 1354.0], [20.5, 1355.0], [20.6, 1358.0], [20.7, 1362.0], [20.8, 1362.0], [20.9, 1364.0], [21.0, 1366.0], [21.1, 1367.0], [21.2, 1367.0], [21.3, 1367.0], [21.4, 1367.0], [21.5, 1369.0], [21.6, 1369.0], [21.7, 1369.0], [21.8, 1370.0], [21.9, 1370.0], [22.0, 1372.0], [22.1, 1373.0], [22.2, 1376.0], [22.3, 1376.0], [22.4, 1378.0], [22.5, 1382.0], [22.6, 1384.0], [22.7, 1384.0], [22.8, 1386.0], [22.9, 1387.0], [23.0, 1389.0], [23.1, 1389.0], [23.2, 1391.0], [23.3, 1393.0], [23.4, 1393.0], [23.5, 1393.0], [23.6, 1394.0], [23.7, 1396.0], [23.8, 1396.0], [23.9, 1398.0], [24.0, 1399.0], [24.1, 1402.0], [24.2, 1402.0], [24.3, 1403.0], [24.4, 1406.0], [24.5, 1415.0], [24.6, 1415.0], [24.7, 1417.0], [24.8, 1419.0], [24.9, 1420.0], [25.0, 1420.0], [25.1, 1424.0], [25.2, 1426.0], [25.3, 1426.0], [25.4, 1426.0], [25.5, 1426.0], [25.6, 1430.0], [25.7, 1430.0], [25.8, 1431.0], [25.9, 1432.0], [26.0, 1434.0], [26.1, 1434.0], [26.2, 1435.0], [26.3, 1442.0], [26.4, 1443.0], [26.5, 1443.0], [26.6, 1446.0], [26.7, 1450.0], [26.8, 1450.0], [26.9, 1451.0], [27.0, 1451.0], [27.1, 1454.0], [27.2, 1454.0], [27.3, 1455.0], [27.4, 1462.0], [27.5, 1464.0], [27.6, 1464.0], [27.7, 1465.0], [27.8, 1466.0], [27.9, 1467.0], [28.0, 1467.0], [28.1, 1467.0], [28.2, 1468.0], [28.3, 1471.0], [28.4, 1471.0], [28.5, 1471.0], [28.6, 1471.0], [28.7, 1471.0], [28.8, 1483.0], [28.9, 1487.0], [29.0, 1497.0], [29.1, 1497.0], [29.2, 1500.0], [29.3, 1502.0], [29.4, 1505.0], [29.5, 1505.0], [29.6, 1507.0], [29.7, 1509.0], [29.8, 1511.0], [29.9, 1511.0], [30.0, 1512.0], [30.1, 1512.0], [30.2, 1512.0], [30.3, 1512.0], [30.4, 1513.0], [30.5, 1516.0], [30.6, 1516.0], [30.7, 1518.0], [30.8, 1520.0], [30.9, 1522.0], [31.0, 1522.0], [31.1, 1523.0], [31.2, 1524.0], [31.3, 1525.0], [31.4, 1525.0], [31.5, 1526.0], [31.6, 1527.0], [31.7, 1527.0], [31.8, 1527.0], [31.9, 1537.0], [32.0, 1537.0], [32.1, 1537.0], [32.2, 1546.0], [32.3, 1552.0], [32.4, 1552.0], [32.5, 1552.0], [32.6, 1554.0], [32.7, 1555.0], [32.8, 1557.0], [32.9, 1557.0], [33.0, 1560.0], [33.1, 1561.0], [33.2, 1563.0], [33.3, 1563.0], [33.4, 1564.0], [33.5, 1566.0], [33.6, 1566.0], [33.7, 1567.0], [33.8, 1568.0], [33.9, 1571.0], [34.0, 1571.0], [34.1, 1574.0], [34.2, 1575.0], [34.3, 1575.0], [34.4, 1575.0], [34.5, 1580.0], [34.6, 1580.0], [34.7, 1581.0], [34.8, 1581.0], [34.9, 1583.0], [35.0, 1583.0], [35.1, 1583.0], [35.2, 1585.0], [35.3, 1587.0], [35.4, 1588.0], [35.5, 1588.0], [35.6, 1589.0], [35.7, 1593.0], [35.8, 1596.0], [35.9, 1596.0], [36.0, 1597.0], [36.1, 1600.0], [36.2, 1601.0], [36.3, 1601.0], [36.4, 1606.0], [36.5, 1609.0], [36.6, 1611.0], [36.7, 1611.0], [36.8, 1614.0], [36.9, 1614.0], [37.0, 1614.0], [37.1, 1615.0], [37.2, 1615.0], [37.3, 1617.0], [37.4, 1617.0], [37.5, 1617.0], [37.6, 1618.0], [37.7, 1620.0], [37.8, 1620.0], [37.9, 1621.0], [38.0, 1625.0], [38.1, 1626.0], [38.2, 1626.0], [38.3, 1627.0], [38.4, 1628.0], [38.5, 1628.0], [38.6, 1630.0], [38.7, 1631.0], [38.8, 1633.0], [38.9, 1633.0], [39.0, 1637.0], [39.1, 1638.0], [39.2, 1642.0], [39.3, 1642.0], [39.4, 1644.0], [39.5, 1644.0], [39.6, 1645.0], [39.7, 1645.0], [39.8, 1645.0], [39.9, 1648.0], [40.0, 1650.0], [40.1, 1650.0], [40.2, 1653.0], [40.3, 1657.0], [40.4, 1657.0], [40.5, 1658.0], [40.6, 1660.0], [40.7, 1664.0], [40.8, 1664.0], [40.9, 1664.0], [41.0, 1664.0], [41.1, 1668.0], [41.2, 1668.0], [41.3, 1669.0], [41.4, 1670.0], [41.5, 1671.0], [41.6, 1671.0], [41.7, 1677.0], [41.8, 1677.0], [41.9, 1677.0], [42.0, 1677.0], [42.1, 1680.0], [42.2, 1681.0], [42.3, 1681.0], [42.4, 1684.0], [42.5, 1684.0], [42.6, 1689.0], [42.7, 1689.0], [42.8, 1689.0], [42.9, 1692.0], [43.0, 1692.0], [43.1, 1692.0], [43.2, 1693.0], [43.3, 1694.0], [43.4, 1694.0], [43.5, 1694.0], [43.6, 1694.0], [43.7, 1695.0], [43.8, 1695.0], [43.9, 1696.0], [44.0, 1699.0], [44.1, 1704.0], [44.2, 1704.0], [44.3, 1705.0], [44.4, 1706.0], [44.5, 1706.0], [44.6, 1706.0], [44.7, 1707.0], [44.8, 1708.0], [44.9, 1711.0], [45.0, 1711.0], [45.1, 1711.0], [45.2, 1713.0], [45.3, 1713.0], [45.4, 1713.0], [45.5, 1714.0], [45.6, 1716.0], [45.7, 1716.0], [45.8, 1718.0], [45.9, 1718.0], [46.0, 1719.0], [46.1, 1719.0], [46.2, 1721.0], [46.3, 1722.0], [46.4, 1726.0], [46.5, 1726.0], [46.6, 1732.0], [46.7, 1734.0], [46.8, 1734.0], [46.9, 1734.0], [47.0, 1734.0], [47.1, 1735.0], [47.2, 1735.0], [47.3, 1741.0], [47.4, 1741.0], [47.5, 1742.0], [47.6, 1742.0], [47.7, 1742.0], [47.8, 1745.0], [47.9, 1747.0], [48.0, 1747.0], [48.1, 1747.0], [48.2, 1747.0], [48.3, 1753.0], [48.4, 1753.0], [48.5, 1755.0], [48.6, 1755.0], [48.7, 1755.0], [48.8, 1757.0], [48.9, 1758.0], [49.0, 1758.0], [49.1, 1758.0], [49.2, 1765.0], [49.3, 1765.0], [49.4, 1765.0], [49.5, 1765.0], [49.6, 1766.0], [49.7, 1770.0], [49.8, 1770.0], [49.9, 1770.0], [50.0, 1772.0], [50.1, 1773.0], [50.2, 1773.0], [50.3, 1778.0], [50.4, 1779.0], [50.5, 1781.0], [50.6, 1781.0], [50.7, 1783.0], [50.8, 1783.0], [50.9, 1784.0], [51.0, 1784.0], [51.1, 1790.0], [51.2, 1791.0], [51.3, 1791.0], [51.4, 1791.0], [51.5, 1802.0], [51.6, 1803.0], [51.7, 1803.0], [51.8, 1804.0], [51.9, 1807.0], [52.0, 1810.0], [52.1, 1810.0], [52.2, 1811.0], [52.3, 1811.0], [52.4, 1813.0], [52.5, 1813.0], [52.6, 1813.0], [52.7, 1816.0], [52.8, 1816.0], [52.9, 1816.0], [53.0, 1816.0], [53.1, 1817.0], [53.2, 1818.0], [53.3, 1818.0], [53.4, 1821.0], [53.5, 1822.0], [53.6, 1822.0], [53.7, 1823.0], [53.8, 1825.0], [53.9, 1825.0], [54.0, 1825.0], [54.1, 1826.0], [54.2, 1827.0], [54.3, 1828.0], [54.4, 1828.0], [54.5, 1829.0], [54.6, 1830.0], [54.7, 1831.0], [54.8, 1831.0], [54.9, 1833.0], [55.0, 1836.0], [55.1, 1836.0], [55.2, 1838.0], [55.3, 1841.0], [55.4, 1841.0], [55.5, 1841.0], [55.6, 1843.0], [55.7, 1846.0], [55.8, 1847.0], [55.9, 1847.0], [56.0, 1853.0], [56.1, 1855.0], [56.2, 1855.0], [56.3, 1855.0], [56.4, 1859.0], [56.5, 1862.0], [56.6, 1863.0], [56.7, 1863.0], [56.8, 1864.0], [56.9, 1864.0], [57.0, 1864.0], [57.1, 1866.0], [57.2, 1867.0], [57.3, 1869.0], [57.4, 1869.0], [57.5, 1869.0], [57.6, 1873.0], [57.7, 1874.0], [57.8, 1874.0], [57.9, 1875.0], [58.0, 1877.0], [58.1, 1879.0], [58.2, 1879.0], [58.3, 1881.0], [58.4, 1884.0], [58.5, 1884.0], [58.6, 1884.0], [58.7, 1886.0], [58.8, 1894.0], [58.9, 1894.0], [59.0, 1894.0], [59.1, 1895.0], [59.2, 1895.0], [59.3, 1895.0], [59.4, 1898.0], [59.5, 1899.0], [59.6, 1900.0], [59.7, 1900.0], [59.8, 1901.0], [59.9, 1901.0], [60.0, 1901.0], [60.1, 1901.0], [60.2, 1902.0], [60.3, 1903.0], [60.4, 1903.0], [60.5, 1903.0], [60.6, 1905.0], [60.7, 1906.0], [60.8, 1906.0], [60.9, 1906.0], [61.0, 1907.0], [61.1, 1908.0], [61.2, 1908.0], [61.3, 1908.0], [61.4, 1910.0], [61.5, 1913.0], [61.6, 1913.0], [61.7, 1915.0], [61.8, 1915.0], [61.9, 1915.0], [62.0, 1917.0], [62.1, 1920.0], [62.2, 1921.0], [62.3, 1921.0], [62.4, 1923.0], [62.5, 1926.0], [62.6, 1927.0], [62.7, 1927.0], [62.8, 1928.0], [62.9, 1930.0], [63.0, 1930.0], [63.1, 1930.0], [63.2, 1933.0], [63.3, 1935.0], [63.4, 1935.0], [63.5, 1939.0], [63.6, 1940.0], [63.7, 1947.0], [63.8, 1947.0], [63.9, 1950.0], [64.0, 1952.0], [64.1, 1955.0], [64.2, 1955.0], [64.3, 1956.0], [64.4, 1960.0], [64.5, 1961.0], [64.6, 1961.0], [64.7, 1963.0], [64.8, 1963.0], [64.9, 1964.0], [65.0, 1964.0], [65.1, 1965.0], [65.2, 1970.0], [65.3, 1970.0], [65.4, 1970.0], [65.5, 1971.0], [65.6, 1975.0], [65.7, 1975.0], [65.8, 1977.0], [65.9, 1979.0], [66.0, 1983.0], [66.1, 1983.0], [66.2, 1984.0], [66.3, 1985.0], [66.4, 1986.0], [66.5, 1986.0], [66.6, 1986.0], [66.7, 1987.0], [66.8, 1987.0], [66.9, 1988.0], [67.0, 1990.0], [67.1, 1993.0], [67.2, 1993.0], [67.3, 1997.0], [67.4, 1997.0], [67.5, 2000.0], [67.6, 2000.0], [67.7, 2002.0], [67.8, 2006.0], [67.9, 2006.0], [68.0, 2006.0], [68.1, 2009.0], [68.2, 2009.0], [68.3, 2010.0], [68.4, 2010.0], [68.5, 2017.0], [68.6, 2020.0], [68.7, 2020.0], [68.8, 2022.0], [68.9, 2023.0], [69.0, 2024.0], [69.1, 2024.0], [69.2, 2024.0], [69.3, 2026.0], [69.4, 2028.0], [69.5, 2028.0], [69.6, 2030.0], [69.7, 2030.0], [69.8, 2032.0], [69.9, 2032.0], [70.0, 2036.0], [70.1, 2037.0], [70.2, 2037.0], [70.3, 2037.0], [70.4, 2043.0], [70.5, 2044.0], [70.6, 2044.0], [70.7, 2047.0], [70.8, 2051.0], [70.9, 2053.0], [71.0, 2053.0], [71.1, 2054.0], [71.2, 2061.0], [71.3, 2062.0], [71.4, 2062.0], [71.5, 2064.0], [71.6, 2065.0], [71.7, 2065.0], [71.8, 2067.0], [71.9, 2068.0], [72.0, 2069.0], [72.1, 2069.0], [72.2, 2073.0], [72.3, 2076.0], [72.4, 2077.0], [72.5, 2077.0], [72.6, 2079.0], [72.7, 2083.0], [72.8, 2084.0], [72.9, 2084.0], [73.0, 2085.0], [73.1, 2086.0], [73.2, 2087.0], [73.3, 2087.0], [73.4, 2087.0], [73.5, 2090.0], [73.6, 2090.0], [73.7, 2091.0], [73.8, 2092.0], [73.9, 2094.0], [74.0, 2094.0], [74.1, 2097.0], [74.2, 2100.0], [74.3, 2101.0], [74.4, 2101.0], [74.5, 2103.0], [74.6, 2104.0], [74.7, 2104.0], [74.8, 2104.0], [74.9, 2105.0], [75.0, 2109.0], [75.1, 2109.0], [75.2, 2111.0], [75.3, 2113.0], [75.4, 2115.0], [75.5, 2115.0], [75.6, 2116.0], [75.7, 2120.0], [75.8, 2120.0], [75.9, 2120.0], [76.0, 2120.0], [76.1, 2121.0], [76.2, 2122.0], [76.3, 2122.0], [76.4, 2125.0], [76.5, 2128.0], [76.6, 2129.0], [76.7, 2129.0], [76.8, 2129.0], [76.9, 2137.0], [77.0, 2137.0], [77.1, 2142.0], [77.2, 2144.0], [77.3, 2144.0], [77.4, 2144.0], [77.5, 2145.0], [77.6, 2149.0], [77.7, 2149.0], [77.8, 2149.0], [77.9, 2150.0], [78.0, 2150.0], [78.1, 2153.0], [78.2, 2153.0], [78.3, 2157.0], [78.4, 2160.0], [78.5, 2160.0], [78.6, 2161.0], [78.7, 2167.0], [78.8, 2172.0], [78.9, 2172.0], [79.0, 2174.0], [79.1, 2174.0], [79.2, 2175.0], [79.3, 2175.0], [79.4, 2197.0], [79.5, 2202.0], [79.6, 2204.0], [79.7, 2204.0], [79.8, 2206.0], [79.9, 2210.0], [80.0, 2210.0], [80.1, 2210.0], [80.2, 2213.0], [80.3, 2217.0], [80.4, 2217.0], [80.5, 2218.0], [80.6, 2219.0], [80.7, 2221.0], [80.8, 2221.0], [80.9, 2222.0], [81.0, 2223.0], [81.1, 2224.0], [81.2, 2224.0], [81.3, 2225.0], [81.4, 2229.0], [81.5, 2235.0], [81.6, 2235.0], [81.7, 2237.0], [81.8, 2239.0], [81.9, 2239.0], [82.0, 2240.0], [82.1, 2241.0], [82.2, 2242.0], [82.3, 2242.0], [82.4, 2247.0], [82.5, 2249.0], [82.6, 2252.0], [82.7, 2252.0], [82.8, 2253.0], [82.9, 2257.0], [83.0, 2262.0], [83.1, 2262.0], [83.2, 2262.0], [83.3, 2267.0], [83.4, 2267.0], [83.5, 2268.0], [83.6, 2270.0], [83.7, 2271.0], [83.8, 2271.0], [83.9, 2271.0], [84.0, 2273.0], [84.1, 2284.0], [84.2, 2284.0], [84.3, 2285.0], [84.4, 2285.0], [84.5, 2288.0], [84.6, 2288.0], [84.7, 2289.0], [84.8, 2303.0], [84.9, 2303.0], [85.0, 2303.0], [85.1, 2310.0], [85.2, 2313.0], [85.3, 2313.0], [85.4, 2314.0], [85.5, 2317.0], [85.6, 2319.0], [85.7, 2319.0], [85.8, 2321.0], [85.9, 2324.0], [86.0, 2327.0], [86.1, 2327.0], [86.2, 2329.0], [86.3, 2329.0], [86.4, 2330.0], [86.5, 2330.0], [86.6, 2330.0], [86.7, 2333.0], [86.8, 2333.0], [86.9, 2339.0], [87.0, 2341.0], [87.1, 2342.0], [87.2, 2342.0], [87.3, 2344.0], [87.4, 2351.0], [87.5, 2356.0], [87.6, 2356.0], [87.7, 2360.0], [87.8, 2363.0], [87.9, 2363.0], [88.0, 2363.0], [88.1, 2366.0], [88.2, 2366.0], [88.3, 2370.0], [88.4, 2370.0], [88.5, 2371.0], [88.6, 2378.0], [88.7, 2378.0], [88.8, 2391.0], [88.9, 2393.0], [89.0, 2406.0], [89.1, 2406.0], [89.2, 2407.0], [89.3, 2408.0], [89.4, 2408.0], [89.5, 2408.0], [89.6, 2410.0], [89.7, 2436.0], [89.8, 2445.0], [89.9, 2445.0], [90.0, 2446.0], [90.1, 2452.0], [90.2, 2452.0], [90.3, 2458.0], [90.4, 2459.0], [90.5, 2461.0], [90.6, 2461.0], [90.7, 2463.0], [90.8, 2466.0], [90.9, 2471.0], [91.0, 2471.0], [91.1, 2474.0], [91.2, 2484.0], [91.3, 2486.0], [91.4, 2486.0], [91.5, 2491.0], [91.6, 2497.0], [91.7, 2497.0], [91.8, 2512.0], [91.9, 2515.0], [92.0, 2518.0], [92.1, 2518.0], [92.2, 2519.0], [92.3, 2540.0], [92.4, 2551.0], [92.5, 2551.0], [92.6, 2553.0], [92.7, 2561.0], [92.8, 2579.0], [92.9, 2579.0], [93.0, 2599.0], [93.1, 2604.0], [93.2, 2614.0], [93.3, 2614.0], [93.4, 2635.0], [93.5, 2641.0], [93.6, 2641.0], [93.7, 2689.0], [93.8, 2689.0], [93.9, 2691.0], [94.0, 2691.0], [94.1, 2736.0], [94.2, 2798.0], [94.3, 2820.0], [94.4, 2820.0], [94.5, 2837.0], [94.6, 2839.0], [94.7, 2841.0], [94.8, 2841.0], [94.9, 2849.0], [95.0, 2858.0], [95.1, 2858.0], [95.2, 2861.0], [95.3, 2867.0], [95.4, 2880.0], [95.5, 2880.0], [95.6, 2942.0], [95.7, 2946.0], [95.8, 2958.0], [95.9, 2958.0], [96.0, 3022.0], [96.1, 3075.0], [96.2, 3089.0], [96.3, 3089.0], [96.4, 3140.0], [96.5, 3190.0], [96.6, 3194.0], [96.7, 3194.0], [96.8, 3223.0], [96.9, 3224.0], [97.0, 3224.0], [97.1, 3233.0], [97.2, 3236.0], [97.3, 3251.0], [97.4, 3251.0], [97.5, 3267.0], [97.6, 3276.0], [97.7, 3320.0], [97.8, 3320.0], [97.9, 3365.0], [98.0, 3427.0], [98.1, 3656.0], [98.2, 3656.0], [98.3, 3701.0], [98.4, 3742.0], [98.5, 3742.0], [98.6, 3762.0], [98.7, 3878.0], [98.8, 3897.0], [98.9, 3897.0], [99.0, 4042.0], [99.1, 4050.0], [99.2, 4145.0], [99.3, 4145.0], [99.4, 4206.0], [99.5, 4210.0], [99.6, 4813.0], [99.7, 4813.0], [99.8, 4989.0], [99.9, 5673.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 300.0, "maxY": 64.0, "series": [{"data": [[600.0, 1.0], [700.0, 1.0], [800.0, 2.0], [900.0, 13.0], [1000.0, 4.0], [1100.0, 64.0], [1200.0, 35.0], [1300.0, 56.0], [1400.0, 37.0], [1500.0, 51.0], [1600.0, 59.0], [1700.0, 54.0], [1800.0, 60.0], [1900.0, 58.0], [2000.0, 49.0], [2100.0, 39.0], [2200.0, 39.0], [2300.0, 31.0], [2400.0, 20.0], [2500.0, 10.0], [2600.0, 7.0], [2800.0, 9.0], [2700.0, 2.0], [2900.0, 3.0], [3000.0, 3.0], [3100.0, 3.0], [3300.0, 2.0], [3200.0, 7.0], [3400.0, 1.0], [3700.0, 3.0], [3600.0, 1.0], [3800.0, 2.0], [4000.0, 2.0], [4200.0, 2.0], [4100.0, 1.0], [300.0, 1.0], [4800.0, 1.0], [4900.0, 1.0], [5600.0, 1.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 5600.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 520.0, "series": [{"data": [[0.0, 1.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 214.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 520.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 11.7117903930131, "minX": 1.60440336E12, "maxY": 12.0, "series": [{"data": [[1.60440348E12, 11.7117903930131], [1.60440336E12, 11.941747572815528], [1.60440342E12, 12.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60440348E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 757.0, "minX": 1.0, "maxY": 2104.0, "series": [{"data": [[8.0, 1625.0], [4.0, 1694.0], [2.0, 1734.0], [1.0, 2104.0], [9.0, 1581.0], [10.0, 1101.0], [5.0, 1173.0], [11.0, 1600.0], [6.0, 757.0], [12.0, 1842.1272475795308], [3.0, 1249.0], [7.0, 1137.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[11.90204081632652, 1834.5170068027228]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 12.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 779.9666666666667, "minX": 1.60440336E12, "maxY": 938015.5666666667, "series": [{"data": [[1.60440348E12, 505612.86666666664], [1.60440336E12, 392143.26666666666], [1.60440342E12, 938015.5666666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60440348E12, 1716.4833333333333], [1.60440336E12, 779.9666666666667], [1.60440342E12, 3026.5833333333335]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60440348E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 1786.5152838427955, "minX": 1.60440336E12, "maxY": 2089.3689320388344, "series": [{"data": [[1.60440348E12, 1786.5152838427955], [1.60440336E12, 2089.3689320388344], [1.60440342E12, 1796.6575682382131]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60440348E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 1785.4978165938887, "minX": 1.60440336E12, "maxY": 2087.912621359224, "series": [{"data": [[1.60440348E12, 1785.4978165938887], [1.60440336E12, 2087.912621359224], [1.60440342E12, 1795.5210918114158]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60440348E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.60440336E12, "maxY": 1.0776699029126218, "series": [{"data": [[1.60440348E12, 0.0], [1.60440336E12, 1.0776699029126218], [1.60440342E12, 0.0372208436724566]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60440348E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 306.0, "minX": 1.60440336E12, "maxY": 5673.0, "series": [{"data": [[1.60440348E12, 3276.0], [1.60440336E12, 5673.0], [1.60440342E12, 4210.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60440348E12, 1103.0], [1.60440336E12, 306.0], [1.60440342E12, 921.9039986515045]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60440348E12, 1103.0], [1.60440336E12, 316.38960348129274], [1.60440342E12, 926.9944005393982]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60440348E12, 1103.0], [1.60440336E12, 306.0], [1.60440342E12, 924.7319993257522]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60440348E12, 1101.0], [1.60440336E12, 306.0], [1.60440342E12, 835.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60440348E12, 1722.0], [1.60440336E12, 1831.0], [1.60440342E12, 1781.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60440348E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 685.0, "minX": 1.0, "maxY": 2346.0, "series": [{"data": [[1.0, 1205.0], [2.0, 685.0], [4.0, 2346.0], [8.0, 1573.0], [9.0, 1312.0], [5.0, 1884.0], [10.0, 1398.0], [11.0, 1208.0], [3.0, 1628.5], [6.0, 1906.5], [12.0, 1219.0], [7.0, 1898.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 12.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 684.0, "minX": 1.0, "maxY": 2345.5, "series": [{"data": [[1.0, 1203.0], [2.0, 684.0], [4.0, 2345.5], [8.0, 1571.0], [9.0, 1311.0], [5.0, 1882.0], [10.0, 1397.0], [11.0, 1207.0], [3.0, 1628.0], [6.0, 1906.0], [12.0, 1218.5], [7.0, 1897.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 12.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1.9166666666666667, "minX": 1.60440336E12, "maxY": 6.716666666666667, "series": [{"data": [[1.60440348E12, 3.6166666666666667], [1.60440336E12, 1.9166666666666667], [1.60440342E12, 6.716666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60440348E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1.7166666666666666, "minX": 1.60440336E12, "maxY": 6.716666666666667, "series": [{"data": [[1.60440348E12, 3.816666666666667], [1.60440336E12, 1.7166666666666666], [1.60440342E12, 6.716666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60440348E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.7166666666666666, "minX": 1.60440336E12, "maxY": 6.716666666666667, "series": [{"data": [[1.60440348E12, 3.816666666666667], [1.60440336E12, 1.7166666666666666], [1.60440342E12, 6.716666666666667]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60440348E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.7166666666666666, "minX": 1.60440336E12, "maxY": 6.716666666666667, "series": [{"data": [[1.60440348E12, 3.816666666666667], [1.60440336E12, 1.7166666666666666], [1.60440342E12, 6.716666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60440348E12, "title": "Total Transactions Per Second"}},
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

