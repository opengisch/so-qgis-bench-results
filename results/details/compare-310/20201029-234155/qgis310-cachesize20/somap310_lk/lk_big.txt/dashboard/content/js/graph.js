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
        data: {"result": {"minY": 29.0, "minX": 0.0, "maxY": 3380.0, "series": [{"data": [[0.0, 29.0], [0.1, 31.0], [0.2, 32.0], [0.3, 32.0], [0.4, 33.0], [0.5, 33.0], [0.6, 34.0], [0.7, 34.0], [0.8, 34.0], [0.9, 34.0], [1.0, 34.0], [1.1, 35.0], [1.2, 35.0], [1.3, 35.0], [1.4, 35.0], [1.5, 35.0], [1.6, 36.0], [1.7, 36.0], [1.8, 36.0], [1.9, 36.0], [2.0, 36.0], [2.1, 36.0], [2.2, 36.0], [2.3, 36.0], [2.4, 36.0], [2.5, 37.0], [2.6, 37.0], [2.7, 37.0], [2.8, 37.0], [2.9, 37.0], [3.0, 37.0], [3.1, 37.0], [3.2, 38.0], [3.3, 38.0], [3.4, 38.0], [3.5, 38.0], [3.6, 38.0], [3.7, 38.0], [3.8, 38.0], [3.9, 38.0], [4.0, 38.0], [4.1, 38.0], [4.2, 38.0], [4.3, 38.0], [4.4, 38.0], [4.5, 39.0], [4.6, 39.0], [4.7, 39.0], [4.8, 39.0], [4.9, 39.0], [5.0, 39.0], [5.1, 39.0], [5.2, 39.0], [5.3, 39.0], [5.4, 39.0], [5.5, 39.0], [5.6, 40.0], [5.7, 40.0], [5.8, 40.0], [5.9, 40.0], [6.0, 40.0], [6.1, 40.0], [6.2, 40.0], [6.3, 40.0], [6.4, 40.0], [6.5, 40.0], [6.6, 40.0], [6.7, 40.0], [6.8, 41.0], [6.9, 41.0], [7.0, 41.0], [7.1, 41.0], [7.2, 41.0], [7.3, 41.0], [7.4, 41.0], [7.5, 41.0], [7.6, 41.0], [7.7, 41.0], [7.8, 41.0], [7.9, 42.0], [8.0, 42.0], [8.1, 42.0], [8.2, 42.0], [8.3, 42.0], [8.4, 42.0], [8.5, 42.0], [8.6, 42.0], [8.7, 42.0], [8.8, 42.0], [8.9, 42.0], [9.0, 42.0], [9.1, 42.0], [9.2, 42.0], [9.3, 43.0], [9.4, 43.0], [9.5, 43.0], [9.6, 43.0], [9.7, 43.0], [9.8, 43.0], [9.9, 43.0], [10.0, 43.0], [10.1, 43.0], [10.2, 43.0], [10.3, 43.0], [10.4, 43.0], [10.5, 44.0], [10.6, 44.0], [10.7, 44.0], [10.8, 44.0], [10.9, 44.0], [11.0, 44.0], [11.1, 44.0], [11.2, 44.0], [11.3, 44.0], [11.4, 44.0], [11.5, 44.0], [11.6, 45.0], [11.7, 45.0], [11.8, 45.0], [11.9, 45.0], [12.0, 45.0], [12.1, 45.0], [12.2, 45.0], [12.3, 46.0], [12.4, 46.0], [12.5, 46.0], [12.6, 46.0], [12.7, 46.0], [12.8, 46.0], [12.9, 46.0], [13.0, 46.0], [13.1, 46.0], [13.2, 47.0], [13.3, 47.0], [13.4, 47.0], [13.5, 47.0], [13.6, 47.0], [13.7, 47.0], [13.8, 47.0], [13.9, 47.0], [14.0, 48.0], [14.1, 48.0], [14.2, 48.0], [14.3, 48.0], [14.4, 48.0], [14.5, 48.0], [14.6, 49.0], [14.7, 49.0], [14.8, 49.0], [14.9, 49.0], [15.0, 49.0], [15.1, 49.0], [15.2, 50.0], [15.3, 50.0], [15.4, 50.0], [15.5, 50.0], [15.6, 51.0], [15.7, 51.0], [15.8, 51.0], [15.9, 51.0], [16.0, 52.0], [16.1, 52.0], [16.2, 52.0], [16.3, 53.0], [16.4, 53.0], [16.5, 54.0], [16.6, 54.0], [16.7, 54.0], [16.8, 55.0], [16.9, 55.0], [17.0, 55.0], [17.1, 55.0], [17.2, 56.0], [17.3, 56.0], [17.4, 57.0], [17.5, 57.0], [17.6, 58.0], [17.7, 58.0], [17.8, 59.0], [17.9, 59.0], [18.0, 60.0], [18.1, 60.0], [18.2, 60.0], [18.3, 61.0], [18.4, 61.0], [18.5, 61.0], [18.6, 61.0], [18.7, 62.0], [18.8, 62.0], [18.9, 62.0], [19.0, 62.0], [19.1, 63.0], [19.2, 63.0], [19.3, 63.0], [19.4, 63.0], [19.5, 64.0], [19.6, 64.0], [19.7, 64.0], [19.8, 64.0], [19.9, 64.0], [20.0, 65.0], [20.1, 65.0], [20.2, 65.0], [20.3, 65.0], [20.4, 66.0], [20.5, 66.0], [20.6, 66.0], [20.7, 66.0], [20.8, 66.0], [20.9, 67.0], [21.0, 67.0], [21.1, 67.0], [21.2, 67.0], [21.3, 68.0], [21.4, 68.0], [21.5, 68.0], [21.6, 68.0], [21.7, 68.0], [21.8, 69.0], [21.9, 69.0], [22.0, 69.0], [22.1, 69.0], [22.2, 69.0], [22.3, 70.0], [22.4, 70.0], [22.5, 70.0], [22.6, 70.0], [22.7, 70.0], [22.8, 70.0], [22.9, 71.0], [23.0, 71.0], [23.1, 71.0], [23.2, 71.0], [23.3, 71.0], [23.4, 71.0], [23.5, 72.0], [23.6, 72.0], [23.7, 72.0], [23.8, 72.0], [23.9, 72.0], [24.0, 72.0], [24.1, 72.0], [24.2, 72.0], [24.3, 72.0], [24.4, 72.0], [24.5, 73.0], [24.6, 73.0], [24.7, 73.0], [24.8, 73.0], [24.9, 73.0], [25.0, 73.0], [25.1, 73.0], [25.2, 73.0], [25.3, 73.0], [25.4, 73.0], [25.5, 73.0], [25.6, 74.0], [25.7, 74.0], [25.8, 74.0], [25.9, 74.0], [26.0, 74.0], [26.1, 74.0], [26.2, 74.0], [26.3, 74.0], [26.4, 75.0], [26.5, 75.0], [26.6, 75.0], [26.7, 75.0], [26.8, 75.0], [26.9, 75.0], [27.0, 76.0], [27.1, 76.0], [27.2, 76.0], [27.3, 76.0], [27.4, 76.0], [27.5, 76.0], [27.6, 76.0], [27.7, 77.0], [27.8, 77.0], [27.9, 77.0], [28.0, 77.0], [28.1, 77.0], [28.2, 77.0], [28.3, 77.0], [28.4, 77.0], [28.5, 77.0], [28.6, 77.0], [28.7, 78.0], [28.8, 78.0], [28.9, 78.0], [29.0, 78.0], [29.1, 78.0], [29.2, 78.0], [29.3, 78.0], [29.4, 79.0], [29.5, 79.0], [29.6, 79.0], [29.7, 79.0], [29.8, 79.0], [29.9, 79.0], [30.0, 79.0], [30.1, 79.0], [30.2, 80.0], [30.3, 80.0], [30.4, 80.0], [30.5, 80.0], [30.6, 80.0], [30.7, 80.0], [30.8, 80.0], [30.9, 80.0], [31.0, 81.0], [31.1, 81.0], [31.2, 81.0], [31.3, 81.0], [31.4, 81.0], [31.5, 81.0], [31.6, 81.0], [31.7, 82.0], [31.8, 82.0], [31.9, 82.0], [32.0, 82.0], [32.1, 82.0], [32.2, 82.0], [32.3, 82.0], [32.4, 83.0], [32.5, 83.0], [32.6, 83.0], [32.7, 83.0], [32.8, 83.0], [32.9, 83.0], [33.0, 83.0], [33.1, 84.0], [33.2, 84.0], [33.3, 84.0], [33.4, 84.0], [33.5, 84.0], [33.6, 84.0], [33.7, 84.0], [33.8, 85.0], [33.9, 85.0], [34.0, 85.0], [34.1, 85.0], [34.2, 85.0], [34.3, 86.0], [34.4, 86.0], [34.5, 86.0], [34.6, 86.0], [34.7, 86.0], [34.8, 86.0], [34.9, 87.0], [35.0, 87.0], [35.1, 87.0], [35.2, 87.0], [35.3, 88.0], [35.4, 88.0], [35.5, 88.0], [35.6, 89.0], [35.7, 89.0], [35.8, 89.0], [35.9, 89.0], [36.0, 89.0], [36.1, 89.0], [36.2, 90.0], [36.3, 90.0], [36.4, 90.0], [36.5, 91.0], [36.6, 91.0], [36.7, 91.0], [36.8, 92.0], [36.9, 92.0], [37.0, 92.0], [37.1, 92.0], [37.2, 93.0], [37.3, 93.0], [37.4, 93.0], [37.5, 93.0], [37.6, 94.0], [37.7, 94.0], [37.8, 96.0], [37.9, 96.0], [38.0, 97.0], [38.1, 97.0], [38.2, 98.0], [38.3, 98.0], [38.4, 98.0], [38.5, 99.0], [38.6, 99.0], [38.7, 100.0], [38.8, 100.0], [38.9, 100.0], [39.0, 101.0], [39.1, 101.0], [39.2, 102.0], [39.3, 102.0], [39.4, 103.0], [39.5, 104.0], [39.6, 104.0], [39.7, 104.0], [39.8, 105.0], [39.9, 105.0], [40.0, 105.0], [40.1, 106.0], [40.2, 106.0], [40.3, 107.0], [40.4, 108.0], [40.5, 109.0], [40.6, 109.0], [40.7, 109.0], [40.8, 110.0], [40.9, 110.0], [41.0, 111.0], [41.1, 111.0], [41.2, 112.0], [41.3, 113.0], [41.4, 113.0], [41.5, 114.0], [41.6, 114.0], [41.7, 115.0], [41.8, 115.0], [41.9, 116.0], [42.0, 117.0], [42.1, 117.0], [42.2, 118.0], [42.3, 118.0], [42.4, 119.0], [42.5, 120.0], [42.6, 120.0], [42.7, 121.0], [42.8, 121.0], [42.9, 122.0], [43.0, 123.0], [43.1, 124.0], [43.2, 125.0], [43.3, 125.0], [43.4, 126.0], [43.5, 127.0], [43.6, 128.0], [43.7, 128.0], [43.8, 129.0], [43.9, 130.0], [44.0, 131.0], [44.1, 131.0], [44.2, 132.0], [44.3, 132.0], [44.4, 132.0], [44.5, 134.0], [44.6, 135.0], [44.7, 135.0], [44.8, 136.0], [44.9, 136.0], [45.0, 136.0], [45.1, 137.0], [45.2, 137.0], [45.3, 138.0], [45.4, 138.0], [45.5, 139.0], [45.6, 141.0], [45.7, 142.0], [45.8, 143.0], [45.9, 144.0], [46.0, 145.0], [46.1, 146.0], [46.2, 147.0], [46.3, 148.0], [46.4, 149.0], [46.5, 149.0], [46.6, 150.0], [46.7, 151.0], [46.8, 151.0], [46.9, 152.0], [47.0, 154.0], [47.1, 155.0], [47.2, 156.0], [47.3, 157.0], [47.4, 158.0], [47.5, 159.0], [47.6, 159.0], [47.7, 160.0], [47.8, 161.0], [47.9, 163.0], [48.0, 163.0], [48.1, 165.0], [48.2, 165.0], [48.3, 168.0], [48.4, 169.0], [48.5, 169.0], [48.6, 169.0], [48.7, 171.0], [48.8, 171.0], [48.9, 173.0], [49.0, 174.0], [49.1, 175.0], [49.2, 176.0], [49.3, 177.0], [49.4, 178.0], [49.5, 179.0], [49.6, 180.0], [49.7, 181.0], [49.8, 181.0], [49.9, 182.0], [50.0, 183.0], [50.1, 184.0], [50.2, 185.0], [50.3, 185.0], [50.4, 185.0], [50.5, 186.0], [50.6, 186.0], [50.7, 187.0], [50.8, 189.0], [50.9, 189.0], [51.0, 190.0], [51.1, 191.0], [51.2, 192.0], [51.3, 193.0], [51.4, 194.0], [51.5, 195.0], [51.6, 196.0], [51.7, 197.0], [51.8, 197.0], [51.9, 198.0], [52.0, 198.0], [52.1, 199.0], [52.2, 200.0], [52.3, 201.0], [52.4, 202.0], [52.5, 202.0], [52.6, 202.0], [52.7, 203.0], [52.8, 203.0], [52.9, 204.0], [53.0, 205.0], [53.1, 205.0], [53.2, 206.0], [53.3, 207.0], [53.4, 208.0], [53.5, 209.0], [53.6, 209.0], [53.7, 210.0], [53.8, 211.0], [53.9, 212.0], [54.0, 212.0], [54.1, 213.0], [54.2, 214.0], [54.3, 214.0], [54.4, 216.0], [54.5, 218.0], [54.6, 219.0], [54.7, 220.0], [54.8, 221.0], [54.9, 222.0], [55.0, 223.0], [55.1, 224.0], [55.2, 225.0], [55.3, 225.0], [55.4, 226.0], [55.5, 227.0], [55.6, 227.0], [55.7, 228.0], [55.8, 229.0], [55.9, 229.0], [56.0, 231.0], [56.1, 231.0], [56.2, 232.0], [56.3, 233.0], [56.4, 234.0], [56.5, 236.0], [56.6, 236.0], [56.7, 237.0], [56.8, 238.0], [56.9, 239.0], [57.0, 240.0], [57.1, 240.0], [57.2, 241.0], [57.3, 242.0], [57.4, 243.0], [57.5, 243.0], [57.6, 244.0], [57.7, 245.0], [57.8, 246.0], [57.9, 247.0], [58.0, 247.0], [58.1, 249.0], [58.2, 250.0], [58.3, 251.0], [58.4, 251.0], [58.5, 252.0], [58.6, 252.0], [58.7, 253.0], [58.8, 254.0], [58.9, 255.0], [59.0, 256.0], [59.1, 258.0], [59.2, 260.0], [59.3, 260.0], [59.4, 261.0], [59.5, 262.0], [59.6, 263.0], [59.7, 263.0], [59.8, 265.0], [59.9, 267.0], [60.0, 267.0], [60.1, 268.0], [60.2, 269.0], [60.3, 270.0], [60.4, 272.0], [60.5, 273.0], [60.6, 274.0], [60.7, 275.0], [60.8, 277.0], [60.9, 277.0], [61.0, 278.0], [61.1, 279.0], [61.2, 279.0], [61.3, 281.0], [61.4, 283.0], [61.5, 285.0], [61.6, 286.0], [61.7, 286.0], [61.8, 287.0], [61.9, 288.0], [62.0, 289.0], [62.1, 291.0], [62.2, 292.0], [62.3, 293.0], [62.4, 294.0], [62.5, 295.0], [62.6, 296.0], [62.7, 297.0], [62.8, 299.0], [62.9, 301.0], [63.0, 303.0], [63.1, 305.0], [63.2, 306.0], [63.3, 307.0], [63.4, 308.0], [63.5, 310.0], [63.6, 312.0], [63.7, 312.0], [63.8, 314.0], [63.9, 315.0], [64.0, 316.0], [64.1, 317.0], [64.2, 319.0], [64.3, 320.0], [64.4, 321.0], [64.5, 322.0], [64.6, 324.0], [64.7, 325.0], [64.8, 326.0], [64.9, 328.0], [65.0, 330.0], [65.1, 331.0], [65.2, 332.0], [65.3, 334.0], [65.4, 337.0], [65.5, 338.0], [65.6, 339.0], [65.7, 340.0], [65.8, 341.0], [65.9, 342.0], [66.0, 344.0], [66.1, 346.0], [66.2, 347.0], [66.3, 349.0], [66.4, 350.0], [66.5, 352.0], [66.6, 354.0], [66.7, 355.0], [66.8, 357.0], [66.9, 358.0], [67.0, 360.0], [67.1, 362.0], [67.2, 363.0], [67.3, 365.0], [67.4, 366.0], [67.5, 367.0], [67.6, 368.0], [67.7, 370.0], [67.8, 371.0], [67.9, 371.0], [68.0, 373.0], [68.1, 373.0], [68.2, 374.0], [68.3, 374.0], [68.4, 375.0], [68.5, 376.0], [68.6, 378.0], [68.7, 379.0], [68.8, 380.0], [68.9, 381.0], [69.0, 382.0], [69.1, 383.0], [69.2, 384.0], [69.3, 384.0], [69.4, 385.0], [69.5, 386.0], [69.6, 387.0], [69.7, 389.0], [69.8, 390.0], [69.9, 392.0], [70.0, 394.0], [70.1, 396.0], [70.2, 397.0], [70.3, 399.0], [70.4, 401.0], [70.5, 402.0], [70.6, 403.0], [70.7, 404.0], [70.8, 405.0], [70.9, 407.0], [71.0, 408.0], [71.1, 408.0], [71.2, 411.0], [71.3, 412.0], [71.4, 413.0], [71.5, 415.0], [71.6, 416.0], [71.7, 417.0], [71.8, 419.0], [71.9, 420.0], [72.0, 422.0], [72.1, 424.0], [72.2, 425.0], [72.3, 426.0], [72.4, 427.0], [72.5, 428.0], [72.6, 429.0], [72.7, 429.0], [72.8, 430.0], [72.9, 431.0], [73.0, 433.0], [73.1, 435.0], [73.2, 436.0], [73.3, 437.0], [73.4, 438.0], [73.5, 439.0], [73.6, 440.0], [73.7, 441.0], [73.8, 442.0], [73.9, 444.0], [74.0, 445.0], [74.1, 446.0], [74.2, 449.0], [74.3, 450.0], [74.4, 451.0], [74.5, 452.0], [74.6, 452.0], [74.7, 453.0], [74.8, 454.0], [74.9, 456.0], [75.0, 456.0], [75.1, 457.0], [75.2, 459.0], [75.3, 460.0], [75.4, 461.0], [75.5, 462.0], [75.6, 464.0], [75.7, 465.0], [75.8, 468.0], [75.9, 468.0], [76.0, 470.0], [76.1, 472.0], [76.2, 474.0], [76.3, 475.0], [76.4, 477.0], [76.5, 479.0], [76.6, 481.0], [76.7, 481.0], [76.8, 483.0], [76.9, 485.0], [77.0, 485.0], [77.1, 487.0], [77.2, 488.0], [77.3, 490.0], [77.4, 491.0], [77.5, 493.0], [77.6, 494.0], [77.7, 497.0], [77.8, 499.0], [77.9, 500.0], [78.0, 501.0], [78.1, 502.0], [78.2, 503.0], [78.3, 506.0], [78.4, 508.0], [78.5, 508.0], [78.6, 512.0], [78.7, 513.0], [78.8, 515.0], [78.9, 517.0], [79.0, 519.0], [79.1, 522.0], [79.2, 524.0], [79.3, 525.0], [79.4, 527.0], [79.5, 528.0], [79.6, 530.0], [79.7, 532.0], [79.8, 534.0], [79.9, 535.0], [80.0, 535.0], [80.1, 537.0], [80.2, 538.0], [80.3, 540.0], [80.4, 541.0], [80.5, 541.0], [80.6, 543.0], [80.7, 544.0], [80.8, 547.0], [80.9, 548.0], [81.0, 551.0], [81.1, 553.0], [81.2, 554.0], [81.3, 555.0], [81.4, 557.0], [81.5, 559.0], [81.6, 562.0], [81.7, 563.0], [81.8, 566.0], [81.9, 569.0], [82.0, 570.0], [82.1, 573.0], [82.2, 574.0], [82.3, 576.0], [82.4, 577.0], [82.5, 578.0], [82.6, 580.0], [82.7, 582.0], [82.8, 584.0], [82.9, 589.0], [83.0, 590.0], [83.1, 593.0], [83.2, 594.0], [83.3, 598.0], [83.4, 599.0], [83.5, 600.0], [83.6, 601.0], [83.7, 603.0], [83.8, 606.0], [83.9, 609.0], [84.0, 611.0], [84.1, 613.0], [84.2, 614.0], [84.3, 616.0], [84.4, 620.0], [84.5, 621.0], [84.6, 624.0], [84.7, 625.0], [84.8, 629.0], [84.9, 630.0], [85.0, 633.0], [85.1, 635.0], [85.2, 636.0], [85.3, 639.0], [85.4, 641.0], [85.5, 643.0], [85.6, 645.0], [85.7, 646.0], [85.8, 647.0], [85.9, 650.0], [86.0, 651.0], [86.1, 652.0], [86.2, 653.0], [86.3, 655.0], [86.4, 657.0], [86.5, 658.0], [86.6, 659.0], [86.7, 661.0], [86.8, 663.0], [86.9, 664.0], [87.0, 666.0], [87.1, 669.0], [87.2, 672.0], [87.3, 675.0], [87.4, 677.0], [87.5, 679.0], [87.6, 683.0], [87.7, 684.0], [87.8, 690.0], [87.9, 692.0], [88.0, 697.0], [88.1, 698.0], [88.2, 704.0], [88.3, 708.0], [88.4, 710.0], [88.5, 711.0], [88.6, 716.0], [88.7, 717.0], [88.8, 720.0], [88.9, 722.0], [89.0, 725.0], [89.1, 727.0], [89.2, 729.0], [89.3, 735.0], [89.4, 739.0], [89.5, 741.0], [89.6, 743.0], [89.7, 750.0], [89.8, 754.0], [89.9, 756.0], [90.0, 759.0], [90.1, 762.0], [90.2, 765.0], [90.3, 767.0], [90.4, 770.0], [90.5, 777.0], [90.6, 781.0], [90.7, 784.0], [90.8, 789.0], [90.9, 792.0], [91.0, 795.0], [91.1, 797.0], [91.2, 800.0], [91.3, 805.0], [91.4, 809.0], [91.5, 811.0], [91.6, 813.0], [91.7, 819.0], [91.8, 823.0], [91.9, 826.0], [92.0, 829.0], [92.1, 832.0], [92.2, 834.0], [92.3, 841.0], [92.4, 848.0], [92.5, 853.0], [92.6, 858.0], [92.7, 861.0], [92.8, 864.0], [92.9, 867.0], [93.0, 873.0], [93.1, 880.0], [93.2, 885.0], [93.3, 895.0], [93.4, 900.0], [93.5, 903.0], [93.6, 906.0], [93.7, 908.0], [93.8, 915.0], [93.9, 919.0], [94.0, 925.0], [94.1, 927.0], [94.2, 935.0], [94.3, 943.0], [94.4, 947.0], [94.5, 951.0], [94.6, 959.0], [94.7, 965.0], [94.8, 968.0], [94.9, 977.0], [95.0, 982.0], [95.1, 996.0], [95.2, 1000.0], [95.3, 1005.0], [95.4, 1009.0], [95.5, 1022.0], [95.6, 1026.0], [95.7, 1030.0], [95.8, 1036.0], [95.9, 1042.0], [96.0, 1048.0], [96.1, 1052.0], [96.2, 1059.0], [96.3, 1068.0], [96.4, 1081.0], [96.5, 1084.0], [96.6, 1089.0], [96.7, 1100.0], [96.8, 1115.0], [96.9, 1135.0], [97.0, 1149.0], [97.1, 1157.0], [97.2, 1166.0], [97.3, 1175.0], [97.4, 1182.0], [97.5, 1204.0], [97.6, 1215.0], [97.7, 1225.0], [97.8, 1240.0], [97.9, 1245.0], [98.0, 1255.0], [98.1, 1274.0], [98.2, 1293.0], [98.3, 1310.0], [98.4, 1340.0], [98.5, 1376.0], [98.6, 1389.0], [98.7, 1409.0], [98.8, 1428.0], [98.9, 1445.0], [99.0, 1488.0], [99.1, 1520.0], [99.2, 1576.0], [99.3, 1612.0], [99.4, 1691.0], [99.5, 1812.0], [99.6, 1846.0], [99.7, 2018.0], [99.8, 2129.0], [99.9, 2235.0], [100.0, 3380.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 2034.0, "series": [{"data": [[0.0, 2034.0], [600.0, 245.0], [700.0, 158.0], [800.0, 116.0], [900.0, 97.0], [1000.0, 79.0], [1100.0, 42.0], [1200.0, 41.0], [1300.0, 21.0], [1400.0, 18.0], [1500.0, 13.0], [100.0, 711.0], [1600.0, 8.0], [1700.0, 4.0], [1800.0, 8.0], [1900.0, 2.0], [2000.0, 4.0], [2100.0, 6.0], [2200.0, 3.0], [2300.0, 2.0], [2600.0, 1.0], [200.0, 561.0], [3300.0, 1.0], [300.0, 394.0], [400.0, 397.0], [500.0, 296.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3300.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 51.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 4103.0, "series": [{"data": [[0.0, 4103.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1108.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 51.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.96987951807229, "minX": 1.60401708E12, "maxY": 10.0, "series": [{"data": [[1.6040172E12, 9.96987951807229], [1.60401708E12, 9.98243148278285], [1.60401714E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6040172E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 309.3989706443, "minX": 1.0, "maxY": 3380.0, "series": [{"data": [[8.0, 876.0], [4.0, 1204.0], [2.0, 2095.0], [1.0, 2137.0], [9.0, 588.5], [5.0, 802.6666666666666], [10.0, 309.3989706443], [3.0, 1127.0], [6.0, 3380.0], [7.0, 1168.5]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.98669707335615, 312.18681109844084]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 12307.466666666667, "minX": 1.60401708E12, "maxY": 1551696.9333333333, "series": [{"data": [[1.6040172E12, 1551696.9333333333], [1.60401708E12, 1472159.2666666666], [1.60401714E12, 1227159.4833333334]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6040172E12, 12993.966666666667], [1.60401708E12, 12307.466666666667], [1.60401714E12, 20189.516666666666]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6040172E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 255.02174840085252, "minX": 1.60401708E12, "maxY": 370.7891777933945, "series": [{"data": [[1.6040172E12, 346.096385542169], [1.60401708E12, 370.7891777933945], [1.60401714E12, 255.02174840085252]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6040172E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 254.7347547974413, "minX": 1.60401708E12, "maxY": 370.23471539002145, "series": [{"data": [[1.6040172E12, 345.56224899598413], [1.60401708E12, 370.23471539002145], [1.60401714E12, 254.7347547974413]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6040172E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.00554371002132197, "minX": 1.60401708E12, "maxY": 0.06816584680253014, "series": [{"data": [[1.6040172E12, 0.009370816599732257], [1.60401708E12, 0.06816584680253014], [1.60401714E12, 0.00554371002132197]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6040172E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 29.0, "minX": 1.60401708E12, "maxY": 3380.0, "series": [{"data": [[1.6040172E12, 3380.0], [1.60401708E12, 2009.0], [1.60401714E12, 2224.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6040172E12, 35.0], [1.60401708E12, 34.0], [1.60401714E12, 34.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6040172E12, 35.0], [1.60401708E12, 34.0], [1.60401714E12, 34.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6040172E12, 35.0], [1.60401708E12, 34.0], [1.60401714E12, 34.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.6040172E12, 30.0], [1.60401708E12, 32.0], [1.60401714E12, 29.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6040172E12, 223.0], [1.60401708E12, 285.0], [1.60401714E12, 128.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6040172E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 73.0, "minX": 2.0, "maxY": 2116.0, "series": [{"data": [[2.0, 2116.0], [5.0, 1356.5], [6.0, 1073.0], [8.0, 1020.5], [9.0, 1009.0], [10.0, 896.0], [11.0, 633.0], [12.0, 713.0], [13.0, 735.0], [14.0, 567.0], [15.0, 593.0], [16.0, 608.0], [17.0, 532.5], [18.0, 487.0], [19.0, 373.0], [20.0, 468.0], [21.0, 328.5], [22.0, 420.5], [23.0, 434.5], [24.0, 418.5], [25.0, 145.0], [26.0, 390.5], [27.0, 297.5], [28.0, 294.5], [29.0, 233.5], [30.0, 294.5], [31.0, 249.0], [33.0, 317.5], [32.0, 114.5], [34.0, 243.0], [35.0, 238.0], [36.0, 221.0], [37.0, 169.0], [38.0, 183.0], [40.0, 98.0], [41.0, 86.0], [42.0, 98.0], [44.0, 193.0], [45.0, 79.5], [46.0, 91.0], [49.0, 102.5], [50.0, 128.0], [51.0, 169.0], [52.0, 123.5], [55.0, 125.0], [56.0, 131.0], [58.0, 73.0], [59.0, 80.0], [60.0, 132.0], [61.0, 136.0], [63.0, 158.0], [62.0, 88.0], [67.0, 76.0], [64.0, 136.5], [71.0, 99.0], [69.0, 81.0], [73.0, 99.0], [83.0, 76.0], [88.0, 73.0], [94.0, 76.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 94.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 72.0, "minX": 2.0, "maxY": 2115.0, "series": [{"data": [[2.0, 2115.0], [5.0, 1355.5], [6.0, 1073.0], [8.0, 1018.5], [9.0, 1007.0], [10.0, 895.5], [11.0, 629.0], [12.0, 712.0], [13.0, 734.5], [14.0, 566.0], [15.0, 592.0], [16.0, 606.0], [17.0, 532.0], [18.0, 487.0], [19.0, 370.0], [20.0, 468.0], [21.0, 326.0], [22.0, 420.5], [23.0, 434.5], [24.0, 418.0], [25.0, 145.0], [26.0, 390.5], [27.0, 297.5], [28.0, 294.0], [29.0, 233.0], [30.0, 294.5], [31.0, 249.0], [33.0, 317.5], [32.0, 114.5], [34.0, 243.0], [35.0, 237.0], [36.0, 220.5], [37.0, 168.5], [38.0, 183.0], [40.0, 98.0], [41.0, 86.0], [42.0, 97.5], [44.0, 193.0], [45.0, 79.5], [46.0, 90.5], [49.0, 102.5], [50.0, 128.0], [51.0, 169.0], [52.0, 123.5], [55.0, 125.0], [56.0, 130.5], [58.0, 72.0], [59.0, 80.0], [60.0, 131.5], [61.0, 136.0], [63.0, 158.0], [62.0, 88.0], [67.0, 76.0], [64.0, 136.0], [71.0, 99.0], [69.0, 81.0], [73.0, 99.0], [83.0, 76.0], [88.0, 73.0], [94.0, 76.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 94.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 23.883333333333333, "minX": 1.60401708E12, "maxY": 39.083333333333336, "series": [{"data": [[1.6040172E12, 24.733333333333334], [1.60401708E12, 23.883333333333333], [1.60401714E12, 39.083333333333336]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6040172E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 23.716666666666665, "minX": 1.60401708E12, "maxY": 39.083333333333336, "series": [{"data": [[1.6040172E12, 24.9], [1.60401708E12, 23.716666666666665], [1.60401714E12, 39.083333333333336]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6040172E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 23.716666666666665, "minX": 1.60401708E12, "maxY": 39.083333333333336, "series": [{"data": [[1.6040172E12, 24.9], [1.60401708E12, 23.716666666666665], [1.60401714E12, 39.083333333333336]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6040172E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 23.716666666666665, "minX": 1.60401708E12, "maxY": 39.083333333333336, "series": [{"data": [[1.6040172E12, 24.9], [1.60401708E12, 23.716666666666665], [1.60401714E12, 39.083333333333336]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6040172E12, "title": "Total Transactions Per Second"}},
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

