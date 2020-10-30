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
        data: {"result": {"minY": 4.0, "minX": 0.0, "maxY": 3134.0, "series": [{"data": [[0.0, 4.0], [0.1, 5.0], [0.2, 5.0], [0.3, 5.0], [0.4, 5.0], [0.5, 5.0], [0.6, 5.0], [0.7, 6.0], [0.8, 6.0], [0.9, 6.0], [1.0, 6.0], [1.1, 6.0], [1.2, 6.0], [1.3, 6.0], [1.4, 6.0], [1.5, 6.0], [1.6, 6.0], [1.7, 6.0], [1.8, 6.0], [1.9, 6.0], [2.0, 6.0], [2.1, 6.0], [2.2, 6.0], [2.3, 6.0], [2.4, 6.0], [2.5, 6.0], [2.6, 6.0], [2.7, 7.0], [2.8, 7.0], [2.9, 7.0], [3.0, 7.0], [3.1, 7.0], [3.2, 7.0], [3.3, 7.0], [3.4, 7.0], [3.5, 7.0], [3.6, 7.0], [3.7, 7.0], [3.8, 7.0], [3.9, 7.0], [4.0, 7.0], [4.1, 7.0], [4.2, 7.0], [4.3, 7.0], [4.4, 7.0], [4.5, 7.0], [4.6, 7.0], [4.7, 7.0], [4.8, 7.0], [4.9, 7.0], [5.0, 7.0], [5.1, 7.0], [5.2, 7.0], [5.3, 7.0], [5.4, 7.0], [5.5, 7.0], [5.6, 7.0], [5.7, 7.0], [5.8, 7.0], [5.9, 8.0], [6.0, 8.0], [6.1, 8.0], [6.2, 8.0], [6.3, 8.0], [6.4, 8.0], [6.5, 8.0], [6.6, 8.0], [6.7, 8.0], [6.8, 8.0], [6.9, 8.0], [7.0, 8.0], [7.1, 8.0], [7.2, 8.0], [7.3, 8.0], [7.4, 8.0], [7.5, 8.0], [7.6, 8.0], [7.7, 8.0], [7.8, 8.0], [7.9, 8.0], [8.0, 8.0], [8.1, 8.0], [8.2, 8.0], [8.3, 8.0], [8.4, 8.0], [8.5, 8.0], [8.6, 8.0], [8.7, 8.0], [8.8, 8.0], [8.9, 8.0], [9.0, 8.0], [9.1, 8.0], [9.2, 8.0], [9.3, 8.0], [9.4, 8.0], [9.5, 8.0], [9.6, 8.0], [9.7, 8.0], [9.8, 8.0], [9.9, 8.0], [10.0, 8.0], [10.1, 9.0], [10.2, 9.0], [10.3, 9.0], [10.4, 9.0], [10.5, 9.0], [10.6, 9.0], [10.7, 9.0], [10.8, 9.0], [10.9, 9.0], [11.0, 9.0], [11.1, 9.0], [11.2, 9.0], [11.3, 9.0], [11.4, 9.0], [11.5, 9.0], [11.6, 9.0], [11.7, 9.0], [11.8, 9.0], [11.9, 9.0], [12.0, 9.0], [12.1, 9.0], [12.2, 9.0], [12.3, 9.0], [12.4, 9.0], [12.5, 9.0], [12.6, 9.0], [12.7, 9.0], [12.8, 9.0], [12.9, 9.0], [13.0, 9.0], [13.1, 9.0], [13.2, 9.0], [13.3, 9.0], [13.4, 9.0], [13.5, 9.0], [13.6, 9.0], [13.7, 10.0], [13.8, 10.0], [13.9, 10.0], [14.0, 10.0], [14.1, 10.0], [14.2, 10.0], [14.3, 10.0], [14.4, 10.0], [14.5, 10.0], [14.6, 10.0], [14.7, 10.0], [14.8, 10.0], [14.9, 10.0], [15.0, 10.0], [15.1, 10.0], [15.2, 10.0], [15.3, 10.0], [15.4, 10.0], [15.5, 10.0], [15.6, 10.0], [15.7, 10.0], [15.8, 10.0], [15.9, 10.0], [16.0, 10.0], [16.1, 10.0], [16.2, 10.0], [16.3, 10.0], [16.4, 10.0], [16.5, 10.0], [16.6, 10.0], [16.7, 10.0], [16.8, 10.0], [16.9, 10.0], [17.0, 10.0], [17.1, 11.0], [17.2, 11.0], [17.3, 11.0], [17.4, 11.0], [17.5, 11.0], [17.6, 11.0], [17.7, 11.0], [17.8, 11.0], [17.9, 11.0], [18.0, 11.0], [18.1, 11.0], [18.2, 11.0], [18.3, 11.0], [18.4, 11.0], [18.5, 11.0], [18.6, 11.0], [18.7, 11.0], [18.8, 11.0], [18.9, 11.0], [19.0, 11.0], [19.1, 11.0], [19.2, 11.0], [19.3, 11.0], [19.4, 11.0], [19.5, 11.0], [19.6, 11.0], [19.7, 11.0], [19.8, 11.0], [19.9, 11.0], [20.0, 11.0], [20.1, 11.0], [20.2, 11.0], [20.3, 11.0], [20.4, 12.0], [20.5, 12.0], [20.6, 12.0], [20.7, 12.0], [20.8, 12.0], [20.9, 12.0], [21.0, 12.0], [21.1, 12.0], [21.2, 12.0], [21.3, 12.0], [21.4, 12.0], [21.5, 12.0], [21.6, 12.0], [21.7, 12.0], [21.8, 12.0], [21.9, 12.0], [22.0, 12.0], [22.1, 12.0], [22.2, 13.0], [22.3, 13.0], [22.4, 13.0], [22.5, 13.0], [22.6, 13.0], [22.7, 13.0], [22.8, 13.0], [22.9, 13.0], [23.0, 13.0], [23.1, 14.0], [23.2, 14.0], [23.3, 14.0], [23.4, 14.0], [23.5, 14.0], [23.6, 14.0], [23.7, 14.0], [23.8, 14.0], [23.9, 14.0], [24.0, 15.0], [24.1, 15.0], [24.2, 15.0], [24.3, 15.0], [24.4, 16.0], [24.5, 16.0], [24.6, 16.0], [24.7, 17.0], [24.8, 17.0], [24.9, 18.0], [25.0, 18.0], [25.1, 19.0], [25.2, 19.0], [25.3, 20.0], [25.4, 20.0], [25.5, 21.0], [25.6, 22.0], [25.7, 23.0], [25.8, 23.0], [25.9, 24.0], [26.0, 25.0], [26.1, 25.0], [26.2, 26.0], [26.3, 27.0], [26.4, 28.0], [26.5, 28.0], [26.6, 29.0], [26.7, 30.0], [26.8, 31.0], [26.9, 31.0], [27.0, 32.0], [27.1, 33.0], [27.2, 34.0], [27.3, 35.0], [27.4, 35.0], [27.5, 36.0], [27.6, 36.0], [27.7, 37.0], [27.8, 37.0], [27.9, 38.0], [28.0, 38.0], [28.1, 39.0], [28.2, 39.0], [28.3, 39.0], [28.4, 40.0], [28.5, 40.0], [28.6, 40.0], [28.7, 40.0], [28.8, 41.0], [28.9, 41.0], [29.0, 41.0], [29.1, 42.0], [29.2, 42.0], [29.3, 42.0], [29.4, 42.0], [29.5, 42.0], [29.6, 42.0], [29.7, 42.0], [29.8, 43.0], [29.9, 43.0], [30.0, 43.0], [30.1, 43.0], [30.2, 44.0], [30.3, 44.0], [30.4, 44.0], [30.5, 44.0], [30.6, 45.0], [30.7, 45.0], [30.8, 45.0], [30.9, 45.0], [31.0, 46.0], [31.1, 46.0], [31.2, 46.0], [31.3, 46.0], [31.4, 47.0], [31.5, 47.0], [31.6, 47.0], [31.7, 47.0], [31.8, 47.0], [31.9, 48.0], [32.0, 48.0], [32.1, 48.0], [32.2, 49.0], [32.3, 49.0], [32.4, 49.0], [32.5, 50.0], [32.6, 50.0], [32.7, 51.0], [32.8, 52.0], [32.9, 53.0], [33.0, 53.0], [33.1, 54.0], [33.2, 54.0], [33.3, 54.0], [33.4, 55.0], [33.5, 55.0], [33.6, 56.0], [33.7, 56.0], [33.8, 58.0], [33.9, 60.0], [34.0, 61.0], [34.1, 61.0], [34.2, 62.0], [34.3, 63.0], [34.4, 65.0], [34.5, 66.0], [34.6, 67.0], [34.7, 68.0], [34.8, 68.0], [34.9, 69.0], [35.0, 70.0], [35.1, 71.0], [35.2, 72.0], [35.3, 73.0], [35.4, 74.0], [35.5, 76.0], [35.6, 77.0], [35.7, 77.0], [35.8, 79.0], [35.9, 80.0], [36.0, 81.0], [36.1, 83.0], [36.2, 84.0], [36.3, 85.0], [36.4, 85.0], [36.5, 86.0], [36.6, 87.0], [36.7, 89.0], [36.8, 91.0], [36.9, 93.0], [37.0, 94.0], [37.1, 96.0], [37.2, 98.0], [37.3, 98.0], [37.4, 100.0], [37.5, 101.0], [37.6, 103.0], [37.7, 103.0], [37.8, 105.0], [37.9, 106.0], [38.0, 107.0], [38.1, 108.0], [38.2, 110.0], [38.3, 111.0], [38.4, 111.0], [38.5, 113.0], [38.6, 114.0], [38.7, 115.0], [38.8, 118.0], [38.9, 120.0], [39.0, 121.0], [39.1, 122.0], [39.2, 123.0], [39.3, 125.0], [39.4, 126.0], [39.5, 127.0], [39.6, 129.0], [39.7, 130.0], [39.8, 130.0], [39.9, 132.0], [40.0, 133.0], [40.1, 134.0], [40.2, 135.0], [40.3, 136.0], [40.4, 137.0], [40.5, 139.0], [40.6, 140.0], [40.7, 141.0], [40.8, 143.0], [40.9, 144.0], [41.0, 145.0], [41.1, 145.0], [41.2, 146.0], [41.3, 147.0], [41.4, 149.0], [41.5, 150.0], [41.6, 152.0], [41.7, 154.0], [41.8, 155.0], [41.9, 157.0], [42.0, 158.0], [42.1, 159.0], [42.2, 159.0], [42.3, 160.0], [42.4, 161.0], [42.5, 161.0], [42.6, 162.0], [42.7, 162.0], [42.8, 163.0], [42.9, 164.0], [43.0, 164.0], [43.1, 165.0], [43.2, 165.0], [43.3, 166.0], [43.4, 167.0], [43.5, 168.0], [43.6, 168.0], [43.7, 169.0], [43.8, 169.0], [43.9, 170.0], [44.0, 171.0], [44.1, 171.0], [44.2, 171.0], [44.3, 172.0], [44.4, 173.0], [44.5, 174.0], [44.6, 175.0], [44.7, 175.0], [44.8, 176.0], [44.9, 176.0], [45.0, 177.0], [45.1, 178.0], [45.2, 178.0], [45.3, 179.0], [45.4, 181.0], [45.5, 181.0], [45.6, 182.0], [45.7, 184.0], [45.8, 184.0], [45.9, 185.0], [46.0, 186.0], [46.1, 186.0], [46.2, 188.0], [46.3, 188.0], [46.4, 190.0], [46.5, 192.0], [46.6, 193.0], [46.7, 193.0], [46.8, 194.0], [46.9, 195.0], [47.0, 196.0], [47.1, 197.0], [47.2, 197.0], [47.3, 198.0], [47.4, 199.0], [47.5, 199.0], [47.6, 199.0], [47.7, 201.0], [47.8, 201.0], [47.9, 202.0], [48.0, 202.0], [48.1, 203.0], [48.2, 204.0], [48.3, 205.0], [48.4, 205.0], [48.5, 206.0], [48.6, 207.0], [48.7, 208.0], [48.8, 209.0], [48.9, 210.0], [49.0, 211.0], [49.1, 212.0], [49.2, 213.0], [49.3, 214.0], [49.4, 214.0], [49.5, 215.0], [49.6, 216.0], [49.7, 217.0], [49.8, 217.0], [49.9, 218.0], [50.0, 220.0], [50.1, 221.0], [50.2, 221.0], [50.3, 223.0], [50.4, 223.0], [50.5, 224.0], [50.6, 225.0], [50.7, 225.0], [50.8, 226.0], [50.9, 227.0], [51.0, 228.0], [51.1, 229.0], [51.2, 230.0], [51.3, 231.0], [51.4, 231.0], [51.5, 232.0], [51.6, 234.0], [51.7, 234.0], [51.8, 235.0], [51.9, 235.0], [52.0, 236.0], [52.1, 236.0], [52.2, 237.0], [52.3, 238.0], [52.4, 239.0], [52.5, 239.0], [52.6, 240.0], [52.7, 241.0], [52.8, 242.0], [52.9, 242.0], [53.0, 244.0], [53.1, 245.0], [53.2, 246.0], [53.3, 247.0], [53.4, 248.0], [53.5, 249.0], [53.6, 251.0], [53.7, 252.0], [53.8, 252.0], [53.9, 254.0], [54.0, 255.0], [54.1, 256.0], [54.2, 257.0], [54.3, 258.0], [54.4, 260.0], [54.5, 260.0], [54.6, 261.0], [54.7, 262.0], [54.8, 263.0], [54.9, 265.0], [55.0, 267.0], [55.1, 267.0], [55.2, 268.0], [55.3, 268.0], [55.4, 270.0], [55.5, 271.0], [55.6, 271.0], [55.7, 272.0], [55.8, 274.0], [55.9, 276.0], [56.0, 277.0], [56.1, 278.0], [56.2, 279.0], [56.3, 279.0], [56.4, 281.0], [56.5, 282.0], [56.6, 284.0], [56.7, 285.0], [56.8, 286.0], [56.9, 287.0], [57.0, 288.0], [57.1, 289.0], [57.2, 290.0], [57.3, 291.0], [57.4, 292.0], [57.5, 292.0], [57.6, 293.0], [57.7, 293.0], [57.8, 294.0], [57.9, 296.0], [58.0, 297.0], [58.1, 298.0], [58.2, 300.0], [58.3, 301.0], [58.4, 302.0], [58.5, 303.0], [58.6, 304.0], [58.7, 306.0], [58.8, 307.0], [58.9, 309.0], [59.0, 310.0], [59.1, 310.0], [59.2, 312.0], [59.3, 312.0], [59.4, 313.0], [59.5, 314.0], [59.6, 315.0], [59.7, 317.0], [59.8, 319.0], [59.9, 319.0], [60.0, 320.0], [60.1, 321.0], [60.2, 322.0], [60.3, 323.0], [60.4, 325.0], [60.5, 327.0], [60.6, 328.0], [60.7, 329.0], [60.8, 330.0], [60.9, 332.0], [61.0, 333.0], [61.1, 334.0], [61.2, 335.0], [61.3, 336.0], [61.4, 337.0], [61.5, 339.0], [61.6, 339.0], [61.7, 340.0], [61.8, 341.0], [61.9, 342.0], [62.0, 344.0], [62.1, 345.0], [62.2, 346.0], [62.3, 348.0], [62.4, 349.0], [62.5, 350.0], [62.6, 351.0], [62.7, 353.0], [62.8, 355.0], [62.9, 355.0], [63.0, 357.0], [63.1, 359.0], [63.2, 360.0], [63.3, 361.0], [63.4, 363.0], [63.5, 365.0], [63.6, 366.0], [63.7, 367.0], [63.8, 368.0], [63.9, 369.0], [64.0, 370.0], [64.1, 372.0], [64.2, 372.0], [64.3, 374.0], [64.4, 374.0], [64.5, 375.0], [64.6, 376.0], [64.7, 377.0], [64.8, 378.0], [64.9, 379.0], [65.0, 380.0], [65.1, 380.0], [65.2, 382.0], [65.3, 384.0], [65.4, 386.0], [65.5, 387.0], [65.6, 387.0], [65.7, 388.0], [65.8, 389.0], [65.9, 391.0], [66.0, 393.0], [66.1, 394.0], [66.2, 394.0], [66.3, 395.0], [66.4, 396.0], [66.5, 397.0], [66.6, 398.0], [66.7, 400.0], [66.8, 401.0], [66.9, 404.0], [67.0, 405.0], [67.1, 405.0], [67.2, 406.0], [67.3, 409.0], [67.4, 411.0], [67.5, 413.0], [67.6, 415.0], [67.7, 415.0], [67.8, 417.0], [67.9, 419.0], [68.0, 421.0], [68.1, 423.0], [68.2, 424.0], [68.3, 426.0], [68.4, 428.0], [68.5, 430.0], [68.6, 432.0], [68.7, 432.0], [68.8, 435.0], [68.9, 436.0], [69.0, 438.0], [69.1, 440.0], [69.2, 443.0], [69.3, 444.0], [69.4, 444.0], [69.5, 446.0], [69.6, 447.0], [69.7, 448.0], [69.8, 449.0], [69.9, 450.0], [70.0, 452.0], [70.1, 452.0], [70.2, 454.0], [70.3, 456.0], [70.4, 458.0], [70.5, 460.0], [70.6, 461.0], [70.7, 463.0], [70.8, 465.0], [70.9, 466.0], [71.0, 467.0], [71.1, 468.0], [71.2, 470.0], [71.3, 472.0], [71.4, 472.0], [71.5, 475.0], [71.6, 476.0], [71.7, 477.0], [71.8, 479.0], [71.9, 481.0], [72.0, 482.0], [72.1, 484.0], [72.2, 486.0], [72.3, 488.0], [72.4, 490.0], [72.5, 491.0], [72.6, 493.0], [72.7, 496.0], [72.8, 498.0], [72.9, 500.0], [73.0, 500.0], [73.1, 501.0], [73.2, 503.0], [73.3, 504.0], [73.4, 504.0], [73.5, 506.0], [73.6, 507.0], [73.7, 509.0], [73.8, 510.0], [73.9, 512.0], [74.0, 514.0], [74.1, 516.0], [74.2, 516.0], [74.3, 518.0], [74.4, 520.0], [74.5, 521.0], [74.6, 523.0], [74.7, 525.0], [74.8, 526.0], [74.9, 528.0], [75.0, 528.0], [75.1, 531.0], [75.2, 531.0], [75.3, 533.0], [75.4, 534.0], [75.5, 536.0], [75.6, 537.0], [75.7, 538.0], [75.8, 539.0], [75.9, 540.0], [76.0, 542.0], [76.1, 543.0], [76.2, 543.0], [76.3, 544.0], [76.4, 547.0], [76.5, 550.0], [76.6, 550.0], [76.7, 552.0], [76.8, 554.0], [76.9, 555.0], [77.0, 556.0], [77.1, 558.0], [77.2, 560.0], [77.3, 562.0], [77.4, 565.0], [77.5, 568.0], [77.6, 569.0], [77.7, 571.0], [77.8, 574.0], [77.9, 576.0], [78.0, 577.0], [78.1, 580.0], [78.2, 585.0], [78.3, 586.0], [78.4, 589.0], [78.5, 590.0], [78.6, 592.0], [78.7, 594.0], [78.8, 595.0], [78.9, 598.0], [79.0, 599.0], [79.1, 603.0], [79.2, 604.0], [79.3, 604.0], [79.4, 608.0], [79.5, 610.0], [79.6, 612.0], [79.7, 615.0], [79.8, 618.0], [79.9, 620.0], [80.0, 624.0], [80.1, 626.0], [80.2, 627.0], [80.3, 630.0], [80.4, 632.0], [80.5, 634.0], [80.6, 635.0], [80.7, 637.0], [80.8, 640.0], [80.9, 641.0], [81.0, 645.0], [81.1, 647.0], [81.2, 649.0], [81.3, 652.0], [81.4, 653.0], [81.5, 654.0], [81.6, 655.0], [81.7, 659.0], [81.8, 660.0], [81.9, 662.0], [82.0, 664.0], [82.1, 666.0], [82.2, 669.0], [82.3, 671.0], [82.4, 673.0], [82.5, 676.0], [82.6, 677.0], [82.7, 679.0], [82.8, 682.0], [82.9, 683.0], [83.0, 687.0], [83.1, 688.0], [83.2, 689.0], [83.3, 694.0], [83.4, 696.0], [83.5, 698.0], [83.6, 703.0], [83.7, 707.0], [83.8, 709.0], [83.9, 710.0], [84.0, 714.0], [84.1, 716.0], [84.2, 717.0], [84.3, 720.0], [84.4, 726.0], [84.5, 728.0], [84.6, 731.0], [84.7, 733.0], [84.8, 736.0], [84.9, 739.0], [85.0, 742.0], [85.1, 744.0], [85.2, 746.0], [85.3, 747.0], [85.4, 751.0], [85.5, 755.0], [85.6, 756.0], [85.7, 758.0], [85.8, 759.0], [85.9, 761.0], [86.0, 767.0], [86.1, 769.0], [86.2, 772.0], [86.3, 777.0], [86.4, 780.0], [86.5, 783.0], [86.6, 786.0], [86.7, 792.0], [86.8, 796.0], [86.9, 804.0], [87.0, 808.0], [87.1, 813.0], [87.2, 818.0], [87.3, 821.0], [87.4, 829.0], [87.5, 832.0], [87.6, 837.0], [87.7, 837.0], [87.8, 843.0], [87.9, 847.0], [88.0, 852.0], [88.1, 856.0], [88.2, 861.0], [88.3, 863.0], [88.4, 866.0], [88.5, 875.0], [88.6, 878.0], [88.7, 883.0], [88.8, 887.0], [88.9, 889.0], [89.0, 891.0], [89.1, 896.0], [89.2, 898.0], [89.3, 901.0], [89.4, 905.0], [89.5, 908.0], [89.6, 915.0], [89.7, 920.0], [89.8, 925.0], [89.9, 931.0], [90.0, 937.0], [90.1, 942.0], [90.2, 948.0], [90.3, 953.0], [90.4, 958.0], [90.5, 966.0], [90.6, 971.0], [90.7, 977.0], [90.8, 983.0], [90.9, 989.0], [91.0, 990.0], [91.1, 993.0], [91.2, 998.0], [91.3, 1011.0], [91.4, 1014.0], [91.5, 1023.0], [91.6, 1025.0], [91.7, 1036.0], [91.8, 1039.0], [91.9, 1046.0], [92.0, 1051.0], [92.1, 1055.0], [92.2, 1061.0], [92.3, 1068.0], [92.4, 1072.0], [92.5, 1079.0], [92.6, 1082.0], [92.7, 1086.0], [92.8, 1090.0], [92.9, 1094.0], [93.0, 1101.0], [93.1, 1104.0], [93.2, 1108.0], [93.3, 1116.0], [93.4, 1120.0], [93.5, 1125.0], [93.6, 1132.0], [93.7, 1143.0], [93.8, 1146.0], [93.9, 1161.0], [94.0, 1164.0], [94.1, 1172.0], [94.2, 1175.0], [94.3, 1178.0], [94.4, 1183.0], [94.5, 1188.0], [94.6, 1197.0], [94.7, 1210.0], [94.8, 1218.0], [94.9, 1224.0], [95.0, 1230.0], [95.1, 1240.0], [95.2, 1246.0], [95.3, 1261.0], [95.4, 1268.0], [95.5, 1277.0], [95.6, 1290.0], [95.7, 1302.0], [95.8, 1312.0], [95.9, 1322.0], [96.0, 1349.0], [96.1, 1359.0], [96.2, 1371.0], [96.3, 1389.0], [96.4, 1400.0], [96.5, 1410.0], [96.6, 1427.0], [96.7, 1432.0], [96.8, 1437.0], [96.9, 1446.0], [97.0, 1465.0], [97.1, 1475.0], [97.2, 1489.0], [97.3, 1523.0], [97.4, 1548.0], [97.5, 1563.0], [97.6, 1566.0], [97.7, 1587.0], [97.8, 1609.0], [97.9, 1637.0], [98.0, 1650.0], [98.1, 1671.0], [98.2, 1695.0], [98.3, 1705.0], [98.4, 1719.0], [98.5, 1753.0], [98.6, 1769.0], [98.7, 1793.0], [98.8, 1807.0], [98.9, 1847.0], [99.0, 1870.0], [99.1, 1929.0], [99.2, 2008.0], [99.3, 2052.0], [99.4, 2113.0], [99.5, 2193.0], [99.6, 2404.0], [99.7, 2592.0], [99.8, 2730.0], [99.9, 2935.0], [100.0, 3134.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 1967.0, "series": [{"data": [[0.0, 1967.0], [600.0, 239.0], [700.0, 172.0], [800.0, 128.0], [900.0, 102.0], [1000.0, 92.0], [1100.0, 89.0], [1200.0, 55.0], [1300.0, 37.0], [1400.0, 44.0], [1500.0, 27.0], [100.0, 538.0], [1600.0, 26.0], [1700.0, 27.0], [1800.0, 16.0], [1900.0, 7.0], [2000.0, 11.0], [2100.0, 7.0], [2200.0, 3.0], [2400.0, 4.0], [2500.0, 3.0], [2600.0, 2.0], [2700.0, 4.0], [2800.0, 3.0], [2900.0, 4.0], [3000.0, 1.0], [3100.0, 1.0], [200.0, 555.0], [300.0, 448.0], [400.0, 327.0], [500.0, 323.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3100.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 146.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 3842.0, "series": [{"data": [[0.0, 3842.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1274.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 146.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.884910485933503, "minX": 1.60402962E12, "maxY": 10.0, "series": [{"data": [[1.60402974E12, 10.0], [1.60402968E12, 10.0], [1.6040298E12, 9.884910485933503], [1.60402962E12, 9.984350547730845]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6040298E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 356.7286939942805, "minX": 1.0, "maxY": 3134.0, "series": [{"data": [[4.0, 837.0], [8.0, 3134.0], [2.0, 3050.0], [1.0, 2999.0], [9.0, 819.8], [10.0, 356.7286939942805], [5.0, 2701.0], [6.0, 644.0], [3.0, 2935.0], [7.0, 815.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.987647282402113, 360.1989737742297]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 3571.883333333333, "minX": 1.60402962E12, "maxY": 1421616.2833333334, "series": [{"data": [[1.60402974E12, 1421616.2833333334], [1.60402968E12, 1327044.6333333333], [1.6040298E12, 300535.18333333335], [1.60402962E12, 1190483.2333333334]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60402974E12, 14988.683333333332], [1.60402968E12, 16764.633333333335], [1.6040298E12, 3571.883333333333], [1.60402962E12, 11393.55]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6040298E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 312.81469979296, "minX": 1.60402962E12, "maxY": 417.744245524297, "series": [{"data": [[1.60402974E12, 358.1300421432878], [1.60402968E12, 312.81469979296], [1.6040298E12, 417.744245524297], [1.60402962E12, 416.91471048513296]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6040298E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 312.15734989648047, "minX": 1.60402962E12, "maxY": 416.92583120204625, "series": [{"data": [[1.60402974E12, 357.2907886815167], [1.60402968E12, 312.15734989648047], [1.6040298E12, 416.92583120204625], [1.60402962E12, 415.7511737089199]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6040298E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.5328115593016254, "minX": 1.60402962E12, "maxY": 0.907668231611894, "series": [{"data": [[1.60402974E12, 0.5328115593016254], [1.60402968E12, 0.5574534161490698], [1.6040298E12, 0.5907928388746808], [1.60402962E12, 0.907668231611894]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6040298E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 4.0, "minX": 1.60402962E12, "maxY": 3134.0, "series": [{"data": [[1.60402974E12, 2187.0], [1.60402968E12, 2894.0], [1.6040298E12, 3134.0], [1.60402962E12, 2880.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60402974E12, 6.0], [1.60402968E12, 5.3969995391368855], [1.6040298E12, 5.527999906539917], [1.60402962E12, 6.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60402974E12, 6.0], [1.60402968E12, 6.0], [1.6040298E12, 5.8808000373840335], [1.60402962E12, 6.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60402974E12, 6.0], [1.60402968E12, 6.0], [1.6040298E12, 5.723999953269958], [1.60402962E12, 6.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60402974E12, 4.0], [1.60402968E12, 5.0], [1.6040298E12, 5.0], [1.60402962E12, 5.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60402974E12, 234.0], [1.60402968E12, 147.0], [1.6040298E12, 268.0], [1.60402962E12, 295.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6040298E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 9.0, "minX": 1.0, "maxY": 1873.5, "series": [{"data": [[3.0, 1873.5], [4.0, 1515.0], [5.0, 1469.0], [6.0, 1187.0], [7.0, 1063.0], [8.0, 1166.0], [9.0, 806.0], [10.0, 1076.0], [11.0, 967.5], [12.0, 735.0], [13.0, 709.0], [14.0, 474.0], [15.0, 459.5], [16.0, 614.5], [17.0, 538.0], [18.0, 507.5], [19.0, 468.0], [20.0, 361.5], [21.0, 380.0], [22.0, 335.0], [23.0, 224.0], [24.0, 106.0], [25.0, 308.0], [26.0, 378.0], [27.0, 353.0], [28.0, 226.0], [29.0, 229.0], [30.0, 137.0], [31.0, 312.5], [33.0, 271.5], [32.0, 331.5], [34.0, 429.5], [35.0, 218.0], [36.0, 222.5], [37.0, 224.0], [39.0, 206.0], [38.0, 170.0], [41.0, 172.0], [43.0, 164.0], [42.0, 226.0], [44.0, 169.5], [45.0, 184.0], [47.0, 193.0], [48.0, 157.0], [50.0, 87.5], [56.0, 62.5], [57.0, 83.0], [58.0, 10.0], [61.0, 10.0], [60.0, 104.5], [62.0, 61.0], [65.0, 79.0], [71.0, 46.5], [69.0, 130.0], [73.0, 108.0], [72.0, 11.0], [75.0, 105.0], [78.0, 9.0], [83.0, 54.0], [80.0, 68.0], [86.0, 104.5], [99.0, 48.0], [114.0, 74.0], [120.0, 12.5], [1.0, 1574.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 120.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 9.0, "minX": 1.0, "maxY": 1872.0, "series": [{"data": [[3.0, 1872.0], [4.0, 1514.5], [5.0, 1468.0], [6.0, 1167.5], [7.0, 1062.0], [8.0, 1165.5], [9.0, 805.5], [10.0, 1075.5], [11.0, 967.5], [12.0, 734.5], [13.0, 709.0], [14.0, 474.0], [15.0, 455.5], [16.0, 612.5], [17.0, 537.0], [18.0, 503.0], [19.0, 467.5], [20.0, 360.5], [21.0, 379.0], [22.0, 333.0], [23.0, 222.5], [24.0, 105.5], [25.0, 308.0], [26.0, 376.5], [27.0, 353.0], [28.0, 226.0], [29.0, 227.0], [30.0, 136.5], [31.0, 311.5], [33.0, 271.5], [32.0, 331.5], [34.0, 429.5], [35.0, 218.0], [36.0, 222.5], [37.0, 224.0], [39.0, 205.0], [38.0, 169.5], [41.0, 172.0], [43.0, 164.0], [42.0, 226.0], [44.0, 169.5], [45.0, 184.0], [47.0, 193.0], [48.0, 157.0], [50.0, 87.5], [56.0, 62.5], [57.0, 82.0], [58.0, 10.0], [61.0, 10.0], [60.0, 104.5], [62.0, 60.0], [65.0, 79.0], [71.0, 46.0], [69.0, 130.0], [73.0, 108.0], [72.0, 11.0], [75.0, 105.0], [78.0, 9.0], [83.0, 53.0], [80.0, 68.0], [86.0, 104.0], [99.0, 48.0], [114.0, 74.0], [120.0, 12.5], [1.0, 1571.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 120.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 6.35, "minX": 1.60402962E12, "maxY": 32.18333333333333, "series": [{"data": [[1.60402974E12, 27.7], [1.60402968E12, 32.18333333333333], [1.6040298E12, 6.35], [1.60402962E12, 21.466666666666665]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6040298E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 6.516666666666667, "minX": 1.60402962E12, "maxY": 32.2, "series": [{"data": [[1.60402974E12, 27.683333333333334], [1.60402968E12, 32.2], [1.6040298E12, 6.516666666666667], [1.60402962E12, 21.3]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6040298E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 6.516666666666667, "minX": 1.60402962E12, "maxY": 32.2, "series": [{"data": [[1.60402974E12, 27.683333333333334], [1.60402968E12, 32.2], [1.6040298E12, 6.516666666666667], [1.60402962E12, 21.3]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6040298E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 6.516666666666667, "minX": 1.60402962E12, "maxY": 32.2, "series": [{"data": [[1.60402974E12, 27.683333333333334], [1.60402968E12, 32.2], [1.6040298E12, 6.516666666666667], [1.60402962E12, 21.3]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6040298E12, "title": "Total Transactions Per Second"}},
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

