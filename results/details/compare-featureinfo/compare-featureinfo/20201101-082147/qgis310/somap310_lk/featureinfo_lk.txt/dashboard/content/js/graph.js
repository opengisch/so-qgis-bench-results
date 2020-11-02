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
        data: {"result": {"minY": 186.0, "minX": 0.0, "maxY": 542.0, "series": [{"data": [[0.0, 186.0], [0.1, 186.0], [0.2, 186.0], [0.3, 186.0], [0.4, 186.0], [0.5, 186.0], [0.6, 199.0], [0.7, 199.0], [0.8, 199.0], [0.9, 199.0], [1.0, 199.0], [1.1, 203.0], [1.2, 203.0], [1.3, 203.0], [1.4, 203.0], [1.5, 203.0], [1.6, 213.0], [1.7, 213.0], [1.8, 213.0], [1.9, 213.0], [2.0, 213.0], [2.1, 244.0], [2.2, 244.0], [2.3, 244.0], [2.4, 244.0], [2.5, 244.0], [2.6, 248.0], [2.7, 248.0], [2.8, 248.0], [2.9, 248.0], [3.0, 248.0], [3.1, 258.0], [3.2, 258.0], [3.3, 258.0], [3.4, 258.0], [3.5, 258.0], [3.6, 259.0], [3.7, 259.0], [3.8, 259.0], [3.9, 259.0], [4.0, 259.0], [4.1, 282.0], [4.2, 282.0], [4.3, 282.0], [4.4, 282.0], [4.5, 282.0], [4.6, 316.0], [4.7, 316.0], [4.8, 316.0], [4.9, 316.0], [5.0, 316.0], [5.1, 325.0], [5.2, 325.0], [5.3, 325.0], [5.4, 325.0], [5.5, 325.0], [5.6, 347.0], [5.7, 347.0], [5.8, 347.0], [5.9, 347.0], [6.0, 347.0], [6.1, 386.0], [6.2, 386.0], [6.3, 386.0], [6.4, 386.0], [6.5, 386.0], [6.6, 389.0], [6.7, 389.0], [6.8, 389.0], [6.9, 389.0], [7.0, 389.0], [7.1, 393.0], [7.2, 393.0], [7.3, 393.0], [7.4, 393.0], [7.5, 393.0], [7.6, 402.0], [7.7, 402.0], [7.8, 402.0], [7.9, 402.0], [8.0, 402.0], [8.1, 421.0], [8.2, 421.0], [8.3, 421.0], [8.4, 421.0], [8.5, 421.0], [8.6, 433.0], [8.7, 433.0], [8.8, 433.0], [8.9, 433.0], [9.0, 433.0], [9.1, 440.0], [9.2, 440.0], [9.3, 440.0], [9.4, 440.0], [9.5, 440.0], [9.6, 441.0], [9.7, 441.0], [9.8, 441.0], [9.9, 441.0], [10.0, 441.0], [10.1, 441.0], [10.2, 442.0], [10.3, 442.0], [10.4, 442.0], [10.5, 442.0], [10.6, 442.0], [10.7, 443.0], [10.8, 443.0], [10.9, 443.0], [11.0, 443.0], [11.1, 443.0], [11.2, 444.0], [11.3, 444.0], [11.4, 444.0], [11.5, 444.0], [11.6, 444.0], [11.7, 446.0], [11.8, 446.0], [11.9, 446.0], [12.0, 446.0], [12.1, 446.0], [12.2, 446.0], [12.3, 446.0], [12.4, 446.0], [12.5, 446.0], [12.6, 446.0], [12.7, 446.0], [12.8, 446.0], [12.9, 446.0], [13.0, 446.0], [13.1, 446.0], [13.2, 449.0], [13.3, 449.0], [13.4, 449.0], [13.5, 449.0], [13.6, 449.0], [13.7, 450.0], [13.8, 450.0], [13.9, 450.0], [14.0, 450.0], [14.1, 450.0], [14.2, 453.0], [14.3, 453.0], [14.4, 453.0], [14.5, 453.0], [14.6, 453.0], [14.7, 453.0], [14.8, 453.0], [14.9, 453.0], [15.0, 453.0], [15.1, 453.0], [15.2, 454.0], [15.3, 454.0], [15.4, 454.0], [15.5, 454.0], [15.6, 454.0], [15.7, 456.0], [15.8, 456.0], [15.9, 456.0], [16.0, 456.0], [16.1, 456.0], [16.2, 459.0], [16.3, 459.0], [16.4, 459.0], [16.5, 459.0], [16.6, 459.0], [16.7, 460.0], [16.8, 460.0], [16.9, 460.0], [17.0, 460.0], [17.1, 460.0], [17.2, 460.0], [17.3, 460.0], [17.4, 460.0], [17.5, 460.0], [17.6, 460.0], [17.7, 461.0], [17.8, 461.0], [17.9, 461.0], [18.0, 461.0], [18.1, 461.0], [18.2, 462.0], [18.3, 462.0], [18.4, 462.0], [18.5, 462.0], [18.6, 462.0], [18.7, 462.0], [18.8, 462.0], [18.9, 462.0], [19.0, 462.0], [19.1, 462.0], [19.2, 463.0], [19.3, 463.0], [19.4, 463.0], [19.5, 463.0], [19.6, 463.0], [19.7, 463.0], [19.8, 463.0], [19.9, 463.0], [20.0, 463.0], [20.1, 463.0], [20.2, 463.0], [20.3, 463.0], [20.4, 463.0], [20.5, 463.0], [20.6, 463.0], [20.7, 463.0], [20.8, 463.0], [20.9, 463.0], [21.0, 463.0], [21.1, 463.0], [21.2, 463.0], [21.3, 464.0], [21.4, 464.0], [21.5, 464.0], [21.6, 464.0], [21.7, 464.0], [21.8, 465.0], [21.9, 465.0], [22.0, 465.0], [22.1, 465.0], [22.2, 465.0], [22.3, 465.0], [22.4, 465.0], [22.5, 465.0], [22.6, 465.0], [22.7, 465.0], [22.8, 466.0], [22.9, 466.0], [23.0, 466.0], [23.1, 466.0], [23.2, 466.0], [23.3, 466.0], [23.4, 466.0], [23.5, 466.0], [23.6, 466.0], [23.7, 466.0], [23.8, 466.0], [23.9, 466.0], [24.0, 466.0], [24.1, 466.0], [24.2, 466.0], [24.3, 468.0], [24.4, 468.0], [24.5, 468.0], [24.6, 468.0], [24.7, 468.0], [24.8, 469.0], [24.9, 469.0], [25.0, 469.0], [25.1, 469.0], [25.2, 469.0], [25.3, 469.0], [25.4, 469.0], [25.5, 469.0], [25.6, 469.0], [25.7, 469.0], [25.8, 470.0], [25.9, 470.0], [26.0, 470.0], [26.1, 470.0], [26.2, 470.0], [26.3, 470.0], [26.4, 470.0], [26.5, 470.0], [26.6, 470.0], [26.7, 470.0], [26.8, 471.0], [26.9, 471.0], [27.0, 471.0], [27.1, 471.0], [27.2, 471.0], [27.3, 471.0], [27.4, 471.0], [27.5, 471.0], [27.6, 471.0], [27.7, 471.0], [27.8, 472.0], [27.9, 472.0], [28.0, 472.0], [28.1, 472.0], [28.2, 472.0], [28.3, 472.0], [28.4, 472.0], [28.5, 472.0], [28.6, 472.0], [28.7, 472.0], [28.8, 473.0], [28.9, 473.0], [29.0, 473.0], [29.1, 473.0], [29.2, 473.0], [29.3, 474.0], [29.4, 474.0], [29.5, 474.0], [29.6, 474.0], [29.7, 474.0], [29.8, 474.0], [29.9, 474.0], [30.0, 474.0], [30.1, 474.0], [30.2, 474.0], [30.3, 474.0], [30.4, 474.0], [30.5, 474.0], [30.6, 474.0], [30.7, 474.0], [30.8, 474.0], [30.9, 475.0], [31.0, 475.0], [31.1, 475.0], [31.2, 475.0], [31.3, 475.0], [31.4, 475.0], [31.5, 475.0], [31.6, 475.0], [31.7, 475.0], [31.8, 475.0], [31.9, 475.0], [32.0, 475.0], [32.1, 475.0], [32.2, 475.0], [32.3, 475.0], [32.4, 475.0], [32.5, 475.0], [32.6, 475.0], [32.7, 475.0], [32.8, 475.0], [32.9, 476.0], [33.0, 476.0], [33.1, 476.0], [33.2, 476.0], [33.3, 476.0], [33.4, 476.0], [33.5, 476.0], [33.6, 476.0], [33.7, 476.0], [33.8, 476.0], [33.9, 477.0], [34.0, 477.0], [34.1, 477.0], [34.2, 477.0], [34.3, 477.0], [34.4, 479.0], [34.5, 479.0], [34.6, 479.0], [34.7, 479.0], [34.8, 479.0], [34.9, 479.0], [35.0, 479.0], [35.1, 479.0], [35.2, 479.0], [35.3, 479.0], [35.4, 479.0], [35.5, 479.0], [35.6, 479.0], [35.7, 479.0], [35.8, 479.0], [35.9, 479.0], [36.0, 479.0], [36.1, 479.0], [36.2, 479.0], [36.3, 479.0], [36.4, 480.0], [36.5, 480.0], [36.6, 480.0], [36.7, 480.0], [36.8, 480.0], [36.9, 480.0], [37.0, 480.0], [37.1, 480.0], [37.2, 480.0], [37.3, 480.0], [37.4, 481.0], [37.5, 481.0], [37.6, 481.0], [37.7, 481.0], [37.8, 481.0], [37.9, 481.0], [38.0, 481.0], [38.1, 481.0], [38.2, 481.0], [38.3, 481.0], [38.4, 481.0], [38.5, 481.0], [38.6, 481.0], [38.7, 481.0], [38.8, 481.0], [38.9, 481.0], [39.0, 481.0], [39.1, 481.0], [39.2, 481.0], [39.3, 481.0], [39.4, 482.0], [39.5, 482.0], [39.6, 482.0], [39.7, 482.0], [39.8, 482.0], [39.9, 482.0], [40.0, 482.0], [40.1, 482.0], [40.2, 482.0], [40.3, 482.0], [40.4, 482.0], [40.5, 483.0], [40.6, 483.0], [40.7, 483.0], [40.8, 483.0], [40.9, 483.0], [41.0, 484.0], [41.1, 484.0], [41.2, 484.0], [41.3, 484.0], [41.4, 484.0], [41.5, 484.0], [41.6, 484.0], [41.7, 484.0], [41.8, 484.0], [41.9, 484.0], [42.0, 484.0], [42.1, 484.0], [42.2, 484.0], [42.3, 484.0], [42.4, 484.0], [42.5, 484.0], [42.6, 484.0], [42.7, 484.0], [42.8, 484.0], [42.9, 484.0], [43.0, 486.0], [43.1, 486.0], [43.2, 486.0], [43.3, 486.0], [43.4, 486.0], [43.5, 486.0], [43.6, 486.0], [43.7, 486.0], [43.8, 486.0], [43.9, 486.0], [44.0, 487.0], [44.1, 487.0], [44.2, 487.0], [44.3, 487.0], [44.4, 487.0], [44.5, 487.0], [44.6, 487.0], [44.7, 487.0], [44.8, 487.0], [44.9, 487.0], [45.0, 487.0], [45.1, 487.0], [45.2, 487.0], [45.3, 487.0], [45.4, 487.0], [45.5, 487.0], [45.6, 487.0], [45.7, 487.0], [45.8, 487.0], [45.9, 487.0], [46.0, 488.0], [46.1, 488.0], [46.2, 488.0], [46.3, 488.0], [46.4, 488.0], [46.5, 488.0], [46.6, 488.0], [46.7, 488.0], [46.8, 488.0], [46.9, 488.0], [47.0, 489.0], [47.1, 489.0], [47.2, 489.0], [47.3, 489.0], [47.4, 489.0], [47.5, 489.0], [47.6, 489.0], [47.7, 489.0], [47.8, 489.0], [47.9, 489.0], [48.0, 489.0], [48.1, 489.0], [48.2, 489.0], [48.3, 489.0], [48.4, 489.0], [48.5, 490.0], [48.6, 490.0], [48.7, 490.0], [48.8, 490.0], [48.9, 490.0], [49.0, 491.0], [49.1, 491.0], [49.2, 491.0], [49.3, 491.0], [49.4, 491.0], [49.5, 491.0], [49.6, 491.0], [49.7, 491.0], [49.8, 491.0], [49.9, 491.0], [50.0, 491.0], [50.1, 492.0], [50.2, 492.0], [50.3, 492.0], [50.4, 492.0], [50.5, 492.0], [50.6, 492.0], [50.7, 492.0], [50.8, 492.0], [50.9, 492.0], [51.0, 492.0], [51.1, 492.0], [51.2, 492.0], [51.3, 492.0], [51.4, 492.0], [51.5, 492.0], [51.6, 493.0], [51.7, 493.0], [51.8, 493.0], [51.9, 493.0], [52.0, 493.0], [52.1, 493.0], [52.2, 493.0], [52.3, 493.0], [52.4, 493.0], [52.5, 493.0], [52.6, 494.0], [52.7, 494.0], [52.8, 494.0], [52.9, 494.0], [53.0, 494.0], [53.1, 495.0], [53.2, 495.0], [53.3, 495.0], [53.4, 495.0], [53.5, 495.0], [53.6, 495.0], [53.7, 495.0], [53.8, 495.0], [53.9, 495.0], [54.0, 495.0], [54.1, 495.0], [54.2, 495.0], [54.3, 495.0], [54.4, 495.0], [54.5, 495.0], [54.6, 496.0], [54.7, 496.0], [54.8, 496.0], [54.9, 496.0], [55.0, 496.0], [55.1, 496.0], [55.2, 496.0], [55.3, 496.0], [55.4, 496.0], [55.5, 496.0], [55.6, 496.0], [55.7, 496.0], [55.8, 496.0], [55.9, 496.0], [56.0, 496.0], [56.1, 497.0], [56.2, 497.0], [56.3, 497.0], [56.4, 497.0], [56.5, 497.0], [56.6, 497.0], [56.7, 497.0], [56.8, 497.0], [56.9, 497.0], [57.0, 497.0], [57.1, 497.0], [57.2, 497.0], [57.3, 497.0], [57.4, 497.0], [57.5, 497.0], [57.6, 497.0], [57.7, 497.0], [57.8, 497.0], [57.9, 497.0], [58.0, 497.0], [58.1, 497.0], [58.2, 497.0], [58.3, 497.0], [58.4, 497.0], [58.5, 497.0], [58.6, 498.0], [58.7, 498.0], [58.8, 498.0], [58.9, 498.0], [59.0, 498.0], [59.1, 498.0], [59.2, 498.0], [59.3, 498.0], [59.4, 498.0], [59.5, 498.0], [59.6, 499.0], [59.7, 499.0], [59.8, 499.0], [59.9, 499.0], [60.0, 499.0], [60.1, 499.0], [60.2, 499.0], [60.3, 499.0], [60.4, 499.0], [60.5, 499.0], [60.6, 499.0], [60.7, 499.0], [60.8, 499.0], [60.9, 499.0], [61.0, 499.0], [61.1, 499.0], [61.2, 499.0], [61.3, 499.0], [61.4, 499.0], [61.5, 499.0], [61.6, 499.0], [61.7, 499.0], [61.8, 499.0], [61.9, 499.0], [62.0, 499.0], [62.1, 499.0], [62.2, 500.0], [62.3, 500.0], [62.4, 500.0], [62.5, 500.0], [62.6, 500.0], [62.7, 500.0], [62.8, 500.0], [62.9, 500.0], [63.0, 500.0], [63.1, 500.0], [63.2, 501.0], [63.3, 501.0], [63.4, 501.0], [63.5, 501.0], [63.6, 501.0], [63.7, 502.0], [63.8, 502.0], [63.9, 502.0], [64.0, 502.0], [64.1, 502.0], [64.2, 503.0], [64.3, 503.0], [64.4, 503.0], [64.5, 503.0], [64.6, 503.0], [64.7, 504.0], [64.8, 504.0], [64.9, 504.0], [65.0, 504.0], [65.1, 504.0], [65.2, 504.0], [65.3, 504.0], [65.4, 504.0], [65.5, 504.0], [65.6, 504.0], [65.7, 504.0], [65.8, 504.0], [65.9, 504.0], [66.0, 504.0], [66.1, 504.0], [66.2, 504.0], [66.3, 504.0], [66.4, 504.0], [66.5, 504.0], [66.6, 504.0], [66.7, 505.0], [66.8, 505.0], [66.9, 505.0], [67.0, 505.0], [67.1, 505.0], [67.2, 505.0], [67.3, 505.0], [67.4, 505.0], [67.5, 505.0], [67.6, 505.0], [67.7, 505.0], [67.8, 505.0], [67.9, 505.0], [68.0, 505.0], [68.1, 505.0], [68.2, 506.0], [68.3, 506.0], [68.4, 506.0], [68.5, 506.0], [68.6, 506.0], [68.7, 506.0], [68.8, 506.0], [68.9, 506.0], [69.0, 506.0], [69.1, 506.0], [69.2, 507.0], [69.3, 507.0], [69.4, 507.0], [69.5, 507.0], [69.6, 507.0], [69.7, 507.0], [69.8, 507.0], [69.9, 507.0], [70.0, 507.0], [70.1, 507.0], [70.2, 507.0], [70.3, 509.0], [70.4, 509.0], [70.5, 509.0], [70.6, 509.0], [70.7, 509.0], [70.8, 509.0], [70.9, 509.0], [71.0, 509.0], [71.1, 509.0], [71.2, 509.0], [71.3, 510.0], [71.4, 510.0], [71.5, 510.0], [71.6, 510.0], [71.7, 510.0], [71.8, 510.0], [71.9, 510.0], [72.0, 510.0], [72.1, 510.0], [72.2, 510.0], [72.3, 510.0], [72.4, 510.0], [72.5, 510.0], [72.6, 510.0], [72.7, 510.0], [72.8, 510.0], [72.9, 510.0], [73.0, 510.0], [73.1, 510.0], [73.2, 510.0], [73.3, 510.0], [73.4, 510.0], [73.5, 510.0], [73.6, 510.0], [73.7, 510.0], [73.8, 511.0], [73.9, 511.0], [74.0, 511.0], [74.1, 511.0], [74.2, 511.0], [74.3, 512.0], [74.4, 512.0], [74.5, 512.0], [74.6, 512.0], [74.7, 512.0], [74.8, 512.0], [74.9, 512.0], [75.0, 512.0], [75.1, 512.0], [75.2, 512.0], [75.3, 512.0], [75.4, 512.0], [75.5, 512.0], [75.6, 512.0], [75.7, 512.0], [75.8, 512.0], [75.9, 512.0], [76.0, 512.0], [76.1, 512.0], [76.2, 512.0], [76.3, 512.0], [76.4, 512.0], [76.5, 512.0], [76.6, 512.0], [76.7, 512.0], [76.8, 512.0], [76.9, 512.0], [77.0, 512.0], [77.1, 512.0], [77.2, 512.0], [77.3, 513.0], [77.4, 513.0], [77.5, 513.0], [77.6, 513.0], [77.7, 513.0], [77.8, 513.0], [77.9, 513.0], [78.0, 513.0], [78.1, 513.0], [78.2, 513.0], [78.3, 514.0], [78.4, 514.0], [78.5, 514.0], [78.6, 514.0], [78.7, 514.0], [78.8, 514.0], [78.9, 514.0], [79.0, 514.0], [79.1, 514.0], [79.2, 514.0], [79.3, 516.0], [79.4, 516.0], [79.5, 516.0], [79.6, 516.0], [79.7, 516.0], [79.8, 516.0], [79.9, 516.0], [80.0, 516.0], [80.1, 516.0], [80.2, 516.0], [80.3, 516.0], [80.4, 517.0], [80.5, 517.0], [80.6, 517.0], [80.7, 517.0], [80.8, 517.0], [80.9, 517.0], [81.0, 517.0], [81.1, 517.0], [81.2, 517.0], [81.3, 517.0], [81.4, 518.0], [81.5, 518.0], [81.6, 518.0], [81.7, 518.0], [81.8, 518.0], [81.9, 519.0], [82.0, 519.0], [82.1, 519.0], [82.2, 519.0], [82.3, 519.0], [82.4, 519.0], [82.5, 519.0], [82.6, 519.0], [82.7, 519.0], [82.8, 519.0], [82.9, 520.0], [83.0, 520.0], [83.1, 520.0], [83.2, 520.0], [83.3, 520.0], [83.4, 521.0], [83.5, 521.0], [83.6, 521.0], [83.7, 521.0], [83.8, 521.0], [83.9, 521.0], [84.0, 521.0], [84.1, 521.0], [84.2, 521.0], [84.3, 521.0], [84.4, 521.0], [84.5, 521.0], [84.6, 521.0], [84.7, 521.0], [84.8, 521.0], [84.9, 522.0], [85.0, 522.0], [85.1, 522.0], [85.2, 522.0], [85.3, 522.0], [85.4, 522.0], [85.5, 522.0], [85.6, 522.0], [85.7, 522.0], [85.8, 522.0], [85.9, 523.0], [86.0, 523.0], [86.1, 523.0], [86.2, 523.0], [86.3, 523.0], [86.4, 523.0], [86.5, 523.0], [86.6, 523.0], [86.7, 523.0], [86.8, 523.0], [86.9, 523.0], [87.0, 523.0], [87.1, 523.0], [87.2, 523.0], [87.3, 523.0], [87.4, 524.0], [87.5, 524.0], [87.6, 524.0], [87.7, 524.0], [87.8, 524.0], [87.9, 524.0], [88.0, 524.0], [88.1, 524.0], [88.2, 524.0], [88.3, 524.0], [88.4, 525.0], [88.5, 525.0], [88.6, 525.0], [88.7, 525.0], [88.8, 525.0], [88.9, 525.0], [89.0, 525.0], [89.1, 525.0], [89.2, 525.0], [89.3, 525.0], [89.4, 525.0], [89.5, 525.0], [89.6, 525.0], [89.7, 525.0], [89.8, 525.0], [89.9, 526.0], [90.0, 526.0], [90.1, 526.0], [90.2, 526.0], [90.3, 526.0], [90.4, 526.0], [90.5, 526.0], [90.6, 526.0], [90.7, 526.0], [90.8, 526.0], [90.9, 526.0], [91.0, 527.0], [91.1, 527.0], [91.2, 527.0], [91.3, 527.0], [91.4, 527.0], [91.5, 527.0], [91.6, 527.0], [91.7, 527.0], [91.8, 527.0], [91.9, 527.0], [92.0, 527.0], [92.1, 527.0], [92.2, 527.0], [92.3, 527.0], [92.4, 527.0], [92.5, 528.0], [92.6, 528.0], [92.7, 528.0], [92.8, 528.0], [92.9, 528.0], [93.0, 528.0], [93.1, 528.0], [93.2, 528.0], [93.3, 528.0], [93.4, 528.0], [93.5, 529.0], [93.6, 529.0], [93.7, 529.0], [93.8, 529.0], [93.9, 529.0], [94.0, 529.0], [94.1, 529.0], [94.2, 529.0], [94.3, 529.0], [94.4, 529.0], [94.5, 529.0], [94.6, 529.0], [94.7, 529.0], [94.8, 529.0], [94.9, 529.0], [95.0, 530.0], [95.1, 530.0], [95.2, 530.0], [95.3, 530.0], [95.4, 530.0], [95.5, 532.0], [95.6, 532.0], [95.7, 532.0], [95.8, 532.0], [95.9, 532.0], [96.0, 532.0], [96.1, 532.0], [96.2, 532.0], [96.3, 532.0], [96.4, 532.0], [96.5, 533.0], [96.6, 533.0], [96.7, 533.0], [96.8, 533.0], [96.9, 533.0], [97.0, 533.0], [97.1, 533.0], [97.2, 533.0], [97.3, 533.0], [97.4, 533.0], [97.5, 534.0], [97.6, 534.0], [97.7, 534.0], [97.8, 534.0], [97.9, 534.0], [98.0, 535.0], [98.1, 535.0], [98.2, 535.0], [98.3, 535.0], [98.4, 535.0], [98.5, 537.0], [98.6, 537.0], [98.7, 537.0], [98.8, 537.0], [98.9, 537.0], [99.0, 539.0], [99.1, 539.0], [99.2, 539.0], [99.3, 539.0], [99.4, 539.0], [99.5, 542.0], [99.6, 542.0], [99.7, 542.0], [99.8, 542.0], [99.9, 542.0], [100.0, 542.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 2.0, "minX": 100.0, "maxY": 108.0, "series": [{"data": [[300.0, 6.0], [200.0, 7.0], [100.0, 2.0], [400.0, 108.0], [500.0, 75.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 500.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 73.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 125.0, "series": [{"data": [[0.0, 125.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 73.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 1.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.11764705882353, "minX": 1.60421892E12, "maxY": 9.755102040816324, "series": [{"data": [[1.60421898E12, 9.11764705882353], [1.60421892E12, 9.755102040816324]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60421898E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 303.0, "minX": 1.0, "maxY": 527.0, "series": [{"data": [[4.0, 361.5], [8.0, 361.0], [2.0, 527.0], [1.0, 525.0], [9.0, 391.0], [5.0, 338.0], [10.0, 488.35955056179785], [6.0, 303.0], [3.0, 527.0], [7.0, 325.6666666666667]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.59090909090909, 476.69696969697]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 409.26666666666665, "minX": 1.60421892E12, "maxY": 2331.95, "series": [{"data": [[1.60421898E12, 799.7166666666667], [1.60421892E12, 2331.95]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60421898E12, 409.26666666666665], [1.60421892E12, 1179.6333333333334]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60421898E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 470.5170068027212, "minX": 1.60421892E12, "maxY": 494.5098039215686, "series": [{"data": [[1.60421898E12, 494.5098039215686], [1.60421892E12, 470.5170068027212]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60421898E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 470.34693877551035, "minX": 1.60421892E12, "maxY": 494.41176470588243, "series": [{"data": [[1.60421898E12, 494.41176470588243], [1.60421892E12, 470.34693877551035]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60421898E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.60421892E12, "maxY": 0.5714285714285718, "series": [{"data": [[1.60421898E12, 0.0], [1.60421892E12, 0.5714285714285718]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60421898E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 186.0, "minX": 1.60421892E12, "maxY": 542.0, "series": [{"data": [[1.60421898E12, 542.0], [1.60421892E12, 535.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60421898E12, 442.0], [1.60421892E12, 190.31599954128265]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60421898E12, 442.0], [1.60421892E12, 192.04760018348694]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60421898E12, 442.0], [1.60421892E12, 191.27799977064132]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60421898E12, 442.0], [1.60421892E12, 186.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60421898E12, 495.0], [1.60421892E12, 491.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60421898E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 213.0, "minX": 7.0, "maxY": 527.0, "series": [{"data": [[19.0, 512.0], [20.0, 481.0], [10.0, 527.0], [21.0, 492.0], [7.0, 213.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 21.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 213.0, "minX": 7.0, "maxY": 526.5, "series": [{"data": [[19.0, 512.0], [20.0, 481.0], [10.0, 526.5], [21.0, 492.0], [7.0, 213.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 21.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.6833333333333333, "minX": 1.60421892E12, "maxY": 2.6166666666666667, "series": [{"data": [[1.60421898E12, 0.6833333333333333], [1.60421892E12, 2.6166666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60421898E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.85, "minX": 1.60421892E12, "maxY": 2.45, "series": [{"data": [[1.60421898E12, 0.85], [1.60421892E12, 2.45]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60421898E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.85, "minX": 1.60421892E12, "maxY": 2.45, "series": [{"data": [[1.60421898E12, 0.85], [1.60421892E12, 2.45]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60421898E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.85, "minX": 1.60421892E12, "maxY": 2.45, "series": [{"data": [[1.60421898E12, 0.85], [1.60421892E12, 2.45]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60421898E12, "title": "Total Transactions Per Second"}},
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

