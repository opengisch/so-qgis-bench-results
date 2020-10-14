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
        data: {"result": {"minY": 27.0, "minX": 0.0, "maxY": 1878.0, "series": [{"data": [[0.0, 27.0], [0.1, 31.0], [0.2, 33.0], [0.3, 35.0], [0.4, 36.0], [0.5, 36.0], [0.6, 36.0], [0.7, 37.0], [0.8, 37.0], [0.9, 37.0], [1.0, 38.0], [1.1, 38.0], [1.2, 38.0], [1.3, 39.0], [1.4, 39.0], [1.5, 39.0], [1.6, 40.0], [1.7, 40.0], [1.8, 40.0], [1.9, 41.0], [2.0, 41.0], [2.1, 41.0], [2.2, 42.0], [2.3, 42.0], [2.4, 42.0], [2.5, 43.0], [2.6, 43.0], [2.7, 43.0], [2.8, 43.0], [2.9, 43.0], [3.0, 44.0], [3.1, 44.0], [3.2, 44.0], [3.3, 44.0], [3.4, 44.0], [3.5, 44.0], [3.6, 45.0], [3.7, 45.0], [3.8, 45.0], [3.9, 45.0], [4.0, 45.0], [4.1, 45.0], [4.2, 46.0], [4.3, 46.0], [4.4, 46.0], [4.5, 46.0], [4.6, 46.0], [4.7, 46.0], [4.8, 47.0], [4.9, 47.0], [5.0, 47.0], [5.1, 47.0], [5.2, 47.0], [5.3, 48.0], [5.4, 48.0], [5.5, 48.0], [5.6, 48.0], [5.7, 48.0], [5.8, 48.0], [5.9, 49.0], [6.0, 49.0], [6.1, 49.0], [6.2, 49.0], [6.3, 50.0], [6.4, 50.0], [6.5, 51.0], [6.6, 51.0], [6.7, 51.0], [6.8, 51.0], [6.9, 51.0], [7.0, 52.0], [7.1, 52.0], [7.2, 53.0], [7.3, 53.0], [7.4, 53.0], [7.5, 54.0], [7.6, 54.0], [7.7, 54.0], [7.8, 54.0], [7.9, 55.0], [8.0, 55.0], [8.1, 56.0], [8.2, 56.0], [8.3, 56.0], [8.4, 57.0], [8.5, 58.0], [8.6, 58.0], [8.7, 58.0], [8.8, 59.0], [8.9, 59.0], [9.0, 59.0], [9.1, 60.0], [9.2, 60.0], [9.3, 60.0], [9.4, 60.0], [9.5, 61.0], [9.6, 61.0], [9.7, 61.0], [9.8, 62.0], [9.9, 62.0], [10.0, 63.0], [10.1, 63.0], [10.2, 64.0], [10.3, 64.0], [10.4, 65.0], [10.5, 65.0], [10.6, 65.0], [10.7, 65.0], [10.8, 66.0], [10.9, 66.0], [11.0, 66.0], [11.1, 67.0], [11.2, 67.0], [11.3, 68.0], [11.4, 68.0], [11.5, 69.0], [11.6, 69.0], [11.7, 69.0], [11.8, 69.0], [11.9, 70.0], [12.0, 70.0], [12.1, 70.0], [12.2, 71.0], [12.3, 71.0], [12.4, 71.0], [12.5, 72.0], [12.6, 72.0], [12.7, 72.0], [12.8, 73.0], [12.9, 73.0], [13.0, 73.0], [13.1, 74.0], [13.2, 74.0], [13.3, 74.0], [13.4, 75.0], [13.5, 75.0], [13.6, 75.0], [13.7, 76.0], [13.8, 76.0], [13.9, 76.0], [14.0, 76.0], [14.1, 77.0], [14.2, 77.0], [14.3, 77.0], [14.4, 78.0], [14.5, 78.0], [14.6, 78.0], [14.7, 78.0], [14.8, 79.0], [14.9, 79.0], [15.0, 80.0], [15.1, 80.0], [15.2, 80.0], [15.3, 81.0], [15.4, 81.0], [15.5, 81.0], [15.6, 82.0], [15.7, 82.0], [15.8, 82.0], [15.9, 82.0], [16.0, 83.0], [16.1, 83.0], [16.2, 83.0], [16.3, 83.0], [16.4, 84.0], [16.5, 84.0], [16.6, 84.0], [16.7, 84.0], [16.8, 85.0], [16.9, 85.0], [17.0, 86.0], [17.1, 86.0], [17.2, 86.0], [17.3, 86.0], [17.4, 87.0], [17.5, 87.0], [17.6, 87.0], [17.7, 88.0], [17.8, 88.0], [17.9, 88.0], [18.0, 89.0], [18.1, 89.0], [18.2, 89.0], [18.3, 90.0], [18.4, 90.0], [18.5, 90.0], [18.6, 91.0], [18.7, 91.0], [18.8, 91.0], [18.9, 91.0], [19.0, 92.0], [19.1, 92.0], [19.2, 92.0], [19.3, 93.0], [19.4, 93.0], [19.5, 93.0], [19.6, 94.0], [19.7, 94.0], [19.8, 95.0], [19.9, 95.0], [20.0, 95.0], [20.1, 96.0], [20.2, 96.0], [20.3, 96.0], [20.4, 97.0], [20.5, 98.0], [20.6, 98.0], [20.7, 98.0], [20.8, 99.0], [20.9, 99.0], [21.0, 100.0], [21.1, 100.0], [21.2, 101.0], [21.3, 101.0], [21.4, 101.0], [21.5, 102.0], [21.6, 103.0], [21.7, 104.0], [21.8, 104.0], [21.9, 104.0], [22.0, 105.0], [22.1, 105.0], [22.2, 106.0], [22.3, 106.0], [22.4, 107.0], [22.5, 108.0], [22.6, 108.0], [22.7, 108.0], [22.8, 109.0], [22.9, 109.0], [23.0, 109.0], [23.1, 110.0], [23.2, 110.0], [23.3, 110.0], [23.4, 111.0], [23.5, 112.0], [23.6, 112.0], [23.7, 113.0], [23.8, 113.0], [23.9, 114.0], [24.0, 114.0], [24.1, 115.0], [24.2, 116.0], [24.3, 116.0], [24.4, 117.0], [24.5, 117.0], [24.6, 117.0], [24.7, 118.0], [24.8, 119.0], [24.9, 119.0], [25.0, 120.0], [25.1, 120.0], [25.2, 120.0], [25.3, 121.0], [25.4, 121.0], [25.5, 121.0], [25.6, 121.0], [25.7, 122.0], [25.8, 122.0], [25.9, 123.0], [26.0, 123.0], [26.1, 124.0], [26.2, 124.0], [26.3, 125.0], [26.4, 125.0], [26.5, 126.0], [26.6, 126.0], [26.7, 127.0], [26.8, 128.0], [26.9, 128.0], [27.0, 129.0], [27.1, 129.0], [27.2, 129.0], [27.3, 130.0], [27.4, 130.0], [27.5, 130.0], [27.6, 131.0], [27.7, 131.0], [27.8, 132.0], [27.9, 133.0], [28.0, 133.0], [28.1, 133.0], [28.2, 134.0], [28.3, 134.0], [28.4, 134.0], [28.5, 134.0], [28.6, 135.0], [28.7, 135.0], [28.8, 135.0], [28.9, 136.0], [29.0, 136.0], [29.1, 136.0], [29.2, 136.0], [29.3, 136.0], [29.4, 136.0], [29.5, 137.0], [29.6, 137.0], [29.7, 137.0], [29.8, 138.0], [29.9, 138.0], [30.0, 138.0], [30.1, 138.0], [30.2, 138.0], [30.3, 139.0], [30.4, 139.0], [30.5, 139.0], [30.6, 139.0], [30.7, 140.0], [30.8, 140.0], [30.9, 140.0], [31.0, 140.0], [31.1, 140.0], [31.2, 141.0], [31.3, 141.0], [31.4, 141.0], [31.5, 141.0], [31.6, 142.0], [31.7, 142.0], [31.8, 142.0], [31.9, 143.0], [32.0, 143.0], [32.1, 143.0], [32.2, 144.0], [32.3, 144.0], [32.4, 144.0], [32.5, 145.0], [32.6, 145.0], [32.7, 145.0], [32.8, 145.0], [32.9, 146.0], [33.0, 146.0], [33.1, 146.0], [33.2, 147.0], [33.3, 147.0], [33.4, 148.0], [33.5, 148.0], [33.6, 149.0], [33.7, 149.0], [33.8, 149.0], [33.9, 149.0], [34.0, 150.0], [34.1, 150.0], [34.2, 151.0], [34.3, 151.0], [34.4, 152.0], [34.5, 153.0], [34.6, 153.0], [34.7, 154.0], [34.8, 155.0], [34.9, 155.0], [35.0, 156.0], [35.1, 156.0], [35.2, 156.0], [35.3, 158.0], [35.4, 158.0], [35.5, 158.0], [35.6, 159.0], [35.7, 160.0], [35.8, 160.0], [35.9, 161.0], [36.0, 161.0], [36.1, 162.0], [36.2, 162.0], [36.3, 163.0], [36.4, 164.0], [36.5, 164.0], [36.6, 165.0], [36.7, 165.0], [36.8, 166.0], [36.9, 166.0], [37.0, 167.0], [37.1, 167.0], [37.2, 168.0], [37.3, 168.0], [37.4, 169.0], [37.5, 169.0], [37.6, 170.0], [37.7, 171.0], [37.8, 171.0], [37.9, 172.0], [38.0, 172.0], [38.1, 173.0], [38.2, 174.0], [38.3, 174.0], [38.4, 175.0], [38.5, 175.0], [38.6, 176.0], [38.7, 177.0], [38.8, 178.0], [38.9, 178.0], [39.0, 179.0], [39.1, 180.0], [39.2, 180.0], [39.3, 180.0], [39.4, 181.0], [39.5, 182.0], [39.6, 182.0], [39.7, 183.0], [39.8, 183.0], [39.9, 184.0], [40.0, 185.0], [40.1, 185.0], [40.2, 185.0], [40.3, 186.0], [40.4, 186.0], [40.5, 187.0], [40.6, 187.0], [40.7, 188.0], [40.8, 188.0], [40.9, 189.0], [41.0, 189.0], [41.1, 190.0], [41.2, 190.0], [41.3, 191.0], [41.4, 192.0], [41.5, 192.0], [41.6, 193.0], [41.7, 193.0], [41.8, 194.0], [41.9, 195.0], [42.0, 196.0], [42.1, 197.0], [42.2, 197.0], [42.3, 198.0], [42.4, 199.0], [42.5, 200.0], [42.6, 201.0], [42.7, 201.0], [42.8, 202.0], [42.9, 203.0], [43.0, 203.0], [43.1, 203.0], [43.2, 204.0], [43.3, 206.0], [43.4, 207.0], [43.5, 208.0], [43.6, 208.0], [43.7, 209.0], [43.8, 210.0], [43.9, 211.0], [44.0, 211.0], [44.1, 212.0], [44.2, 212.0], [44.3, 213.0], [44.4, 214.0], [44.5, 215.0], [44.6, 215.0], [44.7, 216.0], [44.8, 217.0], [44.9, 217.0], [45.0, 218.0], [45.1, 219.0], [45.2, 219.0], [45.3, 220.0], [45.4, 221.0], [45.5, 221.0], [45.6, 222.0], [45.7, 222.0], [45.8, 224.0], [45.9, 225.0], [46.0, 225.0], [46.1, 226.0], [46.2, 227.0], [46.3, 227.0], [46.4, 228.0], [46.5, 228.0], [46.6, 229.0], [46.7, 230.0], [46.8, 231.0], [46.9, 231.0], [47.0, 232.0], [47.1, 232.0], [47.2, 234.0], [47.3, 234.0], [47.4, 235.0], [47.5, 236.0], [47.6, 237.0], [47.7, 239.0], [47.8, 240.0], [47.9, 241.0], [48.0, 241.0], [48.1, 242.0], [48.2, 243.0], [48.3, 243.0], [48.4, 244.0], [48.5, 245.0], [48.6, 246.0], [48.7, 246.0], [48.8, 247.0], [48.9, 248.0], [49.0, 249.0], [49.1, 249.0], [49.2, 250.0], [49.3, 251.0], [49.4, 252.0], [49.5, 252.0], [49.6, 253.0], [49.7, 254.0], [49.8, 255.0], [49.9, 256.0], [50.0, 258.0], [50.1, 259.0], [50.2, 260.0], [50.3, 261.0], [50.4, 262.0], [50.5, 262.0], [50.6, 263.0], [50.7, 265.0], [50.8, 266.0], [50.9, 266.0], [51.0, 267.0], [51.1, 268.0], [51.2, 269.0], [51.3, 269.0], [51.4, 270.0], [51.5, 271.0], [51.6, 272.0], [51.7, 272.0], [51.8, 273.0], [51.9, 273.0], [52.0, 274.0], [52.1, 274.0], [52.2, 275.0], [52.3, 275.0], [52.4, 276.0], [52.5, 277.0], [52.6, 279.0], [52.7, 280.0], [52.8, 280.0], [52.9, 282.0], [53.0, 283.0], [53.1, 283.0], [53.2, 284.0], [53.3, 285.0], [53.4, 285.0], [53.5, 286.0], [53.6, 287.0], [53.7, 288.0], [53.8, 288.0], [53.9, 289.0], [54.0, 290.0], [54.1, 291.0], [54.2, 293.0], [54.3, 293.0], [54.4, 295.0], [54.5, 295.0], [54.6, 296.0], [54.7, 296.0], [54.8, 298.0], [54.9, 299.0], [55.0, 299.0], [55.1, 300.0], [55.2, 302.0], [55.3, 303.0], [55.4, 304.0], [55.5, 305.0], [55.6, 305.0], [55.7, 307.0], [55.8, 308.0], [55.9, 309.0], [56.0, 310.0], [56.1, 311.0], [56.2, 311.0], [56.3, 312.0], [56.4, 313.0], [56.5, 314.0], [56.6, 316.0], [56.7, 317.0], [56.8, 318.0], [56.9, 319.0], [57.0, 320.0], [57.1, 322.0], [57.2, 323.0], [57.3, 324.0], [57.4, 325.0], [57.5, 326.0], [57.6, 327.0], [57.7, 328.0], [57.8, 328.0], [57.9, 330.0], [58.0, 331.0], [58.1, 332.0], [58.2, 332.0], [58.3, 333.0], [58.4, 334.0], [58.5, 337.0], [58.6, 339.0], [58.7, 340.0], [58.8, 341.0], [58.9, 343.0], [59.0, 344.0], [59.1, 345.0], [59.2, 346.0], [59.3, 347.0], [59.4, 349.0], [59.5, 351.0], [59.6, 351.0], [59.7, 352.0], [59.8, 354.0], [59.9, 355.0], [60.0, 355.0], [60.1, 358.0], [60.2, 358.0], [60.3, 360.0], [60.4, 360.0], [60.5, 361.0], [60.6, 362.0], [60.7, 363.0], [60.8, 363.0], [60.9, 363.0], [61.0, 364.0], [61.1, 366.0], [61.2, 366.0], [61.3, 367.0], [61.4, 369.0], [61.5, 370.0], [61.6, 370.0], [61.7, 372.0], [61.8, 373.0], [61.9, 374.0], [62.0, 375.0], [62.1, 376.0], [62.2, 377.0], [62.3, 378.0], [62.4, 379.0], [62.5, 380.0], [62.6, 381.0], [62.7, 382.0], [62.8, 383.0], [62.9, 385.0], [63.0, 385.0], [63.1, 387.0], [63.2, 388.0], [63.3, 390.0], [63.4, 392.0], [63.5, 393.0], [63.6, 395.0], [63.7, 396.0], [63.8, 396.0], [63.9, 397.0], [64.0, 399.0], [64.1, 400.0], [64.2, 401.0], [64.3, 402.0], [64.4, 402.0], [64.5, 403.0], [64.6, 405.0], [64.7, 406.0], [64.8, 407.0], [64.9, 409.0], [65.0, 410.0], [65.1, 411.0], [65.2, 412.0], [65.3, 413.0], [65.4, 413.0], [65.5, 414.0], [65.6, 415.0], [65.7, 415.0], [65.8, 416.0], [65.9, 417.0], [66.0, 418.0], [66.1, 419.0], [66.2, 420.0], [66.3, 421.0], [66.4, 422.0], [66.5, 423.0], [66.6, 424.0], [66.7, 425.0], [66.8, 426.0], [66.9, 428.0], [67.0, 430.0], [67.1, 431.0], [67.2, 431.0], [67.3, 432.0], [67.4, 433.0], [67.5, 434.0], [67.6, 435.0], [67.7, 436.0], [67.8, 437.0], [67.9, 437.0], [68.0, 438.0], [68.1, 440.0], [68.2, 440.0], [68.3, 441.0], [68.4, 442.0], [68.5, 443.0], [68.6, 444.0], [68.7, 445.0], [68.8, 446.0], [68.9, 447.0], [69.0, 448.0], [69.1, 449.0], [69.2, 449.0], [69.3, 450.0], [69.4, 451.0], [69.5, 452.0], [69.6, 453.0], [69.7, 454.0], [69.8, 454.0], [69.9, 457.0], [70.0, 458.0], [70.1, 461.0], [70.2, 461.0], [70.3, 463.0], [70.4, 464.0], [70.5, 466.0], [70.6, 467.0], [70.7, 469.0], [70.8, 469.0], [70.9, 470.0], [71.0, 471.0], [71.1, 472.0], [71.2, 473.0], [71.3, 474.0], [71.4, 475.0], [71.5, 475.0], [71.6, 476.0], [71.7, 477.0], [71.8, 477.0], [71.9, 478.0], [72.0, 480.0], [72.1, 480.0], [72.2, 481.0], [72.3, 482.0], [72.4, 484.0], [72.5, 484.0], [72.6, 485.0], [72.7, 485.0], [72.8, 486.0], [72.9, 487.0], [73.0, 487.0], [73.1, 488.0], [73.2, 489.0], [73.3, 492.0], [73.4, 493.0], [73.5, 494.0], [73.6, 495.0], [73.7, 496.0], [73.8, 497.0], [73.9, 498.0], [74.0, 499.0], [74.1, 501.0], [74.2, 502.0], [74.3, 503.0], [74.4, 503.0], [74.5, 504.0], [74.6, 506.0], [74.7, 506.0], [74.8, 507.0], [74.9, 508.0], [75.0, 509.0], [75.1, 510.0], [75.2, 511.0], [75.3, 512.0], [75.4, 513.0], [75.5, 514.0], [75.6, 515.0], [75.7, 515.0], [75.8, 516.0], [75.9, 517.0], [76.0, 518.0], [76.1, 518.0], [76.2, 519.0], [76.3, 520.0], [76.4, 521.0], [76.5, 521.0], [76.6, 522.0], [76.7, 522.0], [76.8, 523.0], [76.9, 525.0], [77.0, 525.0], [77.1, 526.0], [77.2, 527.0], [77.3, 529.0], [77.4, 529.0], [77.5, 530.0], [77.6, 531.0], [77.7, 532.0], [77.8, 532.0], [77.9, 532.0], [78.0, 533.0], [78.1, 534.0], [78.2, 535.0], [78.3, 535.0], [78.4, 536.0], [78.5, 538.0], [78.6, 539.0], [78.7, 539.0], [78.8, 540.0], [78.9, 541.0], [79.0, 542.0], [79.1, 543.0], [79.2, 543.0], [79.3, 544.0], [79.4, 545.0], [79.5, 546.0], [79.6, 547.0], [79.7, 548.0], [79.8, 549.0], [79.9, 550.0], [80.0, 550.0], [80.1, 552.0], [80.2, 554.0], [80.3, 556.0], [80.4, 557.0], [80.5, 558.0], [80.6, 559.0], [80.7, 560.0], [80.8, 561.0], [80.9, 563.0], [81.0, 563.0], [81.1, 564.0], [81.2, 565.0], [81.3, 566.0], [81.4, 569.0], [81.5, 570.0], [81.6, 571.0], [81.7, 573.0], [81.8, 576.0], [81.9, 577.0], [82.0, 578.0], [82.1, 579.0], [82.2, 581.0], [82.3, 582.0], [82.4, 584.0], [82.5, 585.0], [82.6, 587.0], [82.7, 588.0], [82.8, 588.0], [82.9, 589.0], [83.0, 590.0], [83.1, 591.0], [83.2, 592.0], [83.3, 593.0], [83.4, 594.0], [83.5, 596.0], [83.6, 596.0], [83.7, 597.0], [83.8, 599.0], [83.9, 599.0], [84.0, 600.0], [84.1, 602.0], [84.2, 604.0], [84.3, 607.0], [84.4, 609.0], [84.5, 611.0], [84.6, 612.0], [84.7, 615.0], [84.8, 619.0], [84.9, 620.0], [85.0, 622.0], [85.1, 623.0], [85.2, 624.0], [85.3, 625.0], [85.4, 626.0], [85.5, 628.0], [85.6, 629.0], [85.7, 631.0], [85.8, 633.0], [85.9, 634.0], [86.0, 636.0], [86.1, 637.0], [86.2, 638.0], [86.3, 640.0], [86.4, 641.0], [86.5, 643.0], [86.6, 645.0], [86.7, 647.0], [86.8, 649.0], [86.9, 650.0], [87.0, 651.0], [87.1, 653.0], [87.2, 653.0], [87.3, 654.0], [87.4, 655.0], [87.5, 658.0], [87.6, 661.0], [87.7, 662.0], [87.8, 665.0], [87.9, 668.0], [88.0, 669.0], [88.1, 671.0], [88.2, 672.0], [88.3, 673.0], [88.4, 675.0], [88.5, 680.0], [88.6, 681.0], [88.7, 682.0], [88.8, 682.0], [88.9, 686.0], [89.0, 690.0], [89.1, 692.0], [89.2, 693.0], [89.3, 696.0], [89.4, 696.0], [89.5, 700.0], [89.6, 701.0], [89.7, 702.0], [89.8, 703.0], [89.9, 707.0], [90.0, 709.0], [90.1, 711.0], [90.2, 714.0], [90.3, 716.0], [90.4, 719.0], [90.5, 721.0], [90.6, 726.0], [90.7, 727.0], [90.8, 730.0], [90.9, 732.0], [91.0, 736.0], [91.1, 738.0], [91.2, 741.0], [91.3, 745.0], [91.4, 747.0], [91.5, 748.0], [91.6, 751.0], [91.7, 754.0], [91.8, 759.0], [91.9, 761.0], [92.0, 765.0], [92.1, 769.0], [92.2, 773.0], [92.3, 777.0], [92.4, 781.0], [92.5, 785.0], [92.6, 788.0], [92.7, 792.0], [92.8, 795.0], [92.9, 799.0], [93.0, 801.0], [93.1, 805.0], [93.2, 810.0], [93.3, 816.0], [93.4, 823.0], [93.5, 826.0], [93.6, 828.0], [93.7, 833.0], [93.8, 837.0], [93.9, 842.0], [94.0, 848.0], [94.1, 849.0], [94.2, 855.0], [94.3, 858.0], [94.4, 859.0], [94.5, 863.0], [94.6, 870.0], [94.7, 877.0], [94.8, 879.0], [94.9, 886.0], [95.0, 893.0], [95.1, 896.0], [95.2, 898.0], [95.3, 903.0], [95.4, 907.0], [95.5, 911.0], [95.6, 914.0], [95.7, 921.0], [95.8, 932.0], [95.9, 935.0], [96.0, 939.0], [96.1, 943.0], [96.2, 949.0], [96.3, 958.0], [96.4, 979.0], [96.5, 986.0], [96.6, 991.0], [96.7, 998.0], [96.8, 1007.0], [96.9, 1020.0], [97.0, 1031.0], [97.1, 1036.0], [97.2, 1042.0], [97.3, 1049.0], [97.4, 1055.0], [97.5, 1064.0], [97.6, 1073.0], [97.7, 1090.0], [97.8, 1098.0], [97.9, 1120.0], [98.0, 1127.0], [98.1, 1139.0], [98.2, 1144.0], [98.3, 1158.0], [98.4, 1162.0], [98.5, 1166.0], [98.6, 1171.0], [98.7, 1179.0], [98.8, 1186.0], [98.9, 1192.0], [99.0, 1220.0], [99.1, 1235.0], [99.2, 1256.0], [99.3, 1279.0], [99.4, 1310.0], [99.5, 1347.0], [99.6, 1388.0], [99.7, 1434.0], [99.8, 1530.0], [99.9, 1646.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 2.0, "minX": 0.0, "maxY": 1115.0, "series": [{"data": [[0.0, 1086.0], [600.0, 290.0], [700.0, 178.0], [800.0, 120.0], [200.0, 655.0], [900.0, 76.0], [1000.0, 58.0], [1100.0, 57.0], [300.0, 469.0], [1200.0, 23.0], [1300.0, 14.0], [1400.0, 5.0], [1500.0, 6.0], [400.0, 517.0], [100.0, 1115.0], [1600.0, 4.0], [1700.0, 2.0], [1800.0, 2.0], [500.0, 513.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1800.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 14.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 3844.0, "series": [{"data": [[0.0, 3844.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1332.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 14.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.953464322647363, "minX": 1.60266534E12, "maxY": 10.0, "series": [{"data": [[1.60266546E12, 10.0], [1.60266534E12, 10.0], [1.60266552E12, 9.953464322647363], [1.6026654E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60266552E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 138.0, "minX": 1.0, "maxY": 873.0, "series": [{"data": [[8.0, 138.0], [4.0, 527.0], [2.0, 600.0], [1.0, 873.0], [9.0, 286.0], [10.0, 340.5782667438719], [5.0, 355.0], [6.0, 538.0], [3.0, 779.0], [7.0, 737.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.991329479768785, 340.91888246628133]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 5431.583333333333, "minX": 1.60266534E12, "maxY": 5845482.65, "series": [{"data": [[1.60266546E12, 5710943.7], [1.60266534E12, 2341172.566666667], [1.60266552E12, 3014156.1], [1.6026654E12, 5845482.65]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60266546E12, 13267.15], [1.60266534E12, 5431.583333333333], [1.60266552E12, 7572.516666666666], [1.6026654E12, 13497.383333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60266552E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 327.96483971044495, "minX": 1.60266534E12, "maxY": 356.5650969529084, "series": [{"data": [[1.60266546E12, 341.96116504854353], [1.60266534E12, 356.5650969529084], [1.60266552E12, 327.96483971044495], [1.6026654E12, 340.5788571428566]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60266552E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 326.9586349534641, "minX": 1.60266534E12, "maxY": 355.12742382271426, "series": [{"data": [[1.60266546E12, 340.73043974871507], [1.60266534E12, 355.12742382271426], [1.60266552E12, 326.9586349534641], [1.6026654E12, 339.10971428571384]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60266552E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.007238883143743541, "minX": 1.60266534E12, "maxY": 0.1274238227146812, "series": [{"data": [[1.60266546E12, 0.009137635636778984], [1.60266534E12, 0.1274238227146812], [1.60266552E12, 0.007238883143743541], [1.6026654E12, 0.00914285714285714]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60266552E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 27.0, "minX": 1.60266534E12, "maxY": 1878.0, "series": [{"data": [[1.60266546E12, 1877.0], [1.60266534E12, 1677.0], [1.60266552E12, 1878.0], [1.6026654E12, 1751.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60266546E12, 42.0], [1.60266534E12, 45.5209994828701], [1.60266552E12, 35.71199976921082], [1.6026654E12, 36.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60266546E12, 43.0], [1.60266534E12, 47.15770006895065], [1.60266552E12, 36.0], [1.6026654E12, 37.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60266546E12, 42.64399979114532], [1.60266534E12, 46.60549974143505], [1.60266552E12, 36.0], [1.6026654E12, 36.63449979126453]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60266546E12, 34.0], [1.60266534E12, 33.0], [1.60266552E12, 27.0], [1.6026654E12, 31.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60266546E12, 259.0], [1.60266534E12, 296.5], [1.60266552E12, 244.0], [1.6026654E12, 244.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60266552E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 56.0, "minX": 8.0, "maxY": 687.5, "series": [{"data": [[32.0, 216.0], [33.0, 262.0], [35.0, 207.0], [34.0, 219.5], [36.0, 289.0], [37.0, 96.0], [38.0, 147.5], [39.0, 134.0], [40.0, 167.0], [41.0, 190.0], [43.0, 167.0], [42.0, 163.0], [44.0, 148.0], [45.0, 94.0], [46.0, 129.0], [49.0, 83.0], [48.0, 168.0], [50.0, 178.5], [52.0, 130.0], [55.0, 100.5], [54.0, 91.0], [56.0, 148.0], [57.0, 109.0], [58.0, 140.5], [62.0, 126.5], [72.0, 76.5], [79.0, 56.0], [85.0, 94.0], [8.0, 687.5], [11.0, 533.0], [12.0, 544.5], [15.0, 512.0], [16.0, 550.0], [17.0, 517.5], [18.0, 480.0], [19.0, 501.0], [20.0, 492.0], [21.0, 471.0], [22.0, 382.0], [23.0, 400.0], [24.0, 368.0], [25.0, 378.0], [26.0, 353.5], [27.0, 368.0], [28.0, 365.5], [29.0, 247.0], [30.0, 298.0], [31.0, 293.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 85.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 56.0, "minX": 8.0, "maxY": 683.5, "series": [{"data": [[32.0, 214.0], [33.0, 261.0], [35.0, 206.5], [34.0, 217.5], [36.0, 288.0], [37.0, 96.0], [38.0, 146.5], [39.0, 134.0], [40.0, 166.5], [41.0, 190.0], [43.0, 167.0], [42.0, 162.0], [44.0, 148.0], [45.0, 94.0], [46.0, 128.0], [49.0, 82.5], [48.0, 167.5], [50.0, 178.0], [52.0, 130.0], [55.0, 100.0], [54.0, 91.0], [56.0, 147.0], [57.0, 108.0], [58.0, 140.5], [62.0, 126.5], [72.0, 76.0], [79.0, 56.0], [85.0, 93.0], [8.0, 683.5], [11.0, 533.0], [12.0, 542.5], [15.0, 502.0], [16.0, 546.5], [17.0, 515.0], [18.0, 475.5], [19.0, 496.0], [20.0, 487.0], [21.0, 470.0], [22.0, 382.0], [23.0, 400.0], [24.0, 366.5], [25.0, 376.5], [26.0, 352.5], [27.0, 368.0], [28.0, 364.5], [29.0, 247.0], [30.0, 297.0], [31.0, 293.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 85.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 12.2, "minX": 1.60266534E12, "maxY": 29.183333333333334, "series": [{"data": [[1.60266546E12, 29.183333333333334], [1.60266534E12, 12.2], [1.60266552E12, 15.95], [1.6026654E12, 29.166666666666668]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60266552E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 12.033333333333333, "minX": 1.60266534E12, "maxY": 29.183333333333334, "series": [{"data": [[1.60266546E12, 29.183333333333334], [1.60266534E12, 12.033333333333333], [1.60266552E12, 16.116666666666667], [1.6026654E12, 29.166666666666668]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60266552E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 12.033333333333333, "minX": 1.60266534E12, "maxY": 29.183333333333334, "series": [{"data": [[1.60266546E12, 29.183333333333334], [1.60266534E12, 12.033333333333333], [1.60266552E12, 16.116666666666667], [1.6026654E12, 29.166666666666668]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60266552E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 12.033333333333333, "minX": 1.60266534E12, "maxY": 29.183333333333334, "series": [{"data": [[1.60266546E12, 29.183333333333334], [1.60266534E12, 12.033333333333333], [1.60266552E12, 16.116666666666667], [1.6026654E12, 29.166666666666668]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60266552E12, "title": "Total Transactions Per Second"}},
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

