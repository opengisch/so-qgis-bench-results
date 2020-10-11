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
        data: {"result": {"minY": 29.0, "minX": 0.0, "maxY": 3232.0, "series": [{"data": [[0.0, 29.0], [0.1, 31.0], [0.2, 31.0], [0.3, 31.0], [0.4, 31.0], [0.5, 32.0], [0.6, 32.0], [0.7, 33.0], [0.8, 33.0], [0.9, 33.0], [1.0, 34.0], [1.1, 34.0], [1.2, 34.0], [1.3, 35.0], [1.4, 35.0], [1.5, 35.0], [1.6, 35.0], [1.7, 35.0], [1.8, 36.0], [1.9, 36.0], [2.0, 36.0], [2.1, 36.0], [2.2, 36.0], [2.3, 36.0], [2.4, 36.0], [2.5, 37.0], [2.6, 37.0], [2.7, 37.0], [2.8, 37.0], [2.9, 37.0], [3.0, 37.0], [3.1, 37.0], [3.2, 37.0], [3.3, 38.0], [3.4, 38.0], [3.5, 38.0], [3.6, 38.0], [3.7, 38.0], [3.8, 38.0], [3.9, 38.0], [4.0, 38.0], [4.1, 38.0], [4.2, 38.0], [4.3, 38.0], [4.4, 38.0], [4.5, 38.0], [4.6, 39.0], [4.7, 39.0], [4.8, 39.0], [4.9, 39.0], [5.0, 39.0], [5.1, 39.0], [5.2, 39.0], [5.3, 39.0], [5.4, 39.0], [5.5, 39.0], [5.6, 39.0], [5.7, 39.0], [5.8, 39.0], [5.9, 39.0], [6.0, 39.0], [6.1, 39.0], [6.2, 39.0], [6.3, 39.0], [6.4, 39.0], [6.5, 40.0], [6.6, 40.0], [6.7, 40.0], [6.8, 40.0], [6.9, 40.0], [7.0, 40.0], [7.1, 40.0], [7.2, 40.0], [7.3, 40.0], [7.4, 40.0], [7.5, 40.0], [7.6, 40.0], [7.7, 40.0], [7.8, 40.0], [7.9, 40.0], [8.0, 40.0], [8.1, 40.0], [8.2, 40.0], [8.3, 40.0], [8.4, 41.0], [8.5, 41.0], [8.6, 41.0], [8.7, 41.0], [8.8, 41.0], [8.9, 41.0], [9.0, 41.0], [9.1, 41.0], [9.2, 41.0], [9.3, 41.0], [9.4, 41.0], [9.5, 41.0], [9.6, 41.0], [9.7, 41.0], [9.8, 41.0], [9.9, 41.0], [10.0, 41.0], [10.1, 42.0], [10.2, 42.0], [10.3, 42.0], [10.4, 42.0], [10.5, 42.0], [10.6, 42.0], [10.7, 42.0], [10.8, 42.0], [10.9, 42.0], [11.0, 42.0], [11.1, 42.0], [11.2, 42.0], [11.3, 42.0], [11.4, 42.0], [11.5, 42.0], [11.6, 42.0], [11.7, 42.0], [11.8, 42.0], [11.9, 42.0], [12.0, 42.0], [12.1, 42.0], [12.2, 42.0], [12.3, 42.0], [12.4, 43.0], [12.5, 43.0], [12.6, 43.0], [12.7, 43.0], [12.8, 43.0], [12.9, 43.0], [13.0, 43.0], [13.1, 43.0], [13.2, 43.0], [13.3, 43.0], [13.4, 43.0], [13.5, 43.0], [13.6, 43.0], [13.7, 43.0], [13.8, 43.0], [13.9, 43.0], [14.0, 43.0], [14.1, 44.0], [14.2, 44.0], [14.3, 44.0], [14.4, 44.0], [14.5, 44.0], [14.6, 44.0], [14.7, 44.0], [14.8, 44.0], [14.9, 44.0], [15.0, 44.0], [15.1, 44.0], [15.2, 44.0], [15.3, 44.0], [15.4, 44.0], [15.5, 44.0], [15.6, 45.0], [15.7, 45.0], [15.8, 45.0], [15.9, 45.0], [16.0, 45.0], [16.1, 45.0], [16.2, 45.0], [16.3, 45.0], [16.4, 45.0], [16.5, 45.0], [16.6, 45.0], [16.7, 45.0], [16.8, 46.0], [16.9, 46.0], [17.0, 46.0], [17.1, 46.0], [17.2, 46.0], [17.3, 46.0], [17.4, 46.0], [17.5, 46.0], [17.6, 46.0], [17.7, 46.0], [17.8, 46.0], [17.9, 46.0], [18.0, 46.0], [18.1, 46.0], [18.2, 47.0], [18.3, 47.0], [18.4, 47.0], [18.5, 47.0], [18.6, 47.0], [18.7, 47.0], [18.8, 47.0], [18.9, 47.0], [19.0, 47.0], [19.1, 47.0], [19.2, 47.0], [19.3, 48.0], [19.4, 48.0], [19.5, 48.0], [19.6, 48.0], [19.7, 48.0], [19.8, 48.0], [19.9, 48.0], [20.0, 48.0], [20.1, 49.0], [20.2, 49.0], [20.3, 49.0], [20.4, 49.0], [20.5, 49.0], [20.6, 49.0], [20.7, 49.0], [20.8, 49.0], [20.9, 49.0], [21.0, 49.0], [21.1, 50.0], [21.2, 50.0], [21.3, 50.0], [21.4, 50.0], [21.5, 50.0], [21.6, 50.0], [21.7, 50.0], [21.8, 50.0], [21.9, 50.0], [22.0, 51.0], [22.1, 51.0], [22.2, 51.0], [22.3, 51.0], [22.4, 51.0], [22.5, 51.0], [22.6, 51.0], [22.7, 52.0], [22.8, 52.0], [22.9, 52.0], [23.0, 52.0], [23.1, 53.0], [23.2, 53.0], [23.3, 53.0], [23.4, 53.0], [23.5, 54.0], [23.6, 54.0], [23.7, 54.0], [23.8, 54.0], [23.9, 54.0], [24.0, 54.0], [24.1, 55.0], [24.2, 55.0], [24.3, 55.0], [24.4, 55.0], [24.5, 56.0], [24.6, 56.0], [24.7, 56.0], [24.8, 56.0], [24.9, 57.0], [25.0, 57.0], [25.1, 57.0], [25.2, 58.0], [25.3, 58.0], [25.4, 58.0], [25.5, 58.0], [25.6, 59.0], [25.7, 59.0], [25.8, 59.0], [25.9, 59.0], [26.0, 60.0], [26.1, 60.0], [26.2, 60.0], [26.3, 60.0], [26.4, 61.0], [26.5, 61.0], [26.6, 61.0], [26.7, 62.0], [26.8, 62.0], [26.9, 62.0], [27.0, 62.0], [27.1, 63.0], [27.2, 63.0], [27.3, 63.0], [27.4, 63.0], [27.5, 63.0], [27.6, 63.0], [27.7, 64.0], [27.8, 64.0], [27.9, 64.0], [28.0, 64.0], [28.1, 65.0], [28.2, 65.0], [28.3, 65.0], [28.4, 65.0], [28.5, 65.0], [28.6, 65.0], [28.7, 65.0], [28.8, 66.0], [28.9, 66.0], [29.0, 66.0], [29.1, 66.0], [29.2, 67.0], [29.3, 67.0], [29.4, 67.0], [29.5, 68.0], [29.6, 68.0], [29.7, 68.0], [29.8, 68.0], [29.9, 68.0], [30.0, 69.0], [30.1, 69.0], [30.2, 69.0], [30.3, 69.0], [30.4, 69.0], [30.5, 69.0], [30.6, 70.0], [30.7, 70.0], [30.8, 70.0], [30.9, 70.0], [31.0, 70.0], [31.1, 71.0], [31.2, 71.0], [31.3, 71.0], [31.4, 71.0], [31.5, 72.0], [31.6, 72.0], [31.7, 72.0], [31.8, 72.0], [31.9, 73.0], [32.0, 73.0], [32.1, 73.0], [32.2, 74.0], [32.3, 74.0], [32.4, 74.0], [32.5, 74.0], [32.6, 75.0], [32.7, 75.0], [32.8, 75.0], [32.9, 75.0], [33.0, 75.0], [33.1, 75.0], [33.2, 76.0], [33.3, 76.0], [33.4, 76.0], [33.5, 77.0], [33.6, 77.0], [33.7, 77.0], [33.8, 77.0], [33.9, 77.0], [34.0, 78.0], [34.1, 78.0], [34.2, 78.0], [34.3, 78.0], [34.4, 79.0], [34.5, 79.0], [34.6, 79.0], [34.7, 79.0], [34.8, 80.0], [34.9, 80.0], [35.0, 80.0], [35.1, 80.0], [35.2, 80.0], [35.3, 81.0], [35.4, 81.0], [35.5, 81.0], [35.6, 81.0], [35.7, 82.0], [35.8, 82.0], [35.9, 82.0], [36.0, 82.0], [36.1, 83.0], [36.2, 83.0], [36.3, 83.0], [36.4, 83.0], [36.5, 83.0], [36.6, 84.0], [36.7, 84.0], [36.8, 84.0], [36.9, 84.0], [37.0, 85.0], [37.1, 85.0], [37.2, 85.0], [37.3, 85.0], [37.4, 85.0], [37.5, 86.0], [37.6, 86.0], [37.7, 86.0], [37.8, 87.0], [37.9, 87.0], [38.0, 87.0], [38.1, 87.0], [38.2, 88.0], [38.3, 88.0], [38.4, 88.0], [38.5, 89.0], [38.6, 89.0], [38.7, 89.0], [38.8, 90.0], [38.9, 90.0], [39.0, 91.0], [39.1, 91.0], [39.2, 91.0], [39.3, 92.0], [39.4, 92.0], [39.5, 93.0], [39.6, 94.0], [39.7, 95.0], [39.8, 95.0], [39.9, 95.0], [40.0, 96.0], [40.1, 97.0], [40.2, 97.0], [40.3, 98.0], [40.4, 98.0], [40.5, 99.0], [40.6, 100.0], [40.7, 101.0], [40.8, 102.0], [40.9, 103.0], [41.0, 103.0], [41.1, 104.0], [41.2, 106.0], [41.3, 107.0], [41.4, 108.0], [41.5, 108.0], [41.6, 109.0], [41.7, 110.0], [41.8, 110.0], [41.9, 110.0], [42.0, 112.0], [42.1, 112.0], [42.2, 112.0], [42.3, 113.0], [42.4, 114.0], [42.5, 115.0], [42.6, 115.0], [42.7, 116.0], [42.8, 116.0], [42.9, 117.0], [43.0, 117.0], [43.1, 117.0], [43.2, 118.0], [43.3, 118.0], [43.4, 119.0], [43.5, 119.0], [43.6, 120.0], [43.7, 120.0], [43.8, 121.0], [43.9, 121.0], [44.0, 122.0], [44.1, 123.0], [44.2, 123.0], [44.3, 124.0], [44.4, 125.0], [44.5, 125.0], [44.6, 126.0], [44.7, 127.0], [44.8, 128.0], [44.9, 128.0], [45.0, 128.0], [45.1, 129.0], [45.2, 130.0], [45.3, 131.0], [45.4, 131.0], [45.5, 132.0], [45.6, 133.0], [45.7, 133.0], [45.8, 134.0], [45.9, 135.0], [46.0, 136.0], [46.1, 136.0], [46.2, 137.0], [46.3, 138.0], [46.4, 139.0], [46.5, 140.0], [46.6, 141.0], [46.7, 141.0], [46.8, 143.0], [46.9, 144.0], [47.0, 145.0], [47.1, 146.0], [47.2, 147.0], [47.3, 147.0], [47.4, 148.0], [47.5, 149.0], [47.6, 150.0], [47.7, 151.0], [47.8, 153.0], [47.9, 154.0], [48.0, 156.0], [48.1, 159.0], [48.2, 159.0], [48.3, 160.0], [48.4, 162.0], [48.5, 164.0], [48.6, 165.0], [48.7, 166.0], [48.8, 167.0], [48.9, 168.0], [49.0, 168.0], [49.1, 169.0], [49.2, 169.0], [49.3, 171.0], [49.4, 172.0], [49.5, 173.0], [49.6, 174.0], [49.7, 175.0], [49.8, 175.0], [49.9, 176.0], [50.0, 178.0], [50.1, 178.0], [50.2, 179.0], [50.3, 179.0], [50.4, 181.0], [50.5, 182.0], [50.6, 183.0], [50.7, 183.0], [50.8, 184.0], [50.9, 185.0], [51.0, 185.0], [51.1, 186.0], [51.2, 187.0], [51.3, 187.0], [51.4, 188.0], [51.5, 188.0], [51.6, 189.0], [51.7, 190.0], [51.8, 191.0], [51.9, 192.0], [52.0, 193.0], [52.1, 193.0], [52.2, 194.0], [52.3, 195.0], [52.4, 196.0], [52.5, 196.0], [52.6, 198.0], [52.7, 199.0], [52.8, 200.0], [52.9, 201.0], [53.0, 202.0], [53.1, 203.0], [53.2, 203.0], [53.3, 204.0], [53.4, 204.0], [53.5, 206.0], [53.6, 206.0], [53.7, 207.0], [53.8, 208.0], [53.9, 209.0], [54.0, 209.0], [54.1, 210.0], [54.2, 211.0], [54.3, 211.0], [54.4, 212.0], [54.5, 213.0], [54.6, 214.0], [54.7, 215.0], [54.8, 215.0], [54.9, 216.0], [55.0, 217.0], [55.1, 218.0], [55.2, 218.0], [55.3, 219.0], [55.4, 220.0], [55.5, 221.0], [55.6, 221.0], [55.7, 222.0], [55.8, 223.0], [55.9, 223.0], [56.0, 225.0], [56.1, 226.0], [56.2, 226.0], [56.3, 227.0], [56.4, 228.0], [56.5, 229.0], [56.6, 231.0], [56.7, 231.0], [56.8, 232.0], [56.9, 233.0], [57.0, 235.0], [57.1, 236.0], [57.2, 238.0], [57.3, 239.0], [57.4, 240.0], [57.5, 242.0], [57.6, 244.0], [57.7, 245.0], [57.8, 246.0], [57.9, 247.0], [58.0, 247.0], [58.1, 248.0], [58.2, 249.0], [58.3, 250.0], [58.4, 251.0], [58.5, 252.0], [58.6, 253.0], [58.7, 255.0], [58.8, 256.0], [58.9, 257.0], [59.0, 258.0], [59.1, 259.0], [59.2, 260.0], [59.3, 261.0], [59.4, 262.0], [59.5, 262.0], [59.6, 263.0], [59.7, 264.0], [59.8, 266.0], [59.9, 267.0], [60.0, 268.0], [60.1, 270.0], [60.2, 270.0], [60.3, 271.0], [60.4, 273.0], [60.5, 274.0], [60.6, 276.0], [60.7, 276.0], [60.8, 278.0], [60.9, 278.0], [61.0, 280.0], [61.1, 280.0], [61.2, 282.0], [61.3, 283.0], [61.4, 284.0], [61.5, 285.0], [61.6, 287.0], [61.7, 287.0], [61.8, 291.0], [61.9, 292.0], [62.0, 293.0], [62.1, 294.0], [62.2, 295.0], [62.3, 296.0], [62.4, 298.0], [62.5, 300.0], [62.6, 302.0], [62.7, 303.0], [62.8, 304.0], [62.9, 305.0], [63.0, 306.0], [63.1, 307.0], [63.2, 308.0], [63.3, 309.0], [63.4, 311.0], [63.5, 312.0], [63.6, 313.0], [63.7, 314.0], [63.8, 314.0], [63.9, 316.0], [64.0, 316.0], [64.1, 317.0], [64.2, 318.0], [64.3, 320.0], [64.4, 320.0], [64.5, 322.0], [64.6, 323.0], [64.7, 323.0], [64.8, 324.0], [64.9, 325.0], [65.0, 325.0], [65.1, 326.0], [65.2, 327.0], [65.3, 329.0], [65.4, 331.0], [65.5, 333.0], [65.6, 334.0], [65.7, 336.0], [65.8, 337.0], [65.9, 338.0], [66.0, 339.0], [66.1, 340.0], [66.2, 341.0], [66.3, 342.0], [66.4, 344.0], [66.5, 345.0], [66.6, 346.0], [66.7, 347.0], [66.8, 349.0], [66.9, 351.0], [67.0, 351.0], [67.1, 353.0], [67.2, 354.0], [67.3, 354.0], [67.4, 356.0], [67.5, 358.0], [67.6, 359.0], [67.7, 360.0], [67.8, 362.0], [67.9, 364.0], [68.0, 367.0], [68.1, 368.0], [68.2, 369.0], [68.3, 370.0], [68.4, 371.0], [68.5, 373.0], [68.6, 374.0], [68.7, 375.0], [68.8, 377.0], [68.9, 379.0], [69.0, 379.0], [69.1, 381.0], [69.2, 382.0], [69.3, 383.0], [69.4, 385.0], [69.5, 386.0], [69.6, 387.0], [69.7, 389.0], [69.8, 390.0], [69.9, 391.0], [70.0, 392.0], [70.1, 394.0], [70.2, 395.0], [70.3, 397.0], [70.4, 398.0], [70.5, 400.0], [70.6, 401.0], [70.7, 402.0], [70.8, 404.0], [70.9, 405.0], [71.0, 406.0], [71.1, 407.0], [71.2, 408.0], [71.3, 410.0], [71.4, 412.0], [71.5, 413.0], [71.6, 415.0], [71.7, 416.0], [71.8, 417.0], [71.9, 418.0], [72.0, 420.0], [72.1, 420.0], [72.2, 422.0], [72.3, 424.0], [72.4, 425.0], [72.5, 426.0], [72.6, 426.0], [72.7, 427.0], [72.8, 429.0], [72.9, 429.0], [73.0, 432.0], [73.1, 433.0], [73.2, 434.0], [73.3, 436.0], [73.4, 437.0], [73.5, 438.0], [73.6, 439.0], [73.7, 443.0], [73.8, 445.0], [73.9, 446.0], [74.0, 447.0], [74.1, 449.0], [74.2, 451.0], [74.3, 451.0], [74.4, 453.0], [74.5, 454.0], [74.6, 455.0], [74.7, 456.0], [74.8, 456.0], [74.9, 458.0], [75.0, 460.0], [75.1, 463.0], [75.2, 464.0], [75.3, 465.0], [75.4, 466.0], [75.5, 468.0], [75.6, 469.0], [75.7, 470.0], [75.8, 473.0], [75.9, 474.0], [76.0, 476.0], [76.1, 477.0], [76.2, 479.0], [76.3, 480.0], [76.4, 482.0], [76.5, 484.0], [76.6, 486.0], [76.7, 487.0], [76.8, 489.0], [76.9, 490.0], [77.0, 492.0], [77.1, 494.0], [77.2, 496.0], [77.3, 497.0], [77.4, 499.0], [77.5, 503.0], [77.6, 504.0], [77.7, 505.0], [77.8, 506.0], [77.9, 509.0], [78.0, 512.0], [78.1, 515.0], [78.2, 516.0], [78.3, 519.0], [78.4, 520.0], [78.5, 522.0], [78.6, 524.0], [78.7, 528.0], [78.8, 529.0], [78.9, 531.0], [79.0, 533.0], [79.1, 535.0], [79.2, 538.0], [79.3, 540.0], [79.4, 541.0], [79.5, 542.0], [79.6, 546.0], [79.7, 548.0], [79.8, 549.0], [79.9, 551.0], [80.0, 553.0], [80.1, 556.0], [80.2, 557.0], [80.3, 559.0], [80.4, 562.0], [80.5, 564.0], [80.6, 565.0], [80.7, 567.0], [80.8, 569.0], [80.9, 570.0], [81.0, 573.0], [81.1, 575.0], [81.2, 577.0], [81.3, 580.0], [81.4, 581.0], [81.5, 583.0], [81.6, 583.0], [81.7, 584.0], [81.8, 588.0], [81.9, 591.0], [82.0, 592.0], [82.1, 594.0], [82.2, 596.0], [82.3, 598.0], [82.4, 602.0], [82.5, 605.0], [82.6, 607.0], [82.7, 610.0], [82.8, 611.0], [82.9, 613.0], [83.0, 614.0], [83.1, 615.0], [83.2, 617.0], [83.3, 618.0], [83.4, 622.0], [83.5, 624.0], [83.6, 626.0], [83.7, 627.0], [83.8, 628.0], [83.9, 632.0], [84.0, 633.0], [84.1, 636.0], [84.2, 639.0], [84.3, 641.0], [84.4, 645.0], [84.5, 645.0], [84.6, 647.0], [84.7, 647.0], [84.8, 651.0], [84.9, 652.0], [85.0, 653.0], [85.1, 654.0], [85.2, 658.0], [85.3, 659.0], [85.4, 661.0], [85.5, 663.0], [85.6, 664.0], [85.7, 666.0], [85.8, 667.0], [85.9, 670.0], [86.0, 671.0], [86.1, 673.0], [86.2, 675.0], [86.3, 677.0], [86.4, 679.0], [86.5, 681.0], [86.6, 683.0], [86.7, 688.0], [86.8, 690.0], [86.9, 694.0], [87.0, 697.0], [87.1, 701.0], [87.2, 702.0], [87.3, 706.0], [87.4, 708.0], [87.5, 710.0], [87.6, 712.0], [87.7, 714.0], [87.8, 718.0], [87.9, 722.0], [88.0, 724.0], [88.1, 727.0], [88.2, 731.0], [88.3, 735.0], [88.4, 738.0], [88.5, 741.0], [88.6, 743.0], [88.7, 747.0], [88.8, 749.0], [88.9, 752.0], [89.0, 755.0], [89.1, 760.0], [89.2, 764.0], [89.3, 765.0], [89.4, 774.0], [89.5, 780.0], [89.6, 790.0], [89.7, 794.0], [89.8, 796.0], [89.9, 799.0], [90.0, 802.0], [90.1, 805.0], [90.2, 810.0], [90.3, 813.0], [90.4, 816.0], [90.5, 820.0], [90.6, 824.0], [90.7, 829.0], [90.8, 831.0], [90.9, 834.0], [91.0, 837.0], [91.1, 841.0], [91.2, 844.0], [91.3, 847.0], [91.4, 849.0], [91.5, 853.0], [91.6, 855.0], [91.7, 858.0], [91.8, 862.0], [91.9, 866.0], [92.0, 873.0], [92.1, 875.0], [92.2, 883.0], [92.3, 895.0], [92.4, 898.0], [92.5, 901.0], [92.6, 904.0], [92.7, 912.0], [92.8, 916.0], [92.9, 922.0], [93.0, 928.0], [93.1, 937.0], [93.2, 941.0], [93.3, 950.0], [93.4, 956.0], [93.5, 958.0], [93.6, 961.0], [93.7, 967.0], [93.8, 970.0], [93.9, 974.0], [94.0, 982.0], [94.1, 988.0], [94.2, 992.0], [94.3, 996.0], [94.4, 1000.0], [94.5, 1011.0], [94.6, 1019.0], [94.7, 1030.0], [94.8, 1034.0], [94.9, 1037.0], [95.0, 1041.0], [95.1, 1046.0], [95.2, 1050.0], [95.3, 1053.0], [95.4, 1060.0], [95.5, 1067.0], [95.6, 1074.0], [95.7, 1082.0], [95.8, 1085.0], [95.9, 1096.0], [96.0, 1108.0], [96.1, 1115.0], [96.2, 1136.0], [96.3, 1141.0], [96.4, 1143.0], [96.5, 1152.0], [96.6, 1172.0], [96.7, 1181.0], [96.8, 1197.0], [96.9, 1210.0], [97.0, 1239.0], [97.1, 1255.0], [97.2, 1261.0], [97.3, 1270.0], [97.4, 1282.0], [97.5, 1311.0], [97.6, 1320.0], [97.7, 1343.0], [97.8, 1373.0], [97.9, 1390.0], [98.0, 1420.0], [98.1, 1448.0], [98.2, 1456.0], [98.3, 1472.0], [98.4, 1497.0], [98.5, 1538.0], [98.6, 1582.0], [98.7, 1619.0], [98.8, 1642.0], [98.9, 1678.0], [99.0, 1756.0], [99.1, 1815.0], [99.2, 1892.0], [99.3, 1938.0], [99.4, 1981.0], [99.5, 2029.0], [99.6, 2065.0], [99.7, 2243.0], [99.8, 2548.0], [99.9, 3054.0], [100.0, 3232.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 2133.0, "series": [{"data": [[0.0, 2133.0], [600.0, 249.0], [700.0, 150.0], [800.0, 134.0], [900.0, 102.0], [1000.0, 81.0], [1100.0, 48.0], [1200.0, 33.0], [1300.0, 25.0], [1400.0, 24.0], [1500.0, 14.0], [100.0, 644.0], [1600.0, 15.0], [1700.0, 7.0], [1800.0, 8.0], [1900.0, 10.0], [2000.0, 11.0], [2100.0, 3.0], [2200.0, 1.0], [2300.0, 1.0], [2400.0, 2.0], [2500.0, 2.0], [2700.0, 2.0], [2900.0, 2.0], [3000.0, 4.0], [3100.0, 1.0], [200.0, 509.0], [3200.0, 1.0], [300.0, 420.0], [400.0, 368.0], [500.0, 258.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3200.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 84.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 4077.0, "series": [{"data": [[0.0, 4077.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1101.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 84.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.938608458390176, "minX": 1.6023714E12, "maxY": 10.0, "series": [{"data": [[1.60237146E12, 10.0], [1.60237152E12, 10.0], [1.60237158E12, 9.938608458390176], [1.6023714E12, 9.966463414634147]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60237158E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 317.5909264201288, "minX": 1.0, "maxY": 2989.0, "series": [{"data": [[4.0, 1625.5], [8.0, 1061.5], [2.0, 2909.0], [1.0, 2989.0], [9.0, 1135.6666666666667], [5.0, 656.5], [10.0, 317.5909264201288], [6.0, 1551.0], [3.0, 2054.0], [7.0, 594.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.98726719878372, 320.87001140250885]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 5615.5, "minX": 1.6023714E12, "maxY": 1633893.1, "series": [{"data": [[1.60237146E12, 1633893.1], [1.60237152E12, 1607925.2166666666], [1.60237158E12, 607044.9166666666], [1.6023714E12, 402048.76666666666]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60237146E12, 15616.85], [1.60237152E12, 17778.35], [1.60237158E12, 6480.25], [1.6023714E12, 5615.5]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60237158E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 293.2229268292684, "minX": 1.6023714E12, "maxY": 383.3151432469306, "series": [{"data": [[1.60237146E12, 328.0603400987378], [1.60237152E12, 293.2229268292684], [1.60237158E12, 383.3151432469306], [1.6023714E12, 317.51067073170714]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60237158E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 292.81999999999977, "minX": 1.6023714E12, "maxY": 382.9208731241475, "series": [{"data": [[1.60237146E12, 327.5831047723533], [1.60237152E12, 292.81999999999977], [1.60237158E12, 382.9208731241475], [1.6023714E12, 317.12804878048746]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60237158E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.009268292682926818, "minX": 1.6023714E12, "maxY": 0.17073170731707332, "series": [{"data": [[1.60237146E12, 0.009325287986834909], [1.60237152E12, 0.009268292682926818], [1.60237158E12, 0.010914051841746248], [1.6023714E12, 0.17073170731707332]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60237158E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 29.0, "minX": 1.6023714E12, "maxY": 3232.0, "series": [{"data": [[1.60237146E12, 3077.0], [1.60237152E12, 2721.0], [1.60237158E12, 3232.0], [1.6023714E12, 1267.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60237146E12, 31.0], [1.60237152E12, 34.0], [1.60237158E12, 35.0], [1.6023714E12, 37.912999843358996]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60237146E12, 31.0], [1.60237152E12, 34.0], [1.60237158E12, 35.0], [1.6023714E12, 38.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60237146E12, 31.0], [1.60237152E12, 34.0], [1.60237158E12, 35.0], [1.6023714E12, 38.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60237146E12, 30.0], [1.60237152E12, 29.0], [1.60237158E12, 30.0], [1.6023714E12, 33.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60237146E12, 175.0], [1.60237152E12, 153.0], [1.60237158E12, 227.0], [1.6023714E12, 205.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60237158E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 46.0, "minX": 1.0, "maxY": 2989.0, "series": [{"data": [[3.0, 1108.0], [5.0, 1472.5], [6.0, 1075.0], [8.0, 1466.5], [9.0, 783.0], [10.0, 610.0], [11.0, 687.0], [12.0, 745.5], [13.0, 813.0], [14.0, 592.5], [15.0, 574.0], [16.0, 469.0], [17.0, 504.5], [18.0, 504.0], [19.0, 428.0], [20.0, 467.0], [21.0, 438.0], [22.0, 386.5], [23.0, 389.0], [24.0, 299.5], [25.0, 451.0], [26.0, 211.5], [27.0, 261.0], [28.0, 234.5], [29.0, 160.0], [30.0, 222.5], [31.0, 218.0], [32.0, 249.0], [33.0, 241.0], [34.0, 212.0], [35.0, 205.0], [37.0, 80.5], [36.0, 210.0], [38.0, 76.0], [39.0, 86.0], [41.0, 79.0], [40.0, 174.0], [43.0, 153.5], [42.0, 171.0], [44.0, 88.5], [45.0, 86.0], [47.0, 110.5], [49.0, 46.0], [53.0, 112.0], [52.0, 128.5], [54.0, 148.5], [55.0, 97.0], [57.0, 90.0], [58.0, 108.5], [62.0, 126.0], [64.0, 55.5], [66.0, 69.0], [65.0, 138.0], [67.0, 157.0], [68.0, 81.5], [74.0, 73.5], [72.0, 90.5], [77.0, 47.0], [83.0, 75.0], [82.0, 65.5], [84.0, 47.5], [86.0, 46.0], [1.0, 2989.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 86.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 46.0, "minX": 1.0, "maxY": 2988.0, "series": [{"data": [[3.0, 1105.5], [5.0, 1471.5], [6.0, 1074.5], [8.0, 1461.5], [9.0, 782.0], [10.0, 610.0], [11.0, 687.0], [12.0, 744.5], [13.0, 810.0], [14.0, 592.5], [15.0, 573.0], [16.0, 468.5], [17.0, 504.0], [18.0, 501.5], [19.0, 427.5], [20.0, 463.5], [21.0, 436.5], [22.0, 386.5], [23.0, 389.0], [24.0, 298.0], [25.0, 451.0], [26.0, 211.0], [27.0, 261.0], [28.0, 233.5], [29.0, 160.0], [30.0, 221.5], [31.0, 218.0], [32.0, 248.5], [33.0, 241.0], [34.0, 211.5], [35.0, 205.0], [37.0, 80.5], [36.0, 210.0], [38.0, 76.0], [39.0, 86.0], [41.0, 79.0], [40.0, 172.5], [43.0, 153.5], [42.0, 171.0], [44.0, 88.5], [45.0, 86.0], [47.0, 110.0], [49.0, 46.0], [53.0, 112.0], [52.0, 128.5], [54.0, 148.0], [55.0, 97.0], [57.0, 90.0], [58.0, 108.5], [62.0, 125.5], [64.0, 55.5], [66.0, 69.0], [65.0, 138.0], [67.0, 157.0], [68.0, 81.5], [74.0, 73.0], [72.0, 90.5], [77.0, 47.0], [83.0, 75.0], [82.0, 65.5], [84.0, 47.5], [86.0, 46.0], [1.0, 2988.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 86.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 11.1, "minX": 1.6023714E12, "maxY": 34.166666666666664, "series": [{"data": [[1.60237146E12, 30.383333333333333], [1.60237152E12, 34.166666666666664], [1.60237158E12, 12.05], [1.6023714E12, 11.1]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60237158E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 10.933333333333334, "minX": 1.6023714E12, "maxY": 34.166666666666664, "series": [{"data": [[1.60237146E12, 30.383333333333333], [1.60237152E12, 34.166666666666664], [1.60237158E12, 12.216666666666667], [1.6023714E12, 10.933333333333334]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60237158E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 10.933333333333334, "minX": 1.6023714E12, "maxY": 34.166666666666664, "series": [{"data": [[1.60237146E12, 30.383333333333333], [1.60237152E12, 34.166666666666664], [1.60237158E12, 12.216666666666667], [1.6023714E12, 10.933333333333334]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60237158E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 10.933333333333334, "minX": 1.6023714E12, "maxY": 34.166666666666664, "series": [{"data": [[1.60237146E12, 30.383333333333333], [1.60237152E12, 34.166666666666664], [1.60237158E12, 12.216666666666667], [1.6023714E12, 10.933333333333334]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60237158E12, "title": "Total Transactions Per Second"}},
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

