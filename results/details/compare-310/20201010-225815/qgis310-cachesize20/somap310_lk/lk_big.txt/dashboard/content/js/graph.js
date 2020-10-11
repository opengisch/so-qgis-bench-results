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
        data: {"result": {"minY": 29.0, "minX": 0.0, "maxY": 3218.0, "series": [{"data": [[0.0, 29.0], [0.1, 31.0], [0.2, 32.0], [0.3, 32.0], [0.4, 33.0], [0.5, 33.0], [0.6, 34.0], [0.7, 34.0], [0.8, 34.0], [0.9, 34.0], [1.0, 34.0], [1.1, 35.0], [1.2, 35.0], [1.3, 35.0], [1.4, 35.0], [1.5, 35.0], [1.6, 35.0], [1.7, 36.0], [1.8, 36.0], [1.9, 36.0], [2.0, 36.0], [2.1, 36.0], [2.2, 36.0], [2.3, 36.0], [2.4, 37.0], [2.5, 37.0], [2.6, 37.0], [2.7, 37.0], [2.8, 37.0], [2.9, 37.0], [3.0, 37.0], [3.1, 37.0], [3.2, 37.0], [3.3, 37.0], [3.4, 37.0], [3.5, 37.0], [3.6, 37.0], [3.7, 37.0], [3.8, 37.0], [3.9, 38.0], [4.0, 38.0], [4.1, 38.0], [4.2, 38.0], [4.3, 38.0], [4.4, 38.0], [4.5, 38.0], [4.6, 38.0], [4.7, 38.0], [4.8, 38.0], [4.9, 38.0], [5.0, 38.0], [5.1, 38.0], [5.2, 38.0], [5.3, 39.0], [5.4, 39.0], [5.5, 39.0], [5.6, 39.0], [5.7, 39.0], [5.8, 39.0], [5.9, 39.0], [6.0, 39.0], [6.1, 39.0], [6.2, 39.0], [6.3, 39.0], [6.4, 39.0], [6.5, 39.0], [6.6, 39.0], [6.7, 39.0], [6.8, 40.0], [6.9, 40.0], [7.0, 40.0], [7.1, 40.0], [7.2, 40.0], [7.3, 40.0], [7.4, 40.0], [7.5, 40.0], [7.6, 40.0], [7.7, 40.0], [7.8, 40.0], [7.9, 40.0], [8.0, 40.0], [8.1, 40.0], [8.2, 40.0], [8.3, 40.0], [8.4, 40.0], [8.5, 40.0], [8.6, 40.0], [8.7, 41.0], [8.8, 41.0], [8.9, 41.0], [9.0, 41.0], [9.1, 41.0], [9.2, 41.0], [9.3, 41.0], [9.4, 41.0], [9.5, 41.0], [9.6, 41.0], [9.7, 41.0], [9.8, 41.0], [9.9, 41.0], [10.0, 41.0], [10.1, 41.0], [10.2, 41.0], [10.3, 42.0], [10.4, 42.0], [10.5, 42.0], [10.6, 42.0], [10.7, 42.0], [10.8, 42.0], [10.9, 42.0], [11.0, 42.0], [11.1, 42.0], [11.2, 42.0], [11.3, 42.0], [11.4, 42.0], [11.5, 42.0], [11.6, 42.0], [11.7, 42.0], [11.8, 43.0], [11.9, 43.0], [12.0, 43.0], [12.1, 43.0], [12.2, 43.0], [12.3, 43.0], [12.4, 43.0], [12.5, 43.0], [12.6, 43.0], [12.7, 43.0], [12.8, 43.0], [12.9, 43.0], [13.0, 43.0], [13.1, 43.0], [13.2, 43.0], [13.3, 43.0], [13.4, 43.0], [13.5, 44.0], [13.6, 44.0], [13.7, 44.0], [13.8, 44.0], [13.9, 44.0], [14.0, 44.0], [14.1, 44.0], [14.2, 44.0], [14.3, 44.0], [14.4, 44.0], [14.5, 44.0], [14.6, 44.0], [14.7, 44.0], [14.8, 44.0], [14.9, 45.0], [15.0, 45.0], [15.1, 45.0], [15.2, 45.0], [15.3, 45.0], [15.4, 45.0], [15.5, 45.0], [15.6, 45.0], [15.7, 45.0], [15.8, 45.0], [15.9, 45.0], [16.0, 45.0], [16.1, 45.0], [16.2, 46.0], [16.3, 46.0], [16.4, 46.0], [16.5, 46.0], [16.6, 46.0], [16.7, 46.0], [16.8, 46.0], [16.9, 46.0], [17.0, 46.0], [17.1, 46.0], [17.2, 46.0], [17.3, 46.0], [17.4, 47.0], [17.5, 47.0], [17.6, 47.0], [17.7, 47.0], [17.8, 47.0], [17.9, 47.0], [18.0, 47.0], [18.1, 47.0], [18.2, 47.0], [18.3, 48.0], [18.4, 48.0], [18.5, 48.0], [18.6, 48.0], [18.7, 48.0], [18.8, 48.0], [18.9, 48.0], [19.0, 48.0], [19.1, 48.0], [19.2, 49.0], [19.3, 49.0], [19.4, 49.0], [19.5, 49.0], [19.6, 49.0], [19.7, 49.0], [19.8, 49.0], [19.9, 50.0], [20.0, 50.0], [20.1, 50.0], [20.2, 50.0], [20.3, 50.0], [20.4, 50.0], [20.5, 51.0], [20.6, 51.0], [20.7, 51.0], [20.8, 51.0], [20.9, 51.0], [21.0, 51.0], [21.1, 52.0], [21.2, 52.0], [21.3, 52.0], [21.4, 52.0], [21.5, 52.0], [21.6, 53.0], [21.7, 53.0], [21.8, 53.0], [21.9, 53.0], [22.0, 54.0], [22.1, 54.0], [22.2, 54.0], [22.3, 55.0], [22.4, 55.0], [22.5, 55.0], [22.6, 56.0], [22.7, 56.0], [22.8, 56.0], [22.9, 56.0], [23.0, 56.0], [23.1, 57.0], [23.2, 57.0], [23.3, 58.0], [23.4, 58.0], [23.5, 58.0], [23.6, 59.0], [23.7, 59.0], [23.8, 60.0], [23.9, 60.0], [24.0, 60.0], [24.1, 60.0], [24.2, 61.0], [24.3, 61.0], [24.4, 61.0], [24.5, 61.0], [24.6, 62.0], [24.7, 62.0], [24.8, 62.0], [24.9, 62.0], [25.0, 62.0], [25.1, 62.0], [25.2, 63.0], [25.3, 63.0], [25.4, 63.0], [25.5, 64.0], [25.6, 64.0], [25.7, 64.0], [25.8, 64.0], [25.9, 65.0], [26.0, 65.0], [26.1, 65.0], [26.2, 65.0], [26.3, 66.0], [26.4, 66.0], [26.5, 66.0], [26.6, 66.0], [26.7, 66.0], [26.8, 67.0], [26.9, 67.0], [27.0, 67.0], [27.1, 68.0], [27.2, 68.0], [27.3, 68.0], [27.4, 68.0], [27.5, 68.0], [27.6, 69.0], [27.7, 69.0], [27.8, 69.0], [27.9, 69.0], [28.0, 70.0], [28.1, 70.0], [28.2, 70.0], [28.3, 71.0], [28.4, 71.0], [28.5, 71.0], [28.6, 71.0], [28.7, 71.0], [28.8, 72.0], [28.9, 72.0], [29.0, 72.0], [29.1, 72.0], [29.2, 72.0], [29.3, 72.0], [29.4, 73.0], [29.5, 73.0], [29.6, 73.0], [29.7, 73.0], [29.8, 73.0], [29.9, 73.0], [30.0, 73.0], [30.1, 74.0], [30.2, 74.0], [30.3, 74.0], [30.4, 74.0], [30.5, 74.0], [30.6, 74.0], [30.7, 75.0], [30.8, 75.0], [30.9, 75.0], [31.0, 75.0], [31.1, 75.0], [31.2, 75.0], [31.3, 76.0], [31.4, 76.0], [31.5, 76.0], [31.6, 76.0], [31.7, 76.0], [31.8, 76.0], [31.9, 76.0], [32.0, 77.0], [32.1, 77.0], [32.2, 77.0], [32.3, 77.0], [32.4, 77.0], [32.5, 78.0], [32.6, 78.0], [32.7, 78.0], [32.8, 78.0], [32.9, 78.0], [33.0, 78.0], [33.1, 78.0], [33.2, 79.0], [33.3, 79.0], [33.4, 79.0], [33.5, 79.0], [33.6, 79.0], [33.7, 79.0], [33.8, 79.0], [33.9, 79.0], [34.0, 80.0], [34.1, 80.0], [34.2, 80.0], [34.3, 80.0], [34.4, 80.0], [34.5, 80.0], [34.6, 80.0], [34.7, 80.0], [34.8, 81.0], [34.9, 81.0], [35.0, 81.0], [35.1, 81.0], [35.2, 81.0], [35.3, 81.0], [35.4, 82.0], [35.5, 82.0], [35.6, 82.0], [35.7, 82.0], [35.8, 82.0], [35.9, 82.0], [36.0, 83.0], [36.1, 83.0], [36.2, 83.0], [36.3, 83.0], [36.4, 83.0], [36.5, 83.0], [36.6, 84.0], [36.7, 84.0], [36.8, 84.0], [36.9, 85.0], [37.0, 85.0], [37.1, 85.0], [37.2, 85.0], [37.3, 85.0], [37.4, 85.0], [37.5, 86.0], [37.6, 86.0], [37.7, 86.0], [37.8, 86.0], [37.9, 86.0], [38.0, 87.0], [38.1, 87.0], [38.2, 87.0], [38.3, 87.0], [38.4, 88.0], [38.5, 88.0], [38.6, 88.0], [38.7, 88.0], [38.8, 88.0], [38.9, 89.0], [39.0, 89.0], [39.1, 89.0], [39.2, 89.0], [39.3, 90.0], [39.4, 90.0], [39.5, 90.0], [39.6, 90.0], [39.7, 91.0], [39.8, 91.0], [39.9, 92.0], [40.0, 92.0], [40.1, 93.0], [40.2, 93.0], [40.3, 93.0], [40.4, 94.0], [40.5, 94.0], [40.6, 95.0], [40.7, 96.0], [40.8, 96.0], [40.9, 97.0], [41.0, 97.0], [41.1, 98.0], [41.2, 99.0], [41.3, 100.0], [41.4, 100.0], [41.5, 101.0], [41.6, 102.0], [41.7, 103.0], [41.8, 103.0], [41.9, 103.0], [42.0, 104.0], [42.1, 105.0], [42.2, 106.0], [42.3, 107.0], [42.4, 108.0], [42.5, 110.0], [42.6, 110.0], [42.7, 111.0], [42.8, 113.0], [42.9, 113.0], [43.0, 114.0], [43.1, 115.0], [43.2, 115.0], [43.3, 115.0], [43.4, 116.0], [43.5, 117.0], [43.6, 118.0], [43.7, 118.0], [43.8, 119.0], [43.9, 119.0], [44.0, 119.0], [44.1, 120.0], [44.2, 121.0], [44.3, 122.0], [44.4, 122.0], [44.5, 122.0], [44.6, 123.0], [44.7, 123.0], [44.8, 124.0], [44.9, 125.0], [45.0, 125.0], [45.1, 126.0], [45.2, 126.0], [45.3, 127.0], [45.4, 128.0], [45.5, 128.0], [45.6, 128.0], [45.7, 129.0], [45.8, 129.0], [45.9, 130.0], [46.0, 131.0], [46.1, 132.0], [46.2, 132.0], [46.3, 133.0], [46.4, 133.0], [46.5, 135.0], [46.6, 135.0], [46.7, 136.0], [46.8, 137.0], [46.9, 137.0], [47.0, 138.0], [47.1, 138.0], [47.2, 139.0], [47.3, 139.0], [47.4, 140.0], [47.5, 141.0], [47.6, 142.0], [47.7, 143.0], [47.8, 144.0], [47.9, 145.0], [48.0, 146.0], [48.1, 146.0], [48.2, 147.0], [48.3, 148.0], [48.4, 150.0], [48.5, 152.0], [48.6, 154.0], [48.7, 155.0], [48.8, 158.0], [48.9, 158.0], [49.0, 159.0], [49.1, 160.0], [49.2, 161.0], [49.3, 162.0], [49.4, 163.0], [49.5, 164.0], [49.6, 165.0], [49.7, 167.0], [49.8, 168.0], [49.9, 169.0], [50.0, 170.0], [50.1, 171.0], [50.2, 173.0], [50.3, 174.0], [50.4, 176.0], [50.5, 176.0], [50.6, 177.0], [50.7, 178.0], [50.8, 180.0], [50.9, 180.0], [51.0, 182.0], [51.1, 182.0], [51.2, 182.0], [51.3, 183.0], [51.4, 184.0], [51.5, 184.0], [51.6, 185.0], [51.7, 186.0], [51.8, 187.0], [51.9, 188.0], [52.0, 188.0], [52.1, 190.0], [52.2, 190.0], [52.3, 191.0], [52.4, 191.0], [52.5, 192.0], [52.6, 193.0], [52.7, 194.0], [52.8, 195.0], [52.9, 196.0], [53.0, 198.0], [53.1, 198.0], [53.2, 199.0], [53.3, 200.0], [53.4, 201.0], [53.5, 202.0], [53.6, 203.0], [53.7, 203.0], [53.8, 204.0], [53.9, 205.0], [54.0, 205.0], [54.1, 206.0], [54.2, 206.0], [54.3, 207.0], [54.4, 208.0], [54.5, 209.0], [54.6, 209.0], [54.7, 209.0], [54.8, 210.0], [54.9, 210.0], [55.0, 211.0], [55.1, 211.0], [55.2, 212.0], [55.3, 212.0], [55.4, 213.0], [55.5, 214.0], [55.6, 214.0], [55.7, 215.0], [55.8, 216.0], [55.9, 216.0], [56.0, 217.0], [56.1, 217.0], [56.2, 218.0], [56.3, 219.0], [56.4, 219.0], [56.5, 220.0], [56.6, 221.0], [56.7, 222.0], [56.8, 223.0], [56.9, 223.0], [57.0, 224.0], [57.1, 225.0], [57.2, 225.0], [57.3, 226.0], [57.4, 227.0], [57.5, 227.0], [57.6, 228.0], [57.7, 229.0], [57.8, 229.0], [57.9, 231.0], [58.0, 231.0], [58.1, 232.0], [58.2, 233.0], [58.3, 234.0], [58.4, 235.0], [58.5, 235.0], [58.6, 236.0], [58.7, 237.0], [58.8, 239.0], [58.9, 240.0], [59.0, 240.0], [59.1, 241.0], [59.2, 242.0], [59.3, 243.0], [59.4, 244.0], [59.5, 245.0], [59.6, 246.0], [59.7, 247.0], [59.8, 247.0], [59.9, 248.0], [60.0, 249.0], [60.1, 249.0], [60.2, 250.0], [60.3, 252.0], [60.4, 253.0], [60.5, 254.0], [60.6, 255.0], [60.7, 256.0], [60.8, 257.0], [60.9, 257.0], [61.0, 259.0], [61.1, 260.0], [61.2, 260.0], [61.3, 262.0], [61.4, 264.0], [61.5, 265.0], [61.6, 266.0], [61.7, 267.0], [61.8, 268.0], [61.9, 270.0], [62.0, 270.0], [62.1, 271.0], [62.2, 272.0], [62.3, 274.0], [62.4, 275.0], [62.5, 277.0], [62.6, 278.0], [62.7, 279.0], [62.8, 281.0], [62.9, 282.0], [63.0, 283.0], [63.1, 285.0], [63.2, 287.0], [63.3, 288.0], [63.4, 290.0], [63.5, 291.0], [63.6, 292.0], [63.7, 294.0], [63.8, 295.0], [63.9, 296.0], [64.0, 296.0], [64.1, 298.0], [64.2, 299.0], [64.3, 301.0], [64.4, 302.0], [64.5, 303.0], [64.6, 304.0], [64.7, 305.0], [64.8, 306.0], [64.9, 307.0], [65.0, 309.0], [65.1, 310.0], [65.2, 311.0], [65.3, 313.0], [65.4, 313.0], [65.5, 314.0], [65.6, 315.0], [65.7, 316.0], [65.8, 318.0], [65.9, 319.0], [66.0, 320.0], [66.1, 321.0], [66.2, 322.0], [66.3, 323.0], [66.4, 324.0], [66.5, 326.0], [66.6, 327.0], [66.7, 329.0], [66.8, 331.0], [66.9, 332.0], [67.0, 332.0], [67.1, 333.0], [67.2, 335.0], [67.3, 335.0], [67.4, 336.0], [67.5, 338.0], [67.6, 340.0], [67.7, 341.0], [67.8, 342.0], [67.9, 344.0], [68.0, 346.0], [68.1, 347.0], [68.2, 348.0], [68.3, 349.0], [68.4, 351.0], [68.5, 351.0], [68.6, 353.0], [68.7, 354.0], [68.8, 356.0], [68.9, 357.0], [69.0, 358.0], [69.1, 359.0], [69.2, 361.0], [69.3, 362.0], [69.4, 363.0], [69.5, 365.0], [69.6, 366.0], [69.7, 366.0], [69.8, 367.0], [69.9, 368.0], [70.0, 370.0], [70.1, 371.0], [70.2, 372.0], [70.3, 374.0], [70.4, 376.0], [70.5, 377.0], [70.6, 378.0], [70.7, 379.0], [70.8, 381.0], [70.9, 383.0], [71.0, 383.0], [71.1, 385.0], [71.2, 386.0], [71.3, 387.0], [71.4, 389.0], [71.5, 390.0], [71.6, 391.0], [71.7, 393.0], [71.8, 393.0], [71.9, 394.0], [72.0, 395.0], [72.1, 396.0], [72.2, 398.0], [72.3, 399.0], [72.4, 400.0], [72.5, 402.0], [72.6, 404.0], [72.7, 406.0], [72.8, 407.0], [72.9, 408.0], [73.0, 410.0], [73.1, 411.0], [73.2, 413.0], [73.3, 416.0], [73.4, 417.0], [73.5, 418.0], [73.6, 420.0], [73.7, 422.0], [73.8, 424.0], [73.9, 426.0], [74.0, 427.0], [74.1, 430.0], [74.2, 432.0], [74.3, 433.0], [74.4, 434.0], [74.5, 435.0], [74.6, 437.0], [74.7, 439.0], [74.8, 440.0], [74.9, 440.0], [75.0, 442.0], [75.1, 444.0], [75.2, 445.0], [75.3, 446.0], [75.4, 449.0], [75.5, 450.0], [75.6, 454.0], [75.7, 455.0], [75.8, 456.0], [75.9, 457.0], [76.0, 459.0], [76.1, 460.0], [76.2, 463.0], [76.3, 467.0], [76.4, 471.0], [76.5, 473.0], [76.6, 475.0], [76.7, 476.0], [76.8, 478.0], [76.9, 479.0], [77.0, 481.0], [77.1, 483.0], [77.2, 485.0], [77.3, 486.0], [77.4, 488.0], [77.5, 490.0], [77.6, 492.0], [77.7, 493.0], [77.8, 495.0], [77.9, 497.0], [78.0, 499.0], [78.1, 500.0], [78.2, 502.0], [78.3, 505.0], [78.4, 507.0], [78.5, 508.0], [78.6, 510.0], [78.7, 511.0], [78.8, 511.0], [78.9, 513.0], [79.0, 516.0], [79.1, 517.0], [79.2, 519.0], [79.3, 520.0], [79.4, 521.0], [79.5, 521.0], [79.6, 522.0], [79.7, 523.0], [79.8, 527.0], [79.9, 530.0], [80.0, 530.0], [80.1, 534.0], [80.2, 539.0], [80.3, 540.0], [80.4, 541.0], [80.5, 542.0], [80.6, 545.0], [80.7, 548.0], [80.8, 549.0], [80.9, 553.0], [81.0, 555.0], [81.1, 559.0], [81.2, 563.0], [81.3, 564.0], [81.4, 567.0], [81.5, 569.0], [81.6, 571.0], [81.7, 573.0], [81.8, 573.0], [81.9, 575.0], [82.0, 577.0], [82.1, 579.0], [82.2, 580.0], [82.3, 581.0], [82.4, 583.0], [82.5, 586.0], [82.6, 590.0], [82.7, 591.0], [82.8, 592.0], [82.9, 594.0], [83.0, 597.0], [83.1, 598.0], [83.2, 601.0], [83.3, 604.0], [83.4, 605.0], [83.5, 607.0], [83.6, 608.0], [83.7, 610.0], [83.8, 611.0], [83.9, 613.0], [84.0, 614.0], [84.1, 618.0], [84.2, 620.0], [84.3, 622.0], [84.4, 624.0], [84.5, 628.0], [84.6, 630.0], [84.7, 632.0], [84.8, 636.0], [84.9, 638.0], [85.0, 640.0], [85.1, 641.0], [85.2, 642.0], [85.3, 645.0], [85.4, 646.0], [85.5, 649.0], [85.6, 651.0], [85.7, 653.0], [85.8, 655.0], [85.9, 659.0], [86.0, 662.0], [86.1, 665.0], [86.2, 668.0], [86.3, 673.0], [86.4, 675.0], [86.5, 676.0], [86.6, 679.0], [86.7, 683.0], [86.8, 684.0], [86.9, 686.0], [87.0, 688.0], [87.1, 690.0], [87.2, 694.0], [87.3, 697.0], [87.4, 700.0], [87.5, 703.0], [87.6, 705.0], [87.7, 707.0], [87.8, 709.0], [87.9, 711.0], [88.0, 714.0], [88.1, 717.0], [88.2, 719.0], [88.3, 723.0], [88.4, 726.0], [88.5, 729.0], [88.6, 735.0], [88.7, 736.0], [88.8, 739.0], [88.9, 742.0], [89.0, 749.0], [89.1, 750.0], [89.2, 756.0], [89.3, 758.0], [89.4, 762.0], [89.5, 766.0], [89.6, 770.0], [89.7, 773.0], [89.8, 775.0], [89.9, 779.0], [90.0, 781.0], [90.1, 783.0], [90.2, 784.0], [90.3, 786.0], [90.4, 788.0], [90.5, 793.0], [90.6, 794.0], [90.7, 798.0], [90.8, 802.0], [90.9, 805.0], [91.0, 810.0], [91.1, 814.0], [91.2, 816.0], [91.3, 820.0], [91.4, 822.0], [91.5, 825.0], [91.6, 831.0], [91.7, 841.0], [91.8, 843.0], [91.9, 847.0], [92.0, 850.0], [92.1, 857.0], [92.2, 865.0], [92.3, 868.0], [92.4, 873.0], [92.5, 879.0], [92.6, 882.0], [92.7, 887.0], [92.8, 891.0], [92.9, 894.0], [93.0, 896.0], [93.1, 902.0], [93.2, 906.0], [93.3, 909.0], [93.4, 915.0], [93.5, 916.0], [93.6, 928.0], [93.7, 943.0], [93.8, 949.0], [93.9, 955.0], [94.0, 961.0], [94.1, 964.0], [94.2, 968.0], [94.3, 974.0], [94.4, 983.0], [94.5, 990.0], [94.6, 995.0], [94.7, 1000.0], [94.8, 1006.0], [94.9, 1011.0], [95.0, 1016.0], [95.1, 1022.0], [95.2, 1027.0], [95.3, 1031.0], [95.4, 1038.0], [95.5, 1047.0], [95.6, 1056.0], [95.7, 1065.0], [95.8, 1080.0], [95.9, 1085.0], [96.0, 1094.0], [96.1, 1104.0], [96.2, 1118.0], [96.3, 1128.0], [96.4, 1145.0], [96.5, 1161.0], [96.6, 1180.0], [96.7, 1197.0], [96.8, 1224.0], [96.9, 1237.0], [97.0, 1256.0], [97.1, 1269.0], [97.2, 1278.0], [97.3, 1292.0], [97.4, 1296.0], [97.5, 1320.0], [97.6, 1338.0], [97.7, 1356.0], [97.8, 1379.0], [97.9, 1409.0], [98.0, 1423.0], [98.1, 1443.0], [98.2, 1479.0], [98.3, 1492.0], [98.4, 1515.0], [98.5, 1542.0], [98.6, 1566.0], [98.7, 1634.0], [98.8, 1685.0], [98.9, 1738.0], [99.0, 1760.0], [99.1, 1806.0], [99.2, 1843.0], [99.3, 1901.0], [99.4, 1949.0], [99.5, 2055.0], [99.6, 2126.0], [99.7, 2269.0], [99.8, 2370.0], [99.9, 2614.0], [100.0, 3218.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 2173.0, "series": [{"data": [[0.0, 2173.0], [600.0, 221.0], [700.0, 178.0], [800.0, 121.0], [900.0, 87.0], [1000.0, 74.0], [1100.0, 34.0], [1200.0, 37.0], [1300.0, 23.0], [1400.0, 25.0], [1500.0, 16.0], [100.0, 630.0], [1600.0, 10.0], [1700.0, 11.0], [1800.0, 13.0], [1900.0, 8.0], [2000.0, 6.0], [2100.0, 4.0], [2200.0, 6.0], [2300.0, 3.0], [2400.0, 3.0], [2500.0, 1.0], [2600.0, 2.0], [2800.0, 1.0], [2900.0, 1.0], [3000.0, 1.0], [200.0, 577.0], [3200.0, 1.0], [300.0, 427.0], [400.0, 301.0], [500.0, 267.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3200.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 87.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 4113.0, "series": [{"data": [[0.0, 4113.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1062.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 87.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.907024793388427, "minX": 1.60237284E12, "maxY": 10.0, "series": [{"data": [[1.6023729E12, 10.0], [1.60237296E12, 10.0], [1.60237302E12, 9.907024793388427], [1.60237284E12, 9.96270718232044]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60237302E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 310.365300285987, "minX": 1.0, "maxY": 3046.0, "series": [{"data": [[4.0, 1525.0], [8.0, 2066.0], [2.0, 2201.0], [1.0, 3046.0], [9.0, 525.75], [5.0, 1125.0], [10.0, 310.365300285987], [3.0, 1003.5], [6.0, 995.0], [7.0, 435.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.986316989737723, 312.9777651083226]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 4257.5, "minX": 1.60237284E12, "maxY": 1655919.1166666667, "series": [{"data": [[1.6023729E12, 1655919.1166666667], [1.60237296E12, 1534399.25], [1.60237302E12, 485118.5], [1.60237284E12, 575454.8166666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6023729E12, 17383.916666666668], [1.60237296E12, 17646.533333333333], [1.60237302E12, 4257.5], [1.60237284E12, 6203.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60237302E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 292.24427108727497, "minX": 1.60237284E12, "maxY": 432.21487603305786, "series": [{"data": [[1.6023729E12, 292.24427108727497], [1.60237296E12, 297.751872191713], [1.60237302E12, 432.21487603305786], [1.60237284E12, 334.12569060773484]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60237302E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 291.8415407118478, "minX": 1.60237284E12, "maxY": 431.67975206611555, "series": [{"data": [[1.6023729E12, 291.8415407118478], [1.60237296E12, 297.36645032451304], [1.60237302E12, 431.67975206611555], [1.60237284E12, 333.6546961325971]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60237302E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0061983471074380184, "minX": 1.60237284E12, "maxY": 0.11602209944751406, "series": [{"data": [[1.6023729E12, 0.010726474890297419], [1.60237296E12, 0.008487269096355462], [1.60237302E12, 0.0061983471074380184], [1.60237284E12, 0.11602209944751406]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60237302E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 29.0, "minX": 1.60237284E12, "maxY": 3218.0, "series": [{"data": [[1.6023729E12, 2825.0], [1.60237296E12, 2671.0], [1.60237302E12, 3218.0], [1.60237284E12, 1522.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6023729E12, 33.467999510765075], [1.60237296E12, 35.0], [1.60237302E12, 33.0], [1.60237284E12, 37.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6023729E12, 34.0], [1.60237296E12, 35.0], [1.60237302E12, 33.0], [1.60237284E12, 37.17750006914139]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6023729E12, 34.0], [1.60237296E12, 35.0], [1.60237302E12, 33.0], [1.60237284E12, 37.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.6023729E12, 29.0], [1.60237296E12, 29.0], [1.60237302E12, 32.0], [1.60237284E12, 36.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6023729E12, 136.0], [1.60237296E12, 176.0], [1.60237302E12, 232.0], [1.60237284E12, 234.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60237302E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 51.0, "minX": 2.0, "maxY": 2623.5, "series": [{"data": [[2.0, 2623.5], [4.0, 2045.5], [6.0, 1347.5], [7.0, 782.0], [8.0, 838.0], [9.0, 760.5], [10.0, 923.5], [11.0, 715.5], [12.0, 646.5], [13.0, 490.5], [14.0, 527.0], [15.0, 564.0], [16.0, 564.5], [17.0, 477.0], [18.0, 495.5], [19.0, 514.0], [20.0, 474.0], [21.0, 358.5], [22.0, 373.0], [23.0, 355.0], [24.0, 261.0], [25.0, 287.0], [26.0, 219.5], [27.0, 333.0], [28.0, 250.5], [29.0, 290.5], [30.0, 115.0], [31.0, 237.0], [33.0, 359.5], [32.0, 139.5], [35.0, 206.0], [34.0, 206.0], [37.0, 126.0], [39.0, 174.0], [38.0, 66.5], [40.0, 172.0], [41.0, 83.0], [42.0, 141.5], [44.0, 156.0], [45.0, 82.0], [47.0, 71.5], [46.0, 191.5], [48.0, 129.0], [50.0, 70.5], [51.0, 132.0], [53.0, 110.0], [52.0, 93.0], [55.0, 138.0], [56.0, 54.0], [58.0, 128.5], [61.0, 116.0], [62.0, 99.5], [63.0, 96.0], [64.0, 85.0], [67.0, 72.0], [65.0, 129.0], [68.0, 73.0], [71.0, 73.0], [73.0, 78.0], [74.0, 97.5], [78.0, 86.5], [76.0, 81.0], [85.0, 114.0], [87.0, 76.0], [104.0, 51.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 104.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 51.0, "minX": 2.0, "maxY": 2623.5, "series": [{"data": [[2.0, 2623.5], [4.0, 2045.0], [6.0, 1344.0], [7.0, 780.0], [8.0, 836.5], [9.0, 760.5], [10.0, 922.5], [11.0, 715.5], [12.0, 645.5], [13.0, 490.0], [14.0, 520.5], [15.0, 561.0], [16.0, 561.0], [17.0, 476.0], [18.0, 495.0], [19.0, 514.0], [20.0, 473.5], [21.0, 358.0], [22.0, 365.5], [23.0, 354.0], [24.0, 260.5], [25.0, 287.0], [26.0, 219.5], [27.0, 333.0], [28.0, 250.0], [29.0, 290.0], [30.0, 115.0], [31.0, 237.0], [33.0, 358.5], [32.0, 139.5], [35.0, 206.0], [34.0, 206.0], [37.0, 126.0], [39.0, 173.5], [38.0, 66.5], [40.0, 172.0], [41.0, 82.5], [42.0, 141.0], [44.0, 156.0], [45.0, 82.0], [47.0, 71.5], [46.0, 191.5], [48.0, 129.0], [50.0, 70.5], [51.0, 132.0], [53.0, 109.0], [52.0, 93.0], [55.0, 137.0], [56.0, 54.0], [58.0, 128.0], [61.0, 116.0], [62.0, 99.0], [63.0, 96.0], [64.0, 85.0], [67.0, 72.0], [65.0, 129.0], [68.0, 72.0], [71.0, 73.0], [73.0, 78.0], [74.0, 97.5], [78.0, 86.0], [76.0, 81.0], [85.0, 114.0], [87.0, 76.0], [104.0, 51.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 104.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 7.9, "minX": 1.60237284E12, "maxY": 34.18333333333333, "series": [{"data": [[1.6023729E12, 34.18333333333333], [1.60237296E12, 33.38333333333333], [1.60237302E12, 7.9], [1.60237284E12, 12.233333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60237302E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 8.066666666666666, "minX": 1.60237284E12, "maxY": 34.18333333333333, "series": [{"data": [[1.6023729E12, 34.18333333333333], [1.60237296E12, 33.38333333333333], [1.60237302E12, 8.066666666666666], [1.60237284E12, 12.066666666666666]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60237302E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 8.066666666666666, "minX": 1.60237284E12, "maxY": 34.18333333333333, "series": [{"data": [[1.6023729E12, 34.18333333333333], [1.60237296E12, 33.38333333333333], [1.60237302E12, 8.066666666666666], [1.60237284E12, 12.066666666666666]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60237302E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 8.066666666666666, "minX": 1.60237284E12, "maxY": 34.18333333333333, "series": [{"data": [[1.6023729E12, 34.18333333333333], [1.60237296E12, 33.38333333333333], [1.60237302E12, 8.066666666666666], [1.60237284E12, 12.066666666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60237302E12, "title": "Total Transactions Per Second"}},
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

