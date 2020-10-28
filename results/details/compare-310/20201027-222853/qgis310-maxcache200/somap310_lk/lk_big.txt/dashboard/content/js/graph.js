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
        data: {"result": {"minY": 30.0, "minX": 0.0, "maxY": 2457.0, "series": [{"data": [[0.0, 30.0], [0.1, 31.0], [0.2, 31.0], [0.3, 32.0], [0.4, 32.0], [0.5, 33.0], [0.6, 33.0], [0.7, 33.0], [0.8, 34.0], [0.9, 34.0], [1.0, 35.0], [1.1, 35.0], [1.2, 35.0], [1.3, 35.0], [1.4, 35.0], [1.5, 36.0], [1.6, 36.0], [1.7, 36.0], [1.8, 36.0], [1.9, 37.0], [2.0, 37.0], [2.1, 37.0], [2.2, 37.0], [2.3, 37.0], [2.4, 37.0], [2.5, 37.0], [2.6, 37.0], [2.7, 37.0], [2.8, 37.0], [2.9, 38.0], [3.0, 38.0], [3.1, 38.0], [3.2, 38.0], [3.3, 38.0], [3.4, 38.0], [3.5, 38.0], [3.6, 38.0], [3.7, 38.0], [3.8, 38.0], [3.9, 38.0], [4.0, 38.0], [4.1, 39.0], [4.2, 39.0], [4.3, 39.0], [4.4, 39.0], [4.5, 39.0], [4.6, 39.0], [4.7, 39.0], [4.8, 39.0], [4.9, 39.0], [5.0, 39.0], [5.1, 39.0], [5.2, 39.0], [5.3, 39.0], [5.4, 39.0], [5.5, 40.0], [5.6, 40.0], [5.7, 40.0], [5.8, 40.0], [5.9, 40.0], [6.0, 40.0], [6.1, 40.0], [6.2, 40.0], [6.3, 40.0], [6.4, 40.0], [6.5, 40.0], [6.6, 40.0], [6.7, 40.0], [6.8, 40.0], [6.9, 41.0], [7.0, 41.0], [7.1, 41.0], [7.2, 41.0], [7.3, 41.0], [7.4, 41.0], [7.5, 41.0], [7.6, 41.0], [7.7, 41.0], [7.8, 41.0], [7.9, 41.0], [8.0, 41.0], [8.1, 42.0], [8.2, 42.0], [8.3, 42.0], [8.4, 42.0], [8.5, 42.0], [8.6, 42.0], [8.7, 42.0], [8.8, 42.0], [8.9, 42.0], [9.0, 42.0], [9.1, 42.0], [9.2, 43.0], [9.3, 43.0], [9.4, 43.0], [9.5, 43.0], [9.6, 43.0], [9.7, 43.0], [9.8, 43.0], [9.9, 43.0], [10.0, 43.0], [10.1, 43.0], [10.2, 43.0], [10.3, 43.0], [10.4, 44.0], [10.5, 44.0], [10.6, 44.0], [10.7, 44.0], [10.8, 44.0], [10.9, 44.0], [11.0, 44.0], [11.1, 44.0], [11.2, 44.0], [11.3, 44.0], [11.4, 45.0], [11.5, 45.0], [11.6, 45.0], [11.7, 45.0], [11.8, 45.0], [11.9, 45.0], [12.0, 45.0], [12.1, 45.0], [12.2, 46.0], [12.3, 46.0], [12.4, 46.0], [12.5, 46.0], [12.6, 46.0], [12.7, 46.0], [12.8, 46.0], [12.9, 46.0], [13.0, 46.0], [13.1, 47.0], [13.2, 47.0], [13.3, 47.0], [13.4, 47.0], [13.5, 47.0], [13.6, 47.0], [13.7, 47.0], [13.8, 48.0], [13.9, 48.0], [14.0, 48.0], [14.1, 48.0], [14.2, 48.0], [14.3, 48.0], [14.4, 49.0], [14.5, 49.0], [14.6, 49.0], [14.7, 49.0], [14.8, 49.0], [14.9, 49.0], [15.0, 50.0], [15.1, 50.0], [15.2, 50.0], [15.3, 50.0], [15.4, 51.0], [15.5, 51.0], [15.6, 51.0], [15.7, 51.0], [15.8, 52.0], [15.9, 52.0], [16.0, 52.0], [16.1, 53.0], [16.2, 53.0], [16.3, 53.0], [16.4, 54.0], [16.5, 54.0], [16.6, 54.0], [16.7, 55.0], [16.8, 55.0], [16.9, 55.0], [17.0, 55.0], [17.1, 56.0], [17.2, 56.0], [17.3, 56.0], [17.4, 57.0], [17.5, 57.0], [17.6, 58.0], [17.7, 58.0], [17.8, 58.0], [17.9, 59.0], [18.0, 59.0], [18.1, 59.0], [18.2, 60.0], [18.3, 60.0], [18.4, 60.0], [18.5, 60.0], [18.6, 61.0], [18.7, 61.0], [18.8, 61.0], [18.9, 61.0], [19.0, 62.0], [19.1, 62.0], [19.2, 62.0], [19.3, 62.0], [19.4, 63.0], [19.5, 63.0], [19.6, 64.0], [19.7, 64.0], [19.8, 64.0], [19.9, 64.0], [20.0, 65.0], [20.1, 65.0], [20.2, 65.0], [20.3, 65.0], [20.4, 66.0], [20.5, 66.0], [20.6, 66.0], [20.7, 66.0], [20.8, 66.0], [20.9, 67.0], [21.0, 67.0], [21.1, 67.0], [21.2, 67.0], [21.3, 68.0], [21.4, 68.0], [21.5, 68.0], [21.6, 68.0], [21.7, 68.0], [21.8, 69.0], [21.9, 69.0], [22.0, 69.0], [22.1, 69.0], [22.2, 69.0], [22.3, 70.0], [22.4, 70.0], [22.5, 70.0], [22.6, 70.0], [22.7, 70.0], [22.8, 71.0], [22.9, 71.0], [23.0, 71.0], [23.1, 71.0], [23.2, 71.0], [23.3, 72.0], [23.4, 72.0], [23.5, 72.0], [23.6, 72.0], [23.7, 72.0], [23.8, 72.0], [23.9, 72.0], [24.0, 72.0], [24.1, 72.0], [24.2, 73.0], [24.3, 73.0], [24.4, 73.0], [24.5, 73.0], [24.6, 73.0], [24.7, 74.0], [24.8, 74.0], [24.9, 74.0], [25.0, 74.0], [25.1, 74.0], [25.2, 74.0], [25.3, 74.0], [25.4, 74.0], [25.5, 75.0], [25.6, 75.0], [25.7, 75.0], [25.8, 75.0], [25.9, 75.0], [26.0, 75.0], [26.1, 75.0], [26.2, 76.0], [26.3, 76.0], [26.4, 76.0], [26.5, 76.0], [26.6, 76.0], [26.7, 76.0], [26.8, 76.0], [26.9, 77.0], [27.0, 77.0], [27.1, 77.0], [27.2, 77.0], [27.3, 77.0], [27.4, 77.0], [27.5, 77.0], [27.6, 77.0], [27.7, 78.0], [27.8, 78.0], [27.9, 78.0], [28.0, 78.0], [28.1, 78.0], [28.2, 78.0], [28.3, 78.0], [28.4, 78.0], [28.5, 78.0], [28.6, 79.0], [28.7, 79.0], [28.8, 79.0], [28.9, 79.0], [29.0, 79.0], [29.1, 79.0], [29.2, 79.0], [29.3, 79.0], [29.4, 80.0], [29.5, 80.0], [29.6, 80.0], [29.7, 80.0], [29.8, 80.0], [29.9, 80.0], [30.0, 81.0], [30.1, 81.0], [30.2, 81.0], [30.3, 81.0], [30.4, 81.0], [30.5, 81.0], [30.6, 81.0], [30.7, 82.0], [30.8, 82.0], [30.9, 82.0], [31.0, 82.0], [31.1, 82.0], [31.2, 82.0], [31.3, 82.0], [31.4, 83.0], [31.5, 83.0], [31.6, 83.0], [31.7, 83.0], [31.8, 83.0], [31.9, 83.0], [32.0, 83.0], [32.1, 83.0], [32.2, 84.0], [32.3, 84.0], [32.4, 84.0], [32.5, 84.0], [32.6, 84.0], [32.7, 84.0], [32.8, 84.0], [32.9, 85.0], [33.0, 85.0], [33.1, 85.0], [33.2, 85.0], [33.3, 85.0], [33.4, 85.0], [33.5, 86.0], [33.6, 86.0], [33.7, 86.0], [33.8, 86.0], [33.9, 86.0], [34.0, 87.0], [34.1, 87.0], [34.2, 87.0], [34.3, 87.0], [34.4, 87.0], [34.5, 88.0], [34.6, 88.0], [34.7, 88.0], [34.8, 88.0], [34.9, 88.0], [35.0, 88.0], [35.1, 88.0], [35.2, 89.0], [35.3, 89.0], [35.4, 89.0], [35.5, 89.0], [35.6, 89.0], [35.7, 89.0], [35.8, 90.0], [35.9, 90.0], [36.0, 90.0], [36.1, 91.0], [36.2, 91.0], [36.3, 91.0], [36.4, 91.0], [36.5, 92.0], [36.6, 92.0], [36.7, 92.0], [36.8, 93.0], [36.9, 93.0], [37.0, 93.0], [37.1, 93.0], [37.2, 93.0], [37.3, 94.0], [37.4, 94.0], [37.5, 94.0], [37.6, 94.0], [37.7, 95.0], [37.8, 95.0], [37.9, 96.0], [38.0, 96.0], [38.1, 96.0], [38.2, 97.0], [38.3, 97.0], [38.4, 98.0], [38.5, 98.0], [38.6, 99.0], [38.7, 99.0], [38.8, 100.0], [38.9, 100.0], [39.0, 100.0], [39.1, 101.0], [39.2, 101.0], [39.3, 102.0], [39.4, 103.0], [39.5, 103.0], [39.6, 103.0], [39.7, 104.0], [39.8, 105.0], [39.9, 105.0], [40.0, 106.0], [40.1, 106.0], [40.2, 106.0], [40.3, 107.0], [40.4, 107.0], [40.5, 108.0], [40.6, 108.0], [40.7, 109.0], [40.8, 109.0], [40.9, 110.0], [41.0, 111.0], [41.1, 111.0], [41.2, 112.0], [41.3, 112.0], [41.4, 113.0], [41.5, 114.0], [41.6, 114.0], [41.7, 115.0], [41.8, 115.0], [41.9, 115.0], [42.0, 116.0], [42.1, 116.0], [42.2, 117.0], [42.3, 117.0], [42.4, 118.0], [42.5, 118.0], [42.6, 119.0], [42.7, 119.0], [42.8, 120.0], [42.9, 120.0], [43.0, 121.0], [43.1, 121.0], [43.2, 121.0], [43.3, 122.0], [43.4, 122.0], [43.5, 123.0], [43.6, 123.0], [43.7, 124.0], [43.8, 124.0], [43.9, 125.0], [44.0, 125.0], [44.1, 126.0], [44.2, 126.0], [44.3, 127.0], [44.4, 127.0], [44.5, 127.0], [44.6, 128.0], [44.7, 129.0], [44.8, 129.0], [44.9, 130.0], [45.0, 130.0], [45.1, 131.0], [45.2, 131.0], [45.3, 132.0], [45.4, 132.0], [45.5, 133.0], [45.6, 134.0], [45.7, 134.0], [45.8, 134.0], [45.9, 135.0], [46.0, 136.0], [46.1, 136.0], [46.2, 137.0], [46.3, 137.0], [46.4, 139.0], [46.5, 139.0], [46.6, 140.0], [46.7, 141.0], [46.8, 141.0], [46.9, 142.0], [47.0, 142.0], [47.1, 143.0], [47.2, 144.0], [47.3, 145.0], [47.4, 145.0], [47.5, 147.0], [47.6, 147.0], [47.7, 148.0], [47.8, 150.0], [47.9, 151.0], [48.0, 151.0], [48.1, 152.0], [48.2, 153.0], [48.3, 154.0], [48.4, 155.0], [48.5, 156.0], [48.6, 157.0], [48.7, 158.0], [48.8, 159.0], [48.9, 160.0], [49.0, 161.0], [49.1, 162.0], [49.2, 163.0], [49.3, 165.0], [49.4, 166.0], [49.5, 167.0], [49.6, 167.0], [49.7, 169.0], [49.8, 170.0], [49.9, 171.0], [50.0, 172.0], [50.1, 173.0], [50.2, 174.0], [50.3, 175.0], [50.4, 175.0], [50.5, 176.0], [50.6, 178.0], [50.7, 179.0], [50.8, 180.0], [50.9, 181.0], [51.0, 182.0], [51.1, 183.0], [51.2, 184.0], [51.3, 185.0], [51.4, 186.0], [51.5, 188.0], [51.6, 189.0], [51.7, 189.0], [51.8, 190.0], [51.9, 191.0], [52.0, 192.0], [52.1, 193.0], [52.2, 194.0], [52.3, 195.0], [52.4, 195.0], [52.5, 196.0], [52.6, 197.0], [52.7, 198.0], [52.8, 199.0], [52.9, 199.0], [53.0, 200.0], [53.1, 201.0], [53.2, 202.0], [53.3, 203.0], [53.4, 203.0], [53.5, 205.0], [53.6, 206.0], [53.7, 207.0], [53.8, 207.0], [53.9, 208.0], [54.0, 209.0], [54.1, 210.0], [54.2, 211.0], [54.3, 212.0], [54.4, 213.0], [54.5, 213.0], [54.6, 215.0], [54.7, 215.0], [54.8, 216.0], [54.9, 216.0], [55.0, 217.0], [55.1, 218.0], [55.2, 218.0], [55.3, 218.0], [55.4, 221.0], [55.5, 222.0], [55.6, 222.0], [55.7, 223.0], [55.8, 223.0], [55.9, 225.0], [56.0, 225.0], [56.1, 227.0], [56.2, 228.0], [56.3, 229.0], [56.4, 230.0], [56.5, 231.0], [56.6, 231.0], [56.7, 233.0], [56.8, 235.0], [56.9, 236.0], [57.0, 237.0], [57.1, 238.0], [57.2, 239.0], [57.3, 240.0], [57.4, 240.0], [57.5, 241.0], [57.6, 242.0], [57.7, 243.0], [57.8, 244.0], [57.9, 246.0], [58.0, 247.0], [58.1, 248.0], [58.2, 249.0], [58.3, 250.0], [58.4, 251.0], [58.5, 252.0], [58.6, 253.0], [58.7, 254.0], [58.8, 255.0], [58.9, 256.0], [59.0, 257.0], [59.1, 258.0], [59.2, 258.0], [59.3, 259.0], [59.4, 260.0], [59.5, 261.0], [59.6, 262.0], [59.7, 263.0], [59.8, 264.0], [59.9, 265.0], [60.0, 265.0], [60.1, 266.0], [60.2, 267.0], [60.3, 268.0], [60.4, 269.0], [60.5, 270.0], [60.6, 272.0], [60.7, 274.0], [60.8, 275.0], [60.9, 275.0], [61.0, 276.0], [61.1, 277.0], [61.2, 278.0], [61.3, 278.0], [61.4, 278.0], [61.5, 280.0], [61.6, 280.0], [61.7, 281.0], [61.8, 283.0], [61.9, 285.0], [62.0, 286.0], [62.1, 287.0], [62.2, 288.0], [62.3, 289.0], [62.4, 292.0], [62.5, 294.0], [62.6, 295.0], [62.7, 296.0], [62.8, 297.0], [62.9, 297.0], [63.0, 298.0], [63.1, 299.0], [63.2, 301.0], [63.3, 302.0], [63.4, 303.0], [63.5, 304.0], [63.6, 307.0], [63.7, 307.0], [63.8, 309.0], [63.9, 311.0], [64.0, 313.0], [64.1, 315.0], [64.2, 317.0], [64.3, 318.0], [64.4, 319.0], [64.5, 320.0], [64.6, 322.0], [64.7, 323.0], [64.8, 324.0], [64.9, 325.0], [65.0, 327.0], [65.1, 328.0], [65.2, 330.0], [65.3, 332.0], [65.4, 333.0], [65.5, 335.0], [65.6, 336.0], [65.7, 337.0], [65.8, 339.0], [65.9, 342.0], [66.0, 343.0], [66.1, 344.0], [66.2, 346.0], [66.3, 347.0], [66.4, 348.0], [66.5, 351.0], [66.6, 352.0], [66.7, 353.0], [66.8, 356.0], [66.9, 357.0], [67.0, 359.0], [67.1, 361.0], [67.2, 362.0], [67.3, 364.0], [67.4, 365.0], [67.5, 366.0], [67.6, 367.0], [67.7, 369.0], [67.8, 370.0], [67.9, 371.0], [68.0, 373.0], [68.1, 373.0], [68.2, 374.0], [68.3, 375.0], [68.4, 376.0], [68.5, 378.0], [68.6, 379.0], [68.7, 380.0], [68.8, 383.0], [68.9, 384.0], [69.0, 385.0], [69.1, 387.0], [69.2, 389.0], [69.3, 390.0], [69.4, 392.0], [69.5, 393.0], [69.6, 395.0], [69.7, 396.0], [69.8, 397.0], [69.9, 398.0], [70.0, 400.0], [70.1, 401.0], [70.2, 403.0], [70.3, 405.0], [70.4, 405.0], [70.5, 406.0], [70.6, 407.0], [70.7, 408.0], [70.8, 409.0], [70.9, 410.0], [71.0, 411.0], [71.1, 413.0], [71.2, 415.0], [71.3, 415.0], [71.4, 417.0], [71.5, 418.0], [71.6, 421.0], [71.7, 422.0], [71.8, 423.0], [71.9, 424.0], [72.0, 425.0], [72.1, 426.0], [72.2, 428.0], [72.3, 429.0], [72.4, 430.0], [72.5, 432.0], [72.6, 434.0], [72.7, 437.0], [72.8, 438.0], [72.9, 440.0], [73.0, 441.0], [73.1, 443.0], [73.2, 444.0], [73.3, 445.0], [73.4, 447.0], [73.5, 448.0], [73.6, 450.0], [73.7, 452.0], [73.8, 453.0], [73.9, 454.0], [74.0, 455.0], [74.1, 456.0], [74.2, 457.0], [74.3, 460.0], [74.4, 462.0], [74.5, 463.0], [74.6, 464.0], [74.7, 466.0], [74.8, 467.0], [74.9, 470.0], [75.0, 471.0], [75.1, 473.0], [75.2, 474.0], [75.3, 475.0], [75.4, 477.0], [75.5, 478.0], [75.6, 481.0], [75.7, 483.0], [75.8, 483.0], [75.9, 486.0], [76.0, 489.0], [76.1, 490.0], [76.2, 491.0], [76.3, 492.0], [76.4, 495.0], [76.5, 496.0], [76.6, 497.0], [76.7, 498.0], [76.8, 500.0], [76.9, 501.0], [77.0, 502.0], [77.1, 503.0], [77.2, 504.0], [77.3, 505.0], [77.4, 507.0], [77.5, 509.0], [77.6, 511.0], [77.7, 512.0], [77.8, 514.0], [77.9, 516.0], [78.0, 517.0], [78.1, 518.0], [78.2, 519.0], [78.3, 521.0], [78.4, 523.0], [78.5, 524.0], [78.6, 526.0], [78.7, 528.0], [78.8, 530.0], [78.9, 531.0], [79.0, 531.0], [79.1, 533.0], [79.2, 534.0], [79.3, 536.0], [79.4, 540.0], [79.5, 541.0], [79.6, 542.0], [79.7, 544.0], [79.8, 545.0], [79.9, 547.0], [80.0, 550.0], [80.1, 551.0], [80.2, 554.0], [80.3, 555.0], [80.4, 556.0], [80.5, 558.0], [80.6, 560.0], [80.7, 562.0], [80.8, 563.0], [80.9, 564.0], [81.0, 565.0], [81.1, 566.0], [81.2, 568.0], [81.3, 571.0], [81.4, 573.0], [81.5, 574.0], [81.6, 577.0], [81.7, 578.0], [81.8, 579.0], [81.9, 581.0], [82.0, 582.0], [82.1, 583.0], [82.2, 584.0], [82.3, 589.0], [82.4, 589.0], [82.5, 591.0], [82.6, 593.0], [82.7, 596.0], [82.8, 600.0], [82.9, 604.0], [83.0, 608.0], [83.1, 610.0], [83.2, 612.0], [83.3, 614.0], [83.4, 616.0], [83.5, 618.0], [83.6, 620.0], [83.7, 621.0], [83.8, 623.0], [83.9, 624.0], [84.0, 627.0], [84.1, 628.0], [84.2, 629.0], [84.3, 631.0], [84.4, 632.0], [84.5, 634.0], [84.6, 635.0], [84.7, 637.0], [84.8, 639.0], [84.9, 640.0], [85.0, 642.0], [85.1, 644.0], [85.2, 647.0], [85.3, 648.0], [85.4, 649.0], [85.5, 652.0], [85.6, 654.0], [85.7, 656.0], [85.8, 657.0], [85.9, 659.0], [86.0, 661.0], [86.1, 663.0], [86.2, 667.0], [86.3, 668.0], [86.4, 670.0], [86.5, 673.0], [86.6, 675.0], [86.7, 677.0], [86.8, 679.0], [86.9, 682.0], [87.0, 683.0], [87.1, 686.0], [87.2, 686.0], [87.3, 687.0], [87.4, 689.0], [87.5, 694.0], [87.6, 696.0], [87.7, 700.0], [87.8, 703.0], [87.9, 705.0], [88.0, 706.0], [88.1, 708.0], [88.2, 710.0], [88.3, 711.0], [88.4, 714.0], [88.5, 716.0], [88.6, 719.0], [88.7, 721.0], [88.8, 724.0], [88.9, 725.0], [89.0, 730.0], [89.1, 732.0], [89.2, 735.0], [89.3, 736.0], [89.4, 737.0], [89.5, 741.0], [89.6, 745.0], [89.7, 748.0], [89.8, 753.0], [89.9, 755.0], [90.0, 758.0], [90.1, 764.0], [90.2, 766.0], [90.3, 770.0], [90.4, 772.0], [90.5, 773.0], [90.6, 775.0], [90.7, 779.0], [90.8, 784.0], [90.9, 786.0], [91.0, 790.0], [91.1, 795.0], [91.2, 800.0], [91.3, 803.0], [91.4, 810.0], [91.5, 817.0], [91.6, 819.0], [91.7, 824.0], [91.8, 829.0], [91.9, 833.0], [92.0, 838.0], [92.1, 839.0], [92.2, 842.0], [92.3, 845.0], [92.4, 848.0], [92.5, 852.0], [92.6, 855.0], [92.7, 859.0], [92.8, 862.0], [92.9, 864.0], [93.0, 866.0], [93.1, 872.0], [93.2, 881.0], [93.3, 884.0], [93.4, 888.0], [93.5, 894.0], [93.6, 898.0], [93.7, 904.0], [93.8, 914.0], [93.9, 921.0], [94.0, 929.0], [94.1, 933.0], [94.2, 941.0], [94.3, 946.0], [94.4, 950.0], [94.5, 956.0], [94.6, 964.0], [94.7, 970.0], [94.8, 975.0], [94.9, 983.0], [95.0, 989.0], [95.1, 993.0], [95.2, 994.0], [95.3, 999.0], [95.4, 1013.0], [95.5, 1021.0], [95.6, 1029.0], [95.7, 1040.0], [95.8, 1042.0], [95.9, 1049.0], [96.0, 1060.0], [96.1, 1070.0], [96.2, 1080.0], [96.3, 1083.0], [96.4, 1096.0], [96.5, 1102.0], [96.6, 1112.0], [96.7, 1121.0], [96.8, 1123.0], [96.9, 1128.0], [97.0, 1137.0], [97.1, 1145.0], [97.2, 1152.0], [97.3, 1158.0], [97.4, 1172.0], [97.5, 1181.0], [97.6, 1194.0], [97.7, 1218.0], [97.8, 1231.0], [97.9, 1253.0], [98.0, 1275.0], [98.1, 1293.0], [98.2, 1302.0], [98.3, 1326.0], [98.4, 1338.0], [98.5, 1415.0], [98.6, 1429.0], [98.7, 1468.0], [98.8, 1500.0], [98.9, 1536.0], [99.0, 1601.0], [99.1, 1622.0], [99.2, 1674.0], [99.3, 1786.0], [99.4, 1831.0], [99.5, 1986.0], [99.6, 2030.0], [99.7, 2075.0], [99.8, 2109.0], [99.9, 2189.0], [100.0, 2457.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 2037.0, "series": [{"data": [[0.0, 2037.0], [600.0, 259.0], [700.0, 183.0], [800.0, 130.0], [900.0, 89.0], [1000.0, 60.0], [1100.0, 61.0], [1200.0, 30.0], [1300.0, 15.0], [1400.0, 16.0], [1500.0, 11.0], [100.0, 750.0], [1600.0, 11.0], [1700.0, 6.0], [1800.0, 6.0], [1900.0, 6.0], [2000.0, 12.0], [2100.0, 7.0], [2200.0, 2.0], [2300.0, 1.0], [2400.0, 2.0], [200.0, 534.0], [300.0, 360.0], [400.0, 360.0], [500.0, 314.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 2400.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 63.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 4044.0, "series": [{"data": [[0.0, 4044.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1155.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 63.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.93948126801152, "minX": 1.60383918E12, "maxY": 10.0, "series": [{"data": [[1.60383936E12, 9.953846153846154], [1.60383924E12, 10.0], [1.6038393E12, 10.0], [1.60383918E12, 9.93948126801152]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60383936E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 312.0463121783892, "minX": 1.0, "maxY": 2336.0, "series": [{"data": [[4.0, 1274.5], [8.0, 2129.0], [2.0, 2154.0], [1.0, 2336.0], [9.0, 472.0], [5.0, 727.3333333333334], [10.0, 312.0463121783892], [6.0, 948.0], [3.0, 2075.0], [7.0, 1115.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.98745724059291, 314.58114785252724]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 3110.9333333333334, "minX": 1.60383918E12, "maxY": 1613217.6333333333, "series": [{"data": [[1.60383936E12, 908988.5166666667], [1.60383924E12, 1613217.6333333333], [1.6038393E12, 1568799.6666666667], [1.60383918E12, 159814.53333333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60383936E12, 8578.716666666667], [1.60383924E12, 13981.9], [1.6038393E12, 19819.4], [1.60383918E12, 3110.9333333333334]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60383936E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 257.6206600942991, "minX": 1.60383918E12, "maxY": 371.9856876166773, "series": [{"data": [[1.60383936E12, 352.79589743589713], [1.60383924E12, 371.9856876166773], [1.6038393E12, 257.6206600942991], [1.60383918E12, 324.3227665706055]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60383936E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 257.2293184740674, "minX": 1.60383918E12, "maxY": 371.4523957685134, "series": [{"data": [[1.60383936E12, 352.40820512820505], [1.60383924E12, 371.4523957685134], [1.6038393E12, 257.2293184740674], [1.60383918E12, 324.0489913544668]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60383936E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.007179487179487179, "minX": 1.60383918E12, "maxY": 0.32276657060518765, "series": [{"data": [[1.60383936E12, 0.007179487179487179], [1.60383924E12, 0.008089607965152469], [1.6038393E12, 0.012001714530647226], [1.60383918E12, 0.32276657060518765]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60383936E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 30.0, "minX": 1.60383918E12, "maxY": 2457.0, "series": [{"data": [[1.60383936E12, 2457.0], [1.60383924E12, 2149.0], [1.6038393E12, 1919.0], [1.60383918E12, 1326.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60383936E12, 35.0], [1.60383924E12, 33.0], [1.6038393E12, 34.00599944353104], [1.60383918E12, 35.131999917030335]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60383936E12, 35.66240009307862], [1.60383924E12, 33.0], [1.6038393E12, 35.0], [1.60383918E12, 35.44520003318787]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60383936E12, 35.27199988365173], [1.60383924E12, 33.0], [1.6038393E12, 35.0], [1.60383918E12, 35.305999958515166]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60383936E12, 32.0], [1.60383924E12, 31.0], [1.6038393E12, 30.0], [1.60383918E12, 33.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60383936E12, 223.0], [1.60383924E12, 243.0], [1.6038393E12, 127.0], [1.60383918E12, 153.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60383936E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 52.0, "minX": 1.0, "maxY": 2336.0, "series": [{"data": [[5.0, 2075.0], [6.0, 1235.5], [7.0, 1275.0], [8.0, 909.0], [9.0, 667.0], [10.0, 859.5], [11.0, 675.0], [12.0, 706.5], [13.0, 728.0], [14.0, 623.0], [15.0, 693.5], [16.0, 586.0], [17.0, 615.5], [18.0, 497.0], [19.0, 481.0], [20.0, 462.5], [21.0, 485.0], [22.0, 410.0], [23.0, 442.0], [24.0, 451.5], [25.0, 382.0], [26.0, 256.0], [27.0, 308.0], [28.0, 256.0], [29.0, 257.0], [30.0, 262.5], [31.0, 97.0], [32.0, 228.0], [33.0, 248.0], [34.0, 89.5], [35.0, 189.0], [37.0, 198.0], [36.0, 258.0], [38.0, 194.0], [41.0, 84.0], [40.0, 134.0], [43.0, 99.0], [42.0, 71.5], [44.0, 85.5], [45.0, 80.0], [46.0, 86.0], [47.0, 80.0], [49.0, 95.5], [51.0, 186.0], [52.0, 137.5], [53.0, 107.0], [55.0, 79.0], [56.0, 87.0], [57.0, 125.0], [59.0, 109.0], [61.0, 122.0], [60.0, 122.0], [63.0, 124.0], [62.0, 117.0], [66.0, 142.0], [69.0, 85.0], [70.0, 128.0], [78.0, 80.0], [83.0, 104.0], [80.0, 92.0], [85.0, 52.0], [88.0, 81.0], [94.0, 81.0], [1.0, 2336.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 94.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 52.0, "minX": 1.0, "maxY": 2336.0, "series": [{"data": [[5.0, 2075.0], [6.0, 1235.0], [7.0, 1274.0], [8.0, 909.0], [9.0, 666.0], [10.0, 856.5], [11.0, 675.0], [12.0, 705.5], [13.0, 727.5], [14.0, 623.0], [15.0, 692.0], [16.0, 585.5], [17.0, 615.0], [18.0, 496.5], [19.0, 480.0], [20.0, 462.0], [21.0, 485.0], [22.0, 408.0], [23.0, 441.0], [24.0, 451.5], [25.0, 382.0], [26.0, 256.0], [27.0, 308.0], [28.0, 255.5], [29.0, 257.0], [30.0, 262.5], [31.0, 97.0], [32.0, 227.0], [33.0, 247.0], [34.0, 89.5], [35.0, 189.0], [37.0, 197.5], [36.0, 258.0], [38.0, 193.0], [41.0, 84.0], [40.0, 133.5], [43.0, 99.0], [42.0, 71.5], [44.0, 85.5], [45.0, 80.0], [46.0, 86.0], [47.0, 80.0], [49.0, 95.5], [51.0, 186.0], [52.0, 137.5], [53.0, 107.0], [55.0, 79.0], [56.0, 87.0], [57.0, 125.0], [59.0, 109.0], [61.0, 122.0], [60.0, 122.0], [63.0, 124.0], [62.0, 117.0], [66.0, 142.0], [69.0, 85.0], [70.0, 128.0], [78.0, 80.0], [83.0, 104.0], [80.0, 92.0], [85.0, 52.0], [88.0, 81.0], [94.0, 81.0], [1.0, 2336.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 94.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 5.95, "minX": 1.60383918E12, "maxY": 38.88333333333333, "series": [{"data": [[1.60383936E12, 16.083333333333332], [1.60383924E12, 26.783333333333335], [1.6038393E12, 38.88333333333333], [1.60383918E12, 5.95]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60383936E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 5.783333333333333, "minX": 1.60383918E12, "maxY": 38.88333333333333, "series": [{"data": [[1.60383936E12, 16.25], [1.60383924E12, 26.783333333333335], [1.6038393E12, 38.88333333333333], [1.60383918E12, 5.783333333333333]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60383936E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 5.783333333333333, "minX": 1.60383918E12, "maxY": 38.88333333333333, "series": [{"data": [[1.60383936E12, 16.25], [1.60383924E12, 26.783333333333335], [1.6038393E12, 38.88333333333333], [1.60383918E12, 5.783333333333333]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60383936E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 5.783333333333333, "minX": 1.60383918E12, "maxY": 38.88333333333333, "series": [{"data": [[1.60383936E12, 16.25], [1.60383924E12, 26.783333333333335], [1.6038393E12, 38.88333333333333], [1.60383918E12, 5.783333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60383936E12, "title": "Total Transactions Per Second"}},
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

