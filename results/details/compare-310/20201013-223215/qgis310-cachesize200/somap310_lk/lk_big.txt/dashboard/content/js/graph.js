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
        data: {"result": {"minY": 31.0, "minX": 0.0, "maxY": 3395.0, "series": [{"data": [[0.0, 31.0], [0.1, 32.0], [0.2, 32.0], [0.3, 32.0], [0.4, 33.0], [0.5, 33.0], [0.6, 33.0], [0.7, 34.0], [0.8, 34.0], [0.9, 34.0], [1.0, 34.0], [1.1, 34.0], [1.2, 35.0], [1.3, 35.0], [1.4, 35.0], [1.5, 35.0], [1.6, 35.0], [1.7, 36.0], [1.8, 36.0], [1.9, 36.0], [2.0, 36.0], [2.1, 36.0], [2.2, 36.0], [2.3, 36.0], [2.4, 37.0], [2.5, 37.0], [2.6, 37.0], [2.7, 37.0], [2.8, 37.0], [2.9, 37.0], [3.0, 37.0], [3.1, 37.0], [3.2, 37.0], [3.3, 37.0], [3.4, 37.0], [3.5, 38.0], [3.6, 38.0], [3.7, 38.0], [3.8, 38.0], [3.9, 38.0], [4.0, 38.0], [4.1, 38.0], [4.2, 38.0], [4.3, 38.0], [4.4, 38.0], [4.5, 38.0], [4.6, 38.0], [4.7, 38.0], [4.8, 38.0], [4.9, 38.0], [5.0, 38.0], [5.1, 39.0], [5.2, 39.0], [5.3, 39.0], [5.4, 39.0], [5.5, 39.0], [5.6, 39.0], [5.7, 39.0], [5.8, 39.0], [5.9, 39.0], [6.0, 39.0], [6.1, 39.0], [6.2, 39.0], [6.3, 39.0], [6.4, 40.0], [6.5, 40.0], [6.6, 40.0], [6.7, 40.0], [6.8, 40.0], [6.9, 40.0], [7.0, 40.0], [7.1, 40.0], [7.2, 40.0], [7.3, 40.0], [7.4, 40.0], [7.5, 40.0], [7.6, 40.0], [7.7, 40.0], [7.8, 40.0], [7.9, 40.0], [8.0, 40.0], [8.1, 40.0], [8.2, 40.0], [8.3, 41.0], [8.4, 41.0], [8.5, 41.0], [8.6, 41.0], [8.7, 41.0], [8.8, 41.0], [8.9, 41.0], [9.0, 41.0], [9.1, 41.0], [9.2, 41.0], [9.3, 41.0], [9.4, 41.0], [9.5, 41.0], [9.6, 41.0], [9.7, 41.0], [9.8, 42.0], [9.9, 42.0], [10.0, 42.0], [10.1, 42.0], [10.2, 42.0], [10.3, 42.0], [10.4, 42.0], [10.5, 42.0], [10.6, 42.0], [10.7, 42.0], [10.8, 42.0], [10.9, 42.0], [11.0, 42.0], [11.1, 43.0], [11.2, 43.0], [11.3, 43.0], [11.4, 43.0], [11.5, 43.0], [11.6, 43.0], [11.7, 43.0], [11.8, 43.0], [11.9, 43.0], [12.0, 43.0], [12.1, 43.0], [12.2, 43.0], [12.3, 43.0], [12.4, 43.0], [12.5, 43.0], [12.6, 43.0], [12.7, 44.0], [12.8, 44.0], [12.9, 44.0], [13.0, 44.0], [13.1, 44.0], [13.2, 44.0], [13.3, 44.0], [13.4, 44.0], [13.5, 44.0], [13.6, 44.0], [13.7, 44.0], [13.8, 44.0], [13.9, 45.0], [14.0, 45.0], [14.1, 45.0], [14.2, 45.0], [14.3, 45.0], [14.4, 45.0], [14.5, 45.0], [14.6, 45.0], [14.7, 45.0], [14.8, 45.0], [14.9, 46.0], [15.0, 46.0], [15.1, 46.0], [15.2, 46.0], [15.3, 46.0], [15.4, 46.0], [15.5, 46.0], [15.6, 46.0], [15.7, 47.0], [15.8, 47.0], [15.9, 47.0], [16.0, 47.0], [16.1, 47.0], [16.2, 47.0], [16.3, 47.0], [16.4, 47.0], [16.5, 47.0], [16.6, 48.0], [16.7, 48.0], [16.8, 48.0], [16.9, 48.0], [17.0, 48.0], [17.1, 49.0], [17.2, 49.0], [17.3, 49.0], [17.4, 49.0], [17.5, 49.0], [17.6, 49.0], [17.7, 50.0], [17.8, 50.0], [17.9, 50.0], [18.0, 50.0], [18.1, 51.0], [18.2, 51.0], [18.3, 51.0], [18.4, 51.0], [18.5, 51.0], [18.6, 52.0], [18.7, 52.0], [18.8, 52.0], [18.9, 52.0], [19.0, 53.0], [19.1, 53.0], [19.2, 53.0], [19.3, 53.0], [19.4, 54.0], [19.5, 54.0], [19.6, 54.0], [19.7, 54.0], [19.8, 55.0], [19.9, 55.0], [20.0, 55.0], [20.1, 56.0], [20.2, 56.0], [20.3, 56.0], [20.4, 57.0], [20.5, 58.0], [20.6, 58.0], [20.7, 59.0], [20.8, 59.0], [20.9, 60.0], [21.0, 60.0], [21.1, 60.0], [21.2, 60.0], [21.3, 60.0], [21.4, 61.0], [21.5, 61.0], [21.6, 61.0], [21.7, 61.0], [21.8, 62.0], [21.9, 62.0], [22.0, 62.0], [22.1, 62.0], [22.2, 63.0], [22.3, 63.0], [22.4, 63.0], [22.5, 63.0], [22.6, 63.0], [22.7, 64.0], [22.8, 64.0], [22.9, 64.0], [23.0, 64.0], [23.1, 64.0], [23.2, 65.0], [23.3, 65.0], [23.4, 65.0], [23.5, 65.0], [23.6, 65.0], [23.7, 66.0], [23.8, 66.0], [23.9, 66.0], [24.0, 67.0], [24.1, 67.0], [24.2, 67.0], [24.3, 67.0], [24.4, 67.0], [24.5, 67.0], [24.6, 68.0], [24.7, 68.0], [24.8, 68.0], [24.9, 68.0], [25.0, 68.0], [25.1, 68.0], [25.2, 69.0], [25.3, 69.0], [25.4, 69.0], [25.5, 69.0], [25.6, 69.0], [25.7, 69.0], [25.8, 70.0], [25.9, 70.0], [26.0, 70.0], [26.1, 70.0], [26.2, 70.0], [26.3, 70.0], [26.4, 71.0], [26.5, 71.0], [26.6, 71.0], [26.7, 71.0], [26.8, 71.0], [26.9, 71.0], [27.0, 72.0], [27.1, 72.0], [27.2, 72.0], [27.3, 72.0], [27.4, 72.0], [27.5, 72.0], [27.6, 72.0], [27.7, 73.0], [27.8, 73.0], [27.9, 73.0], [28.0, 73.0], [28.1, 73.0], [28.2, 73.0], [28.3, 73.0], [28.4, 73.0], [28.5, 73.0], [28.6, 73.0], [28.7, 74.0], [28.8, 74.0], [28.9, 74.0], [29.0, 74.0], [29.1, 74.0], [29.2, 74.0], [29.3, 74.0], [29.4, 74.0], [29.5, 74.0], [29.6, 75.0], [29.7, 75.0], [29.8, 75.0], [29.9, 75.0], [30.0, 75.0], [30.1, 75.0], [30.2, 76.0], [30.3, 76.0], [30.4, 76.0], [30.5, 76.0], [30.6, 76.0], [30.7, 76.0], [30.8, 76.0], [30.9, 76.0], [31.0, 76.0], [31.1, 77.0], [31.2, 77.0], [31.3, 77.0], [31.4, 77.0], [31.5, 77.0], [31.6, 78.0], [31.7, 78.0], [31.8, 78.0], [31.9, 78.0], [32.0, 78.0], [32.1, 78.0], [32.2, 78.0], [32.3, 78.0], [32.4, 78.0], [32.5, 78.0], [32.6, 78.0], [32.7, 79.0], [32.8, 79.0], [32.9, 79.0], [33.0, 79.0], [33.1, 79.0], [33.2, 79.0], [33.3, 79.0], [33.4, 79.0], [33.5, 80.0], [33.6, 80.0], [33.7, 80.0], [33.8, 80.0], [33.9, 80.0], [34.0, 80.0], [34.1, 80.0], [34.2, 80.0], [34.3, 80.0], [34.4, 81.0], [34.5, 81.0], [34.6, 81.0], [34.7, 81.0], [34.8, 81.0], [34.9, 81.0], [35.0, 81.0], [35.1, 82.0], [35.2, 82.0], [35.3, 82.0], [35.4, 82.0], [35.5, 82.0], [35.6, 82.0], [35.7, 82.0], [35.8, 82.0], [35.9, 83.0], [36.0, 83.0], [36.1, 83.0], [36.2, 83.0], [36.3, 83.0], [36.4, 83.0], [36.5, 83.0], [36.6, 84.0], [36.7, 84.0], [36.8, 84.0], [36.9, 84.0], [37.0, 84.0], [37.1, 84.0], [37.2, 85.0], [37.3, 85.0], [37.4, 85.0], [37.5, 85.0], [37.6, 85.0], [37.7, 85.0], [37.8, 86.0], [37.9, 86.0], [38.0, 86.0], [38.1, 86.0], [38.2, 86.0], [38.3, 87.0], [38.4, 87.0], [38.5, 87.0], [38.6, 87.0], [38.7, 88.0], [38.8, 88.0], [38.9, 88.0], [39.0, 88.0], [39.1, 89.0], [39.2, 89.0], [39.3, 89.0], [39.4, 89.0], [39.5, 89.0], [39.6, 90.0], [39.7, 90.0], [39.8, 90.0], [39.9, 91.0], [40.0, 91.0], [40.1, 91.0], [40.2, 92.0], [40.3, 92.0], [40.4, 93.0], [40.5, 93.0], [40.6, 93.0], [40.7, 94.0], [40.8, 94.0], [40.9, 95.0], [41.0, 96.0], [41.1, 96.0], [41.2, 97.0], [41.3, 97.0], [41.4, 97.0], [41.5, 97.0], [41.6, 98.0], [41.7, 99.0], [41.8, 99.0], [41.9, 99.0], [42.0, 101.0], [42.1, 101.0], [42.2, 102.0], [42.3, 103.0], [42.4, 103.0], [42.5, 104.0], [42.6, 105.0], [42.7, 106.0], [42.8, 107.0], [42.9, 108.0], [43.0, 109.0], [43.1, 110.0], [43.2, 111.0], [43.3, 112.0], [43.4, 113.0], [43.5, 113.0], [43.6, 113.0], [43.7, 115.0], [43.8, 116.0], [43.9, 117.0], [44.0, 118.0], [44.1, 119.0], [44.2, 120.0], [44.3, 122.0], [44.4, 123.0], [44.5, 124.0], [44.6, 124.0], [44.7, 125.0], [44.8, 126.0], [44.9, 127.0], [45.0, 129.0], [45.1, 130.0], [45.2, 130.0], [45.3, 131.0], [45.4, 131.0], [45.5, 132.0], [45.6, 133.0], [45.7, 134.0], [45.8, 135.0], [45.9, 137.0], [46.0, 138.0], [46.1, 138.0], [46.2, 139.0], [46.3, 140.0], [46.4, 142.0], [46.5, 143.0], [46.6, 143.0], [46.7, 144.0], [46.8, 146.0], [46.9, 146.0], [47.0, 148.0], [47.1, 149.0], [47.2, 149.0], [47.3, 150.0], [47.4, 152.0], [47.5, 152.0], [47.6, 153.0], [47.7, 154.0], [47.8, 155.0], [47.9, 156.0], [48.0, 157.0], [48.1, 158.0], [48.2, 158.0], [48.3, 159.0], [48.4, 160.0], [48.5, 161.0], [48.6, 163.0], [48.7, 163.0], [48.8, 164.0], [48.9, 165.0], [49.0, 166.0], [49.1, 166.0], [49.2, 167.0], [49.3, 168.0], [49.4, 168.0], [49.5, 169.0], [49.6, 171.0], [49.7, 172.0], [49.8, 172.0], [49.9, 174.0], [50.0, 175.0], [50.1, 175.0], [50.2, 176.0], [50.3, 177.0], [50.4, 177.0], [50.5, 179.0], [50.6, 179.0], [50.7, 180.0], [50.8, 181.0], [50.9, 182.0], [51.0, 182.0], [51.1, 183.0], [51.2, 184.0], [51.3, 184.0], [51.4, 185.0], [51.5, 186.0], [51.6, 186.0], [51.7, 187.0], [51.8, 187.0], [51.9, 188.0], [52.0, 189.0], [52.1, 189.0], [52.2, 190.0], [52.3, 191.0], [52.4, 193.0], [52.5, 193.0], [52.6, 194.0], [52.7, 195.0], [52.8, 196.0], [52.9, 197.0], [53.0, 197.0], [53.1, 198.0], [53.2, 199.0], [53.3, 200.0], [53.4, 200.0], [53.5, 201.0], [53.6, 201.0], [53.7, 202.0], [53.8, 203.0], [53.9, 204.0], [54.0, 204.0], [54.1, 205.0], [54.2, 206.0], [54.3, 207.0], [54.4, 207.0], [54.5, 208.0], [54.6, 209.0], [54.7, 209.0], [54.8, 209.0], [54.9, 210.0], [55.0, 211.0], [55.1, 212.0], [55.2, 212.0], [55.3, 214.0], [55.4, 215.0], [55.5, 215.0], [55.6, 216.0], [55.7, 216.0], [55.8, 217.0], [55.9, 218.0], [56.0, 219.0], [56.1, 220.0], [56.2, 221.0], [56.3, 221.0], [56.4, 222.0], [56.5, 222.0], [56.6, 223.0], [56.7, 224.0], [56.8, 224.0], [56.9, 225.0], [57.0, 226.0], [57.1, 226.0], [57.2, 227.0], [57.3, 228.0], [57.4, 230.0], [57.5, 231.0], [57.6, 232.0], [57.7, 234.0], [57.8, 235.0], [57.9, 236.0], [58.0, 237.0], [58.1, 238.0], [58.2, 239.0], [58.3, 239.0], [58.4, 240.0], [58.5, 241.0], [58.6, 242.0], [58.7, 243.0], [58.8, 244.0], [58.9, 245.0], [59.0, 246.0], [59.1, 247.0], [59.2, 247.0], [59.3, 248.0], [59.4, 249.0], [59.5, 250.0], [59.6, 250.0], [59.7, 251.0], [59.8, 253.0], [59.9, 254.0], [60.0, 255.0], [60.1, 256.0], [60.2, 257.0], [60.3, 258.0], [60.4, 258.0], [60.5, 259.0], [60.6, 260.0], [60.7, 261.0], [60.8, 263.0], [60.9, 264.0], [61.0, 265.0], [61.1, 266.0], [61.2, 267.0], [61.3, 267.0], [61.4, 268.0], [61.5, 268.0], [61.6, 269.0], [61.7, 270.0], [61.8, 271.0], [61.9, 273.0], [62.0, 274.0], [62.1, 275.0], [62.2, 276.0], [62.3, 277.0], [62.4, 278.0], [62.5, 279.0], [62.6, 280.0], [62.7, 281.0], [62.8, 282.0], [62.9, 282.0], [63.0, 283.0], [63.1, 285.0], [63.2, 285.0], [63.3, 286.0], [63.4, 287.0], [63.5, 288.0], [63.6, 289.0], [63.7, 291.0], [63.8, 291.0], [63.9, 293.0], [64.0, 294.0], [64.1, 295.0], [64.2, 296.0], [64.3, 297.0], [64.4, 297.0], [64.5, 299.0], [64.6, 300.0], [64.7, 302.0], [64.8, 303.0], [64.9, 304.0], [65.0, 305.0], [65.1, 305.0], [65.2, 307.0], [65.3, 308.0], [65.4, 309.0], [65.5, 312.0], [65.6, 314.0], [65.7, 316.0], [65.8, 317.0], [65.9, 318.0], [66.0, 320.0], [66.1, 322.0], [66.2, 323.0], [66.3, 324.0], [66.4, 325.0], [66.5, 326.0], [66.6, 327.0], [66.7, 328.0], [66.8, 329.0], [66.9, 331.0], [67.0, 332.0], [67.1, 333.0], [67.2, 334.0], [67.3, 335.0], [67.4, 337.0], [67.5, 339.0], [67.6, 340.0], [67.7, 341.0], [67.8, 342.0], [67.9, 343.0], [68.0, 344.0], [68.1, 345.0], [68.2, 347.0], [68.3, 348.0], [68.4, 349.0], [68.5, 350.0], [68.6, 352.0], [68.7, 353.0], [68.8, 354.0], [68.9, 355.0], [69.0, 356.0], [69.1, 358.0], [69.2, 359.0], [69.3, 361.0], [69.4, 363.0], [69.5, 364.0], [69.6, 365.0], [69.7, 366.0], [69.8, 367.0], [69.9, 368.0], [70.0, 369.0], [70.1, 371.0], [70.2, 374.0], [70.3, 376.0], [70.4, 378.0], [70.5, 380.0], [70.6, 381.0], [70.7, 382.0], [70.8, 383.0], [70.9, 384.0], [71.0, 386.0], [71.1, 387.0], [71.2, 390.0], [71.3, 392.0], [71.4, 394.0], [71.5, 396.0], [71.6, 397.0], [71.7, 398.0], [71.8, 399.0], [71.9, 400.0], [72.0, 401.0], [72.1, 402.0], [72.2, 403.0], [72.3, 404.0], [72.4, 406.0], [72.5, 408.0], [72.6, 410.0], [72.7, 412.0], [72.8, 414.0], [72.9, 416.0], [73.0, 417.0], [73.1, 418.0], [73.2, 420.0], [73.3, 422.0], [73.4, 422.0], [73.5, 423.0], [73.6, 426.0], [73.7, 428.0], [73.8, 429.0], [73.9, 430.0], [74.0, 432.0], [74.1, 435.0], [74.2, 436.0], [74.3, 437.0], [74.4, 439.0], [74.5, 441.0], [74.6, 442.0], [74.7, 444.0], [74.8, 446.0], [74.9, 448.0], [75.0, 449.0], [75.1, 450.0], [75.2, 452.0], [75.3, 453.0], [75.4, 455.0], [75.5, 455.0], [75.6, 456.0], [75.7, 458.0], [75.8, 459.0], [75.9, 460.0], [76.0, 461.0], [76.1, 462.0], [76.2, 463.0], [76.3, 466.0], [76.4, 467.0], [76.5, 469.0], [76.6, 470.0], [76.7, 471.0], [76.8, 473.0], [76.9, 476.0], [77.0, 478.0], [77.1, 480.0], [77.2, 481.0], [77.3, 483.0], [77.4, 485.0], [77.5, 486.0], [77.6, 488.0], [77.7, 490.0], [77.8, 491.0], [77.9, 492.0], [78.0, 494.0], [78.1, 495.0], [78.2, 497.0], [78.3, 500.0], [78.4, 503.0], [78.5, 506.0], [78.6, 507.0], [78.7, 509.0], [78.8, 510.0], [78.9, 513.0], [79.0, 515.0], [79.1, 516.0], [79.2, 517.0], [79.3, 518.0], [79.4, 520.0], [79.5, 521.0], [79.6, 523.0], [79.7, 525.0], [79.8, 526.0], [79.9, 527.0], [80.0, 530.0], [80.1, 531.0], [80.2, 534.0], [80.3, 536.0], [80.4, 537.0], [80.5, 537.0], [80.6, 539.0], [80.7, 540.0], [80.8, 544.0], [80.9, 547.0], [81.0, 550.0], [81.1, 552.0], [81.2, 554.0], [81.3, 555.0], [81.4, 556.0], [81.5, 557.0], [81.6, 557.0], [81.7, 560.0], [81.8, 562.0], [81.9, 564.0], [82.0, 565.0], [82.1, 567.0], [82.2, 568.0], [82.3, 571.0], [82.4, 572.0], [82.5, 575.0], [82.6, 576.0], [82.7, 577.0], [82.8, 579.0], [82.9, 581.0], [83.0, 585.0], [83.1, 586.0], [83.2, 588.0], [83.3, 590.0], [83.4, 591.0], [83.5, 593.0], [83.6, 595.0], [83.7, 599.0], [83.8, 599.0], [83.9, 602.0], [84.0, 606.0], [84.1, 608.0], [84.2, 610.0], [84.3, 612.0], [84.4, 615.0], [84.5, 617.0], [84.6, 619.0], [84.7, 622.0], [84.8, 624.0], [84.9, 627.0], [85.0, 627.0], [85.1, 631.0], [85.2, 634.0], [85.3, 638.0], [85.4, 641.0], [85.5, 643.0], [85.6, 646.0], [85.7, 648.0], [85.8, 650.0], [85.9, 652.0], [86.0, 655.0], [86.1, 656.0], [86.2, 658.0], [86.3, 660.0], [86.4, 661.0], [86.5, 664.0], [86.6, 668.0], [86.7, 671.0], [86.8, 672.0], [86.9, 674.0], [87.0, 678.0], [87.1, 681.0], [87.2, 683.0], [87.3, 686.0], [87.4, 688.0], [87.5, 693.0], [87.6, 696.0], [87.7, 699.0], [87.8, 704.0], [87.9, 706.0], [88.0, 708.0], [88.1, 711.0], [88.2, 714.0], [88.3, 716.0], [88.4, 719.0], [88.5, 722.0], [88.6, 726.0], [88.7, 727.0], [88.8, 728.0], [88.9, 731.0], [89.0, 733.0], [89.1, 736.0], [89.2, 739.0], [89.3, 741.0], [89.4, 743.0], [89.5, 746.0], [89.6, 748.0], [89.7, 753.0], [89.8, 756.0], [89.9, 759.0], [90.0, 762.0], [90.1, 767.0], [90.2, 771.0], [90.3, 775.0], [90.4, 777.0], [90.5, 781.0], [90.6, 784.0], [90.7, 787.0], [90.8, 790.0], [90.9, 800.0], [91.0, 803.0], [91.1, 807.0], [91.2, 818.0], [91.3, 821.0], [91.4, 825.0], [91.5, 828.0], [91.6, 831.0], [91.7, 834.0], [91.8, 837.0], [91.9, 845.0], [92.0, 855.0], [92.1, 858.0], [92.2, 862.0], [92.3, 865.0], [92.4, 868.0], [92.5, 871.0], [92.6, 875.0], [92.7, 876.0], [92.8, 887.0], [92.9, 893.0], [93.0, 895.0], [93.1, 898.0], [93.2, 903.0], [93.3, 906.0], [93.4, 909.0], [93.5, 911.0], [93.6, 915.0], [93.7, 921.0], [93.8, 927.0], [93.9, 935.0], [94.0, 941.0], [94.1, 944.0], [94.2, 952.0], [94.3, 957.0], [94.4, 968.0], [94.5, 970.0], [94.6, 972.0], [94.7, 979.0], [94.8, 990.0], [94.9, 1002.0], [95.0, 1009.0], [95.1, 1013.0], [95.2, 1018.0], [95.3, 1026.0], [95.4, 1035.0], [95.5, 1044.0], [95.6, 1050.0], [95.7, 1057.0], [95.8, 1066.0], [95.9, 1070.0], [96.0, 1076.0], [96.1, 1085.0], [96.2, 1098.0], [96.3, 1107.0], [96.4, 1112.0], [96.5, 1117.0], [96.6, 1128.0], [96.7, 1134.0], [96.8, 1151.0], [96.9, 1158.0], [97.0, 1169.0], [97.1, 1184.0], [97.2, 1195.0], [97.3, 1216.0], [97.4, 1237.0], [97.5, 1255.0], [97.6, 1267.0], [97.7, 1282.0], [97.8, 1290.0], [97.9, 1298.0], [98.0, 1316.0], [98.1, 1344.0], [98.2, 1363.0], [98.3, 1379.0], [98.4, 1399.0], [98.5, 1425.0], [98.6, 1445.0], [98.7, 1470.0], [98.8, 1509.0], [98.9, 1535.0], [99.0, 1556.0], [99.1, 1574.0], [99.2, 1598.0], [99.3, 1741.0], [99.4, 1838.0], [99.5, 1979.0], [99.6, 2012.0], [99.7, 2115.0], [99.8, 2182.0], [99.9, 2424.0], [100.0, 3395.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 2205.0, "series": [{"data": [[0.0, 2205.0], [600.0, 205.0], [700.0, 168.0], [800.0, 117.0], [900.0, 93.0], [1000.0, 70.0], [1100.0, 54.0], [1200.0, 36.0], [1300.0, 25.0], [1400.0, 18.0], [1500.0, 24.0], [100.0, 596.0], [1600.0, 3.0], [1700.0, 4.0], [1800.0, 4.0], [1900.0, 9.0], [2000.0, 6.0], [2100.0, 6.0], [2300.0, 1.0], [2200.0, 2.0], [2400.0, 2.0], [2500.0, 1.0], [3000.0, 1.0], [3100.0, 1.0], [200.0, 596.0], [3200.0, 1.0], [3300.0, 1.0], [300.0, 386.0], [400.0, 336.0], [500.0, 291.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3300.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 66.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 4122.0, "series": [{"data": [[0.0, 4122.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1074.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 66.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.910714285714285, "minX": 1.6026312E12, "maxY": 10.0, "series": [{"data": [[1.60263138E12, 9.910714285714285], [1.6026312E12, 9.964125560538116], [1.60263126E12, 10.0], [1.60263132E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60263138E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 305.6218070911168, "minX": 1.0, "maxY": 3395.0, "series": [{"data": [[8.0, 1269.5], [4.0, 2045.0], [2.0, 3240.0], [1.0, 3395.0], [9.0, 659.0], [5.0, 1094.3333333333335], [10.0, 305.6218070911168], [3.0, 1172.5], [6.0, 1050.0], [7.0, 1174.5]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.98688711516533, 308.9158114785267]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 4434.7, "minX": 1.6026312E12, "maxY": 1711960.35, "series": [{"data": [[1.60263138E12, 503296.68333333335], [1.6026312E12, 426519.1666666667], [1.60263126E12, 1711960.35], [1.60263132E12, 1608963.7333333334]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60263138E12, 4434.7], [1.6026312E12, 5725.116666666667], [1.60263126E12, 16135.066666666668], [1.60263132E12, 19196.066666666666]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60263138E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 273.270196257417, "minX": 1.6026312E12, "maxY": 439.55555555555543, "series": [{"data": [[1.60263138E12, 439.55555555555543], [1.6026312E12, 308.1629297458891], [1.60263126E12, 315.6390937829287], [1.60263132E12, 273.270196257417]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60263138E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 272.9137380191703, "minX": 1.6026312E12, "maxY": 439.1111111111109, "series": [{"data": [[1.60263138E12, 439.1111111111109], [1.6026312E12, 307.7772795216742], [1.60263126E12, 315.1612223393047], [1.60263132E12, 272.9137380191703]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60263138E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0059523809523809555, "minX": 1.6026312E12, "maxY": 0.14798206278026899, "series": [{"data": [[1.60263138E12, 0.0059523809523809555], [1.6026312E12, 0.14798206278026899], [1.60263126E12, 0.010010537407797714], [1.60263132E12, 0.010041077133728923]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60263138E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 31.0, "minX": 1.6026312E12, "maxY": 3395.0, "series": [{"data": [[1.60263138E12, 3395.0], [1.6026312E12, 1290.0], [1.60263126E12, 2536.0], [1.60263132E12, 2161.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60263138E12, 33.0], [1.6026312E12, 39.02999984025955], [1.60263126E12, 34.0], [1.60263132E12, 34.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60263138E12, 33.0], [1.6026312E12, 39.633000063896176], [1.60263126E12, 34.0], [1.60263132E12, 34.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60263138E12, 33.0], [1.6026312E12, 39.364999920129776], [1.60263126E12, 34.0], [1.60263132E12, 34.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60263138E12, 31.0], [1.6026312E12, 37.0], [1.60263126E12, 31.0], [1.60263132E12, 31.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60263138E12, 249.0], [1.6026312E12, 216.0], [1.60263126E12, 167.0], [1.60263132E12, 163.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60263138E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 47.0, "minX": 1.0, "maxY": 3395.0, "series": [{"data": [[3.0, 1094.0], [4.0, 2295.5], [5.0, 1181.5], [6.0, 1115.0], [7.0, 1422.0], [8.0, 782.0], [9.0, 839.5], [11.0, 684.0], [12.0, 737.5], [13.0, 718.0], [14.0, 680.5], [15.0, 532.5], [16.0, 497.0], [17.0, 466.0], [18.0, 491.5], [19.0, 375.0], [20.0, 402.0], [21.0, 383.0], [22.0, 435.5], [23.0, 309.0], [24.0, 348.0], [25.0, 300.0], [26.0, 398.5], [27.0, 264.0], [28.0, 262.5], [29.0, 47.0], [30.0, 219.0], [31.0, 239.0], [33.0, 141.5], [32.0, 104.0], [35.0, 221.5], [34.0, 210.0], [37.0, 102.0], [36.0, 156.5], [38.0, 230.0], [39.0, 237.0], [40.0, 79.0], [41.0, 206.0], [42.0, 190.0], [45.0, 73.0], [44.0, 103.0], [47.0, 73.5], [49.0, 76.0], [50.0, 78.0], [51.0, 171.5], [52.0, 146.5], [55.0, 83.0], [56.0, 101.5], [59.0, 103.0], [58.0, 137.5], [61.0, 78.0], [62.0, 55.0], [67.0, 82.0], [64.0, 141.0], [69.0, 85.0], [75.0, 84.0], [78.0, 65.0], [77.0, 93.0], [83.0, 83.0], [86.0, 80.0], [1.0, 3395.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 86.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 47.0, "minX": 1.0, "maxY": 3395.0, "series": [{"data": [[3.0, 1092.0], [4.0, 2294.0], [5.0, 1180.5], [6.0, 1114.0], [7.0, 1421.0], [8.0, 780.0], [9.0, 836.5], [11.0, 683.5], [12.0, 734.5], [13.0, 716.0], [14.0, 680.5], [15.0, 531.0], [16.0, 497.0], [17.0, 464.0], [18.0, 490.5], [19.0, 375.0], [20.0, 401.5], [21.0, 383.0], [22.0, 435.0], [23.0, 309.0], [24.0, 347.0], [25.0, 298.0], [26.0, 398.5], [27.0, 262.0], [28.0, 262.0], [29.0, 47.0], [30.0, 218.5], [31.0, 238.5], [33.0, 141.5], [32.0, 104.0], [35.0, 221.5], [34.0, 210.0], [37.0, 102.0], [36.0, 156.0], [38.0, 230.0], [39.0, 237.0], [40.0, 79.0], [41.0, 206.0], [42.0, 190.0], [45.0, 73.0], [44.0, 103.0], [47.0, 73.5], [49.0, 76.0], [50.0, 78.0], [51.0, 171.0], [52.0, 146.0], [55.0, 83.0], [56.0, 101.5], [59.0, 102.0], [58.0, 137.5], [61.0, 78.0], [62.0, 55.0], [67.0, 82.0], [64.0, 141.0], [69.0, 85.0], [75.0, 84.0], [78.0, 65.0], [77.0, 93.0], [83.0, 83.0], [86.0, 80.0], [1.0, 3395.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 86.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 8.233333333333333, "minX": 1.6026312E12, "maxY": 36.516666666666666, "series": [{"data": [[1.60263138E12, 8.233333333333333], [1.6026312E12, 11.316666666666666], [1.60263126E12, 31.633333333333333], [1.60263132E12, 36.516666666666666]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60263138E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 8.4, "minX": 1.6026312E12, "maxY": 36.516666666666666, "series": [{"data": [[1.60263138E12, 8.4], [1.6026312E12, 11.15], [1.60263126E12, 31.633333333333333], [1.60263132E12, 36.516666666666666]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60263138E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 8.4, "minX": 1.6026312E12, "maxY": 36.516666666666666, "series": [{"data": [[1.60263138E12, 8.4], [1.6026312E12, 11.15], [1.60263126E12, 31.633333333333333], [1.60263132E12, 36.516666666666666]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60263138E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 8.4, "minX": 1.6026312E12, "maxY": 36.516666666666666, "series": [{"data": [[1.60263138E12, 8.4], [1.6026312E12, 11.15], [1.60263126E12, 31.633333333333333], [1.60263132E12, 36.516666666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60263138E12, "title": "Total Transactions Per Second"}},
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

