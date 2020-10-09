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
        data: {"result": {"minY": 748.0, "minX": 0.0, "maxY": 4446.0, "series": [{"data": [[0.0, 748.0], [0.1, 748.0], [0.2, 757.0], [0.3, 799.0], [0.4, 799.0], [0.5, 855.0], [0.6, 889.0], [0.7, 892.0], [0.8, 892.0], [0.9, 892.0], [1.0, 905.0], [1.1, 907.0], [1.2, 907.0], [1.3, 912.0], [1.4, 914.0], [1.5, 932.0], [1.6, 932.0], [1.7, 932.0], [1.8, 941.0], [1.9, 941.0], [2.0, 956.0], [2.1, 961.0], [2.2, 999.0], [2.3, 999.0], [2.4, 999.0], [2.5, 1000.0], [2.6, 1005.0], [2.7, 1005.0], [2.8, 1008.0], [2.9, 1009.0], [3.0, 1024.0], [3.1, 1024.0], [3.2, 1041.0], [3.3, 1046.0], [3.4, 1046.0], [3.5, 1047.0], [3.6, 1061.0], [3.7, 1069.0], [3.8, 1069.0], [3.9, 1077.0], [4.0, 1085.0], [4.1, 1086.0], [4.2, 1086.0], [4.3, 1093.0], [4.4, 1094.0], [4.5, 1097.0], [4.6, 1097.0], [4.7, 1098.0], [4.8, 1101.0], [4.9, 1102.0], [5.0, 1102.0], [5.1, 1105.0], [5.2, 1106.0], [5.3, 1106.0], [5.4, 1118.0], [5.5, 1118.0], [5.6, 1118.0], [5.7, 1118.0], [5.8, 1122.0], [5.9, 1126.0], [6.0, 1127.0], [6.1, 1127.0], [6.2, 1135.0], [6.3, 1137.0], [6.4, 1140.0], [6.5, 1140.0], [6.6, 1143.0], [6.7, 1147.0], [6.8, 1147.0], [6.9, 1151.0], [7.0, 1153.0], [7.1, 1153.0], [7.2, 1153.0], [7.3, 1155.0], [7.4, 1155.0], [7.5, 1156.0], [7.6, 1156.0], [7.7, 1165.0], [7.8, 1167.0], [7.9, 1168.0], [8.0, 1168.0], [8.1, 1168.0], [8.2, 1170.0], [8.3, 1171.0], [8.4, 1171.0], [8.5, 1171.0], [8.6, 1172.0], [8.7, 1172.0], [8.8, 1172.0], [8.9, 1172.0], [9.0, 1172.0], [9.1, 1172.0], [9.2, 1174.0], [9.3, 1174.0], [9.4, 1175.0], [9.5, 1175.0], [9.6, 1178.0], [9.7, 1178.0], [9.8, 1179.0], [9.9, 1179.0], [10.0, 1181.0], [10.1, 1183.0], [10.2, 1183.0], [10.3, 1183.0], [10.4, 1185.0], [10.5, 1186.0], [10.6, 1186.0], [10.7, 1192.0], [10.8, 1194.0], [10.9, 1196.0], [11.0, 1196.0], [11.1, 1201.0], [11.2, 1202.0], [11.3, 1202.0], [11.4, 1202.0], [11.5, 1203.0], [11.6, 1203.0], [11.7, 1203.0], [11.8, 1204.0], [11.9, 1205.0], [12.0, 1205.0], [12.1, 1205.0], [12.2, 1206.0], [12.3, 1206.0], [12.4, 1206.0], [12.5, 1206.0], [12.6, 1208.0], [12.7, 1209.0], [12.8, 1214.0], [12.9, 1214.0], [13.0, 1216.0], [13.1, 1218.0], [13.2, 1219.0], [13.3, 1219.0], [13.4, 1225.0], [13.5, 1228.0], [13.6, 1228.0], [13.7, 1231.0], [13.8, 1231.0], [13.9, 1232.0], [14.0, 1232.0], [14.1, 1233.0], [14.2, 1243.0], [14.3, 1245.0], [14.4, 1245.0], [14.5, 1249.0], [14.6, 1249.0], [14.7, 1250.0], [14.8, 1250.0], [14.9, 1251.0], [15.0, 1256.0], [15.1, 1256.0], [15.2, 1257.0], [15.3, 1259.0], [15.4, 1260.0], [15.5, 1260.0], [15.6, 1261.0], [15.7, 1262.0], [15.8, 1263.0], [15.9, 1263.0], [16.0, 1264.0], [16.1, 1266.0], [16.2, 1266.0], [16.3, 1266.0], [16.4, 1269.0], [16.5, 1269.0], [16.6, 1271.0], [16.7, 1271.0], [16.8, 1271.0], [16.9, 1272.0], [17.0, 1272.0], [17.1, 1273.0], [17.2, 1273.0], [17.3, 1276.0], [17.4, 1276.0], [17.5, 1277.0], [17.6, 1279.0], [17.7, 1281.0], [17.8, 1281.0], [17.9, 1282.0], [18.0, 1284.0], [18.1, 1284.0], [18.2, 1284.0], [18.3, 1287.0], [18.4, 1287.0], [18.5, 1287.0], [18.6, 1288.0], [18.7, 1289.0], [18.8, 1298.0], [18.9, 1298.0], [19.0, 1302.0], [19.1, 1307.0], [19.2, 1308.0], [19.3, 1308.0], [19.4, 1312.0], [19.5, 1314.0], [19.6, 1315.0], [19.7, 1315.0], [19.8, 1316.0], [19.9, 1318.0], [20.0, 1319.0], [20.1, 1319.0], [20.2, 1319.0], [20.3, 1341.0], [20.4, 1341.0], [20.5, 1341.0], [20.6, 1341.0], [20.7, 1351.0], [20.8, 1351.0], [20.9, 1367.0], [21.0, 1367.0], [21.1, 1368.0], [21.2, 1368.0], [21.3, 1402.0], [21.4, 1406.0], [21.5, 1408.0], [21.6, 1408.0], [21.7, 1415.0], [21.8, 1419.0], [21.9, 1419.0], [22.0, 1425.0], [22.1, 1427.0], [22.2, 1428.0], [22.3, 1428.0], [22.4, 1429.0], [22.5, 1434.0], [22.6, 1440.0], [22.7, 1440.0], [22.8, 1443.0], [22.9, 1444.0], [23.0, 1444.0], [23.1, 1444.0], [23.2, 1445.0], [23.3, 1445.0], [23.4, 1445.0], [23.5, 1446.0], [23.6, 1450.0], [23.7, 1451.0], [23.8, 1451.0], [23.9, 1453.0], [24.0, 1454.0], [24.1, 1456.0], [24.2, 1456.0], [24.3, 1456.0], [24.4, 1456.0], [24.5, 1461.0], [24.6, 1461.0], [24.7, 1463.0], [24.8, 1466.0], [24.9, 1468.0], [25.0, 1468.0], [25.1, 1469.0], [25.2, 1473.0], [25.3, 1473.0], [25.4, 1473.0], [25.5, 1474.0], [25.6, 1475.0], [25.7, 1475.0], [25.8, 1476.0], [25.9, 1477.0], [26.0, 1477.0], [26.1, 1477.0], [26.2, 1479.0], [26.3, 1480.0], [26.4, 1484.0], [26.5, 1484.0], [26.6, 1490.0], [26.7, 1491.0], [26.8, 1491.0], [26.9, 1498.0], [27.0, 1499.0], [27.1, 1499.0], [27.2, 1499.0], [27.3, 1500.0], [27.4, 1508.0], [27.5, 1511.0], [27.6, 1511.0], [27.7, 1511.0], [27.8, 1513.0], [27.9, 1514.0], [28.0, 1514.0], [28.1, 1516.0], [28.2, 1517.0], [28.3, 1519.0], [28.4, 1519.0], [28.5, 1522.0], [28.6, 1523.0], [28.7, 1523.0], [28.8, 1524.0], [28.9, 1525.0], [29.0, 1525.0], [29.1, 1525.0], [29.2, 1529.0], [29.3, 1529.0], [29.4, 1529.0], [29.5, 1529.0], [29.6, 1530.0], [29.7, 1532.0], [29.8, 1532.0], [29.9, 1532.0], [30.0, 1532.0], [30.1, 1533.0], [30.2, 1533.0], [30.3, 1533.0], [30.4, 1534.0], [30.5, 1536.0], [30.6, 1536.0], [30.7, 1536.0], [30.8, 1537.0], [30.9, 1542.0], [31.0, 1542.0], [31.1, 1544.0], [31.2, 1547.0], [31.3, 1550.0], [31.4, 1550.0], [31.5, 1551.0], [31.6, 1552.0], [31.7, 1552.0], [31.8, 1553.0], [31.9, 1554.0], [32.0, 1558.0], [32.1, 1558.0], [32.2, 1558.0], [32.3, 1558.0], [32.4, 1559.0], [32.5, 1559.0], [32.6, 1560.0], [32.7, 1563.0], [32.8, 1567.0], [32.9, 1567.0], [33.0, 1568.0], [33.1, 1568.0], [33.2, 1569.0], [33.3, 1569.0], [33.4, 1570.0], [33.5, 1574.0], [33.6, 1574.0], [33.7, 1578.0], [33.8, 1578.0], [33.9, 1579.0], [34.0, 1579.0], [34.1, 1580.0], [34.2, 1580.0], [34.3, 1583.0], [34.4, 1583.0], [34.5, 1583.0], [34.6, 1584.0], [34.7, 1584.0], [34.8, 1584.0], [34.9, 1588.0], [35.0, 1589.0], [35.1, 1589.0], [35.2, 1591.0], [35.3, 1595.0], [35.4, 1595.0], [35.5, 1595.0], [35.6, 1596.0], [35.7, 1601.0], [35.8, 1613.0], [35.9, 1613.0], [36.0, 1614.0], [36.1, 1616.0], [36.2, 1616.0], [36.3, 1616.0], [36.4, 1618.0], [36.5, 1618.0], [36.6, 1620.0], [36.7, 1620.0], [36.8, 1624.0], [36.9, 1626.0], [37.0, 1626.0], [37.1, 1626.0], [37.2, 1626.0], [37.3, 1629.0], [37.4, 1629.0], [37.5, 1630.0], [37.6, 1633.0], [37.7, 1633.0], [37.8, 1633.0], [37.9, 1633.0], [38.0, 1638.0], [38.1, 1638.0], [38.2, 1638.0], [38.3, 1638.0], [38.4, 1639.0], [38.5, 1639.0], [38.6, 1641.0], [38.7, 1643.0], [38.8, 1644.0], [38.9, 1644.0], [39.0, 1646.0], [39.1, 1657.0], [39.2, 1660.0], [39.3, 1660.0], [39.4, 1660.0], [39.5, 1660.0], [39.6, 1662.0], [39.7, 1662.0], [39.8, 1664.0], [39.9, 1668.0], [40.0, 1669.0], [40.1, 1669.0], [40.2, 1669.0], [40.3, 1672.0], [40.4, 1672.0], [40.5, 1674.0], [40.6, 1675.0], [40.7, 1676.0], [40.8, 1676.0], [40.9, 1679.0], [41.0, 1679.0], [41.1, 1680.0], [41.2, 1680.0], [41.3, 1682.0], [41.4, 1683.0], [41.5, 1683.0], [41.6, 1683.0], [41.7, 1690.0], [41.8, 1692.0], [41.9, 1692.0], [42.0, 1694.0], [42.1, 1694.0], [42.2, 1698.0], [42.3, 1698.0], [42.4, 1699.0], [42.5, 1699.0], [42.6, 1703.0], [42.7, 1703.0], [42.8, 1709.0], [42.9, 1711.0], [43.0, 1711.0], [43.1, 1711.0], [43.2, 1716.0], [43.3, 1717.0], [43.4, 1717.0], [43.5, 1718.0], [43.6, 1721.0], [43.7, 1724.0], [43.8, 1724.0], [43.9, 1725.0], [44.0, 1726.0], [44.1, 1727.0], [44.2, 1727.0], [44.3, 1731.0], [44.4, 1731.0], [44.5, 1732.0], [44.6, 1732.0], [44.7, 1733.0], [44.8, 1736.0], [44.9, 1740.0], [45.0, 1740.0], [45.1, 1741.0], [45.2, 1742.0], [45.3, 1742.0], [45.4, 1744.0], [45.5, 1746.0], [45.6, 1749.0], [45.7, 1749.0], [45.8, 1750.0], [45.9, 1752.0], [46.0, 1753.0], [46.1, 1753.0], [46.2, 1758.0], [46.3, 1758.0], [46.4, 1758.0], [46.5, 1758.0], [46.6, 1760.0], [46.7, 1761.0], [46.8, 1761.0], [46.9, 1761.0], [47.0, 1762.0], [47.1, 1766.0], [47.2, 1766.0], [47.3, 1767.0], [47.4, 1767.0], [47.5, 1768.0], [47.6, 1768.0], [47.7, 1768.0], [47.8, 1771.0], [47.9, 1772.0], [48.0, 1772.0], [48.1, 1773.0], [48.2, 1774.0], [48.3, 1774.0], [48.4, 1774.0], [48.5, 1774.0], [48.6, 1776.0], [48.7, 1776.0], [48.8, 1776.0], [48.9, 1780.0], [49.0, 1781.0], [49.1, 1781.0], [49.2, 1783.0], [49.3, 1784.0], [49.4, 1788.0], [49.5, 1788.0], [49.6, 1789.0], [49.7, 1790.0], [49.8, 1791.0], [49.9, 1791.0], [50.0, 1792.0], [50.1, 1793.0], [50.2, 1793.0], [50.3, 1793.0], [50.4, 1794.0], [50.5, 1796.0], [50.6, 1796.0], [50.7, 1796.0], [50.8, 1797.0], [50.9, 1797.0], [51.0, 1797.0], [51.1, 1797.0], [51.2, 1800.0], [51.3, 1800.0], [51.4, 1800.0], [51.5, 1804.0], [51.6, 1805.0], [51.7, 1805.0], [51.8, 1806.0], [51.9, 1807.0], [52.0, 1808.0], [52.1, 1808.0], [52.2, 1808.0], [52.3, 1809.0], [52.4, 1809.0], [52.5, 1809.0], [52.6, 1811.0], [52.7, 1814.0], [52.8, 1816.0], [52.9, 1816.0], [53.0, 1817.0], [53.1, 1818.0], [53.2, 1819.0], [53.3, 1819.0], [53.4, 1819.0], [53.5, 1821.0], [53.6, 1821.0], [53.7, 1822.0], [53.8, 1824.0], [53.9, 1825.0], [54.0, 1825.0], [54.1, 1825.0], [54.2, 1826.0], [54.3, 1827.0], [54.4, 1827.0], [54.5, 1829.0], [54.6, 1830.0], [54.7, 1832.0], [54.8, 1832.0], [54.9, 1833.0], [55.0, 1834.0], [55.1, 1834.0], [55.2, 1834.0], [55.3, 1835.0], [55.4, 1835.0], [55.5, 1835.0], [55.6, 1836.0], [55.7, 1837.0], [55.8, 1838.0], [55.9, 1838.0], [56.0, 1838.0], [56.1, 1844.0], [56.2, 1844.0], [56.3, 1844.0], [56.4, 1848.0], [56.5, 1850.0], [56.6, 1851.0], [56.7, 1851.0], [56.8, 1851.0], [56.9, 1853.0], [57.0, 1853.0], [57.1, 1862.0], [57.2, 1864.0], [57.3, 1867.0], [57.4, 1867.0], [57.5, 1868.0], [57.6, 1872.0], [57.7, 1872.0], [57.8, 1872.0], [57.9, 1876.0], [58.0, 1876.0], [58.1, 1878.0], [58.2, 1878.0], [58.3, 1880.0], [58.4, 1880.0], [58.5, 1880.0], [58.6, 1881.0], [58.7, 1882.0], [58.8, 1883.0], [58.9, 1883.0], [59.0, 1884.0], [59.1, 1885.0], [59.2, 1886.0], [59.3, 1886.0], [59.4, 1888.0], [59.5, 1889.0], [59.6, 1889.0], [59.7, 1889.0], [59.8, 1890.0], [59.9, 1891.0], [60.0, 1892.0], [60.1, 1892.0], [60.2, 1893.0], [60.3, 1894.0], [60.4, 1894.0], [60.5, 1894.0], [60.6, 1897.0], [60.7, 1897.0], [60.8, 1897.0], [60.9, 1898.0], [61.0, 1902.0], [61.1, 1902.0], [61.2, 1902.0], [61.3, 1903.0], [61.4, 1903.0], [61.5, 1904.0], [61.6, 1904.0], [61.7, 1904.0], [61.8, 1906.0], [61.9, 1906.0], [62.0, 1906.0], [62.1, 1907.0], [62.2, 1907.0], [62.3, 1907.0], [62.4, 1912.0], [62.5, 1912.0], [62.6, 1912.0], [62.7, 1912.0], [62.8, 1914.0], [62.9, 1914.0], [63.0, 1915.0], [63.1, 1915.0], [63.2, 1918.0], [63.3, 1921.0], [63.4, 1921.0], [63.5, 1922.0], [63.6, 1926.0], [63.7, 1927.0], [63.8, 1927.0], [63.9, 1930.0], [64.0, 1931.0], [64.1, 1931.0], [64.2, 1931.0], [64.3, 1934.0], [64.4, 1935.0], [64.5, 1935.0], [64.6, 1935.0], [64.7, 1935.0], [64.8, 1938.0], [64.9, 1939.0], [65.0, 1939.0], [65.1, 1941.0], [65.2, 1941.0], [65.3, 1941.0], [65.4, 1944.0], [65.5, 1946.0], [65.6, 1947.0], [65.7, 1947.0], [65.8, 1947.0], [65.9, 1950.0], [66.0, 1951.0], [66.1, 1951.0], [66.2, 1951.0], [66.3, 1955.0], [66.4, 1959.0], [66.5, 1959.0], [66.6, 1959.0], [66.7, 1962.0], [66.8, 1962.0], [66.9, 1962.0], [67.0, 1962.0], [67.1, 1962.0], [67.2, 1962.0], [67.3, 1967.0], [67.4, 1968.0], [67.5, 1968.0], [67.6, 1968.0], [67.7, 1970.0], [67.8, 1970.0], [67.9, 1975.0], [68.0, 1975.0], [68.1, 1976.0], [68.2, 1977.0], [68.3, 1979.0], [68.4, 1979.0], [68.5, 1980.0], [68.6, 1983.0], [68.7, 1983.0], [68.8, 1984.0], [68.9, 1986.0], [69.0, 1989.0], [69.1, 1989.0], [69.2, 1991.0], [69.3, 2004.0], [69.4, 2009.0], [69.5, 2009.0], [69.6, 2013.0], [69.7, 2016.0], [69.8, 2016.0], [69.9, 2016.0], [70.0, 2018.0], [70.1, 2020.0], [70.2, 2020.0], [70.3, 2023.0], [70.4, 2027.0], [70.5, 2028.0], [70.6, 2028.0], [70.7, 2029.0], [70.8, 2029.0], [70.9, 2031.0], [71.0, 2031.0], [71.1, 2032.0], [71.2, 2033.0], [71.3, 2033.0], [71.4, 2033.0], [71.5, 2035.0], [71.6, 2037.0], [71.7, 2037.0], [71.8, 2038.0], [71.9, 2040.0], [72.0, 2045.0], [72.1, 2045.0], [72.2, 2045.0], [72.3, 2046.0], [72.4, 2047.0], [72.5, 2047.0], [72.6, 2051.0], [72.7, 2057.0], [72.8, 2058.0], [72.9, 2058.0], [73.0, 2061.0], [73.1, 2061.0], [73.2, 2064.0], [73.3, 2064.0], [73.4, 2065.0], [73.5, 2066.0], [73.6, 2066.0], [73.7, 2066.0], [73.8, 2067.0], [73.9, 2070.0], [74.0, 2070.0], [74.1, 2072.0], [74.2, 2073.0], [74.3, 2073.0], [74.4, 2073.0], [74.5, 2074.0], [74.6, 2075.0], [74.7, 2082.0], [74.8, 2082.0], [74.9, 2084.0], [75.0, 2086.0], [75.1, 2086.0], [75.2, 2088.0], [75.3, 2089.0], [75.4, 2090.0], [75.5, 2090.0], [75.6, 2092.0], [75.7, 2095.0], [75.8, 2096.0], [75.9, 2096.0], [76.0, 2097.0], [76.1, 2098.0], [76.2, 2101.0], [76.3, 2101.0], [76.4, 2102.0], [76.5, 2104.0], [76.6, 2107.0], [76.7, 2107.0], [76.8, 2108.0], [76.9, 2114.0], [77.0, 2114.0], [77.1, 2117.0], [77.2, 2118.0], [77.3, 2118.0], [77.4, 2118.0], [77.5, 2120.0], [77.6, 2122.0], [77.7, 2126.0], [77.8, 2126.0], [77.9, 2126.0], [78.0, 2131.0], [78.1, 2132.0], [78.2, 2132.0], [78.3, 2137.0], [78.4, 2140.0], [78.5, 2140.0], [78.6, 2141.0], [78.7, 2150.0], [78.8, 2150.0], [78.9, 2150.0], [79.0, 2150.0], [79.1, 2153.0], [79.2, 2154.0], [79.3, 2154.0], [79.4, 2155.0], [79.5, 2156.0], [79.6, 2158.0], [79.7, 2158.0], [79.8, 2160.0], [79.9, 2164.0], [80.0, 2167.0], [80.1, 2167.0], [80.2, 2167.0], [80.3, 2168.0], [80.4, 2168.0], [80.5, 2174.0], [80.6, 2176.0], [80.7, 2177.0], [80.8, 2177.0], [80.9, 2179.0], [81.0, 2180.0], [81.1, 2187.0], [81.2, 2187.0], [81.3, 2194.0], [81.4, 2199.0], [81.5, 2200.0], [81.6, 2200.0], [81.7, 2210.0], [81.8, 2214.0], [81.9, 2214.0], [82.0, 2215.0], [82.1, 2221.0], [82.2, 2237.0], [82.3, 2237.0], [82.4, 2247.0], [82.5, 2250.0], [82.6, 2251.0], [82.7, 2251.0], [82.8, 2253.0], [82.9, 2256.0], [83.0, 2264.0], [83.1, 2264.0], [83.2, 2264.0], [83.3, 2273.0], [83.4, 2273.0], [83.5, 2274.0], [83.6, 2276.0], [83.7, 2281.0], [83.8, 2281.0], [83.9, 2282.0], [84.0, 2287.0], [84.1, 2289.0], [84.2, 2289.0], [84.3, 2291.0], [84.4, 2292.0], [84.5, 2297.0], [84.6, 2297.0], [84.7, 2297.0], [84.8, 2302.0], [84.9, 2304.0], [85.0, 2304.0], [85.1, 2305.0], [85.2, 2311.0], [85.3, 2311.0], [85.4, 2314.0], [85.5, 2315.0], [85.6, 2317.0], [85.7, 2317.0], [85.8, 2320.0], [85.9, 2325.0], [86.0, 2329.0], [86.1, 2329.0], [86.2, 2330.0], [86.3, 2331.0], [86.4, 2333.0], [86.5, 2333.0], [86.6, 2333.0], [86.7, 2340.0], [86.8, 2340.0], [86.9, 2347.0], [87.0, 2350.0], [87.1, 2351.0], [87.2, 2351.0], [87.3, 2364.0], [87.4, 2369.0], [87.5, 2391.0], [87.6, 2391.0], [87.7, 2391.0], [87.8, 2392.0], [87.9, 2394.0], [88.0, 2394.0], [88.1, 2398.0], [88.2, 2403.0], [88.3, 2413.0], [88.4, 2413.0], [88.5, 2413.0], [88.6, 2413.0], [88.7, 2413.0], [88.8, 2416.0], [88.9, 2430.0], [89.0, 2434.0], [89.1, 2434.0], [89.2, 2450.0], [89.3, 2454.0], [89.4, 2457.0], [89.5, 2457.0], [89.6, 2458.0], [89.7, 2476.0], [89.8, 2479.0], [89.9, 2479.0], [90.0, 2481.0], [90.1, 2481.0], [90.2, 2481.0], [90.3, 2484.0], [90.4, 2496.0], [90.5, 2497.0], [90.6, 2497.0], [90.7, 2504.0], [90.8, 2506.0], [90.9, 2521.0], [91.0, 2521.0], [91.1, 2542.0], [91.2, 2543.0], [91.3, 2547.0], [91.4, 2547.0], [91.5, 2551.0], [91.6, 2579.0], [91.7, 2579.0], [91.8, 2584.0], [91.9, 2585.0], [92.0, 2592.0], [92.1, 2592.0], [92.2, 2605.0], [92.3, 2606.0], [92.4, 2606.0], [92.5, 2606.0], [92.6, 2607.0], [92.7, 2608.0], [92.8, 2609.0], [92.9, 2609.0], [93.0, 2623.0], [93.1, 2628.0], [93.2, 2628.0], [93.3, 2628.0], [93.4, 2631.0], [93.5, 2682.0], [93.6, 2682.0], [93.7, 2686.0], [93.8, 2686.0], [93.9, 2711.0], [94.0, 2711.0], [94.1, 2722.0], [94.2, 2731.0], [94.3, 2745.0], [94.4, 2745.0], [94.5, 2761.0], [94.6, 2761.0], [94.7, 2791.0], [94.8, 2791.0], [94.9, 2804.0], [95.0, 2817.0], [95.1, 2817.0], [95.2, 2830.0], [95.3, 2833.0], [95.4, 2838.0], [95.5, 2838.0], [95.6, 2845.0], [95.7, 2853.0], [95.8, 2890.0], [95.9, 2890.0], [96.0, 2921.0], [96.1, 2960.0], [96.2, 3034.0], [96.3, 3034.0], [96.4, 3040.0], [96.5, 3090.0], [96.6, 3093.0], [96.7, 3093.0], [96.8, 3111.0], [96.9, 3160.0], [97.0, 3160.0], [97.1, 3181.0], [97.2, 3232.0], [97.3, 3305.0], [97.4, 3305.0], [97.5, 3313.0], [97.6, 3372.0], [97.7, 3387.0], [97.8, 3387.0], [97.9, 3457.0], [98.0, 3464.0], [98.1, 3483.0], [98.2, 3483.0], [98.3, 3495.0], [98.4, 3541.0], [98.5, 3541.0], [98.6, 3586.0], [98.7, 3603.0], [98.8, 3623.0], [98.9, 3623.0], [99.0, 3701.0], [99.1, 3709.0], [99.2, 3821.0], [99.3, 3821.0], [99.4, 4205.0], [99.5, 4299.0], [99.6, 4368.0], [99.7, 4368.0], [99.8, 4444.0], [99.9, 4446.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 700.0, "maxY": 72.0, "series": [{"data": [[700.0, 3.0], [800.0, 4.0], [900.0, 11.0], [1000.0, 17.0], [1100.0, 46.0], [1200.0, 58.0], [1300.0, 17.0], [1400.0, 44.0], [1500.0, 62.0], [1600.0, 51.0], [1700.0, 63.0], [1800.0, 72.0], [1900.0, 61.0], [2000.0, 51.0], [2100.0, 39.0], [2300.0, 25.0], [2200.0, 24.0], [2400.0, 18.0], [2500.0, 11.0], [2600.0, 13.0], [2800.0, 8.0], [2700.0, 7.0], [2900.0, 2.0], [3000.0, 4.0], [3100.0, 3.0], [3300.0, 4.0], [3200.0, 1.0], [3400.0, 4.0], [3500.0, 2.0], [3700.0, 2.0], [3600.0, 2.0], [3800.0, 1.0], [4200.0, 2.0], [4300.0, 1.0], [4400.0, 2.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 4400.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 201.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 534.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 201.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 534.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 11.758241758241757, "minX": 1.60219506E12, "maxY": 12.0, "series": [{"data": [[1.60219506E12, 12.0], [1.60219512E12, 12.0], [1.60219518E12, 11.758241758241757]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60219518E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 1165.0, "minX": 1.0, "maxY": 1835.464088397791, "series": [{"data": [[8.0, 1203.0], [4.0, 1579.0], [2.0, 1584.0], [1.0, 1660.0], [9.0, 1183.0], [10.0, 1165.0], [5.0, 1257.0], [11.0, 1554.0], [12.0, 1835.464088397791], [6.0, 1178.0], [3.0, 1174.0], [7.0, 1595.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[11.910204081632651, 1828.5823129251714]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 12.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 521.4333333333333, "minX": 1.60219506E12, "maxY": 970487.2333333333, "series": [{"data": [[1.60219506E12, 267211.8], [1.60219512E12, 970487.2333333333], [1.60219518E12, 598083.8333333334]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60219506E12, 521.4333333333333], [1.60219512E12, 2952.65], [1.60219518E12, 2048.95]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60219518E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 1758.6703296703288, "minX": 1.60219506E12, "maxY": 1974.2318840579699, "series": [{"data": [[1.60219506E12, 1974.2318840579699], [1.60219512E12, 1851.5750636132304], [1.60219518E12, 1758.6703296703288]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60219518E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 1757.6630036630029, "minX": 1.60219506E12, "maxY": 1972.6956521739128, "series": [{"data": [[1.60219506E12, 1972.6956521739128], [1.60219512E12, 1850.4300254452924], [1.60219518E12, 1757.6630036630029]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60219518E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.60219506E12, "maxY": 2.5362318840579716, "series": [{"data": [[1.60219506E12, 2.5362318840579716], [1.60219512E12, 0.040712468193384234], [1.60219518E12, 0.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60219518E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 748.0, "minX": 1.60219506E12, "maxY": 4446.0, "series": [{"data": [[1.60219506E12, 4205.0], [1.60219512E12, 4446.0], [1.60219518E12, 3313.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60219506E12, 1005.0], [1.60219512E12, 829.5759947395325], [1.60219518E12, 1059.259992814064]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60219506E12, 1005.0], [1.60219512E12, 849.433602104187], [1.60219518E12, 1086.3860028743743]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60219506E12, 1005.0], [1.60219512E12, 840.6079973697663], [1.60219518E12, 1074.329996407032]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60219506E12, 1005.0], [1.60219512E12, 748.0], [1.60219518E12, 941.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60219506E12, 1629.0], [1.60219512E12, 1819.0], [1.60219518E12, 1774.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60219518E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 1252.0, "minX": 2.0, "maxY": 2725.5, "series": [{"data": [[2.0, 2725.5], [4.0, 2596.5], [8.0, 1529.0], [9.0, 1333.5], [5.0, 1935.0], [10.0, 1290.0], [11.0, 1252.0], [6.0, 1856.0], [3.0, 2158.0], [7.0, 1840.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 11.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 1252.0, "minX": 2.0, "maxY": 2724.5, "series": [{"data": [[2.0, 2724.5], [4.0, 2594.0], [8.0, 1527.5], [9.0, 1332.0], [5.0, 1934.0], [10.0, 1289.5], [11.0, 1252.0], [6.0, 1854.5], [3.0, 2156.0], [7.0, 1838.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 11.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1.35, "minX": 1.60219506E12, "maxY": 6.55, "series": [{"data": [[1.60219506E12, 1.35], [1.60219512E12, 6.55], [1.60219518E12, 4.35]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60219518E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1.15, "minX": 1.60219506E12, "maxY": 6.55, "series": [{"data": [[1.60219506E12, 1.15], [1.60219512E12, 6.55], [1.60219518E12, 4.55]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60219518E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.15, "minX": 1.60219506E12, "maxY": 6.55, "series": [{"data": [[1.60219506E12, 1.15], [1.60219512E12, 6.55], [1.60219518E12, 4.55]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60219518E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.15, "minX": 1.60219506E12, "maxY": 6.55, "series": [{"data": [[1.60219506E12, 1.15], [1.60219512E12, 6.55], [1.60219518E12, 4.55]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60219518E12, "title": "Total Transactions Per Second"}},
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

