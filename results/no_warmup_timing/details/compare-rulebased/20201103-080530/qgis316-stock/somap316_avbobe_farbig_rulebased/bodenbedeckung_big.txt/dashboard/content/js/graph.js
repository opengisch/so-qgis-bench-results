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
        data: {"result": {"minY": 4.0, "minX": 0.0, "maxY": 1885.0, "series": [{"data": [[0.0, 4.0], [0.1, 5.0], [0.2, 6.0], [0.3, 7.0], [0.4, 8.0], [0.5, 11.0], [0.6, 12.0], [0.7, 12.0], [0.8, 13.0], [0.9, 13.0], [1.0, 13.0], [1.1, 14.0], [1.2, 14.0], [1.3, 15.0], [1.4, 15.0], [1.5, 15.0], [1.6, 15.0], [1.7, 16.0], [1.8, 16.0], [1.9, 16.0], [2.0, 17.0], [2.1, 17.0], [2.2, 17.0], [2.3, 17.0], [2.4, 17.0], [2.5, 18.0], [2.6, 18.0], [2.7, 18.0], [2.8, 19.0], [2.9, 19.0], [3.0, 19.0], [3.1, 19.0], [3.2, 20.0], [3.3, 20.0], [3.4, 20.0], [3.5, 20.0], [3.6, 20.0], [3.7, 20.0], [3.8, 20.0], [3.9, 21.0], [4.0, 21.0], [4.1, 21.0], [4.2, 21.0], [4.3, 21.0], [4.4, 21.0], [4.5, 22.0], [4.6, 22.0], [4.7, 22.0], [4.8, 22.0], [4.9, 22.0], [5.0, 22.0], [5.1, 22.0], [5.2, 23.0], [5.3, 23.0], [5.4, 23.0], [5.5, 23.0], [5.6, 23.0], [5.7, 23.0], [5.8, 23.0], [5.9, 24.0], [6.0, 24.0], [6.1, 24.0], [6.2, 24.0], [6.3, 24.0], [6.4, 24.0], [6.5, 24.0], [6.6, 25.0], [6.7, 25.0], [6.8, 25.0], [6.9, 25.0], [7.0, 25.0], [7.1, 25.0], [7.2, 26.0], [7.3, 26.0], [7.4, 26.0], [7.5, 26.0], [7.6, 26.0], [7.7, 27.0], [7.8, 27.0], [7.9, 27.0], [8.0, 27.0], [8.1, 28.0], [8.2, 28.0], [8.3, 28.0], [8.4, 28.0], [8.5, 28.0], [8.6, 28.0], [8.7, 29.0], [8.8, 29.0], [8.9, 29.0], [9.0, 30.0], [9.1, 30.0], [9.2, 30.0], [9.3, 30.0], [9.4, 31.0], [9.5, 31.0], [9.6, 31.0], [9.7, 31.0], [9.8, 31.0], [9.9, 32.0], [10.0, 32.0], [10.1, 32.0], [10.2, 33.0], [10.3, 33.0], [10.4, 33.0], [10.5, 33.0], [10.6, 34.0], [10.7, 34.0], [10.8, 34.0], [10.9, 35.0], [11.0, 35.0], [11.1, 36.0], [11.2, 36.0], [11.3, 36.0], [11.4, 36.0], [11.5, 37.0], [11.6, 37.0], [11.7, 37.0], [11.8, 37.0], [11.9, 38.0], [12.0, 38.0], [12.1, 38.0], [12.2, 38.0], [12.3, 38.0], [12.4, 38.0], [12.5, 39.0], [12.6, 39.0], [12.7, 39.0], [12.8, 39.0], [12.9, 39.0], [13.0, 40.0], [13.1, 40.0], [13.2, 40.0], [13.3, 40.0], [13.4, 40.0], [13.5, 41.0], [13.6, 41.0], [13.7, 41.0], [13.8, 41.0], [13.9, 42.0], [14.0, 42.0], [14.1, 42.0], [14.2, 43.0], [14.3, 43.0], [14.4, 43.0], [14.5, 43.0], [14.6, 43.0], [14.7, 44.0], [14.8, 44.0], [14.9, 44.0], [15.0, 44.0], [15.1, 44.0], [15.2, 44.0], [15.3, 45.0], [15.4, 45.0], [15.5, 45.0], [15.6, 45.0], [15.7, 45.0], [15.8, 46.0], [15.9, 46.0], [16.0, 46.0], [16.1, 46.0], [16.2, 46.0], [16.3, 47.0], [16.4, 47.0], [16.5, 47.0], [16.6, 47.0], [16.7, 47.0], [16.8, 47.0], [16.9, 47.0], [17.0, 48.0], [17.1, 48.0], [17.2, 48.0], [17.3, 48.0], [17.4, 49.0], [17.5, 49.0], [17.6, 49.0], [17.7, 49.0], [17.8, 50.0], [17.9, 50.0], [18.0, 50.0], [18.1, 50.0], [18.2, 50.0], [18.3, 51.0], [18.4, 51.0], [18.5, 51.0], [18.6, 52.0], [18.7, 52.0], [18.8, 52.0], [18.9, 52.0], [19.0, 53.0], [19.1, 53.0], [19.2, 54.0], [19.3, 54.0], [19.4, 54.0], [19.5, 55.0], [19.6, 55.0], [19.7, 55.0], [19.8, 56.0], [19.9, 56.0], [20.0, 56.0], [20.1, 56.0], [20.2, 57.0], [20.3, 57.0], [20.4, 57.0], [20.5, 57.0], [20.6, 58.0], [20.7, 58.0], [20.8, 58.0], [20.9, 59.0], [21.0, 59.0], [21.1, 59.0], [21.2, 60.0], [21.3, 60.0], [21.4, 60.0], [21.5, 60.0], [21.6, 61.0], [21.7, 61.0], [21.8, 62.0], [21.9, 62.0], [22.0, 62.0], [22.1, 63.0], [22.2, 63.0], [22.3, 63.0], [22.4, 64.0], [22.5, 64.0], [22.6, 65.0], [22.7, 65.0], [22.8, 66.0], [22.9, 66.0], [23.0, 66.0], [23.1, 67.0], [23.2, 68.0], [23.3, 68.0], [23.4, 69.0], [23.5, 69.0], [23.6, 70.0], [23.7, 70.0], [23.8, 71.0], [23.9, 71.0], [24.0, 71.0], [24.1, 72.0], [24.2, 72.0], [24.3, 73.0], [24.4, 74.0], [24.5, 74.0], [24.6, 75.0], [24.7, 76.0], [24.8, 76.0], [24.9, 77.0], [25.0, 77.0], [25.1, 78.0], [25.2, 79.0], [25.3, 79.0], [25.4, 80.0], [25.5, 80.0], [25.6, 81.0], [25.7, 81.0], [25.8, 82.0], [25.9, 82.0], [26.0, 83.0], [26.1, 84.0], [26.2, 84.0], [26.3, 85.0], [26.4, 87.0], [26.5, 87.0], [26.6, 88.0], [26.7, 88.0], [26.8, 89.0], [26.9, 90.0], [27.0, 90.0], [27.1, 90.0], [27.2, 91.0], [27.3, 91.0], [27.4, 92.0], [27.5, 92.0], [27.6, 93.0], [27.7, 93.0], [27.8, 94.0], [27.9, 94.0], [28.0, 94.0], [28.1, 95.0], [28.2, 95.0], [28.3, 96.0], [28.4, 97.0], [28.5, 97.0], [28.6, 98.0], [28.7, 99.0], [28.8, 99.0], [28.9, 99.0], [29.0, 100.0], [29.1, 100.0], [29.2, 100.0], [29.3, 101.0], [29.4, 101.0], [29.5, 102.0], [29.6, 103.0], [29.7, 103.0], [29.8, 104.0], [29.9, 105.0], [30.0, 106.0], [30.1, 107.0], [30.2, 108.0], [30.3, 108.0], [30.4, 109.0], [30.5, 110.0], [30.6, 110.0], [30.7, 110.0], [30.8, 111.0], [30.9, 111.0], [31.0, 111.0], [31.1, 112.0], [31.2, 112.0], [31.3, 112.0], [31.4, 113.0], [31.5, 113.0], [31.6, 113.0], [31.7, 113.0], [31.8, 114.0], [31.9, 114.0], [32.0, 114.0], [32.1, 114.0], [32.2, 115.0], [32.3, 115.0], [32.4, 115.0], [32.5, 115.0], [32.6, 115.0], [32.7, 116.0], [32.8, 116.0], [32.9, 116.0], [33.0, 117.0], [33.1, 117.0], [33.2, 117.0], [33.3, 117.0], [33.4, 118.0], [33.5, 118.0], [33.6, 118.0], [33.7, 118.0], [33.8, 119.0], [33.9, 119.0], [34.0, 120.0], [34.1, 120.0], [34.2, 120.0], [34.3, 121.0], [34.4, 122.0], [34.5, 122.0], [34.6, 122.0], [34.7, 123.0], [34.8, 123.0], [34.9, 124.0], [35.0, 124.0], [35.1, 124.0], [35.2, 125.0], [35.3, 125.0], [35.4, 126.0], [35.5, 126.0], [35.6, 127.0], [35.7, 127.0], [35.8, 128.0], [35.9, 128.0], [36.0, 128.0], [36.1, 129.0], [36.2, 129.0], [36.3, 130.0], [36.4, 130.0], [36.5, 131.0], [36.6, 131.0], [36.7, 132.0], [36.8, 132.0], [36.9, 133.0], [37.0, 133.0], [37.1, 133.0], [37.2, 134.0], [37.3, 134.0], [37.4, 135.0], [37.5, 135.0], [37.6, 136.0], [37.7, 137.0], [37.8, 137.0], [37.9, 138.0], [38.0, 139.0], [38.1, 139.0], [38.2, 140.0], [38.3, 141.0], [38.4, 141.0], [38.5, 142.0], [38.6, 143.0], [38.7, 144.0], [38.8, 144.0], [38.9, 145.0], [39.0, 146.0], [39.1, 146.0], [39.2, 147.0], [39.3, 147.0], [39.4, 148.0], [39.5, 149.0], [39.6, 149.0], [39.7, 150.0], [39.8, 151.0], [39.9, 151.0], [40.0, 152.0], [40.1, 152.0], [40.2, 153.0], [40.3, 154.0], [40.4, 154.0], [40.5, 155.0], [40.6, 156.0], [40.7, 157.0], [40.8, 158.0], [40.9, 159.0], [41.0, 159.0], [41.1, 160.0], [41.2, 160.0], [41.3, 161.0], [41.4, 162.0], [41.5, 162.0], [41.6, 163.0], [41.7, 164.0], [41.8, 164.0], [41.9, 165.0], [42.0, 166.0], [42.1, 167.0], [42.2, 167.0], [42.3, 169.0], [42.4, 169.0], [42.5, 170.0], [42.6, 171.0], [42.7, 172.0], [42.8, 173.0], [42.9, 174.0], [43.0, 174.0], [43.1, 175.0], [43.2, 175.0], [43.3, 176.0], [43.4, 177.0], [43.5, 177.0], [43.6, 178.0], [43.7, 179.0], [43.8, 179.0], [43.9, 179.0], [44.0, 180.0], [44.1, 181.0], [44.2, 182.0], [44.3, 182.0], [44.4, 183.0], [44.5, 184.0], [44.6, 185.0], [44.7, 185.0], [44.8, 186.0], [44.9, 187.0], [45.0, 187.0], [45.1, 189.0], [45.2, 190.0], [45.3, 191.0], [45.4, 192.0], [45.5, 193.0], [45.6, 193.0], [45.7, 194.0], [45.8, 195.0], [45.9, 196.0], [46.0, 197.0], [46.1, 198.0], [46.2, 199.0], [46.3, 199.0], [46.4, 200.0], [46.5, 201.0], [46.6, 202.0], [46.7, 202.0], [46.8, 204.0], [46.9, 205.0], [47.0, 205.0], [47.1, 206.0], [47.2, 207.0], [47.3, 207.0], [47.4, 209.0], [47.5, 210.0], [47.6, 210.0], [47.7, 211.0], [47.8, 213.0], [47.9, 214.0], [48.0, 215.0], [48.1, 215.0], [48.2, 216.0], [48.3, 216.0], [48.4, 217.0], [48.5, 218.0], [48.6, 218.0], [48.7, 219.0], [48.8, 219.0], [48.9, 220.0], [49.0, 221.0], [49.1, 222.0], [49.2, 222.0], [49.3, 223.0], [49.4, 223.0], [49.5, 224.0], [49.6, 225.0], [49.7, 227.0], [49.8, 227.0], [49.9, 228.0], [50.0, 229.0], [50.1, 229.0], [50.2, 230.0], [50.3, 230.0], [50.4, 231.0], [50.5, 232.0], [50.6, 233.0], [50.7, 233.0], [50.8, 234.0], [50.9, 236.0], [51.0, 237.0], [51.1, 238.0], [51.2, 238.0], [51.3, 239.0], [51.4, 239.0], [51.5, 240.0], [51.6, 241.0], [51.7, 241.0], [51.8, 242.0], [51.9, 242.0], [52.0, 243.0], [52.1, 244.0], [52.2, 245.0], [52.3, 245.0], [52.4, 247.0], [52.5, 247.0], [52.6, 249.0], [52.7, 249.0], [52.8, 251.0], [52.9, 251.0], [53.0, 252.0], [53.1, 253.0], [53.2, 255.0], [53.3, 255.0], [53.4, 257.0], [53.5, 258.0], [53.6, 259.0], [53.7, 260.0], [53.8, 261.0], [53.9, 262.0], [54.0, 263.0], [54.1, 263.0], [54.2, 264.0], [54.3, 265.0], [54.4, 266.0], [54.5, 267.0], [54.6, 269.0], [54.7, 270.0], [54.8, 271.0], [54.9, 272.0], [55.0, 273.0], [55.1, 273.0], [55.2, 274.0], [55.3, 275.0], [55.4, 276.0], [55.5, 278.0], [55.6, 280.0], [55.7, 282.0], [55.8, 283.0], [55.9, 284.0], [56.0, 285.0], [56.1, 286.0], [56.2, 287.0], [56.3, 288.0], [56.4, 289.0], [56.5, 290.0], [56.6, 291.0], [56.7, 293.0], [56.8, 293.0], [56.9, 294.0], [57.0, 296.0], [57.1, 297.0], [57.2, 298.0], [57.3, 298.0], [57.4, 299.0], [57.5, 300.0], [57.6, 302.0], [57.7, 303.0], [57.8, 304.0], [57.9, 305.0], [58.0, 306.0], [58.1, 307.0], [58.2, 307.0], [58.3, 309.0], [58.4, 310.0], [58.5, 311.0], [58.6, 312.0], [58.7, 312.0], [58.8, 313.0], [58.9, 314.0], [59.0, 315.0], [59.1, 316.0], [59.2, 317.0], [59.3, 317.0], [59.4, 320.0], [59.5, 321.0], [59.6, 321.0], [59.7, 323.0], [59.8, 324.0], [59.9, 326.0], [60.0, 326.0], [60.1, 327.0], [60.2, 328.0], [60.3, 328.0], [60.4, 329.0], [60.5, 329.0], [60.6, 331.0], [60.7, 331.0], [60.8, 332.0], [60.9, 333.0], [61.0, 334.0], [61.1, 336.0], [61.2, 338.0], [61.3, 338.0], [61.4, 340.0], [61.5, 342.0], [61.6, 343.0], [61.7, 344.0], [61.8, 345.0], [61.9, 346.0], [62.0, 347.0], [62.1, 348.0], [62.2, 349.0], [62.3, 349.0], [62.4, 351.0], [62.5, 352.0], [62.6, 353.0], [62.7, 354.0], [62.8, 354.0], [62.9, 355.0], [63.0, 356.0], [63.1, 356.0], [63.2, 358.0], [63.3, 359.0], [63.4, 360.0], [63.5, 361.0], [63.6, 362.0], [63.7, 363.0], [63.8, 365.0], [63.9, 365.0], [64.0, 366.0], [64.1, 367.0], [64.2, 368.0], [64.3, 371.0], [64.4, 373.0], [64.5, 374.0], [64.6, 376.0], [64.7, 377.0], [64.8, 378.0], [64.9, 379.0], [65.0, 380.0], [65.1, 382.0], [65.2, 383.0], [65.3, 384.0], [65.4, 385.0], [65.5, 387.0], [65.6, 388.0], [65.7, 389.0], [65.8, 390.0], [65.9, 392.0], [66.0, 392.0], [66.1, 393.0], [66.2, 394.0], [66.3, 394.0], [66.4, 396.0], [66.5, 398.0], [66.6, 398.0], [66.7, 400.0], [66.8, 401.0], [66.9, 401.0], [67.0, 402.0], [67.1, 404.0], [67.2, 404.0], [67.3, 405.0], [67.4, 407.0], [67.5, 408.0], [67.6, 408.0], [67.7, 410.0], [67.8, 411.0], [67.9, 412.0], [68.0, 413.0], [68.1, 414.0], [68.2, 415.0], [68.3, 415.0], [68.4, 416.0], [68.5, 418.0], [68.6, 419.0], [68.7, 421.0], [68.8, 422.0], [68.9, 424.0], [69.0, 425.0], [69.1, 426.0], [69.2, 427.0], [69.3, 428.0], [69.4, 428.0], [69.5, 429.0], [69.6, 430.0], [69.7, 431.0], [69.8, 432.0], [69.9, 433.0], [70.0, 434.0], [70.1, 435.0], [70.2, 436.0], [70.3, 437.0], [70.4, 439.0], [70.5, 440.0], [70.6, 442.0], [70.7, 443.0], [70.8, 443.0], [70.9, 445.0], [71.0, 446.0], [71.1, 446.0], [71.2, 448.0], [71.3, 449.0], [71.4, 450.0], [71.5, 450.0], [71.6, 452.0], [71.7, 452.0], [71.8, 454.0], [71.9, 455.0], [72.0, 456.0], [72.1, 457.0], [72.2, 459.0], [72.3, 460.0], [72.4, 462.0], [72.5, 463.0], [72.6, 465.0], [72.7, 466.0], [72.8, 468.0], [72.9, 470.0], [73.0, 471.0], [73.1, 472.0], [73.2, 473.0], [73.3, 473.0], [73.4, 475.0], [73.5, 476.0], [73.6, 477.0], [73.7, 478.0], [73.8, 479.0], [73.9, 479.0], [74.0, 480.0], [74.1, 481.0], [74.2, 484.0], [74.3, 485.0], [74.4, 486.0], [74.5, 487.0], [74.6, 488.0], [74.7, 490.0], [74.8, 492.0], [74.9, 493.0], [75.0, 494.0], [75.1, 495.0], [75.2, 495.0], [75.3, 496.0], [75.4, 497.0], [75.5, 498.0], [75.6, 499.0], [75.7, 500.0], [75.8, 501.0], [75.9, 502.0], [76.0, 504.0], [76.1, 505.0], [76.2, 506.0], [76.3, 507.0], [76.4, 508.0], [76.5, 509.0], [76.6, 509.0], [76.7, 510.0], [76.8, 511.0], [76.9, 513.0], [77.0, 513.0], [77.1, 514.0], [77.2, 515.0], [77.3, 516.0], [77.4, 516.0], [77.5, 517.0], [77.6, 518.0], [77.7, 519.0], [77.8, 520.0], [77.9, 522.0], [78.0, 523.0], [78.1, 523.0], [78.2, 524.0], [78.3, 525.0], [78.4, 526.0], [78.5, 528.0], [78.6, 529.0], [78.7, 529.0], [78.8, 530.0], [78.9, 532.0], [79.0, 532.0], [79.1, 533.0], [79.2, 534.0], [79.3, 535.0], [79.4, 536.0], [79.5, 537.0], [79.6, 538.0], [79.7, 538.0], [79.8, 539.0], [79.9, 539.0], [80.0, 540.0], [80.1, 541.0], [80.2, 542.0], [80.3, 543.0], [80.4, 544.0], [80.5, 545.0], [80.6, 546.0], [80.7, 548.0], [80.8, 548.0], [80.9, 549.0], [81.0, 550.0], [81.1, 550.0], [81.2, 551.0], [81.3, 552.0], [81.4, 554.0], [81.5, 555.0], [81.6, 556.0], [81.7, 558.0], [81.8, 559.0], [81.9, 560.0], [82.0, 562.0], [82.1, 564.0], [82.2, 566.0], [82.3, 567.0], [82.4, 568.0], [82.5, 569.0], [82.6, 569.0], [82.7, 570.0], [82.8, 571.0], [82.9, 572.0], [83.0, 573.0], [83.1, 574.0], [83.2, 576.0], [83.3, 578.0], [83.4, 579.0], [83.5, 580.0], [83.6, 581.0], [83.7, 582.0], [83.8, 582.0], [83.9, 583.0], [84.0, 585.0], [84.1, 586.0], [84.2, 587.0], [84.3, 588.0], [84.4, 589.0], [84.5, 591.0], [84.6, 593.0], [84.7, 595.0], [84.8, 596.0], [84.9, 598.0], [85.0, 599.0], [85.1, 599.0], [85.2, 601.0], [85.3, 602.0], [85.4, 603.0], [85.5, 605.0], [85.6, 607.0], [85.7, 610.0], [85.8, 612.0], [85.9, 615.0], [86.0, 617.0], [86.1, 617.0], [86.2, 618.0], [86.3, 620.0], [86.4, 622.0], [86.5, 623.0], [86.6, 625.0], [86.7, 626.0], [86.8, 627.0], [86.9, 628.0], [87.0, 629.0], [87.1, 630.0], [87.2, 632.0], [87.3, 633.0], [87.4, 634.0], [87.5, 635.0], [87.6, 637.0], [87.7, 639.0], [87.8, 641.0], [87.9, 643.0], [88.0, 644.0], [88.1, 645.0], [88.2, 647.0], [88.3, 647.0], [88.4, 650.0], [88.5, 653.0], [88.6, 654.0], [88.7, 655.0], [88.8, 657.0], [88.9, 660.0], [89.0, 664.0], [89.1, 666.0], [89.2, 668.0], [89.3, 671.0], [89.4, 674.0], [89.5, 677.0], [89.6, 680.0], [89.7, 682.0], [89.8, 684.0], [89.9, 685.0], [90.0, 688.0], [90.1, 689.0], [90.2, 692.0], [90.3, 694.0], [90.4, 697.0], [90.5, 699.0], [90.6, 701.0], [90.7, 703.0], [90.8, 704.0], [90.9, 707.0], [91.0, 711.0], [91.1, 713.0], [91.2, 716.0], [91.3, 719.0], [91.4, 720.0], [91.5, 722.0], [91.6, 726.0], [91.7, 728.0], [91.8, 730.0], [91.9, 732.0], [92.0, 734.0], [92.1, 736.0], [92.2, 741.0], [92.3, 744.0], [92.4, 746.0], [92.5, 749.0], [92.6, 752.0], [92.7, 754.0], [92.8, 757.0], [92.9, 763.0], [93.0, 765.0], [93.1, 767.0], [93.2, 770.0], [93.3, 771.0], [93.4, 774.0], [93.5, 780.0], [93.6, 782.0], [93.7, 785.0], [93.8, 790.0], [93.9, 800.0], [94.0, 805.0], [94.1, 808.0], [94.2, 812.0], [94.3, 816.0], [94.4, 817.0], [94.5, 820.0], [94.6, 823.0], [94.7, 827.0], [94.8, 831.0], [94.9, 837.0], [95.0, 845.0], [95.1, 849.0], [95.2, 852.0], [95.3, 859.0], [95.4, 865.0], [95.5, 866.0], [95.6, 870.0], [95.7, 874.0], [95.8, 883.0], [95.9, 885.0], [96.0, 891.0], [96.1, 898.0], [96.2, 909.0], [96.3, 917.0], [96.4, 924.0], [96.5, 930.0], [96.6, 937.0], [96.7, 947.0], [96.8, 949.0], [96.9, 956.0], [97.0, 963.0], [97.1, 969.0], [97.2, 971.0], [97.3, 978.0], [97.4, 985.0], [97.5, 999.0], [97.6, 1007.0], [97.7, 1014.0], [97.8, 1018.0], [97.9, 1028.0], [98.0, 1040.0], [98.1, 1047.0], [98.2, 1064.0], [98.3, 1073.0], [98.4, 1082.0], [98.5, 1108.0], [98.6, 1122.0], [98.7, 1143.0], [98.8, 1153.0], [98.9, 1178.0], [99.0, 1220.0], [99.1, 1244.0], [99.2, 1277.0], [99.3, 1299.0], [99.4, 1322.0], [99.5, 1345.0], [99.6, 1396.0], [99.7, 1446.0], [99.8, 1539.0], [99.9, 1658.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 1503.0, "series": [{"data": [[0.0, 1503.0], [600.0, 281.0], [700.0, 175.0], [200.0, 576.0], [800.0, 116.0], [900.0, 72.0], [1000.0, 49.0], [1100.0, 25.0], [300.0, 480.0], [1200.0, 19.0], [1300.0, 16.0], [1400.0, 8.0], [1500.0, 6.0], [100.0, 902.0], [400.0, 464.0], [1600.0, 1.0], [1700.0, 3.0], [1800.0, 2.0], [500.0, 492.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1800.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 12.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 3931.0, "series": [{"data": [[0.0, 3931.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1247.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 12.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 1.5, "minX": 1.60439112E12, "maxY": 10.0, "series": [{"data": [[1.60439124E12, 9.9861039629439], [1.60439118E12, 10.0], [1.60439112E12, 9.993217784476265], [1.6043913E12, 1.5]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6043913E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 248.0, "minX": 1.0, "maxY": 1092.0, "series": [{"data": [[8.0, 428.5], [4.0, 532.0], [2.0, 1092.0], [1.0, 1025.0], [9.0, 267.0], [5.0, 262.5], [10.0, 311.20544506661673], [6.0, 248.0], [3.0, 618.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.989788053949917, 311.58863198458675]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 15.25, "minX": 1.60439112E12, "maxY": 6535755.95, "series": [{"data": [[1.60439124E12, 6112119.0], [1.60439118E12, 6535755.95], [1.60439112E12, 4238888.316666666], [1.6043913E12, 24960.283333333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60439124E12, 14981.316666666668], [1.60439118E12, 14800.533333333333], [1.60439112E12, 9971.533333333333], [1.6043913E12, 15.25]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6043913E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 307.22439526505417, "minX": 1.60439112E12, "maxY": 1058.5, "series": [{"data": [[1.60439124E12, 307.22439526505417], [1.60439118E12, 311.278936392075], [1.60439112E12, 317.3006782215526], [1.6043913E12, 1058.5]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6043913E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 306.03499742665946, "minX": 1.60439112E12, "maxY": 1055.0, "series": [{"data": [[1.60439124E12, 306.03499742665946], [1.60439118E12, 309.6793534932222], [1.60439112E12, 315.6955538809342], [1.6043913E12, 1055.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6043913E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.60439112E12, "maxY": 0.11077618688771655, "series": [{"data": [[1.60439124E12, 0.008234688625836331], [1.60439118E12, 0.008863399374348284], [1.60439112E12, 0.11077618688771655], [1.6043913E12, 0.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6043913E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 4.0, "minX": 1.60439112E12, "maxY": 1885.0, "series": [{"data": [[1.60439124E12, 1873.0], [1.60439118E12, 1885.0], [1.60439112E12, 1703.0], [1.6043913E12, 1092.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60439124E12, 12.0], [1.60439118E12, 13.0], [1.60439112E12, 17.951999683380127], [1.6043913E12, 1025.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60439124E12, 12.245600185394288], [1.60439118E12, 13.0], [1.60439112E12, 19.0], [1.6043913E12, 1025.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60439124E12, 12.0], [1.60439118E12, 13.0], [1.60439112E12, 18.615999841690062], [1.6043913E12, 1025.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60439124E12, 5.0], [1.60439118E12, 4.0], [1.60439112E12, 5.0], [1.6043913E12, 1025.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60439124E12, 219.0], [1.60439118E12, 225.0], [1.60439112E12, 247.0], [1.6043913E12, 1058.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6043913E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 25.0, "minX": 2.0, "maxY": 1058.5, "series": [{"data": [[2.0, 1058.5], [9.0, 408.0], [12.0, 580.0], [14.0, 669.5], [15.0, 585.5], [16.0, 515.0], [17.0, 474.5], [18.0, 493.5], [19.0, 488.0], [20.0, 503.5], [21.0, 438.0], [22.0, 465.0], [23.0, 393.5], [24.0, 414.5], [25.0, 408.0], [26.0, 341.5], [27.0, 341.5], [28.0, 342.0], [29.0, 285.0], [30.0, 331.0], [31.0, 315.0], [33.0, 284.0], [32.0, 260.5], [35.0, 260.5], [34.0, 231.5], [37.0, 136.0], [36.0, 166.5], [38.0, 234.0], [39.0, 210.0], [40.0, 204.0], [42.0, 157.0], [43.0, 153.0], [45.0, 133.0], [44.0, 166.5], [47.0, 138.0], [48.0, 44.5], [49.0, 128.0], [52.0, 158.5], [55.0, 144.0], [54.0, 169.5], [57.0, 62.5], [62.0, 28.0], [64.0, 44.0], [68.0, 108.5], [72.0, 97.5], [75.0, 60.0], [74.0, 67.5], [76.0, 101.0], [80.0, 97.5], [91.0, 46.0], [93.0, 47.0], [100.0, 25.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 100.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 25.0, "minX": 2.0, "maxY": 1055.0, "series": [{"data": [[2.0, 1055.0], [9.0, 406.0], [12.0, 574.5], [14.0, 664.5], [15.0, 577.5], [16.0, 510.0], [17.0, 471.0], [18.0, 489.5], [19.0, 488.0], [20.0, 498.5], [21.0, 435.0], [22.0, 464.0], [23.0, 393.5], [24.0, 412.5], [25.0, 408.0], [26.0, 340.0], [27.0, 340.5], [28.0, 340.0], [29.0, 284.0], [30.0, 330.5], [31.0, 315.0], [33.0, 283.0], [32.0, 258.0], [35.0, 258.0], [34.0, 230.5], [37.0, 135.0], [36.0, 166.0], [38.0, 233.0], [39.0, 209.0], [40.0, 203.5], [42.0, 157.0], [43.0, 151.0], [45.0, 132.0], [44.0, 166.0], [47.0, 138.0], [48.0, 44.5], [49.0, 127.0], [52.0, 158.5], [55.0, 144.0], [54.0, 168.0], [57.0, 62.5], [62.0, 28.0], [64.0, 43.5], [68.0, 108.0], [72.0, 96.5], [75.0, 60.0], [74.0, 67.0], [76.0, 100.5], [80.0, 96.5], [91.0, 46.0], [93.0, 45.0], [100.0, 25.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 100.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 22.283333333333335, "minX": 1.60439112E12, "maxY": 32.25, "series": [{"data": [[1.60439124E12, 32.25], [1.60439118E12, 31.966666666666665], [1.60439112E12, 22.283333333333335]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60439124E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.60439112E12, "maxY": 32.38333333333333, "series": [{"data": [[1.60439124E12, 32.38333333333333], [1.60439118E12, 31.966666666666665], [1.60439112E12, 22.116666666666667], [1.6043913E12, 0.03333333333333333]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6043913E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.60439112E12, "maxY": 32.38333333333333, "series": [{"data": [[1.60439124E12, 32.38333333333333], [1.60439118E12, 31.966666666666665], [1.60439112E12, 22.116666666666667], [1.6043913E12, 0.03333333333333333]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6043913E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.60439112E12, "maxY": 32.38333333333333, "series": [{"data": [[1.60439124E12, 32.38333333333333], [1.60439118E12, 31.966666666666665], [1.60439112E12, 22.116666666666667], [1.6043913E12, 0.03333333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6043913E12, "title": "Total Transactions Per Second"}},
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

