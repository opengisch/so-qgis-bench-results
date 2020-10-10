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
        data: {"result": {"minY": 28.0, "minX": 0.0, "maxY": 3415.0, "series": [{"data": [[0.0, 28.0], [0.1, 29.0], [0.2, 29.0], [0.3, 30.0], [0.4, 30.0], [0.5, 31.0], [0.6, 31.0], [0.7, 31.0], [0.8, 32.0], [0.9, 32.0], [1.0, 32.0], [1.1, 32.0], [1.2, 32.0], [1.3, 33.0], [1.4, 33.0], [1.5, 33.0], [1.6, 33.0], [1.7, 33.0], [1.8, 33.0], [1.9, 34.0], [2.0, 34.0], [2.1, 34.0], [2.2, 34.0], [2.3, 34.0], [2.4, 34.0], [2.5, 34.0], [2.6, 34.0], [2.7, 34.0], [2.8, 34.0], [2.9, 34.0], [3.0, 34.0], [3.1, 34.0], [3.2, 34.0], [3.3, 35.0], [3.4, 35.0], [3.5, 35.0], [3.6, 35.0], [3.7, 35.0], [3.8, 35.0], [3.9, 35.0], [4.0, 35.0], [4.1, 35.0], [4.2, 35.0], [4.3, 35.0], [4.4, 35.0], [4.5, 35.0], [4.6, 35.0], [4.7, 36.0], [4.8, 36.0], [4.9, 36.0], [5.0, 36.0], [5.1, 36.0], [5.2, 36.0], [5.3, 36.0], [5.4, 36.0], [5.5, 36.0], [5.6, 36.0], [5.7, 36.0], [5.8, 36.0], [5.9, 36.0], [6.0, 37.0], [6.1, 37.0], [6.2, 37.0], [6.3, 37.0], [6.4, 37.0], [6.5, 37.0], [6.6, 37.0], [6.7, 37.0], [6.8, 37.0], [6.9, 37.0], [7.0, 37.0], [7.1, 37.0], [7.2, 37.0], [7.3, 37.0], [7.4, 37.0], [7.5, 38.0], [7.6, 38.0], [7.7, 38.0], [7.8, 38.0], [7.9, 38.0], [8.0, 38.0], [8.1, 38.0], [8.2, 38.0], [8.3, 38.0], [8.4, 38.0], [8.5, 38.0], [8.6, 38.0], [8.7, 38.0], [8.8, 38.0], [8.9, 38.0], [9.0, 39.0], [9.1, 39.0], [9.2, 39.0], [9.3, 39.0], [9.4, 39.0], [9.5, 39.0], [9.6, 39.0], [9.7, 39.0], [9.8, 39.0], [9.9, 39.0], [10.0, 39.0], [10.1, 39.0], [10.2, 39.0], [10.3, 40.0], [10.4, 40.0], [10.5, 40.0], [10.6, 40.0], [10.7, 40.0], [10.8, 40.0], [10.9, 40.0], [11.0, 40.0], [11.1, 40.0], [11.2, 40.0], [11.3, 40.0], [11.4, 41.0], [11.5, 41.0], [11.6, 41.0], [11.7, 41.0], [11.8, 41.0], [11.9, 41.0], [12.0, 41.0], [12.1, 41.0], [12.2, 41.0], [12.3, 41.0], [12.4, 42.0], [12.5, 42.0], [12.6, 42.0], [12.7, 42.0], [12.8, 42.0], [12.9, 42.0], [13.0, 42.0], [13.1, 42.0], [13.2, 43.0], [13.3, 43.0], [13.4, 43.0], [13.5, 43.0], [13.6, 43.0], [13.7, 44.0], [13.8, 44.0], [13.9, 44.0], [14.0, 44.0], [14.1, 44.0], [14.2, 44.0], [14.3, 45.0], [14.4, 45.0], [14.5, 45.0], [14.6, 45.0], [14.7, 46.0], [14.8, 46.0], [14.9, 46.0], [15.0, 46.0], [15.1, 47.0], [15.2, 47.0], [15.3, 47.0], [15.4, 48.0], [15.5, 48.0], [15.6, 48.0], [15.7, 48.0], [15.8, 48.0], [15.9, 49.0], [16.0, 49.0], [16.1, 49.0], [16.2, 50.0], [16.3, 50.0], [16.4, 50.0], [16.5, 51.0], [16.6, 52.0], [16.7, 52.0], [16.8, 53.0], [16.9, 53.0], [17.0, 53.0], [17.1, 54.0], [17.2, 54.0], [17.3, 55.0], [17.4, 55.0], [17.5, 55.0], [17.6, 55.0], [17.7, 56.0], [17.8, 56.0], [17.9, 57.0], [18.0, 57.0], [18.1, 57.0], [18.2, 57.0], [18.3, 58.0], [18.4, 58.0], [18.5, 58.0], [18.6, 58.0], [18.7, 58.0], [18.8, 59.0], [18.9, 59.0], [19.0, 59.0], [19.1, 59.0], [19.2, 59.0], [19.3, 59.0], [19.4, 60.0], [19.5, 60.0], [19.6, 60.0], [19.7, 60.0], [19.8, 60.0], [19.9, 61.0], [20.0, 61.0], [20.1, 61.0], [20.2, 62.0], [20.3, 62.0], [20.4, 62.0], [20.5, 62.0], [20.6, 62.0], [20.7, 63.0], [20.8, 63.0], [20.9, 63.0], [21.0, 63.0], [21.1, 64.0], [21.2, 64.0], [21.3, 64.0], [21.4, 64.0], [21.5, 64.0], [21.6, 65.0], [21.7, 65.0], [21.8, 65.0], [21.9, 65.0], [22.0, 65.0], [22.1, 66.0], [22.2, 66.0], [22.3, 66.0], [22.4, 66.0], [22.5, 66.0], [22.6, 66.0], [22.7, 66.0], [22.8, 66.0], [22.9, 66.0], [23.0, 67.0], [23.1, 67.0], [23.2, 67.0], [23.3, 67.0], [23.4, 67.0], [23.5, 67.0], [23.6, 67.0], [23.7, 67.0], [23.8, 67.0], [23.9, 67.0], [24.0, 68.0], [24.1, 68.0], [24.2, 68.0], [24.3, 68.0], [24.4, 68.0], [24.5, 68.0], [24.6, 68.0], [24.7, 68.0], [24.8, 68.0], [24.9, 69.0], [25.0, 69.0], [25.1, 69.0], [25.2, 69.0], [25.3, 69.0], [25.4, 69.0], [25.5, 69.0], [25.6, 69.0], [25.7, 69.0], [25.8, 69.0], [25.9, 70.0], [26.0, 70.0], [26.1, 70.0], [26.2, 70.0], [26.3, 70.0], [26.4, 70.0], [26.5, 70.0], [26.6, 70.0], [26.7, 70.0], [26.8, 70.0], [26.9, 71.0], [27.0, 71.0], [27.1, 71.0], [27.2, 71.0], [27.3, 71.0], [27.4, 71.0], [27.5, 71.0], [27.6, 71.0], [27.7, 71.0], [27.8, 71.0], [27.9, 72.0], [28.0, 72.0], [28.1, 72.0], [28.2, 72.0], [28.3, 72.0], [28.4, 72.0], [28.5, 72.0], [28.6, 72.0], [28.7, 72.0], [28.8, 72.0], [28.9, 72.0], [29.0, 73.0], [29.1, 73.0], [29.2, 73.0], [29.3, 73.0], [29.4, 73.0], [29.5, 73.0], [29.6, 73.0], [29.7, 73.0], [29.8, 74.0], [29.9, 74.0], [30.0, 74.0], [30.1, 74.0], [30.2, 74.0], [30.3, 74.0], [30.4, 74.0], [30.5, 74.0], [30.6, 74.0], [30.7, 74.0], [30.8, 74.0], [30.9, 75.0], [31.0, 75.0], [31.1, 75.0], [31.2, 75.0], [31.3, 75.0], [31.4, 75.0], [31.5, 75.0], [31.6, 75.0], [31.7, 75.0], [31.8, 76.0], [31.9, 76.0], [32.0, 76.0], [32.1, 76.0], [32.2, 76.0], [32.3, 76.0], [32.4, 76.0], [32.5, 76.0], [32.6, 76.0], [32.7, 77.0], [32.8, 77.0], [32.9, 77.0], [33.0, 77.0], [33.1, 77.0], [33.2, 77.0], [33.3, 77.0], [33.4, 77.0], [33.5, 78.0], [33.6, 78.0], [33.7, 78.0], [33.8, 78.0], [33.9, 78.0], [34.0, 78.0], [34.1, 78.0], [34.2, 78.0], [34.3, 79.0], [34.4, 79.0], [34.5, 79.0], [34.6, 79.0], [34.7, 79.0], [34.8, 79.0], [34.9, 79.0], [35.0, 80.0], [35.1, 80.0], [35.2, 80.0], [35.3, 80.0], [35.4, 80.0], [35.5, 80.0], [35.6, 81.0], [35.7, 81.0], [35.8, 81.0], [35.9, 81.0], [36.0, 81.0], [36.1, 82.0], [36.2, 82.0], [36.3, 82.0], [36.4, 82.0], [36.5, 82.0], [36.6, 82.0], [36.7, 83.0], [36.8, 83.0], [36.9, 83.0], [37.0, 83.0], [37.1, 84.0], [37.2, 84.0], [37.3, 84.0], [37.4, 84.0], [37.5, 85.0], [37.6, 85.0], [37.7, 85.0], [37.8, 86.0], [37.9, 86.0], [38.0, 86.0], [38.1, 86.0], [38.2, 87.0], [38.3, 87.0], [38.4, 87.0], [38.5, 88.0], [38.6, 88.0], [38.7, 88.0], [38.8, 89.0], [38.9, 89.0], [39.0, 89.0], [39.1, 90.0], [39.2, 90.0], [39.3, 90.0], [39.4, 91.0], [39.5, 91.0], [39.6, 92.0], [39.7, 92.0], [39.8, 93.0], [39.9, 94.0], [40.0, 94.0], [40.1, 95.0], [40.2, 95.0], [40.3, 96.0], [40.4, 96.0], [40.5, 96.0], [40.6, 97.0], [40.7, 98.0], [40.8, 99.0], [40.9, 100.0], [41.0, 101.0], [41.1, 101.0], [41.2, 102.0], [41.3, 103.0], [41.4, 103.0], [41.5, 103.0], [41.6, 104.0], [41.7, 105.0], [41.8, 106.0], [41.9, 107.0], [42.0, 107.0], [42.1, 108.0], [42.2, 108.0], [42.3, 109.0], [42.4, 109.0], [42.5, 110.0], [42.6, 110.0], [42.7, 111.0], [42.8, 111.0], [42.9, 111.0], [43.0, 112.0], [43.1, 112.0], [43.2, 113.0], [43.3, 113.0], [43.4, 113.0], [43.5, 114.0], [43.6, 115.0], [43.7, 115.0], [43.8, 116.0], [43.9, 117.0], [44.0, 117.0], [44.1, 118.0], [44.2, 118.0], [44.3, 119.0], [44.4, 120.0], [44.5, 120.0], [44.6, 121.0], [44.7, 121.0], [44.8, 123.0], [44.9, 123.0], [45.0, 124.0], [45.1, 124.0], [45.2, 125.0], [45.3, 126.0], [45.4, 126.0], [45.5, 127.0], [45.6, 128.0], [45.7, 128.0], [45.8, 129.0], [45.9, 129.0], [46.0, 129.0], [46.1, 130.0], [46.2, 131.0], [46.3, 131.0], [46.4, 132.0], [46.5, 133.0], [46.6, 134.0], [46.7, 136.0], [46.8, 136.0], [46.9, 137.0], [47.0, 137.0], [47.1, 138.0], [47.2, 138.0], [47.3, 139.0], [47.4, 139.0], [47.5, 140.0], [47.6, 142.0], [47.7, 142.0], [47.8, 144.0], [47.9, 145.0], [48.0, 147.0], [48.1, 148.0], [48.2, 149.0], [48.3, 151.0], [48.4, 152.0], [48.5, 153.0], [48.6, 154.0], [48.7, 155.0], [48.8, 156.0], [48.9, 157.0], [49.0, 158.0], [49.1, 159.0], [49.2, 161.0], [49.3, 162.0], [49.4, 163.0], [49.5, 165.0], [49.6, 165.0], [49.7, 166.0], [49.8, 166.0], [49.9, 167.0], [50.0, 168.0], [50.1, 170.0], [50.2, 170.0], [50.3, 172.0], [50.4, 174.0], [50.5, 175.0], [50.6, 177.0], [50.7, 178.0], [50.8, 180.0], [50.9, 181.0], [51.0, 181.0], [51.1, 182.0], [51.2, 184.0], [51.3, 185.0], [51.4, 186.0], [51.5, 188.0], [51.6, 189.0], [51.7, 190.0], [51.8, 191.0], [51.9, 191.0], [52.0, 192.0], [52.1, 193.0], [52.2, 194.0], [52.3, 195.0], [52.4, 196.0], [52.5, 196.0], [52.6, 197.0], [52.7, 198.0], [52.8, 199.0], [52.9, 199.0], [53.0, 201.0], [53.1, 202.0], [53.2, 203.0], [53.3, 203.0], [53.4, 204.0], [53.5, 206.0], [53.6, 206.0], [53.7, 208.0], [53.8, 209.0], [53.9, 211.0], [54.0, 212.0], [54.1, 214.0], [54.2, 215.0], [54.3, 215.0], [54.4, 215.0], [54.5, 217.0], [54.6, 217.0], [54.7, 218.0], [54.8, 219.0], [54.9, 220.0], [55.0, 221.0], [55.1, 221.0], [55.2, 222.0], [55.3, 223.0], [55.4, 224.0], [55.5, 225.0], [55.6, 228.0], [55.7, 228.0], [55.8, 229.0], [55.9, 230.0], [56.0, 230.0], [56.1, 231.0], [56.2, 232.0], [56.3, 232.0], [56.4, 232.0], [56.5, 232.0], [56.6, 234.0], [56.7, 234.0], [56.8, 235.0], [56.9, 236.0], [57.0, 237.0], [57.1, 238.0], [57.2, 239.0], [57.3, 239.0], [57.4, 240.0], [57.5, 240.0], [57.6, 241.0], [57.7, 242.0], [57.8, 243.0], [57.9, 243.0], [58.0, 244.0], [58.1, 246.0], [58.2, 247.0], [58.3, 248.0], [58.4, 249.0], [58.5, 250.0], [58.6, 251.0], [58.7, 252.0], [58.8, 254.0], [58.9, 254.0], [59.0, 255.0], [59.1, 256.0], [59.2, 257.0], [59.3, 257.0], [59.4, 258.0], [59.5, 259.0], [59.6, 260.0], [59.7, 261.0], [59.8, 261.0], [59.9, 262.0], [60.0, 263.0], [60.1, 263.0], [60.2, 265.0], [60.3, 266.0], [60.4, 267.0], [60.5, 268.0], [60.6, 269.0], [60.7, 270.0], [60.8, 271.0], [60.9, 272.0], [61.0, 273.0], [61.1, 273.0], [61.2, 274.0], [61.3, 275.0], [61.4, 276.0], [61.5, 276.0], [61.6, 278.0], [61.7, 279.0], [61.8, 281.0], [61.9, 282.0], [62.0, 283.0], [62.1, 284.0], [62.2, 285.0], [62.3, 287.0], [62.4, 287.0], [62.5, 288.0], [62.6, 289.0], [62.7, 290.0], [62.8, 291.0], [62.9, 293.0], [63.0, 293.0], [63.1, 296.0], [63.2, 296.0], [63.3, 298.0], [63.4, 299.0], [63.5, 299.0], [63.6, 301.0], [63.7, 302.0], [63.8, 303.0], [63.9, 305.0], [64.0, 306.0], [64.1, 307.0], [64.2, 309.0], [64.3, 312.0], [64.4, 312.0], [64.5, 313.0], [64.6, 314.0], [64.7, 317.0], [64.8, 318.0], [64.9, 319.0], [65.0, 321.0], [65.1, 322.0], [65.2, 323.0], [65.3, 324.0], [65.4, 325.0], [65.5, 326.0], [65.6, 327.0], [65.7, 328.0], [65.8, 329.0], [65.9, 330.0], [66.0, 331.0], [66.1, 331.0], [66.2, 333.0], [66.3, 335.0], [66.4, 337.0], [66.5, 338.0], [66.6, 340.0], [66.7, 341.0], [66.8, 343.0], [66.9, 345.0], [67.0, 346.0], [67.1, 347.0], [67.2, 348.0], [67.3, 350.0], [67.4, 350.0], [67.5, 351.0], [67.6, 353.0], [67.7, 354.0], [67.8, 354.0], [67.9, 355.0], [68.0, 357.0], [68.1, 359.0], [68.2, 360.0], [68.3, 361.0], [68.4, 362.0], [68.5, 364.0], [68.6, 366.0], [68.7, 367.0], [68.8, 367.0], [68.9, 368.0], [69.0, 369.0], [69.1, 370.0], [69.2, 372.0], [69.3, 373.0], [69.4, 374.0], [69.5, 376.0], [69.6, 378.0], [69.7, 378.0], [69.8, 379.0], [69.9, 381.0], [70.0, 382.0], [70.1, 384.0], [70.2, 384.0], [70.3, 386.0], [70.4, 387.0], [70.5, 389.0], [70.6, 390.0], [70.7, 393.0], [70.8, 394.0], [70.9, 396.0], [71.0, 398.0], [71.1, 399.0], [71.2, 401.0], [71.3, 401.0], [71.4, 403.0], [71.5, 404.0], [71.6, 404.0], [71.7, 406.0], [71.8, 408.0], [71.9, 409.0], [72.0, 409.0], [72.1, 412.0], [72.2, 413.0], [72.3, 414.0], [72.4, 415.0], [72.5, 418.0], [72.6, 419.0], [72.7, 421.0], [72.8, 422.0], [72.9, 423.0], [73.0, 424.0], [73.1, 425.0], [73.2, 425.0], [73.3, 427.0], [73.4, 428.0], [73.5, 429.0], [73.6, 429.0], [73.7, 430.0], [73.8, 432.0], [73.9, 434.0], [74.0, 435.0], [74.1, 437.0], [74.2, 438.0], [74.3, 440.0], [74.4, 441.0], [74.5, 443.0], [74.6, 444.0], [74.7, 446.0], [74.8, 447.0], [74.9, 448.0], [75.0, 450.0], [75.1, 450.0], [75.2, 451.0], [75.3, 453.0], [75.4, 455.0], [75.5, 456.0], [75.6, 457.0], [75.7, 458.0], [75.8, 460.0], [75.9, 461.0], [76.0, 462.0], [76.1, 463.0], [76.2, 466.0], [76.3, 468.0], [76.4, 469.0], [76.5, 470.0], [76.6, 471.0], [76.7, 472.0], [76.8, 473.0], [76.9, 475.0], [77.0, 476.0], [77.1, 478.0], [77.2, 479.0], [77.3, 482.0], [77.4, 483.0], [77.5, 484.0], [77.6, 486.0], [77.7, 487.0], [77.8, 489.0], [77.9, 491.0], [78.0, 493.0], [78.1, 494.0], [78.2, 495.0], [78.3, 496.0], [78.4, 497.0], [78.5, 500.0], [78.6, 502.0], [78.7, 503.0], [78.8, 503.0], [78.9, 506.0], [79.0, 511.0], [79.1, 513.0], [79.2, 514.0], [79.3, 517.0], [79.4, 518.0], [79.5, 520.0], [79.6, 521.0], [79.7, 524.0], [79.8, 526.0], [79.9, 528.0], [80.0, 529.0], [80.1, 531.0], [80.2, 535.0], [80.3, 538.0], [80.4, 540.0], [80.5, 542.0], [80.6, 545.0], [80.7, 546.0], [80.8, 547.0], [80.9, 548.0], [81.0, 549.0], [81.1, 550.0], [81.2, 552.0], [81.3, 553.0], [81.4, 555.0], [81.5, 557.0], [81.6, 559.0], [81.7, 560.0], [81.8, 562.0], [81.9, 564.0], [82.0, 564.0], [82.1, 566.0], [82.2, 567.0], [82.3, 569.0], [82.4, 572.0], [82.5, 574.0], [82.6, 575.0], [82.7, 577.0], [82.8, 580.0], [82.9, 581.0], [83.0, 583.0], [83.1, 585.0], [83.2, 587.0], [83.3, 590.0], [83.4, 592.0], [83.5, 595.0], [83.6, 596.0], [83.7, 597.0], [83.8, 599.0], [83.9, 601.0], [84.0, 602.0], [84.1, 604.0], [84.2, 607.0], [84.3, 609.0], [84.4, 611.0], [84.5, 613.0], [84.6, 615.0], [84.7, 617.0], [84.8, 618.0], [84.9, 620.0], [85.0, 622.0], [85.1, 623.0], [85.2, 625.0], [85.3, 627.0], [85.4, 628.0], [85.5, 630.0], [85.6, 631.0], [85.7, 634.0], [85.8, 635.0], [85.9, 638.0], [86.0, 641.0], [86.1, 643.0], [86.2, 645.0], [86.3, 646.0], [86.4, 650.0], [86.5, 653.0], [86.6, 654.0], [86.7, 657.0], [86.8, 659.0], [86.9, 662.0], [87.0, 663.0], [87.1, 666.0], [87.2, 668.0], [87.3, 670.0], [87.4, 674.0], [87.5, 676.0], [87.6, 682.0], [87.7, 684.0], [87.8, 687.0], [87.9, 689.0], [88.0, 691.0], [88.1, 692.0], [88.2, 697.0], [88.3, 700.0], [88.4, 703.0], [88.5, 707.0], [88.6, 709.0], [88.7, 712.0], [88.8, 714.0], [88.9, 719.0], [89.0, 722.0], [89.1, 724.0], [89.2, 727.0], [89.3, 728.0], [89.4, 730.0], [89.5, 731.0], [89.6, 733.0], [89.7, 739.0], [89.8, 742.0], [89.9, 747.0], [90.0, 750.0], [90.1, 753.0], [90.2, 756.0], [90.3, 758.0], [90.4, 760.0], [90.5, 765.0], [90.6, 769.0], [90.7, 770.0], [90.8, 773.0], [90.9, 776.0], [91.0, 777.0], [91.1, 782.0], [91.2, 787.0], [91.3, 790.0], [91.4, 792.0], [91.5, 795.0], [91.6, 802.0], [91.7, 805.0], [91.8, 809.0], [91.9, 812.0], [92.0, 814.0], [92.1, 816.0], [92.2, 825.0], [92.3, 827.0], [92.4, 833.0], [92.5, 837.0], [92.6, 840.0], [92.7, 846.0], [92.8, 848.0], [92.9, 853.0], [93.0, 855.0], [93.1, 861.0], [93.2, 867.0], [93.3, 872.0], [93.4, 875.0], [93.5, 877.0], [93.6, 888.0], [93.7, 892.0], [93.8, 899.0], [93.9, 904.0], [94.0, 908.0], [94.1, 918.0], [94.2, 925.0], [94.3, 931.0], [94.4, 936.0], [94.5, 941.0], [94.6, 945.0], [94.7, 955.0], [94.8, 957.0], [94.9, 961.0], [95.0, 965.0], [95.1, 972.0], [95.2, 975.0], [95.3, 981.0], [95.4, 988.0], [95.5, 991.0], [95.6, 999.0], [95.7, 1003.0], [95.8, 1011.0], [95.9, 1019.0], [96.0, 1028.0], [96.1, 1035.0], [96.2, 1048.0], [96.3, 1058.0], [96.4, 1064.0], [96.5, 1074.0], [96.6, 1078.0], [96.7, 1085.0], [96.8, 1091.0], [96.9, 1100.0], [97.0, 1109.0], [97.1, 1123.0], [97.2, 1139.0], [97.3, 1161.0], [97.4, 1177.0], [97.5, 1191.0], [97.6, 1203.0], [97.7, 1212.0], [97.8, 1236.0], [97.9, 1254.0], [98.0, 1272.0], [98.1, 1285.0], [98.2, 1314.0], [98.3, 1351.0], [98.4, 1363.0], [98.5, 1370.0], [98.6, 1437.0], [98.7, 1442.0], [98.8, 1457.0], [98.9, 1489.0], [99.0, 1508.0], [99.1, 1542.0], [99.2, 1567.0], [99.3, 1676.0], [99.4, 1790.0], [99.5, 1889.0], [99.6, 2076.0], [99.7, 2122.0], [99.8, 2208.0], [99.9, 2380.0], [100.0, 3415.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 2155.0, "series": [{"data": [[0.0, 2155.0], [600.0, 236.0], [700.0, 173.0], [800.0, 119.0], [900.0, 95.0], [1000.0, 67.0], [1100.0, 36.0], [1200.0, 29.0], [1300.0, 22.0], [1400.0, 24.0], [1500.0, 13.0], [100.0, 634.0], [1600.0, 6.0], [1700.0, 3.0], [1800.0, 5.0], [1900.0, 2.0], [2000.0, 7.0], [2100.0, 6.0], [2200.0, 5.0], [2300.0, 1.0], [2400.0, 1.0], [2600.0, 1.0], [3100.0, 1.0], [200.0, 561.0], [3200.0, 1.0], [3400.0, 1.0], [300.0, 400.0], [400.0, 386.0], [500.0, 282.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3400.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 53.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 4141.0, "series": [{"data": [[0.0, 4141.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1078.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 53.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.35897435897436, "minX": 1.6023117E12, "maxY": 10.0, "series": [{"data": [[1.60231188E12, 9.960422163588388], [1.6023117E12, 9.35897435897436], [1.60231182E12, 10.0], [1.60231176E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60231188E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 302.83767840152206, "minX": 1.0, "maxY": 3158.0, "series": [{"data": [[8.0, 600.0], [4.0, 2099.0], [2.0, 2208.0], [1.0, 3158.0], [9.0, 764.25], [5.0, 795.0], [10.0, 302.83767840152206], [3.0, 1776.5], [6.0, 1078.0], [7.0, 1737.5]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.986722306525044, 306.07454476479546]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 312.85, "minX": 1.6023117E12, "maxY": 1696934.35, "series": [{"data": [[1.60231188E12, 1228179.7666666666], [1.6023117E12, 18319.633333333335], [1.60231182E12, 1347711.9666666666], [1.60231176E12, 1696934.35]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60231188E12, 10060.966666666667], [1.6023117E12, 312.85], [1.60231182E12, 20622.133333333335], [1.60231176E12, 14583.6]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60231188E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 245.58687577383375, "minX": 1.6023117E12, "maxY": 359.0107591153614, "series": [{"data": [[1.60231188E12, 357.0773966578722], [1.6023117E12, 306.30769230769243], [1.60231182E12, 245.58687577383375], [1.60231176E12, 359.0107591153614]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60231188E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 245.36277342137842, "minX": 1.6023117E12, "maxY": 358.583980872684, "series": [{"data": [[1.60231188E12, 356.63412489006157], [1.6023117E12, 306.00000000000006], [1.60231182E12, 245.36277342137842], [1.60231176E12, 358.583980872684]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60231188E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.005379557680812915, "minX": 1.6023117E12, "maxY": 2.1538461538461537, "series": [{"data": [[1.60231188E12, 0.008795074758135443], [1.6023117E12, 2.1538461538461537], [1.60231182E12, 0.007841518778373928], [1.60231176E12, 0.005379557680812915]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60231188E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 28.0, "minX": 1.6023117E12, "maxY": 3415.0, "series": [{"data": [[1.60231188E12, 3415.0], [1.6023117E12, 998.0], [1.60231182E12, 2239.0], [1.60231176E12, 2030.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60231188E12, 32.0], [1.6023117E12, 41.0], [1.60231182E12, 32.0], [1.60231176E12, 31.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60231188E12, 32.26620010852814], [1.6023117E12, 41.0], [1.60231182E12, 32.0], [1.60231176E12, 31.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60231188E12, 32.0], [1.6023117E12, 41.0], [1.60231182E12, 32.0], [1.60231176E12, 31.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60231188E12, 28.0], [1.6023117E12, 41.0], [1.60231182E12, 29.0], [1.60231176E12, 29.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60231188E12, 240.0], [1.6023117E12, 195.0], [1.60231182E12, 123.0], [1.60231176E12, 249.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60231188E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 67.0, "minX": 2.0, "maxY": 2683.0, "series": [{"data": [[2.0, 2683.0], [3.0, 2240.0], [5.0, 1277.0], [6.0, 1046.0], [7.0, 893.5], [8.0, 685.5], [10.0, 660.0], [11.0, 988.0], [12.0, 730.0], [13.0, 652.0], [14.0, 702.5], [15.0, 623.0], [16.0, 477.0], [17.0, 509.5], [18.0, 473.5], [19.0, 494.0], [20.0, 103.0], [21.0, 421.0], [22.0, 372.5], [23.0, 378.0], [24.0, 284.0], [25.0, 344.0], [26.0, 384.5], [27.0, 260.0], [28.0, 289.5], [29.0, 285.0], [30.0, 118.5], [31.0, 246.5], [33.0, 253.0], [32.0, 405.5], [34.0, 205.5], [35.0, 283.0], [37.0, 122.0], [36.0, 237.0], [38.0, 116.0], [39.0, 145.0], [40.0, 202.0], [41.0, 142.0], [42.0, 70.5], [43.0, 223.0], [44.0, 137.0], [45.0, 251.0], [46.0, 90.5], [48.0, 221.5], [49.0, 69.5], [50.0, 92.5], [51.0, 111.0], [52.0, 96.0], [53.0, 67.0], [55.0, 76.0], [54.0, 127.5], [63.0, 81.0], [62.0, 79.0], [64.0, 132.5], [67.0, 131.0], [70.0, 76.0], [69.0, 108.0], [74.0, 102.5], [73.0, 77.0], [87.0, 76.0], [88.0, 70.5], [89.0, 67.0], [94.0, 103.0], [96.0, 72.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 96.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 67.0, "minX": 2.0, "maxY": 2682.5, "series": [{"data": [[2.0, 2682.5], [3.0, 2240.0], [5.0, 1276.5], [6.0, 1045.5], [7.0, 893.5], [8.0, 685.5], [10.0, 659.5], [11.0, 988.0], [12.0, 729.5], [13.0, 652.0], [14.0, 701.5], [15.0, 622.0], [16.0, 476.0], [17.0, 509.0], [18.0, 473.0], [19.0, 493.0], [20.0, 103.0], [21.0, 419.5], [22.0, 372.5], [23.0, 377.5], [24.0, 284.0], [25.0, 343.5], [26.0, 384.0], [27.0, 260.0], [28.0, 289.5], [29.0, 285.0], [30.0, 118.5], [31.0, 246.0], [33.0, 253.0], [32.0, 405.5], [34.0, 205.5], [35.0, 283.0], [37.0, 122.0], [36.0, 237.0], [38.0, 116.0], [39.0, 144.0], [40.0, 202.0], [41.0, 142.0], [42.0, 70.5], [43.0, 223.0], [44.0, 137.0], [45.0, 251.0], [46.0, 90.5], [48.0, 221.5], [49.0, 69.5], [50.0, 92.5], [51.0, 111.0], [52.0, 96.0], [53.0, 67.0], [55.0, 76.0], [54.0, 127.5], [63.0, 81.0], [62.0, 79.0], [64.0, 132.5], [67.0, 131.0], [70.0, 76.0], [69.0, 108.0], [74.0, 102.0], [73.0, 77.0], [87.0, 76.0], [88.0, 70.0], [89.0, 67.0], [94.0, 103.0], [96.0, 72.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 96.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.8166666666666667, "minX": 1.6023117E12, "maxY": 40.38333333333333, "series": [{"data": [[1.60231188E12, 18.783333333333335], [1.6023117E12, 0.8166666666666667], [1.60231182E12, 40.38333333333333], [1.60231176E12, 27.883333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60231188E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.65, "minX": 1.6023117E12, "maxY": 40.38333333333333, "series": [{"data": [[1.60231188E12, 18.95], [1.6023117E12, 0.65], [1.60231182E12, 40.38333333333333], [1.60231176E12, 27.883333333333333]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60231188E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.65, "minX": 1.6023117E12, "maxY": 40.38333333333333, "series": [{"data": [[1.60231188E12, 18.95], [1.6023117E12, 0.65], [1.60231182E12, 40.38333333333333], [1.60231176E12, 27.883333333333333]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60231188E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.65, "minX": 1.6023117E12, "maxY": 40.38333333333333, "series": [{"data": [[1.60231188E12, 18.95], [1.6023117E12, 0.65], [1.60231182E12, 40.38333333333333], [1.60231176E12, 27.883333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60231188E12, "title": "Total Transactions Per Second"}},
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

