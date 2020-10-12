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
        data: {"result": {"minY": 21.0, "minX": 0.0, "maxY": 15517.0, "series": [{"data": [[0.0, 21.0], [0.1, 23.0], [0.2, 24.0], [0.3, 25.0], [0.4, 26.0], [0.5, 26.0], [0.6, 27.0], [0.7, 27.0], [0.8, 27.0], [0.9, 27.0], [1.0, 28.0], [1.1, 28.0], [1.2, 28.0], [1.3, 28.0], [1.4, 28.0], [1.5, 29.0], [1.6, 30.0], [1.7, 30.0], [1.8, 30.0], [1.9, 31.0], [2.0, 31.0], [2.1, 31.0], [2.2, 32.0], [2.3, 32.0], [2.4, 32.0], [2.5, 32.0], [2.6, 32.0], [2.7, 33.0], [2.8, 33.0], [2.9, 33.0], [3.0, 33.0], [3.1, 34.0], [3.2, 34.0], [3.3, 34.0], [3.4, 34.0], [3.5, 34.0], [3.6, 35.0], [3.7, 35.0], [3.8, 35.0], [3.9, 35.0], [4.0, 35.0], [4.1, 35.0], [4.2, 36.0], [4.3, 36.0], [4.4, 36.0], [4.5, 36.0], [4.6, 37.0], [4.7, 37.0], [4.8, 37.0], [4.9, 37.0], [5.0, 37.0], [5.1, 37.0], [5.2, 38.0], [5.3, 38.0], [5.4, 38.0], [5.5, 38.0], [5.6, 39.0], [5.7, 39.0], [5.8, 39.0], [5.9, 39.0], [6.0, 39.0], [6.1, 40.0], [6.2, 40.0], [6.3, 40.0], [6.4, 40.0], [6.5, 40.0], [6.6, 40.0], [6.7, 41.0], [6.8, 41.0], [6.9, 41.0], [7.0, 41.0], [7.1, 42.0], [7.2, 42.0], [7.3, 42.0], [7.4, 42.0], [7.5, 42.0], [7.6, 42.0], [7.7, 43.0], [7.8, 43.0], [7.9, 43.0], [8.0, 43.0], [8.1, 43.0], [8.2, 43.0], [8.3, 44.0], [8.4, 44.0], [8.5, 44.0], [8.6, 44.0], [8.7, 44.0], [8.8, 45.0], [8.9, 45.0], [9.0, 45.0], [9.1, 45.0], [9.2, 45.0], [9.3, 46.0], [9.4, 46.0], [9.5, 46.0], [9.6, 46.0], [9.7, 46.0], [9.8, 47.0], [9.9, 47.0], [10.0, 47.0], [10.1, 47.0], [10.2, 47.0], [10.3, 48.0], [10.4, 48.0], [10.5, 48.0], [10.6, 48.0], [10.7, 48.0], [10.8, 49.0], [10.9, 49.0], [11.0, 49.0], [11.1, 49.0], [11.2, 49.0], [11.3, 50.0], [11.4, 50.0], [11.5, 50.0], [11.6, 50.0], [11.7, 50.0], [11.8, 50.0], [11.9, 51.0], [12.0, 51.0], [12.1, 51.0], [12.2, 51.0], [12.3, 51.0], [12.4, 52.0], [12.5, 52.0], [12.6, 52.0], [12.7, 53.0], [12.8, 53.0], [12.9, 53.0], [13.0, 53.0], [13.1, 53.0], [13.2, 54.0], [13.3, 54.0], [13.4, 54.0], [13.5, 54.0], [13.6, 54.0], [13.7, 54.0], [13.8, 54.0], [13.9, 55.0], [14.0, 55.0], [14.1, 55.0], [14.2, 55.0], [14.3, 55.0], [14.4, 55.0], [14.5, 56.0], [14.6, 56.0], [14.7, 56.0], [14.8, 56.0], [14.9, 56.0], [15.0, 57.0], [15.1, 57.0], [15.2, 57.0], [15.3, 57.0], [15.4, 57.0], [15.5, 58.0], [15.6, 58.0], [15.7, 58.0], [15.8, 58.0], [15.9, 58.0], [16.0, 58.0], [16.1, 59.0], [16.2, 59.0], [16.3, 59.0], [16.4, 59.0], [16.5, 60.0], [16.6, 60.0], [16.7, 60.0], [16.8, 60.0], [16.9, 61.0], [17.0, 61.0], [17.1, 61.0], [17.2, 61.0], [17.3, 61.0], [17.4, 61.0], [17.5, 62.0], [17.6, 62.0], [17.7, 62.0], [17.8, 62.0], [17.9, 63.0], [18.0, 63.0], [18.1, 63.0], [18.2, 64.0], [18.3, 64.0], [18.4, 64.0], [18.5, 64.0], [18.6, 65.0], [18.7, 65.0], [18.8, 65.0], [18.9, 65.0], [19.0, 65.0], [19.1, 66.0], [19.2, 66.0], [19.3, 66.0], [19.4, 66.0], [19.5, 67.0], [19.6, 67.0], [19.7, 67.0], [19.8, 67.0], [19.9, 67.0], [20.0, 68.0], [20.1, 68.0], [20.2, 68.0], [20.3, 68.0], [20.4, 68.0], [20.5, 68.0], [20.6, 69.0], [20.7, 69.0], [20.8, 69.0], [20.9, 69.0], [21.0, 70.0], [21.1, 70.0], [21.2, 70.0], [21.3, 70.0], [21.4, 70.0], [21.5, 71.0], [21.6, 71.0], [21.7, 71.0], [21.8, 71.0], [21.9, 72.0], [22.0, 72.0], [22.1, 72.0], [22.2, 73.0], [22.3, 73.0], [22.4, 73.0], [22.5, 73.0], [22.6, 73.0], [22.7, 74.0], [22.8, 74.0], [22.9, 74.0], [23.0, 74.0], [23.1, 75.0], [23.2, 75.0], [23.3, 75.0], [23.4, 76.0], [23.5, 76.0], [23.6, 76.0], [23.7, 76.0], [23.8, 77.0], [23.9, 77.0], [24.0, 77.0], [24.1, 77.0], [24.2, 77.0], [24.3, 78.0], [24.4, 78.0], [24.5, 79.0], [24.6, 79.0], [24.7, 79.0], [24.8, 79.0], [24.9, 79.0], [25.0, 80.0], [25.1, 80.0], [25.2, 80.0], [25.3, 81.0], [25.4, 81.0], [25.5, 81.0], [25.6, 81.0], [25.7, 81.0], [25.8, 82.0], [25.9, 82.0], [26.0, 82.0], [26.1, 83.0], [26.2, 83.0], [26.3, 83.0], [26.4, 84.0], [26.5, 84.0], [26.6, 84.0], [26.7, 84.0], [26.8, 85.0], [26.9, 86.0], [27.0, 86.0], [27.1, 86.0], [27.2, 87.0], [27.3, 87.0], [27.4, 87.0], [27.5, 87.0], [27.6, 88.0], [27.7, 88.0], [27.8, 88.0], [27.9, 89.0], [28.0, 89.0], [28.1, 89.0], [28.2, 90.0], [28.3, 90.0], [28.4, 90.0], [28.5, 91.0], [28.6, 91.0], [28.7, 91.0], [28.8, 92.0], [28.9, 93.0], [29.0, 93.0], [29.1, 94.0], [29.2, 94.0], [29.3, 94.0], [29.4, 95.0], [29.5, 95.0], [29.6, 96.0], [29.7, 96.0], [29.8, 97.0], [29.9, 98.0], [30.0, 98.0], [30.1, 98.0], [30.2, 99.0], [30.3, 100.0], [30.4, 100.0], [30.5, 100.0], [30.6, 101.0], [30.7, 102.0], [30.8, 102.0], [30.9, 103.0], [31.0, 103.0], [31.1, 104.0], [31.2, 104.0], [31.3, 104.0], [31.4, 105.0], [31.5, 105.0], [31.6, 107.0], [31.7, 107.0], [31.8, 108.0], [31.9, 109.0], [32.0, 109.0], [32.1, 110.0], [32.2, 111.0], [32.3, 111.0], [32.4, 111.0], [32.5, 112.0], [32.6, 112.0], [32.7, 113.0], [32.8, 113.0], [32.9, 114.0], [33.0, 115.0], [33.1, 115.0], [33.2, 116.0], [33.3, 117.0], [33.4, 118.0], [33.5, 119.0], [33.6, 120.0], [33.7, 121.0], [33.8, 122.0], [33.9, 122.0], [34.0, 122.0], [34.1, 123.0], [34.2, 124.0], [34.3, 124.0], [34.4, 125.0], [34.5, 125.0], [34.6, 126.0], [34.7, 126.0], [34.8, 128.0], [34.9, 129.0], [35.0, 129.0], [35.1, 130.0], [35.2, 130.0], [35.3, 131.0], [35.4, 131.0], [35.5, 132.0], [35.6, 132.0], [35.7, 133.0], [35.8, 135.0], [35.9, 135.0], [36.0, 136.0], [36.1, 136.0], [36.2, 137.0], [36.3, 138.0], [36.4, 138.0], [36.5, 140.0], [36.6, 141.0], [36.7, 142.0], [36.8, 143.0], [36.9, 144.0], [37.0, 145.0], [37.1, 146.0], [37.2, 146.0], [37.3, 147.0], [37.4, 148.0], [37.5, 149.0], [37.6, 150.0], [37.7, 151.0], [37.8, 152.0], [37.9, 153.0], [38.0, 154.0], [38.1, 155.0], [38.2, 156.0], [38.3, 156.0], [38.4, 157.0], [38.5, 158.0], [38.6, 159.0], [38.7, 160.0], [38.8, 161.0], [38.9, 162.0], [39.0, 162.0], [39.1, 163.0], [39.2, 164.0], [39.3, 165.0], [39.4, 166.0], [39.5, 167.0], [39.6, 168.0], [39.7, 169.0], [39.8, 171.0], [39.9, 172.0], [40.0, 173.0], [40.1, 174.0], [40.2, 175.0], [40.3, 176.0], [40.4, 177.0], [40.5, 177.0], [40.6, 178.0], [40.7, 179.0], [40.8, 180.0], [40.9, 180.0], [41.0, 182.0], [41.1, 182.0], [41.2, 183.0], [41.3, 184.0], [41.4, 185.0], [41.5, 185.0], [41.6, 186.0], [41.7, 187.0], [41.8, 187.0], [41.9, 188.0], [42.0, 189.0], [42.1, 189.0], [42.2, 190.0], [42.3, 192.0], [42.4, 192.0], [42.5, 192.0], [42.6, 193.0], [42.7, 194.0], [42.8, 195.0], [42.9, 196.0], [43.0, 197.0], [43.1, 197.0], [43.2, 199.0], [43.3, 199.0], [43.4, 200.0], [43.5, 200.0], [43.6, 201.0], [43.7, 201.0], [43.8, 202.0], [43.9, 202.0], [44.0, 203.0], [44.1, 203.0], [44.2, 204.0], [44.3, 204.0], [44.4, 205.0], [44.5, 205.0], [44.6, 206.0], [44.7, 206.0], [44.8, 207.0], [44.9, 208.0], [45.0, 209.0], [45.1, 210.0], [45.2, 211.0], [45.3, 211.0], [45.4, 213.0], [45.5, 214.0], [45.6, 215.0], [45.7, 215.0], [45.8, 216.0], [45.9, 217.0], [46.0, 218.0], [46.1, 219.0], [46.2, 220.0], [46.3, 221.0], [46.4, 222.0], [46.5, 222.0], [46.6, 223.0], [46.7, 223.0], [46.8, 224.0], [46.9, 224.0], [47.0, 225.0], [47.1, 225.0], [47.2, 227.0], [47.3, 227.0], [47.4, 229.0], [47.5, 231.0], [47.6, 232.0], [47.7, 234.0], [47.8, 234.0], [47.9, 235.0], [48.0, 236.0], [48.1, 236.0], [48.2, 237.0], [48.3, 237.0], [48.4, 238.0], [48.5, 239.0], [48.6, 239.0], [48.7, 240.0], [48.8, 241.0], [48.9, 242.0], [49.0, 243.0], [49.1, 243.0], [49.2, 244.0], [49.3, 245.0], [49.4, 246.0], [49.5, 248.0], [49.6, 249.0], [49.7, 249.0], [49.8, 250.0], [49.9, 251.0], [50.0, 253.0], [50.1, 253.0], [50.2, 255.0], [50.3, 255.0], [50.4, 255.0], [50.5, 257.0], [50.6, 257.0], [50.7, 258.0], [50.8, 259.0], [50.9, 259.0], [51.0, 261.0], [51.1, 263.0], [51.2, 263.0], [51.3, 264.0], [51.4, 265.0], [51.5, 265.0], [51.6, 266.0], [51.7, 267.0], [51.8, 268.0], [51.9, 269.0], [52.0, 270.0], [52.1, 271.0], [52.2, 271.0], [52.3, 272.0], [52.4, 272.0], [52.5, 273.0], [52.6, 273.0], [52.7, 275.0], [52.8, 276.0], [52.9, 276.0], [53.0, 277.0], [53.1, 278.0], [53.2, 280.0], [53.3, 280.0], [53.4, 282.0], [53.5, 282.0], [53.6, 283.0], [53.7, 284.0], [53.8, 285.0], [53.9, 286.0], [54.0, 287.0], [54.1, 287.0], [54.2, 288.0], [54.3, 289.0], [54.4, 290.0], [54.5, 291.0], [54.6, 291.0], [54.7, 291.0], [54.8, 293.0], [54.9, 293.0], [55.0, 294.0], [55.1, 295.0], [55.2, 296.0], [55.3, 296.0], [55.4, 297.0], [55.5, 298.0], [55.6, 299.0], [55.7, 300.0], [55.8, 301.0], [55.9, 301.0], [56.0, 302.0], [56.1, 303.0], [56.2, 304.0], [56.3, 304.0], [56.4, 305.0], [56.5, 306.0], [56.6, 306.0], [56.7, 308.0], [56.8, 309.0], [56.9, 310.0], [57.0, 311.0], [57.1, 312.0], [57.2, 313.0], [57.3, 314.0], [57.4, 315.0], [57.5, 316.0], [57.6, 318.0], [57.7, 318.0], [57.8, 320.0], [57.9, 320.0], [58.0, 322.0], [58.1, 322.0], [58.2, 323.0], [58.3, 324.0], [58.4, 325.0], [58.5, 326.0], [58.6, 326.0], [58.7, 327.0], [58.8, 327.0], [58.9, 328.0], [59.0, 330.0], [59.1, 332.0], [59.2, 333.0], [59.3, 333.0], [59.4, 334.0], [59.5, 335.0], [59.6, 336.0], [59.7, 337.0], [59.8, 337.0], [59.9, 338.0], [60.0, 338.0], [60.1, 340.0], [60.2, 341.0], [60.3, 342.0], [60.4, 342.0], [60.5, 343.0], [60.6, 344.0], [60.7, 345.0], [60.8, 346.0], [60.9, 347.0], [61.0, 348.0], [61.1, 349.0], [61.2, 350.0], [61.3, 351.0], [61.4, 352.0], [61.5, 353.0], [61.6, 353.0], [61.7, 354.0], [61.8, 355.0], [61.9, 356.0], [62.0, 356.0], [62.1, 357.0], [62.2, 357.0], [62.3, 359.0], [62.4, 360.0], [62.5, 360.0], [62.6, 362.0], [62.7, 363.0], [62.8, 365.0], [62.9, 366.0], [63.0, 366.0], [63.1, 367.0], [63.2, 369.0], [63.3, 370.0], [63.4, 371.0], [63.5, 372.0], [63.6, 373.0], [63.7, 374.0], [63.8, 375.0], [63.9, 376.0], [64.0, 377.0], [64.1, 378.0], [64.2, 379.0], [64.3, 380.0], [64.4, 381.0], [64.5, 381.0], [64.6, 384.0], [64.7, 384.0], [64.8, 386.0], [64.9, 387.0], [65.0, 388.0], [65.1, 389.0], [65.2, 390.0], [65.3, 392.0], [65.4, 392.0], [65.5, 393.0], [65.6, 393.0], [65.7, 394.0], [65.8, 394.0], [65.9, 395.0], [66.0, 396.0], [66.1, 396.0], [66.2, 397.0], [66.3, 397.0], [66.4, 399.0], [66.5, 400.0], [66.6, 400.0], [66.7, 401.0], [66.8, 401.0], [66.9, 403.0], [67.0, 404.0], [67.1, 405.0], [67.2, 406.0], [67.3, 407.0], [67.4, 407.0], [67.5, 408.0], [67.6, 410.0], [67.7, 411.0], [67.8, 412.0], [67.9, 413.0], [68.0, 415.0], [68.1, 415.0], [68.2, 416.0], [68.3, 417.0], [68.4, 418.0], [68.5, 419.0], [68.6, 421.0], [68.7, 422.0], [68.8, 423.0], [68.9, 425.0], [69.0, 425.0], [69.1, 426.0], [69.2, 426.0], [69.3, 427.0], [69.4, 428.0], [69.5, 429.0], [69.6, 429.0], [69.7, 431.0], [69.8, 432.0], [69.9, 433.0], [70.0, 434.0], [70.1, 435.0], [70.2, 436.0], [70.3, 438.0], [70.4, 440.0], [70.5, 442.0], [70.6, 446.0], [70.7, 447.0], [70.8, 449.0], [70.9, 451.0], [71.0, 452.0], [71.1, 453.0], [71.2, 454.0], [71.3, 455.0], [71.4, 456.0], [71.5, 457.0], [71.6, 457.0], [71.7, 458.0], [71.8, 460.0], [71.9, 462.0], [72.0, 462.0], [72.1, 465.0], [72.2, 466.0], [72.3, 468.0], [72.4, 469.0], [72.5, 470.0], [72.6, 471.0], [72.7, 471.0], [72.8, 472.0], [72.9, 473.0], [73.0, 473.0], [73.1, 474.0], [73.2, 475.0], [73.3, 476.0], [73.4, 477.0], [73.5, 478.0], [73.6, 479.0], [73.7, 481.0], [73.8, 483.0], [73.9, 484.0], [74.0, 485.0], [74.1, 486.0], [74.2, 487.0], [74.3, 488.0], [74.4, 489.0], [74.5, 490.0], [74.6, 491.0], [74.7, 492.0], [74.8, 493.0], [74.9, 495.0], [75.0, 496.0], [75.1, 498.0], [75.2, 499.0], [75.3, 500.0], [75.4, 500.0], [75.5, 501.0], [75.6, 502.0], [75.7, 503.0], [75.8, 504.0], [75.9, 505.0], [76.0, 506.0], [76.1, 507.0], [76.2, 510.0], [76.3, 511.0], [76.4, 513.0], [76.5, 514.0], [76.6, 515.0], [76.7, 516.0], [76.8, 517.0], [76.9, 518.0], [77.0, 519.0], [77.1, 520.0], [77.2, 521.0], [77.3, 522.0], [77.4, 523.0], [77.5, 523.0], [77.6, 524.0], [77.7, 525.0], [77.8, 526.0], [77.9, 528.0], [78.0, 528.0], [78.1, 529.0], [78.2, 530.0], [78.3, 532.0], [78.4, 532.0], [78.5, 533.0], [78.6, 535.0], [78.7, 537.0], [78.8, 539.0], [78.9, 539.0], [79.0, 541.0], [79.1, 542.0], [79.2, 543.0], [79.3, 545.0], [79.4, 547.0], [79.5, 549.0], [79.6, 550.0], [79.7, 551.0], [79.8, 551.0], [79.9, 552.0], [80.0, 553.0], [80.1, 554.0], [80.2, 555.0], [80.3, 556.0], [80.4, 557.0], [80.5, 557.0], [80.6, 559.0], [80.7, 562.0], [80.8, 563.0], [80.9, 565.0], [81.0, 566.0], [81.1, 568.0], [81.2, 569.0], [81.3, 570.0], [81.4, 571.0], [81.5, 573.0], [81.6, 574.0], [81.7, 575.0], [81.8, 578.0], [81.9, 581.0], [82.0, 582.0], [82.1, 583.0], [82.2, 585.0], [82.3, 587.0], [82.4, 588.0], [82.5, 590.0], [82.6, 591.0], [82.7, 592.0], [82.8, 594.0], [82.9, 594.0], [83.0, 596.0], [83.1, 597.0], [83.2, 598.0], [83.3, 600.0], [83.4, 601.0], [83.5, 602.0], [83.6, 603.0], [83.7, 606.0], [83.8, 609.0], [83.9, 611.0], [84.0, 612.0], [84.1, 613.0], [84.2, 614.0], [84.3, 615.0], [84.4, 616.0], [84.5, 620.0], [84.6, 622.0], [84.7, 623.0], [84.8, 624.0], [84.9, 626.0], [85.0, 628.0], [85.1, 629.0], [85.2, 630.0], [85.3, 632.0], [85.4, 634.0], [85.5, 636.0], [85.6, 637.0], [85.7, 638.0], [85.8, 640.0], [85.9, 643.0], [86.0, 644.0], [86.1, 645.0], [86.2, 645.0], [86.3, 647.0], [86.4, 648.0], [86.5, 649.0], [86.6, 651.0], [86.7, 652.0], [86.8, 655.0], [86.9, 658.0], [87.0, 660.0], [87.1, 662.0], [87.2, 664.0], [87.3, 665.0], [87.4, 669.0], [87.5, 671.0], [87.6, 673.0], [87.7, 674.0], [87.8, 678.0], [87.9, 681.0], [88.0, 683.0], [88.1, 684.0], [88.2, 686.0], [88.3, 687.0], [88.4, 688.0], [88.5, 690.0], [88.6, 692.0], [88.7, 695.0], [88.8, 699.0], [88.9, 700.0], [89.0, 702.0], [89.1, 703.0], [89.2, 705.0], [89.3, 709.0], [89.4, 711.0], [89.5, 712.0], [89.6, 714.0], [89.7, 716.0], [89.8, 718.0], [89.9, 721.0], [90.0, 724.0], [90.1, 729.0], [90.2, 730.0], [90.3, 732.0], [90.4, 734.0], [90.5, 735.0], [90.6, 738.0], [90.7, 740.0], [90.8, 743.0], [90.9, 746.0], [91.0, 749.0], [91.1, 752.0], [91.2, 754.0], [91.3, 756.0], [91.4, 758.0], [91.5, 760.0], [91.6, 765.0], [91.7, 769.0], [91.8, 780.0], [91.9, 782.0], [92.0, 789.0], [92.1, 793.0], [92.2, 803.0], [92.3, 806.0], [92.4, 815.0], [92.5, 819.0], [92.6, 822.0], [92.7, 826.0], [92.8, 836.0], [92.9, 839.0], [93.0, 845.0], [93.1, 850.0], [93.2, 857.0], [93.3, 860.0], [93.4, 868.0], [93.5, 875.0], [93.6, 878.0], [93.7, 885.0], [93.8, 887.0], [93.9, 895.0], [94.0, 908.0], [94.1, 913.0], [94.2, 930.0], [94.3, 956.0], [94.4, 976.0], [94.5, 983.0], [94.6, 997.0], [94.7, 1007.0], [94.8, 1020.0], [94.9, 1039.0], [95.0, 1054.0], [95.1, 1069.0], [95.2, 1105.0], [95.3, 1135.0], [95.4, 1175.0], [95.5, 1208.0], [95.6, 1263.0], [95.7, 1294.0], [95.8, 1350.0], [95.9, 1410.0], [96.0, 1468.0], [96.1, 1522.0], [96.2, 1598.0], [96.3, 1642.0], [96.4, 1719.0], [96.5, 1758.0], [96.6, 1802.0], [96.7, 1833.0], [96.8, 1898.0], [96.9, 1970.0], [97.0, 2081.0], [97.1, 2143.0], [97.2, 2203.0], [97.3, 2334.0], [97.4, 2494.0], [97.5, 2543.0], [97.6, 2647.0], [97.7, 2789.0], [97.8, 2963.0], [97.9, 3026.0], [98.0, 3145.0], [98.1, 3245.0], [98.2, 3364.0], [98.3, 3457.0], [98.4, 3542.0], [98.5, 3757.0], [98.6, 3819.0], [98.7, 3890.0], [98.8, 4306.0], [98.9, 4646.0], [99.0, 4883.0], [99.1, 5167.0], [99.2, 5812.0], [99.3, 7648.0], [99.4, 8462.0], [99.5, 9584.0], [99.6, 10417.0], [99.7, 10874.0], [99.8, 11844.0], [99.9, 13707.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 1572.0, "series": [{"data": [[0.0, 1572.0], [600.0, 288.0], [700.0, 172.0], [800.0, 92.0], [900.0, 36.0], [1000.0, 27.0], [1100.0, 16.0], [1200.0, 14.0], [1300.0, 9.0], [1400.0, 8.0], [1500.0, 8.0], [1600.0, 8.0], [1700.0, 12.0], [1800.0, 11.0], [1900.0, 8.0], [2000.0, 4.0], [2100.0, 7.0], [2300.0, 3.0], [2200.0, 6.0], [2400.0, 4.0], [2500.0, 7.0], [2600.0, 5.0], [2800.0, 2.0], [2700.0, 3.0], [2900.0, 5.0], [3000.0, 5.0], [3100.0, 7.0], [3200.0, 4.0], [3300.0, 5.0], [3400.0, 5.0], [3500.0, 4.0], [3600.0, 3.0], [3700.0, 4.0], [3800.0, 8.0], [3900.0, 1.0], [4000.0, 1.0], [4300.0, 3.0], [4100.0, 2.0], [4600.0, 1.0], [4400.0, 2.0], [4700.0, 3.0], [4800.0, 3.0], [4900.0, 2.0], [5000.0, 2.0], [5100.0, 1.0], [5300.0, 3.0], [5200.0, 1.0], [5800.0, 1.0], [5900.0, 1.0], [6300.0, 1.0], [6800.0, 1.0], [7100.0, 1.0], [7600.0, 1.0], [7900.0, 1.0], [8100.0, 2.0], [8300.0, 1.0], [8400.0, 1.0], [8600.0, 1.0], [9200.0, 1.0], [8900.0, 1.0], [9400.0, 1.0], [9300.0, 1.0], [9500.0, 1.0], [9900.0, 1.0], [10100.0, 2.0], [9800.0, 1.0], [10400.0, 1.0], [10600.0, 2.0], [10500.0, 2.0], [11200.0, 1.0], [11000.0, 1.0], [10800.0, 1.0], [11300.0, 1.0], [11700.0, 1.0], [11900.0, 1.0], [11800.0, 1.0], [12200.0, 1.0], [13000.0, 1.0], [13500.0, 1.0], [13700.0, 1.0], [13800.0, 2.0], [14200.0, 1.0], [14300.0, 1.0], [15500.0, 1.0], [100.0, 677.0], [200.0, 641.0], [300.0, 559.0], [400.0, 458.0], [500.0, 416.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 15500.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 205.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 3915.0, "series": [{"data": [[0.0, 3915.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1070.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 205.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.941721854304635, "minX": 1.60249686E12, "maxY": 10.0, "series": [{"data": [[1.60249698E12, 10.0], [1.60249686E12, 10.0], [1.60249704E12, 10.0], [1.6024971E12, 9.941721854304635], [1.60249692E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6024971E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 305.0, "minX": 1.0, "maxY": 8189.0, "series": [{"data": [[8.0, 305.0], [4.0, 511.0], [2.0, 537.0], [1.0, 8189.0], [10.0, 459.3732149749132], [5.0, 600.0], [6.0, 739.0], [3.0, 508.0], [7.0, 356.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.991522157996146, 460.9281310211947]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 4908.566666666667, "minX": 1.60249686E12, "maxY": 6282503.633333334, "series": [{"data": [[1.60249698E12, 6282503.633333334], [1.60249686E12, 2460739.2666666666], [1.60249704E12, 5797612.666666667], [1.6024971E12, 2987845.216666667], [1.60249692E12, 5433463.016666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60249698E12, 12759.15], [1.60249686E12, 4908.566666666667], [1.60249704E12, 8986.9], [1.6024971E12, 5934.883333333333], [1.60249692E12, 7352.133333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6024971E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 350.17161916312915, "minX": 1.60249686E12, "maxY": 624.3440414507771, "series": [{"data": [[1.60249698E12, 350.17161916312915], [1.60249686E12, 374.4761171032356], [1.60249704E12, 522.5349829351535], [1.6024971E12, 472.643708609271], [1.60249692E12, 624.3440414507771]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6024971E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 348.1206791995147, "minX": 1.60249686E12, "maxY": 620.5077720207256, "series": [{"data": [[1.60249698E12, 348.1206791995147], [1.60249686E12, 372.6640986132509], [1.60249704E12, 520.4206484641637], [1.6024971E12, 471.10993377483504], [1.60249692E12, 620.5077720207256]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6024971E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.005119453924914674, "minX": 1.60249686E12, "maxY": 0.14946070878274278, "series": [{"data": [[1.60249698E12, 0.006670709520921766], [1.60249686E12, 0.14946070878274278], [1.60249704E12, 0.005119453924914674], [1.6024971E12, 0.007947019867549669], [1.60249692E12, 0.020725388601036263]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6024971E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 21.0, "minX": 1.60249686E12, "maxY": 15517.0, "series": [{"data": [[1.60249698E12, 14300.0], [1.60249686E12, 11201.0], [1.60249704E12, 10874.0], [1.6024971E12, 15517.0], [1.60249692E12, 11927.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60249698E12, 29.849999606609344], [1.60249686E12, 27.0], [1.60249704E12, 27.0], [1.6024971E12, 28.0], [1.60249692E12, 27.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60249698E12, 30.335000157356262], [1.60249686E12, 27.43500006198883], [1.60249704E12, 27.0], [1.6024971E12, 28.484400072097777], [1.60249692E12, 27.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60249698E12, 30.0], [1.60249686E12, 27.174999922513962], [1.60249704E12, 27.0], [1.6024971E12, 28.181999909877778], [1.60249692E12, 27.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60249698E12, 22.0], [1.60249686E12, 23.0], [1.60249704E12, 24.0], [1.6024971E12, 21.0], [1.60249692E12, 22.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60249698E12, 213.0], [1.60249686E12, 203.0], [1.60249704E12, 340.0], [1.6024971E12, 211.0], [1.60249692E12, 381.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6024971E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 62.0, "minX": 1.0, "maxY": 6467.5, "series": [{"data": [[2.0, 2777.0], [3.0, 1768.0], [4.0, 816.5], [5.0, 532.5], [6.0, 456.5], [7.0, 564.0], [8.0, 400.0], [9.0, 500.0], [10.0, 429.0], [11.0, 416.0], [12.0, 339.5], [13.0, 353.0], [14.0, 314.0], [15.0, 243.0], [16.0, 416.5], [17.0, 488.0], [18.0, 516.0], [19.0, 469.0], [20.0, 352.5], [21.0, 408.5], [22.0, 334.0], [23.0, 392.5], [24.0, 432.0], [25.0, 324.0], [26.0, 277.5], [27.0, 432.0], [28.0, 270.5], [29.0, 254.0], [30.0, 199.0], [31.0, 286.0], [33.0, 127.0], [32.0, 296.5], [35.0, 241.0], [34.0, 283.0], [37.0, 224.0], [36.0, 188.5], [39.0, 204.0], [40.0, 180.0], [43.0, 163.0], [44.0, 114.0], [45.0, 187.0], [47.0, 200.0], [48.0, 64.0], [50.0, 90.5], [52.0, 170.5], [53.0, 84.5], [55.0, 72.0], [57.0, 68.0], [59.0, 151.0], [63.0, 62.0], [66.0, 76.0], [69.0, 80.0], [73.0, 73.0], [72.0, 82.0], [1.0, 6467.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 73.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 62.0, "minX": 1.0, "maxY": 6467.0, "series": [{"data": [[2.0, 2776.0], [3.0, 1757.0], [4.0, 808.5], [5.0, 532.0], [6.0, 455.5], [7.0, 562.0], [8.0, 390.5], [9.0, 500.0], [10.0, 428.5], [11.0, 415.0], [12.0, 339.0], [13.0, 349.0], [14.0, 313.5], [15.0, 242.0], [16.0, 412.0], [17.0, 484.0], [18.0, 509.0], [19.0, 463.0], [20.0, 348.5], [21.0, 406.5], [22.0, 332.5], [23.0, 387.5], [24.0, 430.5], [25.0, 322.0], [26.0, 277.0], [27.0, 430.0], [28.0, 269.5], [29.0, 253.0], [30.0, 198.0], [31.0, 281.0], [33.0, 126.5], [32.0, 296.0], [35.0, 240.0], [34.0, 283.0], [37.0, 223.0], [36.0, 188.5], [39.0, 204.0], [40.0, 174.5], [43.0, 162.0], [44.0, 114.0], [45.0, 187.0], [47.0, 200.0], [48.0, 64.0], [50.0, 89.5], [52.0, 170.0], [53.0, 84.5], [55.0, 72.0], [57.0, 68.0], [59.0, 150.0], [63.0, 62.0], [66.0, 74.5], [69.0, 80.0], [73.0, 73.0], [72.0, 81.0], [1.0, 6467.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 73.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 10.983333333333333, "minX": 1.60249686E12, "maxY": 27.483333333333334, "series": [{"data": [[1.60249698E12, 27.483333333333334], [1.60249686E12, 10.983333333333333], [1.60249704E12, 19.533333333333335], [1.6024971E12, 12.416666666666666], [1.60249692E12, 16.083333333333332]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6024971E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 10.816666666666666, "minX": 1.60249686E12, "maxY": 27.483333333333334, "series": [{"data": [[1.60249698E12, 27.483333333333334], [1.60249686E12, 10.816666666666666], [1.60249704E12, 19.533333333333335], [1.6024971E12, 12.583333333333334], [1.60249692E12, 16.083333333333332]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6024971E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 10.816666666666666, "minX": 1.60249686E12, "maxY": 27.483333333333334, "series": [{"data": [[1.60249698E12, 27.483333333333334], [1.60249686E12, 10.816666666666666], [1.60249704E12, 19.533333333333335], [1.6024971E12, 12.583333333333334], [1.60249692E12, 16.083333333333332]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6024971E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 10.816666666666666, "minX": 1.60249686E12, "maxY": 27.483333333333334, "series": [{"data": [[1.60249698E12, 27.483333333333334], [1.60249686E12, 10.816666666666666], [1.60249704E12, 19.533333333333335], [1.6024971E12, 12.583333333333334], [1.60249692E12, 16.083333333333332]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6024971E12, "title": "Total Transactions Per Second"}},
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

