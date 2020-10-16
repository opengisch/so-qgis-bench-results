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
        data: {"result": {"minY": 29.0, "minX": 0.0, "maxY": 3138.0, "series": [{"data": [[0.0, 29.0], [0.1, 30.0], [0.2, 31.0], [0.3, 32.0], [0.4, 32.0], [0.5, 32.0], [0.6, 32.0], [0.7, 33.0], [0.8, 33.0], [0.9, 33.0], [1.0, 34.0], [1.1, 34.0], [1.2, 34.0], [1.3, 34.0], [1.4, 34.0], [1.5, 35.0], [1.6, 35.0], [1.7, 35.0], [1.8, 35.0], [1.9, 35.0], [2.0, 36.0], [2.1, 36.0], [2.2, 36.0], [2.3, 36.0], [2.4, 36.0], [2.5, 36.0], [2.6, 36.0], [2.7, 37.0], [2.8, 37.0], [2.9, 37.0], [3.0, 37.0], [3.1, 37.0], [3.2, 37.0], [3.3, 37.0], [3.4, 37.0], [3.5, 37.0], [3.6, 37.0], [3.7, 37.0], [3.8, 37.0], [3.9, 37.0], [4.0, 38.0], [4.1, 38.0], [4.2, 38.0], [4.3, 38.0], [4.4, 38.0], [4.5, 38.0], [4.6, 38.0], [4.7, 38.0], [4.8, 38.0], [4.9, 38.0], [5.0, 38.0], [5.1, 38.0], [5.2, 38.0], [5.3, 38.0], [5.4, 38.0], [5.5, 39.0], [5.6, 39.0], [5.7, 39.0], [5.8, 39.0], [5.9, 39.0], [6.0, 39.0], [6.1, 39.0], [6.2, 39.0], [6.3, 39.0], [6.4, 39.0], [6.5, 39.0], [6.6, 39.0], [6.7, 39.0], [6.8, 39.0], [6.9, 39.0], [7.0, 39.0], [7.1, 39.0], [7.2, 39.0], [7.3, 40.0], [7.4, 40.0], [7.5, 40.0], [7.6, 40.0], [7.7, 40.0], [7.8, 40.0], [7.9, 40.0], [8.0, 40.0], [8.1, 40.0], [8.2, 40.0], [8.3, 40.0], [8.4, 40.0], [8.5, 40.0], [8.6, 40.0], [8.7, 40.0], [8.8, 40.0], [8.9, 40.0], [9.0, 40.0], [9.1, 40.0], [9.2, 41.0], [9.3, 41.0], [9.4, 41.0], [9.5, 41.0], [9.6, 41.0], [9.7, 41.0], [9.8, 41.0], [9.9, 41.0], [10.0, 41.0], [10.1, 41.0], [10.2, 41.0], [10.3, 41.0], [10.4, 41.0], [10.5, 41.0], [10.6, 41.0], [10.7, 42.0], [10.8, 42.0], [10.9, 42.0], [11.0, 42.0], [11.1, 42.0], [11.2, 42.0], [11.3, 42.0], [11.4, 42.0], [11.5, 42.0], [11.6, 42.0], [11.7, 42.0], [11.8, 42.0], [11.9, 42.0], [12.0, 42.0], [12.1, 42.0], [12.2, 42.0], [12.3, 43.0], [12.4, 43.0], [12.5, 43.0], [12.6, 43.0], [12.7, 43.0], [12.8, 43.0], [12.9, 43.0], [13.0, 43.0], [13.1, 43.0], [13.2, 43.0], [13.3, 43.0], [13.4, 43.0], [13.5, 43.0], [13.6, 43.0], [13.7, 44.0], [13.8, 44.0], [13.9, 44.0], [14.0, 44.0], [14.1, 44.0], [14.2, 44.0], [14.3, 44.0], [14.4, 44.0], [14.5, 44.0], [14.6, 44.0], [14.7, 44.0], [14.8, 44.0], [14.9, 44.0], [15.0, 44.0], [15.1, 44.0], [15.2, 45.0], [15.3, 45.0], [15.4, 45.0], [15.5, 45.0], [15.6, 45.0], [15.7, 45.0], [15.8, 45.0], [15.9, 45.0], [16.0, 45.0], [16.1, 46.0], [16.2, 46.0], [16.3, 46.0], [16.4, 46.0], [16.5, 46.0], [16.6, 46.0], [16.7, 46.0], [16.8, 46.0], [16.9, 46.0], [17.0, 46.0], [17.1, 46.0], [17.2, 47.0], [17.3, 47.0], [17.4, 47.0], [17.5, 47.0], [17.6, 47.0], [17.7, 47.0], [17.8, 47.0], [17.9, 47.0], [18.0, 48.0], [18.1, 48.0], [18.2, 48.0], [18.3, 48.0], [18.4, 48.0], [18.5, 48.0], [18.6, 48.0], [18.7, 49.0], [18.8, 49.0], [18.9, 49.0], [19.0, 49.0], [19.1, 49.0], [19.2, 50.0], [19.3, 50.0], [19.4, 50.0], [19.5, 50.0], [19.6, 50.0], [19.7, 50.0], [19.8, 51.0], [19.9, 51.0], [20.0, 51.0], [20.1, 51.0], [20.2, 52.0], [20.3, 52.0], [20.4, 52.0], [20.5, 52.0], [20.6, 53.0], [20.7, 53.0], [20.8, 53.0], [20.9, 53.0], [21.0, 54.0], [21.1, 54.0], [21.2, 54.0], [21.3, 55.0], [21.4, 55.0], [21.5, 55.0], [21.6, 56.0], [21.7, 56.0], [21.8, 56.0], [21.9, 57.0], [22.0, 57.0], [22.1, 57.0], [22.2, 57.0], [22.3, 58.0], [22.4, 58.0], [22.5, 58.0], [22.6, 58.0], [22.7, 59.0], [22.8, 59.0], [22.9, 59.0], [23.0, 59.0], [23.1, 60.0], [23.2, 60.0], [23.3, 60.0], [23.4, 61.0], [23.5, 61.0], [23.6, 61.0], [23.7, 61.0], [23.8, 61.0], [23.9, 62.0], [24.0, 62.0], [24.1, 62.0], [24.2, 62.0], [24.3, 62.0], [24.4, 62.0], [24.5, 63.0], [24.6, 63.0], [24.7, 63.0], [24.8, 64.0], [24.9, 64.0], [25.0, 64.0], [25.1, 64.0], [25.2, 64.0], [25.3, 65.0], [25.4, 65.0], [25.5, 65.0], [25.6, 65.0], [25.7, 65.0], [25.8, 65.0], [25.9, 66.0], [26.0, 66.0], [26.1, 66.0], [26.2, 67.0], [26.3, 67.0], [26.4, 67.0], [26.5, 67.0], [26.6, 68.0], [26.7, 68.0], [26.8, 68.0], [26.9, 68.0], [27.0, 68.0], [27.1, 68.0], [27.2, 69.0], [27.3, 69.0], [27.4, 69.0], [27.5, 69.0], [27.6, 69.0], [27.7, 70.0], [27.8, 70.0], [27.9, 70.0], [28.0, 70.0], [28.1, 70.0], [28.2, 71.0], [28.3, 71.0], [28.4, 71.0], [28.5, 71.0], [28.6, 71.0], [28.7, 71.0], [28.8, 72.0], [28.9, 72.0], [29.0, 72.0], [29.1, 72.0], [29.2, 72.0], [29.3, 73.0], [29.4, 73.0], [29.5, 73.0], [29.6, 73.0], [29.7, 73.0], [29.8, 73.0], [29.9, 73.0], [30.0, 73.0], [30.1, 74.0], [30.2, 74.0], [30.3, 74.0], [30.4, 74.0], [30.5, 74.0], [30.6, 75.0], [30.7, 75.0], [30.8, 75.0], [30.9, 75.0], [31.0, 75.0], [31.1, 75.0], [31.2, 75.0], [31.3, 76.0], [31.4, 76.0], [31.5, 76.0], [31.6, 76.0], [31.7, 76.0], [31.8, 76.0], [31.9, 76.0], [32.0, 76.0], [32.1, 76.0], [32.2, 77.0], [32.3, 77.0], [32.4, 77.0], [32.5, 77.0], [32.6, 77.0], [32.7, 77.0], [32.8, 77.0], [32.9, 77.0], [33.0, 78.0], [33.1, 78.0], [33.2, 78.0], [33.3, 78.0], [33.4, 78.0], [33.5, 78.0], [33.6, 78.0], [33.7, 78.0], [33.8, 79.0], [33.9, 79.0], [34.0, 79.0], [34.1, 79.0], [34.2, 79.0], [34.3, 79.0], [34.4, 79.0], [34.5, 80.0], [34.6, 80.0], [34.7, 80.0], [34.8, 80.0], [34.9, 80.0], [35.0, 80.0], [35.1, 80.0], [35.2, 81.0], [35.3, 81.0], [35.4, 81.0], [35.5, 81.0], [35.6, 81.0], [35.7, 81.0], [35.8, 81.0], [35.9, 82.0], [36.0, 82.0], [36.1, 82.0], [36.2, 82.0], [36.3, 82.0], [36.4, 83.0], [36.5, 83.0], [36.6, 83.0], [36.7, 83.0], [36.8, 83.0], [36.9, 84.0], [37.0, 84.0], [37.1, 84.0], [37.2, 84.0], [37.3, 84.0], [37.4, 84.0], [37.5, 84.0], [37.6, 85.0], [37.7, 85.0], [37.8, 85.0], [37.9, 85.0], [38.0, 85.0], [38.1, 86.0], [38.2, 86.0], [38.3, 86.0], [38.4, 86.0], [38.5, 87.0], [38.6, 87.0], [38.7, 87.0], [38.8, 88.0], [38.9, 88.0], [39.0, 88.0], [39.1, 88.0], [39.2, 89.0], [39.3, 89.0], [39.4, 89.0], [39.5, 89.0], [39.6, 90.0], [39.7, 90.0], [39.8, 91.0], [39.9, 91.0], [40.0, 92.0], [40.1, 92.0], [40.2, 92.0], [40.3, 93.0], [40.4, 93.0], [40.5, 94.0], [40.6, 94.0], [40.7, 95.0], [40.8, 95.0], [40.9, 95.0], [41.0, 96.0], [41.1, 96.0], [41.2, 96.0], [41.3, 97.0], [41.4, 98.0], [41.5, 98.0], [41.6, 99.0], [41.7, 100.0], [41.8, 102.0], [41.9, 102.0], [42.0, 102.0], [42.1, 103.0], [42.2, 104.0], [42.3, 105.0], [42.4, 106.0], [42.5, 106.0], [42.6, 107.0], [42.7, 107.0], [42.8, 108.0], [42.9, 108.0], [43.0, 109.0], [43.1, 109.0], [43.2, 111.0], [43.3, 111.0], [43.4, 112.0], [43.5, 113.0], [43.6, 114.0], [43.7, 115.0], [43.8, 116.0], [43.9, 117.0], [44.0, 117.0], [44.1, 118.0], [44.2, 118.0], [44.3, 119.0], [44.4, 120.0], [44.5, 120.0], [44.6, 121.0], [44.7, 122.0], [44.8, 123.0], [44.9, 124.0], [45.0, 125.0], [45.1, 125.0], [45.2, 126.0], [45.3, 126.0], [45.4, 127.0], [45.5, 127.0], [45.6, 128.0], [45.7, 128.0], [45.8, 129.0], [45.9, 130.0], [46.0, 130.0], [46.1, 131.0], [46.2, 132.0], [46.3, 134.0], [46.4, 134.0], [46.5, 135.0], [46.6, 136.0], [46.7, 137.0], [46.8, 138.0], [46.9, 138.0], [47.0, 139.0], [47.1, 140.0], [47.2, 141.0], [47.3, 142.0], [47.4, 143.0], [47.5, 144.0], [47.6, 145.0], [47.7, 145.0], [47.8, 147.0], [47.9, 147.0], [48.0, 148.0], [48.1, 149.0], [48.2, 151.0], [48.3, 153.0], [48.4, 154.0], [48.5, 155.0], [48.6, 157.0], [48.7, 158.0], [48.8, 159.0], [48.9, 160.0], [49.0, 161.0], [49.1, 162.0], [49.2, 162.0], [49.3, 163.0], [49.4, 163.0], [49.5, 165.0], [49.6, 166.0], [49.7, 167.0], [49.8, 167.0], [49.9, 168.0], [50.0, 168.0], [50.1, 169.0], [50.2, 170.0], [50.3, 170.0], [50.4, 171.0], [50.5, 173.0], [50.6, 173.0], [50.7, 175.0], [50.8, 176.0], [50.9, 176.0], [51.0, 177.0], [51.1, 178.0], [51.2, 178.0], [51.3, 179.0], [51.4, 180.0], [51.5, 181.0], [51.6, 182.0], [51.7, 183.0], [51.8, 183.0], [51.9, 184.0], [52.0, 184.0], [52.1, 185.0], [52.2, 185.0], [52.3, 187.0], [52.4, 187.0], [52.5, 188.0], [52.6, 188.0], [52.7, 189.0], [52.8, 190.0], [52.9, 190.0], [53.0, 191.0], [53.1, 192.0], [53.2, 193.0], [53.3, 193.0], [53.4, 194.0], [53.5, 195.0], [53.6, 196.0], [53.7, 196.0], [53.8, 197.0], [53.9, 198.0], [54.0, 198.0], [54.1, 199.0], [54.2, 200.0], [54.3, 200.0], [54.4, 201.0], [54.5, 201.0], [54.6, 202.0], [54.7, 202.0], [54.8, 203.0], [54.9, 204.0], [55.0, 205.0], [55.1, 206.0], [55.2, 207.0], [55.3, 208.0], [55.4, 208.0], [55.5, 209.0], [55.6, 209.0], [55.7, 210.0], [55.8, 211.0], [55.9, 211.0], [56.0, 212.0], [56.1, 212.0], [56.2, 213.0], [56.3, 214.0], [56.4, 214.0], [56.5, 215.0], [56.6, 216.0], [56.7, 216.0], [56.8, 217.0], [56.9, 218.0], [57.0, 219.0], [57.1, 220.0], [57.2, 220.0], [57.3, 221.0], [57.4, 222.0], [57.5, 223.0], [57.6, 224.0], [57.7, 225.0], [57.8, 227.0], [57.9, 228.0], [58.0, 229.0], [58.1, 230.0], [58.2, 231.0], [58.3, 232.0], [58.4, 232.0], [58.5, 233.0], [58.6, 233.0], [58.7, 233.0], [58.8, 235.0], [58.9, 236.0], [59.0, 237.0], [59.1, 238.0], [59.2, 239.0], [59.3, 239.0], [59.4, 240.0], [59.5, 241.0], [59.6, 242.0], [59.7, 243.0], [59.8, 244.0], [59.9, 244.0], [60.0, 245.0], [60.1, 246.0], [60.2, 247.0], [60.3, 247.0], [60.4, 249.0], [60.5, 250.0], [60.6, 251.0], [60.7, 254.0], [60.8, 255.0], [60.9, 255.0], [61.0, 256.0], [61.1, 257.0], [61.2, 257.0], [61.3, 258.0], [61.4, 259.0], [61.5, 259.0], [61.6, 260.0], [61.7, 261.0], [61.8, 261.0], [61.9, 263.0], [62.0, 264.0], [62.1, 265.0], [62.2, 267.0], [62.3, 268.0], [62.4, 270.0], [62.5, 270.0], [62.6, 271.0], [62.7, 272.0], [62.8, 273.0], [62.9, 274.0], [63.0, 275.0], [63.1, 276.0], [63.2, 278.0], [63.3, 279.0], [63.4, 281.0], [63.5, 282.0], [63.6, 283.0], [63.7, 284.0], [63.8, 286.0], [63.9, 287.0], [64.0, 288.0], [64.1, 290.0], [64.2, 292.0], [64.3, 293.0], [64.4, 293.0], [64.5, 295.0], [64.6, 298.0], [64.7, 299.0], [64.8, 300.0], [64.9, 301.0], [65.0, 301.0], [65.1, 303.0], [65.2, 303.0], [65.3, 304.0], [65.4, 305.0], [65.5, 307.0], [65.6, 308.0], [65.7, 310.0], [65.8, 311.0], [65.9, 313.0], [66.0, 315.0], [66.1, 317.0], [66.2, 318.0], [66.3, 320.0], [66.4, 321.0], [66.5, 323.0], [66.6, 324.0], [66.7, 327.0], [66.8, 329.0], [66.9, 330.0], [67.0, 331.0], [67.1, 332.0], [67.2, 333.0], [67.3, 335.0], [67.4, 337.0], [67.5, 339.0], [67.6, 341.0], [67.7, 342.0], [67.8, 343.0], [67.9, 344.0], [68.0, 346.0], [68.1, 348.0], [68.2, 350.0], [68.3, 352.0], [68.4, 354.0], [68.5, 355.0], [68.6, 356.0], [68.7, 359.0], [68.8, 360.0], [68.9, 361.0], [69.0, 362.0], [69.1, 363.0], [69.2, 363.0], [69.3, 364.0], [69.4, 366.0], [69.5, 368.0], [69.6, 369.0], [69.7, 370.0], [69.8, 371.0], [69.9, 373.0], [70.0, 375.0], [70.1, 377.0], [70.2, 378.0], [70.3, 380.0], [70.4, 381.0], [70.5, 383.0], [70.6, 384.0], [70.7, 385.0], [70.8, 386.0], [70.9, 387.0], [71.0, 388.0], [71.1, 389.0], [71.2, 390.0], [71.3, 392.0], [71.4, 394.0], [71.5, 395.0], [71.6, 395.0], [71.7, 397.0], [71.8, 398.0], [71.9, 400.0], [72.0, 402.0], [72.1, 403.0], [72.2, 406.0], [72.3, 407.0], [72.4, 408.0], [72.5, 410.0], [72.6, 412.0], [72.7, 414.0], [72.8, 416.0], [72.9, 417.0], [73.0, 418.0], [73.1, 421.0], [73.2, 422.0], [73.3, 424.0], [73.4, 425.0], [73.5, 425.0], [73.6, 428.0], [73.7, 430.0], [73.8, 431.0], [73.9, 434.0], [74.0, 435.0], [74.1, 437.0], [74.2, 438.0], [74.3, 439.0], [74.4, 441.0], [74.5, 442.0], [74.6, 443.0], [74.7, 444.0], [74.8, 445.0], [74.9, 447.0], [75.0, 448.0], [75.1, 450.0], [75.2, 451.0], [75.3, 451.0], [75.4, 453.0], [75.5, 455.0], [75.6, 458.0], [75.7, 460.0], [75.8, 461.0], [75.9, 462.0], [76.0, 463.0], [76.1, 464.0], [76.2, 465.0], [76.3, 467.0], [76.4, 468.0], [76.5, 468.0], [76.6, 470.0], [76.7, 471.0], [76.8, 472.0], [76.9, 472.0], [77.0, 474.0], [77.1, 476.0], [77.2, 477.0], [77.3, 479.0], [77.4, 481.0], [77.5, 483.0], [77.6, 484.0], [77.7, 487.0], [77.8, 489.0], [77.9, 491.0], [78.0, 492.0], [78.1, 494.0], [78.2, 495.0], [78.3, 498.0], [78.4, 499.0], [78.5, 501.0], [78.6, 504.0], [78.7, 507.0], [78.8, 508.0], [78.9, 511.0], [79.0, 512.0], [79.1, 513.0], [79.2, 515.0], [79.3, 515.0], [79.4, 519.0], [79.5, 520.0], [79.6, 523.0], [79.7, 525.0], [79.8, 527.0], [79.9, 529.0], [80.0, 530.0], [80.1, 533.0], [80.2, 534.0], [80.3, 539.0], [80.4, 541.0], [80.5, 543.0], [80.6, 545.0], [80.7, 547.0], [80.8, 549.0], [80.9, 551.0], [81.0, 555.0], [81.1, 556.0], [81.2, 558.0], [81.3, 559.0], [81.4, 563.0], [81.5, 565.0], [81.6, 567.0], [81.7, 570.0], [81.8, 571.0], [81.9, 573.0], [82.0, 577.0], [82.1, 579.0], [82.2, 580.0], [82.3, 581.0], [82.4, 583.0], [82.5, 585.0], [82.6, 587.0], [82.7, 589.0], [82.8, 590.0], [82.9, 592.0], [83.0, 596.0], [83.1, 597.0], [83.2, 599.0], [83.3, 601.0], [83.4, 602.0], [83.5, 605.0], [83.6, 607.0], [83.7, 608.0], [83.8, 612.0], [83.9, 614.0], [84.0, 616.0], [84.1, 618.0], [84.2, 621.0], [84.3, 622.0], [84.4, 625.0], [84.5, 628.0], [84.6, 630.0], [84.7, 634.0], [84.8, 637.0], [84.9, 640.0], [85.0, 642.0], [85.1, 643.0], [85.2, 648.0], [85.3, 651.0], [85.4, 652.0], [85.5, 655.0], [85.6, 657.0], [85.7, 660.0], [85.8, 662.0], [85.9, 665.0], [86.0, 666.0], [86.1, 667.0], [86.2, 668.0], [86.3, 672.0], [86.4, 675.0], [86.5, 678.0], [86.6, 680.0], [86.7, 682.0], [86.8, 685.0], [86.9, 687.0], [87.0, 689.0], [87.1, 695.0], [87.2, 698.0], [87.3, 701.0], [87.4, 706.0], [87.5, 709.0], [87.6, 712.0], [87.7, 714.0], [87.8, 716.0], [87.9, 718.0], [88.0, 721.0], [88.1, 725.0], [88.2, 727.0], [88.3, 729.0], [88.4, 730.0], [88.5, 733.0], [88.6, 736.0], [88.7, 738.0], [88.8, 741.0], [88.9, 743.0], [89.0, 747.0], [89.1, 749.0], [89.2, 750.0], [89.3, 753.0], [89.4, 755.0], [89.5, 762.0], [89.6, 766.0], [89.7, 771.0], [89.8, 774.0], [89.9, 777.0], [90.0, 779.0], [90.1, 784.0], [90.2, 786.0], [90.3, 790.0], [90.4, 795.0], [90.5, 800.0], [90.6, 802.0], [90.7, 804.0], [90.8, 809.0], [90.9, 817.0], [91.0, 821.0], [91.1, 826.0], [91.2, 829.0], [91.3, 832.0], [91.4, 834.0], [91.5, 839.0], [91.6, 840.0], [91.7, 843.0], [91.8, 847.0], [91.9, 849.0], [92.0, 853.0], [92.1, 854.0], [92.2, 858.0], [92.3, 860.0], [92.4, 866.0], [92.5, 869.0], [92.6, 875.0], [92.7, 881.0], [92.8, 889.0], [92.9, 894.0], [93.0, 897.0], [93.1, 905.0], [93.2, 908.0], [93.3, 916.0], [93.4, 918.0], [93.5, 926.0], [93.6, 933.0], [93.7, 939.0], [93.8, 941.0], [93.9, 944.0], [94.0, 947.0], [94.1, 952.0], [94.2, 960.0], [94.3, 969.0], [94.4, 972.0], [94.5, 979.0], [94.6, 987.0], [94.7, 990.0], [94.8, 993.0], [94.9, 1009.0], [95.0, 1016.0], [95.1, 1020.0], [95.2, 1025.0], [95.3, 1030.0], [95.4, 1041.0], [95.5, 1047.0], [95.6, 1054.0], [95.7, 1058.0], [95.8, 1066.0], [95.9, 1071.0], [96.0, 1076.0], [96.1, 1080.0], [96.2, 1097.0], [96.3, 1103.0], [96.4, 1112.0], [96.5, 1127.0], [96.6, 1134.0], [96.7, 1148.0], [96.8, 1156.0], [96.9, 1166.0], [97.0, 1180.0], [97.1, 1213.0], [97.2, 1245.0], [97.3, 1260.0], [97.4, 1271.0], [97.5, 1288.0], [97.6, 1295.0], [97.7, 1311.0], [97.8, 1326.0], [97.9, 1341.0], [98.0, 1375.0], [98.1, 1403.0], [98.2, 1442.0], [98.3, 1472.0], [98.4, 1504.0], [98.5, 1521.0], [98.6, 1560.0], [98.7, 1572.0], [98.8, 1590.0], [98.9, 1632.0], [99.0, 1674.0], [99.1, 1738.0], [99.2, 1776.0], [99.3, 1842.0], [99.4, 1932.0], [99.5, 2000.0], [99.6, 2096.0], [99.7, 2209.0], [99.8, 2306.0], [99.9, 2595.0], [100.0, 3138.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 2189.0, "series": [{"data": [[0.0, 2189.0], [600.0, 210.0], [700.0, 171.0], [800.0, 134.0], [900.0, 94.0], [1000.0, 77.0], [1100.0, 41.0], [1200.0, 30.0], [1300.0, 23.0], [1400.0, 16.0], [1500.0, 23.0], [100.0, 660.0], [1600.0, 10.0], [1700.0, 11.0], [1800.0, 8.0], [1900.0, 6.0], [2000.0, 6.0], [2100.0, 5.0], [2300.0, 3.0], [2200.0, 5.0], [2400.0, 2.0], [2500.0, 1.0], [2600.0, 2.0], [3000.0, 2.0], [3100.0, 1.0], [200.0, 560.0], [300.0, 373.0], [400.0, 346.0], [500.0, 253.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3100.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 85.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 4130.0, "series": [{"data": [[0.0, 4130.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1047.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 85.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.35135135135135, "minX": 1.60280106E12, "maxY": 10.0, "series": [{"data": [[1.60280112E12, 10.0], [1.60280118E12, 10.0], [1.60280106E12, 9.35135135135135], [1.60280124E12, 9.961904761904762]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60280124E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 297.0, "minX": 1.0, "maxY": 3138.0, "series": [{"data": [[4.0, 1108.5], [8.0, 1295.5], [2.0, 2269.0], [1.0, 3082.0], [9.0, 297.0], [5.0, 441.3333333333333], [10.0, 308.0547083492184], [6.0, 1058.0], [3.0, 3138.0], [7.0, 737.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.987077156974525, 310.5471303686815]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 294.15, "minX": 1.60280106E12, "maxY": 1684236.4666666666, "series": [{"data": [[1.60280112E12, 1684236.4666666666], [1.60280118E12, 1279936.0666666667], [1.60280106E12, 19793.383333333335], [1.60280124E12, 1266967.8666666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60280112E12, 14821.383333333333], [1.60280118E12, 20156.8], [1.60280106E12, 294.15], [1.60280124E12, 10218.616666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60280124E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 252.50906790383797, "minX": 1.60280106E12, "maxY": 367.12640692640684, "series": [{"data": [[1.60280112E12, 352.70276633313705], [1.60280118E12, 252.50906790383797], [1.60280106E12, 327.75675675675666], [1.60280124E12, 367.12640692640684]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60280124E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 252.21720792914377, "minX": 1.60280106E12, "maxY": 366.62683982684, "series": [{"data": [[1.60280112E12, 352.19482048263626], [1.60280118E12, 252.21720792914377], [1.60280106E12, 327.00000000000006], [1.60280124E12, 366.62683982684]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60280124E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.007062978222483808, "minX": 1.60280106E12, "maxY": 2.648648648648647, "series": [{"data": [[1.60280112E12, 0.007062978222483808], [1.60280118E12, 0.010122311261071298], [1.60280106E12, 2.648648648648647], [1.60280124E12, 0.012121212121212106]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60280124E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 29.0, "minX": 1.60280106E12, "maxY": 3138.0, "series": [{"data": [[1.60280112E12, 2671.0], [1.60280118E12, 2262.0], [1.60280106E12, 986.0], [1.60280124E12, 3138.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60280112E12, 33.0], [1.60280118E12, 34.0], [1.60280106E12, 39.0], [1.60280124E12, 32.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60280112E12, 33.0], [1.60280118E12, 34.48280022621155], [1.60280106E12, 39.0], [1.60280124E12, 32.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60280112E12, 33.0], [1.60280118E12, 34.0], [1.60280106E12, 39.0], [1.60280124E12, 32.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60280112E12, 29.0], [1.60280118E12, 30.0], [1.60280106E12, 39.0], [1.60280124E12, 30.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60280112E12, 233.0], [1.60280118E12, 125.0], [1.60280106E12, 224.0], [1.60280124E12, 199.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60280124E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 50.0, "minX": 1.0, "maxY": 3082.0, "series": [{"data": [[4.0, 1151.5], [5.0, 2070.0], [6.0, 1713.5], [7.0, 706.5], [8.0, 985.5], [9.0, 832.0], [10.0, 137.0], [11.0, 696.0], [12.0, 668.5], [13.0, 677.0], [14.0, 564.0], [15.0, 736.0], [16.0, 605.5], [17.0, 483.0], [18.0, 521.0], [19.0, 463.0], [20.0, 440.5], [21.0, 387.0], [22.0, 328.0], [23.0, 413.5], [24.0, 207.0], [25.0, 308.5], [26.0, 337.0], [27.0, 330.0], [28.0, 278.5], [29.0, 288.0], [30.0, 267.5], [31.0, 200.0], [32.0, 186.5], [33.0, 79.0], [35.0, 219.0], [34.0, 260.5], [36.0, 177.5], [39.0, 136.0], [38.0, 79.5], [40.0, 82.0], [41.0, 173.0], [42.0, 90.0], [44.0, 71.0], [45.0, 189.0], [46.0, 88.5], [47.0, 166.0], [48.0, 83.5], [49.0, 122.0], [51.0, 112.0], [52.0, 94.0], [53.0, 72.0], [54.0, 144.5], [55.0, 78.0], [57.0, 130.5], [59.0, 90.5], [61.0, 88.0], [60.0, 103.0], [62.0, 109.5], [64.0, 87.0], [69.0, 83.5], [68.0, 57.0], [71.0, 134.0], [73.0, 67.0], [75.0, 80.0], [72.0, 113.5], [77.0, 110.0], [76.0, 86.5], [82.0, 50.0], [87.0, 71.0], [1.0, 3082.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 87.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 50.0, "minX": 1.0, "maxY": 3082.0, "series": [{"data": [[4.0, 1151.0], [5.0, 2070.0], [6.0, 1712.0], [7.0, 705.0], [8.0, 985.5], [9.0, 832.0], [10.0, 135.0], [11.0, 694.0], [12.0, 668.5], [13.0, 676.0], [14.0, 563.0], [15.0, 730.0], [16.0, 604.5], [17.0, 481.0], [18.0, 520.5], [19.0, 463.0], [20.0, 440.5], [21.0, 384.0], [22.0, 327.0], [23.0, 413.0], [24.0, 207.0], [25.0, 308.0], [26.0, 337.0], [27.0, 330.0], [28.0, 278.5], [29.0, 287.0], [30.0, 266.5], [31.0, 200.0], [32.0, 186.5], [33.0, 79.0], [35.0, 218.0], [34.0, 260.5], [36.0, 177.5], [39.0, 136.0], [38.0, 79.5], [40.0, 82.0], [41.0, 173.0], [42.0, 90.0], [44.0, 71.0], [45.0, 189.0], [46.0, 87.5], [47.0, 166.0], [48.0, 83.5], [49.0, 122.0], [51.0, 111.0], [52.0, 94.0], [53.0, 72.0], [54.0, 144.5], [55.0, 78.0], [57.0, 130.5], [59.0, 90.5], [61.0, 88.0], [60.0, 103.0], [62.0, 109.0], [64.0, 87.0], [69.0, 83.5], [68.0, 57.0], [71.0, 133.0], [73.0, 67.0], [75.0, 80.0], [72.0, 113.0], [77.0, 110.0], [76.0, 86.5], [82.0, 50.0], [87.0, 71.0], [1.0, 3082.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 87.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.7833333333333333, "minX": 1.60280106E12, "maxY": 39.5, "series": [{"data": [[1.60280112E12, 28.316666666666666], [1.60280118E12, 39.5], [1.60280106E12, 0.7833333333333333], [1.60280124E12, 19.1]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60280124E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.6166666666666667, "minX": 1.60280106E12, "maxY": 39.516666666666666, "series": [{"data": [[1.60280112E12, 28.316666666666666], [1.60280118E12, 39.516666666666666], [1.60280106E12, 0.6166666666666667], [1.60280124E12, 19.25]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60280124E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.6166666666666667, "minX": 1.60280106E12, "maxY": 39.516666666666666, "series": [{"data": [[1.60280112E12, 28.316666666666666], [1.60280118E12, 39.516666666666666], [1.60280106E12, 0.6166666666666667], [1.60280124E12, 19.25]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60280124E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.6166666666666667, "minX": 1.60280106E12, "maxY": 39.516666666666666, "series": [{"data": [[1.60280112E12, 28.316666666666666], [1.60280118E12, 39.516666666666666], [1.60280106E12, 0.6166666666666667], [1.60280124E12, 19.25]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60280124E12, "title": "Total Transactions Per Second"}},
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

