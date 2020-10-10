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
        data: {"result": {"minY": 19.0, "minX": 0.0, "maxY": 23176.0, "series": [{"data": [[0.0, 19.0], [0.1, 21.0], [0.2, 22.0], [0.3, 23.0], [0.4, 24.0], [0.5, 25.0], [0.6, 25.0], [0.7, 26.0], [0.8, 26.0], [0.9, 27.0], [1.0, 27.0], [1.1, 27.0], [1.2, 28.0], [1.3, 28.0], [1.4, 29.0], [1.5, 29.0], [1.6, 29.0], [1.7, 29.0], [1.8, 30.0], [1.9, 30.0], [2.0, 30.0], [2.1, 30.0], [2.2, 31.0], [2.3, 31.0], [2.4, 31.0], [2.5, 31.0], [2.6, 32.0], [2.7, 32.0], [2.8, 32.0], [2.9, 32.0], [3.0, 32.0], [3.1, 33.0], [3.2, 33.0], [3.3, 33.0], [3.4, 33.0], [3.5, 34.0], [3.6, 34.0], [3.7, 34.0], [3.8, 34.0], [3.9, 34.0], [4.0, 34.0], [4.1, 35.0], [4.2, 35.0], [4.3, 35.0], [4.4, 35.0], [4.5, 35.0], [4.6, 36.0], [4.7, 36.0], [4.8, 36.0], [4.9, 36.0], [5.0, 36.0], [5.1, 37.0], [5.2, 37.0], [5.3, 37.0], [5.4, 37.0], [5.5, 37.0], [5.6, 37.0], [5.7, 38.0], [5.8, 38.0], [5.9, 38.0], [6.0, 38.0], [6.1, 38.0], [6.2, 39.0], [6.3, 39.0], [6.4, 39.0], [6.5, 39.0], [6.6, 39.0], [6.7, 40.0], [6.8, 40.0], [6.9, 40.0], [7.0, 40.0], [7.1, 40.0], [7.2, 40.0], [7.3, 41.0], [7.4, 41.0], [7.5, 41.0], [7.6, 41.0], [7.7, 41.0], [7.8, 41.0], [7.9, 42.0], [8.0, 42.0], [8.1, 42.0], [8.2, 42.0], [8.3, 42.0], [8.4, 43.0], [8.5, 43.0], [8.6, 43.0], [8.7, 43.0], [8.8, 43.0], [8.9, 43.0], [9.0, 43.0], [9.1, 43.0], [9.2, 44.0], [9.3, 44.0], [9.4, 44.0], [9.5, 44.0], [9.6, 44.0], [9.7, 44.0], [9.8, 45.0], [9.9, 45.0], [10.0, 45.0], [10.1, 45.0], [10.2, 45.0], [10.3, 46.0], [10.4, 46.0], [10.5, 46.0], [10.6, 46.0], [10.7, 46.0], [10.8, 46.0], [10.9, 46.0], [11.0, 47.0], [11.1, 47.0], [11.2, 47.0], [11.3, 47.0], [11.4, 47.0], [11.5, 47.0], [11.6, 48.0], [11.7, 48.0], [11.8, 48.0], [11.9, 48.0], [12.0, 48.0], [12.1, 49.0], [12.2, 49.0], [12.3, 49.0], [12.4, 49.0], [12.5, 49.0], [12.6, 49.0], [12.7, 50.0], [12.8, 50.0], [12.9, 50.0], [13.0, 50.0], [13.1, 50.0], [13.2, 51.0], [13.3, 51.0], [13.4, 51.0], [13.5, 51.0], [13.6, 51.0], [13.7, 52.0], [13.8, 52.0], [13.9, 52.0], [14.0, 52.0], [14.1, 52.0], [14.2, 52.0], [14.3, 53.0], [14.4, 53.0], [14.5, 53.0], [14.6, 53.0], [14.7, 54.0], [14.8, 54.0], [14.9, 54.0], [15.0, 54.0], [15.1, 54.0], [15.2, 55.0], [15.3, 55.0], [15.4, 55.0], [15.5, 55.0], [15.6, 55.0], [15.7, 55.0], [15.8, 55.0], [15.9, 56.0], [16.0, 56.0], [16.1, 56.0], [16.2, 56.0], [16.3, 56.0], [16.4, 57.0], [16.5, 57.0], [16.6, 57.0], [16.7, 57.0], [16.8, 57.0], [16.9, 57.0], [17.0, 57.0], [17.1, 57.0], [17.2, 58.0], [17.3, 58.0], [17.4, 58.0], [17.5, 58.0], [17.6, 59.0], [17.7, 59.0], [17.8, 59.0], [17.9, 59.0], [18.0, 60.0], [18.1, 60.0], [18.2, 60.0], [18.3, 61.0], [18.4, 61.0], [18.5, 61.0], [18.6, 61.0], [18.7, 61.0], [18.8, 61.0], [18.9, 61.0], [19.0, 62.0], [19.1, 62.0], [19.2, 62.0], [19.3, 62.0], [19.4, 62.0], [19.5, 63.0], [19.6, 63.0], [19.7, 63.0], [19.8, 63.0], [19.9, 64.0], [20.0, 64.0], [20.1, 64.0], [20.2, 65.0], [20.3, 65.0], [20.4, 65.0], [20.5, 65.0], [20.6, 65.0], [20.7, 65.0], [20.8, 66.0], [20.9, 66.0], [21.0, 66.0], [21.1, 66.0], [21.2, 66.0], [21.3, 67.0], [21.4, 67.0], [21.5, 67.0], [21.6, 67.0], [21.7, 67.0], [21.8, 68.0], [21.9, 68.0], [22.0, 69.0], [22.1, 69.0], [22.2, 69.0], [22.3, 69.0], [22.4, 70.0], [22.5, 70.0], [22.6, 70.0], [22.7, 70.0], [22.8, 71.0], [22.9, 71.0], [23.0, 71.0], [23.1, 71.0], [23.2, 72.0], [23.3, 72.0], [23.4, 72.0], [23.5, 73.0], [23.6, 73.0], [23.7, 73.0], [23.8, 73.0], [23.9, 73.0], [24.0, 74.0], [24.1, 74.0], [24.2, 74.0], [24.3, 74.0], [24.4, 74.0], [24.5, 75.0], [24.6, 75.0], [24.7, 75.0], [24.8, 75.0], [24.9, 75.0], [25.0, 76.0], [25.1, 76.0], [25.2, 77.0], [25.3, 77.0], [25.4, 77.0], [25.5, 78.0], [25.6, 78.0], [25.7, 78.0], [25.8, 78.0], [25.9, 78.0], [26.0, 79.0], [26.1, 79.0], [26.2, 80.0], [26.3, 80.0], [26.4, 81.0], [26.5, 81.0], [26.6, 81.0], [26.7, 81.0], [26.8, 81.0], [26.9, 82.0], [27.0, 82.0], [27.1, 82.0], [27.2, 83.0], [27.3, 83.0], [27.4, 84.0], [27.5, 84.0], [27.6, 84.0], [27.7, 84.0], [27.8, 85.0], [27.9, 85.0], [28.0, 85.0], [28.1, 86.0], [28.2, 86.0], [28.3, 86.0], [28.4, 87.0], [28.5, 87.0], [28.6, 87.0], [28.7, 87.0], [28.8, 88.0], [28.9, 88.0], [29.0, 89.0], [29.1, 89.0], [29.2, 90.0], [29.3, 90.0], [29.4, 91.0], [29.5, 91.0], [29.6, 91.0], [29.7, 92.0], [29.8, 92.0], [29.9, 92.0], [30.0, 93.0], [30.1, 93.0], [30.2, 93.0], [30.3, 93.0], [30.4, 94.0], [30.5, 94.0], [30.6, 95.0], [30.7, 95.0], [30.8, 95.0], [30.9, 97.0], [31.0, 97.0], [31.1, 97.0], [31.2, 98.0], [31.3, 98.0], [31.4, 99.0], [31.5, 99.0], [31.6, 100.0], [31.7, 100.0], [31.8, 101.0], [31.9, 101.0], [32.0, 102.0], [32.1, 102.0], [32.2, 103.0], [32.3, 103.0], [32.4, 104.0], [32.5, 104.0], [32.6, 105.0], [32.7, 105.0], [32.8, 106.0], [32.9, 106.0], [33.0, 107.0], [33.1, 108.0], [33.2, 109.0], [33.3, 109.0], [33.4, 110.0], [33.5, 111.0], [33.6, 112.0], [33.7, 113.0], [33.8, 114.0], [33.9, 115.0], [34.0, 116.0], [34.1, 116.0], [34.2, 117.0], [34.3, 118.0], [34.4, 119.0], [34.5, 121.0], [34.6, 122.0], [34.7, 123.0], [34.8, 124.0], [34.9, 125.0], [35.0, 125.0], [35.1, 127.0], [35.2, 128.0], [35.3, 130.0], [35.4, 130.0], [35.5, 131.0], [35.6, 131.0], [35.7, 132.0], [35.8, 133.0], [35.9, 135.0], [36.0, 135.0], [36.1, 136.0], [36.2, 137.0], [36.3, 138.0], [36.4, 139.0], [36.5, 140.0], [36.6, 141.0], [36.7, 142.0], [36.8, 143.0], [36.9, 144.0], [37.0, 145.0], [37.1, 146.0], [37.2, 147.0], [37.3, 148.0], [37.4, 149.0], [37.5, 151.0], [37.6, 151.0], [37.7, 153.0], [37.8, 154.0], [37.9, 155.0], [38.0, 155.0], [38.1, 156.0], [38.2, 156.0], [38.3, 157.0], [38.4, 158.0], [38.5, 159.0], [38.6, 159.0], [38.7, 160.0], [38.8, 161.0], [38.9, 162.0], [39.0, 162.0], [39.1, 163.0], [39.2, 164.0], [39.3, 165.0], [39.4, 165.0], [39.5, 166.0], [39.6, 166.0], [39.7, 167.0], [39.8, 168.0], [39.9, 169.0], [40.0, 170.0], [40.1, 170.0], [40.2, 171.0], [40.3, 171.0], [40.4, 171.0], [40.5, 172.0], [40.6, 173.0], [40.7, 173.0], [40.8, 174.0], [40.9, 175.0], [41.0, 176.0], [41.1, 177.0], [41.2, 177.0], [41.3, 178.0], [41.4, 179.0], [41.5, 180.0], [41.6, 181.0], [41.7, 181.0], [41.8, 182.0], [41.9, 182.0], [42.0, 183.0], [42.1, 184.0], [42.2, 184.0], [42.3, 184.0], [42.4, 185.0], [42.5, 186.0], [42.6, 186.0], [42.7, 187.0], [42.8, 188.0], [42.9, 189.0], [43.0, 190.0], [43.1, 191.0], [43.2, 191.0], [43.3, 192.0], [43.4, 192.0], [43.5, 192.0], [43.6, 193.0], [43.7, 194.0], [43.8, 194.0], [43.9, 195.0], [44.0, 196.0], [44.1, 196.0], [44.2, 197.0], [44.3, 198.0], [44.4, 198.0], [44.5, 199.0], [44.6, 199.0], [44.7, 200.0], [44.8, 201.0], [44.9, 201.0], [45.0, 201.0], [45.1, 202.0], [45.2, 203.0], [45.3, 203.0], [45.4, 204.0], [45.5, 205.0], [45.6, 206.0], [45.7, 206.0], [45.8, 207.0], [45.9, 208.0], [46.0, 208.0], [46.1, 209.0], [46.2, 209.0], [46.3, 210.0], [46.4, 211.0], [46.5, 212.0], [46.6, 212.0], [46.7, 213.0], [46.8, 213.0], [46.9, 214.0], [47.0, 215.0], [47.1, 215.0], [47.2, 216.0], [47.3, 217.0], [47.4, 218.0], [47.5, 218.0], [47.6, 219.0], [47.7, 220.0], [47.8, 220.0], [47.9, 221.0], [48.0, 222.0], [48.1, 222.0], [48.2, 223.0], [48.3, 223.0], [48.4, 224.0], [48.5, 224.0], [48.6, 225.0], [48.7, 226.0], [48.8, 227.0], [48.9, 227.0], [49.0, 228.0], [49.1, 228.0], [49.2, 229.0], [49.3, 230.0], [49.4, 230.0], [49.5, 231.0], [49.6, 232.0], [49.7, 232.0], [49.8, 233.0], [49.9, 234.0], [50.0, 235.0], [50.1, 235.0], [50.2, 236.0], [50.3, 237.0], [50.4, 237.0], [50.5, 238.0], [50.6, 238.0], [50.7, 239.0], [50.8, 240.0], [50.9, 240.0], [51.0, 241.0], [51.1, 241.0], [51.2, 242.0], [51.3, 243.0], [51.4, 245.0], [51.5, 245.0], [51.6, 246.0], [51.7, 246.0], [51.8, 248.0], [51.9, 250.0], [52.0, 250.0], [52.1, 251.0], [52.2, 252.0], [52.3, 254.0], [52.4, 256.0], [52.5, 256.0], [52.6, 257.0], [52.7, 258.0], [52.8, 258.0], [52.9, 260.0], [53.0, 261.0], [53.1, 262.0], [53.2, 263.0], [53.3, 264.0], [53.4, 265.0], [53.5, 266.0], [53.6, 266.0], [53.7, 267.0], [53.8, 268.0], [53.9, 268.0], [54.0, 269.0], [54.1, 269.0], [54.2, 270.0], [54.3, 270.0], [54.4, 271.0], [54.5, 272.0], [54.6, 273.0], [54.7, 273.0], [54.8, 273.0], [54.9, 275.0], [55.0, 276.0], [55.1, 276.0], [55.2, 277.0], [55.3, 277.0], [55.4, 278.0], [55.5, 279.0], [55.6, 280.0], [55.7, 281.0], [55.8, 282.0], [55.9, 283.0], [56.0, 284.0], [56.1, 284.0], [56.2, 286.0], [56.3, 287.0], [56.4, 288.0], [56.5, 289.0], [56.6, 291.0], [56.7, 291.0], [56.8, 291.0], [56.9, 292.0], [57.0, 293.0], [57.1, 294.0], [57.2, 295.0], [57.3, 297.0], [57.4, 297.0], [57.5, 297.0], [57.6, 299.0], [57.7, 299.0], [57.8, 300.0], [57.9, 301.0], [58.0, 302.0], [58.1, 302.0], [58.2, 303.0], [58.3, 305.0], [58.4, 307.0], [58.5, 309.0], [58.6, 310.0], [58.7, 311.0], [58.8, 312.0], [58.9, 313.0], [59.0, 315.0], [59.1, 316.0], [59.2, 318.0], [59.3, 319.0], [59.4, 320.0], [59.5, 321.0], [59.6, 322.0], [59.7, 323.0], [59.8, 324.0], [59.9, 325.0], [60.0, 326.0], [60.1, 327.0], [60.2, 328.0], [60.3, 329.0], [60.4, 330.0], [60.5, 331.0], [60.6, 332.0], [60.7, 333.0], [60.8, 334.0], [60.9, 335.0], [61.0, 336.0], [61.1, 337.0], [61.2, 338.0], [61.3, 340.0], [61.4, 340.0], [61.5, 341.0], [61.6, 341.0], [61.7, 342.0], [61.8, 342.0], [61.9, 343.0], [62.0, 344.0], [62.1, 345.0], [62.2, 346.0], [62.3, 347.0], [62.4, 347.0], [62.5, 348.0], [62.6, 348.0], [62.7, 349.0], [62.8, 351.0], [62.9, 352.0], [63.0, 353.0], [63.1, 353.0], [63.2, 354.0], [63.3, 355.0], [63.4, 356.0], [63.5, 357.0], [63.6, 358.0], [63.7, 359.0], [63.8, 360.0], [63.9, 362.0], [64.0, 363.0], [64.1, 364.0], [64.2, 365.0], [64.3, 365.0], [64.4, 366.0], [64.5, 367.0], [64.6, 369.0], [64.7, 370.0], [64.8, 370.0], [64.9, 371.0], [65.0, 372.0], [65.1, 373.0], [65.2, 374.0], [65.3, 374.0], [65.4, 375.0], [65.5, 376.0], [65.6, 378.0], [65.7, 379.0], [65.8, 380.0], [65.9, 380.0], [66.0, 381.0], [66.1, 382.0], [66.2, 383.0], [66.3, 384.0], [66.4, 385.0], [66.5, 386.0], [66.6, 387.0], [66.7, 388.0], [66.8, 389.0], [66.9, 390.0], [67.0, 391.0], [67.1, 393.0], [67.2, 394.0], [67.3, 395.0], [67.4, 395.0], [67.5, 396.0], [67.6, 398.0], [67.7, 398.0], [67.8, 400.0], [67.9, 401.0], [68.0, 401.0], [68.1, 402.0], [68.2, 403.0], [68.3, 404.0], [68.4, 405.0], [68.5, 406.0], [68.6, 406.0], [68.7, 407.0], [68.8, 408.0], [68.9, 409.0], [69.0, 410.0], [69.1, 410.0], [69.2, 412.0], [69.3, 413.0], [69.4, 414.0], [69.5, 414.0], [69.6, 415.0], [69.7, 417.0], [69.8, 418.0], [69.9, 419.0], [70.0, 421.0], [70.1, 422.0], [70.2, 423.0], [70.3, 424.0], [70.4, 425.0], [70.5, 425.0], [70.6, 427.0], [70.7, 428.0], [70.8, 429.0], [70.9, 430.0], [71.0, 431.0], [71.1, 432.0], [71.2, 432.0], [71.3, 433.0], [71.4, 434.0], [71.5, 434.0], [71.6, 436.0], [71.7, 436.0], [71.8, 437.0], [71.9, 439.0], [72.0, 441.0], [72.1, 443.0], [72.2, 444.0], [72.3, 445.0], [72.4, 445.0], [72.5, 448.0], [72.6, 448.0], [72.7, 449.0], [72.8, 450.0], [72.9, 452.0], [73.0, 453.0], [73.1, 454.0], [73.2, 455.0], [73.3, 457.0], [73.4, 458.0], [73.5, 460.0], [73.6, 460.0], [73.7, 461.0], [73.8, 462.0], [73.9, 464.0], [74.0, 465.0], [74.1, 466.0], [74.2, 467.0], [74.3, 468.0], [74.4, 469.0], [74.5, 470.0], [74.6, 471.0], [74.7, 472.0], [74.8, 474.0], [74.9, 475.0], [75.0, 476.0], [75.1, 476.0], [75.2, 477.0], [75.3, 478.0], [75.4, 480.0], [75.5, 482.0], [75.6, 483.0], [75.7, 485.0], [75.8, 485.0], [75.9, 486.0], [76.0, 488.0], [76.1, 489.0], [76.2, 490.0], [76.3, 491.0], [76.4, 493.0], [76.5, 493.0], [76.6, 495.0], [76.7, 496.0], [76.8, 497.0], [76.9, 499.0], [77.0, 501.0], [77.1, 501.0], [77.2, 502.0], [77.3, 503.0], [77.4, 504.0], [77.5, 506.0], [77.6, 506.0], [77.7, 508.0], [77.8, 508.0], [77.9, 510.0], [78.0, 510.0], [78.1, 514.0], [78.2, 515.0], [78.3, 516.0], [78.4, 517.0], [78.5, 518.0], [78.6, 520.0], [78.7, 521.0], [78.8, 522.0], [78.9, 523.0], [79.0, 524.0], [79.1, 525.0], [79.2, 525.0], [79.3, 525.0], [79.4, 526.0], [79.5, 527.0], [79.6, 528.0], [79.7, 529.0], [79.8, 530.0], [79.9, 532.0], [80.0, 533.0], [80.1, 534.0], [80.2, 535.0], [80.3, 536.0], [80.4, 536.0], [80.5, 537.0], [80.6, 538.0], [80.7, 539.0], [80.8, 540.0], [80.9, 541.0], [81.0, 543.0], [81.1, 544.0], [81.2, 545.0], [81.3, 546.0], [81.4, 548.0], [81.5, 550.0], [81.6, 550.0], [81.7, 553.0], [81.8, 553.0], [81.9, 554.0], [82.0, 556.0], [82.1, 556.0], [82.2, 557.0], [82.3, 558.0], [82.4, 560.0], [82.5, 562.0], [82.6, 564.0], [82.7, 564.0], [82.8, 566.0], [82.9, 567.0], [83.0, 569.0], [83.1, 570.0], [83.2, 571.0], [83.3, 573.0], [83.4, 573.0], [83.5, 574.0], [83.6, 575.0], [83.7, 575.0], [83.8, 577.0], [83.9, 579.0], [84.0, 580.0], [84.1, 582.0], [84.2, 584.0], [84.3, 585.0], [84.4, 587.0], [84.5, 588.0], [84.6, 589.0], [84.7, 590.0], [84.8, 592.0], [84.9, 593.0], [85.0, 594.0], [85.1, 595.0], [85.2, 596.0], [85.3, 598.0], [85.4, 599.0], [85.5, 600.0], [85.6, 602.0], [85.7, 604.0], [85.8, 604.0], [85.9, 605.0], [86.0, 607.0], [86.1, 608.0], [86.2, 608.0], [86.3, 610.0], [86.4, 611.0], [86.5, 612.0], [86.6, 614.0], [86.7, 615.0], [86.8, 616.0], [86.9, 617.0], [87.0, 620.0], [87.1, 621.0], [87.2, 623.0], [87.3, 625.0], [87.4, 627.0], [87.5, 629.0], [87.6, 630.0], [87.7, 632.0], [87.8, 634.0], [87.9, 635.0], [88.0, 636.0], [88.1, 639.0], [88.2, 641.0], [88.3, 643.0], [88.4, 643.0], [88.5, 647.0], [88.6, 649.0], [88.7, 650.0], [88.8, 654.0], [88.9, 655.0], [89.0, 658.0], [89.1, 659.0], [89.2, 659.0], [89.3, 661.0], [89.4, 663.0], [89.5, 666.0], [89.6, 669.0], [89.7, 671.0], [89.8, 673.0], [89.9, 676.0], [90.0, 678.0], [90.1, 679.0], [90.2, 680.0], [90.3, 685.0], [90.4, 690.0], [90.5, 692.0], [90.6, 695.0], [90.7, 697.0], [90.8, 698.0], [90.9, 700.0], [91.0, 703.0], [91.1, 708.0], [91.2, 711.0], [91.3, 712.0], [91.4, 715.0], [91.5, 718.0], [91.6, 722.0], [91.7, 728.0], [91.8, 732.0], [91.9, 736.0], [92.0, 738.0], [92.1, 747.0], [92.2, 751.0], [92.3, 759.0], [92.4, 761.0], [92.5, 764.0], [92.6, 771.0], [92.7, 776.0], [92.8, 784.0], [92.9, 789.0], [93.0, 793.0], [93.1, 800.0], [93.2, 813.0], [93.3, 822.0], [93.4, 827.0], [93.5, 831.0], [93.6, 837.0], [93.7, 842.0], [93.8, 856.0], [93.9, 860.0], [94.0, 869.0], [94.1, 877.0], [94.2, 887.0], [94.3, 896.0], [94.4, 910.0], [94.5, 923.0], [94.6, 938.0], [94.7, 949.0], [94.8, 964.0], [94.9, 1007.0], [95.0, 1038.0], [95.1, 1066.0], [95.2, 1085.0], [95.3, 1119.0], [95.4, 1151.0], [95.5, 1167.0], [95.6, 1182.0], [95.7, 1232.0], [95.8, 1309.0], [95.9, 1333.0], [96.0, 1368.0], [96.1, 1407.0], [96.2, 1497.0], [96.3, 1575.0], [96.4, 1617.0], [96.5, 1674.0], [96.6, 1732.0], [96.7, 1784.0], [96.8, 1833.0], [96.9, 1885.0], [97.0, 1922.0], [97.1, 2086.0], [97.2, 2140.0], [97.3, 2207.0], [97.4, 2292.0], [97.5, 2424.0], [97.6, 2678.0], [97.7, 2812.0], [97.8, 2867.0], [97.9, 2909.0], [98.0, 3041.0], [98.1, 3134.0], [98.2, 3195.0], [98.3, 3297.0], [98.4, 3450.0], [98.5, 3571.0], [98.6, 3838.0], [98.7, 3986.0], [98.8, 4197.0], [98.9, 4567.0], [99.0, 4926.0], [99.1, 5630.0], [99.2, 6484.0], [99.3, 7777.0], [99.4, 8500.0], [99.5, 9214.0], [99.6, 10148.0], [99.7, 10801.0], [99.8, 11561.0], [99.9, 12314.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 1640.0, "series": [{"data": [[0.0, 1640.0], [600.0, 282.0], [700.0, 114.0], [800.0, 67.0], [900.0, 29.0], [1000.0, 19.0], [1100.0, 20.0], [1200.0, 6.0], [1300.0, 16.0], [1400.0, 7.0], [1500.0, 5.0], [1600.0, 13.0], [1700.0, 9.0], [1800.0, 10.0], [1900.0, 7.0], [2000.0, 3.0], [2100.0, 9.0], [2200.0, 8.0], [2300.0, 1.0], [2400.0, 5.0], [2600.0, 4.0], [2800.0, 11.0], [2700.0, 2.0], [2900.0, 4.0], [3000.0, 5.0], [3100.0, 8.0], [3200.0, 5.0], [3300.0, 3.0], [3400.0, 5.0], [3500.0, 4.0], [3700.0, 1.0], [3600.0, 2.0], [3800.0, 2.0], [3900.0, 5.0], [4000.0, 2.0], [4100.0, 2.0], [4200.0, 2.0], [4300.0, 1.0], [4600.0, 4.0], [4400.0, 1.0], [4500.0, 1.0], [4800.0, 1.0], [4900.0, 2.0], [5200.0, 3.0], [5600.0, 2.0], [5700.0, 1.0], [5900.0, 1.0], [6100.0, 1.0], [6400.0, 1.0], [6500.0, 1.0], [7400.0, 1.0], [7300.0, 1.0], [7500.0, 1.0], [7700.0, 1.0], [7800.0, 1.0], [8000.0, 1.0], [8500.0, 3.0], [8400.0, 1.0], [8200.0, 1.0], [8700.0, 1.0], [8900.0, 1.0], [9100.0, 1.0], [9200.0, 1.0], [9500.0, 2.0], [9700.0, 1.0], [10000.0, 1.0], [10200.0, 1.0], [10100.0, 1.0], [10300.0, 2.0], [10500.0, 1.0], [10800.0, 2.0], [11100.0, 1.0], [10900.0, 2.0], [11500.0, 1.0], [11700.0, 1.0], [12200.0, 2.0], [11900.0, 1.0], [12300.0, 2.0], [12700.0, 1.0], [12900.0, 1.0], [13100.0, 1.0], [23100.0, 1.0], [100.0, 677.0], [200.0, 680.0], [300.0, 521.0], [400.0, 476.0], [500.0, 440.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 23100.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 3995.0, "series": [{"data": [[0.0, 3995.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 999.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 196.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 1.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.937411095305833, "minX": 1.60231488E12, "maxY": 10.0, "series": [{"data": [[1.60231488E12, 10.0], [1.60231506E12, 10.0], [1.60231494E12, 10.0], [1.60231512E12, 9.937411095305833], [1.602315E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60231512E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 301.0, "minX": 1.0, "maxY": 7829.0, "series": [{"data": [[8.0, 415.0], [4.0, 489.0], [2.0, 610.0], [1.0, 7829.0], [9.0, 301.0], [10.0, 443.3795831725215], [5.0, 559.0], [3.0, 544.0], [7.0, 499.5]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.991523791177038, 444.8736274320952]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 4803.616666666667, "minX": 1.60231488E12, "maxY": 6213174.433333334, "series": [{"data": [[1.60231488E12, 2442913.216666667], [1.60231506E12, 5981318.066666666], [1.60231494E12, 5616423.816666666], [1.60231512E12, 2708347.9166666665], [1.602315E12, 6213174.433333334]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60231488E12, 4803.616666666667], [1.60231506E12, 8943.833333333334], [1.60231494E12, 7755.533333333334], [1.60231512E12, 5520.2], [1.602315E12, 12925.533333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60231512E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 339.7505980861244, "minX": 1.60231488E12, "maxY": 591.1691248770898, "series": [{"data": [[1.60231488E12, 365.87086614173205], [1.60231506E12, 513.3530927835035], [1.60231494E12, 591.1691248770898], [1.60231512E12, 441.23186344238974], [1.602315E12, 339.7505980861244]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60231512E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 337.44736842105226, "minX": 1.60231488E12, "maxY": 587.231071779745, "series": [{"data": [[1.60231488E12, 364.187401574803], [1.60231506E12, 510.9441580756028], [1.60231494E12, 587.231071779745], [1.60231512E12, 439.53911806543414], [1.602315E12, 337.44736842105226]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60231512E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.002844950213371267, "minX": 1.60231488E12, "maxY": 0.19527559055118096, "series": [{"data": [[1.60231488E12, 0.19527559055118096], [1.60231506E12, 0.005154639175257734], [1.60231494E12, 0.005899705014749265], [1.60231512E12, 0.002844950213371267], [1.602315E12, 0.010765550239234456]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60231512E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 19.0, "minX": 1.60231488E12, "maxY": 13117.0, "series": [{"data": [[1.60231488E12, 11173.0], [1.60231506E12, 9766.0], [1.60231494E12, 12339.0], [1.60231512E12, 12750.0], [1.602315E12, 13117.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60231488E12, 30.723999848365786], [1.60231506E12, 27.0], [1.60231494E12, 27.0], [1.60231512E12, 25.33599983215332], [1.602315E12, 26.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60231488E12, 31.0], [1.60231506E12, 27.0], [1.60231494E12, 27.0], [1.60231512E12, 25.96960006713867], [1.602315E12, 26.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60231488E12, 31.0], [1.60231506E12, 27.0], [1.60231494E12, 27.0], [1.60231512E12, 25.68799991607666], [1.602315E12, 26.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60231488E12, 24.0], [1.60231506E12, 22.0], [1.60231494E12, 19.0], [1.60231512E12, 21.0], [1.602315E12, 21.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60231488E12, 199.0], [1.60231506E12, 342.0], [1.60231494E12, 379.0], [1.60231512E12, 180.0], [1.602315E12, 198.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60231512E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 56.0, "minX": 1.0, "maxY": 23176.0, "series": [{"data": [[2.0, 56.0], [3.0, 3387.5], [4.0, 551.5], [5.0, 271.0], [6.0, 836.5], [7.0, 445.0], [8.0, 401.5], [9.0, 488.0], [10.0, 298.0], [11.0, 347.5], [12.0, 442.5], [13.0, 413.0], [14.0, 298.5], [15.0, 252.0], [16.0, 429.5], [17.0, 409.0], [18.0, 495.5], [19.0, 480.0], [20.0, 339.5], [21.0, 434.5], [22.0, 384.0], [23.0, 333.0], [24.0, 423.0], [25.0, 291.0], [26.0, 228.5], [27.0, 257.0], [28.0, 289.0], [29.0, 370.0], [30.0, 83.0], [31.0, 312.0], [33.0, 248.0], [32.0, 255.0], [34.0, 227.0], [35.0, 245.0], [36.0, 289.0], [37.0, 221.5], [39.0, 215.5], [38.0, 218.5], [41.0, 196.0], [40.0, 125.5], [42.0, 199.0], [44.0, 201.0], [45.0, 161.5], [46.0, 196.0], [47.0, 69.0], [48.0, 102.0], [49.0, 179.0], [51.0, 87.0], [52.0, 201.0], [53.0, 86.0], [54.0, 99.5], [57.0, 78.0], [59.0, 74.0], [62.0, 65.0], [66.0, 56.5], [68.0, 75.5], [82.0, 80.0], [1.0, 4385.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[27.0, 23176.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 82.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 56.0, "minX": 1.0, "maxY": 23176.0, "series": [{"data": [[2.0, 56.0], [3.0, 3376.5], [4.0, 549.5], [5.0, 271.0], [6.0, 830.5], [7.0, 443.0], [8.0, 399.0], [9.0, 487.0], [10.0, 294.5], [11.0, 345.5], [12.0, 435.5], [13.0, 409.0], [14.0, 297.5], [15.0, 251.5], [16.0, 423.0], [17.0, 400.0], [18.0, 487.5], [19.0, 476.0], [20.0, 336.5], [21.0, 428.0], [22.0, 380.0], [23.0, 330.0], [24.0, 415.0], [25.0, 291.0], [26.0, 227.5], [27.0, 257.0], [28.0, 288.5], [29.0, 364.0], [30.0, 83.0], [31.0, 307.0], [33.0, 245.5], [32.0, 253.0], [34.0, 226.5], [35.0, 243.0], [36.0, 287.5], [37.0, 220.5], [39.0, 215.5], [38.0, 216.0], [41.0, 196.0], [40.0, 123.5], [42.0, 198.0], [44.0, 200.0], [45.0, 161.0], [46.0, 195.5], [47.0, 68.0], [48.0, 101.0], [49.0, 178.0], [51.0, 86.0], [52.0, 200.0], [53.0, 85.0], [54.0, 98.5], [57.0, 78.0], [59.0, 74.0], [62.0, 64.5], [66.0, 56.5], [68.0, 75.5], [82.0, 78.5], [1.0, 4382.5]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[27.0, 23176.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 82.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 10.75, "minX": 1.60231488E12, "maxY": 27.866666666666667, "series": [{"data": [[1.60231488E12, 10.75], [1.60231506E12, 19.4], [1.60231494E12, 16.95], [1.60231512E12, 11.55], [1.602315E12, 27.866666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60231512E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60231488E12, "maxY": 27.85, "series": [{"data": [[1.60231488E12, 10.583333333333334], [1.60231506E12, 19.4], [1.60231494E12, 16.95], [1.60231512E12, 11.716666666666667], [1.602315E12, 27.85]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.602315E12, 0.016666666666666666]], "isOverall": false, "label": "500", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60231512E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60231488E12, "maxY": 27.85, "series": [{"data": [[1.60231488E12, 10.583333333333334], [1.60231506E12, 19.4], [1.60231494E12, 16.95], [1.60231512E12, 11.716666666666667], [1.602315E12, 27.85]], "isOverall": false, "label": "HTTP Request-success", "isController": false}, {"data": [[1.602315E12, 0.016666666666666666]], "isOverall": false, "label": "HTTP Request-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60231512E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60231488E12, "maxY": 27.85, "series": [{"data": [[1.60231488E12, 10.583333333333334], [1.60231506E12, 19.4], [1.60231494E12, 16.95], [1.60231512E12, 11.716666666666667], [1.602315E12, 27.85]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.602315E12, 0.016666666666666666]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60231512E12, "title": "Total Transactions Per Second"}},
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

