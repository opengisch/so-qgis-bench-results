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
        data: {"result": {"minY": 33.0, "minX": 0.0, "maxY": 3215.0, "series": [{"data": [[0.0, 33.0], [0.1, 35.0], [0.2, 36.0], [0.3, 37.0], [0.4, 37.0], [0.5, 38.0], [0.6, 38.0], [0.7, 39.0], [0.8, 39.0], [0.9, 39.0], [1.0, 40.0], [1.1, 40.0], [1.2, 40.0], [1.3, 41.0], [1.4, 41.0], [1.5, 41.0], [1.6, 41.0], [1.7, 41.0], [1.8, 42.0], [1.9, 42.0], [2.0, 42.0], [2.1, 42.0], [2.2, 42.0], [2.3, 42.0], [2.4, 42.0], [2.5, 43.0], [2.6, 43.0], [2.7, 43.0], [2.8, 43.0], [2.9, 43.0], [3.0, 43.0], [3.1, 43.0], [3.2, 43.0], [3.3, 43.0], [3.4, 43.0], [3.5, 44.0], [3.6, 44.0], [3.7, 44.0], [3.8, 44.0], [3.9, 44.0], [4.0, 44.0], [4.1, 44.0], [4.2, 44.0], [4.3, 44.0], [4.4, 44.0], [4.5, 44.0], [4.6, 45.0], [4.7, 45.0], [4.8, 45.0], [4.9, 45.0], [5.0, 45.0], [5.1, 45.0], [5.2, 45.0], [5.3, 45.0], [5.4, 45.0], [5.5, 45.0], [5.6, 46.0], [5.7, 46.0], [5.8, 46.0], [5.9, 46.0], [6.0, 46.0], [6.1, 46.0], [6.2, 46.0], [6.3, 46.0], [6.4, 46.0], [6.5, 46.0], [6.6, 46.0], [6.7, 46.0], [6.8, 46.0], [6.9, 46.0], [7.0, 46.0], [7.1, 47.0], [7.2, 47.0], [7.3, 47.0], [7.4, 47.0], [7.5, 47.0], [7.6, 47.0], [7.7, 47.0], [7.8, 47.0], [7.9, 47.0], [8.0, 47.0], [8.1, 47.0], [8.2, 47.0], [8.3, 47.0], [8.4, 47.0], [8.5, 48.0], [8.6, 48.0], [8.7, 48.0], [8.8, 48.0], [8.9, 48.0], [9.0, 48.0], [9.1, 48.0], [9.2, 48.0], [9.3, 48.0], [9.4, 49.0], [9.5, 49.0], [9.6, 49.0], [9.7, 49.0], [9.8, 49.0], [9.9, 49.0], [10.0, 49.0], [10.1, 49.0], [10.2, 49.0], [10.3, 49.0], [10.4, 50.0], [10.5, 50.0], [10.6, 50.0], [10.7, 50.0], [10.8, 50.0], [10.9, 50.0], [11.0, 50.0], [11.1, 50.0], [11.2, 51.0], [11.3, 51.0], [11.4, 51.0], [11.5, 51.0], [11.6, 51.0], [11.7, 51.0], [11.8, 51.0], [11.9, 52.0], [12.0, 52.0], [12.1, 52.0], [12.2, 52.0], [12.3, 52.0], [12.4, 52.0], [12.5, 52.0], [12.6, 52.0], [12.7, 52.0], [12.8, 52.0], [12.9, 53.0], [13.0, 53.0], [13.1, 53.0], [13.2, 53.0], [13.3, 53.0], [13.4, 53.0], [13.5, 54.0], [13.6, 54.0], [13.7, 54.0], [13.8, 54.0], [13.9, 54.0], [14.0, 55.0], [14.1, 55.0], [14.2, 55.0], [14.3, 55.0], [14.4, 55.0], [14.5, 56.0], [14.6, 56.0], [14.7, 56.0], [14.8, 56.0], [14.9, 57.0], [15.0, 57.0], [15.1, 57.0], [15.2, 57.0], [15.3, 58.0], [15.4, 58.0], [15.5, 59.0], [15.6, 59.0], [15.7, 59.0], [15.8, 59.0], [15.9, 59.0], [16.0, 60.0], [16.1, 61.0], [16.2, 61.0], [16.3, 61.0], [16.4, 62.0], [16.5, 62.0], [16.6, 63.0], [16.7, 63.0], [16.8, 64.0], [16.9, 64.0], [17.0, 64.0], [17.1, 65.0], [17.2, 65.0], [17.3, 65.0], [17.4, 66.0], [17.5, 66.0], [17.6, 67.0], [17.7, 67.0], [17.8, 67.0], [17.9, 67.0], [18.0, 68.0], [18.1, 68.0], [18.2, 69.0], [18.3, 69.0], [18.4, 69.0], [18.5, 70.0], [18.6, 70.0], [18.7, 71.0], [18.8, 71.0], [18.9, 72.0], [19.0, 72.0], [19.1, 72.0], [19.2, 72.0], [19.3, 73.0], [19.4, 73.0], [19.5, 73.0], [19.6, 73.0], [19.7, 74.0], [19.8, 74.0], [19.9, 74.0], [20.0, 75.0], [20.1, 75.0], [20.2, 75.0], [20.3, 75.0], [20.4, 76.0], [20.5, 76.0], [20.6, 76.0], [20.7, 77.0], [20.8, 77.0], [20.9, 77.0], [21.0, 77.0], [21.1, 78.0], [21.2, 78.0], [21.3, 78.0], [21.4, 78.0], [21.5, 78.0], [21.6, 79.0], [21.7, 79.0], [21.8, 79.0], [21.9, 79.0], [22.0, 79.0], [22.1, 79.0], [22.2, 80.0], [22.3, 80.0], [22.4, 80.0], [22.5, 80.0], [22.6, 80.0], [22.7, 80.0], [22.8, 80.0], [22.9, 81.0], [23.0, 81.0], [23.1, 81.0], [23.2, 81.0], [23.3, 81.0], [23.4, 81.0], [23.5, 81.0], [23.6, 81.0], [23.7, 82.0], [23.8, 82.0], [23.9, 82.0], [24.0, 82.0], [24.1, 82.0], [24.2, 82.0], [24.3, 83.0], [24.4, 83.0], [24.5, 83.0], [24.6, 83.0], [24.7, 83.0], [24.8, 83.0], [24.9, 83.0], [25.0, 83.0], [25.1, 84.0], [25.2, 84.0], [25.3, 84.0], [25.4, 84.0], [25.5, 84.0], [25.6, 84.0], [25.7, 84.0], [25.8, 84.0], [25.9, 84.0], [26.0, 85.0], [26.1, 85.0], [26.2, 85.0], [26.3, 85.0], [26.4, 85.0], [26.5, 85.0], [26.6, 85.0], [26.7, 85.0], [26.8, 85.0], [26.9, 85.0], [27.0, 86.0], [27.1, 86.0], [27.2, 86.0], [27.3, 86.0], [27.4, 86.0], [27.5, 86.0], [27.6, 86.0], [27.7, 86.0], [27.8, 86.0], [27.9, 86.0], [28.0, 87.0], [28.1, 87.0], [28.2, 87.0], [28.3, 87.0], [28.4, 87.0], [28.5, 87.0], [28.6, 87.0], [28.7, 88.0], [28.8, 88.0], [28.9, 88.0], [29.0, 88.0], [29.1, 88.0], [29.2, 88.0], [29.3, 89.0], [29.4, 89.0], [29.5, 89.0], [29.6, 89.0], [29.7, 89.0], [29.8, 89.0], [29.9, 89.0], [30.0, 90.0], [30.1, 90.0], [30.2, 90.0], [30.3, 90.0], [30.4, 90.0], [30.5, 90.0], [30.6, 90.0], [30.7, 90.0], [30.8, 91.0], [30.9, 91.0], [31.0, 91.0], [31.1, 91.0], [31.2, 91.0], [31.3, 91.0], [31.4, 92.0], [31.5, 92.0], [31.6, 92.0], [31.7, 92.0], [31.8, 92.0], [31.9, 92.0], [32.0, 93.0], [32.1, 93.0], [32.2, 93.0], [32.3, 93.0], [32.4, 93.0], [32.5, 93.0], [32.6, 94.0], [32.7, 94.0], [32.8, 94.0], [32.9, 94.0], [33.0, 94.0], [33.1, 94.0], [33.2, 94.0], [33.3, 94.0], [33.4, 95.0], [33.5, 95.0], [33.6, 95.0], [33.7, 95.0], [33.8, 95.0], [33.9, 95.0], [34.0, 95.0], [34.1, 96.0], [34.2, 96.0], [34.3, 96.0], [34.4, 96.0], [34.5, 96.0], [34.6, 97.0], [34.7, 97.0], [34.8, 97.0], [34.9, 97.0], [35.0, 98.0], [35.1, 98.0], [35.2, 98.0], [35.3, 98.0], [35.4, 98.0], [35.5, 98.0], [35.6, 99.0], [35.7, 99.0], [35.8, 99.0], [35.9, 99.0], [36.0, 99.0], [36.1, 100.0], [36.2, 100.0], [36.3, 100.0], [36.4, 100.0], [36.5, 100.0], [36.6, 101.0], [36.7, 101.0], [36.8, 102.0], [36.9, 102.0], [37.0, 102.0], [37.1, 102.0], [37.2, 103.0], [37.3, 103.0], [37.4, 103.0], [37.5, 104.0], [37.6, 104.0], [37.7, 105.0], [37.8, 105.0], [37.9, 106.0], [38.0, 106.0], [38.1, 106.0], [38.2, 107.0], [38.3, 108.0], [38.4, 108.0], [38.5, 108.0], [38.6, 109.0], [38.7, 109.0], [38.8, 110.0], [38.9, 111.0], [39.0, 111.0], [39.1, 112.0], [39.2, 112.0], [39.3, 113.0], [39.4, 114.0], [39.5, 115.0], [39.6, 115.0], [39.7, 116.0], [39.8, 117.0], [39.9, 117.0], [40.0, 118.0], [40.1, 119.0], [40.2, 120.0], [40.3, 120.0], [40.4, 121.0], [40.5, 122.0], [40.6, 123.0], [40.7, 124.0], [40.8, 124.0], [40.9, 125.0], [41.0, 126.0], [41.1, 126.0], [41.2, 127.0], [41.3, 128.0], [41.4, 128.0], [41.5, 129.0], [41.6, 130.0], [41.7, 132.0], [41.8, 132.0], [41.9, 133.0], [42.0, 135.0], [42.1, 136.0], [42.2, 137.0], [42.3, 137.0], [42.4, 138.0], [42.5, 139.0], [42.6, 141.0], [42.7, 142.0], [42.8, 143.0], [42.9, 144.0], [43.0, 145.0], [43.1, 146.0], [43.2, 146.0], [43.3, 147.0], [43.4, 147.0], [43.5, 149.0], [43.6, 150.0], [43.7, 151.0], [43.8, 151.0], [43.9, 152.0], [44.0, 154.0], [44.1, 154.0], [44.2, 156.0], [44.3, 156.0], [44.4, 157.0], [44.5, 158.0], [44.6, 159.0], [44.7, 159.0], [44.8, 160.0], [44.9, 162.0], [45.0, 163.0], [45.1, 163.0], [45.2, 164.0], [45.3, 164.0], [45.4, 165.0], [45.5, 166.0], [45.6, 167.0], [45.7, 167.0], [45.8, 168.0], [45.9, 169.0], [46.0, 169.0], [46.1, 170.0], [46.2, 170.0], [46.3, 171.0], [46.4, 171.0], [46.5, 172.0], [46.6, 173.0], [46.7, 173.0], [46.8, 174.0], [46.9, 174.0], [47.0, 175.0], [47.1, 176.0], [47.2, 177.0], [47.3, 178.0], [47.4, 178.0], [47.5, 179.0], [47.6, 180.0], [47.7, 181.0], [47.8, 182.0], [47.9, 183.0], [48.0, 183.0], [48.1, 184.0], [48.2, 185.0], [48.3, 185.0], [48.4, 187.0], [48.5, 188.0], [48.6, 190.0], [48.7, 191.0], [48.8, 191.0], [48.9, 192.0], [49.0, 192.0], [49.1, 192.0], [49.2, 193.0], [49.3, 193.0], [49.4, 194.0], [49.5, 195.0], [49.6, 195.0], [49.7, 196.0], [49.8, 197.0], [49.9, 198.0], [50.0, 199.0], [50.1, 199.0], [50.2, 201.0], [50.3, 201.0], [50.4, 202.0], [50.5, 204.0], [50.6, 205.0], [50.7, 205.0], [50.8, 206.0], [50.9, 207.0], [51.0, 207.0], [51.1, 208.0], [51.2, 209.0], [51.3, 210.0], [51.4, 211.0], [51.5, 212.0], [51.6, 213.0], [51.7, 213.0], [51.8, 215.0], [51.9, 217.0], [52.0, 218.0], [52.1, 218.0], [52.2, 219.0], [52.3, 221.0], [52.4, 222.0], [52.5, 223.0], [52.6, 224.0], [52.7, 225.0], [52.8, 228.0], [52.9, 228.0], [53.0, 230.0], [53.1, 232.0], [53.2, 232.0], [53.3, 233.0], [53.4, 234.0], [53.5, 235.0], [53.6, 236.0], [53.7, 239.0], [53.8, 240.0], [53.9, 242.0], [54.0, 243.0], [54.1, 243.0], [54.2, 244.0], [54.3, 247.0], [54.4, 247.0], [54.5, 248.0], [54.6, 249.0], [54.7, 250.0], [54.8, 251.0], [54.9, 252.0], [55.0, 253.0], [55.1, 254.0], [55.2, 255.0], [55.3, 257.0], [55.4, 257.0], [55.5, 258.0], [55.6, 259.0], [55.7, 260.0], [55.8, 261.0], [55.9, 261.0], [56.0, 263.0], [56.1, 264.0], [56.2, 266.0], [56.3, 268.0], [56.4, 269.0], [56.5, 270.0], [56.6, 271.0], [56.7, 271.0], [56.8, 272.0], [56.9, 274.0], [57.0, 275.0], [57.1, 276.0], [57.2, 277.0], [57.3, 278.0], [57.4, 280.0], [57.5, 281.0], [57.6, 282.0], [57.7, 283.0], [57.8, 285.0], [57.9, 286.0], [58.0, 287.0], [58.1, 288.0], [58.2, 290.0], [58.3, 291.0], [58.4, 293.0], [58.5, 294.0], [58.6, 294.0], [58.7, 295.0], [58.8, 296.0], [58.9, 297.0], [59.0, 298.0], [59.1, 299.0], [59.2, 301.0], [59.3, 302.0], [59.4, 302.0], [59.5, 303.0], [59.6, 305.0], [59.7, 306.0], [59.8, 306.0], [59.9, 308.0], [60.0, 310.0], [60.1, 312.0], [60.2, 314.0], [60.3, 316.0], [60.4, 318.0], [60.5, 319.0], [60.6, 320.0], [60.7, 322.0], [60.8, 323.0], [60.9, 325.0], [61.0, 326.0], [61.1, 327.0], [61.2, 328.0], [61.3, 330.0], [61.4, 331.0], [61.5, 332.0], [61.6, 332.0], [61.7, 333.0], [61.8, 334.0], [61.9, 335.0], [62.0, 336.0], [62.1, 337.0], [62.2, 338.0], [62.3, 339.0], [62.4, 341.0], [62.5, 342.0], [62.6, 343.0], [62.7, 345.0], [62.8, 348.0], [62.9, 349.0], [63.0, 351.0], [63.1, 353.0], [63.2, 356.0], [63.3, 356.0], [63.4, 357.0], [63.5, 360.0], [63.6, 362.0], [63.7, 364.0], [63.8, 365.0], [63.9, 367.0], [64.0, 370.0], [64.1, 372.0], [64.2, 374.0], [64.3, 376.0], [64.4, 378.0], [64.5, 379.0], [64.6, 380.0], [64.7, 382.0], [64.8, 383.0], [64.9, 385.0], [65.0, 385.0], [65.1, 385.0], [65.2, 388.0], [65.3, 389.0], [65.4, 390.0], [65.5, 391.0], [65.6, 393.0], [65.7, 394.0], [65.8, 396.0], [65.9, 398.0], [66.0, 400.0], [66.1, 401.0], [66.2, 402.0], [66.3, 403.0], [66.4, 404.0], [66.5, 405.0], [66.6, 406.0], [66.7, 407.0], [66.8, 409.0], [66.9, 410.0], [67.0, 414.0], [67.1, 414.0], [67.2, 415.0], [67.3, 417.0], [67.4, 417.0], [67.5, 419.0], [67.6, 419.0], [67.7, 422.0], [67.8, 423.0], [67.9, 425.0], [68.0, 426.0], [68.1, 428.0], [68.2, 429.0], [68.3, 430.0], [68.4, 431.0], [68.5, 433.0], [68.6, 433.0], [68.7, 434.0], [68.8, 435.0], [68.9, 437.0], [69.0, 438.0], [69.1, 440.0], [69.2, 441.0], [69.3, 442.0], [69.4, 443.0], [69.5, 445.0], [69.6, 446.0], [69.7, 447.0], [69.8, 449.0], [69.9, 451.0], [70.0, 451.0], [70.1, 454.0], [70.2, 456.0], [70.3, 457.0], [70.4, 459.0], [70.5, 459.0], [70.6, 461.0], [70.7, 463.0], [70.8, 464.0], [70.9, 465.0], [71.0, 467.0], [71.1, 468.0], [71.2, 469.0], [71.3, 469.0], [71.4, 471.0], [71.5, 472.0], [71.6, 474.0], [71.7, 475.0], [71.8, 479.0], [71.9, 481.0], [72.0, 481.0], [72.1, 483.0], [72.2, 485.0], [72.3, 487.0], [72.4, 488.0], [72.5, 491.0], [72.6, 494.0], [72.7, 495.0], [72.8, 497.0], [72.9, 498.0], [73.0, 499.0], [73.1, 500.0], [73.2, 501.0], [73.3, 504.0], [73.4, 505.0], [73.5, 507.0], [73.6, 509.0], [73.7, 510.0], [73.8, 512.0], [73.9, 514.0], [74.0, 517.0], [74.1, 520.0], [74.2, 524.0], [74.3, 526.0], [74.4, 527.0], [74.5, 529.0], [74.6, 530.0], [74.7, 532.0], [74.8, 534.0], [74.9, 536.0], [75.0, 539.0], [75.1, 540.0], [75.2, 543.0], [75.3, 546.0], [75.4, 549.0], [75.5, 550.0], [75.6, 553.0], [75.7, 554.0], [75.8, 555.0], [75.9, 557.0], [76.0, 559.0], [76.1, 562.0], [76.2, 565.0], [76.3, 567.0], [76.4, 569.0], [76.5, 570.0], [76.6, 571.0], [76.7, 572.0], [76.8, 573.0], [76.9, 575.0], [77.0, 578.0], [77.1, 581.0], [77.2, 582.0], [77.3, 584.0], [77.4, 586.0], [77.5, 588.0], [77.6, 589.0], [77.7, 592.0], [77.8, 594.0], [77.9, 598.0], [78.0, 600.0], [78.1, 600.0], [78.2, 603.0], [78.3, 604.0], [78.4, 609.0], [78.5, 610.0], [78.6, 610.0], [78.7, 612.0], [78.8, 612.0], [78.9, 613.0], [79.0, 614.0], [79.1, 616.0], [79.2, 618.0], [79.3, 619.0], [79.4, 621.0], [79.5, 622.0], [79.6, 624.0], [79.7, 626.0], [79.8, 629.0], [79.9, 632.0], [80.0, 634.0], [80.1, 635.0], [80.2, 637.0], [80.3, 640.0], [80.4, 644.0], [80.5, 649.0], [80.6, 651.0], [80.7, 653.0], [80.8, 655.0], [80.9, 656.0], [81.0, 659.0], [81.1, 661.0], [81.2, 663.0], [81.3, 666.0], [81.4, 667.0], [81.5, 671.0], [81.6, 676.0], [81.7, 680.0], [81.8, 683.0], [81.9, 687.0], [82.0, 689.0], [82.1, 692.0], [82.2, 696.0], [82.3, 699.0], [82.4, 703.0], [82.5, 708.0], [82.6, 709.0], [82.7, 714.0], [82.8, 715.0], [82.9, 722.0], [83.0, 725.0], [83.1, 729.0], [83.2, 732.0], [83.3, 735.0], [83.4, 738.0], [83.5, 741.0], [83.6, 746.0], [83.7, 748.0], [83.8, 750.0], [83.9, 752.0], [84.0, 757.0], [84.1, 758.0], [84.2, 760.0], [84.3, 763.0], [84.4, 766.0], [84.5, 768.0], [84.6, 770.0], [84.7, 771.0], [84.8, 773.0], [84.9, 775.0], [85.0, 776.0], [85.1, 778.0], [85.2, 780.0], [85.3, 783.0], [85.4, 784.0], [85.5, 787.0], [85.6, 788.0], [85.7, 790.0], [85.8, 792.0], [85.9, 794.0], [86.0, 798.0], [86.1, 800.0], [86.2, 802.0], [86.3, 803.0], [86.4, 807.0], [86.5, 810.0], [86.6, 811.0], [86.7, 812.0], [86.8, 814.0], [86.9, 816.0], [87.0, 818.0], [87.1, 820.0], [87.2, 822.0], [87.3, 826.0], [87.4, 829.0], [87.5, 831.0], [87.6, 836.0], [87.7, 837.0], [87.8, 839.0], [87.9, 840.0], [88.0, 842.0], [88.1, 843.0], [88.2, 848.0], [88.3, 851.0], [88.4, 856.0], [88.5, 858.0], [88.6, 864.0], [88.7, 866.0], [88.8, 869.0], [88.9, 871.0], [89.0, 876.0], [89.1, 878.0], [89.2, 881.0], [89.3, 885.0], [89.4, 890.0], [89.5, 895.0], [89.6, 902.0], [89.7, 910.0], [89.8, 913.0], [89.9, 917.0], [90.0, 920.0], [90.1, 923.0], [90.2, 928.0], [90.3, 930.0], [90.4, 936.0], [90.5, 940.0], [90.6, 943.0], [90.7, 947.0], [90.8, 960.0], [90.9, 961.0], [91.0, 966.0], [91.1, 972.0], [91.2, 982.0], [91.3, 985.0], [91.4, 987.0], [91.5, 990.0], [91.6, 992.0], [91.7, 995.0], [91.8, 997.0], [91.9, 1001.0], [92.0, 1012.0], [92.1, 1015.0], [92.2, 1021.0], [92.3, 1024.0], [92.4, 1038.0], [92.5, 1045.0], [92.6, 1048.0], [92.7, 1053.0], [92.8, 1062.0], [92.9, 1069.0], [93.0, 1072.0], [93.1, 1079.0], [93.2, 1088.0], [93.3, 1096.0], [93.4, 1104.0], [93.5, 1108.0], [93.6, 1116.0], [93.7, 1121.0], [93.8, 1126.0], [93.9, 1131.0], [94.0, 1136.0], [94.1, 1144.0], [94.2, 1151.0], [94.3, 1155.0], [94.4, 1161.0], [94.5, 1168.0], [94.6, 1178.0], [94.7, 1186.0], [94.8, 1191.0], [94.9, 1193.0], [95.0, 1196.0], [95.1, 1203.0], [95.2, 1209.0], [95.3, 1217.0], [95.4, 1236.0], [95.5, 1245.0], [95.6, 1248.0], [95.7, 1259.0], [95.8, 1263.0], [95.9, 1276.0], [96.0, 1289.0], [96.1, 1306.0], [96.2, 1315.0], [96.3, 1323.0], [96.4, 1332.0], [96.5, 1344.0], [96.6, 1358.0], [96.7, 1371.0], [96.8, 1384.0], [96.9, 1408.0], [97.0, 1423.0], [97.1, 1450.0], [97.2, 1459.0], [97.3, 1471.0], [97.4, 1489.0], [97.5, 1513.0], [97.6, 1527.0], [97.7, 1547.0], [97.8, 1584.0], [97.9, 1598.0], [98.0, 1618.0], [98.1, 1646.0], [98.2, 1661.0], [98.3, 1695.0], [98.4, 1712.0], [98.5, 1749.0], [98.6, 1811.0], [98.7, 1853.0], [98.8, 1888.0], [98.9, 1928.0], [99.0, 2003.0], [99.1, 2057.0], [99.2, 2135.0], [99.3, 2204.0], [99.4, 2280.0], [99.5, 2326.0], [99.6, 2445.0], [99.7, 2486.0], [99.8, 2634.0], [99.9, 2709.0], [100.0, 3215.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 1897.0, "series": [{"data": [[0.0, 1897.0], [600.0, 227.0], [700.0, 197.0], [800.0, 183.0], [900.0, 121.0], [1000.0, 79.0], [1100.0, 91.0], [1200.0, 53.0], [1300.0, 41.0], [1400.0, 33.0], [1500.0, 23.0], [100.0, 740.0], [1600.0, 22.0], [1700.0, 14.0], [1800.0, 12.0], [1900.0, 9.0], [2000.0, 8.0], [2100.0, 8.0], [2200.0, 9.0], [2300.0, 4.0], [2400.0, 10.0], [2500.0, 2.0], [2600.0, 6.0], [2700.0, 3.0], [2800.0, 1.0], [2900.0, 1.0], [200.0, 474.0], [3200.0, 1.0], [300.0, 361.0], [400.0, 373.0], [500.0, 259.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3200.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 132.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 3848.0, "series": [{"data": [[0.0, 3848.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1282.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 132.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 8.61290322580645, "minX": 1.60440672E12, "maxY": 10.0, "series": [{"data": [[1.60440678E12, 10.0], [1.6044069E12, 10.0], [1.60440672E12, 8.61290322580645], [1.60440684E12, 10.0], [1.60440696E12, 9.877384196185284]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60440696E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 371.2408856652038, "minX": 1.0, "maxY": 2998.0, "series": [{"data": [[8.0, 507.0], [4.0, 2998.0], [2.0, 2458.0], [1.0, 2445.0], [9.0, 953.0], [5.0, 699.25], [10.0, 371.2408856652038], [3.0, 943.0], [6.0, 1405.5], [7.0, 688.5]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.983276320790578, 374.2618776130744]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 247.46666666666667, "minX": 1.60440672E12, "maxY": 1434743.0166666666, "series": [{"data": [[1.60440678E12, 1383482.1666666667], [1.6044069E12, 1434743.0166666666], [1.60440672E12, 6519.1], [1.60440684E12, 1166625.7333333334], [1.60440696E12, 259457.83333333334]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60440678E12, 11522.866666666667], [1.6044069E12, 13171.983333333334], [1.60440672E12, 247.46666666666667], [1.60440684E12, 17266.9], [1.60440696E12, 3281.733333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60440696E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 225.06451612903223, "minX": 1.60440672E12, "maxY": 456.44141689373294, "series": [{"data": [[1.60440678E12, 449.5733634311516], [1.6044069E12, 398.01662234042516], [1.60440672E12, 225.06451612903223], [1.60440684E12, 294.8178237321525], [1.60440696E12, 456.44141689373294]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60440696E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 224.77419354838707, "minX": 1.60440672E12, "maxY": 456.08446866485, "series": [{"data": [[1.60440678E12, 448.9992475545525], [1.6044069E12, 397.56449468085077], [1.60440672E12, 224.77419354838707], [1.60440684E12, 294.47267355982325], [1.60440696E12, 456.08446866485]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60440696E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.008276899924755454, "minX": 1.60440672E12, "maxY": 2.612903225806452, "series": [{"data": [[1.60440678E12, 0.008276899924755454], [1.6044069E12, 0.011303191489361706], [1.60440672E12, 2.612903225806452], [1.60440684E12, 0.009847365829640579], [1.60440696E12, 0.016348773841961862]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60440696E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 33.0, "minX": 1.60440672E12, "maxY": 3215.0, "series": [{"data": [[1.60440678E12, 2709.0], [1.6044069E12, 2441.0], [1.60440672E12, 831.0], [1.60440684E12, 2799.0], [1.60440696E12, 3215.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60440678E12, 39.0], [1.6044069E12, 39.0], [1.60440672E12, 48.0], [1.60440684E12, 41.28799951553344], [1.60440696E12, 35.31199991226196]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60440678E12, 39.16700012683869], [1.6044069E12, 39.0], [1.60440672E12, 48.0], [1.60440684E12, 42.0], [1.60440696E12, 35.64320003509521]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60440678E12, 39.0], [1.6044069E12, 39.0], [1.60440672E12, 48.0], [1.60440684E12, 42.0], [1.60440696E12, 35.49599995613098]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60440678E12, 33.0], [1.6044069E12, 36.0], [1.60440672E12, 48.0], [1.60440684E12, 34.0], [1.60440696E12, 35.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60440678E12, 332.0], [1.6044069E12, 254.5], [1.60440672E12, 145.0], [1.60440684E12, 156.0], [1.60440696E12, 163.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60440696E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 52.0, "minX": 2.0, "maxY": 2313.0, "series": [{"data": [[2.0, 1293.5], [4.0, 2313.0], [5.0, 1276.0], [6.0, 1292.5], [7.0, 1178.0], [8.0, 785.0], [9.0, 850.5], [10.0, 867.5], [11.0, 770.0], [12.0, 732.0], [13.0, 664.0], [14.0, 610.5], [15.0, 446.5], [16.0, 523.5], [17.0, 592.5], [18.0, 449.5], [19.0, 577.0], [20.0, 423.0], [21.0, 491.5], [22.0, 412.5], [23.0, 435.0], [24.0, 335.5], [25.0, 404.0], [26.0, 358.5], [27.0, 285.0], [28.0, 105.5], [29.0, 241.5], [30.0, 252.0], [31.0, 259.0], [32.0, 243.0], [35.0, 94.0], [34.0, 168.0], [37.0, 99.5], [36.0, 90.5], [38.0, 91.5], [39.0, 193.0], [41.0, 181.0], [42.0, 82.0], [45.0, 52.0], [44.0, 170.0], [47.0, 213.0], [49.0, 92.0], [51.0, 92.5], [50.0, 99.0], [52.0, 94.0], [53.0, 126.0], [54.0, 177.5], [56.0, 150.5], [57.0, 102.0], [60.0, 134.0], [62.0, 165.5], [63.0, 144.5], [67.0, 84.0], [64.0, 113.0], [72.0, 88.0], [82.0, 85.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 82.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 52.0, "minX": 2.0, "maxY": 2310.5, "series": [{"data": [[2.0, 1291.0], [4.0, 2310.5], [5.0, 1276.0], [6.0, 1288.5], [7.0, 1178.0], [8.0, 784.5], [9.0, 849.0], [10.0, 867.0], [11.0, 770.0], [12.0, 728.0], [13.0, 661.0], [14.0, 609.0], [15.0, 445.0], [16.0, 523.5], [17.0, 592.0], [18.0, 449.0], [19.0, 577.0], [20.0, 422.0], [21.0, 491.0], [22.0, 412.5], [23.0, 433.0], [24.0, 335.0], [25.0, 403.5], [26.0, 357.5], [27.0, 285.0], [28.0, 105.5], [29.0, 241.5], [30.0, 252.0], [31.0, 259.0], [32.0, 243.0], [35.0, 93.5], [34.0, 167.0], [37.0, 99.5], [36.0, 90.5], [38.0, 91.5], [39.0, 193.0], [41.0, 181.0], [42.0, 82.0], [45.0, 52.0], [44.0, 170.0], [47.0, 213.0], [49.0, 92.0], [51.0, 92.5], [50.0, 99.0], [52.0, 94.0], [53.0, 126.0], [54.0, 177.5], [56.0, 150.5], [57.0, 102.0], [60.0, 134.0], [62.0, 165.5], [63.0, 144.0], [67.0, 84.0], [64.0, 112.5], [72.0, 88.0], [82.0, 85.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 82.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.6833333333333333, "minX": 1.60440672E12, "maxY": 33.85, "series": [{"data": [[1.60440678E12, 22.15], [1.6044069E12, 25.066666666666666], [1.60440672E12, 0.6833333333333333], [1.60440684E12, 33.85], [1.60440696E12, 5.95]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60440696E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.5166666666666667, "minX": 1.60440672E12, "maxY": 33.85, "series": [{"data": [[1.60440678E12, 22.15], [1.6044069E12, 25.066666666666666], [1.60440672E12, 0.5166666666666667], [1.60440684E12, 33.85], [1.60440696E12, 6.116666666666666]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60440696E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.5166666666666667, "minX": 1.60440672E12, "maxY": 33.85, "series": [{"data": [[1.60440678E12, 22.15], [1.6044069E12, 25.066666666666666], [1.60440672E12, 0.5166666666666667], [1.60440684E12, 33.85], [1.60440696E12, 6.116666666666666]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60440696E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.5166666666666667, "minX": 1.60440672E12, "maxY": 33.85, "series": [{"data": [[1.60440678E12, 22.15], [1.6044069E12, 25.066666666666666], [1.60440672E12, 0.5166666666666667], [1.60440684E12, 33.85], [1.60440696E12, 6.116666666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60440696E12, "title": "Total Transactions Per Second"}},
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

