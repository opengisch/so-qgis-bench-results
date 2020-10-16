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
        data: {"result": {"minY": 567.0, "minX": 0.0, "maxY": 9720.0, "series": [{"data": [[0.0, 567.0], [0.1, 613.0], [0.2, 651.0], [0.3, 660.0], [0.4, 717.0], [0.5, 732.0], [0.6, 748.0], [0.7, 751.0], [0.8, 753.0], [0.9, 758.0], [1.0, 764.0], [1.1, 769.0], [1.2, 772.0], [1.3, 775.0], [1.4, 779.0], [1.5, 780.0], [1.6, 786.0], [1.7, 789.0], [1.8, 792.0], [1.9, 793.0], [2.0, 797.0], [2.1, 798.0], [2.2, 803.0], [2.3, 804.0], [2.4, 805.0], [2.5, 807.0], [2.6, 809.0], [2.7, 811.0], [2.8, 812.0], [2.9, 814.0], [3.0, 815.0], [3.1, 819.0], [3.2, 821.0], [3.3, 823.0], [3.4, 824.0], [3.5, 826.0], [3.6, 827.0], [3.7, 829.0], [3.8, 830.0], [3.9, 833.0], [4.0, 835.0], [4.1, 836.0], [4.2, 837.0], [4.3, 838.0], [4.4, 840.0], [4.5, 841.0], [4.6, 843.0], [4.7, 845.0], [4.8, 846.0], [4.9, 848.0], [5.0, 849.0], [5.1, 850.0], [5.2, 851.0], [5.3, 852.0], [5.4, 852.0], [5.5, 853.0], [5.6, 854.0], [5.7, 856.0], [5.8, 857.0], [5.9, 859.0], [6.0, 860.0], [6.1, 862.0], [6.2, 863.0], [6.3, 865.0], [6.4, 867.0], [6.5, 868.0], [6.6, 871.0], [6.7, 872.0], [6.8, 872.0], [6.9, 873.0], [7.0, 875.0], [7.1, 876.0], [7.2, 877.0], [7.3, 879.0], [7.4, 881.0], [7.5, 882.0], [7.6, 883.0], [7.7, 885.0], [7.8, 886.0], [7.9, 888.0], [8.0, 889.0], [8.1, 890.0], [8.2, 891.0], [8.3, 895.0], [8.4, 895.0], [8.5, 897.0], [8.6, 898.0], [8.7, 898.0], [8.8, 901.0], [8.9, 903.0], [9.0, 906.0], [9.1, 907.0], [9.2, 909.0], [9.3, 910.0], [9.4, 912.0], [9.5, 914.0], [9.6, 916.0], [9.7, 918.0], [9.8, 920.0], [9.9, 923.0], [10.0, 925.0], [10.1, 932.0], [10.2, 936.0], [10.3, 940.0], [10.4, 942.0], [10.5, 944.0], [10.6, 952.0], [10.7, 955.0], [10.8, 961.0], [10.9, 963.0], [11.0, 966.0], [11.1, 971.0], [11.2, 974.0], [11.3, 978.0], [11.4, 980.0], [11.5, 982.0], [11.6, 986.0], [11.7, 990.0], [11.8, 995.0], [11.9, 998.0], [12.0, 1004.0], [12.1, 1010.0], [12.2, 1013.0], [12.3, 1021.0], [12.4, 1026.0], [12.5, 1027.0], [12.6, 1029.0], [12.7, 1033.0], [12.8, 1036.0], [12.9, 1041.0], [13.0, 1047.0], [13.1, 1053.0], [13.2, 1058.0], [13.3, 1063.0], [13.4, 1065.0], [13.5, 1071.0], [13.6, 1076.0], [13.7, 1079.0], [13.8, 1082.0], [13.9, 1086.0], [14.0, 1090.0], [14.1, 1095.0], [14.2, 1101.0], [14.3, 1103.0], [14.4, 1106.0], [14.5, 1113.0], [14.6, 1118.0], [14.7, 1121.0], [14.8, 1124.0], [14.9, 1125.0], [15.0, 1127.0], [15.1, 1129.0], [15.2, 1131.0], [15.3, 1136.0], [15.4, 1137.0], [15.5, 1140.0], [15.6, 1144.0], [15.7, 1145.0], [15.8, 1152.0], [15.9, 1154.0], [16.0, 1157.0], [16.1, 1160.0], [16.2, 1165.0], [16.3, 1168.0], [16.4, 1170.0], [16.5, 1175.0], [16.6, 1176.0], [16.7, 1178.0], [16.8, 1182.0], [16.9, 1185.0], [17.0, 1188.0], [17.1, 1191.0], [17.2, 1197.0], [17.3, 1199.0], [17.4, 1200.0], [17.5, 1202.0], [17.6, 1205.0], [17.7, 1206.0], [17.8, 1213.0], [17.9, 1218.0], [18.0, 1220.0], [18.1, 1223.0], [18.2, 1226.0], [18.3, 1230.0], [18.4, 1231.0], [18.5, 1235.0], [18.6, 1237.0], [18.7, 1238.0], [18.8, 1242.0], [18.9, 1244.0], [19.0, 1248.0], [19.1, 1252.0], [19.2, 1255.0], [19.3, 1258.0], [19.4, 1261.0], [19.5, 1268.0], [19.6, 1273.0], [19.7, 1276.0], [19.8, 1279.0], [19.9, 1281.0], [20.0, 1286.0], [20.1, 1290.0], [20.2, 1295.0], [20.3, 1300.0], [20.4, 1304.0], [20.5, 1307.0], [20.6, 1309.0], [20.7, 1309.0], [20.8, 1312.0], [20.9, 1314.0], [21.0, 1316.0], [21.1, 1320.0], [21.2, 1322.0], [21.3, 1325.0], [21.4, 1328.0], [21.5, 1329.0], [21.6, 1332.0], [21.7, 1337.0], [21.8, 1338.0], [21.9, 1341.0], [22.0, 1344.0], [22.1, 1345.0], [22.2, 1347.0], [22.3, 1350.0], [22.4, 1353.0], [22.5, 1354.0], [22.6, 1357.0], [22.7, 1359.0], [22.8, 1362.0], [22.9, 1365.0], [23.0, 1369.0], [23.1, 1372.0], [23.2, 1381.0], [23.3, 1384.0], [23.4, 1385.0], [23.5, 1389.0], [23.6, 1393.0], [23.7, 1397.0], [23.8, 1398.0], [23.9, 1400.0], [24.0, 1404.0], [24.1, 1407.0], [24.2, 1411.0], [24.3, 1413.0], [24.4, 1414.0], [24.5, 1416.0], [24.6, 1421.0], [24.7, 1424.0], [24.8, 1426.0], [24.9, 1430.0], [25.0, 1434.0], [25.1, 1440.0], [25.2, 1443.0], [25.3, 1445.0], [25.4, 1453.0], [25.5, 1455.0], [25.6, 1457.0], [25.7, 1460.0], [25.8, 1463.0], [25.9, 1463.0], [26.0, 1469.0], [26.1, 1470.0], [26.2, 1475.0], [26.3, 1478.0], [26.4, 1480.0], [26.5, 1483.0], [26.6, 1487.0], [26.7, 1490.0], [26.8, 1493.0], [26.9, 1496.0], [27.0, 1500.0], [27.1, 1503.0], [27.2, 1505.0], [27.3, 1507.0], [27.4, 1511.0], [27.5, 1514.0], [27.6, 1517.0], [27.7, 1519.0], [27.8, 1520.0], [27.9, 1522.0], [28.0, 1525.0], [28.1, 1526.0], [28.2, 1530.0], [28.3, 1532.0], [28.4, 1535.0], [28.5, 1537.0], [28.6, 1540.0], [28.7, 1542.0], [28.8, 1544.0], [28.9, 1547.0], [29.0, 1550.0], [29.1, 1552.0], [29.2, 1556.0], [29.3, 1559.0], [29.4, 1562.0], [29.5, 1566.0], [29.6, 1567.0], [29.7, 1569.0], [29.8, 1573.0], [29.9, 1576.0], [30.0, 1577.0], [30.1, 1580.0], [30.2, 1581.0], [30.3, 1583.0], [30.4, 1587.0], [30.5, 1590.0], [30.6, 1593.0], [30.7, 1596.0], [30.8, 1598.0], [30.9, 1601.0], [31.0, 1605.0], [31.1, 1610.0], [31.2, 1612.0], [31.3, 1614.0], [31.4, 1618.0], [31.5, 1619.0], [31.6, 1622.0], [31.7, 1626.0], [31.8, 1627.0], [31.9, 1629.0], [32.0, 1630.0], [32.1, 1633.0], [32.2, 1637.0], [32.3, 1637.0], [32.4, 1641.0], [32.5, 1646.0], [32.6, 1648.0], [32.7, 1651.0], [32.8, 1654.0], [32.9, 1655.0], [33.0, 1658.0], [33.1, 1661.0], [33.2, 1662.0], [33.3, 1665.0], [33.4, 1668.0], [33.5, 1670.0], [33.6, 1672.0], [33.7, 1676.0], [33.8, 1679.0], [33.9, 1680.0], [34.0, 1684.0], [34.1, 1686.0], [34.2, 1688.0], [34.3, 1691.0], [34.4, 1695.0], [34.5, 1696.0], [34.6, 1698.0], [34.7, 1700.0], [34.8, 1702.0], [34.9, 1704.0], [35.0, 1708.0], [35.1, 1709.0], [35.2, 1711.0], [35.3, 1715.0], [35.4, 1718.0], [35.5, 1721.0], [35.6, 1725.0], [35.7, 1728.0], [35.8, 1729.0], [35.9, 1731.0], [36.0, 1734.0], [36.1, 1738.0], [36.2, 1740.0], [36.3, 1744.0], [36.4, 1745.0], [36.5, 1747.0], [36.6, 1748.0], [36.7, 1752.0], [36.8, 1753.0], [36.9, 1755.0], [37.0, 1756.0], [37.1, 1758.0], [37.2, 1760.0], [37.3, 1762.0], [37.4, 1765.0], [37.5, 1767.0], [37.6, 1768.0], [37.7, 1770.0], [37.8, 1772.0], [37.9, 1774.0], [38.0, 1776.0], [38.1, 1780.0], [38.2, 1783.0], [38.3, 1784.0], [38.4, 1786.0], [38.5, 1790.0], [38.6, 1791.0], [38.7, 1792.0], [38.8, 1794.0], [38.9, 1795.0], [39.0, 1799.0], [39.1, 1801.0], [39.2, 1803.0], [39.3, 1806.0], [39.4, 1807.0], [39.5, 1809.0], [39.6, 1811.0], [39.7, 1812.0], [39.8, 1814.0], [39.9, 1816.0], [40.0, 1817.0], [40.1, 1820.0], [40.2, 1822.0], [40.3, 1824.0], [40.4, 1826.0], [40.5, 1827.0], [40.6, 1829.0], [40.7, 1831.0], [40.8, 1834.0], [40.9, 1835.0], [41.0, 1838.0], [41.1, 1839.0], [41.2, 1843.0], [41.3, 1846.0], [41.4, 1849.0], [41.5, 1850.0], [41.6, 1852.0], [41.7, 1855.0], [41.8, 1855.0], [41.9, 1856.0], [42.0, 1858.0], [42.1, 1862.0], [42.2, 1864.0], [42.3, 1866.0], [42.4, 1867.0], [42.5, 1869.0], [42.6, 1871.0], [42.7, 1874.0], [42.8, 1876.0], [42.9, 1878.0], [43.0, 1880.0], [43.1, 1881.0], [43.2, 1883.0], [43.3, 1885.0], [43.4, 1889.0], [43.5, 1891.0], [43.6, 1892.0], [43.7, 1893.0], [43.8, 1894.0], [43.9, 1896.0], [44.0, 1898.0], [44.1, 1899.0], [44.2, 1900.0], [44.3, 1901.0], [44.4, 1904.0], [44.5, 1906.0], [44.6, 1909.0], [44.7, 1911.0], [44.8, 1914.0], [44.9, 1916.0], [45.0, 1918.0], [45.1, 1919.0], [45.2, 1921.0], [45.3, 1923.0], [45.4, 1925.0], [45.5, 1927.0], [45.6, 1929.0], [45.7, 1932.0], [45.8, 1933.0], [45.9, 1935.0], [46.0, 1937.0], [46.1, 1940.0], [46.2, 1942.0], [46.3, 1945.0], [46.4, 1947.0], [46.5, 1949.0], [46.6, 1951.0], [46.7, 1953.0], [46.8, 1955.0], [46.9, 1957.0], [47.0, 1958.0], [47.1, 1959.0], [47.2, 1961.0], [47.3, 1962.0], [47.4, 1964.0], [47.5, 1965.0], [47.6, 1968.0], [47.7, 1969.0], [47.8, 1971.0], [47.9, 1974.0], [48.0, 1976.0], [48.1, 1977.0], [48.2, 1979.0], [48.3, 1980.0], [48.4, 1982.0], [48.5, 1983.0], [48.6, 1984.0], [48.7, 1985.0], [48.8, 1986.0], [48.9, 1987.0], [49.0, 1988.0], [49.1, 1990.0], [49.2, 1992.0], [49.3, 1993.0], [49.4, 1995.0], [49.5, 1997.0], [49.6, 1998.0], [49.7, 2000.0], [49.8, 2005.0], [49.9, 2007.0], [50.0, 2009.0], [50.1, 2011.0], [50.2, 2014.0], [50.3, 2015.0], [50.4, 2016.0], [50.5, 2017.0], [50.6, 2019.0], [50.7, 2020.0], [50.8, 2023.0], [50.9, 2024.0], [51.0, 2025.0], [51.1, 2028.0], [51.2, 2030.0], [51.3, 2032.0], [51.4, 2034.0], [51.5, 2035.0], [51.6, 2036.0], [51.7, 2039.0], [51.8, 2041.0], [51.9, 2044.0], [52.0, 2048.0], [52.1, 2051.0], [52.2, 2053.0], [52.3, 2055.0], [52.4, 2057.0], [52.5, 2058.0], [52.6, 2059.0], [52.7, 2062.0], [52.8, 2064.0], [52.9, 2067.0], [53.0, 2068.0], [53.1, 2069.0], [53.2, 2072.0], [53.3, 2074.0], [53.4, 2077.0], [53.5, 2079.0], [53.6, 2080.0], [53.7, 2083.0], [53.8, 2084.0], [53.9, 2087.0], [54.0, 2088.0], [54.1, 2089.0], [54.2, 2091.0], [54.3, 2093.0], [54.4, 2098.0], [54.5, 2099.0], [54.6, 2101.0], [54.7, 2102.0], [54.8, 2104.0], [54.9, 2107.0], [55.0, 2109.0], [55.1, 2110.0], [55.2, 2112.0], [55.3, 2114.0], [55.4, 2116.0], [55.5, 2119.0], [55.6, 2121.0], [55.7, 2123.0], [55.8, 2125.0], [55.9, 2127.0], [56.0, 2130.0], [56.1, 2131.0], [56.2, 2133.0], [56.3, 2135.0], [56.4, 2138.0], [56.5, 2141.0], [56.6, 2142.0], [56.7, 2144.0], [56.8, 2147.0], [56.9, 2149.0], [57.0, 2150.0], [57.1, 2152.0], [57.2, 2154.0], [57.3, 2155.0], [57.4, 2159.0], [57.5, 2162.0], [57.6, 2163.0], [57.7, 2166.0], [57.8, 2167.0], [57.9, 2169.0], [58.0, 2173.0], [58.1, 2176.0], [58.2, 2177.0], [58.3, 2180.0], [58.4, 2181.0], [58.5, 2183.0], [58.6, 2185.0], [58.7, 2187.0], [58.8, 2188.0], [58.9, 2192.0], [59.0, 2196.0], [59.1, 2199.0], [59.2, 2201.0], [59.3, 2203.0], [59.4, 2204.0], [59.5, 2207.0], [59.6, 2210.0], [59.7, 2214.0], [59.8, 2218.0], [59.9, 2221.0], [60.0, 2223.0], [60.1, 2225.0], [60.2, 2227.0], [60.3, 2229.0], [60.4, 2231.0], [60.5, 2234.0], [60.6, 2239.0], [60.7, 2243.0], [60.8, 2245.0], [60.9, 2247.0], [61.0, 2251.0], [61.1, 2254.0], [61.2, 2256.0], [61.3, 2258.0], [61.4, 2260.0], [61.5, 2262.0], [61.6, 2266.0], [61.7, 2267.0], [61.8, 2269.0], [61.9, 2271.0], [62.0, 2273.0], [62.1, 2275.0], [62.2, 2276.0], [62.3, 2277.0], [62.4, 2279.0], [62.5, 2281.0], [62.6, 2283.0], [62.7, 2286.0], [62.8, 2288.0], [62.9, 2292.0], [63.0, 2295.0], [63.1, 2297.0], [63.2, 2302.0], [63.3, 2304.0], [63.4, 2307.0], [63.5, 2311.0], [63.6, 2312.0], [63.7, 2315.0], [63.8, 2318.0], [63.9, 2321.0], [64.0, 2323.0], [64.1, 2326.0], [64.2, 2330.0], [64.3, 2333.0], [64.4, 2335.0], [64.5, 2339.0], [64.6, 2341.0], [64.7, 2344.0], [64.8, 2345.0], [64.9, 2347.0], [65.0, 2350.0], [65.1, 2353.0], [65.2, 2355.0], [65.3, 2357.0], [65.4, 2360.0], [65.5, 2363.0], [65.6, 2366.0], [65.7, 2367.0], [65.8, 2371.0], [65.9, 2374.0], [66.0, 2376.0], [66.1, 2378.0], [66.2, 2382.0], [66.3, 2383.0], [66.4, 2387.0], [66.5, 2388.0], [66.6, 2390.0], [66.7, 2394.0], [66.8, 2395.0], [66.9, 2398.0], [67.0, 2400.0], [67.1, 2401.0], [67.2, 2404.0], [67.3, 2407.0], [67.4, 2410.0], [67.5, 2413.0], [67.6, 2416.0], [67.7, 2418.0], [67.8, 2422.0], [67.9, 2427.0], [68.0, 2430.0], [68.1, 2434.0], [68.2, 2437.0], [68.3, 2439.0], [68.4, 2442.0], [68.5, 2445.0], [68.6, 2448.0], [68.7, 2452.0], [68.8, 2456.0], [68.9, 2457.0], [69.0, 2460.0], [69.1, 2463.0], [69.2, 2468.0], [69.3, 2469.0], [69.4, 2471.0], [69.5, 2473.0], [69.6, 2475.0], [69.7, 2479.0], [69.8, 2482.0], [69.9, 2484.0], [70.0, 2487.0], [70.1, 2490.0], [70.2, 2491.0], [70.3, 2494.0], [70.4, 2497.0], [70.5, 2498.0], [70.6, 2503.0], [70.7, 2505.0], [70.8, 2508.0], [70.9, 2510.0], [71.0, 2513.0], [71.1, 2516.0], [71.2, 2519.0], [71.3, 2522.0], [71.4, 2528.0], [71.5, 2532.0], [71.6, 2535.0], [71.7, 2538.0], [71.8, 2542.0], [71.9, 2544.0], [72.0, 2549.0], [72.1, 2552.0], [72.2, 2556.0], [72.3, 2561.0], [72.4, 2564.0], [72.5, 2566.0], [72.6, 2568.0], [72.7, 2573.0], [72.8, 2576.0], [72.9, 2580.0], [73.0, 2582.0], [73.1, 2585.0], [73.2, 2590.0], [73.3, 2594.0], [73.4, 2597.0], [73.5, 2602.0], [73.6, 2602.0], [73.7, 2605.0], [73.8, 2607.0], [73.9, 2611.0], [74.0, 2614.0], [74.1, 2620.0], [74.2, 2623.0], [74.3, 2628.0], [74.4, 2635.0], [74.5, 2639.0], [74.6, 2643.0], [74.7, 2649.0], [74.8, 2653.0], [74.9, 2655.0], [75.0, 2661.0], [75.1, 2664.0], [75.2, 2668.0], [75.3, 2673.0], [75.4, 2675.0], [75.5, 2678.0], [75.6, 2681.0], [75.7, 2683.0], [75.8, 2685.0], [75.9, 2687.0], [76.0, 2690.0], [76.1, 2691.0], [76.2, 2695.0], [76.3, 2698.0], [76.4, 2701.0], [76.5, 2704.0], [76.6, 2709.0], [76.7, 2711.0], [76.8, 2716.0], [76.9, 2721.0], [77.0, 2723.0], [77.1, 2725.0], [77.2, 2728.0], [77.3, 2730.0], [77.4, 2734.0], [77.5, 2738.0], [77.6, 2742.0], [77.7, 2747.0], [77.8, 2750.0], [77.9, 2756.0], [78.0, 2759.0], [78.1, 2761.0], [78.2, 2764.0], [78.3, 2770.0], [78.4, 2776.0], [78.5, 2782.0], [78.6, 2784.0], [78.7, 2785.0], [78.8, 2787.0], [78.9, 2791.0], [79.0, 2792.0], [79.1, 2794.0], [79.2, 2799.0], [79.3, 2803.0], [79.4, 2809.0], [79.5, 2812.0], [79.6, 2815.0], [79.7, 2818.0], [79.8, 2822.0], [79.9, 2825.0], [80.0, 2830.0], [80.1, 2835.0], [80.2, 2838.0], [80.3, 2842.0], [80.4, 2846.0], [80.5, 2850.0], [80.6, 2854.0], [80.7, 2863.0], [80.8, 2865.0], [80.9, 2871.0], [81.0, 2873.0], [81.1, 2877.0], [81.2, 2879.0], [81.3, 2884.0], [81.4, 2888.0], [81.5, 2894.0], [81.6, 2898.0], [81.7, 2902.0], [81.8, 2904.0], [81.9, 2907.0], [82.0, 2912.0], [82.1, 2919.0], [82.2, 2921.0], [82.3, 2923.0], [82.4, 2925.0], [82.5, 2929.0], [82.6, 2931.0], [82.7, 2938.0], [82.8, 2941.0], [82.9, 2947.0], [83.0, 2949.0], [83.1, 2952.0], [83.2, 2958.0], [83.3, 2959.0], [83.4, 2963.0], [83.5, 2965.0], [83.6, 2969.0], [83.7, 2971.0], [83.8, 2977.0], [83.9, 2982.0], [84.0, 2986.0], [84.1, 2990.0], [84.2, 2996.0], [84.3, 3001.0], [84.4, 3005.0], [84.5, 3010.0], [84.6, 3014.0], [84.7, 3023.0], [84.8, 3030.0], [84.9, 3037.0], [85.0, 3042.0], [85.1, 3043.0], [85.2, 3045.0], [85.3, 3051.0], [85.4, 3054.0], [85.5, 3057.0], [85.6, 3060.0], [85.7, 3062.0], [85.8, 3067.0], [85.9, 3069.0], [86.0, 3072.0], [86.1, 3077.0], [86.2, 3080.0], [86.3, 3086.0], [86.4, 3094.0], [86.5, 3100.0], [86.6, 3102.0], [86.7, 3104.0], [86.8, 3108.0], [86.9, 3115.0], [87.0, 3119.0], [87.1, 3123.0], [87.2, 3132.0], [87.3, 3137.0], [87.4, 3147.0], [87.5, 3153.0], [87.6, 3156.0], [87.7, 3165.0], [87.8, 3174.0], [87.9, 3181.0], [88.0, 3184.0], [88.1, 3191.0], [88.2, 3198.0], [88.3, 3200.0], [88.4, 3209.0], [88.5, 3221.0], [88.6, 3229.0], [88.7, 3238.0], [88.8, 3244.0], [88.9, 3247.0], [89.0, 3253.0], [89.1, 3260.0], [89.2, 3268.0], [89.3, 3274.0], [89.4, 3276.0], [89.5, 3284.0], [89.6, 3290.0], [89.7, 3294.0], [89.8, 3297.0], [89.9, 3301.0], [90.0, 3308.0], [90.1, 3318.0], [90.2, 3325.0], [90.3, 3336.0], [90.4, 3344.0], [90.5, 3348.0], [90.6, 3355.0], [90.7, 3364.0], [90.8, 3368.0], [90.9, 3376.0], [91.0, 3380.0], [91.1, 3393.0], [91.2, 3407.0], [91.3, 3414.0], [91.4, 3420.0], [91.5, 3426.0], [91.6, 3437.0], [91.7, 3443.0], [91.8, 3455.0], [91.9, 3463.0], [92.0, 3470.0], [92.1, 3479.0], [92.2, 3492.0], [92.3, 3504.0], [92.4, 3511.0], [92.5, 3518.0], [92.6, 3527.0], [92.7, 3539.0], [92.8, 3551.0], [92.9, 3556.0], [93.0, 3563.0], [93.1, 3573.0], [93.2, 3578.0], [93.3, 3590.0], [93.4, 3600.0], [93.5, 3615.0], [93.6, 3632.0], [93.7, 3661.0], [93.8, 3669.0], [93.9, 3672.0], [94.0, 3690.0], [94.1, 3703.0], [94.2, 3712.0], [94.3, 3728.0], [94.4, 3736.0], [94.5, 3741.0], [94.6, 3757.0], [94.7, 3769.0], [94.8, 3788.0], [94.9, 3799.0], [95.0, 3824.0], [95.1, 3856.0], [95.2, 3863.0], [95.3, 3874.0], [95.4, 3891.0], [95.5, 3919.0], [95.6, 3929.0], [95.7, 3955.0], [95.8, 3968.0], [95.9, 3997.0], [96.0, 4018.0], [96.1, 4045.0], [96.2, 4078.0], [96.3, 4104.0], [96.4, 4140.0], [96.5, 4155.0], [96.6, 4177.0], [96.7, 4202.0], [96.8, 4243.0], [96.9, 4268.0], [97.0, 4279.0], [97.1, 4311.0], [97.2, 4336.0], [97.3, 4369.0], [97.4, 4400.0], [97.5, 4429.0], [97.6, 4470.0], [97.7, 4508.0], [97.8, 4520.0], [97.9, 4582.0], [98.0, 4613.0], [98.1, 4630.0], [98.2, 4669.0], [98.3, 4711.0], [98.4, 4786.0], [98.5, 4856.0], [98.6, 4923.0], [98.7, 5017.0], [98.8, 5176.0], [98.9, 5268.0], [99.0, 5381.0], [99.1, 5693.0], [99.2, 6010.0], [99.3, 6064.0], [99.4, 6215.0], [99.5, 6732.0], [99.6, 6957.0], [99.7, 7253.0], [99.8, 7690.0], [99.9, 8420.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 500.0, "maxY": 342.0, "series": [{"data": [[600.0, 18.0], [700.0, 91.0], [800.0, 342.0], [900.0, 165.0], [1000.0, 117.0], [1100.0, 167.0], [1200.0, 151.0], [1300.0, 185.0], [1400.0, 163.0], [1500.0, 199.0], [1600.0, 197.0], [1700.0, 229.0], [1800.0, 265.0], [1900.0, 286.0], [2000.0, 253.0], [2100.0, 239.0], [2300.0, 199.0], [2200.0, 209.0], [2400.0, 184.0], [2500.0, 152.0], [2600.0, 148.0], [2700.0, 151.0], [2800.0, 124.0], [2900.0, 137.0], [3000.0, 115.0], [3100.0, 93.0], [3300.0, 66.0], [3200.0, 84.0], [3400.0, 57.0], [3500.0, 58.0], [3600.0, 36.0], [3700.0, 44.0], [3800.0, 27.0], [3900.0, 25.0], [4000.0, 18.0], [4200.0, 20.0], [4100.0, 22.0], [4300.0, 17.0], [4500.0, 14.0], [4600.0, 17.0], [4400.0, 14.0], [4700.0, 8.0], [4800.0, 9.0], [5100.0, 2.0], [5000.0, 5.0], [4900.0, 4.0], [5200.0, 6.0], [5300.0, 5.0], [5600.0, 3.0], [5400.0, 1.0], [5500.0, 1.0], [5700.0, 3.0], [5800.0, 1.0], [6000.0, 7.0], [6100.0, 2.0], [6200.0, 3.0], [6300.0, 2.0], [6600.0, 1.0], [6400.0, 1.0], [6900.0, 2.0], [6700.0, 4.0], [6800.0, 1.0], [7100.0, 2.0], [7000.0, 1.0], [7400.0, 2.0], [7200.0, 1.0], [7600.0, 2.0], [7500.0, 1.0], [7800.0, 1.0], [7900.0, 1.0], [8000.0, 1.0], [8500.0, 2.0], [8400.0, 2.0], [8300.0, 1.0], [9100.0, 1.0], [9700.0, 1.0], [500.0, 2.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 9700.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 1404.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 3786.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1404.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 3786.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 11.41964285714286, "minX": 1.60281354E12, "maxY": 12.0, "series": [{"data": [[1.60281444E12, 11.41964285714286], [1.60281414E12, 12.0], [1.60281408E12, 12.0], [1.60281378E12, 12.0], [1.6028142E12, 12.0], [1.6028139E12, 12.0], [1.60281384E12, 12.0], [1.60281354E12, 12.0], [1.60281396E12, 12.0], [1.60281366E12, 12.0], [1.6028136E12, 12.0], [1.60281426E12, 12.0], [1.60281372E12, 12.0], [1.60281438E12, 12.0], [1.60281432E12, 12.0], [1.60281402E12, 12.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60281444E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 1267.0, "minX": 1.0, "maxY": 4022.0, "series": [{"data": [[8.0, 2743.0], [4.0, 2584.0], [2.0, 3997.0], [1.0, 3736.0], [10.0, 1956.5], [5.0, 2400.0], [11.0, 2791.0], [12.0, 2134.9526935701856], [6.0, 2094.0], [3.0, 4022.0], [7.0, 1267.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[11.987475915221582, 2136.120809248553]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 12.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 847.6833333333333, "minX": 1.60281354E12, "maxY": 2015792.7833333334, "series": [{"data": [[1.60281444E12, 509036.56666666665], [1.60281414E12, 1120230.1], [1.60281408E12, 1362364.5666666667], [1.60281378E12, 1895295.5166666666], [1.6028142E12, 2015792.7833333334], [1.6028139E12, 1665649.1333333333], [1.60281384E12, 1532125.5333333334], [1.60281354E12, 1689052.2], [1.60281396E12, 1601208.85], [1.60281366E12, 1014278.7166666667], [1.6028136E12, 1503481.3666666667], [1.60281426E12, 1579295.35], [1.60281372E12, 2012595.1], [1.60281438E12, 1577016.0666666667], [1.60281432E12, 1421786.9333333333], [1.60281402E12, 1473849.5166666666]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60281444E12, 847.6833333333333], [1.60281414E12, 2964.4333333333334], [1.60281408E12, 2152.733333333333], [1.60281378E12, 2962.0666666666666], [1.6028142E12, 2319.4333333333334], [1.6028139E12, 2680.25], [1.60281384E12, 2517.45], [1.60281354E12, 2109.516666666667], [1.60281396E12, 2159.6666666666665], [1.60281366E12, 2779.366666666667], [1.6028136E12, 2523.9666666666667], [1.60281426E12, 2851.1], [1.60281372E12, 2340.0], [1.60281438E12, 2466.1833333333334], [1.60281432E12, 2739.633333333333], [1.60281402E12, 2163.85]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60281444E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 1756.4341463414628, "minX": 1.60281354E12, "maxY": 2729.598214285714, "series": [{"data": [[1.60281444E12, 2729.598214285714], [1.60281414E12, 1756.4341463414628], [1.60281408E12, 2429.7627118644064], [1.60281378E12, 1817.1045918367356], [1.6028142E12, 2400.875409836065], [1.6028139E12, 1957.5464788732388], [1.60281384E12, 2205.374622356496], [1.60281354E12, 2450.2405498281796], [1.60281396E12, 2556.413194444444], [1.60281366E12, 1881.966233766234], [1.6028136E12, 2041.2406876790828], [1.60281426E12, 1880.9920212765962], [1.60281372E12, 2347.1726384364824], [1.60281438E12, 2214.079510703363], [1.60281432E12, 1995.1274238227136], [1.60281402E12, 2340.0555555555557]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60281444E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 1755.4268292682918, "minX": 1.60281354E12, "maxY": 2728.107142857142, "series": [{"data": [[1.60281444E12, 2728.107142857142], [1.60281414E12, 1755.4268292682918], [1.60281408E12, 2428.17627118644], [1.60281378E12, 1814.9897959183666], [1.6028142E12, 2398.6590163934443], [1.6028139E12, 1955.5126760563385], [1.60281384E12, 2203.3232628398805], [1.60281354E12, 2447.6975945017166], [1.60281396E12, 2553.715277777777], [1.60281366E12, 1880.696103896105], [1.6028136E12, 2039.3123209169062], [1.60281426E12, 1879.5984042553198], [1.60281372E12, 2344.2768729641707], [1.60281438E12, 2212.477064220184], [1.60281432E12, 1993.7950138504152], [1.60281402E12, 2338.333333333333]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60281444E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.02493074792243767, "minX": 1.60281354E12, "maxY": 0.38831615120274904, "series": [{"data": [[1.60281444E12, 0.08928571428571427], [1.60281414E12, 0.034146341463414685], [1.60281408E12, 0.04067796610169496], [1.60281378E12, 0.03316326530612244], [1.6028142E12, 0.039344262295082], [1.6028139E12, 0.05070422535211268], [1.60281384E12, 0.03927492447129913], [1.60281354E12, 0.38831615120274904], [1.60281396E12, 0.052083333333333336], [1.60281366E12, 0.04155844155844153], [1.6028136E12, 0.04584527220630369], [1.60281426E12, 0.026595744680851074], [1.60281372E12, 0.04560260586319223], [1.60281438E12, 0.036697247706422007], [1.60281432E12, 0.02493074792243767], [1.60281402E12, 0.03594771241830068]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60281444E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 567.0, "minX": 1.60281354E12, "maxY": 9720.0, "series": [{"data": [[1.60281444E12, 4852.0], [1.60281414E12, 4886.0], [1.60281408E12, 8506.0], [1.60281378E12, 4367.0], [1.6028142E12, 5066.0], [1.6028139E12, 7253.0], [1.60281384E12, 4924.0], [1.60281354E12, 9720.0], [1.60281396E12, 9133.0], [1.60281366E12, 5693.0], [1.6028136E12, 7457.0], [1.60281426E12, 4711.0], [1.60281372E12, 5626.0], [1.60281438E12, 6732.0], [1.60281432E12, 4337.0], [1.60281402E12, 8450.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60281444E12, 1268.818997117281], [1.60281414E12, 606.7959996080399], [1.60281408E12, 1112.199996471405], [1.60281378E12, 752.6109997189045], [1.6028142E12, 851.2619997811317], [1.6028139E12, 726.4279994058609], [1.60281384E12, 803.9399996042251], [1.60281354E12, 769.5839980506897], [1.60281396E12, 1157.0549962103366], [1.60281366E12, 780.7919992637634], [1.6028136E12, 870.0999971628189], [1.60281426E12, 666.9299991011619], [1.60281372E12, 1036.371996254921], [1.60281438E12, 655.4639974975586], [1.60281432E12, 806.5799991369247], [1.60281402E12, 807.9189990484715]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60281444E12, 1279.7009011530877], [1.60281414E12, 608.3445001959801], [1.60281408E12, 1125.520001411438], [1.60281378E12, 753.6721001124382], [1.6028142E12, 852.3234003210068], [1.6028139E12, 728.6708002376556], [1.60281384E12, 804.286800031662], [1.60281354E12, 776.9424007797242], [1.60281396E12, 1171.3605015158653], [1.60281366E12, 783.5712002944946], [1.6028136E12, 880.8100011348724], [1.60281426E12, 670.3230003595352], [1.60281372E12, 1048.541200323105], [1.60281438E12, 657.7416000938415], [1.60281432E12, 809.8380003452301], [1.60281402E12, 811.2751002049446]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60281444E12, 1274.8644985586404], [1.60281414E12, 607.61799980402], [1.60281408E12, 1119.5999982357025], [1.60281378E12, 753.2004998594523], [1.6028142E12, 851.7209998905658], [1.6028139E12, 727.6739997029305], [1.60281384E12, 804.1539999604225], [1.60281354E12, 773.6719990253448], [1.60281396E12, 1165.0024981051683], [1.60281366E12, 782.3359996318817], [1.6028136E12, 876.0499985814095], [1.60281426E12, 668.814999550581], [1.60281372E12, 1044.2259981274606], [1.60281438E12, 657.3479998826981], [1.60281432E12, 808.3899995684624], [1.60281402E12, 809.9144995242357]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60281444E12, 1267.0], [1.60281414E12, 567.0], [1.60281408E12, 977.0], [1.60281378E12, 724.0], [1.6028142E12, 845.0], [1.6028139E12, 723.0], [1.60281384E12, 779.0], [1.60281354E12, 751.0], [1.60281396E12, 1027.0], [1.60281366E12, 768.0], [1.6028136E12, 790.0], [1.60281426E12, 617.0], [1.60281372E12, 964.0], [1.60281438E12, 613.0], [1.60281432E12, 791.0], [1.60281402E12, 780.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60281444E12, 2611.0], [1.60281414E12, 1730.0], [1.60281408E12, 2007.0], [1.60281378E12, 1720.0], [1.6028142E12, 2277.0], [1.6028139E12, 1805.0], [1.60281384E12, 2237.0], [1.60281354E12, 2270.0], [1.60281396E12, 2397.0], [1.60281366E12, 1539.0], [1.6028136E12, 1881.0], [1.60281426E12, 1772.5], [1.60281372E12, 2248.0], [1.60281438E12, 2007.0], [1.60281432E12, 1984.0], [1.60281402E12, 2089.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60281444E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 829.0, "minX": 1.0, "maxY": 3586.0, "series": [{"data": [[2.0, 2812.0], [8.0, 1902.0], [9.0, 1437.0], [10.0, 1363.5], [11.0, 1158.5], [3.0, 2655.5], [12.0, 930.5], [13.0, 877.0], [14.0, 887.5], [15.0, 829.0], [1.0, 3586.0], [4.0, 2455.5], [5.0, 2251.0], [6.0, 2106.5], [7.0, 1968.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 15.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 829.0, "minX": 1.0, "maxY": 3584.0, "series": [{"data": [[2.0, 2807.0], [8.0, 1901.0], [9.0, 1437.0], [10.0, 1363.5], [11.0, 1158.0], [3.0, 2646.5], [12.0, 930.5], [13.0, 877.0], [14.0, 887.5], [15.0, 829.0], [1.0, 3584.0], [4.0, 2453.5], [5.0, 2251.0], [6.0, 2104.0], [7.0, 1967.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 15.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.16666666666666666, "minX": 1.60281348E12, "maxY": 6.833333333333333, "series": [{"data": [[1.60281348E12, 0.16666666666666666], [1.60281444E12, 1.6666666666666667], [1.60281414E12, 6.833333333333333], [1.60281408E12, 4.916666666666667], [1.60281378E12, 6.533333333333333], [1.6028142E12, 5.083333333333333], [1.6028139E12, 5.916666666666667], [1.60281384E12, 5.516666666666667], [1.60281354E12, 4.866666666666666], [1.60281396E12, 4.8], [1.60281366E12, 6.416666666666667], [1.6028136E12, 5.833333333333333], [1.60281426E12, 6.266666666666667], [1.60281372E12, 5.116666666666666], [1.60281438E12, 5.45], [1.60281432E12, 6.016666666666667], [1.60281402E12, 5.1]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60281444E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1.8666666666666667, "minX": 1.60281354E12, "maxY": 6.833333333333333, "series": [{"data": [[1.60281444E12, 1.8666666666666667], [1.60281414E12, 6.833333333333333], [1.60281408E12, 4.916666666666667], [1.60281378E12, 6.533333333333333], [1.6028142E12, 5.083333333333333], [1.6028139E12, 5.916666666666667], [1.60281384E12, 5.516666666666667], [1.60281354E12, 4.85], [1.60281396E12, 4.8], [1.60281366E12, 6.416666666666667], [1.6028136E12, 5.816666666666666], [1.60281426E12, 6.266666666666667], [1.60281372E12, 5.116666666666666], [1.60281438E12, 5.45], [1.60281432E12, 6.016666666666667], [1.60281402E12, 5.1]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60281444E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.8666666666666667, "minX": 1.60281354E12, "maxY": 6.833333333333333, "series": [{"data": [[1.60281444E12, 1.8666666666666667], [1.60281414E12, 6.833333333333333], [1.60281408E12, 4.916666666666667], [1.60281378E12, 6.533333333333333], [1.6028142E12, 5.083333333333333], [1.6028139E12, 5.916666666666667], [1.60281384E12, 5.516666666666667], [1.60281354E12, 4.85], [1.60281396E12, 4.8], [1.60281366E12, 6.416666666666667], [1.6028136E12, 5.816666666666666], [1.60281426E12, 6.266666666666667], [1.60281372E12, 5.116666666666666], [1.60281438E12, 5.45], [1.60281432E12, 6.016666666666667], [1.60281402E12, 5.1]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60281444E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.8666666666666667, "minX": 1.60281354E12, "maxY": 6.833333333333333, "series": [{"data": [[1.60281444E12, 1.8666666666666667], [1.60281414E12, 6.833333333333333], [1.60281408E12, 4.916666666666667], [1.60281378E12, 6.533333333333333], [1.6028142E12, 5.083333333333333], [1.6028139E12, 5.916666666666667], [1.60281384E12, 5.516666666666667], [1.60281354E12, 4.85], [1.60281396E12, 4.8], [1.60281366E12, 6.416666666666667], [1.6028136E12, 5.816666666666666], [1.60281426E12, 6.266666666666667], [1.60281372E12, 5.116666666666666], [1.60281438E12, 5.45], [1.60281432E12, 6.016666666666667], [1.60281402E12, 5.1]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60281444E12, "title": "Total Transactions Per Second"}},
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

