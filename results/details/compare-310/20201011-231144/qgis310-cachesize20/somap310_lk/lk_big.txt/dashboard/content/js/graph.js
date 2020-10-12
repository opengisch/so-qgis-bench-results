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
        data: {"result": {"minY": 30.0, "minX": 0.0, "maxY": 2537.0, "series": [{"data": [[0.0, 30.0], [0.1, 31.0], [0.2, 32.0], [0.3, 33.0], [0.4, 34.0], [0.5, 34.0], [0.6, 34.0], [0.7, 35.0], [0.8, 35.0], [0.9, 35.0], [1.0, 35.0], [1.1, 36.0], [1.2, 36.0], [1.3, 36.0], [1.4, 36.0], [1.5, 36.0], [1.6, 36.0], [1.7, 37.0], [1.8, 37.0], [1.9, 37.0], [2.0, 37.0], [2.1, 37.0], [2.2, 37.0], [2.3, 37.0], [2.4, 37.0], [2.5, 37.0], [2.6, 38.0], [2.7, 38.0], [2.8, 38.0], [2.9, 38.0], [3.0, 38.0], [3.1, 38.0], [3.2, 38.0], [3.3, 38.0], [3.4, 38.0], [3.5, 38.0], [3.6, 38.0], [3.7, 38.0], [3.8, 38.0], [3.9, 39.0], [4.0, 39.0], [4.1, 39.0], [4.2, 39.0], [4.3, 39.0], [4.4, 39.0], [4.5, 39.0], [4.6, 39.0], [4.7, 39.0], [4.8, 39.0], [4.9, 39.0], [5.0, 39.0], [5.1, 39.0], [5.2, 40.0], [5.3, 40.0], [5.4, 40.0], [5.5, 40.0], [5.6, 40.0], [5.7, 40.0], [5.8, 40.0], [5.9, 40.0], [6.0, 40.0], [6.1, 40.0], [6.2, 41.0], [6.3, 41.0], [6.4, 41.0], [6.5, 41.0], [6.6, 41.0], [6.7, 41.0], [6.8, 41.0], [6.9, 41.0], [7.0, 41.0], [7.1, 41.0], [7.2, 41.0], [7.3, 41.0], [7.4, 41.0], [7.5, 41.0], [7.6, 42.0], [7.7, 42.0], [7.8, 42.0], [7.9, 42.0], [8.0, 42.0], [8.1, 42.0], [8.2, 42.0], [8.3, 42.0], [8.4, 42.0], [8.5, 42.0], [8.6, 42.0], [8.7, 42.0], [8.8, 42.0], [8.9, 42.0], [9.0, 43.0], [9.1, 43.0], [9.2, 43.0], [9.3, 43.0], [9.4, 43.0], [9.5, 43.0], [9.6, 43.0], [9.7, 43.0], [9.8, 43.0], [9.9, 43.0], [10.0, 43.0], [10.1, 43.0], [10.2, 44.0], [10.3, 44.0], [10.4, 44.0], [10.5, 44.0], [10.6, 44.0], [10.7, 44.0], [10.8, 44.0], [10.9, 44.0], [11.0, 45.0], [11.1, 45.0], [11.2, 45.0], [11.3, 45.0], [11.4, 45.0], [11.5, 45.0], [11.6, 45.0], [11.7, 45.0], [11.8, 45.0], [11.9, 45.0], [12.0, 45.0], [12.1, 46.0], [12.2, 46.0], [12.3, 46.0], [12.4, 46.0], [12.5, 46.0], [12.6, 46.0], [12.7, 46.0], [12.8, 46.0], [12.9, 46.0], [13.0, 47.0], [13.1, 47.0], [13.2, 47.0], [13.3, 47.0], [13.4, 47.0], [13.5, 47.0], [13.6, 47.0], [13.7, 48.0], [13.8, 48.0], [13.9, 48.0], [14.0, 48.0], [14.1, 48.0], [14.2, 48.0], [14.3, 48.0], [14.4, 48.0], [14.5, 49.0], [14.6, 49.0], [14.7, 49.0], [14.8, 49.0], [14.9, 50.0], [15.0, 50.0], [15.1, 50.0], [15.2, 50.0], [15.3, 50.0], [15.4, 51.0], [15.5, 51.0], [15.6, 51.0], [15.7, 52.0], [15.8, 52.0], [15.9, 53.0], [16.0, 53.0], [16.1, 54.0], [16.2, 54.0], [16.3, 55.0], [16.4, 55.0], [16.5, 56.0], [16.6, 56.0], [16.7, 56.0], [16.8, 57.0], [16.9, 57.0], [17.0, 58.0], [17.1, 58.0], [17.2, 59.0], [17.3, 59.0], [17.4, 59.0], [17.5, 60.0], [17.6, 60.0], [17.7, 60.0], [17.8, 61.0], [17.9, 61.0], [18.0, 61.0], [18.1, 61.0], [18.2, 62.0], [18.3, 62.0], [18.4, 62.0], [18.5, 63.0], [18.6, 63.0], [18.7, 63.0], [18.8, 63.0], [18.9, 64.0], [19.0, 64.0], [19.1, 64.0], [19.2, 64.0], [19.3, 65.0], [19.4, 65.0], [19.5, 65.0], [19.6, 65.0], [19.7, 66.0], [19.8, 66.0], [19.9, 66.0], [20.0, 67.0], [20.1, 67.0], [20.2, 67.0], [20.3, 67.0], [20.4, 67.0], [20.5, 68.0], [20.6, 68.0], [20.7, 68.0], [20.8, 68.0], [20.9, 68.0], [21.0, 69.0], [21.1, 69.0], [21.2, 69.0], [21.3, 69.0], [21.4, 69.0], [21.5, 70.0], [21.6, 70.0], [21.7, 70.0], [21.8, 70.0], [21.9, 70.0], [22.0, 71.0], [22.1, 71.0], [22.2, 71.0], [22.3, 71.0], [22.4, 71.0], [22.5, 71.0], [22.6, 71.0], [22.7, 72.0], [22.8, 72.0], [22.9, 72.0], [23.0, 72.0], [23.1, 72.0], [23.2, 72.0], [23.3, 72.0], [23.4, 72.0], [23.5, 73.0], [23.6, 73.0], [23.7, 73.0], [23.8, 73.0], [23.9, 73.0], [24.0, 73.0], [24.1, 73.0], [24.2, 73.0], [24.3, 73.0], [24.4, 74.0], [24.5, 74.0], [24.6, 74.0], [24.7, 74.0], [24.8, 74.0], [24.9, 74.0], [25.0, 74.0], [25.1, 74.0], [25.2, 74.0], [25.3, 75.0], [25.4, 75.0], [25.5, 75.0], [25.6, 75.0], [25.7, 75.0], [25.8, 75.0], [25.9, 75.0], [26.0, 75.0], [26.1, 76.0], [26.2, 76.0], [26.3, 76.0], [26.4, 76.0], [26.5, 76.0], [26.6, 76.0], [26.7, 76.0], [26.8, 76.0], [26.9, 76.0], [27.0, 76.0], [27.1, 77.0], [27.2, 77.0], [27.3, 77.0], [27.4, 77.0], [27.5, 77.0], [27.6, 77.0], [27.7, 77.0], [27.8, 77.0], [27.9, 77.0], [28.0, 77.0], [28.1, 78.0], [28.2, 78.0], [28.3, 78.0], [28.4, 78.0], [28.5, 78.0], [28.6, 78.0], [28.7, 78.0], [28.8, 78.0], [28.9, 78.0], [29.0, 78.0], [29.1, 79.0], [29.2, 79.0], [29.3, 79.0], [29.4, 79.0], [29.5, 79.0], [29.6, 79.0], [29.7, 79.0], [29.8, 79.0], [29.9, 80.0], [30.0, 80.0], [30.1, 80.0], [30.2, 80.0], [30.3, 80.0], [30.4, 80.0], [30.5, 80.0], [30.6, 80.0], [30.7, 80.0], [30.8, 81.0], [30.9, 81.0], [31.0, 81.0], [31.1, 81.0], [31.2, 81.0], [31.3, 81.0], [31.4, 81.0], [31.5, 81.0], [31.6, 81.0], [31.7, 82.0], [31.8, 82.0], [31.9, 82.0], [32.0, 82.0], [32.1, 82.0], [32.2, 82.0], [32.3, 82.0], [32.4, 82.0], [32.5, 83.0], [32.6, 83.0], [32.7, 83.0], [32.8, 83.0], [32.9, 83.0], [33.0, 83.0], [33.1, 83.0], [33.2, 84.0], [33.3, 84.0], [33.4, 84.0], [33.5, 84.0], [33.6, 84.0], [33.7, 85.0], [33.8, 85.0], [33.9, 85.0], [34.0, 85.0], [34.1, 85.0], [34.2, 85.0], [34.3, 85.0], [34.4, 86.0], [34.5, 86.0], [34.6, 86.0], [34.7, 86.0], [34.8, 86.0], [34.9, 86.0], [35.0, 87.0], [35.1, 87.0], [35.2, 87.0], [35.3, 87.0], [35.4, 87.0], [35.5, 88.0], [35.6, 88.0], [35.7, 88.0], [35.8, 88.0], [35.9, 88.0], [36.0, 89.0], [36.1, 89.0], [36.2, 89.0], [36.3, 89.0], [36.4, 89.0], [36.5, 90.0], [36.6, 90.0], [36.7, 90.0], [36.8, 91.0], [36.9, 91.0], [37.0, 91.0], [37.1, 91.0], [37.2, 91.0], [37.3, 92.0], [37.4, 92.0], [37.5, 92.0], [37.6, 92.0], [37.7, 93.0], [37.8, 93.0], [37.9, 93.0], [38.0, 94.0], [38.1, 94.0], [38.2, 94.0], [38.3, 95.0], [38.4, 95.0], [38.5, 95.0], [38.6, 96.0], [38.7, 96.0], [38.8, 97.0], [38.9, 97.0], [39.0, 97.0], [39.1, 98.0], [39.2, 98.0], [39.3, 98.0], [39.4, 99.0], [39.5, 100.0], [39.6, 100.0], [39.7, 101.0], [39.8, 101.0], [39.9, 102.0], [40.0, 102.0], [40.1, 103.0], [40.2, 103.0], [40.3, 104.0], [40.4, 105.0], [40.5, 106.0], [40.6, 106.0], [40.7, 107.0], [40.8, 108.0], [40.9, 108.0], [41.0, 108.0], [41.1, 109.0], [41.2, 110.0], [41.3, 110.0], [41.4, 111.0], [41.5, 112.0], [41.6, 112.0], [41.7, 114.0], [41.8, 115.0], [41.9, 115.0], [42.0, 116.0], [42.1, 116.0], [42.2, 117.0], [42.3, 118.0], [42.4, 119.0], [42.5, 119.0], [42.6, 120.0], [42.7, 120.0], [42.8, 121.0], [42.9, 121.0], [43.0, 122.0], [43.1, 122.0], [43.2, 123.0], [43.3, 123.0], [43.4, 124.0], [43.5, 124.0], [43.6, 125.0], [43.7, 126.0], [43.8, 126.0], [43.9, 127.0], [44.0, 128.0], [44.1, 128.0], [44.2, 128.0], [44.3, 129.0], [44.4, 130.0], [44.5, 130.0], [44.6, 130.0], [44.7, 131.0], [44.8, 132.0], [44.9, 132.0], [45.0, 133.0], [45.1, 133.0], [45.2, 134.0], [45.3, 134.0], [45.4, 134.0], [45.5, 135.0], [45.6, 135.0], [45.7, 136.0], [45.8, 136.0], [45.9, 137.0], [46.0, 137.0], [46.1, 138.0], [46.2, 138.0], [46.3, 139.0], [46.4, 139.0], [46.5, 140.0], [46.6, 140.0], [46.7, 141.0], [46.8, 141.0], [46.9, 142.0], [47.0, 143.0], [47.1, 144.0], [47.2, 144.0], [47.3, 145.0], [47.4, 146.0], [47.5, 147.0], [47.6, 148.0], [47.7, 148.0], [47.8, 149.0], [47.9, 150.0], [48.0, 151.0], [48.1, 152.0], [48.2, 153.0], [48.3, 154.0], [48.4, 155.0], [48.5, 155.0], [48.6, 156.0], [48.7, 159.0], [48.8, 159.0], [48.9, 160.0], [49.0, 161.0], [49.1, 162.0], [49.2, 163.0], [49.3, 165.0], [49.4, 166.0], [49.5, 166.0], [49.6, 168.0], [49.7, 170.0], [49.8, 172.0], [49.9, 172.0], [50.0, 174.0], [50.1, 176.0], [50.2, 176.0], [50.3, 178.0], [50.4, 178.0], [50.5, 179.0], [50.6, 180.0], [50.7, 181.0], [50.8, 182.0], [50.9, 183.0], [51.0, 184.0], [51.1, 185.0], [51.2, 186.0], [51.3, 187.0], [51.4, 188.0], [51.5, 189.0], [51.6, 190.0], [51.7, 191.0], [51.8, 191.0], [51.9, 192.0], [52.0, 193.0], [52.1, 194.0], [52.2, 195.0], [52.3, 196.0], [52.4, 197.0], [52.5, 197.0], [52.6, 198.0], [52.7, 199.0], [52.8, 200.0], [52.9, 201.0], [53.0, 201.0], [53.1, 202.0], [53.2, 203.0], [53.3, 204.0], [53.4, 204.0], [53.5, 205.0], [53.6, 205.0], [53.7, 206.0], [53.8, 206.0], [53.9, 207.0], [54.0, 208.0], [54.1, 209.0], [54.2, 209.0], [54.3, 210.0], [54.4, 210.0], [54.5, 211.0], [54.6, 212.0], [54.7, 212.0], [54.8, 213.0], [54.9, 213.0], [55.0, 214.0], [55.1, 215.0], [55.2, 215.0], [55.3, 216.0], [55.4, 217.0], [55.5, 218.0], [55.6, 218.0], [55.7, 218.0], [55.8, 219.0], [55.9, 221.0], [56.0, 221.0], [56.1, 222.0], [56.2, 223.0], [56.3, 223.0], [56.4, 224.0], [56.5, 225.0], [56.6, 226.0], [56.7, 226.0], [56.8, 227.0], [56.9, 228.0], [57.0, 230.0], [57.1, 231.0], [57.2, 231.0], [57.3, 232.0], [57.4, 232.0], [57.5, 233.0], [57.6, 234.0], [57.7, 234.0], [57.8, 235.0], [57.9, 236.0], [58.0, 237.0], [58.1, 239.0], [58.2, 240.0], [58.3, 241.0], [58.4, 242.0], [58.5, 243.0], [58.6, 243.0], [58.7, 244.0], [58.8, 245.0], [58.9, 246.0], [59.0, 246.0], [59.1, 247.0], [59.2, 248.0], [59.3, 249.0], [59.4, 250.0], [59.5, 251.0], [59.6, 251.0], [59.7, 251.0], [59.8, 253.0], [59.9, 254.0], [60.0, 255.0], [60.1, 256.0], [60.2, 257.0], [60.3, 258.0], [60.4, 259.0], [60.5, 260.0], [60.6, 261.0], [60.7, 262.0], [60.8, 263.0], [60.9, 264.0], [61.0, 264.0], [61.1, 266.0], [61.2, 267.0], [61.3, 267.0], [61.4, 268.0], [61.5, 269.0], [61.6, 270.0], [61.7, 270.0], [61.8, 272.0], [61.9, 272.0], [62.0, 274.0], [62.1, 275.0], [62.2, 276.0], [62.3, 277.0], [62.4, 278.0], [62.5, 279.0], [62.6, 281.0], [62.7, 282.0], [62.8, 284.0], [62.9, 285.0], [63.0, 287.0], [63.1, 287.0], [63.2, 289.0], [63.3, 291.0], [63.4, 292.0], [63.5, 292.0], [63.6, 293.0], [63.7, 295.0], [63.8, 296.0], [63.9, 300.0], [64.0, 301.0], [64.1, 302.0], [64.2, 304.0], [64.3, 305.0], [64.4, 306.0], [64.5, 309.0], [64.6, 310.0], [64.7, 310.0], [64.8, 312.0], [64.9, 314.0], [65.0, 315.0], [65.1, 317.0], [65.2, 318.0], [65.3, 319.0], [65.4, 321.0], [65.5, 323.0], [65.6, 323.0], [65.7, 324.0], [65.8, 325.0], [65.9, 327.0], [66.0, 328.0], [66.1, 329.0], [66.2, 331.0], [66.3, 332.0], [66.4, 333.0], [66.5, 334.0], [66.6, 335.0], [66.7, 335.0], [66.8, 337.0], [66.9, 339.0], [67.0, 341.0], [67.1, 342.0], [67.2, 343.0], [67.3, 345.0], [67.4, 345.0], [67.5, 347.0], [67.6, 348.0], [67.7, 349.0], [67.8, 350.0], [67.9, 351.0], [68.0, 352.0], [68.1, 353.0], [68.2, 354.0], [68.3, 356.0], [68.4, 358.0], [68.5, 359.0], [68.6, 361.0], [68.7, 362.0], [68.8, 363.0], [68.9, 364.0], [69.0, 364.0], [69.1, 367.0], [69.2, 368.0], [69.3, 369.0], [69.4, 370.0], [69.5, 372.0], [69.6, 372.0], [69.7, 374.0], [69.8, 374.0], [69.9, 375.0], [70.0, 376.0], [70.1, 377.0], [70.2, 378.0], [70.3, 379.0], [70.4, 379.0], [70.5, 381.0], [70.6, 383.0], [70.7, 384.0], [70.8, 385.0], [70.9, 387.0], [71.0, 390.0], [71.1, 390.0], [71.2, 391.0], [71.3, 392.0], [71.4, 394.0], [71.5, 395.0], [71.6, 396.0], [71.7, 397.0], [71.8, 399.0], [71.9, 401.0], [72.0, 403.0], [72.1, 403.0], [72.2, 404.0], [72.3, 405.0], [72.4, 406.0], [72.5, 408.0], [72.6, 410.0], [72.7, 412.0], [72.8, 414.0], [72.9, 415.0], [73.0, 417.0], [73.1, 419.0], [73.2, 421.0], [73.3, 421.0], [73.4, 423.0], [73.5, 424.0], [73.6, 426.0], [73.7, 427.0], [73.8, 428.0], [73.9, 429.0], [74.0, 431.0], [74.1, 432.0], [74.2, 434.0], [74.3, 436.0], [74.4, 438.0], [74.5, 439.0], [74.6, 439.0], [74.7, 440.0], [74.8, 441.0], [74.9, 444.0], [75.0, 445.0], [75.1, 446.0], [75.2, 447.0], [75.3, 447.0], [75.4, 448.0], [75.5, 450.0], [75.6, 452.0], [75.7, 454.0], [75.8, 455.0], [75.9, 457.0], [76.0, 459.0], [76.1, 461.0], [76.2, 463.0], [76.3, 467.0], [76.4, 468.0], [76.5, 469.0], [76.6, 471.0], [76.7, 472.0], [76.8, 473.0], [76.9, 475.0], [77.0, 476.0], [77.1, 478.0], [77.2, 479.0], [77.3, 481.0], [77.4, 482.0], [77.5, 485.0], [77.6, 486.0], [77.7, 488.0], [77.8, 488.0], [77.9, 490.0], [78.0, 491.0], [78.1, 493.0], [78.2, 494.0], [78.3, 497.0], [78.4, 497.0], [78.5, 499.0], [78.6, 500.0], [78.7, 502.0], [78.8, 503.0], [78.9, 505.0], [79.0, 506.0], [79.1, 508.0], [79.2, 510.0], [79.3, 511.0], [79.4, 513.0], [79.5, 514.0], [79.6, 515.0], [79.7, 519.0], [79.8, 521.0], [79.9, 522.0], [80.0, 524.0], [80.1, 526.0], [80.2, 528.0], [80.3, 530.0], [80.4, 531.0], [80.5, 533.0], [80.6, 536.0], [80.7, 537.0], [80.8, 538.0], [80.9, 540.0], [81.0, 544.0], [81.1, 545.0], [81.2, 546.0], [81.3, 548.0], [81.4, 551.0], [81.5, 553.0], [81.6, 554.0], [81.7, 555.0], [81.8, 558.0], [81.9, 559.0], [82.0, 563.0], [82.1, 564.0], [82.2, 566.0], [82.3, 568.0], [82.4, 570.0], [82.5, 571.0], [82.6, 573.0], [82.7, 575.0], [82.8, 579.0], [82.9, 580.0], [83.0, 583.0], [83.1, 583.0], [83.2, 586.0], [83.3, 587.0], [83.4, 589.0], [83.5, 589.0], [83.6, 591.0], [83.7, 593.0], [83.8, 596.0], [83.9, 599.0], [84.0, 602.0], [84.1, 603.0], [84.2, 604.0], [84.3, 606.0], [84.4, 609.0], [84.5, 610.0], [84.6, 612.0], [84.7, 615.0], [84.8, 618.0], [84.9, 621.0], [85.0, 623.0], [85.1, 625.0], [85.2, 626.0], [85.3, 628.0], [85.4, 630.0], [85.5, 632.0], [85.6, 636.0], [85.7, 637.0], [85.8, 638.0], [85.9, 639.0], [86.0, 642.0], [86.1, 645.0], [86.2, 645.0], [86.3, 647.0], [86.4, 649.0], [86.5, 650.0], [86.6, 651.0], [86.7, 655.0], [86.8, 658.0], [86.9, 663.0], [87.0, 664.0], [87.1, 666.0], [87.2, 668.0], [87.3, 669.0], [87.4, 671.0], [87.5, 673.0], [87.6, 677.0], [87.7, 679.0], [87.8, 682.0], [87.9, 684.0], [88.0, 685.0], [88.1, 686.0], [88.2, 690.0], [88.3, 693.0], [88.4, 695.0], [88.5, 697.0], [88.6, 700.0], [88.7, 702.0], [88.8, 705.0], [88.9, 707.0], [89.0, 710.0], [89.1, 712.0], [89.2, 715.0], [89.3, 717.0], [89.4, 719.0], [89.5, 721.0], [89.6, 723.0], [89.7, 725.0], [89.8, 728.0], [89.9, 730.0], [90.0, 734.0], [90.1, 738.0], [90.2, 745.0], [90.3, 750.0], [90.4, 755.0], [90.5, 757.0], [90.6, 760.0], [90.7, 762.0], [90.8, 765.0], [90.9, 769.0], [91.0, 776.0], [91.1, 779.0], [91.2, 782.0], [91.3, 786.0], [91.4, 788.0], [91.5, 790.0], [91.6, 796.0], [91.7, 799.0], [91.8, 802.0], [91.9, 806.0], [92.0, 810.0], [92.1, 812.0], [92.2, 817.0], [92.3, 822.0], [92.4, 825.0], [92.5, 828.0], [92.6, 832.0], [92.7, 838.0], [92.8, 847.0], [92.9, 856.0], [93.0, 861.0], [93.1, 863.0], [93.2, 868.0], [93.3, 879.0], [93.4, 883.0], [93.5, 891.0], [93.6, 895.0], [93.7, 901.0], [93.8, 903.0], [93.9, 912.0], [94.0, 919.0], [94.1, 924.0], [94.2, 932.0], [94.3, 938.0], [94.4, 943.0], [94.5, 946.0], [94.6, 952.0], [94.7, 957.0], [94.8, 964.0], [94.9, 967.0], [95.0, 970.0], [95.1, 974.0], [95.2, 976.0], [95.3, 987.0], [95.4, 991.0], [95.5, 994.0], [95.6, 1001.0], [95.7, 1009.0], [95.8, 1012.0], [95.9, 1027.0], [96.0, 1035.0], [96.1, 1045.0], [96.2, 1060.0], [96.3, 1072.0], [96.4, 1087.0], [96.5, 1094.0], [96.6, 1104.0], [96.7, 1106.0], [96.8, 1109.0], [96.9, 1113.0], [97.0, 1127.0], [97.1, 1134.0], [97.2, 1159.0], [97.3, 1174.0], [97.4, 1183.0], [97.5, 1192.0], [97.6, 1230.0], [97.7, 1246.0], [97.8, 1288.0], [97.9, 1310.0], [98.0, 1340.0], [98.1, 1392.0], [98.2, 1405.0], [98.3, 1463.0], [98.4, 1494.0], [98.5, 1521.0], [98.6, 1536.0], [98.7, 1570.0], [98.8, 1594.0], [98.9, 1615.0], [99.0, 1643.0], [99.1, 1726.0], [99.2, 1774.0], [99.3, 1850.0], [99.4, 1917.0], [99.5, 1988.0], [99.6, 2049.0], [99.7, 2118.0], [99.8, 2163.0], [99.9, 2270.0], [100.0, 2537.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 2077.0, "series": [{"data": [[0.0, 2077.0], [600.0, 245.0], [700.0, 166.0], [800.0, 103.0], [900.0, 101.0], [1000.0, 51.0], [1100.0, 50.0], [1200.0, 19.0], [1300.0, 14.0], [1400.0, 14.0], [1500.0, 23.0], [100.0, 701.0], [1600.0, 11.0], [1700.0, 9.0], [1800.0, 9.0], [1900.0, 7.0], [2000.0, 7.0], [2100.0, 9.0], [2200.0, 6.0], [2300.0, 1.0], [2500.0, 2.0], [200.0, 584.0], [300.0, 417.0], [400.0, 353.0], [500.0, 283.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 2500.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 84.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 4136.0, "series": [{"data": [[0.0, 4136.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1042.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 84.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.974223784417104, "minX": 1.60246008E12, "maxY": 10.0, "series": [{"data": [[1.6024602E12, 9.974223784417104], [1.60246014E12, 10.0], [1.60246008E12, 9.982905982905976]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6024602E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 102.5, "minX": 1.0, "maxY": 2134.0, "series": [{"data": [[4.0, 1185.5], [8.0, 1352.5], [2.0, 1989.0], [1.0, 2134.0], [9.0, 102.5], [5.0, 1188.0], [10.0, 306.18296169239676], [6.0, 1074.0], [3.0, 1951.0], [7.0, 1228.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.987457240592919, 308.79456480425824]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 11172.333333333334, "minX": 1.60246008E12, "maxY": 1683132.75, "series": [{"data": [[1.6024602E12, 1683132.75], [1.60246014E12, 1366271.4], [1.60246008E12, 1201582.35]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6024602E12, 14926.7], [1.60246014E12, 19391.916666666668], [1.60246008E12, 11172.333333333334]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6024602E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 266.5648148148152, "minX": 1.60246008E12, "maxY": 341.6045066045069, "series": [{"data": [[1.6024602E12, 340.1657879320448], [1.60246014E12, 266.5648148148152], [1.60246008E12, 341.6045066045069]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6024602E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 266.2495590828927, "minX": 1.60246008E12, "maxY": 341.1297591297586, "series": [{"data": [[1.6024602E12, 339.67721148213246], [1.60246014E12, 266.2495590828927], [1.60246008E12, 341.1297591297586]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6024602E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0074955908289241705, "minX": 1.60246008E12, "maxY": 0.09246309246309242, "series": [{"data": [[1.6024602E12, 0.009373169302870561], [1.60246014E12, 0.0074955908289241705], [1.60246008E12, 0.09246309246309242]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6024602E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 30.0, "minX": 1.60246008E12, "maxY": 2537.0, "series": [{"data": [[1.6024602E12, 2537.0], [1.60246014E12, 2286.0], [1.60246008E12, 1850.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6024602E12, 34.0], [1.60246014E12, 35.0], [1.60246008E12, 35.59199969291687]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6024602E12, 34.0], [1.60246014E12, 35.0], [1.60246008E12, 36.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6024602E12, 34.0], [1.60246014E12, 35.0], [1.60246008E12, 36.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.6024602E12, 31.0], [1.60246014E12, 30.0], [1.60246008E12, 33.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6024602E12, 230.0], [1.60246014E12, 130.0], [1.60246008E12, 224.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6024602E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 72.5, "minX": 1.0, "maxY": 2179.0, "series": [{"data": [[3.0, 1317.0], [4.0, 2111.5], [5.0, 1132.0], [6.0, 2179.0], [8.0, 875.0], [9.0, 835.5], [10.0, 1103.5], [12.0, 760.5], [13.0, 668.5], [14.0, 646.0], [15.0, 642.0], [16.0, 585.0], [17.0, 537.0], [18.0, 552.0], [19.0, 504.5], [20.0, 448.0], [21.0, 372.5], [22.0, 403.0], [23.0, 288.0], [24.0, 228.0], [25.0, 370.0], [26.0, 327.5], [27.0, 386.0], [28.0, 368.0], [29.0, 233.5], [30.0, 293.5], [31.0, 221.0], [33.0, 213.0], [32.0, 257.5], [34.0, 270.5], [37.0, 197.0], [38.0, 211.5], [40.0, 83.5], [41.0, 152.0], [43.0, 75.0], [42.0, 210.0], [45.0, 194.0], [44.0, 104.5], [46.0, 102.5], [47.0, 198.0], [48.0, 79.0], [49.0, 80.5], [51.0, 81.5], [50.0, 151.0], [53.0, 132.0], [55.0, 122.0], [57.0, 76.0], [56.0, 151.5], [59.0, 72.5], [58.0, 92.0], [60.0, 131.0], [62.0, 92.5], [63.0, 84.0], [65.0, 135.0], [68.0, 115.5], [70.0, 140.5], [69.0, 135.0], [71.0, 79.0], [73.0, 132.0], [79.0, 76.0], [78.0, 81.5], [81.0, 78.0], [87.0, 87.0], [1.0, 1135.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 87.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 72.5, "minX": 1.0, "maxY": 2178.5, "series": [{"data": [[3.0, 1317.0], [4.0, 2111.0], [5.0, 1130.0], [6.0, 2178.5], [8.0, 872.0], [9.0, 832.0], [10.0, 1103.0], [12.0, 759.5], [13.0, 666.5], [14.0, 646.0], [15.0, 641.0], [16.0, 584.0], [17.0, 521.0], [18.0, 550.5], [19.0, 502.5], [20.0, 448.0], [21.0, 371.5], [22.0, 403.0], [23.0, 288.0], [24.0, 228.0], [25.0, 370.0], [26.0, 327.5], [27.0, 385.5], [28.0, 368.0], [29.0, 233.5], [30.0, 291.5], [31.0, 221.0], [33.0, 213.0], [32.0, 257.0], [34.0, 270.0], [37.0, 196.5], [38.0, 211.5], [40.0, 83.5], [41.0, 152.0], [43.0, 75.0], [42.0, 210.0], [45.0, 194.0], [44.0, 104.5], [46.0, 102.0], [47.0, 198.0], [48.0, 78.5], [49.0, 80.5], [51.0, 81.0], [50.0, 151.0], [53.0, 131.0], [55.0, 122.0], [57.0, 76.0], [56.0, 151.5], [59.0, 72.5], [58.0, 92.0], [60.0, 130.5], [62.0, 92.5], [63.0, 84.0], [65.0, 129.0], [68.0, 115.0], [70.0, 140.0], [69.0, 134.5], [71.0, 79.0], [73.0, 132.0], [79.0, 76.0], [78.0, 81.5], [81.0, 77.0], [87.0, 87.0], [1.0, 1133.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 87.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 21.616666666666667, "minX": 1.60246008E12, "maxY": 37.8, "series": [{"data": [[1.6024602E12, 28.283333333333335], [1.60246014E12, 37.8], [1.60246008E12, 21.616666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6024602E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 21.45, "minX": 1.60246008E12, "maxY": 37.8, "series": [{"data": [[1.6024602E12, 28.45], [1.60246014E12, 37.8], [1.60246008E12, 21.45]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6024602E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 21.45, "minX": 1.60246008E12, "maxY": 37.8, "series": [{"data": [[1.6024602E12, 28.45], [1.60246014E12, 37.8], [1.60246008E12, 21.45]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6024602E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 21.45, "minX": 1.60246008E12, "maxY": 37.8, "series": [{"data": [[1.6024602E12, 28.45], [1.60246014E12, 37.8], [1.60246008E12, 21.45]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6024602E12, "title": "Total Transactions Per Second"}},
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

