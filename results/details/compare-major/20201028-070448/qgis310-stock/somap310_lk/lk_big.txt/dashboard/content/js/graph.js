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
        data: {"result": {"minY": 31.0, "minX": 0.0, "maxY": 3698.0, "series": [{"data": [[0.0, 31.0], [0.1, 32.0], [0.2, 33.0], [0.3, 35.0], [0.4, 35.0], [0.5, 36.0], [0.6, 36.0], [0.7, 36.0], [0.8, 36.0], [0.9, 36.0], [1.0, 37.0], [1.1, 37.0], [1.2, 37.0], [1.3, 37.0], [1.4, 37.0], [1.5, 37.0], [1.6, 37.0], [1.7, 37.0], [1.8, 38.0], [1.9, 38.0], [2.0, 38.0], [2.1, 38.0], [2.2, 38.0], [2.3, 38.0], [2.4, 38.0], [2.5, 38.0], [2.6, 38.0], [2.7, 38.0], [2.8, 38.0], [2.9, 39.0], [3.0, 39.0], [3.1, 39.0], [3.2, 39.0], [3.3, 39.0], [3.4, 39.0], [3.5, 39.0], [3.6, 39.0], [3.7, 39.0], [3.8, 39.0], [3.9, 39.0], [4.0, 39.0], [4.1, 39.0], [4.2, 40.0], [4.3, 40.0], [4.4, 40.0], [4.5, 40.0], [4.6, 40.0], [4.7, 40.0], [4.8, 40.0], [4.9, 40.0], [5.0, 40.0], [5.1, 40.0], [5.2, 40.0], [5.3, 40.0], [5.4, 41.0], [5.5, 41.0], [5.6, 41.0], [5.7, 41.0], [5.8, 41.0], [5.9, 41.0], [6.0, 41.0], [6.1, 41.0], [6.2, 41.0], [6.3, 41.0], [6.4, 41.0], [6.5, 41.0], [6.6, 41.0], [6.7, 41.0], [6.8, 42.0], [6.9, 42.0], [7.0, 42.0], [7.1, 42.0], [7.2, 42.0], [7.3, 42.0], [7.4, 42.0], [7.5, 42.0], [7.6, 42.0], [7.7, 42.0], [7.8, 42.0], [7.9, 42.0], [8.0, 42.0], [8.1, 42.0], [8.2, 42.0], [8.3, 42.0], [8.4, 43.0], [8.5, 43.0], [8.6, 43.0], [8.7, 43.0], [8.8, 43.0], [8.9, 43.0], [9.0, 43.0], [9.1, 43.0], [9.2, 43.0], [9.3, 43.0], [9.4, 43.0], [9.5, 43.0], [9.6, 43.0], [9.7, 43.0], [9.8, 43.0], [9.9, 43.0], [10.0, 44.0], [10.1, 44.0], [10.2, 44.0], [10.3, 44.0], [10.4, 44.0], [10.5, 44.0], [10.6, 44.0], [10.7, 44.0], [10.8, 44.0], [10.9, 44.0], [11.0, 44.0], [11.1, 44.0], [11.2, 44.0], [11.3, 44.0], [11.4, 44.0], [11.5, 45.0], [11.6, 45.0], [11.7, 45.0], [11.8, 45.0], [11.9, 45.0], [12.0, 45.0], [12.1, 45.0], [12.2, 45.0], [12.3, 45.0], [12.4, 45.0], [12.5, 45.0], [12.6, 45.0], [12.7, 45.0], [12.8, 45.0], [12.9, 45.0], [13.0, 45.0], [13.1, 46.0], [13.2, 46.0], [13.3, 46.0], [13.4, 46.0], [13.5, 46.0], [13.6, 46.0], [13.7, 46.0], [13.8, 46.0], [13.9, 46.0], [14.0, 46.0], [14.1, 47.0], [14.2, 47.0], [14.3, 47.0], [14.4, 47.0], [14.5, 47.0], [14.6, 47.0], [14.7, 47.0], [14.8, 47.0], [14.9, 47.0], [15.0, 48.0], [15.1, 48.0], [15.2, 48.0], [15.3, 48.0], [15.4, 48.0], [15.5, 49.0], [15.6, 49.0], [15.7, 49.0], [15.8, 49.0], [15.9, 49.0], [16.0, 49.0], [16.1, 50.0], [16.2, 50.0], [16.3, 50.0], [16.4, 50.0], [16.5, 50.0], [16.6, 50.0], [16.7, 50.0], [16.8, 50.0], [16.9, 51.0], [17.0, 51.0], [17.1, 51.0], [17.2, 52.0], [17.3, 52.0], [17.4, 52.0], [17.5, 52.0], [17.6, 52.0], [17.7, 52.0], [17.8, 53.0], [17.9, 53.0], [18.0, 54.0], [18.1, 54.0], [18.2, 54.0], [18.3, 55.0], [18.4, 55.0], [18.5, 55.0], [18.6, 56.0], [18.7, 56.0], [18.8, 56.0], [18.9, 57.0], [19.0, 58.0], [19.1, 58.0], [19.2, 58.0], [19.3, 59.0], [19.4, 59.0], [19.5, 59.0], [19.6, 60.0], [19.7, 60.0], [19.8, 60.0], [19.9, 60.0], [20.0, 61.0], [20.1, 61.0], [20.2, 61.0], [20.3, 62.0], [20.4, 62.0], [20.5, 62.0], [20.6, 63.0], [20.7, 64.0], [20.8, 64.0], [20.9, 64.0], [21.0, 65.0], [21.1, 65.0], [21.2, 65.0], [21.3, 66.0], [21.4, 67.0], [21.5, 67.0], [21.6, 68.0], [21.7, 68.0], [21.8, 68.0], [21.9, 69.0], [22.0, 69.0], [22.1, 69.0], [22.2, 69.0], [22.3, 69.0], [22.4, 70.0], [22.5, 70.0], [22.6, 70.0], [22.7, 71.0], [22.8, 71.0], [22.9, 71.0], [23.0, 71.0], [23.1, 71.0], [23.2, 71.0], [23.3, 72.0], [23.4, 72.0], [23.5, 72.0], [23.6, 72.0], [23.7, 72.0], [23.8, 73.0], [23.9, 73.0], [24.0, 73.0], [24.1, 73.0], [24.2, 74.0], [24.3, 74.0], [24.4, 74.0], [24.5, 74.0], [24.6, 74.0], [24.7, 74.0], [24.8, 75.0], [24.9, 75.0], [25.0, 75.0], [25.1, 75.0], [25.2, 75.0], [25.3, 75.0], [25.4, 75.0], [25.5, 75.0], [25.6, 75.0], [25.7, 76.0], [25.8, 76.0], [25.9, 76.0], [26.0, 76.0], [26.1, 76.0], [26.2, 76.0], [26.3, 76.0], [26.4, 77.0], [26.5, 77.0], [26.6, 77.0], [26.7, 77.0], [26.8, 78.0], [26.9, 78.0], [27.0, 78.0], [27.1, 78.0], [27.2, 78.0], [27.3, 78.0], [27.4, 78.0], [27.5, 78.0], [27.6, 78.0], [27.7, 78.0], [27.8, 78.0], [27.9, 79.0], [28.0, 79.0], [28.1, 79.0], [28.2, 79.0], [28.3, 79.0], [28.4, 79.0], [28.5, 79.0], [28.6, 79.0], [28.7, 79.0], [28.8, 80.0], [28.9, 80.0], [29.0, 80.0], [29.1, 80.0], [29.2, 80.0], [29.3, 80.0], [29.4, 80.0], [29.5, 80.0], [29.6, 81.0], [29.7, 81.0], [29.8, 81.0], [29.9, 81.0], [30.0, 81.0], [30.1, 81.0], [30.2, 81.0], [30.3, 81.0], [30.4, 81.0], [30.5, 82.0], [30.6, 82.0], [30.7, 82.0], [30.8, 82.0], [30.9, 82.0], [31.0, 82.0], [31.1, 82.0], [31.2, 82.0], [31.3, 83.0], [31.4, 83.0], [31.5, 83.0], [31.6, 83.0], [31.7, 83.0], [31.8, 83.0], [31.9, 83.0], [32.0, 83.0], [32.1, 83.0], [32.2, 83.0], [32.3, 84.0], [32.4, 84.0], [32.5, 84.0], [32.6, 84.0], [32.7, 84.0], [32.8, 84.0], [32.9, 84.0], [33.0, 84.0], [33.1, 85.0], [33.2, 85.0], [33.3, 85.0], [33.4, 85.0], [33.5, 85.0], [33.6, 85.0], [33.7, 85.0], [33.8, 85.0], [33.9, 85.0], [34.0, 86.0], [34.1, 86.0], [34.2, 86.0], [34.3, 86.0], [34.4, 86.0], [34.5, 86.0], [34.6, 87.0], [34.7, 87.0], [34.8, 87.0], [34.9, 88.0], [35.0, 88.0], [35.1, 88.0], [35.2, 88.0], [35.3, 88.0], [35.4, 89.0], [35.5, 89.0], [35.6, 89.0], [35.7, 89.0], [35.8, 90.0], [35.9, 90.0], [36.0, 90.0], [36.1, 90.0], [36.2, 90.0], [36.3, 91.0], [36.4, 91.0], [36.5, 91.0], [36.6, 92.0], [36.7, 92.0], [36.8, 92.0], [36.9, 92.0], [37.0, 93.0], [37.1, 93.0], [37.2, 94.0], [37.3, 94.0], [37.4, 94.0], [37.5, 94.0], [37.6, 95.0], [37.7, 95.0], [37.8, 95.0], [37.9, 96.0], [38.0, 96.0], [38.1, 97.0], [38.2, 97.0], [38.3, 97.0], [38.4, 98.0], [38.5, 98.0], [38.6, 99.0], [38.7, 99.0], [38.8, 99.0], [38.9, 100.0], [39.0, 100.0], [39.1, 101.0], [39.2, 102.0], [39.3, 102.0], [39.4, 103.0], [39.5, 103.0], [39.6, 104.0], [39.7, 105.0], [39.8, 105.0], [39.9, 106.0], [40.0, 106.0], [40.1, 108.0], [40.2, 108.0], [40.3, 109.0], [40.4, 109.0], [40.5, 110.0], [40.6, 111.0], [40.7, 112.0], [40.8, 112.0], [40.9, 113.0], [41.0, 114.0], [41.1, 115.0], [41.2, 115.0], [41.3, 116.0], [41.4, 117.0], [41.5, 117.0], [41.6, 117.0], [41.7, 118.0], [41.8, 118.0], [41.9, 119.0], [42.0, 119.0], [42.1, 120.0], [42.2, 120.0], [42.3, 121.0], [42.4, 122.0], [42.5, 122.0], [42.6, 123.0], [42.7, 124.0], [42.8, 125.0], [42.9, 126.0], [43.0, 126.0], [43.1, 127.0], [43.2, 128.0], [43.3, 129.0], [43.4, 130.0], [43.5, 130.0], [43.6, 131.0], [43.7, 132.0], [43.8, 133.0], [43.9, 134.0], [44.0, 134.0], [44.1, 135.0], [44.2, 135.0], [44.3, 137.0], [44.4, 138.0], [44.5, 139.0], [44.6, 140.0], [44.7, 140.0], [44.8, 143.0], [44.9, 144.0], [45.0, 145.0], [45.1, 146.0], [45.2, 148.0], [45.3, 149.0], [45.4, 150.0], [45.5, 151.0], [45.6, 152.0], [45.7, 153.0], [45.8, 155.0], [45.9, 156.0], [46.0, 157.0], [46.1, 158.0], [46.2, 158.0], [46.3, 160.0], [46.4, 161.0], [46.5, 162.0], [46.6, 163.0], [46.7, 165.0], [46.8, 166.0], [46.9, 167.0], [47.0, 167.0], [47.1, 168.0], [47.2, 169.0], [47.3, 170.0], [47.4, 171.0], [47.5, 171.0], [47.6, 172.0], [47.7, 174.0], [47.8, 175.0], [47.9, 176.0], [48.0, 176.0], [48.1, 177.0], [48.2, 178.0], [48.3, 178.0], [48.4, 179.0], [48.5, 180.0], [48.6, 180.0], [48.7, 181.0], [48.8, 181.0], [48.9, 182.0], [49.0, 183.0], [49.1, 184.0], [49.2, 185.0], [49.3, 186.0], [49.4, 186.0], [49.5, 187.0], [49.6, 188.0], [49.7, 189.0], [49.8, 190.0], [49.9, 193.0], [50.0, 193.0], [50.1, 194.0], [50.2, 195.0], [50.3, 195.0], [50.4, 196.0], [50.5, 197.0], [50.6, 198.0], [50.7, 198.0], [50.8, 199.0], [50.9, 200.0], [51.0, 200.0], [51.1, 201.0], [51.2, 202.0], [51.3, 203.0], [51.4, 204.0], [51.5, 205.0], [51.6, 206.0], [51.7, 207.0], [51.8, 208.0], [51.9, 209.0], [52.0, 211.0], [52.1, 212.0], [52.2, 213.0], [52.3, 214.0], [52.4, 216.0], [52.5, 216.0], [52.6, 217.0], [52.7, 218.0], [52.8, 219.0], [52.9, 220.0], [53.0, 220.0], [53.1, 221.0], [53.2, 221.0], [53.3, 223.0], [53.4, 224.0], [53.5, 225.0], [53.6, 226.0], [53.7, 227.0], [53.8, 228.0], [53.9, 229.0], [54.0, 230.0], [54.1, 231.0], [54.2, 232.0], [54.3, 234.0], [54.4, 235.0], [54.5, 236.0], [54.6, 237.0], [54.7, 238.0], [54.8, 239.0], [54.9, 240.0], [55.0, 240.0], [55.1, 241.0], [55.2, 242.0], [55.3, 243.0], [55.4, 244.0], [55.5, 245.0], [55.6, 246.0], [55.7, 247.0], [55.8, 249.0], [55.9, 249.0], [56.0, 251.0], [56.1, 252.0], [56.2, 255.0], [56.3, 256.0], [56.4, 257.0], [56.5, 258.0], [56.6, 259.0], [56.7, 261.0], [56.8, 261.0], [56.9, 262.0], [57.0, 262.0], [57.1, 263.0], [57.2, 264.0], [57.3, 265.0], [57.4, 265.0], [57.5, 266.0], [57.6, 267.0], [57.7, 269.0], [57.8, 270.0], [57.9, 270.0], [58.0, 271.0], [58.1, 272.0], [58.2, 273.0], [58.3, 274.0], [58.4, 275.0], [58.5, 276.0], [58.6, 277.0], [58.7, 278.0], [58.8, 280.0], [58.9, 281.0], [59.0, 282.0], [59.1, 283.0], [59.2, 285.0], [59.3, 285.0], [59.4, 286.0], [59.5, 289.0], [59.6, 290.0], [59.7, 291.0], [59.8, 292.0], [59.9, 293.0], [60.0, 294.0], [60.1, 295.0], [60.2, 296.0], [60.3, 297.0], [60.4, 299.0], [60.5, 301.0], [60.6, 303.0], [60.7, 304.0], [60.8, 306.0], [60.9, 307.0], [61.0, 308.0], [61.1, 309.0], [61.2, 310.0], [61.3, 311.0], [61.4, 312.0], [61.5, 314.0], [61.6, 316.0], [61.7, 318.0], [61.8, 319.0], [61.9, 321.0], [62.0, 322.0], [62.1, 323.0], [62.2, 324.0], [62.3, 327.0], [62.4, 328.0], [62.5, 329.0], [62.6, 331.0], [62.7, 332.0], [62.8, 332.0], [62.9, 334.0], [63.0, 335.0], [63.1, 336.0], [63.2, 338.0], [63.3, 339.0], [63.4, 341.0], [63.5, 343.0], [63.6, 344.0], [63.7, 345.0], [63.8, 346.0], [63.9, 349.0], [64.0, 350.0], [64.1, 352.0], [64.2, 353.0], [64.3, 355.0], [64.4, 356.0], [64.5, 358.0], [64.6, 361.0], [64.7, 362.0], [64.8, 363.0], [64.9, 365.0], [65.0, 366.0], [65.1, 368.0], [65.2, 370.0], [65.3, 372.0], [65.4, 373.0], [65.5, 375.0], [65.6, 377.0], [65.7, 379.0], [65.8, 381.0], [65.9, 382.0], [66.0, 385.0], [66.1, 386.0], [66.2, 387.0], [66.3, 388.0], [66.4, 389.0], [66.5, 390.0], [66.6, 393.0], [66.7, 395.0], [66.8, 396.0], [66.9, 397.0], [67.0, 398.0], [67.1, 399.0], [67.2, 400.0], [67.3, 401.0], [67.4, 402.0], [67.5, 403.0], [67.6, 404.0], [67.7, 406.0], [67.8, 407.0], [67.9, 409.0], [68.0, 412.0], [68.1, 413.0], [68.2, 414.0], [68.3, 415.0], [68.4, 417.0], [68.5, 419.0], [68.6, 420.0], [68.7, 423.0], [68.8, 424.0], [68.9, 426.0], [69.0, 428.0], [69.1, 429.0], [69.2, 430.0], [69.3, 432.0], [69.4, 433.0], [69.5, 435.0], [69.6, 437.0], [69.7, 440.0], [69.8, 441.0], [69.9, 443.0], [70.0, 444.0], [70.1, 447.0], [70.2, 449.0], [70.3, 450.0], [70.4, 451.0], [70.5, 453.0], [70.6, 455.0], [70.7, 456.0], [70.8, 457.0], [70.9, 458.0], [71.0, 460.0], [71.1, 461.0], [71.2, 463.0], [71.3, 463.0], [71.4, 466.0], [71.5, 467.0], [71.6, 469.0], [71.7, 470.0], [71.8, 471.0], [71.9, 472.0], [72.0, 474.0], [72.1, 476.0], [72.2, 479.0], [72.3, 481.0], [72.4, 482.0], [72.5, 483.0], [72.6, 486.0], [72.7, 488.0], [72.8, 490.0], [72.9, 490.0], [73.0, 491.0], [73.1, 492.0], [73.2, 494.0], [73.3, 497.0], [73.4, 498.0], [73.5, 499.0], [73.6, 501.0], [73.7, 503.0], [73.8, 504.0], [73.9, 505.0], [74.0, 507.0], [74.1, 510.0], [74.2, 513.0], [74.3, 514.0], [74.4, 516.0], [74.5, 518.0], [74.6, 521.0], [74.7, 523.0], [74.8, 524.0], [74.9, 525.0], [75.0, 527.0], [75.1, 528.0], [75.2, 532.0], [75.3, 534.0], [75.4, 535.0], [75.5, 538.0], [75.6, 541.0], [75.7, 545.0], [75.8, 546.0], [75.9, 547.0], [76.0, 550.0], [76.1, 552.0], [76.2, 553.0], [76.3, 557.0], [76.4, 560.0], [76.5, 562.0], [76.6, 565.0], [76.7, 567.0], [76.8, 570.0], [76.9, 572.0], [77.0, 573.0], [77.1, 575.0], [77.2, 577.0], [77.3, 579.0], [77.4, 580.0], [77.5, 583.0], [77.6, 585.0], [77.7, 587.0], [77.8, 589.0], [77.9, 590.0], [78.0, 592.0], [78.1, 594.0], [78.2, 595.0], [78.3, 598.0], [78.4, 598.0], [78.5, 600.0], [78.6, 601.0], [78.7, 603.0], [78.8, 605.0], [78.9, 606.0], [79.0, 607.0], [79.1, 609.0], [79.2, 613.0], [79.3, 616.0], [79.4, 618.0], [79.5, 621.0], [79.6, 623.0], [79.7, 625.0], [79.8, 629.0], [79.9, 633.0], [80.0, 635.0], [80.1, 639.0], [80.2, 640.0], [80.3, 643.0], [80.4, 645.0], [80.5, 648.0], [80.6, 650.0], [80.7, 651.0], [80.8, 654.0], [80.9, 657.0], [81.0, 658.0], [81.1, 659.0], [81.2, 661.0], [81.3, 664.0], [81.4, 665.0], [81.5, 667.0], [81.6, 668.0], [81.7, 671.0], [81.8, 674.0], [81.9, 675.0], [82.0, 680.0], [82.1, 682.0], [82.2, 684.0], [82.3, 686.0], [82.4, 688.0], [82.5, 690.0], [82.6, 693.0], [82.7, 699.0], [82.8, 701.0], [82.9, 702.0], [83.0, 706.0], [83.1, 709.0], [83.2, 712.0], [83.3, 715.0], [83.4, 718.0], [83.5, 720.0], [83.6, 722.0], [83.7, 725.0], [83.8, 728.0], [83.9, 731.0], [84.0, 735.0], [84.1, 737.0], [84.2, 740.0], [84.3, 743.0], [84.4, 749.0], [84.5, 752.0], [84.6, 753.0], [84.7, 756.0], [84.8, 761.0], [84.9, 761.0], [85.0, 763.0], [85.1, 765.0], [85.2, 767.0], [85.3, 768.0], [85.4, 770.0], [85.5, 773.0], [85.6, 774.0], [85.7, 775.0], [85.8, 777.0], [85.9, 781.0], [86.0, 783.0], [86.1, 787.0], [86.2, 788.0], [86.3, 790.0], [86.4, 792.0], [86.5, 793.0], [86.6, 797.0], [86.7, 800.0], [86.8, 802.0], [86.9, 803.0], [87.0, 809.0], [87.1, 811.0], [87.2, 813.0], [87.3, 816.0], [87.4, 818.0], [87.5, 822.0], [87.6, 825.0], [87.7, 827.0], [87.8, 831.0], [87.9, 832.0], [88.0, 834.0], [88.1, 839.0], [88.2, 843.0], [88.3, 848.0], [88.4, 851.0], [88.5, 854.0], [88.6, 861.0], [88.7, 867.0], [88.8, 871.0], [88.9, 874.0], [89.0, 877.0], [89.1, 879.0], [89.2, 883.0], [89.3, 888.0], [89.4, 893.0], [89.5, 900.0], [89.6, 905.0], [89.7, 911.0], [89.8, 916.0], [89.9, 917.0], [90.0, 920.0], [90.1, 925.0], [90.2, 927.0], [90.3, 931.0], [90.4, 937.0], [90.5, 942.0], [90.6, 944.0], [90.7, 950.0], [90.8, 954.0], [90.9, 958.0], [91.0, 960.0], [91.1, 966.0], [91.2, 973.0], [91.3, 979.0], [91.4, 983.0], [91.5, 988.0], [91.6, 991.0], [91.7, 996.0], [91.8, 1000.0], [91.9, 1004.0], [92.0, 1008.0], [92.1, 1015.0], [92.2, 1021.0], [92.3, 1028.0], [92.4, 1034.0], [92.5, 1042.0], [92.6, 1050.0], [92.7, 1059.0], [92.8, 1069.0], [92.9, 1079.0], [93.0, 1082.0], [93.1, 1091.0], [93.2, 1100.0], [93.3, 1102.0], [93.4, 1109.0], [93.5, 1112.0], [93.6, 1119.0], [93.7, 1122.0], [93.8, 1125.0], [93.9, 1137.0], [94.0, 1150.0], [94.1, 1156.0], [94.2, 1158.0], [94.3, 1168.0], [94.4, 1178.0], [94.5, 1185.0], [94.6, 1190.0], [94.7, 1193.0], [94.8, 1201.0], [94.9, 1223.0], [95.0, 1233.0], [95.1, 1242.0], [95.2, 1246.0], [95.3, 1256.0], [95.4, 1266.0], [95.5, 1275.0], [95.6, 1289.0], [95.7, 1300.0], [95.8, 1313.0], [95.9, 1325.0], [96.0, 1332.0], [96.1, 1342.0], [96.2, 1352.0], [96.3, 1357.0], [96.4, 1373.0], [96.5, 1392.0], [96.6, 1404.0], [96.7, 1418.0], [96.8, 1430.0], [96.9, 1435.0], [97.0, 1441.0], [97.1, 1454.0], [97.2, 1461.0], [97.3, 1475.0], [97.4, 1510.0], [97.5, 1536.0], [97.6, 1548.0], [97.7, 1562.0], [97.8, 1577.0], [97.9, 1592.0], [98.0, 1606.0], [98.1, 1630.0], [98.2, 1657.0], [98.3, 1692.0], [98.4, 1729.0], [98.5, 1757.0], [98.6, 1813.0], [98.7, 1855.0], [98.8, 1877.0], [98.9, 1928.0], [99.0, 1942.0], [99.1, 2011.0], [99.2, 2057.0], [99.3, 2127.0], [99.4, 2214.0], [99.5, 2278.0], [99.6, 2346.0], [99.7, 2433.0], [99.8, 2525.0], [99.9, 2692.0], [100.0, 3698.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 2043.0, "series": [{"data": [[0.0, 2043.0], [600.0, 225.0], [700.0, 210.0], [800.0, 147.0], [900.0, 121.0], [1000.0, 74.0], [1100.0, 83.0], [1200.0, 48.0], [1300.0, 46.0], [1400.0, 42.0], [1500.0, 32.0], [100.0, 635.0], [1600.0, 18.0], [1700.0, 13.0], [1800.0, 15.0], [1900.0, 13.0], [2000.0, 9.0], [2100.0, 6.0], [2200.0, 7.0], [2300.0, 7.0], [2400.0, 6.0], [2500.0, 5.0], [2600.0, 3.0], [3000.0, 1.0], [200.0, 501.0], [3500.0, 1.0], [3600.0, 3.0], [300.0, 355.0], [400.0, 336.0], [500.0, 257.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3600.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 139.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 3872.0, "series": [{"data": [[0.0, 3872.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1251.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 139.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.893617021276595, "minX": 1.60386948E12, "maxY": 10.0, "series": [{"data": [[1.60386966E12, 9.893617021276595], [1.60386948E12, 9.981293842556504], [1.6038696E12, 10.0], [1.60386954E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60386966E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 362.7138226882736, "minX": 1.0, "maxY": 3698.0, "series": [{"data": [[4.0, 882.0], [8.0, 1344.5], [2.0, 2489.0], [1.0, 3698.0], [9.0, 571.5], [5.0, 862.6666666666666], [10.0, 362.7138226882736], [6.0, 2524.0], [3.0, 3690.0], [7.0, 1909.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.98688711516533, 366.3968072976054]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 3750.4666666666667, "minX": 1.60386948E12, "maxY": 1385598.65, "series": [{"data": [[1.60386966E12, 345138.9166666667], [1.60386948E12, 1195470.0], [1.6038696E12, 1385598.65], [1.60386954E12, 1324861.3666666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60386966E12, 3750.4666666666667], [1.60386948E12, 11138.433333333332], [1.6038696E12, 14445.95], [1.60386954E12, 16156.1]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60386966E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 316.5381400208982, "minX": 1.60386948E12, "maxY": 456.07328605200945, "series": [{"data": [[1.60386966E12, 456.07328605200945], [1.60386948E12, 416.30163678877614], [1.6038696E12, 362.41900121802763], [1.60386954E12, 316.5381400208982]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60386966E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 316.16927899686476, "minX": 1.60386948E12, "maxY": 455.7304964539006, "series": [{"data": [[1.60386966E12, 455.7304964539006], [1.60386948E12, 415.78409976617274], [1.6038696E12, 361.9756394640678], [1.60386954E12, 316.16927899686476]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60386966E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0047281323877068565, "minX": 1.60386948E12, "maxY": 0.07326578332034296, "series": [{"data": [[1.60386966E12, 0.0047281323877068565], [1.60386948E12, 0.07326578332034296], [1.6038696E12, 0.010353227771010958], [1.60386954E12, 0.009926854754440977]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60386966E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 31.0, "minX": 1.60386948E12, "maxY": 3698.0, "series": [{"data": [[1.60386966E12, 3698.0], [1.60386948E12, 2278.0], [1.6038696E12, 2613.0], [1.60386954E12, 2676.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60386966E12, 36.0], [1.60386948E12, 37.0], [1.6038696E12, 36.0], [1.60386954E12, 36.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60386966E12, 36.19760004043579], [1.60386948E12, 37.0], [1.6038696E12, 36.0], [1.60386954E12, 36.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60386966E12, 36.027999949455264], [1.60386948E12, 37.0], [1.6038696E12, 36.0], [1.60386954E12, 36.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60386966E12, 33.0], [1.60386948E12, 32.0], [1.6038696E12, 31.0], [1.60386954E12, 31.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60386966E12, 216.0], [1.60386948E12, 284.0], [1.6038696E12, 207.5], [1.60386954E12, 152.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60386966E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 68.5, "minX": 2.0, "maxY": 3106.0, "series": [{"data": [[2.0, 3106.0], [3.0, 2014.5], [4.0, 1191.0], [5.0, 1271.0], [6.0, 1370.5], [7.0, 1110.5], [8.0, 801.0], [9.0, 802.0], [10.0, 886.5], [11.0, 812.5], [12.0, 719.5], [13.0, 686.5], [14.0, 640.0], [15.0, 571.0], [16.0, 584.0], [17.0, 477.0], [18.0, 499.5], [19.0, 490.5], [20.0, 396.0], [21.0, 318.5], [22.0, 143.5], [23.0, 289.0], [24.0, 70.0], [25.0, 402.0], [26.0, 230.0], [27.0, 243.0], [28.0, 219.0], [29.0, 133.0], [30.0, 276.5], [31.0, 291.0], [32.0, 328.5], [35.0, 68.5], [34.0, 207.0], [36.0, 118.5], [37.0, 192.5], [38.0, 89.5], [39.0, 94.0], [41.0, 107.0], [40.0, 86.0], [45.0, 85.0], [44.0, 96.5], [47.0, 199.0], [46.0, 111.0], [49.0, 90.0], [48.0, 80.0], [50.0, 122.0], [51.0, 172.0], [53.0, 87.5], [52.0, 173.5], [54.0, 87.5], [57.0, 173.0], [58.0, 85.5], [62.0, 131.5], [67.0, 95.0], [64.0, 150.0], [66.0, 83.5], [65.0, 87.0], [68.0, 153.0], [70.0, 89.0], [79.0, 76.0], [78.0, 81.0], [95.0, 89.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 95.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 68.5, "minX": 2.0, "maxY": 3105.0, "series": [{"data": [[2.0, 3105.0], [3.0, 2013.5], [4.0, 1191.0], [5.0, 1269.5], [6.0, 1369.0], [7.0, 1107.5], [8.0, 801.0], [9.0, 802.0], [10.0, 886.0], [11.0, 812.0], [12.0, 719.5], [13.0, 686.5], [14.0, 638.5], [15.0, 569.5], [16.0, 583.0], [17.0, 476.0], [18.0, 499.0], [19.0, 489.5], [20.0, 394.5], [21.0, 318.5], [22.0, 143.5], [23.0, 289.0], [24.0, 70.0], [25.0, 402.0], [26.0, 228.5], [27.0, 242.0], [28.0, 219.0], [29.0, 133.0], [30.0, 276.5], [31.0, 290.0], [32.0, 328.5], [35.0, 68.5], [34.0, 206.0], [36.0, 118.5], [37.0, 192.5], [38.0, 89.5], [39.0, 94.0], [41.0, 107.0], [40.0, 86.0], [45.0, 85.0], [44.0, 96.5], [47.0, 198.0], [46.0, 111.0], [49.0, 90.0], [48.0, 80.0], [50.0, 122.0], [51.0, 172.0], [53.0, 87.5], [52.0, 173.5], [54.0, 87.5], [57.0, 173.0], [58.0, 85.0], [62.0, 131.0], [67.0, 95.0], [64.0, 149.5], [66.0, 83.5], [65.0, 87.0], [68.0, 152.5], [70.0, 89.0], [79.0, 75.0], [78.0, 81.0], [95.0, 89.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 95.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 6.883333333333334, "minX": 1.60386948E12, "maxY": 31.9, "series": [{"data": [[1.60386966E12, 6.883333333333334], [1.60386948E12, 21.55], [1.6038696E12, 27.366666666666667], [1.60386954E12, 31.9]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60386966E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 7.05, "minX": 1.60386948E12, "maxY": 31.9, "series": [{"data": [[1.60386966E12, 7.05], [1.60386948E12, 21.383333333333333], [1.6038696E12, 27.366666666666667], [1.60386954E12, 31.9]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60386966E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 7.05, "minX": 1.60386948E12, "maxY": 31.9, "series": [{"data": [[1.60386966E12, 7.05], [1.60386948E12, 21.383333333333333], [1.6038696E12, 27.366666666666667], [1.60386954E12, 31.9]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60386966E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 7.05, "minX": 1.60386948E12, "maxY": 31.9, "series": [{"data": [[1.60386966E12, 7.05], [1.60386948E12, 21.383333333333333], [1.6038696E12, 27.366666666666667], [1.60386954E12, 31.9]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60386966E12, "title": "Total Transactions Per Second"}},
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

