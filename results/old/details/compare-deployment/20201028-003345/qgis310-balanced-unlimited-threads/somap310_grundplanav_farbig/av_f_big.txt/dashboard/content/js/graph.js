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
        data: {"result": {"minY": 633.0, "minX": 0.0, "maxY": 4646.0, "series": [{"data": [[0.0, 633.0], [0.1, 633.0], [0.2, 750.0], [0.3, 771.0], [0.4, 771.0], [0.5, 775.0], [0.6, 781.0], [0.7, 800.0], [0.8, 800.0], [0.9, 837.0], [1.0, 852.0], [1.1, 868.0], [1.2, 868.0], [1.3, 873.0], [1.4, 877.0], [1.5, 881.0], [1.6, 881.0], [1.7, 889.0], [1.8, 937.0], [1.9, 937.0], [2.0, 940.0], [2.1, 963.0], [2.2, 963.0], [2.3, 963.0], [2.4, 966.0], [2.5, 967.0], [2.6, 971.0], [2.7, 971.0], [2.8, 983.0], [2.9, 983.0], [3.0, 983.0], [3.1, 983.0], [3.2, 983.0], [3.3, 986.0], [3.4, 986.0], [3.5, 989.0], [3.6, 995.0], [3.7, 1003.0], [3.8, 1003.0], [3.9, 1020.0], [4.0, 1027.0], [4.1, 1030.0], [4.2, 1030.0], [4.3, 1035.0], [4.4, 1035.0], [4.5, 1043.0], [4.6, 1043.0], [4.7, 1043.0], [4.8, 1045.0], [4.9, 1047.0], [5.0, 1047.0], [5.1, 1051.0], [5.2, 1052.0], [5.3, 1052.0], [5.4, 1054.0], [5.5, 1054.0], [5.6, 1055.0], [5.7, 1055.0], [5.8, 1058.0], [5.9, 1059.0], [6.0, 1060.0], [6.1, 1060.0], [6.2, 1062.0], [6.3, 1063.0], [6.4, 1064.0], [6.5, 1064.0], [6.6, 1069.0], [6.7, 1072.0], [6.8, 1072.0], [6.9, 1076.0], [7.0, 1078.0], [7.1, 1082.0], [7.2, 1082.0], [7.3, 1083.0], [7.4, 1083.0], [7.5, 1084.0], [7.6, 1084.0], [7.7, 1088.0], [7.8, 1089.0], [7.9, 1090.0], [8.0, 1090.0], [8.1, 1092.0], [8.2, 1094.0], [8.3, 1095.0], [8.4, 1095.0], [8.5, 1095.0], [8.6, 1097.0], [8.7, 1097.0], [8.8, 1099.0], [8.9, 1101.0], [9.0, 1102.0], [9.1, 1102.0], [9.2, 1104.0], [9.3, 1105.0], [9.4, 1105.0], [9.5, 1105.0], [9.6, 1106.0], [9.7, 1109.0], [9.8, 1110.0], [9.9, 1110.0], [10.0, 1111.0], [10.1, 1112.0], [10.2, 1112.0], [10.3, 1115.0], [10.4, 1118.0], [10.5, 1119.0], [10.6, 1119.0], [10.7, 1119.0], [10.8, 1120.0], [10.9, 1122.0], [11.0, 1122.0], [11.1, 1131.0], [11.2, 1135.0], [11.3, 1137.0], [11.4, 1137.0], [11.5, 1137.0], [11.6, 1138.0], [11.7, 1138.0], [11.8, 1139.0], [11.9, 1141.0], [12.0, 1142.0], [12.1, 1142.0], [12.2, 1144.0], [12.3, 1146.0], [12.4, 1150.0], [12.5, 1150.0], [12.6, 1151.0], [12.7, 1153.0], [12.8, 1155.0], [12.9, 1155.0], [13.0, 1156.0], [13.1, 1157.0], [13.2, 1157.0], [13.3, 1157.0], [13.4, 1161.0], [13.5, 1164.0], [13.6, 1164.0], [13.7, 1165.0], [13.8, 1165.0], [13.9, 1169.0], [14.0, 1169.0], [14.1, 1171.0], [14.2, 1174.0], [14.3, 1176.0], [14.4, 1176.0], [14.5, 1180.0], [14.6, 1181.0], [14.7, 1182.0], [14.8, 1182.0], [14.9, 1191.0], [15.0, 1192.0], [15.1, 1192.0], [15.2, 1197.0], [15.3, 1197.0], [15.4, 1199.0], [15.5, 1199.0], [15.6, 1202.0], [15.7, 1205.0], [15.8, 1210.0], [15.9, 1210.0], [16.0, 1210.0], [16.1, 1211.0], [16.2, 1212.0], [16.3, 1212.0], [16.4, 1212.0], [16.5, 1215.0], [16.6, 1227.0], [16.7, 1227.0], [16.8, 1229.0], [16.9, 1230.0], [17.0, 1230.0], [17.1, 1233.0], [17.2, 1234.0], [17.3, 1237.0], [17.4, 1237.0], [17.5, 1237.0], [17.6, 1239.0], [17.7, 1240.0], [17.8, 1240.0], [17.9, 1243.0], [18.0, 1246.0], [18.1, 1246.0], [18.2, 1246.0], [18.3, 1251.0], [18.4, 1253.0], [18.5, 1253.0], [18.6, 1260.0], [18.7, 1261.0], [18.8, 1264.0], [18.9, 1264.0], [19.0, 1267.0], [19.1, 1273.0], [19.2, 1274.0], [19.3, 1274.0], [19.4, 1282.0], [19.5, 1294.0], [19.6, 1303.0], [19.7, 1303.0], [19.8, 1303.0], [19.9, 1303.0], [20.0, 1307.0], [20.1, 1307.0], [20.2, 1307.0], [20.3, 1309.0], [20.4, 1309.0], [20.5, 1310.0], [20.6, 1315.0], [20.7, 1316.0], [20.8, 1316.0], [20.9, 1318.0], [21.0, 1323.0], [21.1, 1324.0], [21.2, 1324.0], [21.3, 1325.0], [21.4, 1325.0], [21.5, 1331.0], [21.6, 1331.0], [21.7, 1333.0], [21.8, 1338.0], [21.9, 1338.0], [22.0, 1343.0], [22.1, 1347.0], [22.2, 1350.0], [22.3, 1350.0], [22.4, 1355.0], [22.5, 1355.0], [22.6, 1355.0], [22.7, 1355.0], [22.8, 1356.0], [22.9, 1360.0], [23.0, 1362.0], [23.1, 1362.0], [23.2, 1367.0], [23.3, 1368.0], [23.4, 1368.0], [23.5, 1370.0], [23.6, 1376.0], [23.7, 1377.0], [23.8, 1377.0], [23.9, 1384.0], [24.0, 1385.0], [24.1, 1387.0], [24.2, 1387.0], [24.3, 1387.0], [24.4, 1387.0], [24.5, 1389.0], [24.6, 1389.0], [24.7, 1389.0], [24.8, 1391.0], [24.9, 1394.0], [25.0, 1394.0], [25.1, 1396.0], [25.2, 1397.0], [25.3, 1397.0], [25.4, 1397.0], [25.5, 1399.0], [25.6, 1400.0], [25.7, 1400.0], [25.8, 1400.0], [25.9, 1406.0], [26.0, 1409.0], [26.1, 1409.0], [26.2, 1409.0], [26.3, 1412.0], [26.4, 1415.0], [26.5, 1415.0], [26.6, 1428.0], [26.7, 1429.0], [26.8, 1429.0], [26.9, 1431.0], [27.0, 1433.0], [27.1, 1434.0], [27.2, 1434.0], [27.3, 1435.0], [27.4, 1436.0], [27.5, 1437.0], [27.6, 1437.0], [27.7, 1439.0], [27.8, 1440.0], [27.9, 1440.0], [28.0, 1440.0], [28.1, 1444.0], [28.2, 1448.0], [28.3, 1449.0], [28.4, 1449.0], [28.5, 1449.0], [28.6, 1449.0], [28.7, 1449.0], [28.8, 1454.0], [28.9, 1456.0], [29.0, 1458.0], [29.1, 1458.0], [29.2, 1460.0], [29.3, 1460.0], [29.4, 1460.0], [29.5, 1460.0], [29.6, 1461.0], [29.7, 1462.0], [29.8, 1462.0], [29.9, 1462.0], [30.0, 1462.0], [30.1, 1464.0], [30.2, 1464.0], [30.3, 1466.0], [30.4, 1467.0], [30.5, 1469.0], [30.6, 1469.0], [30.7, 1470.0], [30.8, 1471.0], [30.9, 1472.0], [31.0, 1472.0], [31.1, 1475.0], [31.2, 1481.0], [31.3, 1482.0], [31.4, 1482.0], [31.5, 1485.0], [31.6, 1487.0], [31.7, 1487.0], [31.8, 1488.0], [31.9, 1497.0], [32.0, 1498.0], [32.1, 1498.0], [32.2, 1499.0], [32.3, 1499.0], [32.4, 1501.0], [32.5, 1501.0], [32.6, 1503.0], [32.7, 1503.0], [32.8, 1504.0], [32.9, 1504.0], [33.0, 1504.0], [33.1, 1507.0], [33.2, 1508.0], [33.3, 1508.0], [33.4, 1508.0], [33.5, 1511.0], [33.6, 1511.0], [33.7, 1514.0], [33.8, 1519.0], [33.9, 1519.0], [34.0, 1519.0], [34.1, 1520.0], [34.2, 1525.0], [34.3, 1526.0], [34.4, 1526.0], [34.5, 1528.0], [34.6, 1529.0], [34.7, 1536.0], [34.8, 1536.0], [34.9, 1537.0], [35.0, 1542.0], [35.1, 1542.0], [35.2, 1544.0], [35.3, 1549.0], [35.4, 1549.0], [35.5, 1549.0], [35.6, 1551.0], [35.7, 1556.0], [35.8, 1559.0], [35.9, 1559.0], [36.0, 1564.0], [36.1, 1567.0], [36.2, 1570.0], [36.3, 1570.0], [36.4, 1571.0], [36.5, 1573.0], [36.6, 1576.0], [36.7, 1576.0], [36.8, 1577.0], [36.9, 1579.0], [37.0, 1579.0], [37.1, 1581.0], [37.2, 1581.0], [37.3, 1582.0], [37.4, 1582.0], [37.5, 1583.0], [37.6, 1585.0], [37.7, 1587.0], [37.8, 1587.0], [37.9, 1590.0], [38.0, 1593.0], [38.1, 1593.0], [38.2, 1593.0], [38.3, 1593.0], [38.4, 1595.0], [38.5, 1595.0], [38.6, 1597.0], [38.7, 1597.0], [38.8, 1599.0], [38.9, 1599.0], [39.0, 1599.0], [39.1, 1602.0], [39.2, 1604.0], [39.3, 1604.0], [39.4, 1605.0], [39.5, 1605.0], [39.6, 1606.0], [39.7, 1606.0], [39.8, 1607.0], [39.9, 1610.0], [40.0, 1610.0], [40.1, 1610.0], [40.2, 1611.0], [40.3, 1614.0], [40.4, 1614.0], [40.5, 1615.0], [40.6, 1616.0], [40.7, 1617.0], [40.8, 1617.0], [40.9, 1619.0], [41.0, 1624.0], [41.1, 1628.0], [41.2, 1628.0], [41.3, 1630.0], [41.4, 1632.0], [41.5, 1636.0], [41.6, 1636.0], [41.7, 1638.0], [41.8, 1638.0], [41.9, 1638.0], [42.0, 1639.0], [42.1, 1639.0], [42.2, 1643.0], [42.3, 1643.0], [42.4, 1645.0], [42.5, 1646.0], [42.6, 1646.0], [42.7, 1646.0], [42.8, 1648.0], [42.9, 1648.0], [43.0, 1650.0], [43.1, 1650.0], [43.2, 1651.0], [43.3, 1652.0], [43.4, 1652.0], [43.5, 1655.0], [43.6, 1655.0], [43.7, 1656.0], [43.8, 1656.0], [43.9, 1657.0], [44.0, 1659.0], [44.1, 1659.0], [44.2, 1659.0], [44.3, 1660.0], [44.4, 1664.0], [44.5, 1666.0], [44.6, 1666.0], [44.7, 1672.0], [44.8, 1672.0], [44.9, 1674.0], [45.0, 1674.0], [45.1, 1676.0], [45.2, 1679.0], [45.3, 1679.0], [45.4, 1681.0], [45.5, 1682.0], [45.6, 1684.0], [45.7, 1684.0], [45.8, 1686.0], [45.9, 1688.0], [46.0, 1693.0], [46.1, 1693.0], [46.2, 1696.0], [46.3, 1698.0], [46.4, 1702.0], [46.5, 1702.0], [46.6, 1706.0], [46.7, 1707.0], [46.8, 1707.0], [46.9, 1712.0], [47.0, 1717.0], [47.1, 1718.0], [47.2, 1718.0], [47.3, 1718.0], [47.4, 1719.0], [47.5, 1725.0], [47.6, 1725.0], [47.7, 1727.0], [47.8, 1727.0], [47.9, 1729.0], [48.0, 1729.0], [48.1, 1732.0], [48.2, 1737.0], [48.3, 1742.0], [48.4, 1742.0], [48.5, 1744.0], [48.6, 1744.0], [48.7, 1744.0], [48.8, 1746.0], [48.9, 1747.0], [49.0, 1751.0], [49.1, 1751.0], [49.2, 1752.0], [49.3, 1754.0], [49.4, 1755.0], [49.5, 1755.0], [49.6, 1760.0], [49.7, 1760.0], [49.8, 1764.0], [49.9, 1764.0], [50.0, 1764.0], [50.1, 1766.0], [50.2, 1766.0], [50.3, 1768.0], [50.4, 1773.0], [50.5, 1774.0], [50.6, 1774.0], [50.7, 1774.0], [50.8, 1776.0], [50.9, 1776.0], [51.0, 1776.0], [51.1, 1777.0], [51.2, 1778.0], [51.3, 1781.0], [51.4, 1781.0], [51.5, 1784.0], [51.6, 1784.0], [51.7, 1784.0], [51.8, 1785.0], [51.9, 1785.0], [52.0, 1789.0], [52.1, 1789.0], [52.2, 1792.0], [52.3, 1794.0], [52.4, 1795.0], [52.5, 1795.0], [52.6, 1795.0], [52.7, 1795.0], [52.8, 1797.0], [52.9, 1797.0], [53.0, 1801.0], [53.1, 1802.0], [53.2, 1804.0], [53.3, 1804.0], [53.4, 1805.0], [53.5, 1805.0], [53.6, 1805.0], [53.7, 1805.0], [53.8, 1807.0], [53.9, 1807.0], [54.0, 1807.0], [54.1, 1808.0], [54.2, 1810.0], [54.3, 1811.0], [54.4, 1811.0], [54.5, 1812.0], [54.6, 1815.0], [54.7, 1817.0], [54.8, 1817.0], [54.9, 1819.0], [55.0, 1820.0], [55.1, 1820.0], [55.2, 1821.0], [55.3, 1822.0], [55.4, 1823.0], [55.5, 1823.0], [55.6, 1823.0], [55.7, 1831.0], [55.8, 1831.0], [55.9, 1831.0], [56.0, 1831.0], [56.1, 1833.0], [56.2, 1834.0], [56.3, 1834.0], [56.4, 1836.0], [56.5, 1836.0], [56.6, 1839.0], [56.7, 1839.0], [56.8, 1841.0], [56.9, 1843.0], [57.0, 1843.0], [57.1, 1848.0], [57.2, 1850.0], [57.3, 1852.0], [57.4, 1852.0], [57.5, 1853.0], [57.6, 1856.0], [57.7, 1857.0], [57.8, 1857.0], [57.9, 1857.0], [58.0, 1858.0], [58.1, 1861.0], [58.2, 1861.0], [58.3, 1862.0], [58.4, 1862.0], [58.5, 1862.0], [58.6, 1863.0], [58.7, 1864.0], [58.8, 1867.0], [58.9, 1867.0], [59.0, 1870.0], [59.1, 1870.0], [59.2, 1870.0], [59.3, 1870.0], [59.4, 1874.0], [59.5, 1875.0], [59.6, 1877.0], [59.7, 1877.0], [59.8, 1877.0], [59.9, 1878.0], [60.0, 1882.0], [60.1, 1882.0], [60.2, 1888.0], [60.3, 1892.0], [60.4, 1892.0], [60.5, 1892.0], [60.6, 1892.0], [60.7, 1894.0], [60.8, 1894.0], [60.9, 1894.0], [61.0, 1895.0], [61.1, 1900.0], [61.2, 1900.0], [61.3, 1902.0], [61.4, 1902.0], [61.5, 1903.0], [61.6, 1903.0], [61.7, 1903.0], [61.8, 1904.0], [61.9, 1904.0], [62.0, 1904.0], [62.1, 1905.0], [62.2, 1905.0], [62.3, 1905.0], [62.4, 1905.0], [62.5, 1907.0], [62.6, 1908.0], [62.7, 1908.0], [62.8, 1909.0], [62.9, 1909.0], [63.0, 1910.0], [63.1, 1910.0], [63.2, 1911.0], [63.3, 1911.0], [63.4, 1911.0], [63.5, 1915.0], [63.6, 1917.0], [63.7, 1921.0], [63.8, 1921.0], [63.9, 1927.0], [64.0, 1927.0], [64.1, 1928.0], [64.2, 1928.0], [64.3, 1931.0], [64.4, 1932.0], [64.5, 1932.0], [64.6, 1932.0], [64.7, 1932.0], [64.8, 1932.0], [64.9, 1933.0], [65.0, 1933.0], [65.1, 1935.0], [65.2, 1937.0], [65.3, 1937.0], [65.4, 1938.0], [65.5, 1938.0], [65.6, 1939.0], [65.7, 1939.0], [65.8, 1943.0], [65.9, 1945.0], [66.0, 1945.0], [66.1, 1945.0], [66.2, 1947.0], [66.3, 1948.0], [66.4, 1950.0], [66.5, 1950.0], [66.6, 1950.0], [66.7, 1950.0], [66.8, 1950.0], [66.9, 1950.0], [67.0, 1951.0], [67.1, 1951.0], [67.2, 1951.0], [67.3, 1955.0], [67.4, 1956.0], [67.5, 1956.0], [67.6, 1956.0], [67.7, 1956.0], [67.8, 1956.0], [67.9, 1957.0], [68.0, 1957.0], [68.1, 1959.0], [68.2, 1961.0], [68.3, 1961.0], [68.4, 1961.0], [68.5, 1963.0], [68.6, 1964.0], [68.7, 1964.0], [68.8, 1968.0], [68.9, 1970.0], [69.0, 1971.0], [69.1, 1971.0], [69.2, 1973.0], [69.3, 1978.0], [69.4, 1980.0], [69.5, 1980.0], [69.6, 1980.0], [69.7, 1981.0], [69.8, 1983.0], [69.9, 1983.0], [70.0, 1984.0], [70.1, 1986.0], [70.2, 1986.0], [70.3, 1986.0], [70.4, 1986.0], [70.5, 1991.0], [70.6, 1991.0], [70.7, 1995.0], [70.8, 1995.0], [70.9, 1996.0], [71.0, 1996.0], [71.1, 1996.0], [71.2, 1997.0], [71.3, 1999.0], [71.4, 1999.0], [71.5, 2000.0], [71.6, 2002.0], [71.7, 2002.0], [71.8, 2004.0], [71.9, 2004.0], [72.0, 2007.0], [72.1, 2007.0], [72.2, 2007.0], [72.3, 2009.0], [72.4, 2011.0], [72.5, 2011.0], [72.6, 2011.0], [72.7, 2014.0], [72.8, 2014.0], [72.9, 2014.0], [73.0, 2014.0], [73.1, 2015.0], [73.2, 2015.0], [73.3, 2015.0], [73.4, 2017.0], [73.5, 2017.0], [73.6, 2017.0], [73.7, 2018.0], [73.8, 2020.0], [73.9, 2021.0], [74.0, 2021.0], [74.1, 2027.0], [74.2, 2028.0], [74.3, 2031.0], [74.4, 2031.0], [74.5, 2031.0], [74.6, 2036.0], [74.7, 2038.0], [74.8, 2038.0], [74.9, 2046.0], [75.0, 2049.0], [75.1, 2049.0], [75.2, 2049.0], [75.3, 2057.0], [75.4, 2059.0], [75.5, 2059.0], [75.6, 2060.0], [75.7, 2060.0], [75.8, 2063.0], [75.9, 2063.0], [76.0, 2063.0], [76.1, 2064.0], [76.2, 2065.0], [76.3, 2065.0], [76.4, 2066.0], [76.5, 2071.0], [76.6, 2073.0], [76.7, 2073.0], [76.8, 2073.0], [76.9, 2075.0], [77.0, 2075.0], [77.1, 2076.0], [77.2, 2077.0], [77.3, 2078.0], [77.4, 2078.0], [77.5, 2080.0], [77.6, 2081.0], [77.7, 2096.0], [77.8, 2096.0], [77.9, 2096.0], [78.0, 2101.0], [78.1, 2101.0], [78.2, 2101.0], [78.3, 2103.0], [78.4, 2104.0], [78.5, 2104.0], [78.6, 2110.0], [78.7, 2111.0], [78.8, 2120.0], [78.9, 2120.0], [79.0, 2120.0], [79.1, 2121.0], [79.2, 2122.0], [79.3, 2122.0], [79.4, 2128.0], [79.5, 2129.0], [79.6, 2129.0], [79.7, 2129.0], [79.8, 2129.0], [79.9, 2129.0], [80.0, 2130.0], [80.1, 2130.0], [80.2, 2134.0], [80.3, 2135.0], [80.4, 2135.0], [80.5, 2138.0], [80.6, 2139.0], [80.7, 2140.0], [80.8, 2140.0], [80.9, 2151.0], [81.0, 2157.0], [81.1, 2158.0], [81.2, 2158.0], [81.3, 2159.0], [81.4, 2161.0], [81.5, 2162.0], [81.6, 2162.0], [81.7, 2168.0], [81.8, 2170.0], [81.9, 2170.0], [82.0, 2171.0], [82.1, 2176.0], [82.2, 2182.0], [82.3, 2182.0], [82.4, 2185.0], [82.5, 2189.0], [82.6, 2190.0], [82.7, 2190.0], [82.8, 2192.0], [82.9, 2194.0], [83.0, 2198.0], [83.1, 2198.0], [83.2, 2200.0], [83.3, 2200.0], [83.4, 2200.0], [83.5, 2201.0], [83.6, 2209.0], [83.7, 2220.0], [83.8, 2220.0], [83.9, 2224.0], [84.0, 2225.0], [84.1, 2228.0], [84.2, 2228.0], [84.3, 2228.0], [84.4, 2228.0], [84.5, 2232.0], [84.6, 2232.0], [84.7, 2238.0], [84.8, 2238.0], [84.9, 2243.0], [85.0, 2243.0], [85.1, 2247.0], [85.2, 2248.0], [85.3, 2248.0], [85.4, 2250.0], [85.5, 2252.0], [85.6, 2254.0], [85.7, 2254.0], [85.8, 2256.0], [85.9, 2260.0], [86.0, 2265.0], [86.1, 2265.0], [86.2, 2267.0], [86.3, 2268.0], [86.4, 2273.0], [86.5, 2273.0], [86.6, 2284.0], [86.7, 2286.0], [86.8, 2286.0], [86.9, 2290.0], [87.0, 2292.0], [87.1, 2299.0], [87.2, 2299.0], [87.3, 2305.0], [87.4, 2309.0], [87.5, 2311.0], [87.6, 2311.0], [87.7, 2318.0], [87.8, 2319.0], [87.9, 2324.0], [88.0, 2324.0], [88.1, 2327.0], [88.2, 2338.0], [88.3, 2343.0], [88.4, 2343.0], [88.5, 2353.0], [88.6, 2357.0], [88.7, 2357.0], [88.8, 2361.0], [88.9, 2384.0], [89.0, 2386.0], [89.1, 2386.0], [89.2, 2388.0], [89.3, 2392.0], [89.4, 2397.0], [89.5, 2397.0], [89.6, 2402.0], [89.7, 2406.0], [89.8, 2417.0], [89.9, 2417.0], [90.0, 2418.0], [90.1, 2420.0], [90.2, 2420.0], [90.3, 2434.0], [90.4, 2439.0], [90.5, 2443.0], [90.6, 2443.0], [90.7, 2449.0], [90.8, 2453.0], [90.9, 2455.0], [91.0, 2455.0], [91.1, 2460.0], [91.2, 2463.0], [91.3, 2465.0], [91.4, 2465.0], [91.5, 2475.0], [91.6, 2493.0], [91.7, 2493.0], [91.8, 2494.0], [91.9, 2513.0], [92.0, 2524.0], [92.1, 2524.0], [92.2, 2574.0], [92.3, 2575.0], [92.4, 2585.0], [92.5, 2585.0], [92.6, 2590.0], [92.7, 2591.0], [92.8, 2597.0], [92.9, 2597.0], [93.0, 2622.0], [93.1, 2637.0], [93.2, 2643.0], [93.3, 2643.0], [93.4, 2651.0], [93.5, 2651.0], [93.6, 2651.0], [93.7, 2652.0], [93.8, 2654.0], [93.9, 2659.0], [94.0, 2659.0], [94.1, 2671.0], [94.2, 2697.0], [94.3, 2751.0], [94.4, 2751.0], [94.5, 2758.0], [94.6, 2773.0], [94.7, 2773.0], [94.8, 2773.0], [94.9, 2781.0], [95.0, 2801.0], [95.1, 2801.0], [95.2, 2812.0], [95.3, 2839.0], [95.4, 2864.0], [95.5, 2864.0], [95.6, 2870.0], [95.7, 2879.0], [95.8, 2879.0], [95.9, 2879.0], [96.0, 2896.0], [96.1, 2916.0], [96.2, 2922.0], [96.3, 2922.0], [96.4, 2946.0], [96.5, 2987.0], [96.6, 2990.0], [96.7, 2990.0], [96.8, 3016.0], [96.9, 3087.0], [97.0, 3087.0], [97.1, 3092.0], [97.2, 3117.0], [97.3, 3130.0], [97.4, 3130.0], [97.5, 3164.0], [97.6, 3278.0], [97.7, 3336.0], [97.8, 3336.0], [97.9, 3343.0], [98.0, 3376.0], [98.1, 3412.0], [98.2, 3412.0], [98.3, 3519.0], [98.4, 3528.0], [98.5, 3528.0], [98.6, 3757.0], [98.7, 3960.0], [98.8, 3971.0], [98.9, 3971.0], [99.0, 4038.0], [99.1, 4192.0], [99.2, 4194.0], [99.3, 4194.0], [99.4, 4225.0], [99.5, 4353.0], [99.6, 4367.0], [99.7, 4367.0], [99.8, 4476.0], [99.9, 4646.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 600.0, "maxY": 76.0, "series": [{"data": [[600.0, 1.0], [700.0, 4.0], [800.0, 8.0], [900.0, 14.0], [1000.0, 38.0], [1100.0, 49.0], [1200.0, 30.0], [1300.0, 44.0], [1400.0, 50.0], [1500.0, 49.0], [1600.0, 54.0], [1700.0, 48.0], [1800.0, 60.0], [1900.0, 76.0], [2000.0, 48.0], [2100.0, 38.0], [2200.0, 30.0], [2300.0, 17.0], [2400.0, 17.0], [2500.0, 8.0], [2600.0, 10.0], [2700.0, 5.0], [2800.0, 8.0], [2900.0, 5.0], [3000.0, 3.0], [3100.0, 3.0], [3300.0, 3.0], [3200.0, 1.0], [3400.0, 1.0], [3500.0, 2.0], [3700.0, 1.0], [3900.0, 2.0], [4000.0, 1.0], [4300.0, 2.0], [4200.0, 1.0], [4100.0, 2.0], [4400.0, 1.0], [4600.0, 1.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 4600.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 238.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 497.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 238.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 497.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 11.514705882352942, "minX": 1.6038516E12, "maxY": 12.0, "series": [{"data": [[1.60385172E12, 11.514705882352942], [1.60385166E12, 12.0], [1.6038516E12, 12.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60385172E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 1099.0, "minX": 1.0, "maxY": 2946.0, "series": [{"data": [[8.0, 1460.0], [4.0, 1131.0], [2.0, 1469.0], [1.0, 1464.0], [9.0, 2017.0], [10.0, 1099.0], [5.0, 1462.0], [11.0, 2946.0], [12.0, 1790.5165745856345], [6.0, 1487.0], [3.0, 1462.0], [7.0, 1146.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[11.910204081632651, 1787.0435374149652]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 12.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 1012.8166666666667, "minX": 1.6038516E12, "maxY": 966365.1, "series": [{"data": [[1.60385172E12, 280391.51666666666], [1.60385166E12, 966365.1], [1.6038516E12, 589037.3333333334]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60385172E12, 1012.8166666666667], [1.60385166E12, 3079.85], [1.6038516E12, 1430.3666666666666]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60385172E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 1587.7720588235293, "minX": 1.6038516E12, "maxY": 2004.89947089947, "series": [{"data": [[1.60385172E12, 1587.7720588235293], [1.60385166E12, 1752.717073170731], [1.6038516E12, 2004.89947089947]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60385172E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 1586.838235294118, "minX": 1.6038516E12, "maxY": 2003.587301587302, "series": [{"data": [[1.60385172E12, 1586.838235294118], [1.60385166E12, 1751.5707317073177], [1.6038516E12, 2003.587301587302]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60385172E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.6038516E12, "maxY": 0.6084656084656088, "series": [{"data": [[1.60385172E12, 0.0], [1.60385166E12, 0.04146341463414636], [1.6038516E12, 0.6084656084656088]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60385172E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 633.0, "minX": 1.6038516E12, "maxY": 4646.0, "series": [{"data": [[1.60385172E12, 4194.0], [1.60385166E12, 4646.0], [1.6038516E12, 4367.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60385172E12, 947.2229989874363], [1.60385166E12, 779.1939994120598], [1.6038516E12, 785.4999977350235]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60385172E12, 951.0453004050255], [1.60385166E12, 784.8584021949769], [1.6038516E12, 794.0500009059906]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60385172E12, 949.3464994937182], [1.60385166E12, 780.4269997060298], [1.6038516E12, 790.2499988675117]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60385172E12, 940.0], [1.60385166E12, 633.0], [1.6038516E12, 750.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60385172E12, 1446.5], [1.60385166E12, 1791.5], [1.6038516E12, 1907.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60385172E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 1243.0, "minX": 3.0, "maxY": 2143.5, "series": [{"data": [[4.0, 1879.5], [8.0, 1668.5], [9.0, 1412.0], [5.0, 1971.0], [10.0, 1243.0], [11.0, 1251.0], [3.0, 2143.5], [6.0, 1918.0], [7.0, 1800.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 11.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 1243.0, "minX": 3.0, "maxY": 2141.0, "series": [{"data": [[4.0, 1878.5], [8.0, 1667.0], [9.0, 1412.0], [5.0, 1969.5], [10.0, 1243.0], [11.0, 1250.0], [3.0, 2141.0], [6.0, 1917.5], [7.0, 1799.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 11.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 2.066666666666667, "minX": 1.6038516E12, "maxY": 6.833333333333333, "series": [{"data": [[1.60385172E12, 2.066666666666667], [1.60385166E12, 6.833333333333333], [1.6038516E12, 3.35]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60385172E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 2.2666666666666666, "minX": 1.6038516E12, "maxY": 6.833333333333333, "series": [{"data": [[1.60385172E12, 2.2666666666666666], [1.60385166E12, 6.833333333333333], [1.6038516E12, 3.15]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60385172E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 2.2666666666666666, "minX": 1.6038516E12, "maxY": 6.833333333333333, "series": [{"data": [[1.60385172E12, 2.2666666666666666], [1.60385166E12, 6.833333333333333], [1.6038516E12, 3.15]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60385172E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 2.2666666666666666, "minX": 1.6038516E12, "maxY": 6.833333333333333, "series": [{"data": [[1.60385172E12, 2.2666666666666666], [1.60385166E12, 6.833333333333333], [1.6038516E12, 3.15]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60385172E12, "title": "Total Transactions Per Second"}},
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

