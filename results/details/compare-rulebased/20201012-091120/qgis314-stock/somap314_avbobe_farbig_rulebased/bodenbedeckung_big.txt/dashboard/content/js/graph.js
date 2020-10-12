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
        data: {"result": {"minY": 30.0, "minX": 0.0, "maxY": 2027.0, "series": [{"data": [[0.0, 30.0], [0.1, 33.0], [0.2, 34.0], [0.3, 35.0], [0.4, 36.0], [0.5, 37.0], [0.6, 38.0], [0.7, 38.0], [0.8, 38.0], [0.9, 39.0], [1.0, 39.0], [1.1, 40.0], [1.2, 40.0], [1.3, 41.0], [1.4, 41.0], [1.5, 42.0], [1.6, 42.0], [1.7, 42.0], [1.8, 43.0], [1.9, 43.0], [2.0, 43.0], [2.1, 44.0], [2.2, 44.0], [2.3, 44.0], [2.4, 44.0], [2.5, 44.0], [2.6, 45.0], [2.7, 45.0], [2.8, 45.0], [2.9, 46.0], [3.0, 46.0], [3.1, 46.0], [3.2, 46.0], [3.3, 47.0], [3.4, 47.0], [3.5, 47.0], [3.6, 48.0], [3.7, 48.0], [3.8, 48.0], [3.9, 49.0], [4.0, 49.0], [4.1, 49.0], [4.2, 49.0], [4.3, 50.0], [4.4, 50.0], [4.5, 50.0], [4.6, 51.0], [4.7, 51.0], [4.8, 51.0], [4.9, 51.0], [5.0, 51.0], [5.1, 52.0], [5.2, 52.0], [5.3, 53.0], [5.4, 53.0], [5.5, 53.0], [5.6, 54.0], [5.7, 54.0], [5.8, 55.0], [5.9, 56.0], [6.0, 56.0], [6.1, 56.0], [6.2, 57.0], [6.3, 57.0], [6.4, 57.0], [6.5, 57.0], [6.6, 58.0], [6.7, 58.0], [6.8, 59.0], [6.9, 59.0], [7.0, 59.0], [7.1, 60.0], [7.2, 60.0], [7.3, 61.0], [7.4, 61.0], [7.5, 61.0], [7.6, 62.0], [7.7, 62.0], [7.8, 62.0], [7.9, 63.0], [8.0, 63.0], [8.1, 64.0], [8.2, 64.0], [8.3, 65.0], [8.4, 65.0], [8.5, 65.0], [8.6, 65.0], [8.7, 66.0], [8.8, 66.0], [8.9, 67.0], [9.0, 68.0], [9.1, 68.0], [9.2, 68.0], [9.3, 69.0], [9.4, 69.0], [9.5, 70.0], [9.6, 70.0], [9.7, 71.0], [9.8, 72.0], [9.9, 72.0], [10.0, 72.0], [10.1, 73.0], [10.2, 73.0], [10.3, 73.0], [10.4, 73.0], [10.5, 74.0], [10.6, 74.0], [10.7, 75.0], [10.8, 75.0], [10.9, 75.0], [11.0, 76.0], [11.1, 76.0], [11.2, 76.0], [11.3, 76.0], [11.4, 76.0], [11.5, 77.0], [11.6, 77.0], [11.7, 77.0], [11.8, 78.0], [11.9, 78.0], [12.0, 78.0], [12.1, 79.0], [12.2, 79.0], [12.3, 79.0], [12.4, 80.0], [12.5, 80.0], [12.6, 80.0], [12.7, 80.0], [12.8, 81.0], [12.9, 81.0], [13.0, 81.0], [13.1, 82.0], [13.2, 82.0], [13.3, 82.0], [13.4, 83.0], [13.5, 83.0], [13.6, 83.0], [13.7, 84.0], [13.8, 84.0], [13.9, 84.0], [14.0, 85.0], [14.1, 85.0], [14.2, 85.0], [14.3, 86.0], [14.4, 86.0], [14.5, 86.0], [14.6, 86.0], [14.7, 87.0], [14.8, 87.0], [14.9, 87.0], [15.0, 88.0], [15.1, 88.0], [15.2, 89.0], [15.3, 89.0], [15.4, 89.0], [15.5, 90.0], [15.6, 90.0], [15.7, 90.0], [15.8, 91.0], [15.9, 91.0], [16.0, 91.0], [16.1, 91.0], [16.2, 91.0], [16.3, 92.0], [16.4, 92.0], [16.5, 92.0], [16.6, 93.0], [16.7, 93.0], [16.8, 93.0], [16.9, 94.0], [17.0, 94.0], [17.1, 94.0], [17.2, 94.0], [17.3, 95.0], [17.4, 95.0], [17.5, 95.0], [17.6, 95.0], [17.7, 96.0], [17.8, 96.0], [17.9, 96.0], [18.0, 96.0], [18.1, 97.0], [18.2, 97.0], [18.3, 97.0], [18.4, 98.0], [18.5, 98.0], [18.6, 98.0], [18.7, 99.0], [18.8, 99.0], [18.9, 100.0], [19.0, 100.0], [19.1, 101.0], [19.2, 101.0], [19.3, 101.0], [19.4, 102.0], [19.5, 102.0], [19.6, 103.0], [19.7, 103.0], [19.8, 103.0], [19.9, 104.0], [20.0, 104.0], [20.1, 104.0], [20.2, 105.0], [20.3, 106.0], [20.4, 106.0], [20.5, 106.0], [20.6, 107.0], [20.7, 107.0], [20.8, 107.0], [20.9, 107.0], [21.0, 108.0], [21.1, 108.0], [21.2, 109.0], [21.3, 109.0], [21.4, 110.0], [21.5, 110.0], [21.6, 110.0], [21.7, 111.0], [21.8, 111.0], [21.9, 112.0], [22.0, 112.0], [22.1, 113.0], [22.2, 113.0], [22.3, 114.0], [22.4, 114.0], [22.5, 115.0], [22.6, 115.0], [22.7, 116.0], [22.8, 116.0], [22.9, 117.0], [23.0, 117.0], [23.1, 117.0], [23.2, 118.0], [23.3, 118.0], [23.4, 119.0], [23.5, 119.0], [23.6, 119.0], [23.7, 120.0], [23.8, 120.0], [23.9, 121.0], [24.0, 121.0], [24.1, 122.0], [24.2, 123.0], [24.3, 124.0], [24.4, 124.0], [24.5, 124.0], [24.6, 124.0], [24.7, 125.0], [24.8, 126.0], [24.9, 126.0], [25.0, 127.0], [25.1, 127.0], [25.2, 128.0], [25.3, 128.0], [25.4, 128.0], [25.5, 128.0], [25.6, 129.0], [25.7, 130.0], [25.8, 130.0], [25.9, 131.0], [26.0, 131.0], [26.1, 133.0], [26.2, 133.0], [26.3, 134.0], [26.4, 134.0], [26.5, 135.0], [26.6, 136.0], [26.7, 137.0], [26.8, 137.0], [26.9, 137.0], [27.0, 138.0], [27.1, 138.0], [27.2, 138.0], [27.3, 138.0], [27.4, 139.0], [27.5, 139.0], [27.6, 139.0], [27.7, 140.0], [27.8, 140.0], [27.9, 140.0], [28.0, 141.0], [28.1, 141.0], [28.2, 141.0], [28.3, 141.0], [28.4, 141.0], [28.5, 142.0], [28.6, 142.0], [28.7, 142.0], [28.8, 142.0], [28.9, 142.0], [29.0, 143.0], [29.1, 143.0], [29.2, 143.0], [29.3, 144.0], [29.4, 144.0], [29.5, 144.0], [29.6, 145.0], [29.7, 145.0], [29.8, 145.0], [29.9, 146.0], [30.0, 146.0], [30.1, 146.0], [30.2, 147.0], [30.3, 147.0], [30.4, 147.0], [30.5, 147.0], [30.6, 148.0], [30.7, 148.0], [30.8, 149.0], [30.9, 149.0], [31.0, 150.0], [31.1, 150.0], [31.2, 151.0], [31.3, 151.0], [31.4, 151.0], [31.5, 151.0], [31.6, 152.0], [31.7, 152.0], [31.8, 153.0], [31.9, 153.0], [32.0, 153.0], [32.1, 153.0], [32.2, 154.0], [32.3, 155.0], [32.4, 155.0], [32.5, 156.0], [32.6, 156.0], [32.7, 157.0], [32.8, 157.0], [32.9, 158.0], [33.0, 158.0], [33.1, 159.0], [33.2, 160.0], [33.3, 160.0], [33.4, 161.0], [33.5, 162.0], [33.6, 162.0], [33.7, 162.0], [33.8, 163.0], [33.9, 163.0], [34.0, 164.0], [34.1, 164.0], [34.2, 165.0], [34.3, 165.0], [34.4, 166.0], [34.5, 167.0], [34.6, 167.0], [34.7, 168.0], [34.8, 168.0], [34.9, 169.0], [35.0, 169.0], [35.1, 171.0], [35.2, 171.0], [35.3, 172.0], [35.4, 173.0], [35.5, 173.0], [35.6, 174.0], [35.7, 174.0], [35.8, 175.0], [35.9, 175.0], [36.0, 176.0], [36.1, 176.0], [36.2, 177.0], [36.3, 177.0], [36.4, 178.0], [36.5, 179.0], [36.6, 179.0], [36.7, 180.0], [36.8, 181.0], [36.9, 182.0], [37.0, 182.0], [37.1, 182.0], [37.2, 183.0], [37.3, 184.0], [37.4, 184.0], [37.5, 185.0], [37.6, 186.0], [37.7, 186.0], [37.8, 187.0], [37.9, 188.0], [38.0, 188.0], [38.1, 189.0], [38.2, 189.0], [38.3, 190.0], [38.4, 190.0], [38.5, 191.0], [38.6, 192.0], [38.7, 192.0], [38.8, 193.0], [38.9, 194.0], [39.0, 194.0], [39.1, 195.0], [39.2, 195.0], [39.3, 196.0], [39.4, 196.0], [39.5, 197.0], [39.6, 197.0], [39.7, 198.0], [39.8, 198.0], [39.9, 199.0], [40.0, 199.0], [40.1, 200.0], [40.2, 201.0], [40.3, 202.0], [40.4, 202.0], [40.5, 203.0], [40.6, 204.0], [40.7, 204.0], [40.8, 204.0], [40.9, 205.0], [41.0, 205.0], [41.1, 206.0], [41.2, 206.0], [41.3, 207.0], [41.4, 207.0], [41.5, 208.0], [41.6, 209.0], [41.7, 209.0], [41.8, 210.0], [41.9, 211.0], [42.0, 211.0], [42.1, 212.0], [42.2, 213.0], [42.3, 214.0], [42.4, 215.0], [42.5, 215.0], [42.6, 216.0], [42.7, 217.0], [42.8, 218.0], [42.9, 218.0], [43.0, 219.0], [43.1, 220.0], [43.2, 221.0], [43.3, 222.0], [43.4, 222.0], [43.5, 223.0], [43.6, 224.0], [43.7, 226.0], [43.8, 226.0], [43.9, 226.0], [44.0, 227.0], [44.1, 229.0], [44.2, 230.0], [44.3, 231.0], [44.4, 231.0], [44.5, 232.0], [44.6, 232.0], [44.7, 233.0], [44.8, 234.0], [44.9, 234.0], [45.0, 235.0], [45.1, 236.0], [45.2, 238.0], [45.3, 239.0], [45.4, 239.0], [45.5, 240.0], [45.6, 240.0], [45.7, 241.0], [45.8, 242.0], [45.9, 243.0], [46.0, 244.0], [46.1, 245.0], [46.2, 246.0], [46.3, 246.0], [46.4, 247.0], [46.5, 247.0], [46.6, 248.0], [46.7, 248.0], [46.8, 249.0], [46.9, 250.0], [47.0, 251.0], [47.1, 251.0], [47.2, 253.0], [47.3, 253.0], [47.4, 255.0], [47.5, 256.0], [47.6, 257.0], [47.7, 258.0], [47.8, 258.0], [47.9, 259.0], [48.0, 259.0], [48.1, 260.0], [48.2, 260.0], [48.3, 261.0], [48.4, 262.0], [48.5, 262.0], [48.6, 263.0], [48.7, 264.0], [48.8, 265.0], [48.9, 266.0], [49.0, 266.0], [49.1, 267.0], [49.2, 267.0], [49.3, 268.0], [49.4, 268.0], [49.5, 269.0], [49.6, 271.0], [49.7, 271.0], [49.8, 272.0], [49.9, 272.0], [50.0, 273.0], [50.1, 273.0], [50.2, 274.0], [50.3, 274.0], [50.4, 275.0], [50.5, 276.0], [50.6, 277.0], [50.7, 277.0], [50.8, 278.0], [50.9, 278.0], [51.0, 278.0], [51.1, 279.0], [51.2, 280.0], [51.3, 280.0], [51.4, 281.0], [51.5, 283.0], [51.6, 284.0], [51.7, 285.0], [51.8, 286.0], [51.9, 286.0], [52.0, 287.0], [52.1, 288.0], [52.2, 289.0], [52.3, 290.0], [52.4, 291.0], [52.5, 292.0], [52.6, 293.0], [52.7, 294.0], [52.8, 294.0], [52.9, 295.0], [53.0, 296.0], [53.1, 297.0], [53.2, 299.0], [53.3, 299.0], [53.4, 300.0], [53.5, 300.0], [53.6, 301.0], [53.7, 303.0], [53.8, 304.0], [53.9, 305.0], [54.0, 307.0], [54.1, 307.0], [54.2, 308.0], [54.3, 309.0], [54.4, 309.0], [54.5, 310.0], [54.6, 311.0], [54.7, 312.0], [54.8, 313.0], [54.9, 314.0], [55.0, 314.0], [55.1, 315.0], [55.2, 317.0], [55.3, 317.0], [55.4, 318.0], [55.5, 320.0], [55.6, 321.0], [55.7, 322.0], [55.8, 322.0], [55.9, 324.0], [56.0, 326.0], [56.1, 327.0], [56.2, 329.0], [56.3, 329.0], [56.4, 330.0], [56.5, 330.0], [56.6, 332.0], [56.7, 333.0], [56.8, 334.0], [56.9, 334.0], [57.0, 335.0], [57.1, 336.0], [57.2, 337.0], [57.3, 338.0], [57.4, 339.0], [57.5, 340.0], [57.6, 342.0], [57.7, 344.0], [57.8, 345.0], [57.9, 347.0], [58.0, 348.0], [58.1, 349.0], [58.2, 350.0], [58.3, 352.0], [58.4, 353.0], [58.5, 355.0], [58.6, 355.0], [58.7, 356.0], [58.8, 356.0], [58.9, 357.0], [59.0, 359.0], [59.1, 359.0], [59.2, 360.0], [59.3, 361.0], [59.4, 362.0], [59.5, 363.0], [59.6, 364.0], [59.7, 366.0], [59.8, 367.0], [59.9, 368.0], [60.0, 370.0], [60.1, 370.0], [60.2, 371.0], [60.3, 373.0], [60.4, 374.0], [60.5, 374.0], [60.6, 376.0], [60.7, 377.0], [60.8, 378.0], [60.9, 379.0], [61.0, 381.0], [61.1, 382.0], [61.2, 384.0], [61.3, 385.0], [61.4, 386.0], [61.5, 386.0], [61.6, 389.0], [61.7, 389.0], [61.8, 391.0], [61.9, 392.0], [62.0, 393.0], [62.1, 394.0], [62.2, 395.0], [62.3, 395.0], [62.4, 397.0], [62.5, 398.0], [62.6, 400.0], [62.7, 402.0], [62.8, 403.0], [62.9, 404.0], [63.0, 405.0], [63.1, 406.0], [63.2, 407.0], [63.3, 408.0], [63.4, 410.0], [63.5, 410.0], [63.6, 411.0], [63.7, 412.0], [63.8, 413.0], [63.9, 414.0], [64.0, 414.0], [64.1, 415.0], [64.2, 417.0], [64.3, 418.0], [64.4, 419.0], [64.5, 420.0], [64.6, 421.0], [64.7, 422.0], [64.8, 425.0], [64.9, 425.0], [65.0, 427.0], [65.1, 428.0], [65.2, 428.0], [65.3, 430.0], [65.4, 430.0], [65.5, 431.0], [65.6, 432.0], [65.7, 433.0], [65.8, 435.0], [65.9, 436.0], [66.0, 438.0], [66.1, 439.0], [66.2, 441.0], [66.3, 442.0], [66.4, 444.0], [66.5, 445.0], [66.6, 446.0], [66.7, 449.0], [66.8, 450.0], [66.9, 451.0], [67.0, 453.0], [67.1, 453.0], [67.2, 454.0], [67.3, 455.0], [67.4, 457.0], [67.5, 458.0], [67.6, 459.0], [67.7, 459.0], [67.8, 461.0], [67.9, 462.0], [68.0, 464.0], [68.1, 465.0], [68.2, 468.0], [68.3, 469.0], [68.4, 469.0], [68.5, 471.0], [68.6, 472.0], [68.7, 473.0], [68.8, 474.0], [68.9, 475.0], [69.0, 476.0], [69.1, 477.0], [69.2, 478.0], [69.3, 479.0], [69.4, 480.0], [69.5, 481.0], [69.6, 483.0], [69.7, 484.0], [69.8, 485.0], [69.9, 486.0], [70.0, 486.0], [70.1, 488.0], [70.2, 489.0], [70.3, 490.0], [70.4, 491.0], [70.5, 493.0], [70.6, 494.0], [70.7, 496.0], [70.8, 497.0], [70.9, 498.0], [71.0, 498.0], [71.1, 499.0], [71.2, 500.0], [71.3, 502.0], [71.4, 503.0], [71.5, 504.0], [71.6, 506.0], [71.7, 508.0], [71.8, 508.0], [71.9, 509.0], [72.0, 510.0], [72.1, 511.0], [72.2, 513.0], [72.3, 513.0], [72.4, 514.0], [72.5, 515.0], [72.6, 516.0], [72.7, 517.0], [72.8, 518.0], [72.9, 519.0], [73.0, 521.0], [73.1, 521.0], [73.2, 522.0], [73.3, 522.0], [73.4, 523.0], [73.5, 524.0], [73.6, 525.0], [73.7, 526.0], [73.8, 527.0], [73.9, 527.0], [74.0, 529.0], [74.1, 530.0], [74.2, 532.0], [74.3, 532.0], [74.4, 533.0], [74.5, 534.0], [74.6, 534.0], [74.7, 535.0], [74.8, 536.0], [74.9, 537.0], [75.0, 539.0], [75.1, 540.0], [75.2, 541.0], [75.3, 542.0], [75.4, 542.0], [75.5, 544.0], [75.6, 545.0], [75.7, 546.0], [75.8, 547.0], [75.9, 547.0], [76.0, 549.0], [76.1, 549.0], [76.2, 551.0], [76.3, 553.0], [76.4, 554.0], [76.5, 554.0], [76.6, 555.0], [76.7, 555.0], [76.8, 556.0], [76.9, 557.0], [77.0, 558.0], [77.1, 558.0], [77.2, 559.0], [77.3, 561.0], [77.4, 563.0], [77.5, 564.0], [77.6, 565.0], [77.7, 566.0], [77.8, 567.0], [77.9, 569.0], [78.0, 569.0], [78.1, 570.0], [78.2, 570.0], [78.3, 572.0], [78.4, 572.0], [78.5, 574.0], [78.6, 576.0], [78.7, 578.0], [78.8, 579.0], [78.9, 580.0], [79.0, 581.0], [79.1, 582.0], [79.2, 583.0], [79.3, 583.0], [79.4, 584.0], [79.5, 585.0], [79.6, 587.0], [79.7, 588.0], [79.8, 589.0], [79.9, 590.0], [80.0, 591.0], [80.1, 592.0], [80.2, 593.0], [80.3, 593.0], [80.4, 594.0], [80.5, 595.0], [80.6, 597.0], [80.7, 597.0], [80.8, 599.0], [80.9, 600.0], [81.0, 602.0], [81.1, 604.0], [81.2, 604.0], [81.3, 606.0], [81.4, 608.0], [81.5, 609.0], [81.6, 611.0], [81.7, 612.0], [81.8, 612.0], [81.9, 614.0], [82.0, 615.0], [82.1, 617.0], [82.2, 618.0], [82.3, 619.0], [82.4, 621.0], [82.5, 622.0], [82.6, 623.0], [82.7, 624.0], [82.8, 626.0], [82.9, 627.0], [83.0, 628.0], [83.1, 630.0], [83.2, 631.0], [83.3, 632.0], [83.4, 635.0], [83.5, 635.0], [83.6, 636.0], [83.7, 638.0], [83.8, 638.0], [83.9, 639.0], [84.0, 640.0], [84.1, 642.0], [84.2, 642.0], [84.3, 644.0], [84.4, 645.0], [84.5, 646.0], [84.6, 647.0], [84.7, 648.0], [84.8, 650.0], [84.9, 650.0], [85.0, 652.0], [85.1, 653.0], [85.2, 654.0], [85.3, 655.0], [85.4, 657.0], [85.5, 658.0], [85.6, 660.0], [85.7, 662.0], [85.8, 664.0], [85.9, 664.0], [86.0, 665.0], [86.1, 666.0], [86.2, 667.0], [86.3, 668.0], [86.4, 669.0], [86.5, 671.0], [86.6, 673.0], [86.7, 674.0], [86.8, 675.0], [86.9, 678.0], [87.0, 679.0], [87.1, 681.0], [87.2, 682.0], [87.3, 683.0], [87.4, 685.0], [87.5, 687.0], [87.6, 689.0], [87.7, 691.0], [87.8, 692.0], [87.9, 695.0], [88.0, 696.0], [88.1, 698.0], [88.2, 700.0], [88.3, 701.0], [88.4, 702.0], [88.5, 705.0], [88.6, 707.0], [88.7, 708.0], [88.8, 709.0], [88.9, 710.0], [89.0, 715.0], [89.1, 717.0], [89.2, 719.0], [89.3, 720.0], [89.4, 722.0], [89.5, 724.0], [89.6, 728.0], [89.7, 730.0], [89.8, 735.0], [89.9, 737.0], [90.0, 738.0], [90.1, 741.0], [90.2, 744.0], [90.3, 750.0], [90.4, 752.0], [90.5, 753.0], [90.6, 759.0], [90.7, 761.0], [90.8, 763.0], [90.9, 766.0], [91.0, 770.0], [91.1, 772.0], [91.2, 775.0], [91.3, 778.0], [91.4, 780.0], [91.5, 783.0], [91.6, 785.0], [91.7, 789.0], [91.8, 791.0], [91.9, 792.0], [92.0, 794.0], [92.1, 798.0], [92.2, 799.0], [92.3, 805.0], [92.4, 810.0], [92.5, 817.0], [92.6, 821.0], [92.7, 825.0], [92.8, 829.0], [92.9, 831.0], [93.0, 833.0], [93.1, 836.0], [93.2, 839.0], [93.3, 842.0], [93.4, 849.0], [93.5, 852.0], [93.6, 855.0], [93.7, 859.0], [93.8, 862.0], [93.9, 867.0], [94.0, 871.0], [94.1, 873.0], [94.2, 875.0], [94.3, 876.0], [94.4, 881.0], [94.5, 884.0], [94.6, 890.0], [94.7, 893.0], [94.8, 895.0], [94.9, 898.0], [95.0, 901.0], [95.1, 909.0], [95.2, 913.0], [95.3, 918.0], [95.4, 924.0], [95.5, 932.0], [95.6, 936.0], [95.7, 940.0], [95.8, 945.0], [95.9, 950.0], [96.0, 954.0], [96.1, 955.0], [96.2, 962.0], [96.3, 967.0], [96.4, 971.0], [96.5, 987.0], [96.6, 993.0], [96.7, 1001.0], [96.8, 1006.0], [96.9, 1014.0], [97.0, 1024.0], [97.1, 1029.0], [97.2, 1037.0], [97.3, 1043.0], [97.4, 1055.0], [97.5, 1065.0], [97.6, 1074.0], [97.7, 1080.0], [97.8, 1086.0], [97.9, 1101.0], [98.0, 1109.0], [98.1, 1120.0], [98.2, 1142.0], [98.3, 1150.0], [98.4, 1161.0], [98.5, 1173.0], [98.6, 1185.0], [98.7, 1199.0], [98.8, 1204.0], [98.9, 1217.0], [99.0, 1232.0], [99.1, 1248.0], [99.2, 1266.0], [99.3, 1286.0], [99.4, 1301.0], [99.5, 1354.0], [99.6, 1414.0], [99.7, 1482.0], [99.8, 1561.0], [99.9, 1684.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 1099.0, "series": [{"data": [[0.0, 979.0], [600.0, 379.0], [700.0, 211.0], [200.0, 691.0], [800.0, 143.0], [900.0, 89.0], [1000.0, 62.0], [1100.0, 43.0], [1200.0, 35.0], [300.0, 479.0], [1300.0, 9.0], [1400.0, 8.0], [1500.0, 7.0], [400.0, 445.0], [100.0, 1099.0], [1600.0, 3.0], [1700.0, 2.0], [1800.0, 2.0], [500.0, 503.0], [2000.0, 1.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 2000.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 15.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 3696.0, "series": [{"data": [[0.0, 3696.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1479.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 15.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 8.500000000000002, "minX": 1.60249422E12, "maxY": 10.0, "series": [{"data": [[1.60249446E12, 8.500000000000002], [1.60249428E12, 10.0], [1.6024944E12, 10.0], [1.60249422E12, 10.0], [1.60249434E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60249446E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 221.0, "minX": 1.0, "maxY": 1143.0, "series": [{"data": [[8.0, 737.0], [4.0, 367.0], [2.0, 1143.0], [1.0, 1067.0], [9.0, 221.0], [10.0, 357.5078170237412], [5.0, 286.0], [6.0, 299.0], [3.0, 527.0], [7.0, 382.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.991329479768785, 357.8568400770719]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 240.35, "minX": 1.60249422E12, "maxY": 5640820.983333333, "series": [{"data": [[1.60249446E12, 109369.1], [1.60249428E12, 5403736.65], [1.6024944E12, 5640820.983333333], [1.60249422E12, 446183.63333333336], [1.60249434E12, 5311125.566666666]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60249446E12, 240.35], [1.60249428E12, 12788.866666666667], [1.6024944E12, 13015.266666666666], [1.60249422E12, 729.4166666666666], [1.60249434E12, 12994.733333333334]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60249446E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 353.4273907910263, "minX": 1.60249422E12, "maxY": 538.6489361702128, "series": [{"data": [[1.60249446E12, 430.9666666666667], [1.60249428E12, 353.77771191464103], [1.6024944E12, 355.006528189911], [1.60249422E12, 538.6489361702128], [1.60249434E12, 353.4273907910263]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60249446E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 352.0194805194804, "minX": 1.60249422E12, "maxY": 536.5212765957444, "series": [{"data": [[1.60249446E12, 429.6333333333333], [1.60249428E12, 352.3959691760523], [1.6024944E12, 353.90801186943656], [1.60249422E12, 536.5212765957444], [1.60249434E12, 352.0194805194804]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60249446E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.60249422E12, "maxY": 1.085106382978723, "series": [{"data": [[1.60249446E12, 0.0], [1.60249428E12, 0.008891523414345025], [1.6024944E12, 0.011275964391691413], [1.60249422E12, 1.085106382978723], [1.60249434E12, 0.00590318772136953]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60249446E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 30.0, "minX": 1.60249422E12, "maxY": 2027.0, "series": [{"data": [[1.60249446E12, 1143.0], [1.60249428E12, 2027.0], [1.6024944E12, 1889.0], [1.60249422E12, 1561.0], [1.60249434E12, 1736.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60249446E12, 179.0], [1.60249428E12, 41.0], [1.6024944E12, 38.17399959802628], [1.60249422E12, 57.0], [1.60249434E12, 38.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60249446E12, 179.0], [1.60249428E12, 41.0], [1.6024944E12, 39.0], [1.60249422E12, 57.0], [1.60249434E12, 38.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60249446E12, 179.0], [1.60249428E12, 41.0], [1.6024944E12, 39.0], [1.60249422E12, 57.0], [1.60249434E12, 38.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60249446E12, 179.0], [1.60249428E12, 33.0], [1.6024944E12, 30.0], [1.60249422E12, 57.0], [1.60249434E12, 33.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60249446E12, 361.0], [1.60249428E12, 273.0], [1.6024944E12, 261.0], [1.60249422E12, 513.0], [1.60249434E12, 271.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60249446E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 56.0, "minX": 4.0, "maxY": 797.0, "series": [{"data": [[32.0, 266.5], [33.0, 310.5], [34.0, 229.0], [35.0, 304.0], [36.0, 263.5], [37.0, 201.0], [38.0, 165.0], [39.0, 166.0], [40.0, 160.0], [41.0, 170.5], [42.0, 146.0], [45.0, 109.0], [47.0, 124.0], [46.0, 119.5], [48.0, 83.5], [51.0, 142.0], [52.0, 146.5], [53.0, 119.0], [54.0, 156.0], [57.0, 104.0], [56.0, 101.5], [58.0, 142.5], [60.0, 104.0], [63.0, 157.0], [4.0, 797.0], [69.0, 56.0], [81.0, 101.0], [12.0, 644.5], [14.0, 631.5], [15.0, 631.5], [16.0, 562.5], [17.0, 535.0], [18.0, 529.0], [19.0, 495.0], [20.0, 475.5], [21.0, 477.5], [22.0, 442.5], [23.0, 421.0], [24.0, 380.5], [25.0, 333.0], [26.0, 298.0], [27.0, 344.0], [28.0, 332.0], [29.0, 169.0], [30.0, 290.5], [31.0, 279.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 81.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 56.0, "minX": 4.0, "maxY": 796.5, "series": [{"data": [[32.0, 265.0], [33.0, 309.5], [34.0, 228.0], [35.0, 303.5], [36.0, 263.0], [37.0, 200.0], [38.0, 164.0], [39.0, 165.5], [40.0, 160.0], [41.0, 169.5], [42.0, 146.0], [45.0, 109.0], [47.0, 124.0], [46.0, 119.0], [48.0, 83.5], [51.0, 142.0], [52.0, 146.0], [53.0, 118.0], [54.0, 154.5], [57.0, 104.0], [56.0, 101.5], [58.0, 142.0], [60.0, 103.5], [63.0, 157.0], [4.0, 796.5], [69.0, 56.0], [81.0, 101.0], [12.0, 643.0], [14.0, 628.5], [15.0, 624.0], [16.0, 559.5], [17.0, 534.0], [18.0, 525.5], [19.0, 493.5], [20.0, 472.5], [21.0, 476.0], [22.0, 440.5], [23.0, 420.0], [24.0, 378.0], [25.0, 331.0], [26.0, 297.5], [27.0, 343.0], [28.0, 330.5], [29.0, 169.0], [30.0, 290.0], [31.0, 278.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 81.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.3333333333333333, "minX": 1.60249422E12, "maxY": 28.233333333333334, "series": [{"data": [[1.60249446E12, 0.3333333333333333], [1.60249428E12, 28.116666666666667], [1.6024944E12, 28.083333333333332], [1.60249422E12, 1.7333333333333334], [1.60249434E12, 28.233333333333334]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60249446E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.5, "minX": 1.60249422E12, "maxY": 28.233333333333334, "series": [{"data": [[1.60249446E12, 0.5], [1.60249428E12, 28.116666666666667], [1.6024944E12, 28.083333333333332], [1.60249422E12, 1.5666666666666667], [1.60249434E12, 28.233333333333334]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60249446E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.5, "minX": 1.60249422E12, "maxY": 28.233333333333334, "series": [{"data": [[1.60249446E12, 0.5], [1.60249428E12, 28.116666666666667], [1.6024944E12, 28.083333333333332], [1.60249422E12, 1.5666666666666667], [1.60249434E12, 28.233333333333334]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60249446E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.5, "minX": 1.60249422E12, "maxY": 28.233333333333334, "series": [{"data": [[1.60249446E12, 0.5], [1.60249428E12, 28.116666666666667], [1.6024944E12, 28.083333333333332], [1.60249422E12, 1.5666666666666667], [1.60249434E12, 28.233333333333334]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60249446E12, "title": "Total Transactions Per Second"}},
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

