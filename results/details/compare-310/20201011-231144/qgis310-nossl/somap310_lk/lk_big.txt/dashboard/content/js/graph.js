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
        data: {"result": {"minY": 31.0, "minX": 0.0, "maxY": 3067.0, "series": [{"data": [[0.0, 31.0], [0.1, 32.0], [0.2, 32.0], [0.3, 33.0], [0.4, 33.0], [0.5, 33.0], [0.6, 34.0], [0.7, 34.0], [0.8, 35.0], [0.9, 35.0], [1.0, 35.0], [1.1, 35.0], [1.2, 35.0], [1.3, 36.0], [1.4, 36.0], [1.5, 36.0], [1.6, 36.0], [1.7, 36.0], [1.8, 36.0], [1.9, 37.0], [2.0, 37.0], [2.1, 37.0], [2.2, 37.0], [2.3, 37.0], [2.4, 37.0], [2.5, 37.0], [2.6, 37.0], [2.7, 37.0], [2.8, 37.0], [2.9, 38.0], [3.0, 38.0], [3.1, 38.0], [3.2, 38.0], [3.3, 38.0], [3.4, 38.0], [3.5, 38.0], [3.6, 38.0], [3.7, 38.0], [3.8, 38.0], [3.9, 38.0], [4.0, 38.0], [4.1, 38.0], [4.2, 39.0], [4.3, 39.0], [4.4, 39.0], [4.5, 39.0], [4.6, 39.0], [4.7, 39.0], [4.8, 39.0], [4.9, 39.0], [5.0, 39.0], [5.1, 39.0], [5.2, 39.0], [5.3, 39.0], [5.4, 39.0], [5.5, 40.0], [5.6, 40.0], [5.7, 40.0], [5.8, 40.0], [5.9, 40.0], [6.0, 40.0], [6.1, 40.0], [6.2, 40.0], [6.3, 40.0], [6.4, 40.0], [6.5, 40.0], [6.6, 40.0], [6.7, 41.0], [6.8, 41.0], [6.9, 41.0], [7.0, 41.0], [7.1, 41.0], [7.2, 41.0], [7.3, 41.0], [7.4, 41.0], [7.5, 41.0], [7.6, 41.0], [7.7, 41.0], [7.8, 41.0], [7.9, 41.0], [8.0, 41.0], [8.1, 41.0], [8.2, 42.0], [8.3, 42.0], [8.4, 42.0], [8.5, 42.0], [8.6, 42.0], [8.7, 42.0], [8.8, 42.0], [8.9, 42.0], [9.0, 42.0], [9.1, 42.0], [9.2, 42.0], [9.3, 42.0], [9.4, 42.0], [9.5, 43.0], [9.6, 43.0], [9.7, 43.0], [9.8, 43.0], [9.9, 43.0], [10.0, 43.0], [10.1, 43.0], [10.2, 43.0], [10.3, 43.0], [10.4, 43.0], [10.5, 43.0], [10.6, 43.0], [10.7, 44.0], [10.8, 44.0], [10.9, 44.0], [11.0, 44.0], [11.1, 44.0], [11.2, 44.0], [11.3, 44.0], [11.4, 44.0], [11.5, 44.0], [11.6, 44.0], [11.7, 44.0], [11.8, 45.0], [11.9, 45.0], [12.0, 45.0], [12.1, 45.0], [12.2, 45.0], [12.3, 45.0], [12.4, 45.0], [12.5, 45.0], [12.6, 45.0], [12.7, 45.0], [12.8, 46.0], [12.9, 46.0], [13.0, 46.0], [13.1, 46.0], [13.2, 46.0], [13.3, 46.0], [13.4, 46.0], [13.5, 46.0], [13.6, 46.0], [13.7, 46.0], [13.8, 46.0], [13.9, 47.0], [14.0, 47.0], [14.1, 47.0], [14.2, 47.0], [14.3, 47.0], [14.4, 47.0], [14.5, 47.0], [14.6, 48.0], [14.7, 48.0], [14.8, 48.0], [14.9, 48.0], [15.0, 48.0], [15.1, 48.0], [15.2, 48.0], [15.3, 49.0], [15.4, 49.0], [15.5, 49.0], [15.6, 49.0], [15.7, 49.0], [15.8, 50.0], [15.9, 50.0], [16.0, 50.0], [16.1, 50.0], [16.2, 50.0], [16.3, 51.0], [16.4, 51.0], [16.5, 51.0], [16.6, 51.0], [16.7, 52.0], [16.8, 52.0], [16.9, 52.0], [17.0, 53.0], [17.1, 53.0], [17.2, 53.0], [17.3, 54.0], [17.4, 54.0], [17.5, 54.0], [17.6, 55.0], [17.7, 55.0], [17.8, 56.0], [17.9, 56.0], [18.0, 57.0], [18.1, 57.0], [18.2, 58.0], [18.3, 58.0], [18.4, 58.0], [18.5, 58.0], [18.6, 59.0], [18.7, 59.0], [18.8, 60.0], [18.9, 60.0], [19.0, 60.0], [19.1, 60.0], [19.2, 61.0], [19.3, 61.0], [19.4, 61.0], [19.5, 61.0], [19.6, 62.0], [19.7, 62.0], [19.8, 62.0], [19.9, 62.0], [20.0, 63.0], [20.1, 63.0], [20.2, 63.0], [20.3, 63.0], [20.4, 63.0], [20.5, 64.0], [20.6, 64.0], [20.7, 64.0], [20.8, 64.0], [20.9, 65.0], [21.0, 65.0], [21.1, 65.0], [21.2, 65.0], [21.3, 66.0], [21.4, 66.0], [21.5, 66.0], [21.6, 66.0], [21.7, 67.0], [21.8, 67.0], [21.9, 67.0], [22.0, 67.0], [22.1, 67.0], [22.2, 68.0], [22.3, 68.0], [22.4, 68.0], [22.5, 68.0], [22.6, 68.0], [22.7, 69.0], [22.8, 69.0], [22.9, 69.0], [23.0, 69.0], [23.1, 69.0], [23.2, 69.0], [23.3, 70.0], [23.4, 70.0], [23.5, 70.0], [23.6, 70.0], [23.7, 70.0], [23.8, 70.0], [23.9, 70.0], [24.0, 71.0], [24.1, 71.0], [24.2, 71.0], [24.3, 71.0], [24.4, 71.0], [24.5, 71.0], [24.6, 71.0], [24.7, 71.0], [24.8, 72.0], [24.9, 72.0], [25.0, 72.0], [25.1, 72.0], [25.2, 72.0], [25.3, 72.0], [25.4, 73.0], [25.5, 73.0], [25.6, 73.0], [25.7, 73.0], [25.8, 73.0], [25.9, 73.0], [26.0, 74.0], [26.1, 74.0], [26.2, 74.0], [26.3, 74.0], [26.4, 74.0], [26.5, 74.0], [26.6, 74.0], [26.7, 74.0], [26.8, 74.0], [26.9, 75.0], [27.0, 75.0], [27.1, 75.0], [27.2, 75.0], [27.3, 75.0], [27.4, 75.0], [27.5, 75.0], [27.6, 75.0], [27.7, 75.0], [27.8, 76.0], [27.9, 76.0], [28.0, 76.0], [28.1, 76.0], [28.2, 76.0], [28.3, 76.0], [28.4, 76.0], [28.5, 76.0], [28.6, 76.0], [28.7, 76.0], [28.8, 76.0], [28.9, 76.0], [29.0, 76.0], [29.1, 77.0], [29.2, 77.0], [29.3, 77.0], [29.4, 77.0], [29.5, 77.0], [29.6, 77.0], [29.7, 77.0], [29.8, 77.0], [29.9, 77.0], [30.0, 77.0], [30.1, 78.0], [30.2, 78.0], [30.3, 78.0], [30.4, 78.0], [30.5, 78.0], [30.6, 78.0], [30.7, 78.0], [30.8, 78.0], [30.9, 79.0], [31.0, 79.0], [31.1, 79.0], [31.2, 79.0], [31.3, 79.0], [31.4, 79.0], [31.5, 79.0], [31.6, 79.0], [31.7, 79.0], [31.8, 79.0], [31.9, 80.0], [32.0, 80.0], [32.1, 80.0], [32.2, 80.0], [32.3, 80.0], [32.4, 80.0], [32.5, 80.0], [32.6, 80.0], [32.7, 80.0], [32.8, 81.0], [32.9, 81.0], [33.0, 81.0], [33.1, 81.0], [33.2, 81.0], [33.3, 81.0], [33.4, 81.0], [33.5, 81.0], [33.6, 82.0], [33.7, 82.0], [33.8, 82.0], [33.9, 82.0], [34.0, 82.0], [34.1, 82.0], [34.2, 82.0], [34.3, 82.0], [34.4, 83.0], [34.5, 83.0], [34.6, 83.0], [34.7, 83.0], [34.8, 83.0], [34.9, 83.0], [35.0, 83.0], [35.1, 83.0], [35.2, 84.0], [35.3, 84.0], [35.4, 84.0], [35.5, 84.0], [35.6, 84.0], [35.7, 84.0], [35.8, 84.0], [35.9, 85.0], [36.0, 85.0], [36.1, 85.0], [36.2, 85.0], [36.3, 86.0], [36.4, 86.0], [36.5, 86.0], [36.6, 86.0], [36.7, 86.0], [36.8, 87.0], [36.9, 87.0], [37.0, 87.0], [37.1, 87.0], [37.2, 88.0], [37.3, 88.0], [37.4, 88.0], [37.5, 89.0], [37.6, 89.0], [37.7, 90.0], [37.8, 90.0], [37.9, 90.0], [38.0, 90.0], [38.1, 91.0], [38.2, 91.0], [38.3, 91.0], [38.4, 92.0], [38.5, 92.0], [38.6, 92.0], [38.7, 93.0], [38.8, 93.0], [38.9, 94.0], [39.0, 94.0], [39.1, 95.0], [39.2, 95.0], [39.3, 95.0], [39.4, 96.0], [39.5, 96.0], [39.6, 97.0], [39.7, 98.0], [39.8, 99.0], [39.9, 100.0], [40.0, 100.0], [40.1, 101.0], [40.2, 102.0], [40.3, 103.0], [40.4, 104.0], [40.5, 105.0], [40.6, 106.0], [40.7, 107.0], [40.8, 107.0], [40.9, 108.0], [41.0, 109.0], [41.1, 109.0], [41.2, 110.0], [41.3, 111.0], [41.4, 111.0], [41.5, 112.0], [41.6, 113.0], [41.7, 114.0], [41.8, 115.0], [41.9, 115.0], [42.0, 116.0], [42.1, 116.0], [42.2, 117.0], [42.3, 117.0], [42.4, 118.0], [42.5, 118.0], [42.6, 119.0], [42.7, 119.0], [42.8, 120.0], [42.9, 121.0], [43.0, 121.0], [43.1, 122.0], [43.2, 122.0], [43.3, 123.0], [43.4, 123.0], [43.5, 124.0], [43.6, 125.0], [43.7, 125.0], [43.8, 126.0], [43.9, 126.0], [44.0, 126.0], [44.1, 127.0], [44.2, 127.0], [44.3, 128.0], [44.4, 129.0], [44.5, 129.0], [44.6, 129.0], [44.7, 130.0], [44.8, 130.0], [44.9, 131.0], [45.0, 131.0], [45.1, 132.0], [45.2, 133.0], [45.3, 133.0], [45.4, 134.0], [45.5, 134.0], [45.6, 135.0], [45.7, 136.0], [45.8, 137.0], [45.9, 138.0], [46.0, 138.0], [46.1, 139.0], [46.2, 139.0], [46.3, 140.0], [46.4, 141.0], [46.5, 141.0], [46.6, 142.0], [46.7, 143.0], [46.8, 143.0], [46.9, 143.0], [47.0, 144.0], [47.1, 145.0], [47.2, 146.0], [47.3, 147.0], [47.4, 148.0], [47.5, 148.0], [47.6, 149.0], [47.7, 149.0], [47.8, 150.0], [47.9, 151.0], [48.0, 152.0], [48.1, 152.0], [48.2, 153.0], [48.3, 154.0], [48.4, 156.0], [48.5, 156.0], [48.6, 158.0], [48.7, 159.0], [48.8, 160.0], [48.9, 161.0], [49.0, 161.0], [49.1, 163.0], [49.2, 164.0], [49.3, 164.0], [49.4, 164.0], [49.5, 166.0], [49.6, 167.0], [49.7, 168.0], [49.8, 168.0], [49.9, 169.0], [50.0, 170.0], [50.1, 171.0], [50.2, 172.0], [50.3, 175.0], [50.4, 176.0], [50.5, 177.0], [50.6, 178.0], [50.7, 179.0], [50.8, 180.0], [50.9, 182.0], [51.0, 182.0], [51.1, 184.0], [51.2, 185.0], [51.3, 186.0], [51.4, 187.0], [51.5, 189.0], [51.6, 190.0], [51.7, 190.0], [51.8, 191.0], [51.9, 192.0], [52.0, 192.0], [52.1, 193.0], [52.2, 194.0], [52.3, 195.0], [52.4, 196.0], [52.5, 196.0], [52.6, 196.0], [52.7, 198.0], [52.8, 198.0], [52.9, 199.0], [53.0, 199.0], [53.1, 200.0], [53.2, 201.0], [53.3, 201.0], [53.4, 202.0], [53.5, 203.0], [53.6, 203.0], [53.7, 204.0], [53.8, 205.0], [53.9, 206.0], [54.0, 207.0], [54.1, 209.0], [54.2, 210.0], [54.3, 211.0], [54.4, 212.0], [54.5, 213.0], [54.6, 214.0], [54.7, 216.0], [54.8, 217.0], [54.9, 218.0], [55.0, 219.0], [55.1, 220.0], [55.2, 221.0], [55.3, 222.0], [55.4, 223.0], [55.5, 223.0], [55.6, 224.0], [55.7, 224.0], [55.8, 225.0], [55.9, 227.0], [56.0, 228.0], [56.1, 228.0], [56.2, 229.0], [56.3, 230.0], [56.4, 231.0], [56.5, 232.0], [56.6, 232.0], [56.7, 233.0], [56.8, 233.0], [56.9, 234.0], [57.0, 235.0], [57.1, 236.0], [57.2, 236.0], [57.3, 237.0], [57.4, 237.0], [57.5, 238.0], [57.6, 239.0], [57.7, 240.0], [57.8, 240.0], [57.9, 241.0], [58.0, 242.0], [58.1, 243.0], [58.2, 244.0], [58.3, 244.0], [58.4, 246.0], [58.5, 246.0], [58.6, 247.0], [58.7, 248.0], [58.8, 249.0], [58.9, 250.0], [59.0, 251.0], [59.1, 252.0], [59.2, 252.0], [59.3, 253.0], [59.4, 254.0], [59.5, 255.0], [59.6, 255.0], [59.7, 257.0], [59.8, 257.0], [59.9, 258.0], [60.0, 258.0], [60.1, 259.0], [60.2, 260.0], [60.3, 262.0], [60.4, 263.0], [60.5, 264.0], [60.6, 264.0], [60.7, 265.0], [60.8, 265.0], [60.9, 266.0], [61.0, 267.0], [61.1, 268.0], [61.2, 269.0], [61.3, 270.0], [61.4, 271.0], [61.5, 272.0], [61.6, 272.0], [61.7, 273.0], [61.8, 273.0], [61.9, 274.0], [62.0, 276.0], [62.1, 277.0], [62.2, 278.0], [62.3, 279.0], [62.4, 280.0], [62.5, 282.0], [62.6, 282.0], [62.7, 283.0], [62.8, 284.0], [62.9, 285.0], [63.0, 286.0], [63.1, 287.0], [63.2, 290.0], [63.3, 291.0], [63.4, 292.0], [63.5, 294.0], [63.6, 297.0], [63.7, 299.0], [63.8, 300.0], [63.9, 302.0], [64.0, 304.0], [64.1, 305.0], [64.2, 307.0], [64.3, 308.0], [64.4, 309.0], [64.5, 311.0], [64.6, 313.0], [64.7, 315.0], [64.8, 316.0], [64.9, 317.0], [65.0, 318.0], [65.1, 319.0], [65.2, 320.0], [65.3, 321.0], [65.4, 322.0], [65.5, 323.0], [65.6, 324.0], [65.7, 324.0], [65.8, 325.0], [65.9, 326.0], [66.0, 327.0], [66.1, 328.0], [66.2, 330.0], [66.3, 331.0], [66.4, 332.0], [66.5, 333.0], [66.6, 334.0], [66.7, 335.0], [66.8, 336.0], [66.9, 337.0], [67.0, 338.0], [67.1, 340.0], [67.2, 343.0], [67.3, 344.0], [67.4, 345.0], [67.5, 348.0], [67.6, 351.0], [67.7, 353.0], [67.8, 353.0], [67.9, 354.0], [68.0, 356.0], [68.1, 357.0], [68.2, 358.0], [68.3, 358.0], [68.4, 361.0], [68.5, 362.0], [68.6, 363.0], [68.7, 364.0], [68.8, 366.0], [68.9, 367.0], [69.0, 368.0], [69.1, 369.0], [69.2, 370.0], [69.3, 371.0], [69.4, 373.0], [69.5, 375.0], [69.6, 376.0], [69.7, 377.0], [69.8, 378.0], [69.9, 378.0], [70.0, 379.0], [70.1, 380.0], [70.2, 381.0], [70.3, 382.0], [70.4, 383.0], [70.5, 384.0], [70.6, 385.0], [70.7, 386.0], [70.8, 387.0], [70.9, 388.0], [71.0, 388.0], [71.1, 390.0], [71.2, 392.0], [71.3, 393.0], [71.4, 394.0], [71.5, 396.0], [71.6, 398.0], [71.7, 400.0], [71.8, 402.0], [71.9, 402.0], [72.0, 405.0], [72.1, 406.0], [72.2, 408.0], [72.3, 411.0], [72.4, 413.0], [72.5, 414.0], [72.6, 416.0], [72.7, 418.0], [72.8, 419.0], [72.9, 420.0], [73.0, 421.0], [73.1, 422.0], [73.2, 424.0], [73.3, 426.0], [73.4, 427.0], [73.5, 428.0], [73.6, 431.0], [73.7, 432.0], [73.8, 433.0], [73.9, 435.0], [74.0, 436.0], [74.1, 436.0], [74.2, 437.0], [74.3, 439.0], [74.4, 441.0], [74.5, 441.0], [74.6, 443.0], [74.7, 444.0], [74.8, 446.0], [74.9, 448.0], [75.0, 449.0], [75.1, 451.0], [75.2, 453.0], [75.3, 455.0], [75.4, 456.0], [75.5, 458.0], [75.6, 459.0], [75.7, 461.0], [75.8, 462.0], [75.9, 463.0], [76.0, 464.0], [76.1, 465.0], [76.2, 466.0], [76.3, 468.0], [76.4, 469.0], [76.5, 471.0], [76.6, 473.0], [76.7, 474.0], [76.8, 475.0], [76.9, 477.0], [77.0, 478.0], [77.1, 480.0], [77.2, 481.0], [77.3, 482.0], [77.4, 484.0], [77.5, 485.0], [77.6, 486.0], [77.7, 488.0], [77.8, 488.0], [77.9, 490.0], [78.0, 491.0], [78.1, 493.0], [78.2, 493.0], [78.3, 496.0], [78.4, 498.0], [78.5, 500.0], [78.6, 500.0], [78.7, 503.0], [78.8, 503.0], [78.9, 505.0], [79.0, 506.0], [79.1, 508.0], [79.2, 509.0], [79.3, 512.0], [79.4, 514.0], [79.5, 516.0], [79.6, 518.0], [79.7, 520.0], [79.8, 523.0], [79.9, 525.0], [80.0, 526.0], [80.1, 527.0], [80.2, 527.0], [80.3, 529.0], [80.4, 530.0], [80.5, 532.0], [80.6, 534.0], [80.7, 536.0], [80.8, 538.0], [80.9, 539.0], [81.0, 541.0], [81.1, 542.0], [81.2, 544.0], [81.3, 545.0], [81.4, 547.0], [81.5, 548.0], [81.6, 549.0], [81.7, 551.0], [81.8, 553.0], [81.9, 554.0], [82.0, 556.0], [82.1, 558.0], [82.2, 559.0], [82.3, 561.0], [82.4, 563.0], [82.5, 566.0], [82.6, 570.0], [82.7, 574.0], [82.8, 576.0], [82.9, 578.0], [83.0, 579.0], [83.1, 580.0], [83.2, 582.0], [83.3, 583.0], [83.4, 585.0], [83.5, 586.0], [83.6, 587.0], [83.7, 590.0], [83.8, 591.0], [83.9, 592.0], [84.0, 594.0], [84.1, 596.0], [84.2, 598.0], [84.3, 600.0], [84.4, 601.0], [84.5, 605.0], [84.6, 608.0], [84.7, 612.0], [84.8, 614.0], [84.9, 616.0], [85.0, 618.0], [85.1, 622.0], [85.2, 624.0], [85.3, 626.0], [85.4, 628.0], [85.5, 630.0], [85.6, 632.0], [85.7, 634.0], [85.8, 636.0], [85.9, 638.0], [86.0, 639.0], [86.1, 643.0], [86.2, 644.0], [86.3, 647.0], [86.4, 649.0], [86.5, 652.0], [86.6, 656.0], [86.7, 657.0], [86.8, 659.0], [86.9, 663.0], [87.0, 664.0], [87.1, 666.0], [87.2, 667.0], [87.3, 669.0], [87.4, 675.0], [87.5, 678.0], [87.6, 680.0], [87.7, 682.0], [87.8, 683.0], [87.9, 684.0], [88.0, 686.0], [88.1, 691.0], [88.2, 698.0], [88.3, 700.0], [88.4, 702.0], [88.5, 706.0], [88.6, 709.0], [88.7, 710.0], [88.8, 711.0], [88.9, 711.0], [89.0, 714.0], [89.1, 716.0], [89.2, 719.0], [89.3, 721.0], [89.4, 724.0], [89.5, 727.0], [89.6, 728.0], [89.7, 730.0], [89.8, 733.0], [89.9, 738.0], [90.0, 742.0], [90.1, 743.0], [90.2, 746.0], [90.3, 751.0], [90.4, 756.0], [90.5, 760.0], [90.6, 762.0], [90.7, 766.0], [90.8, 772.0], [90.9, 779.0], [91.0, 782.0], [91.1, 786.0], [91.2, 786.0], [91.3, 793.0], [91.4, 796.0], [91.5, 799.0], [91.6, 803.0], [91.7, 805.0], [91.8, 817.0], [91.9, 827.0], [92.0, 832.0], [92.1, 836.0], [92.2, 838.0], [92.3, 842.0], [92.4, 847.0], [92.5, 850.0], [92.6, 858.0], [92.7, 860.0], [92.8, 864.0], [92.9, 871.0], [93.0, 875.0], [93.1, 886.0], [93.2, 889.0], [93.3, 893.0], [93.4, 900.0], [93.5, 905.0], [93.6, 914.0], [93.7, 922.0], [93.8, 927.0], [93.9, 934.0], [94.0, 943.0], [94.1, 951.0], [94.2, 958.0], [94.3, 959.0], [94.4, 967.0], [94.5, 969.0], [94.6, 975.0], [94.7, 979.0], [94.8, 986.0], [94.9, 992.0], [95.0, 1002.0], [95.1, 1007.0], [95.2, 1008.0], [95.3, 1015.0], [95.4, 1020.0], [95.5, 1032.0], [95.6, 1039.0], [95.7, 1047.0], [95.8, 1057.0], [95.9, 1067.0], [96.0, 1071.0], [96.1, 1079.0], [96.2, 1091.0], [96.3, 1094.0], [96.4, 1110.0], [96.5, 1116.0], [96.6, 1126.0], [96.7, 1135.0], [96.8, 1154.0], [96.9, 1159.0], [97.0, 1170.0], [97.1, 1188.0], [97.2, 1205.0], [97.3, 1216.0], [97.4, 1239.0], [97.5, 1244.0], [97.6, 1252.0], [97.7, 1273.0], [97.8, 1284.0], [97.9, 1304.0], [98.0, 1338.0], [98.1, 1349.0], [98.2, 1365.0], [98.3, 1380.0], [98.4, 1403.0], [98.5, 1418.0], [98.6, 1434.0], [98.7, 1453.0], [98.8, 1471.0], [98.9, 1485.0], [99.0, 1535.0], [99.1, 1553.0], [99.2, 1598.0], [99.3, 1721.0], [99.4, 1833.0], [99.5, 1898.0], [99.6, 2019.0], [99.7, 2093.0], [99.8, 2181.0], [99.9, 2366.0], [100.0, 3067.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 2097.0, "series": [{"data": [[0.0, 2097.0], [600.0, 212.0], [700.0, 170.0], [800.0, 98.0], [900.0, 83.0], [1000.0, 73.0], [1100.0, 43.0], [1200.0, 37.0], [1300.0, 27.0], [1400.0, 31.0], [1500.0, 12.0], [100.0, 692.0], [1600.0, 4.0], [1700.0, 6.0], [1800.0, 6.0], [1900.0, 2.0], [2000.0, 10.0], [2100.0, 5.0], [2200.0, 3.0], [2300.0, 2.0], [2500.0, 1.0], [2900.0, 1.0], [3000.0, 2.0], [200.0, 565.0], [300.0, 418.0], [400.0, 358.0], [500.0, 304.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3000.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 54.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 4136.0, "series": [{"data": [[0.0, 4136.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1072.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 54.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.972760290556899, "minX": 1.60246152E12, "maxY": 10.0, "series": [{"data": [[1.60246164E12, 9.972760290556899], [1.60246158E12, 10.0], [1.60246152E12, 9.97836166924265]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60246164E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 305.93286286477286, "minX": 1.0, "maxY": 3067.0, "series": [{"data": [[4.0, 1203.5], [8.0, 601.0], [2.0, 2168.0], [1.0, 2939.0], [9.0, 799.0], [5.0, 790.0], [10.0, 305.93286286477286], [6.0, 969.0], [3.0, 3067.0], [7.0, 1103.3333333333335]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.986126947928506, 309.0902698593687]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 11232.1, "minX": 1.60246152E12, "maxY": 1677580.9333333333, "series": [{"data": [[1.60246164E12, 1677580.9333333333], [1.60246158E12, 1362778.3], [1.60246152E12, 1210357.1166666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60246164E12, 14422.716666666667], [1.60246158E12, 19836.133333333335], [1.60246152E12, 11232.1]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60246164E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 260.2629533678757, "minX": 1.60246152E12, "maxY": 348.9752704791347, "series": [{"data": [[1.60246164E12, 346.30145278450345], [1.60246158E12, 260.2629533678757], [1.60246152E12, 348.9752704791347]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60246164E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 259.92271157167494, "minX": 1.60246152E12, "maxY": 348.4744976816073, "series": [{"data": [[1.60246164E12, 345.82021791767465], [1.60246158E12, 259.92271157167494], [1.60246152E12, 348.4744976816073]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60246164E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.010794473229706385, "minX": 1.60246152E12, "maxY": 0.09041731066460576, "series": [{"data": [[1.60246164E12, 0.01089588377723973], [1.60246158E12, 0.010794473229706385], [1.60246152E12, 0.09041731066460576]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60246164E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 31.0, "minX": 1.60246152E12, "maxY": 3067.0, "series": [{"data": [[1.60246164E12, 3067.0], [1.60246158E12, 2190.0], [1.60246152E12, 1898.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60246164E12, 35.0], [1.60246158E12, 33.85299944758415], [1.60246152E12, 35.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60246164E12, 35.0], [1.60246158E12, 34.0], [1.60246152E12, 35.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60246164E12, 35.0], [1.60246158E12, 34.0], [1.60246152E12, 35.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60246164E12, 31.0], [1.60246158E12, 31.0], [1.60246152E12, 31.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60246164E12, 221.5], [1.60246158E12, 125.0], [1.60246152E12, 248.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60246164E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 67.0, "minX": 2.0, "maxY": 2553.5, "series": [{"data": [[2.0, 2553.5], [3.0, 2281.0], [5.0, 1047.5], [6.0, 1247.5], [7.0, 901.0], [8.0, 1193.0], [9.0, 1061.5], [10.0, 758.5], [11.0, 761.0], [12.0, 718.0], [13.0, 722.0], [14.0, 709.0], [15.0, 459.0], [16.0, 560.5], [17.0, 524.5], [18.0, 473.0], [19.0, 556.0], [20.0, 405.0], [21.0, 483.0], [22.0, 395.5], [23.0, 386.5], [24.0, 306.5], [25.0, 323.5], [26.0, 375.0], [27.0, 353.0], [28.0, 239.5], [29.0, 313.5], [30.0, 265.0], [31.0, 299.0], [32.0, 270.0], [33.0, 84.0], [34.0, 76.0], [35.0, 275.5], [37.0, 84.0], [39.0, 91.0], [38.0, 200.0], [40.0, 94.5], [41.0, 87.0], [43.0, 129.0], [45.0, 81.0], [44.0, 197.5], [47.0, 113.0], [46.0, 219.0], [49.0, 84.0], [50.0, 87.5], [51.0, 100.5], [53.0, 121.5], [52.0, 74.0], [55.0, 78.0], [56.0, 82.5], [57.0, 133.0], [59.0, 138.0], [61.0, 93.0], [62.0, 89.5], [66.0, 109.0], [69.0, 80.0], [71.0, 67.0], [68.0, 113.0], [70.0, 129.0], [75.0, 115.0], [74.0, 107.0], [77.0, 77.0], [82.0, 126.5], [89.0, 78.0], [96.0, 74.0], [98.0, 85.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 98.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 67.0, "minX": 2.0, "maxY": 2553.5, "series": [{"data": [[2.0, 2553.5], [3.0, 2281.0], [5.0, 1047.0], [6.0, 1246.5], [7.0, 899.5], [8.0, 1192.5], [9.0, 1060.5], [10.0, 757.5], [11.0, 759.0], [12.0, 717.0], [13.0, 722.0], [14.0, 709.0], [15.0, 458.5], [16.0, 560.0], [17.0, 523.0], [18.0, 472.0], [19.0, 555.0], [20.0, 403.5], [21.0, 483.0], [22.0, 395.0], [23.0, 386.0], [24.0, 306.0], [25.0, 323.5], [26.0, 375.0], [27.0, 352.0], [28.0, 239.5], [29.0, 313.0], [30.0, 264.5], [31.0, 298.5], [32.0, 269.5], [33.0, 84.0], [34.0, 76.0], [35.0, 275.5], [37.0, 84.0], [39.0, 91.0], [38.0, 200.0], [40.0, 94.5], [41.0, 87.0], [43.0, 129.0], [45.0, 81.0], [44.0, 197.5], [47.0, 113.0], [46.0, 218.5], [49.0, 84.0], [50.0, 87.0], [51.0, 100.5], [53.0, 121.0], [52.0, 74.0], [55.0, 78.0], [56.0, 82.5], [57.0, 133.0], [59.0, 137.5], [61.0, 93.0], [62.0, 89.5], [66.0, 109.0], [69.0, 80.0], [71.0, 67.0], [68.0, 112.5], [70.0, 129.0], [75.0, 115.0], [74.0, 107.0], [77.0, 77.0], [82.0, 126.0], [89.0, 78.0], [96.0, 74.0], [98.0, 85.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 98.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 21.733333333333334, "minX": 1.60246152E12, "maxY": 38.6, "series": [{"data": [[1.60246164E12, 27.366666666666667], [1.60246158E12, 38.6], [1.60246152E12, 21.733333333333334]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60246164E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 21.566666666666666, "minX": 1.60246152E12, "maxY": 38.6, "series": [{"data": [[1.60246164E12, 27.533333333333335], [1.60246158E12, 38.6], [1.60246152E12, 21.566666666666666]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60246164E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 21.566666666666666, "minX": 1.60246152E12, "maxY": 38.6, "series": [{"data": [[1.60246164E12, 27.533333333333335], [1.60246158E12, 38.6], [1.60246152E12, 21.566666666666666]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60246164E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 21.566666666666666, "minX": 1.60246152E12, "maxY": 38.6, "series": [{"data": [[1.60246164E12, 27.533333333333335], [1.60246158E12, 38.6], [1.60246152E12, 21.566666666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60246164E12, "title": "Total Transactions Per Second"}},
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

