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
        data: {"result": {"minY": 29.0, "minX": 0.0, "maxY": 2460.0, "series": [{"data": [[0.0, 29.0], [0.1, 31.0], [0.2, 32.0], [0.3, 32.0], [0.4, 33.0], [0.5, 33.0], [0.6, 34.0], [0.7, 34.0], [0.8, 34.0], [0.9, 34.0], [1.0, 35.0], [1.1, 35.0], [1.2, 35.0], [1.3, 35.0], [1.4, 35.0], [1.5, 36.0], [1.6, 36.0], [1.7, 36.0], [1.8, 36.0], [1.9, 36.0], [2.0, 36.0], [2.1, 36.0], [2.2, 36.0], [2.3, 36.0], [2.4, 37.0], [2.5, 37.0], [2.6, 37.0], [2.7, 37.0], [2.8, 37.0], [2.9, 37.0], [3.0, 37.0], [3.1, 37.0], [3.2, 37.0], [3.3, 37.0], [3.4, 38.0], [3.5, 38.0], [3.6, 38.0], [3.7, 38.0], [3.8, 38.0], [3.9, 38.0], [4.0, 38.0], [4.1, 38.0], [4.2, 38.0], [4.3, 38.0], [4.4, 38.0], [4.5, 39.0], [4.6, 39.0], [4.7, 39.0], [4.8, 39.0], [4.9, 39.0], [5.0, 39.0], [5.1, 39.0], [5.2, 39.0], [5.3, 39.0], [5.4, 39.0], [5.5, 39.0], [5.6, 39.0], [5.7, 39.0], [5.8, 39.0], [5.9, 40.0], [6.0, 40.0], [6.1, 40.0], [6.2, 40.0], [6.3, 40.0], [6.4, 40.0], [6.5, 40.0], [6.6, 40.0], [6.7, 40.0], [6.8, 40.0], [6.9, 40.0], [7.0, 40.0], [7.1, 40.0], [7.2, 41.0], [7.3, 41.0], [7.4, 41.0], [7.5, 41.0], [7.6, 41.0], [7.7, 41.0], [7.8, 41.0], [7.9, 41.0], [8.0, 41.0], [8.1, 41.0], [8.2, 41.0], [8.3, 41.0], [8.4, 41.0], [8.5, 41.0], [8.6, 41.0], [8.7, 41.0], [8.8, 41.0], [8.9, 42.0], [9.0, 42.0], [9.1, 42.0], [9.2, 42.0], [9.3, 42.0], [9.4, 42.0], [9.5, 42.0], [9.6, 42.0], [9.7, 42.0], [9.8, 42.0], [9.9, 43.0], [10.0, 43.0], [10.1, 43.0], [10.2, 43.0], [10.3, 43.0], [10.4, 43.0], [10.5, 43.0], [10.6, 43.0], [10.7, 43.0], [10.8, 43.0], [10.9, 43.0], [11.0, 43.0], [11.1, 44.0], [11.2, 44.0], [11.3, 44.0], [11.4, 44.0], [11.5, 44.0], [11.6, 44.0], [11.7, 44.0], [11.8, 44.0], [11.9, 44.0], [12.0, 44.0], [12.1, 44.0], [12.2, 44.0], [12.3, 44.0], [12.4, 45.0], [12.5, 45.0], [12.6, 45.0], [12.7, 45.0], [12.8, 45.0], [12.9, 45.0], [13.0, 45.0], [13.1, 45.0], [13.2, 45.0], [13.3, 45.0], [13.4, 45.0], [13.5, 46.0], [13.6, 46.0], [13.7, 46.0], [13.8, 46.0], [13.9, 46.0], [14.0, 46.0], [14.1, 46.0], [14.2, 46.0], [14.3, 46.0], [14.4, 47.0], [14.5, 47.0], [14.6, 47.0], [14.7, 47.0], [14.8, 47.0], [14.9, 47.0], [15.0, 47.0], [15.1, 47.0], [15.2, 48.0], [15.3, 48.0], [15.4, 48.0], [15.5, 48.0], [15.6, 48.0], [15.7, 48.0], [15.8, 49.0], [15.9, 49.0], [16.0, 49.0], [16.1, 49.0], [16.2, 49.0], [16.3, 49.0], [16.4, 50.0], [16.5, 50.0], [16.6, 50.0], [16.7, 50.0], [16.8, 51.0], [16.9, 51.0], [17.0, 52.0], [17.1, 52.0], [17.2, 52.0], [17.3, 52.0], [17.4, 53.0], [17.5, 53.0], [17.6, 54.0], [17.7, 54.0], [17.8, 54.0], [17.9, 54.0], [18.0, 54.0], [18.1, 55.0], [18.2, 55.0], [18.3, 55.0], [18.4, 56.0], [18.5, 56.0], [18.6, 56.0], [18.7, 57.0], [18.8, 58.0], [18.9, 58.0], [19.0, 58.0], [19.1, 59.0], [19.2, 59.0], [19.3, 59.0], [19.4, 60.0], [19.5, 60.0], [19.6, 60.0], [19.7, 61.0], [19.8, 61.0], [19.9, 61.0], [20.0, 61.0], [20.1, 62.0], [20.2, 62.0], [20.3, 63.0], [20.4, 63.0], [20.5, 63.0], [20.6, 63.0], [20.7, 64.0], [20.8, 64.0], [20.9, 64.0], [21.0, 65.0], [21.1, 65.0], [21.2, 65.0], [21.3, 65.0], [21.4, 65.0], [21.5, 66.0], [21.6, 66.0], [21.7, 66.0], [21.8, 66.0], [21.9, 66.0], [22.0, 67.0], [22.1, 67.0], [22.2, 67.0], [22.3, 67.0], [22.4, 67.0], [22.5, 67.0], [22.6, 68.0], [22.7, 68.0], [22.8, 68.0], [22.9, 68.0], [23.0, 68.0], [23.1, 68.0], [23.2, 69.0], [23.3, 69.0], [23.4, 69.0], [23.5, 69.0], [23.6, 69.0], [23.7, 69.0], [23.8, 69.0], [23.9, 70.0], [24.0, 70.0], [24.1, 70.0], [24.2, 70.0], [24.3, 70.0], [24.4, 70.0], [24.5, 70.0], [24.6, 71.0], [24.7, 71.0], [24.8, 71.0], [24.9, 71.0], [25.0, 71.0], [25.1, 71.0], [25.2, 71.0], [25.3, 71.0], [25.4, 72.0], [25.5, 72.0], [25.6, 72.0], [25.7, 72.0], [25.8, 72.0], [25.9, 72.0], [26.0, 72.0], [26.1, 73.0], [26.2, 73.0], [26.3, 73.0], [26.4, 73.0], [26.5, 73.0], [26.6, 73.0], [26.7, 73.0], [26.8, 73.0], [26.9, 73.0], [27.0, 73.0], [27.1, 73.0], [27.2, 74.0], [27.3, 74.0], [27.4, 74.0], [27.5, 74.0], [27.6, 74.0], [27.7, 74.0], [27.8, 74.0], [27.9, 74.0], [28.0, 75.0], [28.1, 75.0], [28.2, 75.0], [28.3, 75.0], [28.4, 75.0], [28.5, 75.0], [28.6, 75.0], [28.7, 75.0], [28.8, 76.0], [28.9, 76.0], [29.0, 76.0], [29.1, 76.0], [29.2, 76.0], [29.3, 76.0], [29.4, 76.0], [29.5, 77.0], [29.6, 77.0], [29.7, 77.0], [29.8, 77.0], [29.9, 77.0], [30.0, 77.0], [30.1, 77.0], [30.2, 77.0], [30.3, 78.0], [30.4, 78.0], [30.5, 78.0], [30.6, 78.0], [30.7, 78.0], [30.8, 78.0], [30.9, 78.0], [31.0, 78.0], [31.1, 79.0], [31.2, 79.0], [31.3, 79.0], [31.4, 79.0], [31.5, 79.0], [31.6, 79.0], [31.7, 79.0], [31.8, 79.0], [31.9, 80.0], [32.0, 80.0], [32.1, 80.0], [32.2, 80.0], [32.3, 80.0], [32.4, 80.0], [32.5, 80.0], [32.6, 81.0], [32.7, 81.0], [32.8, 81.0], [32.9, 81.0], [33.0, 81.0], [33.1, 81.0], [33.2, 81.0], [33.3, 81.0], [33.4, 81.0], [33.5, 82.0], [33.6, 82.0], [33.7, 82.0], [33.8, 82.0], [33.9, 82.0], [34.0, 82.0], [34.1, 82.0], [34.2, 82.0], [34.3, 83.0], [34.4, 83.0], [34.5, 83.0], [34.6, 83.0], [34.7, 83.0], [34.8, 84.0], [34.9, 84.0], [35.0, 84.0], [35.1, 84.0], [35.2, 84.0], [35.3, 84.0], [35.4, 84.0], [35.5, 85.0], [35.6, 85.0], [35.7, 85.0], [35.8, 85.0], [35.9, 85.0], [36.0, 85.0], [36.1, 86.0], [36.2, 86.0], [36.3, 86.0], [36.4, 86.0], [36.5, 86.0], [36.6, 86.0], [36.7, 87.0], [36.8, 87.0], [36.9, 87.0], [37.0, 87.0], [37.1, 87.0], [37.2, 87.0], [37.3, 88.0], [37.4, 88.0], [37.5, 88.0], [37.6, 88.0], [37.7, 89.0], [37.8, 89.0], [37.9, 90.0], [38.0, 90.0], [38.1, 90.0], [38.2, 90.0], [38.3, 91.0], [38.4, 91.0], [38.5, 91.0], [38.6, 92.0], [38.7, 92.0], [38.8, 92.0], [38.9, 92.0], [39.0, 93.0], [39.1, 93.0], [39.2, 94.0], [39.3, 94.0], [39.4, 95.0], [39.5, 95.0], [39.6, 96.0], [39.7, 96.0], [39.8, 97.0], [39.9, 97.0], [40.0, 98.0], [40.1, 98.0], [40.2, 99.0], [40.3, 99.0], [40.4, 100.0], [40.5, 100.0], [40.6, 101.0], [40.7, 101.0], [40.8, 102.0], [40.9, 103.0], [41.0, 104.0], [41.1, 104.0], [41.2, 105.0], [41.3, 106.0], [41.4, 107.0], [41.5, 107.0], [41.6, 108.0], [41.7, 109.0], [41.8, 109.0], [41.9, 110.0], [42.0, 111.0], [42.1, 112.0], [42.2, 113.0], [42.3, 114.0], [42.4, 114.0], [42.5, 115.0], [42.6, 115.0], [42.7, 116.0], [42.8, 117.0], [42.9, 118.0], [43.0, 118.0], [43.1, 119.0], [43.2, 120.0], [43.3, 121.0], [43.4, 122.0], [43.5, 122.0], [43.6, 123.0], [43.7, 123.0], [43.8, 124.0], [43.9, 124.0], [44.0, 125.0], [44.1, 126.0], [44.2, 126.0], [44.3, 126.0], [44.4, 127.0], [44.5, 128.0], [44.6, 129.0], [44.7, 129.0], [44.8, 130.0], [44.9, 131.0], [45.0, 132.0], [45.1, 132.0], [45.2, 133.0], [45.3, 134.0], [45.4, 135.0], [45.5, 135.0], [45.6, 136.0], [45.7, 137.0], [45.8, 139.0], [45.9, 140.0], [46.0, 141.0], [46.1, 141.0], [46.2, 142.0], [46.3, 143.0], [46.4, 144.0], [46.5, 144.0], [46.6, 145.0], [46.7, 147.0], [46.8, 147.0], [46.9, 148.0], [47.0, 149.0], [47.1, 150.0], [47.2, 150.0], [47.3, 152.0], [47.4, 152.0], [47.5, 153.0], [47.6, 154.0], [47.7, 154.0], [47.8, 155.0], [47.9, 155.0], [48.0, 156.0], [48.1, 158.0], [48.2, 159.0], [48.3, 160.0], [48.4, 160.0], [48.5, 161.0], [48.6, 162.0], [48.7, 163.0], [48.8, 163.0], [48.9, 164.0], [49.0, 165.0], [49.1, 166.0], [49.2, 167.0], [49.3, 168.0], [49.4, 169.0], [49.5, 170.0], [49.6, 170.0], [49.7, 171.0], [49.8, 171.0], [49.9, 171.0], [50.0, 172.0], [50.1, 174.0], [50.2, 176.0], [50.3, 176.0], [50.4, 177.0], [50.5, 178.0], [50.6, 179.0], [50.7, 180.0], [50.8, 180.0], [50.9, 182.0], [51.0, 183.0], [51.1, 184.0], [51.2, 184.0], [51.3, 185.0], [51.4, 186.0], [51.5, 187.0], [51.6, 188.0], [51.7, 189.0], [51.8, 189.0], [51.9, 190.0], [52.0, 191.0], [52.1, 191.0], [52.2, 192.0], [52.3, 192.0], [52.4, 193.0], [52.5, 194.0], [52.6, 196.0], [52.7, 197.0], [52.8, 198.0], [52.9, 198.0], [53.0, 199.0], [53.1, 199.0], [53.2, 200.0], [53.3, 201.0], [53.4, 201.0], [53.5, 203.0], [53.6, 204.0], [53.7, 204.0], [53.8, 205.0], [53.9, 206.0], [54.0, 206.0], [54.1, 208.0], [54.2, 208.0], [54.3, 209.0], [54.4, 210.0], [54.5, 211.0], [54.6, 212.0], [54.7, 212.0], [54.8, 213.0], [54.9, 214.0], [55.0, 215.0], [55.1, 215.0], [55.2, 216.0], [55.3, 216.0], [55.4, 217.0], [55.5, 218.0], [55.6, 219.0], [55.7, 220.0], [55.8, 221.0], [55.9, 222.0], [56.0, 222.0], [56.1, 223.0], [56.2, 224.0], [56.3, 224.0], [56.4, 224.0], [56.5, 225.0], [56.6, 227.0], [56.7, 228.0], [56.8, 229.0], [56.9, 230.0], [57.0, 231.0], [57.1, 233.0], [57.2, 234.0], [57.3, 234.0], [57.4, 235.0], [57.5, 235.0], [57.6, 236.0], [57.7, 238.0], [57.8, 239.0], [57.9, 240.0], [58.0, 240.0], [58.1, 242.0], [58.2, 243.0], [58.3, 243.0], [58.4, 244.0], [58.5, 245.0], [58.6, 246.0], [58.7, 248.0], [58.8, 248.0], [58.9, 249.0], [59.0, 249.0], [59.1, 249.0], [59.2, 250.0], [59.3, 250.0], [59.4, 251.0], [59.5, 253.0], [59.6, 253.0], [59.7, 254.0], [59.8, 254.0], [59.9, 255.0], [60.0, 256.0], [60.1, 257.0], [60.2, 257.0], [60.3, 258.0], [60.4, 258.0], [60.5, 260.0], [60.6, 261.0], [60.7, 262.0], [60.8, 263.0], [60.9, 265.0], [61.0, 266.0], [61.1, 267.0], [61.2, 269.0], [61.3, 270.0], [61.4, 271.0], [61.5, 272.0], [61.6, 272.0], [61.7, 273.0], [61.8, 275.0], [61.9, 275.0], [62.0, 277.0], [62.1, 278.0], [62.2, 279.0], [62.3, 281.0], [62.4, 283.0], [62.5, 283.0], [62.6, 284.0], [62.7, 285.0], [62.8, 286.0], [62.9, 288.0], [63.0, 290.0], [63.1, 292.0], [63.2, 293.0], [63.3, 294.0], [63.4, 295.0], [63.5, 296.0], [63.6, 298.0], [63.7, 299.0], [63.8, 301.0], [63.9, 302.0], [64.0, 305.0], [64.1, 307.0], [64.2, 308.0], [64.3, 310.0], [64.4, 311.0], [64.5, 312.0], [64.6, 314.0], [64.7, 315.0], [64.8, 317.0], [64.9, 318.0], [65.0, 319.0], [65.1, 319.0], [65.2, 320.0], [65.3, 321.0], [65.4, 322.0], [65.5, 323.0], [65.6, 324.0], [65.7, 325.0], [65.8, 326.0], [65.9, 326.0], [66.0, 327.0], [66.1, 329.0], [66.2, 330.0], [66.3, 332.0], [66.4, 333.0], [66.5, 334.0], [66.6, 335.0], [66.7, 336.0], [66.8, 337.0], [66.9, 338.0], [67.0, 339.0], [67.1, 341.0], [67.2, 342.0], [67.3, 343.0], [67.4, 345.0], [67.5, 346.0], [67.6, 348.0], [67.7, 350.0], [67.8, 352.0], [67.9, 353.0], [68.0, 356.0], [68.1, 358.0], [68.2, 360.0], [68.3, 362.0], [68.4, 364.0], [68.5, 365.0], [68.6, 367.0], [68.7, 368.0], [68.8, 369.0], [68.9, 370.0], [69.0, 373.0], [69.1, 374.0], [69.2, 375.0], [69.3, 376.0], [69.4, 377.0], [69.5, 377.0], [69.6, 378.0], [69.7, 378.0], [69.8, 380.0], [69.9, 382.0], [70.0, 382.0], [70.1, 383.0], [70.2, 384.0], [70.3, 385.0], [70.4, 386.0], [70.5, 387.0], [70.6, 389.0], [70.7, 389.0], [70.8, 391.0], [70.9, 393.0], [71.0, 395.0], [71.1, 396.0], [71.2, 398.0], [71.3, 399.0], [71.4, 400.0], [71.5, 401.0], [71.6, 401.0], [71.7, 403.0], [71.8, 403.0], [71.9, 405.0], [72.0, 406.0], [72.1, 407.0], [72.2, 408.0], [72.3, 409.0], [72.4, 411.0], [72.5, 411.0], [72.6, 413.0], [72.7, 414.0], [72.8, 416.0], [72.9, 416.0], [73.0, 417.0], [73.1, 419.0], [73.2, 421.0], [73.3, 422.0], [73.4, 423.0], [73.5, 423.0], [73.6, 424.0], [73.7, 424.0], [73.8, 426.0], [73.9, 428.0], [74.0, 429.0], [74.1, 431.0], [74.2, 432.0], [74.3, 433.0], [74.4, 435.0], [74.5, 436.0], [74.6, 438.0], [74.7, 440.0], [74.8, 443.0], [74.9, 445.0], [75.0, 447.0], [75.1, 449.0], [75.2, 450.0], [75.3, 451.0], [75.4, 452.0], [75.5, 453.0], [75.6, 455.0], [75.7, 457.0], [75.8, 458.0], [75.9, 460.0], [76.0, 461.0], [76.1, 463.0], [76.2, 464.0], [76.3, 465.0], [76.4, 467.0], [76.5, 468.0], [76.6, 469.0], [76.7, 470.0], [76.8, 471.0], [76.9, 473.0], [77.0, 476.0], [77.1, 477.0], [77.2, 479.0], [77.3, 481.0], [77.4, 483.0], [77.5, 485.0], [77.6, 486.0], [77.7, 487.0], [77.8, 488.0], [77.9, 489.0], [78.0, 491.0], [78.1, 493.0], [78.2, 496.0], [78.3, 498.0], [78.4, 500.0], [78.5, 501.0], [78.6, 502.0], [78.7, 503.0], [78.8, 504.0], [78.9, 505.0], [79.0, 505.0], [79.1, 506.0], [79.2, 507.0], [79.3, 509.0], [79.4, 512.0], [79.5, 513.0], [79.6, 515.0], [79.7, 516.0], [79.8, 517.0], [79.9, 519.0], [80.0, 521.0], [80.1, 522.0], [80.2, 524.0], [80.3, 525.0], [80.4, 527.0], [80.5, 528.0], [80.6, 532.0], [80.7, 534.0], [80.8, 536.0], [80.9, 538.0], [81.0, 541.0], [81.1, 543.0], [81.2, 545.0], [81.3, 548.0], [81.4, 550.0], [81.5, 554.0], [81.6, 556.0], [81.7, 558.0], [81.8, 559.0], [81.9, 560.0], [82.0, 562.0], [82.1, 563.0], [82.2, 565.0], [82.3, 566.0], [82.4, 568.0], [82.5, 571.0], [82.6, 573.0], [82.7, 574.0], [82.8, 575.0], [82.9, 578.0], [83.0, 580.0], [83.1, 581.0], [83.2, 583.0], [83.3, 586.0], [83.4, 587.0], [83.5, 588.0], [83.6, 591.0], [83.7, 593.0], [83.8, 595.0], [83.9, 598.0], [84.0, 600.0], [84.1, 601.0], [84.2, 602.0], [84.3, 604.0], [84.4, 608.0], [84.5, 611.0], [84.6, 612.0], [84.7, 613.0], [84.8, 614.0], [84.9, 617.0], [85.0, 618.0], [85.1, 619.0], [85.2, 622.0], [85.3, 625.0], [85.4, 627.0], [85.5, 629.0], [85.6, 630.0], [85.7, 633.0], [85.8, 634.0], [85.9, 636.0], [86.0, 638.0], [86.1, 640.0], [86.2, 641.0], [86.3, 643.0], [86.4, 645.0], [86.5, 646.0], [86.6, 649.0], [86.7, 651.0], [86.8, 653.0], [86.9, 655.0], [87.0, 658.0], [87.1, 661.0], [87.2, 662.0], [87.3, 665.0], [87.4, 668.0], [87.5, 670.0], [87.6, 672.0], [87.7, 675.0], [87.8, 676.0], [87.9, 678.0], [88.0, 680.0], [88.1, 682.0], [88.2, 685.0], [88.3, 689.0], [88.4, 690.0], [88.5, 691.0], [88.6, 693.0], [88.7, 694.0], [88.8, 699.0], [88.9, 702.0], [89.0, 705.0], [89.1, 707.0], [89.2, 710.0], [89.3, 712.0], [89.4, 716.0], [89.5, 719.0], [89.6, 723.0], [89.7, 728.0], [89.8, 730.0], [89.9, 731.0], [90.0, 733.0], [90.1, 740.0], [90.2, 742.0], [90.3, 744.0], [90.4, 746.0], [90.5, 750.0], [90.6, 752.0], [90.7, 755.0], [90.8, 758.0], [90.9, 765.0], [91.0, 769.0], [91.1, 772.0], [91.2, 774.0], [91.3, 780.0], [91.4, 787.0], [91.5, 790.0], [91.6, 795.0], [91.7, 800.0], [91.8, 804.0], [91.9, 805.0], [92.0, 810.0], [92.1, 812.0], [92.2, 816.0], [92.3, 818.0], [92.4, 824.0], [92.5, 827.0], [92.6, 834.0], [92.7, 838.0], [92.8, 849.0], [92.9, 852.0], [93.0, 858.0], [93.1, 862.0], [93.2, 867.0], [93.3, 869.0], [93.4, 875.0], [93.5, 879.0], [93.6, 881.0], [93.7, 884.0], [93.8, 890.0], [93.9, 902.0], [94.0, 910.0], [94.1, 921.0], [94.2, 926.0], [94.3, 933.0], [94.4, 938.0], [94.5, 946.0], [94.6, 951.0], [94.7, 957.0], [94.8, 964.0], [94.9, 968.0], [95.0, 972.0], [95.1, 980.0], [95.2, 986.0], [95.3, 991.0], [95.4, 995.0], [95.5, 1004.0], [95.6, 1011.0], [95.7, 1020.0], [95.8, 1025.0], [95.9, 1037.0], [96.0, 1044.0], [96.1, 1050.0], [96.2, 1055.0], [96.3, 1069.0], [96.4, 1082.0], [96.5, 1087.0], [96.6, 1095.0], [96.7, 1105.0], [96.8, 1121.0], [96.9, 1133.0], [97.0, 1154.0], [97.1, 1167.0], [97.2, 1180.0], [97.3, 1192.0], [97.4, 1202.0], [97.5, 1218.0], [97.6, 1234.0], [97.7, 1258.0], [97.8, 1274.0], [97.9, 1300.0], [98.0, 1324.0], [98.1, 1336.0], [98.2, 1357.0], [98.3, 1367.0], [98.4, 1384.0], [98.5, 1415.0], [98.6, 1442.0], [98.7, 1467.0], [98.8, 1494.0], [98.9, 1528.0], [99.0, 1569.0], [99.1, 1587.0], [99.2, 1632.0], [99.3, 1663.0], [99.4, 1717.0], [99.5, 1756.0], [99.6, 1981.0], [99.7, 2039.0], [99.8, 2118.0], [99.9, 2204.0], [100.0, 2460.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 2.0, "minX": 0.0, "maxY": 2124.0, "series": [{"data": [[0.0, 2124.0], [2100.0, 7.0], [2200.0, 4.0], [600.0, 255.0], [2400.0, 2.0], [700.0, 152.0], [200.0, 558.0], [800.0, 114.0], [900.0, 85.0], [1000.0, 62.0], [1100.0, 37.0], [300.0, 404.0], [1200.0, 28.0], [1300.0, 28.0], [1400.0, 20.0], [1500.0, 17.0], [100.0, 671.0], [400.0, 366.0], [1600.0, 14.0], [1700.0, 8.0], [1900.0, 5.0], [500.0, 295.0], [2000.0, 6.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 2400.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 63.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 4128.0, "series": [{"data": [[0.0, 4128.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1071.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 63.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.967649173256651, "minX": 1.60401636E12, "maxY": 10.0, "series": [{"data": [[1.60401642E12, 10.0], [1.60401648E12, 9.967649173256651], [1.60401636E12, 9.983493810178816]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60401648E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 303.2897445672891, "minX": 1.0, "maxY": 2147.0, "series": [{"data": [[8.0, 1302.5], [4.0, 2118.0], [2.0, 2023.0], [1.0, 2147.0], [9.0, 460.0], [5.0, 713.3333333333334], [10.0, 303.2897445672891], [3.0, 1285.0], [6.0, 2083.0], [7.0, 583.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.98688711516533, 305.8323831242866]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 12179.783333333333, "minX": 1.60401636E12, "maxY": 1553090.6166666667, "series": [{"data": [[1.60401642E12, 1222975.4], [1.60401648E12, 1474887.25], [1.60401636E12, 1553090.6166666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60401642E12, 20766.033333333333], [1.60401648E12, 12179.783333333333], [1.60401636E12, 12545.133333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60401648E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 249.27720314439375, "minX": 1.60401636E12, "maxY": 371.28129298486914, "series": [{"data": [[1.60401642E12, 249.27720314439375], [1.60401648E12, 335.68943206326463], [1.60401636E12, 371.28129298486914]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60401648E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 248.98096814232525, "minX": 1.60401636E12, "maxY": 370.69601100412723, "series": [{"data": [[1.60401642E12, 248.98096814232525], [1.60401648E12, 335.17109992810884], [1.60401636E12, 370.69601100412723]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60401648E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.009345794392523376, "minX": 1.60401636E12, "maxY": 0.06533700137551589, "series": [{"data": [[1.60401642E12, 0.009929664873810518], [1.60401648E12, 0.009345794392523376], [1.60401636E12, 0.06533700137551589]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60401648E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 29.0, "minX": 1.60401636E12, "maxY": 2460.0, "series": [{"data": [[1.60401642E12, 2204.0], [1.60401648E12, 2460.0], [1.60401636E12, 2295.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60401642E12, 34.0], [1.60401648E12, 34.0], [1.60401636E12, 35.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60401642E12, 34.0], [1.60401648E12, 34.0], [1.60401636E12, 35.404500138759616]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60401642E12, 34.0], [1.60401648E12, 34.0], [1.60401636E12, 35.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60401642E12, 29.0], [1.60401648E12, 30.0], [1.60401636E12, 30.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60401642E12, 129.0], [1.60401648E12, 210.0], [1.60401636E12, 272.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60401648E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 47.0, "minX": 3.0, "maxY": 2147.0, "series": [{"data": [[3.0, 2147.0], [5.0, 2095.0], [6.0, 1215.0], [7.0, 1036.0], [9.0, 1351.0], [10.0, 685.5], [11.0, 920.0], [12.0, 678.5], [13.0, 676.0], [14.0, 667.0], [15.0, 544.0], [16.0, 459.0], [17.0, 486.0], [18.0, 590.0], [19.0, 517.0], [20.0, 471.5], [21.0, 393.5], [22.0, 408.5], [23.0, 324.5], [24.0, 408.5], [26.0, 424.0], [27.0, 299.0], [28.0, 388.5], [29.0, 268.5], [30.0, 283.0], [31.0, 242.0], [33.0, 230.0], [32.0, 382.5], [34.0, 83.5], [36.0, 206.0], [37.0, 260.0], [39.0, 98.5], [38.0, 78.5], [41.0, 99.5], [43.0, 191.0], [42.0, 81.5], [44.0, 242.5], [45.0, 157.5], [46.0, 160.0], [48.0, 82.0], [49.0, 67.5], [51.0, 171.5], [52.0, 93.0], [53.0, 150.0], [54.0, 79.0], [55.0, 65.0], [56.0, 81.0], [57.0, 89.0], [59.0, 129.0], [60.0, 132.0], [61.0, 129.0], [63.0, 47.0], [65.0, 81.0], [64.0, 78.0], [66.0, 124.0], [67.0, 150.0], [70.0, 71.0], [71.0, 73.0], [73.0, 92.5], [74.0, 140.0], [81.0, 132.0], [82.0, 81.0], [91.0, 74.0], [88.0, 69.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 91.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 47.0, "minX": 3.0, "maxY": 2147.0, "series": [{"data": [[3.0, 2147.0], [5.0, 2094.0], [6.0, 1213.5], [7.0, 1034.0], [9.0, 1350.0], [10.0, 684.5], [11.0, 917.0], [12.0, 678.5], [13.0, 676.0], [14.0, 666.5], [15.0, 544.0], [16.0, 458.0], [17.0, 486.0], [18.0, 589.5], [19.0, 516.5], [20.0, 470.5], [21.0, 392.5], [22.0, 408.5], [23.0, 324.0], [24.0, 408.0], [26.0, 424.0], [27.0, 298.0], [28.0, 388.5], [29.0, 268.0], [30.0, 281.5], [31.0, 242.0], [33.0, 229.0], [32.0, 382.5], [34.0, 83.5], [36.0, 206.0], [37.0, 260.0], [39.0, 98.5], [38.0, 78.5], [41.0, 99.5], [43.0, 191.0], [42.0, 81.5], [44.0, 242.0], [45.0, 157.5], [46.0, 160.0], [48.0, 82.0], [49.0, 67.5], [51.0, 171.5], [52.0, 92.0], [53.0, 149.0], [54.0, 79.0], [55.0, 65.0], [56.0, 81.0], [57.0, 89.0], [59.0, 129.0], [60.0, 132.0], [61.0, 129.0], [63.0, 47.0], [65.0, 81.0], [64.0, 77.5], [66.0, 123.0], [67.0, 150.0], [70.0, 71.0], [71.0, 73.0], [73.0, 92.5], [74.0, 139.5], [81.0, 132.0], [82.0, 81.0], [91.0, 74.0], [88.0, 69.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 91.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 23.016666666666666, "minX": 1.60401636E12, "maxY": 40.28333333333333, "series": [{"data": [[1.60401642E12, 40.28333333333333], [1.60401648E12, 23.016666666666666], [1.60401636E12, 24.4]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60401648E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 23.183333333333334, "minX": 1.60401636E12, "maxY": 40.28333333333333, "series": [{"data": [[1.60401642E12, 40.28333333333333], [1.60401648E12, 23.183333333333334], [1.60401636E12, 24.233333333333334]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60401648E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 23.183333333333334, "minX": 1.60401636E12, "maxY": 40.28333333333333, "series": [{"data": [[1.60401642E12, 40.28333333333333], [1.60401648E12, 23.183333333333334], [1.60401636E12, 24.233333333333334]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60401648E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 23.183333333333334, "minX": 1.60401636E12, "maxY": 40.28333333333333, "series": [{"data": [[1.60401642E12, 40.28333333333333], [1.60401648E12, 23.183333333333334], [1.60401636E12, 24.233333333333334]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60401648E12, "title": "Total Transactions Per Second"}},
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

