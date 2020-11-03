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
        data: {"result": {"minY": 32.0, "minX": 0.0, "maxY": 1926.0, "series": [{"data": [[0.0, 32.0], [0.1, 34.0], [0.2, 35.0], [0.3, 37.0], [0.4, 37.0], [0.5, 38.0], [0.6, 38.0], [0.7, 39.0], [0.8, 39.0], [0.9, 40.0], [1.0, 40.0], [1.1, 41.0], [1.2, 41.0], [1.3, 41.0], [1.4, 42.0], [1.5, 42.0], [1.6, 42.0], [1.7, 42.0], [1.8, 43.0], [1.9, 43.0], [2.0, 44.0], [2.1, 44.0], [2.2, 44.0], [2.3, 45.0], [2.4, 45.0], [2.5, 45.0], [2.6, 46.0], [2.7, 46.0], [2.8, 46.0], [2.9, 47.0], [3.0, 47.0], [3.1, 47.0], [3.2, 48.0], [3.3, 48.0], [3.4, 48.0], [3.5, 48.0], [3.6, 48.0], [3.7, 49.0], [3.8, 49.0], [3.9, 49.0], [4.0, 49.0], [4.1, 50.0], [4.2, 50.0], [4.3, 50.0], [4.4, 50.0], [4.5, 50.0], [4.6, 50.0], [4.7, 51.0], [4.8, 51.0], [4.9, 51.0], [5.0, 51.0], [5.1, 52.0], [5.2, 52.0], [5.3, 53.0], [5.4, 53.0], [5.5, 53.0], [5.6, 53.0], [5.7, 53.0], [5.8, 54.0], [5.9, 54.0], [6.0, 54.0], [6.1, 55.0], [6.2, 55.0], [6.3, 55.0], [6.4, 55.0], [6.5, 56.0], [6.6, 56.0], [6.7, 56.0], [6.8, 57.0], [6.9, 57.0], [7.0, 58.0], [7.1, 58.0], [7.2, 59.0], [7.3, 59.0], [7.4, 59.0], [7.5, 59.0], [7.6, 60.0], [7.7, 60.0], [7.8, 61.0], [7.9, 61.0], [8.0, 61.0], [8.1, 61.0], [8.2, 62.0], [8.3, 62.0], [8.4, 63.0], [8.5, 63.0], [8.6, 63.0], [8.7, 64.0], [8.8, 64.0], [8.9, 64.0], [9.0, 65.0], [9.1, 65.0], [9.2, 66.0], [9.3, 66.0], [9.4, 67.0], [9.5, 67.0], [9.6, 67.0], [9.7, 68.0], [9.8, 69.0], [9.9, 69.0], [10.0, 69.0], [10.1, 70.0], [10.2, 70.0], [10.3, 70.0], [10.4, 71.0], [10.5, 71.0], [10.6, 72.0], [10.7, 72.0], [10.8, 72.0], [10.9, 73.0], [11.0, 73.0], [11.1, 73.0], [11.2, 74.0], [11.3, 74.0], [11.4, 74.0], [11.5, 74.0], [11.6, 75.0], [11.7, 75.0], [11.8, 75.0], [11.9, 76.0], [12.0, 76.0], [12.1, 76.0], [12.2, 77.0], [12.3, 77.0], [12.4, 77.0], [12.5, 77.0], [12.6, 78.0], [12.7, 78.0], [12.8, 78.0], [12.9, 79.0], [13.0, 79.0], [13.1, 79.0], [13.2, 80.0], [13.3, 80.0], [13.4, 80.0], [13.5, 81.0], [13.6, 81.0], [13.7, 81.0], [13.8, 81.0], [13.9, 82.0], [14.0, 82.0], [14.1, 82.0], [14.2, 82.0], [14.3, 83.0], [14.4, 83.0], [14.5, 83.0], [14.6, 83.0], [14.7, 84.0], [14.8, 84.0], [14.9, 85.0], [15.0, 85.0], [15.1, 85.0], [15.2, 86.0], [15.3, 86.0], [15.4, 86.0], [15.5, 87.0], [15.6, 87.0], [15.7, 87.0], [15.8, 88.0], [15.9, 88.0], [16.0, 88.0], [16.1, 89.0], [16.2, 89.0], [16.3, 89.0], [16.4, 89.0], [16.5, 90.0], [16.6, 90.0], [16.7, 90.0], [16.8, 91.0], [16.9, 91.0], [17.0, 92.0], [17.1, 92.0], [17.2, 92.0], [17.3, 92.0], [17.4, 93.0], [17.5, 93.0], [17.6, 93.0], [17.7, 94.0], [17.8, 94.0], [17.9, 95.0], [18.0, 95.0], [18.1, 96.0], [18.2, 96.0], [18.3, 97.0], [18.4, 97.0], [18.5, 98.0], [18.6, 98.0], [18.7, 99.0], [18.8, 99.0], [18.9, 100.0], [19.0, 100.0], [19.1, 101.0], [19.2, 101.0], [19.3, 102.0], [19.4, 102.0], [19.5, 103.0], [19.6, 103.0], [19.7, 103.0], [19.8, 104.0], [19.9, 104.0], [20.0, 104.0], [20.1, 105.0], [20.2, 106.0], [20.3, 106.0], [20.4, 106.0], [20.5, 107.0], [20.6, 107.0], [20.7, 108.0], [20.8, 108.0], [20.9, 109.0], [21.0, 109.0], [21.1, 110.0], [21.2, 110.0], [21.3, 111.0], [21.4, 111.0], [21.5, 111.0], [21.6, 112.0], [21.7, 112.0], [21.8, 113.0], [21.9, 114.0], [22.0, 114.0], [22.1, 115.0], [22.2, 115.0], [22.3, 116.0], [22.4, 117.0], [22.5, 117.0], [22.6, 118.0], [22.7, 118.0], [22.8, 119.0], [22.9, 119.0], [23.0, 119.0], [23.1, 120.0], [23.2, 121.0], [23.3, 122.0], [23.4, 122.0], [23.5, 123.0], [23.6, 124.0], [23.7, 125.0], [23.8, 125.0], [23.9, 126.0], [24.0, 126.0], [24.1, 126.0], [24.2, 127.0], [24.3, 127.0], [24.4, 127.0], [24.5, 128.0], [24.6, 129.0], [24.7, 129.0], [24.8, 130.0], [24.9, 131.0], [25.0, 131.0], [25.1, 132.0], [25.2, 132.0], [25.3, 133.0], [25.4, 133.0], [25.5, 134.0], [25.6, 134.0], [25.7, 134.0], [25.8, 135.0], [25.9, 136.0], [26.0, 136.0], [26.1, 136.0], [26.2, 137.0], [26.3, 137.0], [26.4, 137.0], [26.5, 138.0], [26.6, 138.0], [26.7, 138.0], [26.8, 138.0], [26.9, 139.0], [27.0, 139.0], [27.1, 139.0], [27.2, 140.0], [27.3, 140.0], [27.4, 140.0], [27.5, 140.0], [27.6, 141.0], [27.7, 141.0], [27.8, 141.0], [27.9, 142.0], [28.0, 142.0], [28.1, 142.0], [28.2, 142.0], [28.3, 143.0], [28.4, 143.0], [28.5, 144.0], [28.6, 144.0], [28.7, 144.0], [28.8, 145.0], [28.9, 145.0], [29.0, 145.0], [29.1, 146.0], [29.2, 146.0], [29.3, 146.0], [29.4, 147.0], [29.5, 147.0], [29.6, 147.0], [29.7, 147.0], [29.8, 148.0], [29.9, 148.0], [30.0, 148.0], [30.1, 149.0], [30.2, 149.0], [30.3, 149.0], [30.4, 149.0], [30.5, 150.0], [30.6, 151.0], [30.7, 151.0], [30.8, 151.0], [30.9, 151.0], [31.0, 152.0], [31.1, 153.0], [31.2, 154.0], [31.3, 154.0], [31.4, 154.0], [31.5, 155.0], [31.6, 156.0], [31.7, 156.0], [31.8, 157.0], [31.9, 157.0], [32.0, 158.0], [32.1, 158.0], [32.2, 159.0], [32.3, 159.0], [32.4, 160.0], [32.5, 160.0], [32.6, 161.0], [32.7, 161.0], [32.8, 162.0], [32.9, 162.0], [33.0, 162.0], [33.1, 163.0], [33.2, 164.0], [33.3, 164.0], [33.4, 164.0], [33.5, 165.0], [33.6, 165.0], [33.7, 166.0], [33.8, 166.0], [33.9, 167.0], [34.0, 168.0], [34.1, 168.0], [34.2, 168.0], [34.3, 169.0], [34.4, 170.0], [34.5, 170.0], [34.6, 171.0], [34.7, 172.0], [34.8, 174.0], [34.9, 175.0], [35.0, 175.0], [35.1, 175.0], [35.2, 176.0], [35.3, 177.0], [35.4, 177.0], [35.5, 177.0], [35.6, 178.0], [35.7, 179.0], [35.8, 180.0], [35.9, 180.0], [36.0, 181.0], [36.1, 181.0], [36.2, 182.0], [36.3, 183.0], [36.4, 184.0], [36.5, 184.0], [36.6, 185.0], [36.7, 185.0], [36.8, 186.0], [36.9, 186.0], [37.0, 187.0], [37.1, 188.0], [37.2, 188.0], [37.3, 189.0], [37.4, 190.0], [37.5, 190.0], [37.6, 191.0], [37.7, 192.0], [37.8, 193.0], [37.9, 193.0], [38.0, 194.0], [38.1, 194.0], [38.2, 195.0], [38.3, 195.0], [38.4, 196.0], [38.5, 197.0], [38.6, 197.0], [38.7, 197.0], [38.8, 198.0], [38.9, 199.0], [39.0, 199.0], [39.1, 200.0], [39.2, 201.0], [39.3, 202.0], [39.4, 203.0], [39.5, 204.0], [39.6, 204.0], [39.7, 205.0], [39.8, 205.0], [39.9, 206.0], [40.0, 206.0], [40.1, 207.0], [40.2, 208.0], [40.3, 209.0], [40.4, 210.0], [40.5, 210.0], [40.6, 211.0], [40.7, 212.0], [40.8, 212.0], [40.9, 213.0], [41.0, 213.0], [41.1, 214.0], [41.2, 214.0], [41.3, 215.0], [41.4, 216.0], [41.5, 217.0], [41.6, 217.0], [41.7, 218.0], [41.8, 218.0], [41.9, 219.0], [42.0, 219.0], [42.1, 220.0], [42.2, 220.0], [42.3, 221.0], [42.4, 221.0], [42.5, 222.0], [42.6, 223.0], [42.7, 224.0], [42.8, 224.0], [42.9, 225.0], [43.0, 225.0], [43.1, 226.0], [43.2, 227.0], [43.3, 227.0], [43.4, 228.0], [43.5, 229.0], [43.6, 229.0], [43.7, 231.0], [43.8, 231.0], [43.9, 232.0], [44.0, 232.0], [44.1, 233.0], [44.2, 233.0], [44.3, 234.0], [44.4, 235.0], [44.5, 235.0], [44.6, 236.0], [44.7, 236.0], [44.8, 238.0], [44.9, 238.0], [45.0, 239.0], [45.1, 239.0], [45.2, 241.0], [45.3, 241.0], [45.4, 242.0], [45.5, 243.0], [45.6, 244.0], [45.7, 245.0], [45.8, 246.0], [45.9, 247.0], [46.0, 247.0], [46.1, 248.0], [46.2, 248.0], [46.3, 249.0], [46.4, 250.0], [46.5, 252.0], [46.6, 252.0], [46.7, 253.0], [46.8, 253.0], [46.9, 255.0], [47.0, 256.0], [47.1, 256.0], [47.2, 257.0], [47.3, 258.0], [47.4, 259.0], [47.5, 260.0], [47.6, 261.0], [47.7, 262.0], [47.8, 263.0], [47.9, 264.0], [48.0, 266.0], [48.1, 266.0], [48.2, 267.0], [48.3, 268.0], [48.4, 269.0], [48.5, 270.0], [48.6, 271.0], [48.7, 271.0], [48.8, 272.0], [48.9, 272.0], [49.0, 273.0], [49.1, 274.0], [49.2, 274.0], [49.3, 275.0], [49.4, 276.0], [49.5, 276.0], [49.6, 277.0], [49.7, 278.0], [49.8, 278.0], [49.9, 279.0], [50.0, 280.0], [50.1, 281.0], [50.2, 282.0], [50.3, 283.0], [50.4, 284.0], [50.5, 285.0], [50.6, 286.0], [50.7, 287.0], [50.8, 288.0], [50.9, 289.0], [51.0, 290.0], [51.1, 291.0], [51.2, 291.0], [51.3, 293.0], [51.4, 295.0], [51.5, 295.0], [51.6, 297.0], [51.7, 297.0], [51.8, 298.0], [51.9, 300.0], [52.0, 301.0], [52.1, 303.0], [52.2, 303.0], [52.3, 305.0], [52.4, 305.0], [52.5, 307.0], [52.6, 307.0], [52.7, 308.0], [52.8, 309.0], [52.9, 310.0], [53.0, 311.0], [53.1, 312.0], [53.2, 313.0], [53.3, 313.0], [53.4, 313.0], [53.5, 314.0], [53.6, 315.0], [53.7, 316.0], [53.8, 317.0], [53.9, 318.0], [54.0, 318.0], [54.1, 320.0], [54.2, 321.0], [54.3, 321.0], [54.4, 322.0], [54.5, 324.0], [54.6, 325.0], [54.7, 326.0], [54.8, 327.0], [54.9, 328.0], [55.0, 328.0], [55.1, 330.0], [55.2, 330.0], [55.3, 332.0], [55.4, 333.0], [55.5, 334.0], [55.6, 334.0], [55.7, 337.0], [55.8, 337.0], [55.9, 338.0], [56.0, 339.0], [56.1, 340.0], [56.2, 340.0], [56.3, 341.0], [56.4, 342.0], [56.5, 343.0], [56.6, 343.0], [56.7, 344.0], [56.8, 346.0], [56.9, 348.0], [57.0, 349.0], [57.1, 349.0], [57.2, 350.0], [57.3, 351.0], [57.4, 353.0], [57.5, 354.0], [57.6, 355.0], [57.7, 356.0], [57.8, 358.0], [57.9, 359.0], [58.0, 359.0], [58.1, 360.0], [58.2, 361.0], [58.3, 361.0], [58.4, 363.0], [58.5, 364.0], [58.6, 365.0], [58.7, 367.0], [58.8, 367.0], [58.9, 368.0], [59.0, 369.0], [59.1, 370.0], [59.2, 370.0], [59.3, 372.0], [59.4, 374.0], [59.5, 375.0], [59.6, 376.0], [59.7, 377.0], [59.8, 378.0], [59.9, 379.0], [60.0, 380.0], [60.1, 382.0], [60.2, 384.0], [60.3, 385.0], [60.4, 385.0], [60.5, 386.0], [60.6, 387.0], [60.7, 388.0], [60.8, 389.0], [60.9, 390.0], [61.0, 392.0], [61.1, 393.0], [61.2, 395.0], [61.3, 395.0], [61.4, 396.0], [61.5, 396.0], [61.6, 398.0], [61.7, 399.0], [61.8, 400.0], [61.9, 401.0], [62.0, 402.0], [62.1, 403.0], [62.2, 405.0], [62.3, 407.0], [62.4, 409.0], [62.5, 410.0], [62.6, 412.0], [62.7, 413.0], [62.8, 414.0], [62.9, 415.0], [63.0, 416.0], [63.1, 417.0], [63.2, 418.0], [63.3, 421.0], [63.4, 422.0], [63.5, 422.0], [63.6, 424.0], [63.7, 426.0], [63.8, 427.0], [63.9, 428.0], [64.0, 431.0], [64.1, 431.0], [64.2, 432.0], [64.3, 434.0], [64.4, 434.0], [64.5, 435.0], [64.6, 436.0], [64.7, 437.0], [64.8, 439.0], [64.9, 441.0], [65.0, 442.0], [65.1, 442.0], [65.2, 443.0], [65.3, 443.0], [65.4, 445.0], [65.5, 446.0], [65.6, 447.0], [65.7, 449.0], [65.8, 450.0], [65.9, 452.0], [66.0, 453.0], [66.1, 455.0], [66.2, 456.0], [66.3, 458.0], [66.4, 459.0], [66.5, 460.0], [66.6, 460.0], [66.7, 462.0], [66.8, 462.0], [66.9, 464.0], [67.0, 464.0], [67.1, 465.0], [67.2, 467.0], [67.3, 468.0], [67.4, 469.0], [67.5, 470.0], [67.6, 471.0], [67.7, 472.0], [67.8, 474.0], [67.9, 474.0], [68.0, 475.0], [68.1, 476.0], [68.2, 478.0], [68.3, 478.0], [68.4, 481.0], [68.5, 482.0], [68.6, 482.0], [68.7, 484.0], [68.8, 485.0], [68.9, 486.0], [69.0, 487.0], [69.1, 489.0], [69.2, 489.0], [69.3, 490.0], [69.4, 492.0], [69.5, 493.0], [69.6, 494.0], [69.7, 495.0], [69.8, 496.0], [69.9, 498.0], [70.0, 499.0], [70.1, 500.0], [70.2, 501.0], [70.3, 501.0], [70.4, 502.0], [70.5, 503.0], [70.6, 504.0], [70.7, 505.0], [70.8, 506.0], [70.9, 507.0], [71.0, 508.0], [71.1, 510.0], [71.2, 510.0], [71.3, 511.0], [71.4, 511.0], [71.5, 511.0], [71.6, 513.0], [71.7, 514.0], [71.8, 515.0], [71.9, 515.0], [72.0, 516.0], [72.1, 516.0], [72.2, 518.0], [72.3, 519.0], [72.4, 520.0], [72.5, 520.0], [72.6, 521.0], [72.7, 523.0], [72.8, 524.0], [72.9, 526.0], [73.0, 527.0], [73.1, 527.0], [73.2, 528.0], [73.3, 529.0], [73.4, 530.0], [73.5, 531.0], [73.6, 532.0], [73.7, 532.0], [73.8, 534.0], [73.9, 534.0], [74.0, 535.0], [74.1, 535.0], [74.2, 536.0], [74.3, 537.0], [74.4, 538.0], [74.5, 538.0], [74.6, 540.0], [74.7, 541.0], [74.8, 543.0], [74.9, 543.0], [75.0, 544.0], [75.1, 545.0], [75.2, 546.0], [75.3, 546.0], [75.4, 547.0], [75.5, 548.0], [75.6, 549.0], [75.7, 550.0], [75.8, 552.0], [75.9, 553.0], [76.0, 554.0], [76.1, 554.0], [76.2, 555.0], [76.3, 555.0], [76.4, 557.0], [76.5, 558.0], [76.6, 560.0], [76.7, 562.0], [76.8, 563.0], [76.9, 563.0], [77.0, 565.0], [77.1, 566.0], [77.2, 567.0], [77.3, 567.0], [77.4, 569.0], [77.5, 570.0], [77.6, 571.0], [77.7, 572.0], [77.8, 572.0], [77.9, 575.0], [78.0, 576.0], [78.1, 576.0], [78.2, 578.0], [78.3, 579.0], [78.4, 579.0], [78.5, 580.0], [78.6, 580.0], [78.7, 582.0], [78.8, 583.0], [78.9, 584.0], [79.0, 585.0], [79.1, 586.0], [79.2, 586.0], [79.3, 588.0], [79.4, 590.0], [79.5, 591.0], [79.6, 592.0], [79.7, 592.0], [79.8, 594.0], [79.9, 594.0], [80.0, 596.0], [80.1, 596.0], [80.2, 597.0], [80.3, 598.0], [80.4, 599.0], [80.5, 601.0], [80.6, 602.0], [80.7, 603.0], [80.8, 604.0], [80.9, 605.0], [81.0, 605.0], [81.1, 607.0], [81.2, 608.0], [81.3, 609.0], [81.4, 611.0], [81.5, 613.0], [81.6, 615.0], [81.7, 615.0], [81.8, 616.0], [81.9, 618.0], [82.0, 619.0], [82.1, 619.0], [82.2, 621.0], [82.3, 623.0], [82.4, 625.0], [82.5, 626.0], [82.6, 627.0], [82.7, 629.0], [82.8, 631.0], [82.9, 632.0], [83.0, 633.0], [83.1, 635.0], [83.2, 636.0], [83.3, 637.0], [83.4, 638.0], [83.5, 639.0], [83.6, 640.0], [83.7, 642.0], [83.8, 644.0], [83.9, 645.0], [84.0, 646.0], [84.1, 648.0], [84.2, 649.0], [84.3, 650.0], [84.4, 652.0], [84.5, 653.0], [84.6, 654.0], [84.7, 654.0], [84.8, 656.0], [84.9, 658.0], [85.0, 660.0], [85.1, 661.0], [85.2, 663.0], [85.3, 664.0], [85.4, 664.0], [85.5, 665.0], [85.6, 666.0], [85.7, 668.0], [85.8, 669.0], [85.9, 671.0], [86.0, 672.0], [86.1, 673.0], [86.2, 674.0], [86.3, 676.0], [86.4, 676.0], [86.5, 678.0], [86.6, 679.0], [86.7, 680.0], [86.8, 680.0], [86.9, 682.0], [87.0, 683.0], [87.1, 685.0], [87.2, 685.0], [87.3, 687.0], [87.4, 689.0], [87.5, 690.0], [87.6, 693.0], [87.7, 694.0], [87.8, 696.0], [87.9, 698.0], [88.0, 700.0], [88.1, 701.0], [88.2, 702.0], [88.3, 704.0], [88.4, 705.0], [88.5, 708.0], [88.6, 709.0], [88.7, 711.0], [88.8, 712.0], [88.9, 713.0], [89.0, 716.0], [89.1, 717.0], [89.2, 719.0], [89.3, 721.0], [89.4, 726.0], [89.5, 729.0], [89.6, 732.0], [89.7, 734.0], [89.8, 736.0], [89.9, 739.0], [90.0, 741.0], [90.1, 744.0], [90.2, 746.0], [90.3, 750.0], [90.4, 751.0], [90.5, 752.0], [90.6, 754.0], [90.7, 756.0], [90.8, 761.0], [90.9, 763.0], [91.0, 765.0], [91.1, 769.0], [91.2, 770.0], [91.3, 775.0], [91.4, 781.0], [91.5, 784.0], [91.6, 786.0], [91.7, 789.0], [91.8, 793.0], [91.9, 796.0], [92.0, 798.0], [92.1, 802.0], [92.2, 804.0], [92.3, 806.0], [92.4, 808.0], [92.5, 811.0], [92.6, 812.0], [92.7, 817.0], [92.8, 820.0], [92.9, 823.0], [93.0, 824.0], [93.1, 826.0], [93.2, 828.0], [93.3, 833.0], [93.4, 836.0], [93.5, 840.0], [93.6, 842.0], [93.7, 845.0], [93.8, 849.0], [93.9, 854.0], [94.0, 858.0], [94.1, 860.0], [94.2, 863.0], [94.3, 866.0], [94.4, 869.0], [94.5, 874.0], [94.6, 877.0], [94.7, 879.0], [94.8, 882.0], [94.9, 887.0], [95.0, 890.0], [95.1, 897.0], [95.2, 905.0], [95.3, 910.0], [95.4, 913.0], [95.5, 917.0], [95.6, 920.0], [95.7, 924.0], [95.8, 932.0], [95.9, 939.0], [96.0, 948.0], [96.1, 952.0], [96.2, 969.0], [96.3, 973.0], [96.4, 979.0], [96.5, 984.0], [96.6, 992.0], [96.7, 1004.0], [96.8, 1009.0], [96.9, 1017.0], [97.0, 1019.0], [97.1, 1025.0], [97.2, 1035.0], [97.3, 1044.0], [97.4, 1061.0], [97.5, 1071.0], [97.6, 1081.0], [97.7, 1091.0], [97.8, 1103.0], [97.9, 1113.0], [98.0, 1115.0], [98.1, 1121.0], [98.2, 1133.0], [98.3, 1137.0], [98.4, 1152.0], [98.5, 1172.0], [98.6, 1187.0], [98.7, 1200.0], [98.8, 1214.0], [98.9, 1225.0], [99.0, 1240.0], [99.1, 1258.0], [99.2, 1295.0], [99.3, 1329.0], [99.4, 1348.0], [99.5, 1391.0], [99.6, 1430.0], [99.7, 1485.0], [99.8, 1581.0], [99.9, 1672.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 1049.0, "series": [{"data": [[0.0, 977.0], [600.0, 392.0], [700.0, 210.0], [200.0, 667.0], [800.0, 160.0], [900.0, 80.0], [1000.0, 57.0], [1100.0, 47.0], [300.0, 512.0], [1200.0, 28.0], [1300.0, 17.0], [1400.0, 9.0], [1500.0, 5.0], [400.0, 430.0], [100.0, 1049.0], [1600.0, 6.0], [1700.0, 2.0], [1800.0, 1.0], [1900.0, 1.0], [500.0, 540.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1900.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 15.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 3643.0, "series": [{"data": [[0.0, 3643.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1532.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 15.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.96671597633136, "minX": 1.60439088E12, "maxY": 10.0, "series": [{"data": [[1.60439094E12, 10.0], [1.60439088E12, 9.984615384615388], [1.60439106E12, 9.96671597633136], [1.604391E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60439106E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 260.0, "minX": 1.0, "maxY": 1113.0, "series": [{"data": [[8.0, 260.0], [4.0, 847.0], [2.0, 1113.0], [1.0, 1012.0], [9.0, 565.0], [5.0, 456.0], [10.0, 361.6133642332945], [6.0, 375.0], [3.0, 820.0], [7.0, 523.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.98959537572256, 362.2252408477838]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 4397.216666666666, "minX": 1.60439088E12, "maxY": 5296514.216666667, "series": [{"data": [[1.60439094E12, 5296514.216666667], [1.60439088E12, 1961532.0333333334], [1.60439106E12, 4443665.7], [1.604391E12, 5210129.566666666]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60439094E12, 12024.133333333333], [1.60439088E12, 4397.216666666666], [1.60439106E12, 10535.816666666668], [1.604391E12, 12811.466666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60439106E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 349.7071005917158, "minX": 1.60439088E12, "maxY": 381.0025559105436, "series": [{"data": [[1.60439094E12, 381.0025559105436], [1.60439088E12, 363.01538461538473], [1.60439106E12, 349.7071005917158], [1.604391E12, 354.568720379147]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60439106E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 348.50073964497096, "minX": 1.60439088E12, "maxY": 379.407028753994, "series": [{"data": [[1.60439094E12, 379.407028753994], [1.60439088E12, 361.37606837606813], [1.60439106E12, 348.50073964497096], [1.604391E12, 353.16113744075795]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60439106E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.00961538461538463, "minX": 1.60439088E12, "maxY": 0.18290598290598314, "series": [{"data": [[1.60439094E12, 0.011501597444089455], [1.60439088E12, 0.18290598290598314], [1.60439106E12, 0.00961538461538463], [1.604391E12, 0.013033175355450248]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60439106E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 32.0, "minX": 1.60439088E12, "maxY": 1926.0, "series": [{"data": [[1.60439094E12, 1926.0], [1.60439088E12, 1348.0], [1.60439106E12, 1802.0], [1.604391E12, 1724.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60439094E12, 40.0939996266365], [1.60439088E12, 39.09599944114685], [1.60439106E12, 39.0], [1.604391E12, 39.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60439094E12, 41.0], [1.60439088E12, 41.20560022354126], [1.60439106E12, 39.0], [1.604391E12, 39.7211001610756]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60439094E12, 40.87699981331825], [1.60439088E12, 40.26799972057343], [1.60439106E12, 39.0], [1.604391E12, 39.04549979865551]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60439094E12, 32.0], [1.60439088E12, 33.0], [1.60439106E12, 33.0], [1.604391E12, 35.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60439094E12, 290.0], [1.60439088E12, 314.0], [1.60439106E12, 263.0], [1.604391E12, 275.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60439106E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 77.5, "minX": 5.0, "maxY": 847.0, "series": [{"data": [[32.0, 262.5], [33.0, 194.0], [35.0, 250.0], [34.0, 193.5], [36.0, 180.5], [37.0, 220.0], [38.0, 210.5], [39.0, 137.0], [40.0, 91.0], [41.0, 167.0], [43.0, 84.5], [42.0, 160.0], [44.0, 130.5], [46.0, 129.5], [50.0, 149.5], [51.0, 87.0], [55.0, 147.0], [54.0, 143.0], [57.0, 158.0], [56.0, 153.5], [58.0, 77.5], [61.0, 107.0], [60.0, 81.0], [62.0, 107.5], [65.0, 95.0], [71.0, 81.0], [5.0, 847.0], [8.0, 359.5], [13.0, 601.0], [14.0, 621.5], [15.0, 588.0], [16.0, 515.5], [17.0, 565.0], [18.0, 527.0], [19.0, 502.5], [20.0, 506.5], [21.0, 436.0], [22.0, 431.5], [23.0, 383.5], [24.0, 383.0], [25.0, 375.0], [26.0, 311.0], [27.0, 337.5], [28.0, 215.0], [29.0, 300.0], [30.0, 261.0], [31.0, 262.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 71.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 77.0, "minX": 5.0, "maxY": 846.0, "series": [{"data": [[32.0, 261.5], [33.0, 193.0], [35.0, 249.0], [34.0, 193.0], [36.0, 179.5], [37.0, 220.0], [38.0, 210.0], [39.0, 136.0], [40.0, 91.0], [41.0, 167.0], [43.0, 84.5], [42.0, 160.0], [44.0, 130.5], [46.0, 129.0], [50.0, 148.5], [51.0, 86.0], [55.0, 145.0], [54.0, 141.5], [57.0, 158.0], [56.0, 153.0], [58.0, 77.0], [61.0, 106.0], [60.0, 80.5], [62.0, 107.5], [65.0, 95.0], [71.0, 81.0], [5.0, 846.0], [8.0, 355.5], [13.0, 593.0], [14.0, 619.0], [15.0, 584.0], [16.0, 515.5], [17.0, 558.0], [18.0, 521.0], [19.0, 501.0], [20.0, 504.5], [21.0, 435.0], [22.0, 430.0], [23.0, 382.5], [24.0, 381.5], [25.0, 373.5], [26.0, 310.0], [27.0, 337.5], [28.0, 214.0], [29.0, 299.5], [30.0, 260.5], [31.0, 261.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 71.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 9.916666666666666, "minX": 1.60439088E12, "maxY": 28.133333333333333, "series": [{"data": [[1.60439094E12, 26.083333333333332], [1.60439088E12, 9.916666666666666], [1.60439106E12, 22.366666666666667], [1.604391E12, 28.133333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60439106E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 9.75, "minX": 1.60439088E12, "maxY": 28.133333333333333, "series": [{"data": [[1.60439094E12, 26.083333333333332], [1.60439088E12, 9.75], [1.60439106E12, 22.533333333333335], [1.604391E12, 28.133333333333333]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60439106E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 9.75, "minX": 1.60439088E12, "maxY": 28.133333333333333, "series": [{"data": [[1.60439094E12, 26.083333333333332], [1.60439088E12, 9.75], [1.60439106E12, 22.533333333333335], [1.604391E12, 28.133333333333333]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60439106E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 9.75, "minX": 1.60439088E12, "maxY": 28.133333333333333, "series": [{"data": [[1.60439094E12, 26.083333333333332], [1.60439088E12, 9.75], [1.60439106E12, 22.533333333333335], [1.604391E12, 28.133333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60439106E12, "title": "Total Transactions Per Second"}},
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

