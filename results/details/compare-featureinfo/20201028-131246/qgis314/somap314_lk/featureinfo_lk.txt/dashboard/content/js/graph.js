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
        data: {"result": {"minY": 107.0, "minX": 0.0, "maxY": 484.0, "series": [{"data": [[0.0, 107.0], [0.1, 107.0], [0.2, 107.0], [0.3, 107.0], [0.4, 107.0], [0.5, 107.0], [0.6, 115.0], [0.7, 115.0], [0.8, 115.0], [0.9, 115.0], [1.0, 115.0], [1.1, 129.0], [1.2, 129.0], [1.3, 129.0], [1.4, 129.0], [1.5, 129.0], [1.6, 135.0], [1.7, 135.0], [1.8, 135.0], [1.9, 135.0], [2.0, 135.0], [2.1, 140.0], [2.2, 140.0], [2.3, 140.0], [2.4, 140.0], [2.5, 140.0], [2.6, 165.0], [2.7, 165.0], [2.8, 165.0], [2.9, 165.0], [3.0, 165.0], [3.1, 173.0], [3.2, 173.0], [3.3, 173.0], [3.4, 173.0], [3.5, 173.0], [3.6, 177.0], [3.7, 177.0], [3.8, 177.0], [3.9, 177.0], [4.0, 177.0], [4.1, 180.0], [4.2, 180.0], [4.3, 180.0], [4.4, 180.0], [4.5, 180.0], [4.6, 206.0], [4.7, 206.0], [4.8, 206.0], [4.9, 206.0], [5.0, 206.0], [5.1, 207.0], [5.2, 207.0], [5.3, 207.0], [5.4, 207.0], [5.5, 207.0], [5.6, 209.0], [5.7, 209.0], [5.8, 209.0], [5.9, 209.0], [6.0, 209.0], [6.1, 242.0], [6.2, 242.0], [6.3, 242.0], [6.4, 242.0], [6.5, 242.0], [6.6, 251.0], [6.7, 251.0], [6.8, 251.0], [6.9, 251.0], [7.0, 251.0], [7.1, 253.0], [7.2, 253.0], [7.3, 253.0], [7.4, 253.0], [7.5, 253.0], [7.6, 265.0], [7.7, 265.0], [7.8, 265.0], [7.9, 265.0], [8.0, 265.0], [8.1, 266.0], [8.2, 266.0], [8.3, 266.0], [8.4, 266.0], [8.5, 266.0], [8.6, 266.0], [8.7, 266.0], [8.8, 266.0], [8.9, 266.0], [9.0, 266.0], [9.1, 267.0], [9.2, 267.0], [9.3, 267.0], [9.4, 267.0], [9.5, 267.0], [9.6, 269.0], [9.7, 269.0], [9.8, 269.0], [9.9, 269.0], [10.0, 269.0], [10.1, 269.0], [10.2, 269.0], [10.3, 269.0], [10.4, 269.0], [10.5, 269.0], [10.6, 269.0], [10.7, 269.0], [10.8, 269.0], [10.9, 269.0], [11.0, 269.0], [11.1, 269.0], [11.2, 269.0], [11.3, 269.0], [11.4, 269.0], [11.5, 269.0], [11.6, 269.0], [11.7, 270.0], [11.8, 270.0], [11.9, 270.0], [12.0, 270.0], [12.1, 270.0], [12.2, 270.0], [12.3, 270.0], [12.4, 270.0], [12.5, 270.0], [12.6, 270.0], [12.7, 270.0], [12.8, 270.0], [12.9, 270.0], [13.0, 270.0], [13.1, 270.0], [13.2, 271.0], [13.3, 271.0], [13.4, 271.0], [13.5, 271.0], [13.6, 271.0], [13.7, 273.0], [13.8, 273.0], [13.9, 273.0], [14.0, 273.0], [14.1, 273.0], [14.2, 273.0], [14.3, 273.0], [14.4, 273.0], [14.5, 273.0], [14.6, 273.0], [14.7, 274.0], [14.8, 274.0], [14.9, 274.0], [15.0, 274.0], [15.1, 274.0], [15.2, 274.0], [15.3, 274.0], [15.4, 274.0], [15.5, 274.0], [15.6, 274.0], [15.7, 274.0], [15.8, 274.0], [15.9, 274.0], [16.0, 274.0], [16.1, 274.0], [16.2, 274.0], [16.3, 274.0], [16.4, 274.0], [16.5, 274.0], [16.6, 274.0], [16.7, 274.0], [16.8, 274.0], [16.9, 274.0], [17.0, 274.0], [17.1, 274.0], [17.2, 275.0], [17.3, 275.0], [17.4, 275.0], [17.5, 275.0], [17.6, 275.0], [17.7, 275.0], [17.8, 275.0], [17.9, 275.0], [18.0, 275.0], [18.1, 275.0], [18.2, 275.0], [18.3, 275.0], [18.4, 275.0], [18.5, 275.0], [18.6, 275.0], [18.7, 276.0], [18.8, 276.0], [18.9, 276.0], [19.0, 276.0], [19.1, 276.0], [19.2, 276.0], [19.3, 276.0], [19.4, 276.0], [19.5, 276.0], [19.6, 276.0], [19.7, 277.0], [19.8, 277.0], [19.9, 277.0], [20.0, 277.0], [20.1, 277.0], [20.2, 277.0], [20.3, 277.0], [20.4, 277.0], [20.5, 277.0], [20.6, 277.0], [20.7, 277.0], [20.8, 277.0], [20.9, 277.0], [21.0, 277.0], [21.1, 277.0], [21.2, 277.0], [21.3, 277.0], [21.4, 277.0], [21.5, 277.0], [21.6, 277.0], [21.7, 277.0], [21.8, 277.0], [21.9, 277.0], [22.0, 277.0], [22.1, 277.0], [22.2, 277.0], [22.3, 278.0], [22.4, 278.0], [22.5, 278.0], [22.6, 278.0], [22.7, 278.0], [22.8, 278.0], [22.9, 278.0], [23.0, 278.0], [23.1, 278.0], [23.2, 278.0], [23.3, 278.0], [23.4, 278.0], [23.5, 278.0], [23.6, 278.0], [23.7, 278.0], [23.8, 279.0], [23.9, 279.0], [24.0, 279.0], [24.1, 279.0], [24.2, 279.0], [24.3, 279.0], [24.4, 279.0], [24.5, 279.0], [24.6, 279.0], [24.7, 279.0], [24.8, 279.0], [24.9, 279.0], [25.0, 279.0], [25.1, 279.0], [25.2, 279.0], [25.3, 280.0], [25.4, 280.0], [25.5, 280.0], [25.6, 280.0], [25.7, 280.0], [25.8, 280.0], [25.9, 280.0], [26.0, 280.0], [26.1, 280.0], [26.2, 280.0], [26.3, 280.0], [26.4, 280.0], [26.5, 280.0], [26.6, 280.0], [26.7, 280.0], [26.8, 281.0], [26.9, 281.0], [27.0, 281.0], [27.1, 281.0], [27.2, 281.0], [27.3, 281.0], [27.4, 281.0], [27.5, 281.0], [27.6, 281.0], [27.7, 281.0], [27.8, 281.0], [27.9, 281.0], [28.0, 281.0], [28.1, 281.0], [28.2, 281.0], [28.3, 282.0], [28.4, 282.0], [28.5, 282.0], [28.6, 282.0], [28.7, 282.0], [28.8, 282.0], [28.9, 282.0], [29.0, 282.0], [29.1, 282.0], [29.2, 282.0], [29.3, 282.0], [29.4, 282.0], [29.5, 282.0], [29.6, 282.0], [29.7, 282.0], [29.8, 282.0], [29.9, 282.0], [30.0, 282.0], [30.1, 282.0], [30.2, 282.0], [30.3, 282.0], [30.4, 283.0], [30.5, 283.0], [30.6, 283.0], [30.7, 283.0], [30.8, 283.0], [30.9, 283.0], [31.0, 283.0], [31.1, 283.0], [31.2, 283.0], [31.3, 283.0], [31.4, 283.0], [31.5, 283.0], [31.6, 283.0], [31.7, 283.0], [31.8, 283.0], [31.9, 283.0], [32.0, 283.0], [32.1, 283.0], [32.2, 283.0], [32.3, 283.0], [32.4, 284.0], [32.5, 284.0], [32.6, 284.0], [32.7, 284.0], [32.8, 284.0], [32.9, 284.0], [33.0, 284.0], [33.1, 284.0], [33.2, 284.0], [33.3, 284.0], [33.4, 284.0], [33.5, 284.0], [33.6, 284.0], [33.7, 284.0], [33.8, 284.0], [33.9, 285.0], [34.0, 285.0], [34.1, 285.0], [34.2, 285.0], [34.3, 285.0], [34.4, 285.0], [34.5, 285.0], [34.6, 285.0], [34.7, 285.0], [34.8, 285.0], [34.9, 286.0], [35.0, 286.0], [35.1, 286.0], [35.2, 286.0], [35.3, 286.0], [35.4, 286.0], [35.5, 286.0], [35.6, 286.0], [35.7, 286.0], [35.8, 286.0], [35.9, 286.0], [36.0, 286.0], [36.1, 286.0], [36.2, 286.0], [36.3, 286.0], [36.4, 286.0], [36.5, 286.0], [36.6, 286.0], [36.7, 286.0], [36.8, 286.0], [36.9, 286.0], [37.0, 286.0], [37.1, 286.0], [37.2, 286.0], [37.3, 286.0], [37.4, 287.0], [37.5, 287.0], [37.6, 287.0], [37.7, 287.0], [37.8, 287.0], [37.9, 287.0], [38.0, 287.0], [38.1, 287.0], [38.2, 287.0], [38.3, 287.0], [38.4, 288.0], [38.5, 288.0], [38.6, 288.0], [38.7, 288.0], [38.8, 288.0], [38.9, 288.0], [39.0, 288.0], [39.1, 288.0], [39.2, 288.0], [39.3, 288.0], [39.4, 288.0], [39.5, 288.0], [39.6, 288.0], [39.7, 288.0], [39.8, 288.0], [39.9, 289.0], [40.0, 289.0], [40.1, 289.0], [40.2, 289.0], [40.3, 289.0], [40.4, 289.0], [40.5, 289.0], [40.6, 289.0], [40.7, 289.0], [40.8, 289.0], [40.9, 289.0], [41.0, 290.0], [41.1, 290.0], [41.2, 290.0], [41.3, 290.0], [41.4, 290.0], [41.5, 290.0], [41.6, 290.0], [41.7, 290.0], [41.8, 290.0], [41.9, 290.0], [42.0, 290.0], [42.1, 290.0], [42.2, 290.0], [42.3, 290.0], [42.4, 290.0], [42.5, 290.0], [42.6, 290.0], [42.7, 290.0], [42.8, 290.0], [42.9, 290.0], [43.0, 291.0], [43.1, 291.0], [43.2, 291.0], [43.3, 291.0], [43.4, 291.0], [43.5, 291.0], [43.6, 291.0], [43.7, 291.0], [43.8, 291.0], [43.9, 291.0], [44.0, 291.0], [44.1, 291.0], [44.2, 291.0], [44.3, 291.0], [44.4, 291.0], [44.5, 291.0], [44.6, 291.0], [44.7, 291.0], [44.8, 291.0], [44.9, 291.0], [45.0, 291.0], [45.1, 291.0], [45.2, 291.0], [45.3, 291.0], [45.4, 291.0], [45.5, 292.0], [45.6, 292.0], [45.7, 292.0], [45.8, 292.0], [45.9, 292.0], [46.0, 292.0], [46.1, 292.0], [46.2, 292.0], [46.3, 292.0], [46.4, 292.0], [46.5, 292.0], [46.6, 292.0], [46.7, 292.0], [46.8, 292.0], [46.9, 292.0], [47.0, 293.0], [47.1, 293.0], [47.2, 293.0], [47.3, 293.0], [47.4, 293.0], [47.5, 294.0], [47.6, 294.0], [47.7, 294.0], [47.8, 294.0], [47.9, 294.0], [48.0, 296.0], [48.1, 296.0], [48.2, 296.0], [48.3, 296.0], [48.4, 296.0], [48.5, 296.0], [48.6, 296.0], [48.7, 296.0], [48.8, 296.0], [48.9, 296.0], [49.0, 298.0], [49.1, 298.0], [49.2, 298.0], [49.3, 298.0], [49.4, 298.0], [49.5, 300.0], [49.6, 300.0], [49.7, 300.0], [49.8, 300.0], [49.9, 300.0], [50.0, 300.0], [50.1, 303.0], [50.2, 303.0], [50.3, 303.0], [50.4, 303.0], [50.5, 303.0], [50.6, 310.0], [50.7, 310.0], [50.8, 310.0], [50.9, 310.0], [51.0, 310.0], [51.1, 312.0], [51.2, 312.0], [51.3, 312.0], [51.4, 312.0], [51.5, 312.0], [51.6, 324.0], [51.7, 324.0], [51.8, 324.0], [51.9, 324.0], [52.0, 324.0], [52.1, 330.0], [52.2, 330.0], [52.3, 330.0], [52.4, 330.0], [52.5, 330.0], [52.6, 331.0], [52.7, 331.0], [52.8, 331.0], [52.9, 331.0], [53.0, 331.0], [53.1, 332.0], [53.2, 332.0], [53.3, 332.0], [53.4, 332.0], [53.5, 332.0], [53.6, 341.0], [53.7, 341.0], [53.8, 341.0], [53.9, 341.0], [54.0, 341.0], [54.1, 344.0], [54.2, 344.0], [54.3, 344.0], [54.4, 344.0], [54.5, 344.0], [54.6, 347.0], [54.7, 347.0], [54.8, 347.0], [54.9, 347.0], [55.0, 347.0], [55.1, 351.0], [55.2, 351.0], [55.3, 351.0], [55.4, 351.0], [55.5, 351.0], [55.6, 357.0], [55.7, 357.0], [55.8, 357.0], [55.9, 357.0], [56.0, 357.0], [56.1, 361.0], [56.2, 361.0], [56.3, 361.0], [56.4, 361.0], [56.5, 361.0], [56.6, 364.0], [56.7, 364.0], [56.8, 364.0], [56.9, 364.0], [57.0, 364.0], [57.1, 364.0], [57.2, 364.0], [57.3, 364.0], [57.4, 364.0], [57.5, 364.0], [57.6, 365.0], [57.7, 365.0], [57.8, 365.0], [57.9, 365.0], [58.0, 365.0], [58.1, 366.0], [58.2, 366.0], [58.3, 366.0], [58.4, 366.0], [58.5, 366.0], [58.6, 366.0], [58.7, 366.0], [58.8, 366.0], [58.9, 366.0], [59.0, 366.0], [59.1, 367.0], [59.2, 367.0], [59.3, 367.0], [59.4, 367.0], [59.5, 367.0], [59.6, 368.0], [59.7, 368.0], [59.8, 368.0], [59.9, 368.0], [60.0, 368.0], [60.1, 368.0], [60.2, 368.0], [60.3, 368.0], [60.4, 368.0], [60.5, 368.0], [60.6, 368.0], [60.7, 369.0], [60.8, 369.0], [60.9, 369.0], [61.0, 369.0], [61.1, 369.0], [61.2, 369.0], [61.3, 369.0], [61.4, 369.0], [61.5, 369.0], [61.6, 369.0], [61.7, 369.0], [61.8, 369.0], [61.9, 369.0], [62.0, 369.0], [62.1, 369.0], [62.2, 369.0], [62.3, 369.0], [62.4, 369.0], [62.5, 369.0], [62.6, 369.0], [62.7, 370.0], [62.8, 370.0], [62.9, 370.0], [63.0, 370.0], [63.1, 370.0], [63.2, 371.0], [63.3, 371.0], [63.4, 371.0], [63.5, 371.0], [63.6, 371.0], [63.7, 371.0], [63.8, 371.0], [63.9, 371.0], [64.0, 371.0], [64.1, 371.0], [64.2, 373.0], [64.3, 373.0], [64.4, 373.0], [64.5, 373.0], [64.6, 373.0], [64.7, 374.0], [64.8, 374.0], [64.9, 374.0], [65.0, 374.0], [65.1, 374.0], [65.2, 375.0], [65.3, 375.0], [65.4, 375.0], [65.5, 375.0], [65.6, 375.0], [65.7, 375.0], [65.8, 375.0], [65.9, 375.0], [66.0, 375.0], [66.1, 375.0], [66.2, 376.0], [66.3, 376.0], [66.4, 376.0], [66.5, 376.0], [66.6, 376.0], [66.7, 376.0], [66.8, 376.0], [66.9, 376.0], [67.0, 376.0], [67.1, 376.0], [67.2, 378.0], [67.3, 378.0], [67.4, 378.0], [67.5, 378.0], [67.6, 378.0], [67.7, 383.0], [67.8, 383.0], [67.9, 383.0], [68.0, 383.0], [68.1, 383.0], [68.2, 384.0], [68.3, 384.0], [68.4, 384.0], [68.5, 384.0], [68.6, 384.0], [68.7, 385.0], [68.8, 385.0], [68.9, 385.0], [69.0, 385.0], [69.1, 385.0], [69.2, 385.0], [69.3, 385.0], [69.4, 385.0], [69.5, 385.0], [69.6, 385.0], [69.7, 387.0], [69.8, 387.0], [69.9, 387.0], [70.0, 387.0], [70.1, 387.0], [70.2, 387.0], [70.3, 389.0], [70.4, 389.0], [70.5, 389.0], [70.6, 389.0], [70.7, 389.0], [70.8, 390.0], [70.9, 390.0], [71.0, 390.0], [71.1, 390.0], [71.2, 390.0], [71.3, 390.0], [71.4, 390.0], [71.5, 390.0], [71.6, 390.0], [71.7, 390.0], [71.8, 395.0], [71.9, 395.0], [72.0, 395.0], [72.1, 395.0], [72.2, 395.0], [72.3, 396.0], [72.4, 396.0], [72.5, 396.0], [72.6, 396.0], [72.7, 396.0], [72.8, 396.0], [72.9, 396.0], [73.0, 396.0], [73.1, 396.0], [73.2, 396.0], [73.3, 399.0], [73.4, 399.0], [73.5, 399.0], [73.6, 399.0], [73.7, 399.0], [73.8, 403.0], [73.9, 403.0], [74.0, 403.0], [74.1, 403.0], [74.2, 403.0], [74.3, 406.0], [74.4, 406.0], [74.5, 406.0], [74.6, 406.0], [74.7, 406.0], [74.8, 410.0], [74.9, 410.0], [75.0, 410.0], [75.1, 410.0], [75.2, 410.0], [75.3, 411.0], [75.4, 411.0], [75.5, 411.0], [75.6, 411.0], [75.7, 411.0], [75.8, 411.0], [75.9, 411.0], [76.0, 411.0], [76.1, 411.0], [76.2, 411.0], [76.3, 415.0], [76.4, 415.0], [76.5, 415.0], [76.6, 415.0], [76.7, 415.0], [76.8, 425.0], [76.9, 425.0], [77.0, 425.0], [77.1, 425.0], [77.2, 425.0], [77.3, 425.0], [77.4, 425.0], [77.5, 425.0], [77.6, 425.0], [77.7, 425.0], [77.8, 427.0], [77.9, 427.0], [78.0, 427.0], [78.1, 427.0], [78.2, 427.0], [78.3, 428.0], [78.4, 428.0], [78.5, 428.0], [78.6, 428.0], [78.7, 428.0], [78.8, 430.0], [78.9, 430.0], [79.0, 430.0], [79.1, 430.0], [79.2, 430.0], [79.3, 430.0], [79.4, 430.0], [79.5, 430.0], [79.6, 430.0], [79.7, 430.0], [79.8, 431.0], [79.9, 431.0], [80.0, 431.0], [80.1, 431.0], [80.2, 431.0], [80.3, 431.0], [80.4, 438.0], [80.5, 438.0], [80.6, 438.0], [80.7, 438.0], [80.8, 438.0], [80.9, 439.0], [81.0, 439.0], [81.1, 439.0], [81.2, 439.0], [81.3, 439.0], [81.4, 439.0], [81.5, 439.0], [81.6, 439.0], [81.7, 439.0], [81.8, 439.0], [81.9, 440.0], [82.0, 440.0], [82.1, 440.0], [82.2, 440.0], [82.3, 440.0], [82.4, 440.0], [82.5, 440.0], [82.6, 440.0], [82.7, 440.0], [82.8, 440.0], [82.9, 441.0], [83.0, 441.0], [83.1, 441.0], [83.2, 441.0], [83.3, 441.0], [83.4, 443.0], [83.5, 443.0], [83.6, 443.0], [83.7, 443.0], [83.8, 443.0], [83.9, 444.0], [84.0, 444.0], [84.1, 444.0], [84.2, 444.0], [84.3, 444.0], [84.4, 447.0], [84.5, 447.0], [84.6, 447.0], [84.7, 447.0], [84.8, 447.0], [84.9, 447.0], [85.0, 447.0], [85.1, 447.0], [85.2, 447.0], [85.3, 447.0], [85.4, 449.0], [85.5, 449.0], [85.6, 449.0], [85.7, 449.0], [85.8, 449.0], [85.9, 449.0], [86.0, 449.0], [86.1, 449.0], [86.2, 449.0], [86.3, 449.0], [86.4, 451.0], [86.5, 451.0], [86.6, 451.0], [86.7, 451.0], [86.8, 451.0], [86.9, 451.0], [87.0, 451.0], [87.1, 451.0], [87.2, 451.0], [87.3, 451.0], [87.4, 453.0], [87.5, 453.0], [87.6, 453.0], [87.7, 453.0], [87.8, 453.0], [87.9, 454.0], [88.0, 454.0], [88.1, 454.0], [88.2, 454.0], [88.3, 454.0], [88.4, 455.0], [88.5, 455.0], [88.6, 455.0], [88.7, 455.0], [88.8, 455.0], [88.9, 457.0], [89.0, 457.0], [89.1, 457.0], [89.2, 457.0], [89.3, 457.0], [89.4, 457.0], [89.5, 457.0], [89.6, 457.0], [89.7, 457.0], [89.8, 457.0], [89.9, 460.0], [90.0, 460.0], [90.1, 460.0], [90.2, 460.0], [90.3, 460.0], [90.4, 460.0], [90.5, 461.0], [90.6, 461.0], [90.7, 461.0], [90.8, 461.0], [90.9, 461.0], [91.0, 462.0], [91.1, 462.0], [91.2, 462.0], [91.3, 462.0], [91.4, 462.0], [91.5, 462.0], [91.6, 462.0], [91.7, 462.0], [91.8, 462.0], [91.9, 462.0], [92.0, 463.0], [92.1, 463.0], [92.2, 463.0], [92.3, 463.0], [92.4, 463.0], [92.5, 465.0], [92.6, 465.0], [92.7, 465.0], [92.8, 465.0], [92.9, 465.0], [93.0, 468.0], [93.1, 468.0], [93.2, 468.0], [93.3, 468.0], [93.4, 468.0], [93.5, 469.0], [93.6, 469.0], [93.7, 469.0], [93.8, 469.0], [93.9, 469.0], [94.0, 470.0], [94.1, 470.0], [94.2, 470.0], [94.3, 470.0], [94.4, 470.0], [94.5, 470.0], [94.6, 470.0], [94.7, 470.0], [94.8, 470.0], [94.9, 470.0], [95.0, 473.0], [95.1, 473.0], [95.2, 473.0], [95.3, 473.0], [95.4, 473.0], [95.5, 473.0], [95.6, 473.0], [95.7, 473.0], [95.8, 473.0], [95.9, 473.0], [96.0, 474.0], [96.1, 474.0], [96.2, 474.0], [96.3, 474.0], [96.4, 474.0], [96.5, 475.0], [96.6, 475.0], [96.7, 475.0], [96.8, 475.0], [96.9, 475.0], [97.0, 476.0], [97.1, 476.0], [97.2, 476.0], [97.3, 476.0], [97.4, 476.0], [97.5, 478.0], [97.6, 478.0], [97.7, 478.0], [97.8, 478.0], [97.9, 478.0], [98.0, 478.0], [98.1, 478.0], [98.2, 478.0], [98.3, 478.0], [98.4, 478.0], [98.5, 480.0], [98.6, 480.0], [98.7, 480.0], [98.8, 480.0], [98.9, 480.0], [99.0, 483.0], [99.1, 483.0], [99.2, 483.0], [99.3, 483.0], [99.4, 483.0], [99.5, 484.0], [99.6, 484.0], [99.7, 484.0], [99.8, 484.0], [99.9, 484.0], [100.0, 484.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 9.0, "minX": 100.0, "maxY": 89.0, "series": [{"data": [[300.0, 48.0], [100.0, 9.0], [200.0, 89.0], [400.0, 52.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 400.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 198.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 198.0, "series": [{"data": [[0.0, 198.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 4.9E-324, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.444444444444445, "minX": 1.60388724E12, "maxY": 9.444444444444445, "series": [{"data": [[1.60388724E12, 9.444444444444445]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60388724E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 157.75, "minX": 1.0, "maxY": 355.2965116279067, "series": [{"data": [[4.0, 157.75], [8.0, 245.25], [2.0, 286.0], [1.0, 286.0], [9.0, 269.75], [5.0, 199.0], [10.0, 355.2965116279067], [3.0, 194.66666666666666], [6.0, 208.0], [7.0, 231.33333333333334]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.444444444444445, 337.74242424242425]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 1588.9, "minX": 1.60388724E12, "maxY": 3108.5666666666666, "series": [{"data": [[1.60388724E12, 3108.5666666666666]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60388724E12, 1588.9]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60388724E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 337.74242424242425, "minX": 1.60388724E12, "maxY": 337.74242424242425, "series": [{"data": [[1.60388724E12, 337.74242424242425]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60388724E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 337.67676767676767, "minX": 1.60388724E12, "maxY": 337.67676767676767, "series": [{"data": [[1.60388724E12, 337.67676767676767]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60388724E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.24242424242424274, "minX": 1.60388724E12, "maxY": 0.24242424242424274, "series": [{"data": [[1.60388724E12, 0.24242424242424274]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60388724E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 107.0, "minX": 1.60388724E12, "maxY": 484.0, "series": [{"data": [[1.60388724E12, 484.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60388724E12, 113.32799962043762]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60388724E12, 114.76080015182495]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60388724E12, 114.1239998102188]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60388724E12, 107.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60388724E12, 301.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60388724E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 276.0, "minX": 8.0, "maxY": 457.0, "series": [{"data": [[8.0, 280.5], [35.0, 289.0], [36.0, 276.0], [22.0, 334.5], [23.0, 457.0], [24.0, 407.0], [28.0, 368.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 36.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 275.5, "minX": 8.0, "maxY": 456.0, "series": [{"data": [[8.0, 280.5], [35.0, 289.0], [36.0, 275.5], [22.0, 334.5], [23.0, 456.0], [24.0, 407.0], [28.0, 368.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 36.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 3.3, "minX": 1.60388724E12, "maxY": 3.3, "series": [{"data": [[1.60388724E12, 3.3]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60388724E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 3.3, "minX": 1.60388724E12, "maxY": 3.3, "series": [{"data": [[1.60388724E12, 3.3]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60388724E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 3.3, "minX": 1.60388724E12, "maxY": 3.3, "series": [{"data": [[1.60388724E12, 3.3]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60388724E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 3.3, "minX": 1.60388724E12, "maxY": 3.3, "series": [{"data": [[1.60388724E12, 3.3]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60388724E12, "title": "Total Transactions Per Second"}},
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

