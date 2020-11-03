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
        data: {"result": {"minY": 31.0, "minX": 0.0, "maxY": 4509.0, "series": [{"data": [[0.0, 31.0], [0.1, 32.0], [0.2, 32.0], [0.3, 33.0], [0.4, 33.0], [0.5, 34.0], [0.6, 35.0], [0.7, 36.0], [0.8, 36.0], [0.9, 36.0], [1.0, 36.0], [1.1, 37.0], [1.2, 37.0], [1.3, 37.0], [1.4, 37.0], [1.5, 37.0], [1.6, 38.0], [1.7, 38.0], [1.8, 38.0], [1.9, 38.0], [2.0, 38.0], [2.1, 38.0], [2.2, 38.0], [2.3, 38.0], [2.4, 38.0], [2.5, 39.0], [2.6, 39.0], [2.7, 39.0], [2.8, 39.0], [2.9, 39.0], [3.0, 39.0], [3.1, 39.0], [3.2, 39.0], [3.3, 39.0], [3.4, 39.0], [3.5, 39.0], [3.6, 40.0], [3.7, 40.0], [3.8, 40.0], [3.9, 40.0], [4.0, 40.0], [4.1, 40.0], [4.2, 40.0], [4.3, 40.0], [4.4, 40.0], [4.5, 40.0], [4.6, 40.0], [4.7, 40.0], [4.8, 40.0], [4.9, 40.0], [5.0, 41.0], [5.1, 41.0], [5.2, 41.0], [5.3, 41.0], [5.4, 41.0], [5.5, 41.0], [5.6, 41.0], [5.7, 41.0], [5.8, 41.0], [5.9, 41.0], [6.0, 41.0], [6.1, 41.0], [6.2, 41.0], [6.3, 41.0], [6.4, 42.0], [6.5, 42.0], [6.6, 42.0], [6.7, 42.0], [6.8, 42.0], [6.9, 42.0], [7.0, 42.0], [7.1, 42.0], [7.2, 42.0], [7.3, 42.0], [7.4, 42.0], [7.5, 42.0], [7.6, 42.0], [7.7, 42.0], [7.8, 43.0], [7.9, 43.0], [8.0, 43.0], [8.1, 43.0], [8.2, 43.0], [8.3, 43.0], [8.4, 43.0], [8.5, 43.0], [8.6, 43.0], [8.7, 43.0], [8.8, 43.0], [8.9, 43.0], [9.0, 43.0], [9.1, 43.0], [9.2, 43.0], [9.3, 43.0], [9.4, 43.0], [9.5, 44.0], [9.6, 44.0], [9.7, 44.0], [9.8, 44.0], [9.9, 44.0], [10.0, 44.0], [10.1, 44.0], [10.2, 44.0], [10.3, 44.0], [10.4, 44.0], [10.5, 44.0], [10.6, 44.0], [10.7, 44.0], [10.8, 44.0], [10.9, 44.0], [11.0, 45.0], [11.1, 45.0], [11.2, 45.0], [11.3, 45.0], [11.4, 45.0], [11.5, 45.0], [11.6, 45.0], [11.7, 45.0], [11.8, 45.0], [11.9, 45.0], [12.0, 46.0], [12.1, 46.0], [12.2, 46.0], [12.3, 46.0], [12.4, 46.0], [12.5, 46.0], [12.6, 46.0], [12.7, 46.0], [12.8, 46.0], [12.9, 46.0], [13.0, 46.0], [13.1, 47.0], [13.2, 47.0], [13.3, 47.0], [13.4, 47.0], [13.5, 47.0], [13.6, 47.0], [13.7, 47.0], [13.8, 47.0], [13.9, 47.0], [14.0, 48.0], [14.1, 48.0], [14.2, 48.0], [14.3, 48.0], [14.4, 48.0], [14.5, 48.0], [14.6, 48.0], [14.7, 48.0], [14.8, 48.0], [14.9, 49.0], [15.0, 49.0], [15.1, 49.0], [15.2, 49.0], [15.3, 49.0], [15.4, 49.0], [15.5, 49.0], [15.6, 49.0], [15.7, 50.0], [15.8, 50.0], [15.9, 50.0], [16.0, 50.0], [16.1, 50.0], [16.2, 50.0], [16.3, 50.0], [16.4, 50.0], [16.5, 51.0], [16.6, 51.0], [16.7, 51.0], [16.8, 52.0], [16.9, 52.0], [17.0, 52.0], [17.1, 52.0], [17.2, 52.0], [17.3, 53.0], [17.4, 53.0], [17.5, 53.0], [17.6, 53.0], [17.7, 53.0], [17.8, 54.0], [17.9, 54.0], [18.0, 54.0], [18.1, 54.0], [18.2, 55.0], [18.3, 55.0], [18.4, 56.0], [18.5, 56.0], [18.6, 56.0], [18.7, 57.0], [18.8, 57.0], [18.9, 57.0], [19.0, 58.0], [19.1, 58.0], [19.2, 58.0], [19.3, 59.0], [19.4, 60.0], [19.5, 60.0], [19.6, 60.0], [19.7, 60.0], [19.8, 60.0], [19.9, 61.0], [20.0, 61.0], [20.1, 62.0], [20.2, 62.0], [20.3, 63.0], [20.4, 63.0], [20.5, 63.0], [20.6, 63.0], [20.7, 64.0], [20.8, 64.0], [20.9, 65.0], [21.0, 65.0], [21.1, 65.0], [21.2, 66.0], [21.3, 67.0], [21.4, 67.0], [21.5, 68.0], [21.6, 68.0], [21.7, 68.0], [21.8, 69.0], [21.9, 69.0], [22.0, 69.0], [22.1, 69.0], [22.2, 70.0], [22.3, 70.0], [22.4, 70.0], [22.5, 71.0], [22.6, 71.0], [22.7, 71.0], [22.8, 71.0], [22.9, 71.0], [23.0, 72.0], [23.1, 72.0], [23.2, 72.0], [23.3, 72.0], [23.4, 72.0], [23.5, 72.0], [23.6, 73.0], [23.7, 73.0], [23.8, 73.0], [23.9, 73.0], [24.0, 73.0], [24.1, 73.0], [24.2, 74.0], [24.3, 74.0], [24.4, 74.0], [24.5, 74.0], [24.6, 74.0], [24.7, 74.0], [24.8, 75.0], [24.9, 75.0], [25.0, 75.0], [25.1, 75.0], [25.2, 75.0], [25.3, 75.0], [25.4, 75.0], [25.5, 75.0], [25.6, 76.0], [25.7, 76.0], [25.8, 76.0], [25.9, 76.0], [26.0, 76.0], [26.1, 76.0], [26.2, 76.0], [26.3, 76.0], [26.4, 77.0], [26.5, 77.0], [26.6, 77.0], [26.7, 77.0], [26.8, 77.0], [26.9, 77.0], [27.0, 77.0], [27.1, 78.0], [27.2, 78.0], [27.3, 78.0], [27.4, 78.0], [27.5, 78.0], [27.6, 78.0], [27.7, 78.0], [27.8, 78.0], [27.9, 78.0], [28.0, 79.0], [28.1, 79.0], [28.2, 79.0], [28.3, 79.0], [28.4, 79.0], [28.5, 79.0], [28.6, 79.0], [28.7, 79.0], [28.8, 79.0], [28.9, 79.0], [29.0, 79.0], [29.1, 80.0], [29.2, 80.0], [29.3, 80.0], [29.4, 80.0], [29.5, 80.0], [29.6, 80.0], [29.7, 80.0], [29.8, 81.0], [29.9, 81.0], [30.0, 81.0], [30.1, 81.0], [30.2, 81.0], [30.3, 81.0], [30.4, 82.0], [30.5, 82.0], [30.6, 82.0], [30.7, 82.0], [30.8, 82.0], [30.9, 82.0], [31.0, 82.0], [31.1, 82.0], [31.2, 82.0], [31.3, 82.0], [31.4, 82.0], [31.5, 83.0], [31.6, 83.0], [31.7, 83.0], [31.8, 83.0], [31.9, 83.0], [32.0, 83.0], [32.1, 83.0], [32.2, 83.0], [32.3, 83.0], [32.4, 83.0], [32.5, 84.0], [32.6, 84.0], [32.7, 84.0], [32.8, 84.0], [32.9, 84.0], [33.0, 84.0], [33.1, 84.0], [33.2, 84.0], [33.3, 85.0], [33.4, 85.0], [33.5, 85.0], [33.6, 85.0], [33.7, 85.0], [33.8, 85.0], [33.9, 86.0], [34.0, 86.0], [34.1, 86.0], [34.2, 86.0], [34.3, 86.0], [34.4, 87.0], [34.5, 87.0], [34.6, 87.0], [34.7, 87.0], [34.8, 87.0], [34.9, 88.0], [35.0, 88.0], [35.1, 88.0], [35.2, 88.0], [35.3, 89.0], [35.4, 89.0], [35.5, 89.0], [35.6, 89.0], [35.7, 89.0], [35.8, 89.0], [35.9, 90.0], [36.0, 90.0], [36.1, 90.0], [36.2, 91.0], [36.3, 91.0], [36.4, 91.0], [36.5, 91.0], [36.6, 92.0], [36.7, 92.0], [36.8, 92.0], [36.9, 93.0], [37.0, 93.0], [37.1, 93.0], [37.2, 94.0], [37.3, 94.0], [37.4, 94.0], [37.5, 95.0], [37.6, 96.0], [37.7, 96.0], [37.8, 97.0], [37.9, 97.0], [38.0, 98.0], [38.1, 99.0], [38.2, 99.0], [38.3, 99.0], [38.4, 99.0], [38.5, 100.0], [38.6, 101.0], [38.7, 101.0], [38.8, 102.0], [38.9, 102.0], [39.0, 103.0], [39.1, 103.0], [39.2, 104.0], [39.3, 105.0], [39.4, 106.0], [39.5, 108.0], [39.6, 108.0], [39.7, 109.0], [39.8, 109.0], [39.9, 111.0], [40.0, 112.0], [40.1, 113.0], [40.2, 113.0], [40.3, 114.0], [40.4, 115.0], [40.5, 116.0], [40.6, 116.0], [40.7, 117.0], [40.8, 118.0], [40.9, 119.0], [41.0, 120.0], [41.1, 120.0], [41.2, 121.0], [41.3, 122.0], [41.4, 122.0], [41.5, 123.0], [41.6, 123.0], [41.7, 124.0], [41.8, 125.0], [41.9, 125.0], [42.0, 126.0], [42.1, 127.0], [42.2, 127.0], [42.3, 128.0], [42.4, 128.0], [42.5, 129.0], [42.6, 130.0], [42.7, 131.0], [42.8, 133.0], [42.9, 134.0], [43.0, 135.0], [43.1, 135.0], [43.2, 137.0], [43.3, 137.0], [43.4, 138.0], [43.5, 139.0], [43.6, 140.0], [43.7, 140.0], [43.8, 142.0], [43.9, 143.0], [44.0, 144.0], [44.1, 145.0], [44.2, 146.0], [44.3, 146.0], [44.4, 148.0], [44.5, 148.0], [44.6, 149.0], [44.7, 150.0], [44.8, 152.0], [44.9, 152.0], [45.0, 153.0], [45.1, 154.0], [45.2, 155.0], [45.3, 156.0], [45.4, 157.0], [45.5, 158.0], [45.6, 159.0], [45.7, 160.0], [45.8, 161.0], [45.9, 162.0], [46.0, 163.0], [46.1, 164.0], [46.2, 164.0], [46.3, 165.0], [46.4, 166.0], [46.5, 167.0], [46.6, 168.0], [46.7, 169.0], [46.8, 169.0], [46.9, 170.0], [47.0, 171.0], [47.1, 172.0], [47.2, 172.0], [47.3, 173.0], [47.4, 174.0], [47.5, 175.0], [47.6, 175.0], [47.7, 176.0], [47.8, 177.0], [47.9, 178.0], [48.0, 179.0], [48.1, 179.0], [48.2, 180.0], [48.3, 181.0], [48.4, 182.0], [48.5, 182.0], [48.6, 183.0], [48.7, 184.0], [48.8, 186.0], [48.9, 187.0], [49.0, 189.0], [49.1, 190.0], [49.2, 190.0], [49.3, 191.0], [49.4, 192.0], [49.5, 193.0], [49.6, 193.0], [49.7, 194.0], [49.8, 195.0], [49.9, 195.0], [50.0, 197.0], [50.1, 198.0], [50.2, 198.0], [50.3, 199.0], [50.4, 200.0], [50.5, 200.0], [50.6, 201.0], [50.7, 201.0], [50.8, 202.0], [50.9, 202.0], [51.0, 203.0], [51.1, 204.0], [51.2, 205.0], [51.3, 206.0], [51.4, 208.0], [51.5, 209.0], [51.6, 210.0], [51.7, 211.0], [51.8, 212.0], [51.9, 213.0], [52.0, 214.0], [52.1, 215.0], [52.2, 216.0], [52.3, 218.0], [52.4, 219.0], [52.5, 221.0], [52.6, 221.0], [52.7, 222.0], [52.8, 223.0], [52.9, 224.0], [53.0, 224.0], [53.1, 226.0], [53.2, 226.0], [53.3, 227.0], [53.4, 228.0], [53.5, 228.0], [53.6, 229.0], [53.7, 230.0], [53.8, 230.0], [53.9, 231.0], [54.0, 232.0], [54.1, 233.0], [54.2, 234.0], [54.3, 234.0], [54.4, 236.0], [54.5, 236.0], [54.6, 236.0], [54.7, 237.0], [54.8, 238.0], [54.9, 239.0], [55.0, 240.0], [55.1, 241.0], [55.2, 242.0], [55.3, 243.0], [55.4, 244.0], [55.5, 244.0], [55.6, 245.0], [55.7, 246.0], [55.8, 247.0], [55.9, 248.0], [56.0, 249.0], [56.1, 250.0], [56.2, 251.0], [56.3, 252.0], [56.4, 253.0], [56.5, 254.0], [56.6, 255.0], [56.7, 257.0], [56.8, 258.0], [56.9, 259.0], [57.0, 260.0], [57.1, 261.0], [57.2, 262.0], [57.3, 264.0], [57.4, 264.0], [57.5, 267.0], [57.6, 268.0], [57.7, 270.0], [57.8, 271.0], [57.9, 272.0], [58.0, 273.0], [58.1, 274.0], [58.2, 275.0], [58.3, 276.0], [58.4, 277.0], [58.5, 278.0], [58.6, 279.0], [58.7, 279.0], [58.8, 280.0], [58.9, 281.0], [59.0, 281.0], [59.1, 282.0], [59.2, 284.0], [59.3, 285.0], [59.4, 287.0], [59.5, 288.0], [59.6, 289.0], [59.7, 290.0], [59.8, 291.0], [59.9, 292.0], [60.0, 294.0], [60.1, 295.0], [60.2, 298.0], [60.3, 300.0], [60.4, 302.0], [60.5, 304.0], [60.6, 306.0], [60.7, 308.0], [60.8, 309.0], [60.9, 311.0], [61.0, 312.0], [61.1, 315.0], [61.2, 316.0], [61.3, 317.0], [61.4, 320.0], [61.5, 322.0], [61.6, 325.0], [61.7, 326.0], [61.8, 326.0], [61.9, 328.0], [62.0, 329.0], [62.1, 331.0], [62.2, 334.0], [62.3, 335.0], [62.4, 337.0], [62.5, 338.0], [62.6, 341.0], [62.7, 343.0], [62.8, 345.0], [62.9, 346.0], [63.0, 347.0], [63.1, 348.0], [63.2, 350.0], [63.3, 351.0], [63.4, 352.0], [63.5, 353.0], [63.6, 354.0], [63.7, 356.0], [63.8, 359.0], [63.9, 360.0], [64.0, 362.0], [64.1, 363.0], [64.2, 366.0], [64.3, 369.0], [64.4, 370.0], [64.5, 371.0], [64.6, 373.0], [64.7, 374.0], [64.8, 375.0], [64.9, 377.0], [65.0, 379.0], [65.1, 380.0], [65.2, 381.0], [65.3, 382.0], [65.4, 383.0], [65.5, 385.0], [65.6, 386.0], [65.7, 387.0], [65.8, 387.0], [65.9, 388.0], [66.0, 389.0], [66.1, 389.0], [66.2, 391.0], [66.3, 393.0], [66.4, 394.0], [66.5, 396.0], [66.6, 397.0], [66.7, 398.0], [66.8, 400.0], [66.9, 401.0], [67.0, 405.0], [67.1, 406.0], [67.2, 407.0], [67.3, 408.0], [67.4, 409.0], [67.5, 410.0], [67.6, 412.0], [67.7, 414.0], [67.8, 415.0], [67.9, 417.0], [68.0, 419.0], [68.1, 420.0], [68.2, 421.0], [68.3, 422.0], [68.4, 423.0], [68.5, 425.0], [68.6, 426.0], [68.7, 426.0], [68.8, 427.0], [68.9, 428.0], [69.0, 430.0], [69.1, 430.0], [69.2, 431.0], [69.3, 432.0], [69.4, 434.0], [69.5, 436.0], [69.6, 437.0], [69.7, 438.0], [69.8, 439.0], [69.9, 441.0], [70.0, 443.0], [70.1, 445.0], [70.2, 446.0], [70.3, 447.0], [70.4, 448.0], [70.5, 450.0], [70.6, 452.0], [70.7, 454.0], [70.8, 456.0], [70.9, 458.0], [71.0, 462.0], [71.1, 464.0], [71.2, 466.0], [71.3, 468.0], [71.4, 469.0], [71.5, 470.0], [71.6, 471.0], [71.7, 472.0], [71.8, 475.0], [71.9, 476.0], [72.0, 478.0], [72.1, 480.0], [72.2, 482.0], [72.3, 484.0], [72.4, 485.0], [72.5, 487.0], [72.6, 489.0], [72.7, 491.0], [72.8, 494.0], [72.9, 496.0], [73.0, 498.0], [73.1, 500.0], [73.2, 501.0], [73.3, 503.0], [73.4, 506.0], [73.5, 508.0], [73.6, 511.0], [73.7, 513.0], [73.8, 515.0], [73.9, 517.0], [74.0, 519.0], [74.1, 520.0], [74.2, 523.0], [74.3, 526.0], [74.4, 527.0], [74.5, 530.0], [74.6, 532.0], [74.7, 535.0], [74.8, 537.0], [74.9, 540.0], [75.0, 541.0], [75.1, 542.0], [75.2, 545.0], [75.3, 547.0], [75.4, 550.0], [75.5, 550.0], [75.6, 553.0], [75.7, 554.0], [75.8, 556.0], [75.9, 557.0], [76.0, 560.0], [76.1, 562.0], [76.2, 564.0], [76.3, 564.0], [76.4, 565.0], [76.5, 568.0], [76.6, 569.0], [76.7, 572.0], [76.8, 574.0], [76.9, 575.0], [77.0, 577.0], [77.1, 580.0], [77.2, 581.0], [77.3, 581.0], [77.4, 584.0], [77.5, 586.0], [77.6, 588.0], [77.7, 591.0], [77.8, 593.0], [77.9, 596.0], [78.0, 598.0], [78.1, 599.0], [78.2, 600.0], [78.3, 602.0], [78.4, 605.0], [78.5, 607.0], [78.6, 608.0], [78.7, 611.0], [78.8, 613.0], [78.9, 615.0], [79.0, 617.0], [79.1, 618.0], [79.2, 620.0], [79.3, 621.0], [79.4, 623.0], [79.5, 624.0], [79.6, 626.0], [79.7, 628.0], [79.8, 630.0], [79.9, 632.0], [80.0, 634.0], [80.1, 636.0], [80.2, 639.0], [80.3, 644.0], [80.4, 646.0], [80.5, 649.0], [80.6, 651.0], [80.7, 653.0], [80.8, 654.0], [80.9, 657.0], [81.0, 661.0], [81.1, 662.0], [81.2, 665.0], [81.3, 667.0], [81.4, 669.0], [81.5, 673.0], [81.6, 675.0], [81.7, 678.0], [81.8, 680.0], [81.9, 682.0], [82.0, 685.0], [82.1, 688.0], [82.2, 691.0], [82.3, 695.0], [82.4, 697.0], [82.5, 700.0], [82.6, 704.0], [82.7, 707.0], [82.8, 711.0], [82.9, 716.0], [83.0, 717.0], [83.1, 721.0], [83.2, 723.0], [83.3, 726.0], [83.4, 729.0], [83.5, 730.0], [83.6, 732.0], [83.7, 736.0], [83.8, 739.0], [83.9, 742.0], [84.0, 745.0], [84.1, 748.0], [84.2, 751.0], [84.3, 754.0], [84.4, 756.0], [84.5, 758.0], [84.6, 759.0], [84.7, 760.0], [84.8, 765.0], [84.9, 767.0], [85.0, 768.0], [85.1, 771.0], [85.2, 773.0], [85.3, 774.0], [85.4, 776.0], [85.5, 778.0], [85.6, 780.0], [85.7, 782.0], [85.8, 782.0], [85.9, 785.0], [86.0, 787.0], [86.1, 789.0], [86.2, 791.0], [86.3, 794.0], [86.4, 796.0], [86.5, 799.0], [86.6, 803.0], [86.7, 804.0], [86.8, 806.0], [86.9, 808.0], [87.0, 812.0], [87.1, 814.0], [87.2, 817.0], [87.3, 818.0], [87.4, 820.0], [87.5, 823.0], [87.6, 826.0], [87.7, 829.0], [87.8, 833.0], [87.9, 837.0], [88.0, 838.0], [88.1, 843.0], [88.2, 846.0], [88.3, 847.0], [88.4, 850.0], [88.5, 855.0], [88.6, 862.0], [88.7, 863.0], [88.8, 865.0], [88.9, 870.0], [89.0, 875.0], [89.1, 881.0], [89.2, 885.0], [89.3, 890.0], [89.4, 894.0], [89.5, 899.0], [89.6, 901.0], [89.7, 904.0], [89.8, 906.0], [89.9, 910.0], [90.0, 913.0], [90.1, 920.0], [90.2, 924.0], [90.3, 930.0], [90.4, 935.0], [90.5, 944.0], [90.6, 948.0], [90.7, 956.0], [90.8, 959.0], [90.9, 967.0], [91.0, 970.0], [91.1, 974.0], [91.2, 980.0], [91.3, 982.0], [91.4, 985.0], [91.5, 991.0], [91.6, 996.0], [91.7, 1002.0], [91.8, 1004.0], [91.9, 1011.0], [92.0, 1015.0], [92.1, 1019.0], [92.2, 1025.0], [92.3, 1027.0], [92.4, 1033.0], [92.5, 1043.0], [92.6, 1048.0], [92.7, 1050.0], [92.8, 1061.0], [92.9, 1070.0], [93.0, 1077.0], [93.1, 1081.0], [93.2, 1089.0], [93.3, 1093.0], [93.4, 1100.0], [93.5, 1108.0], [93.6, 1116.0], [93.7, 1126.0], [93.8, 1127.0], [93.9, 1134.0], [94.0, 1138.0], [94.1, 1144.0], [94.2, 1155.0], [94.3, 1163.0], [94.4, 1171.0], [94.5, 1179.0], [94.6, 1184.0], [94.7, 1190.0], [94.8, 1194.0], [94.9, 1203.0], [95.0, 1209.0], [95.1, 1220.0], [95.2, 1225.0], [95.3, 1231.0], [95.4, 1240.0], [95.5, 1248.0], [95.6, 1254.0], [95.7, 1264.0], [95.8, 1281.0], [95.9, 1300.0], [96.0, 1308.0], [96.1, 1318.0], [96.2, 1335.0], [96.3, 1341.0], [96.4, 1356.0], [96.5, 1367.0], [96.6, 1395.0], [96.7, 1405.0], [96.8, 1412.0], [96.9, 1427.0], [97.0, 1443.0], [97.1, 1455.0], [97.2, 1461.0], [97.3, 1476.0], [97.4, 1510.0], [97.5, 1517.0], [97.6, 1536.0], [97.7, 1551.0], [97.8, 1582.0], [97.9, 1615.0], [98.0, 1627.0], [98.1, 1655.0], [98.2, 1687.0], [98.3, 1706.0], [98.4, 1739.0], [98.5, 1762.0], [98.6, 1790.0], [98.7, 1829.0], [98.8, 1847.0], [98.9, 1894.0], [99.0, 1942.0], [99.1, 2010.0], [99.2, 2038.0], [99.3, 2222.0], [99.4, 2256.0], [99.5, 2311.0], [99.6, 2362.0], [99.7, 2484.0], [99.8, 2538.0], [99.9, 2932.0], [100.0, 4509.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 2022.0, "series": [{"data": [[0.0, 2022.0], [600.0, 226.0], [700.0, 212.0], [800.0, 161.0], [900.0, 111.0], [1000.0, 90.0], [1100.0, 78.0], [1200.0, 53.0], [1300.0, 41.0], [1400.0, 37.0], [1500.0, 28.0], [100.0, 630.0], [1600.0, 21.0], [1700.0, 20.0], [1800.0, 13.0], [1900.0, 8.0], [2000.0, 7.0], [2100.0, 3.0], [2200.0, 11.0], [2300.0, 7.0], [2400.0, 8.0], [2500.0, 4.0], [2700.0, 1.0], [2800.0, 2.0], [2900.0, 2.0], [3100.0, 1.0], [200.0, 517.0], [4200.0, 2.0], [4500.0, 1.0], [300.0, 346.0], [400.0, 330.0], [500.0, 269.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 4500.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 138.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 3850.0, "series": [{"data": [[0.0, 3850.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1274.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 138.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.958061509785647, "minX": 1.60423824E12, "maxY": 10.0, "series": [{"data": [[1.6042383E12, 10.0], [1.60423842E12, 9.958061509785647], [1.60423824E12, 9.966850828729287], [1.60423836E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60423842E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 364.9599618684463, "minX": 1.0, "maxY": 4509.0, "series": [{"data": [[4.0, 2214.0], [8.0, 1464.0], [2.0, 4219.0], [1.0, 4509.0], [9.0, 959.0], [5.0, 1030.3333333333335], [10.0, 364.9599618684463], [6.0, 1259.0], [3.0, 2264.0], [7.0, 632.5]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.98688711516533, 369.0638540478902]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 6203.916666666667, "minX": 1.60423824E12, "maxY": 1319945.75, "series": [{"data": [[1.6042383E12, 1319945.75], [1.60423842E12, 1086655.8833333333], [1.60423824E12, 570852.0666666667], [1.60423836E12, 1273499.85]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6042383E12, 13394.866666666667], [1.60423842E12, 9487.216666666667], [1.60423824E12, 6203.916666666667], [1.60423836E12, 16404.95]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60423842E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 306.67338501292005, "minX": 1.60423824E12, "maxY": 432.25256290773456, "series": [{"data": [[1.6042383E12, 394.41437908496727], [1.60423842E12, 432.25256290773456], [1.60423824E12, 388.5911602209944], [1.60423836E12, 306.67338501292005]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60423842E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 306.3328165374675, "minX": 1.60423824E12, "maxY": 431.7539608574095, "series": [{"data": [[1.6042383E12, 393.9803921568626], [1.60423842E12, 431.7539608574095], [1.60423824E12, 388.1464088397788], [1.60423836E12, 306.3328165374675]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60423842E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.010251630941286111, "minX": 1.60423824E12, "maxY": 0.12569060773480653, "series": [{"data": [[1.6042383E12, 0.01633986928104577], [1.60423842E12, 0.010251630941286111], [1.60423824E12, 0.12569060773480653], [1.60423836E12, 0.010335917312661522]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60423842E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 31.0, "minX": 1.60423824E12, "maxY": 4509.0, "series": [{"data": [[1.6042383E12, 2766.0], [1.60423842E12, 4509.0], [1.60423824E12, 1789.0], [1.60423836E12, 2497.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6042383E12, 33.0], [1.60423842E12, 36.0], [1.60423824E12, 38.0], [1.60423836E12, 37.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6042383E12, 33.0], [1.60423842E12, 36.0], [1.60423824E12, 38.0], [1.60423836E12, 38.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6042383E12, 33.0], [1.60423842E12, 36.0], [1.60423824E12, 38.0], [1.60423836E12, 37.39199976921081]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.6042383E12, 31.0], [1.60423842E12, 33.0], [1.60423824E12, 35.0], [1.60423836E12, 32.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6042383E12, 199.5], [1.60423842E12, 237.0], [1.60423824E12, 241.0], [1.60423836E12, 171.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60423842E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 52.5, "minX": 1.0, "maxY": 3241.5, "series": [{"data": [[3.0, 2803.0], [4.0, 1764.5], [5.0, 2242.0], [6.0, 1227.0], [7.0, 875.5], [8.0, 1110.5], [9.0, 932.0], [10.0, 727.0], [11.0, 779.0], [12.0, 678.5], [13.0, 754.0], [14.0, 624.0], [15.0, 564.5], [16.0, 489.5], [17.0, 479.5], [18.0, 603.0], [19.0, 532.0], [20.0, 550.5], [21.0, 409.0], [22.0, 448.5], [23.0, 285.0], [24.0, 209.0], [25.0, 310.0], [26.0, 143.0], [27.0, 312.5], [28.0, 290.0], [30.0, 235.0], [31.0, 226.0], [33.0, 111.0], [32.0, 96.0], [35.0, 174.5], [34.0, 201.5], [36.0, 121.0], [38.0, 84.0], [39.0, 88.0], [41.0, 85.5], [40.0, 154.0], [43.0, 89.0], [42.0, 183.0], [44.0, 84.0], [45.0, 124.0], [46.0, 130.5], [47.0, 237.0], [51.0, 136.0], [50.0, 84.0], [53.0, 80.5], [54.0, 104.5], [55.0, 154.0], [57.0, 80.0], [59.0, 119.0], [61.0, 120.0], [65.0, 103.5], [66.0, 127.0], [64.0, 52.5], [69.0, 71.0], [68.0, 91.0], [75.0, 89.0], [77.0, 78.0], [78.0, 76.0], [1.0, 3241.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 78.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 52.5, "minX": 1.0, "maxY": 3241.0, "series": [{"data": [[3.0, 2803.0], [4.0, 1763.5], [5.0, 2242.0], [6.0, 1225.0], [7.0, 871.5], [8.0, 1106.5], [9.0, 931.0], [10.0, 726.0], [11.0, 779.0], [12.0, 678.0], [13.0, 752.0], [14.0, 624.0], [15.0, 564.0], [16.0, 488.5], [17.0, 479.0], [18.0, 603.0], [19.0, 531.5], [20.0, 550.5], [21.0, 408.0], [22.0, 448.0], [23.0, 285.0], [24.0, 209.0], [25.0, 309.0], [26.0, 143.0], [27.0, 312.0], [28.0, 290.0], [30.0, 235.0], [31.0, 225.0], [33.0, 110.5], [32.0, 96.0], [35.0, 174.0], [34.0, 201.0], [36.0, 120.0], [38.0, 84.0], [39.0, 88.0], [41.0, 85.5], [40.0, 154.0], [43.0, 89.0], [42.0, 182.0], [44.0, 83.0], [45.0, 124.0], [46.0, 130.5], [47.0, 237.0], [51.0, 136.0], [50.0, 83.5], [53.0, 80.0], [54.0, 104.5], [55.0, 154.0], [57.0, 80.0], [59.0, 119.0], [61.0, 120.0], [65.0, 103.0], [66.0, 127.0], [64.0, 52.5], [69.0, 71.0], [68.0, 91.0], [75.0, 89.0], [77.0, 77.0], [78.0, 76.0], [1.0, 3241.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 78.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 12.233333333333333, "minX": 1.60423824E12, "maxY": 32.25, "series": [{"data": [[1.6042383E12, 25.5], [1.60423842E12, 17.716666666666665], [1.60423824E12, 12.233333333333333], [1.60423836E12, 32.25]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60423842E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 12.066666666666666, "minX": 1.60423824E12, "maxY": 32.25, "series": [{"data": [[1.6042383E12, 25.5], [1.60423842E12, 17.883333333333333], [1.60423824E12, 12.066666666666666], [1.60423836E12, 32.25]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60423842E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 12.066666666666666, "minX": 1.60423824E12, "maxY": 32.25, "series": [{"data": [[1.6042383E12, 25.5], [1.60423842E12, 17.883333333333333], [1.60423824E12, 12.066666666666666], [1.60423836E12, 32.25]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60423842E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 12.066666666666666, "minX": 1.60423824E12, "maxY": 32.25, "series": [{"data": [[1.6042383E12, 25.5], [1.60423842E12, 17.883333333333333], [1.60423824E12, 12.066666666666666], [1.60423836E12, 32.25]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60423842E12, "title": "Total Transactions Per Second"}},
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

