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
        data: {"result": {"minY": 32.0, "minX": 0.0, "maxY": 3864.0, "series": [{"data": [[0.0, 32.0], [0.1, 37.0], [0.2, 38.0], [0.3, 39.0], [0.4, 40.0], [0.5, 41.0], [0.6, 42.0], [0.7, 42.0], [0.8, 43.0], [0.9, 43.0], [1.0, 43.0], [1.1, 43.0], [1.2, 44.0], [1.3, 44.0], [1.4, 44.0], [1.5, 44.0], [1.6, 44.0], [1.7, 44.0], [1.8, 44.0], [1.9, 44.0], [2.0, 45.0], [2.1, 45.0], [2.2, 45.0], [2.3, 45.0], [2.4, 45.0], [2.5, 45.0], [2.6, 45.0], [2.7, 45.0], [2.8, 45.0], [2.9, 45.0], [3.0, 46.0], [3.1, 46.0], [3.2, 46.0], [3.3, 46.0], [3.4, 46.0], [3.5, 46.0], [3.6, 46.0], [3.7, 46.0], [3.8, 46.0], [3.9, 46.0], [4.0, 47.0], [4.1, 47.0], [4.2, 47.0], [4.3, 47.0], [4.4, 47.0], [4.5, 47.0], [4.6, 47.0], [4.7, 47.0], [4.8, 47.0], [4.9, 47.0], [5.0, 47.0], [5.1, 48.0], [5.2, 48.0], [5.3, 48.0], [5.4, 48.0], [5.5, 48.0], [5.6, 48.0], [5.7, 48.0], [5.8, 48.0], [5.9, 48.0], [6.0, 48.0], [6.1, 48.0], [6.2, 48.0], [6.3, 48.0], [6.4, 48.0], [6.5, 49.0], [6.6, 49.0], [6.7, 49.0], [6.8, 49.0], [6.9, 49.0], [7.0, 49.0], [7.1, 49.0], [7.2, 49.0], [7.3, 49.0], [7.4, 49.0], [7.5, 49.0], [7.6, 49.0], [7.7, 49.0], [7.8, 49.0], [7.9, 49.0], [8.0, 49.0], [8.1, 49.0], [8.2, 50.0], [8.3, 50.0], [8.4, 50.0], [8.5, 50.0], [8.6, 50.0], [8.7, 50.0], [8.8, 50.0], [8.9, 50.0], [9.0, 50.0], [9.1, 50.0], [9.2, 50.0], [9.3, 50.0], [9.4, 50.0], [9.5, 51.0], [9.6, 51.0], [9.7, 51.0], [9.8, 51.0], [9.9, 51.0], [10.0, 51.0], [10.1, 51.0], [10.2, 51.0], [10.3, 51.0], [10.4, 51.0], [10.5, 51.0], [10.6, 51.0], [10.7, 51.0], [10.8, 51.0], [10.9, 51.0], [11.0, 51.0], [11.1, 51.0], [11.2, 51.0], [11.3, 51.0], [11.4, 52.0], [11.5, 52.0], [11.6, 52.0], [11.7, 52.0], [11.8, 52.0], [11.9, 52.0], [12.0, 52.0], [12.1, 52.0], [12.2, 52.0], [12.3, 52.0], [12.4, 52.0], [12.5, 52.0], [12.6, 52.0], [12.7, 52.0], [12.8, 52.0], [12.9, 52.0], [13.0, 53.0], [13.1, 53.0], [13.2, 53.0], [13.3, 53.0], [13.4, 53.0], [13.5, 53.0], [13.6, 53.0], [13.7, 53.0], [13.8, 53.0], [13.9, 53.0], [14.0, 53.0], [14.1, 53.0], [14.2, 53.0], [14.3, 53.0], [14.4, 53.0], [14.5, 54.0], [14.6, 54.0], [14.7, 54.0], [14.8, 54.0], [14.9, 54.0], [15.0, 54.0], [15.1, 54.0], [15.2, 54.0], [15.3, 54.0], [15.4, 54.0], [15.5, 54.0], [15.6, 55.0], [15.7, 55.0], [15.8, 55.0], [15.9, 55.0], [16.0, 55.0], [16.1, 55.0], [16.2, 55.0], [16.3, 55.0], [16.4, 55.0], [16.5, 55.0], [16.6, 55.0], [16.7, 55.0], [16.8, 55.0], [16.9, 56.0], [17.0, 56.0], [17.1, 56.0], [17.2, 56.0], [17.3, 56.0], [17.4, 56.0], [17.5, 56.0], [17.6, 56.0], [17.7, 56.0], [17.8, 56.0], [17.9, 57.0], [18.0, 57.0], [18.1, 57.0], [18.2, 57.0], [18.3, 57.0], [18.4, 57.0], [18.5, 57.0], [18.6, 57.0], [18.7, 58.0], [18.8, 58.0], [18.9, 58.0], [19.0, 58.0], [19.1, 58.0], [19.2, 58.0], [19.3, 58.0], [19.4, 59.0], [19.5, 59.0], [19.6, 59.0], [19.7, 59.0], [19.8, 59.0], [19.9, 59.0], [20.0, 59.0], [20.1, 60.0], [20.2, 60.0], [20.3, 60.0], [20.4, 60.0], [20.5, 60.0], [20.6, 60.0], [20.7, 61.0], [20.8, 61.0], [20.9, 61.0], [21.0, 61.0], [21.1, 62.0], [21.2, 62.0], [21.3, 62.0], [21.4, 62.0], [21.5, 62.0], [21.6, 62.0], [21.7, 62.0], [21.8, 63.0], [21.9, 63.0], [22.0, 63.0], [22.1, 64.0], [22.2, 64.0], [22.3, 64.0], [22.4, 64.0], [22.5, 65.0], [22.6, 65.0], [22.7, 65.0], [22.8, 65.0], [22.9, 65.0], [23.0, 66.0], [23.1, 66.0], [23.2, 66.0], [23.3, 66.0], [23.4, 67.0], [23.5, 67.0], [23.6, 67.0], [23.7, 67.0], [23.8, 67.0], [23.9, 67.0], [24.0, 68.0], [24.1, 68.0], [24.2, 68.0], [24.3, 68.0], [24.4, 68.0], [24.5, 69.0], [24.6, 69.0], [24.7, 69.0], [24.8, 69.0], [24.9, 70.0], [25.0, 70.0], [25.1, 70.0], [25.2, 70.0], [25.3, 71.0], [25.4, 71.0], [25.5, 71.0], [25.6, 71.0], [25.7, 72.0], [25.8, 72.0], [25.9, 72.0], [26.0, 72.0], [26.1, 72.0], [26.2, 72.0], [26.3, 72.0], [26.4, 73.0], [26.5, 73.0], [26.6, 73.0], [26.7, 73.0], [26.8, 74.0], [26.9, 74.0], [27.0, 74.0], [27.1, 74.0], [27.2, 74.0], [27.3, 75.0], [27.4, 75.0], [27.5, 75.0], [27.6, 75.0], [27.7, 76.0], [27.8, 76.0], [27.9, 76.0], [28.0, 77.0], [28.1, 77.0], [28.2, 77.0], [28.3, 77.0], [28.4, 77.0], [28.5, 78.0], [28.6, 78.0], [28.7, 78.0], [28.8, 79.0], [28.9, 79.0], [29.0, 79.0], [29.1, 79.0], [29.2, 80.0], [29.3, 80.0], [29.4, 80.0], [29.5, 80.0], [29.6, 81.0], [29.7, 81.0], [29.8, 81.0], [29.9, 81.0], [30.0, 81.0], [30.1, 82.0], [30.2, 82.0], [30.3, 82.0], [30.4, 83.0], [30.5, 83.0], [30.6, 83.0], [30.7, 83.0], [30.8, 83.0], [30.9, 84.0], [31.0, 84.0], [31.1, 84.0], [31.2, 84.0], [31.3, 85.0], [31.4, 85.0], [31.5, 85.0], [31.6, 85.0], [31.7, 86.0], [31.8, 86.0], [31.9, 86.0], [32.0, 86.0], [32.1, 87.0], [32.2, 87.0], [32.3, 87.0], [32.4, 87.0], [32.5, 87.0], [32.6, 88.0], [32.7, 88.0], [32.8, 88.0], [32.9, 88.0], [33.0, 89.0], [33.1, 89.0], [33.2, 89.0], [33.3, 89.0], [33.4, 89.0], [33.5, 90.0], [33.6, 90.0], [33.7, 90.0], [33.8, 90.0], [33.9, 91.0], [34.0, 92.0], [34.1, 92.0], [34.2, 92.0], [34.3, 92.0], [34.4, 93.0], [34.5, 93.0], [34.6, 93.0], [34.7, 93.0], [34.8, 93.0], [34.9, 94.0], [35.0, 94.0], [35.1, 95.0], [35.2, 95.0], [35.3, 95.0], [35.4, 95.0], [35.5, 96.0], [35.6, 96.0], [35.7, 96.0], [35.8, 96.0], [35.9, 97.0], [36.0, 97.0], [36.1, 97.0], [36.2, 98.0], [36.3, 98.0], [36.4, 98.0], [36.5, 99.0], [36.6, 99.0], [36.7, 99.0], [36.8, 99.0], [36.9, 100.0], [37.0, 100.0], [37.1, 101.0], [37.2, 101.0], [37.3, 101.0], [37.4, 102.0], [37.5, 103.0], [37.6, 103.0], [37.7, 103.0], [37.8, 104.0], [37.9, 104.0], [38.0, 105.0], [38.1, 105.0], [38.2, 106.0], [38.3, 106.0], [38.4, 106.0], [38.5, 107.0], [38.6, 108.0], [38.7, 109.0], [38.8, 109.0], [38.9, 110.0], [39.0, 111.0], [39.1, 111.0], [39.2, 112.0], [39.3, 112.0], [39.4, 113.0], [39.5, 114.0], [39.6, 114.0], [39.7, 115.0], [39.8, 116.0], [39.9, 117.0], [40.0, 118.0], [40.1, 118.0], [40.2, 119.0], [40.3, 119.0], [40.4, 120.0], [40.5, 121.0], [40.6, 121.0], [40.7, 122.0], [40.8, 123.0], [40.9, 124.0], [41.0, 125.0], [41.1, 126.0], [41.2, 126.0], [41.3, 127.0], [41.4, 128.0], [41.5, 128.0], [41.6, 128.0], [41.7, 129.0], [41.8, 130.0], [41.9, 131.0], [42.0, 131.0], [42.1, 131.0], [42.2, 132.0], [42.3, 132.0], [42.4, 133.0], [42.5, 134.0], [42.6, 134.0], [42.7, 135.0], [42.8, 135.0], [42.9, 136.0], [43.0, 137.0], [43.1, 137.0], [43.2, 138.0], [43.3, 139.0], [43.4, 140.0], [43.5, 141.0], [43.6, 142.0], [43.7, 143.0], [43.8, 144.0], [43.9, 145.0], [44.0, 145.0], [44.1, 146.0], [44.2, 147.0], [44.3, 147.0], [44.4, 149.0], [44.5, 151.0], [44.6, 152.0], [44.7, 153.0], [44.8, 154.0], [44.9, 155.0], [45.0, 155.0], [45.1, 156.0], [45.2, 157.0], [45.3, 158.0], [45.4, 158.0], [45.5, 159.0], [45.6, 160.0], [45.7, 160.0], [45.8, 161.0], [45.9, 162.0], [46.0, 163.0], [46.1, 164.0], [46.2, 165.0], [46.3, 165.0], [46.4, 167.0], [46.5, 168.0], [46.6, 169.0], [46.7, 169.0], [46.8, 171.0], [46.9, 171.0], [47.0, 172.0], [47.1, 173.0], [47.2, 174.0], [47.3, 175.0], [47.4, 176.0], [47.5, 177.0], [47.6, 178.0], [47.7, 179.0], [47.8, 180.0], [47.9, 180.0], [48.0, 182.0], [48.1, 183.0], [48.2, 184.0], [48.3, 184.0], [48.4, 185.0], [48.5, 186.0], [48.6, 187.0], [48.7, 188.0], [48.8, 189.0], [48.9, 189.0], [49.0, 190.0], [49.1, 191.0], [49.2, 192.0], [49.3, 193.0], [49.4, 194.0], [49.5, 195.0], [49.6, 196.0], [49.7, 197.0], [49.8, 197.0], [49.9, 198.0], [50.0, 199.0], [50.1, 199.0], [50.2, 200.0], [50.3, 200.0], [50.4, 201.0], [50.5, 202.0], [50.6, 204.0], [50.7, 205.0], [50.8, 205.0], [50.9, 206.0], [51.0, 206.0], [51.1, 206.0], [51.2, 207.0], [51.3, 207.0], [51.4, 208.0], [51.5, 208.0], [51.6, 208.0], [51.7, 209.0], [51.8, 210.0], [51.9, 211.0], [52.0, 211.0], [52.1, 212.0], [52.2, 213.0], [52.3, 214.0], [52.4, 215.0], [52.5, 215.0], [52.6, 217.0], [52.7, 217.0], [52.8, 218.0], [52.9, 219.0], [53.0, 220.0], [53.1, 221.0], [53.2, 221.0], [53.3, 222.0], [53.4, 223.0], [53.5, 223.0], [53.6, 224.0], [53.7, 225.0], [53.8, 226.0], [53.9, 227.0], [54.0, 228.0], [54.1, 229.0], [54.2, 229.0], [54.3, 230.0], [54.4, 231.0], [54.5, 232.0], [54.6, 233.0], [54.7, 234.0], [54.8, 235.0], [54.9, 236.0], [55.0, 237.0], [55.1, 237.0], [55.2, 239.0], [55.3, 240.0], [55.4, 242.0], [55.5, 243.0], [55.6, 245.0], [55.7, 246.0], [55.8, 246.0], [55.9, 247.0], [56.0, 247.0], [56.1, 247.0], [56.2, 249.0], [56.3, 250.0], [56.4, 250.0], [56.5, 252.0], [56.6, 252.0], [56.7, 253.0], [56.8, 254.0], [56.9, 255.0], [57.0, 256.0], [57.1, 256.0], [57.2, 257.0], [57.3, 257.0], [57.4, 258.0], [57.5, 259.0], [57.6, 260.0], [57.7, 261.0], [57.8, 261.0], [57.9, 263.0], [58.0, 263.0], [58.1, 265.0], [58.2, 266.0], [58.3, 266.0], [58.4, 266.0], [58.5, 267.0], [58.6, 268.0], [58.7, 269.0], [58.8, 271.0], [58.9, 271.0], [59.0, 272.0], [59.1, 272.0], [59.2, 273.0], [59.3, 274.0], [59.4, 274.0], [59.5, 275.0], [59.6, 276.0], [59.7, 276.0], [59.8, 277.0], [59.9, 278.0], [60.0, 279.0], [60.1, 280.0], [60.2, 280.0], [60.3, 282.0], [60.4, 283.0], [60.5, 284.0], [60.6, 285.0], [60.7, 286.0], [60.8, 287.0], [60.9, 288.0], [61.0, 288.0], [61.1, 289.0], [61.2, 291.0], [61.3, 292.0], [61.4, 293.0], [61.5, 294.0], [61.6, 295.0], [61.7, 296.0], [61.8, 296.0], [61.9, 298.0], [62.0, 299.0], [62.1, 300.0], [62.2, 301.0], [62.3, 302.0], [62.4, 303.0], [62.5, 303.0], [62.6, 305.0], [62.7, 306.0], [62.8, 307.0], [62.9, 308.0], [63.0, 310.0], [63.1, 311.0], [63.2, 312.0], [63.3, 314.0], [63.4, 316.0], [63.5, 317.0], [63.6, 318.0], [63.7, 321.0], [63.8, 322.0], [63.9, 323.0], [64.0, 324.0], [64.1, 325.0], [64.2, 326.0], [64.3, 327.0], [64.4, 328.0], [64.5, 329.0], [64.6, 331.0], [64.7, 332.0], [64.8, 334.0], [64.9, 334.0], [65.0, 335.0], [65.1, 336.0], [65.2, 337.0], [65.3, 338.0], [65.4, 339.0], [65.5, 341.0], [65.6, 342.0], [65.7, 343.0], [65.8, 345.0], [65.9, 346.0], [66.0, 346.0], [66.1, 348.0], [66.2, 349.0], [66.3, 350.0], [66.4, 351.0], [66.5, 353.0], [66.6, 354.0], [66.7, 355.0], [66.8, 356.0], [66.9, 357.0], [67.0, 359.0], [67.1, 360.0], [67.2, 361.0], [67.3, 362.0], [67.4, 364.0], [67.5, 365.0], [67.6, 366.0], [67.7, 367.0], [67.8, 369.0], [67.9, 371.0], [68.0, 372.0], [68.1, 375.0], [68.2, 376.0], [68.3, 378.0], [68.4, 379.0], [68.5, 380.0], [68.6, 381.0], [68.7, 382.0], [68.8, 385.0], [68.9, 385.0], [69.0, 386.0], [69.1, 388.0], [69.2, 389.0], [69.3, 390.0], [69.4, 391.0], [69.5, 393.0], [69.6, 393.0], [69.7, 394.0], [69.8, 395.0], [69.9, 397.0], [70.0, 399.0], [70.1, 401.0], [70.2, 403.0], [70.3, 404.0], [70.4, 405.0], [70.5, 408.0], [70.6, 410.0], [70.7, 411.0], [70.8, 414.0], [70.9, 415.0], [71.0, 416.0], [71.1, 417.0], [71.2, 419.0], [71.3, 421.0], [71.4, 423.0], [71.5, 425.0], [71.6, 426.0], [71.7, 428.0], [71.8, 430.0], [71.9, 433.0], [72.0, 434.0], [72.1, 436.0], [72.2, 437.0], [72.3, 437.0], [72.4, 439.0], [72.5, 441.0], [72.6, 442.0], [72.7, 443.0], [72.8, 444.0], [72.9, 447.0], [73.0, 448.0], [73.1, 449.0], [73.2, 450.0], [73.3, 452.0], [73.4, 452.0], [73.5, 453.0], [73.6, 455.0], [73.7, 456.0], [73.8, 457.0], [73.9, 458.0], [74.0, 459.0], [74.1, 461.0], [74.2, 463.0], [74.3, 464.0], [74.4, 465.0], [74.5, 468.0], [74.6, 470.0], [74.7, 473.0], [74.8, 474.0], [74.9, 476.0], [75.0, 479.0], [75.1, 481.0], [75.2, 484.0], [75.3, 487.0], [75.4, 488.0], [75.5, 489.0], [75.6, 491.0], [75.7, 492.0], [75.8, 493.0], [75.9, 496.0], [76.0, 498.0], [76.1, 499.0], [76.2, 504.0], [76.3, 506.0], [76.4, 507.0], [76.5, 510.0], [76.6, 513.0], [76.7, 513.0], [76.8, 516.0], [76.9, 518.0], [77.0, 520.0], [77.1, 522.0], [77.2, 524.0], [77.3, 526.0], [77.4, 529.0], [77.5, 531.0], [77.6, 533.0], [77.7, 535.0], [77.8, 537.0], [77.9, 541.0], [78.0, 544.0], [78.1, 546.0], [78.2, 548.0], [78.3, 550.0], [78.4, 551.0], [78.5, 556.0], [78.6, 558.0], [78.7, 560.0], [78.8, 563.0], [78.9, 565.0], [79.0, 566.0], [79.1, 569.0], [79.2, 570.0], [79.3, 573.0], [79.4, 579.0], [79.5, 583.0], [79.6, 584.0], [79.7, 585.0], [79.8, 587.0], [79.9, 589.0], [80.0, 591.0], [80.1, 593.0], [80.2, 594.0], [80.3, 596.0], [80.4, 598.0], [80.5, 600.0], [80.6, 603.0], [80.7, 603.0], [80.8, 605.0], [80.9, 607.0], [81.0, 608.0], [81.1, 610.0], [81.2, 613.0], [81.3, 615.0], [81.4, 616.0], [81.5, 617.0], [81.6, 620.0], [81.7, 623.0], [81.8, 625.0], [81.9, 627.0], [82.0, 629.0], [82.1, 632.0], [82.2, 634.0], [82.3, 637.0], [82.4, 640.0], [82.5, 641.0], [82.6, 645.0], [82.7, 646.0], [82.8, 648.0], [82.9, 650.0], [83.0, 651.0], [83.1, 655.0], [83.2, 656.0], [83.3, 660.0], [83.4, 662.0], [83.5, 665.0], [83.6, 667.0], [83.7, 670.0], [83.8, 672.0], [83.9, 675.0], [84.0, 679.0], [84.1, 682.0], [84.2, 685.0], [84.3, 690.0], [84.4, 693.0], [84.5, 697.0], [84.6, 698.0], [84.7, 702.0], [84.8, 704.0], [84.9, 707.0], [85.0, 710.0], [85.1, 714.0], [85.2, 716.0], [85.3, 720.0], [85.4, 722.0], [85.5, 728.0], [85.6, 731.0], [85.7, 734.0], [85.8, 736.0], [85.9, 740.0], [86.0, 742.0], [86.1, 744.0], [86.2, 748.0], [86.3, 751.0], [86.4, 756.0], [86.5, 759.0], [86.6, 762.0], [86.7, 767.0], [86.8, 772.0], [86.9, 774.0], [87.0, 776.0], [87.1, 778.0], [87.2, 782.0], [87.3, 784.0], [87.4, 791.0], [87.5, 795.0], [87.6, 803.0], [87.7, 808.0], [87.8, 812.0], [87.9, 816.0], [88.0, 821.0], [88.1, 824.0], [88.2, 828.0], [88.3, 832.0], [88.4, 836.0], [88.5, 839.0], [88.6, 842.0], [88.7, 846.0], [88.8, 850.0], [88.9, 857.0], [89.0, 861.0], [89.1, 867.0], [89.2, 873.0], [89.3, 875.0], [89.4, 881.0], [89.5, 889.0], [89.6, 892.0], [89.7, 895.0], [89.8, 901.0], [89.9, 906.0], [90.0, 912.0], [90.1, 919.0], [90.2, 922.0], [90.3, 928.0], [90.4, 932.0], [90.5, 939.0], [90.6, 941.0], [90.7, 945.0], [90.8, 948.0], [90.9, 954.0], [91.0, 958.0], [91.1, 962.0], [91.2, 970.0], [91.3, 978.0], [91.4, 983.0], [91.5, 989.0], [91.6, 994.0], [91.7, 999.0], [91.8, 1006.0], [91.9, 1009.0], [92.0, 1016.0], [92.1, 1022.0], [92.2, 1033.0], [92.3, 1035.0], [92.4, 1040.0], [92.5, 1049.0], [92.6, 1055.0], [92.7, 1062.0], [92.8, 1074.0], [92.9, 1079.0], [93.0, 1086.0], [93.1, 1087.0], [93.2, 1093.0], [93.3, 1100.0], [93.4, 1108.0], [93.5, 1112.0], [93.6, 1119.0], [93.7, 1124.0], [93.8, 1129.0], [93.9, 1138.0], [94.0, 1155.0], [94.1, 1166.0], [94.2, 1175.0], [94.3, 1186.0], [94.4, 1189.0], [94.5, 1200.0], [94.6, 1212.0], [94.7, 1227.0], [94.8, 1241.0], [94.9, 1246.0], [95.0, 1253.0], [95.1, 1259.0], [95.2, 1270.0], [95.3, 1286.0], [95.4, 1293.0], [95.5, 1315.0], [95.6, 1331.0], [95.7, 1355.0], [95.8, 1366.0], [95.9, 1374.0], [96.0, 1393.0], [96.1, 1417.0], [96.2, 1438.0], [96.3, 1453.0], [96.4, 1461.0], [96.5, 1471.0], [96.6, 1490.0], [96.7, 1505.0], [96.8, 1523.0], [96.9, 1544.0], [97.0, 1566.0], [97.1, 1605.0], [97.2, 1631.0], [97.3, 1650.0], [97.4, 1670.0], [97.5, 1693.0], [97.6, 1717.0], [97.7, 1745.0], [97.8, 1773.0], [97.9, 1814.0], [98.0, 1861.0], [98.1, 1883.0], [98.2, 1921.0], [98.3, 1970.0], [98.4, 1995.0], [98.5, 2062.0], [98.6, 2092.0], [98.7, 2116.0], [98.8, 2143.0], [98.9, 2199.0], [99.0, 2300.0], [99.1, 2322.0], [99.2, 2374.0], [99.3, 2447.0], [99.4, 2536.0], [99.5, 2598.0], [99.6, 2755.0], [99.7, 2889.0], [99.8, 3075.0], [99.9, 3436.0], [100.0, 3864.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 1937.0, "series": [{"data": [[0.0, 1937.0], [600.0, 218.0], [700.0, 154.0], [800.0, 117.0], [900.0, 102.0], [1000.0, 83.0], [1100.0, 63.0], [1200.0, 50.0], [1300.0, 31.0], [1400.0, 34.0], [1500.0, 22.0], [100.0, 704.0], [1600.0, 24.0], [1700.0, 17.0], [1800.0, 16.0], [1900.0, 12.0], [2000.0, 15.0], [2100.0, 12.0], [2200.0, 4.0], [2300.0, 13.0], [2400.0, 5.0], [2500.0, 9.0], [2600.0, 4.0], [2700.0, 3.0], [2800.0, 5.0], [2900.0, 3.0], [3000.0, 2.0], [3100.0, 2.0], [200.0, 625.0], [3200.0, 1.0], [3400.0, 2.0], [3500.0, 2.0], [3600.0, 1.0], [3800.0, 1.0], [300.0, 419.0], [400.0, 321.0], [500.0, 229.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3800.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 174.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 4007.0, "series": [{"data": [[0.0, 4007.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1081.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 174.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.960288808664263, "minX": 1.60387182E12, "maxY": 10.0, "series": [{"data": [[1.60387188E12, 10.0], [1.603872E12, 9.960288808664263], [1.60387182E12, 9.984827586206894], [1.60387194E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.603872E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 363.7363809523819, "minX": 1.0, "maxY": 2338.0, "series": [{"data": [[4.0, 1075.0], [8.0, 2338.0], [2.0, 1660.0], [1.0, 1666.0], [9.0, 1392.5], [10.0, 363.7363809523819], [5.0, 1243.0], [6.0, 958.5], [3.0, 1155.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.989547700494152, 366.1854808057775]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 6382.383333333333, "minX": 1.60387182E12, "maxY": 1323437.0666666667, "series": [{"data": [[1.60387188E12, 1323437.0666666667], [1.603872E12, 1149256.0166666666], [1.60387182E12, 565735.6333333333], [1.60387194E12, 1201282.6]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60387188E12, 13905.316666666668], [1.603872E12, 10060.833333333334], [1.60387182E12, 6382.383333333333], [1.60387194E12, 16370.216666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.603872E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 321.97127659574505, "minX": 1.60387182E12, "maxY": 415.97382671480136, "series": [{"data": [[1.60387188E12, 383.8896061975464], [1.603872E12, 415.97382671480136], [1.60387182E12, 366.9213793103446], [1.60387194E12, 321.97127659574505]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.603872E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 318.8835106382978, "minX": 1.60387182E12, "maxY": 410.44314079422423, "series": [{"data": [[1.60387188E12, 379.2007746933506], [1.603872E12, 410.44314079422423], [1.60387182E12, 362.5200000000002], [1.60387194E12, 318.8835106382978]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.603872E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.5803249097472929, "minX": 1.60387182E12, "maxY": 1.0482758620689643, "series": [{"data": [[1.60387188E12, 0.6223369916074888], [1.603872E12, 0.5803249097472929], [1.60387182E12, 1.0482758620689643], [1.60387194E12, 0.6042553191489358]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.603872E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 32.0, "minX": 1.60387182E12, "maxY": 3864.0, "series": [{"data": [[1.60387188E12, 3864.0], [1.603872E12, 3451.0], [1.60387182E12, 1752.0], [1.60387194E12, 3591.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60387188E12, 42.9499996304512], [1.603872E12, 42.0], [1.60387182E12, 42.533999826908115], [1.60387194E12, 43.92899955153465]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60387188E12, 43.0], [1.603872E12, 42.0], [1.60387182E12, 43.18740006923676], [1.60387194E12, 44.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60387188E12, 43.0], [1.603872E12, 42.0], [1.60387182E12, 42.89699991345405], [1.60387194E12, 44.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60387188E12, 38.0], [1.603872E12, 32.0], [1.60387182E12, 36.0], [1.60387194E12, 36.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60387188E12, 185.0], [1.603872E12, 228.0], [1.60387182E12, 261.0], [1.60387194E12, 164.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.603872E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 58.5, "minX": 2.0, "maxY": 1864.0, "series": [{"data": [[2.0, 114.0], [3.0, 1864.0], [4.0, 1102.5], [5.0, 771.5], [6.0, 1291.0], [7.0, 431.0], [8.0, 1220.0], [9.0, 1028.0], [10.0, 623.0], [11.0, 387.5], [12.0, 725.5], [13.0, 562.5], [14.0, 480.5], [15.0, 566.0], [16.0, 357.5], [17.0, 490.5], [18.0, 375.5], [19.0, 437.0], [20.0, 457.5], [21.0, 437.0], [22.0, 375.5], [23.0, 345.0], [24.0, 329.0], [25.0, 194.0], [26.0, 307.5], [27.0, 286.5], [28.0, 196.5], [29.0, 263.0], [30.0, 93.0], [31.0, 108.0], [32.0, 284.0], [33.0, 302.0], [34.0, 135.0], [35.0, 104.0], [37.0, 143.5], [36.0, 184.0], [39.0, 222.5], [38.0, 204.0], [41.0, 184.0], [40.0, 67.5], [42.0, 110.5], [43.0, 134.0], [45.0, 94.5], [44.0, 92.0], [46.0, 101.5], [49.0, 131.0], [51.0, 77.0], [50.0, 78.5], [53.0, 82.0], [52.0, 181.5], [55.0, 123.0], [57.0, 183.0], [56.0, 131.0], [59.0, 139.0], [60.0, 85.5], [63.0, 72.0], [64.0, 96.5], [65.0, 72.0], [67.0, 98.0], [68.0, 115.5], [69.0, 109.0], [73.0, 129.0], [75.0, 71.0], [77.0, 84.0], [86.0, 86.5], [92.0, 58.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 92.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 58.5, "minX": 2.0, "maxY": 1864.0, "series": [{"data": [[2.0, 112.0], [3.0, 1864.0], [4.0, 1081.0], [5.0, 751.0], [6.0, 1290.5], [7.0, 431.0], [8.0, 1220.0], [9.0, 1028.0], [10.0, 623.0], [11.0, 387.0], [12.0, 725.0], [13.0, 561.5], [14.0, 473.5], [15.0, 554.0], [16.0, 353.0], [17.0, 462.5], [18.0, 373.5], [19.0, 436.0], [20.0, 457.0], [21.0, 437.0], [22.0, 375.0], [23.0, 344.0], [24.0, 328.5], [25.0, 193.0], [26.0, 307.0], [27.0, 285.5], [28.0, 196.0], [29.0, 263.0], [30.0, 93.0], [31.0, 108.0], [32.0, 284.0], [33.0, 302.0], [34.0, 135.0], [35.0, 104.0], [37.0, 143.0], [36.0, 183.5], [39.0, 222.5], [38.0, 203.5], [41.0, 184.0], [40.0, 67.5], [42.0, 109.5], [43.0, 134.0], [45.0, 94.5], [44.0, 91.5], [46.0, 101.0], [49.0, 130.0], [51.0, 77.0], [50.0, 78.5], [53.0, 82.0], [52.0, 181.0], [55.0, 122.0], [57.0, 182.0], [56.0, 130.5], [59.0, 139.0], [60.0, 85.5], [63.0, 72.0], [64.0, 96.5], [65.0, 72.0], [67.0, 98.0], [68.0, 114.5], [69.0, 109.0], [73.0, 129.0], [75.0, 71.0], [77.0, 84.0], [86.0, 86.5], [92.0, 58.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 92.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 12.25, "minX": 1.60387182E12, "maxY": 31.333333333333332, "series": [{"data": [[1.60387188E12, 25.816666666666666], [1.603872E12, 18.3], [1.60387182E12, 12.25], [1.60387194E12, 31.333333333333332]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.603872E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 12.083333333333334, "minX": 1.60387182E12, "maxY": 31.333333333333332, "series": [{"data": [[1.60387188E12, 25.816666666666666], [1.603872E12, 18.466666666666665], [1.60387182E12, 12.083333333333334], [1.60387194E12, 31.333333333333332]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.603872E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 12.083333333333334, "minX": 1.60387182E12, "maxY": 31.333333333333332, "series": [{"data": [[1.60387188E12, 25.816666666666666], [1.603872E12, 18.466666666666665], [1.60387182E12, 12.083333333333334], [1.60387194E12, 31.333333333333332]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.603872E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 12.083333333333334, "minX": 1.60387182E12, "maxY": 31.333333333333332, "series": [{"data": [[1.60387188E12, 25.816666666666666], [1.603872E12, 18.466666666666665], [1.60387182E12, 12.083333333333334], [1.60387194E12, 31.333333333333332]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.603872E12, "title": "Total Transactions Per Second"}},
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

