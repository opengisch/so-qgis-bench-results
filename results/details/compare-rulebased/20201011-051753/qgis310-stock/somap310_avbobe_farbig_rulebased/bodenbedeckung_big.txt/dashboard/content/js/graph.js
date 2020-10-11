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
        data: {"result": {"minY": 28.0, "minX": 0.0, "maxY": 1779.0, "series": [{"data": [[0.0, 28.0], [0.1, 31.0], [0.2, 32.0], [0.3, 33.0], [0.4, 35.0], [0.5, 36.0], [0.6, 36.0], [0.7, 37.0], [0.8, 37.0], [0.9, 37.0], [1.0, 37.0], [1.1, 37.0], [1.2, 38.0], [1.3, 38.0], [1.4, 38.0], [1.5, 39.0], [1.6, 39.0], [1.7, 39.0], [1.8, 40.0], [1.9, 40.0], [2.0, 40.0], [2.1, 41.0], [2.2, 41.0], [2.3, 41.0], [2.4, 41.0], [2.5, 41.0], [2.6, 41.0], [2.7, 42.0], [2.8, 42.0], [2.9, 42.0], [3.0, 43.0], [3.1, 43.0], [3.2, 43.0], [3.3, 43.0], [3.4, 43.0], [3.5, 44.0], [3.6, 44.0], [3.7, 44.0], [3.8, 44.0], [3.9, 45.0], [4.0, 45.0], [4.1, 45.0], [4.2, 45.0], [4.3, 45.0], [4.4, 46.0], [4.5, 46.0], [4.6, 47.0], [4.7, 47.0], [4.8, 47.0], [4.9, 47.0], [5.0, 48.0], [5.1, 48.0], [5.2, 48.0], [5.3, 49.0], [5.4, 49.0], [5.5, 49.0], [5.6, 49.0], [5.7, 50.0], [5.8, 50.0], [5.9, 51.0], [6.0, 51.0], [6.1, 51.0], [6.2, 52.0], [6.3, 52.0], [6.4, 52.0], [6.5, 53.0], [6.6, 53.0], [6.7, 54.0], [6.8, 55.0], [6.9, 55.0], [7.0, 56.0], [7.1, 56.0], [7.2, 57.0], [7.3, 57.0], [7.4, 57.0], [7.5, 58.0], [7.6, 58.0], [7.7, 58.0], [7.8, 59.0], [7.9, 59.0], [8.0, 60.0], [8.1, 60.0], [8.2, 61.0], [8.3, 61.0], [8.4, 61.0], [8.5, 62.0], [8.6, 63.0], [8.7, 63.0], [8.8, 63.0], [8.9, 64.0], [9.0, 64.0], [9.1, 64.0], [9.2, 65.0], [9.3, 65.0], [9.4, 65.0], [9.5, 66.0], [9.6, 66.0], [9.7, 66.0], [9.8, 67.0], [9.9, 68.0], [10.0, 68.0], [10.1, 69.0], [10.2, 70.0], [10.3, 70.0], [10.4, 70.0], [10.5, 71.0], [10.6, 71.0], [10.7, 72.0], [10.8, 72.0], [10.9, 72.0], [11.0, 73.0], [11.1, 73.0], [11.2, 73.0], [11.3, 73.0], [11.4, 74.0], [11.5, 74.0], [11.6, 74.0], [11.7, 74.0], [11.8, 75.0], [11.9, 75.0], [12.0, 75.0], [12.1, 75.0], [12.2, 75.0], [12.3, 76.0], [12.4, 76.0], [12.5, 76.0], [12.6, 77.0], [12.7, 77.0], [12.8, 77.0], [12.9, 78.0], [13.0, 78.0], [13.1, 78.0], [13.2, 79.0], [13.3, 79.0], [13.4, 79.0], [13.5, 79.0], [13.6, 79.0], [13.7, 80.0], [13.8, 80.0], [13.9, 80.0], [14.0, 81.0], [14.1, 81.0], [14.2, 81.0], [14.3, 82.0], [14.4, 83.0], [14.5, 83.0], [14.6, 83.0], [14.7, 83.0], [14.8, 84.0], [14.9, 84.0], [15.0, 84.0], [15.1, 84.0], [15.2, 85.0], [15.3, 85.0], [15.4, 85.0], [15.5, 86.0], [15.6, 86.0], [15.7, 86.0], [15.8, 87.0], [15.9, 87.0], [16.0, 87.0], [16.1, 87.0], [16.2, 87.0], [16.3, 87.0], [16.4, 88.0], [16.5, 88.0], [16.6, 88.0], [16.7, 88.0], [16.8, 89.0], [16.9, 89.0], [17.0, 90.0], [17.1, 90.0], [17.2, 90.0], [17.3, 90.0], [17.4, 91.0], [17.5, 91.0], [17.6, 91.0], [17.7, 92.0], [17.8, 92.0], [17.9, 92.0], [18.0, 93.0], [18.1, 93.0], [18.2, 93.0], [18.3, 94.0], [18.4, 94.0], [18.5, 94.0], [18.6, 95.0], [18.7, 95.0], [18.8, 96.0], [18.9, 96.0], [19.0, 96.0], [19.1, 97.0], [19.2, 97.0], [19.3, 97.0], [19.4, 98.0], [19.5, 98.0], [19.6, 99.0], [19.7, 99.0], [19.8, 99.0], [19.9, 99.0], [20.0, 100.0], [20.1, 100.0], [20.2, 101.0], [20.3, 101.0], [20.4, 101.0], [20.5, 102.0], [20.6, 102.0], [20.7, 102.0], [20.8, 102.0], [20.9, 103.0], [21.0, 103.0], [21.1, 104.0], [21.2, 104.0], [21.3, 105.0], [21.4, 105.0], [21.5, 106.0], [21.6, 107.0], [21.7, 107.0], [21.8, 107.0], [21.9, 108.0], [22.0, 108.0], [22.1, 109.0], [22.2, 109.0], [22.3, 110.0], [22.4, 110.0], [22.5, 110.0], [22.6, 111.0], [22.7, 111.0], [22.8, 112.0], [22.9, 112.0], [23.0, 112.0], [23.1, 113.0], [23.2, 114.0], [23.3, 114.0], [23.4, 115.0], [23.5, 115.0], [23.6, 116.0], [23.7, 116.0], [23.8, 116.0], [23.9, 117.0], [24.0, 118.0], [24.1, 118.0], [24.2, 118.0], [24.3, 119.0], [24.4, 120.0], [24.5, 120.0], [24.6, 120.0], [24.7, 121.0], [24.8, 121.0], [24.9, 122.0], [25.0, 122.0], [25.1, 123.0], [25.2, 123.0], [25.3, 123.0], [25.4, 124.0], [25.5, 125.0], [25.6, 126.0], [25.7, 126.0], [25.8, 127.0], [25.9, 127.0], [26.0, 128.0], [26.1, 128.0], [26.2, 129.0], [26.3, 129.0], [26.4, 130.0], [26.5, 131.0], [26.6, 131.0], [26.7, 132.0], [26.8, 132.0], [26.9, 133.0], [27.0, 133.0], [27.1, 134.0], [27.2, 134.0], [27.3, 134.0], [27.4, 135.0], [27.5, 135.0], [27.6, 136.0], [27.7, 136.0], [27.8, 136.0], [27.9, 137.0], [28.0, 137.0], [28.1, 138.0], [28.2, 138.0], [28.3, 138.0], [28.4, 139.0], [28.5, 139.0], [28.6, 139.0], [28.7, 139.0], [28.8, 140.0], [28.9, 140.0], [29.0, 140.0], [29.1, 141.0], [29.2, 141.0], [29.3, 141.0], [29.4, 142.0], [29.5, 142.0], [29.6, 142.0], [29.7, 143.0], [29.8, 143.0], [29.9, 143.0], [30.0, 143.0], [30.1, 144.0], [30.2, 144.0], [30.3, 144.0], [30.4, 145.0], [30.5, 145.0], [30.6, 146.0], [30.7, 146.0], [30.8, 146.0], [30.9, 147.0], [31.0, 147.0], [31.1, 148.0], [31.2, 148.0], [31.3, 149.0], [31.4, 149.0], [31.5, 150.0], [31.6, 150.0], [31.7, 150.0], [31.8, 151.0], [31.9, 151.0], [32.0, 151.0], [32.1, 152.0], [32.2, 153.0], [32.3, 153.0], [32.4, 153.0], [32.5, 154.0], [32.6, 154.0], [32.7, 155.0], [32.8, 156.0], [32.9, 156.0], [33.0, 156.0], [33.1, 157.0], [33.2, 157.0], [33.3, 157.0], [33.4, 158.0], [33.5, 158.0], [33.6, 158.0], [33.7, 159.0], [33.8, 159.0], [33.9, 160.0], [34.0, 161.0], [34.1, 161.0], [34.2, 162.0], [34.3, 163.0], [34.4, 163.0], [34.5, 164.0], [34.6, 164.0], [34.7, 165.0], [34.8, 166.0], [34.9, 166.0], [35.0, 167.0], [35.1, 167.0], [35.2, 167.0], [35.3, 168.0], [35.4, 169.0], [35.5, 169.0], [35.6, 170.0], [35.7, 171.0], [35.8, 172.0], [35.9, 172.0], [36.0, 173.0], [36.1, 174.0], [36.2, 174.0], [36.3, 175.0], [36.4, 176.0], [36.5, 176.0], [36.6, 177.0], [36.7, 178.0], [36.8, 178.0], [36.9, 179.0], [37.0, 180.0], [37.1, 180.0], [37.2, 181.0], [37.3, 181.0], [37.4, 183.0], [37.5, 183.0], [37.6, 184.0], [37.7, 185.0], [37.8, 185.0], [37.9, 186.0], [38.0, 187.0], [38.1, 188.0], [38.2, 188.0], [38.3, 189.0], [38.4, 190.0], [38.5, 191.0], [38.6, 191.0], [38.7, 192.0], [38.8, 193.0], [38.9, 193.0], [39.0, 194.0], [39.1, 194.0], [39.2, 195.0], [39.3, 195.0], [39.4, 196.0], [39.5, 196.0], [39.6, 197.0], [39.7, 197.0], [39.8, 198.0], [39.9, 199.0], [40.0, 200.0], [40.1, 201.0], [40.2, 202.0], [40.3, 202.0], [40.4, 203.0], [40.5, 204.0], [40.6, 204.0], [40.7, 205.0], [40.8, 205.0], [40.9, 205.0], [41.0, 206.0], [41.1, 206.0], [41.2, 207.0], [41.3, 208.0], [41.4, 209.0], [41.5, 209.0], [41.6, 210.0], [41.7, 210.0], [41.8, 211.0], [41.9, 212.0], [42.0, 212.0], [42.1, 213.0], [42.2, 213.0], [42.3, 214.0], [42.4, 214.0], [42.5, 215.0], [42.6, 215.0], [42.7, 216.0], [42.8, 216.0], [42.9, 217.0], [43.0, 217.0], [43.1, 218.0], [43.2, 218.0], [43.3, 219.0], [43.4, 220.0], [43.5, 220.0], [43.6, 221.0], [43.7, 222.0], [43.8, 223.0], [43.9, 224.0], [44.0, 224.0], [44.1, 225.0], [44.2, 225.0], [44.3, 226.0], [44.4, 227.0], [44.5, 228.0], [44.6, 228.0], [44.7, 229.0], [44.8, 230.0], [44.9, 230.0], [45.0, 231.0], [45.1, 231.0], [45.2, 231.0], [45.3, 233.0], [45.4, 234.0], [45.5, 234.0], [45.6, 235.0], [45.7, 235.0], [45.8, 236.0], [45.9, 236.0], [46.0, 237.0], [46.1, 237.0], [46.2, 238.0], [46.3, 239.0], [46.4, 240.0], [46.5, 241.0], [46.6, 241.0], [46.7, 242.0], [46.8, 243.0], [46.9, 244.0], [47.0, 244.0], [47.1, 245.0], [47.2, 245.0], [47.3, 246.0], [47.4, 247.0], [47.5, 248.0], [47.6, 248.0], [47.7, 249.0], [47.8, 250.0], [47.9, 251.0], [48.0, 252.0], [48.1, 253.0], [48.2, 253.0], [48.3, 254.0], [48.4, 255.0], [48.5, 256.0], [48.6, 256.0], [48.7, 257.0], [48.8, 257.0], [48.9, 258.0], [49.0, 258.0], [49.1, 259.0], [49.2, 259.0], [49.3, 260.0], [49.4, 260.0], [49.5, 261.0], [49.6, 262.0], [49.7, 263.0], [49.8, 263.0], [49.9, 264.0], [50.0, 265.0], [50.1, 266.0], [50.2, 267.0], [50.3, 267.0], [50.4, 268.0], [50.5, 268.0], [50.6, 269.0], [50.7, 270.0], [50.8, 270.0], [50.9, 271.0], [51.0, 271.0], [51.1, 272.0], [51.2, 272.0], [51.3, 273.0], [51.4, 274.0], [51.5, 274.0], [51.6, 275.0], [51.7, 276.0], [51.8, 276.0], [51.9, 277.0], [52.0, 278.0], [52.1, 279.0], [52.2, 280.0], [52.3, 281.0], [52.4, 282.0], [52.5, 282.0], [52.6, 283.0], [52.7, 285.0], [52.8, 286.0], [52.9, 286.0], [53.0, 288.0], [53.1, 288.0], [53.2, 289.0], [53.3, 289.0], [53.4, 291.0], [53.5, 293.0], [53.6, 294.0], [53.7, 295.0], [53.8, 296.0], [53.9, 297.0], [54.0, 298.0], [54.1, 298.0], [54.2, 300.0], [54.3, 301.0], [54.4, 301.0], [54.5, 302.0], [54.6, 302.0], [54.7, 303.0], [54.8, 304.0], [54.9, 304.0], [55.0, 306.0], [55.1, 307.0], [55.2, 307.0], [55.3, 309.0], [55.4, 310.0], [55.5, 311.0], [55.6, 312.0], [55.7, 312.0], [55.8, 314.0], [55.9, 315.0], [56.0, 315.0], [56.1, 316.0], [56.2, 317.0], [56.3, 318.0], [56.4, 320.0], [56.5, 321.0], [56.6, 321.0], [56.7, 322.0], [56.8, 322.0], [56.9, 323.0], [57.0, 324.0], [57.1, 325.0], [57.2, 325.0], [57.3, 326.0], [57.4, 327.0], [57.5, 328.0], [57.6, 328.0], [57.7, 329.0], [57.8, 330.0], [57.9, 331.0], [58.0, 333.0], [58.1, 334.0], [58.2, 335.0], [58.3, 336.0], [58.4, 337.0], [58.5, 338.0], [58.6, 339.0], [58.7, 340.0], [58.8, 341.0], [58.9, 342.0], [59.0, 343.0], [59.1, 344.0], [59.2, 345.0], [59.3, 346.0], [59.4, 346.0], [59.5, 348.0], [59.6, 348.0], [59.7, 349.0], [59.8, 350.0], [59.9, 352.0], [60.0, 353.0], [60.1, 355.0], [60.2, 355.0], [60.3, 357.0], [60.4, 358.0], [60.5, 359.0], [60.6, 361.0], [60.7, 362.0], [60.8, 363.0], [60.9, 364.0], [61.0, 365.0], [61.1, 366.0], [61.2, 367.0], [61.3, 368.0], [61.4, 369.0], [61.5, 371.0], [61.6, 372.0], [61.7, 373.0], [61.8, 374.0], [61.9, 375.0], [62.0, 376.0], [62.1, 377.0], [62.2, 378.0], [62.3, 379.0], [62.4, 380.0], [62.5, 380.0], [62.6, 381.0], [62.7, 383.0], [62.8, 384.0], [62.9, 384.0], [63.0, 385.0], [63.1, 387.0], [63.2, 388.0], [63.3, 389.0], [63.4, 390.0], [63.5, 391.0], [63.6, 391.0], [63.7, 392.0], [63.8, 394.0], [63.9, 395.0], [64.0, 396.0], [64.1, 397.0], [64.2, 397.0], [64.3, 398.0], [64.4, 399.0], [64.5, 400.0], [64.6, 401.0], [64.7, 403.0], [64.8, 404.0], [64.9, 405.0], [65.0, 405.0], [65.1, 406.0], [65.2, 407.0], [65.3, 409.0], [65.4, 410.0], [65.5, 410.0], [65.6, 411.0], [65.7, 412.0], [65.8, 413.0], [65.9, 414.0], [66.0, 415.0], [66.1, 416.0], [66.2, 416.0], [66.3, 418.0], [66.4, 418.0], [66.5, 419.0], [66.6, 419.0], [66.7, 421.0], [66.8, 422.0], [66.9, 423.0], [67.0, 425.0], [67.1, 426.0], [67.2, 426.0], [67.3, 427.0], [67.4, 427.0], [67.5, 428.0], [67.6, 430.0], [67.7, 431.0], [67.8, 432.0], [67.9, 433.0], [68.0, 434.0], [68.1, 435.0], [68.2, 436.0], [68.3, 437.0], [68.4, 438.0], [68.5, 439.0], [68.6, 441.0], [68.7, 441.0], [68.8, 442.0], [68.9, 443.0], [69.0, 445.0], [69.1, 446.0], [69.2, 446.0], [69.3, 448.0], [69.4, 449.0], [69.5, 451.0], [69.6, 452.0], [69.7, 453.0], [69.8, 455.0], [69.9, 456.0], [70.0, 458.0], [70.1, 459.0], [70.2, 460.0], [70.3, 461.0], [70.4, 462.0], [70.5, 463.0], [70.6, 464.0], [70.7, 465.0], [70.8, 466.0], [70.9, 466.0], [71.0, 468.0], [71.1, 469.0], [71.2, 470.0], [71.3, 471.0], [71.4, 472.0], [71.5, 473.0], [71.6, 473.0], [71.7, 474.0], [71.8, 475.0], [71.9, 476.0], [72.0, 477.0], [72.1, 478.0], [72.2, 479.0], [72.3, 480.0], [72.4, 481.0], [72.5, 482.0], [72.6, 483.0], [72.7, 484.0], [72.8, 485.0], [72.9, 486.0], [73.0, 488.0], [73.1, 488.0], [73.2, 489.0], [73.3, 490.0], [73.4, 491.0], [73.5, 493.0], [73.6, 493.0], [73.7, 495.0], [73.8, 496.0], [73.9, 497.0], [74.0, 498.0], [74.1, 499.0], [74.2, 499.0], [74.3, 501.0], [74.4, 502.0], [74.5, 503.0], [74.6, 503.0], [74.7, 504.0], [74.8, 505.0], [74.9, 506.0], [75.0, 507.0], [75.1, 508.0], [75.2, 509.0], [75.3, 510.0], [75.4, 511.0], [75.5, 512.0], [75.6, 512.0], [75.7, 513.0], [75.8, 515.0], [75.9, 516.0], [76.0, 517.0], [76.1, 517.0], [76.2, 518.0], [76.3, 519.0], [76.4, 521.0], [76.5, 523.0], [76.6, 524.0], [76.7, 525.0], [76.8, 526.0], [76.9, 527.0], [77.0, 528.0], [77.1, 529.0], [77.2, 530.0], [77.3, 531.0], [77.4, 532.0], [77.5, 533.0], [77.6, 534.0], [77.7, 535.0], [77.8, 536.0], [77.9, 537.0], [78.0, 538.0], [78.1, 539.0], [78.2, 539.0], [78.3, 540.0], [78.4, 541.0], [78.5, 542.0], [78.6, 543.0], [78.7, 545.0], [78.8, 545.0], [78.9, 546.0], [79.0, 547.0], [79.1, 548.0], [79.2, 550.0], [79.3, 551.0], [79.4, 552.0], [79.5, 553.0], [79.6, 554.0], [79.7, 555.0], [79.8, 555.0], [79.9, 556.0], [80.0, 557.0], [80.1, 558.0], [80.2, 559.0], [80.3, 560.0], [80.4, 561.0], [80.5, 563.0], [80.6, 564.0], [80.7, 566.0], [80.8, 566.0], [80.9, 568.0], [81.0, 569.0], [81.1, 571.0], [81.2, 571.0], [81.3, 573.0], [81.4, 573.0], [81.5, 574.0], [81.6, 575.0], [81.7, 576.0], [81.8, 577.0], [81.9, 578.0], [82.0, 579.0], [82.1, 581.0], [82.2, 583.0], [82.3, 584.0], [82.4, 585.0], [82.5, 586.0], [82.6, 587.0], [82.7, 588.0], [82.8, 588.0], [82.9, 591.0], [83.0, 592.0], [83.1, 593.0], [83.2, 595.0], [83.3, 596.0], [83.4, 597.0], [83.5, 599.0], [83.6, 600.0], [83.7, 601.0], [83.8, 603.0], [83.9, 604.0], [84.0, 605.0], [84.1, 606.0], [84.2, 607.0], [84.3, 608.0], [84.4, 609.0], [84.5, 610.0], [84.6, 611.0], [84.7, 613.0], [84.8, 614.0], [84.9, 615.0], [85.0, 616.0], [85.1, 618.0], [85.2, 620.0], [85.3, 621.0], [85.4, 623.0], [85.5, 625.0], [85.6, 626.0], [85.7, 627.0], [85.8, 628.0], [85.9, 630.0], [86.0, 631.0], [86.1, 632.0], [86.2, 633.0], [86.3, 634.0], [86.4, 635.0], [86.5, 636.0], [86.6, 637.0], [86.7, 639.0], [86.8, 641.0], [86.9, 642.0], [87.0, 643.0], [87.1, 644.0], [87.2, 646.0], [87.3, 648.0], [87.4, 650.0], [87.5, 650.0], [87.6, 651.0], [87.7, 652.0], [87.8, 654.0], [87.9, 655.0], [88.0, 657.0], [88.1, 659.0], [88.2, 660.0], [88.3, 663.0], [88.4, 664.0], [88.5, 666.0], [88.6, 667.0], [88.7, 669.0], [88.8, 671.0], [88.9, 671.0], [89.0, 673.0], [89.1, 674.0], [89.2, 675.0], [89.3, 676.0], [89.4, 677.0], [89.5, 678.0], [89.6, 679.0], [89.7, 681.0], [89.8, 682.0], [89.9, 683.0], [90.0, 684.0], [90.1, 688.0], [90.2, 689.0], [90.3, 691.0], [90.4, 693.0], [90.5, 695.0], [90.6, 698.0], [90.7, 699.0], [90.8, 701.0], [90.9, 702.0], [91.0, 703.0], [91.1, 706.0], [91.2, 708.0], [91.3, 711.0], [91.4, 712.0], [91.5, 715.0], [91.6, 717.0], [91.7, 721.0], [91.8, 724.0], [91.9, 726.0], [92.0, 728.0], [92.1, 731.0], [92.2, 735.0], [92.3, 736.0], [92.4, 739.0], [92.5, 744.0], [92.6, 747.0], [92.7, 750.0], [92.8, 751.0], [92.9, 754.0], [93.0, 758.0], [93.1, 761.0], [93.2, 766.0], [93.3, 768.0], [93.4, 770.0], [93.5, 773.0], [93.6, 776.0], [93.7, 783.0], [93.8, 789.0], [93.9, 795.0], [94.0, 797.0], [94.1, 799.0], [94.2, 801.0], [94.3, 802.0], [94.4, 806.0], [94.5, 812.0], [94.6, 813.0], [94.7, 821.0], [94.8, 823.0], [94.9, 826.0], [95.0, 831.0], [95.1, 838.0], [95.2, 845.0], [95.3, 851.0], [95.4, 853.0], [95.5, 858.0], [95.6, 862.0], [95.7, 868.0], [95.8, 869.0], [95.9, 874.0], [96.0, 877.0], [96.1, 884.0], [96.2, 888.0], [96.3, 891.0], [96.4, 894.0], [96.5, 898.0], [96.6, 911.0], [96.7, 917.0], [96.8, 922.0], [96.9, 926.0], [97.0, 933.0], [97.1, 938.0], [97.2, 953.0], [97.3, 959.0], [97.4, 967.0], [97.5, 976.0], [97.6, 987.0], [97.7, 1000.0], [97.8, 1008.0], [97.9, 1014.0], [98.0, 1027.0], [98.1, 1033.0], [98.2, 1041.0], [98.3, 1051.0], [98.4, 1055.0], [98.5, 1063.0], [98.6, 1068.0], [98.7, 1073.0], [98.8, 1092.0], [98.9, 1107.0], [99.0, 1117.0], [99.1, 1128.0], [99.2, 1178.0], [99.3, 1207.0], [99.4, 1238.0], [99.5, 1296.0], [99.6, 1350.0], [99.7, 1388.0], [99.8, 1430.0], [99.9, 1572.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 1038.0, "series": [{"data": [[0.0, 1035.0], [600.0, 374.0], [700.0, 178.0], [800.0, 122.0], [200.0, 738.0], [900.0, 61.0], [1000.0, 60.0], [1100.0, 22.0], [300.0, 534.0], [1200.0, 13.0], [1300.0, 12.0], [1400.0, 6.0], [1500.0, 4.0], [400.0, 506.0], [100.0, 1038.0], [1600.0, 1.0], [1700.0, 2.0], [500.0, 484.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1700.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 7.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 3855.0, "series": [{"data": [[0.0, 3855.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1328.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 7.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.964028776978417, "minX": 1.6023936E12, "maxY": 10.0, "series": [{"data": [[1.60239366E12, 10.0], [1.60239378E12, 9.964028776978417], [1.6023936E12, 10.0], [1.60239372E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60239378E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 181.0, "minX": 1.0, "maxY": 1071.0, "series": [{"data": [[8.0, 268.0], [4.0, 348.0], [2.0, 421.0], [1.0, 1071.0], [9.0, 387.0], [10.0, 337.6761243003284], [5.0, 374.0], [6.0, 818.0], [3.0, 805.0], [7.0, 181.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.991329479768785, 337.9909441233143]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 2797.1833333333334, "minX": 1.6023936E12, "maxY": 5888414.9, "series": [{"data": [[1.60239366E12, 5701474.9], [1.60239378E12, 3850242.6333333333], [1.6023936E12, 1471622.5833333333], [1.60239372E12, 5888414.9]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60239366E12, 13584.016666666666], [1.60239378E12, 9787.2], [1.6023936E12, 2797.1833333333334], [1.60239372E12, 13600.233333333334]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60239378E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 323.09592326139096, "minX": 1.6023936E12, "maxY": 416.03466666666674, "series": [{"data": [[1.60239366E12, 336.1564971751407], [1.60239378E12, 323.09592326139096], [1.6023936E12, 416.03466666666674], [1.60239372E12, 333.87402452619875]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60239378E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 322.0679456434849, "minX": 1.6023936E12, "maxY": 414.3306666666666, "series": [{"data": [[1.60239366E12, 334.7785310734453], [1.60239378E12, 322.0679456434849], [1.6023936E12, 414.3306666666666], [1.60239372E12, 332.5250836120407]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60239378E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.00959232613908874, "minX": 1.6023936E12, "maxY": 0.22933333333333333, "series": [{"data": [[1.60239366E12, 0.010734463276836184], [1.60239378E12, 0.00959232613908874], [1.6023936E12, 0.22933333333333333], [1.60239372E12, 0.010033444816053515]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60239378E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 28.0, "minX": 1.6023936E12, "maxY": 1779.0, "series": [{"data": [[1.60239366E12, 1754.0], [1.60239378E12, 1594.0], [1.6023936E12, 1463.0], [1.60239372E12, 1779.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60239366E12, 38.0], [1.60239378E12, 36.0], [1.6023936E12, 43.0], [1.60239372E12, 37.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60239366E12, 38.0], [1.60239378E12, 36.394800119400024], [1.6023936E12, 43.0], [1.60239372E12, 37.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60239366E12, 38.0], [1.60239378E12, 36.0], [1.6023936E12, 43.0], [1.60239372E12, 37.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60239366E12, 28.0], [1.60239378E12, 31.0], [1.6023936E12, 40.0], [1.60239372E12, 29.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60239366E12, 250.5], [1.60239378E12, 242.0], [1.6023936E12, 409.0], [1.60239372E12, 263.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60239378E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 84.0, "minX": 7.0, "maxY": 731.0, "series": [{"data": [[7.0, 731.0], [8.0, 397.5], [11.0, 403.0], [13.0, 651.5], [14.0, 629.5], [16.0, 529.0], [17.0, 500.0], [18.0, 553.0], [19.0, 516.0], [20.0, 484.0], [21.0, 430.0], [22.0, 374.0], [23.0, 426.5], [24.0, 378.5], [25.0, 410.0], [26.0, 404.0], [27.0, 353.0], [28.0, 277.0], [29.0, 309.0], [30.0, 365.0], [31.0, 339.0], [33.0, 261.0], [32.0, 273.5], [34.0, 252.5], [35.0, 258.0], [36.0, 208.5], [37.0, 183.5], [38.0, 126.0], [40.0, 147.0], [41.0, 87.0], [42.0, 152.0], [43.0, 182.0], [45.0, 150.0], [47.0, 87.5], [49.0, 96.0], [48.0, 198.5], [51.0, 153.0], [50.0, 98.0], [52.0, 162.5], [53.0, 92.0], [55.0, 120.0], [54.0, 152.0], [56.0, 139.0], [57.0, 105.0], [58.0, 152.0], [60.0, 124.0], [74.0, 84.0], [78.0, 87.0], [91.0, 88.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 91.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 83.5, "minX": 7.0, "maxY": 731.0, "series": [{"data": [[7.0, 731.0], [8.0, 397.0], [11.0, 402.0], [13.0, 644.0], [14.0, 626.0], [16.0, 524.5], [17.0, 496.0], [18.0, 550.0], [19.0, 513.0], [20.0, 483.0], [21.0, 430.0], [22.0, 372.0], [23.0, 423.0], [24.0, 377.5], [25.0, 407.0], [26.0, 402.0], [27.0, 352.0], [28.0, 277.0], [29.0, 308.0], [30.0, 363.5], [31.0, 338.5], [33.0, 261.0], [32.0, 270.0], [34.0, 252.0], [35.0, 257.0], [36.0, 208.5], [37.0, 182.5], [38.0, 126.0], [40.0, 145.5], [41.0, 86.0], [42.0, 151.0], [43.0, 181.0], [45.0, 149.5], [47.0, 87.0], [49.0, 96.0], [48.0, 198.5], [51.0, 152.0], [50.0, 98.0], [52.0, 162.5], [53.0, 92.0], [55.0, 119.0], [54.0, 151.0], [56.0, 139.0], [57.0, 105.0], [58.0, 151.0], [60.0, 123.0], [74.0, 83.5], [78.0, 87.0], [91.0, 88.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 91.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 6.4, "minX": 1.6023936E12, "maxY": 29.9, "series": [{"data": [[1.60239366E12, 29.516666666666666], [1.60239378E12, 20.683333333333334], [1.6023936E12, 6.4], [1.60239372E12, 29.9]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60239378E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 6.25, "minX": 1.6023936E12, "maxY": 29.9, "series": [{"data": [[1.60239366E12, 29.5], [1.60239378E12, 20.85], [1.6023936E12, 6.25], [1.60239372E12, 29.9]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60239378E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 6.25, "minX": 1.6023936E12, "maxY": 29.9, "series": [{"data": [[1.60239366E12, 29.5], [1.60239378E12, 20.85], [1.6023936E12, 6.25], [1.60239372E12, 29.9]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60239378E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 6.25, "minX": 1.6023936E12, "maxY": 29.9, "series": [{"data": [[1.60239366E12, 29.5], [1.60239378E12, 20.85], [1.6023936E12, 6.25], [1.60239372E12, 29.9]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60239378E12, "title": "Total Transactions Per Second"}},
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

