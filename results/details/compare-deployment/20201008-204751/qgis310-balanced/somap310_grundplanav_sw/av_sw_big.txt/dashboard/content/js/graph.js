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
        data: {"result": {"minY": 629.0, "minX": 0.0, "maxY": 10470.0, "series": [{"data": [[0.0, 629.0], [0.1, 707.0], [0.2, 718.0], [0.3, 724.0], [0.4, 728.0], [0.5, 731.0], [0.6, 737.0], [0.7, 739.0], [0.8, 741.0], [0.9, 743.0], [1.0, 744.0], [1.1, 748.0], [1.2, 750.0], [1.3, 751.0], [1.4, 752.0], [1.5, 754.0], [1.6, 757.0], [1.7, 759.0], [1.8, 761.0], [1.9, 763.0], [2.0, 766.0], [2.1, 767.0], [2.2, 770.0], [2.3, 772.0], [2.4, 775.0], [2.5, 777.0], [2.6, 777.0], [2.7, 779.0], [2.8, 781.0], [2.9, 784.0], [3.0, 786.0], [3.1, 787.0], [3.2, 790.0], [3.3, 792.0], [3.4, 796.0], [3.5, 799.0], [3.6, 800.0], [3.7, 804.0], [3.8, 807.0], [3.9, 809.0], [4.0, 810.0], [4.1, 811.0], [4.2, 814.0], [4.3, 815.0], [4.4, 816.0], [4.5, 818.0], [4.6, 820.0], [4.7, 822.0], [4.8, 824.0], [4.9, 826.0], [5.0, 828.0], [5.1, 829.0], [5.2, 832.0], [5.3, 833.0], [5.4, 834.0], [5.5, 835.0], [5.6, 837.0], [5.7, 839.0], [5.8, 840.0], [5.9, 843.0], [6.0, 844.0], [6.1, 846.0], [6.2, 847.0], [6.3, 849.0], [6.4, 851.0], [6.5, 852.0], [6.6, 853.0], [6.7, 857.0], [6.8, 859.0], [6.9, 860.0], [7.0, 862.0], [7.1, 864.0], [7.2, 866.0], [7.3, 867.0], [7.4, 870.0], [7.5, 871.0], [7.6, 874.0], [7.7, 875.0], [7.8, 877.0], [7.9, 880.0], [8.0, 881.0], [8.1, 884.0], [8.2, 885.0], [8.3, 888.0], [8.4, 890.0], [8.5, 890.0], [8.6, 891.0], [8.7, 896.0], [8.8, 897.0], [8.9, 899.0], [9.0, 902.0], [9.1, 903.0], [9.2, 906.0], [9.3, 909.0], [9.4, 910.0], [9.5, 914.0], [9.6, 917.0], [9.7, 918.0], [9.8, 920.0], [9.9, 922.0], [10.0, 925.0], [10.1, 928.0], [10.2, 931.0], [10.3, 936.0], [10.4, 938.0], [10.5, 941.0], [10.6, 943.0], [10.7, 946.0], [10.8, 950.0], [10.9, 953.0], [11.0, 956.0], [11.1, 958.0], [11.2, 959.0], [11.3, 959.0], [11.4, 962.0], [11.5, 966.0], [11.6, 970.0], [11.7, 972.0], [11.8, 976.0], [11.9, 982.0], [12.0, 986.0], [12.1, 995.0], [12.2, 997.0], [12.3, 1001.0], [12.4, 1006.0], [12.5, 1008.0], [12.6, 1013.0], [12.7, 1019.0], [12.8, 1024.0], [12.9, 1029.0], [13.0, 1036.0], [13.1, 1040.0], [13.2, 1046.0], [13.3, 1051.0], [13.4, 1055.0], [13.5, 1061.0], [13.6, 1065.0], [13.7, 1073.0], [13.8, 1076.0], [13.9, 1081.0], [14.0, 1085.0], [14.1, 1088.0], [14.2, 1090.0], [14.3, 1095.0], [14.4, 1098.0], [14.5, 1101.0], [14.6, 1104.0], [14.7, 1109.0], [14.8, 1114.0], [14.9, 1116.0], [15.0, 1119.0], [15.1, 1127.0], [15.2, 1129.0], [15.3, 1132.0], [15.4, 1134.0], [15.5, 1137.0], [15.6, 1140.0], [15.7, 1144.0], [15.8, 1147.0], [15.9, 1149.0], [16.0, 1152.0], [16.1, 1155.0], [16.2, 1157.0], [16.3, 1159.0], [16.4, 1163.0], [16.5, 1165.0], [16.6, 1169.0], [16.7, 1171.0], [16.8, 1175.0], [16.9, 1177.0], [17.0, 1179.0], [17.1, 1181.0], [17.2, 1183.0], [17.3, 1187.0], [17.4, 1188.0], [17.5, 1190.0], [17.6, 1191.0], [17.7, 1193.0], [17.8, 1200.0], [17.9, 1202.0], [18.0, 1204.0], [18.1, 1205.0], [18.2, 1207.0], [18.3, 1209.0], [18.4, 1212.0], [18.5, 1216.0], [18.6, 1219.0], [18.7, 1222.0], [18.8, 1223.0], [18.9, 1227.0], [19.0, 1228.0], [19.1, 1230.0], [19.2, 1232.0], [19.3, 1233.0], [19.4, 1234.0], [19.5, 1237.0], [19.6, 1239.0], [19.7, 1240.0], [19.8, 1242.0], [19.9, 1245.0], [20.0, 1248.0], [20.1, 1250.0], [20.2, 1251.0], [20.3, 1254.0], [20.4, 1257.0], [20.5, 1262.0], [20.6, 1264.0], [20.7, 1265.0], [20.8, 1267.0], [20.9, 1269.0], [21.0, 1273.0], [21.1, 1275.0], [21.2, 1277.0], [21.3, 1279.0], [21.4, 1282.0], [21.5, 1285.0], [21.6, 1286.0], [21.7, 1288.0], [21.8, 1291.0], [21.9, 1294.0], [22.0, 1297.0], [22.1, 1299.0], [22.2, 1303.0], [22.3, 1308.0], [22.4, 1313.0], [22.5, 1315.0], [22.6, 1320.0], [22.7, 1321.0], [22.8, 1323.0], [22.9, 1325.0], [23.0, 1327.0], [23.1, 1330.0], [23.2, 1332.0], [23.3, 1333.0], [23.4, 1334.0], [23.5, 1335.0], [23.6, 1340.0], [23.7, 1342.0], [23.8, 1344.0], [23.9, 1346.0], [24.0, 1346.0], [24.1, 1348.0], [24.2, 1350.0], [24.3, 1351.0], [24.4, 1353.0], [24.5, 1357.0], [24.6, 1360.0], [24.7, 1363.0], [24.8, 1366.0], [24.9, 1368.0], [25.0, 1369.0], [25.1, 1370.0], [25.2, 1372.0], [25.3, 1375.0], [25.4, 1377.0], [25.5, 1381.0], [25.6, 1383.0], [25.7, 1385.0], [25.8, 1385.0], [25.9, 1387.0], [26.0, 1389.0], [26.1, 1391.0], [26.2, 1393.0], [26.3, 1396.0], [26.4, 1399.0], [26.5, 1399.0], [26.6, 1402.0], [26.7, 1405.0], [26.8, 1407.0], [26.9, 1410.0], [27.0, 1412.0], [27.1, 1413.0], [27.2, 1417.0], [27.3, 1421.0], [27.4, 1425.0], [27.5, 1428.0], [27.6, 1432.0], [27.7, 1435.0], [27.8, 1440.0], [27.9, 1441.0], [28.0, 1444.0], [28.1, 1446.0], [28.2, 1449.0], [28.3, 1450.0], [28.4, 1452.0], [28.5, 1456.0], [28.6, 1457.0], [28.7, 1460.0], [28.8, 1465.0], [28.9, 1467.0], [29.0, 1469.0], [29.1, 1472.0], [29.2, 1473.0], [29.3, 1476.0], [29.4, 1480.0], [29.5, 1482.0], [29.6, 1485.0], [29.7, 1487.0], [29.8, 1489.0], [29.9, 1494.0], [30.0, 1496.0], [30.1, 1500.0], [30.2, 1501.0], [30.3, 1504.0], [30.4, 1505.0], [30.5, 1511.0], [30.6, 1513.0], [30.7, 1515.0], [30.8, 1518.0], [30.9, 1520.0], [31.0, 1521.0], [31.1, 1524.0], [31.2, 1526.0], [31.3, 1528.0], [31.4, 1531.0], [31.5, 1535.0], [31.6, 1537.0], [31.7, 1539.0], [31.8, 1541.0], [31.9, 1544.0], [32.0, 1548.0], [32.1, 1550.0], [32.2, 1555.0], [32.3, 1560.0], [32.4, 1562.0], [32.5, 1565.0], [32.6, 1568.0], [32.7, 1569.0], [32.8, 1571.0], [32.9, 1572.0], [33.0, 1575.0], [33.1, 1579.0], [33.2, 1583.0], [33.3, 1588.0], [33.4, 1589.0], [33.5, 1591.0], [33.6, 1593.0], [33.7, 1597.0], [33.8, 1598.0], [33.9, 1602.0], [34.0, 1604.0], [34.1, 1607.0], [34.2, 1608.0], [34.3, 1610.0], [34.4, 1611.0], [34.5, 1613.0], [34.6, 1616.0], [34.7, 1616.0], [34.8, 1618.0], [34.9, 1622.0], [35.0, 1623.0], [35.1, 1628.0], [35.2, 1630.0], [35.3, 1631.0], [35.4, 1634.0], [35.5, 1635.0], [35.6, 1636.0], [35.7, 1638.0], [35.8, 1641.0], [35.9, 1642.0], [36.0, 1643.0], [36.1, 1645.0], [36.2, 1647.0], [36.3, 1651.0], [36.4, 1653.0], [36.5, 1655.0], [36.6, 1658.0], [36.7, 1659.0], [36.8, 1663.0], [36.9, 1666.0], [37.0, 1668.0], [37.1, 1669.0], [37.2, 1672.0], [37.3, 1674.0], [37.4, 1675.0], [37.5, 1677.0], [37.6, 1678.0], [37.7, 1679.0], [37.8, 1681.0], [37.9, 1683.0], [38.0, 1684.0], [38.1, 1686.0], [38.2, 1686.0], [38.3, 1688.0], [38.4, 1691.0], [38.5, 1692.0], [38.6, 1693.0], [38.7, 1695.0], [38.8, 1698.0], [38.9, 1699.0], [39.0, 1700.0], [39.1, 1701.0], [39.2, 1703.0], [39.3, 1705.0], [39.4, 1707.0], [39.5, 1710.0], [39.6, 1713.0], [39.7, 1716.0], [39.8, 1717.0], [39.9, 1722.0], [40.0, 1724.0], [40.1, 1726.0], [40.2, 1729.0], [40.3, 1730.0], [40.4, 1733.0], [40.5, 1736.0], [40.6, 1739.0], [40.7, 1741.0], [40.8, 1742.0], [40.9, 1743.0], [41.0, 1746.0], [41.1, 1747.0], [41.2, 1749.0], [41.3, 1750.0], [41.4, 1753.0], [41.5, 1755.0], [41.6, 1758.0], [41.7, 1759.0], [41.8, 1761.0], [41.9, 1765.0], [42.0, 1768.0], [42.1, 1769.0], [42.2, 1772.0], [42.3, 1774.0], [42.4, 1775.0], [42.5, 1777.0], [42.6, 1778.0], [42.7, 1780.0], [42.8, 1782.0], [42.9, 1783.0], [43.0, 1785.0], [43.1, 1786.0], [43.2, 1788.0], [43.3, 1790.0], [43.4, 1790.0], [43.5, 1792.0], [43.6, 1794.0], [43.7, 1796.0], [43.8, 1797.0], [43.9, 1798.0], [44.0, 1800.0], [44.1, 1802.0], [44.2, 1803.0], [44.3, 1804.0], [44.4, 1806.0], [44.5, 1809.0], [44.6, 1811.0], [44.7, 1812.0], [44.8, 1813.0], [44.9, 1814.0], [45.0, 1815.0], [45.1, 1815.0], [45.2, 1816.0], [45.3, 1817.0], [45.4, 1819.0], [45.5, 1821.0], [45.6, 1824.0], [45.7, 1825.0], [45.8, 1827.0], [45.9, 1828.0], [46.0, 1830.0], [46.1, 1831.0], [46.2, 1834.0], [46.3, 1835.0], [46.4, 1836.0], [46.5, 1838.0], [46.6, 1841.0], [46.7, 1842.0], [46.8, 1844.0], [46.9, 1845.0], [47.0, 1845.0], [47.1, 1847.0], [47.2, 1849.0], [47.3, 1850.0], [47.4, 1851.0], [47.5, 1854.0], [47.6, 1856.0], [47.7, 1857.0], [47.8, 1857.0], [47.9, 1859.0], [48.0, 1861.0], [48.1, 1863.0], [48.2, 1865.0], [48.3, 1865.0], [48.4, 1866.0], [48.5, 1867.0], [48.6, 1868.0], [48.7, 1870.0], [48.8, 1872.0], [48.9, 1875.0], [49.0, 1876.0], [49.1, 1878.0], [49.2, 1879.0], [49.3, 1881.0], [49.4, 1882.0], [49.5, 1884.0], [49.6, 1885.0], [49.7, 1887.0], [49.8, 1888.0], [49.9, 1891.0], [50.0, 1893.0], [50.1, 1895.0], [50.2, 1897.0], [50.3, 1899.0], [50.4, 1900.0], [50.5, 1900.0], [50.6, 1902.0], [50.7, 1904.0], [50.8, 1905.0], [50.9, 1906.0], [51.0, 1907.0], [51.1, 1909.0], [51.2, 1910.0], [51.3, 1913.0], [51.4, 1914.0], [51.5, 1915.0], [51.6, 1916.0], [51.7, 1917.0], [51.8, 1920.0], [51.9, 1921.0], [52.0, 1922.0], [52.1, 1924.0], [52.2, 1925.0], [52.3, 1928.0], [52.4, 1929.0], [52.5, 1930.0], [52.6, 1931.0], [52.7, 1933.0], [52.8, 1935.0], [52.9, 1937.0], [53.0, 1938.0], [53.1, 1939.0], [53.2, 1942.0], [53.3, 1943.0], [53.4, 1944.0], [53.5, 1945.0], [53.6, 1946.0], [53.7, 1947.0], [53.8, 1948.0], [53.9, 1949.0], [54.0, 1951.0], [54.1, 1952.0], [54.2, 1954.0], [54.3, 1956.0], [54.4, 1958.0], [54.5, 1960.0], [54.6, 1960.0], [54.7, 1962.0], [54.8, 1964.0], [54.9, 1965.0], [55.0, 1968.0], [55.1, 1969.0], [55.2, 1971.0], [55.3, 1975.0], [55.4, 1977.0], [55.5, 1980.0], [55.6, 1981.0], [55.7, 1983.0], [55.8, 1984.0], [55.9, 1986.0], [56.0, 1989.0], [56.1, 1990.0], [56.2, 1991.0], [56.3, 1992.0], [56.4, 1993.0], [56.5, 1995.0], [56.6, 1998.0], [56.7, 2000.0], [56.8, 2003.0], [56.9, 2004.0], [57.0, 2006.0], [57.1, 2009.0], [57.2, 2010.0], [57.3, 2012.0], [57.4, 2014.0], [57.5, 2015.0], [57.6, 2017.0], [57.7, 2019.0], [57.8, 2021.0], [57.9, 2024.0], [58.0, 2027.0], [58.1, 2028.0], [58.2, 2030.0], [58.3, 2031.0], [58.4, 2033.0], [58.5, 2036.0], [58.6, 2038.0], [58.7, 2041.0], [58.8, 2043.0], [58.9, 2046.0], [59.0, 2049.0], [59.1, 2050.0], [59.2, 2052.0], [59.3, 2053.0], [59.4, 2055.0], [59.5, 2056.0], [59.6, 2057.0], [59.7, 2060.0], [59.8, 2062.0], [59.9, 2063.0], [60.0, 2065.0], [60.1, 2069.0], [60.2, 2072.0], [60.3, 2075.0], [60.4, 2075.0], [60.5, 2077.0], [60.6, 2080.0], [60.7, 2084.0], [60.8, 2087.0], [60.9, 2089.0], [61.0, 2093.0], [61.1, 2095.0], [61.2, 2099.0], [61.3, 2104.0], [61.4, 2106.0], [61.5, 2108.0], [61.6, 2110.0], [61.7, 2113.0], [61.8, 2115.0], [61.9, 2117.0], [62.0, 2122.0], [62.1, 2125.0], [62.2, 2128.0], [62.3, 2132.0], [62.4, 2133.0], [62.5, 2134.0], [62.6, 2135.0], [62.7, 2137.0], [62.8, 2139.0], [62.9, 2140.0], [63.0, 2143.0], [63.1, 2145.0], [63.2, 2147.0], [63.3, 2149.0], [63.4, 2152.0], [63.5, 2154.0], [63.6, 2156.0], [63.7, 2158.0], [63.8, 2160.0], [63.9, 2162.0], [64.0, 2165.0], [64.1, 2167.0], [64.2, 2169.0], [64.3, 2172.0], [64.4, 2176.0], [64.5, 2177.0], [64.6, 2181.0], [64.7, 2183.0], [64.8, 2186.0], [64.9, 2188.0], [65.0, 2195.0], [65.1, 2197.0], [65.2, 2200.0], [65.3, 2201.0], [65.4, 2203.0], [65.5, 2205.0], [65.6, 2208.0], [65.7, 2211.0], [65.8, 2212.0], [65.9, 2213.0], [66.0, 2217.0], [66.1, 2223.0], [66.2, 2226.0], [66.3, 2228.0], [66.4, 2230.0], [66.5, 2237.0], [66.6, 2239.0], [66.7, 2240.0], [66.8, 2244.0], [66.9, 2245.0], [67.0, 2246.0], [67.1, 2249.0], [67.2, 2252.0], [67.3, 2255.0], [67.4, 2258.0], [67.5, 2261.0], [67.6, 2264.0], [67.7, 2267.0], [67.8, 2270.0], [67.9, 2272.0], [68.0, 2273.0], [68.1, 2277.0], [68.2, 2280.0], [68.3, 2282.0], [68.4, 2285.0], [68.5, 2288.0], [68.6, 2293.0], [68.7, 2296.0], [68.8, 2298.0], [68.9, 2304.0], [69.0, 2307.0], [69.1, 2311.0], [69.2, 2317.0], [69.3, 2322.0], [69.4, 2326.0], [69.5, 2332.0], [69.6, 2333.0], [69.7, 2337.0], [69.8, 2340.0], [69.9, 2345.0], [70.0, 2348.0], [70.1, 2352.0], [70.2, 2354.0], [70.3, 2356.0], [70.4, 2359.0], [70.5, 2362.0], [70.6, 2366.0], [70.7, 2369.0], [70.8, 2372.0], [70.9, 2376.0], [71.0, 2379.0], [71.1, 2382.0], [71.2, 2383.0], [71.3, 2386.0], [71.4, 2388.0], [71.5, 2392.0], [71.6, 2395.0], [71.7, 2399.0], [71.8, 2403.0], [71.9, 2406.0], [72.0, 2409.0], [72.1, 2411.0], [72.2, 2413.0], [72.3, 2417.0], [72.4, 2421.0], [72.5, 2425.0], [72.6, 2428.0], [72.7, 2431.0], [72.8, 2436.0], [72.9, 2440.0], [73.0, 2442.0], [73.1, 2445.0], [73.2, 2447.0], [73.3, 2450.0], [73.4, 2453.0], [73.5, 2458.0], [73.6, 2461.0], [73.7, 2463.0], [73.8, 2469.0], [73.9, 2471.0], [74.0, 2475.0], [74.1, 2479.0], [74.2, 2483.0], [74.3, 2486.0], [74.4, 2489.0], [74.5, 2492.0], [74.6, 2494.0], [74.7, 2496.0], [74.8, 2499.0], [74.9, 2503.0], [75.0, 2506.0], [75.1, 2509.0], [75.2, 2513.0], [75.3, 2515.0], [75.4, 2520.0], [75.5, 2523.0], [75.6, 2526.0], [75.7, 2528.0], [75.8, 2530.0], [75.9, 2534.0], [76.0, 2537.0], [76.1, 2540.0], [76.2, 2542.0], [76.3, 2547.0], [76.4, 2549.0], [76.5, 2552.0], [76.6, 2555.0], [76.7, 2558.0], [76.8, 2559.0], [76.9, 2561.0], [77.0, 2563.0], [77.1, 2564.0], [77.2, 2568.0], [77.3, 2569.0], [77.4, 2573.0], [77.5, 2577.0], [77.6, 2580.0], [77.7, 2583.0], [77.8, 2589.0], [77.9, 2593.0], [78.0, 2596.0], [78.1, 2598.0], [78.2, 2603.0], [78.3, 2605.0], [78.4, 2607.0], [78.5, 2612.0], [78.6, 2615.0], [78.7, 2616.0], [78.8, 2622.0], [78.9, 2624.0], [79.0, 2628.0], [79.1, 2633.0], [79.2, 2637.0], [79.3, 2641.0], [79.4, 2645.0], [79.5, 2649.0], [79.6, 2653.0], [79.7, 2657.0], [79.8, 2660.0], [79.9, 2662.0], [80.0, 2664.0], [80.1, 2666.0], [80.2, 2670.0], [80.3, 2671.0], [80.4, 2673.0], [80.5, 2676.0], [80.6, 2676.0], [80.7, 2681.0], [80.8, 2683.0], [80.9, 2687.0], [81.0, 2689.0], [81.1, 2691.0], [81.2, 2697.0], [81.3, 2699.0], [81.4, 2702.0], [81.5, 2703.0], [81.6, 2709.0], [81.7, 2710.0], [81.8, 2713.0], [81.9, 2717.0], [82.0, 2722.0], [82.1, 2724.0], [82.2, 2727.0], [82.3, 2732.0], [82.4, 2734.0], [82.5, 2737.0], [82.6, 2740.0], [82.7, 2746.0], [82.8, 2749.0], [82.9, 2750.0], [83.0, 2753.0], [83.1, 2757.0], [83.2, 2764.0], [83.3, 2766.0], [83.4, 2769.0], [83.5, 2770.0], [83.6, 2773.0], [83.7, 2779.0], [83.8, 2783.0], [83.9, 2788.0], [84.0, 2795.0], [84.1, 2796.0], [84.2, 2800.0], [84.3, 2804.0], [84.4, 2810.0], [84.5, 2812.0], [84.6, 2817.0], [84.7, 2822.0], [84.8, 2826.0], [84.9, 2830.0], [85.0, 2835.0], [85.1, 2837.0], [85.2, 2842.0], [85.3, 2845.0], [85.4, 2853.0], [85.5, 2858.0], [85.6, 2862.0], [85.7, 2867.0], [85.8, 2872.0], [85.9, 2878.0], [86.0, 2887.0], [86.1, 2892.0], [86.2, 2897.0], [86.3, 2905.0], [86.4, 2909.0], [86.5, 2913.0], [86.6, 2914.0], [86.7, 2920.0], [86.8, 2931.0], [86.9, 2936.0], [87.0, 2943.0], [87.1, 2952.0], [87.2, 2956.0], [87.3, 2963.0], [87.4, 2970.0], [87.5, 2974.0], [87.6, 2983.0], [87.7, 2991.0], [87.8, 2998.0], [87.9, 3002.0], [88.0, 3007.0], [88.1, 3014.0], [88.2, 3024.0], [88.3, 3029.0], [88.4, 3033.0], [88.5, 3039.0], [88.6, 3044.0], [88.7, 3048.0], [88.8, 3053.0], [88.9, 3055.0], [89.0, 3064.0], [89.1, 3073.0], [89.2, 3076.0], [89.3, 3082.0], [89.4, 3088.0], [89.5, 3095.0], [89.6, 3106.0], [89.7, 3113.0], [89.8, 3114.0], [89.9, 3121.0], [90.0, 3129.0], [90.1, 3140.0], [90.2, 3146.0], [90.3, 3150.0], [90.4, 3156.0], [90.5, 3160.0], [90.6, 3171.0], [90.7, 3176.0], [90.8, 3183.0], [90.9, 3191.0], [91.0, 3196.0], [91.1, 3204.0], [91.2, 3209.0], [91.3, 3221.0], [91.4, 3222.0], [91.5, 3234.0], [91.6, 3243.0], [91.7, 3249.0], [91.8, 3260.0], [91.9, 3265.0], [92.0, 3272.0], [92.1, 3278.0], [92.2, 3289.0], [92.3, 3292.0], [92.4, 3300.0], [92.5, 3306.0], [92.6, 3317.0], [92.7, 3328.0], [92.8, 3333.0], [92.9, 3343.0], [93.0, 3355.0], [93.1, 3366.0], [93.2, 3384.0], [93.3, 3390.0], [93.4, 3400.0], [93.5, 3406.0], [93.6, 3411.0], [93.7, 3421.0], [93.8, 3439.0], [93.9, 3449.0], [94.0, 3452.0], [94.1, 3461.0], [94.2, 3473.0], [94.3, 3487.0], [94.4, 3500.0], [94.5, 3515.0], [94.6, 3532.0], [94.7, 3544.0], [94.8, 3563.0], [94.9, 3589.0], [95.0, 3603.0], [95.1, 3618.0], [95.2, 3649.0], [95.3, 3662.0], [95.4, 3668.0], [95.5, 3676.0], [95.6, 3696.0], [95.7, 3728.0], [95.8, 3753.0], [95.9, 3773.0], [96.0, 3824.0], [96.1, 3849.0], [96.2, 3854.0], [96.3, 3866.0], [96.4, 3884.0], [96.5, 3913.0], [96.6, 3927.0], [96.7, 3952.0], [96.8, 3992.0], [96.9, 4024.0], [97.0, 4033.0], [97.1, 4077.0], [97.2, 4109.0], [97.3, 4138.0], [97.4, 4199.0], [97.5, 4233.0], [97.6, 4272.0], [97.7, 4299.0], [97.8, 4337.0], [97.9, 4392.0], [98.0, 4431.0], [98.1, 4500.0], [98.2, 4545.0], [98.3, 4605.0], [98.4, 4657.0], [98.5, 4732.0], [98.6, 4826.0], [98.7, 4872.0], [98.8, 4950.0], [98.9, 4988.0], [99.0, 5050.0], [99.1, 5141.0], [99.2, 5614.0], [99.3, 5836.0], [99.4, 6075.0], [99.5, 6409.0], [99.6, 6551.0], [99.7, 7069.0], [99.8, 7506.0], [99.9, 8077.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 600.0, "maxY": 333.0, "series": [{"data": [[600.0, 2.0], [700.0, 184.0], [800.0, 276.0], [900.0, 174.0], [1000.0, 112.0], [1100.0, 175.0], [1200.0, 225.0], [1300.0, 228.0], [1400.0, 186.0], [1500.0, 194.0], [1600.0, 267.0], [1700.0, 259.0], [1800.0, 333.0], [1900.0, 327.0], [2000.0, 236.0], [2100.0, 206.0], [2200.0, 190.0], [2300.0, 148.0], [2400.0, 161.0], [2500.0, 174.0], [2600.0, 165.0], [2800.0, 108.0], [2700.0, 146.0], [2900.0, 83.0], [3000.0, 87.0], [3100.0, 81.0], [3300.0, 52.0], [3200.0, 69.0], [3400.0, 52.0], [3500.0, 29.0], [3600.0, 34.0], [3700.0, 18.0], [3800.0, 25.0], [3900.0, 21.0], [4000.0, 16.0], [4200.0, 15.0], [4100.0, 14.0], [4300.0, 10.0], [4400.0, 10.0], [4500.0, 9.0], [4600.0, 9.0], [4800.0, 7.0], [4700.0, 8.0], [4900.0, 10.0], [5000.0, 9.0], [5100.0, 2.0], [5300.0, 1.0], [5200.0, 1.0], [5600.0, 2.0], [5400.0, 1.0], [5700.0, 3.0], [5800.0, 1.0], [6100.0, 3.0], [5900.0, 3.0], [6000.0, 3.0], [6300.0, 1.0], [6400.0, 4.0], [6600.0, 3.0], [6500.0, 2.0], [6900.0, 1.0], [7000.0, 2.0], [7400.0, 1.0], [7300.0, 2.0], [7600.0, 1.0], [7500.0, 3.0], [8000.0, 2.0], [8300.0, 1.0], [9100.0, 1.0], [9900.0, 1.0], [10400.0, 1.0], [10300.0, 1.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 10400.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 3625.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1565.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 3625.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 1.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 11.388888888888891, "minX": 1.60219518E12, "maxY": 12.0, "series": [{"data": [[1.60219602E12, 12.0], [1.60219536E12, 12.0], [1.60219542E12, 12.0], [1.60219572E12, 12.0], [1.60219578E12, 12.0], [1.60219608E12, 11.388888888888891], [1.60219518E12, 12.0], [1.60219548E12, 12.0], [1.60219554E12, 12.0], [1.60219584E12, 12.0], [1.6021959E12, 12.0], [1.60219524E12, 12.0], [1.6021953E12, 12.0], [1.6021956E12, 12.0], [1.60219566E12, 12.0], [1.60219596E12, 12.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60219608E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 1794.0, "minX": 1.0, "maxY": 3883.0, "series": [{"data": [[8.0, 2509.0], [4.0, 1921.0], [2.0, 3883.0], [1.0, 3579.0], [9.0, 1898.0], [10.0, 2555.0], [5.0, 1794.0], [11.0, 2696.0], [12.0, 2023.5739382239394], [6.0, 1815.0], [3.0, 1896.0], [7.0, 1855.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[11.987285686765556, 2024.3717973415542]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 12.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 502.8333333333333, "minX": 1.60219518E12, "maxY": 2109495.0, "series": [{"data": [[1.60219602E12, 1667479.4666666666], [1.60219536E12, 1284585.45], [1.60219542E12, 2109495.0], [1.60219572E12, 1551262.4166666667], [1.60219578E12, 1132333.7], [1.60219608E12, 487087.9], [1.60219518E12, 411521.65], [1.60219548E12, 1878874.7166666666], [1.60219554E12, 1807064.85], [1.60219584E12, 2068169.4666666666], [1.6021959E12, 1672640.3833333333], [1.60219524E12, 1671611.7833333334], [1.6021953E12, 1463133.9833333334], [1.6021956E12, 1511468.2666666666], [1.60219566E12, 1718421.0166666666], [1.60219596E12, 1537546.1666666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60219602E12, 2580.7], [1.60219536E12, 3063.383333333333], [1.60219542E12, 2840.7], [1.60219572E12, 2533.55], [1.60219578E12, 2749.266666666667], [1.60219608E12, 818.0166666666667], [1.60219518E12, 502.8333333333333], [1.60219548E12, 2634.266666666667], [1.60219554E12, 2993.016666666667], [1.60219584E12, 2395.4], [1.6021959E12, 3172.2], [1.60219524E12, 2279.6], [1.6021953E12, 2407.4166666666665], [1.6021956E12, 2347.6833333333334], [1.60219566E12, 2318.65], [1.60219596E12, 2947.366666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60219608E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 1701.9066985645936, "minX": 1.60219518E12, "maxY": 2560.7962962962974, "series": [{"data": [[1.60219602E12, 2091.66081871345], [1.60219536E12, 1701.9066985645936], [1.60219542E12, 1958.3546666666662], [1.60219572E12, 2017.3789173789178], [1.60219578E12, 1951.8320000000015], [1.60219608E12, 2560.7962962962974], [1.60219518E12, 2336.4848484848485], [1.60219548E12, 2051.7787356321833], [1.60219554E12, 1839.2690355329958], [1.60219584E12, 2193.344615384618], [1.6021959E12, 1717.3723150357985], [1.60219524E12, 2213.5482866043603], [1.6021953E12, 2218.972727272728], [1.6021956E12, 2290.641025641024], [1.60219566E12, 2271.3134796238255], [1.60219596E12, 1864.5077319587654]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60219608E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 1700.5167464114836, "minX": 1.60219518E12, "maxY": 2558.990740740742, "series": [{"data": [[1.60219602E12, 2089.888888888888], [1.60219536E12, 1700.5167464114836], [1.60219542E12, 1955.8666666666659], [1.60219572E12, 2015.8689458689475], [1.60219578E12, 1950.6986666666646], [1.60219608E12, 2558.990740740742], [1.60219518E12, 2334.0303030303025], [1.60219548E12, 2049.499999999998], [1.60219554E12, 1837.3832487309637], [1.60219584E12, 2191.076923076923], [1.6021959E12, 1715.9498806682566], [1.60219524E12, 2211.2554517133963], [1.6021953E12, 2216.7757575757573], [1.6021956E12, 2288.705128205131], [1.60219566E12, 2269.3949843260198], [1.60219596E12, 1863.0824742268046]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60219608E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.021538461538461545, "minX": 1.60219518E12, "maxY": 1.9696969696969706, "series": [{"data": [[1.60219602E12, 0.03216374269005851], [1.60219536E12, 0.03349282296650717], [1.60219542E12, 0.032], [1.60219572E12, 0.028490028490028494], [1.60219578E12, 0.04000000000000001], [1.60219608E12, 0.11111111111111112], [1.60219518E12, 1.9696969696969706], [1.60219548E12, 0.037356321839080456], [1.60219554E12, 0.032994923857867994], [1.60219584E12, 0.021538461538461545], [1.6021959E12, 0.03341288782816228], [1.60219524E12, 0.052959501557632405], [1.6021953E12, 0.039393939393939405], [1.6021956E12, 0.04807692307692307], [1.60219566E12, 0.05956112852664575], [1.60219596E12, 0.036082474226804155]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60219608E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 629.0, "minX": 1.60219518E12, "maxY": 10470.0, "series": [{"data": [[1.60219602E12, 5836.0], [1.60219536E12, 6456.0], [1.60219542E12, 6611.0], [1.60219572E12, 8393.0], [1.60219578E12, 6158.0], [1.60219608E12, 4875.0], [1.60219518E12, 4539.0], [1.60219548E12, 5057.0], [1.60219554E12, 6668.0], [1.60219584E12, 4138.0], [1.6021959E12, 4745.0], [1.60219524E12, 9914.0], [1.6021953E12, 7685.0], [1.6021956E12, 6661.0], [1.60219566E12, 10470.0], [1.60219596E12, 3843.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60219602E12, 730.0], [1.60219536E12, 756.6259994006157], [1.60219542E12, 759.7679998207092], [1.60219572E12, 920.51199924469], [1.60219578E12, 751.9199995517731], [1.60219608E12, 1274.0], [1.60219518E12, 1014.0], [1.60219548E12, 707.5279996681213], [1.60219554E12, 706.5499990582466], [1.60219584E12, 932.1259930825233], [1.6021959E12, 736.7799998998642], [1.60219524E12, 742.0], [1.6021953E12, 1063.768999131918], [1.6021956E12, 789.2679997014999], [1.60219566E12, 751.0], [1.60219596E12, 765.5109989798069]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60219602E12, 730.0], [1.60219536E12, 758.148100039959], [1.60219542E12, 760.4448000717163], [1.60219572E12, 923.363200302124], [1.60219578E12, 753.6120001792908], [1.60219608E12, 1278.746000623703], [1.60219518E12, 1014.0], [1.60219548E12, 708.7808001327514], [1.60219554E12, 710.1050003767014], [1.60219584E12, 941.183600435257], [1.6021959E12, 737.3160000801087], [1.60219524E12, 742.1878000307083], [1.6021953E12, 1069.814900662899], [1.6021956E12, 792.4675007462502], [1.60219566E12, 751.3360000610352], [1.60219596E12, 769.3621004080773]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60219602E12, 730.0], [1.60219536E12, 757.8829997003079], [1.60219542E12, 760.1439999103546], [1.60219572E12, 922.095999622345], [1.60219578E12, 752.8599997758865], [1.60219608E12, 1276.1299992203712], [1.60219518E12, 1014.0], [1.60219548E12, 708.2239998340607], [1.60219554E12, 708.5249995291233], [1.60219584E12, 939.3579994559288], [1.6021959E12, 736.9899999499321], [1.60219524E12, 742.0589999616146], [1.6021953E12, 1067.0344991713762], [1.6021956E12, 789.89399985075], [1.60219566E12, 751.079999923706], [1.60219596E12, 767.6504994899035]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60219602E12, 727.0], [1.60219536E12, 743.0], [1.60219542E12, 743.0], [1.60219572E12, 881.0], [1.60219578E12, 741.0], [1.60219608E12, 1274.0], [1.60219518E12, 1014.0], [1.60219548E12, 703.0], [1.60219554E12, 629.0], [1.60219584E12, 802.0], [1.6021959E12, 724.0], [1.60219524E12, 737.0], [1.6021953E12, 1006.0], [1.6021956E12, 768.0], [1.60219566E12, 747.0], [1.60219596E12, 744.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60219602E12, 1927.5], [1.60219536E12, 1469.5], [1.60219542E12, 1907.0], [1.60219572E12, 1845.0], [1.60219578E12, 1742.0], [1.60219608E12, 2363.0], [1.60219518E12, 2242.5], [1.60219548E12, 2034.0], [1.60219554E12, 1744.0], [1.60219584E12, 2003.0], [1.6021959E12, 1655.0], [1.60219524E12, 1995.0], [1.6021953E12, 1869.0], [1.6021956E12, 2139.5], [1.60219566E12, 2030.0], [1.60219596E12, 1813.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60219608E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 786.0, "minX": 1.0, "maxY": 3188.0, "series": [{"data": [[8.0, 1706.0], [2.0, 2649.0], [9.0, 1509.5], [10.0, 1152.0], [11.0, 970.0], [3.0, 2556.5], [12.0, 1148.0], [13.0, 922.0], [14.0, 857.5], [15.0, 830.0], [1.0, 3188.0], [4.0, 2410.5], [16.0, 786.0], [5.0, 2171.0], [6.0, 2033.0], [7.0, 1857.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[6.0, 1205.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 16.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 786.0, "minX": 1.0, "maxY": 3182.0, "series": [{"data": [[8.0, 1706.0], [2.0, 2645.0], [9.0, 1508.0], [10.0, 1152.0], [11.0, 970.0], [3.0, 2554.5], [12.0, 1146.5], [13.0, 922.0], [14.0, 857.5], [15.0, 830.0], [1.0, 3182.0], [4.0, 2409.0], [16.0, 786.0], [5.0, 2167.0], [6.0, 2030.0], [7.0, 1856.5]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[6.0, 1205.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 16.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1.3, "minX": 1.60219518E12, "maxY": 6.983333333333333, "series": [{"data": [[1.60219602E12, 5.7], [1.60219536E12, 6.966666666666667], [1.60219542E12, 6.25], [1.60219572E12, 5.833333333333333], [1.60219578E12, 6.266666666666667], [1.60219608E12, 1.6], [1.60219518E12, 1.3], [1.60219548E12, 5.8], [1.60219554E12, 6.566666666666666], [1.60219584E12, 5.416666666666667], [1.6021959E12, 6.983333333333333], [1.60219524E12, 5.35], [1.6021953E12, 5.5], [1.6021956E12, 5.2], [1.60219566E12, 5.316666666666666], [1.60219596E12, 6.466666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60219608E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60219518E12, "maxY": 6.983333333333333, "series": [{"data": [[1.60219602E12, 5.7], [1.60219536E12, 6.966666666666667], [1.60219542E12, 6.25], [1.60219572E12, 5.85], [1.60219578E12, 6.25], [1.60219608E12, 1.8], [1.60219518E12, 1.1], [1.60219548E12, 5.783333333333333], [1.60219554E12, 6.566666666666666], [1.60219584E12, 5.416666666666667], [1.6021959E12, 6.983333333333333], [1.60219524E12, 5.35], [1.6021953E12, 5.5], [1.6021956E12, 5.2], [1.60219566E12, 5.316666666666666], [1.60219596E12, 6.466666666666667]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.60219548E12, 0.016666666666666666]], "isOverall": false, "label": "400", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60219608E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60219518E12, "maxY": 6.983333333333333, "series": [{"data": [[1.60219602E12, 5.7], [1.60219536E12, 6.966666666666667], [1.60219542E12, 6.25], [1.60219572E12, 5.85], [1.60219578E12, 6.25], [1.60219608E12, 1.8], [1.60219518E12, 1.1], [1.60219548E12, 5.783333333333333], [1.60219554E12, 6.566666666666666], [1.60219584E12, 5.416666666666667], [1.6021959E12, 6.983333333333333], [1.60219524E12, 5.35], [1.6021953E12, 5.5], [1.6021956E12, 5.2], [1.60219566E12, 5.316666666666666], [1.60219596E12, 6.466666666666667]], "isOverall": false, "label": "HTTP Request-success", "isController": false}, {"data": [[1.60219548E12, 0.016666666666666666]], "isOverall": false, "label": "HTTP Request-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60219608E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60219518E12, "maxY": 6.983333333333333, "series": [{"data": [[1.60219602E12, 5.7], [1.60219536E12, 6.966666666666667], [1.60219542E12, 6.25], [1.60219572E12, 5.85], [1.60219578E12, 6.25], [1.60219608E12, 1.8], [1.60219518E12, 1.1], [1.60219548E12, 5.783333333333333], [1.60219554E12, 6.566666666666666], [1.60219584E12, 5.416666666666667], [1.6021959E12, 6.983333333333333], [1.60219524E12, 5.35], [1.6021953E12, 5.5], [1.6021956E12, 5.2], [1.60219566E12, 5.316666666666666], [1.60219596E12, 6.466666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.60219548E12, 0.016666666666666666]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60219608E12, "title": "Total Transactions Per Second"}},
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

