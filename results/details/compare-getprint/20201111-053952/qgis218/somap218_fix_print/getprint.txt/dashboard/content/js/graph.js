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
        data: {"result": {"minY": 115.0, "minX": 0.0, "maxY": 8373.0, "series": [{"data": [[0.0, 115.0], [0.1, 115.0], [0.2, 115.0], [0.3, 115.0], [0.4, 115.0], [0.5, 115.0], [0.6, 115.0], [0.7, 115.0], [0.8, 115.0], [0.9, 115.0], [1.0, 115.0], [1.1, 115.0], [1.2, 115.0], [1.3, 115.0], [1.4, 115.0], [1.5, 115.0], [1.6, 133.0], [1.7, 133.0], [1.8, 133.0], [1.9, 133.0], [2.0, 133.0], [2.1, 133.0], [2.2, 133.0], [2.3, 133.0], [2.4, 133.0], [2.5, 133.0], [2.6, 133.0], [2.7, 133.0], [2.8, 133.0], [2.9, 133.0], [3.0, 133.0], [3.1, 133.0], [3.2, 180.0], [3.3, 180.0], [3.4, 180.0], [3.5, 180.0], [3.6, 180.0], [3.7, 180.0], [3.8, 180.0], [3.9, 180.0], [4.0, 180.0], [4.1, 180.0], [4.2, 180.0], [4.3, 180.0], [4.4, 180.0], [4.5, 180.0], [4.6, 180.0], [4.7, 180.0], [4.8, 185.0], [4.9, 185.0], [5.0, 185.0], [5.1, 185.0], [5.2, 185.0], [5.3, 185.0], [5.4, 185.0], [5.5, 185.0], [5.6, 185.0], [5.7, 185.0], [5.8, 185.0], [5.9, 185.0], [6.0, 185.0], [6.1, 185.0], [6.2, 185.0], [6.3, 185.0], [6.4, 194.0], [6.5, 194.0], [6.6, 194.0], [6.7, 194.0], [6.8, 194.0], [6.9, 194.0], [7.0, 194.0], [7.1, 194.0], [7.2, 194.0], [7.3, 194.0], [7.4, 194.0], [7.5, 194.0], [7.6, 194.0], [7.7, 194.0], [7.8, 194.0], [7.9, 194.0], [8.0, 210.0], [8.1, 210.0], [8.2, 210.0], [8.3, 210.0], [8.4, 210.0], [8.5, 210.0], [8.6, 210.0], [8.7, 210.0], [8.8, 210.0], [8.9, 210.0], [9.0, 210.0], [9.1, 210.0], [9.2, 210.0], [9.3, 210.0], [9.4, 210.0], [9.5, 210.0], [9.6, 210.0], [9.7, 210.0], [9.8, 210.0], [9.9, 210.0], [10.0, 210.0], [10.1, 210.0], [10.2, 210.0], [10.3, 210.0], [10.4, 210.0], [10.5, 210.0], [10.6, 210.0], [10.7, 210.0], [10.8, 210.0], [10.9, 210.0], [11.0, 210.0], [11.1, 210.0], [11.2, 212.0], [11.3, 212.0], [11.4, 212.0], [11.5, 212.0], [11.6, 212.0], [11.7, 212.0], [11.8, 212.0], [11.9, 212.0], [12.0, 212.0], [12.1, 212.0], [12.2, 212.0], [12.3, 212.0], [12.4, 212.0], [12.5, 212.0], [12.6, 212.0], [12.7, 213.0], [12.8, 213.0], [12.9, 213.0], [13.0, 213.0], [13.1, 213.0], [13.2, 213.0], [13.3, 213.0], [13.4, 213.0], [13.5, 213.0], [13.6, 213.0], [13.7, 213.0], [13.8, 213.0], [13.9, 213.0], [14.0, 213.0], [14.1, 213.0], [14.2, 213.0], [14.3, 215.0], [14.4, 215.0], [14.5, 215.0], [14.6, 215.0], [14.7, 215.0], [14.8, 215.0], [14.9, 215.0], [15.0, 215.0], [15.1, 215.0], [15.2, 215.0], [15.3, 215.0], [15.4, 215.0], [15.5, 215.0], [15.6, 215.0], [15.7, 215.0], [15.8, 215.0], [15.9, 217.0], [16.0, 217.0], [16.1, 217.0], [16.2, 217.0], [16.3, 217.0], [16.4, 217.0], [16.5, 217.0], [16.6, 217.0], [16.7, 217.0], [16.8, 217.0], [16.9, 217.0], [17.0, 217.0], [17.1, 217.0], [17.2, 217.0], [17.3, 217.0], [17.4, 217.0], [17.5, 221.0], [17.6, 221.0], [17.7, 221.0], [17.8, 221.0], [17.9, 221.0], [18.0, 221.0], [18.1, 221.0], [18.2, 221.0], [18.3, 221.0], [18.4, 221.0], [18.5, 221.0], [18.6, 221.0], [18.7, 221.0], [18.8, 221.0], [18.9, 221.0], [19.0, 221.0], [19.1, 226.0], [19.2, 226.0], [19.3, 226.0], [19.4, 226.0], [19.5, 226.0], [19.6, 226.0], [19.7, 226.0], [19.8, 226.0], [19.9, 226.0], [20.0, 226.0], [20.1, 226.0], [20.2, 226.0], [20.3, 226.0], [20.4, 226.0], [20.5, 226.0], [20.6, 226.0], [20.7, 228.0], [20.8, 228.0], [20.9, 228.0], [21.0, 228.0], [21.1, 228.0], [21.2, 228.0], [21.3, 228.0], [21.4, 228.0], [21.5, 228.0], [21.6, 228.0], [21.7, 228.0], [21.8, 228.0], [21.9, 228.0], [22.0, 228.0], [22.1, 228.0], [22.2, 228.0], [22.3, 234.0], [22.4, 234.0], [22.5, 234.0], [22.6, 234.0], [22.7, 234.0], [22.8, 234.0], [22.9, 234.0], [23.0, 234.0], [23.1, 234.0], [23.2, 234.0], [23.3, 234.0], [23.4, 234.0], [23.5, 234.0], [23.6, 234.0], [23.7, 234.0], [23.8, 234.0], [23.9, 236.0], [24.0, 236.0], [24.1, 236.0], [24.2, 236.0], [24.3, 236.0], [24.4, 236.0], [24.5, 236.0], [24.6, 236.0], [24.7, 236.0], [24.8, 236.0], [24.9, 236.0], [25.0, 236.0], [25.1, 236.0], [25.2, 236.0], [25.3, 236.0], [25.4, 237.0], [25.5, 237.0], [25.6, 237.0], [25.7, 237.0], [25.8, 237.0], [25.9, 237.0], [26.0, 237.0], [26.1, 237.0], [26.2, 237.0], [26.3, 237.0], [26.4, 237.0], [26.5, 237.0], [26.6, 237.0], [26.7, 237.0], [26.8, 237.0], [26.9, 237.0], [27.0, 256.0], [27.1, 256.0], [27.2, 256.0], [27.3, 256.0], [27.4, 256.0], [27.5, 256.0], [27.6, 256.0], [27.7, 256.0], [27.8, 256.0], [27.9, 256.0], [28.0, 256.0], [28.1, 256.0], [28.2, 256.0], [28.3, 256.0], [28.4, 256.0], [28.5, 256.0], [28.6, 256.0], [28.7, 256.0], [28.8, 256.0], [28.9, 256.0], [29.0, 256.0], [29.1, 256.0], [29.2, 256.0], [29.3, 256.0], [29.4, 256.0], [29.5, 256.0], [29.6, 256.0], [29.7, 256.0], [29.8, 256.0], [29.9, 256.0], [30.0, 256.0], [30.1, 256.0], [30.2, 261.0], [30.3, 261.0], [30.4, 261.0], [30.5, 261.0], [30.6, 261.0], [30.7, 261.0], [30.8, 261.0], [30.9, 261.0], [31.0, 261.0], [31.1, 261.0], [31.2, 261.0], [31.3, 261.0], [31.4, 261.0], [31.5, 261.0], [31.6, 261.0], [31.7, 261.0], [31.8, 262.0], [31.9, 262.0], [32.0, 262.0], [32.1, 262.0], [32.2, 262.0], [32.3, 262.0], [32.4, 262.0], [32.5, 262.0], [32.6, 262.0], [32.7, 262.0], [32.8, 262.0], [32.9, 262.0], [33.0, 262.0], [33.1, 262.0], [33.2, 262.0], [33.3, 262.0], [33.4, 264.0], [33.5, 264.0], [33.6, 264.0], [33.7, 264.0], [33.8, 264.0], [33.9, 264.0], [34.0, 264.0], [34.1, 264.0], [34.2, 264.0], [34.3, 264.0], [34.4, 264.0], [34.5, 264.0], [34.6, 264.0], [34.7, 264.0], [34.8, 264.0], [34.9, 264.0], [35.0, 268.0], [35.1, 268.0], [35.2, 268.0], [35.3, 268.0], [35.4, 268.0], [35.5, 268.0], [35.6, 268.0], [35.7, 268.0], [35.8, 268.0], [35.9, 268.0], [36.0, 268.0], [36.1, 268.0], [36.2, 268.0], [36.3, 268.0], [36.4, 268.0], [36.5, 268.0], [36.6, 270.0], [36.7, 270.0], [36.8, 270.0], [36.9, 270.0], [37.0, 270.0], [37.1, 270.0], [37.2, 270.0], [37.3, 270.0], [37.4, 270.0], [37.5, 270.0], [37.6, 270.0], [37.7, 270.0], [37.8, 270.0], [37.9, 270.0], [38.0, 270.0], [38.1, 275.0], [38.2, 275.0], [38.3, 275.0], [38.4, 275.0], [38.5, 275.0], [38.6, 275.0], [38.7, 275.0], [38.8, 275.0], [38.9, 275.0], [39.0, 275.0], [39.1, 275.0], [39.2, 275.0], [39.3, 275.0], [39.4, 275.0], [39.5, 275.0], [39.6, 275.0], [39.7, 276.0], [39.8, 276.0], [39.9, 276.0], [40.0, 276.0], [40.1, 276.0], [40.2, 276.0], [40.3, 276.0], [40.4, 276.0], [40.5, 276.0], [40.6, 276.0], [40.7, 276.0], [40.8, 276.0], [40.9, 276.0], [41.0, 276.0], [41.1, 276.0], [41.2, 276.0], [41.3, 284.0], [41.4, 284.0], [41.5, 284.0], [41.6, 284.0], [41.7, 284.0], [41.8, 284.0], [41.9, 284.0], [42.0, 284.0], [42.1, 284.0], [42.2, 284.0], [42.3, 284.0], [42.4, 284.0], [42.5, 284.0], [42.6, 284.0], [42.7, 284.0], [42.8, 284.0], [42.9, 295.0], [43.0, 295.0], [43.1, 295.0], [43.2, 295.0], [43.3, 295.0], [43.4, 295.0], [43.5, 295.0], [43.6, 295.0], [43.7, 295.0], [43.8, 295.0], [43.9, 295.0], [44.0, 295.0], [44.1, 295.0], [44.2, 295.0], [44.3, 295.0], [44.4, 295.0], [44.5, 314.0], [44.6, 314.0], [44.7, 314.0], [44.8, 314.0], [44.9, 314.0], [45.0, 314.0], [45.1, 314.0], [45.2, 314.0], [45.3, 314.0], [45.4, 314.0], [45.5, 314.0], [45.6, 314.0], [45.7, 314.0], [45.8, 314.0], [45.9, 314.0], [46.0, 314.0], [46.1, 314.0], [46.2, 314.0], [46.3, 314.0], [46.4, 314.0], [46.5, 314.0], [46.6, 314.0], [46.7, 314.0], [46.8, 314.0], [46.9, 314.0], [47.0, 314.0], [47.1, 314.0], [47.2, 314.0], [47.3, 314.0], [47.4, 314.0], [47.5, 314.0], [47.6, 314.0], [47.7, 342.0], [47.8, 342.0], [47.9, 342.0], [48.0, 342.0], [48.1, 342.0], [48.2, 342.0], [48.3, 342.0], [48.4, 342.0], [48.5, 342.0], [48.6, 342.0], [48.7, 342.0], [48.8, 342.0], [48.9, 342.0], [49.0, 342.0], [49.1, 342.0], [49.2, 342.0], [49.3, 344.0], [49.4, 344.0], [49.5, 344.0], [49.6, 344.0], [49.7, 344.0], [49.8, 344.0], [49.9, 344.0], [50.0, 344.0], [50.1, 344.0], [50.2, 344.0], [50.3, 344.0], [50.4, 344.0], [50.5, 344.0], [50.6, 344.0], [50.7, 344.0], [50.8, 396.0], [50.9, 396.0], [51.0, 396.0], [51.1, 396.0], [51.2, 396.0], [51.3, 396.0], [51.4, 396.0], [51.5, 396.0], [51.6, 396.0], [51.7, 396.0], [51.8, 396.0], [51.9, 396.0], [52.0, 396.0], [52.1, 396.0], [52.2, 396.0], [52.3, 396.0], [52.4, 409.0], [52.5, 409.0], [52.6, 409.0], [52.7, 409.0], [52.8, 409.0], [52.9, 409.0], [53.0, 409.0], [53.1, 409.0], [53.2, 409.0], [53.3, 409.0], [53.4, 409.0], [53.5, 409.0], [53.6, 409.0], [53.7, 409.0], [53.8, 409.0], [53.9, 409.0], [54.0, 479.0], [54.1, 479.0], [54.2, 479.0], [54.3, 479.0], [54.4, 479.0], [54.5, 479.0], [54.6, 479.0], [54.7, 479.0], [54.8, 479.0], [54.9, 479.0], [55.0, 479.0], [55.1, 479.0], [55.2, 479.0], [55.3, 479.0], [55.4, 479.0], [55.5, 479.0], [55.6, 522.0], [55.7, 522.0], [55.8, 522.0], [55.9, 522.0], [56.0, 522.0], [56.1, 522.0], [56.2, 522.0], [56.3, 522.0], [56.4, 522.0], [56.5, 522.0], [56.6, 522.0], [56.7, 522.0], [56.8, 522.0], [56.9, 522.0], [57.0, 522.0], [57.1, 522.0], [57.2, 581.0], [57.3, 581.0], [57.4, 581.0], [57.5, 581.0], [57.6, 581.0], [57.7, 581.0], [57.8, 581.0], [57.9, 581.0], [58.0, 581.0], [58.1, 581.0], [58.2, 581.0], [58.3, 581.0], [58.4, 581.0], [58.5, 581.0], [58.6, 581.0], [58.7, 581.0], [58.8, 599.0], [58.9, 599.0], [59.0, 599.0], [59.1, 599.0], [59.2, 599.0], [59.3, 599.0], [59.4, 599.0], [59.5, 599.0], [59.6, 599.0], [59.7, 599.0], [59.8, 599.0], [59.9, 599.0], [60.0, 599.0], [60.1, 599.0], [60.2, 599.0], [60.3, 599.0], [60.4, 636.0], [60.5, 636.0], [60.6, 636.0], [60.7, 636.0], [60.8, 636.0], [60.9, 636.0], [61.0, 636.0], [61.1, 636.0], [61.2, 636.0], [61.3, 636.0], [61.4, 636.0], [61.5, 636.0], [61.6, 636.0], [61.7, 636.0], [61.8, 636.0], [61.9, 636.0], [62.0, 645.0], [62.1, 645.0], [62.2, 645.0], [62.3, 645.0], [62.4, 645.0], [62.5, 645.0], [62.6, 645.0], [62.7, 645.0], [62.8, 645.0], [62.9, 645.0], [63.0, 645.0], [63.1, 645.0], [63.2, 645.0], [63.3, 645.0], [63.4, 645.0], [63.5, 678.0], [63.6, 678.0], [63.7, 678.0], [63.8, 678.0], [63.9, 678.0], [64.0, 678.0], [64.1, 678.0], [64.2, 678.0], [64.3, 678.0], [64.4, 678.0], [64.5, 678.0], [64.6, 678.0], [64.7, 678.0], [64.8, 678.0], [64.9, 678.0], [65.0, 678.0], [65.1, 687.0], [65.2, 687.0], [65.3, 687.0], [65.4, 687.0], [65.5, 687.0], [65.6, 687.0], [65.7, 687.0], [65.8, 687.0], [65.9, 687.0], [66.0, 687.0], [66.1, 687.0], [66.2, 687.0], [66.3, 687.0], [66.4, 687.0], [66.5, 687.0], [66.6, 687.0], [66.7, 711.0], [66.8, 711.0], [66.9, 711.0], [67.0, 711.0], [67.1, 711.0], [67.2, 711.0], [67.3, 711.0], [67.4, 711.0], [67.5, 711.0], [67.6, 711.0], [67.7, 711.0], [67.8, 711.0], [67.9, 711.0], [68.0, 711.0], [68.1, 711.0], [68.2, 711.0], [68.3, 724.0], [68.4, 724.0], [68.5, 724.0], [68.6, 724.0], [68.7, 724.0], [68.8, 724.0], [68.9, 724.0], [69.0, 724.0], [69.1, 724.0], [69.2, 724.0], [69.3, 724.0], [69.4, 724.0], [69.5, 724.0], [69.6, 724.0], [69.7, 724.0], [69.8, 724.0], [69.9, 756.0], [70.0, 756.0], [70.1, 756.0], [70.2, 756.0], [70.3, 756.0], [70.4, 756.0], [70.5, 756.0], [70.6, 756.0], [70.7, 756.0], [70.8, 756.0], [70.9, 756.0], [71.0, 756.0], [71.1, 756.0], [71.2, 756.0], [71.3, 756.0], [71.4, 756.0], [71.5, 780.0], [71.6, 780.0], [71.7, 780.0], [71.8, 780.0], [71.9, 780.0], [72.0, 780.0], [72.1, 780.0], [72.2, 780.0], [72.3, 780.0], [72.4, 780.0], [72.5, 780.0], [72.6, 780.0], [72.7, 780.0], [72.8, 780.0], [72.9, 780.0], [73.0, 780.0], [73.1, 805.0], [73.2, 805.0], [73.3, 805.0], [73.4, 805.0], [73.5, 805.0], [73.6, 805.0], [73.7, 805.0], [73.8, 805.0], [73.9, 805.0], [74.0, 805.0], [74.1, 805.0], [74.2, 805.0], [74.3, 805.0], [74.4, 805.0], [74.5, 805.0], [74.6, 805.0], [74.7, 887.0], [74.8, 887.0], [74.9, 887.0], [75.0, 887.0], [75.1, 887.0], [75.2, 887.0], [75.3, 887.0], [75.4, 887.0], [75.5, 887.0], [75.6, 887.0], [75.7, 887.0], [75.8, 887.0], [75.9, 887.0], [76.0, 887.0], [76.1, 887.0], [76.2, 984.0], [76.3, 984.0], [76.4, 984.0], [76.5, 984.0], [76.6, 984.0], [76.7, 984.0], [76.8, 984.0], [76.9, 984.0], [77.0, 984.0], [77.1, 984.0], [77.2, 984.0], [77.3, 984.0], [77.4, 984.0], [77.5, 984.0], [77.6, 984.0], [77.7, 984.0], [77.8, 1089.0], [77.9, 1089.0], [78.0, 1089.0], [78.1, 1089.0], [78.2, 1089.0], [78.3, 1089.0], [78.4, 1089.0], [78.5, 1089.0], [78.6, 1089.0], [78.7, 1089.0], [78.8, 1089.0], [78.9, 1089.0], [79.0, 1089.0], [79.1, 1089.0], [79.2, 1089.0], [79.3, 1089.0], [79.4, 1106.0], [79.5, 1106.0], [79.6, 1106.0], [79.7, 1106.0], [79.8, 1106.0], [79.9, 1106.0], [80.0, 1106.0], [80.1, 1106.0], [80.2, 1106.0], [80.3, 1106.0], [80.4, 1106.0], [80.5, 1106.0], [80.6, 1106.0], [80.7, 1106.0], [80.8, 1106.0], [80.9, 1106.0], [81.0, 1157.0], [81.1, 1157.0], [81.2, 1157.0], [81.3, 1157.0], [81.4, 1157.0], [81.5, 1157.0], [81.6, 1157.0], [81.7, 1157.0], [81.8, 1157.0], [81.9, 1157.0], [82.0, 1157.0], [82.1, 1157.0], [82.2, 1157.0], [82.3, 1157.0], [82.4, 1157.0], [82.5, 1157.0], [82.6, 1568.0], [82.7, 1568.0], [82.8, 1568.0], [82.9, 1568.0], [83.0, 1568.0], [83.1, 1568.0], [83.2, 1568.0], [83.3, 1568.0], [83.4, 1568.0], [83.5, 1568.0], [83.6, 1568.0], [83.7, 1568.0], [83.8, 1568.0], [83.9, 1568.0], [84.0, 1568.0], [84.1, 1568.0], [84.2, 3595.0], [84.3, 3595.0], [84.4, 3595.0], [84.5, 3595.0], [84.6, 3595.0], [84.7, 3595.0], [84.8, 3595.0], [84.9, 3595.0], [85.0, 3595.0], [85.1, 3595.0], [85.2, 3595.0], [85.3, 3595.0], [85.4, 3595.0], [85.5, 3595.0], [85.6, 3595.0], [85.7, 3595.0], [85.8, 4484.0], [85.9, 4484.0], [86.0, 4484.0], [86.1, 4484.0], [86.2, 4484.0], [86.3, 4484.0], [86.4, 4484.0], [86.5, 4484.0], [86.6, 4484.0], [86.7, 4484.0], [86.8, 4484.0], [86.9, 4484.0], [87.0, 4484.0], [87.1, 4484.0], [87.2, 4484.0], [87.3, 4484.0], [87.4, 4538.0], [87.5, 4538.0], [87.6, 4538.0], [87.7, 4538.0], [87.8, 4538.0], [87.9, 4538.0], [88.0, 4538.0], [88.1, 4538.0], [88.2, 4538.0], [88.3, 4538.0], [88.4, 4538.0], [88.5, 4538.0], [88.6, 4538.0], [88.7, 4538.0], [88.8, 4538.0], [88.9, 4586.0], [89.0, 4586.0], [89.1, 4586.0], [89.2, 4586.0], [89.3, 4586.0], [89.4, 4586.0], [89.5, 4586.0], [89.6, 4586.0], [89.7, 4586.0], [89.8, 4586.0], [89.9, 4586.0], [90.0, 4586.0], [90.1, 4586.0], [90.2, 4586.0], [90.3, 4586.0], [90.4, 4586.0], [90.5, 4597.0], [90.6, 4597.0], [90.7, 4597.0], [90.8, 4597.0], [90.9, 4597.0], [91.0, 4597.0], [91.1, 4597.0], [91.2, 4597.0], [91.3, 4597.0], [91.4, 4597.0], [91.5, 4597.0], [91.6, 4597.0], [91.7, 4597.0], [91.8, 4597.0], [91.9, 4597.0], [92.0, 4597.0], [92.1, 4883.0], [92.2, 4883.0], [92.3, 4883.0], [92.4, 4883.0], [92.5, 4883.0], [92.6, 4883.0], [92.7, 4883.0], [92.8, 4883.0], [92.9, 4883.0], [93.0, 4883.0], [93.1, 4883.0], [93.2, 4883.0], [93.3, 4883.0], [93.4, 4883.0], [93.5, 4883.0], [93.6, 4883.0], [93.7, 6531.0], [93.8, 6531.0], [93.9, 6531.0], [94.0, 6531.0], [94.1, 6531.0], [94.2, 6531.0], [94.3, 6531.0], [94.4, 6531.0], [94.5, 6531.0], [94.6, 6531.0], [94.7, 6531.0], [94.8, 6531.0], [94.9, 6531.0], [95.0, 6531.0], [95.1, 6531.0], [95.2, 6531.0], [95.3, 7453.0], [95.4, 7453.0], [95.5, 7453.0], [95.6, 7453.0], [95.7, 7453.0], [95.8, 7453.0], [95.9, 7453.0], [96.0, 7453.0], [96.1, 7453.0], [96.2, 7453.0], [96.3, 7453.0], [96.4, 7453.0], [96.5, 7453.0], [96.6, 7453.0], [96.7, 7453.0], [96.8, 7453.0], [96.9, 7802.0], [97.0, 7802.0], [97.1, 7802.0], [97.2, 7802.0], [97.3, 7802.0], [97.4, 7802.0], [97.5, 7802.0], [97.6, 7802.0], [97.7, 7802.0], [97.8, 7802.0], [97.9, 7802.0], [98.0, 7802.0], [98.1, 7802.0], [98.2, 7802.0], [98.3, 7802.0], [98.4, 7802.0], [98.5, 8373.0], [98.6, 8373.0], [98.7, 8373.0], [98.8, 8373.0], [98.9, 8373.0], [99.0, 8373.0], [99.1, 8373.0], [99.2, 8373.0], [99.3, 8373.0], [99.4, 8373.0], [99.5, 8373.0], [99.6, 8373.0], [99.7, 8373.0], [99.8, 8373.0], [99.9, 8373.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 23.0, "series": [{"data": [[8300.0, 1.0], [600.0, 4.0], [700.0, 4.0], [200.0, 23.0], [800.0, 2.0], [3500.0, 1.0], [900.0, 1.0], [1000.0, 1.0], [4500.0, 3.0], [4400.0, 1.0], [1100.0, 2.0], [300.0, 5.0], [4800.0, 1.0], [1500.0, 1.0], [400.0, 2.0], [100.0, 5.0], [6500.0, 1.0], [7400.0, 1.0], [7800.0, 1.0], [500.0, 3.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 8300.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 11.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 35.0, "series": [{"data": [[0.0, 35.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 17.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 11.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.285714285714286, "minX": 1.60507326E12, "maxY": 9.285714285714286, "series": [{"data": [[1.60507326E12, 9.285714285714286]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60507326E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 234.0, "minX": 1.0, "maxY": 8373.0, "series": [{"data": [[8.0, 7453.0], [4.0, 711.0], [2.0, 8373.0], [1.0, 1568.0], [9.0, 234.0], [10.0, 965.5370370370368], [5.0, 1106.0], [6.0, 7802.0], [3.0, 678.0], [7.0, 724.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.285714285714286, 1282.3492063492063]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 888.8166666666667, "minX": 1.60507326E12, "maxY": 321975.36666666664, "series": [{"data": [[1.60507326E12, 321975.36666666664]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60507326E12, 888.8166666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60507326E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 1282.3492063492063, "minX": 1.60507326E12, "maxY": 1282.3492063492063, "series": [{"data": [[1.60507326E12, 1282.3492063492063]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60507326E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 1280.9206349206347, "minX": 1.60507326E12, "maxY": 1280.9206349206347, "series": [{"data": [[1.60507326E12, 1280.9206349206347]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60507326E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 1.380952380952381, "minX": 1.60507326E12, "maxY": 1.380952380952381, "series": [{"data": [[1.60507326E12, 1.380952380952381]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60507326E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 115.0, "minX": 1.60507326E12, "maxY": 8373.0, "series": [{"data": [[1.60507326E12, 8373.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60507326E12, 115.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60507326E12, 115.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60507326E12, 115.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60507326E12, 115.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60507326E12, 344.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60507326E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 267.0, "minX": 1.0, "maxY": 4970.5, "series": [{"data": [[1.0, 3595.0], [8.0, 805.5], [2.0, 4970.5], [17.0, 342.0], [6.0, 329.0], [14.0, 267.0], [15.0, 276.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 17.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 266.5, "minX": 1.0, "maxY": 4967.5, "series": [{"data": [[1.0, 3589.0], [8.0, 805.0], [2.0, 4967.5], [17.0, 342.0], [6.0, 329.0], [14.0, 266.5], [15.0, 274.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 17.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1.05, "minX": 1.60507326E12, "maxY": 1.05, "series": [{"data": [[1.60507326E12, 1.05]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60507326E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1.05, "minX": 1.60507326E12, "maxY": 1.05, "series": [{"data": [[1.60507326E12, 1.05]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60507326E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.05, "minX": 1.60507326E12, "maxY": 1.05, "series": [{"data": [[1.60507326E12, 1.05]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60507326E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.05, "minX": 1.60507326E12, "maxY": 1.05, "series": [{"data": [[1.60507326E12, 1.05]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60507326E12, "title": "Total Transactions Per Second"}},
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

