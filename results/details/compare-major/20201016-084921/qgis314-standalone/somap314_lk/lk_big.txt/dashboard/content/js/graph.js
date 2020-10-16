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
        data: {"result": {"minY": 34.0, "minX": 0.0, "maxY": 3781.0, "series": [{"data": [[0.0, 34.0], [0.1, 38.0], [0.2, 39.0], [0.3, 39.0], [0.4, 40.0], [0.5, 41.0], [0.6, 41.0], [0.7, 42.0], [0.8, 42.0], [0.9, 42.0], [1.0, 43.0], [1.1, 43.0], [1.2, 43.0], [1.3, 43.0], [1.4, 44.0], [1.5, 44.0], [1.6, 44.0], [1.7, 44.0], [1.8, 44.0], [1.9, 44.0], [2.0, 45.0], [2.1, 45.0], [2.2, 45.0], [2.3, 45.0], [2.4, 45.0], [2.5, 45.0], [2.6, 46.0], [2.7, 46.0], [2.8, 46.0], [2.9, 46.0], [3.0, 46.0], [3.1, 46.0], [3.2, 46.0], [3.3, 46.0], [3.4, 46.0], [3.5, 46.0], [3.6, 46.0], [3.7, 46.0], [3.8, 46.0], [3.9, 47.0], [4.0, 47.0], [4.1, 47.0], [4.2, 47.0], [4.3, 47.0], [4.4, 47.0], [4.5, 47.0], [4.6, 47.0], [4.7, 47.0], [4.8, 47.0], [4.9, 47.0], [5.0, 47.0], [5.1, 48.0], [5.2, 48.0], [5.3, 48.0], [5.4, 48.0], [5.5, 48.0], [5.6, 48.0], [5.7, 48.0], [5.8, 48.0], [5.9, 48.0], [6.0, 48.0], [6.1, 48.0], [6.2, 48.0], [6.3, 48.0], [6.4, 48.0], [6.5, 49.0], [6.6, 49.0], [6.7, 49.0], [6.8, 49.0], [6.9, 49.0], [7.0, 49.0], [7.1, 49.0], [7.2, 49.0], [7.3, 49.0], [7.4, 49.0], [7.5, 49.0], [7.6, 49.0], [7.7, 50.0], [7.8, 50.0], [7.9, 50.0], [8.0, 50.0], [8.1, 50.0], [8.2, 50.0], [8.3, 50.0], [8.4, 50.0], [8.5, 50.0], [8.6, 50.0], [8.7, 50.0], [8.8, 50.0], [8.9, 50.0], [9.0, 50.0], [9.1, 50.0], [9.2, 51.0], [9.3, 51.0], [9.4, 51.0], [9.5, 51.0], [9.6, 51.0], [9.7, 51.0], [9.8, 51.0], [9.9, 51.0], [10.0, 51.0], [10.1, 51.0], [10.2, 51.0], [10.3, 51.0], [10.4, 51.0], [10.5, 51.0], [10.6, 51.0], [10.7, 51.0], [10.8, 51.0], [10.9, 52.0], [11.0, 52.0], [11.1, 52.0], [11.2, 52.0], [11.3, 52.0], [11.4, 52.0], [11.5, 52.0], [11.6, 52.0], [11.7, 52.0], [11.8, 52.0], [11.9, 52.0], [12.0, 52.0], [12.1, 52.0], [12.2, 52.0], [12.3, 52.0], [12.4, 52.0], [12.5, 53.0], [12.6, 53.0], [12.7, 53.0], [12.8, 53.0], [12.9, 53.0], [13.0, 53.0], [13.1, 53.0], [13.2, 53.0], [13.3, 53.0], [13.4, 53.0], [13.5, 53.0], [13.6, 53.0], [13.7, 53.0], [13.8, 53.0], [13.9, 53.0], [14.0, 53.0], [14.1, 53.0], [14.2, 54.0], [14.3, 54.0], [14.4, 54.0], [14.5, 54.0], [14.6, 54.0], [14.7, 54.0], [14.8, 54.0], [14.9, 54.0], [15.0, 54.0], [15.1, 54.0], [15.2, 54.0], [15.3, 54.0], [15.4, 54.0], [15.5, 55.0], [15.6, 55.0], [15.7, 55.0], [15.8, 55.0], [15.9, 55.0], [16.0, 55.0], [16.1, 55.0], [16.2, 55.0], [16.3, 55.0], [16.4, 55.0], [16.5, 55.0], [16.6, 55.0], [16.7, 55.0], [16.8, 56.0], [16.9, 56.0], [17.0, 56.0], [17.1, 56.0], [17.2, 56.0], [17.3, 56.0], [17.4, 56.0], [17.5, 56.0], [17.6, 56.0], [17.7, 56.0], [17.8, 57.0], [17.9, 57.0], [18.0, 57.0], [18.1, 57.0], [18.2, 57.0], [18.3, 57.0], [18.4, 57.0], [18.5, 58.0], [18.6, 58.0], [18.7, 58.0], [18.8, 58.0], [18.9, 58.0], [19.0, 58.0], [19.1, 58.0], [19.2, 58.0], [19.3, 58.0], [19.4, 58.0], [19.5, 58.0], [19.6, 59.0], [19.7, 59.0], [19.8, 59.0], [19.9, 59.0], [20.0, 59.0], [20.1, 59.0], [20.2, 59.0], [20.3, 60.0], [20.4, 60.0], [20.5, 60.0], [20.6, 60.0], [20.7, 60.0], [20.8, 60.0], [20.9, 60.0], [21.0, 61.0], [21.1, 61.0], [21.2, 61.0], [21.3, 61.0], [21.4, 61.0], [21.5, 61.0], [21.6, 62.0], [21.7, 62.0], [21.8, 62.0], [21.9, 62.0], [22.0, 62.0], [22.1, 62.0], [22.2, 62.0], [22.3, 63.0], [22.4, 63.0], [22.5, 63.0], [22.6, 63.0], [22.7, 63.0], [22.8, 64.0], [22.9, 64.0], [23.0, 64.0], [23.1, 64.0], [23.2, 65.0], [23.3, 65.0], [23.4, 65.0], [23.5, 66.0], [23.6, 66.0], [23.7, 66.0], [23.8, 66.0], [23.9, 66.0], [24.0, 67.0], [24.1, 67.0], [24.2, 67.0], [24.3, 67.0], [24.4, 67.0], [24.5, 68.0], [24.6, 68.0], [24.7, 68.0], [24.8, 68.0], [24.9, 68.0], [25.0, 69.0], [25.1, 69.0], [25.2, 69.0], [25.3, 69.0], [25.4, 69.0], [25.5, 70.0], [25.6, 70.0], [25.7, 70.0], [25.8, 70.0], [25.9, 70.0], [26.0, 71.0], [26.1, 71.0], [26.2, 71.0], [26.3, 71.0], [26.4, 72.0], [26.5, 72.0], [26.6, 72.0], [26.7, 72.0], [26.8, 72.0], [26.9, 72.0], [27.0, 72.0], [27.1, 73.0], [27.2, 73.0], [27.3, 73.0], [27.4, 73.0], [27.5, 73.0], [27.6, 74.0], [27.7, 74.0], [27.8, 74.0], [27.9, 74.0], [28.0, 74.0], [28.1, 75.0], [28.2, 75.0], [28.3, 75.0], [28.4, 75.0], [28.5, 75.0], [28.6, 76.0], [28.7, 76.0], [28.8, 76.0], [28.9, 77.0], [29.0, 77.0], [29.1, 77.0], [29.2, 77.0], [29.3, 78.0], [29.4, 78.0], [29.5, 78.0], [29.6, 79.0], [29.7, 79.0], [29.8, 79.0], [29.9, 79.0], [30.0, 80.0], [30.1, 80.0], [30.2, 81.0], [30.3, 81.0], [30.4, 81.0], [30.5, 81.0], [30.6, 82.0], [30.7, 82.0], [30.8, 82.0], [30.9, 82.0], [31.0, 82.0], [31.1, 83.0], [31.2, 83.0], [31.3, 83.0], [31.4, 84.0], [31.5, 84.0], [31.6, 84.0], [31.7, 84.0], [31.8, 85.0], [31.9, 85.0], [32.0, 85.0], [32.1, 85.0], [32.2, 86.0], [32.3, 86.0], [32.4, 86.0], [32.5, 86.0], [32.6, 87.0], [32.7, 87.0], [32.8, 88.0], [32.9, 88.0], [33.0, 88.0], [33.1, 89.0], [33.2, 89.0], [33.3, 89.0], [33.4, 90.0], [33.5, 90.0], [33.6, 90.0], [33.7, 90.0], [33.8, 90.0], [33.9, 91.0], [34.0, 91.0], [34.1, 91.0], [34.2, 92.0], [34.3, 92.0], [34.4, 92.0], [34.5, 92.0], [34.6, 92.0], [34.7, 93.0], [34.8, 93.0], [34.9, 93.0], [35.0, 93.0], [35.1, 94.0], [35.2, 94.0], [35.3, 94.0], [35.4, 95.0], [35.5, 95.0], [35.6, 96.0], [35.7, 96.0], [35.8, 96.0], [35.9, 96.0], [36.0, 97.0], [36.1, 97.0], [36.2, 98.0], [36.3, 98.0], [36.4, 99.0], [36.5, 99.0], [36.6, 100.0], [36.7, 100.0], [36.8, 101.0], [36.9, 101.0], [37.0, 102.0], [37.1, 102.0], [37.2, 104.0], [37.3, 104.0], [37.4, 104.0], [37.5, 105.0], [37.6, 105.0], [37.7, 106.0], [37.8, 106.0], [37.9, 107.0], [38.0, 107.0], [38.1, 107.0], [38.2, 108.0], [38.3, 108.0], [38.4, 109.0], [38.5, 109.0], [38.6, 110.0], [38.7, 110.0], [38.8, 111.0], [38.9, 111.0], [39.0, 112.0], [39.1, 113.0], [39.2, 113.0], [39.3, 114.0], [39.4, 114.0], [39.5, 115.0], [39.6, 116.0], [39.7, 116.0], [39.8, 117.0], [39.9, 117.0], [40.0, 118.0], [40.1, 118.0], [40.2, 119.0], [40.3, 120.0], [40.4, 121.0], [40.5, 121.0], [40.6, 122.0], [40.7, 122.0], [40.8, 123.0], [40.9, 123.0], [41.0, 124.0], [41.1, 124.0], [41.2, 125.0], [41.3, 126.0], [41.4, 126.0], [41.5, 127.0], [41.6, 128.0], [41.7, 129.0], [41.8, 130.0], [41.9, 130.0], [42.0, 131.0], [42.1, 133.0], [42.2, 133.0], [42.3, 134.0], [42.4, 135.0], [42.5, 135.0], [42.6, 136.0], [42.7, 137.0], [42.8, 137.0], [42.9, 139.0], [43.0, 139.0], [43.1, 140.0], [43.2, 141.0], [43.3, 142.0], [43.4, 142.0], [43.5, 143.0], [43.6, 144.0], [43.7, 144.0], [43.8, 145.0], [43.9, 147.0], [44.0, 148.0], [44.1, 149.0], [44.2, 149.0], [44.3, 151.0], [44.4, 152.0], [44.5, 152.0], [44.6, 153.0], [44.7, 154.0], [44.8, 154.0], [44.9, 155.0], [45.0, 155.0], [45.1, 157.0], [45.2, 158.0], [45.3, 158.0], [45.4, 159.0], [45.5, 160.0], [45.6, 161.0], [45.7, 163.0], [45.8, 164.0], [45.9, 166.0], [46.0, 167.0], [46.1, 168.0], [46.2, 169.0], [46.3, 169.0], [46.4, 170.0], [46.5, 171.0], [46.6, 172.0], [46.7, 173.0], [46.8, 174.0], [46.9, 174.0], [47.0, 176.0], [47.1, 177.0], [47.2, 178.0], [47.3, 179.0], [47.4, 180.0], [47.5, 180.0], [47.6, 181.0], [47.7, 182.0], [47.8, 183.0], [47.9, 184.0], [48.0, 185.0], [48.1, 186.0], [48.2, 186.0], [48.3, 187.0], [48.4, 188.0], [48.5, 189.0], [48.6, 189.0], [48.7, 190.0], [48.8, 191.0], [48.9, 192.0], [49.0, 193.0], [49.1, 194.0], [49.2, 194.0], [49.3, 197.0], [49.4, 197.0], [49.5, 198.0], [49.6, 198.0], [49.7, 199.0], [49.8, 200.0], [49.9, 201.0], [50.0, 202.0], [50.1, 203.0], [50.2, 205.0], [50.3, 206.0], [50.4, 206.0], [50.5, 206.0], [50.6, 207.0], [50.7, 208.0], [50.8, 209.0], [50.9, 210.0], [51.0, 211.0], [51.1, 211.0], [51.2, 212.0], [51.3, 213.0], [51.4, 214.0], [51.5, 214.0], [51.6, 216.0], [51.7, 216.0], [51.8, 217.0], [51.9, 218.0], [52.0, 219.0], [52.1, 220.0], [52.2, 220.0], [52.3, 221.0], [52.4, 221.0], [52.5, 223.0], [52.6, 223.0], [52.7, 224.0], [52.8, 224.0], [52.9, 225.0], [53.0, 225.0], [53.1, 226.0], [53.2, 227.0], [53.3, 228.0], [53.4, 228.0], [53.5, 229.0], [53.6, 230.0], [53.7, 230.0], [53.8, 231.0], [53.9, 232.0], [54.0, 233.0], [54.1, 233.0], [54.2, 234.0], [54.3, 236.0], [54.4, 236.0], [54.5, 237.0], [54.6, 237.0], [54.7, 239.0], [54.8, 240.0], [54.9, 240.0], [55.0, 242.0], [55.1, 243.0], [55.2, 243.0], [55.3, 244.0], [55.4, 245.0], [55.5, 246.0], [55.6, 247.0], [55.7, 248.0], [55.8, 248.0], [55.9, 250.0], [56.0, 250.0], [56.1, 252.0], [56.2, 253.0], [56.3, 253.0], [56.4, 254.0], [56.5, 255.0], [56.6, 256.0], [56.7, 257.0], [56.8, 258.0], [56.9, 258.0], [57.0, 259.0], [57.1, 259.0], [57.2, 260.0], [57.3, 260.0], [57.4, 261.0], [57.5, 262.0], [57.6, 264.0], [57.7, 265.0], [57.8, 266.0], [57.9, 267.0], [58.0, 268.0], [58.1, 269.0], [58.2, 269.0], [58.3, 270.0], [58.4, 271.0], [58.5, 272.0], [58.6, 273.0], [58.7, 273.0], [58.8, 275.0], [58.9, 276.0], [59.0, 277.0], [59.1, 278.0], [59.2, 279.0], [59.3, 280.0], [59.4, 281.0], [59.5, 282.0], [59.6, 283.0], [59.7, 285.0], [59.8, 285.0], [59.9, 286.0], [60.0, 287.0], [60.1, 288.0], [60.2, 289.0], [60.3, 290.0], [60.4, 290.0], [60.5, 291.0], [60.6, 293.0], [60.7, 295.0], [60.8, 295.0], [60.9, 297.0], [61.0, 297.0], [61.1, 299.0], [61.2, 300.0], [61.3, 301.0], [61.4, 301.0], [61.5, 303.0], [61.6, 303.0], [61.7, 304.0], [61.8, 305.0], [61.9, 306.0], [62.0, 307.0], [62.1, 308.0], [62.2, 309.0], [62.3, 310.0], [62.4, 311.0], [62.5, 312.0], [62.6, 313.0], [62.7, 315.0], [62.8, 316.0], [62.9, 318.0], [63.0, 320.0], [63.1, 322.0], [63.2, 323.0], [63.3, 324.0], [63.4, 325.0], [63.5, 326.0], [63.6, 327.0], [63.7, 328.0], [63.8, 329.0], [63.9, 330.0], [64.0, 332.0], [64.1, 332.0], [64.2, 334.0], [64.3, 335.0], [64.4, 336.0], [64.5, 337.0], [64.6, 337.0], [64.7, 338.0], [64.8, 339.0], [64.9, 340.0], [65.0, 342.0], [65.1, 342.0], [65.2, 343.0], [65.3, 344.0], [65.4, 345.0], [65.5, 346.0], [65.6, 347.0], [65.7, 348.0], [65.8, 349.0], [65.9, 350.0], [66.0, 352.0], [66.1, 354.0], [66.2, 355.0], [66.3, 356.0], [66.4, 356.0], [66.5, 358.0], [66.6, 359.0], [66.7, 360.0], [66.8, 361.0], [66.9, 362.0], [67.0, 363.0], [67.1, 364.0], [67.2, 366.0], [67.3, 367.0], [67.4, 367.0], [67.5, 368.0], [67.6, 369.0], [67.7, 371.0], [67.8, 373.0], [67.9, 374.0], [68.0, 377.0], [68.1, 380.0], [68.2, 381.0], [68.3, 382.0], [68.4, 383.0], [68.5, 385.0], [68.6, 387.0], [68.7, 388.0], [68.8, 391.0], [68.9, 393.0], [69.0, 395.0], [69.1, 396.0], [69.2, 397.0], [69.3, 398.0], [69.4, 400.0], [69.5, 402.0], [69.6, 404.0], [69.7, 405.0], [69.8, 406.0], [69.9, 408.0], [70.0, 410.0], [70.1, 411.0], [70.2, 411.0], [70.3, 412.0], [70.4, 414.0], [70.5, 414.0], [70.6, 415.0], [70.7, 416.0], [70.8, 418.0], [70.9, 420.0], [71.0, 422.0], [71.1, 423.0], [71.2, 425.0], [71.3, 426.0], [71.4, 428.0], [71.5, 431.0], [71.6, 431.0], [71.7, 433.0], [71.8, 434.0], [71.9, 435.0], [72.0, 437.0], [72.1, 438.0], [72.2, 440.0], [72.3, 441.0], [72.4, 444.0], [72.5, 445.0], [72.6, 446.0], [72.7, 449.0], [72.8, 450.0], [72.9, 453.0], [73.0, 455.0], [73.1, 456.0], [73.2, 457.0], [73.3, 459.0], [73.4, 460.0], [73.5, 462.0], [73.6, 463.0], [73.7, 465.0], [73.8, 466.0], [73.9, 468.0], [74.0, 470.0], [74.1, 473.0], [74.2, 475.0], [74.3, 476.0], [74.4, 477.0], [74.5, 480.0], [74.6, 481.0], [74.7, 482.0], [74.8, 483.0], [74.9, 487.0], [75.0, 487.0], [75.1, 489.0], [75.2, 491.0], [75.3, 493.0], [75.4, 495.0], [75.5, 497.0], [75.6, 499.0], [75.7, 500.0], [75.8, 503.0], [75.9, 504.0], [76.0, 506.0], [76.1, 508.0], [76.2, 510.0], [76.3, 511.0], [76.4, 515.0], [76.5, 519.0], [76.6, 521.0], [76.7, 525.0], [76.8, 527.0], [76.9, 530.0], [77.0, 531.0], [77.1, 533.0], [77.2, 537.0], [77.3, 540.0], [77.4, 540.0], [77.5, 543.0], [77.6, 545.0], [77.7, 546.0], [77.8, 547.0], [77.9, 550.0], [78.0, 551.0], [78.1, 553.0], [78.2, 557.0], [78.3, 559.0], [78.4, 564.0], [78.5, 566.0], [78.6, 567.0], [78.7, 569.0], [78.8, 571.0], [78.9, 574.0], [79.0, 575.0], [79.1, 576.0], [79.2, 578.0], [79.3, 579.0], [79.4, 582.0], [79.5, 583.0], [79.6, 584.0], [79.7, 586.0], [79.8, 589.0], [79.9, 591.0], [80.0, 593.0], [80.1, 595.0], [80.2, 599.0], [80.3, 601.0], [80.4, 603.0], [80.5, 606.0], [80.6, 608.0], [80.7, 610.0], [80.8, 612.0], [80.9, 614.0], [81.0, 615.0], [81.1, 617.0], [81.2, 618.0], [81.3, 621.0], [81.4, 622.0], [81.5, 627.0], [81.6, 628.0], [81.7, 631.0], [81.8, 634.0], [81.9, 635.0], [82.0, 637.0], [82.1, 640.0], [82.2, 645.0], [82.3, 648.0], [82.4, 650.0], [82.5, 654.0], [82.6, 657.0], [82.7, 658.0], [82.8, 660.0], [82.9, 662.0], [83.0, 663.0], [83.1, 665.0], [83.2, 667.0], [83.3, 671.0], [83.4, 674.0], [83.5, 676.0], [83.6, 680.0], [83.7, 683.0], [83.8, 687.0], [83.9, 688.0], [84.0, 691.0], [84.1, 694.0], [84.2, 696.0], [84.3, 698.0], [84.4, 702.0], [84.5, 708.0], [84.6, 712.0], [84.7, 714.0], [84.8, 719.0], [84.9, 724.0], [85.0, 726.0], [85.1, 728.0], [85.2, 733.0], [85.3, 735.0], [85.4, 739.0], [85.5, 743.0], [85.6, 745.0], [85.7, 748.0], [85.8, 752.0], [85.9, 755.0], [86.0, 759.0], [86.1, 761.0], [86.2, 765.0], [86.3, 769.0], [86.4, 772.0], [86.5, 775.0], [86.6, 778.0], [86.7, 783.0], [86.8, 785.0], [86.9, 791.0], [87.0, 793.0], [87.1, 801.0], [87.2, 805.0], [87.3, 807.0], [87.4, 812.0], [87.5, 815.0], [87.6, 818.0], [87.7, 821.0], [87.8, 828.0], [87.9, 832.0], [88.0, 835.0], [88.1, 839.0], [88.2, 845.0], [88.3, 849.0], [88.4, 852.0], [88.5, 854.0], [88.6, 865.0], [88.7, 867.0], [88.8, 872.0], [88.9, 877.0], [89.0, 881.0], [89.1, 884.0], [89.2, 887.0], [89.3, 894.0], [89.4, 904.0], [89.5, 908.0], [89.6, 910.0], [89.7, 914.0], [89.8, 917.0], [89.9, 922.0], [90.0, 927.0], [90.1, 931.0], [90.2, 934.0], [90.3, 941.0], [90.4, 945.0], [90.5, 948.0], [90.6, 952.0], [90.7, 955.0], [90.8, 957.0], [90.9, 966.0], [91.0, 974.0], [91.1, 980.0], [91.2, 988.0], [91.3, 992.0], [91.4, 996.0], [91.5, 1002.0], [91.6, 1009.0], [91.7, 1016.0], [91.8, 1017.0], [91.9, 1031.0], [92.0, 1035.0], [92.1, 1041.0], [92.2, 1052.0], [92.3, 1058.0], [92.4, 1066.0], [92.5, 1075.0], [92.6, 1084.0], [92.7, 1095.0], [92.8, 1106.0], [92.9, 1112.0], [93.0, 1116.0], [93.1, 1121.0], [93.2, 1134.0], [93.3, 1141.0], [93.4, 1144.0], [93.5, 1154.0], [93.6, 1164.0], [93.7, 1181.0], [93.8, 1187.0], [93.9, 1198.0], [94.0, 1201.0], [94.1, 1211.0], [94.2, 1221.0], [94.3, 1228.0], [94.4, 1243.0], [94.5, 1261.0], [94.6, 1266.0], [94.7, 1278.0], [94.8, 1283.0], [94.9, 1297.0], [95.0, 1312.0], [95.1, 1320.0], [95.2, 1330.0], [95.3, 1347.0], [95.4, 1358.0], [95.5, 1369.0], [95.6, 1378.0], [95.7, 1384.0], [95.8, 1401.0], [95.9, 1419.0], [96.0, 1429.0], [96.1, 1446.0], [96.2, 1477.0], [96.3, 1498.0], [96.4, 1534.0], [96.5, 1565.0], [96.6, 1579.0], [96.7, 1605.0], [96.8, 1613.0], [96.9, 1633.0], [97.0, 1668.0], [97.1, 1686.0], [97.2, 1706.0], [97.3, 1724.0], [97.4, 1767.0], [97.5, 1807.0], [97.6, 1834.0], [97.7, 1858.0], [97.8, 1914.0], [97.9, 1933.0], [98.0, 1964.0], [98.1, 1985.0], [98.2, 2006.0], [98.3, 2038.0], [98.4, 2084.0], [98.5, 2111.0], [98.6, 2132.0], [98.7, 2185.0], [98.8, 2236.0], [98.9, 2324.0], [99.0, 2362.0], [99.1, 2371.0], [99.2, 2429.0], [99.3, 2476.0], [99.4, 2530.0], [99.5, 2674.0], [99.6, 2770.0], [99.7, 2916.0], [99.8, 3132.0], [99.9, 3331.0], [100.0, 3781.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 1921.0, "series": [{"data": [[0.0, 1921.0], [600.0, 214.0], [700.0, 145.0], [800.0, 121.0], [900.0, 109.0], [1000.0, 66.0], [1100.0, 68.0], [1200.0, 50.0], [1300.0, 44.0], [1400.0, 28.0], [1500.0, 18.0], [100.0, 697.0], [1600.0, 27.0], [1700.0, 16.0], [1800.0, 17.0], [1900.0, 20.0], [2000.0, 15.0], [2100.0, 13.0], [2300.0, 15.0], [2200.0, 8.0], [2400.0, 10.0], [2500.0, 7.0], [2600.0, 3.0], [2700.0, 5.0], [2800.0, 4.0], [2900.0, 2.0], [3000.0, 3.0], [3100.0, 3.0], [200.0, 601.0], [3300.0, 2.0], [3200.0, 2.0], [3400.0, 1.0], [3500.0, 1.0], [3700.0, 1.0], [3600.0, 1.0], [300.0, 431.0], [400.0, 332.0], [500.0, 241.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3700.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 193.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 3984.0, "series": [{"data": [[0.0, 3984.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1085.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 193.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.771929824561406, "minX": 1.60284066E12, "maxY": 10.0, "series": [{"data": [[1.6028409E12, 9.880108991825612], [1.60284072E12, 10.0], [1.60284078E12, 10.0], [1.60284066E12, 9.771929824561406], [1.60284084E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6028409E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 372.3567619047616, "minX": 1.0, "maxY": 2276.0, "series": [{"data": [[4.0, 623.5], [8.0, 758.0], [2.0, 1470.0], [1.0, 2276.0], [9.0, 674.0], [10.0, 372.3567619047616], [5.0, 936.0], [6.0, 1660.5], [3.0, 1719.0], [7.0, 2236.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.98916761687572, 374.43329532497194]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 474.26666666666665, "minX": 1.60284066E12, "maxY": 1430858.1166666667, "series": [{"data": [[1.6028409E12, 258682.51666666666], [1.60284072E12, 1407383.3333333333], [1.60284078E12, 1099221.6833333333], [1.60284066E12, 43441.9], [1.60284084E12, 1430858.1166666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6028409E12, 3366.75], [1.60284072E12, 12094.65], [1.60284078E12, 17249.316666666666], [1.60284066E12, 474.26666666666665], [1.60284084E12, 13533.766666666666]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6028409E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 303.509109311741, "minX": 1.60284066E12, "maxY": 439.7280766396462, "series": [{"data": [[1.6028409E12, 408.64577656675743], [1.60284072E12, 439.7280766396462], [1.60284078E12, 303.509109311741], [1.60284066E12, 409.68421052631584], [1.60284084E12, 399.00199335548234]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6028409E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 300.8046558704451, "minX": 1.60284066E12, "maxY": 433.92851879145115, "series": [{"data": [[1.6028409E12, 404.08446866485036], [1.60284072E12, 433.92851879145115], [1.60284078E12, 300.8046558704451], [1.60284066E12, 405.3684210526315], [1.60284084E12, 393.4777408637876]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6028409E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.5920265780730903, "minX": 1.60284066E12, "maxY": 2.6842105263157894, "series": [{"data": [[1.6028409E12, 0.6430517711171659], [1.60284072E12, 0.7715549005158437], [1.60284078E12, 0.6219635627530374], [1.60284066E12, 2.6842105263157894], [1.60284084E12, 0.5920265780730903]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6028409E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 34.0, "minX": 1.60284066E12, "maxY": 3781.0, "series": [{"data": [[1.6028409E12, 3331.0], [1.60284072E12, 3533.0], [1.60284078E12, 3781.0], [1.60284066E12, 1045.0], [1.60284084E12, 3616.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6028409E12, 39.0], [1.60284072E12, 43.22199967622757], [1.60284078E12, 43.0], [1.60284066E12, 46.0], [1.60284084E12, 40.55399964094162]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6028409E12, 39.0], [1.60284072E12, 44.0], [1.60284078E12, 43.0], [1.60284066E12, 46.0], [1.60284084E12, 41.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6028409E12, 39.0], [1.60284072E12, 43.90099983811378], [1.60284078E12, 43.0], [1.60284066E12, 46.0], [1.60284084E12, 41.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.6028409E12, 34.0], [1.60284072E12, 35.0], [1.60284078E12, 39.0], [1.60284066E12, 46.0], [1.60284084E12, 36.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6028409E12, 166.0], [1.60284072E12, 268.0], [1.60284078E12, 136.5], [1.60284066E12, 324.0], [1.60284084E12, 240.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6028409E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 62.0, "minX": 1.0, "maxY": 1929.5, "series": [{"data": [[2.0, 1594.5], [4.0, 1068.0], [6.0, 1039.5], [7.0, 1142.0], [8.0, 553.0], [9.0, 709.5], [10.0, 810.0], [11.0, 634.0], [12.0, 724.0], [13.0, 482.0], [14.0, 602.0], [15.0, 483.0], [16.0, 563.0], [17.0, 452.0], [18.0, 458.5], [19.0, 427.0], [20.0, 408.0], [21.0, 321.5], [22.0, 415.5], [23.0, 260.0], [24.0, 250.0], [25.0, 312.0], [26.0, 428.0], [27.0, 180.0], [28.0, 233.5], [29.0, 212.0], [30.0, 178.5], [31.0, 277.5], [33.0, 249.0], [32.0, 136.5], [35.0, 71.0], [34.0, 107.0], [37.0, 218.0], [36.0, 250.5], [38.0, 159.0], [39.0, 108.0], [40.0, 198.0], [41.0, 71.0], [43.0, 100.0], [42.0, 95.0], [44.0, 72.0], [45.0, 152.0], [47.0, 81.0], [48.0, 62.0], [49.0, 114.5], [50.0, 65.0], [53.0, 135.0], [57.0, 119.0], [56.0, 87.0], [58.0, 105.5], [59.0, 128.0], [60.0, 72.5], [61.0, 112.0], [62.0, 85.5], [67.0, 129.0], [64.0, 145.0], [68.0, 91.5], [71.0, 84.5], [74.0, 117.0], [78.0, 83.5], [82.0, 76.0], [95.0, 64.0], [1.0, 1929.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 95.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 62.0, "minX": 1.0, "maxY": 1928.0, "series": [{"data": [[2.0, 1594.5], [4.0, 1065.5], [6.0, 1039.0], [7.0, 1093.0], [8.0, 553.0], [9.0, 708.0], [10.0, 809.0], [11.0, 625.0], [12.0, 723.5], [13.0, 481.0], [14.0, 590.0], [15.0, 481.5], [16.0, 554.5], [17.0, 443.0], [18.0, 458.5], [19.0, 409.0], [20.0, 397.5], [21.0, 320.0], [22.0, 415.0], [23.0, 259.5], [24.0, 250.0], [25.0, 311.0], [26.0, 411.0], [27.0, 180.0], [28.0, 233.0], [29.0, 211.0], [30.0, 178.5], [31.0, 277.5], [33.0, 249.0], [32.0, 136.5], [35.0, 71.0], [34.0, 107.0], [37.0, 218.0], [36.0, 250.5], [38.0, 159.0], [39.0, 108.0], [40.0, 198.0], [41.0, 70.0], [43.0, 99.0], [42.0, 95.0], [44.0, 72.0], [45.0, 152.0], [47.0, 81.0], [48.0, 62.0], [49.0, 114.0], [50.0, 65.0], [53.0, 135.0], [57.0, 119.0], [56.0, 87.0], [58.0, 105.5], [59.0, 128.0], [60.0, 72.5], [61.0, 112.0], [62.0, 85.5], [67.0, 129.0], [64.0, 145.0], [68.0, 90.5], [71.0, 84.0], [74.0, 117.0], [78.0, 83.5], [82.0, 76.0], [95.0, 64.0], [1.0, 1928.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 95.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1.1166666666666667, "minX": 1.60284066E12, "maxY": 32.93333333333333, "series": [{"data": [[1.6028409E12, 5.95], [1.60284072E12, 22.616666666666667], [1.60284078E12, 32.93333333333333], [1.60284066E12, 1.1166666666666667], [1.60284084E12, 25.083333333333332]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6028409E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.95, "minX": 1.60284066E12, "maxY": 32.93333333333333, "series": [{"data": [[1.6028409E12, 6.116666666666666], [1.60284072E12, 22.616666666666667], [1.60284078E12, 32.93333333333333], [1.60284066E12, 0.95], [1.60284084E12, 25.083333333333332]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6028409E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.95, "minX": 1.60284066E12, "maxY": 32.93333333333333, "series": [{"data": [[1.6028409E12, 6.116666666666666], [1.60284072E12, 22.616666666666667], [1.60284078E12, 32.93333333333333], [1.60284066E12, 0.95], [1.60284084E12, 25.083333333333332]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6028409E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.95, "minX": 1.60284066E12, "maxY": 32.93333333333333, "series": [{"data": [[1.6028409E12, 6.116666666666666], [1.60284072E12, 22.616666666666667], [1.60284078E12, 32.93333333333333], [1.60284066E12, 0.95], [1.60284084E12, 25.083333333333332]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6028409E12, "title": "Total Transactions Per Second"}},
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

