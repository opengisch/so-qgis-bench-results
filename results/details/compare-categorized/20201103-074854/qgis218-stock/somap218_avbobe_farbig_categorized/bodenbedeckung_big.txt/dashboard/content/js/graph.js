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
        data: {"result": {"minY": 17.0, "minX": 0.0, "maxY": 13904.0, "series": [{"data": [[0.0, 17.0], [0.1, 21.0], [0.2, 22.0], [0.3, 23.0], [0.4, 26.0], [0.5, 26.0], [0.6, 27.0], [0.7, 27.0], [0.8, 27.0], [0.9, 27.0], [1.0, 28.0], [1.1, 28.0], [1.2, 28.0], [1.3, 29.0], [1.4, 29.0], [1.5, 29.0], [1.6, 30.0], [1.7, 30.0], [1.8, 30.0], [1.9, 30.0], [2.0, 31.0], [2.1, 31.0], [2.2, 31.0], [2.3, 31.0], [2.4, 31.0], [2.5, 32.0], [2.6, 32.0], [2.7, 32.0], [2.8, 32.0], [2.9, 32.0], [3.0, 32.0], [3.1, 33.0], [3.2, 33.0], [3.3, 33.0], [3.4, 33.0], [3.5, 34.0], [3.6, 34.0], [3.7, 34.0], [3.8, 34.0], [3.9, 34.0], [4.0, 34.0], [4.1, 35.0], [4.2, 35.0], [4.3, 35.0], [4.4, 35.0], [4.5, 35.0], [4.6, 36.0], [4.7, 36.0], [4.8, 36.0], [4.9, 36.0], [5.0, 36.0], [5.1, 36.0], [5.2, 36.0], [5.3, 37.0], [5.4, 37.0], [5.5, 37.0], [5.6, 37.0], [5.7, 37.0], [5.8, 38.0], [5.9, 38.0], [6.0, 38.0], [6.1, 38.0], [6.2, 38.0], [6.3, 39.0], [6.4, 39.0], [6.5, 39.0], [6.6, 39.0], [6.7, 39.0], [6.8, 39.0], [6.9, 40.0], [7.0, 40.0], [7.1, 40.0], [7.2, 40.0], [7.3, 41.0], [7.4, 41.0], [7.5, 41.0], [7.6, 41.0], [7.7, 42.0], [7.8, 42.0], [7.9, 42.0], [8.0, 42.0], [8.1, 42.0], [8.2, 43.0], [8.3, 43.0], [8.4, 43.0], [8.5, 43.0], [8.6, 43.0], [8.7, 43.0], [8.8, 44.0], [8.9, 44.0], [9.0, 44.0], [9.1, 44.0], [9.2, 44.0], [9.3, 44.0], [9.4, 45.0], [9.5, 45.0], [9.6, 45.0], [9.7, 45.0], [9.8, 45.0], [9.9, 46.0], [10.0, 46.0], [10.1, 46.0], [10.2, 46.0], [10.3, 46.0], [10.4, 47.0], [10.5, 47.0], [10.6, 47.0], [10.7, 47.0], [10.8, 47.0], [10.9, 47.0], [11.0, 48.0], [11.1, 48.0], [11.2, 48.0], [11.3, 49.0], [11.4, 49.0], [11.5, 49.0], [11.6, 49.0], [11.7, 50.0], [11.8, 50.0], [11.9, 50.0], [12.0, 50.0], [12.1, 50.0], [12.2, 50.0], [12.3, 51.0], [12.4, 51.0], [12.5, 51.0], [12.6, 51.0], [12.7, 51.0], [12.8, 52.0], [12.9, 52.0], [13.0, 52.0], [13.1, 52.0], [13.2, 52.0], [13.3, 53.0], [13.4, 53.0], [13.5, 53.0], [13.6, 53.0], [13.7, 54.0], [13.8, 54.0], [13.9, 54.0], [14.0, 54.0], [14.1, 54.0], [14.2, 55.0], [14.3, 55.0], [14.4, 55.0], [14.5, 55.0], [14.6, 55.0], [14.7, 56.0], [14.8, 56.0], [14.9, 56.0], [15.0, 56.0], [15.1, 56.0], [15.2, 57.0], [15.3, 57.0], [15.4, 57.0], [15.5, 57.0], [15.6, 57.0], [15.7, 58.0], [15.8, 58.0], [15.9, 58.0], [16.0, 58.0], [16.1, 58.0], [16.2, 58.0], [16.3, 58.0], [16.4, 59.0], [16.5, 59.0], [16.6, 59.0], [16.7, 59.0], [16.8, 60.0], [16.9, 60.0], [17.0, 61.0], [17.1, 61.0], [17.2, 61.0], [17.3, 61.0], [17.4, 61.0], [17.5, 61.0], [17.6, 62.0], [17.7, 62.0], [17.8, 62.0], [17.9, 62.0], [18.0, 62.0], [18.1, 62.0], [18.2, 62.0], [18.3, 63.0], [18.4, 63.0], [18.5, 63.0], [18.6, 64.0], [18.7, 64.0], [18.8, 64.0], [18.9, 64.0], [19.0, 65.0], [19.1, 65.0], [19.2, 65.0], [19.3, 65.0], [19.4, 65.0], [19.5, 66.0], [19.6, 66.0], [19.7, 66.0], [19.8, 66.0], [19.9, 66.0], [20.0, 67.0], [20.1, 67.0], [20.2, 67.0], [20.3, 67.0], [20.4, 67.0], [20.5, 68.0], [20.6, 68.0], [20.7, 68.0], [20.8, 68.0], [20.9, 69.0], [21.0, 69.0], [21.1, 69.0], [21.2, 69.0], [21.3, 69.0], [21.4, 70.0], [21.5, 70.0], [21.6, 70.0], [21.7, 70.0], [21.8, 71.0], [21.9, 71.0], [22.0, 71.0], [22.1, 71.0], [22.2, 72.0], [22.3, 72.0], [22.4, 72.0], [22.5, 73.0], [22.6, 73.0], [22.7, 73.0], [22.8, 73.0], [22.9, 73.0], [23.0, 74.0], [23.1, 74.0], [23.2, 74.0], [23.3, 74.0], [23.4, 74.0], [23.5, 75.0], [23.6, 75.0], [23.7, 75.0], [23.8, 75.0], [23.9, 75.0], [24.0, 76.0], [24.1, 76.0], [24.2, 76.0], [24.3, 77.0], [24.4, 77.0], [24.5, 77.0], [24.6, 77.0], [24.7, 77.0], [24.8, 78.0], [24.9, 78.0], [25.0, 78.0], [25.1, 79.0], [25.2, 79.0], [25.3, 79.0], [25.4, 80.0], [25.5, 80.0], [25.6, 80.0], [25.7, 81.0], [25.8, 81.0], [25.9, 81.0], [26.0, 82.0], [26.1, 82.0], [26.2, 82.0], [26.3, 82.0], [26.4, 83.0], [26.5, 83.0], [26.6, 83.0], [26.7, 83.0], [26.8, 84.0], [26.9, 84.0], [27.0, 85.0], [27.1, 85.0], [27.2, 85.0], [27.3, 85.0], [27.4, 86.0], [27.5, 86.0], [27.6, 86.0], [27.7, 86.0], [27.8, 87.0], [27.9, 87.0], [28.0, 88.0], [28.1, 88.0], [28.2, 88.0], [28.3, 88.0], [28.4, 89.0], [28.5, 89.0], [28.6, 89.0], [28.7, 89.0], [28.8, 90.0], [28.9, 90.0], [29.0, 91.0], [29.1, 91.0], [29.2, 91.0], [29.3, 92.0], [29.4, 92.0], [29.5, 93.0], [29.6, 93.0], [29.7, 94.0], [29.8, 94.0], [29.9, 94.0], [30.0, 94.0], [30.1, 95.0], [30.2, 95.0], [30.3, 96.0], [30.4, 96.0], [30.5, 97.0], [30.6, 97.0], [30.7, 98.0], [30.8, 99.0], [30.9, 99.0], [31.0, 100.0], [31.1, 100.0], [31.2, 100.0], [31.3, 101.0], [31.4, 101.0], [31.5, 101.0], [31.6, 102.0], [31.7, 102.0], [31.8, 103.0], [31.9, 104.0], [32.0, 104.0], [32.1, 106.0], [32.2, 106.0], [32.3, 107.0], [32.4, 107.0], [32.5, 108.0], [32.6, 108.0], [32.7, 109.0], [32.8, 110.0], [32.9, 111.0], [33.0, 112.0], [33.1, 112.0], [33.2, 113.0], [33.3, 114.0], [33.4, 115.0], [33.5, 116.0], [33.6, 116.0], [33.7, 116.0], [33.8, 117.0], [33.9, 118.0], [34.0, 119.0], [34.1, 119.0], [34.2, 121.0], [34.3, 122.0], [34.4, 122.0], [34.5, 123.0], [34.6, 124.0], [34.7, 125.0], [34.8, 125.0], [34.9, 126.0], [35.0, 128.0], [35.1, 128.0], [35.2, 130.0], [35.3, 130.0], [35.4, 132.0], [35.5, 133.0], [35.6, 133.0], [35.7, 134.0], [35.8, 135.0], [35.9, 136.0], [36.0, 137.0], [36.1, 138.0], [36.2, 139.0], [36.3, 139.0], [36.4, 139.0], [36.5, 140.0], [36.6, 141.0], [36.7, 142.0], [36.8, 143.0], [36.9, 145.0], [37.0, 147.0], [37.1, 147.0], [37.2, 148.0], [37.3, 148.0], [37.4, 149.0], [37.5, 151.0], [37.6, 152.0], [37.7, 153.0], [37.8, 154.0], [37.9, 154.0], [38.0, 155.0], [38.1, 155.0], [38.2, 156.0], [38.3, 158.0], [38.4, 158.0], [38.5, 159.0], [38.6, 160.0], [38.7, 160.0], [38.8, 161.0], [38.9, 162.0], [39.0, 162.0], [39.1, 164.0], [39.2, 164.0], [39.3, 165.0], [39.4, 166.0], [39.5, 167.0], [39.6, 167.0], [39.7, 168.0], [39.8, 169.0], [39.9, 169.0], [40.0, 170.0], [40.1, 170.0], [40.2, 171.0], [40.3, 171.0], [40.4, 172.0], [40.5, 172.0], [40.6, 173.0], [40.7, 174.0], [40.8, 174.0], [40.9, 175.0], [41.0, 176.0], [41.1, 176.0], [41.2, 177.0], [41.3, 178.0], [41.4, 178.0], [41.5, 179.0], [41.6, 179.0], [41.7, 181.0], [41.8, 181.0], [41.9, 182.0], [42.0, 183.0], [42.1, 184.0], [42.2, 184.0], [42.3, 185.0], [42.4, 186.0], [42.5, 186.0], [42.6, 187.0], [42.7, 187.0], [42.8, 189.0], [42.9, 189.0], [43.0, 189.0], [43.1, 190.0], [43.2, 190.0], [43.3, 191.0], [43.4, 191.0], [43.5, 192.0], [43.6, 193.0], [43.7, 193.0], [43.8, 194.0], [43.9, 194.0], [44.0, 195.0], [44.1, 195.0], [44.2, 195.0], [44.3, 196.0], [44.4, 197.0], [44.5, 197.0], [44.6, 198.0], [44.7, 198.0], [44.8, 199.0], [44.9, 200.0], [45.0, 201.0], [45.1, 201.0], [45.2, 202.0], [45.3, 202.0], [45.4, 203.0], [45.5, 203.0], [45.6, 204.0], [45.7, 205.0], [45.8, 206.0], [45.9, 207.0], [46.0, 207.0], [46.1, 208.0], [46.2, 209.0], [46.3, 210.0], [46.4, 210.0], [46.5, 211.0], [46.6, 212.0], [46.7, 213.0], [46.8, 214.0], [46.9, 214.0], [47.0, 215.0], [47.1, 215.0], [47.2, 216.0], [47.3, 216.0], [47.4, 217.0], [47.5, 218.0], [47.6, 218.0], [47.7, 219.0], [47.8, 220.0], [47.9, 220.0], [48.0, 221.0], [48.1, 221.0], [48.2, 222.0], [48.3, 223.0], [48.4, 224.0], [48.5, 225.0], [48.6, 225.0], [48.7, 226.0], [48.8, 227.0], [48.9, 227.0], [49.0, 227.0], [49.1, 228.0], [49.2, 228.0], [49.3, 229.0], [49.4, 230.0], [49.5, 231.0], [49.6, 232.0], [49.7, 233.0], [49.8, 233.0], [49.9, 234.0], [50.0, 234.0], [50.1, 235.0], [50.2, 236.0], [50.3, 237.0], [50.4, 238.0], [50.5, 238.0], [50.6, 240.0], [50.7, 241.0], [50.8, 241.0], [50.9, 242.0], [51.0, 243.0], [51.1, 243.0], [51.2, 244.0], [51.3, 244.0], [51.4, 245.0], [51.5, 246.0], [51.6, 247.0], [51.7, 248.0], [51.8, 249.0], [51.9, 250.0], [52.0, 250.0], [52.1, 251.0], [52.2, 252.0], [52.3, 252.0], [52.4, 254.0], [52.5, 254.0], [52.6, 254.0], [52.7, 255.0], [52.8, 256.0], [52.9, 257.0], [53.0, 258.0], [53.1, 259.0], [53.2, 260.0], [53.3, 261.0], [53.4, 261.0], [53.5, 262.0], [53.6, 263.0], [53.7, 264.0], [53.8, 265.0], [53.9, 266.0], [54.0, 266.0], [54.1, 267.0], [54.2, 268.0], [54.3, 268.0], [54.4, 269.0], [54.5, 270.0], [54.6, 270.0], [54.7, 271.0], [54.8, 272.0], [54.9, 274.0], [55.0, 276.0], [55.1, 276.0], [55.2, 278.0], [55.3, 279.0], [55.4, 279.0], [55.5, 280.0], [55.6, 281.0], [55.7, 283.0], [55.8, 284.0], [55.9, 285.0], [56.0, 287.0], [56.1, 288.0], [56.2, 288.0], [56.3, 289.0], [56.4, 290.0], [56.5, 290.0], [56.6, 291.0], [56.7, 292.0], [56.8, 293.0], [56.9, 294.0], [57.0, 295.0], [57.1, 296.0], [57.2, 298.0], [57.3, 298.0], [57.4, 299.0], [57.5, 300.0], [57.6, 301.0], [57.7, 302.0], [57.8, 303.0], [57.9, 303.0], [58.0, 305.0], [58.1, 306.0], [58.2, 307.0], [58.3, 308.0], [58.4, 309.0], [58.5, 310.0], [58.6, 311.0], [58.7, 311.0], [58.8, 312.0], [58.9, 314.0], [59.0, 315.0], [59.1, 316.0], [59.2, 317.0], [59.3, 318.0], [59.4, 318.0], [59.5, 319.0], [59.6, 320.0], [59.7, 322.0], [59.8, 323.0], [59.9, 324.0], [60.0, 325.0], [60.1, 327.0], [60.2, 327.0], [60.3, 328.0], [60.4, 329.0], [60.5, 329.0], [60.6, 331.0], [60.7, 332.0], [60.8, 333.0], [60.9, 334.0], [61.0, 334.0], [61.1, 336.0], [61.2, 336.0], [61.3, 337.0], [61.4, 338.0], [61.5, 339.0], [61.6, 340.0], [61.7, 340.0], [61.8, 341.0], [61.9, 341.0], [62.0, 342.0], [62.1, 343.0], [62.2, 344.0], [62.3, 345.0], [62.4, 346.0], [62.5, 347.0], [62.6, 348.0], [62.7, 349.0], [62.8, 350.0], [62.9, 350.0], [63.0, 352.0], [63.1, 352.0], [63.2, 354.0], [63.3, 355.0], [63.4, 355.0], [63.5, 356.0], [63.6, 357.0], [63.7, 358.0], [63.8, 360.0], [63.9, 361.0], [64.0, 362.0], [64.1, 363.0], [64.2, 363.0], [64.3, 365.0], [64.4, 366.0], [64.5, 367.0], [64.6, 370.0], [64.7, 371.0], [64.8, 371.0], [64.9, 372.0], [65.0, 372.0], [65.1, 373.0], [65.2, 374.0], [65.3, 375.0], [65.4, 376.0], [65.5, 378.0], [65.6, 379.0], [65.7, 380.0], [65.8, 381.0], [65.9, 381.0], [66.0, 383.0], [66.1, 385.0], [66.2, 385.0], [66.3, 385.0], [66.4, 386.0], [66.5, 387.0], [66.6, 388.0], [66.7, 388.0], [66.8, 389.0], [66.9, 390.0], [67.0, 392.0], [67.1, 393.0], [67.2, 394.0], [67.3, 395.0], [67.4, 396.0], [67.5, 397.0], [67.6, 398.0], [67.7, 398.0], [67.8, 400.0], [67.9, 400.0], [68.0, 401.0], [68.1, 402.0], [68.2, 403.0], [68.3, 404.0], [68.4, 405.0], [68.5, 406.0], [68.6, 406.0], [68.7, 407.0], [68.8, 408.0], [68.9, 410.0], [69.0, 410.0], [69.1, 411.0], [69.2, 412.0], [69.3, 414.0], [69.4, 415.0], [69.5, 417.0], [69.6, 417.0], [69.7, 419.0], [69.8, 419.0], [69.9, 421.0], [70.0, 422.0], [70.1, 423.0], [70.2, 426.0], [70.3, 427.0], [70.4, 428.0], [70.5, 429.0], [70.6, 430.0], [70.7, 431.0], [70.8, 432.0], [70.9, 433.0], [71.0, 435.0], [71.1, 436.0], [71.2, 437.0], [71.3, 438.0], [71.4, 439.0], [71.5, 440.0], [71.6, 441.0], [71.7, 442.0], [71.8, 442.0], [71.9, 443.0], [72.0, 444.0], [72.1, 445.0], [72.2, 446.0], [72.3, 448.0], [72.4, 449.0], [72.5, 450.0], [72.6, 451.0], [72.7, 452.0], [72.8, 453.0], [72.9, 454.0], [73.0, 456.0], [73.1, 457.0], [73.2, 458.0], [73.3, 459.0], [73.4, 461.0], [73.5, 463.0], [73.6, 464.0], [73.7, 466.0], [73.8, 467.0], [73.9, 468.0], [74.0, 469.0], [74.1, 470.0], [74.2, 471.0], [74.3, 472.0], [74.4, 472.0], [74.5, 474.0], [74.6, 475.0], [74.7, 476.0], [74.8, 478.0], [74.9, 478.0], [75.0, 479.0], [75.1, 480.0], [75.2, 481.0], [75.3, 483.0], [75.4, 483.0], [75.5, 485.0], [75.6, 486.0], [75.7, 488.0], [75.8, 489.0], [75.9, 490.0], [76.0, 491.0], [76.1, 492.0], [76.2, 493.0], [76.3, 494.0], [76.4, 495.0], [76.5, 496.0], [76.6, 497.0], [76.7, 498.0], [76.8, 499.0], [76.9, 500.0], [77.0, 501.0], [77.1, 502.0], [77.2, 503.0], [77.3, 503.0], [77.4, 504.0], [77.5, 505.0], [77.6, 506.0], [77.7, 508.0], [77.8, 508.0], [77.9, 510.0], [78.0, 511.0], [78.1, 512.0], [78.2, 513.0], [78.3, 513.0], [78.4, 514.0], [78.5, 515.0], [78.6, 517.0], [78.7, 518.0], [78.8, 520.0], [78.9, 521.0], [79.0, 523.0], [79.1, 524.0], [79.2, 527.0], [79.3, 528.0], [79.4, 529.0], [79.5, 530.0], [79.6, 531.0], [79.7, 532.0], [79.8, 532.0], [79.9, 533.0], [80.0, 534.0], [80.1, 535.0], [80.2, 537.0], [80.3, 538.0], [80.4, 539.0], [80.5, 540.0], [80.6, 541.0], [80.7, 542.0], [80.8, 543.0], [80.9, 545.0], [81.0, 546.0], [81.1, 547.0], [81.2, 549.0], [81.3, 550.0], [81.4, 551.0], [81.5, 553.0], [81.6, 554.0], [81.7, 555.0], [81.8, 556.0], [81.9, 559.0], [82.0, 560.0], [82.1, 563.0], [82.2, 564.0], [82.3, 565.0], [82.4, 566.0], [82.5, 567.0], [82.6, 567.0], [82.7, 569.0], [82.8, 570.0], [82.9, 571.0], [83.0, 573.0], [83.1, 574.0], [83.2, 574.0], [83.3, 575.0], [83.4, 576.0], [83.5, 577.0], [83.6, 577.0], [83.7, 579.0], [83.8, 580.0], [83.9, 581.0], [84.0, 583.0], [84.1, 583.0], [84.2, 585.0], [84.3, 586.0], [84.4, 587.0], [84.5, 589.0], [84.6, 590.0], [84.7, 591.0], [84.8, 594.0], [84.9, 595.0], [85.0, 596.0], [85.1, 599.0], [85.2, 601.0], [85.3, 602.0], [85.4, 603.0], [85.5, 604.0], [85.6, 606.0], [85.7, 608.0], [85.8, 611.0], [85.9, 612.0], [86.0, 615.0], [86.1, 618.0], [86.2, 620.0], [86.3, 622.0], [86.4, 623.0], [86.5, 625.0], [86.6, 626.0], [86.7, 628.0], [86.8, 630.0], [86.9, 634.0], [87.0, 637.0], [87.1, 638.0], [87.2, 641.0], [87.3, 642.0], [87.4, 643.0], [87.5, 645.0], [87.6, 647.0], [87.7, 649.0], [87.8, 651.0], [87.9, 653.0], [88.0, 654.0], [88.1, 658.0], [88.2, 660.0], [88.3, 661.0], [88.4, 662.0], [88.5, 663.0], [88.6, 665.0], [88.7, 666.0], [88.8, 667.0], [88.9, 669.0], [89.0, 671.0], [89.1, 673.0], [89.2, 674.0], [89.3, 676.0], [89.4, 678.0], [89.5, 681.0], [89.6, 682.0], [89.7, 684.0], [89.8, 686.0], [89.9, 687.0], [90.0, 689.0], [90.1, 691.0], [90.2, 692.0], [90.3, 694.0], [90.4, 697.0], [90.5, 699.0], [90.6, 700.0], [90.7, 703.0], [90.8, 707.0], [90.9, 710.0], [91.0, 714.0], [91.1, 717.0], [91.2, 719.0], [91.3, 721.0], [91.4, 722.0], [91.5, 725.0], [91.6, 729.0], [91.7, 730.0], [91.8, 733.0], [91.9, 737.0], [92.0, 738.0], [92.1, 742.0], [92.2, 750.0], [92.3, 756.0], [92.4, 758.0], [92.5, 761.0], [92.6, 764.0], [92.7, 767.0], [92.8, 771.0], [92.9, 779.0], [93.0, 783.0], [93.1, 789.0], [93.2, 793.0], [93.3, 797.0], [93.4, 803.0], [93.5, 807.0], [93.6, 812.0], [93.7, 822.0], [93.8, 831.0], [93.9, 839.0], [94.0, 849.0], [94.1, 860.0], [94.2, 873.0], [94.3, 886.0], [94.4, 907.0], [94.5, 916.0], [94.6, 936.0], [94.7, 961.0], [94.8, 987.0], [94.9, 1000.0], [95.0, 1015.0], [95.1, 1049.0], [95.2, 1062.0], [95.3, 1092.0], [95.4, 1103.0], [95.5, 1135.0], [95.6, 1152.0], [95.7, 1240.0], [95.8, 1293.0], [95.9, 1379.0], [96.0, 1404.0], [96.1, 1455.0], [96.2, 1516.0], [96.3, 1541.0], [96.4, 1630.0], [96.5, 1688.0], [96.6, 1716.0], [96.7, 1777.0], [96.8, 1813.0], [96.9, 1872.0], [97.0, 1990.0], [97.1, 2103.0], [97.2, 2218.0], [97.3, 2270.0], [97.4, 2411.0], [97.5, 2479.0], [97.6, 2618.0], [97.7, 2839.0], [97.8, 2901.0], [97.9, 3029.0], [98.0, 3122.0], [98.1, 3202.0], [98.2, 3303.0], [98.3, 3450.0], [98.4, 3611.0], [98.5, 3736.0], [98.6, 3984.0], [98.7, 4282.0], [98.8, 4357.0], [98.9, 4556.0], [99.0, 5046.0], [99.1, 5182.0], [99.2, 5868.0], [99.3, 7441.0], [99.4, 7970.0], [99.5, 9102.0], [99.6, 9666.0], [99.7, 10797.0], [99.8, 11715.0], [99.9, 12863.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 1607.0, "series": [{"data": [[0.0, 1607.0], [600.0, 283.0], [700.0, 144.0], [800.0, 54.0], [900.0, 26.0], [1000.0, 24.0], [1100.0, 15.0], [1200.0, 9.0], [1300.0, 8.0], [1400.0, 9.0], [1500.0, 11.0], [1600.0, 9.0], [1700.0, 11.0], [1800.0, 9.0], [1900.0, 5.0], [2000.0, 4.0], [2100.0, 3.0], [2200.0, 10.0], [2300.0, 2.0], [2400.0, 8.0], [2500.0, 2.0], [2600.0, 3.0], [2700.0, 1.0], [2800.0, 7.0], [2900.0, 5.0], [3000.0, 5.0], [3100.0, 6.0], [3200.0, 5.0], [3300.0, 3.0], [3400.0, 4.0], [3500.0, 3.0], [3700.0, 3.0], [3600.0, 5.0], [3800.0, 1.0], [3900.0, 3.0], [4000.0, 1.0], [4100.0, 2.0], [4300.0, 4.0], [4200.0, 4.0], [4500.0, 3.0], [4400.0, 2.0], [4700.0, 2.0], [5100.0, 5.0], [5000.0, 3.0], [5300.0, 1.0], [5200.0, 2.0], [5800.0, 2.0], [6000.0, 1.0], [6300.0, 1.0], [6700.0, 2.0], [7400.0, 1.0], [7600.0, 1.0], [7500.0, 1.0], [7800.0, 1.0], [7900.0, 3.0], [8300.0, 1.0], [8400.0, 1.0], [8600.0, 2.0], [9200.0, 2.0], [9100.0, 2.0], [9600.0, 2.0], [10000.0, 1.0], [10300.0, 2.0], [10500.0, 1.0], [10700.0, 1.0], [11200.0, 2.0], [10900.0, 1.0], [11300.0, 1.0], [11700.0, 1.0], [12200.0, 1.0], [11900.0, 1.0], [12300.0, 1.0], [12600.0, 1.0], [12800.0, 1.0], [13200.0, 1.0], [13000.0, 1.0], [12900.0, 1.0], [13600.0, 1.0], [13900.0, 1.0], [100.0, 720.0], [200.0, 654.0], [300.0, 537.0], [400.0, 471.0], [500.0, 429.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 13900.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 200.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 3996.0, "series": [{"data": [[0.0, 3996.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 994.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 200.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.910204081632653, "minX": 1.60438974E12, "maxY": 10.0, "series": [{"data": [[1.60438998E12, 9.910204081632653], [1.6043898E12, 10.0], [1.60438992E12, 10.0], [1.60438974E12, 9.990314769975774], [1.60438986E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60438998E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 443.1261348271198, "minX": 1.0, "maxY": 7917.0, "series": [{"data": [[8.0, 520.0], [4.0, 501.0], [2.0, 575.0], [1.0, 7917.0], [9.0, 634.6666666666666], [10.0, 443.1261348271198], [5.0, 537.0], [3.0, 541.0], [7.0, 563.5]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.989980732177271, 444.8579961464362]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 3849.7166666666667, "minX": 1.60438974E12, "maxY": 6291033.433333334, "series": [{"data": [[1.60438998E12, 1743926.75], [1.6043898E12, 6291033.433333334], [1.60438992E12, 6264667.05], [1.60438974E12, 2901648.7], [1.60438986E12, 5760887.916666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60438998E12, 3849.7166666666667], [1.6043898E12, 8350.833333333334], [1.60438992E12, 8919.1], [1.60438974E12, 6248.9], [1.60438986E12, 12573.083333333334]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60438998E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 291.1816326530613, "minX": 1.60438974E12, "maxY": 521.5959409594097, "series": [{"data": [[1.60438998E12, 291.1816326530613], [1.6043898E12, 521.5959409594097], [1.60438992E12, 511.2716262975779], [1.60438974E12, 436.38983050847474], [1.60438986E12, 397.32925336597316]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60438998E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 289.58163265306143, "minX": 1.60438974E12, "maxY": 517.608856088561, "series": [{"data": [[1.60438998E12, 289.58163265306143], [1.6043898E12, 517.608856088561], [1.60438992E12, 508.4714532871971], [1.60438974E12, 434.6501210653756], [1.60438986E12, 395.43268053855553]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60438998E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.006920415224913503, "minX": 1.60438974E12, "maxY": 0.11259079903147685, "series": [{"data": [[1.60438998E12, 0.012244897959183682], [1.6043898E12, 0.007380073800738014], [1.60438992E12, 0.006920415224913503], [1.60438974E12, 0.11259079903147685], [1.60438986E12, 0.007343941248470003]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60438998E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 17.0, "minX": 1.60438974E12, "maxY": 13904.0, "series": [{"data": [[1.60438998E12, 7917.0], [1.6043898E12, 11307.0], [1.60438992E12, 13632.0], [1.60438974E12, 11285.0], [1.60438986E12, 13904.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60438998E12, 28.837999765872958], [1.6043898E12, 29.0], [1.60438992E12, 26.412999724149707], [1.60438974E12, 27.442999802827835], [1.60438986E12, 27.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60438998E12, 29.72180009365082], [1.6043898E12, 29.0], [1.60438992E12, 27.0], [1.60438974E12, 28.0], [1.60438986E12, 27.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60438998E12, 29.32899988293648], [1.6043898E12, 29.0], [1.60438992E12, 26.991499862074853], [1.60438974E12, 27.85649990141392], [1.60438986E12, 27.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60438998E12, 20.0], [1.6043898E12, 23.0], [1.60438992E12, 17.0], [1.60438974E12, 23.0], [1.60438986E12, 21.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60438998E12, 122.0], [1.6043898E12, 388.0], [1.60438992E12, 348.5], [1.60438974E12, 195.0], [1.60438986E12, 190.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60438998E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 67.0, "minX": 1.0, "maxY": 4246.0, "series": [{"data": [[2.0, 2111.5], [3.0, 3489.0], [4.0, 887.0], [5.0, 749.0], [6.0, 573.0], [7.0, 512.0], [8.0, 476.5], [9.0, 523.0], [10.0, 418.5], [11.0, 351.0], [12.0, 324.0], [13.0, 393.0], [14.0, 295.5], [15.0, 414.0], [16.0, 343.0], [17.0, 410.5], [18.0, 536.5], [19.0, 398.0], [20.0, 424.0], [21.0, 316.5], [22.0, 385.0], [23.0, 302.0], [24.0, 398.5], [25.0, 349.0], [26.0, 301.5], [27.0, 234.5], [28.0, 374.0], [29.0, 284.0], [30.0, 287.5], [31.0, 203.0], [32.0, 203.5], [33.0, 233.0], [35.0, 238.5], [34.0, 236.0], [37.0, 224.5], [36.0, 210.0], [39.0, 183.0], [38.0, 204.5], [40.0, 220.5], [41.0, 200.0], [43.0, 124.0], [42.0, 191.5], [44.0, 196.0], [45.0, 160.0], [46.0, 200.5], [47.0, 180.0], [49.0, 215.0], [48.0, 174.0], [52.0, 100.5], [55.0, 96.5], [54.0, 68.5], [56.0, 72.0], [63.0, 77.0], [70.0, 67.0], [71.0, 82.0], [72.0, 81.0], [1.0, 4246.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 72.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 66.0, "minX": 1.0, "maxY": 4244.5, "series": [{"data": [[2.0, 2101.0], [3.0, 3487.0], [4.0, 879.5], [5.0, 746.0], [6.0, 573.0], [7.0, 512.0], [8.0, 473.0], [9.0, 520.0], [10.0, 418.0], [11.0, 349.0], [12.0, 322.0], [13.0, 392.0], [14.0, 295.0], [15.0, 412.5], [16.0, 340.5], [17.0, 406.0], [18.0, 526.0], [19.0, 397.0], [20.0, 422.5], [21.0, 315.0], [22.0, 383.5], [23.0, 302.0], [24.0, 396.5], [25.0, 346.0], [26.0, 300.5], [27.0, 234.0], [28.0, 373.5], [29.0, 278.0], [30.0, 287.0], [31.0, 202.5], [32.0, 202.5], [33.0, 230.0], [35.0, 238.5], [34.0, 235.5], [37.0, 224.5], [36.0, 210.0], [39.0, 183.0], [38.0, 204.5], [40.0, 219.5], [41.0, 200.0], [43.0, 124.0], [42.0, 191.5], [44.0, 195.5], [45.0, 160.0], [46.0, 196.5], [47.0, 180.0], [49.0, 214.0], [48.0, 174.0], [52.0, 100.5], [55.0, 96.5], [54.0, 68.0], [56.0, 71.5], [63.0, 76.0], [70.0, 66.0], [71.0, 82.0], [72.0, 80.5], [1.0, 4244.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 72.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 8.0, "minX": 1.60438974E12, "maxY": 27.233333333333334, "series": [{"data": [[1.60438998E12, 8.0], [1.6043898E12, 18.066666666666666], [1.60438992E12, 19.266666666666666], [1.60438974E12, 13.933333333333334], [1.60438986E12, 27.233333333333334]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60438998E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 8.166666666666666, "minX": 1.60438974E12, "maxY": 27.233333333333334, "series": [{"data": [[1.60438998E12, 8.166666666666666], [1.6043898E12, 18.066666666666666], [1.60438992E12, 19.266666666666666], [1.60438974E12, 13.766666666666667], [1.60438986E12, 27.233333333333334]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60438998E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 8.166666666666666, "minX": 1.60438974E12, "maxY": 27.233333333333334, "series": [{"data": [[1.60438998E12, 8.166666666666666], [1.6043898E12, 18.066666666666666], [1.60438992E12, 19.266666666666666], [1.60438974E12, 13.766666666666667], [1.60438986E12, 27.233333333333334]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60438998E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 8.166666666666666, "minX": 1.60438974E12, "maxY": 27.233333333333334, "series": [{"data": [[1.60438998E12, 8.166666666666666], [1.6043898E12, 18.066666666666666], [1.60438992E12, 19.266666666666666], [1.60438974E12, 13.766666666666667], [1.60438986E12, 27.233333333333334]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60438998E12, "title": "Total Transactions Per Second"}},
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

