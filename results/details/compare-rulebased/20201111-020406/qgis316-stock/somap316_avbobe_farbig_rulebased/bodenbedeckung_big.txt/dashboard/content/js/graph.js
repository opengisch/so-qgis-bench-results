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
        data: {"result": {"minY": 4.0, "minX": 0.0, "maxY": 2126.0, "series": [{"data": [[0.0, 4.0], [0.1, 5.0], [0.2, 5.0], [0.3, 7.0], [0.4, 7.0], [0.5, 9.0], [0.6, 10.0], [0.7, 11.0], [0.8, 11.0], [0.9, 11.0], [1.0, 11.0], [1.1, 11.0], [1.2, 11.0], [1.3, 12.0], [1.4, 12.0], [1.5, 12.0], [1.6, 12.0], [1.7, 12.0], [1.8, 12.0], [1.9, 13.0], [2.0, 13.0], [2.1, 13.0], [2.2, 13.0], [2.3, 14.0], [2.4, 14.0], [2.5, 14.0], [2.6, 14.0], [2.7, 15.0], [2.8, 15.0], [2.9, 15.0], [3.0, 15.0], [3.1, 16.0], [3.2, 16.0], [3.3, 16.0], [3.4, 16.0], [3.5, 16.0], [3.6, 17.0], [3.7, 17.0], [3.8, 17.0], [3.9, 17.0], [4.0, 17.0], [4.1, 18.0], [4.2, 18.0], [4.3, 18.0], [4.4, 18.0], [4.5, 18.0], [4.6, 18.0], [4.7, 18.0], [4.8, 18.0], [4.9, 18.0], [5.0, 18.0], [5.1, 19.0], [5.2, 19.0], [5.3, 19.0], [5.4, 19.0], [5.5, 19.0], [5.6, 19.0], [5.7, 19.0], [5.8, 20.0], [5.9, 20.0], [6.0, 20.0], [6.1, 20.0], [6.2, 20.0], [6.3, 20.0], [6.4, 20.0], [6.5, 20.0], [6.6, 21.0], [6.7, 21.0], [6.8, 21.0], [6.9, 21.0], [7.0, 21.0], [7.1, 21.0], [7.2, 21.0], [7.3, 21.0], [7.4, 21.0], [7.5, 22.0], [7.6, 22.0], [7.7, 22.0], [7.8, 22.0], [7.9, 22.0], [8.0, 22.0], [8.1, 23.0], [8.2, 23.0], [8.3, 23.0], [8.4, 23.0], [8.5, 23.0], [8.6, 23.0], [8.7, 23.0], [8.8, 24.0], [8.9, 24.0], [9.0, 24.0], [9.1, 24.0], [9.2, 25.0], [9.3, 25.0], [9.4, 25.0], [9.5, 25.0], [9.6, 25.0], [9.7, 26.0], [9.8, 26.0], [9.9, 26.0], [10.0, 26.0], [10.1, 27.0], [10.2, 27.0], [10.3, 27.0], [10.4, 27.0], [10.5, 27.0], [10.6, 28.0], [10.7, 28.0], [10.8, 28.0], [10.9, 28.0], [11.0, 29.0], [11.1, 29.0], [11.2, 29.0], [11.3, 29.0], [11.4, 29.0], [11.5, 30.0], [11.6, 30.0], [11.7, 30.0], [11.8, 30.0], [11.9, 30.0], [12.0, 31.0], [12.1, 31.0], [12.2, 31.0], [12.3, 31.0], [12.4, 32.0], [12.5, 32.0], [12.6, 32.0], [12.7, 33.0], [12.8, 33.0], [12.9, 33.0], [13.0, 33.0], [13.1, 34.0], [13.2, 34.0], [13.3, 34.0], [13.4, 34.0], [13.5, 35.0], [13.6, 35.0], [13.7, 35.0], [13.8, 36.0], [13.9, 36.0], [14.0, 36.0], [14.1, 37.0], [14.2, 37.0], [14.3, 37.0], [14.4, 38.0], [14.5, 38.0], [14.6, 38.0], [14.7, 38.0], [14.8, 38.0], [14.9, 39.0], [15.0, 39.0], [15.1, 39.0], [15.2, 40.0], [15.3, 40.0], [15.4, 40.0], [15.5, 40.0], [15.6, 40.0], [15.7, 41.0], [15.8, 41.0], [15.9, 41.0], [16.0, 41.0], [16.1, 41.0], [16.2, 42.0], [16.3, 42.0], [16.4, 42.0], [16.5, 42.0], [16.6, 43.0], [16.7, 43.0], [16.8, 43.0], [16.9, 43.0], [17.0, 44.0], [17.1, 44.0], [17.2, 44.0], [17.3, 45.0], [17.4, 45.0], [17.5, 45.0], [17.6, 45.0], [17.7, 45.0], [17.8, 46.0], [17.9, 46.0], [18.0, 46.0], [18.1, 46.0], [18.2, 47.0], [18.3, 47.0], [18.4, 47.0], [18.5, 47.0], [18.6, 48.0], [18.7, 48.0], [18.8, 48.0], [18.9, 48.0], [19.0, 49.0], [19.1, 49.0], [19.2, 49.0], [19.3, 50.0], [19.4, 50.0], [19.5, 50.0], [19.6, 51.0], [19.7, 51.0], [19.8, 51.0], [19.9, 51.0], [20.0, 52.0], [20.1, 52.0], [20.2, 52.0], [20.3, 53.0], [20.4, 53.0], [20.5, 54.0], [20.6, 54.0], [20.7, 54.0], [20.8, 55.0], [20.9, 55.0], [21.0, 55.0], [21.1, 55.0], [21.2, 56.0], [21.3, 56.0], [21.4, 56.0], [21.5, 57.0], [21.6, 57.0], [21.7, 57.0], [21.8, 57.0], [21.9, 57.0], [22.0, 58.0], [22.1, 58.0], [22.2, 58.0], [22.3, 58.0], [22.4, 59.0], [22.5, 59.0], [22.6, 59.0], [22.7, 60.0], [22.8, 60.0], [22.9, 60.0], [23.0, 61.0], [23.1, 61.0], [23.2, 61.0], [23.3, 62.0], [23.4, 62.0], [23.5, 62.0], [23.6, 62.0], [23.7, 63.0], [23.8, 63.0], [23.9, 63.0], [24.0, 64.0], [24.1, 64.0], [24.2, 64.0], [24.3, 65.0], [24.4, 65.0], [24.5, 65.0], [24.6, 65.0], [24.7, 66.0], [24.8, 66.0], [24.9, 66.0], [25.0, 67.0], [25.1, 67.0], [25.2, 67.0], [25.3, 67.0], [25.4, 68.0], [25.5, 68.0], [25.6, 68.0], [25.7, 69.0], [25.8, 69.0], [25.9, 70.0], [26.0, 70.0], [26.1, 71.0], [26.2, 71.0], [26.3, 72.0], [26.4, 72.0], [26.5, 73.0], [26.6, 73.0], [26.7, 74.0], [26.8, 74.0], [26.9, 75.0], [27.0, 76.0], [27.1, 76.0], [27.2, 77.0], [27.3, 77.0], [27.4, 78.0], [27.5, 78.0], [27.6, 79.0], [27.7, 80.0], [27.8, 81.0], [27.9, 82.0], [28.0, 82.0], [28.1, 83.0], [28.2, 83.0], [28.3, 84.0], [28.4, 84.0], [28.5, 85.0], [28.6, 86.0], [28.7, 86.0], [28.8, 87.0], [28.9, 87.0], [29.0, 88.0], [29.1, 88.0], [29.2, 89.0], [29.3, 90.0], [29.4, 91.0], [29.5, 92.0], [29.6, 92.0], [29.7, 93.0], [29.8, 93.0], [29.9, 94.0], [30.0, 94.0], [30.1, 95.0], [30.2, 95.0], [30.3, 96.0], [30.4, 96.0], [30.5, 97.0], [30.6, 97.0], [30.7, 98.0], [30.8, 98.0], [30.9, 99.0], [31.0, 99.0], [31.1, 100.0], [31.2, 101.0], [31.3, 101.0], [31.4, 101.0], [31.5, 102.0], [31.6, 103.0], [31.7, 104.0], [31.8, 104.0], [31.9, 105.0], [32.0, 105.0], [32.1, 106.0], [32.2, 106.0], [32.3, 107.0], [32.4, 108.0], [32.5, 108.0], [32.6, 109.0], [32.7, 109.0], [32.8, 109.0], [32.9, 109.0], [33.0, 110.0], [33.1, 110.0], [33.2, 110.0], [33.3, 110.0], [33.4, 111.0], [33.5, 111.0], [33.6, 111.0], [33.7, 111.0], [33.8, 111.0], [33.9, 111.0], [34.0, 112.0], [34.1, 112.0], [34.2, 112.0], [34.3, 112.0], [34.4, 112.0], [34.5, 112.0], [34.6, 112.0], [34.7, 113.0], [34.8, 113.0], [34.9, 113.0], [35.0, 113.0], [35.1, 113.0], [35.2, 114.0], [35.3, 114.0], [35.4, 114.0], [35.5, 114.0], [35.6, 114.0], [35.7, 115.0], [35.8, 115.0], [35.9, 115.0], [36.0, 116.0], [36.1, 116.0], [36.2, 116.0], [36.3, 117.0], [36.4, 117.0], [36.5, 117.0], [36.6, 117.0], [36.7, 117.0], [36.8, 118.0], [36.9, 118.0], [37.0, 118.0], [37.1, 119.0], [37.2, 119.0], [37.3, 119.0], [37.4, 120.0], [37.5, 120.0], [37.6, 120.0], [37.7, 121.0], [37.8, 121.0], [37.9, 121.0], [38.0, 121.0], [38.1, 122.0], [38.2, 122.0], [38.3, 122.0], [38.4, 123.0], [38.5, 124.0], [38.6, 124.0], [38.7, 124.0], [38.8, 125.0], [38.9, 125.0], [39.0, 125.0], [39.1, 125.0], [39.2, 126.0], [39.3, 126.0], [39.4, 126.0], [39.5, 126.0], [39.6, 127.0], [39.7, 127.0], [39.8, 128.0], [39.9, 128.0], [40.0, 129.0], [40.1, 129.0], [40.2, 130.0], [40.3, 130.0], [40.4, 131.0], [40.5, 131.0], [40.6, 131.0], [40.7, 133.0], [40.8, 134.0], [40.9, 134.0], [41.0, 135.0], [41.1, 135.0], [41.2, 137.0], [41.3, 137.0], [41.4, 138.0], [41.5, 139.0], [41.6, 139.0], [41.7, 139.0], [41.8, 140.0], [41.9, 140.0], [42.0, 141.0], [42.1, 141.0], [42.2, 142.0], [42.3, 143.0], [42.4, 144.0], [42.5, 145.0], [42.6, 147.0], [42.7, 148.0], [42.8, 149.0], [42.9, 150.0], [43.0, 151.0], [43.1, 152.0], [43.2, 152.0], [43.3, 153.0], [43.4, 154.0], [43.5, 154.0], [43.6, 154.0], [43.7, 155.0], [43.8, 156.0], [43.9, 156.0], [44.0, 157.0], [44.1, 158.0], [44.2, 158.0], [44.3, 159.0], [44.4, 160.0], [44.5, 161.0], [44.6, 162.0], [44.7, 163.0], [44.8, 164.0], [44.9, 165.0], [45.0, 165.0], [45.1, 165.0], [45.2, 166.0], [45.3, 167.0], [45.4, 167.0], [45.5, 168.0], [45.6, 168.0], [45.7, 168.0], [45.8, 169.0], [45.9, 170.0], [46.0, 170.0], [46.1, 171.0], [46.2, 171.0], [46.3, 172.0], [46.4, 172.0], [46.5, 173.0], [46.6, 174.0], [46.7, 174.0], [46.8, 175.0], [46.9, 175.0], [47.0, 176.0], [47.1, 176.0], [47.2, 177.0], [47.3, 177.0], [47.4, 178.0], [47.5, 179.0], [47.6, 180.0], [47.7, 181.0], [47.8, 182.0], [47.9, 183.0], [48.0, 183.0], [48.1, 184.0], [48.2, 185.0], [48.3, 185.0], [48.4, 185.0], [48.5, 186.0], [48.6, 187.0], [48.7, 187.0], [48.8, 188.0], [48.9, 189.0], [49.0, 190.0], [49.1, 191.0], [49.2, 192.0], [49.3, 192.0], [49.4, 193.0], [49.5, 194.0], [49.6, 195.0], [49.7, 196.0], [49.8, 196.0], [49.9, 197.0], [50.0, 198.0], [50.1, 199.0], [50.2, 199.0], [50.3, 201.0], [50.4, 201.0], [50.5, 202.0], [50.6, 203.0], [50.7, 204.0], [50.8, 205.0], [50.9, 206.0], [51.0, 206.0], [51.1, 207.0], [51.2, 208.0], [51.3, 209.0], [51.4, 210.0], [51.5, 210.0], [51.6, 210.0], [51.7, 212.0], [51.8, 212.0], [51.9, 212.0], [52.0, 213.0], [52.1, 214.0], [52.2, 215.0], [52.3, 215.0], [52.4, 216.0], [52.5, 217.0], [52.6, 218.0], [52.7, 219.0], [52.8, 220.0], [52.9, 221.0], [53.0, 221.0], [53.1, 221.0], [53.2, 223.0], [53.3, 223.0], [53.4, 224.0], [53.5, 225.0], [53.6, 227.0], [53.7, 228.0], [53.8, 229.0], [53.9, 230.0], [54.0, 231.0], [54.1, 232.0], [54.2, 232.0], [54.3, 234.0], [54.4, 235.0], [54.5, 235.0], [54.6, 237.0], [54.7, 238.0], [54.8, 239.0], [54.9, 239.0], [55.0, 240.0], [55.1, 241.0], [55.2, 242.0], [55.3, 243.0], [55.4, 244.0], [55.5, 245.0], [55.6, 246.0], [55.7, 248.0], [55.8, 249.0], [55.9, 250.0], [56.0, 251.0], [56.1, 252.0], [56.2, 252.0], [56.3, 253.0], [56.4, 253.0], [56.5, 255.0], [56.6, 256.0], [56.7, 257.0], [56.8, 257.0], [56.9, 259.0], [57.0, 259.0], [57.1, 261.0], [57.2, 262.0], [57.3, 265.0], [57.4, 266.0], [57.5, 268.0], [57.6, 269.0], [57.7, 271.0], [57.8, 273.0], [57.9, 273.0], [58.0, 274.0], [58.1, 275.0], [58.2, 276.0], [58.3, 277.0], [58.4, 278.0], [58.5, 280.0], [58.6, 282.0], [58.7, 283.0], [58.8, 283.0], [58.9, 285.0], [59.0, 286.0], [59.1, 287.0], [59.2, 288.0], [59.3, 289.0], [59.4, 290.0], [59.5, 292.0], [59.6, 293.0], [59.7, 294.0], [59.8, 296.0], [59.9, 297.0], [60.0, 298.0], [60.1, 299.0], [60.2, 300.0], [60.3, 301.0], [60.4, 303.0], [60.5, 304.0], [60.6, 306.0], [60.7, 307.0], [60.8, 308.0], [60.9, 310.0], [61.0, 311.0], [61.1, 313.0], [61.2, 313.0], [61.3, 315.0], [61.4, 316.0], [61.5, 317.0], [61.6, 318.0], [61.7, 319.0], [61.8, 320.0], [61.9, 321.0], [62.0, 322.0], [62.1, 323.0], [62.2, 325.0], [62.3, 327.0], [62.4, 328.0], [62.5, 329.0], [62.6, 331.0], [62.7, 332.0], [62.8, 333.0], [62.9, 334.0], [63.0, 335.0], [63.1, 337.0], [63.2, 338.0], [63.3, 338.0], [63.4, 339.0], [63.5, 340.0], [63.6, 342.0], [63.7, 343.0], [63.8, 344.0], [63.9, 345.0], [64.0, 347.0], [64.1, 348.0], [64.2, 349.0], [64.3, 351.0], [64.4, 352.0], [64.5, 353.0], [64.6, 354.0], [64.7, 356.0], [64.8, 358.0], [64.9, 360.0], [65.0, 361.0], [65.1, 363.0], [65.2, 364.0], [65.3, 365.0], [65.4, 366.0], [65.5, 366.0], [65.6, 368.0], [65.7, 369.0], [65.8, 371.0], [65.9, 372.0], [66.0, 373.0], [66.1, 373.0], [66.2, 375.0], [66.3, 376.0], [66.4, 378.0], [66.5, 381.0], [66.6, 382.0], [66.7, 382.0], [66.8, 383.0], [66.9, 383.0], [67.0, 384.0], [67.1, 385.0], [67.2, 386.0], [67.3, 386.0], [67.4, 388.0], [67.5, 391.0], [67.6, 392.0], [67.7, 393.0], [67.8, 394.0], [67.9, 396.0], [68.0, 397.0], [68.1, 398.0], [68.2, 399.0], [68.3, 400.0], [68.4, 401.0], [68.5, 402.0], [68.6, 403.0], [68.7, 403.0], [68.8, 404.0], [68.9, 406.0], [69.0, 407.0], [69.1, 409.0], [69.2, 409.0], [69.3, 410.0], [69.4, 412.0], [69.5, 412.0], [69.6, 415.0], [69.7, 418.0], [69.8, 419.0], [69.9, 421.0], [70.0, 422.0], [70.1, 424.0], [70.2, 425.0], [70.3, 426.0], [70.4, 427.0], [70.5, 428.0], [70.6, 430.0], [70.7, 431.0], [70.8, 432.0], [70.9, 434.0], [71.0, 434.0], [71.1, 435.0], [71.2, 436.0], [71.3, 437.0], [71.4, 439.0], [71.5, 440.0], [71.6, 442.0], [71.7, 443.0], [71.8, 444.0], [71.9, 445.0], [72.0, 446.0], [72.1, 446.0], [72.2, 447.0], [72.3, 449.0], [72.4, 450.0], [72.5, 450.0], [72.6, 451.0], [72.7, 452.0], [72.8, 454.0], [72.9, 455.0], [73.0, 456.0], [73.1, 456.0], [73.2, 457.0], [73.3, 458.0], [73.4, 459.0], [73.5, 460.0], [73.6, 461.0], [73.7, 462.0], [73.8, 463.0], [73.9, 464.0], [74.0, 465.0], [74.1, 466.0], [74.2, 467.0], [74.3, 469.0], [74.4, 471.0], [74.5, 472.0], [74.6, 473.0], [74.7, 474.0], [74.8, 475.0], [74.9, 477.0], [75.0, 477.0], [75.1, 478.0], [75.2, 479.0], [75.3, 480.0], [75.4, 481.0], [75.5, 482.0], [75.6, 484.0], [75.7, 485.0], [75.8, 486.0], [75.9, 488.0], [76.0, 489.0], [76.1, 489.0], [76.2, 490.0], [76.3, 491.0], [76.4, 492.0], [76.5, 492.0], [76.6, 493.0], [76.7, 494.0], [76.8, 495.0], [76.9, 496.0], [77.0, 496.0], [77.1, 496.0], [77.2, 497.0], [77.3, 498.0], [77.4, 498.0], [77.5, 499.0], [77.6, 500.0], [77.7, 501.0], [77.8, 501.0], [77.9, 502.0], [78.0, 503.0], [78.1, 504.0], [78.2, 504.0], [78.3, 505.0], [78.4, 505.0], [78.5, 507.0], [78.6, 508.0], [78.7, 508.0], [78.8, 509.0], [78.9, 510.0], [79.0, 511.0], [79.1, 512.0], [79.2, 512.0], [79.3, 513.0], [79.4, 514.0], [79.5, 515.0], [79.6, 515.0], [79.7, 516.0], [79.8, 518.0], [79.9, 518.0], [80.0, 519.0], [80.1, 519.0], [80.2, 521.0], [80.3, 521.0], [80.4, 521.0], [80.5, 523.0], [80.6, 525.0], [80.7, 526.0], [80.8, 527.0], [80.9, 528.0], [81.0, 530.0], [81.1, 531.0], [81.2, 532.0], [81.3, 533.0], [81.4, 535.0], [81.5, 536.0], [81.6, 538.0], [81.7, 539.0], [81.8, 540.0], [81.9, 540.0], [82.0, 541.0], [82.1, 542.0], [82.2, 544.0], [82.3, 544.0], [82.4, 547.0], [82.5, 548.0], [82.6, 550.0], [82.7, 552.0], [82.8, 552.0], [82.9, 553.0], [83.0, 554.0], [83.1, 556.0], [83.2, 557.0], [83.3, 558.0], [83.4, 560.0], [83.5, 561.0], [83.6, 563.0], [83.7, 565.0], [83.8, 566.0], [83.9, 567.0], [84.0, 569.0], [84.1, 570.0], [84.2, 571.0], [84.3, 574.0], [84.4, 575.0], [84.5, 576.0], [84.6, 578.0], [84.7, 579.0], [84.8, 580.0], [84.9, 582.0], [85.0, 584.0], [85.1, 585.0], [85.2, 587.0], [85.3, 588.0], [85.4, 590.0], [85.5, 592.0], [85.6, 594.0], [85.7, 595.0], [85.8, 599.0], [85.9, 601.0], [86.0, 602.0], [86.1, 604.0], [86.2, 606.0], [86.3, 607.0], [86.4, 609.0], [86.5, 610.0], [86.6, 612.0], [86.7, 613.0], [86.8, 616.0], [86.9, 618.0], [87.0, 620.0], [87.1, 624.0], [87.2, 625.0], [87.3, 628.0], [87.4, 631.0], [87.5, 632.0], [87.6, 635.0], [87.7, 637.0], [87.8, 639.0], [87.9, 642.0], [88.0, 645.0], [88.1, 648.0], [88.2, 651.0], [88.3, 653.0], [88.4, 657.0], [88.5, 661.0], [88.6, 664.0], [88.7, 666.0], [88.8, 669.0], [88.9, 672.0], [89.0, 675.0], [89.1, 677.0], [89.2, 680.0], [89.3, 681.0], [89.4, 685.0], [89.5, 690.0], [89.6, 694.0], [89.7, 696.0], [89.8, 699.0], [89.9, 700.0], [90.0, 702.0], [90.1, 705.0], [90.2, 707.0], [90.3, 708.0], [90.4, 710.0], [90.5, 712.0], [90.6, 714.0], [90.7, 715.0], [90.8, 717.0], [90.9, 718.0], [91.0, 719.0], [91.1, 724.0], [91.2, 726.0], [91.3, 728.0], [91.4, 731.0], [91.5, 736.0], [91.6, 739.0], [91.7, 743.0], [91.8, 747.0], [91.9, 753.0], [92.0, 756.0], [92.1, 759.0], [92.2, 765.0], [92.3, 767.0], [92.4, 768.0], [92.5, 775.0], [92.6, 777.0], [92.7, 783.0], [92.8, 786.0], [92.9, 789.0], [93.0, 793.0], [93.1, 796.0], [93.2, 804.0], [93.3, 807.0], [93.4, 809.0], [93.5, 814.0], [93.6, 816.0], [93.7, 824.0], [93.8, 835.0], [93.9, 839.0], [94.0, 843.0], [94.1, 847.0], [94.2, 851.0], [94.3, 858.0], [94.4, 860.0], [94.5, 864.0], [94.6, 872.0], [94.7, 878.0], [94.8, 884.0], [94.9, 890.0], [95.0, 896.0], [95.1, 902.0], [95.2, 908.0], [95.3, 917.0], [95.4, 922.0], [95.5, 932.0], [95.6, 936.0], [95.7, 940.0], [95.8, 946.0], [95.9, 956.0], [96.0, 960.0], [96.1, 965.0], [96.2, 976.0], [96.3, 981.0], [96.4, 996.0], [96.5, 1002.0], [96.6, 1011.0], [96.7, 1016.0], [96.8, 1021.0], [96.9, 1028.0], [97.0, 1034.0], [97.1, 1044.0], [97.2, 1052.0], [97.3, 1063.0], [97.4, 1079.0], [97.5, 1088.0], [97.6, 1093.0], [97.7, 1099.0], [97.8, 1115.0], [97.9, 1132.0], [98.0, 1145.0], [98.1, 1157.0], [98.2, 1162.0], [98.3, 1172.0], [98.4, 1185.0], [98.5, 1193.0], [98.6, 1210.0], [98.7, 1219.0], [98.8, 1242.0], [98.9, 1258.0], [99.0, 1279.0], [99.1, 1292.0], [99.2, 1339.0], [99.3, 1347.0], [99.4, 1395.0], [99.5, 1453.0], [99.6, 1485.0], [99.7, 1515.0], [99.8, 1601.0], [99.9, 1723.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 1609.0, "series": [{"data": [[0.0, 1609.0], [2100.0, 1.0], [600.0, 208.0], [700.0, 170.0], [200.0, 516.0], [800.0, 101.0], [900.0, 71.0], [1000.0, 66.0], [1100.0, 44.0], [300.0, 421.0], [1200.0, 30.0], [1300.0, 14.0], [1400.0, 15.0], [1500.0, 5.0], [100.0, 997.0], [400.0, 482.0], [1600.0, 4.0], [1700.0, 3.0], [1800.0, 3.0], [500.0, 430.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 2100.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 16.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 4030.0, "series": [{"data": [[0.0, 4030.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1144.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 16.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.804347826086957, "minX": 1.6050606E12, "maxY": 10.0, "series": [{"data": [[1.60506066E12, 10.0], [1.60506078E12, 9.804347826086957], [1.6050606E12, 9.990367775831883], [1.60506072E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60506078E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 186.0, "minX": 1.0, "maxY": 1127.0, "series": [{"data": [[4.0, 380.0], [8.0, 186.0], [2.0, 1127.0], [1.0, 1090.0], [9.0, 411.0], [10.0, 302.6600347691709], [5.0, 539.0], [6.0, 871.0], [3.0, 581.0], [7.0, 240.5]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.989210019267858, 303.22524084778445]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 1789.6833333333334, "minX": 1.6050606E12, "maxY": 6594890.7, "series": [{"data": [[1.60506066E12, 6594890.7], [1.60506078E12, 720307.2833333333], [1.6050606E12, 3310798.6], [1.60506072E12, 6292463.216666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60506066E12, 13730.983333333334], [1.60506078E12, 1789.6833333333334], [1.6050606E12, 8589.75], [1.60506072E12, 15658.216666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60506078E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 251.2565217391306, "minX": 1.6050606E12, "maxY": 335.86501687289035, "series": [{"data": [[1.60506066E12, 335.86501687289035], [1.60506078E12, 251.2565217391306], [1.6050606E12, 280.3572679509628], [1.60506072E12, 293.438235294118]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60506078E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 250.391304347826, "minX": 1.6050606E12, "maxY": 334.492125984251, "series": [{"data": [[1.60506066E12, 334.492125984251], [1.60506078E12, 250.391304347826], [1.6050606E12, 279.0709281961473], [1.60506072E12, 292.43872549019557]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60506078E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.004347826086956522, "minX": 1.6050606E12, "maxY": 0.09019264448336237, "series": [{"data": [[1.60506066E12, 0.01068616422947131], [1.60506078E12, 0.004347826086956522], [1.6050606E12, 0.09019264448336237], [1.60506072E12, 0.01029411764705883]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60506078E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 4.0, "minX": 1.6050606E12, "maxY": 2126.0, "series": [{"data": [[1.60506066E12, 1845.0], [1.60506078E12, 1127.0], [1.6050606E12, 1344.0], [1.60506072E12, 2126.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60506066E12, 11.0], [1.60506078E12, 24.078999944925307], [1.6050606E12, 14.57399945497513], [1.60506072E12, 9.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60506066E12, 11.0], [1.60506078E12, 24.286900022029876], [1.6050606E12, 16.0], [1.60506072E12, 9.20590019464493]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60506066E12, 11.0], [1.60506078E12, 24.194499972462655], [1.6050606E12, 15.716999727487561], [1.60506072E12, 9.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60506066E12, 7.0], [1.60506078E12, 20.0], [1.6050606E12, 5.0], [1.60506072E12, 4.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60506066E12, 213.5], [1.60506078E12, 178.5], [1.6050606E12, 221.5], [1.60506072E12, 177.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60506078E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 14.0, "minX": 2.0, "maxY": 1108.5, "series": [{"data": [[2.0, 1108.5], [7.0, 317.0], [13.0, 336.0], [15.0, 599.0], [16.0, 489.0], [17.0, 501.0], [18.0, 491.0], [19.0, 424.0], [20.0, 440.5], [21.0, 433.0], [22.0, 401.0], [23.0, 444.5], [24.0, 398.0], [25.0, 344.0], [26.0, 351.0], [27.0, 312.0], [28.0, 346.5], [29.0, 298.0], [30.0, 319.5], [31.0, 221.5], [32.0, 196.0], [34.0, 198.0], [35.0, 215.0], [36.0, 241.0], [37.0, 155.0], [38.0, 110.0], [39.0, 174.0], [41.0, 131.0], [40.0, 198.5], [43.0, 143.5], [44.0, 105.0], [45.0, 113.0], [47.0, 128.0], [48.0, 173.0], [51.0, 130.0], [54.0, 25.0], [55.0, 41.0], [56.0, 49.0], [59.0, 55.0], [61.0, 58.0], [60.0, 27.0], [63.0, 52.0], [65.0, 91.0], [68.0, 111.5], [69.0, 99.0], [73.0, 105.0], [76.0, 14.0], [77.0, 35.0], [99.0, 52.0], [100.0, 27.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 100.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 14.0, "minX": 2.0, "maxY": 1105.5, "series": [{"data": [[2.0, 1105.5], [7.0, 316.0], [13.0, 336.0], [15.0, 598.0], [16.0, 481.5], [17.0, 498.0], [18.0, 486.0], [19.0, 421.0], [20.0, 438.5], [21.0, 430.0], [22.0, 399.5], [23.0, 443.5], [24.0, 397.5], [25.0, 344.0], [26.0, 349.5], [27.0, 311.5], [28.0, 345.0], [29.0, 296.0], [30.0, 318.5], [31.0, 220.5], [32.0, 195.0], [34.0, 197.0], [35.0, 214.0], [36.0, 240.0], [37.0, 154.5], [38.0, 109.5], [39.0, 174.0], [41.0, 130.0], [40.0, 197.0], [43.0, 142.0], [44.0, 105.0], [45.0, 111.5], [47.0, 128.0], [48.0, 173.0], [51.0, 129.0], [54.0, 25.0], [55.0, 41.0], [56.0, 48.5], [59.0, 55.0], [61.0, 58.0], [60.0, 27.0], [63.0, 52.0], [65.0, 90.0], [68.0, 110.5], [69.0, 98.0], [73.0, 104.0], [76.0, 14.0], [77.0, 35.0], [99.0, 52.0], [100.0, 27.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 100.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 3.6666666666666665, "minX": 1.6050606E12, "maxY": 34.0, "series": [{"data": [[1.60506066E12, 29.633333333333333], [1.60506078E12, 3.6666666666666665], [1.6050606E12, 19.2], [1.60506072E12, 34.0]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60506078E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 3.8333333333333335, "minX": 1.6050606E12, "maxY": 34.0, "series": [{"data": [[1.60506066E12, 29.633333333333333], [1.60506078E12, 3.8333333333333335], [1.6050606E12, 19.033333333333335], [1.60506072E12, 34.0]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60506078E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 3.8333333333333335, "minX": 1.6050606E12, "maxY": 34.0, "series": [{"data": [[1.60506066E12, 29.633333333333333], [1.60506078E12, 3.8333333333333335], [1.6050606E12, 19.033333333333335], [1.60506072E12, 34.0]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60506078E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 3.8333333333333335, "minX": 1.6050606E12, "maxY": 34.0, "series": [{"data": [[1.60506066E12, 29.633333333333333], [1.60506078E12, 3.8333333333333335], [1.6050606E12, 19.033333333333335], [1.60506072E12, 34.0]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60506078E12, "title": "Total Transactions Per Second"}},
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

