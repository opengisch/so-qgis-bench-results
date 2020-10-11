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
        data: {"result": {"minY": 31.0, "minX": 0.0, "maxY": 2986.0, "series": [{"data": [[0.0, 31.0], [0.1, 32.0], [0.2, 33.0], [0.3, 34.0], [0.4, 34.0], [0.5, 35.0], [0.6, 35.0], [0.7, 36.0], [0.8, 36.0], [0.9, 36.0], [1.0, 36.0], [1.1, 36.0], [1.2, 37.0], [1.3, 37.0], [1.4, 37.0], [1.5, 37.0], [1.6, 37.0], [1.7, 37.0], [1.8, 37.0], [1.9, 38.0], [2.0, 38.0], [2.1, 38.0], [2.2, 38.0], [2.3, 38.0], [2.4, 38.0], [2.5, 38.0], [2.6, 38.0], [2.7, 39.0], [2.8, 39.0], [2.9, 39.0], [3.0, 39.0], [3.1, 39.0], [3.2, 39.0], [3.3, 39.0], [3.4, 39.0], [3.5, 39.0], [3.6, 39.0], [3.7, 39.0], [3.8, 39.0], [3.9, 40.0], [4.0, 40.0], [4.1, 40.0], [4.2, 40.0], [4.3, 40.0], [4.4, 40.0], [4.5, 40.0], [4.6, 40.0], [4.7, 40.0], [4.8, 40.0], [4.9, 40.0], [5.0, 40.0], [5.1, 40.0], [5.2, 40.0], [5.3, 40.0], [5.4, 41.0], [5.5, 41.0], [5.6, 41.0], [5.7, 41.0], [5.8, 41.0], [5.9, 41.0], [6.0, 41.0], [6.1, 41.0], [6.2, 41.0], [6.3, 41.0], [6.4, 41.0], [6.5, 41.0], [6.6, 41.0], [6.7, 42.0], [6.8, 42.0], [6.9, 42.0], [7.0, 42.0], [7.1, 42.0], [7.2, 42.0], [7.3, 42.0], [7.4, 42.0], [7.5, 42.0], [7.6, 42.0], [7.7, 42.0], [7.8, 42.0], [7.9, 42.0], [8.0, 42.0], [8.1, 43.0], [8.2, 43.0], [8.3, 43.0], [8.4, 43.0], [8.5, 43.0], [8.6, 43.0], [8.7, 43.0], [8.8, 43.0], [8.9, 43.0], [9.0, 43.0], [9.1, 43.0], [9.2, 43.0], [9.3, 43.0], [9.4, 44.0], [9.5, 44.0], [9.6, 44.0], [9.7, 44.0], [9.8, 44.0], [9.9, 44.0], [10.0, 44.0], [10.1, 44.0], [10.2, 44.0], [10.3, 44.0], [10.4, 45.0], [10.5, 45.0], [10.6, 45.0], [10.7, 45.0], [10.8, 45.0], [10.9, 45.0], [11.0, 45.0], [11.1, 45.0], [11.2, 45.0], [11.3, 45.0], [11.4, 45.0], [11.5, 46.0], [11.6, 46.0], [11.7, 46.0], [11.8, 46.0], [11.9, 46.0], [12.0, 46.0], [12.1, 46.0], [12.2, 46.0], [12.3, 46.0], [12.4, 46.0], [12.5, 46.0], [12.6, 46.0], [12.7, 47.0], [12.8, 47.0], [12.9, 47.0], [13.0, 47.0], [13.1, 47.0], [13.2, 47.0], [13.3, 47.0], [13.4, 47.0], [13.5, 48.0], [13.6, 48.0], [13.7, 48.0], [13.8, 48.0], [13.9, 48.0], [14.0, 48.0], [14.1, 49.0], [14.2, 49.0], [14.3, 49.0], [14.4, 50.0], [14.5, 50.0], [14.6, 50.0], [14.7, 51.0], [14.8, 51.0], [14.9, 51.0], [15.0, 52.0], [15.1, 52.0], [15.2, 52.0], [15.3, 53.0], [15.4, 53.0], [15.5, 54.0], [15.6, 54.0], [15.7, 54.0], [15.8, 55.0], [15.9, 56.0], [16.0, 56.0], [16.1, 56.0], [16.2, 57.0], [16.3, 57.0], [16.4, 58.0], [16.5, 58.0], [16.6, 59.0], [16.7, 59.0], [16.8, 60.0], [16.9, 60.0], [17.0, 60.0], [17.1, 61.0], [17.2, 61.0], [17.3, 62.0], [17.4, 62.0], [17.5, 63.0], [17.6, 63.0], [17.7, 63.0], [17.8, 64.0], [17.9, 64.0], [18.0, 64.0], [18.1, 65.0], [18.2, 65.0], [18.3, 65.0], [18.4, 66.0], [18.5, 66.0], [18.6, 66.0], [18.7, 67.0], [18.8, 67.0], [18.9, 67.0], [19.0, 67.0], [19.1, 68.0], [19.2, 68.0], [19.3, 68.0], [19.4, 69.0], [19.5, 69.0], [19.6, 69.0], [19.7, 69.0], [19.8, 70.0], [19.9, 70.0], [20.0, 70.0], [20.1, 70.0], [20.2, 70.0], [20.3, 71.0], [20.4, 71.0], [20.5, 71.0], [20.6, 71.0], [20.7, 71.0], [20.8, 71.0], [20.9, 71.0], [21.0, 72.0], [21.1, 72.0], [21.2, 72.0], [21.3, 72.0], [21.4, 72.0], [21.5, 72.0], [21.6, 72.0], [21.7, 73.0], [21.8, 73.0], [21.9, 73.0], [22.0, 73.0], [22.1, 73.0], [22.2, 73.0], [22.3, 73.0], [22.4, 73.0], [22.5, 74.0], [22.6, 74.0], [22.7, 74.0], [22.8, 74.0], [22.9, 74.0], [23.0, 74.0], [23.1, 74.0], [23.2, 74.0], [23.3, 74.0], [23.4, 75.0], [23.5, 75.0], [23.6, 75.0], [23.7, 75.0], [23.8, 75.0], [23.9, 75.0], [24.0, 75.0], [24.1, 75.0], [24.2, 75.0], [24.3, 75.0], [24.4, 75.0], [24.5, 76.0], [24.6, 76.0], [24.7, 76.0], [24.8, 76.0], [24.9, 76.0], [25.0, 76.0], [25.1, 76.0], [25.2, 76.0], [25.3, 76.0], [25.4, 76.0], [25.5, 76.0], [25.6, 76.0], [25.7, 77.0], [25.8, 77.0], [25.9, 77.0], [26.0, 77.0], [26.1, 77.0], [26.2, 77.0], [26.3, 77.0], [26.4, 77.0], [26.5, 77.0], [26.6, 77.0], [26.7, 77.0], [26.8, 77.0], [26.9, 77.0], [27.0, 77.0], [27.1, 77.0], [27.2, 78.0], [27.3, 78.0], [27.4, 78.0], [27.5, 78.0], [27.6, 78.0], [27.7, 78.0], [27.8, 78.0], [27.9, 78.0], [28.0, 78.0], [28.1, 79.0], [28.2, 79.0], [28.3, 79.0], [28.4, 79.0], [28.5, 79.0], [28.6, 79.0], [28.7, 79.0], [28.8, 79.0], [28.9, 79.0], [29.0, 79.0], [29.1, 79.0], [29.2, 79.0], [29.3, 79.0], [29.4, 80.0], [29.5, 80.0], [29.6, 80.0], [29.7, 80.0], [29.8, 80.0], [29.9, 80.0], [30.0, 80.0], [30.1, 80.0], [30.2, 80.0], [30.3, 80.0], [30.4, 80.0], [30.5, 80.0], [30.6, 80.0], [30.7, 81.0], [30.8, 81.0], [30.9, 81.0], [31.0, 81.0], [31.1, 81.0], [31.2, 81.0], [31.3, 81.0], [31.4, 81.0], [31.5, 81.0], [31.6, 81.0], [31.7, 82.0], [31.8, 82.0], [31.9, 82.0], [32.0, 82.0], [32.1, 82.0], [32.2, 82.0], [32.3, 82.0], [32.4, 82.0], [32.5, 83.0], [32.6, 83.0], [32.7, 83.0], [32.8, 83.0], [32.9, 83.0], [33.0, 83.0], [33.1, 83.0], [33.2, 83.0], [33.3, 84.0], [33.4, 84.0], [33.5, 84.0], [33.6, 84.0], [33.7, 84.0], [33.8, 84.0], [33.9, 84.0], [34.0, 84.0], [34.1, 84.0], [34.2, 85.0], [34.3, 85.0], [34.4, 85.0], [34.5, 85.0], [34.6, 85.0], [34.7, 85.0], [34.8, 86.0], [34.9, 86.0], [35.0, 86.0], [35.1, 86.0], [35.2, 87.0], [35.3, 87.0], [35.4, 87.0], [35.5, 87.0], [35.6, 87.0], [35.7, 87.0], [35.8, 87.0], [35.9, 87.0], [36.0, 87.0], [36.1, 88.0], [36.2, 88.0], [36.3, 88.0], [36.4, 88.0], [36.5, 88.0], [36.6, 89.0], [36.7, 89.0], [36.8, 89.0], [36.9, 89.0], [37.0, 90.0], [37.1, 90.0], [37.2, 90.0], [37.3, 90.0], [37.4, 90.0], [37.5, 91.0], [37.6, 91.0], [37.7, 91.0], [37.8, 91.0], [37.9, 92.0], [38.0, 92.0], [38.1, 92.0], [38.2, 93.0], [38.3, 93.0], [38.4, 94.0], [38.5, 94.0], [38.6, 94.0], [38.7, 95.0], [38.8, 95.0], [38.9, 96.0], [39.0, 96.0], [39.1, 96.0], [39.2, 97.0], [39.3, 97.0], [39.4, 97.0], [39.5, 98.0], [39.6, 98.0], [39.7, 99.0], [39.8, 99.0], [39.9, 100.0], [40.0, 100.0], [40.1, 101.0], [40.2, 101.0], [40.3, 102.0], [40.4, 102.0], [40.5, 103.0], [40.6, 104.0], [40.7, 104.0], [40.8, 105.0], [40.9, 106.0], [41.0, 107.0], [41.1, 108.0], [41.2, 108.0], [41.3, 109.0], [41.4, 110.0], [41.5, 110.0], [41.6, 112.0], [41.7, 112.0], [41.8, 113.0], [41.9, 114.0], [42.0, 115.0], [42.1, 115.0], [42.2, 116.0], [42.3, 116.0], [42.4, 117.0], [42.5, 118.0], [42.6, 120.0], [42.7, 120.0], [42.8, 121.0], [42.9, 121.0], [43.0, 122.0], [43.1, 122.0], [43.2, 123.0], [43.3, 125.0], [43.4, 126.0], [43.5, 128.0], [43.6, 128.0], [43.7, 129.0], [43.8, 130.0], [43.9, 131.0], [44.0, 132.0], [44.1, 134.0], [44.2, 135.0], [44.3, 137.0], [44.4, 138.0], [44.5, 140.0], [44.6, 141.0], [44.7, 142.0], [44.8, 142.0], [44.9, 144.0], [45.0, 145.0], [45.1, 146.0], [45.2, 146.0], [45.3, 147.0], [45.4, 147.0], [45.5, 149.0], [45.6, 149.0], [45.7, 150.0], [45.8, 150.0], [45.9, 151.0], [46.0, 152.0], [46.1, 153.0], [46.2, 153.0], [46.3, 154.0], [46.4, 155.0], [46.5, 155.0], [46.6, 156.0], [46.7, 156.0], [46.8, 157.0], [46.9, 158.0], [47.0, 159.0], [47.1, 160.0], [47.2, 160.0], [47.3, 160.0], [47.4, 161.0], [47.5, 163.0], [47.6, 163.0], [47.7, 164.0], [47.8, 166.0], [47.9, 167.0], [48.0, 168.0], [48.1, 169.0], [48.2, 170.0], [48.3, 170.0], [48.4, 171.0], [48.5, 172.0], [48.6, 174.0], [48.7, 175.0], [48.8, 175.0], [48.9, 177.0], [49.0, 179.0], [49.1, 180.0], [49.2, 181.0], [49.3, 182.0], [49.4, 183.0], [49.5, 184.0], [49.6, 185.0], [49.7, 186.0], [49.8, 187.0], [49.9, 189.0], [50.0, 190.0], [50.1, 190.0], [50.2, 191.0], [50.3, 193.0], [50.4, 195.0], [50.5, 196.0], [50.6, 197.0], [50.7, 199.0], [50.8, 200.0], [50.9, 202.0], [51.0, 203.0], [51.1, 203.0], [51.2, 205.0], [51.3, 205.0], [51.4, 207.0], [51.5, 207.0], [51.6, 209.0], [51.7, 210.0], [51.8, 211.0], [51.9, 213.0], [52.0, 214.0], [52.1, 215.0], [52.2, 215.0], [52.3, 217.0], [52.4, 218.0], [52.5, 219.0], [52.6, 220.0], [52.7, 221.0], [52.8, 222.0], [52.9, 224.0], [53.0, 225.0], [53.1, 226.0], [53.2, 226.0], [53.3, 227.0], [53.4, 228.0], [53.5, 228.0], [53.6, 229.0], [53.7, 230.0], [53.8, 231.0], [53.9, 232.0], [54.0, 233.0], [54.1, 234.0], [54.2, 235.0], [54.3, 236.0], [54.4, 237.0], [54.5, 237.0], [54.6, 239.0], [54.7, 240.0], [54.8, 241.0], [54.9, 242.0], [55.0, 244.0], [55.1, 244.0], [55.2, 245.0], [55.3, 246.0], [55.4, 246.0], [55.5, 247.0], [55.6, 248.0], [55.7, 249.0], [55.8, 250.0], [55.9, 251.0], [56.0, 252.0], [56.1, 253.0], [56.2, 254.0], [56.3, 255.0], [56.4, 256.0], [56.5, 257.0], [56.6, 257.0], [56.7, 259.0], [56.8, 261.0], [56.9, 262.0], [57.0, 263.0], [57.1, 265.0], [57.2, 266.0], [57.3, 267.0], [57.4, 268.0], [57.5, 268.0], [57.6, 270.0], [57.7, 271.0], [57.8, 272.0], [57.9, 273.0], [58.0, 275.0], [58.1, 276.0], [58.2, 277.0], [58.3, 278.0], [58.4, 279.0], [58.5, 280.0], [58.6, 281.0], [58.7, 282.0], [58.8, 283.0], [58.9, 283.0], [59.0, 284.0], [59.1, 285.0], [59.2, 286.0], [59.3, 287.0], [59.4, 288.0], [59.5, 289.0], [59.6, 290.0], [59.7, 291.0], [59.8, 291.0], [59.9, 292.0], [60.0, 293.0], [60.1, 294.0], [60.2, 296.0], [60.3, 298.0], [60.4, 300.0], [60.5, 300.0], [60.6, 302.0], [60.7, 304.0], [60.8, 305.0], [60.9, 306.0], [61.0, 308.0], [61.1, 310.0], [61.2, 311.0], [61.3, 312.0], [61.4, 314.0], [61.5, 315.0], [61.6, 316.0], [61.7, 317.0], [61.8, 318.0], [61.9, 320.0], [62.0, 321.0], [62.1, 322.0], [62.2, 324.0], [62.3, 325.0], [62.4, 326.0], [62.5, 327.0], [62.6, 330.0], [62.7, 331.0], [62.8, 332.0], [62.9, 333.0], [63.0, 334.0], [63.1, 337.0], [63.2, 339.0], [63.3, 342.0], [63.4, 342.0], [63.5, 344.0], [63.6, 345.0], [63.7, 347.0], [63.8, 349.0], [63.9, 351.0], [64.0, 354.0], [64.1, 355.0], [64.2, 357.0], [64.3, 359.0], [64.4, 360.0], [64.5, 362.0], [64.6, 364.0], [64.7, 366.0], [64.8, 366.0], [64.9, 368.0], [65.0, 369.0], [65.1, 371.0], [65.2, 373.0], [65.3, 375.0], [65.4, 376.0], [65.5, 378.0], [65.6, 380.0], [65.7, 380.0], [65.8, 381.0], [65.9, 382.0], [66.0, 383.0], [66.1, 387.0], [66.2, 388.0], [66.3, 389.0], [66.4, 390.0], [66.5, 392.0], [66.6, 394.0], [66.7, 394.0], [66.8, 397.0], [66.9, 398.0], [67.0, 399.0], [67.1, 399.0], [67.2, 400.0], [67.3, 402.0], [67.4, 403.0], [67.5, 404.0], [67.6, 406.0], [67.7, 407.0], [67.8, 409.0], [67.9, 410.0], [68.0, 411.0], [68.1, 413.0], [68.2, 415.0], [68.3, 416.0], [68.4, 418.0], [68.5, 418.0], [68.6, 420.0], [68.7, 420.0], [68.8, 422.0], [68.9, 424.0], [69.0, 427.0], [69.1, 428.0], [69.2, 429.0], [69.3, 430.0], [69.4, 433.0], [69.5, 433.0], [69.6, 434.0], [69.7, 435.0], [69.8, 437.0], [69.9, 438.0], [70.0, 440.0], [70.1, 440.0], [70.2, 441.0], [70.3, 442.0], [70.4, 443.0], [70.5, 445.0], [70.6, 447.0], [70.7, 449.0], [70.8, 450.0], [70.9, 452.0], [71.0, 455.0], [71.1, 456.0], [71.2, 457.0], [71.3, 458.0], [71.4, 460.0], [71.5, 461.0], [71.6, 463.0], [71.7, 465.0], [71.8, 466.0], [71.9, 468.0], [72.0, 469.0], [72.1, 470.0], [72.2, 472.0], [72.3, 473.0], [72.4, 473.0], [72.5, 475.0], [72.6, 476.0], [72.7, 478.0], [72.8, 479.0], [72.9, 482.0], [73.0, 484.0], [73.1, 486.0], [73.2, 487.0], [73.3, 489.0], [73.4, 491.0], [73.5, 493.0], [73.6, 494.0], [73.7, 495.0], [73.8, 497.0], [73.9, 501.0], [74.0, 503.0], [74.1, 506.0], [74.2, 507.0], [74.3, 509.0], [74.4, 510.0], [74.5, 512.0], [74.6, 515.0], [74.7, 517.0], [74.8, 520.0], [74.9, 522.0], [75.0, 524.0], [75.1, 526.0], [75.2, 528.0], [75.3, 529.0], [75.4, 531.0], [75.5, 533.0], [75.6, 534.0], [75.7, 535.0], [75.8, 536.0], [75.9, 538.0], [76.0, 541.0], [76.1, 542.0], [76.2, 544.0], [76.3, 545.0], [76.4, 547.0], [76.5, 549.0], [76.6, 552.0], [76.7, 554.0], [76.8, 556.0], [76.9, 560.0], [77.0, 561.0], [77.1, 563.0], [77.2, 566.0], [77.3, 568.0], [77.4, 570.0], [77.5, 572.0], [77.6, 574.0], [77.7, 576.0], [77.8, 577.0], [77.9, 580.0], [78.0, 581.0], [78.1, 585.0], [78.2, 587.0], [78.3, 590.0], [78.4, 591.0], [78.5, 592.0], [78.6, 594.0], [78.7, 597.0], [78.8, 598.0], [78.9, 599.0], [79.0, 600.0], [79.1, 603.0], [79.2, 606.0], [79.3, 607.0], [79.4, 610.0], [79.5, 611.0], [79.6, 615.0], [79.7, 619.0], [79.8, 620.0], [79.9, 622.0], [80.0, 625.0], [80.1, 627.0], [80.2, 630.0], [80.3, 633.0], [80.4, 635.0], [80.5, 636.0], [80.6, 639.0], [80.7, 643.0], [80.8, 648.0], [80.9, 650.0], [81.0, 653.0], [81.1, 655.0], [81.2, 658.0], [81.3, 661.0], [81.4, 663.0], [81.5, 665.0], [81.6, 667.0], [81.7, 673.0], [81.8, 676.0], [81.9, 678.0], [82.0, 681.0], [82.1, 684.0], [82.2, 686.0], [82.3, 688.0], [82.4, 690.0], [82.5, 693.0], [82.6, 696.0], [82.7, 701.0], [82.8, 703.0], [82.9, 706.0], [83.0, 708.0], [83.1, 710.0], [83.2, 711.0], [83.3, 715.0], [83.4, 717.0], [83.5, 720.0], [83.6, 723.0], [83.7, 724.0], [83.8, 727.0], [83.9, 731.0], [84.0, 733.0], [84.1, 735.0], [84.2, 739.0], [84.3, 743.0], [84.4, 745.0], [84.5, 748.0], [84.6, 749.0], [84.7, 751.0], [84.8, 754.0], [84.9, 757.0], [85.0, 760.0], [85.1, 762.0], [85.2, 765.0], [85.3, 766.0], [85.4, 767.0], [85.5, 769.0], [85.6, 771.0], [85.7, 773.0], [85.8, 777.0], [85.9, 779.0], [86.0, 780.0], [86.1, 783.0], [86.2, 786.0], [86.3, 788.0], [86.4, 789.0], [86.5, 791.0], [86.6, 793.0], [86.7, 794.0], [86.8, 797.0], [86.9, 798.0], [87.0, 800.0], [87.1, 803.0], [87.2, 805.0], [87.3, 807.0], [87.4, 809.0], [87.5, 811.0], [87.6, 814.0], [87.7, 814.0], [87.8, 818.0], [87.9, 820.0], [88.0, 824.0], [88.1, 825.0], [88.2, 826.0], [88.3, 830.0], [88.4, 832.0], [88.5, 834.0], [88.6, 837.0], [88.7, 839.0], [88.8, 843.0], [88.9, 846.0], [89.0, 852.0], [89.1, 853.0], [89.2, 856.0], [89.3, 859.0], [89.4, 862.0], [89.5, 866.0], [89.6, 870.0], [89.7, 874.0], [89.8, 878.0], [89.9, 880.0], [90.0, 882.0], [90.1, 892.0], [90.2, 899.0], [90.3, 905.0], [90.4, 913.0], [90.5, 916.0], [90.6, 921.0], [90.7, 923.0], [90.8, 928.0], [90.9, 937.0], [91.0, 941.0], [91.1, 945.0], [91.2, 953.0], [91.3, 961.0], [91.4, 968.0], [91.5, 971.0], [91.6, 975.0], [91.7, 980.0], [91.8, 983.0], [91.9, 989.0], [92.0, 992.0], [92.1, 997.0], [92.2, 1006.0], [92.3, 1015.0], [92.4, 1022.0], [92.5, 1031.0], [92.6, 1038.0], [92.7, 1042.0], [92.8, 1050.0], [92.9, 1055.0], [93.0, 1062.0], [93.1, 1071.0], [93.2, 1078.0], [93.3, 1085.0], [93.4, 1088.0], [93.5, 1091.0], [93.6, 1102.0], [93.7, 1106.0], [93.8, 1110.0], [93.9, 1118.0], [94.0, 1121.0], [94.1, 1124.0], [94.2, 1127.0], [94.3, 1135.0], [94.4, 1143.0], [94.5, 1149.0], [94.6, 1153.0], [94.7, 1162.0], [94.8, 1168.0], [94.9, 1173.0], [95.0, 1176.0], [95.1, 1184.0], [95.2, 1198.0], [95.3, 1213.0], [95.4, 1215.0], [95.5, 1226.0], [95.6, 1234.0], [95.7, 1242.0], [95.8, 1249.0], [95.9, 1264.0], [96.0, 1279.0], [96.1, 1294.0], [96.2, 1315.0], [96.3, 1321.0], [96.4, 1359.0], [96.5, 1371.0], [96.6, 1390.0], [96.7, 1399.0], [96.8, 1412.0], [96.9, 1442.0], [97.0, 1455.0], [97.1, 1463.0], [97.2, 1467.0], [97.3, 1490.0], [97.4, 1496.0], [97.5, 1505.0], [97.6, 1518.0], [97.7, 1531.0], [97.8, 1583.0], [97.9, 1603.0], [98.0, 1611.0], [98.1, 1633.0], [98.2, 1652.0], [98.3, 1678.0], [98.4, 1696.0], [98.5, 1745.0], [98.6, 1769.0], [98.7, 1783.0], [98.8, 1799.0], [98.9, 1809.0], [99.0, 1829.0], [99.1, 1858.0], [99.2, 1886.0], [99.3, 1973.0], [99.4, 2058.0], [99.5, 2141.0], [99.6, 2240.0], [99.7, 2329.0], [99.8, 2403.0], [99.9, 2548.0], [100.0, 2986.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 2097.0, "series": [{"data": [[0.0, 2097.0], [600.0, 198.0], [700.0, 226.0], [800.0, 172.0], [900.0, 100.0], [1000.0, 77.0], [1100.0, 85.0], [1200.0, 49.0], [1300.0, 30.0], [1400.0, 39.0], [1500.0, 23.0], [100.0, 572.0], [1600.0, 27.0], [1700.0, 21.0], [1800.0, 22.0], [1900.0, 5.0], [2000.0, 6.0], [2100.0, 8.0], [2300.0, 6.0], [2200.0, 5.0], [2400.0, 3.0], [2500.0, 3.0], [2700.0, 1.0], [2800.0, 2.0], [2900.0, 2.0], [200.0, 509.0], [300.0, 355.0], [400.0, 355.0], [500.0, 264.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 2900.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 132.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 3888.0, "series": [{"data": [[0.0, 3888.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1242.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 132.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.958448753462603, "minX": 1.60238634E12, "maxY": 10.0, "series": [{"data": [[1.60238652E12, 9.958448753462603], [1.60238634E12, 9.968609865470848], [1.60238646E12, 10.0], [1.6023864E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60238652E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 357.3359375000001, "minX": 1.0, "maxY": 2962.0, "series": [{"data": [[4.0, 1272.5], [8.0, 1540.0], [2.0, 2962.0], [1.0, 2894.0], [9.0, 2447.0], [5.0, 819.0], [10.0, 357.3359375000001], [6.0, 1119.0], [3.0, 2366.0], [7.0, 1568.5]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.98745724059291, 360.75750665146285]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 5725.116666666667, "minX": 1.60238634E12, "maxY": 1381091.9166666667, "series": [{"data": [[1.60238652E12, 1101129.8666666667], [1.60238634E12, 426484.2833333333], [1.60238646E12, 1342233.6833333333], [1.6023864E12, 1381091.9166666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60238652E12, 9576.266666666666], [1.60238634E12, 5725.116666666667], [1.60238646E12, 17318.816666666666], [1.6023864E12, 12870.75]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60238652E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 289.5351770984962, "minX": 1.60238634E12, "maxY": 417.58818097876275, "series": [{"data": [[1.60238652E12, 417.58818097876275], [1.60238634E12, 372.37817638266074], [1.60238646E12, 289.5351770984962], [1.6023864E12, 414.22015182884763]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60238652E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 289.1887433284812, "minX": 1.60238634E12, "maxY": 417.1024930747918, "series": [{"data": [[1.60238652E12, 417.1024930747918], [1.60238634E12, 372.0014947683111], [1.60238646E12, 289.1887433284812], [1.6023864E12, 413.71014492753625]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60238652E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.009661835748792284, "minX": 1.60238634E12, "maxY": 0.15545590433482848, "series": [{"data": [[1.60238652E12, 0.013850415512465384], [1.60238634E12, 0.15545590433482848], [1.60238646E12, 0.012130033964095104], [1.6023864E12, 0.009661835748792284]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60238652E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 31.0, "minX": 1.60238634E12, "maxY": 2986.0, "series": [{"data": [[1.60238652E12, 2986.0], [1.60238634E12, 1654.0], [1.60238646E12, 2138.0], [1.6023864E12, 2382.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60238652E12, 35.0], [1.60238634E12, 39.02999984025955], [1.60238646E12, 36.55799950838089], [1.6023864E12, 36.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60238652E12, 35.0], [1.60238634E12, 39.633000063896176], [1.60238646E12, 37.0], [1.6023864E12, 36.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60238652E12, 35.0], [1.60238634E12, 39.364999920129776], [1.60238646E12, 37.0], [1.6023864E12, 36.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60238652E12, 33.0], [1.60238634E12, 36.0], [1.60238646E12, 31.0], [1.6023864E12, 31.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60238652E12, 246.0], [1.60238634E12, 254.0], [1.60238646E12, 155.0], [1.6023864E12, 234.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60238652E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 61.0, "minX": 1.0, "maxY": 2894.0, "series": [{"data": [[3.0, 2510.0], [4.0, 2384.5], [5.0, 1596.0], [6.0, 1271.0], [7.0, 833.5], [8.0, 1743.5], [9.0, 816.0], [10.0, 833.0], [11.0, 797.0], [12.0, 750.0], [13.0, 670.5], [14.0, 664.5], [15.0, 649.0], [16.0, 634.0], [17.0, 459.0], [18.0, 536.5], [19.0, 453.5], [20.0, 462.5], [21.0, 428.0], [22.0, 289.5], [23.0, 100.5], [25.0, 313.5], [26.0, 392.5], [27.0, 331.0], [28.0, 87.5], [29.0, 259.0], [30.0, 166.0], [31.0, 249.0], [32.0, 88.5], [33.0, 80.0], [35.0, 175.0], [34.0, 198.0], [36.0, 99.5], [37.0, 264.5], [38.0, 168.0], [40.0, 221.5], [41.0, 77.0], [43.0, 91.0], [42.0, 194.0], [44.0, 160.0], [45.0, 70.0], [47.0, 104.0], [46.0, 88.5], [50.0, 87.0], [51.0, 159.0], [52.0, 113.5], [54.0, 73.5], [55.0, 88.0], [56.0, 69.5], [57.0, 88.0], [58.0, 100.0], [59.0, 108.0], [61.0, 104.0], [64.0, 86.0], [65.0, 77.0], [66.0, 140.0], [73.0, 90.0], [75.0, 95.0], [76.0, 75.0], [77.0, 84.0], [81.0, 61.0], [1.0, 2894.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 81.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 61.0, "minX": 1.0, "maxY": 2894.0, "series": [{"data": [[3.0, 2509.0], [4.0, 2384.0], [5.0, 1594.0], [6.0, 1270.0], [7.0, 833.5], [8.0, 1740.5], [9.0, 816.0], [10.0, 832.0], [11.0, 796.0], [12.0, 748.5], [13.0, 669.5], [14.0, 664.5], [15.0, 647.5], [16.0, 633.0], [17.0, 459.0], [18.0, 536.5], [19.0, 453.5], [20.0, 462.0], [21.0, 427.0], [22.0, 288.5], [23.0, 100.5], [25.0, 313.5], [26.0, 392.5], [27.0, 331.0], [28.0, 87.0], [29.0, 259.0], [30.0, 165.5], [31.0, 249.0], [32.0, 88.0], [33.0, 79.0], [35.0, 175.0], [34.0, 198.0], [36.0, 99.5], [37.0, 264.0], [38.0, 168.0], [40.0, 221.0], [41.0, 77.0], [43.0, 91.0], [42.0, 194.0], [44.0, 160.0], [45.0, 70.0], [47.0, 103.5], [46.0, 88.5], [50.0, 87.0], [51.0, 159.0], [52.0, 112.5], [54.0, 73.0], [55.0, 87.5], [56.0, 69.5], [57.0, 88.0], [58.0, 100.0], [59.0, 108.0], [61.0, 103.5], [64.0, 86.0], [65.0, 77.0], [66.0, 139.5], [73.0, 90.0], [75.0, 94.0], [76.0, 75.0], [77.0, 84.0], [81.0, 61.0], [1.0, 2894.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 81.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 11.316666666666666, "minX": 1.60238634E12, "maxY": 34.35, "series": [{"data": [[1.60238652E12, 17.883333333333333], [1.60238634E12, 11.316666666666666], [1.60238646E12, 34.35], [1.6023864E12, 24.15]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60238652E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 11.15, "minX": 1.60238634E12, "maxY": 34.35, "series": [{"data": [[1.60238652E12, 18.05], [1.60238634E12, 11.15], [1.60238646E12, 34.35], [1.6023864E12, 24.15]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60238652E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 11.15, "minX": 1.60238634E12, "maxY": 34.35, "series": [{"data": [[1.60238652E12, 18.05], [1.60238634E12, 11.15], [1.60238646E12, 34.35], [1.6023864E12, 24.15]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60238652E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 11.15, "minX": 1.60238634E12, "maxY": 34.35, "series": [{"data": [[1.60238652E12, 18.05], [1.60238634E12, 11.15], [1.60238646E12, 34.35], [1.6023864E12, 24.15]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60238652E12, "title": "Total Transactions Per Second"}},
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

