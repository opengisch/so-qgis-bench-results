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
        data: {"result": {"minY": 18.0, "minX": 0.0, "maxY": 15092.0, "series": [{"data": [[0.0, 18.0], [0.1, 21.0], [0.2, 21.0], [0.3, 22.0], [0.4, 22.0], [0.5, 23.0], [0.6, 25.0], [0.7, 25.0], [0.8, 25.0], [0.9, 26.0], [1.0, 26.0], [1.1, 26.0], [1.2, 27.0], [1.3, 27.0], [1.4, 27.0], [1.5, 27.0], [1.6, 28.0], [1.7, 28.0], [1.8, 28.0], [1.9, 29.0], [2.0, 29.0], [2.1, 29.0], [2.2, 30.0], [2.3, 30.0], [2.4, 30.0], [2.5, 30.0], [2.6, 31.0], [2.7, 31.0], [2.8, 31.0], [2.9, 31.0], [3.0, 31.0], [3.1, 32.0], [3.2, 32.0], [3.3, 32.0], [3.4, 32.0], [3.5, 33.0], [3.6, 33.0], [3.7, 33.0], [3.8, 33.0], [3.9, 33.0], [4.0, 33.0], [4.1, 33.0], [4.2, 33.0], [4.3, 34.0], [4.4, 34.0], [4.5, 34.0], [4.6, 34.0], [4.7, 34.0], [4.8, 34.0], [4.9, 35.0], [5.0, 35.0], [5.1, 35.0], [5.2, 35.0], [5.3, 35.0], [5.4, 35.0], [5.5, 35.0], [5.6, 36.0], [5.7, 36.0], [5.8, 36.0], [5.9, 36.0], [6.0, 36.0], [6.1, 36.0], [6.2, 36.0], [6.3, 37.0], [6.4, 37.0], [6.5, 37.0], [6.6, 37.0], [6.7, 37.0], [6.8, 37.0], [6.9, 38.0], [7.0, 38.0], [7.1, 38.0], [7.2, 38.0], [7.3, 38.0], [7.4, 38.0], [7.5, 38.0], [7.6, 39.0], [7.7, 39.0], [7.8, 39.0], [7.9, 39.0], [8.0, 39.0], [8.1, 40.0], [8.2, 40.0], [8.3, 40.0], [8.4, 40.0], [8.5, 40.0], [8.6, 41.0], [8.7, 41.0], [8.8, 41.0], [8.9, 41.0], [9.0, 41.0], [9.1, 42.0], [9.2, 42.0], [9.3, 42.0], [9.4, 42.0], [9.5, 42.0], [9.6, 42.0], [9.7, 42.0], [9.8, 43.0], [9.9, 43.0], [10.0, 43.0], [10.1, 43.0], [10.2, 43.0], [10.3, 44.0], [10.4, 44.0], [10.5, 44.0], [10.6, 44.0], [10.7, 44.0], [10.8, 44.0], [10.9, 45.0], [11.0, 45.0], [11.1, 45.0], [11.2, 45.0], [11.3, 45.0], [11.4, 46.0], [11.5, 46.0], [11.6, 46.0], [11.7, 46.0], [11.8, 46.0], [11.9, 46.0], [12.0, 47.0], [12.1, 47.0], [12.2, 47.0], [12.3, 47.0], [12.4, 47.0], [12.5, 47.0], [12.6, 47.0], [12.7, 48.0], [12.8, 48.0], [12.9, 48.0], [13.0, 48.0], [13.1, 48.0], [13.2, 48.0], [13.3, 48.0], [13.4, 48.0], [13.5, 48.0], [13.6, 49.0], [13.7, 49.0], [13.8, 49.0], [13.9, 49.0], [14.0, 50.0], [14.1, 50.0], [14.2, 50.0], [14.3, 50.0], [14.4, 50.0], [14.5, 51.0], [14.6, 51.0], [14.7, 51.0], [14.8, 51.0], [14.9, 51.0], [15.0, 51.0], [15.1, 52.0], [15.2, 52.0], [15.3, 52.0], [15.4, 52.0], [15.5, 52.0], [15.6, 52.0], [15.7, 53.0], [15.8, 53.0], [15.9, 53.0], [16.0, 53.0], [16.1, 53.0], [16.2, 53.0], [16.3, 53.0], [16.4, 54.0], [16.5, 54.0], [16.6, 54.0], [16.7, 54.0], [16.8, 54.0], [16.9, 54.0], [17.0, 54.0], [17.1, 55.0], [17.2, 55.0], [17.3, 55.0], [17.4, 55.0], [17.5, 55.0], [17.6, 55.0], [17.7, 55.0], [17.8, 56.0], [17.9, 56.0], [18.0, 56.0], [18.1, 56.0], [18.2, 57.0], [18.3, 57.0], [18.4, 57.0], [18.5, 57.0], [18.6, 58.0], [18.7, 58.0], [18.8, 58.0], [18.9, 58.0], [19.0, 59.0], [19.1, 59.0], [19.2, 59.0], [19.3, 59.0], [19.4, 59.0], [19.5, 59.0], [19.6, 60.0], [19.7, 60.0], [19.8, 60.0], [19.9, 60.0], [20.0, 60.0], [20.1, 61.0], [20.2, 61.0], [20.3, 61.0], [20.4, 61.0], [20.5, 61.0], [20.6, 62.0], [20.7, 62.0], [20.8, 62.0], [20.9, 62.0], [21.0, 62.0], [21.1, 63.0], [21.2, 63.0], [21.3, 63.0], [21.4, 63.0], [21.5, 64.0], [21.6, 64.0], [21.7, 64.0], [21.8, 64.0], [21.9, 64.0], [22.0, 65.0], [22.1, 65.0], [22.2, 65.0], [22.3, 65.0], [22.4, 66.0], [22.5, 66.0], [22.6, 66.0], [22.7, 66.0], [22.8, 67.0], [22.9, 67.0], [23.0, 68.0], [23.1, 68.0], [23.2, 68.0], [23.3, 68.0], [23.4, 68.0], [23.5, 68.0], [23.6, 69.0], [23.7, 69.0], [23.8, 69.0], [23.9, 69.0], [24.0, 70.0], [24.1, 70.0], [24.2, 70.0], [24.3, 71.0], [24.4, 71.0], [24.5, 72.0], [24.6, 72.0], [24.7, 72.0], [24.8, 73.0], [24.9, 73.0], [25.0, 73.0], [25.1, 73.0], [25.2, 74.0], [25.3, 74.0], [25.4, 74.0], [25.5, 74.0], [25.6, 75.0], [25.7, 75.0], [25.8, 75.0], [25.9, 75.0], [26.0, 76.0], [26.1, 76.0], [26.2, 76.0], [26.3, 77.0], [26.4, 77.0], [26.5, 77.0], [26.6, 77.0], [26.7, 78.0], [26.8, 78.0], [26.9, 78.0], [27.0, 79.0], [27.1, 79.0], [27.2, 80.0], [27.3, 80.0], [27.4, 80.0], [27.5, 80.0], [27.6, 81.0], [27.7, 81.0], [27.8, 82.0], [27.9, 82.0], [28.0, 82.0], [28.1, 83.0], [28.2, 83.0], [28.3, 83.0], [28.4, 83.0], [28.5, 84.0], [28.6, 84.0], [28.7, 85.0], [28.8, 85.0], [28.9, 85.0], [29.0, 85.0], [29.1, 86.0], [29.2, 86.0], [29.3, 87.0], [29.4, 87.0], [29.5, 88.0], [29.6, 88.0], [29.7, 88.0], [29.8, 89.0], [29.9, 89.0], [30.0, 90.0], [30.1, 90.0], [30.2, 90.0], [30.3, 90.0], [30.4, 91.0], [30.5, 91.0], [30.6, 92.0], [30.7, 92.0], [30.8, 92.0], [30.9, 93.0], [31.0, 94.0], [31.1, 94.0], [31.2, 95.0], [31.3, 95.0], [31.4, 95.0], [31.5, 96.0], [31.6, 97.0], [31.7, 98.0], [31.8, 98.0], [31.9, 99.0], [32.0, 99.0], [32.1, 100.0], [32.2, 100.0], [32.3, 101.0], [32.4, 102.0], [32.5, 102.0], [32.6, 103.0], [32.7, 104.0], [32.8, 104.0], [32.9, 105.0], [33.0, 105.0], [33.1, 106.0], [33.2, 107.0], [33.3, 108.0], [33.4, 109.0], [33.5, 109.0], [33.6, 110.0], [33.7, 111.0], [33.8, 111.0], [33.9, 112.0], [34.0, 113.0], [34.1, 113.0], [34.2, 114.0], [34.3, 114.0], [34.4, 115.0], [34.5, 115.0], [34.6, 116.0], [34.7, 117.0], [34.8, 118.0], [34.9, 118.0], [35.0, 118.0], [35.1, 119.0], [35.2, 120.0], [35.3, 122.0], [35.4, 123.0], [35.5, 124.0], [35.6, 125.0], [35.7, 125.0], [35.8, 127.0], [35.9, 128.0], [36.0, 129.0], [36.1, 130.0], [36.2, 130.0], [36.3, 131.0], [36.4, 133.0], [36.5, 134.0], [36.6, 135.0], [36.7, 136.0], [36.8, 137.0], [36.9, 138.0], [37.0, 139.0], [37.1, 140.0], [37.2, 141.0], [37.3, 142.0], [37.4, 143.0], [37.5, 144.0], [37.6, 145.0], [37.7, 146.0], [37.8, 147.0], [37.9, 147.0], [38.0, 149.0], [38.1, 149.0], [38.2, 150.0], [38.3, 151.0], [38.4, 152.0], [38.5, 153.0], [38.6, 154.0], [38.7, 155.0], [38.8, 156.0], [38.9, 157.0], [39.0, 157.0], [39.1, 158.0], [39.2, 160.0], [39.3, 160.0], [39.4, 161.0], [39.5, 161.0], [39.6, 162.0], [39.7, 163.0], [39.8, 163.0], [39.9, 163.0], [40.0, 164.0], [40.1, 164.0], [40.2, 165.0], [40.3, 166.0], [40.4, 166.0], [40.5, 167.0], [40.6, 168.0], [40.7, 168.0], [40.8, 169.0], [40.9, 169.0], [41.0, 170.0], [41.1, 171.0], [41.2, 171.0], [41.3, 171.0], [41.4, 172.0], [41.5, 172.0], [41.6, 173.0], [41.7, 174.0], [41.8, 174.0], [41.9, 175.0], [42.0, 176.0], [42.1, 176.0], [42.2, 177.0], [42.3, 178.0], [42.4, 179.0], [42.5, 180.0], [42.6, 181.0], [42.7, 181.0], [42.8, 182.0], [42.9, 183.0], [43.0, 183.0], [43.1, 184.0], [43.2, 184.0], [43.3, 185.0], [43.4, 185.0], [43.5, 186.0], [43.6, 186.0], [43.7, 187.0], [43.8, 187.0], [43.9, 188.0], [44.0, 188.0], [44.1, 189.0], [44.2, 189.0], [44.3, 191.0], [44.4, 191.0], [44.5, 192.0], [44.6, 193.0], [44.7, 193.0], [44.8, 193.0], [44.9, 194.0], [45.0, 194.0], [45.1, 195.0], [45.2, 195.0], [45.3, 196.0], [45.4, 196.0], [45.5, 197.0], [45.6, 198.0], [45.7, 198.0], [45.8, 199.0], [45.9, 200.0], [46.0, 201.0], [46.1, 201.0], [46.2, 202.0], [46.3, 203.0], [46.4, 203.0], [46.5, 203.0], [46.6, 203.0], [46.7, 204.0], [46.8, 205.0], [46.9, 205.0], [47.0, 206.0], [47.1, 207.0], [47.2, 207.0], [47.3, 208.0], [47.4, 209.0], [47.5, 209.0], [47.6, 209.0], [47.7, 211.0], [47.8, 211.0], [47.9, 212.0], [48.0, 213.0], [48.1, 213.0], [48.2, 214.0], [48.3, 214.0], [48.4, 215.0], [48.5, 215.0], [48.6, 216.0], [48.7, 216.0], [48.8, 217.0], [48.9, 217.0], [49.0, 219.0], [49.1, 220.0], [49.2, 220.0], [49.3, 221.0], [49.4, 222.0], [49.5, 223.0], [49.6, 224.0], [49.7, 224.0], [49.8, 226.0], [49.9, 227.0], [50.0, 228.0], [50.1, 228.0], [50.2, 229.0], [50.3, 229.0], [50.4, 230.0], [50.5, 230.0], [50.6, 231.0], [50.7, 231.0], [50.8, 231.0], [50.9, 233.0], [51.0, 234.0], [51.1, 234.0], [51.2, 235.0], [51.3, 235.0], [51.4, 236.0], [51.5, 237.0], [51.6, 237.0], [51.7, 238.0], [51.8, 240.0], [51.9, 240.0], [52.0, 240.0], [52.1, 241.0], [52.2, 242.0], [52.3, 243.0], [52.4, 244.0], [52.5, 246.0], [52.6, 247.0], [52.7, 247.0], [52.8, 248.0], [52.9, 250.0], [53.0, 250.0], [53.1, 251.0], [53.2, 253.0], [53.3, 254.0], [53.4, 254.0], [53.5, 255.0], [53.6, 257.0], [53.7, 257.0], [53.8, 259.0], [53.9, 260.0], [54.0, 260.0], [54.1, 261.0], [54.2, 261.0], [54.3, 262.0], [54.4, 263.0], [54.5, 264.0], [54.6, 265.0], [54.7, 265.0], [54.8, 266.0], [54.9, 267.0], [55.0, 268.0], [55.1, 269.0], [55.2, 270.0], [55.3, 271.0], [55.4, 271.0], [55.5, 272.0], [55.6, 274.0], [55.7, 274.0], [55.8, 276.0], [55.9, 276.0], [56.0, 277.0], [56.1, 277.0], [56.2, 278.0], [56.3, 279.0], [56.4, 280.0], [56.5, 282.0], [56.6, 282.0], [56.7, 284.0], [56.8, 284.0], [56.9, 285.0], [57.0, 286.0], [57.1, 288.0], [57.2, 288.0], [57.3, 289.0], [57.4, 290.0], [57.5, 290.0], [57.6, 292.0], [57.7, 293.0], [57.8, 293.0], [57.9, 294.0], [58.0, 297.0], [58.1, 298.0], [58.2, 299.0], [58.3, 301.0], [58.4, 301.0], [58.5, 303.0], [58.6, 303.0], [58.7, 304.0], [58.8, 304.0], [58.9, 305.0], [59.0, 306.0], [59.1, 307.0], [59.2, 309.0], [59.3, 310.0], [59.4, 311.0], [59.5, 311.0], [59.6, 312.0], [59.7, 313.0], [59.8, 314.0], [59.9, 315.0], [60.0, 316.0], [60.1, 317.0], [60.2, 318.0], [60.3, 318.0], [60.4, 319.0], [60.5, 320.0], [60.6, 321.0], [60.7, 322.0], [60.8, 323.0], [60.9, 323.0], [61.0, 324.0], [61.1, 325.0], [61.2, 326.0], [61.3, 327.0], [61.4, 327.0], [61.5, 328.0], [61.6, 329.0], [61.7, 329.0], [61.8, 330.0], [61.9, 331.0], [62.0, 332.0], [62.1, 333.0], [62.2, 334.0], [62.3, 335.0], [62.4, 335.0], [62.5, 336.0], [62.6, 336.0], [62.7, 337.0], [62.8, 338.0], [62.9, 339.0], [63.0, 340.0], [63.1, 341.0], [63.2, 342.0], [63.3, 343.0], [63.4, 343.0], [63.5, 344.0], [63.6, 345.0], [63.7, 346.0], [63.8, 348.0], [63.9, 348.0], [64.0, 349.0], [64.1, 350.0], [64.2, 351.0], [64.3, 352.0], [64.4, 353.0], [64.5, 353.0], [64.6, 354.0], [64.7, 355.0], [64.8, 356.0], [64.9, 357.0], [65.0, 358.0], [65.1, 360.0], [65.2, 361.0], [65.3, 362.0], [65.4, 364.0], [65.5, 365.0], [65.6, 365.0], [65.7, 366.0], [65.8, 367.0], [65.9, 369.0], [66.0, 370.0], [66.1, 371.0], [66.2, 372.0], [66.3, 372.0], [66.4, 373.0], [66.5, 374.0], [66.6, 375.0], [66.7, 376.0], [66.8, 377.0], [66.9, 378.0], [67.0, 378.0], [67.1, 379.0], [67.2, 379.0], [67.3, 380.0], [67.4, 381.0], [67.5, 382.0], [67.6, 383.0], [67.7, 384.0], [67.8, 385.0], [67.9, 386.0], [68.0, 387.0], [68.1, 387.0], [68.2, 388.0], [68.3, 389.0], [68.4, 390.0], [68.5, 391.0], [68.6, 392.0], [68.7, 393.0], [68.8, 393.0], [68.9, 394.0], [69.0, 395.0], [69.1, 396.0], [69.2, 397.0], [69.3, 398.0], [69.4, 399.0], [69.5, 400.0], [69.6, 401.0], [69.7, 401.0], [69.8, 402.0], [69.9, 403.0], [70.0, 404.0], [70.1, 405.0], [70.2, 406.0], [70.3, 407.0], [70.4, 408.0], [70.5, 409.0], [70.6, 411.0], [70.7, 411.0], [70.8, 412.0], [70.9, 412.0], [71.0, 413.0], [71.1, 415.0], [71.2, 416.0], [71.3, 416.0], [71.4, 418.0], [71.5, 420.0], [71.6, 422.0], [71.7, 423.0], [71.8, 425.0], [71.9, 426.0], [72.0, 427.0], [72.1, 428.0], [72.2, 429.0], [72.3, 430.0], [72.4, 431.0], [72.5, 432.0], [72.6, 433.0], [72.7, 434.0], [72.8, 435.0], [72.9, 436.0], [73.0, 437.0], [73.1, 438.0], [73.2, 440.0], [73.3, 440.0], [73.4, 442.0], [73.5, 443.0], [73.6, 444.0], [73.7, 444.0], [73.8, 445.0], [73.9, 446.0], [74.0, 447.0], [74.1, 449.0], [74.2, 450.0], [74.3, 451.0], [74.4, 452.0], [74.5, 453.0], [74.6, 455.0], [74.7, 455.0], [74.8, 459.0], [74.9, 459.0], [75.0, 460.0], [75.1, 461.0], [75.2, 463.0], [75.3, 463.0], [75.4, 464.0], [75.5, 465.0], [75.6, 466.0], [75.7, 467.0], [75.8, 468.0], [75.9, 470.0], [76.0, 471.0], [76.1, 472.0], [76.2, 473.0], [76.3, 474.0], [76.4, 476.0], [76.5, 477.0], [76.6, 478.0], [76.7, 479.0], [76.8, 480.0], [76.9, 480.0], [77.0, 482.0], [77.1, 484.0], [77.2, 484.0], [77.3, 485.0], [77.4, 487.0], [77.5, 489.0], [77.6, 489.0], [77.7, 490.0], [77.8, 490.0], [77.9, 491.0], [78.0, 492.0], [78.1, 493.0], [78.2, 494.0], [78.3, 494.0], [78.4, 495.0], [78.5, 496.0], [78.6, 497.0], [78.7, 497.0], [78.8, 499.0], [78.9, 501.0], [79.0, 503.0], [79.1, 503.0], [79.2, 504.0], [79.3, 505.0], [79.4, 506.0], [79.5, 507.0], [79.6, 507.0], [79.7, 509.0], [79.8, 510.0], [79.9, 511.0], [80.0, 513.0], [80.1, 513.0], [80.2, 514.0], [80.3, 516.0], [80.4, 516.0], [80.5, 517.0], [80.6, 518.0], [80.7, 518.0], [80.8, 519.0], [80.9, 520.0], [81.0, 521.0], [81.1, 521.0], [81.2, 523.0], [81.3, 524.0], [81.4, 524.0], [81.5, 526.0], [81.6, 527.0], [81.7, 529.0], [81.8, 531.0], [81.9, 533.0], [82.0, 535.0], [82.1, 536.0], [82.2, 538.0], [82.3, 539.0], [82.4, 540.0], [82.5, 541.0], [82.6, 542.0], [82.7, 543.0], [82.8, 544.0], [82.9, 546.0], [83.0, 547.0], [83.1, 548.0], [83.2, 550.0], [83.3, 551.0], [83.4, 552.0], [83.5, 553.0], [83.6, 556.0], [83.7, 557.0], [83.8, 559.0], [83.9, 560.0], [84.0, 562.0], [84.1, 562.0], [84.2, 563.0], [84.3, 565.0], [84.4, 566.0], [84.5, 568.0], [84.6, 569.0], [84.7, 572.0], [84.8, 572.0], [84.9, 573.0], [85.0, 574.0], [85.1, 576.0], [85.2, 577.0], [85.3, 580.0], [85.4, 581.0], [85.5, 582.0], [85.6, 582.0], [85.7, 583.0], [85.8, 584.0], [85.9, 585.0], [86.0, 587.0], [86.1, 588.0], [86.2, 589.0], [86.3, 591.0], [86.4, 592.0], [86.5, 593.0], [86.6, 595.0], [86.7, 596.0], [86.8, 597.0], [86.9, 599.0], [87.0, 602.0], [87.1, 604.0], [87.2, 605.0], [87.3, 606.0], [87.4, 609.0], [87.5, 610.0], [87.6, 611.0], [87.7, 613.0], [87.8, 616.0], [87.9, 619.0], [88.0, 621.0], [88.1, 622.0], [88.2, 623.0], [88.3, 624.0], [88.4, 628.0], [88.5, 631.0], [88.6, 633.0], [88.7, 633.0], [88.8, 636.0], [88.9, 638.0], [89.0, 641.0], [89.1, 643.0], [89.2, 645.0], [89.3, 646.0], [89.4, 648.0], [89.5, 650.0], [89.6, 651.0], [89.7, 653.0], [89.8, 656.0], [89.9, 658.0], [90.0, 663.0], [90.1, 664.0], [90.2, 667.0], [90.3, 670.0], [90.4, 673.0], [90.5, 675.0], [90.6, 677.0], [90.7, 679.0], [90.8, 682.0], [90.9, 683.0], [91.0, 684.0], [91.1, 687.0], [91.2, 690.0], [91.3, 694.0], [91.4, 697.0], [91.5, 700.0], [91.6, 703.0], [91.7, 707.0], [91.8, 709.0], [91.9, 714.0], [92.0, 717.0], [92.1, 719.0], [92.2, 725.0], [92.3, 730.0], [92.4, 734.0], [92.5, 737.0], [92.6, 739.0], [92.7, 744.0], [92.8, 749.0], [92.9, 753.0], [93.0, 757.0], [93.1, 762.0], [93.2, 765.0], [93.3, 768.0], [93.4, 775.0], [93.5, 784.0], [93.6, 789.0], [93.7, 800.0], [93.8, 809.0], [93.9, 817.0], [94.0, 831.0], [94.1, 838.0], [94.2, 853.0], [94.3, 870.0], [94.4, 886.0], [94.5, 905.0], [94.6, 928.0], [94.7, 934.0], [94.8, 951.0], [94.9, 956.0], [95.0, 974.0], [95.1, 984.0], [95.2, 1003.0], [95.3, 1043.0], [95.4, 1071.0], [95.5, 1115.0], [95.6, 1142.0], [95.7, 1167.0], [95.8, 1219.0], [95.9, 1234.0], [96.0, 1279.0], [96.1, 1366.0], [96.2, 1393.0], [96.3, 1450.0], [96.4, 1552.0], [96.5, 1600.0], [96.6, 1696.0], [96.7, 1720.0], [96.8, 1800.0], [96.9, 1862.0], [97.0, 1923.0], [97.1, 2027.0], [97.2, 2098.0], [97.3, 2128.0], [97.4, 2181.0], [97.5, 2237.0], [97.6, 2326.0], [97.7, 2521.0], [97.8, 2655.0], [97.9, 2750.0], [98.0, 2835.0], [98.1, 2982.0], [98.2, 3073.0], [98.3, 3179.0], [98.4, 3286.0], [98.5, 3491.0], [98.6, 3586.0], [98.7, 3785.0], [98.8, 4016.0], [98.9, 4122.0], [99.0, 4633.0], [99.1, 4890.0], [99.2, 5150.0], [99.3, 7146.0], [99.4, 8207.0], [99.5, 8561.0], [99.6, 9223.0], [99.7, 10535.0], [99.8, 10919.0], [99.9, 11908.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 1665.0, "series": [{"data": [[0.0, 1665.0], [600.0, 234.0], [700.0, 115.0], [800.0, 41.0], [900.0, 37.0], [1000.0, 15.0], [1100.0, 17.0], [1200.0, 11.0], [1300.0, 11.0], [1400.0, 7.0], [1500.0, 7.0], [1600.0, 7.0], [1700.0, 8.0], [1800.0, 10.0], [1900.0, 6.0], [2000.0, 6.0], [2100.0, 13.0], [2300.0, 4.0], [2200.0, 5.0], [2400.0, 3.0], [2500.0, 4.0], [2600.0, 6.0], [2800.0, 3.0], [2700.0, 5.0], [2900.0, 4.0], [3000.0, 6.0], [3100.0, 4.0], [3200.0, 5.0], [3300.0, 3.0], [3400.0, 3.0], [3500.0, 5.0], [3600.0, 2.0], [3700.0, 4.0], [3800.0, 2.0], [3900.0, 1.0], [4000.0, 5.0], [4100.0, 2.0], [4200.0, 1.0], [4300.0, 1.0], [4600.0, 1.0], [4400.0, 1.0], [4500.0, 1.0], [4800.0, 4.0], [4700.0, 1.0], [5000.0, 2.0], [5100.0, 2.0], [4900.0, 1.0], [6000.0, 1.0], [5900.0, 1.0], [6500.0, 1.0], [6800.0, 1.0], [7100.0, 1.0], [7600.0, 1.0], [7700.0, 1.0], [8000.0, 2.0], [8400.0, 1.0], [8500.0, 4.0], [8300.0, 1.0], [8200.0, 1.0], [9200.0, 1.0], [8900.0, 2.0], [8800.0, 1.0], [9100.0, 1.0], [9600.0, 2.0], [9800.0, 2.0], [10500.0, 2.0], [10700.0, 2.0], [10800.0, 1.0], [10900.0, 1.0], [11300.0, 2.0], [11400.0, 1.0], [11700.0, 1.0], [11900.0, 1.0], [12500.0, 1.0], [12900.0, 1.0], [12800.0, 1.0], [13000.0, 1.0], [15000.0, 1.0], [100.0, 713.0], [200.0, 645.0], [300.0, 580.0], [400.0, 489.0], [500.0, 421.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 15000.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 189.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 4094.0, "series": [{"data": [[0.0, 4094.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 907.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 189.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.917757009345797, "minX": 1.60263288E12, "maxY": 10.0, "series": [{"data": [[1.60263312E12, 9.917757009345797], [1.602633E12, 10.0], [1.60263306E12, 10.0], [1.60263288E12, 9.99706314243759], [1.60263294E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60263312E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 420.0, "minX": 1.0, "maxY": 8083.0, "series": [{"data": [[8.0, 423.5], [4.0, 526.0], [1.0, 8083.0], [9.0, 432.0], [10.0, 422.8222007722012], [5.0, 420.0], [6.0, 440.0], [3.0, 493.5], [7.0, 607.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.99113680154139, 424.3855491329473]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 4199.183333333333, "minX": 1.60263288E12, "maxY": 6578918.916666667, "series": [{"data": [[1.60263312E12, 1886651.35], [1.602633E12, 5911919.066666666], [1.60263306E12, 6578918.916666667], [1.60263288E12, 2548435.55], [1.60263294E12, 6036236.833333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60263312E12, 4199.183333333333], [1.602633E12, 12964.05], [1.60263306E12, 9356.516666666666], [1.60263288E12, 5147.5], [1.60263294E12, 8274.383333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60263312E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 338.7644859813083, "minX": 1.60263288E12, "maxY": 561.5703703703697, "series": [{"data": [[1.60263312E12, 338.7644859813083], [1.602633E12, 343.72133095662485], [1.60263306E12, 499.5755573905858], [1.60263288E12, 339.73127753304], [1.60263294E12, 561.5703703703697]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60263312E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 337.38691588785065, "minX": 1.60263288E12, "maxY": 557.8425925925927, "series": [{"data": [[1.60263312E12, 337.38691588785065], [1.602633E12, 341.8122400475339], [1.60263306E12, 496.9735755573909], [1.60263288E12, 337.9809104258443], [1.60263294E12, 557.8425925925927]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60263312E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0037383177570093473, "minX": 1.60263288E12, "maxY": 0.12481644640234976, "series": [{"data": [[1.60263312E12, 0.0037383177570093473], [1.602633E12, 0.009506833036244833], [1.60263306E12, 0.009083402146985959], [1.60263288E12, 0.12481644640234976], [1.60263294E12, 0.007407407407407417]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60263312E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 18.0, "minX": 1.60263288E12, "maxY": 15092.0, "series": [{"data": [[1.60263312E12, 9877.0], [1.602633E12, 15092.0], [1.60263306E12, 13093.0], [1.60263288E12, 10757.0], [1.60263294E12, 11324.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60263312E12, 22.0], [1.602633E12, 26.0], [1.60263306E12, 26.0], [1.60263288E12, 27.0], [1.60263294E12, 22.728999742269515]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60263312E12, 23.225600204467774], [1.602633E12, 26.0], [1.60263306E12, 26.0], [1.60263288E12, 27.0], [1.60263294E12, 23.701900103092193]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60263312E12, 22.367999744415282], [1.602633E12, 26.0], [1.60263306E12, 26.0], [1.60263288E12, 27.0], [1.60263294E12, 23.269499871134755]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60263312E12, 21.0], [1.602633E12, 21.0], [1.60263306E12, 21.0], [1.60263288E12, 23.0], [1.60263294E12, 18.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60263312E12, 140.0], [1.602633E12, 184.0], [1.60263306E12, 347.0], [1.60263288E12, 191.0], [1.60263294E12, 373.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60263312E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 54.5, "minX": 1.0, "maxY": 8083.0, "series": [{"data": [[3.0, 3250.0], [4.0, 1303.0], [5.0, 642.0], [6.0, 488.0], [7.0, 225.0], [8.0, 172.5], [9.0, 465.5], [10.0, 378.0], [11.0, 453.5], [12.0, 337.0], [13.0, 362.0], [14.0, 471.5], [15.0, 303.0], [16.0, 486.5], [17.0, 200.5], [18.0, 408.5], [19.0, 484.5], [20.0, 441.5], [21.0, 407.0], [22.0, 328.0], [23.0, 357.0], [24.0, 412.0], [25.0, 376.5], [26.0, 269.5], [27.0, 332.0], [28.0, 276.5], [29.0, 278.0], [30.0, 282.0], [31.0, 309.0], [33.0, 220.0], [32.0, 209.0], [35.0, 203.5], [34.0, 170.0], [36.0, 198.0], [37.0, 230.0], [38.0, 241.5], [39.0, 224.0], [41.0, 238.0], [40.0, 175.0], [42.0, 200.0], [43.0, 195.0], [44.0, 187.5], [45.0, 115.0], [46.0, 213.5], [51.0, 64.0], [55.0, 69.0], [56.0, 183.0], [59.0, 137.5], [58.0, 165.0], [61.0, 74.0], [63.0, 58.0], [62.0, 72.5], [68.0, 70.0], [72.0, 54.5], [78.0, 55.0], [91.0, 66.0], [1.0, 8083.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 91.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 54.0, "minX": 1.0, "maxY": 8083.0, "series": [{"data": [[3.0, 3249.0], [4.0, 1299.5], [5.0, 636.0], [6.0, 485.0], [7.0, 224.0], [8.0, 171.5], [9.0, 462.0], [10.0, 377.5], [11.0, 451.0], [12.0, 336.0], [13.0, 360.5], [14.0, 467.5], [15.0, 302.0], [16.0, 482.5], [17.0, 200.5], [18.0, 404.0], [19.0, 479.5], [20.0, 431.0], [21.0, 403.0], [22.0, 325.5], [23.0, 355.0], [24.0, 401.5], [25.0, 375.0], [26.0, 269.0], [27.0, 331.0], [28.0, 274.5], [29.0, 277.0], [30.0, 281.0], [31.0, 305.0], [33.0, 219.0], [32.0, 208.5], [35.0, 202.5], [34.0, 169.5], [36.0, 196.5], [37.0, 229.0], [38.0, 239.5], [39.0, 223.5], [41.0, 230.0], [40.0, 172.0], [42.0, 198.5], [43.0, 194.0], [44.0, 187.5], [45.0, 115.0], [46.0, 213.5], [51.0, 64.0], [55.0, 69.0], [56.0, 182.5], [59.0, 137.0], [58.0, 165.0], [61.0, 73.0], [63.0, 58.0], [62.0, 72.0], [68.0, 69.5], [72.0, 54.0], [78.0, 55.0], [91.0, 65.0], [1.0, 8083.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 91.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 8.75, "minX": 1.60263288E12, "maxY": 28.05, "series": [{"data": [[1.60263312E12, 8.75], [1.602633E12, 28.05], [1.60263306E12, 20.183333333333334], [1.60263288E12, 11.516666666666667], [1.60263294E12, 18.0]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60263312E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 8.916666666666666, "minX": 1.60263288E12, "maxY": 28.05, "series": [{"data": [[1.60263312E12, 8.916666666666666], [1.602633E12, 28.05], [1.60263306E12, 20.183333333333334], [1.60263288E12, 11.35], [1.60263294E12, 18.0]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60263312E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 8.916666666666666, "minX": 1.60263288E12, "maxY": 28.05, "series": [{"data": [[1.60263312E12, 8.916666666666666], [1.602633E12, 28.05], [1.60263306E12, 20.183333333333334], [1.60263288E12, 11.35], [1.60263294E12, 18.0]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60263312E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 8.916666666666666, "minX": 1.60263288E12, "maxY": 28.05, "series": [{"data": [[1.60263312E12, 8.916666666666666], [1.602633E12, 28.05], [1.60263306E12, 20.183333333333334], [1.60263288E12, 11.35], [1.60263294E12, 18.0]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60263312E12, "title": "Total Transactions Per Second"}},
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

