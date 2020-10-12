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
        data: {"result": {"minY": 30.0, "minX": 0.0, "maxY": 3801.0, "series": [{"data": [[0.0, 30.0], [0.1, 32.0], [0.2, 32.0], [0.3, 32.0], [0.4, 33.0], [0.5, 33.0], [0.6, 33.0], [0.7, 34.0], [0.8, 34.0], [0.9, 35.0], [1.0, 35.0], [1.1, 35.0], [1.2, 35.0], [1.3, 36.0], [1.4, 36.0], [1.5, 36.0], [1.6, 36.0], [1.7, 36.0], [1.8, 36.0], [1.9, 37.0], [2.0, 37.0], [2.1, 37.0], [2.2, 37.0], [2.3, 37.0], [2.4, 37.0], [2.5, 37.0], [2.6, 38.0], [2.7, 38.0], [2.8, 38.0], [2.9, 38.0], [3.0, 38.0], [3.1, 38.0], [3.2, 38.0], [3.3, 38.0], [3.4, 38.0], [3.5, 38.0], [3.6, 39.0], [3.7, 39.0], [3.8, 39.0], [3.9, 39.0], [4.0, 39.0], [4.1, 39.0], [4.2, 39.0], [4.3, 39.0], [4.4, 39.0], [4.5, 39.0], [4.6, 39.0], [4.7, 39.0], [4.8, 39.0], [4.9, 39.0], [5.0, 40.0], [5.1, 40.0], [5.2, 40.0], [5.3, 40.0], [5.4, 40.0], [5.5, 40.0], [5.6, 40.0], [5.7, 40.0], [5.8, 40.0], [5.9, 40.0], [6.0, 40.0], [6.1, 40.0], [6.2, 40.0], [6.3, 41.0], [6.4, 41.0], [6.5, 41.0], [6.6, 41.0], [6.7, 41.0], [6.8, 41.0], [6.9, 41.0], [7.0, 41.0], [7.1, 41.0], [7.2, 41.0], [7.3, 41.0], [7.4, 41.0], [7.5, 41.0], [7.6, 41.0], [7.7, 42.0], [7.8, 42.0], [7.9, 42.0], [8.0, 42.0], [8.1, 42.0], [8.2, 42.0], [8.3, 42.0], [8.4, 42.0], [8.5, 42.0], [8.6, 42.0], [8.7, 42.0], [8.8, 42.0], [8.9, 42.0], [9.0, 42.0], [9.1, 43.0], [9.2, 43.0], [9.3, 43.0], [9.4, 43.0], [9.5, 43.0], [9.6, 43.0], [9.7, 43.0], [9.8, 43.0], [9.9, 43.0], [10.0, 43.0], [10.1, 43.0], [10.2, 43.0], [10.3, 44.0], [10.4, 44.0], [10.5, 44.0], [10.6, 44.0], [10.7, 44.0], [10.8, 44.0], [10.9, 44.0], [11.0, 44.0], [11.1, 44.0], [11.2, 44.0], [11.3, 44.0], [11.4, 45.0], [11.5, 45.0], [11.6, 45.0], [11.7, 45.0], [11.8, 45.0], [11.9, 45.0], [12.0, 45.0], [12.1, 45.0], [12.2, 45.0], [12.3, 45.0], [12.4, 46.0], [12.5, 46.0], [12.6, 46.0], [12.7, 46.0], [12.8, 46.0], [12.9, 46.0], [13.0, 46.0], [13.1, 46.0], [13.2, 47.0], [13.3, 47.0], [13.4, 47.0], [13.5, 47.0], [13.6, 47.0], [13.7, 47.0], [13.8, 47.0], [13.9, 47.0], [14.0, 48.0], [14.1, 48.0], [14.2, 48.0], [14.3, 48.0], [14.4, 48.0], [14.5, 48.0], [14.6, 48.0], [14.7, 49.0], [14.8, 49.0], [14.9, 49.0], [15.0, 49.0], [15.1, 49.0], [15.2, 49.0], [15.3, 49.0], [15.4, 50.0], [15.5, 50.0], [15.6, 50.0], [15.7, 51.0], [15.8, 51.0], [15.9, 51.0], [16.0, 51.0], [16.1, 51.0], [16.2, 51.0], [16.3, 52.0], [16.4, 52.0], [16.5, 53.0], [16.6, 53.0], [16.7, 53.0], [16.8, 53.0], [16.9, 54.0], [17.0, 54.0], [17.1, 54.0], [17.2, 55.0], [17.3, 55.0], [17.4, 55.0], [17.5, 56.0], [17.6, 56.0], [17.7, 56.0], [17.8, 56.0], [17.9, 57.0], [18.0, 57.0], [18.1, 57.0], [18.2, 58.0], [18.3, 58.0], [18.4, 59.0], [18.5, 59.0], [18.6, 59.0], [18.7, 59.0], [18.8, 60.0], [18.9, 60.0], [19.0, 60.0], [19.1, 61.0], [19.2, 61.0], [19.3, 61.0], [19.4, 62.0], [19.5, 62.0], [19.6, 62.0], [19.7, 63.0], [19.8, 63.0], [19.9, 63.0], [20.0, 63.0], [20.1, 63.0], [20.2, 64.0], [20.3, 64.0], [20.4, 64.0], [20.5, 65.0], [20.6, 65.0], [20.7, 65.0], [20.8, 65.0], [20.9, 65.0], [21.0, 66.0], [21.1, 66.0], [21.2, 66.0], [21.3, 66.0], [21.4, 66.0], [21.5, 67.0], [21.6, 67.0], [21.7, 67.0], [21.8, 67.0], [21.9, 68.0], [22.0, 68.0], [22.1, 68.0], [22.2, 68.0], [22.3, 69.0], [22.4, 69.0], [22.5, 69.0], [22.6, 69.0], [22.7, 69.0], [22.8, 69.0], [22.9, 70.0], [23.0, 70.0], [23.1, 70.0], [23.2, 70.0], [23.3, 71.0], [23.4, 71.0], [23.5, 71.0], [23.6, 71.0], [23.7, 71.0], [23.8, 71.0], [23.9, 71.0], [24.0, 72.0], [24.1, 72.0], [24.2, 72.0], [24.3, 72.0], [24.4, 72.0], [24.5, 72.0], [24.6, 72.0], [24.7, 72.0], [24.8, 73.0], [24.9, 73.0], [25.0, 73.0], [25.1, 73.0], [25.2, 73.0], [25.3, 73.0], [25.4, 73.0], [25.5, 74.0], [25.6, 74.0], [25.7, 74.0], [25.8, 74.0], [25.9, 74.0], [26.0, 74.0], [26.1, 74.0], [26.2, 75.0], [26.3, 75.0], [26.4, 75.0], [26.5, 75.0], [26.6, 75.0], [26.7, 75.0], [26.8, 75.0], [26.9, 76.0], [27.0, 76.0], [27.1, 76.0], [27.2, 76.0], [27.3, 76.0], [27.4, 76.0], [27.5, 76.0], [27.6, 77.0], [27.7, 77.0], [27.8, 77.0], [27.9, 77.0], [28.0, 77.0], [28.1, 77.0], [28.2, 77.0], [28.3, 77.0], [28.4, 78.0], [28.5, 78.0], [28.6, 78.0], [28.7, 78.0], [28.8, 78.0], [28.9, 78.0], [29.0, 78.0], [29.1, 78.0], [29.2, 78.0], [29.3, 79.0], [29.4, 79.0], [29.5, 79.0], [29.6, 79.0], [29.7, 79.0], [29.8, 79.0], [29.9, 79.0], [30.0, 80.0], [30.1, 80.0], [30.2, 80.0], [30.3, 80.0], [30.4, 80.0], [30.5, 80.0], [30.6, 80.0], [30.7, 80.0], [30.8, 80.0], [30.9, 80.0], [31.0, 81.0], [31.1, 81.0], [31.2, 81.0], [31.3, 81.0], [31.4, 81.0], [31.5, 81.0], [31.6, 81.0], [31.7, 81.0], [31.8, 82.0], [31.9, 82.0], [32.0, 82.0], [32.1, 82.0], [32.2, 82.0], [32.3, 82.0], [32.4, 83.0], [32.5, 83.0], [32.6, 83.0], [32.7, 83.0], [32.8, 83.0], [32.9, 83.0], [33.0, 84.0], [33.1, 84.0], [33.2, 84.0], [33.3, 84.0], [33.4, 84.0], [33.5, 84.0], [33.6, 85.0], [33.7, 85.0], [33.8, 85.0], [33.9, 85.0], [34.0, 85.0], [34.1, 85.0], [34.2, 85.0], [34.3, 86.0], [34.4, 86.0], [34.5, 86.0], [34.6, 86.0], [34.7, 86.0], [34.8, 86.0], [34.9, 87.0], [35.0, 87.0], [35.1, 87.0], [35.2, 87.0], [35.3, 87.0], [35.4, 87.0], [35.5, 88.0], [35.6, 88.0], [35.7, 88.0], [35.8, 88.0], [35.9, 88.0], [36.0, 89.0], [36.1, 89.0], [36.2, 89.0], [36.3, 89.0], [36.4, 89.0], [36.5, 90.0], [36.6, 90.0], [36.7, 90.0], [36.8, 90.0], [36.9, 91.0], [37.0, 91.0], [37.1, 92.0], [37.2, 92.0], [37.3, 92.0], [37.4, 93.0], [37.5, 93.0], [37.6, 93.0], [37.7, 94.0], [37.8, 94.0], [37.9, 94.0], [38.0, 94.0], [38.1, 95.0], [38.2, 95.0], [38.3, 95.0], [38.4, 96.0], [38.5, 96.0], [38.6, 97.0], [38.7, 97.0], [38.8, 98.0], [38.9, 98.0], [39.0, 98.0], [39.1, 99.0], [39.2, 99.0], [39.3, 99.0], [39.4, 100.0], [39.5, 100.0], [39.6, 100.0], [39.7, 101.0], [39.8, 101.0], [39.9, 102.0], [40.0, 102.0], [40.1, 103.0], [40.2, 103.0], [40.3, 104.0], [40.4, 104.0], [40.5, 105.0], [40.6, 106.0], [40.7, 106.0], [40.8, 107.0], [40.9, 107.0], [41.0, 108.0], [41.1, 108.0], [41.2, 109.0], [41.3, 110.0], [41.4, 110.0], [41.5, 111.0], [41.6, 112.0], [41.7, 112.0], [41.8, 113.0], [41.9, 113.0], [42.0, 114.0], [42.1, 114.0], [42.2, 115.0], [42.3, 116.0], [42.4, 117.0], [42.5, 117.0], [42.6, 117.0], [42.7, 118.0], [42.8, 118.0], [42.9, 120.0], [43.0, 120.0], [43.1, 120.0], [43.2, 121.0], [43.3, 121.0], [43.4, 122.0], [43.5, 123.0], [43.6, 123.0], [43.7, 124.0], [43.8, 124.0], [43.9, 125.0], [44.0, 125.0], [44.1, 126.0], [44.2, 127.0], [44.3, 127.0], [44.4, 128.0], [44.5, 129.0], [44.6, 129.0], [44.7, 130.0], [44.8, 130.0], [44.9, 131.0], [45.0, 132.0], [45.1, 132.0], [45.2, 133.0], [45.3, 133.0], [45.4, 134.0], [45.5, 134.0], [45.6, 135.0], [45.7, 136.0], [45.8, 137.0], [45.9, 137.0], [46.0, 138.0], [46.1, 138.0], [46.2, 139.0], [46.3, 140.0], [46.4, 141.0], [46.5, 141.0], [46.6, 142.0], [46.7, 142.0], [46.8, 143.0], [46.9, 143.0], [47.0, 144.0], [47.1, 144.0], [47.2, 145.0], [47.3, 146.0], [47.4, 147.0], [47.5, 147.0], [47.6, 149.0], [47.7, 149.0], [47.8, 149.0], [47.9, 150.0], [48.0, 150.0], [48.1, 151.0], [48.2, 152.0], [48.3, 153.0], [48.4, 153.0], [48.5, 154.0], [48.6, 155.0], [48.7, 155.0], [48.8, 156.0], [48.9, 157.0], [49.0, 157.0], [49.1, 158.0], [49.2, 158.0], [49.3, 160.0], [49.4, 162.0], [49.5, 163.0], [49.6, 164.0], [49.7, 165.0], [49.8, 166.0], [49.9, 168.0], [50.0, 169.0], [50.1, 170.0], [50.2, 170.0], [50.3, 171.0], [50.4, 172.0], [50.5, 173.0], [50.6, 173.0], [50.7, 175.0], [50.8, 176.0], [50.9, 178.0], [51.0, 180.0], [51.1, 180.0], [51.2, 181.0], [51.3, 182.0], [51.4, 182.0], [51.5, 184.0], [51.6, 185.0], [51.7, 186.0], [51.8, 186.0], [51.9, 187.0], [52.0, 188.0], [52.1, 189.0], [52.2, 190.0], [52.3, 192.0], [52.4, 193.0], [52.5, 193.0], [52.6, 195.0], [52.7, 196.0], [52.8, 197.0], [52.9, 198.0], [53.0, 199.0], [53.1, 200.0], [53.2, 201.0], [53.3, 202.0], [53.4, 203.0], [53.5, 203.0], [53.6, 204.0], [53.7, 205.0], [53.8, 206.0], [53.9, 207.0], [54.0, 208.0], [54.1, 210.0], [54.2, 211.0], [54.3, 213.0], [54.4, 214.0], [54.5, 215.0], [54.6, 215.0], [54.7, 216.0], [54.8, 217.0], [54.9, 217.0], [55.0, 218.0], [55.1, 219.0], [55.2, 220.0], [55.3, 221.0], [55.4, 223.0], [55.5, 224.0], [55.6, 224.0], [55.7, 225.0], [55.8, 226.0], [55.9, 227.0], [56.0, 228.0], [56.1, 228.0], [56.2, 229.0], [56.3, 230.0], [56.4, 231.0], [56.5, 232.0], [56.6, 233.0], [56.7, 235.0], [56.8, 236.0], [56.9, 237.0], [57.0, 237.0], [57.1, 238.0], [57.2, 239.0], [57.3, 240.0], [57.4, 241.0], [57.5, 241.0], [57.6, 243.0], [57.7, 244.0], [57.8, 244.0], [57.9, 245.0], [58.0, 246.0], [58.1, 247.0], [58.2, 249.0], [58.3, 249.0], [58.4, 249.0], [58.5, 250.0], [58.6, 250.0], [58.7, 252.0], [58.8, 253.0], [58.9, 253.0], [59.0, 254.0], [59.1, 255.0], [59.2, 256.0], [59.3, 257.0], [59.4, 258.0], [59.5, 259.0], [59.6, 260.0], [59.7, 261.0], [59.8, 262.0], [59.9, 262.0], [60.0, 263.0], [60.1, 265.0], [60.2, 267.0], [60.3, 268.0], [60.4, 268.0], [60.5, 269.0], [60.6, 270.0], [60.7, 271.0], [60.8, 273.0], [60.9, 275.0], [61.0, 277.0], [61.1, 278.0], [61.2, 280.0], [61.3, 281.0], [61.4, 281.0], [61.5, 282.0], [61.6, 283.0], [61.7, 284.0], [61.8, 285.0], [61.9, 287.0], [62.0, 287.0], [62.1, 288.0], [62.2, 289.0], [62.3, 291.0], [62.4, 292.0], [62.5, 293.0], [62.6, 294.0], [62.7, 297.0], [62.8, 298.0], [62.9, 300.0], [63.0, 303.0], [63.1, 304.0], [63.2, 305.0], [63.3, 307.0], [63.4, 308.0], [63.5, 309.0], [63.6, 310.0], [63.7, 311.0], [63.8, 312.0], [63.9, 314.0], [64.0, 316.0], [64.1, 318.0], [64.2, 319.0], [64.3, 320.0], [64.4, 321.0], [64.5, 322.0], [64.6, 323.0], [64.7, 325.0], [64.8, 326.0], [64.9, 327.0], [65.0, 328.0], [65.1, 330.0], [65.2, 330.0], [65.3, 332.0], [65.4, 333.0], [65.5, 333.0], [65.6, 335.0], [65.7, 337.0], [65.8, 337.0], [65.9, 338.0], [66.0, 339.0], [66.1, 341.0], [66.2, 342.0], [66.3, 343.0], [66.4, 345.0], [66.5, 347.0], [66.6, 348.0], [66.7, 349.0], [66.8, 351.0], [66.9, 353.0], [67.0, 355.0], [67.1, 356.0], [67.2, 358.0], [67.3, 359.0], [67.4, 359.0], [67.5, 360.0], [67.6, 361.0], [67.7, 363.0], [67.8, 364.0], [67.9, 366.0], [68.0, 367.0], [68.1, 367.0], [68.2, 370.0], [68.3, 370.0], [68.4, 371.0], [68.5, 372.0], [68.6, 373.0], [68.7, 374.0], [68.8, 375.0], [68.9, 376.0], [69.0, 377.0], [69.1, 378.0], [69.2, 379.0], [69.3, 381.0], [69.4, 381.0], [69.5, 382.0], [69.6, 383.0], [69.7, 385.0], [69.8, 386.0], [69.9, 388.0], [70.0, 391.0], [70.1, 393.0], [70.2, 395.0], [70.3, 396.0], [70.4, 397.0], [70.5, 398.0], [70.6, 399.0], [70.7, 400.0], [70.8, 401.0], [70.9, 404.0], [71.0, 404.0], [71.1, 406.0], [71.2, 408.0], [71.3, 410.0], [71.4, 411.0], [71.5, 413.0], [71.6, 414.0], [71.7, 416.0], [71.8, 417.0], [71.9, 418.0], [72.0, 419.0], [72.1, 419.0], [72.2, 420.0], [72.3, 421.0], [72.4, 422.0], [72.5, 423.0], [72.6, 426.0], [72.7, 428.0], [72.8, 429.0], [72.9, 430.0], [73.0, 432.0], [73.1, 434.0], [73.2, 435.0], [73.3, 436.0], [73.4, 437.0], [73.5, 438.0], [73.6, 440.0], [73.7, 442.0], [73.8, 443.0], [73.9, 444.0], [74.0, 445.0], [74.1, 448.0], [74.2, 449.0], [74.3, 450.0], [74.4, 453.0], [74.5, 454.0], [74.6, 455.0], [74.7, 457.0], [74.8, 458.0], [74.9, 460.0], [75.0, 463.0], [75.1, 464.0], [75.2, 466.0], [75.3, 466.0], [75.4, 467.0], [75.5, 469.0], [75.6, 471.0], [75.7, 472.0], [75.8, 474.0], [75.9, 475.0], [76.0, 479.0], [76.1, 479.0], [76.2, 481.0], [76.3, 482.0], [76.4, 484.0], [76.5, 486.0], [76.6, 487.0], [76.7, 488.0], [76.8, 491.0], [76.9, 492.0], [77.0, 494.0], [77.1, 497.0], [77.2, 498.0], [77.3, 500.0], [77.4, 501.0], [77.5, 503.0], [77.6, 505.0], [77.7, 507.0], [77.8, 509.0], [77.9, 510.0], [78.0, 511.0], [78.1, 513.0], [78.2, 516.0], [78.3, 517.0], [78.4, 518.0], [78.5, 520.0], [78.6, 521.0], [78.7, 524.0], [78.8, 527.0], [78.9, 529.0], [79.0, 531.0], [79.1, 534.0], [79.2, 535.0], [79.3, 537.0], [79.4, 539.0], [79.5, 540.0], [79.6, 543.0], [79.7, 544.0], [79.8, 547.0], [79.9, 548.0], [80.0, 549.0], [80.1, 551.0], [80.2, 553.0], [80.3, 554.0], [80.4, 557.0], [80.5, 558.0], [80.6, 561.0], [80.7, 562.0], [80.8, 563.0], [80.9, 563.0], [81.0, 565.0], [81.1, 565.0], [81.2, 568.0], [81.3, 569.0], [81.4, 571.0], [81.5, 575.0], [81.6, 576.0], [81.7, 578.0], [81.8, 579.0], [81.9, 581.0], [82.0, 582.0], [82.1, 583.0], [82.2, 585.0], [82.3, 587.0], [82.4, 587.0], [82.5, 589.0], [82.6, 590.0], [82.7, 592.0], [82.8, 594.0], [82.9, 596.0], [83.0, 599.0], [83.1, 600.0], [83.2, 602.0], [83.3, 603.0], [83.4, 606.0], [83.5, 607.0], [83.6, 609.0], [83.7, 610.0], [83.8, 612.0], [83.9, 613.0], [84.0, 615.0], [84.1, 617.0], [84.2, 619.0], [84.3, 620.0], [84.4, 627.0], [84.5, 628.0], [84.6, 631.0], [84.7, 634.0], [84.8, 639.0], [84.9, 641.0], [85.0, 644.0], [85.1, 646.0], [85.2, 648.0], [85.3, 649.0], [85.4, 650.0], [85.5, 653.0], [85.6, 657.0], [85.7, 661.0], [85.8, 663.0], [85.9, 666.0], [86.0, 668.0], [86.1, 669.0], [86.2, 671.0], [86.3, 673.0], [86.4, 675.0], [86.5, 676.0], [86.6, 678.0], [86.7, 680.0], [86.8, 681.0], [86.9, 683.0], [87.0, 686.0], [87.1, 688.0], [87.2, 689.0], [87.3, 690.0], [87.4, 692.0], [87.5, 696.0], [87.6, 699.0], [87.7, 701.0], [87.8, 703.0], [87.9, 706.0], [88.0, 708.0], [88.1, 711.0], [88.2, 715.0], [88.3, 716.0], [88.4, 718.0], [88.5, 721.0], [88.6, 726.0], [88.7, 729.0], [88.8, 730.0], [88.9, 734.0], [89.0, 739.0], [89.1, 743.0], [89.2, 748.0], [89.3, 751.0], [89.4, 754.0], [89.5, 755.0], [89.6, 759.0], [89.7, 761.0], [89.8, 763.0], [89.9, 767.0], [90.0, 770.0], [90.1, 773.0], [90.2, 775.0], [90.3, 780.0], [90.4, 785.0], [90.5, 791.0], [90.6, 793.0], [90.7, 800.0], [90.8, 805.0], [90.9, 806.0], [91.0, 809.0], [91.1, 810.0], [91.2, 813.0], [91.3, 816.0], [91.4, 825.0], [91.5, 827.0], [91.6, 834.0], [91.7, 840.0], [91.8, 846.0], [91.9, 849.0], [92.0, 853.0], [92.1, 859.0], [92.2, 862.0], [92.3, 868.0], [92.4, 872.0], [92.5, 875.0], [92.6, 881.0], [92.7, 885.0], [92.8, 891.0], [92.9, 897.0], [93.0, 900.0], [93.1, 903.0], [93.2, 910.0], [93.3, 919.0], [93.4, 923.0], [93.5, 929.0], [93.6, 934.0], [93.7, 941.0], [93.8, 946.0], [93.9, 951.0], [94.0, 962.0], [94.1, 971.0], [94.2, 974.0], [94.3, 983.0], [94.4, 988.0], [94.5, 990.0], [94.6, 995.0], [94.7, 1001.0], [94.8, 1007.0], [94.9, 1009.0], [95.0, 1016.0], [95.1, 1025.0], [95.2, 1030.0], [95.3, 1037.0], [95.4, 1043.0], [95.5, 1051.0], [95.6, 1054.0], [95.7, 1059.0], [95.8, 1071.0], [95.9, 1080.0], [96.0, 1084.0], [96.1, 1093.0], [96.2, 1100.0], [96.3, 1105.0], [96.4, 1117.0], [96.5, 1128.0], [96.6, 1138.0], [96.7, 1150.0], [96.8, 1160.0], [96.9, 1165.0], [97.0, 1183.0], [97.1, 1199.0], [97.2, 1218.0], [97.3, 1229.0], [97.4, 1247.0], [97.5, 1259.0], [97.6, 1274.0], [97.7, 1293.0], [97.8, 1310.0], [97.9, 1325.0], [98.0, 1336.0], [98.1, 1356.0], [98.2, 1395.0], [98.3, 1405.0], [98.4, 1428.0], [98.5, 1449.0], [98.6, 1455.0], [98.7, 1477.0], [98.8, 1503.0], [98.9, 1585.0], [99.0, 1617.0], [99.1, 1657.0], [99.2, 1701.0], [99.3, 1792.0], [99.4, 1898.0], [99.5, 1924.0], [99.6, 1975.0], [99.7, 2068.0], [99.8, 2116.0], [99.9, 2485.0], [100.0, 3801.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 2073.0, "series": [{"data": [[0.0, 2073.0], [600.0, 239.0], [700.0, 162.0], [800.0, 119.0], [900.0, 92.0], [1000.0, 78.0], [1100.0, 49.0], [1200.0, 35.0], [1300.0, 23.0], [1400.0, 30.0], [1500.0, 9.0], [100.0, 718.0], [1600.0, 12.0], [1700.0, 7.0], [1800.0, 5.0], [1900.0, 13.0], [2000.0, 6.0], [2100.0, 3.0], [2200.0, 3.0], [2400.0, 2.0], [3000.0, 1.0], [200.0, 518.0], [3200.0, 1.0], [3600.0, 1.0], [3800.0, 1.0], [300.0, 407.0], [400.0, 351.0], [500.0, 304.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3800.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 64.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 4071.0, "series": [{"data": [[0.0, 4071.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1127.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 64.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 7.8571428571428585, "minX": 1.60245936E12, "maxY": 10.0, "series": [{"data": [[1.60245942E12, 10.0], [1.60245954E12, 7.8571428571428585], [1.60245936E12, 9.980471928397069], [1.60245948E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60245954E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 313.90182996568853, "minX": 1.0, "maxY": 3801.0, "series": [{"data": [[8.0, 658.5], [4.0, 1183.0], [2.0, 3694.0], [1.0, 3023.0], [9.0, 937.0], [5.0, 758.0], [10.0, 313.90182996568853], [3.0, 1110.0], [6.0, 3801.0], [7.0, 1231.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.98688711516533, 317.27746104142886]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 179.53333333333333, "minX": 1.60245936E12, "maxY": 1665787.25, "series": [{"data": [[1.60245942E12, 1411080.4333333333], [1.60245954E12, 29924.233333333334], [1.60245936E12, 1144219.0], [1.60245948E12, 1665787.25]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60245942E12, 18227.15], [1.60245954E12, 179.53333333333333], [1.60245936E12, 10664.216666666667], [1.60245948E12, 16420.05]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60245954E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 278.29030754892796, "minX": 1.60245936E12, "maxY": 2039.3333333333335, "series": [{"data": [[1.60245942E12, 278.29030754892796], [1.60245954E12, 2039.3333333333335], [1.60245936E12, 353.24979658258746], [1.60245948E12, 319.04233654876714]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60245954E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 277.9296365330849, "minX": 1.60245936E12, "maxY": 2038.761904761905, "series": [{"data": [[1.60245942E12, 277.9296365330849], [1.60245954E12, 2038.761904761905], [1.60245936E12, 352.7176566314077], [1.60245948E12, 318.6382636655955]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60245954E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.60245936E12, "maxY": 0.0724165988608626, "series": [{"data": [[1.60245942E12, 0.009319664492078305], [1.60245954E12, 0.0], [1.60245936E12, 0.0724165988608626], [1.60245948E12, 0.009110396570203646]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60245954E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 30.0, "minX": 1.60245936E12, "maxY": 3801.0, "series": [{"data": [[1.60245942E12, 2116.0], [1.60245954E12, 3801.0], [1.60245936E12, 1917.0], [1.60245948E12, 2280.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60245942E12, 36.0], [1.60245954E12, 1122.0], [1.60245936E12, 34.0], [1.60245948E12, 33.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60245942E12, 36.25530020475388], [1.60245954E12, 1122.0], [1.60245936E12, 34.0], [1.60245948E12, 33.483300178050996]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60245942E12, 36.0], [1.60245954E12, 1122.0], [1.60245936E12, 34.0], [1.60245948E12, 33.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60245942E12, 32.0], [1.60245954E12, 1122.0], [1.60245936E12, 32.0], [1.60245948E12, 30.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60245942E12, 134.5], [1.60245954E12, 2092.0], [1.60245936E12, 249.0], [1.60245948E12, 199.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60245954E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 66.0, "minX": 1.0, "maxY": 2893.5, "series": [{"data": [[2.0, 2893.5], [4.0, 1854.5], [5.0, 1374.0], [8.0, 981.0], [10.0, 918.0], [11.0, 735.5], [12.0, 612.0], [13.0, 604.5], [14.0, 706.5], [15.0, 690.0], [16.0, 602.0], [17.0, 515.5], [18.0, 461.5], [20.0, 483.0], [21.0, 497.5], [22.0, 400.0], [23.0, 240.5], [24.0, 299.0], [25.0, 388.0], [26.0, 334.0], [27.0, 239.0], [28.0, 263.0], [29.0, 283.0], [30.0, 215.5], [33.0, 233.0], [32.0, 252.5], [34.0, 341.5], [35.0, 95.0], [36.0, 256.0], [38.0, 198.0], [39.0, 200.0], [41.0, 87.0], [40.0, 212.5], [42.0, 90.0], [43.0, 116.0], [45.0, 87.5], [44.0, 85.5], [47.0, 114.0], [46.0, 71.5], [48.0, 137.5], [49.0, 155.0], [51.0, 109.0], [50.0, 96.5], [53.0, 115.5], [55.0, 80.5], [57.0, 78.0], [56.0, 90.0], [58.0, 111.5], [60.0, 89.0], [66.0, 98.5], [67.0, 149.0], [64.0, 66.0], [69.0, 91.0], [70.0, 75.0], [68.0, 90.0], [73.0, 134.0], [72.0, 106.0], [76.0, 121.0], [82.0, 76.0], [85.0, 121.0], [87.0, 87.0], [97.0, 76.0], [1.0, 1575.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 97.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 66.0, "minX": 1.0, "maxY": 2893.0, "series": [{"data": [[2.0, 2893.0], [4.0, 1853.5], [5.0, 1373.0], [8.0, 979.5], [10.0, 916.0], [11.0, 735.0], [12.0, 610.5], [13.0, 604.5], [14.0, 706.5], [15.0, 690.0], [16.0, 600.0], [17.0, 515.5], [18.0, 461.0], [20.0, 483.0], [21.0, 496.5], [22.0, 400.0], [23.0, 240.5], [24.0, 298.5], [25.0, 388.0], [26.0, 333.5], [27.0, 238.0], [28.0, 262.0], [29.0, 282.5], [30.0, 215.0], [33.0, 233.0], [32.0, 252.0], [34.0, 341.5], [35.0, 95.0], [36.0, 255.5], [38.0, 197.0], [39.0, 200.0], [41.0, 87.0], [40.0, 212.5], [42.0, 90.0], [43.0, 116.0], [45.0, 87.5], [44.0, 85.0], [47.0, 114.0], [46.0, 71.5], [48.0, 136.5], [49.0, 155.0], [51.0, 109.0], [50.0, 96.5], [53.0, 115.0], [55.0, 80.5], [57.0, 78.0], [56.0, 89.5], [58.0, 111.5], [60.0, 89.0], [66.0, 98.5], [67.0, 149.0], [64.0, 66.0], [69.0, 90.5], [70.0, 75.0], [68.0, 90.0], [73.0, 134.0], [72.0, 106.0], [76.0, 121.0], [82.0, 76.0], [85.0, 121.0], [87.0, 87.0], [97.0, 76.0], [1.0, 1573.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 97.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.18333333333333332, "minX": 1.60245936E12, "maxY": 35.766666666666666, "series": [{"data": [[1.60245942E12, 35.766666666666666], [1.60245954E12, 0.18333333333333332], [1.60245936E12, 20.65], [1.60245948E12, 31.1]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60245954E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.35, "minX": 1.60245936E12, "maxY": 35.766666666666666, "series": [{"data": [[1.60245942E12, 35.766666666666666], [1.60245954E12, 0.35], [1.60245936E12, 20.483333333333334], [1.60245948E12, 31.1]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60245954E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.35, "minX": 1.60245936E12, "maxY": 35.766666666666666, "series": [{"data": [[1.60245942E12, 35.766666666666666], [1.60245954E12, 0.35], [1.60245936E12, 20.483333333333334], [1.60245948E12, 31.1]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60245954E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.35, "minX": 1.60245936E12, "maxY": 35.766666666666666, "series": [{"data": [[1.60245942E12, 35.766666666666666], [1.60245954E12, 0.35], [1.60245936E12, 20.483333333333334], [1.60245948E12, 31.1]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60245954E12, "title": "Total Transactions Per Second"}},
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

