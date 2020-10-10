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
        data: {"result": {"minY": 607.0, "minX": 0.0, "maxY": 10075.0, "series": [{"data": [[0.0, 607.0], [0.1, 663.0], [0.2, 704.0], [0.3, 706.0], [0.4, 713.0], [0.5, 716.0], [0.6, 718.0], [0.7, 724.0], [0.8, 729.0], [0.9, 734.0], [1.0, 739.0], [1.1, 744.0], [1.2, 745.0], [1.3, 746.0], [1.4, 751.0], [1.5, 752.0], [1.6, 758.0], [1.7, 760.0], [1.8, 762.0], [1.9, 764.0], [2.0, 766.0], [2.1, 767.0], [2.2, 769.0], [2.3, 772.0], [2.4, 775.0], [2.5, 777.0], [2.6, 780.0], [2.7, 782.0], [2.8, 785.0], [2.9, 786.0], [3.0, 788.0], [3.1, 790.0], [3.2, 791.0], [3.3, 792.0], [3.4, 794.0], [3.5, 796.0], [3.6, 797.0], [3.7, 798.0], [3.8, 800.0], [3.9, 803.0], [4.0, 804.0], [4.1, 805.0], [4.2, 805.0], [4.3, 807.0], [4.4, 809.0], [4.5, 810.0], [4.6, 812.0], [4.7, 813.0], [4.8, 814.0], [4.9, 816.0], [5.0, 818.0], [5.1, 820.0], [5.2, 822.0], [5.3, 823.0], [5.4, 826.0], [5.5, 827.0], [5.6, 828.0], [5.7, 829.0], [5.8, 830.0], [5.9, 832.0], [6.0, 833.0], [6.1, 834.0], [6.2, 834.0], [6.3, 835.0], [6.4, 837.0], [6.5, 839.0], [6.6, 841.0], [6.7, 842.0], [6.8, 844.0], [6.9, 846.0], [7.0, 847.0], [7.1, 849.0], [7.2, 850.0], [7.3, 853.0], [7.4, 855.0], [7.5, 856.0], [7.6, 858.0], [7.7, 860.0], [7.8, 861.0], [7.9, 863.0], [8.0, 865.0], [8.1, 866.0], [8.2, 867.0], [8.3, 868.0], [8.4, 871.0], [8.5, 874.0], [8.6, 875.0], [8.7, 878.0], [8.8, 879.0], [8.9, 880.0], [9.0, 882.0], [9.1, 883.0], [9.2, 885.0], [9.3, 886.0], [9.4, 888.0], [9.5, 890.0], [9.6, 891.0], [9.7, 894.0], [9.8, 895.0], [9.9, 898.0], [10.0, 902.0], [10.1, 905.0], [10.2, 909.0], [10.3, 910.0], [10.4, 913.0], [10.5, 915.0], [10.6, 917.0], [10.7, 920.0], [10.8, 926.0], [10.9, 930.0], [11.0, 932.0], [11.1, 936.0], [11.2, 939.0], [11.3, 941.0], [11.4, 945.0], [11.5, 949.0], [11.6, 952.0], [11.7, 958.0], [11.8, 962.0], [11.9, 963.0], [12.0, 968.0], [12.1, 972.0], [12.2, 974.0], [12.3, 976.0], [12.4, 982.0], [12.5, 986.0], [12.6, 994.0], [12.7, 997.0], [12.8, 1002.0], [12.9, 1004.0], [13.0, 1010.0], [13.1, 1018.0], [13.2, 1023.0], [13.3, 1026.0], [13.4, 1026.0], [13.5, 1029.0], [13.6, 1032.0], [13.7, 1036.0], [13.8, 1040.0], [13.9, 1043.0], [14.0, 1046.0], [14.1, 1050.0], [14.2, 1054.0], [14.3, 1059.0], [14.4, 1061.0], [14.5, 1062.0], [14.6, 1064.0], [14.7, 1066.0], [14.8, 1072.0], [14.9, 1076.0], [15.0, 1077.0], [15.1, 1079.0], [15.2, 1081.0], [15.3, 1085.0], [15.4, 1088.0], [15.5, 1089.0], [15.6, 1092.0], [15.7, 1094.0], [15.8, 1096.0], [15.9, 1099.0], [16.0, 1102.0], [16.1, 1105.0], [16.2, 1106.0], [16.3, 1108.0], [16.4, 1110.0], [16.5, 1113.0], [16.6, 1116.0], [16.7, 1121.0], [16.8, 1124.0], [16.9, 1125.0], [17.0, 1129.0], [17.1, 1134.0], [17.2, 1135.0], [17.3, 1138.0], [17.4, 1140.0], [17.5, 1142.0], [17.6, 1145.0], [17.7, 1146.0], [17.8, 1149.0], [17.9, 1151.0], [18.0, 1154.0], [18.1, 1155.0], [18.2, 1156.0], [18.3, 1158.0], [18.4, 1159.0], [18.5, 1161.0], [18.6, 1163.0], [18.7, 1164.0], [18.8, 1168.0], [18.9, 1172.0], [19.0, 1173.0], [19.1, 1175.0], [19.2, 1176.0], [19.3, 1179.0], [19.4, 1182.0], [19.5, 1185.0], [19.6, 1189.0], [19.7, 1190.0], [19.8, 1191.0], [19.9, 1193.0], [20.0, 1196.0], [20.1, 1197.0], [20.2, 1199.0], [20.3, 1201.0], [20.4, 1202.0], [20.5, 1204.0], [20.6, 1205.0], [20.7, 1209.0], [20.8, 1212.0], [20.9, 1213.0], [21.0, 1214.0], [21.1, 1217.0], [21.2, 1219.0], [21.3, 1220.0], [21.4, 1221.0], [21.5, 1222.0], [21.6, 1225.0], [21.7, 1228.0], [21.8, 1229.0], [21.9, 1231.0], [22.0, 1234.0], [22.1, 1235.0], [22.2, 1237.0], [22.3, 1238.0], [22.4, 1242.0], [22.5, 1244.0], [22.6, 1246.0], [22.7, 1248.0], [22.8, 1252.0], [22.9, 1253.0], [23.0, 1256.0], [23.1, 1258.0], [23.2, 1260.0], [23.3, 1263.0], [23.4, 1266.0], [23.5, 1271.0], [23.6, 1275.0], [23.7, 1277.0], [23.8, 1279.0], [23.9, 1280.0], [24.0, 1282.0], [24.1, 1284.0], [24.2, 1288.0], [24.3, 1290.0], [24.4, 1291.0], [24.5, 1293.0], [24.6, 1294.0], [24.7, 1298.0], [24.8, 1299.0], [24.9, 1300.0], [25.0, 1301.0], [25.1, 1303.0], [25.2, 1305.0], [25.3, 1308.0], [25.4, 1311.0], [25.5, 1313.0], [25.6, 1314.0], [25.7, 1317.0], [25.8, 1319.0], [25.9, 1320.0], [26.0, 1322.0], [26.1, 1326.0], [26.2, 1328.0], [26.3, 1331.0], [26.4, 1334.0], [26.5, 1337.0], [26.6, 1340.0], [26.7, 1341.0], [26.8, 1344.0], [26.9, 1347.0], [27.0, 1349.0], [27.1, 1352.0], [27.2, 1354.0], [27.3, 1357.0], [27.4, 1360.0], [27.5, 1361.0], [27.6, 1363.0], [27.7, 1364.0], [27.8, 1367.0], [27.9, 1368.0], [28.0, 1371.0], [28.1, 1374.0], [28.2, 1375.0], [28.3, 1377.0], [28.4, 1379.0], [28.5, 1380.0], [28.6, 1382.0], [28.7, 1384.0], [28.8, 1388.0], [28.9, 1390.0], [29.0, 1393.0], [29.1, 1396.0], [29.2, 1397.0], [29.3, 1400.0], [29.4, 1402.0], [29.5, 1405.0], [29.6, 1409.0], [29.7, 1412.0], [29.8, 1414.0], [29.9, 1418.0], [30.0, 1421.0], [30.1, 1424.0], [30.2, 1428.0], [30.3, 1432.0], [30.4, 1435.0], [30.5, 1438.0], [30.6, 1442.0], [30.7, 1444.0], [30.8, 1450.0], [30.9, 1452.0], [31.0, 1454.0], [31.1, 1456.0], [31.2, 1458.0], [31.3, 1459.0], [31.4, 1465.0], [31.5, 1469.0], [31.6, 1470.0], [31.7, 1472.0], [31.8, 1474.0], [31.9, 1475.0], [32.0, 1478.0], [32.1, 1480.0], [32.2, 1483.0], [32.3, 1485.0], [32.4, 1488.0], [32.5, 1490.0], [32.6, 1492.0], [32.7, 1497.0], [32.8, 1500.0], [32.9, 1502.0], [33.0, 1506.0], [33.1, 1509.0], [33.2, 1514.0], [33.3, 1517.0], [33.4, 1519.0], [33.5, 1521.0], [33.6, 1525.0], [33.7, 1527.0], [33.8, 1530.0], [33.9, 1533.0], [34.0, 1536.0], [34.1, 1539.0], [34.2, 1541.0], [34.3, 1541.0], [34.4, 1545.0], [34.5, 1546.0], [34.6, 1550.0], [34.7, 1553.0], [34.8, 1554.0], [34.9, 1555.0], [35.0, 1557.0], [35.1, 1559.0], [35.2, 1559.0], [35.3, 1562.0], [35.4, 1563.0], [35.5, 1565.0], [35.6, 1567.0], [35.7, 1570.0], [35.8, 1571.0], [35.9, 1573.0], [36.0, 1576.0], [36.1, 1577.0], [36.2, 1580.0], [36.3, 1584.0], [36.4, 1586.0], [36.5, 1588.0], [36.6, 1591.0], [36.7, 1594.0], [36.8, 1594.0], [36.9, 1596.0], [37.0, 1598.0], [37.1, 1600.0], [37.2, 1602.0], [37.3, 1604.0], [37.4, 1606.0], [37.5, 1608.0], [37.6, 1610.0], [37.7, 1612.0], [37.8, 1613.0], [37.9, 1615.0], [38.0, 1616.0], [38.1, 1618.0], [38.2, 1620.0], [38.3, 1624.0], [38.4, 1625.0], [38.5, 1626.0], [38.6, 1627.0], [38.7, 1629.0], [38.8, 1632.0], [38.9, 1634.0], [39.0, 1637.0], [39.1, 1638.0], [39.2, 1641.0], [39.3, 1643.0], [39.4, 1644.0], [39.5, 1645.0], [39.6, 1647.0], [39.7, 1648.0], [39.8, 1652.0], [39.9, 1655.0], [40.0, 1657.0], [40.1, 1659.0], [40.2, 1662.0], [40.3, 1666.0], [40.4, 1667.0], [40.5, 1669.0], [40.6, 1672.0], [40.7, 1673.0], [40.8, 1674.0], [40.9, 1675.0], [41.0, 1677.0], [41.1, 1680.0], [41.2, 1682.0], [41.3, 1683.0], [41.4, 1685.0], [41.5, 1687.0], [41.6, 1687.0], [41.7, 1689.0], [41.8, 1690.0], [41.9, 1692.0], [42.0, 1693.0], [42.1, 1693.0], [42.2, 1697.0], [42.3, 1699.0], [42.4, 1701.0], [42.5, 1703.0], [42.6, 1705.0], [42.7, 1706.0], [42.8, 1708.0], [42.9, 1711.0], [43.0, 1712.0], [43.1, 1714.0], [43.2, 1716.0], [43.3, 1718.0], [43.4, 1721.0], [43.5, 1722.0], [43.6, 1723.0], [43.7, 1726.0], [43.8, 1727.0], [43.9, 1730.0], [44.0, 1732.0], [44.1, 1733.0], [44.2, 1734.0], [44.3, 1736.0], [44.4, 1737.0], [44.5, 1739.0], [44.6, 1740.0], [44.7, 1741.0], [44.8, 1743.0], [44.9, 1746.0], [45.0, 1748.0], [45.1, 1750.0], [45.2, 1752.0], [45.3, 1753.0], [45.4, 1755.0], [45.5, 1757.0], [45.6, 1762.0], [45.7, 1763.0], [45.8, 1767.0], [45.9, 1768.0], [46.0, 1768.0], [46.1, 1771.0], [46.2, 1774.0], [46.3, 1775.0], [46.4, 1776.0], [46.5, 1778.0], [46.6, 1782.0], [46.7, 1783.0], [46.8, 1784.0], [46.9, 1786.0], [47.0, 1787.0], [47.1, 1788.0], [47.2, 1789.0], [47.3, 1792.0], [47.4, 1793.0], [47.5, 1795.0], [47.6, 1796.0], [47.7, 1796.0], [47.8, 1798.0], [47.9, 1800.0], [48.0, 1801.0], [48.1, 1803.0], [48.2, 1804.0], [48.3, 1806.0], [48.4, 1808.0], [48.5, 1809.0], [48.6, 1812.0], [48.7, 1816.0], [48.8, 1818.0], [48.9, 1820.0], [49.0, 1821.0], [49.1, 1823.0], [49.2, 1825.0], [49.3, 1827.0], [49.4, 1828.0], [49.5, 1830.0], [49.6, 1831.0], [49.7, 1833.0], [49.8, 1835.0], [49.9, 1838.0], [50.0, 1839.0], [50.1, 1841.0], [50.2, 1842.0], [50.3, 1843.0], [50.4, 1844.0], [50.5, 1846.0], [50.6, 1848.0], [50.7, 1849.0], [50.8, 1852.0], [50.9, 1854.0], [51.0, 1856.0], [51.1, 1857.0], [51.2, 1860.0], [51.3, 1860.0], [51.4, 1861.0], [51.5, 1862.0], [51.6, 1863.0], [51.7, 1865.0], [51.8, 1867.0], [51.9, 1869.0], [52.0, 1870.0], [52.1, 1871.0], [52.2, 1874.0], [52.3, 1876.0], [52.4, 1879.0], [52.5, 1880.0], [52.6, 1882.0], [52.7, 1885.0], [52.8, 1886.0], [52.9, 1888.0], [53.0, 1889.0], [53.1, 1889.0], [53.2, 1891.0], [53.3, 1893.0], [53.4, 1895.0], [53.5, 1897.0], [53.6, 1899.0], [53.7, 1900.0], [53.8, 1902.0], [53.9, 1903.0], [54.0, 1905.0], [54.1, 1906.0], [54.2, 1908.0], [54.3, 1911.0], [54.4, 1913.0], [54.5, 1914.0], [54.6, 1916.0], [54.7, 1918.0], [54.8, 1920.0], [54.9, 1922.0], [55.0, 1923.0], [55.1, 1925.0], [55.2, 1927.0], [55.3, 1931.0], [55.4, 1932.0], [55.5, 1932.0], [55.6, 1934.0], [55.7, 1935.0], [55.8, 1939.0], [55.9, 1939.0], [56.0, 1941.0], [56.1, 1943.0], [56.2, 1945.0], [56.3, 1947.0], [56.4, 1948.0], [56.5, 1949.0], [56.6, 1952.0], [56.7, 1952.0], [56.8, 1954.0], [56.9, 1955.0], [57.0, 1958.0], [57.1, 1959.0], [57.2, 1960.0], [57.3, 1962.0], [57.4, 1966.0], [57.5, 1967.0], [57.6, 1969.0], [57.7, 1971.0], [57.8, 1973.0], [57.9, 1976.0], [58.0, 1978.0], [58.1, 1980.0], [58.2, 1982.0], [58.3, 1984.0], [58.4, 1986.0], [58.5, 1987.0], [58.6, 1989.0], [58.7, 1992.0], [58.8, 1993.0], [58.9, 1995.0], [59.0, 1997.0], [59.1, 2000.0], [59.2, 2003.0], [59.3, 2005.0], [59.4, 2005.0], [59.5, 2007.0], [59.6, 2010.0], [59.7, 2013.0], [59.8, 2015.0], [59.9, 2016.0], [60.0, 2020.0], [60.1, 2021.0], [60.2, 2023.0], [60.3, 2026.0], [60.4, 2028.0], [60.5, 2030.0], [60.6, 2032.0], [60.7, 2035.0], [60.8, 2039.0], [60.9, 2042.0], [61.0, 2046.0], [61.1, 2047.0], [61.2, 2049.0], [61.3, 2052.0], [61.4, 2054.0], [61.5, 2055.0], [61.6, 2056.0], [61.7, 2059.0], [61.8, 2062.0], [61.9, 2065.0], [62.0, 2067.0], [62.1, 2068.0], [62.2, 2072.0], [62.3, 2074.0], [62.4, 2077.0], [62.5, 2080.0], [62.6, 2082.0], [62.7, 2084.0], [62.8, 2087.0], [62.9, 2089.0], [63.0, 2093.0], [63.1, 2094.0], [63.2, 2096.0], [63.3, 2098.0], [63.4, 2099.0], [63.5, 2101.0], [63.6, 2102.0], [63.7, 2105.0], [63.8, 2107.0], [63.9, 2110.0], [64.0, 2113.0], [64.1, 2116.0], [64.2, 2119.0], [64.3, 2120.0], [64.4, 2127.0], [64.5, 2128.0], [64.6, 2132.0], [64.7, 2135.0], [64.8, 2136.0], [64.9, 2137.0], [65.0, 2142.0], [65.1, 2144.0], [65.2, 2146.0], [65.3, 2147.0], [65.4, 2149.0], [65.5, 2154.0], [65.6, 2155.0], [65.7, 2156.0], [65.8, 2158.0], [65.9, 2159.0], [66.0, 2161.0], [66.1, 2164.0], [66.2, 2166.0], [66.3, 2169.0], [66.4, 2171.0], [66.5, 2173.0], [66.6, 2175.0], [66.7, 2177.0], [66.8, 2178.0], [66.9, 2181.0], [67.0, 2183.0], [67.1, 2187.0], [67.2, 2190.0], [67.3, 2192.0], [67.4, 2193.0], [67.5, 2196.0], [67.6, 2201.0], [67.7, 2204.0], [67.8, 2205.0], [67.9, 2207.0], [68.0, 2210.0], [68.1, 2214.0], [68.2, 2217.0], [68.3, 2219.0], [68.4, 2223.0], [68.5, 2224.0], [68.6, 2228.0], [68.7, 2230.0], [68.8, 2233.0], [68.9, 2236.0], [69.0, 2238.0], [69.1, 2240.0], [69.2, 2245.0], [69.3, 2246.0], [69.4, 2249.0], [69.5, 2253.0], [69.6, 2254.0], [69.7, 2256.0], [69.8, 2258.0], [69.9, 2261.0], [70.0, 2265.0], [70.1, 2268.0], [70.2, 2272.0], [70.3, 2273.0], [70.4, 2276.0], [70.5, 2277.0], [70.6, 2279.0], [70.7, 2283.0], [70.8, 2285.0], [70.9, 2290.0], [71.0, 2293.0], [71.1, 2294.0], [71.2, 2297.0], [71.3, 2300.0], [71.4, 2302.0], [71.5, 2304.0], [71.6, 2309.0], [71.7, 2312.0], [71.8, 2314.0], [71.9, 2316.0], [72.0, 2318.0], [72.1, 2322.0], [72.2, 2326.0], [72.3, 2329.0], [72.4, 2334.0], [72.5, 2337.0], [72.6, 2340.0], [72.7, 2343.0], [72.8, 2346.0], [72.9, 2349.0], [73.0, 2352.0], [73.1, 2360.0], [73.2, 2363.0], [73.3, 2367.0], [73.4, 2370.0], [73.5, 2373.0], [73.6, 2375.0], [73.7, 2377.0], [73.8, 2380.0], [73.9, 2384.0], [74.0, 2386.0], [74.1, 2388.0], [74.2, 2391.0], [74.3, 2395.0], [74.4, 2403.0], [74.5, 2406.0], [74.6, 2409.0], [74.7, 2412.0], [74.8, 2414.0], [74.9, 2421.0], [75.0, 2426.0], [75.1, 2431.0], [75.2, 2436.0], [75.3, 2441.0], [75.4, 2448.0], [75.5, 2454.0], [75.6, 2457.0], [75.7, 2465.0], [75.8, 2468.0], [75.9, 2475.0], [76.0, 2477.0], [76.1, 2480.0], [76.2, 2485.0], [76.3, 2488.0], [76.4, 2496.0], [76.5, 2499.0], [76.6, 2500.0], [76.7, 2502.0], [76.8, 2505.0], [76.9, 2512.0], [77.0, 2516.0], [77.1, 2522.0], [77.2, 2527.0], [77.3, 2532.0], [77.4, 2537.0], [77.5, 2539.0], [77.6, 2542.0], [77.7, 2544.0], [77.8, 2549.0], [77.9, 2553.0], [78.0, 2554.0], [78.1, 2559.0], [78.2, 2561.0], [78.3, 2565.0], [78.4, 2570.0], [78.5, 2572.0], [78.6, 2575.0], [78.7, 2581.0], [78.8, 2582.0], [78.9, 2586.0], [79.0, 2591.0], [79.1, 2593.0], [79.2, 2595.0], [79.3, 2599.0], [79.4, 2604.0], [79.5, 2608.0], [79.6, 2615.0], [79.7, 2616.0], [79.8, 2620.0], [79.9, 2622.0], [80.0, 2625.0], [80.1, 2627.0], [80.2, 2630.0], [80.3, 2633.0], [80.4, 2635.0], [80.5, 2639.0], [80.6, 2641.0], [80.7, 2643.0], [80.8, 2646.0], [80.9, 2647.0], [81.0, 2649.0], [81.1, 2649.0], [81.2, 2651.0], [81.3, 2655.0], [81.4, 2658.0], [81.5, 2660.0], [81.6, 2662.0], [81.7, 2666.0], [81.8, 2668.0], [81.9, 2671.0], [82.0, 2674.0], [82.1, 2677.0], [82.2, 2679.0], [82.3, 2683.0], [82.4, 2686.0], [82.5, 2688.0], [82.6, 2691.0], [82.7, 2693.0], [82.8, 2697.0], [82.9, 2701.0], [83.0, 2705.0], [83.1, 2707.0], [83.2, 2710.0], [83.3, 2713.0], [83.4, 2718.0], [83.5, 2721.0], [83.6, 2723.0], [83.7, 2724.0], [83.8, 2727.0], [83.9, 2731.0], [84.0, 2733.0], [84.1, 2737.0], [84.2, 2742.0], [84.3, 2749.0], [84.4, 2751.0], [84.5, 2752.0], [84.6, 2755.0], [84.7, 2761.0], [84.8, 2764.0], [84.9, 2769.0], [85.0, 2772.0], [85.1, 2775.0], [85.2, 2778.0], [85.3, 2780.0], [85.4, 2785.0], [85.5, 2790.0], [85.6, 2797.0], [85.7, 2799.0], [85.8, 2803.0], [85.9, 2811.0], [86.0, 2818.0], [86.1, 2821.0], [86.2, 2827.0], [86.3, 2834.0], [86.4, 2837.0], [86.5, 2841.0], [86.6, 2852.0], [86.7, 2857.0], [86.8, 2864.0], [86.9, 2873.0], [87.0, 2882.0], [87.1, 2888.0], [87.2, 2890.0], [87.3, 2895.0], [87.4, 2900.0], [87.5, 2906.0], [87.6, 2918.0], [87.7, 2924.0], [87.8, 2928.0], [87.9, 2933.0], [88.0, 2942.0], [88.1, 2948.0], [88.2, 2952.0], [88.3, 2959.0], [88.4, 2962.0], [88.5, 2975.0], [88.6, 2982.0], [88.7, 2987.0], [88.8, 2995.0], [88.9, 2999.0], [89.0, 3003.0], [89.1, 3006.0], [89.2, 3017.0], [89.3, 3024.0], [89.4, 3029.0], [89.5, 3042.0], [89.6, 3051.0], [89.7, 3059.0], [89.8, 3068.0], [89.9, 3075.0], [90.0, 3083.0], [90.1, 3092.0], [90.2, 3102.0], [90.3, 3106.0], [90.4, 3110.0], [90.5, 3124.0], [90.6, 3133.0], [90.7, 3143.0], [90.8, 3154.0], [90.9, 3173.0], [91.0, 3181.0], [91.1, 3195.0], [91.2, 3211.0], [91.3, 3219.0], [91.4, 3223.0], [91.5, 3228.0], [91.6, 3243.0], [91.7, 3249.0], [91.8, 3258.0], [91.9, 3261.0], [92.0, 3273.0], [92.1, 3285.0], [92.2, 3296.0], [92.3, 3301.0], [92.4, 3304.0], [92.5, 3317.0], [92.6, 3325.0], [92.7, 3334.0], [92.8, 3343.0], [92.9, 3347.0], [93.0, 3351.0], [93.1, 3358.0], [93.2, 3369.0], [93.3, 3374.0], [93.4, 3383.0], [93.5, 3389.0], [93.6, 3396.0], [93.7, 3406.0], [93.8, 3413.0], [93.9, 3421.0], [94.0, 3436.0], [94.1, 3441.0], [94.2, 3459.0], [94.3, 3465.0], [94.4, 3484.0], [94.5, 3500.0], [94.6, 3517.0], [94.7, 3528.0], [94.8, 3543.0], [94.9, 3556.0], [95.0, 3583.0], [95.1, 3589.0], [95.2, 3608.0], [95.3, 3631.0], [95.4, 3638.0], [95.5, 3643.0], [95.6, 3660.0], [95.7, 3678.0], [95.8, 3687.0], [95.9, 3703.0], [96.0, 3716.0], [96.1, 3734.0], [96.2, 3755.0], [96.3, 3790.0], [96.4, 3812.0], [96.5, 3825.0], [96.6, 3846.0], [96.7, 3866.0], [96.8, 3883.0], [96.9, 3908.0], [97.0, 3940.0], [97.1, 3957.0], [97.2, 3988.0], [97.3, 4026.0], [97.4, 4060.0], [97.5, 4082.0], [97.6, 4143.0], [97.7, 4153.0], [97.8, 4249.0], [97.9, 4274.0], [98.0, 4302.0], [98.1, 4351.0], [98.2, 4379.0], [98.3, 4435.0], [98.4, 4527.0], [98.5, 4607.0], [98.6, 4709.0], [98.7, 4783.0], [98.8, 4878.0], [98.9, 4963.0], [99.0, 5092.0], [99.1, 5286.0], [99.2, 5365.0], [99.3, 5649.0], [99.4, 5889.0], [99.5, 6175.0], [99.6, 6341.0], [99.7, 6650.0], [99.8, 7092.0], [99.9, 7400.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 600.0, "maxY": 318.0, "series": [{"data": [[600.0, 8.0], [700.0, 189.0], [800.0, 318.0], [900.0, 147.0], [1000.0, 165.0], [1100.0, 222.0], [1200.0, 242.0], [1300.0, 228.0], [1400.0, 183.0], [1500.0, 222.0], [1600.0, 274.0], [1700.0, 287.0], [1800.0, 300.0], [1900.0, 282.0], [2000.0, 226.0], [2100.0, 215.0], [2200.0, 193.0], [2300.0, 159.0], [2400.0, 113.0], [2500.0, 144.0], [2600.0, 186.0], [2800.0, 86.0], [2700.0, 146.0], [2900.0, 80.0], [3000.0, 66.0], [3100.0, 51.0], [3300.0, 70.0], [3200.0, 59.0], [3400.0, 44.0], [3500.0, 34.0], [3700.0, 23.0], [3600.0, 38.0], [3800.0, 29.0], [3900.0, 17.0], [4000.0, 17.0], [4100.0, 11.0], [4200.0, 13.0], [4300.0, 13.0], [4400.0, 7.0], [4500.0, 5.0], [4600.0, 6.0], [4800.0, 8.0], [4700.0, 6.0], [4900.0, 4.0], [5000.0, 5.0], [5100.0, 1.0], [5200.0, 3.0], [5300.0, 6.0], [5500.0, 3.0], [5600.0, 1.0], [5800.0, 4.0], [5700.0, 1.0], [6000.0, 3.0], [5900.0, 2.0], [6100.0, 1.0], [6300.0, 5.0], [6200.0, 1.0], [6600.0, 2.0], [6400.0, 3.0], [6800.0, 2.0], [7100.0, 2.0], [7000.0, 2.0], [7400.0, 1.0], [7300.0, 2.0], [7800.0, 1.0], [7900.0, 1.0], [8200.0, 1.0], [10000.0, 1.0], [9800.0, 1.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 10000.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 3485.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1705.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 3485.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 1.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 11.365384615384617, "minX": 1.60232256E12, "maxY": 12.0, "series": [{"data": [[1.60232328E12, 12.0], [1.60232298E12, 12.0], [1.60232268E12, 12.0], [1.60232334E12, 12.0], [1.60232256E12, 12.0], [1.60232322E12, 12.0], [1.60232262E12, 12.0], [1.60232292E12, 12.0], [1.6023228E12, 12.0], [1.60232316E12, 12.0], [1.60232286E12, 12.0], [1.60232304E12, 12.0], [1.60232274E12, 12.0], [1.6023234E12, 11.365384615384617], [1.6023231E12, 12.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6023234E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 1226.0, "minX": 1.0, "maxY": 4576.0, "series": [{"data": [[8.0, 1276.0], [4.0, 1271.0], [2.0, 1847.0], [1.0, 4576.0], [9.0, 2819.0], [10.0, 1226.0], [5.0, 2668.0], [11.0, 3413.0], [12.0, 1968.7142857142828], [6.0, 1235.0], [3.0, 2360.0], [7.0, 2148.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[11.987285686765556, 1969.3274898863385]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 12.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 788.3666666666667, "minX": 1.60232256E12, "maxY": 2177384.183333333, "series": [{"data": [[1.60232328E12, 1600002.8], [1.60232298E12, 1786103.1666666667], [1.60232268E12, 1062827.4833333334], [1.60232334E12, 1722390.0666666667], [1.60232256E12, 1585299.7], [1.60232322E12, 1752748.15], [1.60232262E12, 1630064.55], [1.60232292E12, 1602596.0666666667], [1.6023228E12, 2012710.1833333333], [1.60232316E12, 2038412.4166666667], [1.60232286E12, 1804311.8], [1.60232304E12, 1577690.15], [1.60232274E12, 2177384.183333333], [1.6023234E12, 463168.05], [1.6023231E12, 1157088.7166666666]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60232328E12, 2994.4666666666667], [1.60232298E12, 2185.9666666666667], [1.60232268E12, 2892.483333333333], [1.60232334E12, 2662.7166666666667], [1.60232256E12, 1908.0666666666666], [1.60232322E12, 3239.866666666667], [1.60232262E12, 2740.5833333333335], [1.60232292E12, 2717.1833333333334], [1.6023228E12, 2906.866666666667], [1.60232316E12, 2493.0333333333333], [1.60232286E12, 2827.4], [1.60232304E12, 2697.0666666666666], [1.60232274E12, 2709.4666666666667], [1.6023234E12, 788.3666666666667], [1.6023231E12, 2820.516666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6023234E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 1680.448598130841, "minX": 1.60232256E12, "maxY": 2453.4848484848485, "series": [{"data": [[1.60232328E12, 1847.5913705583744], [1.60232298E12, 2453.4848484848485], [1.60232268E12, 1786.7174999999997], [1.60232334E12, 2016.1444759206802], [1.60232256E12, 2366.570342205323], [1.60232322E12, 1680.448598130841], [1.60232262E12, 1893.575197889183], [1.60232292E12, 1976.5994475138134], [1.6023228E12, 1857.5483028720632], [1.60232316E12, 2116.203539823009], [1.60232286E12, 1926.7903225806451], [1.60232304E12, 1921.877659574469], [1.60232274E12, 2054.5014005602243], [1.6023234E12, 2392.9615384615386], [1.6023231E12, 1860.3437500000002]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6023234E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 1679.0350467289722, "minX": 1.60232256E12, "maxY": 2451.0168350168356, "series": [{"data": [[1.60232328E12, 1846.261421319798], [1.60232298E12, 2451.0168350168356], [1.60232268E12, 1785.6174999999996], [1.60232334E12, 2014.4617563739384], [1.60232256E12, 2364.0380228136873], [1.60232322E12, 1679.0350467289722], [1.60232262E12, 1891.7071240105533], [1.60232292E12, 1974.8370165745855], [1.6023228E12, 1855.4934725848557], [1.60232316E12, 2114.224188790559], [1.60232286E12, 1924.7849462365612], [1.60232304E12, 1920.2313829787226], [1.60232274E12, 2051.9887955182066], [1.6023234E12, 2391.605769230768], [1.6023231E12, 1859.2838541666658]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6023234E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.60232256E12, "maxY": 0.6197718631178706, "series": [{"data": [[1.60232328E12, 0.03299492385786799], [1.60232298E12, 0.07070707070707072], [1.60232268E12, 0.035000000000000045], [1.60232334E12, 0.03966005665722383], [1.60232256E12, 0.6197718631178706], [1.60232322E12, 0.021028037383177583], [1.60232262E12, 0.031662269129287615], [1.60232292E12, 0.03591160220994474], [1.6023228E12, 0.028720626631853815], [1.60232316E12, 0.032448377581120964], [1.60232286E12, 0.02688172043010754], [1.60232304E12, 0.03457446808510637], [1.60232274E12, 0.03921568627450984], [1.6023234E12, 0.0], [1.6023231E12, 0.03385416666666665]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6023234E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 607.0, "minX": 1.60232256E12, "maxY": 10075.0, "series": [{"data": [[1.60232328E12, 3970.0], [1.60232298E12, 10075.0], [1.60232268E12, 5302.0], [1.60232334E12, 5889.0], [1.60232256E12, 6883.0], [1.60232322E12, 3988.0], [1.60232262E12, 7400.0], [1.60232292E12, 7119.0], [1.6023228E12, 4573.0], [1.60232316E12, 4709.0], [1.60232286E12, 5353.0], [1.60232304E12, 7092.0], [1.60232274E12, 5591.0], [1.6023234E12, 4576.0], [1.6023231E12, 6650.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60232328E12, 766.1099998116493], [1.60232298E12, 795.6859983658791], [1.60232268E12, 739.0], [1.60232334E12, 715.3719998311997], [1.60232256E12, 814.751999874115], [1.60232322E12, 733.1659993863105], [1.60232262E12, 814.8399998188019], [1.60232292E12, 642.6019994807243], [1.6023228E12, 702.3679997253417], [1.60232316E12, 939.7199990272522], [1.60232286E12, 760.6119983148575], [1.60232304E12, 881.7859998202324], [1.60232274E12, 830.7759993171692], [1.6023234E12, 998.0], [1.6023231E12, 742.9299998164176]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60232328E12, 766.8210000753403], [1.60232298E12, 801.8546006536484], [1.60232268E12, 739.0], [1.60232334E12, 716.0092000675202], [1.60232256E12, 815.227200050354], [1.60232322E12, 734.2471000409126], [1.60232262E12, 815.5240000724792], [1.60232292E12, 644.5622002077102], [1.6023228E12, 703.4048001098632], [1.60232316E12, 943.3920003890992], [1.60232286E12, 766.973200674057], [1.60232304E12, 882.4646000719071], [1.60232274E12, 833.3536002731323], [1.6023234E12, 1005.1100018024445], [1.6023231E12, 743.6230000734329]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60232328E12, 766.5049999058247], [1.60232298E12, 799.1129991829396], [1.60232268E12, 739.0], [1.60232334E12, 715.7259999155998], [1.60232256E12, 815.0159999370575], [1.60232322E12, 734.0754999488593], [1.60232262E12, 815.2199999094009], [1.60232292E12, 643.6909997403621], [1.6023228E12, 702.9439998626709], [1.60232316E12, 941.7599995136261], [1.60232286E12, 764.1459991574287], [1.60232304E12, 882.1629999101162], [1.60232274E12, 832.2079996585846], [1.6023234E12, 998.0], [1.6023231E12, 743.3149999082088]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60232328E12, 760.0], [1.60232298E12, 751.0], [1.60232268E12, 715.0], [1.60232334E12, 686.0], [1.60232256E12, 811.0], [1.60232322E12, 701.0], [1.60232262E12, 797.0], [1.60232292E12, 607.0], [1.6023228E12, 663.0], [1.60232316E12, 860.0], [1.60232286E12, 745.0], [1.60232304E12, 822.0], [1.60232274E12, 815.0], [1.6023234E12, 998.0], [1.6023231E12, 724.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60232328E12, 1867.5], [1.60232298E12, 2188.0], [1.60232268E12, 1495.0], [1.60232334E12, 1922.0], [1.60232256E12, 2148.0], [1.60232322E12, 1565.0], [1.60232262E12, 1753.0], [1.60232292E12, 1844.5], [1.6023228E12, 1802.0], [1.60232316E12, 1955.0], [1.60232286E12, 1884.0], [1.60232304E12, 1771.0], [1.60232274E12, 1961.0], [1.6023234E12, 2290.0], [1.6023231E12, 1646.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6023234E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 758.0, "minX": 1.0, "maxY": 2943.5, "series": [{"data": [[8.0, 1687.5], [2.0, 2943.5], [9.0, 1465.0], [10.0, 1330.0], [11.0, 1136.0], [3.0, 2629.0], [12.0, 927.0], [13.0, 874.5], [14.0, 834.5], [15.0, 832.0], [1.0, 2875.0], [4.0, 2370.0], [16.0, 793.5], [17.0, 758.0], [5.0, 2102.5], [6.0, 1970.0], [7.0, 1871.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[4.0, 1832.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 17.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 758.0, "minX": 1.0, "maxY": 2941.5, "series": [{"data": [[8.0, 1687.5], [2.0, 2941.5], [9.0, 1465.0], [10.0, 1329.5], [11.0, 1136.0], [3.0, 2627.5], [12.0, 927.0], [13.0, 874.5], [14.0, 834.5], [15.0, 832.0], [1.0, 2871.0], [4.0, 2370.0], [16.0, 793.5], [17.0, 758.0], [5.0, 2102.0], [6.0, 1968.0], [7.0, 1870.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[4.0, 1832.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 17.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1.5333333333333334, "minX": 1.60232256E12, "maxY": 7.133333333333334, "series": [{"data": [[1.60232328E12, 6.566666666666666], [1.60232298E12, 4.95], [1.60232268E12, 6.683333333333334], [1.60232334E12, 5.883333333333334], [1.60232256E12, 4.583333333333333], [1.60232322E12, 7.133333333333334], [1.60232262E12, 6.3], [1.60232292E12, 6.033333333333333], [1.6023228E12, 6.383333333333334], [1.60232316E12, 5.65], [1.60232286E12, 6.2], [1.60232304E12, 6.266666666666667], [1.60232274E12, 5.95], [1.6023234E12, 1.5333333333333334], [1.6023231E12, 6.4]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6023234E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60232256E12, "maxY": 7.133333333333334, "series": [{"data": [[1.60232328E12, 6.566666666666666], [1.60232298E12, 4.95], [1.60232268E12, 6.666666666666667], [1.60232334E12, 5.883333333333334], [1.60232256E12, 4.383333333333334], [1.60232322E12, 7.133333333333334], [1.60232262E12, 6.316666666666666], [1.60232292E12, 6.033333333333333], [1.6023228E12, 6.383333333333334], [1.60232316E12, 5.65], [1.60232286E12, 6.183333333333334], [1.60232304E12, 6.266666666666667], [1.60232274E12, 5.95], [1.6023234E12, 1.7333333333333334], [1.6023231E12, 6.4]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.60232286E12, 0.016666666666666666]], "isOverall": false, "label": "400", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6023234E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60232256E12, "maxY": 7.133333333333334, "series": [{"data": [[1.60232328E12, 6.566666666666666], [1.60232298E12, 4.95], [1.60232268E12, 6.666666666666667], [1.60232334E12, 5.883333333333334], [1.60232256E12, 4.383333333333334], [1.60232322E12, 7.133333333333334], [1.60232262E12, 6.316666666666666], [1.60232292E12, 6.033333333333333], [1.6023228E12, 6.383333333333334], [1.60232316E12, 5.65], [1.60232286E12, 6.183333333333334], [1.60232304E12, 6.266666666666667], [1.60232274E12, 5.95], [1.6023234E12, 1.7333333333333334], [1.6023231E12, 6.4]], "isOverall": false, "label": "HTTP Request-success", "isController": false}, {"data": [[1.60232286E12, 0.016666666666666666]], "isOverall": false, "label": "HTTP Request-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6023234E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60232256E12, "maxY": 7.133333333333334, "series": [{"data": [[1.60232328E12, 6.566666666666666], [1.60232298E12, 4.95], [1.60232268E12, 6.666666666666667], [1.60232334E12, 5.883333333333334], [1.60232256E12, 4.383333333333334], [1.60232322E12, 7.133333333333334], [1.60232262E12, 6.316666666666666], [1.60232292E12, 6.033333333333333], [1.6023228E12, 6.383333333333334], [1.60232316E12, 5.65], [1.60232286E12, 6.183333333333334], [1.60232304E12, 6.266666666666667], [1.60232274E12, 5.95], [1.6023234E12, 1.7333333333333334], [1.6023231E12, 6.4]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.60232286E12, 0.016666666666666666]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6023234E12, "title": "Total Transactions Per Second"}},
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

