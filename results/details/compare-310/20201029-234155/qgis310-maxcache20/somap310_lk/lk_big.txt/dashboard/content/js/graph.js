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
        data: {"result": {"minY": 29.0, "minX": 0.0, "maxY": 3255.0, "series": [{"data": [[0.0, 29.0], [0.1, 31.0], [0.2, 31.0], [0.3, 32.0], [0.4, 32.0], [0.5, 33.0], [0.6, 33.0], [0.7, 34.0], [0.8, 34.0], [0.9, 34.0], [1.0, 34.0], [1.1, 35.0], [1.2, 35.0], [1.3, 35.0], [1.4, 35.0], [1.5, 35.0], [1.6, 35.0], [1.7, 36.0], [1.8, 36.0], [1.9, 36.0], [2.0, 36.0], [2.1, 36.0], [2.2, 36.0], [2.3, 36.0], [2.4, 36.0], [2.5, 36.0], [2.6, 37.0], [2.7, 37.0], [2.8, 37.0], [2.9, 37.0], [3.0, 37.0], [3.1, 37.0], [3.2, 37.0], [3.3, 37.0], [3.4, 37.0], [3.5, 37.0], [3.6, 37.0], [3.7, 37.0], [3.8, 37.0], [3.9, 38.0], [4.0, 38.0], [4.1, 38.0], [4.2, 38.0], [4.3, 38.0], [4.4, 38.0], [4.5, 38.0], [4.6, 38.0], [4.7, 38.0], [4.8, 38.0], [4.9, 38.0], [5.0, 38.0], [5.1, 38.0], [5.2, 38.0], [5.3, 38.0], [5.4, 39.0], [5.5, 39.0], [5.6, 39.0], [5.7, 39.0], [5.8, 39.0], [5.9, 39.0], [6.0, 39.0], [6.1, 39.0], [6.2, 39.0], [6.3, 39.0], [6.4, 39.0], [6.5, 39.0], [6.6, 39.0], [6.7, 39.0], [6.8, 39.0], [6.9, 39.0], [7.0, 39.0], [7.1, 40.0], [7.2, 40.0], [7.3, 40.0], [7.4, 40.0], [7.5, 40.0], [7.6, 40.0], [7.7, 40.0], [7.8, 40.0], [7.9, 40.0], [8.0, 40.0], [8.1, 40.0], [8.2, 40.0], [8.3, 40.0], [8.4, 40.0], [8.5, 40.0], [8.6, 41.0], [8.7, 41.0], [8.8, 41.0], [8.9, 41.0], [9.0, 41.0], [9.1, 41.0], [9.2, 41.0], [9.3, 41.0], [9.4, 41.0], [9.5, 41.0], [9.6, 41.0], [9.7, 41.0], [9.8, 41.0], [9.9, 41.0], [10.0, 42.0], [10.1, 42.0], [10.2, 42.0], [10.3, 42.0], [10.4, 42.0], [10.5, 42.0], [10.6, 42.0], [10.7, 42.0], [10.8, 42.0], [10.9, 42.0], [11.0, 42.0], [11.1, 42.0], [11.2, 42.0], [11.3, 42.0], [11.4, 42.0], [11.5, 42.0], [11.6, 42.0], [11.7, 43.0], [11.8, 43.0], [11.9, 43.0], [12.0, 43.0], [12.1, 43.0], [12.2, 43.0], [12.3, 43.0], [12.4, 43.0], [12.5, 43.0], [12.6, 43.0], [12.7, 43.0], [12.8, 43.0], [12.9, 43.0], [13.0, 43.0], [13.1, 44.0], [13.2, 44.0], [13.3, 44.0], [13.4, 44.0], [13.5, 44.0], [13.6, 44.0], [13.7, 44.0], [13.8, 44.0], [13.9, 44.0], [14.0, 44.0], [14.1, 44.0], [14.2, 44.0], [14.3, 44.0], [14.4, 44.0], [14.5, 44.0], [14.6, 45.0], [14.7, 45.0], [14.8, 45.0], [14.9, 45.0], [15.0, 45.0], [15.1, 45.0], [15.2, 45.0], [15.3, 45.0], [15.4, 45.0], [15.5, 45.0], [15.6, 46.0], [15.7, 46.0], [15.8, 46.0], [15.9, 46.0], [16.0, 46.0], [16.1, 46.0], [16.2, 46.0], [16.3, 46.0], [16.4, 46.0], [16.5, 46.0], [16.6, 47.0], [16.7, 47.0], [16.8, 47.0], [16.9, 47.0], [17.0, 47.0], [17.1, 47.0], [17.2, 47.0], [17.3, 47.0], [17.4, 47.0], [17.5, 48.0], [17.6, 48.0], [17.7, 48.0], [17.8, 48.0], [17.9, 48.0], [18.0, 48.0], [18.1, 48.0], [18.2, 48.0], [18.3, 48.0], [18.4, 49.0], [18.5, 49.0], [18.6, 49.0], [18.7, 49.0], [18.8, 49.0], [18.9, 49.0], [19.0, 49.0], [19.1, 50.0], [19.2, 50.0], [19.3, 50.0], [19.4, 50.0], [19.5, 50.0], [19.6, 51.0], [19.7, 51.0], [19.8, 51.0], [19.9, 51.0], [20.0, 51.0], [20.1, 51.0], [20.2, 52.0], [20.3, 52.0], [20.4, 52.0], [20.5, 52.0], [20.6, 52.0], [20.7, 53.0], [20.8, 53.0], [20.9, 53.0], [21.0, 53.0], [21.1, 53.0], [21.2, 54.0], [21.3, 54.0], [21.4, 55.0], [21.5, 55.0], [21.6, 56.0], [21.7, 56.0], [21.8, 56.0], [21.9, 57.0], [22.0, 57.0], [22.1, 58.0], [22.2, 58.0], [22.3, 59.0], [22.4, 59.0], [22.5, 59.0], [22.6, 60.0], [22.7, 60.0], [22.8, 60.0], [22.9, 60.0], [23.0, 60.0], [23.1, 61.0], [23.2, 61.0], [23.3, 61.0], [23.4, 62.0], [23.5, 62.0], [23.6, 62.0], [23.7, 62.0], [23.8, 63.0], [23.9, 63.0], [24.0, 63.0], [24.1, 63.0], [24.2, 63.0], [24.3, 64.0], [24.4, 64.0], [24.5, 64.0], [24.6, 65.0], [24.7, 65.0], [24.8, 65.0], [24.9, 66.0], [25.0, 66.0], [25.1, 66.0], [25.2, 66.0], [25.3, 67.0], [25.4, 67.0], [25.5, 67.0], [25.6, 67.0], [25.7, 68.0], [25.8, 68.0], [25.9, 68.0], [26.0, 68.0], [26.1, 68.0], [26.2, 69.0], [26.3, 69.0], [26.4, 69.0], [26.5, 69.0], [26.6, 69.0], [26.7, 70.0], [26.8, 70.0], [26.9, 70.0], [27.0, 70.0], [27.1, 70.0], [27.2, 70.0], [27.3, 70.0], [27.4, 71.0], [27.5, 71.0], [27.6, 71.0], [27.7, 71.0], [27.8, 71.0], [27.9, 71.0], [28.0, 72.0], [28.1, 72.0], [28.2, 72.0], [28.3, 72.0], [28.4, 72.0], [28.5, 73.0], [28.6, 73.0], [28.7, 73.0], [28.8, 73.0], [28.9, 73.0], [29.0, 74.0], [29.1, 74.0], [29.2, 74.0], [29.3, 74.0], [29.4, 74.0], [29.5, 74.0], [29.6, 74.0], [29.7, 75.0], [29.8, 75.0], [29.9, 75.0], [30.0, 75.0], [30.1, 75.0], [30.2, 75.0], [30.3, 75.0], [30.4, 75.0], [30.5, 75.0], [30.6, 76.0], [30.7, 76.0], [30.8, 76.0], [30.9, 76.0], [31.0, 76.0], [31.1, 77.0], [31.2, 77.0], [31.3, 77.0], [31.4, 77.0], [31.5, 77.0], [31.6, 77.0], [31.7, 78.0], [31.8, 78.0], [31.9, 78.0], [32.0, 78.0], [32.1, 78.0], [32.2, 78.0], [32.3, 79.0], [32.4, 79.0], [32.5, 79.0], [32.6, 79.0], [32.7, 79.0], [32.8, 79.0], [32.9, 79.0], [33.0, 79.0], [33.1, 80.0], [33.2, 80.0], [33.3, 80.0], [33.4, 80.0], [33.5, 80.0], [33.6, 80.0], [33.7, 81.0], [33.8, 81.0], [33.9, 81.0], [34.0, 81.0], [34.1, 81.0], [34.2, 81.0], [34.3, 81.0], [34.4, 82.0], [34.5, 82.0], [34.6, 82.0], [34.7, 82.0], [34.8, 82.0], [34.9, 82.0], [35.0, 82.0], [35.1, 83.0], [35.2, 83.0], [35.3, 83.0], [35.4, 83.0], [35.5, 83.0], [35.6, 83.0], [35.7, 84.0], [35.8, 84.0], [35.9, 84.0], [36.0, 84.0], [36.1, 84.0], [36.2, 84.0], [36.3, 84.0], [36.4, 85.0], [36.5, 85.0], [36.6, 85.0], [36.7, 85.0], [36.8, 85.0], [36.9, 85.0], [37.0, 86.0], [37.1, 86.0], [37.2, 86.0], [37.3, 86.0], [37.4, 87.0], [37.5, 87.0], [37.6, 87.0], [37.7, 88.0], [37.8, 88.0], [37.9, 88.0], [38.0, 88.0], [38.1, 89.0], [38.2, 89.0], [38.3, 89.0], [38.4, 89.0], [38.5, 90.0], [38.6, 90.0], [38.7, 90.0], [38.8, 91.0], [38.9, 91.0], [39.0, 91.0], [39.1, 92.0], [39.2, 92.0], [39.3, 92.0], [39.4, 93.0], [39.5, 93.0], [39.6, 94.0], [39.7, 94.0], [39.8, 95.0], [39.9, 95.0], [40.0, 95.0], [40.1, 96.0], [40.2, 97.0], [40.3, 98.0], [40.4, 98.0], [40.5, 99.0], [40.6, 99.0], [40.7, 100.0], [40.8, 101.0], [40.9, 102.0], [41.0, 103.0], [41.1, 104.0], [41.2, 104.0], [41.3, 105.0], [41.4, 106.0], [41.5, 107.0], [41.6, 107.0], [41.7, 108.0], [41.8, 109.0], [41.9, 109.0], [42.0, 110.0], [42.1, 110.0], [42.2, 110.0], [42.3, 111.0], [42.4, 111.0], [42.5, 112.0], [42.6, 113.0], [42.7, 114.0], [42.8, 115.0], [42.9, 115.0], [43.0, 116.0], [43.1, 116.0], [43.2, 117.0], [43.3, 117.0], [43.4, 118.0], [43.5, 119.0], [43.6, 120.0], [43.7, 120.0], [43.8, 121.0], [43.9, 121.0], [44.0, 122.0], [44.1, 122.0], [44.2, 123.0], [44.3, 123.0], [44.4, 124.0], [44.5, 125.0], [44.6, 125.0], [44.7, 126.0], [44.8, 127.0], [44.9, 128.0], [45.0, 128.0], [45.1, 128.0], [45.2, 129.0], [45.3, 130.0], [45.4, 131.0], [45.5, 132.0], [45.6, 133.0], [45.7, 134.0], [45.8, 134.0], [45.9, 135.0], [46.0, 136.0], [46.1, 136.0], [46.2, 137.0], [46.3, 137.0], [46.4, 139.0], [46.5, 140.0], [46.6, 140.0], [46.7, 141.0], [46.8, 142.0], [46.9, 142.0], [47.0, 143.0], [47.1, 143.0], [47.2, 144.0], [47.3, 145.0], [47.4, 146.0], [47.5, 146.0], [47.6, 147.0], [47.7, 148.0], [47.8, 150.0], [47.9, 150.0], [48.0, 151.0], [48.1, 152.0], [48.2, 153.0], [48.3, 154.0], [48.4, 155.0], [48.5, 156.0], [48.6, 157.0], [48.7, 158.0], [48.8, 159.0], [48.9, 161.0], [49.0, 161.0], [49.1, 162.0], [49.2, 164.0], [49.3, 164.0], [49.4, 165.0], [49.5, 166.0], [49.6, 167.0], [49.7, 168.0], [49.8, 169.0], [49.9, 170.0], [50.0, 172.0], [50.1, 173.0], [50.2, 173.0], [50.3, 174.0], [50.4, 175.0], [50.5, 175.0], [50.6, 177.0], [50.7, 178.0], [50.8, 179.0], [50.9, 179.0], [51.0, 180.0], [51.1, 181.0], [51.2, 182.0], [51.3, 183.0], [51.4, 184.0], [51.5, 186.0], [51.6, 186.0], [51.7, 187.0], [51.8, 188.0], [51.9, 189.0], [52.0, 190.0], [52.1, 191.0], [52.2, 191.0], [52.3, 192.0], [52.4, 193.0], [52.5, 193.0], [52.6, 194.0], [52.7, 195.0], [52.8, 195.0], [52.9, 196.0], [53.0, 197.0], [53.1, 198.0], [53.2, 199.0], [53.3, 200.0], [53.4, 200.0], [53.5, 201.0], [53.6, 202.0], [53.7, 202.0], [53.8, 203.0], [53.9, 204.0], [54.0, 205.0], [54.1, 205.0], [54.2, 206.0], [54.3, 207.0], [54.4, 208.0], [54.5, 209.0], [54.6, 210.0], [54.7, 210.0], [54.8, 211.0], [54.9, 212.0], [55.0, 212.0], [55.1, 213.0], [55.2, 214.0], [55.3, 215.0], [55.4, 215.0], [55.5, 216.0], [55.6, 217.0], [55.7, 217.0], [55.8, 218.0], [55.9, 219.0], [56.0, 219.0], [56.1, 219.0], [56.2, 221.0], [56.3, 221.0], [56.4, 222.0], [56.5, 223.0], [56.6, 223.0], [56.7, 224.0], [56.8, 225.0], [56.9, 227.0], [57.0, 227.0], [57.1, 228.0], [57.2, 228.0], [57.3, 229.0], [57.4, 230.0], [57.5, 230.0], [57.6, 232.0], [57.7, 233.0], [57.8, 234.0], [57.9, 235.0], [58.0, 235.0], [58.1, 236.0], [58.2, 237.0], [58.3, 238.0], [58.4, 239.0], [58.5, 240.0], [58.6, 241.0], [58.7, 242.0], [58.8, 243.0], [58.9, 244.0], [59.0, 245.0], [59.1, 246.0], [59.2, 248.0], [59.3, 248.0], [59.4, 249.0], [59.5, 250.0], [59.6, 251.0], [59.7, 251.0], [59.8, 252.0], [59.9, 253.0], [60.0, 253.0], [60.1, 255.0], [60.2, 256.0], [60.3, 257.0], [60.4, 259.0], [60.5, 259.0], [60.6, 260.0], [60.7, 261.0], [60.8, 262.0], [60.9, 263.0], [61.0, 264.0], [61.1, 265.0], [61.2, 266.0], [61.3, 266.0], [61.4, 267.0], [61.5, 267.0], [61.6, 269.0], [61.7, 269.0], [61.8, 270.0], [61.9, 271.0], [62.0, 271.0], [62.1, 271.0], [62.2, 272.0], [62.3, 273.0], [62.4, 274.0], [62.5, 275.0], [62.6, 276.0], [62.7, 278.0], [62.8, 280.0], [62.9, 281.0], [63.0, 283.0], [63.1, 283.0], [63.2, 284.0], [63.3, 285.0], [63.4, 286.0], [63.5, 288.0], [63.6, 288.0], [63.7, 290.0], [63.8, 291.0], [63.9, 292.0], [64.0, 293.0], [64.1, 294.0], [64.2, 295.0], [64.3, 296.0], [64.4, 298.0], [64.5, 299.0], [64.6, 301.0], [64.7, 302.0], [64.8, 304.0], [64.9, 305.0], [65.0, 306.0], [65.1, 309.0], [65.2, 310.0], [65.3, 311.0], [65.4, 313.0], [65.5, 314.0], [65.6, 315.0], [65.7, 317.0], [65.8, 319.0], [65.9, 320.0], [66.0, 322.0], [66.1, 323.0], [66.2, 324.0], [66.3, 325.0], [66.4, 327.0], [66.5, 327.0], [66.6, 328.0], [66.7, 330.0], [66.8, 331.0], [66.9, 332.0], [67.0, 333.0], [67.1, 333.0], [67.2, 335.0], [67.3, 336.0], [67.4, 336.0], [67.5, 337.0], [67.6, 338.0], [67.7, 340.0], [67.8, 340.0], [67.9, 342.0], [68.0, 345.0], [68.1, 346.0], [68.2, 348.0], [68.3, 350.0], [68.4, 352.0], [68.5, 354.0], [68.6, 355.0], [68.7, 357.0], [68.8, 358.0], [68.9, 359.0], [69.0, 361.0], [69.1, 363.0], [69.2, 364.0], [69.3, 366.0], [69.4, 367.0], [69.5, 369.0], [69.6, 371.0], [69.7, 373.0], [69.8, 374.0], [69.9, 375.0], [70.0, 377.0], [70.1, 379.0], [70.2, 380.0], [70.3, 382.0], [70.4, 383.0], [70.5, 384.0], [70.6, 385.0], [70.7, 387.0], [70.8, 388.0], [70.9, 389.0], [71.0, 391.0], [71.1, 393.0], [71.2, 394.0], [71.3, 396.0], [71.4, 398.0], [71.5, 399.0], [71.6, 400.0], [71.7, 401.0], [71.8, 402.0], [71.9, 404.0], [72.0, 405.0], [72.1, 406.0], [72.2, 408.0], [72.3, 409.0], [72.4, 412.0], [72.5, 413.0], [72.6, 416.0], [72.7, 417.0], [72.8, 419.0], [72.9, 419.0], [73.0, 421.0], [73.1, 423.0], [73.2, 424.0], [73.3, 425.0], [73.4, 426.0], [73.5, 427.0], [73.6, 428.0], [73.7, 430.0], [73.8, 433.0], [73.9, 434.0], [74.0, 436.0], [74.1, 437.0], [74.2, 438.0], [74.3, 439.0], [74.4, 441.0], [74.5, 442.0], [74.6, 443.0], [74.7, 445.0], [74.8, 446.0], [74.9, 447.0], [75.0, 448.0], [75.1, 450.0], [75.2, 452.0], [75.3, 453.0], [75.4, 454.0], [75.5, 454.0], [75.6, 456.0], [75.7, 458.0], [75.8, 461.0], [75.9, 461.0], [76.0, 463.0], [76.1, 465.0], [76.2, 467.0], [76.3, 468.0], [76.4, 469.0], [76.5, 472.0], [76.6, 474.0], [76.7, 475.0], [76.8, 478.0], [76.9, 481.0], [77.0, 482.0], [77.1, 484.0], [77.2, 485.0], [77.3, 486.0], [77.4, 488.0], [77.5, 490.0], [77.6, 491.0], [77.7, 493.0], [77.8, 494.0], [77.9, 496.0], [78.0, 497.0], [78.1, 498.0], [78.2, 499.0], [78.3, 503.0], [78.4, 505.0], [78.5, 506.0], [78.6, 509.0], [78.7, 511.0], [78.8, 512.0], [78.9, 514.0], [79.0, 515.0], [79.1, 518.0], [79.2, 523.0], [79.3, 525.0], [79.4, 528.0], [79.5, 530.0], [79.6, 530.0], [79.7, 534.0], [79.8, 536.0], [79.9, 538.0], [80.0, 539.0], [80.1, 544.0], [80.2, 545.0], [80.3, 548.0], [80.4, 550.0], [80.5, 551.0], [80.6, 552.0], [80.7, 553.0], [80.8, 556.0], [80.9, 557.0], [81.0, 559.0], [81.1, 561.0], [81.2, 564.0], [81.3, 565.0], [81.4, 566.0], [81.5, 568.0], [81.6, 571.0], [81.7, 575.0], [81.8, 577.0], [81.9, 578.0], [82.0, 579.0], [82.1, 582.0], [82.2, 582.0], [82.3, 583.0], [82.4, 585.0], [82.5, 586.0], [82.6, 588.0], [82.7, 591.0], [82.8, 592.0], [82.9, 594.0], [83.0, 596.0], [83.1, 598.0], [83.2, 599.0], [83.3, 602.0], [83.4, 603.0], [83.5, 605.0], [83.6, 608.0], [83.7, 611.0], [83.8, 613.0], [83.9, 615.0], [84.0, 616.0], [84.1, 620.0], [84.2, 622.0], [84.3, 624.0], [84.4, 625.0], [84.5, 627.0], [84.6, 628.0], [84.7, 630.0], [84.8, 633.0], [84.9, 637.0], [85.0, 637.0], [85.1, 643.0], [85.2, 644.0], [85.3, 648.0], [85.4, 649.0], [85.5, 652.0], [85.6, 655.0], [85.7, 657.0], [85.8, 659.0], [85.9, 662.0], [86.0, 664.0], [86.1, 666.0], [86.2, 667.0], [86.3, 669.0], [86.4, 670.0], [86.5, 672.0], [86.6, 673.0], [86.7, 675.0], [86.8, 679.0], [86.9, 680.0], [87.0, 683.0], [87.1, 685.0], [87.2, 689.0], [87.3, 691.0], [87.4, 693.0], [87.5, 697.0], [87.6, 699.0], [87.7, 702.0], [87.8, 704.0], [87.9, 705.0], [88.0, 706.0], [88.1, 708.0], [88.2, 712.0], [88.3, 715.0], [88.4, 718.0], [88.5, 720.0], [88.6, 722.0], [88.7, 726.0], [88.8, 729.0], [88.9, 731.0], [89.0, 735.0], [89.1, 737.0], [89.2, 739.0], [89.3, 743.0], [89.4, 746.0], [89.5, 747.0], [89.6, 750.0], [89.7, 753.0], [89.8, 755.0], [89.9, 761.0], [90.0, 764.0], [90.1, 771.0], [90.2, 773.0], [90.3, 775.0], [90.4, 777.0], [90.5, 781.0], [90.6, 784.0], [90.7, 791.0], [90.8, 796.0], [90.9, 801.0], [91.0, 804.0], [91.1, 811.0], [91.2, 814.0], [91.3, 818.0], [91.4, 822.0], [91.5, 827.0], [91.6, 832.0], [91.7, 837.0], [91.8, 841.0], [91.9, 842.0], [92.0, 846.0], [92.1, 851.0], [92.2, 858.0], [92.3, 863.0], [92.4, 871.0], [92.5, 876.0], [92.6, 880.0], [92.7, 882.0], [92.8, 885.0], [92.9, 895.0], [93.0, 898.0], [93.1, 904.0], [93.2, 911.0], [93.3, 921.0], [93.4, 924.0], [93.5, 931.0], [93.6, 941.0], [93.7, 948.0], [93.8, 953.0], [93.9, 956.0], [94.0, 958.0], [94.1, 964.0], [94.2, 968.0], [94.3, 977.0], [94.4, 985.0], [94.5, 989.0], [94.6, 996.0], [94.7, 1004.0], [94.8, 1009.0], [94.9, 1022.0], [95.0, 1026.0], [95.1, 1037.0], [95.2, 1039.0], [95.3, 1045.0], [95.4, 1057.0], [95.5, 1063.0], [95.6, 1071.0], [95.7, 1078.0], [95.8, 1084.0], [95.9, 1098.0], [96.0, 1103.0], [96.1, 1124.0], [96.2, 1142.0], [96.3, 1150.0], [96.4, 1154.0], [96.5, 1165.0], [96.6, 1176.0], [96.7, 1184.0], [96.8, 1199.0], [96.9, 1220.0], [97.0, 1237.0], [97.1, 1265.0], [97.2, 1281.0], [97.3, 1306.0], [97.4, 1318.0], [97.5, 1325.0], [97.6, 1343.0], [97.7, 1362.0], [97.8, 1385.0], [97.9, 1397.0], [98.0, 1414.0], [98.1, 1438.0], [98.2, 1465.0], [98.3, 1488.0], [98.4, 1539.0], [98.5, 1584.0], [98.6, 1609.0], [98.7, 1654.0], [98.8, 1675.0], [98.9, 1697.0], [99.0, 1746.0], [99.1, 1797.0], [99.2, 1837.0], [99.3, 1871.0], [99.4, 1929.0], [99.5, 1974.0], [99.6, 2029.0], [99.7, 2156.0], [99.8, 2211.0], [99.9, 2488.0], [100.0, 3255.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 2138.0, "series": [{"data": [[0.0, 2138.0], [600.0, 231.0], [700.0, 170.0], [800.0, 115.0], [900.0, 85.0], [1000.0, 68.0], [1100.0, 46.0], [1200.0, 25.0], [1300.0, 33.0], [1400.0, 23.0], [1500.0, 12.0], [100.0, 666.0], [1600.0, 18.0], [1700.0, 11.0], [1800.0, 12.0], [1900.0, 11.0], [2000.0, 6.0], [2100.0, 5.0], [2200.0, 4.0], [2300.0, 1.0], [2400.0, 2.0], [2500.0, 1.0], [3000.0, 2.0], [3100.0, 1.0], [200.0, 591.0], [3200.0, 1.0], [300.0, 369.0], [400.0, 351.0], [500.0, 264.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3200.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 87.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 4118.0, "series": [{"data": [[0.0, 4118.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1057.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 87.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 5.6, "minX": 1.60401564E12, "maxY": 10.0, "series": [{"data": [[1.60401576E12, 10.0], [1.60401582E12, 5.6], [1.60401564E12, 9.985062893081759], [1.6040157E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60401582E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 208.5, "minX": 1.0, "maxY": 3255.0, "series": [{"data": [[4.0, 1111.0], [8.0, 1186.0], [2.0, 3031.0], [1.0, 3255.0], [9.0, 208.5], [5.0, 1625.5], [10.0, 311.2587652439016], [6.0, 541.0], [3.0, 2029.0], [7.0, 1131.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.988027366020514, 314.00152033447335]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 85.56666666666666, "minX": 1.60401564E12, "maxY": 1676882.95, "series": [{"data": [[1.60401576E12, 1676882.95], [1.60401582E12, 10268.633333333333], [1.60401564E12, 1190713.3833333333], [1.6040157E12, 1373110.1166666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60401576E12, 15673.316666666668], [1.60401582E12, 85.56666666666666], [1.60401564E12, 11044.316666666668], [1.6040157E12, 18687.75]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60401582E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 275.4580674566998, "minX": 1.60401564E12, "maxY": 2108.7999999999997, "series": [{"data": [[1.60401576E12, 330.5711086226202], [1.60401582E12, 2108.7999999999997], [1.60401564E12, 343.10770440251554], [1.6040157E12, 275.4580674566998]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60401582E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 275.1180492251597, "minX": 1.60401564E12, "maxY": 2108.2, "series": [{"data": [[1.60401576E12, 330.1332586786115], [1.60401582E12, 2108.2], [1.60401564E12, 342.5691823899372], [1.6040157E12, 275.1180492251597]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60401582E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.60401564E12, "maxY": 0.0896226415094339, "series": [{"data": [[1.60401576E12, 0.008398656215005601], [1.60401582E12, 0.0], [1.60401564E12, 0.0896226415094339], [1.6040157E12, 0.010027347310847765]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60401582E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 29.0, "minX": 1.60401564E12, "maxY": 3255.0, "series": [{"data": [[1.60401576E12, 3079.0], [1.60401582E12, 3255.0], [1.60401564E12, 2042.0], [1.6040157E12, 2235.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60401576E12, 34.0], [1.60401582E12, 1019.0], [1.60401564E12, 32.0], [1.6040157E12, 35.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60401576E12, 34.0], [1.60401582E12, 1019.0], [1.60401564E12, 32.0], [1.6040157E12, 35.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60401576E12, 34.0], [1.60401582E12, 1019.0], [1.60401564E12, 32.0], [1.6040157E12, 35.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60401576E12, 30.0], [1.60401582E12, 1019.0], [1.60401564E12, 29.0], [1.6040157E12, 31.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60401576E12, 199.5], [1.60401582E12, 2133.0], [1.60401564E12, 229.5], [1.6040157E12, 134.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60401582E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 54.0, "minX": 1.0, "maxY": 3255.0, "series": [{"data": [[4.0, 1609.5], [5.0, 1315.0], [6.0, 1315.0], [7.0, 887.0], [9.0, 639.5], [10.0, 923.5], [11.0, 704.0], [12.0, 747.5], [13.0, 670.0], [14.0, 658.0], [15.0, 609.0], [16.0, 508.5], [17.0, 491.0], [18.0, 447.5], [20.0, 449.0], [21.0, 414.0], [22.0, 485.5], [23.0, 336.0], [24.0, 352.5], [25.0, 368.0], [26.0, 399.5], [27.0, 296.0], [28.0, 123.0], [29.0, 216.0], [31.0, 238.0], [33.0, 216.5], [32.0, 234.5], [35.0, 92.0], [34.0, 257.0], [36.0, 76.5], [37.0, 219.0], [39.0, 87.0], [38.0, 89.5], [40.0, 206.0], [41.0, 123.0], [42.0, 222.0], [44.0, 105.0], [45.0, 91.0], [47.0, 121.0], [46.0, 157.0], [49.0, 78.0], [48.0, 151.5], [50.0, 158.5], [51.0, 62.0], [53.0, 75.0], [54.0, 144.0], [57.0, 89.0], [56.0, 85.5], [59.0, 81.0], [67.0, 129.0], [64.0, 70.5], [65.0, 108.0], [71.0, 54.0], [74.0, 134.0], [79.0, 81.0], [83.0, 55.0], [81.0, 83.0], [1.0, 3255.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 83.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 54.0, "minX": 1.0, "maxY": 3254.0, "series": [{"data": [[4.0, 1609.0], [5.0, 1314.5], [6.0, 1313.5], [7.0, 887.0], [9.0, 639.5], [10.0, 920.5], [11.0, 704.0], [12.0, 744.0], [13.0, 669.0], [14.0, 657.0], [15.0, 606.0], [16.0, 507.0], [17.0, 491.0], [18.0, 446.0], [20.0, 449.0], [21.0, 414.0], [22.0, 485.0], [23.0, 336.0], [24.0, 350.5], [25.0, 367.0], [26.0, 399.0], [27.0, 295.0], [28.0, 123.0], [29.0, 216.0], [31.0, 238.0], [33.0, 215.5], [32.0, 234.0], [35.0, 92.0], [34.0, 256.0], [36.0, 76.5], [37.0, 218.0], [39.0, 87.0], [38.0, 89.5], [40.0, 205.5], [41.0, 123.0], [42.0, 221.5], [44.0, 105.0], [45.0, 91.0], [47.0, 121.0], [46.0, 156.5], [49.0, 78.0], [48.0, 151.5], [50.0, 158.0], [51.0, 62.0], [53.0, 74.0], [54.0, 143.5], [57.0, 89.0], [56.0, 85.0], [59.0, 81.0], [67.0, 129.0], [64.0, 70.5], [65.0, 107.5], [71.0, 54.0], [74.0, 134.0], [79.0, 81.0], [83.0, 55.0], [81.0, 83.0], [1.0, 3254.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 83.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 21.366666666666667, "minX": 1.60401564E12, "maxY": 36.56666666666667, "series": [{"data": [[1.60401576E12, 29.766666666666666], [1.60401564E12, 21.366666666666667], [1.6040157E12, 36.56666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60401576E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.16666666666666666, "minX": 1.60401564E12, "maxY": 36.56666666666667, "series": [{"data": [[1.60401576E12, 29.766666666666666], [1.60401582E12, 0.16666666666666666], [1.60401564E12, 21.2], [1.6040157E12, 36.56666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60401582E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.16666666666666666, "minX": 1.60401564E12, "maxY": 36.56666666666667, "series": [{"data": [[1.60401576E12, 29.766666666666666], [1.60401582E12, 0.16666666666666666], [1.60401564E12, 21.2], [1.6040157E12, 36.56666666666667]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60401582E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.16666666666666666, "minX": 1.60401564E12, "maxY": 36.56666666666667, "series": [{"data": [[1.60401576E12, 29.766666666666666], [1.60401582E12, 0.16666666666666666], [1.60401564E12, 21.2], [1.6040157E12, 36.56666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60401582E12, "title": "Total Transactions Per Second"}},
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

