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
        data: {"result": {"minY": 30.0, "minX": 0.0, "maxY": 1923.0, "series": [{"data": [[0.0, 30.0], [0.1, 32.0], [0.2, 32.0], [0.3, 34.0], [0.4, 34.0], [0.5, 35.0], [0.6, 36.0], [0.7, 36.0], [0.8, 37.0], [0.9, 37.0], [1.0, 38.0], [1.1, 38.0], [1.2, 38.0], [1.3, 38.0], [1.4, 39.0], [1.5, 39.0], [1.6, 39.0], [1.7, 39.0], [1.8, 39.0], [1.9, 40.0], [2.0, 40.0], [2.1, 40.0], [2.2, 41.0], [2.3, 41.0], [2.4, 42.0], [2.5, 42.0], [2.6, 42.0], [2.7, 43.0], [2.8, 43.0], [2.9, 43.0], [3.0, 43.0], [3.1, 44.0], [3.2, 44.0], [3.3, 44.0], [3.4, 44.0], [3.5, 44.0], [3.6, 44.0], [3.7, 45.0], [3.8, 45.0], [3.9, 45.0], [4.0, 45.0], [4.1, 45.0], [4.2, 46.0], [4.3, 46.0], [4.4, 46.0], [4.5, 46.0], [4.6, 47.0], [4.7, 47.0], [4.8, 47.0], [4.9, 47.0], [5.0, 47.0], [5.1, 48.0], [5.2, 48.0], [5.3, 48.0], [5.4, 48.0], [5.5, 49.0], [5.6, 49.0], [5.7, 49.0], [5.8, 49.0], [5.9, 49.0], [6.0, 50.0], [6.1, 50.0], [6.2, 50.0], [6.3, 51.0], [6.4, 51.0], [6.5, 51.0], [6.6, 52.0], [6.7, 52.0], [6.8, 53.0], [6.9, 53.0], [7.0, 53.0], [7.1, 54.0], [7.2, 54.0], [7.3, 55.0], [7.4, 55.0], [7.5, 56.0], [7.6, 56.0], [7.7, 56.0], [7.8, 57.0], [7.9, 57.0], [8.0, 57.0], [8.1, 58.0], [8.2, 59.0], [8.3, 59.0], [8.4, 60.0], [8.5, 60.0], [8.6, 61.0], [8.7, 61.0], [8.8, 62.0], [8.9, 62.0], [9.0, 62.0], [9.1, 63.0], [9.2, 63.0], [9.3, 64.0], [9.4, 64.0], [9.5, 65.0], [9.6, 65.0], [9.7, 66.0], [9.8, 66.0], [9.9, 66.0], [10.0, 67.0], [10.1, 67.0], [10.2, 68.0], [10.3, 68.0], [10.4, 69.0], [10.5, 70.0], [10.6, 70.0], [10.7, 70.0], [10.8, 70.0], [10.9, 71.0], [11.0, 71.0], [11.1, 72.0], [11.2, 72.0], [11.3, 72.0], [11.4, 72.0], [11.5, 72.0], [11.6, 73.0], [11.7, 73.0], [11.8, 73.0], [11.9, 73.0], [12.0, 74.0], [12.1, 74.0], [12.2, 74.0], [12.3, 75.0], [12.4, 75.0], [12.5, 75.0], [12.6, 75.0], [12.7, 76.0], [12.8, 76.0], [12.9, 76.0], [13.0, 76.0], [13.1, 76.0], [13.2, 77.0], [13.3, 77.0], [13.4, 77.0], [13.5, 78.0], [13.6, 78.0], [13.7, 78.0], [13.8, 79.0], [13.9, 79.0], [14.0, 79.0], [14.1, 79.0], [14.2, 80.0], [14.3, 80.0], [14.4, 81.0], [14.5, 81.0], [14.6, 81.0], [14.7, 81.0], [14.8, 82.0], [14.9, 82.0], [15.0, 82.0], [15.1, 83.0], [15.2, 83.0], [15.3, 83.0], [15.4, 83.0], [15.5, 84.0], [15.6, 84.0], [15.7, 84.0], [15.8, 84.0], [15.9, 85.0], [16.0, 85.0], [16.1, 85.0], [16.2, 85.0], [16.3, 86.0], [16.4, 86.0], [16.5, 86.0], [16.6, 86.0], [16.7, 87.0], [16.8, 87.0], [16.9, 87.0], [17.0, 88.0], [17.1, 88.0], [17.2, 88.0], [17.3, 88.0], [17.4, 89.0], [17.5, 89.0], [17.6, 89.0], [17.7, 89.0], [17.8, 90.0], [17.9, 90.0], [18.0, 90.0], [18.1, 90.0], [18.2, 90.0], [18.3, 91.0], [18.4, 91.0], [18.5, 91.0], [18.6, 91.0], [18.7, 92.0], [18.8, 92.0], [18.9, 92.0], [19.0, 93.0], [19.1, 93.0], [19.2, 93.0], [19.3, 93.0], [19.4, 94.0], [19.5, 94.0], [19.6, 94.0], [19.7, 94.0], [19.8, 95.0], [19.9, 95.0], [20.0, 95.0], [20.1, 96.0], [20.2, 96.0], [20.3, 96.0], [20.4, 97.0], [20.5, 97.0], [20.6, 97.0], [20.7, 98.0], [20.8, 98.0], [20.9, 99.0], [21.0, 99.0], [21.1, 100.0], [21.2, 100.0], [21.3, 101.0], [21.4, 101.0], [21.5, 102.0], [21.6, 102.0], [21.7, 103.0], [21.8, 103.0], [21.9, 103.0], [22.0, 104.0], [22.1, 104.0], [22.2, 105.0], [22.3, 105.0], [22.4, 106.0], [22.5, 106.0], [22.6, 106.0], [22.7, 107.0], [22.8, 107.0], [22.9, 108.0], [23.0, 108.0], [23.1, 109.0], [23.2, 109.0], [23.3, 110.0], [23.4, 110.0], [23.5, 110.0], [23.6, 110.0], [23.7, 111.0], [23.8, 111.0], [23.9, 111.0], [24.0, 112.0], [24.1, 112.0], [24.2, 113.0], [24.3, 113.0], [24.4, 114.0], [24.5, 115.0], [24.6, 115.0], [24.7, 115.0], [24.8, 116.0], [24.9, 116.0], [25.0, 117.0], [25.1, 117.0], [25.2, 117.0], [25.3, 118.0], [25.4, 118.0], [25.5, 119.0], [25.6, 120.0], [25.7, 120.0], [25.8, 121.0], [25.9, 121.0], [26.0, 122.0], [26.1, 122.0], [26.2, 123.0], [26.3, 123.0], [26.4, 123.0], [26.5, 124.0], [26.6, 125.0], [26.7, 125.0], [26.8, 126.0], [26.9, 126.0], [27.0, 127.0], [27.1, 127.0], [27.2, 127.0], [27.3, 128.0], [27.4, 129.0], [27.5, 129.0], [27.6, 129.0], [27.7, 130.0], [27.8, 130.0], [27.9, 131.0], [28.0, 131.0], [28.1, 132.0], [28.2, 132.0], [28.3, 133.0], [28.4, 133.0], [28.5, 134.0], [28.6, 134.0], [28.7, 134.0], [28.8, 135.0], [28.9, 135.0], [29.0, 135.0], [29.1, 135.0], [29.2, 136.0], [29.3, 136.0], [29.4, 136.0], [29.5, 137.0], [29.6, 137.0], [29.7, 137.0], [29.8, 137.0], [29.9, 138.0], [30.0, 138.0], [30.1, 138.0], [30.2, 138.0], [30.3, 139.0], [30.4, 139.0], [30.5, 139.0], [30.6, 139.0], [30.7, 139.0], [30.8, 140.0], [30.9, 140.0], [31.0, 140.0], [31.1, 140.0], [31.2, 141.0], [31.3, 141.0], [31.4, 141.0], [31.5, 141.0], [31.6, 142.0], [31.7, 142.0], [31.8, 142.0], [31.9, 142.0], [32.0, 143.0], [32.1, 143.0], [32.2, 143.0], [32.3, 144.0], [32.4, 144.0], [32.5, 144.0], [32.6, 144.0], [32.7, 145.0], [32.8, 145.0], [32.9, 145.0], [33.0, 146.0], [33.1, 146.0], [33.2, 146.0], [33.3, 147.0], [33.4, 148.0], [33.5, 148.0], [33.6, 148.0], [33.7, 149.0], [33.8, 149.0], [33.9, 149.0], [34.0, 150.0], [34.1, 150.0], [34.2, 150.0], [34.3, 150.0], [34.4, 150.0], [34.5, 151.0], [34.6, 151.0], [34.7, 152.0], [34.8, 152.0], [34.9, 153.0], [35.0, 153.0], [35.1, 154.0], [35.2, 155.0], [35.3, 155.0], [35.4, 156.0], [35.5, 156.0], [35.6, 157.0], [35.7, 157.0], [35.8, 158.0], [35.9, 158.0], [36.0, 159.0], [36.1, 159.0], [36.2, 160.0], [36.3, 161.0], [36.4, 161.0], [36.5, 161.0], [36.6, 162.0], [36.7, 163.0], [36.8, 163.0], [36.9, 164.0], [37.0, 165.0], [37.1, 166.0], [37.2, 167.0], [37.3, 167.0], [37.4, 168.0], [37.5, 168.0], [37.6, 169.0], [37.7, 169.0], [37.8, 170.0], [37.9, 171.0], [38.0, 171.0], [38.1, 172.0], [38.2, 172.0], [38.3, 173.0], [38.4, 174.0], [38.5, 175.0], [38.6, 176.0], [38.7, 177.0], [38.8, 177.0], [38.9, 178.0], [39.0, 179.0], [39.1, 179.0], [39.2, 180.0], [39.3, 180.0], [39.4, 180.0], [39.5, 182.0], [39.6, 182.0], [39.7, 183.0], [39.8, 183.0], [39.9, 183.0], [40.0, 184.0], [40.1, 185.0], [40.2, 185.0], [40.3, 186.0], [40.4, 187.0], [40.5, 187.0], [40.6, 188.0], [40.7, 188.0], [40.8, 189.0], [40.9, 189.0], [41.0, 190.0], [41.1, 191.0], [41.2, 191.0], [41.3, 192.0], [41.4, 193.0], [41.5, 193.0], [41.6, 194.0], [41.7, 194.0], [41.8, 195.0], [41.9, 195.0], [42.0, 196.0], [42.1, 196.0], [42.2, 197.0], [42.3, 197.0], [42.4, 197.0], [42.5, 198.0], [42.6, 199.0], [42.7, 200.0], [42.8, 200.0], [42.9, 201.0], [43.0, 202.0], [43.1, 203.0], [43.2, 204.0], [43.3, 204.0], [43.4, 205.0], [43.5, 206.0], [43.6, 206.0], [43.7, 207.0], [43.8, 207.0], [43.9, 208.0], [44.0, 208.0], [44.1, 208.0], [44.2, 209.0], [44.3, 209.0], [44.4, 210.0], [44.5, 212.0], [44.6, 212.0], [44.7, 213.0], [44.8, 214.0], [44.9, 215.0], [45.0, 215.0], [45.1, 216.0], [45.2, 216.0], [45.3, 217.0], [45.4, 218.0], [45.5, 220.0], [45.6, 220.0], [45.7, 221.0], [45.8, 222.0], [45.9, 222.0], [46.0, 222.0], [46.1, 222.0], [46.2, 223.0], [46.3, 223.0], [46.4, 224.0], [46.5, 224.0], [46.6, 225.0], [46.7, 226.0], [46.8, 227.0], [46.9, 228.0], [47.0, 228.0], [47.1, 228.0], [47.2, 229.0], [47.3, 230.0], [47.4, 230.0], [47.5, 231.0], [47.6, 231.0], [47.7, 232.0], [47.8, 232.0], [47.9, 233.0], [48.0, 233.0], [48.1, 234.0], [48.2, 235.0], [48.3, 236.0], [48.4, 236.0], [48.5, 237.0], [48.6, 238.0], [48.7, 239.0], [48.8, 239.0], [48.9, 240.0], [49.0, 240.0], [49.1, 241.0], [49.2, 243.0], [49.3, 243.0], [49.4, 244.0], [49.5, 246.0], [49.6, 246.0], [49.7, 247.0], [49.8, 248.0], [49.9, 249.0], [50.0, 249.0], [50.1, 250.0], [50.2, 251.0], [50.3, 251.0], [50.4, 252.0], [50.5, 252.0], [50.6, 253.0], [50.7, 254.0], [50.8, 254.0], [50.9, 255.0], [51.0, 256.0], [51.1, 256.0], [51.2, 257.0], [51.3, 258.0], [51.4, 259.0], [51.5, 260.0], [51.6, 261.0], [51.7, 262.0], [51.8, 263.0], [51.9, 264.0], [52.0, 264.0], [52.1, 265.0], [52.2, 266.0], [52.3, 266.0], [52.4, 267.0], [52.5, 269.0], [52.6, 269.0], [52.7, 270.0], [52.8, 270.0], [52.9, 272.0], [53.0, 272.0], [53.1, 273.0], [53.2, 274.0], [53.3, 275.0], [53.4, 276.0], [53.5, 276.0], [53.6, 277.0], [53.7, 279.0], [53.8, 279.0], [53.9, 280.0], [54.0, 282.0], [54.1, 284.0], [54.2, 285.0], [54.3, 286.0], [54.4, 287.0], [54.5, 288.0], [54.6, 288.0], [54.7, 289.0], [54.8, 290.0], [54.9, 291.0], [55.0, 293.0], [55.1, 293.0], [55.2, 294.0], [55.3, 295.0], [55.4, 297.0], [55.5, 298.0], [55.6, 299.0], [55.7, 299.0], [55.8, 301.0], [55.9, 302.0], [56.0, 302.0], [56.1, 303.0], [56.2, 304.0], [56.3, 307.0], [56.4, 308.0], [56.5, 309.0], [56.6, 310.0], [56.7, 310.0], [56.8, 312.0], [56.9, 312.0], [57.0, 314.0], [57.1, 315.0], [57.2, 317.0], [57.3, 318.0], [57.4, 319.0], [57.5, 322.0], [57.6, 323.0], [57.7, 325.0], [57.8, 325.0], [57.9, 327.0], [58.0, 327.0], [58.1, 328.0], [58.2, 330.0], [58.3, 330.0], [58.4, 331.0], [58.5, 332.0], [58.6, 333.0], [58.7, 334.0], [58.8, 335.0], [58.9, 337.0], [59.0, 340.0], [59.1, 341.0], [59.2, 342.0], [59.3, 343.0], [59.4, 344.0], [59.5, 346.0], [59.6, 346.0], [59.7, 347.0], [59.8, 349.0], [59.9, 349.0], [60.0, 351.0], [60.1, 352.0], [60.2, 353.0], [60.3, 354.0], [60.4, 355.0], [60.5, 355.0], [60.6, 356.0], [60.7, 357.0], [60.8, 357.0], [60.9, 358.0], [61.0, 359.0], [61.1, 361.0], [61.2, 361.0], [61.3, 363.0], [61.4, 363.0], [61.5, 366.0], [61.6, 367.0], [61.7, 369.0], [61.8, 370.0], [61.9, 371.0], [62.0, 372.0], [62.1, 372.0], [62.2, 374.0], [62.3, 374.0], [62.4, 375.0], [62.5, 377.0], [62.6, 377.0], [62.7, 379.0], [62.8, 380.0], [62.9, 382.0], [63.0, 383.0], [63.1, 384.0], [63.2, 385.0], [63.3, 386.0], [63.4, 387.0], [63.5, 389.0], [63.6, 390.0], [63.7, 390.0], [63.8, 392.0], [63.9, 393.0], [64.0, 394.0], [64.1, 395.0], [64.2, 396.0], [64.3, 398.0], [64.4, 398.0], [64.5, 399.0], [64.6, 400.0], [64.7, 401.0], [64.8, 402.0], [64.9, 403.0], [65.0, 404.0], [65.1, 405.0], [65.2, 407.0], [65.3, 409.0], [65.4, 410.0], [65.5, 411.0], [65.6, 412.0], [65.7, 413.0], [65.8, 414.0], [65.9, 415.0], [66.0, 416.0], [66.1, 416.0], [66.2, 417.0], [66.3, 418.0], [66.4, 420.0], [66.5, 420.0], [66.6, 421.0], [66.7, 423.0], [66.8, 425.0], [66.9, 428.0], [67.0, 429.0], [67.1, 430.0], [67.2, 431.0], [67.3, 433.0], [67.4, 434.0], [67.5, 436.0], [67.6, 437.0], [67.7, 437.0], [67.8, 438.0], [67.9, 439.0], [68.0, 441.0], [68.1, 441.0], [68.2, 442.0], [68.3, 443.0], [68.4, 444.0], [68.5, 445.0], [68.6, 446.0], [68.7, 447.0], [68.8, 449.0], [68.9, 450.0], [69.0, 451.0], [69.1, 452.0], [69.2, 453.0], [69.3, 454.0], [69.4, 455.0], [69.5, 457.0], [69.6, 458.0], [69.7, 458.0], [69.8, 459.0], [69.9, 460.0], [70.0, 461.0], [70.1, 463.0], [70.2, 464.0], [70.3, 465.0], [70.4, 466.0], [70.5, 466.0], [70.6, 468.0], [70.7, 469.0], [70.8, 470.0], [70.9, 471.0], [71.0, 472.0], [71.1, 474.0], [71.2, 475.0], [71.3, 476.0], [71.4, 477.0], [71.5, 478.0], [71.6, 479.0], [71.7, 482.0], [71.8, 482.0], [71.9, 484.0], [72.0, 485.0], [72.1, 486.0], [72.2, 487.0], [72.3, 488.0], [72.4, 489.0], [72.5, 490.0], [72.6, 491.0], [72.7, 491.0], [72.8, 492.0], [72.9, 493.0], [73.0, 493.0], [73.1, 493.0], [73.2, 495.0], [73.3, 496.0], [73.4, 497.0], [73.5, 497.0], [73.6, 498.0], [73.7, 499.0], [73.8, 500.0], [73.9, 501.0], [74.0, 502.0], [74.1, 502.0], [74.2, 504.0], [74.3, 505.0], [74.4, 505.0], [74.5, 506.0], [74.6, 507.0], [74.7, 507.0], [74.8, 508.0], [74.9, 510.0], [75.0, 511.0], [75.1, 512.0], [75.2, 513.0], [75.3, 514.0], [75.4, 515.0], [75.5, 516.0], [75.6, 517.0], [75.7, 518.0], [75.8, 518.0], [75.9, 519.0], [76.0, 519.0], [76.1, 519.0], [76.2, 520.0], [76.3, 521.0], [76.4, 521.0], [76.5, 522.0], [76.6, 523.0], [76.7, 523.0], [76.8, 524.0], [76.9, 525.0], [77.0, 526.0], [77.1, 526.0], [77.2, 527.0], [77.3, 527.0], [77.4, 529.0], [77.5, 529.0], [77.6, 530.0], [77.7, 530.0], [77.8, 532.0], [77.9, 532.0], [78.0, 534.0], [78.1, 535.0], [78.2, 536.0], [78.3, 538.0], [78.4, 539.0], [78.5, 540.0], [78.6, 541.0], [78.7, 542.0], [78.8, 542.0], [78.9, 543.0], [79.0, 544.0], [79.1, 545.0], [79.2, 545.0], [79.3, 546.0], [79.4, 548.0], [79.5, 549.0], [79.6, 550.0], [79.7, 551.0], [79.8, 551.0], [79.9, 552.0], [80.0, 553.0], [80.1, 555.0], [80.2, 557.0], [80.3, 559.0], [80.4, 560.0], [80.5, 562.0], [80.6, 563.0], [80.7, 563.0], [80.8, 565.0], [80.9, 566.0], [81.0, 567.0], [81.1, 568.0], [81.2, 570.0], [81.3, 571.0], [81.4, 571.0], [81.5, 572.0], [81.6, 573.0], [81.7, 574.0], [81.8, 576.0], [81.9, 577.0], [82.0, 578.0], [82.1, 578.0], [82.2, 580.0], [82.3, 581.0], [82.4, 583.0], [82.5, 585.0], [82.6, 586.0], [82.7, 587.0], [82.8, 588.0], [82.9, 589.0], [83.0, 590.0], [83.1, 593.0], [83.2, 595.0], [83.3, 597.0], [83.4, 598.0], [83.5, 601.0], [83.6, 602.0], [83.7, 605.0], [83.8, 605.0], [83.9, 606.0], [84.0, 607.0], [84.1, 608.0], [84.2, 610.0], [84.3, 611.0], [84.4, 614.0], [84.5, 616.0], [84.6, 617.0], [84.7, 618.0], [84.8, 620.0], [84.9, 623.0], [85.0, 624.0], [85.1, 625.0], [85.2, 625.0], [85.3, 627.0], [85.4, 628.0], [85.5, 630.0], [85.6, 632.0], [85.7, 633.0], [85.8, 634.0], [85.9, 635.0], [86.0, 636.0], [86.1, 637.0], [86.2, 638.0], [86.3, 639.0], [86.4, 641.0], [86.5, 642.0], [86.6, 644.0], [86.7, 645.0], [86.8, 645.0], [86.9, 648.0], [87.0, 648.0], [87.1, 649.0], [87.2, 651.0], [87.3, 653.0], [87.4, 655.0], [87.5, 657.0], [87.6, 658.0], [87.7, 659.0], [87.8, 661.0], [87.9, 663.0], [88.0, 665.0], [88.1, 666.0], [88.2, 667.0], [88.3, 669.0], [88.4, 672.0], [88.5, 676.0], [88.6, 678.0], [88.7, 680.0], [88.8, 681.0], [88.9, 684.0], [89.0, 685.0], [89.1, 686.0], [89.2, 687.0], [89.3, 688.0], [89.4, 690.0], [89.5, 693.0], [89.6, 695.0], [89.7, 698.0], [89.8, 699.0], [89.9, 701.0], [90.0, 702.0], [90.1, 705.0], [90.2, 706.0], [90.3, 709.0], [90.4, 711.0], [90.5, 713.0], [90.6, 716.0], [90.7, 717.0], [90.8, 722.0], [90.9, 723.0], [91.0, 725.0], [91.1, 727.0], [91.2, 729.0], [91.3, 730.0], [91.4, 734.0], [91.5, 736.0], [91.6, 738.0], [91.7, 742.0], [91.8, 746.0], [91.9, 747.0], [92.0, 751.0], [92.1, 753.0], [92.2, 758.0], [92.3, 763.0], [92.4, 765.0], [92.5, 769.0], [92.6, 774.0], [92.7, 777.0], [92.8, 779.0], [92.9, 782.0], [93.0, 787.0], [93.1, 791.0], [93.2, 794.0], [93.3, 797.0], [93.4, 800.0], [93.5, 803.0], [93.6, 804.0], [93.7, 807.0], [93.8, 810.0], [93.9, 814.0], [94.0, 817.0], [94.1, 823.0], [94.2, 827.0], [94.3, 831.0], [94.4, 835.0], [94.5, 842.0], [94.6, 845.0], [94.7, 848.0], [94.8, 851.0], [94.9, 855.0], [95.0, 861.0], [95.1, 865.0], [95.2, 870.0], [95.3, 874.0], [95.4, 881.0], [95.5, 883.0], [95.6, 887.0], [95.7, 893.0], [95.8, 901.0], [95.9, 908.0], [96.0, 913.0], [96.1, 918.0], [96.2, 922.0], [96.3, 927.0], [96.4, 938.0], [96.5, 947.0], [96.6, 954.0], [96.7, 963.0], [96.8, 972.0], [96.9, 977.0], [97.0, 983.0], [97.1, 987.0], [97.2, 1000.0], [97.3, 1008.0], [97.4, 1018.0], [97.5, 1024.0], [97.6, 1028.0], [97.7, 1032.0], [97.8, 1036.0], [97.9, 1046.0], [98.0, 1060.0], [98.1, 1068.0], [98.2, 1076.0], [98.3, 1089.0], [98.4, 1099.0], [98.5, 1128.0], [98.6, 1140.0], [98.7, 1151.0], [98.8, 1164.0], [98.9, 1174.0], [99.0, 1180.0], [99.1, 1198.0], [99.2, 1211.0], [99.3, 1230.0], [99.4, 1291.0], [99.5, 1343.0], [99.6, 1444.0], [99.7, 1473.0], [99.8, 1508.0], [99.9, 1583.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 1120.0, "series": [{"data": [[0.0, 1093.0], [600.0, 331.0], [700.0, 185.0], [200.0, 679.0], [800.0, 126.0], [900.0, 72.0], [1000.0, 64.0], [1100.0, 37.0], [300.0, 458.0], [1200.0, 15.0], [1300.0, 8.0], [1400.0, 9.0], [1500.0, 9.0], [400.0, 478.0], [100.0, 1120.0], [1600.0, 2.0], [1700.0, 1.0], [1900.0, 1.0], [500.0, 502.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1900.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 12.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 3834.0, "series": [{"data": [[0.0, 3834.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1344.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 12.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.974647887323945, "minX": 1.60506042E12, "maxY": 10.0, "series": [{"data": [[1.60506054E12, 9.974647887323945], [1.60506048E12, 10.0], [1.60506042E12, 9.993928354584131]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60506054E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 173.0, "minX": 1.0, "maxY": 1049.0, "series": [{"data": [[8.0, 715.0], [4.0, 499.0], [2.0, 635.0], [1.0, 1049.0], [9.0, 534.6666666666666], [5.0, 385.0], [10.0, 336.8572532354655], [6.0, 522.0], [3.0, 648.0], [7.0, 173.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.989402697495155, 337.3213872832379]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 12464.183333333332, "minX": 1.60506042E12, "maxY": 5924803.666666667, "series": [{"data": [[1.60506054E12, 5789948.516666667], [1.60506048E12, 5924803.666666667], [1.60506042E12, 5203591.816666666]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60506054E12, 13722.85], [1.60506048E12, 13581.6], [1.60506042E12, 12464.183333333332]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60506054E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 332.79323943661865, "minX": 1.60506042E12, "maxY": 340.83823529411774, "series": [{"data": [[1.60506054E12, 332.79323943661865], [1.60506048E12, 340.83823529411774], [1.60506042E12, 338.4262295081958]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60506054E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 331.79098591549285, "minX": 1.60506042E12, "maxY": 339.81957013574646, "series": [{"data": [[1.60506054E12, 331.79098591549285], [1.60506048E12, 339.81957013574646], [1.60506042E12, 336.90588949605416]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60506054E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.007918552036199095, "minX": 1.60506042E12, "maxY": 0.061323618700667895, "series": [{"data": [[1.60506054E12, 0.010704225352112715], [1.60506048E12, 0.007918552036199095], [1.60506042E12, 0.061323618700667895]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60506054E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 30.0, "minX": 1.60506042E12, "maxY": 1923.0, "series": [{"data": [[1.60506054E12, 1777.0], [1.60506048E12, 1923.0], [1.60506042E12, 1691.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60506054E12, 34.98399957656861], [1.60506048E12, 36.0], [1.60506042E12, 39.83199960708618]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60506054E12, 35.0], [1.60506048E12, 37.0], [1.60506042E12, 40.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60506054E12, 35.0], [1.60506048E12, 36.80549978911877], [1.60506042E12, 40.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60506054E12, 31.0], [1.60506048E12, 30.0], [1.60506042E12, 35.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60506054E12, 232.0], [1.60506048E12, 258.5], [1.60506042E12, 253.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60506054E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 79.0, "minX": 6.0, "maxY": 528.0, "series": [{"data": [[33.0, 215.0], [32.0, 267.5], [34.0, 268.5], [36.0, 202.5], [37.0, 98.0], [39.0, 161.0], [38.0, 239.0], [41.0, 188.0], [40.0, 192.5], [42.0, 168.0], [43.0, 177.0], [44.0, 136.0], [46.0, 172.0], [49.0, 187.0], [50.0, 125.0], [51.0, 117.0], [53.0, 148.5], [52.0, 104.0], [55.0, 93.0], [54.0, 89.5], [57.0, 93.5], [59.0, 99.0], [58.0, 101.0], [61.0, 101.0], [62.0, 140.0], [74.0, 95.0], [77.0, 79.0], [6.0, 520.0], [15.0, 525.0], [16.0, 515.0], [17.0, 514.0], [18.0, 528.0], [19.0, 492.5], [20.0, 451.0], [21.0, 424.0], [22.0, 442.5], [23.0, 396.0], [24.0, 390.0], [25.0, 402.0], [26.0, 331.0], [27.0, 330.5], [28.0, 331.0], [29.0, 275.0], [30.0, 308.5], [31.0, 259.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 77.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 79.0, "minX": 6.0, "maxY": 526.0, "series": [{"data": [[33.0, 214.0], [32.0, 267.0], [34.0, 268.0], [36.0, 202.5], [37.0, 98.0], [39.0, 161.0], [38.0, 238.0], [41.0, 187.5], [40.0, 191.0], [42.0, 167.5], [43.0, 177.0], [44.0, 136.0], [46.0, 171.0], [49.0, 187.0], [50.0, 125.0], [51.0, 116.0], [53.0, 148.0], [52.0, 103.5], [55.0, 93.0], [54.0, 89.0], [57.0, 93.0], [59.0, 99.0], [58.0, 101.0], [61.0, 101.0], [62.0, 140.0], [74.0, 95.0], [77.0, 79.0], [6.0, 518.0], [15.0, 525.0], [16.0, 511.5], [17.0, 512.0], [18.0, 526.0], [19.0, 489.5], [20.0, 450.5], [21.0, 422.0], [22.0, 440.5], [23.0, 394.0], [24.0, 390.0], [25.0, 401.5], [26.0, 330.0], [27.0, 330.5], [28.0, 331.0], [29.0, 274.0], [30.0, 308.5], [31.0, 255.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 77.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 27.616666666666667, "minX": 1.60506042E12, "maxY": 29.466666666666665, "series": [{"data": [[1.60506054E12, 29.416666666666668], [1.60506048E12, 29.466666666666665], [1.60506042E12, 27.616666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60506054E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 27.45, "minX": 1.60506042E12, "maxY": 29.583333333333332, "series": [{"data": [[1.60506054E12, 29.583333333333332], [1.60506048E12, 29.466666666666665], [1.60506042E12, 27.45]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60506054E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 27.45, "minX": 1.60506042E12, "maxY": 29.583333333333332, "series": [{"data": [[1.60506054E12, 29.583333333333332], [1.60506048E12, 29.466666666666665], [1.60506042E12, 27.45]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60506054E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 27.45, "minX": 1.60506042E12, "maxY": 29.583333333333332, "series": [{"data": [[1.60506054E12, 29.583333333333332], [1.60506048E12, 29.466666666666665], [1.60506042E12, 27.45]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60506054E12, "title": "Total Transactions Per Second"}},
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

