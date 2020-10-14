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
        data: {"result": {"minY": 31.0, "minX": 0.0, "maxY": 3095.0, "series": [{"data": [[0.0, 31.0], [0.1, 31.0], [0.2, 32.0], [0.3, 33.0], [0.4, 33.0], [0.5, 34.0], [0.6, 34.0], [0.7, 34.0], [0.8, 34.0], [0.9, 35.0], [1.0, 35.0], [1.1, 35.0], [1.2, 35.0], [1.3, 35.0], [1.4, 36.0], [1.5, 36.0], [1.6, 36.0], [1.7, 36.0], [1.8, 36.0], [1.9, 36.0], [2.0, 36.0], [2.1, 36.0], [2.2, 36.0], [2.3, 36.0], [2.4, 36.0], [2.5, 37.0], [2.6, 37.0], [2.7, 37.0], [2.8, 37.0], [2.9, 37.0], [3.0, 37.0], [3.1, 37.0], [3.2, 37.0], [3.3, 37.0], [3.4, 37.0], [3.5, 37.0], [3.6, 38.0], [3.7, 38.0], [3.8, 38.0], [3.9, 38.0], [4.0, 38.0], [4.1, 38.0], [4.2, 38.0], [4.3, 38.0], [4.4, 38.0], [4.5, 38.0], [4.6, 38.0], [4.7, 38.0], [4.8, 38.0], [4.9, 38.0], [5.0, 39.0], [5.1, 39.0], [5.2, 39.0], [5.3, 39.0], [5.4, 39.0], [5.5, 39.0], [5.6, 39.0], [5.7, 39.0], [5.8, 39.0], [5.9, 39.0], [6.0, 39.0], [6.1, 39.0], [6.2, 39.0], [6.3, 39.0], [6.4, 39.0], [6.5, 40.0], [6.6, 40.0], [6.7, 40.0], [6.8, 40.0], [6.9, 40.0], [7.0, 40.0], [7.1, 40.0], [7.2, 40.0], [7.3, 40.0], [7.4, 40.0], [7.5, 40.0], [7.6, 40.0], [7.7, 41.0], [7.8, 41.0], [7.9, 41.0], [8.0, 41.0], [8.1, 41.0], [8.2, 41.0], [8.3, 41.0], [8.4, 41.0], [8.5, 41.0], [8.6, 41.0], [8.7, 41.0], [8.8, 41.0], [8.9, 41.0], [9.0, 41.0], [9.1, 41.0], [9.2, 41.0], [9.3, 41.0], [9.4, 42.0], [9.5, 42.0], [9.6, 42.0], [9.7, 42.0], [9.8, 42.0], [9.9, 42.0], [10.0, 42.0], [10.1, 42.0], [10.2, 42.0], [10.3, 42.0], [10.4, 42.0], [10.5, 42.0], [10.6, 42.0], [10.7, 42.0], [10.8, 42.0], [10.9, 42.0], [11.0, 43.0], [11.1, 43.0], [11.2, 43.0], [11.3, 43.0], [11.4, 43.0], [11.5, 43.0], [11.6, 43.0], [11.7, 43.0], [11.8, 43.0], [11.9, 43.0], [12.0, 43.0], [12.1, 43.0], [12.2, 43.0], [12.3, 43.0], [12.4, 44.0], [12.5, 44.0], [12.6, 44.0], [12.7, 44.0], [12.8, 44.0], [12.9, 44.0], [13.0, 44.0], [13.1, 44.0], [13.2, 44.0], [13.3, 44.0], [13.4, 44.0], [13.5, 44.0], [13.6, 45.0], [13.7, 45.0], [13.8, 45.0], [13.9, 45.0], [14.0, 45.0], [14.1, 45.0], [14.2, 45.0], [14.3, 45.0], [14.4, 45.0], [14.5, 45.0], [14.6, 45.0], [14.7, 45.0], [14.8, 46.0], [14.9, 46.0], [15.0, 46.0], [15.1, 46.0], [15.2, 46.0], [15.3, 46.0], [15.4, 47.0], [15.5, 47.0], [15.6, 47.0], [15.7, 47.0], [15.8, 47.0], [15.9, 47.0], [16.0, 47.0], [16.1, 48.0], [16.2, 48.0], [16.3, 48.0], [16.4, 48.0], [16.5, 48.0], [16.6, 48.0], [16.7, 48.0], [16.8, 48.0], [16.9, 48.0], [17.0, 49.0], [17.1, 49.0], [17.2, 49.0], [17.3, 49.0], [17.4, 49.0], [17.5, 49.0], [17.6, 50.0], [17.7, 50.0], [17.8, 50.0], [17.9, 50.0], [18.0, 50.0], [18.1, 50.0], [18.2, 51.0], [18.3, 51.0], [18.4, 51.0], [18.5, 51.0], [18.6, 51.0], [18.7, 51.0], [18.8, 52.0], [18.9, 52.0], [19.0, 52.0], [19.1, 52.0], [19.2, 53.0], [19.3, 53.0], [19.4, 53.0], [19.5, 54.0], [19.6, 54.0], [19.7, 54.0], [19.8, 55.0], [19.9, 55.0], [20.0, 55.0], [20.1, 55.0], [20.2, 56.0], [20.3, 56.0], [20.4, 57.0], [20.5, 57.0], [20.6, 57.0], [20.7, 57.0], [20.8, 58.0], [20.9, 58.0], [21.0, 58.0], [21.1, 58.0], [21.2, 58.0], [21.3, 58.0], [21.4, 59.0], [21.5, 59.0], [21.6, 59.0], [21.7, 59.0], [21.8, 60.0], [21.9, 60.0], [22.0, 60.0], [22.1, 60.0], [22.2, 61.0], [22.3, 61.0], [22.4, 61.0], [22.5, 61.0], [22.6, 62.0], [22.7, 62.0], [22.8, 62.0], [22.9, 63.0], [23.0, 63.0], [23.1, 63.0], [23.2, 63.0], [23.3, 63.0], [23.4, 63.0], [23.5, 64.0], [23.6, 64.0], [23.7, 64.0], [23.8, 65.0], [23.9, 65.0], [24.0, 65.0], [24.1, 65.0], [24.2, 66.0], [24.3, 66.0], [24.4, 66.0], [24.5, 67.0], [24.6, 67.0], [24.7, 67.0], [24.8, 67.0], [24.9, 68.0], [25.0, 68.0], [25.1, 68.0], [25.2, 69.0], [25.3, 69.0], [25.4, 69.0], [25.5, 69.0], [25.6, 69.0], [25.7, 70.0], [25.8, 70.0], [25.9, 70.0], [26.0, 70.0], [26.1, 70.0], [26.2, 70.0], [26.3, 71.0], [26.4, 71.0], [26.5, 71.0], [26.6, 71.0], [26.7, 71.0], [26.8, 71.0], [26.9, 72.0], [27.0, 72.0], [27.1, 72.0], [27.2, 72.0], [27.3, 72.0], [27.4, 72.0], [27.5, 73.0], [27.6, 73.0], [27.7, 73.0], [27.8, 73.0], [27.9, 73.0], [28.0, 73.0], [28.1, 73.0], [28.2, 74.0], [28.3, 74.0], [28.4, 74.0], [28.5, 74.0], [28.6, 74.0], [28.7, 74.0], [28.8, 75.0], [28.9, 75.0], [29.0, 75.0], [29.1, 75.0], [29.2, 75.0], [29.3, 75.0], [29.4, 75.0], [29.5, 75.0], [29.6, 76.0], [29.7, 76.0], [29.8, 76.0], [29.9, 76.0], [30.0, 76.0], [30.1, 76.0], [30.2, 76.0], [30.3, 76.0], [30.4, 76.0], [30.5, 77.0], [30.6, 77.0], [30.7, 77.0], [30.8, 77.0], [30.9, 77.0], [31.0, 77.0], [31.1, 77.0], [31.2, 77.0], [31.3, 78.0], [31.4, 78.0], [31.5, 78.0], [31.6, 78.0], [31.7, 78.0], [31.8, 78.0], [31.9, 78.0], [32.0, 79.0], [32.1, 79.0], [32.2, 79.0], [32.3, 79.0], [32.4, 79.0], [32.5, 79.0], [32.6, 79.0], [32.7, 79.0], [32.8, 80.0], [32.9, 80.0], [33.0, 80.0], [33.1, 80.0], [33.2, 80.0], [33.3, 81.0], [33.4, 81.0], [33.5, 81.0], [33.6, 81.0], [33.7, 81.0], [33.8, 81.0], [33.9, 81.0], [34.0, 82.0], [34.1, 82.0], [34.2, 82.0], [34.3, 82.0], [34.4, 82.0], [34.5, 83.0], [34.6, 83.0], [34.7, 83.0], [34.8, 83.0], [34.9, 83.0], [35.0, 84.0], [35.1, 84.0], [35.2, 84.0], [35.3, 84.0], [35.4, 85.0], [35.5, 85.0], [35.6, 85.0], [35.7, 85.0], [35.8, 86.0], [35.9, 86.0], [36.0, 86.0], [36.1, 86.0], [36.2, 87.0], [36.3, 87.0], [36.4, 87.0], [36.5, 87.0], [36.6, 87.0], [36.7, 88.0], [36.8, 88.0], [36.9, 88.0], [37.0, 88.0], [37.1, 89.0], [37.2, 89.0], [37.3, 89.0], [37.4, 89.0], [37.5, 89.0], [37.6, 90.0], [37.7, 90.0], [37.8, 90.0], [37.9, 91.0], [38.0, 91.0], [38.1, 91.0], [38.2, 92.0], [38.3, 92.0], [38.4, 92.0], [38.5, 93.0], [38.6, 93.0], [38.7, 93.0], [38.8, 94.0], [38.9, 94.0], [39.0, 95.0], [39.1, 95.0], [39.2, 95.0], [39.3, 95.0], [39.4, 96.0], [39.5, 96.0], [39.6, 97.0], [39.7, 98.0], [39.8, 98.0], [39.9, 98.0], [40.0, 99.0], [40.1, 99.0], [40.2, 100.0], [40.3, 100.0], [40.4, 101.0], [40.5, 102.0], [40.6, 103.0], [40.7, 103.0], [40.8, 104.0], [40.9, 105.0], [41.0, 105.0], [41.1, 106.0], [41.2, 107.0], [41.3, 108.0], [41.4, 109.0], [41.5, 109.0], [41.6, 109.0], [41.7, 110.0], [41.8, 110.0], [41.9, 111.0], [42.0, 112.0], [42.1, 113.0], [42.2, 113.0], [42.3, 114.0], [42.4, 114.0], [42.5, 114.0], [42.6, 115.0], [42.7, 115.0], [42.8, 116.0], [42.9, 116.0], [43.0, 117.0], [43.1, 117.0], [43.2, 118.0], [43.3, 119.0], [43.4, 120.0], [43.5, 120.0], [43.6, 121.0], [43.7, 121.0], [43.8, 121.0], [43.9, 122.0], [44.0, 122.0], [44.1, 123.0], [44.2, 123.0], [44.3, 123.0], [44.4, 124.0], [44.5, 124.0], [44.6, 125.0], [44.7, 126.0], [44.8, 126.0], [44.9, 127.0], [45.0, 127.0], [45.1, 128.0], [45.2, 128.0], [45.3, 129.0], [45.4, 129.0], [45.5, 130.0], [45.6, 130.0], [45.7, 130.0], [45.8, 131.0], [45.9, 131.0], [46.0, 132.0], [46.1, 132.0], [46.2, 133.0], [46.3, 133.0], [46.4, 134.0], [46.5, 134.0], [46.6, 135.0], [46.7, 135.0], [46.8, 136.0], [46.9, 137.0], [47.0, 137.0], [47.1, 138.0], [47.2, 138.0], [47.3, 139.0], [47.4, 139.0], [47.5, 141.0], [47.6, 141.0], [47.7, 142.0], [47.8, 143.0], [47.9, 144.0], [48.0, 145.0], [48.1, 146.0], [48.2, 147.0], [48.3, 148.0], [48.4, 149.0], [48.5, 149.0], [48.6, 150.0], [48.7, 151.0], [48.8, 152.0], [48.9, 153.0], [49.0, 154.0], [49.1, 155.0], [49.2, 157.0], [49.3, 157.0], [49.4, 159.0], [49.5, 159.0], [49.6, 160.0], [49.7, 161.0], [49.8, 162.0], [49.9, 165.0], [50.0, 167.0], [50.1, 168.0], [50.2, 169.0], [50.3, 170.0], [50.4, 171.0], [50.5, 173.0], [50.6, 174.0], [50.7, 175.0], [50.8, 176.0], [50.9, 176.0], [51.0, 177.0], [51.1, 178.0], [51.2, 180.0], [51.3, 180.0], [51.4, 181.0], [51.5, 181.0], [51.6, 182.0], [51.7, 183.0], [51.8, 184.0], [51.9, 184.0], [52.0, 186.0], [52.1, 187.0], [52.2, 188.0], [52.3, 189.0], [52.4, 190.0], [52.5, 190.0], [52.6, 191.0], [52.7, 192.0], [52.8, 193.0], [52.9, 194.0], [53.0, 195.0], [53.1, 196.0], [53.2, 197.0], [53.3, 197.0], [53.4, 198.0], [53.5, 198.0], [53.6, 199.0], [53.7, 200.0], [53.8, 201.0], [53.9, 201.0], [54.0, 202.0], [54.1, 203.0], [54.2, 204.0], [54.3, 205.0], [54.4, 206.0], [54.5, 207.0], [54.6, 207.0], [54.7, 208.0], [54.8, 209.0], [54.9, 210.0], [55.0, 210.0], [55.1, 211.0], [55.2, 211.0], [55.3, 212.0], [55.4, 212.0], [55.5, 213.0], [55.6, 215.0], [55.7, 216.0], [55.8, 217.0], [55.9, 218.0], [56.0, 220.0], [56.1, 221.0], [56.2, 222.0], [56.3, 223.0], [56.4, 224.0], [56.5, 225.0], [56.6, 226.0], [56.7, 227.0], [56.8, 228.0], [56.9, 229.0], [57.0, 230.0], [57.1, 231.0], [57.2, 231.0], [57.3, 233.0], [57.4, 234.0], [57.5, 234.0], [57.6, 235.0], [57.7, 236.0], [57.8, 238.0], [57.9, 239.0], [58.0, 240.0], [58.1, 242.0], [58.2, 242.0], [58.3, 243.0], [58.4, 244.0], [58.5, 245.0], [58.6, 245.0], [58.7, 246.0], [58.8, 247.0], [58.9, 248.0], [59.0, 249.0], [59.1, 250.0], [59.2, 251.0], [59.3, 252.0], [59.4, 252.0], [59.5, 253.0], [59.6, 254.0], [59.7, 255.0], [59.8, 256.0], [59.9, 257.0], [60.0, 258.0], [60.1, 258.0], [60.2, 260.0], [60.3, 261.0], [60.4, 261.0], [60.5, 263.0], [60.6, 263.0], [60.7, 263.0], [60.8, 264.0], [60.9, 265.0], [61.0, 265.0], [61.1, 266.0], [61.2, 267.0], [61.3, 268.0], [61.4, 269.0], [61.5, 271.0], [61.6, 273.0], [61.7, 273.0], [61.8, 274.0], [61.9, 277.0], [62.0, 278.0], [62.1, 278.0], [62.2, 279.0], [62.3, 281.0], [62.4, 282.0], [62.5, 283.0], [62.6, 283.0], [62.7, 284.0], [62.8, 285.0], [62.9, 286.0], [63.0, 286.0], [63.1, 287.0], [63.2, 289.0], [63.3, 290.0], [63.4, 291.0], [63.5, 292.0], [63.6, 293.0], [63.7, 294.0], [63.8, 296.0], [63.9, 297.0], [64.0, 298.0], [64.1, 300.0], [64.2, 302.0], [64.3, 303.0], [64.4, 304.0], [64.5, 305.0], [64.6, 307.0], [64.7, 307.0], [64.8, 308.0], [64.9, 310.0], [65.0, 311.0], [65.1, 312.0], [65.2, 313.0], [65.3, 315.0], [65.4, 316.0], [65.5, 317.0], [65.6, 319.0], [65.7, 320.0], [65.8, 321.0], [65.9, 322.0], [66.0, 324.0], [66.1, 325.0], [66.2, 327.0], [66.3, 328.0], [66.4, 329.0], [66.5, 330.0], [66.6, 331.0], [66.7, 332.0], [66.8, 335.0], [66.9, 337.0], [67.0, 338.0], [67.1, 339.0], [67.2, 340.0], [67.3, 341.0], [67.4, 342.0], [67.5, 343.0], [67.6, 345.0], [67.7, 346.0], [67.8, 347.0], [67.9, 348.0], [68.0, 349.0], [68.1, 351.0], [68.2, 352.0], [68.3, 353.0], [68.4, 354.0], [68.5, 355.0], [68.6, 356.0], [68.7, 358.0], [68.8, 359.0], [68.9, 360.0], [69.0, 361.0], [69.1, 362.0], [69.2, 362.0], [69.3, 364.0], [69.4, 365.0], [69.5, 366.0], [69.6, 368.0], [69.7, 370.0], [69.8, 371.0], [69.9, 373.0], [70.0, 374.0], [70.1, 376.0], [70.2, 377.0], [70.3, 377.0], [70.4, 378.0], [70.5, 380.0], [70.6, 381.0], [70.7, 382.0], [70.8, 383.0], [70.9, 384.0], [71.0, 385.0], [71.1, 386.0], [71.2, 389.0], [71.3, 390.0], [71.4, 391.0], [71.5, 393.0], [71.6, 393.0], [71.7, 393.0], [71.8, 394.0], [71.9, 396.0], [72.0, 397.0], [72.1, 399.0], [72.2, 401.0], [72.3, 404.0], [72.4, 405.0], [72.5, 406.0], [72.6, 407.0], [72.7, 408.0], [72.8, 410.0], [72.9, 412.0], [73.0, 414.0], [73.1, 415.0], [73.2, 417.0], [73.3, 418.0], [73.4, 419.0], [73.5, 421.0], [73.6, 422.0], [73.7, 423.0], [73.8, 426.0], [73.9, 427.0], [74.0, 429.0], [74.1, 429.0], [74.2, 431.0], [74.3, 434.0], [74.4, 436.0], [74.5, 437.0], [74.6, 440.0], [74.7, 442.0], [74.8, 442.0], [74.9, 444.0], [75.0, 445.0], [75.1, 445.0], [75.2, 446.0], [75.3, 447.0], [75.4, 449.0], [75.5, 450.0], [75.6, 451.0], [75.7, 452.0], [75.8, 453.0], [75.9, 454.0], [76.0, 456.0], [76.1, 457.0], [76.2, 459.0], [76.3, 460.0], [76.4, 462.0], [76.5, 463.0], [76.6, 465.0], [76.7, 466.0], [76.8, 467.0], [76.9, 469.0], [77.0, 472.0], [77.1, 473.0], [77.2, 475.0], [77.3, 478.0], [77.4, 483.0], [77.5, 485.0], [77.6, 485.0], [77.7, 486.0], [77.8, 487.0], [77.9, 488.0], [78.0, 491.0], [78.1, 493.0], [78.2, 494.0], [78.3, 495.0], [78.4, 497.0], [78.5, 498.0], [78.6, 500.0], [78.7, 502.0], [78.8, 504.0], [78.9, 505.0], [79.0, 507.0], [79.1, 509.0], [79.2, 512.0], [79.3, 512.0], [79.4, 514.0], [79.5, 516.0], [79.6, 517.0], [79.7, 518.0], [79.8, 520.0], [79.9, 523.0], [80.0, 526.0], [80.1, 527.0], [80.2, 528.0], [80.3, 530.0], [80.4, 531.0], [80.5, 534.0], [80.6, 535.0], [80.7, 536.0], [80.8, 540.0], [80.9, 541.0], [81.0, 544.0], [81.1, 546.0], [81.2, 548.0], [81.3, 550.0], [81.4, 552.0], [81.5, 553.0], [81.6, 556.0], [81.7, 559.0], [81.8, 560.0], [81.9, 562.0], [82.0, 564.0], [82.1, 567.0], [82.2, 568.0], [82.3, 570.0], [82.4, 573.0], [82.5, 577.0], [82.6, 580.0], [82.7, 582.0], [82.8, 583.0], [82.9, 587.0], [83.0, 589.0], [83.1, 592.0], [83.2, 594.0], [83.3, 596.0], [83.4, 598.0], [83.5, 601.0], [83.6, 603.0], [83.7, 604.0], [83.8, 605.0], [83.9, 606.0], [84.0, 610.0], [84.1, 611.0], [84.2, 614.0], [84.3, 615.0], [84.4, 617.0], [84.5, 621.0], [84.6, 624.0], [84.7, 626.0], [84.8, 630.0], [84.9, 634.0], [85.0, 635.0], [85.1, 637.0], [85.2, 642.0], [85.3, 643.0], [85.4, 646.0], [85.5, 649.0], [85.6, 653.0], [85.7, 655.0], [85.8, 655.0], [85.9, 659.0], [86.0, 663.0], [86.1, 666.0], [86.2, 667.0], [86.3, 670.0], [86.4, 671.0], [86.5, 673.0], [86.6, 677.0], [86.7, 681.0], [86.8, 686.0], [86.9, 688.0], [87.0, 690.0], [87.1, 694.0], [87.2, 695.0], [87.3, 697.0], [87.4, 701.0], [87.5, 703.0], [87.6, 705.0], [87.7, 708.0], [87.8, 712.0], [87.9, 715.0], [88.0, 717.0], [88.1, 721.0], [88.2, 726.0], [88.3, 730.0], [88.4, 733.0], [88.5, 735.0], [88.6, 739.0], [88.7, 740.0], [88.8, 744.0], [88.9, 745.0], [89.0, 750.0], [89.1, 752.0], [89.2, 756.0], [89.3, 758.0], [89.4, 761.0], [89.5, 762.0], [89.6, 765.0], [89.7, 766.0], [89.8, 771.0], [89.9, 773.0], [90.0, 776.0], [90.1, 783.0], [90.2, 788.0], [90.3, 793.0], [90.4, 797.0], [90.5, 802.0], [90.6, 805.0], [90.7, 815.0], [90.8, 818.0], [90.9, 830.0], [91.0, 834.0], [91.1, 837.0], [91.2, 843.0], [91.3, 847.0], [91.4, 851.0], [91.5, 854.0], [91.6, 857.0], [91.7, 863.0], [91.8, 866.0], [91.9, 870.0], [92.0, 878.0], [92.1, 882.0], [92.2, 884.0], [92.3, 892.0], [92.4, 895.0], [92.5, 897.0], [92.6, 901.0], [92.7, 909.0], [92.8, 912.0], [92.9, 915.0], [93.0, 919.0], [93.1, 926.0], [93.2, 933.0], [93.3, 935.0], [93.4, 937.0], [93.5, 943.0], [93.6, 951.0], [93.7, 959.0], [93.8, 964.0], [93.9, 977.0], [94.0, 980.0], [94.1, 990.0], [94.2, 996.0], [94.3, 1000.0], [94.4, 1003.0], [94.5, 1006.0], [94.6, 1012.0], [94.7, 1018.0], [94.8, 1023.0], [94.9, 1028.0], [95.0, 1033.0], [95.1, 1037.0], [95.2, 1039.0], [95.3, 1044.0], [95.4, 1050.0], [95.5, 1056.0], [95.6, 1063.0], [95.7, 1066.0], [95.8, 1078.0], [95.9, 1090.0], [96.0, 1092.0], [96.1, 1099.0], [96.2, 1116.0], [96.3, 1126.0], [96.4, 1143.0], [96.5, 1151.0], [96.6, 1155.0], [96.7, 1165.0], [96.8, 1173.0], [96.9, 1183.0], [97.0, 1194.0], [97.1, 1208.0], [97.2, 1215.0], [97.3, 1226.0], [97.4, 1248.0], [97.5, 1258.0], [97.6, 1266.0], [97.7, 1288.0], [97.8, 1304.0], [97.9, 1325.0], [98.0, 1346.0], [98.1, 1376.0], [98.2, 1397.0], [98.3, 1428.0], [98.4, 1466.0], [98.5, 1484.0], [98.6, 1500.0], [98.7, 1548.0], [98.8, 1579.0], [98.9, 1623.0], [99.0, 1661.0], [99.1, 1694.0], [99.2, 1758.0], [99.3, 1822.0], [99.4, 1857.0], [99.5, 1952.0], [99.6, 1997.0], [99.7, 2062.0], [99.8, 2187.0], [99.9, 2359.0], [100.0, 3095.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 2111.0, "series": [{"data": [[0.0, 2111.0], [600.0, 203.0], [700.0, 162.0], [800.0, 114.0], [900.0, 89.0], [1000.0, 97.0], [1100.0, 48.0], [1200.0, 39.0], [1300.0, 23.0], [1400.0, 20.0], [1500.0, 15.0], [100.0, 712.0], [1600.0, 12.0], [1700.0, 9.0], [1800.0, 10.0], [1900.0, 7.0], [2000.0, 8.0], [2100.0, 3.0], [2300.0, 3.0], [2200.0, 2.0], [2400.0, 1.0], [2600.0, 1.0], [2900.0, 1.0], [3000.0, 2.0], [200.0, 547.0], [300.0, 425.0], [400.0, 338.0], [500.0, 260.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3000.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 73.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 4136.0, "series": [{"data": [[0.0, 4136.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1053.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 73.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.906639004149376, "minX": 1.60262904E12, "maxY": 10.0, "series": [{"data": [[1.60262916E12, 10.0], [1.6026291E12, 10.0], [1.60262904E12, 9.968406593406598], [1.60262922E12, 9.906639004149376]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60262922E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 309.2205489897068, "minX": 1.0, "maxY": 2989.0, "series": [{"data": [[4.0, 1613.0], [8.0, 1266.0], [2.0, 2127.0], [1.0, 2989.0], [9.0, 1120.6666666666665], [5.0, 795.3333333333334], [10.0, 309.2205489897068], [6.0, 1033.0], [3.0, 1255.0], [7.0, 1247.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.98707715697455, 312.34796655264233]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 4239.766666666666, "minX": 1.60262904E12, "maxY": 1611764.4166666667, "series": [{"data": [[1.60262916E12, 1573160.5], [1.6026291E12, 1611764.4166666667], [1.60262904E12, 581603.05], [1.60262922E12, 484532.5]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60262916E12, 18136.75], [1.6026291E12, 16875.65], [1.60262904E12, 6238.783333333334], [1.60262922E12, 4239.766666666666]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60262922E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 289.66925315227866, "minX": 1.60262904E12, "maxY": 432.0228215767637, "series": [{"data": [[1.60262916E12, 289.66925315227866], [1.6026291E12, 300.6728643216081], [1.60262904E12, 329.2623626373628], [1.60262922E12, 432.0228215767637]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60262922E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 289.2948593598451, "minX": 1.60262904E12, "maxY": 431.541493775934, "series": [{"data": [[1.60262916E12, 289.2948593598451], [1.6026291E12, 300.28341708542683], [1.60262904E12, 328.7898351648353], [1.60262922E12, 431.541493775934]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60262922E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0096993210475267, "minX": 1.60262904E12, "maxY": 0.16208791208791182, "series": [{"data": [[1.60262916E12, 0.0096993210475267], [1.6026291E12, 0.011557788944723636], [1.60262904E12, 0.16208791208791182], [1.60262922E12, 0.012448132780082976]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60262922E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 31.0, "minX": 1.60262904E12, "maxY": 3095.0, "series": [{"data": [[1.60262916E12, 2640.0], [1.6026291E12, 2187.0], [1.60262904E12, 1623.0], [1.60262922E12, 3095.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60262916E12, 34.0], [1.6026291E12, 35.0], [1.60262904E12, 35.560999826192855], [1.60262922E12, 33.346999884843825]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60262916E12, 34.0], [1.6026291E12, 35.710900189876554], [1.60262904E12, 36.0], [1.60262922E12, 33.78170004606247]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60262916E12, 34.0], [1.6026291E12, 35.0], [1.60262904E12, 35.92549991309643], [1.60262922E12, 33.58849994242191]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60262916E12, 31.0], [1.6026291E12, 31.0], [1.60262904E12, 33.0], [1.60262922E12, 31.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60262916E12, 181.0], [1.6026291E12, 131.0], [1.60262904E12, 238.5], [1.60262922E12, 231.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60262922E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 58.5, "minX": 2.0, "maxY": 2558.0, "series": [{"data": [[2.0, 2558.0], [4.0, 116.5], [5.0, 1748.0], [6.0, 1212.5], [7.0, 896.0], [8.0, 965.0], [9.0, 657.0], [10.0, 915.0], [11.0, 880.5], [12.0, 671.0], [13.0, 666.0], [14.0, 608.0], [15.0, 485.0], [16.0, 582.5], [17.0, 383.0], [18.0, 457.0], [19.0, 410.0], [20.0, 475.5], [21.0, 337.0], [23.0, 422.0], [24.0, 346.5], [26.0, 254.0], [27.0, 315.0], [28.0, 272.5], [29.0, 73.0], [30.0, 112.0], [31.0, 196.0], [33.0, 345.0], [32.0, 243.5], [35.0, 224.5], [34.0, 81.0], [37.0, 99.0], [36.0, 102.5], [39.0, 72.0], [38.0, 80.5], [40.0, 202.0], [42.0, 114.0], [43.0, 223.0], [45.0, 78.5], [44.0, 99.0], [46.0, 173.5], [47.0, 181.5], [48.0, 116.0], [51.0, 89.0], [50.0, 85.0], [52.0, 85.5], [53.0, 161.0], [54.0, 109.0], [55.0, 134.0], [57.0, 91.0], [56.0, 77.0], [63.0, 79.0], [62.0, 72.0], [64.0, 98.5], [69.0, 79.0], [68.0, 82.0], [70.0, 124.0], [75.0, 70.0], [73.0, 118.0], [72.0, 58.5], [76.0, 60.5], [81.0, 82.0], [84.0, 127.0], [92.0, 69.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 92.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 58.5, "minX": 2.0, "maxY": 2557.5, "series": [{"data": [[2.0, 2557.5], [4.0, 115.0], [5.0, 1748.0], [6.0, 1211.5], [7.0, 895.0], [8.0, 963.5], [9.0, 656.0], [10.0, 911.5], [11.0, 879.5], [12.0, 670.5], [13.0, 665.0], [14.0, 605.5], [15.0, 483.0], [16.0, 582.0], [17.0, 383.0], [18.0, 456.5], [19.0, 410.0], [20.0, 474.0], [21.0, 335.0], [23.0, 422.0], [24.0, 346.5], [26.0, 253.0], [27.0, 315.0], [28.0, 272.0], [29.0, 73.0], [30.0, 112.0], [31.0, 196.0], [33.0, 345.0], [32.0, 243.5], [35.0, 224.5], [34.0, 81.0], [37.0, 99.0], [36.0, 102.5], [39.0, 72.0], [38.0, 80.5], [40.0, 202.0], [42.0, 114.0], [43.0, 223.0], [45.0, 78.5], [44.0, 99.0], [46.0, 173.0], [47.0, 181.5], [48.0, 116.0], [51.0, 89.0], [50.0, 85.0], [52.0, 85.5], [53.0, 160.0], [54.0, 109.0], [55.0, 134.0], [57.0, 90.0], [56.0, 77.0], [63.0, 78.0], [62.0, 71.5], [64.0, 98.5], [69.0, 79.0], [68.0, 82.0], [70.0, 124.0], [75.0, 70.0], [73.0, 118.0], [72.0, 58.5], [76.0, 60.5], [81.0, 82.0], [84.0, 126.5], [92.0, 69.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 92.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 7.866666666666666, "minX": 1.60262904E12, "maxY": 34.36666666666667, "series": [{"data": [[1.60262916E12, 34.36666666666667], [1.6026291E12, 33.166666666666664], [1.60262904E12, 12.3], [1.60262922E12, 7.866666666666666]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60262922E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 8.033333333333333, "minX": 1.60262904E12, "maxY": 34.36666666666667, "series": [{"data": [[1.60262916E12, 34.36666666666667], [1.6026291E12, 33.166666666666664], [1.60262904E12, 12.133333333333333], [1.60262922E12, 8.033333333333333]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60262922E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 8.033333333333333, "minX": 1.60262904E12, "maxY": 34.36666666666667, "series": [{"data": [[1.60262916E12, 34.36666666666667], [1.6026291E12, 33.166666666666664], [1.60262904E12, 12.133333333333333], [1.60262922E12, 8.033333333333333]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60262922E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 8.033333333333333, "minX": 1.60262904E12, "maxY": 34.36666666666667, "series": [{"data": [[1.60262916E12, 34.36666666666667], [1.6026291E12, 33.166666666666664], [1.60262904E12, 12.133333333333333], [1.60262922E12, 8.033333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60262922E12, "title": "Total Transactions Per Second"}},
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

