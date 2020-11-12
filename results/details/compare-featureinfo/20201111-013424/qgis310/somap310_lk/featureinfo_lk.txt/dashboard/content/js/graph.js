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
        data: {"result": {"minY": 204.0, "minX": 0.0, "maxY": 568.0, "series": [{"data": [[0.0, 204.0], [0.1, 204.0], [0.2, 204.0], [0.3, 204.0], [0.4, 204.0], [0.5, 204.0], [0.6, 217.0], [0.7, 217.0], [0.8, 217.0], [0.9, 217.0], [1.0, 217.0], [1.1, 231.0], [1.2, 231.0], [1.3, 231.0], [1.4, 231.0], [1.5, 231.0], [1.6, 233.0], [1.7, 233.0], [1.8, 233.0], [1.9, 233.0], [2.0, 233.0], [2.1, 263.0], [2.2, 263.0], [2.3, 263.0], [2.4, 263.0], [2.5, 263.0], [2.6, 264.0], [2.7, 264.0], [2.8, 264.0], [2.9, 264.0], [3.0, 264.0], [3.1, 270.0], [3.2, 270.0], [3.3, 270.0], [3.4, 270.0], [3.5, 270.0], [3.6, 283.0], [3.7, 283.0], [3.8, 283.0], [3.9, 283.0], [4.0, 283.0], [4.1, 313.0], [4.2, 313.0], [4.3, 313.0], [4.4, 313.0], [4.5, 313.0], [4.6, 318.0], [4.7, 318.0], [4.8, 318.0], [4.9, 318.0], [5.0, 318.0], [5.1, 328.0], [5.2, 328.0], [5.3, 328.0], [5.4, 328.0], [5.5, 328.0], [5.6, 377.0], [5.7, 377.0], [5.8, 377.0], [5.9, 377.0], [6.0, 377.0], [6.1, 395.0], [6.2, 395.0], [6.3, 395.0], [6.4, 395.0], [6.5, 395.0], [6.6, 403.0], [6.7, 403.0], [6.8, 403.0], [6.9, 403.0], [7.0, 403.0], [7.1, 445.0], [7.2, 445.0], [7.3, 445.0], [7.4, 445.0], [7.5, 445.0], [7.6, 447.0], [7.7, 447.0], [7.8, 447.0], [7.9, 447.0], [8.0, 447.0], [8.1, 448.0], [8.2, 448.0], [8.3, 448.0], [8.4, 448.0], [8.5, 448.0], [8.6, 454.0], [8.7, 454.0], [8.8, 454.0], [8.9, 454.0], [9.0, 454.0], [9.1, 455.0], [9.2, 455.0], [9.3, 455.0], [9.4, 455.0], [9.5, 455.0], [9.6, 455.0], [9.7, 455.0], [9.8, 455.0], [9.9, 455.0], [10.0, 455.0], [10.1, 455.0], [10.2, 456.0], [10.3, 456.0], [10.4, 456.0], [10.5, 456.0], [10.6, 456.0], [10.7, 458.0], [10.8, 458.0], [10.9, 458.0], [11.0, 458.0], [11.1, 458.0], [11.2, 459.0], [11.3, 459.0], [11.4, 459.0], [11.5, 459.0], [11.6, 459.0], [11.7, 459.0], [11.8, 459.0], [11.9, 459.0], [12.0, 459.0], [12.1, 459.0], [12.2, 462.0], [12.3, 462.0], [12.4, 462.0], [12.5, 462.0], [12.6, 462.0], [12.7, 462.0], [12.8, 462.0], [12.9, 462.0], [13.0, 462.0], [13.1, 462.0], [13.2, 463.0], [13.3, 463.0], [13.4, 463.0], [13.5, 463.0], [13.6, 463.0], [13.7, 465.0], [13.8, 465.0], [13.9, 465.0], [14.0, 465.0], [14.1, 465.0], [14.2, 468.0], [14.3, 468.0], [14.4, 468.0], [14.5, 468.0], [14.6, 468.0], [14.7, 472.0], [14.8, 472.0], [14.9, 472.0], [15.0, 472.0], [15.1, 472.0], [15.2, 473.0], [15.3, 473.0], [15.4, 473.0], [15.5, 473.0], [15.6, 473.0], [15.7, 473.0], [15.8, 473.0], [15.9, 473.0], [16.0, 473.0], [16.1, 473.0], [16.2, 474.0], [16.3, 474.0], [16.4, 474.0], [16.5, 474.0], [16.6, 474.0], [16.7, 475.0], [16.8, 475.0], [16.9, 475.0], [17.0, 475.0], [17.1, 475.0], [17.2, 475.0], [17.3, 475.0], [17.4, 475.0], [17.5, 475.0], [17.6, 475.0], [17.7, 475.0], [17.8, 475.0], [17.9, 475.0], [18.0, 475.0], [18.1, 475.0], [18.2, 476.0], [18.3, 476.0], [18.4, 476.0], [18.5, 476.0], [18.6, 476.0], [18.7, 476.0], [18.8, 476.0], [18.9, 476.0], [19.0, 476.0], [19.1, 476.0], [19.2, 476.0], [19.3, 476.0], [19.4, 476.0], [19.5, 476.0], [19.6, 476.0], [19.7, 477.0], [19.8, 477.0], [19.9, 477.0], [20.0, 477.0], [20.1, 477.0], [20.2, 477.0], [20.3, 477.0], [20.4, 477.0], [20.5, 477.0], [20.6, 477.0], [20.7, 477.0], [20.8, 477.0], [20.9, 477.0], [21.0, 477.0], [21.1, 477.0], [21.2, 477.0], [21.3, 478.0], [21.4, 478.0], [21.5, 478.0], [21.6, 478.0], [21.7, 478.0], [21.8, 478.0], [21.9, 478.0], [22.0, 478.0], [22.1, 478.0], [22.2, 478.0], [22.3, 478.0], [22.4, 478.0], [22.5, 478.0], [22.6, 478.0], [22.7, 478.0], [22.8, 479.0], [22.9, 479.0], [23.0, 479.0], [23.1, 479.0], [23.2, 479.0], [23.3, 479.0], [23.4, 479.0], [23.5, 479.0], [23.6, 479.0], [23.7, 479.0], [23.8, 480.0], [23.9, 480.0], [24.0, 480.0], [24.1, 480.0], [24.2, 480.0], [24.3, 480.0], [24.4, 480.0], [24.5, 480.0], [24.6, 480.0], [24.7, 480.0], [24.8, 480.0], [24.9, 480.0], [25.0, 480.0], [25.1, 480.0], [25.2, 480.0], [25.3, 480.0], [25.4, 480.0], [25.5, 480.0], [25.6, 480.0], [25.7, 480.0], [25.8, 480.0], [25.9, 480.0], [26.0, 480.0], [26.1, 480.0], [26.2, 480.0], [26.3, 481.0], [26.4, 481.0], [26.5, 481.0], [26.6, 481.0], [26.7, 481.0], [26.8, 481.0], [26.9, 481.0], [27.0, 481.0], [27.1, 481.0], [27.2, 481.0], [27.3, 481.0], [27.4, 481.0], [27.5, 481.0], [27.6, 481.0], [27.7, 481.0], [27.8, 481.0], [27.9, 481.0], [28.0, 481.0], [28.1, 481.0], [28.2, 481.0], [28.3, 482.0], [28.4, 482.0], [28.5, 482.0], [28.6, 482.0], [28.7, 482.0], [28.8, 482.0], [28.9, 482.0], [29.0, 482.0], [29.1, 482.0], [29.2, 482.0], [29.3, 483.0], [29.4, 483.0], [29.5, 483.0], [29.6, 483.0], [29.7, 483.0], [29.8, 483.0], [29.9, 483.0], [30.0, 483.0], [30.1, 483.0], [30.2, 483.0], [30.3, 483.0], [30.4, 485.0], [30.5, 485.0], [30.6, 485.0], [30.7, 485.0], [30.8, 485.0], [30.9, 485.0], [31.0, 485.0], [31.1, 485.0], [31.2, 485.0], [31.3, 485.0], [31.4, 485.0], [31.5, 485.0], [31.6, 485.0], [31.7, 485.0], [31.8, 485.0], [31.9, 486.0], [32.0, 486.0], [32.1, 486.0], [32.2, 486.0], [32.3, 486.0], [32.4, 486.0], [32.5, 486.0], [32.6, 486.0], [32.7, 486.0], [32.8, 486.0], [32.9, 486.0], [33.0, 486.0], [33.1, 486.0], [33.2, 486.0], [33.3, 486.0], [33.4, 486.0], [33.5, 486.0], [33.6, 486.0], [33.7, 486.0], [33.8, 486.0], [33.9, 486.0], [34.0, 486.0], [34.1, 486.0], [34.2, 486.0], [34.3, 486.0], [34.4, 486.0], [34.5, 486.0], [34.6, 486.0], [34.7, 486.0], [34.8, 486.0], [34.9, 487.0], [35.0, 487.0], [35.1, 487.0], [35.2, 487.0], [35.3, 487.0], [35.4, 488.0], [35.5, 488.0], [35.6, 488.0], [35.7, 488.0], [35.8, 488.0], [35.9, 488.0], [36.0, 488.0], [36.1, 488.0], [36.2, 488.0], [36.3, 488.0], [36.4, 488.0], [36.5, 488.0], [36.6, 488.0], [36.7, 488.0], [36.8, 488.0], [36.9, 488.0], [37.0, 488.0], [37.1, 488.0], [37.2, 488.0], [37.3, 488.0], [37.4, 488.0], [37.5, 488.0], [37.6, 488.0], [37.7, 488.0], [37.8, 488.0], [37.9, 489.0], [38.0, 489.0], [38.1, 489.0], [38.2, 489.0], [38.3, 489.0], [38.4, 490.0], [38.5, 490.0], [38.6, 490.0], [38.7, 490.0], [38.8, 490.0], [38.9, 490.0], [39.0, 490.0], [39.1, 490.0], [39.2, 490.0], [39.3, 490.0], [39.4, 490.0], [39.5, 490.0], [39.6, 490.0], [39.7, 490.0], [39.8, 490.0], [39.9, 491.0], [40.0, 491.0], [40.1, 491.0], [40.2, 491.0], [40.3, 491.0], [40.4, 491.0], [40.5, 492.0], [40.6, 492.0], [40.7, 492.0], [40.8, 492.0], [40.9, 492.0], [41.0, 492.0], [41.1, 492.0], [41.2, 492.0], [41.3, 492.0], [41.4, 492.0], [41.5, 492.0], [41.6, 492.0], [41.7, 492.0], [41.8, 492.0], [41.9, 492.0], [42.0, 492.0], [42.1, 492.0], [42.2, 492.0], [42.3, 492.0], [42.4, 492.0], [42.5, 493.0], [42.6, 493.0], [42.7, 493.0], [42.8, 493.0], [42.9, 493.0], [43.0, 494.0], [43.1, 494.0], [43.2, 494.0], [43.3, 494.0], [43.4, 494.0], [43.5, 494.0], [43.6, 494.0], [43.7, 494.0], [43.8, 494.0], [43.9, 494.0], [44.0, 494.0], [44.1, 494.0], [44.2, 494.0], [44.3, 494.0], [44.4, 494.0], [44.5, 495.0], [44.6, 495.0], [44.7, 495.0], [44.8, 495.0], [44.9, 495.0], [45.0, 495.0], [45.1, 495.0], [45.2, 495.0], [45.3, 495.0], [45.4, 495.0], [45.5, 495.0], [45.6, 495.0], [45.7, 495.0], [45.8, 495.0], [45.9, 495.0], [46.0, 495.0], [46.1, 495.0], [46.2, 495.0], [46.3, 495.0], [46.4, 495.0], [46.5, 496.0], [46.6, 496.0], [46.7, 496.0], [46.8, 496.0], [46.9, 496.0], [47.0, 496.0], [47.1, 496.0], [47.2, 496.0], [47.3, 496.0], [47.4, 496.0], [47.5, 497.0], [47.6, 497.0], [47.7, 497.0], [47.8, 497.0], [47.9, 497.0], [48.0, 497.0], [48.1, 497.0], [48.2, 497.0], [48.3, 497.0], [48.4, 497.0], [48.5, 497.0], [48.6, 497.0], [48.7, 497.0], [48.8, 497.0], [48.9, 497.0], [49.0, 497.0], [49.1, 497.0], [49.2, 497.0], [49.3, 497.0], [49.4, 497.0], [49.5, 497.0], [49.6, 497.0], [49.7, 497.0], [49.8, 497.0], [49.9, 497.0], [50.0, 497.0], [50.1, 498.0], [50.2, 498.0], [50.3, 498.0], [50.4, 498.0], [50.5, 498.0], [50.6, 498.0], [50.7, 498.0], [50.8, 498.0], [50.9, 498.0], [51.0, 498.0], [51.1, 498.0], [51.2, 498.0], [51.3, 498.0], [51.4, 498.0], [51.5, 498.0], [51.6, 498.0], [51.7, 498.0], [51.8, 498.0], [51.9, 498.0], [52.0, 498.0], [52.1, 498.0], [52.2, 498.0], [52.3, 498.0], [52.4, 498.0], [52.5, 498.0], [52.6, 498.0], [52.7, 498.0], [52.8, 498.0], [52.9, 498.0], [53.0, 498.0], [53.1, 499.0], [53.2, 499.0], [53.3, 499.0], [53.4, 499.0], [53.5, 499.0], [53.6, 499.0], [53.7, 499.0], [53.8, 499.0], [53.9, 499.0], [54.0, 499.0], [54.1, 499.0], [54.2, 499.0], [54.3, 499.0], [54.4, 499.0], [54.5, 499.0], [54.6, 499.0], [54.7, 499.0], [54.8, 499.0], [54.9, 499.0], [55.0, 499.0], [55.1, 499.0], [55.2, 499.0], [55.3, 499.0], [55.4, 499.0], [55.5, 499.0], [55.6, 499.0], [55.7, 499.0], [55.8, 499.0], [55.9, 499.0], [56.0, 499.0], [56.1, 500.0], [56.2, 500.0], [56.3, 500.0], [56.4, 500.0], [56.5, 500.0], [56.6, 500.0], [56.7, 500.0], [56.8, 500.0], [56.9, 500.0], [57.0, 500.0], [57.1, 500.0], [57.2, 500.0], [57.3, 500.0], [57.4, 500.0], [57.5, 500.0], [57.6, 501.0], [57.7, 501.0], [57.8, 501.0], [57.9, 501.0], [58.0, 501.0], [58.1, 501.0], [58.2, 501.0], [58.3, 501.0], [58.4, 501.0], [58.5, 501.0], [58.6, 502.0], [58.7, 502.0], [58.8, 502.0], [58.9, 502.0], [59.0, 502.0], [59.1, 502.0], [59.2, 502.0], [59.3, 502.0], [59.4, 502.0], [59.5, 502.0], [59.6, 503.0], [59.7, 503.0], [59.8, 503.0], [59.9, 503.0], [60.0, 503.0], [60.1, 503.0], [60.2, 503.0], [60.3, 503.0], [60.4, 503.0], [60.5, 503.0], [60.6, 503.0], [60.7, 503.0], [60.8, 503.0], [60.9, 503.0], [61.0, 503.0], [61.1, 503.0], [61.2, 504.0], [61.3, 504.0], [61.4, 504.0], [61.5, 504.0], [61.6, 504.0], [61.7, 504.0], [61.8, 504.0], [61.9, 504.0], [62.0, 504.0], [62.1, 504.0], [62.2, 504.0], [62.3, 504.0], [62.4, 504.0], [62.5, 504.0], [62.6, 504.0], [62.7, 505.0], [62.8, 505.0], [62.9, 505.0], [63.0, 505.0], [63.1, 505.0], [63.2, 506.0], [63.3, 506.0], [63.4, 506.0], [63.5, 506.0], [63.6, 506.0], [63.7, 506.0], [63.8, 506.0], [63.9, 506.0], [64.0, 506.0], [64.1, 506.0], [64.2, 507.0], [64.3, 507.0], [64.4, 507.0], [64.5, 507.0], [64.6, 507.0], [64.7, 507.0], [64.8, 507.0], [64.9, 507.0], [65.0, 507.0], [65.1, 507.0], [65.2, 508.0], [65.3, 508.0], [65.4, 508.0], [65.5, 508.0], [65.6, 508.0], [65.7, 508.0], [65.8, 508.0], [65.9, 508.0], [66.0, 508.0], [66.1, 508.0], [66.2, 509.0], [66.3, 509.0], [66.4, 509.0], [66.5, 509.0], [66.6, 509.0], [66.7, 509.0], [66.8, 509.0], [66.9, 509.0], [67.0, 509.0], [67.1, 509.0], [67.2, 510.0], [67.3, 510.0], [67.4, 510.0], [67.5, 510.0], [67.6, 510.0], [67.7, 512.0], [67.8, 512.0], [67.9, 512.0], [68.0, 512.0], [68.1, 512.0], [68.2, 512.0], [68.3, 512.0], [68.4, 512.0], [68.5, 512.0], [68.6, 512.0], [68.7, 512.0], [68.8, 512.0], [68.9, 512.0], [69.0, 512.0], [69.1, 512.0], [69.2, 512.0], [69.3, 512.0], [69.4, 512.0], [69.5, 512.0], [69.6, 512.0], [69.7, 512.0], [69.8, 512.0], [69.9, 512.0], [70.0, 512.0], [70.1, 512.0], [70.2, 512.0], [70.3, 513.0], [70.4, 513.0], [70.5, 513.0], [70.6, 513.0], [70.7, 513.0], [70.8, 514.0], [70.9, 514.0], [71.0, 514.0], [71.1, 514.0], [71.2, 514.0], [71.3, 514.0], [71.4, 514.0], [71.5, 514.0], [71.6, 514.0], [71.7, 514.0], [71.8, 515.0], [71.9, 515.0], [72.0, 515.0], [72.1, 515.0], [72.2, 515.0], [72.3, 515.0], [72.4, 515.0], [72.5, 515.0], [72.6, 515.0], [72.7, 515.0], [72.8, 515.0], [72.9, 515.0], [73.0, 515.0], [73.1, 515.0], [73.2, 515.0], [73.3, 516.0], [73.4, 516.0], [73.5, 516.0], [73.6, 516.0], [73.7, 516.0], [73.8, 516.0], [73.9, 516.0], [74.0, 516.0], [74.1, 516.0], [74.2, 516.0], [74.3, 517.0], [74.4, 517.0], [74.5, 517.0], [74.6, 517.0], [74.7, 517.0], [74.8, 517.0], [74.9, 517.0], [75.0, 517.0], [75.1, 517.0], [75.2, 517.0], [75.3, 517.0], [75.4, 517.0], [75.5, 517.0], [75.6, 517.0], [75.7, 517.0], [75.8, 518.0], [75.9, 518.0], [76.0, 518.0], [76.1, 518.0], [76.2, 518.0], [76.3, 519.0], [76.4, 519.0], [76.5, 519.0], [76.6, 519.0], [76.7, 519.0], [76.8, 519.0], [76.9, 519.0], [77.0, 519.0], [77.1, 519.0], [77.2, 519.0], [77.3, 520.0], [77.4, 520.0], [77.5, 520.0], [77.6, 520.0], [77.7, 520.0], [77.8, 520.0], [77.9, 520.0], [78.0, 520.0], [78.1, 520.0], [78.2, 520.0], [78.3, 520.0], [78.4, 520.0], [78.5, 520.0], [78.6, 520.0], [78.7, 520.0], [78.8, 520.0], [78.9, 520.0], [79.0, 520.0], [79.1, 520.0], [79.2, 520.0], [79.3, 521.0], [79.4, 521.0], [79.5, 521.0], [79.6, 521.0], [79.7, 521.0], [79.8, 522.0], [79.9, 522.0], [80.0, 522.0], [80.1, 522.0], [80.2, 522.0], [80.3, 522.0], [80.4, 523.0], [80.5, 523.0], [80.6, 523.0], [80.7, 523.0], [80.8, 523.0], [80.9, 523.0], [81.0, 523.0], [81.1, 523.0], [81.2, 523.0], [81.3, 523.0], [81.4, 524.0], [81.5, 524.0], [81.6, 524.0], [81.7, 524.0], [81.8, 524.0], [81.9, 524.0], [82.0, 524.0], [82.1, 524.0], [82.2, 524.0], [82.3, 524.0], [82.4, 525.0], [82.5, 525.0], [82.6, 525.0], [82.7, 525.0], [82.8, 525.0], [82.9, 525.0], [83.0, 525.0], [83.1, 525.0], [83.2, 525.0], [83.3, 525.0], [83.4, 525.0], [83.5, 525.0], [83.6, 525.0], [83.7, 525.0], [83.8, 525.0], [83.9, 526.0], [84.0, 526.0], [84.1, 526.0], [84.2, 526.0], [84.3, 526.0], [84.4, 526.0], [84.5, 526.0], [84.6, 526.0], [84.7, 526.0], [84.8, 526.0], [84.9, 527.0], [85.0, 527.0], [85.1, 527.0], [85.2, 527.0], [85.3, 527.0], [85.4, 527.0], [85.5, 527.0], [85.6, 527.0], [85.7, 527.0], [85.8, 527.0], [85.9, 527.0], [86.0, 527.0], [86.1, 527.0], [86.2, 527.0], [86.3, 527.0], [86.4, 527.0], [86.5, 527.0], [86.6, 527.0], [86.7, 527.0], [86.8, 527.0], [86.9, 528.0], [87.0, 528.0], [87.1, 528.0], [87.2, 528.0], [87.3, 528.0], [87.4, 528.0], [87.5, 528.0], [87.6, 528.0], [87.7, 528.0], [87.8, 528.0], [87.9, 528.0], [88.0, 528.0], [88.1, 528.0], [88.2, 528.0], [88.3, 528.0], [88.4, 528.0], [88.5, 528.0], [88.6, 528.0], [88.7, 528.0], [88.8, 528.0], [88.9, 528.0], [89.0, 528.0], [89.1, 528.0], [89.2, 528.0], [89.3, 528.0], [89.4, 532.0], [89.5, 532.0], [89.6, 532.0], [89.7, 532.0], [89.8, 532.0], [89.9, 532.0], [90.0, 532.0], [90.1, 532.0], [90.2, 532.0], [90.3, 532.0], [90.4, 532.0], [90.5, 533.0], [90.6, 533.0], [90.7, 533.0], [90.8, 533.0], [90.9, 533.0], [91.0, 535.0], [91.1, 535.0], [91.2, 535.0], [91.3, 535.0], [91.4, 535.0], [91.5, 535.0], [91.6, 535.0], [91.7, 535.0], [91.8, 535.0], [91.9, 535.0], [92.0, 536.0], [92.1, 536.0], [92.2, 536.0], [92.3, 536.0], [92.4, 536.0], [92.5, 538.0], [92.6, 538.0], [92.7, 538.0], [92.8, 538.0], [92.9, 538.0], [93.0, 539.0], [93.1, 539.0], [93.2, 539.0], [93.3, 539.0], [93.4, 539.0], [93.5, 539.0], [93.6, 539.0], [93.7, 539.0], [93.8, 539.0], [93.9, 539.0], [94.0, 540.0], [94.1, 540.0], [94.2, 540.0], [94.3, 540.0], [94.4, 540.0], [94.5, 541.0], [94.6, 541.0], [94.7, 541.0], [94.8, 541.0], [94.9, 541.0], [95.0, 542.0], [95.1, 542.0], [95.2, 542.0], [95.3, 542.0], [95.4, 542.0], [95.5, 544.0], [95.6, 544.0], [95.7, 544.0], [95.8, 544.0], [95.9, 544.0], [96.0, 545.0], [96.1, 545.0], [96.2, 545.0], [96.3, 545.0], [96.4, 545.0], [96.5, 545.0], [96.6, 545.0], [96.7, 545.0], [96.8, 545.0], [96.9, 545.0], [97.0, 547.0], [97.1, 547.0], [97.2, 547.0], [97.3, 547.0], [97.4, 547.0], [97.5, 549.0], [97.6, 549.0], [97.7, 549.0], [97.8, 549.0], [97.9, 549.0], [98.0, 550.0], [98.1, 550.0], [98.2, 550.0], [98.3, 550.0], [98.4, 550.0], [98.5, 561.0], [98.6, 561.0], [98.7, 561.0], [98.8, 561.0], [98.9, 561.0], [99.0, 563.0], [99.1, 563.0], [99.2, 563.0], [99.3, 563.0], [99.4, 563.0], [99.5, 568.0], [99.6, 568.0], [99.7, 568.0], [99.8, 568.0], [99.9, 568.0], [100.0, 568.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 5.0, "minX": 200.0, "maxY": 98.0, "series": [{"data": [[300.0, 5.0], [200.0, 8.0], [400.0, 98.0], [500.0, 87.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 500.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 84.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 114.0, "series": [{"data": [[0.0, 114.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 84.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 1.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.601010101010099, "minX": 1.6050585E12, "maxY": 9.601010101010099, "series": [{"data": [[1.6050585E12, 9.601010101010099]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6050585E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 321.6666666666667, "minX": 1.0, "maxY": 550.0, "series": [{"data": [[4.0, 376.5], [8.0, 414.0], [2.0, 542.0], [1.0, 547.0], [9.0, 388.6666666666667], [5.0, 353.0], [10.0, 496.3743016759776], [6.0, 321.6666666666667], [3.0, 550.0], [7.0, 346.3333333333333]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.601010101010099, 486.3636363636363]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 1588.9, "minX": 1.6050585E12, "maxY": 3131.6666666666665, "series": [{"data": [[1.6050585E12, 3131.6666666666665]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6050585E12, 1588.9]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6050585E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 486.3636363636363, "minX": 1.6050585E12, "maxY": 486.3636363636363, "series": [{"data": [[1.6050585E12, 486.3636363636363]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6050585E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 486.22727272727286, "minX": 1.6050585E12, "maxY": 486.22727272727286, "series": [{"data": [[1.6050585E12, 486.22727272727286]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6050585E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.43434343434343414, "minX": 1.6050585E12, "maxY": 0.43434343434343414, "series": [{"data": [[1.6050585E12, 0.43434343434343414]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6050585E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 204.0, "minX": 1.6050585E12, "maxY": 568.0, "series": [{"data": [[1.6050585E12, 568.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6050585E12, 214.28299938321112]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6050585E12, 216.61130024671553]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6050585E12, 215.57649969160556]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.6050585E12, 204.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6050585E12, 497.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6050585E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 298.0, "minX": 3.0, "maxY": 547.0, "series": [{"data": [[16.0, 298.0], [19.0, 513.5], [20.0, 498.0], [21.0, 487.0], [3.0, 547.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 21.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 298.0, "minX": 3.0, "maxY": 547.0, "series": [{"data": [[16.0, 298.0], [19.0, 513.5], [20.0, 498.0], [21.0, 486.0], [3.0, 547.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 21.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 3.3, "minX": 1.6050585E12, "maxY": 3.3, "series": [{"data": [[1.6050585E12, 3.3]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6050585E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 3.3, "minX": 1.6050585E12, "maxY": 3.3, "series": [{"data": [[1.6050585E12, 3.3]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6050585E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 3.3, "minX": 1.6050585E12, "maxY": 3.3, "series": [{"data": [[1.6050585E12, 3.3]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6050585E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 3.3, "minX": 1.6050585E12, "maxY": 3.3, "series": [{"data": [[1.6050585E12, 3.3]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6050585E12, "title": "Total Transactions Per Second"}},
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

