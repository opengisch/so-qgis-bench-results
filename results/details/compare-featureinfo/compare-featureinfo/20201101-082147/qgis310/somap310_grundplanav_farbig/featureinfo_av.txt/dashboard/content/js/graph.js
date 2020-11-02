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
        data: {"result": {"minY": 1177.0, "minX": 0.0, "maxY": 2521.0, "series": [{"data": [[0.0, 1177.0], [0.1, 1177.0], [0.2, 1177.0], [0.3, 1177.0], [0.4, 1177.0], [0.5, 1177.0], [0.6, 1177.0], [0.7, 1358.0], [0.8, 1358.0], [0.9, 1358.0], [1.0, 1358.0], [1.1, 1358.0], [1.2, 1358.0], [1.3, 1358.0], [1.4, 1569.0], [1.5, 1569.0], [1.6, 1569.0], [1.7, 1569.0], [1.8, 1569.0], [1.9, 1569.0], [2.0, 1569.0], [2.1, 1668.0], [2.2, 1668.0], [2.3, 1668.0], [2.4, 1668.0], [2.5, 1668.0], [2.6, 1668.0], [2.7, 1752.0], [2.8, 1752.0], [2.9, 1752.0], [3.0, 1752.0], [3.1, 1752.0], [3.2, 1752.0], [3.3, 1752.0], [3.4, 1849.0], [3.5, 1849.0], [3.6, 1849.0], [3.7, 1849.0], [3.8, 1849.0], [3.9, 1849.0], [4.0, 1849.0], [4.1, 1938.0], [4.2, 1938.0], [4.3, 1938.0], [4.4, 1938.0], [4.5, 1938.0], [4.6, 1938.0], [4.7, 1949.0], [4.8, 1949.0], [4.9, 1949.0], [5.0, 1949.0], [5.1, 1949.0], [5.2, 1949.0], [5.3, 1949.0], [5.4, 1957.0], [5.5, 1957.0], [5.6, 1957.0], [5.7, 1957.0], [5.8, 1957.0], [5.9, 1957.0], [6.0, 1957.0], [6.1, 1960.0], [6.2, 1960.0], [6.3, 1960.0], [6.4, 1960.0], [6.5, 1960.0], [6.6, 1960.0], [6.7, 1960.0], [6.8, 1976.0], [6.9, 1976.0], [7.0, 1976.0], [7.1, 1976.0], [7.2, 1976.0], [7.3, 1976.0], [7.4, 1978.0], [7.5, 1978.0], [7.6, 1978.0], [7.7, 1978.0], [7.8, 1978.0], [7.9, 1978.0], [8.0, 1978.0], [8.1, 1979.0], [8.2, 1979.0], [8.3, 1979.0], [8.4, 1979.0], [8.5, 1979.0], [8.6, 1979.0], [8.7, 1979.0], [8.8, 1983.0], [8.9, 1983.0], [9.0, 1983.0], [9.1, 1983.0], [9.2, 1983.0], [9.3, 1983.0], [9.4, 1990.0], [9.5, 1990.0], [9.6, 1990.0], [9.7, 1990.0], [9.8, 1990.0], [9.9, 1990.0], [10.0, 1990.0], [10.1, 2005.0], [10.2, 2005.0], [10.3, 2005.0], [10.4, 2005.0], [10.5, 2005.0], [10.6, 2005.0], [10.7, 2005.0], [10.8, 2008.0], [10.9, 2008.0], [11.0, 2008.0], [11.1, 2008.0], [11.2, 2008.0], [11.3, 2008.0], [11.4, 2008.0], [11.5, 2012.0], [11.6, 2012.0], [11.7, 2012.0], [11.8, 2012.0], [11.9, 2012.0], [12.0, 2012.0], [12.1, 2013.0], [12.2, 2013.0], [12.3, 2013.0], [12.4, 2013.0], [12.5, 2013.0], [12.6, 2013.0], [12.7, 2013.0], [12.8, 2022.0], [12.9, 2022.0], [13.0, 2022.0], [13.1, 2022.0], [13.2, 2022.0], [13.3, 2022.0], [13.4, 2022.0], [13.5, 2030.0], [13.6, 2030.0], [13.7, 2030.0], [13.8, 2030.0], [13.9, 2030.0], [14.0, 2030.0], [14.1, 2048.0], [14.2, 2048.0], [14.3, 2048.0], [14.4, 2048.0], [14.5, 2048.0], [14.6, 2048.0], [14.7, 2048.0], [14.8, 2064.0], [14.9, 2064.0], [15.0, 2064.0], [15.1, 2064.0], [15.2, 2064.0], [15.3, 2064.0], [15.4, 2064.0], [15.5, 2070.0], [15.6, 2070.0], [15.7, 2070.0], [15.8, 2070.0], [15.9, 2070.0], [16.0, 2070.0], [16.1, 2070.0], [16.2, 2073.0], [16.3, 2073.0], [16.4, 2073.0], [16.5, 2073.0], [16.6, 2073.0], [16.7, 2073.0], [16.8, 2078.0], [16.9, 2078.0], [17.0, 2078.0], [17.1, 2078.0], [17.2, 2078.0], [17.3, 2078.0], [17.4, 2078.0], [17.5, 2089.0], [17.6, 2089.0], [17.7, 2089.0], [17.8, 2089.0], [17.9, 2089.0], [18.0, 2089.0], [18.1, 2089.0], [18.2, 2099.0], [18.3, 2099.0], [18.4, 2099.0], [18.5, 2099.0], [18.6, 2099.0], [18.7, 2099.0], [18.8, 2106.0], [18.9, 2106.0], [19.0, 2106.0], [19.1, 2106.0], [19.2, 2106.0], [19.3, 2106.0], [19.4, 2106.0], [19.5, 2108.0], [19.6, 2108.0], [19.7, 2108.0], [19.8, 2108.0], [19.9, 2108.0], [20.0, 2108.0], [20.1, 2108.0], [20.2, 2117.0], [20.3, 2117.0], [20.4, 2117.0], [20.5, 2117.0], [20.6, 2117.0], [20.7, 2117.0], [20.8, 2117.0], [20.9, 2124.0], [21.0, 2124.0], [21.1, 2124.0], [21.2, 2124.0], [21.3, 2124.0], [21.4, 2124.0], [21.5, 2134.0], [21.6, 2134.0], [21.7, 2134.0], [21.8, 2134.0], [21.9, 2134.0], [22.0, 2134.0], [22.1, 2134.0], [22.2, 2135.0], [22.3, 2135.0], [22.4, 2135.0], [22.5, 2135.0], [22.6, 2135.0], [22.7, 2135.0], [22.8, 2135.0], [22.9, 2142.0], [23.0, 2142.0], [23.1, 2142.0], [23.2, 2142.0], [23.3, 2142.0], [23.4, 2142.0], [23.5, 2145.0], [23.6, 2145.0], [23.7, 2145.0], [23.8, 2145.0], [23.9, 2145.0], [24.0, 2145.0], [24.1, 2145.0], [24.2, 2146.0], [24.3, 2146.0], [24.4, 2146.0], [24.5, 2146.0], [24.6, 2146.0], [24.7, 2146.0], [24.8, 2146.0], [24.9, 2149.0], [25.0, 2149.0], [25.1, 2149.0], [25.2, 2149.0], [25.3, 2149.0], [25.4, 2149.0], [25.5, 2149.0], [25.6, 2152.0], [25.7, 2152.0], [25.8, 2152.0], [25.9, 2152.0], [26.0, 2152.0], [26.1, 2152.0], [26.2, 2152.0], [26.3, 2152.0], [26.4, 2152.0], [26.5, 2152.0], [26.6, 2152.0], [26.7, 2152.0], [26.8, 2152.0], [26.9, 2153.0], [27.0, 2153.0], [27.1, 2153.0], [27.2, 2153.0], [27.3, 2153.0], [27.4, 2153.0], [27.5, 2153.0], [27.6, 2154.0], [27.7, 2154.0], [27.8, 2154.0], [27.9, 2154.0], [28.0, 2154.0], [28.1, 2154.0], [28.2, 2157.0], [28.3, 2157.0], [28.4, 2157.0], [28.5, 2157.0], [28.6, 2157.0], [28.7, 2157.0], [28.8, 2157.0], [28.9, 2157.0], [29.0, 2157.0], [29.1, 2157.0], [29.2, 2157.0], [29.3, 2157.0], [29.4, 2157.0], [29.5, 2157.0], [29.6, 2157.0], [29.7, 2157.0], [29.8, 2157.0], [29.9, 2157.0], [30.0, 2157.0], [30.1, 2157.0], [30.2, 2157.0], [30.3, 2162.0], [30.4, 2162.0], [30.5, 2162.0], [30.6, 2162.0], [30.7, 2162.0], [30.8, 2162.0], [30.9, 2164.0], [31.0, 2164.0], [31.1, 2164.0], [31.2, 2164.0], [31.3, 2164.0], [31.4, 2164.0], [31.5, 2164.0], [31.6, 2167.0], [31.7, 2167.0], [31.8, 2167.0], [31.9, 2167.0], [32.0, 2167.0], [32.1, 2167.0], [32.2, 2167.0], [32.3, 2175.0], [32.4, 2175.0], [32.5, 2175.0], [32.6, 2175.0], [32.7, 2175.0], [32.8, 2175.0], [32.9, 2180.0], [33.0, 2180.0], [33.1, 2180.0], [33.2, 2180.0], [33.3, 2180.0], [33.4, 2180.0], [33.5, 2180.0], [33.6, 2185.0], [33.7, 2185.0], [33.8, 2185.0], [33.9, 2185.0], [34.0, 2185.0], [34.1, 2185.0], [34.2, 2185.0], [34.3, 2185.0], [34.4, 2185.0], [34.5, 2185.0], [34.6, 2185.0], [34.7, 2185.0], [34.8, 2185.0], [34.9, 2186.0], [35.0, 2186.0], [35.1, 2186.0], [35.2, 2186.0], [35.3, 2186.0], [35.4, 2186.0], [35.5, 2186.0], [35.6, 2188.0], [35.7, 2188.0], [35.8, 2188.0], [35.9, 2188.0], [36.0, 2188.0], [36.1, 2188.0], [36.2, 2188.0], [36.3, 2195.0], [36.4, 2195.0], [36.5, 2195.0], [36.6, 2195.0], [36.7, 2195.0], [36.8, 2195.0], [36.9, 2195.0], [37.0, 2198.0], [37.1, 2198.0], [37.2, 2198.0], [37.3, 2198.0], [37.4, 2198.0], [37.5, 2198.0], [37.6, 2198.0], [37.7, 2198.0], [37.8, 2198.0], [37.9, 2198.0], [38.0, 2198.0], [38.1, 2198.0], [38.2, 2198.0], [38.3, 2200.0], [38.4, 2200.0], [38.5, 2200.0], [38.6, 2200.0], [38.7, 2200.0], [38.8, 2200.0], [38.9, 2200.0], [39.0, 2201.0], [39.1, 2201.0], [39.2, 2201.0], [39.3, 2201.0], [39.4, 2201.0], [39.5, 2201.0], [39.6, 2202.0], [39.7, 2202.0], [39.8, 2202.0], [39.9, 2202.0], [40.0, 2202.0], [40.1, 2202.0], [40.2, 2202.0], [40.3, 2210.0], [40.4, 2210.0], [40.5, 2210.0], [40.6, 2210.0], [40.7, 2210.0], [40.8, 2210.0], [40.9, 2210.0], [41.0, 2213.0], [41.1, 2213.0], [41.2, 2213.0], [41.3, 2213.0], [41.4, 2213.0], [41.5, 2213.0], [41.6, 2213.0], [41.7, 2213.0], [41.8, 2213.0], [41.9, 2213.0], [42.0, 2213.0], [42.1, 2213.0], [42.2, 2213.0], [42.3, 2215.0], [42.4, 2215.0], [42.5, 2215.0], [42.6, 2215.0], [42.7, 2215.0], [42.8, 2215.0], [42.9, 2215.0], [43.0, 2218.0], [43.1, 2218.0], [43.2, 2218.0], [43.3, 2218.0], [43.4, 2218.0], [43.5, 2218.0], [43.6, 2218.0], [43.7, 2219.0], [43.8, 2219.0], [43.9, 2219.0], [44.0, 2219.0], [44.1, 2219.0], [44.2, 2219.0], [44.3, 2221.0], [44.4, 2221.0], [44.5, 2221.0], [44.6, 2221.0], [44.7, 2221.0], [44.8, 2221.0], [44.9, 2221.0], [45.0, 2222.0], [45.1, 2222.0], [45.2, 2222.0], [45.3, 2222.0], [45.4, 2222.0], [45.5, 2222.0], [45.6, 2222.0], [45.7, 2223.0], [45.8, 2223.0], [45.9, 2223.0], [46.0, 2223.0], [46.1, 2223.0], [46.2, 2223.0], [46.3, 2223.0], [46.4, 2224.0], [46.5, 2224.0], [46.6, 2224.0], [46.7, 2224.0], [46.8, 2224.0], [46.9, 2224.0], [47.0, 2224.0], [47.1, 2224.0], [47.2, 2224.0], [47.3, 2224.0], [47.4, 2224.0], [47.5, 2224.0], [47.6, 2224.0], [47.7, 2232.0], [47.8, 2232.0], [47.9, 2232.0], [48.0, 2232.0], [48.1, 2232.0], [48.2, 2232.0], [48.3, 2232.0], [48.4, 2234.0], [48.5, 2234.0], [48.6, 2234.0], [48.7, 2234.0], [48.8, 2234.0], [48.9, 2234.0], [49.0, 2236.0], [49.1, 2236.0], [49.2, 2236.0], [49.3, 2236.0], [49.4, 2236.0], [49.5, 2236.0], [49.6, 2236.0], [49.7, 2236.0], [49.8, 2236.0], [49.9, 2236.0], [50.0, 2236.0], [50.1, 2236.0], [50.2, 2236.0], [50.3, 2236.0], [50.4, 2237.0], [50.5, 2237.0], [50.6, 2237.0], [50.7, 2237.0], [50.8, 2237.0], [50.9, 2237.0], [51.0, 2237.0], [51.1, 2238.0], [51.2, 2238.0], [51.3, 2238.0], [51.4, 2238.0], [51.5, 2238.0], [51.6, 2238.0], [51.7, 2239.0], [51.8, 2239.0], [51.9, 2239.0], [52.0, 2239.0], [52.1, 2239.0], [52.2, 2239.0], [52.3, 2239.0], [52.4, 2239.0], [52.5, 2239.0], [52.6, 2239.0], [52.7, 2239.0], [52.8, 2239.0], [52.9, 2239.0], [53.0, 2239.0], [53.1, 2245.0], [53.2, 2245.0], [53.3, 2245.0], [53.4, 2245.0], [53.5, 2245.0], [53.6, 2245.0], [53.7, 2247.0], [53.8, 2247.0], [53.9, 2247.0], [54.0, 2247.0], [54.1, 2247.0], [54.2, 2247.0], [54.3, 2247.0], [54.4, 2248.0], [54.5, 2248.0], [54.6, 2248.0], [54.7, 2248.0], [54.8, 2248.0], [54.9, 2248.0], [55.0, 2248.0], [55.1, 2253.0], [55.2, 2253.0], [55.3, 2253.0], [55.4, 2253.0], [55.5, 2253.0], [55.6, 2253.0], [55.7, 2253.0], [55.8, 2254.0], [55.9, 2254.0], [56.0, 2254.0], [56.1, 2254.0], [56.2, 2254.0], [56.3, 2254.0], [56.4, 2256.0], [56.5, 2256.0], [56.6, 2256.0], [56.7, 2256.0], [56.8, 2256.0], [56.9, 2256.0], [57.0, 2256.0], [57.1, 2258.0], [57.2, 2258.0], [57.3, 2258.0], [57.4, 2258.0], [57.5, 2258.0], [57.6, 2258.0], [57.7, 2258.0], [57.8, 2260.0], [57.9, 2260.0], [58.0, 2260.0], [58.1, 2260.0], [58.2, 2260.0], [58.3, 2260.0], [58.4, 2264.0], [58.5, 2264.0], [58.6, 2264.0], [58.7, 2264.0], [58.8, 2264.0], [58.9, 2264.0], [59.0, 2264.0], [59.1, 2264.0], [59.2, 2264.0], [59.3, 2264.0], [59.4, 2264.0], [59.5, 2264.0], [59.6, 2264.0], [59.7, 2264.0], [59.8, 2266.0], [59.9, 2266.0], [60.0, 2266.0], [60.1, 2266.0], [60.2, 2266.0], [60.3, 2266.0], [60.4, 2266.0], [60.5, 2266.0], [60.6, 2266.0], [60.7, 2266.0], [60.8, 2266.0], [60.9, 2266.0], [61.0, 2266.0], [61.1, 2269.0], [61.2, 2269.0], [61.3, 2269.0], [61.4, 2269.0], [61.5, 2269.0], [61.6, 2269.0], [61.7, 2269.0], [61.8, 2269.0], [61.9, 2269.0], [62.0, 2269.0], [62.1, 2269.0], [62.2, 2269.0], [62.3, 2269.0], [62.4, 2269.0], [62.5, 2270.0], [62.6, 2270.0], [62.7, 2270.0], [62.8, 2270.0], [62.9, 2270.0], [63.0, 2270.0], [63.1, 2270.0], [63.2, 2270.0], [63.3, 2270.0], [63.4, 2270.0], [63.5, 2270.0], [63.6, 2270.0], [63.7, 2270.0], [63.8, 2271.0], [63.9, 2271.0], [64.0, 2271.0], [64.1, 2271.0], [64.2, 2271.0], [64.3, 2271.0], [64.4, 2271.0], [64.5, 2272.0], [64.6, 2272.0], [64.7, 2272.0], [64.8, 2272.0], [64.9, 2272.0], [65.0, 2272.0], [65.1, 2272.0], [65.2, 2272.0], [65.3, 2272.0], [65.4, 2272.0], [65.5, 2272.0], [65.6, 2272.0], [65.7, 2272.0], [65.8, 2278.0], [65.9, 2278.0], [66.0, 2278.0], [66.1, 2278.0], [66.2, 2278.0], [66.3, 2278.0], [66.4, 2278.0], [66.5, 2281.0], [66.6, 2281.0], [66.7, 2281.0], [66.8, 2281.0], [66.9, 2281.0], [67.0, 2281.0], [67.1, 2281.0], [67.2, 2283.0], [67.3, 2283.0], [67.4, 2283.0], [67.5, 2283.0], [67.6, 2283.0], [67.7, 2283.0], [67.8, 2290.0], [67.9, 2290.0], [68.0, 2290.0], [68.1, 2290.0], [68.2, 2290.0], [68.3, 2290.0], [68.4, 2290.0], [68.5, 2296.0], [68.6, 2296.0], [68.7, 2296.0], [68.8, 2296.0], [68.9, 2296.0], [69.0, 2296.0], [69.1, 2296.0], [69.2, 2297.0], [69.3, 2297.0], [69.4, 2297.0], [69.5, 2297.0], [69.6, 2297.0], [69.7, 2297.0], [69.8, 2300.0], [69.9, 2300.0], [70.0, 2300.0], [70.1, 2300.0], [70.2, 2300.0], [70.3, 2300.0], [70.4, 2300.0], [70.5, 2300.0], [70.6, 2300.0], [70.7, 2300.0], [70.8, 2300.0], [70.9, 2300.0], [71.0, 2300.0], [71.1, 2300.0], [71.2, 2304.0], [71.3, 2304.0], [71.4, 2304.0], [71.5, 2304.0], [71.6, 2304.0], [71.7, 2304.0], [71.8, 2304.0], [71.9, 2304.0], [72.0, 2304.0], [72.1, 2304.0], [72.2, 2304.0], [72.3, 2304.0], [72.4, 2304.0], [72.5, 2304.0], [72.6, 2304.0], [72.7, 2304.0], [72.8, 2304.0], [72.9, 2304.0], [73.0, 2304.0], [73.1, 2304.0], [73.2, 2309.0], [73.3, 2309.0], [73.4, 2309.0], [73.5, 2309.0], [73.6, 2309.0], [73.7, 2309.0], [73.8, 2309.0], [73.9, 2311.0], [74.0, 2311.0], [74.1, 2311.0], [74.2, 2311.0], [74.3, 2311.0], [74.4, 2311.0], [74.5, 2312.0], [74.6, 2312.0], [74.7, 2312.0], [74.8, 2312.0], [74.9, 2312.0], [75.0, 2312.0], [75.1, 2312.0], [75.2, 2312.0], [75.3, 2312.0], [75.4, 2312.0], [75.5, 2312.0], [75.6, 2312.0], [75.7, 2312.0], [75.8, 2312.0], [75.9, 2316.0], [76.0, 2316.0], [76.1, 2316.0], [76.2, 2316.0], [76.3, 2316.0], [76.4, 2316.0], [76.5, 2316.0], [76.6, 2316.0], [76.7, 2316.0], [76.8, 2316.0], [76.9, 2316.0], [77.0, 2316.0], [77.1, 2316.0], [77.2, 2318.0], [77.3, 2318.0], [77.4, 2318.0], [77.5, 2318.0], [77.6, 2318.0], [77.7, 2318.0], [77.8, 2318.0], [77.9, 2319.0], [78.0, 2319.0], [78.1, 2319.0], [78.2, 2319.0], [78.3, 2319.0], [78.4, 2319.0], [78.5, 2319.0], [78.6, 2321.0], [78.7, 2321.0], [78.8, 2321.0], [78.9, 2321.0], [79.0, 2321.0], [79.1, 2321.0], [79.2, 2323.0], [79.3, 2323.0], [79.4, 2323.0], [79.5, 2323.0], [79.6, 2323.0], [79.7, 2323.0], [79.8, 2323.0], [79.9, 2327.0], [80.0, 2327.0], [80.1, 2327.0], [80.2, 2327.0], [80.3, 2327.0], [80.4, 2327.0], [80.5, 2327.0], [80.6, 2331.0], [80.7, 2331.0], [80.8, 2331.0], [80.9, 2331.0], [81.0, 2331.0], [81.1, 2331.0], [81.2, 2331.0], [81.3, 2332.0], [81.4, 2332.0], [81.5, 2332.0], [81.6, 2332.0], [81.7, 2332.0], [81.8, 2332.0], [81.9, 2335.0], [82.0, 2335.0], [82.1, 2335.0], [82.2, 2335.0], [82.3, 2335.0], [82.4, 2335.0], [82.5, 2335.0], [82.6, 2338.0], [82.7, 2338.0], [82.8, 2338.0], [82.9, 2338.0], [83.0, 2338.0], [83.1, 2338.0], [83.2, 2338.0], [83.3, 2341.0], [83.4, 2341.0], [83.5, 2341.0], [83.6, 2341.0], [83.7, 2341.0], [83.8, 2341.0], [83.9, 2347.0], [84.0, 2347.0], [84.1, 2347.0], [84.2, 2347.0], [84.3, 2347.0], [84.4, 2347.0], [84.5, 2347.0], [84.6, 2351.0], [84.7, 2351.0], [84.8, 2351.0], [84.9, 2351.0], [85.0, 2351.0], [85.1, 2351.0], [85.2, 2351.0], [85.3, 2352.0], [85.4, 2352.0], [85.5, 2352.0], [85.6, 2352.0], [85.7, 2352.0], [85.8, 2352.0], [85.9, 2352.0], [86.0, 2357.0], [86.1, 2357.0], [86.2, 2357.0], [86.3, 2357.0], [86.4, 2357.0], [86.5, 2357.0], [86.6, 2365.0], [86.7, 2365.0], [86.8, 2365.0], [86.9, 2365.0], [87.0, 2365.0], [87.1, 2365.0], [87.2, 2365.0], [87.3, 2365.0], [87.4, 2365.0], [87.5, 2365.0], [87.6, 2365.0], [87.7, 2365.0], [87.8, 2365.0], [87.9, 2365.0], [88.0, 2381.0], [88.1, 2381.0], [88.2, 2381.0], [88.3, 2381.0], [88.4, 2381.0], [88.5, 2381.0], [88.6, 2383.0], [88.7, 2383.0], [88.8, 2383.0], [88.9, 2383.0], [89.0, 2383.0], [89.1, 2383.0], [89.2, 2383.0], [89.3, 2387.0], [89.4, 2387.0], [89.5, 2387.0], [89.6, 2387.0], [89.7, 2387.0], [89.8, 2387.0], [89.9, 2387.0], [90.0, 2394.0], [90.1, 2394.0], [90.2, 2394.0], [90.3, 2394.0], [90.4, 2394.0], [90.5, 2394.0], [90.6, 2394.0], [90.7, 2394.0], [90.8, 2394.0], [90.9, 2394.0], [91.0, 2394.0], [91.1, 2394.0], [91.2, 2394.0], [91.3, 2397.0], [91.4, 2397.0], [91.5, 2397.0], [91.6, 2397.0], [91.7, 2397.0], [91.8, 2397.0], [91.9, 2397.0], [92.0, 2404.0], [92.1, 2404.0], [92.2, 2404.0], [92.3, 2404.0], [92.4, 2404.0], [92.5, 2404.0], [92.6, 2404.0], [92.7, 2406.0], [92.8, 2406.0], [92.9, 2406.0], [93.0, 2406.0], [93.1, 2406.0], [93.2, 2406.0], [93.3, 2434.0], [93.4, 2434.0], [93.5, 2434.0], [93.6, 2434.0], [93.7, 2434.0], [93.8, 2434.0], [93.9, 2434.0], [94.0, 2437.0], [94.1, 2437.0], [94.2, 2437.0], [94.3, 2437.0], [94.4, 2437.0], [94.5, 2437.0], [94.6, 2437.0], [94.7, 2441.0], [94.8, 2441.0], [94.9, 2441.0], [95.0, 2441.0], [95.1, 2441.0], [95.2, 2441.0], [95.3, 2441.0], [95.4, 2448.0], [95.5, 2448.0], [95.6, 2448.0], [95.7, 2448.0], [95.8, 2448.0], [95.9, 2448.0], [96.0, 2455.0], [96.1, 2455.0], [96.2, 2455.0], [96.3, 2455.0], [96.4, 2455.0], [96.5, 2455.0], [96.6, 2455.0], [96.7, 2457.0], [96.8, 2457.0], [96.9, 2457.0], [97.0, 2457.0], [97.1, 2457.0], [97.2, 2457.0], [97.3, 2457.0], [97.4, 2486.0], [97.5, 2486.0], [97.6, 2486.0], [97.7, 2486.0], [97.8, 2486.0], [97.9, 2486.0], [98.0, 2515.0], [98.1, 2515.0], [98.2, 2515.0], [98.3, 2515.0], [98.4, 2515.0], [98.5, 2515.0], [98.6, 2515.0], [98.7, 2515.0], [98.8, 2515.0], [98.9, 2515.0], [99.0, 2515.0], [99.1, 2515.0], [99.2, 2515.0], [99.3, 2515.0], [99.4, 2521.0], [99.5, 2521.0], [99.6, 2521.0], [99.7, 2521.0], [99.8, 2521.0], [99.9, 2521.0], [100.0, 2521.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 1100.0, "maxY": 47.0, "series": [{"data": [[2100.0, 29.0], [2200.0, 47.0], [2300.0, 33.0], [2400.0, 9.0], [2500.0, 3.0], [1100.0, 1.0], [1300.0, 1.0], [1500.0, 1.0], [1600.0, 1.0], [1700.0, 1.0], [1800.0, 1.0], [1900.0, 9.0], [2000.0, 13.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 2500.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 2.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 147.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 2.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 147.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.697986577181208, "minX": 1.60421898E12, "maxY": 9.697986577181208, "series": [{"data": [[1.60421898E12, 9.697986577181208]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60421898E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 2197.264285714284, "minX": 1.0, "maxY": 2406.0, "series": [{"data": [[8.0, 2309.0], [4.0, 2387.0], [2.0, 2316.0], [1.0, 2300.0], [9.0, 2219.0], [10.0, 2197.264285714284], [5.0, 2332.0], [6.0, 2335.0], [3.0, 2406.0], [7.0, 2304.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.697986577181208, 2204.8657718120785]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 1265.8666666666666, "minX": 1.60421898E12, "maxY": 4621.0, "series": [{"data": [[1.60421898E12, 4621.0]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60421898E12, 1265.8666666666666]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60421898E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 2204.8657718120785, "minX": 1.60421898E12, "maxY": 2204.8657718120785, "series": [{"data": [[1.60421898E12, 2204.8657718120785]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60421898E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 2204.7382550335574, "minX": 1.60421898E12, "maxY": 2204.7382550335574, "series": [{"data": [[1.60421898E12, 2204.7382550335574]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60421898E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.8590604026845651, "minX": 1.60421898E12, "maxY": 0.8590604026845651, "series": [{"data": [[1.60421898E12, 0.8590604026845651]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60421898E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 1177.0, "minX": 1.60421898E12, "maxY": 2521.0, "series": [{"data": [[1.60421898E12, 2521.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60421898E12, 1240.3499935269356]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60421898E12, 1264.7850025892258]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60421898E12, 1253.9249967634678]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60421898E12, 1177.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60421898E12, 2236.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60421898E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 2198.0, "minX": 2.0, "maxY": 2308.0, "series": [{"data": [[4.0, 2261.0], [2.0, 2308.0], [5.0, 2198.0], [6.0, 2264.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 6.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 2198.0, "minX": 2.0, "maxY": 2307.5, "series": [{"data": [[4.0, 2260.5], [2.0, 2307.5], [5.0, 2198.0], [6.0, 2264.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 6.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 2.4833333333333334, "minX": 1.60421898E12, "maxY": 2.4833333333333334, "series": [{"data": [[1.60421898E12, 2.4833333333333334]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60421898E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 2.4833333333333334, "minX": 1.60421898E12, "maxY": 2.4833333333333334, "series": [{"data": [[1.60421898E12, 2.4833333333333334]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60421898E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 2.4833333333333334, "minX": 1.60421898E12, "maxY": 2.4833333333333334, "series": [{"data": [[1.60421898E12, 2.4833333333333334]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60421898E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 2.4833333333333334, "minX": 1.60421898E12, "maxY": 2.4833333333333334, "series": [{"data": [[1.60421898E12, 2.4833333333333334]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60421898E12, "title": "Total Transactions Per Second"}},
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

