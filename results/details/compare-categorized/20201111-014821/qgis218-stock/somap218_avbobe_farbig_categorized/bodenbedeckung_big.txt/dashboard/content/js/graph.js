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
        data: {"result": {"minY": 18.0, "minX": 0.0, "maxY": 13130.0, "series": [{"data": [[0.0, 18.0], [0.1, 21.0], [0.2, 22.0], [0.3, 23.0], [0.4, 24.0], [0.5, 25.0], [0.6, 25.0], [0.7, 26.0], [0.8, 26.0], [0.9, 26.0], [1.0, 27.0], [1.1, 27.0], [1.2, 27.0], [1.3, 27.0], [1.4, 28.0], [1.5, 28.0], [1.6, 28.0], [1.7, 28.0], [1.8, 29.0], [1.9, 29.0], [2.0, 29.0], [2.1, 29.0], [2.2, 29.0], [2.3, 29.0], [2.4, 30.0], [2.5, 30.0], [2.6, 30.0], [2.7, 30.0], [2.8, 31.0], [2.9, 31.0], [3.0, 31.0], [3.1, 31.0], [3.2, 32.0], [3.3, 32.0], [3.4, 32.0], [3.5, 32.0], [3.6, 32.0], [3.7, 32.0], [3.8, 33.0], [3.9, 33.0], [4.0, 33.0], [4.1, 33.0], [4.2, 33.0], [4.3, 33.0], [4.4, 34.0], [4.5, 34.0], [4.6, 34.0], [4.7, 34.0], [4.8, 35.0], [4.9, 35.0], [5.0, 35.0], [5.1, 35.0], [5.2, 35.0], [5.3, 35.0], [5.4, 35.0], [5.5, 36.0], [5.6, 36.0], [5.7, 36.0], [5.8, 36.0], [5.9, 36.0], [6.0, 36.0], [6.1, 36.0], [6.2, 37.0], [6.3, 37.0], [6.4, 37.0], [6.5, 37.0], [6.6, 37.0], [6.7, 37.0], [6.8, 37.0], [6.9, 38.0], [7.0, 38.0], [7.1, 38.0], [7.2, 38.0], [7.3, 39.0], [7.4, 39.0], [7.5, 39.0], [7.6, 39.0], [7.7, 39.0], [7.8, 40.0], [7.9, 40.0], [8.0, 40.0], [8.1, 40.0], [8.2, 40.0], [8.3, 41.0], [8.4, 41.0], [8.5, 41.0], [8.6, 42.0], [8.7, 42.0], [8.8, 42.0], [8.9, 42.0], [9.0, 42.0], [9.1, 43.0], [9.2, 43.0], [9.3, 43.0], [9.4, 43.0], [9.5, 43.0], [9.6, 43.0], [9.7, 43.0], [9.8, 44.0], [9.9, 44.0], [10.0, 44.0], [10.1, 44.0], [10.2, 44.0], [10.3, 45.0], [10.4, 45.0], [10.5, 45.0], [10.6, 45.0], [10.7, 45.0], [10.8, 45.0], [10.9, 46.0], [11.0, 46.0], [11.1, 46.0], [11.2, 46.0], [11.3, 46.0], [11.4, 46.0], [11.5, 47.0], [11.6, 47.0], [11.7, 47.0], [11.8, 47.0], [11.9, 47.0], [12.0, 47.0], [12.1, 47.0], [12.2, 48.0], [12.3, 48.0], [12.4, 48.0], [12.5, 48.0], [12.6, 48.0], [12.7, 49.0], [12.8, 49.0], [12.9, 49.0], [13.0, 49.0], [13.1, 49.0], [13.2, 50.0], [13.3, 50.0], [13.4, 50.0], [13.5, 50.0], [13.6, 50.0], [13.7, 51.0], [13.8, 51.0], [13.9, 51.0], [14.0, 51.0], [14.1, 51.0], [14.2, 52.0], [14.3, 52.0], [14.4, 52.0], [14.5, 52.0], [14.6, 52.0], [14.7, 53.0], [14.8, 53.0], [14.9, 53.0], [15.0, 53.0], [15.1, 53.0], [15.2, 53.0], [15.3, 53.0], [15.4, 53.0], [15.5, 53.0], [15.6, 54.0], [15.7, 54.0], [15.8, 54.0], [15.9, 54.0], [16.0, 54.0], [16.1, 55.0], [16.2, 55.0], [16.3, 55.0], [16.4, 55.0], [16.5, 55.0], [16.6, 55.0], [16.7, 56.0], [16.8, 56.0], [16.9, 56.0], [17.0, 56.0], [17.1, 56.0], [17.2, 56.0], [17.3, 56.0], [17.4, 57.0], [17.5, 57.0], [17.6, 57.0], [17.7, 57.0], [17.8, 58.0], [17.9, 58.0], [18.0, 58.0], [18.1, 58.0], [18.2, 58.0], [18.3, 59.0], [18.4, 59.0], [18.5, 59.0], [18.6, 59.0], [18.7, 60.0], [18.8, 60.0], [18.9, 60.0], [19.0, 60.0], [19.1, 61.0], [19.2, 61.0], [19.3, 61.0], [19.4, 62.0], [19.5, 62.0], [19.6, 62.0], [19.7, 62.0], [19.8, 63.0], [19.9, 63.0], [20.0, 63.0], [20.1, 63.0], [20.2, 63.0], [20.3, 63.0], [20.4, 64.0], [20.5, 64.0], [20.6, 64.0], [20.7, 65.0], [20.8, 65.0], [20.9, 65.0], [21.0, 65.0], [21.1, 65.0], [21.2, 66.0], [21.3, 66.0], [21.4, 66.0], [21.5, 66.0], [21.6, 67.0], [21.7, 67.0], [21.8, 67.0], [21.9, 67.0], [22.0, 67.0], [22.1, 68.0], [22.2, 68.0], [22.3, 68.0], [22.4, 68.0], [22.5, 69.0], [22.6, 69.0], [22.7, 69.0], [22.8, 70.0], [22.9, 70.0], [23.0, 70.0], [23.1, 70.0], [23.2, 70.0], [23.3, 71.0], [23.4, 71.0], [23.5, 71.0], [23.6, 71.0], [23.7, 72.0], [23.8, 72.0], [23.9, 72.0], [24.0, 72.0], [24.1, 72.0], [24.2, 72.0], [24.3, 72.0], [24.4, 73.0], [24.5, 73.0], [24.6, 74.0], [24.7, 74.0], [24.8, 74.0], [24.9, 75.0], [25.0, 75.0], [25.1, 75.0], [25.2, 75.0], [25.3, 75.0], [25.4, 76.0], [25.5, 76.0], [25.6, 76.0], [25.7, 76.0], [25.8, 76.0], [25.9, 77.0], [26.0, 77.0], [26.1, 77.0], [26.2, 78.0], [26.3, 78.0], [26.4, 78.0], [26.5, 78.0], [26.6, 79.0], [26.7, 79.0], [26.8, 79.0], [26.9, 80.0], [27.0, 80.0], [27.1, 80.0], [27.2, 80.0], [27.3, 81.0], [27.4, 81.0], [27.5, 82.0], [27.6, 82.0], [27.7, 82.0], [27.8, 83.0], [27.9, 83.0], [28.0, 84.0], [28.1, 84.0], [28.2, 84.0], [28.3, 84.0], [28.4, 85.0], [28.5, 85.0], [28.6, 85.0], [28.7, 85.0], [28.8, 86.0], [28.9, 86.0], [29.0, 86.0], [29.1, 87.0], [29.2, 87.0], [29.3, 87.0], [29.4, 87.0], [29.5, 88.0], [29.6, 88.0], [29.7, 89.0], [29.8, 89.0], [29.9, 90.0], [30.0, 90.0], [30.1, 91.0], [30.2, 91.0], [30.3, 92.0], [30.4, 92.0], [30.5, 93.0], [30.6, 93.0], [30.7, 93.0], [30.8, 94.0], [30.9, 94.0], [31.0, 94.0], [31.1, 95.0], [31.2, 96.0], [31.3, 96.0], [31.4, 96.0], [31.5, 97.0], [31.6, 97.0], [31.7, 97.0], [31.8, 98.0], [31.9, 99.0], [32.0, 100.0], [32.1, 100.0], [32.2, 101.0], [32.3, 101.0], [32.4, 102.0], [32.5, 103.0], [32.6, 103.0], [32.7, 104.0], [32.8, 104.0], [32.9, 104.0], [33.0, 105.0], [33.1, 105.0], [33.2, 106.0], [33.3, 106.0], [33.4, 107.0], [33.5, 107.0], [33.6, 108.0], [33.7, 109.0], [33.8, 109.0], [33.9, 110.0], [34.0, 111.0], [34.1, 111.0], [34.2, 112.0], [34.3, 113.0], [34.4, 113.0], [34.5, 114.0], [34.6, 115.0], [34.7, 115.0], [34.8, 116.0], [34.9, 117.0], [35.0, 118.0], [35.1, 119.0], [35.2, 119.0], [35.3, 120.0], [35.4, 121.0], [35.5, 122.0], [35.6, 122.0], [35.7, 123.0], [35.8, 124.0], [35.9, 125.0], [36.0, 127.0], [36.1, 128.0], [36.2, 129.0], [36.3, 130.0], [36.4, 131.0], [36.5, 132.0], [36.6, 133.0], [36.7, 133.0], [36.8, 134.0], [36.9, 136.0], [37.0, 136.0], [37.1, 137.0], [37.2, 138.0], [37.3, 140.0], [37.4, 141.0], [37.5, 141.0], [37.6, 142.0], [37.7, 143.0], [37.8, 143.0], [37.9, 145.0], [38.0, 145.0], [38.1, 146.0], [38.2, 146.0], [38.3, 147.0], [38.4, 147.0], [38.5, 148.0], [38.6, 149.0], [38.7, 150.0], [38.8, 151.0], [38.9, 152.0], [39.0, 152.0], [39.1, 153.0], [39.2, 154.0], [39.3, 155.0], [39.4, 155.0], [39.5, 156.0], [39.6, 157.0], [39.7, 158.0], [39.8, 158.0], [39.9, 159.0], [40.0, 159.0], [40.1, 160.0], [40.2, 161.0], [40.3, 162.0], [40.4, 163.0], [40.5, 163.0], [40.6, 164.0], [40.7, 165.0], [40.8, 166.0], [40.9, 167.0], [41.0, 168.0], [41.1, 169.0], [41.2, 169.0], [41.3, 170.0], [41.4, 171.0], [41.5, 171.0], [41.6, 172.0], [41.7, 173.0], [41.8, 173.0], [41.9, 173.0], [42.0, 174.0], [42.1, 174.0], [42.2, 175.0], [42.3, 175.0], [42.4, 176.0], [42.5, 177.0], [42.6, 177.0], [42.7, 177.0], [42.8, 178.0], [42.9, 178.0], [43.0, 178.0], [43.1, 179.0], [43.2, 179.0], [43.3, 180.0], [43.4, 181.0], [43.5, 182.0], [43.6, 183.0], [43.7, 183.0], [43.8, 184.0], [43.9, 184.0], [44.0, 186.0], [44.1, 186.0], [44.2, 187.0], [44.3, 187.0], [44.4, 188.0], [44.5, 189.0], [44.6, 190.0], [44.7, 191.0], [44.8, 191.0], [44.9, 192.0], [45.0, 192.0], [45.1, 193.0], [45.2, 193.0], [45.3, 194.0], [45.4, 195.0], [45.5, 196.0], [45.6, 196.0], [45.7, 197.0], [45.8, 198.0], [45.9, 198.0], [46.0, 199.0], [46.1, 200.0], [46.2, 201.0], [46.3, 202.0], [46.4, 202.0], [46.5, 203.0], [46.6, 204.0], [46.7, 204.0], [46.8, 205.0], [46.9, 206.0], [47.0, 206.0], [47.1, 207.0], [47.2, 207.0], [47.3, 208.0], [47.4, 208.0], [47.5, 209.0], [47.6, 210.0], [47.7, 211.0], [47.8, 211.0], [47.9, 212.0], [48.0, 213.0], [48.1, 213.0], [48.2, 214.0], [48.3, 214.0], [48.4, 216.0], [48.5, 216.0], [48.6, 217.0], [48.7, 217.0], [48.8, 218.0], [48.9, 219.0], [49.0, 220.0], [49.1, 221.0], [49.2, 222.0], [49.3, 223.0], [49.4, 224.0], [49.5, 224.0], [49.6, 226.0], [49.7, 226.0], [49.8, 227.0], [49.9, 227.0], [50.0, 228.0], [50.1, 229.0], [50.2, 229.0], [50.3, 229.0], [50.4, 230.0], [50.5, 231.0], [50.6, 231.0], [50.7, 232.0], [50.8, 234.0], [50.9, 234.0], [51.0, 235.0], [51.1, 235.0], [51.2, 236.0], [51.3, 237.0], [51.4, 238.0], [51.5, 238.0], [51.6, 239.0], [51.7, 240.0], [51.8, 241.0], [51.9, 242.0], [52.0, 243.0], [52.1, 244.0], [52.2, 245.0], [52.3, 246.0], [52.4, 246.0], [52.5, 247.0], [52.6, 248.0], [52.7, 248.0], [52.8, 249.0], [52.9, 250.0], [53.0, 252.0], [53.1, 252.0], [53.2, 254.0], [53.3, 255.0], [53.4, 256.0], [53.5, 257.0], [53.6, 258.0], [53.7, 259.0], [53.8, 259.0], [53.9, 259.0], [54.0, 260.0], [54.1, 260.0], [54.2, 261.0], [54.3, 263.0], [54.4, 263.0], [54.5, 264.0], [54.6, 265.0], [54.7, 266.0], [54.8, 267.0], [54.9, 268.0], [55.0, 268.0], [55.1, 270.0], [55.2, 270.0], [55.3, 271.0], [55.4, 272.0], [55.5, 272.0], [55.6, 273.0], [55.7, 274.0], [55.8, 275.0], [55.9, 276.0], [56.0, 277.0], [56.1, 278.0], [56.2, 278.0], [56.3, 279.0], [56.4, 279.0], [56.5, 280.0], [56.6, 281.0], [56.7, 281.0], [56.8, 282.0], [56.9, 283.0], [57.0, 284.0], [57.1, 285.0], [57.2, 285.0], [57.3, 285.0], [57.4, 287.0], [57.5, 287.0], [57.6, 289.0], [57.7, 290.0], [57.8, 292.0], [57.9, 293.0], [58.0, 295.0], [58.1, 296.0], [58.2, 296.0], [58.3, 297.0], [58.4, 298.0], [58.5, 298.0], [58.6, 299.0], [58.7, 301.0], [58.8, 302.0], [58.9, 303.0], [59.0, 304.0], [59.1, 305.0], [59.2, 306.0], [59.3, 307.0], [59.4, 308.0], [59.5, 308.0], [59.6, 309.0], [59.7, 310.0], [59.8, 311.0], [59.9, 312.0], [60.0, 312.0], [60.1, 313.0], [60.2, 314.0], [60.3, 315.0], [60.4, 316.0], [60.5, 316.0], [60.6, 318.0], [60.7, 319.0], [60.8, 319.0], [60.9, 320.0], [61.0, 321.0], [61.1, 321.0], [61.2, 322.0], [61.3, 323.0], [61.4, 323.0], [61.5, 325.0], [61.6, 326.0], [61.7, 327.0], [61.8, 328.0], [61.9, 328.0], [62.0, 329.0], [62.1, 330.0], [62.2, 331.0], [62.3, 332.0], [62.4, 332.0], [62.5, 333.0], [62.6, 334.0], [62.7, 335.0], [62.8, 336.0], [62.9, 337.0], [63.0, 337.0], [63.1, 338.0], [63.2, 340.0], [63.3, 341.0], [63.4, 342.0], [63.5, 343.0], [63.6, 344.0], [63.7, 344.0], [63.8, 345.0], [63.9, 346.0], [64.0, 347.0], [64.1, 348.0], [64.2, 349.0], [64.3, 350.0], [64.4, 351.0], [64.5, 352.0], [64.6, 352.0], [64.7, 353.0], [64.8, 353.0], [64.9, 354.0], [65.0, 355.0], [65.1, 356.0], [65.2, 356.0], [65.3, 358.0], [65.4, 358.0], [65.5, 360.0], [65.6, 361.0], [65.7, 362.0], [65.8, 362.0], [65.9, 363.0], [66.0, 364.0], [66.1, 365.0], [66.2, 366.0], [66.3, 367.0], [66.4, 368.0], [66.5, 369.0], [66.6, 369.0], [66.7, 370.0], [66.8, 373.0], [66.9, 374.0], [67.0, 374.0], [67.1, 375.0], [67.2, 376.0], [67.3, 377.0], [67.4, 378.0], [67.5, 379.0], [67.6, 380.0], [67.7, 381.0], [67.8, 382.0], [67.9, 383.0], [68.0, 384.0], [68.1, 385.0], [68.2, 386.0], [68.3, 388.0], [68.4, 389.0], [68.5, 389.0], [68.6, 390.0], [68.7, 392.0], [68.8, 392.0], [68.9, 393.0], [69.0, 394.0], [69.1, 394.0], [69.2, 395.0], [69.3, 396.0], [69.4, 397.0], [69.5, 398.0], [69.6, 399.0], [69.7, 400.0], [69.8, 401.0], [69.9, 402.0], [70.0, 402.0], [70.1, 403.0], [70.2, 404.0], [70.3, 405.0], [70.4, 406.0], [70.5, 407.0], [70.6, 408.0], [70.7, 409.0], [70.8, 411.0], [70.9, 411.0], [71.0, 412.0], [71.1, 413.0], [71.2, 415.0], [71.3, 415.0], [71.4, 416.0], [71.5, 418.0], [71.6, 418.0], [71.7, 420.0], [71.8, 421.0], [71.9, 422.0], [72.0, 423.0], [72.1, 424.0], [72.2, 425.0], [72.3, 425.0], [72.4, 426.0], [72.5, 427.0], [72.6, 428.0], [72.7, 429.0], [72.8, 430.0], [72.9, 431.0], [73.0, 432.0], [73.1, 433.0], [73.2, 434.0], [73.3, 435.0], [73.4, 437.0], [73.5, 438.0], [73.6, 438.0], [73.7, 439.0], [73.8, 440.0], [73.9, 442.0], [74.0, 443.0], [74.1, 443.0], [74.2, 445.0], [74.3, 446.0], [74.4, 448.0], [74.5, 449.0], [74.6, 449.0], [74.7, 450.0], [74.8, 451.0], [74.9, 452.0], [75.0, 453.0], [75.1, 454.0], [75.2, 455.0], [75.3, 457.0], [75.4, 458.0], [75.5, 459.0], [75.6, 460.0], [75.7, 461.0], [75.8, 462.0], [75.9, 463.0], [76.0, 464.0], [76.1, 465.0], [76.2, 465.0], [76.3, 467.0], [76.4, 467.0], [76.5, 469.0], [76.6, 470.0], [76.7, 471.0], [76.8, 472.0], [76.9, 475.0], [77.0, 476.0], [77.1, 478.0], [77.2, 478.0], [77.3, 479.0], [77.4, 479.0], [77.5, 481.0], [77.6, 482.0], [77.7, 482.0], [77.8, 483.0], [77.9, 485.0], [78.0, 485.0], [78.1, 486.0], [78.2, 487.0], [78.3, 488.0], [78.4, 489.0], [78.5, 490.0], [78.6, 491.0], [78.7, 491.0], [78.8, 492.0], [78.9, 493.0], [79.0, 496.0], [79.1, 498.0], [79.2, 500.0], [79.3, 500.0], [79.4, 501.0], [79.5, 503.0], [79.6, 504.0], [79.7, 505.0], [79.8, 507.0], [79.9, 508.0], [80.0, 508.0], [80.1, 510.0], [80.2, 511.0], [80.3, 512.0], [80.4, 514.0], [80.5, 514.0], [80.6, 516.0], [80.7, 516.0], [80.8, 517.0], [80.9, 518.0], [81.0, 519.0], [81.1, 520.0], [81.2, 521.0], [81.3, 522.0], [81.4, 522.0], [81.5, 524.0], [81.6, 525.0], [81.7, 525.0], [81.8, 526.0], [81.9, 527.0], [82.0, 529.0], [82.1, 530.0], [82.2, 532.0], [82.3, 533.0], [82.4, 533.0], [82.5, 535.0], [82.6, 536.0], [82.7, 536.0], [82.8, 537.0], [82.9, 538.0], [83.0, 539.0], [83.1, 540.0], [83.2, 541.0], [83.3, 541.0], [83.4, 543.0], [83.5, 544.0], [83.6, 545.0], [83.7, 546.0], [83.8, 547.0], [83.9, 549.0], [84.0, 550.0], [84.1, 551.0], [84.2, 554.0], [84.3, 555.0], [84.4, 556.0], [84.5, 556.0], [84.6, 557.0], [84.7, 558.0], [84.8, 560.0], [84.9, 561.0], [85.0, 564.0], [85.1, 565.0], [85.2, 566.0], [85.3, 568.0], [85.4, 569.0], [85.5, 570.0], [85.6, 571.0], [85.7, 571.0], [85.8, 573.0], [85.9, 575.0], [86.0, 576.0], [86.1, 577.0], [86.2, 578.0], [86.3, 579.0], [86.4, 582.0], [86.5, 583.0], [86.6, 585.0], [86.7, 587.0], [86.8, 588.0], [86.9, 590.0], [87.0, 591.0], [87.1, 592.0], [87.2, 594.0], [87.3, 596.0], [87.4, 597.0], [87.5, 599.0], [87.6, 601.0], [87.7, 602.0], [87.8, 603.0], [87.9, 604.0], [88.0, 606.0], [88.1, 608.0], [88.2, 611.0], [88.3, 613.0], [88.4, 614.0], [88.5, 616.0], [88.6, 618.0], [88.7, 620.0], [88.8, 621.0], [88.9, 622.0], [89.0, 624.0], [89.1, 625.0], [89.2, 628.0], [89.3, 631.0], [89.4, 632.0], [89.5, 634.0], [89.6, 635.0], [89.7, 636.0], [89.8, 637.0], [89.9, 639.0], [90.0, 643.0], [90.1, 646.0], [90.2, 648.0], [90.3, 651.0], [90.4, 654.0], [90.5, 657.0], [90.6, 662.0], [90.7, 665.0], [90.8, 667.0], [90.9, 669.0], [91.0, 670.0], [91.1, 671.0], [91.2, 674.0], [91.3, 677.0], [91.4, 681.0], [91.5, 685.0], [91.6, 690.0], [91.7, 694.0], [91.8, 699.0], [91.9, 703.0], [92.0, 705.0], [92.1, 710.0], [92.2, 713.0], [92.3, 715.0], [92.4, 715.0], [92.5, 717.0], [92.6, 721.0], [92.7, 734.0], [92.8, 738.0], [92.9, 743.0], [93.0, 751.0], [93.1, 755.0], [93.2, 763.0], [93.3, 765.0], [93.4, 771.0], [93.5, 776.0], [93.6, 784.0], [93.7, 789.0], [93.8, 800.0], [93.9, 810.0], [94.0, 822.0], [94.1, 830.0], [94.2, 835.0], [94.3, 845.0], [94.4, 865.0], [94.5, 878.0], [94.6, 905.0], [94.7, 930.0], [94.8, 957.0], [94.9, 965.0], [95.0, 985.0], [95.1, 1000.0], [95.2, 1041.0], [95.3, 1063.0], [95.4, 1110.0], [95.5, 1148.0], [95.6, 1191.0], [95.7, 1228.0], [95.8, 1288.0], [95.9, 1326.0], [96.0, 1392.0], [96.1, 1426.0], [96.2, 1472.0], [96.3, 1513.0], [96.4, 1597.0], [96.5, 1638.0], [96.6, 1708.0], [96.7, 1748.0], [96.8, 1779.0], [96.9, 1859.0], [97.0, 1983.0], [97.1, 2026.0], [97.2, 2151.0], [97.3, 2188.0], [97.4, 2333.0], [97.5, 2401.0], [97.6, 2470.0], [97.7, 2561.0], [97.8, 2637.0], [97.9, 2702.0], [98.0, 2833.0], [98.1, 2971.0], [98.2, 3031.0], [98.3, 3160.0], [98.4, 3265.0], [98.5, 3470.0], [98.6, 3702.0], [98.7, 3819.0], [98.8, 4005.0], [98.9, 4153.0], [99.0, 4507.0], [99.1, 5008.0], [99.2, 5372.0], [99.3, 7111.0], [99.4, 7709.0], [99.5, 8761.0], [99.6, 9361.0], [99.7, 9868.0], [99.8, 10921.0], [99.9, 12337.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 1659.0, "series": [{"data": [[0.0, 1659.0], [600.0, 223.0], [700.0, 102.0], [800.0, 42.0], [900.0, 26.0], [1000.0, 15.0], [1100.0, 12.0], [1200.0, 12.0], [1300.0, 9.0], [1400.0, 13.0], [1500.0, 8.0], [1600.0, 9.0], [1700.0, 11.0], [1800.0, 8.0], [1900.0, 6.0], [2000.0, 5.0], [2100.0, 8.0], [2200.0, 4.0], [2300.0, 4.0], [2400.0, 7.0], [2500.0, 8.0], [2600.0, 7.0], [2700.0, 4.0], [2800.0, 5.0], [2900.0, 5.0], [3000.0, 3.0], [3100.0, 6.0], [3300.0, 4.0], [3200.0, 3.0], [3400.0, 2.0], [3500.0, 1.0], [3600.0, 3.0], [3700.0, 4.0], [3800.0, 5.0], [3900.0, 1.0], [4000.0, 4.0], [4100.0, 3.0], [4500.0, 1.0], [4400.0, 4.0], [4600.0, 1.0], [4700.0, 2.0], [4800.0, 1.0], [5100.0, 4.0], [5000.0, 1.0], [5300.0, 1.0], [5400.0, 1.0], [5700.0, 1.0], [6800.0, 1.0], [7000.0, 1.0], [7100.0, 1.0], [7200.0, 1.0], [7400.0, 1.0], [7600.0, 1.0], [7500.0, 1.0], [7900.0, 2.0], [7700.0, 1.0], [7800.0, 1.0], [8700.0, 1.0], [8500.0, 1.0], [8600.0, 1.0], [8900.0, 2.0], [8800.0, 1.0], [9100.0, 1.0], [9300.0, 3.0], [9500.0, 1.0], [9700.0, 1.0], [9800.0, 1.0], [10000.0, 1.0], [10500.0, 1.0], [10700.0, 1.0], [10900.0, 1.0], [10800.0, 1.0], [11600.0, 3.0], [12200.0, 1.0], [12700.0, 2.0], [12500.0, 1.0], [12300.0, 1.0], [12900.0, 1.0], [13100.0, 1.0], [100.0, 732.0], [200.0, 651.0], [300.0, 572.0], [400.0, 496.0], [500.0, 432.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 13100.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 194.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 4116.0, "series": [{"data": [[0.0, 4116.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 880.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 194.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.935988620199147, "minX": 1.60505928E12, "maxY": 10.0, "series": [{"data": [[1.60505928E12, 9.980645161290326], [1.60505946E12, 10.0], [1.60505934E12, 10.0], [1.60505952E12, 9.935988620199147], [1.6050594E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60505952E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 367.0, "minX": 1.0, "maxY": 7807.0, "series": [{"data": [[8.0, 441.0], [4.0, 449.0], [2.0, 557.0], [1.0, 7807.0], [9.0, 410.5], [10.0, 420.7187560363145], [5.0, 367.0], [6.0, 375.0], [3.0, 567.0], [7.0, 569.3333333333334]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.98959537572256, 422.27244701348724]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 3487.9, "minX": 1.60505928E12, "maxY": 6801984.783333333, "series": [{"data": [[1.60505928E12, 1707383.9], [1.60505946E12, 6129777.633333334], [1.60505934E12, 5614668.683333334], [1.60505952E12, 2708345.1166666667], [1.6050594E12, 6801984.783333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60505928E12, 3487.9], [1.60505946E12, 9545.266666666666], [1.60505934E12, 7897.15], [1.60505952E12, 5520.2], [1.6050594E12, 13491.116666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60505952E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 263.3806451612904, "minX": 1.60505928E12, "maxY": 562.820636451302, "series": [{"data": [[1.60505928E12, 263.3806451612904], [1.60505946E12, 470.1174577634758], [1.60505934E12, 562.820636451302], [1.60505952E12, 428.8847795163588], [1.6050594E12, 344.2106773823194]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60505952E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 261.93118279569927, "minX": 1.60505928E12, "maxY": 559.3635486981684, "series": [{"data": [[1.60505928E12, 261.93118279569927], [1.60505946E12, 467.6806114239748], [1.60505934E12, 559.3635486981684], [1.60505952E12, 426.91180654338547], [1.6050594E12, 342.1630309988525]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60505952E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.00516647531572905, "minX": 1.60505928E12, "maxY": 0.18064516129032307, "series": [{"data": [[1.60505928E12, 0.18064516129032307], [1.60505946E12, 0.006436041834271931], [1.60505934E12, 0.006750241080038582], [1.60505952E12, 0.0085348506401138], [1.6050594E12, 0.00516647531572905]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60505952E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 18.0, "minX": 1.60505928E12, "maxY": 13130.0, "series": [{"data": [[1.60505928E12, 4786.0], [1.60505946E12, 9361.0], [1.60505934E12, 10775.0], [1.60505952E12, 13130.0], [1.6050594E12, 12988.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60505928E12, 28.0], [1.60505946E12, 26.0], [1.60505934E12, 27.0], [1.60505952E12, 28.0], [1.6050594E12, 26.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60505928E12, 28.0], [1.60505946E12, 26.0], [1.60505934E12, 27.0], [1.60505952E12, 28.0], [1.6050594E12, 26.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60505928E12, 28.0], [1.60505946E12, 26.0], [1.60505934E12, 27.0], [1.60505952E12, 28.0], [1.6050594E12, 26.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60505928E12, 24.0], [1.60505946E12, 18.0], [1.60505934E12, 20.0], [1.60505952E12, 20.0], [1.6050594E12, 21.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60505928E12, 212.0], [1.60505946E12, 305.0], [1.60505934E12, 281.0], [1.60505952E12, 192.0], [1.6050594E12, 198.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60505952E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 61.5, "minX": 1.0, "maxY": 3067.5, "series": [{"data": [[2.0, 2029.5], [3.0, 2212.5], [4.0, 549.5], [5.0, 3067.5], [6.0, 547.5], [7.0, 387.0], [8.0, 494.5], [9.0, 363.0], [10.0, 417.0], [11.0, 365.5], [12.0, 349.5], [13.0, 368.0], [14.0, 75.5], [15.0, 224.0], [16.0, 227.5], [17.0, 333.5], [18.0, 521.5], [19.0, 463.5], [20.0, 475.0], [21.0, 309.0], [22.0, 408.5], [23.0, 378.0], [24.0, 209.0], [25.0, 234.0], [26.0, 369.5], [27.0, 338.0], [28.0, 354.5], [29.0, 166.0], [30.0, 374.0], [31.0, 278.0], [32.0, 247.0], [33.0, 173.0], [34.0, 229.5], [35.0, 179.0], [37.0, 203.0], [36.0, 226.0], [39.0, 211.0], [41.0, 265.0], [42.0, 188.0], [44.0, 92.0], [45.0, 193.0], [47.0, 180.0], [46.0, 198.5], [49.0, 110.0], [53.0, 173.0], [52.0, 103.0], [55.0, 113.0], [58.0, 157.0], [60.0, 63.0], [62.0, 78.5], [67.0, 63.0], [66.0, 71.5], [74.0, 61.5], [88.0, 73.0], [1.0, 2773.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 88.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 61.0, "minX": 1.0, "maxY": 3059.5, "series": [{"data": [[2.0, 2029.0], [3.0, 2212.5], [4.0, 548.0], [5.0, 3059.5], [6.0, 545.0], [7.0, 383.0], [8.0, 492.0], [9.0, 359.0], [10.0, 413.0], [11.0, 361.5], [12.0, 346.5], [13.0, 367.0], [14.0, 75.0], [15.0, 223.5], [16.0, 227.5], [17.0, 330.5], [18.0, 517.5], [19.0, 456.0], [20.0, 463.5], [21.0, 309.0], [22.0, 401.5], [23.0, 376.0], [24.0, 208.0], [25.0, 233.5], [26.0, 359.5], [27.0, 338.0], [28.0, 351.0], [29.0, 165.0], [30.0, 362.0], [31.0, 277.0], [32.0, 247.0], [33.0, 173.0], [34.0, 224.5], [35.0, 179.0], [37.0, 203.0], [36.0, 224.5], [39.0, 210.0], [41.0, 255.0], [42.0, 187.5], [44.0, 90.0], [45.0, 192.0], [47.0, 180.0], [46.0, 198.0], [49.0, 108.0], [53.0, 173.0], [52.0, 102.5], [55.0, 113.0], [58.0, 157.0], [60.0, 63.0], [62.0, 78.5], [67.0, 63.0], [66.0, 71.0], [74.0, 61.0], [88.0, 73.0], [1.0, 2763.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 88.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 7.916666666666667, "minX": 1.60505928E12, "maxY": 29.033333333333335, "series": [{"data": [[1.60505928E12, 7.916666666666667], [1.60505946E12, 20.716666666666665], [1.60505934E12, 17.283333333333335], [1.60505952E12, 11.55], [1.6050594E12, 29.033333333333335]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60505952E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 7.75, "minX": 1.60505928E12, "maxY": 29.033333333333335, "series": [{"data": [[1.60505928E12, 7.75], [1.60505946E12, 20.716666666666665], [1.60505934E12, 17.283333333333335], [1.60505952E12, 11.716666666666667], [1.6050594E12, 29.033333333333335]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60505952E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 7.75, "minX": 1.60505928E12, "maxY": 29.033333333333335, "series": [{"data": [[1.60505928E12, 7.75], [1.60505946E12, 20.716666666666665], [1.60505934E12, 17.283333333333335], [1.60505952E12, 11.716666666666667], [1.6050594E12, 29.033333333333335]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60505952E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 7.75, "minX": 1.60505928E12, "maxY": 29.033333333333335, "series": [{"data": [[1.60505928E12, 7.75], [1.60505946E12, 20.716666666666665], [1.60505934E12, 17.283333333333335], [1.60505952E12, 11.716666666666667], [1.6050594E12, 29.033333333333335]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60505952E12, "title": "Total Transactions Per Second"}},
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

