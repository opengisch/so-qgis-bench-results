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
        data: {"result": {"minY": 34.0, "minX": 0.0, "maxY": 4251.0, "series": [{"data": [[0.0, 34.0], [0.1, 35.0], [0.2, 35.0], [0.3, 35.0], [0.4, 36.0], [0.5, 36.0], [0.6, 38.0], [0.7, 38.0], [0.8, 39.0], [0.9, 39.0], [1.0, 40.0], [1.1, 40.0], [1.2, 40.0], [1.3, 40.0], [1.4, 41.0], [1.5, 41.0], [1.6, 41.0], [1.7, 41.0], [1.8, 41.0], [1.9, 42.0], [2.0, 42.0], [2.1, 42.0], [2.2, 42.0], [2.3, 42.0], [2.4, 42.0], [2.5, 42.0], [2.6, 42.0], [2.7, 43.0], [2.8, 43.0], [2.9, 43.0], [3.0, 43.0], [3.1, 43.0], [3.2, 43.0], [3.3, 43.0], [3.4, 43.0], [3.5, 43.0], [3.6, 44.0], [3.7, 44.0], [3.8, 44.0], [3.9, 44.0], [4.0, 44.0], [4.1, 44.0], [4.2, 44.0], [4.3, 44.0], [4.4, 44.0], [4.5, 44.0], [4.6, 44.0], [4.7, 45.0], [4.8, 45.0], [4.9, 45.0], [5.0, 45.0], [5.1, 45.0], [5.2, 45.0], [5.3, 45.0], [5.4, 45.0], [5.5, 45.0], [5.6, 45.0], [5.7, 45.0], [5.8, 45.0], [5.9, 45.0], [6.0, 45.0], [6.1, 45.0], [6.2, 46.0], [6.3, 46.0], [6.4, 46.0], [6.5, 46.0], [6.6, 46.0], [6.7, 46.0], [6.8, 46.0], [6.9, 46.0], [7.0, 46.0], [7.1, 46.0], [7.2, 46.0], [7.3, 46.0], [7.4, 46.0], [7.5, 46.0], [7.6, 46.0], [7.7, 46.0], [7.8, 46.0], [7.9, 47.0], [8.0, 47.0], [8.1, 47.0], [8.2, 47.0], [8.3, 47.0], [8.4, 47.0], [8.5, 47.0], [8.6, 47.0], [8.7, 47.0], [8.8, 47.0], [8.9, 47.0], [9.0, 47.0], [9.1, 47.0], [9.2, 47.0], [9.3, 47.0], [9.4, 47.0], [9.5, 47.0], [9.6, 48.0], [9.7, 48.0], [9.8, 48.0], [9.9, 48.0], [10.0, 48.0], [10.1, 48.0], [10.2, 48.0], [10.3, 48.0], [10.4, 48.0], [10.5, 48.0], [10.6, 48.0], [10.7, 48.0], [10.8, 48.0], [10.9, 48.0], [11.0, 48.0], [11.1, 49.0], [11.2, 49.0], [11.3, 49.0], [11.4, 49.0], [11.5, 49.0], [11.6, 49.0], [11.7, 49.0], [11.8, 49.0], [11.9, 49.0], [12.0, 49.0], [12.1, 49.0], [12.2, 49.0], [12.3, 49.0], [12.4, 49.0], [12.5, 49.0], [12.6, 49.0], [12.7, 50.0], [12.8, 50.0], [12.9, 50.0], [13.0, 50.0], [13.1, 50.0], [13.2, 50.0], [13.3, 50.0], [13.4, 50.0], [13.5, 50.0], [13.6, 50.0], [13.7, 50.0], [13.8, 51.0], [13.9, 51.0], [14.0, 51.0], [14.1, 51.0], [14.2, 51.0], [14.3, 51.0], [14.4, 51.0], [14.5, 51.0], [14.6, 52.0], [14.7, 52.0], [14.8, 52.0], [14.9, 52.0], [15.0, 52.0], [15.1, 52.0], [15.2, 52.0], [15.3, 52.0], [15.4, 52.0], [15.5, 52.0], [15.6, 53.0], [15.7, 53.0], [15.8, 53.0], [15.9, 53.0], [16.0, 53.0], [16.1, 53.0], [16.2, 53.0], [16.3, 53.0], [16.4, 54.0], [16.5, 54.0], [16.6, 54.0], [16.7, 54.0], [16.8, 54.0], [16.9, 54.0], [17.0, 54.0], [17.1, 54.0], [17.2, 55.0], [17.3, 55.0], [17.4, 55.0], [17.5, 55.0], [17.6, 55.0], [17.7, 55.0], [17.8, 56.0], [17.9, 56.0], [18.0, 56.0], [18.1, 56.0], [18.2, 57.0], [18.3, 57.0], [18.4, 57.0], [18.5, 57.0], [18.6, 58.0], [18.7, 58.0], [18.8, 58.0], [18.9, 59.0], [19.0, 59.0], [19.1, 60.0], [19.2, 60.0], [19.3, 61.0], [19.4, 61.0], [19.5, 61.0], [19.6, 63.0], [19.7, 63.0], [19.8, 64.0], [19.9, 64.0], [20.0, 65.0], [20.1, 66.0], [20.2, 67.0], [20.3, 68.0], [20.4, 68.0], [20.5, 68.0], [20.6, 69.0], [20.7, 69.0], [20.8, 70.0], [20.9, 70.0], [21.0, 71.0], [21.1, 71.0], [21.2, 72.0], [21.3, 73.0], [21.4, 73.0], [21.5, 74.0], [21.6, 74.0], [21.7, 75.0], [21.8, 75.0], [21.9, 76.0], [22.0, 77.0], [22.1, 77.0], [22.2, 77.0], [22.3, 78.0], [22.4, 78.0], [22.5, 78.0], [22.6, 78.0], [22.7, 79.0], [22.8, 79.0], [22.9, 80.0], [23.0, 80.0], [23.1, 81.0], [23.2, 81.0], [23.3, 81.0], [23.4, 81.0], [23.5, 81.0], [23.6, 82.0], [23.7, 82.0], [23.8, 82.0], [23.9, 82.0], [24.0, 82.0], [24.1, 82.0], [24.2, 83.0], [24.3, 83.0], [24.4, 83.0], [24.5, 83.0], [24.6, 83.0], [24.7, 84.0], [24.8, 84.0], [24.9, 84.0], [25.0, 84.0], [25.1, 84.0], [25.2, 84.0], [25.3, 84.0], [25.4, 84.0], [25.5, 85.0], [25.6, 85.0], [25.7, 85.0], [25.8, 85.0], [25.9, 85.0], [26.0, 85.0], [26.1, 86.0], [26.2, 86.0], [26.3, 86.0], [26.4, 86.0], [26.5, 86.0], [26.6, 86.0], [26.7, 86.0], [26.8, 87.0], [26.9, 87.0], [27.0, 87.0], [27.1, 87.0], [27.2, 87.0], [27.3, 87.0], [27.4, 88.0], [27.5, 88.0], [27.6, 88.0], [27.7, 88.0], [27.8, 88.0], [27.9, 88.0], [28.0, 88.0], [28.1, 88.0], [28.2, 89.0], [28.3, 89.0], [28.4, 89.0], [28.5, 89.0], [28.6, 89.0], [28.7, 89.0], [28.8, 89.0], [28.9, 89.0], [29.0, 90.0], [29.1, 90.0], [29.2, 90.0], [29.3, 90.0], [29.4, 90.0], [29.5, 90.0], [29.6, 90.0], [29.7, 90.0], [29.8, 90.0], [29.9, 91.0], [30.0, 91.0], [30.1, 91.0], [30.2, 91.0], [30.3, 91.0], [30.4, 91.0], [30.5, 91.0], [30.6, 91.0], [30.7, 91.0], [30.8, 91.0], [30.9, 92.0], [31.0, 92.0], [31.1, 92.0], [31.2, 92.0], [31.3, 92.0], [31.4, 93.0], [31.5, 93.0], [31.6, 93.0], [31.7, 93.0], [31.8, 93.0], [31.9, 93.0], [32.0, 94.0], [32.1, 94.0], [32.2, 94.0], [32.3, 94.0], [32.4, 94.0], [32.5, 94.0], [32.6, 94.0], [32.7, 94.0], [32.8, 94.0], [32.9, 95.0], [33.0, 95.0], [33.1, 95.0], [33.2, 95.0], [33.3, 95.0], [33.4, 95.0], [33.5, 96.0], [33.6, 96.0], [33.7, 96.0], [33.8, 96.0], [33.9, 96.0], [34.0, 96.0], [34.1, 97.0], [34.2, 97.0], [34.3, 97.0], [34.4, 97.0], [34.5, 97.0], [34.6, 97.0], [34.7, 98.0], [34.8, 98.0], [34.9, 98.0], [35.0, 99.0], [35.1, 99.0], [35.2, 99.0], [35.3, 99.0], [35.4, 99.0], [35.5, 99.0], [35.6, 100.0], [35.7, 100.0], [35.8, 100.0], [35.9, 100.0], [36.0, 100.0], [36.1, 101.0], [36.2, 101.0], [36.3, 101.0], [36.4, 102.0], [36.5, 102.0], [36.6, 102.0], [36.7, 102.0], [36.8, 103.0], [36.9, 103.0], [37.0, 103.0], [37.1, 103.0], [37.2, 104.0], [37.3, 104.0], [37.4, 105.0], [37.5, 105.0], [37.6, 106.0], [37.7, 106.0], [37.8, 107.0], [37.9, 107.0], [38.0, 108.0], [38.1, 108.0], [38.2, 109.0], [38.3, 109.0], [38.4, 110.0], [38.5, 111.0], [38.6, 112.0], [38.7, 112.0], [38.8, 112.0], [38.9, 114.0], [39.0, 115.0], [39.1, 115.0], [39.2, 116.0], [39.3, 118.0], [39.4, 120.0], [39.5, 121.0], [39.6, 121.0], [39.7, 122.0], [39.8, 122.0], [39.9, 123.0], [40.0, 124.0], [40.1, 126.0], [40.2, 127.0], [40.3, 128.0], [40.4, 128.0], [40.5, 129.0], [40.6, 130.0], [40.7, 131.0], [40.8, 131.0], [40.9, 132.0], [41.0, 133.0], [41.1, 133.0], [41.2, 134.0], [41.3, 134.0], [41.4, 134.0], [41.5, 135.0], [41.6, 136.0], [41.7, 136.0], [41.8, 137.0], [41.9, 138.0], [42.0, 138.0], [42.1, 138.0], [42.2, 139.0], [42.3, 140.0], [42.4, 141.0], [42.5, 141.0], [42.6, 142.0], [42.7, 144.0], [42.8, 145.0], [42.9, 145.0], [43.0, 146.0], [43.1, 148.0], [43.2, 150.0], [43.3, 151.0], [43.4, 151.0], [43.5, 152.0], [43.6, 152.0], [43.7, 153.0], [43.8, 154.0], [43.9, 155.0], [44.0, 156.0], [44.1, 157.0], [44.2, 158.0], [44.3, 159.0], [44.4, 160.0], [44.5, 160.0], [44.6, 162.0], [44.7, 162.0], [44.8, 163.0], [44.9, 164.0], [45.0, 165.0], [45.1, 166.0], [45.2, 168.0], [45.3, 169.0], [45.4, 169.0], [45.5, 170.0], [45.6, 171.0], [45.7, 171.0], [45.8, 172.0], [45.9, 173.0], [46.0, 173.0], [46.1, 174.0], [46.2, 175.0], [46.3, 176.0], [46.4, 177.0], [46.5, 178.0], [46.6, 180.0], [46.7, 181.0], [46.8, 183.0], [46.9, 184.0], [47.0, 185.0], [47.1, 186.0], [47.2, 187.0], [47.3, 187.0], [47.4, 188.0], [47.5, 189.0], [47.6, 189.0], [47.7, 190.0], [47.8, 191.0], [47.9, 191.0], [48.0, 192.0], [48.1, 194.0], [48.2, 195.0], [48.3, 196.0], [48.4, 197.0], [48.5, 198.0], [48.6, 199.0], [48.7, 200.0], [48.8, 201.0], [48.9, 202.0], [49.0, 203.0], [49.1, 203.0], [49.2, 204.0], [49.3, 205.0], [49.4, 206.0], [49.5, 207.0], [49.6, 208.0], [49.7, 208.0], [49.8, 209.0], [49.9, 210.0], [50.0, 210.0], [50.1, 211.0], [50.2, 212.0], [50.3, 212.0], [50.4, 213.0], [50.5, 215.0], [50.6, 215.0], [50.7, 216.0], [50.8, 217.0], [50.9, 218.0], [51.0, 219.0], [51.1, 220.0], [51.2, 222.0], [51.3, 223.0], [51.4, 223.0], [51.5, 224.0], [51.6, 224.0], [51.7, 226.0], [51.8, 226.0], [51.9, 228.0], [52.0, 228.0], [52.1, 229.0], [52.2, 230.0], [52.3, 230.0], [52.4, 232.0], [52.5, 233.0], [52.6, 233.0], [52.7, 234.0], [52.8, 234.0], [52.9, 235.0], [53.0, 235.0], [53.1, 236.0], [53.2, 236.0], [53.3, 237.0], [53.4, 239.0], [53.5, 240.0], [53.6, 240.0], [53.7, 241.0], [53.8, 241.0], [53.9, 242.0], [54.0, 243.0], [54.1, 244.0], [54.2, 244.0], [54.3, 245.0], [54.4, 245.0], [54.5, 246.0], [54.6, 247.0], [54.7, 247.0], [54.8, 248.0], [54.9, 249.0], [55.0, 250.0], [55.1, 251.0], [55.2, 251.0], [55.3, 252.0], [55.4, 252.0], [55.5, 253.0], [55.6, 254.0], [55.7, 255.0], [55.8, 256.0], [55.9, 257.0], [56.0, 258.0], [56.1, 258.0], [56.2, 259.0], [56.3, 260.0], [56.4, 261.0], [56.5, 262.0], [56.6, 262.0], [56.7, 263.0], [56.8, 263.0], [56.9, 264.0], [57.0, 265.0], [57.1, 265.0], [57.2, 267.0], [57.3, 268.0], [57.4, 268.0], [57.5, 269.0], [57.6, 270.0], [57.7, 272.0], [57.8, 272.0], [57.9, 273.0], [58.0, 274.0], [58.1, 274.0], [58.2, 275.0], [58.3, 277.0], [58.4, 278.0], [58.5, 279.0], [58.6, 280.0], [58.7, 281.0], [58.8, 283.0], [58.9, 284.0], [59.0, 285.0], [59.1, 287.0], [59.2, 288.0], [59.3, 288.0], [59.4, 291.0], [59.5, 292.0], [59.6, 293.0], [59.7, 294.0], [59.8, 295.0], [59.9, 296.0], [60.0, 296.0], [60.1, 298.0], [60.2, 300.0], [60.3, 301.0], [60.4, 302.0], [60.5, 303.0], [60.6, 304.0], [60.7, 306.0], [60.8, 307.0], [60.9, 308.0], [61.0, 310.0], [61.1, 311.0], [61.2, 312.0], [61.3, 313.0], [61.4, 315.0], [61.5, 316.0], [61.6, 317.0], [61.7, 319.0], [61.8, 321.0], [61.9, 322.0], [62.0, 323.0], [62.1, 324.0], [62.2, 325.0], [62.3, 328.0], [62.4, 331.0], [62.5, 332.0], [62.6, 336.0], [62.7, 338.0], [62.8, 339.0], [62.9, 340.0], [63.0, 341.0], [63.1, 341.0], [63.2, 343.0], [63.3, 344.0], [63.4, 345.0], [63.5, 347.0], [63.6, 349.0], [63.7, 352.0], [63.8, 353.0], [63.9, 354.0], [64.0, 355.0], [64.1, 356.0], [64.2, 357.0], [64.3, 358.0], [64.4, 359.0], [64.5, 360.0], [64.6, 361.0], [64.7, 362.0], [64.8, 364.0], [64.9, 365.0], [65.0, 367.0], [65.1, 369.0], [65.2, 369.0], [65.3, 370.0], [65.4, 372.0], [65.5, 373.0], [65.6, 375.0], [65.7, 376.0], [65.8, 378.0], [65.9, 379.0], [66.0, 381.0], [66.1, 382.0], [66.2, 383.0], [66.3, 384.0], [66.4, 385.0], [66.5, 386.0], [66.6, 387.0], [66.7, 389.0], [66.8, 390.0], [66.9, 391.0], [67.0, 393.0], [67.1, 395.0], [67.2, 397.0], [67.3, 399.0], [67.4, 400.0], [67.5, 402.0], [67.6, 402.0], [67.7, 404.0], [67.8, 405.0], [67.9, 406.0], [68.0, 408.0], [68.1, 409.0], [68.2, 410.0], [68.3, 412.0], [68.4, 414.0], [68.5, 416.0], [68.6, 417.0], [68.7, 418.0], [68.8, 419.0], [68.9, 421.0], [69.0, 422.0], [69.1, 424.0], [69.2, 424.0], [69.3, 425.0], [69.4, 427.0], [69.5, 428.0], [69.6, 430.0], [69.7, 431.0], [69.8, 432.0], [69.9, 436.0], [70.0, 437.0], [70.1, 438.0], [70.2, 439.0], [70.3, 441.0], [70.4, 443.0], [70.5, 446.0], [70.6, 448.0], [70.7, 448.0], [70.8, 450.0], [70.9, 451.0], [71.0, 454.0], [71.1, 455.0], [71.2, 459.0], [71.3, 459.0], [71.4, 460.0], [71.5, 462.0], [71.6, 464.0], [71.7, 465.0], [71.8, 467.0], [71.9, 468.0], [72.0, 471.0], [72.1, 472.0], [72.2, 474.0], [72.3, 476.0], [72.4, 477.0], [72.5, 479.0], [72.6, 481.0], [72.7, 482.0], [72.8, 484.0], [72.9, 486.0], [73.0, 489.0], [73.1, 491.0], [73.2, 492.0], [73.3, 494.0], [73.4, 496.0], [73.5, 498.0], [73.6, 500.0], [73.7, 501.0], [73.8, 502.0], [73.9, 505.0], [74.0, 508.0], [74.1, 512.0], [74.2, 513.0], [74.3, 515.0], [74.4, 517.0], [74.5, 520.0], [74.6, 521.0], [74.7, 522.0], [74.8, 523.0], [74.9, 524.0], [75.0, 526.0], [75.1, 527.0], [75.2, 528.0], [75.3, 530.0], [75.4, 533.0], [75.5, 534.0], [75.6, 535.0], [75.7, 537.0], [75.8, 539.0], [75.9, 541.0], [76.0, 542.0], [76.1, 545.0], [76.2, 547.0], [76.3, 550.0], [76.4, 551.0], [76.5, 552.0], [76.6, 555.0], [76.7, 558.0], [76.8, 560.0], [76.9, 561.0], [77.0, 563.0], [77.1, 564.0], [77.2, 567.0], [77.3, 569.0], [77.4, 571.0], [77.5, 573.0], [77.6, 574.0], [77.7, 575.0], [77.8, 577.0], [77.9, 580.0], [78.0, 583.0], [78.1, 584.0], [78.2, 585.0], [78.3, 587.0], [78.4, 591.0], [78.5, 593.0], [78.6, 595.0], [78.7, 599.0], [78.8, 601.0], [78.9, 602.0], [79.0, 605.0], [79.1, 608.0], [79.2, 609.0], [79.3, 611.0], [79.4, 612.0], [79.5, 613.0], [79.6, 614.0], [79.7, 615.0], [79.8, 616.0], [79.9, 618.0], [80.0, 620.0], [80.1, 621.0], [80.2, 625.0], [80.3, 626.0], [80.4, 627.0], [80.5, 630.0], [80.6, 631.0], [80.7, 632.0], [80.8, 634.0], [80.9, 635.0], [81.0, 636.0], [81.1, 639.0], [81.2, 641.0], [81.3, 643.0], [81.4, 644.0], [81.5, 646.0], [81.6, 647.0], [81.7, 650.0], [81.8, 652.0], [81.9, 653.0], [82.0, 655.0], [82.1, 658.0], [82.2, 660.0], [82.3, 662.0], [82.4, 663.0], [82.5, 664.0], [82.6, 666.0], [82.7, 668.0], [82.8, 672.0], [82.9, 674.0], [83.0, 676.0], [83.1, 678.0], [83.2, 681.0], [83.3, 686.0], [83.4, 687.0], [83.5, 689.0], [83.6, 691.0], [83.7, 693.0], [83.8, 695.0], [83.9, 698.0], [84.0, 700.0], [84.1, 702.0], [84.2, 704.0], [84.3, 706.0], [84.4, 708.0], [84.5, 710.0], [84.6, 712.0], [84.7, 715.0], [84.8, 718.0], [84.9, 721.0], [85.0, 724.0], [85.1, 732.0], [85.2, 734.0], [85.3, 737.0], [85.4, 738.0], [85.5, 741.0], [85.6, 743.0], [85.7, 745.0], [85.8, 748.0], [85.9, 750.0], [86.0, 752.0], [86.1, 753.0], [86.2, 755.0], [86.3, 757.0], [86.4, 760.0], [86.5, 762.0], [86.6, 765.0], [86.7, 766.0], [86.8, 768.0], [86.9, 771.0], [87.0, 775.0], [87.1, 775.0], [87.2, 777.0], [87.3, 780.0], [87.4, 781.0], [87.5, 784.0], [87.6, 785.0], [87.7, 787.0], [87.8, 793.0], [87.9, 795.0], [88.0, 797.0], [88.1, 799.0], [88.2, 803.0], [88.3, 807.0], [88.4, 809.0], [88.5, 811.0], [88.6, 814.0], [88.7, 818.0], [88.8, 820.0], [88.9, 823.0], [89.0, 826.0], [89.1, 828.0], [89.2, 833.0], [89.3, 835.0], [89.4, 838.0], [89.5, 847.0], [89.6, 850.0], [89.7, 854.0], [89.8, 856.0], [89.9, 858.0], [90.0, 862.0], [90.1, 864.0], [90.2, 874.0], [90.3, 877.0], [90.4, 880.0], [90.5, 885.0], [90.6, 891.0], [90.7, 896.0], [90.8, 900.0], [90.9, 907.0], [91.0, 913.0], [91.1, 918.0], [91.2, 926.0], [91.3, 931.0], [91.4, 935.0], [91.5, 938.0], [91.6, 941.0], [91.7, 948.0], [91.8, 960.0], [91.9, 965.0], [92.0, 976.0], [92.1, 987.0], [92.2, 991.0], [92.3, 1005.0], [92.4, 1013.0], [92.5, 1016.0], [92.6, 1019.0], [92.7, 1026.0], [92.8, 1032.0], [92.9, 1040.0], [93.0, 1046.0], [93.1, 1054.0], [93.2, 1062.0], [93.3, 1065.0], [93.4, 1074.0], [93.5, 1079.0], [93.6, 1087.0], [93.7, 1096.0], [93.8, 1098.0], [93.9, 1108.0], [94.0, 1112.0], [94.1, 1115.0], [94.2, 1121.0], [94.3, 1128.0], [94.4, 1133.0], [94.5, 1142.0], [94.6, 1146.0], [94.7, 1149.0], [94.8, 1157.0], [94.9, 1165.0], [95.0, 1170.0], [95.1, 1176.0], [95.2, 1182.0], [95.3, 1188.0], [95.4, 1194.0], [95.5, 1202.0], [95.6, 1210.0], [95.7, 1218.0], [95.8, 1224.0], [95.9, 1236.0], [96.0, 1242.0], [96.1, 1247.0], [96.2, 1256.0], [96.3, 1263.0], [96.4, 1274.0], [96.5, 1276.0], [96.6, 1289.0], [96.7, 1296.0], [96.8, 1309.0], [96.9, 1316.0], [97.0, 1322.0], [97.1, 1333.0], [97.2, 1337.0], [97.3, 1348.0], [97.4, 1368.0], [97.5, 1391.0], [97.6, 1407.0], [97.7, 1422.0], [97.8, 1458.0], [97.9, 1478.0], [98.0, 1495.0], [98.1, 1512.0], [98.2, 1523.0], [98.3, 1540.0], [98.4, 1568.0], [98.5, 1595.0], [98.6, 1605.0], [98.7, 1637.0], [98.8, 1682.0], [98.9, 1786.0], [99.0, 1856.0], [99.1, 2002.0], [99.2, 2071.0], [99.3, 2165.0], [99.4, 2210.0], [99.5, 2244.0], [99.6, 2317.0], [99.7, 2455.0], [99.8, 2867.0], [99.9, 3156.0], [100.0, 4251.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 1869.0, "series": [{"data": [[0.0, 1869.0], [600.0, 276.0], [700.0, 218.0], [800.0, 140.0], [900.0, 79.0], [1000.0, 82.0], [1100.0, 85.0], [1200.0, 69.0], [1300.0, 43.0], [1400.0, 25.0], [1500.0, 25.0], [100.0, 690.0], [1600.0, 17.0], [1700.0, 5.0], [1800.0, 6.0], [1900.0, 2.0], [2000.0, 7.0], [2100.0, 8.0], [2200.0, 9.0], [2300.0, 6.0], [2400.0, 4.0], [2500.0, 1.0], [2600.0, 2.0], [2800.0, 2.0], [2900.0, 1.0], [3000.0, 2.0], [3100.0, 2.0], [200.0, 608.0], [3200.0, 1.0], [3600.0, 2.0], [4200.0, 1.0], [300.0, 377.0], [400.0, 328.0], [500.0, 270.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 4200.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 103.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 3875.0, "series": [{"data": [[0.0, 3875.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1284.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 103.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.951508620689655, "minX": 1.60238718E12, "maxY": 10.0, "series": [{"data": [[1.60238718E12, 9.965043695380777], [1.6023873E12, 10.0], [1.60238724E12, 10.0], [1.60238736E12, 9.951508620689655]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60238736E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 357.73030707610167, "minX": 1.0, "maxY": 4251.0, "series": [{"data": [[4.0, 1652.5], [8.0, 1228.25], [2.0, 4251.0], [1.0, 3643.0], [9.0, 930.25], [5.0, 1083.3333333333335], [10.0, 357.73030707610167], [6.0, 1285.0], [3.0, 1760.0], [7.0, 692.5]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.986126947928506, 361.66723679209395]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 6903.783333333334, "minX": 1.60238718E12, "maxY": 1369521.6333333333, "series": [{"data": [[1.60238718E12, 764831.3333333334], [1.6023873E12, 1300883.9333333333], [1.60238724E12, 1369521.6333333333], [1.60238736E12, 813644.55]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60238718E12, 6903.783333333334], [1.6023873E12, 15580.266666666666], [1.60238724E12, 14853.516666666666], [1.60238736E12, 8153.383333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60238736E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 333.36924803591495, "minX": 1.60238718E12, "maxY": 414.54556803994956, "series": [{"data": [[1.60238718E12, 414.54556803994956], [1.6023873E12, 333.36924803591495], [1.60238724E12, 345.17932609937185], [1.60238736E12, 401.4752155172414]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60238736E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 332.9859708193034, "minX": 1.60238718E12, "maxY": 413.9875156054932, "series": [{"data": [[1.60238718E12, 413.9875156054932], [1.6023873E12, 332.9859708193034], [1.60238724E12, 344.76699029126235], [1.60238736E12, 401.06250000000017]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60238736E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.008620689655172422, "minX": 1.60238718E12, "maxY": 0.11610486891385757, "series": [{"data": [[1.60238718E12, 0.11610486891385757], [1.6023873E12, 0.010662177328844023], [1.60238724E12, 0.011422044545973752], [1.60238736E12, 0.008620689655172422]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60238736E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 34.0, "minX": 1.60238718E12, "maxY": 4251.0, "series": [{"data": [[1.60238718E12, 2210.0], [1.6023873E12, 2211.0], [1.60238724E12, 2648.0], [1.60238736E12, 4251.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60238718E12, 35.0], [1.6023873E12, 41.0], [1.60238724E12, 38.0], [1.60238736E12, 42.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60238718E12, 35.0], [1.6023873E12, 41.0], [1.60238724E12, 38.34480016708374], [1.60238736E12, 42.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60238718E12, 35.0], [1.6023873E12, 41.0], [1.60238724E12, 38.0], [1.60238736E12, 42.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60238718E12, 34.0], [1.6023873E12, 36.0], [1.60238724E12, 34.0], [1.60238736E12, 41.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60238718E12, 281.0], [1.6023873E12, 178.0], [1.60238724E12, 205.0], [1.60238736E12, 264.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60238736E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 60.0, "minX": 1.0, "maxY": 3643.0, "series": [{"data": [[3.0, 1361.5], [4.0, 1885.5], [5.0, 1693.0], [6.0, 1057.0], [7.0, 1285.5], [8.0, 799.0], [9.0, 809.5], [10.0, 728.0], [11.0, 820.0], [12.0, 747.5], [13.0, 627.0], [14.0, 598.0], [15.0, 662.5], [16.0, 655.0], [17.0, 496.0], [18.0, 559.0], [19.0, 466.0], [20.0, 430.5], [21.0, 372.0], [22.0, 247.5], [23.0, 353.0], [24.0, 369.5], [25.0, 208.5], [26.0, 295.5], [27.0, 282.0], [28.0, 211.5], [29.0, 288.0], [30.0, 266.5], [31.0, 153.5], [33.0, 97.0], [32.0, 293.5], [35.0, 211.5], [34.0, 213.5], [36.0, 195.5], [37.0, 122.0], [39.0, 88.0], [38.0, 187.0], [41.0, 143.0], [40.0, 113.5], [42.0, 200.5], [43.0, 101.0], [45.0, 93.0], [44.0, 157.0], [47.0, 91.0], [46.0, 99.5], [49.0, 166.0], [48.0, 176.5], [51.0, 60.0], [52.0, 89.5], [55.0, 159.0], [58.0, 98.0], [59.0, 94.0], [60.0, 139.0], [61.0, 95.5], [63.0, 91.0], [66.0, 141.5], [65.0, 91.0], [71.0, 96.0], [68.0, 102.0], [77.0, 65.0], [82.0, 69.0], [1.0, 3643.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 82.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 60.0, "minX": 1.0, "maxY": 3643.0, "series": [{"data": [[3.0, 1360.0], [4.0, 1884.5], [5.0, 1693.0], [6.0, 1056.5], [7.0, 1285.0], [8.0, 799.0], [9.0, 809.5], [10.0, 726.5], [11.0, 816.0], [12.0, 745.5], [13.0, 627.0], [14.0, 597.5], [15.0, 662.0], [16.0, 654.0], [17.0, 494.0], [18.0, 557.5], [19.0, 466.0], [20.0, 429.5], [21.0, 372.0], [22.0, 247.5], [23.0, 352.5], [24.0, 368.5], [25.0, 208.5], [26.0, 295.5], [27.0, 281.5], [28.0, 211.5], [29.0, 288.0], [30.0, 266.0], [31.0, 153.5], [33.0, 96.5], [32.0, 293.5], [35.0, 211.5], [34.0, 213.0], [36.0, 195.0], [37.0, 122.0], [39.0, 88.0], [38.0, 187.0], [41.0, 143.0], [40.0, 113.5], [42.0, 200.5], [43.0, 101.0], [45.0, 93.0], [44.0, 157.0], [47.0, 91.0], [46.0, 99.5], [49.0, 166.0], [48.0, 176.5], [51.0, 60.0], [52.0, 89.0], [55.0, 159.0], [58.0, 98.0], [59.0, 94.0], [60.0, 139.0], [61.0, 95.5], [63.0, 91.0], [66.0, 141.5], [65.0, 91.0], [71.0, 96.0], [68.0, 102.0], [77.0, 65.0], [82.0, 69.0], [1.0, 3643.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 82.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 13.516666666666667, "minX": 1.60238718E12, "maxY": 29.7, "series": [{"data": [[1.60238718E12, 13.516666666666667], [1.6023873E12, 29.7], [1.60238724E12, 29.183333333333334], [1.60238736E12, 15.3]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60238736E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 13.35, "minX": 1.60238718E12, "maxY": 29.7, "series": [{"data": [[1.60238718E12, 13.35], [1.6023873E12, 29.7], [1.60238724E12, 29.183333333333334], [1.60238736E12, 15.466666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60238736E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 13.35, "minX": 1.60238718E12, "maxY": 29.7, "series": [{"data": [[1.60238718E12, 13.35], [1.6023873E12, 29.7], [1.60238724E12, 29.183333333333334], [1.60238736E12, 15.466666666666667]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60238736E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 13.35, "minX": 1.60238718E12, "maxY": 29.7, "series": [{"data": [[1.60238718E12, 13.35], [1.6023873E12, 29.7], [1.60238724E12, 29.183333333333334], [1.60238736E12, 15.466666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60238736E12, "title": "Total Transactions Per Second"}},
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

