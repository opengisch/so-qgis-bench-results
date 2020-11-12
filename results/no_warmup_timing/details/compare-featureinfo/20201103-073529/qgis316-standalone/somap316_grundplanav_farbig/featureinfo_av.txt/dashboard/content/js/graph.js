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
        data: {"result": {"minY": 32.0, "minX": 0.0, "maxY": 567.0, "series": [{"data": [[0.0, 32.0], [0.1, 32.0], [0.2, 32.0], [0.3, 32.0], [0.4, 32.0], [0.5, 32.0], [0.6, 32.0], [0.7, 33.0], [0.8, 33.0], [0.9, 33.0], [1.0, 33.0], [1.1, 33.0], [1.2, 33.0], [1.3, 33.0], [1.4, 36.0], [1.5, 36.0], [1.6, 36.0], [1.7, 36.0], [1.8, 36.0], [1.9, 36.0], [2.0, 36.0], [2.1, 37.0], [2.2, 37.0], [2.3, 37.0], [2.4, 37.0], [2.5, 37.0], [2.6, 37.0], [2.7, 40.0], [2.8, 40.0], [2.9, 40.0], [3.0, 40.0], [3.1, 40.0], [3.2, 40.0], [3.3, 40.0], [3.4, 41.0], [3.5, 41.0], [3.6, 41.0], [3.7, 41.0], [3.8, 41.0], [3.9, 41.0], [4.0, 41.0], [4.1, 46.0], [4.2, 46.0], [4.3, 46.0], [4.4, 46.0], [4.5, 46.0], [4.6, 46.0], [4.7, 56.0], [4.8, 56.0], [4.9, 56.0], [5.0, 56.0], [5.1, 56.0], [5.2, 56.0], [5.3, 56.0], [5.4, 84.0], [5.5, 84.0], [5.6, 84.0], [5.7, 84.0], [5.8, 84.0], [5.9, 84.0], [6.0, 84.0], [6.1, 100.0], [6.2, 100.0], [6.3, 100.0], [6.4, 100.0], [6.5, 100.0], [6.6, 100.0], [6.7, 100.0], [6.8, 103.0], [6.9, 103.0], [7.0, 103.0], [7.1, 103.0], [7.2, 103.0], [7.3, 103.0], [7.4, 134.0], [7.5, 134.0], [7.6, 134.0], [7.7, 134.0], [7.8, 134.0], [7.9, 134.0], [8.0, 134.0], [8.1, 136.0], [8.2, 136.0], [8.3, 136.0], [8.4, 136.0], [8.5, 136.0], [8.6, 136.0], [8.7, 136.0], [8.8, 145.0], [8.9, 145.0], [9.0, 145.0], [9.1, 145.0], [9.2, 145.0], [9.3, 145.0], [9.4, 146.0], [9.5, 146.0], [9.6, 146.0], [9.7, 146.0], [9.8, 146.0], [9.9, 146.0], [10.0, 146.0], [10.1, 147.0], [10.2, 147.0], [10.3, 147.0], [10.4, 147.0], [10.5, 147.0], [10.6, 147.0], [10.7, 147.0], [10.8, 149.0], [10.9, 149.0], [11.0, 149.0], [11.1, 149.0], [11.2, 149.0], [11.3, 149.0], [11.4, 149.0], [11.5, 153.0], [11.6, 153.0], [11.7, 153.0], [11.8, 153.0], [11.9, 153.0], [12.0, 153.0], [12.1, 155.0], [12.2, 155.0], [12.3, 155.0], [12.4, 155.0], [12.5, 155.0], [12.6, 155.0], [12.7, 155.0], [12.8, 178.0], [12.9, 178.0], [13.0, 178.0], [13.1, 178.0], [13.2, 178.0], [13.3, 178.0], [13.4, 178.0], [13.5, 182.0], [13.6, 182.0], [13.7, 182.0], [13.8, 182.0], [13.9, 182.0], [14.0, 182.0], [14.1, 182.0], [14.2, 182.0], [14.3, 182.0], [14.4, 182.0], [14.5, 182.0], [14.6, 182.0], [14.7, 182.0], [14.8, 185.0], [14.9, 185.0], [15.0, 185.0], [15.1, 185.0], [15.2, 185.0], [15.3, 185.0], [15.4, 185.0], [15.5, 189.0], [15.6, 189.0], [15.7, 189.0], [15.8, 189.0], [15.9, 189.0], [16.0, 189.0], [16.1, 189.0], [16.2, 189.0], [16.3, 189.0], [16.4, 189.0], [16.5, 189.0], [16.6, 189.0], [16.7, 189.0], [16.8, 189.0], [16.9, 189.0], [17.0, 189.0], [17.1, 189.0], [17.2, 189.0], [17.3, 189.0], [17.4, 189.0], [17.5, 192.0], [17.6, 192.0], [17.7, 192.0], [17.8, 192.0], [17.9, 192.0], [18.0, 192.0], [18.1, 192.0], [18.2, 192.0], [18.3, 192.0], [18.4, 192.0], [18.5, 192.0], [18.6, 192.0], [18.7, 192.0], [18.8, 194.0], [18.9, 194.0], [19.0, 194.0], [19.1, 194.0], [19.2, 194.0], [19.3, 194.0], [19.4, 194.0], [19.5, 195.0], [19.6, 195.0], [19.7, 195.0], [19.8, 195.0], [19.9, 195.0], [20.0, 195.0], [20.1, 195.0], [20.2, 195.0], [20.3, 195.0], [20.4, 195.0], [20.5, 195.0], [20.6, 195.0], [20.7, 195.0], [20.8, 195.0], [20.9, 196.0], [21.0, 196.0], [21.1, 196.0], [21.2, 196.0], [21.3, 196.0], [21.4, 196.0], [21.5, 196.0], [21.6, 196.0], [21.7, 196.0], [21.8, 196.0], [21.9, 196.0], [22.0, 196.0], [22.1, 196.0], [22.2, 196.0], [22.3, 196.0], [22.4, 196.0], [22.5, 196.0], [22.6, 196.0], [22.7, 196.0], [22.8, 196.0], [22.9, 200.0], [23.0, 200.0], [23.1, 200.0], [23.2, 200.0], [23.3, 200.0], [23.4, 200.0], [23.5, 200.0], [23.6, 200.0], [23.7, 200.0], [23.8, 200.0], [23.9, 200.0], [24.0, 200.0], [24.1, 200.0], [24.2, 200.0], [24.3, 200.0], [24.4, 200.0], [24.5, 200.0], [24.6, 200.0], [24.7, 200.0], [24.8, 200.0], [24.9, 202.0], [25.0, 202.0], [25.1, 202.0], [25.2, 202.0], [25.3, 202.0], [25.4, 202.0], [25.5, 202.0], [25.6, 203.0], [25.7, 203.0], [25.8, 203.0], [25.9, 203.0], [26.0, 203.0], [26.1, 203.0], [26.2, 203.0], [26.3, 203.0], [26.4, 203.0], [26.5, 203.0], [26.6, 203.0], [26.7, 203.0], [26.8, 203.0], [26.9, 209.0], [27.0, 209.0], [27.1, 209.0], [27.2, 209.0], [27.3, 209.0], [27.4, 209.0], [27.5, 209.0], [27.6, 210.0], [27.7, 210.0], [27.8, 210.0], [27.9, 210.0], [28.0, 210.0], [28.1, 210.0], [28.2, 211.0], [28.3, 211.0], [28.4, 211.0], [28.5, 211.0], [28.6, 211.0], [28.7, 211.0], [28.8, 211.0], [28.9, 211.0], [29.0, 211.0], [29.1, 211.0], [29.2, 211.0], [29.3, 211.0], [29.4, 211.0], [29.5, 211.0], [29.6, 211.0], [29.7, 211.0], [29.8, 211.0], [29.9, 211.0], [30.0, 211.0], [30.1, 211.0], [30.2, 211.0], [30.3, 213.0], [30.4, 213.0], [30.5, 213.0], [30.6, 213.0], [30.7, 213.0], [30.8, 213.0], [30.9, 213.0], [31.0, 213.0], [31.1, 213.0], [31.2, 213.0], [31.3, 213.0], [31.4, 213.0], [31.5, 213.0], [31.6, 214.0], [31.7, 214.0], [31.8, 214.0], [31.9, 214.0], [32.0, 214.0], [32.1, 214.0], [32.2, 214.0], [32.3, 214.0], [32.4, 214.0], [32.5, 214.0], [32.6, 214.0], [32.7, 214.0], [32.8, 214.0], [32.9, 215.0], [33.0, 215.0], [33.1, 215.0], [33.2, 215.0], [33.3, 215.0], [33.4, 215.0], [33.5, 215.0], [33.6, 220.0], [33.7, 220.0], [33.8, 220.0], [33.9, 220.0], [34.0, 220.0], [34.1, 220.0], [34.2, 220.0], [34.3, 220.0], [34.4, 220.0], [34.5, 220.0], [34.6, 220.0], [34.7, 220.0], [34.8, 220.0], [34.9, 222.0], [35.0, 222.0], [35.1, 222.0], [35.2, 222.0], [35.3, 222.0], [35.4, 222.0], [35.5, 222.0], [35.6, 224.0], [35.7, 224.0], [35.8, 224.0], [35.9, 224.0], [36.0, 224.0], [36.1, 224.0], [36.2, 224.0], [36.3, 232.0], [36.4, 232.0], [36.5, 232.0], [36.6, 232.0], [36.7, 232.0], [36.8, 232.0], [36.9, 232.0], [37.0, 247.0], [37.1, 247.0], [37.2, 247.0], [37.3, 247.0], [37.4, 247.0], [37.5, 247.0], [37.6, 258.0], [37.7, 258.0], [37.8, 258.0], [37.9, 258.0], [38.0, 258.0], [38.1, 258.0], [38.2, 258.0], [38.3, 261.0], [38.4, 261.0], [38.5, 261.0], [38.6, 261.0], [38.7, 261.0], [38.8, 261.0], [38.9, 261.0], [39.0, 261.0], [39.1, 261.0], [39.2, 261.0], [39.3, 261.0], [39.4, 261.0], [39.5, 261.0], [39.6, 263.0], [39.7, 263.0], [39.8, 263.0], [39.9, 263.0], [40.0, 263.0], [40.1, 263.0], [40.2, 263.0], [40.3, 265.0], [40.4, 265.0], [40.5, 265.0], [40.6, 265.0], [40.7, 265.0], [40.8, 265.0], [40.9, 265.0], [41.0, 269.0], [41.1, 269.0], [41.2, 269.0], [41.3, 269.0], [41.4, 269.0], [41.5, 269.0], [41.6, 269.0], [41.7, 270.0], [41.8, 270.0], [41.9, 270.0], [42.0, 270.0], [42.1, 270.0], [42.2, 270.0], [42.3, 270.0], [42.4, 270.0], [42.5, 270.0], [42.6, 270.0], [42.7, 270.0], [42.8, 270.0], [42.9, 270.0], [43.0, 270.0], [43.1, 270.0], [43.2, 270.0], [43.3, 270.0], [43.4, 270.0], [43.5, 270.0], [43.6, 270.0], [43.7, 270.0], [43.8, 270.0], [43.9, 270.0], [44.0, 270.0], [44.1, 270.0], [44.2, 270.0], [44.3, 271.0], [44.4, 271.0], [44.5, 271.0], [44.6, 271.0], [44.7, 271.0], [44.8, 271.0], [44.9, 271.0], [45.0, 273.0], [45.1, 273.0], [45.2, 273.0], [45.3, 273.0], [45.4, 273.0], [45.5, 273.0], [45.6, 273.0], [45.7, 275.0], [45.8, 275.0], [45.9, 275.0], [46.0, 275.0], [46.1, 275.0], [46.2, 275.0], [46.3, 275.0], [46.4, 276.0], [46.5, 276.0], [46.6, 276.0], [46.7, 276.0], [46.8, 276.0], [46.9, 276.0], [47.0, 276.0], [47.1, 276.0], [47.2, 276.0], [47.3, 276.0], [47.4, 276.0], [47.5, 276.0], [47.6, 276.0], [47.7, 277.0], [47.8, 277.0], [47.9, 277.0], [48.0, 277.0], [48.1, 277.0], [48.2, 277.0], [48.3, 277.0], [48.4, 280.0], [48.5, 280.0], [48.6, 280.0], [48.7, 280.0], [48.8, 280.0], [48.9, 280.0], [49.0, 289.0], [49.1, 289.0], [49.2, 289.0], [49.3, 289.0], [49.4, 289.0], [49.5, 289.0], [49.6, 289.0], [49.7, 289.0], [49.8, 289.0], [49.9, 289.0], [50.0, 289.0], [50.1, 289.0], [50.2, 289.0], [50.3, 289.0], [50.4, 289.0], [50.5, 289.0], [50.6, 289.0], [50.7, 289.0], [50.8, 289.0], [50.9, 289.0], [51.0, 289.0], [51.1, 309.0], [51.2, 309.0], [51.3, 309.0], [51.4, 309.0], [51.5, 309.0], [51.6, 309.0], [51.7, 312.0], [51.8, 312.0], [51.9, 312.0], [52.0, 312.0], [52.1, 312.0], [52.2, 312.0], [52.3, 312.0], [52.4, 313.0], [52.5, 313.0], [52.6, 313.0], [52.7, 313.0], [52.8, 313.0], [52.9, 313.0], [53.0, 313.0], [53.1, 319.0], [53.2, 319.0], [53.3, 319.0], [53.4, 319.0], [53.5, 319.0], [53.6, 319.0], [53.7, 322.0], [53.8, 322.0], [53.9, 322.0], [54.0, 322.0], [54.1, 322.0], [54.2, 322.0], [54.3, 322.0], [54.4, 322.0], [54.5, 322.0], [54.6, 322.0], [54.7, 322.0], [54.8, 322.0], [54.9, 322.0], [55.0, 322.0], [55.1, 323.0], [55.2, 323.0], [55.3, 323.0], [55.4, 323.0], [55.5, 323.0], [55.6, 323.0], [55.7, 323.0], [55.8, 323.0], [55.9, 323.0], [56.0, 323.0], [56.1, 323.0], [56.2, 323.0], [56.3, 323.0], [56.4, 328.0], [56.5, 328.0], [56.6, 328.0], [56.7, 328.0], [56.8, 328.0], [56.9, 328.0], [57.0, 328.0], [57.1, 334.0], [57.2, 334.0], [57.3, 334.0], [57.4, 334.0], [57.5, 334.0], [57.6, 334.0], [57.7, 334.0], [57.8, 339.0], [57.9, 339.0], [58.0, 339.0], [58.1, 339.0], [58.2, 339.0], [58.3, 339.0], [58.4, 340.0], [58.5, 340.0], [58.6, 340.0], [58.7, 340.0], [58.8, 340.0], [58.9, 340.0], [59.0, 340.0], [59.1, 341.0], [59.2, 341.0], [59.3, 341.0], [59.4, 341.0], [59.5, 341.0], [59.6, 341.0], [59.7, 341.0], [59.8, 344.0], [59.9, 344.0], [60.0, 344.0], [60.1, 344.0], [60.2, 344.0], [60.3, 344.0], [60.4, 344.0], [60.5, 344.0], [60.6, 344.0], [60.7, 344.0], [60.8, 344.0], [60.9, 344.0], [61.0, 344.0], [61.1, 345.0], [61.2, 345.0], [61.3, 345.0], [61.4, 345.0], [61.5, 345.0], [61.6, 345.0], [61.7, 345.0], [61.8, 346.0], [61.9, 346.0], [62.0, 346.0], [62.1, 346.0], [62.2, 346.0], [62.3, 346.0], [62.4, 346.0], [62.5, 350.0], [62.6, 350.0], [62.7, 350.0], [62.8, 350.0], [62.9, 350.0], [63.0, 350.0], [63.1, 351.0], [63.2, 351.0], [63.3, 351.0], [63.4, 351.0], [63.5, 351.0], [63.6, 351.0], [63.7, 351.0], [63.8, 351.0], [63.9, 351.0], [64.0, 351.0], [64.1, 351.0], [64.2, 351.0], [64.3, 351.0], [64.4, 351.0], [64.5, 351.0], [64.6, 351.0], [64.7, 351.0], [64.8, 351.0], [64.9, 351.0], [65.0, 351.0], [65.1, 351.0], [65.2, 354.0], [65.3, 354.0], [65.4, 354.0], [65.5, 354.0], [65.6, 354.0], [65.7, 354.0], [65.8, 355.0], [65.9, 355.0], [66.0, 355.0], [66.1, 355.0], [66.2, 355.0], [66.3, 355.0], [66.4, 355.0], [66.5, 355.0], [66.6, 355.0], [66.7, 355.0], [66.8, 355.0], [66.9, 355.0], [67.0, 355.0], [67.1, 355.0], [67.2, 356.0], [67.3, 356.0], [67.4, 356.0], [67.5, 356.0], [67.6, 356.0], [67.7, 356.0], [67.8, 357.0], [67.9, 357.0], [68.0, 357.0], [68.1, 357.0], [68.2, 357.0], [68.3, 357.0], [68.4, 357.0], [68.5, 360.0], [68.6, 360.0], [68.7, 360.0], [68.8, 360.0], [68.9, 360.0], [69.0, 360.0], [69.1, 360.0], [69.2, 360.0], [69.3, 360.0], [69.4, 360.0], [69.5, 360.0], [69.6, 360.0], [69.7, 360.0], [69.8, 362.0], [69.9, 362.0], [70.0, 362.0], [70.1, 362.0], [70.2, 362.0], [70.3, 362.0], [70.4, 362.0], [70.5, 365.0], [70.6, 365.0], [70.7, 365.0], [70.8, 365.0], [70.9, 365.0], [71.0, 365.0], [71.1, 365.0], [71.2, 368.0], [71.3, 368.0], [71.4, 368.0], [71.5, 368.0], [71.6, 368.0], [71.7, 368.0], [71.8, 368.0], [71.9, 369.0], [72.0, 369.0], [72.1, 369.0], [72.2, 369.0], [72.3, 369.0], [72.4, 369.0], [72.5, 380.0], [72.6, 380.0], [72.7, 380.0], [72.8, 380.0], [72.9, 380.0], [73.0, 380.0], [73.1, 380.0], [73.2, 380.0], [73.3, 380.0], [73.4, 380.0], [73.5, 380.0], [73.6, 380.0], [73.7, 380.0], [73.8, 380.0], [73.9, 381.0], [74.0, 381.0], [74.1, 381.0], [74.2, 381.0], [74.3, 381.0], [74.4, 381.0], [74.5, 382.0], [74.6, 382.0], [74.7, 382.0], [74.8, 382.0], [74.9, 382.0], [75.0, 382.0], [75.1, 382.0], [75.2, 383.0], [75.3, 383.0], [75.4, 383.0], [75.5, 383.0], [75.6, 383.0], [75.7, 383.0], [75.8, 383.0], [75.9, 385.0], [76.0, 385.0], [76.1, 385.0], [76.2, 385.0], [76.3, 385.0], [76.4, 385.0], [76.5, 385.0], [76.6, 385.0], [76.7, 385.0], [76.8, 385.0], [76.9, 385.0], [77.0, 385.0], [77.1, 385.0], [77.2, 386.0], [77.3, 386.0], [77.4, 386.0], [77.5, 386.0], [77.6, 386.0], [77.7, 386.0], [77.8, 386.0], [77.9, 386.0], [78.0, 386.0], [78.1, 386.0], [78.2, 386.0], [78.3, 386.0], [78.4, 386.0], [78.5, 386.0], [78.6, 388.0], [78.7, 388.0], [78.8, 388.0], [78.9, 388.0], [79.0, 388.0], [79.1, 388.0], [79.2, 389.0], [79.3, 389.0], [79.4, 389.0], [79.5, 389.0], [79.6, 389.0], [79.7, 389.0], [79.8, 389.0], [79.9, 389.0], [80.0, 389.0], [80.1, 389.0], [80.2, 389.0], [80.3, 389.0], [80.4, 389.0], [80.5, 389.0], [80.6, 391.0], [80.7, 391.0], [80.8, 391.0], [80.9, 391.0], [81.0, 391.0], [81.1, 391.0], [81.2, 391.0], [81.3, 396.0], [81.4, 396.0], [81.5, 396.0], [81.6, 396.0], [81.7, 396.0], [81.8, 396.0], [81.9, 403.0], [82.0, 403.0], [82.1, 403.0], [82.2, 403.0], [82.3, 403.0], [82.4, 403.0], [82.5, 403.0], [82.6, 406.0], [82.7, 406.0], [82.8, 406.0], [82.9, 406.0], [83.0, 406.0], [83.1, 406.0], [83.2, 406.0], [83.3, 406.0], [83.4, 406.0], [83.5, 406.0], [83.6, 406.0], [83.7, 406.0], [83.8, 406.0], [83.9, 406.0], [84.0, 406.0], [84.1, 406.0], [84.2, 406.0], [84.3, 406.0], [84.4, 406.0], [84.5, 406.0], [84.6, 416.0], [84.7, 416.0], [84.8, 416.0], [84.9, 416.0], [85.0, 416.0], [85.1, 416.0], [85.2, 416.0], [85.3, 422.0], [85.4, 422.0], [85.5, 422.0], [85.6, 422.0], [85.7, 422.0], [85.8, 422.0], [85.9, 422.0], [86.0, 423.0], [86.1, 423.0], [86.2, 423.0], [86.3, 423.0], [86.4, 423.0], [86.5, 423.0], [86.6, 425.0], [86.7, 425.0], [86.8, 425.0], [86.9, 425.0], [87.0, 425.0], [87.1, 425.0], [87.2, 425.0], [87.3, 427.0], [87.4, 427.0], [87.5, 427.0], [87.6, 427.0], [87.7, 427.0], [87.8, 427.0], [87.9, 427.0], [88.0, 431.0], [88.1, 431.0], [88.2, 431.0], [88.3, 431.0], [88.4, 431.0], [88.5, 431.0], [88.6, 443.0], [88.7, 443.0], [88.8, 443.0], [88.9, 443.0], [89.0, 443.0], [89.1, 443.0], [89.2, 443.0], [89.3, 452.0], [89.4, 452.0], [89.5, 452.0], [89.6, 452.0], [89.7, 452.0], [89.8, 452.0], [89.9, 452.0], [90.0, 458.0], [90.1, 458.0], [90.2, 458.0], [90.3, 458.0], [90.4, 458.0], [90.5, 458.0], [90.6, 458.0], [90.7, 461.0], [90.8, 461.0], [90.9, 461.0], [91.0, 461.0], [91.1, 461.0], [91.2, 461.0], [91.3, 464.0], [91.4, 464.0], [91.5, 464.0], [91.6, 464.0], [91.7, 464.0], [91.8, 464.0], [91.9, 464.0], [92.0, 473.0], [92.1, 473.0], [92.2, 473.0], [92.3, 473.0], [92.4, 473.0], [92.5, 473.0], [92.6, 473.0], [92.7, 474.0], [92.8, 474.0], [92.9, 474.0], [93.0, 474.0], [93.1, 474.0], [93.2, 474.0], [93.3, 474.0], [93.4, 474.0], [93.5, 474.0], [93.6, 474.0], [93.7, 474.0], [93.8, 474.0], [93.9, 474.0], [94.0, 475.0], [94.1, 475.0], [94.2, 475.0], [94.3, 475.0], [94.4, 475.0], [94.5, 475.0], [94.6, 475.0], [94.7, 478.0], [94.8, 478.0], [94.9, 478.0], [95.0, 478.0], [95.1, 478.0], [95.2, 478.0], [95.3, 478.0], [95.4, 478.0], [95.5, 478.0], [95.6, 478.0], [95.7, 478.0], [95.8, 478.0], [95.9, 478.0], [96.0, 485.0], [96.1, 485.0], [96.2, 485.0], [96.3, 485.0], [96.4, 485.0], [96.5, 485.0], [96.6, 485.0], [96.7, 489.0], [96.8, 489.0], [96.9, 489.0], [97.0, 489.0], [97.1, 489.0], [97.2, 489.0], [97.3, 489.0], [97.4, 490.0], [97.5, 490.0], [97.6, 490.0], [97.7, 490.0], [97.8, 490.0], [97.9, 490.0], [98.0, 490.0], [98.1, 490.0], [98.2, 490.0], [98.3, 490.0], [98.4, 490.0], [98.5, 490.0], [98.6, 490.0], [98.7, 490.0], [98.8, 490.0], [98.9, 490.0], [99.0, 490.0], [99.1, 490.0], [99.2, 490.0], [99.3, 490.0], [99.4, 567.0], [99.5, 567.0], [99.6, 567.0], [99.7, 567.0], [99.8, 567.0], [99.9, 567.0], [100.0, 567.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 46.0, "series": [{"data": [[0.0, 9.0], [300.0, 46.0], [100.0, 25.0], [200.0, 42.0], [400.0, 26.0], [500.0, 1.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 500.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 148.0, "series": [{"data": [[0.0, 148.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 1.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 8.986577181208053, "minX": 1.60438908E12, "maxY": 8.986577181208053, "series": [{"data": [[1.60438908E12, 8.986577181208053]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60438908E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 93.5, "minX": 1.0, "maxY": 329.0707964601768, "series": [{"data": [[4.0, 93.5], [8.0, 239.66666666666666], [2.0, 271.0], [1.0, 269.0], [9.0, 198.75], [5.0, 217.0], [10.0, 329.0707964601768], [3.0, 107.5], [6.0, 221.6], [7.0, 165.5]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[8.986577181208053, 291.5704697986574]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 1300.6333333333334, "minX": 1.60438908E12, "maxY": 4370.033333333334, "series": [{"data": [[1.60438908E12, 4370.033333333334]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60438908E12, 1300.6333333333334]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60438908E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 291.5704697986574, "minX": 1.60438908E12, "maxY": 291.5704697986574, "series": [{"data": [[1.60438908E12, 291.5704697986574]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60438908E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 291.255033557047, "minX": 1.60438908E12, "maxY": 291.255033557047, "series": [{"data": [[1.60438908E12, 291.255033557047]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60438908E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 1.8053691275167787, "minX": 1.60438908E12, "maxY": 1.8053691275167787, "series": [{"data": [[1.60438908E12, 1.8053691275167787]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60438908E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 32.0, "minX": 1.60438908E12, "maxY": 567.0, "series": [{"data": [[1.60438908E12, 567.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60438908E12, 32.34999996423721]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60438908E12, 32.485000014305115]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60438908E12, 32.42499998211861]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60438908E12, 32.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60438908E12, 289.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60438908E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 40.5, "minX": 10.0, "maxY": 406.0, "series": [{"data": [[33.0, 344.0], [17.0, 351.0], [37.0, 203.0], [10.0, 40.5], [23.0, 406.0], [29.0, 340.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 37.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 39.0, "minX": 10.0, "maxY": 406.0, "series": [{"data": [[33.0, 344.0], [17.0, 351.0], [37.0, 203.0], [10.0, 39.0], [23.0, 406.0], [29.0, 339.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 37.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 2.4833333333333334, "minX": 1.60438908E12, "maxY": 2.4833333333333334, "series": [{"data": [[1.60438908E12, 2.4833333333333334]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60438908E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 2.4833333333333334, "minX": 1.60438908E12, "maxY": 2.4833333333333334, "series": [{"data": [[1.60438908E12, 2.4833333333333334]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60438908E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 2.4833333333333334, "minX": 1.60438908E12, "maxY": 2.4833333333333334, "series": [{"data": [[1.60438908E12, 2.4833333333333334]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60438908E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 2.4833333333333334, "minX": 1.60438908E12, "maxY": 2.4833333333333334, "series": [{"data": [[1.60438908E12, 2.4833333333333334]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60438908E12, "title": "Total Transactions Per Second"}},
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

