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
        data: {"result": {"minY": 535.0, "minX": 0.0, "maxY": 9279.0, "series": [{"data": [[0.0, 535.0], [0.1, 633.0], [0.2, 718.0], [0.3, 728.0], [0.4, 734.0], [0.5, 740.0], [0.6, 743.0], [0.7, 749.0], [0.8, 753.0], [0.9, 756.0], [1.0, 758.0], [1.1, 760.0], [1.2, 762.0], [1.3, 764.0], [1.4, 767.0], [1.5, 769.0], [1.6, 771.0], [1.7, 773.0], [1.8, 775.0], [1.9, 776.0], [2.0, 778.0], [2.1, 780.0], [2.2, 780.0], [2.3, 782.0], [2.4, 785.0], [2.5, 786.0], [2.6, 787.0], [2.7, 789.0], [2.8, 791.0], [2.9, 792.0], [3.0, 792.0], [3.1, 794.0], [3.2, 795.0], [3.3, 795.0], [3.4, 797.0], [3.5, 800.0], [3.6, 801.0], [3.7, 803.0], [3.8, 804.0], [3.9, 807.0], [4.0, 808.0], [4.1, 809.0], [4.2, 812.0], [4.3, 812.0], [4.4, 813.0], [4.5, 815.0], [4.6, 816.0], [4.7, 818.0], [4.8, 821.0], [4.9, 823.0], [5.0, 825.0], [5.1, 826.0], [5.2, 828.0], [5.3, 830.0], [5.4, 832.0], [5.5, 833.0], [5.6, 834.0], [5.7, 835.0], [5.8, 837.0], [5.9, 838.0], [6.0, 839.0], [6.1, 840.0], [6.2, 841.0], [6.3, 843.0], [6.4, 844.0], [6.5, 847.0], [6.6, 848.0], [6.7, 849.0], [6.8, 850.0], [6.9, 854.0], [7.0, 856.0], [7.1, 858.0], [7.2, 859.0], [7.3, 860.0], [7.4, 861.0], [7.5, 862.0], [7.6, 865.0], [7.7, 867.0], [7.8, 868.0], [7.9, 871.0], [8.0, 872.0], [8.1, 874.0], [8.2, 876.0], [8.3, 878.0], [8.4, 880.0], [8.5, 881.0], [8.6, 884.0], [8.7, 886.0], [8.8, 889.0], [8.9, 891.0], [9.0, 895.0], [9.1, 899.0], [9.2, 900.0], [9.3, 903.0], [9.4, 904.0], [9.5, 907.0], [9.6, 908.0], [9.7, 911.0], [9.8, 913.0], [9.9, 914.0], [10.0, 916.0], [10.1, 919.0], [10.2, 921.0], [10.3, 922.0], [10.4, 924.0], [10.5, 929.0], [10.6, 931.0], [10.7, 932.0], [10.8, 934.0], [10.9, 935.0], [11.0, 939.0], [11.1, 941.0], [11.2, 944.0], [11.3, 946.0], [11.4, 950.0], [11.5, 951.0], [11.6, 955.0], [11.7, 957.0], [11.8, 961.0], [11.9, 966.0], [12.0, 972.0], [12.1, 977.0], [12.2, 979.0], [12.3, 982.0], [12.4, 987.0], [12.5, 989.0], [12.6, 999.0], [12.7, 1001.0], [12.8, 1004.0], [12.9, 1009.0], [13.0, 1013.0], [13.1, 1016.0], [13.2, 1021.0], [13.3, 1025.0], [13.4, 1027.0], [13.5, 1031.0], [13.6, 1034.0], [13.7, 1038.0], [13.8, 1042.0], [13.9, 1048.0], [14.0, 1050.0], [14.1, 1054.0], [14.2, 1057.0], [14.3, 1059.0], [14.4, 1061.0], [14.5, 1062.0], [14.6, 1064.0], [14.7, 1069.0], [14.8, 1073.0], [14.9, 1075.0], [15.0, 1078.0], [15.1, 1081.0], [15.2, 1085.0], [15.3, 1089.0], [15.4, 1092.0], [15.5, 1095.0], [15.6, 1097.0], [15.7, 1101.0], [15.8, 1109.0], [15.9, 1111.0], [16.0, 1115.0], [16.1, 1117.0], [16.2, 1119.0], [16.3, 1122.0], [16.4, 1124.0], [16.5, 1125.0], [16.6, 1127.0], [16.7, 1130.0], [16.8, 1134.0], [16.9, 1137.0], [17.0, 1137.0], [17.1, 1140.0], [17.2, 1142.0], [17.3, 1144.0], [17.4, 1145.0], [17.5, 1146.0], [17.6, 1148.0], [17.7, 1152.0], [17.8, 1155.0], [17.9, 1159.0], [18.0, 1162.0], [18.1, 1167.0], [18.2, 1169.0], [18.3, 1172.0], [18.4, 1175.0], [18.5, 1176.0], [18.6, 1178.0], [18.7, 1179.0], [18.8, 1181.0], [18.9, 1184.0], [19.0, 1185.0], [19.1, 1189.0], [19.2, 1191.0], [19.3, 1193.0], [19.4, 1196.0], [19.5, 1197.0], [19.6, 1200.0], [19.7, 1205.0], [19.8, 1207.0], [19.9, 1210.0], [20.0, 1213.0], [20.1, 1214.0], [20.2, 1217.0], [20.3, 1219.0], [20.4, 1220.0], [20.5, 1223.0], [20.6, 1224.0], [20.7, 1228.0], [20.8, 1231.0], [20.9, 1236.0], [21.0, 1236.0], [21.1, 1237.0], [21.2, 1240.0], [21.3, 1241.0], [21.4, 1244.0], [21.5, 1247.0], [21.6, 1250.0], [21.7, 1252.0], [21.8, 1254.0], [21.9, 1256.0], [22.0, 1260.0], [22.1, 1261.0], [22.2, 1264.0], [22.3, 1266.0], [22.4, 1269.0], [22.5, 1271.0], [22.6, 1273.0], [22.7, 1276.0], [22.8, 1279.0], [22.9, 1281.0], [23.0, 1282.0], [23.1, 1286.0], [23.2, 1289.0], [23.3, 1291.0], [23.4, 1293.0], [23.5, 1296.0], [23.6, 1298.0], [23.7, 1300.0], [23.8, 1302.0], [23.9, 1305.0], [24.0, 1307.0], [24.1, 1310.0], [24.2, 1313.0], [24.3, 1315.0], [24.4, 1316.0], [24.5, 1319.0], [24.6, 1320.0], [24.7, 1323.0], [24.8, 1324.0], [24.9, 1326.0], [25.0, 1327.0], [25.1, 1330.0], [25.2, 1334.0], [25.3, 1337.0], [25.4, 1338.0], [25.5, 1341.0], [25.6, 1342.0], [25.7, 1345.0], [25.8, 1347.0], [25.9, 1350.0], [26.0, 1352.0], [26.1, 1354.0], [26.2, 1357.0], [26.3, 1359.0], [26.4, 1361.0], [26.5, 1363.0], [26.6, 1365.0], [26.7, 1368.0], [26.8, 1371.0], [26.9, 1372.0], [27.0, 1375.0], [27.1, 1377.0], [27.2, 1380.0], [27.3, 1384.0], [27.4, 1385.0], [27.5, 1388.0], [27.6, 1390.0], [27.7, 1391.0], [27.8, 1394.0], [27.9, 1397.0], [28.0, 1400.0], [28.1, 1401.0], [28.2, 1404.0], [28.3, 1406.0], [28.4, 1409.0], [28.5, 1411.0], [28.6, 1413.0], [28.7, 1415.0], [28.8, 1419.0], [28.9, 1419.0], [29.0, 1421.0], [29.1, 1422.0], [29.2, 1424.0], [29.3, 1427.0], [29.4, 1429.0], [29.5, 1431.0], [29.6, 1433.0], [29.7, 1436.0], [29.8, 1438.0], [29.9, 1441.0], [30.0, 1445.0], [30.1, 1446.0], [30.2, 1448.0], [30.3, 1449.0], [30.4, 1455.0], [30.5, 1458.0], [30.6, 1460.0], [30.7, 1461.0], [30.8, 1464.0], [30.9, 1467.0], [31.0, 1471.0], [31.1, 1476.0], [31.2, 1479.0], [31.3, 1482.0], [31.4, 1484.0], [31.5, 1487.0], [31.6, 1489.0], [31.7, 1494.0], [31.8, 1496.0], [31.9, 1499.0], [32.0, 1501.0], [32.1, 1504.0], [32.2, 1506.0], [32.3, 1508.0], [32.4, 1511.0], [32.5, 1516.0], [32.6, 1518.0], [32.7, 1520.0], [32.8, 1523.0], [32.9, 1526.0], [33.0, 1529.0], [33.1, 1531.0], [33.2, 1532.0], [33.3, 1534.0], [33.4, 1537.0], [33.5, 1541.0], [33.6, 1544.0], [33.7, 1547.0], [33.8, 1549.0], [33.9, 1551.0], [34.0, 1554.0], [34.1, 1556.0], [34.2, 1558.0], [34.3, 1559.0], [34.4, 1560.0], [34.5, 1562.0], [34.6, 1565.0], [34.7, 1568.0], [34.8, 1570.0], [34.9, 1571.0], [35.0, 1573.0], [35.1, 1577.0], [35.2, 1580.0], [35.3, 1581.0], [35.4, 1583.0], [35.5, 1584.0], [35.6, 1587.0], [35.7, 1588.0], [35.8, 1591.0], [35.9, 1593.0], [36.0, 1596.0], [36.1, 1599.0], [36.2, 1601.0], [36.3, 1603.0], [36.4, 1606.0], [36.5, 1609.0], [36.6, 1611.0], [36.7, 1613.0], [36.8, 1615.0], [36.9, 1616.0], [37.0, 1618.0], [37.1, 1621.0], [37.2, 1623.0], [37.3, 1627.0], [37.4, 1629.0], [37.5, 1631.0], [37.6, 1632.0], [37.7, 1634.0], [37.8, 1636.0], [37.9, 1641.0], [38.0, 1642.0], [38.1, 1643.0], [38.2, 1645.0], [38.3, 1648.0], [38.4, 1649.0], [38.5, 1651.0], [38.6, 1653.0], [38.7, 1654.0], [38.8, 1655.0], [38.9, 1658.0], [39.0, 1663.0], [39.1, 1665.0], [39.2, 1666.0], [39.3, 1670.0], [39.4, 1672.0], [39.5, 1673.0], [39.6, 1674.0], [39.7, 1677.0], [39.8, 1680.0], [39.9, 1681.0], [40.0, 1683.0], [40.1, 1684.0], [40.2, 1687.0], [40.3, 1688.0], [40.4, 1690.0], [40.5, 1695.0], [40.6, 1697.0], [40.7, 1698.0], [40.8, 1699.0], [40.9, 1701.0], [41.0, 1703.0], [41.1, 1705.0], [41.2, 1706.0], [41.3, 1707.0], [41.4, 1709.0], [41.5, 1711.0], [41.6, 1712.0], [41.7, 1714.0], [41.8, 1717.0], [41.9, 1720.0], [42.0, 1722.0], [42.1, 1725.0], [42.2, 1725.0], [42.3, 1727.0], [42.4, 1730.0], [42.5, 1732.0], [42.6, 1734.0], [42.7, 1736.0], [42.8, 1737.0], [42.9, 1738.0], [43.0, 1740.0], [43.1, 1740.0], [43.2, 1743.0], [43.3, 1746.0], [43.4, 1748.0], [43.5, 1750.0], [43.6, 1752.0], [43.7, 1753.0], [43.8, 1755.0], [43.9, 1756.0], [44.0, 1758.0], [44.1, 1760.0], [44.2, 1762.0], [44.3, 1765.0], [44.4, 1766.0], [44.5, 1768.0], [44.6, 1770.0], [44.7, 1772.0], [44.8, 1773.0], [44.9, 1775.0], [45.0, 1776.0], [45.1, 1777.0], [45.2, 1778.0], [45.3, 1779.0], [45.4, 1780.0], [45.5, 1782.0], [45.6, 1784.0], [45.7, 1787.0], [45.8, 1789.0], [45.9, 1791.0], [46.0, 1792.0], [46.1, 1793.0], [46.2, 1797.0], [46.3, 1797.0], [46.4, 1799.0], [46.5, 1802.0], [46.6, 1805.0], [46.7, 1807.0], [46.8, 1809.0], [46.9, 1811.0], [47.0, 1812.0], [47.1, 1813.0], [47.2, 1815.0], [47.3, 1818.0], [47.4, 1820.0], [47.5, 1822.0], [47.6, 1823.0], [47.7, 1825.0], [47.8, 1826.0], [47.9, 1828.0], [48.0, 1828.0], [48.1, 1830.0], [48.2, 1835.0], [48.3, 1836.0], [48.4, 1838.0], [48.5, 1839.0], [48.6, 1840.0], [48.7, 1844.0], [48.8, 1845.0], [48.9, 1848.0], [49.0, 1849.0], [49.1, 1850.0], [49.2, 1851.0], [49.3, 1852.0], [49.4, 1854.0], [49.5, 1855.0], [49.6, 1857.0], [49.7, 1859.0], [49.8, 1861.0], [49.9, 1863.0], [50.0, 1864.0], [50.1, 1866.0], [50.2, 1867.0], [50.3, 1868.0], [50.4, 1869.0], [50.5, 1872.0], [50.6, 1874.0], [50.7, 1876.0], [50.8, 1878.0], [50.9, 1880.0], [51.0, 1881.0], [51.1, 1882.0], [51.2, 1885.0], [51.3, 1887.0], [51.4, 1890.0], [51.5, 1890.0], [51.6, 1891.0], [51.7, 1893.0], [51.8, 1894.0], [51.9, 1895.0], [52.0, 1897.0], [52.1, 1899.0], [52.2, 1901.0], [52.3, 1903.0], [52.4, 1906.0], [52.5, 1907.0], [52.6, 1909.0], [52.7, 1910.0], [52.8, 1912.0], [52.9, 1914.0], [53.0, 1915.0], [53.1, 1916.0], [53.2, 1919.0], [53.3, 1921.0], [53.4, 1924.0], [53.5, 1926.0], [53.6, 1927.0], [53.7, 1928.0], [53.8, 1930.0], [53.9, 1931.0], [54.0, 1933.0], [54.1, 1934.0], [54.2, 1936.0], [54.3, 1937.0], [54.4, 1939.0], [54.5, 1940.0], [54.6, 1942.0], [54.7, 1943.0], [54.8, 1946.0], [54.9, 1948.0], [55.0, 1950.0], [55.1, 1952.0], [55.2, 1954.0], [55.3, 1955.0], [55.4, 1957.0], [55.5, 1960.0], [55.6, 1962.0], [55.7, 1963.0], [55.8, 1965.0], [55.9, 1966.0], [56.0, 1969.0], [56.1, 1970.0], [56.2, 1971.0], [56.3, 1974.0], [56.4, 1976.0], [56.5, 1977.0], [56.6, 1980.0], [56.7, 1982.0], [56.8, 1984.0], [56.9, 1986.0], [57.0, 1987.0], [57.1, 1988.0], [57.2, 1989.0], [57.3, 1990.0], [57.4, 1991.0], [57.5, 1993.0], [57.6, 1994.0], [57.7, 1996.0], [57.8, 1997.0], [57.9, 1999.0], [58.0, 2000.0], [58.1, 2002.0], [58.2, 2005.0], [58.3, 2007.0], [58.4, 2009.0], [58.5, 2011.0], [58.6, 2012.0], [58.7, 2013.0], [58.8, 2014.0], [58.9, 2017.0], [59.0, 2018.0], [59.1, 2020.0], [59.2, 2022.0], [59.3, 2024.0], [59.4, 2026.0], [59.5, 2029.0], [59.6, 2030.0], [59.7, 2033.0], [59.8, 2035.0], [59.9, 2037.0], [60.0, 2040.0], [60.1, 2044.0], [60.2, 2047.0], [60.3, 2049.0], [60.4, 2050.0], [60.5, 2051.0], [60.6, 2054.0], [60.7, 2056.0], [60.8, 2057.0], [60.9, 2059.0], [61.0, 2062.0], [61.1, 2064.0], [61.2, 2065.0], [61.3, 2066.0], [61.4, 2068.0], [61.5, 2071.0], [61.6, 2073.0], [61.7, 2074.0], [61.8, 2076.0], [61.9, 2078.0], [62.0, 2080.0], [62.1, 2084.0], [62.2, 2086.0], [62.3, 2087.0], [62.4, 2091.0], [62.5, 2094.0], [62.6, 2095.0], [62.7, 2097.0], [62.8, 2099.0], [62.9, 2102.0], [63.0, 2105.0], [63.1, 2107.0], [63.2, 2109.0], [63.3, 2111.0], [63.4, 2113.0], [63.5, 2116.0], [63.6, 2119.0], [63.7, 2121.0], [63.8, 2123.0], [63.9, 2126.0], [64.0, 2127.0], [64.1, 2129.0], [64.2, 2131.0], [64.3, 2134.0], [64.4, 2138.0], [64.5, 2139.0], [64.6, 2140.0], [64.7, 2142.0], [64.8, 2145.0], [64.9, 2147.0], [65.0, 2149.0], [65.1, 2151.0], [65.2, 2157.0], [65.3, 2159.0], [65.4, 2160.0], [65.5, 2163.0], [65.6, 2166.0], [65.7, 2169.0], [65.8, 2171.0], [65.9, 2176.0], [66.0, 2181.0], [66.1, 2182.0], [66.2, 2183.0], [66.3, 2187.0], [66.4, 2191.0], [66.5, 2193.0], [66.6, 2197.0], [66.7, 2201.0], [66.8, 2204.0], [66.9, 2207.0], [67.0, 2209.0], [67.1, 2212.0], [67.2, 2214.0], [67.3, 2218.0], [67.4, 2222.0], [67.5, 2225.0], [67.6, 2231.0], [67.7, 2233.0], [67.8, 2235.0], [67.9, 2240.0], [68.0, 2243.0], [68.1, 2248.0], [68.2, 2249.0], [68.3, 2253.0], [68.4, 2258.0], [68.5, 2260.0], [68.6, 2263.0], [68.7, 2266.0], [68.8, 2269.0], [68.9, 2270.0], [69.0, 2274.0], [69.1, 2279.0], [69.2, 2282.0], [69.3, 2283.0], [69.4, 2286.0], [69.5, 2288.0], [69.6, 2291.0], [69.7, 2295.0], [69.8, 2300.0], [69.9, 2302.0], [70.0, 2304.0], [70.1, 2305.0], [70.2, 2310.0], [70.3, 2311.0], [70.4, 2314.0], [70.5, 2317.0], [70.6, 2323.0], [70.7, 2326.0], [70.8, 2330.0], [70.9, 2334.0], [71.0, 2338.0], [71.1, 2343.0], [71.2, 2345.0], [71.3, 2348.0], [71.4, 2352.0], [71.5, 2353.0], [71.6, 2356.0], [71.7, 2361.0], [71.8, 2367.0], [71.9, 2368.0], [72.0, 2369.0], [72.1, 2372.0], [72.2, 2376.0], [72.3, 2381.0], [72.4, 2382.0], [72.5, 2384.0], [72.6, 2390.0], [72.7, 2392.0], [72.8, 2395.0], [72.9, 2397.0], [73.0, 2400.0], [73.1, 2403.0], [73.2, 2407.0], [73.3, 2414.0], [73.4, 2421.0], [73.5, 2424.0], [73.6, 2427.0], [73.7, 2432.0], [73.8, 2435.0], [73.9, 2441.0], [74.0, 2444.0], [74.1, 2446.0], [74.2, 2452.0], [74.3, 2453.0], [74.4, 2459.0], [74.5, 2465.0], [74.6, 2466.0], [74.7, 2468.0], [74.8, 2470.0], [74.9, 2473.0], [75.0, 2476.0], [75.1, 2481.0], [75.2, 2484.0], [75.3, 2487.0], [75.4, 2493.0], [75.5, 2494.0], [75.6, 2496.0], [75.7, 2499.0], [75.8, 2503.0], [75.9, 2504.0], [76.0, 2509.0], [76.1, 2512.0], [76.2, 2513.0], [76.3, 2516.0], [76.4, 2518.0], [76.5, 2524.0], [76.6, 2528.0], [76.7, 2533.0], [76.8, 2535.0], [76.9, 2538.0], [77.0, 2542.0], [77.1, 2545.0], [77.2, 2547.0], [77.3, 2552.0], [77.4, 2556.0], [77.5, 2557.0], [77.6, 2559.0], [77.7, 2562.0], [77.8, 2567.0], [77.9, 2571.0], [78.0, 2576.0], [78.1, 2584.0], [78.2, 2586.0], [78.3, 2588.0], [78.4, 2591.0], [78.5, 2594.0], [78.6, 2595.0], [78.7, 2598.0], [78.8, 2600.0], [78.9, 2606.0], [79.0, 2610.0], [79.1, 2612.0], [79.2, 2615.0], [79.3, 2617.0], [79.4, 2619.0], [79.5, 2624.0], [79.6, 2629.0], [79.7, 2631.0], [79.8, 2635.0], [79.9, 2637.0], [80.0, 2639.0], [80.1, 2642.0], [80.2, 2646.0], [80.3, 2649.0], [80.4, 2649.0], [80.5, 2652.0], [80.6, 2657.0], [80.7, 2662.0], [80.8, 2664.0], [80.9, 2665.0], [81.0, 2668.0], [81.1, 2669.0], [81.2, 2672.0], [81.3, 2675.0], [81.4, 2681.0], [81.5, 2684.0], [81.6, 2690.0], [81.7, 2695.0], [81.8, 2699.0], [81.9, 2701.0], [82.0, 2705.0], [82.1, 2707.0], [82.2, 2712.0], [82.3, 2716.0], [82.4, 2718.0], [82.5, 2724.0], [82.6, 2727.0], [82.7, 2731.0], [82.8, 2737.0], [82.9, 2740.0], [83.0, 2744.0], [83.1, 2746.0], [83.2, 2751.0], [83.3, 2755.0], [83.4, 2758.0], [83.5, 2762.0], [83.6, 2764.0], [83.7, 2770.0], [83.8, 2776.0], [83.9, 2777.0], [84.0, 2781.0], [84.1, 2783.0], [84.2, 2786.0], [84.3, 2789.0], [84.4, 2798.0], [84.5, 2801.0], [84.6, 2804.0], [84.7, 2808.0], [84.8, 2816.0], [84.9, 2822.0], [85.0, 2825.0], [85.1, 2827.0], [85.2, 2831.0], [85.3, 2833.0], [85.4, 2842.0], [85.5, 2845.0], [85.6, 2849.0], [85.7, 2853.0], [85.8, 2857.0], [85.9, 2866.0], [86.0, 2871.0], [86.1, 2874.0], [86.2, 2879.0], [86.3, 2885.0], [86.4, 2894.0], [86.5, 2907.0], [86.6, 2913.0], [86.7, 2918.0], [86.8, 2921.0], [86.9, 2926.0], [87.0, 2929.0], [87.1, 2935.0], [87.2, 2938.0], [87.3, 2943.0], [87.4, 2950.0], [87.5, 2958.0], [87.6, 2963.0], [87.7, 2970.0], [87.8, 2977.0], [87.9, 2980.0], [88.0, 2991.0], [88.1, 2996.0], [88.2, 3000.0], [88.3, 3009.0], [88.4, 3015.0], [88.5, 3033.0], [88.6, 3044.0], [88.7, 3048.0], [88.8, 3060.0], [88.9, 3064.0], [89.0, 3069.0], [89.1, 3074.0], [89.2, 3077.0], [89.3, 3081.0], [89.4, 3087.0], [89.5, 3093.0], [89.6, 3103.0], [89.7, 3112.0], [89.8, 3118.0], [89.9, 3128.0], [90.0, 3136.0], [90.1, 3141.0], [90.2, 3148.0], [90.3, 3156.0], [90.4, 3161.0], [90.5, 3168.0], [90.6, 3183.0], [90.7, 3189.0], [90.8, 3193.0], [90.9, 3196.0], [91.0, 3202.0], [91.1, 3213.0], [91.2, 3229.0], [91.3, 3238.0], [91.4, 3243.0], [91.5, 3256.0], [91.6, 3262.0], [91.7, 3271.0], [91.8, 3280.0], [91.9, 3285.0], [92.0, 3289.0], [92.1, 3297.0], [92.2, 3303.0], [92.3, 3311.0], [92.4, 3315.0], [92.5, 3321.0], [92.6, 3327.0], [92.7, 3336.0], [92.8, 3345.0], [92.9, 3355.0], [93.0, 3361.0], [93.1, 3369.0], [93.2, 3378.0], [93.3, 3390.0], [93.4, 3400.0], [93.5, 3413.0], [93.6, 3422.0], [93.7, 3433.0], [93.8, 3453.0], [93.9, 3464.0], [94.0, 3472.0], [94.1, 3482.0], [94.2, 3498.0], [94.3, 3511.0], [94.4, 3525.0], [94.5, 3529.0], [94.6, 3540.0], [94.7, 3556.0], [94.8, 3579.0], [94.9, 3592.0], [95.0, 3603.0], [95.1, 3618.0], [95.2, 3633.0], [95.3, 3661.0], [95.4, 3679.0], [95.5, 3704.0], [95.6, 3718.0], [95.7, 3743.0], [95.8, 3768.0], [95.9, 3799.0], [96.0, 3806.0], [96.1, 3826.0], [96.2, 3832.0], [96.3, 3843.0], [96.4, 3855.0], [96.5, 3873.0], [96.6, 3912.0], [96.7, 3934.0], [96.8, 3948.0], [96.9, 3963.0], [97.0, 4027.0], [97.1, 4042.0], [97.2, 4077.0], [97.3, 4107.0], [97.4, 4139.0], [97.5, 4180.0], [97.6, 4282.0], [97.7, 4303.0], [97.8, 4355.0], [97.9, 4412.0], [98.0, 4440.0], [98.1, 4488.0], [98.2, 4506.0], [98.3, 4543.0], [98.4, 4587.0], [98.5, 4641.0], [98.6, 4736.0], [98.7, 4817.0], [98.8, 4884.0], [98.9, 4952.0], [99.0, 5064.0], [99.1, 5175.0], [99.2, 5399.0], [99.3, 5603.0], [99.4, 5744.0], [99.5, 6061.0], [99.6, 6319.0], [99.7, 6620.0], [99.8, 6992.0], [99.9, 7638.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 500.0, "maxY": 300.0, "series": [{"data": [[600.0, 7.0], [700.0, 172.0], [800.0, 294.0], [900.0, 182.0], [1000.0, 157.0], [1100.0, 202.0], [1200.0, 214.0], [1300.0, 223.0], [1400.0, 206.0], [1500.0, 218.0], [1600.0, 242.0], [1700.0, 291.0], [1800.0, 296.0], [1900.0, 300.0], [2000.0, 254.0], [2100.0, 201.0], [2200.0, 162.0], [2300.0, 165.0], [2400.0, 142.0], [2500.0, 158.0], [2600.0, 160.0], [2800.0, 106.0], [2700.0, 135.0], [2900.0, 89.0], [3000.0, 70.0], [3100.0, 73.0], [3300.0, 67.0], [3200.0, 60.0], [3400.0, 42.0], [3500.0, 40.0], [3700.0, 22.0], [3600.0, 27.0], [3800.0, 34.0], [3900.0, 20.0], [4000.0, 17.0], [4200.0, 8.0], [4300.0, 10.0], [4100.0, 13.0], [4400.0, 14.0], [4600.0, 7.0], [4500.0, 16.0], [4800.0, 6.0], [4700.0, 5.0], [4900.0, 8.0], [5000.0, 4.0], [5100.0, 6.0], [5300.0, 3.0], [5400.0, 1.0], [5600.0, 4.0], [5500.0, 3.0], [5700.0, 5.0], [5800.0, 2.0], [6000.0, 1.0], [6200.0, 3.0], [6300.0, 4.0], [6400.0, 2.0], [6600.0, 1.0], [6900.0, 2.0], [6700.0, 2.0], [6800.0, 1.0], [7000.0, 1.0], [7300.0, 1.0], [7500.0, 2.0], [7600.0, 1.0], [7800.0, 1.0], [8000.0, 1.0], [8200.0, 1.0], [8500.0, 1.0], [9200.0, 1.0], [500.0, 2.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 9200.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 3530.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1660.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 3530.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 1.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 11.383177570093457, "minX": 1.60219656E12, "maxY": 12.0, "series": [{"data": [[1.60219728E12, 12.0], [1.60219698E12, 12.0], [1.60219668E12, 12.0], [1.60219734E12, 12.0], [1.60219674E12, 12.0], [1.60219704E12, 12.0], [1.6021974E12, 11.383177570093457], [1.6021971E12, 12.0], [1.6021968E12, 12.0], [1.60219686E12, 12.0], [1.60219716E12, 12.0], [1.60219656E12, 12.0], [1.60219722E12, 12.0], [1.60219662E12, 12.0], [1.60219692E12, 12.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6021974E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 1567.0, "minX": 1.0, "maxY": 3582.0, "series": [{"data": [[8.0, 3013.0], [4.0, 1870.0], [2.0, 3582.0], [1.0, 3493.0], [9.0, 1959.0], [10.0, 1968.0], [5.0, 1567.0], [11.0, 2503.0], [12.0, 1993.3179536679609], [6.0, 1755.0], [3.0, 3448.0], [7.0, 1789.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[11.987285686765556, 1994.2851088422342]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 12.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 810.6, "minX": 1.60219656E12, "maxY": 2218247.7, "series": [{"data": [[1.60219728E12, 1571151.5666666667], [1.60219698E12, 1767031.2333333334], [1.60219668E12, 1254056.55], [1.60219734E12, 1703398.3666666667], [1.60219674E12, 2218247.7], [1.60219704E12, 1643106.3666666667], [1.6021974E12, 482041.65], [1.6021971E12, 1097576.7166666666], [1.6021968E12, 1861367.9333333333], [1.60219686E12, 1896752.7333333334], [1.60219716E12, 2048795.6166666667], [1.60219656E12, 1803301.2], [1.60219722E12, 1674149.8333333333], [1.60219662E12, 1515089.4666666666], [1.60219692E12, 1436619.5333333334]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60219728E12, 2971.016666666667], [1.60219698E12, 2327.6], [1.60219668E12, 3028.05], [1.60219734E12, 2633.383333333333], [1.60219674E12, 2733.8333333333335], [1.60219704E12, 2689.1666666666665], [1.6021974E12, 810.6], [1.6021971E12, 2690.4], [1.6021968E12, 2818.616666666667], [1.60219686E12, 2801.1833333333334], [1.60219716E12, 2383.8333333333335], [1.60219656E12, 2386.733333333333], [1.60219722E12, 3187.15], [1.60219662E12, 2470.4], [1.60219692E12, 2652.0833333333335]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6021974E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 1723.351543942993, "minX": 1.60219656E12, "maxY": 2479.999999999999, "series": [{"data": [[1.60219728E12, 1854.6138107416868], [1.60219698E12, 2300.896551724138], [1.60219668E12, 1752.8966346153838], [1.60219734E12, 2036.564469914041], [1.60219674E12, 2018.5000000000002], [1.60219704E12, 1926.9462365591385], [1.6021974E12, 2479.999999999999], [1.6021971E12, 1961.18032786885], [1.6021968E12, 1902.4369973190348], [1.60219686E12, 1990.4850136239793], [1.60219716E12, 2205.40923076923], [1.60219656E12, 2221.4545454545455], [1.60219722E12, 1723.351543942993], [1.60219662E12, 2070.683284457478], [1.60219692E12, 1991.533898305083]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6021974E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 1721.964370546318, "minX": 1.60219656E12, "maxY": 2478.5981308411215, "series": [{"data": [[1.60219728E12, 1853.0792838874686], [1.60219698E12, 2298.9905956112866], [1.60219668E12, 1751.5697115384623], [1.60219734E12, 2034.6332378223499], [1.60219674E12, 2015.8138888888898], [1.60219704E12, 1925.3064516129025], [1.6021974E12, 2478.5981308411215], [1.6021971E12, 1960.0519125683054], [1.6021968E12, 1900.3565683646113], [1.60219686E12, 1988.324250681201], [1.60219716E12, 2203.0246153846156], [1.60219656E12, 2219.230303030303], [1.60219722E12, 1721.964370546318], [1.60219662E12, 2068.7448680351913], [1.60219692E12, 1989.7711864406776]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6021974E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.030878859857482167, "minX": 1.60219656E12, "maxY": 0.5454545454545447, "series": [{"data": [[1.60219728E12, 0.03580562659846552], [1.60219698E12, 0.04075235109717869], [1.60219668E12, 0.05528846153846158], [1.60219734E12, 0.03151862464183385], [1.60219674E12, 0.04444444444444443], [1.60219704E12, 0.03494623655913979], [1.6021974E12, 0.12149532710280374], [1.6021971E12, 0.03551912568306011], [1.6021968E12, 0.04021447721179626], [1.60219686E12, 0.04359673024523158], [1.60219716E12, 0.04000000000000002], [1.60219656E12, 0.5454545454545447], [1.60219722E12, 0.030878859857482167], [1.60219662E12, 0.04985337243401761], [1.60219692E12, 0.03389830508474577]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6021974E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 535.0, "minX": 1.60219656E12, "maxY": 9279.0, "series": [{"data": [[1.60219728E12, 4653.0], [1.60219698E12, 8267.0], [1.60219668E12, 5592.0], [1.60219734E12, 5739.0], [1.60219674E12, 6302.0], [1.60219704E12, 8566.0], [1.6021974E12, 4594.0], [1.6021971E12, 5858.0], [1.6021968E12, 4543.0], [1.60219686E12, 6911.0], [1.60219716E12, 4500.0], [1.60219656E12, 9279.0], [1.60219722E12, 4485.0], [1.60219662E12, 7012.0], [1.60219692E12, 6322.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60219728E12, 757.2239992523193], [1.60219698E12, 823.5199996948243], [1.60219668E12, 755.0], [1.60219734E12, 621.1999909877777], [1.60219674E12, 781.4459953522683], [1.60219704E12, 832.0689984881878], [1.6021974E12, 1260.0], [1.6021971E12, 762.8179994750022], [1.6021968E12, 752.7849995553494], [1.60219686E12, 740.6239998245239], [1.60219716E12, 1024.8419951033593], [1.60219656E12, 784.9579998421669], [1.60219722E12, 757.849992454052], [1.60219662E12, 969.8999959230423], [1.60219692E12, 729.5599993228913]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60219728E12, 760.0464002990723], [1.60219698E12, 825.8480003356933], [1.60219668E12, 755.1283000397682], [1.60219734E12, 655.2200036048889], [1.60219674E12, 798.9906018590927], [1.60219704E12, 837.7759006047249], [1.6021974E12, 1263.1832004737853], [1.6021971E12, 764.799800209999], [1.6021968E12, 754.4635001778603], [1.60219686E12, 741.2864000701904], [1.60219716E12, 1031.9562004041672], [1.60219656E12, 785.2769000315666], [1.60219722E12, 773.1778000402451], [1.60219662E12, 985.2900016307831], [1.60219692E12, 732.1160002708435]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60219728E12, 758.7919996261596], [1.60219698E12, 824.4399995803833], [1.60219668E12, 755.0], [1.60219734E12, 640.0999954938889], [1.60219674E12, 791.1929976761342], [1.60219704E12, 835.2394992440938], [1.6021974E12, 1261.1959994077683], [1.6021971E12, 763.9189997375012], [1.6021968E12, 753.7174997776747], [1.60219686E12, 740.9919999122619], [1.60219716E12, 1030.2609994947911], [1.60219656E12, 785.1444999605417], [1.60219722E12, 773.0089999496937], [1.60219662E12, 978.4499979615211], [1.60219692E12, 730.9799996614456]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60219728E12, 633.0], [1.60219698E12, 790.0], [1.60219668E12, 749.0], [1.60219734E12, 569.0], [1.60219674E12, 535.0], [1.60219704E12, 765.0], [1.6021974E12, 1260.0], [1.6021971E12, 749.0], [1.6021968E12, 731.0], [1.60219686E12, 733.0], [1.60219716E12, 924.0], [1.60219656E12, 770.0], [1.60219722E12, 670.0], [1.60219662E12, 905.0], [1.60219692E12, 621.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60219728E12, 1826.0], [1.60219698E12, 2002.0], [1.60219668E12, 1492.0], [1.60219734E12, 1864.0], [1.60219674E12, 1906.0], [1.60219704E12, 1746.0], [1.6021974E12, 2435.0], [1.6021971E12, 1745.5], [1.6021968E12, 1844.5], [1.60219686E12, 1942.0], [1.60219716E12, 2012.0], [1.60219656E12, 1965.5], [1.60219722E12, 1631.0], [1.60219662E12, 1876.0], [1.60219692E12, 1905.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6021974E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 777.0, "minX": 1.0, "maxY": 3471.0, "series": [{"data": [[2.0, 2562.0], [8.0, 1725.5], [9.0, 1544.0], [10.0, 1371.0], [11.0, 1127.0], [3.0, 2597.5], [12.0, 924.0], [13.0, 914.0], [14.0, 835.5], [15.0, 872.0], [4.0, 2352.5], [1.0, 3471.0], [16.0, 777.0], [17.0, 778.0], [5.0, 2159.0], [6.0, 1986.5], [7.0, 1902.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[7.0, 1425.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 17.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 777.0, "minX": 1.0, "maxY": 3470.0, "series": [{"data": [[2.0, 2559.0], [8.0, 1724.5], [9.0, 1543.0], [10.0, 1370.5], [11.0, 1127.0], [3.0, 2588.5], [12.0, 924.0], [13.0, 914.0], [14.0, 835.0], [15.0, 872.0], [4.0, 2349.0], [1.0, 3470.0], [16.0, 777.0], [17.0, 778.0], [5.0, 2156.0], [6.0, 1981.0], [7.0, 1899.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[7.0, 1425.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 17.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.2, "minX": 1.6021965E12, "maxY": 7.016666666666667, "series": [{"data": [[1.60219728E12, 6.516666666666667], [1.60219698E12, 5.316666666666666], [1.60219668E12, 6.933333333333334], [1.60219734E12, 5.816666666666666], [1.60219674E12, 6.0], [1.60219704E12, 6.2], [1.6021974E12, 1.5833333333333333], [1.6021971E12, 6.1], [1.6021965E12, 0.2], [1.6021968E12, 6.216666666666667], [1.60219686E12, 6.116666666666666], [1.60219716E12, 5.416666666666667], [1.60219656E12, 5.5], [1.60219722E12, 7.016666666666667], [1.60219662E12, 5.683333333333334], [1.60219692E12, 5.9]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6021974E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60219656E12, "maxY": 7.016666666666667, "series": [{"data": [[1.60219728E12, 6.516666666666667], [1.60219698E12, 5.316666666666666], [1.60219668E12, 6.933333333333334], [1.60219734E12, 5.816666666666666], [1.60219674E12, 6.0], [1.60219704E12, 6.2], [1.6021974E12, 1.7833333333333334], [1.6021971E12, 6.1], [1.6021968E12, 6.2], [1.60219686E12, 6.116666666666666], [1.60219716E12, 5.416666666666667], [1.60219656E12, 5.5], [1.60219722E12, 7.016666666666667], [1.60219662E12, 5.683333333333334], [1.60219692E12, 5.9]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.6021968E12, 0.016666666666666666]], "isOverall": false, "label": "400", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6021974E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60219656E12, "maxY": 7.016666666666667, "series": [{"data": [[1.60219728E12, 6.516666666666667], [1.60219698E12, 5.316666666666666], [1.60219668E12, 6.933333333333334], [1.60219734E12, 5.816666666666666], [1.60219674E12, 6.0], [1.60219704E12, 6.2], [1.6021974E12, 1.7833333333333334], [1.6021971E12, 6.1], [1.6021968E12, 6.2], [1.60219686E12, 6.116666666666666], [1.60219716E12, 5.416666666666667], [1.60219656E12, 5.5], [1.60219722E12, 7.016666666666667], [1.60219662E12, 5.683333333333334], [1.60219692E12, 5.9]], "isOverall": false, "label": "HTTP Request-success", "isController": false}, {"data": [[1.6021968E12, 0.016666666666666666]], "isOverall": false, "label": "HTTP Request-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6021974E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60219656E12, "maxY": 7.016666666666667, "series": [{"data": [[1.60219728E12, 6.516666666666667], [1.60219698E12, 5.316666666666666], [1.60219668E12, 6.933333333333334], [1.60219734E12, 5.816666666666666], [1.60219674E12, 6.0], [1.60219704E12, 6.2], [1.6021974E12, 1.7833333333333334], [1.6021971E12, 6.1], [1.6021968E12, 6.2], [1.60219686E12, 6.116666666666666], [1.60219716E12, 5.416666666666667], [1.60219656E12, 5.5], [1.60219722E12, 7.016666666666667], [1.60219662E12, 5.683333333333334], [1.60219692E12, 5.9]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.6021968E12, 0.016666666666666666]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6021974E12, "title": "Total Transactions Per Second"}},
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

