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
        data: {"result": {"minY": 28.0, "minX": 0.0, "maxY": 4128.0, "series": [{"data": [[0.0, 28.0], [0.1, 29.0], [0.2, 29.0], [0.3, 30.0], [0.4, 30.0], [0.5, 31.0], [0.6, 31.0], [0.7, 32.0], [0.8, 32.0], [0.9, 32.0], [1.0, 33.0], [1.1, 33.0], [1.2, 33.0], [1.3, 33.0], [1.4, 33.0], [1.5, 33.0], [1.6, 33.0], [1.7, 33.0], [1.8, 33.0], [1.9, 33.0], [2.0, 34.0], [2.1, 34.0], [2.2, 34.0], [2.3, 34.0], [2.4, 34.0], [2.5, 34.0], [2.6, 34.0], [2.7, 34.0], [2.8, 34.0], [2.9, 34.0], [3.0, 34.0], [3.1, 34.0], [3.2, 34.0], [3.3, 35.0], [3.4, 35.0], [3.5, 35.0], [3.6, 35.0], [3.7, 35.0], [3.8, 35.0], [3.9, 35.0], [4.0, 35.0], [4.1, 35.0], [4.2, 35.0], [4.3, 35.0], [4.4, 36.0], [4.5, 36.0], [4.6, 36.0], [4.7, 36.0], [4.8, 36.0], [4.9, 36.0], [5.0, 36.0], [5.1, 36.0], [5.2, 36.0], [5.3, 36.0], [5.4, 36.0], [5.5, 36.0], [5.6, 36.0], [5.7, 36.0], [5.8, 36.0], [5.9, 37.0], [6.0, 37.0], [6.1, 37.0], [6.2, 37.0], [6.3, 37.0], [6.4, 37.0], [6.5, 37.0], [6.6, 37.0], [6.7, 37.0], [6.8, 37.0], [6.9, 37.0], [7.0, 37.0], [7.1, 37.0], [7.2, 37.0], [7.3, 37.0], [7.4, 37.0], [7.5, 38.0], [7.6, 38.0], [7.7, 38.0], [7.8, 38.0], [7.9, 38.0], [8.0, 38.0], [8.1, 38.0], [8.2, 38.0], [8.3, 38.0], [8.4, 38.0], [8.5, 38.0], [8.6, 38.0], [8.7, 38.0], [8.8, 38.0], [8.9, 38.0], [9.0, 38.0], [9.1, 38.0], [9.2, 38.0], [9.3, 38.0], [9.4, 38.0], [9.5, 39.0], [9.6, 39.0], [9.7, 39.0], [9.8, 39.0], [9.9, 39.0], [10.0, 39.0], [10.1, 39.0], [10.2, 39.0], [10.3, 39.0], [10.4, 39.0], [10.5, 39.0], [10.6, 39.0], [10.7, 39.0], [10.8, 39.0], [10.9, 39.0], [11.0, 39.0], [11.1, 40.0], [11.2, 40.0], [11.3, 40.0], [11.4, 40.0], [11.5, 40.0], [11.6, 40.0], [11.7, 40.0], [11.8, 40.0], [11.9, 40.0], [12.0, 40.0], [12.1, 40.0], [12.2, 40.0], [12.3, 40.0], [12.4, 40.0], [12.5, 40.0], [12.6, 40.0], [12.7, 41.0], [12.8, 41.0], [12.9, 41.0], [13.0, 41.0], [13.1, 41.0], [13.2, 41.0], [13.3, 41.0], [13.4, 41.0], [13.5, 41.0], [13.6, 41.0], [13.7, 41.0], [13.8, 41.0], [13.9, 41.0], [14.0, 42.0], [14.1, 42.0], [14.2, 42.0], [14.3, 42.0], [14.4, 42.0], [14.5, 42.0], [14.6, 42.0], [14.7, 42.0], [14.8, 42.0], [14.9, 42.0], [15.0, 43.0], [15.1, 43.0], [15.2, 43.0], [15.3, 43.0], [15.4, 43.0], [15.5, 43.0], [15.6, 43.0], [15.7, 43.0], [15.8, 43.0], [15.9, 44.0], [16.0, 44.0], [16.1, 44.0], [16.2, 44.0], [16.3, 44.0], [16.4, 45.0], [16.5, 45.0], [16.6, 45.0], [16.7, 45.0], [16.8, 45.0], [16.9, 46.0], [17.0, 46.0], [17.1, 46.0], [17.2, 46.0], [17.3, 47.0], [17.4, 48.0], [17.5, 48.0], [17.6, 49.0], [17.7, 49.0], [17.8, 49.0], [17.9, 50.0], [18.0, 50.0], [18.1, 51.0], [18.2, 52.0], [18.3, 52.0], [18.4, 53.0], [18.5, 53.0], [18.6, 53.0], [18.7, 54.0], [18.8, 55.0], [18.9, 56.0], [19.0, 56.0], [19.1, 57.0], [19.2, 57.0], [19.3, 57.0], [19.4, 57.0], [19.5, 58.0], [19.6, 58.0], [19.7, 58.0], [19.8, 59.0], [19.9, 59.0], [20.0, 59.0], [20.1, 59.0], [20.2, 60.0], [20.3, 60.0], [20.4, 61.0], [20.5, 61.0], [20.6, 61.0], [20.7, 62.0], [20.8, 62.0], [20.9, 62.0], [21.0, 63.0], [21.1, 63.0], [21.2, 63.0], [21.3, 64.0], [21.4, 64.0], [21.5, 65.0], [21.6, 65.0], [21.7, 65.0], [21.8, 66.0], [21.9, 66.0], [22.0, 66.0], [22.1, 66.0], [22.2, 66.0], [22.3, 67.0], [22.4, 67.0], [22.5, 67.0], [22.6, 67.0], [22.7, 67.0], [22.8, 67.0], [22.9, 68.0], [23.0, 68.0], [23.1, 68.0], [23.2, 68.0], [23.3, 68.0], [23.4, 68.0], [23.5, 69.0], [23.6, 69.0], [23.7, 69.0], [23.8, 69.0], [23.9, 69.0], [24.0, 69.0], [24.1, 69.0], [24.2, 69.0], [24.3, 69.0], [24.4, 69.0], [24.5, 70.0], [24.6, 70.0], [24.7, 70.0], [24.8, 70.0], [24.9, 70.0], [25.0, 70.0], [25.1, 70.0], [25.2, 70.0], [25.3, 70.0], [25.4, 70.0], [25.5, 70.0], [25.6, 71.0], [25.7, 71.0], [25.8, 71.0], [25.9, 71.0], [26.0, 71.0], [26.1, 71.0], [26.2, 71.0], [26.3, 71.0], [26.4, 71.0], [26.5, 72.0], [26.6, 72.0], [26.7, 72.0], [26.8, 72.0], [26.9, 72.0], [27.0, 72.0], [27.1, 72.0], [27.2, 72.0], [27.3, 72.0], [27.4, 72.0], [27.5, 72.0], [27.6, 72.0], [27.7, 72.0], [27.8, 72.0], [27.9, 73.0], [28.0, 73.0], [28.1, 73.0], [28.2, 73.0], [28.3, 73.0], [28.4, 73.0], [28.5, 73.0], [28.6, 73.0], [28.7, 73.0], [28.8, 73.0], [28.9, 74.0], [29.0, 74.0], [29.1, 74.0], [29.2, 74.0], [29.3, 74.0], [29.4, 74.0], [29.5, 74.0], [29.6, 74.0], [29.7, 74.0], [29.8, 74.0], [29.9, 74.0], [30.0, 75.0], [30.1, 75.0], [30.2, 75.0], [30.3, 75.0], [30.4, 75.0], [30.5, 75.0], [30.6, 75.0], [30.7, 75.0], [30.8, 75.0], [30.9, 75.0], [31.0, 76.0], [31.1, 76.0], [31.2, 76.0], [31.3, 76.0], [31.4, 76.0], [31.5, 76.0], [31.6, 76.0], [31.7, 76.0], [31.8, 76.0], [31.9, 76.0], [32.0, 76.0], [32.1, 76.0], [32.2, 76.0], [32.3, 76.0], [32.4, 77.0], [32.5, 77.0], [32.6, 77.0], [32.7, 77.0], [32.8, 77.0], [32.9, 77.0], [33.0, 77.0], [33.1, 77.0], [33.2, 77.0], [33.3, 78.0], [33.4, 78.0], [33.5, 78.0], [33.6, 78.0], [33.7, 78.0], [33.8, 78.0], [33.9, 78.0], [34.0, 78.0], [34.1, 78.0], [34.2, 79.0], [34.3, 79.0], [34.4, 79.0], [34.5, 79.0], [34.6, 79.0], [34.7, 79.0], [34.8, 79.0], [34.9, 79.0], [35.0, 80.0], [35.1, 80.0], [35.2, 80.0], [35.3, 80.0], [35.4, 80.0], [35.5, 80.0], [35.6, 80.0], [35.7, 81.0], [35.8, 81.0], [35.9, 81.0], [36.0, 81.0], [36.1, 81.0], [36.2, 81.0], [36.3, 81.0], [36.4, 82.0], [36.5, 82.0], [36.6, 82.0], [36.7, 82.0], [36.8, 82.0], [36.9, 82.0], [37.0, 83.0], [37.1, 83.0], [37.2, 83.0], [37.3, 83.0], [37.4, 83.0], [37.5, 84.0], [37.6, 84.0], [37.7, 84.0], [37.8, 84.0], [37.9, 85.0], [38.0, 85.0], [38.1, 86.0], [38.2, 86.0], [38.3, 87.0], [38.4, 87.0], [38.5, 87.0], [38.6, 88.0], [38.7, 89.0], [38.8, 89.0], [38.9, 89.0], [39.0, 90.0], [39.1, 90.0], [39.2, 91.0], [39.3, 91.0], [39.4, 92.0], [39.5, 92.0], [39.6, 93.0], [39.7, 93.0], [39.8, 94.0], [39.9, 94.0], [40.0, 95.0], [40.1, 96.0], [40.2, 97.0], [40.3, 97.0], [40.4, 98.0], [40.5, 99.0], [40.6, 99.0], [40.7, 100.0], [40.8, 100.0], [40.9, 102.0], [41.0, 102.0], [41.1, 103.0], [41.2, 103.0], [41.3, 103.0], [41.4, 104.0], [41.5, 104.0], [41.6, 105.0], [41.7, 105.0], [41.8, 106.0], [41.9, 106.0], [42.0, 107.0], [42.1, 108.0], [42.2, 108.0], [42.3, 109.0], [42.4, 110.0], [42.5, 110.0], [42.6, 111.0], [42.7, 111.0], [42.8, 112.0], [42.9, 113.0], [43.0, 114.0], [43.1, 114.0], [43.2, 116.0], [43.3, 116.0], [43.4, 117.0], [43.5, 117.0], [43.6, 118.0], [43.7, 120.0], [43.8, 120.0], [43.9, 121.0], [44.0, 121.0], [44.1, 123.0], [44.2, 124.0], [44.3, 125.0], [44.4, 126.0], [44.5, 129.0], [44.6, 129.0], [44.7, 130.0], [44.8, 132.0], [44.9, 134.0], [45.0, 135.0], [45.1, 136.0], [45.2, 137.0], [45.3, 138.0], [45.4, 139.0], [45.5, 140.0], [45.6, 141.0], [45.7, 141.0], [45.8, 142.0], [45.9, 143.0], [46.0, 144.0], [46.1, 144.0], [46.2, 146.0], [46.3, 147.0], [46.4, 148.0], [46.5, 149.0], [46.6, 149.0], [46.7, 150.0], [46.8, 151.0], [46.9, 151.0], [47.0, 152.0], [47.1, 153.0], [47.2, 154.0], [47.3, 155.0], [47.4, 156.0], [47.5, 157.0], [47.6, 158.0], [47.7, 159.0], [47.8, 159.0], [47.9, 161.0], [48.0, 161.0], [48.1, 163.0], [48.2, 164.0], [48.3, 165.0], [48.4, 167.0], [48.5, 168.0], [48.6, 170.0], [48.7, 171.0], [48.8, 171.0], [48.9, 172.0], [49.0, 172.0], [49.1, 172.0], [49.2, 173.0], [49.3, 174.0], [49.4, 174.0], [49.5, 175.0], [49.6, 176.0], [49.7, 178.0], [49.8, 178.0], [49.9, 179.0], [50.0, 181.0], [50.1, 182.0], [50.2, 183.0], [50.3, 184.0], [50.4, 185.0], [50.5, 185.0], [50.6, 186.0], [50.7, 187.0], [50.8, 189.0], [50.9, 190.0], [51.0, 191.0], [51.1, 193.0], [51.2, 194.0], [51.3, 195.0], [51.4, 196.0], [51.5, 197.0], [51.6, 198.0], [51.7, 199.0], [51.8, 199.0], [51.9, 201.0], [52.0, 202.0], [52.1, 203.0], [52.2, 203.0], [52.3, 205.0], [52.4, 205.0], [52.5, 207.0], [52.6, 208.0], [52.7, 209.0], [52.8, 210.0], [52.9, 211.0], [53.0, 212.0], [53.1, 213.0], [53.2, 214.0], [53.3, 215.0], [53.4, 216.0], [53.5, 217.0], [53.6, 219.0], [53.7, 219.0], [53.8, 220.0], [53.9, 221.0], [54.0, 222.0], [54.1, 224.0], [54.2, 225.0], [54.3, 225.0], [54.4, 226.0], [54.5, 227.0], [54.6, 228.0], [54.7, 229.0], [54.8, 231.0], [54.9, 232.0], [55.0, 232.0], [55.1, 234.0], [55.2, 235.0], [55.3, 236.0], [55.4, 237.0], [55.5, 238.0], [55.6, 239.0], [55.7, 240.0], [55.8, 241.0], [55.9, 242.0], [56.0, 243.0], [56.1, 244.0], [56.2, 245.0], [56.3, 246.0], [56.4, 247.0], [56.5, 248.0], [56.6, 249.0], [56.7, 251.0], [56.8, 252.0], [56.9, 252.0], [57.0, 253.0], [57.1, 254.0], [57.2, 254.0], [57.3, 255.0], [57.4, 256.0], [57.5, 257.0], [57.6, 257.0], [57.7, 258.0], [57.8, 259.0], [57.9, 260.0], [58.0, 262.0], [58.1, 263.0], [58.2, 263.0], [58.3, 265.0], [58.4, 266.0], [58.5, 267.0], [58.6, 267.0], [58.7, 268.0], [58.8, 269.0], [58.9, 272.0], [59.0, 272.0], [59.1, 273.0], [59.2, 274.0], [59.3, 275.0], [59.4, 275.0], [59.5, 276.0], [59.6, 277.0], [59.7, 279.0], [59.8, 281.0], [59.9, 282.0], [60.0, 283.0], [60.1, 284.0], [60.2, 285.0], [60.3, 285.0], [60.4, 286.0], [60.5, 289.0], [60.6, 290.0], [60.7, 292.0], [60.8, 296.0], [60.9, 297.0], [61.0, 298.0], [61.1, 299.0], [61.2, 301.0], [61.3, 302.0], [61.4, 304.0], [61.5, 305.0], [61.6, 306.0], [61.7, 307.0], [61.8, 309.0], [61.9, 312.0], [62.0, 313.0], [62.1, 314.0], [62.2, 316.0], [62.3, 317.0], [62.4, 320.0], [62.5, 321.0], [62.6, 325.0], [62.7, 325.0], [62.8, 328.0], [62.9, 331.0], [63.0, 334.0], [63.1, 335.0], [63.2, 335.0], [63.3, 338.0], [63.4, 339.0], [63.5, 341.0], [63.6, 343.0], [63.7, 346.0], [63.8, 347.0], [63.9, 348.0], [64.0, 349.0], [64.1, 351.0], [64.2, 352.0], [64.3, 354.0], [64.4, 357.0], [64.5, 358.0], [64.6, 359.0], [64.7, 363.0], [64.8, 364.0], [64.9, 365.0], [65.0, 366.0], [65.1, 367.0], [65.2, 368.0], [65.3, 369.0], [65.4, 370.0], [65.5, 372.0], [65.6, 375.0], [65.7, 376.0], [65.8, 378.0], [65.9, 379.0], [66.0, 381.0], [66.1, 382.0], [66.2, 384.0], [66.3, 385.0], [66.4, 387.0], [66.5, 387.0], [66.6, 389.0], [66.7, 389.0], [66.8, 390.0], [66.9, 391.0], [67.0, 393.0], [67.1, 395.0], [67.2, 396.0], [67.3, 396.0], [67.4, 398.0], [67.5, 398.0], [67.6, 399.0], [67.7, 400.0], [67.8, 402.0], [67.9, 403.0], [68.0, 404.0], [68.1, 406.0], [68.2, 406.0], [68.3, 410.0], [68.4, 412.0], [68.5, 414.0], [68.6, 414.0], [68.7, 415.0], [68.8, 418.0], [68.9, 420.0], [69.0, 421.0], [69.1, 423.0], [69.2, 425.0], [69.3, 427.0], [69.4, 428.0], [69.5, 429.0], [69.6, 431.0], [69.7, 432.0], [69.8, 433.0], [69.9, 435.0], [70.0, 436.0], [70.1, 437.0], [70.2, 437.0], [70.3, 440.0], [70.4, 441.0], [70.5, 442.0], [70.6, 443.0], [70.7, 445.0], [70.8, 447.0], [70.9, 447.0], [71.0, 449.0], [71.1, 451.0], [71.2, 451.0], [71.3, 453.0], [71.4, 455.0], [71.5, 456.0], [71.6, 460.0], [71.7, 462.0], [71.8, 464.0], [71.9, 465.0], [72.0, 466.0], [72.1, 468.0], [72.2, 470.0], [72.3, 472.0], [72.4, 473.0], [72.5, 474.0], [72.6, 475.0], [72.7, 476.0], [72.8, 478.0], [72.9, 480.0], [73.0, 481.0], [73.1, 482.0], [73.2, 485.0], [73.3, 487.0], [73.4, 489.0], [73.5, 490.0], [73.6, 491.0], [73.7, 493.0], [73.8, 494.0], [73.9, 496.0], [74.0, 498.0], [74.1, 499.0], [74.2, 501.0], [74.3, 503.0], [74.4, 505.0], [74.5, 506.0], [74.6, 508.0], [74.7, 510.0], [74.8, 512.0], [74.9, 515.0], [75.0, 516.0], [75.1, 517.0], [75.2, 518.0], [75.3, 520.0], [75.4, 523.0], [75.5, 526.0], [75.6, 529.0], [75.7, 530.0], [75.8, 533.0], [75.9, 534.0], [76.0, 537.0], [76.1, 539.0], [76.2, 541.0], [76.3, 544.0], [76.4, 545.0], [76.5, 547.0], [76.6, 551.0], [76.7, 554.0], [76.8, 555.0], [76.9, 558.0], [77.0, 560.0], [77.1, 560.0], [77.2, 563.0], [77.3, 566.0], [77.4, 569.0], [77.5, 571.0], [77.6, 575.0], [77.7, 578.0], [77.8, 579.0], [77.9, 581.0], [78.0, 584.0], [78.1, 586.0], [78.2, 587.0], [78.3, 589.0], [78.4, 592.0], [78.5, 594.0], [78.6, 595.0], [78.7, 599.0], [78.8, 601.0], [78.9, 602.0], [79.0, 604.0], [79.1, 606.0], [79.2, 608.0], [79.3, 609.0], [79.4, 610.0], [79.5, 613.0], [79.6, 616.0], [79.7, 618.0], [79.8, 618.0], [79.9, 621.0], [80.0, 623.0], [80.1, 625.0], [80.2, 629.0], [80.3, 631.0], [80.4, 634.0], [80.5, 637.0], [80.6, 640.0], [80.7, 641.0], [80.8, 644.0], [80.9, 647.0], [81.0, 649.0], [81.1, 651.0], [81.2, 656.0], [81.3, 660.0], [81.4, 662.0], [81.5, 665.0], [81.6, 669.0], [81.7, 672.0], [81.8, 675.0], [81.9, 679.0], [82.0, 683.0], [82.1, 684.0], [82.2, 685.0], [82.3, 688.0], [82.4, 691.0], [82.5, 692.0], [82.6, 695.0], [82.7, 696.0], [82.8, 699.0], [82.9, 700.0], [83.0, 702.0], [83.1, 706.0], [83.2, 709.0], [83.3, 713.0], [83.4, 716.0], [83.5, 722.0], [83.6, 723.0], [83.7, 725.0], [83.8, 727.0], [83.9, 730.0], [84.0, 732.0], [84.1, 736.0], [84.2, 738.0], [84.3, 740.0], [84.4, 741.0], [84.5, 743.0], [84.6, 746.0], [84.7, 747.0], [84.8, 749.0], [84.9, 751.0], [85.0, 754.0], [85.1, 757.0], [85.2, 760.0], [85.3, 764.0], [85.4, 765.0], [85.5, 769.0], [85.6, 770.0], [85.7, 773.0], [85.8, 774.0], [85.9, 775.0], [86.0, 777.0], [86.1, 780.0], [86.2, 782.0], [86.3, 784.0], [86.4, 786.0], [86.5, 789.0], [86.6, 791.0], [86.7, 794.0], [86.8, 796.0], [86.9, 797.0], [87.0, 798.0], [87.1, 800.0], [87.2, 803.0], [87.3, 804.0], [87.4, 807.0], [87.5, 808.0], [87.6, 812.0], [87.7, 816.0], [87.8, 819.0], [87.9, 821.0], [88.0, 822.0], [88.1, 824.0], [88.2, 826.0], [88.3, 829.0], [88.4, 831.0], [88.5, 835.0], [88.6, 839.0], [88.7, 845.0], [88.8, 847.0], [88.9, 849.0], [89.0, 854.0], [89.1, 859.0], [89.2, 861.0], [89.3, 863.0], [89.4, 868.0], [89.5, 871.0], [89.6, 873.0], [89.7, 876.0], [89.8, 880.0], [89.9, 886.0], [90.0, 889.0], [90.1, 895.0], [90.2, 898.0], [90.3, 901.0], [90.4, 905.0], [90.5, 909.0], [90.6, 915.0], [90.7, 921.0], [90.8, 925.0], [90.9, 928.0], [91.0, 934.0], [91.1, 942.0], [91.2, 948.0], [91.3, 954.0], [91.4, 959.0], [91.5, 966.0], [91.6, 976.0], [91.7, 978.0], [91.8, 981.0], [91.9, 985.0], [92.0, 995.0], [92.1, 1004.0], [92.2, 1011.0], [92.3, 1020.0], [92.4, 1026.0], [92.5, 1031.0], [92.6, 1036.0], [92.7, 1042.0], [92.8, 1045.0], [92.9, 1052.0], [93.0, 1059.0], [93.1, 1065.0], [93.2, 1077.0], [93.3, 1082.0], [93.4, 1085.0], [93.5, 1092.0], [93.6, 1099.0], [93.7, 1100.0], [93.8, 1110.0], [93.9, 1116.0], [94.0, 1117.0], [94.1, 1121.0], [94.2, 1132.0], [94.3, 1135.0], [94.4, 1145.0], [94.5, 1149.0], [94.6, 1159.0], [94.7, 1168.0], [94.8, 1173.0], [94.9, 1183.0], [95.0, 1196.0], [95.1, 1205.0], [95.2, 1214.0], [95.3, 1238.0], [95.4, 1246.0], [95.5, 1251.0], [95.6, 1263.0], [95.7, 1277.0], [95.8, 1292.0], [95.9, 1297.0], [96.0, 1313.0], [96.1, 1322.0], [96.2, 1342.0], [96.3, 1348.0], [96.4, 1361.0], [96.5, 1375.0], [96.6, 1389.0], [96.7, 1397.0], [96.8, 1409.0], [96.9, 1417.0], [97.0, 1424.0], [97.1, 1438.0], [97.2, 1443.0], [97.3, 1461.0], [97.4, 1472.0], [97.5, 1505.0], [97.6, 1516.0], [97.7, 1543.0], [97.8, 1564.0], [97.9, 1583.0], [98.0, 1627.0], [98.1, 1680.0], [98.2, 1708.0], [98.3, 1730.0], [98.4, 1760.0], [98.5, 1784.0], [98.6, 1811.0], [98.7, 1831.0], [98.8, 1843.0], [98.9, 1875.0], [99.0, 1923.0], [99.1, 1967.0], [99.2, 2025.0], [99.3, 2086.0], [99.4, 2238.0], [99.5, 2316.0], [99.6, 2372.0], [99.7, 2510.0], [99.8, 2614.0], [99.9, 3018.0], [100.0, 4128.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 2142.0, "series": [{"data": [[0.0, 2142.0], [600.0, 219.0], [700.0, 220.0], [800.0, 170.0], [900.0, 92.0], [1000.0, 87.0], [1100.0, 73.0], [1200.0, 46.0], [1300.0, 43.0], [1400.0, 39.0], [1500.0, 26.0], [100.0, 589.0], [1600.0, 10.0], [1700.0, 19.0], [1800.0, 23.0], [1900.0, 10.0], [2000.0, 10.0], [2100.0, 3.0], [2300.0, 9.0], [2200.0, 4.0], [2400.0, 3.0], [2500.0, 5.0], [2600.0, 1.0], [2700.0, 2.0], [2800.0, 2.0], [3000.0, 1.0], [200.0, 491.0], [3300.0, 1.0], [3500.0, 1.0], [3600.0, 1.0], [3700.0, 1.0], [4100.0, 1.0], [300.0, 343.0], [400.0, 343.0], [500.0, 242.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 4100.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 133.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 3910.0, "series": [{"data": [[0.0, 3910.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1229.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 133.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.905857740585775, "minX": 1.60224834E12, "maxY": 10.0, "series": [{"data": [[1.60224834E12, 9.978544776119403], [1.60224852E12, 9.905857740585775], [1.6022484E12, 10.0], [1.60224846E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60224852E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 354.15258751902485, "minX": 1.0, "maxY": 4128.0, "series": [{"data": [[4.0, 1588.5], [8.0, 1488.5], [2.0, 3718.0], [1.0, 4128.0], [9.0, 498.3333333333333], [5.0, 1265.3333333333333], [10.0, 354.15258751902485], [6.0, 3355.0], [3.0, 2845.0], [7.0, 627.5]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.987101669195768, 358.15098634294384]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 4206.033333333334, "minX": 1.60224834E12, "maxY": 1393327.15, "series": [{"data": [[1.60224834E12, 1063273.7], [1.60224852E12, 490107.18333333335], [1.6022484E12, 1344755.4333333333], [1.60224846E12, 1393327.15]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60224834E12, 9263.516666666666], [1.60224852E12, 4206.033333333334], [1.6022484E12, 15566.033333333333], [1.60224846E12, 16543.966666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60224852E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 317.68140649973355, "minX": 1.60224834E12, "maxY": 497.07112970711245, "series": [{"data": [[1.60224834E12, 425.0335820895527], [1.60224852E12, 497.07112970711245], [1.6022484E12, 324.4704607046076], [1.60224846E12, 317.68140649973355]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60224852E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 317.3740010655299, "minX": 1.60224834E12, "maxY": 496.65271966527223, "series": [{"data": [[1.60224834E12, 424.58488805970137], [1.60224852E12, 496.65271966527223], [1.6022484E12, 324.1588075880753], [1.60224846E12, 317.3740010655299]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60224852E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.008368200836820093, "minX": 1.60224834E12, "maxY": 0.13339552238805946, "series": [{"data": [[1.60224834E12, 0.13339552238805946], [1.60224852E12, 0.008368200836820093], [1.6022484E12, 0.011382113821138214], [1.60224846E12, 0.010122535961640939]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60224852E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 28.0, "minX": 1.60224834E12, "maxY": 4128.0, "series": [{"data": [[1.60224834E12, 2316.0], [1.60224852E12, 4128.0], [1.6022484E12, 2727.0], [1.60224846E12, 2339.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60224834E12, 32.656999744176865], [1.60224852E12, 35.0], [1.6022484E12, 32.0], [1.60224846E12, 32.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60224834E12, 33.0], [1.60224852E12, 35.0], [1.6022484E12, 32.27540017604828], [1.60224846E12, 32.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60224834E12, 33.0], [1.60224852E12, 35.0], [1.6022484E12, 32.0], [1.60224846E12, 32.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60224834E12, 28.0], [1.60224852E12, 33.0], [1.6022484E12, 28.0], [1.60224846E12, 28.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60224834E12, 261.0], [1.60224852E12, 275.0], [1.6022484E12, 145.0], [1.60224846E12, 175.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60224852E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 43.0, "minX": 1.0, "maxY": 3718.0, "series": [{"data": [[3.0, 2942.0], [4.0, 1140.5], [5.0, 1625.5], [6.0, 1301.5], [7.0, 701.0], [8.0, 796.0], [9.0, 905.5], [10.0, 924.0], [11.0, 775.0], [12.0, 804.0], [13.0, 705.0], [14.0, 531.0], [15.0, 662.5], [16.0, 585.0], [17.0, 446.0], [18.0, 494.5], [19.0, 481.0], [20.0, 274.5], [21.0, 248.0], [22.0, 78.0], [23.0, 390.0], [24.0, 261.5], [25.0, 321.0], [26.0, 203.5], [27.0, 315.5], [28.0, 302.5], [29.0, 78.5], [30.0, 199.5], [31.0, 77.0], [32.0, 260.0], [33.0, 43.0], [35.0, 218.0], [36.0, 163.0], [37.0, 99.0], [39.0, 103.5], [38.0, 260.0], [41.0, 175.0], [40.0, 115.0], [42.0, 78.0], [43.0, 80.0], [44.0, 122.5], [45.0, 82.0], [47.0, 82.0], [46.0, 153.5], [49.0, 80.0], [50.0, 74.0], [51.0, 84.0], [53.0, 149.0], [52.0, 80.5], [54.0, 75.0], [55.0, 79.0], [56.0, 155.5], [58.0, 76.5], [59.0, 67.0], [60.0, 75.5], [61.0, 89.0], [62.0, 151.5], [63.0, 145.5], [67.0, 70.0], [68.0, 104.5], [69.0, 73.0], [75.0, 99.5], [73.0, 72.0], [77.0, 106.0], [79.0, 84.0], [82.0, 78.5], [1.0, 3718.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 82.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 43.0, "minX": 1.0, "maxY": 3717.0, "series": [{"data": [[3.0, 2941.5], [4.0, 1139.0], [5.0, 1624.0], [6.0, 1301.5], [7.0, 701.0], [8.0, 795.5], [9.0, 900.5], [10.0, 922.0], [11.0, 775.0], [12.0, 803.0], [13.0, 704.0], [14.0, 530.5], [15.0, 662.0], [16.0, 585.0], [17.0, 444.0], [18.0, 494.0], [19.0, 480.5], [20.0, 274.0], [21.0, 248.0], [22.0, 78.0], [23.0, 388.0], [24.0, 261.0], [25.0, 321.0], [26.0, 203.5], [27.0, 314.5], [28.0, 302.5], [29.0, 78.5], [30.0, 199.5], [31.0, 77.0], [32.0, 260.0], [33.0, 43.0], [35.0, 217.5], [36.0, 163.0], [37.0, 99.0], [39.0, 102.0], [38.0, 260.0], [41.0, 175.0], [40.0, 115.0], [42.0, 78.0], [43.0, 80.0], [44.0, 122.5], [45.0, 82.0], [47.0, 82.0], [46.0, 153.5], [49.0, 80.0], [50.0, 74.0], [51.0, 84.0], [53.0, 149.0], [52.0, 80.5], [54.0, 75.0], [55.0, 79.0], [56.0, 155.5], [58.0, 76.5], [59.0, 67.0], [60.0, 75.5], [61.0, 89.0], [62.0, 151.5], [63.0, 145.5], [67.0, 70.0], [68.0, 104.5], [69.0, 73.0], [75.0, 99.5], [73.0, 72.0], [77.0, 106.0], [79.0, 84.0], [82.0, 78.5], [1.0, 3717.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 82.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 7.8, "minX": 1.60224834E12, "maxY": 31.283333333333335, "series": [{"data": [[1.60224834E12, 18.033333333333335], [1.60224852E12, 7.8], [1.6022484E12, 30.75], [1.60224846E12, 31.283333333333335]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60224852E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 7.966666666666667, "minX": 1.60224834E12, "maxY": 31.283333333333335, "series": [{"data": [[1.60224834E12, 17.866666666666667], [1.60224852E12, 7.966666666666667], [1.6022484E12, 30.75], [1.60224846E12, 31.283333333333335]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60224852E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 7.966666666666667, "minX": 1.60224834E12, "maxY": 31.283333333333335, "series": [{"data": [[1.60224834E12, 17.866666666666667], [1.60224852E12, 7.966666666666667], [1.6022484E12, 30.75], [1.60224846E12, 31.283333333333335]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60224852E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 7.966666666666667, "minX": 1.60224834E12, "maxY": 31.283333333333335, "series": [{"data": [[1.60224834E12, 17.866666666666667], [1.60224852E12, 7.966666666666667], [1.6022484E12, 30.75], [1.60224846E12, 31.283333333333335]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60224852E12, "title": "Total Transactions Per Second"}},
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

