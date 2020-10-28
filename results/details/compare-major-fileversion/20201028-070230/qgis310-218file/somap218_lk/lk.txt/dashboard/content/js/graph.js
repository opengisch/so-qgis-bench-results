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
        data: {"result": {"minY": 218.0, "minX": 0.0, "maxY": 694.0, "series": [{"data": [[0.0, 218.0], [0.1, 218.0], [0.2, 218.0], [0.3, 218.0], [0.4, 218.0], [0.5, 218.0], [0.6, 218.0], [0.7, 218.0], [0.8, 218.0], [0.9, 218.0], [1.0, 218.0], [1.1, 218.0], [1.2, 218.0], [1.3, 218.0], [1.4, 218.0], [1.5, 218.0], [1.6, 218.0], [1.7, 218.0], [1.8, 218.0], [1.9, 218.0], [2.0, 218.0], [2.1, 218.0], [2.2, 218.0], [2.3, 218.0], [2.4, 218.0], [2.5, 218.0], [2.6, 218.0], [2.7, 218.0], [2.8, 218.0], [2.9, 218.0], [3.0, 218.0], [3.1, 218.0], [3.2, 218.0], [3.3, 218.0], [3.4, 282.0], [3.5, 282.0], [3.6, 282.0], [3.7, 282.0], [3.8, 282.0], [3.9, 282.0], [4.0, 282.0], [4.1, 282.0], [4.2, 282.0], [4.3, 282.0], [4.4, 282.0], [4.5, 282.0], [4.6, 282.0], [4.7, 282.0], [4.8, 282.0], [4.9, 282.0], [5.0, 282.0], [5.1, 282.0], [5.2, 282.0], [5.3, 282.0], [5.4, 282.0], [5.5, 282.0], [5.6, 282.0], [5.7, 282.0], [5.8, 282.0], [5.9, 282.0], [6.0, 282.0], [6.1, 282.0], [6.2, 282.0], [6.3, 282.0], [6.4, 282.0], [6.5, 282.0], [6.6, 282.0], [6.7, 305.0], [6.8, 305.0], [6.9, 305.0], [7.0, 305.0], [7.1, 305.0], [7.2, 305.0], [7.3, 305.0], [7.4, 305.0], [7.5, 305.0], [7.6, 305.0], [7.7, 305.0], [7.8, 305.0], [7.9, 305.0], [8.0, 305.0], [8.1, 305.0], [8.2, 305.0], [8.3, 305.0], [8.4, 305.0], [8.5, 305.0], [8.6, 305.0], [8.7, 305.0], [8.8, 305.0], [8.9, 305.0], [9.0, 305.0], [9.1, 305.0], [9.2, 305.0], [9.3, 305.0], [9.4, 305.0], [9.5, 305.0], [9.6, 305.0], [9.7, 305.0], [9.8, 305.0], [9.9, 305.0], [10.0, 311.0], [10.1, 311.0], [10.2, 311.0], [10.3, 311.0], [10.4, 311.0], [10.5, 311.0], [10.6, 311.0], [10.7, 311.0], [10.8, 311.0], [10.9, 311.0], [11.0, 311.0], [11.1, 311.0], [11.2, 311.0], [11.3, 311.0], [11.4, 311.0], [11.5, 311.0], [11.6, 311.0], [11.7, 311.0], [11.8, 311.0], [11.9, 311.0], [12.0, 311.0], [12.1, 311.0], [12.2, 311.0], [12.3, 311.0], [12.4, 311.0], [12.5, 311.0], [12.6, 311.0], [12.7, 311.0], [12.8, 311.0], [12.9, 311.0], [13.0, 311.0], [13.1, 311.0], [13.2, 311.0], [13.3, 311.0], [13.4, 330.0], [13.5, 330.0], [13.6, 330.0], [13.7, 330.0], [13.8, 330.0], [13.9, 330.0], [14.0, 330.0], [14.1, 330.0], [14.2, 330.0], [14.3, 330.0], [14.4, 330.0], [14.5, 330.0], [14.6, 330.0], [14.7, 330.0], [14.8, 330.0], [14.9, 330.0], [15.0, 330.0], [15.1, 330.0], [15.2, 330.0], [15.3, 330.0], [15.4, 330.0], [15.5, 330.0], [15.6, 330.0], [15.7, 330.0], [15.8, 330.0], [15.9, 330.0], [16.0, 330.0], [16.1, 330.0], [16.2, 330.0], [16.3, 330.0], [16.4, 330.0], [16.5, 330.0], [16.6, 330.0], [16.7, 350.0], [16.8, 350.0], [16.9, 350.0], [17.0, 350.0], [17.1, 350.0], [17.2, 350.0], [17.3, 350.0], [17.4, 350.0], [17.5, 350.0], [17.6, 350.0], [17.7, 350.0], [17.8, 350.0], [17.9, 350.0], [18.0, 350.0], [18.1, 350.0], [18.2, 350.0], [18.3, 350.0], [18.4, 350.0], [18.5, 350.0], [18.6, 350.0], [18.7, 350.0], [18.8, 350.0], [18.9, 350.0], [19.0, 350.0], [19.1, 350.0], [19.2, 350.0], [19.3, 350.0], [19.4, 350.0], [19.5, 350.0], [19.6, 350.0], [19.7, 350.0], [19.8, 350.0], [19.9, 350.0], [20.0, 370.0], [20.1, 370.0], [20.2, 370.0], [20.3, 370.0], [20.4, 370.0], [20.5, 370.0], [20.6, 370.0], [20.7, 370.0], [20.8, 370.0], [20.9, 370.0], [21.0, 370.0], [21.1, 370.0], [21.2, 370.0], [21.3, 370.0], [21.4, 370.0], [21.5, 370.0], [21.6, 370.0], [21.7, 370.0], [21.8, 370.0], [21.9, 370.0], [22.0, 370.0], [22.1, 370.0], [22.2, 370.0], [22.3, 370.0], [22.4, 370.0], [22.5, 370.0], [22.6, 370.0], [22.7, 370.0], [22.8, 370.0], [22.9, 370.0], [23.0, 370.0], [23.1, 370.0], [23.2, 370.0], [23.3, 370.0], [23.4, 395.0], [23.5, 395.0], [23.6, 395.0], [23.7, 395.0], [23.8, 395.0], [23.9, 395.0], [24.0, 395.0], [24.1, 395.0], [24.2, 395.0], [24.3, 395.0], [24.4, 395.0], [24.5, 395.0], [24.6, 395.0], [24.7, 395.0], [24.8, 395.0], [24.9, 395.0], [25.0, 395.0], [25.1, 395.0], [25.2, 395.0], [25.3, 395.0], [25.4, 395.0], [25.5, 395.0], [25.6, 395.0], [25.7, 395.0], [25.8, 395.0], [25.9, 395.0], [26.0, 395.0], [26.1, 395.0], [26.2, 395.0], [26.3, 395.0], [26.4, 395.0], [26.5, 395.0], [26.6, 395.0], [26.7, 415.0], [26.8, 415.0], [26.9, 415.0], [27.0, 415.0], [27.1, 415.0], [27.2, 415.0], [27.3, 415.0], [27.4, 415.0], [27.5, 415.0], [27.6, 415.0], [27.7, 415.0], [27.8, 415.0], [27.9, 415.0], [28.0, 415.0], [28.1, 415.0], [28.2, 415.0], [28.3, 415.0], [28.4, 415.0], [28.5, 415.0], [28.6, 415.0], [28.7, 415.0], [28.8, 415.0], [28.9, 415.0], [29.0, 415.0], [29.1, 415.0], [29.2, 415.0], [29.3, 415.0], [29.4, 415.0], [29.5, 415.0], [29.6, 415.0], [29.7, 415.0], [29.8, 415.0], [29.9, 415.0], [30.0, 419.0], [30.1, 419.0], [30.2, 419.0], [30.3, 419.0], [30.4, 419.0], [30.5, 419.0], [30.6, 419.0], [30.7, 419.0], [30.8, 419.0], [30.9, 419.0], [31.0, 419.0], [31.1, 419.0], [31.2, 419.0], [31.3, 419.0], [31.4, 419.0], [31.5, 419.0], [31.6, 419.0], [31.7, 419.0], [31.8, 419.0], [31.9, 419.0], [32.0, 419.0], [32.1, 419.0], [32.2, 419.0], [32.3, 419.0], [32.4, 419.0], [32.5, 419.0], [32.6, 419.0], [32.7, 419.0], [32.8, 419.0], [32.9, 419.0], [33.0, 419.0], [33.1, 419.0], [33.2, 419.0], [33.3, 419.0], [33.4, 456.0], [33.5, 456.0], [33.6, 456.0], [33.7, 456.0], [33.8, 456.0], [33.9, 456.0], [34.0, 456.0], [34.1, 456.0], [34.2, 456.0], [34.3, 456.0], [34.4, 456.0], [34.5, 456.0], [34.6, 456.0], [34.7, 456.0], [34.8, 456.0], [34.9, 456.0], [35.0, 456.0], [35.1, 456.0], [35.2, 456.0], [35.3, 456.0], [35.4, 456.0], [35.5, 456.0], [35.6, 456.0], [35.7, 456.0], [35.8, 456.0], [35.9, 456.0], [36.0, 456.0], [36.1, 456.0], [36.2, 456.0], [36.3, 456.0], [36.4, 456.0], [36.5, 456.0], [36.6, 456.0], [36.7, 466.0], [36.8, 466.0], [36.9, 466.0], [37.0, 466.0], [37.1, 466.0], [37.2, 466.0], [37.3, 466.0], [37.4, 466.0], [37.5, 466.0], [37.6, 466.0], [37.7, 466.0], [37.8, 466.0], [37.9, 466.0], [38.0, 466.0], [38.1, 466.0], [38.2, 466.0], [38.3, 466.0], [38.4, 466.0], [38.5, 466.0], [38.6, 466.0], [38.7, 466.0], [38.8, 466.0], [38.9, 466.0], [39.0, 466.0], [39.1, 466.0], [39.2, 466.0], [39.3, 466.0], [39.4, 466.0], [39.5, 466.0], [39.6, 466.0], [39.7, 466.0], [39.8, 466.0], [39.9, 466.0], [40.0, 503.0], [40.1, 503.0], [40.2, 503.0], [40.3, 503.0], [40.4, 503.0], [40.5, 503.0], [40.6, 503.0], [40.7, 503.0], [40.8, 503.0], [40.9, 503.0], [41.0, 503.0], [41.1, 503.0], [41.2, 503.0], [41.3, 503.0], [41.4, 503.0], [41.5, 503.0], [41.6, 503.0], [41.7, 503.0], [41.8, 503.0], [41.9, 503.0], [42.0, 503.0], [42.1, 503.0], [42.2, 503.0], [42.3, 503.0], [42.4, 503.0], [42.5, 503.0], [42.6, 503.0], [42.7, 503.0], [42.8, 503.0], [42.9, 503.0], [43.0, 503.0], [43.1, 503.0], [43.2, 503.0], [43.3, 503.0], [43.4, 506.0], [43.5, 506.0], [43.6, 506.0], [43.7, 506.0], [43.8, 506.0], [43.9, 506.0], [44.0, 506.0], [44.1, 506.0], [44.2, 506.0], [44.3, 506.0], [44.4, 506.0], [44.5, 506.0], [44.6, 506.0], [44.7, 506.0], [44.8, 506.0], [44.9, 506.0], [45.0, 506.0], [45.1, 506.0], [45.2, 506.0], [45.3, 506.0], [45.4, 506.0], [45.5, 506.0], [45.6, 506.0], [45.7, 506.0], [45.8, 506.0], [45.9, 506.0], [46.0, 506.0], [46.1, 506.0], [46.2, 506.0], [46.3, 506.0], [46.4, 506.0], [46.5, 506.0], [46.6, 506.0], [46.7, 536.0], [46.8, 536.0], [46.9, 536.0], [47.0, 536.0], [47.1, 536.0], [47.2, 536.0], [47.3, 536.0], [47.4, 536.0], [47.5, 536.0], [47.6, 536.0], [47.7, 536.0], [47.8, 536.0], [47.9, 536.0], [48.0, 536.0], [48.1, 536.0], [48.2, 536.0], [48.3, 536.0], [48.4, 536.0], [48.5, 536.0], [48.6, 536.0], [48.7, 536.0], [48.8, 536.0], [48.9, 536.0], [49.0, 536.0], [49.1, 536.0], [49.2, 536.0], [49.3, 536.0], [49.4, 536.0], [49.5, 536.0], [49.6, 536.0], [49.7, 536.0], [49.8, 536.0], [49.9, 536.0], [50.0, 536.0], [50.1, 561.0], [50.2, 561.0], [50.3, 561.0], [50.4, 561.0], [50.5, 561.0], [50.6, 561.0], [50.7, 561.0], [50.8, 561.0], [50.9, 561.0], [51.0, 561.0], [51.1, 561.0], [51.2, 561.0], [51.3, 561.0], [51.4, 561.0], [51.5, 561.0], [51.6, 561.0], [51.7, 561.0], [51.8, 561.0], [51.9, 561.0], [52.0, 561.0], [52.1, 561.0], [52.2, 561.0], [52.3, 561.0], [52.4, 561.0], [52.5, 561.0], [52.6, 561.0], [52.7, 561.0], [52.8, 561.0], [52.9, 561.0], [53.0, 561.0], [53.1, 561.0], [53.2, 561.0], [53.3, 561.0], [53.4, 563.0], [53.5, 563.0], [53.6, 563.0], [53.7, 563.0], [53.8, 563.0], [53.9, 563.0], [54.0, 563.0], [54.1, 563.0], [54.2, 563.0], [54.3, 563.0], [54.4, 563.0], [54.5, 563.0], [54.6, 563.0], [54.7, 563.0], [54.8, 563.0], [54.9, 563.0], [55.0, 563.0], [55.1, 563.0], [55.2, 563.0], [55.3, 563.0], [55.4, 563.0], [55.5, 563.0], [55.6, 563.0], [55.7, 563.0], [55.8, 563.0], [55.9, 563.0], [56.0, 563.0], [56.1, 563.0], [56.2, 563.0], [56.3, 563.0], [56.4, 563.0], [56.5, 563.0], [56.6, 563.0], [56.7, 610.0], [56.8, 610.0], [56.9, 610.0], [57.0, 610.0], [57.1, 610.0], [57.2, 610.0], [57.3, 610.0], [57.4, 610.0], [57.5, 610.0], [57.6, 610.0], [57.7, 610.0], [57.8, 610.0], [57.9, 610.0], [58.0, 610.0], [58.1, 610.0], [58.2, 610.0], [58.3, 610.0], [58.4, 610.0], [58.5, 610.0], [58.6, 610.0], [58.7, 610.0], [58.8, 610.0], [58.9, 610.0], [59.0, 610.0], [59.1, 610.0], [59.2, 610.0], [59.3, 610.0], [59.4, 610.0], [59.5, 610.0], [59.6, 610.0], [59.7, 610.0], [59.8, 610.0], [59.9, 610.0], [60.0, 610.0], [60.1, 611.0], [60.2, 611.0], [60.3, 611.0], [60.4, 611.0], [60.5, 611.0], [60.6, 611.0], [60.7, 611.0], [60.8, 611.0], [60.9, 611.0], [61.0, 611.0], [61.1, 611.0], [61.2, 611.0], [61.3, 611.0], [61.4, 611.0], [61.5, 611.0], [61.6, 611.0], [61.7, 611.0], [61.8, 611.0], [61.9, 611.0], [62.0, 611.0], [62.1, 611.0], [62.2, 611.0], [62.3, 611.0], [62.4, 611.0], [62.5, 611.0], [62.6, 611.0], [62.7, 611.0], [62.8, 611.0], [62.9, 611.0], [63.0, 611.0], [63.1, 611.0], [63.2, 611.0], [63.3, 611.0], [63.4, 612.0], [63.5, 612.0], [63.6, 612.0], [63.7, 612.0], [63.8, 612.0], [63.9, 612.0], [64.0, 612.0], [64.1, 612.0], [64.2, 612.0], [64.3, 612.0], [64.4, 612.0], [64.5, 612.0], [64.6, 612.0], [64.7, 612.0], [64.8, 612.0], [64.9, 612.0], [65.0, 612.0], [65.1, 612.0], [65.2, 612.0], [65.3, 612.0], [65.4, 612.0], [65.5, 612.0], [65.6, 612.0], [65.7, 612.0], [65.8, 612.0], [65.9, 612.0], [66.0, 612.0], [66.1, 612.0], [66.2, 612.0], [66.3, 612.0], [66.4, 612.0], [66.5, 612.0], [66.6, 612.0], [66.7, 613.0], [66.8, 613.0], [66.9, 613.0], [67.0, 613.0], [67.1, 613.0], [67.2, 613.0], [67.3, 613.0], [67.4, 613.0], [67.5, 613.0], [67.6, 613.0], [67.7, 613.0], [67.8, 613.0], [67.9, 613.0], [68.0, 613.0], [68.1, 613.0], [68.2, 613.0], [68.3, 613.0], [68.4, 613.0], [68.5, 613.0], [68.6, 613.0], [68.7, 613.0], [68.8, 613.0], [68.9, 613.0], [69.0, 613.0], [69.1, 613.0], [69.2, 613.0], [69.3, 613.0], [69.4, 613.0], [69.5, 613.0], [69.6, 613.0], [69.7, 613.0], [69.8, 613.0], [69.9, 613.0], [70.0, 613.0], [70.1, 614.0], [70.2, 614.0], [70.3, 614.0], [70.4, 614.0], [70.5, 614.0], [70.6, 614.0], [70.7, 614.0], [70.8, 614.0], [70.9, 614.0], [71.0, 614.0], [71.1, 614.0], [71.2, 614.0], [71.3, 614.0], [71.4, 614.0], [71.5, 614.0], [71.6, 614.0], [71.7, 614.0], [71.8, 614.0], [71.9, 614.0], [72.0, 614.0], [72.1, 614.0], [72.2, 614.0], [72.3, 614.0], [72.4, 614.0], [72.5, 614.0], [72.6, 614.0], [72.7, 614.0], [72.8, 614.0], [72.9, 614.0], [73.0, 614.0], [73.1, 614.0], [73.2, 614.0], [73.3, 614.0], [73.4, 618.0], [73.5, 618.0], [73.6, 618.0], [73.7, 618.0], [73.8, 618.0], [73.9, 618.0], [74.0, 618.0], [74.1, 618.0], [74.2, 618.0], [74.3, 618.0], [74.4, 618.0], [74.5, 618.0], [74.6, 618.0], [74.7, 618.0], [74.8, 618.0], [74.9, 618.0], [75.0, 618.0], [75.1, 618.0], [75.2, 618.0], [75.3, 618.0], [75.4, 618.0], [75.5, 618.0], [75.6, 618.0], [75.7, 618.0], [75.8, 618.0], [75.9, 618.0], [76.0, 618.0], [76.1, 618.0], [76.2, 618.0], [76.3, 618.0], [76.4, 618.0], [76.5, 618.0], [76.6, 618.0], [76.7, 619.0], [76.8, 619.0], [76.9, 619.0], [77.0, 619.0], [77.1, 619.0], [77.2, 619.0], [77.3, 619.0], [77.4, 619.0], [77.5, 619.0], [77.6, 619.0], [77.7, 619.0], [77.8, 619.0], [77.9, 619.0], [78.0, 619.0], [78.1, 619.0], [78.2, 619.0], [78.3, 619.0], [78.4, 619.0], [78.5, 619.0], [78.6, 619.0], [78.7, 619.0], [78.8, 619.0], [78.9, 619.0], [79.0, 619.0], [79.1, 619.0], [79.2, 619.0], [79.3, 619.0], [79.4, 619.0], [79.5, 619.0], [79.6, 619.0], [79.7, 619.0], [79.8, 619.0], [79.9, 619.0], [80.0, 627.0], [80.1, 627.0], [80.2, 627.0], [80.3, 627.0], [80.4, 627.0], [80.5, 627.0], [80.6, 627.0], [80.7, 627.0], [80.8, 627.0], [80.9, 627.0], [81.0, 627.0], [81.1, 627.0], [81.2, 627.0], [81.3, 627.0], [81.4, 627.0], [81.5, 627.0], [81.6, 627.0], [81.7, 627.0], [81.8, 627.0], [81.9, 627.0], [82.0, 627.0], [82.1, 627.0], [82.2, 627.0], [82.3, 627.0], [82.4, 627.0], [82.5, 627.0], [82.6, 627.0], [82.7, 627.0], [82.8, 627.0], [82.9, 627.0], [83.0, 627.0], [83.1, 627.0], [83.2, 627.0], [83.3, 627.0], [83.4, 642.0], [83.5, 642.0], [83.6, 642.0], [83.7, 642.0], [83.8, 642.0], [83.9, 642.0], [84.0, 642.0], [84.1, 642.0], [84.2, 642.0], [84.3, 642.0], [84.4, 642.0], [84.5, 642.0], [84.6, 642.0], [84.7, 642.0], [84.8, 642.0], [84.9, 642.0], [85.0, 642.0], [85.1, 642.0], [85.2, 642.0], [85.3, 642.0], [85.4, 642.0], [85.5, 642.0], [85.6, 642.0], [85.7, 642.0], [85.8, 642.0], [85.9, 642.0], [86.0, 642.0], [86.1, 642.0], [86.2, 642.0], [86.3, 642.0], [86.4, 642.0], [86.5, 642.0], [86.6, 642.0], [86.7, 660.0], [86.8, 660.0], [86.9, 660.0], [87.0, 660.0], [87.1, 660.0], [87.2, 660.0], [87.3, 660.0], [87.4, 660.0], [87.5, 660.0], [87.6, 660.0], [87.7, 660.0], [87.8, 660.0], [87.9, 660.0], [88.0, 660.0], [88.1, 660.0], [88.2, 660.0], [88.3, 660.0], [88.4, 660.0], [88.5, 660.0], [88.6, 660.0], [88.7, 660.0], [88.8, 660.0], [88.9, 660.0], [89.0, 660.0], [89.1, 660.0], [89.2, 660.0], [89.3, 660.0], [89.4, 660.0], [89.5, 660.0], [89.6, 660.0], [89.7, 660.0], [89.8, 660.0], [89.9, 660.0], [90.0, 674.0], [90.1, 674.0], [90.2, 674.0], [90.3, 674.0], [90.4, 674.0], [90.5, 674.0], [90.6, 674.0], [90.7, 674.0], [90.8, 674.0], [90.9, 674.0], [91.0, 674.0], [91.1, 674.0], [91.2, 674.0], [91.3, 674.0], [91.4, 674.0], [91.5, 674.0], [91.6, 674.0], [91.7, 674.0], [91.8, 674.0], [91.9, 674.0], [92.0, 674.0], [92.1, 674.0], [92.2, 674.0], [92.3, 674.0], [92.4, 674.0], [92.5, 674.0], [92.6, 674.0], [92.7, 674.0], [92.8, 674.0], [92.9, 674.0], [93.0, 674.0], [93.1, 674.0], [93.2, 674.0], [93.3, 674.0], [93.4, 685.0], [93.5, 685.0], [93.6, 685.0], [93.7, 685.0], [93.8, 685.0], [93.9, 685.0], [94.0, 685.0], [94.1, 685.0], [94.2, 685.0], [94.3, 685.0], [94.4, 685.0], [94.5, 685.0], [94.6, 685.0], [94.7, 685.0], [94.8, 685.0], [94.9, 685.0], [95.0, 685.0], [95.1, 685.0], [95.2, 685.0], [95.3, 685.0], [95.4, 685.0], [95.5, 685.0], [95.6, 685.0], [95.7, 685.0], [95.8, 685.0], [95.9, 685.0], [96.0, 685.0], [96.1, 685.0], [96.2, 685.0], [96.3, 685.0], [96.4, 685.0], [96.5, 685.0], [96.6, 685.0], [96.7, 694.0], [96.8, 694.0], [96.9, 694.0], [97.0, 694.0], [97.1, 694.0], [97.2, 694.0], [97.3, 694.0], [97.4, 694.0], [97.5, 694.0], [97.6, 694.0], [97.7, 694.0], [97.8, 694.0], [97.9, 694.0], [98.0, 694.0], [98.1, 694.0], [98.2, 694.0], [98.3, 694.0], [98.4, 694.0], [98.5, 694.0], [98.6, 694.0], [98.7, 694.0], [98.8, 694.0], [98.9, 694.0], [99.0, 694.0], [99.1, 694.0], [99.2, 694.0], [99.3, 694.0], [99.4, 694.0], [99.5, 694.0], [99.6, 694.0], [99.7, 694.0], [99.8, 694.0], [99.9, 694.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 2.0, "minX": 200.0, "maxY": 13.0, "series": [{"data": [[300.0, 6.0], [600.0, 13.0], [200.0, 2.0], [400.0, 4.0], [500.0, 5.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 600.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 12.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 18.0, "series": [{"data": [[0.0, 12.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 18.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 1.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 7.733333333333335, "minX": 1.60386858E12, "maxY": 7.733333333333335, "series": [{"data": [[1.60386858E12, 7.733333333333335]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60386858E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 388.3333333333333, "minX": 1.0, "maxY": 694.0, "series": [{"data": [[8.0, 474.5], [4.0, 660.0], [2.0, 685.0], [1.0, 694.0], [9.0, 481.5], [5.0, 388.3333333333333], [10.0, 520.2142857142857], [6.0, 490.5], [3.0, 674.0], [7.0, 403.6666666666667]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[7.733333333333335, 508.8333333333333]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 208.86666666666667, "minX": 1.60386858E12, "maxY": 13876.833333333334, "series": [{"data": [[1.60386858E12, 13876.833333333334]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60386858E12, 208.86666666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60386858E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 508.8333333333333, "minX": 1.60386858E12, "maxY": 508.8333333333333, "series": [{"data": [[1.60386858E12, 508.8333333333333]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60386858E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 508.43333333333334, "minX": 1.60386858E12, "maxY": 508.43333333333334, "series": [{"data": [[1.60386858E12, 508.43333333333334]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60386858E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 3.8, "minX": 1.60386858E12, "maxY": 3.8, "series": [{"data": [[1.60386858E12, 3.8]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60386858E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 218.0, "minX": 1.60386858E12, "maxY": 694.0, "series": [{"data": [[1.60386858E12, 694.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60386858E12, 218.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60386858E12, 218.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60386858E12, 218.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60386858E12, 218.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60386858E12, 548.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60386858E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 305.0, "minX": 5.0, "maxY": 642.0, "series": [{"data": [[16.0, 504.5], [9.0, 642.0], [5.0, 305.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 16.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 304.0, "minX": 5.0, "maxY": 641.0, "series": [{"data": [[16.0, 504.5], [9.0, 641.0], [5.0, 304.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 16.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.5, "minX": 1.60386858E12, "maxY": 0.5, "series": [{"data": [[1.60386858E12, 0.5]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60386858E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.5, "minX": 1.60386858E12, "maxY": 0.5, "series": [{"data": [[1.60386858E12, 0.5]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60386858E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.5, "minX": 1.60386858E12, "maxY": 0.5, "series": [{"data": [[1.60386858E12, 0.5]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60386858E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.5, "minX": 1.60386858E12, "maxY": 0.5, "series": [{"data": [[1.60386858E12, 0.5]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60386858E12, "title": "Total Transactions Per Second"}},
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

