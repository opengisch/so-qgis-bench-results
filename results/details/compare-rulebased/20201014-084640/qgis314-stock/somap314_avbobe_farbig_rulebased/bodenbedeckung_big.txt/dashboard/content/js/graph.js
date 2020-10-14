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
        data: {"result": {"minY": 30.0, "minX": 0.0, "maxY": 1986.0, "series": [{"data": [[0.0, 30.0], [0.1, 32.0], [0.2, 34.0], [0.3, 35.0], [0.4, 36.0], [0.5, 36.0], [0.6, 37.0], [0.7, 37.0], [0.8, 38.0], [0.9, 38.0], [1.0, 38.0], [1.1, 38.0], [1.2, 38.0], [1.3, 39.0], [1.4, 39.0], [1.5, 39.0], [1.6, 40.0], [1.7, 40.0], [1.8, 40.0], [1.9, 40.0], [2.0, 41.0], [2.1, 41.0], [2.2, 41.0], [2.3, 42.0], [2.4, 42.0], [2.5, 42.0], [2.6, 43.0], [2.7, 43.0], [2.8, 43.0], [2.9, 43.0], [3.0, 43.0], [3.1, 44.0], [3.2, 44.0], [3.3, 44.0], [3.4, 44.0], [3.5, 45.0], [3.6, 45.0], [3.7, 45.0], [3.8, 45.0], [3.9, 45.0], [4.0, 46.0], [4.1, 46.0], [4.2, 46.0], [4.3, 46.0], [4.4, 46.0], [4.5, 47.0], [4.6, 47.0], [4.7, 47.0], [4.8, 47.0], [4.9, 47.0], [5.0, 48.0], [5.1, 48.0], [5.2, 48.0], [5.3, 48.0], [5.4, 48.0], [5.5, 49.0], [5.6, 49.0], [5.7, 49.0], [5.8, 49.0], [5.9, 50.0], [6.0, 50.0], [6.1, 50.0], [6.2, 50.0], [6.3, 50.0], [6.4, 51.0], [6.5, 51.0], [6.6, 51.0], [6.7, 51.0], [6.8, 51.0], [6.9, 52.0], [7.0, 52.0], [7.1, 52.0], [7.2, 52.0], [7.3, 52.0], [7.4, 53.0], [7.5, 53.0], [7.6, 53.0], [7.7, 53.0], [7.8, 54.0], [7.9, 54.0], [8.0, 54.0], [8.1, 55.0], [8.2, 55.0], [8.3, 55.0], [8.4, 56.0], [8.5, 56.0], [8.6, 56.0], [8.7, 56.0], [8.8, 57.0], [8.9, 57.0], [9.0, 57.0], [9.1, 58.0], [9.2, 58.0], [9.3, 58.0], [9.4, 58.0], [9.5, 59.0], [9.6, 59.0], [9.7, 59.0], [9.8, 60.0], [9.9, 60.0], [10.0, 60.0], [10.1, 61.0], [10.2, 61.0], [10.3, 61.0], [10.4, 62.0], [10.5, 62.0], [10.6, 62.0], [10.7, 63.0], [10.8, 63.0], [10.9, 63.0], [11.0, 64.0], [11.1, 64.0], [11.2, 64.0], [11.3, 65.0], [11.4, 65.0], [11.5, 66.0], [11.6, 66.0], [11.7, 66.0], [11.8, 67.0], [11.9, 67.0], [12.0, 67.0], [12.1, 68.0], [12.2, 68.0], [12.3, 68.0], [12.4, 69.0], [12.5, 69.0], [12.6, 70.0], [12.7, 70.0], [12.8, 70.0], [12.9, 71.0], [13.0, 71.0], [13.1, 71.0], [13.2, 72.0], [13.3, 72.0], [13.4, 72.0], [13.5, 72.0], [13.6, 73.0], [13.7, 73.0], [13.8, 73.0], [13.9, 74.0], [14.0, 74.0], [14.1, 74.0], [14.2, 75.0], [14.3, 75.0], [14.4, 75.0], [14.5, 75.0], [14.6, 76.0], [14.7, 76.0], [14.8, 76.0], [14.9, 76.0], [15.0, 77.0], [15.1, 77.0], [15.2, 77.0], [15.3, 78.0], [15.4, 78.0], [15.5, 78.0], [15.6, 78.0], [15.7, 79.0], [15.8, 79.0], [15.9, 79.0], [16.0, 80.0], [16.1, 80.0], [16.2, 80.0], [16.3, 81.0], [16.4, 81.0], [16.5, 81.0], [16.6, 82.0], [16.7, 82.0], [16.8, 82.0], [16.9, 83.0], [17.0, 83.0], [17.1, 83.0], [17.2, 83.0], [17.3, 84.0], [17.4, 84.0], [17.5, 84.0], [17.6, 84.0], [17.7, 85.0], [17.8, 85.0], [17.9, 85.0], [18.0, 85.0], [18.1, 86.0], [18.2, 86.0], [18.3, 87.0], [18.4, 87.0], [18.5, 88.0], [18.6, 88.0], [18.7, 88.0], [18.8, 89.0], [18.9, 89.0], [19.0, 89.0], [19.1, 90.0], [19.2, 90.0], [19.3, 90.0], [19.4, 91.0], [19.5, 91.0], [19.6, 91.0], [19.7, 91.0], [19.8, 92.0], [19.9, 92.0], [20.0, 93.0], [20.1, 93.0], [20.2, 94.0], [20.3, 94.0], [20.4, 95.0], [20.5, 95.0], [20.6, 95.0], [20.7, 95.0], [20.8, 96.0], [20.9, 96.0], [21.0, 96.0], [21.1, 97.0], [21.2, 97.0], [21.3, 97.0], [21.4, 98.0], [21.5, 98.0], [21.6, 99.0], [21.7, 99.0], [21.8, 99.0], [21.9, 100.0], [22.0, 100.0], [22.1, 100.0], [22.2, 101.0], [22.3, 101.0], [22.4, 101.0], [22.5, 102.0], [22.6, 103.0], [22.7, 103.0], [22.8, 104.0], [22.9, 104.0], [23.0, 105.0], [23.1, 106.0], [23.2, 106.0], [23.3, 107.0], [23.4, 108.0], [23.5, 109.0], [23.6, 109.0], [23.7, 109.0], [23.8, 110.0], [23.9, 111.0], [24.0, 111.0], [24.1, 112.0], [24.2, 112.0], [24.3, 112.0], [24.4, 113.0], [24.5, 113.0], [24.6, 114.0], [24.7, 114.0], [24.8, 115.0], [24.9, 115.0], [25.0, 115.0], [25.1, 116.0], [25.2, 116.0], [25.3, 117.0], [25.4, 117.0], [25.5, 118.0], [25.6, 118.0], [25.7, 118.0], [25.8, 119.0], [25.9, 120.0], [26.0, 120.0], [26.1, 121.0], [26.2, 122.0], [26.3, 122.0], [26.4, 122.0], [26.5, 123.0], [26.6, 124.0], [26.7, 125.0], [26.8, 125.0], [26.9, 126.0], [27.0, 127.0], [27.1, 127.0], [27.2, 128.0], [27.3, 129.0], [27.4, 129.0], [27.5, 129.0], [27.6, 130.0], [27.7, 130.0], [27.8, 131.0], [27.9, 131.0], [28.0, 132.0], [28.1, 133.0], [28.2, 133.0], [28.3, 134.0], [28.4, 135.0], [28.5, 135.0], [28.6, 135.0], [28.7, 136.0], [28.8, 136.0], [28.9, 136.0], [29.0, 137.0], [29.1, 137.0], [29.2, 137.0], [29.3, 137.0], [29.4, 137.0], [29.5, 138.0], [29.6, 138.0], [29.7, 138.0], [29.8, 138.0], [29.9, 139.0], [30.0, 139.0], [30.1, 139.0], [30.2, 140.0], [30.3, 140.0], [30.4, 140.0], [30.5, 141.0], [30.6, 141.0], [30.7, 141.0], [30.8, 141.0], [30.9, 141.0], [31.0, 141.0], [31.1, 142.0], [31.2, 142.0], [31.3, 142.0], [31.4, 142.0], [31.5, 143.0], [31.6, 143.0], [31.7, 143.0], [31.8, 144.0], [31.9, 144.0], [32.0, 144.0], [32.1, 144.0], [32.2, 145.0], [32.3, 145.0], [32.4, 145.0], [32.5, 145.0], [32.6, 146.0], [32.7, 146.0], [32.8, 147.0], [32.9, 147.0], [33.0, 147.0], [33.1, 147.0], [33.2, 147.0], [33.3, 148.0], [33.4, 148.0], [33.5, 148.0], [33.6, 149.0], [33.7, 149.0], [33.8, 150.0], [33.9, 150.0], [34.0, 150.0], [34.1, 150.0], [34.2, 151.0], [34.3, 151.0], [34.4, 151.0], [34.5, 152.0], [34.6, 152.0], [34.7, 153.0], [34.8, 153.0], [34.9, 153.0], [35.0, 154.0], [35.1, 154.0], [35.2, 155.0], [35.3, 155.0], [35.4, 156.0], [35.5, 156.0], [35.6, 157.0], [35.7, 157.0], [35.8, 158.0], [35.9, 158.0], [36.0, 159.0], [36.1, 159.0], [36.2, 160.0], [36.3, 160.0], [36.4, 161.0], [36.5, 162.0], [36.6, 163.0], [36.7, 163.0], [36.8, 164.0], [36.9, 164.0], [37.0, 165.0], [37.1, 166.0], [37.2, 167.0], [37.3, 167.0], [37.4, 168.0], [37.5, 169.0], [37.6, 169.0], [37.7, 170.0], [37.8, 171.0], [37.9, 171.0], [38.0, 171.0], [38.1, 172.0], [38.2, 173.0], [38.3, 174.0], [38.4, 174.0], [38.5, 175.0], [38.6, 175.0], [38.7, 176.0], [38.8, 177.0], [38.9, 177.0], [39.0, 178.0], [39.1, 178.0], [39.2, 179.0], [39.3, 179.0], [39.4, 180.0], [39.5, 181.0], [39.6, 181.0], [39.7, 183.0], [39.8, 183.0], [39.9, 183.0], [40.0, 184.0], [40.1, 185.0], [40.2, 186.0], [40.3, 186.0], [40.4, 187.0], [40.5, 188.0], [40.6, 188.0], [40.7, 189.0], [40.8, 189.0], [40.9, 190.0], [41.0, 191.0], [41.1, 191.0], [41.2, 192.0], [41.3, 193.0], [41.4, 193.0], [41.5, 194.0], [41.6, 195.0], [41.7, 196.0], [41.8, 196.0], [41.9, 197.0], [42.0, 198.0], [42.1, 199.0], [42.2, 200.0], [42.3, 200.0], [42.4, 201.0], [42.5, 201.0], [42.6, 201.0], [42.7, 202.0], [42.8, 202.0], [42.9, 203.0], [43.0, 203.0], [43.1, 204.0], [43.2, 205.0], [43.3, 206.0], [43.4, 206.0], [43.5, 207.0], [43.6, 208.0], [43.7, 209.0], [43.8, 210.0], [43.9, 210.0], [44.0, 210.0], [44.1, 211.0], [44.2, 212.0], [44.3, 213.0], [44.4, 213.0], [44.5, 214.0], [44.6, 215.0], [44.7, 215.0], [44.8, 217.0], [44.9, 218.0], [45.0, 218.0], [45.1, 218.0], [45.2, 219.0], [45.3, 220.0], [45.4, 220.0], [45.5, 221.0], [45.6, 222.0], [45.7, 223.0], [45.8, 224.0], [45.9, 225.0], [46.0, 225.0], [46.1, 226.0], [46.2, 226.0], [46.3, 227.0], [46.4, 228.0], [46.5, 229.0], [46.6, 229.0], [46.7, 230.0], [46.8, 231.0], [46.9, 232.0], [47.0, 233.0], [47.1, 234.0], [47.2, 234.0], [47.3, 235.0], [47.4, 236.0], [47.5, 236.0], [47.6, 237.0], [47.7, 237.0], [47.8, 238.0], [47.9, 240.0], [48.0, 240.0], [48.1, 241.0], [48.2, 241.0], [48.3, 242.0], [48.4, 242.0], [48.5, 243.0], [48.6, 244.0], [48.7, 244.0], [48.8, 245.0], [48.9, 245.0], [49.0, 246.0], [49.1, 246.0], [49.2, 247.0], [49.3, 248.0], [49.4, 248.0], [49.5, 249.0], [49.6, 250.0], [49.7, 251.0], [49.8, 252.0], [49.9, 253.0], [50.0, 254.0], [50.1, 255.0], [50.2, 255.0], [50.3, 256.0], [50.4, 257.0], [50.5, 257.0], [50.6, 259.0], [50.7, 260.0], [50.8, 261.0], [50.9, 262.0], [51.0, 262.0], [51.1, 263.0], [51.2, 263.0], [51.3, 264.0], [51.4, 265.0], [51.5, 266.0], [51.6, 266.0], [51.7, 267.0], [51.8, 268.0], [51.9, 269.0], [52.0, 270.0], [52.1, 271.0], [52.2, 272.0], [52.3, 273.0], [52.4, 275.0], [52.5, 276.0], [52.6, 278.0], [52.7, 279.0], [52.8, 280.0], [52.9, 280.0], [53.0, 281.0], [53.1, 282.0], [53.2, 282.0], [53.3, 282.0], [53.4, 284.0], [53.5, 285.0], [53.6, 286.0], [53.7, 288.0], [53.8, 289.0], [53.9, 290.0], [54.0, 291.0], [54.1, 292.0], [54.2, 293.0], [54.3, 294.0], [54.4, 295.0], [54.5, 296.0], [54.6, 298.0], [54.7, 298.0], [54.8, 299.0], [54.9, 300.0], [55.0, 301.0], [55.1, 304.0], [55.2, 304.0], [55.3, 306.0], [55.4, 307.0], [55.5, 308.0], [55.6, 309.0], [55.7, 311.0], [55.8, 312.0], [55.9, 313.0], [56.0, 314.0], [56.1, 315.0], [56.2, 315.0], [56.3, 317.0], [56.4, 319.0], [56.5, 320.0], [56.6, 321.0], [56.7, 322.0], [56.8, 324.0], [56.9, 324.0], [57.0, 325.0], [57.1, 326.0], [57.2, 326.0], [57.3, 329.0], [57.4, 330.0], [57.5, 331.0], [57.6, 332.0], [57.7, 333.0], [57.8, 335.0], [57.9, 335.0], [58.0, 335.0], [58.1, 336.0], [58.2, 338.0], [58.3, 339.0], [58.4, 340.0], [58.5, 342.0], [58.6, 344.0], [58.7, 344.0], [58.8, 345.0], [58.9, 346.0], [59.0, 348.0], [59.1, 349.0], [59.2, 350.0], [59.3, 351.0], [59.4, 351.0], [59.5, 353.0], [59.6, 354.0], [59.7, 355.0], [59.8, 356.0], [59.9, 357.0], [60.0, 359.0], [60.1, 360.0], [60.2, 360.0], [60.3, 361.0], [60.4, 362.0], [60.5, 363.0], [60.6, 364.0], [60.7, 365.0], [60.8, 366.0], [60.9, 367.0], [61.0, 368.0], [61.1, 369.0], [61.2, 370.0], [61.3, 372.0], [61.4, 373.0], [61.5, 374.0], [61.6, 375.0], [61.7, 376.0], [61.8, 377.0], [61.9, 378.0], [62.0, 379.0], [62.1, 380.0], [62.2, 381.0], [62.3, 382.0], [62.4, 383.0], [62.5, 386.0], [62.6, 388.0], [62.7, 389.0], [62.8, 389.0], [62.9, 391.0], [63.0, 392.0], [63.1, 392.0], [63.2, 394.0], [63.3, 395.0], [63.4, 396.0], [63.5, 396.0], [63.6, 398.0], [63.7, 399.0], [63.8, 401.0], [63.9, 402.0], [64.0, 402.0], [64.1, 404.0], [64.2, 404.0], [64.3, 405.0], [64.4, 406.0], [64.5, 407.0], [64.6, 407.0], [64.7, 409.0], [64.8, 410.0], [64.9, 411.0], [65.0, 411.0], [65.1, 412.0], [65.2, 413.0], [65.3, 415.0], [65.4, 416.0], [65.5, 417.0], [65.6, 418.0], [65.7, 419.0], [65.8, 419.0], [65.9, 421.0], [66.0, 422.0], [66.1, 423.0], [66.2, 426.0], [66.3, 427.0], [66.4, 429.0], [66.5, 429.0], [66.6, 430.0], [66.7, 432.0], [66.8, 433.0], [66.9, 434.0], [67.0, 434.0], [67.1, 435.0], [67.2, 436.0], [67.3, 437.0], [67.4, 438.0], [67.5, 439.0], [67.6, 439.0], [67.7, 440.0], [67.8, 440.0], [67.9, 443.0], [68.0, 444.0], [68.1, 445.0], [68.2, 446.0], [68.3, 447.0], [68.4, 447.0], [68.5, 449.0], [68.6, 449.0], [68.7, 450.0], [68.8, 451.0], [68.9, 452.0], [69.0, 453.0], [69.1, 455.0], [69.2, 455.0], [69.3, 456.0], [69.4, 457.0], [69.5, 461.0], [69.6, 462.0], [69.7, 463.0], [69.8, 464.0], [69.9, 465.0], [70.0, 467.0], [70.1, 469.0], [70.2, 470.0], [70.3, 470.0], [70.4, 471.0], [70.5, 471.0], [70.6, 473.0], [70.7, 474.0], [70.8, 476.0], [70.9, 477.0], [71.0, 478.0], [71.1, 480.0], [71.2, 482.0], [71.3, 482.0], [71.4, 484.0], [71.5, 485.0], [71.6, 486.0], [71.7, 487.0], [71.8, 488.0], [71.9, 489.0], [72.0, 489.0], [72.1, 490.0], [72.2, 492.0], [72.3, 494.0], [72.4, 494.0], [72.5, 495.0], [72.6, 497.0], [72.7, 499.0], [72.8, 500.0], [72.9, 501.0], [73.0, 502.0], [73.1, 503.0], [73.2, 504.0], [73.3, 505.0], [73.4, 505.0], [73.5, 506.0], [73.6, 507.0], [73.7, 507.0], [73.8, 509.0], [73.9, 509.0], [74.0, 510.0], [74.1, 510.0], [74.2, 511.0], [74.3, 512.0], [74.4, 512.0], [74.5, 513.0], [74.6, 514.0], [74.7, 514.0], [74.8, 515.0], [74.9, 516.0], [75.0, 517.0], [75.1, 517.0], [75.2, 518.0], [75.3, 520.0], [75.4, 520.0], [75.5, 521.0], [75.6, 522.0], [75.7, 523.0], [75.8, 524.0], [75.9, 526.0], [76.0, 527.0], [76.1, 527.0], [76.2, 528.0], [76.3, 530.0], [76.4, 530.0], [76.5, 531.0], [76.6, 532.0], [76.7, 533.0], [76.8, 533.0], [76.9, 535.0], [77.0, 535.0], [77.1, 536.0], [77.2, 536.0], [77.3, 537.0], [77.4, 538.0], [77.5, 540.0], [77.6, 541.0], [77.7, 542.0], [77.8, 543.0], [77.9, 544.0], [78.0, 545.0], [78.1, 546.0], [78.2, 547.0], [78.3, 548.0], [78.4, 548.0], [78.5, 549.0], [78.6, 550.0], [78.7, 550.0], [78.8, 552.0], [78.9, 553.0], [79.0, 554.0], [79.1, 556.0], [79.2, 557.0], [79.3, 558.0], [79.4, 560.0], [79.5, 562.0], [79.6, 563.0], [79.7, 564.0], [79.8, 565.0], [79.9, 566.0], [80.0, 567.0], [80.1, 567.0], [80.2, 568.0], [80.3, 570.0], [80.4, 571.0], [80.5, 572.0], [80.6, 573.0], [80.7, 574.0], [80.8, 575.0], [80.9, 577.0], [81.0, 577.0], [81.1, 578.0], [81.2, 579.0], [81.3, 580.0], [81.4, 581.0], [81.5, 583.0], [81.6, 584.0], [81.7, 585.0], [81.8, 586.0], [81.9, 588.0], [82.0, 589.0], [82.1, 590.0], [82.2, 592.0], [82.3, 593.0], [82.4, 595.0], [82.5, 596.0], [82.6, 597.0], [82.7, 599.0], [82.8, 599.0], [82.9, 600.0], [83.0, 601.0], [83.1, 603.0], [83.2, 604.0], [83.3, 606.0], [83.4, 608.0], [83.5, 609.0], [83.6, 611.0], [83.7, 612.0], [83.8, 613.0], [83.9, 615.0], [84.0, 616.0], [84.1, 617.0], [84.2, 617.0], [84.3, 618.0], [84.4, 620.0], [84.5, 621.0], [84.6, 623.0], [84.7, 624.0], [84.8, 626.0], [84.9, 628.0], [85.0, 630.0], [85.1, 632.0], [85.2, 633.0], [85.3, 634.0], [85.4, 636.0], [85.5, 638.0], [85.6, 640.0], [85.7, 642.0], [85.8, 644.0], [85.9, 646.0], [86.0, 647.0], [86.1, 650.0], [86.2, 651.0], [86.3, 652.0], [86.4, 653.0], [86.5, 657.0], [86.6, 658.0], [86.7, 660.0], [86.8, 661.0], [86.9, 664.0], [87.0, 665.0], [87.1, 667.0], [87.2, 668.0], [87.3, 670.0], [87.4, 671.0], [87.5, 675.0], [87.6, 676.0], [87.7, 678.0], [87.8, 680.0], [87.9, 682.0], [88.0, 685.0], [88.1, 687.0], [88.2, 689.0], [88.3, 692.0], [88.4, 695.0], [88.5, 696.0], [88.6, 698.0], [88.7, 700.0], [88.8, 700.0], [88.9, 702.0], [89.0, 704.0], [89.1, 706.0], [89.2, 709.0], [89.3, 712.0], [89.4, 715.0], [89.5, 718.0], [89.6, 722.0], [89.7, 725.0], [89.8, 729.0], [89.9, 734.0], [90.0, 735.0], [90.1, 737.0], [90.2, 739.0], [90.3, 740.0], [90.4, 743.0], [90.5, 746.0], [90.6, 749.0], [90.7, 751.0], [90.8, 752.0], [90.9, 759.0], [91.0, 763.0], [91.1, 765.0], [91.2, 769.0], [91.3, 772.0], [91.4, 773.0], [91.5, 775.0], [91.6, 778.0], [91.7, 780.0], [91.8, 786.0], [91.9, 788.0], [92.0, 789.0], [92.1, 790.0], [92.2, 792.0], [92.3, 794.0], [92.4, 796.0], [92.5, 799.0], [92.6, 800.0], [92.7, 802.0], [92.8, 807.0], [92.9, 814.0], [93.0, 818.0], [93.1, 822.0], [93.2, 825.0], [93.3, 825.0], [93.4, 828.0], [93.5, 830.0], [93.6, 835.0], [93.7, 839.0], [93.8, 844.0], [93.9, 848.0], [94.0, 852.0], [94.1, 855.0], [94.2, 859.0], [94.3, 864.0], [94.4, 868.0], [94.5, 871.0], [94.6, 877.0], [94.7, 879.0], [94.8, 883.0], [94.9, 893.0], [95.0, 901.0], [95.1, 906.0], [95.2, 912.0], [95.3, 921.0], [95.4, 921.0], [95.5, 925.0], [95.6, 932.0], [95.7, 943.0], [95.8, 948.0], [95.9, 953.0], [96.0, 961.0], [96.1, 966.0], [96.2, 974.0], [96.3, 977.0], [96.4, 986.0], [96.5, 996.0], [96.6, 1000.0], [96.7, 1007.0], [96.8, 1014.0], [96.9, 1023.0], [97.0, 1030.0], [97.1, 1040.0], [97.2, 1046.0], [97.3, 1052.0], [97.4, 1059.0], [97.5, 1065.0], [97.6, 1085.0], [97.7, 1092.0], [97.8, 1103.0], [97.9, 1122.0], [98.0, 1138.0], [98.1, 1142.0], [98.2, 1153.0], [98.3, 1174.0], [98.4, 1178.0], [98.5, 1191.0], [98.6, 1203.0], [98.7, 1217.0], [98.8, 1225.0], [98.9, 1235.0], [99.0, 1246.0], [99.1, 1258.0], [99.2, 1300.0], [99.3, 1320.0], [99.4, 1329.0], [99.5, 1379.0], [99.6, 1416.0], [99.7, 1481.0], [99.8, 1513.0], [99.9, 1591.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 1136.0, "series": [{"data": [[0.0, 1136.0], [600.0, 301.0], [700.0, 202.0], [200.0, 657.0], [800.0, 125.0], [900.0, 83.0], [1000.0, 61.0], [1100.0, 42.0], [1200.0, 33.0], [300.0, 460.0], [1300.0, 20.0], [1400.0, 9.0], [1500.0, 9.0], [400.0, 471.0], [100.0, 1054.0], [1600.0, 2.0], [1700.0, 1.0], [1900.0, 1.0], [500.0, 523.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1900.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 13.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 3783.0, "series": [{"data": [[0.0, 3783.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1394.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 13.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.947368421052632, "minX": 1.60266552E12, "maxY": 10.0, "series": [{"data": [[1.60266564E12, 10.0], [1.6026657E12, 9.973214285714286], [1.60266552E12, 9.947368421052632], [1.60266558E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6026657E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 344.2895752895749, "minX": 1.0, "maxY": 890.0, "series": [{"data": [[8.0, 844.0], [4.0, 803.0], [2.0, 550.0], [1.0, 890.0], [9.0, 414.5], [10.0, 344.2895752895749], [5.0, 587.0], [6.0, 436.0], [3.0, 423.0], [7.0, 443.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.991136801541433, 344.7447013487492]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 147.46666666666667, "minX": 1.60266552E12, "maxY": 5645567.05, "series": [{"data": [[1.60266564E12, 5645567.05], [1.6026657E12, 5608179.333333333], [1.60266552E12, 101444.5], [1.60266558E12, 5556045.3]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60266564E12, 13616.433333333332], [1.6026657E12, 12981.35], [1.60266552E12, 147.46666666666667], [1.60266558E12, 13023.383333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6026657E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 336.5262267343486, "minX": 1.60266552E12, "maxY": 625.3684210526316, "series": [{"data": [[1.60266564E12, 336.5262267343486], [1.6026657E12, 346.3428571428569], [1.60266552E12, 625.3684210526316], [1.60266558E12, 348.5599534342255]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6026657E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 335.0817822899048, "minX": 1.60266552E12, "maxY": 623.0526315789473, "series": [{"data": [[1.60266564E12, 335.0817822899048], [1.6026657E12, 345.1535714285714], [1.60266552E12, 623.0526315789473], [1.60266558E12, 347.1478463329449]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6026657E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.010477299185098958, "minX": 1.60266552E12, "maxY": 5.368421052631581, "series": [{"data": [[1.60266564E12, 0.011844331641285946], [1.6026657E12, 0.011309523809523832], [1.60266552E12, 5.368421052631581], [1.60266558E12, 0.010477299185098958]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6026657E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 30.0, "minX": 1.60266552E12, "maxY": 1986.0, "series": [{"data": [[1.60266564E12, 1986.0], [1.6026657E12, 1512.0], [1.60266552E12, 1646.0], [1.60266558E12, 1607.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60266564E12, 37.96599957704544], [1.6026657E12, 37.0], [1.60266552E12, 48.0], [1.60266558E12, 39.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60266564E12, 38.0], [1.6026657E12, 37.0], [1.60266552E12, 48.0], [1.60266558E12, 40.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60266564E12, 38.0], [1.6026657E12, 37.0], [1.60266552E12, 48.0], [1.60266558E12, 39.330499795079234]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60266564E12, 32.0], [1.6026657E12, 31.0], [1.60266552E12, 48.0], [1.60266558E12, 30.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60266564E12, 244.0], [1.6026657E12, 253.0], [1.60266552E12, 589.0], [1.60266558E12, 267.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6026657E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 46.0, "minX": 2.0, "maxY": 800.5, "series": [{"data": [[2.0, 717.5], [32.0, 279.0], [33.0, 213.5], [35.0, 237.0], [34.0, 223.5], [36.0, 140.5], [37.0, 208.0], [39.0, 152.0], [38.0, 164.5], [41.0, 160.5], [40.0, 190.0], [42.0, 171.5], [43.0, 171.5], [45.0, 136.5], [44.0, 154.5], [46.0, 96.5], [51.0, 82.0], [53.0, 80.0], [57.0, 147.5], [56.0, 160.5], [58.0, 144.5], [59.0, 100.0], [62.0, 46.0], [63.0, 114.0], [78.0, 59.5], [85.0, 95.0], [6.0, 568.5], [8.0, 800.5], [12.0, 529.0], [13.0, 412.5], [15.0, 597.0], [16.0, 603.0], [17.0, 574.0], [18.0, 512.5], [19.0, 506.0], [20.0, 493.5], [21.0, 451.0], [22.0, 476.0], [23.0, 391.0], [24.0, 391.0], [25.0, 312.0], [26.0, 348.0], [27.0, 337.0], [28.0, 262.5], [29.0, 203.0], [30.0, 316.5], [31.0, 330.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 85.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 46.0, "minX": 2.0, "maxY": 800.5, "series": [{"data": [[2.0, 714.5], [32.0, 278.0], [33.0, 213.5], [35.0, 236.5], [34.0, 223.0], [36.0, 140.0], [37.0, 206.0], [39.0, 151.0], [38.0, 164.5], [41.0, 159.5], [40.0, 189.0], [42.0, 171.5], [43.0, 170.5], [45.0, 136.5], [44.0, 154.5], [46.0, 96.0], [51.0, 82.0], [53.0, 80.0], [57.0, 147.5], [56.0, 159.0], [58.0, 144.0], [59.0, 99.0], [62.0, 46.0], [63.0, 113.0], [78.0, 59.5], [85.0, 94.0], [6.0, 567.5], [8.0, 800.5], [12.0, 520.0], [13.0, 410.0], [15.0, 594.0], [16.0, 598.0], [17.0, 573.0], [18.0, 508.0], [19.0, 499.0], [20.0, 492.0], [21.0, 450.0], [22.0, 474.5], [23.0, 391.0], [24.0, 390.0], [25.0, 310.0], [26.0, 345.5], [27.0, 336.0], [28.0, 261.0], [29.0, 201.5], [30.0, 315.0], [31.0, 330.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 85.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.48333333333333334, "minX": 1.60266552E12, "maxY": 29.55, "series": [{"data": [[1.60266564E12, 29.55], [1.6026657E12, 27.833333333333332], [1.60266552E12, 0.48333333333333334], [1.60266558E12, 28.633333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6026657E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.31666666666666665, "minX": 1.60266552E12, "maxY": 29.55, "series": [{"data": [[1.60266564E12, 29.55], [1.6026657E12, 28.0], [1.60266552E12, 0.31666666666666665], [1.60266558E12, 28.633333333333333]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6026657E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.31666666666666665, "minX": 1.60266552E12, "maxY": 29.55, "series": [{"data": [[1.60266564E12, 29.55], [1.6026657E12, 28.0], [1.60266552E12, 0.31666666666666665], [1.60266558E12, 28.633333333333333]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6026657E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.31666666666666665, "minX": 1.60266552E12, "maxY": 29.55, "series": [{"data": [[1.60266564E12, 29.55], [1.6026657E12, 28.0], [1.60266552E12, 0.31666666666666665], [1.60266558E12, 28.633333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6026657E12, "title": "Total Transactions Per Second"}},
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

