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
        data: {"result": {"minY": 28.0, "minX": 0.0, "maxY": 3282.0, "series": [{"data": [[0.0, 28.0], [0.1, 29.0], [0.2, 29.0], [0.3, 29.0], [0.4, 30.0], [0.5, 30.0], [0.6, 30.0], [0.7, 30.0], [0.8, 30.0], [0.9, 31.0], [1.0, 31.0], [1.1, 31.0], [1.2, 32.0], [1.3, 32.0], [1.4, 32.0], [1.5, 32.0], [1.6, 32.0], [1.7, 32.0], [1.8, 32.0], [1.9, 32.0], [2.0, 33.0], [2.1, 33.0], [2.2, 33.0], [2.3, 33.0], [2.4, 33.0], [2.5, 33.0], [2.6, 33.0], [2.7, 33.0], [2.8, 34.0], [2.9, 34.0], [3.0, 34.0], [3.1, 34.0], [3.2, 34.0], [3.3, 34.0], [3.4, 34.0], [3.5, 34.0], [3.6, 34.0], [3.7, 34.0], [3.8, 34.0], [3.9, 35.0], [4.0, 35.0], [4.1, 35.0], [4.2, 35.0], [4.3, 35.0], [4.4, 35.0], [4.5, 35.0], [4.6, 35.0], [4.7, 35.0], [4.8, 35.0], [4.9, 35.0], [5.0, 35.0], [5.1, 35.0], [5.2, 35.0], [5.3, 35.0], [5.4, 35.0], [5.5, 35.0], [5.6, 35.0], [5.7, 36.0], [5.8, 36.0], [5.9, 36.0], [6.0, 36.0], [6.1, 36.0], [6.2, 36.0], [6.3, 36.0], [6.4, 36.0], [6.5, 36.0], [6.6, 36.0], [6.7, 36.0], [6.8, 36.0], [6.9, 36.0], [7.0, 36.0], [7.1, 36.0], [7.2, 37.0], [7.3, 37.0], [7.4, 37.0], [7.5, 37.0], [7.6, 37.0], [7.7, 37.0], [7.8, 37.0], [7.9, 37.0], [8.0, 37.0], [8.1, 37.0], [8.2, 37.0], [8.3, 37.0], [8.4, 37.0], [8.5, 37.0], [8.6, 37.0], [8.7, 37.0], [8.8, 37.0], [8.9, 38.0], [9.0, 38.0], [9.1, 38.0], [9.2, 38.0], [9.3, 38.0], [9.4, 38.0], [9.5, 38.0], [9.6, 38.0], [9.7, 38.0], [9.8, 38.0], [9.9, 38.0], [10.0, 38.0], [10.1, 38.0], [10.2, 38.0], [10.3, 38.0], [10.4, 38.0], [10.5, 39.0], [10.6, 39.0], [10.7, 39.0], [10.8, 39.0], [10.9, 39.0], [11.0, 39.0], [11.1, 39.0], [11.2, 39.0], [11.3, 39.0], [11.4, 39.0], [11.5, 39.0], [11.6, 39.0], [11.7, 39.0], [11.8, 39.0], [11.9, 39.0], [12.0, 39.0], [12.1, 40.0], [12.2, 40.0], [12.3, 40.0], [12.4, 40.0], [12.5, 40.0], [12.6, 40.0], [12.7, 40.0], [12.8, 40.0], [12.9, 40.0], [13.0, 40.0], [13.1, 40.0], [13.2, 40.0], [13.3, 41.0], [13.4, 41.0], [13.5, 41.0], [13.6, 41.0], [13.7, 41.0], [13.8, 41.0], [13.9, 41.0], [14.0, 41.0], [14.1, 41.0], [14.2, 41.0], [14.3, 42.0], [14.4, 42.0], [14.5, 42.0], [14.6, 42.0], [14.7, 42.0], [14.8, 42.0], [14.9, 42.0], [15.0, 42.0], [15.1, 42.0], [15.2, 42.0], [15.3, 42.0], [15.4, 42.0], [15.5, 43.0], [15.6, 43.0], [15.7, 43.0], [15.8, 43.0], [15.9, 43.0], [16.0, 43.0], [16.1, 43.0], [16.2, 43.0], [16.3, 43.0], [16.4, 43.0], [16.5, 44.0], [16.6, 44.0], [16.7, 44.0], [16.8, 44.0], [16.9, 44.0], [17.0, 44.0], [17.1, 44.0], [17.2, 45.0], [17.3, 45.0], [17.4, 45.0], [17.5, 45.0], [17.6, 45.0], [17.7, 45.0], [17.8, 46.0], [17.9, 46.0], [18.0, 46.0], [18.1, 46.0], [18.2, 47.0], [18.3, 47.0], [18.4, 47.0], [18.5, 47.0], [18.6, 47.0], [18.7, 47.0], [18.8, 48.0], [18.9, 48.0], [19.0, 48.0], [19.1, 48.0], [19.2, 48.0], [19.3, 49.0], [19.4, 49.0], [19.5, 49.0], [19.6, 50.0], [19.7, 50.0], [19.8, 50.0], [19.9, 51.0], [20.0, 51.0], [20.1, 52.0], [20.2, 52.0], [20.3, 52.0], [20.4, 53.0], [20.5, 53.0], [20.6, 54.0], [20.7, 54.0], [20.8, 54.0], [20.9, 54.0], [21.0, 55.0], [21.1, 55.0], [21.2, 55.0], [21.3, 55.0], [21.4, 56.0], [21.5, 56.0], [21.6, 56.0], [21.7, 57.0], [21.8, 57.0], [21.9, 58.0], [22.0, 58.0], [22.1, 59.0], [22.2, 59.0], [22.3, 59.0], [22.4, 59.0], [22.5, 60.0], [22.6, 60.0], [22.7, 60.0], [22.8, 61.0], [22.9, 61.0], [23.0, 61.0], [23.1, 62.0], [23.2, 62.0], [23.3, 62.0], [23.4, 62.0], [23.5, 62.0], [23.6, 62.0], [23.7, 63.0], [23.8, 63.0], [23.9, 63.0], [24.0, 63.0], [24.1, 63.0], [24.2, 64.0], [24.3, 64.0], [24.4, 64.0], [24.5, 64.0], [24.6, 64.0], [24.7, 65.0], [24.8, 65.0], [24.9, 65.0], [25.0, 65.0], [25.1, 65.0], [25.2, 65.0], [25.3, 66.0], [25.4, 66.0], [25.5, 66.0], [25.6, 66.0], [25.7, 67.0], [25.8, 67.0], [25.9, 67.0], [26.0, 67.0], [26.1, 67.0], [26.2, 68.0], [26.3, 68.0], [26.4, 68.0], [26.5, 68.0], [26.6, 68.0], [26.7, 68.0], [26.8, 68.0], [26.9, 69.0], [27.0, 69.0], [27.1, 69.0], [27.2, 69.0], [27.3, 69.0], [27.4, 69.0], [27.5, 69.0], [27.6, 69.0], [27.7, 70.0], [27.8, 70.0], [27.9, 70.0], [28.0, 70.0], [28.1, 70.0], [28.2, 70.0], [28.3, 70.0], [28.4, 71.0], [28.5, 71.0], [28.6, 71.0], [28.7, 71.0], [28.8, 71.0], [28.9, 71.0], [29.0, 71.0], [29.1, 71.0], [29.2, 71.0], [29.3, 72.0], [29.4, 72.0], [29.5, 72.0], [29.6, 72.0], [29.7, 72.0], [29.8, 72.0], [29.9, 72.0], [30.0, 72.0], [30.1, 73.0], [30.2, 73.0], [30.3, 73.0], [30.4, 73.0], [30.5, 73.0], [30.6, 73.0], [30.7, 74.0], [30.8, 74.0], [30.9, 74.0], [31.0, 74.0], [31.1, 74.0], [31.2, 74.0], [31.3, 74.0], [31.4, 74.0], [31.5, 75.0], [31.6, 75.0], [31.7, 75.0], [31.8, 75.0], [31.9, 75.0], [32.0, 76.0], [32.1, 76.0], [32.2, 76.0], [32.3, 76.0], [32.4, 76.0], [32.5, 76.0], [32.6, 76.0], [32.7, 77.0], [32.8, 77.0], [32.9, 77.0], [33.0, 77.0], [33.1, 77.0], [33.2, 77.0], [33.3, 77.0], [33.4, 78.0], [33.5, 78.0], [33.6, 78.0], [33.7, 78.0], [33.8, 78.0], [33.9, 78.0], [34.0, 79.0], [34.1, 79.0], [34.2, 79.0], [34.3, 79.0], [34.4, 79.0], [34.5, 80.0], [34.6, 80.0], [34.7, 80.0], [34.8, 80.0], [34.9, 80.0], [35.0, 80.0], [35.1, 81.0], [35.2, 81.0], [35.3, 81.0], [35.4, 81.0], [35.5, 81.0], [35.6, 82.0], [35.7, 82.0], [35.8, 82.0], [35.9, 83.0], [36.0, 83.0], [36.1, 83.0], [36.2, 83.0], [36.3, 84.0], [36.4, 84.0], [36.5, 84.0], [36.6, 84.0], [36.7, 85.0], [36.8, 85.0], [36.9, 85.0], [37.0, 85.0], [37.1, 86.0], [37.2, 86.0], [37.3, 86.0], [37.4, 86.0], [37.5, 87.0], [37.6, 87.0], [37.7, 87.0], [37.8, 87.0], [37.9, 88.0], [38.0, 88.0], [38.1, 89.0], [38.2, 89.0], [38.3, 90.0], [38.4, 90.0], [38.5, 91.0], [38.6, 91.0], [38.7, 92.0], [38.8, 92.0], [38.9, 93.0], [39.0, 93.0], [39.1, 94.0], [39.2, 95.0], [39.3, 95.0], [39.4, 96.0], [39.5, 97.0], [39.6, 97.0], [39.7, 98.0], [39.8, 99.0], [39.9, 99.0], [40.0, 100.0], [40.1, 100.0], [40.2, 101.0], [40.3, 101.0], [40.4, 101.0], [40.5, 102.0], [40.6, 103.0], [40.7, 103.0], [40.8, 104.0], [40.9, 104.0], [41.0, 105.0], [41.1, 105.0], [41.2, 106.0], [41.3, 106.0], [41.4, 106.0], [41.5, 107.0], [41.6, 107.0], [41.7, 107.0], [41.8, 108.0], [41.9, 109.0], [42.0, 109.0], [42.1, 110.0], [42.2, 111.0], [42.3, 111.0], [42.4, 112.0], [42.5, 112.0], [42.6, 113.0], [42.7, 113.0], [42.8, 113.0], [42.9, 114.0], [43.0, 114.0], [43.1, 115.0], [43.2, 116.0], [43.3, 117.0], [43.4, 117.0], [43.5, 117.0], [43.6, 118.0], [43.7, 118.0], [43.8, 119.0], [43.9, 120.0], [44.0, 120.0], [44.1, 121.0], [44.2, 122.0], [44.3, 123.0], [44.4, 123.0], [44.5, 124.0], [44.6, 125.0], [44.7, 125.0], [44.8, 126.0], [44.9, 126.0], [45.0, 127.0], [45.1, 128.0], [45.2, 129.0], [45.3, 130.0], [45.4, 130.0], [45.5, 130.0], [45.6, 131.0], [45.7, 132.0], [45.8, 133.0], [45.9, 133.0], [46.0, 134.0], [46.1, 135.0], [46.2, 135.0], [46.3, 136.0], [46.4, 136.0], [46.5, 137.0], [46.6, 138.0], [46.7, 139.0], [46.8, 139.0], [46.9, 140.0], [47.0, 141.0], [47.1, 142.0], [47.2, 142.0], [47.3, 144.0], [47.4, 145.0], [47.5, 146.0], [47.6, 146.0], [47.7, 147.0], [47.8, 148.0], [47.9, 149.0], [48.0, 150.0], [48.1, 151.0], [48.2, 152.0], [48.3, 153.0], [48.4, 154.0], [48.5, 154.0], [48.6, 155.0], [48.7, 156.0], [48.8, 157.0], [48.9, 157.0], [49.0, 159.0], [49.1, 160.0], [49.2, 161.0], [49.3, 161.0], [49.4, 162.0], [49.5, 163.0], [49.6, 164.0], [49.7, 165.0], [49.8, 167.0], [49.9, 168.0], [50.0, 169.0], [50.1, 171.0], [50.2, 173.0], [50.3, 175.0], [50.4, 175.0], [50.5, 176.0], [50.6, 177.0], [50.7, 177.0], [50.8, 179.0], [50.9, 179.0], [51.0, 181.0], [51.1, 182.0], [51.2, 182.0], [51.3, 183.0], [51.4, 183.0], [51.5, 184.0], [51.6, 184.0], [51.7, 184.0], [51.8, 185.0], [51.9, 185.0], [52.0, 186.0], [52.1, 186.0], [52.2, 187.0], [52.3, 188.0], [52.4, 189.0], [52.5, 189.0], [52.6, 190.0], [52.7, 190.0], [52.8, 191.0], [52.9, 192.0], [53.0, 193.0], [53.1, 193.0], [53.2, 195.0], [53.3, 196.0], [53.4, 196.0], [53.5, 197.0], [53.6, 198.0], [53.7, 199.0], [53.8, 199.0], [53.9, 200.0], [54.0, 201.0], [54.1, 201.0], [54.2, 202.0], [54.3, 203.0], [54.4, 204.0], [54.5, 205.0], [54.6, 206.0], [54.7, 206.0], [54.8, 208.0], [54.9, 209.0], [55.0, 210.0], [55.1, 211.0], [55.2, 212.0], [55.3, 212.0], [55.4, 214.0], [55.5, 215.0], [55.6, 215.0], [55.7, 216.0], [55.8, 216.0], [55.9, 217.0], [56.0, 219.0], [56.1, 219.0], [56.2, 219.0], [56.3, 221.0], [56.4, 222.0], [56.5, 223.0], [56.6, 223.0], [56.7, 225.0], [56.8, 225.0], [56.9, 226.0], [57.0, 227.0], [57.1, 228.0], [57.2, 229.0], [57.3, 229.0], [57.4, 231.0], [57.5, 231.0], [57.6, 233.0], [57.7, 234.0], [57.8, 235.0], [57.9, 236.0], [58.0, 237.0], [58.1, 238.0], [58.2, 238.0], [58.3, 239.0], [58.4, 240.0], [58.5, 240.0], [58.6, 242.0], [58.7, 243.0], [58.8, 243.0], [58.9, 244.0], [59.0, 245.0], [59.1, 245.0], [59.2, 246.0], [59.3, 247.0], [59.4, 248.0], [59.5, 249.0], [59.6, 250.0], [59.7, 251.0], [59.8, 252.0], [59.9, 253.0], [60.0, 254.0], [60.1, 255.0], [60.2, 255.0], [60.3, 256.0], [60.4, 257.0], [60.5, 259.0], [60.6, 260.0], [60.7, 261.0], [60.8, 262.0], [60.9, 263.0], [61.0, 265.0], [61.1, 266.0], [61.2, 268.0], [61.3, 270.0], [61.4, 270.0], [61.5, 271.0], [61.6, 272.0], [61.7, 273.0], [61.8, 274.0], [61.9, 275.0], [62.0, 276.0], [62.1, 277.0], [62.2, 278.0], [62.3, 279.0], [62.4, 279.0], [62.5, 280.0], [62.6, 281.0], [62.7, 282.0], [62.8, 284.0], [62.9, 285.0], [63.0, 286.0], [63.1, 287.0], [63.2, 288.0], [63.3, 289.0], [63.4, 290.0], [63.5, 290.0], [63.6, 292.0], [63.7, 295.0], [63.8, 296.0], [63.9, 297.0], [64.0, 299.0], [64.1, 300.0], [64.2, 301.0], [64.3, 302.0], [64.4, 303.0], [64.5, 304.0], [64.6, 305.0], [64.7, 307.0], [64.8, 308.0], [64.9, 309.0], [65.0, 310.0], [65.1, 311.0], [65.2, 312.0], [65.3, 312.0], [65.4, 313.0], [65.5, 314.0], [65.6, 318.0], [65.7, 319.0], [65.8, 320.0], [65.9, 322.0], [66.0, 325.0], [66.1, 327.0], [66.2, 328.0], [66.3, 331.0], [66.4, 333.0], [66.5, 334.0], [66.6, 336.0], [66.7, 336.0], [66.8, 337.0], [66.9, 338.0], [67.0, 339.0], [67.1, 340.0], [67.2, 343.0], [67.3, 345.0], [67.4, 345.0], [67.5, 346.0], [67.6, 347.0], [67.7, 350.0], [67.8, 351.0], [67.9, 352.0], [68.0, 353.0], [68.1, 355.0], [68.2, 356.0], [68.3, 358.0], [68.4, 362.0], [68.5, 362.0], [68.6, 363.0], [68.7, 364.0], [68.8, 365.0], [68.9, 366.0], [69.0, 368.0], [69.1, 369.0], [69.2, 370.0], [69.3, 371.0], [69.4, 372.0], [69.5, 374.0], [69.6, 375.0], [69.7, 379.0], [69.8, 381.0], [69.9, 383.0], [70.0, 385.0], [70.1, 386.0], [70.2, 387.0], [70.3, 389.0], [70.4, 392.0], [70.5, 393.0], [70.6, 395.0], [70.7, 397.0], [70.8, 399.0], [70.9, 400.0], [71.0, 402.0], [71.1, 403.0], [71.2, 404.0], [71.3, 406.0], [71.4, 407.0], [71.5, 409.0], [71.6, 410.0], [71.7, 412.0], [71.8, 414.0], [71.9, 415.0], [72.0, 416.0], [72.1, 419.0], [72.2, 421.0], [72.3, 422.0], [72.4, 423.0], [72.5, 426.0], [72.6, 427.0], [72.7, 429.0], [72.8, 431.0], [72.9, 432.0], [73.0, 433.0], [73.1, 435.0], [73.2, 436.0], [73.3, 438.0], [73.4, 439.0], [73.5, 440.0], [73.6, 441.0], [73.7, 442.0], [73.8, 444.0], [73.9, 447.0], [74.0, 450.0], [74.1, 451.0], [74.2, 452.0], [74.3, 453.0], [74.4, 454.0], [74.5, 456.0], [74.6, 457.0], [74.7, 458.0], [74.8, 460.0], [74.9, 462.0], [75.0, 463.0], [75.1, 464.0], [75.2, 465.0], [75.3, 467.0], [75.4, 468.0], [75.5, 469.0], [75.6, 471.0], [75.7, 473.0], [75.8, 475.0], [75.9, 476.0], [76.0, 478.0], [76.1, 479.0], [76.2, 482.0], [76.3, 484.0], [76.4, 486.0], [76.5, 488.0], [76.6, 489.0], [76.7, 491.0], [76.8, 493.0], [76.9, 495.0], [77.0, 497.0], [77.1, 498.0], [77.2, 499.0], [77.3, 502.0], [77.4, 505.0], [77.5, 507.0], [77.6, 509.0], [77.7, 511.0], [77.8, 513.0], [77.9, 515.0], [78.0, 517.0], [78.1, 520.0], [78.2, 521.0], [78.3, 522.0], [78.4, 524.0], [78.5, 526.0], [78.6, 527.0], [78.7, 532.0], [78.8, 533.0], [78.9, 534.0], [79.0, 535.0], [79.1, 538.0], [79.2, 539.0], [79.3, 540.0], [79.4, 543.0], [79.5, 545.0], [79.6, 546.0], [79.7, 549.0], [79.8, 552.0], [79.9, 554.0], [80.0, 556.0], [80.1, 559.0], [80.2, 561.0], [80.3, 562.0], [80.4, 565.0], [80.5, 569.0], [80.6, 570.0], [80.7, 572.0], [80.8, 574.0], [80.9, 576.0], [81.0, 577.0], [81.1, 578.0], [81.2, 579.0], [81.3, 582.0], [81.4, 584.0], [81.5, 586.0], [81.6, 588.0], [81.7, 590.0], [81.8, 592.0], [81.9, 594.0], [82.0, 596.0], [82.1, 599.0], [82.2, 599.0], [82.3, 601.0], [82.4, 602.0], [82.5, 604.0], [82.6, 605.0], [82.7, 606.0], [82.8, 608.0], [82.9, 608.0], [83.0, 610.0], [83.1, 613.0], [83.2, 615.0], [83.3, 616.0], [83.4, 617.0], [83.5, 619.0], [83.6, 621.0], [83.7, 622.0], [83.8, 625.0], [83.9, 627.0], [84.0, 628.0], [84.1, 631.0], [84.2, 633.0], [84.3, 635.0], [84.4, 637.0], [84.5, 638.0], [84.6, 640.0], [84.7, 642.0], [84.8, 644.0], [84.9, 647.0], [85.0, 649.0], [85.1, 650.0], [85.2, 652.0], [85.3, 654.0], [85.4, 655.0], [85.5, 657.0], [85.6, 660.0], [85.7, 662.0], [85.8, 663.0], [85.9, 665.0], [86.0, 668.0], [86.1, 671.0], [86.2, 673.0], [86.3, 678.0], [86.4, 681.0], [86.5, 684.0], [86.6, 688.0], [86.7, 691.0], [86.8, 694.0], [86.9, 698.0], [87.0, 700.0], [87.1, 701.0], [87.2, 704.0], [87.3, 705.0], [87.4, 706.0], [87.5, 708.0], [87.6, 710.0], [87.7, 713.0], [87.8, 714.0], [87.9, 718.0], [88.0, 719.0], [88.1, 721.0], [88.2, 725.0], [88.3, 728.0], [88.4, 731.0], [88.5, 735.0], [88.6, 736.0], [88.7, 744.0], [88.8, 746.0], [88.9, 749.0], [89.0, 751.0], [89.1, 754.0], [89.2, 762.0], [89.3, 763.0], [89.4, 768.0], [89.5, 771.0], [89.6, 774.0], [89.7, 777.0], [89.8, 779.0], [89.9, 784.0], [90.0, 786.0], [90.1, 788.0], [90.2, 791.0], [90.3, 797.0], [90.4, 800.0], [90.5, 806.0], [90.6, 807.0], [90.7, 814.0], [90.8, 820.0], [90.9, 825.0], [91.0, 827.0], [91.1, 831.0], [91.2, 839.0], [91.3, 843.0], [91.4, 849.0], [91.5, 853.0], [91.6, 857.0], [91.7, 863.0], [91.8, 866.0], [91.9, 868.0], [92.0, 873.0], [92.1, 878.0], [92.2, 882.0], [92.3, 887.0], [92.4, 888.0], [92.5, 892.0], [92.6, 898.0], [92.7, 901.0], [92.8, 904.0], [92.9, 911.0], [93.0, 918.0], [93.1, 922.0], [93.2, 927.0], [93.3, 929.0], [93.4, 933.0], [93.5, 940.0], [93.6, 942.0], [93.7, 948.0], [93.8, 952.0], [93.9, 957.0], [94.0, 959.0], [94.1, 962.0], [94.2, 968.0], [94.3, 979.0], [94.4, 983.0], [94.5, 990.0], [94.6, 993.0], [94.7, 999.0], [94.8, 1009.0], [94.9, 1012.0], [95.0, 1020.0], [95.1, 1026.0], [95.2, 1033.0], [95.3, 1038.0], [95.4, 1047.0], [95.5, 1054.0], [95.6, 1064.0], [95.7, 1079.0], [95.8, 1086.0], [95.9, 1096.0], [96.0, 1104.0], [96.1, 1111.0], [96.2, 1122.0], [96.3, 1125.0], [96.4, 1142.0], [96.5, 1150.0], [96.6, 1159.0], [96.7, 1180.0], [96.8, 1186.0], [96.9, 1197.0], [97.0, 1209.0], [97.1, 1225.0], [97.2, 1245.0], [97.3, 1255.0], [97.4, 1265.0], [97.5, 1279.0], [97.6, 1297.0], [97.7, 1328.0], [97.8, 1342.0], [97.9, 1354.0], [98.0, 1386.0], [98.1, 1399.0], [98.2, 1432.0], [98.3, 1459.0], [98.4, 1475.0], [98.5, 1487.0], [98.6, 1501.0], [98.7, 1527.0], [98.8, 1558.0], [98.9, 1593.0], [99.0, 1641.0], [99.1, 1664.0], [99.2, 1741.0], [99.3, 1779.0], [99.4, 1820.0], [99.5, 1860.0], [99.6, 2046.0], [99.7, 2155.0], [99.8, 2227.0], [99.9, 3084.0], [100.0, 3282.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 2107.0, "series": [{"data": [[0.0, 2107.0], [600.0, 252.0], [700.0, 177.0], [800.0, 121.0], [900.0, 109.0], [1000.0, 63.0], [1100.0, 54.0], [1200.0, 36.0], [1300.0, 26.0], [1400.0, 26.0], [1500.0, 18.0], [100.0, 732.0], [1600.0, 9.0], [1700.0, 14.0], [1800.0, 8.0], [1900.0, 3.0], [2000.0, 2.0], [2100.0, 9.0], [2200.0, 2.0], [2300.0, 2.0], [2500.0, 1.0], [3000.0, 1.0], [3100.0, 1.0], [200.0, 538.0], [3200.0, 4.0], [300.0, 360.0], [400.0, 333.0], [500.0, 264.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3200.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 74.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 4072.0, "series": [{"data": [[0.0, 4072.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1126.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 74.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.968901174844506, "minX": 1.6022349E12, "maxY": 10.0, "series": [{"data": [[1.60223502E12, 9.968901174844506], [1.60223496E12, 10.0], [1.6022349E12, 9.984060984060985]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60223502E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 312.0173135464228, "minX": 1.0, "maxY": 3259.0, "series": [{"data": [[4.0, 1706.5], [8.0, 1691.5], [2.0, 3084.0], [1.0, 3138.0], [9.0, 439.6666666666667], [5.0, 421.0], [10.0, 312.0173135464228], [6.0, 974.0], [3.0, 3259.0], [7.0, 1737.5]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.987101669195768, 315.49146433990796]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 12467.983333333334, "minX": 1.6022349E12, "maxY": 1523769.7, "series": [{"data": [[1.60223502E12, 1523769.7], [1.60223496E12, 1246067.2166666666], [1.6022349E12, 1521750.45]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60223502E12, 12601.75], [1.60223496E12, 20509.816666666666], [1.6022349E12, 12467.983333333334]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60223502E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 251.6796809403866, "minX": 1.6022349E12, "maxY": 391.3146223146227, "series": [{"data": [[1.60223502E12, 344.92259847961367], [1.60223496E12, 251.6796809403866], [1.6022349E12, 391.3146223146227]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60223502E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 251.4370277078085, "minX": 1.6022349E12, "maxY": 390.8329868329868, "series": [{"data": [[1.60223502E12, 344.4816862474082], [1.60223496E12, 251.4370277078085], [1.6022349E12, 390.8329868329868]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60223502E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.007601935038009681, "minX": 1.6022349E12, "maxY": 0.07830907830907843, "series": [{"data": [[1.60223502E12, 0.007601935038009681], [1.60223496E12, 0.009655751469353517], [1.6022349E12, 0.07830907830907843]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60223502E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 28.0, "minX": 1.6022349E12, "maxY": 3282.0, "series": [{"data": [[1.60223502E12, 3282.0], [1.60223496E12, 2315.0], [1.6022349E12, 2166.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60223502E12, 30.0], [1.60223496E12, 31.0], [1.6022349E12, 32.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60223502E12, 30.0], [1.60223496E12, 31.0], [1.6022349E12, 32.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60223502E12, 30.0], [1.60223496E12, 31.0], [1.6022349E12, 32.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60223502E12, 28.0], [1.60223496E12, 28.0], [1.6022349E12, 29.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60223502E12, 204.0], [1.60223496E12, 109.5], [1.6022349E12, 266.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60223502E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 40.0, "minX": 1.0, "maxY": 3198.5, "series": [{"data": [[2.0, 3198.5], [4.0, 1054.5], [5.0, 1425.0], [6.0, 1172.5], [7.0, 928.0], [8.0, 921.0], [10.0, 669.0], [11.0, 736.0], [12.0, 670.5], [13.0, 694.0], [14.0, 612.5], [15.0, 640.0], [16.0, 610.5], [17.0, 505.0], [18.0, 488.5], [19.0, 538.0], [20.0, 458.0], [21.0, 421.0], [22.0, 468.0], [23.0, 285.0], [24.0, 374.0], [25.0, 319.0], [26.0, 277.0], [27.0, 410.0], [28.0, 43.5], [29.0, 221.0], [30.0, 228.0], [31.0, 206.5], [33.0, 74.0], [32.0, 282.0], [35.0, 77.0], [34.0, 57.5], [36.0, 137.0], [37.0, 69.0], [39.0, 159.5], [38.0, 154.0], [40.0, 132.0], [41.0, 88.5], [42.0, 198.0], [43.0, 187.0], [45.0, 81.0], [46.0, 71.0], [49.0, 40.0], [48.0, 80.5], [50.0, 130.0], [51.0, 130.0], [53.0, 84.0], [52.0, 76.0], [55.0, 114.0], [57.0, 77.0], [59.0, 103.0], [63.0, 83.0], [62.0, 134.0], [68.0, 117.0], [70.0, 104.0], [71.0, 148.0], [69.0, 121.0], [74.0, 64.0], [72.0, 47.0], [76.0, 73.0], [79.0, 76.0], [86.0, 100.0], [88.0, 68.0], [91.0, 79.0], [114.0, 65.5], [1.0, 132.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 114.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 40.0, "minX": 1.0, "maxY": 3198.0, "series": [{"data": [[2.0, 3198.0], [4.0, 1054.5], [5.0, 1423.0], [6.0, 1172.0], [7.0, 925.0], [8.0, 919.5], [10.0, 667.5], [11.0, 735.0], [12.0, 670.5], [13.0, 693.0], [14.0, 612.0], [15.0, 640.0], [16.0, 609.5], [17.0, 504.0], [18.0, 487.5], [19.0, 538.0], [20.0, 457.5], [21.0, 416.0], [22.0, 467.0], [23.0, 285.0], [24.0, 372.0], [25.0, 319.0], [26.0, 277.0], [27.0, 410.0], [28.0, 43.5], [29.0, 221.0], [30.0, 227.0], [31.0, 206.5], [33.0, 74.0], [32.0, 282.0], [35.0, 77.0], [34.0, 57.5], [36.0, 136.5], [37.0, 69.0], [39.0, 159.5], [38.0, 154.0], [40.0, 132.0], [41.0, 88.5], [42.0, 197.5], [43.0, 186.5], [45.0, 80.0], [46.0, 71.0], [49.0, 40.0], [48.0, 80.5], [50.0, 129.5], [51.0, 130.0], [53.0, 84.0], [52.0, 76.0], [55.0, 114.0], [57.0, 77.0], [59.0, 103.0], [63.0, 83.0], [62.0, 134.0], [68.0, 116.5], [70.0, 104.0], [71.0, 147.0], [69.0, 121.0], [74.0, 64.0], [72.0, 47.0], [76.0, 73.0], [79.0, 76.0], [86.0, 99.5], [88.0, 68.0], [91.0, 79.0], [114.0, 65.5], [1.0, 129.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 114.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 23.95, "minX": 1.6022349E12, "maxY": 39.7, "series": [{"data": [[1.60223502E12, 23.95], [1.60223496E12, 39.7], [1.6022349E12, 24.216666666666665]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60223502E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 24.05, "minX": 1.6022349E12, "maxY": 39.7, "series": [{"data": [[1.60223502E12, 24.116666666666667], [1.60223496E12, 39.7], [1.6022349E12, 24.05]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60223502E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 24.05, "minX": 1.6022349E12, "maxY": 39.7, "series": [{"data": [[1.60223502E12, 24.116666666666667], [1.60223496E12, 39.7], [1.6022349E12, 24.05]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60223502E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 24.05, "minX": 1.6022349E12, "maxY": 39.7, "series": [{"data": [[1.60223502E12, 24.116666666666667], [1.60223496E12, 39.7], [1.6022349E12, 24.05]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60223502E12, "title": "Total Transactions Per Second"}},
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

