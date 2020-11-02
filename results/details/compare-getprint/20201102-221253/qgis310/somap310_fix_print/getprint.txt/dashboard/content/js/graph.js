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
        data: {"result": {"minY": 1782.0, "minX": 0.0, "maxY": 40465.0, "series": [{"data": [[0.0, 1782.0], [0.1, 1782.0], [0.2, 1782.0], [0.3, 1782.0], [0.4, 1782.0], [0.5, 1782.0], [0.6, 1782.0], [0.7, 1782.0], [0.8, 1782.0], [0.9, 1798.0], [1.0, 1798.0], [1.1, 1798.0], [1.2, 1798.0], [1.3, 1798.0], [1.4, 1798.0], [1.5, 1798.0], [1.6, 1798.0], [1.7, 1798.0], [1.8, 1816.0], [1.9, 1816.0], [2.0, 1816.0], [2.1, 1816.0], [2.2, 1816.0], [2.3, 1816.0], [2.4, 1816.0], [2.5, 1816.0], [2.6, 1816.0], [2.7, 1840.0], [2.8, 1840.0], [2.9, 1840.0], [3.0, 1840.0], [3.1, 1840.0], [3.2, 1840.0], [3.3, 1840.0], [3.4, 1840.0], [3.5, 1840.0], [3.6, 1842.0], [3.7, 1842.0], [3.8, 1842.0], [3.9, 1842.0], [4.0, 1842.0], [4.1, 1842.0], [4.2, 1842.0], [4.3, 1842.0], [4.4, 1842.0], [4.5, 1844.0], [4.6, 1844.0], [4.7, 1844.0], [4.8, 1844.0], [4.9, 1844.0], [5.0, 1844.0], [5.1, 1844.0], [5.2, 1844.0], [5.3, 1844.0], [5.4, 1859.0], [5.5, 1859.0], [5.6, 1859.0], [5.7, 1859.0], [5.8, 1859.0], [5.9, 1859.0], [6.0, 1859.0], [6.1, 1859.0], [6.2, 1859.0], [6.3, 1875.0], [6.4, 1875.0], [6.5, 1875.0], [6.6, 1875.0], [6.7, 1875.0], [6.8, 1875.0], [6.9, 1875.0], [7.0, 1875.0], [7.1, 1875.0], [7.2, 1890.0], [7.3, 1890.0], [7.4, 1890.0], [7.5, 1890.0], [7.6, 1890.0], [7.7, 1890.0], [7.8, 1890.0], [7.9, 1890.0], [8.0, 1890.0], [8.1, 1892.0], [8.2, 1892.0], [8.3, 1892.0], [8.4, 1892.0], [8.5, 1892.0], [8.6, 1892.0], [8.7, 1892.0], [8.8, 1892.0], [8.9, 1892.0], [9.0, 1898.0], [9.1, 1898.0], [9.2, 1898.0], [9.3, 1898.0], [9.4, 1898.0], [9.5, 1898.0], [9.6, 1898.0], [9.7, 1898.0], [9.8, 1898.0], [9.9, 1914.0], [10.0, 1914.0], [10.1, 1914.0], [10.2, 1914.0], [10.3, 1914.0], [10.4, 1914.0], [10.5, 1914.0], [10.6, 1914.0], [10.7, 1914.0], [10.8, 1918.0], [10.9, 1918.0], [11.0, 1918.0], [11.1, 1918.0], [11.2, 1918.0], [11.3, 1918.0], [11.4, 1918.0], [11.5, 1918.0], [11.6, 1918.0], [11.7, 1919.0], [11.8, 1919.0], [11.9, 1919.0], [12.0, 1919.0], [12.1, 1919.0], [12.2, 1919.0], [12.3, 1919.0], [12.4, 1919.0], [12.5, 1923.0], [12.6, 1923.0], [12.7, 1923.0], [12.8, 1923.0], [12.9, 1923.0], [13.0, 1923.0], [13.1, 1923.0], [13.2, 1923.0], [13.3, 1923.0], [13.4, 1933.0], [13.5, 1933.0], [13.6, 1933.0], [13.7, 1933.0], [13.8, 1933.0], [13.9, 1933.0], [14.0, 1933.0], [14.1, 1933.0], [14.2, 1933.0], [14.3, 1942.0], [14.4, 1942.0], [14.5, 1942.0], [14.6, 1942.0], [14.7, 1942.0], [14.8, 1942.0], [14.9, 1942.0], [15.0, 1942.0], [15.1, 1942.0], [15.2, 1944.0], [15.3, 1944.0], [15.4, 1944.0], [15.5, 1944.0], [15.6, 1944.0], [15.7, 1944.0], [15.8, 1944.0], [15.9, 1944.0], [16.0, 1944.0], [16.1, 2020.0], [16.2, 2020.0], [16.3, 2020.0], [16.4, 2020.0], [16.5, 2020.0], [16.6, 2020.0], [16.7, 2020.0], [16.8, 2020.0], [16.9, 2020.0], [17.0, 2026.0], [17.1, 2026.0], [17.2, 2026.0], [17.3, 2026.0], [17.4, 2026.0], [17.5, 2026.0], [17.6, 2026.0], [17.7, 2026.0], [17.8, 2026.0], [17.9, 2035.0], [18.0, 2035.0], [18.1, 2035.0], [18.2, 2035.0], [18.3, 2035.0], [18.4, 2035.0], [18.5, 2035.0], [18.6, 2035.0], [18.7, 2035.0], [18.8, 2050.0], [18.9, 2050.0], [19.0, 2050.0], [19.1, 2050.0], [19.2, 2050.0], [19.3, 2050.0], [19.4, 2050.0], [19.5, 2050.0], [19.6, 2050.0], [19.7, 2057.0], [19.8, 2057.0], [19.9, 2057.0], [20.0, 2057.0], [20.1, 2057.0], [20.2, 2057.0], [20.3, 2057.0], [20.4, 2057.0], [20.5, 2057.0], [20.6, 2124.0], [20.7, 2124.0], [20.8, 2124.0], [20.9, 2124.0], [21.0, 2124.0], [21.1, 2124.0], [21.2, 2124.0], [21.3, 2124.0], [21.4, 2124.0], [21.5, 2345.0], [21.6, 2345.0], [21.7, 2345.0], [21.8, 2345.0], [21.9, 2345.0], [22.0, 2345.0], [22.1, 2345.0], [22.2, 2345.0], [22.3, 2345.0], [22.4, 2436.0], [22.5, 2436.0], [22.6, 2436.0], [22.7, 2436.0], [22.8, 2436.0], [22.9, 2436.0], [23.0, 2436.0], [23.1, 2436.0], [23.2, 2436.0], [23.3, 2629.0], [23.4, 2629.0], [23.5, 2629.0], [23.6, 2629.0], [23.7, 2629.0], [23.8, 2629.0], [23.9, 2629.0], [24.0, 2629.0], [24.1, 2629.0], [24.2, 2634.0], [24.3, 2634.0], [24.4, 2634.0], [24.5, 2634.0], [24.6, 2634.0], [24.7, 2634.0], [24.8, 2634.0], [24.9, 2634.0], [25.0, 2939.0], [25.1, 2939.0], [25.2, 2939.0], [25.3, 2939.0], [25.4, 2939.0], [25.5, 2939.0], [25.6, 2939.0], [25.7, 2939.0], [25.8, 2939.0], [25.9, 3474.0], [26.0, 3474.0], [26.1, 3474.0], [26.2, 3474.0], [26.3, 3474.0], [26.4, 3474.0], [26.5, 3474.0], [26.6, 3474.0], [26.7, 3474.0], [26.8, 3579.0], [26.9, 3579.0], [27.0, 3579.0], [27.1, 3579.0], [27.2, 3579.0], [27.3, 3579.0], [27.4, 3579.0], [27.5, 3579.0], [27.6, 3579.0], [27.7, 3620.0], [27.8, 3620.0], [27.9, 3620.0], [28.0, 3620.0], [28.1, 3620.0], [28.2, 3620.0], [28.3, 3620.0], [28.4, 3620.0], [28.5, 3620.0], [28.6, 3648.0], [28.7, 3648.0], [28.8, 3648.0], [28.9, 3648.0], [29.0, 3648.0], [29.1, 3648.0], [29.2, 3648.0], [29.3, 3648.0], [29.4, 3648.0], [29.5, 3648.0], [29.6, 3648.0], [29.7, 3648.0], [29.8, 3648.0], [29.9, 3648.0], [30.0, 3648.0], [30.1, 3648.0], [30.2, 3648.0], [30.3, 3648.0], [30.4, 3714.0], [30.5, 3714.0], [30.6, 3714.0], [30.7, 3714.0], [30.8, 3714.0], [30.9, 3714.0], [31.0, 3714.0], [31.1, 3714.0], [31.2, 3714.0], [31.3, 3718.0], [31.4, 3718.0], [31.5, 3718.0], [31.6, 3718.0], [31.7, 3718.0], [31.8, 3718.0], [31.9, 3718.0], [32.0, 3718.0], [32.1, 3718.0], [32.2, 3720.0], [32.3, 3720.0], [32.4, 3720.0], [32.5, 3720.0], [32.6, 3720.0], [32.7, 3720.0], [32.8, 3720.0], [32.9, 3720.0], [33.0, 3720.0], [33.1, 3727.0], [33.2, 3727.0], [33.3, 3727.0], [33.4, 3727.0], [33.5, 3727.0], [33.6, 3727.0], [33.7, 3727.0], [33.8, 3727.0], [33.9, 3727.0], [34.0, 3733.0], [34.1, 3733.0], [34.2, 3733.0], [34.3, 3733.0], [34.4, 3733.0], [34.5, 3733.0], [34.6, 3733.0], [34.7, 3733.0], [34.8, 3733.0], [34.9, 3739.0], [35.0, 3739.0], [35.1, 3739.0], [35.2, 3739.0], [35.3, 3739.0], [35.4, 3739.0], [35.5, 3739.0], [35.6, 3739.0], [35.7, 3739.0], [35.8, 3746.0], [35.9, 3746.0], [36.0, 3746.0], [36.1, 3746.0], [36.2, 3746.0], [36.3, 3746.0], [36.4, 3746.0], [36.5, 3746.0], [36.6, 3746.0], [36.7, 3760.0], [36.8, 3760.0], [36.9, 3760.0], [37.0, 3760.0], [37.1, 3760.0], [37.2, 3760.0], [37.3, 3760.0], [37.4, 3760.0], [37.5, 3760.0], [37.6, 3769.0], [37.7, 3769.0], [37.8, 3769.0], [37.9, 3769.0], [38.0, 3769.0], [38.1, 3769.0], [38.2, 3769.0], [38.3, 3769.0], [38.4, 3772.0], [38.5, 3772.0], [38.6, 3772.0], [38.7, 3772.0], [38.8, 3772.0], [38.9, 3772.0], [39.0, 3772.0], [39.1, 3772.0], [39.2, 3772.0], [39.3, 3784.0], [39.4, 3784.0], [39.5, 3784.0], [39.6, 3784.0], [39.7, 3784.0], [39.8, 3784.0], [39.9, 3784.0], [40.0, 3784.0], [40.1, 3784.0], [40.2, 3789.0], [40.3, 3789.0], [40.4, 3789.0], [40.5, 3789.0], [40.6, 3789.0], [40.7, 3789.0], [40.8, 3789.0], [40.9, 3789.0], [41.0, 3789.0], [41.1, 3802.0], [41.2, 3802.0], [41.3, 3802.0], [41.4, 3802.0], [41.5, 3802.0], [41.6, 3802.0], [41.7, 3802.0], [41.8, 3802.0], [41.9, 3802.0], [42.0, 3809.0], [42.1, 3809.0], [42.2, 3809.0], [42.3, 3809.0], [42.4, 3809.0], [42.5, 3809.0], [42.6, 3809.0], [42.7, 3809.0], [42.8, 3809.0], [42.9, 3822.0], [43.0, 3822.0], [43.1, 3822.0], [43.2, 3822.0], [43.3, 3822.0], [43.4, 3822.0], [43.5, 3822.0], [43.6, 3822.0], [43.7, 3822.0], [43.8, 3823.0], [43.9, 3823.0], [44.0, 3823.0], [44.1, 3823.0], [44.2, 3823.0], [44.3, 3823.0], [44.4, 3823.0], [44.5, 3823.0], [44.6, 3823.0], [44.7, 3829.0], [44.8, 3829.0], [44.9, 3829.0], [45.0, 3829.0], [45.1, 3829.0], [45.2, 3829.0], [45.3, 3829.0], [45.4, 3829.0], [45.5, 3829.0], [45.6, 3837.0], [45.7, 3837.0], [45.8, 3837.0], [45.9, 3837.0], [46.0, 3837.0], [46.1, 3837.0], [46.2, 3837.0], [46.3, 3837.0], [46.4, 3837.0], [46.5, 3839.0], [46.6, 3839.0], [46.7, 3839.0], [46.8, 3839.0], [46.9, 3839.0], [47.0, 3839.0], [47.1, 3839.0], [47.2, 3839.0], [47.3, 3839.0], [47.4, 3843.0], [47.5, 3843.0], [47.6, 3843.0], [47.7, 3843.0], [47.8, 3843.0], [47.9, 3843.0], [48.0, 3843.0], [48.1, 3843.0], [48.2, 3843.0], [48.3, 3844.0], [48.4, 3844.0], [48.5, 3844.0], [48.6, 3844.0], [48.7, 3844.0], [48.8, 3844.0], [48.9, 3844.0], [49.0, 3844.0], [49.1, 3844.0], [49.2, 3852.0], [49.3, 3852.0], [49.4, 3852.0], [49.5, 3852.0], [49.6, 3852.0], [49.7, 3852.0], [49.8, 3852.0], [49.9, 3852.0], [50.0, 3852.0], [50.1, 3855.0], [50.2, 3855.0], [50.3, 3855.0], [50.4, 3855.0], [50.5, 3855.0], [50.6, 3855.0], [50.7, 3855.0], [50.8, 3855.0], [50.9, 3863.0], [51.0, 3863.0], [51.1, 3863.0], [51.2, 3863.0], [51.3, 3863.0], [51.4, 3863.0], [51.5, 3863.0], [51.6, 3863.0], [51.7, 3863.0], [51.8, 3872.0], [51.9, 3872.0], [52.0, 3872.0], [52.1, 3872.0], [52.2, 3872.0], [52.3, 3872.0], [52.4, 3872.0], [52.5, 3872.0], [52.6, 3872.0], [52.7, 3881.0], [52.8, 3881.0], [52.9, 3881.0], [53.0, 3881.0], [53.1, 3881.0], [53.2, 3881.0], [53.3, 3881.0], [53.4, 3881.0], [53.5, 3881.0], [53.6, 3894.0], [53.7, 3894.0], [53.8, 3894.0], [53.9, 3894.0], [54.0, 3894.0], [54.1, 3894.0], [54.2, 3894.0], [54.3, 3894.0], [54.4, 3894.0], [54.5, 3918.0], [54.6, 3918.0], [54.7, 3918.0], [54.8, 3918.0], [54.9, 3918.0], [55.0, 3918.0], [55.1, 3918.0], [55.2, 3918.0], [55.3, 3918.0], [55.4, 3925.0], [55.5, 3925.0], [55.6, 3925.0], [55.7, 3925.0], [55.8, 3925.0], [55.9, 3925.0], [56.0, 3925.0], [56.1, 3925.0], [56.2, 3925.0], [56.3, 3942.0], [56.4, 3942.0], [56.5, 3942.0], [56.6, 3942.0], [56.7, 3942.0], [56.8, 3942.0], [56.9, 3942.0], [57.0, 3942.0], [57.1, 3942.0], [57.2, 3945.0], [57.3, 3945.0], [57.4, 3945.0], [57.5, 3945.0], [57.6, 3945.0], [57.7, 3945.0], [57.8, 3945.0], [57.9, 3945.0], [58.0, 3945.0], [58.1, 3950.0], [58.2, 3950.0], [58.3, 3950.0], [58.4, 3950.0], [58.5, 3950.0], [58.6, 3950.0], [58.7, 3950.0], [58.8, 3950.0], [58.9, 3950.0], [59.0, 3956.0], [59.1, 3956.0], [59.2, 3956.0], [59.3, 3956.0], [59.4, 3956.0], [59.5, 3956.0], [59.6, 3956.0], [59.7, 3956.0], [59.8, 3956.0], [59.9, 3984.0], [60.0, 3984.0], [60.1, 3984.0], [60.2, 3984.0], [60.3, 3984.0], [60.4, 3984.0], [60.5, 3984.0], [60.6, 3984.0], [60.7, 3984.0], [60.8, 3990.0], [60.9, 3990.0], [61.0, 3990.0], [61.1, 3990.0], [61.2, 3990.0], [61.3, 3990.0], [61.4, 3990.0], [61.5, 3990.0], [61.6, 3990.0], [61.7, 3992.0], [61.8, 3992.0], [61.9, 3992.0], [62.0, 3992.0], [62.1, 3992.0], [62.2, 3992.0], [62.3, 3992.0], [62.4, 3992.0], [62.5, 3992.0], [62.6, 3992.0], [62.7, 3992.0], [62.8, 3992.0], [62.9, 3992.0], [63.0, 3992.0], [63.1, 3992.0], [63.2, 3992.0], [63.3, 3992.0], [63.4, 3992.0], [63.5, 3992.0], [63.6, 3992.0], [63.7, 3992.0], [63.8, 3992.0], [63.9, 3992.0], [64.0, 3992.0], [64.1, 3992.0], [64.2, 3992.0], [64.3, 3994.0], [64.4, 3994.0], [64.5, 3994.0], [64.6, 3994.0], [64.7, 3994.0], [64.8, 3994.0], [64.9, 3994.0], [65.0, 3994.0], [65.1, 3994.0], [65.2, 3998.0], [65.3, 3998.0], [65.4, 3998.0], [65.5, 3998.0], [65.6, 3998.0], [65.7, 3998.0], [65.8, 3998.0], [65.9, 3998.0], [66.0, 3998.0], [66.1, 4007.0], [66.2, 4007.0], [66.3, 4007.0], [66.4, 4007.0], [66.5, 4007.0], [66.6, 4007.0], [66.7, 4007.0], [66.8, 4007.0], [66.9, 4007.0], [67.0, 4009.0], [67.1, 4009.0], [67.2, 4009.0], [67.3, 4009.0], [67.4, 4009.0], [67.5, 4009.0], [67.6, 4009.0], [67.7, 4009.0], [67.8, 4009.0], [67.9, 4025.0], [68.0, 4025.0], [68.1, 4025.0], [68.2, 4025.0], [68.3, 4025.0], [68.4, 4025.0], [68.5, 4025.0], [68.6, 4025.0], [68.7, 4025.0], [68.8, 4042.0], [68.9, 4042.0], [69.0, 4042.0], [69.1, 4042.0], [69.2, 4042.0], [69.3, 4042.0], [69.4, 4042.0], [69.5, 4042.0], [69.6, 4042.0], [69.7, 4044.0], [69.8, 4044.0], [69.9, 4044.0], [70.0, 4044.0], [70.1, 4044.0], [70.2, 4044.0], [70.3, 4044.0], [70.4, 4044.0], [70.5, 4044.0], [70.6, 4053.0], [70.7, 4053.0], [70.8, 4053.0], [70.9, 4053.0], [71.0, 4053.0], [71.1, 4053.0], [71.2, 4053.0], [71.3, 4053.0], [71.4, 4053.0], [71.5, 4058.0], [71.6, 4058.0], [71.7, 4058.0], [71.8, 4058.0], [71.9, 4058.0], [72.0, 4058.0], [72.1, 4058.0], [72.2, 4058.0], [72.3, 4058.0], [72.4, 4058.0], [72.5, 4058.0], [72.6, 4058.0], [72.7, 4058.0], [72.8, 4058.0], [72.9, 4058.0], [73.0, 4058.0], [73.1, 4058.0], [73.2, 4058.0], [73.3, 4123.0], [73.4, 4123.0], [73.5, 4123.0], [73.6, 4123.0], [73.7, 4123.0], [73.8, 4123.0], [73.9, 4123.0], [74.0, 4123.0], [74.1, 4123.0], [74.2, 4134.0], [74.3, 4134.0], [74.4, 4134.0], [74.5, 4134.0], [74.6, 4134.0], [74.7, 4134.0], [74.8, 4134.0], [74.9, 4134.0], [75.0, 4134.0], [75.1, 4152.0], [75.2, 4152.0], [75.3, 4152.0], [75.4, 4152.0], [75.5, 4152.0], [75.6, 4152.0], [75.7, 4152.0], [75.8, 4152.0], [75.9, 4155.0], [76.0, 4155.0], [76.1, 4155.0], [76.2, 4155.0], [76.3, 4155.0], [76.4, 4155.0], [76.5, 4155.0], [76.6, 4155.0], [76.7, 4155.0], [76.8, 4174.0], [76.9, 4174.0], [77.0, 4174.0], [77.1, 4174.0], [77.2, 4174.0], [77.3, 4174.0], [77.4, 4174.0], [77.5, 4174.0], [77.6, 4174.0], [77.7, 4175.0], [77.8, 4175.0], [77.9, 4175.0], [78.0, 4175.0], [78.1, 4175.0], [78.2, 4175.0], [78.3, 4175.0], [78.4, 4175.0], [78.5, 4175.0], [78.6, 4176.0], [78.7, 4176.0], [78.8, 4176.0], [78.9, 4176.0], [79.0, 4176.0], [79.1, 4176.0], [79.2, 4176.0], [79.3, 4176.0], [79.4, 4176.0], [79.5, 4179.0], [79.6, 4179.0], [79.7, 4179.0], [79.8, 4179.0], [79.9, 4179.0], [80.0, 4179.0], [80.1, 4179.0], [80.2, 4179.0], [80.3, 4179.0], [80.4, 4202.0], [80.5, 4202.0], [80.6, 4202.0], [80.7, 4202.0], [80.8, 4202.0], [80.9, 4202.0], [81.0, 4202.0], [81.1, 4202.0], [81.2, 4202.0], [81.3, 4212.0], [81.4, 4212.0], [81.5, 4212.0], [81.6, 4212.0], [81.7, 4212.0], [81.8, 4212.0], [81.9, 4212.0], [82.0, 4212.0], [82.1, 4212.0], [82.2, 4247.0], [82.3, 4247.0], [82.4, 4247.0], [82.5, 4247.0], [82.6, 4247.0], [82.7, 4247.0], [82.8, 4247.0], [82.9, 4247.0], [83.0, 4247.0], [83.1, 4258.0], [83.2, 4258.0], [83.3, 4258.0], [83.4, 4258.0], [83.5, 4258.0], [83.6, 4258.0], [83.7, 4258.0], [83.8, 4258.0], [83.9, 4258.0], [84.0, 4285.0], [84.1, 4285.0], [84.2, 4285.0], [84.3, 4285.0], [84.4, 4285.0], [84.5, 4285.0], [84.6, 4285.0], [84.7, 4285.0], [84.8, 4285.0], [84.9, 4368.0], [85.0, 4368.0], [85.1, 4368.0], [85.2, 4368.0], [85.3, 4368.0], [85.4, 4368.0], [85.5, 4368.0], [85.6, 4368.0], [85.7, 4368.0], [85.8, 4400.0], [85.9, 4400.0], [86.0, 4400.0], [86.1, 4400.0], [86.2, 4400.0], [86.3, 4400.0], [86.4, 4400.0], [86.5, 4400.0], [86.6, 4400.0], [86.7, 4402.0], [86.8, 4402.0], [86.9, 4402.0], [87.0, 4402.0], [87.1, 4402.0], [87.2, 4402.0], [87.3, 4402.0], [87.4, 4402.0], [87.5, 4431.0], [87.6, 4431.0], [87.7, 4431.0], [87.8, 4431.0], [87.9, 4431.0], [88.0, 4431.0], [88.1, 4431.0], [88.2, 4431.0], [88.3, 4431.0], [88.4, 4524.0], [88.5, 4524.0], [88.6, 4524.0], [88.7, 4524.0], [88.8, 4524.0], [88.9, 4524.0], [89.0, 4524.0], [89.1, 4524.0], [89.2, 4524.0], [89.3, 4589.0], [89.4, 4589.0], [89.5, 4589.0], [89.6, 4589.0], [89.7, 4589.0], [89.8, 4589.0], [89.9, 4589.0], [90.0, 4589.0], [90.1, 4589.0], [90.2, 4590.0], [90.3, 4590.0], [90.4, 4590.0], [90.5, 4590.0], [90.6, 4590.0], [90.7, 4590.0], [90.8, 4590.0], [90.9, 4590.0], [91.0, 4590.0], [91.1, 4671.0], [91.2, 4671.0], [91.3, 4671.0], [91.4, 4671.0], [91.5, 4671.0], [91.6, 4671.0], [91.7, 4671.0], [91.8, 4671.0], [91.9, 4671.0], [92.0, 4698.0], [92.1, 4698.0], [92.2, 4698.0], [92.3, 4698.0], [92.4, 4698.0], [92.5, 4698.0], [92.6, 4698.0], [92.7, 4698.0], [92.8, 4698.0], [92.9, 38242.0], [93.0, 38242.0], [93.1, 38242.0], [93.2, 38242.0], [93.3, 38242.0], [93.4, 38242.0], [93.5, 38242.0], [93.6, 38242.0], [93.7, 38242.0], [93.8, 38469.0], [93.9, 38469.0], [94.0, 38469.0], [94.1, 38469.0], [94.2, 38469.0], [94.3, 38469.0], [94.4, 38469.0], [94.5, 38469.0], [94.6, 38469.0], [94.7, 38813.0], [94.8, 38813.0], [94.9, 38813.0], [95.0, 38813.0], [95.1, 38813.0], [95.2, 38813.0], [95.3, 38813.0], [95.4, 38813.0], [95.5, 38813.0], [95.6, 39056.0], [95.7, 39056.0], [95.8, 39056.0], [95.9, 39056.0], [96.0, 39056.0], [96.1, 39056.0], [96.2, 39056.0], [96.3, 39056.0], [96.4, 39056.0], [96.5, 39183.0], [96.6, 39183.0], [96.7, 39183.0], [96.8, 39183.0], [96.9, 39183.0], [97.0, 39183.0], [97.1, 39183.0], [97.2, 39183.0], [97.3, 39183.0], [97.4, 40358.0], [97.5, 40358.0], [97.6, 40358.0], [97.7, 40358.0], [97.8, 40358.0], [97.9, 40358.0], [98.0, 40358.0], [98.1, 40358.0], [98.2, 40358.0], [98.3, 40427.0], [98.4, 40427.0], [98.5, 40427.0], [98.6, 40427.0], [98.7, 40427.0], [98.8, 40427.0], [98.9, 40427.0], [99.0, 40427.0], [99.1, 40427.0], [99.2, 40465.0], [99.3, 40465.0], [99.4, 40465.0], [99.5, 40465.0], [99.6, 40465.0], [99.7, 40465.0], [99.8, 40465.0], [99.9, 40465.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 1700.0, "maxY": 15.0, "series": [{"data": [[1700.0, 2.0], [1800.0, 9.0], [1900.0, 7.0], [2000.0, 5.0], [2100.0, 1.0], [2300.0, 1.0], [38200.0, 1.0], [38400.0, 1.0], [38800.0, 1.0], [2400.0, 1.0], [39000.0, 1.0], [39100.0, 1.0], [40400.0, 2.0], [40300.0, 1.0], [2600.0, 2.0], [2900.0, 1.0], [3400.0, 1.0], [3500.0, 1.0], [3700.0, 12.0], [3600.0, 3.0], [3800.0, 15.0], [3900.0, 13.0], [4000.0, 8.0], [4200.0, 5.0], [4100.0, 8.0], [4300.0, 1.0], [4500.0, 3.0], [4400.0, 3.0], [4600.0, 2.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 40400.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 112.0, "minX": 2.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 112.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 112.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.58878504672897, "minX": 1.60435542E12, "maxY": 10.0, "series": [{"data": [[1.60435542E12, 10.0], [1.60435548E12, 9.58878504672897]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60435548E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 2939.0, "minX": 1.0, "maxY": 6205.427184466021, "series": [{"data": [[8.0, 3567.0], [4.0, 3784.0], [2.0, 3822.0], [1.0, 4402.0], [9.0, 3727.0], [10.0, 6205.427184466021], [5.0, 4123.0], [6.0, 2939.0], [3.0, 4671.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.607142857142858, 6015.723214285715]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 61.666666666666664, "minX": 1.60435542E12, "maxY": 349728.13333333336, "series": [{"data": [[1.60435542E12, 8305.15], [1.60435548E12, 349728.13333333336]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60435542E12, 61.666666666666664], [1.60435548E12, 1419.2666666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60435548E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 3563.6, "minX": 1.60435542E12, "maxY": 6130.308411214952, "series": [{"data": [[1.60435542E12, 3563.6], [1.60435548E12, 6130.308411214952]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60435548E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 3560.8, "minX": 1.60435542E12, "maxY": 6127.457943925233, "series": [{"data": [[1.60435542E12, 3560.8], [1.60435548E12, 6127.457943925233]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60435548E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.785046728971963, "minX": 1.60435542E12, "maxY": 8.4, "series": [{"data": [[1.60435542E12, 8.4], [1.60435548E12, 0.785046728971963]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60435548E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 1782.0, "minX": 1.60435542E12, "maxY": 40465.0, "series": [{"data": [[1.60435542E12, 3894.0], [1.60435548E12, 40465.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60435542E12, 2345.0], [1.60435548E12, 1782.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60435542E12, 2345.0], [1.60435548E12, 1783.107200164795]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60435542E12, 2345.0], [1.60435548E12, 1782.4159997940064]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60435542E12, 2345.0], [1.60435548E12, 1782.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60435542E12, 3863.0], [1.60435548E12, 3852.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60435548E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 3737.0, "minX": 1.0, "maxY": 3950.0, "series": [{"data": [[1.0, 3950.0], [4.0, 3886.5], [2.0, 3820.5], [5.0, 3737.0], [3.0, 3839.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 5.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 3735.5, "minX": 1.0, "maxY": 3948.0, "series": [{"data": [[1.0, 3948.0], [4.0, 3884.5], [2.0, 3816.5], [5.0, 3735.5], [3.0, 3836.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 5.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.25, "minX": 1.60435542E12, "maxY": 1.6166666666666667, "series": [{"data": [[1.60435542E12, 0.25], [1.60435548E12, 1.6166666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60435548E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.08333333333333333, "minX": 1.60435542E12, "maxY": 1.7833333333333334, "series": [{"data": [[1.60435542E12, 0.08333333333333333], [1.60435548E12, 1.7833333333333334]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60435548E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.08333333333333333, "minX": 1.60435542E12, "maxY": 1.7833333333333334, "series": [{"data": [[1.60435542E12, 0.08333333333333333], [1.60435548E12, 1.7833333333333334]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60435548E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.08333333333333333, "minX": 1.60435542E12, "maxY": 1.7833333333333334, "series": [{"data": [[1.60435542E12, 0.08333333333333333], [1.60435548E12, 1.7833333333333334]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60435548E12, "title": "Total Transactions Per Second"}},
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

