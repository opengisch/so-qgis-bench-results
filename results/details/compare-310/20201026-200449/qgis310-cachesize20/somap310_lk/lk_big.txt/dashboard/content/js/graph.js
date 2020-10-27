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
        data: {"result": {"minY": 29.0, "minX": 0.0, "maxY": 3408.0, "series": [{"data": [[0.0, 29.0], [0.1, 31.0], [0.2, 32.0], [0.3, 32.0], [0.4, 33.0], [0.5, 34.0], [0.6, 34.0], [0.7, 34.0], [0.8, 35.0], [0.9, 35.0], [1.0, 36.0], [1.1, 36.0], [1.2, 36.0], [1.3, 37.0], [1.4, 37.0], [1.5, 37.0], [1.6, 37.0], [1.7, 37.0], [1.8, 38.0], [1.9, 38.0], [2.0, 38.0], [2.1, 38.0], [2.2, 38.0], [2.3, 38.0], [2.4, 38.0], [2.5, 39.0], [2.6, 39.0], [2.7, 39.0], [2.8, 39.0], [2.9, 39.0], [3.0, 39.0], [3.1, 39.0], [3.2, 39.0], [3.3, 39.0], [3.4, 39.0], [3.5, 40.0], [3.6, 40.0], [3.7, 40.0], [3.8, 40.0], [3.9, 40.0], [4.0, 40.0], [4.1, 40.0], [4.2, 40.0], [4.3, 40.0], [4.4, 40.0], [4.5, 40.0], [4.6, 40.0], [4.7, 41.0], [4.8, 41.0], [4.9, 41.0], [5.0, 41.0], [5.1, 41.0], [5.2, 41.0], [5.3, 41.0], [5.4, 41.0], [5.5, 41.0], [5.6, 41.0], [5.7, 41.0], [5.8, 41.0], [5.9, 41.0], [6.0, 41.0], [6.1, 41.0], [6.2, 42.0], [6.3, 42.0], [6.4, 42.0], [6.5, 42.0], [6.6, 42.0], [6.7, 42.0], [6.8, 42.0], [6.9, 42.0], [7.0, 42.0], [7.1, 42.0], [7.2, 42.0], [7.3, 42.0], [7.4, 43.0], [7.5, 43.0], [7.6, 43.0], [7.7, 43.0], [7.8, 43.0], [7.9, 43.0], [8.0, 43.0], [8.1, 43.0], [8.2, 43.0], [8.3, 43.0], [8.4, 43.0], [8.5, 43.0], [8.6, 43.0], [8.7, 43.0], [8.8, 43.0], [8.9, 44.0], [9.0, 44.0], [9.1, 44.0], [9.2, 44.0], [9.3, 44.0], [9.4, 44.0], [9.5, 44.0], [9.6, 44.0], [9.7, 44.0], [9.8, 44.0], [9.9, 44.0], [10.0, 45.0], [10.1, 45.0], [10.2, 45.0], [10.3, 45.0], [10.4, 45.0], [10.5, 45.0], [10.6, 45.0], [10.7, 45.0], [10.8, 45.0], [10.9, 45.0], [11.0, 45.0], [11.1, 46.0], [11.2, 46.0], [11.3, 46.0], [11.4, 46.0], [11.5, 46.0], [11.6, 46.0], [11.7, 46.0], [11.8, 46.0], [11.9, 46.0], [12.0, 47.0], [12.1, 47.0], [12.2, 47.0], [12.3, 47.0], [12.4, 47.0], [12.5, 47.0], [12.6, 47.0], [12.7, 47.0], [12.8, 48.0], [12.9, 48.0], [13.0, 48.0], [13.1, 48.0], [13.2, 48.0], [13.3, 48.0], [13.4, 49.0], [13.5, 49.0], [13.6, 49.0], [13.7, 49.0], [13.8, 49.0], [13.9, 50.0], [14.0, 50.0], [14.1, 50.0], [14.2, 50.0], [14.3, 50.0], [14.4, 51.0], [14.5, 51.0], [14.6, 51.0], [14.7, 51.0], [14.8, 52.0], [14.9, 52.0], [15.0, 52.0], [15.1, 52.0], [15.2, 52.0], [15.3, 53.0], [15.4, 53.0], [15.5, 53.0], [15.6, 53.0], [15.7, 53.0], [15.8, 54.0], [15.9, 54.0], [16.0, 54.0], [16.1, 55.0], [16.2, 55.0], [16.3, 56.0], [16.4, 56.0], [16.5, 56.0], [16.6, 57.0], [16.7, 57.0], [16.8, 57.0], [16.9, 57.0], [17.0, 57.0], [17.1, 58.0], [17.2, 58.0], [17.3, 58.0], [17.4, 58.0], [17.5, 59.0], [17.6, 59.0], [17.7, 59.0], [17.8, 60.0], [17.9, 60.0], [18.0, 60.0], [18.1, 61.0], [18.2, 61.0], [18.3, 61.0], [18.4, 61.0], [18.5, 62.0], [18.6, 62.0], [18.7, 62.0], [18.8, 62.0], [18.9, 63.0], [19.0, 63.0], [19.1, 63.0], [19.2, 63.0], [19.3, 64.0], [19.4, 64.0], [19.5, 65.0], [19.6, 65.0], [19.7, 65.0], [19.8, 65.0], [19.9, 65.0], [20.0, 66.0], [20.1, 66.0], [20.2, 66.0], [20.3, 66.0], [20.4, 66.0], [20.5, 66.0], [20.6, 67.0], [20.7, 67.0], [20.8, 67.0], [20.9, 67.0], [21.0, 68.0], [21.1, 68.0], [21.2, 68.0], [21.3, 68.0], [21.4, 69.0], [21.5, 69.0], [21.6, 69.0], [21.7, 69.0], [21.8, 69.0], [21.9, 70.0], [22.0, 70.0], [22.1, 70.0], [22.2, 70.0], [22.3, 71.0], [22.4, 71.0], [22.5, 71.0], [22.6, 71.0], [22.7, 71.0], [22.8, 71.0], [22.9, 71.0], [23.0, 72.0], [23.1, 72.0], [23.2, 72.0], [23.3, 72.0], [23.4, 73.0], [23.5, 73.0], [23.6, 73.0], [23.7, 73.0], [23.8, 73.0], [23.9, 73.0], [24.0, 74.0], [24.1, 74.0], [24.2, 74.0], [24.3, 74.0], [24.4, 74.0], [24.5, 74.0], [24.6, 75.0], [24.7, 75.0], [24.8, 75.0], [24.9, 75.0], [25.0, 75.0], [25.1, 75.0], [25.2, 75.0], [25.3, 76.0], [25.4, 76.0], [25.5, 76.0], [25.6, 76.0], [25.7, 76.0], [25.8, 76.0], [25.9, 76.0], [26.0, 76.0], [26.1, 77.0], [26.2, 77.0], [26.3, 77.0], [26.4, 77.0], [26.5, 77.0], [26.6, 77.0], [26.7, 77.0], [26.8, 78.0], [26.9, 78.0], [27.0, 78.0], [27.1, 78.0], [27.2, 78.0], [27.3, 78.0], [27.4, 79.0], [27.5, 79.0], [27.6, 79.0], [27.7, 79.0], [27.8, 79.0], [27.9, 79.0], [28.0, 79.0], [28.1, 79.0], [28.2, 80.0], [28.3, 80.0], [28.4, 80.0], [28.5, 80.0], [28.6, 80.0], [28.7, 80.0], [28.8, 80.0], [28.9, 80.0], [29.0, 80.0], [29.1, 81.0], [29.2, 81.0], [29.3, 81.0], [29.4, 81.0], [29.5, 81.0], [29.6, 81.0], [29.7, 81.0], [29.8, 82.0], [29.9, 82.0], [30.0, 82.0], [30.1, 82.0], [30.2, 82.0], [30.3, 82.0], [30.4, 83.0], [30.5, 83.0], [30.6, 83.0], [30.7, 83.0], [30.8, 83.0], [30.9, 83.0], [31.0, 83.0], [31.1, 84.0], [31.2, 84.0], [31.3, 84.0], [31.4, 84.0], [31.5, 84.0], [31.6, 85.0], [31.7, 85.0], [31.8, 85.0], [31.9, 85.0], [32.0, 85.0], [32.1, 85.0], [32.2, 85.0], [32.3, 85.0], [32.4, 86.0], [32.5, 86.0], [32.6, 86.0], [32.7, 86.0], [32.8, 86.0], [32.9, 87.0], [33.0, 87.0], [33.1, 87.0], [33.2, 87.0], [33.3, 87.0], [33.4, 88.0], [33.5, 88.0], [33.6, 88.0], [33.7, 88.0], [33.8, 88.0], [33.9, 88.0], [34.0, 89.0], [34.1, 89.0], [34.2, 89.0], [34.3, 89.0], [34.4, 89.0], [34.5, 90.0], [34.6, 90.0], [34.7, 90.0], [34.8, 90.0], [34.9, 91.0], [35.0, 91.0], [35.1, 91.0], [35.2, 91.0], [35.3, 91.0], [35.4, 92.0], [35.5, 92.0], [35.6, 92.0], [35.7, 92.0], [35.8, 93.0], [35.9, 93.0], [36.0, 93.0], [36.1, 93.0], [36.2, 93.0], [36.3, 94.0], [36.4, 94.0], [36.5, 94.0], [36.6, 94.0], [36.7, 95.0], [36.8, 95.0], [36.9, 95.0], [37.0, 96.0], [37.1, 96.0], [37.2, 96.0], [37.3, 97.0], [37.4, 97.0], [37.5, 97.0], [37.6, 98.0], [37.7, 98.0], [37.8, 98.0], [37.9, 98.0], [38.0, 99.0], [38.1, 100.0], [38.2, 100.0], [38.3, 101.0], [38.4, 101.0], [38.5, 101.0], [38.6, 102.0], [38.7, 102.0], [38.8, 103.0], [38.9, 103.0], [39.0, 104.0], [39.1, 104.0], [39.2, 105.0], [39.3, 105.0], [39.4, 106.0], [39.5, 106.0], [39.6, 107.0], [39.7, 107.0], [39.8, 107.0], [39.9, 108.0], [40.0, 108.0], [40.1, 108.0], [40.2, 109.0], [40.3, 109.0], [40.4, 110.0], [40.5, 111.0], [40.6, 111.0], [40.7, 112.0], [40.8, 113.0], [40.9, 113.0], [41.0, 114.0], [41.1, 114.0], [41.2, 115.0], [41.3, 115.0], [41.4, 116.0], [41.5, 117.0], [41.6, 118.0], [41.7, 119.0], [41.8, 119.0], [41.9, 120.0], [42.0, 120.0], [42.1, 121.0], [42.2, 121.0], [42.3, 122.0], [42.4, 122.0], [42.5, 123.0], [42.6, 124.0], [42.7, 124.0], [42.8, 125.0], [42.9, 126.0], [43.0, 126.0], [43.1, 127.0], [43.2, 128.0], [43.3, 128.0], [43.4, 129.0], [43.5, 130.0], [43.6, 130.0], [43.7, 130.0], [43.8, 131.0], [43.9, 132.0], [44.0, 132.0], [44.1, 133.0], [44.2, 133.0], [44.3, 134.0], [44.4, 135.0], [44.5, 135.0], [44.6, 136.0], [44.7, 136.0], [44.8, 137.0], [44.9, 138.0], [45.0, 139.0], [45.1, 139.0], [45.2, 140.0], [45.3, 141.0], [45.4, 141.0], [45.5, 142.0], [45.6, 143.0], [45.7, 144.0], [45.8, 144.0], [45.9, 145.0], [46.0, 146.0], [46.1, 147.0], [46.2, 148.0], [46.3, 148.0], [46.4, 149.0], [46.5, 149.0], [46.6, 150.0], [46.7, 151.0], [46.8, 152.0], [46.9, 153.0], [47.0, 154.0], [47.1, 155.0], [47.2, 155.0], [47.3, 157.0], [47.4, 158.0], [47.5, 158.0], [47.6, 159.0], [47.7, 159.0], [47.8, 160.0], [47.9, 161.0], [48.0, 163.0], [48.1, 163.0], [48.2, 165.0], [48.3, 166.0], [48.4, 166.0], [48.5, 168.0], [48.6, 169.0], [48.7, 170.0], [48.8, 172.0], [48.9, 174.0], [49.0, 175.0], [49.1, 176.0], [49.2, 177.0], [49.3, 178.0], [49.4, 180.0], [49.5, 181.0], [49.6, 182.0], [49.7, 183.0], [49.8, 185.0], [49.9, 186.0], [50.0, 187.0], [50.1, 187.0], [50.2, 188.0], [50.3, 188.0], [50.4, 189.0], [50.5, 190.0], [50.6, 191.0], [50.7, 191.0], [50.8, 193.0], [50.9, 194.0], [51.0, 194.0], [51.1, 196.0], [51.2, 197.0], [51.3, 198.0], [51.4, 199.0], [51.5, 200.0], [51.6, 201.0], [51.7, 201.0], [51.8, 202.0], [51.9, 203.0], [52.0, 203.0], [52.1, 204.0], [52.2, 204.0], [52.3, 206.0], [52.4, 207.0], [52.5, 208.0], [52.6, 209.0], [52.7, 209.0], [52.8, 210.0], [52.9, 210.0], [53.0, 211.0], [53.1, 212.0], [53.2, 212.0], [53.3, 214.0], [53.4, 215.0], [53.5, 216.0], [53.6, 217.0], [53.7, 218.0], [53.8, 219.0], [53.9, 219.0], [54.0, 220.0], [54.1, 221.0], [54.2, 222.0], [54.3, 223.0], [54.4, 224.0], [54.5, 225.0], [54.6, 225.0], [54.7, 226.0], [54.8, 226.0], [54.9, 227.0], [55.0, 227.0], [55.1, 229.0], [55.2, 229.0], [55.3, 230.0], [55.4, 231.0], [55.5, 232.0], [55.6, 232.0], [55.7, 233.0], [55.8, 234.0], [55.9, 234.0], [56.0, 235.0], [56.1, 236.0], [56.2, 237.0], [56.3, 238.0], [56.4, 239.0], [56.5, 240.0], [56.6, 241.0], [56.7, 241.0], [56.8, 242.0], [56.9, 243.0], [57.0, 245.0], [57.1, 245.0], [57.2, 246.0], [57.3, 247.0], [57.4, 248.0], [57.5, 249.0], [57.6, 249.0], [57.7, 251.0], [57.8, 251.0], [57.9, 252.0], [58.0, 253.0], [58.1, 254.0], [58.2, 256.0], [58.3, 256.0], [58.4, 258.0], [58.5, 258.0], [58.6, 260.0], [58.7, 260.0], [58.8, 262.0], [58.9, 263.0], [59.0, 264.0], [59.1, 265.0], [59.2, 266.0], [59.3, 266.0], [59.4, 268.0], [59.5, 268.0], [59.6, 269.0], [59.7, 270.0], [59.8, 272.0], [59.9, 272.0], [60.0, 274.0], [60.1, 275.0], [60.2, 278.0], [60.3, 279.0], [60.4, 280.0], [60.5, 281.0], [60.6, 282.0], [60.7, 282.0], [60.8, 284.0], [60.9, 285.0], [61.0, 286.0], [61.1, 286.0], [61.2, 288.0], [61.3, 289.0], [61.4, 290.0], [61.5, 291.0], [61.6, 291.0], [61.7, 293.0], [61.8, 293.0], [61.9, 294.0], [62.0, 296.0], [62.1, 297.0], [62.2, 298.0], [62.3, 299.0], [62.4, 300.0], [62.5, 302.0], [62.6, 303.0], [62.7, 304.0], [62.8, 306.0], [62.9, 307.0], [63.0, 310.0], [63.1, 310.0], [63.2, 311.0], [63.3, 312.0], [63.4, 314.0], [63.5, 315.0], [63.6, 316.0], [63.7, 317.0], [63.8, 319.0], [63.9, 319.0], [64.0, 321.0], [64.1, 321.0], [64.2, 323.0], [64.3, 324.0], [64.4, 325.0], [64.5, 326.0], [64.6, 327.0], [64.7, 329.0], [64.8, 331.0], [64.9, 331.0], [65.0, 332.0], [65.1, 334.0], [65.2, 336.0], [65.3, 338.0], [65.4, 339.0], [65.5, 340.0], [65.6, 341.0], [65.7, 343.0], [65.8, 343.0], [65.9, 344.0], [66.0, 345.0], [66.1, 346.0], [66.2, 347.0], [66.3, 348.0], [66.4, 350.0], [66.5, 351.0], [66.6, 353.0], [66.7, 354.0], [66.8, 355.0], [66.9, 356.0], [67.0, 357.0], [67.1, 357.0], [67.2, 359.0], [67.3, 360.0], [67.4, 361.0], [67.5, 361.0], [67.6, 363.0], [67.7, 364.0], [67.8, 365.0], [67.9, 366.0], [68.0, 368.0], [68.1, 369.0], [68.2, 370.0], [68.3, 371.0], [68.4, 373.0], [68.5, 374.0], [68.6, 376.0], [68.7, 377.0], [68.8, 379.0], [68.9, 381.0], [69.0, 382.0], [69.1, 383.0], [69.2, 384.0], [69.3, 384.0], [69.4, 385.0], [69.5, 387.0], [69.6, 388.0], [69.7, 389.0], [69.8, 390.0], [69.9, 391.0], [70.0, 394.0], [70.1, 395.0], [70.2, 396.0], [70.3, 398.0], [70.4, 399.0], [70.5, 400.0], [70.6, 401.0], [70.7, 403.0], [70.8, 404.0], [70.9, 404.0], [71.0, 405.0], [71.1, 406.0], [71.2, 407.0], [71.3, 408.0], [71.4, 409.0], [71.5, 411.0], [71.6, 412.0], [71.7, 414.0], [71.8, 416.0], [71.9, 417.0], [72.0, 418.0], [72.1, 419.0], [72.2, 421.0], [72.3, 423.0], [72.4, 424.0], [72.5, 425.0], [72.6, 427.0], [72.7, 429.0], [72.8, 430.0], [72.9, 431.0], [73.0, 435.0], [73.1, 437.0], [73.2, 439.0], [73.3, 442.0], [73.4, 444.0], [73.5, 444.0], [73.6, 446.0], [73.7, 447.0], [73.8, 449.0], [73.9, 450.0], [74.0, 452.0], [74.1, 453.0], [74.2, 453.0], [74.3, 455.0], [74.4, 456.0], [74.5, 458.0], [74.6, 460.0], [74.7, 461.0], [74.8, 461.0], [74.9, 463.0], [75.0, 464.0], [75.1, 466.0], [75.2, 468.0], [75.3, 469.0], [75.4, 472.0], [75.5, 474.0], [75.6, 476.0], [75.7, 478.0], [75.8, 480.0], [75.9, 482.0], [76.0, 484.0], [76.1, 485.0], [76.2, 487.0], [76.3, 488.0], [76.4, 491.0], [76.5, 492.0], [76.6, 493.0], [76.7, 494.0], [76.8, 495.0], [76.9, 496.0], [77.0, 497.0], [77.1, 498.0], [77.2, 501.0], [77.3, 503.0], [77.4, 505.0], [77.5, 508.0], [77.6, 508.0], [77.7, 511.0], [77.8, 511.0], [77.9, 514.0], [78.0, 516.0], [78.1, 518.0], [78.2, 519.0], [78.3, 521.0], [78.4, 523.0], [78.5, 526.0], [78.6, 527.0], [78.7, 528.0], [78.8, 531.0], [78.9, 532.0], [79.0, 533.0], [79.1, 535.0], [79.2, 535.0], [79.3, 538.0], [79.4, 539.0], [79.5, 540.0], [79.6, 542.0], [79.7, 542.0], [79.8, 545.0], [79.9, 546.0], [80.0, 547.0], [80.1, 549.0], [80.2, 550.0], [80.3, 551.0], [80.4, 553.0], [80.5, 555.0], [80.6, 557.0], [80.7, 560.0], [80.8, 561.0], [80.9, 562.0], [81.0, 566.0], [81.1, 568.0], [81.2, 568.0], [81.3, 571.0], [81.4, 575.0], [81.5, 576.0], [81.6, 577.0], [81.7, 578.0], [81.8, 581.0], [81.9, 584.0], [82.0, 585.0], [82.1, 589.0], [82.2, 591.0], [82.3, 594.0], [82.4, 596.0], [82.5, 597.0], [82.6, 598.0], [82.7, 601.0], [82.8, 602.0], [82.9, 603.0], [83.0, 606.0], [83.1, 608.0], [83.2, 611.0], [83.3, 612.0], [83.4, 616.0], [83.5, 618.0], [83.6, 620.0], [83.7, 622.0], [83.8, 624.0], [83.9, 627.0], [84.0, 630.0], [84.1, 632.0], [84.2, 633.0], [84.3, 635.0], [84.4, 637.0], [84.5, 639.0], [84.6, 641.0], [84.7, 642.0], [84.8, 643.0], [84.9, 645.0], [85.0, 647.0], [85.1, 650.0], [85.2, 653.0], [85.3, 654.0], [85.4, 655.0], [85.5, 658.0], [85.6, 659.0], [85.7, 660.0], [85.8, 662.0], [85.9, 666.0], [86.0, 668.0], [86.1, 669.0], [86.2, 672.0], [86.3, 673.0], [86.4, 676.0], [86.5, 679.0], [86.6, 681.0], [86.7, 684.0], [86.8, 687.0], [86.9, 690.0], [87.0, 692.0], [87.1, 694.0], [87.2, 696.0], [87.3, 698.0], [87.4, 700.0], [87.5, 705.0], [87.6, 706.0], [87.7, 708.0], [87.8, 710.0], [87.9, 713.0], [88.0, 716.0], [88.1, 718.0], [88.2, 720.0], [88.3, 722.0], [88.4, 723.0], [88.5, 724.0], [88.6, 727.0], [88.7, 730.0], [88.8, 733.0], [88.9, 735.0], [89.0, 737.0], [89.1, 740.0], [89.2, 742.0], [89.3, 747.0], [89.4, 748.0], [89.5, 750.0], [89.6, 753.0], [89.7, 755.0], [89.8, 759.0], [89.9, 766.0], [90.0, 769.0], [90.1, 775.0], [90.2, 777.0], [90.3, 785.0], [90.4, 788.0], [90.5, 793.0], [90.6, 795.0], [90.7, 797.0], [90.8, 801.0], [90.9, 804.0], [91.0, 808.0], [91.1, 810.0], [91.2, 813.0], [91.3, 816.0], [91.4, 820.0], [91.5, 826.0], [91.6, 829.0], [91.7, 840.0], [91.8, 845.0], [91.9, 848.0], [92.0, 855.0], [92.1, 862.0], [92.2, 867.0], [92.3, 874.0], [92.4, 879.0], [92.5, 883.0], [92.6, 886.0], [92.7, 894.0], [92.8, 902.0], [92.9, 905.0], [93.0, 910.0], [93.1, 918.0], [93.2, 920.0], [93.3, 922.0], [93.4, 929.0], [93.5, 931.0], [93.6, 935.0], [93.7, 937.0], [93.8, 944.0], [93.9, 951.0], [94.0, 957.0], [94.1, 963.0], [94.2, 968.0], [94.3, 974.0], [94.4, 982.0], [94.5, 986.0], [94.6, 989.0], [94.7, 993.0], [94.8, 1003.0], [94.9, 1006.0], [95.0, 1011.0], [95.1, 1022.0], [95.2, 1032.0], [95.3, 1037.0], [95.4, 1044.0], [95.5, 1052.0], [95.6, 1063.0], [95.7, 1070.0], [95.8, 1076.0], [95.9, 1080.0], [96.0, 1085.0], [96.1, 1090.0], [96.2, 1100.0], [96.3, 1108.0], [96.4, 1131.0], [96.5, 1137.0], [96.6, 1149.0], [96.7, 1155.0], [96.8, 1166.0], [96.9, 1173.0], [97.0, 1209.0], [97.1, 1215.0], [97.2, 1225.0], [97.3, 1232.0], [97.4, 1249.0], [97.5, 1267.0], [97.6, 1283.0], [97.7, 1313.0], [97.8, 1335.0], [97.9, 1374.0], [98.0, 1396.0], [98.1, 1411.0], [98.2, 1418.0], [98.3, 1435.0], [98.4, 1472.0], [98.5, 1491.0], [98.6, 1520.0], [98.7, 1550.0], [98.8, 1573.0], [98.9, 1609.0], [99.0, 1652.0], [99.1, 1713.0], [99.2, 1758.0], [99.3, 1831.0], [99.4, 1896.0], [99.5, 1937.0], [99.6, 1976.0], [99.7, 2025.0], [99.8, 2197.0], [99.9, 2409.0], [100.0, 3408.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 2004.0, "series": [{"data": [[0.0, 2004.0], [600.0, 249.0], [700.0, 178.0], [800.0, 107.0], [900.0, 104.0], [1000.0, 76.0], [1100.0, 41.0], [1200.0, 35.0], [1300.0, 21.0], [1400.0, 26.0], [1500.0, 19.0], [100.0, 705.0], [1600.0, 9.0], [1700.0, 9.0], [1800.0, 9.0], [1900.0, 13.0], [2000.0, 7.0], [2100.0, 1.0], [2200.0, 2.0], [2300.0, 2.0], [2400.0, 2.0], [2900.0, 1.0], [3000.0, 1.0], [200.0, 573.0], [3300.0, 1.0], [3400.0, 1.0], [300.0, 424.0], [400.0, 353.0], [500.0, 289.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3400.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 76.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 4061.0, "series": [{"data": [[0.0, 4061.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1125.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 76.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.86918604651163, "minX": 1.60374492E12, "maxY": 10.0, "series": [{"data": [[1.60374492E12, 9.977822580645164], [1.6037451E12, 9.86918604651163], [1.60374504E12, 10.0], [1.60374498E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6037451E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 318.83438155136326, "minX": 1.0, "maxY": 3307.0, "series": [{"data": [[4.0, 1220.0], [8.0, 1319.5], [2.0, 3307.0], [1.0, 3068.0], [9.0, 1296.5], [5.0, 787.0], [10.0, 318.83438155136326], [6.0, 1118.0], [3.0, 1327.0], [7.0, 1805.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.98726719878372, 322.1944127708101]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 3098.0, "minX": 1.60374492E12, "maxY": 1589842.0833333333, "series": [{"data": [[1.60374492E12, 1019588.2833333333], [1.6037451E12, 219299.41666666666], [1.60374504E12, 1589842.0833333333], [1.60374498E12, 1422171.5333333334]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60374492E12, 8563.133333333333], [1.6037451E12, 3098.0], [1.60374504E12, 16902.033333333333], [1.60374498E12, 16927.783333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6037451E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 297.9256487025956, "minX": 1.60374492E12, "maxY": 374.9738372093023, "series": [{"data": [[1.60374492E12, 374.6764112903219], [1.6037451E12, 374.9738372093023], [1.60374504E12, 310.96462018730494], [1.60374498E12, 297.9256487025956]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6037451E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 297.5484031936125, "minX": 1.60374492E12, "maxY": 374.6220930232559, "series": [{"data": [[1.60374492E12, 374.0997983870967], [1.6037451E12, 374.6220930232559], [1.60374504E12, 310.5639958376692], [1.60374498E12, 297.5484031936125]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6037451E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.010405827263267445, "minX": 1.60374492E12, "maxY": 0.09879032258064491, "series": [{"data": [[1.60374492E12, 0.09879032258064491], [1.6037451E12, 0.017441860465116275], [1.60374504E12, 0.010405827263267445], [1.60374498E12, 0.011477045908183638]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6037451E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 29.0, "minX": 1.60374492E12, "maxY": 3408.0, "series": [{"data": [[1.60374492E12, 1937.0], [1.6037451E12, 3408.0], [1.60374504E12, 2086.0], [1.60374498E12, 2265.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60374492E12, 32.0], [1.6037451E12, 37.10499991774559], [1.60374504E12, 35.0], [1.60374498E12, 36.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60374492E12, 32.0], [1.6037451E12, 37.41550003290176], [1.60374504E12, 35.0], [1.60374498E12, 36.8495001912117]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60374492E12, 32.0], [1.6037451E12, 37.277499958872795], [1.60374504E12, 35.0], [1.60374498E12, 36.047499760985374]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60374492E12, 29.0], [1.6037451E12, 36.0], [1.60374504E12, 31.0], [1.60374498E12, 33.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60374492E12, 268.0], [1.6037451E12, 107.0], [1.60374504E12, 197.5], [1.60374498E12, 149.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6037451E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 75.0, "minX": 1.0, "maxY": 3187.5, "series": [{"data": [[4.0, 1951.5], [5.0, 1476.0], [6.0, 1073.5], [7.0, 950.0], [9.0, 827.0], [10.0, 754.5], [11.0, 724.0], [12.0, 749.0], [13.0, 672.0], [14.0, 601.5], [15.0, 655.0], [16.0, 495.5], [17.0, 620.0], [18.0, 524.0], [19.0, 495.0], [20.0, 435.0], [21.0, 449.0], [23.0, 354.0], [24.0, 400.0], [25.0, 358.0], [26.0, 284.0], [27.0, 390.0], [28.0, 266.5], [29.0, 346.5], [30.0, 306.5], [31.0, 382.0], [33.0, 243.0], [32.0, 237.0], [35.0, 84.0], [34.0, 248.0], [36.0, 158.5], [37.0, 95.5], [38.0, 90.0], [39.0, 97.0], [41.0, 121.0], [42.0, 167.5], [43.0, 88.0], [44.0, 136.0], [45.0, 121.5], [46.0, 102.0], [49.0, 136.0], [48.0, 98.5], [51.0, 119.0], [50.0, 111.5], [53.0, 98.0], [54.0, 79.5], [56.0, 88.0], [57.0, 106.5], [59.0, 94.0], [58.0, 154.5], [60.0, 87.5], [61.0, 75.0], [63.0, 106.5], [62.0, 155.0], [64.0, 129.0], [67.0, 82.0], [65.0, 132.0], [75.0, 123.5], [73.0, 104.0], [79.0, 127.0], [76.0, 78.5], [83.0, 79.0], [88.0, 85.5], [89.0, 75.0], [1.0, 3187.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 89.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 75.0, "minX": 1.0, "maxY": 3186.5, "series": [{"data": [[4.0, 1950.0], [5.0, 1475.5], [6.0, 1072.0], [7.0, 944.5], [9.0, 824.0], [10.0, 752.5], [11.0, 723.0], [12.0, 748.0], [13.0, 672.0], [14.0, 600.0], [15.0, 655.0], [16.0, 493.5], [17.0, 620.0], [18.0, 523.5], [19.0, 495.0], [20.0, 434.5], [21.0, 448.0], [23.0, 353.0], [24.0, 399.0], [25.0, 358.0], [26.0, 284.0], [27.0, 389.0], [28.0, 266.5], [29.0, 346.5], [30.0, 300.5], [31.0, 382.0], [33.0, 242.0], [32.0, 237.0], [35.0, 84.0], [34.0, 247.5], [36.0, 158.5], [37.0, 95.5], [38.0, 90.0], [39.0, 97.0], [41.0, 121.0], [42.0, 167.5], [43.0, 88.0], [44.0, 136.0], [45.0, 121.5], [46.0, 102.0], [49.0, 136.0], [48.0, 98.5], [51.0, 119.0], [50.0, 111.0], [53.0, 98.0], [54.0, 79.5], [56.0, 88.0], [57.0, 106.5], [59.0, 94.0], [58.0, 154.5], [60.0, 87.5], [61.0, 75.0], [63.0, 106.5], [62.0, 155.0], [64.0, 129.0], [67.0, 82.0], [65.0, 132.0], [75.0, 123.0], [73.0, 104.0], [79.0, 127.0], [76.0, 78.5], [83.0, 79.0], [88.0, 85.5], [89.0, 75.0], [1.0, 3186.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 89.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 5.566666666666666, "minX": 1.60374492E12, "maxY": 33.416666666666664, "series": [{"data": [[1.60374492E12, 16.683333333333334], [1.6037451E12, 5.566666666666666], [1.60374504E12, 32.03333333333333], [1.60374498E12, 33.416666666666664]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6037451E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 5.733333333333333, "minX": 1.60374492E12, "maxY": 33.4, "series": [{"data": [[1.60374492E12, 16.533333333333335], [1.6037451E12, 5.733333333333333], [1.60374504E12, 32.03333333333333], [1.60374498E12, 33.4]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6037451E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 5.733333333333333, "minX": 1.60374492E12, "maxY": 33.4, "series": [{"data": [[1.60374492E12, 16.533333333333335], [1.6037451E12, 5.733333333333333], [1.60374504E12, 32.03333333333333], [1.60374498E12, 33.4]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6037451E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 5.733333333333333, "minX": 1.60374492E12, "maxY": 33.4, "series": [{"data": [[1.60374492E12, 16.533333333333335], [1.6037451E12, 5.733333333333333], [1.60374504E12, 32.03333333333333], [1.60374498E12, 33.4]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6037451E12, "title": "Total Transactions Per Second"}},
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

