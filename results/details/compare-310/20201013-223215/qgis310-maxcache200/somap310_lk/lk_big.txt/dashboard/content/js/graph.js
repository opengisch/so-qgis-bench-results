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
        data: {"result": {"minY": 30.0, "minX": 0.0, "maxY": 3191.0, "series": [{"data": [[0.0, 30.0], [0.1, 31.0], [0.2, 32.0], [0.3, 33.0], [0.4, 33.0], [0.5, 33.0], [0.6, 34.0], [0.7, 34.0], [0.8, 35.0], [0.9, 35.0], [1.0, 35.0], [1.1, 35.0], [1.2, 35.0], [1.3, 36.0], [1.4, 36.0], [1.5, 36.0], [1.6, 36.0], [1.7, 36.0], [1.8, 36.0], [1.9, 36.0], [2.0, 36.0], [2.1, 37.0], [2.2, 37.0], [2.3, 37.0], [2.4, 37.0], [2.5, 37.0], [2.6, 37.0], [2.7, 37.0], [2.8, 37.0], [2.9, 37.0], [3.0, 37.0], [3.1, 37.0], [3.2, 38.0], [3.3, 38.0], [3.4, 38.0], [3.5, 38.0], [3.6, 38.0], [3.7, 38.0], [3.8, 38.0], [3.9, 38.0], [4.0, 38.0], [4.1, 38.0], [4.2, 38.0], [4.3, 38.0], [4.4, 38.0], [4.5, 38.0], [4.6, 39.0], [4.7, 39.0], [4.8, 39.0], [4.9, 39.0], [5.0, 39.0], [5.1, 39.0], [5.2, 39.0], [5.3, 39.0], [5.4, 39.0], [5.5, 39.0], [5.6, 39.0], [5.7, 39.0], [5.8, 39.0], [5.9, 39.0], [6.0, 39.0], [6.1, 39.0], [6.2, 39.0], [6.3, 40.0], [6.4, 40.0], [6.5, 40.0], [6.6, 40.0], [6.7, 40.0], [6.8, 40.0], [6.9, 40.0], [7.0, 40.0], [7.1, 40.0], [7.2, 40.0], [7.3, 40.0], [7.4, 40.0], [7.5, 40.0], [7.6, 40.0], [7.7, 40.0], [7.8, 40.0], [7.9, 40.0], [8.0, 41.0], [8.1, 41.0], [8.2, 41.0], [8.3, 41.0], [8.4, 41.0], [8.5, 41.0], [8.6, 41.0], [8.7, 41.0], [8.8, 41.0], [8.9, 41.0], [9.0, 41.0], [9.1, 41.0], [9.2, 42.0], [9.3, 42.0], [9.4, 42.0], [9.5, 42.0], [9.6, 42.0], [9.7, 42.0], [9.8, 42.0], [9.9, 42.0], [10.0, 42.0], [10.1, 42.0], [10.2, 42.0], [10.3, 42.0], [10.4, 42.0], [10.5, 42.0], [10.6, 42.0], [10.7, 43.0], [10.8, 43.0], [10.9, 43.0], [11.0, 43.0], [11.1, 43.0], [11.2, 43.0], [11.3, 43.0], [11.4, 43.0], [11.5, 43.0], [11.6, 43.0], [11.7, 43.0], [11.8, 43.0], [11.9, 43.0], [12.0, 43.0], [12.1, 43.0], [12.2, 44.0], [12.3, 44.0], [12.4, 44.0], [12.5, 44.0], [12.6, 44.0], [12.7, 44.0], [12.8, 44.0], [12.9, 44.0], [13.0, 44.0], [13.1, 44.0], [13.2, 44.0], [13.3, 44.0], [13.4, 45.0], [13.5, 45.0], [13.6, 45.0], [13.7, 45.0], [13.8, 45.0], [13.9, 45.0], [14.0, 45.0], [14.1, 45.0], [14.2, 45.0], [14.3, 45.0], [14.4, 45.0], [14.5, 46.0], [14.6, 46.0], [14.7, 46.0], [14.8, 46.0], [14.9, 46.0], [15.0, 46.0], [15.1, 46.0], [15.2, 46.0], [15.3, 46.0], [15.4, 47.0], [15.5, 47.0], [15.6, 47.0], [15.7, 47.0], [15.8, 47.0], [15.9, 47.0], [16.0, 47.0], [16.1, 47.0], [16.2, 47.0], [16.3, 47.0], [16.4, 48.0], [16.5, 48.0], [16.6, 48.0], [16.7, 48.0], [16.8, 48.0], [16.9, 49.0], [17.0, 49.0], [17.1, 49.0], [17.2, 49.0], [17.3, 49.0], [17.4, 49.0], [17.5, 49.0], [17.6, 50.0], [17.7, 50.0], [17.8, 50.0], [17.9, 50.0], [18.0, 50.0], [18.1, 50.0], [18.2, 50.0], [18.3, 51.0], [18.4, 51.0], [18.5, 51.0], [18.6, 52.0], [18.7, 52.0], [18.8, 52.0], [18.9, 52.0], [19.0, 53.0], [19.1, 53.0], [19.2, 53.0], [19.3, 54.0], [19.4, 54.0], [19.5, 54.0], [19.6, 55.0], [19.7, 55.0], [19.8, 55.0], [19.9, 56.0], [20.0, 56.0], [20.1, 57.0], [20.2, 57.0], [20.3, 57.0], [20.4, 58.0], [20.5, 58.0], [20.6, 58.0], [20.7, 58.0], [20.8, 59.0], [20.9, 59.0], [21.0, 59.0], [21.1, 60.0], [21.2, 60.0], [21.3, 60.0], [21.4, 61.0], [21.5, 61.0], [21.6, 61.0], [21.7, 62.0], [21.8, 62.0], [21.9, 62.0], [22.0, 62.0], [22.1, 62.0], [22.2, 63.0], [22.3, 63.0], [22.4, 63.0], [22.5, 63.0], [22.6, 64.0], [22.7, 64.0], [22.8, 64.0], [22.9, 64.0], [23.0, 64.0], [23.1, 64.0], [23.2, 65.0], [23.3, 65.0], [23.4, 65.0], [23.5, 65.0], [23.6, 65.0], [23.7, 65.0], [23.8, 66.0], [23.9, 66.0], [24.0, 66.0], [24.1, 66.0], [24.2, 66.0], [24.3, 66.0], [24.4, 66.0], [24.5, 66.0], [24.6, 67.0], [24.7, 67.0], [24.8, 67.0], [24.9, 67.0], [25.0, 67.0], [25.1, 67.0], [25.2, 68.0], [25.3, 68.0], [25.4, 68.0], [25.5, 68.0], [25.6, 68.0], [25.7, 68.0], [25.8, 69.0], [25.9, 69.0], [26.0, 69.0], [26.1, 69.0], [26.2, 69.0], [26.3, 69.0], [26.4, 69.0], [26.5, 70.0], [26.6, 70.0], [26.7, 70.0], [26.8, 70.0], [26.9, 70.0], [27.0, 70.0], [27.1, 70.0], [27.2, 71.0], [27.3, 71.0], [27.4, 71.0], [27.5, 71.0], [27.6, 71.0], [27.7, 71.0], [27.8, 71.0], [27.9, 72.0], [28.0, 72.0], [28.1, 72.0], [28.2, 72.0], [28.3, 72.0], [28.4, 72.0], [28.5, 72.0], [28.6, 73.0], [28.7, 73.0], [28.8, 73.0], [28.9, 73.0], [29.0, 73.0], [29.1, 73.0], [29.2, 73.0], [29.3, 74.0], [29.4, 74.0], [29.5, 74.0], [29.6, 74.0], [29.7, 74.0], [29.8, 74.0], [29.9, 74.0], [30.0, 75.0], [30.1, 75.0], [30.2, 75.0], [30.3, 75.0], [30.4, 75.0], [30.5, 75.0], [30.6, 75.0], [30.7, 76.0], [30.8, 76.0], [30.9, 76.0], [31.0, 76.0], [31.1, 76.0], [31.2, 76.0], [31.3, 77.0], [31.4, 77.0], [31.5, 77.0], [31.6, 77.0], [31.7, 77.0], [31.8, 77.0], [31.9, 77.0], [32.0, 78.0], [32.1, 78.0], [32.2, 78.0], [32.3, 78.0], [32.4, 78.0], [32.5, 78.0], [32.6, 79.0], [32.7, 79.0], [32.8, 79.0], [32.9, 79.0], [33.0, 79.0], [33.1, 79.0], [33.2, 79.0], [33.3, 79.0], [33.4, 79.0], [33.5, 80.0], [33.6, 80.0], [33.7, 80.0], [33.8, 80.0], [33.9, 80.0], [34.0, 81.0], [34.1, 81.0], [34.2, 81.0], [34.3, 81.0], [34.4, 81.0], [34.5, 81.0], [34.6, 82.0], [34.7, 82.0], [34.8, 82.0], [34.9, 82.0], [35.0, 82.0], [35.1, 83.0], [35.2, 83.0], [35.3, 83.0], [35.4, 83.0], [35.5, 83.0], [35.6, 84.0], [35.7, 84.0], [35.8, 84.0], [35.9, 84.0], [36.0, 84.0], [36.1, 85.0], [36.2, 85.0], [36.3, 85.0], [36.4, 85.0], [36.5, 85.0], [36.6, 85.0], [36.7, 85.0], [36.8, 86.0], [36.9, 86.0], [37.0, 86.0], [37.1, 87.0], [37.2, 87.0], [37.3, 87.0], [37.4, 87.0], [37.5, 87.0], [37.6, 88.0], [37.7, 88.0], [37.8, 88.0], [37.9, 88.0], [38.0, 88.0], [38.1, 89.0], [38.2, 89.0], [38.3, 89.0], [38.4, 89.0], [38.5, 90.0], [38.6, 90.0], [38.7, 91.0], [38.8, 91.0], [38.9, 91.0], [39.0, 92.0], [39.1, 92.0], [39.2, 92.0], [39.3, 92.0], [39.4, 93.0], [39.5, 94.0], [39.6, 95.0], [39.7, 95.0], [39.8, 96.0], [39.9, 97.0], [40.0, 97.0], [40.1, 98.0], [40.2, 99.0], [40.3, 100.0], [40.4, 101.0], [40.5, 102.0], [40.6, 103.0], [40.7, 104.0], [40.8, 105.0], [40.9, 105.0], [41.0, 106.0], [41.1, 107.0], [41.2, 108.0], [41.3, 109.0], [41.4, 109.0], [41.5, 110.0], [41.6, 111.0], [41.7, 111.0], [41.8, 112.0], [41.9, 112.0], [42.0, 113.0], [42.1, 114.0], [42.2, 115.0], [42.3, 116.0], [42.4, 116.0], [42.5, 117.0], [42.6, 118.0], [42.7, 118.0], [42.8, 119.0], [42.9, 119.0], [43.0, 120.0], [43.1, 121.0], [43.2, 122.0], [43.3, 122.0], [43.4, 123.0], [43.5, 123.0], [43.6, 124.0], [43.7, 125.0], [43.8, 126.0], [43.9, 126.0], [44.0, 127.0], [44.1, 127.0], [44.2, 128.0], [44.3, 129.0], [44.4, 130.0], [44.5, 130.0], [44.6, 131.0], [44.7, 132.0], [44.8, 133.0], [44.9, 134.0], [45.0, 134.0], [45.1, 135.0], [45.2, 135.0], [45.3, 137.0], [45.4, 137.0], [45.5, 138.0], [45.6, 138.0], [45.7, 139.0], [45.8, 140.0], [45.9, 141.0], [46.0, 141.0], [46.1, 142.0], [46.2, 143.0], [46.3, 144.0], [46.4, 145.0], [46.5, 145.0], [46.6, 146.0], [46.7, 147.0], [46.8, 148.0], [46.9, 148.0], [47.0, 149.0], [47.1, 150.0], [47.2, 151.0], [47.3, 152.0], [47.4, 153.0], [47.5, 153.0], [47.6, 153.0], [47.7, 154.0], [47.8, 156.0], [47.9, 157.0], [48.0, 158.0], [48.1, 160.0], [48.2, 161.0], [48.3, 162.0], [48.4, 163.0], [48.5, 163.0], [48.6, 165.0], [48.7, 165.0], [48.8, 166.0], [48.9, 167.0], [49.0, 167.0], [49.1, 169.0], [49.2, 169.0], [49.3, 170.0], [49.4, 171.0], [49.5, 172.0], [49.6, 174.0], [49.7, 175.0], [49.8, 177.0], [49.9, 177.0], [50.0, 178.0], [50.1, 180.0], [50.2, 181.0], [50.3, 181.0], [50.4, 182.0], [50.5, 182.0], [50.6, 183.0], [50.7, 184.0], [50.8, 184.0], [50.9, 185.0], [51.0, 186.0], [51.1, 186.0], [51.2, 187.0], [51.3, 187.0], [51.4, 188.0], [51.5, 188.0], [51.6, 190.0], [51.7, 191.0], [51.8, 191.0], [51.9, 192.0], [52.0, 193.0], [52.1, 193.0], [52.2, 194.0], [52.3, 194.0], [52.4, 195.0], [52.5, 195.0], [52.6, 196.0], [52.7, 197.0], [52.8, 197.0], [52.9, 198.0], [53.0, 199.0], [53.1, 200.0], [53.2, 201.0], [53.3, 201.0], [53.4, 202.0], [53.5, 202.0], [53.6, 202.0], [53.7, 203.0], [53.8, 204.0], [53.9, 205.0], [54.0, 205.0], [54.1, 206.0], [54.2, 207.0], [54.3, 208.0], [54.4, 209.0], [54.5, 209.0], [54.6, 210.0], [54.7, 211.0], [54.8, 212.0], [54.9, 213.0], [55.0, 214.0], [55.1, 214.0], [55.2, 215.0], [55.3, 216.0], [55.4, 217.0], [55.5, 217.0], [55.6, 218.0], [55.7, 219.0], [55.8, 220.0], [55.9, 221.0], [56.0, 222.0], [56.1, 223.0], [56.2, 224.0], [56.3, 224.0], [56.4, 226.0], [56.5, 227.0], [56.6, 228.0], [56.7, 229.0], [56.8, 230.0], [56.9, 231.0], [57.0, 232.0], [57.1, 232.0], [57.2, 233.0], [57.3, 234.0], [57.4, 234.0], [57.5, 235.0], [57.6, 236.0], [57.7, 237.0], [57.8, 238.0], [57.9, 239.0], [58.0, 240.0], [58.1, 241.0], [58.2, 242.0], [58.3, 243.0], [58.4, 243.0], [58.5, 244.0], [58.6, 244.0], [58.7, 245.0], [58.8, 246.0], [58.9, 246.0], [59.0, 247.0], [59.1, 248.0], [59.2, 249.0], [59.3, 249.0], [59.4, 250.0], [59.5, 251.0], [59.6, 253.0], [59.7, 253.0], [59.8, 254.0], [59.9, 255.0], [60.0, 256.0], [60.1, 257.0], [60.2, 257.0], [60.3, 259.0], [60.4, 260.0], [60.5, 261.0], [60.6, 263.0], [60.7, 265.0], [60.8, 266.0], [60.9, 267.0], [61.0, 268.0], [61.1, 269.0], [61.2, 269.0], [61.3, 271.0], [61.4, 271.0], [61.5, 273.0], [61.6, 275.0], [61.7, 276.0], [61.8, 276.0], [61.9, 278.0], [62.0, 279.0], [62.1, 280.0], [62.2, 281.0], [62.3, 282.0], [62.4, 283.0], [62.5, 284.0], [62.6, 287.0], [62.7, 287.0], [62.8, 288.0], [62.9, 289.0], [63.0, 290.0], [63.1, 291.0], [63.2, 291.0], [63.3, 292.0], [63.4, 293.0], [63.5, 294.0], [63.6, 295.0], [63.7, 296.0], [63.8, 298.0], [63.9, 299.0], [64.0, 301.0], [64.1, 302.0], [64.2, 303.0], [64.3, 304.0], [64.4, 305.0], [64.5, 307.0], [64.6, 309.0], [64.7, 310.0], [64.8, 311.0], [64.9, 312.0], [65.0, 312.0], [65.1, 313.0], [65.2, 314.0], [65.3, 315.0], [65.4, 317.0], [65.5, 318.0], [65.6, 319.0], [65.7, 320.0], [65.8, 322.0], [65.9, 323.0], [66.0, 323.0], [66.1, 324.0], [66.2, 325.0], [66.3, 327.0], [66.4, 328.0], [66.5, 330.0], [66.6, 330.0], [66.7, 331.0], [66.8, 332.0], [66.9, 334.0], [67.0, 335.0], [67.1, 336.0], [67.2, 338.0], [67.3, 339.0], [67.4, 341.0], [67.5, 343.0], [67.6, 344.0], [67.7, 345.0], [67.8, 347.0], [67.9, 348.0], [68.0, 349.0], [68.1, 351.0], [68.2, 351.0], [68.3, 352.0], [68.4, 353.0], [68.5, 355.0], [68.6, 356.0], [68.7, 358.0], [68.8, 359.0], [68.9, 360.0], [69.0, 362.0], [69.1, 365.0], [69.2, 365.0], [69.3, 366.0], [69.4, 367.0], [69.5, 370.0], [69.6, 370.0], [69.7, 373.0], [69.8, 374.0], [69.9, 376.0], [70.0, 377.0], [70.1, 378.0], [70.2, 380.0], [70.3, 381.0], [70.4, 383.0], [70.5, 384.0], [70.6, 386.0], [70.7, 388.0], [70.8, 389.0], [70.9, 390.0], [71.0, 391.0], [71.1, 393.0], [71.2, 395.0], [71.3, 396.0], [71.4, 399.0], [71.5, 400.0], [71.6, 401.0], [71.7, 403.0], [71.8, 404.0], [71.9, 405.0], [72.0, 406.0], [72.1, 408.0], [72.2, 410.0], [72.3, 411.0], [72.4, 412.0], [72.5, 415.0], [72.6, 418.0], [72.7, 419.0], [72.8, 420.0], [72.9, 421.0], [73.0, 423.0], [73.1, 424.0], [73.2, 426.0], [73.3, 427.0], [73.4, 428.0], [73.5, 428.0], [73.6, 431.0], [73.7, 433.0], [73.8, 433.0], [73.9, 434.0], [74.0, 436.0], [74.1, 438.0], [74.2, 439.0], [74.3, 441.0], [74.4, 443.0], [74.5, 445.0], [74.6, 447.0], [74.7, 449.0], [74.8, 452.0], [74.9, 453.0], [75.0, 454.0], [75.1, 455.0], [75.2, 456.0], [75.3, 457.0], [75.4, 459.0], [75.5, 460.0], [75.6, 461.0], [75.7, 463.0], [75.8, 464.0], [75.9, 465.0], [76.0, 467.0], [76.1, 468.0], [76.2, 469.0], [76.3, 471.0], [76.4, 472.0], [76.5, 473.0], [76.6, 473.0], [76.7, 474.0], [76.8, 476.0], [76.9, 478.0], [77.0, 480.0], [77.1, 482.0], [77.2, 484.0], [77.3, 485.0], [77.4, 486.0], [77.5, 488.0], [77.6, 490.0], [77.7, 491.0], [77.8, 494.0], [77.9, 496.0], [78.0, 497.0], [78.1, 498.0], [78.2, 500.0], [78.3, 501.0], [78.4, 503.0], [78.5, 505.0], [78.6, 510.0], [78.7, 512.0], [78.8, 514.0], [78.9, 517.0], [79.0, 519.0], [79.1, 520.0], [79.2, 521.0], [79.3, 523.0], [79.4, 525.0], [79.5, 528.0], [79.6, 530.0], [79.7, 531.0], [79.8, 532.0], [79.9, 533.0], [80.0, 535.0], [80.1, 537.0], [80.2, 540.0], [80.3, 541.0], [80.4, 543.0], [80.5, 544.0], [80.6, 546.0], [80.7, 549.0], [80.8, 551.0], [80.9, 552.0], [81.0, 555.0], [81.1, 557.0], [81.2, 558.0], [81.3, 559.0], [81.4, 562.0], [81.5, 563.0], [81.6, 565.0], [81.7, 566.0], [81.8, 569.0], [81.9, 570.0], [82.0, 573.0], [82.1, 574.0], [82.2, 576.0], [82.3, 576.0], [82.4, 579.0], [82.5, 581.0], [82.6, 582.0], [82.7, 584.0], [82.8, 588.0], [82.9, 590.0], [83.0, 592.0], [83.1, 596.0], [83.2, 597.0], [83.3, 599.0], [83.4, 600.0], [83.5, 603.0], [83.6, 605.0], [83.7, 608.0], [83.8, 609.0], [83.9, 611.0], [84.0, 613.0], [84.1, 615.0], [84.2, 616.0], [84.3, 617.0], [84.4, 619.0], [84.5, 620.0], [84.6, 622.0], [84.7, 623.0], [84.8, 625.0], [84.9, 627.0], [85.0, 628.0], [85.1, 631.0], [85.2, 634.0], [85.3, 635.0], [85.4, 636.0], [85.5, 639.0], [85.6, 642.0], [85.7, 643.0], [85.8, 644.0], [85.9, 647.0], [86.0, 648.0], [86.1, 650.0], [86.2, 652.0], [86.3, 655.0], [86.4, 659.0], [86.5, 661.0], [86.6, 663.0], [86.7, 665.0], [86.8, 665.0], [86.9, 669.0], [87.0, 670.0], [87.1, 674.0], [87.2, 676.0], [87.3, 682.0], [87.4, 685.0], [87.5, 690.0], [87.6, 693.0], [87.7, 695.0], [87.8, 697.0], [87.9, 701.0], [88.0, 704.0], [88.1, 710.0], [88.2, 713.0], [88.3, 715.0], [88.4, 718.0], [88.5, 720.0], [88.6, 724.0], [88.7, 726.0], [88.8, 727.0], [88.9, 731.0], [89.0, 736.0], [89.1, 741.0], [89.2, 743.0], [89.3, 748.0], [89.4, 751.0], [89.5, 756.0], [89.6, 758.0], [89.7, 760.0], [89.8, 763.0], [89.9, 766.0], [90.0, 768.0], [90.1, 770.0], [90.2, 773.0], [90.3, 777.0], [90.4, 783.0], [90.5, 790.0], [90.6, 795.0], [90.7, 796.0], [90.8, 799.0], [90.9, 803.0], [91.0, 808.0], [91.1, 815.0], [91.2, 816.0], [91.3, 821.0], [91.4, 824.0], [91.5, 826.0], [91.6, 831.0], [91.7, 833.0], [91.8, 837.0], [91.9, 843.0], [92.0, 846.0], [92.1, 849.0], [92.2, 855.0], [92.3, 867.0], [92.4, 875.0], [92.5, 876.0], [92.6, 880.0], [92.7, 884.0], [92.8, 886.0], [92.9, 894.0], [93.0, 897.0], [93.1, 900.0], [93.2, 905.0], [93.3, 909.0], [93.4, 911.0], [93.5, 917.0], [93.6, 926.0], [93.7, 931.0], [93.8, 935.0], [93.9, 941.0], [94.0, 946.0], [94.1, 953.0], [94.2, 958.0], [94.3, 967.0], [94.4, 972.0], [94.5, 980.0], [94.6, 983.0], [94.7, 989.0], [94.8, 998.0], [94.9, 1004.0], [95.0, 1010.0], [95.1, 1020.0], [95.2, 1025.0], [95.3, 1027.0], [95.4, 1035.0], [95.5, 1051.0], [95.6, 1056.0], [95.7, 1068.0], [95.8, 1079.0], [95.9, 1084.0], [96.0, 1092.0], [96.1, 1103.0], [96.2, 1110.0], [96.3, 1117.0], [96.4, 1122.0], [96.5, 1129.0], [96.6, 1143.0], [96.7, 1148.0], [96.8, 1159.0], [96.9, 1167.0], [97.0, 1174.0], [97.1, 1183.0], [97.2, 1198.0], [97.3, 1219.0], [97.4, 1248.0], [97.5, 1256.0], [97.6, 1271.0], [97.7, 1305.0], [97.8, 1328.0], [97.9, 1347.0], [98.0, 1357.0], [98.1, 1379.0], [98.2, 1403.0], [98.3, 1432.0], [98.4, 1444.0], [98.5, 1452.0], [98.6, 1473.0], [98.7, 1511.0], [98.8, 1526.0], [98.9, 1570.0], [99.0, 1598.0], [99.1, 1613.0], [99.2, 1649.0], [99.3, 1723.0], [99.4, 1769.0], [99.5, 1907.0], [99.6, 1965.0], [99.7, 2069.0], [99.8, 2155.0], [99.9, 2362.0], [100.0, 3191.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 2119.0, "series": [{"data": [[0.0, 2119.0], [600.0, 237.0], [700.0, 155.0], [800.0, 119.0], [900.0, 94.0], [1000.0, 62.0], [1100.0, 63.0], [1200.0, 24.0], [1300.0, 27.0], [1400.0, 25.0], [1500.0, 18.0], [100.0, 672.0], [1600.0, 13.0], [1700.0, 8.0], [1800.0, 4.0], [1900.0, 9.0], [2000.0, 6.0], [2100.0, 5.0], [2300.0, 1.0], [2200.0, 1.0], [2600.0, 1.0], [3000.0, 1.0], [3100.0, 3.0], [200.0, 572.0], [300.0, 398.0], [400.0, 353.0], [500.0, 272.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3100.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 70.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 4117.0, "series": [{"data": [[0.0, 4117.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1075.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 70.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.875000000000002, "minX": 1.60262976E12, "maxY": 10.0, "series": [{"data": [[1.60262982E12, 10.0], [1.60262976E12, 9.976744186046506], [1.60262994E12, 9.875000000000002], [1.60262988E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60262994E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 308.7730131503713, "minX": 1.0, "maxY": 3186.0, "series": [{"data": [[8.0, 1072.5], [4.0, 1915.0], [2.0, 3050.0], [1.0, 3186.0], [9.0, 574.0], [5.0, 1149.6666666666665], [10.0, 308.7730131503713], [6.0, 549.5], [3.0, 1960.0], [7.0, 1163.5]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.987647282402113, 311.7466742683396]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 3225.3333333333335, "minX": 1.60262976E12, "maxY": 1621790.8666666667, "series": [{"data": [[1.60262982E12, 1558905.85], [1.60262976E12, 818556.3], [1.60262994E12, 251855.38333333333], [1.60262988E12, 1621790.8666666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60262982E12, 17196.9], [1.60262976E12, 7448.783333333334], [1.60262994E12, 3225.3333333333335], [1.60262988E12, 17619.933333333334]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60262994E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 294.42337917485213, "minX": 1.60262976E12, "maxY": 369.65833333333325, "series": [{"data": [[1.60262982E12, 294.42337917485213], [1.60262976E12, 359.8197674418601], [1.60262994E12, 369.65833333333325], [1.60262988E12, 298.3265204386834]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60262994E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 294.0270137524555, "minX": 1.60262976E12, "maxY": 369.30277777777775, "series": [{"data": [[1.60262982E12, 294.0270137524555], [1.60262976E12, 359.28372093023256], [1.60262994E12, 369.30277777777775], [1.60262988E12, 297.94067796610204]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60262994E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.005555555555555555, "minX": 1.60262976E12, "maxY": 0.14418604651162786, "series": [{"data": [[1.60262982E12, 0.010314341846758382], [1.60262976E12, 0.14418604651162786], [1.60262994E12, 0.005555555555555555], [1.60262988E12, 0.009471585244267217]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60262994E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 30.0, "minX": 1.60262976E12, "maxY": 3191.0, "series": [{"data": [[1.60262982E12, 2680.0], [1.60262976E12, 1878.0], [1.60262994E12, 3191.0], [1.60262988E12, 1815.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60262982E12, 36.0], [1.60262976E12, 32.0], [1.60262994E12, 33.248999913930895], [1.60262988E12, 35.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60262982E12, 36.0], [1.60262976E12, 32.52390008211136], [1.60262994E12, 33.573900034427645], [1.60262988E12, 35.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60262982E12, 36.0], [1.60262976E12, 32.1794998973608], [1.60262994E12, 33.429499956965444], [1.60262988E12, 35.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60262982E12, 30.0], [1.60262976E12, 30.0], [1.60262994E12, 30.0], [1.60262988E12, 30.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60262982E12, 156.0], [1.60262976E12, 230.5], [1.60262994E12, 76.0], [1.60262988E12, 187.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60262994E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 42.0, "minX": 1.0, "maxY": 3186.0, "series": [{"data": [[4.0, 2505.0], [5.0, 1440.0], [6.0, 589.0], [7.0, 941.0], [9.0, 679.0], [10.0, 974.5], [11.0, 734.0], [12.0, 778.5], [13.0, 751.0], [14.0, 634.0], [15.0, 55.0], [16.0, 456.0], [17.0, 611.5], [18.0, 506.0], [19.0, 473.0], [20.0, 391.5], [21.0, 427.5], [22.0, 390.5], [23.0, 399.0], [24.0, 320.0], [25.0, 473.0], [26.0, 243.5], [27.0, 304.0], [28.0, 253.0], [29.0, 377.0], [30.0, 302.5], [31.0, 214.0], [33.0, 264.0], [32.0, 244.0], [34.0, 72.0], [35.0, 215.0], [36.0, 96.5], [37.0, 202.5], [38.0, 156.5], [41.0, 148.0], [40.0, 85.5], [42.0, 87.5], [43.0, 93.0], [44.0, 211.5], [45.0, 105.0], [46.0, 207.0], [47.0, 199.0], [48.0, 82.0], [50.0, 88.5], [51.0, 86.0], [53.0, 190.0], [55.0, 126.0], [54.0, 115.5], [56.0, 94.5], [57.0, 80.0], [59.0, 168.0], [58.0, 97.5], [63.0, 132.0], [64.0, 123.0], [66.0, 153.0], [65.0, 42.0], [68.0, 77.0], [69.0, 93.0], [74.0, 72.0], [75.0, 77.0], [77.0, 65.5], [86.0, 58.5], [98.0, 70.5], [1.0, 3186.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 98.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 42.0, "minX": 1.0, "maxY": 3186.0, "series": [{"data": [[4.0, 2504.5], [5.0, 1438.0], [6.0, 586.0], [7.0, 936.0], [9.0, 679.0], [10.0, 971.5], [11.0, 733.0], [12.0, 776.5], [13.0, 751.0], [14.0, 632.0], [15.0, 55.0], [16.0, 454.5], [17.0, 609.0], [18.0, 506.0], [19.0, 471.0], [20.0, 391.5], [21.0, 427.5], [22.0, 390.5], [23.0, 399.0], [24.0, 319.5], [25.0, 472.0], [26.0, 243.0], [27.0, 304.0], [28.0, 251.5], [29.0, 377.0], [30.0, 302.0], [31.0, 214.0], [33.0, 262.5], [32.0, 244.0], [34.0, 72.0], [35.0, 214.0], [36.0, 96.5], [37.0, 202.0], [38.0, 156.5], [41.0, 147.0], [40.0, 85.5], [42.0, 87.5], [43.0, 93.0], [44.0, 211.5], [45.0, 105.0], [46.0, 206.5], [47.0, 199.0], [48.0, 82.0], [50.0, 88.5], [51.0, 86.0], [53.0, 190.0], [55.0, 126.0], [54.0, 115.5], [56.0, 94.5], [57.0, 80.0], [59.0, 168.0], [58.0, 97.5], [63.0, 132.0], [64.0, 122.5], [66.0, 153.0], [65.0, 42.0], [68.0, 77.0], [69.0, 93.0], [74.0, 72.0], [75.0, 77.0], [77.0, 65.5], [86.0, 58.5], [98.0, 70.0], [1.0, 3186.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 98.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 5.833333333333333, "minX": 1.60262976E12, "maxY": 33.93333333333333, "series": [{"data": [[1.60262982E12, 33.93333333333333], [1.60262976E12, 14.5], [1.60262994E12, 5.833333333333333], [1.60262988E12, 33.43333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60262994E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 6.0, "minX": 1.60262976E12, "maxY": 33.93333333333333, "series": [{"data": [[1.60262982E12, 33.93333333333333], [1.60262976E12, 14.333333333333334], [1.60262994E12, 6.0], [1.60262988E12, 33.43333333333333]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60262994E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 6.0, "minX": 1.60262976E12, "maxY": 33.93333333333333, "series": [{"data": [[1.60262982E12, 33.93333333333333], [1.60262976E12, 14.333333333333334], [1.60262994E12, 6.0], [1.60262988E12, 33.43333333333333]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60262994E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 6.0, "minX": 1.60262976E12, "maxY": 33.93333333333333, "series": [{"data": [[1.60262982E12, 33.93333333333333], [1.60262976E12, 14.333333333333334], [1.60262994E12, 6.0], [1.60262988E12, 33.43333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60262994E12, "title": "Total Transactions Per Second"}},
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

