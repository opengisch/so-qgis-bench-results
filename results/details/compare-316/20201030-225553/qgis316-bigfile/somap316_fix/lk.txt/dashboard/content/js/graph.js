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
        data: {"result": {"minY": 249.0, "minX": 0.0, "maxY": 569.0, "series": [{"data": [[0.0, 249.0], [0.1, 249.0], [0.2, 249.0], [0.3, 249.0], [0.4, 249.0], [0.5, 249.0], [0.6, 249.0], [0.7, 249.0], [0.8, 249.0], [0.9, 249.0], [1.0, 249.0], [1.1, 249.0], [1.2, 249.0], [1.3, 249.0], [1.4, 249.0], [1.5, 249.0], [1.6, 249.0], [1.7, 249.0], [1.8, 249.0], [1.9, 249.0], [2.0, 249.0], [2.1, 249.0], [2.2, 249.0], [2.3, 249.0], [2.4, 249.0], [2.5, 249.0], [2.6, 249.0], [2.7, 249.0], [2.8, 249.0], [2.9, 249.0], [3.0, 249.0], [3.1, 249.0], [3.2, 249.0], [3.3, 249.0], [3.4, 252.0], [3.5, 252.0], [3.6, 252.0], [3.7, 252.0], [3.8, 252.0], [3.9, 252.0], [4.0, 252.0], [4.1, 252.0], [4.2, 252.0], [4.3, 252.0], [4.4, 252.0], [4.5, 252.0], [4.6, 252.0], [4.7, 252.0], [4.8, 252.0], [4.9, 252.0], [5.0, 252.0], [5.1, 252.0], [5.2, 252.0], [5.3, 252.0], [5.4, 252.0], [5.5, 252.0], [5.6, 252.0], [5.7, 252.0], [5.8, 252.0], [5.9, 252.0], [6.0, 252.0], [6.1, 252.0], [6.2, 252.0], [6.3, 252.0], [6.4, 252.0], [6.5, 252.0], [6.6, 252.0], [6.7, 291.0], [6.8, 291.0], [6.9, 291.0], [7.0, 291.0], [7.1, 291.0], [7.2, 291.0], [7.3, 291.0], [7.4, 291.0], [7.5, 291.0], [7.6, 291.0], [7.7, 291.0], [7.8, 291.0], [7.9, 291.0], [8.0, 291.0], [8.1, 291.0], [8.2, 291.0], [8.3, 291.0], [8.4, 291.0], [8.5, 291.0], [8.6, 291.0], [8.7, 291.0], [8.8, 291.0], [8.9, 291.0], [9.0, 291.0], [9.1, 291.0], [9.2, 291.0], [9.3, 291.0], [9.4, 291.0], [9.5, 291.0], [9.6, 291.0], [9.7, 291.0], [9.8, 291.0], [9.9, 291.0], [10.0, 293.0], [10.1, 293.0], [10.2, 293.0], [10.3, 293.0], [10.4, 293.0], [10.5, 293.0], [10.6, 293.0], [10.7, 293.0], [10.8, 293.0], [10.9, 293.0], [11.0, 293.0], [11.1, 293.0], [11.2, 293.0], [11.3, 293.0], [11.4, 293.0], [11.5, 293.0], [11.6, 293.0], [11.7, 293.0], [11.8, 293.0], [11.9, 293.0], [12.0, 293.0], [12.1, 293.0], [12.2, 293.0], [12.3, 293.0], [12.4, 293.0], [12.5, 293.0], [12.6, 293.0], [12.7, 293.0], [12.8, 293.0], [12.9, 293.0], [13.0, 293.0], [13.1, 293.0], [13.2, 293.0], [13.3, 293.0], [13.4, 296.0], [13.5, 296.0], [13.6, 296.0], [13.7, 296.0], [13.8, 296.0], [13.9, 296.0], [14.0, 296.0], [14.1, 296.0], [14.2, 296.0], [14.3, 296.0], [14.4, 296.0], [14.5, 296.0], [14.6, 296.0], [14.7, 296.0], [14.8, 296.0], [14.9, 296.0], [15.0, 296.0], [15.1, 296.0], [15.2, 296.0], [15.3, 296.0], [15.4, 296.0], [15.5, 296.0], [15.6, 296.0], [15.7, 296.0], [15.8, 296.0], [15.9, 296.0], [16.0, 296.0], [16.1, 296.0], [16.2, 296.0], [16.3, 296.0], [16.4, 296.0], [16.5, 296.0], [16.6, 296.0], [16.7, 323.0], [16.8, 323.0], [16.9, 323.0], [17.0, 323.0], [17.1, 323.0], [17.2, 323.0], [17.3, 323.0], [17.4, 323.0], [17.5, 323.0], [17.6, 323.0], [17.7, 323.0], [17.8, 323.0], [17.9, 323.0], [18.0, 323.0], [18.1, 323.0], [18.2, 323.0], [18.3, 323.0], [18.4, 323.0], [18.5, 323.0], [18.6, 323.0], [18.7, 323.0], [18.8, 323.0], [18.9, 323.0], [19.0, 323.0], [19.1, 323.0], [19.2, 323.0], [19.3, 323.0], [19.4, 323.0], [19.5, 323.0], [19.6, 323.0], [19.7, 323.0], [19.8, 323.0], [19.9, 323.0], [20.0, 326.0], [20.1, 326.0], [20.2, 326.0], [20.3, 326.0], [20.4, 326.0], [20.5, 326.0], [20.6, 326.0], [20.7, 326.0], [20.8, 326.0], [20.9, 326.0], [21.0, 326.0], [21.1, 326.0], [21.2, 326.0], [21.3, 326.0], [21.4, 326.0], [21.5, 326.0], [21.6, 326.0], [21.7, 326.0], [21.8, 326.0], [21.9, 326.0], [22.0, 326.0], [22.1, 326.0], [22.2, 326.0], [22.3, 326.0], [22.4, 326.0], [22.5, 326.0], [22.6, 326.0], [22.7, 326.0], [22.8, 326.0], [22.9, 326.0], [23.0, 326.0], [23.1, 326.0], [23.2, 326.0], [23.3, 326.0], [23.4, 344.0], [23.5, 344.0], [23.6, 344.0], [23.7, 344.0], [23.8, 344.0], [23.9, 344.0], [24.0, 344.0], [24.1, 344.0], [24.2, 344.0], [24.3, 344.0], [24.4, 344.0], [24.5, 344.0], [24.6, 344.0], [24.7, 344.0], [24.8, 344.0], [24.9, 344.0], [25.0, 344.0], [25.1, 344.0], [25.2, 344.0], [25.3, 344.0], [25.4, 344.0], [25.5, 344.0], [25.6, 344.0], [25.7, 344.0], [25.8, 344.0], [25.9, 344.0], [26.0, 344.0], [26.1, 344.0], [26.2, 344.0], [26.3, 344.0], [26.4, 344.0], [26.5, 344.0], [26.6, 344.0], [26.7, 360.0], [26.8, 360.0], [26.9, 360.0], [27.0, 360.0], [27.1, 360.0], [27.2, 360.0], [27.3, 360.0], [27.4, 360.0], [27.5, 360.0], [27.6, 360.0], [27.7, 360.0], [27.8, 360.0], [27.9, 360.0], [28.0, 360.0], [28.1, 360.0], [28.2, 360.0], [28.3, 360.0], [28.4, 360.0], [28.5, 360.0], [28.6, 360.0], [28.7, 360.0], [28.8, 360.0], [28.9, 360.0], [29.0, 360.0], [29.1, 360.0], [29.2, 360.0], [29.3, 360.0], [29.4, 360.0], [29.5, 360.0], [29.6, 360.0], [29.7, 360.0], [29.8, 360.0], [29.9, 360.0], [30.0, 368.0], [30.1, 368.0], [30.2, 368.0], [30.3, 368.0], [30.4, 368.0], [30.5, 368.0], [30.6, 368.0], [30.7, 368.0], [30.8, 368.0], [30.9, 368.0], [31.0, 368.0], [31.1, 368.0], [31.2, 368.0], [31.3, 368.0], [31.4, 368.0], [31.5, 368.0], [31.6, 368.0], [31.7, 368.0], [31.8, 368.0], [31.9, 368.0], [32.0, 368.0], [32.1, 368.0], [32.2, 368.0], [32.3, 368.0], [32.4, 368.0], [32.5, 368.0], [32.6, 368.0], [32.7, 368.0], [32.8, 368.0], [32.9, 368.0], [33.0, 368.0], [33.1, 368.0], [33.2, 368.0], [33.3, 368.0], [33.4, 409.0], [33.5, 409.0], [33.6, 409.0], [33.7, 409.0], [33.8, 409.0], [33.9, 409.0], [34.0, 409.0], [34.1, 409.0], [34.2, 409.0], [34.3, 409.0], [34.4, 409.0], [34.5, 409.0], [34.6, 409.0], [34.7, 409.0], [34.8, 409.0], [34.9, 409.0], [35.0, 409.0], [35.1, 409.0], [35.2, 409.0], [35.3, 409.0], [35.4, 409.0], [35.5, 409.0], [35.6, 409.0], [35.7, 409.0], [35.8, 409.0], [35.9, 409.0], [36.0, 409.0], [36.1, 409.0], [36.2, 409.0], [36.3, 409.0], [36.4, 409.0], [36.5, 409.0], [36.6, 409.0], [36.7, 412.0], [36.8, 412.0], [36.9, 412.0], [37.0, 412.0], [37.1, 412.0], [37.2, 412.0], [37.3, 412.0], [37.4, 412.0], [37.5, 412.0], [37.6, 412.0], [37.7, 412.0], [37.8, 412.0], [37.9, 412.0], [38.0, 412.0], [38.1, 412.0], [38.2, 412.0], [38.3, 412.0], [38.4, 412.0], [38.5, 412.0], [38.6, 412.0], [38.7, 412.0], [38.8, 412.0], [38.9, 412.0], [39.0, 412.0], [39.1, 412.0], [39.2, 412.0], [39.3, 412.0], [39.4, 412.0], [39.5, 412.0], [39.6, 412.0], [39.7, 412.0], [39.8, 412.0], [39.9, 412.0], [40.0, 421.0], [40.1, 421.0], [40.2, 421.0], [40.3, 421.0], [40.4, 421.0], [40.5, 421.0], [40.6, 421.0], [40.7, 421.0], [40.8, 421.0], [40.9, 421.0], [41.0, 421.0], [41.1, 421.0], [41.2, 421.0], [41.3, 421.0], [41.4, 421.0], [41.5, 421.0], [41.6, 421.0], [41.7, 421.0], [41.8, 421.0], [41.9, 421.0], [42.0, 421.0], [42.1, 421.0], [42.2, 421.0], [42.3, 421.0], [42.4, 421.0], [42.5, 421.0], [42.6, 421.0], [42.7, 421.0], [42.8, 421.0], [42.9, 421.0], [43.0, 421.0], [43.1, 421.0], [43.2, 421.0], [43.3, 421.0], [43.4, 444.0], [43.5, 444.0], [43.6, 444.0], [43.7, 444.0], [43.8, 444.0], [43.9, 444.0], [44.0, 444.0], [44.1, 444.0], [44.2, 444.0], [44.3, 444.0], [44.4, 444.0], [44.5, 444.0], [44.6, 444.0], [44.7, 444.0], [44.8, 444.0], [44.9, 444.0], [45.0, 444.0], [45.1, 444.0], [45.2, 444.0], [45.3, 444.0], [45.4, 444.0], [45.5, 444.0], [45.6, 444.0], [45.7, 444.0], [45.8, 444.0], [45.9, 444.0], [46.0, 444.0], [46.1, 444.0], [46.2, 444.0], [46.3, 444.0], [46.4, 444.0], [46.5, 444.0], [46.6, 444.0], [46.7, 458.0], [46.8, 458.0], [46.9, 458.0], [47.0, 458.0], [47.1, 458.0], [47.2, 458.0], [47.3, 458.0], [47.4, 458.0], [47.5, 458.0], [47.6, 458.0], [47.7, 458.0], [47.8, 458.0], [47.9, 458.0], [48.0, 458.0], [48.1, 458.0], [48.2, 458.0], [48.3, 458.0], [48.4, 458.0], [48.5, 458.0], [48.6, 458.0], [48.7, 458.0], [48.8, 458.0], [48.9, 458.0], [49.0, 458.0], [49.1, 458.0], [49.2, 458.0], [49.3, 458.0], [49.4, 458.0], [49.5, 458.0], [49.6, 458.0], [49.7, 458.0], [49.8, 458.0], [49.9, 458.0], [50.0, 458.0], [50.1, 478.0], [50.2, 478.0], [50.3, 478.0], [50.4, 478.0], [50.5, 478.0], [50.6, 478.0], [50.7, 478.0], [50.8, 478.0], [50.9, 478.0], [51.0, 478.0], [51.1, 478.0], [51.2, 478.0], [51.3, 478.0], [51.4, 478.0], [51.5, 478.0], [51.6, 478.0], [51.7, 478.0], [51.8, 478.0], [51.9, 478.0], [52.0, 478.0], [52.1, 478.0], [52.2, 478.0], [52.3, 478.0], [52.4, 478.0], [52.5, 478.0], [52.6, 478.0], [52.7, 478.0], [52.8, 478.0], [52.9, 478.0], [53.0, 478.0], [53.1, 478.0], [53.2, 478.0], [53.3, 478.0], [53.4, 487.0], [53.5, 487.0], [53.6, 487.0], [53.7, 487.0], [53.8, 487.0], [53.9, 487.0], [54.0, 487.0], [54.1, 487.0], [54.2, 487.0], [54.3, 487.0], [54.4, 487.0], [54.5, 487.0], [54.6, 487.0], [54.7, 487.0], [54.8, 487.0], [54.9, 487.0], [55.0, 487.0], [55.1, 487.0], [55.2, 487.0], [55.3, 487.0], [55.4, 487.0], [55.5, 487.0], [55.6, 487.0], [55.7, 487.0], [55.8, 487.0], [55.9, 487.0], [56.0, 487.0], [56.1, 487.0], [56.2, 487.0], [56.3, 487.0], [56.4, 487.0], [56.5, 487.0], [56.6, 487.0], [56.7, 488.0], [56.8, 488.0], [56.9, 488.0], [57.0, 488.0], [57.1, 488.0], [57.2, 488.0], [57.3, 488.0], [57.4, 488.0], [57.5, 488.0], [57.6, 488.0], [57.7, 488.0], [57.8, 488.0], [57.9, 488.0], [58.0, 488.0], [58.1, 488.0], [58.2, 488.0], [58.3, 488.0], [58.4, 488.0], [58.5, 488.0], [58.6, 488.0], [58.7, 488.0], [58.8, 488.0], [58.9, 488.0], [59.0, 488.0], [59.1, 488.0], [59.2, 488.0], [59.3, 488.0], [59.4, 488.0], [59.5, 488.0], [59.6, 488.0], [59.7, 488.0], [59.8, 488.0], [59.9, 488.0], [60.0, 488.0], [60.1, 491.0], [60.2, 491.0], [60.3, 491.0], [60.4, 491.0], [60.5, 491.0], [60.6, 491.0], [60.7, 491.0], [60.8, 491.0], [60.9, 491.0], [61.0, 491.0], [61.1, 491.0], [61.2, 491.0], [61.3, 491.0], [61.4, 491.0], [61.5, 491.0], [61.6, 491.0], [61.7, 491.0], [61.8, 491.0], [61.9, 491.0], [62.0, 491.0], [62.1, 491.0], [62.2, 491.0], [62.3, 491.0], [62.4, 491.0], [62.5, 491.0], [62.6, 491.0], [62.7, 491.0], [62.8, 491.0], [62.9, 491.0], [63.0, 491.0], [63.1, 491.0], [63.2, 491.0], [63.3, 491.0], [63.4, 493.0], [63.5, 493.0], [63.6, 493.0], [63.7, 493.0], [63.8, 493.0], [63.9, 493.0], [64.0, 493.0], [64.1, 493.0], [64.2, 493.0], [64.3, 493.0], [64.4, 493.0], [64.5, 493.0], [64.6, 493.0], [64.7, 493.0], [64.8, 493.0], [64.9, 493.0], [65.0, 493.0], [65.1, 493.0], [65.2, 493.0], [65.3, 493.0], [65.4, 493.0], [65.5, 493.0], [65.6, 493.0], [65.7, 493.0], [65.8, 493.0], [65.9, 493.0], [66.0, 493.0], [66.1, 493.0], [66.2, 493.0], [66.3, 493.0], [66.4, 493.0], [66.5, 493.0], [66.6, 493.0], [66.7, 494.0], [66.8, 494.0], [66.9, 494.0], [67.0, 494.0], [67.1, 494.0], [67.2, 494.0], [67.3, 494.0], [67.4, 494.0], [67.5, 494.0], [67.6, 494.0], [67.7, 494.0], [67.8, 494.0], [67.9, 494.0], [68.0, 494.0], [68.1, 494.0], [68.2, 494.0], [68.3, 494.0], [68.4, 494.0], [68.5, 494.0], [68.6, 494.0], [68.7, 494.0], [68.8, 494.0], [68.9, 494.0], [69.0, 494.0], [69.1, 494.0], [69.2, 494.0], [69.3, 494.0], [69.4, 494.0], [69.5, 494.0], [69.6, 494.0], [69.7, 494.0], [69.8, 494.0], [69.9, 494.0], [70.0, 494.0], [70.1, 494.0], [70.2, 494.0], [70.3, 494.0], [70.4, 494.0], [70.5, 494.0], [70.6, 494.0], [70.7, 494.0], [70.8, 494.0], [70.9, 494.0], [71.0, 494.0], [71.1, 494.0], [71.2, 494.0], [71.3, 494.0], [71.4, 494.0], [71.5, 494.0], [71.6, 494.0], [71.7, 494.0], [71.8, 494.0], [71.9, 494.0], [72.0, 494.0], [72.1, 494.0], [72.2, 494.0], [72.3, 494.0], [72.4, 494.0], [72.5, 494.0], [72.6, 494.0], [72.7, 494.0], [72.8, 494.0], [72.9, 494.0], [73.0, 494.0], [73.1, 494.0], [73.2, 494.0], [73.3, 494.0], [73.4, 498.0], [73.5, 498.0], [73.6, 498.0], [73.7, 498.0], [73.8, 498.0], [73.9, 498.0], [74.0, 498.0], [74.1, 498.0], [74.2, 498.0], [74.3, 498.0], [74.4, 498.0], [74.5, 498.0], [74.6, 498.0], [74.7, 498.0], [74.8, 498.0], [74.9, 498.0], [75.0, 498.0], [75.1, 498.0], [75.2, 498.0], [75.3, 498.0], [75.4, 498.0], [75.5, 498.0], [75.6, 498.0], [75.7, 498.0], [75.8, 498.0], [75.9, 498.0], [76.0, 498.0], [76.1, 498.0], [76.2, 498.0], [76.3, 498.0], [76.4, 498.0], [76.5, 498.0], [76.6, 498.0], [76.7, 499.0], [76.8, 499.0], [76.9, 499.0], [77.0, 499.0], [77.1, 499.0], [77.2, 499.0], [77.3, 499.0], [77.4, 499.0], [77.5, 499.0], [77.6, 499.0], [77.7, 499.0], [77.8, 499.0], [77.9, 499.0], [78.0, 499.0], [78.1, 499.0], [78.2, 499.0], [78.3, 499.0], [78.4, 499.0], [78.5, 499.0], [78.6, 499.0], [78.7, 499.0], [78.8, 499.0], [78.9, 499.0], [79.0, 499.0], [79.1, 499.0], [79.2, 499.0], [79.3, 499.0], [79.4, 499.0], [79.5, 499.0], [79.6, 499.0], [79.7, 499.0], [79.8, 499.0], [79.9, 499.0], [80.0, 499.0], [80.1, 499.0], [80.2, 499.0], [80.3, 499.0], [80.4, 499.0], [80.5, 499.0], [80.6, 499.0], [80.7, 499.0], [80.8, 499.0], [80.9, 499.0], [81.0, 499.0], [81.1, 499.0], [81.2, 499.0], [81.3, 499.0], [81.4, 499.0], [81.5, 499.0], [81.6, 499.0], [81.7, 499.0], [81.8, 499.0], [81.9, 499.0], [82.0, 499.0], [82.1, 499.0], [82.2, 499.0], [82.3, 499.0], [82.4, 499.0], [82.5, 499.0], [82.6, 499.0], [82.7, 499.0], [82.8, 499.0], [82.9, 499.0], [83.0, 499.0], [83.1, 499.0], [83.2, 499.0], [83.3, 499.0], [83.4, 502.0], [83.5, 502.0], [83.6, 502.0], [83.7, 502.0], [83.8, 502.0], [83.9, 502.0], [84.0, 502.0], [84.1, 502.0], [84.2, 502.0], [84.3, 502.0], [84.4, 502.0], [84.5, 502.0], [84.6, 502.0], [84.7, 502.0], [84.8, 502.0], [84.9, 502.0], [85.0, 502.0], [85.1, 502.0], [85.2, 502.0], [85.3, 502.0], [85.4, 502.0], [85.5, 502.0], [85.6, 502.0], [85.7, 502.0], [85.8, 502.0], [85.9, 502.0], [86.0, 502.0], [86.1, 502.0], [86.2, 502.0], [86.3, 502.0], [86.4, 502.0], [86.5, 502.0], [86.6, 502.0], [86.7, 520.0], [86.8, 520.0], [86.9, 520.0], [87.0, 520.0], [87.1, 520.0], [87.2, 520.0], [87.3, 520.0], [87.4, 520.0], [87.5, 520.0], [87.6, 520.0], [87.7, 520.0], [87.8, 520.0], [87.9, 520.0], [88.0, 520.0], [88.1, 520.0], [88.2, 520.0], [88.3, 520.0], [88.4, 520.0], [88.5, 520.0], [88.6, 520.0], [88.7, 520.0], [88.8, 520.0], [88.9, 520.0], [89.0, 520.0], [89.1, 520.0], [89.2, 520.0], [89.3, 520.0], [89.4, 520.0], [89.5, 520.0], [89.6, 520.0], [89.7, 520.0], [89.8, 520.0], [89.9, 520.0], [90.0, 520.0], [90.1, 522.0], [90.2, 522.0], [90.3, 522.0], [90.4, 522.0], [90.5, 522.0], [90.6, 522.0], [90.7, 522.0], [90.8, 522.0], [90.9, 522.0], [91.0, 522.0], [91.1, 522.0], [91.2, 522.0], [91.3, 522.0], [91.4, 522.0], [91.5, 522.0], [91.6, 522.0], [91.7, 522.0], [91.8, 522.0], [91.9, 522.0], [92.0, 522.0], [92.1, 522.0], [92.2, 522.0], [92.3, 522.0], [92.4, 522.0], [92.5, 522.0], [92.6, 522.0], [92.7, 522.0], [92.8, 522.0], [92.9, 522.0], [93.0, 522.0], [93.1, 522.0], [93.2, 522.0], [93.3, 522.0], [93.4, 546.0], [93.5, 546.0], [93.6, 546.0], [93.7, 546.0], [93.8, 546.0], [93.9, 546.0], [94.0, 546.0], [94.1, 546.0], [94.2, 546.0], [94.3, 546.0], [94.4, 546.0], [94.5, 546.0], [94.6, 546.0], [94.7, 546.0], [94.8, 546.0], [94.9, 546.0], [95.0, 546.0], [95.1, 546.0], [95.2, 546.0], [95.3, 546.0], [95.4, 546.0], [95.5, 546.0], [95.6, 546.0], [95.7, 546.0], [95.8, 546.0], [95.9, 546.0], [96.0, 546.0], [96.1, 546.0], [96.2, 546.0], [96.3, 546.0], [96.4, 546.0], [96.5, 546.0], [96.6, 546.0], [96.7, 569.0], [96.8, 569.0], [96.9, 569.0], [97.0, 569.0], [97.1, 569.0], [97.2, 569.0], [97.3, 569.0], [97.4, 569.0], [97.5, 569.0], [97.6, 569.0], [97.7, 569.0], [97.8, 569.0], [97.9, 569.0], [98.0, 569.0], [98.1, 569.0], [98.2, 569.0], [98.3, 569.0], [98.4, 569.0], [98.5, 569.0], [98.6, 569.0], [98.7, 569.0], [98.8, 569.0], [98.9, 569.0], [99.0, 569.0], [99.1, 569.0], [99.2, 569.0], [99.3, 569.0], [99.4, 569.0], [99.5, 569.0], [99.6, 569.0], [99.7, 569.0], [99.8, 569.0], [99.9, 569.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 5.0, "minX": 200.0, "maxY": 15.0, "series": [{"data": [[300.0, 5.0], [200.0, 5.0], [400.0, 15.0], [500.0, 5.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 500.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 7.633333333333331, "minX": 1.60409874E12, "maxY": 7.633333333333331, "series": [{"data": [[1.60409874E12, 7.633333333333331]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60409874E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 342.0, "minX": 1.0, "maxY": 569.0, "series": [{"data": [[8.0, 370.0], [4.0, 499.0], [2.0, 546.0], [1.0, 569.0], [9.0, 419.0], [5.0, 342.0], [10.0, 452.3076923076923], [6.0, 367.0], [3.0, 520.0], [7.0, 368.5]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[7.633333333333331, 427.53333333333336]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 209.36666666666667, "minX": 1.60409874E12, "maxY": 13877.7, "series": [{"data": [[1.60409874E12, 13877.7]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60409874E12, 209.36666666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60409874E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 427.53333333333336, "minX": 1.60409874E12, "maxY": 427.53333333333336, "series": [{"data": [[1.60409874E12, 427.53333333333336]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60409874E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 427.0333333333333, "minX": 1.60409874E12, "maxY": 427.0333333333333, "series": [{"data": [[1.60409874E12, 427.0333333333333]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60409874E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 3.1999999999999993, "minX": 1.60409874E12, "maxY": 3.1999999999999993, "series": [{"data": [[1.60409874E12, 3.1999999999999993]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60409874E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 249.0, "minX": 1.60409874E12, "maxY": 569.0, "series": [{"data": [[1.60409874E12, 569.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60409874E12, 249.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60409874E12, 249.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60409874E12, 249.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60409874E12, 249.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60409874E12, 468.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60409874E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 323.0, "minX": 11.0, "maxY": 494.0, "series": [{"data": [[19.0, 494.0], [11.0, 323.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 19.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 322.0, "minX": 11.0, "maxY": 494.0, "series": [{"data": [[19.0, 494.0], [11.0, 322.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 19.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.5, "minX": 1.60409874E12, "maxY": 0.5, "series": [{"data": [[1.60409874E12, 0.5]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60409874E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.5, "minX": 1.60409874E12, "maxY": 0.5, "series": [{"data": [[1.60409874E12, 0.5]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60409874E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.5, "minX": 1.60409874E12, "maxY": 0.5, "series": [{"data": [[1.60409874E12, 0.5]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60409874E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.5, "minX": 1.60409874E12, "maxY": 0.5, "series": [{"data": [[1.60409874E12, 0.5]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60409874E12, "title": "Total Transactions Per Second"}},
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

