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
        data: {"result": {"minY": 32.0, "minX": 0.0, "maxY": 4231.0, "series": [{"data": [[0.0, 32.0], [0.1, 33.0], [0.2, 34.0], [0.3, 34.0], [0.4, 35.0], [0.5, 35.0], [0.6, 36.0], [0.7, 37.0], [0.8, 37.0], [0.9, 37.0], [1.0, 38.0], [1.1, 38.0], [1.2, 38.0], [1.3, 38.0], [1.4, 38.0], [1.5, 38.0], [1.6, 38.0], [1.7, 39.0], [1.8, 39.0], [1.9, 39.0], [2.0, 39.0], [2.1, 39.0], [2.2, 39.0], [2.3, 39.0], [2.4, 39.0], [2.5, 40.0], [2.6, 40.0], [2.7, 40.0], [2.8, 40.0], [2.9, 40.0], [3.0, 40.0], [3.1, 40.0], [3.2, 40.0], [3.3, 40.0], [3.4, 40.0], [3.5, 40.0], [3.6, 40.0], [3.7, 41.0], [3.8, 41.0], [3.9, 41.0], [4.0, 41.0], [4.1, 41.0], [4.2, 41.0], [4.3, 41.0], [4.4, 41.0], [4.5, 41.0], [4.6, 41.0], [4.7, 41.0], [4.8, 41.0], [4.9, 41.0], [5.0, 41.0], [5.1, 41.0], [5.2, 42.0], [5.3, 42.0], [5.4, 42.0], [5.5, 42.0], [5.6, 42.0], [5.7, 42.0], [5.8, 42.0], [5.9, 42.0], [6.0, 42.0], [6.1, 42.0], [6.2, 42.0], [6.3, 42.0], [6.4, 42.0], [6.5, 42.0], [6.6, 42.0], [6.7, 42.0], [6.8, 42.0], [6.9, 42.0], [7.0, 43.0], [7.1, 43.0], [7.2, 43.0], [7.3, 43.0], [7.4, 43.0], [7.5, 43.0], [7.6, 43.0], [7.7, 43.0], [7.8, 43.0], [7.9, 43.0], [8.0, 43.0], [8.1, 43.0], [8.2, 43.0], [8.3, 43.0], [8.4, 43.0], [8.5, 43.0], [8.6, 43.0], [8.7, 43.0], [8.8, 43.0], [8.9, 44.0], [9.0, 44.0], [9.1, 44.0], [9.2, 44.0], [9.3, 44.0], [9.4, 44.0], [9.5, 44.0], [9.6, 44.0], [9.7, 44.0], [9.8, 44.0], [9.9, 44.0], [10.0, 44.0], [10.1, 44.0], [10.2, 44.0], [10.3, 44.0], [10.4, 44.0], [10.5, 44.0], [10.6, 44.0], [10.7, 44.0], [10.8, 44.0], [10.9, 44.0], [11.0, 44.0], [11.1, 45.0], [11.2, 45.0], [11.3, 45.0], [11.4, 45.0], [11.5, 45.0], [11.6, 45.0], [11.7, 45.0], [11.8, 45.0], [11.9, 45.0], [12.0, 45.0], [12.1, 45.0], [12.2, 45.0], [12.3, 45.0], [12.4, 45.0], [12.5, 45.0], [12.6, 45.0], [12.7, 45.0], [12.8, 45.0], [12.9, 45.0], [13.0, 45.0], [13.1, 45.0], [13.2, 45.0], [13.3, 46.0], [13.4, 46.0], [13.5, 46.0], [13.6, 46.0], [13.7, 46.0], [13.8, 46.0], [13.9, 46.0], [14.0, 46.0], [14.1, 46.0], [14.2, 46.0], [14.3, 46.0], [14.4, 46.0], [14.5, 46.0], [14.6, 46.0], [14.7, 46.0], [14.8, 46.0], [14.9, 46.0], [15.0, 46.0], [15.1, 47.0], [15.2, 47.0], [15.3, 47.0], [15.4, 47.0], [15.5, 47.0], [15.6, 47.0], [15.7, 47.0], [15.8, 47.0], [15.9, 47.0], [16.0, 47.0], [16.1, 47.0], [16.2, 47.0], [16.3, 47.0], [16.4, 47.0], [16.5, 48.0], [16.6, 48.0], [16.7, 48.0], [16.8, 48.0], [16.9, 48.0], [17.0, 48.0], [17.1, 48.0], [17.2, 48.0], [17.3, 48.0], [17.4, 48.0], [17.5, 48.0], [17.6, 48.0], [17.7, 48.0], [17.8, 49.0], [17.9, 49.0], [18.0, 49.0], [18.1, 49.0], [18.2, 49.0], [18.3, 49.0], [18.4, 49.0], [18.5, 49.0], [18.6, 49.0], [18.7, 49.0], [18.8, 50.0], [18.9, 50.0], [19.0, 50.0], [19.1, 50.0], [19.2, 50.0], [19.3, 50.0], [19.4, 50.0], [19.5, 50.0], [19.6, 50.0], [19.7, 51.0], [19.8, 51.0], [19.9, 51.0], [20.0, 51.0], [20.1, 51.0], [20.2, 51.0], [20.3, 51.0], [20.4, 52.0], [20.5, 52.0], [20.6, 52.0], [20.7, 52.0], [20.8, 53.0], [20.9, 53.0], [21.0, 54.0], [21.1, 54.0], [21.2, 54.0], [21.3, 54.0], [21.4, 55.0], [21.5, 55.0], [21.6, 55.0], [21.7, 56.0], [21.8, 56.0], [21.9, 56.0], [22.0, 57.0], [22.1, 57.0], [22.2, 58.0], [22.3, 58.0], [22.4, 58.0], [22.5, 59.0], [22.6, 59.0], [22.7, 59.0], [22.8, 60.0], [22.9, 60.0], [23.0, 61.0], [23.1, 61.0], [23.2, 62.0], [23.3, 63.0], [23.4, 63.0], [23.5, 63.0], [23.6, 64.0], [23.7, 64.0], [23.8, 65.0], [23.9, 65.0], [24.0, 66.0], [24.1, 66.0], [24.2, 67.0], [24.3, 68.0], [24.4, 68.0], [24.5, 68.0], [24.6, 69.0], [24.7, 69.0], [24.8, 70.0], [24.9, 71.0], [25.0, 71.0], [25.1, 72.0], [25.2, 72.0], [25.3, 73.0], [25.4, 74.0], [25.5, 74.0], [25.6, 75.0], [25.7, 75.0], [25.8, 75.0], [25.9, 76.0], [26.0, 76.0], [26.1, 76.0], [26.2, 76.0], [26.3, 77.0], [26.4, 77.0], [26.5, 77.0], [26.6, 77.0], [26.7, 78.0], [26.8, 78.0], [26.9, 78.0], [27.0, 78.0], [27.1, 78.0], [27.2, 79.0], [27.3, 79.0], [27.4, 79.0], [27.5, 79.0], [27.6, 79.0], [27.7, 79.0], [27.8, 79.0], [27.9, 80.0], [28.0, 80.0], [28.1, 80.0], [28.2, 80.0], [28.3, 80.0], [28.4, 81.0], [28.5, 81.0], [28.6, 81.0], [28.7, 81.0], [28.8, 81.0], [28.9, 81.0], [29.0, 82.0], [29.1, 82.0], [29.2, 82.0], [29.3, 82.0], [29.4, 82.0], [29.5, 82.0], [29.6, 82.0], [29.7, 82.0], [29.8, 83.0], [29.9, 83.0], [30.0, 83.0], [30.1, 83.0], [30.2, 83.0], [30.3, 83.0], [30.4, 83.0], [30.5, 83.0], [30.6, 83.0], [30.7, 84.0], [30.8, 84.0], [30.9, 84.0], [31.0, 84.0], [31.1, 84.0], [31.2, 84.0], [31.3, 84.0], [31.4, 84.0], [31.5, 84.0], [31.6, 84.0], [31.7, 85.0], [31.8, 85.0], [31.9, 85.0], [32.0, 85.0], [32.1, 85.0], [32.2, 85.0], [32.3, 85.0], [32.4, 85.0], [32.5, 85.0], [32.6, 86.0], [32.7, 86.0], [32.8, 86.0], [32.9, 86.0], [33.0, 86.0], [33.1, 86.0], [33.2, 86.0], [33.3, 86.0], [33.4, 87.0], [33.5, 87.0], [33.6, 87.0], [33.7, 87.0], [33.8, 87.0], [33.9, 87.0], [34.0, 88.0], [34.1, 88.0], [34.2, 88.0], [34.3, 88.0], [34.4, 88.0], [34.5, 88.0], [34.6, 88.0], [34.7, 88.0], [34.8, 89.0], [34.9, 89.0], [35.0, 89.0], [35.1, 89.0], [35.2, 89.0], [35.3, 89.0], [35.4, 89.0], [35.5, 89.0], [35.6, 90.0], [35.7, 90.0], [35.8, 90.0], [35.9, 90.0], [36.0, 90.0], [36.1, 90.0], [36.2, 90.0], [36.3, 90.0], [36.4, 91.0], [36.5, 91.0], [36.6, 91.0], [36.7, 91.0], [36.8, 91.0], [36.9, 92.0], [37.0, 92.0], [37.1, 92.0], [37.2, 92.0], [37.3, 92.0], [37.4, 93.0], [37.5, 93.0], [37.6, 93.0], [37.7, 93.0], [37.8, 93.0], [37.9, 94.0], [38.0, 94.0], [38.1, 94.0], [38.2, 94.0], [38.3, 95.0], [38.4, 95.0], [38.5, 96.0], [38.6, 96.0], [38.7, 96.0], [38.8, 97.0], [38.9, 97.0], [39.0, 97.0], [39.1, 97.0], [39.2, 98.0], [39.3, 98.0], [39.4, 99.0], [39.5, 99.0], [39.6, 99.0], [39.7, 100.0], [39.8, 100.0], [39.9, 101.0], [40.0, 101.0], [40.1, 102.0], [40.2, 103.0], [40.3, 103.0], [40.4, 105.0], [40.5, 106.0], [40.6, 107.0], [40.7, 107.0], [40.8, 108.0], [40.9, 109.0], [41.0, 110.0], [41.1, 111.0], [41.2, 112.0], [41.3, 114.0], [41.4, 115.0], [41.5, 116.0], [41.6, 118.0], [41.7, 119.0], [41.8, 120.0], [41.9, 121.0], [42.0, 123.0], [42.1, 123.0], [42.2, 124.0], [42.3, 125.0], [42.4, 125.0], [42.5, 126.0], [42.6, 128.0], [42.7, 129.0], [42.8, 130.0], [42.9, 130.0], [43.0, 132.0], [43.1, 132.0], [43.2, 132.0], [43.3, 133.0], [43.4, 135.0], [43.5, 135.0], [43.6, 136.0], [43.7, 137.0], [43.8, 138.0], [43.9, 139.0], [44.0, 139.0], [44.1, 140.0], [44.2, 142.0], [44.3, 142.0], [44.4, 144.0], [44.5, 145.0], [44.6, 146.0], [44.7, 147.0], [44.8, 149.0], [44.9, 150.0], [45.0, 151.0], [45.1, 152.0], [45.2, 153.0], [45.3, 153.0], [45.4, 154.0], [45.5, 155.0], [45.6, 156.0], [45.7, 157.0], [45.8, 158.0], [45.9, 159.0], [46.0, 160.0], [46.1, 161.0], [46.2, 163.0], [46.3, 164.0], [46.4, 165.0], [46.5, 166.0], [46.6, 166.0], [46.7, 168.0], [46.8, 169.0], [46.9, 169.0], [47.0, 171.0], [47.1, 173.0], [47.2, 174.0], [47.3, 174.0], [47.4, 175.0], [47.5, 177.0], [47.6, 178.0], [47.7, 179.0], [47.8, 180.0], [47.9, 181.0], [48.0, 182.0], [48.1, 184.0], [48.2, 185.0], [48.3, 186.0], [48.4, 187.0], [48.5, 187.0], [48.6, 188.0], [48.7, 190.0], [48.8, 191.0], [48.9, 192.0], [49.0, 194.0], [49.1, 195.0], [49.2, 196.0], [49.3, 197.0], [49.4, 198.0], [49.5, 198.0], [49.6, 199.0], [49.7, 200.0], [49.8, 201.0], [49.9, 202.0], [50.0, 202.0], [50.1, 203.0], [50.2, 204.0], [50.3, 205.0], [50.4, 206.0], [50.5, 206.0], [50.6, 207.0], [50.7, 207.0], [50.8, 208.0], [50.9, 209.0], [51.0, 210.0], [51.1, 210.0], [51.2, 211.0], [51.3, 213.0], [51.4, 213.0], [51.5, 214.0], [51.6, 215.0], [51.7, 215.0], [51.8, 216.0], [51.9, 217.0], [52.0, 218.0], [52.1, 219.0], [52.2, 221.0], [52.3, 223.0], [52.4, 224.0], [52.5, 224.0], [52.6, 225.0], [52.7, 225.0], [52.8, 226.0], [52.9, 226.0], [53.0, 227.0], [53.1, 229.0], [53.2, 229.0], [53.3, 230.0], [53.4, 231.0], [53.5, 232.0], [53.6, 233.0], [53.7, 235.0], [53.8, 235.0], [53.9, 236.0], [54.0, 237.0], [54.1, 238.0], [54.2, 239.0], [54.3, 240.0], [54.4, 240.0], [54.5, 241.0], [54.6, 242.0], [54.7, 243.0], [54.8, 244.0], [54.9, 245.0], [55.0, 245.0], [55.1, 246.0], [55.2, 247.0], [55.3, 247.0], [55.4, 248.0], [55.5, 249.0], [55.6, 250.0], [55.7, 250.0], [55.8, 252.0], [55.9, 252.0], [56.0, 253.0], [56.1, 253.0], [56.2, 254.0], [56.3, 255.0], [56.4, 256.0], [56.5, 256.0], [56.6, 257.0], [56.7, 257.0], [56.8, 258.0], [56.9, 259.0], [57.0, 260.0], [57.1, 261.0], [57.2, 262.0], [57.3, 263.0], [57.4, 264.0], [57.5, 264.0], [57.6, 264.0], [57.7, 265.0], [57.8, 265.0], [57.9, 266.0], [58.0, 267.0], [58.1, 268.0], [58.2, 269.0], [58.3, 269.0], [58.4, 270.0], [58.5, 271.0], [58.6, 273.0], [58.7, 273.0], [58.8, 274.0], [58.9, 274.0], [59.0, 275.0], [59.1, 276.0], [59.2, 277.0], [59.3, 278.0], [59.4, 278.0], [59.5, 279.0], [59.6, 280.0], [59.7, 281.0], [59.8, 282.0], [59.9, 284.0], [60.0, 285.0], [60.1, 287.0], [60.2, 287.0], [60.3, 289.0], [60.4, 291.0], [60.5, 291.0], [60.6, 292.0], [60.7, 295.0], [60.8, 298.0], [60.9, 300.0], [61.0, 301.0], [61.1, 303.0], [61.2, 304.0], [61.3, 306.0], [61.4, 307.0], [61.5, 309.0], [61.6, 310.0], [61.7, 311.0], [61.8, 312.0], [61.9, 314.0], [62.0, 316.0], [62.1, 317.0], [62.2, 318.0], [62.3, 319.0], [62.4, 320.0], [62.5, 321.0], [62.6, 322.0], [62.7, 323.0], [62.8, 326.0], [62.9, 327.0], [63.0, 327.0], [63.1, 328.0], [63.2, 330.0], [63.3, 332.0], [63.4, 334.0], [63.5, 335.0], [63.6, 336.0], [63.7, 338.0], [63.8, 340.0], [63.9, 341.0], [64.0, 342.0], [64.1, 343.0], [64.2, 344.0], [64.3, 344.0], [64.4, 346.0], [64.5, 348.0], [64.6, 349.0], [64.7, 351.0], [64.8, 354.0], [64.9, 355.0], [65.0, 357.0], [65.1, 358.0], [65.2, 360.0], [65.3, 361.0], [65.4, 362.0], [65.5, 363.0], [65.6, 365.0], [65.7, 367.0], [65.8, 368.0], [65.9, 370.0], [66.0, 373.0], [66.1, 374.0], [66.2, 375.0], [66.3, 377.0], [66.4, 379.0], [66.5, 380.0], [66.6, 383.0], [66.7, 385.0], [66.8, 387.0], [66.9, 389.0], [67.0, 390.0], [67.1, 392.0], [67.2, 394.0], [67.3, 397.0], [67.4, 399.0], [67.5, 401.0], [67.6, 402.0], [67.7, 404.0], [67.8, 404.0], [67.9, 407.0], [68.0, 408.0], [68.1, 410.0], [68.2, 412.0], [68.3, 413.0], [68.4, 416.0], [68.5, 418.0], [68.6, 419.0], [68.7, 420.0], [68.8, 423.0], [68.9, 425.0], [69.0, 425.0], [69.1, 427.0], [69.2, 430.0], [69.3, 432.0], [69.4, 433.0], [69.5, 434.0], [69.6, 437.0], [69.7, 438.0], [69.8, 439.0], [69.9, 440.0], [70.0, 442.0], [70.1, 444.0], [70.2, 445.0], [70.3, 445.0], [70.4, 447.0], [70.5, 449.0], [70.6, 450.0], [70.7, 452.0], [70.8, 453.0], [70.9, 454.0], [71.0, 457.0], [71.1, 458.0], [71.2, 459.0], [71.3, 461.0], [71.4, 463.0], [71.5, 464.0], [71.6, 466.0], [71.7, 468.0], [71.8, 470.0], [71.9, 471.0], [72.0, 472.0], [72.1, 473.0], [72.2, 473.0], [72.3, 475.0], [72.4, 476.0], [72.5, 478.0], [72.6, 481.0], [72.7, 483.0], [72.8, 483.0], [72.9, 486.0], [73.0, 487.0], [73.1, 489.0], [73.2, 490.0], [73.3, 491.0], [73.4, 493.0], [73.5, 495.0], [73.6, 495.0], [73.7, 497.0], [73.8, 499.0], [73.9, 502.0], [74.0, 504.0], [74.1, 507.0], [74.2, 509.0], [74.3, 512.0], [74.4, 515.0], [74.5, 517.0], [74.6, 520.0], [74.7, 523.0], [74.8, 526.0], [74.9, 527.0], [75.0, 529.0], [75.1, 532.0], [75.2, 534.0], [75.3, 535.0], [75.4, 537.0], [75.5, 538.0], [75.6, 541.0], [75.7, 542.0], [75.8, 544.0], [75.9, 545.0], [76.0, 548.0], [76.1, 549.0], [76.2, 552.0], [76.3, 553.0], [76.4, 554.0], [76.5, 555.0], [76.6, 556.0], [76.7, 557.0], [76.8, 559.0], [76.9, 562.0], [77.0, 564.0], [77.1, 566.0], [77.2, 568.0], [77.3, 570.0], [77.4, 573.0], [77.5, 575.0], [77.6, 576.0], [77.7, 579.0], [77.8, 581.0], [77.9, 586.0], [78.0, 590.0], [78.1, 592.0], [78.2, 593.0], [78.3, 594.0], [78.4, 597.0], [78.5, 599.0], [78.6, 601.0], [78.7, 603.0], [78.8, 604.0], [78.9, 607.0], [79.0, 608.0], [79.1, 609.0], [79.2, 610.0], [79.3, 611.0], [79.4, 614.0], [79.5, 617.0], [79.6, 618.0], [79.7, 618.0], [79.8, 620.0], [79.9, 621.0], [80.0, 625.0], [80.1, 626.0], [80.2, 628.0], [80.3, 629.0], [80.4, 630.0], [80.5, 632.0], [80.6, 634.0], [80.7, 636.0], [80.8, 638.0], [80.9, 641.0], [81.0, 643.0], [81.1, 646.0], [81.2, 648.0], [81.3, 650.0], [81.4, 652.0], [81.5, 655.0], [81.6, 656.0], [81.7, 658.0], [81.8, 660.0], [81.9, 660.0], [82.0, 662.0], [82.1, 663.0], [82.2, 665.0], [82.3, 666.0], [82.4, 668.0], [82.5, 674.0], [82.6, 678.0], [82.7, 679.0], [82.8, 681.0], [82.9, 683.0], [83.0, 686.0], [83.1, 689.0], [83.2, 693.0], [83.3, 695.0], [83.4, 698.0], [83.5, 701.0], [83.6, 702.0], [83.7, 704.0], [83.8, 707.0], [83.9, 709.0], [84.0, 711.0], [84.1, 716.0], [84.2, 718.0], [84.3, 720.0], [84.4, 721.0], [84.5, 724.0], [84.6, 727.0], [84.7, 732.0], [84.8, 736.0], [84.9, 738.0], [85.0, 741.0], [85.1, 741.0], [85.2, 746.0], [85.3, 750.0], [85.4, 752.0], [85.5, 756.0], [85.6, 758.0], [85.7, 759.0], [85.8, 762.0], [85.9, 764.0], [86.0, 767.0], [86.1, 771.0], [86.2, 773.0], [86.3, 774.0], [86.4, 778.0], [86.5, 780.0], [86.6, 784.0], [86.7, 785.0], [86.8, 786.0], [86.9, 788.0], [87.0, 792.0], [87.1, 795.0], [87.2, 800.0], [87.3, 803.0], [87.4, 806.0], [87.5, 807.0], [87.6, 811.0], [87.7, 815.0], [87.8, 820.0], [87.9, 823.0], [88.0, 826.0], [88.1, 827.0], [88.2, 829.0], [88.3, 832.0], [88.4, 834.0], [88.5, 836.0], [88.6, 839.0], [88.7, 845.0], [88.8, 849.0], [88.9, 851.0], [89.0, 854.0], [89.1, 859.0], [89.2, 864.0], [89.3, 866.0], [89.4, 873.0], [89.5, 875.0], [89.6, 881.0], [89.7, 885.0], [89.8, 891.0], [89.9, 898.0], [90.0, 904.0], [90.1, 907.0], [90.2, 910.0], [90.3, 913.0], [90.4, 918.0], [90.5, 923.0], [90.6, 929.0], [90.7, 935.0], [90.8, 940.0], [90.9, 949.0], [91.0, 958.0], [91.1, 960.0], [91.2, 975.0], [91.3, 980.0], [91.4, 982.0], [91.5, 994.0], [91.6, 1006.0], [91.7, 1008.0], [91.8, 1017.0], [91.9, 1026.0], [92.0, 1033.0], [92.1, 1037.0], [92.2, 1046.0], [92.3, 1053.0], [92.4, 1064.0], [92.5, 1068.0], [92.6, 1072.0], [92.7, 1074.0], [92.8, 1078.0], [92.9, 1088.0], [93.0, 1090.0], [93.1, 1093.0], [93.2, 1097.0], [93.3, 1102.0], [93.4, 1110.0], [93.5, 1112.0], [93.6, 1115.0], [93.7, 1119.0], [93.8, 1127.0], [93.9, 1135.0], [94.0, 1142.0], [94.1, 1145.0], [94.2, 1152.0], [94.3, 1159.0], [94.4, 1164.0], [94.5, 1171.0], [94.6, 1181.0], [94.7, 1194.0], [94.8, 1197.0], [94.9, 1209.0], [95.0, 1211.0], [95.1, 1221.0], [95.2, 1226.0], [95.3, 1238.0], [95.4, 1240.0], [95.5, 1244.0], [95.6, 1253.0], [95.7, 1266.0], [95.8, 1276.0], [95.9, 1288.0], [96.0, 1294.0], [96.1, 1310.0], [96.2, 1321.0], [96.3, 1338.0], [96.4, 1353.0], [96.5, 1366.0], [96.6, 1389.0], [96.7, 1407.0], [96.8, 1421.0], [96.9, 1445.0], [97.0, 1459.0], [97.1, 1477.0], [97.2, 1497.0], [97.3, 1511.0], [97.4, 1519.0], [97.5, 1539.0], [97.6, 1550.0], [97.7, 1567.0], [97.8, 1590.0], [97.9, 1620.0], [98.0, 1637.0], [98.1, 1658.0], [98.2, 1663.0], [98.3, 1722.0], [98.4, 1741.0], [98.5, 1752.0], [98.6, 1786.0], [98.7, 1876.0], [98.8, 1933.0], [98.9, 2040.0], [99.0, 2076.0], [99.1, 2142.0], [99.2, 2221.0], [99.3, 2259.0], [99.4, 2293.0], [99.5, 2355.0], [99.6, 2468.0], [99.7, 2640.0], [99.8, 2916.0], [99.9, 3753.0], [100.0, 4231.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 2088.0, "series": [{"data": [[0.0, 2088.0], [600.0, 258.0], [700.0, 196.0], [800.0, 145.0], [900.0, 85.0], [1000.0, 89.0], [1100.0, 85.0], [1200.0, 63.0], [1300.0, 35.0], [1400.0, 27.0], [1500.0, 33.0], [100.0, 528.0], [1600.0, 21.0], [1700.0, 22.0], [1800.0, 4.0], [1900.0, 6.0], [2000.0, 12.0], [2100.0, 4.0], [2300.0, 5.0], [2200.0, 14.0], [2400.0, 7.0], [2500.0, 3.0], [2600.0, 1.0], [2800.0, 3.0], [2900.0, 3.0], [200.0, 593.0], [3400.0, 2.0], [3700.0, 1.0], [3600.0, 1.0], [3800.0, 2.0], [3900.0, 1.0], [4100.0, 1.0], [4200.0, 1.0], [300.0, 345.0], [400.0, 338.0], [500.0, 250.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 4200.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 146.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 3895.0, "series": [{"data": [[0.0, 3895.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1231.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 146.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.951871657754014, "minX": 1.6021995E12, "maxY": 10.0, "series": [{"data": [[1.6021995E12, 9.96740547588005], [1.60219962E12, 10.0], [1.60219956E12, 10.0], [1.60219968E12, 9.951871657754014]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60219968E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 361.1659687856863, "minX": 1.0, "maxY": 3801.0, "series": [{"data": [[4.0, 1312.0], [8.0, 1780.0], [2.0, 3753.0], [1.0, 3638.0], [9.0, 1052.8], [5.0, 1465.6666666666667], [10.0, 361.1659687856863], [6.0, 1661.0], [3.0, 3801.0], [7.0, 2015.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.986722306525044, 366.1407435508343]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 6591.266666666666, "minX": 1.6021995E12, "maxY": 1467772.8833333333, "series": [{"data": [[1.6021995E12, 660439.1833333333], [1.60219962E12, 1291308.0], [1.60219956E12, 1467772.8833333333], [1.60219968E12, 869957.7333333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6021995E12, 6591.266666666666], [1.60219962E12, 15731.666666666666], [1.60219956E12, 15042.933333333332], [1.60219968E12, 8213.683333333332]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60219968E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 332.0049889135255, "minX": 1.6021995E12, "maxY": 434.91978609625676, "series": [{"data": [[1.6021995E12, 414.98435462842275], [1.60219962E12, 332.0049889135255], [1.60219956E12, 343.38278595696465], [1.60219968E12, 434.91978609625676]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60219968E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 331.69567627494473, "minX": 1.6021995E12, "maxY": 434.5636363636361, "series": [{"data": [[1.6021995E12, 414.55801825293344], [1.60219962E12, 331.69567627494473], [1.60219956E12, 342.98244620611484], [1.60219968E12, 434.5636363636361]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60219968E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0066518847006651945, "minX": 1.6021995E12, "maxY": 0.12777053455019557, "series": [{"data": [[1.6021995E12, 0.12777053455019557], [1.60219962E12, 0.0066518847006651945], [1.60219956E12, 0.009626274065685178], [1.60219968E12, 0.011764705882352948]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60219968E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 32.0, "minX": 1.6021995E12, "maxY": 4231.0, "series": [{"data": [[1.6021995E12, 1933.0], [1.60219962E12, 2916.0], [1.60219956E12, 3414.0], [1.60219968E12, 4231.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6021995E12, 40.0], [1.60219962E12, 36.0], [1.60219956E12, 37.0], [1.60219968E12, 38.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6021995E12, 40.0], [1.60219962E12, 36.0], [1.60219956E12, 37.49330016851425], [1.60219968E12, 38.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6021995E12, 40.0], [1.60219962E12, 36.0], [1.60219956E12, 37.0], [1.60219968E12, 38.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.6021995E12, 38.0], [1.60219962E12, 32.0], [1.60219956E12, 33.0], [1.60219968E12, 32.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6021995E12, 292.0], [1.60219962E12, 162.0], [1.60219956E12, 181.5], [1.60219968E12, 259.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60219968E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 49.0, "minX": 1.0, "maxY": 3695.5, "series": [{"data": [[2.0, 140.5], [3.0, 1734.5], [4.0, 2549.5], [7.0, 967.0], [8.0, 836.0], [9.0, 1053.0], [10.0, 628.5], [11.0, 804.0], [12.0, 782.0], [13.0, 688.5], [14.0, 629.0], [15.0, 526.5], [16.0, 592.0], [17.0, 528.0], [18.0, 389.5], [19.0, 384.0], [20.0, 353.5], [21.0, 361.0], [22.0, 383.0], [23.0, 355.0], [24.0, 271.5], [25.0, 357.0], [26.0, 240.0], [27.0, 277.0], [28.0, 87.5], [29.0, 139.5], [30.0, 245.5], [31.0, 226.0], [33.0, 84.0], [34.0, 99.5], [35.0, 269.0], [36.0, 269.5], [38.0, 179.5], [39.0, 166.5], [40.0, 91.0], [42.0, 88.5], [43.0, 49.0], [44.0, 101.5], [45.0, 123.0], [47.0, 128.5], [49.0, 82.0], [48.0, 64.0], [51.0, 187.0], [52.0, 88.0], [54.0, 153.0], [57.0, 83.5], [59.0, 108.0], [61.0, 101.0], [63.0, 99.0], [62.0, 89.0], [66.0, 84.5], [68.0, 88.5], [73.0, 92.0], [82.0, 58.0], [85.0, 88.0], [1.0, 3695.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 85.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 49.0, "minX": 1.0, "maxY": 3695.5, "series": [{"data": [[2.0, 138.0], [3.0, 1733.5], [4.0, 2549.0], [7.0, 965.5], [8.0, 835.5], [9.0, 1052.0], [10.0, 628.5], [11.0, 804.0], [12.0, 780.5], [13.0, 688.0], [14.0, 628.0], [15.0, 526.5], [16.0, 590.5], [17.0, 527.0], [18.0, 387.0], [19.0, 383.0], [20.0, 353.0], [21.0, 358.0], [22.0, 380.5], [23.0, 355.0], [24.0, 271.0], [25.0, 357.0], [26.0, 240.0], [27.0, 276.0], [28.0, 87.5], [29.0, 139.5], [30.0, 245.0], [31.0, 226.0], [33.0, 84.0], [34.0, 99.5], [35.0, 269.0], [36.0, 269.5], [38.0, 179.5], [39.0, 166.5], [40.0, 91.0], [42.0, 88.5], [43.0, 49.0], [44.0, 101.5], [45.0, 123.0], [47.0, 128.0], [49.0, 82.0], [48.0, 64.0], [51.0, 187.0], [52.0, 88.0], [54.0, 152.5], [57.0, 83.5], [59.0, 108.0], [61.0, 100.0], [63.0, 99.0], [62.0, 89.0], [66.0, 84.5], [68.0, 88.5], [73.0, 92.0], [82.0, 58.0], [85.0, 87.0], [1.0, 3695.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 85.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 12.95, "minX": 1.6021995E12, "maxY": 30.066666666666666, "series": [{"data": [[1.6021995E12, 12.95], [1.60219962E12, 30.066666666666666], [1.60219956E12, 29.433333333333334], [1.60219968E12, 15.416666666666666]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60219968E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 12.783333333333333, "minX": 1.6021995E12, "maxY": 30.066666666666666, "series": [{"data": [[1.6021995E12, 12.783333333333333], [1.60219962E12, 30.066666666666666], [1.60219956E12, 29.433333333333334], [1.60219968E12, 15.583333333333334]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60219968E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 12.783333333333333, "minX": 1.6021995E12, "maxY": 30.066666666666666, "series": [{"data": [[1.6021995E12, 12.783333333333333], [1.60219962E12, 30.066666666666666], [1.60219956E12, 29.433333333333334], [1.60219968E12, 15.583333333333334]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60219968E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 12.783333333333333, "minX": 1.6021995E12, "maxY": 30.066666666666666, "series": [{"data": [[1.6021995E12, 12.783333333333333], [1.60219962E12, 30.066666666666666], [1.60219956E12, 29.433333333333334], [1.60219968E12, 15.583333333333334]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60219968E12, "title": "Total Transactions Per Second"}},
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

