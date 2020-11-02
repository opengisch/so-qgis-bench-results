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
        data: {"result": {"minY": 5.0, "minX": 0.0, "maxY": 1882.0, "series": [{"data": [[0.0, 5.0], [0.1, 6.0], [0.2, 6.0], [0.3, 7.0], [0.4, 8.0], [0.5, 8.0], [0.6, 11.0], [0.7, 11.0], [0.8, 11.0], [0.9, 11.0], [1.0, 12.0], [1.1, 12.0], [1.2, 12.0], [1.3, 12.0], [1.4, 12.0], [1.5, 12.0], [1.6, 13.0], [1.7, 13.0], [1.8, 13.0], [1.9, 13.0], [2.0, 13.0], [2.1, 13.0], [2.2, 14.0], [2.3, 14.0], [2.4, 14.0], [2.5, 14.0], [2.6, 14.0], [2.7, 14.0], [2.8, 15.0], [2.9, 15.0], [3.0, 15.0], [3.1, 15.0], [3.2, 16.0], [3.3, 16.0], [3.4, 16.0], [3.5, 16.0], [3.6, 16.0], [3.7, 16.0], [3.8, 16.0], [3.9, 17.0], [4.0, 17.0], [4.1, 17.0], [4.2, 17.0], [4.3, 17.0], [4.4, 17.0], [4.5, 17.0], [4.6, 18.0], [4.7, 18.0], [4.8, 18.0], [4.9, 18.0], [5.0, 18.0], [5.1, 19.0], [5.2, 19.0], [5.3, 19.0], [5.4, 19.0], [5.5, 19.0], [5.6, 19.0], [5.7, 19.0], [5.8, 19.0], [5.9, 20.0], [6.0, 20.0], [6.1, 20.0], [6.2, 20.0], [6.3, 20.0], [6.4, 20.0], [6.5, 20.0], [6.6, 20.0], [6.7, 20.0], [6.8, 21.0], [6.9, 21.0], [7.0, 21.0], [7.1, 21.0], [7.2, 21.0], [7.3, 21.0], [7.4, 21.0], [7.5, 21.0], [7.6, 21.0], [7.7, 21.0], [7.8, 22.0], [7.9, 22.0], [8.0, 22.0], [8.1, 22.0], [8.2, 22.0], [8.3, 22.0], [8.4, 22.0], [8.5, 22.0], [8.6, 22.0], [8.7, 22.0], [8.8, 23.0], [8.9, 23.0], [9.0, 23.0], [9.1, 23.0], [9.2, 23.0], [9.3, 23.0], [9.4, 23.0], [9.5, 23.0], [9.6, 23.0], [9.7, 24.0], [9.8, 24.0], [9.9, 24.0], [10.0, 24.0], [10.1, 24.0], [10.2, 24.0], [10.3, 24.0], [10.4, 25.0], [10.5, 25.0], [10.6, 25.0], [10.7, 25.0], [10.8, 25.0], [10.9, 25.0], [11.0, 25.0], [11.1, 25.0], [11.2, 26.0], [11.3, 26.0], [11.4, 26.0], [11.5, 27.0], [11.6, 27.0], [11.7, 27.0], [11.8, 27.0], [11.9, 27.0], [12.0, 28.0], [12.1, 28.0], [12.2, 28.0], [12.3, 28.0], [12.4, 29.0], [12.5, 29.0], [12.6, 29.0], [12.7, 29.0], [12.8, 30.0], [12.9, 30.0], [13.0, 30.0], [13.1, 30.0], [13.2, 31.0], [13.3, 31.0], [13.4, 31.0], [13.5, 31.0], [13.6, 31.0], [13.7, 32.0], [13.8, 32.0], [13.9, 33.0], [14.0, 33.0], [14.1, 33.0], [14.2, 34.0], [14.3, 34.0], [14.4, 34.0], [14.5, 35.0], [14.6, 35.0], [14.7, 35.0], [14.8, 35.0], [14.9, 35.0], [15.0, 36.0], [15.1, 36.0], [15.2, 36.0], [15.3, 36.0], [15.4, 37.0], [15.5, 37.0], [15.6, 37.0], [15.7, 38.0], [15.8, 38.0], [15.9, 38.0], [16.0, 39.0], [16.1, 39.0], [16.2, 39.0], [16.3, 39.0], [16.4, 39.0], [16.5, 40.0], [16.6, 40.0], [16.7, 40.0], [16.8, 40.0], [16.9, 41.0], [17.0, 41.0], [17.1, 41.0], [17.2, 41.0], [17.3, 42.0], [17.4, 42.0], [17.5, 42.0], [17.6, 42.0], [17.7, 43.0], [17.8, 43.0], [17.9, 43.0], [18.0, 43.0], [18.1, 44.0], [18.2, 44.0], [18.3, 44.0], [18.4, 45.0], [18.5, 45.0], [18.6, 45.0], [18.7, 45.0], [18.8, 46.0], [18.9, 46.0], [19.0, 47.0], [19.1, 47.0], [19.2, 47.0], [19.3, 48.0], [19.4, 48.0], [19.5, 48.0], [19.6, 48.0], [19.7, 49.0], [19.8, 49.0], [19.9, 50.0], [20.0, 50.0], [20.1, 50.0], [20.2, 51.0], [20.3, 52.0], [20.4, 52.0], [20.5, 52.0], [20.6, 52.0], [20.7, 53.0], [20.8, 53.0], [20.9, 53.0], [21.0, 53.0], [21.1, 54.0], [21.2, 54.0], [21.3, 54.0], [21.4, 54.0], [21.5, 55.0], [21.6, 55.0], [21.7, 55.0], [21.8, 55.0], [21.9, 56.0], [22.0, 56.0], [22.1, 57.0], [22.2, 57.0], [22.3, 57.0], [22.4, 58.0], [22.5, 58.0], [22.6, 59.0], [22.7, 59.0], [22.8, 59.0], [22.9, 60.0], [23.0, 60.0], [23.1, 60.0], [23.2, 61.0], [23.3, 61.0], [23.4, 62.0], [23.5, 62.0], [23.6, 62.0], [23.7, 63.0], [23.8, 63.0], [23.9, 63.0], [24.0, 64.0], [24.1, 64.0], [24.2, 65.0], [24.3, 65.0], [24.4, 66.0], [24.5, 66.0], [24.6, 66.0], [24.7, 67.0], [24.8, 68.0], [24.9, 69.0], [25.0, 69.0], [25.1, 70.0], [25.2, 70.0], [25.3, 71.0], [25.4, 72.0], [25.5, 72.0], [25.6, 72.0], [25.7, 73.0], [25.8, 73.0], [25.9, 74.0], [26.0, 74.0], [26.1, 75.0], [26.2, 76.0], [26.3, 76.0], [26.4, 77.0], [26.5, 77.0], [26.6, 78.0], [26.7, 78.0], [26.8, 79.0], [26.9, 80.0], [27.0, 80.0], [27.1, 81.0], [27.2, 81.0], [27.3, 82.0], [27.4, 84.0], [27.5, 84.0], [27.6, 85.0], [27.7, 85.0], [27.8, 86.0], [27.9, 87.0], [28.0, 88.0], [28.1, 88.0], [28.2, 89.0], [28.3, 89.0], [28.4, 90.0], [28.5, 91.0], [28.6, 91.0], [28.7, 92.0], [28.8, 92.0], [28.9, 93.0], [29.0, 93.0], [29.1, 94.0], [29.2, 94.0], [29.3, 95.0], [29.4, 96.0], [29.5, 96.0], [29.6, 97.0], [29.7, 97.0], [29.8, 97.0], [29.9, 98.0], [30.0, 98.0], [30.1, 99.0], [30.2, 100.0], [30.3, 100.0], [30.4, 101.0], [30.5, 101.0], [30.6, 102.0], [30.7, 102.0], [30.8, 102.0], [30.9, 103.0], [31.0, 103.0], [31.1, 103.0], [31.2, 104.0], [31.3, 104.0], [31.4, 105.0], [31.5, 105.0], [31.6, 106.0], [31.7, 106.0], [31.8, 107.0], [31.9, 107.0], [32.0, 107.0], [32.1, 109.0], [32.2, 109.0], [32.3, 109.0], [32.4, 109.0], [32.5, 109.0], [32.6, 110.0], [32.7, 110.0], [32.8, 110.0], [32.9, 110.0], [33.0, 111.0], [33.1, 111.0], [33.2, 111.0], [33.3, 111.0], [33.4, 111.0], [33.5, 112.0], [33.6, 112.0], [33.7, 112.0], [33.8, 112.0], [33.9, 112.0], [34.0, 113.0], [34.1, 113.0], [34.2, 113.0], [34.3, 113.0], [34.4, 113.0], [34.5, 114.0], [34.6, 114.0], [34.7, 114.0], [34.8, 114.0], [34.9, 115.0], [35.0, 115.0], [35.1, 115.0], [35.2, 115.0], [35.3, 116.0], [35.4, 116.0], [35.5, 116.0], [35.6, 116.0], [35.7, 116.0], [35.8, 117.0], [35.9, 117.0], [36.0, 117.0], [36.1, 118.0], [36.2, 118.0], [36.3, 118.0], [36.4, 119.0], [36.5, 119.0], [36.6, 120.0], [36.7, 120.0], [36.8, 121.0], [36.9, 121.0], [37.0, 121.0], [37.1, 121.0], [37.2, 122.0], [37.3, 122.0], [37.4, 123.0], [37.5, 123.0], [37.6, 123.0], [37.7, 123.0], [37.8, 124.0], [37.9, 124.0], [38.0, 125.0], [38.1, 125.0], [38.2, 126.0], [38.3, 126.0], [38.4, 127.0], [38.5, 127.0], [38.6, 128.0], [38.7, 128.0], [38.8, 128.0], [38.9, 129.0], [39.0, 130.0], [39.1, 130.0], [39.2, 131.0], [39.3, 132.0], [39.4, 132.0], [39.5, 133.0], [39.6, 134.0], [39.7, 134.0], [39.8, 135.0], [39.9, 135.0], [40.0, 136.0], [40.1, 137.0], [40.2, 138.0], [40.3, 139.0], [40.4, 139.0], [40.5, 140.0], [40.6, 141.0], [40.7, 142.0], [40.8, 142.0], [40.9, 143.0], [41.0, 144.0], [41.1, 145.0], [41.2, 145.0], [41.3, 146.0], [41.4, 146.0], [41.5, 146.0], [41.6, 147.0], [41.7, 148.0], [41.8, 148.0], [41.9, 149.0], [42.0, 149.0], [42.1, 150.0], [42.2, 150.0], [42.3, 150.0], [42.4, 151.0], [42.5, 152.0], [42.6, 153.0], [42.7, 154.0], [42.8, 154.0], [42.9, 155.0], [43.0, 155.0], [43.1, 156.0], [43.2, 157.0], [43.3, 157.0], [43.4, 158.0], [43.5, 158.0], [43.6, 159.0], [43.7, 160.0], [43.8, 160.0], [43.9, 161.0], [44.0, 161.0], [44.1, 162.0], [44.2, 163.0], [44.3, 164.0], [44.4, 165.0], [44.5, 166.0], [44.6, 167.0], [44.7, 167.0], [44.8, 169.0], [44.9, 170.0], [45.0, 171.0], [45.1, 171.0], [45.2, 172.0], [45.3, 173.0], [45.4, 173.0], [45.5, 174.0], [45.6, 174.0], [45.7, 175.0], [45.8, 176.0], [45.9, 177.0], [46.0, 178.0], [46.1, 179.0], [46.2, 179.0], [46.3, 180.0], [46.4, 182.0], [46.5, 183.0], [46.6, 183.0], [46.7, 184.0], [46.8, 184.0], [46.9, 185.0], [47.0, 186.0], [47.1, 186.0], [47.2, 187.0], [47.3, 187.0], [47.4, 188.0], [47.5, 189.0], [47.6, 190.0], [47.7, 190.0], [47.8, 191.0], [47.9, 192.0], [48.0, 193.0], [48.1, 194.0], [48.2, 195.0], [48.3, 196.0], [48.4, 197.0], [48.5, 198.0], [48.6, 199.0], [48.7, 199.0], [48.8, 200.0], [48.9, 202.0], [49.0, 204.0], [49.1, 205.0], [49.2, 205.0], [49.3, 206.0], [49.4, 207.0], [49.5, 208.0], [49.6, 209.0], [49.7, 210.0], [49.8, 210.0], [49.9, 211.0], [50.0, 212.0], [50.1, 214.0], [50.2, 214.0], [50.3, 215.0], [50.4, 216.0], [50.5, 217.0], [50.6, 217.0], [50.7, 218.0], [50.8, 219.0], [50.9, 220.0], [51.0, 221.0], [51.1, 222.0], [51.2, 223.0], [51.3, 224.0], [51.4, 225.0], [51.5, 225.0], [51.6, 226.0], [51.7, 227.0], [51.8, 227.0], [51.9, 228.0], [52.0, 229.0], [52.1, 230.0], [52.2, 231.0], [52.3, 231.0], [52.4, 232.0], [52.5, 233.0], [52.6, 234.0], [52.7, 235.0], [52.8, 236.0], [52.9, 237.0], [53.0, 238.0], [53.1, 240.0], [53.2, 241.0], [53.3, 242.0], [53.4, 243.0], [53.5, 244.0], [53.6, 245.0], [53.7, 247.0], [53.8, 247.0], [53.9, 248.0], [54.0, 249.0], [54.1, 250.0], [54.2, 250.0], [54.3, 251.0], [54.4, 252.0], [54.5, 254.0], [54.6, 255.0], [54.7, 257.0], [54.8, 259.0], [54.9, 259.0], [55.0, 261.0], [55.1, 262.0], [55.2, 263.0], [55.3, 265.0], [55.4, 267.0], [55.5, 268.0], [55.6, 269.0], [55.7, 269.0], [55.8, 270.0], [55.9, 270.0], [56.0, 272.0], [56.1, 273.0], [56.2, 274.0], [56.3, 275.0], [56.4, 276.0], [56.5, 277.0], [56.6, 278.0], [56.7, 278.0], [56.8, 279.0], [56.9, 281.0], [57.0, 282.0], [57.1, 284.0], [57.2, 285.0], [57.3, 286.0], [57.4, 287.0], [57.5, 289.0], [57.6, 290.0], [57.7, 291.0], [57.8, 292.0], [57.9, 294.0], [58.0, 295.0], [58.1, 295.0], [58.2, 297.0], [58.3, 298.0], [58.4, 299.0], [58.5, 300.0], [58.6, 301.0], [58.7, 302.0], [58.8, 303.0], [58.9, 304.0], [59.0, 305.0], [59.1, 305.0], [59.2, 306.0], [59.3, 308.0], [59.4, 309.0], [59.5, 310.0], [59.6, 312.0], [59.7, 312.0], [59.8, 314.0], [59.9, 314.0], [60.0, 315.0], [60.1, 317.0], [60.2, 318.0], [60.3, 319.0], [60.4, 320.0], [60.5, 321.0], [60.6, 322.0], [60.7, 323.0], [60.8, 324.0], [60.9, 324.0], [61.0, 326.0], [61.1, 327.0], [61.2, 328.0], [61.3, 329.0], [61.4, 330.0], [61.5, 330.0], [61.6, 331.0], [61.7, 331.0], [61.8, 332.0], [61.9, 333.0], [62.0, 334.0], [62.1, 335.0], [62.2, 336.0], [62.3, 337.0], [62.4, 338.0], [62.5, 339.0], [62.6, 340.0], [62.7, 342.0], [62.8, 342.0], [62.9, 344.0], [63.0, 345.0], [63.1, 346.0], [63.2, 348.0], [63.3, 349.0], [63.4, 351.0], [63.5, 351.0], [63.6, 353.0], [63.7, 354.0], [63.8, 356.0], [63.9, 357.0], [64.0, 357.0], [64.1, 359.0], [64.2, 360.0], [64.3, 361.0], [64.4, 362.0], [64.5, 363.0], [64.6, 364.0], [64.7, 365.0], [64.8, 366.0], [64.9, 366.0], [65.0, 367.0], [65.1, 368.0], [65.2, 369.0], [65.3, 371.0], [65.4, 373.0], [65.5, 374.0], [65.6, 375.0], [65.7, 376.0], [65.8, 378.0], [65.9, 378.0], [66.0, 379.0], [66.1, 381.0], [66.2, 382.0], [66.3, 383.0], [66.4, 384.0], [66.5, 386.0], [66.6, 387.0], [66.7, 388.0], [66.8, 390.0], [66.9, 391.0], [67.0, 392.0], [67.1, 394.0], [67.2, 396.0], [67.3, 398.0], [67.4, 399.0], [67.5, 400.0], [67.6, 402.0], [67.7, 403.0], [67.8, 406.0], [67.9, 407.0], [68.0, 408.0], [68.1, 410.0], [68.2, 411.0], [68.3, 412.0], [68.4, 413.0], [68.5, 414.0], [68.6, 415.0], [68.7, 417.0], [68.8, 418.0], [68.9, 420.0], [69.0, 422.0], [69.1, 423.0], [69.2, 425.0], [69.3, 427.0], [69.4, 428.0], [69.5, 428.0], [69.6, 431.0], [69.7, 432.0], [69.8, 432.0], [69.9, 435.0], [70.0, 435.0], [70.1, 436.0], [70.2, 438.0], [70.3, 438.0], [70.4, 439.0], [70.5, 440.0], [70.6, 443.0], [70.7, 443.0], [70.8, 444.0], [70.9, 446.0], [71.0, 446.0], [71.1, 448.0], [71.2, 450.0], [71.3, 450.0], [71.4, 452.0], [71.5, 454.0], [71.6, 455.0], [71.7, 455.0], [71.8, 457.0], [71.9, 458.0], [72.0, 459.0], [72.1, 460.0], [72.2, 462.0], [72.3, 463.0], [72.4, 464.0], [72.5, 466.0], [72.6, 467.0], [72.7, 469.0], [72.8, 470.0], [72.9, 471.0], [73.0, 472.0], [73.1, 473.0], [73.2, 476.0], [73.3, 477.0], [73.4, 478.0], [73.5, 480.0], [73.6, 480.0], [73.7, 482.0], [73.8, 482.0], [73.9, 483.0], [74.0, 483.0], [74.1, 484.0], [74.2, 484.0], [74.3, 485.0], [74.4, 486.0], [74.5, 486.0], [74.6, 487.0], [74.7, 488.0], [74.8, 489.0], [74.9, 490.0], [75.0, 490.0], [75.1, 491.0], [75.2, 492.0], [75.3, 492.0], [75.4, 493.0], [75.5, 493.0], [75.6, 494.0], [75.7, 495.0], [75.8, 496.0], [75.9, 496.0], [76.0, 497.0], [76.1, 498.0], [76.2, 500.0], [76.3, 500.0], [76.4, 501.0], [76.5, 502.0], [76.6, 504.0], [76.7, 504.0], [76.8, 505.0], [76.9, 506.0], [77.0, 507.0], [77.1, 508.0], [77.2, 509.0], [77.3, 509.0], [77.4, 510.0], [77.5, 511.0], [77.6, 512.0], [77.7, 513.0], [77.8, 514.0], [77.9, 515.0], [78.0, 515.0], [78.1, 516.0], [78.2, 517.0], [78.3, 518.0], [78.4, 520.0], [78.5, 521.0], [78.6, 522.0], [78.7, 523.0], [78.8, 524.0], [78.9, 525.0], [79.0, 525.0], [79.1, 526.0], [79.2, 527.0], [79.3, 527.0], [79.4, 529.0], [79.5, 531.0], [79.6, 532.0], [79.7, 533.0], [79.8, 534.0], [79.9, 535.0], [80.0, 536.0], [80.1, 538.0], [80.2, 539.0], [80.3, 540.0], [80.4, 540.0], [80.5, 541.0], [80.6, 543.0], [80.7, 545.0], [80.8, 545.0], [80.9, 546.0], [81.0, 548.0], [81.1, 551.0], [81.2, 552.0], [81.3, 552.0], [81.4, 554.0], [81.5, 555.0], [81.6, 556.0], [81.7, 556.0], [81.8, 557.0], [81.9, 559.0], [82.0, 560.0], [82.1, 561.0], [82.2, 565.0], [82.3, 566.0], [82.4, 568.0], [82.5, 569.0], [82.6, 572.0], [82.7, 574.0], [82.8, 574.0], [82.9, 575.0], [83.0, 576.0], [83.1, 577.0], [83.2, 578.0], [83.3, 580.0], [83.4, 581.0], [83.5, 583.0], [83.6, 585.0], [83.7, 587.0], [83.8, 589.0], [83.9, 589.0], [84.0, 591.0], [84.1, 593.0], [84.2, 594.0], [84.3, 596.0], [84.4, 597.0], [84.5, 599.0], [84.6, 600.0], [84.7, 601.0], [84.8, 605.0], [84.9, 607.0], [85.0, 610.0], [85.1, 611.0], [85.2, 614.0], [85.3, 616.0], [85.4, 617.0], [85.5, 621.0], [85.6, 623.0], [85.7, 625.0], [85.8, 627.0], [85.9, 629.0], [86.0, 630.0], [86.1, 634.0], [86.2, 636.0], [86.3, 638.0], [86.4, 640.0], [86.5, 643.0], [86.6, 644.0], [86.7, 645.0], [86.8, 648.0], [86.9, 648.0], [87.0, 652.0], [87.1, 654.0], [87.2, 655.0], [87.3, 657.0], [87.4, 661.0], [87.5, 663.0], [87.6, 666.0], [87.7, 668.0], [87.8, 671.0], [87.9, 674.0], [88.0, 676.0], [88.1, 677.0], [88.2, 679.0], [88.3, 682.0], [88.4, 683.0], [88.5, 686.0], [88.6, 688.0], [88.7, 692.0], [88.8, 698.0], [88.9, 699.0], [89.0, 701.0], [89.1, 703.0], [89.2, 704.0], [89.3, 706.0], [89.4, 709.0], [89.5, 710.0], [89.6, 712.0], [89.7, 714.0], [89.8, 716.0], [89.9, 717.0], [90.0, 722.0], [90.1, 725.0], [90.2, 727.0], [90.3, 729.0], [90.4, 732.0], [90.5, 734.0], [90.6, 737.0], [90.7, 738.0], [90.8, 743.0], [90.9, 748.0], [91.0, 753.0], [91.1, 757.0], [91.2, 760.0], [91.3, 763.0], [91.4, 765.0], [91.5, 768.0], [91.6, 770.0], [91.7, 774.0], [91.8, 777.0], [91.9, 779.0], [92.0, 780.0], [92.1, 782.0], [92.2, 786.0], [92.3, 789.0], [92.4, 794.0], [92.5, 802.0], [92.6, 807.0], [92.7, 810.0], [92.8, 812.0], [92.9, 815.0], [93.0, 817.0], [93.1, 820.0], [93.2, 827.0], [93.3, 832.0], [93.4, 833.0], [93.5, 836.0], [93.6, 842.0], [93.7, 851.0], [93.8, 856.0], [93.9, 866.0], [94.0, 871.0], [94.1, 877.0], [94.2, 880.0], [94.3, 882.0], [94.4, 886.0], [94.5, 892.0], [94.6, 897.0], [94.7, 901.0], [94.8, 906.0], [94.9, 908.0], [95.0, 915.0], [95.1, 922.0], [95.2, 924.0], [95.3, 932.0], [95.4, 936.0], [95.5, 942.0], [95.6, 947.0], [95.7, 952.0], [95.8, 957.0], [95.9, 964.0], [96.0, 972.0], [96.1, 979.0], [96.2, 988.0], [96.3, 1001.0], [96.4, 1011.0], [96.5, 1019.0], [96.6, 1026.0], [96.7, 1030.0], [96.8, 1039.0], [96.9, 1047.0], [97.0, 1053.0], [97.1, 1058.0], [97.2, 1072.0], [97.3, 1082.0], [97.4, 1090.0], [97.5, 1106.0], [97.6, 1111.0], [97.7, 1113.0], [97.8, 1122.0], [97.9, 1127.0], [98.0, 1131.0], [98.1, 1142.0], [98.2, 1151.0], [98.3, 1160.0], [98.4, 1169.0], [98.5, 1197.0], [98.6, 1219.0], [98.7, 1227.0], [98.8, 1239.0], [98.9, 1280.0], [99.0, 1303.0], [99.1, 1315.0], [99.2, 1337.0], [99.3, 1385.0], [99.4, 1406.0], [99.5, 1441.0], [99.6, 1462.0], [99.7, 1547.0], [99.8, 1592.0], [99.9, 1690.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 1564.0, "series": [{"data": [[0.0, 1564.0], [600.0, 225.0], [700.0, 186.0], [200.0, 504.0], [800.0, 111.0], [900.0, 85.0], [1000.0, 63.0], [1100.0, 56.0], [300.0, 466.0], [1200.0, 23.0], [1300.0, 19.0], [1400.0, 16.0], [1500.0, 7.0], [100.0, 965.0], [400.0, 455.0], [1600.0, 6.0], [1700.0, 3.0], [1800.0, 1.0], [500.0, 435.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1800.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 17.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 3961.0, "series": [{"data": [[0.0, 3961.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1212.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 17.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.897727272727275, "minX": 1.60422102E12, "maxY": 10.0, "series": [{"data": [[1.60422102E12, 9.989278752436654], [1.60422114E12, 10.0], [1.60422108E12, 10.0], [1.6042212E12, 9.897727272727275]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6042212E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 122.0, "minX": 1.0, "maxY": 886.0, "series": [{"data": [[4.0, 271.5], [8.0, 273.0], [2.0, 403.0], [1.0, 886.0], [9.0, 349.5], [10.0, 312.47933565083105], [5.0, 521.0], [6.0, 213.5], [3.0, 491.0], [7.0, 122.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.989210019267858, 312.59788053949984]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 3443.4333333333334, "minX": 1.60422102E12, "maxY": 6633493.6, "series": [{"data": [[1.60422102E12, 2795315.55], [1.60422114E12, 6020786.85], [1.60422108E12, 6633493.6], [1.6042212E12, 1462127.55]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60422102E12, 7706.233333333334], [1.60422114E12, 15429.983333333334], [1.60422108E12, 13188.983333333334], [1.6042212E12, 3443.4333333333334]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6042212E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 275.1471734892789, "minX": 1.60422102E12, "maxY": 350.16098707403063, "series": [{"data": [[1.60422102E12, 275.1471734892789], [1.60422114E12, 296.51088031651784], [1.60422108E12, 350.16098707403063], [1.6042212E12, 328.55227272727245]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6042212E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 273.8606237816765, "minX": 1.60422102E12, "maxY": 348.4077555816681, "series": [{"data": [[1.60422102E12, 273.8606237816765], [1.60422114E12, 295.4930761622156], [1.60422108E12, 348.4077555816681], [1.6042212E12, 327.42272727272683]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6042212E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.00939663699307618, "minX": 1.60422102E12, "maxY": 0.09259259259259267, "series": [{"data": [[1.60422102E12, 0.09259259259259267], [1.60422114E12, 0.00939663699307618], [1.60422108E12, 0.024089306698002324], [1.6042212E12, 0.013636363636363625]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6042212E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 5.0, "minX": 1.60422102E12, "maxY": 1882.0, "series": [{"data": [[1.60422102E12, 1490.0], [1.60422114E12, 1796.0], [1.60422108E12, 1882.0], [1.6042212E12, 1647.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60422102E12, 13.0], [1.60422114E12, 11.0], [1.60422108E12, 11.0], [1.6042212E12, 11.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60422102E12, 13.167300097942352], [1.60422114E12, 12.0], [1.60422108E12, 11.0], [1.6042212E12, 11.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60422102E12, 13.0], [1.60422114E12, 11.218499758839606], [1.60422108E12, 11.0], [1.6042212E12, 11.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60422102E12, 6.0], [1.60422114E12, 5.0], [1.60422108E12, 5.0], [1.6042212E12, 11.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60422102E12, 222.5], [1.60422114E12, 179.5], [1.60422108E12, 268.5], [1.6042212E12, 187.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6042212E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 16.0, "minX": 4.0, "maxY": 799.0, "series": [{"data": [[4.0, 277.0], [10.0, 387.0], [12.0, 799.0], [13.0, 539.0], [14.0, 541.5], [15.0, 629.0], [16.0, 491.5], [17.0, 488.0], [18.0, 481.5], [19.0, 519.5], [20.0, 463.0], [21.0, 446.0], [22.0, 445.5], [23.0, 357.0], [24.0, 372.0], [25.0, 367.5], [26.0, 293.0], [27.0, 273.0], [28.0, 309.5], [29.0, 326.0], [30.0, 168.5], [31.0, 269.0], [32.0, 276.5], [33.0, 214.0], [35.0, 351.0], [34.0, 191.0], [37.0, 195.0], [36.0, 230.5], [38.0, 228.0], [39.0, 244.0], [40.0, 177.0], [43.0, 26.0], [45.0, 45.0], [44.0, 140.0], [46.0, 149.5], [47.0, 163.0], [48.0, 121.5], [49.0, 105.0], [51.0, 79.0], [50.0, 109.5], [52.0, 24.0], [54.0, 96.5], [57.0, 16.0], [61.0, 94.0], [62.0, 58.5], [63.0, 106.0], [67.0, 20.0], [69.0, 97.0], [74.0, 109.0], [73.0, 36.0], [76.0, 43.0], [81.0, 84.0], [93.0, 26.0], [108.0, 38.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 108.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 15.0, "minX": 4.0, "maxY": 796.5, "series": [{"data": [[4.0, 273.5], [10.0, 386.0], [12.0, 796.5], [13.0, 536.0], [14.0, 540.0], [15.0, 625.5], [16.0, 485.0], [17.0, 483.0], [18.0, 479.5], [19.0, 516.5], [20.0, 461.0], [21.0, 446.0], [22.0, 445.0], [23.0, 356.0], [24.0, 369.5], [25.0, 366.0], [26.0, 291.0], [27.0, 272.5], [28.0, 308.0], [29.0, 324.0], [30.0, 167.0], [31.0, 269.0], [32.0, 276.0], [33.0, 213.0], [35.0, 351.0], [34.0, 190.0], [37.0, 193.0], [36.0, 230.5], [38.0, 228.0], [39.0, 244.0], [40.0, 177.0], [43.0, 26.0], [45.0, 45.0], [44.0, 139.5], [46.0, 147.5], [47.0, 161.0], [48.0, 120.5], [49.0, 105.0], [51.0, 78.0], [50.0, 109.5], [52.0, 24.0], [54.0, 96.0], [57.0, 15.0], [61.0, 91.0], [62.0, 58.0], [63.0, 106.0], [67.0, 20.0], [69.0, 96.0], [74.0, 108.5], [73.0, 36.0], [76.0, 43.0], [81.0, 83.0], [93.0, 26.0], [108.0, 38.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 108.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 7.166666666666667, "minX": 1.60422102E12, "maxY": 33.71666666666667, "series": [{"data": [[1.60422102E12, 17.266666666666666], [1.60422114E12, 33.71666666666667], [1.60422108E12, 28.35], [1.6042212E12, 7.166666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6042212E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 7.333333333333333, "minX": 1.60422102E12, "maxY": 33.7, "series": [{"data": [[1.60422102E12, 17.1], [1.60422114E12, 33.7], [1.60422108E12, 28.366666666666667], [1.6042212E12, 7.333333333333333]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6042212E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 7.333333333333333, "minX": 1.60422102E12, "maxY": 33.7, "series": [{"data": [[1.60422102E12, 17.1], [1.60422114E12, 33.7], [1.60422108E12, 28.366666666666667], [1.6042212E12, 7.333333333333333]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6042212E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 7.333333333333333, "minX": 1.60422102E12, "maxY": 33.7, "series": [{"data": [[1.60422102E12, 17.1], [1.60422114E12, 33.7], [1.60422108E12, 28.366666666666667], [1.6042212E12, 7.333333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6042212E12, "title": "Total Transactions Per Second"}},
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

