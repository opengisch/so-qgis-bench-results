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
        data: {"result": {"minY": 30.0, "minX": 0.0, "maxY": 3276.0, "series": [{"data": [[0.0, 30.0], [0.1, 31.0], [0.2, 32.0], [0.3, 32.0], [0.4, 33.0], [0.5, 33.0], [0.6, 33.0], [0.7, 34.0], [0.8, 34.0], [0.9, 34.0], [1.0, 35.0], [1.1, 35.0], [1.2, 35.0], [1.3, 35.0], [1.4, 36.0], [1.5, 36.0], [1.6, 36.0], [1.7, 36.0], [1.8, 36.0], [1.9, 36.0], [2.0, 37.0], [2.1, 37.0], [2.2, 37.0], [2.3, 37.0], [2.4, 37.0], [2.5, 37.0], [2.6, 37.0], [2.7, 37.0], [2.8, 37.0], [2.9, 37.0], [3.0, 38.0], [3.1, 38.0], [3.2, 38.0], [3.3, 38.0], [3.4, 38.0], [3.5, 38.0], [3.6, 38.0], [3.7, 38.0], [3.8, 39.0], [3.9, 39.0], [4.0, 39.0], [4.1, 39.0], [4.2, 39.0], [4.3, 39.0], [4.4, 39.0], [4.5, 39.0], [4.6, 39.0], [4.7, 39.0], [4.8, 39.0], [4.9, 40.0], [5.0, 40.0], [5.1, 40.0], [5.2, 40.0], [5.3, 40.0], [5.4, 40.0], [5.5, 40.0], [5.6, 40.0], [5.7, 40.0], [5.8, 40.0], [5.9, 40.0], [6.0, 40.0], [6.1, 40.0], [6.2, 41.0], [6.3, 41.0], [6.4, 41.0], [6.5, 41.0], [6.6, 41.0], [6.7, 41.0], [6.8, 41.0], [6.9, 41.0], [7.0, 41.0], [7.1, 41.0], [7.2, 41.0], [7.3, 41.0], [7.4, 41.0], [7.5, 41.0], [7.6, 41.0], [7.7, 42.0], [7.8, 42.0], [7.9, 42.0], [8.0, 42.0], [8.1, 42.0], [8.2, 42.0], [8.3, 42.0], [8.4, 42.0], [8.5, 42.0], [8.6, 42.0], [8.7, 42.0], [8.8, 42.0], [8.9, 42.0], [9.0, 42.0], [9.1, 43.0], [9.2, 43.0], [9.3, 43.0], [9.4, 43.0], [9.5, 43.0], [9.6, 43.0], [9.7, 43.0], [9.8, 43.0], [9.9, 43.0], [10.0, 43.0], [10.1, 43.0], [10.2, 43.0], [10.3, 43.0], [10.4, 44.0], [10.5, 44.0], [10.6, 44.0], [10.7, 44.0], [10.8, 44.0], [10.9, 44.0], [11.0, 44.0], [11.1, 44.0], [11.2, 44.0], [11.3, 44.0], [11.4, 44.0], [11.5, 44.0], [11.6, 44.0], [11.7, 44.0], [11.8, 44.0], [11.9, 44.0], [12.0, 44.0], [12.1, 45.0], [12.2, 45.0], [12.3, 45.0], [12.4, 45.0], [12.5, 45.0], [12.6, 45.0], [12.7, 45.0], [12.8, 45.0], [12.9, 45.0], [13.0, 45.0], [13.1, 45.0], [13.2, 45.0], [13.3, 46.0], [13.4, 46.0], [13.5, 46.0], [13.6, 46.0], [13.7, 46.0], [13.8, 46.0], [13.9, 46.0], [14.0, 46.0], [14.1, 46.0], [14.2, 46.0], [14.3, 47.0], [14.4, 47.0], [14.5, 47.0], [14.6, 47.0], [14.7, 47.0], [14.8, 47.0], [14.9, 47.0], [15.0, 47.0], [15.1, 47.0], [15.2, 47.0], [15.3, 47.0], [15.4, 47.0], [15.5, 48.0], [15.6, 48.0], [15.7, 48.0], [15.8, 48.0], [15.9, 48.0], [16.0, 48.0], [16.1, 48.0], [16.2, 48.0], [16.3, 48.0], [16.4, 49.0], [16.5, 49.0], [16.6, 49.0], [16.7, 49.0], [16.8, 49.0], [16.9, 49.0], [17.0, 49.0], [17.1, 49.0], [17.2, 50.0], [17.3, 50.0], [17.4, 50.0], [17.5, 50.0], [17.6, 50.0], [17.7, 50.0], [17.8, 50.0], [17.9, 50.0], [18.0, 50.0], [18.1, 51.0], [18.2, 51.0], [18.3, 51.0], [18.4, 51.0], [18.5, 51.0], [18.6, 51.0], [18.7, 51.0], [18.8, 52.0], [18.9, 52.0], [19.0, 52.0], [19.1, 52.0], [19.2, 52.0], [19.3, 52.0], [19.4, 53.0], [19.5, 53.0], [19.6, 53.0], [19.7, 53.0], [19.8, 54.0], [19.9, 54.0], [20.0, 54.0], [20.1, 54.0], [20.2, 54.0], [20.3, 55.0], [20.4, 55.0], [20.5, 55.0], [20.6, 55.0], [20.7, 55.0], [20.8, 56.0], [20.9, 56.0], [21.0, 56.0], [21.1, 56.0], [21.2, 56.0], [21.3, 57.0], [21.4, 57.0], [21.5, 57.0], [21.6, 58.0], [21.7, 58.0], [21.8, 58.0], [21.9, 58.0], [22.0, 59.0], [22.1, 59.0], [22.2, 59.0], [22.3, 59.0], [22.4, 59.0], [22.5, 60.0], [22.6, 60.0], [22.7, 60.0], [22.8, 60.0], [22.9, 60.0], [23.0, 61.0], [23.1, 61.0], [23.2, 61.0], [23.3, 61.0], [23.4, 61.0], [23.5, 62.0], [23.6, 62.0], [23.7, 62.0], [23.8, 63.0], [23.9, 63.0], [24.0, 63.0], [24.1, 63.0], [24.2, 64.0], [24.3, 64.0], [24.4, 64.0], [24.5, 65.0], [24.6, 65.0], [24.7, 65.0], [24.8, 66.0], [24.9, 66.0], [25.0, 66.0], [25.1, 66.0], [25.2, 67.0], [25.3, 67.0], [25.4, 67.0], [25.5, 67.0], [25.6, 68.0], [25.7, 68.0], [25.8, 68.0], [25.9, 68.0], [26.0, 68.0], [26.1, 68.0], [26.2, 69.0], [26.3, 69.0], [26.4, 69.0], [26.5, 69.0], [26.6, 70.0], [26.7, 70.0], [26.8, 70.0], [26.9, 70.0], [27.0, 70.0], [27.1, 71.0], [27.2, 71.0], [27.3, 71.0], [27.4, 71.0], [27.5, 71.0], [27.6, 71.0], [27.7, 72.0], [27.8, 72.0], [27.9, 72.0], [28.0, 72.0], [28.1, 72.0], [28.2, 72.0], [28.3, 73.0], [28.4, 73.0], [28.5, 73.0], [28.6, 73.0], [28.7, 73.0], [28.8, 74.0], [28.9, 74.0], [29.0, 74.0], [29.1, 74.0], [29.2, 75.0], [29.3, 75.0], [29.4, 75.0], [29.5, 75.0], [29.6, 76.0], [29.7, 76.0], [29.8, 76.0], [29.9, 76.0], [30.0, 76.0], [30.1, 76.0], [30.2, 77.0], [30.3, 77.0], [30.4, 77.0], [30.5, 77.0], [30.6, 77.0], [30.7, 78.0], [30.8, 78.0], [30.9, 78.0], [31.0, 78.0], [31.1, 78.0], [31.2, 78.0], [31.3, 79.0], [31.4, 79.0], [31.5, 79.0], [31.6, 79.0], [31.7, 79.0], [31.8, 79.0], [31.9, 80.0], [32.0, 80.0], [32.1, 80.0], [32.2, 80.0], [32.3, 80.0], [32.4, 80.0], [32.5, 80.0], [32.6, 80.0], [32.7, 81.0], [32.8, 81.0], [32.9, 81.0], [33.0, 81.0], [33.1, 81.0], [33.2, 81.0], [33.3, 82.0], [33.4, 82.0], [33.5, 82.0], [33.6, 82.0], [33.7, 83.0], [33.8, 83.0], [33.9, 83.0], [34.0, 83.0], [34.1, 83.0], [34.2, 84.0], [34.3, 84.0], [34.4, 84.0], [34.5, 84.0], [34.6, 84.0], [34.7, 84.0], [34.8, 85.0], [34.9, 85.0], [35.0, 85.0], [35.1, 85.0], [35.2, 86.0], [35.3, 86.0], [35.4, 86.0], [35.5, 86.0], [35.6, 87.0], [35.7, 87.0], [35.8, 87.0], [35.9, 88.0], [36.0, 88.0], [36.1, 88.0], [36.2, 88.0], [36.3, 89.0], [36.4, 89.0], [36.5, 89.0], [36.6, 90.0], [36.7, 90.0], [36.8, 90.0], [36.9, 91.0], [37.0, 91.0], [37.1, 91.0], [37.2, 92.0], [37.3, 92.0], [37.4, 92.0], [37.5, 93.0], [37.6, 93.0], [37.7, 93.0], [37.8, 93.0], [37.9, 94.0], [38.0, 95.0], [38.1, 95.0], [38.2, 95.0], [38.3, 96.0], [38.4, 96.0], [38.5, 96.0], [38.6, 97.0], [38.7, 98.0], [38.8, 98.0], [38.9, 99.0], [39.0, 100.0], [39.1, 100.0], [39.2, 100.0], [39.3, 101.0], [39.4, 101.0], [39.5, 102.0], [39.6, 102.0], [39.7, 103.0], [39.8, 103.0], [39.9, 104.0], [40.0, 104.0], [40.1, 106.0], [40.2, 107.0], [40.3, 108.0], [40.4, 108.0], [40.5, 109.0], [40.6, 109.0], [40.7, 110.0], [40.8, 110.0], [40.9, 111.0], [41.0, 112.0], [41.1, 112.0], [41.2, 112.0], [41.3, 113.0], [41.4, 114.0], [41.5, 114.0], [41.6, 115.0], [41.7, 116.0], [41.8, 116.0], [41.9, 116.0], [42.0, 117.0], [42.1, 117.0], [42.2, 118.0], [42.3, 118.0], [42.4, 119.0], [42.5, 119.0], [42.6, 120.0], [42.7, 121.0], [42.8, 122.0], [42.9, 122.0], [43.0, 123.0], [43.1, 124.0], [43.2, 125.0], [43.3, 125.0], [43.4, 126.0], [43.5, 126.0], [43.6, 127.0], [43.7, 128.0], [43.8, 128.0], [43.9, 129.0], [44.0, 129.0], [44.1, 130.0], [44.2, 130.0], [44.3, 131.0], [44.4, 131.0], [44.5, 132.0], [44.6, 132.0], [44.7, 132.0], [44.8, 133.0], [44.9, 134.0], [45.0, 134.0], [45.1, 135.0], [45.2, 135.0], [45.3, 135.0], [45.4, 136.0], [45.5, 137.0], [45.6, 138.0], [45.7, 139.0], [45.8, 140.0], [45.9, 141.0], [46.0, 141.0], [46.1, 142.0], [46.2, 142.0], [46.3, 143.0], [46.4, 143.0], [46.5, 144.0], [46.6, 145.0], [46.7, 146.0], [46.8, 146.0], [46.9, 148.0], [47.0, 148.0], [47.1, 150.0], [47.2, 150.0], [47.3, 152.0], [47.4, 153.0], [47.5, 154.0], [47.6, 154.0], [47.7, 157.0], [47.8, 159.0], [47.9, 159.0], [48.0, 161.0], [48.1, 163.0], [48.2, 164.0], [48.3, 164.0], [48.4, 165.0], [48.5, 167.0], [48.6, 167.0], [48.7, 170.0], [48.8, 170.0], [48.9, 172.0], [49.0, 174.0], [49.1, 175.0], [49.2, 176.0], [49.3, 177.0], [49.4, 179.0], [49.5, 180.0], [49.6, 181.0], [49.7, 182.0], [49.8, 183.0], [49.9, 184.0], [50.0, 186.0], [50.1, 186.0], [50.2, 187.0], [50.3, 188.0], [50.4, 190.0], [50.5, 190.0], [50.6, 192.0], [50.7, 192.0], [50.8, 193.0], [50.9, 193.0], [51.0, 194.0], [51.1, 195.0], [51.2, 196.0], [51.3, 196.0], [51.4, 197.0], [51.5, 197.0], [51.6, 198.0], [51.7, 199.0], [51.8, 199.0], [51.9, 200.0], [52.0, 201.0], [52.1, 202.0], [52.2, 203.0], [52.3, 204.0], [52.4, 205.0], [52.5, 206.0], [52.6, 206.0], [52.7, 207.0], [52.8, 208.0], [52.9, 209.0], [53.0, 210.0], [53.1, 211.0], [53.2, 211.0], [53.3, 212.0], [53.4, 213.0], [53.5, 214.0], [53.6, 214.0], [53.7, 215.0], [53.8, 216.0], [53.9, 216.0], [54.0, 217.0], [54.1, 217.0], [54.2, 218.0], [54.3, 220.0], [54.4, 220.0], [54.5, 220.0], [54.6, 221.0], [54.7, 222.0], [54.8, 222.0], [54.9, 223.0], [55.0, 225.0], [55.1, 225.0], [55.2, 226.0], [55.3, 226.0], [55.4, 227.0], [55.5, 228.0], [55.6, 229.0], [55.7, 229.0], [55.8, 231.0], [55.9, 231.0], [56.0, 231.0], [56.1, 233.0], [56.2, 234.0], [56.3, 235.0], [56.4, 236.0], [56.5, 237.0], [56.6, 237.0], [56.7, 238.0], [56.8, 239.0], [56.9, 240.0], [57.0, 241.0], [57.1, 242.0], [57.2, 243.0], [57.3, 243.0], [57.4, 244.0], [57.5, 245.0], [57.6, 246.0], [57.7, 246.0], [57.8, 248.0], [57.9, 248.0], [58.0, 249.0], [58.1, 251.0], [58.2, 251.0], [58.3, 252.0], [58.4, 254.0], [58.5, 255.0], [58.6, 257.0], [58.7, 258.0], [58.8, 259.0], [58.9, 259.0], [59.0, 260.0], [59.1, 260.0], [59.2, 262.0], [59.3, 263.0], [59.4, 264.0], [59.5, 265.0], [59.6, 266.0], [59.7, 266.0], [59.8, 267.0], [59.9, 269.0], [60.0, 270.0], [60.1, 271.0], [60.2, 272.0], [60.3, 274.0], [60.4, 275.0], [60.5, 276.0], [60.6, 277.0], [60.7, 277.0], [60.8, 278.0], [60.9, 279.0], [61.0, 280.0], [61.1, 282.0], [61.2, 283.0], [61.3, 285.0], [61.4, 286.0], [61.5, 290.0], [61.6, 291.0], [61.7, 291.0], [61.8, 292.0], [61.9, 293.0], [62.0, 294.0], [62.1, 296.0], [62.2, 297.0], [62.3, 298.0], [62.4, 299.0], [62.5, 300.0], [62.6, 300.0], [62.7, 302.0], [62.8, 303.0], [62.9, 305.0], [63.0, 305.0], [63.1, 306.0], [63.2, 307.0], [63.3, 309.0], [63.4, 310.0], [63.5, 311.0], [63.6, 312.0], [63.7, 313.0], [63.8, 314.0], [63.9, 316.0], [64.0, 317.0], [64.1, 318.0], [64.2, 319.0], [64.3, 319.0], [64.4, 320.0], [64.5, 321.0], [64.6, 322.0], [64.7, 324.0], [64.8, 325.0], [64.9, 325.0], [65.0, 327.0], [65.1, 327.0], [65.2, 328.0], [65.3, 329.0], [65.4, 331.0], [65.5, 332.0], [65.6, 334.0], [65.7, 335.0], [65.8, 337.0], [65.9, 338.0], [66.0, 339.0], [66.1, 340.0], [66.2, 341.0], [66.3, 342.0], [66.4, 344.0], [66.5, 345.0], [66.6, 346.0], [66.7, 348.0], [66.8, 349.0], [66.9, 351.0], [67.0, 354.0], [67.1, 357.0], [67.2, 359.0], [67.3, 360.0], [67.4, 363.0], [67.5, 364.0], [67.6, 366.0], [67.7, 367.0], [67.8, 368.0], [67.9, 369.0], [68.0, 370.0], [68.1, 371.0], [68.2, 372.0], [68.3, 373.0], [68.4, 375.0], [68.5, 376.0], [68.6, 377.0], [68.7, 379.0], [68.8, 380.0], [68.9, 381.0], [69.0, 381.0], [69.1, 383.0], [69.2, 384.0], [69.3, 385.0], [69.4, 387.0], [69.5, 389.0], [69.6, 391.0], [69.7, 392.0], [69.8, 394.0], [69.9, 396.0], [70.0, 397.0], [70.1, 399.0], [70.2, 401.0], [70.3, 402.0], [70.4, 403.0], [70.5, 404.0], [70.6, 406.0], [70.7, 407.0], [70.8, 408.0], [70.9, 409.0], [71.0, 411.0], [71.1, 411.0], [71.2, 413.0], [71.3, 416.0], [71.4, 418.0], [71.5, 420.0], [71.6, 422.0], [71.7, 422.0], [71.8, 424.0], [71.9, 425.0], [72.0, 426.0], [72.1, 428.0], [72.2, 430.0], [72.3, 432.0], [72.4, 433.0], [72.5, 434.0], [72.6, 436.0], [72.7, 438.0], [72.8, 439.0], [72.9, 440.0], [73.0, 442.0], [73.1, 443.0], [73.2, 444.0], [73.3, 445.0], [73.4, 446.0], [73.5, 447.0], [73.6, 449.0], [73.7, 451.0], [73.8, 454.0], [73.9, 455.0], [74.0, 456.0], [74.1, 457.0], [74.2, 458.0], [74.3, 459.0], [74.4, 461.0], [74.5, 462.0], [74.6, 464.0], [74.7, 465.0], [74.8, 466.0], [74.9, 468.0], [75.0, 470.0], [75.1, 472.0], [75.2, 474.0], [75.3, 477.0], [75.4, 479.0], [75.5, 480.0], [75.6, 481.0], [75.7, 483.0], [75.8, 484.0], [75.9, 485.0], [76.0, 488.0], [76.1, 488.0], [76.2, 490.0], [76.3, 493.0], [76.4, 494.0], [76.5, 496.0], [76.6, 497.0], [76.7, 500.0], [76.8, 502.0], [76.9, 503.0], [77.0, 506.0], [77.1, 507.0], [77.2, 510.0], [77.3, 512.0], [77.4, 514.0], [77.5, 515.0], [77.6, 517.0], [77.7, 519.0], [77.8, 519.0], [77.9, 521.0], [78.0, 522.0], [78.1, 523.0], [78.2, 524.0], [78.3, 526.0], [78.4, 527.0], [78.5, 528.0], [78.6, 529.0], [78.7, 530.0], [78.8, 532.0], [78.9, 535.0], [79.0, 536.0], [79.1, 538.0], [79.2, 539.0], [79.3, 540.0], [79.4, 544.0], [79.5, 546.0], [79.6, 549.0], [79.7, 550.0], [79.8, 552.0], [79.9, 555.0], [80.0, 556.0], [80.1, 558.0], [80.2, 562.0], [80.3, 563.0], [80.4, 565.0], [80.5, 567.0], [80.6, 568.0], [80.7, 569.0], [80.8, 571.0], [80.9, 571.0], [81.0, 572.0], [81.1, 573.0], [81.2, 577.0], [81.3, 578.0], [81.4, 581.0], [81.5, 584.0], [81.6, 587.0], [81.7, 589.0], [81.8, 593.0], [81.9, 595.0], [82.0, 599.0], [82.1, 602.0], [82.2, 604.0], [82.3, 606.0], [82.4, 608.0], [82.5, 612.0], [82.6, 613.0], [82.7, 615.0], [82.8, 619.0], [82.9, 621.0], [83.0, 622.0], [83.1, 624.0], [83.2, 626.0], [83.3, 628.0], [83.4, 630.0], [83.5, 631.0], [83.6, 634.0], [83.7, 637.0], [83.8, 639.0], [83.9, 640.0], [84.0, 643.0], [84.1, 645.0], [84.2, 647.0], [84.3, 647.0], [84.4, 649.0], [84.5, 653.0], [84.6, 656.0], [84.7, 658.0], [84.8, 661.0], [84.9, 663.0], [85.0, 667.0], [85.1, 668.0], [85.2, 672.0], [85.3, 673.0], [85.4, 674.0], [85.5, 676.0], [85.6, 677.0], [85.7, 680.0], [85.8, 682.0], [85.9, 684.0], [86.0, 685.0], [86.1, 688.0], [86.2, 689.0], [86.3, 690.0], [86.4, 691.0], [86.5, 695.0], [86.6, 696.0], [86.7, 700.0], [86.8, 701.0], [86.9, 705.0], [87.0, 706.0], [87.1, 710.0], [87.2, 711.0], [87.3, 716.0], [87.4, 719.0], [87.5, 722.0], [87.6, 724.0], [87.7, 726.0], [87.8, 733.0], [87.9, 734.0], [88.0, 738.0], [88.1, 744.0], [88.2, 746.0], [88.3, 748.0], [88.4, 751.0], [88.5, 754.0], [88.6, 757.0], [88.7, 759.0], [88.8, 761.0], [88.9, 764.0], [89.0, 767.0], [89.1, 772.0], [89.2, 775.0], [89.3, 777.0], [89.4, 781.0], [89.5, 784.0], [89.6, 786.0], [89.7, 791.0], [89.8, 794.0], [89.9, 797.0], [90.0, 799.0], [90.1, 804.0], [90.2, 807.0], [90.3, 812.0], [90.4, 814.0], [90.5, 819.0], [90.6, 822.0], [90.7, 828.0], [90.8, 833.0], [90.9, 835.0], [91.0, 837.0], [91.1, 839.0], [91.2, 842.0], [91.3, 848.0], [91.4, 852.0], [91.5, 856.0], [91.6, 858.0], [91.7, 862.0], [91.8, 870.0], [91.9, 872.0], [92.0, 876.0], [92.1, 880.0], [92.2, 883.0], [92.3, 887.0], [92.4, 893.0], [92.5, 899.0], [92.6, 904.0], [92.7, 910.0], [92.8, 917.0], [92.9, 921.0], [93.0, 928.0], [93.1, 936.0], [93.2, 944.0], [93.3, 952.0], [93.4, 959.0], [93.5, 962.0], [93.6, 963.0], [93.7, 969.0], [93.8, 975.0], [93.9, 982.0], [94.0, 986.0], [94.1, 994.0], [94.2, 996.0], [94.3, 1009.0], [94.4, 1015.0], [94.5, 1020.0], [94.6, 1027.0], [94.7, 1032.0], [94.8, 1038.0], [94.9, 1046.0], [95.0, 1054.0], [95.1, 1063.0], [95.2, 1078.0], [95.3, 1089.0], [95.4, 1096.0], [95.5, 1104.0], [95.6, 1108.0], [95.7, 1116.0], [95.8, 1128.0], [95.9, 1132.0], [96.0, 1133.0], [96.1, 1148.0], [96.2, 1160.0], [96.3, 1166.0], [96.4, 1179.0], [96.5, 1188.0], [96.6, 1213.0], [96.7, 1233.0], [96.8, 1253.0], [96.9, 1264.0], [97.0, 1273.0], [97.1, 1281.0], [97.2, 1297.0], [97.3, 1318.0], [97.4, 1337.0], [97.5, 1354.0], [97.6, 1361.0], [97.7, 1368.0], [97.8, 1392.0], [97.9, 1403.0], [98.0, 1413.0], [98.1, 1439.0], [98.2, 1457.0], [98.3, 1479.0], [98.4, 1494.0], [98.5, 1525.0], [98.6, 1559.0], [98.7, 1576.0], [98.8, 1595.0], [98.9, 1639.0], [99.0, 1659.0], [99.1, 1676.0], [99.2, 1732.0], [99.3, 1782.0], [99.4, 1824.0], [99.5, 1944.0], [99.6, 2024.0], [99.7, 2211.0], [99.8, 2463.0], [99.9, 3170.0], [100.0, 3276.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 2051.0, "series": [{"data": [[0.0, 2051.0], [600.0, 246.0], [700.0, 178.0], [800.0, 131.0], [900.0, 89.0], [1000.0, 65.0], [1100.0, 57.0], [1200.0, 34.0], [1300.0, 34.0], [1400.0, 30.0], [1500.0, 21.0], [100.0, 676.0], [1600.0, 17.0], [1700.0, 11.0], [1800.0, 6.0], [1900.0, 3.0], [2000.0, 4.0], [2100.0, 5.0], [2300.0, 2.0], [2200.0, 3.0], [2400.0, 1.0], [2500.0, 2.0], [2600.0, 1.0], [2800.0, 1.0], [3100.0, 2.0], [200.0, 559.0], [3200.0, 4.0], [300.0, 405.0], [400.0, 344.0], [500.0, 280.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3200.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 82.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 4038.0, "series": [{"data": [[0.0, 4038.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1142.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 82.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.608695652173914, "minX": 1.60422846E12, "maxY": 10.0, "series": [{"data": [[1.60422864E12, 9.608695652173914], [1.60422852E12, 10.0], [1.60422858E12, 10.0], [1.60422846E12, 9.981361426256077]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60422864E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 322.712542889821, "minX": 1.0, "maxY": 3276.0, "series": [{"data": [[4.0, 760.0], [8.0, 1697.5], [2.0, 3276.0], [1.0, 3170.0], [9.0, 505.0], [5.0, 1122.0], [10.0, 322.712542889821], [6.0, 1072.0], [3.0, 3174.0], [7.0, 654.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.98707715697455, 325.87343215507406]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 1024.15, "minX": 1.60422846E12, "maxY": 1634469.0, "series": [{"data": [[1.60422864E12, 62972.45], [1.60422852E12, 1409259.4333333333], [1.60422858E12, 1634469.0], [1.60422846E12, 1144174.3166666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60422864E12, 1024.15], [1.60422852E12, 18045.466666666667], [1.60422858E12, 15710.483333333334], [1.60422846E12, 10710.85]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60422864E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 281.50564440263474, "minX": 1.60422846E12, "maxY": 643.6434782608694, "series": [{"data": [[1.60422864E12, 643.6434782608694], [1.60422852E12, 281.50564440263474], [1.60422858E12, 335.5982092893116], [1.60422846E12, 358.6158833063209]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60422864E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 281.134995296332, "minX": 1.60422846E12, "maxY": 643.3565217391304, "series": [{"data": [[1.60422864E12, 643.3565217391304], [1.60422852E12, 281.134995296332], [1.60422858E12, 335.1734750979297], [1.60422846E12, 358.0810372771474]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60422864E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.60422846E12, "maxY": 0.07374392220421416, "series": [{"data": [[1.60422864E12, 0.0], [1.60422852E12, 0.012229539040451569], [1.60422858E12, 0.01063234471180753], [1.60422846E12, 0.07374392220421416]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60422864E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 30.0, "minX": 1.60422846E12, "maxY": 3276.0, "series": [{"data": [[1.60422864E12, 3276.0], [1.60422852E12, 2575.0], [1.60422858E12, 2865.0], [1.60422846E12, 1944.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60422864E12, 37.0], [1.60422852E12, 35.14299949288368], [1.60422858E12, 36.0], [1.60422846E12, 32.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60422864E12, 37.0], [1.60422852E12, 36.0], [1.60422858E12, 36.0], [1.60422846E12, 32.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60422864E12, 37.0], [1.60422852E12, 36.0], [1.60422858E12, 36.0], [1.60422846E12, 32.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60422864E12, 37.0], [1.60422852E12, 30.0], [1.60422858E12, 32.0], [1.60422846E12, 30.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60422864E12, 369.0], [1.60422852E12, 134.0], [1.60422858E12, 193.0], [1.60422846E12, 261.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60422864E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 69.0, "minX": 2.0, "maxY": 3223.0, "series": [{"data": [[2.0, 3223.0], [3.0, 3174.0], [4.0, 1390.0], [6.0, 1130.0], [7.0, 1406.0], [8.0, 784.5], [9.0, 810.0], [10.0, 733.0], [11.0, 656.0], [12.0, 847.0], [13.0, 645.0], [14.0, 516.0], [15.0, 583.0], [16.0, 532.0], [17.0, 449.0], [18.0, 599.0], [19.0, 442.0], [20.0, 404.5], [21.0, 556.5], [22.0, 406.5], [23.0, 383.0], [24.0, 298.5], [25.0, 369.0], [26.0, 208.5], [27.0, 402.0], [28.0, 300.0], [29.0, 229.5], [30.0, 238.0], [33.0, 176.0], [32.0, 221.0], [35.0, 202.5], [34.0, 246.0], [36.0, 182.5], [37.0, 76.0], [38.0, 82.5], [39.0, 146.5], [41.0, 143.0], [40.0, 165.5], [42.0, 86.0], [43.0, 216.0], [45.0, 196.0], [44.0, 168.0], [47.0, 69.0], [51.0, 91.0], [50.0, 180.0], [52.0, 134.0], [53.0, 132.0], [55.0, 100.0], [57.0, 114.0], [56.0, 83.5], [59.0, 79.0], [58.0, 109.0], [61.0, 94.5], [63.0, 120.5], [66.0, 106.0], [67.0, 133.0], [71.0, 138.0], [74.0, 83.5], [81.0, 72.0], [90.0, 76.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 90.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 69.0, "minX": 2.0, "maxY": 3222.5, "series": [{"data": [[2.0, 3222.5], [3.0, 3172.0], [4.0, 1390.0], [6.0, 1129.5], [7.0, 1405.0], [8.0, 784.5], [9.0, 807.0], [10.0, 733.0], [11.0, 656.0], [12.0, 847.0], [13.0, 644.0], [14.0, 514.0], [15.0, 580.0], [16.0, 531.0], [17.0, 448.0], [18.0, 598.5], [19.0, 442.0], [20.0, 404.5], [21.0, 554.5], [22.0, 406.0], [23.0, 382.0], [24.0, 297.5], [25.0, 368.0], [26.0, 208.5], [27.0, 402.0], [28.0, 299.0], [29.0, 229.0], [30.0, 238.0], [33.0, 175.5], [32.0, 220.5], [35.0, 202.0], [34.0, 246.0], [36.0, 182.5], [37.0, 76.0], [38.0, 82.0], [39.0, 146.5], [41.0, 143.0], [40.0, 165.0], [42.0, 85.5], [43.0, 216.0], [45.0, 196.0], [44.0, 167.5], [47.0, 69.0], [51.0, 91.0], [50.0, 179.5], [52.0, 134.0], [53.0, 131.0], [55.0, 100.0], [57.0, 114.0], [56.0, 82.5], [59.0, 79.0], [58.0, 109.0], [61.0, 93.5], [63.0, 120.5], [66.0, 106.0], [67.0, 133.0], [71.0, 138.0], [74.0, 83.0], [81.0, 72.0], [90.0, 76.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 90.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1.75, "minX": 1.60422846E12, "maxY": 35.43333333333333, "series": [{"data": [[1.60422864E12, 1.75], [1.60422852E12, 35.43333333333333], [1.60422858E12, 29.783333333333335], [1.60422846E12, 20.733333333333334]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60422864E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1.9166666666666667, "minX": 1.60422846E12, "maxY": 35.43333333333333, "series": [{"data": [[1.60422864E12, 1.9166666666666667], [1.60422852E12, 35.43333333333333], [1.60422858E12, 29.783333333333335], [1.60422846E12, 20.566666666666666]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60422864E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.9166666666666667, "minX": 1.60422846E12, "maxY": 35.43333333333333, "series": [{"data": [[1.60422864E12, 1.9166666666666667], [1.60422852E12, 35.43333333333333], [1.60422858E12, 29.783333333333335], [1.60422846E12, 20.566666666666666]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60422864E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.9166666666666667, "minX": 1.60422846E12, "maxY": 35.43333333333333, "series": [{"data": [[1.60422864E12, 1.9166666666666667], [1.60422852E12, 35.43333333333333], [1.60422858E12, 29.783333333333335], [1.60422846E12, 20.566666666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60422864E12, "title": "Total Transactions Per Second"}},
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

