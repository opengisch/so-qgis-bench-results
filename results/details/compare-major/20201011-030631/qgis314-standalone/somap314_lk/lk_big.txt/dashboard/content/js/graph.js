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
        data: {"result": {"minY": 35.0, "minX": 0.0, "maxY": 4056.0, "series": [{"data": [[0.0, 35.0], [0.1, 37.0], [0.2, 38.0], [0.3, 39.0], [0.4, 40.0], [0.5, 40.0], [0.6, 40.0], [0.7, 41.0], [0.8, 41.0], [0.9, 41.0], [1.0, 42.0], [1.1, 42.0], [1.2, 42.0], [1.3, 42.0], [1.4, 42.0], [1.5, 42.0], [1.6, 43.0], [1.7, 43.0], [1.8, 43.0], [1.9, 43.0], [2.0, 43.0], [2.1, 43.0], [2.2, 43.0], [2.3, 43.0], [2.4, 44.0], [2.5, 44.0], [2.6, 44.0], [2.7, 44.0], [2.8, 44.0], [2.9, 44.0], [3.0, 44.0], [3.1, 44.0], [3.2, 45.0], [3.3, 45.0], [3.4, 45.0], [3.5, 45.0], [3.6, 45.0], [3.7, 45.0], [3.8, 45.0], [3.9, 45.0], [4.0, 45.0], [4.1, 45.0], [4.2, 45.0], [4.3, 45.0], [4.4, 45.0], [4.5, 46.0], [4.6, 46.0], [4.7, 46.0], [4.8, 46.0], [4.9, 46.0], [5.0, 46.0], [5.1, 46.0], [5.2, 46.0], [5.3, 46.0], [5.4, 46.0], [5.5, 46.0], [5.6, 46.0], [5.7, 46.0], [5.8, 46.0], [5.9, 47.0], [6.0, 47.0], [6.1, 47.0], [6.2, 47.0], [6.3, 47.0], [6.4, 47.0], [6.5, 47.0], [6.6, 47.0], [6.7, 47.0], [6.8, 47.0], [6.9, 47.0], [7.0, 47.0], [7.1, 47.0], [7.2, 47.0], [7.3, 48.0], [7.4, 48.0], [7.5, 48.0], [7.6, 48.0], [7.7, 48.0], [7.8, 48.0], [7.9, 48.0], [8.0, 48.0], [8.1, 48.0], [8.2, 48.0], [8.3, 48.0], [8.4, 48.0], [8.5, 48.0], [8.6, 48.0], [8.7, 49.0], [8.8, 49.0], [8.9, 49.0], [9.0, 49.0], [9.1, 49.0], [9.2, 49.0], [9.3, 49.0], [9.4, 49.0], [9.5, 49.0], [9.6, 49.0], [9.7, 49.0], [9.8, 49.0], [9.9, 49.0], [10.0, 49.0], [10.1, 49.0], [10.2, 49.0], [10.3, 49.0], [10.4, 49.0], [10.5, 50.0], [10.6, 50.0], [10.7, 50.0], [10.8, 50.0], [10.9, 50.0], [11.0, 50.0], [11.1, 50.0], [11.2, 50.0], [11.3, 50.0], [11.4, 50.0], [11.5, 50.0], [11.6, 50.0], [11.7, 50.0], [11.8, 50.0], [11.9, 50.0], [12.0, 50.0], [12.1, 50.0], [12.2, 51.0], [12.3, 51.0], [12.4, 51.0], [12.5, 51.0], [12.6, 51.0], [12.7, 51.0], [12.8, 51.0], [12.9, 51.0], [13.0, 51.0], [13.1, 51.0], [13.2, 51.0], [13.3, 51.0], [13.4, 51.0], [13.5, 51.0], [13.6, 51.0], [13.7, 51.0], [13.8, 51.0], [13.9, 51.0], [14.0, 51.0], [14.1, 52.0], [14.2, 52.0], [14.3, 52.0], [14.4, 52.0], [14.5, 52.0], [14.6, 52.0], [14.7, 52.0], [14.8, 52.0], [14.9, 52.0], [15.0, 52.0], [15.1, 52.0], [15.2, 52.0], [15.3, 52.0], [15.4, 52.0], [15.5, 52.0], [15.6, 52.0], [15.7, 53.0], [15.8, 53.0], [15.9, 53.0], [16.0, 53.0], [16.1, 53.0], [16.2, 53.0], [16.3, 53.0], [16.4, 53.0], [16.5, 53.0], [16.6, 53.0], [16.7, 53.0], [16.8, 54.0], [16.9, 54.0], [17.0, 54.0], [17.1, 54.0], [17.2, 54.0], [17.3, 54.0], [17.4, 54.0], [17.5, 54.0], [17.6, 54.0], [17.7, 54.0], [17.8, 54.0], [17.9, 54.0], [18.0, 54.0], [18.1, 55.0], [18.2, 55.0], [18.3, 55.0], [18.4, 55.0], [18.5, 55.0], [18.6, 55.0], [18.7, 55.0], [18.8, 55.0], [18.9, 55.0], [19.0, 55.0], [19.1, 55.0], [19.2, 55.0], [19.3, 55.0], [19.4, 56.0], [19.5, 56.0], [19.6, 56.0], [19.7, 56.0], [19.8, 56.0], [19.9, 56.0], [20.0, 56.0], [20.1, 56.0], [20.2, 56.0], [20.3, 56.0], [20.4, 56.0], [20.5, 57.0], [20.6, 57.0], [20.7, 57.0], [20.8, 57.0], [20.9, 57.0], [21.0, 57.0], [21.1, 57.0], [21.2, 57.0], [21.3, 57.0], [21.4, 57.0], [21.5, 58.0], [21.6, 58.0], [21.7, 58.0], [21.8, 58.0], [21.9, 58.0], [22.0, 58.0], [22.1, 58.0], [22.2, 58.0], [22.3, 59.0], [22.4, 59.0], [22.5, 59.0], [22.6, 59.0], [22.7, 59.0], [22.8, 59.0], [22.9, 60.0], [23.0, 60.0], [23.1, 60.0], [23.2, 60.0], [23.3, 60.0], [23.4, 61.0], [23.5, 61.0], [23.6, 61.0], [23.7, 61.0], [23.8, 61.0], [23.9, 61.0], [24.0, 62.0], [24.1, 62.0], [24.2, 62.0], [24.3, 62.0], [24.4, 63.0], [24.5, 63.0], [24.6, 63.0], [24.7, 63.0], [24.8, 63.0], [24.9, 64.0], [25.0, 64.0], [25.1, 64.0], [25.2, 64.0], [25.3, 64.0], [25.4, 64.0], [25.5, 65.0], [25.6, 65.0], [25.7, 65.0], [25.8, 65.0], [25.9, 65.0], [26.0, 66.0], [26.1, 66.0], [26.2, 66.0], [26.3, 66.0], [26.4, 67.0], [26.5, 67.0], [26.6, 67.0], [26.7, 67.0], [26.8, 68.0], [26.9, 68.0], [27.0, 68.0], [27.1, 69.0], [27.2, 69.0], [27.3, 69.0], [27.4, 70.0], [27.5, 70.0], [27.6, 70.0], [27.7, 70.0], [27.8, 71.0], [27.9, 71.0], [28.0, 71.0], [28.1, 71.0], [28.2, 72.0], [28.3, 72.0], [28.4, 73.0], [28.5, 73.0], [28.6, 73.0], [28.7, 73.0], [28.8, 74.0], [28.9, 74.0], [29.0, 75.0], [29.1, 75.0], [29.2, 75.0], [29.3, 75.0], [29.4, 76.0], [29.5, 76.0], [29.6, 76.0], [29.7, 77.0], [29.8, 77.0], [29.9, 77.0], [30.0, 77.0], [30.1, 77.0], [30.2, 78.0], [30.3, 78.0], [30.4, 78.0], [30.5, 78.0], [30.6, 79.0], [30.7, 79.0], [30.8, 79.0], [30.9, 79.0], [31.0, 79.0], [31.1, 80.0], [31.2, 80.0], [31.3, 80.0], [31.4, 80.0], [31.5, 80.0], [31.6, 81.0], [31.7, 81.0], [31.8, 81.0], [31.9, 81.0], [32.0, 82.0], [32.1, 82.0], [32.2, 82.0], [32.3, 82.0], [32.4, 83.0], [32.5, 83.0], [32.6, 83.0], [32.7, 83.0], [32.8, 83.0], [32.9, 84.0], [33.0, 84.0], [33.1, 84.0], [33.2, 84.0], [33.3, 84.0], [33.4, 85.0], [33.5, 85.0], [33.6, 85.0], [33.7, 85.0], [33.8, 86.0], [33.9, 86.0], [34.0, 86.0], [34.1, 87.0], [34.2, 87.0], [34.3, 87.0], [34.4, 88.0], [34.5, 88.0], [34.6, 88.0], [34.7, 88.0], [34.8, 89.0], [34.9, 89.0], [35.0, 89.0], [35.1, 89.0], [35.2, 90.0], [35.3, 90.0], [35.4, 90.0], [35.5, 91.0], [35.6, 91.0], [35.7, 91.0], [35.8, 91.0], [35.9, 92.0], [36.0, 92.0], [36.1, 92.0], [36.2, 93.0], [36.3, 93.0], [36.4, 94.0], [36.5, 94.0], [36.6, 95.0], [36.7, 95.0], [36.8, 95.0], [36.9, 96.0], [37.0, 96.0], [37.1, 96.0], [37.2, 97.0], [37.3, 97.0], [37.4, 97.0], [37.5, 98.0], [37.6, 98.0], [37.7, 98.0], [37.8, 99.0], [37.9, 100.0], [38.0, 100.0], [38.1, 100.0], [38.2, 100.0], [38.3, 101.0], [38.4, 102.0], [38.5, 102.0], [38.6, 103.0], [38.7, 103.0], [38.8, 104.0], [38.9, 104.0], [39.0, 105.0], [39.1, 105.0], [39.2, 106.0], [39.3, 106.0], [39.4, 107.0], [39.5, 108.0], [39.6, 108.0], [39.7, 109.0], [39.8, 110.0], [39.9, 111.0], [40.0, 112.0], [40.1, 112.0], [40.2, 113.0], [40.3, 113.0], [40.4, 114.0], [40.5, 115.0], [40.6, 115.0], [40.7, 116.0], [40.8, 117.0], [40.9, 119.0], [41.0, 120.0], [41.1, 120.0], [41.2, 121.0], [41.3, 122.0], [41.4, 123.0], [41.5, 124.0], [41.6, 124.0], [41.7, 125.0], [41.8, 126.0], [41.9, 127.0], [42.0, 128.0], [42.1, 129.0], [42.2, 130.0], [42.3, 131.0], [42.4, 131.0], [42.5, 132.0], [42.6, 132.0], [42.7, 133.0], [42.8, 134.0], [42.9, 134.0], [43.0, 135.0], [43.1, 135.0], [43.2, 136.0], [43.3, 138.0], [43.4, 139.0], [43.5, 140.0], [43.6, 142.0], [43.7, 142.0], [43.8, 143.0], [43.9, 144.0], [44.0, 144.0], [44.1, 145.0], [44.2, 145.0], [44.3, 147.0], [44.4, 148.0], [44.5, 148.0], [44.6, 149.0], [44.7, 150.0], [44.8, 151.0], [44.9, 151.0], [45.0, 153.0], [45.1, 154.0], [45.2, 155.0], [45.3, 156.0], [45.4, 157.0], [45.5, 157.0], [45.6, 158.0], [45.7, 158.0], [45.8, 160.0], [45.9, 160.0], [46.0, 161.0], [46.1, 161.0], [46.2, 162.0], [46.3, 163.0], [46.4, 164.0], [46.5, 164.0], [46.6, 166.0], [46.7, 166.0], [46.8, 167.0], [46.9, 167.0], [47.0, 168.0], [47.1, 168.0], [47.2, 170.0], [47.3, 170.0], [47.4, 171.0], [47.5, 173.0], [47.6, 174.0], [47.7, 175.0], [47.8, 176.0], [47.9, 177.0], [48.0, 178.0], [48.1, 178.0], [48.2, 179.0], [48.3, 180.0], [48.4, 181.0], [48.5, 182.0], [48.6, 183.0], [48.7, 183.0], [48.8, 185.0], [48.9, 186.0], [49.0, 186.0], [49.1, 188.0], [49.2, 189.0], [49.3, 190.0], [49.4, 191.0], [49.5, 191.0], [49.6, 192.0], [49.7, 193.0], [49.8, 193.0], [49.9, 194.0], [50.0, 194.0], [50.1, 196.0], [50.2, 196.0], [50.3, 197.0], [50.4, 199.0], [50.5, 199.0], [50.6, 200.0], [50.7, 201.0], [50.8, 202.0], [50.9, 203.0], [51.0, 204.0], [51.1, 204.0], [51.2, 205.0], [51.3, 205.0], [51.4, 206.0], [51.5, 206.0], [51.6, 207.0], [51.7, 207.0], [51.8, 207.0], [51.9, 208.0], [52.0, 209.0], [52.1, 210.0], [52.2, 211.0], [52.3, 212.0], [52.4, 212.0], [52.5, 213.0], [52.6, 214.0], [52.7, 214.0], [52.8, 215.0], [52.9, 216.0], [53.0, 216.0], [53.1, 217.0], [53.2, 218.0], [53.3, 218.0], [53.4, 219.0], [53.5, 220.0], [53.6, 220.0], [53.7, 221.0], [53.8, 221.0], [53.9, 223.0], [54.0, 224.0], [54.1, 224.0], [54.2, 225.0], [54.3, 227.0], [54.4, 227.0], [54.5, 228.0], [54.6, 230.0], [54.7, 231.0], [54.8, 232.0], [54.9, 232.0], [55.0, 233.0], [55.1, 234.0], [55.2, 235.0], [55.3, 236.0], [55.4, 237.0], [55.5, 238.0], [55.6, 239.0], [55.7, 241.0], [55.8, 241.0], [55.9, 241.0], [56.0, 241.0], [56.1, 242.0], [56.2, 243.0], [56.3, 243.0], [56.4, 244.0], [56.5, 245.0], [56.6, 246.0], [56.7, 247.0], [56.8, 247.0], [56.9, 248.0], [57.0, 248.0], [57.1, 249.0], [57.2, 250.0], [57.3, 251.0], [57.4, 252.0], [57.5, 252.0], [57.6, 253.0], [57.7, 254.0], [57.8, 254.0], [57.9, 255.0], [58.0, 256.0], [58.1, 257.0], [58.2, 258.0], [58.3, 258.0], [58.4, 260.0], [58.5, 260.0], [58.6, 261.0], [58.7, 262.0], [58.8, 263.0], [58.9, 263.0], [59.0, 265.0], [59.1, 266.0], [59.2, 267.0], [59.3, 268.0], [59.4, 269.0], [59.5, 269.0], [59.6, 270.0], [59.7, 272.0], [59.8, 273.0], [59.9, 273.0], [60.0, 274.0], [60.1, 275.0], [60.2, 276.0], [60.3, 277.0], [60.4, 277.0], [60.5, 278.0], [60.6, 279.0], [60.7, 280.0], [60.8, 281.0], [60.9, 282.0], [61.0, 284.0], [61.1, 285.0], [61.2, 285.0], [61.3, 286.0], [61.4, 287.0], [61.5, 288.0], [61.6, 289.0], [61.7, 290.0], [61.8, 291.0], [61.9, 292.0], [62.0, 293.0], [62.1, 294.0], [62.2, 295.0], [62.3, 297.0], [62.4, 297.0], [62.5, 298.0], [62.6, 300.0], [62.7, 301.0], [62.8, 302.0], [62.9, 303.0], [63.0, 305.0], [63.1, 306.0], [63.2, 307.0], [63.3, 308.0], [63.4, 308.0], [63.5, 310.0], [63.6, 311.0], [63.7, 312.0], [63.8, 315.0], [63.9, 315.0], [64.0, 317.0], [64.1, 319.0], [64.2, 320.0], [64.3, 320.0], [64.4, 321.0], [64.5, 322.0], [64.6, 324.0], [64.7, 324.0], [64.8, 326.0], [64.9, 326.0], [65.0, 327.0], [65.1, 328.0], [65.2, 329.0], [65.3, 330.0], [65.4, 332.0], [65.5, 333.0], [65.6, 334.0], [65.7, 336.0], [65.8, 337.0], [65.9, 338.0], [66.0, 339.0], [66.1, 340.0], [66.2, 341.0], [66.3, 342.0], [66.4, 343.0], [66.5, 344.0], [66.6, 346.0], [66.7, 347.0], [66.8, 347.0], [66.9, 348.0], [67.0, 349.0], [67.1, 351.0], [67.2, 353.0], [67.3, 354.0], [67.4, 355.0], [67.5, 355.0], [67.6, 357.0], [67.7, 357.0], [67.8, 359.0], [67.9, 360.0], [68.0, 362.0], [68.1, 364.0], [68.2, 364.0], [68.3, 365.0], [68.4, 366.0], [68.5, 368.0], [68.6, 369.0], [68.7, 371.0], [68.8, 373.0], [68.9, 374.0], [69.0, 375.0], [69.1, 377.0], [69.2, 377.0], [69.3, 378.0], [69.4, 379.0], [69.5, 380.0], [69.6, 381.0], [69.7, 382.0], [69.8, 384.0], [69.9, 387.0], [70.0, 387.0], [70.1, 389.0], [70.2, 390.0], [70.3, 391.0], [70.4, 392.0], [70.5, 394.0], [70.6, 395.0], [70.7, 397.0], [70.8, 399.0], [70.9, 400.0], [71.0, 403.0], [71.1, 403.0], [71.2, 405.0], [71.3, 406.0], [71.4, 408.0], [71.5, 410.0], [71.6, 411.0], [71.7, 412.0], [71.8, 413.0], [71.9, 413.0], [72.0, 414.0], [72.1, 416.0], [72.2, 419.0], [72.3, 420.0], [72.4, 423.0], [72.5, 424.0], [72.6, 427.0], [72.7, 429.0], [72.8, 431.0], [72.9, 434.0], [73.0, 436.0], [73.1, 437.0], [73.2, 439.0], [73.3, 440.0], [73.4, 441.0], [73.5, 442.0], [73.6, 444.0], [73.7, 446.0], [73.8, 447.0], [73.9, 448.0], [74.0, 451.0], [74.1, 454.0], [74.2, 455.0], [74.3, 455.0], [74.4, 458.0], [74.5, 459.0], [74.6, 460.0], [74.7, 461.0], [74.8, 461.0], [74.9, 465.0], [75.0, 467.0], [75.1, 468.0], [75.2, 471.0], [75.3, 474.0], [75.4, 475.0], [75.5, 478.0], [75.6, 480.0], [75.7, 480.0], [75.8, 482.0], [75.9, 483.0], [76.0, 487.0], [76.1, 489.0], [76.2, 491.0], [76.3, 493.0], [76.4, 495.0], [76.5, 497.0], [76.6, 499.0], [76.7, 501.0], [76.8, 505.0], [76.9, 507.0], [77.0, 508.0], [77.1, 511.0], [77.2, 514.0], [77.3, 517.0], [77.4, 519.0], [77.5, 521.0], [77.6, 523.0], [77.7, 524.0], [77.8, 525.0], [77.9, 528.0], [78.0, 529.0], [78.1, 531.0], [78.2, 532.0], [78.3, 534.0], [78.4, 536.0], [78.5, 538.0], [78.6, 540.0], [78.7, 541.0], [78.8, 543.0], [78.9, 545.0], [79.0, 546.0], [79.1, 547.0], [79.2, 548.0], [79.3, 550.0], [79.4, 552.0], [79.5, 556.0], [79.6, 558.0], [79.7, 559.0], [79.8, 563.0], [79.9, 567.0], [80.0, 569.0], [80.1, 574.0], [80.2, 577.0], [80.3, 580.0], [80.4, 582.0], [80.5, 585.0], [80.6, 586.0], [80.7, 589.0], [80.8, 590.0], [80.9, 591.0], [81.0, 593.0], [81.1, 598.0], [81.2, 600.0], [81.3, 604.0], [81.4, 606.0], [81.5, 609.0], [81.6, 614.0], [81.7, 617.0], [81.8, 619.0], [81.9, 624.0], [82.0, 627.0], [82.1, 629.0], [82.2, 631.0], [82.3, 635.0], [82.4, 636.0], [82.5, 639.0], [82.6, 641.0], [82.7, 642.0], [82.8, 644.0], [82.9, 648.0], [83.0, 650.0], [83.1, 651.0], [83.2, 654.0], [83.3, 657.0], [83.4, 660.0], [83.5, 664.0], [83.6, 667.0], [83.7, 670.0], [83.8, 674.0], [83.9, 676.0], [84.0, 679.0], [84.1, 681.0], [84.2, 685.0], [84.3, 689.0], [84.4, 691.0], [84.5, 695.0], [84.6, 696.0], [84.7, 702.0], [84.8, 704.0], [84.9, 710.0], [85.0, 712.0], [85.1, 716.0], [85.2, 721.0], [85.3, 723.0], [85.4, 727.0], [85.5, 732.0], [85.6, 734.0], [85.7, 737.0], [85.8, 741.0], [85.9, 746.0], [86.0, 751.0], [86.1, 754.0], [86.2, 757.0], [86.3, 760.0], [86.4, 764.0], [86.5, 766.0], [86.6, 771.0], [86.7, 775.0], [86.8, 778.0], [86.9, 782.0], [87.0, 787.0], [87.1, 790.0], [87.2, 795.0], [87.3, 799.0], [87.4, 802.0], [87.5, 811.0], [87.6, 812.0], [87.7, 818.0], [87.8, 825.0], [87.9, 831.0], [88.0, 833.0], [88.1, 838.0], [88.2, 842.0], [88.3, 845.0], [88.4, 849.0], [88.5, 858.0], [88.6, 866.0], [88.7, 870.0], [88.8, 876.0], [88.9, 881.0], [89.0, 884.0], [89.1, 885.0], [89.2, 894.0], [89.3, 899.0], [89.4, 901.0], [89.5, 903.0], [89.6, 911.0], [89.7, 916.0], [89.8, 922.0], [89.9, 926.0], [90.0, 928.0], [90.1, 935.0], [90.2, 938.0], [90.3, 945.0], [90.4, 949.0], [90.5, 953.0], [90.6, 957.0], [90.7, 965.0], [90.8, 973.0], [90.9, 980.0], [91.0, 983.0], [91.1, 992.0], [91.2, 998.0], [91.3, 1001.0], [91.4, 1007.0], [91.5, 1019.0], [91.6, 1023.0], [91.7, 1027.0], [91.8, 1031.0], [91.9, 1034.0], [92.0, 1042.0], [92.1, 1046.0], [92.2, 1048.0], [92.3, 1055.0], [92.4, 1060.0], [92.5, 1064.0], [92.6, 1066.0], [92.7, 1070.0], [92.8, 1076.0], [92.9, 1083.0], [93.0, 1090.0], [93.1, 1096.0], [93.2, 1099.0], [93.3, 1107.0], [93.4, 1112.0], [93.5, 1126.0], [93.6, 1139.0], [93.7, 1146.0], [93.8, 1159.0], [93.9, 1165.0], [94.0, 1173.0], [94.1, 1191.0], [94.2, 1198.0], [94.3, 1213.0], [94.4, 1225.0], [94.5, 1237.0], [94.6, 1248.0], [94.7, 1257.0], [94.8, 1263.0], [94.9, 1269.0], [95.0, 1289.0], [95.1, 1302.0], [95.2, 1313.0], [95.3, 1321.0], [95.4, 1334.0], [95.5, 1342.0], [95.6, 1351.0], [95.7, 1355.0], [95.8, 1359.0], [95.9, 1372.0], [96.0, 1385.0], [96.1, 1404.0], [96.2, 1419.0], [96.3, 1433.0], [96.4, 1452.0], [96.5, 1469.0], [96.6, 1487.0], [96.7, 1496.0], [96.8, 1511.0], [96.9, 1529.0], [97.0, 1551.0], [97.1, 1563.0], [97.2, 1596.0], [97.3, 1614.0], [97.4, 1651.0], [97.5, 1666.0], [97.6, 1674.0], [97.7, 1689.0], [97.8, 1736.0], [97.9, 1771.0], [98.0, 1791.0], [98.1, 1829.0], [98.2, 1858.0], [98.3, 1909.0], [98.4, 1961.0], [98.5, 2035.0], [98.6, 2088.0], [98.7, 2120.0], [98.8, 2138.0], [98.9, 2213.0], [99.0, 2258.0], [99.1, 2332.0], [99.2, 2377.0], [99.3, 2439.0], [99.4, 2558.0], [99.5, 2762.0], [99.6, 2886.0], [99.7, 3119.0], [99.8, 3284.0], [99.9, 3559.0], [100.0, 4056.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 1991.0, "series": [{"data": [[0.0, 1991.0], [600.0, 182.0], [700.0, 140.0], [800.0, 107.0], [900.0, 101.0], [1000.0, 103.0], [1100.0, 54.0], [1200.0, 44.0], [1300.0, 52.0], [1400.0, 35.0], [1500.0, 25.0], [100.0, 669.0], [1600.0, 28.0], [1700.0, 15.0], [1800.0, 13.0], [1900.0, 10.0], [2000.0, 11.0], [2100.0, 12.0], [2200.0, 7.0], [2300.0, 12.0], [2400.0, 4.0], [2500.0, 6.0], [2600.0, 2.0], [2800.0, 6.0], [2700.0, 1.0], [2900.0, 3.0], [3000.0, 1.0], [3100.0, 4.0], [200.0, 633.0], [3200.0, 2.0], [3300.0, 2.0], [3400.0, 1.0], [3500.0, 2.0], [3600.0, 1.0], [3800.0, 1.0], [3900.0, 1.0], [4000.0, 2.0], [300.0, 433.0], [400.0, 305.0], [500.0, 241.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 4000.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 172.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 4034.0, "series": [{"data": [[0.0, 4034.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1056.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 172.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.96405750798722, "minX": 1.60238802E12, "maxY": 10.0, "series": [{"data": [[1.60238808E12, 10.0], [1.60238814E12, 10.0], [1.60238802E12, 9.972927241962777], [1.6023882E12, 9.96405750798722]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6023882E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 361.5189632170759, "minX": 1.0, "maxY": 3669.0, "series": [{"data": [[4.0, 707.5], [8.0, 841.3333333333333], [2.0, 2138.0], [1.0, 3669.0], [9.0, 759.3333333333333], [10.0, 361.5189632170759], [5.0, 1242.0], [6.0, 559.0], [3.0, 1771.0], [7.0, 1139.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.98840744963893, 363.7749904979095]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 5201.266666666666, "minX": 1.60238802E12, "maxY": 1452474.3666666667, "series": [{"data": [[1.60238808E12, 1452474.3666666667], [1.60238814E12, 1050531.1666666667], [1.60238802E12, 316615.25], [1.6023882E12, 1419800.0333333334]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60238808E12, 12368.766666666666], [1.60238814E12, 17801.233333333334], [1.60238802E12, 5201.266666666666], [1.6023882E12, 11347.483333333334]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6023882E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 301.53261927945465, "minX": 1.60238802E12, "maxY": 424.5399267399266, "series": [{"data": [[1.60238808E12, 424.5399267399266], [1.60238814E12, 301.53261927945465], [1.60238802E12, 368.54483925549937], [1.6023882E12, 397.38738019169335]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6023882E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 299.61100292112934, "minX": 1.60238802E12, "maxY": 418.1304029304032, "series": [{"data": [[1.60238808E12, 418.1304029304032], [1.60238814E12, 299.61100292112934], [1.60238802E12, 366.20304568527945], [1.6023882E12, 390.9640575079868]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6023882E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.5375399361022363, "minX": 1.60238802E12, "maxY": 0.9915397631133687, "series": [{"data": [[1.60238808E12, 0.6937728937728935], [1.60238814E12, 0.5701071080817915], [1.60238802E12, 0.9915397631133687], [1.6023882E12, 0.5375399361022363]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6023882E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 35.0, "minX": 1.60238802E12, "maxY": 4056.0, "series": [{"data": [[1.60238808E12, 4019.0], [1.60238814E12, 4056.0], [1.60238802E12, 3964.0], [1.6023882E12, 3669.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60238808E12, 41.0], [1.60238814E12, 41.0], [1.60238802E12, 41.3279998588562], [1.6023882E12, 40.276999701261516]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60238808E12, 41.52340013027191], [1.60238814E12, 42.0], [1.60238802E12, 41.86080005645752], [1.6023882E12, 41.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60238808E12, 41.0], [1.60238814E12, 41.52249975502491], [1.60238802E12, 41.6239999294281], [1.6023882E12, 40.90349985063076]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60238808E12, 39.0], [1.60238814E12, 37.0], [1.60238802E12, 35.0], [1.6023882E12, 35.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60238808E12, 238.0], [1.60238814E12, 144.0], [1.60238802E12, 237.0], [1.6023882E12, 221.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6023882E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 56.5, "minX": 2.0, "maxY": 2138.0, "series": [{"data": [[2.0, 106.5], [3.0, 2138.0], [4.0, 917.0], [5.0, 1385.0], [6.0, 978.0], [7.0, 1398.5], [8.0, 855.0], [9.0, 798.5], [10.0, 685.0], [11.0, 762.5], [12.0, 426.0], [13.0, 706.0], [14.0, 546.0], [15.0, 436.0], [16.0, 357.5], [17.0, 446.0], [18.0, 427.5], [19.0, 459.0], [20.0, 406.5], [21.0, 357.0], [22.0, 277.0], [23.0, 255.5], [24.0, 417.0], [25.0, 263.0], [26.0, 215.5], [27.0, 213.0], [28.0, 200.5], [29.0, 109.5], [30.0, 277.5], [31.0, 351.0], [32.0, 257.0], [33.0, 154.5], [34.0, 138.5], [35.0, 324.0], [36.0, 187.5], [37.0, 161.5], [39.0, 107.0], [38.0, 188.5], [41.0, 69.0], [40.0, 147.5], [42.0, 161.5], [45.0, 56.5], [44.0, 89.0], [49.0, 150.5], [48.0, 78.0], [51.0, 140.5], [50.0, 149.0], [52.0, 107.0], [54.0, 165.5], [58.0, 91.5], [61.0, 75.0], [62.0, 79.5], [66.0, 79.0], [67.0, 89.0], [65.0, 98.5], [70.0, 124.0], [71.0, 108.0], [73.0, 105.0], [78.0, 77.0], [76.0, 61.5], [97.0, 73.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 97.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 56.5, "minX": 2.0, "maxY": 2138.0, "series": [{"data": [[2.0, 104.5], [3.0, 2138.0], [4.0, 917.0], [5.0, 1384.0], [6.0, 978.0], [7.0, 1397.0], [8.0, 853.0], [9.0, 797.5], [10.0, 685.0], [11.0, 750.5], [12.0, 407.0], [13.0, 706.0], [14.0, 545.5], [15.0, 435.0], [16.0, 357.5], [17.0, 438.0], [18.0, 427.0], [19.0, 458.5], [20.0, 388.0], [21.0, 356.0], [22.0, 276.5], [23.0, 255.0], [24.0, 395.5], [25.0, 261.5], [26.0, 215.5], [27.0, 212.0], [28.0, 200.5], [29.0, 109.5], [30.0, 270.5], [31.0, 350.0], [32.0, 255.5], [33.0, 154.5], [34.0, 138.0], [35.0, 324.0], [36.0, 186.5], [37.0, 161.5], [39.0, 107.0], [38.0, 188.5], [41.0, 69.0], [40.0, 146.5], [42.0, 161.0], [45.0, 56.5], [44.0, 89.0], [49.0, 150.5], [48.0, 78.0], [51.0, 140.5], [50.0, 149.0], [52.0, 107.0], [54.0, 165.5], [58.0, 91.5], [61.0, 73.0], [62.0, 79.5], [66.0, 79.0], [67.0, 89.0], [65.0, 98.5], [70.0, 123.5], [71.0, 108.0], [73.0, 105.0], [78.0, 77.0], [76.0, 61.5], [97.0, 73.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 97.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 10.016666666666667, "minX": 1.60238802E12, "maxY": 34.233333333333334, "series": [{"data": [[1.60238808E12, 22.75], [1.60238814E12, 34.233333333333334], [1.60238802E12, 10.016666666666667], [1.6023882E12, 20.7]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6023882E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 9.85, "minX": 1.60238802E12, "maxY": 34.233333333333334, "series": [{"data": [[1.60238808E12, 22.75], [1.60238814E12, 34.233333333333334], [1.60238802E12, 9.85], [1.6023882E12, 20.866666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6023882E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 9.85, "minX": 1.60238802E12, "maxY": 34.233333333333334, "series": [{"data": [[1.60238808E12, 22.75], [1.60238814E12, 34.233333333333334], [1.60238802E12, 9.85], [1.6023882E12, 20.866666666666667]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6023882E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 9.85, "minX": 1.60238802E12, "maxY": 34.233333333333334, "series": [{"data": [[1.60238808E12, 22.75], [1.60238814E12, 34.233333333333334], [1.60238802E12, 9.85], [1.6023882E12, 20.866666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6023882E12, "title": "Total Transactions Per Second"}},
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

