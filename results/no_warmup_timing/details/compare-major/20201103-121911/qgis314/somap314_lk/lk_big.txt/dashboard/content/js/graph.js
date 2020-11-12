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
        data: {"result": {"minY": 38.0, "minX": 0.0, "maxY": 4348.0, "series": [{"data": [[0.0, 38.0], [0.1, 43.0], [0.2, 44.0], [0.3, 44.0], [0.4, 44.0], [0.5, 45.0], [0.6, 45.0], [0.7, 46.0], [0.8, 46.0], [0.9, 46.0], [1.0, 47.0], [1.1, 47.0], [1.2, 47.0], [1.3, 47.0], [1.4, 48.0], [1.5, 48.0], [1.6, 48.0], [1.7, 48.0], [1.8, 49.0], [1.9, 49.0], [2.0, 49.0], [2.1, 49.0], [2.2, 49.0], [2.3, 49.0], [2.4, 50.0], [2.5, 50.0], [2.6, 50.0], [2.7, 50.0], [2.8, 50.0], [2.9, 50.0], [3.0, 50.0], [3.1, 51.0], [3.2, 51.0], [3.3, 51.0], [3.4, 51.0], [3.5, 51.0], [3.6, 51.0], [3.7, 51.0], [3.8, 51.0], [3.9, 51.0], [4.0, 51.0], [4.1, 51.0], [4.2, 52.0], [4.3, 52.0], [4.4, 52.0], [4.5, 52.0], [4.6, 52.0], [4.7, 52.0], [4.8, 52.0], [4.9, 53.0], [5.0, 53.0], [5.1, 53.0], [5.2, 53.0], [5.3, 53.0], [5.4, 53.0], [5.5, 53.0], [5.6, 53.0], [5.7, 53.0], [5.8, 53.0], [5.9, 53.0], [6.0, 53.0], [6.1, 53.0], [6.2, 54.0], [6.3, 54.0], [6.4, 54.0], [6.5, 54.0], [6.6, 54.0], [6.7, 54.0], [6.8, 54.0], [6.9, 54.0], [7.0, 54.0], [7.1, 54.0], [7.2, 54.0], [7.3, 55.0], [7.4, 55.0], [7.5, 55.0], [7.6, 55.0], [7.7, 55.0], [7.8, 55.0], [7.9, 55.0], [8.0, 55.0], [8.1, 55.0], [8.2, 55.0], [8.3, 55.0], [8.4, 55.0], [8.5, 56.0], [8.6, 56.0], [8.7, 56.0], [8.8, 56.0], [8.9, 56.0], [9.0, 56.0], [9.1, 56.0], [9.2, 56.0], [9.3, 56.0], [9.4, 56.0], [9.5, 56.0], [9.6, 56.0], [9.7, 57.0], [9.8, 57.0], [9.9, 57.0], [10.0, 57.0], [10.1, 57.0], [10.2, 57.0], [10.3, 57.0], [10.4, 57.0], [10.5, 57.0], [10.6, 57.0], [10.7, 57.0], [10.8, 57.0], [10.9, 57.0], [11.0, 57.0], [11.1, 58.0], [11.2, 58.0], [11.3, 58.0], [11.4, 58.0], [11.5, 58.0], [11.6, 58.0], [11.7, 58.0], [11.8, 58.0], [11.9, 58.0], [12.0, 59.0], [12.1, 59.0], [12.2, 59.0], [12.3, 59.0], [12.4, 59.0], [12.5, 59.0], [12.6, 59.0], [12.7, 59.0], [12.8, 60.0], [12.9, 60.0], [13.0, 60.0], [13.1, 60.0], [13.2, 60.0], [13.3, 60.0], [13.4, 61.0], [13.5, 61.0], [13.6, 61.0], [13.7, 61.0], [13.8, 61.0], [13.9, 61.0], [14.0, 61.0], [14.1, 61.0], [14.2, 62.0], [14.3, 62.0], [14.4, 62.0], [14.5, 62.0], [14.6, 62.0], [14.7, 62.0], [14.8, 62.0], [14.9, 63.0], [15.0, 63.0], [15.1, 63.0], [15.2, 63.0], [15.3, 63.0], [15.4, 63.0], [15.5, 64.0], [15.6, 64.0], [15.7, 64.0], [15.8, 64.0], [15.9, 65.0], [16.0, 65.0], [16.1, 65.0], [16.2, 66.0], [16.3, 66.0], [16.4, 66.0], [16.5, 67.0], [16.6, 67.0], [16.7, 68.0], [16.8, 68.0], [16.9, 68.0], [17.0, 68.0], [17.1, 69.0], [17.2, 69.0], [17.3, 69.0], [17.4, 70.0], [17.5, 70.0], [17.6, 71.0], [17.7, 71.0], [17.8, 72.0], [17.9, 73.0], [18.0, 73.0], [18.1, 74.0], [18.2, 74.0], [18.3, 74.0], [18.4, 75.0], [18.5, 75.0], [18.6, 76.0], [18.7, 76.0], [18.8, 77.0], [18.9, 77.0], [19.0, 78.0], [19.1, 78.0], [19.2, 79.0], [19.3, 79.0], [19.4, 80.0], [19.5, 80.0], [19.6, 81.0], [19.7, 81.0], [19.8, 82.0], [19.9, 83.0], [20.0, 83.0], [20.1, 83.0], [20.2, 84.0], [20.3, 84.0], [20.4, 84.0], [20.5, 85.0], [20.6, 85.0], [20.7, 86.0], [20.8, 86.0], [20.9, 86.0], [21.0, 86.0], [21.1, 87.0], [21.2, 87.0], [21.3, 87.0], [21.4, 87.0], [21.5, 88.0], [21.6, 88.0], [21.7, 88.0], [21.8, 89.0], [21.9, 89.0], [22.0, 89.0], [22.1, 89.0], [22.2, 89.0], [22.3, 89.0], [22.4, 90.0], [22.5, 90.0], [22.6, 90.0], [22.7, 90.0], [22.8, 90.0], [22.9, 91.0], [23.0, 91.0], [23.1, 91.0], [23.2, 91.0], [23.3, 92.0], [23.4, 92.0], [23.5, 92.0], [23.6, 92.0], [23.7, 92.0], [23.8, 92.0], [23.9, 92.0], [24.0, 93.0], [24.1, 93.0], [24.2, 93.0], [24.3, 93.0], [24.4, 93.0], [24.5, 93.0], [24.6, 94.0], [24.7, 94.0], [24.8, 94.0], [24.9, 94.0], [25.0, 94.0], [25.1, 94.0], [25.2, 95.0], [25.3, 95.0], [25.4, 95.0], [25.5, 95.0], [25.6, 95.0], [25.7, 95.0], [25.8, 96.0], [25.9, 96.0], [26.0, 96.0], [26.1, 96.0], [26.2, 96.0], [26.3, 96.0], [26.4, 97.0], [26.5, 97.0], [26.6, 97.0], [26.7, 97.0], [26.8, 97.0], [26.9, 97.0], [27.0, 97.0], [27.1, 98.0], [27.2, 98.0], [27.3, 98.0], [27.4, 98.0], [27.5, 98.0], [27.6, 98.0], [27.7, 99.0], [27.8, 99.0], [27.9, 99.0], [28.0, 99.0], [28.1, 99.0], [28.2, 99.0], [28.3, 99.0], [28.4, 99.0], [28.5, 99.0], [28.6, 100.0], [28.7, 100.0], [28.8, 100.0], [28.9, 100.0], [29.0, 100.0], [29.1, 100.0], [29.2, 100.0], [29.3, 100.0], [29.4, 101.0], [29.5, 101.0], [29.6, 101.0], [29.7, 101.0], [29.8, 101.0], [29.9, 101.0], [30.0, 101.0], [30.1, 101.0], [30.2, 102.0], [30.3, 102.0], [30.4, 102.0], [30.5, 102.0], [30.6, 102.0], [30.7, 102.0], [30.8, 102.0], [30.9, 103.0], [31.0, 103.0], [31.1, 103.0], [31.2, 103.0], [31.3, 103.0], [31.4, 103.0], [31.5, 104.0], [31.6, 104.0], [31.7, 104.0], [31.8, 104.0], [31.9, 104.0], [32.0, 104.0], [32.1, 105.0], [32.2, 105.0], [32.3, 105.0], [32.4, 105.0], [32.5, 105.0], [32.6, 105.0], [32.7, 105.0], [32.8, 106.0], [32.9, 106.0], [33.0, 106.0], [33.1, 106.0], [33.2, 107.0], [33.3, 107.0], [33.4, 107.0], [33.5, 107.0], [33.6, 107.0], [33.7, 108.0], [33.8, 108.0], [33.9, 108.0], [34.0, 108.0], [34.1, 108.0], [34.2, 109.0], [34.3, 109.0], [34.4, 109.0], [34.5, 109.0], [34.6, 109.0], [34.7, 110.0], [34.8, 110.0], [34.9, 110.0], [35.0, 111.0], [35.1, 111.0], [35.2, 111.0], [35.3, 111.0], [35.4, 112.0], [35.5, 112.0], [35.6, 112.0], [35.7, 112.0], [35.8, 113.0], [35.9, 113.0], [36.0, 113.0], [36.1, 114.0], [36.2, 114.0], [36.3, 115.0], [36.4, 115.0], [36.5, 116.0], [36.6, 116.0], [36.7, 116.0], [36.8, 116.0], [36.9, 117.0], [37.0, 117.0], [37.1, 117.0], [37.2, 117.0], [37.3, 118.0], [37.4, 118.0], [37.5, 118.0], [37.6, 119.0], [37.7, 119.0], [37.8, 120.0], [37.9, 120.0], [38.0, 121.0], [38.1, 121.0], [38.2, 122.0], [38.3, 122.0], [38.4, 123.0], [38.5, 123.0], [38.6, 124.0], [38.7, 124.0], [38.8, 125.0], [38.9, 125.0], [39.0, 126.0], [39.1, 126.0], [39.2, 126.0], [39.3, 127.0], [39.4, 127.0], [39.5, 127.0], [39.6, 128.0], [39.7, 128.0], [39.8, 129.0], [39.9, 130.0], [40.0, 130.0], [40.1, 131.0], [40.2, 132.0], [40.3, 132.0], [40.4, 133.0], [40.5, 133.0], [40.6, 133.0], [40.7, 134.0], [40.8, 135.0], [40.9, 137.0], [41.0, 138.0], [41.1, 139.0], [41.2, 140.0], [41.3, 140.0], [41.4, 141.0], [41.5, 141.0], [41.6, 142.0], [41.7, 143.0], [41.8, 143.0], [41.9, 145.0], [42.0, 145.0], [42.1, 146.0], [42.2, 146.0], [42.3, 147.0], [42.4, 148.0], [42.5, 149.0], [42.6, 149.0], [42.7, 150.0], [42.8, 150.0], [42.9, 151.0], [43.0, 152.0], [43.1, 152.0], [43.2, 153.0], [43.3, 154.0], [43.4, 155.0], [43.5, 155.0], [43.6, 156.0], [43.7, 157.0], [43.8, 158.0], [43.9, 159.0], [44.0, 160.0], [44.1, 161.0], [44.2, 161.0], [44.3, 163.0], [44.4, 163.0], [44.5, 164.0], [44.6, 165.0], [44.7, 165.0], [44.8, 166.0], [44.9, 169.0], [45.0, 170.0], [45.1, 171.0], [45.2, 171.0], [45.3, 173.0], [45.4, 175.0], [45.5, 176.0], [45.6, 177.0], [45.7, 178.0], [45.8, 178.0], [45.9, 179.0], [46.0, 180.0], [46.1, 181.0], [46.2, 182.0], [46.3, 183.0], [46.4, 184.0], [46.5, 185.0], [46.6, 186.0], [46.7, 186.0], [46.8, 187.0], [46.9, 188.0], [47.0, 188.0], [47.1, 189.0], [47.2, 189.0], [47.3, 191.0], [47.4, 191.0], [47.5, 192.0], [47.6, 192.0], [47.7, 193.0], [47.8, 194.0], [47.9, 194.0], [48.0, 195.0], [48.1, 195.0], [48.2, 196.0], [48.3, 196.0], [48.4, 197.0], [48.5, 198.0], [48.6, 198.0], [48.7, 199.0], [48.8, 200.0], [48.9, 200.0], [49.0, 201.0], [49.1, 202.0], [49.2, 203.0], [49.3, 205.0], [49.4, 206.0], [49.5, 206.0], [49.6, 207.0], [49.7, 208.0], [49.8, 209.0], [49.9, 210.0], [50.0, 211.0], [50.1, 213.0], [50.2, 214.0], [50.3, 214.0], [50.4, 216.0], [50.5, 217.0], [50.6, 218.0], [50.7, 219.0], [50.8, 220.0], [50.9, 221.0], [51.0, 222.0], [51.1, 223.0], [51.2, 224.0], [51.3, 226.0], [51.4, 228.0], [51.5, 228.0], [51.6, 229.0], [51.7, 229.0], [51.8, 230.0], [51.9, 231.0], [52.0, 232.0], [52.1, 233.0], [52.2, 233.0], [52.3, 235.0], [52.4, 235.0], [52.5, 235.0], [52.6, 237.0], [52.7, 238.0], [52.8, 240.0], [52.9, 241.0], [53.0, 242.0], [53.1, 243.0], [53.2, 245.0], [53.3, 246.0], [53.4, 247.0], [53.5, 249.0], [53.6, 250.0], [53.7, 251.0], [53.8, 252.0], [53.9, 254.0], [54.0, 254.0], [54.1, 256.0], [54.2, 257.0], [54.3, 258.0], [54.4, 259.0], [54.5, 260.0], [54.6, 261.0], [54.7, 263.0], [54.8, 263.0], [54.9, 264.0], [55.0, 265.0], [55.1, 266.0], [55.2, 267.0], [55.3, 268.0], [55.4, 270.0], [55.5, 271.0], [55.6, 272.0], [55.7, 273.0], [55.8, 273.0], [55.9, 274.0], [56.0, 275.0], [56.1, 276.0], [56.2, 277.0], [56.3, 278.0], [56.4, 279.0], [56.5, 280.0], [56.6, 281.0], [56.7, 282.0], [56.8, 284.0], [56.9, 284.0], [57.0, 284.0], [57.1, 285.0], [57.2, 286.0], [57.3, 288.0], [57.4, 289.0], [57.5, 290.0], [57.6, 291.0], [57.7, 292.0], [57.8, 293.0], [57.9, 294.0], [58.0, 295.0], [58.1, 297.0], [58.2, 297.0], [58.3, 298.0], [58.4, 299.0], [58.5, 300.0], [58.6, 301.0], [58.7, 301.0], [58.8, 303.0], [58.9, 304.0], [59.0, 306.0], [59.1, 309.0], [59.2, 310.0], [59.3, 311.0], [59.4, 313.0], [59.5, 314.0], [59.6, 316.0], [59.7, 316.0], [59.8, 318.0], [59.9, 318.0], [60.0, 319.0], [60.1, 320.0], [60.2, 320.0], [60.3, 322.0], [60.4, 323.0], [60.5, 324.0], [60.6, 325.0], [60.7, 326.0], [60.8, 327.0], [60.9, 330.0], [61.0, 331.0], [61.1, 333.0], [61.2, 333.0], [61.3, 335.0], [61.4, 336.0], [61.5, 337.0], [61.6, 338.0], [61.7, 339.0], [61.8, 341.0], [61.9, 342.0], [62.0, 344.0], [62.1, 345.0], [62.2, 346.0], [62.3, 349.0], [62.4, 351.0], [62.5, 353.0], [62.6, 356.0], [62.7, 358.0], [62.8, 359.0], [62.9, 360.0], [63.0, 362.0], [63.1, 363.0], [63.2, 365.0], [63.3, 366.0], [63.4, 368.0], [63.5, 368.0], [63.6, 371.0], [63.7, 372.0], [63.8, 375.0], [63.9, 376.0], [64.0, 378.0], [64.1, 379.0], [64.2, 380.0], [64.3, 382.0], [64.4, 385.0], [64.5, 386.0], [64.6, 387.0], [64.7, 387.0], [64.8, 388.0], [64.9, 389.0], [65.0, 390.0], [65.1, 391.0], [65.2, 392.0], [65.3, 393.0], [65.4, 395.0], [65.5, 397.0], [65.6, 399.0], [65.7, 402.0], [65.8, 403.0], [65.9, 404.0], [66.0, 406.0], [66.1, 408.0], [66.2, 410.0], [66.3, 411.0], [66.4, 413.0], [66.5, 415.0], [66.6, 416.0], [66.7, 419.0], [66.8, 420.0], [66.9, 422.0], [67.0, 424.0], [67.1, 425.0], [67.2, 426.0], [67.3, 427.0], [67.4, 429.0], [67.5, 430.0], [67.6, 431.0], [67.7, 432.0], [67.8, 433.0], [67.9, 434.0], [68.0, 436.0], [68.1, 436.0], [68.2, 436.0], [68.3, 438.0], [68.4, 439.0], [68.5, 441.0], [68.6, 442.0], [68.7, 443.0], [68.8, 445.0], [68.9, 447.0], [69.0, 448.0], [69.1, 449.0], [69.2, 451.0], [69.3, 452.0], [69.4, 454.0], [69.5, 455.0], [69.6, 456.0], [69.7, 457.0], [69.8, 459.0], [69.9, 461.0], [70.0, 462.0], [70.1, 464.0], [70.2, 466.0], [70.3, 468.0], [70.4, 469.0], [70.5, 471.0], [70.6, 472.0], [70.7, 473.0], [70.8, 473.0], [70.9, 474.0], [71.0, 478.0], [71.1, 481.0], [71.2, 482.0], [71.3, 485.0], [71.4, 487.0], [71.5, 488.0], [71.6, 489.0], [71.7, 491.0], [71.8, 493.0], [71.9, 495.0], [72.0, 496.0], [72.1, 497.0], [72.2, 499.0], [72.3, 502.0], [72.4, 503.0], [72.5, 505.0], [72.6, 505.0], [72.7, 506.0], [72.8, 509.0], [72.9, 509.0], [73.0, 512.0], [73.1, 513.0], [73.2, 515.0], [73.3, 518.0], [73.4, 519.0], [73.5, 521.0], [73.6, 524.0], [73.7, 529.0], [73.8, 532.0], [73.9, 534.0], [74.0, 537.0], [74.1, 538.0], [74.2, 539.0], [74.3, 542.0], [74.4, 544.0], [74.5, 546.0], [74.6, 548.0], [74.7, 549.0], [74.8, 551.0], [74.9, 552.0], [75.0, 554.0], [75.1, 556.0], [75.2, 558.0], [75.3, 560.0], [75.4, 561.0], [75.5, 563.0], [75.6, 568.0], [75.7, 571.0], [75.8, 572.0], [75.9, 574.0], [76.0, 578.0], [76.1, 579.0], [76.2, 580.0], [76.3, 583.0], [76.4, 584.0], [76.5, 585.0], [76.6, 586.0], [76.7, 588.0], [76.8, 589.0], [76.9, 593.0], [77.0, 594.0], [77.1, 598.0], [77.2, 600.0], [77.3, 601.0], [77.4, 602.0], [77.5, 605.0], [77.6, 607.0], [77.7, 609.0], [77.8, 610.0], [77.9, 611.0], [78.0, 612.0], [78.1, 614.0], [78.2, 616.0], [78.3, 619.0], [78.4, 622.0], [78.5, 625.0], [78.6, 627.0], [78.7, 628.0], [78.8, 629.0], [78.9, 630.0], [79.0, 631.0], [79.1, 633.0], [79.2, 635.0], [79.3, 637.0], [79.4, 640.0], [79.5, 642.0], [79.6, 645.0], [79.7, 648.0], [79.8, 650.0], [79.9, 653.0], [80.0, 656.0], [80.1, 659.0], [80.2, 662.0], [80.3, 664.0], [80.4, 665.0], [80.5, 666.0], [80.6, 668.0], [80.7, 670.0], [80.8, 671.0], [80.9, 674.0], [81.0, 677.0], [81.1, 679.0], [81.2, 681.0], [81.3, 683.0], [81.4, 684.0], [81.5, 687.0], [81.6, 688.0], [81.7, 689.0], [81.8, 692.0], [81.9, 693.0], [82.0, 694.0], [82.1, 697.0], [82.2, 700.0], [82.3, 706.0], [82.4, 712.0], [82.5, 715.0], [82.6, 717.0], [82.7, 720.0], [82.8, 722.0], [82.9, 724.0], [83.0, 726.0], [83.1, 728.0], [83.2, 730.0], [83.3, 731.0], [83.4, 734.0], [83.5, 736.0], [83.6, 738.0], [83.7, 740.0], [83.8, 743.0], [83.9, 745.0], [84.0, 747.0], [84.1, 750.0], [84.2, 753.0], [84.3, 755.0], [84.4, 757.0], [84.5, 759.0], [84.6, 760.0], [84.7, 762.0], [84.8, 764.0], [84.9, 766.0], [85.0, 768.0], [85.1, 769.0], [85.2, 774.0], [85.3, 775.0], [85.4, 777.0], [85.5, 779.0], [85.6, 780.0], [85.7, 782.0], [85.8, 784.0], [85.9, 786.0], [86.0, 788.0], [86.1, 791.0], [86.2, 792.0], [86.3, 793.0], [86.4, 797.0], [86.5, 800.0], [86.6, 802.0], [86.7, 806.0], [86.8, 810.0], [86.9, 813.0], [87.0, 815.0], [87.1, 816.0], [87.2, 818.0], [87.3, 819.0], [87.4, 821.0], [87.5, 826.0], [87.6, 828.0], [87.7, 831.0], [87.8, 833.0], [87.9, 835.0], [88.0, 839.0], [88.1, 841.0], [88.2, 843.0], [88.3, 846.0], [88.4, 849.0], [88.5, 852.0], [88.6, 854.0], [88.7, 857.0], [88.8, 862.0], [88.9, 864.0], [89.0, 869.0], [89.1, 872.0], [89.2, 875.0], [89.3, 878.0], [89.4, 883.0], [89.5, 886.0], [89.6, 890.0], [89.7, 895.0], [89.8, 898.0], [89.9, 901.0], [90.0, 902.0], [90.1, 904.0], [90.2, 906.0], [90.3, 911.0], [90.4, 913.0], [90.5, 917.0], [90.6, 922.0], [90.7, 926.0], [90.8, 929.0], [90.9, 932.0], [91.0, 939.0], [91.1, 950.0], [91.2, 956.0], [91.3, 962.0], [91.4, 968.0], [91.5, 974.0], [91.6, 982.0], [91.7, 990.0], [91.8, 993.0], [91.9, 1001.0], [92.0, 1008.0], [92.1, 1012.0], [92.2, 1015.0], [92.3, 1017.0], [92.4, 1029.0], [92.5, 1042.0], [92.6, 1049.0], [92.7, 1057.0], [92.8, 1063.0], [92.9, 1068.0], [93.0, 1071.0], [93.1, 1078.0], [93.2, 1083.0], [93.3, 1087.0], [93.4, 1098.0], [93.5, 1103.0], [93.6, 1118.0], [93.7, 1122.0], [93.8, 1128.0], [93.9, 1134.0], [94.0, 1140.0], [94.1, 1151.0], [94.2, 1156.0], [94.3, 1168.0], [94.4, 1175.0], [94.5, 1178.0], [94.6, 1182.0], [94.7, 1187.0], [94.8, 1190.0], [94.9, 1197.0], [95.0, 1204.0], [95.1, 1218.0], [95.2, 1223.0], [95.3, 1230.0], [95.4, 1235.0], [95.5, 1238.0], [95.6, 1247.0], [95.7, 1253.0], [95.8, 1261.0], [95.9, 1271.0], [96.0, 1289.0], [96.1, 1296.0], [96.2, 1309.0], [96.3, 1318.0], [96.4, 1339.0], [96.5, 1344.0], [96.6, 1353.0], [96.7, 1362.0], [96.8, 1380.0], [96.9, 1394.0], [97.0, 1406.0], [97.1, 1422.0], [97.2, 1430.0], [97.3, 1444.0], [97.4, 1452.0], [97.5, 1465.0], [97.6, 1484.0], [97.7, 1500.0], [97.8, 1536.0], [97.9, 1553.0], [98.0, 1581.0], [98.1, 1596.0], [98.2, 1635.0], [98.3, 1650.0], [98.4, 1675.0], [98.5, 1706.0], [98.6, 1756.0], [98.7, 1817.0], [98.8, 1842.0], [98.9, 1889.0], [99.0, 1929.0], [99.1, 1960.0], [99.2, 2008.0], [99.3, 2069.0], [99.4, 2200.0], [99.5, 2268.0], [99.6, 2427.0], [99.7, 2590.0], [99.8, 2628.0], [99.9, 2832.0], [100.0, 4348.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 1500.0, "series": [{"data": [[0.0, 1500.0], [600.0, 264.0], [700.0, 226.0], [800.0, 177.0], [900.0, 107.0], [1000.0, 80.0], [1100.0, 80.0], [1200.0, 64.0], [1300.0, 42.0], [1400.0, 39.0], [1500.0, 23.0], [100.0, 1064.0], [1600.0, 18.0], [1700.0, 11.0], [1800.0, 15.0], [1900.0, 12.0], [2000.0, 8.0], [2100.0, 3.0], [2200.0, 6.0], [2300.0, 2.0], [2400.0, 3.0], [2500.0, 8.0], [2600.0, 6.0], [2700.0, 1.0], [2800.0, 1.0], [3000.0, 1.0], [3100.0, 1.0], [200.0, 511.0], [3500.0, 1.0], [3700.0, 1.0], [4300.0, 1.0], [300.0, 378.0], [400.0, 347.0], [500.0, 261.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 4300.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 121.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 3800.0, "series": [{"data": [[0.0, 3800.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1341.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 121.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 8.333333333333334, "minX": 1.60440762E12, "maxY": 10.0, "series": [{"data": [[1.60440774E12, 10.0], [1.60440768E12, 10.0], [1.60440786E12, 8.333333333333334], [1.6044078E12, 10.0], [1.60440762E12, 9.895604395604396]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60440786E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 377.7916030534346, "minX": 1.0, "maxY": 4348.0, "series": [{"data": [[4.0, 1344.5], [8.0, 1582.5], [2.0, 2644.0], [1.0, 3577.0], [9.0, 827.8], [5.0, 1115.0], [10.0, 377.7916030534346], [6.0, 664.5], [3.0, 4348.0], [7.0, 553.6]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.984226529836569, 381.53401748384584]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 230.45, "minX": 1.60440762E12, "maxY": 1577954.1333333333, "series": [{"data": [[1.60440774E12, 919853.5166666667], [1.60440768E12, 1538759.8333333333], [1.60440786E12, 33605.0], [1.6044078E12, 1577954.1333333333], [1.60440762E12, 178706.88333333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60440774E12, 16294.783333333333], [1.60440768E12, 12278.85], [1.60440786E12, 230.45], [1.6044078E12, 13430.533333333333], [1.60440762E12, 3256.3333333333335]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60440786E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 311.867608581894, "minX": 1.60440762E12, "maxY": 2048.259259259259, "series": [{"data": [[1.60440774E12, 311.867608581894], [1.60440768E12, 422.8047921071174], [1.60440786E12, 2048.259259259259], [1.6044078E12, 389.31537962362154], [1.60440762E12, 429.82142857142844]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60440786E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 311.5478806907382, "minX": 1.60440762E12, "maxY": 2047.6296296296296, "series": [{"data": [[1.60440774E12, 311.5478806907382], [1.60440768E12, 422.20648343904213], [1.60440786E12, 2047.6296296296296], [1.6044078E12, 388.8260869565221], [1.60440762E12, 429.43406593406604]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60440786E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.007751937984496124, "minX": 1.60440762E12, "maxY": 0.24725274725274693, "series": [{"data": [[1.60440774E12, 0.014128728414442706], [1.60440768E12, 0.007751937984496124], [1.60440786E12, 0.037037037037037035], [1.6044078E12, 0.009733939000648935], [1.60440762E12, 0.24725274725274693]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60440786E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 38.0, "minX": 1.60440762E12, "maxY": 4348.0, "series": [{"data": [[1.60440774E12, 2659.0], [1.60440768E12, 2331.0], [1.60440786E12, 4348.0], [1.6044078E12, 2529.0], [1.60440762E12, 1825.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60440774E12, 45.207999544143675], [1.60440768E12, 49.0], [1.60440786E12, 607.0], [1.6044078E12, 46.0], [1.60440762E12, 52.28499991297722]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60440774E12, 46.0], [1.60440768E12, 49.0], [1.60440786E12, 607.0], [1.6044078E12, 46.0], [1.60440762E12, 52.613500034809114]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60440774E12, 46.0], [1.60440768E12, 49.0], [1.60440786E12, 607.0], [1.6044078E12, 46.0], [1.60440762E12, 52.46749995648861]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60440774E12, 38.0], [1.60440768E12, 42.0], [1.60440786E12, 607.0], [1.6044078E12, 42.0], [1.60440762E12, 44.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60440774E12, 153.0], [1.60440768E12, 299.0], [1.60440786E12, 1706.0], [1.6044078E12, 258.0], [1.60440762E12, 205.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60440786E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 57.5, "minX": 1.0, "maxY": 2460.5, "series": [{"data": [[3.0, 1386.0], [4.0, 1853.0], [5.0, 1931.0], [7.0, 1168.0], [8.0, 953.0], [9.0, 849.0], [10.0, 779.5], [11.0, 842.5], [12.0, 710.0], [13.0, 585.5], [14.0, 684.0], [15.0, 616.0], [16.0, 614.5], [17.0, 477.0], [18.0, 481.5], [19.0, 425.0], [20.0, 383.5], [21.0, 432.5], [22.0, 363.5], [23.0, 216.5], [24.0, 262.0], [25.0, 316.0], [26.0, 298.0], [28.0, 211.5], [29.0, 275.0], [30.0, 149.5], [31.0, 237.0], [32.0, 108.0], [33.0, 262.5], [34.0, 185.5], [35.0, 92.0], [37.0, 200.0], [36.0, 209.5], [38.0, 133.5], [40.0, 150.5], [42.0, 100.5], [45.0, 108.0], [44.0, 132.5], [47.0, 141.0], [46.0, 105.5], [48.0, 101.0], [49.0, 140.0], [50.0, 65.5], [51.0, 106.0], [52.0, 189.5], [54.0, 113.5], [56.0, 103.5], [58.0, 140.5], [59.0, 125.0], [60.0, 110.0], [63.0, 99.0], [67.0, 100.5], [64.0, 131.5], [66.0, 57.5], [72.0, 100.5], [80.0, 111.0], [1.0, 2460.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 80.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 57.5, "minX": 1.0, "maxY": 2460.5, "series": [{"data": [[3.0, 1386.0], [4.0, 1852.0], [5.0, 1931.0], [7.0, 1162.0], [8.0, 952.0], [9.0, 849.0], [10.0, 778.5], [11.0, 842.5], [12.0, 708.5], [13.0, 584.5], [14.0, 683.5], [15.0, 614.0], [16.0, 614.5], [17.0, 476.0], [18.0, 481.0], [19.0, 425.0], [20.0, 383.0], [21.0, 431.0], [22.0, 363.0], [23.0, 216.5], [24.0, 262.0], [25.0, 315.0], [26.0, 297.5], [28.0, 211.0], [29.0, 274.0], [30.0, 149.5], [31.0, 237.0], [32.0, 108.0], [33.0, 262.5], [34.0, 185.5], [35.0, 92.0], [37.0, 200.0], [36.0, 209.5], [38.0, 133.5], [40.0, 150.0], [42.0, 100.5], [45.0, 108.0], [44.0, 132.5], [47.0, 141.0], [46.0, 105.5], [48.0, 101.0], [49.0, 140.0], [50.0, 65.5], [51.0, 106.0], [52.0, 189.5], [54.0, 113.5], [56.0, 103.5], [58.0, 140.5], [59.0, 125.0], [60.0, 109.5], [63.0, 98.0], [67.0, 100.5], [64.0, 131.5], [66.0, 57.5], [72.0, 100.5], [80.0, 111.0], [1.0, 2460.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 80.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.2833333333333333, "minX": 1.60440762E12, "maxY": 31.85, "series": [{"data": [[1.60440774E12, 31.85], [1.60440768E12, 23.65], [1.60440786E12, 0.2833333333333333], [1.6044078E12, 25.683333333333334], [1.60440762E12, 6.233333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60440786E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.45, "minX": 1.60440762E12, "maxY": 31.85, "series": [{"data": [[1.60440774E12, 31.85], [1.60440768E12, 23.65], [1.60440786E12, 0.45], [1.6044078E12, 25.683333333333334], [1.60440762E12, 6.066666666666666]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60440786E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.45, "minX": 1.60440762E12, "maxY": 31.85, "series": [{"data": [[1.60440774E12, 31.85], [1.60440768E12, 23.65], [1.60440786E12, 0.45], [1.6044078E12, 25.683333333333334], [1.60440762E12, 6.066666666666666]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60440786E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.45, "minX": 1.60440762E12, "maxY": 31.85, "series": [{"data": [[1.60440774E12, 31.85], [1.60440768E12, 23.65], [1.60440786E12, 0.45], [1.6044078E12, 25.683333333333334], [1.60440762E12, 6.066666666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60440786E12, "title": "Total Transactions Per Second"}},
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

