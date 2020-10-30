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
        data: {"result": {"minY": 4.0, "minX": 0.0, "maxY": 2257.0, "series": [{"data": [[0.0, 4.0], [0.1, 5.0], [0.2, 6.0], [0.3, 7.0], [0.4, 9.0], [0.5, 10.0], [0.6, 11.0], [0.7, 11.0], [0.8, 12.0], [0.9, 12.0], [1.0, 12.0], [1.1, 12.0], [1.2, 12.0], [1.3, 13.0], [1.4, 13.0], [1.5, 14.0], [1.6, 14.0], [1.7, 14.0], [1.8, 15.0], [1.9, 15.0], [2.0, 15.0], [2.1, 15.0], [2.2, 15.0], [2.3, 16.0], [2.4, 16.0], [2.5, 17.0], [2.6, 17.0], [2.7, 17.0], [2.8, 17.0], [2.9, 18.0], [3.0, 18.0], [3.1, 18.0], [3.2, 18.0], [3.3, 19.0], [3.4, 19.0], [3.5, 19.0], [3.6, 20.0], [3.7, 20.0], [3.8, 20.0], [3.9, 20.0], [4.0, 20.0], [4.1, 20.0], [4.2, 20.0], [4.3, 20.0], [4.4, 21.0], [4.5, 21.0], [4.6, 21.0], [4.7, 21.0], [4.8, 21.0], [4.9, 21.0], [5.0, 21.0], [5.1, 21.0], [5.2, 22.0], [5.3, 22.0], [5.4, 22.0], [5.5, 22.0], [5.6, 22.0], [5.7, 22.0], [5.8, 23.0], [5.9, 23.0], [6.0, 23.0], [6.1, 23.0], [6.2, 23.0], [6.3, 23.0], [6.4, 24.0], [6.5, 24.0], [6.6, 24.0], [6.7, 24.0], [6.8, 24.0], [6.9, 24.0], [7.0, 25.0], [7.1, 25.0], [7.2, 25.0], [7.3, 25.0], [7.4, 25.0], [7.5, 25.0], [7.6, 25.0], [7.7, 26.0], [7.8, 26.0], [7.9, 26.0], [8.0, 26.0], [8.1, 26.0], [8.2, 26.0], [8.3, 27.0], [8.4, 27.0], [8.5, 27.0], [8.6, 27.0], [8.7, 27.0], [8.8, 28.0], [8.9, 28.0], [9.0, 28.0], [9.1, 28.0], [9.2, 28.0], [9.3, 28.0], [9.4, 29.0], [9.5, 29.0], [9.6, 29.0], [9.7, 29.0], [9.8, 29.0], [9.9, 29.0], [10.0, 30.0], [10.1, 30.0], [10.2, 30.0], [10.3, 30.0], [10.4, 31.0], [10.5, 31.0], [10.6, 31.0], [10.7, 31.0], [10.8, 31.0], [10.9, 32.0], [11.0, 32.0], [11.1, 32.0], [11.2, 32.0], [11.3, 32.0], [11.4, 33.0], [11.5, 33.0], [11.6, 33.0], [11.7, 33.0], [11.8, 33.0], [11.9, 34.0], [12.0, 34.0], [12.1, 34.0], [12.2, 34.0], [12.3, 35.0], [12.4, 35.0], [12.5, 35.0], [12.6, 35.0], [12.7, 35.0], [12.8, 35.0], [12.9, 36.0], [13.0, 36.0], [13.1, 36.0], [13.2, 36.0], [13.3, 37.0], [13.4, 37.0], [13.5, 37.0], [13.6, 37.0], [13.7, 37.0], [13.8, 38.0], [13.9, 38.0], [14.0, 38.0], [14.1, 38.0], [14.2, 39.0], [14.3, 39.0], [14.4, 39.0], [14.5, 39.0], [14.6, 39.0], [14.7, 40.0], [14.8, 40.0], [14.9, 40.0], [15.0, 40.0], [15.1, 41.0], [15.2, 41.0], [15.3, 41.0], [15.4, 41.0], [15.5, 41.0], [15.6, 41.0], [15.7, 42.0], [15.8, 42.0], [15.9, 42.0], [16.0, 42.0], [16.1, 43.0], [16.2, 43.0], [16.3, 43.0], [16.4, 44.0], [16.5, 44.0], [16.6, 44.0], [16.7, 44.0], [16.8, 44.0], [16.9, 45.0], [17.0, 45.0], [17.1, 45.0], [17.2, 45.0], [17.3, 46.0], [17.4, 46.0], [17.5, 46.0], [17.6, 46.0], [17.7, 46.0], [17.8, 47.0], [17.9, 47.0], [18.0, 47.0], [18.1, 48.0], [18.2, 48.0], [18.3, 48.0], [18.4, 49.0], [18.5, 49.0], [18.6, 49.0], [18.7, 49.0], [18.8, 50.0], [18.9, 50.0], [19.0, 50.0], [19.1, 51.0], [19.2, 51.0], [19.3, 51.0], [19.4, 51.0], [19.5, 52.0], [19.6, 52.0], [19.7, 52.0], [19.8, 53.0], [19.9, 53.0], [20.0, 53.0], [20.1, 54.0], [20.2, 54.0], [20.3, 54.0], [20.4, 54.0], [20.5, 54.0], [20.6, 55.0], [20.7, 55.0], [20.8, 55.0], [20.9, 56.0], [21.0, 56.0], [21.1, 56.0], [21.2, 57.0], [21.3, 57.0], [21.4, 58.0], [21.5, 58.0], [21.6, 59.0], [21.7, 59.0], [21.8, 59.0], [21.9, 59.0], [22.0, 60.0], [22.1, 60.0], [22.2, 60.0], [22.3, 61.0], [22.4, 61.0], [22.5, 61.0], [22.6, 62.0], [22.7, 62.0], [22.8, 63.0], [22.9, 63.0], [23.0, 63.0], [23.1, 63.0], [23.2, 64.0], [23.3, 64.0], [23.4, 64.0], [23.5, 65.0], [23.6, 65.0], [23.7, 65.0], [23.8, 66.0], [23.9, 66.0], [24.0, 66.0], [24.1, 66.0], [24.2, 67.0], [24.3, 67.0], [24.4, 68.0], [24.5, 68.0], [24.6, 69.0], [24.7, 70.0], [24.8, 70.0], [24.9, 71.0], [25.0, 71.0], [25.1, 72.0], [25.2, 72.0], [25.3, 73.0], [25.4, 74.0], [25.5, 74.0], [25.6, 75.0], [25.7, 75.0], [25.8, 76.0], [25.9, 77.0], [26.0, 77.0], [26.1, 78.0], [26.2, 78.0], [26.3, 79.0], [26.4, 79.0], [26.5, 80.0], [26.6, 80.0], [26.7, 81.0], [26.8, 81.0], [26.9, 82.0], [27.0, 82.0], [27.1, 83.0], [27.2, 83.0], [27.3, 84.0], [27.4, 84.0], [27.5, 85.0], [27.6, 86.0], [27.7, 86.0], [27.8, 87.0], [27.9, 87.0], [28.0, 88.0], [28.1, 88.0], [28.2, 89.0], [28.3, 89.0], [28.4, 90.0], [28.5, 91.0], [28.6, 91.0], [28.7, 91.0], [28.8, 93.0], [28.9, 93.0], [29.0, 94.0], [29.1, 94.0], [29.2, 95.0], [29.3, 95.0], [29.4, 96.0], [29.5, 97.0], [29.6, 97.0], [29.7, 97.0], [29.8, 98.0], [29.9, 98.0], [30.0, 99.0], [30.1, 100.0], [30.2, 101.0], [30.3, 102.0], [30.4, 102.0], [30.5, 103.0], [30.6, 104.0], [30.7, 104.0], [30.8, 105.0], [30.9, 105.0], [31.0, 106.0], [31.1, 106.0], [31.2, 107.0], [31.3, 108.0], [31.4, 108.0], [31.5, 109.0], [31.6, 110.0], [31.7, 110.0], [31.8, 110.0], [31.9, 111.0], [32.0, 111.0], [32.1, 111.0], [32.2, 112.0], [32.3, 112.0], [32.4, 112.0], [32.5, 112.0], [32.6, 112.0], [32.7, 112.0], [32.8, 113.0], [32.9, 113.0], [33.0, 113.0], [33.1, 113.0], [33.2, 114.0], [33.3, 114.0], [33.4, 114.0], [33.5, 114.0], [33.6, 115.0], [33.7, 115.0], [33.8, 115.0], [33.9, 115.0], [34.0, 116.0], [34.1, 116.0], [34.2, 116.0], [34.3, 116.0], [34.4, 116.0], [34.5, 117.0], [34.6, 117.0], [34.7, 117.0], [34.8, 118.0], [34.9, 118.0], [35.0, 119.0], [35.1, 119.0], [35.2, 119.0], [35.3, 119.0], [35.4, 120.0], [35.5, 120.0], [35.6, 120.0], [35.7, 121.0], [35.8, 121.0], [35.9, 121.0], [36.0, 122.0], [36.1, 122.0], [36.2, 122.0], [36.3, 123.0], [36.4, 123.0], [36.5, 123.0], [36.6, 123.0], [36.7, 124.0], [36.8, 124.0], [36.9, 124.0], [37.0, 125.0], [37.1, 125.0], [37.2, 126.0], [37.3, 126.0], [37.4, 126.0], [37.5, 127.0], [37.6, 127.0], [37.7, 128.0], [37.8, 128.0], [37.9, 128.0], [38.0, 129.0], [38.1, 129.0], [38.2, 130.0], [38.3, 130.0], [38.4, 130.0], [38.5, 131.0], [38.6, 132.0], [38.7, 132.0], [38.8, 132.0], [38.9, 133.0], [39.0, 133.0], [39.1, 134.0], [39.2, 134.0], [39.3, 135.0], [39.4, 136.0], [39.5, 136.0], [39.6, 137.0], [39.7, 138.0], [39.8, 139.0], [39.9, 140.0], [40.0, 140.0], [40.1, 141.0], [40.2, 141.0], [40.3, 142.0], [40.4, 143.0], [40.5, 144.0], [40.6, 144.0], [40.7, 145.0], [40.8, 145.0], [40.9, 146.0], [41.0, 147.0], [41.1, 147.0], [41.2, 148.0], [41.3, 149.0], [41.4, 149.0], [41.5, 151.0], [41.6, 152.0], [41.7, 152.0], [41.8, 153.0], [41.9, 153.0], [42.0, 154.0], [42.1, 155.0], [42.2, 156.0], [42.3, 157.0], [42.4, 158.0], [42.5, 159.0], [42.6, 160.0], [42.7, 161.0], [42.8, 161.0], [42.9, 162.0], [43.0, 163.0], [43.1, 164.0], [43.2, 165.0], [43.3, 165.0], [43.4, 166.0], [43.5, 166.0], [43.6, 167.0], [43.7, 168.0], [43.8, 168.0], [43.9, 169.0], [44.0, 169.0], [44.1, 170.0], [44.2, 171.0], [44.3, 172.0], [44.4, 173.0], [44.5, 174.0], [44.6, 174.0], [44.7, 175.0], [44.8, 176.0], [44.9, 177.0], [45.0, 177.0], [45.1, 178.0], [45.2, 178.0], [45.3, 179.0], [45.4, 181.0], [45.5, 181.0], [45.6, 183.0], [45.7, 184.0], [45.8, 185.0], [45.9, 186.0], [46.0, 187.0], [46.1, 188.0], [46.2, 189.0], [46.3, 190.0], [46.4, 191.0], [46.5, 191.0], [46.6, 192.0], [46.7, 193.0], [46.8, 194.0], [46.9, 195.0], [47.0, 196.0], [47.1, 196.0], [47.2, 197.0], [47.3, 198.0], [47.4, 198.0], [47.5, 200.0], [47.6, 201.0], [47.7, 202.0], [47.8, 203.0], [47.9, 203.0], [48.0, 204.0], [48.1, 205.0], [48.2, 207.0], [48.3, 207.0], [48.4, 208.0], [48.5, 209.0], [48.6, 211.0], [48.7, 211.0], [48.8, 212.0], [48.9, 212.0], [49.0, 213.0], [49.1, 213.0], [49.2, 214.0], [49.3, 215.0], [49.4, 216.0], [49.5, 217.0], [49.6, 217.0], [49.7, 218.0], [49.8, 219.0], [49.9, 220.0], [50.0, 220.0], [50.1, 222.0], [50.2, 222.0], [50.3, 223.0], [50.4, 223.0], [50.5, 224.0], [50.6, 224.0], [50.7, 224.0], [50.8, 225.0], [50.9, 226.0], [51.0, 226.0], [51.1, 227.0], [51.2, 227.0], [51.3, 228.0], [51.4, 229.0], [51.5, 230.0], [51.6, 231.0], [51.7, 232.0], [51.8, 232.0], [51.9, 232.0], [52.0, 233.0], [52.1, 234.0], [52.2, 235.0], [52.3, 235.0], [52.4, 236.0], [52.5, 237.0], [52.6, 238.0], [52.7, 240.0], [52.8, 241.0], [52.9, 242.0], [53.0, 243.0], [53.1, 244.0], [53.2, 245.0], [53.3, 246.0], [53.4, 247.0], [53.5, 248.0], [53.6, 249.0], [53.7, 250.0], [53.8, 250.0], [53.9, 251.0], [54.0, 253.0], [54.1, 255.0], [54.2, 255.0], [54.3, 256.0], [54.4, 257.0], [54.5, 258.0], [54.6, 260.0], [54.7, 261.0], [54.8, 263.0], [54.9, 264.0], [55.0, 265.0], [55.1, 266.0], [55.2, 267.0], [55.3, 269.0], [55.4, 270.0], [55.5, 272.0], [55.6, 274.0], [55.7, 275.0], [55.8, 275.0], [55.9, 276.0], [56.0, 278.0], [56.1, 281.0], [56.2, 281.0], [56.3, 282.0], [56.4, 283.0], [56.5, 284.0], [56.6, 284.0], [56.7, 286.0], [56.8, 287.0], [56.9, 287.0], [57.0, 289.0], [57.1, 289.0], [57.2, 290.0], [57.3, 291.0], [57.4, 293.0], [57.5, 294.0], [57.6, 295.0], [57.7, 296.0], [57.8, 298.0], [57.9, 299.0], [58.0, 299.0], [58.1, 301.0], [58.2, 302.0], [58.3, 303.0], [58.4, 305.0], [58.5, 307.0], [58.6, 307.0], [58.7, 309.0], [58.8, 309.0], [58.9, 310.0], [59.0, 312.0], [59.1, 314.0], [59.2, 315.0], [59.3, 315.0], [59.4, 316.0], [59.5, 317.0], [59.6, 318.0], [59.7, 319.0], [59.8, 320.0], [59.9, 321.0], [60.0, 322.0], [60.1, 323.0], [60.2, 324.0], [60.3, 325.0], [60.4, 326.0], [60.5, 328.0], [60.6, 330.0], [60.7, 331.0], [60.8, 331.0], [60.9, 332.0], [61.0, 333.0], [61.1, 334.0], [61.2, 335.0], [61.3, 336.0], [61.4, 337.0], [61.5, 339.0], [61.6, 341.0], [61.7, 341.0], [61.8, 342.0], [61.9, 343.0], [62.0, 345.0], [62.1, 346.0], [62.2, 347.0], [62.3, 348.0], [62.4, 349.0], [62.5, 350.0], [62.6, 351.0], [62.7, 352.0], [62.8, 353.0], [62.9, 355.0], [63.0, 356.0], [63.1, 357.0], [63.2, 358.0], [63.3, 359.0], [63.4, 360.0], [63.5, 362.0], [63.6, 362.0], [63.7, 364.0], [63.8, 364.0], [63.9, 366.0], [64.0, 368.0], [64.1, 369.0], [64.2, 370.0], [64.3, 372.0], [64.4, 373.0], [64.5, 373.0], [64.6, 374.0], [64.7, 375.0], [64.8, 376.0], [64.9, 377.0], [65.0, 377.0], [65.1, 379.0], [65.2, 380.0], [65.3, 381.0], [65.4, 383.0], [65.5, 384.0], [65.6, 385.0], [65.7, 386.0], [65.8, 387.0], [65.9, 388.0], [66.0, 389.0], [66.1, 390.0], [66.2, 391.0], [66.3, 392.0], [66.4, 394.0], [66.5, 395.0], [66.6, 396.0], [66.7, 396.0], [66.8, 397.0], [66.9, 399.0], [67.0, 400.0], [67.1, 401.0], [67.2, 402.0], [67.3, 403.0], [67.4, 404.0], [67.5, 405.0], [67.6, 406.0], [67.7, 406.0], [67.8, 407.0], [67.9, 408.0], [68.0, 410.0], [68.1, 410.0], [68.2, 413.0], [68.3, 413.0], [68.4, 414.0], [68.5, 415.0], [68.6, 417.0], [68.7, 418.0], [68.8, 419.0], [68.9, 421.0], [69.0, 422.0], [69.1, 423.0], [69.2, 424.0], [69.3, 425.0], [69.4, 426.0], [69.5, 427.0], [69.6, 428.0], [69.7, 430.0], [69.8, 431.0], [69.9, 432.0], [70.0, 433.0], [70.1, 434.0], [70.2, 436.0], [70.3, 436.0], [70.4, 438.0], [70.5, 439.0], [70.6, 440.0], [70.7, 442.0], [70.8, 442.0], [70.9, 443.0], [71.0, 444.0], [71.1, 445.0], [71.2, 446.0], [71.3, 448.0], [71.4, 449.0], [71.5, 449.0], [71.6, 451.0], [71.7, 452.0], [71.8, 453.0], [71.9, 453.0], [72.0, 455.0], [72.1, 456.0], [72.2, 457.0], [72.3, 458.0], [72.4, 459.0], [72.5, 461.0], [72.6, 463.0], [72.7, 464.0], [72.8, 464.0], [72.9, 465.0], [73.0, 467.0], [73.1, 468.0], [73.2, 469.0], [73.3, 470.0], [73.4, 472.0], [73.5, 473.0], [73.6, 474.0], [73.7, 476.0], [73.8, 477.0], [73.9, 479.0], [74.0, 480.0], [74.1, 482.0], [74.2, 483.0], [74.3, 485.0], [74.4, 487.0], [74.5, 488.0], [74.6, 488.0], [74.7, 490.0], [74.8, 491.0], [74.9, 493.0], [75.0, 494.0], [75.1, 495.0], [75.2, 495.0], [75.3, 497.0], [75.4, 497.0], [75.5, 498.0], [75.6, 498.0], [75.7, 499.0], [75.8, 501.0], [75.9, 502.0], [76.0, 502.0], [76.1, 503.0], [76.2, 504.0], [76.3, 505.0], [76.4, 506.0], [76.5, 507.0], [76.6, 508.0], [76.7, 508.0], [76.8, 509.0], [76.9, 510.0], [77.0, 510.0], [77.1, 511.0], [77.2, 511.0], [77.3, 512.0], [77.4, 513.0], [77.5, 513.0], [77.6, 513.0], [77.7, 514.0], [77.8, 515.0], [77.9, 516.0], [78.0, 517.0], [78.1, 518.0], [78.2, 518.0], [78.3, 519.0], [78.4, 520.0], [78.5, 520.0], [78.6, 521.0], [78.7, 522.0], [78.8, 523.0], [78.9, 524.0], [79.0, 525.0], [79.1, 525.0], [79.2, 526.0], [79.3, 527.0], [79.4, 528.0], [79.5, 529.0], [79.6, 530.0], [79.7, 531.0], [79.8, 532.0], [79.9, 533.0], [80.0, 534.0], [80.1, 535.0], [80.2, 535.0], [80.3, 536.0], [80.4, 537.0], [80.5, 538.0], [80.6, 540.0], [80.7, 541.0], [80.8, 542.0], [80.9, 542.0], [81.0, 544.0], [81.1, 544.0], [81.2, 546.0], [81.3, 548.0], [81.4, 549.0], [81.5, 550.0], [81.6, 553.0], [81.7, 554.0], [81.8, 556.0], [81.9, 556.0], [82.0, 558.0], [82.1, 559.0], [82.2, 561.0], [82.3, 561.0], [82.4, 562.0], [82.5, 564.0], [82.6, 565.0], [82.7, 566.0], [82.8, 567.0], [82.9, 569.0], [83.0, 570.0], [83.1, 571.0], [83.2, 571.0], [83.3, 572.0], [83.4, 573.0], [83.5, 574.0], [83.6, 576.0], [83.7, 577.0], [83.8, 578.0], [83.9, 580.0], [84.0, 582.0], [84.1, 583.0], [84.2, 584.0], [84.3, 586.0], [84.4, 588.0], [84.5, 589.0], [84.6, 590.0], [84.7, 592.0], [84.8, 593.0], [84.9, 595.0], [85.0, 596.0], [85.1, 598.0], [85.2, 599.0], [85.3, 600.0], [85.4, 601.0], [85.5, 602.0], [85.6, 605.0], [85.7, 607.0], [85.8, 608.0], [85.9, 611.0], [86.0, 613.0], [86.1, 616.0], [86.2, 618.0], [86.3, 619.0], [86.4, 621.0], [86.5, 622.0], [86.6, 623.0], [86.7, 625.0], [86.8, 627.0], [86.9, 628.0], [87.0, 630.0], [87.1, 631.0], [87.2, 632.0], [87.3, 633.0], [87.4, 634.0], [87.5, 635.0], [87.6, 636.0], [87.7, 638.0], [87.8, 639.0], [87.9, 641.0], [88.0, 644.0], [88.1, 645.0], [88.2, 646.0], [88.3, 650.0], [88.4, 654.0], [88.5, 656.0], [88.6, 657.0], [88.7, 659.0], [88.8, 663.0], [88.9, 666.0], [89.0, 668.0], [89.1, 669.0], [89.2, 672.0], [89.3, 675.0], [89.4, 678.0], [89.5, 681.0], [89.6, 683.0], [89.7, 686.0], [89.8, 689.0], [89.9, 693.0], [90.0, 695.0], [90.1, 696.0], [90.2, 699.0], [90.3, 701.0], [90.4, 702.0], [90.5, 705.0], [90.6, 707.0], [90.7, 709.0], [90.8, 710.0], [90.9, 713.0], [91.0, 717.0], [91.1, 719.0], [91.2, 722.0], [91.3, 723.0], [91.4, 725.0], [91.5, 726.0], [91.6, 730.0], [91.7, 734.0], [91.8, 735.0], [91.9, 737.0], [92.0, 742.0], [92.1, 744.0], [92.2, 750.0], [92.3, 753.0], [92.4, 754.0], [92.5, 756.0], [92.6, 758.0], [92.7, 762.0], [92.8, 765.0], [92.9, 768.0], [93.0, 772.0], [93.1, 775.0], [93.2, 781.0], [93.3, 787.0], [93.4, 788.0], [93.5, 790.0], [93.6, 793.0], [93.7, 797.0], [93.8, 800.0], [93.9, 803.0], [94.0, 806.0], [94.1, 812.0], [94.2, 815.0], [94.3, 819.0], [94.4, 821.0], [94.5, 829.0], [94.6, 832.0], [94.7, 840.0], [94.8, 846.0], [94.9, 857.0], [95.0, 861.0], [95.1, 867.0], [95.2, 874.0], [95.3, 878.0], [95.4, 883.0], [95.5, 892.0], [95.6, 901.0], [95.7, 905.0], [95.8, 910.0], [95.9, 915.0], [96.0, 924.0], [96.1, 934.0], [96.2, 936.0], [96.3, 943.0], [96.4, 947.0], [96.5, 952.0], [96.6, 962.0], [96.7, 972.0], [96.8, 977.0], [96.9, 988.0], [97.0, 996.0], [97.1, 1004.0], [97.2, 1021.0], [97.3, 1035.0], [97.4, 1046.0], [97.5, 1055.0], [97.6, 1065.0], [97.7, 1073.0], [97.8, 1087.0], [97.9, 1100.0], [98.0, 1115.0], [98.1, 1133.0], [98.2, 1144.0], [98.3, 1155.0], [98.4, 1184.0], [98.5, 1202.0], [98.6, 1216.0], [98.7, 1235.0], [98.8, 1256.0], [98.9, 1267.0], [99.0, 1291.0], [99.1, 1328.0], [99.2, 1356.0], [99.3, 1411.0], [99.4, 1468.0], [99.5, 1539.0], [99.6, 1586.0], [99.7, 1665.0], [99.8, 1776.0], [99.9, 1860.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 1561.0, "series": [{"data": [[0.0, 1561.0], [2200.0, 1.0], [600.0, 257.0], [700.0, 183.0], [200.0, 547.0], [800.0, 95.0], [900.0, 75.0], [1000.0, 45.0], [1100.0, 31.0], [300.0, 462.0], [1200.0, 28.0], [1300.0, 10.0], [1400.0, 12.0], [1500.0, 11.0], [400.0, 457.0], [100.0, 903.0], [1600.0, 3.0], [1700.0, 4.0], [1800.0, 7.0], [1900.0, 2.0], [500.0, 496.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 2200.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 28.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 3931.0, "series": [{"data": [[0.0, 3931.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1231.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 28.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.93589743589744, "minX": 1.60405026E12, "maxY": 10.0, "series": [{"data": [[1.60405032E12, 10.0], [1.60405038E12, 10.0], [1.60405026E12, 10.0], [1.60405044E12, 9.93589743589744]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60405044E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 111.0, "minX": 1.0, "maxY": 1316.0, "series": [{"data": [[8.0, 168.0], [4.0, 499.0], [2.0, 1216.0], [1.0, 1316.0], [9.0, 111.0], [10.0, 311.0557807373092], [5.0, 400.0], [6.0, 763.0], [3.0, 250.0], [7.0, 276.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.991329479768785, 311.47957610789956]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 5034.583333333333, "minX": 1.60405026E12, "maxY": 6382378.133333334, "series": [{"data": [[1.60405032E12, 6382378.133333334], [1.60405038E12, 6156587.366666666], [1.60405026E12, 2156273.816666667], [1.60405044E12, 2216484.316666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60405032E12, 14607.483333333334], [1.60405038E12, 14632.066666666668], [1.60405026E12, 5034.583333333333], [1.60405044E12, 5494.5]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60405044E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 297.4415954415954, "minX": 1.60405026E12, "maxY": 316.6532137518677, "series": [{"data": [[1.60405032E12, 314.8637803590282], [1.60405038E12, 311.47116883116934], [1.60405026E12, 316.6532137518677], [1.60405044E12, 297.4415954415954]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60405044E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 296.3618233618231, "minX": 1.60405026E12, "maxY": 315.1225710014947, "series": [{"data": [[1.60405032E12, 313.3352692713831], [1.60405038E12, 310.30181818181825], [1.60405026E12, 315.1225710014947], [1.60405044E12, 296.3618233618231]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60405044E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.008547008547008536, "minX": 1.60405026E12, "maxY": 0.13751868460388622, "series": [{"data": [[1.60405032E12, 0.011615628299894425], [1.60405038E12, 0.008831168831168844], [1.60405026E12, 0.13751868460388622], [1.60405044E12, 0.008547008547008536]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60405044E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 4.0, "minX": 1.60405026E12, "maxY": 2257.0, "series": [{"data": [[1.60405032E12, 2257.0], [1.60405038E12, 1803.0], [1.60405026E12, 1586.0], [1.60405044E12, 1971.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60405032E12, 11.054999548196793], [1.60405038E12, 11.0], [1.60405026E12, 18.0], [1.60405044E12, 14.326999832391738]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60405032E12, 12.0], [1.60405038E12, 12.0], [1.60405026E12, 18.0], [1.60405044E12, 14.959700067043304]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60405032E12, 12.0], [1.60405038E12, 11.296999770402905], [1.60405026E12, 18.0], [1.60405044E12, 14.678499916195868]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60405032E12, 6.0], [1.60405038E12, 4.0], [1.60405026E12, 8.0], [1.60405044E12, 5.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60405032E12, 218.0], [1.60405038E12, 224.0], [1.60405026E12, 274.0], [1.60405044E12, 162.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60405044E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 29.0, "minX": 1.0, "maxY": 1266.0, "series": [{"data": [[2.0, 1266.0], [15.0, 520.0], [16.0, 533.5], [17.0, 532.5], [18.0, 516.0], [19.0, 460.5], [20.0, 495.0], [21.0, 444.0], [22.0, 400.0], [23.0, 381.0], [24.0, 389.5], [25.0, 387.0], [26.0, 328.0], [27.0, 316.0], [28.0, 323.5], [29.0, 365.0], [30.0, 246.5], [31.0, 321.5], [33.0, 315.0], [32.0, 269.0], [34.0, 203.5], [35.0, 94.0], [37.0, 201.5], [36.0, 240.5], [39.0, 205.0], [38.0, 182.5], [40.0, 131.5], [41.0, 95.5], [43.0, 146.0], [44.0, 54.0], [45.0, 91.0], [47.0, 130.5], [48.0, 47.5], [49.0, 153.5], [51.0, 112.0], [50.0, 141.0], [52.0, 44.5], [55.0, 60.0], [58.0, 117.5], [60.0, 89.0], [61.0, 29.0], [66.0, 62.5], [69.0, 65.0], [71.0, 102.0], [77.0, 74.0], [76.0, 92.0], [100.0, 29.5], [107.0, 44.0], [1.0, 734.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 107.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 29.0, "minX": 1.0, "maxY": 1261.0, "series": [{"data": [[2.0, 1261.0], [15.0, 516.0], [16.0, 529.5], [17.0, 525.0], [18.0, 507.5], [19.0, 458.0], [20.0, 489.5], [21.0, 442.0], [22.0, 394.0], [23.0, 380.5], [24.0, 389.0], [25.0, 387.0], [26.0, 328.0], [27.0, 316.0], [28.0, 322.0], [29.0, 364.0], [30.0, 246.0], [31.0, 321.0], [33.0, 313.0], [32.0, 267.5], [34.0, 203.0], [35.0, 93.0], [37.0, 199.5], [36.0, 238.5], [39.0, 204.0], [38.0, 182.0], [40.0, 131.0], [41.0, 95.0], [43.0, 145.0], [44.0, 53.5], [45.0, 90.5], [47.0, 129.5], [48.0, 47.5], [49.0, 153.0], [51.0, 111.0], [50.0, 141.0], [52.0, 44.5], [55.0, 60.0], [58.0, 116.5], [60.0, 89.0], [61.0, 29.0], [66.0, 62.0], [69.0, 64.0], [71.0, 101.0], [77.0, 73.5], [76.0, 91.5], [100.0, 29.0], [107.0, 44.0], [1.0, 729.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 107.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 11.316666666666666, "minX": 1.60405026E12, "maxY": 32.083333333333336, "series": [{"data": [[1.60405032E12, 31.566666666666666], [1.60405038E12, 32.083333333333336], [1.60405026E12, 11.316666666666666], [1.60405044E12, 11.533333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60405044E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 11.15, "minX": 1.60405026E12, "maxY": 32.083333333333336, "series": [{"data": [[1.60405032E12, 31.566666666666666], [1.60405038E12, 32.083333333333336], [1.60405026E12, 11.15], [1.60405044E12, 11.7]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60405044E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 11.15, "minX": 1.60405026E12, "maxY": 32.083333333333336, "series": [{"data": [[1.60405032E12, 31.566666666666666], [1.60405038E12, 32.083333333333336], [1.60405026E12, 11.15], [1.60405044E12, 11.7]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60405044E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 11.15, "minX": 1.60405026E12, "maxY": 32.083333333333336, "series": [{"data": [[1.60405032E12, 31.566666666666666], [1.60405038E12, 32.083333333333336], [1.60405026E12, 11.15], [1.60405044E12, 11.7]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60405044E12, "title": "Total Transactions Per Second"}},
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

