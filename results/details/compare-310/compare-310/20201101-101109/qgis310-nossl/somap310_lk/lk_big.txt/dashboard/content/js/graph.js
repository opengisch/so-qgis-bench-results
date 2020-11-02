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
        data: {"result": {"minY": 30.0, "minX": 0.0, "maxY": 3194.0, "series": [{"data": [[0.0, 30.0], [0.1, 31.0], [0.2, 32.0], [0.3, 33.0], [0.4, 34.0], [0.5, 34.0], [0.6, 35.0], [0.7, 35.0], [0.8, 35.0], [0.9, 36.0], [1.0, 36.0], [1.1, 36.0], [1.2, 36.0], [1.3, 37.0], [1.4, 37.0], [1.5, 37.0], [1.6, 37.0], [1.7, 37.0], [1.8, 37.0], [1.9, 38.0], [2.0, 38.0], [2.1, 38.0], [2.2, 38.0], [2.3, 38.0], [2.4, 38.0], [2.5, 38.0], [2.6, 38.0], [2.7, 39.0], [2.8, 39.0], [2.9, 39.0], [3.0, 39.0], [3.1, 39.0], [3.2, 39.0], [3.3, 39.0], [3.4, 39.0], [3.5, 39.0], [3.6, 39.0], [3.7, 39.0], [3.8, 39.0], [3.9, 40.0], [4.0, 40.0], [4.1, 40.0], [4.2, 40.0], [4.3, 40.0], [4.4, 40.0], [4.5, 40.0], [4.6, 40.0], [4.7, 40.0], [4.8, 40.0], [4.9, 40.0], [5.0, 40.0], [5.1, 40.0], [5.2, 41.0], [5.3, 41.0], [5.4, 41.0], [5.5, 41.0], [5.6, 41.0], [5.7, 41.0], [5.8, 41.0], [5.9, 41.0], [6.0, 41.0], [6.1, 41.0], [6.2, 41.0], [6.3, 41.0], [6.4, 41.0], [6.5, 41.0], [6.6, 42.0], [6.7, 42.0], [6.8, 42.0], [6.9, 42.0], [7.0, 42.0], [7.1, 42.0], [7.2, 42.0], [7.3, 42.0], [7.4, 42.0], [7.5, 42.0], [7.6, 42.0], [7.7, 42.0], [7.8, 42.0], [7.9, 43.0], [8.0, 43.0], [8.1, 43.0], [8.2, 43.0], [8.3, 43.0], [8.4, 43.0], [8.5, 43.0], [8.6, 43.0], [8.7, 43.0], [8.8, 43.0], [8.9, 43.0], [9.0, 43.0], [9.1, 43.0], [9.2, 43.0], [9.3, 43.0], [9.4, 43.0], [9.5, 44.0], [9.6, 44.0], [9.7, 44.0], [9.8, 44.0], [9.9, 44.0], [10.0, 44.0], [10.1, 44.0], [10.2, 44.0], [10.3, 44.0], [10.4, 44.0], [10.5, 44.0], [10.6, 44.0], [10.7, 44.0], [10.8, 44.0], [10.9, 45.0], [11.0, 45.0], [11.1, 45.0], [11.2, 45.0], [11.3, 45.0], [11.4, 45.0], [11.5, 45.0], [11.6, 45.0], [11.7, 45.0], [11.8, 45.0], [11.9, 45.0], [12.0, 45.0], [12.1, 46.0], [12.2, 46.0], [12.3, 46.0], [12.4, 46.0], [12.5, 46.0], [12.6, 46.0], [12.7, 46.0], [12.8, 46.0], [12.9, 46.0], [13.0, 46.0], [13.1, 47.0], [13.2, 47.0], [13.3, 47.0], [13.4, 47.0], [13.5, 47.0], [13.6, 47.0], [13.7, 47.0], [13.8, 47.0], [13.9, 47.0], [14.0, 47.0], [14.1, 47.0], [14.2, 47.0], [14.3, 48.0], [14.4, 48.0], [14.5, 48.0], [14.6, 48.0], [14.7, 48.0], [14.8, 48.0], [14.9, 48.0], [15.0, 48.0], [15.1, 48.0], [15.2, 49.0], [15.3, 49.0], [15.4, 49.0], [15.5, 49.0], [15.6, 49.0], [15.7, 49.0], [15.8, 49.0], [15.9, 50.0], [16.0, 50.0], [16.1, 50.0], [16.2, 50.0], [16.3, 50.0], [16.4, 50.0], [16.5, 50.0], [16.6, 51.0], [16.7, 51.0], [16.8, 51.0], [16.9, 51.0], [17.0, 51.0], [17.1, 51.0], [17.2, 52.0], [17.3, 52.0], [17.4, 52.0], [17.5, 52.0], [17.6, 52.0], [17.7, 53.0], [17.8, 53.0], [17.9, 53.0], [18.0, 53.0], [18.1, 54.0], [18.2, 54.0], [18.3, 54.0], [18.4, 55.0], [18.5, 55.0], [18.6, 55.0], [18.7, 55.0], [18.8, 56.0], [18.9, 56.0], [19.0, 56.0], [19.1, 56.0], [19.2, 57.0], [19.3, 57.0], [19.4, 57.0], [19.5, 57.0], [19.6, 57.0], [19.7, 58.0], [19.8, 58.0], [19.9, 58.0], [20.0, 58.0], [20.1, 59.0], [20.2, 59.0], [20.3, 60.0], [20.4, 60.0], [20.5, 60.0], [20.6, 61.0], [20.7, 61.0], [20.8, 61.0], [20.9, 61.0], [21.0, 62.0], [21.1, 62.0], [21.2, 62.0], [21.3, 62.0], [21.4, 63.0], [21.5, 63.0], [21.6, 63.0], [21.7, 64.0], [21.8, 64.0], [21.9, 64.0], [22.0, 64.0], [22.1, 64.0], [22.2, 65.0], [22.3, 65.0], [22.4, 65.0], [22.5, 65.0], [22.6, 66.0], [22.7, 66.0], [22.8, 66.0], [22.9, 67.0], [23.0, 67.0], [23.1, 67.0], [23.2, 67.0], [23.3, 68.0], [23.4, 68.0], [23.5, 68.0], [23.6, 68.0], [23.7, 68.0], [23.8, 69.0], [23.9, 69.0], [24.0, 69.0], [24.1, 69.0], [24.2, 69.0], [24.3, 70.0], [24.4, 70.0], [24.5, 71.0], [24.6, 71.0], [24.7, 71.0], [24.8, 72.0], [24.9, 72.0], [25.0, 72.0], [25.1, 72.0], [25.2, 72.0], [25.3, 73.0], [25.4, 73.0], [25.5, 73.0], [25.6, 73.0], [25.7, 74.0], [25.8, 74.0], [25.9, 75.0], [26.0, 75.0], [26.1, 75.0], [26.2, 75.0], [26.3, 75.0], [26.4, 75.0], [26.5, 76.0], [26.6, 76.0], [26.7, 76.0], [26.8, 76.0], [26.9, 76.0], [27.0, 76.0], [27.1, 76.0], [27.2, 77.0], [27.3, 77.0], [27.4, 77.0], [27.5, 77.0], [27.6, 77.0], [27.7, 77.0], [27.8, 77.0], [27.9, 77.0], [28.0, 78.0], [28.1, 78.0], [28.2, 78.0], [28.3, 78.0], [28.4, 78.0], [28.5, 78.0], [28.6, 78.0], [28.7, 78.0], [28.8, 79.0], [28.9, 79.0], [29.0, 79.0], [29.1, 79.0], [29.2, 79.0], [29.3, 79.0], [29.4, 80.0], [29.5, 80.0], [29.6, 80.0], [29.7, 80.0], [29.8, 80.0], [29.9, 80.0], [30.0, 80.0], [30.1, 81.0], [30.2, 81.0], [30.3, 81.0], [30.4, 81.0], [30.5, 81.0], [30.6, 81.0], [30.7, 82.0], [30.8, 82.0], [30.9, 82.0], [31.0, 82.0], [31.1, 82.0], [31.2, 82.0], [31.3, 83.0], [31.4, 83.0], [31.5, 83.0], [31.6, 83.0], [31.7, 83.0], [31.8, 83.0], [31.9, 84.0], [32.0, 84.0], [32.1, 84.0], [32.2, 84.0], [32.3, 84.0], [32.4, 84.0], [32.5, 84.0], [32.6, 85.0], [32.7, 85.0], [32.8, 85.0], [32.9, 85.0], [33.0, 85.0], [33.1, 85.0], [33.2, 85.0], [33.3, 86.0], [33.4, 86.0], [33.5, 86.0], [33.6, 86.0], [33.7, 86.0], [33.8, 86.0], [33.9, 87.0], [34.0, 87.0], [34.1, 87.0], [34.2, 87.0], [34.3, 87.0], [34.4, 87.0], [34.5, 88.0], [34.6, 88.0], [34.7, 88.0], [34.8, 88.0], [34.9, 88.0], [35.0, 88.0], [35.1, 89.0], [35.2, 89.0], [35.3, 89.0], [35.4, 89.0], [35.5, 89.0], [35.6, 90.0], [35.7, 90.0], [35.8, 90.0], [35.9, 90.0], [36.0, 90.0], [36.1, 90.0], [36.2, 90.0], [36.3, 91.0], [36.4, 91.0], [36.5, 91.0], [36.6, 91.0], [36.7, 92.0], [36.8, 92.0], [36.9, 92.0], [37.0, 92.0], [37.1, 93.0], [37.2, 93.0], [37.3, 93.0], [37.4, 94.0], [37.5, 94.0], [37.6, 94.0], [37.7, 95.0], [37.8, 95.0], [37.9, 95.0], [38.0, 96.0], [38.1, 96.0], [38.2, 96.0], [38.3, 97.0], [38.4, 97.0], [38.5, 98.0], [38.6, 98.0], [38.7, 98.0], [38.8, 98.0], [38.9, 99.0], [39.0, 100.0], [39.1, 100.0], [39.2, 100.0], [39.3, 101.0], [39.4, 101.0], [39.5, 102.0], [39.6, 103.0], [39.7, 103.0], [39.8, 103.0], [39.9, 104.0], [40.0, 104.0], [40.1, 105.0], [40.2, 105.0], [40.3, 106.0], [40.4, 106.0], [40.5, 107.0], [40.6, 108.0], [40.7, 109.0], [40.8, 110.0], [40.9, 110.0], [41.0, 111.0], [41.1, 111.0], [41.2, 112.0], [41.3, 113.0], [41.4, 113.0], [41.5, 114.0], [41.6, 114.0], [41.7, 115.0], [41.8, 115.0], [41.9, 116.0], [42.0, 117.0], [42.1, 117.0], [42.2, 118.0], [42.3, 118.0], [42.4, 119.0], [42.5, 119.0], [42.6, 120.0], [42.7, 120.0], [42.8, 121.0], [42.9, 122.0], [43.0, 122.0], [43.1, 123.0], [43.2, 124.0], [43.3, 124.0], [43.4, 125.0], [43.5, 125.0], [43.6, 126.0], [43.7, 126.0], [43.8, 127.0], [43.9, 127.0], [44.0, 128.0], [44.1, 129.0], [44.2, 129.0], [44.3, 130.0], [44.4, 131.0], [44.5, 132.0], [44.6, 132.0], [44.7, 132.0], [44.8, 133.0], [44.9, 134.0], [45.0, 134.0], [45.1, 134.0], [45.2, 135.0], [45.3, 137.0], [45.4, 137.0], [45.5, 138.0], [45.6, 139.0], [45.7, 139.0], [45.8, 140.0], [45.9, 140.0], [46.0, 141.0], [46.1, 141.0], [46.2, 141.0], [46.3, 143.0], [46.4, 144.0], [46.5, 145.0], [46.6, 146.0], [46.7, 147.0], [46.8, 148.0], [46.9, 149.0], [47.0, 150.0], [47.1, 151.0], [47.2, 152.0], [47.3, 153.0], [47.4, 154.0], [47.5, 155.0], [47.6, 156.0], [47.7, 157.0], [47.8, 158.0], [47.9, 159.0], [48.0, 160.0], [48.1, 162.0], [48.2, 163.0], [48.3, 163.0], [48.4, 164.0], [48.5, 165.0], [48.6, 165.0], [48.7, 169.0], [48.8, 170.0], [48.9, 171.0], [49.0, 172.0], [49.1, 172.0], [49.2, 173.0], [49.3, 174.0], [49.4, 175.0], [49.5, 175.0], [49.6, 176.0], [49.7, 177.0], [49.8, 177.0], [49.9, 178.0], [50.0, 178.0], [50.1, 180.0], [50.2, 180.0], [50.3, 181.0], [50.4, 182.0], [50.5, 183.0], [50.6, 185.0], [50.7, 185.0], [50.8, 186.0], [50.9, 187.0], [51.0, 188.0], [51.1, 188.0], [51.2, 190.0], [51.3, 191.0], [51.4, 191.0], [51.5, 192.0], [51.6, 193.0], [51.7, 194.0], [51.8, 195.0], [51.9, 196.0], [52.0, 197.0], [52.1, 198.0], [52.2, 199.0], [52.3, 199.0], [52.4, 200.0], [52.5, 202.0], [52.6, 202.0], [52.7, 203.0], [52.8, 204.0], [52.9, 204.0], [53.0, 205.0], [53.1, 207.0], [53.2, 207.0], [53.3, 208.0], [53.4, 210.0], [53.5, 211.0], [53.6, 212.0], [53.7, 214.0], [53.8, 215.0], [53.9, 215.0], [54.0, 216.0], [54.1, 217.0], [54.2, 217.0], [54.3, 218.0], [54.4, 218.0], [54.5, 219.0], [54.6, 219.0], [54.7, 220.0], [54.8, 221.0], [54.9, 223.0], [55.0, 224.0], [55.1, 225.0], [55.2, 226.0], [55.3, 227.0], [55.4, 228.0], [55.5, 230.0], [55.6, 231.0], [55.7, 232.0], [55.8, 233.0], [55.9, 234.0], [56.0, 235.0], [56.1, 236.0], [56.2, 237.0], [56.3, 238.0], [56.4, 239.0], [56.5, 239.0], [56.6, 240.0], [56.7, 240.0], [56.8, 241.0], [56.9, 242.0], [57.0, 243.0], [57.1, 244.0], [57.2, 245.0], [57.3, 246.0], [57.4, 246.0], [57.5, 247.0], [57.6, 247.0], [57.7, 248.0], [57.8, 250.0], [57.9, 250.0], [58.0, 251.0], [58.1, 252.0], [58.2, 253.0], [58.3, 254.0], [58.4, 254.0], [58.5, 255.0], [58.6, 256.0], [58.7, 257.0], [58.8, 258.0], [58.9, 258.0], [59.0, 260.0], [59.1, 260.0], [59.2, 263.0], [59.3, 264.0], [59.4, 266.0], [59.5, 267.0], [59.6, 269.0], [59.7, 269.0], [59.8, 270.0], [59.9, 270.0], [60.0, 271.0], [60.1, 273.0], [60.2, 274.0], [60.3, 274.0], [60.4, 275.0], [60.5, 277.0], [60.6, 278.0], [60.7, 279.0], [60.8, 279.0], [60.9, 280.0], [61.0, 280.0], [61.1, 283.0], [61.2, 284.0], [61.3, 285.0], [61.4, 287.0], [61.5, 288.0], [61.6, 288.0], [61.7, 290.0], [61.8, 290.0], [61.9, 292.0], [62.0, 293.0], [62.1, 294.0], [62.2, 294.0], [62.3, 295.0], [62.4, 297.0], [62.5, 299.0], [62.6, 300.0], [62.7, 300.0], [62.8, 301.0], [62.9, 303.0], [63.0, 304.0], [63.1, 305.0], [63.2, 306.0], [63.3, 307.0], [63.4, 308.0], [63.5, 309.0], [63.6, 311.0], [63.7, 312.0], [63.8, 313.0], [63.9, 314.0], [64.0, 317.0], [64.1, 317.0], [64.2, 318.0], [64.3, 319.0], [64.4, 321.0], [64.5, 321.0], [64.6, 323.0], [64.7, 325.0], [64.8, 326.0], [64.9, 328.0], [65.0, 330.0], [65.1, 332.0], [65.2, 334.0], [65.3, 336.0], [65.4, 337.0], [65.5, 338.0], [65.6, 338.0], [65.7, 340.0], [65.8, 340.0], [65.9, 341.0], [66.0, 342.0], [66.1, 344.0], [66.2, 346.0], [66.3, 347.0], [66.4, 349.0], [66.5, 349.0], [66.6, 350.0], [66.7, 353.0], [66.8, 353.0], [66.9, 356.0], [67.0, 357.0], [67.1, 358.0], [67.2, 360.0], [67.3, 360.0], [67.4, 363.0], [67.5, 364.0], [67.6, 367.0], [67.7, 369.0], [67.8, 370.0], [67.9, 371.0], [68.0, 372.0], [68.1, 374.0], [68.2, 375.0], [68.3, 377.0], [68.4, 378.0], [68.5, 379.0], [68.6, 380.0], [68.7, 381.0], [68.8, 382.0], [68.9, 383.0], [69.0, 384.0], [69.1, 386.0], [69.2, 388.0], [69.3, 390.0], [69.4, 391.0], [69.5, 392.0], [69.6, 393.0], [69.7, 394.0], [69.8, 395.0], [69.9, 397.0], [70.0, 399.0], [70.1, 400.0], [70.2, 401.0], [70.3, 402.0], [70.4, 403.0], [70.5, 404.0], [70.6, 405.0], [70.7, 407.0], [70.8, 408.0], [70.9, 409.0], [71.0, 411.0], [71.1, 412.0], [71.2, 413.0], [71.3, 415.0], [71.4, 416.0], [71.5, 417.0], [71.6, 418.0], [71.7, 420.0], [71.8, 420.0], [71.9, 423.0], [72.0, 425.0], [72.1, 427.0], [72.2, 428.0], [72.3, 430.0], [72.4, 431.0], [72.5, 433.0], [72.6, 434.0], [72.7, 435.0], [72.8, 436.0], [72.9, 437.0], [73.0, 438.0], [73.1, 439.0], [73.2, 440.0], [73.3, 442.0], [73.4, 443.0], [73.5, 444.0], [73.6, 446.0], [73.7, 449.0], [73.8, 450.0], [73.9, 451.0], [74.0, 452.0], [74.1, 454.0], [74.2, 454.0], [74.3, 455.0], [74.4, 456.0], [74.5, 458.0], [74.6, 459.0], [74.7, 460.0], [74.8, 462.0], [74.9, 464.0], [75.0, 466.0], [75.1, 467.0], [75.2, 469.0], [75.3, 471.0], [75.4, 472.0], [75.5, 472.0], [75.6, 473.0], [75.7, 474.0], [75.8, 475.0], [75.9, 476.0], [76.0, 477.0], [76.1, 479.0], [76.2, 480.0], [76.3, 481.0], [76.4, 484.0], [76.5, 484.0], [76.6, 486.0], [76.7, 488.0], [76.8, 490.0], [76.9, 492.0], [77.0, 494.0], [77.1, 496.0], [77.2, 496.0], [77.3, 497.0], [77.4, 498.0], [77.5, 499.0], [77.6, 501.0], [77.7, 503.0], [77.8, 504.0], [77.9, 507.0], [78.0, 508.0], [78.1, 509.0], [78.2, 510.0], [78.3, 512.0], [78.4, 514.0], [78.5, 515.0], [78.6, 516.0], [78.7, 517.0], [78.8, 519.0], [78.9, 521.0], [79.0, 525.0], [79.1, 527.0], [79.2, 529.0], [79.3, 531.0], [79.4, 534.0], [79.5, 535.0], [79.6, 536.0], [79.7, 538.0], [79.8, 540.0], [79.9, 541.0], [80.0, 542.0], [80.1, 544.0], [80.2, 546.0], [80.3, 549.0], [80.4, 550.0], [80.5, 552.0], [80.6, 554.0], [80.7, 556.0], [80.8, 558.0], [80.9, 559.0], [81.0, 561.0], [81.1, 563.0], [81.2, 563.0], [81.3, 565.0], [81.4, 569.0], [81.5, 571.0], [81.6, 573.0], [81.7, 576.0], [81.8, 578.0], [81.9, 580.0], [82.0, 583.0], [82.1, 587.0], [82.2, 589.0], [82.3, 591.0], [82.4, 592.0], [82.5, 594.0], [82.6, 596.0], [82.7, 599.0], [82.8, 599.0], [82.9, 601.0], [83.0, 603.0], [83.1, 604.0], [83.2, 606.0], [83.3, 608.0], [83.4, 610.0], [83.5, 612.0], [83.6, 615.0], [83.7, 617.0], [83.8, 620.0], [83.9, 622.0], [84.0, 624.0], [84.1, 626.0], [84.2, 626.0], [84.3, 627.0], [84.4, 630.0], [84.5, 632.0], [84.6, 632.0], [84.7, 634.0], [84.8, 638.0], [84.9, 639.0], [85.0, 641.0], [85.1, 642.0], [85.2, 644.0], [85.3, 651.0], [85.4, 654.0], [85.5, 659.0], [85.6, 661.0], [85.7, 663.0], [85.8, 666.0], [85.9, 669.0], [86.0, 673.0], [86.1, 676.0], [86.2, 681.0], [86.3, 683.0], [86.4, 684.0], [86.5, 686.0], [86.6, 689.0], [86.7, 694.0], [86.8, 695.0], [86.9, 697.0], [87.0, 703.0], [87.1, 708.0], [87.2, 711.0], [87.3, 713.0], [87.4, 716.0], [87.5, 719.0], [87.6, 722.0], [87.7, 724.0], [87.8, 726.0], [87.9, 729.0], [88.0, 730.0], [88.1, 734.0], [88.2, 735.0], [88.3, 739.0], [88.4, 741.0], [88.5, 743.0], [88.6, 747.0], [88.7, 750.0], [88.8, 751.0], [88.9, 756.0], [89.0, 759.0], [89.1, 761.0], [89.2, 764.0], [89.3, 769.0], [89.4, 771.0], [89.5, 775.0], [89.6, 778.0], [89.7, 782.0], [89.8, 788.0], [89.9, 792.0], [90.0, 798.0], [90.1, 802.0], [90.2, 805.0], [90.3, 807.0], [90.4, 810.0], [90.5, 817.0], [90.6, 817.0], [90.7, 818.0], [90.8, 821.0], [90.9, 824.0], [91.0, 830.0], [91.1, 832.0], [91.2, 836.0], [91.3, 838.0], [91.4, 845.0], [91.5, 850.0], [91.6, 854.0], [91.7, 857.0], [91.8, 860.0], [91.9, 864.0], [92.0, 871.0], [92.1, 878.0], [92.2, 882.0], [92.3, 886.0], [92.4, 887.0], [92.5, 894.0], [92.6, 901.0], [92.7, 906.0], [92.8, 911.0], [92.9, 918.0], [93.0, 925.0], [93.1, 934.0], [93.2, 940.0], [93.3, 947.0], [93.4, 953.0], [93.5, 956.0], [93.6, 963.0], [93.7, 969.0], [93.8, 971.0], [93.9, 982.0], [94.0, 988.0], [94.1, 990.0], [94.2, 996.0], [94.3, 1003.0], [94.4, 1019.0], [94.5, 1030.0], [94.6, 1036.0], [94.7, 1041.0], [94.8, 1048.0], [94.9, 1054.0], [95.0, 1062.0], [95.1, 1068.0], [95.2, 1080.0], [95.3, 1084.0], [95.4, 1091.0], [95.5, 1097.0], [95.6, 1101.0], [95.7, 1111.0], [95.8, 1117.0], [95.9, 1126.0], [96.0, 1130.0], [96.1, 1138.0], [96.2, 1151.0], [96.3, 1161.0], [96.4, 1171.0], [96.5, 1192.0], [96.6, 1207.0], [96.7, 1218.0], [96.8, 1244.0], [96.9, 1256.0], [97.0, 1274.0], [97.1, 1288.0], [97.2, 1300.0], [97.3, 1318.0], [97.4, 1342.0], [97.5, 1359.0], [97.6, 1369.0], [97.7, 1390.0], [97.8, 1414.0], [97.9, 1431.0], [98.0, 1447.0], [98.1, 1485.0], [98.2, 1494.0], [98.3, 1517.0], [98.4, 1549.0], [98.5, 1585.0], [98.6, 1613.0], [98.7, 1651.0], [98.8, 1678.0], [98.9, 1756.0], [99.0, 1802.0], [99.1, 1838.0], [99.2, 1883.0], [99.3, 1931.0], [99.4, 2009.0], [99.5, 2072.0], [99.6, 2118.0], [99.7, 2262.0], [99.8, 2429.0], [99.9, 2610.0], [100.0, 3194.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 2.0, "minX": 0.0, "maxY": 2050.0, "series": [{"data": [[0.0, 2050.0], [600.0, 218.0], [700.0, 162.0], [800.0, 133.0], [900.0, 89.0], [1000.0, 70.0], [1100.0, 50.0], [1200.0, 35.0], [1300.0, 32.0], [1400.0, 24.0], [1500.0, 16.0], [100.0, 705.0], [1600.0, 14.0], [1700.0, 9.0], [1800.0, 12.0], [1900.0, 9.0], [2000.0, 9.0], [2100.0, 6.0], [2200.0, 4.0], [2300.0, 2.0], [2400.0, 3.0], [2500.0, 2.0], [2600.0, 2.0], [3000.0, 2.0], [3100.0, 2.0], [200.0, 539.0], [300.0, 391.0], [400.0, 395.0], [500.0, 277.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3100.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 92.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 4082.0, "series": [{"data": [[0.0, 4082.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1088.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 92.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.921311475409835, "minX": 1.60422918E12, "maxY": 10.0, "series": [{"data": [[1.60422924E12, 10.0], [1.60422936E12, 9.959605026929982], [1.60422918E12, 9.921311475409835], [1.6042293E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60422936E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 322.5876072449947, "minX": 1.0, "maxY": 3194.0, "series": [{"data": [[4.0, 1321.0], [8.0, 1371.0], [2.0, 3148.0], [1.0, 3194.0], [9.0, 512.25], [5.0, 1062.0], [10.0, 322.5876072449947], [6.0, 990.0], [3.0, 2669.0], [7.0, 1327.5]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.98688711516533, 325.9686431014816]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 2739.4333333333334, "minX": 1.60422918E12, "maxY": 1632184.1333333333, "series": [{"data": [[1.60422924E12, 1632184.1333333333], [1.60422936E12, 1165834.25], [1.60422918E12, 124844.53333333334], [1.6042293E12, 1328356.2666666666]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60422924E12, 13076.2], [1.60422936E12, 9854.583333333334], [1.60422918E12, 2739.4333333333334], [1.6042293E12, 19820.733333333334]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60422936E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 257.2053150450065, "minX": 1.60422918E12, "maxY": 393.236423841059, "series": [{"data": [[1.60422924E12, 393.236423841059], [1.60422936E12, 384.84739676840155], [1.60422918E12, 303.8688524590162], [1.6042293E12, 257.2053150450065]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60422936E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 256.8868409772826, "minX": 1.60422918E12, "maxY": 392.64437086092744, "series": [{"data": [[1.60422924E12, 392.64437086092744], [1.60422936E12, 384.3527827648115], [1.60422918E12, 303.5311475409835], [1.6042293E12, 256.8868409772826]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60422936E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.008572653236176614, "minX": 1.60422918E12, "maxY": 0.3245901639344268, "series": [{"data": [[1.60422924E12, 0.008609271523178797], [1.60422936E12, 0.01436265709156195], [1.60422918E12, 0.3245901639344268], [1.6042293E12, 0.008572653236176614]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60422936E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 30.0, "minX": 1.60422918E12, "maxY": 3194.0, "series": [{"data": [[1.60422924E12, 2570.0], [1.60422936E12, 3194.0], [1.60422918E12, 1290.0], [1.6042293E12, 2131.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60422924E12, 37.0], [1.60422936E12, 36.0], [1.60422918E12, 35.753999927043914], [1.6042293E12, 35.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60422924E12, 37.0], [1.60422936E12, 36.0], [1.60422918E12, 36.0], [1.6042293E12, 35.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60422924E12, 37.0], [1.60422936E12, 36.0], [1.60422918E12, 35.906999963521955], [1.6042293E12, 35.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60422924E12, 31.0], [1.60422936E12, 32.0], [1.60422918E12, 33.0], [1.6042293E12, 30.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60422924E12, 259.5], [1.60422936E12, 228.0], [1.60422918E12, 106.0], [1.6042293E12, 134.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60422936E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 47.5, "minX": 1.0, "maxY": 3171.0, "series": [{"data": [[3.0, 2669.0], [4.0, 2026.5], [5.0, 1369.0], [6.0, 1122.0], [7.0, 1342.0], [8.0, 788.5], [9.0, 730.0], [10.0, 981.0], [11.0, 579.5], [12.0, 716.5], [13.0, 505.0], [14.0, 649.0], [15.0, 553.5], [16.0, 556.0], [17.0, 544.0], [18.0, 518.5], [19.0, 448.0], [20.0, 416.0], [21.0, 464.0], [22.0, 434.5], [23.0, 451.0], [24.0, 258.0], [25.0, 196.0], [26.0, 320.5], [27.0, 279.5], [28.0, 283.5], [29.0, 231.0], [30.0, 148.0], [31.0, 161.5], [32.0, 247.0], [33.0, 248.0], [35.0, 215.0], [34.0, 201.5], [36.0, 80.5], [39.0, 179.0], [38.0, 123.5], [40.0, 193.0], [43.0, 136.5], [42.0, 145.5], [45.0, 104.0], [44.0, 115.0], [47.0, 154.0], [46.0, 60.0], [48.0, 172.5], [50.0, 92.0], [51.0, 141.0], [53.0, 96.0], [52.0, 104.0], [54.0, 47.5], [55.0, 81.0], [57.0, 85.0], [58.0, 118.5], [60.0, 97.0], [63.0, 84.0], [70.0, 126.0], [69.0, 80.0], [73.0, 81.0], [72.0, 134.5], [79.0, 116.5], [84.0, 81.0], [95.0, 93.0], [1.0, 3171.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 95.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 47.5, "minX": 1.0, "maxY": 3171.0, "series": [{"data": [[3.0, 2669.0], [4.0, 2026.5], [5.0, 1368.0], [6.0, 1122.0], [7.0, 1342.0], [8.0, 787.5], [9.0, 730.0], [10.0, 976.5], [11.0, 579.5], [12.0, 715.0], [13.0, 503.0], [14.0, 648.0], [15.0, 553.5], [16.0, 555.5], [17.0, 543.0], [18.0, 517.5], [19.0, 445.0], [20.0, 415.5], [21.0, 463.0], [22.0, 434.0], [23.0, 450.0], [24.0, 256.5], [25.0, 195.5], [26.0, 319.5], [27.0, 279.5], [28.0, 282.5], [29.0, 231.0], [30.0, 148.0], [31.0, 161.5], [32.0, 246.0], [33.0, 248.0], [35.0, 214.0], [34.0, 200.5], [36.0, 80.5], [39.0, 179.0], [38.0, 123.5], [40.0, 193.0], [43.0, 136.5], [42.0, 145.5], [45.0, 104.0], [44.0, 115.0], [47.0, 153.5], [46.0, 60.0], [48.0, 172.0], [50.0, 92.0], [51.0, 141.0], [53.0, 95.5], [52.0, 103.5], [54.0, 47.5], [55.0, 81.0], [57.0, 85.0], [58.0, 118.5], [60.0, 97.0], [63.0, 84.0], [70.0, 125.5], [69.0, 80.0], [73.0, 81.0], [72.0, 134.5], [79.0, 116.0], [84.0, 81.0], [95.0, 93.0], [1.0, 3171.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 95.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 5.25, "minX": 1.60422918E12, "maxY": 38.88333333333333, "series": [{"data": [[1.60422924E12, 25.166666666666668], [1.60422936E12, 18.4], [1.60422918E12, 5.25], [1.6042293E12, 38.88333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60422936E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 5.083333333333333, "minX": 1.60422918E12, "maxY": 38.88333333333333, "series": [{"data": [[1.60422924E12, 25.166666666666668], [1.60422936E12, 18.566666666666666], [1.60422918E12, 5.083333333333333], [1.6042293E12, 38.88333333333333]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60422936E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 5.083333333333333, "minX": 1.60422918E12, "maxY": 38.88333333333333, "series": [{"data": [[1.60422924E12, 25.166666666666668], [1.60422936E12, 18.566666666666666], [1.60422918E12, 5.083333333333333], [1.6042293E12, 38.88333333333333]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60422936E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 5.083333333333333, "minX": 1.60422918E12, "maxY": 38.88333333333333, "series": [{"data": [[1.60422924E12, 25.166666666666668], [1.60422936E12, 18.566666666666666], [1.60422918E12, 5.083333333333333], [1.6042293E12, 38.88333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60422936E12, "title": "Total Transactions Per Second"}},
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

