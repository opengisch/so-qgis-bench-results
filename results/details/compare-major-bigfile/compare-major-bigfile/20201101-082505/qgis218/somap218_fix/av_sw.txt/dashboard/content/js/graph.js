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
        data: {"result": {"minY": 251.0, "minX": 0.0, "maxY": 1263.0, "series": [{"data": [[0.0, 251.0], [0.1, 251.0], [0.2, 251.0], [0.3, 251.0], [0.4, 251.0], [0.5, 251.0], [0.6, 251.0], [0.7, 251.0], [0.8, 251.0], [0.9, 251.0], [1.0, 251.0], [1.1, 251.0], [1.2, 251.0], [1.3, 251.0], [1.4, 251.0], [1.5, 251.0], [1.6, 251.0], [1.7, 251.0], [1.8, 251.0], [1.9, 251.0], [2.0, 251.0], [2.1, 251.0], [2.2, 251.0], [2.3, 251.0], [2.4, 251.0], [2.5, 251.0], [2.6, 251.0], [2.7, 251.0], [2.8, 251.0], [2.9, 251.0], [3.0, 251.0], [3.1, 251.0], [3.2, 251.0], [3.3, 251.0], [3.4, 251.0], [3.5, 251.0], [3.6, 251.0], [3.7, 251.0], [3.8, 251.0], [3.9, 251.0], [4.0, 251.0], [4.1, 251.0], [4.2, 251.0], [4.3, 251.0], [4.4, 251.0], [4.5, 251.0], [4.6, 251.0], [4.7, 251.0], [4.8, 251.0], [4.9, 251.0], [5.0, 254.0], [5.1, 254.0], [5.2, 254.0], [5.3, 254.0], [5.4, 254.0], [5.5, 254.0], [5.6, 254.0], [5.7, 254.0], [5.8, 254.0], [5.9, 254.0], [6.0, 254.0], [6.1, 254.0], [6.2, 254.0], [6.3, 254.0], [6.4, 254.0], [6.5, 254.0], [6.6, 254.0], [6.7, 254.0], [6.8, 254.0], [6.9, 254.0], [7.0, 254.0], [7.1, 254.0], [7.2, 254.0], [7.3, 254.0], [7.4, 254.0], [7.5, 254.0], [7.6, 254.0], [7.7, 254.0], [7.8, 254.0], [7.9, 254.0], [8.0, 254.0], [8.1, 254.0], [8.2, 254.0], [8.3, 254.0], [8.4, 254.0], [8.5, 254.0], [8.6, 254.0], [8.7, 254.0], [8.8, 254.0], [8.9, 254.0], [9.0, 254.0], [9.1, 254.0], [9.2, 254.0], [9.3, 254.0], [9.4, 254.0], [9.5, 254.0], [9.6, 254.0], [9.7, 254.0], [9.8, 254.0], [9.9, 254.0], [10.0, 271.0], [10.1, 271.0], [10.2, 271.0], [10.3, 271.0], [10.4, 271.0], [10.5, 271.0], [10.6, 271.0], [10.7, 271.0], [10.8, 271.0], [10.9, 271.0], [11.0, 271.0], [11.1, 271.0], [11.2, 271.0], [11.3, 271.0], [11.4, 271.0], [11.5, 271.0], [11.6, 271.0], [11.7, 271.0], [11.8, 271.0], [11.9, 271.0], [12.0, 271.0], [12.1, 271.0], [12.2, 271.0], [12.3, 271.0], [12.4, 271.0], [12.5, 271.0], [12.6, 271.0], [12.7, 271.0], [12.8, 271.0], [12.9, 271.0], [13.0, 271.0], [13.1, 271.0], [13.2, 271.0], [13.3, 271.0], [13.4, 271.0], [13.5, 271.0], [13.6, 271.0], [13.7, 271.0], [13.8, 271.0], [13.9, 271.0], [14.0, 271.0], [14.1, 271.0], [14.2, 271.0], [14.3, 271.0], [14.4, 271.0], [14.5, 271.0], [14.6, 271.0], [14.7, 271.0], [14.8, 271.0], [14.9, 271.0], [15.0, 282.0], [15.1, 282.0], [15.2, 282.0], [15.3, 282.0], [15.4, 282.0], [15.5, 282.0], [15.6, 282.0], [15.7, 282.0], [15.8, 282.0], [15.9, 282.0], [16.0, 282.0], [16.1, 282.0], [16.2, 282.0], [16.3, 282.0], [16.4, 282.0], [16.5, 282.0], [16.6, 282.0], [16.7, 282.0], [16.8, 282.0], [16.9, 282.0], [17.0, 282.0], [17.1, 282.0], [17.2, 282.0], [17.3, 282.0], [17.4, 282.0], [17.5, 282.0], [17.6, 282.0], [17.7, 282.0], [17.8, 282.0], [17.9, 282.0], [18.0, 282.0], [18.1, 282.0], [18.2, 282.0], [18.3, 282.0], [18.4, 282.0], [18.5, 282.0], [18.6, 282.0], [18.7, 282.0], [18.8, 282.0], [18.9, 282.0], [19.0, 282.0], [19.1, 282.0], [19.2, 282.0], [19.3, 282.0], [19.4, 282.0], [19.5, 282.0], [19.6, 282.0], [19.7, 282.0], [19.8, 282.0], [19.9, 282.0], [20.0, 326.0], [20.1, 326.0], [20.2, 326.0], [20.3, 326.0], [20.4, 326.0], [20.5, 326.0], [20.6, 326.0], [20.7, 326.0], [20.8, 326.0], [20.9, 326.0], [21.0, 326.0], [21.1, 326.0], [21.2, 326.0], [21.3, 326.0], [21.4, 326.0], [21.5, 326.0], [21.6, 326.0], [21.7, 326.0], [21.8, 326.0], [21.9, 326.0], [22.0, 326.0], [22.1, 326.0], [22.2, 326.0], [22.3, 326.0], [22.4, 326.0], [22.5, 326.0], [22.6, 326.0], [22.7, 326.0], [22.8, 326.0], [22.9, 326.0], [23.0, 326.0], [23.1, 326.0], [23.2, 326.0], [23.3, 326.0], [23.4, 326.0], [23.5, 326.0], [23.6, 326.0], [23.7, 326.0], [23.8, 326.0], [23.9, 326.0], [24.0, 326.0], [24.1, 326.0], [24.2, 326.0], [24.3, 326.0], [24.4, 326.0], [24.5, 326.0], [24.6, 326.0], [24.7, 326.0], [24.8, 326.0], [24.9, 326.0], [25.0, 327.0], [25.1, 327.0], [25.2, 327.0], [25.3, 327.0], [25.4, 327.0], [25.5, 327.0], [25.6, 327.0], [25.7, 327.0], [25.8, 327.0], [25.9, 327.0], [26.0, 327.0], [26.1, 327.0], [26.2, 327.0], [26.3, 327.0], [26.4, 327.0], [26.5, 327.0], [26.6, 327.0], [26.7, 327.0], [26.8, 327.0], [26.9, 327.0], [27.0, 327.0], [27.1, 327.0], [27.2, 327.0], [27.3, 327.0], [27.4, 327.0], [27.5, 327.0], [27.6, 327.0], [27.7, 327.0], [27.8, 327.0], [27.9, 327.0], [28.0, 327.0], [28.1, 327.0], [28.2, 327.0], [28.3, 327.0], [28.4, 327.0], [28.5, 327.0], [28.6, 327.0], [28.7, 327.0], [28.8, 327.0], [28.9, 327.0], [29.0, 327.0], [29.1, 327.0], [29.2, 327.0], [29.3, 327.0], [29.4, 327.0], [29.5, 327.0], [29.6, 327.0], [29.7, 327.0], [29.8, 327.0], [29.9, 327.0], [30.0, 350.0], [30.1, 350.0], [30.2, 350.0], [30.3, 350.0], [30.4, 350.0], [30.5, 350.0], [30.6, 350.0], [30.7, 350.0], [30.8, 350.0], [30.9, 350.0], [31.0, 350.0], [31.1, 350.0], [31.2, 350.0], [31.3, 350.0], [31.4, 350.0], [31.5, 350.0], [31.6, 350.0], [31.7, 350.0], [31.8, 350.0], [31.9, 350.0], [32.0, 350.0], [32.1, 350.0], [32.2, 350.0], [32.3, 350.0], [32.4, 350.0], [32.5, 350.0], [32.6, 350.0], [32.7, 350.0], [32.8, 350.0], [32.9, 350.0], [33.0, 350.0], [33.1, 350.0], [33.2, 350.0], [33.3, 350.0], [33.4, 350.0], [33.5, 350.0], [33.6, 350.0], [33.7, 350.0], [33.8, 350.0], [33.9, 350.0], [34.0, 350.0], [34.1, 350.0], [34.2, 350.0], [34.3, 350.0], [34.4, 350.0], [34.5, 350.0], [34.6, 350.0], [34.7, 350.0], [34.8, 350.0], [34.9, 350.0], [35.0, 390.0], [35.1, 390.0], [35.2, 390.0], [35.3, 390.0], [35.4, 390.0], [35.5, 390.0], [35.6, 390.0], [35.7, 390.0], [35.8, 390.0], [35.9, 390.0], [36.0, 390.0], [36.1, 390.0], [36.2, 390.0], [36.3, 390.0], [36.4, 390.0], [36.5, 390.0], [36.6, 390.0], [36.7, 390.0], [36.8, 390.0], [36.9, 390.0], [37.0, 390.0], [37.1, 390.0], [37.2, 390.0], [37.3, 390.0], [37.4, 390.0], [37.5, 390.0], [37.6, 390.0], [37.7, 390.0], [37.8, 390.0], [37.9, 390.0], [38.0, 390.0], [38.1, 390.0], [38.2, 390.0], [38.3, 390.0], [38.4, 390.0], [38.5, 390.0], [38.6, 390.0], [38.7, 390.0], [38.8, 390.0], [38.9, 390.0], [39.0, 390.0], [39.1, 390.0], [39.2, 390.0], [39.3, 390.0], [39.4, 390.0], [39.5, 390.0], [39.6, 390.0], [39.7, 390.0], [39.8, 390.0], [39.9, 390.0], [40.0, 507.0], [40.1, 507.0], [40.2, 507.0], [40.3, 507.0], [40.4, 507.0], [40.5, 507.0], [40.6, 507.0], [40.7, 507.0], [40.8, 507.0], [40.9, 507.0], [41.0, 507.0], [41.1, 507.0], [41.2, 507.0], [41.3, 507.0], [41.4, 507.0], [41.5, 507.0], [41.6, 507.0], [41.7, 507.0], [41.8, 507.0], [41.9, 507.0], [42.0, 507.0], [42.1, 507.0], [42.2, 507.0], [42.3, 507.0], [42.4, 507.0], [42.5, 507.0], [42.6, 507.0], [42.7, 507.0], [42.8, 507.0], [42.9, 507.0], [43.0, 507.0], [43.1, 507.0], [43.2, 507.0], [43.3, 507.0], [43.4, 507.0], [43.5, 507.0], [43.6, 507.0], [43.7, 507.0], [43.8, 507.0], [43.9, 507.0], [44.0, 507.0], [44.1, 507.0], [44.2, 507.0], [44.3, 507.0], [44.4, 507.0], [44.5, 507.0], [44.6, 507.0], [44.7, 507.0], [44.8, 507.0], [44.9, 507.0], [45.0, 604.0], [45.1, 604.0], [45.2, 604.0], [45.3, 604.0], [45.4, 604.0], [45.5, 604.0], [45.6, 604.0], [45.7, 604.0], [45.8, 604.0], [45.9, 604.0], [46.0, 604.0], [46.1, 604.0], [46.2, 604.0], [46.3, 604.0], [46.4, 604.0], [46.5, 604.0], [46.6, 604.0], [46.7, 604.0], [46.8, 604.0], [46.9, 604.0], [47.0, 604.0], [47.1, 604.0], [47.2, 604.0], [47.3, 604.0], [47.4, 604.0], [47.5, 604.0], [47.6, 604.0], [47.7, 604.0], [47.8, 604.0], [47.9, 604.0], [48.0, 604.0], [48.1, 604.0], [48.2, 604.0], [48.3, 604.0], [48.4, 604.0], [48.5, 604.0], [48.6, 604.0], [48.7, 604.0], [48.8, 604.0], [48.9, 604.0], [49.0, 604.0], [49.1, 604.0], [49.2, 604.0], [49.3, 604.0], [49.4, 604.0], [49.5, 604.0], [49.6, 604.0], [49.7, 604.0], [49.8, 604.0], [49.9, 604.0], [50.0, 834.0], [50.1, 834.0], [50.2, 834.0], [50.3, 834.0], [50.4, 834.0], [50.5, 834.0], [50.6, 834.0], [50.7, 834.0], [50.8, 834.0], [50.9, 834.0], [51.0, 834.0], [51.1, 834.0], [51.2, 834.0], [51.3, 834.0], [51.4, 834.0], [51.5, 834.0], [51.6, 834.0], [51.7, 834.0], [51.8, 834.0], [51.9, 834.0], [52.0, 834.0], [52.1, 834.0], [52.2, 834.0], [52.3, 834.0], [52.4, 834.0], [52.5, 834.0], [52.6, 834.0], [52.7, 834.0], [52.8, 834.0], [52.9, 834.0], [53.0, 834.0], [53.1, 834.0], [53.2, 834.0], [53.3, 834.0], [53.4, 834.0], [53.5, 834.0], [53.6, 834.0], [53.7, 834.0], [53.8, 834.0], [53.9, 834.0], [54.0, 834.0], [54.1, 834.0], [54.2, 834.0], [54.3, 834.0], [54.4, 834.0], [54.5, 834.0], [54.6, 834.0], [54.7, 834.0], [54.8, 834.0], [54.9, 834.0], [55.0, 837.0], [55.1, 837.0], [55.2, 837.0], [55.3, 837.0], [55.4, 837.0], [55.5, 837.0], [55.6, 837.0], [55.7, 837.0], [55.8, 837.0], [55.9, 837.0], [56.0, 837.0], [56.1, 837.0], [56.2, 837.0], [56.3, 837.0], [56.4, 837.0], [56.5, 837.0], [56.6, 837.0], [56.7, 837.0], [56.8, 837.0], [56.9, 837.0], [57.0, 837.0], [57.1, 837.0], [57.2, 837.0], [57.3, 837.0], [57.4, 837.0], [57.5, 837.0], [57.6, 837.0], [57.7, 837.0], [57.8, 837.0], [57.9, 837.0], [58.0, 837.0], [58.1, 837.0], [58.2, 837.0], [58.3, 837.0], [58.4, 837.0], [58.5, 837.0], [58.6, 837.0], [58.7, 837.0], [58.8, 837.0], [58.9, 837.0], [59.0, 837.0], [59.1, 837.0], [59.2, 837.0], [59.3, 837.0], [59.4, 837.0], [59.5, 837.0], [59.6, 837.0], [59.7, 837.0], [59.8, 837.0], [59.9, 837.0], [60.0, 847.0], [60.1, 847.0], [60.2, 847.0], [60.3, 847.0], [60.4, 847.0], [60.5, 847.0], [60.6, 847.0], [60.7, 847.0], [60.8, 847.0], [60.9, 847.0], [61.0, 847.0], [61.1, 847.0], [61.2, 847.0], [61.3, 847.0], [61.4, 847.0], [61.5, 847.0], [61.6, 847.0], [61.7, 847.0], [61.8, 847.0], [61.9, 847.0], [62.0, 847.0], [62.1, 847.0], [62.2, 847.0], [62.3, 847.0], [62.4, 847.0], [62.5, 847.0], [62.6, 847.0], [62.7, 847.0], [62.8, 847.0], [62.9, 847.0], [63.0, 847.0], [63.1, 847.0], [63.2, 847.0], [63.3, 847.0], [63.4, 847.0], [63.5, 847.0], [63.6, 847.0], [63.7, 847.0], [63.8, 847.0], [63.9, 847.0], [64.0, 847.0], [64.1, 847.0], [64.2, 847.0], [64.3, 847.0], [64.4, 847.0], [64.5, 847.0], [64.6, 847.0], [64.7, 847.0], [64.8, 847.0], [64.9, 847.0], [65.0, 870.0], [65.1, 870.0], [65.2, 870.0], [65.3, 870.0], [65.4, 870.0], [65.5, 870.0], [65.6, 870.0], [65.7, 870.0], [65.8, 870.0], [65.9, 870.0], [66.0, 870.0], [66.1, 870.0], [66.2, 870.0], [66.3, 870.0], [66.4, 870.0], [66.5, 870.0], [66.6, 870.0], [66.7, 870.0], [66.8, 870.0], [66.9, 870.0], [67.0, 870.0], [67.1, 870.0], [67.2, 870.0], [67.3, 870.0], [67.4, 870.0], [67.5, 870.0], [67.6, 870.0], [67.7, 870.0], [67.8, 870.0], [67.9, 870.0], [68.0, 870.0], [68.1, 870.0], [68.2, 870.0], [68.3, 870.0], [68.4, 870.0], [68.5, 870.0], [68.6, 870.0], [68.7, 870.0], [68.8, 870.0], [68.9, 870.0], [69.0, 870.0], [69.1, 870.0], [69.2, 870.0], [69.3, 870.0], [69.4, 870.0], [69.5, 870.0], [69.6, 870.0], [69.7, 870.0], [69.8, 870.0], [69.9, 870.0], [70.0, 956.0], [70.1, 956.0], [70.2, 956.0], [70.3, 956.0], [70.4, 956.0], [70.5, 956.0], [70.6, 956.0], [70.7, 956.0], [70.8, 956.0], [70.9, 956.0], [71.0, 956.0], [71.1, 956.0], [71.2, 956.0], [71.3, 956.0], [71.4, 956.0], [71.5, 956.0], [71.6, 956.0], [71.7, 956.0], [71.8, 956.0], [71.9, 956.0], [72.0, 956.0], [72.1, 956.0], [72.2, 956.0], [72.3, 956.0], [72.4, 956.0], [72.5, 956.0], [72.6, 956.0], [72.7, 956.0], [72.8, 956.0], [72.9, 956.0], [73.0, 956.0], [73.1, 956.0], [73.2, 956.0], [73.3, 956.0], [73.4, 956.0], [73.5, 956.0], [73.6, 956.0], [73.7, 956.0], [73.8, 956.0], [73.9, 956.0], [74.0, 956.0], [74.1, 956.0], [74.2, 956.0], [74.3, 956.0], [74.4, 956.0], [74.5, 956.0], [74.6, 956.0], [74.7, 956.0], [74.8, 956.0], [74.9, 956.0], [75.0, 995.0], [75.1, 995.0], [75.2, 995.0], [75.3, 995.0], [75.4, 995.0], [75.5, 995.0], [75.6, 995.0], [75.7, 995.0], [75.8, 995.0], [75.9, 995.0], [76.0, 995.0], [76.1, 995.0], [76.2, 995.0], [76.3, 995.0], [76.4, 995.0], [76.5, 995.0], [76.6, 995.0], [76.7, 995.0], [76.8, 995.0], [76.9, 995.0], [77.0, 995.0], [77.1, 995.0], [77.2, 995.0], [77.3, 995.0], [77.4, 995.0], [77.5, 995.0], [77.6, 995.0], [77.7, 995.0], [77.8, 995.0], [77.9, 995.0], [78.0, 995.0], [78.1, 995.0], [78.2, 995.0], [78.3, 995.0], [78.4, 995.0], [78.5, 995.0], [78.6, 995.0], [78.7, 995.0], [78.8, 995.0], [78.9, 995.0], [79.0, 995.0], [79.1, 995.0], [79.2, 995.0], [79.3, 995.0], [79.4, 995.0], [79.5, 995.0], [79.6, 995.0], [79.7, 995.0], [79.8, 995.0], [79.9, 995.0], [80.0, 1066.0], [80.1, 1066.0], [80.2, 1066.0], [80.3, 1066.0], [80.4, 1066.0], [80.5, 1066.0], [80.6, 1066.0], [80.7, 1066.0], [80.8, 1066.0], [80.9, 1066.0], [81.0, 1066.0], [81.1, 1066.0], [81.2, 1066.0], [81.3, 1066.0], [81.4, 1066.0], [81.5, 1066.0], [81.6, 1066.0], [81.7, 1066.0], [81.8, 1066.0], [81.9, 1066.0], [82.0, 1066.0], [82.1, 1066.0], [82.2, 1066.0], [82.3, 1066.0], [82.4, 1066.0], [82.5, 1066.0], [82.6, 1066.0], [82.7, 1066.0], [82.8, 1066.0], [82.9, 1066.0], [83.0, 1066.0], [83.1, 1066.0], [83.2, 1066.0], [83.3, 1066.0], [83.4, 1066.0], [83.5, 1066.0], [83.6, 1066.0], [83.7, 1066.0], [83.8, 1066.0], [83.9, 1066.0], [84.0, 1066.0], [84.1, 1066.0], [84.2, 1066.0], [84.3, 1066.0], [84.4, 1066.0], [84.5, 1066.0], [84.6, 1066.0], [84.7, 1066.0], [84.8, 1066.0], [84.9, 1066.0], [85.0, 1227.0], [85.1, 1227.0], [85.2, 1227.0], [85.3, 1227.0], [85.4, 1227.0], [85.5, 1227.0], [85.6, 1227.0], [85.7, 1227.0], [85.8, 1227.0], [85.9, 1227.0], [86.0, 1227.0], [86.1, 1227.0], [86.2, 1227.0], [86.3, 1227.0], [86.4, 1227.0], [86.5, 1227.0], [86.6, 1227.0], [86.7, 1227.0], [86.8, 1227.0], [86.9, 1227.0], [87.0, 1227.0], [87.1, 1227.0], [87.2, 1227.0], [87.3, 1227.0], [87.4, 1227.0], [87.5, 1227.0], [87.6, 1227.0], [87.7, 1227.0], [87.8, 1227.0], [87.9, 1227.0], [88.0, 1227.0], [88.1, 1227.0], [88.2, 1227.0], [88.3, 1227.0], [88.4, 1227.0], [88.5, 1227.0], [88.6, 1227.0], [88.7, 1227.0], [88.8, 1227.0], [88.9, 1227.0], [89.0, 1227.0], [89.1, 1227.0], [89.2, 1227.0], [89.3, 1227.0], [89.4, 1227.0], [89.5, 1227.0], [89.6, 1227.0], [89.7, 1227.0], [89.8, 1227.0], [89.9, 1227.0], [90.0, 1258.0], [90.1, 1258.0], [90.2, 1258.0], [90.3, 1258.0], [90.4, 1258.0], [90.5, 1258.0], [90.6, 1258.0], [90.7, 1258.0], [90.8, 1258.0], [90.9, 1258.0], [91.0, 1258.0], [91.1, 1258.0], [91.2, 1258.0], [91.3, 1258.0], [91.4, 1258.0], [91.5, 1258.0], [91.6, 1258.0], [91.7, 1258.0], [91.8, 1258.0], [91.9, 1258.0], [92.0, 1258.0], [92.1, 1258.0], [92.2, 1258.0], [92.3, 1258.0], [92.4, 1258.0], [92.5, 1258.0], [92.6, 1258.0], [92.7, 1258.0], [92.8, 1258.0], [92.9, 1258.0], [93.0, 1258.0], [93.1, 1258.0], [93.2, 1258.0], [93.3, 1258.0], [93.4, 1258.0], [93.5, 1258.0], [93.6, 1258.0], [93.7, 1258.0], [93.8, 1258.0], [93.9, 1258.0], [94.0, 1258.0], [94.1, 1258.0], [94.2, 1258.0], [94.3, 1258.0], [94.4, 1258.0], [94.5, 1258.0], [94.6, 1258.0], [94.7, 1258.0], [94.8, 1258.0], [94.9, 1258.0], [95.0, 1263.0], [95.1, 1263.0], [95.2, 1263.0], [95.3, 1263.0], [95.4, 1263.0], [95.5, 1263.0], [95.6, 1263.0], [95.7, 1263.0], [95.8, 1263.0], [95.9, 1263.0], [96.0, 1263.0], [96.1, 1263.0], [96.2, 1263.0], [96.3, 1263.0], [96.4, 1263.0], [96.5, 1263.0], [96.6, 1263.0], [96.7, 1263.0], [96.8, 1263.0], [96.9, 1263.0], [97.0, 1263.0], [97.1, 1263.0], [97.2, 1263.0], [97.3, 1263.0], [97.4, 1263.0], [97.5, 1263.0], [97.6, 1263.0], [97.7, 1263.0], [97.8, 1263.0], [97.9, 1263.0], [98.0, 1263.0], [98.1, 1263.0], [98.2, 1263.0], [98.3, 1263.0], [98.4, 1263.0], [98.5, 1263.0], [98.6, 1263.0], [98.7, 1263.0], [98.8, 1263.0], [98.9, 1263.0], [99.0, 1263.0], [99.1, 1263.0], [99.2, 1263.0], [99.3, 1263.0], [99.4, 1263.0], [99.5, 1263.0], [99.6, 1263.0], [99.7, 1263.0], [99.8, 1263.0], [99.9, 1263.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 200.0, "maxY": 4.0, "series": [{"data": [[1200.0, 3.0], [300.0, 4.0], [600.0, 1.0], [800.0, 4.0], [200.0, 4.0], [900.0, 2.0], [1000.0, 1.0], [500.0, 1.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1200.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 8.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 12.0, "series": [{"data": [[0.0, 8.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 12.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 1.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 7.749999999999999, "minX": 1.60421916E12, "maxY": 7.749999999999999, "series": [{"data": [[1.60421916E12, 7.749999999999999]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60421916E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 254.0, "minX": 1.0, "maxY": 1263.0, "series": [{"data": [[8.0, 327.0], [4.0, 282.0], [2.0, 604.0], [1.0, 1263.0], [9.0, 254.0], [10.0, 779.5454545454545], [5.0, 350.0], [6.0, 326.0], [3.0, 1227.0], [7.0, 507.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[7.749999999999999, 685.75]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 139.26666666666668, "minX": 1.60421916E12, "maxY": 5798.016666666666, "series": [{"data": [[1.60421916E12, 5798.016666666666]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60421916E12, 139.26666666666668]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60421916E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 685.75, "minX": 1.60421916E12, "maxY": 685.75, "series": [{"data": [[1.60421916E12, 685.75]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60421916E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 685.45, "minX": 1.60421916E12, "maxY": 685.45, "series": [{"data": [[1.60421916E12, 685.45]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60421916E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 4.199999999999999, "minX": 1.60421916E12, "maxY": 4.199999999999999, "series": [{"data": [[1.60421916E12, 4.199999999999999]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60421916E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 251.0, "minX": 1.60421916E12, "maxY": 1263.0, "series": [{"data": [[1.60421916E12, 1263.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60421916E12, 251.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60421916E12, 251.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60421916E12, 251.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60421916E12, 251.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60421916E12, 719.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60421916E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 448.5, "minX": 4.0, "maxY": 932.5, "series": [{"data": [[4.0, 932.5], [16.0, 448.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 16.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 448.5, "minX": 4.0, "maxY": 931.0, "series": [{"data": [[4.0, 931.0], [16.0, 448.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 16.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.3333333333333333, "minX": 1.60421916E12, "maxY": 0.3333333333333333, "series": [{"data": [[1.60421916E12, 0.3333333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60421916E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.3333333333333333, "minX": 1.60421916E12, "maxY": 0.3333333333333333, "series": [{"data": [[1.60421916E12, 0.3333333333333333]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60421916E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.3333333333333333, "minX": 1.60421916E12, "maxY": 0.3333333333333333, "series": [{"data": [[1.60421916E12, 0.3333333333333333]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60421916E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.3333333333333333, "minX": 1.60421916E12, "maxY": 0.3333333333333333, "series": [{"data": [[1.60421916E12, 0.3333333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60421916E12, "title": "Total Transactions Per Second"}},
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

