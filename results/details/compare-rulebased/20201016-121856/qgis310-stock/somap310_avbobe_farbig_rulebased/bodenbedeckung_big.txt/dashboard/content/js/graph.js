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
        data: {"result": {"minY": 29.0, "minX": 0.0, "maxY": 2129.0, "series": [{"data": [[0.0, 29.0], [0.1, 32.0], [0.2, 33.0], [0.3, 34.0], [0.4, 36.0], [0.5, 36.0], [0.6, 37.0], [0.7, 38.0], [0.8, 38.0], [0.9, 38.0], [1.0, 39.0], [1.1, 39.0], [1.2, 40.0], [1.3, 40.0], [1.4, 40.0], [1.5, 41.0], [1.6, 41.0], [1.7, 41.0], [1.8, 42.0], [1.9, 42.0], [2.0, 42.0], [2.1, 42.0], [2.2, 43.0], [2.3, 43.0], [2.4, 43.0], [2.5, 43.0], [2.6, 44.0], [2.7, 44.0], [2.8, 44.0], [2.9, 44.0], [3.0, 44.0], [3.1, 45.0], [3.2, 45.0], [3.3, 45.0], [3.4, 45.0], [3.5, 45.0], [3.6, 45.0], [3.7, 46.0], [3.8, 46.0], [3.9, 46.0], [4.0, 46.0], [4.1, 46.0], [4.2, 47.0], [4.3, 47.0], [4.4, 47.0], [4.5, 47.0], [4.6, 48.0], [4.7, 48.0], [4.8, 48.0], [4.9, 48.0], [5.0, 48.0], [5.1, 49.0], [5.2, 49.0], [5.3, 49.0], [5.4, 50.0], [5.5, 50.0], [5.6, 50.0], [5.7, 51.0], [5.8, 51.0], [5.9, 51.0], [6.0, 52.0], [6.1, 52.0], [6.2, 52.0], [6.3, 52.0], [6.4, 53.0], [6.5, 53.0], [6.6, 54.0], [6.7, 54.0], [6.8, 54.0], [6.9, 54.0], [7.0, 55.0], [7.1, 56.0], [7.2, 56.0], [7.3, 56.0], [7.4, 56.0], [7.5, 57.0], [7.6, 57.0], [7.7, 58.0], [7.8, 58.0], [7.9, 58.0], [8.0, 58.0], [8.1, 59.0], [8.2, 59.0], [8.3, 60.0], [8.4, 60.0], [8.5, 60.0], [8.6, 61.0], [8.7, 61.0], [8.8, 62.0], [8.9, 62.0], [9.0, 63.0], [9.1, 63.0], [9.2, 63.0], [9.3, 64.0], [9.4, 65.0], [9.5, 65.0], [9.6, 65.0], [9.7, 66.0], [9.8, 66.0], [9.9, 66.0], [10.0, 66.0], [10.1, 67.0], [10.2, 67.0], [10.3, 68.0], [10.4, 68.0], [10.5, 68.0], [10.6, 69.0], [10.7, 69.0], [10.8, 70.0], [10.9, 70.0], [11.0, 70.0], [11.1, 71.0], [11.2, 71.0], [11.3, 72.0], [11.4, 72.0], [11.5, 72.0], [11.6, 73.0], [11.7, 73.0], [11.8, 74.0], [11.9, 74.0], [12.0, 74.0], [12.1, 74.0], [12.2, 75.0], [12.3, 75.0], [12.4, 75.0], [12.5, 76.0], [12.6, 76.0], [12.7, 76.0], [12.8, 77.0], [12.9, 77.0], [13.0, 78.0], [13.1, 78.0], [13.2, 78.0], [13.3, 79.0], [13.4, 79.0], [13.5, 79.0], [13.6, 80.0], [13.7, 80.0], [13.8, 80.0], [13.9, 81.0], [14.0, 81.0], [14.1, 81.0], [14.2, 82.0], [14.3, 82.0], [14.4, 82.0], [14.5, 83.0], [14.6, 83.0], [14.7, 84.0], [14.8, 84.0], [14.9, 84.0], [15.0, 85.0], [15.1, 85.0], [15.2, 85.0], [15.3, 85.0], [15.4, 86.0], [15.5, 86.0], [15.6, 86.0], [15.7, 86.0], [15.8, 87.0], [15.9, 87.0], [16.0, 87.0], [16.1, 87.0], [16.2, 87.0], [16.3, 87.0], [16.4, 88.0], [16.5, 88.0], [16.6, 88.0], [16.7, 89.0], [16.8, 89.0], [16.9, 89.0], [17.0, 89.0], [17.1, 90.0], [17.2, 90.0], [17.3, 90.0], [17.4, 91.0], [17.5, 91.0], [17.6, 91.0], [17.7, 91.0], [17.8, 92.0], [17.9, 92.0], [18.0, 92.0], [18.1, 93.0], [18.2, 93.0], [18.3, 93.0], [18.4, 94.0], [18.5, 94.0], [18.6, 95.0], [18.7, 95.0], [18.8, 95.0], [18.9, 96.0], [19.0, 96.0], [19.1, 96.0], [19.2, 97.0], [19.3, 97.0], [19.4, 98.0], [19.5, 98.0], [19.6, 98.0], [19.7, 98.0], [19.8, 99.0], [19.9, 100.0], [20.0, 100.0], [20.1, 100.0], [20.2, 101.0], [20.3, 101.0], [20.4, 101.0], [20.5, 102.0], [20.6, 102.0], [20.7, 103.0], [20.8, 103.0], [20.9, 103.0], [21.0, 104.0], [21.1, 105.0], [21.2, 105.0], [21.3, 106.0], [21.4, 107.0], [21.5, 107.0], [21.6, 107.0], [21.7, 108.0], [21.8, 109.0], [21.9, 109.0], [22.0, 110.0], [22.1, 110.0], [22.2, 110.0], [22.3, 111.0], [22.4, 111.0], [22.5, 112.0], [22.6, 112.0], [22.7, 113.0], [22.8, 113.0], [22.9, 114.0], [23.0, 114.0], [23.1, 115.0], [23.2, 115.0], [23.3, 116.0], [23.4, 116.0], [23.5, 117.0], [23.6, 117.0], [23.7, 117.0], [23.8, 117.0], [23.9, 118.0], [24.0, 118.0], [24.1, 119.0], [24.2, 119.0], [24.3, 119.0], [24.4, 120.0], [24.5, 120.0], [24.6, 120.0], [24.7, 121.0], [24.8, 121.0], [24.9, 122.0], [25.0, 122.0], [25.1, 123.0], [25.2, 124.0], [25.3, 124.0], [25.4, 125.0], [25.5, 125.0], [25.6, 126.0], [25.7, 126.0], [25.8, 127.0], [25.9, 128.0], [26.0, 128.0], [26.1, 129.0], [26.2, 130.0], [26.3, 130.0], [26.4, 130.0], [26.5, 131.0], [26.6, 132.0], [26.7, 132.0], [26.8, 133.0], [26.9, 133.0], [27.0, 134.0], [27.1, 134.0], [27.2, 134.0], [27.3, 135.0], [27.4, 135.0], [27.5, 136.0], [27.6, 136.0], [27.7, 136.0], [27.8, 137.0], [27.9, 137.0], [28.0, 138.0], [28.1, 138.0], [28.2, 138.0], [28.3, 138.0], [28.4, 139.0], [28.5, 139.0], [28.6, 139.0], [28.7, 139.0], [28.8, 139.0], [28.9, 140.0], [29.0, 140.0], [29.1, 140.0], [29.2, 141.0], [29.3, 141.0], [29.4, 141.0], [29.5, 142.0], [29.6, 142.0], [29.7, 142.0], [29.8, 142.0], [29.9, 143.0], [30.0, 143.0], [30.1, 144.0], [30.2, 144.0], [30.3, 144.0], [30.4, 144.0], [30.5, 145.0], [30.6, 145.0], [30.7, 145.0], [30.8, 146.0], [30.9, 146.0], [31.0, 146.0], [31.1, 147.0], [31.2, 147.0], [31.3, 147.0], [31.4, 148.0], [31.5, 148.0], [31.6, 149.0], [31.7, 149.0], [31.8, 149.0], [31.9, 149.0], [32.0, 150.0], [32.1, 150.0], [32.2, 150.0], [32.3, 151.0], [32.4, 151.0], [32.5, 152.0], [32.6, 152.0], [32.7, 153.0], [32.8, 153.0], [32.9, 154.0], [33.0, 154.0], [33.1, 155.0], [33.2, 155.0], [33.3, 155.0], [33.4, 156.0], [33.5, 156.0], [33.6, 157.0], [33.7, 158.0], [33.8, 158.0], [33.9, 159.0], [34.0, 160.0], [34.1, 161.0], [34.2, 161.0], [34.3, 162.0], [34.4, 162.0], [34.5, 162.0], [34.6, 163.0], [34.7, 163.0], [34.8, 164.0], [34.9, 164.0], [35.0, 165.0], [35.1, 165.0], [35.2, 166.0], [35.3, 167.0], [35.4, 168.0], [35.5, 169.0], [35.6, 169.0], [35.7, 170.0], [35.8, 170.0], [35.9, 171.0], [36.0, 171.0], [36.1, 172.0], [36.2, 173.0], [36.3, 173.0], [36.4, 173.0], [36.5, 174.0], [36.6, 174.0], [36.7, 175.0], [36.8, 176.0], [36.9, 176.0], [37.0, 177.0], [37.1, 177.0], [37.2, 178.0], [37.3, 178.0], [37.4, 179.0], [37.5, 180.0], [37.6, 180.0], [37.7, 181.0], [37.8, 181.0], [37.9, 182.0], [38.0, 182.0], [38.1, 183.0], [38.2, 183.0], [38.3, 184.0], [38.4, 184.0], [38.5, 185.0], [38.6, 186.0], [38.7, 186.0], [38.8, 187.0], [38.9, 188.0], [39.0, 188.0], [39.1, 189.0], [39.2, 189.0], [39.3, 190.0], [39.4, 191.0], [39.5, 192.0], [39.6, 192.0], [39.7, 193.0], [39.8, 193.0], [39.9, 194.0], [40.0, 194.0], [40.1, 195.0], [40.2, 196.0], [40.3, 196.0], [40.4, 197.0], [40.5, 198.0], [40.6, 198.0], [40.7, 199.0], [40.8, 199.0], [40.9, 200.0], [41.0, 201.0], [41.1, 202.0], [41.2, 203.0], [41.3, 203.0], [41.4, 204.0], [41.5, 205.0], [41.6, 206.0], [41.7, 208.0], [41.8, 208.0], [41.9, 208.0], [42.0, 209.0], [42.1, 210.0], [42.2, 210.0], [42.3, 211.0], [42.4, 212.0], [42.5, 212.0], [42.6, 213.0], [42.7, 214.0], [42.8, 215.0], [42.9, 215.0], [43.0, 216.0], [43.1, 216.0], [43.2, 217.0], [43.3, 217.0], [43.4, 219.0], [43.5, 219.0], [43.6, 220.0], [43.7, 221.0], [43.8, 221.0], [43.9, 222.0], [44.0, 222.0], [44.1, 223.0], [44.2, 224.0], [44.3, 225.0], [44.4, 225.0], [44.5, 226.0], [44.6, 227.0], [44.7, 228.0], [44.8, 228.0], [44.9, 229.0], [45.0, 230.0], [45.1, 231.0], [45.2, 232.0], [45.3, 233.0], [45.4, 233.0], [45.5, 234.0], [45.6, 234.0], [45.7, 235.0], [45.8, 236.0], [45.9, 237.0], [46.0, 237.0], [46.1, 238.0], [46.2, 238.0], [46.3, 239.0], [46.4, 240.0], [46.5, 241.0], [46.6, 242.0], [46.7, 242.0], [46.8, 243.0], [46.9, 244.0], [47.0, 244.0], [47.1, 245.0], [47.2, 245.0], [47.3, 246.0], [47.4, 248.0], [47.5, 249.0], [47.6, 249.0], [47.7, 251.0], [47.8, 252.0], [47.9, 253.0], [48.0, 253.0], [48.1, 254.0], [48.2, 255.0], [48.3, 256.0], [48.4, 256.0], [48.5, 257.0], [48.6, 257.0], [48.7, 258.0], [48.8, 259.0], [48.9, 260.0], [49.0, 261.0], [49.1, 261.0], [49.2, 262.0], [49.3, 263.0], [49.4, 264.0], [49.5, 265.0], [49.6, 265.0], [49.7, 266.0], [49.8, 267.0], [49.9, 268.0], [50.0, 268.0], [50.1, 269.0], [50.2, 270.0], [50.3, 271.0], [50.4, 272.0], [50.5, 273.0], [50.6, 274.0], [50.7, 274.0], [50.8, 276.0], [50.9, 277.0], [51.0, 279.0], [51.1, 279.0], [51.2, 280.0], [51.3, 281.0], [51.4, 281.0], [51.5, 282.0], [51.6, 283.0], [51.7, 284.0], [51.8, 285.0], [51.9, 286.0], [52.0, 287.0], [52.1, 288.0], [52.2, 289.0], [52.3, 291.0], [52.4, 292.0], [52.5, 294.0], [52.6, 295.0], [52.7, 297.0], [52.8, 298.0], [52.9, 299.0], [53.0, 300.0], [53.1, 300.0], [53.2, 302.0], [53.3, 303.0], [53.4, 303.0], [53.5, 304.0], [53.6, 305.0], [53.7, 306.0], [53.8, 307.0], [53.9, 307.0], [54.0, 308.0], [54.1, 308.0], [54.2, 309.0], [54.3, 310.0], [54.4, 311.0], [54.5, 312.0], [54.6, 313.0], [54.7, 314.0], [54.8, 316.0], [54.9, 316.0], [55.0, 318.0], [55.1, 319.0], [55.2, 320.0], [55.3, 321.0], [55.4, 321.0], [55.5, 322.0], [55.6, 323.0], [55.7, 324.0], [55.8, 325.0], [55.9, 326.0], [56.0, 326.0], [56.1, 327.0], [56.2, 327.0], [56.3, 329.0], [56.4, 331.0], [56.5, 332.0], [56.6, 333.0], [56.7, 334.0], [56.8, 335.0], [56.9, 336.0], [57.0, 336.0], [57.1, 337.0], [57.2, 339.0], [57.3, 340.0], [57.4, 342.0], [57.5, 344.0], [57.6, 345.0], [57.7, 346.0], [57.8, 346.0], [57.9, 347.0], [58.0, 349.0], [58.1, 349.0], [58.2, 351.0], [58.3, 353.0], [58.4, 355.0], [58.5, 356.0], [58.6, 358.0], [58.7, 359.0], [58.8, 360.0], [58.9, 361.0], [59.0, 363.0], [59.1, 364.0], [59.2, 366.0], [59.3, 366.0], [59.4, 367.0], [59.5, 369.0], [59.6, 371.0], [59.7, 372.0], [59.8, 372.0], [59.9, 374.0], [60.0, 375.0], [60.1, 376.0], [60.2, 377.0], [60.3, 377.0], [60.4, 378.0], [60.5, 379.0], [60.6, 380.0], [60.7, 381.0], [60.8, 382.0], [60.9, 383.0], [61.0, 383.0], [61.1, 385.0], [61.2, 386.0], [61.3, 387.0], [61.4, 387.0], [61.5, 388.0], [61.6, 390.0], [61.7, 391.0], [61.8, 392.0], [61.9, 394.0], [62.0, 395.0], [62.1, 395.0], [62.2, 396.0], [62.3, 397.0], [62.4, 399.0], [62.5, 399.0], [62.6, 401.0], [62.7, 402.0], [62.8, 403.0], [62.9, 403.0], [63.0, 405.0], [63.1, 406.0], [63.2, 407.0], [63.3, 408.0], [63.4, 409.0], [63.5, 410.0], [63.6, 411.0], [63.7, 411.0], [63.8, 413.0], [63.9, 414.0], [64.0, 414.0], [64.1, 415.0], [64.2, 417.0], [64.3, 418.0], [64.4, 418.0], [64.5, 419.0], [64.6, 421.0], [64.7, 421.0], [64.8, 422.0], [64.9, 424.0], [65.0, 425.0], [65.1, 426.0], [65.2, 427.0], [65.3, 428.0], [65.4, 430.0], [65.5, 430.0], [65.6, 431.0], [65.7, 432.0], [65.8, 432.0], [65.9, 433.0], [66.0, 434.0], [66.1, 435.0], [66.2, 435.0], [66.3, 437.0], [66.4, 438.0], [66.5, 439.0], [66.6, 440.0], [66.7, 441.0], [66.8, 443.0], [66.9, 444.0], [67.0, 445.0], [67.1, 446.0], [67.2, 447.0], [67.3, 448.0], [67.4, 449.0], [67.5, 451.0], [67.6, 452.0], [67.7, 454.0], [67.8, 455.0], [67.9, 456.0], [68.0, 458.0], [68.1, 459.0], [68.2, 460.0], [68.3, 461.0], [68.4, 463.0], [68.5, 464.0], [68.6, 466.0], [68.7, 467.0], [68.8, 467.0], [68.9, 468.0], [69.0, 470.0], [69.1, 471.0], [69.2, 472.0], [69.3, 473.0], [69.4, 474.0], [69.5, 475.0], [69.6, 476.0], [69.7, 477.0], [69.8, 478.0], [69.9, 480.0], [70.0, 480.0], [70.1, 481.0], [70.2, 483.0], [70.3, 484.0], [70.4, 485.0], [70.5, 486.0], [70.6, 487.0], [70.7, 488.0], [70.8, 489.0], [70.9, 490.0], [71.0, 492.0], [71.1, 493.0], [71.2, 494.0], [71.3, 496.0], [71.4, 498.0], [71.5, 498.0], [71.6, 499.0], [71.7, 501.0], [71.8, 501.0], [71.9, 502.0], [72.0, 503.0], [72.1, 504.0], [72.2, 505.0], [72.3, 506.0], [72.4, 507.0], [72.5, 508.0], [72.6, 509.0], [72.7, 511.0], [72.8, 512.0], [72.9, 513.0], [73.0, 513.0], [73.1, 514.0], [73.2, 514.0], [73.3, 516.0], [73.4, 517.0], [73.5, 517.0], [73.6, 518.0], [73.7, 519.0], [73.8, 519.0], [73.9, 520.0], [74.0, 521.0], [74.1, 522.0], [74.2, 523.0], [74.3, 524.0], [74.4, 524.0], [74.5, 525.0], [74.6, 526.0], [74.7, 527.0], [74.8, 528.0], [74.9, 529.0], [75.0, 529.0], [75.1, 530.0], [75.2, 531.0], [75.3, 533.0], [75.4, 534.0], [75.5, 535.0], [75.6, 536.0], [75.7, 537.0], [75.8, 539.0], [75.9, 539.0], [76.0, 540.0], [76.1, 540.0], [76.2, 541.0], [76.3, 542.0], [76.4, 544.0], [76.5, 545.0], [76.6, 546.0], [76.7, 547.0], [76.8, 548.0], [76.9, 549.0], [77.0, 550.0], [77.1, 552.0], [77.2, 552.0], [77.3, 554.0], [77.4, 555.0], [77.5, 556.0], [77.6, 557.0], [77.7, 558.0], [77.8, 558.0], [77.9, 560.0], [78.0, 561.0], [78.1, 562.0], [78.2, 563.0], [78.3, 564.0], [78.4, 564.0], [78.5, 565.0], [78.6, 566.0], [78.7, 567.0], [78.8, 568.0], [78.9, 569.0], [79.0, 570.0], [79.1, 571.0], [79.2, 572.0], [79.3, 573.0], [79.4, 574.0], [79.5, 574.0], [79.6, 575.0], [79.7, 577.0], [79.8, 578.0], [79.9, 580.0], [80.0, 581.0], [80.1, 582.0], [80.2, 583.0], [80.3, 584.0], [80.4, 586.0], [80.5, 587.0], [80.6, 589.0], [80.7, 590.0], [80.8, 591.0], [80.9, 594.0], [81.0, 594.0], [81.1, 595.0], [81.2, 598.0], [81.3, 600.0], [81.4, 600.0], [81.5, 602.0], [81.6, 602.0], [81.7, 603.0], [81.8, 604.0], [81.9, 606.0], [82.0, 607.0], [82.1, 608.0], [82.2, 610.0], [82.3, 612.0], [82.4, 613.0], [82.5, 614.0], [82.6, 616.0], [82.7, 619.0], [82.8, 621.0], [82.9, 622.0], [83.0, 623.0], [83.1, 625.0], [83.2, 626.0], [83.3, 627.0], [83.4, 629.0], [83.5, 631.0], [83.6, 633.0], [83.7, 635.0], [83.8, 636.0], [83.9, 638.0], [84.0, 639.0], [84.1, 640.0], [84.2, 641.0], [84.3, 642.0], [84.4, 644.0], [84.5, 645.0], [84.6, 647.0], [84.7, 649.0], [84.8, 651.0], [84.9, 653.0], [85.0, 655.0], [85.1, 656.0], [85.2, 658.0], [85.3, 659.0], [85.4, 661.0], [85.5, 662.0], [85.6, 662.0], [85.7, 664.0], [85.8, 665.0], [85.9, 667.0], [86.0, 669.0], [86.1, 670.0], [86.2, 672.0], [86.3, 673.0], [86.4, 676.0], [86.5, 678.0], [86.6, 679.0], [86.7, 680.0], [86.8, 681.0], [86.9, 683.0], [87.0, 686.0], [87.1, 687.0], [87.2, 690.0], [87.3, 693.0], [87.4, 696.0], [87.5, 697.0], [87.6, 699.0], [87.7, 702.0], [87.8, 703.0], [87.9, 705.0], [88.0, 707.0], [88.1, 710.0], [88.2, 711.0], [88.3, 713.0], [88.4, 714.0], [88.5, 718.0], [88.6, 721.0], [88.7, 723.0], [88.8, 726.0], [88.9, 728.0], [89.0, 731.0], [89.1, 734.0], [89.2, 736.0], [89.3, 738.0], [89.4, 741.0], [89.5, 744.0], [89.6, 748.0], [89.7, 749.0], [89.8, 752.0], [89.9, 754.0], [90.0, 757.0], [90.1, 761.0], [90.2, 762.0], [90.3, 764.0], [90.4, 767.0], [90.5, 773.0], [90.6, 775.0], [90.7, 780.0], [90.8, 782.0], [90.9, 783.0], [91.0, 785.0], [91.1, 789.0], [91.2, 792.0], [91.3, 794.0], [91.4, 799.0], [91.5, 802.0], [91.6, 804.0], [91.7, 806.0], [91.8, 810.0], [91.9, 814.0], [92.0, 818.0], [92.1, 822.0], [92.2, 828.0], [92.3, 832.0], [92.4, 836.0], [92.5, 839.0], [92.6, 840.0], [92.7, 842.0], [92.8, 844.0], [92.9, 847.0], [93.0, 849.0], [93.1, 853.0], [93.2, 855.0], [93.3, 860.0], [93.4, 864.0], [93.5, 865.0], [93.6, 868.0], [93.7, 871.0], [93.8, 873.0], [93.9, 875.0], [94.0, 879.0], [94.1, 883.0], [94.2, 887.0], [94.3, 891.0], [94.4, 894.0], [94.5, 900.0], [94.6, 905.0], [94.7, 909.0], [94.8, 913.0], [94.9, 914.0], [95.0, 918.0], [95.1, 922.0], [95.2, 926.0], [95.3, 932.0], [95.4, 937.0], [95.5, 942.0], [95.6, 944.0], [95.7, 949.0], [95.8, 959.0], [95.9, 961.0], [96.0, 967.0], [96.1, 973.0], [96.2, 982.0], [96.3, 985.0], [96.4, 989.0], [96.5, 995.0], [96.6, 1005.0], [96.7, 1012.0], [96.8, 1021.0], [96.9, 1039.0], [97.0, 1053.0], [97.1, 1065.0], [97.2, 1075.0], [97.3, 1087.0], [97.4, 1095.0], [97.5, 1101.0], [97.6, 1110.0], [97.7, 1117.0], [97.8, 1126.0], [97.9, 1133.0], [98.0, 1140.0], [98.1, 1158.0], [98.2, 1172.0], [98.3, 1177.0], [98.4, 1182.0], [98.5, 1191.0], [98.6, 1197.0], [98.7, 1216.0], [98.8, 1223.0], [98.9, 1229.0], [99.0, 1245.0], [99.1, 1252.0], [99.2, 1279.0], [99.3, 1311.0], [99.4, 1331.0], [99.5, 1376.0], [99.6, 1445.0], [99.7, 1469.0], [99.8, 1525.0], [99.9, 1679.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 1089.0, "series": [{"data": [[0.0, 1030.0], [2100.0, 2.0], [600.0, 330.0], [700.0, 197.0], [800.0, 160.0], [200.0, 629.0], [900.0, 108.0], [1000.0, 48.0], [1100.0, 59.0], [1200.0, 32.0], [300.0, 497.0], [1300.0, 16.0], [1400.0, 10.0], [1500.0, 5.0], [100.0, 1089.0], [400.0, 472.0], [1600.0, 3.0], [1700.0, 1.0], [1800.0, 2.0], [500.0, 500.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 2100.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 13.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 3721.0, "series": [{"data": [[0.0, 3721.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1456.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 13.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.375, "minX": 1.60285086E12, "maxY": 10.0, "series": [{"data": [[1.60285104E12, 10.0], [1.6028511E12, 9.375], [1.60285092E12, 10.0], [1.60285098E12, 10.0], [1.60285086E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6028511E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 200.0, "minX": 1.0, "maxY": 1129.0, "series": [{"data": [[8.0, 266.0], [4.0, 642.0], [2.0, 702.0], [1.0, 1129.0], [9.0, 808.0], [10.0, 356.74560895580055], [5.0, 277.0], [6.0, 370.0], [3.0, 648.0], [7.0, 200.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.991329479768785, 357.09845857418156]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 503.01666666666665, "minX": 1.60285086E12, "maxY": 5570820.866666666, "series": [{"data": [[1.60285104E12, 5570820.866666666], [1.6028511E12, 225249.1], [1.60285092E12, 5329757.55], [1.60285098E12, 5492878.066666666], [1.60285086E12, 293049.35]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60285104E12, 13264.916666666666], [1.6028511E12, 566.0833333333334], [1.60285092E12, 12604.366666666667], [1.60285098E12, 12830.25], [1.60285086E12, 503.01666666666665]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6028511E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 328.375, "minX": 1.60285086E12, "maxY": 526.2615384615384, "series": [{"data": [[1.60285104E12, 348.7087944088526], [1.6028511E12, 328.375], [1.60285092E12, 359.9429086538463], [1.60285098E12, 357.5436602870813], [1.60285086E12, 526.2615384615384]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6028511E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 327.23611111111114, "minX": 1.60285086E12, "maxY": 524.2, "series": [{"data": [[1.60285104E12, 347.53290623179987], [1.6028511E12, 327.23611111111114], [1.60285092E12, 358.4639423076922], [1.60285098E12, 356.0897129186609], [1.60285086E12, 524.2]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6028511E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.005980861244019146, "minX": 1.60285086E12, "maxY": 1.3692307692307693, "series": [{"data": [[1.60285104E12, 0.011065812463599316], [1.6028511E12, 0.02777777777777778], [1.60285092E12, 0.006610576923076919], [1.60285098E12, 0.005980861244019146], [1.60285086E12, 1.3692307692307693]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6028511E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 29.0, "minX": 1.60285086E12, "maxY": 2129.0, "series": [{"data": [[1.60285104E12, 2105.0], [1.6028511E12, 1129.0], [1.60285092E12, 2129.0], [1.60285098E12, 1894.0], [1.60285086E12, 1523.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60285104E12, 36.461999590396886], [1.6028511E12, 50.0], [1.60285092E12, 38.0], [1.60285098E12, 39.0], [1.60285086E12, 56.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60285104E12, 37.0], [1.6028511E12, 50.0], [1.60285092E12, 38.483500158786775], [1.60285098E12, 39.0], [1.60285086E12, 56.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60285104E12, 37.0], [1.6028511E12, 50.0], [1.60285092E12, 38.0], [1.60285098E12, 39.0], [1.60285086E12, 56.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60285104E12, 32.0], [1.6028511E12, 50.0], [1.60285092E12, 32.0], [1.60285098E12, 29.0], [1.60285086E12, 56.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60285104E12, 255.0], [1.6028511E12, 263.5], [1.60285092E12, 254.5], [1.60285098E12, 288.5], [1.60285086E12, 486.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6028511E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 66.5, "minX": 5.0, "maxY": 745.0, "series": [{"data": [[32.0, 278.5], [33.0, 284.0], [34.0, 193.5], [35.0, 256.0], [37.0, 151.0], [36.0, 85.5], [39.0, 269.5], [38.0, 163.5], [40.0, 188.5], [42.0, 147.5], [43.0, 192.5], [45.0, 102.0], [44.0, 154.0], [46.0, 99.5], [49.0, 159.0], [50.0, 159.5], [52.0, 154.0], [53.0, 148.0], [55.0, 118.0], [57.0, 90.0], [59.0, 87.0], [62.0, 150.0], [70.0, 94.0], [74.0, 66.5], [72.0, 86.5], [5.0, 745.0], [6.0, 645.0], [10.0, 603.0], [13.0, 543.0], [14.0, 580.5], [15.0, 566.0], [16.0, 575.0], [17.0, 557.5], [18.0, 543.0], [19.0, 479.0], [20.0, 495.0], [21.0, 457.5], [22.0, 411.0], [23.0, 420.0], [24.0, 409.0], [25.0, 346.0], [26.0, 337.5], [27.0, 375.5], [28.0, 322.5], [29.0, 325.0], [30.0, 280.5], [31.0, 293.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 74.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 66.0, "minX": 5.0, "maxY": 745.0, "series": [{"data": [[32.0, 278.0], [33.0, 283.0], [34.0, 191.0], [35.0, 255.0], [37.0, 150.0], [36.0, 85.0], [39.0, 269.0], [38.0, 163.5], [40.0, 187.0], [42.0, 147.5], [43.0, 192.0], [45.0, 102.0], [44.0, 153.0], [46.0, 99.0], [49.0, 158.0], [50.0, 159.0], [52.0, 153.0], [53.0, 148.0], [55.0, 118.0], [57.0, 90.0], [59.0, 87.0], [62.0, 149.0], [70.0, 93.5], [74.0, 66.0], [72.0, 86.0], [5.0, 745.0], [6.0, 643.5], [10.0, 594.5], [13.0, 537.5], [14.0, 580.5], [15.0, 564.5], [16.0, 572.5], [17.0, 552.5], [18.0, 536.0], [19.0, 476.5], [20.0, 494.0], [21.0, 457.0], [22.0, 411.0], [23.0, 419.0], [24.0, 407.0], [25.0, 346.0], [26.0, 337.0], [27.0, 375.0], [28.0, 320.5], [29.0, 323.0], [30.0, 280.0], [31.0, 291.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 74.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1.0333333333333334, "minX": 1.60285086E12, "maxY": 28.616666666666667, "series": [{"data": [[1.60285104E12, 28.616666666666667], [1.6028511E12, 1.0333333333333334], [1.60285092E12, 27.733333333333334], [1.60285098E12, 27.866666666666667], [1.60285086E12, 1.25]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6028511E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1.0833333333333333, "minX": 1.60285086E12, "maxY": 28.616666666666667, "series": [{"data": [[1.60285104E12, 28.616666666666667], [1.6028511E12, 1.2], [1.60285092E12, 27.733333333333334], [1.60285098E12, 27.866666666666667], [1.60285086E12, 1.0833333333333333]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6028511E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.0833333333333333, "minX": 1.60285086E12, "maxY": 28.616666666666667, "series": [{"data": [[1.60285104E12, 28.616666666666667], [1.6028511E12, 1.2], [1.60285092E12, 27.733333333333334], [1.60285098E12, 27.866666666666667], [1.60285086E12, 1.0833333333333333]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6028511E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.0833333333333333, "minX": 1.60285086E12, "maxY": 28.616666666666667, "series": [{"data": [[1.60285104E12, 28.616666666666667], [1.6028511E12, 1.2], [1.60285092E12, 27.733333333333334], [1.60285098E12, 27.866666666666667], [1.60285086E12, 1.0833333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6028511E12, "title": "Total Transactions Per Second"}},
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

