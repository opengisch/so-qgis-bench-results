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
        data: {"result": {"minY": 30.0, "minX": 0.0, "maxY": 3576.0, "series": [{"data": [[0.0, 30.0], [0.1, 31.0], [0.2, 32.0], [0.3, 33.0], [0.4, 33.0], [0.5, 33.0], [0.6, 33.0], [0.7, 34.0], [0.8, 34.0], [0.9, 34.0], [1.0, 34.0], [1.1, 35.0], [1.2, 35.0], [1.3, 35.0], [1.4, 35.0], [1.5, 36.0], [1.6, 36.0], [1.7, 36.0], [1.8, 36.0], [1.9, 36.0], [2.0, 36.0], [2.1, 36.0], [2.2, 37.0], [2.3, 37.0], [2.4, 37.0], [2.5, 37.0], [2.6, 37.0], [2.7, 37.0], [2.8, 37.0], [2.9, 37.0], [3.0, 37.0], [3.1, 38.0], [3.2, 38.0], [3.3, 38.0], [3.4, 38.0], [3.5, 38.0], [3.6, 38.0], [3.7, 38.0], [3.8, 38.0], [3.9, 38.0], [4.0, 38.0], [4.1, 38.0], [4.2, 39.0], [4.3, 39.0], [4.4, 39.0], [4.5, 39.0], [4.6, 39.0], [4.7, 39.0], [4.8, 39.0], [4.9, 39.0], [5.0, 39.0], [5.1, 39.0], [5.2, 39.0], [5.3, 39.0], [5.4, 40.0], [5.5, 40.0], [5.6, 40.0], [5.7, 40.0], [5.8, 40.0], [5.9, 40.0], [6.0, 40.0], [6.1, 40.0], [6.2, 40.0], [6.3, 40.0], [6.4, 40.0], [6.5, 40.0], [6.6, 40.0], [6.7, 41.0], [6.8, 41.0], [6.9, 41.0], [7.0, 41.0], [7.1, 41.0], [7.2, 41.0], [7.3, 41.0], [7.4, 41.0], [7.5, 41.0], [7.6, 41.0], [7.7, 41.0], [7.8, 41.0], [7.9, 41.0], [8.0, 41.0], [8.1, 41.0], [8.2, 42.0], [8.3, 42.0], [8.4, 42.0], [8.5, 42.0], [8.6, 42.0], [8.7, 42.0], [8.8, 42.0], [8.9, 42.0], [9.0, 42.0], [9.1, 42.0], [9.2, 42.0], [9.3, 42.0], [9.4, 42.0], [9.5, 42.0], [9.6, 42.0], [9.7, 43.0], [9.8, 43.0], [9.9, 43.0], [10.0, 43.0], [10.1, 43.0], [10.2, 43.0], [10.3, 43.0], [10.4, 43.0], [10.5, 43.0], [10.6, 43.0], [10.7, 43.0], [10.8, 43.0], [10.9, 43.0], [11.0, 43.0], [11.1, 44.0], [11.2, 44.0], [11.3, 44.0], [11.4, 44.0], [11.5, 44.0], [11.6, 44.0], [11.7, 44.0], [11.8, 44.0], [11.9, 44.0], [12.0, 44.0], [12.1, 44.0], [12.2, 44.0], [12.3, 44.0], [12.4, 44.0], [12.5, 45.0], [12.6, 45.0], [12.7, 45.0], [12.8, 45.0], [12.9, 45.0], [13.0, 45.0], [13.1, 45.0], [13.2, 45.0], [13.3, 45.0], [13.4, 45.0], [13.5, 45.0], [13.6, 46.0], [13.7, 46.0], [13.8, 46.0], [13.9, 46.0], [14.0, 46.0], [14.1, 46.0], [14.2, 46.0], [14.3, 46.0], [14.4, 46.0], [14.5, 46.0], [14.6, 47.0], [14.7, 47.0], [14.8, 47.0], [14.9, 47.0], [15.0, 47.0], [15.1, 47.0], [15.2, 47.0], [15.3, 47.0], [15.4, 48.0], [15.5, 48.0], [15.6, 48.0], [15.7, 48.0], [15.8, 48.0], [15.9, 48.0], [16.0, 48.0], [16.1, 48.0], [16.2, 48.0], [16.3, 48.0], [16.4, 49.0], [16.5, 49.0], [16.6, 49.0], [16.7, 49.0], [16.8, 49.0], [16.9, 49.0], [17.0, 49.0], [17.1, 49.0], [17.2, 49.0], [17.3, 50.0], [17.4, 50.0], [17.5, 50.0], [17.6, 50.0], [17.7, 50.0], [17.8, 50.0], [17.9, 50.0], [18.0, 51.0], [18.1, 51.0], [18.2, 51.0], [18.3, 51.0], [18.4, 51.0], [18.5, 51.0], [18.6, 52.0], [18.7, 52.0], [18.8, 52.0], [18.9, 53.0], [19.0, 53.0], [19.1, 53.0], [19.2, 53.0], [19.3, 53.0], [19.4, 53.0], [19.5, 54.0], [19.6, 54.0], [19.7, 54.0], [19.8, 54.0], [19.9, 54.0], [20.0, 54.0], [20.1, 55.0], [20.2, 55.0], [20.3, 55.0], [20.4, 56.0], [20.5, 56.0], [20.6, 56.0], [20.7, 56.0], [20.8, 57.0], [20.9, 57.0], [21.0, 57.0], [21.1, 58.0], [21.2, 58.0], [21.3, 58.0], [21.4, 59.0], [21.5, 59.0], [21.6, 59.0], [21.7, 60.0], [21.8, 60.0], [21.9, 60.0], [22.0, 60.0], [22.1, 60.0], [22.2, 61.0], [22.3, 61.0], [22.4, 61.0], [22.5, 61.0], [22.6, 62.0], [22.7, 62.0], [22.8, 62.0], [22.9, 62.0], [23.0, 63.0], [23.1, 63.0], [23.2, 63.0], [23.3, 63.0], [23.4, 63.0], [23.5, 64.0], [23.6, 64.0], [23.7, 64.0], [23.8, 64.0], [23.9, 65.0], [24.0, 65.0], [24.1, 65.0], [24.2, 66.0], [24.3, 66.0], [24.4, 66.0], [24.5, 66.0], [24.6, 66.0], [24.7, 67.0], [24.8, 67.0], [24.9, 67.0], [25.0, 67.0], [25.1, 68.0], [25.2, 68.0], [25.3, 68.0], [25.4, 69.0], [25.5, 69.0], [25.6, 69.0], [25.7, 69.0], [25.8, 69.0], [25.9, 69.0], [26.0, 70.0], [26.1, 70.0], [26.2, 70.0], [26.3, 70.0], [26.4, 71.0], [26.5, 71.0], [26.6, 71.0], [26.7, 71.0], [26.8, 71.0], [26.9, 72.0], [27.0, 72.0], [27.1, 72.0], [27.2, 72.0], [27.3, 72.0], [27.4, 72.0], [27.5, 73.0], [27.6, 73.0], [27.7, 73.0], [27.8, 73.0], [27.9, 73.0], [28.0, 73.0], [28.1, 73.0], [28.2, 74.0], [28.3, 74.0], [28.4, 74.0], [28.5, 74.0], [28.6, 74.0], [28.7, 75.0], [28.8, 75.0], [28.9, 75.0], [29.0, 75.0], [29.1, 75.0], [29.2, 76.0], [29.3, 76.0], [29.4, 76.0], [29.5, 76.0], [29.6, 76.0], [29.7, 77.0], [29.8, 77.0], [29.9, 77.0], [30.0, 77.0], [30.1, 77.0], [30.2, 77.0], [30.3, 78.0], [30.4, 78.0], [30.5, 78.0], [30.6, 78.0], [30.7, 79.0], [30.8, 79.0], [30.9, 79.0], [31.0, 79.0], [31.1, 79.0], [31.2, 79.0], [31.3, 80.0], [31.4, 80.0], [31.5, 80.0], [31.6, 80.0], [31.7, 80.0], [31.8, 81.0], [31.9, 81.0], [32.0, 81.0], [32.1, 81.0], [32.2, 81.0], [32.3, 81.0], [32.4, 81.0], [32.5, 81.0], [32.6, 82.0], [32.7, 82.0], [32.8, 82.0], [32.9, 82.0], [33.0, 83.0], [33.1, 83.0], [33.2, 83.0], [33.3, 84.0], [33.4, 84.0], [33.5, 84.0], [33.6, 84.0], [33.7, 84.0], [33.8, 84.0], [33.9, 84.0], [34.0, 85.0], [34.1, 85.0], [34.2, 85.0], [34.3, 85.0], [34.4, 85.0], [34.5, 86.0], [34.6, 86.0], [34.7, 86.0], [34.8, 86.0], [34.9, 87.0], [35.0, 87.0], [35.1, 87.0], [35.2, 87.0], [35.3, 87.0], [35.4, 87.0], [35.5, 88.0], [35.6, 88.0], [35.7, 88.0], [35.8, 88.0], [35.9, 89.0], [36.0, 89.0], [36.1, 89.0], [36.2, 89.0], [36.3, 89.0], [36.4, 90.0], [36.5, 90.0], [36.6, 91.0], [36.7, 91.0], [36.8, 91.0], [36.9, 91.0], [37.0, 92.0], [37.1, 92.0], [37.2, 93.0], [37.3, 93.0], [37.4, 93.0], [37.5, 94.0], [37.6, 94.0], [37.7, 95.0], [37.8, 95.0], [37.9, 95.0], [38.0, 96.0], [38.1, 96.0], [38.2, 97.0], [38.3, 98.0], [38.4, 99.0], [38.5, 100.0], [38.6, 101.0], [38.7, 101.0], [38.8, 102.0], [38.9, 103.0], [39.0, 104.0], [39.1, 105.0], [39.2, 106.0], [39.3, 106.0], [39.4, 107.0], [39.5, 107.0], [39.6, 108.0], [39.7, 110.0], [39.8, 111.0], [39.9, 111.0], [40.0, 112.0], [40.1, 113.0], [40.2, 114.0], [40.3, 114.0], [40.4, 115.0], [40.5, 116.0], [40.6, 116.0], [40.7, 117.0], [40.8, 117.0], [40.9, 117.0], [41.0, 118.0], [41.1, 118.0], [41.2, 118.0], [41.3, 119.0], [41.4, 120.0], [41.5, 120.0], [41.6, 121.0], [41.7, 121.0], [41.8, 122.0], [41.9, 122.0], [42.0, 123.0], [42.1, 123.0], [42.2, 124.0], [42.3, 124.0], [42.4, 125.0], [42.5, 125.0], [42.6, 125.0], [42.7, 125.0], [42.8, 126.0], [42.9, 126.0], [43.0, 127.0], [43.1, 127.0], [43.2, 128.0], [43.3, 128.0], [43.4, 128.0], [43.5, 129.0], [43.6, 129.0], [43.7, 130.0], [43.8, 130.0], [43.9, 130.0], [44.0, 131.0], [44.1, 132.0], [44.2, 132.0], [44.3, 133.0], [44.4, 134.0], [44.5, 134.0], [44.6, 135.0], [44.7, 135.0], [44.8, 136.0], [44.9, 136.0], [45.0, 137.0], [45.1, 137.0], [45.2, 138.0], [45.3, 139.0], [45.4, 140.0], [45.5, 140.0], [45.6, 140.0], [45.7, 141.0], [45.8, 143.0], [45.9, 143.0], [46.0, 145.0], [46.1, 146.0], [46.2, 146.0], [46.3, 147.0], [46.4, 148.0], [46.5, 149.0], [46.6, 151.0], [46.7, 153.0], [46.8, 154.0], [46.9, 154.0], [47.0, 156.0], [47.1, 158.0], [47.2, 159.0], [47.3, 159.0], [47.4, 162.0], [47.5, 163.0], [47.6, 163.0], [47.7, 164.0], [47.8, 165.0], [47.9, 165.0], [48.0, 168.0], [48.1, 169.0], [48.2, 170.0], [48.3, 171.0], [48.4, 172.0], [48.5, 173.0], [48.6, 174.0], [48.7, 174.0], [48.8, 175.0], [48.9, 175.0], [49.0, 177.0], [49.1, 177.0], [49.2, 178.0], [49.3, 179.0], [49.4, 180.0], [49.5, 181.0], [49.6, 181.0], [49.7, 182.0], [49.8, 183.0], [49.9, 185.0], [50.0, 185.0], [50.1, 187.0], [50.2, 188.0], [50.3, 189.0], [50.4, 189.0], [50.5, 190.0], [50.6, 191.0], [50.7, 192.0], [50.8, 192.0], [50.9, 193.0], [51.0, 194.0], [51.1, 195.0], [51.2, 196.0], [51.3, 197.0], [51.4, 197.0], [51.5, 198.0], [51.6, 198.0], [51.7, 199.0], [51.8, 200.0], [51.9, 201.0], [52.0, 203.0], [52.1, 203.0], [52.2, 204.0], [52.3, 205.0], [52.4, 205.0], [52.5, 206.0], [52.6, 207.0], [52.7, 208.0], [52.8, 208.0], [52.9, 209.0], [53.0, 209.0], [53.1, 210.0], [53.2, 211.0], [53.3, 212.0], [53.4, 212.0], [53.5, 213.0], [53.6, 214.0], [53.7, 214.0], [53.8, 215.0], [53.9, 216.0], [54.0, 216.0], [54.1, 217.0], [54.2, 218.0], [54.3, 219.0], [54.4, 219.0], [54.5, 220.0], [54.6, 221.0], [54.7, 222.0], [54.8, 222.0], [54.9, 223.0], [55.0, 224.0], [55.1, 224.0], [55.2, 225.0], [55.3, 226.0], [55.4, 227.0], [55.5, 228.0], [55.6, 229.0], [55.7, 229.0], [55.8, 230.0], [55.9, 231.0], [56.0, 231.0], [56.1, 232.0], [56.2, 234.0], [56.3, 234.0], [56.4, 235.0], [56.5, 235.0], [56.6, 236.0], [56.7, 237.0], [56.8, 238.0], [56.9, 239.0], [57.0, 239.0], [57.1, 240.0], [57.2, 242.0], [57.3, 243.0], [57.4, 243.0], [57.5, 245.0], [57.6, 245.0], [57.7, 247.0], [57.8, 247.0], [57.9, 248.0], [58.0, 248.0], [58.1, 249.0], [58.2, 250.0], [58.3, 250.0], [58.4, 251.0], [58.5, 252.0], [58.6, 254.0], [58.7, 254.0], [58.8, 255.0], [58.9, 257.0], [59.0, 258.0], [59.1, 260.0], [59.2, 261.0], [59.3, 262.0], [59.4, 262.0], [59.5, 263.0], [59.6, 264.0], [59.7, 265.0], [59.8, 267.0], [59.9, 268.0], [60.0, 270.0], [60.1, 270.0], [60.2, 270.0], [60.3, 271.0], [60.4, 273.0], [60.5, 273.0], [60.6, 274.0], [60.7, 276.0], [60.8, 278.0], [60.9, 279.0], [61.0, 279.0], [61.1, 280.0], [61.2, 281.0], [61.3, 283.0], [61.4, 284.0], [61.5, 285.0], [61.6, 286.0], [61.7, 287.0], [61.8, 287.0], [61.9, 288.0], [62.0, 289.0], [62.1, 291.0], [62.2, 293.0], [62.3, 295.0], [62.4, 295.0], [62.5, 296.0], [62.6, 298.0], [62.7, 298.0], [62.8, 299.0], [62.9, 300.0], [63.0, 302.0], [63.1, 303.0], [63.2, 304.0], [63.3, 305.0], [63.4, 307.0], [63.5, 308.0], [63.6, 309.0], [63.7, 310.0], [63.8, 312.0], [63.9, 312.0], [64.0, 314.0], [64.1, 317.0], [64.2, 318.0], [64.3, 319.0], [64.4, 320.0], [64.5, 321.0], [64.6, 323.0], [64.7, 325.0], [64.8, 326.0], [64.9, 328.0], [65.0, 329.0], [65.1, 331.0], [65.2, 332.0], [65.3, 335.0], [65.4, 337.0], [65.5, 338.0], [65.6, 338.0], [65.7, 339.0], [65.8, 340.0], [65.9, 342.0], [66.0, 343.0], [66.1, 345.0], [66.2, 346.0], [66.3, 347.0], [66.4, 349.0], [66.5, 350.0], [66.6, 351.0], [66.7, 352.0], [66.8, 353.0], [66.9, 353.0], [67.0, 355.0], [67.1, 356.0], [67.2, 356.0], [67.3, 358.0], [67.4, 359.0], [67.5, 360.0], [67.6, 362.0], [67.7, 363.0], [67.8, 363.0], [67.9, 366.0], [68.0, 369.0], [68.1, 371.0], [68.2, 372.0], [68.3, 373.0], [68.4, 375.0], [68.5, 376.0], [68.6, 377.0], [68.7, 378.0], [68.8, 380.0], [68.9, 380.0], [69.0, 381.0], [69.1, 383.0], [69.2, 384.0], [69.3, 386.0], [69.4, 386.0], [69.5, 387.0], [69.6, 389.0], [69.7, 390.0], [69.8, 392.0], [69.9, 392.0], [70.0, 393.0], [70.1, 394.0], [70.2, 394.0], [70.3, 395.0], [70.4, 396.0], [70.5, 398.0], [70.6, 400.0], [70.7, 401.0], [70.8, 403.0], [70.9, 403.0], [71.0, 404.0], [71.1, 407.0], [71.2, 408.0], [71.3, 408.0], [71.4, 410.0], [71.5, 412.0], [71.6, 414.0], [71.7, 415.0], [71.8, 417.0], [71.9, 419.0], [72.0, 422.0], [72.1, 422.0], [72.2, 424.0], [72.3, 426.0], [72.4, 427.0], [72.5, 429.0], [72.6, 430.0], [72.7, 431.0], [72.8, 433.0], [72.9, 433.0], [73.0, 434.0], [73.1, 435.0], [73.2, 436.0], [73.3, 437.0], [73.4, 438.0], [73.5, 441.0], [73.6, 443.0], [73.7, 445.0], [73.8, 447.0], [73.9, 448.0], [74.0, 449.0], [74.1, 450.0], [74.2, 451.0], [74.3, 453.0], [74.4, 455.0], [74.5, 456.0], [74.6, 458.0], [74.7, 460.0], [74.8, 461.0], [74.9, 462.0], [75.0, 463.0], [75.1, 464.0], [75.2, 466.0], [75.3, 468.0], [75.4, 470.0], [75.5, 471.0], [75.6, 473.0], [75.7, 476.0], [75.8, 479.0], [75.9, 480.0], [76.0, 483.0], [76.1, 485.0], [76.2, 486.0], [76.3, 488.0], [76.4, 491.0], [76.5, 492.0], [76.6, 493.0], [76.7, 495.0], [76.8, 497.0], [76.9, 499.0], [77.0, 500.0], [77.1, 503.0], [77.2, 504.0], [77.3, 505.0], [77.4, 506.0], [77.5, 508.0], [77.6, 510.0], [77.7, 511.0], [77.8, 512.0], [77.9, 513.0], [78.0, 515.0], [78.1, 517.0], [78.2, 518.0], [78.3, 519.0], [78.4, 520.0], [78.5, 522.0], [78.6, 525.0], [78.7, 527.0], [78.8, 530.0], [78.9, 531.0], [79.0, 532.0], [79.1, 534.0], [79.2, 537.0], [79.3, 538.0], [79.4, 540.0], [79.5, 541.0], [79.6, 544.0], [79.7, 545.0], [79.8, 549.0], [79.9, 551.0], [80.0, 554.0], [80.1, 555.0], [80.2, 557.0], [80.3, 558.0], [80.4, 561.0], [80.5, 564.0], [80.6, 567.0], [80.7, 568.0], [80.8, 570.0], [80.9, 572.0], [81.0, 573.0], [81.1, 574.0], [81.2, 576.0], [81.3, 578.0], [81.4, 579.0], [81.5, 581.0], [81.6, 582.0], [81.7, 584.0], [81.8, 585.0], [81.9, 587.0], [82.0, 589.0], [82.1, 591.0], [82.2, 593.0], [82.3, 594.0], [82.4, 595.0], [82.5, 598.0], [82.6, 601.0], [82.7, 603.0], [82.8, 604.0], [82.9, 607.0], [83.0, 608.0], [83.1, 610.0], [83.2, 612.0], [83.3, 615.0], [83.4, 616.0], [83.5, 618.0], [83.6, 621.0], [83.7, 624.0], [83.8, 626.0], [83.9, 628.0], [84.0, 630.0], [84.1, 632.0], [84.2, 635.0], [84.3, 638.0], [84.4, 640.0], [84.5, 643.0], [84.6, 645.0], [84.7, 647.0], [84.8, 649.0], [84.9, 652.0], [85.0, 653.0], [85.1, 656.0], [85.2, 659.0], [85.3, 660.0], [85.4, 662.0], [85.5, 665.0], [85.6, 666.0], [85.7, 668.0], [85.8, 669.0], [85.9, 671.0], [86.0, 672.0], [86.1, 673.0], [86.2, 674.0], [86.3, 676.0], [86.4, 678.0], [86.5, 680.0], [86.6, 684.0], [86.7, 686.0], [86.8, 687.0], [86.9, 688.0], [87.0, 689.0], [87.1, 691.0], [87.2, 696.0], [87.3, 697.0], [87.4, 699.0], [87.5, 700.0], [87.6, 701.0], [87.7, 703.0], [87.8, 705.0], [87.9, 706.0], [88.0, 709.0], [88.1, 711.0], [88.2, 713.0], [88.3, 715.0], [88.4, 718.0], [88.5, 722.0], [88.6, 725.0], [88.7, 728.0], [88.8, 730.0], [88.9, 732.0], [89.0, 736.0], [89.1, 740.0], [89.2, 742.0], [89.3, 746.0], [89.4, 748.0], [89.5, 751.0], [89.6, 754.0], [89.7, 759.0], [89.8, 766.0], [89.9, 772.0], [90.0, 777.0], [90.1, 781.0], [90.2, 784.0], [90.3, 789.0], [90.4, 791.0], [90.5, 796.0], [90.6, 799.0], [90.7, 807.0], [90.8, 808.0], [90.9, 812.0], [91.0, 815.0], [91.1, 819.0], [91.2, 825.0], [91.3, 826.0], [91.4, 832.0], [91.5, 837.0], [91.6, 844.0], [91.7, 849.0], [91.8, 854.0], [91.9, 859.0], [92.0, 861.0], [92.1, 865.0], [92.2, 866.0], [92.3, 873.0], [92.4, 879.0], [92.5, 882.0], [92.6, 889.0], [92.7, 891.0], [92.8, 894.0], [92.9, 899.0], [93.0, 906.0], [93.1, 913.0], [93.2, 920.0], [93.3, 926.0], [93.4, 929.0], [93.5, 930.0], [93.6, 936.0], [93.7, 948.0], [93.8, 951.0], [93.9, 957.0], [94.0, 965.0], [94.1, 970.0], [94.2, 972.0], [94.3, 976.0], [94.4, 983.0], [94.5, 988.0], [94.6, 992.0], [94.7, 999.0], [94.8, 1004.0], [94.9, 1009.0], [95.0, 1013.0], [95.1, 1033.0], [95.2, 1042.0], [95.3, 1051.0], [95.4, 1064.0], [95.5, 1071.0], [95.6, 1080.0], [95.7, 1090.0], [95.8, 1095.0], [95.9, 1102.0], [96.0, 1107.0], [96.1, 1117.0], [96.2, 1129.0], [96.3, 1134.0], [96.4, 1141.0], [96.5, 1147.0], [96.6, 1163.0], [96.7, 1171.0], [96.8, 1187.0], [96.9, 1204.0], [97.0, 1211.0], [97.1, 1246.0], [97.2, 1256.0], [97.3, 1275.0], [97.4, 1296.0], [97.5, 1316.0], [97.6, 1334.0], [97.7, 1354.0], [97.8, 1395.0], [97.9, 1413.0], [98.0, 1431.0], [98.1, 1460.0], [98.2, 1475.0], [98.3, 1489.0], [98.4, 1512.0], [98.5, 1560.0], [98.6, 1599.0], [98.7, 1620.0], [98.8, 1648.0], [98.9, 1692.0], [99.0, 1749.0], [99.1, 1816.0], [99.2, 1835.0], [99.3, 1882.0], [99.4, 1984.0], [99.5, 2035.0], [99.6, 2070.0], [99.7, 2172.0], [99.8, 2236.0], [99.9, 2469.0], [100.0, 3576.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 2023.0, "series": [{"data": [[0.0, 2023.0], [600.0, 260.0], [700.0, 166.0], [800.0, 120.0], [900.0, 96.0], [1000.0, 61.0], [1100.0, 50.0], [1200.0, 30.0], [1300.0, 24.0], [1400.0, 25.0], [1500.0, 14.0], [100.0, 699.0], [1600.0, 16.0], [1700.0, 8.0], [1800.0, 16.0], [1900.0, 2.0], [2000.0, 11.0], [2100.0, 6.0], [2200.0, 6.0], [2300.0, 1.0], [2400.0, 2.0], [2500.0, 2.0], [200.0, 586.0], [3200.0, 1.0], [3500.0, 2.0], [300.0, 405.0], [400.0, 335.0], [500.0, 295.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3500.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 86.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 4052.0, "series": [{"data": [[0.0, 4052.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1124.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 86.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.932098765432098, "minX": 1.60422768E12, "maxY": 10.0, "series": [{"data": [[1.60422768E12, 9.932098765432098], [1.60422786E12, 9.959128065395097], [1.60422774E12, 10.0], [1.6042278E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60422786E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 319.24776062511796, "minX": 1.0, "maxY": 3576.0, "series": [{"data": [[4.0, 1203.5], [8.0, 1320.0], [2.0, 2176.0], [1.0, 3278.0], [9.0, 596.5], [5.0, 712.0], [10.0, 319.24776062511796], [6.0, 1065.0], [3.0, 3576.0], [7.0, 1863.5]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.98726719878372, 322.5562523755217]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 2912.866666666667, "minX": 1.60422768E12, "maxY": 1626126.75, "series": [{"data": [[1.60422768E12, 131782.31666666668], [1.60422786E12, 1130445.9666666666], [1.60422774E12, 1626126.75], [1.6042278E12, 1362628.5833333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60422768E12, 2912.866666666667], [1.60422786E12, 9740.45], [1.60422774E12, 12948.866666666667], [1.6042278E12, 19888.766666666666]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60422786E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 254.28492097394272, "minX": 1.60422768E12, "maxY": 401.05614973262055, "series": [{"data": [[1.60422768E12, 312.2746913580249], [1.60422786E12, 364.08083560399587], [1.60422774E12, 401.05614973262055], [1.6042278E12, 254.28492097394272]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60422786E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 253.9547202050406, "minX": 1.60422768E12, "maxY": 400.5307486631017, "series": [{"data": [[1.60422768E12, 312.04629629629585], [1.60422786E12, 363.54223433242424], [1.60422774E12, 400.5307486631017], [1.6042278E12, 253.9547202050406]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60422786E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.00802139037433155, "minX": 1.60422768E12, "maxY": 0.3148148148148148, "series": [{"data": [[1.60422768E12, 0.3148148148148148], [1.60422786E12, 0.009990917347865579], [1.60422774E12, 0.00802139037433155], [1.6042278E12, 0.009824861170439991]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60422786E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 30.0, "minX": 1.60422768E12, "maxY": 3576.0, "series": [{"data": [[1.60422768E12, 1398.0], [1.60422786E12, 3576.0], [1.60422774E12, 2236.0], [1.6042278E12, 2172.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60422768E12, 36.92499992251396], [1.60422786E12, 33.0], [1.60422774E12, 34.0], [1.6042278E12, 35.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60422768E12, 37.217500030994415], [1.60422786E12, 33.0], [1.60422774E12, 34.0], [1.6042278E12, 35.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60422768E12, 37.08749996125698], [1.60422786E12, 33.0], [1.60422774E12, 34.0], [1.6042278E12, 35.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60422768E12, 36.0], [1.60422786E12, 30.0], [1.60422774E12, 31.0], [1.6042278E12, 32.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60422768E12, 116.0], [1.60422786E12, 220.0], [1.60422774E12, 271.0], [1.6042278E12, 135.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60422786E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 46.5, "minX": 1.0, "maxY": 3278.0, "series": [{"data": [[2.0, 2876.0], [4.0, 2124.5], [5.0, 1627.0], [6.0, 1205.0], [8.0, 932.0], [9.0, 430.0], [10.0, 738.5], [11.0, 724.0], [12.0, 652.5], [13.0, 667.5], [14.0, 647.0], [15.0, 500.0], [16.0, 556.5], [17.0, 458.5], [18.0, 541.0], [19.0, 404.0], [20.0, 411.0], [21.0, 400.0], [22.0, 420.5], [23.0, 330.5], [24.0, 259.5], [25.0, 382.0], [26.0, 332.0], [27.0, 264.0], [28.0, 290.5], [29.0, 214.0], [30.0, 273.5], [31.0, 236.5], [33.0, 206.5], [34.0, 129.5], [35.0, 85.0], [36.0, 229.5], [37.0, 247.5], [38.0, 187.5], [39.0, 124.0], [41.0, 94.0], [40.0, 93.5], [43.0, 49.0], [42.0, 207.0], [44.0, 75.5], [45.0, 118.0], [46.0, 81.5], [48.0, 92.5], [49.0, 116.0], [50.0, 173.0], [52.0, 133.0], [55.0, 76.5], [54.0, 81.0], [57.0, 129.0], [56.0, 103.0], [61.0, 126.0], [63.0, 85.0], [66.0, 87.0], [64.0, 69.5], [71.0, 140.0], [68.0, 101.0], [73.0, 90.0], [72.0, 83.0], [76.0, 84.0], [79.0, 97.0], [85.0, 80.0], [84.0, 46.5], [93.0, 79.0], [94.0, 51.0], [1.0, 3278.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 94.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 46.5, "minX": 1.0, "maxY": 3278.0, "series": [{"data": [[2.0, 2875.5], [4.0, 2124.0], [5.0, 1626.0], [6.0, 1205.0], [8.0, 930.5], [9.0, 430.0], [10.0, 738.0], [11.0, 724.0], [12.0, 651.5], [13.0, 667.5], [14.0, 646.5], [15.0, 498.5], [16.0, 556.5], [17.0, 456.5], [18.0, 540.5], [19.0, 403.0], [20.0, 411.0], [21.0, 399.0], [22.0, 419.0], [23.0, 329.5], [24.0, 259.0], [25.0, 382.0], [26.0, 330.5], [27.0, 263.0], [28.0, 290.0], [29.0, 214.0], [30.0, 273.0], [31.0, 236.0], [33.0, 206.5], [34.0, 129.0], [35.0, 85.0], [36.0, 229.5], [37.0, 245.5], [38.0, 187.5], [39.0, 124.0], [41.0, 94.0], [40.0, 93.5], [43.0, 49.0], [42.0, 207.0], [44.0, 75.5], [45.0, 118.0], [46.0, 81.5], [48.0, 92.0], [49.0, 116.0], [50.0, 172.5], [52.0, 132.5], [55.0, 76.5], [54.0, 81.0], [57.0, 129.0], [56.0, 103.0], [61.0, 126.0], [63.0, 85.0], [66.0, 87.0], [64.0, 69.5], [71.0, 140.0], [68.0, 101.0], [73.0, 90.0], [72.0, 83.0], [76.0, 83.5], [79.0, 97.0], [85.0, 80.0], [84.0, 46.5], [93.0, 79.0], [94.0, 51.0], [1.0, 3278.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 94.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 5.566666666666666, "minX": 1.60422768E12, "maxY": 39.016666666666666, "series": [{"data": [[1.60422768E12, 5.566666666666666], [1.60422786E12, 18.183333333333334], [1.60422774E12, 24.933333333333334], [1.6042278E12, 39.016666666666666]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60422786E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 5.4, "minX": 1.60422768E12, "maxY": 39.016666666666666, "series": [{"data": [[1.60422768E12, 5.4], [1.60422786E12, 18.35], [1.60422774E12, 24.933333333333334], [1.6042278E12, 39.016666666666666]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60422786E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 5.4, "minX": 1.60422768E12, "maxY": 39.016666666666666, "series": [{"data": [[1.60422768E12, 5.4], [1.60422786E12, 18.35], [1.60422774E12, 24.933333333333334], [1.6042278E12, 39.016666666666666]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60422786E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 5.4, "minX": 1.60422768E12, "maxY": 39.016666666666666, "series": [{"data": [[1.60422768E12, 5.4], [1.60422786E12, 18.35], [1.60422774E12, 24.933333333333334], [1.6042278E12, 39.016666666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60422786E12, "title": "Total Transactions Per Second"}},
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

