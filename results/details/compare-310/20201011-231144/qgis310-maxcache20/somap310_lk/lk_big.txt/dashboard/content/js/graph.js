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
        data: {"result": {"minY": 30.0, "minX": 0.0, "maxY": 3595.0, "series": [{"data": [[0.0, 30.0], [0.1, 31.0], [0.2, 31.0], [0.3, 32.0], [0.4, 32.0], [0.5, 32.0], [0.6, 33.0], [0.7, 33.0], [0.8, 33.0], [0.9, 33.0], [1.0, 33.0], [1.1, 34.0], [1.2, 34.0], [1.3, 34.0], [1.4, 34.0], [1.5, 35.0], [1.6, 35.0], [1.7, 35.0], [1.8, 35.0], [1.9, 35.0], [2.0, 35.0], [2.1, 35.0], [2.2, 35.0], [2.3, 36.0], [2.4, 36.0], [2.5, 36.0], [2.6, 36.0], [2.7, 36.0], [2.8, 36.0], [2.9, 36.0], [3.0, 36.0], [3.1, 37.0], [3.2, 37.0], [3.3, 37.0], [3.4, 37.0], [3.5, 37.0], [3.6, 37.0], [3.7, 37.0], [3.8, 38.0], [3.9, 38.0], [4.0, 38.0], [4.1, 38.0], [4.2, 38.0], [4.3, 38.0], [4.4, 38.0], [4.5, 38.0], [4.6, 38.0], [4.7, 38.0], [4.8, 38.0], [4.9, 39.0], [5.0, 39.0], [5.1, 39.0], [5.2, 39.0], [5.3, 39.0], [5.4, 39.0], [5.5, 39.0], [5.6, 39.0], [5.7, 39.0], [5.8, 39.0], [5.9, 39.0], [6.0, 39.0], [6.1, 39.0], [6.2, 39.0], [6.3, 39.0], [6.4, 40.0], [6.5, 40.0], [6.6, 40.0], [6.7, 40.0], [6.8, 40.0], [6.9, 40.0], [7.0, 40.0], [7.1, 40.0], [7.2, 40.0], [7.3, 40.0], [7.4, 40.0], [7.5, 40.0], [7.6, 40.0], [7.7, 40.0], [7.8, 41.0], [7.9, 41.0], [8.0, 41.0], [8.1, 41.0], [8.2, 41.0], [8.3, 41.0], [8.4, 41.0], [8.5, 41.0], [8.6, 41.0], [8.7, 41.0], [8.8, 41.0], [8.9, 41.0], [9.0, 41.0], [9.1, 41.0], [9.2, 41.0], [9.3, 41.0], [9.4, 41.0], [9.5, 42.0], [9.6, 42.0], [9.7, 42.0], [9.8, 42.0], [9.9, 42.0], [10.0, 42.0], [10.1, 42.0], [10.2, 42.0], [10.3, 42.0], [10.4, 42.0], [10.5, 42.0], [10.6, 42.0], [10.7, 43.0], [10.8, 43.0], [10.9, 43.0], [11.0, 43.0], [11.1, 43.0], [11.2, 43.0], [11.3, 43.0], [11.4, 43.0], [11.5, 43.0], [11.6, 43.0], [11.7, 43.0], [11.8, 43.0], [11.9, 43.0], [12.0, 44.0], [12.1, 44.0], [12.2, 44.0], [12.3, 44.0], [12.4, 44.0], [12.5, 44.0], [12.6, 44.0], [12.7, 44.0], [12.8, 45.0], [12.9, 45.0], [13.0, 45.0], [13.1, 45.0], [13.2, 45.0], [13.3, 45.0], [13.4, 45.0], [13.5, 45.0], [13.6, 45.0], [13.7, 45.0], [13.8, 45.0], [13.9, 45.0], [14.0, 46.0], [14.1, 46.0], [14.2, 46.0], [14.3, 46.0], [14.4, 46.0], [14.5, 46.0], [14.6, 46.0], [14.7, 46.0], [14.8, 47.0], [14.9, 47.0], [15.0, 47.0], [15.1, 47.0], [15.2, 47.0], [15.3, 47.0], [15.4, 47.0], [15.5, 48.0], [15.6, 48.0], [15.7, 48.0], [15.8, 48.0], [15.9, 48.0], [16.0, 48.0], [16.1, 48.0], [16.2, 48.0], [16.3, 49.0], [16.4, 49.0], [16.5, 49.0], [16.6, 49.0], [16.7, 49.0], [16.8, 50.0], [16.9, 50.0], [17.0, 50.0], [17.1, 50.0], [17.2, 50.0], [17.3, 50.0], [17.4, 51.0], [17.5, 51.0], [17.6, 51.0], [17.7, 51.0], [17.8, 51.0], [17.9, 51.0], [18.0, 52.0], [18.1, 52.0], [18.2, 52.0], [18.3, 52.0], [18.4, 53.0], [18.5, 53.0], [18.6, 53.0], [18.7, 54.0], [18.8, 54.0], [18.9, 54.0], [19.0, 55.0], [19.1, 55.0], [19.2, 56.0], [19.3, 56.0], [19.4, 57.0], [19.5, 57.0], [19.6, 57.0], [19.7, 58.0], [19.8, 58.0], [19.9, 59.0], [20.0, 59.0], [20.1, 59.0], [20.2, 60.0], [20.3, 60.0], [20.4, 60.0], [20.5, 61.0], [20.6, 61.0], [20.7, 62.0], [20.8, 62.0], [20.9, 62.0], [21.0, 62.0], [21.1, 63.0], [21.2, 63.0], [21.3, 63.0], [21.4, 64.0], [21.5, 64.0], [21.6, 65.0], [21.7, 65.0], [21.8, 65.0], [21.9, 65.0], [22.0, 66.0], [22.1, 66.0], [22.2, 66.0], [22.3, 66.0], [22.4, 67.0], [22.5, 67.0], [22.6, 67.0], [22.7, 67.0], [22.8, 68.0], [22.9, 68.0], [23.0, 68.0], [23.1, 68.0], [23.2, 69.0], [23.3, 69.0], [23.4, 69.0], [23.5, 69.0], [23.6, 69.0], [23.7, 69.0], [23.8, 70.0], [23.9, 71.0], [24.0, 71.0], [24.1, 71.0], [24.2, 71.0], [24.3, 72.0], [24.4, 72.0], [24.5, 72.0], [24.6, 72.0], [24.7, 72.0], [24.8, 72.0], [24.9, 73.0], [25.0, 73.0], [25.1, 73.0], [25.2, 73.0], [25.3, 73.0], [25.4, 73.0], [25.5, 73.0], [25.6, 73.0], [25.7, 74.0], [25.8, 74.0], [25.9, 74.0], [26.0, 74.0], [26.1, 75.0], [26.2, 75.0], [26.3, 75.0], [26.4, 75.0], [26.5, 75.0], [26.6, 75.0], [26.7, 75.0], [26.8, 76.0], [26.9, 76.0], [27.0, 76.0], [27.1, 76.0], [27.2, 76.0], [27.3, 77.0], [27.4, 77.0], [27.5, 77.0], [27.6, 77.0], [27.7, 77.0], [27.8, 77.0], [27.9, 77.0], [28.0, 77.0], [28.1, 78.0], [28.2, 78.0], [28.3, 78.0], [28.4, 78.0], [28.5, 78.0], [28.6, 78.0], [28.7, 79.0], [28.8, 79.0], [28.9, 79.0], [29.0, 79.0], [29.1, 79.0], [29.2, 79.0], [29.3, 79.0], [29.4, 79.0], [29.5, 80.0], [29.6, 80.0], [29.7, 80.0], [29.8, 80.0], [29.9, 80.0], [30.0, 81.0], [30.1, 81.0], [30.2, 81.0], [30.3, 81.0], [30.4, 81.0], [30.5, 81.0], [30.6, 81.0], [30.7, 81.0], [30.8, 81.0], [30.9, 81.0], [31.0, 82.0], [31.1, 82.0], [31.2, 82.0], [31.3, 82.0], [31.4, 82.0], [31.5, 82.0], [31.6, 83.0], [31.7, 83.0], [31.8, 83.0], [31.9, 83.0], [32.0, 83.0], [32.1, 83.0], [32.2, 83.0], [32.3, 83.0], [32.4, 84.0], [32.5, 84.0], [32.6, 84.0], [32.7, 84.0], [32.8, 84.0], [32.9, 84.0], [33.0, 84.0], [33.1, 85.0], [33.2, 85.0], [33.3, 85.0], [33.4, 85.0], [33.5, 85.0], [33.6, 86.0], [33.7, 86.0], [33.8, 86.0], [33.9, 86.0], [34.0, 86.0], [34.1, 86.0], [34.2, 87.0], [34.3, 87.0], [34.4, 87.0], [34.5, 87.0], [34.6, 87.0], [34.7, 87.0], [34.8, 87.0], [34.9, 88.0], [35.0, 88.0], [35.1, 88.0], [35.2, 88.0], [35.3, 88.0], [35.4, 89.0], [35.5, 89.0], [35.6, 89.0], [35.7, 90.0], [35.8, 90.0], [35.9, 90.0], [36.0, 91.0], [36.1, 91.0], [36.2, 91.0], [36.3, 91.0], [36.4, 92.0], [36.5, 92.0], [36.6, 92.0], [36.7, 93.0], [36.8, 93.0], [36.9, 93.0], [37.0, 94.0], [37.1, 94.0], [37.2, 94.0], [37.3, 95.0], [37.4, 95.0], [37.5, 95.0], [37.6, 96.0], [37.7, 96.0], [37.8, 97.0], [37.9, 97.0], [38.0, 98.0], [38.1, 98.0], [38.2, 98.0], [38.3, 99.0], [38.4, 99.0], [38.5, 99.0], [38.6, 100.0], [38.7, 100.0], [38.8, 101.0], [38.9, 101.0], [39.0, 102.0], [39.1, 103.0], [39.2, 104.0], [39.3, 105.0], [39.4, 106.0], [39.5, 106.0], [39.6, 106.0], [39.7, 107.0], [39.8, 108.0], [39.9, 109.0], [40.0, 109.0], [40.1, 109.0], [40.2, 110.0], [40.3, 111.0], [40.4, 112.0], [40.5, 112.0], [40.6, 113.0], [40.7, 113.0], [40.8, 114.0], [40.9, 115.0], [41.0, 115.0], [41.1, 117.0], [41.2, 118.0], [41.3, 118.0], [41.4, 119.0], [41.5, 120.0], [41.6, 121.0], [41.7, 121.0], [41.8, 121.0], [41.9, 122.0], [42.0, 123.0], [42.1, 123.0], [42.2, 124.0], [42.3, 124.0], [42.4, 125.0], [42.5, 125.0], [42.6, 126.0], [42.7, 126.0], [42.8, 126.0], [42.9, 127.0], [43.0, 127.0], [43.1, 128.0], [43.2, 128.0], [43.3, 129.0], [43.4, 130.0], [43.5, 130.0], [43.6, 131.0], [43.7, 131.0], [43.8, 131.0], [43.9, 132.0], [44.0, 132.0], [44.1, 133.0], [44.2, 133.0], [44.3, 134.0], [44.4, 135.0], [44.5, 136.0], [44.6, 136.0], [44.7, 137.0], [44.8, 138.0], [44.9, 138.0], [45.0, 138.0], [45.1, 139.0], [45.2, 140.0], [45.3, 140.0], [45.4, 141.0], [45.5, 142.0], [45.6, 143.0], [45.7, 143.0], [45.8, 144.0], [45.9, 145.0], [46.0, 145.0], [46.1, 146.0], [46.2, 146.0], [46.3, 147.0], [46.4, 148.0], [46.5, 149.0], [46.6, 150.0], [46.7, 151.0], [46.8, 151.0], [46.9, 152.0], [47.0, 153.0], [47.1, 154.0], [47.2, 155.0], [47.3, 156.0], [47.4, 158.0], [47.5, 158.0], [47.6, 159.0], [47.7, 160.0], [47.8, 161.0], [47.9, 162.0], [48.0, 162.0], [48.1, 164.0], [48.2, 164.0], [48.3, 165.0], [48.4, 166.0], [48.5, 167.0], [48.6, 168.0], [48.7, 169.0], [48.8, 170.0], [48.9, 172.0], [49.0, 173.0], [49.1, 173.0], [49.2, 174.0], [49.3, 175.0], [49.4, 176.0], [49.5, 176.0], [49.6, 177.0], [49.7, 177.0], [49.8, 179.0], [49.9, 179.0], [50.0, 180.0], [50.1, 181.0], [50.2, 182.0], [50.3, 183.0], [50.4, 184.0], [50.5, 185.0], [50.6, 186.0], [50.7, 187.0], [50.8, 187.0], [50.9, 188.0], [51.0, 188.0], [51.1, 190.0], [51.2, 191.0], [51.3, 191.0], [51.4, 192.0], [51.5, 192.0], [51.6, 193.0], [51.7, 194.0], [51.8, 195.0], [51.9, 196.0], [52.0, 197.0], [52.1, 197.0], [52.2, 198.0], [52.3, 200.0], [52.4, 201.0], [52.5, 201.0], [52.6, 202.0], [52.7, 203.0], [52.8, 203.0], [52.9, 204.0], [53.0, 204.0], [53.1, 205.0], [53.2, 206.0], [53.3, 207.0], [53.4, 207.0], [53.5, 208.0], [53.6, 210.0], [53.7, 211.0], [53.8, 211.0], [53.9, 212.0], [54.0, 214.0], [54.1, 214.0], [54.2, 215.0], [54.3, 217.0], [54.4, 217.0], [54.5, 218.0], [54.6, 219.0], [54.7, 220.0], [54.8, 221.0], [54.9, 221.0], [55.0, 223.0], [55.1, 224.0], [55.2, 224.0], [55.3, 225.0], [55.4, 226.0], [55.5, 227.0], [55.6, 228.0], [55.7, 229.0], [55.8, 230.0], [55.9, 232.0], [56.0, 233.0], [56.1, 234.0], [56.2, 235.0], [56.3, 236.0], [56.4, 237.0], [56.5, 238.0], [56.6, 239.0], [56.7, 241.0], [56.8, 241.0], [56.9, 243.0], [57.0, 244.0], [57.1, 245.0], [57.2, 245.0], [57.3, 246.0], [57.4, 247.0], [57.5, 247.0], [57.6, 248.0], [57.7, 249.0], [57.8, 250.0], [57.9, 251.0], [58.0, 252.0], [58.1, 253.0], [58.2, 254.0], [58.3, 254.0], [58.4, 255.0], [58.5, 256.0], [58.6, 257.0], [58.7, 257.0], [58.8, 258.0], [58.9, 259.0], [59.0, 260.0], [59.1, 261.0], [59.2, 262.0], [59.3, 263.0], [59.4, 264.0], [59.5, 265.0], [59.6, 266.0], [59.7, 267.0], [59.8, 268.0], [59.9, 269.0], [60.0, 270.0], [60.1, 271.0], [60.2, 271.0], [60.3, 272.0], [60.4, 273.0], [60.5, 273.0], [60.6, 274.0], [60.7, 275.0], [60.8, 277.0], [60.9, 277.0], [61.0, 279.0], [61.1, 280.0], [61.2, 280.0], [61.3, 281.0], [61.4, 282.0], [61.5, 283.0], [61.6, 284.0], [61.7, 286.0], [61.8, 287.0], [61.9, 288.0], [62.0, 289.0], [62.1, 290.0], [62.2, 290.0], [62.3, 293.0], [62.4, 293.0], [62.5, 294.0], [62.6, 295.0], [62.7, 296.0], [62.8, 297.0], [62.9, 299.0], [63.0, 300.0], [63.1, 301.0], [63.2, 302.0], [63.3, 303.0], [63.4, 305.0], [63.5, 306.0], [63.6, 308.0], [63.7, 309.0], [63.8, 311.0], [63.9, 312.0], [64.0, 313.0], [64.1, 314.0], [64.2, 315.0], [64.3, 316.0], [64.4, 317.0], [64.5, 317.0], [64.6, 318.0], [64.7, 319.0], [64.8, 320.0], [64.9, 321.0], [65.0, 323.0], [65.1, 326.0], [65.2, 327.0], [65.3, 328.0], [65.4, 329.0], [65.5, 330.0], [65.6, 331.0], [65.7, 332.0], [65.8, 334.0], [65.9, 334.0], [66.0, 335.0], [66.1, 339.0], [66.2, 339.0], [66.3, 341.0], [66.4, 342.0], [66.5, 343.0], [66.6, 346.0], [66.7, 350.0], [66.8, 351.0], [66.9, 352.0], [67.0, 354.0], [67.1, 354.0], [67.2, 356.0], [67.3, 358.0], [67.4, 359.0], [67.5, 360.0], [67.6, 362.0], [67.7, 363.0], [67.8, 363.0], [67.9, 364.0], [68.0, 366.0], [68.1, 369.0], [68.2, 370.0], [68.3, 371.0], [68.4, 371.0], [68.5, 373.0], [68.6, 375.0], [68.7, 375.0], [68.8, 376.0], [68.9, 377.0], [69.0, 378.0], [69.1, 380.0], [69.2, 381.0], [69.3, 383.0], [69.4, 384.0], [69.5, 385.0], [69.6, 386.0], [69.7, 387.0], [69.8, 387.0], [69.9, 389.0], [70.0, 391.0], [70.1, 392.0], [70.2, 393.0], [70.3, 395.0], [70.4, 396.0], [70.5, 398.0], [70.6, 399.0], [70.7, 401.0], [70.8, 402.0], [70.9, 403.0], [71.0, 405.0], [71.1, 406.0], [71.2, 408.0], [71.3, 409.0], [71.4, 410.0], [71.5, 412.0], [71.6, 413.0], [71.7, 413.0], [71.8, 415.0], [71.9, 416.0], [72.0, 417.0], [72.1, 418.0], [72.2, 420.0], [72.3, 421.0], [72.4, 422.0], [72.5, 422.0], [72.6, 425.0], [72.7, 426.0], [72.8, 428.0], [72.9, 428.0], [73.0, 430.0], [73.1, 432.0], [73.2, 433.0], [73.3, 434.0], [73.4, 435.0], [73.5, 437.0], [73.6, 438.0], [73.7, 440.0], [73.8, 441.0], [73.9, 442.0], [74.0, 443.0], [74.1, 446.0], [74.2, 447.0], [74.3, 448.0], [74.4, 449.0], [74.5, 451.0], [74.6, 452.0], [74.7, 454.0], [74.8, 455.0], [74.9, 456.0], [75.0, 456.0], [75.1, 459.0], [75.2, 460.0], [75.3, 461.0], [75.4, 462.0], [75.5, 464.0], [75.6, 465.0], [75.7, 466.0], [75.8, 467.0], [75.9, 469.0], [76.0, 470.0], [76.1, 472.0], [76.2, 473.0], [76.3, 474.0], [76.4, 476.0], [76.5, 477.0], [76.6, 479.0], [76.7, 481.0], [76.8, 482.0], [76.9, 483.0], [77.0, 485.0], [77.1, 485.0], [77.2, 488.0], [77.3, 489.0], [77.4, 490.0], [77.5, 491.0], [77.6, 493.0], [77.7, 495.0], [77.8, 497.0], [77.9, 499.0], [78.0, 500.0], [78.1, 501.0], [78.2, 502.0], [78.3, 504.0], [78.4, 504.0], [78.5, 506.0], [78.6, 508.0], [78.7, 510.0], [78.8, 511.0], [78.9, 513.0], [79.0, 515.0], [79.1, 517.0], [79.2, 518.0], [79.3, 520.0], [79.4, 521.0], [79.5, 522.0], [79.6, 524.0], [79.7, 526.0], [79.8, 528.0], [79.9, 530.0], [80.0, 532.0], [80.1, 533.0], [80.2, 537.0], [80.3, 538.0], [80.4, 540.0], [80.5, 542.0], [80.6, 544.0], [80.7, 545.0], [80.8, 547.0], [80.9, 548.0], [81.0, 550.0], [81.1, 551.0], [81.2, 552.0], [81.3, 553.0], [81.4, 556.0], [81.5, 558.0], [81.6, 559.0], [81.7, 560.0], [81.8, 562.0], [81.9, 564.0], [82.0, 568.0], [82.1, 571.0], [82.2, 572.0], [82.3, 575.0], [82.4, 579.0], [82.5, 580.0], [82.6, 581.0], [82.7, 583.0], [82.8, 587.0], [82.9, 590.0], [83.0, 591.0], [83.1, 593.0], [83.2, 594.0], [83.3, 597.0], [83.4, 599.0], [83.5, 599.0], [83.6, 604.0], [83.7, 606.0], [83.8, 608.0], [83.9, 609.0], [84.0, 612.0], [84.1, 616.0], [84.2, 618.0], [84.3, 620.0], [84.4, 621.0], [84.5, 622.0], [84.6, 625.0], [84.7, 628.0], [84.8, 630.0], [84.9, 631.0], [85.0, 634.0], [85.1, 636.0], [85.2, 636.0], [85.3, 637.0], [85.4, 639.0], [85.5, 643.0], [85.6, 646.0], [85.7, 648.0], [85.8, 649.0], [85.9, 654.0], [86.0, 656.0], [86.1, 657.0], [86.2, 659.0], [86.3, 662.0], [86.4, 663.0], [86.5, 667.0], [86.6, 670.0], [86.7, 674.0], [86.8, 675.0], [86.9, 677.0], [87.0, 681.0], [87.1, 682.0], [87.2, 685.0], [87.3, 688.0], [87.4, 693.0], [87.5, 695.0], [87.6, 700.0], [87.7, 701.0], [87.8, 703.0], [87.9, 706.0], [88.0, 709.0], [88.1, 711.0], [88.2, 715.0], [88.3, 716.0], [88.4, 718.0], [88.5, 721.0], [88.6, 724.0], [88.7, 725.0], [88.8, 728.0], [88.9, 730.0], [89.0, 732.0], [89.1, 736.0], [89.2, 738.0], [89.3, 740.0], [89.4, 744.0], [89.5, 746.0], [89.6, 748.0], [89.7, 754.0], [89.8, 757.0], [89.9, 762.0], [90.0, 763.0], [90.1, 765.0], [90.2, 767.0], [90.3, 771.0], [90.4, 773.0], [90.5, 775.0], [90.6, 777.0], [90.7, 783.0], [90.8, 787.0], [90.9, 794.0], [91.0, 796.0], [91.1, 800.0], [91.2, 804.0], [91.3, 810.0], [91.4, 815.0], [91.5, 820.0], [91.6, 826.0], [91.7, 830.0], [91.8, 834.0], [91.9, 837.0], [92.0, 841.0], [92.1, 848.0], [92.2, 851.0], [92.3, 852.0], [92.4, 856.0], [92.5, 859.0], [92.6, 863.0], [92.7, 870.0], [92.8, 878.0], [92.9, 881.0], [93.0, 885.0], [93.1, 890.0], [93.2, 891.0], [93.3, 898.0], [93.4, 901.0], [93.5, 909.0], [93.6, 913.0], [93.7, 918.0], [93.8, 923.0], [93.9, 931.0], [94.0, 937.0], [94.1, 942.0], [94.2, 943.0], [94.3, 949.0], [94.4, 953.0], [94.5, 958.0], [94.6, 960.0], [94.7, 972.0], [94.8, 977.0], [94.9, 985.0], [95.0, 992.0], [95.1, 1005.0], [95.2, 1011.0], [95.3, 1017.0], [95.4, 1023.0], [95.5, 1027.0], [95.6, 1030.0], [95.7, 1035.0], [95.8, 1043.0], [95.9, 1054.0], [96.0, 1059.0], [96.1, 1063.0], [96.2, 1070.0], [96.3, 1078.0], [96.4, 1081.0], [96.5, 1090.0], [96.6, 1102.0], [96.7, 1108.0], [96.8, 1119.0], [96.9, 1133.0], [97.0, 1143.0], [97.1, 1151.0], [97.2, 1163.0], [97.3, 1180.0], [97.4, 1189.0], [97.5, 1194.0], [97.6, 1214.0], [97.7, 1236.0], [97.8, 1243.0], [97.9, 1256.0], [98.0, 1276.0], [98.1, 1304.0], [98.2, 1330.0], [98.3, 1345.0], [98.4, 1373.0], [98.5, 1401.0], [98.6, 1414.0], [98.7, 1462.0], [98.8, 1495.0], [98.9, 1527.0], [99.0, 1561.0], [99.1, 1614.0], [99.2, 1653.0], [99.3, 1708.0], [99.4, 1820.0], [99.5, 1853.0], [99.6, 1897.0], [99.7, 1995.0], [99.8, 2079.0], [99.9, 2139.0], [100.0, 3595.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 2030.0, "series": [{"data": [[0.0, 2030.0], [2100.0, 6.0], [600.0, 215.0], [700.0, 184.0], [800.0, 120.0], [200.0, 563.0], [3300.0, 1.0], [3500.0, 2.0], [900.0, 88.0], [1000.0, 82.0], [1100.0, 49.0], [300.0, 401.0], [1200.0, 30.0], [1300.0, 21.0], [1400.0, 17.0], [1500.0, 12.0], [100.0, 721.0], [400.0, 388.0], [1600.0, 13.0], [1700.0, 4.0], [1800.0, 12.0], [1900.0, 6.0], [500.0, 291.0], [2000.0, 6.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3500.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 62.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 4107.0, "series": [{"data": [[0.0, 4107.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1093.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 62.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.970967741935484, "minX": 1.60245864E12, "maxY": 10.0, "series": [{"data": [[1.60245864E12, 9.982520029133283], [1.6024587E12, 10.0], [1.60245876E12, 9.970967741935484]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60245876E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 310.4417540514772, "minX": 1.0, "maxY": 3595.0, "series": [{"data": [[4.0, 1111.0], [8.0, 1768.0], [2.0, 3533.0], [1.0, 3595.0], [9.0, 751.75], [5.0, 436.3333333333333], [10.0, 310.4417540514772], [6.0, 997.0], [3.0, 2049.0], [7.0, 601.5]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.98688711516533, 313.51539338654555]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 11879.283333333333, "minX": 1.60245864E12, "maxY": 1608830.0333333334, "series": [{"data": [[1.60245864E12, 1407879.7833333334], [1.6024587E12, 1234095.1166666667], [1.60245876E12, 1608830.0333333334]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60245864E12, 11879.283333333333], [1.6024587E12, 20118.05], [1.60245876E12, 13493.616666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60245876E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 255.65711842667798, "minX": 1.60245864E12, "maxY": 370.56081573197343, "series": [{"data": [[1.60245864E12, 370.56081573197343], [1.6024587E12, 255.65711842667798], [1.60245876E12, 350.294193548387]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60245876E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 255.36767849508354, "minX": 1.60245864E12, "maxY": 370.0240349599414, "series": [{"data": [[1.60245864E12, 370.0240349599414], [1.6024587E12, 255.36767849508354], [1.60245876E12, 349.8167741935485]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60245876E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.008550662676357413, "minX": 1.60245864E12, "maxY": 0.09176984705025511, "series": [{"data": [[1.60245864E12, 0.09176984705025511], [1.6024587E12, 0.008550662676357413], [1.60245876E12, 0.009677419354838733]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60245876E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 30.0, "minX": 1.60245864E12, "maxY": 3595.0, "series": [{"data": [[1.60245864E12, 2101.0], [1.6024587E12, 2167.0], [1.60245876E12, 3595.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60245864E12, 33.0], [1.6024587E12, 33.0], [1.60245876E12, 34.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60245864E12, 33.0], [1.6024587E12, 33.0], [1.60245876E12, 34.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60245864E12, 33.0], [1.6024587E12, 33.0], [1.60245876E12, 34.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60245864E12, 31.0], [1.6024587E12, 30.0], [1.60245876E12, 31.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60245864E12, 259.0], [1.6024587E12, 126.0], [1.60245876E12, 243.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60245876E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 54.0, "minX": 1.0, "maxY": 3595.0, "series": [{"data": [[4.0, 2067.0], [5.0, 1386.0], [6.0, 1096.5], [8.0, 812.5], [9.0, 1019.0], [10.0, 834.0], [11.0, 689.0], [12.0, 774.0], [13.0, 749.0], [14.0, 422.5], [15.0, 639.0], [16.0, 482.5], [17.0, 550.5], [18.0, 617.0], [19.0, 500.0], [20.0, 432.0], [21.0, 410.0], [22.0, 453.0], [23.0, 369.0], [24.0, 373.5], [25.0, 353.0], [26.0, 360.5], [27.0, 356.5], [28.0, 304.0], [29.0, 354.0], [30.0, 207.5], [31.0, 278.0], [32.0, 93.5], [33.0, 251.5], [34.0, 87.0], [35.0, 288.0], [36.0, 86.5], [37.0, 253.0], [39.0, 126.5], [38.0, 174.0], [40.0, 205.0], [41.0, 88.0], [43.0, 113.5], [42.0, 106.5], [45.0, 160.0], [44.0, 134.0], [47.0, 135.0], [48.0, 90.5], [49.0, 173.5], [51.0, 141.0], [53.0, 132.0], [52.0, 84.5], [55.0, 94.0], [56.0, 85.0], [57.0, 54.0], [58.0, 80.5], [60.0, 87.5], [62.0, 73.0], [64.0, 107.5], [67.0, 101.0], [65.0, 139.5], [69.0, 138.0], [77.0, 85.0], [79.0, 60.0], [80.0, 130.0], [82.0, 86.0], [85.0, 78.0], [1.0, 3595.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 85.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 54.0, "minX": 1.0, "maxY": 3594.0, "series": [{"data": [[4.0, 2066.5], [5.0, 1384.5], [6.0, 1096.0], [8.0, 812.5], [9.0, 1016.5], [10.0, 828.0], [11.0, 689.0], [12.0, 773.5], [13.0, 748.0], [14.0, 422.0], [15.0, 638.0], [16.0, 482.0], [17.0, 550.0], [18.0, 616.0], [19.0, 499.5], [20.0, 430.0], [21.0, 407.0], [22.0, 452.5], [23.0, 369.0], [24.0, 373.5], [25.0, 353.0], [26.0, 359.5], [27.0, 355.5], [28.0, 304.0], [29.0, 354.0], [30.0, 207.5], [31.0, 278.0], [32.0, 93.5], [33.0, 251.5], [34.0, 87.0], [35.0, 288.0], [36.0, 86.0], [37.0, 252.0], [39.0, 126.5], [38.0, 173.5], [40.0, 205.0], [41.0, 88.0], [43.0, 113.5], [42.0, 106.5], [45.0, 160.0], [44.0, 134.0], [47.0, 135.0], [48.0, 90.5], [49.0, 173.0], [51.0, 141.0], [53.0, 132.0], [52.0, 84.5], [55.0, 93.0], [56.0, 85.0], [57.0, 54.0], [58.0, 80.5], [60.0, 87.5], [62.0, 73.0], [64.0, 107.5], [67.0, 101.0], [65.0, 139.0], [69.0, 138.0], [77.0, 85.0], [79.0, 60.0], [80.0, 130.0], [82.0, 86.0], [85.0, 78.0], [1.0, 3594.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 85.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 23.05, "minX": 1.60245864E12, "maxY": 38.983333333333334, "series": [{"data": [[1.60245864E12, 23.05], [1.6024587E12, 38.983333333333334], [1.60245876E12, 25.666666666666668]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60245876E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 22.883333333333333, "minX": 1.60245864E12, "maxY": 38.983333333333334, "series": [{"data": [[1.60245864E12, 22.883333333333333], [1.6024587E12, 38.983333333333334], [1.60245876E12, 25.833333333333332]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60245876E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 22.883333333333333, "minX": 1.60245864E12, "maxY": 38.983333333333334, "series": [{"data": [[1.60245864E12, 22.883333333333333], [1.6024587E12, 38.983333333333334], [1.60245876E12, 25.833333333333332]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60245876E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 22.883333333333333, "minX": 1.60245864E12, "maxY": 38.983333333333334, "series": [{"data": [[1.60245864E12, 22.883333333333333], [1.6024587E12, 38.983333333333334], [1.60245876E12, 25.833333333333332]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60245876E12, "title": "Total Transactions Per Second"}},
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

