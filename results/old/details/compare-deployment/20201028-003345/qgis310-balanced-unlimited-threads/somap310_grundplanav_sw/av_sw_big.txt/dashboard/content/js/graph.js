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
        data: {"result": {"minY": 556.0, "minX": 0.0, "maxY": 10283.0, "series": [{"data": [[0.0, 556.0], [0.1, 639.0], [0.2, 707.0], [0.3, 720.0], [0.4, 725.0], [0.5, 729.0], [0.6, 737.0], [0.7, 742.0], [0.8, 747.0], [0.9, 751.0], [1.0, 752.0], [1.1, 754.0], [1.2, 757.0], [1.3, 759.0], [1.4, 760.0], [1.5, 763.0], [1.6, 766.0], [1.7, 768.0], [1.8, 771.0], [1.9, 773.0], [2.0, 775.0], [2.1, 777.0], [2.2, 779.0], [2.3, 782.0], [2.4, 785.0], [2.5, 787.0], [2.6, 789.0], [2.7, 792.0], [2.8, 794.0], [2.9, 796.0], [3.0, 799.0], [3.1, 801.0], [3.2, 804.0], [3.3, 805.0], [3.4, 806.0], [3.5, 807.0], [3.6, 808.0], [3.7, 810.0], [3.8, 811.0], [3.9, 812.0], [4.0, 814.0], [4.1, 815.0], [4.2, 816.0], [4.3, 819.0], [4.4, 820.0], [4.5, 821.0], [4.6, 821.0], [4.7, 823.0], [4.8, 824.0], [4.9, 824.0], [5.0, 825.0], [5.1, 827.0], [5.2, 828.0], [5.3, 829.0], [5.4, 831.0], [5.5, 832.0], [5.6, 834.0], [5.7, 835.0], [5.8, 837.0], [5.9, 838.0], [6.0, 839.0], [6.1, 840.0], [6.2, 841.0], [6.3, 843.0], [6.4, 843.0], [6.5, 844.0], [6.6, 845.0], [6.7, 847.0], [6.8, 848.0], [6.9, 851.0], [7.0, 853.0], [7.1, 854.0], [7.2, 856.0], [7.3, 859.0], [7.4, 861.0], [7.5, 863.0], [7.6, 865.0], [7.7, 865.0], [7.8, 866.0], [7.9, 868.0], [8.0, 869.0], [8.1, 871.0], [8.2, 873.0], [8.3, 874.0], [8.4, 876.0], [8.5, 878.0], [8.6, 879.0], [8.7, 880.0], [8.8, 882.0], [8.9, 883.0], [9.0, 884.0], [9.1, 885.0], [9.2, 888.0], [9.3, 889.0], [9.4, 891.0], [9.5, 893.0], [9.6, 894.0], [9.7, 896.0], [9.8, 898.0], [9.9, 901.0], [10.0, 905.0], [10.1, 908.0], [10.2, 911.0], [10.3, 914.0], [10.4, 916.0], [10.5, 920.0], [10.6, 924.0], [10.7, 927.0], [10.8, 930.0], [10.9, 932.0], [11.0, 934.0], [11.1, 936.0], [11.2, 938.0], [11.3, 941.0], [11.4, 944.0], [11.5, 948.0], [11.6, 950.0], [11.7, 952.0], [11.8, 956.0], [11.9, 960.0], [12.0, 966.0], [12.1, 970.0], [12.2, 975.0], [12.3, 980.0], [12.4, 984.0], [12.5, 988.0], [12.6, 991.0], [12.7, 995.0], [12.8, 997.0], [12.9, 1000.0], [13.0, 1002.0], [13.1, 1006.0], [13.2, 1010.0], [13.3, 1013.0], [13.4, 1024.0], [13.5, 1028.0], [13.6, 1034.0], [13.7, 1037.0], [13.8, 1041.0], [13.9, 1043.0], [14.0, 1045.0], [14.1, 1047.0], [14.2, 1049.0], [14.3, 1053.0], [14.4, 1055.0], [14.5, 1057.0], [14.6, 1061.0], [14.7, 1064.0], [14.8, 1068.0], [14.9, 1070.0], [15.0, 1072.0], [15.1, 1074.0], [15.2, 1077.0], [15.3, 1079.0], [15.4, 1084.0], [15.5, 1085.0], [15.6, 1087.0], [15.7, 1089.0], [15.8, 1095.0], [15.9, 1100.0], [16.0, 1103.0], [16.1, 1105.0], [16.2, 1107.0], [16.3, 1111.0], [16.4, 1112.0], [16.5, 1113.0], [16.6, 1115.0], [16.7, 1117.0], [16.8, 1120.0], [16.9, 1124.0], [17.0, 1126.0], [17.1, 1128.0], [17.2, 1131.0], [17.3, 1133.0], [17.4, 1138.0], [17.5, 1141.0], [17.6, 1144.0], [17.7, 1147.0], [17.8, 1151.0], [17.9, 1155.0], [18.0, 1156.0], [18.1, 1158.0], [18.2, 1160.0], [18.3, 1163.0], [18.4, 1164.0], [18.5, 1168.0], [18.6, 1170.0], [18.7, 1174.0], [18.8, 1178.0], [18.9, 1181.0], [19.0, 1182.0], [19.1, 1186.0], [19.2, 1188.0], [19.3, 1189.0], [19.4, 1190.0], [19.5, 1192.0], [19.6, 1193.0], [19.7, 1195.0], [19.8, 1198.0], [19.9, 1199.0], [20.0, 1202.0], [20.1, 1204.0], [20.2, 1208.0], [20.3, 1210.0], [20.4, 1212.0], [20.5, 1213.0], [20.6, 1218.0], [20.7, 1219.0], [20.8, 1222.0], [20.9, 1223.0], [21.0, 1226.0], [21.1, 1229.0], [21.2, 1231.0], [21.3, 1234.0], [21.4, 1237.0], [21.5, 1240.0], [21.6, 1244.0], [21.7, 1249.0], [21.8, 1253.0], [21.9, 1254.0], [22.0, 1255.0], [22.1, 1260.0], [22.2, 1262.0], [22.3, 1266.0], [22.4, 1267.0], [22.5, 1269.0], [22.6, 1270.0], [22.7, 1274.0], [22.8, 1277.0], [22.9, 1281.0], [23.0, 1283.0], [23.1, 1285.0], [23.2, 1289.0], [23.3, 1291.0], [23.4, 1293.0], [23.5, 1296.0], [23.6, 1299.0], [23.7, 1302.0], [23.8, 1303.0], [23.9, 1305.0], [24.0, 1307.0], [24.1, 1308.0], [24.2, 1309.0], [24.3, 1312.0], [24.4, 1315.0], [24.5, 1317.0], [24.6, 1321.0], [24.7, 1322.0], [24.8, 1325.0], [24.9, 1327.0], [25.0, 1328.0], [25.1, 1332.0], [25.2, 1333.0], [25.3, 1336.0], [25.4, 1338.0], [25.5, 1339.0], [25.6, 1341.0], [25.7, 1344.0], [25.8, 1346.0], [25.9, 1350.0], [26.0, 1350.0], [26.1, 1353.0], [26.2, 1356.0], [26.3, 1357.0], [26.4, 1359.0], [26.5, 1362.0], [26.6, 1365.0], [26.7, 1366.0], [26.8, 1370.0], [26.9, 1373.0], [27.0, 1374.0], [27.1, 1375.0], [27.2, 1377.0], [27.3, 1379.0], [27.4, 1383.0], [27.5, 1384.0], [27.6, 1388.0], [27.7, 1389.0], [27.8, 1391.0], [27.9, 1393.0], [28.0, 1395.0], [28.1, 1396.0], [28.2, 1399.0], [28.3, 1402.0], [28.4, 1403.0], [28.5, 1405.0], [28.6, 1409.0], [28.7, 1410.0], [28.8, 1412.0], [28.9, 1415.0], [29.0, 1417.0], [29.1, 1421.0], [29.2, 1423.0], [29.3, 1425.0], [29.4, 1427.0], [29.5, 1429.0], [29.6, 1431.0], [29.7, 1432.0], [29.8, 1435.0], [29.9, 1436.0], [30.0, 1437.0], [30.1, 1438.0], [30.2, 1441.0], [30.3, 1445.0], [30.4, 1448.0], [30.5, 1451.0], [30.6, 1454.0], [30.7, 1456.0], [30.8, 1458.0], [30.9, 1460.0], [31.0, 1462.0], [31.1, 1464.0], [31.2, 1465.0], [31.3, 1468.0], [31.4, 1472.0], [31.5, 1474.0], [31.6, 1476.0], [31.7, 1479.0], [31.8, 1482.0], [31.9, 1486.0], [32.0, 1488.0], [32.1, 1489.0], [32.2, 1496.0], [32.3, 1498.0], [32.4, 1501.0], [32.5, 1505.0], [32.6, 1507.0], [32.7, 1508.0], [32.8, 1509.0], [32.9, 1513.0], [33.0, 1514.0], [33.1, 1516.0], [33.2, 1520.0], [33.3, 1521.0], [33.4, 1523.0], [33.5, 1525.0], [33.6, 1527.0], [33.7, 1529.0], [33.8, 1531.0], [33.9, 1533.0], [34.0, 1536.0], [34.1, 1538.0], [34.2, 1539.0], [34.3, 1542.0], [34.4, 1544.0], [34.5, 1545.0], [34.6, 1547.0], [34.7, 1551.0], [34.8, 1553.0], [34.9, 1555.0], [35.0, 1558.0], [35.1, 1561.0], [35.2, 1563.0], [35.3, 1564.0], [35.4, 1567.0], [35.5, 1568.0], [35.6, 1571.0], [35.7, 1574.0], [35.8, 1575.0], [35.9, 1577.0], [36.0, 1581.0], [36.1, 1584.0], [36.2, 1586.0], [36.3, 1588.0], [36.4, 1590.0], [36.5, 1595.0], [36.6, 1596.0], [36.7, 1599.0], [36.8, 1601.0], [36.9, 1602.0], [37.0, 1606.0], [37.1, 1607.0], [37.2, 1609.0], [37.3, 1611.0], [37.4, 1614.0], [37.5, 1616.0], [37.6, 1618.0], [37.7, 1620.0], [37.8, 1621.0], [37.9, 1624.0], [38.0, 1626.0], [38.1, 1630.0], [38.2, 1631.0], [38.3, 1632.0], [38.4, 1634.0], [38.5, 1636.0], [38.6, 1637.0], [38.7, 1642.0], [38.8, 1643.0], [38.9, 1644.0], [39.0, 1645.0], [39.1, 1646.0], [39.2, 1648.0], [39.3, 1651.0], [39.4, 1654.0], [39.5, 1655.0], [39.6, 1656.0], [39.7, 1657.0], [39.8, 1658.0], [39.9, 1661.0], [40.0, 1662.0], [40.1, 1664.0], [40.2, 1665.0], [40.3, 1666.0], [40.4, 1667.0], [40.5, 1668.0], [40.6, 1670.0], [40.7, 1671.0], [40.8, 1672.0], [40.9, 1673.0], [41.0, 1676.0], [41.1, 1678.0], [41.2, 1679.0], [41.3, 1681.0], [41.4, 1681.0], [41.5, 1683.0], [41.6, 1685.0], [41.7, 1688.0], [41.8, 1688.0], [41.9, 1692.0], [42.0, 1693.0], [42.1, 1696.0], [42.2, 1698.0], [42.3, 1700.0], [42.4, 1702.0], [42.5, 1704.0], [42.6, 1705.0], [42.7, 1707.0], [42.8, 1709.0], [42.9, 1709.0], [43.0, 1711.0], [43.1, 1713.0], [43.2, 1714.0], [43.3, 1717.0], [43.4, 1718.0], [43.5, 1720.0], [43.6, 1723.0], [43.7, 1725.0], [43.8, 1726.0], [43.9, 1730.0], [44.0, 1732.0], [44.1, 1733.0], [44.2, 1735.0], [44.3, 1736.0], [44.4, 1737.0], [44.5, 1738.0], [44.6, 1740.0], [44.7, 1741.0], [44.8, 1742.0], [44.9, 1745.0], [45.0, 1747.0], [45.1, 1748.0], [45.2, 1750.0], [45.3, 1751.0], [45.4, 1754.0], [45.5, 1755.0], [45.6, 1757.0], [45.7, 1759.0], [45.8, 1761.0], [45.9, 1763.0], [46.0, 1765.0], [46.1, 1766.0], [46.2, 1768.0], [46.3, 1770.0], [46.4, 1771.0], [46.5, 1775.0], [46.6, 1777.0], [46.7, 1778.0], [46.8, 1781.0], [46.9, 1784.0], [47.0, 1784.0], [47.1, 1786.0], [47.2, 1786.0], [47.3, 1787.0], [47.4, 1789.0], [47.5, 1790.0], [47.6, 1793.0], [47.7, 1794.0], [47.8, 1795.0], [47.9, 1796.0], [48.0, 1797.0], [48.1, 1800.0], [48.2, 1801.0], [48.3, 1802.0], [48.4, 1803.0], [48.5, 1805.0], [48.6, 1806.0], [48.7, 1810.0], [48.8, 1812.0], [48.9, 1813.0], [49.0, 1816.0], [49.1, 1818.0], [49.2, 1820.0], [49.3, 1821.0], [49.4, 1822.0], [49.5, 1823.0], [49.6, 1824.0], [49.7, 1826.0], [49.8, 1827.0], [49.9, 1828.0], [50.0, 1829.0], [50.1, 1830.0], [50.2, 1831.0], [50.3, 1832.0], [50.4, 1833.0], [50.5, 1834.0], [50.6, 1836.0], [50.7, 1837.0], [50.8, 1838.0], [50.9, 1840.0], [51.0, 1841.0], [51.1, 1843.0], [51.2, 1844.0], [51.3, 1846.0], [51.4, 1847.0], [51.5, 1850.0], [51.6, 1851.0], [51.7, 1852.0], [51.8, 1853.0], [51.9, 1855.0], [52.0, 1857.0], [52.1, 1859.0], [52.2, 1863.0], [52.3, 1864.0], [52.4, 1865.0], [52.5, 1867.0], [52.6, 1868.0], [52.7, 1870.0], [52.8, 1873.0], [52.9, 1875.0], [53.0, 1877.0], [53.1, 1879.0], [53.2, 1880.0], [53.3, 1881.0], [53.4, 1884.0], [53.5, 1885.0], [53.6, 1886.0], [53.7, 1887.0], [53.8, 1888.0], [53.9, 1889.0], [54.0, 1891.0], [54.1, 1892.0], [54.2, 1895.0], [54.3, 1897.0], [54.4, 1898.0], [54.5, 1901.0], [54.6, 1903.0], [54.7, 1904.0], [54.8, 1906.0], [54.9, 1908.0], [55.0, 1910.0], [55.1, 1912.0], [55.2, 1915.0], [55.3, 1916.0], [55.4, 1918.0], [55.5, 1922.0], [55.6, 1924.0], [55.7, 1925.0], [55.8, 1926.0], [55.9, 1927.0], [56.0, 1929.0], [56.1, 1931.0], [56.2, 1933.0], [56.3, 1934.0], [56.4, 1937.0], [56.5, 1939.0], [56.6, 1940.0], [56.7, 1944.0], [56.8, 1946.0], [56.9, 1947.0], [57.0, 1950.0], [57.1, 1951.0], [57.2, 1953.0], [57.3, 1954.0], [57.4, 1955.0], [57.5, 1957.0], [57.6, 1959.0], [57.7, 1961.0], [57.8, 1962.0], [57.9, 1964.0], [58.0, 1967.0], [58.1, 1969.0], [58.2, 1970.0], [58.3, 1972.0], [58.4, 1974.0], [58.5, 1976.0], [58.6, 1979.0], [58.7, 1981.0], [58.8, 1983.0], [58.9, 1984.0], [59.0, 1986.0], [59.1, 1989.0], [59.2, 1991.0], [59.3, 1993.0], [59.4, 1995.0], [59.5, 1997.0], [59.6, 1998.0], [59.7, 2000.0], [59.8, 2001.0], [59.9, 2001.0], [60.0, 2003.0], [60.1, 2006.0], [60.2, 2008.0], [60.3, 2011.0], [60.4, 2012.0], [60.5, 2013.0], [60.6, 2016.0], [60.7, 2019.0], [60.8, 2020.0], [60.9, 2025.0], [61.0, 2030.0], [61.1, 2033.0], [61.2, 2036.0], [61.3, 2038.0], [61.4, 2039.0], [61.5, 2041.0], [61.6, 2045.0], [61.7, 2046.0], [61.8, 2047.0], [61.9, 2050.0], [62.0, 2053.0], [62.1, 2055.0], [62.2, 2056.0], [62.3, 2056.0], [62.4, 2060.0], [62.5, 2064.0], [62.6, 2066.0], [62.7, 2069.0], [62.8, 2072.0], [62.9, 2075.0], [63.0, 2079.0], [63.1, 2082.0], [63.2, 2085.0], [63.3, 2086.0], [63.4, 2088.0], [63.5, 2090.0], [63.6, 2092.0], [63.7, 2096.0], [63.8, 2099.0], [63.9, 2101.0], [64.0, 2103.0], [64.1, 2106.0], [64.2, 2110.0], [64.3, 2114.0], [64.4, 2116.0], [64.5, 2120.0], [64.6, 2123.0], [64.7, 2125.0], [64.8, 2126.0], [64.9, 2129.0], [65.0, 2132.0], [65.1, 2136.0], [65.2, 2139.0], [65.3, 2142.0], [65.4, 2143.0], [65.5, 2145.0], [65.6, 2147.0], [65.7, 2149.0], [65.8, 2154.0], [65.9, 2157.0], [66.0, 2159.0], [66.1, 2161.0], [66.2, 2163.0], [66.3, 2166.0], [66.4, 2167.0], [66.5, 2168.0], [66.6, 2171.0], [66.7, 2175.0], [66.8, 2177.0], [66.9, 2179.0], [67.0, 2181.0], [67.1, 2182.0], [67.2, 2185.0], [67.3, 2189.0], [67.4, 2193.0], [67.5, 2196.0], [67.6, 2197.0], [67.7, 2200.0], [67.8, 2201.0], [67.9, 2204.0], [68.0, 2207.0], [68.1, 2211.0], [68.2, 2215.0], [68.3, 2216.0], [68.4, 2219.0], [68.5, 2223.0], [68.6, 2226.0], [68.7, 2229.0], [68.8, 2232.0], [68.9, 2235.0], [69.0, 2236.0], [69.1, 2238.0], [69.2, 2242.0], [69.3, 2245.0], [69.4, 2249.0], [69.5, 2253.0], [69.6, 2257.0], [69.7, 2260.0], [69.8, 2262.0], [69.9, 2266.0], [70.0, 2271.0], [70.1, 2274.0], [70.2, 2277.0], [70.3, 2281.0], [70.4, 2284.0], [70.5, 2286.0], [70.6, 2289.0], [70.7, 2294.0], [70.8, 2300.0], [70.9, 2303.0], [71.0, 2305.0], [71.1, 2312.0], [71.2, 2313.0], [71.3, 2316.0], [71.4, 2319.0], [71.5, 2327.0], [71.6, 2330.0], [71.7, 2334.0], [71.8, 2337.0], [71.9, 2344.0], [72.0, 2346.0], [72.1, 2348.0], [72.2, 2350.0], [72.3, 2353.0], [72.4, 2356.0], [72.5, 2359.0], [72.6, 2361.0], [72.7, 2367.0], [72.8, 2368.0], [72.9, 2377.0], [73.0, 2382.0], [73.1, 2386.0], [73.2, 2388.0], [73.3, 2390.0], [73.4, 2392.0], [73.5, 2394.0], [73.6, 2399.0], [73.7, 2406.0], [73.8, 2408.0], [73.9, 2414.0], [74.0, 2418.0], [74.1, 2424.0], [74.2, 2429.0], [74.3, 2435.0], [74.4, 2438.0], [74.5, 2442.0], [74.6, 2443.0], [74.7, 2446.0], [74.8, 2451.0], [74.9, 2459.0], [75.0, 2462.0], [75.1, 2464.0], [75.2, 2469.0], [75.3, 2473.0], [75.4, 2477.0], [75.5, 2480.0], [75.6, 2484.0], [75.7, 2485.0], [75.8, 2488.0], [75.9, 2495.0], [76.0, 2496.0], [76.1, 2499.0], [76.2, 2501.0], [76.3, 2503.0], [76.4, 2506.0], [76.5, 2511.0], [76.6, 2515.0], [76.7, 2517.0], [76.8, 2519.0], [76.9, 2525.0], [77.0, 2528.0], [77.1, 2531.0], [77.2, 2532.0], [77.3, 2533.0], [77.4, 2535.0], [77.5, 2540.0], [77.6, 2545.0], [77.7, 2547.0], [77.8, 2550.0], [77.9, 2553.0], [78.0, 2556.0], [78.1, 2559.0], [78.2, 2565.0], [78.3, 2571.0], [78.4, 2574.0], [78.5, 2581.0], [78.6, 2582.0], [78.7, 2584.0], [78.8, 2588.0], [78.9, 2589.0], [79.0, 2592.0], [79.1, 2595.0], [79.2, 2598.0], [79.3, 2606.0], [79.4, 2609.0], [79.5, 2610.0], [79.6, 2614.0], [79.7, 2619.0], [79.8, 2625.0], [79.9, 2627.0], [80.0, 2634.0], [80.1, 2636.0], [80.2, 2640.0], [80.3, 2642.0], [80.4, 2644.0], [80.5, 2649.0], [80.6, 2653.0], [80.7, 2656.0], [80.8, 2661.0], [80.9, 2665.0], [81.0, 2668.0], [81.1, 2672.0], [81.2, 2675.0], [81.3, 2680.0], [81.4, 2684.0], [81.5, 2686.0], [81.6, 2689.0], [81.7, 2695.0], [81.8, 2698.0], [81.9, 2703.0], [82.0, 2704.0], [82.1, 2708.0], [82.2, 2712.0], [82.3, 2717.0], [82.4, 2720.0], [82.5, 2723.0], [82.6, 2726.0], [82.7, 2732.0], [82.8, 2735.0], [82.9, 2737.0], [83.0, 2741.0], [83.1, 2745.0], [83.2, 2747.0], [83.3, 2751.0], [83.4, 2757.0], [83.5, 2760.0], [83.6, 2762.0], [83.7, 2765.0], [83.8, 2770.0], [83.9, 2779.0], [84.0, 2783.0], [84.1, 2785.0], [84.2, 2790.0], [84.3, 2792.0], [84.4, 2800.0], [84.5, 2804.0], [84.6, 2808.0], [84.7, 2811.0], [84.8, 2817.0], [84.9, 2824.0], [85.0, 2828.0], [85.1, 2833.0], [85.2, 2841.0], [85.3, 2849.0], [85.4, 2859.0], [85.5, 2863.0], [85.6, 2865.0], [85.7, 2869.0], [85.8, 2872.0], [85.9, 2876.0], [86.0, 2881.0], [86.1, 2887.0], [86.2, 2891.0], [86.3, 2897.0], [86.4, 2901.0], [86.5, 2906.0], [86.6, 2907.0], [86.7, 2915.0], [86.8, 2922.0], [86.9, 2927.0], [87.0, 2928.0], [87.1, 2935.0], [87.2, 2941.0], [87.3, 2949.0], [87.4, 2954.0], [87.5, 2961.0], [87.6, 2968.0], [87.7, 2971.0], [87.8, 2980.0], [87.9, 2984.0], [88.0, 2993.0], [88.1, 3001.0], [88.2, 3008.0], [88.3, 3010.0], [88.4, 3016.0], [88.5, 3023.0], [88.6, 3035.0], [88.7, 3041.0], [88.8, 3045.0], [88.9, 3049.0], [89.0, 3059.0], [89.1, 3065.0], [89.2, 3083.0], [89.3, 3088.0], [89.4, 3095.0], [89.5, 3100.0], [89.6, 3105.0], [89.7, 3109.0], [89.8, 3117.0], [89.9, 3126.0], [90.0, 3134.0], [90.1, 3139.0], [90.2, 3144.0], [90.3, 3154.0], [90.4, 3162.0], [90.5, 3179.0], [90.6, 3187.0], [90.7, 3195.0], [90.8, 3196.0], [90.9, 3202.0], [91.0, 3210.0], [91.1, 3213.0], [91.2, 3218.0], [91.3, 3225.0], [91.4, 3232.0], [91.5, 3238.0], [91.6, 3245.0], [91.7, 3255.0], [91.8, 3268.0], [91.9, 3272.0], [92.0, 3280.0], [92.1, 3284.0], [92.2, 3303.0], [92.3, 3313.0], [92.4, 3322.0], [92.5, 3333.0], [92.6, 3342.0], [92.7, 3348.0], [92.8, 3359.0], [92.9, 3362.0], [93.0, 3371.0], [93.1, 3381.0], [93.2, 3393.0], [93.3, 3409.0], [93.4, 3414.0], [93.5, 3424.0], [93.6, 3426.0], [93.7, 3433.0], [93.8, 3440.0], [93.9, 3445.0], [94.0, 3451.0], [94.1, 3460.0], [94.2, 3473.0], [94.3, 3481.0], [94.4, 3497.0], [94.5, 3520.0], [94.6, 3532.0], [94.7, 3539.0], [94.8, 3553.0], [94.9, 3569.0], [95.0, 3580.0], [95.1, 3598.0], [95.2, 3606.0], [95.3, 3619.0], [95.4, 3633.0], [95.5, 3659.0], [95.6, 3687.0], [95.7, 3706.0], [95.8, 3730.0], [95.9, 3743.0], [96.0, 3762.0], [96.1, 3778.0], [96.2, 3789.0], [96.3, 3826.0], [96.4, 3859.0], [96.5, 3882.0], [96.6, 3904.0], [96.7, 3919.0], [96.8, 3946.0], [96.9, 3968.0], [97.0, 4009.0], [97.1, 4025.0], [97.2, 4056.0], [97.3, 4076.0], [97.4, 4109.0], [97.5, 4163.0], [97.6, 4182.0], [97.7, 4198.0], [97.8, 4230.0], [97.9, 4260.0], [98.0, 4303.0], [98.1, 4337.0], [98.2, 4415.0], [98.3, 4460.0], [98.4, 4494.0], [98.5, 4555.0], [98.6, 4678.0], [98.7, 4766.0], [98.8, 4838.0], [98.9, 4925.0], [99.0, 4991.0], [99.1, 5169.0], [99.2, 5376.0], [99.3, 5554.0], [99.4, 5622.0], [99.5, 5876.0], [99.6, 6224.0], [99.7, 6481.0], [99.8, 6682.0], [99.9, 6944.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 500.0, "maxY": 354.0, "series": [{"data": [[600.0, 5.0], [700.0, 148.0], [800.0, 354.0], [900.0, 157.0], [1000.0, 157.0], [1100.0, 209.0], [1200.0, 192.0], [1300.0, 239.0], [1400.0, 213.0], [1500.0, 227.0], [1600.0, 289.0], [1700.0, 301.0], [1800.0, 329.0], [1900.0, 274.0], [2000.0, 215.0], [2100.0, 200.0], [2300.0, 146.0], [2200.0, 161.0], [2400.0, 133.0], [2500.0, 159.0], [2600.0, 135.0], [2800.0, 105.0], [2700.0, 132.0], [2900.0, 87.0], [3000.0, 74.0], [3100.0, 71.0], [3200.0, 68.0], [3300.0, 55.0], [3400.0, 61.0], [3500.0, 36.0], [3600.0, 29.0], [3700.0, 28.0], [3800.0, 20.0], [3900.0, 21.0], [4000.0, 20.0], [4200.0, 15.0], [4300.0, 10.0], [4100.0, 17.0], [4400.0, 11.0], [4500.0, 9.0], [4600.0, 4.0], [4800.0, 7.0], [4700.0, 5.0], [5100.0, 3.0], [4900.0, 7.0], [5000.0, 2.0], [5300.0, 4.0], [5200.0, 1.0], [5400.0, 3.0], [5500.0, 6.0], [5600.0, 2.0], [5700.0, 2.0], [5800.0, 5.0], [6000.0, 1.0], [6300.0, 2.0], [6200.0, 3.0], [6400.0, 2.0], [6500.0, 4.0], [6600.0, 1.0], [6800.0, 1.0], [6700.0, 2.0], [6900.0, 3.0], [7600.0, 1.0], [7700.0, 1.0], [9300.0, 1.0], [10200.0, 1.0], [500.0, 4.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 10200.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 1681.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 3509.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1681.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 3509.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 11.661538461538461, "minX": 1.60385172E12, "maxY": 12.0, "series": [{"data": [[1.6038519E12, 12.0], [1.6038522E12, 12.0], [1.6038525E12, 12.0], [1.60385184E12, 12.0], [1.60385196E12, 12.0], [1.60385226E12, 12.0], [1.60385256E12, 11.661538461538461], [1.60385238E12, 12.0], [1.60385172E12, 12.0], [1.60385202E12, 12.0], [1.60385232E12, 12.0], [1.60385214E12, 12.0], [1.60385244E12, 12.0], [1.60385178E12, 12.0], [1.60385208E12, 12.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60385256E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 1153.0, "minX": 1.0, "maxY": 4233.0, "series": [{"data": [[8.0, 2899.0], [4.0, 2130.0], [2.0, 3255.0], [1.0, 3447.0], [9.0, 2056.0], [10.0, 1700.0], [5.0, 2253.0], [11.0, 3056.0], [12.0, 1975.3969878354899], [6.0, 1153.0], [3.0, 4233.0], [7.0, 1688.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[11.987283236994216, 1976.5801541425826]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 12.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 1132.4333333333334, "minX": 1.60385172E12, "maxY": 2047503.7166666666, "series": [{"data": [[1.6038519E12, 2047503.7166666666], [1.6038522E12, 1474630.0833333333], [1.6038525E12, 1660937.3833333333], [1.60385184E12, 1135821.0166666666], [1.60385196E12, 1971519.5833333333], [1.60385226E12, 1297174.05], [1.60385256E12, 907035.45], [1.60385238E12, 2025917.8], [1.60385172E12, 1168240.1333333333], [1.60385202E12, 1679474.1666666667], [1.60385232E12, 1726611.7666666666], [1.60385214E12, 1831259.6333333333], [1.60385244E12, 1658117.9166666667], [1.60385178E12, 1644537.6833333333], [1.60385208E12, 1743902.9]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6038519E12, 2483.366666666667], [1.6038522E12, 2532.7166666666667], [1.6038525E12, 3113.9666666666667], [1.60385184E12, 2969.766666666667], [1.60385196E12, 3191.95], [1.60385226E12, 2683.516666666667], [1.60385256E12, 1463.9333333333334], [1.60385238E12, 2911.366666666667], [1.60385172E12, 1132.4333333333334], [1.60385202E12, 2671.0833333333335], [1.60385232E12, 2752.6666666666665], [1.60385214E12, 2171.616666666667], [1.60385244E12, 2871.7166666666667], [1.60385178E12, 2791.5], [1.60385208E12, 2835.733333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60385256E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 1718.6540284360194, "minX": 1.60385172E12, "maxY": 2685.771241830067, "series": [{"data": [[1.6038519E12, 2139.9702380952385], [1.6038522E12, 2093.78151260504], [1.6038525E12, 1766.377128953771], [1.60385184E12, 1777.292803970224], [1.60385196E12, 1718.6540284360194], [1.60385226E12, 1962.1385869565208], [1.60385256E12, 2447.2307692307704], [1.60385238E12, 1876.6302083333323], [1.60385172E12, 2685.771241830067], [1.60385202E12, 2052.8461538461543], [1.60385232E12, 1907.5748663101606], [1.60385214E12, 2406.6288659793818], [1.60385244E12, 1893.8095238095236], [1.60385178E12, 1873.5959079283882], [1.60385208E12, 1890.6010638297867]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60385256E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 1716.81990521327, "minX": 1.60385172E12, "maxY": 2682.3398692810447, "series": [{"data": [[1.6038519E12, 2137.1249999999995], [1.6038522E12, 2092.3725490196066], [1.6038525E12, 1764.8369829683695], [1.60385184E12, 1776.0446650124086], [1.60385196E12, 1716.81990521327], [1.60385226E12, 1960.85054347826], [1.60385256E12, 2445.599999999999], [1.60385238E12, 1874.559895833333], [1.60385172E12, 2682.3398692810447], [1.60385202E12, 2051.3874643874624], [1.60385232E12, 1905.7941176470588], [1.60385214E12, 2404.463917525776], [1.60385244E12, 1892.3465608465613], [1.60385178E12, 1871.7340153452674], [1.60385208E12, 1889.0797872340413]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60385256E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.020512820512820513, "minX": 1.60385172E12, "maxY": 0.8954248366013072, "series": [{"data": [[1.6038519E12, 0.04166666666666671], [1.6038522E12, 0.036414565826330535], [1.6038525E12, 0.026763990267639908], [1.60385184E12, 0.03970223325062033], [1.60385196E12, 0.030805687203791458], [1.60385226E12, 0.03804347826086959], [1.60385256E12, 0.020512820512820513], [1.60385238E12, 0.028645833333333356], [1.60385172E12, 0.8954248366013072], [1.60385202E12, 0.03418803418803417], [1.60385232E12, 0.0320855614973262], [1.60385214E12, 0.04467353951890038], [1.60385244E12, 0.037037037037037056], [1.60385178E12, 0.033248081841432214], [1.60385208E12, 0.0292553191489362]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60385256E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 556.0, "minX": 1.60385172E12, "maxY": 10283.0, "series": [{"data": [[1.6038519E12, 5351.0], [1.6038522E12, 10283.0], [1.6038525E12, 4838.0], [1.60385184E12, 4938.0], [1.60385196E12, 4484.0], [1.60385226E12, 6428.0], [1.60385256E12, 5554.0], [1.60385238E12, 4840.0], [1.60385172E12, 6481.0], [1.60385202E12, 4588.0], [1.60385232E12, 4690.0], [1.60385214E12, 6786.0], [1.60385244E12, 3874.0], [1.60385178E12, 6866.0], [1.60385208E12, 6215.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6038519E12, 934.0229975092411], [1.6038522E12, 749.8839981222153], [1.6038525E12, 755.4959988212586], [1.60385184E12, 752.0], [1.60385196E12, 595.4559991931915], [1.60385226E12, 768.5679992961883], [1.60385256E12, 1152.0559998130798], [1.60385238E12, 754.4649999082088], [1.60385172E12, 1011.1579998898507], [1.60385202E12, 768.6719996643067], [1.60385232E12, 808.9999992847443], [1.60385214E12, 979.2639938735962], [1.60385244E12, 722.4659994578361], [1.60385178E12, 806.5279999065399], [1.60385208E12, 698.964999550581]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6038519E12, 943.4253009963036], [1.6038522E12, 756.9724007511139], [1.6038525E12, 759.8668004322052], [1.60385184E12, 752.0], [1.60385196E12, 600.7540008068084], [1.60385226E12, 771.2248002815246], [1.60385256E12, 1152.761600074768], [1.60385238E12, 754.8115000367164], [1.60385172E12, 1011.5738000440598], [1.60385202E12, 769.9392001342774], [1.60385232E12, 811.7000002861023], [1.60385214E12, 1002.3904024505615], [1.60385244E12, 724.5126002168655], [1.60385178E12, 806.880800037384], [1.60385208E12, 700.6615001797676]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6038519E12, 939.2464987546206], [1.6038522E12, 753.8219990611076], [1.6038525E12, 757.9679994106293], [1.60385184E12, 752.0], [1.60385196E12, 597.3699989914894], [1.60385226E12, 770.0439996480942], [1.60385256E12, 1152.44799990654], [1.60385238E12, 754.6574999541044], [1.60385172E12, 1011.3889999449253], [1.60385202E12, 769.3759998321533], [1.60385232E12, 810.4999996423721], [1.60385214E12, 992.111996936798], [1.60385244E12, 723.6029997289181], [1.60385178E12, 806.72399995327], [1.60385208E12, 699.9074997752905]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.6038519E12, 824.0], [1.6038522E12, 727.0], [1.6038525E12, 658.0], [1.60385184E12, 742.0], [1.60385196E12, 556.0], [1.60385226E12, 752.0], [1.60385256E12, 1149.0], [1.60385238E12, 747.0], [1.60385172E12, 1010.0], [1.60385202E12, 759.0], [1.60385232E12, 791.0], [1.60385214E12, 893.0], [1.60385244E12, 717.0], [1.60385178E12, 754.0], [1.60385208E12, 639.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6038519E12, 1950.5], [1.6038522E12, 1864.0], [1.6038525E12, 1667.0], [1.60385184E12, 1569.0], [1.60385196E12, 1634.5], [1.60385226E12, 1679.5], [1.60385256E12, 2275.0], [1.60385238E12, 1801.0], [1.60385172E12, 2592.0], [1.60385202E12, 2045.0], [1.60385232E12, 1830.5], [1.60385214E12, 2200.0], [1.60385244E12, 1839.0], [1.60385178E12, 1746.0], [1.60385208E12, 1801.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60385256E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 829.0, "minX": 1.0, "maxY": 3500.5, "series": [{"data": [[8.0, 1725.0], [2.0, 2744.0], [9.0, 1587.0], [10.0, 1326.5], [11.0, 1034.0], [3.0, 2568.0], [12.0, 995.5], [13.0, 994.0], [14.0, 838.5], [15.0, 829.0], [1.0, 3500.5], [4.0, 2335.0], [16.0, 837.0], [5.0, 2125.0], [6.0, 1957.0], [7.0, 1829.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 16.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 829.0, "minX": 1.0, "maxY": 3497.0, "series": [{"data": [[8.0, 1724.5], [2.0, 2743.0], [9.0, 1584.0], [10.0, 1326.5], [11.0, 1033.0], [3.0, 2564.0], [12.0, 995.0], [13.0, 994.0], [14.0, 838.5], [15.0, 829.0], [1.0, 3497.0], [4.0, 2330.5], [16.0, 837.0], [5.0, 2124.5], [6.0, 1955.5], [7.0, 1829.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 16.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 2.75, "minX": 1.60385172E12, "maxY": 7.033333333333333, "series": [{"data": [[1.6038519E12, 5.6], [1.6038522E12, 5.95], [1.6038525E12, 6.85], [1.60385184E12, 6.716666666666667], [1.60385196E12, 7.033333333333333], [1.60385226E12, 6.133333333333334], [1.60385256E12, 3.05], [1.60385238E12, 6.4], [1.60385172E12, 2.75], [1.60385202E12, 5.85], [1.60385232E12, 6.233333333333333], [1.60385214E12, 4.85], [1.60385244E12, 6.3], [1.60385178E12, 6.516666666666667], [1.60385208E12, 6.266666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60385256E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 2.55, "minX": 1.60385172E12, "maxY": 7.033333333333333, "series": [{"data": [[1.6038519E12, 5.6], [1.6038522E12, 5.95], [1.6038525E12, 6.85], [1.60385184E12, 6.716666666666667], [1.60385196E12, 7.033333333333333], [1.60385226E12, 6.133333333333334], [1.60385256E12, 3.25], [1.60385238E12, 6.4], [1.60385172E12, 2.55], [1.60385202E12, 5.85], [1.60385232E12, 6.233333333333333], [1.60385214E12, 4.85], [1.60385244E12, 6.3], [1.60385178E12, 6.516666666666667], [1.60385208E12, 6.266666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60385256E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 2.55, "minX": 1.60385172E12, "maxY": 7.033333333333333, "series": [{"data": [[1.6038519E12, 5.6], [1.6038522E12, 5.95], [1.6038525E12, 6.85], [1.60385184E12, 6.716666666666667], [1.60385196E12, 7.033333333333333], [1.60385226E12, 6.133333333333334], [1.60385256E12, 3.25], [1.60385238E12, 6.4], [1.60385172E12, 2.55], [1.60385202E12, 5.85], [1.60385232E12, 6.233333333333333], [1.60385214E12, 4.85], [1.60385244E12, 6.3], [1.60385178E12, 6.516666666666667], [1.60385208E12, 6.266666666666667]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60385256E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 2.55, "minX": 1.60385172E12, "maxY": 7.033333333333333, "series": [{"data": [[1.6038519E12, 5.6], [1.6038522E12, 5.95], [1.6038525E12, 6.85], [1.60385184E12, 6.716666666666667], [1.60385196E12, 7.033333333333333], [1.60385226E12, 6.133333333333334], [1.60385256E12, 3.25], [1.60385238E12, 6.4], [1.60385172E12, 2.55], [1.60385202E12, 5.85], [1.60385232E12, 6.233333333333333], [1.60385214E12, 4.85], [1.60385244E12, 6.3], [1.60385178E12, 6.516666666666667], [1.60385208E12, 6.266666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60385256E12, "title": "Total Transactions Per Second"}},
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

