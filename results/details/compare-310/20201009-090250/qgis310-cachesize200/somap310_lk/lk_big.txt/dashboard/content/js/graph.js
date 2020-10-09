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
        data: {"result": {"minY": 27.0, "minX": 0.0, "maxY": 3324.0, "series": [{"data": [[0.0, 27.0], [0.1, 28.0], [0.2, 29.0], [0.3, 29.0], [0.4, 29.0], [0.5, 30.0], [0.6, 30.0], [0.7, 30.0], [0.8, 30.0], [0.9, 30.0], [1.0, 31.0], [1.1, 31.0], [1.2, 31.0], [1.3, 31.0], [1.4, 32.0], [1.5, 32.0], [1.6, 32.0], [1.7, 32.0], [1.8, 32.0], [1.9, 32.0], [2.0, 32.0], [2.1, 33.0], [2.2, 33.0], [2.3, 33.0], [2.4, 33.0], [2.5, 33.0], [2.6, 33.0], [2.7, 33.0], [2.8, 33.0], [2.9, 33.0], [3.0, 33.0], [3.1, 34.0], [3.2, 34.0], [3.3, 34.0], [3.4, 34.0], [3.5, 34.0], [3.6, 34.0], [3.7, 34.0], [3.8, 34.0], [3.9, 34.0], [4.0, 34.0], [4.1, 34.0], [4.2, 34.0], [4.3, 34.0], [4.4, 34.0], [4.5, 35.0], [4.6, 35.0], [4.7, 35.0], [4.8, 35.0], [4.9, 35.0], [5.0, 35.0], [5.1, 35.0], [5.2, 35.0], [5.3, 35.0], [5.4, 35.0], [5.5, 35.0], [5.6, 35.0], [5.7, 35.0], [5.8, 35.0], [5.9, 36.0], [6.0, 36.0], [6.1, 36.0], [6.2, 36.0], [6.3, 36.0], [6.4, 36.0], [6.5, 36.0], [6.6, 36.0], [6.7, 36.0], [6.8, 36.0], [6.9, 36.0], [7.0, 36.0], [7.1, 36.0], [7.2, 36.0], [7.3, 36.0], [7.4, 37.0], [7.5, 37.0], [7.6, 37.0], [7.7, 37.0], [7.8, 37.0], [7.9, 37.0], [8.0, 37.0], [8.1, 37.0], [8.2, 37.0], [8.3, 37.0], [8.4, 37.0], [8.5, 37.0], [8.6, 37.0], [8.7, 37.0], [8.8, 37.0], [8.9, 37.0], [9.0, 38.0], [9.1, 38.0], [9.2, 38.0], [9.3, 38.0], [9.4, 38.0], [9.5, 38.0], [9.6, 38.0], [9.7, 38.0], [9.8, 38.0], [9.9, 38.0], [10.0, 38.0], [10.1, 38.0], [10.2, 38.0], [10.3, 38.0], [10.4, 39.0], [10.5, 39.0], [10.6, 39.0], [10.7, 39.0], [10.8, 39.0], [10.9, 39.0], [11.0, 39.0], [11.1, 39.0], [11.2, 39.0], [11.3, 39.0], [11.4, 39.0], [11.5, 39.0], [11.6, 39.0], [11.7, 39.0], [11.8, 40.0], [11.9, 40.0], [12.0, 40.0], [12.1, 40.0], [12.2, 40.0], [12.3, 40.0], [12.4, 40.0], [12.5, 40.0], [12.6, 40.0], [12.7, 40.0], [12.8, 40.0], [12.9, 40.0], [13.0, 40.0], [13.1, 40.0], [13.2, 41.0], [13.3, 41.0], [13.4, 41.0], [13.5, 41.0], [13.6, 41.0], [13.7, 41.0], [13.8, 41.0], [13.9, 41.0], [14.0, 41.0], [14.1, 41.0], [14.2, 41.0], [14.3, 41.0], [14.4, 41.0], [14.5, 41.0], [14.6, 42.0], [14.7, 42.0], [14.8, 42.0], [14.9, 42.0], [15.0, 42.0], [15.1, 42.0], [15.2, 42.0], [15.3, 42.0], [15.4, 43.0], [15.5, 43.0], [15.6, 43.0], [15.7, 43.0], [15.8, 43.0], [15.9, 43.0], [16.0, 44.0], [16.1, 44.0], [16.2, 44.0], [16.3, 44.0], [16.4, 44.0], [16.5, 44.0], [16.6, 45.0], [16.7, 45.0], [16.8, 45.0], [16.9, 45.0], [17.0, 45.0], [17.1, 46.0], [17.2, 46.0], [17.3, 46.0], [17.4, 46.0], [17.5, 47.0], [17.6, 47.0], [17.7, 47.0], [17.8, 48.0], [17.9, 48.0], [18.0, 48.0], [18.1, 48.0], [18.2, 49.0], [18.3, 49.0], [18.4, 50.0], [18.5, 50.0], [18.6, 50.0], [18.7, 51.0], [18.8, 51.0], [18.9, 52.0], [19.0, 52.0], [19.1, 53.0], [19.2, 53.0], [19.3, 53.0], [19.4, 54.0], [19.5, 54.0], [19.6, 55.0], [19.7, 55.0], [19.8, 55.0], [19.9, 56.0], [20.0, 56.0], [20.1, 56.0], [20.2, 56.0], [20.3, 56.0], [20.4, 57.0], [20.5, 57.0], [20.6, 57.0], [20.7, 58.0], [20.8, 58.0], [20.9, 58.0], [21.0, 58.0], [21.1, 58.0], [21.2, 59.0], [21.3, 59.0], [21.4, 59.0], [21.5, 59.0], [21.6, 59.0], [21.7, 60.0], [21.8, 60.0], [21.9, 60.0], [22.0, 60.0], [22.1, 60.0], [22.2, 60.0], [22.3, 61.0], [22.4, 61.0], [22.5, 61.0], [22.6, 61.0], [22.7, 61.0], [22.8, 62.0], [22.9, 62.0], [23.0, 62.0], [23.1, 62.0], [23.2, 62.0], [23.3, 62.0], [23.4, 63.0], [23.5, 63.0], [23.6, 63.0], [23.7, 63.0], [23.8, 64.0], [23.9, 64.0], [24.0, 64.0], [24.1, 64.0], [24.2, 64.0], [24.3, 64.0], [24.4, 65.0], [24.5, 65.0], [24.6, 65.0], [24.7, 65.0], [24.8, 65.0], [24.9, 66.0], [25.0, 66.0], [25.1, 66.0], [25.2, 66.0], [25.3, 66.0], [25.4, 67.0], [25.5, 67.0], [25.6, 67.0], [25.7, 67.0], [25.8, 67.0], [25.9, 67.0], [26.0, 67.0], [26.1, 68.0], [26.2, 68.0], [26.3, 68.0], [26.4, 68.0], [26.5, 68.0], [26.6, 69.0], [26.7, 69.0], [26.8, 69.0], [26.9, 69.0], [27.0, 69.0], [27.1, 70.0], [27.2, 70.0], [27.3, 70.0], [27.4, 70.0], [27.5, 70.0], [27.6, 70.0], [27.7, 70.0], [27.8, 70.0], [27.9, 71.0], [28.0, 71.0], [28.1, 71.0], [28.2, 71.0], [28.3, 71.0], [28.4, 71.0], [28.5, 71.0], [28.6, 71.0], [28.7, 71.0], [28.8, 72.0], [28.9, 72.0], [29.0, 72.0], [29.1, 72.0], [29.2, 72.0], [29.3, 72.0], [29.4, 72.0], [29.5, 73.0], [29.6, 73.0], [29.7, 73.0], [29.8, 73.0], [29.9, 73.0], [30.0, 73.0], [30.1, 73.0], [30.2, 73.0], [30.3, 74.0], [30.4, 74.0], [30.5, 74.0], [30.6, 74.0], [30.7, 74.0], [30.8, 74.0], [30.9, 74.0], [31.0, 75.0], [31.1, 75.0], [31.2, 75.0], [31.3, 75.0], [31.4, 75.0], [31.5, 75.0], [31.6, 75.0], [31.7, 76.0], [31.8, 76.0], [31.9, 76.0], [32.0, 76.0], [32.1, 76.0], [32.2, 76.0], [32.3, 76.0], [32.4, 76.0], [32.5, 76.0], [32.6, 77.0], [32.7, 77.0], [32.8, 77.0], [32.9, 77.0], [33.0, 77.0], [33.1, 77.0], [33.2, 77.0], [33.3, 78.0], [33.4, 78.0], [33.5, 78.0], [33.6, 78.0], [33.7, 78.0], [33.8, 78.0], [33.9, 78.0], [34.0, 78.0], [34.1, 78.0], [34.2, 79.0], [34.3, 79.0], [34.4, 79.0], [34.5, 79.0], [34.6, 79.0], [34.7, 80.0], [34.8, 80.0], [34.9, 80.0], [35.0, 80.0], [35.1, 80.0], [35.2, 81.0], [35.3, 81.0], [35.4, 81.0], [35.5, 81.0], [35.6, 81.0], [35.7, 82.0], [35.8, 82.0], [35.9, 82.0], [36.0, 82.0], [36.1, 83.0], [36.2, 83.0], [36.3, 83.0], [36.4, 83.0], [36.5, 84.0], [36.6, 84.0], [36.7, 84.0], [36.8, 84.0], [36.9, 84.0], [37.0, 85.0], [37.1, 85.0], [37.2, 85.0], [37.3, 86.0], [37.4, 86.0], [37.5, 86.0], [37.6, 86.0], [37.7, 86.0], [37.8, 87.0], [37.9, 87.0], [38.0, 87.0], [38.1, 88.0], [38.2, 88.0], [38.3, 88.0], [38.4, 89.0], [38.5, 89.0], [38.6, 90.0], [38.7, 90.0], [38.8, 90.0], [38.9, 91.0], [39.0, 92.0], [39.1, 92.0], [39.2, 92.0], [39.3, 93.0], [39.4, 94.0], [39.5, 95.0], [39.6, 95.0], [39.7, 96.0], [39.8, 96.0], [39.9, 97.0], [40.0, 97.0], [40.1, 98.0], [40.2, 99.0], [40.3, 100.0], [40.4, 101.0], [40.5, 102.0], [40.6, 102.0], [40.7, 103.0], [40.8, 103.0], [40.9, 104.0], [41.0, 105.0], [41.1, 106.0], [41.2, 106.0], [41.3, 107.0], [41.4, 108.0], [41.5, 108.0], [41.6, 109.0], [41.7, 109.0], [41.8, 110.0], [41.9, 111.0], [42.0, 111.0], [42.1, 112.0], [42.2, 112.0], [42.3, 113.0], [42.4, 113.0], [42.5, 114.0], [42.6, 114.0], [42.7, 115.0], [42.8, 116.0], [42.9, 117.0], [43.0, 117.0], [43.1, 118.0], [43.2, 119.0], [43.3, 119.0], [43.4, 120.0], [43.5, 120.0], [43.6, 121.0], [43.7, 122.0], [43.8, 123.0], [43.9, 123.0], [44.0, 124.0], [44.1, 124.0], [44.2, 125.0], [44.3, 126.0], [44.4, 126.0], [44.5, 127.0], [44.6, 127.0], [44.7, 128.0], [44.8, 128.0], [44.9, 129.0], [45.0, 129.0], [45.1, 130.0], [45.2, 130.0], [45.3, 131.0], [45.4, 132.0], [45.5, 132.0], [45.6, 134.0], [45.7, 134.0], [45.8, 135.0], [45.9, 136.0], [46.0, 138.0], [46.1, 139.0], [46.2, 140.0], [46.3, 141.0], [46.4, 141.0], [46.5, 142.0], [46.6, 144.0], [46.7, 144.0], [46.8, 146.0], [46.9, 146.0], [47.0, 147.0], [47.1, 148.0], [47.2, 150.0], [47.3, 150.0], [47.4, 151.0], [47.5, 153.0], [47.6, 153.0], [47.7, 154.0], [47.8, 155.0], [47.9, 156.0], [48.0, 157.0], [48.1, 159.0], [48.2, 160.0], [48.3, 161.0], [48.4, 162.0], [48.5, 162.0], [48.6, 163.0], [48.7, 164.0], [48.8, 164.0], [48.9, 166.0], [49.0, 167.0], [49.1, 167.0], [49.2, 168.0], [49.3, 169.0], [49.4, 170.0], [49.5, 171.0], [49.6, 172.0], [49.7, 173.0], [49.8, 174.0], [49.9, 175.0], [50.0, 176.0], [50.1, 176.0], [50.2, 177.0], [50.3, 178.0], [50.4, 179.0], [50.5, 179.0], [50.6, 180.0], [50.7, 181.0], [50.8, 182.0], [50.9, 183.0], [51.0, 184.0], [51.1, 184.0], [51.2, 184.0], [51.3, 185.0], [51.4, 186.0], [51.5, 187.0], [51.6, 187.0], [51.7, 188.0], [51.8, 189.0], [51.9, 190.0], [52.0, 190.0], [52.1, 191.0], [52.2, 192.0], [52.3, 193.0], [52.4, 193.0], [52.5, 194.0], [52.6, 195.0], [52.7, 196.0], [52.8, 196.0], [52.9, 197.0], [53.0, 199.0], [53.1, 199.0], [53.2, 200.0], [53.3, 200.0], [53.4, 201.0], [53.5, 202.0], [53.6, 202.0], [53.7, 203.0], [53.8, 204.0], [53.9, 205.0], [54.0, 206.0], [54.1, 207.0], [54.2, 207.0], [54.3, 208.0], [54.4, 209.0], [54.5, 210.0], [54.6, 211.0], [54.7, 211.0], [54.8, 212.0], [54.9, 213.0], [55.0, 213.0], [55.1, 214.0], [55.2, 215.0], [55.3, 216.0], [55.4, 216.0], [55.5, 217.0], [55.6, 219.0], [55.7, 219.0], [55.8, 220.0], [55.9, 221.0], [56.0, 222.0], [56.1, 223.0], [56.2, 223.0], [56.3, 224.0], [56.4, 225.0], [56.5, 226.0], [56.6, 226.0], [56.7, 226.0], [56.8, 227.0], [56.9, 228.0], [57.0, 229.0], [57.1, 230.0], [57.2, 231.0], [57.3, 232.0], [57.4, 233.0], [57.5, 234.0], [57.6, 234.0], [57.7, 235.0], [57.8, 238.0], [57.9, 238.0], [58.0, 240.0], [58.1, 241.0], [58.2, 242.0], [58.3, 243.0], [58.4, 243.0], [58.5, 244.0], [58.6, 244.0], [58.7, 245.0], [58.8, 246.0], [58.9, 246.0], [59.0, 247.0], [59.1, 248.0], [59.2, 248.0], [59.3, 249.0], [59.4, 250.0], [59.5, 251.0], [59.6, 251.0], [59.7, 252.0], [59.8, 252.0], [59.9, 253.0], [60.0, 255.0], [60.1, 256.0], [60.2, 256.0], [60.3, 258.0], [60.4, 258.0], [60.5, 260.0], [60.6, 260.0], [60.7, 261.0], [60.8, 263.0], [60.9, 264.0], [61.0, 265.0], [61.1, 265.0], [61.2, 267.0], [61.3, 268.0], [61.4, 270.0], [61.5, 270.0], [61.6, 271.0], [61.7, 273.0], [61.8, 275.0], [61.9, 276.0], [62.0, 277.0], [62.1, 277.0], [62.2, 279.0], [62.3, 280.0], [62.4, 281.0], [62.5, 283.0], [62.6, 284.0], [62.7, 285.0], [62.8, 286.0], [62.9, 287.0], [63.0, 288.0], [63.1, 289.0], [63.2, 289.0], [63.3, 291.0], [63.4, 292.0], [63.5, 293.0], [63.6, 295.0], [63.7, 296.0], [63.8, 297.0], [63.9, 298.0], [64.0, 301.0], [64.1, 303.0], [64.2, 304.0], [64.3, 305.0], [64.4, 306.0], [64.5, 307.0], [64.6, 308.0], [64.7, 309.0], [64.8, 310.0], [64.9, 312.0], [65.0, 313.0], [65.1, 314.0], [65.2, 316.0], [65.3, 317.0], [65.4, 318.0], [65.5, 320.0], [65.6, 321.0], [65.7, 323.0], [65.8, 323.0], [65.9, 325.0], [66.0, 326.0], [66.1, 328.0], [66.2, 329.0], [66.3, 331.0], [66.4, 332.0], [66.5, 334.0], [66.6, 335.0], [66.7, 336.0], [66.8, 337.0], [66.9, 339.0], [67.0, 341.0], [67.1, 343.0], [67.2, 344.0], [67.3, 345.0], [67.4, 346.0], [67.5, 347.0], [67.6, 347.0], [67.7, 348.0], [67.8, 350.0], [67.9, 351.0], [68.0, 352.0], [68.1, 354.0], [68.2, 355.0], [68.3, 356.0], [68.4, 357.0], [68.5, 358.0], [68.6, 360.0], [68.7, 362.0], [68.8, 363.0], [68.9, 364.0], [69.0, 365.0], [69.1, 366.0], [69.2, 369.0], [69.3, 370.0], [69.4, 372.0], [69.5, 373.0], [69.6, 374.0], [69.7, 375.0], [69.8, 377.0], [69.9, 380.0], [70.0, 381.0], [70.1, 382.0], [70.2, 384.0], [70.3, 386.0], [70.4, 387.0], [70.5, 388.0], [70.6, 390.0], [70.7, 390.0], [70.8, 391.0], [70.9, 393.0], [71.0, 395.0], [71.1, 396.0], [71.2, 398.0], [71.3, 398.0], [71.4, 401.0], [71.5, 402.0], [71.6, 404.0], [71.7, 406.0], [71.8, 409.0], [71.9, 410.0], [72.0, 411.0], [72.1, 412.0], [72.2, 413.0], [72.3, 414.0], [72.4, 415.0], [72.5, 416.0], [72.6, 418.0], [72.7, 420.0], [72.8, 422.0], [72.9, 424.0], [73.0, 425.0], [73.1, 427.0], [73.2, 427.0], [73.3, 428.0], [73.4, 430.0], [73.5, 431.0], [73.6, 432.0], [73.7, 433.0], [73.8, 435.0], [73.9, 437.0], [74.0, 438.0], [74.1, 441.0], [74.2, 442.0], [74.3, 444.0], [74.4, 446.0], [74.5, 448.0], [74.6, 449.0], [74.7, 450.0], [74.8, 451.0], [74.9, 452.0], [75.0, 453.0], [75.1, 454.0], [75.2, 457.0], [75.3, 459.0], [75.4, 460.0], [75.5, 460.0], [75.6, 463.0], [75.7, 464.0], [75.8, 466.0], [75.9, 466.0], [76.0, 469.0], [76.1, 469.0], [76.2, 472.0], [76.3, 474.0], [76.4, 475.0], [76.5, 476.0], [76.6, 477.0], [76.7, 479.0], [76.8, 480.0], [76.9, 483.0], [77.0, 484.0], [77.1, 485.0], [77.2, 487.0], [77.3, 489.0], [77.4, 491.0], [77.5, 492.0], [77.6, 494.0], [77.7, 495.0], [77.8, 497.0], [77.9, 498.0], [78.0, 499.0], [78.1, 501.0], [78.2, 505.0], [78.3, 506.0], [78.4, 509.0], [78.5, 511.0], [78.6, 513.0], [78.7, 514.0], [78.8, 516.0], [78.9, 518.0], [79.0, 519.0], [79.1, 521.0], [79.2, 523.0], [79.3, 524.0], [79.4, 525.0], [79.5, 526.0], [79.6, 528.0], [79.7, 529.0], [79.8, 531.0], [79.9, 532.0], [80.0, 533.0], [80.1, 534.0], [80.2, 535.0], [80.3, 536.0], [80.4, 539.0], [80.5, 542.0], [80.6, 544.0], [80.7, 546.0], [80.8, 547.0], [80.9, 550.0], [81.0, 552.0], [81.1, 553.0], [81.2, 554.0], [81.3, 555.0], [81.4, 558.0], [81.5, 560.0], [81.6, 561.0], [81.7, 563.0], [81.8, 565.0], [81.9, 566.0], [82.0, 569.0], [82.1, 570.0], [82.2, 572.0], [82.3, 574.0], [82.4, 576.0], [82.5, 577.0], [82.6, 580.0], [82.7, 583.0], [82.8, 586.0], [82.9, 587.0], [83.0, 590.0], [83.1, 592.0], [83.2, 593.0], [83.3, 595.0], [83.4, 596.0], [83.5, 597.0], [83.6, 600.0], [83.7, 603.0], [83.8, 604.0], [83.9, 606.0], [84.0, 608.0], [84.1, 610.0], [84.2, 613.0], [84.3, 615.0], [84.4, 619.0], [84.5, 621.0], [84.6, 623.0], [84.7, 624.0], [84.8, 626.0], [84.9, 629.0], [85.0, 632.0], [85.1, 635.0], [85.2, 637.0], [85.3, 639.0], [85.4, 641.0], [85.5, 642.0], [85.6, 644.0], [85.7, 646.0], [85.8, 649.0], [85.9, 650.0], [86.0, 652.0], [86.1, 655.0], [86.2, 657.0], [86.3, 658.0], [86.4, 660.0], [86.5, 662.0], [86.6, 664.0], [86.7, 665.0], [86.8, 667.0], [86.9, 667.0], [87.0, 669.0], [87.1, 671.0], [87.2, 673.0], [87.3, 675.0], [87.4, 678.0], [87.5, 680.0], [87.6, 681.0], [87.7, 686.0], [87.8, 689.0], [87.9, 692.0], [88.0, 696.0], [88.1, 698.0], [88.2, 702.0], [88.3, 705.0], [88.4, 706.0], [88.5, 709.0], [88.6, 713.0], [88.7, 715.0], [88.8, 716.0], [88.9, 719.0], [89.0, 720.0], [89.1, 721.0], [89.2, 724.0], [89.3, 730.0], [89.4, 733.0], [89.5, 735.0], [89.6, 736.0], [89.7, 738.0], [89.8, 740.0], [89.9, 742.0], [90.0, 746.0], [90.1, 748.0], [90.2, 752.0], [90.3, 753.0], [90.4, 755.0], [90.5, 757.0], [90.6, 760.0], [90.7, 764.0], [90.8, 768.0], [90.9, 772.0], [91.0, 774.0], [91.1, 776.0], [91.2, 783.0], [91.3, 786.0], [91.4, 787.0], [91.5, 794.0], [91.6, 797.0], [91.7, 802.0], [91.8, 806.0], [91.9, 812.0], [92.0, 818.0], [92.1, 822.0], [92.2, 825.0], [92.3, 829.0], [92.4, 837.0], [92.5, 841.0], [92.6, 845.0], [92.7, 850.0], [92.8, 852.0], [92.9, 854.0], [93.0, 859.0], [93.1, 870.0], [93.2, 874.0], [93.3, 879.0], [93.4, 885.0], [93.5, 889.0], [93.6, 893.0], [93.7, 898.0], [93.8, 903.0], [93.9, 908.0], [94.0, 913.0], [94.1, 916.0], [94.2, 921.0], [94.3, 925.0], [94.4, 932.0], [94.5, 935.0], [94.6, 942.0], [94.7, 945.0], [94.8, 950.0], [94.9, 955.0], [95.0, 961.0], [95.1, 964.0], [95.2, 970.0], [95.3, 980.0], [95.4, 988.0], [95.5, 991.0], [95.6, 996.0], [95.7, 1004.0], [95.8, 1015.0], [95.9, 1025.0], [96.0, 1030.0], [96.1, 1033.0], [96.2, 1040.0], [96.3, 1046.0], [96.4, 1051.0], [96.5, 1060.0], [96.6, 1070.0], [96.7, 1080.0], [96.8, 1093.0], [96.9, 1105.0], [97.0, 1116.0], [97.1, 1137.0], [97.2, 1151.0], [97.3, 1164.0], [97.4, 1177.0], [97.5, 1191.0], [97.6, 1209.0], [97.7, 1219.0], [97.8, 1239.0], [97.9, 1247.0], [98.0, 1261.0], [98.1, 1274.0], [98.2, 1295.0], [98.3, 1317.0], [98.4, 1344.0], [98.5, 1367.0], [98.6, 1396.0], [98.7, 1458.0], [98.8, 1489.0], [98.9, 1528.0], [99.0, 1555.0], [99.1, 1577.0], [99.2, 1651.0], [99.3, 1689.0], [99.4, 1751.0], [99.5, 1866.0], [99.6, 1977.0], [99.7, 2105.0], [99.8, 2177.0], [99.9, 2533.0], [100.0, 3324.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 2120.0, "series": [{"data": [[0.0, 2120.0], [600.0, 242.0], [700.0, 185.0], [800.0, 111.0], [900.0, 101.0], [1000.0, 60.0], [1100.0, 40.0], [1200.0, 34.0], [1300.0, 21.0], [1400.0, 12.0], [1500.0, 16.0], [100.0, 682.0], [1600.0, 9.0], [1700.0, 8.0], [1800.0, 4.0], [1900.0, 4.0], [2000.0, 4.0], [2100.0, 7.0], [2200.0, 1.0], [2400.0, 2.0], [2500.0, 2.0], [2700.0, 1.0], [200.0, 570.0], [3200.0, 2.0], [3300.0, 1.0], [300.0, 389.0], [400.0, 354.0], [500.0, 290.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3300.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 61.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 4117.0, "series": [{"data": [[0.0, 4117.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1094.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 61.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.726190476190478, "minX": 1.602237E12, "maxY": 10.0, "series": [{"data": [[1.60223706E12, 10.0], [1.60223712E12, 10.0], [1.60223718E12, 9.958410351201481], [1.602237E12, 9.726190476190478]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60223718E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 302.4069634703196, "minX": 1.0, "maxY": 3324.0, "series": [{"data": [[4.0, 1348.5], [8.0, 1348.5], [2.0, 3324.0], [1.0, 3275.0], [9.0, 1000.0], [5.0, 458.6666666666667], [10.0, 302.4069634703196], [6.0, 985.0], [3.0, 2281.0], [7.0, 1704.5]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.987101669195768, 305.86020485584294]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 708.05, "minX": 1.602237E12, "maxY": 1709829.9166666667, "series": [{"data": [[1.60223706E12, 1709829.9166666667], [1.60223712E12, 1408152.2333333334], [1.60223718E12, 1125401.4833333334], [1.602237E12, 47773.416666666664]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60223706E12, 15010.833333333334], [1.60223712E12, 20294.45], [1.60223718E12, 9566.216666666667], [1.602237E12, 708.05]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60223718E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 251.89312657166792, "minX": 1.602237E12, "maxY": 354.4510166358592, "series": [{"data": [[1.60223706E12, 347.79011627906954], [1.60223712E12, 251.89312657166792], [1.60223718E12, 354.4510166358592], [1.602237E12, 354.32142857142844]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60223718E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 251.62405699916184, "minX": 1.602237E12, "maxY": 354.0101663585945, "series": [{"data": [[1.60223706E12, 347.3517441860462], [1.60223712E12, 251.62405699916184], [1.60223718E12, 354.0101663585945], [1.602237E12, 353.9880952380954]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60223718E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.005867560771165145, "minX": 1.602237E12, "maxY": 1.3928571428571437, "series": [{"data": [[1.60223706E12, 0.007558139534883719], [1.60223712E12, 0.005867560771165145], [1.60223718E12, 0.008317929759704244], [1.602237E12, 1.3928571428571437]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60223718E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 27.0, "minX": 1.602237E12, "maxY": 3324.0, "series": [{"data": [[1.60223706E12, 2122.0], [1.60223712E12, 2199.0], [1.60223718E12, 3324.0], [1.602237E12, 1049.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60223706E12, 31.0], [1.60223712E12, 30.0], [1.60223718E12, 30.0], [1.602237E12, 32.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60223706E12, 31.0], [1.60223712E12, 30.0], [1.60223718E12, 30.0], [1.602237E12, 32.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60223706E12, 31.0], [1.60223712E12, 30.0], [1.60223718E12, 30.0], [1.602237E12, 32.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60223706E12, 27.0], [1.60223712E12, 28.0], [1.60223718E12, 28.0], [1.602237E12, 32.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60223706E12, 248.5], [1.60223712E12, 131.0], [1.60223718E12, 219.0], [1.602237E12, 213.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60223718E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 45.0, "minX": 1.0, "maxY": 3275.0, "series": [{"data": [[4.0, 1914.0], [5.0, 1944.0], [6.0, 1124.5], [8.0, 726.0], [9.0, 664.0], [10.0, 1055.5], [11.0, 469.0], [12.0, 716.0], [13.0, 742.0], [14.0, 603.0], [15.0, 588.0], [16.0, 615.5], [17.0, 495.0], [18.0, 506.0], [19.0, 532.0], [20.0, 518.5], [21.0, 358.0], [22.0, 410.0], [23.0, 396.0], [24.0, 424.5], [25.0, 296.0], [26.0, 411.0], [27.0, 398.0], [28.0, 230.0], [29.0, 326.0], [30.0, 273.0], [31.0, 223.5], [33.0, 346.0], [32.0, 263.5], [34.0, 255.5], [35.0, 233.0], [37.0, 142.0], [39.0, 147.0], [38.0, 229.0], [40.0, 82.5], [42.0, 88.5], [43.0, 71.0], [44.0, 101.5], [45.0, 79.0], [47.0, 214.0], [49.0, 75.5], [48.0, 130.5], [51.0, 81.0], [50.0, 203.5], [53.0, 94.0], [54.0, 110.0], [55.0, 45.0], [57.0, 82.0], [56.0, 86.0], [58.0, 79.0], [61.0, 81.5], [63.0, 127.0], [64.0, 81.0], [66.0, 128.5], [67.0, 91.0], [68.0, 71.0], [69.0, 108.0], [75.0, 114.0], [73.0, 78.0], [74.0, 78.0], [76.0, 124.0], [85.0, 71.0], [94.0, 69.5], [108.0, 83.5], [1.0, 3275.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 108.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 45.0, "minX": 1.0, "maxY": 3274.0, "series": [{"data": [[4.0, 1913.5], [5.0, 1944.0], [6.0, 1123.5], [8.0, 726.0], [9.0, 664.0], [10.0, 1054.0], [11.0, 468.5], [12.0, 714.0], [13.0, 741.0], [14.0, 602.5], [15.0, 588.0], [16.0, 614.5], [17.0, 495.0], [18.0, 505.5], [19.0, 531.0], [20.0, 518.0], [21.0, 358.0], [22.0, 409.0], [23.0, 396.0], [24.0, 424.0], [25.0, 293.0], [26.0, 409.0], [27.0, 397.0], [28.0, 229.5], [29.0, 326.0], [30.0, 273.0], [31.0, 223.0], [33.0, 346.0], [32.0, 263.5], [34.0, 255.5], [35.0, 233.0], [37.0, 141.5], [39.0, 147.0], [38.0, 229.0], [40.0, 82.5], [42.0, 88.5], [43.0, 71.0], [44.0, 101.5], [45.0, 79.0], [47.0, 214.0], [49.0, 75.5], [48.0, 130.0], [51.0, 81.0], [50.0, 203.0], [53.0, 94.0], [54.0, 110.0], [55.0, 45.0], [57.0, 82.0], [56.0, 86.0], [58.0, 79.0], [61.0, 81.5], [63.0, 127.0], [64.0, 81.0], [66.0, 128.0], [67.0, 91.0], [68.0, 71.0], [69.0, 107.0], [75.0, 114.0], [73.0, 78.0], [74.0, 78.0], [76.0, 124.0], [85.0, 71.0], [94.0, 69.5], [108.0, 83.5], [1.0, 3274.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 108.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1.5666666666666667, "minX": 1.602237E12, "maxY": 39.766666666666666, "series": [{"data": [[1.60223706E12, 28.666666666666668], [1.60223712E12, 39.766666666666666], [1.60223718E12, 17.866666666666667], [1.602237E12, 1.5666666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60223718E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1.4, "minX": 1.602237E12, "maxY": 39.766666666666666, "series": [{"data": [[1.60223706E12, 28.666666666666668], [1.60223712E12, 39.766666666666666], [1.60223718E12, 18.033333333333335], [1.602237E12, 1.4]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60223718E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.4, "minX": 1.602237E12, "maxY": 39.766666666666666, "series": [{"data": [[1.60223706E12, 28.666666666666668], [1.60223712E12, 39.766666666666666], [1.60223718E12, 18.033333333333335], [1.602237E12, 1.4]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60223718E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.4, "minX": 1.602237E12, "maxY": 39.766666666666666, "series": [{"data": [[1.60223706E12, 28.666666666666668], [1.60223712E12, 39.766666666666666], [1.60223718E12, 18.033333333333335], [1.602237E12, 1.4]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60223718E12, "title": "Total Transactions Per Second"}},
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

