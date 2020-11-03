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
        data: {"result": {"minY": 399.0, "minX": 0.0, "maxY": 9047.0, "series": [{"data": [[0.0, 399.0], [0.1, 642.0], [0.2, 732.0], [0.3, 747.0], [0.4, 751.0], [0.5, 758.0], [0.6, 767.0], [0.7, 770.0], [0.8, 774.0], [0.9, 776.0], [1.0, 777.0], [1.1, 786.0], [1.2, 788.0], [1.3, 789.0], [1.4, 792.0], [1.5, 794.0], [1.6, 797.0], [1.7, 800.0], [1.8, 803.0], [1.9, 807.0], [2.0, 812.0], [2.1, 814.0], [2.2, 817.0], [2.3, 820.0], [2.4, 822.0], [2.5, 823.0], [2.6, 825.0], [2.7, 829.0], [2.8, 831.0], [2.9, 837.0], [3.0, 839.0], [3.1, 841.0], [3.2, 844.0], [3.3, 846.0], [3.4, 847.0], [3.5, 849.0], [3.6, 852.0], [3.7, 853.0], [3.8, 855.0], [3.9, 856.0], [4.0, 858.0], [4.1, 859.0], [4.2, 860.0], [4.3, 862.0], [4.4, 863.0], [4.5, 864.0], [4.6, 865.0], [4.7, 867.0], [4.8, 868.0], [4.9, 870.0], [5.0, 872.0], [5.1, 874.0], [5.2, 875.0], [5.3, 877.0], [5.4, 878.0], [5.5, 879.0], [5.6, 880.0], [5.7, 881.0], [5.8, 882.0], [5.9, 883.0], [6.0, 885.0], [6.1, 887.0], [6.2, 888.0], [6.3, 890.0], [6.4, 893.0], [6.5, 895.0], [6.6, 898.0], [6.7, 900.0], [6.8, 902.0], [6.9, 904.0], [7.0, 906.0], [7.1, 908.0], [7.2, 909.0], [7.3, 911.0], [7.4, 915.0], [7.5, 916.0], [7.6, 917.0], [7.7, 919.0], [7.8, 923.0], [7.9, 925.0], [8.0, 927.0], [8.1, 928.0], [8.2, 931.0], [8.3, 932.0], [8.4, 935.0], [8.5, 940.0], [8.6, 941.0], [8.7, 943.0], [8.8, 944.0], [8.9, 946.0], [9.0, 947.0], [9.1, 949.0], [9.2, 951.0], [9.3, 953.0], [9.4, 954.0], [9.5, 956.0], [9.6, 959.0], [9.7, 962.0], [9.8, 964.0], [9.9, 967.0], [10.0, 968.0], [10.1, 969.0], [10.2, 971.0], [10.3, 973.0], [10.4, 975.0], [10.5, 979.0], [10.6, 984.0], [10.7, 988.0], [10.8, 992.0], [10.9, 994.0], [11.0, 998.0], [11.1, 1002.0], [11.2, 1007.0], [11.3, 1012.0], [11.4, 1015.0], [11.5, 1018.0], [11.6, 1021.0], [11.7, 1023.0], [11.8, 1026.0], [11.9, 1027.0], [12.0, 1030.0], [12.1, 1035.0], [12.2, 1041.0], [12.3, 1043.0], [12.4, 1049.0], [12.5, 1053.0], [12.6, 1059.0], [12.7, 1062.0], [12.8, 1064.0], [12.9, 1069.0], [13.0, 1077.0], [13.1, 1084.0], [13.2, 1092.0], [13.3, 1096.0], [13.4, 1100.0], [13.5, 1106.0], [13.6, 1109.0], [13.7, 1114.0], [13.8, 1117.0], [13.9, 1123.0], [14.0, 1127.0], [14.1, 1130.0], [14.2, 1132.0], [14.3, 1136.0], [14.4, 1141.0], [14.5, 1146.0], [14.6, 1152.0], [14.7, 1156.0], [14.8, 1160.0], [14.9, 1162.0], [15.0, 1164.0], [15.1, 1167.0], [15.2, 1168.0], [15.3, 1170.0], [15.4, 1172.0], [15.5, 1176.0], [15.6, 1178.0], [15.7, 1181.0], [15.8, 1184.0], [15.9, 1186.0], [16.0, 1188.0], [16.1, 1191.0], [16.2, 1195.0], [16.3, 1197.0], [16.4, 1199.0], [16.5, 1200.0], [16.6, 1203.0], [16.7, 1206.0], [16.8, 1209.0], [16.9, 1212.0], [17.0, 1213.0], [17.1, 1215.0], [17.2, 1218.0], [17.3, 1219.0], [17.4, 1223.0], [17.5, 1224.0], [17.6, 1227.0], [17.7, 1230.0], [17.8, 1233.0], [17.9, 1236.0], [18.0, 1239.0], [18.1, 1240.0], [18.2, 1244.0], [18.3, 1247.0], [18.4, 1251.0], [18.5, 1255.0], [18.6, 1257.0], [18.7, 1259.0], [18.8, 1262.0], [18.9, 1265.0], [19.0, 1267.0], [19.1, 1269.0], [19.2, 1273.0], [19.3, 1277.0], [19.4, 1280.0], [19.5, 1285.0], [19.6, 1290.0], [19.7, 1292.0], [19.8, 1295.0], [19.9, 1297.0], [20.0, 1299.0], [20.1, 1300.0], [20.2, 1304.0], [20.3, 1308.0], [20.4, 1313.0], [20.5, 1314.0], [20.6, 1317.0], [20.7, 1320.0], [20.8, 1324.0], [20.9, 1329.0], [21.0, 1332.0], [21.1, 1334.0], [21.2, 1338.0], [21.3, 1341.0], [21.4, 1344.0], [21.5, 1348.0], [21.6, 1354.0], [21.7, 1357.0], [21.8, 1358.0], [21.9, 1361.0], [22.0, 1365.0], [22.1, 1368.0], [22.2, 1370.0], [22.3, 1370.0], [22.4, 1374.0], [22.5, 1376.0], [22.6, 1382.0], [22.7, 1383.0], [22.8, 1385.0], [22.9, 1386.0], [23.0, 1388.0], [23.1, 1392.0], [23.2, 1396.0], [23.3, 1399.0], [23.4, 1400.0], [23.5, 1403.0], [23.6, 1404.0], [23.7, 1406.0], [23.8, 1407.0], [23.9, 1410.0], [24.0, 1413.0], [24.1, 1419.0], [24.2, 1420.0], [24.3, 1423.0], [24.4, 1425.0], [24.5, 1426.0], [24.6, 1428.0], [24.7, 1431.0], [24.8, 1432.0], [24.9, 1435.0], [25.0, 1437.0], [25.1, 1439.0], [25.2, 1441.0], [25.3, 1443.0], [25.4, 1445.0], [25.5, 1448.0], [25.6, 1450.0], [25.7, 1452.0], [25.8, 1455.0], [25.9, 1457.0], [26.0, 1459.0], [26.1, 1461.0], [26.2, 1467.0], [26.3, 1471.0], [26.4, 1476.0], [26.5, 1479.0], [26.6, 1481.0], [26.7, 1482.0], [26.8, 1483.0], [26.9, 1487.0], [27.0, 1489.0], [27.1, 1493.0], [27.2, 1494.0], [27.3, 1496.0], [27.4, 1499.0], [27.5, 1501.0], [27.6, 1504.0], [27.7, 1505.0], [27.8, 1507.0], [27.9, 1509.0], [28.0, 1513.0], [28.1, 1515.0], [28.2, 1518.0], [28.3, 1524.0], [28.4, 1525.0], [28.5, 1530.0], [28.6, 1532.0], [28.7, 1536.0], [28.8, 1537.0], [28.9, 1539.0], [29.0, 1542.0], [29.1, 1545.0], [29.2, 1549.0], [29.3, 1550.0], [29.4, 1552.0], [29.5, 1555.0], [29.6, 1558.0], [29.7, 1561.0], [29.8, 1562.0], [29.9, 1565.0], [30.0, 1567.0], [30.1, 1570.0], [30.2, 1573.0], [30.3, 1576.0], [30.4, 1577.0], [30.5, 1581.0], [30.6, 1583.0], [30.7, 1585.0], [30.8, 1589.0], [30.9, 1592.0], [31.0, 1592.0], [31.1, 1594.0], [31.2, 1595.0], [31.3, 1598.0], [31.4, 1602.0], [31.5, 1605.0], [31.6, 1610.0], [31.7, 1613.0], [31.8, 1614.0], [31.9, 1615.0], [32.0, 1619.0], [32.1, 1623.0], [32.2, 1624.0], [32.3, 1626.0], [32.4, 1629.0], [32.5, 1630.0], [32.6, 1635.0], [32.7, 1641.0], [32.8, 1643.0], [32.9, 1646.0], [33.0, 1647.0], [33.1, 1650.0], [33.2, 1656.0], [33.3, 1660.0], [33.4, 1661.0], [33.5, 1663.0], [33.6, 1664.0], [33.7, 1668.0], [33.8, 1671.0], [33.9, 1673.0], [34.0, 1675.0], [34.1, 1677.0], [34.2, 1679.0], [34.3, 1680.0], [34.4, 1682.0], [34.5, 1683.0], [34.6, 1685.0], [34.7, 1688.0], [34.8, 1693.0], [34.9, 1695.0], [35.0, 1696.0], [35.1, 1698.0], [35.2, 1700.0], [35.3, 1700.0], [35.4, 1703.0], [35.5, 1706.0], [35.6, 1708.0], [35.7, 1711.0], [35.8, 1714.0], [35.9, 1718.0], [36.0, 1718.0], [36.1, 1721.0], [36.2, 1723.0], [36.3, 1723.0], [36.4, 1725.0], [36.5, 1728.0], [36.6, 1729.0], [36.7, 1731.0], [36.8, 1732.0], [36.9, 1736.0], [37.0, 1739.0], [37.1, 1742.0], [37.2, 1744.0], [37.3, 1746.0], [37.4, 1749.0], [37.5, 1751.0], [37.6, 1754.0], [37.7, 1758.0], [37.8, 1759.0], [37.9, 1760.0], [38.0, 1761.0], [38.1, 1764.0], [38.2, 1766.0], [38.3, 1768.0], [38.4, 1771.0], [38.5, 1775.0], [38.6, 1776.0], [38.7, 1779.0], [38.8, 1780.0], [38.9, 1781.0], [39.0, 1782.0], [39.1, 1783.0], [39.2, 1786.0], [39.3, 1787.0], [39.4, 1790.0], [39.5, 1791.0], [39.6, 1793.0], [39.7, 1795.0], [39.8, 1797.0], [39.9, 1800.0], [40.0, 1803.0], [40.1, 1804.0], [40.2, 1807.0], [40.3, 1808.0], [40.4, 1810.0], [40.5, 1811.0], [40.6, 1814.0], [40.7, 1817.0], [40.8, 1819.0], [40.9, 1820.0], [41.0, 1823.0], [41.1, 1825.0], [41.2, 1828.0], [41.3, 1830.0], [41.4, 1832.0], [41.5, 1833.0], [41.6, 1840.0], [41.7, 1841.0], [41.8, 1843.0], [41.9, 1844.0], [42.0, 1847.0], [42.1, 1849.0], [42.2, 1850.0], [42.3, 1851.0], [42.4, 1855.0], [42.5, 1856.0], [42.6, 1858.0], [42.7, 1860.0], [42.8, 1861.0], [42.9, 1865.0], [43.0, 1866.0], [43.1, 1867.0], [43.2, 1868.0], [43.3, 1870.0], [43.4, 1873.0], [43.5, 1874.0], [43.6, 1874.0], [43.7, 1877.0], [43.8, 1881.0], [43.9, 1881.0], [44.0, 1883.0], [44.1, 1886.0], [44.2, 1888.0], [44.3, 1890.0], [44.4, 1892.0], [44.5, 1894.0], [44.6, 1895.0], [44.7, 1897.0], [44.8, 1898.0], [44.9, 1901.0], [45.0, 1903.0], [45.1, 1904.0], [45.2, 1907.0], [45.3, 1909.0], [45.4, 1911.0], [45.5, 1912.0], [45.6, 1912.0], [45.7, 1913.0], [45.8, 1915.0], [45.9, 1916.0], [46.0, 1917.0], [46.1, 1918.0], [46.2, 1921.0], [46.3, 1922.0], [46.4, 1924.0], [46.5, 1925.0], [46.6, 1927.0], [46.7, 1928.0], [46.8, 1929.0], [46.9, 1931.0], [47.0, 1932.0], [47.1, 1933.0], [47.2, 1935.0], [47.3, 1937.0], [47.4, 1939.0], [47.5, 1940.0], [47.6, 1941.0], [47.7, 1943.0], [47.8, 1943.0], [47.9, 1945.0], [48.0, 1947.0], [48.1, 1947.0], [48.2, 1948.0], [48.3, 1949.0], [48.4, 1950.0], [48.5, 1951.0], [48.6, 1952.0], [48.7, 1953.0], [48.8, 1954.0], [48.9, 1955.0], [49.0, 1957.0], [49.1, 1960.0], [49.2, 1961.0], [49.3, 1963.0], [49.4, 1966.0], [49.5, 1967.0], [49.6, 1968.0], [49.7, 1969.0], [49.8, 1970.0], [49.9, 1971.0], [50.0, 1972.0], [50.1, 1973.0], [50.2, 1975.0], [50.3, 1977.0], [50.4, 1978.0], [50.5, 1980.0], [50.6, 1983.0], [50.7, 1984.0], [50.8, 1986.0], [50.9, 1989.0], [51.0, 1990.0], [51.1, 1995.0], [51.2, 1998.0], [51.3, 1999.0], [51.4, 1999.0], [51.5, 2001.0], [51.6, 2002.0], [51.7, 2003.0], [51.8, 2005.0], [51.9, 2007.0], [52.0, 2007.0], [52.1, 2010.0], [52.2, 2013.0], [52.3, 2014.0], [52.4, 2016.0], [52.5, 2016.0], [52.6, 2019.0], [52.7, 2023.0], [52.8, 2025.0], [52.9, 2026.0], [53.0, 2027.0], [53.1, 2029.0], [53.2, 2031.0], [53.3, 2032.0], [53.4, 2033.0], [53.5, 2034.0], [53.6, 2036.0], [53.7, 2039.0], [53.8, 2042.0], [53.9, 2044.0], [54.0, 2045.0], [54.1, 2047.0], [54.2, 2049.0], [54.3, 2051.0], [54.4, 2053.0], [54.5, 2055.0], [54.6, 2056.0], [54.7, 2058.0], [54.8, 2059.0], [54.9, 2060.0], [55.0, 2061.0], [55.1, 2062.0], [55.2, 2064.0], [55.3, 2066.0], [55.4, 2068.0], [55.5, 2069.0], [55.6, 2070.0], [55.7, 2073.0], [55.8, 2074.0], [55.9, 2075.0], [56.0, 2078.0], [56.1, 2080.0], [56.2, 2082.0], [56.3, 2084.0], [56.4, 2086.0], [56.5, 2090.0], [56.6, 2090.0], [56.7, 2091.0], [56.8, 2092.0], [56.9, 2094.0], [57.0, 2096.0], [57.1, 2099.0], [57.2, 2102.0], [57.3, 2103.0], [57.4, 2105.0], [57.5, 2107.0], [57.6, 2109.0], [57.7, 2111.0], [57.8, 2115.0], [57.9, 2117.0], [58.0, 2119.0], [58.1, 2122.0], [58.2, 2124.0], [58.3, 2126.0], [58.4, 2128.0], [58.5, 2131.0], [58.6, 2132.0], [58.7, 2134.0], [58.8, 2138.0], [58.9, 2141.0], [59.0, 2143.0], [59.1, 2145.0], [59.2, 2147.0], [59.3, 2149.0], [59.4, 2150.0], [59.5, 2158.0], [59.6, 2159.0], [59.7, 2163.0], [59.8, 2164.0], [59.9, 2167.0], [60.0, 2170.0], [60.1, 2173.0], [60.2, 2175.0], [60.3, 2177.0], [60.4, 2179.0], [60.5, 2180.0], [60.6, 2183.0], [60.7, 2186.0], [60.8, 2188.0], [60.9, 2191.0], [61.0, 2194.0], [61.1, 2198.0], [61.2, 2201.0], [61.3, 2203.0], [61.4, 2204.0], [61.5, 2207.0], [61.6, 2210.0], [61.7, 2212.0], [61.8, 2214.0], [61.9, 2215.0], [62.0, 2218.0], [62.1, 2219.0], [62.2, 2221.0], [62.3, 2223.0], [62.4, 2225.0], [62.5, 2228.0], [62.6, 2229.0], [62.7, 2232.0], [62.8, 2233.0], [62.9, 2236.0], [63.0, 2240.0], [63.1, 2242.0], [63.2, 2247.0], [63.3, 2249.0], [63.4, 2255.0], [63.5, 2259.0], [63.6, 2263.0], [63.7, 2267.0], [63.8, 2270.0], [63.9, 2274.0], [64.0, 2275.0], [64.1, 2280.0], [64.2, 2283.0], [64.3, 2289.0], [64.4, 2294.0], [64.5, 2297.0], [64.6, 2301.0], [64.7, 2304.0], [64.8, 2306.0], [64.9, 2308.0], [65.0, 2310.0], [65.1, 2312.0], [65.2, 2316.0], [65.3, 2318.0], [65.4, 2322.0], [65.5, 2325.0], [65.6, 2326.0], [65.7, 2330.0], [65.8, 2333.0], [65.9, 2338.0], [66.0, 2343.0], [66.1, 2348.0], [66.2, 2350.0], [66.3, 2354.0], [66.4, 2357.0], [66.5, 2359.0], [66.6, 2363.0], [66.7, 2364.0], [66.8, 2367.0], [66.9, 2370.0], [67.0, 2372.0], [67.1, 2375.0], [67.2, 2378.0], [67.3, 2380.0], [67.4, 2383.0], [67.5, 2385.0], [67.6, 2386.0], [67.7, 2388.0], [67.8, 2391.0], [67.9, 2394.0], [68.0, 2396.0], [68.1, 2397.0], [68.2, 2399.0], [68.3, 2402.0], [68.4, 2404.0], [68.5, 2407.0], [68.6, 2410.0], [68.7, 2411.0], [68.8, 2413.0], [68.9, 2416.0], [69.0, 2418.0], [69.1, 2419.0], [69.2, 2424.0], [69.3, 2430.0], [69.4, 2433.0], [69.5, 2437.0], [69.6, 2438.0], [69.7, 2442.0], [69.8, 2445.0], [69.9, 2447.0], [70.0, 2452.0], [70.1, 2453.0], [70.2, 2457.0], [70.3, 2459.0], [70.4, 2462.0], [70.5, 2467.0], [70.6, 2468.0], [70.7, 2473.0], [70.8, 2476.0], [70.9, 2478.0], [71.0, 2480.0], [71.1, 2482.0], [71.2, 2484.0], [71.3, 2488.0], [71.4, 2492.0], [71.5, 2494.0], [71.6, 2497.0], [71.7, 2499.0], [71.8, 2501.0], [71.9, 2505.0], [72.0, 2508.0], [72.1, 2514.0], [72.2, 2518.0], [72.3, 2522.0], [72.4, 2524.0], [72.5, 2528.0], [72.6, 2530.0], [72.7, 2534.0], [72.8, 2537.0], [72.9, 2542.0], [73.0, 2545.0], [73.1, 2548.0], [73.2, 2549.0], [73.3, 2553.0], [73.4, 2556.0], [73.5, 2559.0], [73.6, 2561.0], [73.7, 2564.0], [73.8, 2566.0], [73.9, 2569.0], [74.0, 2577.0], [74.1, 2580.0], [74.2, 2583.0], [74.3, 2586.0], [74.4, 2588.0], [74.5, 2591.0], [74.6, 2593.0], [74.7, 2596.0], [74.8, 2601.0], [74.9, 2603.0], [75.0, 2607.0], [75.1, 2608.0], [75.2, 2614.0], [75.3, 2617.0], [75.4, 2620.0], [75.5, 2624.0], [75.6, 2628.0], [75.7, 2629.0], [75.8, 2636.0], [75.9, 2640.0], [76.0, 2642.0], [76.1, 2644.0], [76.2, 2645.0], [76.3, 2647.0], [76.4, 2651.0], [76.5, 2653.0], [76.6, 2657.0], [76.7, 2665.0], [76.8, 2668.0], [76.9, 2673.0], [77.0, 2676.0], [77.1, 2678.0], [77.2, 2684.0], [77.3, 2688.0], [77.4, 2690.0], [77.5, 2696.0], [77.6, 2699.0], [77.7, 2702.0], [77.8, 2706.0], [77.9, 2711.0], [78.0, 2713.0], [78.1, 2715.0], [78.2, 2716.0], [78.3, 2720.0], [78.4, 2723.0], [78.5, 2727.0], [78.6, 2731.0], [78.7, 2734.0], [78.8, 2736.0], [78.9, 2738.0], [79.0, 2739.0], [79.1, 2742.0], [79.2, 2744.0], [79.3, 2750.0], [79.4, 2751.0], [79.5, 2758.0], [79.6, 2760.0], [79.7, 2765.0], [79.8, 2770.0], [79.9, 2773.0], [80.0, 2779.0], [80.1, 2782.0], [80.2, 2785.0], [80.3, 2790.0], [80.4, 2791.0], [80.5, 2792.0], [80.6, 2795.0], [80.7, 2797.0], [80.8, 2803.0], [80.9, 2805.0], [81.0, 2809.0], [81.1, 2815.0], [81.2, 2816.0], [81.3, 2819.0], [81.4, 2820.0], [81.5, 2825.0], [81.6, 2828.0], [81.7, 2829.0], [81.8, 2832.0], [81.9, 2837.0], [82.0, 2840.0], [82.1, 2842.0], [82.2, 2845.0], [82.3, 2846.0], [82.4, 2852.0], [82.5, 2854.0], [82.6, 2859.0], [82.7, 2865.0], [82.8, 2866.0], [82.9, 2870.0], [83.0, 2874.0], [83.1, 2879.0], [83.2, 2883.0], [83.3, 2885.0], [83.4, 2888.0], [83.5, 2895.0], [83.6, 2898.0], [83.7, 2901.0], [83.8, 2905.0], [83.9, 2908.0], [84.0, 2912.0], [84.1, 2915.0], [84.2, 2920.0], [84.3, 2925.0], [84.4, 2929.0], [84.5, 2934.0], [84.6, 2938.0], [84.7, 2942.0], [84.8, 2947.0], [84.9, 2952.0], [85.0, 2955.0], [85.1, 2959.0], [85.2, 2967.0], [85.3, 2973.0], [85.4, 2977.0], [85.5, 2984.0], [85.6, 2993.0], [85.7, 2998.0], [85.8, 3004.0], [85.9, 3007.0], [86.0, 3019.0], [86.1, 3024.0], [86.2, 3034.0], [86.3, 3039.0], [86.4, 3050.0], [86.5, 3059.0], [86.6, 3065.0], [86.7, 3071.0], [86.8, 3078.0], [86.9, 3086.0], [87.0, 3093.0], [87.1, 3103.0], [87.2, 3110.0], [87.3, 3116.0], [87.4, 3125.0], [87.5, 3130.0], [87.6, 3134.0], [87.7, 3138.0], [87.8, 3145.0], [87.9, 3151.0], [88.0, 3156.0], [88.1, 3162.0], [88.2, 3169.0], [88.3, 3172.0], [88.4, 3178.0], [88.5, 3185.0], [88.6, 3194.0], [88.7, 3200.0], [88.8, 3208.0], [88.9, 3217.0], [89.0, 3221.0], [89.1, 3229.0], [89.2, 3233.0], [89.3, 3240.0], [89.4, 3247.0], [89.5, 3250.0], [89.6, 3255.0], [89.7, 3268.0], [89.8, 3276.0], [89.9, 3283.0], [90.0, 3296.0], [90.1, 3298.0], [90.2, 3305.0], [90.3, 3317.0], [90.4, 3318.0], [90.5, 3329.0], [90.6, 3333.0], [90.7, 3344.0], [90.8, 3350.0], [90.9, 3352.0], [91.0, 3358.0], [91.1, 3371.0], [91.2, 3380.0], [91.3, 3387.0], [91.4, 3393.0], [91.5, 3403.0], [91.6, 3411.0], [91.7, 3421.0], [91.8, 3438.0], [91.9, 3449.0], [92.0, 3461.0], [92.1, 3465.0], [92.2, 3473.0], [92.3, 3483.0], [92.4, 3496.0], [92.5, 3512.0], [92.6, 3520.0], [92.7, 3536.0], [92.8, 3542.0], [92.9, 3546.0], [93.0, 3554.0], [93.1, 3558.0], [93.2, 3569.0], [93.3, 3580.0], [93.4, 3598.0], [93.5, 3614.0], [93.6, 3623.0], [93.7, 3630.0], [93.8, 3637.0], [93.9, 3658.0], [94.0, 3667.0], [94.1, 3671.0], [94.2, 3685.0], [94.3, 3693.0], [94.4, 3705.0], [94.5, 3715.0], [94.6, 3727.0], [94.7, 3739.0], [94.8, 3751.0], [94.9, 3760.0], [95.0, 3780.0], [95.1, 3796.0], [95.2, 3819.0], [95.3, 3838.0], [95.4, 3864.0], [95.5, 3878.0], [95.6, 3890.0], [95.7, 3929.0], [95.8, 3958.0], [95.9, 4008.0], [96.0, 4013.0], [96.1, 4034.0], [96.2, 4041.0], [96.3, 4056.0], [96.4, 4080.0], [96.5, 4089.0], [96.6, 4107.0], [96.7, 4161.0], [96.8, 4181.0], [96.9, 4226.0], [97.0, 4256.0], [97.1, 4269.0], [97.2, 4290.0], [97.3, 4310.0], [97.4, 4330.0], [97.5, 4345.0], [97.6, 4402.0], [97.7, 4437.0], [97.8, 4467.0], [97.9, 4520.0], [98.0, 4568.0], [98.1, 4602.0], [98.2, 4650.0], [98.3, 4703.0], [98.4, 4757.0], [98.5, 4786.0], [98.6, 4823.0], [98.7, 4940.0], [98.8, 5060.0], [98.9, 5149.0], [99.0, 5471.0], [99.1, 5622.0], [99.2, 5741.0], [99.3, 5925.0], [99.4, 6028.0], [99.5, 6317.0], [99.6, 6631.0], [99.7, 7073.0], [99.8, 7278.0], [99.9, 7812.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 300.0, "maxY": 342.0, "series": [{"data": [[600.0, 2.0], [700.0, 81.0], [800.0, 259.0], [900.0, 227.0], [1000.0, 121.0], [1100.0, 160.0], [1200.0, 186.0], [1300.0, 172.0], [1400.0, 210.0], [1500.0, 202.0], [1600.0, 200.0], [1700.0, 244.0], [1800.0, 258.0], [1900.0, 342.0], [2000.0, 295.0], [2100.0, 212.0], [2200.0, 175.0], [2300.0, 189.0], [2400.0, 184.0], [2500.0, 157.0], [2600.0, 147.0], [2700.0, 162.0], [2800.0, 150.0], [2900.0, 110.0], [3000.0, 70.0], [3100.0, 81.0], [3300.0, 69.0], [3200.0, 76.0], [3400.0, 50.0], [3500.0, 53.0], [3700.0, 40.0], [3600.0, 47.0], [3800.0, 27.0], [3900.0, 12.0], [4000.0, 37.0], [4200.0, 17.0], [4100.0, 17.0], [4300.0, 19.0], [4400.0, 15.0], [4600.0, 10.0], [4500.0, 11.0], [4700.0, 14.0], [4800.0, 6.0], [5100.0, 4.0], [4900.0, 6.0], [5000.0, 3.0], [5300.0, 1.0], [5200.0, 1.0], [5400.0, 5.0], [5600.0, 5.0], [5500.0, 1.0], [5800.0, 2.0], [5700.0, 3.0], [6000.0, 4.0], [5900.0, 3.0], [6100.0, 1.0], [6200.0, 4.0], [6300.0, 3.0], [6500.0, 1.0], [6400.0, 1.0], [6600.0, 1.0], [6700.0, 1.0], [6800.0, 1.0], [7000.0, 4.0], [7100.0, 3.0], [7300.0, 2.0], [7400.0, 1.0], [7200.0, 1.0], [7500.0, 1.0], [7900.0, 1.0], [7800.0, 2.0], [9000.0, 2.0], [8900.0, 1.0], [300.0, 1.0], [400.0, 3.0], [500.0, 1.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 9000.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 4.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 3764.0, "series": [{"data": [[0.0, 4.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1422.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 3764.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 11.71914893617021, "minX": 1.60423518E12, "maxY": 12.0, "series": [{"data": [[1.6042356E12, 12.0], [1.6042353E12, 12.0], [1.60423596E12, 12.0], [1.60423566E12, 12.0], [1.60423584E12, 12.0], [1.60423554E12, 12.0], [1.60423524E12, 12.0], [1.6042359E12, 12.0], [1.60423608E12, 11.71914893617021], [1.60423578E12, 12.0], [1.60423518E12, 12.0], [1.60423548E12, 12.0], [1.60423536E12, 12.0], [1.60423602E12, 12.0], [1.60423572E12, 12.0], [1.60423542E12, 12.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60423608E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 1614.0, "minX": 1.0, "maxY": 3752.0, "series": [{"data": [[8.0, 1744.0], [4.0, 2049.0], [2.0, 3630.0], [1.0, 3616.0], [9.0, 2751.0], [10.0, 1890.0], [5.0, 1995.0], [11.0, 1930.0], [12.0, 2113.5690287700268], [6.0, 1881.0], [3.0, 3752.0], [7.0, 1614.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[11.987283236994216, 2114.2631984585682]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 12.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 840.5666666666667, "minX": 1.60423518E12, "maxY": 1923620.9166666667, "series": [{"data": [[1.6042356E12, 1367179.3666666667], [1.6042353E12, 1356319.7833333334], [1.60423596E12, 1496877.7666666666], [1.60423566E12, 1724628.0666666667], [1.60423584E12, 1753089.1], [1.60423554E12, 1803208.6833333333], [1.60423524E12, 1477927.2166666666], [1.6042359E12, 1820839.35], [1.60423608E12, 1122985.8666666667], [1.60423578E12, 1069253.9666666666], [1.60423518E12, 819574.7166666667], [1.60423548E12, 1804839.9666666666], [1.60423536E12, 1404759.3], [1.60423602E12, 1551750.5166666666], [1.60423572E12, 1476143.3333333333], [1.60423542E12, 1923620.9166666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6042356E12, 2523.2166666666667], [1.6042353E12, 2359.5], [1.60423596E12, 2726.1666666666665], [1.60423566E12, 2113.15], [1.60423584E12, 2428.383333333333], [1.60423554E12, 2616.733333333333], [1.60423524E12, 2271.016666666667], [1.6042359E12, 2737.4666666666667], [1.60423608E12, 1764.7333333333333], [1.60423578E12, 2607.8], [1.60423518E12, 840.5666666666667], [1.60423548E12, 2528.2166666666667], [1.60423536E12, 2956.4333333333334], [1.60423602E12, 2874.383333333333], [1.60423572E12, 2510.1], [1.60423542E12, 2719.4666666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60423608E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 1785.518703241895, "minX": 1.60423518E12, "maxY": 2608.9107142857138, "series": [{"data": [[1.6042356E12, 2076.5311572700302], [1.6042353E12, 2242.789473684209], [1.60423596E12, 2015.5208913649028], [1.60423566E12, 2565.9270833333344], [1.60423584E12, 2178.323262839881], [1.60423554E12, 2092.6384839650154], [1.60423524E12, 2249.8664596273284], [1.6042359E12, 1986.14404432133], [1.60423608E12, 2582.6212765957443], [1.60423578E12, 2006.761235955055], [1.60423518E12, 2608.9107142857138], [1.60423548E12, 2180.7784431137734], [1.60423536E12, 1785.518703241895], [1.60423602E12, 1882.4722955145123], [1.60423572E12, 2062.608571428571], [1.60423542E12, 1985.3370473537616]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60423608E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 1783.9426433915203, "minX": 1.60423518E12, "maxY": 2605.9464285714284, "series": [{"data": [[1.6042356E12, 2074.869436201779], [1.6042353E12, 2240.925696594428], [1.60423596E12, 2014.0167130919217], [1.60423566E12, 2563.614583333333], [1.60423584E12, 2176.425981873113], [1.60423554E12, 2090.387755102041], [1.60423524E12, 2247.89440993789], [1.6042359E12, 1984.3628808864262], [1.60423608E12, 2580.9021276595768], [1.60423578E12, 2005.7050561797737], [1.60423518E12, 2605.9464285714284], [1.60423548E12, 2178.428143712572], [1.60423536E12, 1783.9426433915203], [1.60423602E12, 1881.0395778364114], [1.60423572E12, 2061.0828571428565], [1.60423542E12, 1983.0250696378844]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60423608E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.012765957446808512, "minX": 1.60423518E12, "maxY": 1.2946428571428585, "series": [{"data": [[1.6042356E12, 0.03560830860534124], [1.6042353E12, 0.04334365325077402], [1.60423596E12, 0.03899721448467967], [1.60423566E12, 0.038194444444444454], [1.60423584E12, 0.03625377643504531], [1.60423554E12, 0.043731778425655995], [1.60423524E12, 0.05279503105590065], [1.6042359E12, 0.0332409972299169], [1.60423608E12, 0.012765957446808512], [1.60423578E12, 0.047752808988764016], [1.60423518E12, 1.2946428571428585], [1.60423548E12, 0.03892215568862277], [1.60423536E12, 0.03491271820448879], [1.60423602E12, 0.039577836411609495], [1.60423572E12, 0.03714285714285715], [1.60423542E12, 0.04178272980501395]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60423608E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 399.0, "minX": 1.60423518E12, "maxY": 9047.0, "series": [{"data": [[1.6042356E12, 5955.0], [1.6042353E12, 5917.0], [1.60423596E12, 4650.0], [1.60423566E12, 7971.0], [1.60423584E12, 4323.0], [1.60423554E12, 6631.0], [1.60423524E12, 7331.0], [1.6042359E12, 4650.0], [1.60423608E12, 5620.0], [1.60423578E12, 6005.0], [1.60423518E12, 4759.0], [1.60423548E12, 4940.0], [1.60423536E12, 6222.0], [1.60423602E12, 4988.0], [1.60423572E12, 9047.0], [1.60423542E12, 4575.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6042356E12, 752.6299987912178], [1.6042353E12, 1028.2799938201904], [1.60423596E12, 748.4399994850158], [1.60423566E12, 867.665995452404], [1.60423584E12, 829.9039993667602], [1.60423554E12, 864.3839996719361], [1.60423524E12, 439.58199799776077], [1.6042359E12, 751.3219992232323], [1.60423608E12, 1260.059996342659], [1.60423578E12, 751.4729982125759], [1.60423518E12, 1183.2039996767044], [1.60423548E12, 789.2399987220764], [1.60423536E12, 786.8539997124672], [1.60423602E12, 751.8399998188019], [1.60423572E12, 853.5899991631508], [1.60423542E12, 787.2399999141693]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6042356E12, 757.1930004835128], [1.6042353E12, 1041.2280009269714], [1.60423596E12, 750.3840002059936], [1.60423566E12, 884.8326018190384], [1.60423584E12, 831.4340001583099], [1.60423554E12, 865.6224001312256], [1.60423524E12, 444.76780043125154], [1.6042359E12, 754.2542003107071], [1.60423608E12, 1273.8660014629363], [1.60423578E12, 758.2203007149697], [1.60423518E12, 1184.4244001293182], [1.60423548E12, 794.0640005111694], [1.60423536E12, 787.9394001150131], [1.60423602E12, 752.5240000724792], [1.60423572E12, 856.7490003347397], [1.60423542E12, 787.5640000343323]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6042356E12, 755.1649993956089], [1.6042353E12, 1037.3399988412857], [1.60423596E12, 749.5199997425079], [1.60423566E12, 877.2029977262019], [1.60423584E12, 830.7699998021126], [1.60423554E12, 865.071999835968], [1.60423524E12, 442.9589994609356], [1.6042359E12, 752.9509996116161], [1.60423608E12, 1267.7299981713295], [1.60423578E12, 755.221499106288], [1.60423518E12, 1183.8819998383522], [1.60423548E12, 791.9199993610382], [1.60423536E12, 787.4569998562336], [1.60423602E12, 752.2199999094009], [1.60423572E12, 855.3449995815754], [1.60423542E12, 787.4199999570847]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.6042356E12, 750.0], [1.6042353E12, 859.0], [1.60423596E12, 732.0], [1.60423566E12, 795.0], [1.60423584E12, 801.0], [1.60423554E12, 810.0], [1.60423524E12, 399.0], [1.6042359E12, 742.0], [1.60423608E12, 1160.0], [1.60423578E12, 642.0], [1.60423518E12, 1183.0], [1.60423548E12, 777.0], [1.60423536E12, 531.0], [1.60423602E12, 735.0], [1.60423572E12, 821.0], [1.60423542E12, 755.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6042356E12, 1956.0], [1.6042353E12, 1979.0], [1.60423596E12, 2003.0], [1.60423566E12, 2367.5], [1.60423584E12, 2067.0], [1.60423554E12, 1972.0], [1.60423524E12, 2008.5], [1.6042359E12, 1943.0], [1.60423608E12, 2438.0], [1.60423578E12, 1811.5], [1.60423518E12, 2562.0], [1.60423548E12, 2090.5], [1.60423536E12, 1536.0], [1.60423602E12, 1730.0], [1.60423572E12, 1915.0], [1.60423542E12, 1923.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60423608E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 859.0, "minX": 1.0, "maxY": 3130.0, "series": [{"data": [[2.0, 3018.5], [8.0, 1695.0], [9.0, 1534.0], [10.0, 1320.5], [11.0, 1051.0], [3.0, 2684.0], [12.0, 942.0], [13.0, 922.5], [14.0, 859.0], [15.0, 893.0], [4.0, 2467.5], [1.0, 3130.0], [5.0, 2269.0], [6.0, 2028.5], [7.0, 1947.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 15.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 859.0, "minX": 1.0, "maxY": 3124.5, "series": [{"data": [[2.0, 3016.5], [8.0, 1695.0], [9.0, 1533.0], [10.0, 1319.5], [11.0, 1051.0], [3.0, 2680.0], [12.0, 942.0], [13.0, 922.5], [14.0, 859.0], [15.0, 893.0], [4.0, 2466.0], [1.0, 3124.5], [5.0, 2264.5], [6.0, 2026.0], [7.0, 1945.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 15.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 2.066666666666667, "minX": 1.60423518E12, "maxY": 6.683333333333334, "series": [{"data": [[1.6042356E12, 5.616666666666666], [1.6042353E12, 5.383333333333334], [1.60423596E12, 5.983333333333333], [1.60423566E12, 4.8], [1.60423584E12, 5.516666666666667], [1.60423554E12, 5.716666666666667], [1.60423524E12, 5.366666666666666], [1.6042359E12, 6.016666666666667], [1.60423608E12, 3.716666666666667], [1.60423578E12, 5.933333333333334], [1.60423518E12, 2.066666666666667], [1.60423548E12, 5.566666666666666], [1.60423536E12, 6.683333333333334], [1.60423602E12, 6.316666666666666], [1.60423572E12, 5.833333333333333], [1.60423542E12, 5.983333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60423608E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1.8666666666666667, "minX": 1.60423518E12, "maxY": 6.683333333333334, "series": [{"data": [[1.6042356E12, 5.616666666666666], [1.6042353E12, 5.383333333333334], [1.60423596E12, 5.983333333333333], [1.60423566E12, 4.8], [1.60423584E12, 5.516666666666667], [1.60423554E12, 5.716666666666667], [1.60423524E12, 5.366666666666666], [1.6042359E12, 6.016666666666667], [1.60423608E12, 3.9166666666666665], [1.60423578E12, 5.933333333333334], [1.60423518E12, 1.8666666666666667], [1.60423548E12, 5.566666666666666], [1.60423536E12, 6.683333333333334], [1.60423602E12, 6.316666666666666], [1.60423572E12, 5.833333333333333], [1.60423542E12, 5.983333333333333]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60423608E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.8666666666666667, "minX": 1.60423518E12, "maxY": 6.683333333333334, "series": [{"data": [[1.6042356E12, 5.616666666666666], [1.6042353E12, 5.383333333333334], [1.60423596E12, 5.983333333333333], [1.60423566E12, 4.8], [1.60423584E12, 5.516666666666667], [1.60423554E12, 5.716666666666667], [1.60423524E12, 5.366666666666666], [1.6042359E12, 6.016666666666667], [1.60423608E12, 3.9166666666666665], [1.60423578E12, 5.933333333333334], [1.60423518E12, 1.8666666666666667], [1.60423548E12, 5.566666666666666], [1.60423536E12, 6.683333333333334], [1.60423602E12, 6.316666666666666], [1.60423572E12, 5.833333333333333], [1.60423542E12, 5.983333333333333]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60423608E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.8666666666666667, "minX": 1.60423518E12, "maxY": 6.683333333333334, "series": [{"data": [[1.6042356E12, 5.616666666666666], [1.6042353E12, 5.383333333333334], [1.60423596E12, 5.983333333333333], [1.60423566E12, 4.8], [1.60423584E12, 5.516666666666667], [1.60423554E12, 5.716666666666667], [1.60423524E12, 5.366666666666666], [1.6042359E12, 6.016666666666667], [1.60423608E12, 3.9166666666666665], [1.60423578E12, 5.933333333333334], [1.60423518E12, 1.8666666666666667], [1.60423548E12, 5.566666666666666], [1.60423536E12, 6.683333333333334], [1.60423602E12, 6.316666666666666], [1.60423572E12, 5.833333333333333], [1.60423542E12, 5.983333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60423608E12, "title": "Total Transactions Per Second"}},
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

