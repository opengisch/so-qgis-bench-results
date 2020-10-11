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
        data: {"result": {"minY": 735.0, "minX": 0.0, "maxY": 8186.0, "series": [{"data": [[0.0, 735.0], [0.1, 749.0], [0.2, 758.0], [0.3, 763.0], [0.4, 770.0], [0.5, 774.0], [0.6, 780.0], [0.7, 782.0], [0.8, 786.0], [0.9, 788.0], [1.0, 791.0], [1.1, 793.0], [1.2, 796.0], [1.3, 800.0], [1.4, 804.0], [1.5, 804.0], [1.6, 807.0], [1.7, 809.0], [1.8, 810.0], [1.9, 811.0], [2.0, 815.0], [2.1, 817.0], [2.2, 820.0], [2.3, 821.0], [2.4, 822.0], [2.5, 824.0], [2.6, 825.0], [2.7, 827.0], [2.8, 828.0], [2.9, 829.0], [3.0, 831.0], [3.1, 832.0], [3.2, 834.0], [3.3, 835.0], [3.4, 838.0], [3.5, 839.0], [3.6, 841.0], [3.7, 843.0], [3.8, 843.0], [3.9, 844.0], [4.0, 846.0], [4.1, 847.0], [4.2, 849.0], [4.3, 850.0], [4.4, 853.0], [4.5, 855.0], [4.6, 857.0], [4.7, 858.0], [4.8, 860.0], [4.9, 861.0], [5.0, 862.0], [5.1, 864.0], [5.2, 865.0], [5.3, 867.0], [5.4, 869.0], [5.5, 870.0], [5.6, 872.0], [5.7, 873.0], [5.8, 875.0], [5.9, 877.0], [6.0, 878.0], [6.1, 879.0], [6.2, 880.0], [6.3, 881.0], [6.4, 882.0], [6.5, 884.0], [6.6, 885.0], [6.7, 886.0], [6.8, 887.0], [6.9, 889.0], [7.0, 890.0], [7.1, 892.0], [7.2, 893.0], [7.3, 893.0], [7.4, 895.0], [7.5, 896.0], [7.6, 897.0], [7.7, 899.0], [7.8, 901.0], [7.9, 903.0], [8.0, 905.0], [8.1, 906.0], [8.2, 907.0], [8.3, 909.0], [8.4, 912.0], [8.5, 915.0], [8.6, 916.0], [8.7, 917.0], [8.8, 918.0], [8.9, 919.0], [9.0, 923.0], [9.1, 926.0], [9.2, 928.0], [9.3, 931.0], [9.4, 932.0], [9.5, 935.0], [9.6, 936.0], [9.7, 939.0], [9.8, 941.0], [9.9, 944.0], [10.0, 947.0], [10.1, 952.0], [10.2, 955.0], [10.3, 957.0], [10.4, 959.0], [10.5, 961.0], [10.6, 964.0], [10.7, 967.0], [10.8, 971.0], [10.9, 975.0], [11.0, 979.0], [11.1, 987.0], [11.2, 992.0], [11.3, 995.0], [11.4, 999.0], [11.5, 1001.0], [11.6, 1006.0], [11.7, 1013.0], [11.8, 1016.0], [11.9, 1020.0], [12.0, 1024.0], [12.1, 1026.0], [12.2, 1031.0], [12.3, 1036.0], [12.4, 1038.0], [12.5, 1042.0], [12.6, 1043.0], [12.7, 1048.0], [12.8, 1051.0], [12.9, 1057.0], [13.0, 1059.0], [13.1, 1065.0], [13.2, 1068.0], [13.3, 1076.0], [13.4, 1082.0], [13.5, 1086.0], [13.6, 1090.0], [13.7, 1094.0], [13.8, 1101.0], [13.9, 1103.0], [14.0, 1106.0], [14.1, 1110.0], [14.2, 1113.0], [14.3, 1116.0], [14.4, 1119.0], [14.5, 1121.0], [14.6, 1123.0], [14.7, 1125.0], [14.8, 1126.0], [14.9, 1129.0], [15.0, 1132.0], [15.1, 1135.0], [15.2, 1138.0], [15.3, 1140.0], [15.4, 1142.0], [15.5, 1147.0], [15.6, 1150.0], [15.7, 1152.0], [15.8, 1155.0], [15.9, 1159.0], [16.0, 1164.0], [16.1, 1167.0], [16.2, 1169.0], [16.3, 1171.0], [16.4, 1172.0], [16.5, 1174.0], [16.6, 1176.0], [16.7, 1180.0], [16.8, 1181.0], [16.9, 1183.0], [17.0, 1185.0], [17.1, 1188.0], [17.2, 1194.0], [17.3, 1196.0], [17.4, 1203.0], [17.5, 1205.0], [17.6, 1207.0], [17.7, 1208.0], [17.8, 1210.0], [17.9, 1215.0], [18.0, 1216.0], [18.1, 1218.0], [18.2, 1220.0], [18.3, 1221.0], [18.4, 1223.0], [18.5, 1225.0], [18.6, 1229.0], [18.7, 1230.0], [18.8, 1234.0], [18.9, 1237.0], [19.0, 1240.0], [19.1, 1243.0], [19.2, 1245.0], [19.3, 1248.0], [19.4, 1252.0], [19.5, 1254.0], [19.6, 1256.0], [19.7, 1258.0], [19.8, 1260.0], [19.9, 1262.0], [20.0, 1263.0], [20.1, 1267.0], [20.2, 1270.0], [20.3, 1275.0], [20.4, 1277.0], [20.5, 1278.0], [20.6, 1283.0], [20.7, 1286.0], [20.8, 1289.0], [20.9, 1295.0], [21.0, 1300.0], [21.1, 1305.0], [21.2, 1307.0], [21.3, 1312.0], [21.4, 1316.0], [21.5, 1320.0], [21.6, 1323.0], [21.7, 1325.0], [21.8, 1329.0], [21.9, 1331.0], [22.0, 1335.0], [22.1, 1338.0], [22.2, 1340.0], [22.3, 1346.0], [22.4, 1351.0], [22.5, 1354.0], [22.6, 1358.0], [22.7, 1363.0], [22.8, 1364.0], [22.9, 1367.0], [23.0, 1372.0], [23.1, 1375.0], [23.2, 1379.0], [23.3, 1382.0], [23.4, 1385.0], [23.5, 1388.0], [23.6, 1390.0], [23.7, 1395.0], [23.8, 1399.0], [23.9, 1401.0], [24.0, 1406.0], [24.1, 1411.0], [24.2, 1415.0], [24.3, 1419.0], [24.4, 1422.0], [24.5, 1425.0], [24.6, 1426.0], [24.7, 1427.0], [24.8, 1430.0], [24.9, 1433.0], [25.0, 1436.0], [25.1, 1438.0], [25.2, 1443.0], [25.3, 1445.0], [25.4, 1448.0], [25.5, 1453.0], [25.6, 1457.0], [25.7, 1460.0], [25.8, 1463.0], [25.9, 1464.0], [26.0, 1471.0], [26.1, 1478.0], [26.2, 1481.0], [26.3, 1490.0], [26.4, 1492.0], [26.5, 1499.0], [26.6, 1504.0], [26.7, 1508.0], [26.8, 1511.0], [26.9, 1514.0], [27.0, 1516.0], [27.1, 1517.0], [27.2, 1518.0], [27.3, 1523.0], [27.4, 1525.0], [27.5, 1526.0], [27.6, 1529.0], [27.7, 1530.0], [27.8, 1531.0], [27.9, 1533.0], [28.0, 1538.0], [28.1, 1541.0], [28.2, 1543.0], [28.3, 1545.0], [28.4, 1548.0], [28.5, 1550.0], [28.6, 1551.0], [28.7, 1553.0], [28.8, 1554.0], [28.9, 1557.0], [29.0, 1559.0], [29.1, 1562.0], [29.2, 1564.0], [29.3, 1567.0], [29.4, 1568.0], [29.5, 1570.0], [29.6, 1571.0], [29.7, 1575.0], [29.8, 1577.0], [29.9, 1579.0], [30.0, 1581.0], [30.1, 1585.0], [30.2, 1589.0], [30.3, 1590.0], [30.4, 1594.0], [30.5, 1598.0], [30.6, 1601.0], [30.7, 1604.0], [30.8, 1606.0], [30.9, 1608.0], [31.0, 1612.0], [31.1, 1615.0], [31.2, 1618.0], [31.3, 1621.0], [31.4, 1623.0], [31.5, 1627.0], [31.6, 1630.0], [31.7, 1631.0], [31.8, 1634.0], [31.9, 1637.0], [32.0, 1639.0], [32.1, 1640.0], [32.2, 1645.0], [32.3, 1646.0], [32.4, 1649.0], [32.5, 1650.0], [32.6, 1653.0], [32.7, 1656.0], [32.8, 1658.0], [32.9, 1660.0], [33.0, 1661.0], [33.1, 1662.0], [33.2, 1664.0], [33.3, 1668.0], [33.4, 1670.0], [33.5, 1671.0], [33.6, 1673.0], [33.7, 1677.0], [33.8, 1678.0], [33.9, 1682.0], [34.0, 1688.0], [34.1, 1690.0], [34.2, 1692.0], [34.3, 1696.0], [34.4, 1698.0], [34.5, 1701.0], [34.6, 1704.0], [34.7, 1708.0], [34.8, 1710.0], [34.9, 1713.0], [35.0, 1714.0], [35.1, 1715.0], [35.2, 1717.0], [35.3, 1723.0], [35.4, 1726.0], [35.5, 1729.0], [35.6, 1731.0], [35.7, 1733.0], [35.8, 1737.0], [35.9, 1740.0], [36.0, 1743.0], [36.1, 1745.0], [36.2, 1747.0], [36.3, 1749.0], [36.4, 1754.0], [36.5, 1755.0], [36.6, 1757.0], [36.7, 1759.0], [36.8, 1761.0], [36.9, 1762.0], [37.0, 1764.0], [37.1, 1767.0], [37.2, 1768.0], [37.3, 1773.0], [37.4, 1775.0], [37.5, 1778.0], [37.6, 1779.0], [37.7, 1781.0], [37.8, 1783.0], [37.9, 1787.0], [38.0, 1788.0], [38.1, 1791.0], [38.2, 1793.0], [38.3, 1795.0], [38.4, 1797.0], [38.5, 1798.0], [38.6, 1801.0], [38.7, 1803.0], [38.8, 1806.0], [38.9, 1807.0], [39.0, 1810.0], [39.1, 1812.0], [39.2, 1815.0], [39.3, 1818.0], [39.4, 1820.0], [39.5, 1821.0], [39.6, 1823.0], [39.7, 1824.0], [39.8, 1826.0], [39.9, 1831.0], [40.0, 1832.0], [40.1, 1834.0], [40.2, 1837.0], [40.3, 1840.0], [40.4, 1842.0], [40.5, 1846.0], [40.6, 1849.0], [40.7, 1851.0], [40.8, 1852.0], [40.9, 1856.0], [41.0, 1858.0], [41.1, 1861.0], [41.2, 1862.0], [41.3, 1864.0], [41.4, 1865.0], [41.5, 1868.0], [41.6, 1869.0], [41.7, 1871.0], [41.8, 1874.0], [41.9, 1876.0], [42.0, 1877.0], [42.1, 1879.0], [42.2, 1883.0], [42.3, 1885.0], [42.4, 1886.0], [42.5, 1888.0], [42.6, 1890.0], [42.7, 1891.0], [42.8, 1892.0], [42.9, 1894.0], [43.0, 1895.0], [43.1, 1897.0], [43.2, 1901.0], [43.3, 1903.0], [43.4, 1909.0], [43.5, 1910.0], [43.6, 1912.0], [43.7, 1917.0], [43.8, 1919.0], [43.9, 1922.0], [44.0, 1925.0], [44.1, 1927.0], [44.2, 1931.0], [44.3, 1933.0], [44.4, 1937.0], [44.5, 1939.0], [44.6, 1940.0], [44.7, 1942.0], [44.8, 1944.0], [44.9, 1945.0], [45.0, 1947.0], [45.1, 1949.0], [45.2, 1952.0], [45.3, 1956.0], [45.4, 1958.0], [45.5, 1959.0], [45.6, 1962.0], [45.7, 1963.0], [45.8, 1965.0], [45.9, 1968.0], [46.0, 1970.0], [46.1, 1971.0], [46.2, 1972.0], [46.3, 1975.0], [46.4, 1978.0], [46.5, 1979.0], [46.6, 1981.0], [46.7, 1983.0], [46.8, 1986.0], [46.9, 1989.0], [47.0, 1991.0], [47.1, 1992.0], [47.2, 1993.0], [47.3, 1994.0], [47.4, 1995.0], [47.5, 1998.0], [47.6, 2001.0], [47.7, 2003.0], [47.8, 2005.0], [47.9, 2008.0], [48.0, 2012.0], [48.1, 2013.0], [48.2, 2015.0], [48.3, 2016.0], [48.4, 2017.0], [48.5, 2020.0], [48.6, 2022.0], [48.7, 2024.0], [48.8, 2027.0], [48.9, 2029.0], [49.0, 2034.0], [49.1, 2034.0], [49.2, 2037.0], [49.3, 2039.0], [49.4, 2040.0], [49.5, 2043.0], [49.6, 2046.0], [49.7, 2050.0], [49.8, 2052.0], [49.9, 2054.0], [50.0, 2055.0], [50.1, 2057.0], [50.2, 2059.0], [50.3, 2060.0], [50.4, 2062.0], [50.5, 2064.0], [50.6, 2066.0], [50.7, 2067.0], [50.8, 2069.0], [50.9, 2070.0], [51.0, 2070.0], [51.1, 2073.0], [51.2, 2074.0], [51.3, 2076.0], [51.4, 2077.0], [51.5, 2078.0], [51.6, 2080.0], [51.7, 2082.0], [51.8, 2085.0], [51.9, 2086.0], [52.0, 2088.0], [52.1, 2089.0], [52.2, 2090.0], [52.3, 2091.0], [52.4, 2093.0], [52.5, 2095.0], [52.6, 2096.0], [52.7, 2099.0], [52.8, 2100.0], [52.9, 2102.0], [53.0, 2105.0], [53.1, 2107.0], [53.2, 2109.0], [53.3, 2113.0], [53.4, 2114.0], [53.5, 2115.0], [53.6, 2119.0], [53.7, 2122.0], [53.8, 2124.0], [53.9, 2126.0], [54.0, 2129.0], [54.1, 2130.0], [54.2, 2131.0], [54.3, 2134.0], [54.4, 2135.0], [54.5, 2140.0], [54.6, 2142.0], [54.7, 2146.0], [54.8, 2149.0], [54.9, 2155.0], [55.0, 2156.0], [55.1, 2158.0], [55.2, 2160.0], [55.3, 2162.0], [55.4, 2165.0], [55.5, 2169.0], [55.6, 2174.0], [55.7, 2175.0], [55.8, 2176.0], [55.9, 2177.0], [56.0, 2180.0], [56.1, 2182.0], [56.2, 2183.0], [56.3, 2185.0], [56.4, 2190.0], [56.5, 2192.0], [56.6, 2195.0], [56.7, 2197.0], [56.8, 2201.0], [56.9, 2204.0], [57.0, 2206.0], [57.1, 2209.0], [57.2, 2212.0], [57.3, 2214.0], [57.4, 2216.0], [57.5, 2222.0], [57.6, 2225.0], [57.7, 2227.0], [57.8, 2230.0], [57.9, 2232.0], [58.0, 2233.0], [58.1, 2234.0], [58.2, 2237.0], [58.3, 2239.0], [58.4, 2242.0], [58.5, 2244.0], [58.6, 2245.0], [58.7, 2248.0], [58.8, 2250.0], [58.9, 2253.0], [59.0, 2255.0], [59.1, 2258.0], [59.2, 2260.0], [59.3, 2262.0], [59.4, 2265.0], [59.5, 2269.0], [59.6, 2272.0], [59.7, 2275.0], [59.8, 2276.0], [59.9, 2278.0], [60.0, 2281.0], [60.1, 2283.0], [60.2, 2286.0], [60.3, 2287.0], [60.4, 2294.0], [60.5, 2296.0], [60.6, 2300.0], [60.7, 2301.0], [60.8, 2307.0], [60.9, 2310.0], [61.0, 2313.0], [61.1, 2316.0], [61.2, 2318.0], [61.3, 2320.0], [61.4, 2321.0], [61.5, 2324.0], [61.6, 2328.0], [61.7, 2331.0], [61.8, 2334.0], [61.9, 2336.0], [62.0, 2337.0], [62.1, 2340.0], [62.2, 2343.0], [62.3, 2345.0], [62.4, 2349.0], [62.5, 2352.0], [62.6, 2354.0], [62.7, 2356.0], [62.8, 2359.0], [62.9, 2363.0], [63.0, 2364.0], [63.1, 2366.0], [63.2, 2369.0], [63.3, 2370.0], [63.4, 2373.0], [63.5, 2376.0], [63.6, 2379.0], [63.7, 2385.0], [63.8, 2387.0], [63.9, 2389.0], [64.0, 2392.0], [64.1, 2395.0], [64.2, 2397.0], [64.3, 2403.0], [64.4, 2405.0], [64.5, 2407.0], [64.6, 2407.0], [64.7, 2410.0], [64.8, 2413.0], [64.9, 2418.0], [65.0, 2421.0], [65.1, 2429.0], [65.2, 2430.0], [65.3, 2432.0], [65.4, 2435.0], [65.5, 2437.0], [65.6, 2439.0], [65.7, 2441.0], [65.8, 2446.0], [65.9, 2447.0], [66.0, 2450.0], [66.1, 2453.0], [66.2, 2454.0], [66.3, 2455.0], [66.4, 2458.0], [66.5, 2459.0], [66.6, 2463.0], [66.7, 2465.0], [66.8, 2469.0], [66.9, 2472.0], [67.0, 2473.0], [67.1, 2476.0], [67.2, 2477.0], [67.3, 2481.0], [67.4, 2483.0], [67.5, 2484.0], [67.6, 2487.0], [67.7, 2488.0], [67.8, 2490.0], [67.9, 2493.0], [68.0, 2497.0], [68.1, 2500.0], [68.2, 2502.0], [68.3, 2506.0], [68.4, 2510.0], [68.5, 2513.0], [68.6, 2517.0], [68.7, 2521.0], [68.8, 2524.0], [68.9, 2527.0], [69.0, 2530.0], [69.1, 2532.0], [69.2, 2536.0], [69.3, 2538.0], [69.4, 2540.0], [69.5, 2543.0], [69.6, 2544.0], [69.7, 2547.0], [69.8, 2549.0], [69.9, 2551.0], [70.0, 2552.0], [70.1, 2555.0], [70.2, 2556.0], [70.3, 2560.0], [70.4, 2563.0], [70.5, 2564.0], [70.6, 2569.0], [70.7, 2574.0], [70.8, 2575.0], [70.9, 2577.0], [71.0, 2580.0], [71.1, 2584.0], [71.2, 2586.0], [71.3, 2588.0], [71.4, 2593.0], [71.5, 2596.0], [71.6, 2599.0], [71.7, 2601.0], [71.8, 2604.0], [71.9, 2605.0], [72.0, 2606.0], [72.1, 2609.0], [72.2, 2617.0], [72.3, 2619.0], [72.4, 2628.0], [72.5, 2629.0], [72.6, 2631.0], [72.7, 2634.0], [72.8, 2636.0], [72.9, 2638.0], [73.0, 2642.0], [73.1, 2644.0], [73.2, 2647.0], [73.3, 2650.0], [73.4, 2653.0], [73.5, 2655.0], [73.6, 2658.0], [73.7, 2660.0], [73.8, 2663.0], [73.9, 2666.0], [74.0, 2671.0], [74.1, 2676.0], [74.2, 2679.0], [74.3, 2686.0], [74.4, 2689.0], [74.5, 2692.0], [74.6, 2696.0], [74.7, 2698.0], [74.8, 2703.0], [74.9, 2705.0], [75.0, 2707.0], [75.1, 2714.0], [75.2, 2717.0], [75.3, 2719.0], [75.4, 2723.0], [75.5, 2727.0], [75.6, 2733.0], [75.7, 2735.0], [75.8, 2742.0], [75.9, 2748.0], [76.0, 2752.0], [76.1, 2755.0], [76.2, 2757.0], [76.3, 2760.0], [76.4, 2766.0], [76.5, 2771.0], [76.6, 2772.0], [76.7, 2778.0], [76.8, 2781.0], [76.9, 2783.0], [77.0, 2787.0], [77.1, 2793.0], [77.2, 2798.0], [77.3, 2802.0], [77.4, 2807.0], [77.5, 2812.0], [77.6, 2816.0], [77.7, 2820.0], [77.8, 2823.0], [77.9, 2829.0], [78.0, 2835.0], [78.1, 2837.0], [78.2, 2840.0], [78.3, 2848.0], [78.4, 2850.0], [78.5, 2853.0], [78.6, 2857.0], [78.7, 2860.0], [78.8, 2864.0], [78.9, 2868.0], [79.0, 2871.0], [79.1, 2873.0], [79.2, 2875.0], [79.3, 2881.0], [79.4, 2884.0], [79.5, 2889.0], [79.6, 2892.0], [79.7, 2894.0], [79.8, 2899.0], [79.9, 2901.0], [80.0, 2903.0], [80.1, 2906.0], [80.2, 2909.0], [80.3, 2911.0], [80.4, 2917.0], [80.5, 2921.0], [80.6, 2923.0], [80.7, 2927.0], [80.8, 2928.0], [80.9, 2931.0], [81.0, 2932.0], [81.1, 2934.0], [81.2, 2939.0], [81.3, 2940.0], [81.4, 2945.0], [81.5, 2949.0], [81.6, 2952.0], [81.7, 2957.0], [81.8, 2961.0], [81.9, 2962.0], [82.0, 2966.0], [82.1, 2970.0], [82.2, 2977.0], [82.3, 2979.0], [82.4, 2981.0], [82.5, 2985.0], [82.6, 2986.0], [82.7, 2989.0], [82.8, 2994.0], [82.9, 2998.0], [83.0, 3004.0], [83.1, 3007.0], [83.2, 3011.0], [83.3, 3015.0], [83.4, 3022.0], [83.5, 3024.0], [83.6, 3033.0], [83.7, 3038.0], [83.8, 3044.0], [83.9, 3053.0], [84.0, 3056.0], [84.1, 3060.0], [84.2, 3067.0], [84.3, 3071.0], [84.4, 3077.0], [84.5, 3080.0], [84.6, 3087.0], [84.7, 3088.0], [84.8, 3094.0], [84.9, 3099.0], [85.0, 3111.0], [85.1, 3119.0], [85.2, 3123.0], [85.3, 3128.0], [85.4, 3132.0], [85.5, 3134.0], [85.6, 3138.0], [85.7, 3143.0], [85.8, 3156.0], [85.9, 3160.0], [86.0, 3163.0], [86.1, 3167.0], [86.2, 3171.0], [86.3, 3177.0], [86.4, 3182.0], [86.5, 3184.0], [86.6, 3189.0], [86.7, 3194.0], [86.8, 3202.0], [86.9, 3209.0], [87.0, 3217.0], [87.1, 3219.0], [87.2, 3222.0], [87.3, 3224.0], [87.4, 3228.0], [87.5, 3233.0], [87.6, 3245.0], [87.7, 3256.0], [87.8, 3260.0], [87.9, 3265.0], [88.0, 3273.0], [88.1, 3278.0], [88.2, 3285.0], [88.3, 3295.0], [88.4, 3302.0], [88.5, 3306.0], [88.6, 3309.0], [88.7, 3316.0], [88.8, 3319.0], [88.9, 3324.0], [89.0, 3331.0], [89.1, 3336.0], [89.2, 3341.0], [89.3, 3353.0], [89.4, 3357.0], [89.5, 3374.0], [89.6, 3379.0], [89.7, 3386.0], [89.8, 3395.0], [89.9, 3403.0], [90.0, 3411.0], [90.1, 3415.0], [90.2, 3418.0], [90.3, 3426.0], [90.4, 3432.0], [90.5, 3438.0], [90.6, 3448.0], [90.7, 3455.0], [90.8, 3457.0], [90.9, 3463.0], [91.0, 3471.0], [91.1, 3479.0], [91.2, 3483.0], [91.3, 3489.0], [91.4, 3491.0], [91.5, 3500.0], [91.6, 3508.0], [91.7, 3515.0], [91.8, 3519.0], [91.9, 3526.0], [92.0, 3535.0], [92.1, 3543.0], [92.2, 3549.0], [92.3, 3567.0], [92.4, 3571.0], [92.5, 3576.0], [92.6, 3581.0], [92.7, 3596.0], [92.8, 3600.0], [92.9, 3613.0], [93.0, 3632.0], [93.1, 3641.0], [93.2, 3655.0], [93.3, 3658.0], [93.4, 3670.0], [93.5, 3679.0], [93.6, 3697.0], [93.7, 3706.0], [93.8, 3713.0], [93.9, 3722.0], [94.0, 3732.0], [94.1, 3741.0], [94.2, 3757.0], [94.3, 3770.0], [94.4, 3776.0], [94.5, 3782.0], [94.6, 3796.0], [94.7, 3806.0], [94.8, 3823.0], [94.9, 3832.0], [95.0, 3845.0], [95.1, 3861.0], [95.2, 3880.0], [95.3, 3892.0], [95.4, 3905.0], [95.5, 3922.0], [95.6, 3934.0], [95.7, 3966.0], [95.8, 3987.0], [95.9, 4005.0], [96.0, 4036.0], [96.1, 4062.0], [96.2, 4081.0], [96.3, 4104.0], [96.4, 4130.0], [96.5, 4154.0], [96.6, 4176.0], [96.7, 4195.0], [96.8, 4211.0], [96.9, 4226.0], [97.0, 4271.0], [97.1, 4300.0], [97.2, 4331.0], [97.3, 4349.0], [97.4, 4390.0], [97.5, 4435.0], [97.6, 4481.0], [97.7, 4561.0], [97.8, 4605.0], [97.9, 4646.0], [98.0, 4694.0], [98.1, 4740.0], [98.2, 4793.0], [98.3, 4876.0], [98.4, 4957.0], [98.5, 5018.0], [98.6, 5109.0], [98.7, 5208.0], [98.8, 5275.0], [98.9, 5360.0], [99.0, 5518.0], [99.1, 5705.0], [99.2, 5721.0], [99.3, 6004.0], [99.4, 6148.0], [99.5, 6524.0], [99.6, 6873.0], [99.7, 7054.0], [99.8, 7514.0], [99.9, 7845.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 700.0, "maxY": 334.0, "series": [{"data": [[700.0, 66.0], [800.0, 334.0], [900.0, 192.0], [1000.0, 123.0], [1100.0, 185.0], [1200.0, 189.0], [1300.0, 148.0], [1400.0, 140.0], [1500.0, 208.0], [1600.0, 204.0], [1700.0, 210.0], [1800.0, 242.0], [1900.0, 228.0], [2000.0, 268.0], [2100.0, 209.0], [2200.0, 198.0], [2300.0, 192.0], [2400.0, 198.0], [2500.0, 183.0], [2600.0, 162.0], [2700.0, 129.0], [2800.0, 136.0], [2900.0, 161.0], [3000.0, 103.0], [3100.0, 93.0], [3300.0, 78.0], [3200.0, 85.0], [3400.0, 84.0], [3500.0, 67.0], [3600.0, 43.0], [3700.0, 55.0], [3800.0, 37.0], [3900.0, 25.0], [4000.0, 22.0], [4100.0, 23.0], [4200.0, 19.0], [4300.0, 18.0], [4400.0, 10.0], [4500.0, 6.0], [4600.0, 14.0], [4700.0, 11.0], [4800.0, 5.0], [4900.0, 9.0], [5100.0, 5.0], [5000.0, 5.0], [5300.0, 6.0], [5200.0, 6.0], [5400.0, 3.0], [5500.0, 6.0], [5700.0, 7.0], [5800.0, 1.0], [6000.0, 4.0], [5900.0, 2.0], [6100.0, 2.0], [6300.0, 4.0], [6500.0, 2.0], [6400.0, 1.0], [6600.0, 1.0], [6900.0, 3.0], [6800.0, 2.0], [6700.0, 1.0], [7100.0, 2.0], [7000.0, 3.0], [7300.0, 1.0], [7500.0, 2.0], [7800.0, 2.0], [7700.0, 2.0], [7900.0, 4.0], [8100.0, 1.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 8100.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 1377.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 3813.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1377.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 3813.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 11.5741935483871, "minX": 1.6023816E12, "maxY": 12.0, "series": [{"data": [[1.60238208E12, 12.0], [1.60238178E12, 12.0], [1.60238244E12, 12.0], [1.60238214E12, 12.0], [1.60238184E12, 12.0], [1.6023825E12, 12.0], [1.6023822E12, 12.0], [1.6023819E12, 12.0], [1.60238256E12, 11.5741935483871], [1.6023816E12, 12.0], [1.60238226E12, 12.0], [1.60238196E12, 12.0], [1.60238166E12, 12.0], [1.60238232E12, 12.0], [1.60238202E12, 12.0], [1.60238172E12, 12.0], [1.60238238E12, 12.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60238256E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 1859.0, "minX": 1.0, "maxY": 3614.0, "series": [{"data": [[8.0, 3251.0], [4.0, 2127.0], [2.0, 3614.0], [1.0, 3339.0], [9.0, 2126.0], [10.0, 2343.0], [5.0, 2485.0], [11.0, 2211.0], [12.0, 2169.877775632355], [6.0, 1859.0], [3.0, 3455.0], [7.0, 2042.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[11.987283236994216, 2170.837957610784]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 12.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 168.5, "minX": 1.6023816E12, "maxY": 2098818.6333333333, "series": [{"data": [[1.60238208E12, 1462989.7833333334], [1.60238178E12, 968876.8833333333], [1.60238244E12, 1470250.4], [1.60238214E12, 1522626.4833333334], [1.60238184E12, 2039740.9833333334], [1.6023825E12, 1478501.65], [1.6023822E12, 1357348.0166666666], [1.6023819E12, 1836785.3333333333], [1.60238256E12, 727607.3], [1.6023816E12, 150830.25], [1.60238226E12, 1027076.2], [1.60238196E12, 1531149.3], [1.60238166E12, 1636194.3], [1.60238232E12, 2098818.6333333333], [1.60238202E12, 1647387.6333333333], [1.60238172E12, 1455529.1666666667], [1.60238238E12, 1560626.2]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60238208E12, 2073.5666666666666], [1.60238178E12, 2757.95], [1.60238244E12, 2632.85], [1.60238214E12, 2159.5333333333333], [1.60238184E12, 2348.233333333333], [1.6023825E12, 2500.9333333333334], [1.6023822E12, 2079.9333333333334], [1.6023819E12, 2871.0833333333335], [1.60238256E12, 1166.0], [1.6023816E12, 168.5], [1.60238226E12, 2896.05], [1.60238196E12, 2376.1833333333334], [1.60238166E12, 2177.983333333333], [1.60238232E12, 2218.5666666666666], [1.60238202E12, 2785.616666666667], [1.60238172E12, 2360.383333333333], [1.60238238E12, 3003.9666666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60238256E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 1803.7178841309817, "minX": 1.6023816E12, "maxY": 2870.772727272727, "series": [{"data": [[1.60238208E12, 2623.0618181818177], [1.60238178E12, 1888.4397905759172], [1.60238244E12, 2113.30057803468], [1.60238214E12, 2337.3888888888887], [1.60238184E12, 2357.165584415585], [1.6023825E12, 2140.537764350452], [1.6023822E12, 2495.8385964912277], [1.6023819E12, 1865.7684210526322], [1.60238256E12, 2662.632258064516], [1.6023816E12, 2870.772727272727], [1.60238226E12, 1829.2357320099263], [1.60238196E12, 2343.7435897435894], [1.60238166E12, 2389.10264900662], [1.60238232E12, 2465.164948453608], [1.60238202E12, 1916.0487804878053], [1.60238172E12, 2197.496932515337], [1.60238238E12, 1803.7178841309817]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60238256E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 1802.34508816121, "minX": 1.6023816E12, "maxY": 2867.863636363636, "series": [{"data": [[1.60238208E12, 2620.774545454545], [1.60238178E12, 1887.2958115183255], [1.60238244E12, 2111.7745664739855], [1.60238214E12, 2335.281045751635], [1.60238184E12, 2354.2337662337654], [1.6023825E12, 2139.02416918429], [1.6023822E12, 2494.0631578947387], [1.6023819E12, 1863.7342105263165], [1.60238256E12, 2660.987096774195], [1.6023816E12, 2867.863636363636], [1.60238226E12, 1828.3598014888348], [1.60238196E12, 2341.6987179487182], [1.60238166E12, 2386.834437086093], [1.60238232E12, 2462.759450171822], [1.60238202E12, 1914.1869918699183], [1.60238172E12, 2195.579754601225], [1.60238238E12, 1802.34508816121]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60238256E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.018421052631578956, "minX": 1.6023816E12, "maxY": 6.136363636363637, "series": [{"data": [[1.60238208E12, 0.05090909090909094], [1.60238178E12, 0.03403141361256545], [1.60238244E12, 0.0346820809248555], [1.60238214E12, 0.04248366013071896], [1.60238184E12, 0.029220779220779217], [1.6023825E12, 0.030211480362537783], [1.6023822E12, 0.04561403508771931], [1.6023819E12, 0.018421052631578956], [1.60238256E12, 0.0774193548387097], [1.6023816E12, 6.136363636363637], [1.60238226E12, 0.029776674937965267], [1.60238196E12, 0.04487179487179483], [1.60238166E12, 0.0529801324503311], [1.60238232E12, 0.044673539518900365], [1.60238202E12, 0.021680216802168008], [1.60238172E12, 0.03680981595092024], [1.60238238E12, 0.03526448362720407]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60238256E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 735.0, "minX": 1.6023816E12, "maxY": 8186.0, "series": [{"data": [[1.60238208E12, 5721.0], [1.60238178E12, 5460.0], [1.60238244E12, 4646.0], [1.60238214E12, 8186.0], [1.60238184E12, 6083.0], [1.6023825E12, 6358.0], [1.6023822E12, 7091.0], [1.6023819E12, 6355.0], [1.60238256E12, 4621.0], [1.6023816E12, 5311.0], [1.60238226E12, 6009.0], [1.60238196E12, 4386.0], [1.60238166E12, 7845.0], [1.60238232E12, 4367.0], [1.60238202E12, 6524.0], [1.60238172E12, 7551.0], [1.60238238E12, 3664.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60238208E12, 1113.3559994077682], [1.60238178E12, 760.7879996347427], [1.60238244E12, 797.3529990899563], [1.60238214E12, 771.7629999268055], [1.60238184E12, 1059.5249981582165], [1.6023825E12, 758.987999920845], [1.6023822E12, 1148.5159976816178], [1.6023819E12, 806.4289999091625], [1.60238256E12, 1520.279997396469], [1.6023816E12, 1223.0], [1.60238226E12, 781.6359999036789], [1.60238196E12, 800.9869991791248], [1.60238166E12, 799.9969992053509], [1.60238232E12, 1036.7039952659607], [1.60238202E12, 750.9899997353554], [1.60238172E12, 962.8859998440743], [1.60238238E12, 786.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60238208E12, 1115.5916002368926], [1.60238178E12, 762.1668001461029], [1.60238244E12, 800.7883003640175], [1.60238214E12, 772.0], [1.60238184E12, 1066.0638005304336], [1.6023825E12, 764.4492006015778], [1.6023822E12, 1157.267600927353], [1.6023819E12, 806.771900036335], [1.60238256E12, 1530.1080010414123], [1.6023816E12, 1223.0], [1.60238226E12, 781.9996000385285], [1.60238196E12, 803.09870002985], [1.60238166E12, 802.9967003178597], [1.60238232E12, 1054.5744018936157], [1.60238202E12, 751.9890001058578], [1.60238172E12, 976.5261017775535], [1.60238238E12, 786.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60238208E12, 1114.5979997038842], [1.60238178E12, 761.5539998173714], [1.60238244E12, 799.2614995449782], [1.60238214E12, 771.9164999634028], [1.60238184E12, 1063.3874990791082], [1.6023825E12, 761.9259992480278], [1.6023822E12, 1153.377998840809], [1.6023819E12, 806.6194999545812], [1.60238256E12, 1525.7399986982346], [1.6023816E12, 1223.0], [1.60238226E12, 781.8379999518395], [1.60238196E12, 802.7084995895624], [1.60238166E12, 801.6634996026754], [1.60238232E12, 1046.6319976329803], [1.60238202E12, 751.5449998676777], [1.60238172E12, 969.070497778058], [1.60238238E12, 786.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60238208E12, 1031.0], [1.60238178E12, 745.0], [1.60238244E12, 784.0], [1.60238214E12, 768.0], [1.60238184E12, 1007.0], [1.6023825E12, 747.0], [1.6023822E12, 1066.0], [1.6023819E12, 781.0], [1.60238256E12, 1492.0], [1.6023816E12, 1223.0], [1.60238226E12, 743.0], [1.60238196E12, 788.0], [1.60238166E12, 775.0], [1.60238232E12, 915.0], [1.60238202E12, 735.0], [1.60238172E12, 897.0], [1.60238238E12, 753.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60238208E12, 2487.0], [1.60238178E12, 1587.5], [1.60238244E12, 2094.5], [1.60238214E12, 2134.0], [1.60238184E12, 2133.0], [1.6023825E12, 2067.0], [1.6023822E12, 2040.0], [1.6023819E12, 1753.0], [1.60238256E12, 2559.0], [1.6023816E12, 2859.5], [1.60238226E12, 1696.0], [1.60238196E12, 2392.0], [1.60238166E12, 2246.5], [1.60238232E12, 2476.0], [1.60238202E12, 1861.0], [1.60238172E12, 1980.0], [1.60238238E12, 1690.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60238256E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 841.0, "minX": 1.0, "maxY": 3327.5, "series": [{"data": [[2.0, 3152.0], [8.0, 1714.0], [9.0, 1565.0], [10.0, 1044.0], [11.0, 975.0], [3.0, 2730.0], [12.0, 903.5], [13.0, 888.0], [14.0, 864.0], [15.0, 841.0], [1.0, 3327.5], [4.0, 2529.5], [16.0, 886.5], [5.0, 2286.0], [6.0, 2134.0], [7.0, 1987.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 16.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 841.0, "minX": 1.0, "maxY": 3321.5, "series": [{"data": [[2.0, 3145.0], [8.0, 1714.0], [9.0, 1564.0], [10.0, 1043.5], [11.0, 974.0], [3.0, 2727.0], [12.0, 903.5], [13.0, 887.0], [14.0, 863.5], [15.0, 841.0], [1.0, 3321.5], [4.0, 2527.0], [16.0, 886.5], [5.0, 2285.0], [6.0, 2133.5], [7.0, 1984.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 16.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.5666666666666667, "minX": 1.6023816E12, "maxY": 6.716666666666667, "series": [{"data": [[1.60238208E12, 4.583333333333333], [1.60238178E12, 6.366666666666666], [1.60238244E12, 5.766666666666667], [1.60238214E12, 5.1], [1.60238184E12, 5.133333333333334], [1.6023825E12, 5.516666666666667], [1.6023822E12, 4.75], [1.6023819E12, 6.333333333333333], [1.60238256E12, 2.3833333333333333], [1.6023816E12, 0.5666666666666667], [1.60238226E12, 6.716666666666667], [1.60238196E12, 5.2], [1.60238166E12, 5.033333333333333], [1.60238232E12, 4.85], [1.60238202E12, 6.15], [1.60238172E12, 5.433333333333334], [1.60238238E12, 6.616666666666666]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60238256E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.36666666666666664, "minX": 1.6023816E12, "maxY": 6.716666666666667, "series": [{"data": [[1.60238208E12, 4.583333333333333], [1.60238178E12, 6.366666666666666], [1.60238244E12, 5.766666666666667], [1.60238214E12, 5.1], [1.60238184E12, 5.133333333333334], [1.6023825E12, 5.516666666666667], [1.6023822E12, 4.75], [1.6023819E12, 6.333333333333333], [1.60238256E12, 2.5833333333333335], [1.6023816E12, 0.36666666666666664], [1.60238226E12, 6.716666666666667], [1.60238196E12, 5.2], [1.60238166E12, 5.033333333333333], [1.60238232E12, 4.85], [1.60238202E12, 6.15], [1.60238172E12, 5.433333333333334], [1.60238238E12, 6.616666666666666]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60238256E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.36666666666666664, "minX": 1.6023816E12, "maxY": 6.716666666666667, "series": [{"data": [[1.60238208E12, 4.583333333333333], [1.60238178E12, 6.366666666666666], [1.60238244E12, 5.766666666666667], [1.60238214E12, 5.1], [1.60238184E12, 5.133333333333334], [1.6023825E12, 5.516666666666667], [1.6023822E12, 4.75], [1.6023819E12, 6.333333333333333], [1.60238256E12, 2.5833333333333335], [1.6023816E12, 0.36666666666666664], [1.60238226E12, 6.716666666666667], [1.60238196E12, 5.2], [1.60238166E12, 5.033333333333333], [1.60238232E12, 4.85], [1.60238202E12, 6.15], [1.60238172E12, 5.433333333333334], [1.60238238E12, 6.616666666666666]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60238256E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.36666666666666664, "minX": 1.6023816E12, "maxY": 6.716666666666667, "series": [{"data": [[1.60238208E12, 4.583333333333333], [1.60238178E12, 6.366666666666666], [1.60238244E12, 5.766666666666667], [1.60238214E12, 5.1], [1.60238184E12, 5.133333333333334], [1.6023825E12, 5.516666666666667], [1.6023822E12, 4.75], [1.6023819E12, 6.333333333333333], [1.60238256E12, 2.5833333333333335], [1.6023816E12, 0.36666666666666664], [1.60238226E12, 6.716666666666667], [1.60238196E12, 5.2], [1.60238166E12, 5.033333333333333], [1.60238232E12, 4.85], [1.60238202E12, 6.15], [1.60238172E12, 5.433333333333334], [1.60238238E12, 6.616666666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60238256E12, "title": "Total Transactions Per Second"}},
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

