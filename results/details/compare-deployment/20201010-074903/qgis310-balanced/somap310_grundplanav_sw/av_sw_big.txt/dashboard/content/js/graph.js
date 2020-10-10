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
        data: {"result": {"minY": 700.0, "minX": 0.0, "maxY": 10211.0, "series": [{"data": [[0.0, 700.0], [0.1, 708.0], [0.2, 711.0], [0.3, 713.0], [0.4, 716.0], [0.5, 718.0], [0.6, 721.0], [0.7, 724.0], [0.8, 726.0], [0.9, 730.0], [1.0, 731.0], [1.1, 734.0], [1.2, 737.0], [1.3, 739.0], [1.4, 741.0], [1.5, 743.0], [1.6, 747.0], [1.7, 748.0], [1.8, 751.0], [1.9, 755.0], [2.0, 757.0], [2.1, 758.0], [2.2, 760.0], [2.3, 763.0], [2.4, 765.0], [2.5, 767.0], [2.6, 769.0], [2.7, 770.0], [2.8, 772.0], [2.9, 776.0], [3.0, 780.0], [3.1, 781.0], [3.2, 783.0], [3.3, 784.0], [3.4, 786.0], [3.5, 788.0], [3.6, 791.0], [3.7, 793.0], [3.8, 794.0], [3.9, 795.0], [4.0, 796.0], [4.1, 798.0], [4.2, 800.0], [4.3, 802.0], [4.4, 806.0], [4.5, 808.0], [4.6, 812.0], [4.7, 814.0], [4.8, 815.0], [4.9, 817.0], [5.0, 818.0], [5.1, 820.0], [5.2, 821.0], [5.3, 824.0], [5.4, 825.0], [5.5, 826.0], [5.6, 828.0], [5.7, 830.0], [5.8, 832.0], [5.9, 834.0], [6.0, 835.0], [6.1, 836.0], [6.2, 838.0], [6.3, 839.0], [6.4, 841.0], [6.5, 842.0], [6.6, 843.0], [6.7, 844.0], [6.8, 845.0], [6.9, 846.0], [7.0, 847.0], [7.1, 849.0], [7.2, 850.0], [7.3, 852.0], [7.4, 854.0], [7.5, 857.0], [7.6, 859.0], [7.7, 862.0], [7.8, 864.0], [7.9, 865.0], [8.0, 866.0], [8.1, 867.0], [8.2, 868.0], [8.3, 869.0], [8.4, 872.0], [8.5, 873.0], [8.6, 875.0], [8.7, 878.0], [8.8, 880.0], [8.9, 881.0], [9.0, 883.0], [9.1, 884.0], [9.2, 884.0], [9.3, 886.0], [9.4, 890.0], [9.5, 893.0], [9.6, 896.0], [9.7, 897.0], [9.8, 901.0], [9.9, 903.0], [10.0, 905.0], [10.1, 906.0], [10.2, 909.0], [10.3, 910.0], [10.4, 912.0], [10.5, 918.0], [10.6, 922.0], [10.7, 924.0], [10.8, 927.0], [10.9, 932.0], [11.0, 939.0], [11.1, 941.0], [11.2, 944.0], [11.3, 947.0], [11.4, 949.0], [11.5, 954.0], [11.6, 957.0], [11.7, 961.0], [11.8, 965.0], [11.9, 970.0], [12.0, 973.0], [12.1, 978.0], [12.2, 980.0], [12.3, 983.0], [12.4, 985.0], [12.5, 989.0], [12.6, 996.0], [12.7, 1005.0], [12.8, 1010.0], [12.9, 1012.0], [13.0, 1014.0], [13.1, 1019.0], [13.2, 1022.0], [13.3, 1026.0], [13.4, 1029.0], [13.5, 1030.0], [13.6, 1033.0], [13.7, 1035.0], [13.8, 1039.0], [13.9, 1042.0], [14.0, 1043.0], [14.1, 1049.0], [14.2, 1054.0], [14.3, 1059.0], [14.4, 1061.0], [14.5, 1064.0], [14.6, 1068.0], [14.7, 1073.0], [14.8, 1076.0], [14.9, 1081.0], [15.0, 1083.0], [15.1, 1084.0], [15.2, 1087.0], [15.3, 1090.0], [15.4, 1093.0], [15.5, 1098.0], [15.6, 1101.0], [15.7, 1103.0], [15.8, 1107.0], [15.9, 1112.0], [16.0, 1113.0], [16.1, 1115.0], [16.2, 1118.0], [16.3, 1122.0], [16.4, 1123.0], [16.5, 1125.0], [16.6, 1127.0], [16.7, 1129.0], [16.8, 1134.0], [16.9, 1136.0], [17.0, 1139.0], [17.1, 1142.0], [17.2, 1145.0], [17.3, 1148.0], [17.4, 1151.0], [17.5, 1152.0], [17.6, 1154.0], [17.7, 1157.0], [17.8, 1160.0], [17.9, 1164.0], [18.0, 1167.0], [18.1, 1171.0], [18.2, 1173.0], [18.3, 1174.0], [18.4, 1177.0], [18.5, 1179.0], [18.6, 1182.0], [18.7, 1185.0], [18.8, 1187.0], [18.9, 1188.0], [19.0, 1189.0], [19.1, 1194.0], [19.2, 1195.0], [19.3, 1197.0], [19.4, 1203.0], [19.5, 1208.0], [19.6, 1210.0], [19.7, 1212.0], [19.8, 1217.0], [19.9, 1221.0], [20.0, 1224.0], [20.1, 1227.0], [20.2, 1228.0], [20.3, 1232.0], [20.4, 1238.0], [20.5, 1241.0], [20.6, 1242.0], [20.7, 1245.0], [20.8, 1250.0], [20.9, 1254.0], [21.0, 1258.0], [21.1, 1261.0], [21.2, 1263.0], [21.3, 1264.0], [21.4, 1267.0], [21.5, 1269.0], [21.6, 1272.0], [21.7, 1276.0], [21.8, 1278.0], [21.9, 1280.0], [22.0, 1284.0], [22.1, 1287.0], [22.2, 1288.0], [22.3, 1290.0], [22.4, 1293.0], [22.5, 1295.0], [22.6, 1298.0], [22.7, 1300.0], [22.8, 1302.0], [22.9, 1304.0], [23.0, 1305.0], [23.1, 1308.0], [23.2, 1309.0], [23.3, 1311.0], [23.4, 1313.0], [23.5, 1317.0], [23.6, 1318.0], [23.7, 1320.0], [23.8, 1322.0], [23.9, 1326.0], [24.0, 1330.0], [24.1, 1332.0], [24.2, 1335.0], [24.3, 1336.0], [24.4, 1339.0], [24.5, 1341.0], [24.6, 1344.0], [24.7, 1347.0], [24.8, 1349.0], [24.9, 1351.0], [25.0, 1353.0], [25.1, 1357.0], [25.2, 1358.0], [25.3, 1359.0], [25.4, 1363.0], [25.5, 1366.0], [25.6, 1368.0], [25.7, 1371.0], [25.8, 1372.0], [25.9, 1374.0], [26.0, 1376.0], [26.1, 1379.0], [26.2, 1382.0], [26.3, 1383.0], [26.4, 1385.0], [26.5, 1388.0], [26.6, 1391.0], [26.7, 1393.0], [26.8, 1395.0], [26.9, 1397.0], [27.0, 1400.0], [27.1, 1402.0], [27.2, 1403.0], [27.3, 1407.0], [27.4, 1409.0], [27.5, 1411.0], [27.6, 1412.0], [27.7, 1414.0], [27.8, 1417.0], [27.9, 1418.0], [28.0, 1420.0], [28.1, 1422.0], [28.2, 1424.0], [28.3, 1425.0], [28.4, 1426.0], [28.5, 1428.0], [28.6, 1429.0], [28.7, 1431.0], [28.8, 1435.0], [28.9, 1436.0], [29.0, 1437.0], [29.1, 1439.0], [29.2, 1442.0], [29.3, 1446.0], [29.4, 1448.0], [29.5, 1450.0], [29.6, 1451.0], [29.7, 1453.0], [29.8, 1456.0], [29.9, 1460.0], [30.0, 1462.0], [30.1, 1465.0], [30.2, 1467.0], [30.3, 1469.0], [30.4, 1471.0], [30.5, 1473.0], [30.6, 1475.0], [30.7, 1477.0], [30.8, 1479.0], [30.9, 1483.0], [31.0, 1486.0], [31.1, 1490.0], [31.2, 1493.0], [31.3, 1497.0], [31.4, 1501.0], [31.5, 1503.0], [31.6, 1505.0], [31.7, 1508.0], [31.8, 1511.0], [31.9, 1514.0], [32.0, 1516.0], [32.1, 1519.0], [32.2, 1520.0], [32.3, 1522.0], [32.4, 1524.0], [32.5, 1527.0], [32.6, 1529.0], [32.7, 1534.0], [32.8, 1536.0], [32.9, 1537.0], [33.0, 1540.0], [33.1, 1542.0], [33.2, 1545.0], [33.3, 1546.0], [33.4, 1549.0], [33.5, 1551.0], [33.6, 1554.0], [33.7, 1555.0], [33.8, 1557.0], [33.9, 1558.0], [34.0, 1559.0], [34.1, 1563.0], [34.2, 1564.0], [34.3, 1569.0], [34.4, 1571.0], [34.5, 1574.0], [34.6, 1576.0], [34.7, 1578.0], [34.8, 1581.0], [34.9, 1586.0], [35.0, 1590.0], [35.1, 1592.0], [35.2, 1596.0], [35.3, 1599.0], [35.4, 1603.0], [35.5, 1605.0], [35.6, 1607.0], [35.7, 1610.0], [35.8, 1612.0], [35.9, 1614.0], [36.0, 1617.0], [36.1, 1619.0], [36.2, 1622.0], [36.3, 1625.0], [36.4, 1626.0], [36.5, 1627.0], [36.6, 1629.0], [36.7, 1632.0], [36.8, 1634.0], [36.9, 1636.0], [37.0, 1640.0], [37.1, 1642.0], [37.2, 1647.0], [37.3, 1648.0], [37.4, 1650.0], [37.5, 1651.0], [37.6, 1654.0], [37.7, 1657.0], [37.8, 1659.0], [37.9, 1661.0], [38.0, 1662.0], [38.1, 1663.0], [38.2, 1667.0], [38.3, 1669.0], [38.4, 1673.0], [38.5, 1673.0], [38.6, 1676.0], [38.7, 1678.0], [38.8, 1679.0], [38.9, 1683.0], [39.0, 1686.0], [39.1, 1688.0], [39.2, 1689.0], [39.3, 1691.0], [39.4, 1693.0], [39.5, 1694.0], [39.6, 1697.0], [39.7, 1699.0], [39.8, 1703.0], [39.9, 1704.0], [40.0, 1707.0], [40.1, 1709.0], [40.2, 1712.0], [40.3, 1714.0], [40.4, 1716.0], [40.5, 1719.0], [40.6, 1721.0], [40.7, 1723.0], [40.8, 1725.0], [40.9, 1727.0], [41.0, 1729.0], [41.1, 1732.0], [41.2, 1735.0], [41.3, 1738.0], [41.4, 1741.0], [41.5, 1741.0], [41.6, 1743.0], [41.7, 1745.0], [41.8, 1746.0], [41.9, 1749.0], [42.0, 1751.0], [42.1, 1754.0], [42.2, 1755.0], [42.3, 1756.0], [42.4, 1758.0], [42.5, 1759.0], [42.6, 1760.0], [42.7, 1761.0], [42.8, 1763.0], [42.9, 1763.0], [43.0, 1766.0], [43.1, 1768.0], [43.2, 1770.0], [43.3, 1771.0], [43.4, 1773.0], [43.5, 1775.0], [43.6, 1776.0], [43.7, 1779.0], [43.8, 1780.0], [43.9, 1780.0], [44.0, 1781.0], [44.1, 1782.0], [44.2, 1785.0], [44.3, 1785.0], [44.4, 1786.0], [44.5, 1789.0], [44.6, 1791.0], [44.7, 1793.0], [44.8, 1793.0], [44.9, 1794.0], [45.0, 1796.0], [45.1, 1798.0], [45.2, 1800.0], [45.3, 1801.0], [45.4, 1802.0], [45.5, 1804.0], [45.6, 1807.0], [45.7, 1808.0], [45.8, 1810.0], [45.9, 1811.0], [46.0, 1814.0], [46.1, 1817.0], [46.2, 1819.0], [46.3, 1821.0], [46.4, 1822.0], [46.5, 1823.0], [46.6, 1825.0], [46.7, 1826.0], [46.8, 1828.0], [46.9, 1830.0], [47.0, 1831.0], [47.1, 1832.0], [47.2, 1834.0], [47.3, 1835.0], [47.4, 1836.0], [47.5, 1837.0], [47.6, 1838.0], [47.7, 1840.0], [47.8, 1841.0], [47.9, 1844.0], [48.0, 1846.0], [48.1, 1847.0], [48.2, 1848.0], [48.3, 1850.0], [48.4, 1852.0], [48.5, 1853.0], [48.6, 1854.0], [48.7, 1856.0], [48.8, 1857.0], [48.9, 1858.0], [49.0, 1859.0], [49.1, 1860.0], [49.2, 1861.0], [49.3, 1863.0], [49.4, 1864.0], [49.5, 1865.0], [49.6, 1866.0], [49.7, 1868.0], [49.8, 1869.0], [49.9, 1870.0], [50.0, 1871.0], [50.1, 1872.0], [50.2, 1873.0], [50.3, 1875.0], [50.4, 1876.0], [50.5, 1877.0], [50.6, 1880.0], [50.7, 1881.0], [50.8, 1882.0], [50.9, 1885.0], [51.0, 1885.0], [51.1, 1887.0], [51.2, 1888.0], [51.3, 1890.0], [51.4, 1893.0], [51.5, 1895.0], [51.6, 1895.0], [51.7, 1898.0], [51.8, 1899.0], [51.9, 1901.0], [52.0, 1902.0], [52.1, 1903.0], [52.2, 1906.0], [52.3, 1907.0], [52.4, 1910.0], [52.5, 1912.0], [52.6, 1913.0], [52.7, 1914.0], [52.8, 1917.0], [52.9, 1919.0], [53.0, 1920.0], [53.1, 1921.0], [53.2, 1923.0], [53.3, 1924.0], [53.4, 1925.0], [53.5, 1927.0], [53.6, 1928.0], [53.7, 1930.0], [53.8, 1932.0], [53.9, 1935.0], [54.0, 1938.0], [54.1, 1941.0], [54.2, 1944.0], [54.3, 1945.0], [54.4, 1947.0], [54.5, 1949.0], [54.6, 1951.0], [54.7, 1953.0], [54.8, 1955.0], [54.9, 1957.0], [55.0, 1960.0], [55.1, 1962.0], [55.2, 1962.0], [55.3, 1964.0], [55.4, 1966.0], [55.5, 1969.0], [55.6, 1971.0], [55.7, 1972.0], [55.8, 1973.0], [55.9, 1976.0], [56.0, 1977.0], [56.1, 1979.0], [56.2, 1983.0], [56.3, 1984.0], [56.4, 1987.0], [56.5, 1988.0], [56.6, 1989.0], [56.7, 1991.0], [56.8, 1992.0], [56.9, 1994.0], [57.0, 1998.0], [57.1, 2000.0], [57.2, 2001.0], [57.3, 2002.0], [57.4, 2003.0], [57.5, 2005.0], [57.6, 2006.0], [57.7, 2008.0], [57.8, 2010.0], [57.9, 2011.0], [58.0, 2013.0], [58.1, 2014.0], [58.2, 2016.0], [58.3, 2020.0], [58.4, 2021.0], [58.5, 2024.0], [58.6, 2026.0], [58.7, 2029.0], [58.8, 2031.0], [58.9, 2033.0], [59.0, 2035.0], [59.1, 2037.0], [59.2, 2040.0], [59.3, 2042.0], [59.4, 2045.0], [59.5, 2048.0], [59.6, 2049.0], [59.7, 2051.0], [59.8, 2053.0], [59.9, 2056.0], [60.0, 2058.0], [60.1, 2060.0], [60.2, 2063.0], [60.3, 2064.0], [60.4, 2066.0], [60.5, 2067.0], [60.6, 2068.0], [60.7, 2071.0], [60.8, 2071.0], [60.9, 2073.0], [61.0, 2074.0], [61.1, 2076.0], [61.2, 2077.0], [61.3, 2083.0], [61.4, 2085.0], [61.5, 2087.0], [61.6, 2089.0], [61.7, 2091.0], [61.8, 2094.0], [61.9, 2095.0], [62.0, 2098.0], [62.1, 2100.0], [62.2, 2101.0], [62.3, 2104.0], [62.4, 2108.0], [62.5, 2110.0], [62.6, 2113.0], [62.7, 2116.0], [62.8, 2119.0], [62.9, 2121.0], [63.0, 2123.0], [63.1, 2126.0], [63.2, 2127.0], [63.3, 2130.0], [63.4, 2132.0], [63.5, 2136.0], [63.6, 2138.0], [63.7, 2141.0], [63.8, 2144.0], [63.9, 2146.0], [64.0, 2149.0], [64.1, 2154.0], [64.2, 2157.0], [64.3, 2159.0], [64.4, 2162.0], [64.5, 2167.0], [64.6, 2168.0], [64.7, 2172.0], [64.8, 2173.0], [64.9, 2179.0], [65.0, 2184.0], [65.1, 2185.0], [65.2, 2187.0], [65.3, 2190.0], [65.4, 2192.0], [65.5, 2195.0], [65.6, 2197.0], [65.7, 2199.0], [65.8, 2202.0], [65.9, 2207.0], [66.0, 2208.0], [66.1, 2211.0], [66.2, 2216.0], [66.3, 2220.0], [66.4, 2222.0], [66.5, 2223.0], [66.6, 2225.0], [66.7, 2228.0], [66.8, 2231.0], [66.9, 2233.0], [67.0, 2236.0], [67.1, 2238.0], [67.2, 2240.0], [67.3, 2242.0], [67.4, 2245.0], [67.5, 2248.0], [67.6, 2252.0], [67.7, 2254.0], [67.8, 2258.0], [67.9, 2259.0], [68.0, 2262.0], [68.1, 2265.0], [68.2, 2267.0], [68.3, 2272.0], [68.4, 2276.0], [68.5, 2281.0], [68.6, 2286.0], [68.7, 2288.0], [68.8, 2291.0], [68.9, 2295.0], [69.0, 2297.0], [69.1, 2299.0], [69.2, 2301.0], [69.3, 2304.0], [69.4, 2307.0], [69.5, 2308.0], [69.6, 2312.0], [69.7, 2319.0], [69.8, 2321.0], [69.9, 2323.0], [70.0, 2325.0], [70.1, 2327.0], [70.2, 2329.0], [70.3, 2331.0], [70.4, 2334.0], [70.5, 2337.0], [70.6, 2339.0], [70.7, 2342.0], [70.8, 2344.0], [70.9, 2347.0], [71.0, 2348.0], [71.1, 2351.0], [71.2, 2355.0], [71.3, 2357.0], [71.4, 2360.0], [71.5, 2363.0], [71.6, 2366.0], [71.7, 2367.0], [71.8, 2370.0], [71.9, 2372.0], [72.0, 2376.0], [72.1, 2378.0], [72.2, 2381.0], [72.3, 2387.0], [72.4, 2391.0], [72.5, 2393.0], [72.6, 2399.0], [72.7, 2402.0], [72.8, 2407.0], [72.9, 2409.0], [73.0, 2413.0], [73.1, 2415.0], [73.2, 2418.0], [73.3, 2422.0], [73.4, 2425.0], [73.5, 2428.0], [73.6, 2431.0], [73.7, 2434.0], [73.8, 2438.0], [73.9, 2443.0], [74.0, 2443.0], [74.1, 2445.0], [74.2, 2448.0], [74.3, 2451.0], [74.4, 2454.0], [74.5, 2457.0], [74.6, 2460.0], [74.7, 2465.0], [74.8, 2467.0], [74.9, 2471.0], [75.0, 2475.0], [75.1, 2478.0], [75.2, 2482.0], [75.3, 2484.0], [75.4, 2489.0], [75.5, 2490.0], [75.6, 2492.0], [75.7, 2497.0], [75.8, 2500.0], [75.9, 2503.0], [76.0, 2505.0], [76.1, 2509.0], [76.2, 2511.0], [76.3, 2516.0], [76.4, 2523.0], [76.5, 2530.0], [76.6, 2535.0], [76.7, 2537.0], [76.8, 2539.0], [76.9, 2541.0], [77.0, 2547.0], [77.1, 2549.0], [77.2, 2551.0], [77.3, 2553.0], [77.4, 2555.0], [77.5, 2560.0], [77.6, 2565.0], [77.7, 2568.0], [77.8, 2569.0], [77.9, 2571.0], [78.0, 2572.0], [78.1, 2576.0], [78.2, 2579.0], [78.3, 2581.0], [78.4, 2587.0], [78.5, 2593.0], [78.6, 2595.0], [78.7, 2597.0], [78.8, 2599.0], [78.9, 2603.0], [79.0, 2603.0], [79.1, 2606.0], [79.2, 2609.0], [79.3, 2610.0], [79.4, 2615.0], [79.5, 2616.0], [79.6, 2621.0], [79.7, 2624.0], [79.8, 2625.0], [79.9, 2630.0], [80.0, 2633.0], [80.1, 2635.0], [80.2, 2641.0], [80.3, 2646.0], [80.4, 2649.0], [80.5, 2652.0], [80.6, 2655.0], [80.7, 2663.0], [80.8, 2669.0], [80.9, 2672.0], [81.0, 2676.0], [81.1, 2678.0], [81.2, 2680.0], [81.3, 2684.0], [81.4, 2687.0], [81.5, 2689.0], [81.6, 2691.0], [81.7, 2697.0], [81.8, 2701.0], [81.9, 2704.0], [82.0, 2710.0], [82.1, 2715.0], [82.2, 2718.0], [82.3, 2720.0], [82.4, 2722.0], [82.5, 2729.0], [82.6, 2732.0], [82.7, 2735.0], [82.8, 2740.0], [82.9, 2744.0], [83.0, 2748.0], [83.1, 2749.0], [83.2, 2753.0], [83.3, 2759.0], [83.4, 2764.0], [83.5, 2769.0], [83.6, 2773.0], [83.7, 2777.0], [83.8, 2782.0], [83.9, 2787.0], [84.0, 2791.0], [84.1, 2796.0], [84.2, 2801.0], [84.3, 2807.0], [84.4, 2813.0], [84.5, 2815.0], [84.6, 2818.0], [84.7, 2823.0], [84.8, 2825.0], [84.9, 2830.0], [85.0, 2835.0], [85.1, 2840.0], [85.2, 2848.0], [85.3, 2852.0], [85.4, 2857.0], [85.5, 2860.0], [85.6, 2861.0], [85.7, 2867.0], [85.8, 2872.0], [85.9, 2882.0], [86.0, 2885.0], [86.1, 2887.0], [86.2, 2896.0], [86.3, 2899.0], [86.4, 2909.0], [86.5, 2912.0], [86.6, 2919.0], [86.7, 2923.0], [86.8, 2930.0], [86.9, 2935.0], [87.0, 2944.0], [87.1, 2950.0], [87.2, 2953.0], [87.3, 2963.0], [87.4, 2971.0], [87.5, 2979.0], [87.6, 2981.0], [87.7, 2987.0], [87.8, 2991.0], [87.9, 2996.0], [88.0, 3005.0], [88.1, 3007.0], [88.2, 3009.0], [88.3, 3015.0], [88.4, 3022.0], [88.5, 3027.0], [88.6, 3036.0], [88.7, 3042.0], [88.8, 3060.0], [88.9, 3067.0], [89.0, 3075.0], [89.1, 3084.0], [89.2, 3086.0], [89.3, 3108.0], [89.4, 3114.0], [89.5, 3117.0], [89.6, 3126.0], [89.7, 3134.0], [89.8, 3137.0], [89.9, 3139.0], [90.0, 3149.0], [90.1, 3154.0], [90.2, 3160.0], [90.3, 3163.0], [90.4, 3166.0], [90.5, 3171.0], [90.6, 3186.0], [90.7, 3195.0], [90.8, 3199.0], [90.9, 3207.0], [91.0, 3217.0], [91.1, 3230.0], [91.2, 3251.0], [91.3, 3261.0], [91.4, 3274.0], [91.5, 3280.0], [91.6, 3284.0], [91.7, 3288.0], [91.8, 3291.0], [91.9, 3296.0], [92.0, 3308.0], [92.1, 3318.0], [92.2, 3332.0], [92.3, 3340.0], [92.4, 3346.0], [92.5, 3361.0], [92.6, 3363.0], [92.7, 3374.0], [92.8, 3384.0], [92.9, 3395.0], [93.0, 3403.0], [93.1, 3412.0], [93.2, 3429.0], [93.3, 3441.0], [93.4, 3448.0], [93.5, 3458.0], [93.6, 3462.0], [93.7, 3470.0], [93.8, 3473.0], [93.9, 3495.0], [94.0, 3501.0], [94.1, 3516.0], [94.2, 3531.0], [94.3, 3550.0], [94.4, 3567.0], [94.5, 3570.0], [94.6, 3581.0], [94.7, 3591.0], [94.8, 3599.0], [94.9, 3609.0], [95.0, 3615.0], [95.1, 3629.0], [95.2, 3644.0], [95.3, 3684.0], [95.4, 3733.0], [95.5, 3750.0], [95.6, 3773.0], [95.7, 3799.0], [95.8, 3810.0], [95.9, 3827.0], [96.0, 3847.0], [96.1, 3866.0], [96.2, 3902.0], [96.3, 3920.0], [96.4, 3969.0], [96.5, 3986.0], [96.6, 4008.0], [96.7, 4037.0], [96.8, 4055.0], [96.9, 4066.0], [97.0, 4085.0], [97.1, 4110.0], [97.2, 4133.0], [97.3, 4153.0], [97.4, 4188.0], [97.5, 4240.0], [97.6, 4259.0], [97.7, 4287.0], [97.8, 4320.0], [97.9, 4371.0], [98.0, 4412.0], [98.1, 4458.0], [98.2, 4522.0], [98.3, 4607.0], [98.4, 4672.0], [98.5, 4774.0], [98.6, 4893.0], [98.7, 4949.0], [98.8, 5100.0], [98.9, 5239.0], [99.0, 5323.0], [99.1, 5450.0], [99.2, 5498.0], [99.3, 5601.0], [99.4, 5815.0], [99.5, 6114.0], [99.6, 6300.0], [99.7, 6727.0], [99.8, 6917.0], [99.9, 7904.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 700.0, "maxY": 346.0, "series": [{"data": [[700.0, 218.0], [800.0, 289.0], [900.0, 149.0], [1000.0, 151.0], [1100.0, 196.0], [1200.0, 175.0], [1300.0, 223.0], [1400.0, 227.0], [1500.0, 205.0], [1600.0, 230.0], [1700.0, 282.0], [1800.0, 346.0], [1900.0, 271.0], [2000.0, 260.0], [2100.0, 189.0], [2200.0, 177.0], [2300.0, 181.0], [2400.0, 164.0], [2500.0, 158.0], [2600.0, 154.0], [2700.0, 124.0], [2800.0, 112.0], [2900.0, 85.0], [3000.0, 67.0], [3100.0, 82.0], [3200.0, 59.0], [3300.0, 50.0], [3400.0, 55.0], [3500.0, 43.0], [3600.0, 27.0], [3700.0, 19.0], [3800.0, 23.0], [3900.0, 21.0], [4000.0, 27.0], [4100.0, 19.0], [4300.0, 14.0], [4200.0, 15.0], [4400.0, 9.0], [4600.0, 10.0], [4500.0, 4.0], [4700.0, 4.0], [4800.0, 5.0], [4900.0, 6.0], [5100.0, 4.0], [5000.0, 3.0], [5300.0, 5.0], [5200.0, 5.0], [5400.0, 9.0], [5600.0, 4.0], [5500.0, 3.0], [5700.0, 1.0], [5800.0, 1.0], [5900.0, 2.0], [6100.0, 3.0], [6000.0, 3.0], [6200.0, 2.0], [6300.0, 2.0], [6500.0, 3.0], [6800.0, 3.0], [6700.0, 2.0], [6900.0, 1.0], [7000.0, 3.0], [7100.0, 1.0], [7900.0, 2.0], [8100.0, 1.0], [9600.0, 1.0], [10200.0, 1.0], [10100.0, 1.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 10200.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 3562.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1628.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 3562.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 1.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 11.5741935483871, "minX": 1.60232124E12, "maxY": 12.0, "series": [{"data": [[1.60232202E12, 12.0], [1.60232136E12, 12.0], [1.60232142E12, 12.0], [1.60232172E12, 12.0], [1.6023213E12, 12.0], [1.6023216E12, 12.0], [1.60232166E12, 12.0], [1.60232196E12, 12.0], [1.60232154E12, 12.0], [1.60232184E12, 12.0], [1.6023219E12, 12.0], [1.60232124E12, 12.0], [1.60232178E12, 12.0], [1.60232208E12, 11.5741935483871], [1.60232148E12, 12.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60232208E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 1284.0, "minX": 1.0, "maxY": 4146.0, "series": [{"data": [[8.0, 1372.0], [4.0, 1888.0], [2.0, 4146.0], [1.0, 3585.0], [9.0, 2267.0], [10.0, 1284.0], [5.0, 1431.0], [11.0, 2635.0], [12.0, 2008.3519305019313], [6.0, 2796.0], [3.0, 1826.0], [7.0, 2113.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[11.987285686765556, 2008.9782315546147]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 12.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 1166.0, "minX": 1.60232124E12, "maxY": 2141180.433333333, "series": [{"data": [[1.60232202E12, 1540484.1], [1.60232136E12, 1182104.55], [1.60232142E12, 2141180.433333333], [1.60232172E12, 1546201.1666666667], [1.6023213E12, 1522618.9666666666], [1.6023216E12, 1572428.3166666667], [1.60232166E12, 1759310.4333333333], [1.60232196E12, 1660175.7333333334], [1.60232154E12, 1795644.0333333334], [1.60232184E12, 1900440.4166666667], [1.6023219E12, 1826310.3333333333], [1.60232124E12, 1748798.45], [1.60232178E12, 1136051.7833333334], [1.60232208E12, 727116.5333333333], [1.60232148E12, 1913768.0166666666]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60232202E12, 2920.5], [1.60232136E12, 2961.1], [1.60232142E12, 2694.9333333333334], [1.60232172E12, 2605.9333333333334], [1.6023213E12, 2479.866666666667], [1.6023216E12, 2709.0666666666666], [1.60232166E12, 2143.4], [1.60232196E12, 2676.5833333333335], [1.60232154E12, 2789.9166666666665], [1.60232184E12, 2505.4666666666667], [1.6023219E12, 3088.866666666667], [1.60232124E12, 2290.65], [1.60232178E12, 2752.75], [1.60232208E12, 1166.0], [1.60232148E12, 2799.016666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60232208E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 1773.4558823529417, "minX": 1.60232124E12, "maxY": 2501.580756013747, "series": [{"data": [[1.60232202E12, 1853.1317829457364], [1.60232136E12, 1794.6274509803927], [1.60232142E12, 2032.8901408450683], [1.60232172E12, 1974.3736263736262], [1.6023213E12, 2029.9416909620986], [1.6023216E12, 1994.2797783933527], [1.60232166E12, 2501.580756013747], [1.60232196E12, 2053.1282051282037], [1.60232154E12, 1952.9564032697542], [1.60232184E12, 2094.4956011730187], [1.6023219E12, 1773.4558823529417], [1.60232124E12, 2249.943037974686], [1.60232178E12, 1923.0266666666657], [1.60232208E12, 2417.954838709678], [1.60232148E12, 1931.2926829268295]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60232208E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 1772.0147058823536, "minX": 1.60232124E12, "maxY": 2499.092783505156, "series": [{"data": [[1.60232202E12, 1851.8268733850139], [1.60232136E12, 1793.3799019607843], [1.60232142E12, 2030.3690140845076], [1.60232172E12, 1972.7802197802193], [1.6023213E12, 2028.08163265306], [1.6023216E12, 1992.4819944598353], [1.60232166E12, 2499.092783505156], [1.60232196E12, 2051.5868945868942], [1.60232154E12, 1950.9455040871928], [1.60232184E12, 2092.6539589442814], [1.6023219E12, 1772.0147058823536], [1.60232124E12, 2247.6297468354437], [1.60232178E12, 1922.002666666665], [1.60232208E12, 2416.3677419354854], [1.60232148E12, 1929.1192411924112]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60232208E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.026666666666666672, "minX": 1.60232124E12, "maxY": 0.3797468354430381, "series": [{"data": [[1.60232202E12, 0.03100775193798448], [1.60232136E12, 0.03186274509803921], [1.60232142E12, 0.03380281690140848], [1.60232172E12, 0.030219780219780255], [1.6023213E12, 0.04081632653061229], [1.6023216E12, 0.03601108033240998], [1.60232166E12, 0.04123711340206192], [1.60232196E12, 0.0341880341880342], [1.60232154E12, 0.03814713896457769], [1.60232184E12, 0.03225806451612907], [1.6023219E12, 0.02696078431372552], [1.60232124E12, 0.3797468354430381], [1.60232178E12, 0.026666666666666672], [1.60232208E12, 0.0709677419354839], [1.60232148E12, 0.03794037940379408]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60232208E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 700.0, "minX": 1.60232124E12, "maxY": 10211.0, "series": [{"data": [[1.60232202E12, 5679.0], [1.60232136E12, 5343.0], [1.60232142E12, 6027.0], [1.60232172E12, 8130.0], [1.6023213E12, 6869.0], [1.6023216E12, 6519.0], [1.60232166E12, 10211.0], [1.60232196E12, 4672.0], [1.60232154E12, 4561.0], [1.60232184E12, 4222.0], [1.6023219E12, 4708.0], [1.60232124E12, 9625.0], [1.60232178E12, 6367.0], [1.60232208E12, 4833.0], [1.60232148E12, 5498.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60232202E12, 711.4919999074936], [1.60232136E12, 740.0], [1.60232142E12, 811.8759983873367], [1.60232172E12, 852.9799975633621], [1.6023213E12, 874.055999097824], [1.6023216E12, 710.5479994821549], [1.60232166E12, 801.1399996519089], [1.60232196E12, 797.51199924469], [1.60232154E12, 758.0299991250038], [1.60232184E12, 794.4819984507561], [1.6023219E12, 715.6809999024867], [1.60232124E12, 789.3539986395836], [1.60232178E12, 713.3839999103546], [1.60232208E12, 1286.8279997396469], [1.60232148E12, 712.3299999117851]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60232202E12, 711.8412000370025], [1.60232136E12, 740.0491000390052], [1.60232142E12, 817.9636006450653], [1.60232172E12, 862.1780009746551], [1.6023213E12, 877.4616003608703], [1.6023216E12, 712.5028002071381], [1.60232166E12, 802.4540001392364], [1.60232196E12, 800.363200302124], [1.60232154E12, 761.3330003499984], [1.60232184E12, 800.3302006196976], [1.6023219E12, 716.2946002340317], [1.60232124E12, 792.8298001813888], [1.60232178E12, 713.7224000358582], [1.60232208E12, 1287.8108001041412], [1.60232148E12, 712.6630000352859]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60232202E12, 711.6859999537468], [1.60232136E12, 740.0], [1.60232142E12, 815.2579991936684], [1.60232172E12, 858.0899987816811], [1.6023213E12, 875.9479995489121], [1.6023216E12, 711.6339997410774], [1.60232166E12, 801.8699998259544], [1.60232196E12, 799.095999622345], [1.60232154E12, 759.8649995625019], [1.60232184E12, 797.730999225378], [1.6023219E12, 715.8854999512434], [1.60232124E12, 792.068999773264], [1.60232178E12, 713.5719999551773], [1.60232208E12, 1287.3739998698234], [1.60232148E12, 712.5149999558926]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60232202E12, 707.0], [1.60232136E12, 736.0], [1.60232142E12, 761.0], [1.60232172E12, 835.0], [1.6023213E12, 818.0], [1.6023216E12, 703.0], [1.60232166E12, 762.0], [1.60232196E12, 751.0], [1.60232154E12, 739.0], [1.60232184E12, 776.0], [1.6023219E12, 700.0], [1.60232124E12, 761.0], [1.60232178E12, 707.0], [1.60232208E12, 1284.0], [1.60232148E12, 708.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60232202E12, 1645.0], [1.60232136E12, 1471.5], [1.60232142E12, 1939.0], [1.60232172E12, 1837.0], [1.6023213E12, 1840.0], [1.6023216E12, 1900.0], [1.60232166E12, 2252.0], [1.60232196E12, 1992.0], [1.60232154E12, 1896.5], [1.60232184E12, 2007.0], [1.6023219E12, 1688.0], [1.60232124E12, 2065.5], [1.60232178E12, 1693.0], [1.60232208E12, 2313.0], [1.60232148E12, 1903.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60232208E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 801.5, "minX": 1.0, "maxY": 2838.0, "series": [{"data": [[8.0, 1783.5], [2.0, 2838.0], [9.0, 1535.0], [10.0, 1427.5], [11.0, 1174.0], [3.0, 2569.0], [12.0, 879.5], [13.0, 916.0], [14.0, 868.0], [15.0, 851.5], [1.0, 2818.0], [4.0, 2376.0], [16.0, 801.5], [5.0, 2144.0], [6.0, 1977.0], [7.0, 1910.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[3.0, 1351.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 16.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 801.5, "minX": 1.0, "maxY": 2837.5, "series": [{"data": [[8.0, 1783.0], [2.0, 2837.5], [9.0, 1535.0], [10.0, 1426.0], [11.0, 1174.0], [3.0, 2566.0], [12.0, 879.5], [13.0, 916.0], [14.0, 868.0], [15.0, 851.5], [1.0, 2800.5], [4.0, 2373.5], [16.0, 801.5], [5.0, 2140.0], [6.0, 1973.0], [7.0, 1909.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[3.0, 1351.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 16.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.60232118E12, "maxY": 6.8, "series": [{"data": [[1.60232202E12, 6.45], [1.60232136E12, 6.8], [1.60232142E12, 5.916666666666667], [1.60232172E12, 6.066666666666666], [1.6023213E12, 5.716666666666667], [1.6023216E12, 6.016666666666667], [1.60232166E12, 4.85], [1.60232196E12, 5.85], [1.60232154E12, 6.116666666666666], [1.60232184E12, 5.683333333333334], [1.6023219E12, 6.8], [1.60232124E12, 5.433333333333334], [1.60232178E12, 6.25], [1.60232208E12, 2.3833333333333333], [1.60232118E12, 0.03333333333333333], [1.60232148E12, 6.15]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60232208E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60232124E12, "maxY": 6.8, "series": [{"data": [[1.60232202E12, 6.45], [1.60232136E12, 6.8], [1.60232142E12, 5.916666666666667], [1.60232172E12, 6.066666666666666], [1.6023213E12, 5.716666666666667], [1.6023216E12, 6.016666666666667], [1.60232166E12, 4.85], [1.60232196E12, 5.85], [1.60232154E12, 6.1], [1.60232184E12, 5.683333333333334], [1.6023219E12, 6.8], [1.60232124E12, 5.266666666666667], [1.60232178E12, 6.25], [1.60232208E12, 2.5833333333333335], [1.60232148E12, 6.15]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.60232154E12, 0.016666666666666666]], "isOverall": false, "label": "400", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60232208E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60232124E12, "maxY": 6.8, "series": [{"data": [[1.60232202E12, 6.45], [1.60232136E12, 6.8], [1.60232142E12, 5.916666666666667], [1.60232172E12, 6.066666666666666], [1.6023213E12, 5.716666666666667], [1.6023216E12, 6.016666666666667], [1.60232166E12, 4.85], [1.60232196E12, 5.85], [1.60232154E12, 6.1], [1.60232184E12, 5.683333333333334], [1.6023219E12, 6.8], [1.60232124E12, 5.266666666666667], [1.60232178E12, 6.25], [1.60232208E12, 2.5833333333333335], [1.60232148E12, 6.15]], "isOverall": false, "label": "HTTP Request-success", "isController": false}, {"data": [[1.60232154E12, 0.016666666666666666]], "isOverall": false, "label": "HTTP Request-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60232208E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60232124E12, "maxY": 6.8, "series": [{"data": [[1.60232202E12, 6.45], [1.60232136E12, 6.8], [1.60232142E12, 5.916666666666667], [1.60232172E12, 6.066666666666666], [1.6023213E12, 5.716666666666667], [1.6023216E12, 6.016666666666667], [1.60232166E12, 4.85], [1.60232196E12, 5.85], [1.60232154E12, 6.1], [1.60232184E12, 5.683333333333334], [1.6023219E12, 6.8], [1.60232124E12, 5.266666666666667], [1.60232178E12, 6.25], [1.60232208E12, 2.5833333333333335], [1.60232148E12, 6.15]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.60232154E12, 0.016666666666666666]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60232208E12, "title": "Total Transactions Per Second"}},
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

