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
        data: {"result": {"minY": 569.0, "minX": 0.0, "maxY": 11594.0, "series": [{"data": [[0.0, 569.0], [0.1, 623.0], [0.2, 655.0], [0.3, 732.0], [0.4, 738.0], [0.5, 744.0], [0.6, 747.0], [0.7, 749.0], [0.8, 751.0], [0.9, 752.0], [1.0, 755.0], [1.1, 765.0], [1.2, 771.0], [1.3, 773.0], [1.4, 774.0], [1.5, 775.0], [1.6, 779.0], [1.7, 782.0], [1.8, 783.0], [1.9, 785.0], [2.0, 787.0], [2.1, 788.0], [2.2, 791.0], [2.3, 793.0], [2.4, 796.0], [2.5, 799.0], [2.6, 802.0], [2.7, 804.0], [2.8, 805.0], [2.9, 806.0], [3.0, 808.0], [3.1, 809.0], [3.2, 811.0], [3.3, 814.0], [3.4, 815.0], [3.5, 817.0], [3.6, 818.0], [3.7, 820.0], [3.8, 821.0], [3.9, 823.0], [4.0, 825.0], [4.1, 825.0], [4.2, 827.0], [4.3, 829.0], [4.4, 830.0], [4.5, 832.0], [4.6, 833.0], [4.7, 834.0], [4.8, 835.0], [4.9, 837.0], [5.0, 838.0], [5.1, 839.0], [5.2, 840.0], [5.3, 843.0], [5.4, 846.0], [5.5, 848.0], [5.6, 849.0], [5.7, 850.0], [5.8, 852.0], [5.9, 853.0], [6.0, 855.0], [6.1, 856.0], [6.2, 858.0], [6.3, 861.0], [6.4, 864.0], [6.5, 864.0], [6.6, 866.0], [6.7, 869.0], [6.8, 870.0], [6.9, 873.0], [7.0, 876.0], [7.1, 877.0], [7.2, 879.0], [7.3, 880.0], [7.4, 882.0], [7.5, 883.0], [7.6, 884.0], [7.7, 886.0], [7.8, 888.0], [7.9, 890.0], [8.0, 891.0], [8.1, 893.0], [8.2, 894.0], [8.3, 896.0], [8.4, 898.0], [8.5, 900.0], [8.6, 902.0], [8.7, 904.0], [8.8, 906.0], [8.9, 907.0], [9.0, 911.0], [9.1, 911.0], [9.2, 914.0], [9.3, 915.0], [9.4, 916.0], [9.5, 919.0], [9.6, 921.0], [9.7, 922.0], [9.8, 924.0], [9.9, 925.0], [10.0, 927.0], [10.1, 929.0], [10.2, 934.0], [10.3, 935.0], [10.4, 936.0], [10.5, 937.0], [10.6, 938.0], [10.7, 939.0], [10.8, 941.0], [10.9, 944.0], [11.0, 947.0], [11.1, 952.0], [11.2, 956.0], [11.3, 960.0], [11.4, 963.0], [11.5, 966.0], [11.6, 971.0], [11.7, 975.0], [11.8, 978.0], [11.9, 980.0], [12.0, 987.0], [12.1, 991.0], [12.2, 995.0], [12.3, 998.0], [12.4, 1001.0], [12.5, 1005.0], [12.6, 1008.0], [12.7, 1010.0], [12.8, 1012.0], [12.9, 1016.0], [13.0, 1017.0], [13.1, 1021.0], [13.2, 1025.0], [13.3, 1029.0], [13.4, 1033.0], [13.5, 1042.0], [13.6, 1044.0], [13.7, 1048.0], [13.8, 1053.0], [13.9, 1056.0], [14.0, 1058.0], [14.1, 1059.0], [14.2, 1063.0], [14.3, 1065.0], [14.4, 1067.0], [14.5, 1070.0], [14.6, 1075.0], [14.7, 1078.0], [14.8, 1080.0], [14.9, 1082.0], [15.0, 1086.0], [15.1, 1088.0], [15.2, 1091.0], [15.3, 1092.0], [15.4, 1097.0], [15.5, 1098.0], [15.6, 1100.0], [15.7, 1104.0], [15.8, 1112.0], [15.9, 1114.0], [16.0, 1116.0], [16.1, 1119.0], [16.2, 1121.0], [16.3, 1125.0], [16.4, 1127.0], [16.5, 1131.0], [16.6, 1135.0], [16.7, 1137.0], [16.8, 1139.0], [16.9, 1140.0], [17.0, 1142.0], [17.1, 1143.0], [17.2, 1146.0], [17.3, 1148.0], [17.4, 1151.0], [17.5, 1153.0], [17.6, 1155.0], [17.7, 1156.0], [17.8, 1157.0], [17.9, 1158.0], [18.0, 1160.0], [18.1, 1161.0], [18.2, 1163.0], [18.3, 1164.0], [18.4, 1167.0], [18.5, 1170.0], [18.6, 1172.0], [18.7, 1175.0], [18.8, 1176.0], [18.9, 1180.0], [19.0, 1181.0], [19.1, 1181.0], [19.2, 1184.0], [19.3, 1186.0], [19.4, 1188.0], [19.5, 1191.0], [19.6, 1192.0], [19.7, 1195.0], [19.8, 1196.0], [19.9, 1199.0], [20.0, 1201.0], [20.1, 1203.0], [20.2, 1205.0], [20.3, 1207.0], [20.4, 1209.0], [20.5, 1214.0], [20.6, 1217.0], [20.7, 1219.0], [20.8, 1223.0], [20.9, 1227.0], [21.0, 1229.0], [21.1, 1232.0], [21.2, 1234.0], [21.3, 1237.0], [21.4, 1237.0], [21.5, 1242.0], [21.6, 1245.0], [21.7, 1247.0], [21.8, 1250.0], [21.9, 1254.0], [22.0, 1258.0], [22.1, 1260.0], [22.2, 1262.0], [22.3, 1265.0], [22.4, 1267.0], [22.5, 1269.0], [22.6, 1271.0], [22.7, 1276.0], [22.8, 1277.0], [22.9, 1280.0], [23.0, 1283.0], [23.1, 1287.0], [23.2, 1290.0], [23.3, 1292.0], [23.4, 1294.0], [23.5, 1296.0], [23.6, 1298.0], [23.7, 1300.0], [23.8, 1302.0], [23.9, 1305.0], [24.0, 1308.0], [24.1, 1312.0], [24.2, 1314.0], [24.3, 1316.0], [24.4, 1319.0], [24.5, 1320.0], [24.6, 1323.0], [24.7, 1325.0], [24.8, 1327.0], [24.9, 1330.0], [25.0, 1331.0], [25.1, 1332.0], [25.2, 1334.0], [25.3, 1335.0], [25.4, 1336.0], [25.5, 1337.0], [25.6, 1340.0], [25.7, 1343.0], [25.8, 1345.0], [25.9, 1347.0], [26.0, 1349.0], [26.1, 1350.0], [26.2, 1354.0], [26.3, 1357.0], [26.4, 1358.0], [26.5, 1360.0], [26.6, 1361.0], [26.7, 1362.0], [26.8, 1364.0], [26.9, 1367.0], [27.0, 1369.0], [27.1, 1371.0], [27.2, 1374.0], [27.3, 1378.0], [27.4, 1380.0], [27.5, 1381.0], [27.6, 1383.0], [27.7, 1385.0], [27.8, 1388.0], [27.9, 1390.0], [28.0, 1393.0], [28.1, 1395.0], [28.2, 1397.0], [28.3, 1398.0], [28.4, 1401.0], [28.5, 1402.0], [28.6, 1405.0], [28.7, 1407.0], [28.8, 1409.0], [28.9, 1409.0], [29.0, 1412.0], [29.1, 1414.0], [29.2, 1416.0], [29.3, 1418.0], [29.4, 1421.0], [29.5, 1422.0], [29.6, 1424.0], [29.7, 1428.0], [29.8, 1431.0], [29.9, 1435.0], [30.0, 1436.0], [30.1, 1438.0], [30.2, 1440.0], [30.3, 1445.0], [30.4, 1448.0], [30.5, 1449.0], [30.6, 1452.0], [30.7, 1455.0], [30.8, 1456.0], [30.9, 1459.0], [31.0, 1463.0], [31.1, 1464.0], [31.2, 1465.0], [31.3, 1468.0], [31.4, 1469.0], [31.5, 1472.0], [31.6, 1473.0], [31.7, 1476.0], [31.8, 1477.0], [31.9, 1478.0], [32.0, 1480.0], [32.1, 1482.0], [32.2, 1485.0], [32.3, 1488.0], [32.4, 1490.0], [32.5, 1491.0], [32.6, 1493.0], [32.7, 1497.0], [32.8, 1500.0], [32.9, 1503.0], [33.0, 1506.0], [33.1, 1507.0], [33.2, 1509.0], [33.3, 1510.0], [33.4, 1512.0], [33.5, 1515.0], [33.6, 1519.0], [33.7, 1521.0], [33.8, 1522.0], [33.9, 1525.0], [34.0, 1527.0], [34.1, 1530.0], [34.2, 1532.0], [34.3, 1535.0], [34.4, 1538.0], [34.5, 1542.0], [34.6, 1545.0], [34.7, 1547.0], [34.8, 1551.0], [34.9, 1553.0], [35.0, 1555.0], [35.1, 1556.0], [35.2, 1558.0], [35.3, 1563.0], [35.4, 1564.0], [35.5, 1565.0], [35.6, 1568.0], [35.7, 1568.0], [35.8, 1571.0], [35.9, 1575.0], [36.0, 1576.0], [36.1, 1578.0], [36.2, 1579.0], [36.3, 1582.0], [36.4, 1584.0], [36.5, 1586.0], [36.6, 1589.0], [36.7, 1589.0], [36.8, 1591.0], [36.9, 1593.0], [37.0, 1597.0], [37.1, 1599.0], [37.2, 1600.0], [37.3, 1604.0], [37.4, 1606.0], [37.5, 1608.0], [37.6, 1611.0], [37.7, 1613.0], [37.8, 1614.0], [37.9, 1616.0], [38.0, 1620.0], [38.1, 1622.0], [38.2, 1623.0], [38.3, 1625.0], [38.4, 1629.0], [38.5, 1630.0], [38.6, 1631.0], [38.7, 1633.0], [38.8, 1636.0], [38.9, 1638.0], [39.0, 1640.0], [39.1, 1640.0], [39.2, 1645.0], [39.3, 1647.0], [39.4, 1648.0], [39.5, 1650.0], [39.6, 1651.0], [39.7, 1652.0], [39.8, 1653.0], [39.9, 1656.0], [40.0, 1658.0], [40.1, 1662.0], [40.2, 1664.0], [40.3, 1665.0], [40.4, 1666.0], [40.5, 1667.0], [40.6, 1669.0], [40.7, 1671.0], [40.8, 1673.0], [40.9, 1678.0], [41.0, 1680.0], [41.1, 1680.0], [41.2, 1682.0], [41.3, 1684.0], [41.4, 1686.0], [41.5, 1688.0], [41.6, 1688.0], [41.7, 1689.0], [41.8, 1691.0], [41.9, 1692.0], [42.0, 1693.0], [42.1, 1696.0], [42.2, 1698.0], [42.3, 1701.0], [42.4, 1703.0], [42.5, 1704.0], [42.6, 1706.0], [42.7, 1708.0], [42.8, 1711.0], [42.9, 1715.0], [43.0, 1717.0], [43.1, 1719.0], [43.2, 1722.0], [43.3, 1725.0], [43.4, 1726.0], [43.5, 1730.0], [43.6, 1732.0], [43.7, 1733.0], [43.8, 1734.0], [43.9, 1736.0], [44.0, 1739.0], [44.1, 1741.0], [44.2, 1743.0], [44.3, 1744.0], [44.4, 1745.0], [44.5, 1747.0], [44.6, 1750.0], [44.7, 1751.0], [44.8, 1753.0], [44.9, 1754.0], [45.0, 1755.0], [45.1, 1757.0], [45.2, 1759.0], [45.3, 1760.0], [45.4, 1761.0], [45.5, 1763.0], [45.6, 1766.0], [45.7, 1769.0], [45.8, 1771.0], [45.9, 1773.0], [46.0, 1774.0], [46.1, 1775.0], [46.2, 1776.0], [46.3, 1777.0], [46.4, 1779.0], [46.5, 1781.0], [46.6, 1783.0], [46.7, 1785.0], [46.8, 1786.0], [46.9, 1790.0], [47.0, 1791.0], [47.1, 1793.0], [47.2, 1795.0], [47.3, 1797.0], [47.4, 1800.0], [47.5, 1803.0], [47.6, 1810.0], [47.7, 1812.0], [47.8, 1817.0], [47.9, 1817.0], [48.0, 1818.0], [48.1, 1819.0], [48.2, 1822.0], [48.3, 1824.0], [48.4, 1825.0], [48.5, 1826.0], [48.6, 1828.0], [48.7, 1831.0], [48.8, 1833.0], [48.9, 1836.0], [49.0, 1838.0], [49.1, 1840.0], [49.2, 1843.0], [49.3, 1844.0], [49.4, 1845.0], [49.5, 1847.0], [49.6, 1848.0], [49.7, 1850.0], [49.8, 1851.0], [49.9, 1852.0], [50.0, 1854.0], [50.1, 1856.0], [50.2, 1859.0], [50.3, 1860.0], [50.4, 1862.0], [50.5, 1864.0], [50.6, 1866.0], [50.7, 1868.0], [50.8, 1870.0], [50.9, 1872.0], [51.0, 1875.0], [51.1, 1878.0], [51.2, 1880.0], [51.3, 1882.0], [51.4, 1884.0], [51.5, 1887.0], [51.6, 1888.0], [51.7, 1890.0], [51.8, 1891.0], [51.9, 1894.0], [52.0, 1896.0], [52.1, 1896.0], [52.2, 1900.0], [52.3, 1902.0], [52.4, 1905.0], [52.5, 1906.0], [52.6, 1907.0], [52.7, 1909.0], [52.8, 1911.0], [52.9, 1913.0], [53.0, 1915.0], [53.1, 1917.0], [53.2, 1918.0], [53.3, 1920.0], [53.4, 1922.0], [53.5, 1923.0], [53.6, 1924.0], [53.7, 1925.0], [53.8, 1927.0], [53.9, 1929.0], [54.0, 1932.0], [54.1, 1935.0], [54.2, 1937.0], [54.3, 1938.0], [54.4, 1940.0], [54.5, 1942.0], [54.6, 1944.0], [54.7, 1946.0], [54.8, 1948.0], [54.9, 1948.0], [55.0, 1949.0], [55.1, 1951.0], [55.2, 1952.0], [55.3, 1955.0], [55.4, 1956.0], [55.5, 1959.0], [55.6, 1960.0], [55.7, 1964.0], [55.8, 1965.0], [55.9, 1966.0], [56.0, 1968.0], [56.1, 1970.0], [56.2, 1970.0], [56.3, 1971.0], [56.4, 1973.0], [56.5, 1975.0], [56.6, 1976.0], [56.7, 1977.0], [56.8, 1979.0], [56.9, 1981.0], [57.0, 1983.0], [57.1, 1984.0], [57.2, 1988.0], [57.3, 1989.0], [57.4, 1990.0], [57.5, 1993.0], [57.6, 1996.0], [57.7, 1998.0], [57.8, 2000.0], [57.9, 2001.0], [58.0, 2004.0], [58.1, 2005.0], [58.2, 2008.0], [58.3, 2011.0], [58.4, 2013.0], [58.5, 2014.0], [58.6, 2015.0], [58.7, 2017.0], [58.8, 2021.0], [58.9, 2023.0], [59.0, 2025.0], [59.1, 2027.0], [59.2, 2028.0], [59.3, 2030.0], [59.4, 2032.0], [59.5, 2034.0], [59.6, 2036.0], [59.7, 2037.0], [59.8, 2039.0], [59.9, 2040.0], [60.0, 2042.0], [60.1, 2044.0], [60.2, 2046.0], [60.3, 2048.0], [60.4, 2050.0], [60.5, 2053.0], [60.6, 2054.0], [60.7, 2057.0], [60.8, 2059.0], [60.9, 2062.0], [61.0, 2066.0], [61.1, 2067.0], [61.2, 2069.0], [61.3, 2075.0], [61.4, 2076.0], [61.5, 2080.0], [61.6, 2082.0], [61.7, 2083.0], [61.8, 2085.0], [61.9, 2087.0], [62.0, 2090.0], [62.1, 2092.0], [62.2, 2094.0], [62.3, 2095.0], [62.4, 2097.0], [62.5, 2099.0], [62.6, 2102.0], [62.7, 2103.0], [62.8, 2105.0], [62.9, 2106.0], [63.0, 2109.0], [63.1, 2112.0], [63.2, 2115.0], [63.3, 2117.0], [63.4, 2122.0], [63.5, 2125.0], [63.6, 2129.0], [63.7, 2131.0], [63.8, 2134.0], [63.9, 2138.0], [64.0, 2141.0], [64.1, 2143.0], [64.2, 2146.0], [64.3, 2148.0], [64.4, 2148.0], [64.5, 2150.0], [64.6, 2153.0], [64.7, 2155.0], [64.8, 2157.0], [64.9, 2158.0], [65.0, 2162.0], [65.1, 2165.0], [65.2, 2167.0], [65.3, 2171.0], [65.4, 2172.0], [65.5, 2173.0], [65.6, 2174.0], [65.7, 2175.0], [65.8, 2178.0], [65.9, 2181.0], [66.0, 2184.0], [66.1, 2185.0], [66.2, 2188.0], [66.3, 2190.0], [66.4, 2193.0], [66.5, 2195.0], [66.6, 2197.0], [66.7, 2201.0], [66.8, 2204.0], [66.9, 2209.0], [67.0, 2212.0], [67.1, 2214.0], [67.2, 2215.0], [67.3, 2218.0], [67.4, 2220.0], [67.5, 2222.0], [67.6, 2227.0], [67.7, 2229.0], [67.8, 2232.0], [67.9, 2234.0], [68.0, 2237.0], [68.1, 2239.0], [68.2, 2243.0], [68.3, 2246.0], [68.4, 2250.0], [68.5, 2252.0], [68.6, 2256.0], [68.7, 2261.0], [68.8, 2267.0], [68.9, 2268.0], [69.0, 2272.0], [69.1, 2276.0], [69.2, 2279.0], [69.3, 2282.0], [69.4, 2285.0], [69.5, 2289.0], [69.6, 2292.0], [69.7, 2295.0], [69.8, 2297.0], [69.9, 2299.0], [70.0, 2301.0], [70.1, 2305.0], [70.2, 2309.0], [70.3, 2315.0], [70.4, 2322.0], [70.5, 2324.0], [70.6, 2329.0], [70.7, 2335.0], [70.8, 2338.0], [70.9, 2342.0], [71.0, 2344.0], [71.1, 2346.0], [71.2, 2349.0], [71.3, 2352.0], [71.4, 2354.0], [71.5, 2356.0], [71.6, 2360.0], [71.7, 2363.0], [71.8, 2368.0], [71.9, 2372.0], [72.0, 2377.0], [72.1, 2379.0], [72.2, 2381.0], [72.3, 2386.0], [72.4, 2388.0], [72.5, 2391.0], [72.6, 2395.0], [72.7, 2401.0], [72.8, 2405.0], [72.9, 2409.0], [73.0, 2413.0], [73.1, 2415.0], [73.2, 2417.0], [73.3, 2421.0], [73.4, 2424.0], [73.5, 2428.0], [73.6, 2430.0], [73.7, 2436.0], [73.8, 2438.0], [73.9, 2443.0], [74.0, 2446.0], [74.1, 2448.0], [74.2, 2451.0], [74.3, 2452.0], [74.4, 2457.0], [74.5, 2461.0], [74.6, 2464.0], [74.7, 2470.0], [74.8, 2473.0], [74.9, 2476.0], [75.0, 2478.0], [75.1, 2484.0], [75.2, 2486.0], [75.3, 2487.0], [75.4, 2492.0], [75.5, 2499.0], [75.6, 2503.0], [75.7, 2507.0], [75.8, 2509.0], [75.9, 2513.0], [76.0, 2515.0], [76.1, 2521.0], [76.2, 2524.0], [76.3, 2528.0], [76.4, 2530.0], [76.5, 2533.0], [76.6, 2538.0], [76.7, 2544.0], [76.8, 2548.0], [76.9, 2554.0], [77.0, 2559.0], [77.1, 2565.0], [77.2, 2569.0], [77.3, 2575.0], [77.4, 2580.0], [77.5, 2583.0], [77.6, 2587.0], [77.7, 2590.0], [77.8, 2591.0], [77.9, 2593.0], [78.0, 2597.0], [78.1, 2603.0], [78.2, 2604.0], [78.3, 2607.0], [78.4, 2610.0], [78.5, 2611.0], [78.6, 2615.0], [78.7, 2616.0], [78.8, 2619.0], [78.9, 2621.0], [79.0, 2623.0], [79.1, 2627.0], [79.2, 2631.0], [79.3, 2634.0], [79.4, 2640.0], [79.5, 2642.0], [79.6, 2646.0], [79.7, 2650.0], [79.8, 2654.0], [79.9, 2658.0], [80.0, 2662.0], [80.1, 2664.0], [80.2, 2667.0], [80.3, 2671.0], [80.4, 2675.0], [80.5, 2680.0], [80.6, 2683.0], [80.7, 2685.0], [80.8, 2689.0], [80.9, 2692.0], [81.0, 2696.0], [81.1, 2698.0], [81.2, 2702.0], [81.3, 2706.0], [81.4, 2708.0], [81.5, 2711.0], [81.6, 2715.0], [81.7, 2720.0], [81.8, 2722.0], [81.9, 2726.0], [82.0, 2731.0], [82.1, 2736.0], [82.2, 2740.0], [82.3, 2742.0], [82.4, 2746.0], [82.5, 2750.0], [82.6, 2758.0], [82.7, 2761.0], [82.8, 2764.0], [82.9, 2768.0], [83.0, 2771.0], [83.1, 2778.0], [83.2, 2780.0], [83.3, 2787.0], [83.4, 2790.0], [83.5, 2793.0], [83.6, 2798.0], [83.7, 2800.0], [83.8, 2804.0], [83.9, 2806.0], [84.0, 2810.0], [84.1, 2814.0], [84.2, 2818.0], [84.3, 2822.0], [84.4, 2828.0], [84.5, 2839.0], [84.6, 2843.0], [84.7, 2849.0], [84.8, 2850.0], [84.9, 2854.0], [85.0, 2860.0], [85.1, 2863.0], [85.2, 2867.0], [85.3, 2871.0], [85.4, 2874.0], [85.5, 2880.0], [85.6, 2883.0], [85.7, 2889.0], [85.8, 2895.0], [85.9, 2898.0], [86.0, 2901.0], [86.1, 2903.0], [86.2, 2906.0], [86.3, 2908.0], [86.4, 2913.0], [86.5, 2916.0], [86.6, 2918.0], [86.7, 2921.0], [86.8, 2930.0], [86.9, 2936.0], [87.0, 2943.0], [87.1, 2955.0], [87.2, 2959.0], [87.3, 2962.0], [87.4, 2967.0], [87.5, 2975.0], [87.6, 2980.0], [87.7, 2981.0], [87.8, 2989.0], [87.9, 3003.0], [88.0, 3006.0], [88.1, 3009.0], [88.2, 3016.0], [88.3, 3019.0], [88.4, 3027.0], [88.5, 3037.0], [88.6, 3043.0], [88.7, 3051.0], [88.8, 3058.0], [88.9, 3061.0], [89.0, 3067.0], [89.1, 3070.0], [89.2, 3074.0], [89.3, 3079.0], [89.4, 3085.0], [89.5, 3089.0], [89.6, 3092.0], [89.7, 3095.0], [89.8, 3099.0], [89.9, 3105.0], [90.0, 3107.0], [90.1, 3118.0], [90.2, 3121.0], [90.3, 3127.0], [90.4, 3137.0], [90.5, 3150.0], [90.6, 3156.0], [90.7, 3162.0], [90.8, 3171.0], [90.9, 3186.0], [91.0, 3190.0], [91.1, 3203.0], [91.2, 3209.0], [91.3, 3219.0], [91.4, 3231.0], [91.5, 3245.0], [91.6, 3256.0], [91.7, 3270.0], [91.8, 3283.0], [91.9, 3288.0], [92.0, 3297.0], [92.1, 3310.0], [92.2, 3317.0], [92.3, 3321.0], [92.4, 3324.0], [92.5, 3329.0], [92.6, 3332.0], [92.7, 3343.0], [92.8, 3358.0], [92.9, 3366.0], [93.0, 3379.0], [93.1, 3384.0], [93.2, 3397.0], [93.3, 3405.0], [93.4, 3414.0], [93.5, 3429.0], [93.6, 3445.0], [93.7, 3453.0], [93.8, 3462.0], [93.9, 3468.0], [94.0, 3474.0], [94.1, 3484.0], [94.2, 3490.0], [94.3, 3499.0], [94.4, 3518.0], [94.5, 3527.0], [94.6, 3540.0], [94.7, 3549.0], [94.8, 3555.0], [94.9, 3568.0], [95.0, 3570.0], [95.1, 3587.0], [95.2, 3599.0], [95.3, 3608.0], [95.4, 3616.0], [95.5, 3634.0], [95.6, 3645.0], [95.7, 3675.0], [95.8, 3700.0], [95.9, 3732.0], [96.0, 3740.0], [96.1, 3756.0], [96.2, 3779.0], [96.3, 3793.0], [96.4, 3829.0], [96.5, 3852.0], [96.6, 3880.0], [96.7, 3913.0], [96.8, 3940.0], [96.9, 3966.0], [97.0, 4022.0], [97.1, 4055.0], [97.2, 4072.0], [97.3, 4090.0], [97.4, 4138.0], [97.5, 4164.0], [97.6, 4183.0], [97.7, 4241.0], [97.8, 4276.0], [97.9, 4323.0], [98.0, 4367.0], [98.1, 4400.0], [98.2, 4455.0], [98.3, 4485.0], [98.4, 4513.0], [98.5, 4661.0], [98.6, 4739.0], [98.7, 4843.0], [98.8, 4993.0], [98.9, 5213.0], [99.0, 5245.0], [99.1, 5411.0], [99.2, 5473.0], [99.3, 5752.0], [99.4, 5804.0], [99.5, 6181.0], [99.6, 6477.0], [99.7, 6572.0], [99.8, 7385.0], [99.9, 8189.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 500.0, "maxY": 308.0, "series": [{"data": [[600.0, 9.0], [700.0, 120.0], [800.0, 308.0], [900.0, 201.0], [1000.0, 167.0], [1100.0, 230.0], [1200.0, 191.0], [1300.0, 245.0], [1400.0, 227.0], [1500.0, 226.0], [1600.0, 267.0], [1700.0, 266.0], [1800.0, 249.0], [1900.0, 291.0], [2000.0, 247.0], [2100.0, 214.0], [2200.0, 169.0], [2300.0, 143.0], [2400.0, 149.0], [2500.0, 129.0], [2600.0, 161.0], [2700.0, 133.0], [2800.0, 118.0], [2900.0, 99.0], [3000.0, 101.0], [3100.0, 67.0], [3300.0, 63.0], [3200.0, 48.0], [3400.0, 56.0], [3500.0, 46.0], [3700.0, 28.0], [3600.0, 29.0], [3800.0, 18.0], [3900.0, 16.0], [4000.0, 20.0], [4100.0, 17.0], [4200.0, 9.0], [4300.0, 13.0], [4600.0, 6.0], [4400.0, 14.0], [4500.0, 4.0], [4700.0, 6.0], [4800.0, 3.0], [5100.0, 3.0], [4900.0, 4.0], [5000.0, 1.0], [5300.0, 4.0], [5200.0, 7.0], [5400.0, 6.0], [5500.0, 2.0], [5600.0, 2.0], [5700.0, 4.0], [5800.0, 2.0], [6000.0, 1.0], [6100.0, 4.0], [5900.0, 1.0], [6200.0, 2.0], [6300.0, 1.0], [6400.0, 3.0], [6500.0, 4.0], [6700.0, 2.0], [6800.0, 1.0], [7300.0, 3.0], [7500.0, 2.0], [8100.0, 2.0], [8400.0, 1.0], [9100.0, 1.0], [9300.0, 1.0], [10600.0, 1.0], [11500.0, 1.0], [500.0, 2.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 11500.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 3488.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1702.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 3488.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 1.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 10.465116279069766, "minX": 1.60224618E12, "maxY": 12.0, "series": [{"data": [[1.60224642E12, 12.0], [1.60224672E12, 12.0], [1.60224678E12, 12.0], [1.60224708E12, 10.465116279069766], [1.60224618E12, 12.0], [1.60224648E12, 12.0], [1.60224654E12, 12.0], [1.60224684E12, 12.0], [1.6022469E12, 12.0], [1.60224624E12, 12.0], [1.6022463E12, 12.0], [1.6022466E12, 12.0], [1.60224666E12, 12.0], [1.60224696E12, 12.0], [1.60224702E12, 12.0], [1.60224636E12, 12.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60224708E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 1370.0, "minX": 1.0, "maxY": 4003.0, "series": [{"data": [[8.0, 2103.0], [4.0, 1959.0], [2.0, 3913.0], [1.0, 3634.0], [9.0, 1586.0], [10.0, 3162.0], [5.0, 1433.0], [11.0, 1370.0], [12.0, 1995.697297297298], [6.0, 2943.0], [3.0, 4003.0], [7.0, 1407.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[11.987285686765556, 1996.768445386246]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 12.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 333.03333333333336, "minX": 1.60224618E12, "maxY": 2189599.7333333334, "series": [{"data": [[1.60224642E12, 1996719.7833333334], [1.60224672E12, 1509371.8833333333], [1.60224678E12, 1130337.9833333334], [1.60224708E12, 190380.81666666668], [1.60224618E12, 485499.5], [1.60224648E12, 1890307.8833333333], [1.60224654E12, 1773033.8833333333], [1.60224684E12, 2189599.7333333334], [1.6022469E12, 1697197.8333333333], [1.60224624E12, 1661662.2], [1.6022463E12, 1470243.4], [1.6022466E12, 1571443.4166666667], [1.60224666E12, 1734324.8166666667], [1.60224696E12, 1642678.8], [1.60224702E12, 1524738.4166666667], [1.60224636E12, 1505538.3833333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60224642E12, 2925.9666666666667], [1.60224672E12, 2317.483333333333], [1.60224678E12, 3048.9666666666667], [1.60224708E12, 333.03333333333336], [1.60224618E12, 570.7166666666667], [1.60224648E12, 2652.633333333333], [1.60224654E12, 3144.95], [1.60224684E12, 2562.4], [1.6022469E12, 3004.483333333333], [1.60224624E12, 2280.1666666666665], [1.6022463E12, 2532.016666666667], [1.6022466E12, 2195.633333333333], [1.60224666E12, 2448.6666666666665], [1.60224696E12, 2911.366666666667], [1.60224702E12, 2573.2833333333333], [1.60224636E12, 3082.2833333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60224708E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 1714.8755980861238, "minX": 1.60224618E12, "maxY": 2451.697594501717, "series": [{"data": [[1.60224642E12, 1877.6243523316068], [1.60224672E12, 2215.6332288401254], [1.60224678E12, 1714.8841607565], [1.60224708E12, 2408.7906976744193], [1.60224618E12, 2438.413333333334], [1.60224648E12, 2055.254285714286], [1.60224654E12, 1730.7614457831341], [1.60224684E12, 2177.44807121662], [1.6022469E12, 1799.4116161616157], [1.60224624E12, 2216.046583850933], [1.6022463E12, 2094.841954022987], [1.6022466E12, 2451.697594501717], [1.60224666E12, 2125.9239766081882], [1.60224696E12, 1883.9503916449082], [1.60224702E12, 2088.615160349854], [1.60224636E12, 1714.8755980861238]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60224708E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 1713.2727272727273, "minX": 1.60224618E12, "maxY": 2449.8865979381453, "series": [{"data": [[1.60224642E12, 1875.4378238341978], [1.60224672E12, 2213.9592476489024], [1.60224678E12, 1713.839243498817], [1.60224708E12, 2406.9534883720926], [1.60224618E12, 2435.879999999999], [1.60224648E12, 2052.9514285714276], [1.60224654E12, 1728.9638554216865], [1.60224684E12, 2175.0801186943613], [1.6022469E12, 1797.8888888888896], [1.60224624E12, 2213.8850931677002], [1.6022463E12, 2092.9683908045968], [1.6022466E12, 2449.8865979381453], [1.60224666E12, 2124.1432748537995], [1.60224696E12, 1882.3524804177555], [1.60224702E12, 2087.058309037901], [1.60224636E12, 1713.2727272727273]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60224708E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.015151515151515148, "minX": 1.60224618E12, "maxY": 2.040000000000001, "series": [{"data": [[1.60224642E12, 0.03367875647668391], [1.60224672E12, 0.02821316614420063], [1.60224678E12, 0.033096926713947976], [1.60224708E12, 0.18604651162790706], [1.60224618E12, 2.040000000000001], [1.60224648E12, 0.031428571428571445], [1.60224654E12, 0.03855421686746989], [1.60224684E12, 0.05044510385756677], [1.6022469E12, 0.015151515151515148], [1.60224624E12, 0.04037267080745345], [1.6022463E12, 0.04310344827586207], [1.6022466E12, 0.044673539518900365], [1.60224666E12, 0.03801169590643274], [1.60224696E12, 0.03394255874673631], [1.60224702E12, 0.034985422740524776], [1.60224636E12, 0.03349282296650717]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60224708E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 569.0, "minX": 1.60224618E12, "maxY": 11594.0, "series": [{"data": [[1.60224642E12, 3852.0], [1.60224672E12, 6572.0], [1.60224678E12, 5780.0], [1.60224708E12, 4417.0], [1.60224618E12, 4661.0], [1.60224648E12, 5227.0], [1.60224654E12, 6260.0], [1.60224684E12, 5245.0], [1.6022469E12, 4088.0], [1.60224624E12, 9341.0], [1.6022463E12, 6833.0], [1.6022466E12, 9187.0], [1.60224666E12, 11594.0], [1.60224696E12, 4739.0], [1.60224702E12, 5315.0], [1.60224636E12, 5804.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60224642E12, 726.2789988005161], [1.60224672E12, 1116.719998550415], [1.60224678E12, 772.6319997978211], [1.60224708E12, 1214.0], [1.60224618E12, 1192.0], [1.60224648E12, 747.599999666214], [1.60224654E12, 736.9759996032715], [1.60224684E12, 624.0919979047775], [1.6022469E12, 732.0], [1.60224624E12, 794.4189986908436], [1.6022463E12, 1009.9869994175434], [1.6022466E12, 934.6279999303817], [1.60224666E12, 749.1749979555607], [1.60224696E12, 786.8239996337891], [1.60224702E12, 751.191999835968], [1.60224636E12, 778.3969993007183]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60224642E12, 730.8069004797935], [1.60224672E12, 1122.528000640869], [1.60224678E12, 773.3952000808716], [1.60224708E12, 1214.0], [1.60224618E12, 1192.0], [1.60224648E12, 748.8600001335144], [1.60224654E12, 738.4736001586914], [1.60224684E12, 632.001200838089], [1.6022469E12, 732.0], [1.60224624E12, 796.3954000616073], [1.6022463E12, 1012.1857002329826], [1.6022466E12, 934.8908000278473], [1.60224666E12, 756.8925008177757], [1.60224696E12, 788.2064001464844], [1.60224702E12, 751.8112000656128], [1.60224636E12, 781.0367002797127]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60224642E12, 728.794499400258], [1.60224672E12, 1119.8399991989136], [1.60224678E12, 773.0559998989105], [1.60224708E12, 1214.0], [1.60224618E12, 1192.0], [1.60224648E12, 748.299999833107], [1.60224654E12, 737.8079998016358], [1.60224684E12, 628.4859989523887], [1.6022469E12, 732.0], [1.60224624E12, 796.1369999229908], [1.6022463E12, 1011.2084997087717], [1.6022466E12, 934.7739999651909], [1.60224666E12, 753.4624989777803], [1.60224696E12, 787.5919998168945], [1.60224702E12, 751.535999917984], [1.60224636E12, 779.8634996503591]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60224642E12, 611.0], [1.60224672E12, 968.0], [1.60224678E12, 746.0], [1.60224708E12, 1214.0], [1.60224618E12, 1192.0], [1.60224648E12, 739.0], [1.60224654E12, 569.0], [1.60224684E12, 588.0], [1.6022469E12, 723.0], [1.60224624E12, 757.0], [1.6022463E12, 942.0], [1.6022466E12, 914.0], [1.60224666E12, 604.0], [1.60224696E12, 776.0], [1.60224702E12, 744.0], [1.60224636E12, 771.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60224642E12, 1887.0], [1.60224672E12, 1842.0], [1.60224678E12, 1647.0], [1.60224708E12, 2103.0], [1.60224618E12, 2205.0], [1.60224648E12, 1940.0], [1.60224654E12, 1542.0], [1.60224684E12, 2028.0], [1.6022469E12, 1701.0], [1.60224624E12, 1970.5], [1.6022463E12, 1882.5], [1.6022466E12, 2311.0], [1.60224666E12, 1893.5], [1.60224696E12, 1774.0], [1.60224702E12, 1955.0], [1.60224636E12, 1430.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60224708E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 809.5, "minX": 1.0, "maxY": 2908.0, "series": [{"data": [[8.0, 1702.0], [2.0, 2908.0], [9.0, 1424.0], [10.0, 1207.0], [11.0, 1016.0], [3.0, 2589.0], [12.0, 934.5], [13.0, 919.0], [14.0, 879.5], [15.0, 809.5], [1.0, 2796.0], [4.0, 2445.5], [5.0, 2091.0], [6.0, 1979.5], [7.0, 1944.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[5.0, 1412.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 15.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 809.5, "minX": 1.0, "maxY": 2905.5, "series": [{"data": [[8.0, 1700.5], [2.0, 2905.5], [9.0, 1422.0], [10.0, 1207.0], [11.0, 1012.0], [3.0, 2577.0], [12.0, 934.0], [13.0, 919.0], [14.0, 879.5], [15.0, 809.5], [1.0, 2792.0], [4.0, 2444.0], [5.0, 2088.0], [6.0, 1977.5], [7.0, 1943.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[5.0, 1412.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 15.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.5166666666666667, "minX": 1.60224618E12, "maxY": 7.05, "series": [{"data": [[1.60224642E12, 6.433333333333334], [1.60224672E12, 5.316666666666666], [1.60224678E12, 7.05], [1.60224708E12, 0.5166666666666667], [1.60224618E12, 1.45], [1.60224648E12, 5.833333333333333], [1.60224654E12, 6.916666666666667], [1.60224684E12, 5.616666666666666], [1.6022469E12, 6.6], [1.60224624E12, 5.366666666666666], [1.6022463E12, 5.8], [1.6022466E12, 4.85], [1.60224666E12, 5.7], [1.60224696E12, 6.383333333333334], [1.60224702E12, 5.716666666666667], [1.60224636E12, 6.966666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60224708E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60224618E12, "maxY": 7.05, "series": [{"data": [[1.60224642E12, 6.433333333333334], [1.60224672E12, 5.316666666666666], [1.60224678E12, 7.05], [1.60224708E12, 0.7166666666666667], [1.60224618E12, 1.25], [1.60224648E12, 5.816666666666666], [1.60224654E12, 6.916666666666667], [1.60224684E12, 5.616666666666666], [1.6022469E12, 6.6], [1.60224624E12, 5.366666666666666], [1.6022463E12, 5.8], [1.6022466E12, 4.85], [1.60224666E12, 5.7], [1.60224696E12, 6.383333333333334], [1.60224702E12, 5.716666666666667], [1.60224636E12, 6.966666666666667]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.60224648E12, 0.016666666666666666]], "isOverall": false, "label": "400", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60224708E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60224618E12, "maxY": 7.05, "series": [{"data": [[1.60224642E12, 6.433333333333334], [1.60224672E12, 5.316666666666666], [1.60224678E12, 7.05], [1.60224708E12, 0.7166666666666667], [1.60224618E12, 1.25], [1.60224648E12, 5.816666666666666], [1.60224654E12, 6.916666666666667], [1.60224684E12, 5.616666666666666], [1.6022469E12, 6.6], [1.60224624E12, 5.366666666666666], [1.6022463E12, 5.8], [1.6022466E12, 4.85], [1.60224666E12, 5.7], [1.60224696E12, 6.383333333333334], [1.60224702E12, 5.716666666666667], [1.60224636E12, 6.966666666666667]], "isOverall": false, "label": "HTTP Request-success", "isController": false}, {"data": [[1.60224648E12, 0.016666666666666666]], "isOverall": false, "label": "HTTP Request-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60224708E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60224618E12, "maxY": 7.05, "series": [{"data": [[1.60224642E12, 6.433333333333334], [1.60224672E12, 5.316666666666666], [1.60224678E12, 7.05], [1.60224708E12, 0.7166666666666667], [1.60224618E12, 1.25], [1.60224648E12, 5.816666666666666], [1.60224654E12, 6.916666666666667], [1.60224684E12, 5.616666666666666], [1.6022469E12, 6.6], [1.60224624E12, 5.366666666666666], [1.6022463E12, 5.8], [1.6022466E12, 4.85], [1.60224666E12, 5.7], [1.60224696E12, 6.383333333333334], [1.60224702E12, 5.716666666666667], [1.60224636E12, 6.966666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.60224648E12, 0.016666666666666666]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60224708E12, "title": "Total Transactions Per Second"}},
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

