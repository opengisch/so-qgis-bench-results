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
        data: {"result": {"minY": 37.0, "minX": 0.0, "maxY": 4582.0, "series": [{"data": [[0.0, 37.0], [0.1, 38.0], [0.2, 40.0], [0.3, 41.0], [0.4, 42.0], [0.5, 42.0], [0.6, 42.0], [0.7, 42.0], [0.8, 43.0], [0.9, 43.0], [1.0, 43.0], [1.1, 43.0], [1.2, 44.0], [1.3, 44.0], [1.4, 44.0], [1.5, 44.0], [1.6, 44.0], [1.7, 44.0], [1.8, 44.0], [1.9, 45.0], [2.0, 45.0], [2.1, 45.0], [2.2, 45.0], [2.3, 45.0], [2.4, 45.0], [2.5, 45.0], [2.6, 45.0], [2.7, 45.0], [2.8, 45.0], [2.9, 45.0], [3.0, 46.0], [3.1, 46.0], [3.2, 46.0], [3.3, 46.0], [3.4, 46.0], [3.5, 46.0], [3.6, 46.0], [3.7, 46.0], [3.8, 46.0], [3.9, 46.0], [4.0, 46.0], [4.1, 46.0], [4.2, 46.0], [4.3, 47.0], [4.4, 47.0], [4.5, 47.0], [4.6, 47.0], [4.7, 47.0], [4.8, 47.0], [4.9, 47.0], [5.0, 47.0], [5.1, 47.0], [5.2, 47.0], [5.3, 47.0], [5.4, 47.0], [5.5, 47.0], [5.6, 47.0], [5.7, 47.0], [5.8, 47.0], [5.9, 48.0], [6.0, 48.0], [6.1, 48.0], [6.2, 48.0], [6.3, 48.0], [6.4, 48.0], [6.5, 48.0], [6.6, 48.0], [6.7, 48.0], [6.8, 48.0], [6.9, 48.0], [7.0, 48.0], [7.1, 48.0], [7.2, 49.0], [7.3, 49.0], [7.4, 49.0], [7.5, 49.0], [7.6, 49.0], [7.7, 49.0], [7.8, 49.0], [7.9, 49.0], [8.0, 49.0], [8.1, 49.0], [8.2, 49.0], [8.3, 49.0], [8.4, 49.0], [8.5, 49.0], [8.6, 49.0], [8.7, 50.0], [8.8, 50.0], [8.9, 50.0], [9.0, 50.0], [9.1, 50.0], [9.2, 50.0], [9.3, 50.0], [9.4, 50.0], [9.5, 50.0], [9.6, 50.0], [9.7, 50.0], [9.8, 50.0], [9.9, 50.0], [10.0, 50.0], [10.1, 51.0], [10.2, 51.0], [10.3, 51.0], [10.4, 51.0], [10.5, 51.0], [10.6, 51.0], [10.7, 51.0], [10.8, 51.0], [10.9, 51.0], [11.0, 51.0], [11.1, 51.0], [11.2, 51.0], [11.3, 52.0], [11.4, 52.0], [11.5, 52.0], [11.6, 52.0], [11.7, 52.0], [11.8, 52.0], [11.9, 52.0], [12.0, 52.0], [12.1, 52.0], [12.2, 52.0], [12.3, 52.0], [12.4, 52.0], [12.5, 52.0], [12.6, 53.0], [12.7, 53.0], [12.8, 53.0], [12.9, 53.0], [13.0, 53.0], [13.1, 53.0], [13.2, 54.0], [13.3, 54.0], [13.4, 54.0], [13.5, 54.0], [13.6, 54.0], [13.7, 54.0], [13.8, 54.0], [13.9, 54.0], [14.0, 54.0], [14.1, 55.0], [14.2, 55.0], [14.3, 55.0], [14.4, 55.0], [14.5, 55.0], [14.6, 55.0], [14.7, 56.0], [14.8, 56.0], [14.9, 56.0], [15.0, 56.0], [15.1, 56.0], [15.2, 57.0], [15.3, 57.0], [15.4, 57.0], [15.5, 57.0], [15.6, 58.0], [15.7, 58.0], [15.8, 58.0], [15.9, 58.0], [16.0, 58.0], [16.1, 59.0], [16.2, 59.0], [16.3, 59.0], [16.4, 60.0], [16.5, 60.0], [16.6, 60.0], [16.7, 60.0], [16.8, 61.0], [16.9, 61.0], [17.0, 61.0], [17.1, 61.0], [17.2, 62.0], [17.3, 62.0], [17.4, 63.0], [17.5, 63.0], [17.6, 63.0], [17.7, 64.0], [17.8, 64.0], [17.9, 65.0], [18.0, 65.0], [18.1, 66.0], [18.2, 66.0], [18.3, 67.0], [18.4, 67.0], [18.5, 67.0], [18.6, 68.0], [18.7, 68.0], [18.8, 69.0], [18.9, 69.0], [19.0, 69.0], [19.1, 70.0], [19.2, 70.0], [19.3, 70.0], [19.4, 71.0], [19.5, 71.0], [19.6, 71.0], [19.7, 72.0], [19.8, 72.0], [19.9, 72.0], [20.0, 73.0], [20.1, 73.0], [20.2, 74.0], [20.3, 75.0], [20.4, 75.0], [20.5, 75.0], [20.6, 76.0], [20.7, 76.0], [20.8, 76.0], [20.9, 77.0], [21.0, 77.0], [21.1, 77.0], [21.2, 77.0], [21.3, 78.0], [21.4, 78.0], [21.5, 79.0], [21.6, 79.0], [21.7, 79.0], [21.8, 80.0], [21.9, 80.0], [22.0, 81.0], [22.1, 81.0], [22.2, 81.0], [22.3, 82.0], [22.4, 82.0], [22.5, 82.0], [22.6, 83.0], [22.7, 83.0], [22.8, 83.0], [22.9, 83.0], [23.0, 83.0], [23.1, 84.0], [23.2, 84.0], [23.3, 84.0], [23.4, 84.0], [23.5, 84.0], [23.6, 85.0], [23.7, 85.0], [23.8, 85.0], [23.9, 85.0], [24.0, 85.0], [24.1, 86.0], [24.2, 86.0], [24.3, 86.0], [24.4, 86.0], [24.5, 86.0], [24.6, 86.0], [24.7, 87.0], [24.8, 87.0], [24.9, 87.0], [25.0, 87.0], [25.1, 87.0], [25.2, 87.0], [25.3, 87.0], [25.4, 88.0], [25.5, 88.0], [25.6, 88.0], [25.7, 88.0], [25.8, 88.0], [25.9, 89.0], [26.0, 89.0], [26.1, 89.0], [26.2, 89.0], [26.3, 89.0], [26.4, 89.0], [26.5, 90.0], [26.6, 90.0], [26.7, 90.0], [26.8, 90.0], [26.9, 90.0], [27.0, 90.0], [27.1, 90.0], [27.2, 90.0], [27.3, 91.0], [27.4, 91.0], [27.5, 91.0], [27.6, 91.0], [27.7, 91.0], [27.8, 91.0], [27.9, 91.0], [28.0, 92.0], [28.1, 92.0], [28.2, 92.0], [28.3, 92.0], [28.4, 92.0], [28.5, 92.0], [28.6, 92.0], [28.7, 92.0], [28.8, 92.0], [28.9, 93.0], [29.0, 93.0], [29.1, 93.0], [29.2, 93.0], [29.3, 93.0], [29.4, 93.0], [29.5, 93.0], [29.6, 93.0], [29.7, 94.0], [29.8, 94.0], [29.9, 94.0], [30.0, 94.0], [30.1, 94.0], [30.2, 94.0], [30.3, 94.0], [30.4, 95.0], [30.5, 95.0], [30.6, 95.0], [30.7, 95.0], [30.8, 95.0], [30.9, 95.0], [31.0, 95.0], [31.1, 95.0], [31.2, 95.0], [31.3, 96.0], [31.4, 96.0], [31.5, 96.0], [31.6, 96.0], [31.7, 96.0], [31.8, 96.0], [31.9, 97.0], [32.0, 97.0], [32.1, 97.0], [32.2, 97.0], [32.3, 97.0], [32.4, 98.0], [32.5, 98.0], [32.6, 98.0], [32.7, 98.0], [32.8, 98.0], [32.9, 98.0], [33.0, 98.0], [33.1, 98.0], [33.2, 98.0], [33.3, 99.0], [33.4, 99.0], [33.5, 99.0], [33.6, 99.0], [33.7, 99.0], [33.8, 99.0], [33.9, 100.0], [34.0, 100.0], [34.1, 100.0], [34.2, 100.0], [34.3, 101.0], [34.4, 101.0], [34.5, 101.0], [34.6, 101.0], [34.7, 101.0], [34.8, 102.0], [34.9, 102.0], [35.0, 102.0], [35.1, 102.0], [35.2, 103.0], [35.3, 103.0], [35.4, 103.0], [35.5, 103.0], [35.6, 103.0], [35.7, 104.0], [35.8, 104.0], [35.9, 104.0], [36.0, 104.0], [36.1, 105.0], [36.2, 105.0], [36.3, 105.0], [36.4, 105.0], [36.5, 106.0], [36.6, 106.0], [36.7, 107.0], [36.8, 107.0], [36.9, 107.0], [37.0, 107.0], [37.1, 108.0], [37.2, 108.0], [37.3, 109.0], [37.4, 109.0], [37.5, 109.0], [37.6, 110.0], [37.7, 110.0], [37.8, 110.0], [37.9, 111.0], [38.0, 112.0], [38.1, 112.0], [38.2, 113.0], [38.3, 114.0], [38.4, 114.0], [38.5, 115.0], [38.6, 116.0], [38.7, 116.0], [38.8, 117.0], [38.9, 119.0], [39.0, 119.0], [39.1, 120.0], [39.2, 120.0], [39.3, 121.0], [39.4, 122.0], [39.5, 122.0], [39.6, 123.0], [39.7, 124.0], [39.8, 124.0], [39.9, 125.0], [40.0, 125.0], [40.1, 126.0], [40.2, 126.0], [40.3, 126.0], [40.4, 127.0], [40.5, 128.0], [40.6, 129.0], [40.7, 130.0], [40.8, 130.0], [40.9, 131.0], [41.0, 131.0], [41.1, 132.0], [41.2, 132.0], [41.3, 132.0], [41.4, 133.0], [41.5, 133.0], [41.6, 134.0], [41.7, 135.0], [41.8, 136.0], [41.9, 137.0], [42.0, 138.0], [42.1, 138.0], [42.2, 139.0], [42.3, 139.0], [42.4, 140.0], [42.5, 141.0], [42.6, 141.0], [42.7, 142.0], [42.8, 143.0], [42.9, 143.0], [43.0, 144.0], [43.1, 145.0], [43.2, 145.0], [43.3, 146.0], [43.4, 146.0], [43.5, 148.0], [43.6, 149.0], [43.7, 150.0], [43.8, 151.0], [43.9, 153.0], [44.0, 154.0], [44.1, 155.0], [44.2, 156.0], [44.3, 156.0], [44.4, 158.0], [44.5, 159.0], [44.6, 159.0], [44.7, 160.0], [44.8, 161.0], [44.9, 161.0], [45.0, 162.0], [45.1, 164.0], [45.2, 164.0], [45.3, 165.0], [45.4, 166.0], [45.5, 166.0], [45.6, 168.0], [45.7, 168.0], [45.8, 169.0], [45.9, 170.0], [46.0, 170.0], [46.1, 171.0], [46.2, 172.0], [46.3, 172.0], [46.4, 173.0], [46.5, 174.0], [46.6, 175.0], [46.7, 175.0], [46.8, 176.0], [46.9, 176.0], [47.0, 177.0], [47.1, 178.0], [47.2, 178.0], [47.3, 180.0], [47.4, 182.0], [47.5, 183.0], [47.6, 184.0], [47.7, 185.0], [47.8, 185.0], [47.9, 186.0], [48.0, 186.0], [48.1, 187.0], [48.2, 188.0], [48.3, 189.0], [48.4, 190.0], [48.5, 191.0], [48.6, 192.0], [48.7, 193.0], [48.8, 195.0], [48.9, 196.0], [49.0, 197.0], [49.1, 198.0], [49.2, 199.0], [49.3, 201.0], [49.4, 202.0], [49.5, 202.0], [49.6, 203.0], [49.7, 203.0], [49.8, 204.0], [49.9, 206.0], [50.0, 207.0], [50.1, 207.0], [50.2, 208.0], [50.3, 210.0], [50.4, 211.0], [50.5, 212.0], [50.6, 213.0], [50.7, 214.0], [50.8, 215.0], [50.9, 216.0], [51.0, 217.0], [51.1, 218.0], [51.2, 220.0], [51.3, 221.0], [51.4, 221.0], [51.5, 222.0], [51.6, 222.0], [51.7, 223.0], [51.8, 223.0], [51.9, 225.0], [52.0, 226.0], [52.1, 226.0], [52.2, 227.0], [52.3, 228.0], [52.4, 230.0], [52.5, 231.0], [52.6, 232.0], [52.7, 233.0], [52.8, 233.0], [52.9, 234.0], [53.0, 235.0], [53.1, 236.0], [53.2, 237.0], [53.3, 238.0], [53.4, 240.0], [53.5, 241.0], [53.6, 242.0], [53.7, 243.0], [53.8, 244.0], [53.9, 244.0], [54.0, 245.0], [54.1, 245.0], [54.2, 247.0], [54.3, 248.0], [54.4, 248.0], [54.5, 249.0], [54.6, 250.0], [54.7, 251.0], [54.8, 252.0], [54.9, 253.0], [55.0, 254.0], [55.1, 255.0], [55.2, 256.0], [55.3, 258.0], [55.4, 260.0], [55.5, 261.0], [55.6, 261.0], [55.7, 262.0], [55.8, 264.0], [55.9, 266.0], [56.0, 267.0], [56.1, 268.0], [56.2, 269.0], [56.3, 271.0], [56.4, 271.0], [56.5, 272.0], [56.6, 272.0], [56.7, 274.0], [56.8, 274.0], [56.9, 276.0], [57.0, 277.0], [57.1, 279.0], [57.2, 280.0], [57.3, 280.0], [57.4, 282.0], [57.5, 283.0], [57.6, 284.0], [57.7, 285.0], [57.8, 286.0], [57.9, 287.0], [58.0, 288.0], [58.1, 290.0], [58.2, 291.0], [58.3, 292.0], [58.4, 293.0], [58.5, 294.0], [58.6, 296.0], [58.7, 297.0], [58.8, 298.0], [58.9, 298.0], [59.0, 300.0], [59.1, 302.0], [59.2, 303.0], [59.3, 305.0], [59.4, 306.0], [59.5, 308.0], [59.6, 309.0], [59.7, 310.0], [59.8, 310.0], [59.9, 311.0], [60.0, 313.0], [60.1, 314.0], [60.2, 315.0], [60.3, 316.0], [60.4, 317.0], [60.5, 319.0], [60.6, 321.0], [60.7, 322.0], [60.8, 325.0], [60.9, 326.0], [61.0, 328.0], [61.1, 329.0], [61.2, 330.0], [61.3, 331.0], [61.4, 334.0], [61.5, 335.0], [61.6, 339.0], [61.7, 340.0], [61.8, 341.0], [61.9, 343.0], [62.0, 345.0], [62.1, 347.0], [62.2, 348.0], [62.3, 349.0], [62.4, 350.0], [62.5, 352.0], [62.6, 353.0], [62.7, 355.0], [62.8, 357.0], [62.9, 359.0], [63.0, 360.0], [63.1, 361.0], [63.2, 363.0], [63.3, 365.0], [63.4, 367.0], [63.5, 369.0], [63.6, 370.0], [63.7, 371.0], [63.8, 372.0], [63.9, 374.0], [64.0, 375.0], [64.1, 376.0], [64.2, 377.0], [64.3, 378.0], [64.4, 379.0], [64.5, 382.0], [64.6, 383.0], [64.7, 385.0], [64.8, 386.0], [64.9, 388.0], [65.0, 392.0], [65.1, 392.0], [65.2, 393.0], [65.3, 395.0], [65.4, 397.0], [65.5, 398.0], [65.6, 400.0], [65.7, 401.0], [65.8, 403.0], [65.9, 404.0], [66.0, 405.0], [66.1, 408.0], [66.2, 410.0], [66.3, 411.0], [66.4, 413.0], [66.5, 414.0], [66.6, 415.0], [66.7, 416.0], [66.8, 418.0], [66.9, 419.0], [67.0, 420.0], [67.1, 421.0], [67.2, 422.0], [67.3, 424.0], [67.4, 425.0], [67.5, 426.0], [67.6, 426.0], [67.7, 428.0], [67.8, 431.0], [67.9, 433.0], [68.0, 434.0], [68.1, 436.0], [68.2, 438.0], [68.3, 440.0], [68.4, 442.0], [68.5, 446.0], [68.6, 447.0], [68.7, 449.0], [68.8, 451.0], [68.9, 452.0], [69.0, 454.0], [69.1, 455.0], [69.2, 457.0], [69.3, 458.0], [69.4, 459.0], [69.5, 462.0], [69.6, 462.0], [69.7, 464.0], [69.8, 465.0], [69.9, 467.0], [70.0, 468.0], [70.1, 470.0], [70.2, 471.0], [70.3, 472.0], [70.4, 474.0], [70.5, 476.0], [70.6, 478.0], [70.7, 480.0], [70.8, 481.0], [70.9, 482.0], [71.0, 485.0], [71.1, 486.0], [71.2, 487.0], [71.3, 488.0], [71.4, 489.0], [71.5, 490.0], [71.6, 492.0], [71.7, 494.0], [71.8, 497.0], [71.9, 498.0], [72.0, 500.0], [72.1, 502.0], [72.2, 503.0], [72.3, 505.0], [72.4, 506.0], [72.5, 508.0], [72.6, 510.0], [72.7, 512.0], [72.8, 513.0], [72.9, 515.0], [73.0, 518.0], [73.1, 519.0], [73.2, 521.0], [73.3, 523.0], [73.4, 524.0], [73.5, 526.0], [73.6, 530.0], [73.7, 534.0], [73.8, 534.0], [73.9, 535.0], [74.0, 536.0], [74.1, 537.0], [74.2, 539.0], [74.3, 541.0], [74.4, 542.0], [74.5, 544.0], [74.6, 547.0], [74.7, 548.0], [74.8, 550.0], [74.9, 552.0], [75.0, 553.0], [75.1, 554.0], [75.2, 556.0], [75.3, 556.0], [75.4, 558.0], [75.5, 559.0], [75.6, 561.0], [75.7, 561.0], [75.8, 564.0], [75.9, 567.0], [76.0, 568.0], [76.1, 570.0], [76.2, 572.0], [76.3, 573.0], [76.4, 575.0], [76.5, 577.0], [76.6, 578.0], [76.7, 580.0], [76.8, 580.0], [76.9, 582.0], [77.0, 584.0], [77.1, 588.0], [77.2, 589.0], [77.3, 590.0], [77.4, 592.0], [77.5, 595.0], [77.6, 597.0], [77.7, 600.0], [77.8, 602.0], [77.9, 603.0], [78.0, 604.0], [78.1, 607.0], [78.2, 608.0], [78.3, 610.0], [78.4, 611.0], [78.5, 613.0], [78.6, 615.0], [78.7, 616.0], [78.8, 618.0], [78.9, 620.0], [79.0, 622.0], [79.1, 624.0], [79.2, 626.0], [79.3, 628.0], [79.4, 630.0], [79.5, 632.0], [79.6, 632.0], [79.7, 633.0], [79.8, 637.0], [79.9, 639.0], [80.0, 640.0], [80.1, 642.0], [80.2, 644.0], [80.3, 647.0], [80.4, 648.0], [80.5, 649.0], [80.6, 652.0], [80.7, 653.0], [80.8, 656.0], [80.9, 657.0], [81.0, 659.0], [81.1, 660.0], [81.2, 662.0], [81.3, 664.0], [81.4, 666.0], [81.5, 669.0], [81.6, 670.0], [81.7, 673.0], [81.8, 676.0], [81.9, 679.0], [82.0, 680.0], [82.1, 683.0], [82.2, 685.0], [82.3, 686.0], [82.4, 687.0], [82.5, 689.0], [82.6, 690.0], [82.7, 692.0], [82.8, 695.0], [82.9, 701.0], [83.0, 702.0], [83.1, 703.0], [83.2, 705.0], [83.3, 708.0], [83.4, 711.0], [83.5, 712.0], [83.6, 716.0], [83.7, 719.0], [83.8, 721.0], [83.9, 724.0], [84.0, 727.0], [84.1, 729.0], [84.2, 731.0], [84.3, 734.0], [84.4, 736.0], [84.5, 740.0], [84.6, 743.0], [84.7, 747.0], [84.8, 750.0], [84.9, 751.0], [85.0, 755.0], [85.1, 760.0], [85.2, 763.0], [85.3, 766.0], [85.4, 769.0], [85.5, 774.0], [85.6, 778.0], [85.7, 779.0], [85.8, 780.0], [85.9, 783.0], [86.0, 786.0], [86.1, 790.0], [86.2, 792.0], [86.3, 795.0], [86.4, 797.0], [86.5, 798.0], [86.6, 802.0], [86.7, 804.0], [86.8, 805.0], [86.9, 807.0], [87.0, 811.0], [87.1, 814.0], [87.2, 816.0], [87.3, 820.0], [87.4, 822.0], [87.5, 826.0], [87.6, 827.0], [87.7, 829.0], [87.8, 836.0], [87.9, 837.0], [88.0, 840.0], [88.1, 842.0], [88.2, 844.0], [88.3, 847.0], [88.4, 847.0], [88.5, 849.0], [88.6, 852.0], [88.7, 855.0], [88.8, 857.0], [88.9, 859.0], [89.0, 861.0], [89.1, 867.0], [89.2, 868.0], [89.3, 873.0], [89.4, 874.0], [89.5, 877.0], [89.6, 878.0], [89.7, 883.0], [89.8, 887.0], [89.9, 889.0], [90.0, 893.0], [90.1, 896.0], [90.2, 902.0], [90.3, 906.0], [90.4, 909.0], [90.5, 912.0], [90.6, 916.0], [90.7, 921.0], [90.8, 927.0], [90.9, 934.0], [91.0, 940.0], [91.1, 944.0], [91.2, 952.0], [91.3, 961.0], [91.4, 966.0], [91.5, 970.0], [91.6, 979.0], [91.7, 989.0], [91.8, 993.0], [91.9, 1001.0], [92.0, 1009.0], [92.1, 1015.0], [92.2, 1025.0], [92.3, 1033.0], [92.4, 1037.0], [92.5, 1039.0], [92.6, 1047.0], [92.7, 1056.0], [92.8, 1064.0], [92.9, 1075.0], [93.0, 1078.0], [93.1, 1085.0], [93.2, 1098.0], [93.3, 1106.0], [93.4, 1111.0], [93.5, 1117.0], [93.6, 1123.0], [93.7, 1132.0], [93.8, 1139.0], [93.9, 1148.0], [94.0, 1149.0], [94.1, 1159.0], [94.2, 1165.0], [94.3, 1168.0], [94.4, 1174.0], [94.5, 1176.0], [94.6, 1180.0], [94.7, 1187.0], [94.8, 1195.0], [94.9, 1203.0], [95.0, 1209.0], [95.1, 1216.0], [95.2, 1219.0], [95.3, 1223.0], [95.4, 1232.0], [95.5, 1241.0], [95.6, 1249.0], [95.7, 1255.0], [95.8, 1271.0], [95.9, 1278.0], [96.0, 1288.0], [96.1, 1296.0], [96.2, 1303.0], [96.3, 1312.0], [96.4, 1323.0], [96.5, 1334.0], [96.6, 1347.0], [96.7, 1357.0], [96.8, 1374.0], [96.9, 1387.0], [97.0, 1408.0], [97.1, 1428.0], [97.2, 1441.0], [97.3, 1456.0], [97.4, 1470.0], [97.5, 1487.0], [97.6, 1507.0], [97.7, 1515.0], [97.8, 1538.0], [97.9, 1545.0], [98.0, 1566.0], [98.1, 1591.0], [98.2, 1606.0], [98.3, 1615.0], [98.4, 1644.0], [98.5, 1690.0], [98.6, 1701.0], [98.7, 1764.0], [98.8, 1821.0], [98.9, 1899.0], [99.0, 1974.0], [99.1, 2094.0], [99.2, 2190.0], [99.3, 2261.0], [99.4, 2321.0], [99.5, 2462.0], [99.6, 2532.0], [99.7, 2681.0], [99.8, 2954.0], [99.9, 3051.0], [100.0, 4582.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 1779.0, "series": [{"data": [[0.0, 1779.0], [600.0, 273.0], [700.0, 193.0], [800.0, 189.0], [900.0, 90.0], [1000.0, 72.0], [1100.0, 86.0], [1200.0, 68.0], [1300.0, 42.0], [1400.0, 32.0], [1500.0, 34.0], [100.0, 811.0], [1600.0, 21.0], [1700.0, 8.0], [1800.0, 9.0], [1900.0, 6.0], [2000.0, 4.0], [2100.0, 5.0], [2200.0, 9.0], [2300.0, 3.0], [2400.0, 6.0], [2500.0, 6.0], [2600.0, 4.0], [2700.0, 2.0], [2900.0, 6.0], [3000.0, 1.0], [200.0, 514.0], [3300.0, 1.0], [3500.0, 1.0], [4300.0, 1.0], [4500.0, 2.0], [300.0, 345.0], [400.0, 339.0], [500.0, 300.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 4500.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 129.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 3791.0, "series": [{"data": [[0.0, 3791.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1342.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 129.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.955925563173357, "minX": 1.60248744E12, "maxY": 10.0, "series": [{"data": [[1.6024875E12, 10.0], [1.60248744E12, 9.97011207970112], [1.60248762E12, 9.955925563173357], [1.60248756E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60248762E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 373.2909437559569, "minX": 1.0, "maxY": 4523.0, "series": [{"data": [[4.0, 914.5], [8.0, 669.0], [2.0, 4523.0], [1.0, 4356.0], [9.0, 736.3333333333333], [5.0, 1370.5], [10.0, 373.2909437559569], [6.0, 1704.0], [3.0, 2973.0], [7.0, 2366.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.98688711516533, 377.5539718738111]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 6921.533333333334, "minX": 1.60248744E12, "maxY": 1263611.8833333333, "series": [{"data": [[1.6024875E12, 1263611.8833333333], [1.60248744E12, 772287.4833333333], [1.60248762E12, 952713.05], [1.60248756E12, 1260054.25]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6024875E12, 14332.45], [1.60248744E12, 6921.533333333334], [1.60248762E12, 9008.0], [1.60248756E12, 15228.966666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60248762E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 341.0420693575899, "minX": 1.60248744E12, "maxY": 439.4308841843087, "series": [{"data": [[1.6024875E12, 356.62596783799864], [1.60248744E12, 439.4308841843087], [1.60248762E12, 426.20763956904966], [1.60248756E12, 341.0420693575899]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60248762E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 340.6787947697553, "minX": 1.60248744E12, "maxY": 438.83935242839345, "series": [{"data": [[1.6024875E12, 356.2090530077425], [1.60248744E12, 438.83935242839345], [1.60248762E12, 425.76689520078367], [1.60248756E12, 340.6787947697553]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60248762E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.00783545543584721, "minX": 1.60248744E12, "maxY": 0.10958904109589059, "series": [{"data": [[1.6024875E12, 0.010125074449076834], [1.60248744E12, 0.10958904109589059], [1.60248762E12, 0.00783545543584721], [1.60248756E12, 0.008527572484366119]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60248762E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 37.0, "minX": 1.60248744E12, "maxY": 4582.0, "series": [{"data": [[1.6024875E12, 2973.0], [1.60248744E12, 2252.0], [1.60248762E12, 4582.0], [1.60248756E12, 2474.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6024875E12, 42.0], [1.60248744E12, 44.23599980831146], [1.60248762E12, 44.0], [1.60248756E12, 43.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6024875E12, 42.0], [1.60248744E12, 44.959600076675414], [1.60248762E12, 44.0], [1.60248756E12, 43.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6024875E12, 42.0], [1.60248744E12, 44.637999904155734], [1.60248762E12, 44.0], [1.60248756E12, 43.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.6024875E12, 37.0], [1.60248744E12, 42.0], [1.60248762E12, 42.0], [1.60248756E12, 37.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6024875E12, 180.0], [1.60248744E12, 281.0], [1.60248762E12, 251.0], [1.60248756E12, 185.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60248762E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 59.0, "minX": 1.0, "maxY": 1790.0, "series": [{"data": [[3.0, 1235.0], [4.0, 1790.0], [6.0, 1232.5], [7.0, 903.5], [8.0, 1032.0], [9.0, 805.0], [10.0, 1066.5], [11.0, 798.5], [12.0, 779.0], [13.0, 706.0], [14.0, 673.5], [15.0, 615.0], [16.0, 555.0], [17.0, 548.0], [18.0, 439.5], [19.0, 517.0], [20.0, 406.5], [21.0, 394.0], [22.0, 476.0], [23.0, 386.0], [24.0, 316.0], [25.0, 340.0], [26.0, 258.5], [27.0, 228.0], [28.0, 281.0], [29.0, 202.0], [30.0, 94.0], [31.0, 281.0], [33.0, 231.0], [32.0, 95.0], [35.0, 99.0], [34.0, 108.0], [37.0, 154.0], [36.0, 166.5], [39.0, 115.5], [41.0, 125.0], [40.0, 170.5], [42.0, 113.5], [43.0, 150.0], [45.0, 204.0], [44.0, 160.5], [46.0, 100.5], [48.0, 97.0], [51.0, 93.0], [55.0, 150.0], [54.0, 59.0], [56.0, 98.0], [59.0, 99.0], [60.0, 123.0], [61.0, 128.0], [63.0, 145.0], [62.0, 95.0], [67.0, 159.0], [69.0, 80.0], [68.0, 101.5], [73.0, 92.0], [76.0, 94.5], [88.0, 87.5], [1.0, 1147.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 88.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 59.0, "minX": 1.0, "maxY": 1789.0, "series": [{"data": [[3.0, 1234.0], [4.0, 1789.0], [6.0, 1232.5], [7.0, 903.0], [8.0, 1029.0], [9.0, 805.0], [10.0, 1064.5], [11.0, 798.0], [12.0, 778.0], [13.0, 703.0], [14.0, 672.0], [15.0, 613.5], [16.0, 554.5], [17.0, 548.0], [18.0, 438.0], [19.0, 516.5], [20.0, 406.0], [21.0, 394.0], [22.0, 475.0], [23.0, 386.0], [24.0, 315.5], [25.0, 338.5], [26.0, 257.5], [27.0, 228.0], [28.0, 281.0], [29.0, 202.0], [30.0, 94.0], [31.0, 281.0], [33.0, 230.5], [32.0, 95.0], [35.0, 99.0], [34.0, 108.0], [37.0, 154.0], [36.0, 166.5], [39.0, 115.5], [41.0, 125.0], [40.0, 170.5], [42.0, 113.5], [43.0, 150.0], [45.0, 203.5], [44.0, 160.5], [46.0, 100.5], [48.0, 97.0], [51.0, 93.0], [55.0, 150.0], [54.0, 59.0], [56.0, 98.0], [59.0, 99.0], [60.0, 123.0], [61.0, 128.0], [63.0, 144.0], [62.0, 95.0], [67.0, 159.0], [69.0, 80.0], [68.0, 101.0], [73.0, 92.0], [76.0, 94.5], [88.0, 87.0], [1.0, 1146.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 88.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 13.55, "minX": 1.60248744E12, "maxY": 29.316666666666666, "series": [{"data": [[1.6024875E12, 27.983333333333334], [1.60248744E12, 13.55], [1.60248762E12, 16.85], [1.60248756E12, 29.316666666666666]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60248762E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 13.383333333333333, "minX": 1.60248744E12, "maxY": 29.316666666666666, "series": [{"data": [[1.6024875E12, 27.983333333333334], [1.60248744E12, 13.383333333333333], [1.60248762E12, 17.016666666666666], [1.60248756E12, 29.316666666666666]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60248762E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 13.383333333333333, "minX": 1.60248744E12, "maxY": 29.316666666666666, "series": [{"data": [[1.6024875E12, 27.983333333333334], [1.60248744E12, 13.383333333333333], [1.60248762E12, 17.016666666666666], [1.60248756E12, 29.316666666666666]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60248762E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 13.383333333333333, "minX": 1.60248744E12, "maxY": 29.316666666666666, "series": [{"data": [[1.6024875E12, 27.983333333333334], [1.60248744E12, 13.383333333333333], [1.60248762E12, 17.016666666666666], [1.60248756E12, 29.316666666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60248762E12, "title": "Total Transactions Per Second"}},
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

