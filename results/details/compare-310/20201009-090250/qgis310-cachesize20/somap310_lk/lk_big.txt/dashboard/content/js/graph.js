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
        data: {"result": {"minY": 27.0, "minX": 0.0, "maxY": 3343.0, "series": [{"data": [[0.0, 27.0], [0.1, 28.0], [0.2, 29.0], [0.3, 29.0], [0.4, 29.0], [0.5, 30.0], [0.6, 30.0], [0.7, 30.0], [0.8, 30.0], [0.9, 30.0], [1.0, 30.0], [1.1, 30.0], [1.2, 31.0], [1.3, 31.0], [1.4, 31.0], [1.5, 31.0], [1.6, 31.0], [1.7, 31.0], [1.8, 32.0], [1.9, 32.0], [2.0, 32.0], [2.1, 32.0], [2.2, 33.0], [2.3, 33.0], [2.4, 33.0], [2.5, 33.0], [2.6, 33.0], [2.7, 33.0], [2.8, 33.0], [2.9, 33.0], [3.0, 33.0], [3.1, 34.0], [3.2, 34.0], [3.3, 34.0], [3.4, 34.0], [3.5, 34.0], [3.6, 34.0], [3.7, 34.0], [3.8, 34.0], [3.9, 35.0], [4.0, 35.0], [4.1, 35.0], [4.2, 35.0], [4.3, 35.0], [4.4, 35.0], [4.5, 35.0], [4.6, 35.0], [4.7, 35.0], [4.8, 35.0], [4.9, 35.0], [5.0, 35.0], [5.1, 35.0], [5.2, 35.0], [5.3, 35.0], [5.4, 35.0], [5.5, 35.0], [5.6, 36.0], [5.7, 36.0], [5.8, 36.0], [5.9, 36.0], [6.0, 36.0], [6.1, 36.0], [6.2, 36.0], [6.3, 36.0], [6.4, 36.0], [6.5, 36.0], [6.6, 36.0], [6.7, 36.0], [6.8, 36.0], [6.9, 36.0], [7.0, 36.0], [7.1, 36.0], [7.2, 36.0], [7.3, 36.0], [7.4, 36.0], [7.5, 36.0], [7.6, 36.0], [7.7, 36.0], [7.8, 37.0], [7.9, 37.0], [8.0, 37.0], [8.1, 37.0], [8.2, 37.0], [8.3, 37.0], [8.4, 37.0], [8.5, 37.0], [8.6, 37.0], [8.7, 37.0], [8.8, 37.0], [8.9, 37.0], [9.0, 37.0], [9.1, 37.0], [9.2, 37.0], [9.3, 37.0], [9.4, 37.0], [9.5, 37.0], [9.6, 37.0], [9.7, 37.0], [9.8, 37.0], [9.9, 37.0], [10.0, 37.0], [10.1, 38.0], [10.2, 38.0], [10.3, 38.0], [10.4, 38.0], [10.5, 38.0], [10.6, 38.0], [10.7, 38.0], [10.8, 38.0], [10.9, 38.0], [11.0, 38.0], [11.1, 38.0], [11.2, 38.0], [11.3, 38.0], [11.4, 38.0], [11.5, 38.0], [11.6, 38.0], [11.7, 38.0], [11.8, 38.0], [11.9, 38.0], [12.0, 38.0], [12.1, 39.0], [12.2, 39.0], [12.3, 39.0], [12.4, 39.0], [12.5, 39.0], [12.6, 39.0], [12.7, 39.0], [12.8, 39.0], [12.9, 39.0], [13.0, 39.0], [13.1, 39.0], [13.2, 39.0], [13.3, 39.0], [13.4, 39.0], [13.5, 39.0], [13.6, 39.0], [13.7, 39.0], [13.8, 39.0], [13.9, 39.0], [14.0, 39.0], [14.1, 39.0], [14.2, 40.0], [14.3, 40.0], [14.4, 40.0], [14.5, 40.0], [14.6, 40.0], [14.7, 40.0], [14.8, 40.0], [14.9, 40.0], [15.0, 40.0], [15.1, 40.0], [15.2, 40.0], [15.3, 40.0], [15.4, 40.0], [15.5, 40.0], [15.6, 40.0], [15.7, 40.0], [15.8, 40.0], [15.9, 40.0], [16.0, 41.0], [16.1, 41.0], [16.2, 41.0], [16.3, 41.0], [16.4, 41.0], [16.5, 41.0], [16.6, 41.0], [16.7, 41.0], [16.8, 41.0], [16.9, 41.0], [17.0, 41.0], [17.1, 41.0], [17.2, 41.0], [17.3, 41.0], [17.4, 41.0], [17.5, 41.0], [17.6, 41.0], [17.7, 41.0], [17.8, 41.0], [17.9, 42.0], [18.0, 42.0], [18.1, 42.0], [18.2, 42.0], [18.3, 42.0], [18.4, 42.0], [18.5, 42.0], [18.6, 42.0], [18.7, 42.0], [18.8, 42.0], [18.9, 42.0], [19.0, 42.0], [19.1, 42.0], [19.2, 42.0], [19.3, 43.0], [19.4, 43.0], [19.5, 43.0], [19.6, 43.0], [19.7, 43.0], [19.8, 43.0], [19.9, 43.0], [20.0, 43.0], [20.1, 43.0], [20.2, 43.0], [20.3, 43.0], [20.4, 43.0], [20.5, 44.0], [20.6, 44.0], [20.7, 44.0], [20.8, 44.0], [20.9, 44.0], [21.0, 44.0], [21.1, 44.0], [21.2, 44.0], [21.3, 44.0], [21.4, 45.0], [21.5, 45.0], [21.6, 45.0], [21.7, 45.0], [21.8, 45.0], [21.9, 45.0], [22.0, 45.0], [22.1, 46.0], [22.2, 46.0], [22.3, 46.0], [22.4, 46.0], [22.5, 46.0], [22.6, 46.0], [22.7, 46.0], [22.8, 47.0], [22.9, 47.0], [23.0, 47.0], [23.1, 47.0], [23.2, 47.0], [23.3, 47.0], [23.4, 47.0], [23.5, 47.0], [23.6, 47.0], [23.7, 48.0], [23.8, 48.0], [23.9, 48.0], [24.0, 48.0], [24.1, 48.0], [24.2, 49.0], [24.3, 49.0], [24.4, 49.0], [24.5, 49.0], [24.6, 50.0], [24.7, 50.0], [24.8, 50.0], [24.9, 50.0], [25.0, 51.0], [25.1, 51.0], [25.2, 51.0], [25.3, 51.0], [25.4, 52.0], [25.5, 52.0], [25.6, 53.0], [25.7, 53.0], [25.8, 54.0], [25.9, 54.0], [26.0, 54.0], [26.1, 55.0], [26.2, 55.0], [26.3, 55.0], [26.4, 56.0], [26.5, 56.0], [26.6, 56.0], [26.7, 56.0], [26.8, 57.0], [26.9, 57.0], [27.0, 57.0], [27.1, 57.0], [27.2, 58.0], [27.3, 58.0], [27.4, 58.0], [27.5, 59.0], [27.6, 59.0], [27.7, 59.0], [27.8, 59.0], [27.9, 60.0], [28.0, 60.0], [28.1, 60.0], [28.2, 61.0], [28.3, 61.0], [28.4, 61.0], [28.5, 61.0], [28.6, 61.0], [28.7, 61.0], [28.8, 62.0], [28.9, 62.0], [29.0, 62.0], [29.1, 62.0], [29.2, 62.0], [29.3, 63.0], [29.4, 63.0], [29.5, 63.0], [29.6, 63.0], [29.7, 63.0], [29.8, 63.0], [29.9, 64.0], [30.0, 64.0], [30.1, 64.0], [30.2, 64.0], [30.3, 64.0], [30.4, 65.0], [30.5, 65.0], [30.6, 65.0], [30.7, 65.0], [30.8, 66.0], [30.9, 66.0], [31.0, 66.0], [31.1, 66.0], [31.2, 66.0], [31.3, 67.0], [31.4, 67.0], [31.5, 67.0], [31.6, 67.0], [31.7, 68.0], [31.8, 68.0], [31.9, 68.0], [32.0, 68.0], [32.1, 68.0], [32.2, 68.0], [32.3, 69.0], [32.4, 69.0], [32.5, 69.0], [32.6, 69.0], [32.7, 69.0], [32.8, 69.0], [32.9, 69.0], [33.0, 70.0], [33.1, 70.0], [33.2, 70.0], [33.3, 70.0], [33.4, 71.0], [33.5, 71.0], [33.6, 71.0], [33.7, 71.0], [33.8, 71.0], [33.9, 71.0], [34.0, 72.0], [34.1, 72.0], [34.2, 72.0], [34.3, 73.0], [34.4, 73.0], [34.5, 73.0], [34.6, 73.0], [34.7, 73.0], [34.8, 73.0], [34.9, 74.0], [35.0, 74.0], [35.1, 74.0], [35.2, 74.0], [35.3, 74.0], [35.4, 75.0], [35.5, 75.0], [35.6, 75.0], [35.7, 75.0], [35.8, 75.0], [35.9, 75.0], [36.0, 76.0], [36.1, 76.0], [36.2, 76.0], [36.3, 76.0], [36.4, 77.0], [36.5, 77.0], [36.6, 77.0], [36.7, 77.0], [36.8, 77.0], [36.9, 78.0], [37.0, 78.0], [37.1, 78.0], [37.2, 79.0], [37.3, 79.0], [37.4, 79.0], [37.5, 79.0], [37.6, 79.0], [37.7, 80.0], [37.8, 80.0], [37.9, 80.0], [38.0, 80.0], [38.1, 81.0], [38.2, 81.0], [38.3, 81.0], [38.4, 81.0], [38.5, 82.0], [38.6, 82.0], [38.7, 82.0], [38.8, 82.0], [38.9, 83.0], [39.0, 83.0], [39.1, 84.0], [39.2, 84.0], [39.3, 84.0], [39.4, 85.0], [39.5, 86.0], [39.6, 86.0], [39.7, 86.0], [39.8, 87.0], [39.9, 87.0], [40.0, 88.0], [40.1, 88.0], [40.2, 89.0], [40.3, 89.0], [40.4, 90.0], [40.5, 91.0], [40.6, 91.0], [40.7, 92.0], [40.8, 92.0], [40.9, 93.0], [41.0, 94.0], [41.1, 94.0], [41.2, 95.0], [41.3, 96.0], [41.4, 97.0], [41.5, 97.0], [41.6, 98.0], [41.7, 100.0], [41.8, 101.0], [41.9, 102.0], [42.0, 103.0], [42.1, 104.0], [42.2, 105.0], [42.3, 105.0], [42.4, 106.0], [42.5, 107.0], [42.6, 107.0], [42.7, 108.0], [42.8, 109.0], [42.9, 110.0], [43.0, 110.0], [43.1, 110.0], [43.2, 111.0], [43.3, 111.0], [43.4, 112.0], [43.5, 113.0], [43.6, 113.0], [43.7, 113.0], [43.8, 114.0], [43.9, 115.0], [44.0, 115.0], [44.1, 115.0], [44.2, 116.0], [44.3, 116.0], [44.4, 117.0], [44.5, 118.0], [44.6, 118.0], [44.7, 119.0], [44.8, 119.0], [44.9, 120.0], [45.0, 120.0], [45.1, 121.0], [45.2, 121.0], [45.3, 122.0], [45.4, 122.0], [45.5, 123.0], [45.6, 123.0], [45.7, 123.0], [45.8, 124.0], [45.9, 125.0], [46.0, 125.0], [46.1, 125.0], [46.2, 126.0], [46.3, 126.0], [46.4, 128.0], [46.5, 128.0], [46.6, 129.0], [46.7, 130.0], [46.8, 131.0], [46.9, 132.0], [47.0, 132.0], [47.1, 134.0], [47.2, 135.0], [47.3, 136.0], [47.4, 137.0], [47.5, 138.0], [47.6, 139.0], [47.7, 140.0], [47.8, 141.0], [47.9, 142.0], [48.0, 143.0], [48.1, 144.0], [48.2, 146.0], [48.3, 147.0], [48.4, 148.0], [48.5, 150.0], [48.6, 151.0], [48.7, 152.0], [48.8, 153.0], [48.9, 155.0], [49.0, 157.0], [49.1, 157.0], [49.2, 158.0], [49.3, 160.0], [49.4, 162.0], [49.5, 162.0], [49.6, 163.0], [49.7, 164.0], [49.8, 165.0], [49.9, 166.0], [50.0, 166.0], [50.1, 169.0], [50.2, 170.0], [50.3, 171.0], [50.4, 173.0], [50.5, 174.0], [50.6, 175.0], [50.7, 175.0], [50.8, 176.0], [50.9, 176.0], [51.0, 177.0], [51.1, 178.0], [51.2, 179.0], [51.3, 179.0], [51.4, 180.0], [51.5, 180.0], [51.6, 182.0], [51.7, 182.0], [51.8, 183.0], [51.9, 184.0], [52.0, 185.0], [52.1, 185.0], [52.2, 186.0], [52.3, 188.0], [52.4, 189.0], [52.5, 189.0], [52.6, 189.0], [52.7, 190.0], [52.8, 191.0], [52.9, 191.0], [53.0, 192.0], [53.1, 193.0], [53.2, 194.0], [53.3, 194.0], [53.4, 195.0], [53.5, 195.0], [53.6, 196.0], [53.7, 197.0], [53.8, 197.0], [53.9, 198.0], [54.0, 198.0], [54.1, 199.0], [54.2, 199.0], [54.3, 200.0], [54.4, 201.0], [54.5, 201.0], [54.6, 202.0], [54.7, 203.0], [54.8, 205.0], [54.9, 205.0], [55.0, 206.0], [55.1, 206.0], [55.2, 207.0], [55.3, 208.0], [55.4, 208.0], [55.5, 209.0], [55.6, 210.0], [55.7, 211.0], [55.8, 211.0], [55.9, 212.0], [56.0, 212.0], [56.1, 213.0], [56.2, 213.0], [56.3, 214.0], [56.4, 215.0], [56.5, 216.0], [56.6, 217.0], [56.7, 218.0], [56.8, 219.0], [56.9, 220.0], [57.0, 221.0], [57.1, 222.0], [57.2, 222.0], [57.3, 223.0], [57.4, 224.0], [57.5, 226.0], [57.6, 226.0], [57.7, 226.0], [57.8, 228.0], [57.9, 229.0], [58.0, 229.0], [58.1, 230.0], [58.2, 230.0], [58.3, 232.0], [58.4, 234.0], [58.5, 237.0], [58.6, 238.0], [58.7, 239.0], [58.8, 240.0], [58.9, 241.0], [59.0, 242.0], [59.1, 242.0], [59.2, 243.0], [59.3, 245.0], [59.4, 246.0], [59.5, 246.0], [59.6, 247.0], [59.7, 248.0], [59.8, 248.0], [59.9, 249.0], [60.0, 250.0], [60.1, 251.0], [60.2, 252.0], [60.3, 253.0], [60.4, 254.0], [60.5, 256.0], [60.6, 256.0], [60.7, 257.0], [60.8, 258.0], [60.9, 259.0], [61.0, 259.0], [61.1, 261.0], [61.2, 263.0], [61.3, 263.0], [61.4, 264.0], [61.5, 266.0], [61.6, 266.0], [61.7, 267.0], [61.8, 269.0], [61.9, 269.0], [62.0, 270.0], [62.1, 272.0], [62.2, 273.0], [62.3, 274.0], [62.4, 274.0], [62.5, 275.0], [62.6, 276.0], [62.7, 277.0], [62.8, 278.0], [62.9, 279.0], [63.0, 279.0], [63.1, 280.0], [63.2, 281.0], [63.3, 282.0], [63.4, 283.0], [63.5, 284.0], [63.6, 285.0], [63.7, 287.0], [63.8, 288.0], [63.9, 289.0], [64.0, 290.0], [64.1, 291.0], [64.2, 292.0], [64.3, 293.0], [64.4, 295.0], [64.5, 295.0], [64.6, 296.0], [64.7, 298.0], [64.8, 300.0], [64.9, 302.0], [65.0, 304.0], [65.1, 305.0], [65.2, 306.0], [65.3, 307.0], [65.4, 308.0], [65.5, 311.0], [65.6, 312.0], [65.7, 314.0], [65.8, 315.0], [65.9, 317.0], [66.0, 318.0], [66.1, 320.0], [66.2, 322.0], [66.3, 323.0], [66.4, 326.0], [66.5, 329.0], [66.6, 330.0], [66.7, 331.0], [66.8, 332.0], [66.9, 332.0], [67.0, 333.0], [67.1, 334.0], [67.2, 335.0], [67.3, 338.0], [67.4, 339.0], [67.5, 339.0], [67.6, 340.0], [67.7, 344.0], [67.8, 345.0], [67.9, 347.0], [68.0, 348.0], [68.1, 349.0], [68.2, 350.0], [68.3, 352.0], [68.4, 353.0], [68.5, 354.0], [68.6, 355.0], [68.7, 355.0], [68.8, 357.0], [68.9, 359.0], [69.0, 361.0], [69.1, 362.0], [69.2, 364.0], [69.3, 365.0], [69.4, 367.0], [69.5, 368.0], [69.6, 370.0], [69.7, 371.0], [69.8, 372.0], [69.9, 374.0], [70.0, 376.0], [70.1, 376.0], [70.2, 378.0], [70.3, 380.0], [70.4, 380.0], [70.5, 382.0], [70.6, 383.0], [70.7, 384.0], [70.8, 385.0], [70.9, 386.0], [71.0, 388.0], [71.1, 388.0], [71.2, 390.0], [71.3, 392.0], [71.4, 395.0], [71.5, 396.0], [71.6, 398.0], [71.7, 401.0], [71.8, 403.0], [71.9, 405.0], [72.0, 406.0], [72.1, 407.0], [72.2, 408.0], [72.3, 409.0], [72.4, 412.0], [72.5, 414.0], [72.6, 415.0], [72.7, 416.0], [72.8, 418.0], [72.9, 419.0], [73.0, 421.0], [73.1, 422.0], [73.2, 424.0], [73.3, 425.0], [73.4, 426.0], [73.5, 427.0], [73.6, 429.0], [73.7, 429.0], [73.8, 431.0], [73.9, 434.0], [74.0, 435.0], [74.1, 437.0], [74.2, 438.0], [74.3, 439.0], [74.4, 440.0], [74.5, 442.0], [74.6, 444.0], [74.7, 446.0], [74.8, 448.0], [74.9, 450.0], [75.0, 451.0], [75.1, 454.0], [75.2, 457.0], [75.3, 458.0], [75.4, 459.0], [75.5, 460.0], [75.6, 462.0], [75.7, 463.0], [75.8, 463.0], [75.9, 466.0], [76.0, 467.0], [76.1, 469.0], [76.2, 472.0], [76.3, 474.0], [76.4, 475.0], [76.5, 479.0], [76.6, 480.0], [76.7, 481.0], [76.8, 483.0], [76.9, 485.0], [77.0, 487.0], [77.1, 489.0], [77.2, 492.0], [77.3, 495.0], [77.4, 497.0], [77.5, 499.0], [77.6, 501.0], [77.7, 503.0], [77.8, 504.0], [77.9, 506.0], [78.0, 508.0], [78.1, 509.0], [78.2, 511.0], [78.3, 513.0], [78.4, 515.0], [78.5, 517.0], [78.6, 520.0], [78.7, 523.0], [78.8, 526.0], [78.9, 529.0], [79.0, 530.0], [79.1, 532.0], [79.2, 534.0], [79.3, 535.0], [79.4, 537.0], [79.5, 539.0], [79.6, 542.0], [79.7, 543.0], [79.8, 545.0], [79.9, 546.0], [80.0, 548.0], [80.1, 549.0], [80.2, 551.0], [80.3, 553.0], [80.4, 554.0], [80.5, 556.0], [80.6, 558.0], [80.7, 559.0], [80.8, 561.0], [80.9, 562.0], [81.0, 564.0], [81.1, 566.0], [81.2, 567.0], [81.3, 569.0], [81.4, 571.0], [81.5, 574.0], [81.6, 576.0], [81.7, 577.0], [81.8, 578.0], [81.9, 581.0], [82.0, 585.0], [82.1, 587.0], [82.2, 588.0], [82.3, 589.0], [82.4, 592.0], [82.5, 595.0], [82.6, 600.0], [82.7, 606.0], [82.8, 609.0], [82.9, 611.0], [83.0, 614.0], [83.1, 616.0], [83.2, 617.0], [83.3, 620.0], [83.4, 621.0], [83.5, 622.0], [83.6, 624.0], [83.7, 625.0], [83.8, 630.0], [83.9, 633.0], [84.0, 634.0], [84.1, 635.0], [84.2, 637.0], [84.3, 639.0], [84.4, 640.0], [84.5, 641.0], [84.6, 643.0], [84.7, 647.0], [84.8, 649.0], [84.9, 651.0], [85.0, 653.0], [85.1, 655.0], [85.2, 658.0], [85.3, 659.0], [85.4, 661.0], [85.5, 663.0], [85.6, 665.0], [85.7, 671.0], [85.8, 674.0], [85.9, 675.0], [86.0, 678.0], [86.1, 680.0], [86.2, 683.0], [86.3, 685.0], [86.4, 688.0], [86.5, 691.0], [86.6, 693.0], [86.7, 696.0], [86.8, 699.0], [86.9, 703.0], [87.0, 705.0], [87.1, 707.0], [87.2, 709.0], [87.3, 713.0], [87.4, 715.0], [87.5, 716.0], [87.6, 719.0], [87.7, 720.0], [87.8, 722.0], [87.9, 727.0], [88.0, 729.0], [88.1, 734.0], [88.2, 737.0], [88.3, 741.0], [88.4, 746.0], [88.5, 747.0], [88.6, 751.0], [88.7, 754.0], [88.8, 756.0], [88.9, 758.0], [89.0, 760.0], [89.1, 763.0], [89.2, 769.0], [89.3, 774.0], [89.4, 777.0], [89.5, 780.0], [89.6, 785.0], [89.7, 789.0], [89.8, 793.0], [89.9, 798.0], [90.0, 804.0], [90.1, 809.0], [90.2, 812.0], [90.3, 814.0], [90.4, 818.0], [90.5, 820.0], [90.6, 825.0], [90.7, 827.0], [90.8, 831.0], [90.9, 833.0], [91.0, 840.0], [91.1, 844.0], [91.2, 848.0], [91.3, 850.0], [91.4, 856.0], [91.5, 859.0], [91.6, 865.0], [91.7, 868.0], [91.8, 874.0], [91.9, 876.0], [92.0, 879.0], [92.1, 882.0], [92.2, 884.0], [92.3, 894.0], [92.4, 897.0], [92.5, 899.0], [92.6, 906.0], [92.7, 914.0], [92.8, 917.0], [92.9, 924.0], [93.0, 930.0], [93.1, 939.0], [93.2, 942.0], [93.3, 947.0], [93.4, 954.0], [93.5, 960.0], [93.6, 967.0], [93.7, 974.0], [93.8, 980.0], [93.9, 983.0], [94.0, 988.0], [94.1, 993.0], [94.2, 997.0], [94.3, 1004.0], [94.4, 1007.0], [94.5, 1013.0], [94.6, 1019.0], [94.7, 1023.0], [94.8, 1025.0], [94.9, 1032.0], [95.0, 1038.0], [95.1, 1045.0], [95.2, 1050.0], [95.3, 1053.0], [95.4, 1056.0], [95.5, 1067.0], [95.6, 1075.0], [95.7, 1092.0], [95.8, 1108.0], [95.9, 1124.0], [96.0, 1135.0], [96.1, 1146.0], [96.2, 1151.0], [96.3, 1163.0], [96.4, 1171.0], [96.5, 1178.0], [96.6, 1202.0], [96.7, 1218.0], [96.8, 1233.0], [96.9, 1244.0], [97.0, 1255.0], [97.1, 1270.0], [97.2, 1282.0], [97.3, 1297.0], [97.4, 1320.0], [97.5, 1342.0], [97.6, 1351.0], [97.7, 1365.0], [97.8, 1384.0], [97.9, 1401.0], [98.0, 1419.0], [98.1, 1429.0], [98.2, 1444.0], [98.3, 1489.0], [98.4, 1503.0], [98.5, 1532.0], [98.6, 1544.0], [98.7, 1596.0], [98.8, 1627.0], [98.9, 1688.0], [99.0, 1748.0], [99.1, 1821.0], [99.2, 1853.0], [99.3, 1917.0], [99.4, 1956.0], [99.5, 2023.0], [99.6, 2077.0], [99.7, 2202.0], [99.8, 2372.0], [99.9, 3155.0], [100.0, 3343.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 2198.0, "series": [{"data": [[0.0, 2198.0], [600.0, 225.0], [700.0, 163.0], [800.0, 137.0], [900.0, 91.0], [1000.0, 80.0], [1100.0, 43.0], [1200.0, 40.0], [1300.0, 29.0], [1400.0, 26.0], [1500.0, 19.0], [100.0, 660.0], [1600.0, 10.0], [1700.0, 8.0], [1800.0, 11.0], [1900.0, 10.0], [2000.0, 8.0], [2100.0, 4.0], [2200.0, 5.0], [2300.0, 1.0], [2500.0, 1.0], [2600.0, 1.0], [2800.0, 1.0], [3000.0, 1.0], [3100.0, 1.0], [200.0, 557.0], [3200.0, 3.0], [3300.0, 2.0], [300.0, 362.0], [400.0, 309.0], [500.0, 266.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3300.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 85.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 4091.0, "series": [{"data": [[0.0, 4091.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1096.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 85.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.90697674418604, "minX": 1.60223628E12, "maxY": 10.0, "series": [{"data": [[1.60223628E12, 9.90697674418604], [1.60223646E12, 9.957666980244591], [1.6022364E12, 10.0], [1.60223634E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60223646E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 310.53149381541346, "minX": 1.0, "maxY": 3155.0, "series": [{"data": [[4.0, 1738.0], [8.0, 1708.5], [2.0, 3042.0], [1.0, 3155.0], [9.0, 534.5], [5.0, 1168.6666666666667], [10.0, 310.53149381541346], [6.0, 1162.0], [3.0, 2195.0], [7.0, 1280.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.986911987860383, 314.2059939301968]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 2310.7166666666667, "minX": 1.60223628E12, "maxY": 1692427.8666666667, "series": [{"data": [[1.60223628E12, 89196.46666666666], [1.60223646E12, 1055187.1833333333], [1.6022364E12, 1454600.7], [1.60223634E12, 1692427.8666666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60223628E12, 2310.7166666666667], [1.60223646E12, 9395.866666666667], [1.6022364E12, 20305.6], [1.60223634E12, 13567.366666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60223646E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 251.61960620025144, "minX": 1.60223628E12, "maxY": 378.44373401534506, "series": [{"data": [[1.60223628E12, 270.94186046511624], [1.60223646E12, 370.73283160865424], [1.6022364E12, 251.61960620025144], [1.60223634E12, 378.44373401534506]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60223646E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 251.36782572266455, "minX": 1.60223628E12, "maxY": 377.94565217391295, "series": [{"data": [[1.60223628E12, 270.748062015504], [1.60223646E12, 370.3396048918157], [1.6022364E12, 251.36782572266455], [1.60223634E12, 377.94565217391295]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60223646E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.00639386189258312, "minX": 1.60223628E12, "maxY": 0.35271317829457327, "series": [{"data": [[1.60223628E12, 0.35271317829457327], [1.60223646E12, 0.00846660395108184], [1.6022364E12, 0.008378718056137423], [1.60223634E12, 0.00639386189258312]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60223646E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 27.0, "minX": 1.60223628E12, "maxY": 3343.0, "series": [{"data": [[1.60223628E12, 1244.0], [1.60223646E12, 3343.0], [1.6022364E12, 2291.0], [1.60223634E12, 2224.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60223628E12, 31.330999938249587], [1.60223646E12, 30.57599974632263], [1.6022364E12, 30.0], [1.60223634E12, 30.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60223628E12, 31.564100024700164], [1.60223646E12, 31.0], [1.6022364E12, 30.0], [1.60223634E12, 30.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60223628E12, 31.460499969124793], [1.60223646E12, 31.0], [1.6022364E12, 30.0], [1.60223634E12, 30.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60223628E12, 30.0], [1.60223646E12, 28.0], [1.6022364E12, 27.0], [1.60223634E12, 28.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60223628E12, 88.5], [1.60223646E12, 193.0], [1.6022364E12, 116.0], [1.60223634E12, 270.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60223646E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 41.0, "minX": 1.0, "maxY": 3155.0, "series": [{"data": [[2.0, 1882.5], [3.0, 3042.0], [4.0, 675.0], [5.0, 1380.0], [6.0, 643.0], [7.0, 1399.0], [8.0, 898.5], [9.0, 895.0], [10.0, 804.0], [11.0, 728.0], [12.0, 835.5], [13.0, 691.0], [14.0, 638.0], [15.0, 482.0], [16.0, 483.0], [17.0, 538.0], [18.0, 560.0], [19.0, 375.0], [20.0, 357.5], [21.0, 355.0], [22.0, 202.5], [23.0, 332.5], [24.0, 460.5], [25.0, 357.0], [26.0, 218.0], [27.0, 338.5], [28.0, 329.5], [29.0, 279.5], [30.0, 217.0], [31.0, 211.0], [33.0, 125.0], [32.0, 57.0], [35.0, 71.0], [34.0, 209.0], [37.0, 177.0], [36.0, 121.5], [39.0, 91.0], [38.0, 63.5], [41.0, 96.0], [42.0, 92.0], [45.0, 69.0], [44.0, 113.5], [46.0, 105.0], [47.0, 98.0], [49.0, 80.0], [48.0, 43.0], [51.0, 104.0], [52.0, 115.5], [53.0, 131.0], [54.0, 46.5], [55.0, 114.0], [57.0, 110.0], [56.0, 44.5], [58.0, 167.5], [61.0, 81.0], [60.0, 46.5], [65.0, 79.0], [67.0, 69.5], [68.0, 79.5], [69.0, 81.0], [75.0, 41.0], [74.0, 115.5], [77.0, 78.0], [80.0, 67.0], [88.0, 73.0], [95.0, 47.0], [100.0, 57.0], [1.0, 3155.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 100.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 41.0, "minX": 1.0, "maxY": 3155.0, "series": [{"data": [[2.0, 1881.0], [3.0, 3042.0], [4.0, 674.0], [5.0, 1380.0], [6.0, 643.0], [7.0, 1397.0], [8.0, 896.5], [9.0, 895.0], [10.0, 801.0], [11.0, 727.0], [12.0, 832.5], [13.0, 689.0], [14.0, 637.0], [15.0, 482.0], [16.0, 482.0], [17.0, 537.0], [18.0, 559.5], [19.0, 375.0], [20.0, 357.0], [21.0, 354.0], [22.0, 202.5], [23.0, 332.0], [24.0, 460.5], [25.0, 354.0], [26.0, 217.5], [27.0, 338.5], [28.0, 326.5], [29.0, 278.5], [30.0, 216.5], [31.0, 211.0], [33.0, 125.0], [32.0, 57.0], [35.0, 71.0], [34.0, 208.5], [37.0, 177.0], [36.0, 121.5], [39.0, 91.0], [38.0, 63.5], [41.0, 96.0], [42.0, 92.0], [45.0, 69.0], [44.0, 113.5], [46.0, 105.0], [47.0, 98.0], [49.0, 79.0], [48.0, 43.0], [51.0, 104.0], [52.0, 115.5], [53.0, 130.5], [54.0, 46.5], [55.0, 114.0], [57.0, 110.0], [56.0, 44.5], [58.0, 167.5], [61.0, 81.0], [60.0, 46.5], [65.0, 79.0], [67.0, 69.5], [68.0, 79.5], [69.0, 81.0], [75.0, 41.0], [74.0, 115.0], [77.0, 78.0], [80.0, 67.0], [88.0, 72.0], [95.0, 47.0], [100.0, 57.0], [1.0, 3155.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 100.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 4.466666666666667, "minX": 1.60223628E12, "maxY": 39.78333333333333, "series": [{"data": [[1.60223628E12, 4.466666666666667], [1.60223646E12, 17.55], [1.6022364E12, 39.78333333333333], [1.60223634E12, 26.066666666666666]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60223646E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 4.3, "minX": 1.60223628E12, "maxY": 39.78333333333333, "series": [{"data": [[1.60223628E12, 4.3], [1.60223646E12, 17.716666666666665], [1.6022364E12, 39.78333333333333], [1.60223634E12, 26.066666666666666]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60223646E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 4.3, "minX": 1.60223628E12, "maxY": 39.78333333333333, "series": [{"data": [[1.60223628E12, 4.3], [1.60223646E12, 17.716666666666665], [1.6022364E12, 39.78333333333333], [1.60223634E12, 26.066666666666666]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60223646E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 4.3, "minX": 1.60223628E12, "maxY": 39.78333333333333, "series": [{"data": [[1.60223628E12, 4.3], [1.60223646E12, 17.716666666666665], [1.6022364E12, 39.78333333333333], [1.60223634E12, 26.066666666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60223646E12, "title": "Total Transactions Per Second"}},
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

