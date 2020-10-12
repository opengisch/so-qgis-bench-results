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
        data: {"result": {"minY": 29.0, "minX": 0.0, "maxY": 2368.0, "series": [{"data": [[0.0, 29.0], [0.1, 31.0], [0.2, 32.0], [0.3, 32.0], [0.4, 33.0], [0.5, 33.0], [0.6, 34.0], [0.7, 34.0], [0.8, 34.0], [0.9, 35.0], [1.0, 35.0], [1.1, 35.0], [1.2, 35.0], [1.3, 35.0], [1.4, 35.0], [1.5, 36.0], [1.6, 36.0], [1.7, 36.0], [1.8, 36.0], [1.9, 36.0], [2.0, 36.0], [2.1, 36.0], [2.2, 37.0], [2.3, 37.0], [2.4, 37.0], [2.5, 37.0], [2.6, 37.0], [2.7, 37.0], [2.8, 37.0], [2.9, 37.0], [3.0, 37.0], [3.1, 38.0], [3.2, 38.0], [3.3, 38.0], [3.4, 38.0], [3.5, 38.0], [3.6, 38.0], [3.7, 38.0], [3.8, 38.0], [3.9, 38.0], [4.0, 38.0], [4.1, 39.0], [4.2, 39.0], [4.3, 39.0], [4.4, 39.0], [4.5, 39.0], [4.6, 39.0], [4.7, 39.0], [4.8, 39.0], [4.9, 39.0], [5.0, 39.0], [5.1, 39.0], [5.2, 39.0], [5.3, 39.0], [5.4, 39.0], [5.5, 39.0], [5.6, 39.0], [5.7, 40.0], [5.8, 40.0], [5.9, 40.0], [6.0, 40.0], [6.1, 40.0], [6.2, 40.0], [6.3, 40.0], [6.4, 40.0], [6.5, 40.0], [6.6, 40.0], [6.7, 40.0], [6.8, 40.0], [6.9, 40.0], [7.0, 40.0], [7.1, 40.0], [7.2, 41.0], [7.3, 41.0], [7.4, 41.0], [7.5, 41.0], [7.6, 41.0], [7.7, 41.0], [7.8, 41.0], [7.9, 41.0], [8.0, 41.0], [8.1, 41.0], [8.2, 41.0], [8.3, 41.0], [8.4, 41.0], [8.5, 41.0], [8.6, 41.0], [8.7, 42.0], [8.8, 42.0], [8.9, 42.0], [9.0, 42.0], [9.1, 42.0], [9.2, 42.0], [9.3, 42.0], [9.4, 42.0], [9.5, 42.0], [9.6, 42.0], [9.7, 42.0], [9.8, 42.0], [9.9, 43.0], [10.0, 43.0], [10.1, 43.0], [10.2, 43.0], [10.3, 43.0], [10.4, 43.0], [10.5, 43.0], [10.6, 43.0], [10.7, 43.0], [10.8, 43.0], [10.9, 43.0], [11.0, 43.0], [11.1, 43.0], [11.2, 44.0], [11.3, 44.0], [11.4, 44.0], [11.5, 44.0], [11.6, 44.0], [11.7, 44.0], [11.8, 44.0], [11.9, 44.0], [12.0, 44.0], [12.1, 44.0], [12.2, 44.0], [12.3, 44.0], [12.4, 45.0], [12.5, 45.0], [12.6, 45.0], [12.7, 45.0], [12.8, 45.0], [12.9, 45.0], [13.0, 45.0], [13.1, 45.0], [13.2, 45.0], [13.3, 46.0], [13.4, 46.0], [13.5, 46.0], [13.6, 46.0], [13.7, 46.0], [13.8, 46.0], [13.9, 46.0], [14.0, 46.0], [14.1, 46.0], [14.2, 46.0], [14.3, 47.0], [14.4, 47.0], [14.5, 47.0], [14.6, 47.0], [14.7, 47.0], [14.8, 47.0], [14.9, 47.0], [15.0, 47.0], [15.1, 48.0], [15.2, 48.0], [15.3, 48.0], [15.4, 48.0], [15.5, 48.0], [15.6, 48.0], [15.7, 48.0], [15.8, 48.0], [15.9, 49.0], [16.0, 49.0], [16.1, 49.0], [16.2, 49.0], [16.3, 49.0], [16.4, 50.0], [16.5, 50.0], [16.6, 50.0], [16.7, 50.0], [16.8, 50.0], [16.9, 50.0], [17.0, 51.0], [17.1, 51.0], [17.2, 51.0], [17.3, 51.0], [17.4, 52.0], [17.5, 52.0], [17.6, 53.0], [17.7, 53.0], [17.8, 53.0], [17.9, 54.0], [18.0, 54.0], [18.1, 54.0], [18.2, 55.0], [18.3, 56.0], [18.4, 56.0], [18.5, 56.0], [18.6, 57.0], [18.7, 57.0], [18.8, 58.0], [18.9, 58.0], [19.0, 59.0], [19.1, 59.0], [19.2, 59.0], [19.3, 59.0], [19.4, 60.0], [19.5, 60.0], [19.6, 60.0], [19.7, 60.0], [19.8, 61.0], [19.9, 61.0], [20.0, 61.0], [20.1, 62.0], [20.2, 62.0], [20.3, 62.0], [20.4, 62.0], [20.5, 63.0], [20.6, 63.0], [20.7, 63.0], [20.8, 64.0], [20.9, 64.0], [21.0, 64.0], [21.1, 64.0], [21.2, 64.0], [21.3, 65.0], [21.4, 65.0], [21.5, 65.0], [21.6, 65.0], [21.7, 65.0], [21.8, 66.0], [21.9, 66.0], [22.0, 66.0], [22.1, 66.0], [22.2, 66.0], [22.3, 66.0], [22.4, 66.0], [22.5, 66.0], [22.6, 67.0], [22.7, 67.0], [22.8, 67.0], [22.9, 67.0], [23.0, 68.0], [23.1, 68.0], [23.2, 68.0], [23.3, 68.0], [23.4, 69.0], [23.5, 69.0], [23.6, 69.0], [23.7, 69.0], [23.8, 69.0], [23.9, 70.0], [24.0, 70.0], [24.1, 70.0], [24.2, 70.0], [24.3, 70.0], [24.4, 71.0], [24.5, 71.0], [24.6, 71.0], [24.7, 71.0], [24.8, 71.0], [24.9, 71.0], [25.0, 71.0], [25.1, 71.0], [25.2, 72.0], [25.3, 72.0], [25.4, 72.0], [25.5, 72.0], [25.6, 72.0], [25.7, 73.0], [25.8, 73.0], [25.9, 73.0], [26.0, 73.0], [26.1, 73.0], [26.2, 73.0], [26.3, 73.0], [26.4, 74.0], [26.5, 74.0], [26.6, 74.0], [26.7, 74.0], [26.8, 74.0], [26.9, 74.0], [27.0, 74.0], [27.1, 75.0], [27.2, 75.0], [27.3, 75.0], [27.4, 75.0], [27.5, 75.0], [27.6, 75.0], [27.7, 75.0], [27.8, 75.0], [27.9, 76.0], [28.0, 76.0], [28.1, 76.0], [28.2, 76.0], [28.3, 76.0], [28.4, 76.0], [28.5, 76.0], [28.6, 76.0], [28.7, 76.0], [28.8, 77.0], [28.9, 77.0], [29.0, 77.0], [29.1, 77.0], [29.2, 77.0], [29.3, 77.0], [29.4, 78.0], [29.5, 78.0], [29.6, 78.0], [29.7, 78.0], [29.8, 78.0], [29.9, 78.0], [30.0, 78.0], [30.1, 78.0], [30.2, 79.0], [30.3, 79.0], [30.4, 79.0], [30.5, 79.0], [30.6, 79.0], [30.7, 79.0], [30.8, 79.0], [30.9, 79.0], [31.0, 79.0], [31.1, 80.0], [31.2, 80.0], [31.3, 80.0], [31.4, 80.0], [31.5, 80.0], [31.6, 80.0], [31.7, 80.0], [31.8, 81.0], [31.9, 81.0], [32.0, 81.0], [32.1, 81.0], [32.2, 81.0], [32.3, 81.0], [32.4, 81.0], [32.5, 81.0], [32.6, 81.0], [32.7, 81.0], [32.8, 82.0], [32.9, 82.0], [33.0, 82.0], [33.1, 82.0], [33.2, 82.0], [33.3, 82.0], [33.4, 83.0], [33.5, 83.0], [33.6, 83.0], [33.7, 83.0], [33.8, 83.0], [33.9, 83.0], [34.0, 83.0], [34.1, 83.0], [34.2, 84.0], [34.3, 84.0], [34.4, 84.0], [34.5, 84.0], [34.6, 84.0], [34.7, 85.0], [34.8, 85.0], [34.9, 85.0], [35.0, 85.0], [35.1, 85.0], [35.2, 85.0], [35.3, 85.0], [35.4, 86.0], [35.5, 86.0], [35.6, 86.0], [35.7, 86.0], [35.8, 86.0], [35.9, 87.0], [36.0, 87.0], [36.1, 87.0], [36.2, 87.0], [36.3, 87.0], [36.4, 88.0], [36.5, 88.0], [36.6, 88.0], [36.7, 88.0], [36.8, 88.0], [36.9, 89.0], [37.0, 89.0], [37.1, 89.0], [37.2, 90.0], [37.3, 90.0], [37.4, 90.0], [37.5, 91.0], [37.6, 91.0], [37.7, 91.0], [37.8, 91.0], [37.9, 91.0], [38.0, 92.0], [38.1, 92.0], [38.2, 93.0], [38.3, 93.0], [38.4, 93.0], [38.5, 94.0], [38.6, 94.0], [38.7, 94.0], [38.8, 94.0], [38.9, 95.0], [39.0, 95.0], [39.1, 96.0], [39.2, 96.0], [39.3, 96.0], [39.4, 97.0], [39.5, 97.0], [39.6, 98.0], [39.7, 98.0], [39.8, 98.0], [39.9, 99.0], [40.0, 99.0], [40.1, 99.0], [40.2, 100.0], [40.3, 100.0], [40.4, 101.0], [40.5, 102.0], [40.6, 102.0], [40.7, 102.0], [40.8, 103.0], [40.9, 104.0], [41.0, 104.0], [41.1, 105.0], [41.2, 105.0], [41.3, 106.0], [41.4, 106.0], [41.5, 107.0], [41.6, 107.0], [41.7, 108.0], [41.8, 109.0], [41.9, 109.0], [42.0, 109.0], [42.1, 110.0], [42.2, 110.0], [42.3, 111.0], [42.4, 112.0], [42.5, 112.0], [42.6, 113.0], [42.7, 113.0], [42.8, 114.0], [42.9, 115.0], [43.0, 115.0], [43.1, 116.0], [43.2, 117.0], [43.3, 117.0], [43.4, 118.0], [43.5, 118.0], [43.6, 119.0], [43.7, 119.0], [43.8, 120.0], [43.9, 121.0], [44.0, 121.0], [44.1, 121.0], [44.2, 122.0], [44.3, 122.0], [44.4, 123.0], [44.5, 123.0], [44.6, 124.0], [44.7, 125.0], [44.8, 126.0], [44.9, 126.0], [45.0, 128.0], [45.1, 128.0], [45.2, 128.0], [45.3, 129.0], [45.4, 130.0], [45.5, 131.0], [45.6, 132.0], [45.7, 132.0], [45.8, 133.0], [45.9, 133.0], [46.0, 134.0], [46.1, 134.0], [46.2, 135.0], [46.3, 136.0], [46.4, 137.0], [46.5, 137.0], [46.6, 138.0], [46.7, 140.0], [46.8, 140.0], [46.9, 141.0], [47.0, 142.0], [47.1, 142.0], [47.2, 143.0], [47.3, 143.0], [47.4, 144.0], [47.5, 145.0], [47.6, 146.0], [47.7, 146.0], [47.8, 148.0], [47.9, 148.0], [48.0, 149.0], [48.1, 150.0], [48.2, 152.0], [48.3, 153.0], [48.4, 154.0], [48.5, 155.0], [48.6, 156.0], [48.7, 158.0], [48.8, 159.0], [48.9, 160.0], [49.0, 161.0], [49.1, 162.0], [49.2, 163.0], [49.3, 165.0], [49.4, 165.0], [49.5, 167.0], [49.6, 168.0], [49.7, 169.0], [49.8, 170.0], [49.9, 171.0], [50.0, 172.0], [50.1, 172.0], [50.2, 173.0], [50.3, 174.0], [50.4, 176.0], [50.5, 177.0], [50.6, 178.0], [50.7, 179.0], [50.8, 180.0], [50.9, 181.0], [51.0, 182.0], [51.1, 183.0], [51.2, 185.0], [51.3, 185.0], [51.4, 185.0], [51.5, 186.0], [51.6, 187.0], [51.7, 188.0], [51.8, 189.0], [51.9, 192.0], [52.0, 194.0], [52.1, 194.0], [52.2, 195.0], [52.3, 196.0], [52.4, 197.0], [52.5, 198.0], [52.6, 199.0], [52.7, 199.0], [52.8, 200.0], [52.9, 201.0], [53.0, 202.0], [53.1, 202.0], [53.2, 202.0], [53.3, 203.0], [53.4, 205.0], [53.5, 205.0], [53.6, 206.0], [53.7, 206.0], [53.8, 207.0], [53.9, 209.0], [54.0, 210.0], [54.1, 211.0], [54.2, 212.0], [54.3, 213.0], [54.4, 214.0], [54.5, 215.0], [54.6, 216.0], [54.7, 216.0], [54.8, 217.0], [54.9, 218.0], [55.0, 221.0], [55.1, 222.0], [55.2, 223.0], [55.3, 224.0], [55.4, 225.0], [55.5, 226.0], [55.6, 227.0], [55.7, 228.0], [55.8, 229.0], [55.9, 230.0], [56.0, 230.0], [56.1, 231.0], [56.2, 232.0], [56.3, 232.0], [56.4, 233.0], [56.5, 235.0], [56.6, 235.0], [56.7, 236.0], [56.8, 236.0], [56.9, 238.0], [57.0, 239.0], [57.1, 239.0], [57.2, 240.0], [57.3, 241.0], [57.4, 243.0], [57.5, 243.0], [57.6, 244.0], [57.7, 245.0], [57.8, 246.0], [57.9, 247.0], [58.0, 247.0], [58.1, 248.0], [58.2, 250.0], [58.3, 251.0], [58.4, 252.0], [58.5, 253.0], [58.6, 254.0], [58.7, 254.0], [58.8, 255.0], [58.9, 255.0], [59.0, 257.0], [59.1, 257.0], [59.2, 258.0], [59.3, 259.0], [59.4, 260.0], [59.5, 261.0], [59.6, 263.0], [59.7, 263.0], [59.8, 264.0], [59.9, 265.0], [60.0, 265.0], [60.1, 266.0], [60.2, 268.0], [60.3, 269.0], [60.4, 270.0], [60.5, 271.0], [60.6, 272.0], [60.7, 273.0], [60.8, 273.0], [60.9, 274.0], [61.0, 275.0], [61.1, 277.0], [61.2, 278.0], [61.3, 279.0], [61.4, 280.0], [61.5, 282.0], [61.6, 283.0], [61.7, 284.0], [61.8, 285.0], [61.9, 286.0], [62.0, 287.0], [62.1, 288.0], [62.2, 288.0], [62.3, 290.0], [62.4, 291.0], [62.5, 293.0], [62.6, 294.0], [62.7, 294.0], [62.8, 295.0], [62.9, 296.0], [63.0, 298.0], [63.1, 299.0], [63.2, 300.0], [63.3, 300.0], [63.4, 302.0], [63.5, 303.0], [63.6, 304.0], [63.7, 305.0], [63.8, 307.0], [63.9, 308.0], [64.0, 309.0], [64.1, 311.0], [64.2, 313.0], [64.3, 314.0], [64.4, 315.0], [64.5, 317.0], [64.6, 318.0], [64.7, 320.0], [64.8, 321.0], [64.9, 322.0], [65.0, 323.0], [65.1, 325.0], [65.2, 327.0], [65.3, 328.0], [65.4, 330.0], [65.5, 331.0], [65.6, 333.0], [65.7, 334.0], [65.8, 335.0], [65.9, 336.0], [66.0, 338.0], [66.1, 340.0], [66.2, 341.0], [66.3, 342.0], [66.4, 345.0], [66.5, 346.0], [66.6, 347.0], [66.7, 348.0], [66.8, 349.0], [66.9, 350.0], [67.0, 351.0], [67.1, 352.0], [67.2, 354.0], [67.3, 355.0], [67.4, 356.0], [67.5, 357.0], [67.6, 359.0], [67.7, 359.0], [67.8, 361.0], [67.9, 362.0], [68.0, 363.0], [68.1, 364.0], [68.2, 365.0], [68.3, 365.0], [68.4, 367.0], [68.5, 369.0], [68.6, 370.0], [68.7, 372.0], [68.8, 374.0], [68.9, 375.0], [69.0, 377.0], [69.1, 378.0], [69.2, 379.0], [69.3, 380.0], [69.4, 382.0], [69.5, 382.0], [69.6, 384.0], [69.7, 385.0], [69.8, 387.0], [69.9, 388.0], [70.0, 390.0], [70.1, 392.0], [70.2, 393.0], [70.3, 395.0], [70.4, 397.0], [70.5, 398.0], [70.6, 399.0], [70.7, 400.0], [70.8, 402.0], [70.9, 403.0], [71.0, 405.0], [71.1, 405.0], [71.2, 407.0], [71.3, 408.0], [71.4, 409.0], [71.5, 410.0], [71.6, 411.0], [71.7, 412.0], [71.8, 414.0], [71.9, 416.0], [72.0, 418.0], [72.1, 420.0], [72.2, 421.0], [72.3, 422.0], [72.4, 423.0], [72.5, 424.0], [72.6, 425.0], [72.7, 426.0], [72.8, 428.0], [72.9, 429.0], [73.0, 430.0], [73.1, 431.0], [73.2, 432.0], [73.3, 435.0], [73.4, 438.0], [73.5, 440.0], [73.6, 441.0], [73.7, 443.0], [73.8, 444.0], [73.9, 445.0], [74.0, 446.0], [74.1, 448.0], [74.2, 449.0], [74.3, 450.0], [74.4, 452.0], [74.5, 455.0], [74.6, 456.0], [74.7, 458.0], [74.8, 460.0], [74.9, 462.0], [75.0, 463.0], [75.1, 464.0], [75.2, 466.0], [75.3, 468.0], [75.4, 471.0], [75.5, 472.0], [75.6, 472.0], [75.7, 474.0], [75.8, 475.0], [75.9, 476.0], [76.0, 477.0], [76.1, 478.0], [76.2, 479.0], [76.3, 482.0], [76.4, 483.0], [76.5, 485.0], [76.6, 485.0], [76.7, 487.0], [76.8, 488.0], [76.9, 490.0], [77.0, 491.0], [77.1, 494.0], [77.2, 495.0], [77.3, 496.0], [77.4, 497.0], [77.5, 499.0], [77.6, 499.0], [77.7, 502.0], [77.8, 504.0], [77.9, 506.0], [78.0, 508.0], [78.1, 509.0], [78.2, 511.0], [78.3, 512.0], [78.4, 515.0], [78.5, 517.0], [78.6, 518.0], [78.7, 520.0], [78.8, 523.0], [78.9, 524.0], [79.0, 526.0], [79.1, 529.0], [79.2, 530.0], [79.3, 532.0], [79.4, 533.0], [79.5, 535.0], [79.6, 537.0], [79.7, 538.0], [79.8, 541.0], [79.9, 541.0], [80.0, 543.0], [80.1, 545.0], [80.2, 548.0], [80.3, 551.0], [80.4, 553.0], [80.5, 553.0], [80.6, 556.0], [80.7, 557.0], [80.8, 559.0], [80.9, 562.0], [81.0, 564.0], [81.1, 567.0], [81.2, 567.0], [81.3, 568.0], [81.4, 571.0], [81.5, 571.0], [81.6, 576.0], [81.7, 577.0], [81.8, 581.0], [81.9, 584.0], [82.0, 586.0], [82.1, 587.0], [82.2, 588.0], [82.3, 589.0], [82.4, 591.0], [82.5, 592.0], [82.6, 594.0], [82.7, 595.0], [82.8, 598.0], [82.9, 600.0], [83.0, 602.0], [83.1, 605.0], [83.2, 606.0], [83.3, 609.0], [83.4, 611.0], [83.5, 613.0], [83.6, 614.0], [83.7, 616.0], [83.8, 619.0], [83.9, 621.0], [84.0, 621.0], [84.1, 623.0], [84.2, 625.0], [84.3, 627.0], [84.4, 628.0], [84.5, 630.0], [84.6, 632.0], [84.7, 638.0], [84.8, 641.0], [84.9, 641.0], [85.0, 645.0], [85.1, 647.0], [85.2, 648.0], [85.3, 650.0], [85.4, 652.0], [85.5, 654.0], [85.6, 656.0], [85.7, 657.0], [85.8, 661.0], [85.9, 664.0], [86.0, 665.0], [86.1, 666.0], [86.2, 668.0], [86.3, 669.0], [86.4, 671.0], [86.5, 673.0], [86.6, 673.0], [86.7, 679.0], [86.8, 681.0], [86.9, 683.0], [87.0, 685.0], [87.1, 688.0], [87.2, 691.0], [87.3, 693.0], [87.4, 695.0], [87.5, 698.0], [87.6, 699.0], [87.7, 701.0], [87.8, 703.0], [87.9, 705.0], [88.0, 706.0], [88.1, 709.0], [88.2, 712.0], [88.3, 716.0], [88.4, 718.0], [88.5, 719.0], [88.6, 720.0], [88.7, 723.0], [88.8, 725.0], [88.9, 727.0], [89.0, 728.0], [89.1, 729.0], [89.2, 731.0], [89.3, 734.0], [89.4, 736.0], [89.5, 738.0], [89.6, 741.0], [89.7, 745.0], [89.8, 748.0], [89.9, 751.0], [90.0, 754.0], [90.1, 758.0], [90.2, 760.0], [90.3, 765.0], [90.4, 767.0], [90.5, 772.0], [90.6, 779.0], [90.7, 781.0], [90.8, 783.0], [90.9, 785.0], [91.0, 788.0], [91.1, 791.0], [91.2, 794.0], [91.3, 796.0], [91.4, 803.0], [91.5, 806.0], [91.6, 810.0], [91.7, 813.0], [91.8, 815.0], [91.9, 818.0], [92.0, 821.0], [92.1, 827.0], [92.2, 829.0], [92.3, 831.0], [92.4, 834.0], [92.5, 838.0], [92.6, 843.0], [92.7, 845.0], [92.8, 851.0], [92.9, 859.0], [93.0, 867.0], [93.1, 873.0], [93.2, 878.0], [93.3, 884.0], [93.4, 888.0], [93.5, 899.0], [93.6, 906.0], [93.7, 911.0], [93.8, 918.0], [93.9, 927.0], [94.0, 942.0], [94.1, 948.0], [94.2, 953.0], [94.3, 962.0], [94.4, 964.0], [94.5, 968.0], [94.6, 973.0], [94.7, 978.0], [94.8, 985.0], [94.9, 999.0], [95.0, 1003.0], [95.1, 1009.0], [95.2, 1016.0], [95.3, 1024.0], [95.4, 1029.0], [95.5, 1032.0], [95.6, 1039.0], [95.7, 1046.0], [95.8, 1050.0], [95.9, 1054.0], [96.0, 1059.0], [96.1, 1064.0], [96.2, 1071.0], [96.3, 1079.0], [96.4, 1083.0], [96.5, 1092.0], [96.6, 1107.0], [96.7, 1113.0], [96.8, 1127.0], [96.9, 1143.0], [97.0, 1157.0], [97.1, 1162.0], [97.2, 1171.0], [97.3, 1186.0], [97.4, 1195.0], [97.5, 1205.0], [97.6, 1216.0], [97.7, 1228.0], [97.8, 1267.0], [97.9, 1283.0], [98.0, 1300.0], [98.1, 1322.0], [98.2, 1336.0], [98.3, 1364.0], [98.4, 1382.0], [98.5, 1408.0], [98.6, 1429.0], [98.7, 1447.0], [98.8, 1478.0], [98.9, 1548.0], [99.0, 1580.0], [99.1, 1608.0], [99.2, 1686.0], [99.3, 1789.0], [99.4, 1868.0], [99.5, 1936.0], [99.6, 2026.0], [99.7, 2065.0], [99.8, 2160.0], [99.9, 2203.0], [100.0, 2368.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 2.0, "minX": 0.0, "maxY": 2111.0, "series": [{"data": [[0.0, 2111.0], [2100.0, 9.0], [2200.0, 4.0], [2300.0, 2.0], [600.0, 252.0], [700.0, 195.0], [800.0, 113.0], [200.0, 548.0], [900.0, 76.0], [1000.0, 85.0], [1100.0, 49.0], [300.0, 395.0], [1200.0, 26.0], [1300.0, 25.0], [1400.0, 20.0], [1500.0, 11.0], [100.0, 665.0], [400.0, 365.0], [1600.0, 9.0], [1700.0, 6.0], [1800.0, 5.0], [1900.0, 7.0], [500.0, 276.0], [2000.0, 8.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 2300.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 61.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 4087.0, "series": [{"data": [[0.0, 4087.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1114.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 61.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.971264367816094, "minX": 1.60245792E12, "maxY": 10.0, "series": [{"data": [[1.60245804E12, 9.971264367816094], [1.60245792E12, 9.981231231231238], [1.60245798E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60245804E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 310.075676706061, "minX": 1.0, "maxY": 2138.0, "series": [{"data": [[8.0, 822.0], [4.0, 1187.0], [2.0, 2053.0], [1.0, 1922.0], [9.0, 583.0], [5.0, 712.3333333333334], [10.0, 310.075676706061], [3.0, 1148.0], [6.0, 2138.0], [7.0, 1157.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.98669707335615, 312.49258836944114]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 11544.1, "minX": 1.60245792E12, "maxY": 1610939.2166666666, "series": [{"data": [[1.60245804E12, 1610939.2166666666], [1.60245792E12, 1281793.0333333334], [1.60245798E12, 1358048.1833333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60245804E12, 13643.25], [1.60245792E12, 11544.1], [1.60245798E12, 20303.6]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60245804E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 253.96065989847736, "minX": 1.60245792E12, "maxY": 384.9324324324321, "series": [{"data": [[1.60245804E12, 339.2356321839086], [1.60245792E12, 384.9324324324321], [1.60245798E12, 253.96065989847736]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60245804E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 253.6649746192901, "minX": 1.60245792E12, "maxY": 384.4256756756759, "series": [{"data": [[1.60245804E12, 338.74137931034477], [1.60245792E12, 384.4256756756759], [1.60245798E12, 253.6649746192901]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60245804E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0038314176245210743, "minX": 1.60245792E12, "maxY": 0.07132132132132137, "series": [{"data": [[1.60245804E12, 0.0038314176245210743], [1.60245792E12, 0.07132132132132137], [1.60245798E12, 0.011844331641285965]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60245804E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 29.0, "minX": 1.60245792E12, "maxY": 2368.0, "series": [{"data": [[1.60245804E12, 2368.0], [1.60245792E12, 2204.0], [1.60245798E12, 2311.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60245804E12, 34.0], [1.60245792E12, 36.0], [1.60245798E12, 34.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60245804E12, 34.0], [1.60245792E12, 37.0], [1.60245798E12, 34.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60245804E12, 34.0], [1.60245792E12, 36.663499841094016], [1.60245798E12, 34.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60245804E12, 30.0], [1.60245792E12, 33.0], [1.60245798E12, 29.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60245804E12, 228.5], [1.60245792E12, 270.5], [1.60245798E12, 115.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60245804E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 47.0, "minX": 1.0, "maxY": 1804.5, "series": [{"data": [[4.0, 1804.5], [5.0, 1427.0], [6.0, 1654.5], [7.0, 1265.0], [8.0, 1058.0], [10.0, 1045.5], [11.0, 721.0], [12.0, 701.0], [13.0, 676.5], [14.0, 591.0], [15.0, 503.0], [16.0, 479.0], [17.0, 552.5], [18.0, 561.5], [19.0, 478.0], [20.0, 488.5], [21.0, 511.0], [22.0, 441.0], [23.0, 350.0], [24.0, 409.0], [25.0, 413.0], [26.0, 354.0], [27.0, 304.0], [28.0, 240.5], [29.0, 296.0], [30.0, 321.0], [31.0, 348.0], [33.0, 220.0], [32.0, 286.0], [35.0, 145.0], [34.0, 116.0], [37.0, 80.0], [36.0, 277.5], [39.0, 126.0], [41.0, 79.5], [40.0, 198.0], [42.0, 85.0], [44.0, 81.0], [45.0, 162.0], [46.0, 147.0], [47.0, 97.0], [49.0, 101.5], [51.0, 102.0], [53.0, 122.0], [52.0, 94.5], [54.0, 140.0], [56.0, 109.0], [57.0, 90.0], [58.0, 80.0], [61.0, 80.0], [63.0, 117.0], [62.0, 84.0], [66.0, 118.5], [64.0, 139.5], [68.0, 81.0], [75.0, 103.0], [72.0, 63.5], [78.0, 82.0], [76.0, 47.0], [81.0, 81.0], [83.0, 94.0], [84.0, 81.5], [85.0, 85.0], [1.0, 136.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 85.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 47.0, "minX": 1.0, "maxY": 1804.5, "series": [{"data": [[4.0, 1804.5], [5.0, 1424.0], [6.0, 1653.5], [7.0, 1264.0], [8.0, 1055.0], [10.0, 1045.0], [11.0, 720.5], [12.0, 701.0], [13.0, 676.0], [14.0, 588.5], [15.0, 503.0], [16.0, 478.5], [17.0, 551.5], [18.0, 561.5], [19.0, 478.0], [20.0, 488.5], [21.0, 511.0], [22.0, 440.5], [23.0, 349.0], [24.0, 408.5], [25.0, 413.0], [26.0, 352.5], [27.0, 303.0], [28.0, 239.0], [29.0, 296.0], [30.0, 319.5], [31.0, 347.5], [33.0, 220.0], [32.0, 285.0], [35.0, 145.0], [34.0, 115.5], [37.0, 80.0], [36.0, 276.5], [39.0, 126.0], [41.0, 79.0], [40.0, 198.0], [42.0, 84.5], [44.0, 80.5], [45.0, 162.0], [46.0, 147.0], [47.0, 97.0], [49.0, 101.5], [51.0, 101.5], [53.0, 122.0], [52.0, 94.5], [54.0, 140.0], [56.0, 109.0], [57.0, 90.0], [58.0, 80.0], [61.0, 80.0], [63.0, 117.0], [62.0, 84.0], [66.0, 118.5], [64.0, 139.5], [68.0, 81.0], [75.0, 103.0], [72.0, 63.5], [78.0, 82.0], [76.0, 47.0], [81.0, 81.0], [83.0, 93.0], [84.0, 81.5], [85.0, 85.0], [1.0, 132.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 85.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 22.366666666666667, "minX": 1.60245792E12, "maxY": 39.4, "series": [{"data": [[1.60245804E12, 25.933333333333334], [1.60245792E12, 22.366666666666667], [1.60245798E12, 39.4]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60245804E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 22.2, "minX": 1.60245792E12, "maxY": 39.4, "series": [{"data": [[1.60245804E12, 26.1], [1.60245792E12, 22.2], [1.60245798E12, 39.4]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60245804E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 22.2, "minX": 1.60245792E12, "maxY": 39.4, "series": [{"data": [[1.60245804E12, 26.1], [1.60245792E12, 22.2], [1.60245798E12, 39.4]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60245804E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 22.2, "minX": 1.60245792E12, "maxY": 39.4, "series": [{"data": [[1.60245804E12, 26.1], [1.60245792E12, 22.2], [1.60245798E12, 39.4]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60245804E12, "title": "Total Transactions Per Second"}},
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

