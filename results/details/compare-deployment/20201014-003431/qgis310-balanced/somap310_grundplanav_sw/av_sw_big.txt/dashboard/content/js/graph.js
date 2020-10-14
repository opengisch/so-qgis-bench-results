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
        data: {"result": {"minY": 585.0, "minX": 0.0, "maxY": 8275.0, "series": [{"data": [[0.0, 585.0], [0.1, 646.0], [0.2, 719.0], [0.3, 731.0], [0.4, 737.0], [0.5, 739.0], [0.6, 745.0], [0.7, 747.0], [0.8, 753.0], [0.9, 756.0], [1.0, 756.0], [1.1, 760.0], [1.2, 763.0], [1.3, 765.0], [1.4, 766.0], [1.5, 768.0], [1.6, 771.0], [1.7, 774.0], [1.8, 776.0], [1.9, 778.0], [2.0, 780.0], [2.1, 783.0], [2.2, 787.0], [2.3, 789.0], [2.4, 791.0], [2.5, 794.0], [2.6, 796.0], [2.7, 797.0], [2.8, 800.0], [2.9, 803.0], [3.0, 805.0], [3.1, 807.0], [3.2, 808.0], [3.3, 811.0], [3.4, 814.0], [3.5, 815.0], [3.6, 818.0], [3.7, 819.0], [3.8, 821.0], [3.9, 822.0], [4.0, 823.0], [4.1, 825.0], [4.2, 827.0], [4.3, 828.0], [4.4, 830.0], [4.5, 832.0], [4.6, 833.0], [4.7, 834.0], [4.8, 836.0], [4.9, 837.0], [5.0, 839.0], [5.1, 840.0], [5.2, 842.0], [5.3, 844.0], [5.4, 845.0], [5.5, 847.0], [5.6, 848.0], [5.7, 850.0], [5.8, 852.0], [5.9, 853.0], [6.0, 854.0], [6.1, 855.0], [6.2, 856.0], [6.3, 857.0], [6.4, 858.0], [6.5, 860.0], [6.6, 861.0], [6.7, 863.0], [6.8, 865.0], [6.9, 867.0], [7.0, 868.0], [7.1, 869.0], [7.2, 871.0], [7.3, 872.0], [7.4, 874.0], [7.5, 877.0], [7.6, 878.0], [7.7, 880.0], [7.8, 881.0], [7.9, 884.0], [8.0, 886.0], [8.1, 888.0], [8.2, 890.0], [8.3, 892.0], [8.4, 893.0], [8.5, 895.0], [8.6, 898.0], [8.7, 899.0], [8.8, 900.0], [8.9, 900.0], [9.0, 902.0], [9.1, 904.0], [9.2, 905.0], [9.3, 905.0], [9.4, 907.0], [9.5, 908.0], [9.6, 909.0], [9.7, 910.0], [9.8, 911.0], [9.9, 913.0], [10.0, 915.0], [10.1, 917.0], [10.2, 919.0], [10.3, 920.0], [10.4, 921.0], [10.5, 922.0], [10.6, 925.0], [10.7, 927.0], [10.8, 929.0], [10.9, 930.0], [11.0, 938.0], [11.1, 943.0], [11.2, 948.0], [11.3, 953.0], [11.4, 955.0], [11.5, 959.0], [11.6, 962.0], [11.7, 970.0], [11.8, 975.0], [11.9, 980.0], [12.0, 981.0], [12.1, 986.0], [12.2, 991.0], [12.3, 994.0], [12.4, 998.0], [12.5, 1003.0], [12.6, 1009.0], [12.7, 1014.0], [12.8, 1018.0], [12.9, 1032.0], [13.0, 1038.0], [13.1, 1041.0], [13.2, 1050.0], [13.3, 1053.0], [13.4, 1056.0], [13.5, 1062.0], [13.6, 1064.0], [13.7, 1071.0], [13.8, 1074.0], [13.9, 1082.0], [14.0, 1086.0], [14.1, 1088.0], [14.2, 1097.0], [14.3, 1102.0], [14.4, 1105.0], [14.5, 1108.0], [14.6, 1110.0], [14.7, 1113.0], [14.8, 1117.0], [14.9, 1123.0], [15.0, 1129.0], [15.1, 1133.0], [15.2, 1133.0], [15.3, 1138.0], [15.4, 1140.0], [15.5, 1142.0], [15.6, 1144.0], [15.7, 1148.0], [15.8, 1150.0], [15.9, 1153.0], [16.0, 1157.0], [16.1, 1159.0], [16.2, 1162.0], [16.3, 1165.0], [16.4, 1167.0], [16.5, 1170.0], [16.6, 1172.0], [16.7, 1174.0], [16.8, 1177.0], [16.9, 1180.0], [17.0, 1183.0], [17.1, 1185.0], [17.2, 1187.0], [17.3, 1189.0], [17.4, 1193.0], [17.5, 1195.0], [17.6, 1198.0], [17.7, 1199.0], [17.8, 1205.0], [17.9, 1209.0], [18.0, 1211.0], [18.1, 1215.0], [18.2, 1218.0], [18.3, 1221.0], [18.4, 1223.0], [18.5, 1228.0], [18.6, 1229.0], [18.7, 1234.0], [18.8, 1237.0], [18.9, 1239.0], [19.0, 1242.0], [19.1, 1245.0], [19.2, 1249.0], [19.3, 1251.0], [19.4, 1254.0], [19.5, 1257.0], [19.6, 1259.0], [19.7, 1262.0], [19.8, 1265.0], [19.9, 1268.0], [20.0, 1269.0], [20.1, 1275.0], [20.2, 1279.0], [20.3, 1281.0], [20.4, 1284.0], [20.5, 1287.0], [20.6, 1291.0], [20.7, 1294.0], [20.8, 1297.0], [20.9, 1303.0], [21.0, 1306.0], [21.1, 1308.0], [21.2, 1310.0], [21.3, 1312.0], [21.4, 1315.0], [21.5, 1319.0], [21.6, 1323.0], [21.7, 1325.0], [21.8, 1331.0], [21.9, 1334.0], [22.0, 1337.0], [22.1, 1339.0], [22.2, 1341.0], [22.3, 1345.0], [22.4, 1347.0], [22.5, 1350.0], [22.6, 1354.0], [22.7, 1356.0], [22.8, 1359.0], [22.9, 1361.0], [23.0, 1365.0], [23.1, 1369.0], [23.2, 1371.0], [23.3, 1374.0], [23.4, 1375.0], [23.5, 1379.0], [23.6, 1382.0], [23.7, 1385.0], [23.8, 1388.0], [23.9, 1392.0], [24.0, 1395.0], [24.1, 1396.0], [24.2, 1397.0], [24.3, 1402.0], [24.4, 1404.0], [24.5, 1407.0], [24.6, 1409.0], [24.7, 1411.0], [24.8, 1414.0], [24.9, 1416.0], [25.0, 1422.0], [25.1, 1426.0], [25.2, 1427.0], [25.3, 1430.0], [25.4, 1434.0], [25.5, 1436.0], [25.6, 1441.0], [25.7, 1446.0], [25.8, 1448.0], [25.9, 1449.0], [26.0, 1450.0], [26.1, 1453.0], [26.2, 1457.0], [26.3, 1459.0], [26.4, 1462.0], [26.5, 1465.0], [26.6, 1466.0], [26.7, 1468.0], [26.8, 1471.0], [26.9, 1474.0], [27.0, 1477.0], [27.1, 1481.0], [27.2, 1484.0], [27.3, 1485.0], [27.4, 1487.0], [27.5, 1490.0], [27.6, 1492.0], [27.7, 1494.0], [27.8, 1496.0], [27.9, 1498.0], [28.0, 1500.0], [28.1, 1503.0], [28.2, 1504.0], [28.3, 1507.0], [28.4, 1509.0], [28.5, 1514.0], [28.6, 1516.0], [28.7, 1517.0], [28.8, 1519.0], [28.9, 1523.0], [29.0, 1525.0], [29.1, 1529.0], [29.2, 1530.0], [29.3, 1533.0], [29.4, 1535.0], [29.5, 1538.0], [29.6, 1540.0], [29.7, 1544.0], [29.8, 1547.0], [29.9, 1549.0], [30.0, 1551.0], [30.1, 1553.0], [30.2, 1554.0], [30.3, 1556.0], [30.4, 1557.0], [30.5, 1558.0], [30.6, 1560.0], [30.7, 1564.0], [30.8, 1567.0], [30.9, 1568.0], [31.0, 1569.0], [31.1, 1571.0], [31.2, 1574.0], [31.3, 1579.0], [31.4, 1582.0], [31.5, 1583.0], [31.6, 1587.0], [31.7, 1589.0], [31.8, 1590.0], [31.9, 1591.0], [32.0, 1592.0], [32.1, 1595.0], [32.2, 1598.0], [32.3, 1603.0], [32.4, 1606.0], [32.5, 1608.0], [32.6, 1610.0], [32.7, 1613.0], [32.8, 1615.0], [32.9, 1616.0], [33.0, 1618.0], [33.1, 1620.0], [33.2, 1622.0], [33.3, 1626.0], [33.4, 1628.0], [33.5, 1630.0], [33.6, 1632.0], [33.7, 1636.0], [33.8, 1639.0], [33.9, 1642.0], [34.0, 1644.0], [34.1, 1646.0], [34.2, 1647.0], [34.3, 1652.0], [34.4, 1654.0], [34.5, 1656.0], [34.6, 1657.0], [34.7, 1660.0], [34.8, 1663.0], [34.9, 1666.0], [35.0, 1670.0], [35.1, 1674.0], [35.2, 1676.0], [35.3, 1679.0], [35.4, 1682.0], [35.5, 1685.0], [35.6, 1687.0], [35.7, 1689.0], [35.8, 1690.0], [35.9, 1691.0], [36.0, 1694.0], [36.1, 1697.0], [36.2, 1700.0], [36.3, 1702.0], [36.4, 1705.0], [36.5, 1708.0], [36.6, 1711.0], [36.7, 1712.0], [36.8, 1715.0], [36.9, 1719.0], [37.0, 1722.0], [37.1, 1727.0], [37.2, 1730.0], [37.3, 1731.0], [37.4, 1734.0], [37.5, 1735.0], [37.6, 1739.0], [37.7, 1740.0], [37.8, 1743.0], [37.9, 1748.0], [38.0, 1754.0], [38.1, 1757.0], [38.2, 1759.0], [38.3, 1760.0], [38.4, 1762.0], [38.5, 1765.0], [38.6, 1766.0], [38.7, 1771.0], [38.8, 1772.0], [38.9, 1776.0], [39.0, 1778.0], [39.1, 1781.0], [39.2, 1782.0], [39.3, 1784.0], [39.4, 1785.0], [39.5, 1787.0], [39.6, 1788.0], [39.7, 1791.0], [39.8, 1795.0], [39.9, 1797.0], [40.0, 1799.0], [40.1, 1802.0], [40.2, 1803.0], [40.3, 1805.0], [40.4, 1807.0], [40.5, 1810.0], [40.6, 1813.0], [40.7, 1814.0], [40.8, 1816.0], [40.9, 1817.0], [41.0, 1819.0], [41.1, 1820.0], [41.2, 1822.0], [41.3, 1824.0], [41.4, 1827.0], [41.5, 1829.0], [41.6, 1831.0], [41.7, 1834.0], [41.8, 1834.0], [41.9, 1836.0], [42.0, 1839.0], [42.1, 1842.0], [42.2, 1846.0], [42.3, 1847.0], [42.4, 1849.0], [42.5, 1851.0], [42.6, 1854.0], [42.7, 1855.0], [42.8, 1858.0], [42.9, 1863.0], [43.0, 1865.0], [43.1, 1866.0], [43.2, 1868.0], [43.3, 1869.0], [43.4, 1870.0], [43.5, 1872.0], [43.6, 1873.0], [43.7, 1874.0], [43.8, 1875.0], [43.9, 1878.0], [44.0, 1880.0], [44.1, 1882.0], [44.2, 1885.0], [44.3, 1887.0], [44.4, 1888.0], [44.5, 1891.0], [44.6, 1893.0], [44.7, 1894.0], [44.8, 1895.0], [44.9, 1897.0], [45.0, 1899.0], [45.1, 1901.0], [45.2, 1904.0], [45.3, 1906.0], [45.4, 1907.0], [45.5, 1908.0], [45.6, 1909.0], [45.7, 1911.0], [45.8, 1913.0], [45.9, 1914.0], [46.0, 1915.0], [46.1, 1917.0], [46.2, 1918.0], [46.3, 1920.0], [46.4, 1921.0], [46.5, 1922.0], [46.6, 1924.0], [46.7, 1926.0], [46.8, 1927.0], [46.9, 1931.0], [47.0, 1934.0], [47.1, 1937.0], [47.2, 1938.0], [47.3, 1941.0], [47.4, 1943.0], [47.5, 1944.0], [47.6, 1945.0], [47.7, 1946.0], [47.8, 1948.0], [47.9, 1949.0], [48.0, 1951.0], [48.1, 1952.0], [48.2, 1953.0], [48.3, 1955.0], [48.4, 1958.0], [48.5, 1961.0], [48.6, 1965.0], [48.7, 1967.0], [48.8, 1968.0], [48.9, 1970.0], [49.0, 1973.0], [49.1, 1973.0], [49.2, 1976.0], [49.3, 1977.0], [49.4, 1980.0], [49.5, 1981.0], [49.6, 1982.0], [49.7, 1984.0], [49.8, 1986.0], [49.9, 1987.0], [50.0, 1992.0], [50.1, 1995.0], [50.2, 1997.0], [50.3, 1999.0], [50.4, 2001.0], [50.5, 2002.0], [50.6, 2003.0], [50.7, 2006.0], [50.8, 2008.0], [50.9, 2010.0], [51.0, 2011.0], [51.1, 2015.0], [51.2, 2018.0], [51.3, 2019.0], [51.4, 2021.0], [51.5, 2025.0], [51.6, 2027.0], [51.7, 2029.0], [51.8, 2030.0], [51.9, 2033.0], [52.0, 2034.0], [52.1, 2036.0], [52.2, 2038.0], [52.3, 2038.0], [52.4, 2040.0], [52.5, 2041.0], [52.6, 2043.0], [52.7, 2046.0], [52.8, 2048.0], [52.9, 2050.0], [53.0, 2052.0], [53.1, 2053.0], [53.2, 2055.0], [53.3, 2057.0], [53.4, 2059.0], [53.5, 2060.0], [53.6, 2062.0], [53.7, 2064.0], [53.8, 2066.0], [53.9, 2070.0], [54.0, 2072.0], [54.1, 2073.0], [54.2, 2076.0], [54.3, 2080.0], [54.4, 2083.0], [54.5, 2087.0], [54.6, 2090.0], [54.7, 2092.0], [54.8, 2095.0], [54.9, 2100.0], [55.0, 2102.0], [55.1, 2106.0], [55.2, 2108.0], [55.3, 2111.0], [55.4, 2112.0], [55.5, 2115.0], [55.6, 2116.0], [55.7, 2117.0], [55.8, 2120.0], [55.9, 2123.0], [56.0, 2126.0], [56.1, 2127.0], [56.2, 2128.0], [56.3, 2130.0], [56.4, 2134.0], [56.5, 2136.0], [56.6, 2139.0], [56.7, 2141.0], [56.8, 2144.0], [56.9, 2147.0], [57.0, 2150.0], [57.1, 2151.0], [57.2, 2154.0], [57.3, 2157.0], [57.4, 2160.0], [57.5, 2161.0], [57.6, 2165.0], [57.7, 2167.0], [57.8, 2171.0], [57.9, 2173.0], [58.0, 2175.0], [58.1, 2176.0], [58.2, 2180.0], [58.3, 2182.0], [58.4, 2183.0], [58.5, 2185.0], [58.6, 2187.0], [58.7, 2188.0], [58.8, 2191.0], [58.9, 2193.0], [59.0, 2197.0], [59.1, 2200.0], [59.2, 2202.0], [59.3, 2205.0], [59.4, 2207.0], [59.5, 2210.0], [59.6, 2213.0], [59.7, 2217.0], [59.8, 2219.0], [59.9, 2221.0], [60.0, 2222.0], [60.1, 2223.0], [60.2, 2226.0], [60.3, 2227.0], [60.4, 2230.0], [60.5, 2231.0], [60.6, 2235.0], [60.7, 2236.0], [60.8, 2240.0], [60.9, 2243.0], [61.0, 2245.0], [61.1, 2247.0], [61.2, 2250.0], [61.3, 2252.0], [61.4, 2253.0], [61.5, 2256.0], [61.6, 2261.0], [61.7, 2264.0], [61.8, 2266.0], [61.9, 2269.0], [62.0, 2273.0], [62.1, 2277.0], [62.2, 2280.0], [62.3, 2282.0], [62.4, 2285.0], [62.5, 2290.0], [62.6, 2292.0], [62.7, 2295.0], [62.8, 2297.0], [62.9, 2301.0], [63.0, 2303.0], [63.1, 2308.0], [63.2, 2310.0], [63.3, 2312.0], [63.4, 2315.0], [63.5, 2316.0], [63.6, 2321.0], [63.7, 2325.0], [63.8, 2327.0], [63.9, 2328.0], [64.0, 2331.0], [64.1, 2334.0], [64.2, 2336.0], [64.3, 2340.0], [64.4, 2342.0], [64.5, 2344.0], [64.6, 2347.0], [64.7, 2348.0], [64.8, 2352.0], [64.9, 2354.0], [65.0, 2357.0], [65.1, 2359.0], [65.2, 2361.0], [65.3, 2363.0], [65.4, 2364.0], [65.5, 2365.0], [65.6, 2370.0], [65.7, 2371.0], [65.8, 2372.0], [65.9, 2373.0], [66.0, 2376.0], [66.1, 2379.0], [66.2, 2383.0], [66.3, 2386.0], [66.4, 2388.0], [66.5, 2389.0], [66.6, 2391.0], [66.7, 2394.0], [66.8, 2398.0], [66.9, 2401.0], [67.0, 2404.0], [67.1, 2406.0], [67.2, 2408.0], [67.3, 2409.0], [67.4, 2412.0], [67.5, 2416.0], [67.6, 2420.0], [67.7, 2422.0], [67.8, 2425.0], [67.9, 2432.0], [68.0, 2435.0], [68.1, 2437.0], [68.2, 2440.0], [68.3, 2443.0], [68.4, 2446.0], [68.5, 2450.0], [68.6, 2454.0], [68.7, 2456.0], [68.8, 2457.0], [68.9, 2459.0], [69.0, 2464.0], [69.1, 2465.0], [69.2, 2469.0], [69.3, 2472.0], [69.4, 2476.0], [69.5, 2480.0], [69.6, 2483.0], [69.7, 2487.0], [69.8, 2488.0], [69.9, 2491.0], [70.0, 2494.0], [70.1, 2496.0], [70.2, 2498.0], [70.3, 2502.0], [70.4, 2506.0], [70.5, 2507.0], [70.6, 2510.0], [70.7, 2512.0], [70.8, 2514.0], [70.9, 2518.0], [71.0, 2521.0], [71.1, 2524.0], [71.2, 2526.0], [71.3, 2528.0], [71.4, 2529.0], [71.5, 2531.0], [71.6, 2533.0], [71.7, 2535.0], [71.8, 2542.0], [71.9, 2544.0], [72.0, 2546.0], [72.1, 2547.0], [72.2, 2554.0], [72.3, 2555.0], [72.4, 2558.0], [72.5, 2562.0], [72.6, 2568.0], [72.7, 2569.0], [72.8, 2574.0], [72.9, 2577.0], [73.0, 2580.0], [73.1, 2582.0], [73.2, 2584.0], [73.3, 2586.0], [73.4, 2591.0], [73.5, 2592.0], [73.6, 2596.0], [73.7, 2601.0], [73.8, 2605.0], [73.9, 2607.0], [74.0, 2611.0], [74.1, 2616.0], [74.2, 2619.0], [74.3, 2623.0], [74.4, 2625.0], [74.5, 2628.0], [74.6, 2630.0], [74.7, 2635.0], [74.8, 2638.0], [74.9, 2642.0], [75.0, 2644.0], [75.1, 2646.0], [75.2, 2649.0], [75.3, 2652.0], [75.4, 2657.0], [75.5, 2660.0], [75.6, 2662.0], [75.7, 2665.0], [75.8, 2668.0], [75.9, 2672.0], [76.0, 2674.0], [76.1, 2677.0], [76.2, 2680.0], [76.3, 2684.0], [76.4, 2690.0], [76.5, 2690.0], [76.6, 2692.0], [76.7, 2696.0], [76.8, 2701.0], [76.9, 2703.0], [77.0, 2705.0], [77.1, 2709.0], [77.2, 2712.0], [77.3, 2716.0], [77.4, 2720.0], [77.5, 2722.0], [77.6, 2724.0], [77.7, 2727.0], [77.8, 2729.0], [77.9, 2732.0], [78.0, 2735.0], [78.1, 2737.0], [78.2, 2738.0], [78.3, 2742.0], [78.4, 2744.0], [78.5, 2746.0], [78.6, 2748.0], [78.7, 2751.0], [78.8, 2752.0], [78.9, 2755.0], [79.0, 2760.0], [79.1, 2762.0], [79.2, 2767.0], [79.3, 2771.0], [79.4, 2777.0], [79.5, 2786.0], [79.6, 2791.0], [79.7, 2794.0], [79.8, 2796.0], [79.9, 2798.0], [80.0, 2805.0], [80.1, 2809.0], [80.2, 2810.0], [80.3, 2814.0], [80.4, 2818.0], [80.5, 2825.0], [80.6, 2827.0], [80.7, 2830.0], [80.8, 2836.0], [80.9, 2838.0], [81.0, 2841.0], [81.1, 2846.0], [81.2, 2847.0], [81.3, 2850.0], [81.4, 2854.0], [81.5, 2856.0], [81.6, 2858.0], [81.7, 2861.0], [81.8, 2868.0], [81.9, 2873.0], [82.0, 2878.0], [82.1, 2880.0], [82.2, 2883.0], [82.3, 2885.0], [82.4, 2892.0], [82.5, 2897.0], [82.6, 2902.0], [82.7, 2909.0], [82.8, 2912.0], [82.9, 2919.0], [83.0, 2922.0], [83.1, 2926.0], [83.2, 2931.0], [83.3, 2937.0], [83.4, 2942.0], [83.5, 2944.0], [83.6, 2949.0], [83.7, 2958.0], [83.8, 2961.0], [83.9, 2964.0], [84.0, 2970.0], [84.1, 2974.0], [84.2, 2978.0], [84.3, 2985.0], [84.4, 2992.0], [84.5, 2994.0], [84.6, 2998.0], [84.7, 3003.0], [84.8, 3015.0], [84.9, 3021.0], [85.0, 3025.0], [85.1, 3029.0], [85.2, 3033.0], [85.3, 3037.0], [85.4, 3040.0], [85.5, 3044.0], [85.6, 3049.0], [85.7, 3053.0], [85.8, 3059.0], [85.9, 3062.0], [86.0, 3074.0], [86.1, 3082.0], [86.2, 3087.0], [86.3, 3093.0], [86.4, 3097.0], [86.5, 3100.0], [86.6, 3109.0], [86.7, 3110.0], [86.8, 3113.0], [86.9, 3120.0], [87.0, 3125.0], [87.1, 3128.0], [87.2, 3132.0], [87.3, 3139.0], [87.4, 3145.0], [87.5, 3151.0], [87.6, 3153.0], [87.7, 3157.0], [87.8, 3160.0], [87.9, 3167.0], [88.0, 3174.0], [88.1, 3181.0], [88.2, 3186.0], [88.3, 3191.0], [88.4, 3194.0], [88.5, 3201.0], [88.6, 3204.0], [88.7, 3207.0], [88.8, 3213.0], [88.9, 3217.0], [89.0, 3224.0], [89.1, 3236.0], [89.2, 3244.0], [89.3, 3253.0], [89.4, 3257.0], [89.5, 3266.0], [89.6, 3272.0], [89.7, 3276.0], [89.8, 3285.0], [89.9, 3294.0], [90.0, 3302.0], [90.1, 3305.0], [90.2, 3314.0], [90.3, 3317.0], [90.4, 3328.0], [90.5, 3336.0], [90.6, 3345.0], [90.7, 3354.0], [90.8, 3357.0], [90.9, 3360.0], [91.0, 3372.0], [91.1, 3384.0], [91.2, 3387.0], [91.3, 3392.0], [91.4, 3406.0], [91.5, 3414.0], [91.6, 3425.0], [91.7, 3431.0], [91.8, 3441.0], [91.9, 3445.0], [92.0, 3451.0], [92.1, 3462.0], [92.2, 3470.0], [92.3, 3480.0], [92.4, 3487.0], [92.5, 3500.0], [92.6, 3508.0], [92.7, 3516.0], [92.8, 3520.0], [92.9, 3524.0], [93.0, 3532.0], [93.1, 3545.0], [93.2, 3557.0], [93.3, 3566.0], [93.4, 3582.0], [93.5, 3593.0], [93.6, 3606.0], [93.7, 3614.0], [93.8, 3624.0], [93.9, 3638.0], [94.0, 3649.0], [94.1, 3663.0], [94.2, 3679.0], [94.3, 3699.0], [94.4, 3723.0], [94.5, 3735.0], [94.6, 3738.0], [94.7, 3742.0], [94.8, 3766.0], [94.9, 3775.0], [95.0, 3784.0], [95.1, 3799.0], [95.2, 3819.0], [95.3, 3856.0], [95.4, 3879.0], [95.5, 3892.0], [95.6, 3900.0], [95.7, 3911.0], [95.8, 3933.0], [95.9, 3948.0], [96.0, 3968.0], [96.1, 3993.0], [96.2, 4026.0], [96.3, 4049.0], [96.4, 4067.0], [96.5, 4084.0], [96.6, 4100.0], [96.7, 4123.0], [96.8, 4142.0], [96.9, 4183.0], [97.0, 4215.0], [97.1, 4239.0], [97.2, 4279.0], [97.3, 4341.0], [97.4, 4418.0], [97.5, 4472.0], [97.6, 4511.0], [97.7, 4547.0], [97.8, 4556.0], [97.9, 4591.0], [98.0, 4631.0], [98.1, 4729.0], [98.2, 4820.0], [98.3, 4905.0], [98.4, 4948.0], [98.5, 5016.0], [98.6, 5127.0], [98.7, 5169.0], [98.8, 5263.0], [98.9, 5417.0], [99.0, 5641.0], [99.1, 5727.0], [99.2, 5899.0], [99.3, 6022.0], [99.4, 6223.0], [99.5, 6475.0], [99.6, 6683.0], [99.7, 6818.0], [99.8, 7157.0], [99.9, 7348.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 500.0, "maxY": 309.0, "series": [{"data": [[600.0, 7.0], [700.0, 137.0], [800.0, 309.0], [900.0, 192.0], [1000.0, 94.0], [1100.0, 179.0], [1200.0, 161.0], [1300.0, 179.0], [1400.0, 191.0], [1500.0, 222.0], [1600.0, 205.0], [1700.0, 199.0], [1800.0, 260.0], [1900.0, 275.0], [2000.0, 237.0], [2100.0, 219.0], [2300.0, 208.0], [2200.0, 194.0], [2400.0, 176.0], [2500.0, 179.0], [2600.0, 161.0], [2700.0, 163.0], [2800.0, 136.0], [2900.0, 109.0], [3000.0, 95.0], [3100.0, 104.0], [3200.0, 78.0], [3300.0, 71.0], [3400.0, 59.0], [3500.0, 55.0], [3600.0, 40.0], [3700.0, 41.0], [3800.0, 25.0], [3900.0, 27.0], [4000.0, 24.0], [4100.0, 21.0], [4200.0, 14.0], [4300.0, 6.0], [4500.0, 19.0], [4400.0, 11.0], [4600.0, 6.0], [4800.0, 5.0], [4700.0, 7.0], [5100.0, 10.0], [5000.0, 5.0], [4900.0, 9.0], [5200.0, 3.0], [5300.0, 3.0], [5600.0, 5.0], [5400.0, 3.0], [5500.0, 3.0], [5800.0, 3.0], [5700.0, 4.0], [6100.0, 3.0], [5900.0, 3.0], [6000.0, 3.0], [6200.0, 4.0], [6300.0, 2.0], [6500.0, 3.0], [6600.0, 4.0], [6400.0, 1.0], [6900.0, 3.0], [6800.0, 1.0], [6700.0, 2.0], [7100.0, 2.0], [7000.0, 1.0], [7200.0, 3.0], [7300.0, 1.0], [7600.0, 1.0], [7500.0, 2.0], [7700.0, 1.0], [8200.0, 1.0], [500.0, 1.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 8200.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 1454.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 3736.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1454.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 3736.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 10.56521739130435, "minX": 1.60264074E12, "maxY": 12.0, "series": [{"data": [[1.60264122E12, 12.0], [1.60264152E12, 12.0], [1.60264092E12, 12.0], [1.60264158E12, 12.0], [1.60264146E12, 12.0], [1.6026408E12, 12.0], [1.60264086E12, 12.0], [1.60264116E12, 12.0], [1.60264074E12, 12.0], [1.60264104E12, 12.0], [1.6026417E12, 10.56521739130435], [1.6026411E12, 12.0], [1.6026414E12, 12.0], [1.60264098E12, 12.0], [1.60264128E12, 12.0], [1.60264134E12, 12.0], [1.60264164E12, 12.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6026417E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 1703.0, "minX": 1.0, "maxY": 3932.0, "series": [{"data": [[8.0, 1703.0], [4.0, 1760.0], [2.0, 3899.0], [1.0, 3647.0], [9.0, 1790.0], [10.0, 2016.0], [5.0, 2038.0], [11.0, 2857.0], [12.0, 2119.57134581965], [6.0, 2188.0], [3.0, 3932.0], [7.0, 1722.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[11.987283236994216, 2120.387668593443]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 12.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 244.53333333333333, "minX": 1.60264074E12, "maxY": 2044032.1166666667, "series": [{"data": [[1.60264122E12, 1653175.5833333333], [1.60264152E12, 1524906.7666666666], [1.60264092E12, 1151327.4333333333], [1.60264158E12, 1548837.5], [1.60264146E12, 2004067.4166666667], [1.6026408E12, 1617547.9166666667], [1.60264086E12, 1425572.6666666667], [1.60264116E12, 1599208.8166666667], [1.60264074E12, 266465.0], [1.60264104E12, 1881259.9666666666], [1.6026417E12, 205950.28333333333], [1.6026411E12, 1539950.1666666667], [1.6026414E12, 1369445.2833333334], [1.60264098E12, 2044032.1166666667], [1.60264128E12, 1420086.3], [1.60264134E12, 1287094.7333333334], [1.60264164E12, 1433456.5666666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60264122E12, 1950.4166666666667], [1.60264152E12, 2762.6], [1.60264092E12, 2904.016666666667], [1.60264158E12, 2812.1833333333334], [1.60264146E12, 2583.116666666667], [1.6026408E12, 2269.733333333333], [1.60264086E12, 2328.4333333333334], [1.60264116E12, 2568.233333333333], [1.60264074E12, 244.53333333333333], [1.60264104E12, 2742.05], [1.6026417E12, 355.23333333333335], [1.6026411E12, 2663.25], [1.6026414E12, 2876.6666666666665], [1.60264098E12, 2556.616666666667], [1.60264128E12, 2389.2], [1.60264134E12, 2181.016666666667], [1.60264164E12, 2390.0333333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6026417E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 1824.5025380710665, "minX": 1.60264074E12, "maxY": 2890.53125, "series": [{"data": [[1.60264122E12, 2603.8505747126446], [1.60264152E12, 1955.8958904109584], [1.60264092E12, 1837.1575000000007], [1.60264158E12, 1968.691056910569], [1.60264146E12, 2126.0558823529423], [1.6026408E12, 2290.2271293375397], [1.60264086E12, 2209.8531250000005], [1.60264116E12, 2112.1583577712627], [1.60264074E12, 2890.53125], [1.60264104E12, 1986.9473684210523], [1.6026417E12, 2599.739130434782], [1.6026411E12, 2060.5185185185182], [1.6026414E12, 1824.5025380710665], [1.60264098E12, 2115.139465875371], [1.60264128E12, 2261.387573964496], [1.60264134E12, 2377.688963210703], [1.60264164E12, 2238.8275862068967]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6026417E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 1823.2208121827418, "minX": 1.60264074E12, "maxY": 2887.2187499999995, "series": [{"data": [[1.60264122E12, 2601.7509578544054], [1.60264152E12, 1954.5068493150684], [1.60264092E12, 1835.8849999999989], [1.60264158E12, 1967.2953929539292], [1.60264146E12, 2124.0588235294117], [1.6026408E12, 2287.971608832807], [1.60264086E12, 2207.887499999999], [1.60264116E12, 2110.041055718476], [1.60264074E12, 2887.2187499999995], [1.60264104E12, 1984.656509695291], [1.6026417E12, 2598.347826086957], [1.6026411E12, 2058.584045584044], [1.6026414E12, 1823.2208121827418], [1.60264098E12, 2112.4777448071204], [1.60264128E12, 2259.958579881657], [1.60264134E12, 2376.2608695652166], [1.60264164E12, 2237.3260188087766]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6026417E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.026627218934911268, "minX": 1.60264074E12, "maxY": 5.1875, "series": [{"data": [[1.60264122E12, 0.038314176245210683], [1.60264152E12, 0.027397260273972626], [1.60264092E12, 0.03250000000000001], [1.60264158E12, 0.03252032520325204], [1.60264146E12, 0.032352941176470626], [1.6026408E12, 0.05362776025236594], [1.60264086E12, 0.040624999999999994], [1.60264116E12, 0.0439882697947214], [1.60264074E12, 5.1875], [1.60264104E12, 0.0443213296398892], [1.6026417E12, 0.06521739130434782], [1.6026411E12, 0.03418803418803421], [1.6026414E12, 0.03299492385786801], [1.60264098E12, 0.03857566765578635], [1.60264128E12, 0.026627218934911268], [1.60264134E12, 0.0401337792642141], [1.60264164E12, 0.04388714733542325]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6026417E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 585.0, "minX": 1.60264074E12, "maxY": 8275.0, "series": [{"data": [[1.60264122E12, 6818.0], [1.60264152E12, 4279.0], [1.60264092E12, 5181.0], [1.60264158E12, 4777.0], [1.60264146E12, 4352.0], [1.6026408E12, 7233.0], [1.60264086E12, 7760.0], [1.60264116E12, 6524.0], [1.60264074E12, 5126.0], [1.60264104E12, 6243.0], [1.6026417E12, 4492.0], [1.6026411E12, 4593.0], [1.6026414E12, 4520.0], [1.60264098E12, 6292.0], [1.60264128E12, 8275.0], [1.60264134E12, 6510.0], [1.60264164E12, 6740.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60264122E12, 1178.9379993128778], [1.60264152E12, 630.1679937171936], [1.60264092E12, 755.2179998087882], [1.60264158E12, 770.9799994707107], [1.60264146E12, 774.2069997560978], [1.6026408E12, 726.7179932522774], [1.60264086E12, 1004.3429933416844], [1.60264116E12, 735.0779999184608], [1.60264074E12, 1414.0], [1.60264104E12, 739.5159998273849], [1.6026417E12, 1187.0], [1.6026411E12, 757.3439993286133], [1.6026414E12, 776.1099998116493], [1.60264098E12, 842.6719987106324], [1.60264128E12, 800.7849971711636], [1.60264134E12, 1133.8999973535538], [1.60264164E12, 718.2799995422363]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60264122E12, 1181.531800274849], [1.60264152E12, 653.8848025131225], [1.60264092E12, 755.9398000764846], [1.60264158E12, 772.9780002117157], [1.60264146E12, 775.1277000975609], [1.6026408E12, 740.0374002122879], [1.60264086E12, 1028.9436025714874], [1.60264116E12, 735.3858000326156], [1.60264074E12, 1414.0], [1.60264104E12, 740.167600069046], [1.6026417E12, 1187.0], [1.6026411E12, 759.8784002685547], [1.6026414E12, 776.8210000753403], [1.60264098E12, 847.5392005157471], [1.60264128E12, 811.4635011315346], [1.60264134E12, 1143.8900010585785], [1.60264164E12, 719.8400001525879]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60264122E12, 1180.3789996564387], [1.60264152E12, 643.3439968585968], [1.60264092E12, 755.6189999043942], [1.60264158E12, 772.0899997353554], [1.60264146E12, 774.7184998780489], [1.6026408E12, 739.1469997346401], [1.60264086E12, 1018.1579967856406], [1.60264116E12, 735.2489999592304], [1.60264074E12, 1414.0], [1.60264104E12, 739.8779999136925], [1.6026417E12, 1187.0], [1.6026411E12, 758.7519996643066], [1.6026414E12, 776.5049999058247], [1.60264098E12, 845.3759993553161], [1.60264128E12, 806.7174985855818], [1.60264134E12, 1139.4499986767769], [1.60264164E12, 719.1999998092651]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60264122E12, 1115.0], [1.60264152E12, 585.0], [1.60264092E12, 731.0], [1.60264158E12, 764.0], [1.60264146E12, 766.0], [1.6026408E12, 646.0], [1.60264086E12, 922.0], [1.60264116E12, 704.0], [1.60264074E12, 1414.0], [1.60264104E12, 736.0], [1.6026417E12, 1187.0], [1.6026411E12, 745.0], [1.6026414E12, 619.0], [1.60264098E12, 807.0], [1.60264128E12, 757.0], [1.60264134E12, 980.0], [1.60264164E12, 645.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60264122E12, 2482.0], [1.60264152E12, 1943.0], [1.60264092E12, 1561.5], [1.60264158E12, 1885.0], [1.60264146E12, 2062.0], [1.6026408E12, 2153.0], [1.60264086E12, 1926.5], [1.60264116E12, 1973.0], [1.60264074E12, 2514.5], [1.60264104E12, 1903.0], [1.6026417E12, 2653.5], [1.6026411E12, 1973.0], [1.6026414E12, 1707.0], [1.60264098E12, 1981.0], [1.60264128E12, 1973.0], [1.60264134E12, 2018.0], [1.60264164E12, 2109.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6026417E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 833.0, "minX": 1.0, "maxY": 3136.0, "series": [{"data": [[2.0, 2757.5], [8.0, 1725.5], [9.0, 1581.0], [10.0, 1037.5], [11.0, 1216.0], [3.0, 2681.0], [12.0, 923.5], [13.0, 912.5], [14.0, 852.0], [15.0, 833.0], [1.0, 3136.0], [4.0, 2446.5], [5.0, 2292.5], [6.0, 2084.0], [7.0, 1974.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 15.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 833.0, "minX": 1.0, "maxY": 3132.5, "series": [{"data": [[2.0, 2756.5], [8.0, 1723.5], [9.0, 1580.5], [10.0, 1037.0], [11.0, 1216.0], [3.0, 2678.0], [12.0, 923.5], [13.0, 912.5], [14.0, 852.0], [15.0, 833.0], [1.0, 3132.5], [4.0, 2445.5], [5.0, 2291.0], [6.0, 2082.5], [7.0, 1973.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 15.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.5666666666666667, "minX": 1.60264074E12, "maxY": 6.666666666666667, "series": [{"data": [[1.60264122E12, 4.35], [1.60264152E12, 6.083333333333333], [1.60264092E12, 6.666666666666667], [1.60264158E12, 6.15], [1.60264146E12, 5.666666666666667], [1.6026408E12, 5.283333333333333], [1.60264086E12, 5.333333333333333], [1.60264116E12, 5.683333333333334], [1.60264074E12, 0.7333333333333333], [1.60264104E12, 6.016666666666667], [1.6026417E12, 0.5666666666666667], [1.6026411E12, 5.85], [1.6026414E12, 6.566666666666666], [1.60264098E12, 5.616666666666666], [1.60264128E12, 5.633333333333334], [1.60264134E12, 4.983333333333333], [1.60264164E12, 5.316666666666666]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6026417E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.5333333333333333, "minX": 1.60264074E12, "maxY": 6.666666666666667, "series": [{"data": [[1.60264122E12, 4.35], [1.60264152E12, 6.083333333333333], [1.60264092E12, 6.666666666666667], [1.60264158E12, 6.15], [1.60264146E12, 5.666666666666667], [1.6026408E12, 5.283333333333333], [1.60264086E12, 5.333333333333333], [1.60264116E12, 5.683333333333334], [1.60264074E12, 0.5333333333333333], [1.60264104E12, 6.016666666666667], [1.6026417E12, 0.7666666666666667], [1.6026411E12, 5.85], [1.6026414E12, 6.566666666666666], [1.60264098E12, 5.616666666666666], [1.60264128E12, 5.633333333333334], [1.60264134E12, 4.983333333333333], [1.60264164E12, 5.316666666666666]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6026417E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.5333333333333333, "minX": 1.60264074E12, "maxY": 6.666666666666667, "series": [{"data": [[1.60264122E12, 4.35], [1.60264152E12, 6.083333333333333], [1.60264092E12, 6.666666666666667], [1.60264158E12, 6.15], [1.60264146E12, 5.666666666666667], [1.6026408E12, 5.283333333333333], [1.60264086E12, 5.333333333333333], [1.60264116E12, 5.683333333333334], [1.60264074E12, 0.5333333333333333], [1.60264104E12, 6.016666666666667], [1.6026417E12, 0.7666666666666667], [1.6026411E12, 5.85], [1.6026414E12, 6.566666666666666], [1.60264098E12, 5.616666666666666], [1.60264128E12, 5.633333333333334], [1.60264134E12, 4.983333333333333], [1.60264164E12, 5.316666666666666]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6026417E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.5333333333333333, "minX": 1.60264074E12, "maxY": 6.666666666666667, "series": [{"data": [[1.60264122E12, 4.35], [1.60264152E12, 6.083333333333333], [1.60264092E12, 6.666666666666667], [1.60264158E12, 6.15], [1.60264146E12, 5.666666666666667], [1.6026408E12, 5.283333333333333], [1.60264086E12, 5.333333333333333], [1.60264116E12, 5.683333333333334], [1.60264074E12, 0.5333333333333333], [1.60264104E12, 6.016666666666667], [1.6026417E12, 0.7666666666666667], [1.6026411E12, 5.85], [1.6026414E12, 6.566666666666666], [1.60264098E12, 5.616666666666666], [1.60264128E12, 5.633333333333334], [1.60264134E12, 4.983333333333333], [1.60264164E12, 5.316666666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6026417E12, "title": "Total Transactions Per Second"}},
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

