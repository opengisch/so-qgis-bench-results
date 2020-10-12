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
        data: {"result": {"minY": 696.0, "minX": 0.0, "maxY": 4395.0, "series": [{"data": [[0.0, 696.0], [0.1, 696.0], [0.2, 724.0], [0.3, 825.0], [0.4, 825.0], [0.5, 855.0], [0.6, 863.0], [0.7, 865.0], [0.8, 865.0], [0.9, 867.0], [1.0, 873.0], [1.1, 873.0], [1.2, 873.0], [1.3, 875.0], [1.4, 887.0], [1.5, 893.0], [1.6, 893.0], [1.7, 902.0], [1.8, 935.0], [1.9, 935.0], [2.0, 950.0], [2.1, 952.0], [2.2, 961.0], [2.3, 961.0], [2.4, 981.0], [2.5, 991.0], [2.6, 994.0], [2.7, 994.0], [2.8, 1000.0], [2.9, 1006.0], [3.0, 1008.0], [3.1, 1008.0], [3.2, 1008.0], [3.3, 1012.0], [3.4, 1012.0], [3.5, 1016.0], [3.6, 1017.0], [3.7, 1022.0], [3.8, 1022.0], [3.9, 1027.0], [4.0, 1028.0], [4.1, 1028.0], [4.2, 1028.0], [4.3, 1030.0], [4.4, 1034.0], [4.5, 1035.0], [4.6, 1035.0], [4.7, 1039.0], [4.8, 1040.0], [4.9, 1040.0], [5.0, 1040.0], [5.1, 1043.0], [5.2, 1046.0], [5.3, 1046.0], [5.4, 1050.0], [5.5, 1051.0], [5.6, 1056.0], [5.7, 1056.0], [5.8, 1059.0], [5.9, 1059.0], [6.0, 1060.0], [6.1, 1060.0], [6.2, 1066.0], [6.3, 1067.0], [6.4, 1074.0], [6.5, 1074.0], [6.6, 1075.0], [6.7, 1078.0], [6.8, 1078.0], [6.9, 1079.0], [7.0, 1082.0], [7.1, 1087.0], [7.2, 1087.0], [7.3, 1087.0], [7.4, 1088.0], [7.5, 1092.0], [7.6, 1092.0], [7.7, 1092.0], [7.8, 1092.0], [7.9, 1095.0], [8.0, 1095.0], [8.1, 1101.0], [8.2, 1102.0], [8.3, 1103.0], [8.4, 1103.0], [8.5, 1103.0], [8.6, 1104.0], [8.7, 1104.0], [8.8, 1105.0], [8.9, 1107.0], [9.0, 1109.0], [9.1, 1109.0], [9.2, 1109.0], [9.3, 1110.0], [9.4, 1112.0], [9.5, 1112.0], [9.6, 1112.0], [9.7, 1112.0], [9.8, 1123.0], [9.9, 1123.0], [10.0, 1126.0], [10.1, 1133.0], [10.2, 1133.0], [10.3, 1138.0], [10.4, 1139.0], [10.5, 1141.0], [10.6, 1141.0], [10.7, 1143.0], [10.8, 1154.0], [10.9, 1154.0], [11.0, 1154.0], [11.1, 1155.0], [11.2, 1158.0], [11.3, 1163.0], [11.4, 1163.0], [11.5, 1166.0], [11.6, 1168.0], [11.7, 1168.0], [11.8, 1169.0], [11.9, 1171.0], [12.0, 1172.0], [12.1, 1172.0], [12.2, 1172.0], [12.3, 1175.0], [12.4, 1176.0], [12.5, 1176.0], [12.6, 1177.0], [12.7, 1177.0], [12.8, 1179.0], [12.9, 1179.0], [13.0, 1180.0], [13.1, 1181.0], [13.2, 1183.0], [13.3, 1183.0], [13.4, 1186.0], [13.5, 1187.0], [13.6, 1187.0], [13.7, 1187.0], [13.8, 1188.0], [13.9, 1188.0], [14.0, 1188.0], [14.1, 1189.0], [14.2, 1191.0], [14.3, 1193.0], [14.4, 1193.0], [14.5, 1196.0], [14.6, 1198.0], [14.7, 1199.0], [14.8, 1199.0], [14.9, 1199.0], [15.0, 1200.0], [15.1, 1200.0], [15.2, 1200.0], [15.3, 1201.0], [15.4, 1201.0], [15.5, 1201.0], [15.6, 1205.0], [15.7, 1206.0], [15.8, 1208.0], [15.9, 1208.0], [16.0, 1208.0], [16.1, 1219.0], [16.2, 1221.0], [16.3, 1221.0], [16.4, 1223.0], [16.5, 1226.0], [16.6, 1226.0], [16.7, 1226.0], [16.8, 1230.0], [16.9, 1230.0], [17.0, 1230.0], [17.1, 1231.0], [17.2, 1233.0], [17.3, 1234.0], [17.4, 1234.0], [17.5, 1234.0], [17.6, 1239.0], [17.7, 1250.0], [17.8, 1250.0], [17.9, 1250.0], [18.0, 1251.0], [18.1, 1251.0], [18.2, 1251.0], [18.3, 1254.0], [18.4, 1258.0], [18.5, 1258.0], [18.6, 1261.0], [18.7, 1262.0], [18.8, 1271.0], [18.9, 1271.0], [19.0, 1275.0], [19.1, 1281.0], [19.2, 1283.0], [19.3, 1283.0], [19.4, 1285.0], [19.5, 1288.0], [19.6, 1294.0], [19.7, 1294.0], [19.8, 1296.0], [19.9, 1306.0], [20.0, 1311.0], [20.1, 1311.0], [20.2, 1313.0], [20.3, 1315.0], [20.4, 1315.0], [20.5, 1315.0], [20.6, 1317.0], [20.7, 1318.0], [20.8, 1318.0], [20.9, 1318.0], [21.0, 1321.0], [21.1, 1326.0], [21.2, 1326.0], [21.3, 1327.0], [21.4, 1329.0], [21.5, 1329.0], [21.6, 1329.0], [21.7, 1329.0], [21.8, 1333.0], [21.9, 1333.0], [22.0, 1335.0], [22.1, 1341.0], [22.2, 1343.0], [22.3, 1343.0], [22.4, 1344.0], [22.5, 1345.0], [22.6, 1345.0], [22.7, 1345.0], [22.8, 1345.0], [22.9, 1349.0], [23.0, 1351.0], [23.1, 1351.0], [23.2, 1353.0], [23.3, 1354.0], [23.4, 1354.0], [23.5, 1355.0], [23.6, 1357.0], [23.7, 1358.0], [23.8, 1358.0], [23.9, 1358.0], [24.0, 1358.0], [24.1, 1360.0], [24.2, 1360.0], [24.3, 1361.0], [24.4, 1362.0], [24.5, 1365.0], [24.6, 1365.0], [24.7, 1367.0], [24.8, 1367.0], [24.9, 1367.0], [25.0, 1367.0], [25.1, 1368.0], [25.2, 1369.0], [25.3, 1369.0], [25.4, 1376.0], [25.5, 1377.0], [25.6, 1380.0], [25.7, 1380.0], [25.8, 1382.0], [25.9, 1385.0], [26.0, 1387.0], [26.1, 1387.0], [26.2, 1389.0], [26.3, 1395.0], [26.4, 1398.0], [26.5, 1398.0], [26.6, 1400.0], [26.7, 1403.0], [26.8, 1403.0], [26.9, 1403.0], [27.0, 1406.0], [27.1, 1408.0], [27.2, 1408.0], [27.3, 1408.0], [27.4, 1408.0], [27.5, 1409.0], [27.6, 1409.0], [27.7, 1412.0], [27.8, 1414.0], [27.9, 1415.0], [28.0, 1415.0], [28.1, 1416.0], [28.2, 1419.0], [28.3, 1419.0], [28.4, 1419.0], [28.5, 1419.0], [28.6, 1422.0], [28.7, 1422.0], [28.8, 1426.0], [28.9, 1426.0], [29.0, 1427.0], [29.1, 1427.0], [29.2, 1428.0], [29.3, 1429.0], [29.4, 1431.0], [29.5, 1431.0], [29.6, 1431.0], [29.7, 1435.0], [29.8, 1436.0], [29.9, 1436.0], [30.0, 1439.0], [30.1, 1445.0], [30.2, 1445.0], [30.3, 1447.0], [30.4, 1449.0], [30.5, 1452.0], [30.6, 1452.0], [30.7, 1452.0], [30.8, 1454.0], [30.9, 1454.0], [31.0, 1454.0], [31.1, 1456.0], [31.2, 1456.0], [31.3, 1457.0], [31.4, 1457.0], [31.5, 1463.0], [31.6, 1465.0], [31.7, 1465.0], [31.8, 1466.0], [31.9, 1468.0], [32.0, 1471.0], [32.1, 1471.0], [32.2, 1472.0], [32.3, 1475.0], [32.4, 1476.0], [32.5, 1476.0], [32.6, 1476.0], [32.7, 1478.0], [32.8, 1480.0], [32.9, 1480.0], [33.0, 1484.0], [33.1, 1484.0], [33.2, 1485.0], [33.3, 1485.0], [33.4, 1487.0], [33.5, 1488.0], [33.6, 1488.0], [33.7, 1488.0], [33.8, 1492.0], [33.9, 1496.0], [34.0, 1496.0], [34.1, 1500.0], [34.2, 1503.0], [34.3, 1505.0], [34.4, 1505.0], [34.5, 1506.0], [34.6, 1508.0], [34.7, 1509.0], [34.8, 1509.0], [34.9, 1513.0], [35.0, 1513.0], [35.1, 1513.0], [35.2, 1514.0], [35.3, 1517.0], [35.4, 1518.0], [35.5, 1518.0], [35.6, 1520.0], [35.7, 1520.0], [35.8, 1523.0], [35.9, 1523.0], [36.0, 1525.0], [36.1, 1525.0], [36.2, 1528.0], [36.3, 1528.0], [36.4, 1531.0], [36.5, 1531.0], [36.6, 1531.0], [36.7, 1531.0], [36.8, 1532.0], [36.9, 1533.0], [37.0, 1533.0], [37.1, 1535.0], [37.2, 1544.0], [37.3, 1547.0], [37.4, 1547.0], [37.5, 1549.0], [37.6, 1553.0], [37.7, 1555.0], [37.8, 1555.0], [37.9, 1556.0], [38.0, 1559.0], [38.1, 1560.0], [38.2, 1560.0], [38.3, 1561.0], [38.4, 1563.0], [38.5, 1563.0], [38.6, 1565.0], [38.7, 1568.0], [38.8, 1569.0], [38.9, 1569.0], [39.0, 1569.0], [39.1, 1570.0], [39.2, 1571.0], [39.3, 1571.0], [39.4, 1572.0], [39.5, 1574.0], [39.6, 1577.0], [39.7, 1577.0], [39.8, 1578.0], [39.9, 1580.0], [40.0, 1581.0], [40.1, 1581.0], [40.2, 1581.0], [40.3, 1581.0], [40.4, 1581.0], [40.5, 1585.0], [40.6, 1589.0], [40.7, 1591.0], [40.8, 1591.0], [40.9, 1595.0], [41.0, 1597.0], [41.1, 1599.0], [41.2, 1599.0], [41.3, 1603.0], [41.4, 1606.0], [41.5, 1607.0], [41.6, 1607.0], [41.7, 1607.0], [41.8, 1609.0], [41.9, 1609.0], [42.0, 1611.0], [42.1, 1615.0], [42.2, 1623.0], [42.3, 1623.0], [42.4, 1625.0], [42.5, 1628.0], [42.6, 1629.0], [42.7, 1629.0], [42.8, 1629.0], [42.9, 1630.0], [43.0, 1632.0], [43.1, 1632.0], [43.2, 1634.0], [43.3, 1636.0], [43.4, 1636.0], [43.5, 1637.0], [43.6, 1638.0], [43.7, 1640.0], [43.8, 1640.0], [43.9, 1645.0], [44.0, 1645.0], [44.1, 1647.0], [44.2, 1647.0], [44.3, 1647.0], [44.4, 1649.0], [44.5, 1649.0], [44.6, 1649.0], [44.7, 1651.0], [44.8, 1651.0], [44.9, 1652.0], [45.0, 1652.0], [45.1, 1655.0], [45.2, 1656.0], [45.3, 1656.0], [45.4, 1657.0], [45.5, 1657.0], [45.6, 1657.0], [45.7, 1657.0], [45.8, 1657.0], [45.9, 1659.0], [46.0, 1661.0], [46.1, 1661.0], [46.2, 1664.0], [46.3, 1666.0], [46.4, 1667.0], [46.5, 1667.0], [46.6, 1669.0], [46.7, 1670.0], [46.8, 1670.0], [46.9, 1672.0], [47.0, 1674.0], [47.1, 1675.0], [47.2, 1675.0], [47.3, 1676.0], [47.4, 1677.0], [47.5, 1685.0], [47.6, 1685.0], [47.7, 1686.0], [47.8, 1686.0], [47.9, 1692.0], [48.0, 1692.0], [48.1, 1693.0], [48.2, 1693.0], [48.3, 1694.0], [48.4, 1694.0], [48.5, 1694.0], [48.6, 1698.0], [48.7, 1698.0], [48.8, 1699.0], [48.9, 1701.0], [49.0, 1707.0], [49.1, 1707.0], [49.2, 1708.0], [49.3, 1708.0], [49.4, 1708.0], [49.5, 1708.0], [49.6, 1709.0], [49.7, 1714.0], [49.8, 1719.0], [49.9, 1719.0], [50.0, 1720.0], [50.1, 1720.0], [50.2, 1720.0], [50.3, 1721.0], [50.4, 1723.0], [50.5, 1723.0], [50.6, 1723.0], [50.7, 1724.0], [50.8, 1726.0], [50.9, 1735.0], [51.0, 1735.0], [51.1, 1737.0], [51.2, 1743.0], [51.3, 1744.0], [51.4, 1744.0], [51.5, 1744.0], [51.6, 1745.0], [51.7, 1745.0], [51.8, 1745.0], [51.9, 1746.0], [52.0, 1749.0], [52.1, 1749.0], [52.2, 1750.0], [52.3, 1750.0], [52.4, 1751.0], [52.5, 1751.0], [52.6, 1757.0], [52.7, 1760.0], [52.8, 1760.0], [52.9, 1760.0], [53.0, 1764.0], [53.1, 1766.0], [53.2, 1768.0], [53.3, 1768.0], [53.4, 1770.0], [53.5, 1771.0], [53.6, 1771.0], [53.7, 1772.0], [53.8, 1772.0], [53.9, 1772.0], [54.0, 1772.0], [54.1, 1774.0], [54.2, 1774.0], [54.3, 1775.0], [54.4, 1775.0], [54.5, 1776.0], [54.6, 1777.0], [54.7, 1778.0], [54.8, 1778.0], [54.9, 1778.0], [55.0, 1778.0], [55.1, 1778.0], [55.2, 1781.0], [55.3, 1782.0], [55.4, 1783.0], [55.5, 1783.0], [55.6, 1783.0], [55.7, 1785.0], [55.8, 1786.0], [55.9, 1786.0], [56.0, 1788.0], [56.1, 1789.0], [56.2, 1789.0], [56.3, 1789.0], [56.4, 1789.0], [56.5, 1793.0], [56.6, 1794.0], [56.7, 1794.0], [56.8, 1795.0], [56.9, 1797.0], [57.0, 1797.0], [57.1, 1799.0], [57.2, 1799.0], [57.3, 1800.0], [57.4, 1800.0], [57.5, 1801.0], [57.6, 1802.0], [57.7, 1803.0], [57.8, 1803.0], [57.9, 1803.0], [58.0, 1804.0], [58.1, 1806.0], [58.2, 1806.0], [58.3, 1808.0], [58.4, 1810.0], [58.5, 1810.0], [58.6, 1810.0], [58.7, 1810.0], [58.8, 1812.0], [58.9, 1812.0], [59.0, 1813.0], [59.1, 1813.0], [59.2, 1814.0], [59.3, 1814.0], [59.4, 1818.0], [59.5, 1818.0], [59.6, 1819.0], [59.7, 1819.0], [59.8, 1822.0], [59.9, 1823.0], [60.0, 1823.0], [60.1, 1823.0], [60.2, 1824.0], [60.3, 1828.0], [60.4, 1828.0], [60.5, 1828.0], [60.6, 1831.0], [60.7, 1832.0], [60.8, 1832.0], [60.9, 1834.0], [61.0, 1837.0], [61.1, 1838.0], [61.2, 1838.0], [61.3, 1838.0], [61.4, 1840.0], [61.5, 1843.0], [61.6, 1843.0], [61.7, 1849.0], [61.8, 1849.0], [61.9, 1849.0], [62.0, 1851.0], [62.1, 1853.0], [62.2, 1854.0], [62.3, 1854.0], [62.4, 1855.0], [62.5, 1855.0], [62.6, 1856.0], [62.7, 1856.0], [62.8, 1857.0], [62.9, 1861.0], [63.0, 1861.0], [63.1, 1861.0], [63.2, 1863.0], [63.3, 1863.0], [63.4, 1863.0], [63.5, 1864.0], [63.6, 1869.0], [63.7, 1869.0], [63.8, 1869.0], [63.9, 1870.0], [64.0, 1871.0], [64.1, 1872.0], [64.2, 1872.0], [64.3, 1874.0], [64.4, 1874.0], [64.5, 1875.0], [64.6, 1875.0], [64.7, 1875.0], [64.8, 1876.0], [64.9, 1878.0], [65.0, 1878.0], [65.1, 1879.0], [65.2, 1880.0], [65.3, 1880.0], [65.4, 1881.0], [65.5, 1883.0], [65.6, 1884.0], [65.7, 1884.0], [65.8, 1887.0], [65.9, 1889.0], [66.0, 1891.0], [66.1, 1891.0], [66.2, 1892.0], [66.3, 1892.0], [66.4, 1894.0], [66.5, 1894.0], [66.6, 1897.0], [66.7, 1898.0], [66.8, 1898.0], [66.9, 1898.0], [67.0, 1899.0], [67.1, 1899.0], [67.2, 1899.0], [67.3, 1899.0], [67.4, 1900.0], [67.5, 1900.0], [67.6, 1900.0], [67.7, 1901.0], [67.8, 1904.0], [67.9, 1905.0], [68.0, 1905.0], [68.1, 1907.0], [68.2, 1908.0], [68.3, 1909.0], [68.4, 1909.0], [68.5, 1910.0], [68.6, 1910.0], [68.7, 1910.0], [68.8, 1910.0], [68.9, 1917.0], [69.0, 1919.0], [69.1, 1919.0], [69.2, 1920.0], [69.3, 1921.0], [69.4, 1922.0], [69.5, 1922.0], [69.6, 1922.0], [69.7, 1929.0], [69.8, 1929.0], [69.9, 1929.0], [70.0, 1930.0], [70.1, 1930.0], [70.2, 1930.0], [70.3, 1931.0], [70.4, 1936.0], [70.5, 1940.0], [70.6, 1940.0], [70.7, 1940.0], [70.8, 1941.0], [70.9, 1944.0], [71.0, 1944.0], [71.1, 1950.0], [71.2, 1953.0], [71.3, 1958.0], [71.4, 1958.0], [71.5, 1958.0], [71.6, 1962.0], [71.7, 1962.0], [71.8, 1962.0], [71.9, 1962.0], [72.0, 1964.0], [72.1, 1964.0], [72.2, 1965.0], [72.3, 1970.0], [72.4, 1971.0], [72.5, 1971.0], [72.6, 1973.0], [72.7, 1975.0], [72.8, 1978.0], [72.9, 1978.0], [73.0, 1979.0], [73.1, 1985.0], [73.2, 1987.0], [73.3, 1987.0], [73.4, 1990.0], [73.5, 1990.0], [73.6, 1990.0], [73.7, 1991.0], [73.8, 1991.0], [73.9, 1997.0], [74.0, 1997.0], [74.1, 1998.0], [74.2, 2000.0], [74.3, 2000.0], [74.4, 2000.0], [74.5, 2000.0], [74.6, 2001.0], [74.7, 2001.0], [74.8, 2001.0], [74.9, 2001.0], [75.0, 2002.0], [75.1, 2002.0], [75.2, 2004.0], [75.3, 2005.0], [75.4, 2005.0], [75.5, 2005.0], [75.6, 2009.0], [75.7, 2011.0], [75.8, 2016.0], [75.9, 2016.0], [76.0, 2021.0], [76.1, 2025.0], [76.2, 2029.0], [76.3, 2029.0], [76.4, 2036.0], [76.5, 2037.0], [76.6, 2039.0], [76.7, 2039.0], [76.8, 2040.0], [76.9, 2046.0], [77.0, 2046.0], [77.1, 2047.0], [77.2, 2054.0], [77.3, 2054.0], [77.4, 2054.0], [77.5, 2056.0], [77.6, 2056.0], [77.7, 2060.0], [77.8, 2060.0], [77.9, 2060.0], [78.0, 2062.0], [78.1, 2068.0], [78.2, 2068.0], [78.3, 2072.0], [78.4, 2073.0], [78.5, 2073.0], [78.6, 2075.0], [78.7, 2081.0], [78.8, 2081.0], [78.9, 2081.0], [79.0, 2088.0], [79.1, 2091.0], [79.2, 2094.0], [79.3, 2094.0], [79.4, 2100.0], [79.5, 2102.0], [79.6, 2103.0], [79.7, 2103.0], [79.8, 2107.0], [79.9, 2108.0], [80.0, 2108.0], [80.1, 2108.0], [80.2, 2122.0], [80.3, 2124.0], [80.4, 2124.0], [80.5, 2126.0], [80.6, 2127.0], [80.7, 2129.0], [80.8, 2129.0], [80.9, 2130.0], [81.0, 2133.0], [81.1, 2134.0], [81.2, 2134.0], [81.3, 2134.0], [81.4, 2136.0], [81.5, 2136.0], [81.6, 2136.0], [81.7, 2138.0], [81.8, 2142.0], [81.9, 2142.0], [82.0, 2149.0], [82.1, 2150.0], [82.2, 2150.0], [82.3, 2150.0], [82.4, 2151.0], [82.5, 2151.0], [82.6, 2152.0], [82.7, 2152.0], [82.8, 2154.0], [82.9, 2156.0], [83.0, 2159.0], [83.1, 2159.0], [83.2, 2163.0], [83.3, 2165.0], [83.4, 2165.0], [83.5, 2165.0], [83.6, 2171.0], [83.7, 2173.0], [83.8, 2173.0], [83.9, 2175.0], [84.0, 2183.0], [84.1, 2186.0], [84.2, 2186.0], [84.3, 2189.0], [84.4, 2195.0], [84.5, 2198.0], [84.6, 2198.0], [84.7, 2198.0], [84.8, 2199.0], [84.9, 2202.0], [85.0, 2202.0], [85.1, 2206.0], [85.2, 2209.0], [85.3, 2209.0], [85.4, 2212.0], [85.5, 2215.0], [85.6, 2216.0], [85.7, 2216.0], [85.8, 2217.0], [85.9, 2226.0], [86.0, 2226.0], [86.1, 2226.0], [86.2, 2229.0], [86.3, 2233.0], [86.4, 2239.0], [86.5, 2239.0], [86.6, 2245.0], [86.7, 2249.0], [86.8, 2249.0], [86.9, 2249.0], [87.0, 2250.0], [87.1, 2252.0], [87.2, 2252.0], [87.3, 2255.0], [87.4, 2257.0], [87.5, 2259.0], [87.6, 2259.0], [87.7, 2264.0], [87.8, 2272.0], [87.9, 2283.0], [88.0, 2283.0], [88.1, 2287.0], [88.2, 2290.0], [88.3, 2295.0], [88.4, 2295.0], [88.5, 2298.0], [88.6, 2312.0], [88.7, 2312.0], [88.8, 2317.0], [88.9, 2322.0], [89.0, 2324.0], [89.1, 2324.0], [89.2, 2327.0], [89.3, 2328.0], [89.4, 2328.0], [89.5, 2328.0], [89.6, 2330.0], [89.7, 2349.0], [89.8, 2353.0], [89.9, 2353.0], [90.0, 2364.0], [90.1, 2372.0], [90.2, 2372.0], [90.3, 2372.0], [90.4, 2375.0], [90.5, 2380.0], [90.6, 2380.0], [90.7, 2383.0], [90.8, 2393.0], [90.9, 2397.0], [91.0, 2397.0], [91.1, 2406.0], [91.2, 2412.0], [91.3, 2412.0], [91.4, 2412.0], [91.5, 2425.0], [91.6, 2426.0], [91.7, 2426.0], [91.8, 2446.0], [91.9, 2447.0], [92.0, 2456.0], [92.1, 2456.0], [92.2, 2456.0], [92.3, 2457.0], [92.4, 2463.0], [92.5, 2463.0], [92.6, 2472.0], [92.7, 2489.0], [92.8, 2497.0], [92.9, 2497.0], [93.0, 2519.0], [93.1, 2547.0], [93.2, 2566.0], [93.3, 2566.0], [93.4, 2579.0], [93.5, 2582.0], [93.6, 2582.0], [93.7, 2584.0], [93.8, 2592.0], [93.9, 2607.0], [94.0, 2607.0], [94.1, 2623.0], [94.2, 2625.0], [94.3, 2639.0], [94.4, 2639.0], [94.5, 2646.0], [94.6, 2658.0], [94.7, 2668.0], [94.8, 2668.0], [94.9, 2671.0], [95.0, 2678.0], [95.1, 2678.0], [95.2, 2680.0], [95.3, 2696.0], [95.4, 2704.0], [95.5, 2704.0], [95.6, 2708.0], [95.7, 2738.0], [95.8, 2740.0], [95.9, 2740.0], [96.0, 2741.0], [96.1, 2792.0], [96.2, 2810.0], [96.3, 2810.0], [96.4, 2829.0], [96.5, 2840.0], [96.6, 2865.0], [96.7, 2865.0], [96.8, 2876.0], [96.9, 2879.0], [97.0, 2879.0], [97.1, 2916.0], [97.2, 2966.0], [97.3, 3006.0], [97.4, 3006.0], [97.5, 3045.0], [97.6, 3048.0], [97.7, 3060.0], [97.8, 3060.0], [97.9, 3070.0], [98.0, 3079.0], [98.1, 3079.0], [98.2, 3079.0], [98.3, 3278.0], [98.4, 3470.0], [98.5, 3470.0], [98.6, 3617.0], [98.7, 3746.0], [98.8, 3904.0], [98.9, 3904.0], [99.0, 3978.0], [99.1, 4062.0], [99.2, 4136.0], [99.3, 4136.0], [99.4, 4258.0], [99.5, 4262.0], [99.6, 4344.0], [99.7, 4344.0], [99.8, 4359.0], [99.9, 4395.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 600.0, "maxY": 74.0, "series": [{"data": [[600.0, 1.0], [700.0, 1.0], [800.0, 10.0], [900.0, 8.0], [1000.0, 39.0], [1100.0, 51.0], [1200.0, 36.0], [1300.0, 49.0], [1400.0, 55.0], [1500.0, 53.0], [1600.0, 56.0], [1700.0, 62.0], [1800.0, 74.0], [1900.0, 50.0], [2000.0, 38.0], [2100.0, 41.0], [2300.0, 18.0], [2200.0, 27.0], [2400.0, 14.0], [2500.0, 7.0], [2600.0, 11.0], [2700.0, 6.0], [2800.0, 6.0], [2900.0, 2.0], [3000.0, 7.0], [3200.0, 1.0], [3400.0, 1.0], [3600.0, 1.0], [3700.0, 1.0], [3900.0, 2.0], [4000.0, 1.0], [4200.0, 2.0], [4100.0, 1.0], [4300.0, 3.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 4300.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 251.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 484.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 251.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 484.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 11.6, "minX": 1.6024716E12, "maxY": 12.0, "series": [{"data": [[1.6024716E12, 12.0], [1.60247166E12, 12.0], [1.60247172E12, 11.6]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60247172E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 1079.0, "minX": 1.0, "maxY": 1823.0, "series": [{"data": [[8.0, 1112.0], [4.0, 1126.0], [2.0, 1427.0], [1.0, 1802.0], [9.0, 1092.0], [10.0, 1406.0], [5.0, 1092.0], [11.0, 1092.0], [12.0, 1759.7499999999993], [6.0, 1154.0], [3.0, 1823.0], [7.0, 1079.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[11.910204081632651, 1752.7401360544209]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 12.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 1158.35, "minX": 1.6024716E12, "maxY": 981822.0333333333, "series": [{"data": [[1.6024716E12, 501855.7166666667], [1.60247166E12, 981822.0333333333], [1.60247172E12, 352087.56666666665]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6024716E12, 1158.35], [1.60247166E12, 3132.733333333333], [1.60247172E12, 1231.95]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60247172E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 1604.587878787879, "minX": 1.6024716E12, "maxY": 1989.849673202614, "series": [{"data": [[1.6024716E12, 1989.849673202614], [1.60247166E12, 1724.364508393285], [1.60247172E12, 1604.587878787879]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60247172E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 1603.648484848485, "minX": 1.6024716E12, "maxY": 1988.3856209150335, "series": [{"data": [[1.6024716E12, 1988.3856209150335], [1.60247166E12, 1723.191846522781], [1.60247172E12, 1603.648484848485]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60247172E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.6024716E12, "maxY": 0.6993464052287579, "series": [{"data": [[1.6024716E12, 0.6993464052287579], [1.60247166E12, 0.035971223021582774], [1.60247172E12, 0.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60247172E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 696.0, "minX": 1.6024716E12, "maxY": 4395.0, "series": [{"data": [[1.6024716E12, 4262.0], [1.60247166E12, 4395.0], [1.60247172E12, 3060.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6024716E12, 1023.5619993758202], [1.60247166E12, 847.859997010231], [1.60247172E12, 931.6899946570396]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6024716E12, 1025.9182002496718], [1.60247166E12, 856.1056003189087], [1.60247172E12, 951.8590021371841]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6024716E12, 1024.8709996879102], [1.60247166E12, 854.1299985051155], [1.60247172E12, 942.8949973285198]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.6024716E12, 1017.0], [1.60247166E12, 696.0], [1.60247172E12, 865.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6024716E12, 1856.0], [1.60247166E12, 1714.0], [1.60247172E12, 1570.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60247172E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 1187.0, "minX": 1.0, "maxY": 2222.5, "series": [{"data": [[1.0, 2087.0], [4.0, 2222.5], [8.0, 1626.0], [9.0, 1485.0], [10.0, 1206.5], [5.0, 1810.0], [11.0, 1187.0], [6.0, 1873.5], [3.0, 2035.5], [7.0, 1826.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 11.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 1187.0, "minX": 1.0, "maxY": 2221.5, "series": [{"data": [[1.0, 2085.0], [4.0, 2221.5], [8.0, 1626.0], [9.0, 1485.0], [10.0, 1206.0], [5.0, 1809.0], [11.0, 1187.0], [6.0, 1872.0], [3.0, 2034.0], [7.0, 1825.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 11.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 2.55, "minX": 1.6024716E12, "maxY": 6.95, "series": [{"data": [[1.6024716E12, 2.75], [1.60247166E12, 6.95], [1.60247172E12, 2.55]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60247172E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 2.55, "minX": 1.6024716E12, "maxY": 6.95, "series": [{"data": [[1.6024716E12, 2.55], [1.60247166E12, 6.95], [1.60247172E12, 2.75]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60247172E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 2.55, "minX": 1.6024716E12, "maxY": 6.95, "series": [{"data": [[1.6024716E12, 2.55], [1.60247166E12, 6.95], [1.60247172E12, 2.75]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60247172E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 2.55, "minX": 1.6024716E12, "maxY": 6.95, "series": [{"data": [[1.6024716E12, 2.55], [1.60247166E12, 6.95], [1.60247172E12, 2.75]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60247172E12, "title": "Total Transactions Per Second"}},
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

