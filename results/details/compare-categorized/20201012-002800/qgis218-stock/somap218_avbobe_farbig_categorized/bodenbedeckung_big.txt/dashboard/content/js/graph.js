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
        data: {"result": {"minY": 18.0, "minX": 0.0, "maxY": 13525.0, "series": [{"data": [[0.0, 18.0], [0.1, 21.0], [0.2, 22.0], [0.3, 23.0], [0.4, 23.0], [0.5, 24.0], [0.6, 24.0], [0.7, 25.0], [0.8, 25.0], [0.9, 26.0], [1.0, 26.0], [1.1, 26.0], [1.2, 27.0], [1.3, 27.0], [1.4, 27.0], [1.5, 27.0], [1.6, 27.0], [1.7, 28.0], [1.8, 28.0], [1.9, 28.0], [2.0, 28.0], [2.1, 29.0], [2.2, 29.0], [2.3, 29.0], [2.4, 30.0], [2.5, 30.0], [2.6, 30.0], [2.7, 30.0], [2.8, 31.0], [2.9, 31.0], [3.0, 31.0], [3.1, 31.0], [3.2, 32.0], [3.3, 32.0], [3.4, 32.0], [3.5, 32.0], [3.6, 32.0], [3.7, 33.0], [3.8, 33.0], [3.9, 33.0], [4.0, 33.0], [4.1, 33.0], [4.2, 33.0], [4.3, 33.0], [4.4, 34.0], [4.5, 34.0], [4.6, 34.0], [4.7, 34.0], [4.8, 35.0], [4.9, 35.0], [5.0, 35.0], [5.1, 35.0], [5.2, 35.0], [5.3, 35.0], [5.4, 36.0], [5.5, 36.0], [5.6, 36.0], [5.7, 36.0], [5.8, 36.0], [5.9, 36.0], [6.0, 37.0], [6.1, 37.0], [6.2, 37.0], [6.3, 37.0], [6.4, 37.0], [6.5, 37.0], [6.6, 37.0], [6.7, 37.0], [6.8, 38.0], [6.9, 38.0], [7.0, 38.0], [7.1, 38.0], [7.2, 38.0], [7.3, 38.0], [7.4, 39.0], [7.5, 39.0], [7.6, 39.0], [7.7, 39.0], [7.8, 40.0], [7.9, 40.0], [8.0, 40.0], [8.1, 40.0], [8.2, 40.0], [8.3, 41.0], [8.4, 41.0], [8.5, 41.0], [8.6, 41.0], [8.7, 41.0], [8.8, 42.0], [8.9, 42.0], [9.0, 42.0], [9.1, 42.0], [9.2, 43.0], [9.3, 43.0], [9.4, 43.0], [9.5, 43.0], [9.6, 43.0], [9.7, 43.0], [9.8, 43.0], [9.9, 44.0], [10.0, 44.0], [10.1, 44.0], [10.2, 44.0], [10.3, 44.0], [10.4, 45.0], [10.5, 45.0], [10.6, 45.0], [10.7, 45.0], [10.8, 45.0], [10.9, 45.0], [11.0, 46.0], [11.1, 46.0], [11.2, 46.0], [11.3, 46.0], [11.4, 46.0], [11.5, 46.0], [11.6, 46.0], [11.7, 47.0], [11.8, 47.0], [11.9, 47.0], [12.0, 47.0], [12.1, 47.0], [12.2, 47.0], [12.3, 48.0], [12.4, 48.0], [12.5, 48.0], [12.6, 48.0], [12.7, 48.0], [12.8, 49.0], [12.9, 49.0], [13.0, 49.0], [13.1, 49.0], [13.2, 49.0], [13.3, 50.0], [13.4, 50.0], [13.5, 50.0], [13.6, 50.0], [13.7, 51.0], [13.8, 51.0], [13.9, 51.0], [14.0, 51.0], [14.1, 51.0], [14.2, 52.0], [14.3, 52.0], [14.4, 52.0], [14.5, 52.0], [14.6, 52.0], [14.7, 52.0], [14.8, 53.0], [14.9, 53.0], [15.0, 53.0], [15.1, 53.0], [15.2, 53.0], [15.3, 53.0], [15.4, 53.0], [15.5, 54.0], [15.6, 54.0], [15.7, 54.0], [15.8, 54.0], [15.9, 55.0], [16.0, 55.0], [16.1, 55.0], [16.2, 55.0], [16.3, 55.0], [16.4, 55.0], [16.5, 56.0], [16.6, 56.0], [16.7, 56.0], [16.8, 56.0], [16.9, 56.0], [17.0, 57.0], [17.1, 57.0], [17.2, 57.0], [17.3, 57.0], [17.4, 57.0], [17.5, 57.0], [17.6, 57.0], [17.7, 58.0], [17.8, 58.0], [17.9, 58.0], [18.0, 58.0], [18.1, 58.0], [18.2, 59.0], [18.3, 59.0], [18.4, 59.0], [18.5, 59.0], [18.6, 59.0], [18.7, 60.0], [18.8, 60.0], [18.9, 60.0], [19.0, 60.0], [19.1, 60.0], [19.2, 61.0], [19.3, 61.0], [19.4, 61.0], [19.5, 61.0], [19.6, 61.0], [19.7, 62.0], [19.8, 62.0], [19.9, 62.0], [20.0, 62.0], [20.1, 63.0], [20.2, 63.0], [20.3, 63.0], [20.4, 63.0], [20.5, 63.0], [20.6, 63.0], [20.7, 64.0], [20.8, 64.0], [20.9, 64.0], [21.0, 64.0], [21.1, 64.0], [21.2, 64.0], [21.3, 65.0], [21.4, 65.0], [21.5, 65.0], [21.6, 65.0], [21.7, 66.0], [21.8, 66.0], [21.9, 66.0], [22.0, 66.0], [22.1, 67.0], [22.2, 67.0], [22.3, 67.0], [22.4, 67.0], [22.5, 68.0], [22.6, 68.0], [22.7, 68.0], [22.8, 69.0], [22.9, 69.0], [23.0, 69.0], [23.1, 69.0], [23.2, 70.0], [23.3, 70.0], [23.4, 70.0], [23.5, 70.0], [23.6, 71.0], [23.7, 71.0], [23.8, 71.0], [23.9, 72.0], [24.0, 72.0], [24.1, 72.0], [24.2, 72.0], [24.3, 72.0], [24.4, 73.0], [24.5, 73.0], [24.6, 73.0], [24.7, 73.0], [24.8, 73.0], [24.9, 74.0], [25.0, 74.0], [25.1, 74.0], [25.2, 75.0], [25.3, 75.0], [25.4, 75.0], [25.5, 75.0], [25.6, 76.0], [25.7, 76.0], [25.8, 76.0], [25.9, 76.0], [26.0, 77.0], [26.1, 77.0], [26.2, 77.0], [26.3, 78.0], [26.4, 78.0], [26.5, 78.0], [26.6, 79.0], [26.7, 79.0], [26.8, 79.0], [26.9, 79.0], [27.0, 80.0], [27.1, 80.0], [27.2, 80.0], [27.3, 81.0], [27.4, 81.0], [27.5, 81.0], [27.6, 82.0], [27.7, 82.0], [27.8, 82.0], [27.9, 83.0], [28.0, 83.0], [28.1, 83.0], [28.2, 83.0], [28.3, 84.0], [28.4, 84.0], [28.5, 84.0], [28.6, 85.0], [28.7, 85.0], [28.8, 85.0], [28.9, 85.0], [29.0, 86.0], [29.1, 86.0], [29.2, 86.0], [29.3, 87.0], [29.4, 88.0], [29.5, 88.0], [29.6, 88.0], [29.7, 89.0], [29.8, 89.0], [29.9, 89.0], [30.0, 90.0], [30.1, 90.0], [30.2, 91.0], [30.3, 92.0], [30.4, 92.0], [30.5, 92.0], [30.6, 93.0], [30.7, 94.0], [30.8, 94.0], [30.9, 94.0], [31.0, 95.0], [31.1, 95.0], [31.2, 95.0], [31.3, 95.0], [31.4, 96.0], [31.5, 97.0], [31.6, 97.0], [31.7, 98.0], [31.8, 99.0], [31.9, 99.0], [32.0, 100.0], [32.1, 100.0], [32.2, 101.0], [32.3, 102.0], [32.4, 103.0], [32.5, 103.0], [32.6, 103.0], [32.7, 105.0], [32.8, 105.0], [32.9, 105.0], [33.0, 106.0], [33.1, 106.0], [33.2, 107.0], [33.3, 107.0], [33.4, 108.0], [33.5, 109.0], [33.6, 109.0], [33.7, 110.0], [33.8, 110.0], [33.9, 111.0], [34.0, 111.0], [34.1, 113.0], [34.2, 113.0], [34.3, 114.0], [34.4, 114.0], [34.5, 115.0], [34.6, 116.0], [34.7, 116.0], [34.8, 117.0], [34.9, 118.0], [35.0, 118.0], [35.1, 118.0], [35.2, 119.0], [35.3, 120.0], [35.4, 121.0], [35.5, 122.0], [35.6, 123.0], [35.7, 123.0], [35.8, 124.0], [35.9, 125.0], [36.0, 125.0], [36.1, 126.0], [36.2, 127.0], [36.3, 128.0], [36.4, 129.0], [36.5, 130.0], [36.6, 131.0], [36.7, 132.0], [36.8, 133.0], [36.9, 134.0], [37.0, 135.0], [37.1, 136.0], [37.2, 137.0], [37.3, 138.0], [37.4, 140.0], [37.5, 141.0], [37.6, 141.0], [37.7, 142.0], [37.8, 144.0], [37.9, 145.0], [38.0, 145.0], [38.1, 147.0], [38.2, 148.0], [38.3, 148.0], [38.4, 149.0], [38.5, 150.0], [38.6, 151.0], [38.7, 152.0], [38.8, 152.0], [38.9, 153.0], [39.0, 154.0], [39.1, 154.0], [39.2, 155.0], [39.3, 155.0], [39.4, 156.0], [39.5, 157.0], [39.6, 158.0], [39.7, 159.0], [39.8, 160.0], [39.9, 161.0], [40.0, 162.0], [40.1, 162.0], [40.2, 163.0], [40.3, 164.0], [40.4, 164.0], [40.5, 165.0], [40.6, 165.0], [40.7, 166.0], [40.8, 167.0], [40.9, 167.0], [41.0, 167.0], [41.1, 169.0], [41.2, 169.0], [41.3, 170.0], [41.4, 171.0], [41.5, 171.0], [41.6, 172.0], [41.7, 173.0], [41.8, 173.0], [41.9, 174.0], [42.0, 174.0], [42.1, 175.0], [42.2, 176.0], [42.3, 176.0], [42.4, 176.0], [42.5, 177.0], [42.6, 178.0], [42.7, 178.0], [42.8, 178.0], [42.9, 179.0], [43.0, 179.0], [43.1, 181.0], [43.2, 181.0], [43.3, 182.0], [43.4, 183.0], [43.5, 183.0], [43.6, 184.0], [43.7, 185.0], [43.8, 186.0], [43.9, 186.0], [44.0, 186.0], [44.1, 187.0], [44.2, 187.0], [44.3, 188.0], [44.4, 189.0], [44.5, 190.0], [44.6, 190.0], [44.7, 191.0], [44.8, 193.0], [44.9, 194.0], [45.0, 194.0], [45.1, 195.0], [45.2, 196.0], [45.3, 196.0], [45.4, 197.0], [45.5, 197.0], [45.6, 198.0], [45.7, 198.0], [45.8, 199.0], [45.9, 200.0], [46.0, 200.0], [46.1, 201.0], [46.2, 201.0], [46.3, 202.0], [46.4, 202.0], [46.5, 203.0], [46.6, 203.0], [46.7, 204.0], [46.8, 204.0], [46.9, 205.0], [47.0, 205.0], [47.1, 206.0], [47.2, 206.0], [47.3, 207.0], [47.4, 208.0], [47.5, 208.0], [47.6, 209.0], [47.7, 210.0], [47.8, 211.0], [47.9, 212.0], [48.0, 212.0], [48.1, 213.0], [48.2, 214.0], [48.3, 214.0], [48.4, 214.0], [48.5, 216.0], [48.6, 216.0], [48.7, 216.0], [48.8, 218.0], [48.9, 218.0], [49.0, 219.0], [49.1, 220.0], [49.2, 221.0], [49.3, 222.0], [49.4, 222.0], [49.5, 222.0], [49.6, 223.0], [49.7, 224.0], [49.8, 224.0], [49.9, 225.0], [50.0, 226.0], [50.1, 227.0], [50.2, 227.0], [50.3, 227.0], [50.4, 227.0], [50.5, 228.0], [50.6, 229.0], [50.7, 230.0], [50.8, 230.0], [50.9, 231.0], [51.0, 231.0], [51.1, 233.0], [51.2, 234.0], [51.3, 235.0], [51.4, 236.0], [51.5, 237.0], [51.6, 237.0], [51.7, 239.0], [51.8, 239.0], [51.9, 240.0], [52.0, 241.0], [52.1, 242.0], [52.2, 243.0], [52.3, 245.0], [52.4, 245.0], [52.5, 247.0], [52.6, 248.0], [52.7, 249.0], [52.8, 251.0], [52.9, 252.0], [53.0, 252.0], [53.1, 253.0], [53.2, 254.0], [53.3, 255.0], [53.4, 256.0], [53.5, 258.0], [53.6, 258.0], [53.7, 259.0], [53.8, 260.0], [53.9, 261.0], [54.0, 262.0], [54.1, 262.0], [54.2, 262.0], [54.3, 263.0], [54.4, 264.0], [54.5, 264.0], [54.6, 265.0], [54.7, 266.0], [54.8, 267.0], [54.9, 268.0], [55.0, 269.0], [55.1, 270.0], [55.2, 271.0], [55.3, 273.0], [55.4, 273.0], [55.5, 274.0], [55.6, 274.0], [55.7, 276.0], [55.8, 277.0], [55.9, 278.0], [56.0, 278.0], [56.1, 280.0], [56.2, 281.0], [56.3, 282.0], [56.4, 283.0], [56.5, 284.0], [56.6, 285.0], [56.7, 286.0], [56.8, 287.0], [56.9, 289.0], [57.0, 290.0], [57.1, 291.0], [57.2, 292.0], [57.3, 293.0], [57.4, 294.0], [57.5, 294.0], [57.6, 295.0], [57.7, 297.0], [57.8, 297.0], [57.9, 298.0], [58.0, 299.0], [58.1, 300.0], [58.2, 301.0], [58.3, 302.0], [58.4, 303.0], [58.5, 304.0], [58.6, 305.0], [58.7, 306.0], [58.8, 307.0], [58.9, 308.0], [59.0, 309.0], [59.1, 309.0], [59.2, 310.0], [59.3, 311.0], [59.4, 311.0], [59.5, 312.0], [59.6, 313.0], [59.7, 313.0], [59.8, 314.0], [59.9, 315.0], [60.0, 316.0], [60.1, 317.0], [60.2, 317.0], [60.3, 319.0], [60.4, 319.0], [60.5, 320.0], [60.6, 321.0], [60.7, 322.0], [60.8, 323.0], [60.9, 324.0], [61.0, 324.0], [61.1, 325.0], [61.2, 326.0], [61.3, 326.0], [61.4, 327.0], [61.5, 328.0], [61.6, 329.0], [61.7, 331.0], [61.8, 332.0], [61.9, 332.0], [62.0, 334.0], [62.1, 334.0], [62.2, 336.0], [62.3, 336.0], [62.4, 337.0], [62.5, 338.0], [62.6, 340.0], [62.7, 341.0], [62.8, 341.0], [62.9, 342.0], [63.0, 343.0], [63.1, 344.0], [63.2, 346.0], [63.3, 346.0], [63.4, 347.0], [63.5, 347.0], [63.6, 348.0], [63.7, 349.0], [63.8, 350.0], [63.9, 350.0], [64.0, 351.0], [64.1, 352.0], [64.2, 353.0], [64.3, 354.0], [64.4, 354.0], [64.5, 355.0], [64.6, 356.0], [64.7, 356.0], [64.8, 357.0], [64.9, 358.0], [65.0, 358.0], [65.1, 359.0], [65.2, 360.0], [65.3, 361.0], [65.4, 362.0], [65.5, 362.0], [65.6, 363.0], [65.7, 363.0], [65.8, 365.0], [65.9, 365.0], [66.0, 366.0], [66.1, 367.0], [66.2, 368.0], [66.3, 369.0], [66.4, 371.0], [66.5, 371.0], [66.6, 373.0], [66.7, 373.0], [66.8, 374.0], [66.9, 375.0], [67.0, 377.0], [67.1, 377.0], [67.2, 377.0], [67.3, 378.0], [67.4, 379.0], [67.5, 379.0], [67.6, 380.0], [67.7, 381.0], [67.8, 381.0], [67.9, 382.0], [68.0, 383.0], [68.1, 385.0], [68.2, 385.0], [68.3, 387.0], [68.4, 388.0], [68.5, 388.0], [68.6, 390.0], [68.7, 391.0], [68.8, 391.0], [68.9, 392.0], [69.0, 393.0], [69.1, 394.0], [69.2, 395.0], [69.3, 396.0], [69.4, 397.0], [69.5, 398.0], [69.6, 398.0], [69.7, 399.0], [69.8, 400.0], [69.9, 401.0], [70.0, 402.0], [70.1, 403.0], [70.2, 404.0], [70.3, 406.0], [70.4, 407.0], [70.5, 407.0], [70.6, 409.0], [70.7, 411.0], [70.8, 412.0], [70.9, 413.0], [71.0, 414.0], [71.1, 415.0], [71.2, 416.0], [71.3, 417.0], [71.4, 418.0], [71.5, 419.0], [71.6, 421.0], [71.7, 422.0], [71.8, 423.0], [71.9, 424.0], [72.0, 425.0], [72.1, 427.0], [72.2, 428.0], [72.3, 429.0], [72.4, 430.0], [72.5, 431.0], [72.6, 432.0], [72.7, 433.0], [72.8, 434.0], [72.9, 435.0], [73.0, 436.0], [73.1, 438.0], [73.2, 438.0], [73.3, 439.0], [73.4, 440.0], [73.5, 442.0], [73.6, 444.0], [73.7, 445.0], [73.8, 446.0], [73.9, 447.0], [74.0, 448.0], [74.1, 450.0], [74.2, 451.0], [74.3, 451.0], [74.4, 452.0], [74.5, 454.0], [74.6, 455.0], [74.7, 456.0], [74.8, 457.0], [74.9, 459.0], [75.0, 459.0], [75.1, 460.0], [75.2, 461.0], [75.3, 463.0], [75.4, 464.0], [75.5, 465.0], [75.6, 466.0], [75.7, 467.0], [75.8, 469.0], [75.9, 471.0], [76.0, 471.0], [76.1, 473.0], [76.2, 474.0], [76.3, 475.0], [76.4, 475.0], [76.5, 476.0], [76.6, 477.0], [76.7, 477.0], [76.8, 478.0], [76.9, 479.0], [77.0, 479.0], [77.1, 480.0], [77.2, 481.0], [77.3, 482.0], [77.4, 483.0], [77.5, 484.0], [77.6, 484.0], [77.7, 485.0], [77.8, 486.0], [77.9, 488.0], [78.0, 488.0], [78.1, 489.0], [78.2, 490.0], [78.3, 491.0], [78.4, 492.0], [78.5, 493.0], [78.6, 494.0], [78.7, 494.0], [78.8, 496.0], [78.9, 496.0], [79.0, 497.0], [79.1, 500.0], [79.2, 502.0], [79.3, 502.0], [79.4, 503.0], [79.5, 504.0], [79.6, 506.0], [79.7, 506.0], [79.8, 507.0], [79.9, 508.0], [80.0, 509.0], [80.1, 510.0], [80.2, 511.0], [80.3, 513.0], [80.4, 515.0], [80.5, 517.0], [80.6, 519.0], [80.7, 520.0], [80.8, 521.0], [80.9, 522.0], [81.0, 523.0], [81.1, 524.0], [81.2, 525.0], [81.3, 527.0], [81.4, 528.0], [81.5, 530.0], [81.6, 533.0], [81.7, 534.0], [81.8, 535.0], [81.9, 536.0], [82.0, 537.0], [82.1, 538.0], [82.2, 540.0], [82.3, 541.0], [82.4, 541.0], [82.5, 543.0], [82.6, 544.0], [82.7, 544.0], [82.8, 547.0], [82.9, 548.0], [83.0, 549.0], [83.1, 550.0], [83.2, 552.0], [83.3, 555.0], [83.4, 555.0], [83.5, 556.0], [83.6, 557.0], [83.7, 559.0], [83.8, 560.0], [83.9, 562.0], [84.0, 563.0], [84.1, 565.0], [84.2, 567.0], [84.3, 568.0], [84.4, 569.0], [84.5, 572.0], [84.6, 574.0], [84.7, 574.0], [84.8, 577.0], [84.9, 578.0], [85.0, 579.0], [85.1, 580.0], [85.2, 582.0], [85.3, 584.0], [85.4, 586.0], [85.5, 589.0], [85.6, 590.0], [85.7, 591.0], [85.8, 593.0], [85.9, 594.0], [86.0, 595.0], [86.1, 596.0], [86.2, 597.0], [86.3, 598.0], [86.4, 599.0], [86.5, 600.0], [86.6, 602.0], [86.7, 603.0], [86.8, 604.0], [86.9, 606.0], [87.0, 608.0], [87.1, 609.0], [87.2, 612.0], [87.3, 614.0], [87.4, 616.0], [87.5, 618.0], [87.6, 620.0], [87.7, 623.0], [87.8, 625.0], [87.9, 628.0], [88.0, 629.0], [88.1, 629.0], [88.2, 631.0], [88.3, 632.0], [88.4, 633.0], [88.5, 635.0], [88.6, 638.0], [88.7, 638.0], [88.8, 640.0], [88.9, 642.0], [89.0, 645.0], [89.1, 646.0], [89.2, 649.0], [89.3, 652.0], [89.4, 654.0], [89.5, 658.0], [89.6, 660.0], [89.7, 663.0], [89.8, 665.0], [89.9, 667.0], [90.0, 669.0], [90.1, 672.0], [90.2, 674.0], [90.3, 677.0], [90.4, 679.0], [90.5, 685.0], [90.6, 688.0], [90.7, 689.0], [90.8, 690.0], [90.9, 691.0], [91.0, 694.0], [91.1, 697.0], [91.2, 702.0], [91.3, 708.0], [91.4, 711.0], [91.5, 712.0], [91.6, 715.0], [91.7, 717.0], [91.8, 720.0], [91.9, 725.0], [92.0, 729.0], [92.1, 732.0], [92.2, 735.0], [92.3, 739.0], [92.4, 742.0], [92.5, 748.0], [92.6, 752.0], [92.7, 760.0], [92.8, 763.0], [92.9, 771.0], [93.0, 772.0], [93.1, 778.0], [93.2, 783.0], [93.3, 790.0], [93.4, 797.0], [93.5, 802.0], [93.6, 808.0], [93.7, 810.0], [93.8, 815.0], [93.9, 819.0], [94.0, 825.0], [94.1, 836.0], [94.2, 854.0], [94.3, 872.0], [94.4, 881.0], [94.5, 893.0], [94.6, 907.0], [94.7, 917.0], [94.8, 938.0], [94.9, 953.0], [95.0, 969.0], [95.1, 992.0], [95.2, 1011.0], [95.3, 1025.0], [95.4, 1068.0], [95.5, 1091.0], [95.6, 1100.0], [95.7, 1136.0], [95.8, 1185.0], [95.9, 1226.0], [96.0, 1265.0], [96.1, 1316.0], [96.2, 1386.0], [96.3, 1446.0], [96.4, 1498.0], [96.5, 1529.0], [96.6, 1574.0], [96.7, 1660.0], [96.8, 1706.0], [96.9, 1755.0], [97.0, 1975.0], [97.1, 2059.0], [97.2, 2121.0], [97.3, 2157.0], [97.4, 2293.0], [97.5, 2426.0], [97.6, 2474.0], [97.7, 2566.0], [97.8, 2647.0], [97.9, 2748.0], [98.0, 2864.0], [98.1, 2924.0], [98.2, 3009.0], [98.3, 3112.0], [98.4, 3239.0], [98.5, 3285.0], [98.6, 3472.0], [98.7, 3689.0], [98.8, 3962.0], [98.9, 4195.0], [99.0, 4669.0], [99.1, 5428.0], [99.2, 5773.0], [99.3, 7528.0], [99.4, 7979.0], [99.5, 8790.0], [99.6, 9270.0], [99.7, 9913.0], [99.8, 10964.0], [99.9, 11386.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 1658.0, "series": [{"data": [[0.0, 1658.0], [600.0, 246.0], [700.0, 120.0], [800.0, 55.0], [900.0, 30.0], [1000.0, 24.0], [1100.0, 13.0], [1200.0, 11.0], [1300.0, 11.0], [1400.0, 8.0], [1500.0, 12.0], [1600.0, 6.0], [1700.0, 9.0], [1800.0, 2.0], [1900.0, 2.0], [2000.0, 7.0], [2100.0, 9.0], [2200.0, 5.0], [2300.0, 3.0], [2400.0, 9.0], [2500.0, 5.0], [2600.0, 4.0], [2700.0, 6.0], [2800.0, 4.0], [2900.0, 9.0], [3000.0, 4.0], [3100.0, 4.0], [3200.0, 10.0], [3300.0, 1.0], [3400.0, 3.0], [3500.0, 2.0], [3600.0, 3.0], [3700.0, 2.0], [3800.0, 2.0], [3900.0, 4.0], [4000.0, 1.0], [4100.0, 1.0], [4200.0, 1.0], [4300.0, 1.0], [4600.0, 2.0], [4500.0, 1.0], [4400.0, 1.0], [4900.0, 3.0], [5200.0, 1.0], [5400.0, 3.0], [5700.0, 5.0], [6000.0, 1.0], [7200.0, 1.0], [7500.0, 4.0], [7600.0, 1.0], [7900.0, 1.0], [8700.0, 3.0], [8300.0, 1.0], [8600.0, 1.0], [8400.0, 1.0], [9200.0, 3.0], [8900.0, 1.0], [9000.0, 1.0], [9300.0, 2.0], [9700.0, 1.0], [9600.0, 1.0], [9900.0, 1.0], [10500.0, 1.0], [10600.0, 1.0], [10700.0, 2.0], [10900.0, 1.0], [11000.0, 2.0], [11200.0, 1.0], [11400.0, 1.0], [11300.0, 2.0], [12000.0, 1.0], [12400.0, 1.0], [12300.0, 1.0], [13500.0, 1.0], [100.0, 722.0], [200.0, 631.0], [300.0, 611.0], [400.0, 483.0], [500.0, 381.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 13500.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 186.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 4106.0, "series": [{"data": [[0.0, 4106.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 898.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 186.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.874301675977652, "minX": 1.60246248E12, "maxY": 10.0, "series": [{"data": [[1.6024626E12, 10.0], [1.60246272E12, 9.874301675977652], [1.60246254E12, 10.0], [1.60246248E12, 10.0], [1.60246266E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60246272E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 308.0, "minX": 1.0, "maxY": 7979.0, "series": [{"data": [[8.0, 561.0], [4.0, 528.0], [2.0, 557.0], [1.0, 7979.0], [9.0, 308.0], [10.0, 422.0997876857761], [5.0, 450.0], [6.0, 696.0], [3.0, 493.0], [7.0, 339.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.991329479768785, 423.6628131021207]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 2802.233333333333, "minX": 1.60246248E12, "maxY": 6668348.65, "series": [{"data": [[1.6024626E12, 5906562.783333333], [1.60246272E12, 1272346.8166666667], [1.60246254E12, 6283485.916666667], [1.60246248E12, 2831415.4833333334], [1.60246266E12, 6668348.65]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6024626E12, 12839.466666666667], [1.60246272E12, 2802.233333333333], [1.60246254E12, 8428.0], [1.60246248E12, 6053.65], [1.60246266E12, 9818.283333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60246272E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 238.42458100558667, "minX": 1.60246248E12, "maxY": 530.3263254113349, "series": [{"data": [[1.6024626E12, 381.41606714628296], [1.60246272E12, 238.42458100558667], [1.60246254E12, 530.3263254113349], [1.60246248E12, 366.7652933832707], [1.60246266E12, 475.4105594956661]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60246272E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 236.58100558659208, "minX": 1.60246248E12, "maxY": 526.5054844606952, "series": [{"data": [[1.6024626E12, 379.5119904076736], [1.60246272E12, 236.58100558659208], [1.60246254E12, 526.5054844606952], [1.60246248E12, 365.21722846442], [1.60246266E12, 473.10086682427124]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60246272E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.002793296089385473, "minX": 1.60246248E12, "maxY": 0.12359550561797726, "series": [{"data": [[1.6024626E12, 0.0065947242206235], [1.60246272E12, 0.002793296089385473], [1.60246254E12, 0.010968921389396718], [1.60246248E12, 0.12359550561797726], [1.60246266E12, 0.0086682427107959]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60246272E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 18.0, "minX": 1.60246248E12, "maxY": 13525.0, "series": [{"data": [[1.6024626E12, 12426.0], [1.60246272E12, 7979.0], [1.60246254E12, 9346.0], [1.60246248E12, 10964.0], [1.60246266E12, 13525.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6024626E12, 24.0], [1.60246272E12, 24.23099991440773], [1.60246254E12, 26.854999738931657], [1.60246248E12, 26.2179998087883], [1.60246266E12, 26.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6024626E12, 24.0], [1.60246272E12, 24.554100034236907], [1.60246254E12, 27.0], [1.60246248E12, 26.93980007648468], [1.60246266E12, 26.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6024626E12, 24.0], [1.60246272E12, 24.410499957203864], [1.60246254E12, 27.0], [1.60246248E12, 26.61899990439415], [1.60246266E12, 26.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.6024626E12, 21.0], [1.60246272E12, 20.0], [1.60246254E12, 19.0], [1.60246248E12, 23.0], [1.60246266E12, 18.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6024626E12, 177.5], [1.60246272E12, 102.0], [1.60246254E12, 375.0], [1.60246248E12, 194.0], [1.60246266E12, 337.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60246272E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 57.5, "minX": 1.0, "maxY": 5109.5, "series": [{"data": [[2.0, 4092.0], [3.0, 557.0], [4.0, 1431.0], [5.0, 326.0], [6.0, 746.5], [7.0, 413.5], [8.0, 526.0], [9.0, 111.0], [10.0, 427.0], [11.0, 298.0], [12.0, 402.5], [13.0, 248.0], [14.0, 450.0], [15.0, 351.5], [16.0, 395.0], [17.0, 414.0], [18.0, 408.5], [19.0, 377.0], [20.0, 391.5], [21.0, 383.0], [22.0, 367.5], [23.0, 369.0], [24.0, 381.0], [25.0, 407.0], [26.0, 229.5], [27.0, 346.0], [28.0, 253.0], [29.0, 363.5], [30.0, 292.0], [31.0, 173.0], [33.0, 202.0], [32.0, 217.0], [34.0, 175.5], [35.0, 241.0], [37.0, 244.0], [36.0, 105.0], [38.0, 187.0], [39.0, 201.5], [40.0, 231.5], [42.0, 194.5], [43.0, 170.0], [45.0, 189.0], [44.0, 190.5], [46.0, 72.0], [47.0, 103.0], [48.0, 171.5], [51.0, 197.0], [52.0, 100.0], [55.0, 138.0], [57.0, 176.0], [59.0, 59.0], [62.0, 76.0], [66.0, 71.5], [67.0, 90.0], [64.0, 67.5], [70.0, 57.5], [74.0, 72.0], [1.0, 5109.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 74.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 57.0, "minX": 1.0, "maxY": 5109.5, "series": [{"data": [[2.0, 4085.5], [3.0, 555.0], [4.0, 1430.0], [5.0, 326.0], [6.0, 744.5], [7.0, 408.5], [8.0, 523.5], [9.0, 103.0], [10.0, 426.5], [11.0, 297.0], [12.0, 397.5], [13.0, 247.0], [14.0, 445.5], [15.0, 350.5], [16.0, 383.5], [17.0, 407.5], [18.0, 402.5], [19.0, 374.0], [20.0, 385.0], [21.0, 380.0], [22.0, 358.0], [23.0, 368.0], [24.0, 380.5], [25.0, 406.0], [26.0, 229.0], [27.0, 344.0], [28.0, 253.0], [29.0, 358.5], [30.0, 290.5], [31.0, 170.0], [33.0, 201.0], [32.0, 216.5], [34.0, 175.0], [35.0, 240.5], [37.0, 242.5], [36.0, 105.0], [38.0, 186.5], [39.0, 201.0], [40.0, 230.0], [42.0, 194.5], [43.0, 170.0], [45.0, 188.5], [44.0, 190.5], [46.0, 72.0], [47.0, 100.0], [48.0, 171.0], [51.0, 196.0], [52.0, 99.0], [55.0, 137.0], [57.0, 176.0], [59.0, 58.0], [62.0, 76.0], [66.0, 71.0], [67.0, 89.0], [64.0, 66.5], [70.0, 57.0], [74.0, 71.5], [1.0, 5109.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 74.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 5.8, "minX": 1.60246248E12, "maxY": 27.8, "series": [{"data": [[1.6024626E12, 27.8], [1.60246272E12, 5.8], [1.60246254E12, 18.233333333333334], [1.60246248E12, 13.516666666666667], [1.60246266E12, 21.15]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60246272E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 5.966666666666667, "minX": 1.60246248E12, "maxY": 27.8, "series": [{"data": [[1.6024626E12, 27.8], [1.60246272E12, 5.966666666666667], [1.60246254E12, 18.233333333333334], [1.60246248E12, 13.35], [1.60246266E12, 21.15]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60246272E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 5.966666666666667, "minX": 1.60246248E12, "maxY": 27.8, "series": [{"data": [[1.6024626E12, 27.8], [1.60246272E12, 5.966666666666667], [1.60246254E12, 18.233333333333334], [1.60246248E12, 13.35], [1.60246266E12, 21.15]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60246272E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 5.966666666666667, "minX": 1.60246248E12, "maxY": 27.8, "series": [{"data": [[1.6024626E12, 27.8], [1.60246272E12, 5.966666666666667], [1.60246254E12, 18.233333333333334], [1.60246248E12, 13.35], [1.60246266E12, 21.15]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60246272E12, "title": "Total Transactions Per Second"}},
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

