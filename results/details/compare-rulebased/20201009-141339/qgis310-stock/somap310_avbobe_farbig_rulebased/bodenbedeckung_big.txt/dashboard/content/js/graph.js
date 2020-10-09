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
        data: {"result": {"minY": 29.0, "minX": 0.0, "maxY": 2448.0, "series": [{"data": [[0.0, 29.0], [0.1, 31.0], [0.2, 32.0], [0.3, 33.0], [0.4, 33.0], [0.5, 33.0], [0.6, 34.0], [0.7, 34.0], [0.8, 34.0], [0.9, 35.0], [1.0, 35.0], [1.1, 36.0], [1.2, 36.0], [1.3, 36.0], [1.4, 37.0], [1.5, 37.0], [1.6, 37.0], [1.7, 37.0], [1.8, 37.0], [1.9, 38.0], [2.0, 38.0], [2.1, 38.0], [2.2, 39.0], [2.3, 39.0], [2.4, 39.0], [2.5, 39.0], [2.6, 39.0], [2.7, 40.0], [2.8, 40.0], [2.9, 40.0], [3.0, 40.0], [3.1, 40.0], [3.2, 41.0], [3.3, 41.0], [3.4, 41.0], [3.5, 41.0], [3.6, 42.0], [3.7, 42.0], [3.8, 42.0], [3.9, 42.0], [4.0, 42.0], [4.1, 42.0], [4.2, 42.0], [4.3, 42.0], [4.4, 43.0], [4.5, 43.0], [4.6, 43.0], [4.7, 43.0], [4.8, 43.0], [4.9, 44.0], [5.0, 44.0], [5.1, 44.0], [5.2, 44.0], [5.3, 44.0], [5.4, 44.0], [5.5, 44.0], [5.6, 44.0], [5.7, 44.0], [5.8, 44.0], [5.9, 45.0], [6.0, 45.0], [6.1, 45.0], [6.2, 45.0], [6.3, 45.0], [6.4, 45.0], [6.5, 45.0], [6.6, 46.0], [6.7, 46.0], [6.8, 46.0], [6.9, 46.0], [7.0, 47.0], [7.1, 47.0], [7.2, 47.0], [7.3, 47.0], [7.4, 48.0], [7.5, 48.0], [7.6, 48.0], [7.7, 48.0], [7.8, 49.0], [7.9, 49.0], [8.0, 49.0], [8.1, 50.0], [8.2, 50.0], [8.3, 50.0], [8.4, 50.0], [8.5, 50.0], [8.6, 51.0], [8.7, 51.0], [8.8, 52.0], [8.9, 52.0], [9.0, 52.0], [9.1, 53.0], [9.2, 53.0], [9.3, 53.0], [9.4, 53.0], [9.5, 54.0], [9.6, 54.0], [9.7, 54.0], [9.8, 55.0], [9.9, 55.0], [10.0, 55.0], [10.1, 56.0], [10.2, 56.0], [10.3, 57.0], [10.4, 57.0], [10.5, 58.0], [10.6, 58.0], [10.7, 59.0], [10.8, 59.0], [10.9, 59.0], [11.0, 59.0], [11.1, 60.0], [11.2, 60.0], [11.3, 60.0], [11.4, 61.0], [11.5, 61.0], [11.6, 62.0], [11.7, 62.0], [11.8, 63.0], [11.9, 63.0], [12.0, 63.0], [12.1, 64.0], [12.2, 64.0], [12.3, 64.0], [12.4, 65.0], [12.5, 65.0], [12.6, 66.0], [12.7, 66.0], [12.8, 66.0], [12.9, 67.0], [13.0, 67.0], [13.1, 68.0], [13.2, 69.0], [13.3, 69.0], [13.4, 69.0], [13.5, 69.0], [13.6, 70.0], [13.7, 70.0], [13.8, 71.0], [13.9, 71.0], [14.0, 71.0], [14.1, 71.0], [14.2, 72.0], [14.3, 72.0], [14.4, 72.0], [14.5, 73.0], [14.6, 73.0], [14.7, 74.0], [14.8, 74.0], [14.9, 75.0], [15.0, 75.0], [15.1, 75.0], [15.2, 75.0], [15.3, 76.0], [15.4, 76.0], [15.5, 76.0], [15.6, 76.0], [15.7, 77.0], [15.8, 77.0], [15.9, 78.0], [16.0, 78.0], [16.1, 78.0], [16.2, 79.0], [16.3, 79.0], [16.4, 79.0], [16.5, 79.0], [16.6, 80.0], [16.7, 80.0], [16.8, 80.0], [16.9, 81.0], [17.0, 81.0], [17.1, 82.0], [17.2, 82.0], [17.3, 83.0], [17.4, 83.0], [17.5, 83.0], [17.6, 83.0], [17.7, 84.0], [17.8, 84.0], [17.9, 84.0], [18.0, 84.0], [18.1, 84.0], [18.2, 85.0], [18.3, 85.0], [18.4, 86.0], [18.5, 86.0], [18.6, 87.0], [18.7, 87.0], [18.8, 87.0], [18.9, 88.0], [19.0, 88.0], [19.1, 88.0], [19.2, 89.0], [19.3, 90.0], [19.4, 90.0], [19.5, 91.0], [19.6, 91.0], [19.7, 91.0], [19.8, 92.0], [19.9, 92.0], [20.0, 93.0], [20.1, 93.0], [20.2, 93.0], [20.3, 93.0], [20.4, 94.0], [20.5, 95.0], [20.6, 95.0], [20.7, 96.0], [20.8, 96.0], [20.9, 97.0], [21.0, 98.0], [21.1, 98.0], [21.2, 99.0], [21.3, 99.0], [21.4, 99.0], [21.5, 100.0], [21.6, 100.0], [21.7, 101.0], [21.8, 101.0], [21.9, 102.0], [22.0, 102.0], [22.1, 102.0], [22.2, 103.0], [22.3, 104.0], [22.4, 104.0], [22.5, 104.0], [22.6, 105.0], [22.7, 105.0], [22.8, 106.0], [22.9, 106.0], [23.0, 107.0], [23.1, 108.0], [23.2, 108.0], [23.3, 108.0], [23.4, 109.0], [23.5, 110.0], [23.6, 110.0], [23.7, 111.0], [23.8, 111.0], [23.9, 112.0], [24.0, 112.0], [24.1, 113.0], [24.2, 113.0], [24.3, 114.0], [24.4, 114.0], [24.5, 114.0], [24.6, 114.0], [24.7, 115.0], [24.8, 115.0], [24.9, 115.0], [25.0, 116.0], [25.1, 116.0], [25.2, 116.0], [25.3, 117.0], [25.4, 117.0], [25.5, 117.0], [25.6, 117.0], [25.7, 118.0], [25.8, 118.0], [25.9, 118.0], [26.0, 119.0], [26.1, 120.0], [26.2, 120.0], [26.3, 121.0], [26.4, 121.0], [26.5, 122.0], [26.6, 122.0], [26.7, 123.0], [26.8, 123.0], [26.9, 124.0], [27.0, 125.0], [27.1, 125.0], [27.2, 126.0], [27.3, 126.0], [27.4, 127.0], [27.5, 127.0], [27.6, 128.0], [27.7, 128.0], [27.8, 129.0], [27.9, 129.0], [28.0, 129.0], [28.1, 130.0], [28.2, 131.0], [28.3, 131.0], [28.4, 132.0], [28.5, 132.0], [28.6, 132.0], [28.7, 133.0], [28.8, 133.0], [28.9, 133.0], [29.0, 133.0], [29.1, 134.0], [29.2, 134.0], [29.3, 134.0], [29.4, 134.0], [29.5, 135.0], [29.6, 135.0], [29.7, 135.0], [29.8, 135.0], [29.9, 136.0], [30.0, 136.0], [30.1, 136.0], [30.2, 136.0], [30.3, 137.0], [30.4, 137.0], [30.5, 137.0], [30.6, 138.0], [30.7, 138.0], [30.8, 138.0], [30.9, 138.0], [31.0, 139.0], [31.1, 139.0], [31.2, 139.0], [31.3, 139.0], [31.4, 139.0], [31.5, 140.0], [31.6, 140.0], [31.7, 140.0], [31.8, 141.0], [31.9, 141.0], [32.0, 141.0], [32.1, 142.0], [32.2, 142.0], [32.3, 142.0], [32.4, 143.0], [32.5, 143.0], [32.6, 143.0], [32.7, 144.0], [32.8, 144.0], [32.9, 145.0], [33.0, 145.0], [33.1, 146.0], [33.2, 146.0], [33.3, 146.0], [33.4, 146.0], [33.5, 147.0], [33.6, 148.0], [33.7, 148.0], [33.8, 149.0], [33.9, 149.0], [34.0, 149.0], [34.1, 150.0], [34.2, 150.0], [34.3, 150.0], [34.4, 151.0], [34.5, 151.0], [34.6, 152.0], [34.7, 152.0], [34.8, 153.0], [34.9, 153.0], [35.0, 155.0], [35.1, 155.0], [35.2, 155.0], [35.3, 156.0], [35.4, 157.0], [35.5, 157.0], [35.6, 158.0], [35.7, 158.0], [35.8, 158.0], [35.9, 159.0], [36.0, 159.0], [36.1, 160.0], [36.2, 161.0], [36.3, 161.0], [36.4, 162.0], [36.5, 163.0], [36.6, 163.0], [36.7, 164.0], [36.8, 164.0], [36.9, 165.0], [37.0, 165.0], [37.1, 166.0], [37.2, 166.0], [37.3, 167.0], [37.4, 167.0], [37.5, 167.0], [37.6, 168.0], [37.7, 169.0], [37.8, 169.0], [37.9, 170.0], [38.0, 171.0], [38.1, 171.0], [38.2, 171.0], [38.3, 172.0], [38.4, 172.0], [38.5, 173.0], [38.6, 173.0], [38.7, 174.0], [38.8, 174.0], [38.9, 175.0], [39.0, 175.0], [39.1, 176.0], [39.2, 176.0], [39.3, 177.0], [39.4, 178.0], [39.5, 179.0], [39.6, 179.0], [39.7, 180.0], [39.8, 181.0], [39.9, 181.0], [40.0, 182.0], [40.1, 182.0], [40.2, 183.0], [40.3, 184.0], [40.4, 184.0], [40.5, 185.0], [40.6, 186.0], [40.7, 186.0], [40.8, 187.0], [40.9, 188.0], [41.0, 188.0], [41.1, 189.0], [41.2, 190.0], [41.3, 190.0], [41.4, 191.0], [41.5, 192.0], [41.6, 192.0], [41.7, 193.0], [41.8, 193.0], [41.9, 194.0], [42.0, 195.0], [42.1, 196.0], [42.2, 196.0], [42.3, 197.0], [42.4, 198.0], [42.5, 198.0], [42.6, 199.0], [42.7, 200.0], [42.8, 201.0], [42.9, 201.0], [43.0, 202.0], [43.1, 203.0], [43.2, 203.0], [43.3, 203.0], [43.4, 204.0], [43.5, 205.0], [43.6, 205.0], [43.7, 207.0], [43.8, 208.0], [43.9, 208.0], [44.0, 210.0], [44.1, 210.0], [44.2, 210.0], [44.3, 211.0], [44.4, 212.0], [44.5, 214.0], [44.6, 214.0], [44.7, 215.0], [44.8, 217.0], [44.9, 218.0], [45.0, 219.0], [45.1, 219.0], [45.2, 220.0], [45.3, 220.0], [45.4, 221.0], [45.5, 222.0], [45.6, 224.0], [45.7, 225.0], [45.8, 225.0], [45.9, 226.0], [46.0, 226.0], [46.1, 227.0], [46.2, 227.0], [46.3, 228.0], [46.4, 228.0], [46.5, 229.0], [46.6, 230.0], [46.7, 231.0], [46.8, 232.0], [46.9, 233.0], [47.0, 233.0], [47.1, 234.0], [47.2, 235.0], [47.3, 236.0], [47.4, 237.0], [47.5, 238.0], [47.6, 239.0], [47.7, 240.0], [47.8, 240.0], [47.9, 241.0], [48.0, 243.0], [48.1, 244.0], [48.2, 245.0], [48.3, 246.0], [48.4, 247.0], [48.5, 248.0], [48.6, 248.0], [48.7, 250.0], [48.8, 251.0], [48.9, 252.0], [49.0, 253.0], [49.1, 253.0], [49.2, 255.0], [49.3, 256.0], [49.4, 257.0], [49.5, 257.0], [49.6, 258.0], [49.7, 259.0], [49.8, 260.0], [49.9, 260.0], [50.0, 261.0], [50.1, 262.0], [50.2, 263.0], [50.3, 264.0], [50.4, 265.0], [50.5, 266.0], [50.6, 267.0], [50.7, 268.0], [50.8, 269.0], [50.9, 270.0], [51.0, 270.0], [51.1, 271.0], [51.2, 272.0], [51.3, 273.0], [51.4, 274.0], [51.5, 275.0], [51.6, 276.0], [51.7, 276.0], [51.8, 278.0], [51.9, 278.0], [52.0, 279.0], [52.1, 280.0], [52.2, 281.0], [52.3, 283.0], [52.4, 284.0], [52.5, 284.0], [52.6, 285.0], [52.7, 286.0], [52.8, 287.0], [52.9, 288.0], [53.0, 289.0], [53.1, 290.0], [53.2, 291.0], [53.3, 291.0], [53.4, 292.0], [53.5, 294.0], [53.6, 295.0], [53.7, 295.0], [53.8, 297.0], [53.9, 297.0], [54.0, 298.0], [54.1, 299.0], [54.2, 300.0], [54.3, 301.0], [54.4, 302.0], [54.5, 302.0], [54.6, 303.0], [54.7, 303.0], [54.8, 305.0], [54.9, 307.0], [55.0, 308.0], [55.1, 310.0], [55.2, 311.0], [55.3, 312.0], [55.4, 312.0], [55.5, 313.0], [55.6, 314.0], [55.7, 315.0], [55.8, 316.0], [55.9, 318.0], [56.0, 319.0], [56.1, 320.0], [56.2, 320.0], [56.3, 321.0], [56.4, 323.0], [56.5, 324.0], [56.6, 325.0], [56.7, 327.0], [56.8, 327.0], [56.9, 328.0], [57.0, 329.0], [57.1, 330.0], [57.2, 331.0], [57.3, 332.0], [57.4, 333.0], [57.5, 335.0], [57.6, 337.0], [57.7, 337.0], [57.8, 339.0], [57.9, 340.0], [58.0, 341.0], [58.1, 342.0], [58.2, 343.0], [58.3, 344.0], [58.4, 345.0], [58.5, 346.0], [58.6, 347.0], [58.7, 348.0], [58.8, 349.0], [58.9, 349.0], [59.0, 350.0], [59.1, 352.0], [59.2, 353.0], [59.3, 355.0], [59.4, 356.0], [59.5, 357.0], [59.6, 358.0], [59.7, 359.0], [59.8, 360.0], [59.9, 361.0], [60.0, 361.0], [60.1, 362.0], [60.2, 363.0], [60.3, 364.0], [60.4, 365.0], [60.5, 366.0], [60.6, 367.0], [60.7, 368.0], [60.8, 369.0], [60.9, 370.0], [61.0, 372.0], [61.1, 373.0], [61.2, 374.0], [61.3, 375.0], [61.4, 376.0], [61.5, 377.0], [61.6, 379.0], [61.7, 380.0], [61.8, 382.0], [61.9, 382.0], [62.0, 383.0], [62.1, 385.0], [62.2, 386.0], [62.3, 387.0], [62.4, 390.0], [62.5, 391.0], [62.6, 391.0], [62.7, 393.0], [62.8, 394.0], [62.9, 395.0], [63.0, 396.0], [63.1, 397.0], [63.2, 399.0], [63.3, 400.0], [63.4, 401.0], [63.5, 402.0], [63.6, 403.0], [63.7, 405.0], [63.8, 405.0], [63.9, 407.0], [64.0, 408.0], [64.1, 409.0], [64.2, 411.0], [64.3, 412.0], [64.4, 415.0], [64.5, 416.0], [64.6, 417.0], [64.7, 418.0], [64.8, 418.0], [64.9, 419.0], [65.0, 420.0], [65.1, 421.0], [65.2, 423.0], [65.3, 424.0], [65.4, 425.0], [65.5, 426.0], [65.6, 428.0], [65.7, 428.0], [65.8, 429.0], [65.9, 431.0], [66.0, 432.0], [66.1, 434.0], [66.2, 434.0], [66.3, 436.0], [66.4, 437.0], [66.5, 439.0], [66.6, 441.0], [66.7, 442.0], [66.8, 442.0], [66.9, 444.0], [67.0, 445.0], [67.1, 446.0], [67.2, 446.0], [67.3, 447.0], [67.4, 448.0], [67.5, 448.0], [67.6, 450.0], [67.7, 452.0], [67.8, 452.0], [67.9, 453.0], [68.0, 454.0], [68.1, 455.0], [68.2, 457.0], [68.3, 458.0], [68.4, 460.0], [68.5, 461.0], [68.6, 462.0], [68.7, 463.0], [68.8, 464.0], [68.9, 466.0], [69.0, 467.0], [69.1, 468.0], [69.2, 468.0], [69.3, 469.0], [69.4, 470.0], [69.5, 470.0], [69.6, 471.0], [69.7, 472.0], [69.8, 474.0], [69.9, 475.0], [70.0, 477.0], [70.1, 477.0], [70.2, 478.0], [70.3, 479.0], [70.4, 479.0], [70.5, 481.0], [70.6, 482.0], [70.7, 482.0], [70.8, 483.0], [70.9, 484.0], [71.0, 485.0], [71.1, 486.0], [71.2, 487.0], [71.3, 487.0], [71.4, 489.0], [71.5, 489.0], [71.6, 490.0], [71.7, 490.0], [71.8, 491.0], [71.9, 492.0], [72.0, 493.0], [72.1, 495.0], [72.2, 497.0], [72.3, 498.0], [72.4, 499.0], [72.5, 501.0], [72.6, 502.0], [72.7, 503.0], [72.8, 504.0], [72.9, 505.0], [73.0, 505.0], [73.1, 506.0], [73.2, 506.0], [73.3, 507.0], [73.4, 508.0], [73.5, 509.0], [73.6, 510.0], [73.7, 511.0], [73.8, 511.0], [73.9, 512.0], [74.0, 513.0], [74.1, 513.0], [74.2, 514.0], [74.3, 515.0], [74.4, 516.0], [74.5, 516.0], [74.6, 517.0], [74.7, 517.0], [74.8, 518.0], [74.9, 519.0], [75.0, 519.0], [75.1, 521.0], [75.2, 522.0], [75.3, 522.0], [75.4, 523.0], [75.5, 523.0], [75.6, 524.0], [75.7, 524.0], [75.8, 525.0], [75.9, 527.0], [76.0, 528.0], [76.1, 528.0], [76.2, 529.0], [76.3, 529.0], [76.4, 530.0], [76.5, 532.0], [76.6, 533.0], [76.7, 533.0], [76.8, 534.0], [76.9, 535.0], [77.0, 536.0], [77.1, 537.0], [77.2, 538.0], [77.3, 539.0], [77.4, 539.0], [77.5, 540.0], [77.6, 541.0], [77.7, 543.0], [77.8, 543.0], [77.9, 545.0], [78.0, 546.0], [78.1, 547.0], [78.2, 547.0], [78.3, 547.0], [78.4, 549.0], [78.5, 549.0], [78.6, 550.0], [78.7, 551.0], [78.8, 552.0], [78.9, 553.0], [79.0, 554.0], [79.1, 556.0], [79.2, 557.0], [79.3, 559.0], [79.4, 560.0], [79.5, 561.0], [79.6, 563.0], [79.7, 563.0], [79.8, 564.0], [79.9, 565.0], [80.0, 567.0], [80.1, 567.0], [80.2, 569.0], [80.3, 569.0], [80.4, 571.0], [80.5, 572.0], [80.6, 572.0], [80.7, 574.0], [80.8, 574.0], [80.9, 575.0], [81.0, 576.0], [81.1, 578.0], [81.2, 579.0], [81.3, 580.0], [81.4, 581.0], [81.5, 582.0], [81.6, 583.0], [81.7, 584.0], [81.8, 585.0], [81.9, 586.0], [82.0, 588.0], [82.1, 588.0], [82.2, 589.0], [82.3, 591.0], [82.4, 594.0], [82.5, 595.0], [82.6, 597.0], [82.7, 598.0], [82.8, 600.0], [82.9, 601.0], [83.0, 603.0], [83.1, 603.0], [83.2, 605.0], [83.3, 608.0], [83.4, 609.0], [83.5, 610.0], [83.6, 612.0], [83.7, 613.0], [83.8, 616.0], [83.9, 619.0], [84.0, 620.0], [84.1, 622.0], [84.2, 624.0], [84.3, 626.0], [84.4, 627.0], [84.5, 629.0], [84.6, 630.0], [84.7, 632.0], [84.8, 633.0], [84.9, 634.0], [85.0, 635.0], [85.1, 636.0], [85.2, 638.0], [85.3, 640.0], [85.4, 642.0], [85.5, 644.0], [85.6, 645.0], [85.7, 646.0], [85.8, 647.0], [85.9, 648.0], [86.0, 650.0], [86.1, 651.0], [86.2, 652.0], [86.3, 656.0], [86.4, 656.0], [86.5, 657.0], [86.6, 659.0], [86.7, 662.0], [86.8, 663.0], [86.9, 664.0], [87.0, 665.0], [87.1, 666.0], [87.2, 669.0], [87.3, 670.0], [87.4, 675.0], [87.5, 676.0], [87.6, 677.0], [87.7, 678.0], [87.8, 681.0], [87.9, 683.0], [88.0, 685.0], [88.1, 687.0], [88.2, 689.0], [88.3, 692.0], [88.4, 694.0], [88.5, 695.0], [88.6, 697.0], [88.7, 698.0], [88.8, 699.0], [88.9, 701.0], [89.0, 703.0], [89.1, 704.0], [89.2, 705.0], [89.3, 707.0], [89.4, 711.0], [89.5, 714.0], [89.6, 717.0], [89.7, 718.0], [89.8, 720.0], [89.9, 722.0], [90.0, 726.0], [90.1, 731.0], [90.2, 735.0], [90.3, 738.0], [90.4, 739.0], [90.5, 743.0], [90.6, 747.0], [90.7, 753.0], [90.8, 757.0], [90.9, 762.0], [91.0, 768.0], [91.1, 771.0], [91.2, 774.0], [91.3, 779.0], [91.4, 782.0], [91.5, 785.0], [91.6, 787.0], [91.7, 789.0], [91.8, 794.0], [91.9, 796.0], [92.0, 799.0], [92.1, 801.0], [92.2, 803.0], [92.3, 806.0], [92.4, 809.0], [92.5, 811.0], [92.6, 813.0], [92.7, 815.0], [92.8, 818.0], [92.9, 820.0], [93.0, 822.0], [93.1, 826.0], [93.2, 828.0], [93.3, 831.0], [93.4, 836.0], [93.5, 841.0], [93.6, 843.0], [93.7, 847.0], [93.8, 851.0], [93.9, 854.0], [94.0, 859.0], [94.1, 861.0], [94.2, 863.0], [94.3, 866.0], [94.4, 870.0], [94.5, 874.0], [94.6, 877.0], [94.7, 883.0], [94.8, 887.0], [94.9, 891.0], [95.0, 893.0], [95.1, 899.0], [95.2, 910.0], [95.3, 916.0], [95.4, 921.0], [95.5, 927.0], [95.6, 931.0], [95.7, 937.0], [95.8, 942.0], [95.9, 945.0], [96.0, 953.0], [96.1, 959.0], [96.2, 964.0], [96.3, 973.0], [96.4, 979.0], [96.5, 984.0], [96.6, 988.0], [96.7, 992.0], [96.8, 998.0], [96.9, 1003.0], [97.0, 1011.0], [97.1, 1022.0], [97.2, 1028.0], [97.3, 1032.0], [97.4, 1042.0], [97.5, 1050.0], [97.6, 1080.0], [97.7, 1096.0], [97.8, 1100.0], [97.9, 1111.0], [98.0, 1139.0], [98.1, 1145.0], [98.2, 1150.0], [98.3, 1167.0], [98.4, 1177.0], [98.5, 1202.0], [98.6, 1221.0], [98.7, 1234.0], [98.8, 1247.0], [98.9, 1254.0], [99.0, 1263.0], [99.1, 1274.0], [99.2, 1282.0], [99.3, 1311.0], [99.4, 1397.0], [99.5, 1475.0], [99.6, 1605.0], [99.7, 1669.0], [99.8, 1781.0], [99.9, 1932.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 1114.0, "series": [{"data": [[0.0, 1114.0], [2100.0, 1.0], [600.0, 315.0], [2400.0, 1.0], [700.0, 165.0], [800.0, 160.0], [200.0, 597.0], [900.0, 88.0], [1000.0, 51.0], [1100.0, 37.0], [1200.0, 40.0], [300.0, 475.0], [1300.0, 7.0], [1400.0, 7.0], [1500.0, 3.0], [400.0, 475.0], [100.0, 1099.0], [1600.0, 8.0], [1700.0, 3.0], [1800.0, 4.0], [1900.0, 1.0], [500.0, 537.0], [2000.0, 3.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 2400.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 3761.0, "series": [{"data": [[0.0, 3761.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1405.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 24.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 1.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.964630225080388, "minX": 1.60225296E12, "maxY": 10.0, "series": [{"data": [[1.60225308E12, 10.0], [1.60225302E12, 10.0], [1.60225296E12, 10.0], [1.60225314E12, 9.964630225080388]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60225314E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 149.0, "minX": 1.0, "maxY": 916.0, "series": [{"data": [[8.0, 414.0], [4.0, 522.0], [2.0, 514.0], [1.0, 916.0], [10.0, 346.86011962184], [5.0, 474.0], [6.0, 560.0], [3.0, 566.0], [7.0, 149.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.991523791177036, 347.1182816413016]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 3463.85, "minX": 1.60225296E12, "maxY": 5752541.433333334, "series": [{"data": [[1.60225308E12, 5609393.633333334], [1.60225302E12, 5752541.433333334], [1.60225296E12, 1744332.8166666667], [1.60225314E12, 3805494.0]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60225308E12, 13033.05], [1.60225302E12, 13545.983333333334], [1.60225296E12, 3463.85], [1.60225314E12, 9732.8]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60225314E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 336.3963022508039, "minX": 1.60225296E12, "maxY": 403.4633620689658, "series": [{"data": [[1.60225308E12, 347.3896631823465], [1.60225302E12, 339.58091993185695], [1.60225296E12, 403.4633620689658], [1.60225314E12, 336.3963022508039]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60225314E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 335.18167202572295, "minX": 1.60225296E12, "maxY": 401.98060344827553, "series": [{"data": [[1.60225308E12, 346.0348432055753], [1.60225302E12, 338.2674616695055], [1.60225296E12, 401.98060344827553], [1.60225314E12, 335.18167202572295]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60225314E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0064308681672025705, "minX": 1.60225296E12, "maxY": 0.38362068965517215, "series": [{"data": [[1.60225308E12, 0.012775842044134731], [1.60225302E12, 0.006814310051107327], [1.60225296E12, 0.38362068965517215], [1.60225314E12, 0.0064308681672025705]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60225314E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 29.0, "minX": 1.60225296E12, "maxY": 2448.0, "series": [{"data": [[1.60225308E12, 2110.0], [1.60225302E12, 1717.0], [1.60225296E12, 1613.0], [1.60225314E12, 2448.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60225308E12, 34.50699958920479], [1.60225302E12, 34.0], [1.60225296E12, 40.0], [1.60225314E12, 35.204999703168866]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60225308E12, 35.0], [1.60225302E12, 34.0], [1.60225296E12, 40.0], [1.60225314E12, 36.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60225308E12, 35.0], [1.60225302E12, 34.0], [1.60225296E12, 40.0], [1.60225314E12, 35.827499851584435]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60225308E12, 29.0], [1.60225302E12, 31.0], [1.60225296E12, 38.0], [1.60225314E12, 30.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60225308E12, 263.0], [1.60225302E12, 240.0], [1.60225296E12, 399.0], [1.60225314E12, 204.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60225314E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 50.0, "minX": 1.0, "maxY": 916.0, "series": [{"data": [[33.0, 253.5], [32.0, 219.5], [34.0, 257.5], [35.0, 91.0], [37.0, 141.5], [36.0, 268.5], [38.0, 158.5], [39.0, 123.5], [40.0, 225.5], [41.0, 136.0], [43.0, 109.0], [42.0, 125.0], [45.0, 129.0], [47.0, 150.0], [46.0, 179.5], [3.0, 812.0], [51.0, 164.0], [50.0, 77.0], [55.0, 134.0], [57.0, 119.0], [62.0, 72.0], [64.0, 92.0], [65.0, 148.0], [74.0, 98.5], [81.0, 50.0], [11.0, 569.0], [12.0, 735.5], [13.0, 576.0], [14.0, 641.5], [15.0, 785.0], [16.0, 547.0], [1.0, 916.0], [17.0, 587.0], [18.0, 513.0], [19.0, 441.5], [20.0, 491.5], [21.0, 450.0], [22.0, 386.5], [23.0, 396.0], [24.0, 396.5], [25.0, 346.0], [26.0, 362.5], [27.0, 357.0], [28.0, 344.0], [29.0, 327.0], [30.0, 246.0], [31.0, 272.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[28.0, 159.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 81.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 50.0, "minX": 1.0, "maxY": 906.0, "series": [{"data": [[33.0, 252.0], [32.0, 218.5], [34.0, 257.5], [35.0, 91.0], [37.0, 141.5], [36.0, 267.5], [38.0, 158.5], [39.0, 123.0], [40.0, 224.5], [41.0, 135.0], [43.0, 108.5], [42.0, 124.5], [45.0, 129.0], [47.0, 150.0], [46.0, 179.0], [3.0, 806.0], [51.0, 163.0], [50.0, 77.0], [55.0, 134.0], [57.0, 119.0], [62.0, 72.0], [64.0, 92.0], [65.0, 147.0], [74.0, 98.5], [81.0, 50.0], [11.0, 564.0], [12.0, 735.5], [13.0, 571.0], [14.0, 636.0], [15.0, 785.0], [16.0, 540.5], [1.0, 906.0], [17.0, 581.0], [18.0, 508.5], [19.0, 436.5], [20.0, 490.0], [21.0, 449.0], [22.0, 385.5], [23.0, 396.0], [24.0, 393.5], [25.0, 346.0], [26.0, 358.5], [27.0, 357.0], [28.0, 344.0], [29.0, 324.5], [30.0, 246.0], [31.0, 271.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[28.0, 159.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 81.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 7.9, "minX": 1.60225296E12, "maxY": 29.35, "series": [{"data": [[1.60225308E12, 28.7], [1.60225302E12, 29.35], [1.60225296E12, 7.9], [1.60225314E12, 20.566666666666666]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60225314E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60225296E12, "maxY": 29.333333333333332, "series": [{"data": [[1.60225308E12, 28.7], [1.60225302E12, 29.333333333333332], [1.60225296E12, 7.733333333333333], [1.60225314E12, 20.733333333333334]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.60225302E12, 0.016666666666666666]], "isOverall": false, "label": "400", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60225314E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60225296E12, "maxY": 29.333333333333332, "series": [{"data": [[1.60225308E12, 28.7], [1.60225302E12, 29.333333333333332], [1.60225296E12, 7.733333333333333], [1.60225314E12, 20.733333333333334]], "isOverall": false, "label": "HTTP Request-success", "isController": false}, {"data": [[1.60225302E12, 0.016666666666666666]], "isOverall": false, "label": "HTTP Request-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60225314E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60225296E12, "maxY": 29.333333333333332, "series": [{"data": [[1.60225308E12, 28.7], [1.60225302E12, 29.333333333333332], [1.60225296E12, 7.733333333333333], [1.60225314E12, 20.733333333333334]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.60225302E12, 0.016666666666666666]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60225314E12, "title": "Total Transactions Per Second"}},
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

