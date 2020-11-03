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
        data: {"result": {"minY": 183.0, "minX": 0.0, "maxY": 1610.0, "series": [{"data": [[0.0, 183.0], [0.1, 183.0], [0.2, 183.0], [0.3, 183.0], [0.4, 183.0], [0.5, 183.0], [0.6, 183.0], [0.7, 183.0], [0.8, 183.0], [0.9, 204.0], [1.0, 204.0], [1.1, 204.0], [1.2, 204.0], [1.3, 204.0], [1.4, 204.0], [1.5, 204.0], [1.6, 204.0], [1.7, 204.0], [1.8, 205.0], [1.9, 205.0], [2.0, 205.0], [2.1, 205.0], [2.2, 205.0], [2.3, 205.0], [2.4, 205.0], [2.5, 205.0], [2.6, 205.0], [2.7, 212.0], [2.8, 212.0], [2.9, 212.0], [3.0, 212.0], [3.1, 212.0], [3.2, 212.0], [3.3, 212.0], [3.4, 212.0], [3.5, 212.0], [3.6, 214.0], [3.7, 214.0], [3.8, 214.0], [3.9, 214.0], [4.0, 214.0], [4.1, 214.0], [4.2, 214.0], [4.3, 214.0], [4.4, 214.0], [4.5, 215.0], [4.6, 215.0], [4.7, 215.0], [4.8, 215.0], [4.9, 215.0], [5.0, 215.0], [5.1, 215.0], [5.2, 215.0], [5.3, 215.0], [5.4, 218.0], [5.5, 218.0], [5.6, 218.0], [5.7, 218.0], [5.8, 218.0], [5.9, 218.0], [6.0, 218.0], [6.1, 218.0], [6.2, 218.0], [6.3, 224.0], [6.4, 224.0], [6.5, 224.0], [6.6, 224.0], [6.7, 224.0], [6.8, 224.0], [6.9, 224.0], [7.0, 224.0], [7.1, 224.0], [7.2, 225.0], [7.3, 225.0], [7.4, 225.0], [7.5, 225.0], [7.6, 225.0], [7.7, 225.0], [7.8, 225.0], [7.9, 225.0], [8.0, 225.0], [8.1, 228.0], [8.2, 228.0], [8.3, 228.0], [8.4, 228.0], [8.5, 228.0], [8.6, 228.0], [8.7, 228.0], [8.8, 228.0], [8.9, 228.0], [9.0, 229.0], [9.1, 229.0], [9.2, 229.0], [9.3, 229.0], [9.4, 229.0], [9.5, 229.0], [9.6, 229.0], [9.7, 229.0], [9.8, 229.0], [9.9, 232.0], [10.0, 232.0], [10.1, 232.0], [10.2, 232.0], [10.3, 232.0], [10.4, 232.0], [10.5, 232.0], [10.6, 232.0], [10.7, 232.0], [10.8, 240.0], [10.9, 240.0], [11.0, 240.0], [11.1, 240.0], [11.2, 240.0], [11.3, 240.0], [11.4, 240.0], [11.5, 240.0], [11.6, 240.0], [11.7, 241.0], [11.8, 241.0], [11.9, 241.0], [12.0, 241.0], [12.1, 241.0], [12.2, 241.0], [12.3, 241.0], [12.4, 241.0], [12.5, 241.0], [12.6, 241.0], [12.7, 241.0], [12.8, 241.0], [12.9, 241.0], [13.0, 241.0], [13.1, 241.0], [13.2, 241.0], [13.3, 241.0], [13.4, 247.0], [13.5, 247.0], [13.6, 247.0], [13.7, 247.0], [13.8, 247.0], [13.9, 247.0], [14.0, 247.0], [14.1, 247.0], [14.2, 247.0], [14.3, 249.0], [14.4, 249.0], [14.5, 249.0], [14.6, 249.0], [14.7, 249.0], [14.8, 249.0], [14.9, 249.0], [15.0, 249.0], [15.1, 249.0], [15.2, 251.0], [15.3, 251.0], [15.4, 251.0], [15.5, 251.0], [15.6, 251.0], [15.7, 251.0], [15.8, 251.0], [15.9, 251.0], [16.0, 251.0], [16.1, 260.0], [16.2, 260.0], [16.3, 260.0], [16.4, 260.0], [16.5, 260.0], [16.6, 260.0], [16.7, 260.0], [16.8, 260.0], [16.9, 260.0], [17.0, 260.0], [17.1, 260.0], [17.2, 260.0], [17.3, 260.0], [17.4, 260.0], [17.5, 260.0], [17.6, 260.0], [17.7, 260.0], [17.8, 260.0], [17.9, 261.0], [18.0, 261.0], [18.1, 261.0], [18.2, 261.0], [18.3, 261.0], [18.4, 261.0], [18.5, 261.0], [18.6, 261.0], [18.7, 261.0], [18.8, 262.0], [18.9, 262.0], [19.0, 262.0], [19.1, 262.0], [19.2, 262.0], [19.3, 262.0], [19.4, 262.0], [19.5, 262.0], [19.6, 262.0], [19.7, 262.0], [19.8, 262.0], [19.9, 262.0], [20.0, 262.0], [20.1, 262.0], [20.2, 262.0], [20.3, 262.0], [20.4, 262.0], [20.5, 262.0], [20.6, 326.0], [20.7, 326.0], [20.8, 326.0], [20.9, 326.0], [21.0, 326.0], [21.1, 326.0], [21.2, 326.0], [21.3, 326.0], [21.4, 326.0], [21.5, 328.0], [21.6, 328.0], [21.7, 328.0], [21.8, 328.0], [21.9, 328.0], [22.0, 328.0], [22.1, 328.0], [22.2, 328.0], [22.3, 328.0], [22.4, 335.0], [22.5, 335.0], [22.6, 335.0], [22.7, 335.0], [22.8, 335.0], [22.9, 335.0], [23.0, 335.0], [23.1, 335.0], [23.2, 335.0], [23.3, 365.0], [23.4, 365.0], [23.5, 365.0], [23.6, 365.0], [23.7, 365.0], [23.8, 365.0], [23.9, 365.0], [24.0, 365.0], [24.1, 365.0], [24.2, 373.0], [24.3, 373.0], [24.4, 373.0], [24.5, 373.0], [24.6, 373.0], [24.7, 373.0], [24.8, 373.0], [24.9, 373.0], [25.0, 382.0], [25.1, 382.0], [25.2, 382.0], [25.3, 382.0], [25.4, 382.0], [25.5, 382.0], [25.6, 382.0], [25.7, 382.0], [25.8, 382.0], [25.9, 396.0], [26.0, 396.0], [26.1, 396.0], [26.2, 396.0], [26.3, 396.0], [26.4, 396.0], [26.5, 396.0], [26.6, 396.0], [26.7, 396.0], [26.8, 401.0], [26.9, 401.0], [27.0, 401.0], [27.1, 401.0], [27.2, 401.0], [27.3, 401.0], [27.4, 401.0], [27.5, 401.0], [27.6, 401.0], [27.7, 406.0], [27.8, 406.0], [27.9, 406.0], [28.0, 406.0], [28.1, 406.0], [28.2, 406.0], [28.3, 406.0], [28.4, 406.0], [28.5, 406.0], [28.6, 407.0], [28.7, 407.0], [28.8, 407.0], [28.9, 407.0], [29.0, 407.0], [29.1, 407.0], [29.2, 407.0], [29.3, 407.0], [29.4, 407.0], [29.5, 408.0], [29.6, 408.0], [29.7, 408.0], [29.8, 408.0], [29.9, 408.0], [30.0, 408.0], [30.1, 408.0], [30.2, 408.0], [30.3, 408.0], [30.4, 409.0], [30.5, 409.0], [30.6, 409.0], [30.7, 409.0], [30.8, 409.0], [30.9, 409.0], [31.0, 409.0], [31.1, 409.0], [31.2, 409.0], [31.3, 417.0], [31.4, 417.0], [31.5, 417.0], [31.6, 417.0], [31.7, 417.0], [31.8, 417.0], [31.9, 417.0], [32.0, 417.0], [32.1, 417.0], [32.2, 420.0], [32.3, 420.0], [32.4, 420.0], [32.5, 420.0], [32.6, 420.0], [32.7, 420.0], [32.8, 420.0], [32.9, 420.0], [33.0, 420.0], [33.1, 424.0], [33.2, 424.0], [33.3, 424.0], [33.4, 424.0], [33.5, 424.0], [33.6, 424.0], [33.7, 424.0], [33.8, 424.0], [33.9, 424.0], [34.0, 425.0], [34.1, 425.0], [34.2, 425.0], [34.3, 425.0], [34.4, 425.0], [34.5, 425.0], [34.6, 425.0], [34.7, 425.0], [34.8, 425.0], [34.9, 427.0], [35.0, 427.0], [35.1, 427.0], [35.2, 427.0], [35.3, 427.0], [35.4, 427.0], [35.5, 427.0], [35.6, 427.0], [35.7, 427.0], [35.8, 431.0], [35.9, 431.0], [36.0, 431.0], [36.1, 431.0], [36.2, 431.0], [36.3, 431.0], [36.4, 431.0], [36.5, 431.0], [36.6, 431.0], [36.7, 439.0], [36.8, 439.0], [36.9, 439.0], [37.0, 439.0], [37.1, 439.0], [37.2, 439.0], [37.3, 439.0], [37.4, 439.0], [37.5, 439.0], [37.6, 440.0], [37.7, 440.0], [37.8, 440.0], [37.9, 440.0], [38.0, 440.0], [38.1, 440.0], [38.2, 440.0], [38.3, 440.0], [38.4, 440.0], [38.5, 440.0], [38.6, 440.0], [38.7, 440.0], [38.8, 440.0], [38.9, 440.0], [39.0, 440.0], [39.1, 440.0], [39.2, 440.0], [39.3, 442.0], [39.4, 442.0], [39.5, 442.0], [39.6, 442.0], [39.7, 442.0], [39.8, 442.0], [39.9, 442.0], [40.0, 442.0], [40.1, 442.0], [40.2, 453.0], [40.3, 453.0], [40.4, 453.0], [40.5, 453.0], [40.6, 453.0], [40.7, 453.0], [40.8, 453.0], [40.9, 453.0], [41.0, 453.0], [41.1, 459.0], [41.2, 459.0], [41.3, 459.0], [41.4, 459.0], [41.5, 459.0], [41.6, 459.0], [41.7, 459.0], [41.8, 459.0], [41.9, 459.0], [42.0, 468.0], [42.1, 468.0], [42.2, 468.0], [42.3, 468.0], [42.4, 468.0], [42.5, 468.0], [42.6, 468.0], [42.7, 468.0], [42.8, 468.0], [42.9, 470.0], [43.0, 470.0], [43.1, 470.0], [43.2, 470.0], [43.3, 470.0], [43.4, 470.0], [43.5, 470.0], [43.6, 470.0], [43.7, 470.0], [43.8, 499.0], [43.9, 499.0], [44.0, 499.0], [44.1, 499.0], [44.2, 499.0], [44.3, 499.0], [44.4, 499.0], [44.5, 499.0], [44.6, 499.0], [44.7, 500.0], [44.8, 500.0], [44.9, 500.0], [45.0, 500.0], [45.1, 500.0], [45.2, 500.0], [45.3, 500.0], [45.4, 500.0], [45.5, 500.0], [45.6, 503.0], [45.7, 503.0], [45.8, 503.0], [45.9, 503.0], [46.0, 503.0], [46.1, 503.0], [46.2, 503.0], [46.3, 503.0], [46.4, 503.0], [46.5, 504.0], [46.6, 504.0], [46.7, 504.0], [46.8, 504.0], [46.9, 504.0], [47.0, 504.0], [47.1, 504.0], [47.2, 504.0], [47.3, 504.0], [47.4, 505.0], [47.5, 505.0], [47.6, 505.0], [47.7, 505.0], [47.8, 505.0], [47.9, 505.0], [48.0, 505.0], [48.1, 505.0], [48.2, 505.0], [48.3, 513.0], [48.4, 513.0], [48.5, 513.0], [48.6, 513.0], [48.7, 513.0], [48.8, 513.0], [48.9, 513.0], [49.0, 513.0], [49.1, 513.0], [49.2, 520.0], [49.3, 520.0], [49.4, 520.0], [49.5, 520.0], [49.6, 520.0], [49.7, 520.0], [49.8, 520.0], [49.9, 520.0], [50.0, 520.0], [50.1, 524.0], [50.2, 524.0], [50.3, 524.0], [50.4, 524.0], [50.5, 524.0], [50.6, 524.0], [50.7, 524.0], [50.8, 524.0], [50.9, 532.0], [51.0, 532.0], [51.1, 532.0], [51.2, 532.0], [51.3, 532.0], [51.4, 532.0], [51.5, 532.0], [51.6, 532.0], [51.7, 532.0], [51.8, 541.0], [51.9, 541.0], [52.0, 541.0], [52.1, 541.0], [52.2, 541.0], [52.3, 541.0], [52.4, 541.0], [52.5, 541.0], [52.6, 541.0], [52.7, 545.0], [52.8, 545.0], [52.9, 545.0], [53.0, 545.0], [53.1, 545.0], [53.2, 545.0], [53.3, 545.0], [53.4, 545.0], [53.5, 545.0], [53.6, 547.0], [53.7, 547.0], [53.8, 547.0], [53.9, 547.0], [54.0, 547.0], [54.1, 547.0], [54.2, 547.0], [54.3, 547.0], [54.4, 547.0], [54.5, 565.0], [54.6, 565.0], [54.7, 565.0], [54.8, 565.0], [54.9, 565.0], [55.0, 565.0], [55.1, 565.0], [55.2, 565.0], [55.3, 565.0], [55.4, 570.0], [55.5, 570.0], [55.6, 570.0], [55.7, 570.0], [55.8, 570.0], [55.9, 570.0], [56.0, 570.0], [56.1, 570.0], [56.2, 570.0], [56.3, 571.0], [56.4, 571.0], [56.5, 571.0], [56.6, 571.0], [56.7, 571.0], [56.8, 571.0], [56.9, 571.0], [57.0, 571.0], [57.1, 571.0], [57.2, 572.0], [57.3, 572.0], [57.4, 572.0], [57.5, 572.0], [57.6, 572.0], [57.7, 572.0], [57.8, 572.0], [57.9, 572.0], [58.0, 572.0], [58.1, 576.0], [58.2, 576.0], [58.3, 576.0], [58.4, 576.0], [58.5, 576.0], [58.6, 576.0], [58.7, 576.0], [58.8, 576.0], [58.9, 576.0], [59.0, 591.0], [59.1, 591.0], [59.2, 591.0], [59.3, 591.0], [59.4, 591.0], [59.5, 591.0], [59.6, 591.0], [59.7, 591.0], [59.8, 591.0], [59.9, 602.0], [60.0, 602.0], [60.1, 602.0], [60.2, 602.0], [60.3, 602.0], [60.4, 602.0], [60.5, 602.0], [60.6, 602.0], [60.7, 602.0], [60.8, 602.0], [60.9, 602.0], [61.0, 602.0], [61.1, 602.0], [61.2, 602.0], [61.3, 602.0], [61.4, 602.0], [61.5, 602.0], [61.6, 602.0], [61.7, 607.0], [61.8, 607.0], [61.9, 607.0], [62.0, 607.0], [62.1, 607.0], [62.2, 607.0], [62.3, 607.0], [62.4, 607.0], [62.5, 607.0], [62.6, 618.0], [62.7, 618.0], [62.8, 618.0], [62.9, 618.0], [63.0, 618.0], [63.1, 618.0], [63.2, 618.0], [63.3, 618.0], [63.4, 620.0], [63.5, 620.0], [63.6, 620.0], [63.7, 620.0], [63.8, 620.0], [63.9, 620.0], [64.0, 620.0], [64.1, 620.0], [64.2, 620.0], [64.3, 623.0], [64.4, 623.0], [64.5, 623.0], [64.6, 623.0], [64.7, 623.0], [64.8, 623.0], [64.9, 623.0], [65.0, 623.0], [65.1, 623.0], [65.2, 635.0], [65.3, 635.0], [65.4, 635.0], [65.5, 635.0], [65.6, 635.0], [65.7, 635.0], [65.8, 635.0], [65.9, 635.0], [66.0, 635.0], [66.1, 639.0], [66.2, 639.0], [66.3, 639.0], [66.4, 639.0], [66.5, 639.0], [66.6, 639.0], [66.7, 639.0], [66.8, 639.0], [66.9, 639.0], [67.0, 644.0], [67.1, 644.0], [67.2, 644.0], [67.3, 644.0], [67.4, 644.0], [67.5, 644.0], [67.6, 644.0], [67.7, 644.0], [67.8, 644.0], [67.9, 645.0], [68.0, 645.0], [68.1, 645.0], [68.2, 645.0], [68.3, 645.0], [68.4, 645.0], [68.5, 645.0], [68.6, 645.0], [68.7, 645.0], [68.8, 650.0], [68.9, 650.0], [69.0, 650.0], [69.1, 650.0], [69.2, 650.0], [69.3, 650.0], [69.4, 650.0], [69.5, 650.0], [69.6, 650.0], [69.7, 663.0], [69.8, 663.0], [69.9, 663.0], [70.0, 663.0], [70.1, 663.0], [70.2, 663.0], [70.3, 663.0], [70.4, 663.0], [70.5, 663.0], [70.6, 672.0], [70.7, 672.0], [70.8, 672.0], [70.9, 672.0], [71.0, 672.0], [71.1, 672.0], [71.2, 672.0], [71.3, 672.0], [71.4, 672.0], [71.5, 681.0], [71.6, 681.0], [71.7, 681.0], [71.8, 681.0], [71.9, 681.0], [72.0, 681.0], [72.1, 681.0], [72.2, 681.0], [72.3, 681.0], [72.4, 699.0], [72.5, 699.0], [72.6, 699.0], [72.7, 699.0], [72.8, 699.0], [72.9, 699.0], [73.0, 699.0], [73.1, 699.0], [73.2, 699.0], [73.3, 702.0], [73.4, 702.0], [73.5, 702.0], [73.6, 702.0], [73.7, 702.0], [73.8, 702.0], [73.9, 702.0], [74.0, 702.0], [74.1, 702.0], [74.2, 717.0], [74.3, 717.0], [74.4, 717.0], [74.5, 717.0], [74.6, 717.0], [74.7, 717.0], [74.8, 717.0], [74.9, 717.0], [75.0, 717.0], [75.1, 721.0], [75.2, 721.0], [75.3, 721.0], [75.4, 721.0], [75.5, 721.0], [75.6, 721.0], [75.7, 721.0], [75.8, 721.0], [75.9, 734.0], [76.0, 734.0], [76.1, 734.0], [76.2, 734.0], [76.3, 734.0], [76.4, 734.0], [76.5, 734.0], [76.6, 734.0], [76.7, 734.0], [76.8, 737.0], [76.9, 737.0], [77.0, 737.0], [77.1, 737.0], [77.2, 737.0], [77.3, 737.0], [77.4, 737.0], [77.5, 737.0], [77.6, 737.0], [77.7, 740.0], [77.8, 740.0], [77.9, 740.0], [78.0, 740.0], [78.1, 740.0], [78.2, 740.0], [78.3, 740.0], [78.4, 740.0], [78.5, 740.0], [78.6, 781.0], [78.7, 781.0], [78.8, 781.0], [78.9, 781.0], [79.0, 781.0], [79.1, 781.0], [79.2, 781.0], [79.3, 781.0], [79.4, 781.0], [79.5, 802.0], [79.6, 802.0], [79.7, 802.0], [79.8, 802.0], [79.9, 802.0], [80.0, 802.0], [80.1, 802.0], [80.2, 802.0], [80.3, 802.0], [80.4, 825.0], [80.5, 825.0], [80.6, 825.0], [80.7, 825.0], [80.8, 825.0], [80.9, 825.0], [81.0, 825.0], [81.1, 825.0], [81.2, 825.0], [81.3, 872.0], [81.4, 872.0], [81.5, 872.0], [81.6, 872.0], [81.7, 872.0], [81.8, 872.0], [81.9, 872.0], [82.0, 872.0], [82.1, 872.0], [82.2, 874.0], [82.3, 874.0], [82.4, 874.0], [82.5, 874.0], [82.6, 874.0], [82.7, 874.0], [82.8, 874.0], [82.9, 874.0], [83.0, 874.0], [83.1, 896.0], [83.2, 896.0], [83.3, 896.0], [83.4, 896.0], [83.5, 896.0], [83.6, 896.0], [83.7, 896.0], [83.8, 896.0], [83.9, 896.0], [84.0, 898.0], [84.1, 898.0], [84.2, 898.0], [84.3, 898.0], [84.4, 898.0], [84.5, 898.0], [84.6, 898.0], [84.7, 898.0], [84.8, 898.0], [84.9, 912.0], [85.0, 912.0], [85.1, 912.0], [85.2, 912.0], [85.3, 912.0], [85.4, 912.0], [85.5, 912.0], [85.6, 912.0], [85.7, 912.0], [85.8, 923.0], [85.9, 923.0], [86.0, 923.0], [86.1, 923.0], [86.2, 923.0], [86.3, 923.0], [86.4, 923.0], [86.5, 923.0], [86.6, 923.0], [86.7, 983.0], [86.8, 983.0], [86.9, 983.0], [87.0, 983.0], [87.1, 983.0], [87.2, 983.0], [87.3, 983.0], [87.4, 983.0], [87.5, 999.0], [87.6, 999.0], [87.7, 999.0], [87.8, 999.0], [87.9, 999.0], [88.0, 999.0], [88.1, 999.0], [88.2, 999.0], [88.3, 999.0], [88.4, 1030.0], [88.5, 1030.0], [88.6, 1030.0], [88.7, 1030.0], [88.8, 1030.0], [88.9, 1030.0], [89.0, 1030.0], [89.1, 1030.0], [89.2, 1030.0], [89.3, 1045.0], [89.4, 1045.0], [89.5, 1045.0], [89.6, 1045.0], [89.7, 1045.0], [89.8, 1045.0], [89.9, 1045.0], [90.0, 1045.0], [90.1, 1045.0], [90.2, 1062.0], [90.3, 1062.0], [90.4, 1062.0], [90.5, 1062.0], [90.6, 1062.0], [90.7, 1062.0], [90.8, 1062.0], [90.9, 1062.0], [91.0, 1062.0], [91.1, 1099.0], [91.2, 1099.0], [91.3, 1099.0], [91.4, 1099.0], [91.5, 1099.0], [91.6, 1099.0], [91.7, 1099.0], [91.8, 1099.0], [91.9, 1099.0], [92.0, 1107.0], [92.1, 1107.0], [92.2, 1107.0], [92.3, 1107.0], [92.4, 1107.0], [92.5, 1107.0], [92.6, 1107.0], [92.7, 1107.0], [92.8, 1107.0], [92.9, 1138.0], [93.0, 1138.0], [93.1, 1138.0], [93.2, 1138.0], [93.3, 1138.0], [93.4, 1138.0], [93.5, 1138.0], [93.6, 1138.0], [93.7, 1138.0], [93.8, 1146.0], [93.9, 1146.0], [94.0, 1146.0], [94.1, 1146.0], [94.2, 1146.0], [94.3, 1146.0], [94.4, 1146.0], [94.5, 1146.0], [94.6, 1146.0], [94.7, 1169.0], [94.8, 1169.0], [94.9, 1169.0], [95.0, 1169.0], [95.1, 1169.0], [95.2, 1169.0], [95.3, 1169.0], [95.4, 1169.0], [95.5, 1169.0], [95.6, 1208.0], [95.7, 1208.0], [95.8, 1208.0], [95.9, 1208.0], [96.0, 1208.0], [96.1, 1208.0], [96.2, 1208.0], [96.3, 1208.0], [96.4, 1208.0], [96.5, 1283.0], [96.6, 1283.0], [96.7, 1283.0], [96.8, 1283.0], [96.9, 1283.0], [97.0, 1283.0], [97.1, 1283.0], [97.2, 1283.0], [97.3, 1283.0], [97.4, 1431.0], [97.5, 1431.0], [97.6, 1431.0], [97.7, 1431.0], [97.8, 1431.0], [97.9, 1431.0], [98.0, 1431.0], [98.1, 1431.0], [98.2, 1431.0], [98.3, 1608.0], [98.4, 1608.0], [98.5, 1608.0], [98.6, 1608.0], [98.7, 1608.0], [98.8, 1608.0], [98.9, 1608.0], [99.0, 1608.0], [99.1, 1608.0], [99.2, 1610.0], [99.3, 1610.0], [99.4, 1610.0], [99.5, 1610.0], [99.6, 1610.0], [99.7, 1610.0], [99.8, 1610.0], [99.9, 1610.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 22.0, "series": [{"data": [[600.0, 15.0], [700.0, 7.0], [200.0, 22.0], [800.0, 6.0], [900.0, 4.0], [1000.0, 4.0], [1100.0, 4.0], [300.0, 7.0], [1200.0, 2.0], [1400.0, 1.0], [400.0, 20.0], [1600.0, 2.0], [100.0, 1.0], [500.0, 17.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1600.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 2.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 59.0, "series": [{"data": [[0.0, 51.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 59.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 2.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 8.875, "minX": 1.60440588E12, "maxY": 9.56730769230769, "series": [{"data": [[1.60440594E12, 9.56730769230769], [1.60440588E12, 8.875]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60440594E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 326.0, "minX": 1.0, "maxY": 1608.0, "series": [{"data": [[8.0, 817.0], [4.0, 1045.0], [2.0, 1208.0], [1.0, 1608.0], [9.0, 462.25], [10.0, 566.0], [5.0, 407.0], [6.0, 404.5], [3.0, 1030.0], [7.0, 326.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.51785714285714, 583.7857142857141]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 104.51666666666667, "minX": 1.60440588E12, "maxY": 376099.55, "series": [{"data": [[1.60440594E12, 376099.55], [1.60440588E12, 16066.2]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60440594E12, 1376.4166666666667], [1.60440588E12, 104.51666666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60440594E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 413.75, "minX": 1.60440588E12, "maxY": 596.8653846153849, "series": [{"data": [[1.60440594E12, 596.8653846153849], [1.60440588E12, 413.75]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60440594E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 412.24999999999994, "minX": 1.60440588E12, "maxY": 595.0961538461537, "series": [{"data": [[1.60440594E12, 595.0961538461537], [1.60440588E12, 412.24999999999994]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60440594E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.07692307692307693, "minX": 1.60440588E12, "maxY": 11.625, "series": [{"data": [[1.60440594E12, 0.07692307692307693], [1.60440588E12, 11.625]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60440594E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 183.0, "minX": 1.60440588E12, "maxY": 1610.0, "series": [{"data": [[1.60440594E12, 1610.0], [1.60440588E12, 717.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60440594E12, 183.0], [1.60440588E12, 214.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60440594E12, 183.82950021028518], [1.60440588E12, 214.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60440594E12, 183.0], [1.60440588E12, 214.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60440594E12, 183.0], [1.60440588E12, 214.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60440594E12, 536.5], [1.60440588E12, 399.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60440594E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 399.5, "minX": 4.0, "maxY": 1126.5, "series": [{"data": [[8.0, 399.5], [4.0, 1126.5], [18.0, 516.5], [19.0, 505.0], [20.0, 429.5], [14.0, 544.0], [15.0, 576.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 20.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 397.0, "minX": 4.0, "maxY": 1119.5, "series": [{"data": [[8.0, 397.0], [4.0, 1119.5], [18.0, 515.5], [19.0, 501.0], [20.0, 428.5], [14.0, 543.0], [15.0, 575.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 20.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.3, "minX": 1.60440588E12, "maxY": 1.5666666666666667, "series": [{"data": [[1.60440594E12, 1.5666666666666667], [1.60440588E12, 0.3]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60440594E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.13333333333333333, "minX": 1.60440588E12, "maxY": 1.7333333333333334, "series": [{"data": [[1.60440594E12, 1.7333333333333334], [1.60440588E12, 0.13333333333333333]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60440594E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.13333333333333333, "minX": 1.60440588E12, "maxY": 1.7333333333333334, "series": [{"data": [[1.60440594E12, 1.7333333333333334], [1.60440588E12, 0.13333333333333333]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60440594E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.13333333333333333, "minX": 1.60440588E12, "maxY": 1.7333333333333334, "series": [{"data": [[1.60440594E12, 1.7333333333333334], [1.60440588E12, 0.13333333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60440594E12, "title": "Total Transactions Per Second"}},
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

