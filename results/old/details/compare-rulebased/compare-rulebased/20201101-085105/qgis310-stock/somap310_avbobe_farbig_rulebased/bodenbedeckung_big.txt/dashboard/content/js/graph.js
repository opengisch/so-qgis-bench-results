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
        data: {"result": {"minY": 31.0, "minX": 0.0, "maxY": 2258.0, "series": [{"data": [[0.0, 31.0], [0.1, 33.0], [0.2, 34.0], [0.3, 35.0], [0.4, 36.0], [0.5, 36.0], [0.6, 37.0], [0.7, 37.0], [0.8, 37.0], [0.9, 37.0], [1.0, 38.0], [1.1, 38.0], [1.2, 38.0], [1.3, 38.0], [1.4, 39.0], [1.5, 39.0], [1.6, 39.0], [1.7, 40.0], [1.8, 40.0], [1.9, 41.0], [2.0, 41.0], [2.1, 41.0], [2.2, 41.0], [2.3, 42.0], [2.4, 42.0], [2.5, 43.0], [2.6, 43.0], [2.7, 43.0], [2.8, 43.0], [2.9, 43.0], [3.0, 43.0], [3.1, 44.0], [3.2, 44.0], [3.3, 44.0], [3.4, 44.0], [3.5, 45.0], [3.6, 45.0], [3.7, 45.0], [3.8, 45.0], [3.9, 45.0], [4.0, 46.0], [4.1, 46.0], [4.2, 46.0], [4.3, 46.0], [4.4, 46.0], [4.5, 47.0], [4.6, 47.0], [4.7, 47.0], [4.8, 47.0], [4.9, 47.0], [5.0, 48.0], [5.1, 48.0], [5.2, 48.0], [5.3, 48.0], [5.4, 49.0], [5.5, 49.0], [5.6, 49.0], [5.7, 49.0], [5.8, 50.0], [5.9, 50.0], [6.0, 50.0], [6.1, 50.0], [6.2, 51.0], [6.3, 51.0], [6.4, 51.0], [6.5, 51.0], [6.6, 52.0], [6.7, 52.0], [6.8, 52.0], [6.9, 53.0], [7.0, 53.0], [7.1, 53.0], [7.2, 53.0], [7.3, 54.0], [7.4, 55.0], [7.5, 55.0], [7.6, 55.0], [7.7, 55.0], [7.8, 56.0], [7.9, 56.0], [8.0, 57.0], [8.1, 57.0], [8.2, 58.0], [8.3, 58.0], [8.4, 59.0], [8.5, 59.0], [8.6, 59.0], [8.7, 59.0], [8.8, 60.0], [8.9, 60.0], [9.0, 61.0], [9.1, 61.0], [9.2, 62.0], [9.3, 62.0], [9.4, 62.0], [9.5, 63.0], [9.6, 63.0], [9.7, 63.0], [9.8, 64.0], [9.9, 64.0], [10.0, 64.0], [10.1, 65.0], [10.2, 65.0], [10.3, 65.0], [10.4, 65.0], [10.5, 66.0], [10.6, 66.0], [10.7, 66.0], [10.8, 67.0], [10.9, 67.0], [11.0, 67.0], [11.1, 68.0], [11.2, 68.0], [11.3, 68.0], [11.4, 69.0], [11.5, 69.0], [11.6, 70.0], [11.7, 70.0], [11.8, 71.0], [11.9, 71.0], [12.0, 71.0], [12.1, 71.0], [12.2, 72.0], [12.3, 72.0], [12.4, 72.0], [12.5, 72.0], [12.6, 73.0], [12.7, 73.0], [12.8, 73.0], [12.9, 74.0], [13.0, 74.0], [13.1, 74.0], [13.2, 74.0], [13.3, 74.0], [13.4, 75.0], [13.5, 75.0], [13.6, 75.0], [13.7, 75.0], [13.8, 76.0], [13.9, 76.0], [14.0, 76.0], [14.1, 77.0], [14.2, 77.0], [14.3, 77.0], [14.4, 77.0], [14.5, 78.0], [14.6, 78.0], [14.7, 78.0], [14.8, 79.0], [14.9, 79.0], [15.0, 79.0], [15.1, 80.0], [15.2, 80.0], [15.3, 80.0], [15.4, 81.0], [15.5, 81.0], [15.6, 81.0], [15.7, 81.0], [15.8, 82.0], [15.9, 82.0], [16.0, 82.0], [16.1, 82.0], [16.2, 83.0], [16.3, 83.0], [16.4, 83.0], [16.5, 84.0], [16.6, 84.0], [16.7, 84.0], [16.8, 84.0], [16.9, 85.0], [17.0, 85.0], [17.1, 85.0], [17.2, 86.0], [17.3, 86.0], [17.4, 87.0], [17.5, 87.0], [17.6, 87.0], [17.7, 88.0], [17.8, 88.0], [17.9, 89.0], [18.0, 89.0], [18.1, 89.0], [18.2, 90.0], [18.3, 90.0], [18.4, 91.0], [18.5, 91.0], [18.6, 91.0], [18.7, 91.0], [18.8, 92.0], [18.9, 92.0], [19.0, 93.0], [19.1, 93.0], [19.2, 93.0], [19.3, 94.0], [19.4, 94.0], [19.5, 95.0], [19.6, 95.0], [19.7, 95.0], [19.8, 96.0], [19.9, 96.0], [20.0, 96.0], [20.1, 97.0], [20.2, 97.0], [20.3, 98.0], [20.4, 98.0], [20.5, 98.0], [20.6, 99.0], [20.7, 100.0], [20.8, 100.0], [20.9, 100.0], [21.0, 101.0], [21.1, 102.0], [21.2, 102.0], [21.3, 103.0], [21.4, 103.0], [21.5, 104.0], [21.6, 104.0], [21.7, 105.0], [21.8, 106.0], [21.9, 106.0], [22.0, 106.0], [22.1, 107.0], [22.2, 107.0], [22.3, 107.0], [22.4, 108.0], [22.5, 108.0], [22.6, 108.0], [22.7, 109.0], [22.8, 109.0], [22.9, 110.0], [23.0, 110.0], [23.1, 110.0], [23.2, 111.0], [23.3, 111.0], [23.4, 112.0], [23.5, 112.0], [23.6, 113.0], [23.7, 113.0], [23.8, 113.0], [23.9, 114.0], [24.0, 114.0], [24.1, 114.0], [24.2, 115.0], [24.3, 115.0], [24.4, 115.0], [24.5, 116.0], [24.6, 116.0], [24.7, 117.0], [24.8, 117.0], [24.9, 118.0], [25.0, 118.0], [25.1, 119.0], [25.2, 120.0], [25.3, 120.0], [25.4, 121.0], [25.5, 121.0], [25.6, 122.0], [25.7, 122.0], [25.8, 123.0], [25.9, 123.0], [26.0, 123.0], [26.1, 124.0], [26.2, 124.0], [26.3, 124.0], [26.4, 125.0], [26.5, 125.0], [26.6, 126.0], [26.7, 126.0], [26.8, 126.0], [26.9, 127.0], [27.0, 127.0], [27.1, 128.0], [27.2, 129.0], [27.3, 129.0], [27.4, 129.0], [27.5, 130.0], [27.6, 131.0], [27.7, 131.0], [27.8, 132.0], [27.9, 132.0], [28.0, 133.0], [28.1, 133.0], [28.2, 133.0], [28.3, 134.0], [28.4, 134.0], [28.5, 135.0], [28.6, 135.0], [28.7, 135.0], [28.8, 135.0], [28.9, 136.0], [29.0, 136.0], [29.1, 136.0], [29.2, 137.0], [29.3, 137.0], [29.4, 137.0], [29.5, 138.0], [29.6, 138.0], [29.7, 138.0], [29.8, 138.0], [29.9, 139.0], [30.0, 139.0], [30.1, 139.0], [30.2, 139.0], [30.3, 139.0], [30.4, 140.0], [30.5, 140.0], [30.6, 140.0], [30.7, 140.0], [30.8, 141.0], [30.9, 141.0], [31.0, 141.0], [31.1, 141.0], [31.2, 142.0], [31.3, 142.0], [31.4, 142.0], [31.5, 142.0], [31.6, 143.0], [31.7, 143.0], [31.8, 143.0], [31.9, 143.0], [32.0, 143.0], [32.1, 144.0], [32.2, 144.0], [32.3, 145.0], [32.4, 145.0], [32.5, 145.0], [32.6, 146.0], [32.7, 146.0], [32.8, 146.0], [32.9, 147.0], [33.0, 147.0], [33.1, 147.0], [33.2, 147.0], [33.3, 148.0], [33.4, 148.0], [33.5, 148.0], [33.6, 149.0], [33.7, 149.0], [33.8, 150.0], [33.9, 150.0], [34.0, 150.0], [34.1, 151.0], [34.2, 151.0], [34.3, 152.0], [34.4, 152.0], [34.5, 152.0], [34.6, 153.0], [34.7, 153.0], [34.8, 154.0], [34.9, 154.0], [35.0, 155.0], [35.1, 155.0], [35.2, 155.0], [35.3, 156.0], [35.4, 157.0], [35.5, 157.0], [35.6, 158.0], [35.7, 159.0], [35.8, 159.0], [35.9, 160.0], [36.0, 160.0], [36.1, 161.0], [36.2, 162.0], [36.3, 162.0], [36.4, 163.0], [36.5, 163.0], [36.6, 164.0], [36.7, 164.0], [36.8, 165.0], [36.9, 166.0], [37.0, 166.0], [37.1, 167.0], [37.2, 167.0], [37.3, 167.0], [37.4, 168.0], [37.5, 169.0], [37.6, 169.0], [37.7, 170.0], [37.8, 170.0], [37.9, 171.0], [38.0, 172.0], [38.1, 172.0], [38.2, 173.0], [38.3, 173.0], [38.4, 174.0], [38.5, 174.0], [38.6, 175.0], [38.7, 175.0], [38.8, 176.0], [38.9, 177.0], [39.0, 177.0], [39.1, 178.0], [39.2, 178.0], [39.3, 178.0], [39.4, 179.0], [39.5, 180.0], [39.6, 180.0], [39.7, 181.0], [39.8, 182.0], [39.9, 182.0], [40.0, 183.0], [40.1, 183.0], [40.2, 184.0], [40.3, 185.0], [40.4, 185.0], [40.5, 185.0], [40.6, 186.0], [40.7, 186.0], [40.8, 187.0], [40.9, 187.0], [41.0, 188.0], [41.1, 188.0], [41.2, 189.0], [41.3, 189.0], [41.4, 189.0], [41.5, 190.0], [41.6, 191.0], [41.7, 191.0], [41.8, 192.0], [41.9, 192.0], [42.0, 193.0], [42.1, 194.0], [42.2, 194.0], [42.3, 195.0], [42.4, 196.0], [42.5, 196.0], [42.6, 198.0], [42.7, 199.0], [42.8, 199.0], [42.9, 199.0], [43.0, 200.0], [43.1, 201.0], [43.2, 202.0], [43.3, 202.0], [43.4, 203.0], [43.5, 203.0], [43.6, 204.0], [43.7, 205.0], [43.8, 205.0], [43.9, 206.0], [44.0, 207.0], [44.1, 207.0], [44.2, 209.0], [44.3, 209.0], [44.4, 210.0], [44.5, 211.0], [44.6, 212.0], [44.7, 212.0], [44.8, 213.0], [44.9, 214.0], [45.0, 215.0], [45.1, 215.0], [45.2, 216.0], [45.3, 217.0], [45.4, 217.0], [45.5, 217.0], [45.6, 218.0], [45.7, 219.0], [45.8, 219.0], [45.9, 220.0], [46.0, 221.0], [46.1, 222.0], [46.2, 222.0], [46.3, 223.0], [46.4, 224.0], [46.5, 224.0], [46.6, 225.0], [46.7, 226.0], [46.8, 226.0], [46.9, 227.0], [47.0, 228.0], [47.1, 229.0], [47.2, 230.0], [47.3, 231.0], [47.4, 231.0], [47.5, 232.0], [47.6, 233.0], [47.7, 233.0], [47.8, 234.0], [47.9, 235.0], [48.0, 235.0], [48.1, 237.0], [48.2, 237.0], [48.3, 238.0], [48.4, 239.0], [48.5, 240.0], [48.6, 241.0], [48.7, 241.0], [48.8, 242.0], [48.9, 243.0], [49.0, 244.0], [49.1, 245.0], [49.2, 245.0], [49.3, 246.0], [49.4, 247.0], [49.5, 248.0], [49.6, 249.0], [49.7, 250.0], [49.8, 250.0], [49.9, 251.0], [50.0, 252.0], [50.1, 253.0], [50.2, 254.0], [50.3, 255.0], [50.4, 256.0], [50.5, 256.0], [50.6, 258.0], [50.7, 258.0], [50.8, 259.0], [50.9, 260.0], [51.0, 260.0], [51.1, 261.0], [51.2, 261.0], [51.3, 262.0], [51.4, 262.0], [51.5, 263.0], [51.6, 264.0], [51.7, 264.0], [51.8, 265.0], [51.9, 266.0], [52.0, 267.0], [52.1, 267.0], [52.2, 268.0], [52.3, 268.0], [52.4, 269.0], [52.5, 270.0], [52.6, 271.0], [52.7, 272.0], [52.8, 273.0], [52.9, 273.0], [53.0, 274.0], [53.1, 275.0], [53.2, 276.0], [53.3, 277.0], [53.4, 278.0], [53.5, 280.0], [53.6, 281.0], [53.7, 283.0], [53.8, 284.0], [53.9, 286.0], [54.0, 286.0], [54.1, 287.0], [54.2, 289.0], [54.3, 290.0], [54.4, 291.0], [54.5, 291.0], [54.6, 292.0], [54.7, 293.0], [54.8, 294.0], [54.9, 295.0], [55.0, 295.0], [55.1, 297.0], [55.2, 297.0], [55.3, 298.0], [55.4, 299.0], [55.5, 300.0], [55.6, 301.0], [55.7, 303.0], [55.8, 304.0], [55.9, 305.0], [56.0, 305.0], [56.1, 306.0], [56.2, 307.0], [56.3, 309.0], [56.4, 310.0], [56.5, 311.0], [56.6, 312.0], [56.7, 312.0], [56.8, 313.0], [56.9, 315.0], [57.0, 316.0], [57.1, 316.0], [57.2, 317.0], [57.3, 318.0], [57.4, 320.0], [57.5, 321.0], [57.6, 322.0], [57.7, 323.0], [57.8, 325.0], [57.9, 326.0], [58.0, 327.0], [58.1, 328.0], [58.2, 330.0], [58.3, 331.0], [58.4, 332.0], [58.5, 332.0], [58.6, 333.0], [58.7, 334.0], [58.8, 335.0], [58.9, 337.0], [59.0, 338.0], [59.1, 340.0], [59.2, 341.0], [59.3, 342.0], [59.4, 344.0], [59.5, 346.0], [59.6, 346.0], [59.7, 347.0], [59.8, 348.0], [59.9, 349.0], [60.0, 350.0], [60.1, 351.0], [60.2, 351.0], [60.3, 353.0], [60.4, 354.0], [60.5, 355.0], [60.6, 356.0], [60.7, 357.0], [60.8, 358.0], [60.9, 360.0], [61.0, 361.0], [61.1, 363.0], [61.2, 364.0], [61.3, 365.0], [61.4, 366.0], [61.5, 367.0], [61.6, 367.0], [61.7, 368.0], [61.8, 369.0], [61.9, 371.0], [62.0, 372.0], [62.1, 373.0], [62.2, 374.0], [62.3, 374.0], [62.4, 376.0], [62.5, 376.0], [62.6, 378.0], [62.7, 380.0], [62.8, 381.0], [62.9, 383.0], [63.0, 384.0], [63.1, 385.0], [63.2, 387.0], [63.3, 387.0], [63.4, 388.0], [63.5, 389.0], [63.6, 390.0], [63.7, 393.0], [63.8, 394.0], [63.9, 395.0], [64.0, 396.0], [64.1, 398.0], [64.2, 399.0], [64.3, 400.0], [64.4, 401.0], [64.5, 403.0], [64.6, 405.0], [64.7, 405.0], [64.8, 406.0], [64.9, 408.0], [65.0, 409.0], [65.1, 410.0], [65.2, 411.0], [65.3, 412.0], [65.4, 413.0], [65.5, 414.0], [65.6, 415.0], [65.7, 415.0], [65.8, 417.0], [65.9, 419.0], [66.0, 420.0], [66.1, 421.0], [66.2, 422.0], [66.3, 423.0], [66.4, 426.0], [66.5, 426.0], [66.6, 427.0], [66.7, 429.0], [66.8, 431.0], [66.9, 432.0], [67.0, 433.0], [67.1, 434.0], [67.2, 435.0], [67.3, 436.0], [67.4, 437.0], [67.5, 438.0], [67.6, 440.0], [67.7, 441.0], [67.8, 442.0], [67.9, 443.0], [68.0, 443.0], [68.1, 444.0], [68.2, 446.0], [68.3, 447.0], [68.4, 449.0], [68.5, 450.0], [68.6, 451.0], [68.7, 452.0], [68.8, 454.0], [68.9, 454.0], [69.0, 456.0], [69.1, 457.0], [69.2, 458.0], [69.3, 460.0], [69.4, 461.0], [69.5, 462.0], [69.6, 464.0], [69.7, 465.0], [69.8, 466.0], [69.9, 466.0], [70.0, 467.0], [70.1, 468.0], [70.2, 469.0], [70.3, 470.0], [70.4, 470.0], [70.5, 472.0], [70.6, 474.0], [70.7, 475.0], [70.8, 476.0], [70.9, 477.0], [71.0, 478.0], [71.1, 479.0], [71.2, 479.0], [71.3, 480.0], [71.4, 481.0], [71.5, 482.0], [71.6, 485.0], [71.7, 487.0], [71.8, 488.0], [71.9, 490.0], [72.0, 491.0], [72.1, 492.0], [72.2, 494.0], [72.3, 494.0], [72.4, 496.0], [72.5, 496.0], [72.6, 497.0], [72.7, 498.0], [72.8, 499.0], [72.9, 501.0], [73.0, 503.0], [73.1, 504.0], [73.2, 506.0], [73.3, 506.0], [73.4, 506.0], [73.5, 507.0], [73.6, 508.0], [73.7, 510.0], [73.8, 510.0], [73.9, 511.0], [74.0, 513.0], [74.1, 513.0], [74.2, 514.0], [74.3, 515.0], [74.4, 516.0], [74.5, 517.0], [74.6, 518.0], [74.7, 518.0], [74.8, 519.0], [74.9, 521.0], [75.0, 522.0], [75.1, 522.0], [75.2, 522.0], [75.3, 524.0], [75.4, 524.0], [75.5, 525.0], [75.6, 526.0], [75.7, 527.0], [75.8, 528.0], [75.9, 529.0], [76.0, 530.0], [76.1, 530.0], [76.2, 531.0], [76.3, 532.0], [76.4, 534.0], [76.5, 535.0], [76.6, 535.0], [76.7, 536.0], [76.8, 537.0], [76.9, 538.0], [77.0, 540.0], [77.1, 540.0], [77.2, 541.0], [77.3, 541.0], [77.4, 543.0], [77.5, 545.0], [77.6, 545.0], [77.7, 546.0], [77.8, 547.0], [77.9, 548.0], [78.0, 548.0], [78.1, 550.0], [78.2, 551.0], [78.3, 552.0], [78.4, 553.0], [78.5, 554.0], [78.6, 556.0], [78.7, 557.0], [78.8, 558.0], [78.9, 559.0], [79.0, 560.0], [79.1, 561.0], [79.2, 563.0], [79.3, 563.0], [79.4, 564.0], [79.5, 565.0], [79.6, 565.0], [79.7, 567.0], [79.8, 568.0], [79.9, 569.0], [80.0, 571.0], [80.1, 572.0], [80.2, 573.0], [80.3, 573.0], [80.4, 574.0], [80.5, 575.0], [80.6, 576.0], [80.7, 578.0], [80.8, 579.0], [80.9, 580.0], [81.0, 582.0], [81.1, 585.0], [81.2, 586.0], [81.3, 586.0], [81.4, 588.0], [81.5, 588.0], [81.6, 589.0], [81.7, 590.0], [81.8, 590.0], [81.9, 592.0], [82.0, 593.0], [82.1, 596.0], [82.2, 596.0], [82.3, 597.0], [82.4, 598.0], [82.5, 598.0], [82.6, 600.0], [82.7, 602.0], [82.8, 603.0], [82.9, 605.0], [83.0, 606.0], [83.1, 607.0], [83.2, 608.0], [83.3, 610.0], [83.4, 611.0], [83.5, 612.0], [83.6, 613.0], [83.7, 615.0], [83.8, 617.0], [83.9, 618.0], [84.0, 618.0], [84.1, 620.0], [84.2, 621.0], [84.3, 624.0], [84.4, 626.0], [84.5, 627.0], [84.6, 628.0], [84.7, 629.0], [84.8, 630.0], [84.9, 633.0], [85.0, 636.0], [85.1, 638.0], [85.2, 640.0], [85.3, 642.0], [85.4, 644.0], [85.5, 646.0], [85.6, 647.0], [85.7, 648.0], [85.8, 651.0], [85.9, 653.0], [86.0, 653.0], [86.1, 655.0], [86.2, 658.0], [86.3, 660.0], [86.4, 662.0], [86.5, 664.0], [86.6, 665.0], [86.7, 667.0], [86.8, 669.0], [86.9, 670.0], [87.0, 671.0], [87.1, 673.0], [87.2, 675.0], [87.3, 678.0], [87.4, 680.0], [87.5, 681.0], [87.6, 684.0], [87.7, 685.0], [87.8, 688.0], [87.9, 691.0], [88.0, 695.0], [88.1, 698.0], [88.2, 699.0], [88.3, 701.0], [88.4, 703.0], [88.5, 706.0], [88.6, 708.0], [88.7, 711.0], [88.8, 713.0], [88.9, 715.0], [89.0, 717.0], [89.1, 718.0], [89.2, 720.0], [89.3, 721.0], [89.4, 723.0], [89.5, 728.0], [89.6, 732.0], [89.7, 734.0], [89.8, 737.0], [89.9, 740.0], [90.0, 744.0], [90.1, 748.0], [90.2, 751.0], [90.3, 755.0], [90.4, 758.0], [90.5, 760.0], [90.6, 765.0], [90.7, 768.0], [90.8, 771.0], [90.9, 774.0], [91.0, 776.0], [91.1, 781.0], [91.2, 784.0], [91.3, 785.0], [91.4, 790.0], [91.5, 792.0], [91.6, 795.0], [91.7, 800.0], [91.8, 803.0], [91.9, 806.0], [92.0, 811.0], [92.1, 813.0], [92.2, 816.0], [92.3, 818.0], [92.4, 822.0], [92.5, 825.0], [92.6, 830.0], [92.7, 835.0], [92.8, 838.0], [92.9, 841.0], [93.0, 846.0], [93.1, 853.0], [93.2, 860.0], [93.3, 866.0], [93.4, 871.0], [93.5, 873.0], [93.6, 877.0], [93.7, 882.0], [93.8, 885.0], [93.9, 888.0], [94.0, 893.0], [94.1, 897.0], [94.2, 902.0], [94.3, 908.0], [94.4, 913.0], [94.5, 915.0], [94.6, 919.0], [94.7, 922.0], [94.8, 926.0], [94.9, 930.0], [95.0, 934.0], [95.1, 939.0], [95.2, 946.0], [95.3, 956.0], [95.4, 960.0], [95.5, 966.0], [95.6, 973.0], [95.7, 979.0], [95.8, 987.0], [95.9, 991.0], [96.0, 1000.0], [96.1, 1010.0], [96.2, 1018.0], [96.3, 1029.0], [96.4, 1042.0], [96.5, 1048.0], [96.6, 1051.0], [96.7, 1062.0], [96.8, 1073.0], [96.9, 1090.0], [97.0, 1091.0], [97.1, 1095.0], [97.2, 1108.0], [97.3, 1120.0], [97.4, 1128.0], [97.5, 1138.0], [97.6, 1141.0], [97.7, 1151.0], [97.8, 1161.0], [97.9, 1188.0], [98.0, 1197.0], [98.1, 1210.0], [98.2, 1227.0], [98.3, 1234.0], [98.4, 1243.0], [98.5, 1256.0], [98.6, 1268.0], [98.7, 1276.0], [98.8, 1311.0], [98.9, 1323.0], [99.0, 1375.0], [99.1, 1396.0], [99.2, 1439.0], [99.3, 1462.0], [99.4, 1483.0], [99.5, 1520.0], [99.6, 1531.0], [99.7, 1583.0], [99.8, 1676.0], [99.9, 1825.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 1154.0, "series": [{"data": [[0.0, 1073.0], [2200.0, 1.0], [600.0, 294.0], [700.0, 180.0], [200.0, 651.0], [800.0, 127.0], [900.0, 95.0], [1000.0, 59.0], [1100.0, 50.0], [300.0, 454.0], [1200.0, 35.0], [1300.0, 19.0], [1400.0, 18.0], [1500.0, 14.0], [100.0, 1154.0], [400.0, 449.0], [1600.0, 4.0], [1700.0, 4.0], [1800.0, 3.0], [1900.0, 1.0], [500.0, 504.0], [2000.0, 1.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 2200.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 28.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 3783.0, "series": [{"data": [[0.0, 3783.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1379.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 28.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.710526315789473, "minX": 1.60422084E12, "maxY": 10.0, "series": [{"data": [[1.60422102E12, 9.710526315789473], [1.60422084E12, 9.99695307739182], [1.60422096E12, 10.0], [1.6042209E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60422102E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 141.0, "minX": 1.0, "maxY": 1268.0, "series": [{"data": [[8.0, 141.0], [2.0, 1268.0], [1.0, 1232.0], [9.0, 374.0], [5.0, 513.0], [10.0, 349.58339768339835], [6.0, 892.0], [3.0, 415.0], [7.0, 536.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.990558766859387, 350.1423892100199]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 1183.9166666666667, "minX": 1.60422084E12, "maxY": 5859044.05, "series": [{"data": [[1.60422102E12, 440276.51666666666], [1.60422084E12, 5164146.716666667], [1.60422096E12, 5448374.483333333], [1.6042209E12, 5859044.05]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60422102E12, 1183.9166666666667], [1.60422084E12, 12416.166666666666], [1.60422096E12, 13126.55], [1.6042209E12, 13042.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60422102E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 294.986842105263, "minX": 1.60422084E12, "maxY": 353.8784660766961, "series": [{"data": [[1.60422102E12, 294.986842105263], [1.60422084E12, 349.5539305301645], [1.60422096E12, 351.9148061104578], [1.6042209E12, 353.8784660766961]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60422102E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 294.0065789473683, "minX": 1.60422084E12, "maxY": 352.35339233038303, "series": [{"data": [[1.60422102E12, 294.0065789473683], [1.60422084E12, 348.0322973796467], [1.60422096E12, 350.8472385428909], [1.6042209E12, 352.35339233038303]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60422102E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.006578947368421055, "minX": 1.60422084E12, "maxY": 0.084704448507008, "series": [{"data": [[1.60422102E12, 0.006578947368421055], [1.60422084E12, 0.084704448507008], [1.60422096E12, 0.009400705052878967], [1.6042209E12, 0.01179941002949854]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60422102E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 31.0, "minX": 1.60422084E12, "maxY": 2258.0, "series": [{"data": [[1.60422102E12, 1268.0], [1.60422084E12, 1859.0], [1.60422096E12, 2065.0], [1.6042209E12, 2258.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60422102E12, 57.015999708175656], [1.60422084E12, 39.0], [1.60422096E12, 37.326999593973156], [1.6042209E12, 37.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60422102E12, 58.11760011672973], [1.60422084E12, 40.0], [1.60422096E12, 38.0], [1.6042209E12, 37.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60422102E12, 57.62799985408783], [1.60422084E12, 39.59899980425835], [1.60422096E12, 38.0], [1.6042209E12, 37.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60422102E12, 54.0], [1.60422084E12, 31.0], [1.60422096E12, 32.0], [1.6042209E12, 31.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60422102E12, 220.0], [1.60422084E12, 254.0], [1.60422096E12, 229.0], [1.6042209E12, 268.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60422102E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 73.0, "minX": 1.0, "maxY": 1250.0, "series": [{"data": [[2.0, 1250.0], [6.0, 893.5], [8.0, 443.5], [12.0, 584.5], [13.0, 698.0], [14.0, 535.0], [15.0, 522.0], [17.0, 477.0], [18.0, 533.5], [19.0, 480.5], [20.0, 478.5], [21.0, 398.0], [22.0, 394.5], [23.0, 405.0], [24.0, 388.0], [25.0, 358.0], [26.0, 289.0], [27.0, 289.5], [28.0, 288.5], [29.0, 299.0], [30.0, 303.5], [31.0, 307.0], [32.0, 251.5], [33.0, 189.0], [34.0, 179.0], [35.0, 174.5], [37.0, 208.0], [36.0, 214.5], [38.0, 229.0], [39.0, 179.0], [40.0, 137.0], [41.0, 187.0], [42.0, 160.0], [44.0, 99.5], [45.0, 91.0], [47.0, 162.0], [49.0, 108.0], [50.0, 95.0], [51.0, 158.0], [53.0, 91.0], [55.0, 155.0], [56.0, 159.0], [59.0, 123.0], [61.0, 101.0], [60.0, 149.0], [65.0, 79.0], [73.0, 95.0], [72.0, 73.0], [1.0, 289.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 73.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 73.0, "minX": 1.0, "maxY": 1247.0, "series": [{"data": [[2.0, 1247.0], [6.0, 890.0], [8.0, 443.5], [12.0, 581.5], [13.0, 691.0], [14.0, 528.0], [15.0, 518.0], [17.0, 473.0], [18.0, 529.5], [19.0, 476.0], [20.0, 477.5], [21.0, 396.0], [22.0, 393.0], [23.0, 404.5], [24.0, 387.0], [25.0, 355.0], [26.0, 288.5], [27.0, 289.0], [28.0, 288.5], [29.0, 298.0], [30.0, 302.5], [31.0, 303.0], [32.0, 250.5], [33.0, 189.0], [34.0, 178.0], [35.0, 174.0], [37.0, 207.5], [36.0, 212.5], [38.0, 228.5], [39.0, 179.0], [40.0, 137.0], [41.0, 187.0], [42.0, 160.0], [44.0, 99.5], [45.0, 91.0], [47.0, 161.0], [49.0, 108.0], [50.0, 94.5], [51.0, 157.0], [53.0, 91.0], [55.0, 154.0], [56.0, 158.5], [59.0, 122.5], [61.0, 101.0], [60.0, 149.0], [65.0, 78.0], [73.0, 95.0], [72.0, 73.0], [1.0, 285.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 73.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 2.3833333333333333, "minX": 1.60422084E12, "maxY": 28.35, "series": [{"data": [[1.60422102E12, 2.3833333333333333], [1.60422084E12, 27.516666666666666], [1.60422096E12, 28.35], [1.6042209E12, 28.25]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60422102E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 2.533333333333333, "minX": 1.60422084E12, "maxY": 28.366666666666667, "series": [{"data": [[1.60422102E12, 2.533333333333333], [1.60422084E12, 27.35], [1.60422096E12, 28.366666666666667], [1.6042209E12, 28.25]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60422102E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 2.533333333333333, "minX": 1.60422084E12, "maxY": 28.366666666666667, "series": [{"data": [[1.60422102E12, 2.533333333333333], [1.60422084E12, 27.35], [1.60422096E12, 28.366666666666667], [1.6042209E12, 28.25]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60422102E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 2.533333333333333, "minX": 1.60422084E12, "maxY": 28.366666666666667, "series": [{"data": [[1.60422102E12, 2.533333333333333], [1.60422084E12, 27.35], [1.60422096E12, 28.366666666666667], [1.6042209E12, 28.25]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60422102E12, "title": "Total Transactions Per Second"}},
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

