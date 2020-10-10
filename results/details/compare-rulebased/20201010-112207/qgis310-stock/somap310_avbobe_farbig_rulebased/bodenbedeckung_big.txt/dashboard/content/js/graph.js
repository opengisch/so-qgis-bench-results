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
        data: {"result": {"minY": 28.0, "minX": 0.0, "maxY": 2237.0, "series": [{"data": [[0.0, 28.0], [0.1, 30.0], [0.2, 30.0], [0.3, 31.0], [0.4, 31.0], [0.5, 32.0], [0.6, 33.0], [0.7, 33.0], [0.8, 34.0], [0.9, 34.0], [1.0, 34.0], [1.1, 34.0], [1.2, 35.0], [1.3, 35.0], [1.4, 35.0], [1.5, 35.0], [1.6, 35.0], [1.7, 35.0], [1.8, 35.0], [1.9, 36.0], [2.0, 36.0], [2.1, 36.0], [2.2, 36.0], [2.3, 36.0], [2.4, 36.0], [2.5, 37.0], [2.6, 37.0], [2.7, 37.0], [2.8, 37.0], [2.9, 37.0], [3.0, 38.0], [3.1, 38.0], [3.2, 38.0], [3.3, 39.0], [3.4, 39.0], [3.5, 39.0], [3.6, 40.0], [3.7, 40.0], [3.8, 40.0], [3.9, 41.0], [4.0, 41.0], [4.1, 41.0], [4.2, 41.0], [4.3, 41.0], [4.4, 42.0], [4.5, 42.0], [4.6, 42.0], [4.7, 42.0], [4.8, 42.0], [4.9, 43.0], [5.0, 43.0], [5.1, 43.0], [5.2, 43.0], [5.3, 43.0], [5.4, 43.0], [5.5, 44.0], [5.6, 44.0], [5.7, 44.0], [5.8, 44.0], [5.9, 44.0], [6.0, 44.0], [6.1, 45.0], [6.2, 45.0], [6.3, 45.0], [6.4, 45.0], [6.5, 45.0], [6.6, 45.0], [6.7, 45.0], [6.8, 45.0], [6.9, 46.0], [7.0, 46.0], [7.1, 46.0], [7.2, 46.0], [7.3, 46.0], [7.4, 47.0], [7.5, 47.0], [7.6, 47.0], [7.7, 47.0], [7.8, 48.0], [7.9, 48.0], [8.0, 48.0], [8.1, 49.0], [8.2, 49.0], [8.3, 49.0], [8.4, 50.0], [8.5, 50.0], [8.6, 50.0], [8.7, 51.0], [8.8, 51.0], [8.9, 51.0], [9.0, 52.0], [9.1, 52.0], [9.2, 52.0], [9.3, 53.0], [9.4, 53.0], [9.5, 54.0], [9.6, 54.0], [9.7, 55.0], [9.8, 55.0], [9.9, 55.0], [10.0, 56.0], [10.1, 56.0], [10.2, 56.0], [10.3, 57.0], [10.4, 57.0], [10.5, 58.0], [10.6, 58.0], [10.7, 58.0], [10.8, 58.0], [10.9, 59.0], [11.0, 59.0], [11.1, 59.0], [11.2, 60.0], [11.3, 60.0], [11.4, 61.0], [11.5, 61.0], [11.6, 61.0], [11.7, 61.0], [11.8, 62.0], [11.9, 62.0], [12.0, 62.0], [12.1, 63.0], [12.2, 63.0], [12.3, 63.0], [12.4, 64.0], [12.5, 64.0], [12.6, 65.0], [12.7, 65.0], [12.8, 65.0], [12.9, 66.0], [13.0, 66.0], [13.1, 66.0], [13.2, 67.0], [13.3, 67.0], [13.4, 67.0], [13.5, 67.0], [13.6, 68.0], [13.7, 68.0], [13.8, 68.0], [13.9, 68.0], [14.0, 69.0], [14.1, 69.0], [14.2, 69.0], [14.3, 69.0], [14.4, 70.0], [14.5, 70.0], [14.6, 70.0], [14.7, 70.0], [14.8, 70.0], [14.9, 71.0], [15.0, 71.0], [15.1, 71.0], [15.2, 71.0], [15.3, 72.0], [15.4, 72.0], [15.5, 72.0], [15.6, 73.0], [15.7, 73.0], [15.8, 74.0], [15.9, 74.0], [16.0, 74.0], [16.1, 75.0], [16.2, 75.0], [16.3, 76.0], [16.4, 76.0], [16.5, 76.0], [16.6, 77.0], [16.7, 77.0], [16.8, 78.0], [16.9, 78.0], [17.0, 78.0], [17.1, 79.0], [17.2, 79.0], [17.3, 79.0], [17.4, 80.0], [17.5, 80.0], [17.6, 80.0], [17.7, 81.0], [17.8, 81.0], [17.9, 81.0], [18.0, 82.0], [18.1, 82.0], [18.2, 83.0], [18.3, 83.0], [18.4, 83.0], [18.5, 84.0], [18.6, 84.0], [18.7, 85.0], [18.8, 85.0], [18.9, 85.0], [19.0, 85.0], [19.1, 85.0], [19.2, 86.0], [19.3, 86.0], [19.4, 86.0], [19.5, 86.0], [19.6, 87.0], [19.7, 87.0], [19.8, 87.0], [19.9, 87.0], [20.0, 88.0], [20.1, 88.0], [20.2, 89.0], [20.3, 89.0], [20.4, 89.0], [20.5, 89.0], [20.6, 89.0], [20.7, 90.0], [20.8, 90.0], [20.9, 91.0], [21.0, 91.0], [21.1, 92.0], [21.2, 92.0], [21.3, 93.0], [21.4, 93.0], [21.5, 94.0], [21.6, 94.0], [21.7, 94.0], [21.8, 95.0], [21.9, 95.0], [22.0, 96.0], [22.1, 96.0], [22.2, 96.0], [22.3, 97.0], [22.4, 97.0], [22.5, 97.0], [22.6, 98.0], [22.7, 98.0], [22.8, 99.0], [22.9, 99.0], [23.0, 100.0], [23.1, 100.0], [23.2, 101.0], [23.3, 101.0], [23.4, 102.0], [23.5, 102.0], [23.6, 103.0], [23.7, 103.0], [23.8, 104.0], [23.9, 105.0], [24.0, 105.0], [24.1, 106.0], [24.2, 106.0], [24.3, 106.0], [24.4, 107.0], [24.5, 108.0], [24.6, 109.0], [24.7, 109.0], [24.8, 110.0], [24.9, 110.0], [25.0, 111.0], [25.1, 111.0], [25.2, 112.0], [25.3, 113.0], [25.4, 113.0], [25.5, 114.0], [25.6, 114.0], [25.7, 115.0], [25.8, 115.0], [25.9, 116.0], [26.0, 116.0], [26.1, 117.0], [26.2, 117.0], [26.3, 117.0], [26.4, 118.0], [26.5, 119.0], [26.6, 119.0], [26.7, 120.0], [26.8, 120.0], [26.9, 120.0], [27.0, 121.0], [27.1, 121.0], [27.2, 121.0], [27.3, 122.0], [27.4, 122.0], [27.5, 122.0], [27.6, 123.0], [27.7, 123.0], [27.8, 124.0], [27.9, 125.0], [28.0, 125.0], [28.1, 125.0], [28.2, 126.0], [28.3, 127.0], [28.4, 128.0], [28.5, 128.0], [28.6, 128.0], [28.7, 129.0], [28.8, 130.0], [28.9, 130.0], [29.0, 131.0], [29.1, 131.0], [29.2, 132.0], [29.3, 132.0], [29.4, 132.0], [29.5, 133.0], [29.6, 133.0], [29.7, 133.0], [29.8, 133.0], [29.9, 133.0], [30.0, 134.0], [30.1, 134.0], [30.2, 134.0], [30.3, 134.0], [30.4, 134.0], [30.5, 135.0], [30.6, 135.0], [30.7, 135.0], [30.8, 135.0], [30.9, 136.0], [31.0, 136.0], [31.1, 137.0], [31.2, 137.0], [31.3, 137.0], [31.4, 138.0], [31.5, 138.0], [31.6, 138.0], [31.7, 138.0], [31.8, 139.0], [31.9, 139.0], [32.0, 139.0], [32.1, 140.0], [32.2, 140.0], [32.3, 140.0], [32.4, 140.0], [32.5, 141.0], [32.6, 141.0], [32.7, 142.0], [32.8, 142.0], [32.9, 142.0], [33.0, 143.0], [33.1, 144.0], [33.2, 144.0], [33.3, 144.0], [33.4, 144.0], [33.5, 145.0], [33.6, 145.0], [33.7, 145.0], [33.8, 145.0], [33.9, 146.0], [34.0, 146.0], [34.1, 146.0], [34.2, 147.0], [34.3, 147.0], [34.4, 148.0], [34.5, 148.0], [34.6, 149.0], [34.7, 149.0], [34.8, 149.0], [34.9, 150.0], [35.0, 150.0], [35.1, 151.0], [35.2, 151.0], [35.3, 151.0], [35.4, 152.0], [35.5, 152.0], [35.6, 153.0], [35.7, 153.0], [35.8, 153.0], [35.9, 154.0], [36.0, 155.0], [36.1, 155.0], [36.2, 157.0], [36.3, 158.0], [36.4, 159.0], [36.5, 159.0], [36.6, 160.0], [36.7, 161.0], [36.8, 162.0], [36.9, 162.0], [37.0, 163.0], [37.1, 163.0], [37.2, 164.0], [37.3, 164.0], [37.4, 164.0], [37.5, 165.0], [37.6, 165.0], [37.7, 166.0], [37.8, 166.0], [37.9, 168.0], [38.0, 168.0], [38.1, 168.0], [38.2, 169.0], [38.3, 169.0], [38.4, 170.0], [38.5, 171.0], [38.6, 171.0], [38.7, 172.0], [38.8, 172.0], [38.9, 173.0], [39.0, 174.0], [39.1, 175.0], [39.2, 175.0], [39.3, 175.0], [39.4, 176.0], [39.5, 176.0], [39.6, 177.0], [39.7, 177.0], [39.8, 178.0], [39.9, 178.0], [40.0, 179.0], [40.1, 180.0], [40.2, 180.0], [40.3, 181.0], [40.4, 182.0], [40.5, 183.0], [40.6, 183.0], [40.7, 184.0], [40.8, 185.0], [40.9, 186.0], [41.0, 187.0], [41.1, 188.0], [41.2, 188.0], [41.3, 190.0], [41.4, 191.0], [41.5, 191.0], [41.6, 192.0], [41.7, 193.0], [41.8, 193.0], [41.9, 195.0], [42.0, 195.0], [42.1, 197.0], [42.2, 198.0], [42.3, 199.0], [42.4, 199.0], [42.5, 200.0], [42.6, 201.0], [42.7, 201.0], [42.8, 202.0], [42.9, 203.0], [43.0, 203.0], [43.1, 204.0], [43.2, 205.0], [43.3, 206.0], [43.4, 207.0], [43.5, 207.0], [43.6, 208.0], [43.7, 208.0], [43.8, 209.0], [43.9, 210.0], [44.0, 211.0], [44.1, 211.0], [44.2, 212.0], [44.3, 212.0], [44.4, 213.0], [44.5, 214.0], [44.6, 215.0], [44.7, 216.0], [44.8, 216.0], [44.9, 216.0], [45.0, 217.0], [45.1, 219.0], [45.2, 219.0], [45.3, 220.0], [45.4, 221.0], [45.5, 222.0], [45.6, 224.0], [45.7, 224.0], [45.8, 225.0], [45.9, 226.0], [46.0, 226.0], [46.1, 227.0], [46.2, 228.0], [46.3, 229.0], [46.4, 230.0], [46.5, 231.0], [46.6, 232.0], [46.7, 232.0], [46.8, 233.0], [46.9, 234.0], [47.0, 235.0], [47.1, 236.0], [47.2, 238.0], [47.3, 239.0], [47.4, 239.0], [47.5, 240.0], [47.6, 241.0], [47.7, 242.0], [47.8, 242.0], [47.9, 243.0], [48.0, 243.0], [48.1, 245.0], [48.2, 246.0], [48.3, 247.0], [48.4, 249.0], [48.5, 249.0], [48.6, 250.0], [48.7, 251.0], [48.8, 252.0], [48.9, 253.0], [49.0, 254.0], [49.1, 255.0], [49.2, 255.0], [49.3, 256.0], [49.4, 257.0], [49.5, 259.0], [49.6, 260.0], [49.7, 260.0], [49.8, 262.0], [49.9, 263.0], [50.0, 264.0], [50.1, 264.0], [50.2, 265.0], [50.3, 266.0], [50.4, 267.0], [50.5, 267.0], [50.6, 268.0], [50.7, 269.0], [50.8, 269.0], [50.9, 271.0], [51.0, 271.0], [51.1, 272.0], [51.2, 272.0], [51.3, 273.0], [51.4, 274.0], [51.5, 274.0], [51.6, 275.0], [51.7, 276.0], [51.8, 277.0], [51.9, 278.0], [52.0, 278.0], [52.1, 278.0], [52.2, 279.0], [52.3, 280.0], [52.4, 282.0], [52.5, 282.0], [52.6, 283.0], [52.7, 284.0], [52.8, 285.0], [52.9, 286.0], [53.0, 288.0], [53.1, 289.0], [53.2, 291.0], [53.3, 292.0], [53.4, 293.0], [53.5, 293.0], [53.6, 294.0], [53.7, 294.0], [53.8, 296.0], [53.9, 297.0], [54.0, 298.0], [54.1, 298.0], [54.2, 299.0], [54.3, 300.0], [54.4, 301.0], [54.5, 302.0], [54.6, 303.0], [54.7, 303.0], [54.8, 305.0], [54.9, 306.0], [55.0, 306.0], [55.1, 307.0], [55.2, 309.0], [55.3, 310.0], [55.4, 311.0], [55.5, 312.0], [55.6, 314.0], [55.7, 315.0], [55.8, 316.0], [55.9, 317.0], [56.0, 319.0], [56.1, 319.0], [56.2, 320.0], [56.3, 322.0], [56.4, 323.0], [56.5, 324.0], [56.6, 324.0], [56.7, 326.0], [56.8, 327.0], [56.9, 328.0], [57.0, 328.0], [57.1, 330.0], [57.2, 331.0], [57.3, 332.0], [57.4, 333.0], [57.5, 335.0], [57.6, 336.0], [57.7, 338.0], [57.8, 339.0], [57.9, 340.0], [58.0, 341.0], [58.1, 343.0], [58.2, 344.0], [58.3, 345.0], [58.4, 346.0], [58.5, 347.0], [58.6, 348.0], [58.7, 349.0], [58.8, 349.0], [58.9, 351.0], [59.0, 352.0], [59.1, 353.0], [59.2, 354.0], [59.3, 355.0], [59.4, 355.0], [59.5, 356.0], [59.6, 357.0], [59.7, 358.0], [59.8, 360.0], [59.9, 361.0], [60.0, 362.0], [60.1, 363.0], [60.2, 365.0], [60.3, 367.0], [60.4, 368.0], [60.5, 369.0], [60.6, 369.0], [60.7, 370.0], [60.8, 371.0], [60.9, 372.0], [61.0, 373.0], [61.1, 374.0], [61.2, 376.0], [61.3, 378.0], [61.4, 380.0], [61.5, 381.0], [61.6, 382.0], [61.7, 383.0], [61.8, 385.0], [61.9, 386.0], [62.0, 386.0], [62.1, 387.0], [62.2, 388.0], [62.3, 389.0], [62.4, 391.0], [62.5, 392.0], [62.6, 392.0], [62.7, 393.0], [62.8, 394.0], [62.9, 395.0], [63.0, 396.0], [63.1, 398.0], [63.2, 399.0], [63.3, 399.0], [63.4, 400.0], [63.5, 401.0], [63.6, 401.0], [63.7, 402.0], [63.8, 404.0], [63.9, 405.0], [64.0, 406.0], [64.1, 407.0], [64.2, 408.0], [64.3, 409.0], [64.4, 410.0], [64.5, 411.0], [64.6, 411.0], [64.7, 412.0], [64.8, 413.0], [64.9, 413.0], [65.0, 415.0], [65.1, 416.0], [65.2, 417.0], [65.3, 418.0], [65.4, 419.0], [65.5, 421.0], [65.6, 422.0], [65.7, 423.0], [65.8, 424.0], [65.9, 425.0], [66.0, 428.0], [66.1, 429.0], [66.2, 431.0], [66.3, 432.0], [66.4, 433.0], [66.5, 434.0], [66.6, 436.0], [66.7, 437.0], [66.8, 439.0], [66.9, 440.0], [67.0, 441.0], [67.1, 442.0], [67.2, 443.0], [67.3, 443.0], [67.4, 444.0], [67.5, 445.0], [67.6, 447.0], [67.7, 448.0], [67.8, 449.0], [67.9, 452.0], [68.0, 452.0], [68.1, 453.0], [68.2, 454.0], [68.3, 454.0], [68.4, 455.0], [68.5, 455.0], [68.6, 456.0], [68.7, 457.0], [68.8, 458.0], [68.9, 459.0], [69.0, 459.0], [69.1, 461.0], [69.2, 462.0], [69.3, 464.0], [69.4, 465.0], [69.5, 466.0], [69.6, 468.0], [69.7, 468.0], [69.8, 470.0], [69.9, 470.0], [70.0, 472.0], [70.1, 472.0], [70.2, 473.0], [70.3, 475.0], [70.4, 476.0], [70.5, 477.0], [70.6, 479.0], [70.7, 481.0], [70.8, 482.0], [70.9, 483.0], [71.0, 484.0], [71.1, 485.0], [71.2, 485.0], [71.3, 487.0], [71.4, 489.0], [71.5, 489.0], [71.6, 490.0], [71.7, 490.0], [71.8, 491.0], [71.9, 492.0], [72.0, 493.0], [72.1, 494.0], [72.2, 495.0], [72.3, 497.0], [72.4, 497.0], [72.5, 498.0], [72.6, 499.0], [72.7, 499.0], [72.8, 500.0], [72.9, 501.0], [73.0, 502.0], [73.1, 503.0], [73.2, 504.0], [73.3, 504.0], [73.4, 505.0], [73.5, 505.0], [73.6, 506.0], [73.7, 507.0], [73.8, 508.0], [73.9, 508.0], [74.0, 510.0], [74.1, 510.0], [74.2, 511.0], [74.3, 512.0], [74.4, 512.0], [74.5, 513.0], [74.6, 514.0], [74.7, 515.0], [74.8, 515.0], [74.9, 516.0], [75.0, 517.0], [75.1, 517.0], [75.2, 518.0], [75.3, 519.0], [75.4, 520.0], [75.5, 521.0], [75.6, 521.0], [75.7, 522.0], [75.8, 523.0], [75.9, 525.0], [76.0, 525.0], [76.1, 526.0], [76.2, 528.0], [76.3, 528.0], [76.4, 529.0], [76.5, 531.0], [76.6, 531.0], [76.7, 532.0], [76.8, 533.0], [76.9, 534.0], [77.0, 534.0], [77.1, 535.0], [77.2, 536.0], [77.3, 536.0], [77.4, 537.0], [77.5, 538.0], [77.6, 539.0], [77.7, 541.0], [77.8, 543.0], [77.9, 544.0], [78.0, 545.0], [78.1, 546.0], [78.2, 547.0], [78.3, 547.0], [78.4, 548.0], [78.5, 549.0], [78.6, 550.0], [78.7, 551.0], [78.8, 552.0], [78.9, 553.0], [79.0, 554.0], [79.1, 556.0], [79.2, 558.0], [79.3, 559.0], [79.4, 560.0], [79.5, 560.0], [79.6, 561.0], [79.7, 563.0], [79.8, 563.0], [79.9, 564.0], [80.0, 565.0], [80.1, 566.0], [80.2, 568.0], [80.3, 571.0], [80.4, 572.0], [80.5, 573.0], [80.6, 575.0], [80.7, 577.0], [80.8, 578.0], [80.9, 579.0], [81.0, 580.0], [81.1, 581.0], [81.2, 583.0], [81.3, 585.0], [81.4, 586.0], [81.5, 587.0], [81.6, 589.0], [81.7, 591.0], [81.8, 594.0], [81.9, 595.0], [82.0, 597.0], [82.1, 600.0], [82.2, 601.0], [82.3, 602.0], [82.4, 603.0], [82.5, 604.0], [82.6, 604.0], [82.7, 606.0], [82.8, 606.0], [82.9, 608.0], [83.0, 609.0], [83.1, 611.0], [83.2, 611.0], [83.3, 612.0], [83.4, 613.0], [83.5, 614.0], [83.6, 616.0], [83.7, 617.0], [83.8, 620.0], [83.9, 621.0], [84.0, 623.0], [84.1, 624.0], [84.2, 625.0], [84.3, 628.0], [84.4, 628.0], [84.5, 629.0], [84.6, 631.0], [84.7, 632.0], [84.8, 633.0], [84.9, 634.0], [85.0, 636.0], [85.1, 637.0], [85.2, 639.0], [85.3, 640.0], [85.4, 642.0], [85.5, 644.0], [85.6, 645.0], [85.7, 646.0], [85.8, 647.0], [85.9, 648.0], [86.0, 649.0], [86.1, 650.0], [86.2, 651.0], [86.3, 653.0], [86.4, 656.0], [86.5, 657.0], [86.6, 658.0], [86.7, 660.0], [86.8, 663.0], [86.9, 666.0], [87.0, 667.0], [87.1, 669.0], [87.2, 670.0], [87.3, 673.0], [87.4, 675.0], [87.5, 677.0], [87.6, 680.0], [87.7, 681.0], [87.8, 682.0], [87.9, 683.0], [88.0, 684.0], [88.1, 686.0], [88.2, 687.0], [88.3, 690.0], [88.4, 691.0], [88.5, 692.0], [88.6, 695.0], [88.7, 697.0], [88.8, 701.0], [88.9, 702.0], [89.0, 703.0], [89.1, 707.0], [89.2, 709.0], [89.3, 711.0], [89.4, 714.0], [89.5, 716.0], [89.6, 722.0], [89.7, 725.0], [89.8, 727.0], [89.9, 730.0], [90.0, 732.0], [90.1, 736.0], [90.2, 738.0], [90.3, 739.0], [90.4, 744.0], [90.5, 747.0], [90.6, 748.0], [90.7, 750.0], [90.8, 752.0], [90.9, 758.0], [91.0, 759.0], [91.1, 764.0], [91.2, 766.0], [91.3, 769.0], [91.4, 774.0], [91.5, 779.0], [91.6, 780.0], [91.7, 783.0], [91.8, 786.0], [91.9, 788.0], [92.0, 789.0], [92.1, 792.0], [92.2, 796.0], [92.3, 799.0], [92.4, 802.0], [92.5, 805.0], [92.6, 809.0], [92.7, 815.0], [92.8, 817.0], [92.9, 819.0], [93.0, 823.0], [93.1, 826.0], [93.2, 832.0], [93.3, 834.0], [93.4, 841.0], [93.5, 844.0], [93.6, 850.0], [93.7, 856.0], [93.8, 863.0], [93.9, 868.0], [94.0, 873.0], [94.1, 881.0], [94.2, 888.0], [94.3, 892.0], [94.4, 898.0], [94.5, 905.0], [94.6, 908.0], [94.7, 912.0], [94.8, 916.0], [94.9, 919.0], [95.0, 927.0], [95.1, 932.0], [95.2, 940.0], [95.3, 948.0], [95.4, 953.0], [95.5, 963.0], [95.6, 970.0], [95.7, 974.0], [95.8, 979.0], [95.9, 987.0], [96.0, 995.0], [96.1, 997.0], [96.2, 1004.0], [96.3, 1010.0], [96.4, 1022.0], [96.5, 1031.0], [96.6, 1036.0], [96.7, 1038.0], [96.8, 1044.0], [96.9, 1052.0], [97.0, 1059.0], [97.1, 1066.0], [97.2, 1073.0], [97.3, 1077.0], [97.4, 1087.0], [97.5, 1089.0], [97.6, 1095.0], [97.7, 1113.0], [97.8, 1117.0], [97.9, 1128.0], [98.0, 1151.0], [98.1, 1157.0], [98.2, 1163.0], [98.3, 1176.0], [98.4, 1182.0], [98.5, 1190.0], [98.6, 1211.0], [98.7, 1239.0], [98.8, 1258.0], [98.9, 1279.0], [99.0, 1323.0], [99.1, 1341.0], [99.2, 1378.0], [99.3, 1393.0], [99.4, 1406.0], [99.5, 1465.0], [99.6, 1504.0], [99.7, 1590.0], [99.8, 1605.0], [99.9, 1714.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 1191.0, "series": [{"data": [[0.0, 1191.0], [2100.0, 1.0], [2200.0, 1.0], [600.0, 346.0], [700.0, 186.0], [800.0, 110.0], [200.0, 612.0], [900.0, 88.0], [1000.0, 77.0], [1100.0, 48.0], [1200.0, 20.0], [300.0, 473.0], [1300.0, 21.0], [1400.0, 13.0], [1500.0, 9.0], [400.0, 486.0], [100.0, 1012.0], [1600.0, 6.0], [1700.0, 2.0], [1800.0, 1.0], [1900.0, 1.0], [500.0, 487.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 2200.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 3780.0, "series": [{"data": [[0.0, 3780.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1389.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 21.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 1.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.880952380952381, "minX": 1.6023291E12, "maxY": 10.0, "series": [{"data": [[1.60232928E12, 9.880952380952381], [1.60232916E12, 10.0], [1.60232922E12, 10.0], [1.6023291E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60232928E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 136.0, "minX": 1.0, "maxY": 1137.0, "series": [{"data": [[8.0, 198.0], [4.0, 612.0], [2.0, 1137.0], [1.0, 1083.0], [9.0, 427.0], [10.0, 346.6783095329985], [5.0, 303.0], [6.0, 136.0], [3.0, 604.0], [7.0, 301.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.991331150067428, 347.00211905220544]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 2947.9166666666665, "minX": 1.6023291E12, "maxY": 5944064.516666667, "series": [{"data": [[1.60232928E12, 1146450.2], [1.60232916E12, 5944064.516666667], [1.60232922E12, 5425723.333333333], [1.6023291E12, 4395523.666666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60232928E12, 2947.9166666666665], [1.60232916E12, 12510.266666666666], [1.60232922E12, 13745.116666666667], [1.6023291E12, 10572.383333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60232928E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 316.3730158730158, "minX": 1.6023291E12, "maxY": 369.0851851851853, "series": [{"data": [[1.60232928E12, 316.3730158730158], [1.60232916E12, 369.0851851851853], [1.60232922E12, 334.5950782997761], [1.6023291E12, 345.5693950177941]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60232928E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 315.44708994708975, "minX": 1.6023291E12, "maxY": 367.6882716049378, "series": [{"data": [[1.60232928E12, 315.44708994708975], [1.60232916E12, 367.6882716049378], [1.60232922E12, 333.6806487695748], [1.6023291E12, 344.40498220640563]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60232928E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.006711409395973142, "minX": 1.6023291E12, "maxY": 0.06548042704626338, "series": [{"data": [[1.60232928E12, 0.010582010582010578], [1.60232916E12, 0.0074074074074074086], [1.60232922E12, 0.006711409395973142], [1.6023291E12, 0.06548042704626338]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60232928E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 28.0, "minX": 1.6023291E12, "maxY": 2237.0, "series": [{"data": [[1.60232928E12, 1825.0], [1.60232916E12, 1938.0], [1.60232922E12, 2237.0], [1.6023291E12, 1618.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60232928E12, 33.0], [1.60232916E12, 34.0], [1.60232922E12, 32.0], [1.6023291E12, 38.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60232928E12, 33.0], [1.60232916E12, 34.0], [1.60232922E12, 32.71110017061234], [1.6023291E12, 38.91940013408661]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60232928E12, 33.0], [1.60232916E12, 34.0], [1.60232922E12, 32.0], [1.6023291E12, 38.356999832391736]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60232928E12, 31.0], [1.60232916E12, 31.0], [1.60232922E12, 29.0], [1.6023291E12, 28.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60232928E12, 176.5], [1.60232916E12, 317.0], [1.60232922E12, 213.0], [1.6023291E12, 272.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60232928E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 32.0, "minX": 2.0, "maxY": 1110.0, "series": [{"data": [[32.0, 307.0], [33.0, 258.0], [2.0, 1110.0], [34.0, 216.5], [35.0, 200.0], [36.0, 263.0], [37.0, 163.0], [38.0, 245.5], [39.0, 139.0], [41.0, 135.0], [40.0, 109.0], [43.0, 98.0], [44.0, 125.0], [45.0, 129.0], [46.0, 151.5], [47.0, 126.0], [48.0, 148.5], [52.0, 74.0], [55.0, 149.0], [54.0, 117.0], [58.0, 128.5], [59.0, 86.0], [61.0, 134.0], [60.0, 104.5], [73.0, 87.0], [80.0, 93.5], [82.0, 60.5], [6.0, 816.5], [12.0, 780.5], [13.0, 642.0], [14.0, 596.5], [15.0, 552.5], [16.0, 570.0], [17.0, 582.0], [18.0, 510.5], [19.0, 474.0], [20.0, 400.0], [21.0, 422.0], [22.0, 446.5], [23.0, 406.0], [24.0, 422.5], [25.0, 353.5], [26.0, 372.0], [27.0, 368.0], [28.0, 356.0], [29.0, 290.0], [30.0, 269.5], [31.0, 213.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[27.0, 32.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 82.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 32.0, "minX": 2.0, "maxY": 1107.0, "series": [{"data": [[32.0, 306.5], [33.0, 255.5], [2.0, 1107.0], [34.0, 216.0], [35.0, 198.0], [36.0, 262.0], [37.0, 163.0], [38.0, 244.5], [39.0, 139.0], [41.0, 135.0], [40.0, 109.0], [43.0, 98.0], [44.0, 124.5], [45.0, 128.5], [46.0, 151.0], [47.0, 126.0], [48.0, 147.5], [52.0, 74.0], [55.0, 148.0], [54.0, 116.5], [58.0, 127.5], [59.0, 86.0], [61.0, 133.5], [60.0, 104.5], [73.0, 87.0], [80.0, 93.5], [82.0, 60.5], [6.0, 811.0], [12.0, 777.0], [13.0, 639.0], [14.0, 590.0], [15.0, 550.5], [16.0, 567.0], [17.0, 571.0], [18.0, 506.5], [19.0, 471.5], [20.0, 397.5], [21.0, 422.0], [22.0, 445.0], [23.0, 406.0], [24.0, 421.0], [25.0, 352.0], [26.0, 371.0], [27.0, 368.0], [28.0, 355.0], [29.0, 290.0], [30.0, 269.0], [31.0, 213.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[27.0, 32.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 82.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 6.133333333333334, "minX": 1.6023291E12, "maxY": 29.8, "series": [{"data": [[1.60232928E12, 6.133333333333334], [1.60232916E12, 27.0], [1.60232922E12, 29.8], [1.6023291E12, 23.583333333333332]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60232928E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.6023291E12, "maxY": 29.8, "series": [{"data": [[1.60232928E12, 6.3], [1.60232916E12, 26.983333333333334], [1.60232922E12, 29.8], [1.6023291E12, 23.416666666666668]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.60232916E12, 0.016666666666666666]], "isOverall": false, "label": "400", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60232928E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.6023291E12, "maxY": 29.8, "series": [{"data": [[1.60232928E12, 6.3], [1.60232916E12, 26.983333333333334], [1.60232922E12, 29.8], [1.6023291E12, 23.416666666666668]], "isOverall": false, "label": "HTTP Request-success", "isController": false}, {"data": [[1.60232916E12, 0.016666666666666666]], "isOverall": false, "label": "HTTP Request-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60232928E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.6023291E12, "maxY": 29.8, "series": [{"data": [[1.60232928E12, 6.3], [1.60232916E12, 26.983333333333334], [1.60232922E12, 29.8], [1.6023291E12, 23.416666666666668]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.60232916E12, 0.016666666666666666]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60232928E12, "title": "Total Transactions Per Second"}},
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

