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
        data: {"result": {"minY": 621.0, "minX": 0.0, "maxY": 4649.0, "series": [{"data": [[0.0, 621.0], [0.1, 621.0], [0.2, 723.0], [0.3, 745.0], [0.4, 745.0], [0.5, 835.0], [0.6, 877.0], [0.7, 878.0], [0.8, 878.0], [0.9, 919.0], [1.0, 921.0], [1.1, 922.0], [1.2, 922.0], [1.3, 941.0], [1.4, 949.0], [1.5, 955.0], [1.6, 955.0], [1.7, 963.0], [1.8, 967.0], [1.9, 967.0], [2.0, 976.0], [2.1, 979.0], [2.2, 987.0], [2.3, 987.0], [2.4, 1002.0], [2.5, 1003.0], [2.6, 1007.0], [2.7, 1007.0], [2.8, 1015.0], [2.9, 1025.0], [3.0, 1036.0], [3.1, 1036.0], [3.2, 1046.0], [3.3, 1049.0], [3.4, 1049.0], [3.5, 1050.0], [3.6, 1052.0], [3.7, 1053.0], [3.8, 1053.0], [3.9, 1055.0], [4.0, 1062.0], [4.1, 1065.0], [4.2, 1065.0], [4.3, 1068.0], [4.4, 1076.0], [4.5, 1087.0], [4.6, 1087.0], [4.7, 1095.0], [4.8, 1096.0], [4.9, 1099.0], [5.0, 1099.0], [5.1, 1099.0], [5.2, 1100.0], [5.3, 1100.0], [5.4, 1106.0], [5.5, 1107.0], [5.6, 1109.0], [5.7, 1109.0], [5.8, 1110.0], [5.9, 1112.0], [6.0, 1113.0], [6.1, 1113.0], [6.2, 1115.0], [6.3, 1119.0], [6.4, 1119.0], [6.5, 1119.0], [6.6, 1120.0], [6.7, 1128.0], [6.8, 1128.0], [6.9, 1130.0], [7.0, 1136.0], [7.1, 1136.0], [7.2, 1136.0], [7.3, 1136.0], [7.4, 1136.0], [7.5, 1139.0], [7.6, 1139.0], [7.7, 1140.0], [7.8, 1142.0], [7.9, 1144.0], [8.0, 1144.0], [8.1, 1145.0], [8.2, 1145.0], [8.3, 1146.0], [8.4, 1146.0], [8.5, 1147.0], [8.6, 1148.0], [8.7, 1148.0], [8.8, 1151.0], [8.9, 1155.0], [9.0, 1156.0], [9.1, 1156.0], [9.2, 1157.0], [9.3, 1158.0], [9.4, 1158.0], [9.5, 1158.0], [9.6, 1159.0], [9.7, 1159.0], [9.8, 1160.0], [9.9, 1160.0], [10.0, 1163.0], [10.1, 1164.0], [10.2, 1164.0], [10.3, 1164.0], [10.4, 1164.0], [10.5, 1167.0], [10.6, 1167.0], [10.7, 1171.0], [10.8, 1175.0], [10.9, 1176.0], [11.0, 1176.0], [11.1, 1180.0], [11.2, 1180.0], [11.3, 1183.0], [11.4, 1183.0], [11.5, 1184.0], [11.6, 1185.0], [11.7, 1185.0], [11.8, 1186.0], [11.9, 1189.0], [12.0, 1190.0], [12.1, 1190.0], [12.2, 1192.0], [12.3, 1194.0], [12.4, 1194.0], [12.5, 1194.0], [12.6, 1199.0], [12.7, 1199.0], [12.8, 1201.0], [12.9, 1201.0], [13.0, 1205.0], [13.1, 1205.0], [13.2, 1210.0], [13.3, 1210.0], [13.4, 1210.0], [13.5, 1211.0], [13.6, 1211.0], [13.7, 1213.0], [13.8, 1214.0], [13.9, 1214.0], [14.0, 1214.0], [14.1, 1215.0], [14.2, 1218.0], [14.3, 1219.0], [14.4, 1219.0], [14.5, 1219.0], [14.6, 1223.0], [14.7, 1225.0], [14.8, 1225.0], [14.9, 1226.0], [15.0, 1226.0], [15.1, 1226.0], [15.2, 1227.0], [15.3, 1228.0], [15.4, 1230.0], [15.5, 1230.0], [15.6, 1231.0], [15.7, 1233.0], [15.8, 1233.0], [15.9, 1233.0], [16.0, 1236.0], [16.1, 1236.0], [16.2, 1239.0], [16.3, 1239.0], [16.4, 1240.0], [16.5, 1241.0], [16.6, 1242.0], [16.7, 1242.0], [16.8, 1243.0], [16.9, 1247.0], [17.0, 1247.0], [17.1, 1249.0], [17.2, 1251.0], [17.3, 1252.0], [17.4, 1252.0], [17.5, 1252.0], [17.6, 1253.0], [17.7, 1254.0], [17.8, 1254.0], [17.9, 1255.0], [18.0, 1256.0], [18.1, 1257.0], [18.2, 1257.0], [18.3, 1259.0], [18.4, 1261.0], [18.5, 1261.0], [18.6, 1263.0], [18.7, 1264.0], [18.8, 1264.0], [18.9, 1264.0], [19.0, 1266.0], [19.1, 1271.0], [19.2, 1273.0], [19.3, 1273.0], [19.4, 1281.0], [19.5, 1281.0], [19.6, 1282.0], [19.7, 1282.0], [19.8, 1283.0], [19.9, 1284.0], [20.0, 1284.0], [20.1, 1286.0], [20.2, 1290.0], [20.3, 1291.0], [20.4, 1291.0], [20.5, 1291.0], [20.6, 1293.0], [20.7, 1294.0], [20.8, 1294.0], [20.9, 1294.0], [21.0, 1301.0], [21.1, 1301.0], [21.2, 1301.0], [21.3, 1303.0], [21.4, 1303.0], [21.5, 1307.0], [21.6, 1307.0], [21.7, 1311.0], [21.8, 1312.0], [21.9, 1312.0], [22.0, 1312.0], [22.1, 1319.0], [22.2, 1321.0], [22.3, 1321.0], [22.4, 1322.0], [22.5, 1325.0], [22.6, 1326.0], [22.7, 1326.0], [22.8, 1327.0], [22.9, 1328.0], [23.0, 1330.0], [23.1, 1330.0], [23.2, 1332.0], [23.3, 1335.0], [23.4, 1335.0], [23.5, 1338.0], [23.6, 1341.0], [23.7, 1343.0], [23.8, 1343.0], [23.9, 1343.0], [24.0, 1348.0], [24.1, 1349.0], [24.2, 1349.0], [24.3, 1355.0], [24.4, 1356.0], [24.5, 1357.0], [24.6, 1357.0], [24.7, 1359.0], [24.8, 1361.0], [24.9, 1362.0], [25.0, 1362.0], [25.1, 1365.0], [25.2, 1365.0], [25.3, 1365.0], [25.4, 1366.0], [25.5, 1369.0], [25.6, 1372.0], [25.7, 1372.0], [25.8, 1378.0], [25.9, 1378.0], [26.0, 1381.0], [26.1, 1381.0], [26.2, 1383.0], [26.3, 1385.0], [26.4, 1389.0], [26.5, 1389.0], [26.6, 1390.0], [26.7, 1394.0], [26.8, 1394.0], [26.9, 1394.0], [27.0, 1397.0], [27.1, 1399.0], [27.2, 1399.0], [27.3, 1400.0], [27.4, 1405.0], [27.5, 1407.0], [27.6, 1407.0], [27.7, 1414.0], [27.8, 1414.0], [27.9, 1415.0], [28.0, 1415.0], [28.1, 1422.0], [28.2, 1424.0], [28.3, 1427.0], [28.4, 1427.0], [28.5, 1429.0], [28.6, 1430.0], [28.7, 1430.0], [28.8, 1434.0], [28.9, 1436.0], [29.0, 1439.0], [29.1, 1439.0], [29.2, 1441.0], [29.3, 1446.0], [29.4, 1452.0], [29.5, 1452.0], [29.6, 1453.0], [29.7, 1455.0], [29.8, 1457.0], [29.9, 1457.0], [30.0, 1460.0], [30.1, 1466.0], [30.2, 1466.0], [30.3, 1468.0], [30.4, 1475.0], [30.5, 1476.0], [30.6, 1476.0], [30.7, 1479.0], [30.8, 1482.0], [30.9, 1489.0], [31.0, 1489.0], [31.1, 1495.0], [31.2, 1496.0], [31.3, 1497.0], [31.4, 1497.0], [31.5, 1511.0], [31.6, 1512.0], [31.7, 1512.0], [31.8, 1514.0], [31.9, 1514.0], [32.0, 1517.0], [32.1, 1517.0], [32.2, 1518.0], [32.3, 1519.0], [32.4, 1524.0], [32.5, 1524.0], [32.6, 1526.0], [32.7, 1528.0], [32.8, 1529.0], [32.9, 1529.0], [33.0, 1529.0], [33.1, 1531.0], [33.2, 1534.0], [33.3, 1534.0], [33.4, 1535.0], [33.5, 1535.0], [33.6, 1535.0], [33.7, 1535.0], [33.8, 1536.0], [33.9, 1537.0], [34.0, 1537.0], [34.1, 1539.0], [34.2, 1540.0], [34.3, 1543.0], [34.4, 1543.0], [34.5, 1544.0], [34.6, 1545.0], [34.7, 1548.0], [34.8, 1548.0], [34.9, 1554.0], [35.0, 1555.0], [35.1, 1555.0], [35.2, 1557.0], [35.3, 1558.0], [35.4, 1558.0], [35.5, 1558.0], [35.6, 1562.0], [35.7, 1565.0], [35.8, 1565.0], [35.9, 1565.0], [36.0, 1567.0], [36.1, 1568.0], [36.2, 1571.0], [36.3, 1571.0], [36.4, 1571.0], [36.5, 1573.0], [36.6, 1576.0], [36.7, 1576.0], [36.8, 1576.0], [36.9, 1577.0], [37.0, 1577.0], [37.1, 1579.0], [37.2, 1579.0], [37.3, 1583.0], [37.4, 1583.0], [37.5, 1591.0], [37.6, 1591.0], [37.7, 1593.0], [37.8, 1593.0], [37.9, 1597.0], [38.0, 1603.0], [38.1, 1605.0], [38.2, 1605.0], [38.3, 1607.0], [38.4, 1609.0], [38.5, 1609.0], [38.6, 1610.0], [38.7, 1610.0], [38.8, 1611.0], [38.9, 1611.0], [39.0, 1619.0], [39.1, 1623.0], [39.2, 1624.0], [39.3, 1624.0], [39.4, 1636.0], [39.5, 1637.0], [39.6, 1638.0], [39.7, 1638.0], [39.8, 1640.0], [39.9, 1641.0], [40.0, 1647.0], [40.1, 1647.0], [40.2, 1652.0], [40.3, 1652.0], [40.4, 1652.0], [40.5, 1654.0], [40.6, 1654.0], [40.7, 1655.0], [40.8, 1655.0], [40.9, 1656.0], [41.0, 1656.0], [41.1, 1657.0], [41.2, 1657.0], [41.3, 1666.0], [41.4, 1666.0], [41.5, 1672.0], [41.6, 1672.0], [41.7, 1674.0], [41.8, 1677.0], [41.9, 1677.0], [42.0, 1679.0], [42.1, 1679.0], [42.2, 1688.0], [42.3, 1688.0], [42.4, 1694.0], [42.5, 1696.0], [42.6, 1698.0], [42.7, 1698.0], [42.8, 1702.0], [42.9, 1709.0], [43.0, 1709.0], [43.1, 1709.0], [43.2, 1709.0], [43.3, 1710.0], [43.4, 1710.0], [43.5, 1711.0], [43.6, 1715.0], [43.7, 1715.0], [43.8, 1715.0], [43.9, 1718.0], [44.0, 1718.0], [44.1, 1722.0], [44.2, 1722.0], [44.3, 1723.0], [44.4, 1723.0], [44.5, 1725.0], [44.6, 1725.0], [44.7, 1726.0], [44.8, 1726.0], [44.9, 1729.0], [45.0, 1729.0], [45.1, 1734.0], [45.2, 1737.0], [45.3, 1737.0], [45.4, 1740.0], [45.5, 1742.0], [45.6, 1746.0], [45.7, 1746.0], [45.8, 1747.0], [45.9, 1748.0], [46.0, 1750.0], [46.1, 1750.0], [46.2, 1753.0], [46.3, 1755.0], [46.4, 1758.0], [46.5, 1758.0], [46.6, 1760.0], [46.7, 1760.0], [46.8, 1760.0], [46.9, 1761.0], [47.0, 1761.0], [47.1, 1763.0], [47.2, 1763.0], [47.3, 1764.0], [47.4, 1768.0], [47.5, 1768.0], [47.6, 1768.0], [47.7, 1770.0], [47.8, 1770.0], [47.9, 1775.0], [48.0, 1775.0], [48.1, 1775.0], [48.2, 1776.0], [48.3, 1777.0], [48.4, 1777.0], [48.5, 1777.0], [48.6, 1778.0], [48.7, 1778.0], [48.8, 1780.0], [48.9, 1782.0], [49.0, 1783.0], [49.1, 1783.0], [49.2, 1784.0], [49.3, 1785.0], [49.4, 1785.0], [49.5, 1785.0], [49.6, 1785.0], [49.7, 1786.0], [49.8, 1787.0], [49.9, 1787.0], [50.0, 1787.0], [50.1, 1791.0], [50.2, 1791.0], [50.3, 1793.0], [50.4, 1796.0], [50.5, 1797.0], [50.6, 1797.0], [50.7, 1800.0], [50.8, 1801.0], [50.9, 1802.0], [51.0, 1802.0], [51.1, 1803.0], [51.2, 1804.0], [51.3, 1806.0], [51.4, 1806.0], [51.5, 1806.0], [51.6, 1806.0], [51.7, 1806.0], [51.8, 1814.0], [51.9, 1814.0], [52.0, 1814.0], [52.1, 1814.0], [52.2, 1817.0], [52.3, 1817.0], [52.4, 1817.0], [52.5, 1817.0], [52.6, 1822.0], [52.7, 1823.0], [52.8, 1823.0], [52.9, 1823.0], [53.0, 1824.0], [53.1, 1826.0], [53.2, 1828.0], [53.3, 1828.0], [53.4, 1830.0], [53.5, 1833.0], [53.6, 1833.0], [53.7, 1834.0], [53.8, 1835.0], [53.9, 1837.0], [54.0, 1837.0], [54.1, 1837.0], [54.2, 1837.0], [54.3, 1839.0], [54.4, 1839.0], [54.5, 1844.0], [54.6, 1847.0], [54.7, 1848.0], [54.8, 1848.0], [54.9, 1849.0], [55.0, 1853.0], [55.1, 1853.0], [55.2, 1853.0], [55.3, 1855.0], [55.4, 1855.0], [55.5, 1855.0], [55.6, 1857.0], [55.7, 1860.0], [55.8, 1864.0], [55.9, 1864.0], [56.0, 1867.0], [56.1, 1868.0], [56.2, 1869.0], [56.3, 1869.0], [56.4, 1869.0], [56.5, 1871.0], [56.6, 1871.0], [56.7, 1871.0], [56.8, 1871.0], [56.9, 1872.0], [57.0, 1872.0], [57.1, 1875.0], [57.2, 1876.0], [57.3, 1877.0], [57.4, 1877.0], [57.5, 1882.0], [57.6, 1882.0], [57.7, 1887.0], [57.8, 1887.0], [57.9, 1889.0], [58.0, 1892.0], [58.1, 1895.0], [58.2, 1895.0], [58.3, 1896.0], [58.4, 1899.0], [58.5, 1899.0], [58.6, 1899.0], [58.7, 1900.0], [58.8, 1900.0], [58.9, 1900.0], [59.0, 1901.0], [59.1, 1901.0], [59.2, 1902.0], [59.3, 1902.0], [59.4, 1904.0], [59.5, 1906.0], [59.6, 1907.0], [59.7, 1907.0], [59.8, 1908.0], [59.9, 1908.0], [60.0, 1909.0], [60.1, 1909.0], [60.2, 1913.0], [60.3, 1913.0], [60.4, 1913.0], [60.5, 1916.0], [60.6, 1917.0], [60.7, 1918.0], [60.8, 1918.0], [60.9, 1918.0], [61.0, 1921.0], [61.1, 1922.0], [61.2, 1922.0], [61.3, 1922.0], [61.4, 1922.0], [61.5, 1923.0], [61.6, 1923.0], [61.7, 1923.0], [61.8, 1926.0], [61.9, 1926.0], [62.0, 1931.0], [62.1, 1932.0], [62.2, 1938.0], [62.3, 1938.0], [62.4, 1938.0], [62.5, 1939.0], [62.6, 1941.0], [62.7, 1941.0], [62.8, 1942.0], [62.9, 1944.0], [63.0, 1944.0], [63.1, 1944.0], [63.2, 1947.0], [63.3, 1949.0], [63.4, 1949.0], [63.5, 1951.0], [63.6, 1952.0], [63.7, 1953.0], [63.8, 1953.0], [63.9, 1953.0], [64.0, 1953.0], [64.1, 1953.0], [64.2, 1953.0], [64.3, 1954.0], [64.4, 1955.0], [64.5, 1955.0], [64.6, 1955.0], [64.7, 1957.0], [64.8, 1960.0], [64.9, 1961.0], [65.0, 1961.0], [65.1, 1961.0], [65.2, 1962.0], [65.3, 1962.0], [65.4, 1964.0], [65.5, 1967.0], [65.6, 1968.0], [65.7, 1968.0], [65.8, 1972.0], [65.9, 1975.0], [66.0, 1978.0], [66.1, 1978.0], [66.2, 1979.0], [66.3, 1981.0], [66.4, 1982.0], [66.5, 1982.0], [66.6, 1982.0], [66.7, 1983.0], [66.8, 1983.0], [66.9, 1983.0], [67.0, 1983.0], [67.1, 1984.0], [67.2, 1984.0], [67.3, 1985.0], [67.4, 1986.0], [67.5, 1989.0], [67.6, 1989.0], [67.7, 1989.0], [67.8, 1994.0], [67.9, 1994.0], [68.0, 1994.0], [68.1, 1994.0], [68.2, 1995.0], [68.3, 1997.0], [68.4, 1997.0], [68.5, 1997.0], [68.6, 1999.0], [68.7, 1999.0], [68.8, 2001.0], [68.9, 2002.0], [69.0, 2004.0], [69.1, 2004.0], [69.2, 2004.0], [69.3, 2006.0], [69.4, 2006.0], [69.5, 2006.0], [69.6, 2006.0], [69.7, 2007.0], [69.8, 2009.0], [69.9, 2009.0], [70.0, 2010.0], [70.1, 2011.0], [70.2, 2011.0], [70.3, 2016.0], [70.4, 2017.0], [70.5, 2021.0], [70.6, 2021.0], [70.7, 2023.0], [70.8, 2024.0], [70.9, 2029.0], [71.0, 2029.0], [71.1, 2030.0], [71.2, 2031.0], [71.3, 2035.0], [71.4, 2035.0], [71.5, 2037.0], [71.6, 2037.0], [71.7, 2037.0], [71.8, 2038.0], [71.9, 2039.0], [72.0, 2042.0], [72.1, 2042.0], [72.2, 2044.0], [72.3, 2048.0], [72.4, 2048.0], [72.5, 2048.0], [72.6, 2049.0], [72.7, 2049.0], [72.8, 2049.0], [72.9, 2049.0], [73.0, 2049.0], [73.1, 2055.0], [73.2, 2056.0], [73.3, 2056.0], [73.4, 2061.0], [73.5, 2064.0], [73.6, 2064.0], [73.7, 2064.0], [73.8, 2071.0], [73.9, 2073.0], [74.0, 2073.0], [74.1, 2073.0], [74.2, 2073.0], [74.3, 2078.0], [74.4, 2078.0], [74.5, 2079.0], [74.6, 2080.0], [74.7, 2082.0], [74.8, 2082.0], [74.9, 2088.0], [75.0, 2092.0], [75.1, 2092.0], [75.2, 2094.0], [75.3, 2099.0], [75.4, 2103.0], [75.5, 2103.0], [75.6, 2104.0], [75.7, 2108.0], [75.8, 2108.0], [75.9, 2108.0], [76.0, 2113.0], [76.1, 2115.0], [76.2, 2117.0], [76.3, 2117.0], [76.4, 2117.0], [76.5, 2118.0], [76.6, 2119.0], [76.7, 2119.0], [76.8, 2120.0], [76.9, 2125.0], [77.0, 2125.0], [77.1, 2128.0], [77.2, 2129.0], [77.3, 2132.0], [77.4, 2132.0], [77.5, 2133.0], [77.6, 2139.0], [77.7, 2140.0], [77.8, 2140.0], [77.9, 2147.0], [78.0, 2148.0], [78.1, 2148.0], [78.2, 2148.0], [78.3, 2149.0], [78.4, 2151.0], [78.5, 2151.0], [78.6, 2161.0], [78.7, 2165.0], [78.8, 2172.0], [78.9, 2172.0], [79.0, 2175.0], [79.1, 2176.0], [79.2, 2182.0], [79.3, 2182.0], [79.4, 2187.0], [79.5, 2187.0], [79.6, 2187.0], [79.7, 2187.0], [79.8, 2187.0], [79.9, 2188.0], [80.0, 2188.0], [80.1, 2188.0], [80.2, 2194.0], [80.3, 2196.0], [80.4, 2196.0], [80.5, 2197.0], [80.6, 2200.0], [80.7, 2206.0], [80.8, 2206.0], [80.9, 2207.0], [81.0, 2208.0], [81.1, 2212.0], [81.2, 2212.0], [81.3, 2213.0], [81.4, 2213.0], [81.5, 2216.0], [81.6, 2216.0], [81.7, 2220.0], [81.8, 2220.0], [81.9, 2220.0], [82.0, 2226.0], [82.1, 2226.0], [82.2, 2229.0], [82.3, 2229.0], [82.4, 2229.0], [82.5, 2233.0], [82.6, 2233.0], [82.7, 2233.0], [82.8, 2236.0], [82.9, 2237.0], [83.0, 2238.0], [83.1, 2238.0], [83.2, 2241.0], [83.3, 2243.0], [83.4, 2243.0], [83.5, 2250.0], [83.6, 2250.0], [83.7, 2253.0], [83.8, 2253.0], [83.9, 2257.0], [84.0, 2259.0], [84.1, 2262.0], [84.2, 2262.0], [84.3, 2262.0], [84.4, 2264.0], [84.5, 2265.0], [84.6, 2265.0], [84.7, 2266.0], [84.8, 2267.0], [84.9, 2267.0], [85.0, 2267.0], [85.1, 2268.0], [85.2, 2268.0], [85.3, 2268.0], [85.4, 2276.0], [85.5, 2277.0], [85.6, 2281.0], [85.7, 2281.0], [85.8, 2281.0], [85.9, 2283.0], [86.0, 2284.0], [86.1, 2284.0], [86.2, 2293.0], [86.3, 2297.0], [86.4, 2299.0], [86.5, 2299.0], [86.6, 2303.0], [86.7, 2311.0], [86.8, 2311.0], [86.9, 2314.0], [87.0, 2316.0], [87.1, 2317.0], [87.2, 2317.0], [87.3, 2317.0], [87.4, 2319.0], [87.5, 2322.0], [87.6, 2322.0], [87.7, 2324.0], [87.8, 2329.0], [87.9, 2331.0], [88.0, 2331.0], [88.1, 2332.0], [88.2, 2333.0], [88.3, 2338.0], [88.4, 2338.0], [88.5, 2342.0], [88.6, 2347.0], [88.7, 2347.0], [88.8, 2348.0], [88.9, 2353.0], [89.0, 2354.0], [89.1, 2354.0], [89.2, 2363.0], [89.3, 2373.0], [89.4, 2377.0], [89.5, 2377.0], [89.6, 2383.0], [89.7, 2389.0], [89.8, 2391.0], [89.9, 2391.0], [90.0, 2394.0], [90.1, 2398.0], [90.2, 2398.0], [90.3, 2403.0], [90.4, 2434.0], [90.5, 2436.0], [90.6, 2436.0], [90.7, 2446.0], [90.8, 2447.0], [90.9, 2458.0], [91.0, 2458.0], [91.1, 2486.0], [91.2, 2488.0], [91.3, 2512.0], [91.4, 2512.0], [91.5, 2513.0], [91.6, 2525.0], [91.7, 2525.0], [91.8, 2527.0], [91.9, 2536.0], [92.0, 2547.0], [92.1, 2547.0], [92.2, 2550.0], [92.3, 2550.0], [92.4, 2562.0], [92.5, 2562.0], [92.6, 2568.0], [92.7, 2582.0], [92.8, 2583.0], [92.9, 2583.0], [93.0, 2585.0], [93.1, 2595.0], [93.2, 2604.0], [93.3, 2604.0], [93.4, 2606.0], [93.5, 2614.0], [93.6, 2614.0], [93.7, 2627.0], [93.8, 2636.0], [93.9, 2650.0], [94.0, 2650.0], [94.1, 2650.0], [94.2, 2652.0], [94.3, 2654.0], [94.4, 2654.0], [94.5, 2692.0], [94.6, 2693.0], [94.7, 2695.0], [94.8, 2695.0], [94.9, 2704.0], [95.0, 2713.0], [95.1, 2713.0], [95.2, 2733.0], [95.3, 2736.0], [95.4, 2741.0], [95.5, 2741.0], [95.6, 2742.0], [95.7, 2753.0], [95.8, 2827.0], [95.9, 2827.0], [96.0, 2832.0], [96.1, 2841.0], [96.2, 2848.0], [96.3, 2848.0], [96.4, 2849.0], [96.5, 2859.0], [96.6, 2861.0], [96.7, 2861.0], [96.8, 2901.0], [96.9, 2964.0], [97.0, 2964.0], [97.1, 2985.0], [97.2, 3008.0], [97.3, 3019.0], [97.4, 3019.0], [97.5, 3063.0], [97.6, 3106.0], [97.7, 3138.0], [97.8, 3138.0], [97.9, 3180.0], [98.0, 3207.0], [98.1, 3224.0], [98.2, 3224.0], [98.3, 3301.0], [98.4, 3411.0], [98.5, 3411.0], [98.6, 3429.0], [98.7, 3460.0], [98.8, 3498.0], [98.9, 3498.0], [99.0, 3641.0], [99.1, 3919.0], [99.2, 4164.0], [99.3, 4164.0], [99.4, 4272.0], [99.5, 4302.0], [99.6, 4512.0], [99.7, 4512.0], [99.8, 4602.0], [99.9, 4649.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 600.0, "maxY": 74.0, "series": [{"data": [[600.0, 1.0], [700.0, 2.0], [800.0, 3.0], [900.0, 11.0], [1000.0, 21.0], [1100.0, 56.0], [1200.0, 60.0], [1300.0, 46.0], [1400.0, 31.0], [1500.0, 48.0], [1600.0, 35.0], [1700.0, 58.0], [1800.0, 59.0], [1900.0, 74.0], [2000.0, 49.0], [2100.0, 38.0], [2300.0, 27.0], [2200.0, 44.0], [2400.0, 8.0], [2500.0, 14.0], [2600.0, 12.0], [2800.0, 7.0], [2700.0, 7.0], [2900.0, 3.0], [3000.0, 3.0], [3100.0, 3.0], [3200.0, 2.0], [3300.0, 1.0], [3400.0, 4.0], [3600.0, 1.0], [3900.0, 1.0], [4200.0, 1.0], [4100.0, 1.0], [4300.0, 1.0], [4500.0, 1.0], [4600.0, 2.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 4600.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 231.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 504.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 231.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 504.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 10.26315789473684, "minX": 1.60507218E12, "maxY": 12.0, "series": [{"data": [[1.60507224E12, 12.0], [1.6050723E12, 10.26315789473684], [1.60507218E12, 11.993055555555548]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6050723E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 1155.0, "minX": 1.0, "maxY": 2049.0, "series": [{"data": [[8.0, 1201.0], [4.0, 2049.0], [2.0, 1579.0], [1.0, 1591.0], [9.0, 1378.0], [10.0, 1608.0], [5.0, 1343.0], [11.0, 1225.0], [12.0, 1809.7261410788378], [6.0, 1164.0], [3.0, 1155.0], [7.0, 1303.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[11.907482993197277, 1803.5863945578244]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 12.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 277.5, "minX": 1.60507218E12, "maxY": 957086.1166666667, "series": [{"data": [[1.60507224E12, 957086.1166666667], [1.6050723E12, 102634.41666666667], [1.60507218E12, 776568.7]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60507224E12, 3066.5333333333333], [1.6050723E12, 277.5], [1.60507218E12, 2179.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6050723E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 1726.5789473684208, "minX": 1.60507218E12, "maxY": 1889.6041666666663, "series": [{"data": [[1.60507224E12, 1750.1711491442547], [1.6050723E12, 1726.5789473684208], [1.60507218E12, 1889.6041666666663]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6050723E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 1725.5, "minX": 1.60507218E12, "maxY": 1888.4409722222222, "series": [{"data": [[1.60507224E12, 1749.0635696821528], [1.6050723E12, 1725.5], [1.60507218E12, 1888.4409722222222]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6050723E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.60507218E12, "maxY": 0.42013888888888873, "series": [{"data": [[1.60507224E12, 0.0342298288508558], [1.6050723E12, 0.0], [1.60507218E12, 0.42013888888888873]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6050723E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 621.0, "minX": 1.60507218E12, "maxY": 4649.0, "series": [{"data": [[1.60507224E12, 4302.0], [1.6050723E12, 2985.0], [1.60507218E12, 4649.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60507224E12, 906.2899959921837], [1.6050723E12, 1155.0], [1.60507218E12, 860.2419971060752]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60507224E12, 919.1180000782012], [1.6050723E12, 1155.0], [1.60507218E12, 871.1662011575698]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60507224E12, 914.6949979960918], [1.6050723E12, 1155.0], [1.60507218E12, 866.3109985530376]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60507224E12, 723.0], [1.6050723E12, 1155.0], [1.60507218E12, 621.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60507224E12, 1763.0], [1.6050723E12, 1591.0], [1.60507218E12, 1870.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6050723E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 728.0, "minX": 1.0, "maxY": 2499.5, "series": [{"data": [[2.0, 728.0], [8.0, 1324.5], [4.0, 2013.5], [1.0, 1591.0], [9.0, 1341.0], [5.0, 1953.0], [10.0, 1254.0], [11.0, 1336.0], [3.0, 2499.5], [6.0, 1930.5], [12.0, 1153.0], [7.0, 1833.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 12.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 724.0, "minX": 1.0, "maxY": 2498.0, "series": [{"data": [[2.0, 724.0], [8.0, 1324.0], [4.0, 2011.0], [1.0, 1591.0], [9.0, 1341.0], [5.0, 1952.5], [10.0, 1253.5], [11.0, 1335.5], [3.0, 2498.0], [6.0, 1929.5], [12.0, 1153.0], [7.0, 1833.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 12.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.43333333333333335, "minX": 1.60507218E12, "maxY": 6.816666666666666, "series": [{"data": [[1.60507224E12, 6.816666666666666], [1.6050723E12, 0.43333333333333335], [1.60507218E12, 5.0]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6050723E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.6333333333333333, "minX": 1.60507218E12, "maxY": 6.816666666666666, "series": [{"data": [[1.60507224E12, 6.816666666666666], [1.6050723E12, 0.6333333333333333], [1.60507218E12, 4.8]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6050723E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.6333333333333333, "minX": 1.60507218E12, "maxY": 6.816666666666666, "series": [{"data": [[1.60507224E12, 6.816666666666666], [1.6050723E12, 0.6333333333333333], [1.60507218E12, 4.8]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6050723E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.6333333333333333, "minX": 1.60507218E12, "maxY": 6.816666666666666, "series": [{"data": [[1.60507224E12, 6.816666666666666], [1.6050723E12, 0.6333333333333333], [1.60507218E12, 4.8]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6050723E12, "title": "Total Transactions Per Second"}},
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

