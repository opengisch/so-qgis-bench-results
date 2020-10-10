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
        data: {"result": {"minY": 28.0, "minX": 0.0, "maxY": 3269.0, "series": [{"data": [[0.0, 28.0], [0.1, 30.0], [0.2, 30.0], [0.3, 31.0], [0.4, 31.0], [0.5, 31.0], [0.6, 31.0], [0.7, 32.0], [0.8, 32.0], [0.9, 32.0], [1.0, 32.0], [1.1, 32.0], [1.2, 33.0], [1.3, 33.0], [1.4, 33.0], [1.5, 33.0], [1.6, 33.0], [1.7, 33.0], [1.8, 34.0], [1.9, 34.0], [2.0, 34.0], [2.1, 34.0], [2.2, 34.0], [2.3, 34.0], [2.4, 34.0], [2.5, 34.0], [2.6, 34.0], [2.7, 35.0], [2.8, 35.0], [2.9, 35.0], [3.0, 35.0], [3.1, 35.0], [3.2, 35.0], [3.3, 35.0], [3.4, 35.0], [3.5, 35.0], [3.6, 35.0], [3.7, 35.0], [3.8, 35.0], [3.9, 35.0], [4.0, 35.0], [4.1, 36.0], [4.2, 36.0], [4.3, 36.0], [4.4, 36.0], [4.5, 36.0], [4.6, 36.0], [4.7, 36.0], [4.8, 36.0], [4.9, 36.0], [5.0, 36.0], [5.1, 36.0], [5.2, 36.0], [5.3, 36.0], [5.4, 36.0], [5.5, 36.0], [5.6, 37.0], [5.7, 37.0], [5.8, 37.0], [5.9, 37.0], [6.0, 37.0], [6.1, 37.0], [6.2, 37.0], [6.3, 37.0], [6.4, 37.0], [6.5, 37.0], [6.6, 37.0], [6.7, 37.0], [6.8, 37.0], [6.9, 38.0], [7.0, 38.0], [7.1, 38.0], [7.2, 38.0], [7.3, 38.0], [7.4, 38.0], [7.5, 38.0], [7.6, 38.0], [7.7, 38.0], [7.8, 38.0], [7.9, 38.0], [8.0, 38.0], [8.1, 38.0], [8.2, 38.0], [8.3, 38.0], [8.4, 38.0], [8.5, 39.0], [8.6, 39.0], [8.7, 39.0], [8.8, 39.0], [8.9, 39.0], [9.0, 39.0], [9.1, 39.0], [9.2, 39.0], [9.3, 39.0], [9.4, 39.0], [9.5, 39.0], [9.6, 39.0], [9.7, 39.0], [9.8, 39.0], [9.9, 39.0], [10.0, 39.0], [10.1, 39.0], [10.2, 40.0], [10.3, 40.0], [10.4, 40.0], [10.5, 40.0], [10.6, 40.0], [10.7, 40.0], [10.8, 40.0], [10.9, 40.0], [11.0, 40.0], [11.1, 40.0], [11.2, 40.0], [11.3, 40.0], [11.4, 40.0], [11.5, 40.0], [11.6, 40.0], [11.7, 40.0], [11.8, 40.0], [11.9, 40.0], [12.0, 41.0], [12.1, 41.0], [12.2, 41.0], [12.3, 41.0], [12.4, 41.0], [12.5, 41.0], [12.6, 41.0], [12.7, 41.0], [12.8, 41.0], [12.9, 41.0], [13.0, 41.0], [13.1, 41.0], [13.2, 41.0], [13.3, 41.0], [13.4, 41.0], [13.5, 41.0], [13.6, 42.0], [13.7, 42.0], [13.8, 42.0], [13.9, 42.0], [14.0, 42.0], [14.1, 42.0], [14.2, 42.0], [14.3, 42.0], [14.4, 42.0], [14.5, 42.0], [14.6, 42.0], [14.7, 42.0], [14.8, 42.0], [14.9, 43.0], [15.0, 43.0], [15.1, 43.0], [15.2, 43.0], [15.3, 43.0], [15.4, 43.0], [15.5, 43.0], [15.6, 43.0], [15.7, 43.0], [15.8, 43.0], [15.9, 44.0], [16.0, 44.0], [16.1, 44.0], [16.2, 44.0], [16.3, 44.0], [16.4, 44.0], [16.5, 45.0], [16.6, 45.0], [16.7, 45.0], [16.8, 45.0], [16.9, 45.0], [17.0, 45.0], [17.1, 45.0], [17.2, 46.0], [17.3, 46.0], [17.4, 46.0], [17.5, 46.0], [17.6, 46.0], [17.7, 46.0], [17.8, 47.0], [17.9, 47.0], [18.0, 47.0], [18.1, 48.0], [18.2, 48.0], [18.3, 48.0], [18.4, 49.0], [18.5, 49.0], [18.6, 49.0], [18.7, 50.0], [18.8, 50.0], [18.9, 50.0], [19.0, 50.0], [19.1, 51.0], [19.2, 51.0], [19.3, 52.0], [19.4, 52.0], [19.5, 53.0], [19.6, 53.0], [19.7, 53.0], [19.8, 53.0], [19.9, 54.0], [20.0, 54.0], [20.1, 54.0], [20.2, 54.0], [20.3, 55.0], [20.4, 55.0], [20.5, 55.0], [20.6, 56.0], [20.7, 56.0], [20.8, 56.0], [20.9, 56.0], [21.0, 56.0], [21.1, 57.0], [21.2, 57.0], [21.3, 57.0], [21.4, 57.0], [21.5, 58.0], [21.6, 58.0], [21.7, 58.0], [21.8, 58.0], [21.9, 59.0], [22.0, 59.0], [22.1, 59.0], [22.2, 59.0], [22.3, 60.0], [22.4, 60.0], [22.5, 60.0], [22.6, 60.0], [22.7, 60.0], [22.8, 61.0], [22.9, 61.0], [23.0, 61.0], [23.1, 62.0], [23.2, 62.0], [23.3, 62.0], [23.4, 62.0], [23.5, 63.0], [23.6, 63.0], [23.7, 63.0], [23.8, 64.0], [23.9, 64.0], [24.0, 64.0], [24.1, 64.0], [24.2, 65.0], [24.3, 65.0], [24.4, 65.0], [24.5, 65.0], [24.6, 65.0], [24.7, 66.0], [24.8, 66.0], [24.9, 66.0], [25.0, 66.0], [25.1, 66.0], [25.2, 67.0], [25.3, 67.0], [25.4, 67.0], [25.5, 67.0], [25.6, 67.0], [25.7, 67.0], [25.8, 67.0], [25.9, 68.0], [26.0, 68.0], [26.1, 68.0], [26.2, 68.0], [26.3, 68.0], [26.4, 68.0], [26.5, 68.0], [26.6, 69.0], [26.7, 69.0], [26.8, 69.0], [26.9, 69.0], [27.0, 69.0], [27.1, 69.0], [27.2, 69.0], [27.3, 70.0], [27.4, 70.0], [27.5, 70.0], [27.6, 70.0], [27.7, 70.0], [27.8, 70.0], [27.9, 70.0], [28.0, 70.0], [28.1, 71.0], [28.2, 71.0], [28.3, 71.0], [28.4, 71.0], [28.5, 71.0], [28.6, 71.0], [28.7, 71.0], [28.8, 72.0], [28.9, 72.0], [29.0, 72.0], [29.1, 72.0], [29.2, 72.0], [29.3, 72.0], [29.4, 72.0], [29.5, 72.0], [29.6, 73.0], [29.7, 73.0], [29.8, 73.0], [29.9, 73.0], [30.0, 73.0], [30.1, 73.0], [30.2, 73.0], [30.3, 74.0], [30.4, 74.0], [30.5, 74.0], [30.6, 74.0], [30.7, 74.0], [30.8, 74.0], [30.9, 74.0], [31.0, 74.0], [31.1, 74.0], [31.2, 75.0], [31.3, 75.0], [31.4, 75.0], [31.5, 75.0], [31.6, 75.0], [31.7, 75.0], [31.8, 75.0], [31.9, 75.0], [32.0, 75.0], [32.1, 76.0], [32.2, 76.0], [32.3, 76.0], [32.4, 76.0], [32.5, 76.0], [32.6, 76.0], [32.7, 76.0], [32.8, 76.0], [32.9, 77.0], [33.0, 77.0], [33.1, 77.0], [33.2, 77.0], [33.3, 77.0], [33.4, 77.0], [33.5, 77.0], [33.6, 77.0], [33.7, 77.0], [33.8, 78.0], [33.9, 78.0], [34.0, 78.0], [34.1, 78.0], [34.2, 78.0], [34.3, 78.0], [34.4, 78.0], [34.5, 78.0], [34.6, 79.0], [34.7, 79.0], [34.8, 79.0], [34.9, 79.0], [35.0, 79.0], [35.1, 79.0], [35.2, 79.0], [35.3, 79.0], [35.4, 79.0], [35.5, 80.0], [35.6, 80.0], [35.7, 80.0], [35.8, 80.0], [35.9, 81.0], [36.0, 81.0], [36.1, 81.0], [36.2, 81.0], [36.3, 81.0], [36.4, 81.0], [36.5, 81.0], [36.6, 82.0], [36.7, 82.0], [36.8, 82.0], [36.9, 82.0], [37.0, 82.0], [37.1, 83.0], [37.2, 83.0], [37.3, 83.0], [37.4, 84.0], [37.5, 84.0], [37.6, 84.0], [37.7, 85.0], [37.8, 85.0], [37.9, 85.0], [38.0, 86.0], [38.1, 86.0], [38.2, 86.0], [38.3, 87.0], [38.4, 87.0], [38.5, 87.0], [38.6, 88.0], [38.7, 88.0], [38.8, 88.0], [38.9, 88.0], [39.0, 89.0], [39.1, 89.0], [39.2, 90.0], [39.3, 90.0], [39.4, 91.0], [39.5, 91.0], [39.6, 92.0], [39.7, 92.0], [39.8, 92.0], [39.9, 93.0], [40.0, 93.0], [40.1, 93.0], [40.2, 94.0], [40.3, 95.0], [40.4, 96.0], [40.5, 97.0], [40.6, 97.0], [40.7, 98.0], [40.8, 99.0], [40.9, 99.0], [41.0, 101.0], [41.1, 101.0], [41.2, 102.0], [41.3, 103.0], [41.4, 104.0], [41.5, 104.0], [41.6, 105.0], [41.7, 106.0], [41.8, 106.0], [41.9, 107.0], [42.0, 107.0], [42.1, 108.0], [42.2, 108.0], [42.3, 108.0], [42.4, 109.0], [42.5, 109.0], [42.6, 110.0], [42.7, 110.0], [42.8, 111.0], [42.9, 111.0], [43.0, 112.0], [43.1, 113.0], [43.2, 113.0], [43.3, 113.0], [43.4, 114.0], [43.5, 115.0], [43.6, 115.0], [43.7, 116.0], [43.8, 117.0], [43.9, 118.0], [44.0, 119.0], [44.1, 120.0], [44.2, 121.0], [44.3, 122.0], [44.4, 123.0], [44.5, 124.0], [44.6, 124.0], [44.7, 125.0], [44.8, 125.0], [44.9, 127.0], [45.0, 127.0], [45.1, 128.0], [45.2, 128.0], [45.3, 129.0], [45.4, 130.0], [45.5, 130.0], [45.6, 131.0], [45.7, 131.0], [45.8, 132.0], [45.9, 134.0], [46.0, 134.0], [46.1, 135.0], [46.2, 136.0], [46.3, 136.0], [46.4, 137.0], [46.5, 137.0], [46.6, 139.0], [46.7, 139.0], [46.8, 140.0], [46.9, 142.0], [47.0, 143.0], [47.1, 144.0], [47.2, 145.0], [47.3, 146.0], [47.4, 147.0], [47.5, 148.0], [47.6, 149.0], [47.7, 151.0], [47.8, 152.0], [47.9, 155.0], [48.0, 156.0], [48.1, 157.0], [48.2, 158.0], [48.3, 159.0], [48.4, 160.0], [48.5, 161.0], [48.6, 163.0], [48.7, 164.0], [48.8, 165.0], [48.9, 167.0], [49.0, 167.0], [49.1, 168.0], [49.2, 170.0], [49.3, 171.0], [49.4, 172.0], [49.5, 173.0], [49.6, 174.0], [49.7, 174.0], [49.8, 175.0], [49.9, 176.0], [50.0, 176.0], [50.1, 177.0], [50.2, 178.0], [50.3, 178.0], [50.4, 180.0], [50.5, 181.0], [50.6, 183.0], [50.7, 183.0], [50.8, 184.0], [50.9, 185.0], [51.0, 185.0], [51.1, 186.0], [51.2, 187.0], [51.3, 187.0], [51.4, 188.0], [51.5, 188.0], [51.6, 189.0], [51.7, 189.0], [51.8, 190.0], [51.9, 190.0], [52.0, 191.0], [52.1, 192.0], [52.2, 193.0], [52.3, 194.0], [52.4, 195.0], [52.5, 196.0], [52.6, 197.0], [52.7, 198.0], [52.8, 199.0], [52.9, 199.0], [53.0, 200.0], [53.1, 201.0], [53.2, 202.0], [53.3, 202.0], [53.4, 203.0], [53.5, 203.0], [53.6, 204.0], [53.7, 205.0], [53.8, 207.0], [53.9, 207.0], [54.0, 208.0], [54.1, 210.0], [54.2, 211.0], [54.3, 211.0], [54.4, 212.0], [54.5, 214.0], [54.6, 215.0], [54.7, 215.0], [54.8, 216.0], [54.9, 217.0], [55.0, 218.0], [55.1, 218.0], [55.2, 219.0], [55.3, 220.0], [55.4, 221.0], [55.5, 222.0], [55.6, 222.0], [55.7, 224.0], [55.8, 225.0], [55.9, 225.0], [56.0, 226.0], [56.1, 226.0], [56.2, 228.0], [56.3, 228.0], [56.4, 229.0], [56.5, 229.0], [56.6, 231.0], [56.7, 232.0], [56.8, 233.0], [56.9, 234.0], [57.0, 235.0], [57.1, 235.0], [57.2, 237.0], [57.3, 238.0], [57.4, 239.0], [57.5, 240.0], [57.6, 240.0], [57.7, 241.0], [57.8, 243.0], [57.9, 244.0], [58.0, 245.0], [58.1, 245.0], [58.2, 246.0], [58.3, 247.0], [58.4, 248.0], [58.5, 250.0], [58.6, 250.0], [58.7, 251.0], [58.8, 252.0], [58.9, 253.0], [59.0, 253.0], [59.1, 254.0], [59.2, 255.0], [59.3, 256.0], [59.4, 257.0], [59.5, 257.0], [59.6, 258.0], [59.7, 258.0], [59.8, 259.0], [59.9, 261.0], [60.0, 261.0], [60.1, 262.0], [60.2, 262.0], [60.3, 264.0], [60.4, 265.0], [60.5, 266.0], [60.6, 267.0], [60.7, 268.0], [60.8, 269.0], [60.9, 270.0], [61.0, 271.0], [61.1, 272.0], [61.2, 272.0], [61.3, 273.0], [61.4, 274.0], [61.5, 275.0], [61.6, 276.0], [61.7, 277.0], [61.8, 279.0], [61.9, 280.0], [62.0, 281.0], [62.1, 281.0], [62.2, 282.0], [62.3, 284.0], [62.4, 285.0], [62.5, 286.0], [62.6, 287.0], [62.7, 289.0], [62.8, 289.0], [62.9, 290.0], [63.0, 292.0], [63.1, 292.0], [63.2, 293.0], [63.3, 295.0], [63.4, 296.0], [63.5, 298.0], [63.6, 299.0], [63.7, 300.0], [63.8, 301.0], [63.9, 303.0], [64.0, 304.0], [64.1, 305.0], [64.2, 308.0], [64.3, 309.0], [64.4, 311.0], [64.5, 312.0], [64.6, 313.0], [64.7, 315.0], [64.8, 316.0], [64.9, 317.0], [65.0, 319.0], [65.1, 321.0], [65.2, 321.0], [65.3, 322.0], [65.4, 323.0], [65.5, 325.0], [65.6, 326.0], [65.7, 327.0], [65.8, 328.0], [65.9, 329.0], [66.0, 332.0], [66.1, 333.0], [66.2, 334.0], [66.3, 335.0], [66.4, 337.0], [66.5, 338.0], [66.6, 342.0], [66.7, 343.0], [66.8, 345.0], [66.9, 346.0], [67.0, 348.0], [67.1, 350.0], [67.2, 351.0], [67.3, 352.0], [67.4, 353.0], [67.5, 356.0], [67.6, 357.0], [67.7, 358.0], [67.8, 360.0], [67.9, 362.0], [68.0, 364.0], [68.1, 366.0], [68.2, 368.0], [68.3, 369.0], [68.4, 371.0], [68.5, 371.0], [68.6, 372.0], [68.7, 374.0], [68.8, 376.0], [68.9, 377.0], [69.0, 378.0], [69.1, 379.0], [69.2, 381.0], [69.3, 382.0], [69.4, 383.0], [69.5, 385.0], [69.6, 386.0], [69.7, 387.0], [69.8, 389.0], [69.9, 390.0], [70.0, 391.0], [70.1, 392.0], [70.2, 394.0], [70.3, 396.0], [70.4, 397.0], [70.5, 400.0], [70.6, 402.0], [70.7, 405.0], [70.8, 406.0], [70.9, 406.0], [71.0, 408.0], [71.1, 408.0], [71.2, 410.0], [71.3, 412.0], [71.4, 415.0], [71.5, 415.0], [71.6, 418.0], [71.7, 419.0], [71.8, 421.0], [71.9, 423.0], [72.0, 424.0], [72.1, 425.0], [72.2, 427.0], [72.3, 427.0], [72.4, 428.0], [72.5, 431.0], [72.6, 432.0], [72.7, 433.0], [72.8, 435.0], [72.9, 437.0], [73.0, 438.0], [73.1, 440.0], [73.2, 441.0], [73.3, 442.0], [73.4, 444.0], [73.5, 445.0], [73.6, 446.0], [73.7, 447.0], [73.8, 448.0], [73.9, 451.0], [74.0, 453.0], [74.1, 454.0], [74.2, 457.0], [74.3, 458.0], [74.4, 459.0], [74.5, 459.0], [74.6, 460.0], [74.7, 462.0], [74.8, 464.0], [74.9, 465.0], [75.0, 469.0], [75.1, 470.0], [75.2, 471.0], [75.3, 472.0], [75.4, 475.0], [75.5, 477.0], [75.6, 479.0], [75.7, 480.0], [75.8, 483.0], [75.9, 484.0], [76.0, 486.0], [76.1, 487.0], [76.2, 490.0], [76.3, 490.0], [76.4, 492.0], [76.5, 492.0], [76.6, 495.0], [76.7, 496.0], [76.8, 497.0], [76.9, 500.0], [77.0, 503.0], [77.1, 504.0], [77.2, 505.0], [77.3, 506.0], [77.4, 507.0], [77.5, 509.0], [77.6, 511.0], [77.7, 513.0], [77.8, 514.0], [77.9, 515.0], [78.0, 517.0], [78.1, 519.0], [78.2, 520.0], [78.3, 522.0], [78.4, 525.0], [78.5, 526.0], [78.6, 527.0], [78.7, 529.0], [78.8, 530.0], [78.9, 531.0], [79.0, 536.0], [79.1, 538.0], [79.2, 539.0], [79.3, 541.0], [79.4, 542.0], [79.5, 543.0], [79.6, 544.0], [79.7, 545.0], [79.8, 547.0], [79.9, 549.0], [80.0, 550.0], [80.1, 552.0], [80.2, 555.0], [80.3, 557.0], [80.4, 558.0], [80.5, 559.0], [80.6, 563.0], [80.7, 566.0], [80.8, 567.0], [80.9, 568.0], [81.0, 569.0], [81.1, 572.0], [81.2, 573.0], [81.3, 574.0], [81.4, 575.0], [81.5, 576.0], [81.6, 578.0], [81.7, 579.0], [81.8, 581.0], [81.9, 584.0], [82.0, 586.0], [82.1, 587.0], [82.2, 589.0], [82.3, 591.0], [82.4, 594.0], [82.5, 595.0], [82.6, 598.0], [82.7, 600.0], [82.8, 602.0], [82.9, 603.0], [83.0, 605.0], [83.1, 610.0], [83.2, 613.0], [83.3, 614.0], [83.4, 617.0], [83.5, 618.0], [83.6, 620.0], [83.7, 622.0], [83.8, 624.0], [83.9, 627.0], [84.0, 628.0], [84.1, 630.0], [84.2, 633.0], [84.3, 636.0], [84.4, 637.0], [84.5, 639.0], [84.6, 643.0], [84.7, 645.0], [84.8, 648.0], [84.9, 649.0], [85.0, 652.0], [85.1, 653.0], [85.2, 654.0], [85.3, 656.0], [85.4, 660.0], [85.5, 663.0], [85.6, 664.0], [85.7, 665.0], [85.8, 666.0], [85.9, 668.0], [86.0, 668.0], [86.1, 672.0], [86.2, 675.0], [86.3, 678.0], [86.4, 679.0], [86.5, 681.0], [86.6, 684.0], [86.7, 687.0], [86.8, 695.0], [86.9, 697.0], [87.0, 700.0], [87.1, 702.0], [87.2, 705.0], [87.3, 708.0], [87.4, 712.0], [87.5, 716.0], [87.6, 719.0], [87.7, 722.0], [87.8, 723.0], [87.9, 725.0], [88.0, 727.0], [88.1, 732.0], [88.2, 733.0], [88.3, 735.0], [88.4, 737.0], [88.5, 740.0], [88.6, 745.0], [88.7, 747.0], [88.8, 751.0], [88.9, 753.0], [89.0, 755.0], [89.1, 758.0], [89.2, 761.0], [89.3, 765.0], [89.4, 767.0], [89.5, 770.0], [89.6, 772.0], [89.7, 774.0], [89.8, 779.0], [89.9, 784.0], [90.0, 788.0], [90.1, 793.0], [90.2, 799.0], [90.3, 801.0], [90.4, 804.0], [90.5, 806.0], [90.6, 812.0], [90.7, 813.0], [90.8, 816.0], [90.9, 824.0], [91.0, 826.0], [91.1, 831.0], [91.2, 836.0], [91.3, 838.0], [91.4, 840.0], [91.5, 845.0], [91.6, 850.0], [91.7, 857.0], [91.8, 863.0], [91.9, 867.0], [92.0, 873.0], [92.1, 876.0], [92.2, 880.0], [92.3, 884.0], [92.4, 888.0], [92.5, 894.0], [92.6, 900.0], [92.7, 909.0], [92.8, 912.0], [92.9, 913.0], [93.0, 920.0], [93.1, 927.0], [93.2, 931.0], [93.3, 936.0], [93.4, 944.0], [93.5, 946.0], [93.6, 949.0], [93.7, 954.0], [93.8, 959.0], [93.9, 963.0], [94.0, 968.0], [94.1, 973.0], [94.2, 982.0], [94.3, 984.0], [94.4, 988.0], [94.5, 995.0], [94.6, 1001.0], [94.7, 1006.0], [94.8, 1013.0], [94.9, 1022.0], [95.0, 1037.0], [95.1, 1043.0], [95.2, 1047.0], [95.3, 1051.0], [95.4, 1058.0], [95.5, 1075.0], [95.6, 1081.0], [95.7, 1086.0], [95.8, 1092.0], [95.9, 1097.0], [96.0, 1104.0], [96.1, 1118.0], [96.2, 1123.0], [96.3, 1143.0], [96.4, 1156.0], [96.5, 1161.0], [96.6, 1169.0], [96.7, 1181.0], [96.8, 1201.0], [96.9, 1215.0], [97.0, 1228.0], [97.1, 1255.0], [97.2, 1284.0], [97.3, 1295.0], [97.4, 1304.0], [97.5, 1318.0], [97.6, 1329.0], [97.7, 1338.0], [97.8, 1362.0], [97.9, 1374.0], [98.0, 1387.0], [98.1, 1420.0], [98.2, 1453.0], [98.3, 1458.0], [98.4, 1474.0], [98.5, 1494.0], [98.6, 1510.0], [98.7, 1543.0], [98.8, 1575.0], [98.9, 1603.0], [99.0, 1647.0], [99.1, 1664.0], [99.2, 1709.0], [99.3, 1751.0], [99.4, 1793.0], [99.5, 1824.0], [99.6, 1974.0], [99.7, 2042.0], [99.8, 2095.0], [99.9, 2348.0], [100.0, 3269.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 2157.0, "series": [{"data": [[0.0, 2157.0], [600.0, 229.0], [700.0, 174.0], [800.0, 121.0], [900.0, 106.0], [1000.0, 70.0], [1100.0, 46.0], [1200.0, 29.0], [1300.0, 36.0], [1400.0, 29.0], [1500.0, 15.0], [100.0, 632.0], [1600.0, 16.0], [1700.0, 16.0], [1800.0, 4.0], [1900.0, 4.0], [2000.0, 10.0], [2100.0, 2.0], [2200.0, 1.0], [2300.0, 2.0], [2400.0, 1.0], [2600.0, 1.0], [3000.0, 1.0], [200.0, 565.0], [3200.0, 2.0], [300.0, 361.0], [400.0, 338.0], [500.0, 304.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3200.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 75.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 4055.0, "series": [{"data": [[0.0, 4055.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1142.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 75.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.772277227722775, "minX": 1.60231314E12, "maxY": 10.0, "series": [{"data": [[1.60231314E12, 9.772277227722775], [1.60231332E12, 9.961106309420916], [1.6023132E12, 10.0], [1.60231326E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60231332E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 314.2844368340936, "minX": 1.0, "maxY": 3009.0, "series": [{"data": [[4.0, 1673.5], [8.0, 636.5], [2.0, 2153.0], [1.0, 3009.0], [9.0, 1177.0], [5.0, 489.0], [10.0, 314.2844368340936], [6.0, 1094.0], [3.0, 2095.0], [7.0, 1357.5]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.987101669195768, 317.2539833080418]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 864.3, "minX": 1.60231314E12, "maxY": 1691305.4166666667, "series": [{"data": [[1.60231314E12, 49078.6], [1.60231332E12, 1279355.5], [1.6023132E12, 1691305.4166666667], [1.60231326E12, 1271704.1333333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60231314E12, 864.3], [1.60231332E12, 10235.7], [1.6023132E12, 14451.466666666667], [1.60231326E12, 20028.083333333332]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60231332E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 254.78395585738542, "minX": 1.60231314E12, "maxY": 379.8003457216942, "series": [{"data": [[1.60231314E12, 339.37623762376245], [1.60231332E12, 379.8003457216942], [1.6023132E12, 361.0289505428225], [1.60231326E12, 254.78395585738542]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60231332E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 254.55475382003382, "minX": 1.60231314E12, "maxY": 379.36560069144303, "series": [{"data": [[1.60231314E12, 339.03960396039605], [1.60231332E12, 379.36560069144303], [1.6023132E12, 360.5850422195413], [1.60231326E12, 254.55475382003382]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60231332E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.008443908323281053, "minX": 1.60231314E12, "maxY": 0.9108910891089115, "series": [{"data": [[1.60231314E12, 0.9108910891089115], [1.60231332E12, 0.00864304235090753], [1.6023132E12, 0.008443908323281053], [1.60231326E12, 0.009762308998302239]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60231332E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 28.0, "minX": 1.60231314E12, "maxY": 3269.0, "series": [{"data": [[1.60231314E12, 1166.0], [1.60231332E12, 3269.0], [1.6023132E12, 2070.0], [1.60231326E12, 2176.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60231314E12, 39.0], [1.60231332E12, 32.0], [1.6023132E12, 31.0], [1.60231326E12, 32.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60231314E12, 39.0], [1.60231332E12, 32.0], [1.6023132E12, 31.424100158214568], [1.60231326E12, 32.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60231314E12, 39.0], [1.60231332E12, 32.0], [1.6023132E12, 31.0], [1.60231326E12, 32.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60231314E12, 39.0], [1.60231332E12, 28.0], [1.6023132E12, 29.0], [1.60231326E12, 28.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60231314E12, 175.0], [1.60231332E12, 223.0], [1.6023132E12, 245.5], [1.60231326E12, 130.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60231332E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 42.0, "minX": 1.0, "maxY": 3009.0, "series": [{"data": [[2.0, 1229.5], [4.0, 2124.0], [5.0, 2317.0], [6.0, 1456.0], [8.0, 1155.5], [9.0, 967.0], [10.0, 1290.0], [11.0, 966.5], [12.0, 678.0], [13.0, 733.0], [14.0, 618.5], [15.0, 601.5], [16.0, 388.5], [17.0, 487.0], [18.0, 461.0], [19.0, 433.0], [20.0, 427.0], [21.0, 360.5], [22.0, 368.5], [23.0, 396.5], [24.0, 208.5], [25.0, 429.5], [26.0, 272.5], [27.0, 335.0], [28.0, 317.0], [29.0, 265.0], [30.0, 206.5], [31.0, 147.0], [32.0, 82.0], [33.0, 237.5], [35.0, 257.0], [34.0, 221.5], [36.0, 268.5], [37.0, 178.5], [38.0, 89.0], [41.0, 70.0], [42.0, 88.5], [44.0, 151.0], [46.0, 113.5], [49.0, 124.0], [51.0, 105.0], [53.0, 93.0], [52.0, 74.5], [55.0, 81.5], [54.0, 85.0], [57.0, 76.0], [56.0, 136.5], [58.0, 88.0], [59.0, 110.5], [61.0, 157.0], [60.0, 77.5], [68.0, 77.0], [70.0, 76.0], [69.0, 108.0], [74.0, 113.5], [72.0, 45.0], [77.0, 42.0], [83.0, 81.5], [80.0, 98.5], [88.0, 76.0], [92.0, 76.5], [1.0, 3009.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 92.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 42.0, "minX": 1.0, "maxY": 3009.0, "series": [{"data": [[2.0, 1229.0], [4.0, 2123.5], [5.0, 2316.0], [6.0, 1455.0], [8.0, 1155.5], [9.0, 963.0], [10.0, 1288.5], [11.0, 963.0], [12.0, 677.5], [13.0, 733.0], [14.0, 617.5], [15.0, 599.0], [16.0, 387.0], [17.0, 487.0], [18.0, 461.0], [19.0, 433.0], [20.0, 425.0], [21.0, 360.5], [22.0, 368.0], [23.0, 396.5], [24.0, 208.0], [25.0, 429.5], [26.0, 272.5], [27.0, 335.0], [28.0, 317.0], [29.0, 265.0], [30.0, 206.5], [31.0, 144.0], [32.0, 82.0], [33.0, 237.0], [35.0, 257.0], [34.0, 220.5], [36.0, 268.5], [37.0, 178.5], [38.0, 89.0], [41.0, 70.0], [42.0, 88.5], [44.0, 151.0], [46.0, 113.5], [49.0, 123.0], [51.0, 105.0], [53.0, 93.0], [52.0, 74.5], [55.0, 81.5], [54.0, 85.0], [57.0, 76.0], [56.0, 136.5], [58.0, 87.5], [59.0, 110.5], [61.0, 157.0], [60.0, 77.5], [68.0, 77.0], [70.0, 76.0], [69.0, 108.0], [74.0, 113.0], [72.0, 45.0], [77.0, 42.0], [83.0, 81.5], [80.0, 98.0], [88.0, 76.0], [92.0, 76.5], [1.0, 3009.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 92.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1.85, "minX": 1.60231314E12, "maxY": 39.266666666666666, "series": [{"data": [[1.60231314E12, 1.85], [1.60231332E12, 19.116666666666667], [1.6023132E12, 27.633333333333333], [1.60231326E12, 39.266666666666666]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60231332E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1.6833333333333333, "minX": 1.60231314E12, "maxY": 39.266666666666666, "series": [{"data": [[1.60231314E12, 1.6833333333333333], [1.60231332E12, 19.283333333333335], [1.6023132E12, 27.633333333333333], [1.60231326E12, 39.266666666666666]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60231332E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.6833333333333333, "minX": 1.60231314E12, "maxY": 39.266666666666666, "series": [{"data": [[1.60231314E12, 1.6833333333333333], [1.60231332E12, 19.283333333333335], [1.6023132E12, 27.633333333333333], [1.60231326E12, 39.266666666666666]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60231332E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.6833333333333333, "minX": 1.60231314E12, "maxY": 39.266666666666666, "series": [{"data": [[1.60231314E12, 1.6833333333333333], [1.60231332E12, 19.283333333333335], [1.6023132E12, 27.633333333333333], [1.60231326E12, 39.266666666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60231332E12, "title": "Total Transactions Per Second"}},
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

