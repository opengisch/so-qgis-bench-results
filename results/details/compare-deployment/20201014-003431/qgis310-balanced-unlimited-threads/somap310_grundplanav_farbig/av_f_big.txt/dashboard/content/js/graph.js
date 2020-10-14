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
        data: {"result": {"minY": 574.0, "minX": 0.0, "maxY": 4496.0, "series": [{"data": [[0.0, 574.0], [0.1, 574.0], [0.2, 704.0], [0.3, 752.0], [0.4, 752.0], [0.5, 821.0], [0.6, 840.0], [0.7, 849.0], [0.8, 849.0], [0.9, 861.0], [1.0, 868.0], [1.1, 874.0], [1.2, 874.0], [1.3, 886.0], [1.4, 892.0], [1.5, 894.0], [1.6, 894.0], [1.7, 911.0], [1.8, 919.0], [1.9, 919.0], [2.0, 939.0], [2.1, 940.0], [2.2, 956.0], [2.3, 956.0], [2.4, 965.0], [2.5, 980.0], [2.6, 981.0], [2.7, 981.0], [2.8, 991.0], [2.9, 1004.0], [3.0, 1012.0], [3.1, 1012.0], [3.2, 1028.0], [3.3, 1033.0], [3.4, 1033.0], [3.5, 1034.0], [3.6, 1039.0], [3.7, 1046.0], [3.8, 1046.0], [3.9, 1048.0], [4.0, 1049.0], [4.1, 1052.0], [4.2, 1052.0], [4.3, 1052.0], [4.4, 1053.0], [4.5, 1053.0], [4.6, 1053.0], [4.7, 1058.0], [4.8, 1060.0], [4.9, 1061.0], [5.0, 1061.0], [5.1, 1064.0], [5.2, 1067.0], [5.3, 1067.0], [5.4, 1068.0], [5.5, 1069.0], [5.6, 1073.0], [5.7, 1073.0], [5.8, 1079.0], [5.9, 1079.0], [6.0, 1079.0], [6.1, 1079.0], [6.2, 1081.0], [6.3, 1082.0], [6.4, 1088.0], [6.5, 1088.0], [6.6, 1092.0], [6.7, 1092.0], [6.8, 1092.0], [6.9, 1092.0], [7.0, 1092.0], [7.1, 1093.0], [7.2, 1093.0], [7.3, 1096.0], [7.4, 1096.0], [7.5, 1104.0], [7.6, 1104.0], [7.7, 1108.0], [7.8, 1111.0], [7.9, 1112.0], [8.0, 1112.0], [8.1, 1114.0], [8.2, 1115.0], [8.3, 1116.0], [8.4, 1116.0], [8.5, 1117.0], [8.6, 1119.0], [8.7, 1119.0], [8.8, 1120.0], [8.9, 1131.0], [9.0, 1132.0], [9.1, 1132.0], [9.2, 1132.0], [9.3, 1136.0], [9.4, 1138.0], [9.5, 1138.0], [9.6, 1140.0], [9.7, 1143.0], [9.8, 1144.0], [9.9, 1144.0], [10.0, 1147.0], [10.1, 1148.0], [10.2, 1148.0], [10.3, 1155.0], [10.4, 1156.0], [10.5, 1156.0], [10.6, 1156.0], [10.7, 1157.0], [10.8, 1158.0], [10.9, 1161.0], [11.0, 1161.0], [11.1, 1162.0], [11.2, 1170.0], [11.3, 1171.0], [11.4, 1171.0], [11.5, 1172.0], [11.6, 1176.0], [11.7, 1176.0], [11.8, 1177.0], [11.9, 1179.0], [12.0, 1183.0], [12.1, 1183.0], [12.2, 1185.0], [12.3, 1188.0], [12.4, 1192.0], [12.5, 1192.0], [12.6, 1208.0], [12.7, 1209.0], [12.8, 1211.0], [12.9, 1211.0], [13.0, 1213.0], [13.1, 1213.0], [13.2, 1222.0], [13.3, 1222.0], [13.4, 1223.0], [13.5, 1230.0], [13.6, 1230.0], [13.7, 1231.0], [13.8, 1232.0], [13.9, 1235.0], [14.0, 1235.0], [14.1, 1236.0], [14.2, 1238.0], [14.3, 1239.0], [14.4, 1239.0], [14.5, 1242.0], [14.6, 1243.0], [14.7, 1250.0], [14.8, 1250.0], [14.9, 1253.0], [15.0, 1256.0], [15.1, 1256.0], [15.2, 1258.0], [15.3, 1258.0], [15.4, 1260.0], [15.5, 1260.0], [15.6, 1265.0], [15.7, 1266.0], [15.8, 1266.0], [15.9, 1266.0], [16.0, 1267.0], [16.1, 1268.0], [16.2, 1273.0], [16.3, 1273.0], [16.4, 1273.0], [16.5, 1274.0], [16.6, 1275.0], [16.7, 1275.0], [16.8, 1276.0], [16.9, 1276.0], [17.0, 1276.0], [17.1, 1276.0], [17.2, 1277.0], [17.3, 1278.0], [17.4, 1278.0], [17.5, 1281.0], [17.6, 1283.0], [17.7, 1284.0], [17.8, 1284.0], [17.9, 1285.0], [18.0, 1287.0], [18.1, 1287.0], [18.2, 1287.0], [18.3, 1287.0], [18.4, 1302.0], [18.5, 1302.0], [18.6, 1307.0], [18.7, 1315.0], [18.8, 1316.0], [18.9, 1316.0], [19.0, 1316.0], [19.1, 1322.0], [19.2, 1325.0], [19.3, 1325.0], [19.4, 1326.0], [19.5, 1330.0], [19.6, 1331.0], [19.7, 1331.0], [19.8, 1331.0], [19.9, 1332.0], [20.0, 1333.0], [20.1, 1333.0], [20.2, 1334.0], [20.3, 1341.0], [20.4, 1341.0], [20.5, 1342.0], [20.6, 1342.0], [20.7, 1347.0], [20.8, 1347.0], [20.9, 1352.0], [21.0, 1354.0], [21.1, 1359.0], [21.2, 1359.0], [21.3, 1362.0], [21.4, 1365.0], [21.5, 1373.0], [21.6, 1373.0], [21.7, 1374.0], [21.8, 1375.0], [21.9, 1375.0], [22.0, 1375.0], [22.1, 1375.0], [22.2, 1376.0], [22.3, 1376.0], [22.4, 1377.0], [22.5, 1381.0], [22.6, 1383.0], [22.7, 1383.0], [22.8, 1386.0], [22.9, 1387.0], [23.0, 1389.0], [23.1, 1389.0], [23.2, 1390.0], [23.3, 1390.0], [23.4, 1390.0], [23.5, 1396.0], [23.6, 1396.0], [23.7, 1398.0], [23.8, 1398.0], [23.9, 1403.0], [24.0, 1405.0], [24.1, 1409.0], [24.2, 1409.0], [24.3, 1410.0], [24.4, 1411.0], [24.5, 1414.0], [24.6, 1414.0], [24.7, 1415.0], [24.8, 1415.0], [24.9, 1417.0], [25.0, 1417.0], [25.1, 1419.0], [25.2, 1421.0], [25.3, 1421.0], [25.4, 1428.0], [25.5, 1428.0], [25.6, 1430.0], [25.7, 1430.0], [25.8, 1431.0], [25.9, 1433.0], [26.0, 1437.0], [26.1, 1437.0], [26.2, 1438.0], [26.3, 1438.0], [26.4, 1441.0], [26.5, 1441.0], [26.6, 1442.0], [26.7, 1448.0], [26.8, 1448.0], [26.9, 1448.0], [27.0, 1451.0], [27.1, 1453.0], [27.2, 1453.0], [27.3, 1453.0], [27.4, 1454.0], [27.5, 1455.0], [27.6, 1455.0], [27.7, 1456.0], [27.8, 1459.0], [27.9, 1460.0], [28.0, 1460.0], [28.1, 1460.0], [28.2, 1460.0], [28.3, 1461.0], [28.4, 1461.0], [28.5, 1466.0], [28.6, 1470.0], [28.7, 1470.0], [28.8, 1471.0], [28.9, 1472.0], [29.0, 1472.0], [29.1, 1472.0], [29.2, 1474.0], [29.3, 1477.0], [29.4, 1484.0], [29.5, 1484.0], [29.6, 1484.0], [29.7, 1486.0], [29.8, 1488.0], [29.9, 1488.0], [30.0, 1495.0], [30.1, 1500.0], [30.2, 1500.0], [30.3, 1501.0], [30.4, 1506.0], [30.5, 1506.0], [30.6, 1506.0], [30.7, 1506.0], [30.8, 1509.0], [30.9, 1510.0], [31.0, 1510.0], [31.1, 1511.0], [31.2, 1513.0], [31.3, 1513.0], [31.4, 1513.0], [31.5, 1516.0], [31.6, 1521.0], [31.7, 1521.0], [31.8, 1521.0], [31.9, 1521.0], [32.0, 1526.0], [32.1, 1526.0], [32.2, 1528.0], [32.3, 1529.0], [32.4, 1532.0], [32.5, 1532.0], [32.6, 1532.0], [32.7, 1536.0], [32.8, 1536.0], [32.9, 1536.0], [33.0, 1539.0], [33.1, 1542.0], [33.2, 1545.0], [33.3, 1545.0], [33.4, 1547.0], [33.5, 1553.0], [33.6, 1553.0], [33.7, 1556.0], [33.8, 1557.0], [33.9, 1559.0], [34.0, 1559.0], [34.1, 1560.0], [34.2, 1566.0], [34.3, 1567.0], [34.4, 1567.0], [34.5, 1567.0], [34.6, 1569.0], [34.7, 1569.0], [34.8, 1569.0], [34.9, 1569.0], [35.0, 1573.0], [35.1, 1573.0], [35.2, 1574.0], [35.3, 1578.0], [35.4, 1578.0], [35.5, 1578.0], [35.6, 1580.0], [35.7, 1582.0], [35.8, 1583.0], [35.9, 1583.0], [36.0, 1583.0], [36.1, 1584.0], [36.2, 1587.0], [36.3, 1587.0], [36.4, 1588.0], [36.5, 1596.0], [36.6, 1596.0], [36.7, 1596.0], [36.8, 1596.0], [36.9, 1604.0], [37.0, 1604.0], [37.1, 1615.0], [37.2, 1626.0], [37.3, 1630.0], [37.4, 1630.0], [37.5, 1631.0], [37.6, 1633.0], [37.7, 1633.0], [37.8, 1633.0], [37.9, 1634.0], [38.0, 1635.0], [38.1, 1638.0], [38.2, 1638.0], [38.3, 1638.0], [38.4, 1639.0], [38.5, 1639.0], [38.6, 1642.0], [38.7, 1643.0], [38.8, 1644.0], [38.9, 1644.0], [39.0, 1645.0], [39.1, 1646.0], [39.2, 1648.0], [39.3, 1648.0], [39.4, 1649.0], [39.5, 1652.0], [39.6, 1656.0], [39.7, 1656.0], [39.8, 1658.0], [39.9, 1658.0], [40.0, 1661.0], [40.1, 1661.0], [40.2, 1662.0], [40.3, 1664.0], [40.4, 1664.0], [40.5, 1667.0], [40.6, 1668.0], [40.7, 1673.0], [40.8, 1673.0], [40.9, 1675.0], [41.0, 1675.0], [41.1, 1678.0], [41.2, 1678.0], [41.3, 1682.0], [41.4, 1689.0], [41.5, 1691.0], [41.6, 1691.0], [41.7, 1692.0], [41.8, 1693.0], [41.9, 1693.0], [42.0, 1697.0], [42.1, 1700.0], [42.2, 1701.0], [42.3, 1701.0], [42.4, 1702.0], [42.5, 1703.0], [42.6, 1704.0], [42.7, 1704.0], [42.8, 1704.0], [42.9, 1704.0], [43.0, 1705.0], [43.1, 1705.0], [43.2, 1710.0], [43.3, 1717.0], [43.4, 1717.0], [43.5, 1718.0], [43.6, 1722.0], [43.7, 1725.0], [43.8, 1725.0], [43.9, 1725.0], [44.0, 1727.0], [44.1, 1728.0], [44.2, 1728.0], [44.3, 1728.0], [44.4, 1729.0], [44.5, 1733.0], [44.6, 1733.0], [44.7, 1734.0], [44.8, 1735.0], [44.9, 1739.0], [45.0, 1739.0], [45.1, 1739.0], [45.2, 1740.0], [45.3, 1740.0], [45.4, 1746.0], [45.5, 1749.0], [45.6, 1754.0], [45.7, 1754.0], [45.8, 1761.0], [45.9, 1766.0], [46.0, 1774.0], [46.1, 1774.0], [46.2, 1778.0], [46.3, 1779.0], [46.4, 1781.0], [46.5, 1781.0], [46.6, 1787.0], [46.7, 1789.0], [46.8, 1789.0], [46.9, 1790.0], [47.0, 1799.0], [47.1, 1802.0], [47.2, 1802.0], [47.3, 1805.0], [47.4, 1806.0], [47.5, 1808.0], [47.6, 1808.0], [47.7, 1808.0], [47.8, 1809.0], [47.9, 1815.0], [48.0, 1815.0], [48.1, 1815.0], [48.2, 1818.0], [48.3, 1822.0], [48.4, 1822.0], [48.5, 1823.0], [48.6, 1824.0], [48.7, 1824.0], [48.8, 1825.0], [48.9, 1829.0], [49.0, 1832.0], [49.1, 1832.0], [49.2, 1833.0], [49.3, 1837.0], [49.4, 1837.0], [49.5, 1837.0], [49.6, 1843.0], [49.7, 1844.0], [49.8, 1845.0], [49.9, 1845.0], [50.0, 1846.0], [50.1, 1846.0], [50.2, 1846.0], [50.3, 1848.0], [50.4, 1849.0], [50.5, 1850.0], [50.6, 1850.0], [50.7, 1853.0], [50.8, 1853.0], [50.9, 1854.0], [51.0, 1854.0], [51.1, 1855.0], [51.2, 1856.0], [51.3, 1860.0], [51.4, 1860.0], [51.5, 1860.0], [51.6, 1861.0], [51.7, 1861.0], [51.8, 1861.0], [51.9, 1862.0], [52.0, 1863.0], [52.1, 1863.0], [52.2, 1864.0], [52.3, 1864.0], [52.4, 1867.0], [52.5, 1867.0], [52.6, 1868.0], [52.7, 1870.0], [52.8, 1876.0], [52.9, 1876.0], [53.0, 1877.0], [53.1, 1881.0], [53.2, 1881.0], [53.3, 1881.0], [53.4, 1881.0], [53.5, 1882.0], [53.6, 1882.0], [53.7, 1883.0], [53.8, 1887.0], [53.9, 1887.0], [54.0, 1887.0], [54.1, 1888.0], [54.2, 1889.0], [54.3, 1890.0], [54.4, 1890.0], [54.5, 1893.0], [54.6, 1895.0], [54.7, 1896.0], [54.8, 1896.0], [54.9, 1899.0], [55.0, 1901.0], [55.1, 1901.0], [55.2, 1901.0], [55.3, 1901.0], [55.4, 1908.0], [55.5, 1908.0], [55.6, 1910.0], [55.7, 1911.0], [55.8, 1912.0], [55.9, 1912.0], [56.0, 1913.0], [56.1, 1913.0], [56.2, 1914.0], [56.3, 1914.0], [56.4, 1915.0], [56.5, 1916.0], [56.6, 1918.0], [56.7, 1918.0], [56.8, 1919.0], [56.9, 1920.0], [57.0, 1920.0], [57.1, 1921.0], [57.2, 1921.0], [57.3, 1923.0], [57.4, 1923.0], [57.5, 1924.0], [57.6, 1927.0], [57.7, 1927.0], [57.8, 1927.0], [57.9, 1929.0], [58.0, 1930.0], [58.1, 1930.0], [58.2, 1930.0], [58.3, 1934.0], [58.4, 1936.0], [58.5, 1936.0], [58.6, 1937.0], [58.7, 1938.0], [58.8, 1939.0], [58.9, 1939.0], [59.0, 1941.0], [59.1, 1943.0], [59.2, 1949.0], [59.3, 1949.0], [59.4, 1949.0], [59.5, 1950.0], [59.6, 1951.0], [59.7, 1951.0], [59.8, 1954.0], [59.9, 1956.0], [60.0, 1959.0], [60.1, 1959.0], [60.2, 1959.0], [60.3, 1961.0], [60.4, 1961.0], [60.5, 1961.0], [60.6, 1963.0], [60.7, 1965.0], [60.8, 1965.0], [60.9, 1966.0], [61.0, 1967.0], [61.1, 1968.0], [61.2, 1968.0], [61.3, 1971.0], [61.4, 1971.0], [61.5, 1972.0], [61.6, 1972.0], [61.7, 1972.0], [61.8, 1973.0], [61.9, 1973.0], [62.0, 1974.0], [62.1, 1976.0], [62.2, 1980.0], [62.3, 1980.0], [62.4, 1980.0], [62.5, 1982.0], [62.6, 1982.0], [62.7, 1982.0], [62.8, 1983.0], [62.9, 1986.0], [63.0, 1986.0], [63.1, 1986.0], [63.2, 1986.0], [63.3, 1987.0], [63.4, 1987.0], [63.5, 1990.0], [63.6, 1990.0], [63.7, 1991.0], [63.8, 1991.0], [63.9, 1991.0], [64.0, 1991.0], [64.1, 1991.0], [64.2, 1991.0], [64.3, 1995.0], [64.4, 1996.0], [64.5, 1997.0], [64.6, 1997.0], [64.7, 1997.0], [64.8, 2004.0], [64.9, 2004.0], [65.0, 2004.0], [65.1, 2009.0], [65.2, 2009.0], [65.3, 2009.0], [65.4, 2009.0], [65.5, 2013.0], [65.6, 2013.0], [65.7, 2013.0], [65.8, 2014.0], [65.9, 2018.0], [66.0, 2018.0], [66.1, 2018.0], [66.2, 2020.0], [66.3, 2025.0], [66.4, 2028.0], [66.5, 2028.0], [66.6, 2029.0], [66.7, 2029.0], [66.8, 2029.0], [66.9, 2029.0], [67.0, 2032.0], [67.1, 2034.0], [67.2, 2034.0], [67.3, 2035.0], [67.4, 2035.0], [67.5, 2037.0], [67.6, 2037.0], [67.7, 2038.0], [67.8, 2043.0], [67.9, 2044.0], [68.0, 2044.0], [68.1, 2045.0], [68.2, 2045.0], [68.3, 2047.0], [68.4, 2047.0], [68.5, 2050.0], [68.6, 2051.0], [68.7, 2051.0], [68.8, 2054.0], [68.9, 2056.0], [69.0, 2057.0], [69.1, 2057.0], [69.2, 2057.0], [69.3, 2061.0], [69.4, 2063.0], [69.5, 2063.0], [69.6, 2065.0], [69.7, 2068.0], [69.8, 2070.0], [69.9, 2070.0], [70.0, 2070.0], [70.1, 2074.0], [70.2, 2074.0], [70.3, 2076.0], [70.4, 2077.0], [70.5, 2078.0], [70.6, 2078.0], [70.7, 2079.0], [70.8, 2087.0], [70.9, 2090.0], [71.0, 2090.0], [71.1, 2091.0], [71.2, 2093.0], [71.3, 2098.0], [71.4, 2098.0], [71.5, 2099.0], [71.6, 2100.0], [71.7, 2100.0], [71.8, 2102.0], [71.9, 2102.0], [72.0, 2104.0], [72.1, 2104.0], [72.2, 2108.0], [72.3, 2110.0], [72.4, 2110.0], [72.5, 2110.0], [72.6, 2110.0], [72.7, 2115.0], [72.8, 2120.0], [72.9, 2120.0], [73.0, 2121.0], [73.1, 2122.0], [73.2, 2123.0], [73.3, 2123.0], [73.4, 2124.0], [73.5, 2125.0], [73.6, 2125.0], [73.7, 2126.0], [73.8, 2130.0], [73.9, 2130.0], [74.0, 2130.0], [74.1, 2131.0], [74.2, 2136.0], [74.3, 2139.0], [74.4, 2139.0], [74.5, 2140.0], [74.6, 2141.0], [74.7, 2145.0], [74.8, 2145.0], [74.9, 2146.0], [75.0, 2148.0], [75.1, 2148.0], [75.2, 2153.0], [75.3, 2156.0], [75.4, 2157.0], [75.5, 2157.0], [75.6, 2159.0], [75.7, 2160.0], [75.8, 2164.0], [75.9, 2164.0], [76.0, 2165.0], [76.1, 2166.0], [76.2, 2168.0], [76.3, 2168.0], [76.4, 2168.0], [76.5, 2168.0], [76.6, 2169.0], [76.7, 2169.0], [76.8, 2170.0], [76.9, 2170.0], [77.0, 2170.0], [77.1, 2171.0], [77.2, 2172.0], [77.3, 2173.0], [77.4, 2173.0], [77.5, 2182.0], [77.6, 2182.0], [77.7, 2182.0], [77.8, 2182.0], [77.9, 2184.0], [78.0, 2185.0], [78.1, 2187.0], [78.2, 2187.0], [78.3, 2190.0], [78.4, 2191.0], [78.5, 2191.0], [78.6, 2192.0], [78.7, 2194.0], [78.8, 2195.0], [78.9, 2195.0], [79.0, 2195.0], [79.1, 2202.0], [79.2, 2205.0], [79.3, 2205.0], [79.4, 2206.0], [79.5, 2215.0], [79.6, 2216.0], [79.7, 2216.0], [79.8, 2217.0], [79.9, 2217.0], [80.0, 2220.0], [80.1, 2220.0], [80.2, 2230.0], [80.3, 2233.0], [80.4, 2233.0], [80.5, 2234.0], [80.6, 2237.0], [80.7, 2242.0], [80.8, 2242.0], [80.9, 2245.0], [81.0, 2245.0], [81.1, 2249.0], [81.2, 2249.0], [81.3, 2250.0], [81.4, 2252.0], [81.5, 2253.0], [81.6, 2253.0], [81.7, 2256.0], [81.8, 2260.0], [81.9, 2260.0], [82.0, 2265.0], [82.1, 2265.0], [82.2, 2266.0], [82.3, 2266.0], [82.4, 2268.0], [82.5, 2269.0], [82.6, 2271.0], [82.7, 2271.0], [82.8, 2274.0], [82.9, 2284.0], [83.0, 2284.0], [83.1, 2284.0], [83.2, 2288.0], [83.3, 2295.0], [83.4, 2295.0], [83.5, 2296.0], [83.6, 2299.0], [83.7, 2302.0], [83.8, 2302.0], [83.9, 2303.0], [84.0, 2312.0], [84.1, 2314.0], [84.2, 2314.0], [84.3, 2316.0], [84.4, 2318.0], [84.5, 2318.0], [84.6, 2318.0], [84.7, 2320.0], [84.8, 2323.0], [84.9, 2328.0], [85.0, 2328.0], [85.1, 2346.0], [85.2, 2347.0], [85.3, 2347.0], [85.4, 2350.0], [85.5, 2360.0], [85.6, 2365.0], [85.7, 2365.0], [85.8, 2367.0], [85.9, 2370.0], [86.0, 2370.0], [86.1, 2370.0], [86.2, 2376.0], [86.3, 2376.0], [86.4, 2377.0], [86.5, 2377.0], [86.6, 2380.0], [86.7, 2386.0], [86.8, 2386.0], [86.9, 2388.0], [87.0, 2388.0], [87.1, 2390.0], [87.2, 2390.0], [87.3, 2392.0], [87.4, 2396.0], [87.5, 2401.0], [87.6, 2401.0], [87.7, 2401.0], [87.8, 2402.0], [87.9, 2418.0], [88.0, 2418.0], [88.1, 2419.0], [88.2, 2426.0], [88.3, 2440.0], [88.4, 2440.0], [88.5, 2446.0], [88.6, 2449.0], [88.7, 2449.0], [88.8, 2452.0], [88.9, 2452.0], [89.0, 2459.0], [89.1, 2459.0], [89.2, 2462.0], [89.3, 2463.0], [89.4, 2466.0], [89.5, 2466.0], [89.6, 2470.0], [89.7, 2481.0], [89.8, 2485.0], [89.9, 2485.0], [90.0, 2488.0], [90.1, 2490.0], [90.2, 2490.0], [90.3, 2493.0], [90.4, 2494.0], [90.5, 2500.0], [90.6, 2500.0], [90.7, 2501.0], [90.8, 2504.0], [90.9, 2504.0], [91.0, 2504.0], [91.1, 2505.0], [91.2, 2508.0], [91.3, 2527.0], [91.4, 2527.0], [91.5, 2535.0], [91.6, 2535.0], [91.7, 2535.0], [91.8, 2537.0], [91.9, 2555.0], [92.0, 2557.0], [92.1, 2557.0], [92.2, 2572.0], [92.3, 2576.0], [92.4, 2580.0], [92.5, 2580.0], [92.6, 2585.0], [92.7, 2593.0], [92.8, 2605.0], [92.9, 2605.0], [93.0, 2607.0], [93.1, 2619.0], [93.2, 2629.0], [93.3, 2629.0], [93.4, 2646.0], [93.5, 2659.0], [93.6, 2659.0], [93.7, 2664.0], [93.8, 2665.0], [93.9, 2679.0], [94.0, 2679.0], [94.1, 2686.0], [94.2, 2688.0], [94.3, 2710.0], [94.4, 2710.0], [94.5, 2714.0], [94.6, 2722.0], [94.7, 2723.0], [94.8, 2723.0], [94.9, 2750.0], [95.0, 2751.0], [95.1, 2751.0], [95.2, 2764.0], [95.3, 2777.0], [95.4, 2782.0], [95.5, 2782.0], [95.6, 2783.0], [95.7, 2793.0], [95.8, 2819.0], [95.9, 2819.0], [96.0, 2831.0], [96.1, 2856.0], [96.2, 2870.0], [96.3, 2870.0], [96.4, 2919.0], [96.5, 2921.0], [96.6, 2977.0], [96.7, 2977.0], [96.8, 2986.0], [96.9, 2999.0], [97.0, 2999.0], [97.1, 3030.0], [97.2, 3039.0], [97.3, 3058.0], [97.4, 3058.0], [97.5, 3065.0], [97.6, 3084.0], [97.7, 3099.0], [97.8, 3099.0], [97.9, 3117.0], [98.0, 3166.0], [98.1, 3201.0], [98.2, 3201.0], [98.3, 3254.0], [98.4, 3286.0], [98.5, 3286.0], [98.6, 3395.0], [98.7, 3560.0], [98.8, 3573.0], [98.9, 3573.0], [99.0, 3850.0], [99.1, 3877.0], [99.2, 4020.0], [99.3, 4020.0], [99.4, 4095.0], [99.5, 4170.0], [99.6, 4271.0], [99.7, 4271.0], [99.8, 4343.0], [99.9, 4496.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 500.0, "maxY": 72.0, "series": [{"data": [[700.0, 2.0], [800.0, 9.0], [900.0, 9.0], [1000.0, 34.0], [1100.0, 37.0], [1200.0, 43.0], [1300.0, 40.0], [1400.0, 46.0], [1500.0, 50.0], [1600.0, 38.0], [1700.0, 37.0], [1800.0, 58.0], [1900.0, 72.0], [2000.0, 50.0], [2100.0, 55.0], [2300.0, 28.0], [2200.0, 34.0], [2400.0, 22.0], [2500.0, 17.0], [2600.0, 11.0], [2700.0, 11.0], [2800.0, 4.0], [2900.0, 5.0], [3000.0, 6.0], [3100.0, 2.0], [3200.0, 3.0], [3300.0, 1.0], [3500.0, 2.0], [3800.0, 2.0], [4000.0, 2.0], [4200.0, 1.0], [4300.0, 1.0], [4100.0, 1.0], [4400.0, 1.0], [500.0, 1.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 4400.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 222.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 513.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 222.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 513.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 11.792332268370608, "minX": 1.602642E12, "maxY": 12.0, "series": [{"data": [[1.602642E12, 12.0], [1.60264206E12, 12.0], [1.60264212E12, 11.792332268370608]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60264212E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 1067.0, "minX": 1.0, "maxY": 1841.926896551725, "series": [{"data": [[8.0, 1132.0], [4.0, 1096.0], [2.0, 1513.0], [1.0, 1557.0], [9.0, 1081.0], [10.0, 1067.0], [5.0, 1506.0], [12.0, 1841.926896551725], [6.0, 1136.0], [3.0, 1556.0], [7.0, 1082.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[11.911564625850339, 1834.180952380953]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 12.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 144.61666666666667, "minX": 1.602642E12, "maxY": 1038044.05, "series": [{"data": [[1.602642E12, 82914.15], [1.60264206E12, 1038044.05], [1.60264212E12, 714781.15]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.602642E12, 144.61666666666667], [1.60264206E12, 3025.366666666667], [1.60264212E12, 2353.05]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60264212E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 1803.48635235732, "minX": 1.602642E12, "maxY": 2429.894736842105, "series": [{"data": [[1.602642E12, 2429.894736842105], [1.60264206E12, 1803.48635235732], [1.60264212E12, 1837.5399361022362]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60264212E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 1802.2977667493808, "minX": 1.602642E12, "maxY": 2428.2105263157896, "series": [{"data": [[1.602642E12, 2428.2105263157896], [1.60264206E12, 1802.2977667493808], [1.60264212E12, 1836.4920127795524]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60264212E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.602642E12, "maxY": 6.36842105263158, "series": [{"data": [[1.602642E12, 6.36842105263158], [1.60264206E12, 0.034739454094292806], [1.60264212E12, 0.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60264212E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 574.0, "minX": 1.602642E12, "maxY": 4496.0, "series": [{"data": [[1.602642E12, 3560.0], [1.60264206E12, 4496.0], [1.60264212E12, 3254.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.602642E12, 1049.0], [1.60264206E12, 807.9679915237426], [1.60264212E12, 900.2119953584671]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.602642E12, 1049.0], [1.60264206E12, 839.9648033905029], [1.60264212E12, 915.8870013475419]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.602642E12, 1049.0], [1.60264206E12, 825.7439957618714], [1.60264212E12, 909.9459976792335]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.602642E12, 1049.0], [1.60264206E12, 574.0], [1.60264212E12, 821.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.602642E12, 2576.0], [1.60264206E12, 1735.0], [1.60264212E12, 1890.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60264212E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 1265.5, "minX": 2.0, "maxY": 2439.0, "series": [{"data": [[2.0, 2439.0], [8.0, 1636.5], [4.0, 2234.5], [9.0, 1445.5], [5.0, 1946.0], [10.0, 1265.5], [11.0, 1458.5], [6.0, 1937.0], [3.0, 2018.0], [7.0, 1898.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 11.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 1265.5, "minX": 2.0, "maxY": 2436.0, "series": [{"data": [[2.0, 2436.0], [8.0, 1636.0], [4.0, 2233.5], [9.0, 1444.5], [5.0, 1945.5], [10.0, 1265.5], [11.0, 1458.5], [6.0, 1935.0], [3.0, 2016.0], [7.0, 1897.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 11.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.5166666666666667, "minX": 1.602642E12, "maxY": 6.716666666666667, "series": [{"data": [[1.602642E12, 0.5166666666666667], [1.60264206E12, 6.716666666666667], [1.60264212E12, 5.016666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60264212E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.31666666666666665, "minX": 1.602642E12, "maxY": 6.716666666666667, "series": [{"data": [[1.602642E12, 0.31666666666666665], [1.60264206E12, 6.716666666666667], [1.60264212E12, 5.216666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60264212E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.31666666666666665, "minX": 1.602642E12, "maxY": 6.716666666666667, "series": [{"data": [[1.602642E12, 0.31666666666666665], [1.60264206E12, 6.716666666666667], [1.60264212E12, 5.216666666666667]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60264212E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.31666666666666665, "minX": 1.602642E12, "maxY": 6.716666666666667, "series": [{"data": [[1.602642E12, 0.31666666666666665], [1.60264206E12, 6.716666666666667], [1.60264212E12, 5.216666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60264212E12, "title": "Total Transactions Per Second"}},
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

