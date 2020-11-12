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
        data: {"result": {"minY": 286.0, "minX": 0.0, "maxY": 2431.0, "series": [{"data": [[0.0, 286.0], [0.1, 286.0], [0.2, 286.0], [0.3, 286.0], [0.4, 286.0], [0.5, 286.0], [0.6, 286.0], [0.7, 489.0], [0.8, 489.0], [0.9, 489.0], [1.0, 489.0], [1.1, 489.0], [1.2, 489.0], [1.3, 489.0], [1.4, 643.0], [1.5, 643.0], [1.6, 643.0], [1.7, 643.0], [1.8, 643.0], [1.9, 643.0], [2.0, 643.0], [2.1, 752.0], [2.2, 752.0], [2.3, 752.0], [2.4, 752.0], [2.5, 752.0], [2.6, 752.0], [2.7, 865.0], [2.8, 865.0], [2.9, 865.0], [3.0, 865.0], [3.1, 865.0], [3.2, 865.0], [3.3, 865.0], [3.4, 1024.0], [3.5, 1024.0], [3.6, 1024.0], [3.7, 1024.0], [3.8, 1024.0], [3.9, 1024.0], [4.0, 1024.0], [4.1, 1185.0], [4.2, 1185.0], [4.3, 1185.0], [4.4, 1185.0], [4.5, 1185.0], [4.6, 1185.0], [4.7, 1293.0], [4.8, 1293.0], [4.9, 1293.0], [5.0, 1293.0], [5.1, 1293.0], [5.2, 1293.0], [5.3, 1293.0], [5.4, 1444.0], [5.5, 1444.0], [5.6, 1444.0], [5.7, 1444.0], [5.8, 1444.0], [5.9, 1444.0], [6.0, 1444.0], [6.1, 1606.0], [6.2, 1606.0], [6.3, 1606.0], [6.4, 1606.0], [6.5, 1606.0], [6.6, 1606.0], [6.7, 1606.0], [6.8, 1784.0], [6.9, 1784.0], [7.0, 1784.0], [7.1, 1784.0], [7.2, 1784.0], [7.3, 1784.0], [7.4, 1906.0], [7.5, 1906.0], [7.6, 1906.0], [7.7, 1906.0], [7.8, 1906.0], [7.9, 1906.0], [8.0, 1906.0], [8.1, 1910.0], [8.2, 1910.0], [8.3, 1910.0], [8.4, 1910.0], [8.5, 1910.0], [8.6, 1910.0], [8.7, 1910.0], [8.8, 1910.0], [8.9, 1910.0], [9.0, 1910.0], [9.1, 1910.0], [9.2, 1910.0], [9.3, 1910.0], [9.4, 1950.0], [9.5, 1950.0], [9.6, 1950.0], [9.7, 1950.0], [9.8, 1950.0], [9.9, 1950.0], [10.0, 1950.0], [10.1, 1955.0], [10.2, 1955.0], [10.3, 1955.0], [10.4, 1955.0], [10.5, 1955.0], [10.6, 1955.0], [10.7, 1955.0], [10.8, 1961.0], [10.9, 1961.0], [11.0, 1961.0], [11.1, 1961.0], [11.2, 1961.0], [11.3, 1961.0], [11.4, 1961.0], [11.5, 1969.0], [11.6, 1969.0], [11.7, 1969.0], [11.8, 1969.0], [11.9, 1969.0], [12.0, 1969.0], [12.1, 1975.0], [12.2, 1975.0], [12.3, 1975.0], [12.4, 1975.0], [12.5, 1975.0], [12.6, 1975.0], [12.7, 1975.0], [12.8, 1989.0], [12.9, 1989.0], [13.0, 1989.0], [13.1, 1989.0], [13.2, 1989.0], [13.3, 1989.0], [13.4, 1989.0], [13.5, 1991.0], [13.6, 1991.0], [13.7, 1991.0], [13.8, 1991.0], [13.9, 1991.0], [14.0, 1991.0], [14.1, 1999.0], [14.2, 1999.0], [14.3, 1999.0], [14.4, 1999.0], [14.5, 1999.0], [14.6, 1999.0], [14.7, 1999.0], [14.8, 2000.0], [14.9, 2000.0], [15.0, 2000.0], [15.1, 2000.0], [15.2, 2000.0], [15.3, 2000.0], [15.4, 2000.0], [15.5, 2002.0], [15.6, 2002.0], [15.7, 2002.0], [15.8, 2002.0], [15.9, 2002.0], [16.0, 2002.0], [16.1, 2002.0], [16.2, 2016.0], [16.3, 2016.0], [16.4, 2016.0], [16.5, 2016.0], [16.6, 2016.0], [16.7, 2016.0], [16.8, 2023.0], [16.9, 2023.0], [17.0, 2023.0], [17.1, 2023.0], [17.2, 2023.0], [17.3, 2023.0], [17.4, 2023.0], [17.5, 2023.0], [17.6, 2023.0], [17.7, 2023.0], [17.8, 2023.0], [17.9, 2023.0], [18.0, 2023.0], [18.1, 2023.0], [18.2, 2026.0], [18.3, 2026.0], [18.4, 2026.0], [18.5, 2026.0], [18.6, 2026.0], [18.7, 2026.0], [18.8, 2031.0], [18.9, 2031.0], [19.0, 2031.0], [19.1, 2031.0], [19.2, 2031.0], [19.3, 2031.0], [19.4, 2031.0], [19.5, 2037.0], [19.6, 2037.0], [19.7, 2037.0], [19.8, 2037.0], [19.9, 2037.0], [20.0, 2037.0], [20.1, 2037.0], [20.2, 2037.0], [20.3, 2037.0], [20.4, 2037.0], [20.5, 2037.0], [20.6, 2037.0], [20.7, 2037.0], [20.8, 2037.0], [20.9, 2039.0], [21.0, 2039.0], [21.1, 2039.0], [21.2, 2039.0], [21.3, 2039.0], [21.4, 2039.0], [21.5, 2041.0], [21.6, 2041.0], [21.7, 2041.0], [21.8, 2041.0], [21.9, 2041.0], [22.0, 2041.0], [22.1, 2041.0], [22.2, 2047.0], [22.3, 2047.0], [22.4, 2047.0], [22.5, 2047.0], [22.6, 2047.0], [22.7, 2047.0], [22.8, 2047.0], [22.9, 2057.0], [23.0, 2057.0], [23.1, 2057.0], [23.2, 2057.0], [23.3, 2057.0], [23.4, 2057.0], [23.5, 2067.0], [23.6, 2067.0], [23.7, 2067.0], [23.8, 2067.0], [23.9, 2067.0], [24.0, 2067.0], [24.1, 2067.0], [24.2, 2068.0], [24.3, 2068.0], [24.4, 2068.0], [24.5, 2068.0], [24.6, 2068.0], [24.7, 2068.0], [24.8, 2068.0], [24.9, 2081.0], [25.0, 2081.0], [25.1, 2081.0], [25.2, 2081.0], [25.3, 2081.0], [25.4, 2081.0], [25.5, 2081.0], [25.6, 2086.0], [25.7, 2086.0], [25.8, 2086.0], [25.9, 2086.0], [26.0, 2086.0], [26.1, 2086.0], [26.2, 2091.0], [26.3, 2091.0], [26.4, 2091.0], [26.5, 2091.0], [26.6, 2091.0], [26.7, 2091.0], [26.8, 2091.0], [26.9, 2115.0], [27.0, 2115.0], [27.1, 2115.0], [27.2, 2115.0], [27.3, 2115.0], [27.4, 2115.0], [27.5, 2115.0], [27.6, 2122.0], [27.7, 2122.0], [27.8, 2122.0], [27.9, 2122.0], [28.0, 2122.0], [28.1, 2122.0], [28.2, 2127.0], [28.3, 2127.0], [28.4, 2127.0], [28.5, 2127.0], [28.6, 2127.0], [28.7, 2127.0], [28.8, 2127.0], [28.9, 2139.0], [29.0, 2139.0], [29.1, 2139.0], [29.2, 2139.0], [29.3, 2139.0], [29.4, 2139.0], [29.5, 2139.0], [29.6, 2149.0], [29.7, 2149.0], [29.8, 2149.0], [29.9, 2149.0], [30.0, 2149.0], [30.1, 2149.0], [30.2, 2149.0], [30.3, 2150.0], [30.4, 2150.0], [30.5, 2150.0], [30.6, 2150.0], [30.7, 2150.0], [30.8, 2150.0], [30.9, 2153.0], [31.0, 2153.0], [31.1, 2153.0], [31.2, 2153.0], [31.3, 2153.0], [31.4, 2153.0], [31.5, 2153.0], [31.6, 2156.0], [31.7, 2156.0], [31.8, 2156.0], [31.9, 2156.0], [32.0, 2156.0], [32.1, 2156.0], [32.2, 2156.0], [32.3, 2156.0], [32.4, 2156.0], [32.5, 2156.0], [32.6, 2156.0], [32.7, 2156.0], [32.8, 2156.0], [32.9, 2160.0], [33.0, 2160.0], [33.1, 2160.0], [33.2, 2160.0], [33.3, 2160.0], [33.4, 2160.0], [33.5, 2160.0], [33.6, 2161.0], [33.7, 2161.0], [33.8, 2161.0], [33.9, 2161.0], [34.0, 2161.0], [34.1, 2161.0], [34.2, 2161.0], [34.3, 2163.0], [34.4, 2163.0], [34.5, 2163.0], [34.6, 2163.0], [34.7, 2163.0], [34.8, 2163.0], [34.9, 2166.0], [35.0, 2166.0], [35.1, 2166.0], [35.2, 2166.0], [35.3, 2166.0], [35.4, 2166.0], [35.5, 2166.0], [35.6, 2169.0], [35.7, 2169.0], [35.8, 2169.0], [35.9, 2169.0], [36.0, 2169.0], [36.1, 2169.0], [36.2, 2169.0], [36.3, 2176.0], [36.4, 2176.0], [36.5, 2176.0], [36.6, 2176.0], [36.7, 2176.0], [36.8, 2176.0], [36.9, 2176.0], [37.0, 2176.0], [37.1, 2176.0], [37.2, 2176.0], [37.3, 2176.0], [37.4, 2176.0], [37.5, 2176.0], [37.6, 2178.0], [37.7, 2178.0], [37.8, 2178.0], [37.9, 2178.0], [38.0, 2178.0], [38.1, 2178.0], [38.2, 2178.0], [38.3, 2185.0], [38.4, 2185.0], [38.5, 2185.0], [38.6, 2185.0], [38.7, 2185.0], [38.8, 2185.0], [38.9, 2185.0], [39.0, 2189.0], [39.1, 2189.0], [39.2, 2189.0], [39.3, 2189.0], [39.4, 2189.0], [39.5, 2189.0], [39.6, 2189.0], [39.7, 2189.0], [39.8, 2189.0], [39.9, 2189.0], [40.0, 2189.0], [40.1, 2189.0], [40.2, 2189.0], [40.3, 2190.0], [40.4, 2190.0], [40.5, 2190.0], [40.6, 2190.0], [40.7, 2190.0], [40.8, 2190.0], [40.9, 2190.0], [41.0, 2196.0], [41.1, 2196.0], [41.2, 2196.0], [41.3, 2196.0], [41.4, 2196.0], [41.5, 2196.0], [41.6, 2196.0], [41.7, 2199.0], [41.8, 2199.0], [41.9, 2199.0], [42.0, 2199.0], [42.1, 2199.0], [42.2, 2199.0], [42.3, 2199.0], [42.4, 2199.0], [42.5, 2199.0], [42.6, 2199.0], [42.7, 2199.0], [42.8, 2199.0], [42.9, 2199.0], [43.0, 2200.0], [43.1, 2200.0], [43.2, 2200.0], [43.3, 2200.0], [43.4, 2200.0], [43.5, 2200.0], [43.6, 2200.0], [43.7, 2200.0], [43.8, 2200.0], [43.9, 2200.0], [44.0, 2200.0], [44.1, 2200.0], [44.2, 2200.0], [44.3, 2201.0], [44.4, 2201.0], [44.5, 2201.0], [44.6, 2201.0], [44.7, 2201.0], [44.8, 2201.0], [44.9, 2201.0], [45.0, 2204.0], [45.1, 2204.0], [45.2, 2204.0], [45.3, 2204.0], [45.4, 2204.0], [45.5, 2204.0], [45.6, 2204.0], [45.7, 2205.0], [45.8, 2205.0], [45.9, 2205.0], [46.0, 2205.0], [46.1, 2205.0], [46.2, 2205.0], [46.3, 2205.0], [46.4, 2205.0], [46.5, 2205.0], [46.6, 2205.0], [46.7, 2205.0], [46.8, 2205.0], [46.9, 2205.0], [47.0, 2209.0], [47.1, 2209.0], [47.2, 2209.0], [47.3, 2209.0], [47.4, 2209.0], [47.5, 2209.0], [47.6, 2209.0], [47.7, 2210.0], [47.8, 2210.0], [47.9, 2210.0], [48.0, 2210.0], [48.1, 2210.0], [48.2, 2210.0], [48.3, 2210.0], [48.4, 2210.0], [48.5, 2210.0], [48.6, 2210.0], [48.7, 2210.0], [48.8, 2210.0], [48.9, 2210.0], [49.0, 2211.0], [49.1, 2211.0], [49.2, 2211.0], [49.3, 2211.0], [49.4, 2211.0], [49.5, 2211.0], [49.6, 2211.0], [49.7, 2214.0], [49.8, 2214.0], [49.9, 2214.0], [50.0, 2214.0], [50.1, 2214.0], [50.2, 2214.0], [50.3, 2214.0], [50.4, 2214.0], [50.5, 2214.0], [50.6, 2214.0], [50.7, 2214.0], [50.8, 2214.0], [50.9, 2214.0], [51.0, 2214.0], [51.1, 2214.0], [51.2, 2214.0], [51.3, 2214.0], [51.4, 2214.0], [51.5, 2214.0], [51.6, 2214.0], [51.7, 2220.0], [51.8, 2220.0], [51.9, 2220.0], [52.0, 2220.0], [52.1, 2220.0], [52.2, 2220.0], [52.3, 2220.0], [52.4, 2220.0], [52.5, 2220.0], [52.6, 2220.0], [52.7, 2220.0], [52.8, 2220.0], [52.9, 2220.0], [53.0, 2220.0], [53.1, 2231.0], [53.2, 2231.0], [53.3, 2231.0], [53.4, 2231.0], [53.5, 2231.0], [53.6, 2231.0], [53.7, 2234.0], [53.8, 2234.0], [53.9, 2234.0], [54.0, 2234.0], [54.1, 2234.0], [54.2, 2234.0], [54.3, 2234.0], [54.4, 2239.0], [54.5, 2239.0], [54.6, 2239.0], [54.7, 2239.0], [54.8, 2239.0], [54.9, 2239.0], [55.0, 2239.0], [55.1, 2249.0], [55.2, 2249.0], [55.3, 2249.0], [55.4, 2249.0], [55.5, 2249.0], [55.6, 2249.0], [55.7, 2249.0], [55.8, 2253.0], [55.9, 2253.0], [56.0, 2253.0], [56.1, 2253.0], [56.2, 2253.0], [56.3, 2253.0], [56.4, 2253.0], [56.5, 2253.0], [56.6, 2253.0], [56.7, 2253.0], [56.8, 2253.0], [56.9, 2253.0], [57.0, 2253.0], [57.1, 2256.0], [57.2, 2256.0], [57.3, 2256.0], [57.4, 2256.0], [57.5, 2256.0], [57.6, 2256.0], [57.7, 2256.0], [57.8, 2257.0], [57.9, 2257.0], [58.0, 2257.0], [58.1, 2257.0], [58.2, 2257.0], [58.3, 2257.0], [58.4, 2260.0], [58.5, 2260.0], [58.6, 2260.0], [58.7, 2260.0], [58.8, 2260.0], [58.9, 2260.0], [59.0, 2260.0], [59.1, 2265.0], [59.2, 2265.0], [59.3, 2265.0], [59.4, 2265.0], [59.5, 2265.0], [59.6, 2265.0], [59.7, 2265.0], [59.8, 2269.0], [59.9, 2269.0], [60.0, 2269.0], [60.1, 2269.0], [60.2, 2269.0], [60.3, 2269.0], [60.4, 2269.0], [60.5, 2269.0], [60.6, 2269.0], [60.7, 2269.0], [60.8, 2269.0], [60.9, 2269.0], [61.0, 2269.0], [61.1, 2272.0], [61.2, 2272.0], [61.3, 2272.0], [61.4, 2272.0], [61.5, 2272.0], [61.6, 2272.0], [61.7, 2272.0], [61.8, 2274.0], [61.9, 2274.0], [62.0, 2274.0], [62.1, 2274.0], [62.2, 2274.0], [62.3, 2274.0], [62.4, 2274.0], [62.5, 2278.0], [62.6, 2278.0], [62.7, 2278.0], [62.8, 2278.0], [62.9, 2278.0], [63.0, 2278.0], [63.1, 2279.0], [63.2, 2279.0], [63.3, 2279.0], [63.4, 2279.0], [63.5, 2279.0], [63.6, 2279.0], [63.7, 2279.0], [63.8, 2280.0], [63.9, 2280.0], [64.0, 2280.0], [64.1, 2280.0], [64.2, 2280.0], [64.3, 2280.0], [64.4, 2280.0], [64.5, 2280.0], [64.6, 2280.0], [64.7, 2280.0], [64.8, 2280.0], [64.9, 2280.0], [65.0, 2280.0], [65.1, 2280.0], [65.2, 2281.0], [65.3, 2281.0], [65.4, 2281.0], [65.5, 2281.0], [65.6, 2281.0], [65.7, 2281.0], [65.8, 2286.0], [65.9, 2286.0], [66.0, 2286.0], [66.1, 2286.0], [66.2, 2286.0], [66.3, 2286.0], [66.4, 2286.0], [66.5, 2290.0], [66.6, 2290.0], [66.7, 2290.0], [66.8, 2290.0], [66.9, 2290.0], [67.0, 2290.0], [67.1, 2290.0], [67.2, 2291.0], [67.3, 2291.0], [67.4, 2291.0], [67.5, 2291.0], [67.6, 2291.0], [67.7, 2291.0], [67.8, 2294.0], [67.9, 2294.0], [68.0, 2294.0], [68.1, 2294.0], [68.2, 2294.0], [68.3, 2294.0], [68.4, 2294.0], [68.5, 2306.0], [68.6, 2306.0], [68.7, 2306.0], [68.8, 2306.0], [68.9, 2306.0], [69.0, 2306.0], [69.1, 2306.0], [69.2, 2308.0], [69.3, 2308.0], [69.4, 2308.0], [69.5, 2308.0], [69.6, 2308.0], [69.7, 2308.0], [69.8, 2308.0], [69.9, 2308.0], [70.0, 2308.0], [70.1, 2308.0], [70.2, 2308.0], [70.3, 2308.0], [70.4, 2308.0], [70.5, 2308.0], [70.6, 2308.0], [70.7, 2308.0], [70.8, 2308.0], [70.9, 2308.0], [71.0, 2308.0], [71.1, 2308.0], [71.2, 2309.0], [71.3, 2309.0], [71.4, 2309.0], [71.5, 2309.0], [71.6, 2309.0], [71.7, 2309.0], [71.8, 2309.0], [71.9, 2311.0], [72.0, 2311.0], [72.1, 2311.0], [72.2, 2311.0], [72.3, 2311.0], [72.4, 2311.0], [72.5, 2313.0], [72.6, 2313.0], [72.7, 2313.0], [72.8, 2313.0], [72.9, 2313.0], [73.0, 2313.0], [73.1, 2313.0], [73.2, 2313.0], [73.3, 2313.0], [73.4, 2313.0], [73.5, 2313.0], [73.6, 2313.0], [73.7, 2313.0], [73.8, 2313.0], [73.9, 2314.0], [74.0, 2314.0], [74.1, 2314.0], [74.2, 2314.0], [74.3, 2314.0], [74.4, 2314.0], [74.5, 2316.0], [74.6, 2316.0], [74.7, 2316.0], [74.8, 2316.0], [74.9, 2316.0], [75.0, 2316.0], [75.1, 2316.0], [75.2, 2316.0], [75.3, 2316.0], [75.4, 2316.0], [75.5, 2316.0], [75.6, 2316.0], [75.7, 2316.0], [75.8, 2316.0], [75.9, 2318.0], [76.0, 2318.0], [76.1, 2318.0], [76.2, 2318.0], [76.3, 2318.0], [76.4, 2318.0], [76.5, 2318.0], [76.6, 2321.0], [76.7, 2321.0], [76.8, 2321.0], [76.9, 2321.0], [77.0, 2321.0], [77.1, 2321.0], [77.2, 2321.0], [77.3, 2321.0], [77.4, 2321.0], [77.5, 2321.0], [77.6, 2321.0], [77.7, 2321.0], [77.8, 2321.0], [77.9, 2321.0], [78.0, 2321.0], [78.1, 2321.0], [78.2, 2321.0], [78.3, 2321.0], [78.4, 2321.0], [78.5, 2321.0], [78.6, 2322.0], [78.7, 2322.0], [78.8, 2322.0], [78.9, 2322.0], [79.0, 2322.0], [79.1, 2322.0], [79.2, 2322.0], [79.3, 2322.0], [79.4, 2322.0], [79.5, 2322.0], [79.6, 2322.0], [79.7, 2322.0], [79.8, 2322.0], [79.9, 2326.0], [80.0, 2326.0], [80.1, 2326.0], [80.2, 2326.0], [80.3, 2326.0], [80.4, 2326.0], [80.5, 2326.0], [80.6, 2327.0], [80.7, 2327.0], [80.8, 2327.0], [80.9, 2327.0], [81.0, 2327.0], [81.1, 2327.0], [81.2, 2327.0], [81.3, 2328.0], [81.4, 2328.0], [81.5, 2328.0], [81.6, 2328.0], [81.7, 2328.0], [81.8, 2328.0], [81.9, 2333.0], [82.0, 2333.0], [82.1, 2333.0], [82.2, 2333.0], [82.3, 2333.0], [82.4, 2333.0], [82.5, 2333.0], [82.6, 2336.0], [82.7, 2336.0], [82.8, 2336.0], [82.9, 2336.0], [83.0, 2336.0], [83.1, 2336.0], [83.2, 2336.0], [83.3, 2338.0], [83.4, 2338.0], [83.5, 2338.0], [83.6, 2338.0], [83.7, 2338.0], [83.8, 2338.0], [83.9, 2339.0], [84.0, 2339.0], [84.1, 2339.0], [84.2, 2339.0], [84.3, 2339.0], [84.4, 2339.0], [84.5, 2339.0], [84.6, 2339.0], [84.7, 2339.0], [84.8, 2339.0], [84.9, 2339.0], [85.0, 2339.0], [85.1, 2339.0], [85.2, 2339.0], [85.3, 2339.0], [85.4, 2339.0], [85.5, 2339.0], [85.6, 2339.0], [85.7, 2339.0], [85.8, 2339.0], [85.9, 2339.0], [86.0, 2343.0], [86.1, 2343.0], [86.2, 2343.0], [86.3, 2343.0], [86.4, 2343.0], [86.5, 2343.0], [86.6, 2345.0], [86.7, 2345.0], [86.8, 2345.0], [86.9, 2345.0], [87.0, 2345.0], [87.1, 2345.0], [87.2, 2345.0], [87.3, 2349.0], [87.4, 2349.0], [87.5, 2349.0], [87.6, 2349.0], [87.7, 2349.0], [87.8, 2349.0], [87.9, 2349.0], [88.0, 2356.0], [88.1, 2356.0], [88.2, 2356.0], [88.3, 2356.0], [88.4, 2356.0], [88.5, 2356.0], [88.6, 2360.0], [88.7, 2360.0], [88.8, 2360.0], [88.9, 2360.0], [89.0, 2360.0], [89.1, 2360.0], [89.2, 2360.0], [89.3, 2361.0], [89.4, 2361.0], [89.5, 2361.0], [89.6, 2361.0], [89.7, 2361.0], [89.8, 2361.0], [89.9, 2361.0], [90.0, 2367.0], [90.1, 2367.0], [90.2, 2367.0], [90.3, 2367.0], [90.4, 2367.0], [90.5, 2367.0], [90.6, 2367.0], [90.7, 2372.0], [90.8, 2372.0], [90.9, 2372.0], [91.0, 2372.0], [91.1, 2372.0], [91.2, 2372.0], [91.3, 2378.0], [91.4, 2378.0], [91.5, 2378.0], [91.6, 2378.0], [91.7, 2378.0], [91.8, 2378.0], [91.9, 2378.0], [92.0, 2379.0], [92.1, 2379.0], [92.2, 2379.0], [92.3, 2379.0], [92.4, 2379.0], [92.5, 2379.0], [92.6, 2379.0], [92.7, 2381.0], [92.8, 2381.0], [92.9, 2381.0], [93.0, 2381.0], [93.1, 2381.0], [93.2, 2381.0], [93.3, 2385.0], [93.4, 2385.0], [93.5, 2385.0], [93.6, 2385.0], [93.7, 2385.0], [93.8, 2385.0], [93.9, 2385.0], [94.0, 2386.0], [94.1, 2386.0], [94.2, 2386.0], [94.3, 2386.0], [94.4, 2386.0], [94.5, 2386.0], [94.6, 2386.0], [94.7, 2391.0], [94.8, 2391.0], [94.9, 2391.0], [95.0, 2391.0], [95.1, 2391.0], [95.2, 2391.0], [95.3, 2391.0], [95.4, 2392.0], [95.5, 2392.0], [95.6, 2392.0], [95.7, 2392.0], [95.8, 2392.0], [95.9, 2392.0], [96.0, 2397.0], [96.1, 2397.0], [96.2, 2397.0], [96.3, 2397.0], [96.4, 2397.0], [96.5, 2397.0], [96.6, 2397.0], [96.7, 2404.0], [96.8, 2404.0], [96.9, 2404.0], [97.0, 2404.0], [97.1, 2404.0], [97.2, 2404.0], [97.3, 2404.0], [97.4, 2411.0], [97.5, 2411.0], [97.6, 2411.0], [97.7, 2411.0], [97.8, 2411.0], [97.9, 2411.0], [98.0, 2415.0], [98.1, 2415.0], [98.2, 2415.0], [98.3, 2415.0], [98.4, 2415.0], [98.5, 2415.0], [98.6, 2415.0], [98.7, 2418.0], [98.8, 2418.0], [98.9, 2418.0], [99.0, 2418.0], [99.1, 2418.0], [99.2, 2418.0], [99.3, 2418.0], [99.4, 2431.0], [99.5, 2431.0], [99.6, 2431.0], [99.7, 2431.0], [99.8, 2431.0], [99.9, 2431.0], [100.0, 2431.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 200.0, "maxY": 42.0, "series": [{"data": [[2100.0, 24.0], [2200.0, 38.0], [2300.0, 42.0], [600.0, 1.0], [2400.0, 5.0], [700.0, 1.0], [200.0, 1.0], [800.0, 1.0], [1000.0, 1.0], [1100.0, 1.0], [1200.0, 1.0], [1400.0, 1.0], [400.0, 1.0], [1600.0, 1.0], [1700.0, 1.0], [1900.0, 11.0], [2000.0, 18.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 2400.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 2.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 140.0, "series": [{"data": [[0.0, 2.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 7.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 140.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.5, "minX": 1.60438896E12, "maxY": 9.65648854961832, "series": [{"data": [[1.60438902E12, 9.65648854961832], [1.60438896E12, 9.5]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60438902E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 1315.5, "minX": 1.0, "maxY": 2431.0, "series": [{"data": [[8.0, 2321.0], [4.0, 2418.0], [2.0, 2397.0], [1.0, 2381.0], [9.0, 1458.5], [5.0, 1315.5], [10.0, 2151.1021897810224], [6.0, 2316.0], [3.0, 2431.0], [7.0, 1379.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.637583892617448, 2129.3355704697997]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 153.48333333333332, "minX": 1.60438896E12, "maxY": 4185.0, "series": [{"data": [[1.60438902E12, 4185.0], [1.60438896E12, 436.0]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60438902E12, 1112.3833333333334], [1.60438896E12, 153.48333333333332]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60438902E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 1477.6666666666665, "minX": 1.60438896E12, "maxY": 2218.8778625954205, "series": [{"data": [[1.60438902E12, 2218.8778625954205], [1.60438896E12, 1477.6666666666665]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60438902E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 1477.111111111111, "minX": 1.60438896E12, "maxY": 2218.740458015267, "series": [{"data": [[1.60438902E12, 2218.740458015267], [1.60438896E12, 1477.111111111111]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60438902E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.60438896E12, "maxY": 4.777777777777778, "series": [{"data": [[1.60438902E12, 0.0], [1.60438896E12, 4.777777777777778]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60438902E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 286.0, "minX": 1.60438896E12, "maxY": 2431.0, "series": [{"data": [[1.60438902E12, 2431.0], [1.60438896E12, 2269.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60438902E12, 1906.751999874115], [1.60438896E12, 286.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60438902E12, 1907.227200050354], [1.60438896E12, 286.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60438902E12, 1907.0159999370576], [1.60438896E12, 286.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60438902E12, 1906.0], [1.60438896E12, 286.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60438902E12, 2249.0], [1.60438896E12, 1525.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60438902E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 2047.0, "minX": 1.0, "maxY": 2381.0, "series": [{"data": [[4.0, 2258.5], [1.0, 2381.0], [5.0, 2204.5], [6.0, 2047.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 6.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 2046.5, "minX": 1.0, "maxY": 2381.0, "series": [{"data": [[4.0, 2258.0], [1.0, 2381.0], [5.0, 2204.5], [6.0, 2046.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 6.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.4666666666666667, "minX": 1.60438896E12, "maxY": 2.0166666666666666, "series": [{"data": [[1.60438902E12, 2.0166666666666666], [1.60438896E12, 0.4666666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60438902E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.3, "minX": 1.60438896E12, "maxY": 2.183333333333333, "series": [{"data": [[1.60438902E12, 2.183333333333333], [1.60438896E12, 0.3]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60438902E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.3, "minX": 1.60438896E12, "maxY": 2.183333333333333, "series": [{"data": [[1.60438902E12, 2.183333333333333], [1.60438896E12, 0.3]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60438902E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.3, "minX": 1.60438896E12, "maxY": 2.183333333333333, "series": [{"data": [[1.60438902E12, 2.183333333333333], [1.60438896E12, 0.3]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60438902E12, "title": "Total Transactions Per Second"}},
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

