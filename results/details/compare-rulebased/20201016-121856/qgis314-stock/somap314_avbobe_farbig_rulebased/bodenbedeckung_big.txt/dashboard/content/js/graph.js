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
        data: {"result": {"minY": 31.0, "minX": 0.0, "maxY": 2196.0, "series": [{"data": [[0.0, 31.0], [0.1, 33.0], [0.2, 33.0], [0.3, 35.0], [0.4, 36.0], [0.5, 37.0], [0.6, 38.0], [0.7, 39.0], [0.8, 39.0], [0.9, 39.0], [1.0, 40.0], [1.1, 40.0], [1.2, 41.0], [1.3, 41.0], [1.4, 41.0], [1.5, 42.0], [1.6, 42.0], [1.7, 43.0], [1.8, 43.0], [1.9, 43.0], [2.0, 43.0], [2.1, 43.0], [2.2, 44.0], [2.3, 44.0], [2.4, 44.0], [2.5, 44.0], [2.6, 44.0], [2.7, 45.0], [2.8, 45.0], [2.9, 45.0], [3.0, 45.0], [3.1, 45.0], [3.2, 46.0], [3.3, 46.0], [3.4, 46.0], [3.5, 47.0], [3.6, 47.0], [3.7, 47.0], [3.8, 47.0], [3.9, 48.0], [4.0, 48.0], [4.1, 48.0], [4.2, 48.0], [4.3, 48.0], [4.4, 48.0], [4.5, 48.0], [4.6, 48.0], [4.7, 49.0], [4.8, 49.0], [4.9, 49.0], [5.0, 50.0], [5.1, 50.0], [5.2, 50.0], [5.3, 50.0], [5.4, 51.0], [5.5, 51.0], [5.6, 51.0], [5.7, 52.0], [5.8, 52.0], [5.9, 52.0], [6.0, 52.0], [6.1, 53.0], [6.2, 53.0], [6.3, 53.0], [6.4, 54.0], [6.5, 54.0], [6.6, 54.0], [6.7, 55.0], [6.8, 55.0], [6.9, 55.0], [7.0, 56.0], [7.1, 56.0], [7.2, 57.0], [7.3, 57.0], [7.4, 57.0], [7.5, 58.0], [7.6, 58.0], [7.7, 58.0], [7.8, 59.0], [7.9, 59.0], [8.0, 59.0], [8.1, 60.0], [8.2, 60.0], [8.3, 60.0], [8.4, 60.0], [8.5, 61.0], [8.6, 61.0], [8.7, 62.0], [8.8, 62.0], [8.9, 62.0], [9.0, 63.0], [9.1, 63.0], [9.2, 63.0], [9.3, 64.0], [9.4, 64.0], [9.5, 64.0], [9.6, 65.0], [9.7, 65.0], [9.8, 65.0], [9.9, 66.0], [10.0, 66.0], [10.1, 67.0], [10.2, 67.0], [10.3, 67.0], [10.4, 67.0], [10.5, 67.0], [10.6, 68.0], [10.7, 68.0], [10.8, 68.0], [10.9, 69.0], [11.0, 69.0], [11.1, 70.0], [11.2, 70.0], [11.3, 70.0], [11.4, 71.0], [11.5, 71.0], [11.6, 71.0], [11.7, 72.0], [11.8, 72.0], [11.9, 72.0], [12.0, 73.0], [12.1, 73.0], [12.2, 73.0], [12.3, 73.0], [12.4, 74.0], [12.5, 74.0], [12.6, 74.0], [12.7, 75.0], [12.8, 76.0], [12.9, 76.0], [13.0, 76.0], [13.1, 76.0], [13.2, 77.0], [13.3, 77.0], [13.4, 78.0], [13.5, 78.0], [13.6, 79.0], [13.7, 79.0], [13.8, 80.0], [13.9, 80.0], [14.0, 80.0], [14.1, 80.0], [14.2, 81.0], [14.3, 81.0], [14.4, 81.0], [14.5, 81.0], [14.6, 82.0], [14.7, 82.0], [14.8, 82.0], [14.9, 83.0], [15.0, 83.0], [15.1, 84.0], [15.2, 84.0], [15.3, 84.0], [15.4, 84.0], [15.5, 85.0], [15.6, 85.0], [15.7, 85.0], [15.8, 85.0], [15.9, 85.0], [16.0, 86.0], [16.1, 86.0], [16.2, 86.0], [16.3, 87.0], [16.4, 87.0], [16.5, 87.0], [16.6, 87.0], [16.7, 88.0], [16.8, 88.0], [16.9, 89.0], [17.0, 89.0], [17.1, 89.0], [17.2, 89.0], [17.3, 90.0], [17.4, 90.0], [17.5, 90.0], [17.6, 90.0], [17.7, 91.0], [17.8, 91.0], [17.9, 91.0], [18.0, 92.0], [18.1, 92.0], [18.2, 92.0], [18.3, 93.0], [18.4, 93.0], [18.5, 93.0], [18.6, 94.0], [18.7, 94.0], [18.8, 95.0], [18.9, 95.0], [19.0, 95.0], [19.1, 96.0], [19.2, 96.0], [19.3, 96.0], [19.4, 97.0], [19.5, 97.0], [19.6, 98.0], [19.7, 98.0], [19.8, 98.0], [19.9, 99.0], [20.0, 99.0], [20.1, 99.0], [20.2, 99.0], [20.3, 100.0], [20.4, 100.0], [20.5, 101.0], [20.6, 102.0], [20.7, 102.0], [20.8, 103.0], [20.9, 103.0], [21.0, 104.0], [21.1, 104.0], [21.2, 105.0], [21.3, 105.0], [21.4, 105.0], [21.5, 106.0], [21.6, 106.0], [21.7, 107.0], [21.8, 107.0], [21.9, 108.0], [22.0, 108.0], [22.1, 109.0], [22.2, 109.0], [22.3, 110.0], [22.4, 110.0], [22.5, 111.0], [22.6, 111.0], [22.7, 112.0], [22.8, 112.0], [22.9, 113.0], [23.0, 114.0], [23.1, 114.0], [23.2, 115.0], [23.3, 115.0], [23.4, 115.0], [23.5, 115.0], [23.6, 116.0], [23.7, 117.0], [23.8, 117.0], [23.9, 118.0], [24.0, 119.0], [24.1, 119.0], [24.2, 120.0], [24.3, 121.0], [24.4, 121.0], [24.5, 122.0], [24.6, 123.0], [24.7, 123.0], [24.8, 124.0], [24.9, 124.0], [25.0, 124.0], [25.1, 125.0], [25.2, 125.0], [25.3, 126.0], [25.4, 127.0], [25.5, 127.0], [25.6, 128.0], [25.7, 128.0], [25.8, 129.0], [25.9, 129.0], [26.0, 130.0], [26.1, 131.0], [26.2, 132.0], [26.3, 132.0], [26.4, 133.0], [26.5, 133.0], [26.6, 134.0], [26.7, 134.0], [26.8, 134.0], [26.9, 135.0], [27.0, 136.0], [27.1, 136.0], [27.2, 136.0], [27.3, 137.0], [27.4, 137.0], [27.5, 137.0], [27.6, 138.0], [27.7, 139.0], [27.8, 139.0], [27.9, 139.0], [28.0, 139.0], [28.1, 140.0], [28.2, 140.0], [28.3, 140.0], [28.4, 140.0], [28.5, 141.0], [28.6, 141.0], [28.7, 141.0], [28.8, 142.0], [28.9, 142.0], [29.0, 142.0], [29.1, 143.0], [29.2, 143.0], [29.3, 143.0], [29.4, 144.0], [29.5, 144.0], [29.6, 144.0], [29.7, 144.0], [29.8, 145.0], [29.9, 145.0], [30.0, 145.0], [30.1, 145.0], [30.2, 146.0], [30.3, 146.0], [30.4, 146.0], [30.5, 147.0], [30.6, 147.0], [30.7, 147.0], [30.8, 148.0], [30.9, 148.0], [31.0, 148.0], [31.1, 149.0], [31.2, 149.0], [31.3, 149.0], [31.4, 150.0], [31.5, 150.0], [31.6, 150.0], [31.7, 151.0], [31.8, 151.0], [31.9, 152.0], [32.0, 152.0], [32.1, 153.0], [32.2, 154.0], [32.3, 154.0], [32.4, 154.0], [32.5, 155.0], [32.6, 155.0], [32.7, 155.0], [32.8, 156.0], [32.9, 156.0], [33.0, 156.0], [33.1, 157.0], [33.2, 157.0], [33.3, 158.0], [33.4, 158.0], [33.5, 158.0], [33.6, 159.0], [33.7, 159.0], [33.8, 160.0], [33.9, 161.0], [34.0, 161.0], [34.1, 161.0], [34.2, 163.0], [34.3, 163.0], [34.4, 164.0], [34.5, 164.0], [34.6, 165.0], [34.7, 166.0], [34.8, 166.0], [34.9, 167.0], [35.0, 167.0], [35.1, 168.0], [35.2, 169.0], [35.3, 169.0], [35.4, 170.0], [35.5, 171.0], [35.6, 171.0], [35.7, 172.0], [35.8, 172.0], [35.9, 173.0], [36.0, 174.0], [36.1, 174.0], [36.2, 175.0], [36.3, 176.0], [36.4, 177.0], [36.5, 178.0], [36.6, 178.0], [36.7, 179.0], [36.8, 179.0], [36.9, 180.0], [37.0, 181.0], [37.1, 182.0], [37.2, 182.0], [37.3, 183.0], [37.4, 183.0], [37.5, 184.0], [37.6, 184.0], [37.7, 185.0], [37.8, 186.0], [37.9, 186.0], [38.0, 187.0], [38.1, 188.0], [38.2, 189.0], [38.3, 189.0], [38.4, 190.0], [38.5, 190.0], [38.6, 191.0], [38.7, 191.0], [38.8, 192.0], [38.9, 193.0], [39.0, 195.0], [39.1, 195.0], [39.2, 196.0], [39.3, 196.0], [39.4, 197.0], [39.5, 197.0], [39.6, 198.0], [39.7, 198.0], [39.8, 199.0], [39.9, 200.0], [40.0, 200.0], [40.1, 202.0], [40.2, 202.0], [40.3, 202.0], [40.4, 203.0], [40.5, 204.0], [40.6, 204.0], [40.7, 205.0], [40.8, 206.0], [40.9, 207.0], [41.0, 207.0], [41.1, 208.0], [41.2, 209.0], [41.3, 209.0], [41.4, 210.0], [41.5, 210.0], [41.6, 211.0], [41.7, 212.0], [41.8, 212.0], [41.9, 213.0], [42.0, 213.0], [42.1, 214.0], [42.2, 215.0], [42.3, 216.0], [42.4, 217.0], [42.5, 217.0], [42.6, 218.0], [42.7, 219.0], [42.8, 220.0], [42.9, 220.0], [43.0, 221.0], [43.1, 222.0], [43.2, 223.0], [43.3, 223.0], [43.4, 224.0], [43.5, 224.0], [43.6, 225.0], [43.7, 225.0], [43.8, 226.0], [43.9, 226.0], [44.0, 227.0], [44.1, 228.0], [44.2, 228.0], [44.3, 229.0], [44.4, 230.0], [44.5, 231.0], [44.6, 231.0], [44.7, 232.0], [44.8, 233.0], [44.9, 233.0], [45.0, 233.0], [45.1, 234.0], [45.2, 234.0], [45.3, 235.0], [45.4, 235.0], [45.5, 236.0], [45.6, 236.0], [45.7, 237.0], [45.8, 238.0], [45.9, 239.0], [46.0, 240.0], [46.1, 242.0], [46.2, 242.0], [46.3, 243.0], [46.4, 244.0], [46.5, 244.0], [46.6, 245.0], [46.7, 246.0], [46.8, 247.0], [46.9, 247.0], [47.0, 248.0], [47.1, 248.0], [47.2, 249.0], [47.3, 249.0], [47.4, 251.0], [47.5, 252.0], [47.6, 252.0], [47.7, 254.0], [47.8, 255.0], [47.9, 256.0], [48.0, 257.0], [48.1, 258.0], [48.2, 259.0], [48.3, 261.0], [48.4, 261.0], [48.5, 262.0], [48.6, 263.0], [48.7, 264.0], [48.8, 264.0], [48.9, 266.0], [49.0, 267.0], [49.1, 268.0], [49.2, 269.0], [49.3, 269.0], [49.4, 271.0], [49.5, 271.0], [49.6, 272.0], [49.7, 273.0], [49.8, 273.0], [49.9, 275.0], [50.0, 276.0], [50.1, 277.0], [50.2, 278.0], [50.3, 279.0], [50.4, 279.0], [50.5, 281.0], [50.6, 282.0], [50.7, 283.0], [50.8, 283.0], [50.9, 284.0], [51.0, 285.0], [51.1, 286.0], [51.2, 287.0], [51.3, 288.0], [51.4, 290.0], [51.5, 290.0], [51.6, 291.0], [51.7, 292.0], [51.8, 294.0], [51.9, 295.0], [52.0, 296.0], [52.1, 296.0], [52.2, 297.0], [52.3, 298.0], [52.4, 298.0], [52.5, 299.0], [52.6, 299.0], [52.7, 300.0], [52.8, 300.0], [52.9, 301.0], [53.0, 302.0], [53.1, 302.0], [53.2, 303.0], [53.3, 305.0], [53.4, 306.0], [53.5, 307.0], [53.6, 307.0], [53.7, 309.0], [53.8, 310.0], [53.9, 310.0], [54.0, 312.0], [54.1, 312.0], [54.2, 313.0], [54.3, 314.0], [54.4, 315.0], [54.5, 316.0], [54.6, 316.0], [54.7, 318.0], [54.8, 320.0], [54.9, 321.0], [55.0, 323.0], [55.1, 323.0], [55.2, 325.0], [55.3, 327.0], [55.4, 327.0], [55.5, 329.0], [55.6, 330.0], [55.7, 331.0], [55.8, 333.0], [55.9, 334.0], [56.0, 335.0], [56.1, 336.0], [56.2, 337.0], [56.3, 338.0], [56.4, 340.0], [56.5, 341.0], [56.6, 342.0], [56.7, 344.0], [56.8, 344.0], [56.9, 345.0], [57.0, 346.0], [57.1, 347.0], [57.2, 348.0], [57.3, 349.0], [57.4, 350.0], [57.5, 351.0], [57.6, 352.0], [57.7, 352.0], [57.8, 353.0], [57.9, 354.0], [58.0, 355.0], [58.1, 356.0], [58.2, 356.0], [58.3, 358.0], [58.4, 359.0], [58.5, 360.0], [58.6, 362.0], [58.7, 363.0], [58.8, 363.0], [58.9, 365.0], [59.0, 366.0], [59.1, 367.0], [59.2, 368.0], [59.3, 369.0], [59.4, 369.0], [59.5, 371.0], [59.6, 372.0], [59.7, 374.0], [59.8, 376.0], [59.9, 377.0], [60.0, 378.0], [60.1, 380.0], [60.2, 381.0], [60.3, 382.0], [60.4, 384.0], [60.5, 386.0], [60.6, 387.0], [60.7, 389.0], [60.8, 390.0], [60.9, 390.0], [61.0, 391.0], [61.1, 392.0], [61.2, 393.0], [61.3, 394.0], [61.4, 395.0], [61.5, 396.0], [61.6, 397.0], [61.7, 398.0], [61.8, 399.0], [61.9, 400.0], [62.0, 402.0], [62.1, 403.0], [62.2, 404.0], [62.3, 405.0], [62.4, 406.0], [62.5, 409.0], [62.6, 409.0], [62.7, 411.0], [62.8, 411.0], [62.9, 412.0], [63.0, 414.0], [63.1, 416.0], [63.2, 417.0], [63.3, 417.0], [63.4, 419.0], [63.5, 419.0], [63.6, 421.0], [63.7, 422.0], [63.8, 423.0], [63.9, 424.0], [64.0, 426.0], [64.1, 428.0], [64.2, 429.0], [64.3, 429.0], [64.4, 432.0], [64.5, 433.0], [64.6, 435.0], [64.7, 435.0], [64.8, 436.0], [64.9, 437.0], [65.0, 439.0], [65.1, 439.0], [65.2, 441.0], [65.3, 442.0], [65.4, 442.0], [65.5, 444.0], [65.6, 444.0], [65.7, 445.0], [65.8, 447.0], [65.9, 448.0], [66.0, 448.0], [66.1, 450.0], [66.2, 450.0], [66.3, 452.0], [66.4, 453.0], [66.5, 454.0], [66.6, 455.0], [66.7, 456.0], [66.8, 458.0], [66.9, 460.0], [67.0, 461.0], [67.1, 462.0], [67.2, 462.0], [67.3, 464.0], [67.4, 465.0], [67.5, 466.0], [67.6, 467.0], [67.7, 468.0], [67.8, 469.0], [67.9, 470.0], [68.0, 470.0], [68.1, 472.0], [68.2, 473.0], [68.3, 474.0], [68.4, 475.0], [68.5, 476.0], [68.6, 477.0], [68.7, 478.0], [68.8, 479.0], [68.9, 480.0], [69.0, 481.0], [69.1, 483.0], [69.2, 484.0], [69.3, 486.0], [69.4, 487.0], [69.5, 488.0], [69.6, 489.0], [69.7, 490.0], [69.8, 491.0], [69.9, 493.0], [70.0, 494.0], [70.1, 495.0], [70.2, 496.0], [70.3, 497.0], [70.4, 498.0], [70.5, 498.0], [70.6, 500.0], [70.7, 500.0], [70.8, 502.0], [70.9, 503.0], [71.0, 504.0], [71.1, 505.0], [71.2, 506.0], [71.3, 506.0], [71.4, 507.0], [71.5, 508.0], [71.6, 509.0], [71.7, 510.0], [71.8, 511.0], [71.9, 511.0], [72.0, 512.0], [72.1, 512.0], [72.2, 513.0], [72.3, 515.0], [72.4, 516.0], [72.5, 517.0], [72.6, 518.0], [72.7, 518.0], [72.8, 520.0], [72.9, 520.0], [73.0, 521.0], [73.1, 523.0], [73.2, 524.0], [73.3, 524.0], [73.4, 525.0], [73.5, 526.0], [73.6, 527.0], [73.7, 528.0], [73.8, 529.0], [73.9, 530.0], [74.0, 530.0], [74.1, 531.0], [74.2, 532.0], [74.3, 533.0], [74.4, 534.0], [74.5, 535.0], [74.6, 535.0], [74.7, 537.0], [74.8, 538.0], [74.9, 539.0], [75.0, 539.0], [75.1, 540.0], [75.2, 541.0], [75.3, 542.0], [75.4, 544.0], [75.5, 544.0], [75.6, 545.0], [75.7, 546.0], [75.8, 548.0], [75.9, 548.0], [76.0, 550.0], [76.1, 551.0], [76.2, 552.0], [76.3, 553.0], [76.4, 554.0], [76.5, 555.0], [76.6, 556.0], [76.7, 557.0], [76.8, 558.0], [76.9, 558.0], [77.0, 560.0], [77.1, 561.0], [77.2, 561.0], [77.3, 562.0], [77.4, 563.0], [77.5, 564.0], [77.6, 564.0], [77.7, 566.0], [77.8, 566.0], [77.9, 567.0], [78.0, 568.0], [78.1, 569.0], [78.2, 570.0], [78.3, 572.0], [78.4, 574.0], [78.5, 575.0], [78.6, 576.0], [78.7, 576.0], [78.8, 577.0], [78.9, 578.0], [79.0, 580.0], [79.1, 581.0], [79.2, 583.0], [79.3, 584.0], [79.4, 584.0], [79.5, 586.0], [79.6, 588.0], [79.7, 590.0], [79.8, 591.0], [79.9, 592.0], [80.0, 594.0], [80.1, 594.0], [80.2, 597.0], [80.3, 599.0], [80.4, 601.0], [80.5, 603.0], [80.6, 604.0], [80.7, 605.0], [80.8, 606.0], [80.9, 607.0], [81.0, 607.0], [81.1, 609.0], [81.2, 611.0], [81.3, 612.0], [81.4, 613.0], [81.5, 614.0], [81.6, 615.0], [81.7, 616.0], [81.8, 618.0], [81.9, 619.0], [82.0, 620.0], [82.1, 620.0], [82.2, 623.0], [82.3, 625.0], [82.4, 627.0], [82.5, 628.0], [82.6, 629.0], [82.7, 631.0], [82.8, 634.0], [82.9, 635.0], [83.0, 636.0], [83.1, 637.0], [83.2, 639.0], [83.3, 640.0], [83.4, 642.0], [83.5, 642.0], [83.6, 643.0], [83.7, 644.0], [83.8, 646.0], [83.9, 648.0], [84.0, 650.0], [84.1, 651.0], [84.2, 653.0], [84.3, 654.0], [84.4, 657.0], [84.5, 659.0], [84.6, 660.0], [84.7, 661.0], [84.8, 663.0], [84.9, 665.0], [85.0, 666.0], [85.1, 668.0], [85.2, 669.0], [85.3, 671.0], [85.4, 672.0], [85.5, 674.0], [85.6, 676.0], [85.7, 677.0], [85.8, 679.0], [85.9, 679.0], [86.0, 681.0], [86.1, 684.0], [86.2, 686.0], [86.3, 688.0], [86.4, 689.0], [86.5, 690.0], [86.6, 692.0], [86.7, 693.0], [86.8, 694.0], [86.9, 697.0], [87.0, 698.0], [87.1, 700.0], [87.2, 703.0], [87.3, 705.0], [87.4, 708.0], [87.5, 709.0], [87.6, 711.0], [87.7, 712.0], [87.8, 714.0], [87.9, 716.0], [88.0, 719.0], [88.1, 720.0], [88.2, 722.0], [88.3, 723.0], [88.4, 725.0], [88.5, 727.0], [88.6, 730.0], [88.7, 733.0], [88.8, 734.0], [88.9, 736.0], [89.0, 739.0], [89.1, 740.0], [89.2, 742.0], [89.3, 746.0], [89.4, 748.0], [89.5, 750.0], [89.6, 755.0], [89.7, 756.0], [89.8, 758.0], [89.9, 761.0], [90.0, 762.0], [90.1, 765.0], [90.2, 769.0], [90.3, 771.0], [90.4, 773.0], [90.5, 777.0], [90.6, 780.0], [90.7, 781.0], [90.8, 783.0], [90.9, 786.0], [91.0, 789.0], [91.1, 793.0], [91.2, 797.0], [91.3, 799.0], [91.4, 801.0], [91.5, 803.0], [91.6, 805.0], [91.7, 809.0], [91.8, 810.0], [91.9, 813.0], [92.0, 818.0], [92.1, 820.0], [92.2, 824.0], [92.3, 826.0], [92.4, 830.0], [92.5, 833.0], [92.6, 838.0], [92.7, 840.0], [92.8, 844.0], [92.9, 848.0], [93.0, 850.0], [93.1, 854.0], [93.2, 858.0], [93.3, 865.0], [93.4, 870.0], [93.5, 872.0], [93.6, 874.0], [93.7, 877.0], [93.8, 882.0], [93.9, 887.0], [94.0, 889.0], [94.1, 891.0], [94.2, 896.0], [94.3, 900.0], [94.4, 903.0], [94.5, 906.0], [94.6, 909.0], [94.7, 912.0], [94.8, 916.0], [94.9, 922.0], [95.0, 927.0], [95.1, 932.0], [95.2, 939.0], [95.3, 949.0], [95.4, 950.0], [95.5, 953.0], [95.6, 957.0], [95.7, 963.0], [95.8, 966.0], [95.9, 970.0], [96.0, 975.0], [96.1, 984.0], [96.2, 994.0], [96.3, 1000.0], [96.4, 1010.0], [96.5, 1014.0], [96.6, 1018.0], [96.7, 1025.0], [96.8, 1032.0], [96.9, 1040.0], [97.0, 1050.0], [97.1, 1054.0], [97.2, 1062.0], [97.3, 1067.0], [97.4, 1075.0], [97.5, 1083.0], [97.6, 1089.0], [97.7, 1107.0], [97.8, 1115.0], [97.9, 1122.0], [98.0, 1133.0], [98.1, 1151.0], [98.2, 1169.0], [98.3, 1176.0], [98.4, 1191.0], [98.5, 1205.0], [98.6, 1211.0], [98.7, 1228.0], [98.8, 1241.0], [98.9, 1270.0], [99.0, 1297.0], [99.1, 1314.0], [99.2, 1339.0], [99.3, 1366.0], [99.4, 1432.0], [99.5, 1466.0], [99.6, 1579.0], [99.7, 1610.0], [99.8, 1697.0], [99.9, 1813.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 1049.0, "series": [{"data": [[0.0, 1049.0], [2100.0, 2.0], [600.0, 346.0], [700.0, 223.0], [800.0, 154.0], [200.0, 661.0], [900.0, 103.0], [1000.0, 71.0], [1100.0, 44.0], [300.0, 479.0], [1200.0, 28.0], [1300.0, 16.0], [1400.0, 13.0], [1500.0, 3.0], [400.0, 453.0], [100.0, 1021.0], [1600.0, 9.0], [1700.0, 3.0], [1800.0, 3.0], [500.0, 508.0], [2000.0, 1.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 2100.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 21.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 3670.0, "series": [{"data": [[0.0, 3670.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1499.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 21.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.959964412811386, "minX": 1.6028511E12, "maxY": 10.0, "series": [{"data": [[1.60285122E12, 10.0], [1.6028511E12, 10.0], [1.60285128E12, 9.959964412811386], [1.60285116E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60285128E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 135.0, "minX": 1.0, "maxY": 1081.0, "series": [{"data": [[8.0, 225.0], [4.0, 399.0], [2.0, 472.0], [1.0, 1081.0], [9.0, 422.0], [10.0, 362.98436595251945], [5.0, 532.0], [6.0, 298.0], [3.0, 442.0], [7.0, 135.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.991329479768785, 363.12678227360374]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 6779.216666666666, "minX": 1.6028511E12, "maxY": 5445501.7, "series": [{"data": [[1.60285122E12, 5445501.7], [1.6028511E12, 2520247.1166666667], [1.60285128E12, 3517987.6166666667], [1.60285116E12, 5427499.666666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60285122E12, 12620.133333333333], [1.6028511E12, 6779.216666666666], [1.60285128E12, 8798.683333333332], [1.60285116E12, 11570.6]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60285128E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 336.236080178174, "minX": 1.6028511E12, "maxY": 397.52568378919267, "series": [{"data": [[1.60285122E12, 358.4655482324748], [1.6028511E12, 336.236080178174], [1.60285128E12, 345.65658362989313], [1.60285116E12, 397.52568378919267]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60285128E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 334.8741648106902, "minX": 1.6028511E12, "maxY": 395.89392928619066, "series": [{"data": [[1.60285122E12, 357.0982624325942], [1.6028511E12, 334.8741648106902], [1.60285128E12, 344.50000000000006], [1.60285116E12, 395.89392928619066]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60285128E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0071174377224199285, "minX": 1.6028511E12, "maxY": 0.12138084632516696, "series": [{"data": [[1.60285122E12, 0.01198322348711805], [1.6028511E12, 0.12138084632516696], [1.60285128E12, 0.0071174377224199285], [1.60285116E12, 0.012008005336891267]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60285128E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 31.0, "minX": 1.6028511E12, "maxY": 2196.0, "series": [{"data": [[1.60285122E12, 1882.0], [1.6028511E12, 1782.0], [1.60285128E12, 2196.0], [1.60285116E12, 2007.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60285122E12, 43.0], [1.6028511E12, 42.090999785661694], [1.60285128E12, 35.2499994635582], [1.60285116E12, 39.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60285122E12, 43.0], [1.6028511E12, 42.90010008573532], [1.60285128E12, 37.13750010728836], [1.60285116E12, 39.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60285122E12, 43.0], [1.6028511E12, 42.54049989283085], [1.60285128E12, 36.3749997317791], [1.60285116E12, 39.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60285122E12, 32.0], [1.6028511E12, 35.0], [1.60285128E12, 31.0], [1.60285116E12, 33.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60285122E12, 275.0], [1.6028511E12, 282.0], [1.60285128E12, 243.5], [1.60285116E12, 297.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60285128E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 83.0, "minX": 1.0, "maxY": 1081.0, "series": [{"data": [[32.0, 226.5], [33.0, 246.0], [34.0, 254.5], [35.0, 223.0], [37.0, 208.5], [36.0, 206.0], [39.0, 219.0], [38.0, 184.5], [41.0, 224.0], [43.0, 140.0], [42.0, 109.0], [44.0, 164.5], [46.0, 84.5], [48.0, 116.5], [49.0, 162.0], [51.0, 162.0], [50.0, 157.0], [53.0, 95.0], [52.0, 153.0], [55.0, 83.0], [56.0, 144.0], [59.0, 109.0], [60.0, 144.0], [65.0, 120.0], [76.0, 83.5], [90.0, 91.5], [11.0, 680.0], [13.0, 554.0], [14.0, 646.5], [15.0, 558.5], [16.0, 585.0], [1.0, 1081.0], [17.0, 537.0], [18.0, 484.5], [19.0, 498.0], [20.0, 517.0], [21.0, 422.0], [22.0, 433.5], [23.0, 414.0], [24.0, 398.0], [25.0, 373.0], [26.0, 407.5], [27.0, 306.5], [28.0, 299.0], [29.0, 293.5], [30.0, 221.0], [31.0, 248.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 90.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 83.0, "minX": 1.0, "maxY": 1075.0, "series": [{"data": [[32.0, 226.0], [33.0, 246.0], [34.0, 253.0], [35.0, 221.5], [37.0, 208.0], [36.0, 205.0], [39.0, 217.0], [38.0, 184.5], [41.0, 222.0], [43.0, 140.0], [42.0, 108.5], [44.0, 163.5], [46.0, 83.5], [48.0, 116.0], [49.0, 160.0], [51.0, 161.0], [50.0, 157.0], [53.0, 94.5], [52.0, 153.0], [55.0, 83.0], [56.0, 143.5], [59.0, 109.0], [60.0, 143.0], [65.0, 120.0], [76.0, 83.5], [90.0, 91.0], [11.0, 680.0], [13.0, 554.0], [14.0, 643.5], [15.0, 554.5], [16.0, 581.0], [1.0, 1075.0], [17.0, 534.0], [18.0, 483.5], [19.0, 495.0], [20.0, 516.0], [21.0, 422.0], [22.0, 432.5], [23.0, 412.0], [24.0, 396.0], [25.0, 372.0], [26.0, 407.5], [27.0, 304.5], [28.0, 298.0], [29.0, 292.5], [30.0, 219.0], [31.0, 246.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 90.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 15.133333333333333, "minX": 1.6028511E12, "maxY": 27.816666666666666, "series": [{"data": [[1.60285122E12, 27.816666666666666], [1.6028511E12, 15.133333333333333], [1.60285128E12, 18.566666666666666], [1.60285116E12, 24.983333333333334]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60285128E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 14.966666666666667, "minX": 1.6028511E12, "maxY": 27.816666666666666, "series": [{"data": [[1.60285122E12, 27.816666666666666], [1.6028511E12, 14.966666666666667], [1.60285128E12, 18.733333333333334], [1.60285116E12, 24.983333333333334]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60285128E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 14.966666666666667, "minX": 1.6028511E12, "maxY": 27.816666666666666, "series": [{"data": [[1.60285122E12, 27.816666666666666], [1.6028511E12, 14.966666666666667], [1.60285128E12, 18.733333333333334], [1.60285116E12, 24.983333333333334]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60285128E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 14.966666666666667, "minX": 1.6028511E12, "maxY": 27.816666666666666, "series": [{"data": [[1.60285122E12, 27.816666666666666], [1.6028511E12, 14.966666666666667], [1.60285128E12, 18.733333333333334], [1.60285116E12, 24.983333333333334]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60285128E12, "title": "Total Transactions Per Second"}},
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

