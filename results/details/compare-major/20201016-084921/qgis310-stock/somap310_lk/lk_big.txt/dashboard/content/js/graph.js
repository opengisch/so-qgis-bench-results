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
        data: {"result": {"minY": 30.0, "minX": 0.0, "maxY": 4129.0, "series": [{"data": [[0.0, 30.0], [0.1, 32.0], [0.2, 34.0], [0.3, 35.0], [0.4, 35.0], [0.5, 36.0], [0.6, 37.0], [0.7, 37.0], [0.8, 37.0], [0.9, 37.0], [1.0, 38.0], [1.1, 38.0], [1.2, 38.0], [1.3, 38.0], [1.4, 38.0], [1.5, 38.0], [1.6, 38.0], [1.7, 38.0], [1.8, 38.0], [1.9, 39.0], [2.0, 39.0], [2.1, 39.0], [2.2, 39.0], [2.3, 39.0], [2.4, 39.0], [2.5, 39.0], [2.6, 39.0], [2.7, 39.0], [2.8, 39.0], [2.9, 39.0], [3.0, 39.0], [3.1, 40.0], [3.2, 40.0], [3.3, 40.0], [3.4, 40.0], [3.5, 40.0], [3.6, 40.0], [3.7, 40.0], [3.8, 40.0], [3.9, 40.0], [4.0, 40.0], [4.1, 40.0], [4.2, 40.0], [4.3, 40.0], [4.4, 40.0], [4.5, 40.0], [4.6, 41.0], [4.7, 41.0], [4.8, 41.0], [4.9, 41.0], [5.0, 41.0], [5.1, 41.0], [5.2, 41.0], [5.3, 41.0], [5.4, 41.0], [5.5, 41.0], [5.6, 41.0], [5.7, 41.0], [5.8, 41.0], [5.9, 41.0], [6.0, 41.0], [6.1, 41.0], [6.2, 42.0], [6.3, 42.0], [6.4, 42.0], [6.5, 42.0], [6.6, 42.0], [6.7, 42.0], [6.8, 42.0], [6.9, 42.0], [7.0, 42.0], [7.1, 42.0], [7.2, 42.0], [7.3, 42.0], [7.4, 42.0], [7.5, 42.0], [7.6, 42.0], [7.7, 43.0], [7.8, 43.0], [7.9, 43.0], [8.0, 43.0], [8.1, 43.0], [8.2, 43.0], [8.3, 43.0], [8.4, 43.0], [8.5, 43.0], [8.6, 43.0], [8.7, 43.0], [8.8, 43.0], [8.9, 43.0], [9.0, 43.0], [9.1, 44.0], [9.2, 44.0], [9.3, 44.0], [9.4, 44.0], [9.5, 44.0], [9.6, 44.0], [9.7, 44.0], [9.8, 44.0], [9.9, 44.0], [10.0, 44.0], [10.1, 44.0], [10.2, 44.0], [10.3, 44.0], [10.4, 45.0], [10.5, 45.0], [10.6, 45.0], [10.7, 45.0], [10.8, 45.0], [10.9, 45.0], [11.0, 45.0], [11.1, 45.0], [11.2, 45.0], [11.3, 45.0], [11.4, 45.0], [11.5, 45.0], [11.6, 45.0], [11.7, 46.0], [11.8, 46.0], [11.9, 46.0], [12.0, 46.0], [12.1, 46.0], [12.2, 46.0], [12.3, 46.0], [12.4, 46.0], [12.5, 46.0], [12.6, 46.0], [12.7, 46.0], [12.8, 47.0], [12.9, 47.0], [13.0, 47.0], [13.1, 47.0], [13.2, 47.0], [13.3, 47.0], [13.4, 47.0], [13.5, 47.0], [13.6, 47.0], [13.7, 48.0], [13.8, 48.0], [13.9, 48.0], [14.0, 48.0], [14.1, 48.0], [14.2, 48.0], [14.3, 48.0], [14.4, 48.0], [14.5, 49.0], [14.6, 49.0], [14.7, 49.0], [14.8, 49.0], [14.9, 49.0], [15.0, 49.0], [15.1, 49.0], [15.2, 49.0], [15.3, 50.0], [15.4, 50.0], [15.5, 50.0], [15.6, 50.0], [15.7, 50.0], [15.8, 50.0], [15.9, 50.0], [16.0, 51.0], [16.1, 51.0], [16.2, 51.0], [16.3, 52.0], [16.4, 52.0], [16.5, 52.0], [16.6, 52.0], [16.7, 52.0], [16.8, 52.0], [16.9, 53.0], [17.0, 53.0], [17.1, 53.0], [17.2, 54.0], [17.3, 54.0], [17.4, 54.0], [17.5, 54.0], [17.6, 55.0], [17.7, 55.0], [17.8, 55.0], [17.9, 56.0], [18.0, 57.0], [18.1, 57.0], [18.2, 57.0], [18.3, 57.0], [18.4, 58.0], [18.5, 58.0], [18.6, 58.0], [18.7, 58.0], [18.8, 59.0], [18.9, 59.0], [19.0, 59.0], [19.1, 60.0], [19.2, 60.0], [19.3, 60.0], [19.4, 60.0], [19.5, 61.0], [19.6, 61.0], [19.7, 62.0], [19.8, 63.0], [19.9, 63.0], [20.0, 64.0], [20.1, 64.0], [20.2, 64.0], [20.3, 64.0], [20.4, 65.0], [20.5, 65.0], [20.6, 65.0], [20.7, 66.0], [20.8, 66.0], [20.9, 67.0], [21.0, 67.0], [21.1, 68.0], [21.2, 68.0], [21.3, 69.0], [21.4, 69.0], [21.5, 70.0], [21.6, 70.0], [21.7, 70.0], [21.8, 70.0], [21.9, 71.0], [22.0, 71.0], [22.1, 71.0], [22.2, 72.0], [22.3, 72.0], [22.4, 72.0], [22.5, 72.0], [22.6, 72.0], [22.7, 72.0], [22.8, 73.0], [22.9, 73.0], [23.0, 73.0], [23.1, 73.0], [23.2, 73.0], [23.3, 73.0], [23.4, 73.0], [23.5, 74.0], [23.6, 74.0], [23.7, 74.0], [23.8, 74.0], [23.9, 74.0], [24.0, 74.0], [24.1, 75.0], [24.2, 75.0], [24.3, 75.0], [24.4, 75.0], [24.5, 75.0], [24.6, 75.0], [24.7, 75.0], [24.8, 75.0], [24.9, 76.0], [25.0, 76.0], [25.1, 76.0], [25.2, 76.0], [25.3, 76.0], [25.4, 76.0], [25.5, 76.0], [25.6, 76.0], [25.7, 77.0], [25.8, 77.0], [25.9, 77.0], [26.0, 77.0], [26.1, 77.0], [26.2, 77.0], [26.3, 77.0], [26.4, 77.0], [26.5, 77.0], [26.6, 77.0], [26.7, 77.0], [26.8, 78.0], [26.9, 78.0], [27.0, 78.0], [27.1, 78.0], [27.2, 78.0], [27.3, 78.0], [27.4, 78.0], [27.5, 78.0], [27.6, 78.0], [27.7, 79.0], [27.8, 79.0], [27.9, 79.0], [28.0, 79.0], [28.1, 79.0], [28.2, 79.0], [28.3, 79.0], [28.4, 79.0], [28.5, 79.0], [28.6, 79.0], [28.7, 80.0], [28.8, 80.0], [28.9, 80.0], [29.0, 80.0], [29.1, 80.0], [29.2, 80.0], [29.3, 80.0], [29.4, 80.0], [29.5, 80.0], [29.6, 80.0], [29.7, 80.0], [29.8, 80.0], [29.9, 81.0], [30.0, 81.0], [30.1, 81.0], [30.2, 81.0], [30.3, 81.0], [30.4, 81.0], [30.5, 81.0], [30.6, 81.0], [30.7, 81.0], [30.8, 82.0], [30.9, 82.0], [31.0, 82.0], [31.1, 82.0], [31.2, 82.0], [31.3, 82.0], [31.4, 82.0], [31.5, 82.0], [31.6, 82.0], [31.7, 82.0], [31.8, 83.0], [31.9, 83.0], [32.0, 83.0], [32.1, 83.0], [32.2, 83.0], [32.3, 83.0], [32.4, 83.0], [32.5, 83.0], [32.6, 84.0], [32.7, 84.0], [32.8, 84.0], [32.9, 84.0], [33.0, 84.0], [33.1, 84.0], [33.2, 84.0], [33.3, 84.0], [33.4, 85.0], [33.5, 85.0], [33.6, 85.0], [33.7, 85.0], [33.8, 85.0], [33.9, 85.0], [34.0, 86.0], [34.1, 86.0], [34.2, 86.0], [34.3, 86.0], [34.4, 86.0], [34.5, 86.0], [34.6, 86.0], [34.7, 87.0], [34.8, 87.0], [34.9, 87.0], [35.0, 87.0], [35.1, 88.0], [35.2, 88.0], [35.3, 88.0], [35.4, 88.0], [35.5, 88.0], [35.6, 89.0], [35.7, 89.0], [35.8, 89.0], [35.9, 89.0], [36.0, 89.0], [36.1, 90.0], [36.2, 90.0], [36.3, 90.0], [36.4, 90.0], [36.5, 90.0], [36.6, 91.0], [36.7, 91.0], [36.8, 91.0], [36.9, 92.0], [37.0, 92.0], [37.1, 92.0], [37.2, 93.0], [37.3, 93.0], [37.4, 93.0], [37.5, 94.0], [37.6, 94.0], [37.7, 94.0], [37.8, 95.0], [37.9, 96.0], [38.0, 96.0], [38.1, 97.0], [38.2, 97.0], [38.3, 97.0], [38.4, 98.0], [38.5, 98.0], [38.6, 99.0], [38.7, 99.0], [38.8, 100.0], [38.9, 100.0], [39.0, 100.0], [39.1, 101.0], [39.2, 102.0], [39.3, 102.0], [39.4, 104.0], [39.5, 104.0], [39.6, 104.0], [39.7, 104.0], [39.8, 105.0], [39.9, 105.0], [40.0, 106.0], [40.1, 107.0], [40.2, 107.0], [40.3, 108.0], [40.4, 108.0], [40.5, 108.0], [40.6, 109.0], [40.7, 110.0], [40.8, 110.0], [40.9, 111.0], [41.0, 112.0], [41.1, 112.0], [41.2, 113.0], [41.3, 114.0], [41.4, 115.0], [41.5, 116.0], [41.6, 116.0], [41.7, 117.0], [41.8, 118.0], [41.9, 119.0], [42.0, 121.0], [42.1, 121.0], [42.2, 122.0], [42.3, 122.0], [42.4, 123.0], [42.5, 125.0], [42.6, 125.0], [42.7, 126.0], [42.8, 127.0], [42.9, 127.0], [43.0, 128.0], [43.1, 129.0], [43.2, 130.0], [43.3, 131.0], [43.4, 131.0], [43.5, 133.0], [43.6, 133.0], [43.7, 135.0], [43.8, 135.0], [43.9, 137.0], [44.0, 137.0], [44.1, 138.0], [44.2, 139.0], [44.3, 139.0], [44.4, 141.0], [44.5, 143.0], [44.6, 145.0], [44.7, 146.0], [44.8, 147.0], [44.9, 148.0], [45.0, 148.0], [45.1, 149.0], [45.2, 150.0], [45.3, 151.0], [45.4, 152.0], [45.5, 154.0], [45.6, 154.0], [45.7, 155.0], [45.8, 156.0], [45.9, 156.0], [46.0, 157.0], [46.1, 157.0], [46.2, 158.0], [46.3, 159.0], [46.4, 160.0], [46.5, 161.0], [46.6, 162.0], [46.7, 162.0], [46.8, 163.0], [46.9, 164.0], [47.0, 165.0], [47.1, 165.0], [47.2, 166.0], [47.3, 167.0], [47.4, 168.0], [47.5, 169.0], [47.6, 170.0], [47.7, 171.0], [47.8, 172.0], [47.9, 173.0], [48.0, 173.0], [48.1, 174.0], [48.2, 175.0], [48.3, 176.0], [48.4, 176.0], [48.5, 178.0], [48.6, 178.0], [48.7, 179.0], [48.8, 179.0], [48.9, 180.0], [49.0, 181.0], [49.1, 182.0], [49.2, 183.0], [49.3, 185.0], [49.4, 186.0], [49.5, 187.0], [49.6, 187.0], [49.7, 188.0], [49.8, 189.0], [49.9, 190.0], [50.0, 190.0], [50.1, 191.0], [50.2, 192.0], [50.3, 193.0], [50.4, 194.0], [50.5, 195.0], [50.6, 196.0], [50.7, 197.0], [50.8, 198.0], [50.9, 200.0], [51.0, 200.0], [51.1, 202.0], [51.2, 203.0], [51.3, 203.0], [51.4, 204.0], [51.5, 206.0], [51.6, 207.0], [51.7, 208.0], [51.8, 209.0], [51.9, 210.0], [52.0, 211.0], [52.1, 212.0], [52.2, 212.0], [52.3, 214.0], [52.4, 215.0], [52.5, 216.0], [52.6, 217.0], [52.7, 218.0], [52.8, 219.0], [52.9, 220.0], [53.0, 222.0], [53.1, 224.0], [53.2, 224.0], [53.3, 226.0], [53.4, 226.0], [53.5, 227.0], [53.6, 228.0], [53.7, 229.0], [53.8, 230.0], [53.9, 232.0], [54.0, 233.0], [54.1, 234.0], [54.2, 235.0], [54.3, 236.0], [54.4, 236.0], [54.5, 238.0], [54.6, 239.0], [54.7, 239.0], [54.8, 241.0], [54.9, 242.0], [55.0, 243.0], [55.1, 245.0], [55.2, 246.0], [55.3, 246.0], [55.4, 247.0], [55.5, 249.0], [55.6, 250.0], [55.7, 251.0], [55.8, 252.0], [55.9, 252.0], [56.0, 254.0], [56.1, 255.0], [56.2, 256.0], [56.3, 257.0], [56.4, 257.0], [56.5, 258.0], [56.6, 259.0], [56.7, 260.0], [56.8, 261.0], [56.9, 262.0], [57.0, 263.0], [57.1, 264.0], [57.2, 265.0], [57.3, 266.0], [57.4, 267.0], [57.5, 268.0], [57.6, 269.0], [57.7, 270.0], [57.8, 271.0], [57.9, 272.0], [58.0, 273.0], [58.1, 274.0], [58.2, 275.0], [58.3, 276.0], [58.4, 278.0], [58.5, 279.0], [58.6, 281.0], [58.7, 283.0], [58.8, 284.0], [58.9, 285.0], [59.0, 286.0], [59.1, 288.0], [59.2, 291.0], [59.3, 292.0], [59.4, 292.0], [59.5, 293.0], [59.6, 295.0], [59.7, 298.0], [59.8, 299.0], [59.9, 300.0], [60.0, 302.0], [60.1, 303.0], [60.2, 305.0], [60.3, 306.0], [60.4, 308.0], [60.5, 309.0], [60.6, 310.0], [60.7, 311.0], [60.8, 312.0], [60.9, 313.0], [61.0, 315.0], [61.1, 316.0], [61.2, 318.0], [61.3, 320.0], [61.4, 321.0], [61.5, 323.0], [61.6, 325.0], [61.7, 326.0], [61.8, 328.0], [61.9, 330.0], [62.0, 330.0], [62.1, 330.0], [62.2, 331.0], [62.3, 333.0], [62.4, 334.0], [62.5, 336.0], [62.6, 339.0], [62.7, 340.0], [62.8, 342.0], [62.9, 343.0], [63.0, 345.0], [63.1, 346.0], [63.2, 348.0], [63.3, 349.0], [63.4, 349.0], [63.5, 351.0], [63.6, 353.0], [63.7, 354.0], [63.8, 356.0], [63.9, 358.0], [64.0, 358.0], [64.1, 360.0], [64.2, 363.0], [64.3, 365.0], [64.4, 366.0], [64.5, 367.0], [64.6, 369.0], [64.7, 370.0], [64.8, 371.0], [64.9, 372.0], [65.0, 374.0], [65.1, 376.0], [65.2, 377.0], [65.3, 381.0], [65.4, 382.0], [65.5, 383.0], [65.6, 384.0], [65.7, 386.0], [65.8, 388.0], [65.9, 389.0], [66.0, 390.0], [66.1, 391.0], [66.2, 392.0], [66.3, 393.0], [66.4, 394.0], [66.5, 397.0], [66.6, 398.0], [66.7, 398.0], [66.8, 401.0], [66.9, 402.0], [67.0, 403.0], [67.1, 404.0], [67.2, 408.0], [67.3, 409.0], [67.4, 410.0], [67.5, 411.0], [67.6, 412.0], [67.7, 414.0], [67.8, 414.0], [67.9, 417.0], [68.0, 418.0], [68.1, 419.0], [68.2, 420.0], [68.3, 420.0], [68.4, 422.0], [68.5, 424.0], [68.6, 426.0], [68.7, 427.0], [68.8, 428.0], [68.9, 430.0], [69.0, 431.0], [69.1, 432.0], [69.2, 434.0], [69.3, 435.0], [69.4, 435.0], [69.5, 436.0], [69.6, 438.0], [69.7, 440.0], [69.8, 442.0], [69.9, 444.0], [70.0, 445.0], [70.1, 447.0], [70.2, 448.0], [70.3, 449.0], [70.4, 450.0], [70.5, 452.0], [70.6, 455.0], [70.7, 456.0], [70.8, 457.0], [70.9, 459.0], [71.0, 461.0], [71.1, 462.0], [71.2, 463.0], [71.3, 464.0], [71.4, 466.0], [71.5, 467.0], [71.6, 469.0], [71.7, 471.0], [71.8, 473.0], [71.9, 474.0], [72.0, 476.0], [72.1, 478.0], [72.2, 481.0], [72.3, 482.0], [72.4, 484.0], [72.5, 485.0], [72.6, 486.0], [72.7, 488.0], [72.8, 488.0], [72.9, 492.0], [73.0, 494.0], [73.1, 495.0], [73.2, 496.0], [73.3, 498.0], [73.4, 501.0], [73.5, 504.0], [73.6, 506.0], [73.7, 508.0], [73.8, 511.0], [73.9, 513.0], [74.0, 516.0], [74.1, 517.0], [74.2, 520.0], [74.3, 521.0], [74.4, 523.0], [74.5, 528.0], [74.6, 530.0], [74.7, 531.0], [74.8, 532.0], [74.9, 536.0], [75.0, 536.0], [75.1, 539.0], [75.2, 541.0], [75.3, 542.0], [75.4, 544.0], [75.5, 547.0], [75.6, 549.0], [75.7, 552.0], [75.8, 556.0], [75.9, 558.0], [76.0, 562.0], [76.1, 564.0], [76.2, 567.0], [76.3, 568.0], [76.4, 571.0], [76.5, 573.0], [76.6, 577.0], [76.7, 581.0], [76.8, 584.0], [76.9, 585.0], [77.0, 587.0], [77.1, 589.0], [77.2, 592.0], [77.3, 593.0], [77.4, 595.0], [77.5, 598.0], [77.6, 599.0], [77.7, 600.0], [77.8, 601.0], [77.9, 605.0], [78.0, 607.0], [78.1, 608.0], [78.2, 609.0], [78.3, 612.0], [78.4, 613.0], [78.5, 615.0], [78.6, 619.0], [78.7, 622.0], [78.8, 624.0], [78.9, 625.0], [79.0, 628.0], [79.1, 630.0], [79.2, 631.0], [79.3, 634.0], [79.4, 636.0], [79.5, 639.0], [79.6, 642.0], [79.7, 644.0], [79.8, 647.0], [79.9, 650.0], [80.0, 651.0], [80.1, 652.0], [80.2, 655.0], [80.3, 660.0], [80.4, 662.0], [80.5, 665.0], [80.6, 669.0], [80.7, 671.0], [80.8, 675.0], [80.9, 680.0], [81.0, 683.0], [81.1, 686.0], [81.2, 689.0], [81.3, 691.0], [81.4, 694.0], [81.5, 700.0], [81.6, 704.0], [81.7, 708.0], [81.8, 711.0], [81.9, 713.0], [82.0, 715.0], [82.1, 718.0], [82.2, 719.0], [82.3, 722.0], [82.4, 723.0], [82.5, 724.0], [82.6, 726.0], [82.7, 727.0], [82.8, 729.0], [82.9, 730.0], [83.0, 733.0], [83.1, 734.0], [83.2, 736.0], [83.3, 740.0], [83.4, 744.0], [83.5, 746.0], [83.6, 748.0], [83.7, 750.0], [83.8, 751.0], [83.9, 753.0], [84.0, 756.0], [84.1, 758.0], [84.2, 759.0], [84.3, 762.0], [84.4, 765.0], [84.5, 767.0], [84.6, 769.0], [84.7, 771.0], [84.8, 773.0], [84.9, 774.0], [85.0, 776.0], [85.1, 781.0], [85.2, 784.0], [85.3, 785.0], [85.4, 787.0], [85.5, 789.0], [85.6, 791.0], [85.7, 794.0], [85.8, 795.0], [85.9, 799.0], [86.0, 801.0], [86.1, 803.0], [86.2, 804.0], [86.3, 806.0], [86.4, 809.0], [86.5, 812.0], [86.6, 814.0], [86.7, 819.0], [86.8, 822.0], [86.9, 823.0], [87.0, 825.0], [87.1, 828.0], [87.2, 831.0], [87.3, 837.0], [87.4, 839.0], [87.5, 844.0], [87.6, 848.0], [87.7, 851.0], [87.8, 856.0], [87.9, 858.0], [88.0, 862.0], [88.1, 865.0], [88.2, 869.0], [88.3, 871.0], [88.4, 874.0], [88.5, 877.0], [88.6, 880.0], [88.7, 886.0], [88.8, 888.0], [88.9, 890.0], [89.0, 895.0], [89.1, 897.0], [89.2, 900.0], [89.3, 904.0], [89.4, 909.0], [89.5, 914.0], [89.6, 916.0], [89.7, 921.0], [89.8, 927.0], [89.9, 930.0], [90.0, 936.0], [90.1, 942.0], [90.2, 945.0], [90.3, 947.0], [90.4, 950.0], [90.5, 954.0], [90.6, 958.0], [90.7, 963.0], [90.8, 965.0], [90.9, 974.0], [91.0, 976.0], [91.1, 981.0], [91.2, 991.0], [91.3, 993.0], [91.4, 997.0], [91.5, 1002.0], [91.6, 1007.0], [91.7, 1011.0], [91.8, 1018.0], [91.9, 1025.0], [92.0, 1032.0], [92.1, 1039.0], [92.2, 1046.0], [92.3, 1054.0], [92.4, 1058.0], [92.5, 1062.0], [92.6, 1069.0], [92.7, 1072.0], [92.8, 1079.0], [92.9, 1083.0], [93.0, 1085.0], [93.1, 1090.0], [93.2, 1096.0], [93.3, 1102.0], [93.4, 1107.0], [93.5, 1117.0], [93.6, 1125.0], [93.7, 1134.0], [93.8, 1137.0], [93.9, 1145.0], [94.0, 1152.0], [94.1, 1156.0], [94.2, 1159.0], [94.3, 1166.0], [94.4, 1169.0], [94.5, 1171.0], [94.6, 1174.0], [94.7, 1179.0], [94.8, 1186.0], [94.9, 1188.0], [95.0, 1194.0], [95.1, 1205.0], [95.2, 1220.0], [95.3, 1228.0], [95.4, 1237.0], [95.5, 1251.0], [95.6, 1256.0], [95.7, 1263.0], [95.8, 1274.0], [95.9, 1287.0], [96.0, 1298.0], [96.1, 1307.0], [96.2, 1312.0], [96.3, 1317.0], [96.4, 1327.0], [96.5, 1340.0], [96.6, 1357.0], [96.7, 1368.0], [96.8, 1380.0], [96.9, 1390.0], [97.0, 1408.0], [97.1, 1425.0], [97.2, 1437.0], [97.3, 1443.0], [97.4, 1463.0], [97.5, 1470.0], [97.6, 1482.0], [97.7, 1486.0], [97.8, 1518.0], [97.9, 1526.0], [98.0, 1544.0], [98.1, 1559.0], [98.2, 1586.0], [98.3, 1598.0], [98.4, 1610.0], [98.5, 1630.0], [98.6, 1652.0], [98.7, 1684.0], [98.8, 1723.0], [98.9, 1746.0], [99.0, 1829.0], [99.1, 1900.0], [99.2, 1958.0], [99.3, 2001.0], [99.4, 2092.0], [99.5, 2197.0], [99.6, 2258.0], [99.7, 2352.0], [99.8, 2411.0], [99.9, 2667.0], [100.0, 4129.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 2040.0, "series": [{"data": [[0.0, 2040.0], [600.0, 202.0], [700.0, 236.0], [800.0, 167.0], [900.0, 121.0], [1000.0, 96.0], [1100.0, 96.0], [1200.0, 50.0], [1300.0, 50.0], [1400.0, 40.0], [1500.0, 32.0], [100.0, 636.0], [1600.0, 21.0], [1700.0, 11.0], [1800.0, 7.0], [1900.0, 11.0], [2000.0, 7.0], [2100.0, 4.0], [2200.0, 8.0], [2300.0, 6.0], [2400.0, 3.0], [2500.0, 1.0], [2600.0, 3.0], [2800.0, 1.0], [2900.0, 1.0], [200.0, 474.0], [3900.0, 1.0], [4000.0, 1.0], [4100.0, 1.0], [300.0, 361.0], [400.0, 349.0], [500.0, 225.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 4100.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 119.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 3862.0, "series": [{"data": [[0.0, 3862.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1281.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 119.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.758620689655173, "minX": 1.60283892E12, "maxY": 10.0, "series": [{"data": [[1.60283916E12, 9.761904761904761], [1.60283898E12, 10.0], [1.60283892E12, 9.758620689655173], [1.6028391E12, 10.0], [1.60283904E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60283916E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 363.53039832285117, "minX": 1.0, "maxY": 4072.0, "series": [{"data": [[4.0, 2064.0], [8.0, 1504.0], [2.0, 1649.0], [1.0, 4072.0], [9.0, 1421.0], [5.0, 1334.5], [10.0, 363.53039832285117], [6.0, 623.5], [3.0, 2934.0], [7.0, 2128.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.98745724059291, 367.5881793994687]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 735.3333333333334, "minX": 1.60283892E12, "maxY": 1603372.6833333333, "series": [{"data": [[1.60283916E12, 79649.06666666667], [1.60283898E12, 1436004.5666666667], [1.60283892E12, 48098.6], [1.6028391E12, 1603372.6833333333], [1.60283904E12, 1083877.0166666666]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60283916E12, 1713.0333333333333], [1.60283898E12, 11626.583333333334], [1.60283892E12, 735.3333333333334], [1.6028391E12, 13205.033333333333], [1.60283904E12, 18210.966666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60283916E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 281.60771401693427, "minX": 1.60283892E12, "maxY": 518.2328042328041, "series": [{"data": [[1.60283916E12, 518.2328042328041], [1.60283898E12, 447.4318689501117], [1.60283892E12, 411.2298850574712], [1.6028391E12, 396.12854317732365], [1.60283904E12, 281.60771401693427]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60283916E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 281.3099717779862, "minX": 1.60283892E12, "maxY": 518.0211640211642, "series": [{"data": [[1.60283916E12, 518.0211640211642], [1.60283898E12, 446.86969471332816], [1.60283892E12, 410.8850574712644], [1.6028391E12, 395.63810151615024], [1.60283904E12, 281.3099717779862]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60283916E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.009887936717205037, "minX": 1.60283892E12, "maxY": 1.1264367816091956, "series": [{"data": [[1.60283916E12, 0.015873015873015872], [1.60283898E12, 0.01116902457185407], [1.60283892E12, 1.1264367816091956], [1.6028391E12, 0.009887936717205037], [1.60283904E12, 0.010348071495766732]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60283916E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 30.0, "minX": 1.60283892E12, "maxY": 4129.0, "series": [{"data": [[1.60283916E12, 4129.0], [1.60283898E12, 2667.0], [1.60283892E12, 1559.0], [1.6028391E12, 2258.0], [1.60283904E12, 2411.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60283916E12, 34.70999995470047], [1.60283898E12, 37.0], [1.60283892E12, 37.0], [1.6028391E12, 37.0], [1.60283904E12, 38.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60283916E12, 34.88100001811981], [1.60283898E12, 37.0], [1.60283892E12, 37.0], [1.6028391E12, 37.028200144767766], [1.60283904E12, 38.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60283916E12, 34.804999977350235], [1.60283898E12, 37.0], [1.60283892E12, 37.0], [1.6028391E12, 37.0], [1.60283904E12, 38.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60283916E12, 34.0], [1.60283898E12, 33.0], [1.60283892E12, 37.0], [1.6028391E12, 30.0], [1.60283904E12, 31.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60283916E12, 133.0], [1.60283898E12, 310.0], [1.60283892E12, 218.0], [1.6028391E12, 252.0], [1.60283904E12, 119.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60283916E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 46.0, "minX": 1.0, "maxY": 2636.5, "series": [{"data": [[2.0, 1110.5], [4.0, 895.0], [5.0, 1443.0], [6.0, 1253.0], [7.0, 1042.0], [8.0, 1125.5], [9.0, 965.5], [10.0, 851.0], [11.0, 842.0], [12.0, 739.5], [13.0, 773.0], [14.0, 703.0], [15.0, 647.0], [16.0, 449.0], [17.0, 520.5], [18.0, 542.0], [19.0, 342.5], [20.0, 482.0], [21.0, 414.5], [22.0, 286.0], [23.0, 272.0], [24.0, 297.0], [26.0, 79.5], [27.0, 193.0], [28.0, 270.0], [29.0, 275.5], [30.0, 271.5], [31.0, 228.0], [33.0, 88.0], [32.0, 254.0], [34.0, 147.0], [35.0, 233.0], [36.0, 83.5], [38.0, 153.0], [39.0, 46.0], [41.0, 112.0], [43.0, 99.0], [44.0, 170.0], [45.0, 100.5], [46.0, 97.0], [47.0, 229.0], [48.0, 87.5], [49.0, 215.0], [50.0, 155.0], [52.0, 65.0], [55.0, 84.0], [54.0, 83.5], [56.0, 76.0], [57.0, 151.0], [59.0, 94.0], [58.0, 120.5], [60.0, 85.0], [61.0, 158.5], [65.0, 74.5], [66.0, 135.0], [69.0, 81.5], [72.0, 84.0], [76.0, 91.5], [102.0, 86.0], [1.0, 2636.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 102.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 46.0, "minX": 1.0, "maxY": 2636.0, "series": [{"data": [[2.0, 1110.5], [4.0, 892.0], [5.0, 1442.0], [6.0, 1252.5], [7.0, 1037.0], [8.0, 1119.5], [9.0, 963.5], [10.0, 849.5], [11.0, 841.0], [12.0, 738.0], [13.0, 772.0], [14.0, 701.5], [15.0, 645.0], [16.0, 448.5], [17.0, 518.5], [18.0, 542.0], [19.0, 342.5], [20.0, 481.0], [21.0, 414.0], [22.0, 286.0], [23.0, 272.0], [24.0, 296.0], [26.0, 79.5], [27.0, 193.0], [28.0, 270.0], [29.0, 275.0], [30.0, 271.0], [31.0, 228.0], [33.0, 88.0], [32.0, 253.5], [34.0, 147.0], [35.0, 233.0], [36.0, 83.5], [38.0, 153.0], [39.0, 46.0], [41.0, 111.5], [43.0, 99.0], [44.0, 169.0], [45.0, 100.5], [46.0, 97.0], [47.0, 229.0], [48.0, 87.5], [49.0, 215.0], [50.0, 154.5], [52.0, 65.0], [55.0, 84.0], [54.0, 83.5], [56.0, 76.0], [57.0, 151.0], [59.0, 94.0], [58.0, 120.5], [60.0, 84.5], [61.0, 158.5], [65.0, 74.0], [66.0, 134.5], [69.0, 81.5], [72.0, 84.0], [76.0, 91.5], [102.0, 86.0], [1.0, 2636.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 102.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1.6166666666666667, "minX": 1.60283892E12, "maxY": 35.43333333333333, "series": [{"data": [[1.60283916E12, 2.9833333333333334], [1.60283898E12, 22.383333333333333], [1.60283892E12, 1.6166666666666667], [1.6028391E12, 25.283333333333335], [1.60283904E12, 35.43333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60283916E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1.45, "minX": 1.60283892E12, "maxY": 35.43333333333333, "series": [{"data": [[1.60283916E12, 3.15], [1.60283898E12, 22.383333333333333], [1.60283892E12, 1.45], [1.6028391E12, 25.283333333333335], [1.60283904E12, 35.43333333333333]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60283916E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.45, "minX": 1.60283892E12, "maxY": 35.43333333333333, "series": [{"data": [[1.60283916E12, 3.15], [1.60283898E12, 22.383333333333333], [1.60283892E12, 1.45], [1.6028391E12, 25.283333333333335], [1.60283904E12, 35.43333333333333]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60283916E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.45, "minX": 1.60283892E12, "maxY": 35.43333333333333, "series": [{"data": [[1.60283916E12, 3.15], [1.60283898E12, 22.383333333333333], [1.60283892E12, 1.45], [1.6028391E12, 25.283333333333335], [1.60283904E12, 35.43333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60283916E12, "title": "Total Transactions Per Second"}},
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

