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
        data: {"result": {"minY": 28.0, "minX": 0.0, "maxY": 3612.0, "series": [{"data": [[0.0, 28.0], [0.1, 32.0], [0.2, 32.0], [0.3, 32.0], [0.4, 33.0], [0.5, 33.0], [0.6, 34.0], [0.7, 34.0], [0.8, 34.0], [0.9, 34.0], [1.0, 35.0], [1.1, 35.0], [1.2, 35.0], [1.3, 35.0], [1.4, 36.0], [1.5, 36.0], [1.6, 36.0], [1.7, 36.0], [1.8, 36.0], [1.9, 36.0], [2.0, 36.0], [2.1, 36.0], [2.2, 36.0], [2.3, 36.0], [2.4, 37.0], [2.5, 37.0], [2.6, 37.0], [2.7, 37.0], [2.8, 37.0], [2.9, 37.0], [3.0, 37.0], [3.1, 37.0], [3.2, 37.0], [3.3, 37.0], [3.4, 37.0], [3.5, 37.0], [3.6, 37.0], [3.7, 37.0], [3.8, 38.0], [3.9, 38.0], [4.0, 38.0], [4.1, 38.0], [4.2, 38.0], [4.3, 38.0], [4.4, 38.0], [4.5, 38.0], [4.6, 38.0], [4.7, 38.0], [4.8, 38.0], [4.9, 38.0], [5.0, 38.0], [5.1, 38.0], [5.2, 38.0], [5.3, 39.0], [5.4, 39.0], [5.5, 39.0], [5.6, 39.0], [5.7, 39.0], [5.8, 39.0], [5.9, 39.0], [6.0, 39.0], [6.1, 39.0], [6.2, 39.0], [6.3, 39.0], [6.4, 39.0], [6.5, 39.0], [6.6, 39.0], [6.7, 39.0], [6.8, 39.0], [6.9, 40.0], [7.0, 40.0], [7.1, 40.0], [7.2, 40.0], [7.3, 40.0], [7.4, 40.0], [7.5, 40.0], [7.6, 40.0], [7.7, 40.0], [7.8, 40.0], [7.9, 40.0], [8.0, 40.0], [8.1, 40.0], [8.2, 40.0], [8.3, 40.0], [8.4, 40.0], [8.5, 40.0], [8.6, 40.0], [8.7, 40.0], [8.8, 40.0], [8.9, 40.0], [9.0, 41.0], [9.1, 41.0], [9.2, 41.0], [9.3, 41.0], [9.4, 41.0], [9.5, 41.0], [9.6, 41.0], [9.7, 41.0], [9.8, 41.0], [9.9, 41.0], [10.0, 41.0], [10.1, 41.0], [10.2, 41.0], [10.3, 41.0], [10.4, 41.0], [10.5, 41.0], [10.6, 41.0], [10.7, 41.0], [10.8, 41.0], [10.9, 42.0], [11.0, 42.0], [11.1, 42.0], [11.2, 42.0], [11.3, 42.0], [11.4, 42.0], [11.5, 42.0], [11.6, 42.0], [11.7, 42.0], [11.8, 42.0], [11.9, 42.0], [12.0, 42.0], [12.1, 42.0], [12.2, 42.0], [12.3, 42.0], [12.4, 42.0], [12.5, 42.0], [12.6, 42.0], [12.7, 42.0], [12.8, 43.0], [12.9, 43.0], [13.0, 43.0], [13.1, 43.0], [13.2, 43.0], [13.3, 43.0], [13.4, 43.0], [13.5, 43.0], [13.6, 43.0], [13.7, 43.0], [13.8, 43.0], [13.9, 43.0], [14.0, 43.0], [14.1, 43.0], [14.2, 43.0], [14.3, 43.0], [14.4, 44.0], [14.5, 44.0], [14.6, 44.0], [14.7, 44.0], [14.8, 44.0], [14.9, 44.0], [15.0, 44.0], [15.1, 44.0], [15.2, 44.0], [15.3, 44.0], [15.4, 44.0], [15.5, 44.0], [15.6, 44.0], [15.7, 44.0], [15.8, 44.0], [15.9, 44.0], [16.0, 45.0], [16.1, 45.0], [16.2, 45.0], [16.3, 45.0], [16.4, 45.0], [16.5, 45.0], [16.6, 45.0], [16.7, 45.0], [16.8, 45.0], [16.9, 45.0], [17.0, 45.0], [17.1, 45.0], [17.2, 45.0], [17.3, 45.0], [17.4, 46.0], [17.5, 46.0], [17.6, 46.0], [17.7, 46.0], [17.8, 46.0], [17.9, 46.0], [18.0, 46.0], [18.1, 46.0], [18.2, 46.0], [18.3, 46.0], [18.4, 46.0], [18.5, 46.0], [18.6, 46.0], [18.7, 47.0], [18.8, 47.0], [18.9, 47.0], [19.0, 47.0], [19.1, 47.0], [19.2, 47.0], [19.3, 47.0], [19.4, 47.0], [19.5, 47.0], [19.6, 48.0], [19.7, 48.0], [19.8, 48.0], [19.9, 48.0], [20.0, 48.0], [20.1, 48.0], [20.2, 48.0], [20.3, 49.0], [20.4, 49.0], [20.5, 49.0], [20.6, 49.0], [20.7, 49.0], [20.8, 49.0], [20.9, 49.0], [21.0, 49.0], [21.1, 50.0], [21.2, 50.0], [21.3, 50.0], [21.4, 50.0], [21.5, 50.0], [21.6, 50.0], [21.7, 51.0], [21.8, 51.0], [21.9, 51.0], [22.0, 51.0], [22.1, 51.0], [22.2, 51.0], [22.3, 52.0], [22.4, 52.0], [22.5, 52.0], [22.6, 52.0], [22.7, 53.0], [22.8, 53.0], [22.9, 53.0], [23.0, 53.0], [23.1, 53.0], [23.2, 54.0], [23.3, 54.0], [23.4, 54.0], [23.5, 54.0], [23.6, 54.0], [23.7, 55.0], [23.8, 55.0], [23.9, 55.0], [24.0, 56.0], [24.1, 56.0], [24.2, 56.0], [24.3, 56.0], [24.4, 57.0], [24.5, 57.0], [24.6, 57.0], [24.7, 57.0], [24.8, 58.0], [24.9, 58.0], [25.0, 58.0], [25.1, 58.0], [25.2, 59.0], [25.3, 59.0], [25.4, 60.0], [25.5, 60.0], [25.6, 60.0], [25.7, 60.0], [25.8, 61.0], [25.9, 61.0], [26.0, 61.0], [26.1, 62.0], [26.2, 62.0], [26.3, 62.0], [26.4, 62.0], [26.5, 62.0], [26.6, 63.0], [26.7, 63.0], [26.8, 63.0], [26.9, 63.0], [27.0, 64.0], [27.1, 64.0], [27.2, 64.0], [27.3, 64.0], [27.4, 64.0], [27.5, 64.0], [27.6, 65.0], [27.7, 65.0], [27.8, 65.0], [27.9, 65.0], [28.0, 65.0], [28.1, 66.0], [28.2, 66.0], [28.3, 66.0], [28.4, 66.0], [28.5, 66.0], [28.6, 66.0], [28.7, 66.0], [28.8, 67.0], [28.9, 67.0], [29.0, 67.0], [29.1, 68.0], [29.2, 68.0], [29.3, 68.0], [29.4, 68.0], [29.5, 68.0], [29.6, 69.0], [29.7, 69.0], [29.8, 69.0], [29.9, 69.0], [30.0, 70.0], [30.1, 70.0], [30.2, 70.0], [30.3, 70.0], [30.4, 70.0], [30.5, 70.0], [30.6, 71.0], [30.7, 71.0], [30.8, 71.0], [30.9, 71.0], [31.0, 72.0], [31.1, 72.0], [31.2, 72.0], [31.3, 72.0], [31.4, 72.0], [31.5, 72.0], [31.6, 73.0], [31.7, 73.0], [31.8, 73.0], [31.9, 73.0], [32.0, 73.0], [32.1, 74.0], [32.2, 74.0], [32.3, 74.0], [32.4, 74.0], [32.5, 74.0], [32.6, 74.0], [32.7, 74.0], [32.8, 74.0], [32.9, 75.0], [33.0, 75.0], [33.1, 75.0], [33.2, 75.0], [33.3, 75.0], [33.4, 75.0], [33.5, 75.0], [33.6, 76.0], [33.7, 76.0], [33.8, 76.0], [33.9, 76.0], [34.0, 76.0], [34.1, 76.0], [34.2, 77.0], [34.3, 77.0], [34.4, 77.0], [34.5, 77.0], [34.6, 77.0], [34.7, 77.0], [34.8, 78.0], [34.9, 78.0], [35.0, 78.0], [35.1, 78.0], [35.2, 78.0], [35.3, 78.0], [35.4, 79.0], [35.5, 79.0], [35.6, 79.0], [35.7, 79.0], [35.8, 79.0], [35.9, 80.0], [36.0, 80.0], [36.1, 80.0], [36.2, 80.0], [36.3, 81.0], [36.4, 81.0], [36.5, 81.0], [36.6, 81.0], [36.7, 81.0], [36.8, 81.0], [36.9, 81.0], [37.0, 81.0], [37.1, 82.0], [37.2, 82.0], [37.3, 82.0], [37.4, 82.0], [37.5, 82.0], [37.6, 82.0], [37.7, 82.0], [37.8, 83.0], [37.9, 83.0], [38.0, 83.0], [38.1, 83.0], [38.2, 83.0], [38.3, 83.0], [38.4, 84.0], [38.5, 84.0], [38.6, 84.0], [38.7, 85.0], [38.8, 85.0], [38.9, 85.0], [39.0, 85.0], [39.1, 86.0], [39.2, 86.0], [39.3, 86.0], [39.4, 86.0], [39.5, 86.0], [39.6, 86.0], [39.7, 87.0], [39.8, 87.0], [39.9, 87.0], [40.0, 87.0], [40.1, 88.0], [40.2, 88.0], [40.3, 88.0], [40.4, 89.0], [40.5, 89.0], [40.6, 90.0], [40.7, 90.0], [40.8, 90.0], [40.9, 90.0], [41.0, 90.0], [41.1, 91.0], [41.2, 91.0], [41.3, 92.0], [41.4, 92.0], [41.5, 92.0], [41.6, 93.0], [41.7, 93.0], [41.8, 94.0], [41.9, 94.0], [42.0, 94.0], [42.1, 95.0], [42.2, 95.0], [42.3, 96.0], [42.4, 97.0], [42.5, 97.0], [42.6, 98.0], [42.7, 98.0], [42.8, 99.0], [42.9, 99.0], [43.0, 100.0], [43.1, 101.0], [43.2, 102.0], [43.3, 103.0], [43.4, 103.0], [43.5, 104.0], [43.6, 105.0], [43.7, 107.0], [43.8, 108.0], [43.9, 108.0], [44.0, 109.0], [44.1, 110.0], [44.2, 111.0], [44.3, 111.0], [44.4, 112.0], [44.5, 113.0], [44.6, 114.0], [44.7, 114.0], [44.8, 115.0], [44.9, 116.0], [45.0, 117.0], [45.1, 118.0], [45.2, 118.0], [45.3, 119.0], [45.4, 121.0], [45.5, 122.0], [45.6, 123.0], [45.7, 124.0], [45.8, 125.0], [45.9, 126.0], [46.0, 126.0], [46.1, 127.0], [46.2, 127.0], [46.3, 129.0], [46.4, 129.0], [46.5, 130.0], [46.6, 131.0], [46.7, 132.0], [46.8, 132.0], [46.9, 133.0], [47.0, 134.0], [47.1, 134.0], [47.2, 135.0], [47.3, 135.0], [47.4, 136.0], [47.5, 137.0], [47.6, 138.0], [47.7, 138.0], [47.8, 139.0], [47.9, 140.0], [48.0, 141.0], [48.1, 141.0], [48.2, 143.0], [48.3, 144.0], [48.4, 145.0], [48.5, 146.0], [48.6, 148.0], [48.7, 149.0], [48.8, 149.0], [48.9, 151.0], [49.0, 152.0], [49.1, 153.0], [49.2, 153.0], [49.3, 154.0], [49.4, 156.0], [49.5, 156.0], [49.6, 158.0], [49.7, 158.0], [49.8, 160.0], [49.9, 160.0], [50.0, 162.0], [50.1, 163.0], [50.2, 164.0], [50.3, 165.0], [50.4, 166.0], [50.5, 167.0], [50.6, 168.0], [50.7, 169.0], [50.8, 169.0], [50.9, 170.0], [51.0, 171.0], [51.1, 171.0], [51.2, 173.0], [51.3, 173.0], [51.4, 173.0], [51.5, 174.0], [51.6, 176.0], [51.7, 177.0], [51.8, 177.0], [51.9, 178.0], [52.0, 178.0], [52.1, 179.0], [52.2, 180.0], [52.3, 181.0], [52.4, 182.0], [52.5, 182.0], [52.6, 183.0], [52.7, 184.0], [52.8, 185.0], [52.9, 185.0], [53.0, 186.0], [53.1, 187.0], [53.2, 188.0], [53.3, 189.0], [53.4, 189.0], [53.5, 190.0], [53.6, 191.0], [53.7, 192.0], [53.8, 192.0], [53.9, 194.0], [54.0, 194.0], [54.1, 195.0], [54.2, 196.0], [54.3, 196.0], [54.4, 197.0], [54.5, 197.0], [54.6, 198.0], [54.7, 199.0], [54.8, 200.0], [54.9, 201.0], [55.0, 201.0], [55.1, 203.0], [55.2, 203.0], [55.3, 205.0], [55.4, 205.0], [55.5, 206.0], [55.6, 207.0], [55.7, 208.0], [55.8, 209.0], [55.9, 210.0], [56.0, 210.0], [56.1, 211.0], [56.2, 212.0], [56.3, 212.0], [56.4, 212.0], [56.5, 213.0], [56.6, 215.0], [56.7, 215.0], [56.8, 216.0], [56.9, 217.0], [57.0, 218.0], [57.1, 218.0], [57.2, 220.0], [57.3, 221.0], [57.4, 221.0], [57.5, 222.0], [57.6, 223.0], [57.7, 224.0], [57.8, 224.0], [57.9, 225.0], [58.0, 227.0], [58.1, 228.0], [58.2, 228.0], [58.3, 230.0], [58.4, 231.0], [58.5, 232.0], [58.6, 233.0], [58.7, 233.0], [58.8, 234.0], [58.9, 236.0], [59.0, 237.0], [59.1, 238.0], [59.2, 239.0], [59.3, 240.0], [59.4, 241.0], [59.5, 242.0], [59.6, 244.0], [59.7, 244.0], [59.8, 245.0], [59.9, 246.0], [60.0, 246.0], [60.1, 246.0], [60.2, 247.0], [60.3, 247.0], [60.4, 248.0], [60.5, 249.0], [60.6, 249.0], [60.7, 251.0], [60.8, 252.0], [60.9, 254.0], [61.0, 254.0], [61.1, 255.0], [61.2, 256.0], [61.3, 257.0], [61.4, 259.0], [61.5, 259.0], [61.6, 260.0], [61.7, 261.0], [61.8, 261.0], [61.9, 262.0], [62.0, 263.0], [62.1, 265.0], [62.2, 265.0], [62.3, 267.0], [62.4, 268.0], [62.5, 269.0], [62.6, 270.0], [62.7, 271.0], [62.8, 272.0], [62.9, 273.0], [63.0, 274.0], [63.1, 275.0], [63.2, 276.0], [63.3, 278.0], [63.4, 279.0], [63.5, 280.0], [63.6, 283.0], [63.7, 284.0], [63.8, 286.0], [63.9, 288.0], [64.0, 289.0], [64.1, 290.0], [64.2, 291.0], [64.3, 292.0], [64.4, 293.0], [64.5, 294.0], [64.6, 296.0], [64.7, 298.0], [64.8, 301.0], [64.9, 304.0], [65.0, 305.0], [65.1, 307.0], [65.2, 308.0], [65.3, 310.0], [65.4, 311.0], [65.5, 312.0], [65.6, 313.0], [65.7, 315.0], [65.8, 316.0], [65.9, 317.0], [66.0, 318.0], [66.1, 320.0], [66.2, 322.0], [66.3, 323.0], [66.4, 324.0], [66.5, 325.0], [66.6, 327.0], [66.7, 329.0], [66.8, 330.0], [66.9, 332.0], [67.0, 332.0], [67.1, 335.0], [67.2, 336.0], [67.3, 338.0], [67.4, 340.0], [67.5, 341.0], [67.6, 344.0], [67.7, 346.0], [67.8, 346.0], [67.9, 347.0], [68.0, 348.0], [68.1, 351.0], [68.2, 352.0], [68.3, 354.0], [68.4, 357.0], [68.5, 358.0], [68.6, 358.0], [68.7, 361.0], [68.8, 362.0], [68.9, 364.0], [69.0, 366.0], [69.1, 368.0], [69.2, 369.0], [69.3, 370.0], [69.4, 372.0], [69.5, 373.0], [69.6, 375.0], [69.7, 376.0], [69.8, 378.0], [69.9, 380.0], [70.0, 382.0], [70.1, 383.0], [70.2, 384.0], [70.3, 386.0], [70.4, 389.0], [70.5, 390.0], [70.6, 392.0], [70.7, 393.0], [70.8, 394.0], [70.9, 396.0], [71.0, 397.0], [71.1, 398.0], [71.2, 399.0], [71.3, 400.0], [71.4, 403.0], [71.5, 404.0], [71.6, 407.0], [71.7, 407.0], [71.8, 410.0], [71.9, 412.0], [72.0, 413.0], [72.1, 415.0], [72.2, 416.0], [72.3, 417.0], [72.4, 419.0], [72.5, 422.0], [72.6, 422.0], [72.7, 424.0], [72.8, 425.0], [72.9, 427.0], [73.0, 428.0], [73.1, 431.0], [73.2, 432.0], [73.3, 434.0], [73.4, 435.0], [73.5, 435.0], [73.6, 437.0], [73.7, 438.0], [73.8, 439.0], [73.9, 440.0], [74.0, 442.0], [74.1, 443.0], [74.2, 444.0], [74.3, 445.0], [74.4, 447.0], [74.5, 448.0], [74.6, 449.0], [74.7, 450.0], [74.8, 452.0], [74.9, 453.0], [75.0, 454.0], [75.1, 455.0], [75.2, 456.0], [75.3, 457.0], [75.4, 459.0], [75.5, 460.0], [75.6, 461.0], [75.7, 462.0], [75.8, 463.0], [75.9, 464.0], [76.0, 465.0], [76.1, 467.0], [76.2, 468.0], [76.3, 470.0], [76.4, 472.0], [76.5, 474.0], [76.6, 474.0], [76.7, 476.0], [76.8, 479.0], [76.9, 481.0], [77.0, 483.0], [77.1, 485.0], [77.2, 486.0], [77.3, 487.0], [77.4, 490.0], [77.5, 491.0], [77.6, 493.0], [77.7, 494.0], [77.8, 496.0], [77.9, 496.0], [78.0, 499.0], [78.1, 500.0], [78.2, 502.0], [78.3, 503.0], [78.4, 504.0], [78.5, 508.0], [78.6, 512.0], [78.7, 514.0], [78.8, 516.0], [78.9, 517.0], [79.0, 519.0], [79.1, 521.0], [79.2, 523.0], [79.3, 525.0], [79.4, 528.0], [79.5, 529.0], [79.6, 531.0], [79.7, 533.0], [79.8, 538.0], [79.9, 539.0], [80.0, 543.0], [80.1, 546.0], [80.2, 547.0], [80.3, 550.0], [80.4, 551.0], [80.5, 552.0], [80.6, 557.0], [80.7, 560.0], [80.8, 562.0], [80.9, 564.0], [81.0, 566.0], [81.1, 566.0], [81.2, 568.0], [81.3, 571.0], [81.4, 572.0], [81.5, 575.0], [81.6, 576.0], [81.7, 579.0], [81.8, 581.0], [81.9, 583.0], [82.0, 585.0], [82.1, 586.0], [82.2, 588.0], [82.3, 590.0], [82.4, 591.0], [82.5, 593.0], [82.6, 594.0], [82.7, 596.0], [82.8, 597.0], [82.9, 599.0], [83.0, 602.0], [83.1, 603.0], [83.2, 606.0], [83.3, 610.0], [83.4, 611.0], [83.5, 612.0], [83.6, 616.0], [83.7, 618.0], [83.8, 620.0], [83.9, 623.0], [84.0, 624.0], [84.1, 626.0], [84.2, 628.0], [84.3, 629.0], [84.4, 630.0], [84.5, 632.0], [84.6, 634.0], [84.7, 637.0], [84.8, 641.0], [84.9, 644.0], [85.0, 648.0], [85.1, 649.0], [85.2, 651.0], [85.3, 655.0], [85.4, 657.0], [85.5, 661.0], [85.6, 662.0], [85.7, 664.0], [85.8, 666.0], [85.9, 671.0], [86.0, 673.0], [86.1, 674.0], [86.2, 675.0], [86.3, 679.0], [86.4, 681.0], [86.5, 682.0], [86.6, 685.0], [86.7, 688.0], [86.8, 690.0], [86.9, 691.0], [87.0, 695.0], [87.1, 697.0], [87.2, 699.0], [87.3, 701.0], [87.4, 704.0], [87.5, 706.0], [87.6, 710.0], [87.7, 713.0], [87.8, 717.0], [87.9, 719.0], [88.0, 724.0], [88.1, 726.0], [88.2, 727.0], [88.3, 733.0], [88.4, 735.0], [88.5, 737.0], [88.6, 739.0], [88.7, 742.0], [88.8, 745.0], [88.9, 748.0], [89.0, 751.0], [89.1, 753.0], [89.2, 758.0], [89.3, 761.0], [89.4, 766.0], [89.5, 770.0], [89.6, 772.0], [89.7, 775.0], [89.8, 778.0], [89.9, 781.0], [90.0, 786.0], [90.1, 789.0], [90.2, 793.0], [90.3, 794.0], [90.4, 798.0], [90.5, 802.0], [90.6, 804.0], [90.7, 808.0], [90.8, 814.0], [90.9, 818.0], [91.0, 824.0], [91.1, 826.0], [91.2, 830.0], [91.3, 834.0], [91.4, 839.0], [91.5, 843.0], [91.6, 851.0], [91.7, 857.0], [91.8, 863.0], [91.9, 868.0], [92.0, 873.0], [92.1, 877.0], [92.2, 879.0], [92.3, 884.0], [92.4, 894.0], [92.5, 896.0], [92.6, 904.0], [92.7, 909.0], [92.8, 917.0], [92.9, 920.0], [93.0, 927.0], [93.1, 934.0], [93.2, 939.0], [93.3, 946.0], [93.4, 955.0], [93.5, 960.0], [93.6, 966.0], [93.7, 971.0], [93.8, 981.0], [93.9, 987.0], [94.0, 997.0], [94.1, 1001.0], [94.2, 1005.0], [94.3, 1019.0], [94.4, 1027.0], [94.5, 1030.0], [94.6, 1035.0], [94.7, 1043.0], [94.8, 1046.0], [94.9, 1054.0], [95.0, 1062.0], [95.1, 1070.0], [95.2, 1076.0], [95.3, 1083.0], [95.4, 1089.0], [95.5, 1101.0], [95.6, 1108.0], [95.7, 1118.0], [95.8, 1136.0], [95.9, 1150.0], [96.0, 1162.0], [96.1, 1174.0], [96.2, 1191.0], [96.3, 1206.0], [96.4, 1218.0], [96.5, 1232.0], [96.6, 1244.0], [96.7, 1260.0], [96.8, 1263.0], [96.9, 1273.0], [97.0, 1283.0], [97.1, 1294.0], [97.2, 1312.0], [97.3, 1327.0], [97.4, 1341.0], [97.5, 1353.0], [97.6, 1362.0], [97.7, 1373.0], [97.8, 1400.0], [97.9, 1421.0], [98.0, 1439.0], [98.1, 1474.0], [98.2, 1504.0], [98.3, 1528.0], [98.4, 1559.0], [98.5, 1587.0], [98.6, 1598.0], [98.7, 1614.0], [98.8, 1630.0], [98.9, 1667.0], [99.0, 1721.0], [99.1, 1773.0], [99.2, 1825.0], [99.3, 1908.0], [99.4, 2003.0], [99.5, 2049.0], [99.6, 2087.0], [99.7, 2253.0], [99.8, 2635.0], [99.9, 2793.0], [100.0, 3612.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 2261.0, "series": [{"data": [[0.0, 2261.0], [600.0, 224.0], [700.0, 171.0], [800.0, 109.0], [900.0, 81.0], [1000.0, 74.0], [1100.0, 40.0], [1200.0, 48.0], [1300.0, 34.0], [1400.0, 21.0], [1500.0, 23.0], [100.0, 620.0], [1600.0, 16.0], [1700.0, 10.0], [1800.0, 9.0], [1900.0, 5.0], [2000.0, 12.0], [2100.0, 4.0], [2200.0, 2.0], [2300.0, 1.0], [2400.0, 2.0], [2600.0, 3.0], [2700.0, 3.0], [2900.0, 1.0], [3000.0, 1.0], [200.0, 525.0], [3300.0, 1.0], [3500.0, 1.0], [3600.0, 1.0], [300.0, 342.0], [400.0, 360.0], [500.0, 257.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3600.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 95.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 4110.0, "series": [{"data": [[0.0, 4110.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1057.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 95.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.901098901098903, "minX": 1.60383846E12, "maxY": 10.0, "series": [{"data": [[1.60383846E12, 9.975609756097546], [1.60383858E12, 10.0], [1.60383852E12, 10.0], [1.60383864E12, 9.901098901098903]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60383864E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 312.197064989517, "minX": 1.0, "maxY": 3612.0, "series": [{"data": [[4.0, 703.0], [8.0, 1165.5], [2.0, 2038.0], [1.0, 3304.0], [9.0, 490.6666666666667], [5.0, 937.0], [10.0, 312.197064989517], [6.0, 1023.5], [3.0, 3543.0], [7.0, 3612.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.987837324211315, 315.41714177118996]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 4009.616666666667, "minX": 1.60383846E12, "maxY": 1582232.3166666667, "series": [{"data": [[1.60383846E12, 732853.7], [1.60383858E12, 1499992.35], [1.60383852E12, 1582232.3166666667], [1.60383864E12, 435716.26666666666]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60383846E12, 6698.916666666667], [1.60383858E12, 17448.65], [1.60383852E12, 17333.766666666666], [1.60383864E12, 4009.616666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60383864E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 293.7153320312501, "minX": 1.60383846E12, "maxY": 400.1076923076921, "series": [{"data": [[1.60383846E12, 358.8844672657252], [1.60383858E12, 301.30101010100987], [1.60383852E12, 293.7153320312501], [1.60383864E12, 400.1076923076921]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60383864E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 293.3051757812499, "minX": 1.60383846E12, "maxY": 399.74945054945044, "series": [{"data": [[1.60383846E12, 358.36456996148917], [1.60383858E12, 300.8939393939387], [1.60383852E12, 293.3051757812499], [1.60383864E12, 399.74945054945044]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60383864E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.009765625000000019, "minX": 1.60383846E12, "maxY": 0.13735558408215676, "series": [{"data": [[1.60383846E12, 0.13735558408215676], [1.60383858E12, 0.011616161616161627], [1.60383852E12, 0.009765625000000019], [1.60383864E12, 0.01978021978021978]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60383864E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 28.0, "minX": 1.60383846E12, "maxY": 3612.0, "series": [{"data": [[1.60383846E12, 1725.0], [1.60383858E12, 3070.0], [1.60383852E12, 2976.0], [1.60383864E12, 3612.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60383846E12, 37.0], [1.60383858E12, 33.0], [1.60383852E12, 35.44099951148033], [1.60383864E12, 36.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60383846E12, 37.0], [1.60383858E12, 33.0], [1.60383852E12, 36.0], [1.60383864E12, 36.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60383846E12, 37.0], [1.60383858E12, 33.0], [1.60383852E12, 36.0], [1.60383864E12, 36.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60383846E12, 32.0], [1.60383858E12, 28.0], [1.60383852E12, 32.0], [1.60383864E12, 35.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60383846E12, 246.0], [1.60383858E12, 158.0], [1.60383852E12, 134.0], [1.60383864E12, 192.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60383864E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 43.0, "minX": 3.0, "maxY": 3304.0, "series": [{"data": [[3.0, 3304.0], [4.0, 1905.5], [5.0, 1152.0], [6.0, 1168.5], [7.0, 1259.0], [9.0, 658.0], [10.0, 769.5], [11.0, 739.0], [12.0, 672.0], [13.0, 625.0], [14.0, 589.0], [15.0, 567.5], [16.0, 501.0], [17.0, 478.0], [18.0, 396.5], [19.0, 534.5], [20.0, 562.5], [21.0, 362.0], [22.0, 427.0], [23.0, 352.0], [24.0, 404.5], [25.0, 290.0], [26.0, 255.5], [27.0, 411.0], [28.0, 247.5], [29.0, 266.0], [30.0, 222.5], [31.0, 154.0], [32.0, 109.0], [35.0, 83.0], [34.0, 97.0], [37.0, 230.0], [36.0, 184.5], [39.0, 65.0], [38.0, 192.0], [41.0, 131.0], [40.0, 116.5], [42.0, 77.5], [43.0, 50.0], [44.0, 96.5], [45.0, 67.0], [47.0, 126.0], [46.0, 178.0], [49.0, 130.5], [50.0, 79.5], [52.0, 52.0], [55.0, 70.0], [56.0, 87.0], [57.0, 89.0], [58.0, 78.0], [59.0, 118.0], [60.0, 82.0], [62.0, 71.5], [65.0, 78.0], [70.0, 64.5], [68.0, 91.5], [71.0, 75.0], [75.0, 83.0], [74.0, 105.5], [72.0, 51.0], [76.0, 121.0], [81.0, 43.0], [84.0, 119.5], [90.0, 53.0], [91.0, 74.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 91.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 43.0, "minX": 3.0, "maxY": 3303.0, "series": [{"data": [[3.0, 3303.0], [4.0, 1905.5], [5.0, 1151.0], [6.0, 1168.0], [7.0, 1258.0], [9.0, 656.5], [10.0, 769.0], [11.0, 737.0], [12.0, 672.0], [13.0, 623.0], [14.0, 588.0], [15.0, 566.5], [16.0, 501.0], [17.0, 475.0], [18.0, 394.0], [19.0, 534.5], [20.0, 561.5], [21.0, 362.0], [22.0, 427.0], [23.0, 351.0], [24.0, 404.0], [25.0, 289.0], [26.0, 254.5], [27.0, 411.0], [28.0, 247.5], [29.0, 265.5], [30.0, 221.0], [31.0, 154.0], [32.0, 109.0], [35.0, 83.0], [34.0, 97.0], [37.0, 230.0], [36.0, 184.5], [39.0, 65.0], [38.0, 192.0], [41.0, 131.0], [40.0, 116.5], [42.0, 77.5], [43.0, 50.0], [44.0, 96.5], [45.0, 67.0], [47.0, 126.0], [46.0, 177.5], [49.0, 130.5], [50.0, 79.5], [52.0, 52.0], [55.0, 70.0], [56.0, 87.0], [57.0, 89.0], [58.0, 78.0], [59.0, 118.0], [60.0, 82.0], [62.0, 71.5], [65.0, 78.0], [70.0, 64.5], [68.0, 91.5], [71.0, 75.0], [75.0, 83.0], [74.0, 105.5], [72.0, 51.0], [76.0, 121.0], [81.0, 43.0], [84.0, 119.0], [90.0, 53.0], [91.0, 74.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 91.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 7.416666666666667, "minX": 1.60383846E12, "maxY": 34.15, "series": [{"data": [[1.60383846E12, 13.133333333333333], [1.60383858E12, 33.0], [1.60383852E12, 34.15], [1.60383864E12, 7.416666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60383864E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 7.583333333333333, "minX": 1.60383846E12, "maxY": 34.13333333333333, "series": [{"data": [[1.60383846E12, 12.983333333333333], [1.60383858E12, 33.0], [1.60383852E12, 34.13333333333333], [1.60383864E12, 7.583333333333333]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60383864E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 7.583333333333333, "minX": 1.60383846E12, "maxY": 34.13333333333333, "series": [{"data": [[1.60383846E12, 12.983333333333333], [1.60383858E12, 33.0], [1.60383852E12, 34.13333333333333], [1.60383864E12, 7.583333333333333]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60383864E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 7.583333333333333, "minX": 1.60383846E12, "maxY": 34.13333333333333, "series": [{"data": [[1.60383846E12, 12.983333333333333], [1.60383858E12, 33.0], [1.60383852E12, 34.13333333333333], [1.60383864E12, 7.583333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60383864E12, "title": "Total Transactions Per Second"}},
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

