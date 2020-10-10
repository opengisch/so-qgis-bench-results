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
        data: {"result": {"minY": 28.0, "minX": 0.0, "maxY": 3528.0, "series": [{"data": [[0.0, 28.0], [0.1, 29.0], [0.2, 30.0], [0.3, 30.0], [0.4, 31.0], [0.5, 32.0], [0.6, 32.0], [0.7, 32.0], [0.8, 33.0], [0.9, 33.0], [1.0, 33.0], [1.1, 33.0], [1.2, 33.0], [1.3, 33.0], [1.4, 34.0], [1.5, 34.0], [1.6, 34.0], [1.7, 34.0], [1.8, 34.0], [1.9, 34.0], [2.0, 34.0], [2.1, 34.0], [2.2, 34.0], [2.3, 35.0], [2.4, 35.0], [2.5, 35.0], [2.6, 35.0], [2.7, 35.0], [2.8, 35.0], [2.9, 35.0], [3.0, 35.0], [3.1, 35.0], [3.2, 35.0], [3.3, 35.0], [3.4, 35.0], [3.5, 35.0], [3.6, 35.0], [3.7, 35.0], [3.8, 36.0], [3.9, 36.0], [4.0, 36.0], [4.1, 36.0], [4.2, 36.0], [4.3, 36.0], [4.4, 36.0], [4.5, 36.0], [4.6, 36.0], [4.7, 36.0], [4.8, 36.0], [4.9, 36.0], [5.0, 36.0], [5.1, 36.0], [5.2, 37.0], [5.3, 37.0], [5.4, 37.0], [5.5, 37.0], [5.6, 37.0], [5.7, 37.0], [5.8, 37.0], [5.9, 37.0], [6.0, 37.0], [6.1, 37.0], [6.2, 37.0], [6.3, 37.0], [6.4, 37.0], [6.5, 37.0], [6.6, 37.0], [6.7, 38.0], [6.8, 38.0], [6.9, 38.0], [7.0, 38.0], [7.1, 38.0], [7.2, 38.0], [7.3, 38.0], [7.4, 38.0], [7.5, 38.0], [7.6, 38.0], [7.7, 38.0], [7.8, 38.0], [7.9, 38.0], [8.0, 38.0], [8.1, 38.0], [8.2, 38.0], [8.3, 39.0], [8.4, 39.0], [8.5, 39.0], [8.6, 39.0], [8.7, 39.0], [8.8, 39.0], [8.9, 39.0], [9.0, 39.0], [9.1, 39.0], [9.2, 39.0], [9.3, 39.0], [9.4, 39.0], [9.5, 39.0], [9.6, 39.0], [9.7, 39.0], [9.8, 39.0], [9.9, 39.0], [10.0, 39.0], [10.1, 39.0], [10.2, 40.0], [10.3, 40.0], [10.4, 40.0], [10.5, 40.0], [10.6, 40.0], [10.7, 40.0], [10.8, 40.0], [10.9, 40.0], [11.0, 40.0], [11.1, 40.0], [11.2, 40.0], [11.3, 40.0], [11.4, 40.0], [11.5, 40.0], [11.6, 40.0], [11.7, 41.0], [11.8, 41.0], [11.9, 41.0], [12.0, 41.0], [12.1, 41.0], [12.2, 41.0], [12.3, 41.0], [12.4, 41.0], [12.5, 41.0], [12.6, 41.0], [12.7, 41.0], [12.8, 41.0], [12.9, 41.0], [13.0, 42.0], [13.1, 42.0], [13.2, 42.0], [13.3, 42.0], [13.4, 42.0], [13.5, 42.0], [13.6, 42.0], [13.7, 42.0], [13.8, 42.0], [13.9, 42.0], [14.0, 42.0], [14.1, 43.0], [14.2, 43.0], [14.3, 43.0], [14.4, 43.0], [14.5, 43.0], [14.6, 43.0], [14.7, 43.0], [14.8, 43.0], [14.9, 43.0], [15.0, 44.0], [15.1, 44.0], [15.2, 44.0], [15.3, 44.0], [15.4, 44.0], [15.5, 44.0], [15.6, 45.0], [15.7, 45.0], [15.8, 45.0], [15.9, 45.0], [16.0, 45.0], [16.1, 46.0], [16.2, 46.0], [16.3, 46.0], [16.4, 47.0], [16.5, 47.0], [16.6, 48.0], [16.7, 48.0], [16.8, 48.0], [16.9, 49.0], [17.0, 50.0], [17.1, 50.0], [17.2, 51.0], [17.3, 51.0], [17.4, 52.0], [17.5, 52.0], [17.6, 52.0], [17.7, 53.0], [17.8, 54.0], [17.9, 55.0], [18.0, 55.0], [18.1, 56.0], [18.2, 56.0], [18.3, 56.0], [18.4, 57.0], [18.5, 57.0], [18.6, 58.0], [18.7, 58.0], [18.8, 59.0], [18.9, 59.0], [19.0, 60.0], [19.1, 60.0], [19.2, 60.0], [19.3, 61.0], [19.4, 61.0], [19.5, 62.0], [19.6, 63.0], [19.7, 63.0], [19.8, 64.0], [19.9, 64.0], [20.0, 65.0], [20.1, 65.0], [20.2, 65.0], [20.3, 66.0], [20.4, 66.0], [20.5, 66.0], [20.6, 66.0], [20.7, 66.0], [20.8, 67.0], [20.9, 67.0], [21.0, 67.0], [21.1, 67.0], [21.2, 67.0], [21.3, 67.0], [21.4, 67.0], [21.5, 68.0], [21.6, 68.0], [21.7, 68.0], [21.8, 68.0], [21.9, 68.0], [22.0, 68.0], [22.1, 69.0], [22.2, 69.0], [22.3, 69.0], [22.4, 69.0], [22.5, 69.0], [22.6, 69.0], [22.7, 69.0], [22.8, 69.0], [22.9, 69.0], [23.0, 69.0], [23.1, 70.0], [23.2, 70.0], [23.3, 70.0], [23.4, 70.0], [23.5, 70.0], [23.6, 70.0], [23.7, 70.0], [23.8, 70.0], [23.9, 70.0], [24.0, 70.0], [24.1, 70.0], [24.2, 71.0], [24.3, 71.0], [24.4, 71.0], [24.5, 71.0], [24.6, 71.0], [24.7, 71.0], [24.8, 71.0], [24.9, 71.0], [25.0, 71.0], [25.1, 71.0], [25.2, 71.0], [25.3, 72.0], [25.4, 72.0], [25.5, 72.0], [25.6, 72.0], [25.7, 72.0], [25.8, 72.0], [25.9, 72.0], [26.0, 72.0], [26.1, 72.0], [26.2, 72.0], [26.3, 72.0], [26.4, 72.0], [26.5, 72.0], [26.6, 72.0], [26.7, 73.0], [26.8, 73.0], [26.9, 73.0], [27.0, 73.0], [27.1, 73.0], [27.2, 73.0], [27.3, 73.0], [27.4, 73.0], [27.5, 73.0], [27.6, 73.0], [27.7, 73.0], [27.8, 73.0], [27.9, 73.0], [28.0, 74.0], [28.1, 74.0], [28.2, 74.0], [28.3, 74.0], [28.4, 74.0], [28.5, 74.0], [28.6, 74.0], [28.7, 74.0], [28.8, 74.0], [28.9, 74.0], [29.0, 74.0], [29.1, 74.0], [29.2, 75.0], [29.3, 75.0], [29.4, 75.0], [29.5, 75.0], [29.6, 75.0], [29.7, 75.0], [29.8, 75.0], [29.9, 75.0], [30.0, 75.0], [30.1, 75.0], [30.2, 75.0], [30.3, 75.0], [30.4, 75.0], [30.5, 75.0], [30.6, 76.0], [30.7, 76.0], [30.8, 76.0], [30.9, 76.0], [31.0, 76.0], [31.1, 76.0], [31.2, 76.0], [31.3, 76.0], [31.4, 76.0], [31.5, 76.0], [31.6, 76.0], [31.7, 76.0], [31.8, 77.0], [31.9, 77.0], [32.0, 77.0], [32.1, 77.0], [32.2, 77.0], [32.3, 77.0], [32.4, 77.0], [32.5, 78.0], [32.6, 78.0], [32.7, 78.0], [32.8, 78.0], [32.9, 78.0], [33.0, 78.0], [33.1, 78.0], [33.2, 78.0], [33.3, 78.0], [33.4, 79.0], [33.5, 79.0], [33.6, 79.0], [33.7, 79.0], [33.8, 79.0], [33.9, 79.0], [34.0, 79.0], [34.1, 80.0], [34.2, 80.0], [34.3, 80.0], [34.4, 80.0], [34.5, 80.0], [34.6, 80.0], [34.7, 80.0], [34.8, 81.0], [34.9, 81.0], [35.0, 81.0], [35.1, 81.0], [35.2, 81.0], [35.3, 81.0], [35.4, 82.0], [35.5, 82.0], [35.6, 82.0], [35.7, 82.0], [35.8, 82.0], [35.9, 82.0], [36.0, 83.0], [36.1, 83.0], [36.2, 83.0], [36.3, 83.0], [36.4, 84.0], [36.5, 84.0], [36.6, 84.0], [36.7, 84.0], [36.8, 85.0], [36.9, 85.0], [37.0, 85.0], [37.1, 86.0], [37.2, 86.0], [37.3, 86.0], [37.4, 87.0], [37.5, 87.0], [37.6, 87.0], [37.7, 87.0], [37.8, 88.0], [37.9, 88.0], [38.0, 89.0], [38.1, 89.0], [38.2, 90.0], [38.3, 90.0], [38.4, 91.0], [38.5, 91.0], [38.6, 92.0], [38.7, 92.0], [38.8, 93.0], [38.9, 93.0], [39.0, 94.0], [39.1, 94.0], [39.2, 95.0], [39.3, 95.0], [39.4, 96.0], [39.5, 97.0], [39.6, 97.0], [39.7, 98.0], [39.8, 98.0], [39.9, 99.0], [40.0, 100.0], [40.1, 101.0], [40.2, 101.0], [40.3, 101.0], [40.4, 102.0], [40.5, 102.0], [40.6, 103.0], [40.7, 105.0], [40.8, 106.0], [40.9, 107.0], [41.0, 108.0], [41.1, 108.0], [41.2, 109.0], [41.3, 109.0], [41.4, 110.0], [41.5, 111.0], [41.6, 111.0], [41.7, 112.0], [41.8, 112.0], [41.9, 113.0], [42.0, 113.0], [42.1, 114.0], [42.2, 114.0], [42.3, 115.0], [42.4, 116.0], [42.5, 116.0], [42.6, 117.0], [42.7, 117.0], [42.8, 118.0], [42.9, 119.0], [43.0, 120.0], [43.1, 121.0], [43.2, 122.0], [43.3, 123.0], [43.4, 124.0], [43.5, 125.0], [43.6, 126.0], [43.7, 127.0], [43.8, 129.0], [43.9, 130.0], [44.0, 131.0], [44.1, 132.0], [44.2, 133.0], [44.3, 134.0], [44.4, 135.0], [44.5, 136.0], [44.6, 137.0], [44.7, 138.0], [44.8, 139.0], [44.9, 139.0], [45.0, 140.0], [45.1, 141.0], [45.2, 142.0], [45.3, 144.0], [45.4, 145.0], [45.5, 145.0], [45.6, 146.0], [45.7, 147.0], [45.8, 148.0], [45.9, 148.0], [46.0, 149.0], [46.1, 150.0], [46.2, 151.0], [46.3, 153.0], [46.4, 153.0], [46.5, 154.0], [46.6, 154.0], [46.7, 155.0], [46.8, 156.0], [46.9, 157.0], [47.0, 157.0], [47.1, 158.0], [47.2, 159.0], [47.3, 160.0], [47.4, 160.0], [47.5, 161.0], [47.6, 162.0], [47.7, 162.0], [47.8, 163.0], [47.9, 166.0], [48.0, 166.0], [48.1, 167.0], [48.2, 169.0], [48.3, 169.0], [48.4, 170.0], [48.5, 171.0], [48.6, 171.0], [48.7, 172.0], [48.8, 173.0], [48.9, 174.0], [49.0, 175.0], [49.1, 175.0], [49.2, 177.0], [49.3, 178.0], [49.4, 179.0], [49.5, 180.0], [49.6, 181.0], [49.7, 183.0], [49.8, 183.0], [49.9, 183.0], [50.0, 184.0], [50.1, 185.0], [50.2, 186.0], [50.3, 187.0], [50.4, 189.0], [50.5, 190.0], [50.6, 191.0], [50.7, 192.0], [50.8, 193.0], [50.9, 194.0], [51.0, 195.0], [51.1, 195.0], [51.2, 196.0], [51.3, 198.0], [51.4, 199.0], [51.5, 200.0], [51.6, 201.0], [51.7, 202.0], [51.8, 203.0], [51.9, 205.0], [52.0, 207.0], [52.1, 208.0], [52.2, 209.0], [52.3, 210.0], [52.4, 210.0], [52.5, 211.0], [52.6, 212.0], [52.7, 214.0], [52.8, 215.0], [52.9, 216.0], [53.0, 217.0], [53.1, 218.0], [53.2, 218.0], [53.3, 219.0], [53.4, 220.0], [53.5, 221.0], [53.6, 221.0], [53.7, 223.0], [53.8, 224.0], [53.9, 224.0], [54.0, 225.0], [54.1, 227.0], [54.2, 227.0], [54.3, 228.0], [54.4, 229.0], [54.5, 230.0], [54.6, 231.0], [54.7, 234.0], [54.8, 235.0], [54.9, 236.0], [55.0, 237.0], [55.1, 238.0], [55.2, 239.0], [55.3, 240.0], [55.4, 240.0], [55.5, 241.0], [55.6, 242.0], [55.7, 243.0], [55.8, 244.0], [55.9, 245.0], [56.0, 247.0], [56.1, 248.0], [56.2, 249.0], [56.3, 250.0], [56.4, 251.0], [56.5, 252.0], [56.6, 252.0], [56.7, 254.0], [56.8, 254.0], [56.9, 255.0], [57.0, 256.0], [57.1, 257.0], [57.2, 258.0], [57.3, 258.0], [57.4, 259.0], [57.5, 260.0], [57.6, 262.0], [57.7, 263.0], [57.8, 265.0], [57.9, 265.0], [58.0, 266.0], [58.1, 267.0], [58.2, 269.0], [58.3, 270.0], [58.4, 271.0], [58.5, 272.0], [58.6, 273.0], [58.7, 274.0], [58.8, 275.0], [58.9, 276.0], [59.0, 277.0], [59.1, 278.0], [59.2, 280.0], [59.3, 281.0], [59.4, 282.0], [59.5, 284.0], [59.6, 286.0], [59.7, 287.0], [59.8, 288.0], [59.9, 289.0], [60.0, 290.0], [60.1, 292.0], [60.2, 292.0], [60.3, 294.0], [60.4, 296.0], [60.5, 297.0], [60.6, 298.0], [60.7, 299.0], [60.8, 299.0], [60.9, 301.0], [61.0, 302.0], [61.1, 304.0], [61.2, 305.0], [61.3, 306.0], [61.4, 308.0], [61.5, 309.0], [61.6, 310.0], [61.7, 311.0], [61.8, 313.0], [61.9, 315.0], [62.0, 315.0], [62.1, 318.0], [62.2, 320.0], [62.3, 321.0], [62.4, 323.0], [62.5, 324.0], [62.6, 325.0], [62.7, 326.0], [62.8, 330.0], [62.9, 331.0], [63.0, 332.0], [63.1, 333.0], [63.2, 335.0], [63.3, 338.0], [63.4, 338.0], [63.5, 339.0], [63.6, 340.0], [63.7, 342.0], [63.8, 345.0], [63.9, 347.0], [64.0, 348.0], [64.1, 349.0], [64.2, 350.0], [64.3, 351.0], [64.4, 352.0], [64.5, 353.0], [64.6, 355.0], [64.7, 356.0], [64.8, 357.0], [64.9, 358.0], [65.0, 359.0], [65.1, 360.0], [65.2, 362.0], [65.3, 363.0], [65.4, 364.0], [65.5, 365.0], [65.6, 367.0], [65.7, 369.0], [65.8, 371.0], [65.9, 373.0], [66.0, 375.0], [66.1, 375.0], [66.2, 376.0], [66.3, 378.0], [66.4, 378.0], [66.5, 381.0], [66.6, 382.0], [66.7, 384.0], [66.8, 386.0], [66.9, 388.0], [67.0, 390.0], [67.1, 390.0], [67.2, 391.0], [67.3, 392.0], [67.4, 393.0], [67.5, 393.0], [67.6, 394.0], [67.7, 395.0], [67.8, 396.0], [67.9, 398.0], [68.0, 399.0], [68.1, 401.0], [68.2, 403.0], [68.3, 404.0], [68.4, 406.0], [68.5, 407.0], [68.6, 407.0], [68.7, 409.0], [68.8, 410.0], [68.9, 411.0], [69.0, 412.0], [69.1, 414.0], [69.2, 415.0], [69.3, 416.0], [69.4, 417.0], [69.5, 418.0], [69.6, 421.0], [69.7, 423.0], [69.8, 424.0], [69.9, 424.0], [70.0, 426.0], [70.1, 427.0], [70.2, 428.0], [70.3, 430.0], [70.4, 431.0], [70.5, 431.0], [70.6, 433.0], [70.7, 435.0], [70.8, 436.0], [70.9, 438.0], [71.0, 439.0], [71.1, 440.0], [71.2, 441.0], [71.3, 443.0], [71.4, 444.0], [71.5, 445.0], [71.6, 445.0], [71.7, 446.0], [71.8, 448.0], [71.9, 449.0], [72.0, 451.0], [72.1, 454.0], [72.2, 456.0], [72.3, 457.0], [72.4, 460.0], [72.5, 462.0], [72.6, 464.0], [72.7, 466.0], [72.8, 468.0], [72.9, 469.0], [73.0, 472.0], [73.1, 474.0], [73.2, 475.0], [73.3, 477.0], [73.4, 479.0], [73.5, 481.0], [73.6, 484.0], [73.7, 488.0], [73.8, 490.0], [73.9, 493.0], [74.0, 494.0], [74.1, 496.0], [74.2, 499.0], [74.3, 499.0], [74.4, 501.0], [74.5, 504.0], [74.6, 506.0], [74.7, 509.0], [74.8, 511.0], [74.9, 514.0], [75.0, 515.0], [75.1, 516.0], [75.2, 517.0], [75.3, 520.0], [75.4, 521.0], [75.5, 524.0], [75.6, 527.0], [75.7, 530.0], [75.8, 534.0], [75.9, 535.0], [76.0, 536.0], [76.1, 538.0], [76.2, 540.0], [76.3, 542.0], [76.4, 546.0], [76.5, 548.0], [76.6, 551.0], [76.7, 552.0], [76.8, 553.0], [76.9, 556.0], [77.0, 557.0], [77.1, 559.0], [77.2, 562.0], [77.3, 565.0], [77.4, 568.0], [77.5, 570.0], [77.6, 574.0], [77.7, 575.0], [77.8, 577.0], [77.9, 579.0], [78.0, 581.0], [78.1, 587.0], [78.2, 588.0], [78.3, 589.0], [78.4, 592.0], [78.5, 593.0], [78.6, 595.0], [78.7, 597.0], [78.8, 601.0], [78.9, 601.0], [79.0, 603.0], [79.1, 605.0], [79.2, 608.0], [79.3, 611.0], [79.4, 612.0], [79.5, 615.0], [79.6, 617.0], [79.7, 621.0], [79.8, 623.0], [79.9, 624.0], [80.0, 627.0], [80.1, 629.0], [80.2, 631.0], [80.3, 636.0], [80.4, 638.0], [80.5, 641.0], [80.6, 642.0], [80.7, 644.0], [80.8, 645.0], [80.9, 651.0], [81.0, 654.0], [81.1, 657.0], [81.2, 661.0], [81.3, 665.0], [81.4, 666.0], [81.5, 668.0], [81.6, 671.0], [81.7, 673.0], [81.8, 677.0], [81.9, 678.0], [82.0, 682.0], [82.1, 683.0], [82.2, 688.0], [82.3, 692.0], [82.4, 698.0], [82.5, 699.0], [82.6, 700.0], [82.7, 701.0], [82.8, 704.0], [82.9, 708.0], [83.0, 709.0], [83.1, 712.0], [83.2, 715.0], [83.3, 718.0], [83.4, 721.0], [83.5, 724.0], [83.6, 728.0], [83.7, 730.0], [83.8, 732.0], [83.9, 734.0], [84.0, 736.0], [84.1, 738.0], [84.2, 740.0], [84.3, 742.0], [84.4, 744.0], [84.5, 747.0], [84.6, 750.0], [84.7, 751.0], [84.8, 752.0], [84.9, 754.0], [85.0, 757.0], [85.1, 758.0], [85.2, 760.0], [85.3, 763.0], [85.4, 765.0], [85.5, 767.0], [85.6, 769.0], [85.7, 772.0], [85.8, 774.0], [85.9, 778.0], [86.0, 779.0], [86.1, 783.0], [86.2, 784.0], [86.3, 785.0], [86.4, 788.0], [86.5, 791.0], [86.6, 793.0], [86.7, 797.0], [86.8, 799.0], [86.9, 803.0], [87.0, 804.0], [87.1, 805.0], [87.2, 808.0], [87.3, 810.0], [87.4, 813.0], [87.5, 814.0], [87.6, 816.0], [87.7, 819.0], [87.8, 821.0], [87.9, 826.0], [88.0, 828.0], [88.1, 830.0], [88.2, 831.0], [88.3, 832.0], [88.4, 833.0], [88.5, 836.0], [88.6, 838.0], [88.7, 841.0], [88.8, 846.0], [88.9, 848.0], [89.0, 853.0], [89.1, 860.0], [89.2, 862.0], [89.3, 866.0], [89.4, 869.0], [89.5, 874.0], [89.6, 880.0], [89.7, 882.0], [89.8, 885.0], [89.9, 893.0], [90.0, 896.0], [90.1, 900.0], [90.2, 902.0], [90.3, 904.0], [90.4, 908.0], [90.5, 914.0], [90.6, 917.0], [90.7, 923.0], [90.8, 926.0], [90.9, 929.0], [91.0, 932.0], [91.1, 934.0], [91.2, 944.0], [91.3, 947.0], [91.4, 952.0], [91.5, 953.0], [91.6, 957.0], [91.7, 963.0], [91.8, 974.0], [91.9, 985.0], [92.0, 994.0], [92.1, 996.0], [92.2, 1004.0], [92.3, 1009.0], [92.4, 1013.0], [92.5, 1023.0], [92.6, 1025.0], [92.7, 1033.0], [92.8, 1039.0], [92.9, 1042.0], [93.0, 1051.0], [93.1, 1058.0], [93.2, 1064.0], [93.3, 1069.0], [93.4, 1080.0], [93.5, 1087.0], [93.6, 1094.0], [93.7, 1104.0], [93.8, 1115.0], [93.9, 1121.0], [94.0, 1125.0], [94.1, 1133.0], [94.2, 1146.0], [94.3, 1156.0], [94.4, 1163.0], [94.5, 1168.0], [94.6, 1172.0], [94.7, 1176.0], [94.8, 1179.0], [94.9, 1187.0], [95.0, 1191.0], [95.1, 1198.0], [95.2, 1201.0], [95.3, 1208.0], [95.4, 1217.0], [95.5, 1226.0], [95.6, 1232.0], [95.7, 1240.0], [95.8, 1247.0], [95.9, 1259.0], [96.0, 1267.0], [96.1, 1275.0], [96.2, 1285.0], [96.3, 1301.0], [96.4, 1312.0], [96.5, 1320.0], [96.6, 1327.0], [96.7, 1332.0], [96.8, 1337.0], [96.9, 1345.0], [97.0, 1363.0], [97.1, 1381.0], [97.2, 1394.0], [97.3, 1399.0], [97.4, 1425.0], [97.5, 1460.0], [97.6, 1475.0], [97.7, 1486.0], [97.8, 1498.0], [97.9, 1528.0], [98.0, 1546.0], [98.1, 1565.0], [98.2, 1590.0], [98.3, 1617.0], [98.4, 1637.0], [98.5, 1661.0], [98.6, 1672.0], [98.7, 1703.0], [98.8, 1727.0], [98.9, 1758.0], [99.0, 1818.0], [99.1, 1905.0], [99.2, 1948.0], [99.3, 2007.0], [99.4, 2146.0], [99.5, 2208.0], [99.6, 2274.0], [99.7, 2391.0], [99.8, 2479.0], [99.9, 2874.0], [100.0, 3528.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 2106.0, "series": [{"data": [[0.0, 2106.0], [600.0, 200.0], [700.0, 224.0], [800.0, 173.0], [900.0, 108.0], [1000.0, 78.0], [1100.0, 81.0], [1200.0, 58.0], [1300.0, 55.0], [1400.0, 28.0], [1500.0, 22.0], [100.0, 608.0], [1600.0, 22.0], [1700.0, 15.0], [1800.0, 7.0], [1900.0, 10.0], [2000.0, 4.0], [2100.0, 6.0], [2300.0, 6.0], [2200.0, 8.0], [2400.0, 4.0], [2500.0, 1.0], [2600.0, 1.0], [2800.0, 3.0], [2700.0, 1.0], [2900.0, 1.0], [200.0, 492.0], [3400.0, 1.0], [3500.0, 2.0], [300.0, 380.0], [400.0, 332.0], [500.0, 235.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3500.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 114.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 3919.0, "series": [{"data": [[0.0, 3919.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1239.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 114.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.950221238938052, "minX": 1.6023456E12, "maxY": 10.0, "series": [{"data": [[1.60234578E12, 9.950221238938052], [1.60234566E12, 10.0], [1.6023456E12, 9.96723460026212], [1.60234572E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60234578E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 351.7425799086748, "minX": 1.0, "maxY": 3528.0, "series": [{"data": [[8.0, 1808.5], [4.0, 3528.0], [2.0, 2479.0], [1.0, 3463.0], [9.0, 1079.0], [5.0, 1009.0], [10.0, 351.7425799086748], [3.0, 942.0], [6.0, 653.0], [7.0, 2867.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.986722306525044, 355.4944992412758]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 6555.4, "minX": 1.6023456E12, "maxY": 1495266.8833333333, "series": [{"data": [[1.60234578E12, 778576.7], [1.60234566E12, 1495266.8833333333], [1.6023456E12, 646921.8833333333], [1.60234572E12, 1371049.65]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60234578E12, 7936.6], [1.60234566E12, 15121.916666666666], [1.6023456E12, 6555.4], [1.60234572E12, 15965.633333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60234578E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 327.12903225806457, "minX": 1.6023456E12, "maxY": 407.0741150442483, "series": [{"data": [[1.60234578E12, 407.0741150442483], [1.60234566E12, 340.07376126126155], [1.6023456E12, 398.2726081258188], [1.60234572E12, 327.12903225806457]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60234578E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 326.83105522143256, "minX": 1.6023456E12, "maxY": 406.75774336283183, "series": [{"data": [[1.60234578E12, 406.75774336283183], [1.60234566E12, 339.72635135135056], [1.6023456E12, 397.9121887287024], [1.60234572E12, 326.83105522143256]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60234578E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.007743362831858408, "minX": 1.6023456E12, "maxY": 0.1323722149410219, "series": [{"data": [[1.60234578E12, 0.007743362831858408], [1.60234566E12, 0.009572072072072089], [1.6023456E12, 0.1323722149410219], [1.60234572E12, 0.010388190267905974]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60234578E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 28.0, "minX": 1.6023456E12, "maxY": 3528.0, "series": [{"data": [[1.60234578E12, 3528.0], [1.60234566E12, 2895.0], [1.6023456E12, 1764.0], [1.60234572E12, 2435.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60234578E12, 34.0], [1.60234566E12, 33.0], [1.6023456E12, 35.0], [1.60234572E12, 32.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60234578E12, 34.0], [1.60234566E12, 33.0], [1.6023456E12, 35.0], [1.60234572E12, 32.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60234578E12, 34.0], [1.60234566E12, 33.0], [1.6023456E12, 35.0], [1.60234572E12, 32.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60234578E12, 33.0], [1.60234566E12, 30.0], [1.6023456E12, 33.0], [1.60234572E12, 28.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60234578E12, 261.5], [1.60234566E12, 162.0], [1.6023456E12, 263.0], [1.60234572E12, 153.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60234578E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 68.0, "minX": 2.0, "maxY": 3201.0, "series": [{"data": [[2.0, 3201.0], [3.0, 2171.0], [5.0, 1283.0], [6.0, 1234.5], [7.0, 543.0], [8.0, 902.0], [9.0, 995.5], [10.0, 794.5], [11.0, 802.0], [12.0, 830.5], [13.0, 660.5], [14.0, 718.0], [15.0, 601.0], [16.0, 541.0], [17.0, 785.0], [18.0, 506.5], [19.0, 73.0], [20.0, 407.0], [21.0, 496.0], [22.0, 455.5], [23.0, 354.0], [24.0, 290.0], [25.0, 356.0], [26.0, 310.5], [27.0, 257.0], [28.0, 239.5], [29.0, 80.0], [30.0, 102.0], [31.0, 284.0], [32.0, 208.0], [33.0, 203.5], [34.0, 116.0], [35.0, 75.0], [36.0, 76.0], [37.0, 237.0], [39.0, 81.0], [38.0, 224.0], [40.0, 163.0], [41.0, 81.0], [42.0, 111.5], [43.0, 76.0], [44.0, 139.5], [45.0, 241.5], [47.0, 99.0], [46.0, 76.0], [48.0, 93.5], [50.0, 166.5], [51.0, 147.0], [52.0, 78.0], [54.0, 72.0], [55.0, 76.0], [57.0, 80.5], [56.0, 116.5], [59.0, 68.0], [58.0, 129.0], [63.0, 77.0], [64.0, 126.0], [70.0, 150.5], [73.0, 73.0], [74.0, 72.0], [79.0, 114.0], [80.0, 81.0], [89.0, 73.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 89.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 68.0, "minX": 2.0, "maxY": 3200.5, "series": [{"data": [[2.0, 3200.5], [3.0, 2170.5], [5.0, 1282.0], [6.0, 1233.5], [7.0, 543.0], [8.0, 901.5], [9.0, 995.0], [10.0, 794.5], [11.0, 802.0], [12.0, 830.0], [13.0, 660.5], [14.0, 718.0], [15.0, 600.0], [16.0, 540.0], [17.0, 783.0], [18.0, 506.0], [19.0, 72.5], [20.0, 406.0], [21.0, 496.0], [22.0, 455.5], [23.0, 352.0], [24.0, 290.0], [25.0, 355.0], [26.0, 309.0], [27.0, 257.0], [28.0, 238.0], [29.0, 80.0], [30.0, 101.5], [31.0, 283.0], [32.0, 208.0], [33.0, 203.5], [34.0, 116.0], [35.0, 74.0], [36.0, 76.0], [37.0, 237.0], [39.0, 81.0], [38.0, 222.5], [40.0, 163.0], [41.0, 81.0], [42.0, 111.5], [43.0, 76.0], [44.0, 139.5], [45.0, 241.5], [47.0, 99.0], [46.0, 76.0], [48.0, 93.5], [50.0, 166.5], [51.0, 147.0], [52.0, 78.0], [54.0, 72.0], [55.0, 76.0], [57.0, 80.5], [56.0, 116.0], [59.0, 68.0], [58.0, 129.0], [63.0, 77.0], [64.0, 125.5], [70.0, 150.0], [73.0, 72.5], [74.0, 72.0], [79.0, 114.0], [80.0, 81.0], [89.0, 73.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 89.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 12.883333333333333, "minX": 1.6023456E12, "maxY": 30.483333333333334, "series": [{"data": [[1.60234578E12, 14.9], [1.60234566E12, 29.6], [1.6023456E12, 12.883333333333333], [1.60234572E12, 30.483333333333334]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60234578E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 12.716666666666667, "minX": 1.6023456E12, "maxY": 30.483333333333334, "series": [{"data": [[1.60234578E12, 15.066666666666666], [1.60234566E12, 29.6], [1.6023456E12, 12.716666666666667], [1.60234572E12, 30.483333333333334]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60234578E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 12.716666666666667, "minX": 1.6023456E12, "maxY": 30.483333333333334, "series": [{"data": [[1.60234578E12, 15.066666666666666], [1.60234566E12, 29.6], [1.6023456E12, 12.716666666666667], [1.60234572E12, 30.483333333333334]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60234578E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 12.716666666666667, "minX": 1.6023456E12, "maxY": 30.483333333333334, "series": [{"data": [[1.60234578E12, 15.066666666666666], [1.60234566E12, 29.6], [1.6023456E12, 12.716666666666667], [1.60234572E12, 30.483333333333334]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60234578E12, "title": "Total Transactions Per Second"}},
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

