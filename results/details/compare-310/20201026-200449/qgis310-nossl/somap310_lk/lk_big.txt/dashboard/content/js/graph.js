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
        data: {"result": {"minY": 30.0, "minX": 0.0, "maxY": 3166.0, "series": [{"data": [[0.0, 30.0], [0.1, 32.0], [0.2, 33.0], [0.3, 33.0], [0.4, 34.0], [0.5, 34.0], [0.6, 34.0], [0.7, 35.0], [0.8, 35.0], [0.9, 35.0], [1.0, 35.0], [1.1, 36.0], [1.2, 36.0], [1.3, 36.0], [1.4, 36.0], [1.5, 36.0], [1.6, 37.0], [1.7, 37.0], [1.8, 37.0], [1.9, 37.0], [2.0, 37.0], [2.1, 37.0], [2.2, 37.0], [2.3, 38.0], [2.4, 38.0], [2.5, 38.0], [2.6, 38.0], [2.7, 38.0], [2.8, 38.0], [2.9, 38.0], [3.0, 38.0], [3.1, 39.0], [3.2, 39.0], [3.3, 39.0], [3.4, 39.0], [3.5, 39.0], [3.6, 39.0], [3.7, 39.0], [3.8, 39.0], [3.9, 39.0], [4.0, 39.0], [4.1, 39.0], [4.2, 40.0], [4.3, 40.0], [4.4, 40.0], [4.5, 40.0], [4.6, 40.0], [4.7, 40.0], [4.8, 40.0], [4.9, 40.0], [5.0, 40.0], [5.1, 40.0], [5.2, 41.0], [5.3, 41.0], [5.4, 41.0], [5.5, 41.0], [5.6, 41.0], [5.7, 41.0], [5.8, 41.0], [5.9, 41.0], [6.0, 41.0], [6.1, 41.0], [6.2, 41.0], [6.3, 42.0], [6.4, 42.0], [6.5, 42.0], [6.6, 42.0], [6.7, 42.0], [6.8, 42.0], [6.9, 42.0], [7.0, 42.0], [7.1, 42.0], [7.2, 42.0], [7.3, 42.0], [7.4, 43.0], [7.5, 43.0], [7.6, 43.0], [7.7, 43.0], [7.8, 43.0], [7.9, 43.0], [8.0, 43.0], [8.1, 43.0], [8.2, 43.0], [8.3, 43.0], [8.4, 43.0], [8.5, 44.0], [8.6, 44.0], [8.7, 44.0], [8.8, 44.0], [8.9, 44.0], [9.0, 44.0], [9.1, 44.0], [9.2, 44.0], [9.3, 44.0], [9.4, 44.0], [9.5, 44.0], [9.6, 44.0], [9.7, 44.0], [9.8, 44.0], [9.9, 44.0], [10.0, 45.0], [10.1, 45.0], [10.2, 45.0], [10.3, 45.0], [10.4, 45.0], [10.5, 45.0], [10.6, 45.0], [10.7, 45.0], [10.8, 45.0], [10.9, 45.0], [11.0, 46.0], [11.1, 46.0], [11.2, 46.0], [11.3, 46.0], [11.4, 46.0], [11.5, 46.0], [11.6, 46.0], [11.7, 46.0], [11.8, 46.0], [11.9, 46.0], [12.0, 46.0], [12.1, 47.0], [12.2, 47.0], [12.3, 47.0], [12.4, 47.0], [12.5, 47.0], [12.6, 47.0], [12.7, 47.0], [12.8, 47.0], [12.9, 47.0], [13.0, 48.0], [13.1, 48.0], [13.2, 48.0], [13.3, 48.0], [13.4, 48.0], [13.5, 48.0], [13.6, 48.0], [13.7, 49.0], [13.8, 49.0], [13.9, 49.0], [14.0, 49.0], [14.1, 49.0], [14.2, 49.0], [14.3, 50.0], [14.4, 50.0], [14.5, 50.0], [14.6, 50.0], [14.7, 51.0], [14.8, 51.0], [14.9, 51.0], [15.0, 51.0], [15.1, 52.0], [15.2, 52.0], [15.3, 52.0], [15.4, 52.0], [15.5, 52.0], [15.6, 53.0], [15.7, 53.0], [15.8, 53.0], [15.9, 53.0], [16.0, 54.0], [16.1, 54.0], [16.2, 55.0], [16.3, 55.0], [16.4, 55.0], [16.5, 55.0], [16.6, 56.0], [16.7, 56.0], [16.8, 57.0], [16.9, 57.0], [17.0, 57.0], [17.1, 58.0], [17.2, 58.0], [17.3, 58.0], [17.4, 58.0], [17.5, 59.0], [17.6, 59.0], [17.7, 60.0], [17.8, 60.0], [17.9, 60.0], [18.0, 61.0], [18.1, 61.0], [18.2, 61.0], [18.3, 61.0], [18.4, 62.0], [18.5, 62.0], [18.6, 62.0], [18.7, 63.0], [18.8, 63.0], [18.9, 63.0], [19.0, 63.0], [19.1, 64.0], [19.2, 64.0], [19.3, 64.0], [19.4, 64.0], [19.5, 65.0], [19.6, 65.0], [19.7, 65.0], [19.8, 66.0], [19.9, 66.0], [20.0, 66.0], [20.1, 67.0], [20.2, 67.0], [20.3, 67.0], [20.4, 67.0], [20.5, 68.0], [20.6, 68.0], [20.7, 68.0], [20.8, 69.0], [20.9, 69.0], [21.0, 69.0], [21.1, 69.0], [21.2, 69.0], [21.3, 69.0], [21.4, 70.0], [21.5, 70.0], [21.6, 70.0], [21.7, 70.0], [21.8, 71.0], [21.9, 71.0], [22.0, 71.0], [22.1, 71.0], [22.2, 71.0], [22.3, 71.0], [22.4, 72.0], [22.5, 72.0], [22.6, 72.0], [22.7, 72.0], [22.8, 73.0], [22.9, 73.0], [23.0, 73.0], [23.1, 73.0], [23.2, 73.0], [23.3, 74.0], [23.4, 74.0], [23.5, 74.0], [23.6, 74.0], [23.7, 74.0], [23.8, 74.0], [23.9, 74.0], [24.0, 75.0], [24.1, 75.0], [24.2, 75.0], [24.3, 75.0], [24.4, 75.0], [24.5, 75.0], [24.6, 76.0], [24.7, 76.0], [24.8, 76.0], [24.9, 76.0], [25.0, 76.0], [25.1, 76.0], [25.2, 77.0], [25.3, 77.0], [25.4, 77.0], [25.5, 77.0], [25.6, 77.0], [25.7, 77.0], [25.8, 77.0], [25.9, 77.0], [26.0, 77.0], [26.1, 78.0], [26.2, 78.0], [26.3, 78.0], [26.4, 78.0], [26.5, 78.0], [26.6, 78.0], [26.7, 78.0], [26.8, 78.0], [26.9, 78.0], [27.0, 78.0], [27.1, 79.0], [27.2, 79.0], [27.3, 79.0], [27.4, 79.0], [27.5, 79.0], [27.6, 79.0], [27.7, 79.0], [27.8, 80.0], [27.9, 80.0], [28.0, 80.0], [28.1, 80.0], [28.2, 80.0], [28.3, 80.0], [28.4, 80.0], [28.5, 80.0], [28.6, 81.0], [28.7, 81.0], [28.8, 81.0], [28.9, 81.0], [29.0, 81.0], [29.1, 81.0], [29.2, 81.0], [29.3, 82.0], [29.4, 82.0], [29.5, 82.0], [29.6, 82.0], [29.7, 82.0], [29.8, 82.0], [29.9, 83.0], [30.0, 83.0], [30.1, 83.0], [30.2, 83.0], [30.3, 83.0], [30.4, 83.0], [30.5, 83.0], [30.6, 83.0], [30.7, 83.0], [30.8, 84.0], [30.9, 84.0], [31.0, 84.0], [31.1, 84.0], [31.2, 84.0], [31.3, 84.0], [31.4, 85.0], [31.5, 85.0], [31.6, 85.0], [31.7, 85.0], [31.8, 85.0], [31.9, 85.0], [32.0, 85.0], [32.1, 85.0], [32.2, 85.0], [32.3, 86.0], [32.4, 86.0], [32.5, 86.0], [32.6, 86.0], [32.7, 86.0], [32.8, 86.0], [32.9, 86.0], [33.0, 87.0], [33.1, 87.0], [33.2, 87.0], [33.3, 87.0], [33.4, 87.0], [33.5, 87.0], [33.6, 87.0], [33.7, 88.0], [33.8, 88.0], [33.9, 88.0], [34.0, 88.0], [34.1, 88.0], [34.2, 89.0], [34.3, 89.0], [34.4, 89.0], [34.5, 89.0], [34.6, 89.0], [34.7, 90.0], [34.8, 90.0], [34.9, 90.0], [35.0, 90.0], [35.1, 90.0], [35.2, 91.0], [35.3, 91.0], [35.4, 91.0], [35.5, 91.0], [35.6, 91.0], [35.7, 92.0], [35.8, 92.0], [35.9, 92.0], [36.0, 92.0], [36.1, 92.0], [36.2, 93.0], [36.3, 93.0], [36.4, 93.0], [36.5, 94.0], [36.6, 94.0], [36.7, 95.0], [36.8, 95.0], [36.9, 95.0], [37.0, 95.0], [37.1, 96.0], [37.2, 96.0], [37.3, 96.0], [37.4, 96.0], [37.5, 97.0], [37.6, 97.0], [37.7, 98.0], [37.8, 98.0], [37.9, 98.0], [38.0, 99.0], [38.1, 99.0], [38.2, 99.0], [38.3, 100.0], [38.4, 101.0], [38.5, 101.0], [38.6, 102.0], [38.7, 103.0], [38.8, 103.0], [38.9, 104.0], [39.0, 104.0], [39.1, 105.0], [39.2, 105.0], [39.3, 106.0], [39.4, 106.0], [39.5, 106.0], [39.6, 106.0], [39.7, 107.0], [39.8, 107.0], [39.9, 108.0], [40.0, 108.0], [40.1, 109.0], [40.2, 110.0], [40.3, 110.0], [40.4, 110.0], [40.5, 111.0], [40.6, 111.0], [40.7, 112.0], [40.8, 113.0], [40.9, 113.0], [41.0, 114.0], [41.1, 114.0], [41.2, 115.0], [41.3, 116.0], [41.4, 116.0], [41.5, 117.0], [41.6, 118.0], [41.7, 119.0], [41.8, 120.0], [41.9, 120.0], [42.0, 121.0], [42.1, 121.0], [42.2, 122.0], [42.3, 123.0], [42.4, 123.0], [42.5, 124.0], [42.6, 124.0], [42.7, 124.0], [42.8, 125.0], [42.9, 125.0], [43.0, 126.0], [43.1, 126.0], [43.2, 127.0], [43.3, 128.0], [43.4, 128.0], [43.5, 129.0], [43.6, 129.0], [43.7, 130.0], [43.8, 130.0], [43.9, 131.0], [44.0, 132.0], [44.1, 132.0], [44.2, 132.0], [44.3, 134.0], [44.4, 134.0], [44.5, 134.0], [44.6, 135.0], [44.7, 135.0], [44.8, 136.0], [44.9, 137.0], [45.0, 138.0], [45.1, 139.0], [45.2, 140.0], [45.3, 140.0], [45.4, 141.0], [45.5, 142.0], [45.6, 142.0], [45.7, 143.0], [45.8, 144.0], [45.9, 145.0], [46.0, 145.0], [46.1, 146.0], [46.2, 147.0], [46.3, 148.0], [46.4, 149.0], [46.5, 150.0], [46.6, 151.0], [46.7, 151.0], [46.8, 152.0], [46.9, 153.0], [47.0, 155.0], [47.1, 157.0], [47.2, 157.0], [47.3, 158.0], [47.4, 159.0], [47.5, 160.0], [47.6, 161.0], [47.7, 161.0], [47.8, 163.0], [47.9, 164.0], [48.0, 164.0], [48.1, 165.0], [48.2, 166.0], [48.3, 167.0], [48.4, 168.0], [48.5, 169.0], [48.6, 171.0], [48.7, 172.0], [48.8, 173.0], [48.9, 173.0], [49.0, 175.0], [49.1, 176.0], [49.2, 178.0], [49.3, 179.0], [49.4, 180.0], [49.5, 181.0], [49.6, 182.0], [49.7, 182.0], [49.8, 183.0], [49.9, 184.0], [50.0, 185.0], [50.1, 186.0], [50.2, 187.0], [50.3, 188.0], [50.4, 189.0], [50.5, 190.0], [50.6, 191.0], [50.7, 192.0], [50.8, 192.0], [50.9, 193.0], [51.0, 195.0], [51.1, 195.0], [51.2, 196.0], [51.3, 197.0], [51.4, 197.0], [51.5, 199.0], [51.6, 200.0], [51.7, 201.0], [51.8, 201.0], [51.9, 203.0], [52.0, 203.0], [52.1, 204.0], [52.2, 205.0], [52.3, 207.0], [52.4, 208.0], [52.5, 208.0], [52.6, 210.0], [52.7, 210.0], [52.8, 211.0], [52.9, 212.0], [53.0, 213.0], [53.1, 214.0], [53.2, 214.0], [53.3, 215.0], [53.4, 216.0], [53.5, 218.0], [53.6, 218.0], [53.7, 219.0], [53.8, 220.0], [53.9, 221.0], [54.0, 221.0], [54.1, 223.0], [54.2, 224.0], [54.3, 224.0], [54.4, 225.0], [54.5, 226.0], [54.6, 228.0], [54.7, 228.0], [54.8, 229.0], [54.9, 229.0], [55.0, 231.0], [55.1, 231.0], [55.2, 232.0], [55.3, 232.0], [55.4, 233.0], [55.5, 234.0], [55.6, 234.0], [55.7, 235.0], [55.8, 236.0], [55.9, 237.0], [56.0, 238.0], [56.1, 239.0], [56.2, 241.0], [56.3, 241.0], [56.4, 242.0], [56.5, 242.0], [56.6, 243.0], [56.7, 244.0], [56.8, 245.0], [56.9, 246.0], [57.0, 248.0], [57.1, 249.0], [57.2, 249.0], [57.3, 250.0], [57.4, 252.0], [57.5, 253.0], [57.6, 254.0], [57.7, 254.0], [57.8, 255.0], [57.9, 256.0], [58.0, 257.0], [58.1, 258.0], [58.2, 258.0], [58.3, 259.0], [58.4, 259.0], [58.5, 260.0], [58.6, 260.0], [58.7, 261.0], [58.8, 263.0], [58.9, 264.0], [59.0, 265.0], [59.1, 267.0], [59.2, 268.0], [59.3, 269.0], [59.4, 270.0], [59.5, 271.0], [59.6, 272.0], [59.7, 273.0], [59.8, 274.0], [59.9, 275.0], [60.0, 276.0], [60.1, 278.0], [60.2, 278.0], [60.3, 279.0], [60.4, 279.0], [60.5, 280.0], [60.6, 281.0], [60.7, 283.0], [60.8, 284.0], [60.9, 284.0], [61.0, 285.0], [61.1, 286.0], [61.2, 287.0], [61.3, 288.0], [61.4, 289.0], [61.5, 290.0], [61.6, 291.0], [61.7, 292.0], [61.8, 294.0], [61.9, 295.0], [62.0, 295.0], [62.1, 296.0], [62.2, 298.0], [62.3, 299.0], [62.4, 299.0], [62.5, 300.0], [62.6, 302.0], [62.7, 303.0], [62.8, 304.0], [62.9, 305.0], [63.0, 306.0], [63.1, 307.0], [63.2, 309.0], [63.3, 309.0], [63.4, 311.0], [63.5, 313.0], [63.6, 314.0], [63.7, 315.0], [63.8, 317.0], [63.9, 319.0], [64.0, 321.0], [64.1, 322.0], [64.2, 324.0], [64.3, 325.0], [64.4, 326.0], [64.5, 327.0], [64.6, 329.0], [64.7, 332.0], [64.8, 333.0], [64.9, 334.0], [65.0, 335.0], [65.1, 336.0], [65.2, 336.0], [65.3, 338.0], [65.4, 338.0], [65.5, 339.0], [65.6, 341.0], [65.7, 343.0], [65.8, 345.0], [65.9, 346.0], [66.0, 347.0], [66.1, 349.0], [66.2, 351.0], [66.3, 352.0], [66.4, 353.0], [66.5, 354.0], [66.6, 356.0], [66.7, 357.0], [66.8, 359.0], [66.9, 359.0], [67.0, 361.0], [67.1, 363.0], [67.2, 365.0], [67.3, 367.0], [67.4, 368.0], [67.5, 369.0], [67.6, 370.0], [67.7, 371.0], [67.8, 371.0], [67.9, 372.0], [68.0, 374.0], [68.1, 375.0], [68.2, 376.0], [68.3, 377.0], [68.4, 378.0], [68.5, 380.0], [68.6, 380.0], [68.7, 382.0], [68.8, 383.0], [68.9, 384.0], [69.0, 385.0], [69.1, 387.0], [69.2, 388.0], [69.3, 389.0], [69.4, 391.0], [69.5, 392.0], [69.6, 393.0], [69.7, 394.0], [69.8, 396.0], [69.9, 398.0], [70.0, 400.0], [70.1, 401.0], [70.2, 402.0], [70.3, 403.0], [70.4, 404.0], [70.5, 405.0], [70.6, 406.0], [70.7, 407.0], [70.8, 408.0], [70.9, 408.0], [71.0, 410.0], [71.1, 411.0], [71.2, 413.0], [71.3, 414.0], [71.4, 416.0], [71.5, 418.0], [71.6, 419.0], [71.7, 419.0], [71.8, 421.0], [71.9, 422.0], [72.0, 423.0], [72.1, 424.0], [72.2, 426.0], [72.3, 428.0], [72.4, 429.0], [72.5, 431.0], [72.6, 433.0], [72.7, 434.0], [72.8, 436.0], [72.9, 437.0], [73.0, 439.0], [73.1, 440.0], [73.2, 442.0], [73.3, 444.0], [73.4, 445.0], [73.5, 446.0], [73.6, 447.0], [73.7, 449.0], [73.8, 450.0], [73.9, 451.0], [74.0, 453.0], [74.1, 455.0], [74.2, 456.0], [74.3, 457.0], [74.4, 459.0], [74.5, 462.0], [74.6, 463.0], [74.7, 463.0], [74.8, 464.0], [74.9, 466.0], [75.0, 468.0], [75.1, 471.0], [75.2, 473.0], [75.3, 475.0], [75.4, 477.0], [75.5, 478.0], [75.6, 480.0], [75.7, 481.0], [75.8, 484.0], [75.9, 484.0], [76.0, 486.0], [76.1, 487.0], [76.2, 488.0], [76.3, 490.0], [76.4, 491.0], [76.5, 493.0], [76.6, 494.0], [76.7, 494.0], [76.8, 496.0], [76.9, 496.0], [77.0, 497.0], [77.1, 499.0], [77.2, 501.0], [77.3, 502.0], [77.4, 503.0], [77.5, 506.0], [77.6, 506.0], [77.7, 508.0], [77.8, 511.0], [77.9, 512.0], [78.0, 514.0], [78.1, 515.0], [78.2, 515.0], [78.3, 519.0], [78.4, 523.0], [78.5, 525.0], [78.6, 526.0], [78.7, 528.0], [78.8, 529.0], [78.9, 530.0], [79.0, 532.0], [79.1, 534.0], [79.2, 536.0], [79.3, 536.0], [79.4, 539.0], [79.5, 541.0], [79.6, 542.0], [79.7, 543.0], [79.8, 545.0], [79.9, 547.0], [80.0, 549.0], [80.1, 551.0], [80.2, 553.0], [80.3, 555.0], [80.4, 556.0], [80.5, 558.0], [80.6, 562.0], [80.7, 564.0], [80.8, 566.0], [80.9, 568.0], [81.0, 570.0], [81.1, 571.0], [81.2, 571.0], [81.3, 574.0], [81.4, 576.0], [81.5, 577.0], [81.6, 579.0], [81.7, 580.0], [81.8, 582.0], [81.9, 583.0], [82.0, 584.0], [82.1, 589.0], [82.2, 592.0], [82.3, 594.0], [82.4, 597.0], [82.5, 599.0], [82.6, 601.0], [82.7, 604.0], [82.8, 605.0], [82.9, 606.0], [83.0, 609.0], [83.1, 610.0], [83.2, 613.0], [83.3, 615.0], [83.4, 616.0], [83.5, 619.0], [83.6, 620.0], [83.7, 624.0], [83.8, 625.0], [83.9, 626.0], [84.0, 632.0], [84.1, 633.0], [84.2, 635.0], [84.3, 637.0], [84.4, 640.0], [84.5, 641.0], [84.6, 643.0], [84.7, 645.0], [84.8, 648.0], [84.9, 649.0], [85.0, 651.0], [85.1, 653.0], [85.2, 655.0], [85.3, 657.0], [85.4, 660.0], [85.5, 664.0], [85.6, 665.0], [85.7, 667.0], [85.8, 669.0], [85.9, 673.0], [86.0, 674.0], [86.1, 676.0], [86.2, 679.0], [86.3, 680.0], [86.4, 682.0], [86.5, 685.0], [86.6, 688.0], [86.7, 692.0], [86.8, 693.0], [86.9, 694.0], [87.0, 699.0], [87.1, 701.0], [87.2, 703.0], [87.3, 705.0], [87.4, 707.0], [87.5, 709.0], [87.6, 711.0], [87.7, 712.0], [87.8, 716.0], [87.9, 719.0], [88.0, 721.0], [88.1, 722.0], [88.2, 726.0], [88.3, 728.0], [88.4, 730.0], [88.5, 736.0], [88.6, 738.0], [88.7, 740.0], [88.8, 743.0], [88.9, 745.0], [89.0, 747.0], [89.1, 752.0], [89.2, 755.0], [89.3, 756.0], [89.4, 762.0], [89.5, 766.0], [89.6, 769.0], [89.7, 774.0], [89.8, 776.0], [89.9, 778.0], [90.0, 781.0], [90.1, 784.0], [90.2, 788.0], [90.3, 794.0], [90.4, 797.0], [90.5, 803.0], [90.6, 806.0], [90.7, 809.0], [90.8, 813.0], [90.9, 817.0], [91.0, 822.0], [91.1, 825.0], [91.2, 827.0], [91.3, 831.0], [91.4, 832.0], [91.5, 837.0], [91.6, 840.0], [91.7, 843.0], [91.8, 845.0], [91.9, 855.0], [92.0, 857.0], [92.1, 862.0], [92.2, 867.0], [92.3, 870.0], [92.4, 874.0], [92.5, 879.0], [92.6, 882.0], [92.7, 886.0], [92.8, 890.0], [92.9, 897.0], [93.0, 901.0], [93.1, 907.0], [93.2, 913.0], [93.3, 919.0], [93.4, 924.0], [93.5, 929.0], [93.6, 938.0], [93.7, 945.0], [93.8, 948.0], [93.9, 955.0], [94.0, 958.0], [94.1, 965.0], [94.2, 968.0], [94.3, 976.0], [94.4, 979.0], [94.5, 982.0], [94.6, 989.0], [94.7, 997.0], [94.8, 1002.0], [94.9, 1015.0], [95.0, 1021.0], [95.1, 1030.0], [95.2, 1036.0], [95.3, 1042.0], [95.4, 1046.0], [95.5, 1053.0], [95.6, 1063.0], [95.7, 1069.0], [95.8, 1075.0], [95.9, 1087.0], [96.0, 1098.0], [96.1, 1107.0], [96.2, 1116.0], [96.3, 1124.0], [96.4, 1129.0], [96.5, 1144.0], [96.6, 1156.0], [96.7, 1161.0], [96.8, 1174.0], [96.9, 1183.0], [97.0, 1196.0], [97.1, 1208.0], [97.2, 1221.0], [97.3, 1226.0], [97.4, 1261.0], [97.5, 1277.0], [97.6, 1297.0], [97.7, 1306.0], [97.8, 1319.0], [97.9, 1334.0], [98.0, 1366.0], [98.1, 1380.0], [98.2, 1392.0], [98.3, 1418.0], [98.4, 1440.0], [98.5, 1461.0], [98.6, 1501.0], [98.7, 1548.0], [98.8, 1564.0], [98.9, 1590.0], [99.0, 1635.0], [99.1, 1682.0], [99.2, 1735.0], [99.3, 1841.0], [99.4, 1928.0], [99.5, 1959.0], [99.6, 2061.0], [99.7, 2172.0], [99.8, 2342.0], [99.9, 2515.0], [100.0, 3166.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 2011.0, "series": [{"data": [[0.0, 2011.0], [600.0, 237.0], [700.0, 178.0], [800.0, 134.0], [900.0, 94.0], [1000.0, 67.0], [1100.0, 53.0], [1200.0, 31.0], [1300.0, 32.0], [1400.0, 19.0], [1500.0, 18.0], [100.0, 701.0], [1600.0, 12.0], [1700.0, 5.0], [1800.0, 5.0], [1900.0, 11.0], [2000.0, 2.0], [2100.0, 8.0], [2300.0, 4.0], [2200.0, 1.0], [2400.0, 2.0], [2500.0, 3.0], [2600.0, 1.0], [2800.0, 1.0], [3100.0, 1.0], [200.0, 575.0], [300.0, 396.0], [400.0, 376.0], [500.0, 284.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3100.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 74.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 4060.0, "series": [{"data": [[0.0, 4060.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1128.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 74.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.844827586206897, "minX": 1.60374642E12, "maxY": 10.0, "series": [{"data": [[1.60374654E12, 10.0], [1.60374648E12, 10.0], [1.6037466E12, 9.844827586206897], [1.60374642E12, 9.975791433891981]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6037466E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 320.5123903926801, "minX": 1.0, "maxY": 2687.0, "series": [{"data": [[4.0, 1340.0], [8.0, 507.6666666666667], [2.0, 2409.0], [1.0, 2687.0], [9.0, 1340.0], [5.0, 1274.5], [10.0, 320.5123903926801], [3.0, 1150.0], [6.0, 1067.0], [7.0, 1667.5]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.986507031546962, 323.57240592930407]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 2625.6, "minX": 1.60374642E12, "maxY": 1640801.0166666666, "series": [{"data": [[1.60374654E12, 1640801.0166666666], [1.60374648E12, 1382920.1], [1.6037466E12, 163625.9], [1.60374642E12, 1063554.8833333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60374654E12, 17383.283333333333], [1.60374648E12, 16200.95], [1.6037466E12, 2625.6], [1.60374642E12, 9281.116666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6037466E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 303.6231664137578, "minX": 1.60374642E12, "maxY": 400.0172413793104, "series": [{"data": [[1.60374654E12, 303.6231664137578], [1.60374648E12, 310.7079646017698], [1.6037466E12, 400.0172413793104], [1.60374642E12, 362.66294227188075]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6037466E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 303.19929185634777, "minX": 1.60374642E12, "maxY": 399.67931034482746, "series": [{"data": [[1.60374654E12, 303.19929185634777], [1.60374648E12, 310.29672045809446], [1.6037466E12, 399.67931034482746], [1.60374642E12, 362.11359404096845]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6037466E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.006896551724137929, "minX": 1.60374642E12, "maxY": 0.08845437616387328, "series": [{"data": [[1.60374654E12, 0.010622154779969658], [1.60374648E12, 0.010931806350858945], [1.6037466E12, 0.006896551724137929], [1.60374642E12, 0.08845437616387328]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6037466E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 30.0, "minX": 1.60374642E12, "maxY": 3166.0, "series": [{"data": [[1.60374654E12, 1959.0], [1.60374648E12, 2350.0], [1.6037466E12, 3166.0], [1.60374642E12, 1934.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60374654E12, 34.0], [1.60374648E12, 37.0], [1.6037466E12, 39.0], [1.60374642E12, 35.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60374654E12, 34.582200188636776], [1.60374648E12, 37.0], [1.6037466E12, 39.0], [1.60374642E12, 35.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60374654E12, 34.0], [1.60374648E12, 37.0], [1.6037466E12, 39.0], [1.60374642E12, 35.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60374654E12, 30.0], [1.60374648E12, 31.0], [1.6037466E12, 33.0], [1.60374642E12, 32.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60374654E12, 192.0], [1.60374648E12, 156.0], [1.6037466E12, 123.0], [1.60374642E12, 244.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6037466E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 70.0, "minX": 1.0, "maxY": 2687.0, "series": [{"data": [[3.0, 1507.0], [4.0, 1657.0], [5.0, 1289.0], [6.0, 1204.0], [7.0, 1373.0], [8.0, 1347.5], [10.0, 760.5], [11.0, 760.0], [12.0, 1369.0], [13.0, 784.0], [14.0, 540.0], [15.0, 625.5], [16.0, 559.0], [17.0, 552.0], [18.0, 458.0], [19.0, 397.5], [20.0, 502.0], [21.0, 377.0], [22.0, 415.0], [23.0, 438.0], [24.0, 408.5], [25.0, 408.0], [26.0, 315.0], [27.0, 253.5], [28.0, 264.5], [29.0, 143.5], [30.0, 368.0], [31.0, 322.0], [32.0, 234.0], [33.0, 85.0], [34.0, 238.0], [35.0, 137.5], [36.0, 241.5], [37.0, 226.0], [39.0, 186.0], [38.0, 92.0], [40.0, 146.5], [41.0, 82.5], [43.0, 98.0], [42.0, 108.5], [45.0, 120.0], [46.0, 133.0], [49.0, 125.0], [48.0, 135.5], [50.0, 83.0], [51.0, 109.5], [52.0, 206.0], [54.0, 89.0], [55.0, 90.0], [56.0, 129.5], [60.0, 86.0], [61.0, 149.0], [62.0, 80.0], [64.0, 79.0], [66.0, 106.0], [65.0, 75.0], [68.0, 123.0], [74.0, 88.5], [77.0, 85.0], [76.0, 140.0], [79.0, 82.0], [82.0, 112.0], [90.0, 70.0], [94.0, 72.5], [1.0, 2687.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 94.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 70.0, "minX": 1.0, "maxY": 2687.0, "series": [{"data": [[3.0, 1506.0], [4.0, 1656.5], [5.0, 1288.0], [6.0, 1203.5], [7.0, 1370.0], [8.0, 1337.0], [10.0, 760.0], [11.0, 759.0], [12.0, 1369.0], [13.0, 784.0], [14.0, 537.0], [15.0, 624.0], [16.0, 558.5], [17.0, 550.0], [18.0, 457.0], [19.0, 397.5], [20.0, 501.5], [21.0, 376.5], [22.0, 414.0], [23.0, 438.0], [24.0, 405.0], [25.0, 407.0], [26.0, 313.5], [27.0, 253.5], [28.0, 263.5], [29.0, 143.5], [30.0, 368.0], [31.0, 321.0], [32.0, 234.0], [33.0, 85.0], [34.0, 237.0], [35.0, 137.5], [36.0, 241.0], [37.0, 225.0], [39.0, 186.0], [38.0, 92.0], [40.0, 146.5], [41.0, 82.0], [43.0, 98.0], [42.0, 108.5], [45.0, 120.0], [46.0, 133.0], [49.0, 125.0], [48.0, 135.5], [50.0, 82.5], [51.0, 109.5], [52.0, 206.0], [54.0, 88.5], [55.0, 90.0], [56.0, 129.0], [60.0, 86.0], [61.0, 148.5], [62.0, 80.0], [64.0, 79.0], [66.0, 106.0], [65.0, 75.0], [68.0, 122.5], [74.0, 88.5], [77.0, 85.0], [76.0, 139.5], [79.0, 82.0], [82.0, 111.5], [90.0, 70.0], [94.0, 72.5], [1.0, 2687.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 94.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 4.666666666666667, "minX": 1.60374642E12, "maxY": 32.95, "series": [{"data": [[1.60374654E12, 32.95], [1.60374648E12, 32.016666666666666], [1.6037466E12, 4.666666666666667], [1.60374642E12, 18.066666666666666]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6037466E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 4.833333333333333, "minX": 1.60374642E12, "maxY": 32.95, "series": [{"data": [[1.60374654E12, 32.95], [1.60374648E12, 32.016666666666666], [1.6037466E12, 4.833333333333333], [1.60374642E12, 17.9]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6037466E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 4.833333333333333, "minX": 1.60374642E12, "maxY": 32.95, "series": [{"data": [[1.60374654E12, 32.95], [1.60374648E12, 32.016666666666666], [1.6037466E12, 4.833333333333333], [1.60374642E12, 17.9]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6037466E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 4.833333333333333, "minX": 1.60374642E12, "maxY": 32.95, "series": [{"data": [[1.60374654E12, 32.95], [1.60374648E12, 32.016666666666666], [1.6037466E12, 4.833333333333333], [1.60374642E12, 17.9]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6037466E12, "title": "Total Transactions Per Second"}},
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

