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
        data: {"result": {"minY": 621.0, "minX": 0.0, "maxY": 11191.0, "series": [{"data": [[0.0, 621.0], [0.1, 709.0], [0.2, 720.0], [0.3, 725.0], [0.4, 731.0], [0.5, 734.0], [0.6, 740.0], [0.7, 742.0], [0.8, 744.0], [0.9, 748.0], [1.0, 751.0], [1.1, 756.0], [1.2, 758.0], [1.3, 762.0], [1.4, 764.0], [1.5, 767.0], [1.6, 769.0], [1.7, 771.0], [1.8, 773.0], [1.9, 776.0], [2.0, 780.0], [2.1, 781.0], [2.2, 783.0], [2.3, 786.0], [2.4, 787.0], [2.5, 789.0], [2.6, 790.0], [2.7, 793.0], [2.8, 795.0], [2.9, 796.0], [3.0, 799.0], [3.1, 803.0], [3.2, 805.0], [3.3, 806.0], [3.4, 809.0], [3.5, 811.0], [3.6, 813.0], [3.7, 815.0], [3.8, 817.0], [3.9, 818.0], [4.0, 821.0], [4.1, 823.0], [4.2, 825.0], [4.3, 828.0], [4.4, 830.0], [4.5, 831.0], [4.6, 833.0], [4.7, 833.0], [4.8, 836.0], [4.9, 838.0], [5.0, 839.0], [5.1, 841.0], [5.2, 842.0], [5.3, 843.0], [5.4, 845.0], [5.5, 847.0], [5.6, 848.0], [5.7, 849.0], [5.8, 851.0], [5.9, 852.0], [6.0, 854.0], [6.1, 855.0], [6.2, 857.0], [6.3, 857.0], [6.4, 859.0], [6.5, 861.0], [6.6, 862.0], [6.7, 863.0], [6.8, 864.0], [6.9, 866.0], [7.0, 867.0], [7.1, 868.0], [7.2, 870.0], [7.3, 872.0], [7.4, 874.0], [7.5, 876.0], [7.6, 877.0], [7.7, 879.0], [7.8, 881.0], [7.9, 883.0], [8.0, 886.0], [8.1, 887.0], [8.2, 889.0], [8.3, 891.0], [8.4, 893.0], [8.5, 895.0], [8.6, 897.0], [8.7, 897.0], [8.8, 898.0], [8.9, 899.0], [9.0, 901.0], [9.1, 902.0], [9.2, 906.0], [9.3, 907.0], [9.4, 908.0], [9.5, 910.0], [9.6, 911.0], [9.7, 914.0], [9.8, 916.0], [9.9, 920.0], [10.0, 921.0], [10.1, 925.0], [10.2, 928.0], [10.3, 929.0], [10.4, 930.0], [10.5, 932.0], [10.6, 937.0], [10.7, 938.0], [10.8, 939.0], [10.9, 940.0], [11.0, 942.0], [11.1, 946.0], [11.2, 949.0], [11.3, 953.0], [11.4, 957.0], [11.5, 957.0], [11.6, 966.0], [11.7, 969.0], [11.8, 973.0], [11.9, 977.0], [12.0, 977.0], [12.1, 984.0], [12.2, 987.0], [12.3, 991.0], [12.4, 994.0], [12.5, 998.0], [12.6, 1002.0], [12.7, 1005.0], [12.8, 1007.0], [12.9, 1013.0], [13.0, 1018.0], [13.1, 1021.0], [13.2, 1027.0], [13.3, 1031.0], [13.4, 1038.0], [13.5, 1043.0], [13.6, 1047.0], [13.7, 1049.0], [13.8, 1053.0], [13.9, 1056.0], [14.0, 1060.0], [14.1, 1061.0], [14.2, 1065.0], [14.3, 1067.0], [14.4, 1073.0], [14.5, 1076.0], [14.6, 1080.0], [14.7, 1084.0], [14.8, 1090.0], [14.9, 1093.0], [15.0, 1095.0], [15.1, 1098.0], [15.2, 1101.0], [15.3, 1105.0], [15.4, 1112.0], [15.5, 1117.0], [15.6, 1119.0], [15.7, 1122.0], [15.8, 1129.0], [15.9, 1132.0], [16.0, 1135.0], [16.1, 1138.0], [16.2, 1142.0], [16.3, 1145.0], [16.4, 1149.0], [16.5, 1152.0], [16.6, 1156.0], [16.7, 1158.0], [16.8, 1160.0], [16.9, 1162.0], [17.0, 1163.0], [17.1, 1166.0], [17.2, 1168.0], [17.3, 1171.0], [17.4, 1172.0], [17.5, 1174.0], [17.6, 1175.0], [17.7, 1176.0], [17.8, 1180.0], [17.9, 1183.0], [18.0, 1186.0], [18.1, 1188.0], [18.2, 1191.0], [18.3, 1196.0], [18.4, 1198.0], [18.5, 1201.0], [18.6, 1202.0], [18.7, 1208.0], [18.8, 1211.0], [18.9, 1214.0], [19.0, 1215.0], [19.1, 1218.0], [19.2, 1220.0], [19.3, 1223.0], [19.4, 1228.0], [19.5, 1230.0], [19.6, 1231.0], [19.7, 1235.0], [19.8, 1239.0], [19.9, 1242.0], [20.0, 1244.0], [20.1, 1249.0], [20.2, 1254.0], [20.3, 1256.0], [20.4, 1258.0], [20.5, 1262.0], [20.6, 1268.0], [20.7, 1274.0], [20.8, 1275.0], [20.9, 1280.0], [21.0, 1284.0], [21.1, 1292.0], [21.2, 1293.0], [21.3, 1298.0], [21.4, 1300.0], [21.5, 1303.0], [21.6, 1310.0], [21.7, 1313.0], [21.8, 1316.0], [21.9, 1319.0], [22.0, 1323.0], [22.1, 1327.0], [22.2, 1332.0], [22.3, 1335.0], [22.4, 1340.0], [22.5, 1345.0], [22.6, 1349.0], [22.7, 1355.0], [22.8, 1358.0], [22.9, 1361.0], [23.0, 1366.0], [23.1, 1369.0], [23.2, 1373.0], [23.3, 1375.0], [23.4, 1379.0], [23.5, 1382.0], [23.6, 1383.0], [23.7, 1386.0], [23.8, 1389.0], [23.9, 1391.0], [24.0, 1393.0], [24.1, 1396.0], [24.2, 1400.0], [24.3, 1402.0], [24.4, 1403.0], [24.5, 1406.0], [24.6, 1408.0], [24.7, 1410.0], [24.8, 1413.0], [24.9, 1415.0], [25.0, 1418.0], [25.1, 1421.0], [25.2, 1426.0], [25.3, 1429.0], [25.4, 1432.0], [25.5, 1435.0], [25.6, 1436.0], [25.7, 1438.0], [25.8, 1440.0], [25.9, 1443.0], [26.0, 1444.0], [26.1, 1446.0], [26.2, 1451.0], [26.3, 1452.0], [26.4, 1453.0], [26.5, 1454.0], [26.6, 1456.0], [26.7, 1458.0], [26.8, 1463.0], [26.9, 1467.0], [27.0, 1468.0], [27.1, 1469.0], [27.2, 1471.0], [27.3, 1472.0], [27.4, 1475.0], [27.5, 1479.0], [27.6, 1481.0], [27.7, 1482.0], [27.8, 1484.0], [27.9, 1486.0], [28.0, 1488.0], [28.1, 1491.0], [28.2, 1493.0], [28.3, 1494.0], [28.4, 1495.0], [28.5, 1497.0], [28.6, 1498.0], [28.7, 1502.0], [28.8, 1503.0], [28.9, 1505.0], [29.0, 1508.0], [29.1, 1511.0], [29.2, 1514.0], [29.3, 1518.0], [29.4, 1520.0], [29.5, 1524.0], [29.6, 1527.0], [29.7, 1529.0], [29.8, 1531.0], [29.9, 1534.0], [30.0, 1537.0], [30.1, 1539.0], [30.2, 1541.0], [30.3, 1544.0], [30.4, 1547.0], [30.5, 1550.0], [30.6, 1554.0], [30.7, 1555.0], [30.8, 1559.0], [30.9, 1562.0], [31.0, 1565.0], [31.1, 1570.0], [31.2, 1573.0], [31.3, 1576.0], [31.4, 1577.0], [31.5, 1581.0], [31.6, 1583.0], [31.7, 1585.0], [31.8, 1587.0], [31.9, 1590.0], [32.0, 1592.0], [32.1, 1595.0], [32.2, 1596.0], [32.3, 1598.0], [32.4, 1599.0], [32.5, 1600.0], [32.6, 1603.0], [32.7, 1604.0], [32.8, 1607.0], [32.9, 1609.0], [33.0, 1611.0], [33.1, 1613.0], [33.2, 1618.0], [33.3, 1621.0], [33.4, 1624.0], [33.5, 1626.0], [33.6, 1628.0], [33.7, 1631.0], [33.8, 1633.0], [33.9, 1635.0], [34.0, 1637.0], [34.1, 1638.0], [34.2, 1640.0], [34.3, 1642.0], [34.4, 1642.0], [34.5, 1645.0], [34.6, 1646.0], [34.7, 1648.0], [34.8, 1651.0], [34.9, 1654.0], [35.0, 1655.0], [35.1, 1658.0], [35.2, 1661.0], [35.3, 1664.0], [35.4, 1665.0], [35.5, 1666.0], [35.6, 1668.0], [35.7, 1670.0], [35.8, 1673.0], [35.9, 1674.0], [36.0, 1679.0], [36.1, 1681.0], [36.2, 1681.0], [36.3, 1683.0], [36.4, 1685.0], [36.5, 1687.0], [36.6, 1689.0], [36.7, 1692.0], [36.8, 1693.0], [36.9, 1697.0], [37.0, 1699.0], [37.1, 1703.0], [37.2, 1704.0], [37.3, 1706.0], [37.4, 1710.0], [37.5, 1711.0], [37.6, 1712.0], [37.7, 1714.0], [37.8, 1714.0], [37.9, 1718.0], [38.0, 1720.0], [38.1, 1725.0], [38.2, 1730.0], [38.3, 1731.0], [38.4, 1733.0], [38.5, 1736.0], [38.6, 1739.0], [38.7, 1741.0], [38.8, 1743.0], [38.9, 1745.0], [39.0, 1748.0], [39.1, 1752.0], [39.2, 1752.0], [39.3, 1755.0], [39.4, 1756.0], [39.5, 1758.0], [39.6, 1761.0], [39.7, 1763.0], [39.8, 1766.0], [39.9, 1767.0], [40.0, 1769.0], [40.1, 1771.0], [40.2, 1773.0], [40.3, 1776.0], [40.4, 1777.0], [40.5, 1780.0], [40.6, 1782.0], [40.7, 1785.0], [40.8, 1787.0], [40.9, 1788.0], [41.0, 1789.0], [41.1, 1790.0], [41.2, 1792.0], [41.3, 1794.0], [41.4, 1796.0], [41.5, 1798.0], [41.6, 1801.0], [41.7, 1805.0], [41.8, 1806.0], [41.9, 1809.0], [42.0, 1810.0], [42.1, 1811.0], [42.2, 1814.0], [42.3, 1817.0], [42.4, 1818.0], [42.5, 1820.0], [42.6, 1822.0], [42.7, 1825.0], [42.8, 1827.0], [42.9, 1830.0], [43.0, 1832.0], [43.1, 1835.0], [43.2, 1838.0], [43.3, 1841.0], [43.4, 1843.0], [43.5, 1844.0], [43.6, 1846.0], [43.7, 1847.0], [43.8, 1848.0], [43.9, 1851.0], [44.0, 1853.0], [44.1, 1855.0], [44.2, 1857.0], [44.3, 1860.0], [44.4, 1863.0], [44.5, 1866.0], [44.6, 1867.0], [44.7, 1869.0], [44.8, 1870.0], [44.9, 1872.0], [45.0, 1874.0], [45.1, 1876.0], [45.2, 1877.0], [45.3, 1879.0], [45.4, 1882.0], [45.5, 1885.0], [45.6, 1886.0], [45.7, 1888.0], [45.8, 1891.0], [45.9, 1893.0], [46.0, 1894.0], [46.1, 1896.0], [46.2, 1897.0], [46.3, 1899.0], [46.4, 1900.0], [46.5, 1903.0], [46.6, 1905.0], [46.7, 1906.0], [46.8, 1909.0], [46.9, 1912.0], [47.0, 1914.0], [47.1, 1915.0], [47.2, 1917.0], [47.3, 1920.0], [47.4, 1923.0], [47.5, 1923.0], [47.6, 1925.0], [47.7, 1928.0], [47.8, 1929.0], [47.9, 1930.0], [48.0, 1931.0], [48.1, 1933.0], [48.2, 1934.0], [48.3, 1936.0], [48.4, 1938.0], [48.5, 1940.0], [48.6, 1942.0], [48.7, 1943.0], [48.8, 1945.0], [48.9, 1946.0], [49.0, 1948.0], [49.1, 1949.0], [49.2, 1950.0], [49.3, 1951.0], [49.4, 1952.0], [49.5, 1954.0], [49.6, 1955.0], [49.7, 1958.0], [49.8, 1959.0], [49.9, 1961.0], [50.0, 1963.0], [50.1, 1966.0], [50.2, 1968.0], [50.3, 1970.0], [50.4, 1971.0], [50.5, 1972.0], [50.6, 1974.0], [50.7, 1977.0], [50.8, 1978.0], [50.9, 1979.0], [51.0, 1980.0], [51.1, 1981.0], [51.2, 1982.0], [51.3, 1984.0], [51.4, 1985.0], [51.5, 1987.0], [51.6, 1990.0], [51.7, 1991.0], [51.8, 1992.0], [51.9, 1993.0], [52.0, 1994.0], [52.1, 1995.0], [52.2, 1997.0], [52.3, 1998.0], [52.4, 2000.0], [52.5, 2001.0], [52.6, 2003.0], [52.7, 2005.0], [52.8, 2009.0], [52.9, 2012.0], [53.0, 2015.0], [53.1, 2018.0], [53.2, 2021.0], [53.3, 2024.0], [53.4, 2026.0], [53.5, 2028.0], [53.6, 2030.0], [53.7, 2031.0], [53.8, 2034.0], [53.9, 2036.0], [54.0, 2038.0], [54.1, 2040.0], [54.2, 2044.0], [54.3, 2045.0], [54.4, 2046.0], [54.5, 2049.0], [54.6, 2054.0], [54.7, 2055.0], [54.8, 2056.0], [54.9, 2061.0], [55.0, 2062.0], [55.1, 2063.0], [55.2, 2066.0], [55.3, 2069.0], [55.4, 2070.0], [55.5, 2072.0], [55.6, 2073.0], [55.7, 2075.0], [55.8, 2079.0], [55.9, 2080.0], [56.0, 2083.0], [56.1, 2086.0], [56.2, 2088.0], [56.3, 2090.0], [56.4, 2092.0], [56.5, 2094.0], [56.6, 2097.0], [56.7, 2098.0], [56.8, 2100.0], [56.9, 2104.0], [57.0, 2108.0], [57.1, 2110.0], [57.2, 2112.0], [57.3, 2115.0], [57.4, 2117.0], [57.5, 2119.0], [57.6, 2121.0], [57.7, 2122.0], [57.8, 2124.0], [57.9, 2126.0], [58.0, 2130.0], [58.1, 2131.0], [58.2, 2134.0], [58.3, 2139.0], [58.4, 2140.0], [58.5, 2143.0], [58.6, 2144.0], [58.7, 2148.0], [58.8, 2151.0], [58.9, 2154.0], [59.0, 2156.0], [59.1, 2157.0], [59.2, 2159.0], [59.3, 2161.0], [59.4, 2164.0], [59.5, 2166.0], [59.6, 2169.0], [59.7, 2172.0], [59.8, 2176.0], [59.9, 2177.0], [60.0, 2179.0], [60.1, 2182.0], [60.2, 2183.0], [60.3, 2186.0], [60.4, 2191.0], [60.5, 2192.0], [60.6, 2195.0], [60.7, 2196.0], [60.8, 2198.0], [60.9, 2201.0], [61.0, 2202.0], [61.1, 2205.0], [61.2, 2208.0], [61.3, 2210.0], [61.4, 2212.0], [61.5, 2216.0], [61.6, 2219.0], [61.7, 2222.0], [61.8, 2226.0], [61.9, 2229.0], [62.0, 2232.0], [62.1, 2234.0], [62.2, 2239.0], [62.3, 2241.0], [62.4, 2246.0], [62.5, 2250.0], [62.6, 2254.0], [62.7, 2256.0], [62.8, 2259.0], [62.9, 2261.0], [63.0, 2263.0], [63.1, 2265.0], [63.2, 2267.0], [63.3, 2269.0], [63.4, 2270.0], [63.5, 2272.0], [63.6, 2275.0], [63.7, 2276.0], [63.8, 2279.0], [63.9, 2284.0], [64.0, 2286.0], [64.1, 2289.0], [64.2, 2291.0], [64.3, 2292.0], [64.4, 2294.0], [64.5, 2297.0], [64.6, 2301.0], [64.7, 2305.0], [64.8, 2310.0], [64.9, 2312.0], [65.0, 2314.0], [65.1, 2317.0], [65.2, 2320.0], [65.3, 2325.0], [65.4, 2328.0], [65.5, 2330.0], [65.6, 2332.0], [65.7, 2335.0], [65.8, 2336.0], [65.9, 2341.0], [66.0, 2343.0], [66.1, 2346.0], [66.2, 2347.0], [66.3, 2351.0], [66.4, 2354.0], [66.5, 2355.0], [66.6, 2357.0], [66.7, 2361.0], [66.8, 2363.0], [66.9, 2365.0], [67.0, 2366.0], [67.1, 2371.0], [67.2, 2373.0], [67.3, 2376.0], [67.4, 2378.0], [67.5, 2380.0], [67.6, 2382.0], [67.7, 2385.0], [67.8, 2388.0], [67.9, 2389.0], [68.0, 2394.0], [68.1, 2397.0], [68.2, 2400.0], [68.3, 2403.0], [68.4, 2405.0], [68.5, 2409.0], [68.6, 2410.0], [68.7, 2413.0], [68.8, 2416.0], [68.9, 2419.0], [69.0, 2422.0], [69.1, 2425.0], [69.2, 2428.0], [69.3, 2430.0], [69.4, 2432.0], [69.5, 2435.0], [69.6, 2441.0], [69.7, 2446.0], [69.8, 2450.0], [69.9, 2453.0], [70.0, 2459.0], [70.1, 2463.0], [70.2, 2464.0], [70.3, 2466.0], [70.4, 2468.0], [70.5, 2471.0], [70.6, 2474.0], [70.7, 2477.0], [70.8, 2478.0], [70.9, 2481.0], [71.0, 2485.0], [71.1, 2487.0], [71.2, 2489.0], [71.3, 2492.0], [71.4, 2495.0], [71.5, 2498.0], [71.6, 2503.0], [71.7, 2505.0], [71.8, 2507.0], [71.9, 2509.0], [72.0, 2510.0], [72.1, 2514.0], [72.2, 2517.0], [72.3, 2520.0], [72.4, 2524.0], [72.5, 2528.0], [72.6, 2531.0], [72.7, 2535.0], [72.8, 2541.0], [72.9, 2542.0], [73.0, 2545.0], [73.1, 2550.0], [73.2, 2552.0], [73.3, 2555.0], [73.4, 2559.0], [73.5, 2564.0], [73.6, 2568.0], [73.7, 2572.0], [73.8, 2578.0], [73.9, 2582.0], [74.0, 2584.0], [74.1, 2587.0], [74.2, 2590.0], [74.3, 2595.0], [74.4, 2599.0], [74.5, 2601.0], [74.6, 2603.0], [74.7, 2606.0], [74.8, 2611.0], [74.9, 2616.0], [75.0, 2618.0], [75.1, 2619.0], [75.2, 2624.0], [75.3, 2626.0], [75.4, 2632.0], [75.5, 2635.0], [75.6, 2639.0], [75.7, 2642.0], [75.8, 2644.0], [75.9, 2652.0], [76.0, 2656.0], [76.1, 2658.0], [76.2, 2662.0], [76.3, 2666.0], [76.4, 2671.0], [76.5, 2675.0], [76.6, 2682.0], [76.7, 2685.0], [76.8, 2688.0], [76.9, 2692.0], [77.0, 2695.0], [77.1, 2699.0], [77.2, 2704.0], [77.3, 2708.0], [77.4, 2712.0], [77.5, 2717.0], [77.6, 2719.0], [77.7, 2723.0], [77.8, 2724.0], [77.9, 2727.0], [78.0, 2729.0], [78.1, 2732.0], [78.2, 2734.0], [78.3, 2737.0], [78.4, 2740.0], [78.5, 2742.0], [78.6, 2744.0], [78.7, 2751.0], [78.8, 2754.0], [78.9, 2756.0], [79.0, 2757.0], [79.1, 2760.0], [79.2, 2762.0], [79.3, 2765.0], [79.4, 2768.0], [79.5, 2773.0], [79.6, 2777.0], [79.7, 2780.0], [79.8, 2782.0], [79.9, 2784.0], [80.0, 2789.0], [80.1, 2793.0], [80.2, 2795.0], [80.3, 2798.0], [80.4, 2802.0], [80.5, 2807.0], [80.6, 2809.0], [80.7, 2811.0], [80.8, 2813.0], [80.9, 2815.0], [81.0, 2819.0], [81.1, 2825.0], [81.2, 2827.0], [81.3, 2828.0], [81.4, 2833.0], [81.5, 2835.0], [81.6, 2839.0], [81.7, 2842.0], [81.8, 2845.0], [81.9, 2847.0], [82.0, 2848.0], [82.1, 2849.0], [82.2, 2853.0], [82.3, 2857.0], [82.4, 2859.0], [82.5, 2863.0], [82.6, 2869.0], [82.7, 2873.0], [82.8, 2879.0], [82.9, 2884.0], [83.0, 2887.0], [83.1, 2889.0], [83.2, 2893.0], [83.3, 2898.0], [83.4, 2904.0], [83.5, 2909.0], [83.6, 2912.0], [83.7, 2916.0], [83.8, 2921.0], [83.9, 2925.0], [84.0, 2929.0], [84.1, 2931.0], [84.2, 2933.0], [84.3, 2937.0], [84.4, 2941.0], [84.5, 2945.0], [84.6, 2949.0], [84.7, 2955.0], [84.8, 2958.0], [84.9, 2964.0], [85.0, 2970.0], [85.1, 2974.0], [85.2, 2977.0], [85.3, 2981.0], [85.4, 2983.0], [85.5, 2991.0], [85.6, 2992.0], [85.7, 3000.0], [85.8, 3005.0], [85.9, 3006.0], [86.0, 3012.0], [86.1, 3016.0], [86.2, 3018.0], [86.3, 3026.0], [86.4, 3034.0], [86.5, 3037.0], [86.6, 3042.0], [86.7, 3049.0], [86.8, 3053.0], [86.9, 3058.0], [87.0, 3066.0], [87.1, 3074.0], [87.2, 3076.0], [87.3, 3084.0], [87.4, 3086.0], [87.5, 3092.0], [87.6, 3097.0], [87.7, 3100.0], [87.8, 3106.0], [87.9, 3116.0], [88.0, 3123.0], [88.1, 3127.0], [88.2, 3133.0], [88.3, 3137.0], [88.4, 3145.0], [88.5, 3148.0], [88.6, 3150.0], [88.7, 3154.0], [88.8, 3158.0], [88.9, 3163.0], [89.0, 3181.0], [89.1, 3187.0], [89.2, 3193.0], [89.3, 3196.0], [89.4, 3200.0], [89.5, 3205.0], [89.6, 3210.0], [89.7, 3213.0], [89.8, 3216.0], [89.9, 3219.0], [90.0, 3229.0], [90.1, 3236.0], [90.2, 3244.0], [90.3, 3248.0], [90.4, 3259.0], [90.5, 3266.0], [90.6, 3270.0], [90.7, 3274.0], [90.8, 3278.0], [90.9, 3288.0], [91.0, 3301.0], [91.1, 3316.0], [91.2, 3327.0], [91.3, 3332.0], [91.4, 3338.0], [91.5, 3355.0], [91.6, 3360.0], [91.7, 3377.0], [91.8, 3384.0], [91.9, 3389.0], [92.0, 3392.0], [92.1, 3399.0], [92.2, 3407.0], [92.3, 3417.0], [92.4, 3433.0], [92.5, 3437.0], [92.6, 3452.0], [92.7, 3468.0], [92.8, 3476.0], [92.9, 3481.0], [93.0, 3490.0], [93.1, 3506.0], [93.2, 3525.0], [93.3, 3540.0], [93.4, 3552.0], [93.5, 3559.0], [93.6, 3563.0], [93.7, 3572.0], [93.8, 3584.0], [93.9, 3587.0], [94.0, 3599.0], [94.1, 3608.0], [94.2, 3618.0], [94.3, 3636.0], [94.4, 3651.0], [94.5, 3661.0], [94.6, 3676.0], [94.7, 3701.0], [94.8, 3712.0], [94.9, 3721.0], [95.0, 3738.0], [95.1, 3755.0], [95.2, 3759.0], [95.3, 3771.0], [95.4, 3789.0], [95.5, 3816.0], [95.6, 3823.0], [95.7, 3833.0], [95.8, 3859.0], [95.9, 3873.0], [96.0, 3907.0], [96.1, 3935.0], [96.2, 3953.0], [96.3, 3981.0], [96.4, 4000.0], [96.5, 4051.0], [96.6, 4069.0], [96.7, 4106.0], [96.8, 4119.0], [96.9, 4158.0], [97.0, 4190.0], [97.1, 4236.0], [97.2, 4288.0], [97.3, 4314.0], [97.4, 4338.0], [97.5, 4353.0], [97.6, 4392.0], [97.7, 4447.0], [97.8, 4472.0], [97.9, 4528.0], [98.0, 4576.0], [98.1, 4630.0], [98.2, 4739.0], [98.3, 4799.0], [98.4, 4849.0], [98.5, 4988.0], [98.6, 5064.0], [98.7, 5101.0], [98.8, 5217.0], [98.9, 5360.0], [99.0, 5543.0], [99.1, 5729.0], [99.2, 5802.0], [99.3, 6049.0], [99.4, 6152.0], [99.5, 6298.0], [99.6, 6420.0], [99.7, 6584.0], [99.8, 6645.0], [99.9, 7086.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 600.0, "maxY": 309.0, "series": [{"data": [[600.0, 2.0], [700.0, 154.0], [800.0, 306.0], [900.0, 189.0], [1000.0, 135.0], [1100.0, 171.0], [1200.0, 152.0], [1300.0, 146.0], [1400.0, 231.0], [1500.0, 197.0], [1600.0, 238.0], [1700.0, 235.0], [1800.0, 250.0], [1900.0, 309.0], [2000.0, 232.0], [2100.0, 211.0], [2300.0, 188.0], [2200.0, 193.0], [2400.0, 176.0], [2500.0, 148.0], [2600.0, 140.0], [2700.0, 167.0], [2800.0, 155.0], [2900.0, 121.0], [3000.0, 105.0], [3100.0, 88.0], [3300.0, 58.0], [3200.0, 83.0], [3400.0, 50.0], [3500.0, 49.0], [3600.0, 35.0], [3700.0, 39.0], [3800.0, 28.0], [3900.0, 22.0], [4000.0, 14.0], [4100.0, 19.0], [4300.0, 21.0], [4200.0, 9.0], [4600.0, 5.0], [4400.0, 12.0], [4500.0, 11.0], [4800.0, 8.0], [4700.0, 8.0], [5100.0, 5.0], [4900.0, 3.0], [5000.0, 8.0], [5300.0, 5.0], [5200.0, 2.0], [5500.0, 3.0], [5400.0, 4.0], [5600.0, 1.0], [5700.0, 7.0], [5800.0, 5.0], [6100.0, 4.0], [6000.0, 3.0], [6200.0, 5.0], [6300.0, 4.0], [6600.0, 5.0], [6400.0, 3.0], [6500.0, 3.0], [6900.0, 2.0], [6800.0, 1.0], [6700.0, 1.0], [7100.0, 1.0], [7000.0, 1.0], [7200.0, 1.0], [9300.0, 1.0], [10300.0, 1.0], [11100.0, 1.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 11100.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 1488.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 3702.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1488.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 3702.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 11.690140845070422, "minX": 1.60385034E12, "maxY": 12.0, "series": [{"data": [[1.60385112E12, 12.0], [1.60385082E12, 12.0], [1.60385052E12, 12.0], [1.60385118E12, 12.0], [1.6038504E12, 12.0], [1.60385106E12, 12.0], [1.60385076E12, 12.0], [1.60385046E12, 12.0], [1.60385064E12, 12.0], [1.60385034E12, 12.0], [1.603851E12, 12.0], [1.6038507E12, 12.0], [1.60385088E12, 12.0], [1.60385058E12, 12.0], [1.60385124E12, 11.690140845070422], [1.60385094E12, 12.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60385124E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 1618.0, "minX": 1.0, "maxY": 4084.0, "series": [{"data": [[8.0, 1684.0], [4.0, 1814.0], [2.0, 3770.0], [1.0, 3671.0], [9.0, 2134.0], [10.0, 1618.0], [5.0, 1730.0], [11.0, 2364.0], [12.0, 2092.5035721181775], [6.0, 1853.0], [3.0, 4084.0], [7.0, 2911.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[11.987283236994216, 2093.392870905595]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 12.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 722.7333333333333, "minX": 1.60385034E12, "maxY": 2074345.95, "series": [{"data": [[1.60385112E12, 1532761.9], [1.60385082E12, 1758098.2166666666], [1.60385052E12, 1291586.7166666666], [1.60385118E12, 1585217.0166666666], [1.6038504E12, 1542623.65], [1.60385106E12, 1873378.25], [1.60385076E12, 1393007.0], [1.60385046E12, 1401724.25], [1.60385064E12, 1793503.4], [1.60385034E12, 624650.6166666667], [1.603851E12, 1731716.3833333333], [1.6038507E12, 1803829.0166666666], [1.60385088E12, 1452771.0333333334], [1.60385058E12, 2074345.95], [1.60385124E12, 1000783.8], [1.60385094E12, 1112637.7]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60385112E12, 2711.7], [1.60385082E12, 2128.7166666666667], [1.60385052E12, 2980.9166666666665], [1.60385118E12, 2985.8333333333335], [1.6038504E12, 2175.016666666667], [1.60385106E12, 2805.6833333333334], [1.60385076E12, 2583.883333333333], [1.60385046E12, 2366.5833333333335], [1.60385064E12, 2592.3], [1.60385034E12, 722.7333333333333], [1.603851E12, 2413.266666666667], [1.6038507E12, 2649.2833333333333], [1.60385088E12, 2487.2], [1.60385058E12, 2722.15], [1.60385124E12, 1599.5333333333333], [1.60385094E12, 2652.5333333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60385124E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 1757.3571428571427, "minX": 1.60385034E12, "maxY": 2583.492957746478, "series": [{"data": [[1.60385112E12, 2001.6582633053229], [1.60385082E12, 2548.9517241379303], [1.60385052E12, 1757.3571428571427], [1.60385118E12, 1833.6319796954326], [1.6038504E12, 2341.0485436893223], [1.60385106E12, 1951.278378378378], [1.60385076E12, 2039.7217391304334], [1.60385046E12, 2233.759259259261], [1.60385064E12, 2068.2419825072893], [1.60385034E12, 2521.115789473683], [1.603851E12, 2168.434650455928], [1.6038507E12, 2069.270893371758], [1.60385088E12, 2064.1873198847293], [1.60385058E12, 2029.5626740947084], [1.60385124E12, 2583.492957746478], [1.60385094E12, 2007.3176795580118]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60385124E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 1755.9236453201972, "minX": 1.60385034E12, "maxY": 2581.8638497652573, "series": [{"data": [[1.60385112E12, 2000.1932773109252], [1.60385082E12, 2546.824137931034], [1.60385052E12, 1755.9236453201972], [1.60385118E12, 1832.393401015227], [1.6038504E12, 2338.867313915856], [1.60385106E12, 1949.6864864864856], [1.60385076E12, 2038.330434782609], [1.60385046E12, 2231.817901234568], [1.60385064E12, 2066.335276967931], [1.60385034E12, 2518.1473684210537], [1.603851E12, 2166.7963525835867], [1.6038507E12, 2067.4092219020163], [1.60385088E12, 2062.7953890489903], [1.60385058E12, 2026.8022284122535], [1.60385124E12, 2581.8638497652573], [1.60385094E12, 2006.417127071824]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60385124E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.014084507042253539, "minX": 1.60385034E12, "maxY": 1.515789473684211, "series": [{"data": [[1.60385112E12, 0.03921568627450979], [1.60385082E12, 0.04827586206896553], [1.60385052E12, 0.03448275862068966], [1.60385118E12, 0.032994923857868015], [1.6038504E12, 0.048543689320388335], [1.60385106E12, 0.03513513513513513], [1.60385076E12, 0.034782608695652195], [1.60385046E12, 0.04012345679012347], [1.60385064E12, 0.043731778425655975], [1.60385034E12, 1.515789473684211], [1.603851E12, 0.036474164133738586], [1.6038507E12, 0.037463976945244955], [1.60385088E12, 0.03746397694524497], [1.60385058E12, 0.041782729805013935], [1.60385124E12, 0.014084507042253539], [1.60385094E12, 0.03591160220994476]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60385124E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 621.0, "minX": 1.60385034E12, "maxY": 11191.0, "series": [{"data": [[1.60385112E12, 4075.0], [1.60385082E12, 11191.0], [1.60385052E12, 6218.0], [1.60385118E12, 4785.0], [1.6038504E12, 9314.0], [1.60385106E12, 3979.0], [1.60385076E12, 5895.0], [1.60385046E12, 6956.0], [1.60385064E12, 5316.0], [1.60385034E12, 5164.0], [1.603851E12, 4739.0], [1.6038507E12, 7086.0], [1.60385088E12, 6577.0], [1.60385058E12, 3769.0], [1.60385124E12, 6603.0], [1.60385094E12, 6081.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60385112E12, 824.0], [1.60385082E12, 725.8089992368222], [1.60385052E12, 765.2929989326], [1.60385118E12, 727.4399992465973], [1.6038504E12, 731.4499959349632], [1.60385106E12, 732.3559996461868], [1.60385076E12, 716.1139999175072], [1.60385046E12, 968.8999916315079], [1.60385064E12, 731.095999917984], [1.60385034E12, 927.0], [1.603851E12, 828.6399990558624], [1.6038507E12, 795.4519990873337], [1.60385088E12, 761.2239973449707], [1.60385058E12, 771.8799989700317], [1.60385124E12, 1285.1499987244606], [1.60385094E12, 759.266999913454]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60385112E12, 824.0], [1.60385082E12, 728.6899003052712], [1.60385052E12, 769.0586000776291], [1.60385118E12, 730.2840003013611], [1.6038504E12, 743.1380000591278], [1.60385106E12, 733.6916001415252], [1.60385076E12, 716.4254000329971], [1.60385046E12, 997.6625029444695], [1.60385064E12, 731.4056000328064], [1.60385034E12, 927.0], [1.603851E12, 831.6700003147125], [1.6038507E12, 798.8972003650665], [1.60385088E12, 771.2464010620117], [1.60385058E12, 775.7680004119873], [1.60385124E12, 1287.7116001224517], [1.60385094E12, 759.5937000346183]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60385112E12, 824.0], [1.60385082E12, 727.409499618411], [1.60385052E12, 767.5314994663], [1.60385118E12, 729.0199996232986], [1.6038504E12, 739.9749979674816], [1.60385106E12, 733.0979998230935], [1.60385076E12, 716.2869999587535], [1.60385046E12, 985.3124963194132], [1.60385064E12, 731.267999958992], [1.60385034E12, 927.0], [1.603851E12, 830.3499996066093], [1.6038507E12, 797.3659995436668], [1.60385088E12, 766.7919986724853], [1.60385058E12, 774.0399994850159], [1.60385124E12, 1287.1979998469353], [1.60385094E12, 759.448499956727]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60385112E12, 805.0], [1.60385082E12, 715.0], [1.60385052E12, 755.0], [1.60385118E12, 703.0], [1.6038504E12, 621.0], [1.60385106E12, 725.0], [1.60385076E12, 704.0], [1.60385046E12, 840.0], [1.60385064E12, 720.0], [1.60385034E12, 927.0], [1.603851E12, 815.0], [1.6038507E12, 778.0], [1.60385088E12, 741.0], [1.60385058E12, 741.0], [1.60385124E12, 1262.0], [1.60385094E12, 750.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60385112E12, 1951.0], [1.60385082E12, 2366.0], [1.60385052E12, 1506.5], [1.60385118E12, 1635.5], [1.6038504E12, 2064.0], [1.60385106E12, 1935.5], [1.60385076E12, 1929.0], [1.60385046E12, 1950.0], [1.60385064E12, 1996.0], [1.60385034E12, 2505.0], [1.603851E12, 2099.0], [1.6038507E12, 2051.0], [1.60385088E12, 1891.0], [1.60385058E12, 1980.0], [1.60385124E12, 2403.0], [1.60385094E12, 1747.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60385124E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 841.0, "minX": 1.0, "maxY": 2904.0, "series": [{"data": [[2.0, 2904.0], [8.0, 1638.0], [9.0, 1518.0], [10.0, 1216.0], [11.0, 985.0], [3.0, 2784.0], [12.0, 918.5], [13.0, 897.0], [14.0, 843.0], [15.0, 841.0], [4.0, 2422.0], [1.0, 2896.0], [5.0, 2225.5], [6.0, 2098.0], [7.0, 1929.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 15.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 840.0, "minX": 1.0, "maxY": 2900.0, "series": [{"data": [[2.0, 2900.0], [8.0, 1634.0], [9.0, 1517.0], [10.0, 1215.0], [11.0, 985.0], [3.0, 2774.0], [12.0, 918.5], [13.0, 896.5], [14.0, 843.0], [15.0, 840.0], [4.0, 2419.0], [1.0, 2892.5], [5.0, 2224.0], [6.0, 2096.0], [7.0, 1928.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 15.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1.7833333333333334, "minX": 1.60385034E12, "maxY": 6.766666666666667, "series": [{"data": [[1.60385112E12, 5.95], [1.60385082E12, 4.833333333333333], [1.60385052E12, 6.766666666666667], [1.60385118E12, 6.566666666666666], [1.6038504E12, 5.15], [1.60385106E12, 6.166666666666667], [1.60385076E12, 5.75], [1.60385046E12, 5.4], [1.60385064E12, 5.716666666666667], [1.60385034E12, 1.7833333333333334], [1.603851E12, 5.483333333333333], [1.6038507E12, 5.783333333333333], [1.60385088E12, 5.783333333333333], [1.60385058E12, 5.983333333333333], [1.60385124E12, 3.35], [1.60385094E12, 6.033333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60385124E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1.5833333333333333, "minX": 1.60385034E12, "maxY": 6.766666666666667, "series": [{"data": [[1.60385112E12, 5.95], [1.60385082E12, 4.833333333333333], [1.60385052E12, 6.766666666666667], [1.60385118E12, 6.566666666666666], [1.6038504E12, 5.15], [1.60385106E12, 6.166666666666667], [1.60385076E12, 5.75], [1.60385046E12, 5.4], [1.60385064E12, 5.716666666666667], [1.60385034E12, 1.5833333333333333], [1.603851E12, 5.483333333333333], [1.6038507E12, 5.783333333333333], [1.60385088E12, 5.783333333333333], [1.60385058E12, 5.983333333333333], [1.60385124E12, 3.55], [1.60385094E12, 6.033333333333333]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60385124E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.5833333333333333, "minX": 1.60385034E12, "maxY": 6.766666666666667, "series": [{"data": [[1.60385112E12, 5.95], [1.60385082E12, 4.833333333333333], [1.60385052E12, 6.766666666666667], [1.60385118E12, 6.566666666666666], [1.6038504E12, 5.15], [1.60385106E12, 6.166666666666667], [1.60385076E12, 5.75], [1.60385046E12, 5.4], [1.60385064E12, 5.716666666666667], [1.60385034E12, 1.5833333333333333], [1.603851E12, 5.483333333333333], [1.6038507E12, 5.783333333333333], [1.60385088E12, 5.783333333333333], [1.60385058E12, 5.983333333333333], [1.60385124E12, 3.55], [1.60385094E12, 6.033333333333333]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60385124E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.5833333333333333, "minX": 1.60385034E12, "maxY": 6.766666666666667, "series": [{"data": [[1.60385112E12, 5.95], [1.60385082E12, 4.833333333333333], [1.60385052E12, 6.766666666666667], [1.60385118E12, 6.566666666666666], [1.6038504E12, 5.15], [1.60385106E12, 6.166666666666667], [1.60385076E12, 5.75], [1.60385046E12, 5.4], [1.60385064E12, 5.716666666666667], [1.60385034E12, 1.5833333333333333], [1.603851E12, 5.483333333333333], [1.6038507E12, 5.783333333333333], [1.60385088E12, 5.783333333333333], [1.60385058E12, 5.983333333333333], [1.60385124E12, 3.55], [1.60385094E12, 6.033333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60385124E12, "title": "Total Transactions Per Second"}},
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

