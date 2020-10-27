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
        data: {"result": {"minY": 30.0, "minX": 0.0, "maxY": 3641.0, "series": [{"data": [[0.0, 30.0], [0.1, 32.0], [0.2, 33.0], [0.3, 33.0], [0.4, 34.0], [0.5, 34.0], [0.6, 34.0], [0.7, 35.0], [0.8, 35.0], [0.9, 35.0], [1.0, 35.0], [1.1, 36.0], [1.2, 36.0], [1.3, 36.0], [1.4, 36.0], [1.5, 36.0], [1.6, 37.0], [1.7, 37.0], [1.8, 37.0], [1.9, 37.0], [2.0, 37.0], [2.1, 37.0], [2.2, 37.0], [2.3, 37.0], [2.4, 38.0], [2.5, 38.0], [2.6, 38.0], [2.7, 38.0], [2.8, 38.0], [2.9, 38.0], [3.0, 38.0], [3.1, 38.0], [3.2, 39.0], [3.3, 39.0], [3.4, 39.0], [3.5, 39.0], [3.6, 39.0], [3.7, 39.0], [3.8, 39.0], [3.9, 39.0], [4.0, 39.0], [4.1, 39.0], [4.2, 39.0], [4.3, 39.0], [4.4, 40.0], [4.5, 40.0], [4.6, 40.0], [4.7, 40.0], [4.8, 40.0], [4.9, 40.0], [5.0, 40.0], [5.1, 40.0], [5.2, 40.0], [5.3, 40.0], [5.4, 40.0], [5.5, 40.0], [5.6, 41.0], [5.7, 41.0], [5.8, 41.0], [5.9, 41.0], [6.0, 41.0], [6.1, 41.0], [6.2, 41.0], [6.3, 41.0], [6.4, 41.0], [6.5, 41.0], [6.6, 41.0], [6.7, 41.0], [6.8, 41.0], [6.9, 41.0], [7.0, 41.0], [7.1, 41.0], [7.2, 41.0], [7.3, 42.0], [7.4, 42.0], [7.5, 42.0], [7.6, 42.0], [7.7, 42.0], [7.8, 42.0], [7.9, 42.0], [8.0, 42.0], [8.1, 42.0], [8.2, 42.0], [8.3, 42.0], [8.4, 42.0], [8.5, 42.0], [8.6, 42.0], [8.7, 42.0], [8.8, 42.0], [8.9, 42.0], [9.0, 43.0], [9.1, 43.0], [9.2, 43.0], [9.3, 43.0], [9.4, 43.0], [9.5, 43.0], [9.6, 43.0], [9.7, 43.0], [9.8, 43.0], [9.9, 43.0], [10.0, 43.0], [10.1, 43.0], [10.2, 43.0], [10.3, 44.0], [10.4, 44.0], [10.5, 44.0], [10.6, 44.0], [10.7, 44.0], [10.8, 44.0], [10.9, 44.0], [11.0, 44.0], [11.1, 44.0], [11.2, 44.0], [11.3, 44.0], [11.4, 44.0], [11.5, 44.0], [11.6, 44.0], [11.7, 44.0], [11.8, 44.0], [11.9, 44.0], [12.0, 44.0], [12.1, 45.0], [12.2, 45.0], [12.3, 45.0], [12.4, 45.0], [12.5, 45.0], [12.6, 45.0], [12.7, 45.0], [12.8, 45.0], [12.9, 45.0], [13.0, 45.0], [13.1, 45.0], [13.2, 46.0], [13.3, 46.0], [13.4, 46.0], [13.5, 46.0], [13.6, 46.0], [13.7, 46.0], [13.8, 46.0], [13.9, 46.0], [14.0, 46.0], [14.1, 46.0], [14.2, 46.0], [14.3, 46.0], [14.4, 47.0], [14.5, 47.0], [14.6, 47.0], [14.7, 47.0], [14.8, 47.0], [14.9, 47.0], [15.0, 47.0], [15.1, 47.0], [15.2, 47.0], [15.3, 47.0], [15.4, 48.0], [15.5, 48.0], [15.6, 48.0], [15.7, 48.0], [15.8, 48.0], [15.9, 48.0], [16.0, 49.0], [16.1, 49.0], [16.2, 49.0], [16.3, 49.0], [16.4, 49.0], [16.5, 49.0], [16.6, 49.0], [16.7, 50.0], [16.8, 50.0], [16.9, 50.0], [17.0, 50.0], [17.1, 50.0], [17.2, 50.0], [17.3, 50.0], [17.4, 50.0], [17.5, 51.0], [17.6, 51.0], [17.7, 51.0], [17.8, 51.0], [17.9, 51.0], [18.0, 51.0], [18.1, 51.0], [18.2, 52.0], [18.3, 52.0], [18.4, 52.0], [18.5, 52.0], [18.6, 52.0], [18.7, 52.0], [18.8, 53.0], [18.9, 53.0], [19.0, 53.0], [19.1, 53.0], [19.2, 53.0], [19.3, 54.0], [19.4, 54.0], [19.5, 54.0], [19.6, 54.0], [19.7, 55.0], [19.8, 55.0], [19.9, 55.0], [20.0, 56.0], [20.1, 56.0], [20.2, 56.0], [20.3, 57.0], [20.4, 57.0], [20.5, 57.0], [20.6, 57.0], [20.7, 58.0], [20.8, 58.0], [20.9, 58.0], [21.0, 58.0], [21.1, 59.0], [21.2, 59.0], [21.3, 59.0], [21.4, 60.0], [21.5, 60.0], [21.6, 60.0], [21.7, 61.0], [21.8, 61.0], [21.9, 61.0], [22.0, 61.0], [22.1, 61.0], [22.2, 62.0], [22.3, 62.0], [22.4, 62.0], [22.5, 63.0], [22.6, 63.0], [22.7, 63.0], [22.8, 63.0], [22.9, 64.0], [23.0, 64.0], [23.1, 64.0], [23.2, 64.0], [23.3, 65.0], [23.4, 65.0], [23.5, 65.0], [23.6, 65.0], [23.7, 66.0], [23.8, 66.0], [23.9, 66.0], [24.0, 66.0], [24.1, 67.0], [24.2, 67.0], [24.3, 67.0], [24.4, 67.0], [24.5, 68.0], [24.6, 68.0], [24.7, 68.0], [24.8, 68.0], [24.9, 68.0], [25.0, 68.0], [25.1, 68.0], [25.2, 69.0], [25.3, 69.0], [25.4, 69.0], [25.5, 69.0], [25.6, 69.0], [25.7, 69.0], [25.8, 70.0], [25.9, 70.0], [26.0, 70.0], [26.1, 70.0], [26.2, 70.0], [26.3, 71.0], [26.4, 71.0], [26.5, 71.0], [26.6, 71.0], [26.7, 71.0], [26.8, 72.0], [26.9, 72.0], [27.0, 72.0], [27.1, 72.0], [27.2, 72.0], [27.3, 72.0], [27.4, 72.0], [27.5, 73.0], [27.6, 73.0], [27.7, 73.0], [27.8, 73.0], [27.9, 73.0], [28.0, 73.0], [28.1, 74.0], [28.2, 74.0], [28.3, 74.0], [28.4, 74.0], [28.5, 74.0], [28.6, 74.0], [28.7, 74.0], [28.8, 75.0], [28.9, 75.0], [29.0, 75.0], [29.1, 75.0], [29.2, 76.0], [29.3, 76.0], [29.4, 76.0], [29.5, 76.0], [29.6, 76.0], [29.7, 76.0], [29.8, 77.0], [29.9, 77.0], [30.0, 77.0], [30.1, 77.0], [30.2, 77.0], [30.3, 77.0], [30.4, 78.0], [30.5, 78.0], [30.6, 78.0], [30.7, 78.0], [30.8, 78.0], [30.9, 78.0], [31.0, 78.0], [31.1, 79.0], [31.2, 79.0], [31.3, 79.0], [31.4, 79.0], [31.5, 79.0], [31.6, 79.0], [31.7, 80.0], [31.8, 80.0], [31.9, 80.0], [32.0, 80.0], [32.1, 80.0], [32.2, 80.0], [32.3, 81.0], [32.4, 81.0], [32.5, 81.0], [32.6, 81.0], [32.7, 81.0], [32.8, 81.0], [32.9, 81.0], [33.0, 82.0], [33.1, 82.0], [33.2, 82.0], [33.3, 82.0], [33.4, 82.0], [33.5, 83.0], [33.6, 83.0], [33.7, 83.0], [33.8, 83.0], [33.9, 83.0], [34.0, 83.0], [34.1, 84.0], [34.2, 84.0], [34.3, 84.0], [34.4, 84.0], [34.5, 84.0], [34.6, 84.0], [34.7, 84.0], [34.8, 85.0], [34.9, 85.0], [35.0, 85.0], [35.1, 85.0], [35.2, 86.0], [35.3, 86.0], [35.4, 86.0], [35.5, 86.0], [35.6, 86.0], [35.7, 87.0], [35.8, 87.0], [35.9, 87.0], [36.0, 87.0], [36.1, 87.0], [36.2, 87.0], [36.3, 88.0], [36.4, 88.0], [36.5, 88.0], [36.6, 88.0], [36.7, 88.0], [36.8, 89.0], [36.9, 89.0], [37.0, 89.0], [37.1, 89.0], [37.2, 90.0], [37.3, 90.0], [37.4, 90.0], [37.5, 90.0], [37.6, 90.0], [37.7, 91.0], [37.8, 91.0], [37.9, 91.0], [38.0, 91.0], [38.1, 92.0], [38.2, 92.0], [38.3, 92.0], [38.4, 92.0], [38.5, 93.0], [38.6, 93.0], [38.7, 93.0], [38.8, 93.0], [38.9, 93.0], [39.0, 94.0], [39.1, 94.0], [39.2, 94.0], [39.3, 94.0], [39.4, 95.0], [39.5, 95.0], [39.6, 95.0], [39.7, 96.0], [39.8, 96.0], [39.9, 96.0], [40.0, 97.0], [40.1, 97.0], [40.2, 97.0], [40.3, 97.0], [40.4, 98.0], [40.5, 98.0], [40.6, 99.0], [40.7, 99.0], [40.8, 99.0], [40.9, 100.0], [41.0, 101.0], [41.1, 102.0], [41.2, 102.0], [41.3, 103.0], [41.4, 104.0], [41.5, 105.0], [41.6, 105.0], [41.7, 105.0], [41.8, 106.0], [41.9, 106.0], [42.0, 107.0], [42.1, 108.0], [42.2, 108.0], [42.3, 109.0], [42.4, 110.0], [42.5, 111.0], [42.6, 111.0], [42.7, 112.0], [42.8, 112.0], [42.9, 113.0], [43.0, 113.0], [43.1, 114.0], [43.2, 115.0], [43.3, 115.0], [43.4, 115.0], [43.5, 116.0], [43.6, 116.0], [43.7, 117.0], [43.8, 117.0], [43.9, 118.0], [44.0, 120.0], [44.1, 120.0], [44.2, 121.0], [44.3, 122.0], [44.4, 123.0], [44.5, 123.0], [44.6, 124.0], [44.7, 125.0], [44.8, 125.0], [44.9, 126.0], [45.0, 127.0], [45.1, 128.0], [45.2, 129.0], [45.3, 129.0], [45.4, 130.0], [45.5, 130.0], [45.6, 131.0], [45.7, 132.0], [45.8, 133.0], [45.9, 135.0], [46.0, 135.0], [46.1, 135.0], [46.2, 137.0], [46.3, 138.0], [46.4, 139.0], [46.5, 140.0], [46.6, 142.0], [46.7, 144.0], [46.8, 145.0], [46.9, 147.0], [47.0, 149.0], [47.1, 150.0], [47.2, 152.0], [47.3, 153.0], [47.4, 155.0], [47.5, 155.0], [47.6, 156.0], [47.7, 157.0], [47.8, 157.0], [47.9, 159.0], [48.0, 160.0], [48.1, 162.0], [48.2, 164.0], [48.3, 164.0], [48.4, 165.0], [48.5, 167.0], [48.6, 167.0], [48.7, 169.0], [48.8, 170.0], [48.9, 171.0], [49.0, 172.0], [49.1, 173.0], [49.2, 174.0], [49.3, 175.0], [49.4, 176.0], [49.5, 177.0], [49.6, 177.0], [49.7, 179.0], [49.8, 180.0], [49.9, 180.0], [50.0, 181.0], [50.1, 182.0], [50.2, 183.0], [50.3, 184.0], [50.4, 185.0], [50.5, 185.0], [50.6, 186.0], [50.7, 187.0], [50.8, 188.0], [50.9, 189.0], [51.0, 190.0], [51.1, 191.0], [51.2, 191.0], [51.3, 192.0], [51.4, 193.0], [51.5, 194.0], [51.6, 195.0], [51.7, 196.0], [51.8, 197.0], [51.9, 198.0], [52.0, 199.0], [52.1, 200.0], [52.2, 200.0], [52.3, 201.0], [52.4, 202.0], [52.5, 202.0], [52.6, 203.0], [52.7, 204.0], [52.8, 205.0], [52.9, 206.0], [53.0, 206.0], [53.1, 207.0], [53.2, 207.0], [53.3, 208.0], [53.4, 208.0], [53.5, 209.0], [53.6, 209.0], [53.7, 210.0], [53.8, 211.0], [53.9, 212.0], [54.0, 212.0], [54.1, 213.0], [54.2, 215.0], [54.3, 216.0], [54.4, 216.0], [54.5, 217.0], [54.6, 218.0], [54.7, 219.0], [54.8, 219.0], [54.9, 220.0], [55.0, 220.0], [55.1, 221.0], [55.2, 222.0], [55.3, 223.0], [55.4, 223.0], [55.5, 224.0], [55.6, 225.0], [55.7, 226.0], [55.8, 227.0], [55.9, 228.0], [56.0, 229.0], [56.1, 230.0], [56.2, 231.0], [56.3, 231.0], [56.4, 232.0], [56.5, 233.0], [56.6, 234.0], [56.7, 235.0], [56.8, 235.0], [56.9, 236.0], [57.0, 237.0], [57.1, 238.0], [57.2, 239.0], [57.3, 241.0], [57.4, 241.0], [57.5, 243.0], [57.6, 243.0], [57.7, 245.0], [57.8, 246.0], [57.9, 246.0], [58.0, 247.0], [58.1, 248.0], [58.2, 249.0], [58.3, 250.0], [58.4, 251.0], [58.5, 252.0], [58.6, 253.0], [58.7, 255.0], [58.8, 255.0], [58.9, 256.0], [59.0, 257.0], [59.1, 258.0], [59.2, 259.0], [59.3, 260.0], [59.4, 261.0], [59.5, 262.0], [59.6, 263.0], [59.7, 264.0], [59.8, 265.0], [59.9, 266.0], [60.0, 267.0], [60.1, 268.0], [60.2, 268.0], [60.3, 269.0], [60.4, 271.0], [60.5, 271.0], [60.6, 274.0], [60.7, 275.0], [60.8, 276.0], [60.9, 277.0], [61.0, 278.0], [61.1, 279.0], [61.2, 281.0], [61.3, 282.0], [61.4, 283.0], [61.5, 284.0], [61.6, 284.0], [61.7, 286.0], [61.8, 287.0], [61.9, 290.0], [62.0, 291.0], [62.1, 292.0], [62.2, 294.0], [62.3, 295.0], [62.4, 296.0], [62.5, 298.0], [62.6, 299.0], [62.7, 299.0], [62.8, 300.0], [62.9, 301.0], [63.0, 301.0], [63.1, 302.0], [63.2, 304.0], [63.3, 305.0], [63.4, 306.0], [63.5, 308.0], [63.6, 308.0], [63.7, 309.0], [63.8, 310.0], [63.9, 312.0], [64.0, 313.0], [64.1, 314.0], [64.2, 317.0], [64.3, 318.0], [64.4, 319.0], [64.5, 321.0], [64.6, 322.0], [64.7, 323.0], [64.8, 324.0], [64.9, 326.0], [65.0, 327.0], [65.1, 328.0], [65.2, 329.0], [65.3, 331.0], [65.4, 333.0], [65.5, 335.0], [65.6, 337.0], [65.7, 337.0], [65.8, 340.0], [65.9, 341.0], [66.0, 341.0], [66.1, 342.0], [66.2, 343.0], [66.3, 345.0], [66.4, 346.0], [66.5, 348.0], [66.6, 349.0], [66.7, 350.0], [66.8, 352.0], [66.9, 353.0], [67.0, 354.0], [67.1, 356.0], [67.2, 358.0], [67.3, 359.0], [67.4, 361.0], [67.5, 362.0], [67.6, 364.0], [67.7, 365.0], [67.8, 366.0], [67.9, 369.0], [68.0, 370.0], [68.1, 370.0], [68.2, 371.0], [68.3, 372.0], [68.4, 373.0], [68.5, 373.0], [68.6, 375.0], [68.7, 376.0], [68.8, 377.0], [68.9, 378.0], [69.0, 380.0], [69.1, 381.0], [69.2, 383.0], [69.3, 385.0], [69.4, 386.0], [69.5, 387.0], [69.6, 390.0], [69.7, 391.0], [69.8, 392.0], [69.9, 394.0], [70.0, 396.0], [70.1, 398.0], [70.2, 399.0], [70.3, 399.0], [70.4, 401.0], [70.5, 402.0], [70.6, 403.0], [70.7, 404.0], [70.8, 405.0], [70.9, 406.0], [71.0, 409.0], [71.1, 409.0], [71.2, 411.0], [71.3, 413.0], [71.4, 415.0], [71.5, 416.0], [71.6, 418.0], [71.7, 419.0], [71.8, 421.0], [71.9, 422.0], [72.0, 423.0], [72.1, 424.0], [72.2, 427.0], [72.3, 428.0], [72.4, 429.0], [72.5, 431.0], [72.6, 433.0], [72.7, 434.0], [72.8, 437.0], [72.9, 438.0], [73.0, 440.0], [73.1, 442.0], [73.2, 444.0], [73.3, 446.0], [73.4, 447.0], [73.5, 448.0], [73.6, 449.0], [73.7, 452.0], [73.8, 453.0], [73.9, 454.0], [74.0, 456.0], [74.1, 459.0], [74.2, 460.0], [74.3, 461.0], [74.4, 463.0], [74.5, 464.0], [74.6, 465.0], [74.7, 466.0], [74.8, 469.0], [74.9, 470.0], [75.0, 471.0], [75.1, 472.0], [75.2, 474.0], [75.3, 475.0], [75.4, 476.0], [75.5, 478.0], [75.6, 480.0], [75.7, 481.0], [75.8, 483.0], [75.9, 484.0], [76.0, 486.0], [76.1, 487.0], [76.2, 489.0], [76.3, 491.0], [76.4, 493.0], [76.5, 493.0], [76.6, 497.0], [76.7, 497.0], [76.8, 499.0], [76.9, 500.0], [77.0, 501.0], [77.1, 502.0], [77.2, 505.0], [77.3, 507.0], [77.4, 509.0], [77.5, 510.0], [77.6, 512.0], [77.7, 514.0], [77.8, 515.0], [77.9, 518.0], [78.0, 520.0], [78.1, 522.0], [78.2, 523.0], [78.3, 525.0], [78.4, 527.0], [78.5, 529.0], [78.6, 531.0], [78.7, 533.0], [78.8, 535.0], [78.9, 536.0], [79.0, 539.0], [79.1, 542.0], [79.2, 543.0], [79.3, 544.0], [79.4, 546.0], [79.5, 549.0], [79.6, 550.0], [79.7, 552.0], [79.8, 557.0], [79.9, 558.0], [80.0, 559.0], [80.1, 561.0], [80.2, 563.0], [80.3, 565.0], [80.4, 567.0], [80.5, 568.0], [80.6, 570.0], [80.7, 572.0], [80.8, 573.0], [80.9, 574.0], [81.0, 576.0], [81.1, 578.0], [81.2, 579.0], [81.3, 581.0], [81.4, 584.0], [81.5, 585.0], [81.6, 587.0], [81.7, 588.0], [81.8, 590.0], [81.9, 593.0], [82.0, 594.0], [82.1, 596.0], [82.2, 597.0], [82.3, 600.0], [82.4, 602.0], [82.5, 603.0], [82.6, 604.0], [82.7, 606.0], [82.8, 608.0], [82.9, 610.0], [83.0, 611.0], [83.1, 614.0], [83.2, 616.0], [83.3, 619.0], [83.4, 621.0], [83.5, 624.0], [83.6, 627.0], [83.7, 628.0], [83.8, 630.0], [83.9, 631.0], [84.0, 633.0], [84.1, 635.0], [84.2, 637.0], [84.3, 639.0], [84.4, 639.0], [84.5, 641.0], [84.6, 645.0], [84.7, 646.0], [84.8, 649.0], [84.9, 653.0], [85.0, 655.0], [85.1, 658.0], [85.2, 662.0], [85.3, 664.0], [85.4, 665.0], [85.5, 666.0], [85.6, 668.0], [85.7, 669.0], [85.8, 671.0], [85.9, 674.0], [86.0, 676.0], [86.1, 677.0], [86.2, 680.0], [86.3, 683.0], [86.4, 685.0], [86.5, 688.0], [86.6, 690.0], [86.7, 692.0], [86.8, 694.0], [86.9, 698.0], [87.0, 699.0], [87.1, 703.0], [87.2, 703.0], [87.3, 706.0], [87.4, 708.0], [87.5, 713.0], [87.6, 717.0], [87.7, 720.0], [87.8, 725.0], [87.9, 728.0], [88.0, 730.0], [88.1, 733.0], [88.2, 737.0], [88.3, 739.0], [88.4, 740.0], [88.5, 742.0], [88.6, 746.0], [88.7, 747.0], [88.8, 751.0], [88.9, 756.0], [89.0, 757.0], [89.1, 760.0], [89.2, 761.0], [89.3, 765.0], [89.4, 768.0], [89.5, 771.0], [89.6, 772.0], [89.7, 782.0], [89.8, 787.0], [89.9, 791.0], [90.0, 792.0], [90.1, 795.0], [90.2, 797.0], [90.3, 800.0], [90.4, 808.0], [90.5, 813.0], [90.6, 818.0], [90.7, 822.0], [90.8, 826.0], [90.9, 833.0], [91.0, 837.0], [91.1, 840.0], [91.2, 844.0], [91.3, 850.0], [91.4, 853.0], [91.5, 856.0], [91.6, 858.0], [91.7, 863.0], [91.8, 868.0], [91.9, 877.0], [92.0, 880.0], [92.1, 888.0], [92.2, 892.0], [92.3, 900.0], [92.4, 906.0], [92.5, 908.0], [92.6, 916.0], [92.7, 918.0], [92.8, 925.0], [92.9, 928.0], [93.0, 934.0], [93.1, 941.0], [93.2, 943.0], [93.3, 951.0], [93.4, 960.0], [93.5, 969.0], [93.6, 980.0], [93.7, 984.0], [93.8, 994.0], [93.9, 996.0], [94.0, 1001.0], [94.1, 1005.0], [94.2, 1012.0], [94.3, 1017.0], [94.4, 1020.0], [94.5, 1025.0], [94.6, 1031.0], [94.7, 1039.0], [94.8, 1046.0], [94.9, 1049.0], [95.0, 1057.0], [95.1, 1063.0], [95.2, 1069.0], [95.3, 1075.0], [95.4, 1079.0], [95.5, 1087.0], [95.6, 1095.0], [95.7, 1102.0], [95.8, 1106.0], [95.9, 1119.0], [96.0, 1140.0], [96.1, 1152.0], [96.2, 1161.0], [96.3, 1175.0], [96.4, 1192.0], [96.5, 1199.0], [96.6, 1209.0], [96.7, 1217.0], [96.8, 1226.0], [96.9, 1231.0], [97.0, 1264.0], [97.1, 1272.0], [97.2, 1285.0], [97.3, 1292.0], [97.4, 1311.0], [97.5, 1324.0], [97.6, 1338.0], [97.7, 1356.0], [97.8, 1383.0], [97.9, 1392.0], [98.0, 1415.0], [98.1, 1445.0], [98.2, 1464.0], [98.3, 1488.0], [98.4, 1500.0], [98.5, 1509.0], [98.6, 1530.0], [98.7, 1578.0], [98.8, 1605.0], [98.9, 1641.0], [99.0, 1665.0], [99.1, 1693.0], [99.2, 1740.0], [99.3, 1842.0], [99.4, 1932.0], [99.5, 1964.0], [99.6, 2023.0], [99.7, 2210.0], [99.8, 2265.0], [99.9, 3005.0], [100.0, 3641.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 2149.0, "series": [{"data": [[0.0, 2149.0], [600.0, 248.0], [700.0, 172.0], [800.0, 106.0], [900.0, 89.0], [1000.0, 88.0], [1100.0, 46.0], [1200.0, 41.0], [1300.0, 34.0], [1400.0, 23.0], [1500.0, 21.0], [100.0, 592.0], [1600.0, 17.0], [1700.0, 9.0], [1800.0, 5.0], [1900.0, 10.0], [2000.0, 6.0], [2200.0, 8.0], [2400.0, 1.0], [2600.0, 1.0], [2900.0, 1.0], [3000.0, 3.0], [200.0, 560.0], [3200.0, 1.0], [3600.0, 2.0], [300.0, 399.0], [400.0, 345.0], [500.0, 285.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3600.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 84.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 4048.0, "series": [{"data": [[0.0, 4048.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1130.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 84.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.926751592356691, "minX": 1.60374564E12, "maxY": 10.0, "series": [{"data": [[1.6037457E12, 10.0], [1.60374564E12, 9.926751592356691], [1.60374582E12, 9.958100558659218], [1.60374576E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60374582E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 320.61532596263754, "minX": 1.0, "maxY": 3222.0, "series": [{"data": [[4.0, 1092.0], [8.0, 1211.0], [2.0, 2983.0], [1.0, 3222.0], [9.0, 449.3333333333333], [5.0, 1267.0], [10.0, 320.61532596263754], [6.0, 3005.0], [3.0, 3063.0], [7.0, 593.5]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.98707715697455, 324.05226149752895]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 2823.883333333333, "minX": 1.60374564E12, "maxY": 1630859.9, "series": [{"data": [[1.6037457E12, 1630859.9], [1.60374564E12, 123880.86666666667], [1.60374582E12, 1099043.15], [1.60374576E12, 1397376.6]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6037457E12, 13020.7], [1.60374564E12, 2823.883333333333], [1.60374582E12, 9496.116666666667], [1.60374576E12, 20150.25]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60374582E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 254.26497890295343, "minX": 1.60374564E12, "maxY": 395.5777925531923, "series": [{"data": [[1.6037457E12, 395.5777925531923], [1.60374564E12, 301.0286624203824], [1.60374582E12, 384.6210428305406], [1.60374576E12, 254.26497890295343]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60374582E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 253.9451476793247, "minX": 1.60374564E12, "maxY": 394.9953457446806, "series": [{"data": [[1.6037457E12, 394.9953457446806], [1.60374564E12, 300.767515923567], [1.60374582E12, 384.10707635009237], [1.60374576E12, 253.9451476793247]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60374582E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.006517690875232776, "minX": 1.60374564E12, "maxY": 0.2898089171974519, "series": [{"data": [[1.6037457E12, 0.009308510638297877], [1.60374564E12, 0.2898089171974519], [1.60374582E12, 0.006517690875232776], [1.60374576E12, 0.009704641350210964]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60374582E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 30.0, "minX": 1.60374564E12, "maxY": 3641.0, "series": [{"data": [[1.6037457E12, 2293.0], [1.60374564E12, 1209.0], [1.60374582E12, 3641.0], [1.60374576E12, 2234.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6037457E12, 36.0], [1.60374564E12, 36.0], [1.60374582E12, 34.0], [1.60374576E12, 35.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6037457E12, 36.89950014352799], [1.60374564E12, 36.0], [1.60374582E12, 34.0], [1.60374576E12, 35.47290022611618]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6037457E12, 36.29749982059002], [1.60374564E12, 36.0], [1.60374582E12, 34.0], [1.60374576E12, 35.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.6037457E12, 31.0], [1.60374564E12, 34.0], [1.60374582E12, 30.0], [1.60374576E12, 31.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6037457E12, 282.0], [1.60374564E12, 113.5], [1.60374582E12, 217.0], [1.60374576E12, 114.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60374582E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 47.5, "minX": 1.0, "maxY": 2983.0, "series": [{"data": [[3.0, 2983.0], [4.0, 2264.0], [5.0, 1216.0], [6.0, 1169.0], [7.0, 950.0], [8.0, 1134.5], [9.0, 1350.0], [10.0, 1038.5], [11.0, 860.0], [12.0, 709.0], [13.0, 624.0], [14.0, 658.0], [15.0, 661.5], [16.0, 576.5], [17.0, 525.5], [18.0, 535.0], [19.0, 491.0], [20.0, 380.5], [21.0, 364.0], [22.0, 377.0], [23.0, 291.0], [24.0, 358.5], [25.0, 330.5], [26.0, 253.0], [27.0, 307.0], [29.0, 216.0], [30.0, 241.0], [31.0, 371.0], [32.0, 242.0], [33.0, 111.0], [35.0, 79.0], [34.0, 282.5], [36.0, 92.0], [37.0, 223.0], [39.0, 249.0], [38.0, 198.5], [40.0, 84.5], [43.0, 98.0], [44.0, 96.5], [45.0, 185.0], [47.0, 86.0], [46.0, 91.5], [48.0, 89.5], [50.0, 81.5], [51.0, 114.0], [52.0, 88.5], [53.0, 115.0], [55.0, 76.0], [57.0, 86.0], [59.0, 111.0], [61.0, 83.0], [62.0, 94.5], [64.0, 125.0], [67.0, 48.0], [66.0, 66.5], [70.0, 97.0], [71.0, 73.0], [73.0, 80.0], [74.0, 47.5], [76.0, 80.5], [79.0, 75.0], [78.0, 68.5], [84.0, 87.0], [93.0, 81.0], [1.0, 1684.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 93.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 47.5, "minX": 1.0, "maxY": 2982.0, "series": [{"data": [[3.0, 2982.0], [4.0, 2262.5], [5.0, 1214.5], [6.0, 1166.0], [7.0, 949.5], [8.0, 1131.0], [9.0, 1349.5], [10.0, 1036.0], [11.0, 859.5], [12.0, 706.5], [13.0, 624.0], [14.0, 657.5], [15.0, 661.0], [16.0, 575.0], [17.0, 525.5], [18.0, 534.0], [19.0, 490.0], [20.0, 377.5], [21.0, 364.0], [22.0, 375.0], [23.0, 289.5], [24.0, 358.5], [25.0, 329.5], [26.0, 252.5], [27.0, 307.0], [29.0, 215.0], [30.0, 240.5], [31.0, 371.0], [32.0, 242.0], [33.0, 111.0], [35.0, 79.0], [34.0, 282.0], [36.0, 92.0], [37.0, 223.0], [39.0, 249.0], [38.0, 198.0], [40.0, 84.5], [43.0, 98.0], [44.0, 96.5], [45.0, 184.0], [47.0, 86.0], [46.0, 91.5], [48.0, 89.0], [50.0, 81.5], [51.0, 114.0], [52.0, 88.0], [53.0, 115.0], [55.0, 76.0], [57.0, 86.0], [59.0, 111.0], [61.0, 82.5], [62.0, 94.5], [64.0, 125.0], [67.0, 48.0], [66.0, 66.5], [70.0, 97.0], [71.0, 73.0], [73.0, 80.0], [74.0, 47.5], [76.0, 79.0], [79.0, 74.0], [78.0, 68.5], [84.0, 87.0], [93.0, 81.0], [1.0, 1682.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 93.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 5.4, "minX": 1.60374564E12, "maxY": 39.5, "series": [{"data": [[1.6037457E12, 25.066666666666666], [1.60374564E12, 5.4], [1.60374582E12, 17.733333333333334], [1.60374576E12, 39.5]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60374582E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 5.233333333333333, "minX": 1.60374564E12, "maxY": 39.5, "series": [{"data": [[1.6037457E12, 25.066666666666666], [1.60374564E12, 5.233333333333333], [1.60374582E12, 17.9], [1.60374576E12, 39.5]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60374582E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 5.233333333333333, "minX": 1.60374564E12, "maxY": 39.5, "series": [{"data": [[1.6037457E12, 25.066666666666666], [1.60374564E12, 5.233333333333333], [1.60374582E12, 17.9], [1.60374576E12, 39.5]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60374582E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 5.233333333333333, "minX": 1.60374564E12, "maxY": 39.5, "series": [{"data": [[1.6037457E12, 25.066666666666666], [1.60374564E12, 5.233333333333333], [1.60374582E12, 17.9], [1.60374576E12, 39.5]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60374582E12, "title": "Total Transactions Per Second"}},
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

