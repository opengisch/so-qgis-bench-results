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
        data: {"result": {"minY": 541.0, "minX": 0.0, "maxY": 4380.0, "series": [{"data": [[0.0, 541.0], [0.1, 541.0], [0.2, 567.0], [0.3, 688.0], [0.4, 688.0], [0.5, 756.0], [0.6, 771.0], [0.7, 809.0], [0.8, 809.0], [0.9, 822.0], [1.0, 826.0], [1.1, 835.0], [1.2, 835.0], [1.3, 868.0], [1.4, 873.0], [1.5, 879.0], [1.6, 879.0], [1.7, 896.0], [1.8, 913.0], [1.9, 913.0], [2.0, 914.0], [2.1, 919.0], [2.2, 928.0], [2.3, 928.0], [2.4, 942.0], [2.5, 946.0], [2.6, 960.0], [2.7, 960.0], [2.8, 960.0], [2.9, 964.0], [3.0, 967.0], [3.1, 967.0], [3.2, 967.0], [3.3, 967.0], [3.4, 967.0], [3.5, 976.0], [3.6, 985.0], [3.7, 991.0], [3.8, 991.0], [3.9, 1019.0], [4.0, 1020.0], [4.1, 1027.0], [4.2, 1027.0], [4.3, 1029.0], [4.4, 1030.0], [4.5, 1035.0], [4.6, 1035.0], [4.7, 1036.0], [4.8, 1043.0], [4.9, 1044.0], [5.0, 1044.0], [5.1, 1049.0], [5.2, 1051.0], [5.3, 1051.0], [5.4, 1054.0], [5.5, 1055.0], [5.6, 1056.0], [5.7, 1056.0], [5.8, 1058.0], [5.9, 1061.0], [6.0, 1063.0], [6.1, 1063.0], [6.2, 1063.0], [6.3, 1064.0], [6.4, 1065.0], [6.5, 1065.0], [6.6, 1065.0], [6.7, 1065.0], [6.8, 1065.0], [6.9, 1065.0], [7.0, 1066.0], [7.1, 1072.0], [7.2, 1072.0], [7.3, 1072.0], [7.4, 1074.0], [7.5, 1075.0], [7.6, 1075.0], [7.7, 1078.0], [7.8, 1084.0], [7.9, 1087.0], [8.0, 1087.0], [8.1, 1088.0], [8.2, 1093.0], [8.3, 1094.0], [8.4, 1094.0], [8.5, 1094.0], [8.6, 1097.0], [8.7, 1097.0], [8.8, 1108.0], [8.9, 1111.0], [9.0, 1111.0], [9.1, 1111.0], [9.2, 1111.0], [9.3, 1113.0], [9.4, 1115.0], [9.5, 1115.0], [9.6, 1118.0], [9.7, 1120.0], [9.8, 1120.0], [9.9, 1120.0], [10.0, 1121.0], [10.1, 1122.0], [10.2, 1122.0], [10.3, 1123.0], [10.4, 1124.0], [10.5, 1130.0], [10.6, 1130.0], [10.7, 1131.0], [10.8, 1134.0], [10.9, 1139.0], [11.0, 1139.0], [11.1, 1139.0], [11.2, 1140.0], [11.3, 1146.0], [11.4, 1146.0], [11.5, 1150.0], [11.6, 1152.0], [11.7, 1152.0], [11.8, 1152.0], [11.9, 1152.0], [12.0, 1154.0], [12.1, 1154.0], [12.2, 1155.0], [12.3, 1156.0], [12.4, 1158.0], [12.5, 1158.0], [12.6, 1159.0], [12.7, 1164.0], [12.8, 1172.0], [12.9, 1172.0], [13.0, 1178.0], [13.1, 1180.0], [13.2, 1184.0], [13.3, 1184.0], [13.4, 1187.0], [13.5, 1188.0], [13.6, 1188.0], [13.7, 1190.0], [13.8, 1193.0], [13.9, 1194.0], [14.0, 1194.0], [14.1, 1194.0], [14.2, 1198.0], [14.3, 1198.0], [14.4, 1198.0], [14.5, 1199.0], [14.6, 1203.0], [14.7, 1203.0], [14.8, 1203.0], [14.9, 1204.0], [15.0, 1208.0], [15.1, 1208.0], [15.2, 1208.0], [15.3, 1209.0], [15.4, 1212.0], [15.5, 1212.0], [15.6, 1215.0], [15.7, 1215.0], [15.8, 1220.0], [15.9, 1220.0], [16.0, 1221.0], [16.1, 1222.0], [16.2, 1224.0], [16.3, 1224.0], [16.4, 1230.0], [16.5, 1234.0], [16.6, 1237.0], [16.7, 1237.0], [16.8, 1238.0], [16.9, 1239.0], [17.0, 1239.0], [17.1, 1248.0], [17.2, 1249.0], [17.3, 1249.0], [17.4, 1249.0], [17.5, 1252.0], [17.6, 1255.0], [17.7, 1256.0], [17.8, 1256.0], [17.9, 1258.0], [18.0, 1259.0], [18.1, 1261.0], [18.2, 1261.0], [18.3, 1262.0], [18.4, 1265.0], [18.5, 1265.0], [18.6, 1266.0], [18.7, 1268.0], [18.8, 1273.0], [18.9, 1273.0], [19.0, 1275.0], [19.1, 1275.0], [19.2, 1277.0], [19.3, 1277.0], [19.4, 1277.0], [19.5, 1279.0], [19.6, 1285.0], [19.7, 1285.0], [19.8, 1286.0], [19.9, 1288.0], [20.0, 1288.0], [20.1, 1288.0], [20.2, 1289.0], [20.3, 1291.0], [20.4, 1291.0], [20.5, 1292.0], [20.6, 1294.0], [20.7, 1296.0], [20.8, 1296.0], [20.9, 1303.0], [21.0, 1304.0], [21.1, 1308.0], [21.2, 1308.0], [21.3, 1309.0], [21.4, 1313.0], [21.5, 1316.0], [21.6, 1316.0], [21.7, 1317.0], [21.8, 1317.0], [21.9, 1317.0], [22.0, 1318.0], [22.1, 1319.0], [22.2, 1319.0], [22.3, 1319.0], [22.4, 1320.0], [22.5, 1324.0], [22.6, 1329.0], [22.7, 1329.0], [22.8, 1332.0], [22.9, 1339.0], [23.0, 1340.0], [23.1, 1340.0], [23.2, 1342.0], [23.3, 1343.0], [23.4, 1343.0], [23.5, 1348.0], [23.6, 1351.0], [23.7, 1352.0], [23.8, 1352.0], [23.9, 1354.0], [24.0, 1355.0], [24.1, 1358.0], [24.2, 1358.0], [24.3, 1360.0], [24.4, 1362.0], [24.5, 1363.0], [24.6, 1363.0], [24.7, 1364.0], [24.8, 1366.0], [24.9, 1369.0], [25.0, 1369.0], [25.1, 1370.0], [25.2, 1372.0], [25.3, 1372.0], [25.4, 1374.0], [25.5, 1374.0], [25.6, 1376.0], [25.7, 1376.0], [25.8, 1377.0], [25.9, 1378.0], [26.0, 1381.0], [26.1, 1381.0], [26.2, 1396.0], [26.3, 1398.0], [26.4, 1399.0], [26.5, 1399.0], [26.6, 1401.0], [26.7, 1405.0], [26.8, 1405.0], [26.9, 1406.0], [27.0, 1408.0], [27.1, 1409.0], [27.2, 1409.0], [27.3, 1409.0], [27.4, 1412.0], [27.5, 1415.0], [27.6, 1415.0], [27.7, 1416.0], [27.8, 1418.0], [27.9, 1419.0], [28.0, 1419.0], [28.1, 1421.0], [28.2, 1425.0], [28.3, 1426.0], [28.4, 1426.0], [28.5, 1426.0], [28.6, 1427.0], [28.7, 1427.0], [28.8, 1430.0], [28.9, 1430.0], [29.0, 1432.0], [29.1, 1432.0], [29.2, 1436.0], [29.3, 1437.0], [29.4, 1440.0], [29.5, 1440.0], [29.6, 1443.0], [29.7, 1445.0], [29.8, 1445.0], [29.9, 1445.0], [30.0, 1448.0], [30.1, 1448.0], [30.2, 1448.0], [30.3, 1457.0], [30.4, 1457.0], [30.5, 1458.0], [30.6, 1458.0], [30.7, 1458.0], [30.8, 1459.0], [30.9, 1468.0], [31.0, 1468.0], [31.1, 1468.0], [31.2, 1471.0], [31.3, 1475.0], [31.4, 1475.0], [31.5, 1475.0], [31.6, 1479.0], [31.7, 1479.0], [31.8, 1482.0], [31.9, 1482.0], [32.0, 1491.0], [32.1, 1491.0], [32.2, 1501.0], [32.3, 1501.0], [32.4, 1507.0], [32.5, 1507.0], [32.6, 1507.0], [32.7, 1511.0], [32.8, 1511.0], [32.9, 1511.0], [33.0, 1513.0], [33.1, 1515.0], [33.2, 1516.0], [33.3, 1516.0], [33.4, 1523.0], [33.5, 1524.0], [33.6, 1524.0], [33.7, 1525.0], [33.8, 1527.0], [33.9, 1528.0], [34.0, 1528.0], [34.1, 1530.0], [34.2, 1531.0], [34.3, 1532.0], [34.4, 1532.0], [34.5, 1534.0], [34.6, 1535.0], [34.7, 1537.0], [34.8, 1537.0], [34.9, 1539.0], [35.0, 1539.0], [35.1, 1539.0], [35.2, 1542.0], [35.3, 1544.0], [35.4, 1545.0], [35.5, 1545.0], [35.6, 1548.0], [35.7, 1551.0], [35.8, 1552.0], [35.9, 1552.0], [36.0, 1555.0], [36.1, 1559.0], [36.2, 1562.0], [36.3, 1562.0], [36.4, 1562.0], [36.5, 1565.0], [36.6, 1569.0], [36.7, 1569.0], [36.8, 1574.0], [36.9, 1576.0], [37.0, 1576.0], [37.1, 1584.0], [37.2, 1587.0], [37.3, 1590.0], [37.4, 1590.0], [37.5, 1594.0], [37.6, 1596.0], [37.7, 1598.0], [37.8, 1598.0], [37.9, 1599.0], [38.0, 1599.0], [38.1, 1601.0], [38.2, 1601.0], [38.3, 1602.0], [38.4, 1604.0], [38.5, 1604.0], [38.6, 1605.0], [38.7, 1606.0], [38.8, 1608.0], [38.9, 1608.0], [39.0, 1608.0], [39.1, 1608.0], [39.2, 1610.0], [39.3, 1610.0], [39.4, 1610.0], [39.5, 1614.0], [39.6, 1619.0], [39.7, 1619.0], [39.8, 1619.0], [39.9, 1627.0], [40.0, 1628.0], [40.1, 1628.0], [40.2, 1629.0], [40.3, 1631.0], [40.4, 1631.0], [40.5, 1637.0], [40.6, 1642.0], [40.7, 1642.0], [40.8, 1642.0], [40.9, 1644.0], [41.0, 1646.0], [41.1, 1646.0], [41.2, 1646.0], [41.3, 1647.0], [41.4, 1648.0], [41.5, 1649.0], [41.6, 1649.0], [41.7, 1652.0], [41.8, 1653.0], [41.9, 1653.0], [42.0, 1656.0], [42.1, 1658.0], [42.2, 1659.0], [42.3, 1659.0], [42.4, 1659.0], [42.5, 1662.0], [42.6, 1662.0], [42.7, 1662.0], [42.8, 1670.0], [42.9, 1671.0], [43.0, 1671.0], [43.1, 1671.0], [43.2, 1671.0], [43.3, 1674.0], [43.4, 1674.0], [43.5, 1674.0], [43.6, 1675.0], [43.7, 1675.0], [43.8, 1675.0], [43.9, 1676.0], [44.0, 1676.0], [44.1, 1676.0], [44.2, 1676.0], [44.3, 1677.0], [44.4, 1678.0], [44.5, 1679.0], [44.6, 1679.0], [44.7, 1687.0], [44.8, 1687.0], [44.9, 1688.0], [45.0, 1688.0], [45.1, 1689.0], [45.2, 1692.0], [45.3, 1692.0], [45.4, 1694.0], [45.5, 1695.0], [45.6, 1695.0], [45.7, 1695.0], [45.8, 1698.0], [45.9, 1703.0], [46.0, 1705.0], [46.1, 1705.0], [46.2, 1707.0], [46.3, 1710.0], [46.4, 1712.0], [46.5, 1712.0], [46.6, 1713.0], [46.7, 1714.0], [46.8, 1714.0], [46.9, 1715.0], [47.0, 1716.0], [47.1, 1717.0], [47.2, 1717.0], [47.3, 1720.0], [47.4, 1720.0], [47.5, 1722.0], [47.6, 1722.0], [47.7, 1725.0], [47.8, 1728.0], [47.9, 1731.0], [48.0, 1731.0], [48.1, 1731.0], [48.2, 1731.0], [48.3, 1734.0], [48.4, 1734.0], [48.5, 1738.0], [48.6, 1740.0], [48.7, 1740.0], [48.8, 1740.0], [48.9, 1741.0], [49.0, 1741.0], [49.1, 1741.0], [49.2, 1741.0], [49.3, 1741.0], [49.4, 1747.0], [49.5, 1747.0], [49.6, 1748.0], [49.7, 1751.0], [49.8, 1753.0], [49.9, 1753.0], [50.0, 1759.0], [50.1, 1764.0], [50.2, 1764.0], [50.3, 1764.0], [50.4, 1766.0], [50.5, 1767.0], [50.6, 1767.0], [50.7, 1770.0], [50.8, 1770.0], [50.9, 1771.0], [51.0, 1771.0], [51.1, 1772.0], [51.2, 1773.0], [51.3, 1777.0], [51.4, 1777.0], [51.5, 1777.0], [51.6, 1778.0], [51.7, 1778.0], [51.8, 1779.0], [51.9, 1779.0], [52.0, 1780.0], [52.1, 1780.0], [52.2, 1780.0], [52.3, 1790.0], [52.4, 1792.0], [52.5, 1792.0], [52.6, 1792.0], [52.7, 1804.0], [52.8, 1810.0], [52.9, 1810.0], [53.0, 1812.0], [53.1, 1815.0], [53.2, 1818.0], [53.3, 1818.0], [53.4, 1822.0], [53.5, 1823.0], [53.6, 1823.0], [53.7, 1824.0], [53.8, 1825.0], [53.9, 1826.0], [54.0, 1826.0], [54.1, 1826.0], [54.2, 1830.0], [54.3, 1832.0], [54.4, 1832.0], [54.5, 1832.0], [54.6, 1833.0], [54.7, 1835.0], [54.8, 1835.0], [54.9, 1837.0], [55.0, 1837.0], [55.1, 1837.0], [55.2, 1839.0], [55.3, 1843.0], [55.4, 1843.0], [55.5, 1843.0], [55.6, 1849.0], [55.7, 1850.0], [55.8, 1854.0], [55.9, 1854.0], [56.0, 1854.0], [56.1, 1857.0], [56.2, 1859.0], [56.3, 1859.0], [56.4, 1860.0], [56.5, 1861.0], [56.6, 1862.0], [56.7, 1862.0], [56.8, 1863.0], [56.9, 1866.0], [57.0, 1866.0], [57.1, 1866.0], [57.2, 1868.0], [57.3, 1871.0], [57.4, 1871.0], [57.5, 1873.0], [57.6, 1874.0], [57.7, 1874.0], [57.8, 1874.0], [57.9, 1875.0], [58.0, 1879.0], [58.1, 1881.0], [58.2, 1881.0], [58.3, 1882.0], [58.4, 1882.0], [58.5, 1882.0], [58.6, 1885.0], [58.7, 1889.0], [58.8, 1889.0], [58.9, 1889.0], [59.0, 1889.0], [59.1, 1894.0], [59.2, 1894.0], [59.3, 1894.0], [59.4, 1896.0], [59.5, 1896.0], [59.6, 1899.0], [59.7, 1899.0], [59.8, 1900.0], [59.9, 1901.0], [60.0, 1903.0], [60.1, 1903.0], [60.2, 1906.0], [60.3, 1906.0], [60.4, 1906.0], [60.5, 1908.0], [60.6, 1908.0], [60.7, 1909.0], [60.8, 1909.0], [60.9, 1909.0], [61.0, 1913.0], [61.1, 1917.0], [61.2, 1917.0], [61.3, 1918.0], [61.4, 1920.0], [61.5, 1920.0], [61.6, 1920.0], [61.7, 1921.0], [61.8, 1922.0], [61.9, 1922.0], [62.0, 1923.0], [62.1, 1923.0], [62.2, 1924.0], [62.3, 1924.0], [62.4, 1932.0], [62.5, 1932.0], [62.6, 1932.0], [62.7, 1932.0], [62.8, 1933.0], [62.9, 1934.0], [63.0, 1936.0], [63.1, 1936.0], [63.2, 1936.0], [63.3, 1937.0], [63.4, 1937.0], [63.5, 1937.0], [63.6, 1939.0], [63.7, 1939.0], [63.8, 1939.0], [63.9, 1943.0], [64.0, 1943.0], [64.1, 1944.0], [64.2, 1944.0], [64.3, 1946.0], [64.4, 1946.0], [64.5, 1946.0], [64.6, 1946.0], [64.7, 1947.0], [64.8, 1952.0], [64.9, 1954.0], [65.0, 1954.0], [65.1, 1955.0], [65.2, 1955.0], [65.3, 1955.0], [65.4, 1966.0], [65.5, 1969.0], [65.6, 1969.0], [65.7, 1969.0], [65.8, 1977.0], [65.9, 1978.0], [66.0, 1979.0], [66.1, 1979.0], [66.2, 1981.0], [66.3, 1982.0], [66.4, 1982.0], [66.5, 1982.0], [66.6, 1985.0], [66.7, 1985.0], [66.8, 1985.0], [66.9, 1987.0], [67.0, 1988.0], [67.1, 1992.0], [67.2, 1992.0], [67.3, 1998.0], [67.4, 2000.0], [67.5, 2000.0], [67.6, 2000.0], [67.7, 2001.0], [67.8, 2002.0], [67.9, 2003.0], [68.0, 2003.0], [68.1, 2003.0], [68.2, 2004.0], [68.3, 2007.0], [68.4, 2007.0], [68.5, 2012.0], [68.6, 2013.0], [68.7, 2013.0], [68.8, 2014.0], [68.9, 2015.0], [69.0, 2015.0], [69.1, 2015.0], [69.2, 2016.0], [69.3, 2016.0], [69.4, 2018.0], [69.5, 2018.0], [69.6, 2019.0], [69.7, 2021.0], [69.8, 2022.0], [69.9, 2022.0], [70.0, 2023.0], [70.1, 2026.0], [70.2, 2026.0], [70.3, 2027.0], [70.4, 2027.0], [70.5, 2027.0], [70.6, 2027.0], [70.7, 2028.0], [70.8, 2030.0], [70.9, 2030.0], [71.0, 2030.0], [71.1, 2030.0], [71.2, 2031.0], [71.3, 2036.0], [71.4, 2036.0], [71.5, 2042.0], [71.6, 2046.0], [71.7, 2046.0], [71.8, 2048.0], [71.9, 2051.0], [72.0, 2055.0], [72.1, 2055.0], [72.2, 2056.0], [72.3, 2056.0], [72.4, 2058.0], [72.5, 2058.0], [72.6, 2059.0], [72.7, 2061.0], [72.8, 2064.0], [72.9, 2064.0], [73.0, 2069.0], [73.1, 2071.0], [73.2, 2076.0], [73.3, 2076.0], [73.4, 2079.0], [73.5, 2083.0], [73.6, 2083.0], [73.7, 2085.0], [73.8, 2086.0], [73.9, 2089.0], [74.0, 2089.0], [74.1, 2090.0], [74.2, 2096.0], [74.3, 2098.0], [74.4, 2098.0], [74.5, 2101.0], [74.6, 2102.0], [74.7, 2103.0], [74.8, 2103.0], [74.9, 2105.0], [75.0, 2109.0], [75.1, 2109.0], [75.2, 2112.0], [75.3, 2112.0], [75.4, 2112.0], [75.5, 2112.0], [75.6, 2114.0], [75.7, 2116.0], [75.8, 2119.0], [75.9, 2119.0], [76.0, 2127.0], [76.1, 2128.0], [76.2, 2129.0], [76.3, 2129.0], [76.4, 2131.0], [76.5, 2132.0], [76.6, 2140.0], [76.7, 2140.0], [76.8, 2143.0], [76.9, 2144.0], [77.0, 2144.0], [77.1, 2145.0], [77.2, 2148.0], [77.3, 2149.0], [77.4, 2149.0], [77.5, 2149.0], [77.6, 2150.0], [77.7, 2152.0], [77.8, 2152.0], [77.9, 2159.0], [78.0, 2160.0], [78.1, 2162.0], [78.2, 2162.0], [78.3, 2162.0], [78.4, 2163.0], [78.5, 2163.0], [78.6, 2169.0], [78.7, 2174.0], [78.8, 2175.0], [78.9, 2175.0], [79.0, 2183.0], [79.1, 2186.0], [79.2, 2190.0], [79.3, 2190.0], [79.4, 2192.0], [79.5, 2202.0], [79.6, 2204.0], [79.7, 2204.0], [79.8, 2206.0], [79.9, 2208.0], [80.0, 2209.0], [80.1, 2209.0], [80.2, 2217.0], [80.3, 2219.0], [80.4, 2219.0], [80.5, 2221.0], [80.6, 2223.0], [80.7, 2233.0], [80.8, 2233.0], [80.9, 2233.0], [81.0, 2235.0], [81.1, 2238.0], [81.2, 2238.0], [81.3, 2243.0], [81.4, 2255.0], [81.5, 2258.0], [81.6, 2258.0], [81.7, 2259.0], [81.8, 2262.0], [81.9, 2262.0], [82.0, 2265.0], [82.1, 2268.0], [82.2, 2279.0], [82.3, 2279.0], [82.4, 2283.0], [82.5, 2286.0], [82.6, 2286.0], [82.7, 2286.0], [82.8, 2286.0], [82.9, 2287.0], [83.0, 2287.0], [83.1, 2287.0], [83.2, 2292.0], [83.3, 2295.0], [83.4, 2295.0], [83.5, 2295.0], [83.6, 2296.0], [83.7, 2300.0], [83.8, 2300.0], [83.9, 2302.0], [84.0, 2303.0], [84.1, 2305.0], [84.2, 2305.0], [84.3, 2306.0], [84.4, 2308.0], [84.5, 2318.0], [84.6, 2318.0], [84.7, 2325.0], [84.8, 2325.0], [84.9, 2326.0], [85.0, 2326.0], [85.1, 2328.0], [85.2, 2328.0], [85.3, 2328.0], [85.4, 2329.0], [85.5, 2334.0], [85.6, 2338.0], [85.7, 2338.0], [85.8, 2340.0], [85.9, 2341.0], [86.0, 2341.0], [86.1, 2341.0], [86.2, 2344.0], [86.3, 2346.0], [86.4, 2348.0], [86.5, 2348.0], [86.6, 2349.0], [86.7, 2351.0], [86.8, 2351.0], [86.9, 2351.0], [87.0, 2357.0], [87.1, 2358.0], [87.2, 2358.0], [87.3, 2361.0], [87.4, 2370.0], [87.5, 2377.0], [87.6, 2377.0], [87.7, 2379.0], [87.8, 2382.0], [87.9, 2384.0], [88.0, 2384.0], [88.1, 2390.0], [88.2, 2392.0], [88.3, 2393.0], [88.4, 2393.0], [88.5, 2393.0], [88.6, 2393.0], [88.7, 2393.0], [88.8, 2400.0], [88.9, 2407.0], [89.0, 2409.0], [89.1, 2409.0], [89.2, 2413.0], [89.3, 2420.0], [89.4, 2422.0], [89.5, 2422.0], [89.6, 2424.0], [89.7, 2436.0], [89.8, 2448.0], [89.9, 2448.0], [90.0, 2462.0], [90.1, 2464.0], [90.2, 2464.0], [90.3, 2468.0], [90.4, 2488.0], [90.5, 2511.0], [90.6, 2511.0], [90.7, 2512.0], [90.8, 2522.0], [90.9, 2522.0], [91.0, 2522.0], [91.1, 2524.0], [91.2, 2528.0], [91.3, 2534.0], [91.4, 2534.0], [91.5, 2536.0], [91.6, 2546.0], [91.7, 2546.0], [91.8, 2546.0], [91.9, 2554.0], [92.0, 2568.0], [92.1, 2568.0], [92.2, 2608.0], [92.3, 2626.0], [92.4, 2637.0], [92.5, 2637.0], [92.6, 2638.0], [92.7, 2643.0], [92.8, 2666.0], [92.9, 2666.0], [93.0, 2675.0], [93.1, 2676.0], [93.2, 2681.0], [93.3, 2681.0], [93.4, 2697.0], [93.5, 2698.0], [93.6, 2698.0], [93.7, 2699.0], [93.8, 2727.0], [93.9, 2733.0], [94.0, 2733.0], [94.1, 2741.0], [94.2, 2746.0], [94.3, 2750.0], [94.4, 2750.0], [94.5, 2753.0], [94.6, 2784.0], [94.7, 2784.0], [94.8, 2784.0], [94.9, 2789.0], [95.0, 2790.0], [95.1, 2790.0], [95.2, 2796.0], [95.3, 2803.0], [95.4, 2812.0], [95.5, 2812.0], [95.6, 2826.0], [95.7, 2834.0], [95.8, 2838.0], [95.9, 2838.0], [96.0, 2845.0], [96.1, 2891.0], [96.2, 2935.0], [96.3, 2935.0], [96.4, 2942.0], [96.5, 2959.0], [96.6, 2971.0], [96.7, 2971.0], [96.8, 2979.0], [96.9, 2992.0], [97.0, 2992.0], [97.1, 3009.0], [97.2, 3049.0], [97.3, 3111.0], [97.4, 3111.0], [97.5, 3111.0], [97.6, 3154.0], [97.7, 3156.0], [97.8, 3156.0], [97.9, 3176.0], [98.0, 3189.0], [98.1, 3192.0], [98.2, 3192.0], [98.3, 3213.0], [98.4, 3260.0], [98.5, 3260.0], [98.6, 3348.0], [98.7, 3391.0], [98.8, 3599.0], [98.9, 3599.0], [99.0, 3832.0], [99.1, 3891.0], [99.2, 3892.0], [99.3, 3892.0], [99.4, 4016.0], [99.5, 4058.0], [99.6, 4113.0], [99.7, 4113.0], [99.8, 4189.0], [99.9, 4380.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 500.0, "maxY": 57.0, "series": [{"data": [[600.0, 1.0], [700.0, 2.0], [800.0, 8.0], [900.0, 15.0], [1000.0, 36.0], [1100.0, 43.0], [1200.0, 46.0], [1300.0, 42.0], [1400.0, 41.0], [1500.0, 44.0], [1600.0, 57.0], [1700.0, 50.0], [1800.0, 52.0], [1900.0, 56.0], [2000.0, 52.0], [2100.0, 37.0], [2200.0, 31.0], [2300.0, 37.0], [2400.0, 13.0], [2500.0, 12.0], [2600.0, 12.0], [2700.0, 11.0], [2800.0, 7.0], [2900.0, 6.0], [3000.0, 2.0], [3100.0, 7.0], [3200.0, 2.0], [3300.0, 2.0], [3500.0, 1.0], [3800.0, 3.0], [4000.0, 2.0], [4100.0, 2.0], [4300.0, 1.0], [500.0, 2.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 4300.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 236.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 499.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 236.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 499.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 11.74609375, "minX": 1.60224606E12, "maxY": 12.0, "series": [{"data": [[1.60224612E12, 12.0], [1.60224618E12, 11.74609375], [1.60224606E12, 12.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60224618E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 1063.0, "minX": 1.0, "maxY": 2464.0, "series": [{"data": [[4.0, 1932.0], [2.0, 1479.0], [1.0, 1889.0], [9.0, 1096.5], [10.0, 2464.0], [5.0, 1072.0], [11.0, 1093.0], [12.0, 1803.700276243093], [6.0, 1139.0], [3.0, 1180.0], [7.0, 1063.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[11.91156462585034, 1797.7999999999988]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 12.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 582.8833333333333, "minX": 1.60224606E12, "maxY": 959903.6833333333, "series": [{"data": [[1.60224612E12, 959903.6833333333], [1.60224618E12, 566960.55], [1.60224606E12, 308885.76666666666]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60224612E12, 3019.633333333333], [1.60224618E12, 1920.5166666666667], [1.60224606E12, 582.8833333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60224618E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 1739.3593750000002, "minX": 1.60224606E12, "maxY": 2010.9220779220775, "series": [{"data": [[1.60224612E12, 1794.194029850747], [1.60224618E12, 1739.3593750000002], [1.60224606E12, 2010.9220779220775]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60224618E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 1738.4257812499989, "minX": 1.60224606E12, "maxY": 2009.2597402597398, "series": [{"data": [[1.60224612E12, 1793.1243781094531], [1.60224618E12, 1738.4257812499989], [1.60224606E12, 2009.2597402597398]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60224618E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.60224606E12, "maxY": 1.7142857142857153, "series": [{"data": [[1.60224612E12, 0.03731343283582093], [1.60224618E12, 0.0], [1.60224606E12, 1.7142857142857153]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60224618E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 541.0, "minX": 1.60224606E12, "maxY": 4380.0, "series": [{"data": [[1.60224612E12, 4113.0], [1.60224618E12, 2812.0], [1.60224606E12, 4380.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60224612E12, 730.6359934663773], [1.60224618E12, 972.2919948530197], [1.60224606E12, 960.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60224612E12, 755.2996026134491], [1.60224618E12, 991.7212020587921], [1.60224606E12, 960.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60224612E12, 744.3379967331887], [1.60224618E12, 983.0859974265098], [1.60224606E12, 960.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60224612E12, 541.0], [1.60224618E12, 868.0], [1.60224606E12, 960.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60224612E12, 1825.5], [1.60224618E12, 1714.0], [1.60224606E12, 1653.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60224618E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 1094.5, "minX": 1.0, "maxY": 2260.0, "series": [{"data": [[4.0, 2260.0], [8.0, 1538.0], [1.0, 1889.0], [9.0, 1354.5], [5.0, 2003.0], [10.0, 1335.5], [11.0, 1234.0], [6.0, 1846.0], [12.0, 1094.5], [7.0, 1901.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 12.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 1094.0, "minX": 1.0, "maxY": 2256.5, "series": [{"data": [[4.0, 2256.5], [8.0, 1537.5], [1.0, 1889.0], [9.0, 1354.5], [5.0, 2001.0], [10.0, 1335.0], [11.0, 1233.5], [6.0, 1841.5], [12.0, 1094.0], [7.0, 1896.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 12.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1.4833333333333334, "minX": 1.60224606E12, "maxY": 6.7, "series": [{"data": [[1.60224612E12, 6.7], [1.60224618E12, 4.066666666666666], [1.60224606E12, 1.4833333333333334]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60224618E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1.2833333333333334, "minX": 1.60224606E12, "maxY": 6.7, "series": [{"data": [[1.60224612E12, 6.7], [1.60224618E12, 4.266666666666667], [1.60224606E12, 1.2833333333333334]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60224618E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.2833333333333334, "minX": 1.60224606E12, "maxY": 6.7, "series": [{"data": [[1.60224612E12, 6.7], [1.60224618E12, 4.266666666666667], [1.60224606E12, 1.2833333333333334]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60224618E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.2833333333333334, "minX": 1.60224606E12, "maxY": 6.7, "series": [{"data": [[1.60224612E12, 6.7], [1.60224618E12, 4.266666666666667], [1.60224606E12, 1.2833333333333334]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60224618E12, "title": "Total Transactions Per Second"}},
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

