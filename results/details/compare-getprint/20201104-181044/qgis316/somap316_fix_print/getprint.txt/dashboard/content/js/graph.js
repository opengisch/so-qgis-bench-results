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
        data: {"result": {"minY": 188.0, "minX": 0.0, "maxY": 120098.0, "series": [{"data": [[0.0, 188.0], [0.1, 188.0], [0.2, 188.0], [0.3, 188.0], [0.4, 188.0], [0.5, 188.0], [0.6, 188.0], [0.7, 188.0], [0.8, 188.0], [0.9, 188.0], [1.0, 188.0], [1.1, 188.0], [1.2, 188.0], [1.3, 188.0], [1.4, 188.0], [1.5, 188.0], [1.6, 230.0], [1.7, 230.0], [1.8, 230.0], [1.9, 230.0], [2.0, 230.0], [2.1, 230.0], [2.2, 230.0], [2.3, 230.0], [2.4, 230.0], [2.5, 230.0], [2.6, 230.0], [2.7, 230.0], [2.8, 230.0], [2.9, 230.0], [3.0, 230.0], [3.1, 230.0], [3.2, 231.0], [3.3, 231.0], [3.4, 231.0], [3.5, 231.0], [3.6, 231.0], [3.7, 231.0], [3.8, 231.0], [3.9, 231.0], [4.0, 231.0], [4.1, 231.0], [4.2, 231.0], [4.3, 231.0], [4.4, 231.0], [4.5, 231.0], [4.6, 231.0], [4.7, 231.0], [4.8, 269.0], [4.9, 269.0], [5.0, 269.0], [5.1, 269.0], [5.2, 269.0], [5.3, 269.0], [5.4, 269.0], [5.5, 269.0], [5.6, 269.0], [5.7, 269.0], [5.8, 269.0], [5.9, 269.0], [6.0, 269.0], [6.1, 269.0], [6.2, 269.0], [6.3, 269.0], [6.4, 273.0], [6.5, 273.0], [6.6, 273.0], [6.7, 273.0], [6.8, 273.0], [6.9, 273.0], [7.0, 273.0], [7.1, 273.0], [7.2, 273.0], [7.3, 273.0], [7.4, 273.0], [7.5, 273.0], [7.6, 273.0], [7.7, 273.0], [7.8, 273.0], [7.9, 273.0], [8.0, 292.0], [8.1, 292.0], [8.2, 292.0], [8.3, 292.0], [8.4, 292.0], [8.5, 292.0], [8.6, 292.0], [8.7, 292.0], [8.8, 292.0], [8.9, 292.0], [9.0, 292.0], [9.1, 292.0], [9.2, 292.0], [9.3, 292.0], [9.4, 292.0], [9.5, 292.0], [9.6, 302.0], [9.7, 302.0], [9.8, 302.0], [9.9, 302.0], [10.0, 302.0], [10.1, 302.0], [10.2, 302.0], [10.3, 302.0], [10.4, 302.0], [10.5, 302.0], [10.6, 302.0], [10.7, 302.0], [10.8, 302.0], [10.9, 302.0], [11.0, 302.0], [11.1, 302.0], [11.2, 308.0], [11.3, 308.0], [11.4, 308.0], [11.5, 308.0], [11.6, 308.0], [11.7, 308.0], [11.8, 308.0], [11.9, 308.0], [12.0, 308.0], [12.1, 308.0], [12.2, 308.0], [12.3, 308.0], [12.4, 308.0], [12.5, 308.0], [12.6, 308.0], [12.7, 321.0], [12.8, 321.0], [12.9, 321.0], [13.0, 321.0], [13.1, 321.0], [13.2, 321.0], [13.3, 321.0], [13.4, 321.0], [13.5, 321.0], [13.6, 321.0], [13.7, 321.0], [13.8, 321.0], [13.9, 321.0], [14.0, 321.0], [14.1, 321.0], [14.2, 321.0], [14.3, 344.0], [14.4, 344.0], [14.5, 344.0], [14.6, 344.0], [14.7, 344.0], [14.8, 344.0], [14.9, 344.0], [15.0, 344.0], [15.1, 344.0], [15.2, 344.0], [15.3, 344.0], [15.4, 344.0], [15.5, 344.0], [15.6, 344.0], [15.7, 344.0], [15.8, 344.0], [15.9, 346.0], [16.0, 346.0], [16.1, 346.0], [16.2, 346.0], [16.3, 346.0], [16.4, 346.0], [16.5, 346.0], [16.6, 346.0], [16.7, 346.0], [16.8, 346.0], [16.9, 346.0], [17.0, 346.0], [17.1, 346.0], [17.2, 346.0], [17.3, 346.0], [17.4, 346.0], [17.5, 360.0], [17.6, 360.0], [17.7, 360.0], [17.8, 360.0], [17.9, 360.0], [18.0, 360.0], [18.1, 360.0], [18.2, 360.0], [18.3, 360.0], [18.4, 360.0], [18.5, 360.0], [18.6, 360.0], [18.7, 360.0], [18.8, 360.0], [18.9, 360.0], [19.0, 360.0], [19.1, 366.0], [19.2, 366.0], [19.3, 366.0], [19.4, 366.0], [19.5, 366.0], [19.6, 366.0], [19.7, 366.0], [19.8, 366.0], [19.9, 366.0], [20.0, 366.0], [20.1, 366.0], [20.2, 366.0], [20.3, 366.0], [20.4, 366.0], [20.5, 366.0], [20.6, 366.0], [20.7, 373.0], [20.8, 373.0], [20.9, 373.0], [21.0, 373.0], [21.1, 373.0], [21.2, 373.0], [21.3, 373.0], [21.4, 373.0], [21.5, 373.0], [21.6, 373.0], [21.7, 373.0], [21.8, 373.0], [21.9, 373.0], [22.0, 373.0], [22.1, 373.0], [22.2, 373.0], [22.3, 375.0], [22.4, 375.0], [22.5, 375.0], [22.6, 375.0], [22.7, 375.0], [22.8, 375.0], [22.9, 375.0], [23.0, 375.0], [23.1, 375.0], [23.2, 375.0], [23.3, 375.0], [23.4, 375.0], [23.5, 375.0], [23.6, 375.0], [23.7, 375.0], [23.8, 375.0], [23.9, 417.0], [24.0, 417.0], [24.1, 417.0], [24.2, 417.0], [24.3, 417.0], [24.4, 417.0], [24.5, 417.0], [24.6, 417.0], [24.7, 417.0], [24.8, 417.0], [24.9, 417.0], [25.0, 417.0], [25.1, 417.0], [25.2, 417.0], [25.3, 417.0], [25.4, 420.0], [25.5, 420.0], [25.6, 420.0], [25.7, 420.0], [25.8, 420.0], [25.9, 420.0], [26.0, 420.0], [26.1, 420.0], [26.2, 420.0], [26.3, 420.0], [26.4, 420.0], [26.5, 420.0], [26.6, 420.0], [26.7, 420.0], [26.8, 420.0], [26.9, 420.0], [27.0, 437.0], [27.1, 437.0], [27.2, 437.0], [27.3, 437.0], [27.4, 437.0], [27.5, 437.0], [27.6, 437.0], [27.7, 437.0], [27.8, 437.0], [27.9, 437.0], [28.0, 437.0], [28.1, 437.0], [28.2, 437.0], [28.3, 437.0], [28.4, 437.0], [28.5, 437.0], [28.6, 440.0], [28.7, 440.0], [28.8, 440.0], [28.9, 440.0], [29.0, 440.0], [29.1, 440.0], [29.2, 440.0], [29.3, 440.0], [29.4, 440.0], [29.5, 440.0], [29.6, 440.0], [29.7, 440.0], [29.8, 440.0], [29.9, 440.0], [30.0, 440.0], [30.1, 440.0], [30.2, 468.0], [30.3, 468.0], [30.4, 468.0], [30.5, 468.0], [30.6, 468.0], [30.7, 468.0], [30.8, 468.0], [30.9, 468.0], [31.0, 468.0], [31.1, 468.0], [31.2, 468.0], [31.3, 468.0], [31.4, 468.0], [31.5, 468.0], [31.6, 468.0], [31.7, 468.0], [31.8, 471.0], [31.9, 471.0], [32.0, 471.0], [32.1, 471.0], [32.2, 471.0], [32.3, 471.0], [32.4, 471.0], [32.5, 471.0], [32.6, 471.0], [32.7, 471.0], [32.8, 471.0], [32.9, 471.0], [33.0, 471.0], [33.1, 471.0], [33.2, 471.0], [33.3, 471.0], [33.4, 527.0], [33.5, 527.0], [33.6, 527.0], [33.7, 527.0], [33.8, 527.0], [33.9, 527.0], [34.0, 527.0], [34.1, 527.0], [34.2, 527.0], [34.3, 527.0], [34.4, 527.0], [34.5, 527.0], [34.6, 527.0], [34.7, 527.0], [34.8, 527.0], [34.9, 527.0], [35.0, 561.0], [35.1, 561.0], [35.2, 561.0], [35.3, 561.0], [35.4, 561.0], [35.5, 561.0], [35.6, 561.0], [35.7, 561.0], [35.8, 561.0], [35.9, 561.0], [36.0, 561.0], [36.1, 561.0], [36.2, 561.0], [36.3, 561.0], [36.4, 561.0], [36.5, 561.0], [36.6, 563.0], [36.7, 563.0], [36.8, 563.0], [36.9, 563.0], [37.0, 563.0], [37.1, 563.0], [37.2, 563.0], [37.3, 563.0], [37.4, 563.0], [37.5, 563.0], [37.6, 563.0], [37.7, 563.0], [37.8, 563.0], [37.9, 563.0], [38.0, 563.0], [38.1, 572.0], [38.2, 572.0], [38.3, 572.0], [38.4, 572.0], [38.5, 572.0], [38.6, 572.0], [38.7, 572.0], [38.8, 572.0], [38.9, 572.0], [39.0, 572.0], [39.1, 572.0], [39.2, 572.0], [39.3, 572.0], [39.4, 572.0], [39.5, 572.0], [39.6, 572.0], [39.7, 596.0], [39.8, 596.0], [39.9, 596.0], [40.0, 596.0], [40.1, 596.0], [40.2, 596.0], [40.3, 596.0], [40.4, 596.0], [40.5, 596.0], [40.6, 596.0], [40.7, 596.0], [40.8, 596.0], [40.9, 596.0], [41.0, 596.0], [41.1, 596.0], [41.2, 596.0], [41.3, 600.0], [41.4, 600.0], [41.5, 600.0], [41.6, 600.0], [41.7, 600.0], [41.8, 600.0], [41.9, 600.0], [42.0, 600.0], [42.1, 600.0], [42.2, 600.0], [42.3, 600.0], [42.4, 600.0], [42.5, 600.0], [42.6, 600.0], [42.7, 600.0], [42.8, 600.0], [42.9, 612.0], [43.0, 612.0], [43.1, 612.0], [43.2, 612.0], [43.3, 612.0], [43.4, 612.0], [43.5, 612.0], [43.6, 612.0], [43.7, 612.0], [43.8, 612.0], [43.9, 612.0], [44.0, 612.0], [44.1, 612.0], [44.2, 612.0], [44.3, 612.0], [44.4, 612.0], [44.5, 623.0], [44.6, 623.0], [44.7, 623.0], [44.8, 623.0], [44.9, 623.0], [45.0, 623.0], [45.1, 623.0], [45.2, 623.0], [45.3, 623.0], [45.4, 623.0], [45.5, 623.0], [45.6, 623.0], [45.7, 623.0], [45.8, 623.0], [45.9, 623.0], [46.0, 623.0], [46.1, 631.0], [46.2, 631.0], [46.3, 631.0], [46.4, 631.0], [46.5, 631.0], [46.6, 631.0], [46.7, 631.0], [46.8, 631.0], [46.9, 631.0], [47.0, 631.0], [47.1, 631.0], [47.2, 631.0], [47.3, 631.0], [47.4, 631.0], [47.5, 631.0], [47.6, 631.0], [47.7, 632.0], [47.8, 632.0], [47.9, 632.0], [48.0, 632.0], [48.1, 632.0], [48.2, 632.0], [48.3, 632.0], [48.4, 632.0], [48.5, 632.0], [48.6, 632.0], [48.7, 632.0], [48.8, 632.0], [48.9, 632.0], [49.0, 632.0], [49.1, 632.0], [49.2, 632.0], [49.3, 651.0], [49.4, 651.0], [49.5, 651.0], [49.6, 651.0], [49.7, 651.0], [49.8, 651.0], [49.9, 651.0], [50.0, 651.0], [50.1, 651.0], [50.2, 651.0], [50.3, 651.0], [50.4, 651.0], [50.5, 651.0], [50.6, 651.0], [50.7, 651.0], [50.8, 668.0], [50.9, 668.0], [51.0, 668.0], [51.1, 668.0], [51.2, 668.0], [51.3, 668.0], [51.4, 668.0], [51.5, 668.0], [51.6, 668.0], [51.7, 668.0], [51.8, 668.0], [51.9, 668.0], [52.0, 668.0], [52.1, 668.0], [52.2, 668.0], [52.3, 668.0], [52.4, 677.0], [52.5, 677.0], [52.6, 677.0], [52.7, 677.0], [52.8, 677.0], [52.9, 677.0], [53.0, 677.0], [53.1, 677.0], [53.2, 677.0], [53.3, 677.0], [53.4, 677.0], [53.5, 677.0], [53.6, 677.0], [53.7, 677.0], [53.8, 677.0], [53.9, 677.0], [54.0, 691.0], [54.1, 691.0], [54.2, 691.0], [54.3, 691.0], [54.4, 691.0], [54.5, 691.0], [54.6, 691.0], [54.7, 691.0], [54.8, 691.0], [54.9, 691.0], [55.0, 691.0], [55.1, 691.0], [55.2, 691.0], [55.3, 691.0], [55.4, 691.0], [55.5, 691.0], [55.6, 706.0], [55.7, 706.0], [55.8, 706.0], [55.9, 706.0], [56.0, 706.0], [56.1, 706.0], [56.2, 706.0], [56.3, 706.0], [56.4, 706.0], [56.5, 706.0], [56.6, 706.0], [56.7, 706.0], [56.8, 706.0], [56.9, 706.0], [57.0, 706.0], [57.1, 706.0], [57.2, 706.0], [57.3, 706.0], [57.4, 706.0], [57.5, 706.0], [57.6, 706.0], [57.7, 706.0], [57.8, 706.0], [57.9, 706.0], [58.0, 706.0], [58.1, 706.0], [58.2, 706.0], [58.3, 706.0], [58.4, 706.0], [58.5, 706.0], [58.6, 706.0], [58.7, 706.0], [58.8, 738.0], [58.9, 738.0], [59.0, 738.0], [59.1, 738.0], [59.2, 738.0], [59.3, 738.0], [59.4, 738.0], [59.5, 738.0], [59.6, 738.0], [59.7, 738.0], [59.8, 738.0], [59.9, 738.0], [60.0, 738.0], [60.1, 738.0], [60.2, 738.0], [60.3, 738.0], [60.4, 757.0], [60.5, 757.0], [60.6, 757.0], [60.7, 757.0], [60.8, 757.0], [60.9, 757.0], [61.0, 757.0], [61.1, 757.0], [61.2, 757.0], [61.3, 757.0], [61.4, 757.0], [61.5, 757.0], [61.6, 757.0], [61.7, 757.0], [61.8, 757.0], [61.9, 757.0], [62.0, 791.0], [62.1, 791.0], [62.2, 791.0], [62.3, 791.0], [62.4, 791.0], [62.5, 791.0], [62.6, 791.0], [62.7, 791.0], [62.8, 791.0], [62.9, 791.0], [63.0, 791.0], [63.1, 791.0], [63.2, 791.0], [63.3, 791.0], [63.4, 791.0], [63.5, 831.0], [63.6, 831.0], [63.7, 831.0], [63.8, 831.0], [63.9, 831.0], [64.0, 831.0], [64.1, 831.0], [64.2, 831.0], [64.3, 831.0], [64.4, 831.0], [64.5, 831.0], [64.6, 831.0], [64.7, 831.0], [64.8, 831.0], [64.9, 831.0], [65.0, 831.0], [65.1, 871.0], [65.2, 871.0], [65.3, 871.0], [65.4, 871.0], [65.5, 871.0], [65.6, 871.0], [65.7, 871.0], [65.8, 871.0], [65.9, 871.0], [66.0, 871.0], [66.1, 871.0], [66.2, 871.0], [66.3, 871.0], [66.4, 871.0], [66.5, 871.0], [66.6, 871.0], [66.7, 942.0], [66.8, 942.0], [66.9, 942.0], [67.0, 942.0], [67.1, 942.0], [67.2, 942.0], [67.3, 942.0], [67.4, 942.0], [67.5, 942.0], [67.6, 942.0], [67.7, 942.0], [67.8, 942.0], [67.9, 942.0], [68.0, 942.0], [68.1, 942.0], [68.2, 942.0], [68.3, 945.0], [68.4, 945.0], [68.5, 945.0], [68.6, 945.0], [68.7, 945.0], [68.8, 945.0], [68.9, 945.0], [69.0, 945.0], [69.1, 945.0], [69.2, 945.0], [69.3, 945.0], [69.4, 945.0], [69.5, 945.0], [69.6, 945.0], [69.7, 945.0], [69.8, 945.0], [69.9, 962.0], [70.0, 962.0], [70.1, 962.0], [70.2, 962.0], [70.3, 962.0], [70.4, 962.0], [70.5, 962.0], [70.6, 962.0], [70.7, 962.0], [70.8, 962.0], [70.9, 962.0], [71.0, 962.0], [71.1, 962.0], [71.2, 962.0], [71.3, 962.0], [71.4, 962.0], [71.5, 971.0], [71.6, 971.0], [71.7, 971.0], [71.8, 971.0], [71.9, 971.0], [72.0, 971.0], [72.1, 971.0], [72.2, 971.0], [72.3, 971.0], [72.4, 971.0], [72.5, 971.0], [72.6, 971.0], [72.7, 971.0], [72.8, 971.0], [72.9, 971.0], [73.0, 971.0], [73.1, 983.0], [73.2, 983.0], [73.3, 983.0], [73.4, 983.0], [73.5, 983.0], [73.6, 983.0], [73.7, 983.0], [73.8, 983.0], [73.9, 983.0], [74.0, 983.0], [74.1, 983.0], [74.2, 983.0], [74.3, 983.0], [74.4, 983.0], [74.5, 983.0], [74.6, 983.0], [74.7, 1002.0], [74.8, 1002.0], [74.9, 1002.0], [75.0, 1002.0], [75.1, 1002.0], [75.2, 1002.0], [75.3, 1002.0], [75.4, 1002.0], [75.5, 1002.0], [75.6, 1002.0], [75.7, 1002.0], [75.8, 1002.0], [75.9, 1002.0], [76.0, 1002.0], [76.1, 1002.0], [76.2, 1077.0], [76.3, 1077.0], [76.4, 1077.0], [76.5, 1077.0], [76.6, 1077.0], [76.7, 1077.0], [76.8, 1077.0], [76.9, 1077.0], [77.0, 1077.0], [77.1, 1077.0], [77.2, 1077.0], [77.3, 1077.0], [77.4, 1077.0], [77.5, 1077.0], [77.6, 1077.0], [77.7, 1077.0], [77.8, 1085.0], [77.9, 1085.0], [78.0, 1085.0], [78.1, 1085.0], [78.2, 1085.0], [78.3, 1085.0], [78.4, 1085.0], [78.5, 1085.0], [78.6, 1085.0], [78.7, 1085.0], [78.8, 1085.0], [78.9, 1085.0], [79.0, 1085.0], [79.1, 1085.0], [79.2, 1085.0], [79.3, 1085.0], [79.4, 1138.0], [79.5, 1138.0], [79.6, 1138.0], [79.7, 1138.0], [79.8, 1138.0], [79.9, 1138.0], [80.0, 1138.0], [80.1, 1138.0], [80.2, 1138.0], [80.3, 1138.0], [80.4, 1138.0], [80.5, 1138.0], [80.6, 1138.0], [80.7, 1138.0], [80.8, 1138.0], [80.9, 1138.0], [81.0, 1195.0], [81.1, 1195.0], [81.2, 1195.0], [81.3, 1195.0], [81.4, 1195.0], [81.5, 1195.0], [81.6, 1195.0], [81.7, 1195.0], [81.8, 1195.0], [81.9, 1195.0], [82.0, 1195.0], [82.1, 1195.0], [82.2, 1195.0], [82.3, 1195.0], [82.4, 1195.0], [82.5, 1195.0], [82.6, 1255.0], [82.7, 1255.0], [82.8, 1255.0], [82.9, 1255.0], [83.0, 1255.0], [83.1, 1255.0], [83.2, 1255.0], [83.3, 1255.0], [83.4, 1255.0], [83.5, 1255.0], [83.6, 1255.0], [83.7, 1255.0], [83.8, 1255.0], [83.9, 1255.0], [84.0, 1255.0], [84.1, 1255.0], [84.2, 1289.0], [84.3, 1289.0], [84.4, 1289.0], [84.5, 1289.0], [84.6, 1289.0], [84.7, 1289.0], [84.8, 1289.0], [84.9, 1289.0], [85.0, 1289.0], [85.1, 1289.0], [85.2, 1289.0], [85.3, 1289.0], [85.4, 1289.0], [85.5, 1289.0], [85.6, 1289.0], [85.7, 1289.0], [85.8, 1290.0], [85.9, 1290.0], [86.0, 1290.0], [86.1, 1290.0], [86.2, 1290.0], [86.3, 1290.0], [86.4, 1290.0], [86.5, 1290.0], [86.6, 1290.0], [86.7, 1290.0], [86.8, 1290.0], [86.9, 1290.0], [87.0, 1290.0], [87.1, 1290.0], [87.2, 1290.0], [87.3, 1290.0], [87.4, 1301.0], [87.5, 1301.0], [87.6, 1301.0], [87.7, 1301.0], [87.8, 1301.0], [87.9, 1301.0], [88.0, 1301.0], [88.1, 1301.0], [88.2, 1301.0], [88.3, 1301.0], [88.4, 1301.0], [88.5, 1301.0], [88.6, 1301.0], [88.7, 1301.0], [88.8, 1301.0], [88.9, 1365.0], [89.0, 1365.0], [89.1, 1365.0], [89.2, 1365.0], [89.3, 1365.0], [89.4, 1365.0], [89.5, 1365.0], [89.6, 1365.0], [89.7, 1365.0], [89.8, 1365.0], [89.9, 1365.0], [90.0, 1365.0], [90.1, 1365.0], [90.2, 1365.0], [90.3, 1365.0], [90.4, 1365.0], [90.5, 1435.0], [90.6, 1435.0], [90.7, 1435.0], [90.8, 1435.0], [90.9, 1435.0], [91.0, 1435.0], [91.1, 1435.0], [91.2, 1435.0], [91.3, 1435.0], [91.4, 1435.0], [91.5, 1435.0], [91.6, 1435.0], [91.7, 1435.0], [91.8, 1435.0], [91.9, 1435.0], [92.0, 1435.0], [92.1, 1470.0], [92.2, 1470.0], [92.3, 1470.0], [92.4, 1470.0], [92.5, 1470.0], [92.6, 1470.0], [92.7, 1470.0], [92.8, 1470.0], [92.9, 1470.0], [93.0, 1470.0], [93.1, 1470.0], [93.2, 1470.0], [93.3, 1470.0], [93.4, 1470.0], [93.5, 1470.0], [93.6, 1470.0], [93.7, 1478.0], [93.8, 1478.0], [93.9, 1478.0], [94.0, 1478.0], [94.1, 1478.0], [94.2, 1478.0], [94.3, 1478.0], [94.4, 1478.0], [94.5, 1478.0], [94.6, 1478.0], [94.7, 1478.0], [94.8, 1478.0], [94.9, 1478.0], [95.0, 1478.0], [95.1, 1478.0], [95.2, 1478.0], [95.3, 1487.0], [95.4, 1487.0], [95.5, 1487.0], [95.6, 1487.0], [95.7, 1487.0], [95.8, 1487.0], [95.9, 1487.0], [96.0, 1487.0], [96.1, 1487.0], [96.2, 1487.0], [96.3, 1487.0], [96.4, 1487.0], [96.5, 1487.0], [96.6, 1487.0], [96.7, 1487.0], [96.8, 1487.0], [96.9, 1539.0], [97.0, 1539.0], [97.1, 1539.0], [97.2, 1539.0], [97.3, 1539.0], [97.4, 1539.0], [97.5, 1539.0], [97.6, 1539.0], [97.7, 1539.0], [97.8, 1539.0], [97.9, 1539.0], [98.0, 1539.0], [98.1, 1539.0], [98.2, 1539.0], [98.3, 1539.0], [98.4, 1539.0], [98.5, 120098.0], [98.6, 120098.0], [98.7, 120098.0], [98.8, 120098.0], [98.9, 120098.0], [99.0, 120098.0], [99.1, 120098.0], [99.2, 120098.0], [99.3, 120098.0], [99.4, 120098.0], [99.5, 120098.0], [99.6, 120098.0], [99.7, 120098.0], [99.8, 120098.0], [99.9, 120098.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 9.0, "series": [{"data": [[600.0, 9.0], [700.0, 5.0], [200.0, 5.0], [800.0, 2.0], [900.0, 5.0], [1000.0, 3.0], [1100.0, 2.0], [300.0, 9.0], [1200.0, 3.0], [1300.0, 2.0], [1400.0, 4.0], [1500.0, 1.0], [400.0, 6.0], [100.0, 1.0], [120000.0, 1.0], [500.0, 5.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 120000.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 40.0, "series": [{"data": [[0.0, 21.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 40.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 1.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 1.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 1.60451496E12, "maxY": 9.32258064516129, "series": [{"data": [[1.60451496E12, 9.32258064516129], [1.60451508E12, 1.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60451508E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 676.6199999999998, "minX": 1.0, "maxY": 120098.0, "series": [{"data": [[8.0, 725.0], [4.0, 945.0], [2.0, 1487.0], [1.0, 120098.0], [9.0, 803.0], [10.0, 676.6199999999998], [5.0, 1289.0], [6.0, 1435.0], [3.0, 1002.0], [7.0, 871.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.19047619047619, 2627.6507936507937]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 5.7, "minX": 1.60451496E12, "maxY": 357850.98333333334, "series": [{"data": [[1.60451496E12, 357850.98333333334], [1.60451508E12, 5.7]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60451496E12, 877.8166666666667], [1.60451508E12, 11.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60451508E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 732.9677419354839, "minX": 1.60451496E12, "maxY": 120098.0, "series": [{"data": [[1.60451496E12, 732.9677419354839], [1.60451508E12, 120098.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60451508E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 730.3870967741935, "minX": 1.60451496E12, "maxY": 120098.0, "series": [{"data": [[1.60451496E12, 730.3870967741935], [1.60451508E12, 120098.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60451508E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.60451496E12, "maxY": 1.3870967741935487, "series": [{"data": [[1.60451496E12, 1.3870967741935487], [1.60451508E12, 0.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60451508E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 188.0, "minX": 1.60451496E12, "maxY": 1539.0, "series": [{"data": [[1.60451496E12, 1539.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60451496E12, 188.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60451496E12, 188.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60451496E12, 188.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60451496E12, 188.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60451496E12, 641.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60451496E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 438.5, "minX": 1.0, "maxY": 120098.0, "series": [{"data": [[16.0, 438.5], [1.0, 1487.0], [12.0, 614.0], [13.0, 641.0], [7.0, 1195.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[1.0, 120098.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 16.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 437.0, "minX": 1.0, "maxY": 120098.0, "series": [{"data": [[16.0, 437.0], [1.0, 1466.0], [12.0, 613.5], [13.0, 640.0], [7.0, 1188.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[1.0, 120098.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 16.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1.05, "minX": 1.60451496E12, "maxY": 1.05, "series": [{"data": [[1.60451496E12, 1.05]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60451496E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60451496E12, "maxY": 1.0333333333333334, "series": [{"data": [[1.60451496E12, 1.0333333333333334]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.60451508E12, 0.016666666666666666]], "isOverall": false, "label": "404", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60451508E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60451496E12, "maxY": 1.0333333333333334, "series": [{"data": [[1.60451496E12, 1.0333333333333334]], "isOverall": false, "label": "HTTP Request-success", "isController": false}, {"data": [[1.60451508E12, 0.016666666666666666]], "isOverall": false, "label": "HTTP Request-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60451508E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60451496E12, "maxY": 1.0333333333333334, "series": [{"data": [[1.60451496E12, 1.0333333333333334]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.60451508E12, 0.016666666666666666]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60451508E12, "title": "Total Transactions Per Second"}},
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

