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
        data: {"result": {"minY": 31.0, "minX": 0.0, "maxY": 2501.0, "series": [{"data": [[0.0, 31.0], [0.1, 33.0], [0.2, 34.0], [0.3, 34.0], [0.4, 35.0], [0.5, 35.0], [0.6, 35.0], [0.7, 36.0], [0.8, 36.0], [0.9, 36.0], [1.0, 36.0], [1.1, 36.0], [1.2, 37.0], [1.3, 37.0], [1.4, 37.0], [1.5, 37.0], [1.6, 37.0], [1.7, 38.0], [1.8, 38.0], [1.9, 38.0], [2.0, 38.0], [2.1, 38.0], [2.2, 38.0], [2.3, 38.0], [2.4, 38.0], [2.5, 38.0], [2.6, 38.0], [2.7, 39.0], [2.8, 39.0], [2.9, 39.0], [3.0, 39.0], [3.1, 39.0], [3.2, 39.0], [3.3, 39.0], [3.4, 39.0], [3.5, 39.0], [3.6, 40.0], [3.7, 40.0], [3.8, 40.0], [3.9, 40.0], [4.0, 40.0], [4.1, 40.0], [4.2, 40.0], [4.3, 40.0], [4.4, 40.0], [4.5, 40.0], [4.6, 40.0], [4.7, 40.0], [4.8, 40.0], [4.9, 40.0], [5.0, 41.0], [5.1, 41.0], [5.2, 41.0], [5.3, 41.0], [5.4, 41.0], [5.5, 41.0], [5.6, 41.0], [5.7, 41.0], [5.8, 41.0], [5.9, 41.0], [6.0, 41.0], [6.1, 42.0], [6.2, 42.0], [6.3, 42.0], [6.4, 42.0], [6.5, 42.0], [6.6, 42.0], [6.7, 42.0], [6.8, 42.0], [6.9, 42.0], [7.0, 42.0], [7.1, 42.0], [7.2, 43.0], [7.3, 43.0], [7.4, 43.0], [7.5, 43.0], [7.6, 43.0], [7.7, 43.0], [7.8, 43.0], [7.9, 43.0], [8.0, 43.0], [8.1, 43.0], [8.2, 44.0], [8.3, 44.0], [8.4, 44.0], [8.5, 44.0], [8.6, 44.0], [8.7, 44.0], [8.8, 44.0], [8.9, 44.0], [9.0, 44.0], [9.1, 44.0], [9.2, 44.0], [9.3, 44.0], [9.4, 44.0], [9.5, 44.0], [9.6, 45.0], [9.7, 45.0], [9.8, 45.0], [9.9, 45.0], [10.0, 45.0], [10.1, 45.0], [10.2, 45.0], [10.3, 45.0], [10.4, 45.0], [10.5, 46.0], [10.6, 46.0], [10.7, 46.0], [10.8, 46.0], [10.9, 46.0], [11.0, 46.0], [11.1, 46.0], [11.2, 46.0], [11.3, 47.0], [11.4, 47.0], [11.5, 47.0], [11.6, 47.0], [11.7, 47.0], [11.8, 47.0], [11.9, 47.0], [12.0, 47.0], [12.1, 48.0], [12.2, 48.0], [12.3, 48.0], [12.4, 48.0], [12.5, 48.0], [12.6, 48.0], [12.7, 49.0], [12.8, 49.0], [12.9, 49.0], [13.0, 49.0], [13.1, 50.0], [13.2, 50.0], [13.3, 50.0], [13.4, 50.0], [13.5, 51.0], [13.6, 51.0], [13.7, 51.0], [13.8, 51.0], [13.9, 52.0], [14.0, 52.0], [14.1, 52.0], [14.2, 53.0], [14.3, 53.0], [14.4, 53.0], [14.5, 53.0], [14.6, 54.0], [14.7, 54.0], [14.8, 54.0], [14.9, 55.0], [15.0, 55.0], [15.1, 56.0], [15.2, 56.0], [15.3, 57.0], [15.4, 57.0], [15.5, 57.0], [15.6, 58.0], [15.7, 58.0], [15.8, 58.0], [15.9, 58.0], [16.0, 59.0], [16.1, 59.0], [16.2, 60.0], [16.3, 60.0], [16.4, 61.0], [16.5, 62.0], [16.6, 62.0], [16.7, 62.0], [16.8, 63.0], [16.9, 63.0], [17.0, 63.0], [17.1, 63.0], [17.2, 63.0], [17.3, 64.0], [17.4, 64.0], [17.5, 64.0], [17.6, 64.0], [17.7, 65.0], [17.8, 65.0], [17.9, 65.0], [18.0, 66.0], [18.1, 66.0], [18.2, 67.0], [18.3, 67.0], [18.4, 67.0], [18.5, 67.0], [18.6, 67.0], [18.7, 68.0], [18.8, 68.0], [18.9, 68.0], [19.0, 68.0], [19.1, 69.0], [19.2, 69.0], [19.3, 69.0], [19.4, 69.0], [19.5, 70.0], [19.6, 70.0], [19.7, 70.0], [19.8, 70.0], [19.9, 70.0], [20.0, 70.0], [20.1, 71.0], [20.2, 71.0], [20.3, 71.0], [20.4, 71.0], [20.5, 71.0], [20.6, 71.0], [20.7, 72.0], [20.8, 72.0], [20.9, 72.0], [21.0, 72.0], [21.1, 72.0], [21.2, 72.0], [21.3, 72.0], [21.4, 73.0], [21.5, 73.0], [21.6, 73.0], [21.7, 73.0], [21.8, 73.0], [21.9, 74.0], [22.0, 74.0], [22.1, 74.0], [22.2, 74.0], [22.3, 74.0], [22.4, 74.0], [22.5, 74.0], [22.6, 74.0], [22.7, 74.0], [22.8, 75.0], [22.9, 75.0], [23.0, 75.0], [23.1, 75.0], [23.2, 75.0], [23.3, 75.0], [23.4, 75.0], [23.5, 75.0], [23.6, 75.0], [23.7, 75.0], [23.8, 76.0], [23.9, 76.0], [24.0, 76.0], [24.1, 76.0], [24.2, 76.0], [24.3, 76.0], [24.4, 76.0], [24.5, 76.0], [24.6, 76.0], [24.7, 76.0], [24.8, 76.0], [24.9, 77.0], [25.0, 77.0], [25.1, 77.0], [25.2, 77.0], [25.3, 77.0], [25.4, 77.0], [25.5, 77.0], [25.6, 77.0], [25.7, 77.0], [25.8, 77.0], [25.9, 78.0], [26.0, 78.0], [26.1, 78.0], [26.2, 78.0], [26.3, 78.0], [26.4, 78.0], [26.5, 78.0], [26.6, 78.0], [26.7, 78.0], [26.8, 78.0], [26.9, 79.0], [27.0, 79.0], [27.1, 79.0], [27.2, 79.0], [27.3, 79.0], [27.4, 79.0], [27.5, 79.0], [27.6, 80.0], [27.7, 80.0], [27.8, 80.0], [27.9, 80.0], [28.0, 80.0], [28.1, 80.0], [28.2, 80.0], [28.3, 80.0], [28.4, 80.0], [28.5, 81.0], [28.6, 81.0], [28.7, 81.0], [28.8, 81.0], [28.9, 81.0], [29.0, 81.0], [29.1, 81.0], [29.2, 81.0], [29.3, 81.0], [29.4, 81.0], [29.5, 82.0], [29.6, 82.0], [29.7, 82.0], [29.8, 82.0], [29.9, 82.0], [30.0, 82.0], [30.1, 82.0], [30.2, 82.0], [30.3, 82.0], [30.4, 83.0], [30.5, 83.0], [30.6, 83.0], [30.7, 83.0], [30.8, 83.0], [30.9, 83.0], [31.0, 83.0], [31.1, 83.0], [31.2, 83.0], [31.3, 83.0], [31.4, 83.0], [31.5, 84.0], [31.6, 84.0], [31.7, 84.0], [31.8, 84.0], [31.9, 84.0], [32.0, 84.0], [32.1, 84.0], [32.2, 85.0], [32.3, 85.0], [32.4, 85.0], [32.5, 85.0], [32.6, 86.0], [32.7, 86.0], [32.8, 86.0], [32.9, 86.0], [33.0, 86.0], [33.1, 87.0], [33.2, 87.0], [33.3, 87.0], [33.4, 87.0], [33.5, 87.0], [33.6, 87.0], [33.7, 88.0], [33.8, 88.0], [33.9, 88.0], [34.0, 88.0], [34.1, 89.0], [34.2, 89.0], [34.3, 89.0], [34.4, 89.0], [34.5, 89.0], [34.6, 90.0], [34.7, 90.0], [34.8, 90.0], [34.9, 90.0], [35.0, 90.0], [35.1, 90.0], [35.2, 91.0], [35.3, 91.0], [35.4, 91.0], [35.5, 91.0], [35.6, 91.0], [35.7, 92.0], [35.8, 92.0], [35.9, 92.0], [36.0, 92.0], [36.1, 92.0], [36.2, 92.0], [36.3, 93.0], [36.4, 93.0], [36.5, 93.0], [36.6, 93.0], [36.7, 94.0], [36.8, 94.0], [36.9, 94.0], [37.0, 95.0], [37.1, 95.0], [37.2, 95.0], [37.3, 95.0], [37.4, 96.0], [37.5, 96.0], [37.6, 97.0], [37.7, 97.0], [37.8, 97.0], [37.9, 97.0], [38.0, 97.0], [38.1, 98.0], [38.2, 98.0], [38.3, 99.0], [38.4, 99.0], [38.5, 100.0], [38.6, 100.0], [38.7, 101.0], [38.8, 101.0], [38.9, 101.0], [39.0, 102.0], [39.1, 102.0], [39.2, 102.0], [39.3, 102.0], [39.4, 103.0], [39.5, 103.0], [39.6, 103.0], [39.7, 104.0], [39.8, 105.0], [39.9, 105.0], [40.0, 105.0], [40.1, 106.0], [40.2, 107.0], [40.3, 107.0], [40.4, 108.0], [40.5, 108.0], [40.6, 108.0], [40.7, 109.0], [40.8, 109.0], [40.9, 110.0], [41.0, 111.0], [41.1, 112.0], [41.2, 112.0], [41.3, 113.0], [41.4, 114.0], [41.5, 114.0], [41.6, 115.0], [41.7, 116.0], [41.8, 117.0], [41.9, 118.0], [42.0, 118.0], [42.1, 119.0], [42.2, 119.0], [42.3, 120.0], [42.4, 121.0], [42.5, 121.0], [42.6, 122.0], [42.7, 122.0], [42.8, 122.0], [42.9, 123.0], [43.0, 124.0], [43.1, 124.0], [43.2, 125.0], [43.3, 125.0], [43.4, 126.0], [43.5, 127.0], [43.6, 127.0], [43.7, 128.0], [43.8, 128.0], [43.9, 129.0], [44.0, 129.0], [44.1, 130.0], [44.2, 131.0], [44.3, 131.0], [44.4, 131.0], [44.5, 132.0], [44.6, 132.0], [44.7, 132.0], [44.8, 133.0], [44.9, 133.0], [45.0, 133.0], [45.1, 134.0], [45.2, 135.0], [45.3, 136.0], [45.4, 136.0], [45.5, 136.0], [45.6, 137.0], [45.7, 138.0], [45.8, 138.0], [45.9, 139.0], [46.0, 139.0], [46.1, 140.0], [46.2, 140.0], [46.3, 141.0], [46.4, 142.0], [46.5, 143.0], [46.6, 144.0], [46.7, 144.0], [46.8, 145.0], [46.9, 146.0], [47.0, 146.0], [47.1, 147.0], [47.2, 147.0], [47.3, 148.0], [47.4, 149.0], [47.5, 151.0], [47.6, 152.0], [47.7, 152.0], [47.8, 154.0], [47.9, 154.0], [48.0, 155.0], [48.1, 156.0], [48.2, 157.0], [48.3, 158.0], [48.4, 159.0], [48.5, 161.0], [48.6, 163.0], [48.7, 164.0], [48.8, 164.0], [48.9, 166.0], [49.0, 167.0], [49.1, 168.0], [49.2, 168.0], [49.3, 170.0], [49.4, 171.0], [49.5, 173.0], [49.6, 174.0], [49.7, 176.0], [49.8, 177.0], [49.9, 178.0], [50.0, 178.0], [50.1, 179.0], [50.2, 180.0], [50.3, 181.0], [50.4, 182.0], [50.5, 184.0], [50.6, 184.0], [50.7, 186.0], [50.8, 187.0], [50.9, 188.0], [51.0, 189.0], [51.1, 190.0], [51.2, 191.0], [51.3, 192.0], [51.4, 193.0], [51.5, 194.0], [51.6, 195.0], [51.7, 196.0], [51.8, 197.0], [51.9, 198.0], [52.0, 199.0], [52.1, 199.0], [52.2, 200.0], [52.3, 201.0], [52.4, 203.0], [52.5, 204.0], [52.6, 205.0], [52.7, 206.0], [52.8, 207.0], [52.9, 208.0], [53.0, 209.0], [53.1, 210.0], [53.2, 211.0], [53.3, 212.0], [53.4, 212.0], [53.5, 213.0], [53.6, 214.0], [53.7, 215.0], [53.8, 216.0], [53.9, 217.0], [54.0, 218.0], [54.1, 218.0], [54.2, 220.0], [54.3, 220.0], [54.4, 221.0], [54.5, 223.0], [54.6, 224.0], [54.7, 225.0], [54.8, 226.0], [54.9, 227.0], [55.0, 229.0], [55.1, 230.0], [55.2, 230.0], [55.3, 232.0], [55.4, 232.0], [55.5, 234.0], [55.6, 235.0], [55.7, 236.0], [55.8, 236.0], [55.9, 238.0], [56.0, 238.0], [56.1, 239.0], [56.2, 240.0], [56.3, 241.0], [56.4, 241.0], [56.5, 242.0], [56.6, 243.0], [56.7, 243.0], [56.8, 244.0], [56.9, 245.0], [57.0, 245.0], [57.1, 246.0], [57.2, 247.0], [57.3, 248.0], [57.4, 249.0], [57.5, 250.0], [57.6, 250.0], [57.7, 251.0], [57.8, 252.0], [57.9, 253.0], [58.0, 254.0], [58.1, 255.0], [58.2, 256.0], [58.3, 256.0], [58.4, 258.0], [58.5, 259.0], [58.6, 261.0], [58.7, 261.0], [58.8, 262.0], [58.9, 263.0], [59.0, 264.0], [59.1, 265.0], [59.2, 266.0], [59.3, 266.0], [59.4, 266.0], [59.5, 267.0], [59.6, 267.0], [59.7, 268.0], [59.8, 270.0], [59.9, 271.0], [60.0, 273.0], [60.1, 274.0], [60.2, 275.0], [60.3, 277.0], [60.4, 278.0], [60.5, 278.0], [60.6, 279.0], [60.7, 280.0], [60.8, 280.0], [60.9, 281.0], [61.0, 282.0], [61.1, 283.0], [61.2, 284.0], [61.3, 285.0], [61.4, 286.0], [61.5, 287.0], [61.6, 289.0], [61.7, 290.0], [61.8, 290.0], [61.9, 291.0], [62.0, 292.0], [62.1, 293.0], [62.2, 294.0], [62.3, 295.0], [62.4, 295.0], [62.5, 297.0], [62.6, 298.0], [62.7, 299.0], [62.8, 301.0], [62.9, 303.0], [63.0, 304.0], [63.1, 304.0], [63.2, 305.0], [63.3, 307.0], [63.4, 308.0], [63.5, 310.0], [63.6, 310.0], [63.7, 312.0], [63.8, 313.0], [63.9, 315.0], [64.0, 316.0], [64.1, 316.0], [64.2, 318.0], [64.3, 321.0], [64.4, 322.0], [64.5, 323.0], [64.6, 325.0], [64.7, 327.0], [64.8, 328.0], [64.9, 331.0], [65.0, 332.0], [65.1, 334.0], [65.2, 335.0], [65.3, 336.0], [65.4, 337.0], [65.5, 337.0], [65.6, 339.0], [65.7, 340.0], [65.8, 343.0], [65.9, 345.0], [66.0, 345.0], [66.1, 346.0], [66.2, 348.0], [66.3, 349.0], [66.4, 351.0], [66.5, 352.0], [66.6, 354.0], [66.7, 355.0], [66.8, 357.0], [66.9, 359.0], [67.0, 359.0], [67.1, 361.0], [67.2, 362.0], [67.3, 365.0], [67.4, 365.0], [67.5, 366.0], [67.6, 368.0], [67.7, 369.0], [67.8, 370.0], [67.9, 371.0], [68.0, 373.0], [68.1, 374.0], [68.2, 375.0], [68.3, 376.0], [68.4, 378.0], [68.5, 378.0], [68.6, 380.0], [68.7, 382.0], [68.8, 384.0], [68.9, 386.0], [69.0, 387.0], [69.1, 388.0], [69.2, 390.0], [69.3, 391.0], [69.4, 392.0], [69.5, 393.0], [69.6, 395.0], [69.7, 396.0], [69.8, 397.0], [69.9, 398.0], [70.0, 400.0], [70.1, 404.0], [70.2, 405.0], [70.3, 407.0], [70.4, 408.0], [70.5, 409.0], [70.6, 411.0], [70.7, 412.0], [70.8, 413.0], [70.9, 415.0], [71.0, 416.0], [71.1, 417.0], [71.2, 418.0], [71.3, 420.0], [71.4, 421.0], [71.5, 422.0], [71.6, 423.0], [71.7, 425.0], [71.8, 427.0], [71.9, 427.0], [72.0, 428.0], [72.1, 429.0], [72.2, 431.0], [72.3, 432.0], [72.4, 433.0], [72.5, 433.0], [72.6, 435.0], [72.7, 436.0], [72.8, 437.0], [72.9, 438.0], [73.0, 440.0], [73.1, 441.0], [73.2, 442.0], [73.3, 443.0], [73.4, 444.0], [73.5, 446.0], [73.6, 448.0], [73.7, 449.0], [73.8, 450.0], [73.9, 451.0], [74.0, 453.0], [74.1, 456.0], [74.2, 457.0], [74.3, 457.0], [74.4, 459.0], [74.5, 460.0], [74.6, 463.0], [74.7, 465.0], [74.8, 466.0], [74.9, 468.0], [75.0, 469.0], [75.1, 470.0], [75.2, 472.0], [75.3, 473.0], [75.4, 474.0], [75.5, 476.0], [75.6, 478.0], [75.7, 479.0], [75.8, 481.0], [75.9, 482.0], [76.0, 483.0], [76.1, 485.0], [76.2, 485.0], [76.3, 487.0], [76.4, 490.0], [76.5, 492.0], [76.6, 493.0], [76.7, 495.0], [76.8, 497.0], [76.9, 498.0], [77.0, 499.0], [77.1, 502.0], [77.2, 503.0], [77.3, 504.0], [77.4, 505.0], [77.5, 507.0], [77.6, 509.0], [77.7, 510.0], [77.8, 510.0], [77.9, 512.0], [78.0, 515.0], [78.1, 516.0], [78.2, 518.0], [78.3, 519.0], [78.4, 520.0], [78.5, 520.0], [78.6, 522.0], [78.7, 524.0], [78.8, 526.0], [78.9, 528.0], [79.0, 531.0], [79.1, 532.0], [79.2, 533.0], [79.3, 533.0], [79.4, 536.0], [79.5, 540.0], [79.6, 543.0], [79.7, 544.0], [79.8, 545.0], [79.9, 547.0], [80.0, 549.0], [80.1, 550.0], [80.2, 552.0], [80.3, 553.0], [80.4, 554.0], [80.5, 557.0], [80.6, 558.0], [80.7, 560.0], [80.8, 561.0], [80.9, 564.0], [81.0, 566.0], [81.1, 568.0], [81.2, 572.0], [81.3, 574.0], [81.4, 575.0], [81.5, 576.0], [81.6, 580.0], [81.7, 581.0], [81.8, 584.0], [81.9, 586.0], [82.0, 588.0], [82.1, 589.0], [82.2, 591.0], [82.3, 593.0], [82.4, 594.0], [82.5, 595.0], [82.6, 597.0], [82.7, 599.0], [82.8, 600.0], [82.9, 602.0], [83.0, 602.0], [83.1, 604.0], [83.2, 605.0], [83.3, 608.0], [83.4, 609.0], [83.5, 610.0], [83.6, 612.0], [83.7, 614.0], [83.8, 615.0], [83.9, 616.0], [84.0, 619.0], [84.1, 621.0], [84.2, 623.0], [84.3, 626.0], [84.4, 628.0], [84.5, 629.0], [84.6, 630.0], [84.7, 631.0], [84.8, 634.0], [84.9, 635.0], [85.0, 637.0], [85.1, 638.0], [85.2, 640.0], [85.3, 643.0], [85.4, 645.0], [85.5, 647.0], [85.6, 650.0], [85.7, 651.0], [85.8, 653.0], [85.9, 654.0], [86.0, 657.0], [86.1, 658.0], [86.2, 662.0], [86.3, 664.0], [86.4, 669.0], [86.5, 672.0], [86.6, 675.0], [86.7, 676.0], [86.8, 678.0], [86.9, 680.0], [87.0, 682.0], [87.1, 685.0], [87.2, 686.0], [87.3, 688.0], [87.4, 691.0], [87.5, 692.0], [87.6, 694.0], [87.7, 696.0], [87.8, 701.0], [87.9, 702.0], [88.0, 703.0], [88.1, 705.0], [88.2, 709.0], [88.3, 710.0], [88.4, 713.0], [88.5, 715.0], [88.6, 717.0], [88.7, 720.0], [88.8, 722.0], [88.9, 725.0], [89.0, 729.0], [89.1, 730.0], [89.2, 732.0], [89.3, 734.0], [89.4, 735.0], [89.5, 737.0], [89.6, 737.0], [89.7, 742.0], [89.8, 747.0], [89.9, 748.0], [90.0, 751.0], [90.1, 757.0], [90.2, 758.0], [90.3, 760.0], [90.4, 763.0], [90.5, 766.0], [90.6, 767.0], [90.7, 770.0], [90.8, 772.0], [90.9, 777.0], [91.0, 780.0], [91.1, 782.0], [91.2, 787.0], [91.3, 790.0], [91.4, 792.0], [91.5, 796.0], [91.6, 800.0], [91.7, 803.0], [91.8, 806.0], [91.9, 813.0], [92.0, 822.0], [92.1, 826.0], [92.2, 833.0], [92.3, 837.0], [92.4, 843.0], [92.5, 846.0], [92.6, 853.0], [92.7, 857.0], [92.8, 860.0], [92.9, 863.0], [93.0, 868.0], [93.1, 879.0], [93.2, 891.0], [93.3, 896.0], [93.4, 901.0], [93.5, 907.0], [93.6, 910.0], [93.7, 915.0], [93.8, 920.0], [93.9, 926.0], [94.0, 929.0], [94.1, 936.0], [94.2, 940.0], [94.3, 951.0], [94.4, 957.0], [94.5, 963.0], [94.6, 967.0], [94.7, 975.0], [94.8, 979.0], [94.9, 985.0], [95.0, 987.0], [95.1, 992.0], [95.2, 999.0], [95.3, 1002.0], [95.4, 1007.0], [95.5, 1018.0], [95.6, 1020.0], [95.7, 1038.0], [95.8, 1048.0], [95.9, 1059.0], [96.0, 1066.0], [96.1, 1076.0], [96.2, 1082.0], [96.3, 1091.0], [96.4, 1096.0], [96.5, 1101.0], [96.6, 1107.0], [96.7, 1116.0], [96.8, 1126.0], [96.9, 1135.0], [97.0, 1153.0], [97.1, 1167.0], [97.2, 1179.0], [97.3, 1202.0], [97.4, 1216.0], [97.5, 1224.0], [97.6, 1234.0], [97.7, 1249.0], [97.8, 1278.0], [97.9, 1298.0], [98.0, 1301.0], [98.1, 1341.0], [98.2, 1355.0], [98.3, 1377.0], [98.4, 1411.0], [98.5, 1446.0], [98.6, 1463.0], [98.7, 1496.0], [98.8, 1546.0], [98.9, 1601.0], [99.0, 1623.0], [99.1, 1677.0], [99.2, 1709.0], [99.3, 1811.0], [99.4, 1865.0], [99.5, 1944.0], [99.6, 2011.0], [99.7, 2162.0], [99.8, 2215.0], [99.9, 2310.0], [100.0, 2501.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 2022.0, "series": [{"data": [[0.0, 2022.0], [600.0, 263.0], [700.0, 199.0], [800.0, 94.0], [900.0, 98.0], [1000.0, 64.0], [1100.0, 45.0], [1200.0, 35.0], [1300.0, 22.0], [1400.0, 18.0], [1500.0, 9.0], [100.0, 720.0], [1600.0, 15.0], [1700.0, 7.0], [1800.0, 7.0], [1900.0, 7.0], [2000.0, 7.0], [2100.0, 5.0], [2300.0, 4.0], [2200.0, 4.0], [2400.0, 2.0], [2500.0, 1.0], [200.0, 558.0], [300.0, 383.0], [400.0, 370.0], [500.0, 303.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 2500.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 68.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 4055.0, "series": [{"data": [[0.0, 4055.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1139.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 68.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.888888888888888, "minX": 1.6038414E12, "maxY": 10.0, "series": [{"data": [[1.60384146E12, 10.0], [1.60384152E12, 10.0], [1.6038414E12, 9.969767441860453], [1.60384158E12, 9.888888888888888]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60384158E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 315.10068649885596, "minX": 1.0, "maxY": 2446.0, "series": [{"data": [[4.0, 1071.0], [8.0, 907.3333333333334], [2.0, 2446.0], [1.0, 1298.0], [9.0, 971.25], [5.0, 791.3333333333334], [10.0, 315.10068649885596], [6.0, 1073.0], [3.0, 2188.0], [7.0, 1253.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.986507031546962, 317.9441277080958]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 3605.3, "minX": 1.6038414E12, "maxY": 1566941.3666666667, "series": [{"data": [[1.60384146E12, 1556911.0333333334], [1.60384152E12, 1566941.3666666667], [1.6038414E12, 818020.2666666667], [1.60384158E12, 309024.45]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60384146E12, 16966.233333333334], [1.60384152E12, 17470.9], [1.6038414E12, 7448.516666666666], [1.60384158E12, 3605.3]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60384158E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 297.3411238189954, "minX": 1.6038414E12, "maxY": 375.07093023255834, "series": [{"data": [[1.60384146E12, 297.3411238189954], [1.60384152E12, 302.70996978851935], [1.6038414E12, 375.07093023255834], [1.60384158E12, 373.6444444444444]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60384158E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 296.9224266534056, "minX": 1.6038414E12, "maxY": 374.49651162790707, "series": [{"data": [[1.60384146E12, 296.9224266534056], [1.60384152E12, 302.2507552870084], [1.6038414E12, 374.49651162790707], [1.60384158E12, 373.2617283950616]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60384158E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.007049345417925476, "minX": 1.6038414E12, "maxY": 0.10465116279069754, "series": [{"data": [[1.60384146E12, 0.013426156141223273], [1.60384152E12, 0.007049345417925476], [1.6038414E12, 0.10465116279069754], [1.60384158E12, 0.00987654320987654]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60384158E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 31.0, "minX": 1.6038414E12, "maxY": 2501.0, "series": [{"data": [[1.60384146E12, 2310.0], [1.60384152E12, 1824.0], [1.6038414E12, 2169.0], [1.60384158E12, 2501.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60384146E12, 37.0], [1.60384152E12, 36.0], [1.6038414E12, 34.748999794721605], [1.60384158E12, 35.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60384146E12, 37.0], [1.60384152E12, 37.0], [1.6038414E12, 35.0], [1.60384158E12, 35.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60384146E12, 37.0], [1.60384152E12, 36.876499763131136], [1.6038414E12, 35.0], [1.60384158E12, 35.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60384146E12, 32.0], [1.60384152E12, 32.0], [1.6038414E12, 32.0], [1.60384158E12, 31.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60384146E12, 147.0], [1.60384152E12, 190.0], [1.6038414E12, 262.0], [1.60384158E12, 195.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60384158E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 60.0, "minX": 3.0, "maxY": 2188.0, "series": [{"data": [[3.0, 1546.0], [4.0, 1151.5], [5.0, 2188.0], [6.0, 1243.0], [7.0, 951.0], [8.0, 1236.5], [9.0, 682.0], [10.0, 1024.0], [11.0, 798.0], [12.0, 721.0], [13.0, 655.0], [14.0, 691.5], [15.0, 729.0], [16.0, 440.5], [17.0, 526.0], [18.0, 523.5], [19.0, 504.0], [20.0, 498.0], [21.0, 158.0], [22.0, 395.0], [23.0, 303.5], [24.0, 445.0], [25.0, 428.0], [26.0, 410.0], [27.0, 294.0], [28.0, 221.5], [29.0, 329.5], [30.0, 265.5], [31.0, 110.0], [33.0, 199.0], [32.0, 207.5], [34.0, 249.5], [35.0, 237.5], [36.0, 121.5], [37.0, 110.0], [39.0, 94.0], [38.0, 94.5], [40.0, 83.0], [41.0, 241.0], [42.0, 119.5], [44.0, 139.0], [46.0, 192.0], [47.0, 193.0], [48.0, 126.0], [50.0, 133.5], [51.0, 134.0], [53.0, 163.0], [52.0, 89.0], [55.0, 81.0], [54.0, 141.0], [57.0, 88.0], [58.0, 128.0], [60.0, 79.5], [61.0, 137.0], [62.0, 83.0], [67.0, 84.5], [65.0, 129.0], [68.0, 123.5], [69.0, 101.0], [71.0, 60.0], [73.0, 78.0], [74.0, 126.5], [72.0, 82.0], [75.0, 75.0], [79.0, 94.0], [76.0, 94.0], [88.0, 80.0], [90.0, 83.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 90.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 60.0, "minX": 3.0, "maxY": 2188.0, "series": [{"data": [[3.0, 1545.0], [4.0, 1150.5], [5.0, 2188.0], [6.0, 1242.0], [7.0, 948.5], [8.0, 1235.5], [9.0, 681.0], [10.0, 1023.5], [11.0, 797.0], [12.0, 721.0], [13.0, 655.0], [14.0, 690.5], [15.0, 729.0], [16.0, 440.0], [17.0, 525.0], [18.0, 522.5], [19.0, 503.5], [20.0, 497.0], [21.0, 158.0], [22.0, 394.5], [23.0, 284.5], [24.0, 444.0], [25.0, 428.0], [26.0, 409.0], [27.0, 292.5], [28.0, 221.5], [29.0, 328.5], [30.0, 264.5], [31.0, 110.0], [33.0, 199.0], [32.0, 207.5], [34.0, 249.5], [35.0, 237.5], [36.0, 121.5], [37.0, 110.0], [39.0, 94.0], [38.0, 94.5], [40.0, 83.0], [41.0, 241.0], [42.0, 119.5], [44.0, 139.0], [46.0, 191.0], [47.0, 192.0], [48.0, 126.0], [50.0, 133.0], [51.0, 134.0], [53.0, 163.0], [52.0, 89.0], [55.0, 81.0], [54.0, 141.0], [57.0, 88.0], [58.0, 128.0], [60.0, 79.0], [61.0, 136.0], [62.0, 83.0], [67.0, 84.5], [65.0, 128.0], [68.0, 123.0], [69.0, 100.0], [71.0, 60.0], [73.0, 78.0], [74.0, 125.5], [72.0, 82.0], [75.0, 75.0], [79.0, 93.0], [76.0, 94.0], [88.0, 80.0], [90.0, 83.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 90.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 6.583333333333333, "minX": 1.6038414E12, "maxY": 33.516666666666666, "series": [{"data": [[1.60384146E12, 33.516666666666666], [1.60384152E12, 33.1], [1.6038414E12, 14.5], [1.60384158E12, 6.583333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60384158E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 6.75, "minX": 1.6038414E12, "maxY": 33.516666666666666, "series": [{"data": [[1.60384146E12, 33.516666666666666], [1.60384152E12, 33.1], [1.6038414E12, 14.333333333333334], [1.60384158E12, 6.75]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60384158E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 6.75, "minX": 1.6038414E12, "maxY": 33.516666666666666, "series": [{"data": [[1.60384146E12, 33.516666666666666], [1.60384152E12, 33.1], [1.6038414E12, 14.333333333333334], [1.60384158E12, 6.75]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60384158E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 6.75, "minX": 1.6038414E12, "maxY": 33.516666666666666, "series": [{"data": [[1.60384146E12, 33.516666666666666], [1.60384152E12, 33.1], [1.6038414E12, 14.333333333333334], [1.60384158E12, 6.75]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60384158E12, "title": "Total Transactions Per Second"}},
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

