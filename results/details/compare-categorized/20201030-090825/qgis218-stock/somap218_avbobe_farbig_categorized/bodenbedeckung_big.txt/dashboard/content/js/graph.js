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
        data: {"result": {"minY": 17.0, "minX": 0.0, "maxY": 15196.0, "series": [{"data": [[0.0, 17.0], [0.1, 23.0], [0.2, 24.0], [0.3, 25.0], [0.4, 25.0], [0.5, 26.0], [0.6, 26.0], [0.7, 27.0], [0.8, 27.0], [0.9, 28.0], [1.0, 28.0], [1.1, 28.0], [1.2, 28.0], [1.3, 29.0], [1.4, 29.0], [1.5, 29.0], [1.6, 30.0], [1.7, 30.0], [1.8, 30.0], [1.9, 31.0], [2.0, 31.0], [2.1, 31.0], [2.2, 31.0], [2.3, 31.0], [2.4, 32.0], [2.5, 32.0], [2.6, 32.0], [2.7, 33.0], [2.8, 33.0], [2.9, 33.0], [3.0, 33.0], [3.1, 34.0], [3.2, 34.0], [3.3, 34.0], [3.4, 34.0], [3.5, 35.0], [3.6, 35.0], [3.7, 35.0], [3.8, 35.0], [3.9, 35.0], [4.0, 35.0], [4.1, 36.0], [4.2, 36.0], [4.3, 36.0], [4.4, 36.0], [4.5, 36.0], [4.6, 37.0], [4.7, 37.0], [4.8, 37.0], [4.9, 37.0], [5.0, 37.0], [5.1, 38.0], [5.2, 38.0], [5.3, 38.0], [5.4, 38.0], [5.5, 38.0], [5.6, 38.0], [5.7, 39.0], [5.8, 39.0], [5.9, 39.0], [6.0, 39.0], [6.1, 39.0], [6.2, 40.0], [6.3, 40.0], [6.4, 40.0], [6.5, 40.0], [6.6, 40.0], [6.7, 41.0], [6.8, 41.0], [6.9, 41.0], [7.0, 41.0], [7.1, 42.0], [7.2, 42.0], [7.3, 42.0], [7.4, 42.0], [7.5, 42.0], [7.6, 42.0], [7.7, 43.0], [7.8, 43.0], [7.9, 43.0], [8.0, 43.0], [8.1, 44.0], [8.2, 44.0], [8.3, 44.0], [8.4, 44.0], [8.5, 44.0], [8.6, 45.0], [8.7, 45.0], [8.8, 45.0], [8.9, 45.0], [9.0, 45.0], [9.1, 46.0], [9.2, 46.0], [9.3, 46.0], [9.4, 46.0], [9.5, 46.0], [9.6, 47.0], [9.7, 47.0], [9.8, 47.0], [9.9, 47.0], [10.0, 47.0], [10.1, 47.0], [10.2, 48.0], [10.3, 48.0], [10.4, 48.0], [10.5, 48.0], [10.6, 48.0], [10.7, 49.0], [10.8, 49.0], [10.9, 49.0], [11.0, 49.0], [11.1, 49.0], [11.2, 50.0], [11.3, 50.0], [11.4, 50.0], [11.5, 50.0], [11.6, 50.0], [11.7, 51.0], [11.8, 51.0], [11.9, 51.0], [12.0, 51.0], [12.1, 51.0], [12.2, 52.0], [12.3, 52.0], [12.4, 52.0], [12.5, 52.0], [12.6, 52.0], [12.7, 53.0], [12.8, 53.0], [12.9, 53.0], [13.0, 53.0], [13.1, 53.0], [13.2, 54.0], [13.3, 54.0], [13.4, 54.0], [13.5, 54.0], [13.6, 54.0], [13.7, 55.0], [13.8, 55.0], [13.9, 55.0], [14.0, 55.0], [14.1, 55.0], [14.2, 55.0], [14.3, 55.0], [14.4, 55.0], [14.5, 56.0], [14.6, 56.0], [14.7, 56.0], [14.8, 56.0], [14.9, 57.0], [15.0, 57.0], [15.1, 57.0], [15.2, 57.0], [15.3, 57.0], [15.4, 58.0], [15.5, 58.0], [15.6, 58.0], [15.7, 58.0], [15.8, 58.0], [15.9, 59.0], [16.0, 59.0], [16.1, 59.0], [16.2, 59.0], [16.3, 59.0], [16.4, 59.0], [16.5, 60.0], [16.6, 60.0], [16.7, 60.0], [16.8, 60.0], [16.9, 60.0], [17.0, 61.0], [17.1, 61.0], [17.2, 61.0], [17.3, 61.0], [17.4, 61.0], [17.5, 62.0], [17.6, 62.0], [17.7, 62.0], [17.8, 62.0], [17.9, 62.0], [18.0, 63.0], [18.1, 63.0], [18.2, 63.0], [18.3, 63.0], [18.4, 63.0], [18.5, 64.0], [18.6, 64.0], [18.7, 64.0], [18.8, 64.0], [18.9, 65.0], [19.0, 65.0], [19.1, 65.0], [19.2, 65.0], [19.3, 66.0], [19.4, 66.0], [19.5, 66.0], [19.6, 66.0], [19.7, 67.0], [19.8, 67.0], [19.9, 67.0], [20.0, 67.0], [20.1, 67.0], [20.2, 67.0], [20.3, 68.0], [20.4, 68.0], [20.5, 68.0], [20.6, 68.0], [20.7, 69.0], [20.8, 69.0], [20.9, 69.0], [21.0, 69.0], [21.1, 69.0], [21.2, 70.0], [21.3, 70.0], [21.4, 70.0], [21.5, 71.0], [21.6, 71.0], [21.7, 71.0], [21.8, 71.0], [21.9, 72.0], [22.0, 72.0], [22.1, 72.0], [22.2, 72.0], [22.3, 73.0], [22.4, 73.0], [22.5, 73.0], [22.6, 74.0], [22.7, 74.0], [22.8, 74.0], [22.9, 75.0], [23.0, 75.0], [23.1, 75.0], [23.2, 75.0], [23.3, 76.0], [23.4, 76.0], [23.5, 76.0], [23.6, 76.0], [23.7, 77.0], [23.8, 77.0], [23.9, 77.0], [24.0, 77.0], [24.1, 77.0], [24.2, 78.0], [24.3, 78.0], [24.4, 78.0], [24.5, 78.0], [24.6, 78.0], [24.7, 79.0], [24.8, 79.0], [24.9, 79.0], [25.0, 80.0], [25.1, 80.0], [25.2, 80.0], [25.3, 81.0], [25.4, 81.0], [25.5, 81.0], [25.6, 81.0], [25.7, 81.0], [25.8, 82.0], [25.9, 82.0], [26.0, 82.0], [26.1, 83.0], [26.2, 83.0], [26.3, 83.0], [26.4, 83.0], [26.5, 84.0], [26.6, 84.0], [26.7, 84.0], [26.8, 84.0], [26.9, 85.0], [27.0, 85.0], [27.1, 85.0], [27.2, 86.0], [27.3, 86.0], [27.4, 86.0], [27.5, 86.0], [27.6, 86.0], [27.7, 87.0], [27.8, 88.0], [27.9, 88.0], [28.0, 88.0], [28.1, 88.0], [28.2, 89.0], [28.3, 89.0], [28.4, 90.0], [28.5, 90.0], [28.6, 91.0], [28.7, 91.0], [28.8, 91.0], [28.9, 92.0], [29.0, 92.0], [29.1, 92.0], [29.2, 93.0], [29.3, 93.0], [29.4, 93.0], [29.5, 94.0], [29.6, 94.0], [29.7, 94.0], [29.8, 95.0], [29.9, 95.0], [30.0, 96.0], [30.1, 96.0], [30.2, 96.0], [30.3, 97.0], [30.4, 97.0], [30.5, 97.0], [30.6, 98.0], [30.7, 98.0], [30.8, 99.0], [30.9, 99.0], [31.0, 100.0], [31.1, 100.0], [31.2, 101.0], [31.3, 101.0], [31.4, 101.0], [31.5, 102.0], [31.6, 102.0], [31.7, 103.0], [31.8, 104.0], [31.9, 104.0], [32.0, 105.0], [32.1, 106.0], [32.2, 107.0], [32.3, 108.0], [32.4, 109.0], [32.5, 110.0], [32.6, 110.0], [32.7, 111.0], [32.8, 112.0], [32.9, 113.0], [33.0, 113.0], [33.1, 113.0], [33.2, 114.0], [33.3, 115.0], [33.4, 115.0], [33.5, 116.0], [33.6, 117.0], [33.7, 119.0], [33.8, 119.0], [33.9, 120.0], [34.0, 121.0], [34.1, 122.0], [34.2, 123.0], [34.3, 124.0], [34.4, 125.0], [34.5, 126.0], [34.6, 126.0], [34.7, 127.0], [34.8, 128.0], [34.9, 128.0], [35.0, 129.0], [35.1, 129.0], [35.2, 130.0], [35.3, 132.0], [35.4, 133.0], [35.5, 135.0], [35.6, 135.0], [35.7, 136.0], [35.8, 136.0], [35.9, 137.0], [36.0, 139.0], [36.1, 139.0], [36.2, 140.0], [36.3, 142.0], [36.4, 144.0], [36.5, 145.0], [36.6, 146.0], [36.7, 146.0], [36.8, 148.0], [36.9, 149.0], [37.0, 150.0], [37.1, 150.0], [37.2, 152.0], [37.3, 153.0], [37.4, 153.0], [37.5, 153.0], [37.6, 154.0], [37.7, 155.0], [37.8, 156.0], [37.9, 156.0], [38.0, 156.0], [38.1, 157.0], [38.2, 157.0], [38.3, 158.0], [38.4, 159.0], [38.5, 160.0], [38.6, 161.0], [38.7, 162.0], [38.8, 163.0], [38.9, 164.0], [39.0, 164.0], [39.1, 165.0], [39.2, 166.0], [39.3, 166.0], [39.4, 167.0], [39.5, 167.0], [39.6, 168.0], [39.7, 169.0], [39.8, 169.0], [39.9, 170.0], [40.0, 170.0], [40.1, 171.0], [40.2, 172.0], [40.3, 172.0], [40.4, 173.0], [40.5, 174.0], [40.6, 175.0], [40.7, 176.0], [40.8, 176.0], [40.9, 177.0], [41.0, 178.0], [41.1, 179.0], [41.2, 180.0], [41.3, 181.0], [41.4, 181.0], [41.5, 182.0], [41.6, 182.0], [41.7, 183.0], [41.8, 184.0], [41.9, 184.0], [42.0, 185.0], [42.1, 185.0], [42.2, 186.0], [42.3, 187.0], [42.4, 187.0], [42.5, 188.0], [42.6, 188.0], [42.7, 189.0], [42.8, 190.0], [42.9, 191.0], [43.0, 192.0], [43.1, 192.0], [43.2, 193.0], [43.3, 193.0], [43.4, 194.0], [43.5, 194.0], [43.6, 195.0], [43.7, 196.0], [43.8, 197.0], [43.9, 198.0], [44.0, 198.0], [44.1, 199.0], [44.2, 200.0], [44.3, 201.0], [44.4, 201.0], [44.5, 202.0], [44.6, 203.0], [44.7, 203.0], [44.8, 204.0], [44.9, 204.0], [45.0, 204.0], [45.1, 205.0], [45.2, 205.0], [45.3, 206.0], [45.4, 207.0], [45.5, 208.0], [45.6, 208.0], [45.7, 208.0], [45.8, 209.0], [45.9, 210.0], [46.0, 210.0], [46.1, 211.0], [46.2, 212.0], [46.3, 212.0], [46.4, 213.0], [46.5, 213.0], [46.6, 214.0], [46.7, 215.0], [46.8, 216.0], [46.9, 216.0], [47.0, 216.0], [47.1, 217.0], [47.2, 218.0], [47.3, 218.0], [47.4, 219.0], [47.5, 220.0], [47.6, 221.0], [47.7, 221.0], [47.8, 223.0], [47.9, 224.0], [48.0, 224.0], [48.1, 225.0], [48.2, 226.0], [48.3, 227.0], [48.4, 227.0], [48.5, 228.0], [48.6, 229.0], [48.7, 230.0], [48.8, 231.0], [48.9, 231.0], [49.0, 232.0], [49.1, 233.0], [49.2, 233.0], [49.3, 234.0], [49.4, 235.0], [49.5, 235.0], [49.6, 236.0], [49.7, 237.0], [49.8, 237.0], [49.9, 238.0], [50.0, 239.0], [50.1, 240.0], [50.2, 241.0], [50.3, 242.0], [50.4, 243.0], [50.5, 244.0], [50.6, 245.0], [50.7, 245.0], [50.8, 246.0], [50.9, 247.0], [51.0, 248.0], [51.1, 249.0], [51.2, 250.0], [51.3, 251.0], [51.4, 251.0], [51.5, 252.0], [51.6, 253.0], [51.7, 253.0], [51.8, 254.0], [51.9, 255.0], [52.0, 255.0], [52.1, 256.0], [52.2, 257.0], [52.3, 258.0], [52.4, 259.0], [52.5, 259.0], [52.6, 260.0], [52.7, 261.0], [52.8, 261.0], [52.9, 262.0], [53.0, 262.0], [53.1, 262.0], [53.2, 263.0], [53.3, 264.0], [53.4, 265.0], [53.5, 267.0], [53.6, 267.0], [53.7, 268.0], [53.8, 269.0], [53.9, 269.0], [54.0, 270.0], [54.1, 270.0], [54.2, 271.0], [54.3, 272.0], [54.4, 274.0], [54.5, 275.0], [54.6, 275.0], [54.7, 276.0], [54.8, 278.0], [54.9, 279.0], [55.0, 280.0], [55.1, 281.0], [55.2, 281.0], [55.3, 282.0], [55.4, 283.0], [55.5, 284.0], [55.6, 285.0], [55.7, 286.0], [55.8, 287.0], [55.9, 288.0], [56.0, 288.0], [56.1, 289.0], [56.2, 290.0], [56.3, 291.0], [56.4, 292.0], [56.5, 292.0], [56.6, 293.0], [56.7, 294.0], [56.8, 296.0], [56.9, 296.0], [57.0, 297.0], [57.1, 298.0], [57.2, 299.0], [57.3, 300.0], [57.4, 301.0], [57.5, 303.0], [57.6, 304.0], [57.7, 304.0], [57.8, 306.0], [57.9, 307.0], [58.0, 308.0], [58.1, 308.0], [58.2, 310.0], [58.3, 310.0], [58.4, 311.0], [58.5, 312.0], [58.6, 313.0], [58.7, 314.0], [58.8, 314.0], [58.9, 314.0], [59.0, 316.0], [59.1, 317.0], [59.2, 317.0], [59.3, 318.0], [59.4, 319.0], [59.5, 320.0], [59.6, 321.0], [59.7, 321.0], [59.8, 323.0], [59.9, 324.0], [60.0, 325.0], [60.1, 327.0], [60.2, 329.0], [60.3, 329.0], [60.4, 330.0], [60.5, 331.0], [60.6, 332.0], [60.7, 334.0], [60.8, 334.0], [60.9, 335.0], [61.0, 339.0], [61.1, 341.0], [61.2, 341.0], [61.3, 342.0], [61.4, 343.0], [61.5, 344.0], [61.6, 345.0], [61.7, 346.0], [61.8, 347.0], [61.9, 348.0], [62.0, 348.0], [62.1, 349.0], [62.2, 350.0], [62.3, 351.0], [62.4, 353.0], [62.5, 354.0], [62.6, 354.0], [62.7, 356.0], [62.8, 357.0], [62.9, 358.0], [63.0, 358.0], [63.1, 359.0], [63.2, 360.0], [63.3, 361.0], [63.4, 361.0], [63.5, 362.0], [63.6, 362.0], [63.7, 364.0], [63.8, 365.0], [63.9, 366.0], [64.0, 367.0], [64.1, 368.0], [64.2, 369.0], [64.3, 370.0], [64.4, 370.0], [64.5, 372.0], [64.6, 373.0], [64.7, 375.0], [64.8, 376.0], [64.9, 377.0], [65.0, 377.0], [65.1, 378.0], [65.2, 379.0], [65.3, 380.0], [65.4, 382.0], [65.5, 383.0], [65.6, 384.0], [65.7, 385.0], [65.8, 386.0], [65.9, 387.0], [66.0, 388.0], [66.1, 389.0], [66.2, 390.0], [66.3, 390.0], [66.4, 392.0], [66.5, 393.0], [66.6, 394.0], [66.7, 395.0], [66.8, 395.0], [66.9, 396.0], [67.0, 397.0], [67.1, 398.0], [67.2, 399.0], [67.3, 399.0], [67.4, 401.0], [67.5, 402.0], [67.6, 403.0], [67.7, 404.0], [67.8, 405.0], [67.9, 406.0], [68.0, 407.0], [68.1, 408.0], [68.2, 409.0], [68.3, 410.0], [68.4, 410.0], [68.5, 412.0], [68.6, 413.0], [68.7, 414.0], [68.8, 414.0], [68.9, 415.0], [69.0, 416.0], [69.1, 418.0], [69.2, 419.0], [69.3, 419.0], [69.4, 420.0], [69.5, 422.0], [69.6, 423.0], [69.7, 424.0], [69.8, 425.0], [69.9, 425.0], [70.0, 427.0], [70.1, 427.0], [70.2, 428.0], [70.3, 429.0], [70.4, 429.0], [70.5, 431.0], [70.6, 432.0], [70.7, 434.0], [70.8, 437.0], [70.9, 438.0], [71.0, 439.0], [71.1, 441.0], [71.2, 442.0], [71.3, 445.0], [71.4, 446.0], [71.5, 447.0], [71.6, 448.0], [71.7, 449.0], [71.8, 451.0], [71.9, 452.0], [72.0, 453.0], [72.1, 454.0], [72.2, 456.0], [72.3, 456.0], [72.4, 458.0], [72.5, 460.0], [72.6, 461.0], [72.7, 462.0], [72.8, 464.0], [72.9, 464.0], [73.0, 466.0], [73.1, 467.0], [73.2, 468.0], [73.3, 469.0], [73.4, 470.0], [73.5, 470.0], [73.6, 471.0], [73.7, 472.0], [73.8, 473.0], [73.9, 474.0], [74.0, 475.0], [74.1, 476.0], [74.2, 477.0], [74.3, 478.0], [74.4, 479.0], [74.5, 480.0], [74.6, 482.0], [74.7, 483.0], [74.8, 484.0], [74.9, 486.0], [75.0, 487.0], [75.1, 488.0], [75.2, 489.0], [75.3, 490.0], [75.4, 491.0], [75.5, 492.0], [75.6, 494.0], [75.7, 496.0], [75.8, 498.0], [75.9, 498.0], [76.0, 499.0], [76.1, 500.0], [76.2, 501.0], [76.3, 502.0], [76.4, 503.0], [76.5, 504.0], [76.6, 505.0], [76.7, 506.0], [76.8, 506.0], [76.9, 508.0], [77.0, 509.0], [77.1, 510.0], [77.2, 512.0], [77.3, 513.0], [77.4, 515.0], [77.5, 515.0], [77.6, 517.0], [77.7, 517.0], [77.8, 518.0], [77.9, 519.0], [78.0, 520.0], [78.1, 521.0], [78.2, 523.0], [78.3, 525.0], [78.4, 526.0], [78.5, 528.0], [78.6, 528.0], [78.7, 529.0], [78.8, 531.0], [78.9, 533.0], [79.0, 534.0], [79.1, 536.0], [79.2, 537.0], [79.3, 538.0], [79.4, 540.0], [79.5, 541.0], [79.6, 542.0], [79.7, 543.0], [79.8, 544.0], [79.9, 545.0], [80.0, 546.0], [80.1, 546.0], [80.2, 548.0], [80.3, 549.0], [80.4, 552.0], [80.5, 554.0], [80.6, 556.0], [80.7, 557.0], [80.8, 558.0], [80.9, 559.0], [81.0, 560.0], [81.1, 562.0], [81.2, 564.0], [81.3, 565.0], [81.4, 566.0], [81.5, 567.0], [81.6, 568.0], [81.7, 570.0], [81.8, 571.0], [81.9, 572.0], [82.0, 574.0], [82.1, 574.0], [82.2, 577.0], [82.3, 578.0], [82.4, 579.0], [82.5, 580.0], [82.6, 582.0], [82.7, 584.0], [82.8, 585.0], [82.9, 586.0], [83.0, 588.0], [83.1, 589.0], [83.2, 591.0], [83.3, 591.0], [83.4, 593.0], [83.5, 594.0], [83.6, 595.0], [83.7, 596.0], [83.8, 599.0], [83.9, 600.0], [84.0, 601.0], [84.1, 603.0], [84.2, 604.0], [84.3, 605.0], [84.4, 606.0], [84.5, 608.0], [84.6, 609.0], [84.7, 610.0], [84.8, 613.0], [84.9, 615.0], [85.0, 617.0], [85.1, 618.0], [85.2, 622.0], [85.3, 624.0], [85.4, 625.0], [85.5, 626.0], [85.6, 627.0], [85.7, 630.0], [85.8, 631.0], [85.9, 633.0], [86.0, 636.0], [86.1, 637.0], [86.2, 639.0], [86.3, 641.0], [86.4, 644.0], [86.5, 645.0], [86.6, 647.0], [86.7, 648.0], [86.8, 650.0], [86.9, 651.0], [87.0, 654.0], [87.1, 655.0], [87.2, 657.0], [87.3, 658.0], [87.4, 662.0], [87.5, 662.0], [87.6, 664.0], [87.7, 667.0], [87.8, 668.0], [87.9, 672.0], [88.0, 673.0], [88.1, 674.0], [88.2, 677.0], [88.3, 678.0], [88.4, 680.0], [88.5, 681.0], [88.6, 684.0], [88.7, 686.0], [88.8, 687.0], [88.9, 688.0], [89.0, 690.0], [89.1, 692.0], [89.2, 695.0], [89.3, 696.0], [89.4, 699.0], [89.5, 701.0], [89.6, 702.0], [89.7, 706.0], [89.8, 710.0], [89.9, 714.0], [90.0, 717.0], [90.1, 719.0], [90.2, 723.0], [90.3, 726.0], [90.4, 731.0], [90.5, 734.0], [90.6, 736.0], [90.7, 738.0], [90.8, 739.0], [90.9, 740.0], [91.0, 742.0], [91.1, 744.0], [91.2, 747.0], [91.3, 748.0], [91.4, 752.0], [91.5, 755.0], [91.6, 758.0], [91.7, 761.0], [91.8, 764.0], [91.9, 766.0], [92.0, 774.0], [92.1, 777.0], [92.2, 780.0], [92.3, 782.0], [92.4, 785.0], [92.5, 790.0], [92.6, 795.0], [92.7, 802.0], [92.8, 812.0], [92.9, 817.0], [93.0, 823.0], [93.1, 827.0], [93.2, 834.0], [93.3, 837.0], [93.4, 843.0], [93.5, 851.0], [93.6, 864.0], [93.7, 873.0], [93.8, 877.0], [93.9, 886.0], [94.0, 893.0], [94.1, 903.0], [94.2, 912.0], [94.3, 925.0], [94.4, 941.0], [94.5, 956.0], [94.6, 965.0], [94.7, 974.0], [94.8, 1001.0], [94.9, 1023.0], [95.0, 1036.0], [95.1, 1054.0], [95.2, 1087.0], [95.3, 1101.0], [95.4, 1110.0], [95.5, 1174.0], [95.6, 1194.0], [95.7, 1298.0], [95.8, 1345.0], [95.9, 1404.0], [96.0, 1474.0], [96.1, 1539.0], [96.2, 1602.0], [96.3, 1691.0], [96.4, 1712.0], [96.5, 1731.0], [96.6, 1804.0], [96.7, 1830.0], [96.8, 1913.0], [96.9, 1989.0], [97.0, 2089.0], [97.1, 2121.0], [97.2, 2245.0], [97.3, 2448.0], [97.4, 2539.0], [97.5, 2602.0], [97.6, 2679.0], [97.7, 2786.0], [97.8, 2918.0], [97.9, 3016.0], [98.0, 3091.0], [98.1, 3287.0], [98.2, 3360.0], [98.3, 3488.0], [98.4, 3595.0], [98.5, 3769.0], [98.6, 3925.0], [98.7, 4014.0], [98.8, 4196.0], [98.9, 4525.0], [99.0, 4783.0], [99.1, 5194.0], [99.2, 5764.0], [99.3, 8023.0], [99.4, 8618.0], [99.5, 9465.0], [99.6, 9970.0], [99.7, 11034.0], [99.8, 12249.0], [99.9, 13241.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 1608.0, "series": [{"data": [[0.0, 1608.0], [600.0, 291.0], [700.0, 168.0], [800.0, 72.0], [900.0, 38.0], [1000.0, 24.0], [1100.0, 18.0], [1200.0, 5.0], [1300.0, 8.0], [1400.0, 9.0], [1500.0, 8.0], [1600.0, 9.0], [1700.0, 12.0], [1800.0, 9.0], [1900.0, 9.0], [2000.0, 4.0], [2100.0, 8.0], [2200.0, 3.0], [2300.0, 3.0], [2400.0, 5.0], [2500.0, 6.0], [2600.0, 8.0], [2700.0, 3.0], [2800.0, 3.0], [2900.0, 7.0], [3000.0, 6.0], [3100.0, 3.0], [3200.0, 3.0], [3300.0, 4.0], [3400.0, 5.0], [3500.0, 6.0], [3600.0, 1.0], [3700.0, 5.0], [3800.0, 3.0], [3900.0, 4.0], [4000.0, 4.0], [4100.0, 3.0], [4200.0, 3.0], [4300.0, 1.0], [4500.0, 3.0], [4600.0, 1.0], [4700.0, 3.0], [5100.0, 3.0], [5000.0, 2.0], [5300.0, 1.0], [5200.0, 2.0], [5500.0, 1.0], [5700.0, 1.0], [5800.0, 1.0], [5900.0, 1.0], [7900.0, 1.0], [7800.0, 1.0], [8100.0, 2.0], [8000.0, 1.0], [8700.0, 1.0], [8600.0, 2.0], [8200.0, 1.0], [8900.0, 2.0], [9200.0, 1.0], [9000.0, 1.0], [9500.0, 1.0], [9700.0, 2.0], [9600.0, 1.0], [9400.0, 1.0], [9900.0, 1.0], [10000.0, 1.0], [10600.0, 1.0], [11000.0, 1.0], [10900.0, 1.0], [10800.0, 1.0], [11300.0, 1.0], [11700.0, 1.0], [11900.0, 1.0], [12100.0, 1.0], [12200.0, 1.0], [12400.0, 2.0], [12600.0, 1.0], [12800.0, 1.0], [13200.0, 2.0], [13400.0, 1.0], [14100.0, 1.0], [14500.0, 1.0], [15100.0, 1.0], [100.0, 683.0], [200.0, 678.0], [300.0, 525.0], [400.0, 451.0], [500.0, 406.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 15100.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 206.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 3950.0, "series": [{"data": [[0.0, 3950.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1034.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 206.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.956563706563708, "minX": 1.60404888E12, "maxY": 10.0, "series": [{"data": [[1.60404906E12, 10.0], [1.60404888E12, 9.994011976047894], [1.60404894E12, 10.0], [1.60404912E12, 9.956563706563708], [1.604049E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60404912E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 306.0, "minX": 1.0, "maxY": 8023.0, "series": [{"data": [[8.0, 427.0], [4.0, 558.0], [2.0, 609.0], [1.0, 8023.0], [9.0, 306.0], [10.0, 453.8704633204625], [5.0, 510.0], [6.0, 680.0], [3.0, 580.0], [7.0, 662.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.99094412331403, 455.45876685934564]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 2513.2166666666667, "minX": 1.60404888E12, "maxY": 6537957.516666667, "series": [{"data": [[1.60404906E12, 6537957.516666667], [1.60404888E12, 1319654.6666666667], [1.60404894E12, 5203731.733333333], [1.60404912E12, 4185857.6], [1.604049E12, 5714961.716666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60404906E12, 11409.2], [1.60404888E12, 2513.2166666666667], [1.60404894E12, 7464.7], [1.60404912E12, 8144.166666666667], [1.604049E12, 10410.35]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60404912E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 288.7425149700601, "minX": 1.60404888E12, "maxY": 603.9018218623482, "series": [{"data": [[1.60404906E12, 386.2596281540507], [1.60404888E12, 288.7425149700601], [1.60404894E12, 603.9018218623482], [1.60404912E12, 472.43339768339723], [1.604049E12, 452.177978883861]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60404912E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 287.1976047904193, "minX": 1.60404888E12, "maxY": 600.2479757085018, "series": [{"data": [[1.60404906E12, 384.0810092961486], [1.60404888E12, 287.1976047904193], [1.60404894E12, 600.2479757085018], [1.60404912E12, 470.68822393822404], [1.604049E12, 449.34539969834054]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60404912E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.004524886877828056, "minX": 1.60404888E12, "maxY": 0.3952095808383234, "series": [{"data": [[1.60404906E12, 0.00929614873837982], [1.60404888E12, 0.3952095808383234], [1.60404894E12, 0.014170040485829965], [1.60404912E12, 0.005791505791505798], [1.604049E12, 0.004524886877828056]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60404912E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 17.0, "minX": 1.60404888E12, "maxY": 15196.0, "series": [{"data": [[1.60404906E12, 9263.0], [1.60404888E12, 2023.0], [1.60404894E12, 12475.0], [1.60404912E12, 13299.0], [1.604049E12, 15196.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60404906E12, 27.0], [1.60404888E12, 31.014999920129775], [1.60404894E12, 28.0], [1.60404912E12, 27.33299975275993], [1.604049E12, 29.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60404906E12, 27.0], [1.60404888E12, 31.316500031948088], [1.60404894E12, 28.0], [1.60404912E12, 28.0], [1.604049E12, 29.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60404906E12, 27.0], [1.60404888E12, 31.182499960064888], [1.60404894E12, 28.0], [1.60404912E12, 27.851499876379968], [1.604049E12, 29.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60404906E12, 17.0], [1.60404888E12, 26.0], [1.60404894E12, 20.0], [1.60404912E12, 23.0], [1.604049E12, 22.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60404906E12, 223.5], [1.60404888E12, 229.0], [1.60404894E12, 276.0], [1.60404912E12, 242.5], [1.604049E12, 248.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60404912E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 61.0, "minX": 1.0, "maxY": 5588.0, "series": [{"data": [[2.0, 4817.0], [3.0, 2245.0], [4.0, 163.5], [5.0, 1880.0], [6.0, 466.5], [7.0, 614.0], [8.0, 414.0], [9.0, 432.0], [10.0, 414.0], [11.0, 479.0], [12.0, 330.0], [13.0, 306.0], [14.0, 208.5], [15.0, 471.0], [16.0, 426.5], [17.0, 370.0], [18.0, 442.5], [19.0, 410.0], [20.0, 378.5], [21.0, 412.5], [22.0, 316.0], [23.0, 362.0], [24.0, 321.5], [25.0, 393.0], [26.0, 309.0], [27.0, 276.5], [28.0, 308.0], [29.0, 263.5], [30.0, 282.0], [31.0, 203.0], [33.0, 204.0], [32.0, 118.0], [35.0, 230.0], [34.0, 260.0], [37.0, 227.0], [36.0, 182.5], [39.0, 238.5], [38.0, 241.5], [41.0, 192.5], [40.0, 218.5], [42.0, 207.5], [43.0, 113.0], [44.0, 202.0], [46.0, 170.5], [47.0, 137.0], [48.0, 170.0], [50.0, 180.5], [51.0, 86.0], [55.0, 137.5], [57.0, 61.0], [58.0, 64.5], [62.0, 75.0], [65.0, 79.0], [67.0, 70.0], [80.0, 86.5], [1.0, 5588.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 80.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 60.0, "minX": 1.0, "maxY": 5582.0, "series": [{"data": [[2.0, 4809.5], [3.0, 2245.0], [4.0, 163.0], [5.0, 1874.0], [6.0, 464.0], [7.0, 613.0], [8.0, 414.0], [9.0, 432.0], [10.0, 410.5], [11.0, 466.0], [12.0, 328.5], [13.0, 305.0], [14.0, 208.0], [15.0, 448.0], [16.0, 423.5], [17.0, 362.0], [18.0, 435.5], [19.0, 407.5], [20.0, 375.5], [21.0, 404.5], [22.0, 312.0], [23.0, 353.0], [24.0, 321.5], [25.0, 383.0], [26.0, 308.0], [27.0, 276.0], [28.0, 305.5], [29.0, 262.5], [30.0, 281.5], [31.0, 202.0], [33.0, 204.0], [32.0, 118.0], [35.0, 229.0], [34.0, 257.5], [37.0, 226.0], [36.0, 182.0], [39.0, 237.5], [38.0, 241.0], [41.0, 191.0], [40.0, 217.5], [42.0, 207.0], [43.0, 112.0], [44.0, 197.5], [46.0, 170.0], [47.0, 137.0], [48.0, 170.0], [50.0, 180.5], [51.0, 86.0], [55.0, 137.0], [57.0, 60.0], [58.0, 64.5], [62.0, 75.0], [65.0, 78.0], [67.0, 69.0], [80.0, 86.5], [1.0, 5582.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 80.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 5.733333333333333, "minX": 1.60404888E12, "maxY": 25.1, "series": [{"data": [[1.60404906E12, 25.1], [1.60404888E12, 5.733333333333333], [1.60404894E12, 16.466666666666665], [1.60404912E12, 17.1], [1.604049E12, 22.1]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60404912E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 5.566666666666666, "minX": 1.60404888E12, "maxY": 25.1, "series": [{"data": [[1.60404906E12, 25.1], [1.60404888E12, 5.566666666666666], [1.60404894E12, 16.466666666666665], [1.60404912E12, 17.266666666666666], [1.604049E12, 22.1]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60404912E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 5.566666666666666, "minX": 1.60404888E12, "maxY": 25.1, "series": [{"data": [[1.60404906E12, 25.1], [1.60404888E12, 5.566666666666666], [1.60404894E12, 16.466666666666665], [1.60404912E12, 17.266666666666666], [1.604049E12, 22.1]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60404912E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 5.566666666666666, "minX": 1.60404888E12, "maxY": 25.1, "series": [{"data": [[1.60404906E12, 25.1], [1.60404888E12, 5.566666666666666], [1.60404894E12, 16.466666666666665], [1.60404912E12, 17.266666666666666], [1.604049E12, 22.1]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60404912E12, "title": "Total Transactions Per Second"}},
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

