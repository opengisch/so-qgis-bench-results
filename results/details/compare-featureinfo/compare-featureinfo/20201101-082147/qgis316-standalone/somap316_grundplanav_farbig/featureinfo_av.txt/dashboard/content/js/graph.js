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
        data: {"result": {"minY": 173.0, "minX": 0.0, "maxY": 813.0, "series": [{"data": [[0.0, 173.0], [0.1, 173.0], [0.2, 173.0], [0.3, 173.0], [0.4, 173.0], [0.5, 173.0], [0.6, 173.0], [0.7, 177.0], [0.8, 177.0], [0.9, 177.0], [1.0, 177.0], [1.1, 177.0], [1.2, 177.0], [1.3, 177.0], [1.4, 177.0], [1.5, 177.0], [1.6, 177.0], [1.7, 177.0], [1.8, 177.0], [1.9, 177.0], [2.0, 177.0], [2.1, 177.0], [2.2, 177.0], [2.3, 177.0], [2.4, 177.0], [2.5, 177.0], [2.6, 177.0], [2.7, 177.0], [2.8, 177.0], [2.9, 177.0], [3.0, 177.0], [3.1, 177.0], [3.2, 177.0], [3.3, 177.0], [3.4, 178.0], [3.5, 178.0], [3.6, 178.0], [3.7, 178.0], [3.8, 178.0], [3.9, 178.0], [4.0, 178.0], [4.1, 178.0], [4.2, 178.0], [4.3, 178.0], [4.4, 178.0], [4.5, 178.0], [4.6, 178.0], [4.7, 179.0], [4.8, 179.0], [4.9, 179.0], [5.0, 179.0], [5.1, 179.0], [5.2, 179.0], [5.3, 179.0], [5.4, 180.0], [5.5, 180.0], [5.6, 180.0], [5.7, 180.0], [5.8, 180.0], [5.9, 180.0], [6.0, 180.0], [6.1, 181.0], [6.2, 181.0], [6.3, 181.0], [6.4, 181.0], [6.5, 181.0], [6.6, 181.0], [6.7, 181.0], [6.8, 182.0], [6.9, 182.0], [7.0, 182.0], [7.1, 182.0], [7.2, 182.0], [7.3, 182.0], [7.4, 185.0], [7.5, 185.0], [7.6, 185.0], [7.7, 185.0], [7.8, 185.0], [7.9, 185.0], [8.0, 185.0], [8.1, 185.0], [8.2, 185.0], [8.3, 185.0], [8.4, 185.0], [8.5, 185.0], [8.6, 185.0], [8.7, 185.0], [8.8, 186.0], [8.9, 186.0], [9.0, 186.0], [9.1, 186.0], [9.2, 186.0], [9.3, 186.0], [9.4, 186.0], [9.5, 186.0], [9.6, 186.0], [9.7, 186.0], [9.8, 186.0], [9.9, 186.0], [10.0, 186.0], [10.1, 187.0], [10.2, 187.0], [10.3, 187.0], [10.4, 187.0], [10.5, 187.0], [10.6, 187.0], [10.7, 187.0], [10.8, 187.0], [10.9, 187.0], [11.0, 187.0], [11.1, 187.0], [11.2, 187.0], [11.3, 187.0], [11.4, 187.0], [11.5, 187.0], [11.6, 187.0], [11.7, 187.0], [11.8, 187.0], [11.9, 187.0], [12.0, 187.0], [12.1, 188.0], [12.2, 188.0], [12.3, 188.0], [12.4, 188.0], [12.5, 188.0], [12.6, 188.0], [12.7, 188.0], [12.8, 189.0], [12.9, 189.0], [13.0, 189.0], [13.1, 189.0], [13.2, 189.0], [13.3, 189.0], [13.4, 189.0], [13.5, 190.0], [13.6, 190.0], [13.7, 190.0], [13.8, 190.0], [13.9, 190.0], [14.0, 190.0], [14.1, 191.0], [14.2, 191.0], [14.3, 191.0], [14.4, 191.0], [14.5, 191.0], [14.6, 191.0], [14.7, 191.0], [14.8, 192.0], [14.9, 192.0], [15.0, 192.0], [15.1, 192.0], [15.2, 192.0], [15.3, 192.0], [15.4, 192.0], [15.5, 193.0], [15.6, 193.0], [15.7, 193.0], [15.8, 193.0], [15.9, 193.0], [16.0, 193.0], [16.1, 193.0], [16.2, 193.0], [16.3, 193.0], [16.4, 193.0], [16.5, 193.0], [16.6, 193.0], [16.7, 193.0], [16.8, 201.0], [16.9, 201.0], [17.0, 201.0], [17.1, 201.0], [17.2, 201.0], [17.3, 201.0], [17.4, 201.0], [17.5, 202.0], [17.6, 202.0], [17.7, 202.0], [17.8, 202.0], [17.9, 202.0], [18.0, 202.0], [18.1, 202.0], [18.2, 202.0], [18.3, 202.0], [18.4, 202.0], [18.5, 202.0], [18.6, 202.0], [18.7, 202.0], [18.8, 241.0], [18.9, 241.0], [19.0, 241.0], [19.1, 241.0], [19.2, 241.0], [19.3, 241.0], [19.4, 241.0], [19.5, 243.0], [19.6, 243.0], [19.7, 243.0], [19.8, 243.0], [19.9, 243.0], [20.0, 243.0], [20.1, 243.0], [20.2, 244.0], [20.3, 244.0], [20.4, 244.0], [20.5, 244.0], [20.6, 244.0], [20.7, 244.0], [20.8, 244.0], [20.9, 247.0], [21.0, 247.0], [21.1, 247.0], [21.2, 247.0], [21.3, 247.0], [21.4, 247.0], [21.5, 247.0], [21.6, 247.0], [21.7, 247.0], [21.8, 247.0], [21.9, 247.0], [22.0, 247.0], [22.1, 247.0], [22.2, 248.0], [22.3, 248.0], [22.4, 248.0], [22.5, 248.0], [22.6, 248.0], [22.7, 248.0], [22.8, 248.0], [22.9, 248.0], [23.0, 248.0], [23.1, 248.0], [23.2, 248.0], [23.3, 248.0], [23.4, 248.0], [23.5, 249.0], [23.6, 249.0], [23.7, 249.0], [23.8, 249.0], [23.9, 249.0], [24.0, 249.0], [24.1, 249.0], [24.2, 249.0], [24.3, 249.0], [24.4, 249.0], [24.5, 249.0], [24.6, 249.0], [24.7, 249.0], [24.8, 249.0], [24.9, 250.0], [25.0, 250.0], [25.1, 250.0], [25.2, 250.0], [25.3, 250.0], [25.4, 250.0], [25.5, 250.0], [25.6, 250.0], [25.7, 250.0], [25.8, 250.0], [25.9, 250.0], [26.0, 250.0], [26.1, 250.0], [26.2, 250.0], [26.3, 250.0], [26.4, 250.0], [26.5, 250.0], [26.6, 250.0], [26.7, 250.0], [26.8, 250.0], [26.9, 251.0], [27.0, 251.0], [27.1, 251.0], [27.2, 251.0], [27.3, 251.0], [27.4, 251.0], [27.5, 251.0], [27.6, 253.0], [27.7, 253.0], [27.8, 253.0], [27.9, 253.0], [28.0, 253.0], [28.1, 253.0], [28.2, 253.0], [28.3, 253.0], [28.4, 253.0], [28.5, 253.0], [28.6, 253.0], [28.7, 253.0], [28.8, 253.0], [28.9, 254.0], [29.0, 254.0], [29.1, 254.0], [29.2, 254.0], [29.3, 254.0], [29.4, 254.0], [29.5, 254.0], [29.6, 258.0], [29.7, 258.0], [29.8, 258.0], [29.9, 258.0], [30.0, 258.0], [30.1, 258.0], [30.2, 258.0], [30.3, 260.0], [30.4, 260.0], [30.5, 260.0], [30.6, 260.0], [30.7, 260.0], [30.8, 260.0], [30.9, 260.0], [31.0, 260.0], [31.1, 260.0], [31.2, 260.0], [31.3, 260.0], [31.4, 260.0], [31.5, 260.0], [31.6, 263.0], [31.7, 263.0], [31.8, 263.0], [31.9, 263.0], [32.0, 263.0], [32.1, 263.0], [32.2, 263.0], [32.3, 266.0], [32.4, 266.0], [32.5, 266.0], [32.6, 266.0], [32.7, 266.0], [32.8, 266.0], [32.9, 268.0], [33.0, 268.0], [33.1, 268.0], [33.2, 268.0], [33.3, 268.0], [33.4, 268.0], [33.5, 268.0], [33.6, 269.0], [33.7, 269.0], [33.8, 269.0], [33.9, 269.0], [34.0, 269.0], [34.1, 269.0], [34.2, 269.0], [34.3, 271.0], [34.4, 271.0], [34.5, 271.0], [34.6, 271.0], [34.7, 271.0], [34.8, 271.0], [34.9, 272.0], [35.0, 272.0], [35.1, 272.0], [35.2, 272.0], [35.3, 272.0], [35.4, 272.0], [35.5, 272.0], [35.6, 272.0], [35.7, 272.0], [35.8, 272.0], [35.9, 272.0], [36.0, 272.0], [36.1, 272.0], [36.2, 272.0], [36.3, 277.0], [36.4, 277.0], [36.5, 277.0], [36.6, 277.0], [36.7, 277.0], [36.8, 277.0], [36.9, 277.0], [37.0, 282.0], [37.1, 282.0], [37.2, 282.0], [37.3, 282.0], [37.4, 282.0], [37.5, 282.0], [37.6, 282.0], [37.7, 282.0], [37.8, 282.0], [37.9, 282.0], [38.0, 282.0], [38.1, 282.0], [38.2, 282.0], [38.3, 282.0], [38.4, 282.0], [38.5, 282.0], [38.6, 282.0], [38.7, 282.0], [38.8, 282.0], [38.9, 282.0], [39.0, 284.0], [39.1, 284.0], [39.2, 284.0], [39.3, 284.0], [39.4, 284.0], [39.5, 284.0], [39.6, 288.0], [39.7, 288.0], [39.8, 288.0], [39.9, 288.0], [40.0, 288.0], [40.1, 288.0], [40.2, 288.0], [40.3, 291.0], [40.4, 291.0], [40.5, 291.0], [40.6, 291.0], [40.7, 291.0], [40.8, 291.0], [40.9, 291.0], [41.0, 294.0], [41.1, 294.0], [41.2, 294.0], [41.3, 294.0], [41.4, 294.0], [41.5, 294.0], [41.6, 294.0], [41.7, 299.0], [41.8, 299.0], [41.9, 299.0], [42.0, 299.0], [42.1, 299.0], [42.2, 299.0], [42.3, 300.0], [42.4, 300.0], [42.5, 300.0], [42.6, 300.0], [42.7, 300.0], [42.8, 300.0], [42.9, 300.0], [43.0, 301.0], [43.1, 301.0], [43.2, 301.0], [43.3, 301.0], [43.4, 301.0], [43.5, 301.0], [43.6, 301.0], [43.7, 311.0], [43.8, 311.0], [43.9, 311.0], [44.0, 311.0], [44.1, 311.0], [44.2, 311.0], [44.3, 313.0], [44.4, 313.0], [44.5, 313.0], [44.6, 313.0], [44.7, 313.0], [44.8, 313.0], [44.9, 313.0], [45.0, 314.0], [45.1, 314.0], [45.2, 314.0], [45.3, 314.0], [45.4, 314.0], [45.5, 314.0], [45.6, 314.0], [45.7, 316.0], [45.8, 316.0], [45.9, 316.0], [46.0, 316.0], [46.1, 316.0], [46.2, 316.0], [46.3, 316.0], [46.4, 317.0], [46.5, 317.0], [46.6, 317.0], [46.7, 317.0], [46.8, 317.0], [46.9, 317.0], [47.0, 319.0], [47.1, 319.0], [47.2, 319.0], [47.3, 319.0], [47.4, 319.0], [47.5, 319.0], [47.6, 319.0], [47.7, 320.0], [47.8, 320.0], [47.9, 320.0], [48.0, 320.0], [48.1, 320.0], [48.2, 320.0], [48.3, 320.0], [48.4, 322.0], [48.5, 322.0], [48.6, 322.0], [48.7, 322.0], [48.8, 322.0], [48.9, 322.0], [49.0, 324.0], [49.1, 324.0], [49.2, 324.0], [49.3, 324.0], [49.4, 324.0], [49.5, 324.0], [49.6, 324.0], [49.7, 326.0], [49.8, 326.0], [49.9, 326.0], [50.0, 326.0], [50.1, 326.0], [50.2, 326.0], [50.3, 326.0], [50.4, 327.0], [50.5, 327.0], [50.6, 327.0], [50.7, 327.0], [50.8, 327.0], [50.9, 327.0], [51.0, 327.0], [51.1, 327.0], [51.2, 327.0], [51.3, 327.0], [51.4, 327.0], [51.5, 327.0], [51.6, 327.0], [51.7, 327.0], [51.8, 327.0], [51.9, 327.0], [52.0, 327.0], [52.1, 327.0], [52.2, 327.0], [52.3, 327.0], [52.4, 327.0], [52.5, 327.0], [52.6, 327.0], [52.7, 327.0], [52.8, 327.0], [52.9, 327.0], [53.0, 327.0], [53.1, 327.0], [53.2, 327.0], [53.3, 327.0], [53.4, 327.0], [53.5, 327.0], [53.6, 327.0], [53.7, 330.0], [53.8, 330.0], [53.9, 330.0], [54.0, 330.0], [54.1, 330.0], [54.2, 330.0], [54.3, 330.0], [54.4, 331.0], [54.5, 331.0], [54.6, 331.0], [54.7, 331.0], [54.8, 331.0], [54.9, 331.0], [55.0, 331.0], [55.1, 332.0], [55.2, 332.0], [55.3, 332.0], [55.4, 332.0], [55.5, 332.0], [55.6, 332.0], [55.7, 332.0], [55.8, 332.0], [55.9, 332.0], [56.0, 332.0], [56.1, 332.0], [56.2, 332.0], [56.3, 332.0], [56.4, 336.0], [56.5, 336.0], [56.6, 336.0], [56.7, 336.0], [56.8, 336.0], [56.9, 336.0], [57.0, 336.0], [57.1, 336.0], [57.2, 336.0], [57.3, 336.0], [57.4, 336.0], [57.5, 336.0], [57.6, 336.0], [57.7, 336.0], [57.8, 337.0], [57.9, 337.0], [58.0, 337.0], [58.1, 337.0], [58.2, 337.0], [58.3, 337.0], [58.4, 337.0], [58.5, 337.0], [58.6, 337.0], [58.7, 337.0], [58.8, 337.0], [58.9, 337.0], [59.0, 337.0], [59.1, 337.0], [59.2, 337.0], [59.3, 337.0], [59.4, 337.0], [59.5, 337.0], [59.6, 337.0], [59.7, 337.0], [59.8, 337.0], [59.9, 337.0], [60.0, 337.0], [60.1, 337.0], [60.2, 337.0], [60.3, 337.0], [60.4, 337.0], [60.5, 338.0], [60.6, 338.0], [60.7, 338.0], [60.8, 338.0], [60.9, 338.0], [61.0, 338.0], [61.1, 338.0], [61.2, 338.0], [61.3, 338.0], [61.4, 338.0], [61.5, 338.0], [61.6, 338.0], [61.7, 338.0], [61.8, 339.0], [61.9, 339.0], [62.0, 339.0], [62.1, 339.0], [62.2, 339.0], [62.3, 339.0], [62.4, 339.0], [62.5, 339.0], [62.6, 339.0], [62.7, 339.0], [62.8, 339.0], [62.9, 339.0], [63.0, 339.0], [63.1, 341.0], [63.2, 341.0], [63.3, 341.0], [63.4, 341.0], [63.5, 341.0], [63.6, 341.0], [63.7, 341.0], [63.8, 341.0], [63.9, 341.0], [64.0, 341.0], [64.1, 341.0], [64.2, 341.0], [64.3, 341.0], [64.4, 341.0], [64.5, 345.0], [64.6, 345.0], [64.7, 345.0], [64.8, 345.0], [64.9, 345.0], [65.0, 345.0], [65.1, 345.0], [65.2, 346.0], [65.3, 346.0], [65.4, 346.0], [65.5, 346.0], [65.6, 346.0], [65.7, 346.0], [65.8, 347.0], [65.9, 347.0], [66.0, 347.0], [66.1, 347.0], [66.2, 347.0], [66.3, 347.0], [66.4, 347.0], [66.5, 349.0], [66.6, 349.0], [66.7, 349.0], [66.8, 349.0], [66.9, 349.0], [67.0, 349.0], [67.1, 349.0], [67.2, 349.0], [67.3, 349.0], [67.4, 349.0], [67.5, 349.0], [67.6, 349.0], [67.7, 349.0], [67.8, 349.0], [67.9, 349.0], [68.0, 349.0], [68.1, 349.0], [68.2, 349.0], [68.3, 349.0], [68.4, 349.0], [68.5, 352.0], [68.6, 352.0], [68.7, 352.0], [68.8, 352.0], [68.9, 352.0], [69.0, 352.0], [69.1, 352.0], [69.2, 352.0], [69.3, 352.0], [69.4, 352.0], [69.5, 352.0], [69.6, 352.0], [69.7, 352.0], [69.8, 358.0], [69.9, 358.0], [70.0, 358.0], [70.1, 358.0], [70.2, 358.0], [70.3, 358.0], [70.4, 358.0], [70.5, 359.0], [70.6, 359.0], [70.7, 359.0], [70.8, 359.0], [70.9, 359.0], [71.0, 359.0], [71.1, 359.0], [71.2, 361.0], [71.3, 361.0], [71.4, 361.0], [71.5, 361.0], [71.6, 361.0], [71.7, 361.0], [71.8, 361.0], [71.9, 367.0], [72.0, 367.0], [72.1, 367.0], [72.2, 367.0], [72.3, 367.0], [72.4, 367.0], [72.5, 368.0], [72.6, 368.0], [72.7, 368.0], [72.8, 368.0], [72.9, 368.0], [73.0, 368.0], [73.1, 368.0], [73.2, 368.0], [73.3, 368.0], [73.4, 368.0], [73.5, 368.0], [73.6, 368.0], [73.7, 368.0], [73.8, 368.0], [73.9, 379.0], [74.0, 379.0], [74.1, 379.0], [74.2, 379.0], [74.3, 379.0], [74.4, 379.0], [74.5, 380.0], [74.6, 380.0], [74.7, 380.0], [74.8, 380.0], [74.9, 380.0], [75.0, 380.0], [75.1, 380.0], [75.2, 384.0], [75.3, 384.0], [75.4, 384.0], [75.5, 384.0], [75.6, 384.0], [75.7, 384.0], [75.8, 384.0], [75.9, 385.0], [76.0, 385.0], [76.1, 385.0], [76.2, 385.0], [76.3, 385.0], [76.4, 385.0], [76.5, 385.0], [76.6, 385.0], [76.7, 385.0], [76.8, 385.0], [76.9, 385.0], [77.0, 385.0], [77.1, 385.0], [77.2, 390.0], [77.3, 390.0], [77.4, 390.0], [77.5, 390.0], [77.6, 390.0], [77.7, 390.0], [77.8, 390.0], [77.9, 390.0], [78.0, 390.0], [78.1, 390.0], [78.2, 390.0], [78.3, 390.0], [78.4, 390.0], [78.5, 390.0], [78.6, 396.0], [78.7, 396.0], [78.8, 396.0], [78.9, 396.0], [79.0, 396.0], [79.1, 396.0], [79.2, 401.0], [79.3, 401.0], [79.4, 401.0], [79.5, 401.0], [79.6, 401.0], [79.7, 401.0], [79.8, 401.0], [79.9, 402.0], [80.0, 402.0], [80.1, 402.0], [80.2, 402.0], [80.3, 402.0], [80.4, 402.0], [80.5, 402.0], [80.6, 402.0], [80.7, 402.0], [80.8, 402.0], [80.9, 402.0], [81.0, 402.0], [81.1, 402.0], [81.2, 402.0], [81.3, 403.0], [81.4, 403.0], [81.5, 403.0], [81.6, 403.0], [81.7, 403.0], [81.8, 403.0], [81.9, 405.0], [82.0, 405.0], [82.1, 405.0], [82.2, 405.0], [82.3, 405.0], [82.4, 405.0], [82.5, 405.0], [82.6, 406.0], [82.7, 406.0], [82.8, 406.0], [82.9, 406.0], [83.0, 406.0], [83.1, 406.0], [83.2, 406.0], [83.3, 406.0], [83.4, 406.0], [83.5, 406.0], [83.6, 406.0], [83.7, 406.0], [83.8, 406.0], [83.9, 406.0], [84.0, 406.0], [84.1, 406.0], [84.2, 406.0], [84.3, 406.0], [84.4, 406.0], [84.5, 406.0], [84.6, 407.0], [84.7, 407.0], [84.8, 407.0], [84.9, 407.0], [85.0, 407.0], [85.1, 407.0], [85.2, 407.0], [85.3, 408.0], [85.4, 408.0], [85.5, 408.0], [85.6, 408.0], [85.7, 408.0], [85.8, 408.0], [85.9, 408.0], [86.0, 408.0], [86.1, 408.0], [86.2, 408.0], [86.3, 408.0], [86.4, 408.0], [86.5, 408.0], [86.6, 409.0], [86.7, 409.0], [86.8, 409.0], [86.9, 409.0], [87.0, 409.0], [87.1, 409.0], [87.2, 409.0], [87.3, 410.0], [87.4, 410.0], [87.5, 410.0], [87.6, 410.0], [87.7, 410.0], [87.8, 410.0], [87.9, 410.0], [88.0, 410.0], [88.1, 410.0], [88.2, 410.0], [88.3, 410.0], [88.4, 410.0], [88.5, 410.0], [88.6, 414.0], [88.7, 414.0], [88.8, 414.0], [88.9, 414.0], [89.0, 414.0], [89.1, 414.0], [89.2, 414.0], [89.3, 425.0], [89.4, 425.0], [89.5, 425.0], [89.6, 425.0], [89.7, 425.0], [89.8, 425.0], [89.9, 425.0], [90.0, 426.0], [90.1, 426.0], [90.2, 426.0], [90.3, 426.0], [90.4, 426.0], [90.5, 426.0], [90.6, 426.0], [90.7, 426.0], [90.8, 426.0], [90.9, 426.0], [91.0, 426.0], [91.1, 426.0], [91.2, 426.0], [91.3, 428.0], [91.4, 428.0], [91.5, 428.0], [91.6, 428.0], [91.7, 428.0], [91.8, 428.0], [91.9, 428.0], [92.0, 433.0], [92.1, 433.0], [92.2, 433.0], [92.3, 433.0], [92.4, 433.0], [92.5, 433.0], [92.6, 433.0], [92.7, 459.0], [92.8, 459.0], [92.9, 459.0], [93.0, 459.0], [93.1, 459.0], [93.2, 459.0], [93.3, 495.0], [93.4, 495.0], [93.5, 495.0], [93.6, 495.0], [93.7, 495.0], [93.8, 495.0], [93.9, 495.0], [94.0, 497.0], [94.1, 497.0], [94.2, 497.0], [94.3, 497.0], [94.4, 497.0], [94.5, 497.0], [94.6, 497.0], [94.7, 498.0], [94.8, 498.0], [94.9, 498.0], [95.0, 498.0], [95.1, 498.0], [95.2, 498.0], [95.3, 498.0], [95.4, 503.0], [95.5, 503.0], [95.6, 503.0], [95.7, 503.0], [95.8, 503.0], [95.9, 503.0], [96.0, 519.0], [96.1, 519.0], [96.2, 519.0], [96.3, 519.0], [96.4, 519.0], [96.5, 519.0], [96.6, 519.0], [96.7, 604.0], [96.8, 604.0], [96.9, 604.0], [97.0, 604.0], [97.1, 604.0], [97.2, 604.0], [97.3, 604.0], [97.4, 689.0], [97.5, 689.0], [97.6, 689.0], [97.7, 689.0], [97.8, 689.0], [97.9, 689.0], [98.0, 781.0], [98.1, 781.0], [98.2, 781.0], [98.3, 781.0], [98.4, 781.0], [98.5, 781.0], [98.6, 781.0], [98.7, 813.0], [98.8, 813.0], [98.9, 813.0], [99.0, 813.0], [99.1, 813.0], [99.2, 813.0], [99.3, 813.0], [99.4, 813.0], [99.5, 813.0], [99.6, 813.0], [99.7, 813.0], [99.8, 813.0], [99.9, 813.0], [100.0, 813.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 55.0, "series": [{"data": [[600.0, 2.0], [300.0, 55.0], [700.0, 1.0], [800.0, 2.0], [400.0, 24.0], [200.0, 38.0], [100.0, 25.0], [500.0, 2.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 800.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 7.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 142.0, "series": [{"data": [[0.0, 142.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 7.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 1.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 8.714285714285717, "minX": 1.60421904E12, "maxY": 10.0, "series": [{"data": [[1.60421904E12, 10.0], [1.6042191E12, 8.714285714285717]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6042191E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 263.0, "minX": 1.0, "maxY": 352.0, "series": [{"data": [[8.0, 341.0], [4.0, 349.0], [2.0, 282.0], [1.0, 282.0], [9.0, 263.0], [10.0, 325.07142857142844], [5.0, 269.0], [6.0, 266.0], [3.0, 352.0], [7.0, 268.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.697986577181208, 323.3691275167784]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 305.18333333333334, "minX": 1.60421904E12, "maxY": 3385.4166666666665, "series": [{"data": [[1.60421904E12, 3385.4166666666665], [1.6042191E12, 984.6166666666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60421904E12, 995.45], [1.6042191E12, 305.18333333333334]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6042191E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 294.42857142857144, "minX": 1.60421904E12, "maxY": 332.2543859649122, "series": [{"data": [[1.60421904E12, 332.2543859649122], [1.6042191E12, 294.42857142857144]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6042191E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 294.0285714285714, "minX": 1.60421904E12, "maxY": 331.8070175438595, "series": [{"data": [[1.60421904E12, 331.8070175438595], [1.6042191E12, 294.0285714285714]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6042191E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.9714285714285715, "minX": 1.60421904E12, "maxY": 1.7017543859649134, "series": [{"data": [[1.60421904E12, 1.7017543859649134], [1.6042191E12, 0.9714285714285715]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6042191E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 173.0, "minX": 1.60421904E12, "maxY": 813.0, "series": [{"data": [[1.60421904E12, 813.0], [1.6042191E12, 410.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60421904E12, 173.13999989032746], [1.6042191E12, 182.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60421904E12, 173.55400004386902], [1.6042191E12, 182.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60421904E12, 173.36999994516373], [1.6042191E12, 182.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60421904E12, 173.0], [1.6042191E12, 182.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60421904E12, 327.0], [1.6042191E12, 282.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6042191E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 250.0, "minX": 19.0, "maxY": 380.0, "series": [{"data": [[34.0, 250.0], [35.0, 282.0], [36.0, 324.5], [19.0, 347.0], [25.0, 380.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 36.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 250.0, "minX": 19.0, "maxY": 380.0, "series": [{"data": [[34.0, 250.0], [35.0, 282.0], [36.0, 323.5], [19.0, 346.0], [25.0, 380.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 36.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.4166666666666667, "minX": 1.60421904E12, "maxY": 2.066666666666667, "series": [{"data": [[1.60421904E12, 2.066666666666667], [1.6042191E12, 0.4166666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6042191E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.5833333333333334, "minX": 1.60421904E12, "maxY": 1.9, "series": [{"data": [[1.60421904E12, 1.9], [1.6042191E12, 0.5833333333333334]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6042191E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.5833333333333334, "minX": 1.60421904E12, "maxY": 1.9, "series": [{"data": [[1.60421904E12, 1.9], [1.6042191E12, 0.5833333333333334]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6042191E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.5833333333333334, "minX": 1.60421904E12, "maxY": 1.9, "series": [{"data": [[1.60421904E12, 1.9], [1.6042191E12, 0.5833333333333334]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6042191E12, "title": "Total Transactions Per Second"}},
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

