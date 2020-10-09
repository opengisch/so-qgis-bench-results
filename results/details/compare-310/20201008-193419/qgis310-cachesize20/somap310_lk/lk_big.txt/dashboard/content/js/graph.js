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
        data: {"result": {"minY": 27.0, "minX": 0.0, "maxY": 3188.0, "series": [{"data": [[0.0, 27.0], [0.1, 28.0], [0.2, 29.0], [0.3, 30.0], [0.4, 30.0], [0.5, 30.0], [0.6, 31.0], [0.7, 31.0], [0.8, 31.0], [0.9, 31.0], [1.0, 32.0], [1.1, 32.0], [1.2, 32.0], [1.3, 32.0], [1.4, 33.0], [1.5, 33.0], [1.6, 33.0], [1.7, 33.0], [1.8, 34.0], [1.9, 34.0], [2.0, 34.0], [2.1, 34.0], [2.2, 34.0], [2.3, 34.0], [2.4, 34.0], [2.5, 34.0], [2.6, 35.0], [2.7, 35.0], [2.8, 35.0], [2.9, 35.0], [3.0, 35.0], [3.1, 35.0], [3.2, 35.0], [3.3, 35.0], [3.4, 35.0], [3.5, 35.0], [3.6, 35.0], [3.7, 35.0], [3.8, 35.0], [3.9, 36.0], [4.0, 36.0], [4.1, 36.0], [4.2, 36.0], [4.3, 36.0], [4.4, 36.0], [4.5, 36.0], [4.6, 36.0], [4.7, 36.0], [4.8, 36.0], [4.9, 36.0], [5.0, 36.0], [5.1, 36.0], [5.2, 36.0], [5.3, 37.0], [5.4, 37.0], [5.5, 37.0], [5.6, 37.0], [5.7, 37.0], [5.8, 37.0], [5.9, 37.0], [6.0, 37.0], [6.1, 37.0], [6.2, 37.0], [6.3, 37.0], [6.4, 37.0], [6.5, 37.0], [6.6, 38.0], [6.7, 38.0], [6.8, 38.0], [6.9, 38.0], [7.0, 38.0], [7.1, 38.0], [7.2, 38.0], [7.3, 38.0], [7.4, 38.0], [7.5, 38.0], [7.6, 38.0], [7.7, 38.0], [7.8, 38.0], [7.9, 38.0], [8.0, 38.0], [8.1, 39.0], [8.2, 39.0], [8.3, 39.0], [8.4, 39.0], [8.5, 39.0], [8.6, 39.0], [8.7, 39.0], [8.8, 39.0], [8.9, 39.0], [9.0, 39.0], [9.1, 39.0], [9.2, 39.0], [9.3, 39.0], [9.4, 39.0], [9.5, 39.0], [9.6, 39.0], [9.7, 39.0], [9.8, 40.0], [9.9, 40.0], [10.0, 40.0], [10.1, 40.0], [10.2, 40.0], [10.3, 40.0], [10.4, 40.0], [10.5, 40.0], [10.6, 40.0], [10.7, 40.0], [10.8, 40.0], [10.9, 40.0], [11.0, 40.0], [11.1, 41.0], [11.2, 41.0], [11.3, 41.0], [11.4, 41.0], [11.5, 41.0], [11.6, 41.0], [11.7, 41.0], [11.8, 41.0], [11.9, 41.0], [12.0, 42.0], [12.1, 42.0], [12.2, 42.0], [12.3, 42.0], [12.4, 42.0], [12.5, 42.0], [12.6, 42.0], [12.7, 42.0], [12.8, 42.0], [12.9, 42.0], [13.0, 43.0], [13.1, 43.0], [13.2, 43.0], [13.3, 43.0], [13.4, 43.0], [13.5, 43.0], [13.6, 44.0], [13.7, 44.0], [13.8, 44.0], [13.9, 44.0], [14.0, 44.0], [14.1, 44.0], [14.2, 45.0], [14.3, 45.0], [14.4, 45.0], [14.5, 45.0], [14.6, 45.0], [14.7, 46.0], [14.8, 46.0], [14.9, 46.0], [15.0, 46.0], [15.1, 46.0], [15.2, 47.0], [15.3, 47.0], [15.4, 47.0], [15.5, 48.0], [15.6, 48.0], [15.7, 48.0], [15.8, 49.0], [15.9, 49.0], [16.0, 49.0], [16.1, 50.0], [16.2, 50.0], [16.3, 51.0], [16.4, 51.0], [16.5, 52.0], [16.6, 53.0], [16.7, 54.0], [16.8, 54.0], [16.9, 54.0], [17.0, 55.0], [17.1, 55.0], [17.2, 56.0], [17.3, 57.0], [17.4, 57.0], [17.5, 57.0], [17.6, 58.0], [17.7, 58.0], [17.8, 58.0], [17.9, 58.0], [18.0, 59.0], [18.1, 59.0], [18.2, 59.0], [18.3, 59.0], [18.4, 60.0], [18.5, 60.0], [18.6, 60.0], [18.7, 61.0], [18.8, 61.0], [18.9, 61.0], [19.0, 61.0], [19.1, 62.0], [19.2, 62.0], [19.3, 62.0], [19.4, 62.0], [19.5, 63.0], [19.6, 63.0], [19.7, 63.0], [19.8, 63.0], [19.9, 63.0], [20.0, 64.0], [20.1, 64.0], [20.2, 64.0], [20.3, 64.0], [20.4, 64.0], [20.5, 64.0], [20.6, 65.0], [20.7, 65.0], [20.8, 65.0], [20.9, 65.0], [21.0, 65.0], [21.1, 65.0], [21.2, 66.0], [21.3, 66.0], [21.4, 66.0], [21.5, 66.0], [21.6, 66.0], [21.7, 67.0], [21.8, 67.0], [21.9, 67.0], [22.0, 67.0], [22.1, 67.0], [22.2, 67.0], [22.3, 67.0], [22.4, 67.0], [22.5, 68.0], [22.6, 68.0], [22.7, 68.0], [22.8, 68.0], [22.9, 68.0], [23.0, 68.0], [23.1, 68.0], [23.2, 68.0], [23.3, 68.0], [23.4, 68.0], [23.5, 69.0], [23.6, 69.0], [23.7, 69.0], [23.8, 69.0], [23.9, 69.0], [24.0, 69.0], [24.1, 69.0], [24.2, 69.0], [24.3, 69.0], [24.4, 69.0], [24.5, 69.0], [24.6, 69.0], [24.7, 70.0], [24.8, 70.0], [24.9, 70.0], [25.0, 70.0], [25.1, 70.0], [25.2, 70.0], [25.3, 70.0], [25.4, 70.0], [25.5, 71.0], [25.6, 71.0], [25.7, 71.0], [25.8, 71.0], [25.9, 71.0], [26.0, 71.0], [26.1, 71.0], [26.2, 71.0], [26.3, 71.0], [26.4, 71.0], [26.5, 71.0], [26.6, 71.0], [26.7, 71.0], [26.8, 71.0], [26.9, 72.0], [27.0, 72.0], [27.1, 72.0], [27.2, 72.0], [27.3, 72.0], [27.4, 72.0], [27.5, 72.0], [27.6, 72.0], [27.7, 72.0], [27.8, 72.0], [27.9, 72.0], [28.0, 72.0], [28.1, 73.0], [28.2, 73.0], [28.3, 73.0], [28.4, 73.0], [28.5, 73.0], [28.6, 73.0], [28.7, 73.0], [28.8, 73.0], [28.9, 73.0], [29.0, 73.0], [29.1, 73.0], [29.2, 73.0], [29.3, 74.0], [29.4, 74.0], [29.5, 74.0], [29.6, 74.0], [29.7, 74.0], [29.8, 74.0], [29.9, 74.0], [30.0, 74.0], [30.1, 74.0], [30.2, 74.0], [30.3, 74.0], [30.4, 75.0], [30.5, 75.0], [30.6, 75.0], [30.7, 75.0], [30.8, 75.0], [30.9, 75.0], [31.0, 75.0], [31.1, 75.0], [31.2, 75.0], [31.3, 75.0], [31.4, 75.0], [31.5, 75.0], [31.6, 76.0], [31.7, 76.0], [31.8, 76.0], [31.9, 76.0], [32.0, 76.0], [32.1, 76.0], [32.2, 76.0], [32.3, 76.0], [32.4, 76.0], [32.5, 76.0], [32.6, 77.0], [32.7, 77.0], [32.8, 77.0], [32.9, 77.0], [33.0, 77.0], [33.1, 77.0], [33.2, 78.0], [33.3, 78.0], [33.4, 78.0], [33.5, 78.0], [33.6, 78.0], [33.7, 78.0], [33.8, 79.0], [33.9, 79.0], [34.0, 79.0], [34.1, 79.0], [34.2, 79.0], [34.3, 79.0], [34.4, 79.0], [34.5, 80.0], [34.6, 80.0], [34.7, 80.0], [34.8, 80.0], [34.9, 80.0], [35.0, 80.0], [35.1, 80.0], [35.2, 81.0], [35.3, 81.0], [35.4, 81.0], [35.5, 81.0], [35.6, 81.0], [35.7, 82.0], [35.8, 82.0], [35.9, 82.0], [36.0, 82.0], [36.1, 82.0], [36.2, 83.0], [36.3, 83.0], [36.4, 84.0], [36.5, 84.0], [36.6, 84.0], [36.7, 84.0], [36.8, 84.0], [36.9, 84.0], [37.0, 85.0], [37.1, 85.0], [37.2, 85.0], [37.3, 86.0], [37.4, 86.0], [37.5, 87.0], [37.6, 87.0], [37.7, 87.0], [37.8, 87.0], [37.9, 88.0], [38.0, 88.0], [38.1, 89.0], [38.2, 89.0], [38.3, 90.0], [38.4, 90.0], [38.5, 91.0], [38.6, 91.0], [38.7, 91.0], [38.8, 92.0], [38.9, 92.0], [39.0, 93.0], [39.1, 94.0], [39.2, 94.0], [39.3, 94.0], [39.4, 96.0], [39.5, 96.0], [39.6, 97.0], [39.7, 97.0], [39.8, 98.0], [39.9, 99.0], [40.0, 99.0], [40.1, 99.0], [40.2, 100.0], [40.3, 100.0], [40.4, 101.0], [40.5, 102.0], [40.6, 102.0], [40.7, 103.0], [40.8, 103.0], [40.9, 104.0], [41.0, 105.0], [41.1, 105.0], [41.2, 106.0], [41.3, 107.0], [41.4, 108.0], [41.5, 108.0], [41.6, 109.0], [41.7, 109.0], [41.8, 110.0], [41.9, 110.0], [42.0, 112.0], [42.1, 112.0], [42.2, 112.0], [42.3, 113.0], [42.4, 113.0], [42.5, 114.0], [42.6, 115.0], [42.7, 115.0], [42.8, 116.0], [42.9, 117.0], [43.0, 117.0], [43.1, 118.0], [43.2, 118.0], [43.3, 118.0], [43.4, 119.0], [43.5, 119.0], [43.6, 120.0], [43.7, 120.0], [43.8, 121.0], [43.9, 121.0], [44.0, 121.0], [44.1, 122.0], [44.2, 122.0], [44.3, 122.0], [44.4, 123.0], [44.5, 123.0], [44.6, 124.0], [44.7, 124.0], [44.8, 125.0], [44.9, 125.0], [45.0, 126.0], [45.1, 126.0], [45.2, 127.0], [45.3, 127.0], [45.4, 128.0], [45.5, 128.0], [45.6, 129.0], [45.7, 130.0], [45.8, 130.0], [45.9, 130.0], [46.0, 131.0], [46.1, 131.0], [46.2, 132.0], [46.3, 132.0], [46.4, 133.0], [46.5, 133.0], [46.6, 133.0], [46.7, 134.0], [46.8, 134.0], [46.9, 135.0], [47.0, 135.0], [47.1, 136.0], [47.2, 137.0], [47.3, 137.0], [47.4, 138.0], [47.5, 139.0], [47.6, 139.0], [47.7, 140.0], [47.8, 141.0], [47.9, 142.0], [48.0, 142.0], [48.1, 143.0], [48.2, 144.0], [48.3, 145.0], [48.4, 146.0], [48.5, 147.0], [48.6, 148.0], [48.7, 149.0], [48.8, 150.0], [48.9, 152.0], [49.0, 153.0], [49.1, 153.0], [49.2, 155.0], [49.3, 156.0], [49.4, 157.0], [49.5, 159.0], [49.6, 160.0], [49.7, 160.0], [49.8, 161.0], [49.9, 163.0], [50.0, 163.0], [50.1, 164.0], [50.2, 164.0], [50.3, 165.0], [50.4, 166.0], [50.5, 167.0], [50.6, 168.0], [50.7, 169.0], [50.8, 169.0], [50.9, 171.0], [51.0, 172.0], [51.1, 173.0], [51.2, 174.0], [51.3, 176.0], [51.4, 177.0], [51.5, 180.0], [51.6, 181.0], [51.7, 183.0], [51.8, 184.0], [51.9, 185.0], [52.0, 185.0], [52.1, 186.0], [52.2, 187.0], [52.3, 188.0], [52.4, 190.0], [52.5, 191.0], [52.6, 192.0], [52.7, 193.0], [52.8, 194.0], [52.9, 195.0], [53.0, 197.0], [53.1, 198.0], [53.2, 198.0], [53.3, 199.0], [53.4, 200.0], [53.5, 201.0], [53.6, 202.0], [53.7, 202.0], [53.8, 203.0], [53.9, 204.0], [54.0, 204.0], [54.1, 205.0], [54.2, 206.0], [54.3, 207.0], [54.4, 207.0], [54.5, 208.0], [54.6, 209.0], [54.7, 210.0], [54.8, 211.0], [54.9, 211.0], [55.0, 212.0], [55.1, 213.0], [55.2, 214.0], [55.3, 215.0], [55.4, 216.0], [55.5, 216.0], [55.6, 218.0], [55.7, 218.0], [55.8, 219.0], [55.9, 221.0], [56.0, 222.0], [56.1, 223.0], [56.2, 224.0], [56.3, 225.0], [56.4, 226.0], [56.5, 226.0], [56.6, 227.0], [56.7, 230.0], [56.8, 231.0], [56.9, 232.0], [57.0, 233.0], [57.1, 233.0], [57.2, 234.0], [57.3, 235.0], [57.4, 236.0], [57.5, 236.0], [57.6, 237.0], [57.7, 237.0], [57.8, 238.0], [57.9, 239.0], [58.0, 239.0], [58.1, 241.0], [58.2, 241.0], [58.3, 242.0], [58.4, 243.0], [58.5, 244.0], [58.6, 245.0], [58.7, 245.0], [58.8, 246.0], [58.9, 247.0], [59.0, 249.0], [59.1, 249.0], [59.2, 250.0], [59.3, 251.0], [59.4, 252.0], [59.5, 253.0], [59.6, 254.0], [59.7, 255.0], [59.8, 255.0], [59.9, 256.0], [60.0, 257.0], [60.1, 257.0], [60.2, 259.0], [60.3, 260.0], [60.4, 261.0], [60.5, 262.0], [60.6, 264.0], [60.7, 265.0], [60.8, 266.0], [60.9, 267.0], [61.0, 267.0], [61.1, 268.0], [61.2, 269.0], [61.3, 270.0], [61.4, 272.0], [61.5, 272.0], [61.6, 273.0], [61.7, 274.0], [61.8, 275.0], [61.9, 275.0], [62.0, 277.0], [62.1, 278.0], [62.2, 278.0], [62.3, 279.0], [62.4, 280.0], [62.5, 281.0], [62.6, 282.0], [62.7, 283.0], [62.8, 284.0], [62.9, 286.0], [63.0, 288.0], [63.1, 289.0], [63.2, 290.0], [63.3, 291.0], [63.4, 293.0], [63.5, 294.0], [63.6, 295.0], [63.7, 296.0], [63.8, 297.0], [63.9, 298.0], [64.0, 299.0], [64.1, 300.0], [64.2, 301.0], [64.3, 303.0], [64.4, 304.0], [64.5, 305.0], [64.6, 306.0], [64.7, 307.0], [64.8, 308.0], [64.9, 309.0], [65.0, 311.0], [65.1, 312.0], [65.2, 313.0], [65.3, 314.0], [65.4, 316.0], [65.5, 318.0], [65.6, 319.0], [65.7, 321.0], [65.8, 322.0], [65.9, 323.0], [66.0, 324.0], [66.1, 326.0], [66.2, 327.0], [66.3, 329.0], [66.4, 330.0], [66.5, 332.0], [66.6, 332.0], [66.7, 334.0], [66.8, 334.0], [66.9, 337.0], [67.0, 340.0], [67.1, 342.0], [67.2, 344.0], [67.3, 347.0], [67.4, 349.0], [67.5, 351.0], [67.6, 353.0], [67.7, 354.0], [67.8, 356.0], [67.9, 357.0], [68.0, 359.0], [68.1, 360.0], [68.2, 362.0], [68.3, 363.0], [68.4, 365.0], [68.5, 366.0], [68.6, 367.0], [68.7, 367.0], [68.8, 370.0], [68.9, 371.0], [69.0, 372.0], [69.1, 373.0], [69.2, 374.0], [69.3, 376.0], [69.4, 377.0], [69.5, 378.0], [69.6, 379.0], [69.7, 380.0], [69.8, 381.0], [69.9, 382.0], [70.0, 384.0], [70.1, 385.0], [70.2, 386.0], [70.3, 389.0], [70.4, 391.0], [70.5, 392.0], [70.6, 395.0], [70.7, 395.0], [70.8, 396.0], [70.9, 397.0], [71.0, 398.0], [71.1, 400.0], [71.2, 401.0], [71.3, 401.0], [71.4, 403.0], [71.5, 405.0], [71.6, 407.0], [71.7, 409.0], [71.8, 411.0], [71.9, 413.0], [72.0, 415.0], [72.1, 417.0], [72.2, 418.0], [72.3, 419.0], [72.4, 421.0], [72.5, 422.0], [72.6, 424.0], [72.7, 425.0], [72.8, 426.0], [72.9, 427.0], [73.0, 428.0], [73.1, 429.0], [73.2, 430.0], [73.3, 432.0], [73.4, 434.0], [73.5, 435.0], [73.6, 437.0], [73.7, 438.0], [73.8, 438.0], [73.9, 439.0], [74.0, 440.0], [74.1, 442.0], [74.2, 443.0], [74.3, 444.0], [74.4, 444.0], [74.5, 445.0], [74.6, 446.0], [74.7, 446.0], [74.8, 447.0], [74.9, 449.0], [75.0, 450.0], [75.1, 452.0], [75.2, 453.0], [75.3, 454.0], [75.4, 455.0], [75.5, 456.0], [75.6, 457.0], [75.7, 458.0], [75.8, 459.0], [75.9, 460.0], [76.0, 460.0], [76.1, 462.0], [76.2, 464.0], [76.3, 467.0], [76.4, 468.0], [76.5, 469.0], [76.6, 472.0], [76.7, 474.0], [76.8, 476.0], [76.9, 478.0], [77.0, 480.0], [77.1, 481.0], [77.2, 482.0], [77.3, 484.0], [77.4, 487.0], [77.5, 488.0], [77.6, 491.0], [77.7, 492.0], [77.8, 494.0], [77.9, 496.0], [78.0, 498.0], [78.1, 500.0], [78.2, 501.0], [78.3, 503.0], [78.4, 505.0], [78.5, 507.0], [78.6, 509.0], [78.7, 511.0], [78.8, 512.0], [78.9, 513.0], [79.0, 515.0], [79.1, 517.0], [79.2, 518.0], [79.3, 519.0], [79.4, 520.0], [79.5, 521.0], [79.6, 523.0], [79.7, 525.0], [79.8, 527.0], [79.9, 528.0], [80.0, 530.0], [80.1, 532.0], [80.2, 533.0], [80.3, 534.0], [80.4, 536.0], [80.5, 537.0], [80.6, 539.0], [80.7, 540.0], [80.8, 542.0], [80.9, 543.0], [81.0, 546.0], [81.1, 549.0], [81.2, 551.0], [81.3, 552.0], [81.4, 553.0], [81.5, 555.0], [81.6, 557.0], [81.7, 559.0], [81.8, 560.0], [81.9, 563.0], [82.0, 565.0], [82.1, 566.0], [82.2, 567.0], [82.3, 569.0], [82.4, 571.0], [82.5, 572.0], [82.6, 574.0], [82.7, 576.0], [82.8, 579.0], [82.9, 581.0], [83.0, 582.0], [83.1, 585.0], [83.2, 587.0], [83.3, 589.0], [83.4, 592.0], [83.5, 595.0], [83.6, 596.0], [83.7, 598.0], [83.8, 599.0], [83.9, 601.0], [84.0, 603.0], [84.1, 604.0], [84.2, 605.0], [84.3, 609.0], [84.4, 612.0], [84.5, 615.0], [84.6, 616.0], [84.7, 619.0], [84.8, 620.0], [84.9, 621.0], [85.0, 625.0], [85.1, 627.0], [85.2, 628.0], [85.3, 629.0], [85.4, 630.0], [85.5, 632.0], [85.6, 634.0], [85.7, 635.0], [85.8, 639.0], [85.9, 641.0], [86.0, 643.0], [86.1, 645.0], [86.2, 648.0], [86.3, 651.0], [86.4, 652.0], [86.5, 653.0], [86.6, 654.0], [86.7, 658.0], [86.8, 663.0], [86.9, 667.0], [87.0, 670.0], [87.1, 672.0], [87.2, 673.0], [87.3, 675.0], [87.4, 677.0], [87.5, 679.0], [87.6, 681.0], [87.7, 683.0], [87.8, 684.0], [87.9, 690.0], [88.0, 694.0], [88.1, 696.0], [88.2, 699.0], [88.3, 704.0], [88.4, 707.0], [88.5, 711.0], [88.6, 714.0], [88.7, 717.0], [88.8, 718.0], [88.9, 720.0], [89.0, 725.0], [89.1, 727.0], [89.2, 730.0], [89.3, 734.0], [89.4, 738.0], [89.5, 741.0], [89.6, 743.0], [89.7, 746.0], [89.8, 750.0], [89.9, 753.0], [90.0, 756.0], [90.1, 759.0], [90.2, 761.0], [90.3, 764.0], [90.4, 765.0], [90.5, 774.0], [90.6, 777.0], [90.7, 780.0], [90.8, 785.0], [90.9, 790.0], [91.0, 794.0], [91.1, 798.0], [91.2, 803.0], [91.3, 805.0], [91.4, 807.0], [91.5, 810.0], [91.6, 814.0], [91.7, 817.0], [91.8, 822.0], [91.9, 827.0], [92.0, 832.0], [92.1, 837.0], [92.2, 843.0], [92.3, 846.0], [92.4, 849.0], [92.5, 854.0], [92.6, 861.0], [92.7, 871.0], [92.8, 874.0], [92.9, 876.0], [93.0, 879.0], [93.1, 888.0], [93.2, 891.0], [93.3, 894.0], [93.4, 897.0], [93.5, 904.0], [93.6, 907.0], [93.7, 914.0], [93.8, 922.0], [93.9, 924.0], [94.0, 930.0], [94.1, 931.0], [94.2, 937.0], [94.3, 945.0], [94.4, 953.0], [94.5, 956.0], [94.6, 960.0], [94.7, 964.0], [94.8, 975.0], [94.9, 985.0], [95.0, 991.0], [95.1, 995.0], [95.2, 1006.0], [95.3, 1011.0], [95.4, 1014.0], [95.5, 1020.0], [95.6, 1032.0], [95.7, 1038.0], [95.8, 1041.0], [95.9, 1055.0], [96.0, 1062.0], [96.1, 1075.0], [96.2, 1083.0], [96.3, 1096.0], [96.4, 1106.0], [96.5, 1118.0], [96.6, 1129.0], [96.7, 1141.0], [96.8, 1146.0], [96.9, 1158.0], [97.0, 1166.0], [97.1, 1187.0], [97.2, 1213.0], [97.3, 1223.0], [97.4, 1235.0], [97.5, 1245.0], [97.6, 1265.0], [97.7, 1279.0], [97.8, 1290.0], [97.9, 1301.0], [98.0, 1337.0], [98.1, 1351.0], [98.2, 1378.0], [98.3, 1408.0], [98.4, 1424.0], [98.5, 1437.0], [98.6, 1452.0], [98.7, 1476.0], [98.8, 1498.0], [98.9, 1528.0], [99.0, 1541.0], [99.1, 1564.0], [99.2, 1633.0], [99.3, 1683.0], [99.4, 1728.0], [99.5, 1833.0], [99.6, 1924.0], [99.7, 1997.0], [99.8, 2164.0], [99.9, 2317.0], [100.0, 3188.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 2116.0, "series": [{"data": [[0.0, 2116.0], [600.0, 231.0], [700.0, 153.0], [800.0, 122.0], [900.0, 89.0], [1000.0, 63.0], [1100.0, 43.0], [1200.0, 40.0], [1300.0, 19.0], [1400.0, 29.0], [1500.0, 19.0], [100.0, 695.0], [1600.0, 9.0], [1700.0, 5.0], [1800.0, 7.0], [1900.0, 8.0], [2000.0, 2.0], [2100.0, 4.0], [2200.0, 3.0], [2300.0, 2.0], [2600.0, 1.0], [3000.0, 1.0], [3100.0, 2.0], [200.0, 565.0], [300.0, 372.0], [400.0, 369.0], [500.0, 303.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3100.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 62.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 4122.0, "series": [{"data": [[0.0, 4122.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1088.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 62.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.964980544747078, "minX": 1.60218786E12, "maxY": 10.0, "series": [{"data": [[1.60218792E12, 10.0], [1.60218798E12, 9.964980544747078], [1.60218786E12, 9.984224965706447]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60218798E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 304.8696479543287, "minX": 1.0, "maxY": 3045.0, "series": [{"data": [[4.0, 1218.0], [8.0, 508.6666666666667], [2.0, 2384.0], [1.0, 3045.0], [9.0, 786.5], [5.0, 1109.0], [10.0, 304.8696479543287], [6.0, 1975.0], [3.0, 2164.0], [7.0, 2317.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.987101669195768, 308.12025796661567]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 11314.683333333332, "minX": 1.60218786E12, "maxY": 1577586.2166666666, "series": [{"data": [[1.60218792E12, 1268815.3166666667], [1.60218798E12, 1445044.6333333333], [1.60218786E12, 1577586.2166666666]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60218792E12, 21677.666666666668], [1.60218798E12, 11314.683333333332], [1.60218786E12, 12587.2]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60218798E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 238.82127323052575, "minX": 1.60218786E12, "maxY": 386.84156378600807, "series": [{"data": [[1.60218792E12, 238.82127323052575], [1.60218798E12, 355.18754863813234], [1.60218786E12, 386.84156378600807]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60218798E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 238.59035191775394, "minX": 1.60218786E12, "maxY": 386.3429355281207, "series": [{"data": [[1.60218792E12, 238.59035191775394], [1.60218798E12, 354.7369649805445], [1.60218786E12, 386.3429355281207]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60218798E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0062256809338521475, "minX": 1.60218786E12, "maxY": 0.08230452674897135, "series": [{"data": [[1.60218792E12, 0.009885330170027696], [1.60218798E12, 0.0062256809338521475], [1.60218786E12, 0.08230452674897135]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60218798E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 27.0, "minX": 1.60218786E12, "maxY": 3188.0, "series": [{"data": [[1.60218792E12, 2009.0], [1.60218798E12, 3188.0], [1.60218786E12, 1833.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60218792E12, 31.0], [1.60218798E12, 31.0], [1.60218786E12, 34.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60218792E12, 31.0], [1.60218798E12, 31.0], [1.60218786E12, 34.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60218792E12, 31.0], [1.60218798E12, 31.0], [1.60218786E12, 34.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60218792E12, 28.0], [1.60218798E12, 27.0], [1.60218786E12, 28.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60218792E12, 120.0], [1.60218798E12, 225.0], [1.60218786E12, 269.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60218798E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 45.5, "minX": 3.0, "maxY": 2201.0, "series": [{"data": [[3.0, 1155.0], [4.0, 2201.0], [5.0, 1500.0], [6.0, 1023.5], [7.0, 1057.0], [8.0, 906.0], [9.0, 1233.0], [10.0, 797.0], [11.0, 1017.0], [12.0, 706.0], [13.0, 682.0], [14.0, 649.0], [15.0, 683.0], [16.0, 620.5], [17.0, 518.0], [18.0, 535.0], [19.0, 454.0], [20.0, 505.5], [21.0, 408.0], [22.0, 383.5], [23.0, 405.5], [24.0, 394.5], [25.0, 219.5], [26.0, 122.5], [27.0, 294.0], [28.0, 279.5], [29.0, 361.0], [30.0, 295.0], [31.0, 219.5], [33.0, 242.0], [32.0, 241.5], [34.0, 78.5], [35.0, 221.5], [36.0, 208.0], [37.0, 127.0], [38.0, 81.5], [39.0, 250.0], [41.0, 196.0], [43.0, 73.0], [42.0, 203.0], [45.0, 137.0], [44.0, 76.5], [49.0, 198.0], [50.0, 144.5], [51.0, 125.0], [53.0, 102.0], [52.0, 71.0], [54.0, 89.0], [55.0, 74.0], [56.0, 86.5], [58.0, 146.0], [63.0, 121.0], [62.0, 45.5], [65.0, 76.0], [66.0, 79.0], [67.0, 56.0], [70.0, 70.5], [69.0, 124.0], [71.0, 61.0], [73.0, 142.0], [74.0, 94.5], [77.0, 76.0], [82.0, 74.0], [85.0, 126.0], [86.0, 76.5], [94.0, 123.0], [95.0, 72.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 95.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 45.5, "minX": 3.0, "maxY": 2200.5, "series": [{"data": [[3.0, 1152.5], [4.0, 2200.5], [5.0, 1499.0], [6.0, 1021.5], [7.0, 1054.0], [8.0, 904.5], [9.0, 1233.0], [10.0, 795.5], [11.0, 1016.0], [12.0, 705.0], [13.0, 682.0], [14.0, 649.0], [15.0, 677.0], [16.0, 620.0], [17.0, 516.0], [18.0, 535.0], [19.0, 452.0], [20.0, 504.5], [21.0, 407.0], [22.0, 383.5], [23.0, 405.5], [24.0, 394.5], [25.0, 219.5], [26.0, 122.5], [27.0, 293.5], [28.0, 279.0], [29.0, 361.0], [30.0, 293.5], [31.0, 219.5], [33.0, 240.0], [32.0, 241.5], [34.0, 78.0], [35.0, 221.5], [36.0, 207.5], [37.0, 127.0], [38.0, 81.5], [39.0, 249.0], [41.0, 195.5], [43.0, 73.0], [42.0, 203.0], [45.0, 137.0], [44.0, 76.5], [49.0, 198.0], [50.0, 144.5], [51.0, 125.0], [53.0, 101.0], [52.0, 71.0], [54.0, 89.0], [55.0, 74.0], [56.0, 86.5], [58.0, 145.5], [63.0, 121.0], [62.0, 45.5], [65.0, 76.0], [66.0, 79.0], [67.0, 56.0], [70.0, 70.5], [69.0, 124.0], [71.0, 61.0], [73.0, 142.0], [74.0, 94.0], [77.0, 76.0], [82.0, 74.0], [85.0, 126.0], [86.0, 76.5], [94.0, 123.0], [95.0, 72.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 95.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 21.25, "minX": 1.60218786E12, "maxY": 42.15, "series": [{"data": [[1.60218792E12, 42.15], [1.60218798E12, 21.25], [1.60218786E12, 24.466666666666665]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60218798E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 21.416666666666668, "minX": 1.60218786E12, "maxY": 42.15, "series": [{"data": [[1.60218792E12, 42.15], [1.60218798E12, 21.416666666666668], [1.60218786E12, 24.3]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60218798E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 21.416666666666668, "minX": 1.60218786E12, "maxY": 42.15, "series": [{"data": [[1.60218792E12, 42.15], [1.60218798E12, 21.416666666666668], [1.60218786E12, 24.3]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60218798E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 21.416666666666668, "minX": 1.60218786E12, "maxY": 42.15, "series": [{"data": [[1.60218792E12, 42.15], [1.60218798E12, 21.416666666666668], [1.60218786E12, 24.3]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60218798E12, "title": "Total Transactions Per Second"}},
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

