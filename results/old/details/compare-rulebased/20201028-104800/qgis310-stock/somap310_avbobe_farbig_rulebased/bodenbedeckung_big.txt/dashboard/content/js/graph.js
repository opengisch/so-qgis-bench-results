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
        data: {"result": {"minY": 28.0, "minX": 0.0, "maxY": 2056.0, "series": [{"data": [[0.0, 28.0], [0.1, 31.0], [0.2, 33.0], [0.3, 34.0], [0.4, 35.0], [0.5, 36.0], [0.6, 36.0], [0.7, 37.0], [0.8, 37.0], [0.9, 37.0], [1.0, 37.0], [1.1, 37.0], [1.2, 38.0], [1.3, 38.0], [1.4, 38.0], [1.5, 39.0], [1.6, 39.0], [1.7, 39.0], [1.8, 40.0], [1.9, 40.0], [2.0, 40.0], [2.1, 40.0], [2.2, 41.0], [2.3, 41.0], [2.4, 41.0], [2.5, 41.0], [2.6, 41.0], [2.7, 42.0], [2.8, 42.0], [2.9, 42.0], [3.0, 43.0], [3.1, 43.0], [3.2, 43.0], [3.3, 43.0], [3.4, 43.0], [3.5, 44.0], [3.6, 44.0], [3.7, 44.0], [3.8, 44.0], [3.9, 44.0], [4.0, 44.0], [4.1, 44.0], [4.2, 45.0], [4.3, 45.0], [4.4, 45.0], [4.5, 45.0], [4.6, 45.0], [4.7, 45.0], [4.8, 46.0], [4.9, 46.0], [5.0, 46.0], [5.1, 46.0], [5.2, 47.0], [5.3, 47.0], [5.4, 47.0], [5.5, 47.0], [5.6, 47.0], [5.7, 47.0], [5.8, 48.0], [5.9, 48.0], [6.0, 48.0], [6.1, 48.0], [6.2, 49.0], [6.3, 49.0], [6.4, 49.0], [6.5, 49.0], [6.6, 50.0], [6.7, 50.0], [6.8, 50.0], [6.9, 51.0], [7.0, 51.0], [7.1, 51.0], [7.2, 51.0], [7.3, 52.0], [7.4, 52.0], [7.5, 52.0], [7.6, 52.0], [7.7, 52.0], [7.8, 52.0], [7.9, 53.0], [8.0, 53.0], [8.1, 53.0], [8.2, 54.0], [8.3, 54.0], [8.4, 55.0], [8.5, 55.0], [8.6, 55.0], [8.7, 56.0], [8.8, 57.0], [8.9, 57.0], [9.0, 57.0], [9.1, 57.0], [9.2, 58.0], [9.3, 58.0], [9.4, 58.0], [9.5, 58.0], [9.6, 59.0], [9.7, 59.0], [9.8, 59.0], [9.9, 59.0], [10.0, 60.0], [10.1, 61.0], [10.2, 61.0], [10.3, 61.0], [10.4, 62.0], [10.5, 62.0], [10.6, 62.0], [10.7, 62.0], [10.8, 63.0], [10.9, 63.0], [11.0, 63.0], [11.1, 64.0], [11.2, 64.0], [11.3, 65.0], [11.4, 65.0], [11.5, 65.0], [11.6, 66.0], [11.7, 66.0], [11.8, 66.0], [11.9, 67.0], [12.0, 67.0], [12.1, 67.0], [12.2, 68.0], [12.3, 68.0], [12.4, 68.0], [12.5, 68.0], [12.6, 68.0], [12.7, 69.0], [12.8, 69.0], [12.9, 69.0], [13.0, 70.0], [13.1, 70.0], [13.2, 70.0], [13.3, 71.0], [13.4, 72.0], [13.5, 72.0], [13.6, 72.0], [13.7, 72.0], [13.8, 73.0], [13.9, 73.0], [14.0, 73.0], [14.1, 74.0], [14.2, 74.0], [14.3, 74.0], [14.4, 75.0], [14.5, 75.0], [14.6, 75.0], [14.7, 75.0], [14.8, 76.0], [14.9, 76.0], [15.0, 77.0], [15.1, 77.0], [15.2, 77.0], [15.3, 78.0], [15.4, 78.0], [15.5, 78.0], [15.6, 78.0], [15.7, 79.0], [15.8, 79.0], [15.9, 79.0], [16.0, 80.0], [16.1, 80.0], [16.2, 81.0], [16.3, 81.0], [16.4, 82.0], [16.5, 82.0], [16.6, 82.0], [16.7, 82.0], [16.8, 82.0], [16.9, 83.0], [17.0, 83.0], [17.1, 83.0], [17.2, 84.0], [17.3, 84.0], [17.4, 84.0], [17.5, 85.0], [17.6, 85.0], [17.7, 85.0], [17.8, 86.0], [17.9, 86.0], [18.0, 86.0], [18.1, 86.0], [18.2, 86.0], [18.3, 87.0], [18.4, 87.0], [18.5, 87.0], [18.6, 87.0], [18.7, 88.0], [18.8, 88.0], [18.9, 88.0], [19.0, 89.0], [19.1, 89.0], [19.2, 89.0], [19.3, 89.0], [19.4, 89.0], [19.5, 90.0], [19.6, 90.0], [19.7, 90.0], [19.8, 90.0], [19.9, 91.0], [20.0, 91.0], [20.1, 91.0], [20.2, 91.0], [20.3, 91.0], [20.4, 92.0], [20.5, 92.0], [20.6, 92.0], [20.7, 93.0], [20.8, 93.0], [20.9, 94.0], [21.0, 94.0], [21.1, 95.0], [21.2, 95.0], [21.3, 95.0], [21.4, 96.0], [21.5, 96.0], [21.6, 97.0], [21.7, 97.0], [21.8, 98.0], [21.9, 98.0], [22.0, 98.0], [22.1, 99.0], [22.2, 99.0], [22.3, 100.0], [22.4, 100.0], [22.5, 100.0], [22.6, 101.0], [22.7, 101.0], [22.8, 101.0], [22.9, 102.0], [23.0, 102.0], [23.1, 103.0], [23.2, 103.0], [23.3, 103.0], [23.4, 104.0], [23.5, 104.0], [23.6, 104.0], [23.7, 106.0], [23.8, 106.0], [23.9, 107.0], [24.0, 107.0], [24.1, 108.0], [24.2, 108.0], [24.3, 108.0], [24.4, 109.0], [24.5, 109.0], [24.6, 110.0], [24.7, 110.0], [24.8, 111.0], [24.9, 112.0], [25.0, 112.0], [25.1, 113.0], [25.2, 113.0], [25.3, 115.0], [25.4, 115.0], [25.5, 115.0], [25.6, 115.0], [25.7, 116.0], [25.8, 117.0], [25.9, 117.0], [26.0, 118.0], [26.1, 118.0], [26.2, 119.0], [26.3, 119.0], [26.4, 120.0], [26.5, 120.0], [26.6, 120.0], [26.7, 121.0], [26.8, 121.0], [26.9, 121.0], [27.0, 122.0], [27.1, 123.0], [27.2, 123.0], [27.3, 123.0], [27.4, 124.0], [27.5, 125.0], [27.6, 125.0], [27.7, 126.0], [27.8, 126.0], [27.9, 127.0], [28.0, 127.0], [28.1, 128.0], [28.2, 128.0], [28.3, 128.0], [28.4, 129.0], [28.5, 129.0], [28.6, 130.0], [28.7, 131.0], [28.8, 132.0], [28.9, 132.0], [29.0, 133.0], [29.1, 133.0], [29.2, 133.0], [29.3, 134.0], [29.4, 134.0], [29.5, 134.0], [29.6, 134.0], [29.7, 135.0], [29.8, 135.0], [29.9, 135.0], [30.0, 135.0], [30.1, 136.0], [30.2, 136.0], [30.3, 136.0], [30.4, 136.0], [30.5, 137.0], [30.6, 137.0], [30.7, 137.0], [30.8, 138.0], [30.9, 138.0], [31.0, 138.0], [31.1, 138.0], [31.2, 138.0], [31.3, 138.0], [31.4, 139.0], [31.5, 139.0], [31.6, 140.0], [31.7, 140.0], [31.8, 140.0], [31.9, 141.0], [32.0, 141.0], [32.1, 141.0], [32.2, 141.0], [32.3, 142.0], [32.4, 142.0], [32.5, 142.0], [32.6, 142.0], [32.7, 142.0], [32.8, 143.0], [32.9, 143.0], [33.0, 143.0], [33.1, 143.0], [33.2, 144.0], [33.3, 144.0], [33.4, 144.0], [33.5, 145.0], [33.6, 145.0], [33.7, 145.0], [33.8, 146.0], [33.9, 146.0], [34.0, 147.0], [34.1, 147.0], [34.2, 147.0], [34.3, 147.0], [34.4, 148.0], [34.5, 148.0], [34.6, 149.0], [34.7, 149.0], [34.8, 149.0], [34.9, 150.0], [35.0, 150.0], [35.1, 150.0], [35.2, 151.0], [35.3, 151.0], [35.4, 151.0], [35.5, 152.0], [35.6, 153.0], [35.7, 153.0], [35.8, 154.0], [35.9, 155.0], [36.0, 155.0], [36.1, 155.0], [36.2, 156.0], [36.3, 156.0], [36.4, 157.0], [36.5, 157.0], [36.6, 157.0], [36.7, 158.0], [36.8, 159.0], [36.9, 159.0], [37.0, 159.0], [37.1, 160.0], [37.2, 160.0], [37.3, 161.0], [37.4, 162.0], [37.5, 163.0], [37.6, 163.0], [37.7, 164.0], [37.8, 164.0], [37.9, 164.0], [38.0, 165.0], [38.1, 166.0], [38.2, 166.0], [38.3, 167.0], [38.4, 168.0], [38.5, 170.0], [38.6, 170.0], [38.7, 171.0], [38.8, 171.0], [38.9, 172.0], [39.0, 173.0], [39.1, 174.0], [39.2, 174.0], [39.3, 175.0], [39.4, 175.0], [39.5, 176.0], [39.6, 177.0], [39.7, 178.0], [39.8, 178.0], [39.9, 179.0], [40.0, 179.0], [40.1, 180.0], [40.2, 181.0], [40.3, 183.0], [40.4, 183.0], [40.5, 184.0], [40.6, 185.0], [40.7, 185.0], [40.8, 186.0], [40.9, 186.0], [41.0, 187.0], [41.1, 187.0], [41.2, 188.0], [41.3, 189.0], [41.4, 190.0], [41.5, 190.0], [41.6, 191.0], [41.7, 191.0], [41.8, 192.0], [41.9, 193.0], [42.0, 194.0], [42.1, 194.0], [42.2, 196.0], [42.3, 196.0], [42.4, 197.0], [42.5, 197.0], [42.6, 198.0], [42.7, 199.0], [42.8, 200.0], [42.9, 200.0], [43.0, 201.0], [43.1, 201.0], [43.2, 202.0], [43.3, 202.0], [43.4, 202.0], [43.5, 203.0], [43.6, 204.0], [43.7, 205.0], [43.8, 206.0], [43.9, 207.0], [44.0, 207.0], [44.1, 207.0], [44.2, 208.0], [44.3, 209.0], [44.4, 209.0], [44.5, 210.0], [44.6, 211.0], [44.7, 212.0], [44.8, 213.0], [44.9, 213.0], [45.0, 214.0], [45.1, 215.0], [45.2, 216.0], [45.3, 217.0], [45.4, 217.0], [45.5, 218.0], [45.6, 218.0], [45.7, 219.0], [45.8, 219.0], [45.9, 220.0], [46.0, 221.0], [46.1, 222.0], [46.2, 223.0], [46.3, 223.0], [46.4, 225.0], [46.5, 225.0], [46.6, 226.0], [46.7, 227.0], [46.8, 227.0], [46.9, 228.0], [47.0, 229.0], [47.1, 230.0], [47.2, 231.0], [47.3, 232.0], [47.4, 233.0], [47.5, 234.0], [47.6, 235.0], [47.7, 235.0], [47.8, 236.0], [47.9, 238.0], [48.0, 239.0], [48.1, 239.0], [48.2, 240.0], [48.3, 240.0], [48.4, 241.0], [48.5, 241.0], [48.6, 242.0], [48.7, 242.0], [48.8, 243.0], [48.9, 244.0], [49.0, 245.0], [49.1, 245.0], [49.2, 246.0], [49.3, 247.0], [49.4, 248.0], [49.5, 250.0], [49.6, 251.0], [49.7, 251.0], [49.8, 252.0], [49.9, 252.0], [50.0, 253.0], [50.1, 253.0], [50.2, 254.0], [50.3, 255.0], [50.4, 256.0], [50.5, 257.0], [50.6, 258.0], [50.7, 259.0], [50.8, 260.0], [50.9, 261.0], [51.0, 261.0], [51.1, 262.0], [51.2, 262.0], [51.3, 263.0], [51.4, 263.0], [51.5, 264.0], [51.6, 265.0], [51.7, 266.0], [51.8, 266.0], [51.9, 267.0], [52.0, 268.0], [52.1, 269.0], [52.2, 270.0], [52.3, 271.0], [52.4, 272.0], [52.5, 273.0], [52.6, 274.0], [52.7, 275.0], [52.8, 276.0], [52.9, 276.0], [53.0, 277.0], [53.1, 277.0], [53.2, 279.0], [53.3, 280.0], [53.4, 280.0], [53.5, 281.0], [53.6, 282.0], [53.7, 283.0], [53.8, 285.0], [53.9, 286.0], [54.0, 286.0], [54.1, 287.0], [54.2, 288.0], [54.3, 289.0], [54.4, 290.0], [54.5, 291.0], [54.6, 292.0], [54.7, 293.0], [54.8, 294.0], [54.9, 294.0], [55.0, 295.0], [55.1, 296.0], [55.2, 297.0], [55.3, 298.0], [55.4, 299.0], [55.5, 299.0], [55.6, 301.0], [55.7, 301.0], [55.8, 302.0], [55.9, 303.0], [56.0, 303.0], [56.1, 304.0], [56.2, 304.0], [56.3, 305.0], [56.4, 305.0], [56.5, 306.0], [56.6, 307.0], [56.7, 308.0], [56.8, 309.0], [56.9, 311.0], [57.0, 312.0], [57.1, 313.0], [57.2, 314.0], [57.3, 314.0], [57.4, 315.0], [57.5, 316.0], [57.6, 316.0], [57.7, 317.0], [57.8, 318.0], [57.9, 320.0], [58.0, 321.0], [58.1, 322.0], [58.2, 323.0], [58.3, 324.0], [58.4, 325.0], [58.5, 326.0], [58.6, 327.0], [58.7, 329.0], [58.8, 330.0], [58.9, 331.0], [59.0, 333.0], [59.1, 334.0], [59.2, 335.0], [59.3, 337.0], [59.4, 337.0], [59.5, 338.0], [59.6, 339.0], [59.7, 340.0], [59.8, 340.0], [59.9, 343.0], [60.0, 343.0], [60.1, 344.0], [60.2, 345.0], [60.3, 347.0], [60.4, 348.0], [60.5, 349.0], [60.6, 350.0], [60.7, 350.0], [60.8, 351.0], [60.9, 353.0], [61.0, 354.0], [61.1, 356.0], [61.2, 357.0], [61.3, 358.0], [61.4, 360.0], [61.5, 361.0], [61.6, 363.0], [61.7, 364.0], [61.8, 365.0], [61.9, 366.0], [62.0, 367.0], [62.1, 369.0], [62.2, 370.0], [62.3, 372.0], [62.4, 373.0], [62.5, 375.0], [62.6, 377.0], [62.7, 377.0], [62.8, 378.0], [62.9, 379.0], [63.0, 380.0], [63.1, 381.0], [63.2, 382.0], [63.3, 383.0], [63.4, 384.0], [63.5, 385.0], [63.6, 386.0], [63.7, 388.0], [63.8, 389.0], [63.9, 390.0], [64.0, 391.0], [64.1, 392.0], [64.2, 392.0], [64.3, 393.0], [64.4, 395.0], [64.5, 396.0], [64.6, 397.0], [64.7, 398.0], [64.8, 399.0], [64.9, 401.0], [65.0, 403.0], [65.1, 405.0], [65.2, 407.0], [65.3, 407.0], [65.4, 408.0], [65.5, 409.0], [65.6, 409.0], [65.7, 411.0], [65.8, 413.0], [65.9, 414.0], [66.0, 415.0], [66.1, 416.0], [66.2, 416.0], [66.3, 417.0], [66.4, 418.0], [66.5, 420.0], [66.6, 421.0], [66.7, 422.0], [66.8, 423.0], [66.9, 425.0], [67.0, 426.0], [67.1, 427.0], [67.2, 428.0], [67.3, 429.0], [67.4, 430.0], [67.5, 432.0], [67.6, 433.0], [67.7, 435.0], [67.8, 437.0], [67.9, 439.0], [68.0, 440.0], [68.1, 441.0], [68.2, 443.0], [68.3, 443.0], [68.4, 444.0], [68.5, 445.0], [68.6, 448.0], [68.7, 449.0], [68.8, 450.0], [68.9, 451.0], [69.0, 453.0], [69.1, 454.0], [69.2, 455.0], [69.3, 457.0], [69.4, 457.0], [69.5, 459.0], [69.6, 460.0], [69.7, 461.0], [69.8, 462.0], [69.9, 464.0], [70.0, 465.0], [70.1, 467.0], [70.2, 468.0], [70.3, 469.0], [70.4, 470.0], [70.5, 470.0], [70.6, 471.0], [70.7, 472.0], [70.8, 473.0], [70.9, 474.0], [71.0, 474.0], [71.1, 475.0], [71.2, 476.0], [71.3, 478.0], [71.4, 478.0], [71.5, 479.0], [71.6, 480.0], [71.7, 481.0], [71.8, 482.0], [71.9, 483.0], [72.0, 483.0], [72.1, 485.0], [72.2, 486.0], [72.3, 487.0], [72.4, 487.0], [72.5, 489.0], [72.6, 491.0], [72.7, 492.0], [72.8, 493.0], [72.9, 493.0], [73.0, 495.0], [73.1, 497.0], [73.2, 498.0], [73.3, 498.0], [73.4, 500.0], [73.5, 500.0], [73.6, 500.0], [73.7, 501.0], [73.8, 503.0], [73.9, 504.0], [74.0, 505.0], [74.1, 506.0], [74.2, 506.0], [74.3, 507.0], [74.4, 508.0], [74.5, 509.0], [74.6, 510.0], [74.7, 511.0], [74.8, 511.0], [74.9, 512.0], [75.0, 513.0], [75.1, 514.0], [75.2, 515.0], [75.3, 516.0], [75.4, 517.0], [75.5, 518.0], [75.6, 519.0], [75.7, 520.0], [75.8, 520.0], [75.9, 521.0], [76.0, 523.0], [76.1, 524.0], [76.2, 525.0], [76.3, 525.0], [76.4, 526.0], [76.5, 526.0], [76.6, 527.0], [76.7, 527.0], [76.8, 528.0], [76.9, 529.0], [77.0, 530.0], [77.1, 530.0], [77.2, 531.0], [77.3, 531.0], [77.4, 532.0], [77.5, 533.0], [77.6, 533.0], [77.7, 535.0], [77.8, 535.0], [77.9, 536.0], [78.0, 537.0], [78.1, 538.0], [78.2, 539.0], [78.3, 541.0], [78.4, 542.0], [78.5, 542.0], [78.6, 542.0], [78.7, 544.0], [78.8, 545.0], [78.9, 546.0], [79.0, 547.0], [79.1, 547.0], [79.2, 548.0], [79.3, 549.0], [79.4, 550.0], [79.5, 551.0], [79.6, 551.0], [79.7, 552.0], [79.8, 553.0], [79.9, 555.0], [80.0, 556.0], [80.1, 557.0], [80.2, 557.0], [80.3, 558.0], [80.4, 559.0], [80.5, 561.0], [80.6, 562.0], [80.7, 563.0], [80.8, 565.0], [80.9, 567.0], [81.0, 568.0], [81.1, 570.0], [81.2, 572.0], [81.3, 572.0], [81.4, 573.0], [81.5, 574.0], [81.6, 576.0], [81.7, 577.0], [81.8, 578.0], [81.9, 580.0], [82.0, 581.0], [82.1, 582.0], [82.2, 583.0], [82.3, 585.0], [82.4, 587.0], [82.5, 588.0], [82.6, 589.0], [82.7, 590.0], [82.8, 592.0], [82.9, 593.0], [83.0, 594.0], [83.1, 595.0], [83.2, 597.0], [83.3, 599.0], [83.4, 600.0], [83.5, 601.0], [83.6, 602.0], [83.7, 604.0], [83.8, 606.0], [83.9, 607.0], [84.0, 609.0], [84.1, 610.0], [84.2, 612.0], [84.3, 613.0], [84.4, 616.0], [84.5, 617.0], [84.6, 618.0], [84.7, 620.0], [84.8, 621.0], [84.9, 622.0], [85.0, 623.0], [85.1, 625.0], [85.2, 626.0], [85.3, 629.0], [85.4, 630.0], [85.5, 631.0], [85.6, 632.0], [85.7, 633.0], [85.8, 635.0], [85.9, 637.0], [86.0, 638.0], [86.1, 639.0], [86.2, 641.0], [86.3, 641.0], [86.4, 643.0], [86.5, 646.0], [86.6, 647.0], [86.7, 648.0], [86.8, 650.0], [86.9, 652.0], [87.0, 653.0], [87.1, 656.0], [87.2, 658.0], [87.3, 662.0], [87.4, 664.0], [87.5, 666.0], [87.6, 668.0], [87.7, 669.0], [87.8, 671.0], [87.9, 674.0], [88.0, 676.0], [88.1, 678.0], [88.2, 680.0], [88.3, 683.0], [88.4, 684.0], [88.5, 687.0], [88.6, 688.0], [88.7, 691.0], [88.8, 692.0], [88.9, 693.0], [89.0, 694.0], [89.1, 695.0], [89.2, 696.0], [89.3, 700.0], [89.4, 705.0], [89.5, 706.0], [89.6, 707.0], [89.7, 708.0], [89.8, 709.0], [89.9, 713.0], [90.0, 715.0], [90.1, 717.0], [90.2, 719.0], [90.3, 721.0], [90.4, 723.0], [90.5, 726.0], [90.6, 728.0], [90.7, 732.0], [90.8, 733.0], [90.9, 738.0], [91.0, 739.0], [91.1, 743.0], [91.2, 745.0], [91.3, 749.0], [91.4, 752.0], [91.5, 754.0], [91.6, 757.0], [91.7, 761.0], [91.8, 763.0], [91.9, 766.0], [92.0, 772.0], [92.1, 777.0], [92.2, 782.0], [92.3, 784.0], [92.4, 787.0], [92.5, 789.0], [92.6, 792.0], [92.7, 798.0], [92.8, 802.0], [92.9, 810.0], [93.0, 812.0], [93.1, 815.0], [93.2, 818.0], [93.3, 821.0], [93.4, 823.0], [93.5, 829.0], [93.6, 836.0], [93.7, 839.0], [93.8, 842.0], [93.9, 847.0], [94.0, 850.0], [94.1, 855.0], [94.2, 859.0], [94.3, 863.0], [94.4, 868.0], [94.5, 870.0], [94.6, 875.0], [94.7, 880.0], [94.8, 885.0], [94.9, 892.0], [95.0, 900.0], [95.1, 904.0], [95.2, 907.0], [95.3, 916.0], [95.4, 920.0], [95.5, 925.0], [95.6, 927.0], [95.7, 935.0], [95.8, 944.0], [95.9, 949.0], [96.0, 956.0], [96.1, 962.0], [96.2, 968.0], [96.3, 972.0], [96.4, 981.0], [96.5, 988.0], [96.6, 992.0], [96.7, 997.0], [96.8, 1005.0], [96.9, 1011.0], [97.0, 1023.0], [97.1, 1028.0], [97.2, 1033.0], [97.3, 1044.0], [97.4, 1056.0], [97.5, 1061.0], [97.6, 1077.0], [97.7, 1085.0], [97.8, 1103.0], [97.9, 1118.0], [98.0, 1129.0], [98.1, 1141.0], [98.2, 1158.0], [98.3, 1167.0], [98.4, 1175.0], [98.5, 1180.0], [98.6, 1191.0], [98.7, 1203.0], [98.8, 1212.0], [98.9, 1219.0], [99.0, 1232.0], [99.1, 1249.0], [99.2, 1283.0], [99.3, 1318.0], [99.4, 1354.0], [99.5, 1391.0], [99.6, 1459.0], [99.7, 1482.0], [99.8, 1561.0], [99.9, 1628.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 2.0, "minX": 0.0, "maxY": 1156.0, "series": [{"data": [[0.0, 1156.0], [600.0, 309.0], [700.0, 180.0], [800.0, 117.0], [200.0, 661.0], [900.0, 89.0], [1000.0, 55.0], [1100.0, 47.0], [300.0, 485.0], [1200.0, 30.0], [1300.0, 14.0], [1400.0, 11.0], [1500.0, 7.0], [400.0, 442.0], [100.0, 1064.0], [1600.0, 3.0], [1700.0, 2.0], [500.0, 516.0], [2000.0, 2.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 2000.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 14.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 3821.0, "series": [{"data": [[0.0, 3821.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1355.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 14.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.970250169033127, "minX": 1.6038822E12, "maxY": 10.0, "series": [{"data": [[1.60388232E12, 10.0], [1.60388238E12, 9.970250169033127], [1.6038822E12, 9.99099099099099], [1.60388226E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60388238E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 133.0, "minX": 2.0, "maxY": 831.5, "series": [{"data": [[8.0, 289.0], [4.0, 396.0], [2.0, 831.5], [9.0, 397.5], [10.0, 339.52432432432596], [5.0, 525.0], [6.0, 631.0], [3.0, 708.0], [7.0, 133.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.991329479768794, 339.8605009633921]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 853.85, "minX": 1.6038822E12, "maxY": 5652311.983333333, "series": [{"data": [[1.60388232E12, 5652311.983333333], [1.60388238E12, 5090400.616666666], [1.6038822E12, 594398.05], [1.60388226E12, 5574731.116666666]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60388232E12, 14085.716666666667], [1.60388238E12, 11499.266666666666], [1.6038822E12, 853.85], [1.60388226E12, 13329.8]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60388238E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 323.5517615176157, "minX": 1.6038822E12, "maxY": 527.0090090090092, "series": [{"data": [[1.60388232E12, 323.5517615176157], [1.60388238E12, 345.7518593644357], [1.6038822E12, 527.0090090090092], [1.60388226E12, 340.20398860398916]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60388238E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 322.2157181571822, "minX": 1.6038822E12, "maxY": 524.6306306306305, "series": [{"data": [[1.60388232E12, 322.2157181571822], [1.60388238E12, 344.62136578769423], [1.6038822E12, 524.6306306306305], [1.60388226E12, 338.76011396011364]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60388238E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.007977207977207959, "minX": 1.6038822E12, "maxY": 0.828828828828829, "series": [{"data": [[1.60388232E12, 0.009756097560975634], [1.60388238E12, 0.008113590263691678], [1.6038822E12, 0.828828828828829], [1.60388226E12, 0.007977207977207959]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60388238E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 28.0, "minX": 1.6038822E12, "maxY": 2056.0, "series": [{"data": [[1.60388232E12, 1674.0], [1.60388238E12, 2056.0], [1.6038822E12, 1539.0], [1.60388226E12, 2014.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60388232E12, 37.0], [1.60388238E12, 37.0], [1.6038822E12, 57.0], [1.60388226E12, 37.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60388232E12, 37.0], [1.60388238E12, 37.0], [1.6038822E12, 57.0], [1.60388226E12, 37.38440016746521]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60388232E12, 37.0], [1.60388238E12, 37.0], [1.6038822E12, 57.0], [1.60388226E12, 37.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60388232E12, 28.0], [1.60388238E12, 31.0], [1.6038822E12, 57.0], [1.60388226E12, 30.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60388232E12, 234.0], [1.60388238E12, 253.0], [1.6038822E12, 526.0], [1.60388226E12, 264.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60388238E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 58.0, "minX": 3.0, "maxY": 788.0, "series": [{"data": [[32.0, 213.0], [33.0, 177.0], [34.0, 316.5], [35.0, 218.0], [36.0, 201.0], [37.0, 234.0], [38.0, 173.5], [39.0, 229.5], [40.0, 170.5], [41.0, 142.0], [42.0, 131.5], [43.0, 104.0], [45.0, 146.0], [46.0, 93.0], [48.0, 166.5], [49.0, 111.5], [3.0, 788.0], [51.0, 94.0], [54.0, 157.0], [55.0, 58.0], [57.0, 152.0], [58.0, 112.5], [60.0, 145.5], [61.0, 107.0], [65.0, 82.0], [69.0, 119.0], [83.0, 94.0], [91.0, 90.0], [11.0, 618.0], [13.0, 604.0], [15.0, 572.0], [16.0, 511.0], [17.0, 483.0], [18.0, 574.5], [19.0, 498.0], [20.0, 372.5], [21.0, 436.0], [22.0, 429.0], [23.0, 315.0], [24.0, 386.0], [25.0, 386.5], [26.0, 366.5], [27.0, 272.0], [28.0, 300.5], [29.0, 332.0], [30.0, 320.0], [31.0, 301.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 91.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 58.0, "minX": 3.0, "maxY": 786.0, "series": [{"data": [[32.0, 212.0], [33.0, 177.0], [34.0, 314.5], [35.0, 217.0], [36.0, 200.5], [37.0, 234.0], [38.0, 172.0], [39.0, 229.0], [40.0, 170.5], [41.0, 141.0], [42.0, 131.5], [43.0, 104.0], [45.0, 145.5], [46.0, 92.5], [48.0, 165.5], [49.0, 111.0], [3.0, 786.0], [51.0, 94.0], [54.0, 156.5], [55.0, 58.0], [57.0, 151.5], [58.0, 112.5], [60.0, 145.0], [61.0, 107.0], [65.0, 82.0], [69.0, 119.0], [83.0, 94.0], [91.0, 89.0], [11.0, 617.0], [13.0, 604.0], [15.0, 563.0], [16.0, 509.0], [17.0, 483.0], [18.0, 572.0], [19.0, 495.0], [20.0, 372.0], [21.0, 434.5], [22.0, 428.5], [23.0, 314.0], [24.0, 385.5], [25.0, 384.0], [26.0, 365.0], [27.0, 270.0], [28.0, 300.0], [29.0, 331.5], [30.0, 318.5], [31.0, 300.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 91.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 2.0166666666666666, "minX": 1.6038822E12, "maxY": 30.75, "series": [{"data": [[1.60388232E12, 30.75], [1.60388238E12, 24.483333333333334], [1.6038822E12, 2.0166666666666666], [1.60388226E12, 29.25]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60388238E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1.85, "minX": 1.6038822E12, "maxY": 30.75, "series": [{"data": [[1.60388232E12, 30.75], [1.60388238E12, 24.65], [1.6038822E12, 1.85], [1.60388226E12, 29.25]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60388238E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.85, "minX": 1.6038822E12, "maxY": 30.75, "series": [{"data": [[1.60388232E12, 30.75], [1.60388238E12, 24.65], [1.6038822E12, 1.85], [1.60388226E12, 29.25]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60388238E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.85, "minX": 1.6038822E12, "maxY": 30.75, "series": [{"data": [[1.60388232E12, 30.75], [1.60388238E12, 24.65], [1.6038822E12, 1.85], [1.60388226E12, 29.25]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60388238E12, "title": "Total Transactions Per Second"}},
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

