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
        data: {"result": {"minY": 27.0, "minX": 0.0, "maxY": 3293.0, "series": [{"data": [[0.0, 27.0], [0.1, 28.0], [0.2, 28.0], [0.3, 29.0], [0.4, 29.0], [0.5, 29.0], [0.6, 30.0], [0.7, 30.0], [0.8, 30.0], [0.9, 31.0], [1.0, 31.0], [1.1, 31.0], [1.2, 31.0], [1.3, 31.0], [1.4, 31.0], [1.5, 32.0], [1.6, 32.0], [1.7, 32.0], [1.8, 32.0], [1.9, 32.0], [2.0, 32.0], [2.1, 32.0], [2.2, 33.0], [2.3, 33.0], [2.4, 33.0], [2.5, 33.0], [2.6, 33.0], [2.7, 33.0], [2.8, 33.0], [2.9, 34.0], [3.0, 34.0], [3.1, 34.0], [3.2, 34.0], [3.3, 34.0], [3.4, 34.0], [3.5, 34.0], [3.6, 34.0], [3.7, 34.0], [3.8, 34.0], [3.9, 35.0], [4.0, 35.0], [4.1, 35.0], [4.2, 35.0], [4.3, 35.0], [4.4, 35.0], [4.5, 35.0], [4.6, 35.0], [4.7, 35.0], [4.8, 35.0], [4.9, 35.0], [5.0, 35.0], [5.1, 35.0], [5.2, 35.0], [5.3, 36.0], [5.4, 36.0], [5.5, 36.0], [5.6, 36.0], [5.7, 36.0], [5.8, 36.0], [5.9, 36.0], [6.0, 36.0], [6.1, 36.0], [6.2, 36.0], [6.3, 36.0], [6.4, 36.0], [6.5, 36.0], [6.6, 36.0], [6.7, 36.0], [6.8, 36.0], [6.9, 36.0], [7.0, 37.0], [7.1, 37.0], [7.2, 37.0], [7.3, 37.0], [7.4, 37.0], [7.5, 37.0], [7.6, 37.0], [7.7, 37.0], [7.8, 37.0], [7.9, 37.0], [8.0, 37.0], [8.1, 37.0], [8.2, 37.0], [8.3, 37.0], [8.4, 38.0], [8.5, 38.0], [8.6, 38.0], [8.7, 38.0], [8.8, 38.0], [8.9, 38.0], [9.0, 38.0], [9.1, 38.0], [9.2, 38.0], [9.3, 38.0], [9.4, 38.0], [9.5, 38.0], [9.6, 38.0], [9.7, 38.0], [9.8, 38.0], [9.9, 38.0], [10.0, 39.0], [10.1, 39.0], [10.2, 39.0], [10.3, 39.0], [10.4, 39.0], [10.5, 39.0], [10.6, 39.0], [10.7, 39.0], [10.8, 39.0], [10.9, 39.0], [11.0, 39.0], [11.1, 39.0], [11.2, 39.0], [11.3, 39.0], [11.4, 39.0], [11.5, 39.0], [11.6, 40.0], [11.7, 40.0], [11.8, 40.0], [11.9, 40.0], [12.0, 40.0], [12.1, 40.0], [12.2, 40.0], [12.3, 40.0], [12.4, 40.0], [12.5, 40.0], [12.6, 40.0], [12.7, 40.0], [12.8, 41.0], [12.9, 41.0], [13.0, 41.0], [13.1, 41.0], [13.2, 41.0], [13.3, 41.0], [13.4, 41.0], [13.5, 41.0], [13.6, 41.0], [13.7, 41.0], [13.8, 41.0], [13.9, 41.0], [14.0, 42.0], [14.1, 42.0], [14.2, 42.0], [14.3, 42.0], [14.4, 42.0], [14.5, 42.0], [14.6, 42.0], [14.7, 42.0], [14.8, 42.0], [14.9, 42.0], [15.0, 42.0], [15.1, 43.0], [15.2, 43.0], [15.3, 43.0], [15.4, 43.0], [15.5, 43.0], [15.6, 44.0], [15.7, 44.0], [15.8, 44.0], [15.9, 44.0], [16.0, 44.0], [16.1, 44.0], [16.2, 44.0], [16.3, 45.0], [16.4, 45.0], [16.5, 45.0], [16.6, 45.0], [16.7, 45.0], [16.8, 46.0], [16.9, 46.0], [17.0, 46.0], [17.1, 46.0], [17.2, 46.0], [17.3, 46.0], [17.4, 47.0], [17.5, 47.0], [17.6, 47.0], [17.7, 47.0], [17.8, 47.0], [17.9, 48.0], [18.0, 48.0], [18.1, 48.0], [18.2, 48.0], [18.3, 48.0], [18.4, 49.0], [18.5, 49.0], [18.6, 50.0], [18.7, 50.0], [18.8, 51.0], [18.9, 51.0], [19.0, 51.0], [19.1, 51.0], [19.2, 52.0], [19.3, 52.0], [19.4, 52.0], [19.5, 53.0], [19.6, 53.0], [19.7, 54.0], [19.8, 54.0], [19.9, 55.0], [20.0, 55.0], [20.1, 56.0], [20.2, 56.0], [20.3, 56.0], [20.4, 57.0], [20.5, 57.0], [20.6, 57.0], [20.7, 58.0], [20.8, 58.0], [20.9, 58.0], [21.0, 58.0], [21.1, 59.0], [21.2, 59.0], [21.3, 59.0], [21.4, 60.0], [21.5, 60.0], [21.6, 60.0], [21.7, 60.0], [21.8, 60.0], [21.9, 60.0], [22.0, 61.0], [22.1, 61.0], [22.2, 61.0], [22.3, 62.0], [22.4, 62.0], [22.5, 62.0], [22.6, 62.0], [22.7, 63.0], [22.8, 63.0], [22.9, 63.0], [23.0, 63.0], [23.1, 63.0], [23.2, 64.0], [23.3, 64.0], [23.4, 64.0], [23.5, 64.0], [23.6, 65.0], [23.7, 65.0], [23.8, 65.0], [23.9, 65.0], [24.0, 65.0], [24.1, 66.0], [24.2, 66.0], [24.3, 66.0], [24.4, 66.0], [24.5, 66.0], [24.6, 66.0], [24.7, 66.0], [24.8, 67.0], [24.9, 67.0], [25.0, 67.0], [25.1, 67.0], [25.2, 67.0], [25.3, 67.0], [25.4, 68.0], [25.5, 68.0], [25.6, 68.0], [25.7, 68.0], [25.8, 68.0], [25.9, 68.0], [26.0, 68.0], [26.1, 69.0], [26.2, 69.0], [26.3, 69.0], [26.4, 69.0], [26.5, 69.0], [26.6, 69.0], [26.7, 69.0], [26.8, 69.0], [26.9, 70.0], [27.0, 70.0], [27.1, 70.0], [27.2, 70.0], [27.3, 70.0], [27.4, 70.0], [27.5, 70.0], [27.6, 71.0], [27.7, 71.0], [27.8, 71.0], [27.9, 71.0], [28.0, 71.0], [28.1, 71.0], [28.2, 71.0], [28.3, 72.0], [28.4, 72.0], [28.5, 72.0], [28.6, 72.0], [28.7, 72.0], [28.8, 72.0], [28.9, 72.0], [29.0, 72.0], [29.1, 72.0], [29.2, 72.0], [29.3, 73.0], [29.4, 73.0], [29.5, 73.0], [29.6, 73.0], [29.7, 73.0], [29.8, 73.0], [29.9, 73.0], [30.0, 73.0], [30.1, 73.0], [30.2, 74.0], [30.3, 74.0], [30.4, 74.0], [30.5, 74.0], [30.6, 74.0], [30.7, 74.0], [30.8, 74.0], [30.9, 74.0], [31.0, 74.0], [31.1, 75.0], [31.2, 75.0], [31.3, 75.0], [31.4, 75.0], [31.5, 75.0], [31.6, 75.0], [31.7, 75.0], [31.8, 75.0], [31.9, 76.0], [32.0, 76.0], [32.1, 76.0], [32.2, 76.0], [32.3, 76.0], [32.4, 77.0], [32.5, 77.0], [32.6, 77.0], [32.7, 77.0], [32.8, 77.0], [32.9, 77.0], [33.0, 77.0], [33.1, 78.0], [33.2, 78.0], [33.3, 78.0], [33.4, 78.0], [33.5, 78.0], [33.6, 78.0], [33.7, 78.0], [33.8, 79.0], [33.9, 79.0], [34.0, 79.0], [34.1, 79.0], [34.2, 79.0], [34.3, 79.0], [34.4, 80.0], [34.5, 80.0], [34.6, 80.0], [34.7, 80.0], [34.8, 80.0], [34.9, 81.0], [35.0, 81.0], [35.1, 81.0], [35.2, 81.0], [35.3, 81.0], [35.4, 81.0], [35.5, 82.0], [35.6, 82.0], [35.7, 82.0], [35.8, 83.0], [35.9, 83.0], [36.0, 83.0], [36.1, 83.0], [36.2, 84.0], [36.3, 84.0], [36.4, 84.0], [36.5, 85.0], [36.6, 85.0], [36.7, 85.0], [36.8, 86.0], [36.9, 86.0], [37.0, 86.0], [37.1, 87.0], [37.2, 87.0], [37.3, 87.0], [37.4, 87.0], [37.5, 88.0], [37.6, 88.0], [37.7, 89.0], [37.8, 90.0], [37.9, 90.0], [38.0, 91.0], [38.1, 91.0], [38.2, 92.0], [38.3, 92.0], [38.4, 93.0], [38.5, 94.0], [38.6, 94.0], [38.7, 96.0], [38.8, 96.0], [38.9, 96.0], [39.0, 97.0], [39.1, 98.0], [39.2, 99.0], [39.3, 100.0], [39.4, 100.0], [39.5, 101.0], [39.6, 102.0], [39.7, 103.0], [39.8, 104.0], [39.9, 104.0], [40.0, 105.0], [40.1, 106.0], [40.2, 106.0], [40.3, 107.0], [40.4, 108.0], [40.5, 108.0], [40.6, 109.0], [40.7, 109.0], [40.8, 110.0], [40.9, 110.0], [41.0, 111.0], [41.1, 112.0], [41.2, 113.0], [41.3, 114.0], [41.4, 114.0], [41.5, 114.0], [41.6, 115.0], [41.7, 116.0], [41.8, 116.0], [41.9, 116.0], [42.0, 117.0], [42.1, 117.0], [42.2, 118.0], [42.3, 118.0], [42.4, 119.0], [42.5, 120.0], [42.6, 121.0], [42.7, 122.0], [42.8, 122.0], [42.9, 123.0], [43.0, 123.0], [43.1, 124.0], [43.2, 124.0], [43.3, 125.0], [43.4, 125.0], [43.5, 125.0], [43.6, 127.0], [43.7, 127.0], [43.8, 128.0], [43.9, 129.0], [44.0, 129.0], [44.1, 129.0], [44.2, 130.0], [44.3, 130.0], [44.4, 131.0], [44.5, 131.0], [44.6, 131.0], [44.7, 132.0], [44.8, 133.0], [44.9, 134.0], [45.0, 134.0], [45.1, 135.0], [45.2, 136.0], [45.3, 136.0], [45.4, 137.0], [45.5, 138.0], [45.6, 138.0], [45.7, 139.0], [45.8, 139.0], [45.9, 140.0], [46.0, 141.0], [46.1, 142.0], [46.2, 142.0], [46.3, 143.0], [46.4, 144.0], [46.5, 145.0], [46.6, 145.0], [46.7, 146.0], [46.8, 147.0], [46.9, 147.0], [47.0, 148.0], [47.1, 149.0], [47.2, 150.0], [47.3, 151.0], [47.4, 151.0], [47.5, 152.0], [47.6, 153.0], [47.7, 154.0], [47.8, 155.0], [47.9, 156.0], [48.0, 157.0], [48.1, 159.0], [48.2, 160.0], [48.3, 160.0], [48.4, 161.0], [48.5, 162.0], [48.6, 163.0], [48.7, 163.0], [48.8, 164.0], [48.9, 165.0], [49.0, 166.0], [49.1, 166.0], [49.2, 167.0], [49.3, 168.0], [49.4, 168.0], [49.5, 169.0], [49.6, 169.0], [49.7, 170.0], [49.8, 171.0], [49.9, 172.0], [50.0, 173.0], [50.1, 174.0], [50.2, 175.0], [50.3, 176.0], [50.4, 177.0], [50.5, 178.0], [50.6, 178.0], [50.7, 180.0], [50.8, 181.0], [50.9, 181.0], [51.0, 182.0], [51.1, 183.0], [51.2, 185.0], [51.3, 186.0], [51.4, 186.0], [51.5, 187.0], [51.6, 188.0], [51.7, 189.0], [51.8, 189.0], [51.9, 191.0], [52.0, 191.0], [52.1, 192.0], [52.2, 193.0], [52.3, 194.0], [52.4, 195.0], [52.5, 195.0], [52.6, 196.0], [52.7, 196.0], [52.8, 197.0], [52.9, 198.0], [53.0, 198.0], [53.1, 199.0], [53.2, 199.0], [53.3, 200.0], [53.4, 200.0], [53.5, 201.0], [53.6, 201.0], [53.7, 202.0], [53.8, 203.0], [53.9, 204.0], [54.0, 204.0], [54.1, 205.0], [54.2, 206.0], [54.3, 207.0], [54.4, 207.0], [54.5, 208.0], [54.6, 208.0], [54.7, 209.0], [54.8, 210.0], [54.9, 211.0], [55.0, 212.0], [55.1, 212.0], [55.2, 213.0], [55.3, 214.0], [55.4, 215.0], [55.5, 215.0], [55.6, 216.0], [55.7, 217.0], [55.8, 218.0], [55.9, 218.0], [56.0, 219.0], [56.1, 220.0], [56.2, 220.0], [56.3, 221.0], [56.4, 222.0], [56.5, 223.0], [56.6, 224.0], [56.7, 226.0], [56.8, 226.0], [56.9, 227.0], [57.0, 228.0], [57.1, 229.0], [57.2, 230.0], [57.3, 230.0], [57.4, 231.0], [57.5, 232.0], [57.6, 233.0], [57.7, 234.0], [57.8, 235.0], [57.9, 235.0], [58.0, 236.0], [58.1, 237.0], [58.2, 238.0], [58.3, 239.0], [58.4, 240.0], [58.5, 241.0], [58.6, 242.0], [58.7, 243.0], [58.8, 244.0], [58.9, 245.0], [59.0, 246.0], [59.1, 246.0], [59.2, 247.0], [59.3, 248.0], [59.4, 249.0], [59.5, 250.0], [59.6, 251.0], [59.7, 251.0], [59.8, 252.0], [59.9, 253.0], [60.0, 255.0], [60.1, 257.0], [60.2, 257.0], [60.3, 258.0], [60.4, 258.0], [60.5, 259.0], [60.6, 260.0], [60.7, 261.0], [60.8, 261.0], [60.9, 262.0], [61.0, 263.0], [61.1, 263.0], [61.2, 264.0], [61.3, 265.0], [61.4, 266.0], [61.5, 267.0], [61.6, 269.0], [61.7, 270.0], [61.8, 271.0], [61.9, 272.0], [62.0, 272.0], [62.1, 273.0], [62.2, 274.0], [62.3, 276.0], [62.4, 277.0], [62.5, 277.0], [62.6, 278.0], [62.7, 279.0], [62.8, 280.0], [62.9, 281.0], [63.0, 281.0], [63.1, 283.0], [63.2, 283.0], [63.3, 284.0], [63.4, 285.0], [63.5, 287.0], [63.6, 288.0], [63.7, 289.0], [63.8, 290.0], [63.9, 291.0], [64.0, 293.0], [64.1, 295.0], [64.2, 295.0], [64.3, 297.0], [64.4, 299.0], [64.5, 300.0], [64.6, 301.0], [64.7, 303.0], [64.8, 304.0], [64.9, 305.0], [65.0, 306.0], [65.1, 309.0], [65.2, 310.0], [65.3, 311.0], [65.4, 313.0], [65.5, 314.0], [65.6, 315.0], [65.7, 317.0], [65.8, 318.0], [65.9, 319.0], [66.0, 321.0], [66.1, 322.0], [66.2, 324.0], [66.3, 324.0], [66.4, 325.0], [66.5, 326.0], [66.6, 328.0], [66.7, 329.0], [66.8, 331.0], [66.9, 333.0], [67.0, 335.0], [67.1, 337.0], [67.2, 337.0], [67.3, 337.0], [67.4, 338.0], [67.5, 341.0], [67.6, 342.0], [67.7, 344.0], [67.8, 346.0], [67.9, 347.0], [68.0, 347.0], [68.1, 348.0], [68.2, 349.0], [68.3, 350.0], [68.4, 352.0], [68.5, 353.0], [68.6, 353.0], [68.7, 354.0], [68.8, 356.0], [68.9, 359.0], [69.0, 360.0], [69.1, 363.0], [69.2, 365.0], [69.3, 366.0], [69.4, 367.0], [69.5, 368.0], [69.6, 370.0], [69.7, 371.0], [69.8, 372.0], [69.9, 374.0], [70.0, 375.0], [70.1, 376.0], [70.2, 379.0], [70.3, 380.0], [70.4, 381.0], [70.5, 382.0], [70.6, 384.0], [70.7, 386.0], [70.8, 387.0], [70.9, 388.0], [71.0, 389.0], [71.1, 390.0], [71.2, 391.0], [71.3, 392.0], [71.4, 393.0], [71.5, 394.0], [71.6, 397.0], [71.7, 398.0], [71.8, 400.0], [71.9, 401.0], [72.0, 402.0], [72.1, 404.0], [72.2, 404.0], [72.3, 406.0], [72.4, 408.0], [72.5, 411.0], [72.6, 412.0], [72.7, 413.0], [72.8, 415.0], [72.9, 416.0], [73.0, 418.0], [73.1, 419.0], [73.2, 421.0], [73.3, 421.0], [73.4, 423.0], [73.5, 425.0], [73.6, 426.0], [73.7, 427.0], [73.8, 429.0], [73.9, 430.0], [74.0, 432.0], [74.1, 432.0], [74.2, 434.0], [74.3, 435.0], [74.4, 436.0], [74.5, 437.0], [74.6, 439.0], [74.7, 440.0], [74.8, 442.0], [74.9, 445.0], [75.0, 445.0], [75.1, 446.0], [75.2, 447.0], [75.3, 449.0], [75.4, 451.0], [75.5, 452.0], [75.6, 454.0], [75.7, 455.0], [75.8, 456.0], [75.9, 458.0], [76.0, 460.0], [76.1, 462.0], [76.2, 463.0], [76.3, 466.0], [76.4, 467.0], [76.5, 468.0], [76.6, 470.0], [76.7, 472.0], [76.8, 473.0], [76.9, 474.0], [77.0, 475.0], [77.1, 476.0], [77.2, 477.0], [77.3, 480.0], [77.4, 483.0], [77.5, 484.0], [77.6, 485.0], [77.7, 488.0], [77.8, 489.0], [77.9, 490.0], [78.0, 492.0], [78.1, 492.0], [78.2, 494.0], [78.3, 496.0], [78.4, 497.0], [78.5, 499.0], [78.6, 501.0], [78.7, 502.0], [78.8, 503.0], [78.9, 505.0], [79.0, 507.0], [79.1, 508.0], [79.2, 511.0], [79.3, 512.0], [79.4, 514.0], [79.5, 515.0], [79.6, 517.0], [79.7, 519.0], [79.8, 520.0], [79.9, 522.0], [80.0, 525.0], [80.1, 526.0], [80.2, 530.0], [80.3, 531.0], [80.4, 534.0], [80.5, 536.0], [80.6, 538.0], [80.7, 540.0], [80.8, 543.0], [80.9, 544.0], [81.0, 546.0], [81.1, 548.0], [81.2, 550.0], [81.3, 553.0], [81.4, 554.0], [81.5, 555.0], [81.6, 557.0], [81.7, 558.0], [81.8, 559.0], [81.9, 561.0], [82.0, 562.0], [82.1, 564.0], [82.2, 565.0], [82.3, 567.0], [82.4, 569.0], [82.5, 571.0], [82.6, 573.0], [82.7, 575.0], [82.8, 577.0], [82.9, 579.0], [83.0, 581.0], [83.1, 582.0], [83.2, 584.0], [83.3, 586.0], [83.4, 588.0], [83.5, 590.0], [83.6, 592.0], [83.7, 593.0], [83.8, 594.0], [83.9, 598.0], [84.0, 599.0], [84.1, 600.0], [84.2, 601.0], [84.3, 603.0], [84.4, 606.0], [84.5, 607.0], [84.6, 609.0], [84.7, 611.0], [84.8, 612.0], [84.9, 615.0], [85.0, 618.0], [85.1, 622.0], [85.2, 624.0], [85.3, 626.0], [85.4, 627.0], [85.5, 631.0], [85.6, 633.0], [85.7, 635.0], [85.8, 637.0], [85.9, 639.0], [86.0, 641.0], [86.1, 644.0], [86.2, 647.0], [86.3, 650.0], [86.4, 653.0], [86.5, 654.0], [86.6, 656.0], [86.7, 661.0], [86.8, 663.0], [86.9, 665.0], [87.0, 667.0], [87.1, 667.0], [87.2, 669.0], [87.3, 673.0], [87.4, 675.0], [87.5, 676.0], [87.6, 677.0], [87.7, 679.0], [87.8, 684.0], [87.9, 686.0], [88.0, 687.0], [88.1, 690.0], [88.2, 695.0], [88.3, 697.0], [88.4, 699.0], [88.5, 702.0], [88.6, 705.0], [88.7, 708.0], [88.8, 713.0], [88.9, 716.0], [89.0, 720.0], [89.1, 721.0], [89.2, 723.0], [89.3, 727.0], [89.4, 731.0], [89.5, 734.0], [89.6, 738.0], [89.7, 740.0], [89.8, 742.0], [89.9, 746.0], [90.0, 748.0], [90.1, 755.0], [90.2, 756.0], [90.3, 760.0], [90.4, 762.0], [90.5, 765.0], [90.6, 770.0], [90.7, 775.0], [90.8, 778.0], [90.9, 780.0], [91.0, 783.0], [91.1, 785.0], [91.2, 790.0], [91.3, 792.0], [91.4, 795.0], [91.5, 803.0], [91.6, 809.0], [91.7, 812.0], [91.8, 815.0], [91.9, 819.0], [92.0, 825.0], [92.1, 830.0], [92.2, 833.0], [92.3, 837.0], [92.4, 839.0], [92.5, 846.0], [92.6, 850.0], [92.7, 855.0], [92.8, 858.0], [92.9, 863.0], [93.0, 869.0], [93.1, 881.0], [93.2, 887.0], [93.3, 892.0], [93.4, 897.0], [93.5, 903.0], [93.6, 908.0], [93.7, 915.0], [93.8, 922.0], [93.9, 924.0], [94.0, 934.0], [94.1, 941.0], [94.2, 946.0], [94.3, 950.0], [94.4, 954.0], [94.5, 961.0], [94.6, 966.0], [94.7, 972.0], [94.8, 977.0], [94.9, 985.0], [95.0, 993.0], [95.1, 999.0], [95.2, 1004.0], [95.3, 1007.0], [95.4, 1010.0], [95.5, 1019.0], [95.6, 1023.0], [95.7, 1035.0], [95.8, 1042.0], [95.9, 1046.0], [96.0, 1055.0], [96.1, 1062.0], [96.2, 1065.0], [96.3, 1075.0], [96.4, 1087.0], [96.5, 1097.0], [96.6, 1107.0], [96.7, 1124.0], [96.8, 1137.0], [96.9, 1149.0], [97.0, 1169.0], [97.1, 1191.0], [97.2, 1201.0], [97.3, 1210.0], [97.4, 1225.0], [97.5, 1245.0], [97.6, 1264.0], [97.7, 1277.0], [97.8, 1292.0], [97.9, 1299.0], [98.0, 1312.0], [98.1, 1334.0], [98.2, 1351.0], [98.3, 1373.0], [98.4, 1413.0], [98.5, 1422.0], [98.6, 1435.0], [98.7, 1478.0], [98.8, 1506.0], [98.9, 1550.0], [99.0, 1604.0], [99.1, 1647.0], [99.2, 1746.0], [99.3, 1841.0], [99.4, 1893.0], [99.5, 1948.0], [99.6, 1984.0], [99.7, 2020.0], [99.8, 2277.0], [99.9, 2963.0], [100.0, 3293.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 2070.0, "series": [{"data": [[0.0, 2070.0], [600.0, 229.0], [700.0, 162.0], [800.0, 103.0], [900.0, 88.0], [1000.0, 76.0], [1100.0, 32.0], [1200.0, 40.0], [1300.0, 23.0], [1400.0, 23.0], [1500.0, 11.0], [100.0, 736.0], [1600.0, 9.0], [1700.0, 5.0], [1800.0, 10.0], [1900.0, 10.0], [2000.0, 5.0], [2100.0, 2.0], [2200.0, 3.0], [2300.0, 3.0], [2900.0, 1.0], [3000.0, 1.0], [3100.0, 2.0], [200.0, 591.0], [3200.0, 2.0], [300.0, 388.0], [400.0, 356.0], [500.0, 291.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3200.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 64.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 4141.0, "series": [{"data": [[0.0, 4141.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1067.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 64.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.961406518010293, "minX": 1.60223562E12, "maxY": 10.0, "series": [{"data": [[1.60223562E12, 9.986244019138757], [1.60223574E12, 9.961406518010293], [1.60223568E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60223574E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 304.24372146118844, "minX": 1.0, "maxY": 3093.0, "series": [{"data": [[4.0, 1653.0], [8.0, 584.0], [2.0, 2963.0], [1.0, 3093.0], [9.0, 497.3333333333333], [5.0, 1125.0], [10.0, 304.24372146118844], [6.0, 1111.0], [3.0, 2020.0], [7.0, 1205.5]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.987101669195768, 307.2921092564501]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 10308.1, "minX": 1.60223562E12, "maxY": 1707762.7666666666, "series": [{"data": [[1.60223562E12, 1707762.7666666666], [1.60223574E12, 1307752.45], [1.60223568E12, 1276036.3666666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60223562E12, 14531.666666666666], [1.60223574E12, 10308.1], [1.60223568E12, 20739.783333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60223574E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 245.77239112571922, "minX": 1.60223562E12, "maxY": 368.8730703259007, "series": [{"data": [[1.60223562E12, 353.90430622009563], [1.60223574E12, 368.8730703259007], [1.60223568E12, 245.77239112571922]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60223574E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 245.53861955628585, "minX": 1.60223562E12, "maxY": 368.40394511149265, "series": [{"data": [[1.60223562E12, 353.4665071770336], [1.60223574E12, 368.40394511149265], [1.60223568E12, 245.53861955628585]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60223574E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.00771869639794168, "minX": 1.60223562E12, "maxY": 0.08253588516746414, "series": [{"data": [[1.60223562E12, 0.08253588516746414], [1.60223574E12, 0.00771869639794168], [1.60223568E12, 0.008627773212818416]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60223574E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 27.0, "minX": 1.60223562E12, "maxY": 3293.0, "series": [{"data": [[1.60223562E12, 1984.0], [1.60223574E12, 3293.0], [1.60223568E12, 2164.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60223562E12, 29.056999601125717], [1.60223574E12, 31.50299972176552], [1.60223568E12, 31.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60223562E12, 30.0], [1.60223574E12, 32.0], [1.60223568E12, 31.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60223562E12, 29.893499800562857], [1.60223574E12, 32.0], [1.60223568E12, 31.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60223562E12, 27.0], [1.60223574E12, 28.0], [1.60223568E12, 28.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60223562E12, 243.0], [1.60223574E12, 224.5], [1.60223568E12, 137.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60223574E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 42.0, "minX": 1.0, "maxY": 3093.0, "series": [{"data": [[2.0, 2491.5], [4.0, 2686.0], [5.0, 1464.5], [6.0, 1149.0], [7.0, 285.0], [8.0, 957.5], [9.0, 894.5], [10.0, 1109.5], [11.0, 810.0], [12.0, 642.0], [13.0, 669.0], [14.0, 612.5], [15.0, 534.5], [16.0, 632.0], [17.0, 548.0], [18.0, 469.5], [19.0, 381.0], [20.0, 473.5], [21.0, 454.0], [22.0, 450.5], [23.0, 352.0], [24.0, 351.5], [25.0, 375.0], [26.0, 388.5], [27.0, 272.0], [28.0, 369.0], [29.0, 251.0], [30.0, 233.5], [32.0, 238.0], [35.0, 81.0], [34.0, 212.0], [36.0, 198.0], [39.0, 204.0], [40.0, 86.0], [41.0, 148.0], [42.0, 131.5], [43.0, 80.0], [45.0, 79.0], [44.0, 166.5], [46.0, 74.0], [47.0, 131.0], [48.0, 136.5], [49.0, 198.0], [50.0, 144.0], [52.0, 151.0], [53.0, 74.0], [55.0, 166.0], [54.0, 67.5], [57.0, 75.0], [58.0, 110.0], [61.0, 156.0], [60.0, 118.0], [63.0, 97.0], [66.0, 75.0], [64.0, 42.0], [67.0, 144.0], [69.0, 141.0], [70.0, 120.0], [68.0, 66.0], [74.0, 126.5], [76.0, 86.0], [91.0, 74.0], [94.0, 70.0], [93.0, 44.0], [1.0, 3093.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 94.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 42.0, "minX": 1.0, "maxY": 3093.0, "series": [{"data": [[2.0, 2491.5], [4.0, 2685.5], [5.0, 1464.5], [6.0, 1149.0], [7.0, 284.5], [8.0, 955.5], [9.0, 891.5], [10.0, 1107.5], [11.0, 810.0], [12.0, 641.5], [13.0, 669.0], [14.0, 611.0], [15.0, 532.0], [16.0, 630.5], [17.0, 545.0], [18.0, 469.0], [19.0, 380.5], [20.0, 470.5], [21.0, 454.0], [22.0, 449.5], [23.0, 352.0], [24.0, 351.0], [25.0, 373.0], [26.0, 388.5], [27.0, 272.0], [28.0, 369.0], [29.0, 248.0], [30.0, 233.5], [32.0, 238.0], [35.0, 81.0], [34.0, 211.5], [36.0, 198.0], [39.0, 204.0], [40.0, 85.5], [41.0, 148.0], [42.0, 131.5], [43.0, 80.0], [45.0, 79.0], [44.0, 166.5], [46.0, 74.0], [47.0, 131.0], [48.0, 136.0], [49.0, 198.0], [50.0, 144.0], [52.0, 151.0], [53.0, 74.0], [55.0, 166.0], [54.0, 67.5], [57.0, 75.0], [58.0, 110.0], [61.0, 156.0], [60.0, 118.0], [63.0, 97.0], [66.0, 75.0], [64.0, 42.0], [67.0, 144.0], [69.0, 141.0], [70.0, 120.0], [68.0, 66.0], [74.0, 126.5], [76.0, 85.5], [91.0, 74.0], [94.0, 70.0], [93.0, 44.0], [1.0, 3093.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 94.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 19.266666666666666, "minX": 1.60223562E12, "maxY": 40.56666666666667, "series": [{"data": [[1.60223562E12, 28.033333333333335], [1.60223574E12, 19.266666666666666], [1.60223568E12, 40.56666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60223574E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 19.433333333333334, "minX": 1.60223562E12, "maxY": 40.56666666666667, "series": [{"data": [[1.60223562E12, 27.866666666666667], [1.60223574E12, 19.433333333333334], [1.60223568E12, 40.56666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60223574E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 19.433333333333334, "minX": 1.60223562E12, "maxY": 40.56666666666667, "series": [{"data": [[1.60223562E12, 27.866666666666667], [1.60223574E12, 19.433333333333334], [1.60223568E12, 40.56666666666667]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60223574E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 19.433333333333334, "minX": 1.60223562E12, "maxY": 40.56666666666667, "series": [{"data": [[1.60223562E12, 27.866666666666667], [1.60223574E12, 19.433333333333334], [1.60223568E12, 40.56666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60223574E12, "title": "Total Transactions Per Second"}},
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

