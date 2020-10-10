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
        data: {"result": {"minY": 33.0, "minX": 0.0, "maxY": 4480.0, "series": [{"data": [[0.0, 33.0], [0.1, 35.0], [0.2, 37.0], [0.3, 37.0], [0.4, 38.0], [0.5, 39.0], [0.6, 39.0], [0.7, 39.0], [0.8, 39.0], [0.9, 40.0], [1.0, 40.0], [1.1, 40.0], [1.2, 40.0], [1.3, 40.0], [1.4, 41.0], [1.5, 41.0], [1.6, 41.0], [1.7, 41.0], [1.8, 41.0], [1.9, 41.0], [2.0, 41.0], [2.1, 42.0], [2.2, 42.0], [2.3, 42.0], [2.4, 42.0], [2.5, 42.0], [2.6, 42.0], [2.7, 42.0], [2.8, 43.0], [2.9, 43.0], [3.0, 43.0], [3.1, 43.0], [3.2, 43.0], [3.3, 43.0], [3.4, 43.0], [3.5, 43.0], [3.6, 44.0], [3.7, 44.0], [3.8, 44.0], [3.9, 44.0], [4.0, 44.0], [4.1, 44.0], [4.2, 44.0], [4.3, 44.0], [4.4, 44.0], [4.5, 44.0], [4.6, 44.0], [4.7, 44.0], [4.8, 44.0], [4.9, 44.0], [5.0, 45.0], [5.1, 45.0], [5.2, 45.0], [5.3, 45.0], [5.4, 45.0], [5.5, 45.0], [5.6, 45.0], [5.7, 45.0], [5.8, 45.0], [5.9, 45.0], [6.0, 45.0], [6.1, 45.0], [6.2, 45.0], [6.3, 45.0], [6.4, 45.0], [6.5, 45.0], [6.6, 46.0], [6.7, 46.0], [6.8, 46.0], [6.9, 46.0], [7.0, 46.0], [7.1, 46.0], [7.2, 46.0], [7.3, 46.0], [7.4, 46.0], [7.5, 46.0], [7.6, 46.0], [7.7, 46.0], [7.8, 46.0], [7.9, 46.0], [8.0, 46.0], [8.1, 46.0], [8.2, 46.0], [8.3, 46.0], [8.4, 46.0], [8.5, 47.0], [8.6, 47.0], [8.7, 47.0], [8.8, 47.0], [8.9, 47.0], [9.0, 47.0], [9.1, 47.0], [9.2, 47.0], [9.3, 47.0], [9.4, 47.0], [9.5, 47.0], [9.6, 47.0], [9.7, 47.0], [9.8, 47.0], [9.9, 47.0], [10.0, 47.0], [10.1, 47.0], [10.2, 47.0], [10.3, 48.0], [10.4, 48.0], [10.5, 48.0], [10.6, 48.0], [10.7, 48.0], [10.8, 48.0], [10.9, 48.0], [11.0, 48.0], [11.1, 48.0], [11.2, 48.0], [11.3, 48.0], [11.4, 48.0], [11.5, 48.0], [11.6, 48.0], [11.7, 48.0], [11.8, 48.0], [11.9, 49.0], [12.0, 49.0], [12.1, 49.0], [12.2, 49.0], [12.3, 49.0], [12.4, 49.0], [12.5, 49.0], [12.6, 49.0], [12.7, 49.0], [12.8, 49.0], [12.9, 49.0], [13.0, 49.0], [13.1, 49.0], [13.2, 49.0], [13.3, 49.0], [13.4, 49.0], [13.5, 50.0], [13.6, 50.0], [13.7, 50.0], [13.8, 50.0], [13.9, 50.0], [14.0, 50.0], [14.1, 50.0], [14.2, 50.0], [14.3, 50.0], [14.4, 50.0], [14.5, 50.0], [14.6, 50.0], [14.7, 50.0], [14.8, 50.0], [14.9, 50.0], [15.0, 50.0], [15.1, 50.0], [15.2, 50.0], [15.3, 50.0], [15.4, 51.0], [15.5, 51.0], [15.6, 51.0], [15.7, 51.0], [15.8, 51.0], [15.9, 51.0], [16.0, 51.0], [16.1, 51.0], [16.2, 51.0], [16.3, 51.0], [16.4, 51.0], [16.5, 51.0], [16.6, 51.0], [16.7, 51.0], [16.8, 51.0], [16.9, 51.0], [17.0, 52.0], [17.1, 52.0], [17.2, 52.0], [17.3, 52.0], [17.4, 52.0], [17.5, 52.0], [17.6, 52.0], [17.7, 52.0], [17.8, 52.0], [17.9, 52.0], [18.0, 52.0], [18.1, 52.0], [18.2, 52.0], [18.3, 52.0], [18.4, 53.0], [18.5, 53.0], [18.6, 53.0], [18.7, 53.0], [18.8, 53.0], [18.9, 53.0], [19.0, 53.0], [19.1, 53.0], [19.2, 53.0], [19.3, 53.0], [19.4, 53.0], [19.5, 54.0], [19.6, 54.0], [19.7, 54.0], [19.8, 54.0], [19.9, 54.0], [20.0, 54.0], [20.1, 54.0], [20.2, 54.0], [20.3, 54.0], [20.4, 54.0], [20.5, 54.0], [20.6, 55.0], [20.7, 55.0], [20.8, 55.0], [20.9, 55.0], [21.0, 55.0], [21.1, 55.0], [21.2, 55.0], [21.3, 56.0], [21.4, 56.0], [21.5, 56.0], [21.6, 56.0], [21.7, 56.0], [21.8, 56.0], [21.9, 56.0], [22.0, 57.0], [22.1, 57.0], [22.2, 57.0], [22.3, 57.0], [22.4, 58.0], [22.5, 58.0], [22.6, 58.0], [22.7, 58.0], [22.8, 58.0], [22.9, 58.0], [23.0, 59.0], [23.1, 59.0], [23.2, 59.0], [23.3, 59.0], [23.4, 59.0], [23.5, 60.0], [23.6, 60.0], [23.7, 60.0], [23.8, 60.0], [23.9, 60.0], [24.0, 61.0], [24.1, 61.0], [24.2, 61.0], [24.3, 61.0], [24.4, 62.0], [24.5, 62.0], [24.6, 62.0], [24.7, 62.0], [24.8, 62.0], [24.9, 63.0], [25.0, 63.0], [25.1, 63.0], [25.2, 63.0], [25.3, 64.0], [25.4, 64.0], [25.5, 64.0], [25.6, 64.0], [25.7, 64.0], [25.8, 65.0], [25.9, 66.0], [26.0, 66.0], [26.1, 66.0], [26.2, 66.0], [26.3, 67.0], [26.4, 67.0], [26.5, 67.0], [26.6, 67.0], [26.7, 68.0], [26.8, 68.0], [26.9, 68.0], [27.0, 68.0], [27.1, 69.0], [27.2, 69.0], [27.3, 69.0], [27.4, 69.0], [27.5, 70.0], [27.6, 70.0], [27.7, 70.0], [27.8, 70.0], [27.9, 70.0], [28.0, 71.0], [28.1, 71.0], [28.2, 71.0], [28.3, 72.0], [28.4, 72.0], [28.5, 72.0], [28.6, 73.0], [28.7, 73.0], [28.8, 73.0], [28.9, 73.0], [29.0, 74.0], [29.1, 74.0], [29.2, 74.0], [29.3, 75.0], [29.4, 75.0], [29.5, 75.0], [29.6, 76.0], [29.7, 76.0], [29.8, 76.0], [29.9, 77.0], [30.0, 77.0], [30.1, 77.0], [30.2, 77.0], [30.3, 78.0], [30.4, 78.0], [30.5, 78.0], [30.6, 78.0], [30.7, 78.0], [30.8, 79.0], [30.9, 79.0], [31.0, 79.0], [31.1, 79.0], [31.2, 79.0], [31.3, 79.0], [31.4, 80.0], [31.5, 80.0], [31.6, 80.0], [31.7, 81.0], [31.8, 81.0], [31.9, 81.0], [32.0, 82.0], [32.1, 82.0], [32.2, 82.0], [32.3, 82.0], [32.4, 83.0], [32.5, 83.0], [32.6, 83.0], [32.7, 83.0], [32.8, 84.0], [32.9, 84.0], [33.0, 84.0], [33.1, 85.0], [33.2, 85.0], [33.3, 85.0], [33.4, 86.0], [33.5, 86.0], [33.6, 87.0], [33.7, 87.0], [33.8, 87.0], [33.9, 87.0], [34.0, 88.0], [34.1, 88.0], [34.2, 88.0], [34.3, 88.0], [34.4, 89.0], [34.5, 89.0], [34.6, 89.0], [34.7, 89.0], [34.8, 90.0], [34.9, 90.0], [35.0, 91.0], [35.1, 91.0], [35.2, 91.0], [35.3, 92.0], [35.4, 92.0], [35.5, 92.0], [35.6, 93.0], [35.7, 93.0], [35.8, 94.0], [35.9, 94.0], [36.0, 94.0], [36.1, 95.0], [36.2, 95.0], [36.3, 96.0], [36.4, 96.0], [36.5, 96.0], [36.6, 97.0], [36.7, 97.0], [36.8, 97.0], [36.9, 98.0], [37.0, 98.0], [37.1, 99.0], [37.2, 100.0], [37.3, 101.0], [37.4, 101.0], [37.5, 102.0], [37.6, 102.0], [37.7, 103.0], [37.8, 103.0], [37.9, 104.0], [38.0, 105.0], [38.1, 105.0], [38.2, 106.0], [38.3, 107.0], [38.4, 107.0], [38.5, 108.0], [38.6, 109.0], [38.7, 109.0], [38.8, 110.0], [38.9, 110.0], [39.0, 111.0], [39.1, 111.0], [39.2, 112.0], [39.3, 112.0], [39.4, 113.0], [39.5, 114.0], [39.6, 114.0], [39.7, 115.0], [39.8, 116.0], [39.9, 117.0], [40.0, 118.0], [40.1, 118.0], [40.2, 119.0], [40.3, 120.0], [40.4, 120.0], [40.5, 121.0], [40.6, 122.0], [40.7, 122.0], [40.8, 123.0], [40.9, 123.0], [41.0, 124.0], [41.1, 126.0], [41.2, 127.0], [41.3, 127.0], [41.4, 128.0], [41.5, 129.0], [41.6, 130.0], [41.7, 131.0], [41.8, 131.0], [41.9, 132.0], [42.0, 132.0], [42.1, 133.0], [42.2, 135.0], [42.3, 135.0], [42.4, 136.0], [42.5, 136.0], [42.6, 137.0], [42.7, 138.0], [42.8, 138.0], [42.9, 139.0], [43.0, 140.0], [43.1, 141.0], [43.2, 141.0], [43.3, 142.0], [43.4, 143.0], [43.5, 144.0], [43.6, 145.0], [43.7, 145.0], [43.8, 146.0], [43.9, 146.0], [44.0, 147.0], [44.1, 148.0], [44.2, 149.0], [44.3, 149.0], [44.4, 150.0], [44.5, 151.0], [44.6, 153.0], [44.7, 154.0], [44.8, 155.0], [44.9, 157.0], [45.0, 157.0], [45.1, 157.0], [45.2, 158.0], [45.3, 159.0], [45.4, 160.0], [45.5, 161.0], [45.6, 163.0], [45.7, 163.0], [45.8, 165.0], [45.9, 166.0], [46.0, 167.0], [46.1, 168.0], [46.2, 169.0], [46.3, 169.0], [46.4, 170.0], [46.5, 171.0], [46.6, 172.0], [46.7, 173.0], [46.8, 173.0], [46.9, 174.0], [47.0, 175.0], [47.1, 175.0], [47.2, 176.0], [47.3, 177.0], [47.4, 178.0], [47.5, 179.0], [47.6, 180.0], [47.7, 181.0], [47.8, 181.0], [47.9, 182.0], [48.0, 183.0], [48.1, 185.0], [48.2, 185.0], [48.3, 186.0], [48.4, 187.0], [48.5, 187.0], [48.6, 188.0], [48.7, 189.0], [48.8, 190.0], [48.9, 191.0], [49.0, 192.0], [49.1, 193.0], [49.2, 193.0], [49.3, 194.0], [49.4, 194.0], [49.5, 196.0], [49.6, 196.0], [49.7, 197.0], [49.8, 198.0], [49.9, 199.0], [50.0, 201.0], [50.1, 201.0], [50.2, 202.0], [50.3, 202.0], [50.4, 203.0], [50.5, 204.0], [50.6, 205.0], [50.7, 205.0], [50.8, 206.0], [50.9, 207.0], [51.0, 208.0], [51.1, 209.0], [51.2, 210.0], [51.3, 211.0], [51.4, 211.0], [51.5, 212.0], [51.6, 213.0], [51.7, 214.0], [51.8, 214.0], [51.9, 215.0], [52.0, 216.0], [52.1, 216.0], [52.2, 217.0], [52.3, 218.0], [52.4, 218.0], [52.5, 219.0], [52.6, 220.0], [52.7, 220.0], [52.8, 221.0], [52.9, 222.0], [53.0, 222.0], [53.1, 223.0], [53.2, 223.0], [53.3, 225.0], [53.4, 226.0], [53.5, 226.0], [53.6, 227.0], [53.7, 228.0], [53.8, 228.0], [53.9, 229.0], [54.0, 230.0], [54.1, 231.0], [54.2, 231.0], [54.3, 232.0], [54.4, 233.0], [54.5, 234.0], [54.6, 235.0], [54.7, 235.0], [54.8, 236.0], [54.9, 237.0], [55.0, 238.0], [55.1, 238.0], [55.2, 239.0], [55.3, 240.0], [55.4, 240.0], [55.5, 241.0], [55.6, 242.0], [55.7, 242.0], [55.8, 243.0], [55.9, 244.0], [56.0, 245.0], [56.1, 245.0], [56.2, 246.0], [56.3, 246.0], [56.4, 247.0], [56.5, 247.0], [56.6, 248.0], [56.7, 250.0], [56.8, 251.0], [56.9, 252.0], [57.0, 253.0], [57.1, 253.0], [57.2, 254.0], [57.3, 255.0], [57.4, 255.0], [57.5, 256.0], [57.6, 257.0], [57.7, 257.0], [57.8, 258.0], [57.9, 259.0], [58.0, 260.0], [58.1, 261.0], [58.2, 261.0], [58.3, 263.0], [58.4, 264.0], [58.5, 264.0], [58.6, 266.0], [58.7, 266.0], [58.8, 267.0], [58.9, 268.0], [59.0, 269.0], [59.1, 270.0], [59.2, 271.0], [59.3, 272.0], [59.4, 273.0], [59.5, 274.0], [59.6, 275.0], [59.7, 275.0], [59.8, 277.0], [59.9, 278.0], [60.0, 279.0], [60.1, 279.0], [60.2, 281.0], [60.3, 282.0], [60.4, 283.0], [60.5, 284.0], [60.6, 285.0], [60.7, 286.0], [60.8, 287.0], [60.9, 288.0], [61.0, 289.0], [61.1, 290.0], [61.2, 291.0], [61.3, 293.0], [61.4, 294.0], [61.5, 296.0], [61.6, 297.0], [61.7, 299.0], [61.8, 300.0], [61.9, 301.0], [62.0, 302.0], [62.1, 303.0], [62.2, 305.0], [62.3, 306.0], [62.4, 308.0], [62.5, 309.0], [62.6, 311.0], [62.7, 312.0], [62.8, 312.0], [62.9, 314.0], [63.0, 314.0], [63.1, 314.0], [63.2, 315.0], [63.3, 317.0], [63.4, 319.0], [63.5, 320.0], [63.6, 320.0], [63.7, 321.0], [63.8, 322.0], [63.9, 323.0], [64.0, 323.0], [64.1, 325.0], [64.2, 327.0], [64.3, 328.0], [64.4, 329.0], [64.5, 331.0], [64.6, 332.0], [64.7, 333.0], [64.8, 334.0], [64.9, 335.0], [65.0, 336.0], [65.1, 338.0], [65.2, 339.0], [65.3, 340.0], [65.4, 340.0], [65.5, 342.0], [65.6, 342.0], [65.7, 344.0], [65.8, 345.0], [65.9, 346.0], [66.0, 347.0], [66.1, 348.0], [66.2, 350.0], [66.3, 350.0], [66.4, 351.0], [66.5, 352.0], [66.6, 353.0], [66.7, 355.0], [66.8, 356.0], [66.9, 357.0], [67.0, 359.0], [67.1, 360.0], [67.2, 361.0], [67.3, 363.0], [67.4, 363.0], [67.5, 364.0], [67.6, 366.0], [67.7, 367.0], [67.8, 368.0], [67.9, 369.0], [68.0, 371.0], [68.1, 371.0], [68.2, 373.0], [68.3, 374.0], [68.4, 375.0], [68.5, 376.0], [68.6, 376.0], [68.7, 377.0], [68.8, 379.0], [68.9, 381.0], [69.0, 382.0], [69.1, 384.0], [69.2, 387.0], [69.3, 387.0], [69.4, 387.0], [69.5, 389.0], [69.6, 391.0], [69.7, 392.0], [69.8, 394.0], [69.9, 395.0], [70.0, 397.0], [70.1, 398.0], [70.2, 398.0], [70.3, 401.0], [70.4, 402.0], [70.5, 404.0], [70.6, 406.0], [70.7, 408.0], [70.8, 410.0], [70.9, 412.0], [71.0, 413.0], [71.1, 415.0], [71.2, 416.0], [71.3, 418.0], [71.4, 423.0], [71.5, 424.0], [71.6, 426.0], [71.7, 427.0], [71.8, 430.0], [71.9, 431.0], [72.0, 432.0], [72.1, 432.0], [72.2, 433.0], [72.3, 435.0], [72.4, 437.0], [72.5, 439.0], [72.6, 440.0], [72.7, 441.0], [72.8, 443.0], [72.9, 444.0], [73.0, 445.0], [73.1, 445.0], [73.2, 447.0], [73.3, 449.0], [73.4, 451.0], [73.5, 452.0], [73.6, 455.0], [73.7, 458.0], [73.8, 459.0], [73.9, 461.0], [74.0, 462.0], [74.1, 464.0], [74.2, 465.0], [74.3, 467.0], [74.4, 469.0], [74.5, 471.0], [74.6, 472.0], [74.7, 474.0], [74.8, 478.0], [74.9, 479.0], [75.0, 480.0], [75.1, 482.0], [75.2, 482.0], [75.3, 483.0], [75.4, 485.0], [75.5, 486.0], [75.6, 489.0], [75.7, 490.0], [75.8, 492.0], [75.9, 493.0], [76.0, 496.0], [76.1, 497.0], [76.2, 499.0], [76.3, 501.0], [76.4, 502.0], [76.5, 503.0], [76.6, 505.0], [76.7, 506.0], [76.8, 508.0], [76.9, 510.0], [77.0, 512.0], [77.1, 513.0], [77.2, 515.0], [77.3, 517.0], [77.4, 518.0], [77.5, 519.0], [77.6, 522.0], [77.7, 525.0], [77.8, 526.0], [77.9, 528.0], [78.0, 531.0], [78.1, 531.0], [78.2, 533.0], [78.3, 535.0], [78.4, 537.0], [78.5, 539.0], [78.6, 541.0], [78.7, 544.0], [78.8, 546.0], [78.9, 548.0], [79.0, 550.0], [79.1, 554.0], [79.2, 555.0], [79.3, 559.0], [79.4, 561.0], [79.5, 563.0], [79.6, 564.0], [79.7, 565.0], [79.8, 568.0], [79.9, 569.0], [80.0, 574.0], [80.1, 576.0], [80.2, 577.0], [80.3, 579.0], [80.4, 581.0], [80.5, 583.0], [80.6, 586.0], [80.7, 587.0], [80.8, 590.0], [80.9, 593.0], [81.0, 595.0], [81.1, 596.0], [81.2, 598.0], [81.3, 601.0], [81.4, 602.0], [81.5, 607.0], [81.6, 610.0], [81.7, 614.0], [81.8, 616.0], [81.9, 621.0], [82.0, 626.0], [82.1, 627.0], [82.2, 629.0], [82.3, 633.0], [82.4, 636.0], [82.5, 637.0], [82.6, 640.0], [82.7, 644.0], [82.8, 647.0], [82.9, 651.0], [83.0, 655.0], [83.1, 659.0], [83.2, 663.0], [83.3, 665.0], [83.4, 668.0], [83.5, 670.0], [83.6, 671.0], [83.7, 676.0], [83.8, 678.0], [83.9, 684.0], [84.0, 686.0], [84.1, 688.0], [84.2, 691.0], [84.3, 695.0], [84.4, 699.0], [84.5, 702.0], [84.6, 704.0], [84.7, 707.0], [84.8, 709.0], [84.9, 711.0], [85.0, 716.0], [85.1, 720.0], [85.2, 723.0], [85.3, 725.0], [85.4, 729.0], [85.5, 732.0], [85.6, 735.0], [85.7, 739.0], [85.8, 742.0], [85.9, 743.0], [86.0, 749.0], [86.1, 751.0], [86.2, 753.0], [86.3, 755.0], [86.4, 761.0], [86.5, 763.0], [86.6, 764.0], [86.7, 765.0], [86.8, 768.0], [86.9, 772.0], [87.0, 777.0], [87.1, 782.0], [87.2, 787.0], [87.3, 789.0], [87.4, 793.0], [87.5, 798.0], [87.6, 803.0], [87.7, 805.0], [87.8, 809.0], [87.9, 813.0], [88.0, 818.0], [88.1, 824.0], [88.2, 828.0], [88.3, 833.0], [88.4, 836.0], [88.5, 839.0], [88.6, 842.0], [88.7, 849.0], [88.8, 860.0], [88.9, 864.0], [89.0, 866.0], [89.1, 868.0], [89.2, 872.0], [89.3, 878.0], [89.4, 880.0], [89.5, 883.0], [89.6, 889.0], [89.7, 896.0], [89.8, 903.0], [89.9, 907.0], [90.0, 915.0], [90.1, 920.0], [90.2, 927.0], [90.3, 932.0], [90.4, 936.0], [90.5, 939.0], [90.6, 944.0], [90.7, 946.0], [90.8, 949.0], [90.9, 953.0], [91.0, 960.0], [91.1, 963.0], [91.2, 975.0], [91.3, 981.0], [91.4, 984.0], [91.5, 997.0], [91.6, 1007.0], [91.7, 1016.0], [91.8, 1021.0], [91.9, 1029.0], [92.0, 1031.0], [92.1, 1034.0], [92.2, 1039.0], [92.3, 1048.0], [92.4, 1053.0], [92.5, 1058.0], [92.6, 1070.0], [92.7, 1079.0], [92.8, 1082.0], [92.9, 1090.0], [93.0, 1095.0], [93.1, 1104.0], [93.2, 1112.0], [93.3, 1114.0], [93.4, 1118.0], [93.5, 1120.0], [93.6, 1128.0], [93.7, 1131.0], [93.8, 1139.0], [93.9, 1146.0], [94.0, 1157.0], [94.1, 1166.0], [94.2, 1179.0], [94.3, 1186.0], [94.4, 1190.0], [94.5, 1202.0], [94.6, 1206.0], [94.7, 1213.0], [94.8, 1225.0], [94.9, 1234.0], [95.0, 1245.0], [95.1, 1250.0], [95.2, 1260.0], [95.3, 1276.0], [95.4, 1278.0], [95.5, 1294.0], [95.6, 1306.0], [95.7, 1322.0], [95.8, 1329.0], [95.9, 1343.0], [96.0, 1369.0], [96.1, 1388.0], [96.2, 1401.0], [96.3, 1417.0], [96.4, 1435.0], [96.5, 1448.0], [96.6, 1465.0], [96.7, 1483.0], [96.8, 1491.0], [96.9, 1513.0], [97.0, 1527.0], [97.1, 1549.0], [97.2, 1567.0], [97.3, 1582.0], [97.4, 1611.0], [97.5, 1628.0], [97.6, 1651.0], [97.7, 1686.0], [97.8, 1722.0], [97.9, 1739.0], [98.0, 1754.0], [98.1, 1767.0], [98.2, 1792.0], [98.3, 1825.0], [98.4, 1868.0], [98.5, 1903.0], [98.6, 1944.0], [98.7, 1999.0], [98.8, 2039.0], [98.9, 2113.0], [99.0, 2154.0], [99.1, 2220.0], [99.2, 2275.0], [99.3, 2347.0], [99.4, 2452.0], [99.5, 2559.0], [99.6, 2690.0], [99.7, 2835.0], [99.8, 3139.0], [99.9, 3686.0], [100.0, 4480.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 1956.0, "series": [{"data": [[0.0, 1956.0], [600.0, 167.0], [700.0, 163.0], [800.0, 118.0], [900.0, 95.0], [1000.0, 78.0], [1100.0, 77.0], [1200.0, 57.0], [1300.0, 31.0], [1400.0, 36.0], [1500.0, 28.0], [100.0, 675.0], [1600.0, 19.0], [1700.0, 27.0], [1800.0, 12.0], [1900.0, 12.0], [2000.0, 9.0], [2100.0, 10.0], [2300.0, 9.0], [2200.0, 7.0], [2400.0, 5.0], [2500.0, 3.0], [2600.0, 4.0], [2700.0, 4.0], [2800.0, 4.0], [3000.0, 2.0], [3100.0, 2.0], [200.0, 624.0], [3400.0, 1.0], [3500.0, 2.0], [3600.0, 1.0], [3700.0, 1.0], [3800.0, 2.0], [3900.0, 1.0], [4400.0, 1.0], [300.0, 447.0], [400.0, 316.0], [500.0, 266.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 4400.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 166.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 4022.0, "series": [{"data": [[0.0, 4022.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1084.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 166.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.958916900093373, "minX": 1.60234728E12, "maxY": 10.0, "series": [{"data": [[1.6023474E12, 10.0], [1.60234746E12, 9.958916900093373], [1.60234728E12, 9.980795610425245], [1.60234734E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60234746E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 358.75770254849687, "minX": 1.0, "maxY": 4480.0, "series": [{"data": [[4.0, 1118.5], [8.0, 638.0], [2.0, 2328.0], [1.0, 4480.0], [9.0, 1949.5], [10.0, 358.75770254849687], [5.0, 1792.0], [6.0, 484.0], [3.0, 1461.0], [7.0, 842.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.988998482549318, 362.0811836115323]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 6417.383333333333, "minX": 1.60234728E12, "maxY": 1343292.1833333333, "series": [{"data": [[1.6023474E12, 1265453.3], [1.60234746E12, 1090324.95], [1.60234728E12, 581042.05], [1.60234734E12, 1343292.1833333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6023474E12, 16631.383333333335], [1.60234746E12, 9717.416666666666], [1.60234728E12, 6417.383333333333], [1.60234734E12, 14043.5]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60234746E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 311.9275970619099, "minX": 1.60234728E12, "maxY": 407.1139122315591, "series": [{"data": [[1.6023474E12, 311.9275970619099], [1.60234746E12, 407.1139122315591], [1.60234728E12, 378.62551440329247], [1.60234734E12, 384.62388250319304]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60234746E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 308.53515215110144, "minX": 1.60234728E12, "maxY": 401.29785247432267, "series": [{"data": [[1.6023474E12, 308.53515215110144], [1.60234746E12, 401.29785247432267], [1.60234728E12, 374.6886145404668], [1.60234734E12, 380.1896551724137]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60234746E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.5350140056022412, "minX": 1.60234728E12, "maxY": 0.9849108367626906, "series": [{"data": [[1.6023474E12, 0.5545645330535162], [1.60234746E12, 0.5350140056022412], [1.60234728E12, 0.9849108367626906], [1.60234734E12, 0.5957854406130267]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60234746E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 33.0, "minX": 1.60234728E12, "maxY": 4480.0, "series": [{"data": [[1.6023474E12, 2835.0], [1.60234746E12, 4480.0], [1.60234728E12, 3056.0], [1.60234734E12, 3862.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6023474E12, 41.0], [1.60234746E12, 38.29599948883057], [1.60234728E12, 40.0], [1.60234734E12, 39.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6023474E12, 41.0], [1.60234746E12, 39.0], [1.60234728E12, 40.22700006961823], [1.60234734E12, 39.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6023474E12, 41.0], [1.60234746E12, 39.0], [1.60234728E12, 40.0], [1.60234734E12, 39.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.6023474E12, 35.0], [1.60234746E12, 33.0], [1.60234728E12, 37.0], [1.60234734E12, 35.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6023474E12, 167.0], [1.60234746E12, 220.0], [1.60234728E12, 242.0], [1.60234734E12, 195.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60234746E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 53.0, "minX": 1.0, "maxY": 2328.0, "series": [{"data": [[3.0, 787.0], [4.0, 331.5], [5.0, 1134.0], [6.0, 981.5], [7.0, 696.0], [8.0, 1324.5], [10.0, 997.5], [11.0, 897.5], [12.0, 510.0], [13.0, 694.0], [14.0, 520.0], [15.0, 517.0], [16.0, 473.5], [17.0, 432.0], [18.0, 372.0], [19.0, 437.0], [20.0, 433.5], [21.0, 317.0], [22.0, 367.5], [23.0, 356.5], [24.0, 263.0], [25.0, 162.0], [26.0, 271.5], [27.0, 225.5], [28.0, 222.5], [29.0, 261.0], [30.0, 256.5], [31.0, 253.0], [32.0, 199.5], [33.0, 198.0], [34.0, 73.0], [35.0, 208.0], [36.0, 97.5], [37.0, 208.5], [39.0, 92.0], [40.0, 110.5], [41.0, 80.5], [43.0, 94.0], [42.0, 92.0], [45.0, 90.0], [44.0, 150.5], [46.0, 57.5], [48.0, 112.5], [49.0, 73.0], [50.0, 138.0], [51.0, 80.0], [56.0, 74.0], [59.0, 68.0], [60.0, 128.0], [61.0, 104.0], [62.0, 125.5], [64.0, 71.0], [66.0, 107.0], [65.0, 78.0], [72.0, 120.0], [74.0, 113.0], [81.0, 53.0], [85.0, 64.0], [90.0, 56.0], [88.0, 68.0], [1.0, 2328.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 90.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 52.0, "minX": 1.0, "maxY": 2328.0, "series": [{"data": [[3.0, 786.0], [4.0, 331.5], [5.0, 1118.0], [6.0, 981.5], [7.0, 696.0], [8.0, 1324.5], [10.0, 996.5], [11.0, 897.5], [12.0, 509.5], [13.0, 664.0], [14.0, 502.5], [15.0, 493.0], [16.0, 472.5], [17.0, 430.0], [18.0, 371.5], [19.0, 436.0], [20.0, 433.0], [21.0, 316.0], [22.0, 365.0], [23.0, 356.5], [24.0, 257.5], [25.0, 162.0], [26.0, 269.0], [27.0, 225.5], [28.0, 222.5], [29.0, 261.0], [30.0, 256.0], [31.0, 252.0], [32.0, 198.5], [33.0, 198.0], [34.0, 72.5], [35.0, 208.0], [36.0, 97.0], [37.0, 208.5], [39.0, 92.0], [40.0, 110.5], [41.0, 80.5], [43.0, 94.0], [42.0, 92.0], [45.0, 89.5], [44.0, 150.5], [46.0, 57.5], [48.0, 112.0], [49.0, 73.0], [50.0, 138.0], [51.0, 80.0], [56.0, 74.0], [59.0, 68.0], [60.0, 128.0], [61.0, 104.0], [62.0, 125.5], [64.0, 71.0], [66.0, 107.0], [65.0, 78.0], [72.0, 120.0], [74.0, 113.0], [81.0, 52.0], [85.0, 63.0], [90.0, 56.0], [88.0, 68.0], [1.0, 2328.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 90.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 12.316666666666666, "minX": 1.60234728E12, "maxY": 31.766666666666666, "series": [{"data": [[1.6023474E12, 31.766666666666666], [1.60234746E12, 17.683333333333334], [1.60234728E12, 12.316666666666666], [1.60234734E12, 26.1]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60234746E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 12.15, "minX": 1.60234728E12, "maxY": 31.766666666666666, "series": [{"data": [[1.6023474E12, 31.766666666666666], [1.60234746E12, 17.85], [1.60234728E12, 12.15], [1.60234734E12, 26.1]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60234746E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 12.15, "minX": 1.60234728E12, "maxY": 31.766666666666666, "series": [{"data": [[1.6023474E12, 31.766666666666666], [1.60234746E12, 17.85], [1.60234728E12, 12.15], [1.60234734E12, 26.1]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60234746E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 12.15, "minX": 1.60234728E12, "maxY": 31.766666666666666, "series": [{"data": [[1.6023474E12, 31.766666666666666], [1.60234746E12, 17.85], [1.60234728E12, 12.15], [1.60234734E12, 26.1]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60234746E12, "title": "Total Transactions Per Second"}},
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

