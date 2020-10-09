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
        data: {"result": {"minY": 743.0, "minX": 0.0, "maxY": 4364.0, "series": [{"data": [[0.0, 743.0], [0.1, 743.0], [0.2, 769.0], [0.3, 813.0], [0.4, 813.0], [0.5, 827.0], [0.6, 856.0], [0.7, 864.0], [0.8, 864.0], [0.9, 866.0], [1.0, 875.0], [1.1, 892.0], [1.2, 892.0], [1.3, 894.0], [1.4, 895.0], [1.5, 897.0], [1.6, 897.0], [1.7, 907.0], [1.8, 909.0], [1.9, 909.0], [2.0, 914.0], [2.1, 920.0], [2.2, 921.0], [2.3, 921.0], [2.4, 930.0], [2.5, 933.0], [2.6, 935.0], [2.7, 935.0], [2.8, 935.0], [2.9, 938.0], [3.0, 945.0], [3.1, 945.0], [3.2, 945.0], [3.3, 947.0], [3.4, 947.0], [3.5, 962.0], [3.6, 971.0], [3.7, 975.0], [3.8, 975.0], [3.9, 977.0], [4.0, 978.0], [4.1, 979.0], [4.2, 979.0], [4.3, 989.0], [4.4, 990.0], [4.5, 992.0], [4.6, 992.0], [4.7, 999.0], [4.8, 1008.0], [4.9, 1010.0], [5.0, 1010.0], [5.1, 1013.0], [5.2, 1014.0], [5.3, 1014.0], [5.4, 1018.0], [5.5, 1019.0], [5.6, 1023.0], [5.7, 1023.0], [5.8, 1025.0], [5.9, 1032.0], [6.0, 1032.0], [6.1, 1032.0], [6.2, 1040.0], [6.3, 1044.0], [6.4, 1045.0], [6.5, 1045.0], [6.6, 1049.0], [6.7, 1049.0], [6.8, 1049.0], [6.9, 1051.0], [7.0, 1055.0], [7.1, 1064.0], [7.2, 1064.0], [7.3, 1065.0], [7.4, 1066.0], [7.5, 1069.0], [7.6, 1069.0], [7.7, 1076.0], [7.8, 1076.0], [7.9, 1083.0], [8.0, 1083.0], [8.1, 1084.0], [8.2, 1085.0], [8.3, 1085.0], [8.4, 1085.0], [8.5, 1086.0], [8.6, 1095.0], [8.7, 1095.0], [8.8, 1096.0], [8.9, 1098.0], [9.0, 1098.0], [9.1, 1098.0], [9.2, 1099.0], [9.3, 1102.0], [9.4, 1104.0], [9.5, 1104.0], [9.6, 1104.0], [9.7, 1106.0], [9.8, 1108.0], [9.9, 1108.0], [10.0, 1109.0], [10.1, 1110.0], [10.2, 1110.0], [10.3, 1110.0], [10.4, 1111.0], [10.5, 1115.0], [10.6, 1115.0], [10.7, 1115.0], [10.8, 1116.0], [10.9, 1116.0], [11.0, 1116.0], [11.1, 1117.0], [11.2, 1122.0], [11.3, 1127.0], [11.4, 1127.0], [11.5, 1129.0], [11.6, 1132.0], [11.7, 1132.0], [11.8, 1134.0], [11.9, 1140.0], [12.0, 1146.0], [12.1, 1146.0], [12.2, 1146.0], [12.3, 1147.0], [12.4, 1148.0], [12.5, 1148.0], [12.6, 1156.0], [12.7, 1156.0], [12.8, 1158.0], [12.9, 1158.0], [13.0, 1160.0], [13.1, 1162.0], [13.2, 1162.0], [13.3, 1162.0], [13.4, 1162.0], [13.5, 1165.0], [13.6, 1165.0], [13.7, 1167.0], [13.8, 1171.0], [13.9, 1172.0], [14.0, 1172.0], [14.1, 1174.0], [14.2, 1174.0], [14.3, 1176.0], [14.4, 1176.0], [14.5, 1176.0], [14.6, 1177.0], [14.7, 1178.0], [14.8, 1178.0], [14.9, 1180.0], [15.0, 1182.0], [15.1, 1182.0], [15.2, 1182.0], [15.3, 1183.0], [15.4, 1183.0], [15.5, 1183.0], [15.6, 1187.0], [15.7, 1188.0], [15.8, 1191.0], [15.9, 1191.0], [16.0, 1191.0], [16.1, 1194.0], [16.2, 1196.0], [16.3, 1196.0], [16.4, 1201.0], [16.5, 1201.0], [16.6, 1202.0], [16.7, 1202.0], [16.8, 1208.0], [16.9, 1208.0], [17.0, 1208.0], [17.1, 1210.0], [17.2, 1220.0], [17.3, 1222.0], [17.4, 1222.0], [17.5, 1223.0], [17.6, 1224.0], [17.7, 1230.0], [17.8, 1230.0], [17.9, 1231.0], [18.0, 1232.0], [18.1, 1236.0], [18.2, 1236.0], [18.3, 1246.0], [18.4, 1246.0], [18.5, 1246.0], [18.6, 1254.0], [18.7, 1256.0], [18.8, 1261.0], [18.9, 1261.0], [19.0, 1265.0], [19.1, 1269.0], [19.2, 1273.0], [19.3, 1273.0], [19.4, 1275.0], [19.5, 1278.0], [19.6, 1280.0], [19.7, 1280.0], [19.8, 1283.0], [19.9, 1285.0], [20.0, 1285.0], [20.1, 1286.0], [20.2, 1288.0], [20.3, 1288.0], [20.4, 1288.0], [20.5, 1289.0], [20.6, 1297.0], [20.7, 1300.0], [20.8, 1300.0], [20.9, 1314.0], [21.0, 1314.0], [21.1, 1316.0], [21.2, 1316.0], [21.3, 1316.0], [21.4, 1317.0], [21.5, 1319.0], [21.6, 1319.0], [21.7, 1321.0], [21.8, 1321.0], [21.9, 1321.0], [22.0, 1322.0], [22.1, 1322.0], [22.2, 1325.0], [22.3, 1325.0], [22.4, 1331.0], [22.5, 1331.0], [22.6, 1333.0], [22.7, 1333.0], [22.8, 1334.0], [22.9, 1336.0], [23.0, 1339.0], [23.1, 1339.0], [23.2, 1344.0], [23.3, 1356.0], [23.4, 1356.0], [23.5, 1359.0], [23.6, 1359.0], [23.7, 1360.0], [23.8, 1360.0], [23.9, 1360.0], [24.0, 1364.0], [24.1, 1368.0], [24.2, 1368.0], [24.3, 1370.0], [24.4, 1371.0], [24.5, 1373.0], [24.6, 1373.0], [24.7, 1374.0], [24.8, 1375.0], [24.9, 1376.0], [25.0, 1376.0], [25.1, 1379.0], [25.2, 1380.0], [25.3, 1380.0], [25.4, 1381.0], [25.5, 1382.0], [25.6, 1383.0], [25.7, 1383.0], [25.8, 1383.0], [25.9, 1385.0], [26.0, 1387.0], [26.1, 1387.0], [26.2, 1387.0], [26.3, 1389.0], [26.4, 1389.0], [26.5, 1389.0], [26.6, 1392.0], [26.7, 1392.0], [26.8, 1392.0], [26.9, 1392.0], [27.0, 1394.0], [27.1, 1396.0], [27.2, 1396.0], [27.3, 1400.0], [27.4, 1400.0], [27.5, 1400.0], [27.6, 1400.0], [27.7, 1404.0], [27.8, 1406.0], [27.9, 1407.0], [28.0, 1407.0], [28.1, 1409.0], [28.2, 1412.0], [28.3, 1414.0], [28.4, 1414.0], [28.5, 1417.0], [28.6, 1418.0], [28.7, 1418.0], [28.8, 1419.0], [28.9, 1433.0], [29.0, 1434.0], [29.1, 1434.0], [29.2, 1442.0], [29.3, 1442.0], [29.4, 1444.0], [29.5, 1444.0], [29.6, 1452.0], [29.7, 1454.0], [29.8, 1454.0], [29.9, 1454.0], [30.0, 1455.0], [30.1, 1460.0], [30.2, 1460.0], [30.3, 1463.0], [30.4, 1465.0], [30.5, 1470.0], [30.6, 1470.0], [30.7, 1476.0], [30.8, 1477.0], [30.9, 1478.0], [31.0, 1478.0], [31.1, 1488.0], [31.2, 1488.0], [31.3, 1495.0], [31.4, 1495.0], [31.5, 1495.0], [31.6, 1501.0], [31.7, 1501.0], [31.8, 1504.0], [31.9, 1510.0], [32.0, 1513.0], [32.1, 1513.0], [32.2, 1519.0], [32.3, 1519.0], [32.4, 1520.0], [32.5, 1520.0], [32.6, 1521.0], [32.7, 1526.0], [32.8, 1527.0], [32.9, 1527.0], [33.0, 1527.0], [33.1, 1533.0], [33.2, 1534.0], [33.3, 1534.0], [33.4, 1536.0], [33.5, 1541.0], [33.6, 1541.0], [33.7, 1546.0], [33.8, 1548.0], [33.9, 1549.0], [34.0, 1549.0], [34.1, 1553.0], [34.2, 1553.0], [34.3, 1555.0], [34.4, 1555.0], [34.5, 1558.0], [34.6, 1563.0], [34.7, 1566.0], [34.8, 1566.0], [34.9, 1567.0], [35.0, 1569.0], [35.1, 1569.0], [35.2, 1569.0], [35.3, 1571.0], [35.4, 1572.0], [35.5, 1572.0], [35.6, 1573.0], [35.7, 1574.0], [35.8, 1578.0], [35.9, 1578.0], [36.0, 1579.0], [36.1, 1579.0], [36.2, 1582.0], [36.3, 1582.0], [36.4, 1583.0], [36.5, 1585.0], [36.6, 1587.0], [36.7, 1587.0], [36.8, 1587.0], [36.9, 1591.0], [37.0, 1591.0], [37.1, 1599.0], [37.2, 1600.0], [37.3, 1602.0], [37.4, 1602.0], [37.5, 1607.0], [37.6, 1607.0], [37.7, 1607.0], [37.8, 1607.0], [37.9, 1609.0], [38.0, 1613.0], [38.1, 1617.0], [38.2, 1617.0], [38.3, 1618.0], [38.4, 1624.0], [38.5, 1624.0], [38.6, 1627.0], [38.7, 1631.0], [38.8, 1631.0], [38.9, 1631.0], [39.0, 1632.0], [39.1, 1643.0], [39.2, 1645.0], [39.3, 1645.0], [39.4, 1645.0], [39.5, 1650.0], [39.6, 1657.0], [39.7, 1657.0], [39.8, 1657.0], [39.9, 1658.0], [40.0, 1658.0], [40.1, 1658.0], [40.2, 1659.0], [40.3, 1659.0], [40.4, 1659.0], [40.5, 1662.0], [40.6, 1666.0], [40.7, 1667.0], [40.8, 1667.0], [40.9, 1669.0], [41.0, 1670.0], [41.1, 1671.0], [41.2, 1671.0], [41.3, 1674.0], [41.4, 1681.0], [41.5, 1681.0], [41.6, 1681.0], [41.7, 1684.0], [41.8, 1686.0], [41.9, 1686.0], [42.0, 1695.0], [42.1, 1696.0], [42.2, 1696.0], [42.3, 1696.0], [42.4, 1699.0], [42.5, 1702.0], [42.6, 1702.0], [42.7, 1702.0], [42.8, 1702.0], [42.9, 1705.0], [43.0, 1707.0], [43.1, 1707.0], [43.2, 1708.0], [43.3, 1708.0], [43.4, 1708.0], [43.5, 1710.0], [43.6, 1710.0], [43.7, 1712.0], [43.8, 1712.0], [43.9, 1712.0], [44.0, 1714.0], [44.1, 1719.0], [44.2, 1719.0], [44.3, 1726.0], [44.4, 1727.0], [44.5, 1727.0], [44.6, 1727.0], [44.7, 1728.0], [44.8, 1728.0], [44.9, 1730.0], [45.0, 1730.0], [45.1, 1734.0], [45.2, 1739.0], [45.3, 1739.0], [45.4, 1742.0], [45.5, 1742.0], [45.6, 1742.0], [45.7, 1742.0], [45.8, 1742.0], [45.9, 1742.0], [46.0, 1744.0], [46.1, 1744.0], [46.2, 1745.0], [46.3, 1746.0], [46.4, 1753.0], [46.5, 1753.0], [46.6, 1754.0], [46.7, 1755.0], [46.8, 1755.0], [46.9, 1757.0], [47.0, 1758.0], [47.1, 1760.0], [47.2, 1760.0], [47.3, 1762.0], [47.4, 1763.0], [47.5, 1764.0], [47.6, 1764.0], [47.7, 1764.0], [47.8, 1764.0], [47.9, 1765.0], [48.0, 1765.0], [48.1, 1767.0], [48.2, 1772.0], [48.3, 1773.0], [48.4, 1773.0], [48.5, 1775.0], [48.6, 1784.0], [48.7, 1784.0], [48.8, 1785.0], [48.9, 1786.0], [49.0, 1791.0], [49.1, 1791.0], [49.2, 1791.0], [49.3, 1795.0], [49.4, 1796.0], [49.5, 1796.0], [49.6, 1800.0], [49.7, 1800.0], [49.8, 1805.0], [49.9, 1805.0], [50.0, 1805.0], [50.1, 1807.0], [50.2, 1807.0], [50.3, 1808.0], [50.4, 1810.0], [50.5, 1811.0], [50.6, 1811.0], [50.7, 1814.0], [50.8, 1816.0], [50.9, 1818.0], [51.0, 1818.0], [51.1, 1818.0], [51.2, 1822.0], [51.3, 1824.0], [51.4, 1824.0], [51.5, 1825.0], [51.6, 1827.0], [51.7, 1827.0], [51.8, 1830.0], [51.9, 1831.0], [52.0, 1837.0], [52.1, 1837.0], [52.2, 1839.0], [52.3, 1841.0], [52.4, 1843.0], [52.5, 1843.0], [52.6, 1844.0], [52.7, 1845.0], [52.8, 1846.0], [52.9, 1846.0], [53.0, 1846.0], [53.1, 1847.0], [53.2, 1847.0], [53.3, 1847.0], [53.4, 1847.0], [53.5, 1849.0], [53.6, 1849.0], [53.7, 1852.0], [53.8, 1853.0], [53.9, 1855.0], [54.0, 1855.0], [54.1, 1857.0], [54.2, 1862.0], [54.3, 1865.0], [54.4, 1865.0], [54.5, 1866.0], [54.6, 1866.0], [54.7, 1867.0], [54.8, 1867.0], [54.9, 1868.0], [55.0, 1869.0], [55.1, 1869.0], [55.2, 1871.0], [55.3, 1871.0], [55.4, 1875.0], [55.5, 1875.0], [55.6, 1877.0], [55.7, 1878.0], [55.8, 1878.0], [55.9, 1878.0], [56.0, 1878.0], [56.1, 1880.0], [56.2, 1881.0], [56.3, 1881.0], [56.4, 1883.0], [56.5, 1884.0], [56.6, 1887.0], [56.7, 1887.0], [56.8, 1890.0], [56.9, 1891.0], [57.0, 1891.0], [57.1, 1893.0], [57.2, 1894.0], [57.3, 1894.0], [57.4, 1894.0], [57.5, 1895.0], [57.6, 1896.0], [57.7, 1896.0], [57.8, 1896.0], [57.9, 1896.0], [58.0, 1897.0], [58.1, 1899.0], [58.2, 1899.0], [58.3, 1901.0], [58.4, 1903.0], [58.5, 1903.0], [58.6, 1904.0], [58.7, 1905.0], [58.8, 1909.0], [58.9, 1909.0], [59.0, 1910.0], [59.1, 1911.0], [59.2, 1913.0], [59.3, 1913.0], [59.4, 1914.0], [59.5, 1915.0], [59.6, 1915.0], [59.7, 1915.0], [59.8, 1917.0], [59.9, 1917.0], [60.0, 1917.0], [60.1, 1917.0], [60.2, 1919.0], [60.3, 1920.0], [60.4, 1920.0], [60.5, 1920.0], [60.6, 1921.0], [60.7, 1922.0], [60.8, 1922.0], [60.9, 1923.0], [61.0, 1923.0], [61.1, 1925.0], [61.2, 1925.0], [61.3, 1925.0], [61.4, 1927.0], [61.5, 1928.0], [61.6, 1928.0], [61.7, 1932.0], [61.8, 1937.0], [61.9, 1937.0], [62.0, 1939.0], [62.1, 1941.0], [62.2, 1942.0], [62.3, 1942.0], [62.4, 1944.0], [62.5, 1946.0], [62.6, 1946.0], [62.7, 1946.0], [62.8, 1947.0], [62.9, 1947.0], [63.0, 1948.0], [63.1, 1948.0], [63.2, 1950.0], [63.3, 1951.0], [63.4, 1951.0], [63.5, 1952.0], [63.6, 1953.0], [63.7, 1959.0], [63.8, 1959.0], [63.9, 1960.0], [64.0, 1960.0], [64.1, 1961.0], [64.2, 1961.0], [64.3, 1961.0], [64.4, 1962.0], [64.5, 1964.0], [64.6, 1964.0], [64.7, 1964.0], [64.8, 1966.0], [64.9, 1966.0], [65.0, 1966.0], [65.1, 1966.0], [65.2, 1967.0], [65.3, 1967.0], [65.4, 1968.0], [65.5, 1968.0], [65.6, 1974.0], [65.7, 1974.0], [65.8, 1975.0], [65.9, 1975.0], [66.0, 1977.0], [66.1, 1977.0], [66.2, 1979.0], [66.3, 1982.0], [66.4, 1982.0], [66.5, 1982.0], [66.6, 1983.0], [66.7, 1983.0], [66.8, 1983.0], [66.9, 1988.0], [67.0, 1990.0], [67.1, 1990.0], [67.2, 1990.0], [67.3, 1996.0], [67.4, 1997.0], [67.5, 1998.0], [67.6, 1998.0], [67.7, 2000.0], [67.8, 2001.0], [67.9, 2005.0], [68.0, 2005.0], [68.1, 2005.0], [68.2, 2006.0], [68.3, 2007.0], [68.4, 2007.0], [68.5, 2007.0], [68.6, 2008.0], [68.7, 2008.0], [68.8, 2010.0], [68.9, 2011.0], [69.0, 2011.0], [69.1, 2011.0], [69.2, 2012.0], [69.3, 2012.0], [69.4, 2013.0], [69.5, 2013.0], [69.6, 2019.0], [69.7, 2021.0], [69.8, 2021.0], [69.9, 2021.0], [70.0, 2021.0], [70.1, 2022.0], [70.2, 2022.0], [70.3, 2023.0], [70.4, 2025.0], [70.5, 2025.0], [70.6, 2025.0], [70.7, 2025.0], [70.8, 2026.0], [70.9, 2027.0], [71.0, 2027.0], [71.1, 2029.0], [71.2, 2031.0], [71.3, 2035.0], [71.4, 2035.0], [71.5, 2035.0], [71.6, 2040.0], [71.7, 2040.0], [71.8, 2042.0], [71.9, 2043.0], [72.0, 2049.0], [72.1, 2049.0], [72.2, 2050.0], [72.3, 2052.0], [72.4, 2052.0], [72.5, 2052.0], [72.6, 2053.0], [72.7, 2061.0], [72.8, 2062.0], [72.9, 2062.0], [73.0, 2062.0], [73.1, 2065.0], [73.2, 2065.0], [73.3, 2065.0], [73.4, 2065.0], [73.5, 2066.0], [73.6, 2066.0], [73.7, 2067.0], [73.8, 2071.0], [73.9, 2072.0], [74.0, 2072.0], [74.1, 2077.0], [74.2, 2078.0], [74.3, 2078.0], [74.4, 2078.0], [74.5, 2078.0], [74.6, 2080.0], [74.7, 2082.0], [74.8, 2082.0], [74.9, 2085.0], [75.0, 2088.0], [75.1, 2088.0], [75.2, 2097.0], [75.3, 2098.0], [75.4, 2100.0], [75.5, 2100.0], [75.6, 2101.0], [75.7, 2102.0], [75.8, 2103.0], [75.9, 2103.0], [76.0, 2104.0], [76.1, 2105.0], [76.2, 2105.0], [76.3, 2105.0], [76.4, 2107.0], [76.5, 2108.0], [76.6, 2109.0], [76.7, 2109.0], [76.8, 2112.0], [76.9, 2112.0], [77.0, 2112.0], [77.1, 2113.0], [77.2, 2115.0], [77.3, 2119.0], [77.4, 2119.0], [77.5, 2120.0], [77.6, 2121.0], [77.7, 2127.0], [77.8, 2127.0], [77.9, 2130.0], [78.0, 2133.0], [78.1, 2134.0], [78.2, 2134.0], [78.3, 2136.0], [78.4, 2136.0], [78.5, 2136.0], [78.6, 2136.0], [78.7, 2138.0], [78.8, 2138.0], [78.9, 2138.0], [79.0, 2148.0], [79.1, 2149.0], [79.2, 2150.0], [79.3, 2150.0], [79.4, 2152.0], [79.5, 2153.0], [79.6, 2154.0], [79.7, 2154.0], [79.8, 2158.0], [79.9, 2162.0], [80.0, 2166.0], [80.1, 2166.0], [80.2, 2166.0], [80.3, 2166.0], [80.4, 2166.0], [80.5, 2169.0], [80.6, 2176.0], [80.7, 2177.0], [80.8, 2177.0], [80.9, 2178.0], [81.0, 2184.0], [81.1, 2185.0], [81.2, 2185.0], [81.3, 2186.0], [81.4, 2191.0], [81.5, 2192.0], [81.6, 2192.0], [81.7, 2193.0], [81.8, 2195.0], [81.9, 2195.0], [82.0, 2198.0], [82.1, 2201.0], [82.2, 2202.0], [82.3, 2202.0], [82.4, 2206.0], [82.5, 2206.0], [82.6, 2210.0], [82.7, 2210.0], [82.8, 2215.0], [82.9, 2216.0], [83.0, 2217.0], [83.1, 2217.0], [83.2, 2219.0], [83.3, 2221.0], [83.4, 2221.0], [83.5, 2224.0], [83.6, 2232.0], [83.7, 2233.0], [83.8, 2233.0], [83.9, 2235.0], [84.0, 2237.0], [84.1, 2239.0], [84.2, 2239.0], [84.3, 2247.0], [84.4, 2248.0], [84.5, 2249.0], [84.6, 2249.0], [84.7, 2251.0], [84.8, 2253.0], [84.9, 2257.0], [85.0, 2257.0], [85.1, 2257.0], [85.2, 2260.0], [85.3, 2260.0], [85.4, 2267.0], [85.5, 2268.0], [85.6, 2268.0], [85.7, 2268.0], [85.8, 2271.0], [85.9, 2275.0], [86.0, 2284.0], [86.1, 2284.0], [86.2, 2284.0], [86.3, 2289.0], [86.4, 2293.0], [86.5, 2293.0], [86.6, 2313.0], [86.7, 2333.0], [86.8, 2333.0], [86.9, 2334.0], [87.0, 2335.0], [87.1, 2338.0], [87.2, 2338.0], [87.3, 2349.0], [87.4, 2353.0], [87.5, 2357.0], [87.6, 2357.0], [87.7, 2357.0], [87.8, 2363.0], [87.9, 2367.0], [88.0, 2367.0], [88.1, 2367.0], [88.2, 2368.0], [88.3, 2368.0], [88.4, 2368.0], [88.5, 2369.0], [88.6, 2370.0], [88.7, 2370.0], [88.8, 2384.0], [88.9, 2389.0], [89.0, 2399.0], [89.1, 2399.0], [89.2, 2403.0], [89.3, 2408.0], [89.4, 2408.0], [89.5, 2408.0], [89.6, 2411.0], [89.7, 2418.0], [89.8, 2420.0], [89.9, 2420.0], [90.0, 2429.0], [90.1, 2429.0], [90.2, 2429.0], [90.3, 2430.0], [90.4, 2439.0], [90.5, 2439.0], [90.6, 2439.0], [90.7, 2447.0], [90.8, 2448.0], [90.9, 2454.0], [91.0, 2454.0], [91.1, 2474.0], [91.2, 2475.0], [91.3, 2485.0], [91.4, 2485.0], [91.5, 2493.0], [91.6, 2499.0], [91.7, 2499.0], [91.8, 2501.0], [91.9, 2508.0], [92.0, 2515.0], [92.1, 2515.0], [92.2, 2522.0], [92.3, 2542.0], [92.4, 2543.0], [92.5, 2543.0], [92.6, 2545.0], [92.7, 2552.0], [92.8, 2557.0], [92.9, 2557.0], [93.0, 2559.0], [93.1, 2577.0], [93.2, 2581.0], [93.3, 2581.0], [93.4, 2582.0], [93.5, 2585.0], [93.6, 2585.0], [93.7, 2591.0], [93.8, 2607.0], [93.9, 2662.0], [94.0, 2662.0], [94.1, 2705.0], [94.2, 2705.0], [94.3, 2714.0], [94.4, 2714.0], [94.5, 2717.0], [94.6, 2721.0], [94.7, 2722.0], [94.8, 2722.0], [94.9, 2732.0], [95.0, 2732.0], [95.1, 2732.0], [95.2, 2739.0], [95.3, 2745.0], [95.4, 2749.0], [95.5, 2749.0], [95.6, 2754.0], [95.7, 2757.0], [95.8, 2798.0], [95.9, 2798.0], [96.0, 2814.0], [96.1, 2819.0], [96.2, 2848.0], [96.3, 2848.0], [96.4, 2865.0], [96.5, 2871.0], [96.6, 2888.0], [96.7, 2888.0], [96.8, 2915.0], [96.9, 2925.0], [97.0, 2925.0], [97.1, 2972.0], [97.2, 3012.0], [97.3, 3014.0], [97.4, 3014.0], [97.5, 3033.0], [97.6, 3045.0], [97.7, 3084.0], [97.8, 3084.0], [97.9, 3099.0], [98.0, 3190.0], [98.1, 3262.0], [98.2, 3262.0], [98.3, 3300.0], [98.4, 3469.0], [98.5, 3469.0], [98.6, 3535.0], [98.7, 3541.0], [98.8, 3572.0], [98.9, 3572.0], [99.0, 3731.0], [99.1, 3851.0], [99.2, 3917.0], [99.3, 3917.0], [99.4, 4132.0], [99.5, 4171.0], [99.6, 4235.0], [99.7, 4235.0], [99.8, 4281.0], [99.9, 4364.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 700.0, "maxY": 69.0, "series": [{"data": [[700.0, 2.0], [800.0, 10.0], [900.0, 23.0], [1000.0, 33.0], [1100.0, 52.0], [1200.0, 32.0], [1300.0, 48.0], [1400.0, 32.0], [1500.0, 41.0], [1600.0, 39.0], [1700.0, 52.0], [1800.0, 64.0], [1900.0, 69.0], [2000.0, 57.0], [2100.0, 49.0], [2200.0, 33.0], [2300.0, 19.0], [2400.0, 19.0], [2500.0, 15.0], [2600.0, 2.0], [2700.0, 14.0], [2800.0, 6.0], [2900.0, 3.0], [3000.0, 6.0], [3100.0, 1.0], [3300.0, 1.0], [3200.0, 1.0], [3400.0, 1.0], [3500.0, 3.0], [3700.0, 1.0], [3800.0, 1.0], [3900.0, 1.0], [4200.0, 2.0], [4100.0, 2.0], [4300.0, 1.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 4300.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 232.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 503.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 232.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 503.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 11.816666666666665, "minX": 1.60219644E12, "maxY": 12.0, "series": [{"data": [[1.6021965E12, 11.816666666666665], [1.60219644E12, 12.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6021965E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 1086.0, "minX": 1.0, "maxY": 1802.3991712707175, "series": [{"data": [[8.0, 1117.0], [4.0, 1162.0], [2.0, 1501.0], [1.0, 1548.0], [9.0, 1106.0], [10.0, 1110.0], [5.0, 1587.0], [11.0, 1086.0], [12.0, 1802.3991712707175], [6.0, 1110.0], [3.0, 1558.0], [7.0, 1146.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[11.910204081632651, 1794.514285714285]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 12.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 2700.866666666667, "minX": 1.60219644E12, "maxY": 1003580.9166666666, "series": [{"data": [[1.6021965E12, 832201.0666666667], [1.60219644E12, 1003580.9166666666]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6021965E12, 2700.866666666667], [1.60219644E12, 2822.1666666666665]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6021965E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 1760.6666666666674, "minX": 1.60219644E12, "maxY": 1827.0079999999994, "series": [{"data": [[1.6021965E12, 1760.6666666666674], [1.60219644E12, 1827.0079999999994]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6021965E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 1759.6611111111115, "minX": 1.60219644E12, "maxY": 1825.9226666666664, "series": [{"data": [[1.6021965E12, 1759.6611111111115], [1.60219644E12, 1825.9226666666664]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6021965E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.041666666666666706, "minX": 1.60219644E12, "maxY": 0.4000000000000008, "series": [{"data": [[1.6021965E12, 0.041666666666666706], [1.60219644E12, 0.4000000000000008]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6021965E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 743.0, "minX": 1.60219644E12, "maxY": 4364.0, "series": [{"data": [[1.6021965E12, 4364.0], [1.60219644E12, 4235.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6021965E12, 879.2329985368252], [1.60219644E12, 818.3759987449646]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6021965E12, 884.75630058527], [1.60219644E12, 823.1136005020142]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6021965E12, 882.3014992684126], [1.60219644E12, 821.0079993724823]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.6021965E12, 856.0], [1.60219644E12, 743.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6021965E12, 1763.0], [1.60219644E12, 1824.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6021965E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 1175.0, "minX": 2.0, "maxY": 2154.0, "series": [{"data": [[2.0, 1983.0], [8.0, 1727.5], [4.0, 2117.0], [9.0, 1263.0], [5.0, 1960.0], [10.0, 1175.0], [6.0, 1951.0], [12.0, 1179.5], [3.0, 2154.0], [7.0, 1896.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 12.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 1175.0, "minX": 2.0, "maxY": 2153.0, "series": [{"data": [[2.0, 1981.5], [8.0, 1726.5], [4.0, 2115.5], [9.0, 1262.5], [5.0, 1953.0], [10.0, 1175.0], [6.0, 1949.5], [12.0, 1179.0], [3.0, 2153.0], [7.0, 1895.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 12.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 5.8, "minX": 1.60219644E12, "maxY": 6.45, "series": [{"data": [[1.6021965E12, 5.8], [1.60219644E12, 6.45]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6021965E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 6.0, "minX": 1.60219644E12, "maxY": 6.25, "series": [{"data": [[1.6021965E12, 6.0], [1.60219644E12, 6.25]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6021965E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 6.0, "minX": 1.60219644E12, "maxY": 6.25, "series": [{"data": [[1.6021965E12, 6.0], [1.60219644E12, 6.25]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6021965E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 6.0, "minX": 1.60219644E12, "maxY": 6.25, "series": [{"data": [[1.6021965E12, 6.0], [1.60219644E12, 6.25]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6021965E12, "title": "Total Transactions Per Second"}},
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

