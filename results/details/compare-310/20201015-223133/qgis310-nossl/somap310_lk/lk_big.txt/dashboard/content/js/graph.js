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
        data: {"result": {"minY": 29.0, "minX": 0.0, "maxY": 3185.0, "series": [{"data": [[0.0, 29.0], [0.1, 30.0], [0.2, 31.0], [0.3, 31.0], [0.4, 32.0], [0.5, 32.0], [0.6, 33.0], [0.7, 33.0], [0.8, 34.0], [0.9, 34.0], [1.0, 34.0], [1.1, 34.0], [1.2, 35.0], [1.3, 35.0], [1.4, 35.0], [1.5, 36.0], [1.6, 36.0], [1.7, 36.0], [1.8, 36.0], [1.9, 36.0], [2.0, 36.0], [2.1, 36.0], [2.2, 36.0], [2.3, 36.0], [2.4, 37.0], [2.5, 37.0], [2.6, 37.0], [2.7, 37.0], [2.8, 37.0], [2.9, 37.0], [3.0, 37.0], [3.1, 37.0], [3.2, 37.0], [3.3, 37.0], [3.4, 38.0], [3.5, 38.0], [3.6, 38.0], [3.7, 38.0], [3.8, 38.0], [3.9, 38.0], [4.0, 38.0], [4.1, 38.0], [4.2, 38.0], [4.3, 38.0], [4.4, 38.0], [4.5, 38.0], [4.6, 38.0], [4.7, 38.0], [4.8, 38.0], [4.9, 38.0], [5.0, 39.0], [5.1, 39.0], [5.2, 39.0], [5.3, 39.0], [5.4, 39.0], [5.5, 39.0], [5.6, 39.0], [5.7, 39.0], [5.8, 39.0], [5.9, 39.0], [6.0, 39.0], [6.1, 39.0], [6.2, 39.0], [6.3, 39.0], [6.4, 39.0], [6.5, 40.0], [6.6, 40.0], [6.7, 40.0], [6.8, 40.0], [6.9, 40.0], [7.0, 40.0], [7.1, 40.0], [7.2, 40.0], [7.3, 40.0], [7.4, 40.0], [7.5, 40.0], [7.6, 40.0], [7.7, 40.0], [7.8, 40.0], [7.9, 40.0], [8.0, 40.0], [8.1, 40.0], [8.2, 40.0], [8.3, 40.0], [8.4, 40.0], [8.5, 40.0], [8.6, 41.0], [8.7, 41.0], [8.8, 41.0], [8.9, 41.0], [9.0, 41.0], [9.1, 41.0], [9.2, 41.0], [9.3, 41.0], [9.4, 41.0], [9.5, 41.0], [9.6, 41.0], [9.7, 41.0], [9.8, 41.0], [9.9, 41.0], [10.0, 41.0], [10.1, 41.0], [10.2, 41.0], [10.3, 41.0], [10.4, 42.0], [10.5, 42.0], [10.6, 42.0], [10.7, 42.0], [10.8, 42.0], [10.9, 42.0], [11.0, 42.0], [11.1, 42.0], [11.2, 42.0], [11.3, 42.0], [11.4, 42.0], [11.5, 42.0], [11.6, 42.0], [11.7, 42.0], [11.8, 42.0], [11.9, 42.0], [12.0, 42.0], [12.1, 43.0], [12.2, 43.0], [12.3, 43.0], [12.4, 43.0], [12.5, 43.0], [12.6, 43.0], [12.7, 43.0], [12.8, 43.0], [12.9, 43.0], [13.0, 43.0], [13.1, 43.0], [13.2, 43.0], [13.3, 43.0], [13.4, 43.0], [13.5, 43.0], [13.6, 43.0], [13.7, 43.0], [13.8, 44.0], [13.9, 44.0], [14.0, 44.0], [14.1, 44.0], [14.2, 44.0], [14.3, 44.0], [14.4, 44.0], [14.5, 44.0], [14.6, 44.0], [14.7, 44.0], [14.8, 44.0], [14.9, 44.0], [15.0, 44.0], [15.1, 45.0], [15.2, 45.0], [15.3, 45.0], [15.4, 45.0], [15.5, 45.0], [15.6, 45.0], [15.7, 45.0], [15.8, 45.0], [15.9, 45.0], [16.0, 45.0], [16.1, 45.0], [16.2, 45.0], [16.3, 46.0], [16.4, 46.0], [16.5, 46.0], [16.6, 46.0], [16.7, 46.0], [16.8, 46.0], [16.9, 46.0], [17.0, 46.0], [17.1, 46.0], [17.2, 46.0], [17.3, 46.0], [17.4, 46.0], [17.5, 47.0], [17.6, 47.0], [17.7, 47.0], [17.8, 47.0], [17.9, 47.0], [18.0, 47.0], [18.1, 47.0], [18.2, 47.0], [18.3, 47.0], [18.4, 48.0], [18.5, 48.0], [18.6, 48.0], [18.7, 48.0], [18.8, 48.0], [18.9, 48.0], [19.0, 48.0], [19.1, 48.0], [19.2, 48.0], [19.3, 49.0], [19.4, 49.0], [19.5, 49.0], [19.6, 49.0], [19.7, 49.0], [19.8, 49.0], [19.9, 50.0], [20.0, 50.0], [20.1, 50.0], [20.2, 50.0], [20.3, 51.0], [20.4, 51.0], [20.5, 51.0], [20.6, 51.0], [20.7, 51.0], [20.8, 52.0], [20.9, 52.0], [21.0, 52.0], [21.1, 53.0], [21.2, 53.0], [21.3, 53.0], [21.4, 54.0], [21.5, 54.0], [21.6, 54.0], [21.7, 55.0], [21.8, 55.0], [21.9, 55.0], [22.0, 56.0], [22.1, 56.0], [22.2, 57.0], [22.3, 57.0], [22.4, 57.0], [22.5, 58.0], [22.6, 58.0], [22.7, 58.0], [22.8, 59.0], [22.9, 59.0], [23.0, 59.0], [23.1, 60.0], [23.2, 60.0], [23.3, 60.0], [23.4, 61.0], [23.5, 61.0], [23.6, 61.0], [23.7, 62.0], [23.8, 62.0], [23.9, 62.0], [24.0, 62.0], [24.1, 62.0], [24.2, 62.0], [24.3, 63.0], [24.4, 63.0], [24.5, 63.0], [24.6, 63.0], [24.7, 63.0], [24.8, 64.0], [24.9, 64.0], [25.0, 64.0], [25.1, 65.0], [25.2, 65.0], [25.3, 65.0], [25.4, 66.0], [25.5, 66.0], [25.6, 66.0], [25.7, 66.0], [25.8, 66.0], [25.9, 66.0], [26.0, 67.0], [26.1, 67.0], [26.2, 67.0], [26.3, 67.0], [26.4, 68.0], [26.5, 68.0], [26.6, 68.0], [26.7, 68.0], [26.8, 69.0], [26.9, 69.0], [27.0, 69.0], [27.1, 69.0], [27.2, 69.0], [27.3, 70.0], [27.4, 70.0], [27.5, 70.0], [27.6, 70.0], [27.7, 70.0], [27.8, 70.0], [27.9, 70.0], [28.0, 71.0], [28.1, 71.0], [28.2, 72.0], [28.3, 72.0], [28.4, 72.0], [28.5, 72.0], [28.6, 72.0], [28.7, 72.0], [28.8, 72.0], [28.9, 73.0], [29.0, 73.0], [29.1, 73.0], [29.2, 73.0], [29.3, 73.0], [29.4, 73.0], [29.5, 74.0], [29.6, 74.0], [29.7, 74.0], [29.8, 74.0], [29.9, 74.0], [30.0, 74.0], [30.1, 74.0], [30.2, 75.0], [30.3, 75.0], [30.4, 75.0], [30.5, 75.0], [30.6, 75.0], [30.7, 75.0], [30.8, 76.0], [30.9, 76.0], [31.0, 76.0], [31.1, 76.0], [31.2, 76.0], [31.3, 76.0], [31.4, 76.0], [31.5, 77.0], [31.6, 77.0], [31.7, 77.0], [31.8, 77.0], [31.9, 77.0], [32.0, 77.0], [32.1, 77.0], [32.2, 77.0], [32.3, 78.0], [32.4, 78.0], [32.5, 78.0], [32.6, 78.0], [32.7, 78.0], [32.8, 78.0], [32.9, 78.0], [33.0, 78.0], [33.1, 79.0], [33.2, 79.0], [33.3, 79.0], [33.4, 79.0], [33.5, 79.0], [33.6, 80.0], [33.7, 80.0], [33.8, 80.0], [33.9, 80.0], [34.0, 80.0], [34.1, 80.0], [34.2, 81.0], [34.3, 81.0], [34.4, 81.0], [34.5, 81.0], [34.6, 81.0], [34.7, 82.0], [34.8, 82.0], [34.9, 82.0], [35.0, 82.0], [35.1, 82.0], [35.2, 83.0], [35.3, 83.0], [35.4, 83.0], [35.5, 83.0], [35.6, 83.0], [35.7, 83.0], [35.8, 84.0], [35.9, 84.0], [36.0, 84.0], [36.1, 84.0], [36.2, 84.0], [36.3, 84.0], [36.4, 85.0], [36.5, 85.0], [36.6, 85.0], [36.7, 85.0], [36.8, 86.0], [36.9, 86.0], [37.0, 86.0], [37.1, 86.0], [37.2, 87.0], [37.3, 87.0], [37.4, 87.0], [37.5, 87.0], [37.6, 87.0], [37.7, 88.0], [37.8, 88.0], [37.9, 89.0], [38.0, 89.0], [38.1, 89.0], [38.2, 89.0], [38.3, 89.0], [38.4, 90.0], [38.5, 90.0], [38.6, 90.0], [38.7, 90.0], [38.8, 91.0], [38.9, 91.0], [39.0, 91.0], [39.1, 92.0], [39.2, 92.0], [39.3, 92.0], [39.4, 93.0], [39.5, 93.0], [39.6, 93.0], [39.7, 94.0], [39.8, 94.0], [39.9, 95.0], [40.0, 95.0], [40.1, 96.0], [40.2, 96.0], [40.3, 96.0], [40.4, 97.0], [40.5, 98.0], [40.6, 98.0], [40.7, 99.0], [40.8, 99.0], [40.9, 100.0], [41.0, 101.0], [41.1, 102.0], [41.2, 103.0], [41.3, 104.0], [41.4, 105.0], [41.5, 105.0], [41.6, 106.0], [41.7, 107.0], [41.8, 108.0], [41.9, 108.0], [42.0, 109.0], [42.1, 110.0], [42.2, 111.0], [42.3, 112.0], [42.4, 113.0], [42.5, 114.0], [42.6, 114.0], [42.7, 115.0], [42.8, 116.0], [42.9, 117.0], [43.0, 117.0], [43.1, 118.0], [43.2, 118.0], [43.3, 118.0], [43.4, 119.0], [43.5, 120.0], [43.6, 120.0], [43.7, 121.0], [43.8, 121.0], [43.9, 121.0], [44.0, 122.0], [44.1, 122.0], [44.2, 123.0], [44.3, 124.0], [44.4, 124.0], [44.5, 125.0], [44.6, 126.0], [44.7, 126.0], [44.8, 127.0], [44.9, 128.0], [45.0, 128.0], [45.1, 129.0], [45.2, 129.0], [45.3, 130.0], [45.4, 130.0], [45.5, 131.0], [45.6, 132.0], [45.7, 133.0], [45.8, 133.0], [45.9, 133.0], [46.0, 134.0], [46.1, 134.0], [46.2, 135.0], [46.3, 135.0], [46.4, 136.0], [46.5, 136.0], [46.6, 138.0], [46.7, 138.0], [46.8, 138.0], [46.9, 140.0], [47.0, 141.0], [47.1, 141.0], [47.2, 143.0], [47.3, 143.0], [47.4, 144.0], [47.5, 145.0], [47.6, 146.0], [47.7, 147.0], [47.8, 148.0], [47.9, 148.0], [48.0, 149.0], [48.1, 151.0], [48.2, 152.0], [48.3, 153.0], [48.4, 153.0], [48.5, 154.0], [48.6, 155.0], [48.7, 157.0], [48.8, 157.0], [48.9, 158.0], [49.0, 159.0], [49.1, 160.0], [49.2, 160.0], [49.3, 162.0], [49.4, 163.0], [49.5, 163.0], [49.6, 164.0], [49.7, 165.0], [49.8, 166.0], [49.9, 167.0], [50.0, 167.0], [50.1, 169.0], [50.2, 170.0], [50.3, 170.0], [50.4, 172.0], [50.5, 173.0], [50.6, 174.0], [50.7, 175.0], [50.8, 176.0], [50.9, 177.0], [51.0, 178.0], [51.1, 180.0], [51.2, 180.0], [51.3, 181.0], [51.4, 182.0], [51.5, 183.0], [51.6, 184.0], [51.7, 186.0], [51.8, 187.0], [51.9, 187.0], [52.0, 188.0], [52.1, 189.0], [52.2, 190.0], [52.3, 190.0], [52.4, 191.0], [52.5, 192.0], [52.6, 193.0], [52.7, 194.0], [52.8, 195.0], [52.9, 196.0], [53.0, 196.0], [53.1, 197.0], [53.2, 198.0], [53.3, 199.0], [53.4, 200.0], [53.5, 201.0], [53.6, 202.0], [53.7, 202.0], [53.8, 203.0], [53.9, 203.0], [54.0, 204.0], [54.1, 204.0], [54.2, 205.0], [54.3, 205.0], [54.4, 205.0], [54.5, 206.0], [54.6, 207.0], [54.7, 207.0], [54.8, 208.0], [54.9, 208.0], [55.0, 209.0], [55.1, 210.0], [55.2, 211.0], [55.3, 211.0], [55.4, 212.0], [55.5, 213.0], [55.6, 214.0], [55.7, 214.0], [55.8, 215.0], [55.9, 215.0], [56.0, 216.0], [56.1, 217.0], [56.2, 217.0], [56.3, 218.0], [56.4, 218.0], [56.5, 219.0], [56.6, 221.0], [56.7, 221.0], [56.8, 221.0], [56.9, 223.0], [57.0, 224.0], [57.1, 224.0], [57.2, 225.0], [57.3, 226.0], [57.4, 227.0], [57.5, 227.0], [57.6, 228.0], [57.7, 229.0], [57.8, 229.0], [57.9, 230.0], [58.0, 230.0], [58.1, 231.0], [58.2, 232.0], [58.3, 232.0], [58.4, 233.0], [58.5, 234.0], [58.6, 235.0], [58.7, 235.0], [58.8, 237.0], [58.9, 238.0], [59.0, 238.0], [59.1, 239.0], [59.2, 240.0], [59.3, 241.0], [59.4, 241.0], [59.5, 242.0], [59.6, 243.0], [59.7, 243.0], [59.8, 244.0], [59.9, 245.0], [60.0, 246.0], [60.1, 247.0], [60.2, 247.0], [60.3, 248.0], [60.4, 249.0], [60.5, 251.0], [60.6, 251.0], [60.7, 252.0], [60.8, 253.0], [60.9, 253.0], [61.0, 254.0], [61.1, 255.0], [61.2, 255.0], [61.3, 256.0], [61.4, 257.0], [61.5, 258.0], [61.6, 259.0], [61.7, 260.0], [61.8, 260.0], [61.9, 261.0], [62.0, 263.0], [62.1, 265.0], [62.2, 266.0], [62.3, 267.0], [62.4, 267.0], [62.5, 269.0], [62.6, 269.0], [62.7, 270.0], [62.8, 271.0], [62.9, 271.0], [63.0, 273.0], [63.1, 274.0], [63.2, 275.0], [63.3, 276.0], [63.4, 277.0], [63.5, 278.0], [63.6, 278.0], [63.7, 278.0], [63.8, 281.0], [63.9, 283.0], [64.0, 284.0], [64.1, 285.0], [64.2, 286.0], [64.3, 287.0], [64.4, 288.0], [64.5, 289.0], [64.6, 291.0], [64.7, 293.0], [64.8, 294.0], [64.9, 297.0], [65.0, 299.0], [65.1, 299.0], [65.2, 301.0], [65.3, 303.0], [65.4, 303.0], [65.5, 304.0], [65.6, 306.0], [65.7, 307.0], [65.8, 308.0], [65.9, 309.0], [66.0, 310.0], [66.1, 312.0], [66.2, 314.0], [66.3, 315.0], [66.4, 316.0], [66.5, 317.0], [66.6, 318.0], [66.7, 318.0], [66.8, 319.0], [66.9, 321.0], [67.0, 322.0], [67.1, 323.0], [67.2, 326.0], [67.3, 328.0], [67.4, 328.0], [67.5, 330.0], [67.6, 332.0], [67.7, 334.0], [67.8, 334.0], [67.9, 335.0], [68.0, 336.0], [68.1, 337.0], [68.2, 338.0], [68.3, 339.0], [68.4, 341.0], [68.5, 342.0], [68.6, 344.0], [68.7, 344.0], [68.8, 345.0], [68.9, 346.0], [69.0, 347.0], [69.1, 348.0], [69.2, 349.0], [69.3, 352.0], [69.4, 354.0], [69.5, 356.0], [69.6, 358.0], [69.7, 360.0], [69.8, 362.0], [69.9, 363.0], [70.0, 366.0], [70.1, 367.0], [70.2, 369.0], [70.3, 369.0], [70.4, 370.0], [70.5, 371.0], [70.6, 372.0], [70.7, 375.0], [70.8, 376.0], [70.9, 378.0], [71.0, 380.0], [71.1, 381.0], [71.2, 383.0], [71.3, 384.0], [71.4, 386.0], [71.5, 387.0], [71.6, 389.0], [71.7, 390.0], [71.8, 391.0], [71.9, 393.0], [72.0, 394.0], [72.1, 396.0], [72.2, 396.0], [72.3, 397.0], [72.4, 398.0], [72.5, 400.0], [72.6, 403.0], [72.7, 404.0], [72.8, 405.0], [72.9, 406.0], [73.0, 408.0], [73.1, 412.0], [73.2, 413.0], [73.3, 414.0], [73.4, 416.0], [73.5, 418.0], [73.6, 420.0], [73.7, 422.0], [73.8, 425.0], [73.9, 427.0], [74.0, 429.0], [74.1, 431.0], [74.2, 433.0], [74.3, 435.0], [74.4, 437.0], [74.5, 439.0], [74.6, 440.0], [74.7, 441.0], [74.8, 442.0], [74.9, 443.0], [75.0, 445.0], [75.1, 446.0], [75.2, 448.0], [75.3, 449.0], [75.4, 450.0], [75.5, 451.0], [75.6, 453.0], [75.7, 455.0], [75.8, 457.0], [75.9, 458.0], [76.0, 459.0], [76.1, 460.0], [76.2, 461.0], [76.3, 462.0], [76.4, 465.0], [76.5, 465.0], [76.6, 467.0], [76.7, 469.0], [76.8, 471.0], [76.9, 472.0], [77.0, 475.0], [77.1, 477.0], [77.2, 478.0], [77.3, 480.0], [77.4, 481.0], [77.5, 484.0], [77.6, 486.0], [77.7, 487.0], [77.8, 490.0], [77.9, 491.0], [78.0, 493.0], [78.1, 496.0], [78.2, 499.0], [78.3, 501.0], [78.4, 503.0], [78.5, 504.0], [78.6, 505.0], [78.7, 507.0], [78.8, 509.0], [78.9, 512.0], [79.0, 515.0], [79.1, 516.0], [79.2, 517.0], [79.3, 519.0], [79.4, 524.0], [79.5, 525.0], [79.6, 527.0], [79.7, 528.0], [79.8, 530.0], [79.9, 532.0], [80.0, 534.0], [80.1, 536.0], [80.2, 537.0], [80.3, 539.0], [80.4, 541.0], [80.5, 542.0], [80.6, 545.0], [80.7, 547.0], [80.8, 548.0], [80.9, 551.0], [81.0, 555.0], [81.1, 557.0], [81.2, 559.0], [81.3, 561.0], [81.4, 563.0], [81.5, 565.0], [81.6, 566.0], [81.7, 569.0], [81.8, 571.0], [81.9, 572.0], [82.0, 573.0], [82.1, 575.0], [82.2, 576.0], [82.3, 578.0], [82.4, 580.0], [82.5, 582.0], [82.6, 584.0], [82.7, 586.0], [82.8, 587.0], [82.9, 590.0], [83.0, 590.0], [83.1, 592.0], [83.2, 593.0], [83.3, 595.0], [83.4, 597.0], [83.5, 598.0], [83.6, 600.0], [83.7, 603.0], [83.8, 605.0], [83.9, 606.0], [84.0, 608.0], [84.1, 611.0], [84.2, 613.0], [84.3, 615.0], [84.4, 616.0], [84.5, 617.0], [84.6, 619.0], [84.7, 621.0], [84.8, 623.0], [84.9, 625.0], [85.0, 628.0], [85.1, 631.0], [85.2, 635.0], [85.3, 637.0], [85.4, 637.0], [85.5, 639.0], [85.6, 641.0], [85.7, 643.0], [85.8, 644.0], [85.9, 647.0], [86.0, 649.0], [86.1, 651.0], [86.2, 653.0], [86.3, 654.0], [86.4, 656.0], [86.5, 658.0], [86.6, 659.0], [86.7, 664.0], [86.8, 666.0], [86.9, 670.0], [87.0, 672.0], [87.1, 675.0], [87.2, 677.0], [87.3, 679.0], [87.4, 681.0], [87.5, 683.0], [87.6, 683.0], [87.7, 686.0], [87.8, 690.0], [87.9, 692.0], [88.0, 694.0], [88.1, 698.0], [88.2, 700.0], [88.3, 702.0], [88.4, 704.0], [88.5, 708.0], [88.6, 710.0], [88.7, 712.0], [88.8, 715.0], [88.9, 721.0], [89.0, 727.0], [89.1, 729.0], [89.2, 732.0], [89.3, 735.0], [89.4, 736.0], [89.5, 738.0], [89.6, 741.0], [89.7, 744.0], [89.8, 750.0], [89.9, 754.0], [90.0, 756.0], [90.1, 759.0], [90.2, 763.0], [90.3, 766.0], [90.4, 771.0], [90.5, 777.0], [90.6, 780.0], [90.7, 785.0], [90.8, 789.0], [90.9, 792.0], [91.0, 795.0], [91.1, 801.0], [91.2, 804.0], [91.3, 813.0], [91.4, 816.0], [91.5, 819.0], [91.6, 821.0], [91.7, 824.0], [91.8, 830.0], [91.9, 835.0], [92.0, 839.0], [92.1, 844.0], [92.2, 852.0], [92.3, 856.0], [92.4, 859.0], [92.5, 862.0], [92.6, 866.0], [92.7, 870.0], [92.8, 874.0], [92.9, 889.0], [93.0, 890.0], [93.1, 899.0], [93.2, 903.0], [93.3, 914.0], [93.4, 916.0], [93.5, 919.0], [93.6, 929.0], [93.7, 936.0], [93.8, 942.0], [93.9, 949.0], [94.0, 955.0], [94.1, 961.0], [94.2, 970.0], [94.3, 973.0], [94.4, 978.0], [94.5, 982.0], [94.6, 986.0], [94.7, 993.0], [94.8, 1001.0], [94.9, 1012.0], [95.0, 1028.0], [95.1, 1034.0], [95.2, 1041.0], [95.3, 1052.0], [95.4, 1059.0], [95.5, 1075.0], [95.6, 1085.0], [95.7, 1094.0], [95.8, 1106.0], [95.9, 1114.0], [96.0, 1124.0], [96.1, 1130.0], [96.2, 1141.0], [96.3, 1157.0], [96.4, 1170.0], [96.5, 1178.0], [96.6, 1208.0], [96.7, 1215.0], [96.8, 1230.0], [96.9, 1242.0], [97.0, 1251.0], [97.1, 1273.0], [97.2, 1292.0], [97.3, 1301.0], [97.4, 1330.0], [97.5, 1346.0], [97.6, 1350.0], [97.7, 1364.0], [97.8, 1379.0], [97.9, 1403.0], [98.0, 1426.0], [98.1, 1446.0], [98.2, 1477.0], [98.3, 1496.0], [98.4, 1506.0], [98.5, 1534.0], [98.6, 1562.0], [98.7, 1594.0], [98.8, 1618.0], [98.9, 1639.0], [99.0, 1690.0], [99.1, 1707.0], [99.2, 1756.0], [99.3, 1832.0], [99.4, 2009.0], [99.5, 2073.0], [99.6, 2112.0], [99.7, 2168.0], [99.8, 2250.0], [99.9, 2581.0], [100.0, 3185.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 2148.0, "series": [{"data": [[0.0, 2148.0], [600.0, 243.0], [700.0, 153.0], [800.0, 107.0], [900.0, 88.0], [1000.0, 49.0], [1100.0, 46.0], [1200.0, 36.0], [1300.0, 31.0], [1400.0, 23.0], [1500.0, 22.0], [100.0, 658.0], [1600.0, 19.0], [1700.0, 8.0], [1800.0, 5.0], [1900.0, 3.0], [2000.0, 8.0], [2100.0, 11.0], [2200.0, 4.0], [2300.0, 2.0], [2400.0, 1.0], [2500.0, 1.0], [2600.0, 1.0], [2700.0, 1.0], [2900.0, 1.0], [3100.0, 2.0], [200.0, 620.0], [300.0, 387.0], [400.0, 303.0], [500.0, 281.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3100.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 89.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 4120.0, "series": [{"data": [[0.0, 4120.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1053.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 89.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.92836676217765, "minX": 1.60280466E12, "maxY": 10.0, "series": [{"data": [[1.60280478E12, 10.0], [1.60280472E12, 10.0], [1.60280484E12, 9.952178533475028], [1.60280466E12, 9.92836676217765]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60280484E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 307.21395881006794, "minX": 1.0, "maxY": 2975.0, "series": [{"data": [[4.0, 1653.5], [8.0, 1660.0], [2.0, 2168.0], [1.0, 2975.0], [9.0, 535.4], [5.0, 834.0], [10.0, 307.21395881006794], [6.0, 1032.0], [3.0, 2127.0], [7.0, 1208.5]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.98669707335615, 310.4437476244774]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 3128.233333333333, "minX": 1.60280466E12, "maxY": 1639766.7833333334, "series": [{"data": [[1.60280478E12, 1587337.85], [1.60280472E12, 1639766.7833333334], [1.60280484E12, 860514.7166666667], [1.60280466E12, 163334.36666666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60280478E12, 18681.8], [1.60280472E12, 15409.966666666667], [1.60280484E12, 8270.95], [1.60280466E12, 3128.233333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60280484E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 270.342533936652, "minX": 1.60280466E12, "maxY": 348.3368756641871, "series": [{"data": [[1.60280478E12, 270.342533936652], [1.60280472E12, 339.67990919409755], [1.60280484E12, 348.3368756641871], [1.60280466E12, 314.60458452722077]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60280484E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 269.96832579185525, "minX": 1.60280466E12, "maxY": 347.9117959617429, "series": [{"data": [[1.60280478E12, 269.96832579185525], [1.60280472E12, 339.2031782065829], [1.60280484E12, 347.9117959617429], [1.60280466E12, 314.3381088825213]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60280484E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0074388947927736485, "minX": 1.60280466E12, "maxY": 0.24068767908309496, "series": [{"data": [[1.60280478E12, 0.010407239819004545], [1.60280472E12, 0.01362088535754825], [1.60280484E12, 0.0074388947927736485], [1.60280466E12, 0.24068767908309496]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60280484E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 29.0, "minX": 1.60280466E12, "maxY": 3185.0, "series": [{"data": [[1.60280478E12, 2667.0], [1.60280472E12, 2764.0], [1.60280484E12, 3185.0], [1.60280466E12, 1269.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60280478E12, 33.0], [1.60280472E12, 34.0], [1.60280484E12, 34.4779997754097], [1.60280466E12, 35.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60280478E12, 33.88890021085739], [1.60280472E12, 34.0], [1.60280484E12, 35.0], [1.60280466E12, 35.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60280478E12, 33.00449973642826], [1.60280472E12, 34.0], [1.60280484E12, 34.94899988770485], [1.60280466E12, 35.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60280478E12, 30.0], [1.60280472E12, 30.0], [1.60280484E12, 29.0], [1.60280466E12, 33.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60280478E12, 135.0], [1.60280472E12, 197.0], [1.60280484E12, 220.0], [1.60280466E12, 160.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60280484E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 47.0, "minX": 3.0, "maxY": 2168.0, "series": [{"data": [[3.0, 2168.0], [4.0, 1842.0], [5.0, 1100.0], [6.0, 1153.0], [7.0, 933.0], [8.0, 997.0], [9.0, 991.0], [10.0, 691.5], [12.0, 770.0], [13.0, 709.0], [14.0, 509.5], [15.0, 488.5], [16.0, 581.0], [17.0, 426.0], [18.0, 522.5], [19.0, 425.0], [20.0, 523.0], [21.0, 450.0], [22.0, 259.5], [23.0, 435.0], [24.0, 347.0], [25.0, 290.0], [26.0, 280.5], [27.0, 322.0], [28.0, 269.0], [29.0, 289.0], [31.0, 253.0], [33.0, 230.0], [32.0, 156.5], [34.0, 250.0], [35.0, 254.0], [36.0, 80.0], [37.0, 127.0], [39.0, 202.0], [38.0, 194.5], [40.0, 143.5], [41.0, 56.5], [42.0, 96.0], [43.0, 196.0], [44.0, 86.5], [47.0, 96.0], [46.0, 90.5], [48.0, 102.0], [50.0, 47.0], [51.0, 118.5], [52.0, 131.0], [53.0, 88.0], [55.0, 84.0], [57.0, 142.0], [58.0, 87.5], [59.0, 153.0], [61.0, 87.0], [60.0, 86.0], [66.0, 81.0], [67.0, 129.0], [68.0, 66.0], [75.0, 68.5], [73.0, 85.0], [79.0, 90.0], [78.0, 47.5], [80.0, 93.5], [81.0, 117.0], [84.0, 54.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 84.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 47.0, "minX": 3.0, "maxY": 2168.0, "series": [{"data": [[3.0, 2168.0], [4.0, 1841.0], [5.0, 1099.0], [6.0, 1152.0], [7.0, 931.0], [8.0, 993.5], [9.0, 984.0], [10.0, 690.0], [12.0, 767.0], [13.0, 709.0], [14.0, 508.5], [15.0, 488.0], [16.0, 581.0], [17.0, 424.0], [18.0, 521.5], [19.0, 425.0], [20.0, 522.5], [21.0, 447.0], [22.0, 259.5], [23.0, 435.0], [24.0, 347.0], [25.0, 289.5], [26.0, 280.5], [27.0, 321.0], [28.0, 268.0], [29.0, 288.5], [31.0, 252.0], [33.0, 230.0], [32.0, 156.5], [34.0, 250.0], [35.0, 254.0], [36.0, 80.0], [37.0, 127.0], [39.0, 202.0], [38.0, 194.0], [40.0, 143.5], [41.0, 54.5], [42.0, 96.0], [43.0, 195.0], [44.0, 86.0], [47.0, 96.0], [46.0, 89.5], [48.0, 102.0], [50.0, 47.0], [51.0, 118.5], [52.0, 131.0], [53.0, 88.0], [55.0, 84.0], [57.0, 142.0], [58.0, 87.5], [59.0, 153.0], [61.0, 87.0], [60.0, 86.0], [66.0, 81.0], [67.0, 129.0], [68.0, 66.0], [75.0, 68.5], [73.0, 85.0], [79.0, 90.0], [78.0, 47.5], [80.0, 92.5], [81.0, 117.0], [84.0, 54.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 84.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 5.983333333333333, "minX": 1.60280466E12, "maxY": 36.833333333333336, "series": [{"data": [[1.60280478E12, 36.833333333333336], [1.60280472E12, 29.366666666666667], [1.60280484E12, 15.516666666666667], [1.60280466E12, 5.983333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60280484E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 5.816666666666666, "minX": 1.60280466E12, "maxY": 36.833333333333336, "series": [{"data": [[1.60280478E12, 36.833333333333336], [1.60280472E12, 29.366666666666667], [1.60280484E12, 15.683333333333334], [1.60280466E12, 5.816666666666666]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60280484E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 5.816666666666666, "minX": 1.60280466E12, "maxY": 36.833333333333336, "series": [{"data": [[1.60280478E12, 36.833333333333336], [1.60280472E12, 29.366666666666667], [1.60280484E12, 15.683333333333334], [1.60280466E12, 5.816666666666666]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60280484E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 5.816666666666666, "minX": 1.60280466E12, "maxY": 36.833333333333336, "series": [{"data": [[1.60280478E12, 36.833333333333336], [1.60280472E12, 29.366666666666667], [1.60280484E12, 15.683333333333334], [1.60280466E12, 5.816666666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60280484E12, "title": "Total Transactions Per Second"}},
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

