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
        data: {"result": {"minY": 28.0, "minX": 0.0, "maxY": 3340.0, "series": [{"data": [[0.0, 28.0], [0.1, 30.0], [0.2, 31.0], [0.3, 31.0], [0.4, 32.0], [0.5, 32.0], [0.6, 33.0], [0.7, 33.0], [0.8, 33.0], [0.9, 33.0], [1.0, 34.0], [1.1, 34.0], [1.2, 35.0], [1.3, 35.0], [1.4, 35.0], [1.5, 36.0], [1.6, 36.0], [1.7, 36.0], [1.8, 36.0], [1.9, 36.0], [2.0, 36.0], [2.1, 36.0], [2.2, 37.0], [2.3, 37.0], [2.4, 37.0], [2.5, 37.0], [2.6, 37.0], [2.7, 37.0], [2.8, 37.0], [2.9, 37.0], [3.0, 37.0], [3.1, 37.0], [3.2, 38.0], [3.3, 38.0], [3.4, 38.0], [3.5, 38.0], [3.6, 38.0], [3.7, 38.0], [3.8, 38.0], [3.9, 38.0], [4.0, 38.0], [4.1, 38.0], [4.2, 38.0], [4.3, 38.0], [4.4, 39.0], [4.5, 39.0], [4.6, 39.0], [4.7, 39.0], [4.8, 39.0], [4.9, 39.0], [5.0, 39.0], [5.1, 39.0], [5.2, 39.0], [5.3, 39.0], [5.4, 39.0], [5.5, 39.0], [5.6, 39.0], [5.7, 39.0], [5.8, 39.0], [5.9, 39.0], [6.0, 39.0], [6.1, 40.0], [6.2, 40.0], [6.3, 40.0], [6.4, 40.0], [6.5, 40.0], [6.6, 40.0], [6.7, 40.0], [6.8, 40.0], [6.9, 40.0], [7.0, 40.0], [7.1, 40.0], [7.2, 40.0], [7.3, 40.0], [7.4, 41.0], [7.5, 41.0], [7.6, 41.0], [7.7, 41.0], [7.8, 41.0], [7.9, 41.0], [8.0, 41.0], [8.1, 41.0], [8.2, 41.0], [8.3, 41.0], [8.4, 41.0], [8.5, 41.0], [8.6, 41.0], [8.7, 42.0], [8.8, 42.0], [8.9, 42.0], [9.0, 42.0], [9.1, 42.0], [9.2, 42.0], [9.3, 42.0], [9.4, 42.0], [9.5, 42.0], [9.6, 42.0], [9.7, 42.0], [9.8, 43.0], [9.9, 43.0], [10.0, 43.0], [10.1, 43.0], [10.2, 43.0], [10.3, 43.0], [10.4, 43.0], [10.5, 43.0], [10.6, 43.0], [10.7, 43.0], [10.8, 43.0], [10.9, 43.0], [11.0, 43.0], [11.1, 44.0], [11.2, 44.0], [11.3, 44.0], [11.4, 44.0], [11.5, 44.0], [11.6, 44.0], [11.7, 44.0], [11.8, 44.0], [11.9, 44.0], [12.0, 44.0], [12.1, 44.0], [12.2, 44.0], [12.3, 45.0], [12.4, 45.0], [12.5, 45.0], [12.6, 45.0], [12.7, 45.0], [12.8, 45.0], [12.9, 45.0], [13.0, 45.0], [13.1, 45.0], [13.2, 46.0], [13.3, 46.0], [13.4, 46.0], [13.5, 46.0], [13.6, 46.0], [13.7, 46.0], [13.8, 46.0], [13.9, 46.0], [14.0, 46.0], [14.1, 46.0], [14.2, 47.0], [14.3, 47.0], [14.4, 47.0], [14.5, 47.0], [14.6, 47.0], [14.7, 47.0], [14.8, 47.0], [14.9, 48.0], [15.0, 48.0], [15.1, 48.0], [15.2, 48.0], [15.3, 48.0], [15.4, 48.0], [15.5, 48.0], [15.6, 49.0], [15.7, 49.0], [15.8, 49.0], [15.9, 49.0], [16.0, 49.0], [16.1, 49.0], [16.2, 49.0], [16.3, 49.0], [16.4, 50.0], [16.5, 50.0], [16.6, 50.0], [16.7, 50.0], [16.8, 51.0], [16.9, 51.0], [17.0, 51.0], [17.1, 51.0], [17.2, 51.0], [17.3, 52.0], [17.4, 52.0], [17.5, 52.0], [17.6, 52.0], [17.7, 53.0], [17.8, 53.0], [17.9, 54.0], [18.0, 54.0], [18.1, 54.0], [18.2, 55.0], [18.3, 55.0], [18.4, 56.0], [18.5, 56.0], [18.6, 57.0], [18.7, 57.0], [18.8, 58.0], [18.9, 58.0], [19.0, 58.0], [19.1, 58.0], [19.2, 59.0], [19.3, 59.0], [19.4, 60.0], [19.5, 60.0], [19.6, 60.0], [19.7, 61.0], [19.8, 61.0], [19.9, 61.0], [20.0, 62.0], [20.1, 62.0], [20.2, 63.0], [20.3, 63.0], [20.4, 63.0], [20.5, 63.0], [20.6, 64.0], [20.7, 64.0], [20.8, 64.0], [20.9, 65.0], [21.0, 65.0], [21.1, 65.0], [21.2, 65.0], [21.3, 66.0], [21.4, 66.0], [21.5, 66.0], [21.6, 66.0], [21.7, 66.0], [21.8, 67.0], [21.9, 67.0], [22.0, 67.0], [22.1, 67.0], [22.2, 68.0], [22.3, 68.0], [22.4, 68.0], [22.5, 68.0], [22.6, 68.0], [22.7, 68.0], [22.8, 69.0], [22.9, 69.0], [23.0, 69.0], [23.1, 69.0], [23.2, 69.0], [23.3, 69.0], [23.4, 69.0], [23.5, 70.0], [23.6, 70.0], [23.7, 70.0], [23.8, 70.0], [23.9, 70.0], [24.0, 70.0], [24.1, 70.0], [24.2, 71.0], [24.3, 71.0], [24.4, 71.0], [24.5, 71.0], [24.6, 71.0], [24.7, 71.0], [24.8, 71.0], [24.9, 72.0], [25.0, 72.0], [25.1, 72.0], [25.2, 72.0], [25.3, 72.0], [25.4, 72.0], [25.5, 72.0], [25.6, 73.0], [25.7, 73.0], [25.8, 73.0], [25.9, 73.0], [26.0, 73.0], [26.1, 73.0], [26.2, 73.0], [26.3, 73.0], [26.4, 73.0], [26.5, 74.0], [26.6, 74.0], [26.7, 74.0], [26.8, 74.0], [26.9, 75.0], [27.0, 75.0], [27.1, 75.0], [27.2, 75.0], [27.3, 75.0], [27.4, 75.0], [27.5, 75.0], [27.6, 75.0], [27.7, 75.0], [27.8, 76.0], [27.9, 76.0], [28.0, 76.0], [28.1, 76.0], [28.2, 76.0], [28.3, 76.0], [28.4, 76.0], [28.5, 76.0], [28.6, 76.0], [28.7, 77.0], [28.8, 77.0], [28.9, 77.0], [29.0, 77.0], [29.1, 77.0], [29.2, 77.0], [29.3, 77.0], [29.4, 77.0], [29.5, 77.0], [29.6, 78.0], [29.7, 78.0], [29.8, 78.0], [29.9, 78.0], [30.0, 78.0], [30.1, 78.0], [30.2, 78.0], [30.3, 78.0], [30.4, 78.0], [30.5, 78.0], [30.6, 78.0], [30.7, 79.0], [30.8, 79.0], [30.9, 79.0], [31.0, 79.0], [31.1, 79.0], [31.2, 79.0], [31.3, 79.0], [31.4, 79.0], [31.5, 80.0], [31.6, 80.0], [31.7, 80.0], [31.8, 80.0], [31.9, 80.0], [32.0, 80.0], [32.1, 80.0], [32.2, 80.0], [32.3, 81.0], [32.4, 81.0], [32.5, 81.0], [32.6, 81.0], [32.7, 81.0], [32.8, 81.0], [32.9, 81.0], [33.0, 81.0], [33.1, 81.0], [33.2, 82.0], [33.3, 82.0], [33.4, 82.0], [33.5, 82.0], [33.6, 82.0], [33.7, 82.0], [33.8, 82.0], [33.9, 83.0], [34.0, 83.0], [34.1, 83.0], [34.2, 83.0], [34.3, 83.0], [34.4, 83.0], [34.5, 83.0], [34.6, 83.0], [34.7, 84.0], [34.8, 84.0], [34.9, 84.0], [35.0, 84.0], [35.1, 84.0], [35.2, 84.0], [35.3, 84.0], [35.4, 85.0], [35.5, 85.0], [35.6, 85.0], [35.7, 85.0], [35.8, 85.0], [35.9, 85.0], [36.0, 86.0], [36.1, 86.0], [36.2, 86.0], [36.3, 86.0], [36.4, 86.0], [36.5, 87.0], [36.6, 87.0], [36.7, 87.0], [36.8, 87.0], [36.9, 87.0], [37.0, 88.0], [37.1, 88.0], [37.2, 88.0], [37.3, 88.0], [37.4, 89.0], [37.5, 89.0], [37.6, 89.0], [37.7, 89.0], [37.8, 90.0], [37.9, 90.0], [38.0, 90.0], [38.1, 91.0], [38.2, 91.0], [38.3, 91.0], [38.4, 91.0], [38.5, 92.0], [38.6, 92.0], [38.7, 92.0], [38.8, 93.0], [38.9, 93.0], [39.0, 94.0], [39.1, 94.0], [39.2, 94.0], [39.3, 95.0], [39.4, 96.0], [39.5, 96.0], [39.6, 97.0], [39.7, 97.0], [39.8, 98.0], [39.9, 98.0], [40.0, 99.0], [40.1, 99.0], [40.2, 100.0], [40.3, 100.0], [40.4, 101.0], [40.5, 102.0], [40.6, 103.0], [40.7, 104.0], [40.8, 104.0], [40.9, 105.0], [41.0, 106.0], [41.1, 107.0], [41.2, 107.0], [41.3, 109.0], [41.4, 110.0], [41.5, 110.0], [41.6, 111.0], [41.7, 112.0], [41.8, 113.0], [41.9, 113.0], [42.0, 113.0], [42.1, 114.0], [42.2, 115.0], [42.3, 116.0], [42.4, 116.0], [42.5, 117.0], [42.6, 118.0], [42.7, 118.0], [42.8, 119.0], [42.9, 119.0], [43.0, 120.0], [43.1, 121.0], [43.2, 121.0], [43.3, 122.0], [43.4, 122.0], [43.5, 123.0], [43.6, 124.0], [43.7, 124.0], [43.8, 124.0], [43.9, 125.0], [44.0, 125.0], [44.1, 126.0], [44.2, 126.0], [44.3, 126.0], [44.4, 127.0], [44.5, 127.0], [44.6, 128.0], [44.7, 128.0], [44.8, 129.0], [44.9, 129.0], [45.0, 130.0], [45.1, 131.0], [45.2, 132.0], [45.3, 133.0], [45.4, 133.0], [45.5, 134.0], [45.6, 134.0], [45.7, 135.0], [45.8, 136.0], [45.9, 137.0], [46.0, 137.0], [46.1, 138.0], [46.2, 138.0], [46.3, 139.0], [46.4, 140.0], [46.5, 141.0], [46.6, 141.0], [46.7, 142.0], [46.8, 143.0], [46.9, 143.0], [47.0, 144.0], [47.1, 145.0], [47.2, 146.0], [47.3, 146.0], [47.4, 148.0], [47.5, 149.0], [47.6, 151.0], [47.7, 152.0], [47.8, 154.0], [47.9, 155.0], [48.0, 156.0], [48.1, 158.0], [48.2, 159.0], [48.3, 160.0], [48.4, 160.0], [48.5, 162.0], [48.6, 162.0], [48.7, 164.0], [48.8, 165.0], [48.9, 166.0], [49.0, 167.0], [49.1, 168.0], [49.2, 169.0], [49.3, 169.0], [49.4, 170.0], [49.5, 171.0], [49.6, 173.0], [49.7, 175.0], [49.8, 176.0], [49.9, 177.0], [50.0, 178.0], [50.1, 178.0], [50.2, 179.0], [50.3, 180.0], [50.4, 181.0], [50.5, 182.0], [50.6, 183.0], [50.7, 184.0], [50.8, 185.0], [50.9, 185.0], [51.0, 186.0], [51.1, 187.0], [51.2, 187.0], [51.3, 188.0], [51.4, 189.0], [51.5, 189.0], [51.6, 190.0], [51.7, 191.0], [51.8, 192.0], [51.9, 192.0], [52.0, 193.0], [52.1, 194.0], [52.2, 195.0], [52.3, 196.0], [52.4, 197.0], [52.5, 198.0], [52.6, 198.0], [52.7, 200.0], [52.8, 200.0], [52.9, 201.0], [53.0, 202.0], [53.1, 203.0], [53.2, 203.0], [53.3, 204.0], [53.4, 204.0], [53.5, 205.0], [53.6, 206.0], [53.7, 207.0], [53.8, 208.0], [53.9, 209.0], [54.0, 210.0], [54.1, 211.0], [54.2, 212.0], [54.3, 213.0], [54.4, 213.0], [54.5, 213.0], [54.6, 214.0], [54.7, 215.0], [54.8, 216.0], [54.9, 216.0], [55.0, 217.0], [55.1, 217.0], [55.2, 218.0], [55.3, 218.0], [55.4, 220.0], [55.5, 220.0], [55.6, 221.0], [55.7, 222.0], [55.8, 223.0], [55.9, 224.0], [56.0, 225.0], [56.1, 225.0], [56.2, 227.0], [56.3, 229.0], [56.4, 229.0], [56.5, 230.0], [56.6, 231.0], [56.7, 232.0], [56.8, 233.0], [56.9, 234.0], [57.0, 235.0], [57.1, 235.0], [57.2, 236.0], [57.3, 237.0], [57.4, 239.0], [57.5, 240.0], [57.6, 241.0], [57.7, 242.0], [57.8, 244.0], [57.9, 244.0], [58.0, 244.0], [58.1, 245.0], [58.2, 246.0], [58.3, 247.0], [58.4, 248.0], [58.5, 249.0], [58.6, 249.0], [58.7, 251.0], [58.8, 252.0], [58.9, 253.0], [59.0, 255.0], [59.1, 256.0], [59.2, 256.0], [59.3, 257.0], [59.4, 259.0], [59.5, 259.0], [59.6, 261.0], [59.7, 261.0], [59.8, 262.0], [59.9, 263.0], [60.0, 264.0], [60.1, 266.0], [60.2, 266.0], [60.3, 267.0], [60.4, 268.0], [60.5, 269.0], [60.6, 271.0], [60.7, 272.0], [60.8, 272.0], [60.9, 274.0], [61.0, 275.0], [61.1, 276.0], [61.2, 277.0], [61.3, 278.0], [61.4, 279.0], [61.5, 280.0], [61.6, 280.0], [61.7, 281.0], [61.8, 282.0], [61.9, 283.0], [62.0, 285.0], [62.1, 287.0], [62.2, 288.0], [62.3, 289.0], [62.4, 291.0], [62.5, 291.0], [62.6, 292.0], [62.7, 295.0], [62.8, 296.0], [62.9, 298.0], [63.0, 299.0], [63.1, 302.0], [63.2, 303.0], [63.3, 304.0], [63.4, 305.0], [63.5, 306.0], [63.6, 308.0], [63.7, 309.0], [63.8, 310.0], [63.9, 310.0], [64.0, 311.0], [64.1, 311.0], [64.2, 313.0], [64.3, 313.0], [64.4, 314.0], [64.5, 316.0], [64.6, 318.0], [64.7, 319.0], [64.8, 320.0], [64.9, 322.0], [65.0, 322.0], [65.1, 323.0], [65.2, 326.0], [65.3, 327.0], [65.4, 327.0], [65.5, 329.0], [65.6, 330.0], [65.7, 331.0], [65.8, 332.0], [65.9, 333.0], [66.0, 335.0], [66.1, 337.0], [66.2, 338.0], [66.3, 338.0], [66.4, 340.0], [66.5, 342.0], [66.6, 343.0], [66.7, 344.0], [66.8, 345.0], [66.9, 347.0], [67.0, 348.0], [67.1, 350.0], [67.2, 352.0], [67.3, 353.0], [67.4, 354.0], [67.5, 355.0], [67.6, 356.0], [67.7, 358.0], [67.8, 360.0], [67.9, 361.0], [68.0, 362.0], [68.1, 364.0], [68.2, 365.0], [68.3, 365.0], [68.4, 366.0], [68.5, 367.0], [68.6, 368.0], [68.7, 370.0], [68.8, 372.0], [68.9, 373.0], [69.0, 374.0], [69.1, 377.0], [69.2, 379.0], [69.3, 380.0], [69.4, 382.0], [69.5, 383.0], [69.6, 384.0], [69.7, 387.0], [69.8, 388.0], [69.9, 389.0], [70.0, 391.0], [70.1, 392.0], [70.2, 394.0], [70.3, 396.0], [70.4, 396.0], [70.5, 399.0], [70.6, 400.0], [70.7, 401.0], [70.8, 402.0], [70.9, 404.0], [71.0, 405.0], [71.1, 406.0], [71.2, 407.0], [71.3, 409.0], [71.4, 410.0], [71.5, 411.0], [71.6, 412.0], [71.7, 413.0], [71.8, 414.0], [71.9, 415.0], [72.0, 416.0], [72.1, 417.0], [72.2, 421.0], [72.3, 423.0], [72.4, 425.0], [72.5, 426.0], [72.6, 428.0], [72.7, 428.0], [72.8, 431.0], [72.9, 432.0], [73.0, 433.0], [73.1, 434.0], [73.2, 436.0], [73.3, 438.0], [73.4, 439.0], [73.5, 439.0], [73.6, 440.0], [73.7, 441.0], [73.8, 442.0], [73.9, 444.0], [74.0, 445.0], [74.1, 447.0], [74.2, 448.0], [74.3, 449.0], [74.4, 450.0], [74.5, 452.0], [74.6, 453.0], [74.7, 455.0], [74.8, 457.0], [74.9, 459.0], [75.0, 460.0], [75.1, 461.0], [75.2, 464.0], [75.3, 466.0], [75.4, 467.0], [75.5, 468.0], [75.6, 469.0], [75.7, 471.0], [75.8, 471.0], [75.9, 472.0], [76.0, 473.0], [76.1, 473.0], [76.2, 475.0], [76.3, 477.0], [76.4, 479.0], [76.5, 481.0], [76.6, 482.0], [76.7, 483.0], [76.8, 484.0], [76.9, 485.0], [77.0, 485.0], [77.1, 487.0], [77.2, 488.0], [77.3, 489.0], [77.4, 490.0], [77.5, 491.0], [77.6, 493.0], [77.7, 494.0], [77.8, 495.0], [77.9, 496.0], [78.0, 497.0], [78.1, 500.0], [78.2, 500.0], [78.3, 503.0], [78.4, 505.0], [78.5, 506.0], [78.6, 507.0], [78.7, 510.0], [78.8, 511.0], [78.9, 514.0], [79.0, 516.0], [79.1, 518.0], [79.2, 520.0], [79.3, 520.0], [79.4, 522.0], [79.5, 523.0], [79.6, 525.0], [79.7, 528.0], [79.8, 532.0], [79.9, 533.0], [80.0, 534.0], [80.1, 536.0], [80.2, 539.0], [80.3, 541.0], [80.4, 542.0], [80.5, 543.0], [80.6, 546.0], [80.7, 548.0], [80.8, 549.0], [80.9, 551.0], [81.0, 554.0], [81.1, 556.0], [81.2, 557.0], [81.3, 558.0], [81.4, 560.0], [81.5, 561.0], [81.6, 561.0], [81.7, 564.0], [81.8, 564.0], [81.9, 566.0], [82.0, 569.0], [82.1, 572.0], [82.2, 574.0], [82.3, 575.0], [82.4, 578.0], [82.5, 579.0], [82.6, 583.0], [82.7, 585.0], [82.8, 586.0], [82.9, 589.0], [83.0, 592.0], [83.1, 592.0], [83.2, 596.0], [83.3, 597.0], [83.4, 599.0], [83.5, 601.0], [83.6, 603.0], [83.7, 605.0], [83.8, 609.0], [83.9, 611.0], [84.0, 612.0], [84.1, 614.0], [84.2, 614.0], [84.3, 615.0], [84.4, 618.0], [84.5, 619.0], [84.6, 622.0], [84.7, 624.0], [84.8, 628.0], [84.9, 630.0], [85.0, 631.0], [85.1, 632.0], [85.2, 634.0], [85.3, 635.0], [85.4, 639.0], [85.5, 642.0], [85.6, 644.0], [85.7, 645.0], [85.8, 646.0], [85.9, 647.0], [86.0, 649.0], [86.1, 650.0], [86.2, 653.0], [86.3, 656.0], [86.4, 658.0], [86.5, 662.0], [86.6, 663.0], [86.7, 666.0], [86.8, 667.0], [86.9, 668.0], [87.0, 669.0], [87.1, 671.0], [87.2, 672.0], [87.3, 674.0], [87.4, 675.0], [87.5, 679.0], [87.6, 681.0], [87.7, 683.0], [87.8, 685.0], [87.9, 689.0], [88.0, 691.0], [88.1, 693.0], [88.2, 695.0], [88.3, 697.0], [88.4, 701.0], [88.5, 707.0], [88.6, 708.0], [88.7, 712.0], [88.8, 713.0], [88.9, 715.0], [89.0, 718.0], [89.1, 722.0], [89.2, 725.0], [89.3, 729.0], [89.4, 735.0], [89.5, 739.0], [89.6, 742.0], [89.7, 745.0], [89.8, 749.0], [89.9, 752.0], [90.0, 755.0], [90.1, 761.0], [90.2, 764.0], [90.3, 771.0], [90.4, 774.0], [90.5, 778.0], [90.6, 781.0], [90.7, 784.0], [90.8, 786.0], [90.9, 790.0], [91.0, 794.0], [91.1, 797.0], [91.2, 804.0], [91.3, 811.0], [91.4, 816.0], [91.5, 819.0], [91.6, 823.0], [91.7, 825.0], [91.8, 829.0], [91.9, 833.0], [92.0, 839.0], [92.1, 844.0], [92.2, 847.0], [92.3, 852.0], [92.4, 855.0], [92.5, 861.0], [92.6, 865.0], [92.7, 869.0], [92.8, 873.0], [92.9, 877.0], [93.0, 884.0], [93.1, 891.0], [93.2, 897.0], [93.3, 900.0], [93.4, 901.0], [93.5, 907.0], [93.6, 911.0], [93.7, 917.0], [93.8, 929.0], [93.9, 933.0], [94.0, 939.0], [94.1, 941.0], [94.2, 944.0], [94.3, 948.0], [94.4, 957.0], [94.5, 959.0], [94.6, 965.0], [94.7, 974.0], [94.8, 978.0], [94.9, 983.0], [95.0, 990.0], [95.1, 999.0], [95.2, 1007.0], [95.3, 1013.0], [95.4, 1020.0], [95.5, 1024.0], [95.6, 1031.0], [95.7, 1037.0], [95.8, 1044.0], [95.9, 1048.0], [96.0, 1056.0], [96.1, 1065.0], [96.2, 1069.0], [96.3, 1075.0], [96.4, 1081.0], [96.5, 1090.0], [96.6, 1097.0], [96.7, 1099.0], [96.8, 1112.0], [96.9, 1125.0], [97.0, 1139.0], [97.1, 1161.0], [97.2, 1177.0], [97.3, 1189.0], [97.4, 1218.0], [97.5, 1225.0], [97.6, 1234.0], [97.7, 1248.0], [97.8, 1268.0], [97.9, 1290.0], [98.0, 1312.0], [98.1, 1332.0], [98.2, 1350.0], [98.3, 1378.0], [98.4, 1388.0], [98.5, 1434.0], [98.6, 1453.0], [98.7, 1491.0], [98.8, 1514.0], [98.9, 1536.0], [99.0, 1556.0], [99.1, 1571.0], [99.2, 1601.0], [99.3, 1678.0], [99.4, 1704.0], [99.5, 1815.0], [99.6, 1892.0], [99.7, 2026.0], [99.8, 2069.0], [99.9, 2243.0], [100.0, 3340.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 2113.0, "series": [{"data": [[0.0, 2113.0], [600.0, 260.0], [700.0, 148.0], [800.0, 111.0], [900.0, 96.0], [1000.0, 84.0], [1100.0, 31.0], [1200.0, 34.0], [1300.0, 24.0], [1400.0, 18.0], [1500.0, 22.0], [100.0, 658.0], [1600.0, 12.0], [1700.0, 5.0], [1800.0, 7.0], [1900.0, 3.0], [2000.0, 9.0], [2100.0, 1.0], [2200.0, 3.0], [2300.0, 1.0], [2900.0, 1.0], [200.0, 545.0], [3300.0, 1.0], [3200.0, 1.0], [300.0, 398.0], [400.0, 395.0], [500.0, 281.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3300.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 65.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 4118.0, "series": [{"data": [[0.0, 4118.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1079.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 65.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.90196078431373, "minX": 1.60280394E12, "maxY": 10.0, "series": [{"data": [[1.60280412E12, 9.957666980244591], [1.60280394E12, 9.90196078431373], [1.60280406E12, 10.0], [1.602804E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60280412E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 308.4451010293553, "minX": 1.0, "maxY": 3251.0, "series": [{"data": [[4.0, 1083.0], [8.0, 595.0], [2.0, 3251.0], [1.0, 2999.0], [9.0, 757.6666666666666], [5.0, 1143.5], [10.0, 308.4451010293553], [3.0, 702.0], [6.0, 1046.0], [7.0, 1763.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.98669707335615, 311.3350437096148]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 2284.516666666667, "minX": 1.60280394E12, "maxY": 1664036.4333333333, "series": [{"data": [[1.60280412E12, 1054062.55], [1.60280394E12, 85982.58333333333], [1.60280406E12, 1447164.1833333333], [1.602804E12, 1664036.4333333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60280412E12, 9395.9], [1.60280394E12, 2284.516666666667], [1.60280406E12, 20278.316666666666], [1.602804E12, 13532.216666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60280412E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 251.52432885906055, "minX": 1.60280394E12, "maxY": 379.896153846153, "series": [{"data": [[1.60280412E12, 353.4026340545624], [1.60280394E12, 275.7098039215685], [1.60280406E12, 251.52432885906055], [1.602804E12, 379.896153846153]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60280412E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 251.20134228187885, "minX": 1.60280394E12, "maxY": 379.35320512820545, "series": [{"data": [[1.60280412E12, 352.9143932267174], [1.60280394E12, 275.4549019607843], [1.60280406E12, 251.20134228187885], [1.602804E12, 379.35320512820545]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60280412E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.009615384615384628, "minX": 1.60280394E12, "maxY": 0.305882352941177, "series": [{"data": [[1.60280412E12, 0.011288805268109128], [1.60280394E12, 0.305882352941177], [1.60280406E12, 0.014261744966442964], [1.602804E12, 0.009615384615384628]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60280412E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 28.0, "minX": 1.60280394E12, "maxY": 3340.0, "series": [{"data": [[1.60280412E12, 3340.0], [1.60280394E12, 1297.0], [1.60280406E12, 2136.0], [1.602804E12, 2209.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60280412E12, 33.0], [1.60280394E12, 36.30399993896484], [1.60280406E12, 33.0], [1.602804E12, 33.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60280412E12, 33.0], [1.60280394E12, 36.53440002441406], [1.60280406E12, 34.0], [1.602804E12, 33.45390014886856]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60280412E12, 33.0], [1.60280394E12, 36.43199996948242], [1.60280406E12, 33.657499715685844], [1.602804E12, 33.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60280412E12, 30.0], [1.60280394E12, 31.0], [1.60280406E12, 28.0], [1.602804E12, 30.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60280412E12, 213.0], [1.60280394E12, 92.0], [1.60280406E12, 134.0], [1.602804E12, 258.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60280412E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 52.0, "minX": 1.0, "maxY": 2999.0, "series": [{"data": [[4.0, 1362.0], [5.0, 124.0], [6.0, 1329.5], [7.0, 1007.0], [8.0, 823.0], [9.0, 1012.5], [10.0, 613.5], [11.0, 798.0], [12.0, 719.0], [13.0, 658.0], [14.0, 693.0], [15.0, 779.0], [16.0, 489.0], [17.0, 588.5], [18.0, 617.5], [19.0, 477.0], [20.0, 451.0], [21.0, 448.0], [22.0, 330.0], [23.0, 440.0], [24.0, 339.5], [25.0, 426.0], [26.0, 288.0], [27.0, 272.0], [28.0, 266.5], [29.0, 81.0], [30.0, 315.5], [31.0, 182.0], [32.0, 242.5], [33.0, 245.0], [34.0, 91.5], [36.0, 82.0], [37.0, 219.0], [38.0, 126.5], [39.0, 134.0], [41.0, 84.0], [40.0, 190.0], [42.0, 125.5], [44.0, 165.0], [46.0, 77.5], [48.0, 113.0], [49.0, 75.0], [51.0, 104.0], [53.0, 82.0], [54.0, 134.0], [55.0, 140.0], [56.0, 165.0], [58.0, 84.0], [61.0, 91.0], [62.0, 67.0], [63.0, 140.0], [65.0, 100.5], [67.0, 128.0], [64.0, 81.5], [69.0, 83.0], [68.0, 71.0], [71.0, 124.0], [73.0, 73.0], [72.0, 96.0], [76.0, 87.0], [77.0, 52.0], [80.0, 74.5], [81.0, 119.0], [97.0, 86.0], [1.0, 2999.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 97.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 52.0, "minX": 1.0, "maxY": 2999.0, "series": [{"data": [[4.0, 1360.0], [5.0, 123.0], [6.0, 1328.5], [7.0, 1007.0], [8.0, 819.5], [9.0, 1006.5], [10.0, 612.0], [11.0, 797.0], [12.0, 718.5], [13.0, 655.0], [14.0, 692.0], [15.0, 779.0], [16.0, 489.0], [17.0, 588.0], [18.0, 617.0], [19.0, 477.0], [20.0, 450.5], [21.0, 447.0], [22.0, 330.0], [23.0, 440.0], [24.0, 337.0], [25.0, 426.0], [26.0, 287.0], [27.0, 269.0], [28.0, 266.5], [29.0, 81.0], [30.0, 313.5], [31.0, 182.0], [32.0, 242.5], [33.0, 245.0], [34.0, 91.5], [36.0, 82.0], [37.0, 219.0], [38.0, 126.5], [39.0, 134.0], [41.0, 84.0], [40.0, 189.5], [42.0, 125.0], [44.0, 165.0], [46.0, 77.5], [48.0, 113.0], [49.0, 75.0], [51.0, 104.0], [53.0, 81.0], [54.0, 134.0], [55.0, 139.0], [56.0, 165.0], [58.0, 84.0], [61.0, 91.0], [62.0, 67.0], [63.0, 139.0], [65.0, 100.5], [67.0, 128.0], [64.0, 81.5], [69.0, 83.0], [68.0, 71.0], [71.0, 124.0], [73.0, 73.0], [72.0, 96.0], [76.0, 87.0], [77.0, 52.0], [80.0, 74.0], [81.0, 118.0], [97.0, 86.0], [1.0, 2999.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 97.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 4.416666666666667, "minX": 1.60280394E12, "maxY": 39.75, "series": [{"data": [[1.60280412E12, 17.55], [1.60280394E12, 4.416666666666667], [1.60280406E12, 39.75], [1.602804E12, 25.983333333333334]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60280412E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 4.25, "minX": 1.60280394E12, "maxY": 39.733333333333334, "series": [{"data": [[1.60280412E12, 17.716666666666665], [1.60280394E12, 4.25], [1.60280406E12, 39.733333333333334], [1.602804E12, 26.0]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60280412E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 4.25, "minX": 1.60280394E12, "maxY": 39.733333333333334, "series": [{"data": [[1.60280412E12, 17.716666666666665], [1.60280394E12, 4.25], [1.60280406E12, 39.733333333333334], [1.602804E12, 26.0]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60280412E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 4.25, "minX": 1.60280394E12, "maxY": 39.733333333333334, "series": [{"data": [[1.60280412E12, 17.716666666666665], [1.60280394E12, 4.25], [1.60280406E12, 39.733333333333334], [1.602804E12, 26.0]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60280412E12, "title": "Total Transactions Per Second"}},
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

