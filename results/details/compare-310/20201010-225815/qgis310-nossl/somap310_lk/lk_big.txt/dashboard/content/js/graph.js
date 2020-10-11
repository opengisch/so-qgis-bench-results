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
        data: {"result": {"minY": 30.0, "minX": 0.0, "maxY": 3242.0, "series": [{"data": [[0.0, 30.0], [0.1, 32.0], [0.2, 32.0], [0.3, 33.0], [0.4, 34.0], [0.5, 34.0], [0.6, 35.0], [0.7, 35.0], [0.8, 35.0], [0.9, 35.0], [1.0, 36.0], [1.1, 36.0], [1.2, 36.0], [1.3, 36.0], [1.4, 36.0], [1.5, 36.0], [1.6, 37.0], [1.7, 37.0], [1.8, 37.0], [1.9, 37.0], [2.0, 37.0], [2.1, 37.0], [2.2, 37.0], [2.3, 38.0], [2.4, 38.0], [2.5, 38.0], [2.6, 38.0], [2.7, 38.0], [2.8, 38.0], [2.9, 38.0], [3.0, 38.0], [3.1, 38.0], [3.2, 38.0], [3.3, 39.0], [3.4, 39.0], [3.5, 39.0], [3.6, 39.0], [3.7, 39.0], [3.8, 39.0], [3.9, 39.0], [4.0, 39.0], [4.1, 39.0], [4.2, 39.0], [4.3, 39.0], [4.4, 39.0], [4.5, 39.0], [4.6, 40.0], [4.7, 40.0], [4.8, 40.0], [4.9, 40.0], [5.0, 40.0], [5.1, 40.0], [5.2, 40.0], [5.3, 40.0], [5.4, 40.0], [5.5, 40.0], [5.6, 40.0], [5.7, 40.0], [5.8, 40.0], [5.9, 41.0], [6.0, 41.0], [6.1, 41.0], [6.2, 41.0], [6.3, 41.0], [6.4, 41.0], [6.5, 41.0], [6.6, 41.0], [6.7, 41.0], [6.8, 41.0], [6.9, 41.0], [7.0, 41.0], [7.1, 41.0], [7.2, 41.0], [7.3, 41.0], [7.4, 41.0], [7.5, 41.0], [7.6, 41.0], [7.7, 42.0], [7.8, 42.0], [7.9, 42.0], [8.0, 42.0], [8.1, 42.0], [8.2, 42.0], [8.3, 42.0], [8.4, 42.0], [8.5, 42.0], [8.6, 42.0], [8.7, 42.0], [8.8, 42.0], [8.9, 42.0], [9.0, 42.0], [9.1, 42.0], [9.2, 42.0], [9.3, 43.0], [9.4, 43.0], [9.5, 43.0], [9.6, 43.0], [9.7, 43.0], [9.8, 43.0], [9.9, 43.0], [10.0, 43.0], [10.1, 43.0], [10.2, 43.0], [10.3, 43.0], [10.4, 43.0], [10.5, 44.0], [10.6, 44.0], [10.7, 44.0], [10.8, 44.0], [10.9, 44.0], [11.0, 44.0], [11.1, 44.0], [11.2, 44.0], [11.3, 44.0], [11.4, 44.0], [11.5, 44.0], [11.6, 44.0], [11.7, 45.0], [11.8, 45.0], [11.9, 45.0], [12.0, 45.0], [12.1, 45.0], [12.2, 45.0], [12.3, 45.0], [12.4, 45.0], [12.5, 45.0], [12.6, 45.0], [12.7, 46.0], [12.8, 46.0], [12.9, 46.0], [13.0, 46.0], [13.1, 46.0], [13.2, 46.0], [13.3, 46.0], [13.4, 46.0], [13.5, 46.0], [13.6, 46.0], [13.7, 47.0], [13.8, 47.0], [13.9, 47.0], [14.0, 47.0], [14.1, 47.0], [14.2, 47.0], [14.3, 47.0], [14.4, 48.0], [14.5, 48.0], [14.6, 48.0], [14.7, 48.0], [14.8, 48.0], [14.9, 48.0], [15.0, 48.0], [15.1, 49.0], [15.2, 49.0], [15.3, 49.0], [15.4, 49.0], [15.5, 49.0], [15.6, 50.0], [15.7, 50.0], [15.8, 50.0], [15.9, 50.0], [16.0, 50.0], [16.1, 51.0], [16.2, 51.0], [16.3, 51.0], [16.4, 52.0], [16.5, 52.0], [16.6, 52.0], [16.7, 52.0], [16.8, 53.0], [16.9, 53.0], [17.0, 53.0], [17.1, 54.0], [17.2, 54.0], [17.3, 54.0], [17.4, 54.0], [17.5, 55.0], [17.6, 56.0], [17.7, 56.0], [17.8, 56.0], [17.9, 56.0], [18.0, 57.0], [18.1, 57.0], [18.2, 57.0], [18.3, 58.0], [18.4, 58.0], [18.5, 59.0], [18.6, 59.0], [18.7, 59.0], [18.8, 59.0], [18.9, 60.0], [19.0, 60.0], [19.1, 61.0], [19.2, 61.0], [19.3, 61.0], [19.4, 61.0], [19.5, 62.0], [19.6, 62.0], [19.7, 62.0], [19.8, 62.0], [19.9, 62.0], [20.0, 63.0], [20.1, 63.0], [20.2, 63.0], [20.3, 63.0], [20.4, 64.0], [20.5, 64.0], [20.6, 64.0], [20.7, 64.0], [20.8, 64.0], [20.9, 64.0], [21.0, 65.0], [21.1, 65.0], [21.2, 65.0], [21.3, 65.0], [21.4, 66.0], [21.5, 66.0], [21.6, 66.0], [21.7, 66.0], [21.8, 66.0], [21.9, 66.0], [22.0, 67.0], [22.1, 67.0], [22.2, 67.0], [22.3, 67.0], [22.4, 67.0], [22.5, 67.0], [22.6, 68.0], [22.7, 68.0], [22.8, 68.0], [22.9, 68.0], [23.0, 68.0], [23.1, 68.0], [23.2, 69.0], [23.3, 69.0], [23.4, 69.0], [23.5, 69.0], [23.6, 69.0], [23.7, 69.0], [23.8, 69.0], [23.9, 70.0], [24.0, 70.0], [24.1, 70.0], [24.2, 70.0], [24.3, 70.0], [24.4, 70.0], [24.5, 71.0], [24.6, 71.0], [24.7, 71.0], [24.8, 71.0], [24.9, 71.0], [25.0, 71.0], [25.1, 71.0], [25.2, 72.0], [25.3, 72.0], [25.4, 72.0], [25.5, 72.0], [25.6, 72.0], [25.7, 72.0], [25.8, 72.0], [25.9, 73.0], [26.0, 73.0], [26.1, 73.0], [26.2, 73.0], [26.3, 73.0], [26.4, 73.0], [26.5, 73.0], [26.6, 73.0], [26.7, 73.0], [26.8, 74.0], [26.9, 74.0], [27.0, 74.0], [27.1, 74.0], [27.2, 74.0], [27.3, 74.0], [27.4, 74.0], [27.5, 74.0], [27.6, 75.0], [27.7, 75.0], [27.8, 75.0], [27.9, 75.0], [28.0, 75.0], [28.1, 75.0], [28.2, 75.0], [28.3, 75.0], [28.4, 75.0], [28.5, 76.0], [28.6, 76.0], [28.7, 76.0], [28.8, 76.0], [28.9, 76.0], [29.0, 76.0], [29.1, 77.0], [29.2, 77.0], [29.3, 77.0], [29.4, 77.0], [29.5, 77.0], [29.6, 77.0], [29.7, 77.0], [29.8, 77.0], [29.9, 77.0], [30.0, 77.0], [30.1, 77.0], [30.2, 78.0], [30.3, 78.0], [30.4, 78.0], [30.5, 78.0], [30.6, 78.0], [30.7, 78.0], [30.8, 78.0], [30.9, 78.0], [31.0, 78.0], [31.1, 78.0], [31.2, 78.0], [31.3, 79.0], [31.4, 79.0], [31.5, 79.0], [31.6, 79.0], [31.7, 79.0], [31.8, 79.0], [31.9, 79.0], [32.0, 79.0], [32.1, 79.0], [32.2, 80.0], [32.3, 80.0], [32.4, 80.0], [32.5, 80.0], [32.6, 80.0], [32.7, 80.0], [32.8, 80.0], [32.9, 80.0], [33.0, 80.0], [33.1, 81.0], [33.2, 81.0], [33.3, 81.0], [33.4, 81.0], [33.5, 81.0], [33.6, 81.0], [33.7, 81.0], [33.8, 81.0], [33.9, 81.0], [34.0, 81.0], [34.1, 81.0], [34.2, 82.0], [34.3, 82.0], [34.4, 82.0], [34.5, 82.0], [34.6, 82.0], [34.7, 82.0], [34.8, 82.0], [34.9, 82.0], [35.0, 82.0], [35.1, 82.0], [35.2, 83.0], [35.3, 83.0], [35.4, 83.0], [35.5, 83.0], [35.6, 83.0], [35.7, 83.0], [35.8, 83.0], [35.9, 84.0], [36.0, 84.0], [36.1, 84.0], [36.2, 84.0], [36.3, 84.0], [36.4, 85.0], [36.5, 85.0], [36.6, 85.0], [36.7, 85.0], [36.8, 85.0], [36.9, 85.0], [37.0, 86.0], [37.1, 86.0], [37.2, 86.0], [37.3, 86.0], [37.4, 86.0], [37.5, 87.0], [37.6, 87.0], [37.7, 87.0], [37.8, 87.0], [37.9, 88.0], [38.0, 88.0], [38.1, 88.0], [38.2, 88.0], [38.3, 89.0], [38.4, 89.0], [38.5, 89.0], [38.6, 89.0], [38.7, 90.0], [38.8, 90.0], [38.9, 90.0], [39.0, 91.0], [39.1, 91.0], [39.2, 91.0], [39.3, 92.0], [39.4, 93.0], [39.5, 93.0], [39.6, 93.0], [39.7, 94.0], [39.8, 94.0], [39.9, 94.0], [40.0, 95.0], [40.1, 95.0], [40.2, 96.0], [40.3, 96.0], [40.4, 96.0], [40.5, 97.0], [40.6, 98.0], [40.7, 99.0], [40.8, 99.0], [40.9, 100.0], [41.0, 101.0], [41.1, 101.0], [41.2, 102.0], [41.3, 103.0], [41.4, 103.0], [41.5, 104.0], [41.6, 104.0], [41.7, 105.0], [41.8, 106.0], [41.9, 106.0], [42.0, 108.0], [42.1, 108.0], [42.2, 109.0], [42.3, 109.0], [42.4, 110.0], [42.5, 111.0], [42.6, 112.0], [42.7, 112.0], [42.8, 113.0], [42.9, 113.0], [43.0, 113.0], [43.1, 114.0], [43.2, 115.0], [43.3, 115.0], [43.4, 116.0], [43.5, 116.0], [43.6, 118.0], [43.7, 118.0], [43.8, 118.0], [43.9, 119.0], [44.0, 120.0], [44.1, 120.0], [44.2, 121.0], [44.3, 122.0], [44.4, 122.0], [44.5, 123.0], [44.6, 124.0], [44.7, 124.0], [44.8, 124.0], [44.9, 126.0], [45.0, 126.0], [45.1, 127.0], [45.2, 127.0], [45.3, 128.0], [45.4, 128.0], [45.5, 130.0], [45.6, 130.0], [45.7, 130.0], [45.8, 131.0], [45.9, 132.0], [46.0, 132.0], [46.1, 133.0], [46.2, 133.0], [46.3, 134.0], [46.4, 134.0], [46.5, 135.0], [46.6, 136.0], [46.7, 137.0], [46.8, 138.0], [46.9, 139.0], [47.0, 140.0], [47.1, 141.0], [47.2, 141.0], [47.3, 141.0], [47.4, 142.0], [47.5, 142.0], [47.6, 143.0], [47.7, 143.0], [47.8, 144.0], [47.9, 145.0], [48.0, 146.0], [48.1, 147.0], [48.2, 147.0], [48.3, 148.0], [48.4, 149.0], [48.5, 150.0], [48.6, 151.0], [48.7, 153.0], [48.8, 153.0], [48.9, 155.0], [49.0, 156.0], [49.1, 157.0], [49.2, 158.0], [49.3, 159.0], [49.4, 160.0], [49.5, 161.0], [49.6, 164.0], [49.7, 165.0], [49.8, 166.0], [49.9, 167.0], [50.0, 169.0], [50.1, 170.0], [50.2, 170.0], [50.3, 171.0], [50.4, 172.0], [50.5, 173.0], [50.6, 174.0], [50.7, 176.0], [50.8, 177.0], [50.9, 177.0], [51.0, 178.0], [51.1, 179.0], [51.2, 180.0], [51.3, 181.0], [51.4, 183.0], [51.5, 183.0], [51.6, 184.0], [51.7, 184.0], [51.8, 185.0], [51.9, 186.0], [52.0, 187.0], [52.1, 187.0], [52.2, 188.0], [52.3, 189.0], [52.4, 190.0], [52.5, 190.0], [52.6, 191.0], [52.7, 192.0], [52.8, 193.0], [52.9, 194.0], [53.0, 194.0], [53.1, 195.0], [53.2, 196.0], [53.3, 198.0], [53.4, 198.0], [53.5, 198.0], [53.6, 199.0], [53.7, 200.0], [53.8, 201.0], [53.9, 202.0], [54.0, 202.0], [54.1, 203.0], [54.2, 204.0], [54.3, 206.0], [54.4, 208.0], [54.5, 209.0], [54.6, 210.0], [54.7, 210.0], [54.8, 211.0], [54.9, 212.0], [55.0, 213.0], [55.1, 214.0], [55.2, 215.0], [55.3, 217.0], [55.4, 218.0], [55.5, 219.0], [55.6, 220.0], [55.7, 221.0], [55.8, 222.0], [55.9, 223.0], [56.0, 224.0], [56.1, 224.0], [56.2, 225.0], [56.3, 225.0], [56.4, 226.0], [56.5, 227.0], [56.6, 228.0], [56.7, 228.0], [56.8, 230.0], [56.9, 230.0], [57.0, 231.0], [57.1, 232.0], [57.2, 233.0], [57.3, 233.0], [57.4, 234.0], [57.5, 236.0], [57.6, 237.0], [57.7, 239.0], [57.8, 239.0], [57.9, 241.0], [58.0, 242.0], [58.1, 242.0], [58.2, 243.0], [58.3, 243.0], [58.4, 244.0], [58.5, 244.0], [58.6, 245.0], [58.7, 246.0], [58.8, 246.0], [58.9, 248.0], [59.0, 248.0], [59.1, 250.0], [59.2, 251.0], [59.3, 251.0], [59.4, 252.0], [59.5, 252.0], [59.6, 253.0], [59.7, 253.0], [59.8, 254.0], [59.9, 255.0], [60.0, 256.0], [60.1, 256.0], [60.2, 256.0], [60.3, 257.0], [60.4, 258.0], [60.5, 259.0], [60.6, 259.0], [60.7, 260.0], [60.8, 262.0], [60.9, 263.0], [61.0, 264.0], [61.1, 265.0], [61.2, 266.0], [61.3, 266.0], [61.4, 267.0], [61.5, 269.0], [61.6, 271.0], [61.7, 271.0], [61.8, 272.0], [61.9, 273.0], [62.0, 273.0], [62.1, 275.0], [62.2, 276.0], [62.3, 276.0], [62.4, 277.0], [62.5, 278.0], [62.6, 279.0], [62.7, 279.0], [62.8, 280.0], [62.9, 281.0], [63.0, 283.0], [63.1, 284.0], [63.2, 285.0], [63.3, 286.0], [63.4, 289.0], [63.5, 289.0], [63.6, 291.0], [63.7, 292.0], [63.8, 292.0], [63.9, 294.0], [64.0, 295.0], [64.1, 296.0], [64.2, 298.0], [64.3, 299.0], [64.4, 299.0], [64.5, 301.0], [64.6, 302.0], [64.7, 303.0], [64.8, 305.0], [64.9, 307.0], [65.0, 308.0], [65.1, 309.0], [65.2, 310.0], [65.3, 311.0], [65.4, 312.0], [65.5, 314.0], [65.6, 315.0], [65.7, 316.0], [65.8, 317.0], [65.9, 318.0], [66.0, 321.0], [66.1, 324.0], [66.2, 325.0], [66.3, 326.0], [66.4, 327.0], [66.5, 328.0], [66.6, 330.0], [66.7, 331.0], [66.8, 332.0], [66.9, 333.0], [67.0, 335.0], [67.1, 336.0], [67.2, 337.0], [67.3, 339.0], [67.4, 341.0], [67.5, 342.0], [67.6, 343.0], [67.7, 346.0], [67.8, 346.0], [67.9, 347.0], [68.0, 348.0], [68.1, 350.0], [68.2, 352.0], [68.3, 353.0], [68.4, 355.0], [68.5, 356.0], [68.6, 357.0], [68.7, 360.0], [68.8, 362.0], [68.9, 363.0], [69.0, 364.0], [69.1, 368.0], [69.2, 370.0], [69.3, 370.0], [69.4, 371.0], [69.5, 373.0], [69.6, 374.0], [69.7, 374.0], [69.8, 376.0], [69.9, 378.0], [70.0, 379.0], [70.1, 380.0], [70.2, 382.0], [70.3, 382.0], [70.4, 384.0], [70.5, 385.0], [70.6, 386.0], [70.7, 389.0], [70.8, 390.0], [70.9, 391.0], [71.0, 393.0], [71.1, 395.0], [71.2, 396.0], [71.3, 397.0], [71.4, 398.0], [71.5, 400.0], [71.6, 402.0], [71.7, 403.0], [71.8, 406.0], [71.9, 407.0], [72.0, 408.0], [72.1, 409.0], [72.2, 412.0], [72.3, 412.0], [72.4, 414.0], [72.5, 416.0], [72.6, 417.0], [72.7, 420.0], [72.8, 421.0], [72.9, 422.0], [73.0, 425.0], [73.1, 425.0], [73.2, 428.0], [73.3, 429.0], [73.4, 430.0], [73.5, 433.0], [73.6, 434.0], [73.7, 435.0], [73.8, 435.0], [73.9, 436.0], [74.0, 438.0], [74.1, 438.0], [74.2, 440.0], [74.3, 441.0], [74.4, 442.0], [74.5, 444.0], [74.6, 446.0], [74.7, 446.0], [74.8, 448.0], [74.9, 450.0], [75.0, 451.0], [75.1, 452.0], [75.2, 453.0], [75.3, 454.0], [75.4, 456.0], [75.5, 456.0], [75.6, 460.0], [75.7, 461.0], [75.8, 462.0], [75.9, 464.0], [76.0, 465.0], [76.1, 467.0], [76.2, 468.0], [76.3, 469.0], [76.4, 471.0], [76.5, 473.0], [76.6, 475.0], [76.7, 478.0], [76.8, 480.0], [76.9, 483.0], [77.0, 485.0], [77.1, 487.0], [77.2, 489.0], [77.3, 491.0], [77.4, 492.0], [77.5, 495.0], [77.6, 497.0], [77.7, 498.0], [77.8, 499.0], [77.9, 501.0], [78.0, 503.0], [78.1, 505.0], [78.2, 507.0], [78.3, 509.0], [78.4, 511.0], [78.5, 513.0], [78.6, 514.0], [78.7, 516.0], [78.8, 517.0], [78.9, 518.0], [79.0, 519.0], [79.1, 521.0], [79.2, 523.0], [79.3, 527.0], [79.4, 529.0], [79.5, 531.0], [79.6, 534.0], [79.7, 536.0], [79.8, 538.0], [79.9, 539.0], [80.0, 543.0], [80.1, 546.0], [80.2, 548.0], [80.3, 551.0], [80.4, 553.0], [80.5, 555.0], [80.6, 556.0], [80.7, 557.0], [80.8, 559.0], [80.9, 560.0], [81.0, 562.0], [81.1, 564.0], [81.2, 566.0], [81.3, 567.0], [81.4, 569.0], [81.5, 570.0], [81.6, 572.0], [81.7, 575.0], [81.8, 579.0], [81.9, 581.0], [82.0, 583.0], [82.1, 586.0], [82.2, 589.0], [82.3, 591.0], [82.4, 592.0], [82.5, 594.0], [82.6, 595.0], [82.7, 596.0], [82.8, 599.0], [82.9, 602.0], [83.0, 605.0], [83.1, 606.0], [83.2, 607.0], [83.3, 608.0], [83.4, 610.0], [83.5, 614.0], [83.6, 618.0], [83.7, 619.0], [83.8, 620.0], [83.9, 622.0], [84.0, 625.0], [84.1, 627.0], [84.2, 628.0], [84.3, 630.0], [84.4, 632.0], [84.5, 634.0], [84.6, 636.0], [84.7, 637.0], [84.8, 640.0], [84.9, 642.0], [85.0, 644.0], [85.1, 646.0], [85.2, 648.0], [85.3, 649.0], [85.4, 652.0], [85.5, 653.0], [85.6, 655.0], [85.7, 658.0], [85.8, 659.0], [85.9, 663.0], [86.0, 664.0], [86.1, 667.0], [86.2, 668.0], [86.3, 670.0], [86.4, 673.0], [86.5, 675.0], [86.6, 678.0], [86.7, 679.0], [86.8, 681.0], [86.9, 683.0], [87.0, 687.0], [87.1, 690.0], [87.2, 694.0], [87.3, 695.0], [87.4, 699.0], [87.5, 702.0], [87.6, 707.0], [87.7, 710.0], [87.8, 712.0], [87.9, 714.0], [88.0, 717.0], [88.1, 720.0], [88.2, 722.0], [88.3, 723.0], [88.4, 726.0], [88.5, 727.0], [88.6, 732.0], [88.7, 733.0], [88.8, 739.0], [88.9, 741.0], [89.0, 743.0], [89.1, 747.0], [89.2, 749.0], [89.3, 752.0], [89.4, 757.0], [89.5, 760.0], [89.6, 767.0], [89.7, 772.0], [89.8, 774.0], [89.9, 776.0], [90.0, 782.0], [90.1, 784.0], [90.2, 788.0], [90.3, 791.0], [90.4, 795.0], [90.5, 798.0], [90.6, 800.0], [90.7, 805.0], [90.8, 810.0], [90.9, 814.0], [91.0, 817.0], [91.1, 819.0], [91.2, 823.0], [91.3, 827.0], [91.4, 829.0], [91.5, 833.0], [91.6, 834.0], [91.7, 838.0], [91.8, 844.0], [91.9, 852.0], [92.0, 858.0], [92.1, 865.0], [92.2, 868.0], [92.3, 879.0], [92.4, 888.0], [92.5, 892.0], [92.6, 894.0], [92.7, 895.0], [92.8, 897.0], [92.9, 901.0], [93.0, 906.0], [93.1, 911.0], [93.2, 918.0], [93.3, 925.0], [93.4, 930.0], [93.5, 935.0], [93.6, 942.0], [93.7, 947.0], [93.8, 954.0], [93.9, 961.0], [94.0, 967.0], [94.1, 971.0], [94.2, 981.0], [94.3, 988.0], [94.4, 991.0], [94.5, 998.0], [94.6, 1004.0], [94.7, 1009.0], [94.8, 1015.0], [94.9, 1020.0], [95.0, 1029.0], [95.1, 1038.0], [95.2, 1041.0], [95.3, 1047.0], [95.4, 1053.0], [95.5, 1059.0], [95.6, 1064.0], [95.7, 1077.0], [95.8, 1084.0], [95.9, 1090.0], [96.0, 1093.0], [96.1, 1101.0], [96.2, 1112.0], [96.3, 1121.0], [96.4, 1126.0], [96.5, 1144.0], [96.6, 1158.0], [96.7, 1165.0], [96.8, 1172.0], [96.9, 1184.0], [97.0, 1202.0], [97.1, 1204.0], [97.2, 1216.0], [97.3, 1228.0], [97.4, 1246.0], [97.5, 1253.0], [97.6, 1268.0], [97.7, 1281.0], [97.8, 1304.0], [97.9, 1310.0], [98.0, 1324.0], [98.1, 1339.0], [98.2, 1352.0], [98.3, 1369.0], [98.4, 1385.0], [98.5, 1424.0], [98.6, 1471.0], [98.7, 1502.0], [98.8, 1524.0], [98.9, 1584.0], [99.0, 1603.0], [99.1, 1624.0], [99.2, 1670.0], [99.3, 1690.0], [99.4, 1775.0], [99.5, 1851.0], [99.6, 1930.0], [99.7, 2088.0], [99.8, 2200.0], [99.9, 2378.0], [100.0, 3242.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 2151.0, "series": [{"data": [[0.0, 2151.0], [600.0, 245.0], [700.0, 163.0], [800.0, 121.0], [900.0, 88.0], [1000.0, 82.0], [1100.0, 48.0], [1200.0, 41.0], [1300.0, 36.0], [1400.0, 11.0], [1500.0, 16.0], [100.0, 671.0], [1600.0, 18.0], [1700.0, 6.0], [1800.0, 5.0], [1900.0, 6.0], [2000.0, 4.0], [2100.0, 4.0], [2200.0, 3.0], [2300.0, 3.0], [2400.0, 2.0], [3000.0, 1.0], [3100.0, 1.0], [200.0, 567.0], [3200.0, 1.0], [300.0, 371.0], [400.0, 335.0], [500.0, 262.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3200.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 69.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 4098.0, "series": [{"data": [[0.0, 4098.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1095.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 69.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.791304347826085, "minX": 1.60237428E12, "maxY": 10.0, "series": [{"data": [[1.60237434E12, 10.0], [1.6023744E12, 10.0], [1.60237428E12, 9.791304347826085], [1.60237446E12, 9.959459459459461]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60237446E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 309.98798856053395, "minX": 1.0, "maxY": 3101.0, "series": [{"data": [[4.0, 1033.0], [8.0, 623.5], [2.0, 2164.0], [1.0, 3101.0], [9.0, 776.5], [5.0, 874.3333333333334], [10.0, 309.98798856053395], [6.0, 1029.0], [3.0, 3099.0], [7.0, 1709.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.98688711516533, 313.13949068795193]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 993.85, "minX": 1.60237428E12, "maxY": 1666306.6, "series": [{"data": [[1.60237434E12, 1666306.6], [1.6023744E12, 1389431.0166666666], [1.60237428E12, 50045.13333333333], [1.60237446E12, 1145079.7166666666]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60237434E12, 14551.3], [1.6023744E12, 20125.883333333335], [1.60237428E12, 993.85], [1.60237446E12, 9819.916666666666]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60237446E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 252.1279560810813, "minX": 1.60237428E12, "maxY": 372.09819819819853, "series": [{"data": [[1.60237434E12, 358.8130617136008], [1.6023744E12, 252.1279560810813], [1.60237428E12, 337.5043478260869], [1.60237446E12, 372.09819819819853]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60237446E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 251.78673986486513, "minX": 1.60237428E12, "maxY": 371.5900900900898, "series": [{"data": [[1.60237434E12, 358.2881965248651], [1.6023744E12, 251.78673986486513], [1.60237428E12, 337.1652173913044], [1.60237446E12, 371.5900900900898]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60237446E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.008388256440982629, "minX": 1.60237428E12, "maxY": 0.8521739130434788, "series": [{"data": [[1.60237434E12, 0.008388256440982629], [1.6023744E12, 0.008445945945945948], [1.60237428E12, 0.8521739130434788], [1.60237446E12, 0.013513513513513514]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60237446E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 30.0, "minX": 1.60237428E12, "maxY": 3242.0, "series": [{"data": [[1.60237434E12, 2009.0], [1.6023744E12, 2378.0], [1.60237428E12, 1325.0], [1.60237446E12, 3242.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60237434E12, 36.0], [1.6023744E12, 36.0], [1.60237428E12, 35.04399997234344], [1.60237446E12, 32.99899973511696]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60237434E12, 36.0], [1.6023744E12, 36.0], [1.60237428E12, 35.14840001106262], [1.60237446E12, 33.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60237434E12, 36.0], [1.6023744E12, 36.0], [1.60237428E12, 35.10199998617172], [1.60237446E12, 33.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60237434E12, 33.0], [1.6023744E12, 31.0], [1.60237428E12, 35.0], [1.60237446E12, 30.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60237434E12, 243.0], [1.6023744E12, 129.0], [1.60237428E12, 154.0], [1.60237446E12, 228.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60237446E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 73.0, "minX": 2.0, "maxY": 2632.5, "series": [{"data": [[2.0, 2632.5], [3.0, 1033.0], [4.0, 1668.5], [5.0, 1292.0], [6.0, 1115.5], [7.0, 1031.0], [8.0, 1097.5], [9.0, 1168.5], [10.0, 732.0], [12.0, 654.5], [13.0, 729.0], [14.0, 610.5], [15.0, 779.5], [16.0, 596.0], [17.0, 534.0], [18.0, 502.0], [19.0, 471.0], [20.0, 431.0], [21.0, 430.0], [22.0, 385.5], [23.0, 406.0], [24.0, 406.0], [25.0, 88.0], [26.0, 435.5], [27.0, 289.5], [28.0, 258.5], [29.0, 255.5], [30.0, 278.0], [31.0, 277.0], [33.0, 98.0], [32.0, 247.0], [35.0, 177.0], [34.0, 207.5], [36.0, 135.5], [37.0, 84.0], [38.0, 76.5], [39.0, 79.0], [40.0, 209.0], [42.0, 158.5], [43.0, 82.0], [45.0, 82.0], [47.0, 100.0], [46.0, 74.0], [53.0, 105.0], [52.0, 146.0], [55.0, 94.0], [56.0, 85.0], [57.0, 88.0], [58.0, 82.5], [59.0, 148.0], [61.0, 82.0], [64.0, 88.0], [65.0, 78.0], [69.0, 113.5], [70.0, 115.0], [71.0, 77.5], [75.0, 94.0], [79.0, 73.0], [83.0, 132.0], [81.0, 91.0], [85.0, 77.0], [86.0, 81.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 86.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 73.0, "minX": 2.0, "maxY": 2632.0, "series": [{"data": [[2.0, 2632.0], [3.0, 1030.0], [4.0, 1667.5], [5.0, 1291.0], [6.0, 1114.5], [7.0, 1027.0], [8.0, 1097.5], [9.0, 1168.5], [10.0, 731.0], [12.0, 652.5], [13.0, 729.0], [14.0, 610.5], [15.0, 779.5], [16.0, 595.5], [17.0, 533.0], [18.0, 501.0], [19.0, 471.0], [20.0, 429.0], [21.0, 429.0], [22.0, 384.0], [23.0, 405.5], [24.0, 406.0], [25.0, 87.5], [26.0, 435.5], [27.0, 289.5], [28.0, 257.5], [29.0, 255.0], [30.0, 277.5], [31.0, 277.0], [33.0, 98.0], [32.0, 247.0], [35.0, 177.0], [34.0, 207.0], [36.0, 135.5], [37.0, 84.0], [38.0, 76.5], [39.0, 79.0], [40.0, 209.0], [42.0, 158.5], [43.0, 82.0], [45.0, 82.0], [47.0, 100.0], [46.0, 74.0], [53.0, 105.0], [52.0, 146.0], [55.0, 94.0], [56.0, 85.0], [57.0, 88.0], [58.0, 82.5], [59.0, 148.0], [61.0, 82.0], [64.0, 88.0], [65.0, 78.0], [69.0, 113.5], [70.0, 115.0], [71.0, 77.0], [75.0, 94.0], [79.0, 73.0], [83.0, 131.0], [81.0, 91.0], [85.0, 76.5], [86.0, 81.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 86.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 2.0833333333333335, "minX": 1.60237428E12, "maxY": 39.45, "series": [{"data": [[1.60237434E12, 27.816666666666666], [1.6023744E12, 39.45], [1.60237428E12, 2.0833333333333335], [1.60237446E12, 18.35]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60237446E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1.9166666666666667, "minX": 1.60237428E12, "maxY": 39.46666666666667, "series": [{"data": [[1.60237434E12, 27.816666666666666], [1.6023744E12, 39.46666666666667], [1.60237428E12, 1.9166666666666667], [1.60237446E12, 18.5]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60237446E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.9166666666666667, "minX": 1.60237428E12, "maxY": 39.46666666666667, "series": [{"data": [[1.60237434E12, 27.816666666666666], [1.6023744E12, 39.46666666666667], [1.60237428E12, 1.9166666666666667], [1.60237446E12, 18.5]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60237446E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.9166666666666667, "minX": 1.60237428E12, "maxY": 39.46666666666667, "series": [{"data": [[1.60237434E12, 27.816666666666666], [1.6023744E12, 39.46666666666667], [1.60237428E12, 1.9166666666666667], [1.60237446E12, 18.5]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60237446E12, "title": "Total Transactions Per Second"}},
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

