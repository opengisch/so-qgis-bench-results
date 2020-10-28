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
        data: {"result": {"minY": 32.0, "minX": 0.0, "maxY": 1942.0, "series": [{"data": [[0.0, 32.0], [0.1, 34.0], [0.2, 35.0], [0.3, 37.0], [0.4, 37.0], [0.5, 38.0], [0.6, 38.0], [0.7, 39.0], [0.8, 39.0], [0.9, 39.0], [1.0, 39.0], [1.1, 40.0], [1.2, 40.0], [1.3, 40.0], [1.4, 41.0], [1.5, 41.0], [1.6, 41.0], [1.7, 41.0], [1.8, 42.0], [1.9, 42.0], [2.0, 42.0], [2.1, 42.0], [2.2, 43.0], [2.3, 43.0], [2.4, 43.0], [2.5, 43.0], [2.6, 44.0], [2.7, 44.0], [2.8, 44.0], [2.9, 44.0], [3.0, 44.0], [3.1, 44.0], [3.2, 44.0], [3.3, 45.0], [3.4, 45.0], [3.5, 45.0], [3.6, 46.0], [3.7, 46.0], [3.8, 46.0], [3.9, 46.0], [4.0, 46.0], [4.1, 46.0], [4.2, 46.0], [4.3, 47.0], [4.4, 47.0], [4.5, 47.0], [4.6, 47.0], [4.7, 47.0], [4.8, 48.0], [4.9, 48.0], [5.0, 48.0], [5.1, 48.0], [5.2, 49.0], [5.3, 49.0], [5.4, 49.0], [5.5, 50.0], [5.6, 50.0], [5.7, 51.0], [5.8, 51.0], [5.9, 51.0], [6.0, 51.0], [6.1, 51.0], [6.2, 52.0], [6.3, 52.0], [6.4, 53.0], [6.5, 53.0], [6.6, 53.0], [6.7, 53.0], [6.8, 53.0], [6.9, 54.0], [7.0, 54.0], [7.1, 55.0], [7.2, 55.0], [7.3, 55.0], [7.4, 56.0], [7.5, 56.0], [7.6, 56.0], [7.7, 56.0], [7.8, 57.0], [7.9, 57.0], [8.0, 58.0], [8.1, 58.0], [8.2, 58.0], [8.3, 59.0], [8.4, 59.0], [8.5, 60.0], [8.6, 60.0], [8.7, 61.0], [8.8, 61.0], [8.9, 61.0], [9.0, 62.0], [9.1, 62.0], [9.2, 62.0], [9.3, 63.0], [9.4, 63.0], [9.5, 63.0], [9.6, 64.0], [9.7, 64.0], [9.8, 64.0], [9.9, 65.0], [10.0, 65.0], [10.1, 66.0], [10.2, 66.0], [10.3, 67.0], [10.4, 67.0], [10.5, 68.0], [10.6, 68.0], [10.7, 68.0], [10.8, 69.0], [10.9, 69.0], [11.0, 70.0], [11.1, 70.0], [11.2, 70.0], [11.3, 71.0], [11.4, 71.0], [11.5, 72.0], [11.6, 72.0], [11.7, 72.0], [11.8, 73.0], [11.9, 73.0], [12.0, 73.0], [12.1, 74.0], [12.2, 74.0], [12.3, 74.0], [12.4, 75.0], [12.5, 75.0], [12.6, 75.0], [12.7, 76.0], [12.8, 76.0], [12.9, 76.0], [13.0, 77.0], [13.1, 78.0], [13.2, 78.0], [13.3, 78.0], [13.4, 79.0], [13.5, 79.0], [13.6, 79.0], [13.7, 79.0], [13.8, 80.0], [13.9, 80.0], [14.0, 80.0], [14.1, 80.0], [14.2, 81.0], [14.3, 81.0], [14.4, 81.0], [14.5, 82.0], [14.6, 82.0], [14.7, 82.0], [14.8, 83.0], [14.9, 83.0], [15.0, 83.0], [15.1, 84.0], [15.2, 84.0], [15.3, 84.0], [15.4, 84.0], [15.5, 85.0], [15.6, 85.0], [15.7, 86.0], [15.8, 86.0], [15.9, 87.0], [16.0, 87.0], [16.1, 87.0], [16.2, 88.0], [16.3, 88.0], [16.4, 89.0], [16.5, 89.0], [16.6, 89.0], [16.7, 90.0], [16.8, 90.0], [16.9, 91.0], [17.0, 91.0], [17.1, 91.0], [17.2, 91.0], [17.3, 91.0], [17.4, 92.0], [17.5, 92.0], [17.6, 92.0], [17.7, 93.0], [17.8, 93.0], [17.9, 94.0], [18.0, 94.0], [18.1, 94.0], [18.2, 95.0], [18.3, 95.0], [18.4, 95.0], [18.5, 96.0], [18.6, 96.0], [18.7, 96.0], [18.8, 97.0], [18.9, 97.0], [19.0, 97.0], [19.1, 98.0], [19.2, 98.0], [19.3, 98.0], [19.4, 99.0], [19.5, 99.0], [19.6, 100.0], [19.7, 100.0], [19.8, 101.0], [19.9, 101.0], [20.0, 102.0], [20.1, 103.0], [20.2, 103.0], [20.3, 103.0], [20.4, 104.0], [20.5, 104.0], [20.6, 105.0], [20.7, 105.0], [20.8, 105.0], [20.9, 106.0], [21.0, 106.0], [21.1, 107.0], [21.2, 107.0], [21.3, 109.0], [21.4, 109.0], [21.5, 110.0], [21.6, 110.0], [21.7, 111.0], [21.8, 111.0], [21.9, 112.0], [22.0, 113.0], [22.1, 113.0], [22.2, 114.0], [22.3, 114.0], [22.4, 115.0], [22.5, 116.0], [22.6, 116.0], [22.7, 117.0], [22.8, 118.0], [22.9, 118.0], [23.0, 118.0], [23.1, 119.0], [23.2, 120.0], [23.3, 120.0], [23.4, 120.0], [23.5, 121.0], [23.6, 121.0], [23.7, 122.0], [23.8, 123.0], [23.9, 124.0], [24.0, 124.0], [24.1, 124.0], [24.2, 125.0], [24.3, 125.0], [24.4, 126.0], [24.5, 126.0], [24.6, 127.0], [24.7, 127.0], [24.8, 127.0], [24.9, 128.0], [25.0, 128.0], [25.1, 128.0], [25.2, 129.0], [25.3, 129.0], [25.4, 130.0], [25.5, 131.0], [25.6, 131.0], [25.7, 131.0], [25.8, 132.0], [25.9, 132.0], [26.0, 133.0], [26.1, 133.0], [26.2, 134.0], [26.3, 134.0], [26.4, 135.0], [26.5, 135.0], [26.6, 135.0], [26.7, 136.0], [26.8, 136.0], [26.9, 137.0], [27.0, 137.0], [27.1, 137.0], [27.2, 138.0], [27.3, 138.0], [27.4, 138.0], [27.5, 138.0], [27.6, 139.0], [27.7, 139.0], [27.8, 139.0], [27.9, 140.0], [28.0, 140.0], [28.1, 140.0], [28.2, 141.0], [28.3, 141.0], [28.4, 141.0], [28.5, 141.0], [28.6, 141.0], [28.7, 142.0], [28.8, 142.0], [28.9, 142.0], [29.0, 142.0], [29.1, 142.0], [29.2, 143.0], [29.3, 143.0], [29.4, 143.0], [29.5, 143.0], [29.6, 143.0], [29.7, 144.0], [29.8, 144.0], [29.9, 144.0], [30.0, 144.0], [30.1, 145.0], [30.2, 145.0], [30.3, 146.0], [30.4, 146.0], [30.5, 146.0], [30.6, 146.0], [30.7, 147.0], [30.8, 147.0], [30.9, 147.0], [31.0, 147.0], [31.1, 148.0], [31.2, 148.0], [31.3, 148.0], [31.4, 148.0], [31.5, 149.0], [31.6, 149.0], [31.7, 149.0], [31.8, 150.0], [31.9, 150.0], [32.0, 150.0], [32.1, 150.0], [32.2, 151.0], [32.3, 151.0], [32.4, 152.0], [32.5, 152.0], [32.6, 152.0], [32.7, 152.0], [32.8, 153.0], [32.9, 153.0], [33.0, 153.0], [33.1, 154.0], [33.2, 154.0], [33.3, 155.0], [33.4, 155.0], [33.5, 156.0], [33.6, 156.0], [33.7, 157.0], [33.8, 157.0], [33.9, 158.0], [34.0, 158.0], [34.1, 159.0], [34.2, 159.0], [34.3, 160.0], [34.4, 160.0], [34.5, 161.0], [34.6, 161.0], [34.7, 161.0], [34.8, 162.0], [34.9, 162.0], [35.0, 163.0], [35.1, 163.0], [35.2, 164.0], [35.3, 164.0], [35.4, 165.0], [35.5, 165.0], [35.6, 166.0], [35.7, 167.0], [35.8, 167.0], [35.9, 168.0], [36.0, 169.0], [36.1, 170.0], [36.2, 170.0], [36.3, 171.0], [36.4, 171.0], [36.5, 172.0], [36.6, 172.0], [36.7, 173.0], [36.8, 174.0], [36.9, 174.0], [37.0, 175.0], [37.1, 176.0], [37.2, 176.0], [37.3, 177.0], [37.4, 177.0], [37.5, 178.0], [37.6, 178.0], [37.7, 179.0], [37.8, 180.0], [37.9, 180.0], [38.0, 181.0], [38.1, 182.0], [38.2, 183.0], [38.3, 183.0], [38.4, 183.0], [38.5, 184.0], [38.6, 185.0], [38.7, 185.0], [38.8, 186.0], [38.9, 186.0], [39.0, 187.0], [39.1, 188.0], [39.2, 188.0], [39.3, 189.0], [39.4, 189.0], [39.5, 190.0], [39.6, 190.0], [39.7, 191.0], [39.8, 191.0], [39.9, 192.0], [40.0, 193.0], [40.1, 194.0], [40.2, 194.0], [40.3, 195.0], [40.4, 196.0], [40.5, 197.0], [40.6, 198.0], [40.7, 198.0], [40.8, 199.0], [40.9, 200.0], [41.0, 201.0], [41.1, 201.0], [41.2, 202.0], [41.3, 202.0], [41.4, 203.0], [41.5, 203.0], [41.6, 204.0], [41.7, 205.0], [41.8, 205.0], [41.9, 207.0], [42.0, 208.0], [42.1, 208.0], [42.2, 210.0], [42.3, 210.0], [42.4, 211.0], [42.5, 211.0], [42.6, 212.0], [42.7, 213.0], [42.8, 214.0], [42.9, 214.0], [43.0, 214.0], [43.1, 215.0], [43.2, 216.0], [43.3, 216.0], [43.4, 217.0], [43.5, 217.0], [43.6, 218.0], [43.7, 218.0], [43.8, 219.0], [43.9, 219.0], [44.0, 220.0], [44.1, 221.0], [44.2, 221.0], [44.3, 222.0], [44.4, 222.0], [44.5, 223.0], [44.6, 223.0], [44.7, 224.0], [44.8, 225.0], [44.9, 226.0], [45.0, 226.0], [45.1, 227.0], [45.2, 228.0], [45.3, 229.0], [45.4, 229.0], [45.5, 230.0], [45.6, 230.0], [45.7, 231.0], [45.8, 232.0], [45.9, 232.0], [46.0, 233.0], [46.1, 233.0], [46.2, 234.0], [46.3, 234.0], [46.4, 235.0], [46.5, 236.0], [46.6, 236.0], [46.7, 237.0], [46.8, 237.0], [46.9, 239.0], [47.0, 239.0], [47.1, 241.0], [47.2, 242.0], [47.3, 242.0], [47.4, 243.0], [47.5, 245.0], [47.6, 245.0], [47.7, 246.0], [47.8, 247.0], [47.9, 248.0], [48.0, 249.0], [48.1, 250.0], [48.2, 251.0], [48.3, 252.0], [48.4, 253.0], [48.5, 254.0], [48.6, 255.0], [48.7, 256.0], [48.8, 257.0], [48.9, 257.0], [49.0, 258.0], [49.1, 259.0], [49.2, 260.0], [49.3, 261.0], [49.4, 261.0], [49.5, 263.0], [49.6, 264.0], [49.7, 264.0], [49.8, 265.0], [49.9, 266.0], [50.0, 267.0], [50.1, 269.0], [50.2, 269.0], [50.3, 270.0], [50.4, 271.0], [50.5, 272.0], [50.6, 273.0], [50.7, 273.0], [50.8, 274.0], [50.9, 275.0], [51.0, 275.0], [51.1, 276.0], [51.2, 277.0], [51.3, 277.0], [51.4, 278.0], [51.5, 278.0], [51.6, 279.0], [51.7, 280.0], [51.8, 281.0], [51.9, 282.0], [52.0, 282.0], [52.1, 283.0], [52.2, 284.0], [52.3, 285.0], [52.4, 286.0], [52.5, 287.0], [52.6, 288.0], [52.7, 289.0], [52.8, 289.0], [52.9, 291.0], [53.0, 292.0], [53.1, 293.0], [53.2, 294.0], [53.3, 295.0], [53.4, 296.0], [53.5, 297.0], [53.6, 298.0], [53.7, 300.0], [53.8, 300.0], [53.9, 301.0], [54.0, 301.0], [54.1, 302.0], [54.2, 303.0], [54.3, 304.0], [54.4, 305.0], [54.5, 306.0], [54.6, 308.0], [54.7, 309.0], [54.8, 309.0], [54.9, 311.0], [55.0, 311.0], [55.1, 313.0], [55.2, 314.0], [55.3, 315.0], [55.4, 316.0], [55.5, 316.0], [55.6, 318.0], [55.7, 319.0], [55.8, 321.0], [55.9, 321.0], [56.0, 322.0], [56.1, 323.0], [56.2, 324.0], [56.3, 325.0], [56.4, 326.0], [56.5, 328.0], [56.6, 328.0], [56.7, 329.0], [56.8, 331.0], [56.9, 332.0], [57.0, 333.0], [57.1, 334.0], [57.2, 335.0], [57.3, 336.0], [57.4, 337.0], [57.5, 338.0], [57.6, 339.0], [57.7, 339.0], [57.8, 340.0], [57.9, 341.0], [58.0, 343.0], [58.1, 343.0], [58.2, 344.0], [58.3, 345.0], [58.4, 346.0], [58.5, 346.0], [58.6, 348.0], [58.7, 349.0], [58.8, 350.0], [58.9, 351.0], [59.0, 353.0], [59.1, 355.0], [59.2, 356.0], [59.3, 357.0], [59.4, 358.0], [59.5, 359.0], [59.6, 360.0], [59.7, 361.0], [59.8, 362.0], [59.9, 363.0], [60.0, 364.0], [60.1, 364.0], [60.2, 365.0], [60.3, 366.0], [60.4, 367.0], [60.5, 369.0], [60.6, 370.0], [60.7, 371.0], [60.8, 372.0], [60.9, 373.0], [61.0, 374.0], [61.1, 377.0], [61.2, 378.0], [61.3, 379.0], [61.4, 381.0], [61.5, 382.0], [61.6, 383.0], [61.7, 384.0], [61.8, 386.0], [61.9, 387.0], [62.0, 388.0], [62.1, 389.0], [62.2, 389.0], [62.3, 391.0], [62.4, 392.0], [62.5, 393.0], [62.6, 394.0], [62.7, 395.0], [62.8, 396.0], [62.9, 398.0], [63.0, 399.0], [63.1, 401.0], [63.2, 402.0], [63.3, 403.0], [63.4, 404.0], [63.5, 406.0], [63.6, 407.0], [63.7, 409.0], [63.8, 410.0], [63.9, 411.0], [64.0, 412.0], [64.1, 413.0], [64.2, 414.0], [64.3, 415.0], [64.4, 416.0], [64.5, 416.0], [64.6, 416.0], [64.7, 418.0], [64.8, 419.0], [64.9, 419.0], [65.0, 420.0], [65.1, 421.0], [65.2, 422.0], [65.3, 423.0], [65.4, 424.0], [65.5, 425.0], [65.6, 426.0], [65.7, 427.0], [65.8, 428.0], [65.9, 430.0], [66.0, 432.0], [66.1, 433.0], [66.2, 434.0], [66.3, 434.0], [66.4, 435.0], [66.5, 436.0], [66.6, 438.0], [66.7, 440.0], [66.8, 441.0], [66.9, 443.0], [67.0, 444.0], [67.1, 444.0], [67.2, 446.0], [67.3, 446.0], [67.4, 447.0], [67.5, 448.0], [67.6, 449.0], [67.7, 451.0], [67.8, 451.0], [67.9, 454.0], [68.0, 456.0], [68.1, 457.0], [68.2, 459.0], [68.3, 460.0], [68.4, 462.0], [68.5, 463.0], [68.6, 463.0], [68.7, 465.0], [68.8, 467.0], [68.9, 468.0], [69.0, 469.0], [69.1, 470.0], [69.2, 471.0], [69.3, 472.0], [69.4, 474.0], [69.5, 475.0], [69.6, 476.0], [69.7, 477.0], [69.8, 478.0], [69.9, 478.0], [70.0, 480.0], [70.1, 482.0], [70.2, 482.0], [70.3, 483.0], [70.4, 484.0], [70.5, 486.0], [70.6, 487.0], [70.7, 488.0], [70.8, 489.0], [70.9, 489.0], [71.0, 490.0], [71.1, 492.0], [71.2, 492.0], [71.3, 493.0], [71.4, 494.0], [71.5, 496.0], [71.6, 497.0], [71.7, 500.0], [71.8, 501.0], [71.9, 501.0], [72.0, 502.0], [72.1, 503.0], [72.2, 504.0], [72.3, 505.0], [72.4, 506.0], [72.5, 507.0], [72.6, 509.0], [72.7, 509.0], [72.8, 510.0], [72.9, 511.0], [73.0, 513.0], [73.1, 514.0], [73.2, 514.0], [73.3, 516.0], [73.4, 517.0], [73.5, 518.0], [73.6, 520.0], [73.7, 521.0], [73.8, 521.0], [73.9, 522.0], [74.0, 523.0], [74.1, 524.0], [74.2, 524.0], [74.3, 525.0], [74.4, 526.0], [74.5, 527.0], [74.6, 528.0], [74.7, 528.0], [74.8, 529.0], [74.9, 530.0], [75.0, 531.0], [75.1, 532.0], [75.2, 533.0], [75.3, 534.0], [75.4, 536.0], [75.5, 537.0], [75.6, 537.0], [75.7, 538.0], [75.8, 539.0], [75.9, 540.0], [76.0, 541.0], [76.1, 541.0], [76.2, 542.0], [76.3, 544.0], [76.4, 544.0], [76.5, 546.0], [76.6, 547.0], [76.7, 548.0], [76.8, 550.0], [76.9, 551.0], [77.0, 552.0], [77.1, 553.0], [77.2, 554.0], [77.3, 555.0], [77.4, 557.0], [77.5, 559.0], [77.6, 560.0], [77.7, 561.0], [77.8, 562.0], [77.9, 563.0], [78.0, 564.0], [78.1, 565.0], [78.2, 566.0], [78.3, 566.0], [78.4, 567.0], [78.5, 569.0], [78.6, 569.0], [78.7, 569.0], [78.8, 570.0], [78.9, 572.0], [79.0, 573.0], [79.1, 574.0], [79.2, 574.0], [79.3, 575.0], [79.4, 576.0], [79.5, 577.0], [79.6, 578.0], [79.7, 580.0], [79.8, 582.0], [79.9, 583.0], [80.0, 585.0], [80.1, 588.0], [80.2, 589.0], [80.3, 590.0], [80.4, 591.0], [80.5, 592.0], [80.6, 593.0], [80.7, 594.0], [80.8, 595.0], [80.9, 597.0], [81.0, 598.0], [81.1, 599.0], [81.2, 601.0], [81.3, 601.0], [81.4, 603.0], [81.5, 604.0], [81.6, 605.0], [81.7, 606.0], [81.8, 607.0], [81.9, 608.0], [82.0, 610.0], [82.1, 611.0], [82.2, 612.0], [82.3, 613.0], [82.4, 614.0], [82.5, 615.0], [82.6, 617.0], [82.7, 618.0], [82.8, 619.0], [82.9, 622.0], [83.0, 622.0], [83.1, 624.0], [83.2, 625.0], [83.3, 627.0], [83.4, 629.0], [83.5, 630.0], [83.6, 632.0], [83.7, 633.0], [83.8, 634.0], [83.9, 635.0], [84.0, 637.0], [84.1, 638.0], [84.2, 639.0], [84.3, 640.0], [84.4, 641.0], [84.5, 643.0], [84.6, 644.0], [84.7, 645.0], [84.8, 646.0], [84.9, 647.0], [85.0, 649.0], [85.1, 650.0], [85.2, 651.0], [85.3, 652.0], [85.4, 653.0], [85.5, 654.0], [85.6, 656.0], [85.7, 656.0], [85.8, 658.0], [85.9, 659.0], [86.0, 660.0], [86.1, 660.0], [86.2, 661.0], [86.3, 662.0], [86.4, 663.0], [86.5, 665.0], [86.6, 666.0], [86.7, 668.0], [86.8, 669.0], [86.9, 673.0], [87.0, 673.0], [87.1, 675.0], [87.2, 676.0], [87.3, 678.0], [87.4, 680.0], [87.5, 681.0], [87.6, 682.0], [87.7, 684.0], [87.8, 685.0], [87.9, 687.0], [88.0, 688.0], [88.1, 690.0], [88.2, 691.0], [88.3, 693.0], [88.4, 696.0], [88.5, 698.0], [88.6, 700.0], [88.7, 701.0], [88.8, 703.0], [88.9, 704.0], [89.0, 708.0], [89.1, 712.0], [89.2, 714.0], [89.3, 716.0], [89.4, 717.0], [89.5, 721.0], [89.6, 722.0], [89.7, 725.0], [89.8, 729.0], [89.9, 731.0], [90.0, 733.0], [90.1, 735.0], [90.2, 736.0], [90.3, 739.0], [90.4, 741.0], [90.5, 743.0], [90.6, 745.0], [90.7, 747.0], [90.8, 752.0], [90.9, 754.0], [91.0, 757.0], [91.1, 760.0], [91.2, 762.0], [91.3, 764.0], [91.4, 767.0], [91.5, 769.0], [91.6, 774.0], [91.7, 778.0], [91.8, 779.0], [91.9, 784.0], [92.0, 785.0], [92.1, 787.0], [92.2, 790.0], [92.3, 792.0], [92.4, 794.0], [92.5, 798.0], [92.6, 802.0], [92.7, 806.0], [92.8, 809.0], [92.9, 811.0], [93.0, 815.0], [93.1, 820.0], [93.2, 826.0], [93.3, 828.0], [93.4, 831.0], [93.5, 836.0], [93.6, 840.0], [93.7, 843.0], [93.8, 845.0], [93.9, 853.0], [94.0, 856.0], [94.1, 858.0], [94.2, 862.0], [94.3, 867.0], [94.4, 873.0], [94.5, 878.0], [94.6, 884.0], [94.7, 889.0], [94.8, 895.0], [94.9, 897.0], [95.0, 901.0], [95.1, 903.0], [95.2, 907.0], [95.3, 913.0], [95.4, 921.0], [95.5, 929.0], [95.6, 935.0], [95.7, 936.0], [95.8, 940.0], [95.9, 943.0], [96.0, 948.0], [96.1, 957.0], [96.2, 963.0], [96.3, 967.0], [96.4, 974.0], [96.5, 984.0], [96.6, 1000.0], [96.7, 1005.0], [96.8, 1016.0], [96.9, 1023.0], [97.0, 1028.0], [97.1, 1030.0], [97.2, 1035.0], [97.3, 1039.0], [97.4, 1050.0], [97.5, 1061.0], [97.6, 1065.0], [97.7, 1075.0], [97.8, 1081.0], [97.9, 1088.0], [98.0, 1096.0], [98.1, 1101.0], [98.2, 1105.0], [98.3, 1123.0], [98.4, 1144.0], [98.5, 1149.0], [98.6, 1187.0], [98.7, 1201.0], [98.8, 1221.0], [98.9, 1232.0], [99.0, 1261.0], [99.1, 1299.0], [99.2, 1312.0], [99.3, 1347.0], [99.4, 1373.0], [99.5, 1435.0], [99.6, 1468.0], [99.7, 1524.0], [99.8, 1573.0], [99.9, 1802.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 1105.0, "series": [{"data": [[0.0, 1014.0], [600.0, 388.0], [700.0, 203.0], [200.0, 668.0], [800.0, 127.0], [900.0, 84.0], [1000.0, 78.0], [1100.0, 32.0], [300.0, 483.0], [1200.0, 22.0], [1300.0, 18.0], [1400.0, 10.0], [1500.0, 8.0], [400.0, 450.0], [100.0, 1105.0], [1700.0, 3.0], [1800.0, 6.0], [1900.0, 1.0], [500.0, 490.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1900.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 18.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 3725.0, "series": [{"data": [[0.0, 3725.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1447.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 18.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.930232558139535, "minX": 1.60388244E12, "maxY": 10.0, "series": [{"data": [[1.6038825E12, 10.0], [1.60388256E12, 10.0], [1.60388262E12, 9.930232558139535], [1.60388244E12, 9.998327759197343]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60388262E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 257.0, "minX": 1.0, "maxY": 900.0, "series": [{"data": [[8.0, 291.0], [4.0, 344.0], [2.0, 691.0], [1.0, 900.0], [9.0, 754.3333333333334], [10.0, 352.9044217030311], [5.0, 353.0], [6.0, 315.0], [3.0, 749.0], [7.0, 257.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.99094412331403, 353.34393063583934]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 5047.65, "minX": 1.60388244E12, "maxY": 5959351.65, "series": [{"data": [[1.6038825E12, 5959351.65], [1.60388256E12, 5272434.866666666], [1.60388262E12, 2007003.4666666666], [1.60388244E12, 3672446.033333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6038825E12, 12287.333333333334], [1.60388256E12, 13443.933333333332], [1.60388262E12, 5047.65], [1.60388244E12, 8989.716666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60388262E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 337.6257078142699, "minX": 1.60388244E12, "maxY": 378.16866708780793, "series": [{"data": [[1.6038825E12, 378.16866708780793], [1.60388256E12, 337.6257078142699], [1.60388262E12, 338.8201550387598], [1.60388244E12, 351.5284280936455]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60388262E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 336.4462061155151, "minX": 1.60388244E12, "maxY": 376.5211623499674, "series": [{"data": [[1.6038825E12, 376.5211623499674], [1.60388256E12, 336.4462061155151], [1.60388262E12, 337.71162790697673], [1.60388244E12, 350.03762541806077]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60388262E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.008843967150979161, "minX": 1.60388244E12, "maxY": 0.09782608695652185, "series": [{"data": [[1.6038825E12, 0.008843967150979161], [1.60388256E12, 0.009626274065685178], [1.60388262E12, 0.012403100775193803], [1.60388244E12, 0.09782608695652185]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60388262E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 32.0, "minX": 1.60388244E12, "maxY": 1942.0, "series": [{"data": [[1.6038825E12, 1878.0], [1.60388256E12, 1802.0], [1.60388262E12, 1942.0], [1.60388244E12, 1809.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6038825E12, 37.25599962234497], [1.60388256E12, 40.0], [1.60388262E12, 39.0], [1.60388244E12, 43.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6038825E12, 38.0], [1.60388256E12, 40.0], [1.60388262E12, 39.0], [1.60388244E12, 43.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6038825E12, 38.0], [1.60388256E12, 40.0], [1.60388262E12, 39.0], [1.60388244E12, 43.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.6038825E12, 32.0], [1.60388256E12, 32.0], [1.60388262E12, 37.0], [1.60388244E12, 35.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6038825E12, 301.0], [1.60388256E12, 252.5], [1.60388262E12, 209.0], [1.60388244E12, 282.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60388262E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 71.0, "minX": 3.0, "maxY": 748.5, "series": [{"data": [[33.0, 291.5], [32.0, 284.5], [35.0, 229.0], [34.0, 209.0], [36.0, 232.5], [37.0, 143.0], [39.0, 162.0], [38.0, 278.0], [40.0, 150.0], [41.0, 124.0], [42.0, 133.5], [43.0, 211.0], [44.0, 143.0], [3.0, 660.0], [49.0, 71.0], [48.0, 99.0], [50.0, 140.5], [52.0, 102.0], [54.0, 133.5], [55.0, 114.5], [57.0, 91.0], [60.0, 113.5], [61.0, 155.0], [63.0, 105.0], [74.0, 118.0], [12.0, 748.5], [14.0, 591.0], [15.0, 631.0], [16.0, 552.0], [17.0, 484.0], [18.0, 505.5], [19.0, 513.0], [20.0, 504.0], [21.0, 478.0], [22.0, 417.0], [23.0, 405.5], [24.0, 374.5], [25.0, 271.0], [26.0, 366.5], [27.0, 363.5], [28.0, 286.0], [29.0, 246.0], [30.0, 268.5], [31.0, 247.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 74.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 71.0, "minX": 3.0, "maxY": 740.5, "series": [{"data": [[33.0, 291.0], [32.0, 281.0], [35.0, 228.0], [34.0, 209.0], [36.0, 230.5], [37.0, 143.0], [39.0, 160.0], [38.0, 277.5], [40.0, 150.0], [41.0, 124.0], [42.0, 133.5], [43.0, 210.0], [44.0, 142.5], [3.0, 654.0], [49.0, 71.0], [48.0, 99.0], [50.0, 139.5], [52.0, 102.0], [54.0, 133.5], [55.0, 114.5], [57.0, 90.0], [60.0, 113.5], [61.0, 155.0], [63.0, 98.0], [74.0, 117.5], [12.0, 740.5], [14.0, 586.5], [15.0, 628.0], [16.0, 547.0], [17.0, 481.0], [18.0, 505.0], [19.0, 511.0], [20.0, 502.5], [21.0, 478.0], [22.0, 416.5], [23.0, 405.0], [24.0, 373.5], [25.0, 271.0], [26.0, 366.0], [27.0, 362.5], [28.0, 284.0], [29.0, 246.0], [30.0, 266.5], [31.0, 246.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 74.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 10.583333333333334, "minX": 1.60388244E12, "maxY": 29.433333333333334, "series": [{"data": [[1.6038825E12, 26.383333333333333], [1.60388256E12, 29.433333333333334], [1.60388262E12, 10.583333333333334], [1.60388244E12, 20.1]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60388262E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 10.75, "minX": 1.60388244E12, "maxY": 29.433333333333334, "series": [{"data": [[1.6038825E12, 26.383333333333333], [1.60388256E12, 29.433333333333334], [1.60388262E12, 10.75], [1.60388244E12, 19.933333333333334]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60388262E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 10.75, "minX": 1.60388244E12, "maxY": 29.433333333333334, "series": [{"data": [[1.6038825E12, 26.383333333333333], [1.60388256E12, 29.433333333333334], [1.60388262E12, 10.75], [1.60388244E12, 19.933333333333334]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60388262E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 10.75, "minX": 1.60388244E12, "maxY": 29.433333333333334, "series": [{"data": [[1.6038825E12, 26.383333333333333], [1.60388256E12, 29.433333333333334], [1.60388262E12, 10.75], [1.60388244E12, 19.933333333333334]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60388262E12, "title": "Total Transactions Per Second"}},
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

