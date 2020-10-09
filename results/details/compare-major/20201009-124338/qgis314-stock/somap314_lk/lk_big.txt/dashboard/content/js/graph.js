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
        data: {"result": {"minY": 33.0, "minX": 0.0, "maxY": 3685.0, "series": [{"data": [[0.0, 33.0], [0.1, 34.0], [0.2, 34.0], [0.3, 35.0], [0.4, 36.0], [0.5, 36.0], [0.6, 37.0], [0.7, 37.0], [0.8, 37.0], [0.9, 37.0], [1.0, 38.0], [1.1, 38.0], [1.2, 38.0], [1.3, 38.0], [1.4, 38.0], [1.5, 39.0], [1.6, 39.0], [1.7, 39.0], [1.8, 39.0], [1.9, 39.0], [2.0, 39.0], [2.1, 39.0], [2.2, 39.0], [2.3, 40.0], [2.4, 40.0], [2.5, 40.0], [2.6, 40.0], [2.7, 40.0], [2.8, 40.0], [2.9, 40.0], [3.0, 40.0], [3.1, 40.0], [3.2, 40.0], [3.3, 41.0], [3.4, 41.0], [3.5, 41.0], [3.6, 41.0], [3.7, 41.0], [3.8, 41.0], [3.9, 41.0], [4.0, 41.0], [4.1, 41.0], [4.2, 41.0], [4.3, 41.0], [4.4, 41.0], [4.5, 41.0], [4.6, 41.0], [4.7, 41.0], [4.8, 42.0], [4.9, 42.0], [5.0, 42.0], [5.1, 42.0], [5.2, 42.0], [5.3, 42.0], [5.4, 42.0], [5.5, 42.0], [5.6, 42.0], [5.7, 42.0], [5.8, 42.0], [5.9, 42.0], [6.0, 42.0], [6.1, 42.0], [6.2, 42.0], [6.3, 42.0], [6.4, 42.0], [6.5, 42.0], [6.6, 42.0], [6.7, 43.0], [6.8, 43.0], [6.9, 43.0], [7.0, 43.0], [7.1, 43.0], [7.2, 43.0], [7.3, 43.0], [7.4, 43.0], [7.5, 43.0], [7.6, 43.0], [7.7, 43.0], [7.8, 43.0], [7.9, 43.0], [8.0, 43.0], [8.1, 43.0], [8.2, 43.0], [8.3, 44.0], [8.4, 44.0], [8.5, 44.0], [8.6, 44.0], [8.7, 44.0], [8.8, 44.0], [8.9, 44.0], [9.0, 44.0], [9.1, 44.0], [9.2, 44.0], [9.3, 44.0], [9.4, 44.0], [9.5, 44.0], [9.6, 44.0], [9.7, 44.0], [9.8, 44.0], [9.9, 44.0], [10.0, 44.0], [10.1, 45.0], [10.2, 45.0], [10.3, 45.0], [10.4, 45.0], [10.5, 45.0], [10.6, 45.0], [10.7, 45.0], [10.8, 45.0], [10.9, 45.0], [11.0, 45.0], [11.1, 45.0], [11.2, 45.0], [11.3, 45.0], [11.4, 45.0], [11.5, 45.0], [11.6, 45.0], [11.7, 45.0], [11.8, 45.0], [11.9, 45.0], [12.0, 45.0], [12.1, 46.0], [12.2, 46.0], [12.3, 46.0], [12.4, 46.0], [12.5, 46.0], [12.6, 46.0], [12.7, 46.0], [12.8, 46.0], [12.9, 46.0], [13.0, 46.0], [13.1, 46.0], [13.2, 46.0], [13.3, 46.0], [13.4, 46.0], [13.5, 47.0], [13.6, 47.0], [13.7, 47.0], [13.8, 47.0], [13.9, 47.0], [14.0, 47.0], [14.1, 47.0], [14.2, 47.0], [14.3, 47.0], [14.4, 47.0], [14.5, 47.0], [14.6, 47.0], [14.7, 47.0], [14.8, 47.0], [14.9, 48.0], [15.0, 48.0], [15.1, 48.0], [15.2, 48.0], [15.3, 48.0], [15.4, 48.0], [15.5, 48.0], [15.6, 48.0], [15.7, 48.0], [15.8, 48.0], [15.9, 48.0], [16.0, 48.0], [16.1, 49.0], [16.2, 49.0], [16.3, 49.0], [16.4, 49.0], [16.5, 49.0], [16.6, 49.0], [16.7, 49.0], [16.8, 49.0], [16.9, 50.0], [17.0, 50.0], [17.1, 50.0], [17.2, 50.0], [17.3, 50.0], [17.4, 50.0], [17.5, 50.0], [17.6, 50.0], [17.7, 51.0], [17.8, 51.0], [17.9, 51.0], [18.0, 51.0], [18.1, 51.0], [18.2, 51.0], [18.3, 52.0], [18.4, 52.0], [18.5, 52.0], [18.6, 52.0], [18.7, 52.0], [18.8, 52.0], [18.9, 53.0], [19.0, 53.0], [19.1, 53.0], [19.2, 54.0], [19.3, 54.0], [19.4, 54.0], [19.5, 55.0], [19.6, 55.0], [19.7, 56.0], [19.8, 56.0], [19.9, 57.0], [20.0, 57.0], [20.1, 57.0], [20.2, 58.0], [20.3, 59.0], [20.4, 60.0], [20.5, 60.0], [20.6, 61.0], [20.7, 62.0], [20.8, 62.0], [20.9, 63.0], [21.0, 64.0], [21.1, 65.0], [21.2, 65.0], [21.3, 65.0], [21.4, 66.0], [21.5, 66.0], [21.6, 67.0], [21.7, 67.0], [21.8, 67.0], [21.9, 68.0], [22.0, 68.0], [22.1, 68.0], [22.2, 69.0], [22.3, 70.0], [22.4, 70.0], [22.5, 70.0], [22.6, 71.0], [22.7, 71.0], [22.8, 72.0], [22.9, 72.0], [23.0, 72.0], [23.1, 73.0], [23.2, 73.0], [23.3, 73.0], [23.4, 73.0], [23.5, 74.0], [23.6, 74.0], [23.7, 74.0], [23.8, 75.0], [23.9, 75.0], [24.0, 75.0], [24.1, 75.0], [24.2, 76.0], [24.3, 76.0], [24.4, 76.0], [24.5, 77.0], [24.6, 77.0], [24.7, 77.0], [24.8, 77.0], [24.9, 77.0], [25.0, 78.0], [25.1, 78.0], [25.2, 78.0], [25.3, 78.0], [25.4, 78.0], [25.5, 79.0], [25.6, 79.0], [25.7, 79.0], [25.8, 79.0], [25.9, 79.0], [26.0, 79.0], [26.1, 79.0], [26.2, 79.0], [26.3, 80.0], [26.4, 80.0], [26.5, 80.0], [26.6, 80.0], [26.7, 80.0], [26.8, 80.0], [26.9, 80.0], [27.0, 81.0], [27.1, 81.0], [27.2, 81.0], [27.3, 81.0], [27.4, 81.0], [27.5, 81.0], [27.6, 81.0], [27.7, 81.0], [27.8, 82.0], [27.9, 82.0], [28.0, 82.0], [28.1, 82.0], [28.2, 82.0], [28.3, 82.0], [28.4, 82.0], [28.5, 82.0], [28.6, 82.0], [28.7, 82.0], [28.8, 83.0], [28.9, 83.0], [29.0, 83.0], [29.1, 83.0], [29.2, 83.0], [29.3, 83.0], [29.4, 84.0], [29.5, 84.0], [29.6, 84.0], [29.7, 84.0], [29.8, 84.0], [29.9, 84.0], [30.0, 84.0], [30.1, 84.0], [30.2, 84.0], [30.3, 84.0], [30.4, 85.0], [30.5, 85.0], [30.6, 85.0], [30.7, 85.0], [30.8, 85.0], [30.9, 85.0], [31.0, 85.0], [31.1, 85.0], [31.2, 86.0], [31.3, 86.0], [31.4, 86.0], [31.5, 86.0], [31.6, 86.0], [31.7, 86.0], [31.8, 86.0], [31.9, 87.0], [32.0, 87.0], [32.1, 87.0], [32.2, 87.0], [32.3, 87.0], [32.4, 87.0], [32.5, 88.0], [32.6, 88.0], [32.7, 88.0], [32.8, 88.0], [32.9, 88.0], [33.0, 88.0], [33.1, 88.0], [33.2, 88.0], [33.3, 88.0], [33.4, 89.0], [33.5, 89.0], [33.6, 89.0], [33.7, 89.0], [33.8, 89.0], [33.9, 89.0], [34.0, 89.0], [34.1, 89.0], [34.2, 89.0], [34.3, 90.0], [34.4, 90.0], [34.5, 90.0], [34.6, 90.0], [34.7, 90.0], [34.8, 90.0], [34.9, 90.0], [35.0, 91.0], [35.1, 91.0], [35.2, 91.0], [35.3, 91.0], [35.4, 92.0], [35.5, 92.0], [35.6, 92.0], [35.7, 92.0], [35.8, 92.0], [35.9, 92.0], [36.0, 93.0], [36.1, 93.0], [36.2, 93.0], [36.3, 93.0], [36.4, 93.0], [36.5, 94.0], [36.6, 94.0], [36.7, 94.0], [36.8, 94.0], [36.9, 94.0], [37.0, 95.0], [37.1, 95.0], [37.2, 95.0], [37.3, 96.0], [37.4, 96.0], [37.5, 96.0], [37.6, 96.0], [37.7, 97.0], [37.8, 97.0], [37.9, 97.0], [38.0, 97.0], [38.1, 97.0], [38.2, 98.0], [38.3, 98.0], [38.4, 99.0], [38.5, 99.0], [38.6, 99.0], [38.7, 100.0], [38.8, 100.0], [38.9, 101.0], [39.0, 101.0], [39.1, 102.0], [39.2, 102.0], [39.3, 103.0], [39.4, 103.0], [39.5, 104.0], [39.6, 105.0], [39.7, 106.0], [39.8, 107.0], [39.9, 108.0], [40.0, 108.0], [40.1, 109.0], [40.2, 110.0], [40.3, 111.0], [40.4, 113.0], [40.5, 114.0], [40.6, 114.0], [40.7, 115.0], [40.8, 116.0], [40.9, 117.0], [41.0, 117.0], [41.1, 118.0], [41.2, 119.0], [41.3, 120.0], [41.4, 121.0], [41.5, 122.0], [41.6, 123.0], [41.7, 123.0], [41.8, 124.0], [41.9, 124.0], [42.0, 125.0], [42.1, 127.0], [42.2, 127.0], [42.3, 128.0], [42.4, 128.0], [42.5, 129.0], [42.6, 129.0], [42.7, 130.0], [42.8, 130.0], [42.9, 130.0], [43.0, 131.0], [43.1, 132.0], [43.2, 132.0], [43.3, 133.0], [43.4, 135.0], [43.5, 135.0], [43.6, 136.0], [43.7, 136.0], [43.8, 137.0], [43.9, 138.0], [44.0, 138.0], [44.1, 139.0], [44.2, 141.0], [44.3, 142.0], [44.4, 143.0], [44.5, 144.0], [44.6, 146.0], [44.7, 146.0], [44.8, 148.0], [44.9, 149.0], [45.0, 149.0], [45.1, 150.0], [45.2, 152.0], [45.3, 153.0], [45.4, 154.0], [45.5, 155.0], [45.6, 157.0], [45.7, 158.0], [45.8, 159.0], [45.9, 160.0], [46.0, 161.0], [46.1, 162.0], [46.2, 163.0], [46.3, 164.0], [46.4, 165.0], [46.5, 167.0], [46.6, 168.0], [46.7, 169.0], [46.8, 170.0], [46.9, 170.0], [47.0, 171.0], [47.1, 172.0], [47.2, 173.0], [47.3, 174.0], [47.4, 175.0], [47.5, 176.0], [47.6, 177.0], [47.7, 178.0], [47.8, 179.0], [47.9, 179.0], [48.0, 181.0], [48.1, 182.0], [48.2, 183.0], [48.3, 185.0], [48.4, 186.0], [48.5, 186.0], [48.6, 187.0], [48.7, 188.0], [48.8, 188.0], [48.9, 189.0], [49.0, 190.0], [49.1, 191.0], [49.2, 192.0], [49.3, 193.0], [49.4, 194.0], [49.5, 194.0], [49.6, 195.0], [49.7, 195.0], [49.8, 197.0], [49.9, 198.0], [50.0, 198.0], [50.1, 199.0], [50.2, 199.0], [50.3, 201.0], [50.4, 202.0], [50.5, 203.0], [50.6, 204.0], [50.7, 205.0], [50.8, 206.0], [50.9, 207.0], [51.0, 207.0], [51.1, 208.0], [51.2, 208.0], [51.3, 210.0], [51.4, 210.0], [51.5, 212.0], [51.6, 212.0], [51.7, 214.0], [51.8, 215.0], [51.9, 216.0], [52.0, 217.0], [52.1, 219.0], [52.2, 220.0], [52.3, 222.0], [52.4, 222.0], [52.5, 224.0], [52.6, 224.0], [52.7, 225.0], [52.8, 225.0], [52.9, 226.0], [53.0, 226.0], [53.1, 228.0], [53.2, 229.0], [53.3, 230.0], [53.4, 231.0], [53.5, 232.0], [53.6, 232.0], [53.7, 233.0], [53.8, 234.0], [53.9, 234.0], [54.0, 235.0], [54.1, 236.0], [54.2, 237.0], [54.3, 239.0], [54.4, 240.0], [54.5, 241.0], [54.6, 242.0], [54.7, 243.0], [54.8, 244.0], [54.9, 245.0], [55.0, 246.0], [55.1, 247.0], [55.2, 248.0], [55.3, 249.0], [55.4, 250.0], [55.5, 251.0], [55.6, 252.0], [55.7, 253.0], [55.8, 254.0], [55.9, 256.0], [56.0, 256.0], [56.1, 257.0], [56.2, 257.0], [56.3, 259.0], [56.4, 260.0], [56.5, 260.0], [56.6, 261.0], [56.7, 262.0], [56.8, 263.0], [56.9, 263.0], [57.0, 265.0], [57.1, 265.0], [57.2, 266.0], [57.3, 267.0], [57.4, 267.0], [57.5, 268.0], [57.6, 269.0], [57.7, 270.0], [57.8, 271.0], [57.9, 271.0], [58.0, 272.0], [58.1, 273.0], [58.2, 273.0], [58.3, 275.0], [58.4, 276.0], [58.5, 277.0], [58.6, 279.0], [58.7, 280.0], [58.8, 280.0], [58.9, 281.0], [59.0, 282.0], [59.1, 282.0], [59.2, 284.0], [59.3, 285.0], [59.4, 287.0], [59.5, 287.0], [59.6, 288.0], [59.7, 289.0], [59.8, 291.0], [59.9, 292.0], [60.0, 294.0], [60.1, 296.0], [60.2, 296.0], [60.3, 297.0], [60.4, 298.0], [60.5, 300.0], [60.6, 300.0], [60.7, 302.0], [60.8, 303.0], [60.9, 303.0], [61.0, 304.0], [61.1, 306.0], [61.2, 307.0], [61.3, 309.0], [61.4, 310.0], [61.5, 311.0], [61.6, 313.0], [61.7, 313.0], [61.8, 314.0], [61.9, 316.0], [62.0, 318.0], [62.1, 319.0], [62.2, 322.0], [62.3, 323.0], [62.4, 324.0], [62.5, 327.0], [62.6, 329.0], [62.7, 330.0], [62.8, 331.0], [62.9, 334.0], [63.0, 335.0], [63.1, 337.0], [63.2, 338.0], [63.3, 340.0], [63.4, 342.0], [63.5, 343.0], [63.6, 345.0], [63.7, 346.0], [63.8, 346.0], [63.9, 348.0], [64.0, 349.0], [64.1, 350.0], [64.2, 351.0], [64.3, 354.0], [64.4, 356.0], [64.5, 358.0], [64.6, 360.0], [64.7, 361.0], [64.8, 362.0], [64.9, 363.0], [65.0, 365.0], [65.1, 368.0], [65.2, 371.0], [65.3, 371.0], [65.4, 373.0], [65.5, 374.0], [65.6, 376.0], [65.7, 378.0], [65.8, 379.0], [65.9, 381.0], [66.0, 383.0], [66.1, 384.0], [66.2, 385.0], [66.3, 388.0], [66.4, 388.0], [66.5, 390.0], [66.6, 390.0], [66.7, 392.0], [66.8, 393.0], [66.9, 394.0], [67.0, 396.0], [67.1, 397.0], [67.2, 398.0], [67.3, 399.0], [67.4, 401.0], [67.5, 403.0], [67.6, 404.0], [67.7, 406.0], [67.8, 408.0], [67.9, 409.0], [68.0, 410.0], [68.1, 413.0], [68.2, 414.0], [68.3, 415.0], [68.4, 416.0], [68.5, 418.0], [68.6, 418.0], [68.7, 422.0], [68.8, 424.0], [68.9, 424.0], [69.0, 425.0], [69.1, 427.0], [69.2, 430.0], [69.3, 431.0], [69.4, 432.0], [69.5, 434.0], [69.6, 435.0], [69.7, 437.0], [69.8, 438.0], [69.9, 440.0], [70.0, 441.0], [70.1, 443.0], [70.2, 445.0], [70.3, 448.0], [70.4, 450.0], [70.5, 451.0], [70.6, 452.0], [70.7, 454.0], [70.8, 455.0], [70.9, 457.0], [71.0, 459.0], [71.1, 460.0], [71.2, 461.0], [71.3, 462.0], [71.4, 464.0], [71.5, 465.0], [71.6, 467.0], [71.7, 469.0], [71.8, 470.0], [71.9, 472.0], [72.0, 473.0], [72.1, 474.0], [72.2, 476.0], [72.3, 478.0], [72.4, 478.0], [72.5, 479.0], [72.6, 481.0], [72.7, 482.0], [72.8, 486.0], [72.9, 488.0], [73.0, 489.0], [73.1, 490.0], [73.2, 492.0], [73.3, 494.0], [73.4, 495.0], [73.5, 498.0], [73.6, 500.0], [73.7, 502.0], [73.8, 505.0], [73.9, 506.0], [74.0, 510.0], [74.1, 513.0], [74.2, 514.0], [74.3, 516.0], [74.4, 517.0], [74.5, 520.0], [74.6, 521.0], [74.7, 524.0], [74.8, 525.0], [74.9, 526.0], [75.0, 529.0], [75.1, 532.0], [75.2, 534.0], [75.3, 537.0], [75.4, 539.0], [75.5, 541.0], [75.6, 544.0], [75.7, 545.0], [75.8, 548.0], [75.9, 549.0], [76.0, 551.0], [76.1, 553.0], [76.2, 554.0], [76.3, 557.0], [76.4, 559.0], [76.5, 561.0], [76.6, 562.0], [76.7, 563.0], [76.8, 564.0], [76.9, 567.0], [77.0, 568.0], [77.1, 570.0], [77.2, 571.0], [77.3, 573.0], [77.4, 574.0], [77.5, 576.0], [77.6, 577.0], [77.7, 579.0], [77.8, 581.0], [77.9, 583.0], [78.0, 586.0], [78.1, 589.0], [78.2, 589.0], [78.3, 591.0], [78.4, 593.0], [78.5, 595.0], [78.6, 598.0], [78.7, 600.0], [78.8, 603.0], [78.9, 604.0], [79.0, 605.0], [79.1, 607.0], [79.2, 609.0], [79.3, 612.0], [79.4, 614.0], [79.5, 616.0], [79.6, 617.0], [79.7, 618.0], [79.8, 621.0], [79.9, 622.0], [80.0, 623.0], [80.1, 624.0], [80.2, 626.0], [80.3, 628.0], [80.4, 629.0], [80.5, 631.0], [80.6, 633.0], [80.7, 636.0], [80.8, 638.0], [80.9, 640.0], [81.0, 642.0], [81.1, 644.0], [81.2, 648.0], [81.3, 651.0], [81.4, 653.0], [81.5, 656.0], [81.6, 657.0], [81.7, 658.0], [81.8, 659.0], [81.9, 662.0], [82.0, 663.0], [82.1, 665.0], [82.2, 668.0], [82.3, 670.0], [82.4, 674.0], [82.5, 676.0], [82.6, 679.0], [82.7, 682.0], [82.8, 684.0], [82.9, 686.0], [83.0, 688.0], [83.1, 690.0], [83.2, 694.0], [83.3, 695.0], [83.4, 697.0], [83.5, 699.0], [83.6, 703.0], [83.7, 704.0], [83.8, 707.0], [83.9, 709.0], [84.0, 711.0], [84.1, 712.0], [84.2, 714.0], [84.3, 716.0], [84.4, 717.0], [84.5, 717.0], [84.6, 719.0], [84.7, 722.0], [84.8, 725.0], [84.9, 727.0], [85.0, 728.0], [85.1, 731.0], [85.2, 733.0], [85.3, 738.0], [85.4, 739.0], [85.5, 740.0], [85.6, 744.0], [85.7, 747.0], [85.8, 750.0], [85.9, 753.0], [86.0, 755.0], [86.1, 757.0], [86.2, 758.0], [86.3, 760.0], [86.4, 762.0], [86.5, 764.0], [86.6, 766.0], [86.7, 768.0], [86.8, 769.0], [86.9, 771.0], [87.0, 776.0], [87.1, 778.0], [87.2, 780.0], [87.3, 783.0], [87.4, 786.0], [87.5, 788.0], [87.6, 791.0], [87.7, 792.0], [87.8, 794.0], [87.9, 799.0], [88.0, 801.0], [88.1, 803.0], [88.2, 804.0], [88.3, 808.0], [88.4, 809.0], [88.5, 812.0], [88.6, 815.0], [88.7, 818.0], [88.8, 819.0], [88.9, 821.0], [89.0, 823.0], [89.1, 825.0], [89.2, 825.0], [89.3, 828.0], [89.4, 830.0], [89.5, 832.0], [89.6, 834.0], [89.7, 839.0], [89.8, 841.0], [89.9, 842.0], [90.0, 846.0], [90.1, 851.0], [90.2, 855.0], [90.3, 858.0], [90.4, 861.0], [90.5, 866.0], [90.6, 870.0], [90.7, 876.0], [90.8, 880.0], [90.9, 884.0], [91.0, 891.0], [91.1, 896.0], [91.2, 901.0], [91.3, 908.0], [91.4, 917.0], [91.5, 925.0], [91.6, 929.0], [91.7, 936.0], [91.8, 941.0], [91.9, 951.0], [92.0, 966.0], [92.1, 971.0], [92.2, 981.0], [92.3, 987.0], [92.4, 995.0], [92.5, 1004.0], [92.6, 1007.0], [92.7, 1013.0], [92.8, 1016.0], [92.9, 1023.0], [93.0, 1029.0], [93.1, 1037.0], [93.2, 1045.0], [93.3, 1050.0], [93.4, 1059.0], [93.5, 1070.0], [93.6, 1076.0], [93.7, 1080.0], [93.8, 1084.0], [93.9, 1096.0], [94.0, 1104.0], [94.1, 1107.0], [94.2, 1113.0], [94.3, 1117.0], [94.4, 1121.0], [94.5, 1125.0], [94.6, 1134.0], [94.7, 1140.0], [94.8, 1146.0], [94.9, 1163.0], [95.0, 1168.0], [95.1, 1175.0], [95.2, 1184.0], [95.3, 1192.0], [95.4, 1196.0], [95.5, 1200.0], [95.6, 1206.0], [95.7, 1213.0], [95.8, 1221.0], [95.9, 1234.0], [96.0, 1248.0], [96.1, 1253.0], [96.2, 1258.0], [96.3, 1265.0], [96.4, 1272.0], [96.5, 1292.0], [96.6, 1302.0], [96.7, 1310.0], [96.8, 1319.0], [96.9, 1324.0], [97.0, 1326.0], [97.1, 1339.0], [97.2, 1353.0], [97.3, 1360.0], [97.4, 1396.0], [97.5, 1404.0], [97.6, 1418.0], [97.7, 1430.0], [97.8, 1452.0], [97.9, 1463.0], [98.0, 1469.0], [98.1, 1486.0], [98.2, 1511.0], [98.3, 1539.0], [98.4, 1560.0], [98.5, 1617.0], [98.6, 1653.0], [98.7, 1681.0], [98.8, 1729.0], [98.9, 1777.0], [99.0, 1825.0], [99.1, 1926.0], [99.2, 1998.0], [99.3, 2143.0], [99.4, 2238.0], [99.5, 2316.0], [99.6, 2433.0], [99.7, 2650.0], [99.8, 2917.0], [99.9, 3209.0], [100.0, 3685.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 2036.0, "series": [{"data": [[0.0, 2036.0], [600.0, 254.0], [700.0, 234.0], [800.0, 169.0], [900.0, 69.0], [1000.0, 78.0], [1100.0, 81.0], [1200.0, 57.0], [1300.0, 45.0], [1400.0, 39.0], [1500.0, 17.0], [100.0, 611.0], [1600.0, 15.0], [1700.0, 9.0], [1800.0, 6.0], [1900.0, 8.0], [2000.0, 4.0], [2100.0, 5.0], [2200.0, 5.0], [2300.0, 4.0], [2400.0, 5.0], [2500.0, 2.0], [2600.0, 3.0], [2800.0, 2.0], [2700.0, 1.0], [2900.0, 4.0], [3000.0, 1.0], [200.0, 542.0], [3200.0, 1.0], [3300.0, 1.0], [3400.0, 1.0], [3500.0, 2.0], [3600.0, 1.0], [300.0, 360.0], [400.0, 331.0], [500.0, 269.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3600.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 97.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 3882.0, "series": [{"data": [[0.0, 3882.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1293.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 97.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.950873362445414, "minX": 1.60224918E12, "maxY": 10.0, "series": [{"data": [[1.60224918E12, 9.962435233160617], [1.60224936E12, 9.950873362445414], [1.60224924E12, 10.0], [1.6022493E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60224936E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 354.207690843328, "minX": 1.0, "maxY": 3685.0, "series": [{"data": [[4.0, 1553.0], [8.0, 991.0], [2.0, 1617.0], [1.0, 3685.0], [9.0, 1023.25], [5.0, 1233.3333333333333], [10.0, 354.207690843328], [6.0, 656.0], [3.0, 2426.0], [7.0, 1213.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.985963581183622, 357.6951820940819]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 6635.766666666666, "minX": 1.60224918E12, "maxY": 1388053.5166666666, "series": [{"data": [[1.60224918E12, 707014.55], [1.60224936E12, 817743.7666666667], [1.60224924E12, 1388053.5166666666], [1.6022493E12, 1376770.6833333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60224918E12, 6635.766666666666], [1.60224936E12, 8042.35], [1.60224924E12, 14790.05], [1.6022493E12, 16111.383333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60224936E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 322.6133909287259, "minX": 1.60224918E12, "maxY": 411.8199481865286, "series": [{"data": [[1.60224918E12, 411.8199481865286], [1.60224936E12, 400.40174672489064], [1.60224924E12, 348.4965357967674], [1.6022493E12, 322.6133909287259]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60224936E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 322.3018358531315, "minX": 1.60224918E12, "maxY": 411.35362694300534, "series": [{"data": [[1.60224918E12, 411.35362694300534], [1.60224936E12, 400.0589519650657], [1.60224924E12, 348.1420323325634], [1.6022493E12, 322.3018358531315]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60224936E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.009825327510917031, "minX": 1.60224918E12, "maxY": 0.12564766839378258, "series": [{"data": [[1.60224918E12, 0.12564766839378258], [1.60224936E12, 0.009825327510917031], [1.60224924E12, 0.017321016166281806], [1.6022493E12, 0.010259179265658764]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60224936E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 33.0, "minX": 1.60224918E12, "maxY": 3685.0, "series": [{"data": [[1.60224918E12, 2219.0], [1.60224936E12, 3685.0], [1.60224924E12, 3453.0], [1.6022493E12, 2405.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60224918E12, 40.0], [1.60224936E12, 37.252999781370164], [1.60224924E12, 38.0], [1.6022493E12, 36.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60224918E12, 40.0], [1.60224936E12, 38.0], [1.60224924E12, 38.15670016527176], [1.6022493E12, 37.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60224918E12, 40.0], [1.60224936E12, 37.71149989068508], [1.60224924E12, 38.0], [1.6022493E12, 36.603499779105185]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60224918E12, 36.0], [1.60224936E12, 34.0], [1.60224924E12, 33.0], [1.6022493E12, 33.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60224918E12, 258.5], [1.60224936E12, 266.0], [1.60224924E12, 178.0], [1.6022493E12, 162.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60224936E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 48.0, "minX": 1.0, "maxY": 3685.0, "series": [{"data": [[3.0, 1926.0], [4.0, 1547.5], [5.0, 1665.0], [6.0, 1352.5], [7.0, 1250.0], [8.0, 1001.0], [9.0, 766.0], [10.0, 764.5], [11.0, 726.0], [12.0, 779.5], [13.0, 698.0], [14.0, 565.0], [15.0, 562.0], [16.0, 560.0], [17.0, 502.0], [18.0, 367.5], [19.0, 421.0], [20.0, 425.5], [21.0, 461.0], [22.0, 571.5], [23.0, 338.0], [24.0, 303.5], [25.0, 438.0], [26.0, 265.5], [27.0, 75.0], [28.0, 287.5], [29.0, 277.0], [30.0, 80.0], [31.0, 209.5], [33.0, 72.5], [32.0, 286.0], [34.0, 202.0], [35.0, 266.0], [37.0, 90.0], [39.0, 90.5], [40.0, 176.5], [41.0, 103.0], [43.0, 89.0], [42.0, 146.0], [45.0, 87.0], [47.0, 106.0], [46.0, 118.0], [49.0, 96.0], [48.0, 86.0], [51.0, 77.0], [53.0, 114.0], [56.0, 140.0], [57.0, 170.0], [58.0, 132.0], [59.0, 81.0], [63.0, 119.5], [66.0, 87.5], [65.0, 101.0], [70.0, 106.5], [71.0, 117.0], [81.0, 48.0], [84.0, 81.0], [88.0, 52.5], [1.0, 3685.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 88.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 48.0, "minX": 1.0, "maxY": 3684.0, "series": [{"data": [[3.0, 1926.0], [4.0, 1547.0], [5.0, 1665.0], [6.0, 1349.5], [7.0, 1250.0], [8.0, 997.0], [9.0, 766.0], [10.0, 763.0], [11.0, 726.0], [12.0, 779.0], [13.0, 696.0], [14.0, 565.0], [15.0, 561.5], [16.0, 556.5], [17.0, 502.0], [18.0, 367.5], [19.0, 418.0], [20.0, 425.0], [21.0, 461.0], [22.0, 570.5], [23.0, 337.5], [24.0, 303.0], [25.0, 435.0], [26.0, 265.0], [27.0, 75.0], [28.0, 287.0], [29.0, 277.0], [30.0, 80.0], [31.0, 209.5], [33.0, 72.5], [32.0, 286.0], [34.0, 202.0], [35.0, 266.0], [37.0, 90.0], [39.0, 90.5], [40.0, 176.0], [41.0, 103.0], [43.0, 89.0], [42.0, 145.5], [45.0, 87.0], [47.0, 105.0], [46.0, 118.0], [49.0, 96.0], [48.0, 86.0], [51.0, 77.0], [53.0, 114.0], [56.0, 140.0], [57.0, 170.0], [58.0, 132.0], [59.0, 81.0], [63.0, 119.5], [66.0, 87.5], [65.0, 101.0], [70.0, 106.0], [71.0, 117.0], [81.0, 48.0], [84.0, 81.0], [88.0, 52.5], [1.0, 3684.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 88.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 13.033333333333333, "minX": 1.60224918E12, "maxY": 30.866666666666667, "series": [{"data": [[1.60224918E12, 13.033333333333333], [1.60224936E12, 15.1], [1.60224924E12, 28.866666666666667], [1.6022493E12, 30.866666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60224936E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 12.866666666666667, "minX": 1.60224918E12, "maxY": 30.866666666666667, "series": [{"data": [[1.60224918E12, 12.866666666666667], [1.60224936E12, 15.266666666666667], [1.60224924E12, 28.866666666666667], [1.6022493E12, 30.866666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60224936E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 12.866666666666667, "minX": 1.60224918E12, "maxY": 30.866666666666667, "series": [{"data": [[1.60224918E12, 12.866666666666667], [1.60224936E12, 15.266666666666667], [1.60224924E12, 28.866666666666667], [1.6022493E12, 30.866666666666667]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60224936E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 12.866666666666667, "minX": 1.60224918E12, "maxY": 30.866666666666667, "series": [{"data": [[1.60224918E12, 12.866666666666667], [1.60224936E12, 15.266666666666667], [1.60224924E12, 28.866666666666667], [1.6022493E12, 30.866666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60224936E12, "title": "Total Transactions Per Second"}},
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

