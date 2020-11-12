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
        data: {"result": {"minY": 58.0, "minX": 0.0, "maxY": 890.0, "series": [{"data": [[0.0, 58.0], [0.1, 58.0], [0.2, 58.0], [0.3, 58.0], [0.4, 58.0], [0.5, 58.0], [0.6, 58.0], [0.7, 58.0], [0.8, 58.0], [0.9, 58.0], [1.0, 58.0], [1.1, 58.0], [1.2, 58.0], [1.3, 58.0], [1.4, 58.0], [1.5, 58.0], [1.6, 58.0], [1.7, 58.0], [1.8, 58.0], [1.9, 58.0], [2.0, 58.0], [2.1, 58.0], [2.2, 58.0], [2.3, 58.0], [2.4, 58.0], [2.5, 58.0], [2.6, 58.0], [2.7, 58.0], [2.8, 58.0], [2.9, 58.0], [3.0, 58.0], [3.1, 58.0], [3.2, 58.0], [3.3, 58.0], [3.4, 73.0], [3.5, 73.0], [3.6, 73.0], [3.7, 73.0], [3.8, 73.0], [3.9, 73.0], [4.0, 73.0], [4.1, 73.0], [4.2, 73.0], [4.3, 73.0], [4.4, 73.0], [4.5, 73.0], [4.6, 73.0], [4.7, 73.0], [4.8, 73.0], [4.9, 73.0], [5.0, 73.0], [5.1, 73.0], [5.2, 73.0], [5.3, 73.0], [5.4, 73.0], [5.5, 73.0], [5.6, 73.0], [5.7, 73.0], [5.8, 73.0], [5.9, 73.0], [6.0, 73.0], [6.1, 73.0], [6.2, 73.0], [6.3, 73.0], [6.4, 73.0], [6.5, 73.0], [6.6, 73.0], [6.7, 77.0], [6.8, 77.0], [6.9, 77.0], [7.0, 77.0], [7.1, 77.0], [7.2, 77.0], [7.3, 77.0], [7.4, 77.0], [7.5, 77.0], [7.6, 77.0], [7.7, 77.0], [7.8, 77.0], [7.9, 77.0], [8.0, 77.0], [8.1, 77.0], [8.2, 77.0], [8.3, 77.0], [8.4, 77.0], [8.5, 77.0], [8.6, 77.0], [8.7, 77.0], [8.8, 77.0], [8.9, 77.0], [9.0, 77.0], [9.1, 77.0], [9.2, 77.0], [9.3, 77.0], [9.4, 77.0], [9.5, 77.0], [9.6, 77.0], [9.7, 77.0], [9.8, 77.0], [9.9, 77.0], [10.0, 79.0], [10.1, 79.0], [10.2, 79.0], [10.3, 79.0], [10.4, 79.0], [10.5, 79.0], [10.6, 79.0], [10.7, 79.0], [10.8, 79.0], [10.9, 79.0], [11.0, 79.0], [11.1, 79.0], [11.2, 79.0], [11.3, 79.0], [11.4, 79.0], [11.5, 79.0], [11.6, 79.0], [11.7, 79.0], [11.8, 79.0], [11.9, 79.0], [12.0, 79.0], [12.1, 79.0], [12.2, 79.0], [12.3, 79.0], [12.4, 79.0], [12.5, 79.0], [12.6, 79.0], [12.7, 79.0], [12.8, 79.0], [12.9, 79.0], [13.0, 79.0], [13.1, 79.0], [13.2, 79.0], [13.3, 79.0], [13.4, 87.0], [13.5, 87.0], [13.6, 87.0], [13.7, 87.0], [13.8, 87.0], [13.9, 87.0], [14.0, 87.0], [14.1, 87.0], [14.2, 87.0], [14.3, 87.0], [14.4, 87.0], [14.5, 87.0], [14.6, 87.0], [14.7, 87.0], [14.8, 87.0], [14.9, 87.0], [15.0, 87.0], [15.1, 87.0], [15.2, 87.0], [15.3, 87.0], [15.4, 87.0], [15.5, 87.0], [15.6, 87.0], [15.7, 87.0], [15.8, 87.0], [15.9, 87.0], [16.0, 87.0], [16.1, 87.0], [16.2, 87.0], [16.3, 87.0], [16.4, 87.0], [16.5, 87.0], [16.6, 87.0], [16.7, 87.0], [16.8, 87.0], [16.9, 87.0], [17.0, 87.0], [17.1, 87.0], [17.2, 87.0], [17.3, 87.0], [17.4, 87.0], [17.5, 87.0], [17.6, 87.0], [17.7, 87.0], [17.8, 87.0], [17.9, 87.0], [18.0, 87.0], [18.1, 87.0], [18.2, 87.0], [18.3, 87.0], [18.4, 87.0], [18.5, 87.0], [18.6, 87.0], [18.7, 87.0], [18.8, 87.0], [18.9, 87.0], [19.0, 87.0], [19.1, 87.0], [19.2, 87.0], [19.3, 87.0], [19.4, 87.0], [19.5, 87.0], [19.6, 87.0], [19.7, 87.0], [19.8, 87.0], [19.9, 87.0], [20.0, 89.0], [20.1, 89.0], [20.2, 89.0], [20.3, 89.0], [20.4, 89.0], [20.5, 89.0], [20.6, 89.0], [20.7, 89.0], [20.8, 89.0], [20.9, 89.0], [21.0, 89.0], [21.1, 89.0], [21.2, 89.0], [21.3, 89.0], [21.4, 89.0], [21.5, 89.0], [21.6, 89.0], [21.7, 89.0], [21.8, 89.0], [21.9, 89.0], [22.0, 89.0], [22.1, 89.0], [22.2, 89.0], [22.3, 89.0], [22.4, 89.0], [22.5, 89.0], [22.6, 89.0], [22.7, 89.0], [22.8, 89.0], [22.9, 89.0], [23.0, 89.0], [23.1, 89.0], [23.2, 89.0], [23.3, 89.0], [23.4, 92.0], [23.5, 92.0], [23.6, 92.0], [23.7, 92.0], [23.8, 92.0], [23.9, 92.0], [24.0, 92.0], [24.1, 92.0], [24.2, 92.0], [24.3, 92.0], [24.4, 92.0], [24.5, 92.0], [24.6, 92.0], [24.7, 92.0], [24.8, 92.0], [24.9, 92.0], [25.0, 92.0], [25.1, 92.0], [25.2, 92.0], [25.3, 92.0], [25.4, 92.0], [25.5, 92.0], [25.6, 92.0], [25.7, 92.0], [25.8, 92.0], [25.9, 92.0], [26.0, 92.0], [26.1, 92.0], [26.2, 92.0], [26.3, 92.0], [26.4, 92.0], [26.5, 92.0], [26.6, 92.0], [26.7, 94.0], [26.8, 94.0], [26.9, 94.0], [27.0, 94.0], [27.1, 94.0], [27.2, 94.0], [27.3, 94.0], [27.4, 94.0], [27.5, 94.0], [27.6, 94.0], [27.7, 94.0], [27.8, 94.0], [27.9, 94.0], [28.0, 94.0], [28.1, 94.0], [28.2, 94.0], [28.3, 94.0], [28.4, 94.0], [28.5, 94.0], [28.6, 94.0], [28.7, 94.0], [28.8, 94.0], [28.9, 94.0], [29.0, 94.0], [29.1, 94.0], [29.2, 94.0], [29.3, 94.0], [29.4, 94.0], [29.5, 94.0], [29.6, 94.0], [29.7, 94.0], [29.8, 94.0], [29.9, 94.0], [30.0, 99.0], [30.1, 99.0], [30.2, 99.0], [30.3, 99.0], [30.4, 99.0], [30.5, 99.0], [30.6, 99.0], [30.7, 99.0], [30.8, 99.0], [30.9, 99.0], [31.0, 99.0], [31.1, 99.0], [31.2, 99.0], [31.3, 99.0], [31.4, 99.0], [31.5, 99.0], [31.6, 99.0], [31.7, 99.0], [31.8, 99.0], [31.9, 99.0], [32.0, 99.0], [32.1, 99.0], [32.2, 99.0], [32.3, 99.0], [32.4, 99.0], [32.5, 99.0], [32.6, 99.0], [32.7, 99.0], [32.8, 99.0], [32.9, 99.0], [33.0, 99.0], [33.1, 99.0], [33.2, 99.0], [33.3, 99.0], [33.4, 100.0], [33.5, 100.0], [33.6, 100.0], [33.7, 100.0], [33.8, 100.0], [33.9, 100.0], [34.0, 100.0], [34.1, 100.0], [34.2, 100.0], [34.3, 100.0], [34.4, 100.0], [34.5, 100.0], [34.6, 100.0], [34.7, 100.0], [34.8, 100.0], [34.9, 100.0], [35.0, 100.0], [35.1, 100.0], [35.2, 100.0], [35.3, 100.0], [35.4, 100.0], [35.5, 100.0], [35.6, 100.0], [35.7, 100.0], [35.8, 100.0], [35.9, 100.0], [36.0, 100.0], [36.1, 100.0], [36.2, 100.0], [36.3, 100.0], [36.4, 100.0], [36.5, 100.0], [36.6, 100.0], [36.7, 144.0], [36.8, 144.0], [36.9, 144.0], [37.0, 144.0], [37.1, 144.0], [37.2, 144.0], [37.3, 144.0], [37.4, 144.0], [37.5, 144.0], [37.6, 144.0], [37.7, 144.0], [37.8, 144.0], [37.9, 144.0], [38.0, 144.0], [38.1, 144.0], [38.2, 144.0], [38.3, 144.0], [38.4, 144.0], [38.5, 144.0], [38.6, 144.0], [38.7, 144.0], [38.8, 144.0], [38.9, 144.0], [39.0, 144.0], [39.1, 144.0], [39.2, 144.0], [39.3, 144.0], [39.4, 144.0], [39.5, 144.0], [39.6, 144.0], [39.7, 144.0], [39.8, 144.0], [39.9, 144.0], [40.0, 155.0], [40.1, 155.0], [40.2, 155.0], [40.3, 155.0], [40.4, 155.0], [40.5, 155.0], [40.6, 155.0], [40.7, 155.0], [40.8, 155.0], [40.9, 155.0], [41.0, 155.0], [41.1, 155.0], [41.2, 155.0], [41.3, 155.0], [41.4, 155.0], [41.5, 155.0], [41.6, 155.0], [41.7, 155.0], [41.8, 155.0], [41.9, 155.0], [42.0, 155.0], [42.1, 155.0], [42.2, 155.0], [42.3, 155.0], [42.4, 155.0], [42.5, 155.0], [42.6, 155.0], [42.7, 155.0], [42.8, 155.0], [42.9, 155.0], [43.0, 155.0], [43.1, 155.0], [43.2, 155.0], [43.3, 155.0], [43.4, 162.0], [43.5, 162.0], [43.6, 162.0], [43.7, 162.0], [43.8, 162.0], [43.9, 162.0], [44.0, 162.0], [44.1, 162.0], [44.2, 162.0], [44.3, 162.0], [44.4, 162.0], [44.5, 162.0], [44.6, 162.0], [44.7, 162.0], [44.8, 162.0], [44.9, 162.0], [45.0, 162.0], [45.1, 162.0], [45.2, 162.0], [45.3, 162.0], [45.4, 162.0], [45.5, 162.0], [45.6, 162.0], [45.7, 162.0], [45.8, 162.0], [45.9, 162.0], [46.0, 162.0], [46.1, 162.0], [46.2, 162.0], [46.3, 162.0], [46.4, 162.0], [46.5, 162.0], [46.6, 162.0], [46.7, 167.0], [46.8, 167.0], [46.9, 167.0], [47.0, 167.0], [47.1, 167.0], [47.2, 167.0], [47.3, 167.0], [47.4, 167.0], [47.5, 167.0], [47.6, 167.0], [47.7, 167.0], [47.8, 167.0], [47.9, 167.0], [48.0, 167.0], [48.1, 167.0], [48.2, 167.0], [48.3, 167.0], [48.4, 167.0], [48.5, 167.0], [48.6, 167.0], [48.7, 167.0], [48.8, 167.0], [48.9, 167.0], [49.0, 167.0], [49.1, 167.0], [49.2, 167.0], [49.3, 167.0], [49.4, 167.0], [49.5, 167.0], [49.6, 167.0], [49.7, 167.0], [49.8, 167.0], [49.9, 167.0], [50.0, 167.0], [50.1, 171.0], [50.2, 171.0], [50.3, 171.0], [50.4, 171.0], [50.5, 171.0], [50.6, 171.0], [50.7, 171.0], [50.8, 171.0], [50.9, 171.0], [51.0, 171.0], [51.1, 171.0], [51.2, 171.0], [51.3, 171.0], [51.4, 171.0], [51.5, 171.0], [51.6, 171.0], [51.7, 171.0], [51.8, 171.0], [51.9, 171.0], [52.0, 171.0], [52.1, 171.0], [52.2, 171.0], [52.3, 171.0], [52.4, 171.0], [52.5, 171.0], [52.6, 171.0], [52.7, 171.0], [52.8, 171.0], [52.9, 171.0], [53.0, 171.0], [53.1, 171.0], [53.2, 171.0], [53.3, 171.0], [53.4, 178.0], [53.5, 178.0], [53.6, 178.0], [53.7, 178.0], [53.8, 178.0], [53.9, 178.0], [54.0, 178.0], [54.1, 178.0], [54.2, 178.0], [54.3, 178.0], [54.4, 178.0], [54.5, 178.0], [54.6, 178.0], [54.7, 178.0], [54.8, 178.0], [54.9, 178.0], [55.0, 178.0], [55.1, 178.0], [55.2, 178.0], [55.3, 178.0], [55.4, 178.0], [55.5, 178.0], [55.6, 178.0], [55.7, 178.0], [55.8, 178.0], [55.9, 178.0], [56.0, 178.0], [56.1, 178.0], [56.2, 178.0], [56.3, 178.0], [56.4, 178.0], [56.5, 178.0], [56.6, 178.0], [56.7, 179.0], [56.8, 179.0], [56.9, 179.0], [57.0, 179.0], [57.1, 179.0], [57.2, 179.0], [57.3, 179.0], [57.4, 179.0], [57.5, 179.0], [57.6, 179.0], [57.7, 179.0], [57.8, 179.0], [57.9, 179.0], [58.0, 179.0], [58.1, 179.0], [58.2, 179.0], [58.3, 179.0], [58.4, 179.0], [58.5, 179.0], [58.6, 179.0], [58.7, 179.0], [58.8, 179.0], [58.9, 179.0], [59.0, 179.0], [59.1, 179.0], [59.2, 179.0], [59.3, 179.0], [59.4, 179.0], [59.5, 179.0], [59.6, 179.0], [59.7, 179.0], [59.8, 179.0], [59.9, 179.0], [60.0, 179.0], [60.1, 182.0], [60.2, 182.0], [60.3, 182.0], [60.4, 182.0], [60.5, 182.0], [60.6, 182.0], [60.7, 182.0], [60.8, 182.0], [60.9, 182.0], [61.0, 182.0], [61.1, 182.0], [61.2, 182.0], [61.3, 182.0], [61.4, 182.0], [61.5, 182.0], [61.6, 182.0], [61.7, 182.0], [61.8, 182.0], [61.9, 182.0], [62.0, 182.0], [62.1, 182.0], [62.2, 182.0], [62.3, 182.0], [62.4, 182.0], [62.5, 182.0], [62.6, 182.0], [62.7, 182.0], [62.8, 182.0], [62.9, 182.0], [63.0, 182.0], [63.1, 182.0], [63.2, 182.0], [63.3, 182.0], [63.4, 183.0], [63.5, 183.0], [63.6, 183.0], [63.7, 183.0], [63.8, 183.0], [63.9, 183.0], [64.0, 183.0], [64.1, 183.0], [64.2, 183.0], [64.3, 183.0], [64.4, 183.0], [64.5, 183.0], [64.6, 183.0], [64.7, 183.0], [64.8, 183.0], [64.9, 183.0], [65.0, 183.0], [65.1, 183.0], [65.2, 183.0], [65.3, 183.0], [65.4, 183.0], [65.5, 183.0], [65.6, 183.0], [65.7, 183.0], [65.8, 183.0], [65.9, 183.0], [66.0, 183.0], [66.1, 183.0], [66.2, 183.0], [66.3, 183.0], [66.4, 183.0], [66.5, 183.0], [66.6, 183.0], [66.7, 198.0], [66.8, 198.0], [66.9, 198.0], [67.0, 198.0], [67.1, 198.0], [67.2, 198.0], [67.3, 198.0], [67.4, 198.0], [67.5, 198.0], [67.6, 198.0], [67.7, 198.0], [67.8, 198.0], [67.9, 198.0], [68.0, 198.0], [68.1, 198.0], [68.2, 198.0], [68.3, 198.0], [68.4, 198.0], [68.5, 198.0], [68.6, 198.0], [68.7, 198.0], [68.8, 198.0], [68.9, 198.0], [69.0, 198.0], [69.1, 198.0], [69.2, 198.0], [69.3, 198.0], [69.4, 198.0], [69.5, 198.0], [69.6, 198.0], [69.7, 198.0], [69.8, 198.0], [69.9, 198.0], [70.0, 198.0], [70.1, 252.0], [70.2, 252.0], [70.3, 252.0], [70.4, 252.0], [70.5, 252.0], [70.6, 252.0], [70.7, 252.0], [70.8, 252.0], [70.9, 252.0], [71.0, 252.0], [71.1, 252.0], [71.2, 252.0], [71.3, 252.0], [71.4, 252.0], [71.5, 252.0], [71.6, 252.0], [71.7, 252.0], [71.8, 252.0], [71.9, 252.0], [72.0, 252.0], [72.1, 252.0], [72.2, 252.0], [72.3, 252.0], [72.4, 252.0], [72.5, 252.0], [72.6, 252.0], [72.7, 252.0], [72.8, 252.0], [72.9, 252.0], [73.0, 252.0], [73.1, 252.0], [73.2, 252.0], [73.3, 252.0], [73.4, 277.0], [73.5, 277.0], [73.6, 277.0], [73.7, 277.0], [73.8, 277.0], [73.9, 277.0], [74.0, 277.0], [74.1, 277.0], [74.2, 277.0], [74.3, 277.0], [74.4, 277.0], [74.5, 277.0], [74.6, 277.0], [74.7, 277.0], [74.8, 277.0], [74.9, 277.0], [75.0, 277.0], [75.1, 277.0], [75.2, 277.0], [75.3, 277.0], [75.4, 277.0], [75.5, 277.0], [75.6, 277.0], [75.7, 277.0], [75.8, 277.0], [75.9, 277.0], [76.0, 277.0], [76.1, 277.0], [76.2, 277.0], [76.3, 277.0], [76.4, 277.0], [76.5, 277.0], [76.6, 277.0], [76.7, 315.0], [76.8, 315.0], [76.9, 315.0], [77.0, 315.0], [77.1, 315.0], [77.2, 315.0], [77.3, 315.0], [77.4, 315.0], [77.5, 315.0], [77.6, 315.0], [77.7, 315.0], [77.8, 315.0], [77.9, 315.0], [78.0, 315.0], [78.1, 315.0], [78.2, 315.0], [78.3, 315.0], [78.4, 315.0], [78.5, 315.0], [78.6, 315.0], [78.7, 315.0], [78.8, 315.0], [78.9, 315.0], [79.0, 315.0], [79.1, 315.0], [79.2, 315.0], [79.3, 315.0], [79.4, 315.0], [79.5, 315.0], [79.6, 315.0], [79.7, 315.0], [79.8, 315.0], [79.9, 315.0], [80.0, 364.0], [80.1, 364.0], [80.2, 364.0], [80.3, 364.0], [80.4, 364.0], [80.5, 364.0], [80.6, 364.0], [80.7, 364.0], [80.8, 364.0], [80.9, 364.0], [81.0, 364.0], [81.1, 364.0], [81.2, 364.0], [81.3, 364.0], [81.4, 364.0], [81.5, 364.0], [81.6, 364.0], [81.7, 364.0], [81.8, 364.0], [81.9, 364.0], [82.0, 364.0], [82.1, 364.0], [82.2, 364.0], [82.3, 364.0], [82.4, 364.0], [82.5, 364.0], [82.6, 364.0], [82.7, 364.0], [82.8, 364.0], [82.9, 364.0], [83.0, 364.0], [83.1, 364.0], [83.2, 364.0], [83.3, 364.0], [83.4, 511.0], [83.5, 511.0], [83.6, 511.0], [83.7, 511.0], [83.8, 511.0], [83.9, 511.0], [84.0, 511.0], [84.1, 511.0], [84.2, 511.0], [84.3, 511.0], [84.4, 511.0], [84.5, 511.0], [84.6, 511.0], [84.7, 511.0], [84.8, 511.0], [84.9, 511.0], [85.0, 511.0], [85.1, 511.0], [85.2, 511.0], [85.3, 511.0], [85.4, 511.0], [85.5, 511.0], [85.6, 511.0], [85.7, 511.0], [85.8, 511.0], [85.9, 511.0], [86.0, 511.0], [86.1, 511.0], [86.2, 511.0], [86.3, 511.0], [86.4, 511.0], [86.5, 511.0], [86.6, 511.0], [86.7, 795.0], [86.8, 795.0], [86.9, 795.0], [87.0, 795.0], [87.1, 795.0], [87.2, 795.0], [87.3, 795.0], [87.4, 795.0], [87.5, 795.0], [87.6, 795.0], [87.7, 795.0], [87.8, 795.0], [87.9, 795.0], [88.0, 795.0], [88.1, 795.0], [88.2, 795.0], [88.3, 795.0], [88.4, 795.0], [88.5, 795.0], [88.6, 795.0], [88.7, 795.0], [88.8, 795.0], [88.9, 795.0], [89.0, 795.0], [89.1, 795.0], [89.2, 795.0], [89.3, 795.0], [89.4, 795.0], [89.5, 795.0], [89.6, 795.0], [89.7, 795.0], [89.8, 795.0], [89.9, 795.0], [90.0, 824.0], [90.1, 824.0], [90.2, 824.0], [90.3, 824.0], [90.4, 824.0], [90.5, 824.0], [90.6, 824.0], [90.7, 824.0], [90.8, 824.0], [90.9, 824.0], [91.0, 824.0], [91.1, 824.0], [91.2, 824.0], [91.3, 824.0], [91.4, 824.0], [91.5, 824.0], [91.6, 824.0], [91.7, 824.0], [91.8, 824.0], [91.9, 824.0], [92.0, 824.0], [92.1, 824.0], [92.2, 824.0], [92.3, 824.0], [92.4, 824.0], [92.5, 824.0], [92.6, 824.0], [92.7, 824.0], [92.8, 824.0], [92.9, 824.0], [93.0, 824.0], [93.1, 824.0], [93.2, 824.0], [93.3, 824.0], [93.4, 849.0], [93.5, 849.0], [93.6, 849.0], [93.7, 849.0], [93.8, 849.0], [93.9, 849.0], [94.0, 849.0], [94.1, 849.0], [94.2, 849.0], [94.3, 849.0], [94.4, 849.0], [94.5, 849.0], [94.6, 849.0], [94.7, 849.0], [94.8, 849.0], [94.9, 849.0], [95.0, 849.0], [95.1, 849.0], [95.2, 849.0], [95.3, 849.0], [95.4, 849.0], [95.5, 849.0], [95.6, 849.0], [95.7, 849.0], [95.8, 849.0], [95.9, 849.0], [96.0, 849.0], [96.1, 849.0], [96.2, 849.0], [96.3, 849.0], [96.4, 849.0], [96.5, 849.0], [96.6, 849.0], [96.7, 890.0], [96.8, 890.0], [96.9, 890.0], [97.0, 890.0], [97.1, 890.0], [97.2, 890.0], [97.3, 890.0], [97.4, 890.0], [97.5, 890.0], [97.6, 890.0], [97.7, 890.0], [97.8, 890.0], [97.9, 890.0], [98.0, 890.0], [98.1, 890.0], [98.2, 890.0], [98.3, 890.0], [98.4, 890.0], [98.5, 890.0], [98.6, 890.0], [98.7, 890.0], [98.8, 890.0], [98.9, 890.0], [99.0, 890.0], [99.1, 890.0], [99.2, 890.0], [99.3, 890.0], [99.4, 890.0], [99.5, 890.0], [99.6, 890.0], [99.7, 890.0], [99.8, 890.0], [99.9, 890.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 11.0, "series": [{"data": [[0.0, 10.0], [300.0, 2.0], [700.0, 1.0], [200.0, 2.0], [100.0, 11.0], [800.0, 3.0], [500.0, 1.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 800.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 5.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 25.0, "series": [{"data": [[0.0, 25.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 5.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 1.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 7.766666666666666, "minX": 1.6050657E12, "maxY": 7.766666666666666, "series": [{"data": [[1.6050657E12, 7.766666666666666]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6050657E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 116.0, "minX": 1.0, "maxY": 795.0, "series": [{"data": [[8.0, 116.0], [4.0, 179.0], [2.0, 795.0], [1.0, 198.0], [9.0, 129.5], [5.0, 170.5], [10.0, 332.46153846153845], [6.0, 218.5], [3.0, 178.0], [7.0, 186.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[7.766666666666666, 257.7]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 208.86666666666667, "minX": 1.6050657E12, "maxY": 13878.7, "series": [{"data": [[1.6050657E12, 13878.7]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6050657E12, 208.86666666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6050657E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 257.7, "minX": 1.6050657E12, "maxY": 257.7, "series": [{"data": [[1.6050657E12, 257.7]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6050657E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 257.26666666666665, "minX": 1.6050657E12, "maxY": 257.26666666666665, "series": [{"data": [[1.6050657E12, 257.26666666666665]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6050657E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 3.266666666666666, "minX": 1.6050657E12, "maxY": 3.266666666666666, "series": [{"data": [[1.6050657E12, 3.266666666666666]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6050657E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 58.0, "minX": 1.6050657E12, "maxY": 890.0, "series": [{"data": [[1.6050657E12, 890.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6050657E12, 58.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6050657E12, 58.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6050657E12, 58.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.6050657E12, 58.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6050657E12, 169.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6050657E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 144.0, "minX": 11.0, "maxY": 182.0, "series": [{"data": [[19.0, 144.0], [11.0, 182.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 19.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 144.0, "minX": 11.0, "maxY": 181.0, "series": [{"data": [[19.0, 144.0], [11.0, 181.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 19.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.5, "minX": 1.6050657E12, "maxY": 0.5, "series": [{"data": [[1.6050657E12, 0.5]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6050657E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.5, "minX": 1.6050657E12, "maxY": 0.5, "series": [{"data": [[1.6050657E12, 0.5]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6050657E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.5, "minX": 1.6050657E12, "maxY": 0.5, "series": [{"data": [[1.6050657E12, 0.5]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6050657E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.5, "minX": 1.6050657E12, "maxY": 0.5, "series": [{"data": [[1.6050657E12, 0.5]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6050657E12, "title": "Total Transactions Per Second"}},
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

