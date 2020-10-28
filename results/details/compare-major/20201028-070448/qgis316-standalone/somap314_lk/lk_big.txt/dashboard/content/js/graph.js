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
        data: {"result": {"minY": 4.0, "minX": 0.0, "maxY": 3884.0, "series": [{"data": [[0.0, 4.0], [0.1, 5.0], [0.2, 5.0], [0.3, 5.0], [0.4, 6.0], [0.5, 6.0], [0.6, 6.0], [0.7, 6.0], [0.8, 6.0], [0.9, 6.0], [1.0, 6.0], [1.1, 6.0], [1.2, 6.0], [1.3, 6.0], [1.4, 6.0], [1.5, 6.0], [1.6, 6.0], [1.7, 6.0], [1.8, 6.0], [1.9, 6.0], [2.0, 6.0], [2.1, 6.0], [2.2, 7.0], [2.3, 7.0], [2.4, 7.0], [2.5, 7.0], [2.6, 7.0], [2.7, 7.0], [2.8, 7.0], [2.9, 7.0], [3.0, 7.0], [3.1, 7.0], [3.2, 7.0], [3.3, 7.0], [3.4, 7.0], [3.5, 7.0], [3.6, 7.0], [3.7, 7.0], [3.8, 7.0], [3.9, 7.0], [4.0, 7.0], [4.1, 7.0], [4.2, 7.0], [4.3, 7.0], [4.4, 7.0], [4.5, 7.0], [4.6, 7.0], [4.7, 7.0], [4.8, 7.0], [4.9, 7.0], [5.0, 7.0], [5.1, 7.0], [5.2, 8.0], [5.3, 8.0], [5.4, 8.0], [5.5, 8.0], [5.6, 8.0], [5.7, 8.0], [5.8, 8.0], [5.9, 8.0], [6.0, 8.0], [6.1, 8.0], [6.2, 8.0], [6.3, 8.0], [6.4, 8.0], [6.5, 8.0], [6.6, 8.0], [6.7, 8.0], [6.8, 8.0], [6.9, 8.0], [7.0, 8.0], [7.1, 8.0], [7.2, 8.0], [7.3, 8.0], [7.4, 8.0], [7.5, 8.0], [7.6, 8.0], [7.7, 8.0], [7.8, 8.0], [7.9, 8.0], [8.0, 8.0], [8.1, 8.0], [8.2, 8.0], [8.3, 8.0], [8.4, 8.0], [8.5, 8.0], [8.6, 8.0], [8.7, 8.0], [8.8, 8.0], [8.9, 8.0], [9.0, 8.0], [9.1, 9.0], [9.2, 9.0], [9.3, 9.0], [9.4, 9.0], [9.5, 9.0], [9.6, 9.0], [9.7, 9.0], [9.8, 9.0], [9.9, 9.0], [10.0, 9.0], [10.1, 9.0], [10.2, 9.0], [10.3, 9.0], [10.4, 9.0], [10.5, 9.0], [10.6, 9.0], [10.7, 9.0], [10.8, 9.0], [10.9, 9.0], [11.0, 9.0], [11.1, 9.0], [11.2, 9.0], [11.3, 9.0], [11.4, 9.0], [11.5, 9.0], [11.6, 9.0], [11.7, 9.0], [11.8, 9.0], [11.9, 9.0], [12.0, 9.0], [12.1, 9.0], [12.2, 9.0], [12.3, 9.0], [12.4, 9.0], [12.5, 9.0], [12.6, 9.0], [12.7, 9.0], [12.8, 9.0], [12.9, 9.0], [13.0, 10.0], [13.1, 10.0], [13.2, 10.0], [13.3, 10.0], [13.4, 10.0], [13.5, 10.0], [13.6, 10.0], [13.7, 10.0], [13.8, 10.0], [13.9, 10.0], [14.0, 10.0], [14.1, 10.0], [14.2, 10.0], [14.3, 10.0], [14.4, 10.0], [14.5, 10.0], [14.6, 10.0], [14.7, 10.0], [14.8, 10.0], [14.9, 10.0], [15.0, 10.0], [15.1, 10.0], [15.2, 10.0], [15.3, 10.0], [15.4, 10.0], [15.5, 10.0], [15.6, 10.0], [15.7, 10.0], [15.8, 10.0], [15.9, 10.0], [16.0, 10.0], [16.1, 10.0], [16.2, 10.0], [16.3, 10.0], [16.4, 10.0], [16.5, 10.0], [16.6, 10.0], [16.7, 10.0], [16.8, 11.0], [16.9, 11.0], [17.0, 11.0], [17.1, 11.0], [17.2, 11.0], [17.3, 11.0], [17.4, 11.0], [17.5, 11.0], [17.6, 11.0], [17.7, 11.0], [17.8, 11.0], [17.9, 11.0], [18.0, 11.0], [18.1, 11.0], [18.2, 11.0], [18.3, 11.0], [18.4, 11.0], [18.5, 11.0], [18.6, 11.0], [18.7, 11.0], [18.8, 11.0], [18.9, 11.0], [19.0, 11.0], [19.1, 11.0], [19.2, 11.0], [19.3, 11.0], [19.4, 11.0], [19.5, 11.0], [19.6, 11.0], [19.7, 11.0], [19.8, 11.0], [19.9, 11.0], [20.0, 11.0], [20.1, 11.0], [20.2, 11.0], [20.3, 12.0], [20.4, 12.0], [20.5, 12.0], [20.6, 12.0], [20.7, 12.0], [20.8, 12.0], [20.9, 12.0], [21.0, 12.0], [21.1, 12.0], [21.2, 12.0], [21.3, 12.0], [21.4, 12.0], [21.5, 12.0], [21.6, 12.0], [21.7, 12.0], [21.8, 12.0], [21.9, 12.0], [22.0, 12.0], [22.1, 12.0], [22.2, 12.0], [22.3, 12.0], [22.4, 13.0], [22.5, 13.0], [22.6, 13.0], [22.7, 13.0], [22.8, 13.0], [22.9, 13.0], [23.0, 13.0], [23.1, 13.0], [23.2, 13.0], [23.3, 13.0], [23.4, 13.0], [23.5, 14.0], [23.6, 14.0], [23.7, 14.0], [23.8, 14.0], [23.9, 14.0], [24.0, 14.0], [24.1, 15.0], [24.2, 15.0], [24.3, 15.0], [24.4, 15.0], [24.5, 16.0], [24.6, 16.0], [24.7, 16.0], [24.8, 16.0], [24.9, 17.0], [25.0, 17.0], [25.1, 18.0], [25.2, 19.0], [25.3, 19.0], [25.4, 20.0], [25.5, 20.0], [25.6, 22.0], [25.7, 22.0], [25.8, 22.0], [25.9, 23.0], [26.0, 24.0], [26.1, 24.0], [26.2, 25.0], [26.3, 26.0], [26.4, 27.0], [26.5, 27.0], [26.6, 28.0], [26.7, 28.0], [26.8, 30.0], [26.9, 31.0], [27.0, 31.0], [27.1, 32.0], [27.2, 32.0], [27.3, 33.0], [27.4, 33.0], [27.5, 35.0], [27.6, 35.0], [27.7, 36.0], [27.8, 36.0], [27.9, 37.0], [28.0, 37.0], [28.1, 38.0], [28.2, 38.0], [28.3, 39.0], [28.4, 39.0], [28.5, 40.0], [28.6, 40.0], [28.7, 40.0], [28.8, 41.0], [28.9, 41.0], [29.0, 41.0], [29.1, 41.0], [29.2, 41.0], [29.3, 42.0], [29.4, 42.0], [29.5, 43.0], [29.6, 43.0], [29.7, 43.0], [29.8, 43.0], [29.9, 43.0], [30.0, 44.0], [30.1, 44.0], [30.2, 44.0], [30.3, 44.0], [30.4, 45.0], [30.5, 45.0], [30.6, 45.0], [30.7, 45.0], [30.8, 46.0], [30.9, 46.0], [31.0, 47.0], [31.1, 47.0], [31.2, 47.0], [31.3, 47.0], [31.4, 47.0], [31.5, 48.0], [31.6, 48.0], [31.7, 48.0], [31.8, 48.0], [31.9, 48.0], [32.0, 49.0], [32.1, 49.0], [32.2, 50.0], [32.3, 51.0], [32.4, 51.0], [32.5, 52.0], [32.6, 52.0], [32.7, 53.0], [32.8, 54.0], [32.9, 54.0], [33.0, 54.0], [33.1, 55.0], [33.2, 55.0], [33.3, 56.0], [33.4, 57.0], [33.5, 57.0], [33.6, 58.0], [33.7, 59.0], [33.8, 60.0], [33.9, 61.0], [34.0, 62.0], [34.1, 62.0], [34.2, 63.0], [34.3, 64.0], [34.4, 65.0], [34.5, 67.0], [34.6, 68.0], [34.7, 68.0], [34.8, 70.0], [34.9, 70.0], [35.0, 71.0], [35.1, 72.0], [35.2, 73.0], [35.3, 74.0], [35.4, 75.0], [35.5, 76.0], [35.6, 76.0], [35.7, 78.0], [35.8, 78.0], [35.9, 81.0], [36.0, 82.0], [36.1, 83.0], [36.2, 84.0], [36.3, 84.0], [36.4, 85.0], [36.5, 86.0], [36.6, 87.0], [36.7, 88.0], [36.8, 90.0], [36.9, 91.0], [37.0, 92.0], [37.1, 94.0], [37.2, 95.0], [37.3, 96.0], [37.4, 97.0], [37.5, 100.0], [37.6, 102.0], [37.7, 104.0], [37.8, 105.0], [37.9, 107.0], [38.0, 108.0], [38.1, 110.0], [38.2, 111.0], [38.3, 112.0], [38.4, 114.0], [38.5, 116.0], [38.6, 118.0], [38.7, 119.0], [38.8, 120.0], [38.9, 121.0], [39.0, 123.0], [39.1, 124.0], [39.2, 125.0], [39.3, 126.0], [39.4, 127.0], [39.5, 128.0], [39.6, 129.0], [39.7, 131.0], [39.8, 132.0], [39.9, 134.0], [40.0, 135.0], [40.1, 136.0], [40.2, 137.0], [40.3, 138.0], [40.4, 139.0], [40.5, 140.0], [40.6, 142.0], [40.7, 143.0], [40.8, 144.0], [40.9, 145.0], [41.0, 146.0], [41.1, 147.0], [41.2, 148.0], [41.3, 149.0], [41.4, 150.0], [41.5, 151.0], [41.6, 152.0], [41.7, 153.0], [41.8, 154.0], [41.9, 155.0], [42.0, 156.0], [42.1, 157.0], [42.2, 158.0], [42.3, 159.0], [42.4, 160.0], [42.5, 161.0], [42.6, 162.0], [42.7, 162.0], [42.8, 163.0], [42.9, 164.0], [43.0, 164.0], [43.1, 165.0], [43.2, 166.0], [43.3, 167.0], [43.4, 167.0], [43.5, 168.0], [43.6, 169.0], [43.7, 170.0], [43.8, 171.0], [43.9, 171.0], [44.0, 172.0], [44.1, 172.0], [44.2, 173.0], [44.3, 174.0], [44.4, 174.0], [44.5, 174.0], [44.6, 175.0], [44.7, 176.0], [44.8, 177.0], [44.9, 177.0], [45.0, 178.0], [45.1, 179.0], [45.2, 179.0], [45.3, 181.0], [45.4, 181.0], [45.5, 182.0], [45.6, 182.0], [45.7, 183.0], [45.8, 184.0], [45.9, 185.0], [46.0, 186.0], [46.1, 186.0], [46.2, 187.0], [46.3, 187.0], [46.4, 188.0], [46.5, 189.0], [46.6, 190.0], [46.7, 191.0], [46.8, 192.0], [46.9, 192.0], [47.0, 193.0], [47.1, 194.0], [47.2, 195.0], [47.3, 196.0], [47.4, 196.0], [47.5, 197.0], [47.6, 198.0], [47.7, 198.0], [47.8, 199.0], [47.9, 200.0], [48.0, 201.0], [48.1, 202.0], [48.2, 203.0], [48.3, 204.0], [48.4, 205.0], [48.5, 205.0], [48.6, 206.0], [48.7, 206.0], [48.8, 207.0], [48.9, 208.0], [49.0, 209.0], [49.1, 211.0], [49.2, 212.0], [49.3, 212.0], [49.4, 213.0], [49.5, 214.0], [49.6, 214.0], [49.7, 216.0], [49.8, 217.0], [49.9, 217.0], [50.0, 218.0], [50.1, 218.0], [50.2, 219.0], [50.3, 220.0], [50.4, 221.0], [50.5, 222.0], [50.6, 222.0], [50.7, 223.0], [50.8, 225.0], [50.9, 225.0], [51.0, 226.0], [51.1, 226.0], [51.2, 228.0], [51.3, 228.0], [51.4, 230.0], [51.5, 231.0], [51.6, 231.0], [51.7, 232.0], [51.8, 233.0], [51.9, 234.0], [52.0, 235.0], [52.1, 235.0], [52.2, 236.0], [52.3, 237.0], [52.4, 238.0], [52.5, 239.0], [52.6, 240.0], [52.7, 241.0], [52.8, 242.0], [52.9, 243.0], [53.0, 245.0], [53.1, 245.0], [53.2, 246.0], [53.3, 247.0], [53.4, 248.0], [53.5, 249.0], [53.6, 250.0], [53.7, 250.0], [53.8, 252.0], [53.9, 254.0], [54.0, 255.0], [54.1, 257.0], [54.2, 258.0], [54.3, 259.0], [54.4, 260.0], [54.5, 261.0], [54.6, 262.0], [54.7, 263.0], [54.8, 264.0], [54.9, 265.0], [55.0, 267.0], [55.1, 269.0], [55.2, 271.0], [55.3, 271.0], [55.4, 272.0], [55.5, 273.0], [55.6, 274.0], [55.7, 275.0], [55.8, 276.0], [55.9, 277.0], [56.0, 278.0], [56.1, 280.0], [56.2, 281.0], [56.3, 282.0], [56.4, 283.0], [56.5, 284.0], [56.6, 285.0], [56.7, 285.0], [56.8, 286.0], [56.9, 287.0], [57.0, 289.0], [57.1, 290.0], [57.2, 291.0], [57.3, 292.0], [57.4, 293.0], [57.5, 295.0], [57.6, 295.0], [57.7, 296.0], [57.8, 297.0], [57.9, 298.0], [58.0, 299.0], [58.1, 300.0], [58.2, 301.0], [58.3, 302.0], [58.4, 303.0], [58.5, 303.0], [58.6, 305.0], [58.7, 306.0], [58.8, 308.0], [58.9, 308.0], [59.0, 309.0], [59.1, 311.0], [59.2, 312.0], [59.3, 312.0], [59.4, 313.0], [59.5, 315.0], [59.6, 315.0], [59.7, 316.0], [59.8, 318.0], [59.9, 319.0], [60.0, 320.0], [60.1, 320.0], [60.2, 322.0], [60.3, 323.0], [60.4, 325.0], [60.5, 326.0], [60.6, 327.0], [60.7, 328.0], [60.8, 329.0], [60.9, 330.0], [61.0, 332.0], [61.1, 335.0], [61.2, 336.0], [61.3, 338.0], [61.4, 340.0], [61.5, 341.0], [61.6, 342.0], [61.7, 343.0], [61.8, 344.0], [61.9, 345.0], [62.0, 346.0], [62.1, 347.0], [62.2, 349.0], [62.3, 351.0], [62.4, 352.0], [62.5, 353.0], [62.6, 354.0], [62.7, 356.0], [62.8, 358.0], [62.9, 360.0], [63.0, 361.0], [63.1, 362.0], [63.2, 363.0], [63.3, 364.0], [63.4, 365.0], [63.5, 365.0], [63.6, 366.0], [63.7, 367.0], [63.8, 368.0], [63.9, 369.0], [64.0, 370.0], [64.1, 370.0], [64.2, 372.0], [64.3, 373.0], [64.4, 375.0], [64.5, 376.0], [64.6, 378.0], [64.7, 380.0], [64.8, 381.0], [64.9, 383.0], [65.0, 384.0], [65.1, 385.0], [65.2, 386.0], [65.3, 388.0], [65.4, 389.0], [65.5, 391.0], [65.6, 392.0], [65.7, 393.0], [65.8, 393.0], [65.9, 395.0], [66.0, 396.0], [66.1, 398.0], [66.2, 401.0], [66.3, 402.0], [66.4, 402.0], [66.5, 404.0], [66.6, 404.0], [66.7, 405.0], [66.8, 406.0], [66.9, 407.0], [67.0, 409.0], [67.1, 410.0], [67.2, 411.0], [67.3, 413.0], [67.4, 414.0], [67.5, 415.0], [67.6, 416.0], [67.7, 417.0], [67.8, 418.0], [67.9, 420.0], [68.0, 421.0], [68.1, 422.0], [68.2, 424.0], [68.3, 426.0], [68.4, 429.0], [68.5, 430.0], [68.6, 431.0], [68.7, 433.0], [68.8, 436.0], [68.9, 437.0], [69.0, 437.0], [69.1, 439.0], [69.2, 440.0], [69.3, 441.0], [69.4, 442.0], [69.5, 443.0], [69.6, 445.0], [69.7, 447.0], [69.8, 448.0], [69.9, 449.0], [70.0, 451.0], [70.1, 452.0], [70.2, 453.0], [70.3, 455.0], [70.4, 457.0], [70.5, 460.0], [70.6, 461.0], [70.7, 463.0], [70.8, 464.0], [70.9, 466.0], [71.0, 469.0], [71.1, 470.0], [71.2, 472.0], [71.3, 473.0], [71.4, 476.0], [71.5, 477.0], [71.6, 481.0], [71.7, 485.0], [71.8, 486.0], [71.9, 489.0], [72.0, 491.0], [72.1, 492.0], [72.2, 493.0], [72.3, 496.0], [72.4, 497.0], [72.5, 497.0], [72.6, 499.0], [72.7, 500.0], [72.8, 502.0], [72.9, 503.0], [73.0, 506.0], [73.1, 507.0], [73.2, 510.0], [73.3, 512.0], [73.4, 513.0], [73.5, 514.0], [73.6, 516.0], [73.7, 518.0], [73.8, 518.0], [73.9, 519.0], [74.0, 520.0], [74.1, 523.0], [74.2, 524.0], [74.3, 525.0], [74.4, 527.0], [74.5, 528.0], [74.6, 529.0], [74.7, 531.0], [74.8, 533.0], [74.9, 537.0], [75.0, 538.0], [75.1, 539.0], [75.2, 541.0], [75.3, 542.0], [75.4, 543.0], [75.5, 546.0], [75.6, 549.0], [75.7, 551.0], [75.8, 552.0], [75.9, 554.0], [76.0, 555.0], [76.1, 557.0], [76.2, 558.0], [76.3, 561.0], [76.4, 563.0], [76.5, 565.0], [76.6, 566.0], [76.7, 567.0], [76.8, 568.0], [76.9, 570.0], [77.0, 573.0], [77.1, 575.0], [77.2, 577.0], [77.3, 578.0], [77.4, 579.0], [77.5, 581.0], [77.6, 583.0], [77.7, 585.0], [77.8, 587.0], [77.9, 588.0], [78.0, 590.0], [78.1, 591.0], [78.2, 594.0], [78.3, 597.0], [78.4, 598.0], [78.5, 599.0], [78.6, 603.0], [78.7, 605.0], [78.8, 608.0], [78.9, 611.0], [79.0, 613.0], [79.1, 615.0], [79.2, 616.0], [79.3, 618.0], [79.4, 620.0], [79.5, 623.0], [79.6, 624.0], [79.7, 627.0], [79.8, 630.0], [79.9, 631.0], [80.0, 633.0], [80.1, 636.0], [80.2, 640.0], [80.3, 642.0], [80.4, 645.0], [80.5, 647.0], [80.6, 648.0], [80.7, 650.0], [80.8, 653.0], [80.9, 656.0], [81.0, 658.0], [81.1, 660.0], [81.2, 664.0], [81.3, 666.0], [81.4, 668.0], [81.5, 671.0], [81.6, 673.0], [81.7, 675.0], [81.8, 675.0], [81.9, 678.0], [82.0, 679.0], [82.1, 683.0], [82.2, 684.0], [82.3, 686.0], [82.4, 691.0], [82.5, 695.0], [82.6, 696.0], [82.7, 699.0], [82.8, 701.0], [82.9, 705.0], [83.0, 707.0], [83.1, 709.0], [83.2, 714.0], [83.3, 717.0], [83.4, 722.0], [83.5, 723.0], [83.6, 729.0], [83.7, 730.0], [83.8, 732.0], [83.9, 734.0], [84.0, 737.0], [84.1, 742.0], [84.2, 745.0], [84.3, 747.0], [84.4, 752.0], [84.5, 757.0], [84.6, 757.0], [84.7, 759.0], [84.8, 760.0], [84.9, 762.0], [85.0, 767.0], [85.1, 767.0], [85.2, 770.0], [85.3, 774.0], [85.4, 776.0], [85.5, 780.0], [85.6, 781.0], [85.7, 784.0], [85.8, 787.0], [85.9, 792.0], [86.0, 796.0], [86.1, 797.0], [86.2, 799.0], [86.3, 806.0], [86.4, 808.0], [86.5, 809.0], [86.6, 812.0], [86.7, 816.0], [86.8, 819.0], [86.9, 820.0], [87.0, 824.0], [87.1, 829.0], [87.2, 831.0], [87.3, 834.0], [87.4, 837.0], [87.5, 841.0], [87.6, 843.0], [87.7, 850.0], [87.8, 857.0], [87.9, 861.0], [88.0, 865.0], [88.1, 874.0], [88.2, 882.0], [88.3, 888.0], [88.4, 900.0], [88.5, 903.0], [88.6, 911.0], [88.7, 918.0], [88.8, 922.0], [88.9, 928.0], [89.0, 933.0], [89.1, 938.0], [89.2, 942.0], [89.3, 952.0], [89.4, 956.0], [89.5, 961.0], [89.6, 965.0], [89.7, 976.0], [89.8, 981.0], [89.9, 985.0], [90.0, 993.0], [90.1, 999.0], [90.2, 1002.0], [90.3, 1009.0], [90.4, 1016.0], [90.5, 1019.0], [90.6, 1021.0], [90.7, 1024.0], [90.8, 1029.0], [90.9, 1037.0], [91.0, 1041.0], [91.1, 1054.0], [91.2, 1059.0], [91.3, 1063.0], [91.4, 1066.0], [91.5, 1067.0], [91.6, 1075.0], [91.7, 1082.0], [91.8, 1091.0], [91.9, 1102.0], [92.0, 1112.0], [92.1, 1115.0], [92.2, 1120.0], [92.3, 1128.0], [92.4, 1133.0], [92.5, 1138.0], [92.6, 1141.0], [92.7, 1143.0], [92.8, 1147.0], [92.9, 1150.0], [93.0, 1152.0], [93.1, 1159.0], [93.2, 1166.0], [93.3, 1173.0], [93.4, 1182.0], [93.5, 1186.0], [93.6, 1200.0], [93.7, 1210.0], [93.8, 1214.0], [93.9, 1222.0], [94.0, 1228.0], [94.1, 1236.0], [94.2, 1242.0], [94.3, 1251.0], [94.4, 1254.0], [94.5, 1263.0], [94.6, 1275.0], [94.7, 1286.0], [94.8, 1295.0], [94.9, 1297.0], [95.0, 1312.0], [95.1, 1330.0], [95.2, 1344.0], [95.3, 1347.0], [95.4, 1358.0], [95.5, 1365.0], [95.6, 1371.0], [95.7, 1375.0], [95.8, 1383.0], [95.9, 1392.0], [96.0, 1396.0], [96.1, 1403.0], [96.2, 1409.0], [96.3, 1420.0], [96.4, 1434.0], [96.5, 1438.0], [96.6, 1449.0], [96.7, 1467.0], [96.8, 1474.0], [96.9, 1491.0], [97.0, 1502.0], [97.1, 1527.0], [97.2, 1541.0], [97.3, 1559.0], [97.4, 1576.0], [97.5, 1581.0], [97.6, 1591.0], [97.7, 1598.0], [97.8, 1659.0], [97.9, 1680.0], [98.0, 1705.0], [98.1, 1713.0], [98.2, 1728.0], [98.3, 1752.0], [98.4, 1774.0], [98.5, 1801.0], [98.6, 1808.0], [98.7, 1834.0], [98.8, 1848.0], [98.9, 1906.0], [99.0, 1944.0], [99.1, 2043.0], [99.2, 2117.0], [99.3, 2169.0], [99.4, 2218.0], [99.5, 2311.0], [99.6, 2336.0], [99.7, 2490.0], [99.8, 2897.0], [99.9, 3139.0], [100.0, 3884.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 1972.0, "series": [{"data": [[0.0, 1972.0], [600.0, 222.0], [700.0, 183.0], [800.0, 115.0], [900.0, 94.0], [1000.0, 89.0], [1100.0, 91.0], [1200.0, 69.0], [1300.0, 60.0], [1400.0, 48.0], [1500.0, 39.0], [100.0, 545.0], [1600.0, 13.0], [1700.0, 29.0], [1800.0, 20.0], [1900.0, 8.0], [2000.0, 8.0], [2100.0, 9.0], [2200.0, 6.0], [2300.0, 10.0], [2400.0, 3.0], [2500.0, 2.0], [2700.0, 2.0], [2800.0, 1.0], [2900.0, 2.0], [3000.0, 1.0], [3100.0, 2.0], [200.0, 537.0], [3300.0, 2.0], [3400.0, 1.0], [3800.0, 2.0], [300.0, 428.0], [400.0, 343.0], [500.0, 306.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3800.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 160.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 3826.0, "series": [{"data": [[0.0, 3826.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1276.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 160.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 1.5, "minX": 1.60387608E12, "maxY": 10.0, "series": [{"data": [[1.60387632E12, 1.5], [1.6038762E12, 10.0], [1.60387608E12, 9.959302325581383], [1.60387626E12, 9.981395348837209], [1.60387614E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60387632E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 366.09317835365766, "minX": 1.0, "maxY": 3884.0, "series": [{"data": [[4.0, 1522.5], [8.0, 892.0], [2.0, 3839.0], [1.0, 3092.0], [9.0, 1216.6666666666665], [10.0, 366.09317835365766], [5.0, 3884.0], [6.0, 688.0], [3.0, 3130.0], [7.0, 1356.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.988787533257316, 369.8998479665516]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 17.733333333333334, "minX": 1.60387608E12, "maxY": 1575524.2166666666, "series": [{"data": [[1.60387632E12, 1644.5833333333333], [1.6038762E12, 942548.0833333334], [1.60387608E12, 157784.9], [1.60387626E12, 1562036.3833333333], [1.60387614E12, 1575524.2166666666]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60387632E12, 17.733333333333334], [1.6038762E12, 17159.883333333335], [1.60387608E12, 3165.366666666667], [1.60387626E12, 13438.616666666667], [1.60387614E12, 12937.15]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60387632E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 309.42250639386157, "minX": 1.60387608E12, "maxY": 3465.5, "series": [{"data": [[1.60387632E12, 3465.5], [1.6038762E12, 309.42250639386157], [1.60387608E12, 435.39534883720927], [1.60387626E12, 392.57275747508316], [1.60387614E12, 407.94162087912184]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60387632E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 308.9442455242971, "minX": 1.60387608E12, "maxY": 3465.5, "series": [{"data": [[1.60387632E12, 3465.5], [1.6038762E12, 308.9442455242971], [1.60387608E12, 434.7877906976745], [1.60387626E12, 391.50830564784025], [1.60387614E12, 406.67925824175813]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60387632E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.5, "minX": 1.60387608E12, "maxY": 1.1773255813953478, "series": [{"data": [[1.60387632E12, 0.5], [1.6038762E12, 0.5856777493606135], [1.60387608E12, 1.1773255813953478], [1.60387626E12, 0.5794019933554831], [1.60387614E12, 0.7493131868131856]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60387632E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 4.0, "minX": 1.60387608E12, "maxY": 3884.0, "series": [{"data": [[1.60387632E12, 3839.0], [1.6038762E12, 3416.0], [1.60387608E12, 2504.0], [1.60387626E12, 3884.0], [1.60387614E12, 2988.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60387632E12, 3092.0], [1.6038762E12, 6.0], [1.60387608E12, 7.0], [1.60387626E12, 6.0], [1.60387614E12, 6.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60387632E12, 3092.0], [1.6038762E12, 6.0], [1.60387608E12, 7.0], [1.60387626E12, 6.0], [1.60387614E12, 6.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60387632E12, 3092.0], [1.6038762E12, 6.0], [1.60387608E12, 7.0], [1.60387626E12, 6.0], [1.60387614E12, 6.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60387632E12, 3092.0], [1.6038762E12, 5.0], [1.60387608E12, 6.0], [1.60387626E12, 4.0], [1.60387614E12, 4.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60387632E12, 3465.5], [1.6038762E12, 120.0], [1.60387608E12, 398.0], [1.60387626E12, 233.0], [1.60387614E12, 295.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60387632E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 9.0, "minX": 1.0, "maxY": 3465.5, "series": [{"data": [[3.0, 2303.5], [5.0, 1297.0], [6.0, 1813.0], [7.0, 1092.0], [8.0, 1054.0], [9.0, 647.0], [10.0, 541.0], [11.0, 773.0], [13.0, 695.0], [14.0, 638.5], [15.0, 553.0], [16.0, 566.0], [17.0, 539.0], [18.0, 412.5], [19.0, 501.5], [20.0, 384.0], [21.0, 292.0], [22.0, 380.5], [23.0, 495.0], [24.0, 112.5], [25.0, 226.0], [26.0, 281.5], [27.0, 235.0], [28.0, 276.0], [29.0, 53.5], [30.0, 300.5], [31.0, 180.5], [32.0, 149.0], [33.0, 143.0], [34.0, 209.5], [35.0, 258.5], [37.0, 13.0], [36.0, 225.0], [39.0, 242.0], [41.0, 245.0], [40.0, 207.5], [42.0, 184.0], [43.0, 123.0], [44.0, 101.0], [45.0, 194.0], [49.0, 139.5], [48.0, 67.5], [50.0, 11.0], [51.0, 84.0], [52.0, 175.5], [54.0, 46.5], [58.0, 42.5], [63.0, 67.0], [67.0, 13.0], [66.0, 142.0], [68.0, 113.0], [78.0, 9.0], [76.0, 78.0], [80.0, 88.5], [84.0, 48.0], [89.0, 49.0], [91.0, 11.0], [102.0, 51.5], [1.0, 3465.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 102.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 9.0, "minX": 1.0, "maxY": 3465.5, "series": [{"data": [[3.0, 2303.5], [5.0, 1265.0], [6.0, 1802.5], [7.0, 1091.0], [8.0, 1038.0], [9.0, 646.0], [10.0, 541.0], [11.0, 773.0], [13.0, 692.0], [14.0, 635.0], [15.0, 552.0], [16.0, 565.5], [17.0, 535.5], [18.0, 408.5], [19.0, 501.5], [20.0, 384.0], [21.0, 290.0], [22.0, 380.5], [23.0, 494.5], [24.0, 112.0], [25.0, 226.0], [26.0, 281.0], [27.0, 233.0], [28.0, 275.5], [29.0, 52.5], [30.0, 300.5], [31.0, 180.5], [32.0, 149.0], [33.0, 143.0], [34.0, 209.0], [35.0, 258.0], [37.0, 13.0], [36.0, 225.0], [39.0, 241.0], [41.0, 245.0], [40.0, 207.5], [42.0, 183.5], [43.0, 123.0], [44.0, 100.5], [45.0, 194.0], [49.0, 139.0], [48.0, 67.5], [50.0, 11.0], [51.0, 84.0], [52.0, 175.5], [54.0, 46.0], [58.0, 42.5], [63.0, 67.0], [67.0, 13.0], [66.0, 142.0], [68.0, 112.0], [78.0, 9.0], [76.0, 77.5], [80.0, 88.5], [84.0, 47.0], [89.0, 49.0], [91.0, 11.0], [102.0, 51.5], [1.0, 3465.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 102.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 5.9, "minX": 1.60387608E12, "maxY": 32.583333333333336, "series": [{"data": [[1.6038762E12, 32.583333333333336], [1.60387608E12, 5.9], [1.60387626E12, 24.95], [1.60387614E12, 24.266666666666666]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60387626E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.60387608E12, "maxY": 32.583333333333336, "series": [{"data": [[1.60387632E12, 0.03333333333333333], [1.6038762E12, 32.583333333333336], [1.60387608E12, 5.733333333333333], [1.60387626E12, 25.083333333333332], [1.60387614E12, 24.266666666666666]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60387632E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.60387608E12, "maxY": 32.583333333333336, "series": [{"data": [[1.60387632E12, 0.03333333333333333], [1.6038762E12, 32.583333333333336], [1.60387608E12, 5.733333333333333], [1.60387626E12, 25.083333333333332], [1.60387614E12, 24.266666666666666]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60387632E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.60387608E12, "maxY": 32.583333333333336, "series": [{"data": [[1.60387632E12, 0.03333333333333333], [1.6038762E12, 32.583333333333336], [1.60387608E12, 5.733333333333333], [1.60387626E12, 25.083333333333332], [1.60387614E12, 24.266666666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60387632E12, "title": "Total Transactions Per Second"}},
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

