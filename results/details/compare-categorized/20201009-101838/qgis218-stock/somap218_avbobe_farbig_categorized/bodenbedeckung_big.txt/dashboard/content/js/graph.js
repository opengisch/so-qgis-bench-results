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
        data: {"result": {"minY": 17.0, "minX": 0.0, "maxY": 21805.0, "series": [{"data": [[0.0, 17.0], [0.1, 22.0], [0.2, 22.0], [0.3, 23.0], [0.4, 24.0], [0.5, 25.0], [0.6, 26.0], [0.7, 27.0], [0.8, 27.0], [0.9, 27.0], [1.0, 28.0], [1.1, 28.0], [1.2, 28.0], [1.3, 28.0], [1.4, 28.0], [1.5, 29.0], [1.6, 29.0], [1.7, 29.0], [1.8, 30.0], [1.9, 30.0], [2.0, 30.0], [2.1, 30.0], [2.2, 31.0], [2.3, 31.0], [2.4, 31.0], [2.5, 31.0], [2.6, 32.0], [2.7, 32.0], [2.8, 32.0], [2.9, 32.0], [3.0, 33.0], [3.1, 33.0], [3.2, 33.0], [3.3, 33.0], [3.4, 33.0], [3.5, 33.0], [3.6, 34.0], [3.7, 34.0], [3.8, 34.0], [3.9, 34.0], [4.0, 34.0], [4.1, 34.0], [4.2, 35.0], [4.3, 35.0], [4.4, 35.0], [4.5, 35.0], [4.6, 35.0], [4.7, 36.0], [4.8, 36.0], [4.9, 36.0], [5.0, 36.0], [5.1, 36.0], [5.2, 36.0], [5.3, 37.0], [5.4, 37.0], [5.5, 37.0], [5.6, 37.0], [5.7, 37.0], [5.8, 37.0], [5.9, 37.0], [6.0, 38.0], [6.1, 38.0], [6.2, 38.0], [6.3, 38.0], [6.4, 38.0], [6.5, 39.0], [6.6, 39.0], [6.7, 39.0], [6.8, 39.0], [6.9, 40.0], [7.0, 40.0], [7.1, 40.0], [7.2, 40.0], [7.3, 41.0], [7.4, 41.0], [7.5, 41.0], [7.6, 41.0], [7.7, 41.0], [7.8, 42.0], [7.9, 42.0], [8.0, 42.0], [8.1, 42.0], [8.2, 42.0], [8.3, 42.0], [8.4, 43.0], [8.5, 43.0], [8.6, 43.0], [8.7, 43.0], [8.8, 43.0], [8.9, 43.0], [9.0, 43.0], [9.1, 44.0], [9.2, 44.0], [9.3, 44.0], [9.4, 44.0], [9.5, 44.0], [9.6, 44.0], [9.7, 45.0], [9.8, 45.0], [9.9, 45.0], [10.0, 46.0], [10.1, 46.0], [10.2, 46.0], [10.3, 46.0], [10.4, 46.0], [10.5, 46.0], [10.6, 47.0], [10.7, 47.0], [10.8, 47.0], [10.9, 47.0], [11.0, 47.0], [11.1, 47.0], [11.2, 48.0], [11.3, 48.0], [11.4, 48.0], [11.5, 48.0], [11.6, 48.0], [11.7, 48.0], [11.8, 48.0], [11.9, 49.0], [12.0, 49.0], [12.1, 49.0], [12.2, 49.0], [12.3, 49.0], [12.4, 50.0], [12.5, 50.0], [12.6, 50.0], [12.7, 50.0], [12.8, 50.0], [12.9, 51.0], [13.0, 51.0], [13.1, 51.0], [13.2, 51.0], [13.3, 51.0], [13.4, 51.0], [13.5, 52.0], [13.6, 52.0], [13.7, 52.0], [13.8, 52.0], [13.9, 52.0], [14.0, 52.0], [14.1, 53.0], [14.2, 53.0], [14.3, 53.0], [14.4, 53.0], [14.5, 53.0], [14.6, 54.0], [14.7, 54.0], [14.8, 54.0], [14.9, 54.0], [15.0, 54.0], [15.1, 55.0], [15.2, 55.0], [15.3, 55.0], [15.4, 55.0], [15.5, 55.0], [15.6, 56.0], [15.7, 56.0], [15.8, 56.0], [15.9, 56.0], [16.0, 56.0], [16.1, 56.0], [16.2, 57.0], [16.3, 57.0], [16.4, 57.0], [16.5, 57.0], [16.6, 57.0], [16.7, 58.0], [16.8, 58.0], [16.9, 58.0], [17.0, 58.0], [17.1, 58.0], [17.2, 59.0], [17.3, 59.0], [17.4, 59.0], [17.5, 59.0], [17.6, 59.0], [17.7, 59.0], [17.8, 59.0], [17.9, 60.0], [18.0, 60.0], [18.1, 60.0], [18.2, 60.0], [18.3, 60.0], [18.4, 61.0], [18.5, 61.0], [18.6, 61.0], [18.7, 61.0], [18.8, 61.0], [18.9, 62.0], [19.0, 62.0], [19.1, 62.0], [19.2, 62.0], [19.3, 62.0], [19.4, 62.0], [19.5, 63.0], [19.6, 63.0], [19.7, 63.0], [19.8, 63.0], [19.9, 63.0], [20.0, 64.0], [20.1, 64.0], [20.2, 64.0], [20.3, 64.0], [20.4, 64.0], [20.5, 64.0], [20.6, 65.0], [20.7, 65.0], [20.8, 65.0], [20.9, 66.0], [21.0, 66.0], [21.1, 66.0], [21.2, 66.0], [21.3, 67.0], [21.4, 67.0], [21.5, 67.0], [21.6, 68.0], [21.7, 68.0], [21.8, 68.0], [21.9, 68.0], [22.0, 69.0], [22.1, 69.0], [22.2, 69.0], [22.3, 69.0], [22.4, 69.0], [22.5, 70.0], [22.6, 70.0], [22.7, 71.0], [22.8, 71.0], [22.9, 71.0], [23.0, 71.0], [23.1, 72.0], [23.2, 72.0], [23.3, 72.0], [23.4, 72.0], [23.5, 73.0], [23.6, 73.0], [23.7, 73.0], [23.8, 73.0], [23.9, 74.0], [24.0, 74.0], [24.1, 74.0], [24.2, 74.0], [24.3, 75.0], [24.4, 75.0], [24.5, 75.0], [24.6, 75.0], [24.7, 75.0], [24.8, 76.0], [24.9, 76.0], [25.0, 76.0], [25.1, 77.0], [25.2, 77.0], [25.3, 77.0], [25.4, 78.0], [25.5, 78.0], [25.6, 78.0], [25.7, 78.0], [25.8, 78.0], [25.9, 79.0], [26.0, 79.0], [26.1, 79.0], [26.2, 80.0], [26.3, 80.0], [26.4, 80.0], [26.5, 80.0], [26.6, 81.0], [26.7, 81.0], [26.8, 81.0], [26.9, 82.0], [27.0, 82.0], [27.1, 82.0], [27.2, 82.0], [27.3, 83.0], [27.4, 83.0], [27.5, 83.0], [27.6, 84.0], [27.7, 84.0], [27.8, 84.0], [27.9, 84.0], [28.0, 84.0], [28.1, 85.0], [28.2, 85.0], [28.3, 85.0], [28.4, 86.0], [28.5, 86.0], [28.6, 87.0], [28.7, 87.0], [28.8, 88.0], [28.9, 88.0], [29.0, 88.0], [29.1, 88.0], [29.2, 89.0], [29.3, 89.0], [29.4, 90.0], [29.5, 90.0], [29.6, 91.0], [29.7, 91.0], [29.8, 91.0], [29.9, 92.0], [30.0, 93.0], [30.1, 93.0], [30.2, 93.0], [30.3, 94.0], [30.4, 95.0], [30.5, 95.0], [30.6, 95.0], [30.7, 96.0], [30.8, 96.0], [30.9, 97.0], [31.0, 97.0], [31.1, 98.0], [31.2, 99.0], [31.3, 99.0], [31.4, 99.0], [31.5, 100.0], [31.6, 101.0], [31.7, 102.0], [31.8, 102.0], [31.9, 102.0], [32.0, 103.0], [32.1, 103.0], [32.2, 104.0], [32.3, 104.0], [32.4, 105.0], [32.5, 106.0], [32.6, 106.0], [32.7, 107.0], [32.8, 108.0], [32.9, 108.0], [33.0, 109.0], [33.1, 109.0], [33.2, 110.0], [33.3, 110.0], [33.4, 111.0], [33.5, 111.0], [33.6, 112.0], [33.7, 113.0], [33.8, 113.0], [33.9, 114.0], [34.0, 115.0], [34.1, 116.0], [34.2, 116.0], [34.3, 117.0], [34.4, 118.0], [34.5, 119.0], [34.6, 120.0], [34.7, 121.0], [34.8, 122.0], [34.9, 122.0], [35.0, 123.0], [35.1, 123.0], [35.2, 124.0], [35.3, 125.0], [35.4, 126.0], [35.5, 126.0], [35.6, 127.0], [35.7, 129.0], [35.8, 130.0], [35.9, 131.0], [36.0, 132.0], [36.1, 134.0], [36.2, 135.0], [36.3, 136.0], [36.4, 137.0], [36.5, 138.0], [36.6, 138.0], [36.7, 139.0], [36.8, 140.0], [36.9, 141.0], [37.0, 142.0], [37.1, 143.0], [37.2, 144.0], [37.3, 145.0], [37.4, 145.0], [37.5, 146.0], [37.6, 147.0], [37.7, 147.0], [37.8, 148.0], [37.9, 149.0], [38.0, 150.0], [38.1, 151.0], [38.2, 152.0], [38.3, 153.0], [38.4, 154.0], [38.5, 155.0], [38.6, 155.0], [38.7, 156.0], [38.8, 156.0], [38.9, 157.0], [39.0, 158.0], [39.1, 159.0], [39.2, 159.0], [39.3, 161.0], [39.4, 162.0], [39.5, 163.0], [39.6, 164.0], [39.7, 164.0], [39.8, 164.0], [39.9, 165.0], [40.0, 165.0], [40.1, 166.0], [40.2, 167.0], [40.3, 168.0], [40.4, 168.0], [40.5, 169.0], [40.6, 170.0], [40.7, 170.0], [40.8, 171.0], [40.9, 172.0], [41.0, 173.0], [41.1, 174.0], [41.2, 175.0], [41.3, 176.0], [41.4, 177.0], [41.5, 177.0], [41.6, 177.0], [41.7, 178.0], [41.8, 179.0], [41.9, 180.0], [42.0, 180.0], [42.1, 181.0], [42.2, 182.0], [42.3, 182.0], [42.4, 183.0], [42.5, 184.0], [42.6, 184.0], [42.7, 185.0], [42.8, 186.0], [42.9, 187.0], [43.0, 188.0], [43.1, 188.0], [43.2, 189.0], [43.3, 190.0], [43.4, 190.0], [43.5, 191.0], [43.6, 191.0], [43.7, 192.0], [43.8, 193.0], [43.9, 193.0], [44.0, 194.0], [44.1, 194.0], [44.2, 195.0], [44.3, 195.0], [44.4, 196.0], [44.5, 196.0], [44.6, 197.0], [44.7, 198.0], [44.8, 198.0], [44.9, 199.0], [45.0, 199.0], [45.1, 200.0], [45.2, 201.0], [45.3, 201.0], [45.4, 201.0], [45.5, 202.0], [45.6, 203.0], [45.7, 203.0], [45.8, 203.0], [45.9, 204.0], [46.0, 205.0], [46.1, 206.0], [46.2, 207.0], [46.3, 208.0], [46.4, 209.0], [46.5, 209.0], [46.6, 210.0], [46.7, 210.0], [46.8, 211.0], [46.9, 211.0], [47.0, 212.0], [47.1, 212.0], [47.2, 213.0], [47.3, 214.0], [47.4, 215.0], [47.5, 215.0], [47.6, 215.0], [47.7, 216.0], [47.8, 217.0], [47.9, 217.0], [48.0, 217.0], [48.1, 218.0], [48.2, 218.0], [48.3, 219.0], [48.4, 220.0], [48.5, 221.0], [48.6, 221.0], [48.7, 222.0], [48.8, 223.0], [48.9, 223.0], [49.0, 224.0], [49.1, 224.0], [49.2, 225.0], [49.3, 226.0], [49.4, 227.0], [49.5, 227.0], [49.6, 228.0], [49.7, 229.0], [49.8, 230.0], [49.9, 231.0], [50.0, 232.0], [50.1, 232.0], [50.2, 233.0], [50.3, 234.0], [50.4, 235.0], [50.5, 236.0], [50.6, 237.0], [50.7, 237.0], [50.8, 238.0], [50.9, 239.0], [51.0, 239.0], [51.1, 240.0], [51.2, 241.0], [51.3, 242.0], [51.4, 243.0], [51.5, 243.0], [51.6, 244.0], [51.7, 244.0], [51.8, 245.0], [51.9, 246.0], [52.0, 247.0], [52.1, 247.0], [52.2, 248.0], [52.3, 249.0], [52.4, 250.0], [52.5, 250.0], [52.6, 251.0], [52.7, 252.0], [52.8, 253.0], [52.9, 253.0], [53.0, 255.0], [53.1, 256.0], [53.2, 257.0], [53.3, 258.0], [53.4, 258.0], [53.5, 259.0], [53.6, 259.0], [53.7, 260.0], [53.8, 261.0], [53.9, 263.0], [54.0, 263.0], [54.1, 264.0], [54.2, 265.0], [54.3, 265.0], [54.4, 267.0], [54.5, 268.0], [54.6, 269.0], [54.7, 269.0], [54.8, 270.0], [54.9, 271.0], [55.0, 273.0], [55.1, 274.0], [55.2, 275.0], [55.3, 275.0], [55.4, 276.0], [55.5, 277.0], [55.6, 277.0], [55.7, 279.0], [55.8, 279.0], [55.9, 280.0], [56.0, 281.0], [56.1, 283.0], [56.2, 283.0], [56.3, 283.0], [56.4, 284.0], [56.5, 284.0], [56.6, 286.0], [56.7, 287.0], [56.8, 288.0], [56.9, 289.0], [57.0, 290.0], [57.1, 292.0], [57.2, 292.0], [57.3, 293.0], [57.4, 294.0], [57.5, 295.0], [57.6, 297.0], [57.7, 298.0], [57.8, 299.0], [57.9, 300.0], [58.0, 301.0], [58.1, 302.0], [58.2, 302.0], [58.3, 303.0], [58.4, 305.0], [58.5, 306.0], [58.6, 307.0], [58.7, 308.0], [58.8, 309.0], [58.9, 311.0], [59.0, 312.0], [59.1, 313.0], [59.2, 314.0], [59.3, 315.0], [59.4, 316.0], [59.5, 316.0], [59.6, 317.0], [59.7, 318.0], [59.8, 318.0], [59.9, 319.0], [60.0, 320.0], [60.1, 320.0], [60.2, 320.0], [60.3, 321.0], [60.4, 321.0], [60.5, 322.0], [60.6, 323.0], [60.7, 323.0], [60.8, 324.0], [60.9, 324.0], [61.0, 325.0], [61.1, 325.0], [61.2, 326.0], [61.3, 326.0], [61.4, 327.0], [61.5, 328.0], [61.6, 328.0], [61.7, 329.0], [61.8, 330.0], [61.9, 331.0], [62.0, 332.0], [62.1, 332.0], [62.2, 333.0], [62.3, 334.0], [62.4, 334.0], [62.5, 335.0], [62.6, 336.0], [62.7, 336.0], [62.8, 338.0], [62.9, 339.0], [63.0, 340.0], [63.1, 340.0], [63.2, 341.0], [63.3, 342.0], [63.4, 343.0], [63.5, 344.0], [63.6, 345.0], [63.7, 346.0], [63.8, 347.0], [63.9, 348.0], [64.0, 349.0], [64.1, 350.0], [64.2, 351.0], [64.3, 351.0], [64.4, 352.0], [64.5, 352.0], [64.6, 353.0], [64.7, 353.0], [64.8, 354.0], [64.9, 355.0], [65.0, 355.0], [65.1, 356.0], [65.2, 357.0], [65.3, 357.0], [65.4, 359.0], [65.5, 359.0], [65.6, 360.0], [65.7, 361.0], [65.8, 362.0], [65.9, 363.0], [66.0, 363.0], [66.1, 364.0], [66.2, 365.0], [66.3, 365.0], [66.4, 366.0], [66.5, 368.0], [66.6, 369.0], [66.7, 370.0], [66.8, 371.0], [66.9, 371.0], [67.0, 372.0], [67.1, 374.0], [67.2, 375.0], [67.3, 376.0], [67.4, 376.0], [67.5, 377.0], [67.6, 379.0], [67.7, 380.0], [67.8, 381.0], [67.9, 382.0], [68.0, 383.0], [68.1, 386.0], [68.2, 387.0], [68.3, 389.0], [68.4, 389.0], [68.5, 392.0], [68.6, 393.0], [68.7, 394.0], [68.8, 395.0], [68.9, 395.0], [69.0, 397.0], [69.1, 398.0], [69.2, 399.0], [69.3, 400.0], [69.4, 400.0], [69.5, 402.0], [69.6, 402.0], [69.7, 403.0], [69.8, 404.0], [69.9, 404.0], [70.0, 405.0], [70.1, 406.0], [70.2, 407.0], [70.3, 409.0], [70.4, 410.0], [70.5, 411.0], [70.6, 412.0], [70.7, 414.0], [70.8, 416.0], [70.9, 416.0], [71.0, 417.0], [71.1, 419.0], [71.2, 420.0], [71.3, 421.0], [71.4, 423.0], [71.5, 425.0], [71.6, 426.0], [71.7, 427.0], [71.8, 428.0], [71.9, 429.0], [72.0, 430.0], [72.1, 430.0], [72.2, 432.0], [72.3, 433.0], [72.4, 435.0], [72.5, 437.0], [72.6, 438.0], [72.7, 440.0], [72.8, 442.0], [72.9, 443.0], [73.0, 444.0], [73.1, 445.0], [73.2, 445.0], [73.3, 447.0], [73.4, 447.0], [73.5, 449.0], [73.6, 449.0], [73.7, 451.0], [73.8, 452.0], [73.9, 455.0], [74.0, 456.0], [74.1, 458.0], [74.2, 459.0], [74.3, 461.0], [74.4, 462.0], [74.5, 464.0], [74.6, 464.0], [74.7, 465.0], [74.8, 467.0], [74.9, 468.0], [75.0, 469.0], [75.1, 470.0], [75.2, 471.0], [75.3, 473.0], [75.4, 474.0], [75.5, 475.0], [75.6, 476.0], [75.7, 478.0], [75.8, 479.0], [75.9, 480.0], [76.0, 482.0], [76.1, 483.0], [76.2, 483.0], [76.3, 484.0], [76.4, 486.0], [76.5, 488.0], [76.6, 489.0], [76.7, 490.0], [76.8, 491.0], [76.9, 493.0], [77.0, 494.0], [77.1, 494.0], [77.2, 496.0], [77.3, 496.0], [77.4, 497.0], [77.5, 498.0], [77.6, 501.0], [77.7, 502.0], [77.8, 502.0], [77.9, 503.0], [78.0, 505.0], [78.1, 506.0], [78.2, 508.0], [78.3, 509.0], [78.4, 510.0], [78.5, 510.0], [78.6, 512.0], [78.7, 512.0], [78.8, 513.0], [78.9, 514.0], [79.0, 514.0], [79.1, 517.0], [79.2, 518.0], [79.3, 518.0], [79.4, 519.0], [79.5, 520.0], [79.6, 521.0], [79.7, 522.0], [79.8, 523.0], [79.9, 524.0], [80.0, 525.0], [80.1, 526.0], [80.2, 528.0], [80.3, 529.0], [80.4, 530.0], [80.5, 532.0], [80.6, 533.0], [80.7, 534.0], [80.8, 535.0], [80.9, 537.0], [81.0, 538.0], [81.1, 539.0], [81.2, 540.0], [81.3, 540.0], [81.4, 541.0], [81.5, 542.0], [81.6, 543.0], [81.7, 544.0], [81.8, 545.0], [81.9, 546.0], [82.0, 547.0], [82.1, 549.0], [82.2, 551.0], [82.3, 552.0], [82.4, 552.0], [82.5, 554.0], [82.6, 554.0], [82.7, 555.0], [82.8, 556.0], [82.9, 557.0], [83.0, 558.0], [83.1, 559.0], [83.2, 560.0], [83.3, 562.0], [83.4, 563.0], [83.5, 566.0], [83.6, 567.0], [83.7, 570.0], [83.8, 571.0], [83.9, 572.0], [84.0, 574.0], [84.1, 576.0], [84.2, 578.0], [84.3, 580.0], [84.4, 580.0], [84.5, 581.0], [84.6, 582.0], [84.7, 584.0], [84.8, 585.0], [84.9, 588.0], [85.0, 589.0], [85.1, 591.0], [85.2, 592.0], [85.3, 594.0], [85.4, 596.0], [85.5, 597.0], [85.6, 599.0], [85.7, 602.0], [85.8, 604.0], [85.9, 605.0], [86.0, 606.0], [86.1, 608.0], [86.2, 609.0], [86.3, 611.0], [86.4, 614.0], [86.5, 615.0], [86.6, 618.0], [86.7, 619.0], [86.8, 621.0], [86.9, 624.0], [87.0, 625.0], [87.1, 627.0], [87.2, 629.0], [87.3, 631.0], [87.4, 634.0], [87.5, 636.0], [87.6, 638.0], [87.7, 639.0], [87.8, 641.0], [87.9, 642.0], [88.0, 644.0], [88.1, 645.0], [88.2, 647.0], [88.3, 648.0], [88.4, 650.0], [88.5, 651.0], [88.6, 652.0], [88.7, 654.0], [88.8, 655.0], [88.9, 658.0], [89.0, 660.0], [89.1, 662.0], [89.2, 666.0], [89.3, 668.0], [89.4, 672.0], [89.5, 673.0], [89.6, 676.0], [89.7, 679.0], [89.8, 681.0], [89.9, 683.0], [90.0, 686.0], [90.1, 688.0], [90.2, 690.0], [90.3, 692.0], [90.4, 695.0], [90.5, 696.0], [90.6, 699.0], [90.7, 703.0], [90.8, 708.0], [90.9, 711.0], [91.0, 716.0], [91.1, 718.0], [91.2, 724.0], [91.3, 727.0], [91.4, 730.0], [91.5, 734.0], [91.6, 737.0], [91.7, 745.0], [91.8, 746.0], [91.9, 748.0], [92.0, 751.0], [92.1, 755.0], [92.2, 759.0], [92.3, 763.0], [92.4, 767.0], [92.5, 772.0], [92.6, 777.0], [92.7, 782.0], [92.8, 786.0], [92.9, 791.0], [93.0, 795.0], [93.1, 800.0], [93.2, 812.0], [93.3, 815.0], [93.4, 822.0], [93.5, 829.0], [93.6, 840.0], [93.7, 843.0], [93.8, 861.0], [93.9, 865.0], [94.0, 878.0], [94.1, 883.0], [94.2, 892.0], [94.3, 902.0], [94.4, 905.0], [94.5, 908.0], [94.6, 916.0], [94.7, 934.0], [94.8, 958.0], [94.9, 974.0], [95.0, 995.0], [95.1, 1016.0], [95.2, 1050.0], [95.3, 1086.0], [95.4, 1099.0], [95.5, 1155.0], [95.6, 1181.0], [95.7, 1192.0], [95.8, 1259.0], [95.9, 1336.0], [96.0, 1392.0], [96.1, 1432.0], [96.2, 1478.0], [96.3, 1505.0], [96.4, 1610.0], [96.5, 1671.0], [96.6, 1725.0], [96.7, 1774.0], [96.8, 1871.0], [96.9, 1913.0], [97.0, 1994.0], [97.1, 2015.0], [97.2, 2117.0], [97.3, 2226.0], [97.4, 2443.0], [97.5, 2572.0], [97.6, 2707.0], [97.7, 2805.0], [97.8, 2842.0], [97.9, 2964.0], [98.0, 3068.0], [98.1, 3185.0], [98.2, 3250.0], [98.3, 3350.0], [98.4, 3451.0], [98.5, 3528.0], [98.6, 3745.0], [98.7, 3942.0], [98.8, 4192.0], [98.9, 4469.0], [99.0, 4713.0], [99.1, 5232.0], [99.2, 6012.0], [99.3, 7856.0], [99.4, 8784.0], [99.5, 8997.0], [99.6, 9714.0], [99.7, 10765.0], [99.8, 11427.0], [99.9, 12656.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 1630.0, "series": [{"data": [[0.0, 1630.0], [600.0, 260.0], [700.0, 127.0], [800.0, 62.0], [900.0, 39.0], [1000.0, 20.0], [1100.0, 15.0], [1200.0, 9.0], [1300.0, 9.0], [1400.0, 11.0], [1500.0, 7.0], [1600.0, 8.0], [1700.0, 9.0], [1800.0, 7.0], [1900.0, 9.0], [2000.0, 8.0], [2100.0, 2.0], [2200.0, 6.0], [2300.0, 3.0], [2400.0, 2.0], [2500.0, 5.0], [2600.0, 3.0], [2800.0, 8.0], [2700.0, 5.0], [2900.0, 4.0], [3000.0, 5.0], [3100.0, 5.0], [3300.0, 4.0], [3200.0, 8.0], [3400.0, 4.0], [3500.0, 8.0], [3700.0, 6.0], [3900.0, 2.0], [4000.0, 2.0], [4100.0, 4.0], [4200.0, 1.0], [4300.0, 1.0], [4500.0, 1.0], [4600.0, 4.0], [4400.0, 1.0], [4700.0, 2.0], [4800.0, 2.0], [4900.0, 1.0], [5200.0, 1.0], [5500.0, 1.0], [5700.0, 1.0], [6000.0, 1.0], [5900.0, 2.0], [6100.0, 1.0], [7500.0, 1.0], [7600.0, 1.0], [7800.0, 3.0], [7900.0, 1.0], [8100.0, 1.0], [8600.0, 1.0], [8700.0, 1.0], [8900.0, 5.0], [8800.0, 1.0], [9000.0, 1.0], [9500.0, 2.0], [9700.0, 1.0], [9400.0, 1.0], [10100.0, 2.0], [10600.0, 1.0], [10700.0, 1.0], [10500.0, 1.0], [11100.0, 1.0], [11200.0, 1.0], [10800.0, 1.0], [11400.0, 1.0], [11700.0, 1.0], [11300.0, 1.0], [11600.0, 1.0], [11800.0, 1.0], [12600.0, 1.0], [12300.0, 1.0], [13300.0, 1.0], [13200.0, 1.0], [13900.0, 1.0], [14200.0, 1.0], [21800.0, 1.0], [100.0, 707.0], [200.0, 668.0], [300.0, 591.0], [400.0, 431.0], [500.0, 418.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 21800.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 4028.0, "series": [{"data": [[0.0, 4028.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 969.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 193.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 1.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.0, "minX": 1.60223868E12, "maxY": 10.0, "series": [{"data": [[1.6022388E12, 10.0], [1.60223868E12, 9.0], [1.60223886E12, 10.0], [1.60223874E12, 10.0], [1.60223892E12, 9.958333333333332]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60223892E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 333.5, "minX": 1.0, "maxY": 7859.0, "series": [{"data": [[8.0, 555.0], [4.0, 525.0], [2.0, 512.0], [1.0, 7859.0], [9.0, 333.5], [10.0, 439.94421926269223], [5.0, 563.0], [6.0, 709.0], [3.0, 504.0], [7.0, 593.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.991138508957777, 441.50221537275945]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 15.766666666666667, "minX": 1.60223868E12, "maxY": 6974906.083333333, "series": [{"data": [[1.6022388E12, 6491540.716666667], [1.60223868E12, 13262.783333333333], [1.60223886E12, 6974906.083333333], [1.60223874E12, 5192519.2], [1.60223892E12, 4289946.383333334]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6022388E12, 10627.5], [1.60223868E12, 15.766666666666667], [1.60223886E12, 11976.566666666668], [1.60223874E12, 9029.716666666667], [1.60223892E12, 8299.166666666666]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60223892E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 378.0, "minX": 1.60223868E12, "maxY": 502.10033444816037, "series": [{"data": [[1.6022388E12, 433.0861561119297], [1.60223868E12, 378.0], [1.60223886E12, 381.90373654211504], [1.60223874E12, 502.10033444816037], [1.60223892E12, 472.92897727272737]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60223892E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 374.5, "minX": 1.60223868E12, "maxY": 499.83779264214024, "series": [{"data": [[1.6022388E12, 430.3107511045653], [1.60223868E12, 374.5], [1.60223886E12, 379.85307156428087], [1.60223874E12, 499.83779264214024], [1.60223892E12, 471.1789772727267]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60223892E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.006627393225331373, "minX": 1.60223868E12, "maxY": 26.0, "series": [{"data": [[1.6022388E12, 0.006627393225331373], [1.60223868E12, 26.0], [1.60223886E12, 0.0069664344521849254], [1.60223874E12, 0.09782608695652187], [1.60223892E12, 0.006628787878787876]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60223892E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 17.0, "minX": 1.60223868E12, "maxY": 14279.0, "series": [{"data": [[1.6022388E12, 13388.0], [1.60223868E12, 555.0], [1.60223886E12, 9050.0], [1.60223874E12, 11226.0], [1.60223892E12, 14279.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6022388E12, 25.22199967622757], [1.60223868E12, 201.0], [1.60223886E12, 27.0], [1.60223874E12, 28.0], [1.60223892E12, 28.512999747991564]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6022388E12, 26.44420012950897], [1.60223868E12, 201.0], [1.60223886E12, 27.0], [1.60223874E12, 28.0], [1.60223892E12, 29.464300100803378]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6022388E12, 25.900999838113783], [1.60223868E12, 201.0], [1.60223886E12, 27.0], [1.60223874E12, 28.0], [1.60223892E12, 29.041499873995782]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.6022388E12, 21.0], [1.60223868E12, 201.0], [1.60223886E12, 17.0], [1.60223874E12, 21.0], [1.60223892E12, 22.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6022388E12, 273.0], [1.60223868E12, 378.0], [1.60223886E12, 221.0], [1.60223874E12, 224.0], [1.60223892E12, 236.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60223892E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 55.0, "minX": 1.0, "maxY": 21805.0, "series": [{"data": [[2.0, 2878.5], [3.0, 1774.0], [4.0, 1353.0], [5.0, 721.0], [6.0, 499.0], [7.0, 333.0], [8.0, 465.0], [9.0, 456.5], [10.0, 321.5], [11.0, 387.0], [12.0, 389.5], [13.0, 465.0], [14.0, 365.5], [15.0, 266.0], [16.0, 394.5], [17.0, 379.0], [18.0, 395.0], [19.0, 462.0], [20.0, 317.0], [21.0, 400.5], [22.0, 354.5], [23.0, 405.0], [24.0, 278.0], [25.0, 339.0], [26.0, 401.0], [27.0, 308.5], [28.0, 222.0], [29.0, 243.0], [30.0, 178.0], [31.0, 359.5], [33.0, 205.0], [32.0, 218.5], [35.0, 285.0], [34.0, 226.0], [37.0, 212.5], [36.0, 226.5], [39.0, 200.0], [40.0, 242.0], [41.0, 151.0], [43.0, 189.5], [42.0, 231.5], [45.0, 94.0], [46.0, 202.5], [48.0, 92.0], [49.0, 202.0], [50.0, 143.0], [51.0, 102.0], [53.0, 184.0], [52.0, 85.0], [54.0, 105.0], [57.0, 69.0], [59.0, 91.0], [61.0, 55.0], [62.0, 74.5], [66.0, 72.5], [82.0, 71.0], [1.0, 7859.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[31.0, 21805.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 82.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 54.0, "minX": 1.0, "maxY": 21805.0, "series": [{"data": [[2.0, 2877.5], [3.0, 1774.0], [4.0, 1351.0], [5.0, 718.0], [6.0, 496.5], [7.0, 321.0], [8.0, 462.5], [9.0, 456.0], [10.0, 321.0], [11.0, 381.0], [12.0, 387.5], [13.0, 464.0], [14.0, 358.5], [15.0, 266.0], [16.0, 390.5], [17.0, 378.5], [18.0, 391.5], [19.0, 454.0], [20.0, 314.0], [21.0, 398.5], [22.0, 348.5], [23.0, 401.0], [24.0, 277.5], [25.0, 336.0], [26.0, 389.0], [27.0, 307.0], [28.0, 218.5], [29.0, 243.0], [30.0, 177.0], [31.0, 352.5], [33.0, 205.0], [32.0, 218.0], [35.0, 279.0], [34.0, 225.5], [37.0, 212.5], [36.0, 225.5], [39.0, 198.0], [40.0, 237.0], [41.0, 151.0], [43.0, 189.0], [42.0, 227.0], [45.0, 94.0], [46.0, 202.0], [48.0, 91.5], [49.0, 201.0], [50.0, 142.5], [51.0, 101.0], [53.0, 184.0], [52.0, 85.0], [54.0, 105.0], [57.0, 68.0], [59.0, 91.0], [61.0, 54.0], [62.0, 74.5], [66.0, 72.5], [82.0, 70.5], [1.0, 7859.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[31.0, 21805.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 82.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.2, "minX": 1.60223868E12, "maxY": 26.316666666666666, "series": [{"data": [[1.6022388E12, 22.65], [1.60223868E12, 0.2], [1.60223886E12, 26.316666666666666], [1.60223874E12, 19.916666666666668], [1.60223892E12, 17.433333333333334]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60223892E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60223868E12, "maxY": 26.316666666666666, "series": [{"data": [[1.6022388E12, 22.616666666666667], [1.60223868E12, 0.03333333333333333], [1.60223886E12, 26.316666666666666], [1.60223874E12, 19.933333333333334], [1.60223892E12, 17.6]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.6022388E12, 0.016666666666666666]], "isOverall": false, "label": "500", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60223892E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60223868E12, "maxY": 26.316666666666666, "series": [{"data": [[1.6022388E12, 22.616666666666667], [1.60223868E12, 0.03333333333333333], [1.60223886E12, 26.316666666666666], [1.60223874E12, 19.933333333333334], [1.60223892E12, 17.6]], "isOverall": false, "label": "HTTP Request-success", "isController": false}, {"data": [[1.6022388E12, 0.016666666666666666]], "isOverall": false, "label": "HTTP Request-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60223892E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60223868E12, "maxY": 26.316666666666666, "series": [{"data": [[1.6022388E12, 22.616666666666667], [1.60223868E12, 0.03333333333333333], [1.60223886E12, 26.316666666666666], [1.60223874E12, 19.933333333333334], [1.60223892E12, 17.6]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.6022388E12, 0.016666666666666666]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60223892E12, "title": "Total Transactions Per Second"}},
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

