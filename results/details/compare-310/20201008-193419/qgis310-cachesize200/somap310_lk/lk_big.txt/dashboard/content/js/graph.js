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
        data: {"result": {"minY": 28.0, "minX": 0.0, "maxY": 3372.0, "series": [{"data": [[0.0, 28.0], [0.1, 28.0], [0.2, 29.0], [0.3, 29.0], [0.4, 29.0], [0.5, 30.0], [0.6, 30.0], [0.7, 30.0], [0.8, 31.0], [0.9, 31.0], [1.0, 31.0], [1.1, 31.0], [1.2, 31.0], [1.3, 32.0], [1.4, 32.0], [1.5, 32.0], [1.6, 32.0], [1.7, 33.0], [1.8, 33.0], [1.9, 33.0], [2.0, 33.0], [2.1, 33.0], [2.2, 33.0], [2.3, 33.0], [2.4, 33.0], [2.5, 33.0], [2.6, 34.0], [2.7, 34.0], [2.8, 34.0], [2.9, 34.0], [3.0, 34.0], [3.1, 34.0], [3.2, 34.0], [3.3, 34.0], [3.4, 34.0], [3.5, 34.0], [3.6, 35.0], [3.7, 35.0], [3.8, 35.0], [3.9, 35.0], [4.0, 35.0], [4.1, 35.0], [4.2, 35.0], [4.3, 35.0], [4.4, 35.0], [4.5, 35.0], [4.6, 35.0], [4.7, 35.0], [4.8, 35.0], [4.9, 35.0], [5.0, 36.0], [5.1, 36.0], [5.2, 36.0], [5.3, 36.0], [5.4, 36.0], [5.5, 36.0], [5.6, 36.0], [5.7, 36.0], [5.8, 36.0], [5.9, 36.0], [6.0, 36.0], [6.1, 36.0], [6.2, 36.0], [6.3, 36.0], [6.4, 36.0], [6.5, 36.0], [6.6, 36.0], [6.7, 36.0], [6.8, 37.0], [6.9, 37.0], [7.0, 37.0], [7.1, 37.0], [7.2, 37.0], [7.3, 37.0], [7.4, 37.0], [7.5, 37.0], [7.6, 37.0], [7.7, 37.0], [7.8, 37.0], [7.9, 37.0], [8.0, 37.0], [8.1, 37.0], [8.2, 37.0], [8.3, 38.0], [8.4, 38.0], [8.5, 38.0], [8.6, 38.0], [8.7, 38.0], [8.8, 38.0], [8.9, 38.0], [9.0, 38.0], [9.1, 38.0], [9.2, 38.0], [9.3, 38.0], [9.4, 38.0], [9.5, 38.0], [9.6, 38.0], [9.7, 38.0], [9.8, 39.0], [9.9, 39.0], [10.0, 39.0], [10.1, 39.0], [10.2, 39.0], [10.3, 39.0], [10.4, 39.0], [10.5, 39.0], [10.6, 39.0], [10.7, 39.0], [10.8, 39.0], [10.9, 39.0], [11.0, 39.0], [11.1, 39.0], [11.2, 40.0], [11.3, 40.0], [11.4, 40.0], [11.5, 40.0], [11.6, 40.0], [11.7, 40.0], [11.8, 40.0], [11.9, 40.0], [12.0, 40.0], [12.1, 40.0], [12.2, 40.0], [12.3, 40.0], [12.4, 40.0], [12.5, 40.0], [12.6, 40.0], [12.7, 40.0], [12.8, 40.0], [12.9, 40.0], [13.0, 40.0], [13.1, 41.0], [13.2, 41.0], [13.3, 41.0], [13.4, 41.0], [13.5, 41.0], [13.6, 41.0], [13.7, 41.0], [13.8, 41.0], [13.9, 41.0], [14.0, 41.0], [14.1, 41.0], [14.2, 41.0], [14.3, 41.0], [14.4, 41.0], [14.5, 41.0], [14.6, 42.0], [14.7, 42.0], [14.8, 42.0], [14.9, 42.0], [15.0, 42.0], [15.1, 42.0], [15.2, 42.0], [15.3, 42.0], [15.4, 42.0], [15.5, 43.0], [15.6, 43.0], [15.7, 43.0], [15.8, 43.0], [15.9, 43.0], [16.0, 43.0], [16.1, 43.0], [16.2, 44.0], [16.3, 44.0], [16.4, 44.0], [16.5, 44.0], [16.6, 44.0], [16.7, 44.0], [16.8, 44.0], [16.9, 44.0], [17.0, 45.0], [17.1, 45.0], [17.2, 45.0], [17.3, 45.0], [17.4, 46.0], [17.5, 46.0], [17.6, 46.0], [17.7, 46.0], [17.8, 46.0], [17.9, 47.0], [18.0, 47.0], [18.1, 47.0], [18.2, 47.0], [18.3, 47.0], [18.4, 48.0], [18.5, 48.0], [18.6, 48.0], [18.7, 48.0], [18.8, 48.0], [18.9, 49.0], [19.0, 49.0], [19.1, 49.0], [19.2, 49.0], [19.3, 50.0], [19.4, 50.0], [19.5, 50.0], [19.6, 51.0], [19.7, 51.0], [19.8, 51.0], [19.9, 52.0], [20.0, 52.0], [20.1, 52.0], [20.2, 52.0], [20.3, 53.0], [20.4, 53.0], [20.5, 53.0], [20.6, 54.0], [20.7, 54.0], [20.8, 54.0], [20.9, 55.0], [21.0, 55.0], [21.1, 56.0], [21.2, 56.0], [21.3, 56.0], [21.4, 57.0], [21.5, 57.0], [21.6, 57.0], [21.7, 58.0], [21.8, 58.0], [21.9, 58.0], [22.0, 59.0], [22.1, 59.0], [22.2, 59.0], [22.3, 59.0], [22.4, 59.0], [22.5, 60.0], [22.6, 60.0], [22.7, 61.0], [22.8, 61.0], [22.9, 61.0], [23.0, 61.0], [23.1, 61.0], [23.2, 62.0], [23.3, 62.0], [23.4, 63.0], [23.5, 63.0], [23.6, 63.0], [23.7, 63.0], [23.8, 63.0], [23.9, 63.0], [24.0, 64.0], [24.1, 64.0], [24.2, 64.0], [24.3, 64.0], [24.4, 65.0], [24.5, 65.0], [24.6, 65.0], [24.7, 65.0], [24.8, 65.0], [24.9, 65.0], [25.0, 66.0], [25.1, 66.0], [25.2, 66.0], [25.3, 66.0], [25.4, 66.0], [25.5, 67.0], [25.6, 67.0], [25.7, 67.0], [25.8, 67.0], [25.9, 67.0], [26.0, 67.0], [26.1, 67.0], [26.2, 67.0], [26.3, 67.0], [26.4, 68.0], [26.5, 68.0], [26.6, 68.0], [26.7, 68.0], [26.8, 68.0], [26.9, 68.0], [27.0, 68.0], [27.1, 69.0], [27.2, 69.0], [27.3, 69.0], [27.4, 69.0], [27.5, 69.0], [27.6, 69.0], [27.7, 69.0], [27.8, 70.0], [27.9, 70.0], [28.0, 70.0], [28.1, 70.0], [28.2, 70.0], [28.3, 70.0], [28.4, 70.0], [28.5, 70.0], [28.6, 70.0], [28.7, 71.0], [28.8, 71.0], [28.9, 71.0], [29.0, 71.0], [29.1, 71.0], [29.2, 71.0], [29.3, 71.0], [29.4, 72.0], [29.5, 72.0], [29.6, 72.0], [29.7, 72.0], [29.8, 72.0], [29.9, 72.0], [30.0, 72.0], [30.1, 72.0], [30.2, 73.0], [30.3, 73.0], [30.4, 73.0], [30.5, 73.0], [30.6, 73.0], [30.7, 73.0], [30.8, 73.0], [30.9, 74.0], [31.0, 74.0], [31.1, 74.0], [31.2, 74.0], [31.3, 74.0], [31.4, 74.0], [31.5, 74.0], [31.6, 74.0], [31.7, 74.0], [31.8, 74.0], [31.9, 75.0], [32.0, 75.0], [32.1, 75.0], [32.2, 75.0], [32.3, 75.0], [32.4, 75.0], [32.5, 75.0], [32.6, 76.0], [32.7, 76.0], [32.8, 76.0], [32.9, 76.0], [33.0, 76.0], [33.1, 76.0], [33.2, 76.0], [33.3, 76.0], [33.4, 76.0], [33.5, 76.0], [33.6, 77.0], [33.7, 77.0], [33.8, 77.0], [33.9, 77.0], [34.0, 77.0], [34.1, 77.0], [34.2, 78.0], [34.3, 78.0], [34.4, 78.0], [34.5, 78.0], [34.6, 78.0], [34.7, 79.0], [34.8, 79.0], [34.9, 79.0], [35.0, 79.0], [35.1, 80.0], [35.2, 80.0], [35.3, 80.0], [35.4, 80.0], [35.5, 80.0], [35.6, 80.0], [35.7, 81.0], [35.8, 81.0], [35.9, 81.0], [36.0, 81.0], [36.1, 81.0], [36.2, 81.0], [36.3, 82.0], [36.4, 82.0], [36.5, 82.0], [36.6, 82.0], [36.7, 83.0], [36.8, 83.0], [36.9, 84.0], [37.0, 84.0], [37.1, 84.0], [37.2, 85.0], [37.3, 85.0], [37.4, 85.0], [37.5, 86.0], [37.6, 86.0], [37.7, 86.0], [37.8, 87.0], [37.9, 87.0], [38.0, 88.0], [38.1, 88.0], [38.2, 88.0], [38.3, 90.0], [38.4, 90.0], [38.5, 90.0], [38.6, 91.0], [38.7, 91.0], [38.8, 92.0], [38.9, 93.0], [39.0, 93.0], [39.1, 93.0], [39.2, 94.0], [39.3, 94.0], [39.4, 95.0], [39.5, 95.0], [39.6, 96.0], [39.7, 98.0], [39.8, 98.0], [39.9, 99.0], [40.0, 99.0], [40.1, 100.0], [40.2, 101.0], [40.3, 101.0], [40.4, 102.0], [40.5, 103.0], [40.6, 104.0], [40.7, 104.0], [40.8, 105.0], [40.9, 105.0], [41.0, 106.0], [41.1, 106.0], [41.2, 106.0], [41.3, 106.0], [41.4, 107.0], [41.5, 108.0], [41.6, 108.0], [41.7, 108.0], [41.8, 109.0], [41.9, 109.0], [42.0, 110.0], [42.1, 110.0], [42.2, 110.0], [42.3, 111.0], [42.4, 112.0], [42.5, 112.0], [42.6, 112.0], [42.7, 113.0], [42.8, 114.0], [42.9, 114.0], [43.0, 115.0], [43.1, 115.0], [43.2, 116.0], [43.3, 117.0], [43.4, 117.0], [43.5, 118.0], [43.6, 118.0], [43.7, 118.0], [43.8, 119.0], [43.9, 119.0], [44.0, 119.0], [44.1, 120.0], [44.2, 121.0], [44.3, 121.0], [44.4, 122.0], [44.5, 122.0], [44.6, 123.0], [44.7, 123.0], [44.8, 124.0], [44.9, 124.0], [45.0, 125.0], [45.1, 125.0], [45.2, 125.0], [45.3, 125.0], [45.4, 126.0], [45.5, 127.0], [45.6, 127.0], [45.7, 127.0], [45.8, 128.0], [45.9, 129.0], [46.0, 129.0], [46.1, 130.0], [46.2, 130.0], [46.3, 131.0], [46.4, 131.0], [46.5, 133.0], [46.6, 133.0], [46.7, 134.0], [46.8, 135.0], [46.9, 136.0], [47.0, 137.0], [47.1, 138.0], [47.2, 139.0], [47.3, 139.0], [47.4, 140.0], [47.5, 141.0], [47.6, 142.0], [47.7, 143.0], [47.8, 145.0], [47.9, 146.0], [48.0, 148.0], [48.1, 150.0], [48.2, 151.0], [48.3, 153.0], [48.4, 153.0], [48.5, 155.0], [48.6, 157.0], [48.7, 158.0], [48.8, 159.0], [48.9, 160.0], [49.0, 161.0], [49.1, 162.0], [49.2, 163.0], [49.3, 165.0], [49.4, 166.0], [49.5, 167.0], [49.6, 168.0], [49.7, 169.0], [49.8, 170.0], [49.9, 170.0], [50.0, 171.0], [50.1, 172.0], [50.2, 172.0], [50.3, 172.0], [50.4, 173.0], [50.5, 174.0], [50.6, 175.0], [50.7, 175.0], [50.8, 176.0], [50.9, 177.0], [51.0, 178.0], [51.1, 178.0], [51.2, 179.0], [51.3, 180.0], [51.4, 181.0], [51.5, 182.0], [51.6, 184.0], [51.7, 185.0], [51.8, 185.0], [51.9, 186.0], [52.0, 186.0], [52.1, 187.0], [52.2, 188.0], [52.3, 189.0], [52.4, 190.0], [52.5, 191.0], [52.6, 192.0], [52.7, 194.0], [52.8, 195.0], [52.9, 195.0], [53.0, 196.0], [53.1, 197.0], [53.2, 198.0], [53.3, 198.0], [53.4, 199.0], [53.5, 200.0], [53.6, 201.0], [53.7, 203.0], [53.8, 204.0], [53.9, 205.0], [54.0, 206.0], [54.1, 208.0], [54.2, 208.0], [54.3, 209.0], [54.4, 210.0], [54.5, 211.0], [54.6, 212.0], [54.7, 212.0], [54.8, 213.0], [54.9, 213.0], [55.0, 214.0], [55.1, 214.0], [55.2, 215.0], [55.3, 216.0], [55.4, 216.0], [55.5, 217.0], [55.6, 218.0], [55.7, 219.0], [55.8, 219.0], [55.9, 220.0], [56.0, 221.0], [56.1, 222.0], [56.2, 222.0], [56.3, 223.0], [56.4, 224.0], [56.5, 225.0], [56.6, 225.0], [56.7, 225.0], [56.8, 226.0], [56.9, 228.0], [57.0, 229.0], [57.1, 229.0], [57.2, 230.0], [57.3, 231.0], [57.4, 232.0], [57.5, 232.0], [57.6, 233.0], [57.7, 233.0], [57.8, 235.0], [57.9, 237.0], [58.0, 237.0], [58.1, 238.0], [58.2, 238.0], [58.3, 239.0], [58.4, 240.0], [58.5, 241.0], [58.6, 241.0], [58.7, 242.0], [58.8, 243.0], [58.9, 245.0], [59.0, 246.0], [59.1, 247.0], [59.2, 247.0], [59.3, 248.0], [59.4, 249.0], [59.5, 250.0], [59.6, 251.0], [59.7, 252.0], [59.8, 253.0], [59.9, 255.0], [60.0, 256.0], [60.1, 257.0], [60.2, 257.0], [60.3, 258.0], [60.4, 258.0], [60.5, 259.0], [60.6, 260.0], [60.7, 263.0], [60.8, 264.0], [60.9, 265.0], [61.0, 265.0], [61.1, 267.0], [61.2, 267.0], [61.3, 268.0], [61.4, 269.0], [61.5, 270.0], [61.6, 272.0], [61.7, 272.0], [61.8, 273.0], [61.9, 274.0], [62.0, 274.0], [62.1, 275.0], [62.2, 276.0], [62.3, 277.0], [62.4, 278.0], [62.5, 279.0], [62.6, 280.0], [62.7, 281.0], [62.8, 282.0], [62.9, 284.0], [63.0, 285.0], [63.1, 286.0], [63.2, 286.0], [63.3, 287.0], [63.4, 288.0], [63.5, 288.0], [63.6, 290.0], [63.7, 291.0], [63.8, 292.0], [63.9, 294.0], [64.0, 294.0], [64.1, 295.0], [64.2, 297.0], [64.3, 298.0], [64.4, 300.0], [64.5, 301.0], [64.6, 302.0], [64.7, 304.0], [64.8, 305.0], [64.9, 306.0], [65.0, 308.0], [65.1, 311.0], [65.2, 312.0], [65.3, 314.0], [65.4, 315.0], [65.5, 318.0], [65.6, 320.0], [65.7, 321.0], [65.8, 322.0], [65.9, 323.0], [66.0, 325.0], [66.1, 325.0], [66.2, 327.0], [66.3, 328.0], [66.4, 329.0], [66.5, 330.0], [66.6, 331.0], [66.7, 333.0], [66.8, 334.0], [66.9, 335.0], [67.0, 336.0], [67.1, 338.0], [67.2, 338.0], [67.3, 340.0], [67.4, 341.0], [67.5, 342.0], [67.6, 343.0], [67.7, 346.0], [67.8, 348.0], [67.9, 350.0], [68.0, 351.0], [68.1, 352.0], [68.2, 354.0], [68.3, 355.0], [68.4, 356.0], [68.5, 358.0], [68.6, 359.0], [68.7, 360.0], [68.8, 361.0], [68.9, 362.0], [69.0, 364.0], [69.1, 365.0], [69.2, 367.0], [69.3, 369.0], [69.4, 371.0], [69.5, 373.0], [69.6, 375.0], [69.7, 377.0], [69.8, 377.0], [69.9, 378.0], [70.0, 380.0], [70.1, 382.0], [70.2, 383.0], [70.3, 384.0], [70.4, 386.0], [70.5, 387.0], [70.6, 389.0], [70.7, 389.0], [70.8, 391.0], [70.9, 393.0], [71.0, 394.0], [71.1, 394.0], [71.2, 396.0], [71.3, 399.0], [71.4, 400.0], [71.5, 402.0], [71.6, 403.0], [71.7, 405.0], [71.8, 406.0], [71.9, 407.0], [72.0, 409.0], [72.1, 410.0], [72.2, 411.0], [72.3, 412.0], [72.4, 413.0], [72.5, 414.0], [72.6, 416.0], [72.7, 417.0], [72.8, 418.0], [72.9, 420.0], [73.0, 422.0], [73.1, 424.0], [73.2, 426.0], [73.3, 427.0], [73.4, 428.0], [73.5, 429.0], [73.6, 432.0], [73.7, 434.0], [73.8, 436.0], [73.9, 437.0], [74.0, 439.0], [74.1, 440.0], [74.2, 442.0], [74.3, 443.0], [74.4, 444.0], [74.5, 447.0], [74.6, 448.0], [74.7, 449.0], [74.8, 452.0], [74.9, 454.0], [75.0, 455.0], [75.1, 457.0], [75.2, 459.0], [75.3, 461.0], [75.4, 463.0], [75.5, 464.0], [75.6, 465.0], [75.7, 466.0], [75.8, 468.0], [75.9, 469.0], [76.0, 471.0], [76.1, 473.0], [76.2, 474.0], [76.3, 474.0], [76.4, 475.0], [76.5, 476.0], [76.6, 477.0], [76.7, 478.0], [76.8, 481.0], [76.9, 482.0], [77.0, 483.0], [77.1, 485.0], [77.2, 487.0], [77.3, 489.0], [77.4, 490.0], [77.5, 492.0], [77.6, 493.0], [77.7, 494.0], [77.8, 495.0], [77.9, 497.0], [78.0, 499.0], [78.1, 501.0], [78.2, 504.0], [78.3, 506.0], [78.4, 509.0], [78.5, 510.0], [78.6, 512.0], [78.7, 513.0], [78.8, 514.0], [78.9, 515.0], [79.0, 517.0], [79.1, 520.0], [79.2, 521.0], [79.3, 523.0], [79.4, 526.0], [79.5, 528.0], [79.6, 530.0], [79.7, 531.0], [79.8, 533.0], [79.9, 535.0], [80.0, 537.0], [80.1, 539.0], [80.2, 541.0], [80.3, 542.0], [80.4, 544.0], [80.5, 547.0], [80.6, 548.0], [80.7, 550.0], [80.8, 550.0], [80.9, 554.0], [81.0, 557.0], [81.1, 559.0], [81.2, 560.0], [81.3, 562.0], [81.4, 563.0], [81.5, 564.0], [81.6, 566.0], [81.7, 569.0], [81.8, 571.0], [81.9, 574.0], [82.0, 575.0], [82.1, 577.0], [82.2, 579.0], [82.3, 582.0], [82.4, 583.0], [82.5, 584.0], [82.6, 586.0], [82.7, 589.0], [82.8, 589.0], [82.9, 590.0], [83.0, 591.0], [83.1, 595.0], [83.2, 596.0], [83.3, 597.0], [83.4, 598.0], [83.5, 602.0], [83.6, 605.0], [83.7, 607.0], [83.8, 609.0], [83.9, 610.0], [84.0, 612.0], [84.1, 613.0], [84.2, 616.0], [84.3, 619.0], [84.4, 620.0], [84.5, 622.0], [84.6, 625.0], [84.7, 631.0], [84.8, 634.0], [84.9, 637.0], [85.0, 638.0], [85.1, 640.0], [85.2, 643.0], [85.3, 645.0], [85.4, 647.0], [85.5, 650.0], [85.6, 651.0], [85.7, 652.0], [85.8, 654.0], [85.9, 656.0], [86.0, 659.0], [86.1, 662.0], [86.2, 665.0], [86.3, 671.0], [86.4, 674.0], [86.5, 675.0], [86.6, 678.0], [86.7, 680.0], [86.8, 681.0], [86.9, 683.0], [87.0, 686.0], [87.1, 688.0], [87.2, 691.0], [87.3, 694.0], [87.4, 697.0], [87.5, 699.0], [87.6, 702.0], [87.7, 703.0], [87.8, 705.0], [87.9, 708.0], [88.0, 709.0], [88.1, 712.0], [88.2, 717.0], [88.3, 721.0], [88.4, 724.0], [88.5, 726.0], [88.6, 729.0], [88.7, 732.0], [88.8, 733.0], [88.9, 736.0], [89.0, 737.0], [89.1, 741.0], [89.2, 744.0], [89.3, 748.0], [89.4, 749.0], [89.5, 752.0], [89.6, 753.0], [89.7, 756.0], [89.8, 762.0], [89.9, 764.0], [90.0, 767.0], [90.1, 772.0], [90.2, 774.0], [90.3, 778.0], [90.4, 779.0], [90.5, 782.0], [90.6, 787.0], [90.7, 791.0], [90.8, 798.0], [90.9, 804.0], [91.0, 810.0], [91.1, 814.0], [91.2, 819.0], [91.3, 821.0], [91.4, 823.0], [91.5, 829.0], [91.6, 833.0], [91.7, 836.0], [91.8, 840.0], [91.9, 846.0], [92.0, 851.0], [92.1, 854.0], [92.2, 858.0], [92.3, 862.0], [92.4, 865.0], [92.5, 868.0], [92.6, 873.0], [92.7, 882.0], [92.8, 887.0], [92.9, 891.0], [93.0, 895.0], [93.1, 908.0], [93.2, 917.0], [93.3, 923.0], [93.4, 928.0], [93.5, 930.0], [93.6, 936.0], [93.7, 941.0], [93.8, 948.0], [93.9, 954.0], [94.0, 959.0], [94.1, 963.0], [94.2, 968.0], [94.3, 974.0], [94.4, 981.0], [94.5, 988.0], [94.6, 993.0], [94.7, 995.0], [94.8, 1000.0], [94.9, 1009.0], [95.0, 1014.0], [95.1, 1017.0], [95.2, 1025.0], [95.3, 1029.0], [95.4, 1033.0], [95.5, 1041.0], [95.6, 1047.0], [95.7, 1051.0], [95.8, 1064.0], [95.9, 1070.0], [96.0, 1080.0], [96.1, 1083.0], [96.2, 1101.0], [96.3, 1110.0], [96.4, 1116.0], [96.5, 1126.0], [96.6, 1130.0], [96.7, 1143.0], [96.8, 1155.0], [96.9, 1182.0], [97.0, 1190.0], [97.1, 1196.0], [97.2, 1205.0], [97.3, 1216.0], [97.4, 1236.0], [97.5, 1263.0], [97.6, 1268.0], [97.7, 1285.0], [97.8, 1310.0], [97.9, 1331.0], [98.0, 1350.0], [98.1, 1373.0], [98.2, 1387.0], [98.3, 1422.0], [98.4, 1448.0], [98.5, 1469.0], [98.6, 1502.0], [98.7, 1555.0], [98.8, 1581.0], [98.9, 1611.0], [99.0, 1656.0], [99.1, 1686.0], [99.2, 1781.0], [99.3, 1871.0], [99.4, 1922.0], [99.5, 1958.0], [99.6, 2021.0], [99.7, 2121.0], [99.8, 2205.0], [99.9, 2311.0], [100.0, 3372.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 2110.0, "series": [{"data": [[0.0, 2110.0], [600.0, 215.0], [700.0, 175.0], [800.0, 117.0], [900.0, 92.0], [1000.0, 74.0], [1100.0, 49.0], [1200.0, 33.0], [1300.0, 25.0], [1400.0, 19.0], [1500.0, 15.0], [100.0, 706.0], [1600.0, 13.0], [1700.0, 5.0], [1800.0, 9.0], [1900.0, 10.0], [2000.0, 7.0], [2100.0, 5.0], [2200.0, 3.0], [2300.0, 3.0], [2400.0, 1.0], [2700.0, 1.0], [3100.0, 1.0], [200.0, 578.0], [3300.0, 2.0], [300.0, 365.0], [400.0, 356.0], [500.0, 283.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3300.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 75.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 4116.0, "series": [{"data": [[0.0, 4116.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1081.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 75.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.903765690376568, "minX": 1.60218852E12, "maxY": 10.0, "series": [{"data": [[1.60218858E12, 10.0], [1.60218864E12, 10.0], [1.60218852E12, 9.903765690376568], [1.6021887E12, 9.957904583723106]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6021887E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 307.7952815829529, "minX": 1.0, "maxY": 3372.0, "series": [{"data": [[4.0, 671.0], [8.0, 1239.0], [2.0, 3351.0], [1.0, 3131.0], [9.0, 864.6666666666666], [5.0, 778.3333333333334], [10.0, 307.7952815829529], [6.0, 3372.0], [3.0, 2216.0], [7.0, 591.5]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.987101669195768, 311.0345220030363]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 2146.8333333333335, "minX": 1.60218852E12, "maxY": 1721901.5333333334, "series": [{"data": [[1.60218858E12, 1721901.5333333334], [1.60218864E12, 1433583.35], [1.60218852E12, 59084.066666666666], [1.6021887E12, 1077001.7833333334]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60218858E12, 13722.0], [1.60218864E12, 20260.35], [1.60218852E12, 2146.8333333333335], [1.6021887E12, 9450.366666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6021887E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 252.10873215785048, "minX": 1.60218852E12, "maxY": 375.6061946902649, "series": [{"data": [[1.60218858E12, 375.6061946902649], [1.60218864E12, 252.10873215785048], [1.60218852E12, 265.48117154811735], [1.6021887E12, 356.9616463985033]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6021887E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 251.83795130142695, "minX": 1.60218852E12, "maxY": 375.1219974715555, "series": [{"data": [[1.60218858E12, 375.1219974715555], [1.60218864E12, 251.83795130142695], [1.60218852E12, 265.3138075313806], [1.6021887E12, 356.5247895229183]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6021887E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.008849557522123892, "minX": 1.60218852E12, "maxY": 0.4393305439330544, "series": [{"data": [[1.60218858E12, 0.008849557522123892], [1.60218864E12, 0.009655751469353498], [1.60218852E12, 0.4393305439330544], [1.6021887E12, 0.009354536950420956]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6021887E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 28.0, "minX": 1.60218852E12, "maxY": 3372.0, "series": [{"data": [[1.60218858E12, 2311.0], [1.60218864E12, 2121.0], [1.60218852E12, 1150.0], [1.6021887E12, 3372.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60218858E12, 33.0], [1.60218864E12, 30.0], [1.60218852E12, 31.159999942779542], [1.6021887E12, 31.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60218858E12, 33.0], [1.60218864E12, 30.0], [1.60218852E12, 31.376000022888185], [1.6021887E12, 31.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60218858E12, 33.0], [1.60218864E12, 30.0], [1.60218852E12, 31.27999997138977], [1.6021887E12, 31.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60218858E12, 28.0], [1.60218864E12, 28.0], [1.60218852E12, 31.0], [1.6021887E12, 28.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60218858E12, 254.0], [1.60218864E12, 126.0], [1.60218852E12, 87.0], [1.6021887E12, 219.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6021887E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 53.0, "minX": 1.0, "maxY": 3131.0, "series": [{"data": [[2.0, 2783.5], [4.0, 1695.5], [5.0, 1028.0], [6.0, 1581.0], [7.0, 1481.5], [8.0, 915.0], [9.0, 660.0], [10.0, 861.5], [11.0, 723.5], [12.0, 799.5], [13.0, 725.0], [14.0, 633.0], [15.0, 654.0], [16.0, 546.0], [17.0, 537.5], [18.0, 461.5], [19.0, 336.0], [20.0, 431.5], [21.0, 495.0], [22.0, 413.0], [23.0, 370.0], [24.0, 391.5], [25.0, 323.0], [26.0, 409.5], [27.0, 208.0], [28.0, 307.0], [29.0, 66.0], [30.0, 84.5], [31.0, 256.0], [33.0, 98.5], [32.0, 210.0], [34.0, 215.5], [35.0, 203.0], [37.0, 240.5], [36.0, 143.0], [39.0, 181.5], [41.0, 82.0], [42.0, 131.0], [43.0, 125.0], [45.0, 76.0], [46.0, 74.0], [48.0, 155.5], [49.0, 76.5], [50.0, 83.0], [52.0, 74.5], [54.0, 127.0], [55.0, 157.0], [57.0, 117.5], [58.0, 79.0], [60.0, 86.5], [62.0, 102.0], [63.0, 69.0], [67.0, 126.5], [65.0, 86.0], [66.0, 75.5], [68.0, 70.5], [71.0, 121.0], [69.0, 53.0], [72.0, 73.5], [73.0, 88.5], [76.0, 104.0], [77.0, 129.0], [80.0, 92.0], [83.0, 73.0], [87.0, 76.0], [1.0, 3131.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 87.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 53.0, "minX": 1.0, "maxY": 3131.0, "series": [{"data": [[2.0, 2783.0], [4.0, 1695.0], [5.0, 1028.0], [6.0, 1581.0], [7.0, 1477.0], [8.0, 910.5], [9.0, 659.0], [10.0, 860.5], [11.0, 723.0], [12.0, 799.0], [13.0, 722.0], [14.0, 631.0], [15.0, 653.5], [16.0, 546.0], [17.0, 536.5], [18.0, 460.5], [19.0, 333.0], [20.0, 431.0], [21.0, 495.0], [22.0, 412.5], [23.0, 368.0], [24.0, 391.5], [25.0, 323.0], [26.0, 409.0], [27.0, 207.5], [28.0, 305.5], [29.0, 66.0], [30.0, 83.5], [31.0, 255.0], [33.0, 98.5], [32.0, 210.0], [34.0, 215.5], [35.0, 202.5], [37.0, 240.5], [36.0, 143.0], [39.0, 181.0], [41.0, 82.0], [42.0, 131.0], [43.0, 125.0], [45.0, 76.0], [46.0, 74.0], [48.0, 155.5], [49.0, 76.5], [50.0, 83.0], [52.0, 74.5], [54.0, 127.0], [55.0, 157.0], [57.0, 117.5], [58.0, 78.5], [60.0, 86.5], [62.0, 102.0], [63.0, 69.0], [67.0, 126.0], [65.0, 85.5], [66.0, 75.5], [68.0, 70.5], [71.0, 121.0], [69.0, 53.0], [72.0, 73.0], [73.0, 88.0], [76.0, 104.0], [77.0, 129.0], [80.0, 91.5], [83.0, 73.0], [87.0, 76.0], [1.0, 3131.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 87.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 4.15, "minX": 1.60218852E12, "maxY": 39.7, "series": [{"data": [[1.60218858E12, 26.366666666666667], [1.60218864E12, 39.7], [1.60218852E12, 4.15], [1.6021887E12, 17.65]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6021887E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 3.9833333333333334, "minX": 1.60218852E12, "maxY": 39.7, "series": [{"data": [[1.60218858E12, 26.366666666666667], [1.60218864E12, 39.7], [1.60218852E12, 3.9833333333333334], [1.6021887E12, 17.816666666666666]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6021887E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 3.9833333333333334, "minX": 1.60218852E12, "maxY": 39.7, "series": [{"data": [[1.60218858E12, 26.366666666666667], [1.60218864E12, 39.7], [1.60218852E12, 3.9833333333333334], [1.6021887E12, 17.816666666666666]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6021887E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 3.9833333333333334, "minX": 1.60218852E12, "maxY": 39.7, "series": [{"data": [[1.60218858E12, 26.366666666666667], [1.60218864E12, 39.7], [1.60218852E12, 3.9833333333333334], [1.6021887E12, 17.816666666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6021887E12, "title": "Total Transactions Per Second"}},
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

