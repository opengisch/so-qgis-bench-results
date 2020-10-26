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
        data: {"result": {"minY": 455.0, "minX": 0.0, "maxY": 1028.0, "series": [{"data": [[0.0, 455.0], [0.1, 455.0], [0.2, 455.0], [0.3, 455.0], [0.4, 455.0], [0.5, 455.0], [0.6, 455.0], [0.7, 455.0], [0.8, 455.0], [0.9, 455.0], [1.0, 455.0], [1.1, 455.0], [1.2, 455.0], [1.3, 455.0], [1.4, 455.0], [1.5, 455.0], [1.6, 455.0], [1.7, 455.0], [1.8, 455.0], [1.9, 455.0], [2.0, 455.0], [2.1, 455.0], [2.2, 455.0], [2.3, 455.0], [2.4, 455.0], [2.5, 455.0], [2.6, 455.0], [2.7, 455.0], [2.8, 455.0], [2.9, 455.0], [3.0, 455.0], [3.1, 455.0], [3.2, 455.0], [3.3, 455.0], [3.4, 459.0], [3.5, 459.0], [3.6, 459.0], [3.7, 459.0], [3.8, 459.0], [3.9, 459.0], [4.0, 459.0], [4.1, 459.0], [4.2, 459.0], [4.3, 459.0], [4.4, 459.0], [4.5, 459.0], [4.6, 459.0], [4.7, 459.0], [4.8, 459.0], [4.9, 459.0], [5.0, 459.0], [5.1, 459.0], [5.2, 459.0], [5.3, 459.0], [5.4, 459.0], [5.5, 459.0], [5.6, 459.0], [5.7, 459.0], [5.8, 459.0], [5.9, 459.0], [6.0, 459.0], [6.1, 459.0], [6.2, 459.0], [6.3, 459.0], [6.4, 459.0], [6.5, 459.0], [6.6, 459.0], [6.7, 459.0], [6.8, 459.0], [6.9, 459.0], [7.0, 459.0], [7.1, 459.0], [7.2, 459.0], [7.3, 459.0], [7.4, 459.0], [7.5, 459.0], [7.6, 459.0], [7.7, 459.0], [7.8, 459.0], [7.9, 459.0], [8.0, 459.0], [8.1, 459.0], [8.2, 459.0], [8.3, 459.0], [8.4, 459.0], [8.5, 459.0], [8.6, 459.0], [8.7, 459.0], [8.8, 459.0], [8.9, 459.0], [9.0, 459.0], [9.1, 459.0], [9.2, 459.0], [9.3, 459.0], [9.4, 459.0], [9.5, 459.0], [9.6, 459.0], [9.7, 459.0], [9.8, 459.0], [9.9, 459.0], [10.0, 463.0], [10.1, 463.0], [10.2, 463.0], [10.3, 463.0], [10.4, 463.0], [10.5, 463.0], [10.6, 463.0], [10.7, 463.0], [10.8, 463.0], [10.9, 463.0], [11.0, 463.0], [11.1, 463.0], [11.2, 463.0], [11.3, 463.0], [11.4, 463.0], [11.5, 463.0], [11.6, 463.0], [11.7, 463.0], [11.8, 463.0], [11.9, 463.0], [12.0, 463.0], [12.1, 463.0], [12.2, 463.0], [12.3, 463.0], [12.4, 463.0], [12.5, 463.0], [12.6, 463.0], [12.7, 463.0], [12.8, 463.0], [12.9, 463.0], [13.0, 463.0], [13.1, 463.0], [13.2, 463.0], [13.3, 463.0], [13.4, 464.0], [13.5, 464.0], [13.6, 464.0], [13.7, 464.0], [13.8, 464.0], [13.9, 464.0], [14.0, 464.0], [14.1, 464.0], [14.2, 464.0], [14.3, 464.0], [14.4, 464.0], [14.5, 464.0], [14.6, 464.0], [14.7, 464.0], [14.8, 464.0], [14.9, 464.0], [15.0, 464.0], [15.1, 464.0], [15.2, 464.0], [15.3, 464.0], [15.4, 464.0], [15.5, 464.0], [15.6, 464.0], [15.7, 464.0], [15.8, 464.0], [15.9, 464.0], [16.0, 464.0], [16.1, 464.0], [16.2, 464.0], [16.3, 464.0], [16.4, 464.0], [16.5, 464.0], [16.6, 464.0], [16.7, 468.0], [16.8, 468.0], [16.9, 468.0], [17.0, 468.0], [17.1, 468.0], [17.2, 468.0], [17.3, 468.0], [17.4, 468.0], [17.5, 468.0], [17.6, 468.0], [17.7, 468.0], [17.8, 468.0], [17.9, 468.0], [18.0, 468.0], [18.1, 468.0], [18.2, 468.0], [18.3, 468.0], [18.4, 468.0], [18.5, 468.0], [18.6, 468.0], [18.7, 468.0], [18.8, 468.0], [18.9, 468.0], [19.0, 468.0], [19.1, 468.0], [19.2, 468.0], [19.3, 468.0], [19.4, 468.0], [19.5, 468.0], [19.6, 468.0], [19.7, 468.0], [19.8, 468.0], [19.9, 468.0], [20.0, 472.0], [20.1, 472.0], [20.2, 472.0], [20.3, 472.0], [20.4, 472.0], [20.5, 472.0], [20.6, 472.0], [20.7, 472.0], [20.8, 472.0], [20.9, 472.0], [21.0, 472.0], [21.1, 472.0], [21.2, 472.0], [21.3, 472.0], [21.4, 472.0], [21.5, 472.0], [21.6, 472.0], [21.7, 472.0], [21.8, 472.0], [21.9, 472.0], [22.0, 472.0], [22.1, 472.0], [22.2, 472.0], [22.3, 472.0], [22.4, 472.0], [22.5, 472.0], [22.6, 472.0], [22.7, 472.0], [22.8, 472.0], [22.9, 472.0], [23.0, 472.0], [23.1, 472.0], [23.2, 472.0], [23.3, 472.0], [23.4, 475.0], [23.5, 475.0], [23.6, 475.0], [23.7, 475.0], [23.8, 475.0], [23.9, 475.0], [24.0, 475.0], [24.1, 475.0], [24.2, 475.0], [24.3, 475.0], [24.4, 475.0], [24.5, 475.0], [24.6, 475.0], [24.7, 475.0], [24.8, 475.0], [24.9, 475.0], [25.0, 475.0], [25.1, 475.0], [25.2, 475.0], [25.3, 475.0], [25.4, 475.0], [25.5, 475.0], [25.6, 475.0], [25.7, 475.0], [25.8, 475.0], [25.9, 475.0], [26.0, 475.0], [26.1, 475.0], [26.2, 475.0], [26.3, 475.0], [26.4, 475.0], [26.5, 475.0], [26.6, 475.0], [26.7, 482.0], [26.8, 482.0], [26.9, 482.0], [27.0, 482.0], [27.1, 482.0], [27.2, 482.0], [27.3, 482.0], [27.4, 482.0], [27.5, 482.0], [27.6, 482.0], [27.7, 482.0], [27.8, 482.0], [27.9, 482.0], [28.0, 482.0], [28.1, 482.0], [28.2, 482.0], [28.3, 482.0], [28.4, 482.0], [28.5, 482.0], [28.6, 482.0], [28.7, 482.0], [28.8, 482.0], [28.9, 482.0], [29.0, 482.0], [29.1, 482.0], [29.2, 482.0], [29.3, 482.0], [29.4, 482.0], [29.5, 482.0], [29.6, 482.0], [29.7, 482.0], [29.8, 482.0], [29.9, 482.0], [30.0, 491.0], [30.1, 491.0], [30.2, 491.0], [30.3, 491.0], [30.4, 491.0], [30.5, 491.0], [30.6, 491.0], [30.7, 491.0], [30.8, 491.0], [30.9, 491.0], [31.0, 491.0], [31.1, 491.0], [31.2, 491.0], [31.3, 491.0], [31.4, 491.0], [31.5, 491.0], [31.6, 491.0], [31.7, 491.0], [31.8, 491.0], [31.9, 491.0], [32.0, 491.0], [32.1, 491.0], [32.2, 491.0], [32.3, 491.0], [32.4, 491.0], [32.5, 491.0], [32.6, 491.0], [32.7, 491.0], [32.8, 491.0], [32.9, 491.0], [33.0, 491.0], [33.1, 491.0], [33.2, 491.0], [33.3, 491.0], [33.4, 494.0], [33.5, 494.0], [33.6, 494.0], [33.7, 494.0], [33.8, 494.0], [33.9, 494.0], [34.0, 494.0], [34.1, 494.0], [34.2, 494.0], [34.3, 494.0], [34.4, 494.0], [34.5, 494.0], [34.6, 494.0], [34.7, 494.0], [34.8, 494.0], [34.9, 494.0], [35.0, 494.0], [35.1, 494.0], [35.2, 494.0], [35.3, 494.0], [35.4, 494.0], [35.5, 494.0], [35.6, 494.0], [35.7, 494.0], [35.8, 494.0], [35.9, 494.0], [36.0, 494.0], [36.1, 494.0], [36.2, 494.0], [36.3, 494.0], [36.4, 494.0], [36.5, 494.0], [36.6, 494.0], [36.7, 501.0], [36.8, 501.0], [36.9, 501.0], [37.0, 501.0], [37.1, 501.0], [37.2, 501.0], [37.3, 501.0], [37.4, 501.0], [37.5, 501.0], [37.6, 501.0], [37.7, 501.0], [37.8, 501.0], [37.9, 501.0], [38.0, 501.0], [38.1, 501.0], [38.2, 501.0], [38.3, 501.0], [38.4, 501.0], [38.5, 501.0], [38.6, 501.0], [38.7, 501.0], [38.8, 501.0], [38.9, 501.0], [39.0, 501.0], [39.1, 501.0], [39.2, 501.0], [39.3, 501.0], [39.4, 501.0], [39.5, 501.0], [39.6, 501.0], [39.7, 501.0], [39.8, 501.0], [39.9, 501.0], [40.0, 502.0], [40.1, 502.0], [40.2, 502.0], [40.3, 502.0], [40.4, 502.0], [40.5, 502.0], [40.6, 502.0], [40.7, 502.0], [40.8, 502.0], [40.9, 502.0], [41.0, 502.0], [41.1, 502.0], [41.2, 502.0], [41.3, 502.0], [41.4, 502.0], [41.5, 502.0], [41.6, 502.0], [41.7, 502.0], [41.8, 502.0], [41.9, 502.0], [42.0, 502.0], [42.1, 502.0], [42.2, 502.0], [42.3, 502.0], [42.4, 502.0], [42.5, 502.0], [42.6, 502.0], [42.7, 502.0], [42.8, 502.0], [42.9, 502.0], [43.0, 502.0], [43.1, 502.0], [43.2, 502.0], [43.3, 502.0], [43.4, 505.0], [43.5, 505.0], [43.6, 505.0], [43.7, 505.0], [43.8, 505.0], [43.9, 505.0], [44.0, 505.0], [44.1, 505.0], [44.2, 505.0], [44.3, 505.0], [44.4, 505.0], [44.5, 505.0], [44.6, 505.0], [44.7, 505.0], [44.8, 505.0], [44.9, 505.0], [45.0, 505.0], [45.1, 505.0], [45.2, 505.0], [45.3, 505.0], [45.4, 505.0], [45.5, 505.0], [45.6, 505.0], [45.7, 505.0], [45.8, 505.0], [45.9, 505.0], [46.0, 505.0], [46.1, 505.0], [46.2, 505.0], [46.3, 505.0], [46.4, 505.0], [46.5, 505.0], [46.6, 505.0], [46.7, 507.0], [46.8, 507.0], [46.9, 507.0], [47.0, 507.0], [47.1, 507.0], [47.2, 507.0], [47.3, 507.0], [47.4, 507.0], [47.5, 507.0], [47.6, 507.0], [47.7, 507.0], [47.8, 507.0], [47.9, 507.0], [48.0, 507.0], [48.1, 507.0], [48.2, 507.0], [48.3, 507.0], [48.4, 507.0], [48.5, 507.0], [48.6, 507.0], [48.7, 507.0], [48.8, 507.0], [48.9, 507.0], [49.0, 507.0], [49.1, 507.0], [49.2, 507.0], [49.3, 507.0], [49.4, 507.0], [49.5, 507.0], [49.6, 507.0], [49.7, 507.0], [49.8, 507.0], [49.9, 507.0], [50.0, 507.0], [50.1, 520.0], [50.2, 520.0], [50.3, 520.0], [50.4, 520.0], [50.5, 520.0], [50.6, 520.0], [50.7, 520.0], [50.8, 520.0], [50.9, 520.0], [51.0, 520.0], [51.1, 520.0], [51.2, 520.0], [51.3, 520.0], [51.4, 520.0], [51.5, 520.0], [51.6, 520.0], [51.7, 520.0], [51.8, 520.0], [51.9, 520.0], [52.0, 520.0], [52.1, 520.0], [52.2, 520.0], [52.3, 520.0], [52.4, 520.0], [52.5, 520.0], [52.6, 520.0], [52.7, 520.0], [52.8, 520.0], [52.9, 520.0], [53.0, 520.0], [53.1, 520.0], [53.2, 520.0], [53.3, 520.0], [53.4, 522.0], [53.5, 522.0], [53.6, 522.0], [53.7, 522.0], [53.8, 522.0], [53.9, 522.0], [54.0, 522.0], [54.1, 522.0], [54.2, 522.0], [54.3, 522.0], [54.4, 522.0], [54.5, 522.0], [54.6, 522.0], [54.7, 522.0], [54.8, 522.0], [54.9, 522.0], [55.0, 522.0], [55.1, 522.0], [55.2, 522.0], [55.3, 522.0], [55.4, 522.0], [55.5, 522.0], [55.6, 522.0], [55.7, 522.0], [55.8, 522.0], [55.9, 522.0], [56.0, 522.0], [56.1, 522.0], [56.2, 522.0], [56.3, 522.0], [56.4, 522.0], [56.5, 522.0], [56.6, 522.0], [56.7, 526.0], [56.8, 526.0], [56.9, 526.0], [57.0, 526.0], [57.1, 526.0], [57.2, 526.0], [57.3, 526.0], [57.4, 526.0], [57.5, 526.0], [57.6, 526.0], [57.7, 526.0], [57.8, 526.0], [57.9, 526.0], [58.0, 526.0], [58.1, 526.0], [58.2, 526.0], [58.3, 526.0], [58.4, 526.0], [58.5, 526.0], [58.6, 526.0], [58.7, 526.0], [58.8, 526.0], [58.9, 526.0], [59.0, 526.0], [59.1, 526.0], [59.2, 526.0], [59.3, 526.0], [59.4, 526.0], [59.5, 526.0], [59.6, 526.0], [59.7, 526.0], [59.8, 526.0], [59.9, 526.0], [60.0, 526.0], [60.1, 533.0], [60.2, 533.0], [60.3, 533.0], [60.4, 533.0], [60.5, 533.0], [60.6, 533.0], [60.7, 533.0], [60.8, 533.0], [60.9, 533.0], [61.0, 533.0], [61.1, 533.0], [61.2, 533.0], [61.3, 533.0], [61.4, 533.0], [61.5, 533.0], [61.6, 533.0], [61.7, 533.0], [61.8, 533.0], [61.9, 533.0], [62.0, 533.0], [62.1, 533.0], [62.2, 533.0], [62.3, 533.0], [62.4, 533.0], [62.5, 533.0], [62.6, 533.0], [62.7, 533.0], [62.8, 533.0], [62.9, 533.0], [63.0, 533.0], [63.1, 533.0], [63.2, 533.0], [63.3, 533.0], [63.4, 552.0], [63.5, 552.0], [63.6, 552.0], [63.7, 552.0], [63.8, 552.0], [63.9, 552.0], [64.0, 552.0], [64.1, 552.0], [64.2, 552.0], [64.3, 552.0], [64.4, 552.0], [64.5, 552.0], [64.6, 552.0], [64.7, 552.0], [64.8, 552.0], [64.9, 552.0], [65.0, 552.0], [65.1, 552.0], [65.2, 552.0], [65.3, 552.0], [65.4, 552.0], [65.5, 552.0], [65.6, 552.0], [65.7, 552.0], [65.8, 552.0], [65.9, 552.0], [66.0, 552.0], [66.1, 552.0], [66.2, 552.0], [66.3, 552.0], [66.4, 552.0], [66.5, 552.0], [66.6, 552.0], [66.7, 643.0], [66.8, 643.0], [66.9, 643.0], [67.0, 643.0], [67.1, 643.0], [67.2, 643.0], [67.3, 643.0], [67.4, 643.0], [67.5, 643.0], [67.6, 643.0], [67.7, 643.0], [67.8, 643.0], [67.9, 643.0], [68.0, 643.0], [68.1, 643.0], [68.2, 643.0], [68.3, 643.0], [68.4, 643.0], [68.5, 643.0], [68.6, 643.0], [68.7, 643.0], [68.8, 643.0], [68.9, 643.0], [69.0, 643.0], [69.1, 643.0], [69.2, 643.0], [69.3, 643.0], [69.4, 643.0], [69.5, 643.0], [69.6, 643.0], [69.7, 643.0], [69.8, 643.0], [69.9, 643.0], [70.0, 643.0], [70.1, 691.0], [70.2, 691.0], [70.3, 691.0], [70.4, 691.0], [70.5, 691.0], [70.6, 691.0], [70.7, 691.0], [70.8, 691.0], [70.9, 691.0], [71.0, 691.0], [71.1, 691.0], [71.2, 691.0], [71.3, 691.0], [71.4, 691.0], [71.5, 691.0], [71.6, 691.0], [71.7, 691.0], [71.8, 691.0], [71.9, 691.0], [72.0, 691.0], [72.1, 691.0], [72.2, 691.0], [72.3, 691.0], [72.4, 691.0], [72.5, 691.0], [72.6, 691.0], [72.7, 691.0], [72.8, 691.0], [72.9, 691.0], [73.0, 691.0], [73.1, 691.0], [73.2, 691.0], [73.3, 691.0], [73.4, 735.0], [73.5, 735.0], [73.6, 735.0], [73.7, 735.0], [73.8, 735.0], [73.9, 735.0], [74.0, 735.0], [74.1, 735.0], [74.2, 735.0], [74.3, 735.0], [74.4, 735.0], [74.5, 735.0], [74.6, 735.0], [74.7, 735.0], [74.8, 735.0], [74.9, 735.0], [75.0, 735.0], [75.1, 735.0], [75.2, 735.0], [75.3, 735.0], [75.4, 735.0], [75.5, 735.0], [75.6, 735.0], [75.7, 735.0], [75.8, 735.0], [75.9, 735.0], [76.0, 735.0], [76.1, 735.0], [76.2, 735.0], [76.3, 735.0], [76.4, 735.0], [76.5, 735.0], [76.6, 735.0], [76.7, 789.0], [76.8, 789.0], [76.9, 789.0], [77.0, 789.0], [77.1, 789.0], [77.2, 789.0], [77.3, 789.0], [77.4, 789.0], [77.5, 789.0], [77.6, 789.0], [77.7, 789.0], [77.8, 789.0], [77.9, 789.0], [78.0, 789.0], [78.1, 789.0], [78.2, 789.0], [78.3, 789.0], [78.4, 789.0], [78.5, 789.0], [78.6, 789.0], [78.7, 789.0], [78.8, 789.0], [78.9, 789.0], [79.0, 789.0], [79.1, 789.0], [79.2, 789.0], [79.3, 789.0], [79.4, 789.0], [79.5, 789.0], [79.6, 789.0], [79.7, 789.0], [79.8, 789.0], [79.9, 789.0], [80.0, 822.0], [80.1, 822.0], [80.2, 822.0], [80.3, 822.0], [80.4, 822.0], [80.5, 822.0], [80.6, 822.0], [80.7, 822.0], [80.8, 822.0], [80.9, 822.0], [81.0, 822.0], [81.1, 822.0], [81.2, 822.0], [81.3, 822.0], [81.4, 822.0], [81.5, 822.0], [81.6, 822.0], [81.7, 822.0], [81.8, 822.0], [81.9, 822.0], [82.0, 822.0], [82.1, 822.0], [82.2, 822.0], [82.3, 822.0], [82.4, 822.0], [82.5, 822.0], [82.6, 822.0], [82.7, 822.0], [82.8, 822.0], [82.9, 822.0], [83.0, 822.0], [83.1, 822.0], [83.2, 822.0], [83.3, 822.0], [83.4, 884.0], [83.5, 884.0], [83.6, 884.0], [83.7, 884.0], [83.8, 884.0], [83.9, 884.0], [84.0, 884.0], [84.1, 884.0], [84.2, 884.0], [84.3, 884.0], [84.4, 884.0], [84.5, 884.0], [84.6, 884.0], [84.7, 884.0], [84.8, 884.0], [84.9, 884.0], [85.0, 884.0], [85.1, 884.0], [85.2, 884.0], [85.3, 884.0], [85.4, 884.0], [85.5, 884.0], [85.6, 884.0], [85.7, 884.0], [85.8, 884.0], [85.9, 884.0], [86.0, 884.0], [86.1, 884.0], [86.2, 884.0], [86.3, 884.0], [86.4, 884.0], [86.5, 884.0], [86.6, 884.0], [86.7, 916.0], [86.8, 916.0], [86.9, 916.0], [87.0, 916.0], [87.1, 916.0], [87.2, 916.0], [87.3, 916.0], [87.4, 916.0], [87.5, 916.0], [87.6, 916.0], [87.7, 916.0], [87.8, 916.0], [87.9, 916.0], [88.0, 916.0], [88.1, 916.0], [88.2, 916.0], [88.3, 916.0], [88.4, 916.0], [88.5, 916.0], [88.6, 916.0], [88.7, 916.0], [88.8, 916.0], [88.9, 916.0], [89.0, 916.0], [89.1, 916.0], [89.2, 916.0], [89.3, 916.0], [89.4, 916.0], [89.5, 916.0], [89.6, 916.0], [89.7, 916.0], [89.8, 916.0], [89.9, 916.0], [90.0, 922.0], [90.1, 922.0], [90.2, 922.0], [90.3, 922.0], [90.4, 922.0], [90.5, 922.0], [90.6, 922.0], [90.7, 922.0], [90.8, 922.0], [90.9, 922.0], [91.0, 922.0], [91.1, 922.0], [91.2, 922.0], [91.3, 922.0], [91.4, 922.0], [91.5, 922.0], [91.6, 922.0], [91.7, 922.0], [91.8, 922.0], [91.9, 922.0], [92.0, 922.0], [92.1, 922.0], [92.2, 922.0], [92.3, 922.0], [92.4, 922.0], [92.5, 922.0], [92.6, 922.0], [92.7, 922.0], [92.8, 922.0], [92.9, 922.0], [93.0, 922.0], [93.1, 922.0], [93.2, 922.0], [93.3, 922.0], [93.4, 944.0], [93.5, 944.0], [93.6, 944.0], [93.7, 944.0], [93.8, 944.0], [93.9, 944.0], [94.0, 944.0], [94.1, 944.0], [94.2, 944.0], [94.3, 944.0], [94.4, 944.0], [94.5, 944.0], [94.6, 944.0], [94.7, 944.0], [94.8, 944.0], [94.9, 944.0], [95.0, 944.0], [95.1, 944.0], [95.2, 944.0], [95.3, 944.0], [95.4, 944.0], [95.5, 944.0], [95.6, 944.0], [95.7, 944.0], [95.8, 944.0], [95.9, 944.0], [96.0, 944.0], [96.1, 944.0], [96.2, 944.0], [96.3, 944.0], [96.4, 944.0], [96.5, 944.0], [96.6, 944.0], [96.7, 1028.0], [96.8, 1028.0], [96.9, 1028.0], [97.0, 1028.0], [97.1, 1028.0], [97.2, 1028.0], [97.3, 1028.0], [97.4, 1028.0], [97.5, 1028.0], [97.6, 1028.0], [97.7, 1028.0], [97.8, 1028.0], [97.9, 1028.0], [98.0, 1028.0], [98.1, 1028.0], [98.2, 1028.0], [98.3, 1028.0], [98.4, 1028.0], [98.5, 1028.0], [98.6, 1028.0], [98.7, 1028.0], [98.8, 1028.0], [98.9, 1028.0], [99.0, 1028.0], [99.1, 1028.0], [99.2, 1028.0], [99.3, 1028.0], [99.4, 1028.0], [99.5, 1028.0], [99.6, 1028.0], [99.7, 1028.0], [99.8, 1028.0], [99.9, 1028.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 400.0, "maxY": 11.0, "series": [{"data": [[600.0, 2.0], [700.0, 2.0], [800.0, 2.0], [400.0, 11.0], [900.0, 3.0], [1000.0, 1.0], [500.0, 9.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1000.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 11.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 19.0, "series": [{"data": [[0.0, 11.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 19.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 1.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 8.500000000000002, "minX": 1.60374126E12, "maxY": 8.500000000000002, "series": [{"data": [[1.60374126E12, 8.500000000000002]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60374126E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 459.0, "minX": 1.0, "maxY": 657.8095238095237, "series": [{"data": [[8.0, 459.0], [4.0, 491.0], [2.0, 533.0], [1.0, 552.0], [9.0, 459.0], [10.0, 657.8095238095237], [5.0, 482.0], [6.0, 464.0], [3.0, 502.0], [7.0, 468.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[8.500000000000002, 607.4666666666667]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 208.86666666666667, "minX": 1.60374126E12, "maxY": 13874.2, "series": [{"data": [[1.60374126E12, 13874.2]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60374126E12, 208.86666666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60374126E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 607.4666666666667, "minX": 1.60374126E12, "maxY": 607.4666666666667, "series": [{"data": [[1.60374126E12, 607.4666666666667]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60374126E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 607.0999999999999, "minX": 1.60374126E12, "maxY": 607.0999999999999, "series": [{"data": [[1.60374126E12, 607.0999999999999]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60374126E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 3.0666666666666673, "minX": 1.60374126E12, "maxY": 3.0666666666666673, "series": [{"data": [[1.60374126E12, 3.0666666666666673]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60374126E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 455.0, "minX": 1.60374126E12, "maxY": 1028.0, "series": [{"data": [[1.60374126E12, 1028.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60374126E12, 455.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60374126E12, 455.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60374126E12, 455.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60374126E12, 455.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60374126E12, 513.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60374126E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 492.5, "minX": 2.0, "maxY": 900.0, "series": [{"data": [[8.0, 900.0], [2.0, 542.5], [20.0, 492.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 20.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 492.0, "minX": 2.0, "maxY": 900.0, "series": [{"data": [[8.0, 900.0], [2.0, 542.5], [20.0, 492.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 20.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.5, "minX": 1.60374126E12, "maxY": 0.5, "series": [{"data": [[1.60374126E12, 0.5]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60374126E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.5, "minX": 1.60374126E12, "maxY": 0.5, "series": [{"data": [[1.60374126E12, 0.5]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60374126E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.5, "minX": 1.60374126E12, "maxY": 0.5, "series": [{"data": [[1.60374126E12, 0.5]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60374126E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.5, "minX": 1.60374126E12, "maxY": 0.5, "series": [{"data": [[1.60374126E12, 0.5]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60374126E12, "title": "Total Transactions Per Second"}},
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

