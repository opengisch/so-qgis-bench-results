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
        data: {"result": {"minY": 17.0, "minX": 0.0, "maxY": 13642.0, "series": [{"data": [[0.0, 17.0], [0.1, 20.0], [0.2, 22.0], [0.3, 23.0], [0.4, 24.0], [0.5, 25.0], [0.6, 26.0], [0.7, 26.0], [0.8, 27.0], [0.9, 27.0], [1.0, 27.0], [1.1, 27.0], [1.2, 27.0], [1.3, 28.0], [1.4, 28.0], [1.5, 28.0], [1.6, 29.0], [1.7, 29.0], [1.8, 30.0], [1.9, 30.0], [2.0, 30.0], [2.1, 30.0], [2.2, 31.0], [2.3, 31.0], [2.4, 31.0], [2.5, 31.0], [2.6, 31.0], [2.7, 32.0], [2.8, 32.0], [2.9, 32.0], [3.0, 32.0], [3.1, 32.0], [3.2, 33.0], [3.3, 33.0], [3.4, 33.0], [3.5, 33.0], [3.6, 33.0], [3.7, 34.0], [3.8, 34.0], [3.9, 34.0], [4.0, 34.0], [4.1, 34.0], [4.2, 35.0], [4.3, 35.0], [4.4, 35.0], [4.5, 35.0], [4.6, 36.0], [4.7, 36.0], [4.8, 36.0], [4.9, 36.0], [5.0, 36.0], [5.1, 37.0], [5.2, 37.0], [5.3, 37.0], [5.4, 37.0], [5.5, 37.0], [5.6, 38.0], [5.7, 38.0], [5.8, 38.0], [5.9, 38.0], [6.0, 38.0], [6.1, 38.0], [6.2, 39.0], [6.3, 39.0], [6.4, 39.0], [6.5, 39.0], [6.6, 39.0], [6.7, 40.0], [6.8, 40.0], [6.9, 40.0], [7.0, 40.0], [7.1, 40.0], [7.2, 41.0], [7.3, 41.0], [7.4, 41.0], [7.5, 41.0], [7.6, 41.0], [7.7, 41.0], [7.8, 42.0], [7.9, 42.0], [8.0, 42.0], [8.1, 42.0], [8.2, 42.0], [8.3, 42.0], [8.4, 43.0], [8.5, 43.0], [8.6, 43.0], [8.7, 43.0], [8.8, 43.0], [8.9, 44.0], [9.0, 44.0], [9.1, 44.0], [9.2, 44.0], [9.3, 45.0], [9.4, 45.0], [9.5, 45.0], [9.6, 45.0], [9.7, 45.0], [9.8, 45.0], [9.9, 45.0], [10.0, 46.0], [10.1, 46.0], [10.2, 46.0], [10.3, 46.0], [10.4, 46.0], [10.5, 47.0], [10.6, 47.0], [10.7, 47.0], [10.8, 47.0], [10.9, 47.0], [11.0, 47.0], [11.1, 48.0], [11.2, 48.0], [11.3, 48.0], [11.4, 48.0], [11.5, 48.0], [11.6, 49.0], [11.7, 49.0], [11.8, 49.0], [11.9, 49.0], [12.0, 49.0], [12.1, 50.0], [12.2, 50.0], [12.3, 50.0], [12.4, 50.0], [12.5, 50.0], [12.6, 50.0], [12.7, 50.0], [12.8, 51.0], [12.9, 51.0], [13.0, 51.0], [13.1, 51.0], [13.2, 51.0], [13.3, 51.0], [13.4, 52.0], [13.5, 52.0], [13.6, 52.0], [13.7, 52.0], [13.8, 52.0], [13.9, 53.0], [14.0, 53.0], [14.1, 53.0], [14.2, 53.0], [14.3, 54.0], [14.4, 54.0], [14.5, 54.0], [14.6, 54.0], [14.7, 54.0], [14.8, 55.0], [14.9, 55.0], [15.0, 55.0], [15.1, 55.0], [15.2, 55.0], [15.3, 56.0], [15.4, 56.0], [15.5, 56.0], [15.6, 56.0], [15.7, 56.0], [15.8, 57.0], [15.9, 57.0], [16.0, 57.0], [16.1, 58.0], [16.2, 58.0], [16.3, 58.0], [16.4, 58.0], [16.5, 58.0], [16.6, 59.0], [16.7, 59.0], [16.8, 59.0], [16.9, 59.0], [17.0, 60.0], [17.1, 60.0], [17.2, 60.0], [17.3, 60.0], [17.4, 61.0], [17.5, 61.0], [17.6, 61.0], [17.7, 61.0], [17.8, 62.0], [17.9, 62.0], [18.0, 62.0], [18.1, 62.0], [18.2, 62.0], [18.3, 63.0], [18.4, 63.0], [18.5, 63.0], [18.6, 63.0], [18.7, 64.0], [18.8, 64.0], [18.9, 64.0], [19.0, 64.0], [19.1, 64.0], [19.2, 64.0], [19.3, 65.0], [19.4, 65.0], [19.5, 65.0], [19.6, 65.0], [19.7, 66.0], [19.8, 66.0], [19.9, 66.0], [20.0, 66.0], [20.1, 67.0], [20.2, 67.0], [20.3, 67.0], [20.4, 67.0], [20.5, 67.0], [20.6, 68.0], [20.7, 68.0], [20.8, 68.0], [20.9, 68.0], [21.0, 69.0], [21.1, 69.0], [21.2, 69.0], [21.3, 69.0], [21.4, 69.0], [21.5, 69.0], [21.6, 70.0], [21.7, 70.0], [21.8, 70.0], [21.9, 70.0], [22.0, 71.0], [22.1, 71.0], [22.2, 71.0], [22.3, 71.0], [22.4, 72.0], [22.5, 72.0], [22.6, 72.0], [22.7, 73.0], [22.8, 73.0], [22.9, 73.0], [23.0, 73.0], [23.1, 74.0], [23.2, 74.0], [23.3, 74.0], [23.4, 74.0], [23.5, 75.0], [23.6, 75.0], [23.7, 75.0], [23.8, 76.0], [23.9, 76.0], [24.0, 76.0], [24.1, 77.0], [24.2, 77.0], [24.3, 77.0], [24.4, 77.0], [24.5, 78.0], [24.6, 78.0], [24.7, 78.0], [24.8, 79.0], [24.9, 79.0], [25.0, 79.0], [25.1, 79.0], [25.2, 80.0], [25.3, 80.0], [25.4, 80.0], [25.5, 80.0], [25.6, 81.0], [25.7, 81.0], [25.8, 81.0], [25.9, 81.0], [26.0, 82.0], [26.1, 82.0], [26.2, 82.0], [26.3, 83.0], [26.4, 84.0], [26.5, 84.0], [26.6, 84.0], [26.7, 84.0], [26.8, 85.0], [26.9, 85.0], [27.0, 85.0], [27.1, 86.0], [27.2, 86.0], [27.3, 86.0], [27.4, 86.0], [27.5, 86.0], [27.6, 87.0], [27.7, 87.0], [27.8, 87.0], [27.9, 88.0], [28.0, 88.0], [28.1, 89.0], [28.2, 89.0], [28.3, 89.0], [28.4, 89.0], [28.5, 90.0], [28.6, 90.0], [28.7, 90.0], [28.8, 91.0], [28.9, 91.0], [29.0, 91.0], [29.1, 92.0], [29.2, 92.0], [29.3, 93.0], [29.4, 93.0], [29.5, 94.0], [29.6, 94.0], [29.7, 94.0], [29.8, 95.0], [29.9, 95.0], [30.0, 96.0], [30.1, 96.0], [30.2, 96.0], [30.3, 97.0], [30.4, 97.0], [30.5, 98.0], [30.6, 99.0], [30.7, 99.0], [30.8, 99.0], [30.9, 100.0], [31.0, 100.0], [31.1, 101.0], [31.2, 101.0], [31.3, 102.0], [31.4, 103.0], [31.5, 103.0], [31.6, 103.0], [31.7, 104.0], [31.8, 104.0], [31.9, 105.0], [32.0, 105.0], [32.1, 106.0], [32.2, 106.0], [32.3, 107.0], [32.4, 108.0], [32.5, 108.0], [32.6, 109.0], [32.7, 110.0], [32.8, 111.0], [32.9, 112.0], [33.0, 113.0], [33.1, 114.0], [33.2, 114.0], [33.3, 115.0], [33.4, 115.0], [33.5, 116.0], [33.6, 116.0], [33.7, 118.0], [33.8, 118.0], [33.9, 119.0], [34.0, 120.0], [34.1, 121.0], [34.2, 121.0], [34.3, 122.0], [34.4, 122.0], [34.5, 123.0], [34.6, 124.0], [34.7, 125.0], [34.8, 126.0], [34.9, 127.0], [35.0, 127.0], [35.1, 128.0], [35.2, 129.0], [35.3, 129.0], [35.4, 131.0], [35.5, 131.0], [35.6, 132.0], [35.7, 132.0], [35.8, 133.0], [35.9, 134.0], [36.0, 136.0], [36.1, 138.0], [36.2, 139.0], [36.3, 139.0], [36.4, 141.0], [36.5, 141.0], [36.6, 142.0], [36.7, 144.0], [36.8, 144.0], [36.9, 145.0], [37.0, 146.0], [37.1, 146.0], [37.2, 147.0], [37.3, 147.0], [37.4, 149.0], [37.5, 149.0], [37.6, 150.0], [37.7, 151.0], [37.8, 151.0], [37.9, 152.0], [38.0, 153.0], [38.1, 154.0], [38.2, 155.0], [38.3, 156.0], [38.4, 157.0], [38.5, 157.0], [38.6, 158.0], [38.7, 159.0], [38.8, 160.0], [38.9, 161.0], [39.0, 162.0], [39.1, 163.0], [39.2, 164.0], [39.3, 166.0], [39.4, 167.0], [39.5, 168.0], [39.6, 168.0], [39.7, 169.0], [39.8, 170.0], [39.9, 170.0], [40.0, 171.0], [40.1, 172.0], [40.2, 173.0], [40.3, 173.0], [40.4, 174.0], [40.5, 175.0], [40.6, 175.0], [40.7, 176.0], [40.8, 177.0], [40.9, 178.0], [41.0, 178.0], [41.1, 179.0], [41.2, 179.0], [41.3, 180.0], [41.4, 181.0], [41.5, 181.0], [41.6, 182.0], [41.7, 182.0], [41.8, 182.0], [41.9, 184.0], [42.0, 184.0], [42.1, 185.0], [42.2, 185.0], [42.3, 186.0], [42.4, 186.0], [42.5, 187.0], [42.6, 188.0], [42.7, 189.0], [42.8, 190.0], [42.9, 191.0], [43.0, 191.0], [43.1, 192.0], [43.2, 192.0], [43.3, 193.0], [43.4, 194.0], [43.5, 194.0], [43.6, 195.0], [43.7, 195.0], [43.8, 195.0], [43.9, 196.0], [44.0, 197.0], [44.1, 197.0], [44.2, 198.0], [44.3, 198.0], [44.4, 199.0], [44.5, 199.0], [44.6, 199.0], [44.7, 200.0], [44.8, 201.0], [44.9, 202.0], [45.0, 202.0], [45.1, 203.0], [45.2, 204.0], [45.3, 205.0], [45.4, 205.0], [45.5, 206.0], [45.6, 206.0], [45.7, 206.0], [45.8, 207.0], [45.9, 208.0], [46.0, 208.0], [46.1, 209.0], [46.2, 209.0], [46.3, 210.0], [46.4, 211.0], [46.5, 212.0], [46.6, 212.0], [46.7, 214.0], [46.8, 214.0], [46.9, 215.0], [47.0, 216.0], [47.1, 216.0], [47.2, 217.0], [47.3, 218.0], [47.4, 218.0], [47.5, 219.0], [47.6, 220.0], [47.7, 220.0], [47.8, 222.0], [47.9, 223.0], [48.0, 223.0], [48.1, 224.0], [48.2, 225.0], [48.3, 226.0], [48.4, 227.0], [48.5, 227.0], [48.6, 228.0], [48.7, 229.0], [48.8, 229.0], [48.9, 230.0], [49.0, 232.0], [49.1, 232.0], [49.2, 233.0], [49.3, 234.0], [49.4, 235.0], [49.5, 235.0], [49.6, 236.0], [49.7, 236.0], [49.8, 237.0], [49.9, 238.0], [50.0, 239.0], [50.1, 241.0], [50.2, 242.0], [50.3, 242.0], [50.4, 243.0], [50.5, 244.0], [50.6, 244.0], [50.7, 246.0], [50.8, 247.0], [50.9, 248.0], [51.0, 248.0], [51.1, 249.0], [51.2, 250.0], [51.3, 250.0], [51.4, 251.0], [51.5, 252.0], [51.6, 254.0], [51.7, 254.0], [51.8, 255.0], [51.9, 256.0], [52.0, 257.0], [52.1, 258.0], [52.2, 260.0], [52.3, 260.0], [52.4, 261.0], [52.5, 261.0], [52.6, 263.0], [52.7, 264.0], [52.8, 264.0], [52.9, 265.0], [53.0, 266.0], [53.1, 266.0], [53.2, 267.0], [53.3, 268.0], [53.4, 270.0], [53.5, 271.0], [53.6, 271.0], [53.7, 272.0], [53.8, 274.0], [53.9, 274.0], [54.0, 275.0], [54.1, 277.0], [54.2, 278.0], [54.3, 279.0], [54.4, 280.0], [54.5, 281.0], [54.6, 282.0], [54.7, 283.0], [54.8, 283.0], [54.9, 284.0], [55.0, 285.0], [55.1, 286.0], [55.2, 287.0], [55.3, 287.0], [55.4, 288.0], [55.5, 288.0], [55.6, 290.0], [55.7, 291.0], [55.8, 292.0], [55.9, 293.0], [56.0, 294.0], [56.1, 295.0], [56.2, 296.0], [56.3, 296.0], [56.4, 298.0], [56.5, 298.0], [56.6, 298.0], [56.7, 299.0], [56.8, 300.0], [56.9, 301.0], [57.0, 303.0], [57.1, 304.0], [57.2, 305.0], [57.3, 306.0], [57.4, 307.0], [57.5, 308.0], [57.6, 308.0], [57.7, 309.0], [57.8, 310.0], [57.9, 311.0], [58.0, 311.0], [58.1, 312.0], [58.2, 313.0], [58.3, 315.0], [58.4, 316.0], [58.5, 317.0], [58.6, 317.0], [58.7, 318.0], [58.8, 320.0], [58.9, 321.0], [59.0, 322.0], [59.1, 322.0], [59.2, 323.0], [59.3, 324.0], [59.4, 325.0], [59.5, 326.0], [59.6, 327.0], [59.7, 327.0], [59.8, 328.0], [59.9, 330.0], [60.0, 330.0], [60.1, 332.0], [60.2, 333.0], [60.3, 333.0], [60.4, 334.0], [60.5, 334.0], [60.6, 335.0], [60.7, 336.0], [60.8, 336.0], [60.9, 336.0], [61.0, 337.0], [61.1, 338.0], [61.2, 339.0], [61.3, 339.0], [61.4, 340.0], [61.5, 341.0], [61.6, 342.0], [61.7, 343.0], [61.8, 344.0], [61.9, 345.0], [62.0, 346.0], [62.1, 347.0], [62.2, 349.0], [62.3, 350.0], [62.4, 351.0], [62.5, 352.0], [62.6, 353.0], [62.7, 353.0], [62.8, 355.0], [62.9, 356.0], [63.0, 357.0], [63.1, 358.0], [63.2, 358.0], [63.3, 359.0], [63.4, 360.0], [63.5, 361.0], [63.6, 362.0], [63.7, 363.0], [63.8, 364.0], [63.9, 365.0], [64.0, 365.0], [64.1, 366.0], [64.2, 367.0], [64.3, 368.0], [64.4, 369.0], [64.5, 370.0], [64.6, 371.0], [64.7, 372.0], [64.8, 373.0], [64.9, 373.0], [65.0, 375.0], [65.1, 376.0], [65.2, 378.0], [65.3, 379.0], [65.4, 380.0], [65.5, 381.0], [65.6, 382.0], [65.7, 383.0], [65.8, 384.0], [65.9, 385.0], [66.0, 386.0], [66.1, 386.0], [66.2, 387.0], [66.3, 388.0], [66.4, 389.0], [66.5, 389.0], [66.6, 390.0], [66.7, 390.0], [66.8, 391.0], [66.9, 392.0], [67.0, 393.0], [67.1, 394.0], [67.2, 395.0], [67.3, 396.0], [67.4, 397.0], [67.5, 397.0], [67.6, 398.0], [67.7, 399.0], [67.8, 400.0], [67.9, 400.0], [68.0, 402.0], [68.1, 403.0], [68.2, 404.0], [68.3, 405.0], [68.4, 406.0], [68.5, 407.0], [68.6, 408.0], [68.7, 409.0], [68.8, 410.0], [68.9, 410.0], [69.0, 412.0], [69.1, 413.0], [69.2, 414.0], [69.3, 415.0], [69.4, 416.0], [69.5, 417.0], [69.6, 418.0], [69.7, 419.0], [69.8, 420.0], [69.9, 421.0], [70.0, 422.0], [70.1, 423.0], [70.2, 423.0], [70.3, 424.0], [70.4, 426.0], [70.5, 428.0], [70.6, 429.0], [70.7, 430.0], [70.8, 430.0], [70.9, 431.0], [71.0, 431.0], [71.1, 432.0], [71.2, 433.0], [71.3, 435.0], [71.4, 436.0], [71.5, 437.0], [71.6, 437.0], [71.7, 438.0], [71.8, 440.0], [71.9, 442.0], [72.0, 443.0], [72.1, 444.0], [72.2, 447.0], [72.3, 448.0], [72.4, 449.0], [72.5, 449.0], [72.6, 451.0], [72.7, 453.0], [72.8, 454.0], [72.9, 455.0], [73.0, 455.0], [73.1, 456.0], [73.2, 458.0], [73.3, 459.0], [73.4, 460.0], [73.5, 461.0], [73.6, 462.0], [73.7, 464.0], [73.8, 465.0], [73.9, 466.0], [74.0, 467.0], [74.1, 468.0], [74.2, 469.0], [74.3, 471.0], [74.4, 472.0], [74.5, 473.0], [74.6, 475.0], [74.7, 476.0], [74.8, 477.0], [74.9, 477.0], [75.0, 478.0], [75.1, 479.0], [75.2, 481.0], [75.3, 482.0], [75.4, 482.0], [75.5, 484.0], [75.6, 485.0], [75.7, 486.0], [75.8, 488.0], [75.9, 490.0], [76.0, 491.0], [76.1, 491.0], [76.2, 493.0], [76.3, 493.0], [76.4, 495.0], [76.5, 496.0], [76.6, 497.0], [76.7, 498.0], [76.8, 499.0], [76.9, 501.0], [77.0, 503.0], [77.1, 504.0], [77.2, 505.0], [77.3, 505.0], [77.4, 507.0], [77.5, 508.0], [77.6, 510.0], [77.7, 511.0], [77.8, 512.0], [77.9, 513.0], [78.0, 513.0], [78.1, 514.0], [78.2, 515.0], [78.3, 516.0], [78.4, 518.0], [78.5, 520.0], [78.6, 520.0], [78.7, 522.0], [78.8, 522.0], [78.9, 523.0], [79.0, 524.0], [79.1, 525.0], [79.2, 527.0], [79.3, 527.0], [79.4, 528.0], [79.5, 529.0], [79.6, 531.0], [79.7, 532.0], [79.8, 533.0], [79.9, 535.0], [80.0, 536.0], [80.1, 538.0], [80.2, 540.0], [80.3, 541.0], [80.4, 542.0], [80.5, 543.0], [80.6, 544.0], [80.7, 545.0], [80.8, 545.0], [80.9, 546.0], [81.0, 548.0], [81.1, 549.0], [81.2, 550.0], [81.3, 551.0], [81.4, 553.0], [81.5, 553.0], [81.6, 555.0], [81.7, 556.0], [81.8, 559.0], [81.9, 559.0], [82.0, 560.0], [82.1, 562.0], [82.2, 563.0], [82.3, 564.0], [82.4, 565.0], [82.5, 566.0], [82.6, 567.0], [82.7, 568.0], [82.8, 569.0], [82.9, 570.0], [83.0, 570.0], [83.1, 572.0], [83.2, 572.0], [83.3, 574.0], [83.4, 575.0], [83.5, 576.0], [83.6, 577.0], [83.7, 578.0], [83.8, 579.0], [83.9, 579.0], [84.0, 580.0], [84.1, 582.0], [84.2, 583.0], [84.3, 584.0], [84.4, 586.0], [84.5, 588.0], [84.6, 590.0], [84.7, 592.0], [84.8, 595.0], [84.9, 597.0], [85.0, 599.0], [85.1, 602.0], [85.2, 604.0], [85.3, 605.0], [85.4, 607.0], [85.5, 609.0], [85.6, 610.0], [85.7, 611.0], [85.8, 613.0], [85.9, 614.0], [86.0, 615.0], [86.1, 617.0], [86.2, 618.0], [86.3, 620.0], [86.4, 623.0], [86.5, 625.0], [86.6, 626.0], [86.7, 627.0], [86.8, 629.0], [86.9, 631.0], [87.0, 634.0], [87.1, 634.0], [87.2, 636.0], [87.3, 638.0], [87.4, 641.0], [87.5, 641.0], [87.6, 643.0], [87.7, 645.0], [87.8, 647.0], [87.9, 649.0], [88.0, 650.0], [88.1, 652.0], [88.2, 654.0], [88.3, 655.0], [88.4, 656.0], [88.5, 658.0], [88.6, 662.0], [88.7, 666.0], [88.8, 668.0], [88.9, 670.0], [89.0, 671.0], [89.1, 673.0], [89.2, 676.0], [89.3, 679.0], [89.4, 681.0], [89.5, 683.0], [89.6, 684.0], [89.7, 687.0], [89.8, 688.0], [89.9, 691.0], [90.0, 694.0], [90.1, 696.0], [90.2, 697.0], [90.3, 700.0], [90.4, 703.0], [90.5, 705.0], [90.6, 708.0], [90.7, 712.0], [90.8, 715.0], [90.9, 718.0], [91.0, 720.0], [91.1, 722.0], [91.2, 726.0], [91.3, 730.0], [91.4, 731.0], [91.5, 735.0], [91.6, 737.0], [91.7, 741.0], [91.8, 745.0], [91.9, 748.0], [92.0, 752.0], [92.1, 755.0], [92.2, 762.0], [92.3, 766.0], [92.4, 774.0], [92.5, 777.0], [92.6, 782.0], [92.7, 788.0], [92.8, 792.0], [92.9, 806.0], [93.0, 808.0], [93.1, 815.0], [93.2, 827.0], [93.3, 837.0], [93.4, 840.0], [93.5, 844.0], [93.6, 849.0], [93.7, 855.0], [93.8, 859.0], [93.9, 870.0], [94.0, 888.0], [94.1, 892.0], [94.2, 900.0], [94.3, 917.0], [94.4, 923.0], [94.5, 937.0], [94.6, 952.0], [94.7, 972.0], [94.8, 1002.0], [94.9, 1020.0], [95.0, 1027.0], [95.1, 1043.0], [95.2, 1064.0], [95.3, 1120.0], [95.4, 1164.0], [95.5, 1192.0], [95.6, 1225.0], [95.7, 1270.0], [95.8, 1330.0], [95.9, 1352.0], [96.0, 1391.0], [96.1, 1430.0], [96.2, 1505.0], [96.3, 1587.0], [96.4, 1631.0], [96.5, 1677.0], [96.6, 1744.0], [96.7, 1796.0], [96.8, 1838.0], [96.9, 1885.0], [97.0, 1976.0], [97.1, 2039.0], [97.2, 2130.0], [97.3, 2262.0], [97.4, 2443.0], [97.5, 2510.0], [97.6, 2555.0], [97.7, 2635.0], [97.8, 2706.0], [97.9, 2895.0], [98.0, 2971.0], [98.1, 3117.0], [98.2, 3186.0], [98.3, 3316.0], [98.4, 3447.0], [98.5, 3570.0], [98.6, 3715.0], [98.7, 3999.0], [98.8, 4411.0], [98.9, 4566.0], [99.0, 4908.0], [99.1, 5226.0], [99.2, 5448.0], [99.3, 7758.0], [99.4, 8266.0], [99.5, 9033.0], [99.6, 10571.0], [99.7, 11528.0], [99.8, 12076.0], [99.9, 12405.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 1599.0, "series": [{"data": [[0.0, 1599.0], [600.0, 274.0], [700.0, 133.0], [800.0, 69.0], [900.0, 30.0], [1000.0, 25.0], [1100.0, 15.0], [1200.0, 11.0], [1300.0, 15.0], [1400.0, 8.0], [1500.0, 7.0], [1600.0, 10.0], [1700.0, 10.0], [1800.0, 11.0], [1900.0, 8.0], [2000.0, 6.0], [2100.0, 2.0], [2200.0, 6.0], [2300.0, 3.0], [2400.0, 3.0], [2500.0, 9.0], [2600.0, 7.0], [2800.0, 5.0], [2700.0, 3.0], [2900.0, 5.0], [3000.0, 3.0], [3100.0, 7.0], [3300.0, 5.0], [3200.0, 3.0], [3400.0, 4.0], [3500.0, 5.0], [3600.0, 3.0], [3700.0, 3.0], [3800.0, 1.0], [3900.0, 2.0], [4300.0, 2.0], [4200.0, 2.0], [4400.0, 5.0], [4500.0, 2.0], [4600.0, 3.0], [4700.0, 1.0], [4900.0, 3.0], [5100.0, 1.0], [5000.0, 1.0], [5200.0, 1.0], [5300.0, 2.0], [5400.0, 3.0], [6000.0, 1.0], [6800.0, 1.0], [7300.0, 1.0], [7700.0, 2.0], [7800.0, 2.0], [8100.0, 1.0], [8000.0, 1.0], [8300.0, 1.0], [8200.0, 2.0], [8700.0, 1.0], [8500.0, 1.0], [9000.0, 2.0], [9100.0, 1.0], [9600.0, 1.0], [10500.0, 2.0], [10700.0, 1.0], [10400.0, 1.0], [11100.0, 1.0], [11000.0, 1.0], [11200.0, 1.0], [11500.0, 2.0], [11800.0, 2.0], [12000.0, 1.0], [11900.0, 1.0], [12100.0, 1.0], [12300.0, 3.0], [12400.0, 1.0], [12600.0, 1.0], [12800.0, 1.0], [13000.0, 1.0], [13100.0, 1.0], [13600.0, 1.0], [100.0, 716.0], [200.0, 628.0], [300.0, 572.0], [400.0, 473.0], [500.0, 424.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 13600.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 198.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 3990.0, "series": [{"data": [[0.0, 3990.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1002.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 198.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 1.6023753E12, "maxY": 10.0, "series": [{"data": [[1.60237542E12, 10.0], [1.60237554E12, 1.0], [1.60237536E12, 10.0], [1.60237548E12, 9.973134328358212], [1.6023753E12, 9.998041136141053]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60237554E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 381.0, "minX": 1.0, "maxY": 7719.0, "series": [{"data": [[8.0, 602.5], [4.0, 517.0], [2.0, 549.0], [1.0, 7719.0], [9.0, 661.0], [10.0, 445.7389961389963], [5.0, 570.0], [6.0, 381.0], [3.0, 560.0], [7.0, 596.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.99094412331403, 447.33834296724524]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 6.883333333333334, "minX": 1.6023753E12, "maxY": 6573175.35, "series": [{"data": [[1.60237542E12, 6549684.1], [1.60237554E12, 20.783333333333335], [1.60237536E12, 6573175.35], [1.60237548E12, 6159766.3], [1.6023753E12, 3679517.183333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60237542E12, 12974.616666666667], [1.60237554E12, 6.883333333333334], [1.60237536E12, 8761.0], [1.60237548E12, 10491.3], [1.6023753E12, 7707.833333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60237554E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 351.0428907168034, "minX": 1.6023753E12, "maxY": 7719.0, "series": [{"data": [[1.60237542E12, 351.0428907168034], [1.60237554E12, 7719.0], [1.60237536E12, 535.6305506216697], [1.60237548E12, 424.936567164179], [1.6023753E12, 532.7688540646429]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60237554E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 349.1028202115164, "minX": 1.6023753E12, "maxY": 7719.0, "series": [{"data": [[1.60237542E12, 349.1028202115164], [1.60237554E12, 7719.0], [1.60237536E12, 531.8117229129666], [1.60237548E12, 422.57686567164154], [1.6023753E12, 530.9412340842307]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60237554E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.6023753E12, "maxY": 0.09794319294809024, "series": [{"data": [[1.60237542E12, 0.006462984723854286], [1.60237554E12, 0.0], [1.60237536E12, 0.00532859680284192], [1.60237548E12, 0.006716417910447765], [1.6023753E12, 0.09794319294809024]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60237554E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 17.0, "minX": 1.6023753E12, "maxY": 13642.0, "series": [{"data": [[1.60237542E12, 10743.0], [1.60237554E12, 7719.0], [1.60237536E12, 13642.0], [1.60237548E12, 13193.0], [1.6023753E12, 12076.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60237542E12, 26.0], [1.60237554E12, 7719.0], [1.60237536E12, 30.14299973130226], [1.60237548E12, 27.068999680280683], [1.6023753E12, 28.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60237542E12, 26.0], [1.60237554E12, 7719.0], [1.60237536E12, 31.157300107479095], [1.60237548E12, 28.0], [1.6023753E12, 28.117800097465516]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60237542E12, 26.0], [1.60237554E12, 7719.0], [1.60237536E12, 30.706499865651132], [1.60237548E12, 27.73949984014034], [1.6023753E12, 28.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60237542E12, 17.0], [1.60237554E12, 7719.0], [1.60237536E12, 23.0], [1.60237548E12, 20.0], [1.6023753E12, 22.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60237542E12, 198.0], [1.60237554E12, 7719.0], [1.60237536E12, 400.0], [1.60237548E12, 245.5], [1.6023753E12, 205.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60237554E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 54.0, "minX": 1.0, "maxY": 4657.0, "series": [{"data": [[2.0, 2638.0], [3.0, 4579.0], [4.0, 717.5], [5.0, 375.0], [6.0, 1092.5], [7.0, 549.0], [8.0, 555.0], [9.0, 402.0], [10.0, 384.5], [11.0, 449.0], [12.0, 319.5], [13.0, 397.5], [14.0, 333.0], [15.0, 174.0], [16.0, 311.5], [17.0, 504.0], [18.0, 510.5], [19.0, 467.0], [20.0, 434.5], [21.0, 294.5], [22.0, 472.0], [23.0, 400.0], [24.0, 386.0], [25.0, 278.0], [26.0, 364.5], [27.0, 311.5], [28.0, 329.0], [29.0, 156.5], [30.0, 308.5], [31.0, 211.5], [33.0, 230.0], [32.0, 223.5], [34.0, 218.5], [35.0, 216.0], [36.0, 225.5], [37.0, 54.0], [38.0, 203.0], [41.0, 233.0], [43.0, 181.0], [45.0, 150.0], [44.0, 179.5], [47.0, 198.0], [46.0, 176.0], [49.0, 93.0], [48.0, 99.0], [50.0, 145.5], [53.0, 185.0], [54.0, 91.5], [56.0, 119.0], [58.0, 81.0], [63.0, 80.0], [66.0, 65.0], [65.0, 55.0], [86.0, 71.0], [1.0, 4657.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 86.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 54.0, "minX": 1.0, "maxY": 4655.0, "series": [{"data": [[2.0, 2635.5], [3.0, 4577.0], [4.0, 716.5], [5.0, 373.5], [6.0, 1088.5], [7.0, 546.0], [8.0, 552.0], [9.0, 400.0], [10.0, 382.0], [11.0, 446.0], [12.0, 318.0], [13.0, 391.0], [14.0, 332.5], [15.0, 173.0], [16.0, 306.5], [17.0, 490.0], [18.0, 502.5], [19.0, 457.0], [20.0, 428.0], [21.0, 294.5], [22.0, 464.5], [23.0, 399.0], [24.0, 383.5], [25.0, 278.0], [26.0, 362.5], [27.0, 311.0], [28.0, 328.0], [29.0, 150.0], [30.0, 306.5], [31.0, 209.5], [33.0, 229.0], [32.0, 223.0], [34.0, 217.5], [35.0, 216.0], [36.0, 225.0], [37.0, 54.0], [38.0, 202.0], [41.0, 233.0], [43.0, 178.0], [45.0, 150.0], [44.0, 178.0], [47.0, 198.0], [46.0, 175.0], [49.0, 92.0], [48.0, 99.0], [50.0, 145.0], [53.0, 185.0], [54.0, 91.0], [56.0, 118.5], [58.0, 79.0], [63.0, 80.0], [66.0, 64.5], [65.0, 55.0], [86.0, 70.0], [1.0, 4655.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 86.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 17.183333333333334, "minX": 1.6023753E12, "maxY": 28.366666666666667, "series": [{"data": [[1.60237542E12, 28.366666666666667], [1.60237536E12, 18.766666666666666], [1.60237548E12, 22.183333333333334], [1.6023753E12, 17.183333333333334]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60237548E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.6023753E12, "maxY": 28.366666666666667, "series": [{"data": [[1.60237542E12, 28.366666666666667], [1.60237554E12, 0.016666666666666666], [1.60237536E12, 18.766666666666666], [1.60237548E12, 22.333333333333332], [1.6023753E12, 17.016666666666666]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60237554E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.6023753E12, "maxY": 28.366666666666667, "series": [{"data": [[1.60237542E12, 28.366666666666667], [1.60237554E12, 0.016666666666666666], [1.60237536E12, 18.766666666666666], [1.60237548E12, 22.333333333333332], [1.6023753E12, 17.016666666666666]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60237554E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.6023753E12, "maxY": 28.366666666666667, "series": [{"data": [[1.60237542E12, 28.366666666666667], [1.60237554E12, 0.016666666666666666], [1.60237536E12, 18.766666666666666], [1.60237548E12, 22.333333333333332], [1.6023753E12, 17.016666666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60237554E12, "title": "Total Transactions Per Second"}},
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

