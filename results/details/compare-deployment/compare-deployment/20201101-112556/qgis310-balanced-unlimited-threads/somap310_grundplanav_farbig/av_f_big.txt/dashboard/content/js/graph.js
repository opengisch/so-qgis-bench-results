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
        data: {"result": {"minY": 829.0, "minX": 0.0, "maxY": 4427.0, "series": [{"data": [[0.0, 829.0], [0.1, 829.0], [0.2, 843.0], [0.3, 847.0], [0.4, 847.0], [0.5, 849.0], [0.6, 872.0], [0.7, 876.0], [0.8, 876.0], [0.9, 878.0], [1.0, 896.0], [1.1, 931.0], [1.2, 931.0], [1.3, 934.0], [1.4, 934.0], [1.5, 936.0], [1.6, 936.0], [1.7, 939.0], [1.8, 942.0], [1.9, 942.0], [2.0, 950.0], [2.1, 954.0], [2.2, 956.0], [2.3, 956.0], [2.4, 965.0], [2.5, 972.0], [2.6, 973.0], [2.7, 973.0], [2.8, 975.0], [2.9, 987.0], [3.0, 987.0], [3.1, 987.0], [3.2, 998.0], [3.3, 1002.0], [3.4, 1002.0], [3.5, 1022.0], [3.6, 1036.0], [3.7, 1036.0], [3.8, 1036.0], [3.9, 1044.0], [4.0, 1047.0], [4.1, 1058.0], [4.2, 1058.0], [4.3, 1065.0], [4.4, 1065.0], [4.5, 1067.0], [4.6, 1067.0], [4.7, 1079.0], [4.8, 1079.0], [4.9, 1090.0], [5.0, 1090.0], [5.1, 1091.0], [5.2, 1092.0], [5.3, 1092.0], [5.4, 1095.0], [5.5, 1100.0], [5.6, 1101.0], [5.7, 1101.0], [5.8, 1102.0], [5.9, 1105.0], [6.0, 1110.0], [6.1, 1110.0], [6.2, 1111.0], [6.3, 1112.0], [6.4, 1119.0], [6.5, 1119.0], [6.6, 1120.0], [6.7, 1121.0], [6.8, 1121.0], [6.9, 1121.0], [7.0, 1121.0], [7.1, 1122.0], [7.2, 1122.0], [7.3, 1129.0], [7.4, 1134.0], [7.5, 1139.0], [7.6, 1139.0], [7.7, 1144.0], [7.8, 1144.0], [7.9, 1146.0], [8.0, 1146.0], [8.1, 1146.0], [8.2, 1146.0], [8.3, 1147.0], [8.4, 1147.0], [8.5, 1147.0], [8.6, 1148.0], [8.7, 1148.0], [8.8, 1157.0], [8.9, 1158.0], [9.0, 1159.0], [9.1, 1159.0], [9.2, 1161.0], [9.3, 1164.0], [9.4, 1164.0], [9.5, 1164.0], [9.6, 1168.0], [9.7, 1169.0], [9.8, 1170.0], [9.9, 1170.0], [10.0, 1171.0], [10.1, 1174.0], [10.2, 1174.0], [10.3, 1177.0], [10.4, 1179.0], [10.5, 1181.0], [10.6, 1181.0], [10.7, 1182.0], [10.8, 1183.0], [10.9, 1185.0], [11.0, 1185.0], [11.1, 1188.0], [11.2, 1190.0], [11.3, 1195.0], [11.4, 1195.0], [11.5, 1196.0], [11.6, 1199.0], [11.7, 1199.0], [11.8, 1201.0], [11.9, 1205.0], [12.0, 1210.0], [12.1, 1210.0], [12.2, 1211.0], [12.3, 1212.0], [12.4, 1215.0], [12.5, 1215.0], [12.6, 1216.0], [12.7, 1225.0], [12.8, 1229.0], [12.9, 1229.0], [13.0, 1233.0], [13.1, 1238.0], [13.2, 1238.0], [13.3, 1238.0], [13.4, 1240.0], [13.5, 1241.0], [13.6, 1241.0], [13.7, 1245.0], [13.8, 1245.0], [13.9, 1248.0], [14.0, 1248.0], [14.1, 1250.0], [14.2, 1251.0], [14.3, 1251.0], [14.4, 1251.0], [14.5, 1251.0], [14.6, 1252.0], [14.7, 1255.0], [14.8, 1255.0], [14.9, 1255.0], [15.0, 1261.0], [15.1, 1261.0], [15.2, 1264.0], [15.3, 1268.0], [15.4, 1273.0], [15.5, 1273.0], [15.6, 1275.0], [15.7, 1281.0], [15.8, 1283.0], [15.9, 1283.0], [16.0, 1287.0], [16.1, 1287.0], [16.2, 1289.0], [16.3, 1289.0], [16.4, 1291.0], [16.5, 1297.0], [16.6, 1297.0], [16.7, 1297.0], [16.8, 1300.0], [16.9, 1302.0], [17.0, 1302.0], [17.1, 1304.0], [17.2, 1306.0], [17.3, 1311.0], [17.4, 1311.0], [17.5, 1313.0], [17.6, 1314.0], [17.7, 1315.0], [17.8, 1315.0], [17.9, 1315.0], [18.0, 1315.0], [18.1, 1320.0], [18.2, 1320.0], [18.3, 1322.0], [18.4, 1323.0], [18.5, 1323.0], [18.6, 1323.0], [18.7, 1324.0], [18.8, 1326.0], [18.9, 1326.0], [19.0, 1327.0], [19.1, 1328.0], [19.2, 1331.0], [19.3, 1331.0], [19.4, 1332.0], [19.5, 1335.0], [19.6, 1335.0], [19.7, 1335.0], [19.8, 1341.0], [19.9, 1343.0], [20.0, 1343.0], [20.1, 1343.0], [20.2, 1345.0], [20.3, 1348.0], [20.4, 1348.0], [20.5, 1353.0], [20.6, 1353.0], [20.7, 1357.0], [20.8, 1357.0], [20.9, 1361.0], [21.0, 1362.0], [21.1, 1362.0], [21.2, 1362.0], [21.3, 1363.0], [21.4, 1364.0], [21.5, 1364.0], [21.6, 1364.0], [21.7, 1369.0], [21.8, 1373.0], [21.9, 1373.0], [22.0, 1374.0], [22.1, 1376.0], [22.2, 1376.0], [22.3, 1376.0], [22.4, 1376.0], [22.5, 1381.0], [22.6, 1387.0], [22.7, 1387.0], [22.8, 1390.0], [22.9, 1397.0], [23.0, 1400.0], [23.1, 1400.0], [23.2, 1402.0], [23.3, 1402.0], [23.4, 1402.0], [23.5, 1410.0], [23.6, 1417.0], [23.7, 1420.0], [23.8, 1420.0], [23.9, 1423.0], [24.0, 1424.0], [24.1, 1427.0], [24.2, 1427.0], [24.3, 1428.0], [24.4, 1430.0], [24.5, 1432.0], [24.6, 1432.0], [24.7, 1433.0], [24.8, 1437.0], [24.9, 1442.0], [25.0, 1442.0], [25.1, 1446.0], [25.2, 1446.0], [25.3, 1446.0], [25.4, 1447.0], [25.5, 1447.0], [25.6, 1451.0], [25.7, 1451.0], [25.8, 1455.0], [25.9, 1465.0], [26.0, 1466.0], [26.1, 1466.0], [26.2, 1470.0], [26.3, 1470.0], [26.4, 1473.0], [26.5, 1473.0], [26.6, 1473.0], [26.7, 1475.0], [26.8, 1475.0], [26.9, 1475.0], [27.0, 1477.0], [27.1, 1477.0], [27.2, 1477.0], [27.3, 1478.0], [27.4, 1478.0], [27.5, 1481.0], [27.6, 1481.0], [27.7, 1484.0], [27.8, 1487.0], [27.9, 1491.0], [28.0, 1491.0], [28.1, 1491.0], [28.2, 1491.0], [28.3, 1492.0], [28.4, 1492.0], [28.5, 1492.0], [28.6, 1493.0], [28.7, 1493.0], [28.8, 1494.0], [28.9, 1498.0], [29.0, 1500.0], [29.1, 1500.0], [29.2, 1501.0], [29.3, 1503.0], [29.4, 1504.0], [29.5, 1504.0], [29.6, 1506.0], [29.7, 1507.0], [29.8, 1508.0], [29.9, 1508.0], [30.0, 1508.0], [30.1, 1508.0], [30.2, 1508.0], [30.3, 1508.0], [30.4, 1508.0], [30.5, 1510.0], [30.6, 1510.0], [30.7, 1510.0], [30.8, 1511.0], [30.9, 1513.0], [31.0, 1513.0], [31.1, 1519.0], [31.2, 1519.0], [31.3, 1521.0], [31.4, 1521.0], [31.5, 1522.0], [31.6, 1533.0], [31.7, 1533.0], [31.8, 1534.0], [31.9, 1535.0], [32.0, 1539.0], [32.1, 1539.0], [32.2, 1541.0], [32.3, 1544.0], [32.4, 1544.0], [32.5, 1544.0], [32.6, 1545.0], [32.7, 1547.0], [32.8, 1551.0], [32.9, 1551.0], [33.0, 1555.0], [33.1, 1556.0], [33.2, 1557.0], [33.3, 1557.0], [33.4, 1560.0], [33.5, 1564.0], [33.6, 1564.0], [33.7, 1564.0], [33.8, 1564.0], [33.9, 1565.0], [34.0, 1565.0], [34.1, 1567.0], [34.2, 1568.0], [34.3, 1569.0], [34.4, 1569.0], [34.5, 1574.0], [34.6, 1577.0], [34.7, 1579.0], [34.8, 1579.0], [34.9, 1581.0], [35.0, 1585.0], [35.1, 1585.0], [35.2, 1585.0], [35.3, 1587.0], [35.4, 1590.0], [35.5, 1590.0], [35.6, 1591.0], [35.7, 1593.0], [35.8, 1593.0], [35.9, 1593.0], [36.0, 1596.0], [36.1, 1599.0], [36.2, 1606.0], [36.3, 1606.0], [36.4, 1606.0], [36.5, 1609.0], [36.6, 1609.0], [36.7, 1609.0], [36.8, 1610.0], [36.9, 1611.0], [37.0, 1611.0], [37.1, 1612.0], [37.2, 1614.0], [37.3, 1616.0], [37.4, 1616.0], [37.5, 1616.0], [37.6, 1617.0], [37.7, 1621.0], [37.8, 1621.0], [37.9, 1624.0], [38.0, 1626.0], [38.1, 1626.0], [38.2, 1626.0], [38.3, 1627.0], [38.4, 1632.0], [38.5, 1632.0], [38.6, 1632.0], [38.7, 1645.0], [38.8, 1647.0], [38.9, 1647.0], [39.0, 1648.0], [39.1, 1652.0], [39.2, 1653.0], [39.3, 1653.0], [39.4, 1653.0], [39.5, 1653.0], [39.6, 1656.0], [39.7, 1656.0], [39.8, 1660.0], [39.9, 1661.0], [40.0, 1664.0], [40.1, 1664.0], [40.2, 1670.0], [40.3, 1670.0], [40.4, 1670.0], [40.5, 1671.0], [40.6, 1675.0], [40.7, 1676.0], [40.8, 1676.0], [40.9, 1682.0], [41.0, 1683.0], [41.1, 1684.0], [41.2, 1684.0], [41.3, 1686.0], [41.4, 1693.0], [41.5, 1704.0], [41.6, 1704.0], [41.7, 1713.0], [41.8, 1716.0], [41.9, 1716.0], [42.0, 1717.0], [42.1, 1718.0], [42.2, 1719.0], [42.3, 1719.0], [42.4, 1721.0], [42.5, 1723.0], [42.6, 1723.0], [42.7, 1723.0], [42.8, 1729.0], [42.9, 1730.0], [43.0, 1731.0], [43.1, 1731.0], [43.2, 1732.0], [43.3, 1733.0], [43.4, 1733.0], [43.5, 1735.0], [43.6, 1735.0], [43.7, 1737.0], [43.8, 1737.0], [43.9, 1738.0], [44.0, 1742.0], [44.1, 1743.0], [44.2, 1743.0], [44.3, 1743.0], [44.4, 1745.0], [44.5, 1749.0], [44.6, 1749.0], [44.7, 1753.0], [44.8, 1754.0], [44.9, 1758.0], [45.0, 1758.0], [45.1, 1759.0], [45.2, 1760.0], [45.3, 1760.0], [45.4, 1760.0], [45.5, 1761.0], [45.6, 1761.0], [45.7, 1761.0], [45.8, 1764.0], [45.9, 1764.0], [46.0, 1764.0], [46.1, 1764.0], [46.2, 1766.0], [46.3, 1769.0], [46.4, 1770.0], [46.5, 1770.0], [46.6, 1772.0], [46.7, 1774.0], [46.8, 1774.0], [46.9, 1774.0], [47.0, 1777.0], [47.1, 1779.0], [47.2, 1779.0], [47.3, 1780.0], [47.4, 1781.0], [47.5, 1784.0], [47.6, 1784.0], [47.7, 1786.0], [47.8, 1788.0], [47.9, 1789.0], [48.0, 1789.0], [48.1, 1789.0], [48.2, 1789.0], [48.3, 1790.0], [48.4, 1790.0], [48.5, 1792.0], [48.6, 1793.0], [48.7, 1793.0], [48.8, 1795.0], [48.9, 1797.0], [49.0, 1799.0], [49.1, 1799.0], [49.2, 1802.0], [49.3, 1805.0], [49.4, 1805.0], [49.5, 1805.0], [49.6, 1806.0], [49.7, 1807.0], [49.8, 1810.0], [49.9, 1810.0], [50.0, 1813.0], [50.1, 1814.0], [50.2, 1814.0], [50.3, 1819.0], [50.4, 1820.0], [50.5, 1821.0], [50.6, 1821.0], [50.7, 1821.0], [50.8, 1821.0], [50.9, 1824.0], [51.0, 1824.0], [51.1, 1824.0], [51.2, 1828.0], [51.3, 1828.0], [51.4, 1828.0], [51.5, 1832.0], [51.6, 1837.0], [51.7, 1837.0], [51.8, 1840.0], [51.9, 1841.0], [52.0, 1842.0], [52.1, 1842.0], [52.2, 1842.0], [52.3, 1844.0], [52.4, 1844.0], [52.5, 1844.0], [52.6, 1847.0], [52.7, 1848.0], [52.8, 1849.0], [52.9, 1849.0], [53.0, 1849.0], [53.1, 1851.0], [53.2, 1853.0], [53.3, 1853.0], [53.4, 1855.0], [53.5, 1856.0], [53.6, 1856.0], [53.7, 1858.0], [53.8, 1858.0], [53.9, 1859.0], [54.0, 1859.0], [54.1, 1860.0], [54.2, 1862.0], [54.3, 1868.0], [54.4, 1868.0], [54.5, 1871.0], [54.6, 1873.0], [54.7, 1873.0], [54.8, 1873.0], [54.9, 1875.0], [55.0, 1877.0], [55.1, 1877.0], [55.2, 1878.0], [55.3, 1880.0], [55.4, 1881.0], [55.5, 1881.0], [55.6, 1882.0], [55.7, 1888.0], [55.8, 1888.0], [55.9, 1888.0], [56.0, 1890.0], [56.1, 1892.0], [56.2, 1893.0], [56.3, 1893.0], [56.4, 1894.0], [56.5, 1894.0], [56.6, 1895.0], [56.7, 1895.0], [56.8, 1896.0], [56.9, 1897.0], [57.0, 1897.0], [57.1, 1901.0], [57.2, 1901.0], [57.3, 1902.0], [57.4, 1902.0], [57.5, 1903.0], [57.6, 1906.0], [57.7, 1908.0], [57.8, 1908.0], [57.9, 1911.0], [58.0, 1912.0], [58.1, 1912.0], [58.2, 1912.0], [58.3, 1914.0], [58.4, 1914.0], [58.5, 1914.0], [58.6, 1918.0], [58.7, 1918.0], [58.8, 1922.0], [58.9, 1922.0], [59.0, 1922.0], [59.1, 1923.0], [59.2, 1923.0], [59.3, 1923.0], [59.4, 1924.0], [59.5, 1926.0], [59.6, 1928.0], [59.7, 1928.0], [59.8, 1928.0], [59.9, 1930.0], [60.0, 1932.0], [60.1, 1932.0], [60.2, 1933.0], [60.3, 1934.0], [60.4, 1934.0], [60.5, 1935.0], [60.6, 1935.0], [60.7, 1937.0], [60.8, 1937.0], [60.9, 1938.0], [61.0, 1940.0], [61.1, 1942.0], [61.2, 1942.0], [61.3, 1943.0], [61.4, 1943.0], [61.5, 1944.0], [61.6, 1944.0], [61.7, 1945.0], [61.8, 1948.0], [61.9, 1948.0], [62.0, 1952.0], [62.1, 1954.0], [62.2, 1954.0], [62.3, 1954.0], [62.4, 1955.0], [62.5, 1956.0], [62.6, 1956.0], [62.7, 1956.0], [62.8, 1958.0], [62.9, 1962.0], [63.0, 1964.0], [63.1, 1964.0], [63.2, 1964.0], [63.3, 1967.0], [63.4, 1967.0], [63.5, 1969.0], [63.6, 1970.0], [63.7, 1974.0], [63.8, 1974.0], [63.9, 1974.0], [64.0, 1974.0], [64.1, 1975.0], [64.2, 1975.0], [64.3, 1976.0], [64.4, 1979.0], [64.5, 1980.0], [64.6, 1980.0], [64.7, 1981.0], [64.8, 1982.0], [64.9, 1983.0], [65.0, 1983.0], [65.1, 1983.0], [65.2, 1983.0], [65.3, 1983.0], [65.4, 1986.0], [65.5, 1990.0], [65.6, 1991.0], [65.7, 1991.0], [65.8, 1994.0], [65.9, 1995.0], [66.0, 1996.0], [66.1, 1996.0], [66.2, 2006.0], [66.3, 2011.0], [66.4, 2012.0], [66.5, 2012.0], [66.6, 2013.0], [66.7, 2014.0], [66.8, 2014.0], [66.9, 2014.0], [67.0, 2019.0], [67.1, 2020.0], [67.2, 2020.0], [67.3, 2020.0], [67.4, 2021.0], [67.5, 2032.0], [67.6, 2032.0], [67.7, 2034.0], [67.8, 2035.0], [67.9, 2040.0], [68.0, 2040.0], [68.1, 2043.0], [68.2, 2045.0], [68.3, 2045.0], [68.4, 2045.0], [68.5, 2046.0], [68.6, 2047.0], [68.7, 2047.0], [68.8, 2050.0], [68.9, 2051.0], [69.0, 2052.0], [69.1, 2052.0], [69.2, 2055.0], [69.3, 2056.0], [69.4, 2057.0], [69.5, 2057.0], [69.6, 2057.0], [69.7, 2059.0], [69.8, 2061.0], [69.9, 2061.0], [70.0, 2065.0], [70.1, 2067.0], [70.2, 2067.0], [70.3, 2068.0], [70.4, 2069.0], [70.5, 2069.0], [70.6, 2069.0], [70.7, 2073.0], [70.8, 2075.0], [70.9, 2076.0], [71.0, 2076.0], [71.1, 2084.0], [71.2, 2087.0], [71.3, 2087.0], [71.4, 2087.0], [71.5, 2090.0], [71.6, 2097.0], [71.7, 2097.0], [71.8, 2098.0], [71.9, 2101.0], [72.0, 2101.0], [72.1, 2101.0], [72.2, 2106.0], [72.3, 2106.0], [72.4, 2110.0], [72.5, 2110.0], [72.6, 2111.0], [72.7, 2116.0], [72.8, 2118.0], [72.9, 2118.0], [73.0, 2119.0], [73.1, 2123.0], [73.2, 2124.0], [73.3, 2124.0], [73.4, 2124.0], [73.5, 2126.0], [73.6, 2126.0], [73.7, 2126.0], [73.8, 2127.0], [73.9, 2127.0], [74.0, 2127.0], [74.1, 2128.0], [74.2, 2129.0], [74.3, 2130.0], [74.4, 2130.0], [74.5, 2132.0], [74.6, 2137.0], [74.7, 2139.0], [74.8, 2139.0], [74.9, 2144.0], [75.0, 2144.0], [75.1, 2144.0], [75.2, 2144.0], [75.3, 2148.0], [75.4, 2149.0], [75.5, 2149.0], [75.6, 2149.0], [75.7, 2151.0], [75.8, 2152.0], [75.9, 2152.0], [76.0, 2154.0], [76.1, 2156.0], [76.2, 2156.0], [76.3, 2156.0], [76.4, 2161.0], [76.5, 2173.0], [76.6, 2176.0], [76.7, 2176.0], [76.8, 2178.0], [76.9, 2183.0], [77.0, 2183.0], [77.1, 2183.0], [77.2, 2193.0], [77.3, 2194.0], [77.4, 2194.0], [77.5, 2198.0], [77.6, 2198.0], [77.7, 2199.0], [77.8, 2199.0], [77.9, 2199.0], [78.0, 2209.0], [78.1, 2212.0], [78.2, 2212.0], [78.3, 2216.0], [78.4, 2218.0], [78.5, 2218.0], [78.6, 2219.0], [78.7, 2226.0], [78.8, 2227.0], [78.9, 2227.0], [79.0, 2227.0], [79.1, 2232.0], [79.2, 2239.0], [79.3, 2239.0], [79.4, 2246.0], [79.5, 2246.0], [79.6, 2248.0], [79.7, 2248.0], [79.8, 2252.0], [79.9, 2253.0], [80.0, 2256.0], [80.1, 2256.0], [80.2, 2260.0], [80.3, 2260.0], [80.4, 2260.0], [80.5, 2261.0], [80.6, 2262.0], [80.7, 2265.0], [80.8, 2265.0], [80.9, 2267.0], [81.0, 2270.0], [81.1, 2273.0], [81.2, 2273.0], [81.3, 2275.0], [81.4, 2287.0], [81.5, 2292.0], [81.6, 2292.0], [81.7, 2293.0], [81.8, 2294.0], [81.9, 2294.0], [82.0, 2294.0], [82.1, 2295.0], [82.2, 2296.0], [82.3, 2296.0], [82.4, 2300.0], [82.5, 2307.0], [82.6, 2312.0], [82.7, 2312.0], [82.8, 2319.0], [82.9, 2319.0], [83.0, 2324.0], [83.1, 2324.0], [83.2, 2331.0], [83.3, 2332.0], [83.4, 2332.0], [83.5, 2332.0], [83.6, 2333.0], [83.7, 2336.0], [83.8, 2336.0], [83.9, 2337.0], [84.0, 2338.0], [84.1, 2344.0], [84.2, 2344.0], [84.3, 2353.0], [84.4, 2366.0], [84.5, 2369.0], [84.6, 2369.0], [84.7, 2371.0], [84.8, 2373.0], [84.9, 2373.0], [85.0, 2373.0], [85.1, 2378.0], [85.2, 2386.0], [85.3, 2386.0], [85.4, 2388.0], [85.5, 2392.0], [85.6, 2395.0], [85.7, 2395.0], [85.8, 2398.0], [85.9, 2401.0], [86.0, 2401.0], [86.1, 2401.0], [86.2, 2406.0], [86.3, 2410.0], [86.4, 2414.0], [86.5, 2414.0], [86.6, 2416.0], [86.7, 2417.0], [86.8, 2417.0], [86.9, 2423.0], [87.0, 2430.0], [87.1, 2434.0], [87.2, 2434.0], [87.3, 2438.0], [87.4, 2441.0], [87.5, 2446.0], [87.6, 2446.0], [87.7, 2448.0], [87.8, 2449.0], [87.9, 2455.0], [88.0, 2455.0], [88.1, 2456.0], [88.2, 2470.0], [88.3, 2475.0], [88.4, 2475.0], [88.5, 2476.0], [88.6, 2478.0], [88.7, 2478.0], [88.8, 2486.0], [88.9, 2489.0], [89.0, 2490.0], [89.1, 2490.0], [89.2, 2493.0], [89.3, 2494.0], [89.4, 2494.0], [89.5, 2494.0], [89.6, 2499.0], [89.7, 2507.0], [89.8, 2512.0], [89.9, 2512.0], [90.0, 2515.0], [90.1, 2517.0], [90.2, 2517.0], [90.3, 2517.0], [90.4, 2526.0], [90.5, 2528.0], [90.6, 2528.0], [90.7, 2554.0], [90.8, 2556.0], [90.9, 2560.0], [91.0, 2560.0], [91.1, 2567.0], [91.2, 2581.0], [91.3, 2587.0], [91.4, 2587.0], [91.5, 2594.0], [91.6, 2613.0], [91.7, 2613.0], [91.8, 2623.0], [91.9, 2625.0], [92.0, 2641.0], [92.1, 2641.0], [92.2, 2646.0], [92.3, 2663.0], [92.4, 2677.0], [92.5, 2677.0], [92.6, 2679.0], [92.7, 2683.0], [92.8, 2693.0], [92.9, 2693.0], [93.0, 2715.0], [93.1, 2722.0], [93.2, 2759.0], [93.3, 2759.0], [93.4, 2762.0], [93.5, 2773.0], [93.6, 2773.0], [93.7, 2816.0], [93.8, 2838.0], [93.9, 2848.0], [94.0, 2848.0], [94.1, 2864.0], [94.2, 2864.0], [94.3, 2868.0], [94.4, 2868.0], [94.5, 2876.0], [94.6, 2884.0], [94.7, 2890.0], [94.8, 2890.0], [94.9, 2908.0], [95.0, 2908.0], [95.1, 2908.0], [95.2, 2909.0], [95.3, 2923.0], [95.4, 2931.0], [95.5, 2931.0], [95.6, 2948.0], [95.7, 2955.0], [95.8, 2988.0], [95.9, 2988.0], [96.0, 2992.0], [96.1, 2999.0], [96.2, 3006.0], [96.3, 3006.0], [96.4, 3030.0], [96.5, 3032.0], [96.6, 3035.0], [96.7, 3035.0], [96.8, 3038.0], [96.9, 3117.0], [97.0, 3117.0], [97.1, 3138.0], [97.2, 3167.0], [97.3, 3214.0], [97.4, 3214.0], [97.5, 3282.0], [97.6, 3322.0], [97.7, 3357.0], [97.8, 3357.0], [97.9, 3363.0], [98.0, 3383.0], [98.1, 3610.0], [98.2, 3610.0], [98.3, 3649.0], [98.4, 3678.0], [98.5, 3678.0], [98.6, 3699.0], [98.7, 3740.0], [98.8, 3792.0], [98.9, 3792.0], [99.0, 3795.0], [99.1, 3844.0], [99.2, 4093.0], [99.3, 4093.0], [99.4, 4116.0], [99.5, 4137.0], [99.6, 4252.0], [99.7, 4252.0], [99.8, 4274.0], [99.9, 4427.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 800.0, "maxY": 67.0, "series": [{"data": [[800.0, 8.0], [900.0, 16.0], [1000.0, 16.0], [1100.0, 46.0], [1200.0, 37.0], [1300.0, 46.0], [1400.0, 44.0], [1500.0, 53.0], [1600.0, 39.0], [1700.0, 56.0], [1800.0, 58.0], [1900.0, 67.0], [2000.0, 42.0], [2100.0, 45.0], [2200.0, 32.0], [2300.0, 26.0], [2400.0, 28.0], [2500.0, 14.0], [2600.0, 10.0], [2700.0, 5.0], [2800.0, 9.0], [2900.0, 10.0], [3000.0, 5.0], [3100.0, 3.0], [3200.0, 2.0], [3300.0, 4.0], [3600.0, 4.0], [3700.0, 3.0], [3800.0, 1.0], [4000.0, 1.0], [4200.0, 2.0], [4100.0, 2.0], [4400.0, 1.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 4400.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 214.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 521.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 214.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 521.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 11.735999999999999, "minX": 1.60423644E12, "maxY": 12.0, "series": [{"data": [[1.60423656E12, 11.735999999999999], [1.60423644E12, 12.0], [1.6042365E12, 12.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60423656E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 1119.0, "minX": 1.0, "maxY": 2246.0, "series": [{"data": [[8.0, 1564.0], [4.0, 1225.0], [2.0, 1544.0], [1.0, 1758.0], [9.0, 1995.0], [10.0, 1139.0], [5.0, 1684.0], [11.0, 2246.0], [12.0, 1857.0621546961308], [6.0, 1119.0], [3.0, 1760.0], [7.0, 1182.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[11.910204081632651, 1852.692517006801]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 12.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 673.5333333333333, "minX": 1.60423644E12, "maxY": 937018.2666666667, "series": [{"data": [[1.60423656E12, 554597.1], [1.60423644E12, 344144.05], [1.6042365E12, 937018.2666666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60423656E12, 1875.1833333333334], [1.60423644E12, 673.5333333333333], [1.6042365E12, 2974.3166666666666]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60423656E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 1812.343999999999, "minX": 1.60423644E12, "maxY": 2061.123595505619, "series": [{"data": [[1.60423656E12, 1812.343999999999], [1.60423644E12, 2061.123595505619], [1.6042365E12, 1831.320707070706]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60423656E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 1811.319999999999, "minX": 1.60423644E12, "maxY": 2059.5842696629206, "series": [{"data": [[1.60423656E12, 1811.319999999999], [1.60423644E12, 2059.5842696629206], [1.6042365E12, 1830.1666666666656]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60423656E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.60423644E12, "maxY": 1.6966292134831464, "series": [{"data": [[1.60423656E12, 0.0], [1.60423644E12, 1.6966292134831464], [1.6042365E12, 0.04292929292929292]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60423656E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 829.0, "minX": 1.60423644E12, "maxY": 4427.0, "series": [{"data": [[1.60423656E12, 3740.0], [1.60423644E12, 4252.0], [1.6042365E12, 4427.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60423656E12, 1007.1799988031387], [1.60423644E12, 936.0], [1.6042365E12, 848.1459998106957]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60423656E12, 1011.6980004787445], [1.60423644E12, 936.0], [1.6042365E12, 848.8606000757218]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60423656E12, 1009.6899994015694], [1.60423644E12, 936.0], [1.6042365E12, 848.5429999053479]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60423656E12, 973.0], [1.60423644E12, 936.0], [1.6042365E12, 829.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60423656E12, 1811.5], [1.60423644E12, 1795.0], [1.6042365E12, 1819.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60423656E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 1331.5, "minX": 2.0, "maxY": 2635.5, "series": [{"data": [[4.0, 2101.5], [2.0, 1756.5], [8.0, 1668.0], [9.0, 1348.0], [5.0, 1874.0], [10.0, 1331.5], [11.0, 1483.5], [3.0, 2635.5], [6.0, 2025.5], [7.0, 1789.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 11.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 1331.5, "minX": 2.0, "maxY": 2632.5, "series": [{"data": [[4.0, 2100.0], [2.0, 1753.5], [8.0, 1667.5], [9.0, 1348.0], [5.0, 1873.0], [10.0, 1331.5], [11.0, 1483.0], [3.0, 2632.5], [6.0, 2024.0], [7.0, 1788.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 11.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1.6833333333333333, "minX": 1.60423644E12, "maxY": 6.6, "series": [{"data": [[1.60423656E12, 3.966666666666667], [1.60423644E12, 1.6833333333333333], [1.6042365E12, 6.6]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60423656E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1.4833333333333334, "minX": 1.60423644E12, "maxY": 6.6, "series": [{"data": [[1.60423656E12, 4.166666666666667], [1.60423644E12, 1.4833333333333334], [1.6042365E12, 6.6]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60423656E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.4833333333333334, "minX": 1.60423644E12, "maxY": 6.6, "series": [{"data": [[1.60423656E12, 4.166666666666667], [1.60423644E12, 1.4833333333333334], [1.6042365E12, 6.6]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60423656E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.4833333333333334, "minX": 1.60423644E12, "maxY": 6.6, "series": [{"data": [[1.60423656E12, 4.166666666666667], [1.60423644E12, 1.4833333333333334], [1.6042365E12, 6.6]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60423656E12, "title": "Total Transactions Per Second"}},
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

