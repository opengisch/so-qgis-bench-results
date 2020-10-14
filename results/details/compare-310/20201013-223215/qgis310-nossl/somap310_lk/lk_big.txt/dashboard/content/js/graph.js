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
        data: {"result": {"minY": 29.0, "minX": 0.0, "maxY": 3116.0, "series": [{"data": [[0.0, 29.0], [0.1, 30.0], [0.2, 31.0], [0.3, 31.0], [0.4, 32.0], [0.5, 32.0], [0.6, 32.0], [0.7, 32.0], [0.8, 33.0], [0.9, 33.0], [1.0, 33.0], [1.1, 33.0], [1.2, 33.0], [1.3, 34.0], [1.4, 34.0], [1.5, 34.0], [1.6, 34.0], [1.7, 34.0], [1.8, 34.0], [1.9, 35.0], [2.0, 35.0], [2.1, 35.0], [2.2, 35.0], [2.3, 35.0], [2.4, 35.0], [2.5, 35.0], [2.6, 35.0], [2.7, 36.0], [2.8, 36.0], [2.9, 36.0], [3.0, 36.0], [3.1, 36.0], [3.2, 36.0], [3.3, 36.0], [3.4, 36.0], [3.5, 36.0], [3.6, 37.0], [3.7, 37.0], [3.8, 37.0], [3.9, 37.0], [4.0, 37.0], [4.1, 37.0], [4.2, 37.0], [4.3, 37.0], [4.4, 37.0], [4.5, 37.0], [4.6, 37.0], [4.7, 37.0], [4.8, 37.0], [4.9, 37.0], [5.0, 38.0], [5.1, 38.0], [5.2, 38.0], [5.3, 38.0], [5.4, 38.0], [5.5, 38.0], [5.6, 38.0], [5.7, 38.0], [5.8, 38.0], [5.9, 38.0], [6.0, 38.0], [6.1, 38.0], [6.2, 38.0], [6.3, 38.0], [6.4, 38.0], [6.5, 38.0], [6.6, 38.0], [6.7, 38.0], [6.8, 38.0], [6.9, 38.0], [7.0, 39.0], [7.1, 39.0], [7.2, 39.0], [7.3, 39.0], [7.4, 39.0], [7.5, 39.0], [7.6, 39.0], [7.7, 39.0], [7.8, 39.0], [7.9, 39.0], [8.0, 39.0], [8.1, 39.0], [8.2, 39.0], [8.3, 39.0], [8.4, 39.0], [8.5, 39.0], [8.6, 39.0], [8.7, 39.0], [8.8, 39.0], [8.9, 39.0], [9.0, 40.0], [9.1, 40.0], [9.2, 40.0], [9.3, 40.0], [9.4, 40.0], [9.5, 40.0], [9.6, 40.0], [9.7, 40.0], [9.8, 40.0], [9.9, 40.0], [10.0, 40.0], [10.1, 40.0], [10.2, 40.0], [10.3, 40.0], [10.4, 40.0], [10.5, 40.0], [10.6, 40.0], [10.7, 40.0], [10.8, 40.0], [10.9, 40.0], [11.0, 40.0], [11.1, 41.0], [11.2, 41.0], [11.3, 41.0], [11.4, 41.0], [11.5, 41.0], [11.6, 41.0], [11.7, 41.0], [11.8, 41.0], [11.9, 41.0], [12.0, 41.0], [12.1, 41.0], [12.2, 41.0], [12.3, 41.0], [12.4, 41.0], [12.5, 41.0], [12.6, 41.0], [12.7, 41.0], [12.8, 41.0], [12.9, 41.0], [13.0, 42.0], [13.1, 42.0], [13.2, 42.0], [13.3, 42.0], [13.4, 42.0], [13.5, 42.0], [13.6, 42.0], [13.7, 42.0], [13.8, 42.0], [13.9, 42.0], [14.0, 42.0], [14.1, 42.0], [14.2, 42.0], [14.3, 42.0], [14.4, 42.0], [14.5, 42.0], [14.6, 42.0], [14.7, 42.0], [14.8, 42.0], [14.9, 42.0], [15.0, 43.0], [15.1, 43.0], [15.2, 43.0], [15.3, 43.0], [15.4, 43.0], [15.5, 43.0], [15.6, 43.0], [15.7, 43.0], [15.8, 43.0], [15.9, 43.0], [16.0, 43.0], [16.1, 43.0], [16.2, 43.0], [16.3, 43.0], [16.4, 43.0], [16.5, 43.0], [16.6, 43.0], [16.7, 43.0], [16.8, 43.0], [16.9, 44.0], [17.0, 44.0], [17.1, 44.0], [17.2, 44.0], [17.3, 44.0], [17.4, 44.0], [17.5, 44.0], [17.6, 44.0], [17.7, 44.0], [17.8, 44.0], [17.9, 44.0], [18.0, 44.0], [18.1, 44.0], [18.2, 44.0], [18.3, 44.0], [18.4, 45.0], [18.5, 45.0], [18.6, 45.0], [18.7, 45.0], [18.8, 45.0], [18.9, 45.0], [19.0, 45.0], [19.1, 45.0], [19.2, 45.0], [19.3, 45.0], [19.4, 45.0], [19.5, 45.0], [19.6, 45.0], [19.7, 45.0], [19.8, 45.0], [19.9, 46.0], [20.0, 46.0], [20.1, 46.0], [20.2, 46.0], [20.3, 46.0], [20.4, 46.0], [20.5, 46.0], [20.6, 46.0], [20.7, 46.0], [20.8, 46.0], [20.9, 46.0], [21.0, 46.0], [21.1, 47.0], [21.2, 47.0], [21.3, 47.0], [21.4, 47.0], [21.5, 47.0], [21.6, 47.0], [21.7, 47.0], [21.8, 47.0], [21.9, 47.0], [22.0, 47.0], [22.1, 47.0], [22.2, 48.0], [22.3, 48.0], [22.4, 48.0], [22.5, 48.0], [22.6, 48.0], [22.7, 48.0], [22.8, 48.0], [22.9, 48.0], [23.0, 48.0], [23.1, 48.0], [23.2, 49.0], [23.3, 49.0], [23.4, 49.0], [23.5, 49.0], [23.6, 49.0], [23.7, 49.0], [23.8, 49.0], [23.9, 49.0], [24.0, 50.0], [24.1, 50.0], [24.2, 50.0], [24.3, 50.0], [24.4, 50.0], [24.5, 50.0], [24.6, 50.0], [24.7, 51.0], [24.8, 51.0], [24.9, 51.0], [25.0, 51.0], [25.1, 51.0], [25.2, 52.0], [25.3, 52.0], [25.4, 52.0], [25.5, 52.0], [25.6, 52.0], [25.7, 53.0], [25.8, 53.0], [25.9, 53.0], [26.0, 53.0], [26.1, 54.0], [26.2, 54.0], [26.3, 54.0], [26.4, 54.0], [26.5, 55.0], [26.6, 55.0], [26.7, 55.0], [26.8, 55.0], [26.9, 56.0], [27.0, 56.0], [27.1, 57.0], [27.2, 57.0], [27.3, 57.0], [27.4, 57.0], [27.5, 57.0], [27.6, 58.0], [27.7, 58.0], [27.8, 58.0], [27.9, 59.0], [28.0, 59.0], [28.1, 59.0], [28.2, 59.0], [28.3, 60.0], [28.4, 60.0], [28.5, 60.0], [28.6, 61.0], [28.7, 61.0], [28.8, 61.0], [28.9, 61.0], [29.0, 62.0], [29.1, 62.0], [29.2, 62.0], [29.3, 63.0], [29.4, 63.0], [29.5, 63.0], [29.6, 63.0], [29.7, 63.0], [29.8, 64.0], [29.9, 64.0], [30.0, 64.0], [30.1, 64.0], [30.2, 65.0], [30.3, 65.0], [30.4, 65.0], [30.5, 66.0], [30.6, 66.0], [30.7, 66.0], [30.8, 67.0], [30.9, 67.0], [31.0, 67.0], [31.1, 67.0], [31.2, 68.0], [31.3, 68.0], [31.4, 68.0], [31.5, 68.0], [31.6, 68.0], [31.7, 69.0], [31.8, 69.0], [31.9, 69.0], [32.0, 69.0], [32.1, 70.0], [32.2, 70.0], [32.3, 70.0], [32.4, 70.0], [32.5, 70.0], [32.6, 71.0], [32.7, 71.0], [32.8, 71.0], [32.9, 71.0], [33.0, 72.0], [33.1, 72.0], [33.2, 72.0], [33.3, 72.0], [33.4, 72.0], [33.5, 73.0], [33.6, 73.0], [33.7, 73.0], [33.8, 73.0], [33.9, 73.0], [34.0, 73.0], [34.1, 74.0], [34.2, 74.0], [34.3, 74.0], [34.4, 74.0], [34.5, 74.0], [34.6, 74.0], [34.7, 75.0], [34.8, 75.0], [34.9, 75.0], [35.0, 75.0], [35.1, 75.0], [35.2, 75.0], [35.3, 76.0], [35.4, 76.0], [35.5, 76.0], [35.6, 76.0], [35.7, 76.0], [35.8, 76.0], [35.9, 77.0], [36.0, 77.0], [36.1, 77.0], [36.2, 77.0], [36.3, 77.0], [36.4, 77.0], [36.5, 77.0], [36.6, 78.0], [36.7, 78.0], [36.8, 78.0], [36.9, 78.0], [37.0, 78.0], [37.1, 79.0], [37.2, 79.0], [37.3, 79.0], [37.4, 79.0], [37.5, 79.0], [37.6, 79.0], [37.7, 80.0], [37.8, 80.0], [37.9, 80.0], [38.0, 80.0], [38.1, 80.0], [38.2, 81.0], [38.3, 81.0], [38.4, 81.0], [38.5, 81.0], [38.6, 81.0], [38.7, 82.0], [38.8, 82.0], [38.9, 82.0], [39.0, 82.0], [39.1, 83.0], [39.2, 83.0], [39.3, 83.0], [39.4, 83.0], [39.5, 83.0], [39.6, 83.0], [39.7, 84.0], [39.8, 84.0], [39.9, 84.0], [40.0, 84.0], [40.1, 85.0], [40.2, 85.0], [40.3, 85.0], [40.4, 85.0], [40.5, 86.0], [40.6, 86.0], [40.7, 86.0], [40.8, 86.0], [40.9, 87.0], [41.0, 87.0], [41.1, 87.0], [41.2, 88.0], [41.3, 88.0], [41.4, 88.0], [41.5, 89.0], [41.6, 89.0], [41.7, 90.0], [41.8, 90.0], [41.9, 90.0], [42.0, 91.0], [42.1, 92.0], [42.2, 92.0], [42.3, 93.0], [42.4, 94.0], [42.5, 94.0], [42.6, 94.0], [42.7, 95.0], [42.8, 96.0], [42.9, 97.0], [43.0, 98.0], [43.1, 99.0], [43.2, 100.0], [43.3, 100.0], [43.4, 101.0], [43.5, 102.0], [43.6, 103.0], [43.7, 104.0], [43.8, 105.0], [43.9, 106.0], [44.0, 108.0], [44.1, 109.0], [44.2, 110.0], [44.3, 112.0], [44.4, 112.0], [44.5, 113.0], [44.6, 113.0], [44.7, 114.0], [44.8, 114.0], [44.9, 115.0], [45.0, 115.0], [45.1, 116.0], [45.2, 117.0], [45.3, 118.0], [45.4, 118.0], [45.5, 119.0], [45.6, 120.0], [45.7, 120.0], [45.8, 121.0], [45.9, 122.0], [46.0, 122.0], [46.1, 123.0], [46.2, 124.0], [46.3, 125.0], [46.4, 126.0], [46.5, 127.0], [46.6, 127.0], [46.7, 128.0], [46.8, 128.0], [46.9, 129.0], [47.0, 130.0], [47.1, 131.0], [47.2, 131.0], [47.3, 132.0], [47.4, 132.0], [47.5, 133.0], [47.6, 134.0], [47.7, 134.0], [47.8, 135.0], [47.9, 135.0], [48.0, 137.0], [48.1, 138.0], [48.2, 138.0], [48.3, 139.0], [48.4, 139.0], [48.5, 139.0], [48.6, 140.0], [48.7, 142.0], [48.8, 143.0], [48.9, 144.0], [49.0, 146.0], [49.1, 146.0], [49.2, 148.0], [49.3, 150.0], [49.4, 150.0], [49.5, 151.0], [49.6, 152.0], [49.7, 153.0], [49.8, 155.0], [49.9, 156.0], [50.0, 157.0], [50.1, 159.0], [50.2, 160.0], [50.3, 161.0], [50.4, 162.0], [50.5, 163.0], [50.6, 163.0], [50.7, 165.0], [50.8, 165.0], [50.9, 166.0], [51.0, 168.0], [51.1, 169.0], [51.2, 170.0], [51.3, 171.0], [51.4, 172.0], [51.5, 172.0], [51.6, 174.0], [51.7, 176.0], [51.8, 177.0], [51.9, 178.0], [52.0, 179.0], [52.1, 179.0], [52.2, 180.0], [52.3, 181.0], [52.4, 181.0], [52.5, 182.0], [52.6, 183.0], [52.7, 183.0], [52.8, 184.0], [52.9, 184.0], [53.0, 185.0], [53.1, 186.0], [53.2, 186.0], [53.3, 187.0], [53.4, 187.0], [53.5, 188.0], [53.6, 188.0], [53.7, 189.0], [53.8, 189.0], [53.9, 190.0], [54.0, 191.0], [54.1, 192.0], [54.2, 194.0], [54.3, 195.0], [54.4, 195.0], [54.5, 196.0], [54.6, 197.0], [54.7, 197.0], [54.8, 198.0], [54.9, 198.0], [55.0, 199.0], [55.1, 199.0], [55.2, 200.0], [55.3, 200.0], [55.4, 201.0], [55.5, 201.0], [55.6, 203.0], [55.7, 203.0], [55.8, 204.0], [55.9, 205.0], [56.0, 205.0], [56.1, 206.0], [56.2, 206.0], [56.3, 207.0], [56.4, 208.0], [56.5, 210.0], [56.6, 210.0], [56.7, 211.0], [56.8, 211.0], [56.9, 212.0], [57.0, 213.0], [57.1, 213.0], [57.2, 214.0], [57.3, 215.0], [57.4, 216.0], [57.5, 216.0], [57.6, 217.0], [57.7, 218.0], [57.8, 218.0], [57.9, 219.0], [58.0, 220.0], [58.1, 222.0], [58.2, 222.0], [58.3, 223.0], [58.4, 224.0], [58.5, 224.0], [58.6, 226.0], [58.7, 226.0], [58.8, 229.0], [58.9, 230.0], [59.0, 232.0], [59.1, 233.0], [59.2, 233.0], [59.3, 235.0], [59.4, 236.0], [59.5, 237.0], [59.6, 238.0], [59.7, 238.0], [59.8, 239.0], [59.9, 240.0], [60.0, 241.0], [60.1, 243.0], [60.2, 243.0], [60.3, 245.0], [60.4, 246.0], [60.5, 247.0], [60.6, 248.0], [60.7, 250.0], [60.8, 250.0], [60.9, 251.0], [61.0, 253.0], [61.1, 255.0], [61.2, 256.0], [61.3, 256.0], [61.4, 258.0], [61.5, 258.0], [61.6, 260.0], [61.7, 261.0], [61.8, 262.0], [61.9, 263.0], [62.0, 263.0], [62.1, 264.0], [62.2, 264.0], [62.3, 265.0], [62.4, 267.0], [62.5, 268.0], [62.6, 269.0], [62.7, 271.0], [62.8, 271.0], [62.9, 272.0], [63.0, 273.0], [63.1, 274.0], [63.2, 275.0], [63.3, 277.0], [63.4, 278.0], [63.5, 279.0], [63.6, 279.0], [63.7, 281.0], [63.8, 283.0], [63.9, 284.0], [64.0, 285.0], [64.1, 286.0], [64.2, 288.0], [64.3, 288.0], [64.4, 289.0], [64.5, 290.0], [64.6, 292.0], [64.7, 293.0], [64.8, 294.0], [64.9, 295.0], [65.0, 295.0], [65.1, 297.0], [65.2, 297.0], [65.3, 299.0], [65.4, 301.0], [65.5, 302.0], [65.6, 303.0], [65.7, 304.0], [65.8, 305.0], [65.9, 307.0], [66.0, 308.0], [66.1, 309.0], [66.2, 310.0], [66.3, 311.0], [66.4, 312.0], [66.5, 314.0], [66.6, 315.0], [66.7, 316.0], [66.8, 316.0], [66.9, 318.0], [67.0, 320.0], [67.1, 323.0], [67.2, 324.0], [67.3, 326.0], [67.4, 327.0], [67.5, 331.0], [67.6, 332.0], [67.7, 334.0], [67.8, 335.0], [67.9, 338.0], [68.0, 338.0], [68.1, 340.0], [68.2, 341.0], [68.3, 343.0], [68.4, 344.0], [68.5, 346.0], [68.6, 347.0], [68.7, 349.0], [68.8, 350.0], [68.9, 351.0], [69.0, 352.0], [69.1, 353.0], [69.2, 355.0], [69.3, 357.0], [69.4, 359.0], [69.5, 360.0], [69.6, 362.0], [69.7, 362.0], [69.8, 363.0], [69.9, 364.0], [70.0, 366.0], [70.1, 367.0], [70.2, 368.0], [70.3, 370.0], [70.4, 371.0], [70.5, 372.0], [70.6, 373.0], [70.7, 376.0], [70.8, 377.0], [70.9, 379.0], [71.0, 379.0], [71.1, 381.0], [71.2, 381.0], [71.3, 383.0], [71.4, 384.0], [71.5, 386.0], [71.6, 386.0], [71.7, 387.0], [71.8, 388.0], [71.9, 389.0], [72.0, 391.0], [72.1, 392.0], [72.2, 395.0], [72.3, 395.0], [72.4, 396.0], [72.5, 399.0], [72.6, 400.0], [72.7, 402.0], [72.8, 404.0], [72.9, 406.0], [73.0, 407.0], [73.1, 409.0], [73.2, 410.0], [73.3, 411.0], [73.4, 412.0], [73.5, 413.0], [73.6, 414.0], [73.7, 417.0], [73.8, 418.0], [73.9, 420.0], [74.0, 421.0], [74.1, 422.0], [74.2, 423.0], [74.3, 424.0], [74.4, 426.0], [74.5, 428.0], [74.6, 430.0], [74.7, 430.0], [74.8, 431.0], [74.9, 432.0], [75.0, 435.0], [75.1, 436.0], [75.2, 438.0], [75.3, 440.0], [75.4, 441.0], [75.5, 443.0], [75.6, 445.0], [75.7, 445.0], [75.8, 447.0], [75.9, 449.0], [76.0, 451.0], [76.1, 453.0], [76.2, 456.0], [76.3, 457.0], [76.4, 458.0], [76.5, 460.0], [76.6, 462.0], [76.7, 463.0], [76.8, 466.0], [76.9, 467.0], [77.0, 470.0], [77.1, 472.0], [77.2, 472.0], [77.3, 474.0], [77.4, 474.0], [77.5, 476.0], [77.6, 477.0], [77.7, 478.0], [77.8, 480.0], [77.9, 481.0], [78.0, 484.0], [78.1, 484.0], [78.2, 486.0], [78.3, 488.0], [78.4, 490.0], [78.5, 491.0], [78.6, 494.0], [78.7, 495.0], [78.8, 496.0], [78.9, 499.0], [79.0, 500.0], [79.1, 502.0], [79.2, 504.0], [79.3, 507.0], [79.4, 509.0], [79.5, 511.0], [79.6, 513.0], [79.7, 515.0], [79.8, 516.0], [79.9, 517.0], [80.0, 519.0], [80.1, 521.0], [80.2, 522.0], [80.3, 524.0], [80.4, 525.0], [80.5, 526.0], [80.6, 527.0], [80.7, 530.0], [80.8, 532.0], [80.9, 534.0], [81.0, 537.0], [81.1, 539.0], [81.2, 540.0], [81.3, 543.0], [81.4, 546.0], [81.5, 549.0], [81.6, 551.0], [81.7, 554.0], [81.8, 556.0], [81.9, 558.0], [82.0, 561.0], [82.1, 563.0], [82.2, 567.0], [82.3, 570.0], [82.4, 571.0], [82.5, 573.0], [82.6, 574.0], [82.7, 575.0], [82.8, 577.0], [82.9, 578.0], [83.0, 581.0], [83.1, 582.0], [83.2, 584.0], [83.3, 586.0], [83.4, 588.0], [83.5, 589.0], [83.6, 593.0], [83.7, 595.0], [83.8, 596.0], [83.9, 599.0], [84.0, 600.0], [84.1, 601.0], [84.2, 604.0], [84.3, 605.0], [84.4, 606.0], [84.5, 608.0], [84.6, 611.0], [84.7, 613.0], [84.8, 615.0], [84.9, 617.0], [85.0, 618.0], [85.1, 620.0], [85.2, 622.0], [85.3, 625.0], [85.4, 627.0], [85.5, 630.0], [85.6, 631.0], [85.7, 633.0], [85.8, 636.0], [85.9, 639.0], [86.0, 645.0], [86.1, 646.0], [86.2, 648.0], [86.3, 650.0], [86.4, 651.0], [86.5, 653.0], [86.6, 655.0], [86.7, 656.0], [86.8, 658.0], [86.9, 659.0], [87.0, 661.0], [87.1, 663.0], [87.2, 664.0], [87.3, 666.0], [87.4, 668.0], [87.5, 674.0], [87.6, 677.0], [87.7, 679.0], [87.8, 685.0], [87.9, 686.0], [88.0, 691.0], [88.1, 693.0], [88.2, 696.0], [88.3, 698.0], [88.4, 702.0], [88.5, 704.0], [88.6, 708.0], [88.7, 712.0], [88.8, 714.0], [88.9, 720.0], [89.0, 723.0], [89.1, 726.0], [89.2, 731.0], [89.3, 734.0], [89.4, 740.0], [89.5, 745.0], [89.6, 746.0], [89.7, 751.0], [89.8, 753.0], [89.9, 756.0], [90.0, 759.0], [90.1, 762.0], [90.2, 768.0], [90.3, 770.0], [90.4, 773.0], [90.5, 778.0], [90.6, 782.0], [90.7, 783.0], [90.8, 788.0], [90.9, 791.0], [91.0, 795.0], [91.1, 798.0], [91.2, 801.0], [91.3, 812.0], [91.4, 815.0], [91.5, 819.0], [91.6, 824.0], [91.7, 827.0], [91.8, 834.0], [91.9, 835.0], [92.0, 839.0], [92.1, 845.0], [92.2, 851.0], [92.3, 853.0], [92.4, 859.0], [92.5, 862.0], [92.6, 868.0], [92.7, 877.0], [92.8, 882.0], [92.9, 891.0], [93.0, 895.0], [93.1, 904.0], [93.2, 912.0], [93.3, 920.0], [93.4, 922.0], [93.5, 932.0], [93.6, 943.0], [93.7, 950.0], [93.8, 953.0], [93.9, 957.0], [94.0, 964.0], [94.1, 970.0], [94.2, 977.0], [94.3, 981.0], [94.4, 990.0], [94.5, 997.0], [94.6, 1006.0], [94.7, 1014.0], [94.8, 1028.0], [94.9, 1034.0], [95.0, 1041.0], [95.1, 1054.0], [95.2, 1061.0], [95.3, 1078.0], [95.4, 1086.0], [95.5, 1095.0], [95.6, 1099.0], [95.7, 1105.0], [95.8, 1115.0], [95.9, 1127.0], [96.0, 1140.0], [96.1, 1166.0], [96.2, 1175.0], [96.3, 1197.0], [96.4, 1206.0], [96.5, 1215.0], [96.6, 1228.0], [96.7, 1244.0], [96.8, 1258.0], [96.9, 1279.0], [97.0, 1288.0], [97.1, 1306.0], [97.2, 1335.0], [97.3, 1345.0], [97.4, 1371.0], [97.5, 1398.0], [97.6, 1416.0], [97.7, 1445.0], [97.8, 1473.0], [97.9, 1500.0], [98.0, 1524.0], [98.1, 1532.0], [98.2, 1557.0], [98.3, 1571.0], [98.4, 1608.0], [98.5, 1648.0], [98.6, 1675.0], [98.7, 1703.0], [98.8, 1746.0], [98.9, 1774.0], [99.0, 1804.0], [99.1, 1857.0], [99.2, 1892.0], [99.3, 1966.0], [99.4, 2004.0], [99.5, 2024.0], [99.6, 2049.0], [99.7, 2267.0], [99.8, 2426.0], [99.9, 2604.0], [100.0, 3116.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 2270.0, "series": [{"data": [[0.0, 2270.0], [600.0, 232.0], [700.0, 146.0], [800.0, 101.0], [900.0, 76.0], [1000.0, 59.0], [1100.0, 40.0], [1200.0, 36.0], [1300.0, 23.0], [1400.0, 20.0], [1500.0, 26.0], [100.0, 631.0], [1600.0, 15.0], [1700.0, 16.0], [1800.0, 12.0], [1900.0, 10.0], [2000.0, 12.0], [2100.0, 4.0], [2300.0, 4.0], [2200.0, 1.0], [2400.0, 2.0], [2500.0, 3.0], [2600.0, 2.0], [2700.0, 1.0], [2800.0, 1.0], [3000.0, 1.0], [3100.0, 1.0], [200.0, 538.0], [300.0, 380.0], [400.0, 336.0], [500.0, 263.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3100.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 110.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 4159.0, "series": [{"data": [[0.0, 4159.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 993.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 110.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.88431876606684, "minX": 1.60263192E12, "maxY": 10.0, "series": [{"data": [[1.60263204E12, 10.0], [1.6026321E12, 9.88431876606684], [1.60263192E12, 9.963589076723022], [1.60263198E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6026321E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 304.40209723546207, "minX": 1.0, "maxY": 2854.0, "series": [{"data": [[4.0, 1571.5], [8.0, 1267.5], [2.0, 2084.0], [1.0, 2854.0], [9.0, 1113.3333333333335], [5.0, 627.0], [10.0, 304.40209723546207], [3.0, 1072.0], [6.0, 953.0], [7.0, 794.6666666666666]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.986126947928506, 307.35081717977937]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 3462.9, "minX": 1.60263192E12, "maxY": 1674899.2166666666, "series": [{"data": [[1.60263204E12, 1593378.2666666666], [1.6026321E12, 296562.76666666666], [1.60263192E12, 686275.75], [1.60263198E12, 1674899.2166666666]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60263204E12, 17807.95], [1.6026321E12, 3462.9], [1.60263192E12, 6608.566666666667], [1.60263198E12, 17611.533333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6026321E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 289.61778846153845, "minX": 1.60263192E12, "maxY": 373.8997429305911, "series": [{"data": [[1.60263204E12, 296.2895256916997], [1.6026321E12, 373.8997429305911], [1.60263192E12, 350.7646293888168], [1.60263198E12, 289.61778846153845]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6026321E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 289.20000000000005, "minX": 1.60263192E12, "maxY": 373.5424164524418, "series": [{"data": [[1.60263204E12, 295.91798418972354], [1.6026321E12, 373.5424164524418], [1.60263192E12, 350.2821846553971], [1.60263198E12, 289.20000000000005]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6026321E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.009387351778656135, "minX": 1.60263192E12, "maxY": 0.11833550065019506, "series": [{"data": [[1.60263204E12, 0.009387351778656135], [1.6026321E12, 0.010282776349614392], [1.60263192E12, 0.11833550065019506], [1.60263198E12, 0.012980769230769193]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6026321E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 29.0, "minX": 1.60263192E12, "maxY": 3116.0, "series": [{"data": [[1.60263204E12, 2749.0], [1.6026321E12, 3116.0], [1.60263192E12, 1761.0], [1.60263198E12, 2604.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60263204E12, 33.0], [1.6026321E12, 32.509999907016756], [1.60263192E12, 34.92999981641769], [1.60263198E12, 32.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60263204E12, 33.0], [1.6026321E12, 32.8610000371933], [1.60263192E12, 35.0], [1.60263198E12, 33.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60263204E12, 33.0], [1.6026321E12, 32.70499995350838], [1.60263192E12, 35.0], [1.60263198E12, 32.769499751925466]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60263204E12, 30.0], [1.6026321E12, 31.0], [1.60263192E12, 31.0], [1.60263198E12, 29.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60263204E12, 152.5], [1.6026321E12, 157.0], [1.60263192E12, 264.0], [1.60263198E12, 137.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6026321E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 44.0, "minX": 1.0, "maxY": 1567.0, "series": [{"data": [[4.0, 1567.0], [5.0, 1375.5], [7.0, 1034.0], [8.0, 799.0], [9.0, 1006.0], [10.0, 672.5], [11.0, 668.0], [12.0, 680.5], [14.0, 587.5], [15.0, 689.0], [16.0, 468.5], [17.0, 479.0], [18.0, 565.5], [19.0, 430.5], [20.0, 478.0], [21.0, 359.5], [22.0, 354.5], [23.0, 303.0], [24.0, 294.0], [25.0, 86.0], [26.0, 299.0], [27.0, 265.0], [29.0, 221.0], [30.0, 273.0], [31.0, 214.0], [32.0, 239.5], [33.0, 80.0], [35.0, 86.5], [34.0, 133.0], [37.0, 217.0], [36.0, 73.0], [38.0, 141.0], [39.0, 119.0], [41.0, 79.5], [40.0, 86.5], [42.0, 79.0], [43.0, 72.5], [44.0, 75.5], [45.0, 114.0], [47.0, 179.0], [48.0, 93.0], [49.0, 100.0], [50.0, 64.0], [53.0, 72.0], [55.0, 108.0], [54.0, 88.0], [57.0, 75.0], [58.0, 70.0], [59.0, 44.0], [61.0, 109.5], [62.0, 81.0], [67.0, 109.5], [64.0, 114.0], [65.0, 76.0], [68.0, 131.5], [71.0, 76.0], [72.0, 121.5], [77.0, 71.0], [78.0, 67.5], [82.0, 47.5], [84.0, 116.5], [89.0, 71.0], [105.0, 54.0], [1.0, 1494.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 105.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 44.0, "minX": 1.0, "maxY": 1565.5, "series": [{"data": [[4.0, 1565.5], [5.0, 1374.5], [7.0, 1033.0], [8.0, 797.5], [9.0, 1006.0], [10.0, 671.0], [11.0, 667.0], [12.0, 680.5], [14.0, 586.0], [15.0, 689.0], [16.0, 467.0], [17.0, 478.5], [18.0, 564.0], [19.0, 430.5], [20.0, 477.5], [21.0, 359.0], [22.0, 354.0], [23.0, 303.0], [24.0, 293.5], [25.0, 86.0], [26.0, 297.5], [27.0, 263.5], [29.0, 220.0], [30.0, 271.5], [31.0, 213.0], [32.0, 239.5], [33.0, 79.5], [35.0, 86.5], [34.0, 133.0], [37.0, 216.0], [36.0, 73.0], [38.0, 140.0], [39.0, 119.0], [41.0, 79.5], [40.0, 86.5], [42.0, 79.0], [43.0, 72.5], [44.0, 75.5], [45.0, 114.0], [47.0, 179.0], [48.0, 93.0], [49.0, 99.0], [50.0, 64.0], [53.0, 72.0], [55.0, 108.0], [54.0, 88.0], [57.0, 75.0], [58.0, 70.0], [59.0, 44.0], [61.0, 109.5], [62.0, 81.0], [67.0, 109.0], [64.0, 113.5], [65.0, 76.0], [68.0, 131.0], [71.0, 76.0], [72.0, 121.5], [77.0, 70.5], [78.0, 67.5], [82.0, 47.5], [84.0, 116.5], [89.0, 71.0], [105.0, 54.0], [1.0, 1492.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 105.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 6.316666666666666, "minX": 1.60263192E12, "maxY": 34.666666666666664, "series": [{"data": [[1.60263204E12, 33.733333333333334], [1.6026321E12, 6.316666666666666], [1.60263192E12, 12.983333333333333], [1.60263198E12, 34.666666666666664]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6026321E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 6.483333333333333, "minX": 1.60263192E12, "maxY": 34.666666666666664, "series": [{"data": [[1.60263204E12, 33.733333333333334], [1.6026321E12, 6.483333333333333], [1.60263192E12, 12.816666666666666], [1.60263198E12, 34.666666666666664]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6026321E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 6.483333333333333, "minX": 1.60263192E12, "maxY": 34.666666666666664, "series": [{"data": [[1.60263204E12, 33.733333333333334], [1.6026321E12, 6.483333333333333], [1.60263192E12, 12.816666666666666], [1.60263198E12, 34.666666666666664]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6026321E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 6.483333333333333, "minX": 1.60263192E12, "maxY": 34.666666666666664, "series": [{"data": [[1.60263204E12, 33.733333333333334], [1.6026321E12, 6.483333333333333], [1.60263192E12, 12.816666666666666], [1.60263198E12, 34.666666666666664]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6026321E12, "title": "Total Transactions Per Second"}},
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

