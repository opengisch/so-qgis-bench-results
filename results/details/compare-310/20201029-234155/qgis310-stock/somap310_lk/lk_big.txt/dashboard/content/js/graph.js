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
        data: {"result": {"minY": 29.0, "minX": 0.0, "maxY": 3651.0, "series": [{"data": [[0.0, 29.0], [0.1, 31.0], [0.2, 31.0], [0.3, 32.0], [0.4, 32.0], [0.5, 33.0], [0.6, 33.0], [0.7, 33.0], [0.8, 34.0], [0.9, 34.0], [1.0, 34.0], [1.1, 34.0], [1.2, 35.0], [1.3, 35.0], [1.4, 35.0], [1.5, 35.0], [1.6, 35.0], [1.7, 36.0], [1.8, 36.0], [1.9, 36.0], [2.0, 36.0], [2.1, 36.0], [2.2, 36.0], [2.3, 36.0], [2.4, 36.0], [2.5, 36.0], [2.6, 37.0], [2.7, 37.0], [2.8, 37.0], [2.9, 37.0], [3.0, 37.0], [3.1, 37.0], [3.2, 37.0], [3.3, 37.0], [3.4, 37.0], [3.5, 37.0], [3.6, 37.0], [3.7, 37.0], [3.8, 37.0], [3.9, 38.0], [4.0, 38.0], [4.1, 38.0], [4.2, 38.0], [4.3, 38.0], [4.4, 38.0], [4.5, 38.0], [4.6, 38.0], [4.7, 38.0], [4.8, 38.0], [4.9, 38.0], [5.0, 38.0], [5.1, 38.0], [5.2, 39.0], [5.3, 39.0], [5.4, 39.0], [5.5, 39.0], [5.6, 39.0], [5.7, 39.0], [5.8, 39.0], [5.9, 39.0], [6.0, 39.0], [6.1, 39.0], [6.2, 39.0], [6.3, 39.0], [6.4, 39.0], [6.5, 40.0], [6.6, 40.0], [6.7, 40.0], [6.8, 40.0], [6.9, 40.0], [7.0, 40.0], [7.1, 40.0], [7.2, 40.0], [7.3, 40.0], [7.4, 40.0], [7.5, 40.0], [7.6, 40.0], [7.7, 40.0], [7.8, 41.0], [7.9, 41.0], [8.0, 41.0], [8.1, 41.0], [8.2, 41.0], [8.3, 41.0], [8.4, 41.0], [8.5, 41.0], [8.6, 41.0], [8.7, 41.0], [8.8, 41.0], [8.9, 41.0], [9.0, 41.0], [9.1, 41.0], [9.2, 41.0], [9.3, 41.0], [9.4, 41.0], [9.5, 41.0], [9.6, 41.0], [9.7, 41.0], [9.8, 42.0], [9.9, 42.0], [10.0, 42.0], [10.1, 42.0], [10.2, 42.0], [10.3, 42.0], [10.4, 42.0], [10.5, 42.0], [10.6, 42.0], [10.7, 42.0], [10.8, 42.0], [10.9, 42.0], [11.0, 42.0], [11.1, 42.0], [11.2, 42.0], [11.3, 42.0], [11.4, 43.0], [11.5, 43.0], [11.6, 43.0], [11.7, 43.0], [11.8, 43.0], [11.9, 43.0], [12.0, 43.0], [12.1, 43.0], [12.2, 43.0], [12.3, 43.0], [12.4, 43.0], [12.5, 43.0], [12.6, 43.0], [12.7, 43.0], [12.8, 43.0], [12.9, 44.0], [13.0, 44.0], [13.1, 44.0], [13.2, 44.0], [13.3, 44.0], [13.4, 44.0], [13.5, 44.0], [13.6, 44.0], [13.7, 44.0], [13.8, 44.0], [13.9, 44.0], [14.0, 44.0], [14.1, 44.0], [14.2, 45.0], [14.3, 45.0], [14.4, 45.0], [14.5, 45.0], [14.6, 45.0], [14.7, 45.0], [14.8, 45.0], [14.9, 45.0], [15.0, 45.0], [15.1, 45.0], [15.2, 45.0], [15.3, 46.0], [15.4, 46.0], [15.5, 46.0], [15.6, 46.0], [15.7, 46.0], [15.8, 46.0], [15.9, 46.0], [16.0, 46.0], [16.1, 47.0], [16.2, 47.0], [16.3, 47.0], [16.4, 47.0], [16.5, 47.0], [16.6, 47.0], [16.7, 47.0], [16.8, 47.0], [16.9, 47.0], [17.0, 48.0], [17.1, 48.0], [17.2, 48.0], [17.3, 48.0], [17.4, 48.0], [17.5, 48.0], [17.6, 48.0], [17.7, 48.0], [17.8, 49.0], [17.9, 49.0], [18.0, 49.0], [18.1, 49.0], [18.2, 49.0], [18.3, 49.0], [18.4, 50.0], [18.5, 50.0], [18.6, 50.0], [18.7, 50.0], [18.8, 50.0], [18.9, 50.0], [19.0, 50.0], [19.1, 50.0], [19.2, 51.0], [19.3, 51.0], [19.4, 51.0], [19.5, 51.0], [19.6, 51.0], [19.7, 52.0], [19.8, 52.0], [19.9, 52.0], [20.0, 52.0], [20.1, 53.0], [20.2, 53.0], [20.3, 53.0], [20.4, 54.0], [20.5, 54.0], [20.6, 54.0], [20.7, 55.0], [20.8, 55.0], [20.9, 55.0], [21.0, 56.0], [21.1, 56.0], [21.2, 57.0], [21.3, 57.0], [21.4, 57.0], [21.5, 58.0], [21.6, 58.0], [21.7, 58.0], [21.8, 59.0], [21.9, 59.0], [22.0, 60.0], [22.1, 60.0], [22.2, 61.0], [22.3, 61.0], [22.4, 61.0], [22.5, 61.0], [22.6, 61.0], [22.7, 62.0], [22.8, 62.0], [22.9, 63.0], [23.0, 63.0], [23.1, 63.0], [23.2, 63.0], [23.3, 64.0], [23.4, 64.0], [23.5, 64.0], [23.6, 65.0], [23.7, 65.0], [23.8, 65.0], [23.9, 65.0], [24.0, 65.0], [24.1, 66.0], [24.2, 66.0], [24.3, 66.0], [24.4, 66.0], [24.5, 67.0], [24.6, 67.0], [24.7, 67.0], [24.8, 67.0], [24.9, 67.0], [25.0, 68.0], [25.1, 68.0], [25.2, 68.0], [25.3, 68.0], [25.4, 68.0], [25.5, 68.0], [25.6, 68.0], [25.7, 69.0], [25.8, 69.0], [25.9, 69.0], [26.0, 69.0], [26.1, 69.0], [26.2, 69.0], [26.3, 69.0], [26.4, 70.0], [26.5, 70.0], [26.6, 70.0], [26.7, 70.0], [26.8, 70.0], [26.9, 71.0], [27.0, 71.0], [27.1, 71.0], [27.2, 71.0], [27.3, 71.0], [27.4, 72.0], [27.5, 72.0], [27.6, 72.0], [27.7, 72.0], [27.8, 72.0], [27.9, 72.0], [28.0, 72.0], [28.1, 72.0], [28.2, 72.0], [28.3, 73.0], [28.4, 73.0], [28.5, 73.0], [28.6, 73.0], [28.7, 73.0], [28.8, 73.0], [28.9, 73.0], [29.0, 74.0], [29.1, 74.0], [29.2, 74.0], [29.3, 74.0], [29.4, 74.0], [29.5, 74.0], [29.6, 74.0], [29.7, 74.0], [29.8, 75.0], [29.9, 75.0], [30.0, 75.0], [30.1, 75.0], [30.2, 75.0], [30.3, 76.0], [30.4, 76.0], [30.5, 76.0], [30.6, 76.0], [30.7, 76.0], [30.8, 76.0], [30.9, 77.0], [31.0, 77.0], [31.1, 77.0], [31.2, 77.0], [31.3, 77.0], [31.4, 77.0], [31.5, 77.0], [31.6, 77.0], [31.7, 78.0], [31.8, 78.0], [31.9, 78.0], [32.0, 78.0], [32.1, 78.0], [32.2, 78.0], [32.3, 78.0], [32.4, 78.0], [32.5, 79.0], [32.6, 79.0], [32.7, 79.0], [32.8, 79.0], [32.9, 79.0], [33.0, 79.0], [33.1, 80.0], [33.2, 80.0], [33.3, 80.0], [33.4, 80.0], [33.5, 80.0], [33.6, 80.0], [33.7, 80.0], [33.8, 80.0], [33.9, 81.0], [34.0, 81.0], [34.1, 81.0], [34.2, 81.0], [34.3, 81.0], [34.4, 82.0], [34.5, 82.0], [34.6, 82.0], [34.7, 82.0], [34.8, 82.0], [34.9, 82.0], [35.0, 83.0], [35.1, 83.0], [35.2, 83.0], [35.3, 83.0], [35.4, 83.0], [35.5, 83.0], [35.6, 84.0], [35.7, 84.0], [35.8, 84.0], [35.9, 84.0], [36.0, 85.0], [36.1, 85.0], [36.2, 85.0], [36.3, 85.0], [36.4, 86.0], [36.5, 86.0], [36.6, 86.0], [36.7, 86.0], [36.8, 86.0], [36.9, 86.0], [37.0, 87.0], [37.1, 87.0], [37.2, 87.0], [37.3, 87.0], [37.4, 87.0], [37.5, 88.0], [37.6, 88.0], [37.7, 88.0], [37.8, 88.0], [37.9, 88.0], [38.0, 89.0], [38.1, 89.0], [38.2, 89.0], [38.3, 90.0], [38.4, 90.0], [38.5, 90.0], [38.6, 91.0], [38.7, 91.0], [38.8, 91.0], [38.9, 91.0], [39.0, 92.0], [39.1, 92.0], [39.2, 92.0], [39.3, 93.0], [39.4, 94.0], [39.5, 94.0], [39.6, 94.0], [39.7, 95.0], [39.8, 95.0], [39.9, 96.0], [40.0, 96.0], [40.1, 96.0], [40.2, 97.0], [40.3, 97.0], [40.4, 97.0], [40.5, 98.0], [40.6, 98.0], [40.7, 99.0], [40.8, 99.0], [40.9, 100.0], [41.0, 101.0], [41.1, 101.0], [41.2, 102.0], [41.3, 103.0], [41.4, 103.0], [41.5, 104.0], [41.6, 104.0], [41.7, 105.0], [41.8, 105.0], [41.9, 106.0], [42.0, 107.0], [42.1, 107.0], [42.2, 108.0], [42.3, 109.0], [42.4, 109.0], [42.5, 110.0], [42.6, 111.0], [42.7, 112.0], [42.8, 113.0], [42.9, 113.0], [43.0, 115.0], [43.1, 115.0], [43.2, 116.0], [43.3, 116.0], [43.4, 117.0], [43.5, 118.0], [43.6, 118.0], [43.7, 119.0], [43.8, 120.0], [43.9, 121.0], [44.0, 121.0], [44.1, 122.0], [44.2, 122.0], [44.3, 123.0], [44.4, 123.0], [44.5, 124.0], [44.6, 124.0], [44.7, 125.0], [44.8, 125.0], [44.9, 126.0], [45.0, 126.0], [45.1, 127.0], [45.2, 128.0], [45.3, 128.0], [45.4, 128.0], [45.5, 129.0], [45.6, 129.0], [45.7, 130.0], [45.8, 131.0], [45.9, 131.0], [46.0, 132.0], [46.1, 132.0], [46.2, 133.0], [46.3, 134.0], [46.4, 134.0], [46.5, 135.0], [46.6, 136.0], [46.7, 137.0], [46.8, 138.0], [46.9, 139.0], [47.0, 140.0], [47.1, 140.0], [47.2, 141.0], [47.3, 142.0], [47.4, 143.0], [47.5, 144.0], [47.6, 145.0], [47.7, 146.0], [47.8, 147.0], [47.9, 148.0], [48.0, 149.0], [48.1, 149.0], [48.2, 150.0], [48.3, 151.0], [48.4, 152.0], [48.5, 153.0], [48.6, 154.0], [48.7, 155.0], [48.8, 157.0], [48.9, 158.0], [49.0, 159.0], [49.1, 161.0], [49.2, 162.0], [49.3, 163.0], [49.4, 164.0], [49.5, 165.0], [49.6, 166.0], [49.7, 168.0], [49.8, 169.0], [49.9, 169.0], [50.0, 170.0], [50.1, 171.0], [50.2, 173.0], [50.3, 173.0], [50.4, 174.0], [50.5, 176.0], [50.6, 177.0], [50.7, 178.0], [50.8, 179.0], [50.9, 179.0], [51.0, 180.0], [51.1, 181.0], [51.2, 181.0], [51.3, 182.0], [51.4, 183.0], [51.5, 184.0], [51.6, 184.0], [51.7, 185.0], [51.8, 186.0], [51.9, 187.0], [52.0, 187.0], [52.1, 188.0], [52.2, 189.0], [52.3, 189.0], [52.4, 190.0], [52.5, 191.0], [52.6, 191.0], [52.7, 193.0], [52.8, 193.0], [52.9, 194.0], [53.0, 195.0], [53.1, 195.0], [53.2, 196.0], [53.3, 197.0], [53.4, 198.0], [53.5, 198.0], [53.6, 199.0], [53.7, 199.0], [53.8, 200.0], [53.9, 201.0], [54.0, 202.0], [54.1, 202.0], [54.2, 203.0], [54.3, 204.0], [54.4, 204.0], [54.5, 205.0], [54.6, 206.0], [54.7, 207.0], [54.8, 207.0], [54.9, 208.0], [55.0, 208.0], [55.1, 209.0], [55.2, 209.0], [55.3, 210.0], [55.4, 211.0], [55.5, 211.0], [55.6, 212.0], [55.7, 212.0], [55.8, 213.0], [55.9, 214.0], [56.0, 215.0], [56.1, 216.0], [56.2, 217.0], [56.3, 218.0], [56.4, 219.0], [56.5, 220.0], [56.6, 221.0], [56.7, 221.0], [56.8, 221.0], [56.9, 223.0], [57.0, 224.0], [57.1, 225.0], [57.2, 226.0], [57.3, 226.0], [57.4, 227.0], [57.5, 227.0], [57.6, 229.0], [57.7, 229.0], [57.8, 230.0], [57.9, 230.0], [58.0, 231.0], [58.1, 232.0], [58.2, 232.0], [58.3, 233.0], [58.4, 235.0], [58.5, 235.0], [58.6, 236.0], [58.7, 237.0], [58.8, 238.0], [58.9, 239.0], [59.0, 240.0], [59.1, 241.0], [59.2, 242.0], [59.3, 243.0], [59.4, 244.0], [59.5, 245.0], [59.6, 245.0], [59.7, 247.0], [59.8, 248.0], [59.9, 248.0], [60.0, 250.0], [60.1, 251.0], [60.2, 251.0], [60.3, 252.0], [60.4, 253.0], [60.5, 254.0], [60.6, 254.0], [60.7, 255.0], [60.8, 256.0], [60.9, 257.0], [61.0, 258.0], [61.1, 259.0], [61.2, 259.0], [61.3, 261.0], [61.4, 263.0], [61.5, 263.0], [61.6, 264.0], [61.7, 265.0], [61.8, 266.0], [61.9, 267.0], [62.0, 269.0], [62.1, 270.0], [62.2, 271.0], [62.3, 272.0], [62.4, 272.0], [62.5, 273.0], [62.6, 274.0], [62.7, 275.0], [62.8, 276.0], [62.9, 277.0], [63.0, 279.0], [63.1, 281.0], [63.2, 282.0], [63.3, 282.0], [63.4, 285.0], [63.5, 286.0], [63.6, 288.0], [63.7, 290.0], [63.8, 291.0], [63.9, 293.0], [64.0, 293.0], [64.1, 295.0], [64.2, 297.0], [64.3, 297.0], [64.4, 299.0], [64.5, 300.0], [64.6, 303.0], [64.7, 304.0], [64.8, 305.0], [64.9, 306.0], [65.0, 308.0], [65.1, 308.0], [65.2, 309.0], [65.3, 311.0], [65.4, 311.0], [65.5, 312.0], [65.6, 314.0], [65.7, 317.0], [65.8, 318.0], [65.9, 319.0], [66.0, 320.0], [66.1, 322.0], [66.2, 323.0], [66.3, 324.0], [66.4, 325.0], [66.5, 327.0], [66.6, 328.0], [66.7, 329.0], [66.8, 330.0], [66.9, 331.0], [67.0, 332.0], [67.1, 333.0], [67.2, 334.0], [67.3, 336.0], [67.4, 337.0], [67.5, 338.0], [67.6, 339.0], [67.7, 340.0], [67.8, 342.0], [67.9, 343.0], [68.0, 345.0], [68.1, 346.0], [68.2, 347.0], [68.3, 348.0], [68.4, 349.0], [68.5, 350.0], [68.6, 351.0], [68.7, 353.0], [68.8, 354.0], [68.9, 355.0], [69.0, 357.0], [69.1, 359.0], [69.2, 362.0], [69.3, 363.0], [69.4, 365.0], [69.5, 368.0], [69.6, 368.0], [69.7, 369.0], [69.8, 370.0], [69.9, 372.0], [70.0, 374.0], [70.1, 376.0], [70.2, 377.0], [70.3, 378.0], [70.4, 380.0], [70.5, 382.0], [70.6, 385.0], [70.7, 387.0], [70.8, 388.0], [70.9, 388.0], [71.0, 390.0], [71.1, 391.0], [71.2, 391.0], [71.3, 393.0], [71.4, 394.0], [71.5, 395.0], [71.6, 397.0], [71.7, 398.0], [71.8, 399.0], [71.9, 400.0], [72.0, 401.0], [72.1, 403.0], [72.2, 405.0], [72.3, 407.0], [72.4, 409.0], [72.5, 409.0], [72.6, 411.0], [72.7, 412.0], [72.8, 414.0], [72.9, 416.0], [73.0, 417.0], [73.1, 418.0], [73.2, 419.0], [73.3, 422.0], [73.4, 422.0], [73.5, 424.0], [73.6, 425.0], [73.7, 427.0], [73.8, 428.0], [73.9, 429.0], [74.0, 430.0], [74.1, 432.0], [74.2, 432.0], [74.3, 435.0], [74.4, 435.0], [74.5, 437.0], [74.6, 438.0], [74.7, 439.0], [74.8, 440.0], [74.9, 442.0], [75.0, 443.0], [75.1, 444.0], [75.2, 446.0], [75.3, 447.0], [75.4, 449.0], [75.5, 450.0], [75.6, 450.0], [75.7, 452.0], [75.8, 453.0], [75.9, 455.0], [76.0, 458.0], [76.1, 459.0], [76.2, 460.0], [76.3, 461.0], [76.4, 464.0], [76.5, 465.0], [76.6, 466.0], [76.7, 467.0], [76.8, 470.0], [76.9, 472.0], [77.0, 474.0], [77.1, 477.0], [77.2, 479.0], [77.3, 480.0], [77.4, 481.0], [77.5, 483.0], [77.6, 483.0], [77.7, 484.0], [77.8, 486.0], [77.9, 487.0], [78.0, 489.0], [78.1, 490.0], [78.2, 492.0], [78.3, 494.0], [78.4, 495.0], [78.5, 498.0], [78.6, 499.0], [78.7, 500.0], [78.8, 501.0], [78.9, 502.0], [79.0, 503.0], [79.1, 504.0], [79.2, 505.0], [79.3, 508.0], [79.4, 510.0], [79.5, 511.0], [79.6, 515.0], [79.7, 518.0], [79.8, 522.0], [79.9, 523.0], [80.0, 525.0], [80.1, 526.0], [80.2, 527.0], [80.3, 530.0], [80.4, 531.0], [80.5, 531.0], [80.6, 535.0], [80.7, 537.0], [80.8, 541.0], [80.9, 543.0], [81.0, 545.0], [81.1, 546.0], [81.2, 549.0], [81.3, 550.0], [81.4, 552.0], [81.5, 553.0], [81.6, 556.0], [81.7, 558.0], [81.8, 559.0], [81.9, 559.0], [82.0, 560.0], [82.1, 563.0], [82.2, 566.0], [82.3, 567.0], [82.4, 570.0], [82.5, 572.0], [82.6, 575.0], [82.7, 576.0], [82.8, 582.0], [82.9, 584.0], [83.0, 585.0], [83.1, 588.0], [83.2, 590.0], [83.3, 591.0], [83.4, 594.0], [83.5, 594.0], [83.6, 597.0], [83.7, 599.0], [83.8, 602.0], [83.9, 603.0], [84.0, 604.0], [84.1, 607.0], [84.2, 609.0], [84.3, 610.0], [84.4, 611.0], [84.5, 612.0], [84.6, 614.0], [84.7, 616.0], [84.8, 621.0], [84.9, 622.0], [85.0, 624.0], [85.1, 625.0], [85.2, 629.0], [85.3, 630.0], [85.4, 633.0], [85.5, 636.0], [85.6, 638.0], [85.7, 641.0], [85.8, 643.0], [85.9, 644.0], [86.0, 648.0], [86.1, 649.0], [86.2, 652.0], [86.3, 654.0], [86.4, 656.0], [86.5, 658.0], [86.6, 659.0], [86.7, 660.0], [86.8, 663.0], [86.9, 665.0], [87.0, 665.0], [87.1, 667.0], [87.2, 670.0], [87.3, 672.0], [87.4, 672.0], [87.5, 675.0], [87.6, 677.0], [87.7, 680.0], [87.8, 682.0], [87.9, 684.0], [88.0, 685.0], [88.1, 687.0], [88.2, 691.0], [88.3, 693.0], [88.4, 698.0], [88.5, 699.0], [88.6, 700.0], [88.7, 703.0], [88.8, 706.0], [88.9, 709.0], [89.0, 712.0], [89.1, 715.0], [89.2, 717.0], [89.3, 722.0], [89.4, 727.0], [89.5, 731.0], [89.6, 734.0], [89.7, 738.0], [89.8, 738.0], [89.9, 739.0], [90.0, 743.0], [90.1, 743.0], [90.2, 745.0], [90.3, 749.0], [90.4, 751.0], [90.5, 759.0], [90.6, 760.0], [90.7, 766.0], [90.8, 769.0], [90.9, 774.0], [91.0, 778.0], [91.1, 782.0], [91.2, 786.0], [91.3, 789.0], [91.4, 793.0], [91.5, 796.0], [91.6, 800.0], [91.7, 807.0], [91.8, 811.0], [91.9, 814.0], [92.0, 821.0], [92.1, 824.0], [92.2, 829.0], [92.3, 836.0], [92.4, 844.0], [92.5, 847.0], [92.6, 852.0], [92.7, 855.0], [92.8, 862.0], [92.9, 865.0], [93.0, 875.0], [93.1, 886.0], [93.2, 893.0], [93.3, 903.0], [93.4, 906.0], [93.5, 912.0], [93.6, 919.0], [93.7, 923.0], [93.8, 927.0], [93.9, 938.0], [94.0, 944.0], [94.1, 951.0], [94.2, 956.0], [94.3, 968.0], [94.4, 972.0], [94.5, 974.0], [94.6, 980.0], [94.7, 983.0], [94.8, 989.0], [94.9, 995.0], [95.0, 1002.0], [95.1, 1007.0], [95.2, 1011.0], [95.3, 1030.0], [95.4, 1039.0], [95.5, 1046.0], [95.6, 1049.0], [95.7, 1059.0], [95.8, 1061.0], [95.9, 1066.0], [96.0, 1070.0], [96.1, 1073.0], [96.2, 1085.0], [96.3, 1099.0], [96.4, 1109.0], [96.5, 1131.0], [96.6, 1145.0], [96.7, 1148.0], [96.8, 1158.0], [96.9, 1161.0], [97.0, 1181.0], [97.1, 1191.0], [97.2, 1203.0], [97.3, 1212.0], [97.4, 1226.0], [97.5, 1246.0], [97.6, 1257.0], [97.7, 1278.0], [97.8, 1302.0], [97.9, 1326.0], [98.0, 1352.0], [98.1, 1405.0], [98.2, 1427.0], [98.3, 1455.0], [98.4, 1470.0], [98.5, 1492.0], [98.6, 1530.0], [98.7, 1602.0], [98.8, 1633.0], [98.9, 1724.0], [99.0, 1784.0], [99.1, 1814.0], [99.2, 1904.0], [99.3, 1924.0], [99.4, 1944.0], [99.5, 2095.0], [99.6, 2209.0], [99.7, 2422.0], [99.8, 2475.0], [99.9, 3305.0], [100.0, 3651.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 2149.0, "series": [{"data": [[0.0, 2149.0], [600.0, 253.0], [700.0, 160.0], [800.0, 89.0], [900.0, 88.0], [1000.0, 72.0], [1100.0, 44.0], [1200.0, 34.0], [1300.0, 15.0], [1400.0, 24.0], [1500.0, 8.0], [100.0, 681.0], [1600.0, 10.0], [1700.0, 9.0], [1800.0, 7.0], [1900.0, 12.0], [2000.0, 5.0], [2100.0, 3.0], [2300.0, 3.0], [2200.0, 4.0], [2400.0, 7.0], [2700.0, 1.0], [2800.0, 1.0], [200.0, 561.0], [3200.0, 1.0], [3300.0, 4.0], [3400.0, 1.0], [3600.0, 1.0], [300.0, 391.0], [400.0, 355.0], [500.0, 269.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3600.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 77.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 4144.0, "series": [{"data": [[0.0, 4144.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1041.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 77.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 7.5, "minX": 1.60401492E12, "maxY": 10.0, "series": [{"data": [[1.60401498E12, 10.0], [1.60401492E12, 9.980479148181004], [1.60401504E12, 10.0], [1.6040151E12, 7.5]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6040151E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 305.86141822340915, "minX": 1.0, "maxY": 3651.0, "series": [{"data": [[4.0, 1757.5], [8.0, 822.0], [2.0, 3356.0], [1.0, 3305.0], [9.0, 432.0], [5.0, 755.0], [10.0, 305.86141822340915], [6.0, 3651.0], [3.0, 3315.0], [7.0, 3483.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.98726719878372, 309.99638920562535]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 153.43333333333334, "minX": 1.60401492E12, "maxY": 1669526.3333333333, "series": [{"data": [[1.60401498E12, 1463025.5833333333], [1.60401492E12, 1093170.2333333334], [1.60401504E12, 1669526.3333333333], [1.6040151E12, 25362.5]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60401498E12, 19199.433333333334], [1.60401492E12, 9745.416666666666], [1.60401504E12, 16392.666666666668], [1.6040151E12, 153.43333333333334]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6040151E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 264.9352262644185, "minX": 1.60401492E12, "maxY": 2434.111111111111, "series": [{"data": [[1.60401498E12, 264.9352262644185], [1.60401492E12, 355.678793256433], [1.60401504E12, 316.35695115405326], [1.6040151E12, 2434.111111111111]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6040151E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 264.5754214729376, "minX": 1.60401492E12, "maxY": 2433.5, "series": [{"data": [[1.60401498E12, 264.5754214729376], [1.60401492E12, 355.1588287488906], [1.60401504E12, 315.9431025228128], [1.6040151E12, 2433.5]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6040151E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.60401492E12, "maxY": 0.10115350488021294, "series": [{"data": [[1.60401498E12, 0.010204081632653057], [1.60401492E12, 0.10115350488021294], [1.60401504E12, 0.007514761137949538], [1.6040151E12, 0.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6040151E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 29.0, "minX": 1.60401492E12, "maxY": 3651.0, "series": [{"data": [[1.60401498E12, 2732.0], [1.60401492E12, 1918.0], [1.60401504E12, 2475.0], [1.6040151E12, 3651.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60401498E12, 36.0], [1.60401492E12, 33.15199973106384], [1.60401504E12, 33.0], [1.6040151E12, 995.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60401498E12, 36.0], [1.60401492E12, 34.16720010757446], [1.60401504E12, 33.0], [1.6040151E12, 995.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60401498E12, 36.0], [1.60401492E12, 33.71599986553192], [1.60401504E12, 33.0], [1.6040151E12, 995.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60401498E12, 29.0], [1.60401492E12, 31.0], [1.60401504E12, 30.0], [1.6040151E12, 995.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60401498E12, 128.0], [1.60401492E12, 244.0], [1.60401504E12, 194.0], [1.6040151E12, 2301.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6040151E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 49.5, "minX": 2.0, "maxY": 3339.5, "series": [{"data": [[2.0, 3330.5], [3.0, 3339.5], [4.0, 982.5], [5.0, 1151.0], [7.0, 861.0], [8.0, 141.0], [9.0, 633.0], [10.0, 842.5], [11.0, 571.0], [13.0, 668.0], [14.0, 623.0], [15.0, 552.0], [16.0, 455.5], [17.0, 460.0], [18.0, 398.0], [19.0, 493.0], [20.0, 491.5], [21.0, 459.0], [22.0, 467.0], [23.0, 424.0], [24.0, 301.0], [25.0, 339.0], [26.0, 358.5], [27.0, 251.0], [28.0, 282.5], [29.0, 284.0], [30.0, 161.5], [31.0, 226.0], [32.0, 231.0], [33.0, 308.5], [34.0, 78.5], [35.0, 239.0], [36.0, 93.5], [37.0, 226.0], [38.0, 79.5], [39.0, 80.0], [41.0, 195.0], [43.0, 66.5], [44.0, 117.0], [45.0, 119.0], [47.0, 132.0], [46.0, 70.5], [48.0, 101.5], [51.0, 103.5], [50.0, 117.0], [53.0, 135.0], [55.0, 90.5], [56.0, 132.0], [59.0, 117.0], [58.0, 140.5], [61.0, 53.0], [65.0, 72.0], [64.0, 114.0], [71.0, 85.0], [70.0, 76.5], [69.0, 78.0], [68.0, 100.5], [74.0, 85.0], [73.0, 80.0], [79.0, 77.0], [83.0, 104.0], [82.0, 49.5], [87.0, 84.0], [93.0, 89.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 93.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 49.5, "minX": 2.0, "maxY": 3339.0, "series": [{"data": [[2.0, 3330.5], [3.0, 3339.0], [4.0, 981.5], [5.0, 1150.0], [7.0, 858.0], [8.0, 138.5], [9.0, 632.5], [10.0, 839.0], [11.0, 570.0], [13.0, 665.0], [14.0, 621.5], [15.0, 550.0], [16.0, 453.0], [17.0, 459.0], [18.0, 397.0], [19.0, 491.0], [20.0, 491.5], [21.0, 459.0], [22.0, 466.5], [23.0, 424.0], [24.0, 300.5], [25.0, 338.0], [26.0, 358.0], [27.0, 250.0], [28.0, 282.5], [29.0, 282.0], [30.0, 161.0], [31.0, 225.0], [32.0, 231.0], [33.0, 308.0], [34.0, 78.5], [35.0, 239.0], [36.0, 93.5], [37.0, 225.5], [38.0, 79.5], [39.0, 80.0], [41.0, 194.0], [43.0, 66.5], [44.0, 117.0], [45.0, 119.0], [47.0, 132.0], [46.0, 70.5], [48.0, 101.5], [51.0, 103.0], [50.0, 117.0], [53.0, 135.0], [55.0, 90.5], [56.0, 131.5], [59.0, 117.0], [58.0, 140.0], [61.0, 53.0], [65.0, 72.0], [64.0, 114.0], [71.0, 85.0], [70.0, 76.0], [69.0, 78.0], [68.0, 100.5], [74.0, 84.5], [73.0, 80.0], [79.0, 77.0], [83.0, 104.0], [82.0, 49.5], [87.0, 84.0], [93.0, 89.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 93.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.13333333333333333, "minX": 1.60401492E12, "maxY": 37.56666666666667, "series": [{"data": [[1.60401498E12, 37.56666666666667], [1.60401492E12, 18.95], [1.60401504E12, 31.05], [1.6040151E12, 0.13333333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6040151E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.3, "minX": 1.60401492E12, "maxY": 37.56666666666667, "series": [{"data": [[1.60401498E12, 37.56666666666667], [1.60401492E12, 18.783333333333335], [1.60401504E12, 31.05], [1.6040151E12, 0.3]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6040151E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.3, "minX": 1.60401492E12, "maxY": 37.56666666666667, "series": [{"data": [[1.60401498E12, 37.56666666666667], [1.60401492E12, 18.783333333333335], [1.60401504E12, 31.05], [1.6040151E12, 0.3]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6040151E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.3, "minX": 1.60401492E12, "maxY": 37.56666666666667, "series": [{"data": [[1.60401498E12, 37.56666666666667], [1.60401492E12, 18.783333333333335], [1.60401504E12, 31.05], [1.6040151E12, 0.3]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6040151E12, "title": "Total Transactions Per Second"}},
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

