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
        data: {"result": {"minY": 28.0, "minX": 0.0, "maxY": 2445.0, "series": [{"data": [[0.0, 28.0], [0.1, 29.0], [0.2, 30.0], [0.3, 31.0], [0.4, 31.0], [0.5, 31.0], [0.6, 31.0], [0.7, 32.0], [0.8, 32.0], [0.9, 33.0], [1.0, 33.0], [1.1, 33.0], [1.2, 33.0], [1.3, 34.0], [1.4, 34.0], [1.5, 34.0], [1.6, 34.0], [1.7, 34.0], [1.8, 34.0], [1.9, 34.0], [2.0, 35.0], [2.1, 35.0], [2.2, 35.0], [2.3, 35.0], [2.4, 35.0], [2.5, 35.0], [2.6, 35.0], [2.7, 35.0], [2.8, 35.0], [2.9, 35.0], [3.0, 35.0], [3.1, 35.0], [3.2, 35.0], [3.3, 35.0], [3.4, 36.0], [3.5, 36.0], [3.6, 36.0], [3.7, 36.0], [3.8, 36.0], [3.9, 36.0], [4.0, 36.0], [4.1, 36.0], [4.2, 36.0], [4.3, 36.0], [4.4, 36.0], [4.5, 36.0], [4.6, 36.0], [4.7, 36.0], [4.8, 36.0], [4.9, 36.0], [5.0, 36.0], [5.1, 36.0], [5.2, 37.0], [5.3, 37.0], [5.4, 37.0], [5.5, 37.0], [5.6, 37.0], [5.7, 37.0], [5.8, 37.0], [5.9, 37.0], [6.0, 37.0], [6.1, 37.0], [6.2, 37.0], [6.3, 37.0], [6.4, 37.0], [6.5, 37.0], [6.6, 37.0], [6.7, 38.0], [6.8, 38.0], [6.9, 38.0], [7.0, 38.0], [7.1, 38.0], [7.2, 38.0], [7.3, 38.0], [7.4, 38.0], [7.5, 38.0], [7.6, 38.0], [7.7, 38.0], [7.8, 38.0], [7.9, 38.0], [8.0, 38.0], [8.1, 39.0], [8.2, 39.0], [8.3, 39.0], [8.4, 39.0], [8.5, 39.0], [8.6, 39.0], [8.7, 39.0], [8.8, 39.0], [8.9, 39.0], [9.0, 39.0], [9.1, 39.0], [9.2, 39.0], [9.3, 39.0], [9.4, 39.0], [9.5, 40.0], [9.6, 40.0], [9.7, 40.0], [9.8, 40.0], [9.9, 40.0], [10.0, 40.0], [10.1, 40.0], [10.2, 40.0], [10.3, 40.0], [10.4, 40.0], [10.5, 40.0], [10.6, 41.0], [10.7, 41.0], [10.8, 41.0], [10.9, 41.0], [11.0, 41.0], [11.1, 41.0], [11.2, 41.0], [11.3, 41.0], [11.4, 41.0], [11.5, 42.0], [11.6, 42.0], [11.7, 42.0], [11.8, 42.0], [11.9, 42.0], [12.0, 42.0], [12.1, 42.0], [12.2, 43.0], [12.3, 43.0], [12.4, 43.0], [12.5, 43.0], [12.6, 43.0], [12.7, 43.0], [12.8, 43.0], [12.9, 44.0], [13.0, 44.0], [13.1, 44.0], [13.2, 44.0], [13.3, 44.0], [13.4, 44.0], [13.5, 44.0], [13.6, 45.0], [13.7, 45.0], [13.8, 45.0], [13.9, 45.0], [14.0, 45.0], [14.1, 45.0], [14.2, 46.0], [14.3, 46.0], [14.4, 46.0], [14.5, 46.0], [14.6, 47.0], [14.7, 47.0], [14.8, 47.0], [14.9, 48.0], [15.0, 48.0], [15.1, 48.0], [15.2, 48.0], [15.3, 48.0], [15.4, 49.0], [15.5, 49.0], [15.6, 49.0], [15.7, 49.0], [15.8, 50.0], [15.9, 50.0], [16.0, 50.0], [16.1, 51.0], [16.2, 51.0], [16.3, 51.0], [16.4, 51.0], [16.5, 51.0], [16.6, 52.0], [16.7, 52.0], [16.8, 53.0], [16.9, 53.0], [17.0, 53.0], [17.1, 53.0], [17.2, 54.0], [17.3, 54.0], [17.4, 54.0], [17.5, 55.0], [17.6, 55.0], [17.7, 55.0], [17.8, 56.0], [17.9, 56.0], [18.0, 56.0], [18.1, 57.0], [18.2, 57.0], [18.3, 57.0], [18.4, 57.0], [18.5, 58.0], [18.6, 58.0], [18.7, 58.0], [18.8, 58.0], [18.9, 58.0], [19.0, 59.0], [19.1, 59.0], [19.2, 59.0], [19.3, 59.0], [19.4, 59.0], [19.5, 60.0], [19.6, 60.0], [19.7, 60.0], [19.8, 60.0], [19.9, 60.0], [20.0, 60.0], [20.1, 60.0], [20.2, 61.0], [20.3, 61.0], [20.4, 61.0], [20.5, 61.0], [20.6, 62.0], [20.7, 62.0], [20.8, 62.0], [20.9, 62.0], [21.0, 63.0], [21.1, 63.0], [21.2, 63.0], [21.3, 63.0], [21.4, 63.0], [21.5, 64.0], [21.6, 64.0], [21.7, 64.0], [21.8, 64.0], [21.9, 64.0], [22.0, 65.0], [22.1, 65.0], [22.2, 65.0], [22.3, 65.0], [22.4, 66.0], [22.5, 66.0], [22.6, 66.0], [22.7, 66.0], [22.8, 66.0], [22.9, 66.0], [23.0, 67.0], [23.1, 67.0], [23.2, 67.0], [23.3, 67.0], [23.4, 67.0], [23.5, 68.0], [23.6, 68.0], [23.7, 68.0], [23.8, 68.0], [23.9, 68.0], [24.0, 68.0], [24.1, 69.0], [24.2, 69.0], [24.3, 69.0], [24.4, 69.0], [24.5, 69.0], [24.6, 69.0], [24.7, 69.0], [24.8, 69.0], [24.9, 69.0], [25.0, 70.0], [25.1, 70.0], [25.2, 70.0], [25.3, 70.0], [25.4, 70.0], [25.5, 70.0], [25.6, 70.0], [25.7, 70.0], [25.8, 71.0], [25.9, 71.0], [26.0, 71.0], [26.1, 71.0], [26.2, 71.0], [26.3, 71.0], [26.4, 71.0], [26.5, 71.0], [26.6, 71.0], [26.7, 71.0], [26.8, 71.0], [26.9, 71.0], [27.0, 71.0], [27.1, 72.0], [27.2, 72.0], [27.3, 72.0], [27.4, 72.0], [27.5, 72.0], [27.6, 72.0], [27.7, 72.0], [27.8, 72.0], [27.9, 72.0], [28.0, 73.0], [28.1, 73.0], [28.2, 73.0], [28.3, 73.0], [28.4, 73.0], [28.5, 73.0], [28.6, 73.0], [28.7, 73.0], [28.8, 73.0], [28.9, 73.0], [29.0, 73.0], [29.1, 74.0], [29.2, 74.0], [29.3, 74.0], [29.4, 74.0], [29.5, 74.0], [29.6, 74.0], [29.7, 74.0], [29.8, 74.0], [29.9, 74.0], [30.0, 74.0], [30.1, 75.0], [30.2, 75.0], [30.3, 75.0], [30.4, 75.0], [30.5, 75.0], [30.6, 75.0], [30.7, 75.0], [30.8, 76.0], [30.9, 76.0], [31.0, 76.0], [31.1, 76.0], [31.2, 76.0], [31.3, 76.0], [31.4, 77.0], [31.5, 77.0], [31.6, 77.0], [31.7, 77.0], [31.8, 77.0], [31.9, 77.0], [32.0, 77.0], [32.1, 77.0], [32.2, 77.0], [32.3, 77.0], [32.4, 77.0], [32.5, 78.0], [32.6, 78.0], [32.7, 78.0], [32.8, 78.0], [32.9, 78.0], [33.0, 78.0], [33.1, 78.0], [33.2, 78.0], [33.3, 79.0], [33.4, 79.0], [33.5, 79.0], [33.6, 79.0], [33.7, 79.0], [33.8, 79.0], [33.9, 79.0], [34.0, 80.0], [34.1, 80.0], [34.2, 80.0], [34.3, 80.0], [34.4, 80.0], [34.5, 81.0], [34.6, 81.0], [34.7, 81.0], [34.8, 81.0], [34.9, 81.0], [35.0, 82.0], [35.1, 82.0], [35.2, 82.0], [35.3, 82.0], [35.4, 82.0], [35.5, 82.0], [35.6, 83.0], [35.7, 83.0], [35.8, 83.0], [35.9, 83.0], [36.0, 83.0], [36.1, 84.0], [36.2, 84.0], [36.3, 84.0], [36.4, 84.0], [36.5, 85.0], [36.6, 85.0], [36.7, 85.0], [36.8, 85.0], [36.9, 86.0], [37.0, 86.0], [37.1, 87.0], [37.2, 87.0], [37.3, 87.0], [37.4, 88.0], [37.5, 88.0], [37.6, 88.0], [37.7, 89.0], [37.8, 89.0], [37.9, 89.0], [38.0, 90.0], [38.1, 90.0], [38.2, 91.0], [38.3, 91.0], [38.4, 92.0], [38.5, 92.0], [38.6, 92.0], [38.7, 93.0], [38.8, 93.0], [38.9, 94.0], [39.0, 95.0], [39.1, 95.0], [39.2, 95.0], [39.3, 96.0], [39.4, 96.0], [39.5, 96.0], [39.6, 97.0], [39.7, 98.0], [39.8, 98.0], [39.9, 99.0], [40.0, 99.0], [40.1, 100.0], [40.2, 101.0], [40.3, 102.0], [40.4, 102.0], [40.5, 103.0], [40.6, 103.0], [40.7, 103.0], [40.8, 104.0], [40.9, 105.0], [41.0, 105.0], [41.1, 106.0], [41.2, 107.0], [41.3, 107.0], [41.4, 107.0], [41.5, 108.0], [41.6, 108.0], [41.7, 109.0], [41.8, 109.0], [41.9, 109.0], [42.0, 110.0], [42.1, 110.0], [42.2, 110.0], [42.3, 111.0], [42.4, 111.0], [42.5, 112.0], [42.6, 113.0], [42.7, 113.0], [42.8, 114.0], [42.9, 114.0], [43.0, 115.0], [43.1, 115.0], [43.2, 116.0], [43.3, 116.0], [43.4, 116.0], [43.5, 117.0], [43.6, 117.0], [43.7, 118.0], [43.8, 119.0], [43.9, 119.0], [44.0, 120.0], [44.1, 121.0], [44.2, 121.0], [44.3, 122.0], [44.4, 122.0], [44.5, 123.0], [44.6, 123.0], [44.7, 124.0], [44.8, 124.0], [44.9, 125.0], [45.0, 125.0], [45.1, 126.0], [45.2, 127.0], [45.3, 127.0], [45.4, 128.0], [45.5, 129.0], [45.6, 129.0], [45.7, 130.0], [45.8, 131.0], [45.9, 131.0], [46.0, 131.0], [46.1, 132.0], [46.2, 132.0], [46.3, 133.0], [46.4, 134.0], [46.5, 135.0], [46.6, 135.0], [46.7, 136.0], [46.8, 137.0], [46.9, 137.0], [47.0, 138.0], [47.1, 138.0], [47.2, 139.0], [47.3, 140.0], [47.4, 141.0], [47.5, 143.0], [47.6, 143.0], [47.7, 145.0], [47.8, 146.0], [47.9, 147.0], [48.0, 147.0], [48.1, 148.0], [48.2, 149.0], [48.3, 149.0], [48.4, 151.0], [48.5, 152.0], [48.6, 153.0], [48.7, 154.0], [48.8, 155.0], [48.9, 155.0], [49.0, 157.0], [49.1, 157.0], [49.2, 158.0], [49.3, 159.0], [49.4, 160.0], [49.5, 162.0], [49.6, 163.0], [49.7, 164.0], [49.8, 165.0], [49.9, 165.0], [50.0, 168.0], [50.1, 169.0], [50.2, 171.0], [50.3, 172.0], [50.4, 173.0], [50.5, 176.0], [50.6, 178.0], [50.7, 179.0], [50.8, 180.0], [50.9, 181.0], [51.0, 182.0], [51.1, 183.0], [51.2, 184.0], [51.3, 184.0], [51.4, 184.0], [51.5, 186.0], [51.6, 187.0], [51.7, 189.0], [51.8, 190.0], [51.9, 191.0], [52.0, 192.0], [52.1, 194.0], [52.2, 195.0], [52.3, 196.0], [52.4, 196.0], [52.5, 197.0], [52.6, 198.0], [52.7, 199.0], [52.8, 199.0], [52.9, 200.0], [53.0, 201.0], [53.1, 202.0], [53.2, 203.0], [53.3, 205.0], [53.4, 205.0], [53.5, 206.0], [53.6, 208.0], [53.7, 208.0], [53.8, 209.0], [53.9, 209.0], [54.0, 209.0], [54.1, 210.0], [54.2, 211.0], [54.3, 211.0], [54.4, 212.0], [54.5, 212.0], [54.6, 214.0], [54.7, 214.0], [54.8, 215.0], [54.9, 216.0], [55.0, 217.0], [55.1, 218.0], [55.2, 219.0], [55.3, 220.0], [55.4, 222.0], [55.5, 224.0], [55.6, 225.0], [55.7, 226.0], [55.8, 227.0], [55.9, 228.0], [56.0, 230.0], [56.1, 231.0], [56.2, 232.0], [56.3, 232.0], [56.4, 233.0], [56.5, 234.0], [56.6, 235.0], [56.7, 235.0], [56.8, 236.0], [56.9, 237.0], [57.0, 238.0], [57.1, 238.0], [57.2, 239.0], [57.3, 240.0], [57.4, 241.0], [57.5, 242.0], [57.6, 242.0], [57.7, 243.0], [57.8, 244.0], [57.9, 245.0], [58.0, 245.0], [58.1, 247.0], [58.2, 248.0], [58.3, 249.0], [58.4, 249.0], [58.5, 251.0], [58.6, 252.0], [58.7, 253.0], [58.8, 254.0], [58.9, 254.0], [59.0, 255.0], [59.1, 256.0], [59.2, 257.0], [59.3, 258.0], [59.4, 259.0], [59.5, 260.0], [59.6, 261.0], [59.7, 262.0], [59.8, 262.0], [59.9, 263.0], [60.0, 264.0], [60.1, 265.0], [60.2, 267.0], [60.3, 267.0], [60.4, 268.0], [60.5, 269.0], [60.6, 269.0], [60.7, 270.0], [60.8, 270.0], [60.9, 271.0], [61.0, 273.0], [61.1, 274.0], [61.2, 275.0], [61.3, 276.0], [61.4, 277.0], [61.5, 278.0], [61.6, 279.0], [61.7, 280.0], [61.8, 281.0], [61.9, 282.0], [62.0, 283.0], [62.1, 284.0], [62.2, 287.0], [62.3, 288.0], [62.4, 289.0], [62.5, 289.0], [62.6, 290.0], [62.7, 291.0], [62.8, 292.0], [62.9, 293.0], [63.0, 293.0], [63.1, 294.0], [63.2, 296.0], [63.3, 297.0], [63.4, 299.0], [63.5, 300.0], [63.6, 301.0], [63.7, 302.0], [63.8, 303.0], [63.9, 304.0], [64.0, 306.0], [64.1, 307.0], [64.2, 308.0], [64.3, 309.0], [64.4, 310.0], [64.5, 311.0], [64.6, 312.0], [64.7, 314.0], [64.8, 316.0], [64.9, 317.0], [65.0, 318.0], [65.1, 319.0], [65.2, 320.0], [65.3, 321.0], [65.4, 323.0], [65.5, 325.0], [65.6, 326.0], [65.7, 327.0], [65.8, 329.0], [65.9, 330.0], [66.0, 332.0], [66.1, 334.0], [66.2, 335.0], [66.3, 336.0], [66.4, 337.0], [66.5, 339.0], [66.6, 340.0], [66.7, 341.0], [66.8, 342.0], [66.9, 343.0], [67.0, 343.0], [67.1, 345.0], [67.2, 346.0], [67.3, 349.0], [67.4, 350.0], [67.5, 351.0], [67.6, 353.0], [67.7, 355.0], [67.8, 356.0], [67.9, 358.0], [68.0, 359.0], [68.1, 361.0], [68.2, 361.0], [68.3, 363.0], [68.4, 365.0], [68.5, 366.0], [68.6, 367.0], [68.7, 368.0], [68.8, 370.0], [68.9, 371.0], [69.0, 373.0], [69.1, 374.0], [69.2, 377.0], [69.3, 379.0], [69.4, 380.0], [69.5, 381.0], [69.6, 384.0], [69.7, 385.0], [69.8, 386.0], [69.9, 388.0], [70.0, 389.0], [70.1, 390.0], [70.2, 392.0], [70.3, 393.0], [70.4, 395.0], [70.5, 395.0], [70.6, 397.0], [70.7, 398.0], [70.8, 400.0], [70.9, 402.0], [71.0, 403.0], [71.1, 404.0], [71.2, 406.0], [71.3, 406.0], [71.4, 407.0], [71.5, 410.0], [71.6, 412.0], [71.7, 414.0], [71.8, 416.0], [71.9, 418.0], [72.0, 421.0], [72.1, 423.0], [72.2, 424.0], [72.3, 425.0], [72.4, 426.0], [72.5, 428.0], [72.6, 430.0], [72.7, 431.0], [72.8, 431.0], [72.9, 433.0], [73.0, 434.0], [73.1, 435.0], [73.2, 436.0], [73.3, 438.0], [73.4, 439.0], [73.5, 439.0], [73.6, 442.0], [73.7, 443.0], [73.8, 444.0], [73.9, 445.0], [74.0, 446.0], [74.1, 447.0], [74.2, 448.0], [74.3, 452.0], [74.4, 454.0], [74.5, 456.0], [74.6, 457.0], [74.7, 459.0], [74.8, 459.0], [74.9, 460.0], [75.0, 462.0], [75.1, 463.0], [75.2, 464.0], [75.3, 467.0], [75.4, 467.0], [75.5, 469.0], [75.6, 470.0], [75.7, 471.0], [75.8, 472.0], [75.9, 473.0], [76.0, 474.0], [76.1, 475.0], [76.2, 478.0], [76.3, 479.0], [76.4, 481.0], [76.5, 481.0], [76.6, 484.0], [76.7, 485.0], [76.8, 486.0], [76.9, 488.0], [77.0, 489.0], [77.1, 491.0], [77.2, 493.0], [77.3, 495.0], [77.4, 495.0], [77.5, 497.0], [77.6, 499.0], [77.7, 500.0], [77.8, 502.0], [77.9, 504.0], [78.0, 506.0], [78.1, 507.0], [78.2, 509.0], [78.3, 509.0], [78.4, 511.0], [78.5, 513.0], [78.6, 514.0], [78.7, 518.0], [78.8, 520.0], [78.9, 521.0], [79.0, 522.0], [79.1, 524.0], [79.2, 526.0], [79.3, 528.0], [79.4, 529.0], [79.5, 531.0], [79.6, 533.0], [79.7, 534.0], [79.8, 537.0], [79.9, 538.0], [80.0, 540.0], [80.1, 541.0], [80.2, 544.0], [80.3, 546.0], [80.4, 547.0], [80.5, 548.0], [80.6, 550.0], [80.7, 552.0], [80.8, 554.0], [80.9, 557.0], [81.0, 558.0], [81.1, 561.0], [81.2, 563.0], [81.3, 564.0], [81.4, 565.0], [81.5, 567.0], [81.6, 569.0], [81.7, 572.0], [81.8, 573.0], [81.9, 574.0], [82.0, 576.0], [82.1, 579.0], [82.2, 582.0], [82.3, 583.0], [82.4, 586.0], [82.5, 588.0], [82.6, 590.0], [82.7, 591.0], [82.8, 595.0], [82.9, 597.0], [83.0, 599.0], [83.1, 600.0], [83.2, 601.0], [83.3, 603.0], [83.4, 605.0], [83.5, 610.0], [83.6, 611.0], [83.7, 615.0], [83.8, 617.0], [83.9, 618.0], [84.0, 619.0], [84.1, 621.0], [84.2, 623.0], [84.3, 624.0], [84.4, 626.0], [84.5, 628.0], [84.6, 629.0], [84.7, 631.0], [84.8, 634.0], [84.9, 639.0], [85.0, 641.0], [85.1, 644.0], [85.2, 647.0], [85.3, 650.0], [85.4, 653.0], [85.5, 655.0], [85.6, 657.0], [85.7, 660.0], [85.8, 663.0], [85.9, 666.0], [86.0, 667.0], [86.1, 670.0], [86.2, 673.0], [86.3, 675.0], [86.4, 676.0], [86.5, 677.0], [86.6, 678.0], [86.7, 680.0], [86.8, 684.0], [86.9, 685.0], [87.0, 686.0], [87.1, 690.0], [87.2, 692.0], [87.3, 694.0], [87.4, 697.0], [87.5, 699.0], [87.6, 702.0], [87.7, 703.0], [87.8, 706.0], [87.9, 709.0], [88.0, 712.0], [88.1, 716.0], [88.2, 717.0], [88.3, 720.0], [88.4, 720.0], [88.5, 724.0], [88.6, 726.0], [88.7, 727.0], [88.8, 729.0], [88.9, 730.0], [89.0, 734.0], [89.1, 737.0], [89.2, 740.0], [89.3, 741.0], [89.4, 743.0], [89.5, 745.0], [89.6, 749.0], [89.7, 752.0], [89.8, 757.0], [89.9, 759.0], [90.0, 763.0], [90.1, 767.0], [90.2, 770.0], [90.3, 775.0], [90.4, 776.0], [90.5, 781.0], [90.6, 788.0], [90.7, 791.0], [90.8, 797.0], [90.9, 800.0], [91.0, 803.0], [91.1, 808.0], [91.2, 815.0], [91.3, 819.0], [91.4, 823.0], [91.5, 828.0], [91.6, 831.0], [91.7, 833.0], [91.8, 837.0], [91.9, 840.0], [92.0, 847.0], [92.1, 851.0], [92.2, 860.0], [92.3, 866.0], [92.4, 871.0], [92.5, 874.0], [92.6, 878.0], [92.7, 885.0], [92.8, 891.0], [92.9, 896.0], [93.0, 900.0], [93.1, 904.0], [93.2, 907.0], [93.3, 912.0], [93.4, 916.0], [93.5, 920.0], [93.6, 926.0], [93.7, 932.0], [93.8, 936.0], [93.9, 941.0], [94.0, 943.0], [94.1, 947.0], [94.2, 953.0], [94.3, 959.0], [94.4, 967.0], [94.5, 975.0], [94.6, 978.0], [94.7, 984.0], [94.8, 994.0], [94.9, 997.0], [95.0, 1001.0], [95.1, 1011.0], [95.2, 1019.0], [95.3, 1033.0], [95.4, 1038.0], [95.5, 1051.0], [95.6, 1055.0], [95.7, 1061.0], [95.8, 1066.0], [95.9, 1071.0], [96.0, 1076.0], [96.1, 1085.0], [96.2, 1094.0], [96.3, 1102.0], [96.4, 1117.0], [96.5, 1129.0], [96.6, 1132.0], [96.7, 1141.0], [96.8, 1159.0], [96.9, 1172.0], [97.0, 1186.0], [97.1, 1200.0], [97.2, 1216.0], [97.3, 1233.0], [97.4, 1238.0], [97.5, 1254.0], [97.6, 1279.0], [97.7, 1288.0], [97.8, 1303.0], [97.9, 1331.0], [98.0, 1341.0], [98.1, 1364.0], [98.2, 1384.0], [98.3, 1411.0], [98.4, 1437.0], [98.5, 1455.0], [98.6, 1509.0], [98.7, 1530.0], [98.8, 1561.0], [98.9, 1593.0], [99.0, 1653.0], [99.1, 1701.0], [99.2, 1782.0], [99.3, 1827.0], [99.4, 1876.0], [99.5, 1990.0], [99.6, 2086.0], [99.7, 2132.0], [99.8, 2213.0], [99.9, 2288.0], [100.0, 2445.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 2.0, "minX": 0.0, "maxY": 2109.0, "series": [{"data": [[0.0, 2109.0], [600.0, 235.0], [700.0, 176.0], [800.0, 111.0], [900.0, 104.0], [1000.0, 68.0], [1100.0, 44.0], [1200.0, 36.0], [1300.0, 27.0], [1400.0, 17.0], [1500.0, 17.0], [100.0, 675.0], [1600.0, 9.0], [1700.0, 9.0], [1800.0, 8.0], [1900.0, 6.0], [2000.0, 6.0], [2100.0, 7.0], [2200.0, 7.0], [2300.0, 3.0], [2400.0, 2.0], [200.0, 560.0], [300.0, 386.0], [400.0, 364.0], [500.0, 286.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 2400.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 74.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 4097.0, "series": [{"data": [[0.0, 4097.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1101.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 74.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 7.5, "minX": 1.60231392E12, "maxY": 10.0, "series": [{"data": [[1.6023141E12, 7.5], [1.60231392E12, 9.978242677824257], [1.60231398E12, 10.0], [1.60231404E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6023141E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 311.23249619482425, "minX": 1.0, "maxY": 2320.0, "series": [{"data": [[4.0, 1090.0], [8.0, 854.3333333333334], [2.0, 2127.0], [1.0, 2229.0], [9.0, 547.5], [5.0, 1204.0], [10.0, 311.23249619482425], [3.0, 685.0], [6.0, 2320.0], [7.0, 1317.5]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.986532625189701, 313.8780349013658]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 153.78333333333333, "minX": 1.60231392E12, "maxY": 1684601.8666666667, "series": [{"data": [[1.6023141E12, 22270.75], [1.60231392E12, 1131611.8833333333], [1.60231398E12, 1452885.2], [1.60231404E12, 1684601.8666666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6023141E12, 153.78333333333333], [1.60231392E12, 10352.016666666666], [1.60231398E12, 18638.366666666665], [1.60231404E12, 16435.383333333335]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6023141E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 272.8128708352355, "minX": 1.60231392E12, "maxY": 1955.7222222222222, "series": [{"data": [[1.6023141E12, 1955.7222222222222], [1.60231392E12, 357.3598326359828], [1.60231398E12, 272.8128708352355], [1.60231404E12, 318.406852248394]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6023141E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 272.5257873117295, "minX": 1.60231392E12, "maxY": 1955.111111111111, "series": [{"data": [[1.6023141E12, 1955.111111111111], [1.60231392E12, 356.9179916317987], [1.60231398E12, 272.5257873117295], [1.60231404E12, 318.04871520342607]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6023141E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.60231392E12, "maxY": 0.07698744769874478, "series": [{"data": [[1.6023141E12, 0.0], [1.60231392E12, 0.07698744769874478], [1.60231398E12, 0.0077590141487905145], [1.60231404E12, 0.008029978586723762]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6023141E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 28.0, "minX": 1.60231392E12, "maxY": 2445.0, "series": [{"data": [[1.6023141E12, 2445.0], [1.60231392E12, 1990.0], [1.60231398E12, 2232.0], [1.60231404E12, 1799.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6023141E12, 984.0], [1.60231392E12, 31.0], [1.60231398E12, 33.0], [1.60231404E12, 32.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6023141E12, 984.0], [1.60231392E12, 31.84040011405945], [1.60231398E12, 33.0], [1.60231404E12, 33.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6023141E12, 984.0], [1.60231392E12, 31.361999857425687], [1.60231398E12, 33.0], [1.60231404E12, 32.75549977719784]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.6023141E12, 984.0], [1.60231392E12, 29.0], [1.60231398E12, 28.0], [1.60231404E12, 29.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6023141E12, 2178.0], [1.60231392E12, 243.0], [1.60231398E12, 127.0], [1.60231404E12, 209.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6023141E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 46.5, "minX": 3.0, "maxY": 2161.5, "series": [{"data": [[3.0, 1203.5], [4.0, 2161.5], [5.0, 1576.0], [6.0, 1318.5], [7.0, 732.5], [8.0, 1901.0], [9.0, 806.0], [10.0, 964.5], [11.0, 864.5], [12.0, 1033.0], [14.0, 621.0], [15.0, 595.0], [16.0, 561.0], [17.0, 533.0], [18.0, 571.0], [19.0, 341.0], [20.0, 452.5], [21.0, 383.5], [22.0, 452.0], [23.0, 302.5], [24.0, 508.0], [25.0, 410.0], [26.0, 304.0], [27.0, 293.0], [28.0, 303.5], [29.0, 327.0], [30.0, 221.5], [31.0, 317.0], [32.0, 187.5], [33.0, 265.0], [35.0, 249.5], [34.0, 230.5], [36.0, 88.0], [37.0, 79.0], [39.0, 181.0], [38.0, 73.0], [40.0, 232.5], [41.0, 155.0], [43.0, 176.0], [42.0, 207.0], [47.0, 131.5], [46.0, 77.0], [48.0, 94.0], [49.0, 46.5], [51.0, 75.0], [52.0, 86.5], [55.0, 79.0], [54.0, 111.5], [57.0, 62.0], [58.0, 71.5], [65.0, 78.0], [66.0, 143.0], [64.0, 79.5], [69.0, 111.5], [71.0, 129.0], [68.0, 117.0], [79.0, 83.0], [77.0, 73.0], [80.0, 76.5], [87.0, 104.0], [90.0, 74.5], [97.0, 63.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 97.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 46.5, "minX": 3.0, "maxY": 2161.5, "series": [{"data": [[3.0, 1201.0], [4.0, 2161.5], [5.0, 1575.0], [6.0, 1317.0], [7.0, 732.5], [8.0, 1900.5], [9.0, 804.0], [10.0, 959.5], [11.0, 864.5], [12.0, 1031.5], [14.0, 620.5], [15.0, 594.0], [16.0, 559.0], [17.0, 531.5], [18.0, 570.0], [19.0, 340.0], [20.0, 452.5], [21.0, 383.5], [22.0, 451.0], [23.0, 302.0], [24.0, 507.5], [25.0, 410.0], [26.0, 303.5], [27.0, 293.0], [28.0, 302.0], [29.0, 326.0], [30.0, 221.5], [31.0, 317.0], [32.0, 187.0], [33.0, 265.0], [35.0, 249.0], [34.0, 230.5], [36.0, 88.0], [37.0, 79.0], [39.0, 181.0], [38.0, 73.0], [40.0, 232.0], [41.0, 155.0], [43.0, 176.0], [42.0, 207.0], [47.0, 131.0], [46.0, 77.0], [48.0, 94.0], [49.0, 46.5], [51.0, 75.0], [52.0, 86.5], [55.0, 79.0], [54.0, 111.0], [57.0, 62.0], [58.0, 71.5], [65.0, 78.0], [66.0, 143.0], [64.0, 79.5], [69.0, 111.5], [71.0, 129.0], [68.0, 116.5], [79.0, 83.0], [77.0, 73.0], [80.0, 76.5], [87.0, 104.0], [90.0, 74.5], [97.0, 63.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 97.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.13333333333333333, "minX": 1.60231392E12, "maxY": 36.516666666666666, "series": [{"data": [[1.6023141E12, 0.13333333333333333], [1.60231392E12, 20.083333333333332], [1.60231398E12, 36.516666666666666], [1.60231404E12, 31.133333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6023141E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.3, "minX": 1.60231392E12, "maxY": 36.516666666666666, "series": [{"data": [[1.6023141E12, 0.3], [1.60231392E12, 19.916666666666668], [1.60231398E12, 36.516666666666666], [1.60231404E12, 31.133333333333333]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6023141E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.3, "minX": 1.60231392E12, "maxY": 36.516666666666666, "series": [{"data": [[1.6023141E12, 0.3], [1.60231392E12, 19.916666666666668], [1.60231398E12, 36.516666666666666], [1.60231404E12, 31.133333333333333]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6023141E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.3, "minX": 1.60231392E12, "maxY": 36.516666666666666, "series": [{"data": [[1.6023141E12, 0.3], [1.60231392E12, 19.916666666666668], [1.60231398E12, 36.516666666666666], [1.60231404E12, 31.133333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6023141E12, "title": "Total Transactions Per Second"}},
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

