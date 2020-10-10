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
        data: {"result": {"minY": 29.0, "minX": 0.0, "maxY": 1814.0, "series": [{"data": [[0.0, 29.0], [0.1, 31.0], [0.2, 32.0], [0.3, 33.0], [0.4, 33.0], [0.5, 34.0], [0.6, 35.0], [0.7, 35.0], [0.8, 36.0], [0.9, 36.0], [1.0, 36.0], [1.1, 37.0], [1.2, 37.0], [1.3, 38.0], [1.4, 38.0], [1.5, 38.0], [1.6, 39.0], [1.7, 39.0], [1.8, 40.0], [1.9, 40.0], [2.0, 40.0], [2.1, 40.0], [2.2, 41.0], [2.3, 41.0], [2.4, 41.0], [2.5, 41.0], [2.6, 42.0], [2.7, 42.0], [2.8, 42.0], [2.9, 43.0], [3.0, 43.0], [3.1, 43.0], [3.2, 43.0], [3.3, 43.0], [3.4, 44.0], [3.5, 44.0], [3.6, 44.0], [3.7, 44.0], [3.8, 44.0], [3.9, 45.0], [4.0, 45.0], [4.1, 45.0], [4.2, 45.0], [4.3, 46.0], [4.4, 46.0], [4.5, 46.0], [4.6, 46.0], [4.7, 46.0], [4.8, 46.0], [4.9, 47.0], [5.0, 47.0], [5.1, 47.0], [5.2, 47.0], [5.3, 48.0], [5.4, 48.0], [5.5, 48.0], [5.6, 48.0], [5.7, 49.0], [5.8, 49.0], [5.9, 49.0], [6.0, 49.0], [6.1, 50.0], [6.2, 50.0], [6.3, 50.0], [6.4, 51.0], [6.5, 52.0], [6.6, 52.0], [6.7, 52.0], [6.8, 53.0], [6.9, 53.0], [7.0, 53.0], [7.1, 54.0], [7.2, 54.0], [7.3, 54.0], [7.4, 54.0], [7.5, 55.0], [7.6, 55.0], [7.7, 56.0], [7.8, 56.0], [7.9, 56.0], [8.0, 56.0], [8.1, 57.0], [8.2, 57.0], [8.3, 57.0], [8.4, 58.0], [8.5, 58.0], [8.6, 59.0], [8.7, 59.0], [8.8, 59.0], [8.9, 60.0], [9.0, 60.0], [9.1, 61.0], [9.2, 61.0], [9.3, 61.0], [9.4, 62.0], [9.5, 62.0], [9.6, 63.0], [9.7, 63.0], [9.8, 63.0], [9.9, 64.0], [10.0, 64.0], [10.1, 65.0], [10.2, 65.0], [10.3, 65.0], [10.4, 66.0], [10.5, 66.0], [10.6, 67.0], [10.7, 67.0], [10.8, 67.0], [10.9, 68.0], [11.0, 68.0], [11.1, 68.0], [11.2, 69.0], [11.3, 69.0], [11.4, 70.0], [11.5, 70.0], [11.6, 70.0], [11.7, 71.0], [11.8, 71.0], [11.9, 71.0], [12.0, 71.0], [12.1, 71.0], [12.2, 72.0], [12.3, 72.0], [12.4, 72.0], [12.5, 72.0], [12.6, 73.0], [12.7, 73.0], [12.8, 73.0], [12.9, 73.0], [13.0, 73.0], [13.1, 74.0], [13.2, 74.0], [13.3, 74.0], [13.4, 74.0], [13.5, 75.0], [13.6, 75.0], [13.7, 76.0], [13.8, 76.0], [13.9, 76.0], [14.0, 76.0], [14.1, 77.0], [14.2, 77.0], [14.3, 77.0], [14.4, 77.0], [14.5, 78.0], [14.6, 78.0], [14.7, 78.0], [14.8, 79.0], [14.9, 79.0], [15.0, 79.0], [15.1, 79.0], [15.2, 80.0], [15.3, 80.0], [15.4, 80.0], [15.5, 80.0], [15.6, 81.0], [15.7, 81.0], [15.8, 81.0], [15.9, 82.0], [16.0, 82.0], [16.1, 83.0], [16.2, 83.0], [16.3, 83.0], [16.4, 84.0], [16.5, 84.0], [16.6, 84.0], [16.7, 84.0], [16.8, 85.0], [16.9, 85.0], [17.0, 85.0], [17.1, 86.0], [17.2, 86.0], [17.3, 86.0], [17.4, 86.0], [17.5, 87.0], [17.6, 87.0], [17.7, 87.0], [17.8, 87.0], [17.9, 88.0], [18.0, 88.0], [18.1, 89.0], [18.2, 89.0], [18.3, 90.0], [18.4, 90.0], [18.5, 90.0], [18.6, 91.0], [18.7, 91.0], [18.8, 92.0], [18.9, 92.0], [19.0, 92.0], [19.1, 92.0], [19.2, 92.0], [19.3, 93.0], [19.4, 93.0], [19.5, 93.0], [19.6, 94.0], [19.7, 94.0], [19.8, 94.0], [19.9, 95.0], [20.0, 95.0], [20.1, 95.0], [20.2, 96.0], [20.3, 96.0], [20.4, 96.0], [20.5, 97.0], [20.6, 98.0], [20.7, 98.0], [20.8, 99.0], [20.9, 99.0], [21.0, 99.0], [21.1, 100.0], [21.2, 101.0], [21.3, 101.0], [21.4, 102.0], [21.5, 102.0], [21.6, 103.0], [21.7, 104.0], [21.8, 104.0], [21.9, 105.0], [22.0, 105.0], [22.1, 106.0], [22.2, 106.0], [22.3, 107.0], [22.4, 107.0], [22.5, 107.0], [22.6, 108.0], [22.7, 108.0], [22.8, 108.0], [22.9, 109.0], [23.0, 109.0], [23.1, 109.0], [23.2, 110.0], [23.3, 110.0], [23.4, 111.0], [23.5, 111.0], [23.6, 112.0], [23.7, 113.0], [23.8, 113.0], [23.9, 113.0], [24.0, 114.0], [24.1, 115.0], [24.2, 115.0], [24.3, 116.0], [24.4, 116.0], [24.5, 117.0], [24.6, 117.0], [24.7, 117.0], [24.8, 118.0], [24.9, 119.0], [25.0, 119.0], [25.1, 120.0], [25.2, 120.0], [25.3, 121.0], [25.4, 122.0], [25.5, 122.0], [25.6, 123.0], [25.7, 123.0], [25.8, 123.0], [25.9, 124.0], [26.0, 124.0], [26.1, 125.0], [26.2, 126.0], [26.3, 126.0], [26.4, 127.0], [26.5, 127.0], [26.6, 128.0], [26.7, 128.0], [26.8, 129.0], [26.9, 129.0], [27.0, 130.0], [27.1, 130.0], [27.2, 131.0], [27.3, 131.0], [27.4, 131.0], [27.5, 132.0], [27.6, 133.0], [27.7, 133.0], [27.8, 134.0], [27.9, 134.0], [28.0, 134.0], [28.1, 135.0], [28.2, 135.0], [28.3, 136.0], [28.4, 136.0], [28.5, 136.0], [28.6, 136.0], [28.7, 136.0], [28.8, 137.0], [28.9, 137.0], [29.0, 137.0], [29.1, 137.0], [29.2, 138.0], [29.3, 138.0], [29.4, 138.0], [29.5, 139.0], [29.6, 139.0], [29.7, 139.0], [29.8, 140.0], [29.9, 140.0], [30.0, 140.0], [30.1, 141.0], [30.2, 141.0], [30.3, 141.0], [30.4, 142.0], [30.5, 142.0], [30.6, 142.0], [30.7, 143.0], [30.8, 143.0], [30.9, 143.0], [31.0, 144.0], [31.1, 144.0], [31.2, 144.0], [31.3, 145.0], [31.4, 145.0], [31.5, 145.0], [31.6, 145.0], [31.7, 146.0], [31.8, 146.0], [31.9, 147.0], [32.0, 147.0], [32.1, 147.0], [32.2, 148.0], [32.3, 148.0], [32.4, 148.0], [32.5, 148.0], [32.6, 149.0], [32.7, 149.0], [32.8, 150.0], [32.9, 150.0], [33.0, 151.0], [33.1, 152.0], [33.2, 152.0], [33.3, 152.0], [33.4, 153.0], [33.5, 153.0], [33.6, 154.0], [33.7, 155.0], [33.8, 155.0], [33.9, 156.0], [34.0, 156.0], [34.1, 157.0], [34.2, 158.0], [34.3, 158.0], [34.4, 159.0], [34.5, 159.0], [34.6, 160.0], [34.7, 160.0], [34.8, 161.0], [34.9, 162.0], [35.0, 162.0], [35.1, 164.0], [35.2, 164.0], [35.3, 164.0], [35.4, 164.0], [35.5, 165.0], [35.6, 165.0], [35.7, 166.0], [35.8, 166.0], [35.9, 166.0], [36.0, 167.0], [36.1, 168.0], [36.2, 169.0], [36.3, 169.0], [36.4, 170.0], [36.5, 170.0], [36.6, 171.0], [36.7, 172.0], [36.8, 172.0], [36.9, 173.0], [37.0, 174.0], [37.1, 174.0], [37.2, 175.0], [37.3, 175.0], [37.4, 176.0], [37.5, 177.0], [37.6, 177.0], [37.7, 177.0], [37.8, 178.0], [37.9, 179.0], [38.0, 179.0], [38.1, 180.0], [38.2, 180.0], [38.3, 182.0], [38.4, 182.0], [38.5, 182.0], [38.6, 183.0], [38.7, 183.0], [38.8, 184.0], [38.9, 185.0], [39.0, 186.0], [39.1, 187.0], [39.2, 187.0], [39.3, 189.0], [39.4, 189.0], [39.5, 190.0], [39.6, 191.0], [39.7, 192.0], [39.8, 193.0], [39.9, 193.0], [40.0, 194.0], [40.1, 194.0], [40.2, 195.0], [40.3, 195.0], [40.4, 196.0], [40.5, 197.0], [40.6, 197.0], [40.7, 199.0], [40.8, 199.0], [40.9, 200.0], [41.0, 201.0], [41.1, 201.0], [41.2, 202.0], [41.3, 202.0], [41.4, 203.0], [41.5, 203.0], [41.6, 203.0], [41.7, 204.0], [41.8, 205.0], [41.9, 206.0], [42.0, 207.0], [42.1, 208.0], [42.2, 208.0], [42.3, 209.0], [42.4, 209.0], [42.5, 210.0], [42.6, 211.0], [42.7, 212.0], [42.8, 212.0], [42.9, 213.0], [43.0, 213.0], [43.1, 214.0], [43.2, 214.0], [43.3, 215.0], [43.4, 215.0], [43.5, 217.0], [43.6, 217.0], [43.7, 218.0], [43.8, 219.0], [43.9, 220.0], [44.0, 220.0], [44.1, 221.0], [44.2, 221.0], [44.3, 222.0], [44.4, 223.0], [44.5, 223.0], [44.6, 225.0], [44.7, 226.0], [44.8, 227.0], [44.9, 227.0], [45.0, 227.0], [45.1, 228.0], [45.2, 229.0], [45.3, 229.0], [45.4, 230.0], [45.5, 231.0], [45.6, 231.0], [45.7, 232.0], [45.8, 232.0], [45.9, 233.0], [46.0, 234.0], [46.1, 235.0], [46.2, 236.0], [46.3, 236.0], [46.4, 237.0], [46.5, 238.0], [46.6, 239.0], [46.7, 240.0], [46.8, 241.0], [46.9, 241.0], [47.0, 242.0], [47.1, 243.0], [47.2, 243.0], [47.3, 244.0], [47.4, 244.0], [47.5, 245.0], [47.6, 245.0], [47.7, 246.0], [47.8, 248.0], [47.9, 249.0], [48.0, 250.0], [48.1, 251.0], [48.2, 252.0], [48.3, 252.0], [48.4, 253.0], [48.5, 253.0], [48.6, 255.0], [48.7, 256.0], [48.8, 257.0], [48.9, 258.0], [49.0, 259.0], [49.1, 260.0], [49.2, 260.0], [49.3, 261.0], [49.4, 262.0], [49.5, 262.0], [49.6, 263.0], [49.7, 263.0], [49.8, 264.0], [49.9, 265.0], [50.0, 266.0], [50.1, 267.0], [50.2, 268.0], [50.3, 268.0], [50.4, 269.0], [50.5, 269.0], [50.6, 270.0], [50.7, 271.0], [50.8, 272.0], [50.9, 273.0], [51.0, 273.0], [51.1, 274.0], [51.2, 275.0], [51.3, 275.0], [51.4, 276.0], [51.5, 276.0], [51.6, 277.0], [51.7, 278.0], [51.8, 278.0], [51.9, 279.0], [52.0, 279.0], [52.1, 280.0], [52.2, 280.0], [52.3, 281.0], [52.4, 283.0], [52.5, 284.0], [52.6, 285.0], [52.7, 286.0], [52.8, 286.0], [52.9, 287.0], [53.0, 287.0], [53.1, 289.0], [53.2, 289.0], [53.3, 291.0], [53.4, 292.0], [53.5, 293.0], [53.6, 294.0], [53.7, 295.0], [53.8, 296.0], [53.9, 298.0], [54.0, 298.0], [54.1, 300.0], [54.2, 301.0], [54.3, 302.0], [54.4, 302.0], [54.5, 303.0], [54.6, 304.0], [54.7, 305.0], [54.8, 305.0], [54.9, 306.0], [55.0, 307.0], [55.1, 308.0], [55.2, 309.0], [55.3, 310.0], [55.4, 310.0], [55.5, 311.0], [55.6, 312.0], [55.7, 313.0], [55.8, 314.0], [55.9, 315.0], [56.0, 316.0], [56.1, 317.0], [56.2, 317.0], [56.3, 318.0], [56.4, 320.0], [56.5, 320.0], [56.6, 323.0], [56.7, 323.0], [56.8, 325.0], [56.9, 325.0], [57.0, 326.0], [57.1, 327.0], [57.2, 327.0], [57.3, 328.0], [57.4, 328.0], [57.5, 329.0], [57.6, 330.0], [57.7, 331.0], [57.8, 332.0], [57.9, 335.0], [58.0, 336.0], [58.1, 337.0], [58.2, 338.0], [58.3, 339.0], [58.4, 340.0], [58.5, 340.0], [58.6, 342.0], [58.7, 343.0], [58.8, 344.0], [58.9, 345.0], [59.0, 346.0], [59.1, 347.0], [59.2, 349.0], [59.3, 349.0], [59.4, 350.0], [59.5, 351.0], [59.6, 352.0], [59.7, 354.0], [59.8, 355.0], [59.9, 357.0], [60.0, 359.0], [60.1, 360.0], [60.2, 361.0], [60.3, 362.0], [60.4, 363.0], [60.5, 364.0], [60.6, 365.0], [60.7, 366.0], [60.8, 367.0], [60.9, 368.0], [61.0, 369.0], [61.1, 369.0], [61.2, 370.0], [61.3, 371.0], [61.4, 372.0], [61.5, 373.0], [61.6, 375.0], [61.7, 376.0], [61.8, 377.0], [61.9, 378.0], [62.0, 379.0], [62.1, 380.0], [62.2, 381.0], [62.3, 381.0], [62.4, 382.0], [62.5, 384.0], [62.6, 385.0], [62.7, 386.0], [62.8, 387.0], [62.9, 388.0], [63.0, 389.0], [63.1, 391.0], [63.2, 392.0], [63.3, 393.0], [63.4, 394.0], [63.5, 395.0], [63.6, 396.0], [63.7, 397.0], [63.8, 397.0], [63.9, 399.0], [64.0, 400.0], [64.1, 402.0], [64.2, 403.0], [64.3, 405.0], [64.4, 406.0], [64.5, 406.0], [64.6, 407.0], [64.7, 407.0], [64.8, 410.0], [64.9, 410.0], [65.0, 411.0], [65.1, 413.0], [65.2, 415.0], [65.3, 417.0], [65.4, 418.0], [65.5, 419.0], [65.6, 419.0], [65.7, 420.0], [65.8, 420.0], [65.9, 421.0], [66.0, 422.0], [66.1, 423.0], [66.2, 424.0], [66.3, 425.0], [66.4, 425.0], [66.5, 426.0], [66.6, 427.0], [66.7, 428.0], [66.8, 428.0], [66.9, 430.0], [67.0, 431.0], [67.1, 432.0], [67.2, 434.0], [67.3, 434.0], [67.4, 435.0], [67.5, 437.0], [67.6, 440.0], [67.7, 441.0], [67.8, 441.0], [67.9, 442.0], [68.0, 444.0], [68.1, 445.0], [68.2, 446.0], [68.3, 447.0], [68.4, 448.0], [68.5, 449.0], [68.6, 451.0], [68.7, 452.0], [68.8, 452.0], [68.9, 453.0], [69.0, 454.0], [69.1, 455.0], [69.2, 457.0], [69.3, 457.0], [69.4, 459.0], [69.5, 460.0], [69.6, 460.0], [69.7, 463.0], [69.8, 463.0], [69.9, 465.0], [70.0, 466.0], [70.1, 466.0], [70.2, 467.0], [70.3, 468.0], [70.4, 469.0], [70.5, 470.0], [70.6, 471.0], [70.7, 472.0], [70.8, 474.0], [70.9, 475.0], [71.0, 476.0], [71.1, 477.0], [71.2, 478.0], [71.3, 479.0], [71.4, 479.0], [71.5, 481.0], [71.6, 482.0], [71.7, 483.0], [71.8, 483.0], [71.9, 484.0], [72.0, 485.0], [72.1, 486.0], [72.2, 487.0], [72.3, 489.0], [72.4, 490.0], [72.5, 490.0], [72.6, 491.0], [72.7, 492.0], [72.8, 492.0], [72.9, 493.0], [73.0, 495.0], [73.1, 495.0], [73.2, 496.0], [73.3, 497.0], [73.4, 498.0], [73.5, 499.0], [73.6, 499.0], [73.7, 501.0], [73.8, 502.0], [73.9, 503.0], [74.0, 504.0], [74.1, 505.0], [74.2, 506.0], [74.3, 506.0], [74.4, 507.0], [74.5, 508.0], [74.6, 508.0], [74.7, 509.0], [74.8, 510.0], [74.9, 512.0], [75.0, 512.0], [75.1, 513.0], [75.2, 513.0], [75.3, 514.0], [75.4, 515.0], [75.5, 516.0], [75.6, 517.0], [75.7, 517.0], [75.8, 518.0], [75.9, 518.0], [76.0, 519.0], [76.1, 520.0], [76.2, 521.0], [76.3, 521.0], [76.4, 522.0], [76.5, 523.0], [76.6, 523.0], [76.7, 524.0], [76.8, 525.0], [76.9, 526.0], [77.0, 528.0], [77.1, 529.0], [77.2, 530.0], [77.3, 531.0], [77.4, 532.0], [77.5, 533.0], [77.6, 534.0], [77.7, 535.0], [77.8, 536.0], [77.9, 536.0], [78.0, 538.0], [78.1, 540.0], [78.2, 541.0], [78.3, 541.0], [78.4, 542.0], [78.5, 543.0], [78.6, 544.0], [78.7, 545.0], [78.8, 546.0], [78.9, 547.0], [79.0, 549.0], [79.1, 550.0], [79.2, 552.0], [79.3, 553.0], [79.4, 554.0], [79.5, 555.0], [79.6, 557.0], [79.7, 558.0], [79.8, 559.0], [79.9, 560.0], [80.0, 562.0], [80.1, 563.0], [80.2, 563.0], [80.3, 564.0], [80.4, 565.0], [80.5, 566.0], [80.6, 567.0], [80.7, 569.0], [80.8, 570.0], [80.9, 571.0], [81.0, 572.0], [81.1, 573.0], [81.2, 574.0], [81.3, 576.0], [81.4, 577.0], [81.5, 578.0], [81.6, 579.0], [81.7, 580.0], [81.8, 581.0], [81.9, 582.0], [82.0, 583.0], [82.1, 584.0], [82.2, 585.0], [82.3, 587.0], [82.4, 590.0], [82.5, 591.0], [82.6, 593.0], [82.7, 594.0], [82.8, 595.0], [82.9, 597.0], [83.0, 598.0], [83.1, 599.0], [83.2, 600.0], [83.3, 602.0], [83.4, 604.0], [83.5, 605.0], [83.6, 606.0], [83.7, 608.0], [83.8, 610.0], [83.9, 611.0], [84.0, 612.0], [84.1, 614.0], [84.2, 614.0], [84.3, 616.0], [84.4, 618.0], [84.5, 619.0], [84.6, 621.0], [84.7, 624.0], [84.8, 625.0], [84.9, 627.0], [85.0, 629.0], [85.1, 630.0], [85.2, 632.0], [85.3, 632.0], [85.4, 634.0], [85.5, 636.0], [85.6, 638.0], [85.7, 639.0], [85.8, 642.0], [85.9, 644.0], [86.0, 646.0], [86.1, 647.0], [86.2, 648.0], [86.3, 650.0], [86.4, 651.0], [86.5, 653.0], [86.6, 655.0], [86.7, 658.0], [86.8, 659.0], [86.9, 660.0], [87.0, 662.0], [87.1, 664.0], [87.2, 665.0], [87.3, 665.0], [87.4, 666.0], [87.5, 668.0], [87.6, 670.0], [87.7, 672.0], [87.8, 673.0], [87.9, 674.0], [88.0, 676.0], [88.1, 677.0], [88.2, 679.0], [88.3, 681.0], [88.4, 682.0], [88.5, 684.0], [88.6, 686.0], [88.7, 687.0], [88.8, 688.0], [88.9, 689.0], [89.0, 692.0], [89.1, 693.0], [89.2, 695.0], [89.3, 696.0], [89.4, 699.0], [89.5, 701.0], [89.6, 704.0], [89.7, 707.0], [89.8, 709.0], [89.9, 710.0], [90.0, 713.0], [90.1, 716.0], [90.2, 718.0], [90.3, 719.0], [90.4, 722.0], [90.5, 725.0], [90.6, 727.0], [90.7, 729.0], [90.8, 732.0], [90.9, 735.0], [91.0, 736.0], [91.1, 739.0], [91.2, 742.0], [91.3, 744.0], [91.4, 748.0], [91.5, 751.0], [91.6, 752.0], [91.7, 756.0], [91.8, 758.0], [91.9, 762.0], [92.0, 765.0], [92.1, 766.0], [92.2, 768.0], [92.3, 771.0], [92.4, 774.0], [92.5, 777.0], [92.6, 779.0], [92.7, 782.0], [92.8, 786.0], [92.9, 789.0], [93.0, 792.0], [93.1, 794.0], [93.2, 798.0], [93.3, 799.0], [93.4, 805.0], [93.5, 807.0], [93.6, 808.0], [93.7, 812.0], [93.8, 815.0], [93.9, 817.0], [94.0, 820.0], [94.1, 825.0], [94.2, 827.0], [94.3, 833.0], [94.4, 836.0], [94.5, 841.0], [94.6, 846.0], [94.7, 848.0], [94.8, 852.0], [94.9, 858.0], [95.0, 868.0], [95.1, 873.0], [95.2, 879.0], [95.3, 883.0], [95.4, 889.0], [95.5, 895.0], [95.6, 902.0], [95.7, 910.0], [95.8, 918.0], [95.9, 922.0], [96.0, 927.0], [96.1, 932.0], [96.2, 935.0], [96.3, 937.0], [96.4, 943.0], [96.5, 951.0], [96.6, 952.0], [96.7, 957.0], [96.8, 958.0], [96.9, 967.0], [97.0, 972.0], [97.1, 986.0], [97.2, 990.0], [97.3, 999.0], [97.4, 1019.0], [97.5, 1026.0], [97.6, 1030.0], [97.7, 1036.0], [97.8, 1041.0], [97.9, 1052.0], [98.0, 1071.0], [98.1, 1076.0], [98.2, 1083.0], [98.3, 1094.0], [98.4, 1101.0], [98.5, 1110.0], [98.6, 1135.0], [98.7, 1147.0], [98.8, 1165.0], [98.9, 1172.0], [99.0, 1179.0], [99.1, 1188.0], [99.2, 1214.0], [99.3, 1231.0], [99.4, 1247.0], [99.5, 1272.0], [99.6, 1307.0], [99.7, 1419.0], [99.8, 1473.0], [99.9, 1572.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 1091.0, "series": [{"data": [[0.0, 1091.0], [600.0, 329.0], [700.0, 201.0], [800.0, 117.0], [200.0, 686.0], [900.0, 89.0], [1000.0, 55.0], [1100.0, 41.0], [300.0, 513.0], [1200.0, 22.0], [1300.0, 6.0], [1400.0, 8.0], [1500.0, 4.0], [100.0, 1030.0], [400.0, 501.0], [1600.0, 1.0], [1700.0, 2.0], [1800.0, 1.0], [500.0, 494.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1800.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 3822.0, "series": [{"data": [[0.0, 3822.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1360.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 8.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 1.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.960106382978722, "minX": 1.60232928E12, "maxY": 10.0, "series": [{"data": [[1.60232946E12, 9.960106382978722], [1.60232928E12, 9.998341625207297], [1.60232934E12, 10.0], [1.6023294E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60232946E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 208.0, "minX": 1.0, "maxY": 1323.0, "series": [{"data": [[8.0, 293.0], [4.0, 405.0], [2.0, 389.0], [1.0, 1323.0], [9.0, 539.5], [10.0, 341.97452229299427], [5.0, 479.0], [6.0, 208.0], [3.0, 303.0], [7.0, 239.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.991138508957821, 342.2246195338075]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 4537.866666666667, "minX": 1.60232928E12, "maxY": 5688020.283333333, "series": [{"data": [[1.60232946E12, 3581385.316666667], [1.60232928E12, 1992568.1666666667], [1.60232934E12, 5649268.766666667], [1.6023294E12, 5688020.283333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60232946E12, 8831.516666666666], [1.60232928E12, 4537.866666666667], [1.60232934E12, 13179.75], [1.6023294E12, 13226.55]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60232946E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 330.40248226950354, "minX": 1.60232928E12, "maxY": 350.28524046434507, "series": [{"data": [[1.60232946E12, 330.40248226950354], [1.60232928E12, 350.28524046434507], [1.60232934E12, 347.542907180385], [1.6023294E12, 341.86090440755567]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60232946E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 329.56294326241107, "minX": 1.60232928E12, "maxY": 349.0547263681592, "series": [{"data": [[1.60232946E12, 329.56294326241107], [1.60232928E12, 349.0547263681592], [1.60232934E12, 346.329830706362], [1.6023294E12, 340.71207784773884]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60232946E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.007092198581560291, "minX": 1.60232928E12, "maxY": 0.14593698175787714, "series": [{"data": [[1.60232946E12, 0.007092198581560291], [1.60232928E12, 0.14593698175787714], [1.60232934E12, 0.0075890251021599395], [1.6023294E12, 0.008013737836290795]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60232946E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 29.0, "minX": 1.60232928E12, "maxY": 1814.0, "series": [{"data": [[1.60232946E12, 1814.0], [1.60232928E12, 1571.0], [1.60232934E12, 1792.0], [1.6023294E12, 1281.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60232946E12, 35.0], [1.60232928E12, 41.0], [1.60232934E12, 35.0], [1.6023294E12, 39.731999583244324]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60232946E12, 35.17710010766983], [1.60232928E12, 41.0], [1.60232934E12, 35.95870016336441], [1.6023294E12, 40.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60232946E12, 35.0], [1.60232928E12, 41.0], [1.60232934E12, 35.273499795794486], [1.6023294E12, 40.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60232946E12, 32.0], [1.60232928E12, 37.0], [1.60232934E12, 29.0], [1.6023294E12, 30.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60232946E12, 249.5], [1.60232928E12, 309.0], [1.60232934E12, 244.0], [1.6023294E12, 275.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60232946E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 32.0, "minX": 2.0, "maxY": 856.0, "series": [{"data": [[32.0, 252.5], [33.0, 277.0], [2.0, 856.0], [35.0, 233.0], [34.0, 260.0], [36.0, 227.5], [37.0, 144.0], [39.0, 53.0], [38.0, 165.0], [41.0, 156.0], [42.0, 113.0], [43.0, 196.0], [44.0, 85.5], [46.0, 154.5], [48.0, 140.0], [50.0, 132.5], [52.0, 108.5], [53.0, 163.0], [54.0, 87.5], [56.0, 78.5], [61.0, 127.5], [60.0, 138.5], [62.0, 108.5], [64.0, 114.0], [65.0, 87.0], [73.0, 78.0], [76.0, 95.0], [11.0, 796.0], [12.0, 781.0], [14.0, 644.5], [15.0, 706.0], [16.0, 515.5], [17.0, 474.0], [18.0, 497.0], [19.0, 482.0], [20.0, 497.5], [21.0, 431.0], [22.0, 465.0], [23.0, 384.0], [24.0, 419.0], [25.0, 361.5], [26.0, 367.5], [27.0, 300.5], [28.0, 317.0], [29.0, 366.5], [30.0, 274.0], [31.0, 309.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[28.0, 32.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 76.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 32.0, "minX": 2.0, "maxY": 853.0, "series": [{"data": [[32.0, 251.5], [33.0, 276.0], [2.0, 853.0], [35.0, 232.5], [34.0, 259.5], [36.0, 227.5], [37.0, 144.0], [39.0, 53.0], [38.0, 164.5], [41.0, 155.0], [42.0, 113.0], [43.0, 195.0], [44.0, 85.5], [46.0, 154.5], [48.0, 140.0], [50.0, 132.5], [52.0, 108.5], [53.0, 163.0], [54.0, 87.5], [56.0, 78.5], [61.0, 127.0], [60.0, 138.5], [62.0, 108.5], [64.0, 114.0], [65.0, 87.0], [73.0, 78.0], [76.0, 95.0], [11.0, 795.0], [12.0, 780.5], [14.0, 643.0], [15.0, 706.0], [16.0, 513.0], [17.0, 474.0], [18.0, 494.5], [19.0, 482.0], [20.0, 494.5], [21.0, 429.5], [22.0, 460.0], [23.0, 383.0], [24.0, 418.0], [25.0, 360.5], [26.0, 367.5], [27.0, 299.5], [28.0, 316.0], [29.0, 366.0], [30.0, 273.0], [31.0, 308.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[28.0, 32.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 76.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 10.216666666666667, "minX": 1.60232928E12, "maxY": 29.116666666666667, "series": [{"data": [[1.60232946E12, 18.633333333333333], [1.60232928E12, 10.216666666666667], [1.60232934E12, 28.55], [1.6023294E12, 29.116666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60232946E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60232928E12, "maxY": 29.116666666666667, "series": [{"data": [[1.60232946E12, 18.8], [1.60232928E12, 10.05], [1.60232934E12, 28.533333333333335], [1.6023294E12, 29.116666666666667]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.60232934E12, 0.016666666666666666]], "isOverall": false, "label": "400", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60232946E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60232928E12, "maxY": 29.116666666666667, "series": [{"data": [[1.60232946E12, 18.8], [1.60232928E12, 10.05], [1.60232934E12, 28.533333333333335], [1.6023294E12, 29.116666666666667]], "isOverall": false, "label": "HTTP Request-success", "isController": false}, {"data": [[1.60232934E12, 0.016666666666666666]], "isOverall": false, "label": "HTTP Request-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60232946E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60232928E12, "maxY": 29.116666666666667, "series": [{"data": [[1.60232946E12, 18.8], [1.60232928E12, 10.05], [1.60232934E12, 28.533333333333335], [1.6023294E12, 29.116666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.60232934E12, 0.016666666666666666]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60232946E12, "title": "Total Transactions Per Second"}},
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

