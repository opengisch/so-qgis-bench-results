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
        data: {"result": {"minY": 567.0, "minX": 0.0, "maxY": 4661.0, "series": [{"data": [[0.0, 567.0], [0.1, 567.0], [0.2, 674.0], [0.3, 731.0], [0.4, 731.0], [0.5, 735.0], [0.6, 749.0], [0.7, 750.0], [0.8, 750.0], [0.9, 778.0], [1.0, 786.0], [1.1, 794.0], [1.2, 794.0], [1.3, 851.0], [1.4, 865.0], [1.5, 866.0], [1.6, 866.0], [1.7, 876.0], [1.8, 880.0], [1.9, 880.0], [2.0, 897.0], [2.1, 914.0], [2.2, 918.0], [2.3, 918.0], [2.4, 922.0], [2.5, 934.0], [2.6, 939.0], [2.7, 939.0], [2.8, 950.0], [2.9, 955.0], [3.0, 963.0], [3.1, 963.0], [3.2, 975.0], [3.3, 978.0], [3.4, 978.0], [3.5, 987.0], [3.6, 988.0], [3.7, 989.0], [3.8, 989.0], [3.9, 993.0], [4.0, 996.0], [4.1, 1002.0], [4.2, 1002.0], [4.3, 1011.0], [4.4, 1011.0], [4.5, 1014.0], [4.6, 1014.0], [4.7, 1019.0], [4.8, 1027.0], [4.9, 1029.0], [5.0, 1029.0], [5.1, 1044.0], [5.2, 1045.0], [5.3, 1045.0], [5.4, 1045.0], [5.5, 1046.0], [5.6, 1046.0], [5.7, 1046.0], [5.8, 1046.0], [5.9, 1046.0], [6.0, 1053.0], [6.1, 1053.0], [6.2, 1057.0], [6.3, 1061.0], [6.4, 1063.0], [6.5, 1063.0], [6.6, 1064.0], [6.7, 1065.0], [6.8, 1065.0], [6.9, 1065.0], [7.0, 1066.0], [7.1, 1071.0], [7.2, 1071.0], [7.3, 1071.0], [7.4, 1073.0], [7.5, 1076.0], [7.6, 1076.0], [7.7, 1077.0], [7.8, 1078.0], [7.9, 1084.0], [8.0, 1084.0], [8.1, 1087.0], [8.2, 1095.0], [8.3, 1103.0], [8.4, 1103.0], [8.5, 1104.0], [8.6, 1108.0], [8.7, 1108.0], [8.8, 1110.0], [8.9, 1110.0], [9.0, 1111.0], [9.1, 1111.0], [9.2, 1111.0], [9.3, 1113.0], [9.4, 1115.0], [9.5, 1115.0], [9.6, 1115.0], [9.7, 1119.0], [9.8, 1119.0], [9.9, 1119.0], [10.0, 1126.0], [10.1, 1128.0], [10.2, 1128.0], [10.3, 1134.0], [10.4, 1136.0], [10.5, 1141.0], [10.6, 1141.0], [10.7, 1142.0], [10.8, 1147.0], [10.9, 1149.0], [11.0, 1149.0], [11.1, 1153.0], [11.2, 1153.0], [11.3, 1156.0], [11.4, 1156.0], [11.5, 1157.0], [11.6, 1159.0], [11.7, 1159.0], [11.8, 1159.0], [11.9, 1164.0], [12.0, 1168.0], [12.1, 1168.0], [12.2, 1174.0], [12.3, 1176.0], [12.4, 1178.0], [12.5, 1178.0], [12.6, 1181.0], [12.7, 1183.0], [12.8, 1184.0], [12.9, 1184.0], [13.0, 1185.0], [13.1, 1191.0], [13.2, 1194.0], [13.3, 1194.0], [13.4, 1195.0], [13.5, 1197.0], [13.6, 1197.0], [13.7, 1198.0], [13.8, 1199.0], [13.9, 1200.0], [14.0, 1200.0], [14.1, 1201.0], [14.2, 1202.0], [14.3, 1208.0], [14.4, 1208.0], [14.5, 1211.0], [14.6, 1211.0], [14.7, 1214.0], [14.8, 1214.0], [14.9, 1218.0], [15.0, 1220.0], [15.1, 1220.0], [15.2, 1222.0], [15.3, 1223.0], [15.4, 1224.0], [15.5, 1224.0], [15.6, 1227.0], [15.7, 1228.0], [15.8, 1228.0], [15.9, 1228.0], [16.0, 1231.0], [16.1, 1231.0], [16.2, 1233.0], [16.3, 1233.0], [16.4, 1234.0], [16.5, 1238.0], [16.6, 1239.0], [16.7, 1239.0], [16.8, 1242.0], [16.9, 1244.0], [17.0, 1244.0], [17.1, 1250.0], [17.2, 1251.0], [17.3, 1254.0], [17.4, 1254.0], [17.5, 1256.0], [17.6, 1258.0], [17.7, 1261.0], [17.8, 1261.0], [17.9, 1267.0], [18.0, 1268.0], [18.1, 1274.0], [18.2, 1274.0], [18.3, 1275.0], [18.4, 1277.0], [18.5, 1277.0], [18.6, 1279.0], [18.7, 1281.0], [18.8, 1283.0], [18.9, 1283.0], [19.0, 1284.0], [19.1, 1288.0], [19.2, 1288.0], [19.3, 1288.0], [19.4, 1291.0], [19.5, 1292.0], [19.6, 1292.0], [19.7, 1292.0], [19.8, 1292.0], [19.9, 1299.0], [20.0, 1300.0], [20.1, 1300.0], [20.2, 1303.0], [20.3, 1304.0], [20.4, 1304.0], [20.5, 1309.0], [20.6, 1309.0], [20.7, 1310.0], [20.8, 1310.0], [20.9, 1318.0], [21.0, 1318.0], [21.1, 1320.0], [21.2, 1320.0], [21.3, 1322.0], [21.4, 1322.0], [21.5, 1324.0], [21.6, 1324.0], [21.7, 1328.0], [21.8, 1329.0], [21.9, 1329.0], [22.0, 1330.0], [22.1, 1336.0], [22.2, 1338.0], [22.3, 1338.0], [22.4, 1341.0], [22.5, 1344.0], [22.6, 1346.0], [22.7, 1346.0], [22.8, 1349.0], [22.9, 1350.0], [23.0, 1355.0], [23.1, 1355.0], [23.2, 1356.0], [23.3, 1356.0], [23.4, 1356.0], [23.5, 1357.0], [23.6, 1358.0], [23.7, 1358.0], [23.8, 1358.0], [23.9, 1363.0], [24.0, 1363.0], [24.1, 1365.0], [24.2, 1365.0], [24.3, 1366.0], [24.4, 1367.0], [24.5, 1372.0], [24.6, 1372.0], [24.7, 1373.0], [24.8, 1374.0], [24.9, 1375.0], [25.0, 1375.0], [25.1, 1376.0], [25.2, 1377.0], [25.3, 1377.0], [25.4, 1379.0], [25.5, 1380.0], [25.6, 1380.0], [25.7, 1380.0], [25.8, 1389.0], [25.9, 1390.0], [26.0, 1392.0], [26.1, 1392.0], [26.2, 1392.0], [26.3, 1394.0], [26.4, 1398.0], [26.5, 1398.0], [26.6, 1408.0], [26.7, 1410.0], [26.8, 1410.0], [26.9, 1412.0], [27.0, 1412.0], [27.1, 1416.0], [27.2, 1416.0], [27.3, 1419.0], [27.4, 1421.0], [27.5, 1421.0], [27.6, 1421.0], [27.7, 1422.0], [27.8, 1425.0], [27.9, 1427.0], [28.0, 1427.0], [28.1, 1428.0], [28.2, 1429.0], [28.3, 1431.0], [28.4, 1431.0], [28.5, 1435.0], [28.6, 1437.0], [28.7, 1437.0], [28.8, 1438.0], [28.9, 1438.0], [29.0, 1439.0], [29.1, 1439.0], [29.2, 1441.0], [29.3, 1441.0], [29.4, 1443.0], [29.5, 1443.0], [29.6, 1453.0], [29.7, 1456.0], [29.8, 1456.0], [29.9, 1456.0], [30.0, 1456.0], [30.1, 1459.0], [30.2, 1459.0], [30.3, 1459.0], [30.4, 1462.0], [30.5, 1464.0], [30.6, 1464.0], [30.7, 1464.0], [30.8, 1465.0], [30.9, 1465.0], [31.0, 1465.0], [31.1, 1467.0], [31.2, 1468.0], [31.3, 1470.0], [31.4, 1470.0], [31.5, 1471.0], [31.6, 1473.0], [31.7, 1473.0], [31.8, 1476.0], [31.9, 1486.0], [32.0, 1487.0], [32.1, 1487.0], [32.2, 1487.0], [32.3, 1488.0], [32.4, 1489.0], [32.5, 1489.0], [32.6, 1489.0], [32.7, 1494.0], [32.8, 1498.0], [32.9, 1498.0], [33.0, 1499.0], [33.1, 1504.0], [33.2, 1509.0], [33.3, 1509.0], [33.4, 1511.0], [33.5, 1516.0], [33.6, 1516.0], [33.7, 1517.0], [33.8, 1517.0], [33.9, 1518.0], [34.0, 1518.0], [34.1, 1518.0], [34.2, 1523.0], [34.3, 1523.0], [34.4, 1523.0], [34.5, 1524.0], [34.6, 1526.0], [34.7, 1534.0], [34.8, 1534.0], [34.9, 1537.0], [35.0, 1538.0], [35.1, 1538.0], [35.2, 1539.0], [35.3, 1540.0], [35.4, 1543.0], [35.5, 1543.0], [35.6, 1546.0], [35.7, 1547.0], [35.8, 1548.0], [35.9, 1548.0], [36.0, 1550.0], [36.1, 1552.0], [36.2, 1554.0], [36.3, 1554.0], [36.4, 1555.0], [36.5, 1555.0], [36.6, 1556.0], [36.7, 1556.0], [36.8, 1556.0], [36.9, 1557.0], [37.0, 1557.0], [37.1, 1565.0], [37.2, 1566.0], [37.3, 1568.0], [37.4, 1568.0], [37.5, 1573.0], [37.6, 1574.0], [37.7, 1577.0], [37.8, 1577.0], [37.9, 1579.0], [38.0, 1582.0], [38.1, 1582.0], [38.2, 1582.0], [38.3, 1582.0], [38.4, 1583.0], [38.5, 1583.0], [38.6, 1595.0], [38.7, 1597.0], [38.8, 1597.0], [38.9, 1597.0], [39.0, 1601.0], [39.1, 1602.0], [39.2, 1603.0], [39.3, 1603.0], [39.4, 1608.0], [39.5, 1609.0], [39.6, 1610.0], [39.7, 1610.0], [39.8, 1611.0], [39.9, 1613.0], [40.0, 1616.0], [40.1, 1616.0], [40.2, 1620.0], [40.3, 1622.0], [40.4, 1622.0], [40.5, 1622.0], [40.6, 1622.0], [40.7, 1626.0], [40.8, 1626.0], [40.9, 1628.0], [41.0, 1628.0], [41.1, 1628.0], [41.2, 1628.0], [41.3, 1631.0], [41.4, 1633.0], [41.5, 1634.0], [41.6, 1634.0], [41.7, 1645.0], [41.8, 1650.0], [41.9, 1650.0], [42.0, 1652.0], [42.1, 1655.0], [42.2, 1655.0], [42.3, 1655.0], [42.4, 1655.0], [42.5, 1656.0], [42.6, 1657.0], [42.7, 1657.0], [42.8, 1657.0], [42.9, 1657.0], [43.0, 1657.0], [43.1, 1657.0], [43.2, 1659.0], [43.3, 1659.0], [43.4, 1659.0], [43.5, 1661.0], [43.6, 1662.0], [43.7, 1662.0], [43.8, 1662.0], [43.9, 1662.0], [44.0, 1663.0], [44.1, 1675.0], [44.2, 1675.0], [44.3, 1676.0], [44.4, 1677.0], [44.5, 1677.0], [44.6, 1677.0], [44.7, 1678.0], [44.8, 1681.0], [44.9, 1683.0], [45.0, 1683.0], [45.1, 1687.0], [45.2, 1689.0], [45.3, 1689.0], [45.4, 1692.0], [45.5, 1693.0], [45.6, 1695.0], [45.7, 1695.0], [45.8, 1696.0], [45.9, 1705.0], [46.0, 1708.0], [46.1, 1708.0], [46.2, 1710.0], [46.3, 1710.0], [46.4, 1715.0], [46.5, 1715.0], [46.6, 1716.0], [46.7, 1716.0], [46.8, 1716.0], [46.9, 1717.0], [47.0, 1717.0], [47.1, 1721.0], [47.2, 1721.0], [47.3, 1721.0], [47.4, 1727.0], [47.5, 1730.0], [47.6, 1730.0], [47.7, 1732.0], [47.8, 1733.0], [47.9, 1734.0], [48.0, 1734.0], [48.1, 1735.0], [48.2, 1735.0], [48.3, 1737.0], [48.4, 1737.0], [48.5, 1741.0], [48.6, 1741.0], [48.7, 1741.0], [48.8, 1741.0], [48.9, 1744.0], [49.0, 1745.0], [49.1, 1745.0], [49.2, 1746.0], [49.3, 1751.0], [49.4, 1751.0], [49.5, 1751.0], [49.6, 1752.0], [49.7, 1755.0], [49.8, 1755.0], [49.9, 1755.0], [50.0, 1757.0], [50.1, 1757.0], [50.2, 1757.0], [50.3, 1758.0], [50.4, 1762.0], [50.5, 1763.0], [50.6, 1763.0], [50.7, 1764.0], [50.8, 1769.0], [50.9, 1771.0], [51.0, 1771.0], [51.1, 1771.0], [51.2, 1773.0], [51.3, 1775.0], [51.4, 1775.0], [51.5, 1777.0], [51.6, 1778.0], [51.7, 1778.0], [51.8, 1780.0], [51.9, 1780.0], [52.0, 1781.0], [52.1, 1781.0], [52.2, 1781.0], [52.3, 1782.0], [52.4, 1785.0], [52.5, 1785.0], [52.6, 1787.0], [52.7, 1792.0], [52.8, 1797.0], [52.9, 1797.0], [53.0, 1797.0], [53.1, 1797.0], [53.2, 1798.0], [53.3, 1798.0], [53.4, 1799.0], [53.5, 1801.0], [53.6, 1801.0], [53.7, 1803.0], [53.8, 1804.0], [53.9, 1805.0], [54.0, 1805.0], [54.1, 1805.0], [54.2, 1805.0], [54.3, 1806.0], [54.4, 1806.0], [54.5, 1807.0], [54.6, 1807.0], [54.7, 1809.0], [54.8, 1809.0], [54.9, 1813.0], [55.0, 1813.0], [55.1, 1813.0], [55.2, 1816.0], [55.3, 1823.0], [55.4, 1825.0], [55.5, 1825.0], [55.6, 1825.0], [55.7, 1825.0], [55.8, 1827.0], [55.9, 1827.0], [56.0, 1828.0], [56.1, 1829.0], [56.2, 1832.0], [56.3, 1832.0], [56.4, 1833.0], [56.5, 1835.0], [56.6, 1836.0], [56.7, 1836.0], [56.8, 1839.0], [56.9, 1839.0], [57.0, 1839.0], [57.1, 1839.0], [57.2, 1840.0], [57.3, 1840.0], [57.4, 1840.0], [57.5, 1841.0], [57.6, 1843.0], [57.7, 1845.0], [57.8, 1845.0], [57.9, 1848.0], [58.0, 1848.0], [58.1, 1852.0], [58.2, 1852.0], [58.3, 1852.0], [58.4, 1854.0], [58.5, 1854.0], [58.6, 1854.0], [58.7, 1856.0], [58.8, 1857.0], [58.9, 1857.0], [59.0, 1857.0], [59.1, 1858.0], [59.2, 1859.0], [59.3, 1859.0], [59.4, 1861.0], [59.5, 1862.0], [59.6, 1864.0], [59.7, 1864.0], [59.8, 1865.0], [59.9, 1875.0], [60.0, 1876.0], [60.1, 1876.0], [60.2, 1886.0], [60.3, 1889.0], [60.4, 1889.0], [60.5, 1891.0], [60.6, 1892.0], [60.7, 1894.0], [60.8, 1894.0], [60.9, 1896.0], [61.0, 1897.0], [61.1, 1897.0], [61.2, 1897.0], [61.3, 1898.0], [61.4, 1902.0], [61.5, 1903.0], [61.6, 1903.0], [61.7, 1904.0], [61.8, 1907.0], [61.9, 1907.0], [62.0, 1908.0], [62.1, 1908.0], [62.2, 1909.0], [62.3, 1909.0], [62.4, 1911.0], [62.5, 1913.0], [62.6, 1913.0], [62.7, 1913.0], [62.8, 1914.0], [62.9, 1916.0], [63.0, 1916.0], [63.1, 1916.0], [63.2, 1919.0], [63.3, 1926.0], [63.4, 1926.0], [63.5, 1926.0], [63.6, 1926.0], [63.7, 1929.0], [63.8, 1929.0], [63.9, 1929.0], [64.0, 1930.0], [64.1, 1930.0], [64.2, 1930.0], [64.3, 1931.0], [64.4, 1932.0], [64.5, 1932.0], [64.6, 1932.0], [64.7, 1933.0], [64.8, 1934.0], [64.9, 1936.0], [65.0, 1936.0], [65.1, 1938.0], [65.2, 1938.0], [65.3, 1938.0], [65.4, 1942.0], [65.5, 1947.0], [65.6, 1948.0], [65.7, 1948.0], [65.8, 1948.0], [65.9, 1949.0], [66.0, 1951.0], [66.1, 1951.0], [66.2, 1954.0], [66.3, 1955.0], [66.4, 1958.0], [66.5, 1958.0], [66.6, 1959.0], [66.7, 1964.0], [66.8, 1964.0], [66.9, 1965.0], [67.0, 1966.0], [67.1, 1971.0], [67.2, 1971.0], [67.3, 1972.0], [67.4, 1974.0], [67.5, 1979.0], [67.6, 1979.0], [67.7, 1980.0], [67.8, 1984.0], [67.9, 1985.0], [68.0, 1985.0], [68.1, 1986.0], [68.2, 1990.0], [68.3, 1991.0], [68.4, 1991.0], [68.5, 1992.0], [68.6, 1994.0], [68.7, 1994.0], [68.8, 1995.0], [68.9, 1997.0], [69.0, 1997.0], [69.1, 1997.0], [69.2, 1998.0], [69.3, 1998.0], [69.4, 2000.0], [69.5, 2000.0], [69.6, 2000.0], [69.7, 2001.0], [69.8, 2004.0], [69.9, 2004.0], [70.0, 2008.0], [70.1, 2008.0], [70.2, 2008.0], [70.3, 2009.0], [70.4, 2013.0], [70.5, 2013.0], [70.6, 2013.0], [70.7, 2014.0], [70.8, 2016.0], [70.9, 2017.0], [71.0, 2017.0], [71.1, 2022.0], [71.2, 2024.0], [71.3, 2025.0], [71.4, 2025.0], [71.5, 2026.0], [71.6, 2032.0], [71.7, 2032.0], [71.8, 2034.0], [71.9, 2035.0], [72.0, 2037.0], [72.1, 2037.0], [72.2, 2037.0], [72.3, 2038.0], [72.4, 2038.0], [72.5, 2038.0], [72.6, 2039.0], [72.7, 2044.0], [72.8, 2045.0], [72.9, 2045.0], [73.0, 2046.0], [73.1, 2054.0], [73.2, 2054.0], [73.3, 2054.0], [73.4, 2061.0], [73.5, 2062.0], [73.6, 2062.0], [73.7, 2064.0], [73.8, 2064.0], [73.9, 2068.0], [74.0, 2068.0], [74.1, 2079.0], [74.2, 2080.0], [74.3, 2081.0], [74.4, 2081.0], [74.5, 2082.0], [74.6, 2084.0], [74.7, 2093.0], [74.8, 2093.0], [74.9, 2102.0], [75.0, 2104.0], [75.1, 2104.0], [75.2, 2106.0], [75.3, 2108.0], [75.4, 2110.0], [75.5, 2110.0], [75.6, 2111.0], [75.7, 2117.0], [75.8, 2121.0], [75.9, 2121.0], [76.0, 2129.0], [76.1, 2132.0], [76.2, 2133.0], [76.3, 2133.0], [76.4, 2135.0], [76.5, 2136.0], [76.6, 2139.0], [76.7, 2139.0], [76.8, 2144.0], [76.9, 2145.0], [77.0, 2145.0], [77.1, 2147.0], [77.2, 2149.0], [77.3, 2150.0], [77.4, 2150.0], [77.5, 2151.0], [77.6, 2153.0], [77.7, 2153.0], [77.8, 2153.0], [77.9, 2158.0], [78.0, 2160.0], [78.1, 2162.0], [78.2, 2162.0], [78.3, 2164.0], [78.4, 2165.0], [78.5, 2165.0], [78.6, 2166.0], [78.7, 2166.0], [78.8, 2167.0], [78.9, 2167.0], [79.0, 2167.0], [79.1, 2168.0], [79.2, 2168.0], [79.3, 2168.0], [79.4, 2169.0], [79.5, 2170.0], [79.6, 2174.0], [79.7, 2174.0], [79.8, 2175.0], [79.9, 2176.0], [80.0, 2176.0], [80.1, 2176.0], [80.2, 2176.0], [80.3, 2178.0], [80.4, 2178.0], [80.5, 2179.0], [80.6, 2180.0], [80.7, 2182.0], [80.8, 2182.0], [80.9, 2187.0], [81.0, 2187.0], [81.1, 2189.0], [81.2, 2189.0], [81.3, 2189.0], [81.4, 2197.0], [81.5, 2201.0], [81.6, 2201.0], [81.7, 2204.0], [81.8, 2208.0], [81.9, 2208.0], [82.0, 2215.0], [82.1, 2215.0], [82.2, 2219.0], [82.3, 2219.0], [82.4, 2225.0], [82.5, 2227.0], [82.6, 2227.0], [82.7, 2227.0], [82.8, 2230.0], [82.9, 2231.0], [83.0, 2232.0], [83.1, 2232.0], [83.2, 2236.0], [83.3, 2236.0], [83.4, 2236.0], [83.5, 2237.0], [83.6, 2239.0], [83.7, 2240.0], [83.8, 2240.0], [83.9, 2244.0], [84.0, 2245.0], [84.1, 2245.0], [84.2, 2245.0], [84.3, 2246.0], [84.4, 2255.0], [84.5, 2258.0], [84.6, 2258.0], [84.7, 2259.0], [84.8, 2260.0], [84.9, 2265.0], [85.0, 2265.0], [85.1, 2282.0], [85.2, 2285.0], [85.3, 2285.0], [85.4, 2287.0], [85.5, 2287.0], [85.6, 2303.0], [85.7, 2303.0], [85.8, 2310.0], [85.9, 2312.0], [86.0, 2313.0], [86.1, 2313.0], [86.2, 2316.0], [86.3, 2317.0], [86.4, 2321.0], [86.5, 2321.0], [86.6, 2321.0], [86.7, 2321.0], [86.8, 2321.0], [86.9, 2327.0], [87.0, 2333.0], [87.1, 2341.0], [87.2, 2341.0], [87.3, 2346.0], [87.4, 2366.0], [87.5, 2368.0], [87.6, 2368.0], [87.7, 2370.0], [87.8, 2382.0], [87.9, 2386.0], [88.0, 2386.0], [88.1, 2387.0], [88.2, 2391.0], [88.3, 2396.0], [88.4, 2396.0], [88.5, 2403.0], [88.6, 2404.0], [88.7, 2404.0], [88.8, 2404.0], [88.9, 2406.0], [89.0, 2409.0], [89.1, 2409.0], [89.2, 2421.0], [89.3, 2429.0], [89.4, 2433.0], [89.5, 2433.0], [89.6, 2434.0], [89.7, 2441.0], [89.8, 2449.0], [89.9, 2449.0], [90.0, 2455.0], [90.1, 2457.0], [90.2, 2457.0], [90.3, 2459.0], [90.4, 2460.0], [90.5, 2463.0], [90.6, 2463.0], [90.7, 2472.0], [90.8, 2478.0], [90.9, 2496.0], [91.0, 2496.0], [91.1, 2513.0], [91.2, 2520.0], [91.3, 2528.0], [91.4, 2528.0], [91.5, 2534.0], [91.6, 2538.0], [91.7, 2538.0], [91.8, 2539.0], [91.9, 2545.0], [92.0, 2554.0], [92.1, 2554.0], [92.2, 2564.0], [92.3, 2569.0], [92.4, 2572.0], [92.5, 2572.0], [92.6, 2573.0], [92.7, 2579.0], [92.8, 2582.0], [92.9, 2582.0], [93.0, 2593.0], [93.1, 2602.0], [93.2, 2618.0], [93.3, 2618.0], [93.4, 2624.0], [93.5, 2624.0], [93.6, 2624.0], [93.7, 2628.0], [93.8, 2633.0], [93.9, 2643.0], [94.0, 2643.0], [94.1, 2651.0], [94.2, 2663.0], [94.3, 2664.0], [94.4, 2664.0], [94.5, 2667.0], [94.6, 2697.0], [94.7, 2721.0], [94.8, 2721.0], [94.9, 2722.0], [95.0, 2742.0], [95.1, 2742.0], [95.2, 2793.0], [95.3, 2794.0], [95.4, 2813.0], [95.5, 2813.0], [95.6, 2847.0], [95.7, 2847.0], [95.8, 2848.0], [95.9, 2848.0], [96.0, 2851.0], [96.1, 2854.0], [96.2, 2890.0], [96.3, 2890.0], [96.4, 2905.0], [96.5, 2915.0], [96.6, 2925.0], [96.7, 2925.0], [96.8, 2963.0], [96.9, 2976.0], [97.0, 2976.0], [97.1, 2976.0], [97.2, 2996.0], [97.3, 3011.0], [97.4, 3011.0], [97.5, 3088.0], [97.6, 3096.0], [97.7, 3108.0], [97.8, 3108.0], [97.9, 3337.0], [98.0, 3348.0], [98.1, 3374.0], [98.2, 3374.0], [98.3, 3465.0], [98.4, 3490.0], [98.5, 3490.0], [98.6, 3491.0], [98.7, 3573.0], [98.8, 3624.0], [98.9, 3624.0], [99.0, 3798.0], [99.1, 3916.0], [99.2, 3961.0], [99.3, 3961.0], [99.4, 4076.0], [99.5, 4230.0], [99.6, 4273.0], [99.7, 4273.0], [99.8, 4430.0], [99.9, 4661.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 500.0, "maxY": 59.0, "series": [{"data": [[600.0, 1.0], [700.0, 7.0], [800.0, 6.0], [900.0, 15.0], [1000.0, 31.0], [1100.0, 41.0], [1200.0, 45.0], [1300.0, 48.0], [1400.0, 48.0], [1500.0, 43.0], [1600.0, 51.0], [1700.0, 56.0], [1800.0, 58.0], [1900.0, 59.0], [2000.0, 40.0], [2100.0, 49.0], [2200.0, 30.0], [2300.0, 21.0], [2400.0, 19.0], [2500.0, 15.0], [2600.0, 12.0], [2700.0, 5.0], [2800.0, 7.0], [2900.0, 7.0], [3000.0, 3.0], [3100.0, 1.0], [3300.0, 3.0], [3400.0, 3.0], [3500.0, 1.0], [3600.0, 1.0], [3700.0, 1.0], [3900.0, 2.0], [4000.0, 1.0], [4200.0, 2.0], [4600.0, 1.0], [4400.0, 1.0], [500.0, 1.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 4600.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 243.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 492.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 243.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 492.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 4.0, "minX": 1.60232244E12, "maxY": 12.0, "series": [{"data": [[1.6023225E12, 11.97584541062802], [1.60232256E12, 4.0], [1.60232244E12, 12.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60232256E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 1066.0, "minX": 1.0, "maxY": 1796.9378453038669, "series": [{"data": [[8.0, 1095.0], [4.0, 1178.0], [2.0, 1489.0], [1.0, 1441.0], [9.0, 1128.0], [10.0, 1066.0], [5.0, 1071.0], [11.0, 1486.0], [12.0, 1796.9378453038669], [6.0, 1547.0], [3.0, 1518.0], [7.0, 1197.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[11.910204081632651, 1789.3863945578225]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 12.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 48.61666666666667, "minX": 1.60232244E12, "maxY": 1009512.3, "series": [{"data": [[1.6023225E12, 1009512.3], [1.60232256E12, 8730.966666666667], [1.60232244E12, 817531.4333333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6023225E12, 3104.65], [1.60232256E12, 48.61666666666667], [1.60232244E12, 2369.766666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60232256E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 1348.7142857142858, "minX": 1.60232244E12, "maxY": 1864.496815286624, "series": [{"data": [[1.6023225E12, 1739.8695652173922], [1.60232256E12, 1348.7142857142858], [1.60232244E12, 1864.496815286624]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60232256E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 1348.2857142857142, "minX": 1.60232244E12, "maxY": 1863.4203821656045, "series": [{"data": [[1.6023225E12, 1738.823671497583], [1.60232256E12, 1348.2857142857142], [1.60232244E12, 1863.4203821656045]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60232256E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.60232244E12, "maxY": 0.369426751592356, "series": [{"data": [[1.6023225E12, 0.03381642512077299], [1.60232256E12, 0.0], [1.60232244E12, 0.369426751592356]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60232256E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 567.0, "minX": 1.60232244E12, "maxY": 4661.0, "series": [{"data": [[1.6023225E12, 4076.0], [1.60232256E12, 1547.0], [1.60232244E12, 4661.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6023225E12, 733.9399996042251], [1.60232256E12, 1071.0], [1.60232244E12, 784.6799993991851]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6023225E12, 736.5190005540848], [1.60232256E12, 1071.0], [1.60232244E12, 786.9480002403259]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6023225E12, 734.7699998021126], [1.60232256E12, 1071.0], [1.60232244E12, 785.9399996995926]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.6023225E12, 567.0], [1.60232256E12, 1071.0], [1.60232244E12, 750.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6023225E12, 1660.0], [1.60232256E12, 1441.0], [1.60232244E12, 1850.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60232256E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 1120.5, "minX": 3.0, "maxY": 2573.5, "series": [{"data": [[4.0, 1914.5], [8.0, 1782.0], [9.0, 1486.0], [10.0, 1272.0], [5.0, 2022.0], [11.0, 1120.5], [3.0, 2573.5], [6.0, 1929.5], [12.0, 1144.5], [7.0, 1717.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 12.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 1120.5, "minX": 3.0, "maxY": 2570.5, "series": [{"data": [[4.0, 1913.0], [8.0, 1781.5], [9.0, 1486.0], [10.0, 1272.0], [5.0, 2020.0], [11.0, 1120.5], [3.0, 2570.5], [6.0, 1929.0], [12.0, 1144.5], [7.0, 1716.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 12.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 5.433333333333334, "minX": 1.60232244E12, "maxY": 6.816666666666666, "series": [{"data": [[1.6023225E12, 6.816666666666666], [1.60232244E12, 5.433333333333334]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6023225E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.11666666666666667, "minX": 1.60232244E12, "maxY": 6.9, "series": [{"data": [[1.6023225E12, 6.9], [1.60232256E12, 0.11666666666666667], [1.60232244E12, 5.233333333333333]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60232256E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.11666666666666667, "minX": 1.60232244E12, "maxY": 6.9, "series": [{"data": [[1.6023225E12, 6.9], [1.60232256E12, 0.11666666666666667], [1.60232244E12, 5.233333333333333]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60232256E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.11666666666666667, "minX": 1.60232244E12, "maxY": 6.9, "series": [{"data": [[1.6023225E12, 6.9], [1.60232256E12, 0.11666666666666667], [1.60232244E12, 5.233333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60232256E12, "title": "Total Transactions Per Second"}},
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

