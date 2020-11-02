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
        data: {"result": {"minY": 96.0, "minX": 0.0, "maxY": 723.0, "series": [{"data": [[0.0, 96.0], [0.1, 96.0], [0.2, 96.0], [0.3, 96.0], [0.4, 96.0], [0.5, 96.0], [0.6, 96.0], [0.7, 157.0], [0.8, 157.0], [0.9, 157.0], [1.0, 157.0], [1.1, 157.0], [1.2, 157.0], [1.3, 157.0], [1.4, 173.0], [1.5, 173.0], [1.6, 173.0], [1.7, 173.0], [1.8, 173.0], [1.9, 173.0], [2.0, 173.0], [2.1, 174.0], [2.2, 174.0], [2.3, 174.0], [2.4, 174.0], [2.5, 174.0], [2.6, 174.0], [2.7, 177.0], [2.8, 177.0], [2.9, 177.0], [3.0, 177.0], [3.1, 177.0], [3.2, 177.0], [3.3, 177.0], [3.4, 177.0], [3.5, 177.0], [3.6, 177.0], [3.7, 177.0], [3.8, 177.0], [3.9, 177.0], [4.0, 177.0], [4.1, 179.0], [4.2, 179.0], [4.3, 179.0], [4.4, 179.0], [4.5, 179.0], [4.6, 179.0], [4.7, 180.0], [4.8, 180.0], [4.9, 180.0], [5.0, 180.0], [5.1, 180.0], [5.2, 180.0], [5.3, 180.0], [5.4, 182.0], [5.5, 182.0], [5.6, 182.0], [5.7, 182.0], [5.8, 182.0], [5.9, 182.0], [6.0, 182.0], [6.1, 183.0], [6.2, 183.0], [6.3, 183.0], [6.4, 183.0], [6.5, 183.0], [6.6, 183.0], [6.7, 183.0], [6.8, 183.0], [6.9, 183.0], [7.0, 183.0], [7.1, 183.0], [7.2, 183.0], [7.3, 183.0], [7.4, 183.0], [7.5, 183.0], [7.6, 183.0], [7.7, 183.0], [7.8, 183.0], [7.9, 183.0], [8.0, 183.0], [8.1, 184.0], [8.2, 184.0], [8.3, 184.0], [8.4, 184.0], [8.5, 184.0], [8.6, 184.0], [8.7, 184.0], [8.8, 185.0], [8.9, 185.0], [9.0, 185.0], [9.1, 185.0], [9.2, 185.0], [9.3, 185.0], [9.4, 185.0], [9.5, 185.0], [9.6, 185.0], [9.7, 185.0], [9.8, 185.0], [9.9, 185.0], [10.0, 185.0], [10.1, 188.0], [10.2, 188.0], [10.3, 188.0], [10.4, 188.0], [10.5, 188.0], [10.6, 188.0], [10.7, 188.0], [10.8, 189.0], [10.9, 189.0], [11.0, 189.0], [11.1, 189.0], [11.2, 189.0], [11.3, 189.0], [11.4, 189.0], [11.5, 190.0], [11.6, 190.0], [11.7, 190.0], [11.8, 190.0], [11.9, 190.0], [12.0, 190.0], [12.1, 190.0], [12.2, 190.0], [12.3, 190.0], [12.4, 190.0], [12.5, 190.0], [12.6, 190.0], [12.7, 190.0], [12.8, 191.0], [12.9, 191.0], [13.0, 191.0], [13.1, 191.0], [13.2, 191.0], [13.3, 191.0], [13.4, 191.0], [13.5, 192.0], [13.6, 192.0], [13.7, 192.0], [13.8, 192.0], [13.9, 192.0], [14.0, 192.0], [14.1, 193.0], [14.2, 193.0], [14.3, 193.0], [14.4, 193.0], [14.5, 193.0], [14.6, 193.0], [14.7, 193.0], [14.8, 194.0], [14.9, 194.0], [15.0, 194.0], [15.1, 194.0], [15.2, 194.0], [15.3, 194.0], [15.4, 194.0], [15.5, 194.0], [15.6, 194.0], [15.7, 194.0], [15.8, 194.0], [15.9, 194.0], [16.0, 194.0], [16.1, 194.0], [16.2, 197.0], [16.3, 197.0], [16.4, 197.0], [16.5, 197.0], [16.6, 197.0], [16.7, 197.0], [16.8, 198.0], [16.9, 198.0], [17.0, 198.0], [17.1, 198.0], [17.2, 198.0], [17.3, 198.0], [17.4, 198.0], [17.5, 198.0], [17.6, 198.0], [17.7, 198.0], [17.8, 198.0], [17.9, 198.0], [18.0, 198.0], [18.1, 198.0], [18.2, 200.0], [18.3, 200.0], [18.4, 200.0], [18.5, 200.0], [18.6, 200.0], [18.7, 200.0], [18.8, 202.0], [18.9, 202.0], [19.0, 202.0], [19.1, 202.0], [19.2, 202.0], [19.3, 202.0], [19.4, 202.0], [19.5, 239.0], [19.6, 239.0], [19.7, 239.0], [19.8, 239.0], [19.9, 239.0], [20.0, 239.0], [20.1, 239.0], [20.2, 241.0], [20.3, 241.0], [20.4, 241.0], [20.5, 241.0], [20.6, 241.0], [20.7, 241.0], [20.8, 241.0], [20.9, 244.0], [21.0, 244.0], [21.1, 244.0], [21.2, 244.0], [21.3, 244.0], [21.4, 244.0], [21.5, 244.0], [21.6, 244.0], [21.7, 244.0], [21.8, 244.0], [21.9, 244.0], [22.0, 244.0], [22.1, 244.0], [22.2, 244.0], [22.3, 244.0], [22.4, 244.0], [22.5, 244.0], [22.6, 244.0], [22.7, 244.0], [22.8, 244.0], [22.9, 245.0], [23.0, 245.0], [23.1, 245.0], [23.2, 245.0], [23.3, 245.0], [23.4, 245.0], [23.5, 245.0], [23.6, 245.0], [23.7, 245.0], [23.8, 245.0], [23.9, 245.0], [24.0, 245.0], [24.1, 245.0], [24.2, 246.0], [24.3, 246.0], [24.4, 246.0], [24.5, 246.0], [24.6, 246.0], [24.7, 246.0], [24.8, 246.0], [24.9, 246.0], [25.0, 246.0], [25.1, 246.0], [25.2, 246.0], [25.3, 246.0], [25.4, 246.0], [25.5, 246.0], [25.6, 247.0], [25.7, 247.0], [25.8, 247.0], [25.9, 247.0], [26.0, 247.0], [26.1, 247.0], [26.2, 247.0], [26.3, 247.0], [26.4, 247.0], [26.5, 247.0], [26.6, 247.0], [26.7, 247.0], [26.8, 247.0], [26.9, 247.0], [27.0, 247.0], [27.1, 247.0], [27.2, 247.0], [27.3, 247.0], [27.4, 247.0], [27.5, 247.0], [27.6, 248.0], [27.7, 248.0], [27.8, 248.0], [27.9, 248.0], [28.0, 248.0], [28.1, 248.0], [28.2, 248.0], [28.3, 248.0], [28.4, 248.0], [28.5, 248.0], [28.6, 248.0], [28.7, 248.0], [28.8, 248.0], [28.9, 249.0], [29.0, 249.0], [29.1, 249.0], [29.2, 249.0], [29.3, 249.0], [29.4, 249.0], [29.5, 249.0], [29.6, 249.0], [29.7, 249.0], [29.8, 249.0], [29.9, 249.0], [30.0, 249.0], [30.1, 249.0], [30.2, 249.0], [30.3, 250.0], [30.4, 250.0], [30.5, 250.0], [30.6, 250.0], [30.7, 250.0], [30.8, 250.0], [30.9, 250.0], [31.0, 250.0], [31.1, 250.0], [31.2, 250.0], [31.3, 250.0], [31.4, 250.0], [31.5, 250.0], [31.6, 251.0], [31.7, 251.0], [31.8, 251.0], [31.9, 251.0], [32.0, 251.0], [32.1, 251.0], [32.2, 251.0], [32.3, 251.0], [32.4, 251.0], [32.5, 251.0], [32.6, 251.0], [32.7, 251.0], [32.8, 251.0], [32.9, 251.0], [33.0, 251.0], [33.1, 251.0], [33.2, 251.0], [33.3, 251.0], [33.4, 251.0], [33.5, 251.0], [33.6, 251.0], [33.7, 251.0], [33.8, 251.0], [33.9, 251.0], [34.0, 251.0], [34.1, 251.0], [34.2, 251.0], [34.3, 254.0], [34.4, 254.0], [34.5, 254.0], [34.6, 254.0], [34.7, 254.0], [34.8, 254.0], [34.9, 256.0], [35.0, 256.0], [35.1, 256.0], [35.2, 256.0], [35.3, 256.0], [35.4, 256.0], [35.5, 256.0], [35.6, 257.0], [35.7, 257.0], [35.8, 257.0], [35.9, 257.0], [36.0, 257.0], [36.1, 257.0], [36.2, 257.0], [36.3, 257.0], [36.4, 257.0], [36.5, 257.0], [36.6, 257.0], [36.7, 257.0], [36.8, 257.0], [36.9, 257.0], [37.0, 262.0], [37.1, 262.0], [37.2, 262.0], [37.3, 262.0], [37.4, 262.0], [37.5, 262.0], [37.6, 262.0], [37.7, 262.0], [37.8, 262.0], [37.9, 262.0], [38.0, 262.0], [38.1, 262.0], [38.2, 262.0], [38.3, 263.0], [38.4, 263.0], [38.5, 263.0], [38.6, 263.0], [38.7, 263.0], [38.8, 263.0], [38.9, 263.0], [39.0, 265.0], [39.1, 265.0], [39.2, 265.0], [39.3, 265.0], [39.4, 265.0], [39.5, 265.0], [39.6, 266.0], [39.7, 266.0], [39.8, 266.0], [39.9, 266.0], [40.0, 266.0], [40.1, 266.0], [40.2, 266.0], [40.3, 267.0], [40.4, 267.0], [40.5, 267.0], [40.6, 267.0], [40.7, 267.0], [40.8, 267.0], [40.9, 267.0], [41.0, 268.0], [41.1, 268.0], [41.2, 268.0], [41.3, 268.0], [41.4, 268.0], [41.5, 268.0], [41.6, 268.0], [41.7, 273.0], [41.8, 273.0], [41.9, 273.0], [42.0, 273.0], [42.1, 273.0], [42.2, 273.0], [42.3, 273.0], [42.4, 273.0], [42.5, 273.0], [42.6, 273.0], [42.7, 273.0], [42.8, 273.0], [42.9, 273.0], [43.0, 277.0], [43.1, 277.0], [43.2, 277.0], [43.3, 277.0], [43.4, 277.0], [43.5, 277.0], [43.6, 277.0], [43.7, 284.0], [43.8, 284.0], [43.9, 284.0], [44.0, 284.0], [44.1, 284.0], [44.2, 284.0], [44.3, 303.0], [44.4, 303.0], [44.5, 303.0], [44.6, 303.0], [44.7, 303.0], [44.8, 303.0], [44.9, 303.0], [45.0, 304.0], [45.1, 304.0], [45.2, 304.0], [45.3, 304.0], [45.4, 304.0], [45.5, 304.0], [45.6, 304.0], [45.7, 311.0], [45.8, 311.0], [45.9, 311.0], [46.0, 311.0], [46.1, 311.0], [46.2, 311.0], [46.3, 311.0], [46.4, 311.0], [46.5, 311.0], [46.6, 311.0], [46.7, 311.0], [46.8, 311.0], [46.9, 311.0], [47.0, 311.0], [47.1, 311.0], [47.2, 311.0], [47.3, 311.0], [47.4, 311.0], [47.5, 311.0], [47.6, 311.0], [47.7, 311.0], [47.8, 311.0], [47.9, 311.0], [48.0, 311.0], [48.1, 311.0], [48.2, 311.0], [48.3, 311.0], [48.4, 314.0], [48.5, 314.0], [48.6, 314.0], [48.7, 314.0], [48.8, 314.0], [48.9, 314.0], [49.0, 316.0], [49.1, 316.0], [49.2, 316.0], [49.3, 316.0], [49.4, 316.0], [49.5, 316.0], [49.6, 316.0], [49.7, 316.0], [49.8, 316.0], [49.9, 316.0], [50.0, 316.0], [50.1, 316.0], [50.2, 316.0], [50.3, 316.0], [50.4, 316.0], [50.5, 316.0], [50.6, 316.0], [50.7, 316.0], [50.8, 316.0], [50.9, 316.0], [51.0, 316.0], [51.1, 316.0], [51.2, 316.0], [51.3, 316.0], [51.4, 316.0], [51.5, 316.0], [51.6, 316.0], [51.7, 318.0], [51.8, 318.0], [51.9, 318.0], [52.0, 318.0], [52.1, 318.0], [52.2, 318.0], [52.3, 318.0], [52.4, 320.0], [52.5, 320.0], [52.6, 320.0], [52.7, 320.0], [52.8, 320.0], [52.9, 320.0], [53.0, 320.0], [53.1, 320.0], [53.2, 320.0], [53.3, 320.0], [53.4, 320.0], [53.5, 320.0], [53.6, 320.0], [53.7, 321.0], [53.8, 321.0], [53.9, 321.0], [54.0, 321.0], [54.1, 321.0], [54.2, 321.0], [54.3, 321.0], [54.4, 321.0], [54.5, 321.0], [54.6, 321.0], [54.7, 321.0], [54.8, 321.0], [54.9, 321.0], [55.0, 321.0], [55.1, 321.0], [55.2, 321.0], [55.3, 321.0], [55.4, 321.0], [55.5, 321.0], [55.6, 321.0], [55.7, 321.0], [55.8, 322.0], [55.9, 322.0], [56.0, 322.0], [56.1, 322.0], [56.2, 322.0], [56.3, 322.0], [56.4, 323.0], [56.5, 323.0], [56.6, 323.0], [56.7, 323.0], [56.8, 323.0], [56.9, 323.0], [57.0, 323.0], [57.1, 324.0], [57.2, 324.0], [57.3, 324.0], [57.4, 324.0], [57.5, 324.0], [57.6, 324.0], [57.7, 324.0], [57.8, 324.0], [57.9, 324.0], [58.0, 324.0], [58.1, 324.0], [58.2, 324.0], [58.3, 324.0], [58.4, 325.0], [58.5, 325.0], [58.6, 325.0], [58.7, 325.0], [58.8, 325.0], [58.9, 325.0], [59.0, 325.0], [59.1, 327.0], [59.2, 327.0], [59.3, 327.0], [59.4, 327.0], [59.5, 327.0], [59.6, 327.0], [59.7, 327.0], [59.8, 327.0], [59.9, 327.0], [60.0, 327.0], [60.1, 327.0], [60.2, 327.0], [60.3, 327.0], [60.4, 327.0], [60.5, 328.0], [60.6, 328.0], [60.7, 328.0], [60.8, 328.0], [60.9, 328.0], [61.0, 328.0], [61.1, 329.0], [61.2, 329.0], [61.3, 329.0], [61.4, 329.0], [61.5, 329.0], [61.6, 329.0], [61.7, 329.0], [61.8, 333.0], [61.9, 333.0], [62.0, 333.0], [62.1, 333.0], [62.2, 333.0], [62.3, 333.0], [62.4, 333.0], [62.5, 333.0], [62.6, 333.0], [62.7, 333.0], [62.8, 333.0], [62.9, 333.0], [63.0, 333.0], [63.1, 334.0], [63.2, 334.0], [63.3, 334.0], [63.4, 334.0], [63.5, 334.0], [63.6, 334.0], [63.7, 334.0], [63.8, 335.0], [63.9, 335.0], [64.0, 335.0], [64.1, 335.0], [64.2, 335.0], [64.3, 335.0], [64.4, 335.0], [64.5, 336.0], [64.6, 336.0], [64.7, 336.0], [64.8, 336.0], [64.9, 336.0], [65.0, 336.0], [65.1, 336.0], [65.2, 336.0], [65.3, 336.0], [65.4, 336.0], [65.5, 336.0], [65.6, 336.0], [65.7, 336.0], [65.8, 337.0], [65.9, 337.0], [66.0, 337.0], [66.1, 337.0], [66.2, 337.0], [66.3, 337.0], [66.4, 337.0], [66.5, 338.0], [66.6, 338.0], [66.7, 338.0], [66.8, 338.0], [66.9, 338.0], [67.0, 338.0], [67.1, 338.0], [67.2, 338.0], [67.3, 338.0], [67.4, 338.0], [67.5, 338.0], [67.6, 338.0], [67.7, 338.0], [67.8, 340.0], [67.9, 340.0], [68.0, 340.0], [68.1, 340.0], [68.2, 340.0], [68.3, 340.0], [68.4, 340.0], [68.5, 340.0], [68.6, 340.0], [68.7, 340.0], [68.8, 340.0], [68.9, 340.0], [69.0, 340.0], [69.1, 340.0], [69.2, 341.0], [69.3, 341.0], [69.4, 341.0], [69.5, 341.0], [69.6, 341.0], [69.7, 341.0], [69.8, 342.0], [69.9, 342.0], [70.0, 342.0], [70.1, 342.0], [70.2, 342.0], [70.3, 342.0], [70.4, 342.0], [70.5, 342.0], [70.6, 342.0], [70.7, 342.0], [70.8, 342.0], [70.9, 342.0], [71.0, 342.0], [71.1, 342.0], [71.2, 342.0], [71.3, 342.0], [71.4, 342.0], [71.5, 342.0], [71.6, 342.0], [71.7, 342.0], [71.8, 342.0], [71.9, 343.0], [72.0, 343.0], [72.1, 343.0], [72.2, 343.0], [72.3, 343.0], [72.4, 343.0], [72.5, 343.0], [72.6, 343.0], [72.7, 343.0], [72.8, 343.0], [72.9, 343.0], [73.0, 343.0], [73.1, 343.0], [73.2, 344.0], [73.3, 344.0], [73.4, 344.0], [73.5, 344.0], [73.6, 344.0], [73.7, 344.0], [73.8, 344.0], [73.9, 345.0], [74.0, 345.0], [74.1, 345.0], [74.2, 345.0], [74.3, 345.0], [74.4, 345.0], [74.5, 346.0], [74.6, 346.0], [74.7, 346.0], [74.8, 346.0], [74.9, 346.0], [75.0, 346.0], [75.1, 346.0], [75.2, 348.0], [75.3, 348.0], [75.4, 348.0], [75.5, 348.0], [75.6, 348.0], [75.7, 348.0], [75.8, 348.0], [75.9, 369.0], [76.0, 369.0], [76.1, 369.0], [76.2, 369.0], [76.3, 369.0], [76.4, 369.0], [76.5, 369.0], [76.6, 370.0], [76.7, 370.0], [76.8, 370.0], [76.9, 370.0], [77.0, 370.0], [77.1, 370.0], [77.2, 373.0], [77.3, 373.0], [77.4, 373.0], [77.5, 373.0], [77.6, 373.0], [77.7, 373.0], [77.8, 373.0], [77.9, 375.0], [78.0, 375.0], [78.1, 375.0], [78.2, 375.0], [78.3, 375.0], [78.4, 375.0], [78.5, 375.0], [78.6, 379.0], [78.7, 379.0], [78.8, 379.0], [78.9, 379.0], [79.0, 379.0], [79.1, 379.0], [79.2, 380.0], [79.3, 380.0], [79.4, 380.0], [79.5, 380.0], [79.6, 380.0], [79.7, 380.0], [79.8, 380.0], [79.9, 380.0], [80.0, 380.0], [80.1, 380.0], [80.2, 380.0], [80.3, 380.0], [80.4, 380.0], [80.5, 380.0], [80.6, 381.0], [80.7, 381.0], [80.8, 381.0], [80.9, 381.0], [81.0, 381.0], [81.1, 381.0], [81.2, 381.0], [81.3, 383.0], [81.4, 383.0], [81.5, 383.0], [81.6, 383.0], [81.7, 383.0], [81.8, 383.0], [81.9, 383.0], [82.0, 383.0], [82.1, 383.0], [82.2, 383.0], [82.3, 383.0], [82.4, 383.0], [82.5, 383.0], [82.6, 384.0], [82.7, 384.0], [82.8, 384.0], [82.9, 384.0], [83.0, 384.0], [83.1, 384.0], [83.2, 384.0], [83.3, 385.0], [83.4, 385.0], [83.5, 385.0], [83.6, 385.0], [83.7, 385.0], [83.8, 385.0], [83.9, 386.0], [84.0, 386.0], [84.1, 386.0], [84.2, 386.0], [84.3, 386.0], [84.4, 386.0], [84.5, 386.0], [84.6, 387.0], [84.7, 387.0], [84.8, 387.0], [84.9, 387.0], [85.0, 387.0], [85.1, 387.0], [85.2, 387.0], [85.3, 388.0], [85.4, 388.0], [85.5, 388.0], [85.6, 388.0], [85.7, 388.0], [85.8, 388.0], [85.9, 388.0], [86.0, 389.0], [86.1, 389.0], [86.2, 389.0], [86.3, 389.0], [86.4, 389.0], [86.5, 389.0], [86.6, 390.0], [86.7, 390.0], [86.8, 390.0], [86.9, 390.0], [87.0, 390.0], [87.1, 390.0], [87.2, 390.0], [87.3, 390.0], [87.4, 390.0], [87.5, 390.0], [87.6, 390.0], [87.7, 390.0], [87.8, 390.0], [87.9, 390.0], [88.0, 392.0], [88.1, 392.0], [88.2, 392.0], [88.3, 392.0], [88.4, 392.0], [88.5, 392.0], [88.6, 393.0], [88.7, 393.0], [88.8, 393.0], [88.9, 393.0], [89.0, 393.0], [89.1, 393.0], [89.2, 393.0], [89.3, 394.0], [89.4, 394.0], [89.5, 394.0], [89.6, 394.0], [89.7, 394.0], [89.8, 394.0], [89.9, 394.0], [90.0, 394.0], [90.1, 394.0], [90.2, 394.0], [90.3, 394.0], [90.4, 394.0], [90.5, 394.0], [90.6, 394.0], [90.7, 399.0], [90.8, 399.0], [90.9, 399.0], [91.0, 399.0], [91.1, 399.0], [91.2, 399.0], [91.3, 399.0], [91.4, 399.0], [91.5, 399.0], [91.6, 399.0], [91.7, 399.0], [91.8, 399.0], [91.9, 399.0], [92.0, 406.0], [92.1, 406.0], [92.2, 406.0], [92.3, 406.0], [92.4, 406.0], [92.5, 406.0], [92.6, 406.0], [92.7, 418.0], [92.8, 418.0], [92.9, 418.0], [93.0, 418.0], [93.1, 418.0], [93.2, 418.0], [93.3, 436.0], [93.4, 436.0], [93.5, 436.0], [93.6, 436.0], [93.7, 436.0], [93.8, 436.0], [93.9, 436.0], [94.0, 441.0], [94.1, 441.0], [94.2, 441.0], [94.3, 441.0], [94.4, 441.0], [94.5, 441.0], [94.6, 441.0], [94.7, 443.0], [94.8, 443.0], [94.9, 443.0], [95.0, 443.0], [95.1, 443.0], [95.2, 443.0], [95.3, 443.0], [95.4, 443.0], [95.5, 443.0], [95.6, 443.0], [95.7, 443.0], [95.8, 443.0], [95.9, 443.0], [96.0, 461.0], [96.1, 461.0], [96.2, 461.0], [96.3, 461.0], [96.4, 461.0], [96.5, 461.0], [96.6, 461.0], [96.7, 502.0], [96.8, 502.0], [96.9, 502.0], [97.0, 502.0], [97.1, 502.0], [97.2, 502.0], [97.3, 502.0], [97.4, 588.0], [97.5, 588.0], [97.6, 588.0], [97.7, 588.0], [97.8, 588.0], [97.9, 588.0], [98.0, 680.0], [98.1, 680.0], [98.2, 680.0], [98.3, 680.0], [98.4, 680.0], [98.5, 680.0], [98.6, 680.0], [98.7, 719.0], [98.8, 719.0], [98.9, 719.0], [99.0, 719.0], [99.1, 719.0], [99.2, 719.0], [99.3, 719.0], [99.4, 723.0], [99.5, 723.0], [99.6, 723.0], [99.7, 723.0], [99.8, 723.0], [99.9, 723.0], [100.0, 723.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 71.0, "series": [{"data": [[0.0, 1.0], [600.0, 1.0], [300.0, 71.0], [700.0, 2.0], [400.0, 7.0], [200.0, 39.0], [100.0, 26.0], [500.0, 2.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 700.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 5.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 144.0, "series": [{"data": [[0.0, 144.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 5.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 1.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.671140939597318, "minX": 1.60421904E12, "maxY": 9.671140939597318, "series": [{"data": [[1.60421904E12, 9.671140939597318]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60421904E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 250.0, "minX": 1.0, "maxY": 590.8, "series": [{"data": [[8.0, 316.0], [4.0, 323.0], [2.0, 263.0], [1.0, 262.0], [9.0, 590.8], [10.0, 297.43382352941165], [5.0, 254.0], [6.0, 250.0], [3.0, 325.0], [7.0, 251.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.671140939597318, 306.3691275167785]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 1265.8666666666666, "minX": 1.60421904E12, "maxY": 4616.033333333334, "series": [{"data": [[1.60421904E12, 4616.033333333334]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60421904E12, 1265.8666666666666]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60421904E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 306.3691275167785, "minX": 1.60421904E12, "maxY": 306.3691275167785, "series": [{"data": [[1.60421904E12, 306.3691275167785]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60421904E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 306.2147651006711, "minX": 1.60421904E12, "maxY": 306.2147651006711, "series": [{"data": [[1.60421904E12, 306.2147651006711]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60421904E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.5302013422818795, "minX": 1.60421904E12, "maxY": 0.5302013422818795, "series": [{"data": [[1.60421904E12, 0.5302013422818795]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60421904E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 96.0, "minX": 1.60421904E12, "maxY": 723.0, "series": [{"data": [[1.60421904E12, 723.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60421904E12, 117.34999781847]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60421904E12, 125.585000872612]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60421904E12, 121.924998909235]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60421904E12, 96.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60421904E12, 316.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60421904E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 262.5, "minX": 12.0, "maxY": 327.0, "series": [{"data": [[33.0, 324.0], [34.0, 327.0], [40.0, 270.5], [12.0, 262.5], [30.0, 316.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 40.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 262.5, "minX": 12.0, "maxY": 327.0, "series": [{"data": [[33.0, 324.0], [34.0, 327.0], [40.0, 270.5], [12.0, 262.5], [30.0, 315.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 40.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 2.4833333333333334, "minX": 1.60421904E12, "maxY": 2.4833333333333334, "series": [{"data": [[1.60421904E12, 2.4833333333333334]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60421904E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 2.4833333333333334, "minX": 1.60421904E12, "maxY": 2.4833333333333334, "series": [{"data": [[1.60421904E12, 2.4833333333333334]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60421904E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 2.4833333333333334, "minX": 1.60421904E12, "maxY": 2.4833333333333334, "series": [{"data": [[1.60421904E12, 2.4833333333333334]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60421904E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 2.4833333333333334, "minX": 1.60421904E12, "maxY": 2.4833333333333334, "series": [{"data": [[1.60421904E12, 2.4833333333333334]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60421904E12, "title": "Total Transactions Per Second"}},
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

