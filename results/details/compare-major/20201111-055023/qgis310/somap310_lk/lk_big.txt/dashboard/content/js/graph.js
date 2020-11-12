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
        data: {"result": {"minY": 31.0, "minX": 0.0, "maxY": 4018.0, "series": [{"data": [[0.0, 31.0], [0.1, 34.0], [0.2, 35.0], [0.3, 36.0], [0.4, 36.0], [0.5, 37.0], [0.6, 37.0], [0.7, 37.0], [0.8, 38.0], [0.9, 38.0], [1.0, 38.0], [1.1, 38.0], [1.2, 38.0], [1.3, 38.0], [1.4, 38.0], [1.5, 38.0], [1.6, 39.0], [1.7, 39.0], [1.8, 39.0], [1.9, 39.0], [2.0, 39.0], [2.1, 39.0], [2.2, 39.0], [2.3, 39.0], [2.4, 39.0], [2.5, 40.0], [2.6, 40.0], [2.7, 40.0], [2.8, 40.0], [2.9, 40.0], [3.0, 40.0], [3.1, 40.0], [3.2, 40.0], [3.3, 40.0], [3.4, 40.0], [3.5, 41.0], [3.6, 41.0], [3.7, 41.0], [3.8, 41.0], [3.9, 41.0], [4.0, 41.0], [4.1, 41.0], [4.2, 41.0], [4.3, 41.0], [4.4, 41.0], [4.5, 41.0], [4.6, 41.0], [4.7, 42.0], [4.8, 42.0], [4.9, 42.0], [5.0, 42.0], [5.1, 42.0], [5.2, 42.0], [5.3, 42.0], [5.4, 42.0], [5.5, 42.0], [5.6, 42.0], [5.7, 42.0], [5.8, 42.0], [5.9, 42.0], [6.0, 42.0], [6.1, 43.0], [6.2, 43.0], [6.3, 43.0], [6.4, 43.0], [6.5, 43.0], [6.6, 43.0], [6.7, 43.0], [6.8, 43.0], [6.9, 43.0], [7.0, 43.0], [7.1, 43.0], [7.2, 43.0], [7.3, 43.0], [7.4, 44.0], [7.5, 44.0], [7.6, 44.0], [7.7, 44.0], [7.8, 44.0], [7.9, 44.0], [8.0, 44.0], [8.1, 44.0], [8.2, 44.0], [8.3, 44.0], [8.4, 44.0], [8.5, 44.0], [8.6, 44.0], [8.7, 44.0], [8.8, 44.0], [8.9, 45.0], [9.0, 45.0], [9.1, 45.0], [9.2, 45.0], [9.3, 45.0], [9.4, 45.0], [9.5, 45.0], [9.6, 45.0], [9.7, 45.0], [9.8, 45.0], [9.9, 45.0], [10.0, 45.0], [10.1, 46.0], [10.2, 46.0], [10.3, 46.0], [10.4, 46.0], [10.5, 46.0], [10.6, 46.0], [10.7, 46.0], [10.8, 46.0], [10.9, 46.0], [11.0, 46.0], [11.1, 46.0], [11.2, 46.0], [11.3, 46.0], [11.4, 46.0], [11.5, 46.0], [11.6, 47.0], [11.7, 47.0], [11.8, 47.0], [11.9, 47.0], [12.0, 47.0], [12.1, 47.0], [12.2, 47.0], [12.3, 47.0], [12.4, 47.0], [12.5, 47.0], [12.6, 47.0], [12.7, 47.0], [12.8, 47.0], [12.9, 48.0], [13.0, 48.0], [13.1, 48.0], [13.2, 48.0], [13.3, 48.0], [13.4, 48.0], [13.5, 48.0], [13.6, 48.0], [13.7, 48.0], [13.8, 49.0], [13.9, 49.0], [14.0, 49.0], [14.1, 49.0], [14.2, 49.0], [14.3, 49.0], [14.4, 49.0], [14.5, 49.0], [14.6, 49.0], [14.7, 49.0], [14.8, 49.0], [14.9, 50.0], [15.0, 50.0], [15.1, 50.0], [15.2, 50.0], [15.3, 50.0], [15.4, 50.0], [15.5, 50.0], [15.6, 50.0], [15.7, 50.0], [15.8, 51.0], [15.9, 51.0], [16.0, 51.0], [16.1, 51.0], [16.2, 52.0], [16.3, 52.0], [16.4, 52.0], [16.5, 53.0], [16.6, 53.0], [16.7, 53.0], [16.8, 53.0], [16.9, 54.0], [17.0, 54.0], [17.1, 54.0], [17.2, 55.0], [17.3, 55.0], [17.4, 56.0], [17.5, 56.0], [17.6, 56.0], [17.7, 57.0], [17.8, 57.0], [17.9, 58.0], [18.0, 58.0], [18.1, 59.0], [18.2, 60.0], [18.3, 60.0], [18.4, 60.0], [18.5, 61.0], [18.6, 62.0], [18.7, 62.0], [18.8, 63.0], [18.9, 64.0], [19.0, 64.0], [19.1, 65.0], [19.2, 66.0], [19.3, 66.0], [19.4, 66.0], [19.5, 67.0], [19.6, 68.0], [19.7, 69.0], [19.8, 69.0], [19.9, 70.0], [20.0, 70.0], [20.1, 70.0], [20.2, 70.0], [20.3, 71.0], [20.4, 71.0], [20.5, 71.0], [20.6, 71.0], [20.7, 72.0], [20.8, 72.0], [20.9, 72.0], [21.0, 73.0], [21.1, 73.0], [21.2, 73.0], [21.3, 73.0], [21.4, 73.0], [21.5, 74.0], [21.6, 74.0], [21.7, 75.0], [21.8, 75.0], [21.9, 75.0], [22.0, 75.0], [22.1, 76.0], [22.2, 76.0], [22.3, 76.0], [22.4, 76.0], [22.5, 76.0], [22.6, 76.0], [22.7, 76.0], [22.8, 76.0], [22.9, 77.0], [23.0, 77.0], [23.1, 77.0], [23.2, 77.0], [23.3, 77.0], [23.4, 77.0], [23.5, 78.0], [23.6, 78.0], [23.7, 78.0], [23.8, 78.0], [23.9, 78.0], [24.0, 78.0], [24.1, 79.0], [24.2, 79.0], [24.3, 79.0], [24.4, 79.0], [24.5, 79.0], [24.6, 79.0], [24.7, 79.0], [24.8, 80.0], [24.9, 80.0], [25.0, 80.0], [25.1, 80.0], [25.2, 80.0], [25.3, 80.0], [25.4, 80.0], [25.5, 81.0], [25.6, 81.0], [25.7, 81.0], [25.8, 81.0], [25.9, 81.0], [26.0, 81.0], [26.1, 81.0], [26.2, 81.0], [26.3, 81.0], [26.4, 82.0], [26.5, 82.0], [26.6, 82.0], [26.7, 82.0], [26.8, 82.0], [26.9, 82.0], [27.0, 82.0], [27.1, 82.0], [27.2, 83.0], [27.3, 83.0], [27.4, 83.0], [27.5, 83.0], [27.6, 83.0], [27.7, 83.0], [27.8, 83.0], [27.9, 83.0], [28.0, 83.0], [28.1, 84.0], [28.2, 84.0], [28.3, 84.0], [28.4, 84.0], [28.5, 84.0], [28.6, 84.0], [28.7, 84.0], [28.8, 84.0], [28.9, 85.0], [29.0, 85.0], [29.1, 85.0], [29.2, 85.0], [29.3, 85.0], [29.4, 85.0], [29.5, 85.0], [29.6, 85.0], [29.7, 85.0], [29.8, 86.0], [29.9, 86.0], [30.0, 86.0], [30.1, 86.0], [30.2, 86.0], [30.3, 86.0], [30.4, 86.0], [30.5, 86.0], [30.6, 86.0], [30.7, 86.0], [30.8, 87.0], [30.9, 87.0], [31.0, 87.0], [31.1, 87.0], [31.2, 87.0], [31.3, 87.0], [31.4, 87.0], [31.5, 87.0], [31.6, 88.0], [31.7, 88.0], [31.8, 88.0], [31.9, 88.0], [32.0, 88.0], [32.1, 88.0], [32.2, 88.0], [32.3, 88.0], [32.4, 88.0], [32.5, 89.0], [32.6, 89.0], [32.7, 89.0], [32.8, 89.0], [32.9, 89.0], [33.0, 89.0], [33.1, 89.0], [33.2, 89.0], [33.3, 89.0], [33.4, 90.0], [33.5, 90.0], [33.6, 90.0], [33.7, 90.0], [33.8, 90.0], [33.9, 90.0], [34.0, 90.0], [34.1, 91.0], [34.2, 91.0], [34.3, 91.0], [34.4, 91.0], [34.5, 91.0], [34.6, 92.0], [34.7, 92.0], [34.8, 92.0], [34.9, 92.0], [35.0, 92.0], [35.1, 92.0], [35.2, 93.0], [35.3, 93.0], [35.4, 93.0], [35.5, 93.0], [35.6, 93.0], [35.7, 94.0], [35.8, 94.0], [35.9, 94.0], [36.0, 94.0], [36.1, 95.0], [36.2, 95.0], [36.3, 95.0], [36.4, 95.0], [36.5, 95.0], [36.6, 96.0], [36.7, 96.0], [36.8, 96.0], [36.9, 96.0], [37.0, 97.0], [37.1, 97.0], [37.2, 97.0], [37.3, 97.0], [37.4, 98.0], [37.5, 98.0], [37.6, 98.0], [37.7, 99.0], [37.8, 99.0], [37.9, 100.0], [38.0, 100.0], [38.1, 100.0], [38.2, 101.0], [38.3, 101.0], [38.4, 101.0], [38.5, 101.0], [38.6, 102.0], [38.7, 102.0], [38.8, 102.0], [38.9, 102.0], [39.0, 103.0], [39.1, 104.0], [39.2, 104.0], [39.3, 104.0], [39.4, 105.0], [39.5, 105.0], [39.6, 106.0], [39.7, 106.0], [39.8, 107.0], [39.9, 108.0], [40.0, 108.0], [40.1, 109.0], [40.2, 109.0], [40.3, 110.0], [40.4, 110.0], [40.5, 111.0], [40.6, 111.0], [40.7, 112.0], [40.8, 113.0], [40.9, 113.0], [41.0, 115.0], [41.1, 115.0], [41.2, 115.0], [41.3, 116.0], [41.4, 117.0], [41.5, 117.0], [41.6, 118.0], [41.7, 118.0], [41.8, 118.0], [41.9, 119.0], [42.0, 119.0], [42.1, 120.0], [42.2, 121.0], [42.3, 122.0], [42.4, 122.0], [42.5, 123.0], [42.6, 123.0], [42.7, 124.0], [42.8, 124.0], [42.9, 126.0], [43.0, 126.0], [43.1, 127.0], [43.2, 127.0], [43.3, 128.0], [43.4, 128.0], [43.5, 129.0], [43.6, 130.0], [43.7, 130.0], [43.8, 132.0], [43.9, 132.0], [44.0, 133.0], [44.1, 134.0], [44.2, 134.0], [44.3, 136.0], [44.4, 137.0], [44.5, 139.0], [44.6, 140.0], [44.7, 141.0], [44.8, 141.0], [44.9, 143.0], [45.0, 144.0], [45.1, 145.0], [45.2, 145.0], [45.3, 146.0], [45.4, 147.0], [45.5, 147.0], [45.6, 148.0], [45.7, 149.0], [45.8, 150.0], [45.9, 150.0], [46.0, 150.0], [46.1, 151.0], [46.2, 152.0], [46.3, 153.0], [46.4, 154.0], [46.5, 155.0], [46.6, 155.0], [46.7, 156.0], [46.8, 156.0], [46.9, 157.0], [47.0, 158.0], [47.1, 159.0], [47.2, 159.0], [47.3, 159.0], [47.4, 160.0], [47.5, 161.0], [47.6, 162.0], [47.7, 163.0], [47.8, 163.0], [47.9, 164.0], [48.0, 165.0], [48.1, 166.0], [48.2, 166.0], [48.3, 167.0], [48.4, 168.0], [48.5, 169.0], [48.6, 170.0], [48.7, 171.0], [48.8, 172.0], [48.9, 173.0], [49.0, 174.0], [49.1, 175.0], [49.2, 176.0], [49.3, 176.0], [49.4, 177.0], [49.5, 178.0], [49.6, 179.0], [49.7, 179.0], [49.8, 180.0], [49.9, 181.0], [50.0, 181.0], [50.1, 182.0], [50.2, 183.0], [50.3, 184.0], [50.4, 185.0], [50.5, 185.0], [50.6, 186.0], [50.7, 187.0], [50.8, 188.0], [50.9, 190.0], [51.0, 192.0], [51.1, 193.0], [51.2, 194.0], [51.3, 196.0], [51.4, 197.0], [51.5, 198.0], [51.6, 199.0], [51.7, 200.0], [51.8, 200.0], [51.9, 201.0], [52.0, 203.0], [52.1, 204.0], [52.2, 205.0], [52.3, 206.0], [52.4, 207.0], [52.5, 207.0], [52.6, 208.0], [52.7, 208.0], [52.8, 209.0], [52.9, 210.0], [53.0, 211.0], [53.1, 212.0], [53.2, 214.0], [53.3, 215.0], [53.4, 216.0], [53.5, 216.0], [53.6, 218.0], [53.7, 219.0], [53.8, 220.0], [53.9, 221.0], [54.0, 223.0], [54.1, 224.0], [54.2, 225.0], [54.3, 226.0], [54.4, 226.0], [54.5, 227.0], [54.6, 228.0], [54.7, 229.0], [54.8, 230.0], [54.9, 232.0], [55.0, 232.0], [55.1, 233.0], [55.2, 234.0], [55.3, 235.0], [55.4, 237.0], [55.5, 239.0], [55.6, 240.0], [55.7, 241.0], [55.8, 242.0], [55.9, 243.0], [56.0, 244.0], [56.1, 245.0], [56.2, 246.0], [56.3, 247.0], [56.4, 249.0], [56.5, 251.0], [56.6, 251.0], [56.7, 252.0], [56.8, 253.0], [56.9, 256.0], [57.0, 257.0], [57.1, 258.0], [57.2, 259.0], [57.3, 259.0], [57.4, 260.0], [57.5, 261.0], [57.6, 262.0], [57.7, 262.0], [57.8, 264.0], [57.9, 265.0], [58.0, 267.0], [58.1, 268.0], [58.2, 268.0], [58.3, 269.0], [58.4, 270.0], [58.5, 271.0], [58.6, 271.0], [58.7, 273.0], [58.8, 274.0], [58.9, 275.0], [59.0, 276.0], [59.1, 277.0], [59.2, 278.0], [59.3, 279.0], [59.4, 280.0], [59.5, 280.0], [59.6, 281.0], [59.7, 282.0], [59.8, 285.0], [59.9, 286.0], [60.0, 288.0], [60.1, 290.0], [60.2, 292.0], [60.3, 292.0], [60.4, 294.0], [60.5, 295.0], [60.6, 295.0], [60.7, 296.0], [60.8, 297.0], [60.9, 297.0], [61.0, 299.0], [61.1, 303.0], [61.2, 305.0], [61.3, 306.0], [61.4, 307.0], [61.5, 309.0], [61.6, 309.0], [61.7, 310.0], [61.8, 313.0], [61.9, 314.0], [62.0, 316.0], [62.1, 317.0], [62.2, 318.0], [62.3, 321.0], [62.4, 323.0], [62.5, 324.0], [62.6, 326.0], [62.7, 328.0], [62.8, 329.0], [62.9, 331.0], [63.0, 333.0], [63.1, 333.0], [63.2, 334.0], [63.3, 336.0], [63.4, 337.0], [63.5, 338.0], [63.6, 340.0], [63.7, 341.0], [63.8, 343.0], [63.9, 345.0], [64.0, 346.0], [64.1, 348.0], [64.2, 349.0], [64.3, 350.0], [64.4, 351.0], [64.5, 353.0], [64.6, 354.0], [64.7, 357.0], [64.8, 359.0], [64.9, 361.0], [65.0, 362.0], [65.1, 363.0], [65.2, 364.0], [65.3, 367.0], [65.4, 369.0], [65.5, 372.0], [65.6, 373.0], [65.7, 375.0], [65.8, 376.0], [65.9, 377.0], [66.0, 379.0], [66.1, 381.0], [66.2, 382.0], [66.3, 383.0], [66.4, 385.0], [66.5, 386.0], [66.6, 388.0], [66.7, 390.0], [66.8, 391.0], [66.9, 393.0], [67.0, 394.0], [67.1, 395.0], [67.2, 397.0], [67.3, 399.0], [67.4, 400.0], [67.5, 402.0], [67.6, 403.0], [67.7, 404.0], [67.8, 405.0], [67.9, 406.0], [68.0, 407.0], [68.1, 410.0], [68.2, 411.0], [68.3, 413.0], [68.4, 415.0], [68.5, 417.0], [68.6, 419.0], [68.7, 421.0], [68.8, 422.0], [68.9, 423.0], [69.0, 423.0], [69.1, 425.0], [69.2, 427.0], [69.3, 429.0], [69.4, 431.0], [69.5, 431.0], [69.6, 433.0], [69.7, 434.0], [69.8, 436.0], [69.9, 438.0], [70.0, 439.0], [70.1, 439.0], [70.2, 443.0], [70.3, 444.0], [70.4, 445.0], [70.5, 447.0], [70.6, 449.0], [70.7, 450.0], [70.8, 451.0], [70.9, 453.0], [71.0, 454.0], [71.1, 456.0], [71.2, 459.0], [71.3, 461.0], [71.4, 463.0], [71.5, 465.0], [71.6, 466.0], [71.7, 468.0], [71.8, 471.0], [71.9, 473.0], [72.0, 475.0], [72.1, 476.0], [72.2, 477.0], [72.3, 479.0], [72.4, 482.0], [72.5, 484.0], [72.6, 486.0], [72.7, 487.0], [72.8, 488.0], [72.9, 491.0], [73.0, 493.0], [73.1, 496.0], [73.2, 498.0], [73.3, 499.0], [73.4, 504.0], [73.5, 506.0], [73.6, 509.0], [73.7, 511.0], [73.8, 512.0], [73.9, 514.0], [74.0, 516.0], [74.1, 518.0], [74.2, 520.0], [74.3, 521.0], [74.4, 522.0], [74.5, 523.0], [74.6, 524.0], [74.7, 528.0], [74.8, 530.0], [74.9, 533.0], [75.0, 534.0], [75.1, 538.0], [75.2, 540.0], [75.3, 541.0], [75.4, 544.0], [75.5, 545.0], [75.6, 547.0], [75.7, 549.0], [75.8, 553.0], [75.9, 554.0], [76.0, 556.0], [76.1, 558.0], [76.2, 560.0], [76.3, 563.0], [76.4, 566.0], [76.5, 568.0], [76.6, 569.0], [76.7, 570.0], [76.8, 573.0], [76.9, 576.0], [77.0, 577.0], [77.1, 580.0], [77.2, 581.0], [77.3, 583.0], [77.4, 585.0], [77.5, 586.0], [77.6, 588.0], [77.7, 590.0], [77.8, 593.0], [77.9, 598.0], [78.0, 599.0], [78.1, 601.0], [78.2, 603.0], [78.3, 605.0], [78.4, 607.0], [78.5, 610.0], [78.6, 611.0], [78.7, 613.0], [78.8, 615.0], [78.9, 617.0], [79.0, 620.0], [79.1, 623.0], [79.2, 624.0], [79.3, 627.0], [79.4, 629.0], [79.5, 631.0], [79.6, 632.0], [79.7, 634.0], [79.8, 638.0], [79.9, 641.0], [80.0, 643.0], [80.1, 645.0], [80.2, 647.0], [80.3, 648.0], [80.4, 650.0], [80.5, 653.0], [80.6, 655.0], [80.7, 657.0], [80.8, 661.0], [80.9, 663.0], [81.0, 664.0], [81.1, 667.0], [81.2, 668.0], [81.3, 670.0], [81.4, 672.0], [81.5, 673.0], [81.6, 676.0], [81.7, 677.0], [81.8, 682.0], [81.9, 686.0], [82.0, 689.0], [82.1, 691.0], [82.2, 693.0], [82.3, 695.0], [82.4, 697.0], [82.5, 698.0], [82.6, 700.0], [82.7, 703.0], [82.8, 708.0], [82.9, 710.0], [83.0, 713.0], [83.1, 714.0], [83.2, 716.0], [83.3, 718.0], [83.4, 724.0], [83.5, 726.0], [83.6, 729.0], [83.7, 730.0], [83.8, 735.0], [83.9, 739.0], [84.0, 743.0], [84.1, 745.0], [84.2, 747.0], [84.3, 748.0], [84.4, 750.0], [84.5, 752.0], [84.6, 754.0], [84.7, 756.0], [84.8, 758.0], [84.9, 759.0], [85.0, 760.0], [85.1, 762.0], [85.2, 764.0], [85.3, 766.0], [85.4, 769.0], [85.5, 774.0], [85.6, 775.0], [85.7, 778.0], [85.8, 780.0], [85.9, 780.0], [86.0, 781.0], [86.1, 783.0], [86.2, 785.0], [86.3, 786.0], [86.4, 789.0], [86.5, 792.0], [86.6, 793.0], [86.7, 798.0], [86.8, 801.0], [86.9, 805.0], [87.0, 807.0], [87.1, 809.0], [87.2, 811.0], [87.3, 812.0], [87.4, 813.0], [87.5, 816.0], [87.6, 819.0], [87.7, 820.0], [87.8, 825.0], [87.9, 826.0], [88.0, 829.0], [88.1, 830.0], [88.2, 832.0], [88.3, 835.0], [88.4, 838.0], [88.5, 839.0], [88.6, 841.0], [88.7, 843.0], [88.8, 844.0], [88.9, 847.0], [89.0, 848.0], [89.1, 852.0], [89.2, 857.0], [89.3, 861.0], [89.4, 864.0], [89.5, 867.0], [89.6, 873.0], [89.7, 878.0], [89.8, 880.0], [89.9, 886.0], [90.0, 891.0], [90.1, 894.0], [90.2, 898.0], [90.3, 903.0], [90.4, 908.0], [90.5, 916.0], [90.6, 917.0], [90.7, 927.0], [90.8, 929.0], [90.9, 936.0], [91.0, 943.0], [91.1, 946.0], [91.2, 951.0], [91.3, 956.0], [91.4, 964.0], [91.5, 968.0], [91.6, 969.0], [91.7, 975.0], [91.8, 979.0], [91.9, 985.0], [92.0, 989.0], [92.1, 994.0], [92.2, 1000.0], [92.3, 1005.0], [92.4, 1009.0], [92.5, 1015.0], [92.6, 1022.0], [92.7, 1025.0], [92.8, 1028.0], [92.9, 1038.0], [93.0, 1047.0], [93.1, 1051.0], [93.2, 1057.0], [93.3, 1067.0], [93.4, 1075.0], [93.5, 1080.0], [93.6, 1091.0], [93.7, 1094.0], [93.8, 1100.0], [93.9, 1110.0], [94.0, 1122.0], [94.1, 1125.0], [94.2, 1129.0], [94.3, 1137.0], [94.4, 1144.0], [94.5, 1148.0], [94.6, 1155.0], [94.7, 1165.0], [94.8, 1172.0], [94.9, 1176.0], [95.0, 1189.0], [95.1, 1197.0], [95.2, 1203.0], [95.3, 1210.0], [95.4, 1214.0], [95.5, 1224.0], [95.6, 1229.0], [95.7, 1237.0], [95.8, 1246.0], [95.9, 1257.0], [96.0, 1268.0], [96.1, 1280.0], [96.2, 1291.0], [96.3, 1298.0], [96.4, 1311.0], [96.5, 1330.0], [96.6, 1338.0], [96.7, 1355.0], [96.8, 1360.0], [96.9, 1374.0], [97.0, 1391.0], [97.1, 1407.0], [97.2, 1416.0], [97.3, 1424.0], [97.4, 1445.0], [97.5, 1475.0], [97.6, 1488.0], [97.7, 1497.0], [97.8, 1519.0], [97.9, 1529.0], [98.0, 1538.0], [98.1, 1571.0], [98.2, 1615.0], [98.3, 1631.0], [98.4, 1674.0], [98.5, 1705.0], [98.6, 1718.0], [98.7, 1752.0], [98.8, 1769.0], [98.9, 1790.0], [99.0, 1810.0], [99.1, 1863.0], [99.2, 1910.0], [99.3, 1965.0], [99.4, 2040.0], [99.5, 2090.0], [99.6, 2219.0], [99.7, 2364.0], [99.8, 2470.0], [99.9, 3425.0], [100.0, 4018.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 1991.0, "series": [{"data": [[0.0, 1991.0], [600.0, 237.0], [700.0, 223.0], [800.0, 182.0], [900.0, 103.0], [1000.0, 82.0], [1100.0, 73.0], [1200.0, 62.0], [1300.0, 38.0], [1400.0, 37.0], [1500.0, 23.0], [100.0, 728.0], [1600.0, 16.0], [1700.0, 25.0], [1800.0, 12.0], [1900.0, 7.0], [2000.0, 10.0], [2100.0, 4.0], [2300.0, 5.0], [2200.0, 4.0], [2400.0, 3.0], [2500.0, 3.0], [2800.0, 1.0], [200.0, 491.0], [3400.0, 3.0], [3500.0, 1.0], [3900.0, 1.0], [4000.0, 1.0], [300.0, 333.0], [400.0, 315.0], [500.0, 248.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 4000.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 119.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 3858.0, "series": [{"data": [[0.0, 3858.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1285.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 119.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.906005221932116, "minX": 1.60507458E12, "maxY": 10.0, "series": [{"data": [[1.60507464E12, 10.0], [1.6050747E12, 10.0], [1.60507458E12, 9.906005221932116], [1.60507476E12, 9.967948717948719]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60507476E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 358.29370229007657, "minX": 1.0, "maxY": 3950.0, "series": [{"data": [[4.0, 751.0], [8.0, 599.0], [2.0, 3950.0], [1.0, 3425.0], [9.0, 494.83333333333337], [5.0, 1201.3333333333333], [10.0, 358.29370229007657], [6.0, 2086.5], [3.0, 2040.0], [7.0, 388.75]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.984606613454945, 361.43576586849105]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 3411.15, "minX": 1.60507458E12, "maxY": 1533451.0166666666, "series": [{"data": [[1.60507464E12, 1533451.0166666666], [1.6050747E12, 1050582.0166666666], [1.60507458E12, 185056.9], [1.60507476E12, 1481935.4166666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60507464E12, 12123.833333333334], [1.6050747E12, 17677.75], [1.60507458E12, 3411.15], [1.60507476E12, 12278.216666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60507476E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 289.0178313253016, "minX": 1.60507458E12, "maxY": 427.72357142857106, "series": [{"data": [[1.60507464E12, 427.72357142857106], [1.6050747E12, 289.0178313253016], [1.60507458E12, 395.5404699738901], [1.60507476E12, 393.06125356125347]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60507476E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 288.7089156626503, "minX": 1.60507458E12, "maxY": 427.1699999999994, "series": [{"data": [[1.60507464E12, 427.1699999999994], [1.6050747E12, 288.7089156626503], [1.60507458E12, 395.2245430809398], [1.60507476E12, 392.56837606837513]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60507476E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.007142857142857143, "minX": 1.60507458E12, "maxY": 0.28198433420365515, "series": [{"data": [[1.60507464E12, 0.007142857142857143], [1.6050747E12, 0.012048192771084378], [1.60507458E12, 0.28198433420365515], [1.60507476E12, 0.010683760683760693]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60507476E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 31.0, "minX": 1.60507458E12, "maxY": 4018.0, "series": [{"data": [[1.60507464E12, 2376.0], [1.6050747E12, 2559.0], [1.60507458E12, 1538.0], [1.60507476E12, 4018.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60507464E12, 38.0], [1.6050747E12, 38.0], [1.60507458E12, 39.45599990844727], [1.60507476E12, 36.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60507464E12, 38.869900133609775], [1.6050747E12, 38.0], [1.60507458E12, 39.801600036621096], [1.60507476E12, 36.909500133991244]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60507464E12, 38.30949983298778], [1.6050747E12, 38.0], [1.60507458E12, 39.647999954223636], [1.60507476E12, 36.34749983251095]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60507464E12, 36.0], [1.6050747E12, 32.0], [1.60507458E12, 39.0], [1.60507476E12, 31.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60507464E12, 292.0], [1.6050747E12, 144.0], [1.60507458E12, 236.0], [1.60507476E12, 212.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60507476E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 44.0, "minX": 3.0, "maxY": 3431.5, "series": [{"data": [[3.0, 3431.5], [4.0, 1715.0], [5.0, 1221.0], [6.0, 1195.0], [7.0, 1360.0], [8.0, 1263.5], [9.0, 811.0], [10.0, 802.0], [11.0, 763.0], [12.0, 596.0], [13.0, 729.0], [14.0, 654.0], [15.0, 620.5], [16.0, 626.0], [17.0, 568.0], [18.0, 364.0], [19.0, 498.0], [20.0, 405.0], [21.0, 394.0], [22.0, 430.5], [23.0, 262.5], [24.0, 321.0], [25.0, 298.5], [26.0, 272.0], [27.0, 403.0], [28.0, 316.0], [29.0, 185.0], [30.0, 244.5], [31.0, 147.0], [33.0, 97.0], [32.0, 131.0], [34.0, 82.5], [35.0, 177.0], [37.0, 102.0], [36.0, 44.0], [38.0, 98.0], [39.0, 187.0], [40.0, 82.5], [41.0, 113.5], [42.0, 185.0], [43.0, 219.0], [47.0, 118.0], [46.0, 137.0], [48.0, 122.5], [49.0, 85.0], [51.0, 130.0], [50.0, 95.0], [53.0, 166.0], [52.0, 149.0], [56.0, 158.5], [58.0, 75.0], [59.0, 141.0], [61.0, 86.0], [60.0, 86.5], [65.0, 108.0], [66.0, 154.0], [64.0, 161.0], [71.0, 128.0], [70.0, 93.5], [72.0, 81.5], [73.0, 61.0], [80.0, 84.0], [96.0, 90.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 96.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 44.0, "minX": 3.0, "maxY": 3431.0, "series": [{"data": [[3.0, 3431.0], [4.0, 1714.5], [5.0, 1220.0], [6.0, 1194.5], [7.0, 1358.0], [8.0, 1263.0], [9.0, 809.0], [10.0, 800.5], [11.0, 761.5], [12.0, 596.0], [13.0, 728.0], [14.0, 653.5], [15.0, 617.0], [16.0, 625.0], [17.0, 566.0], [18.0, 362.0], [19.0, 497.0], [20.0, 404.5], [21.0, 394.0], [22.0, 430.5], [23.0, 261.5], [24.0, 320.0], [25.0, 298.0], [26.0, 271.0], [27.0, 403.0], [28.0, 316.0], [29.0, 184.0], [30.0, 244.0], [31.0, 147.0], [33.0, 97.0], [32.0, 131.0], [34.0, 82.5], [35.0, 176.5], [37.0, 102.0], [36.0, 44.0], [38.0, 98.0], [39.0, 187.0], [40.0, 82.5], [41.0, 113.0], [42.0, 184.5], [43.0, 219.0], [47.0, 117.0], [46.0, 136.5], [48.0, 122.0], [49.0, 85.0], [51.0, 129.5], [50.0, 95.0], [53.0, 165.0], [52.0, 149.0], [56.0, 158.5], [58.0, 74.5], [59.0, 141.0], [61.0, 86.0], [60.0, 86.5], [65.0, 107.0], [66.0, 153.0], [64.0, 161.0], [71.0, 128.0], [70.0, 93.5], [72.0, 81.5], [73.0, 61.0], [80.0, 84.0], [96.0, 90.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 96.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 6.55, "minX": 1.60507458E12, "maxY": 34.583333333333336, "series": [{"data": [[1.60507464E12, 23.333333333333332], [1.6050747E12, 34.583333333333336], [1.60507458E12, 6.55], [1.60507476E12, 23.233333333333334]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60507476E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 6.383333333333334, "minX": 1.60507458E12, "maxY": 34.583333333333336, "series": [{"data": [[1.60507464E12, 23.333333333333332], [1.6050747E12, 34.583333333333336], [1.60507458E12, 6.383333333333334], [1.60507476E12, 23.4]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60507476E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 6.383333333333334, "minX": 1.60507458E12, "maxY": 34.583333333333336, "series": [{"data": [[1.60507464E12, 23.333333333333332], [1.6050747E12, 34.583333333333336], [1.60507458E12, 6.383333333333334], [1.60507476E12, 23.4]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60507476E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 6.383333333333334, "minX": 1.60507458E12, "maxY": 34.583333333333336, "series": [{"data": [[1.60507464E12, 23.333333333333332], [1.6050747E12, 34.583333333333336], [1.60507458E12, 6.383333333333334], [1.60507476E12, 23.4]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60507476E12, "title": "Total Transactions Per Second"}},
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

