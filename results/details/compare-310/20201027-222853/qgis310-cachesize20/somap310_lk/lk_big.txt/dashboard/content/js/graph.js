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
        data: {"result": {"minY": 30.0, "minX": 0.0, "maxY": 3460.0, "series": [{"data": [[0.0, 30.0], [0.1, 31.0], [0.2, 32.0], [0.3, 32.0], [0.4, 32.0], [0.5, 33.0], [0.6, 33.0], [0.7, 33.0], [0.8, 34.0], [0.9, 34.0], [1.0, 34.0], [1.1, 35.0], [1.2, 35.0], [1.3, 35.0], [1.4, 35.0], [1.5, 36.0], [1.6, 36.0], [1.7, 36.0], [1.8, 36.0], [1.9, 36.0], [2.0, 37.0], [2.1, 37.0], [2.2, 37.0], [2.3, 37.0], [2.4, 37.0], [2.5, 37.0], [2.6, 37.0], [2.7, 37.0], [2.8, 37.0], [2.9, 37.0], [3.0, 37.0], [3.1, 38.0], [3.2, 38.0], [3.3, 38.0], [3.4, 38.0], [3.5, 38.0], [3.6, 38.0], [3.7, 38.0], [3.8, 38.0], [3.9, 38.0], [4.0, 38.0], [4.1, 38.0], [4.2, 38.0], [4.3, 39.0], [4.4, 39.0], [4.5, 39.0], [4.6, 39.0], [4.7, 39.0], [4.8, 39.0], [4.9, 39.0], [5.0, 39.0], [5.1, 39.0], [5.2, 39.0], [5.3, 39.0], [5.4, 39.0], [5.5, 39.0], [5.6, 39.0], [5.7, 39.0], [5.8, 40.0], [5.9, 40.0], [6.0, 40.0], [6.1, 40.0], [6.2, 40.0], [6.3, 40.0], [6.4, 40.0], [6.5, 40.0], [6.6, 40.0], [6.7, 40.0], [6.8, 40.0], [6.9, 40.0], [7.0, 40.0], [7.1, 40.0], [7.2, 41.0], [7.3, 41.0], [7.4, 41.0], [7.5, 41.0], [7.6, 41.0], [7.7, 41.0], [7.8, 41.0], [7.9, 41.0], [8.0, 41.0], [8.1, 41.0], [8.2, 41.0], [8.3, 42.0], [8.4, 42.0], [8.5, 42.0], [8.6, 42.0], [8.7, 42.0], [8.8, 42.0], [8.9, 42.0], [9.0, 42.0], [9.1, 42.0], [9.2, 42.0], [9.3, 42.0], [9.4, 42.0], [9.5, 42.0], [9.6, 42.0], [9.7, 42.0], [9.8, 43.0], [9.9, 43.0], [10.0, 43.0], [10.1, 43.0], [10.2, 43.0], [10.3, 43.0], [10.4, 43.0], [10.5, 43.0], [10.6, 43.0], [10.7, 43.0], [10.8, 43.0], [10.9, 43.0], [11.0, 43.0], [11.1, 43.0], [11.2, 44.0], [11.3, 44.0], [11.4, 44.0], [11.5, 44.0], [11.6, 44.0], [11.7, 44.0], [11.8, 44.0], [11.9, 44.0], [12.0, 44.0], [12.1, 44.0], [12.2, 44.0], [12.3, 44.0], [12.4, 44.0], [12.5, 44.0], [12.6, 45.0], [12.7, 45.0], [12.8, 45.0], [12.9, 45.0], [13.0, 45.0], [13.1, 45.0], [13.2, 45.0], [13.3, 45.0], [13.4, 45.0], [13.5, 45.0], [13.6, 45.0], [13.7, 45.0], [13.8, 46.0], [13.9, 46.0], [14.0, 46.0], [14.1, 46.0], [14.2, 46.0], [14.3, 46.0], [14.4, 46.0], [14.5, 46.0], [14.6, 46.0], [14.7, 47.0], [14.8, 47.0], [14.9, 47.0], [15.0, 47.0], [15.1, 47.0], [15.2, 47.0], [15.3, 47.0], [15.4, 47.0], [15.5, 47.0], [15.6, 47.0], [15.7, 47.0], [15.8, 48.0], [15.9, 48.0], [16.0, 48.0], [16.1, 48.0], [16.2, 48.0], [16.3, 49.0], [16.4, 49.0], [16.5, 49.0], [16.6, 49.0], [16.7, 49.0], [16.8, 49.0], [16.9, 49.0], [17.0, 49.0], [17.1, 49.0], [17.2, 50.0], [17.3, 50.0], [17.4, 50.0], [17.5, 50.0], [17.6, 51.0], [17.7, 51.0], [17.8, 51.0], [17.9, 51.0], [18.0, 51.0], [18.1, 52.0], [18.2, 52.0], [18.3, 52.0], [18.4, 52.0], [18.5, 52.0], [18.6, 52.0], [18.7, 52.0], [18.8, 53.0], [18.9, 53.0], [19.0, 53.0], [19.1, 53.0], [19.2, 53.0], [19.3, 54.0], [19.4, 54.0], [19.5, 54.0], [19.6, 54.0], [19.7, 54.0], [19.8, 55.0], [19.9, 55.0], [20.0, 55.0], [20.1, 55.0], [20.2, 56.0], [20.3, 56.0], [20.4, 56.0], [20.5, 56.0], [20.6, 57.0], [20.7, 57.0], [20.8, 57.0], [20.9, 58.0], [21.0, 58.0], [21.1, 58.0], [21.2, 58.0], [21.3, 58.0], [21.4, 59.0], [21.5, 59.0], [21.6, 59.0], [21.7, 60.0], [21.8, 60.0], [21.9, 60.0], [22.0, 60.0], [22.1, 61.0], [22.2, 61.0], [22.3, 61.0], [22.4, 61.0], [22.5, 61.0], [22.6, 62.0], [22.7, 62.0], [22.8, 63.0], [22.9, 63.0], [23.0, 63.0], [23.1, 63.0], [23.2, 63.0], [23.3, 64.0], [23.4, 64.0], [23.5, 64.0], [23.6, 64.0], [23.7, 65.0], [23.8, 65.0], [23.9, 65.0], [24.0, 66.0], [24.1, 66.0], [24.2, 66.0], [24.3, 66.0], [24.4, 67.0], [24.5, 67.0], [24.6, 68.0], [24.7, 68.0], [24.8, 68.0], [24.9, 68.0], [25.0, 68.0], [25.1, 68.0], [25.2, 69.0], [25.3, 69.0], [25.4, 69.0], [25.5, 69.0], [25.6, 70.0], [25.7, 70.0], [25.8, 70.0], [25.9, 70.0], [26.0, 70.0], [26.1, 71.0], [26.2, 71.0], [26.3, 71.0], [26.4, 71.0], [26.5, 71.0], [26.6, 71.0], [26.7, 72.0], [26.8, 72.0], [26.9, 72.0], [27.0, 72.0], [27.1, 73.0], [27.2, 73.0], [27.3, 73.0], [27.4, 73.0], [27.5, 73.0], [27.6, 74.0], [27.7, 74.0], [27.8, 74.0], [27.9, 74.0], [28.0, 74.0], [28.1, 74.0], [28.2, 74.0], [28.3, 75.0], [28.4, 75.0], [28.5, 75.0], [28.6, 75.0], [28.7, 75.0], [28.8, 76.0], [28.9, 76.0], [29.0, 76.0], [29.1, 76.0], [29.2, 76.0], [29.3, 77.0], [29.4, 77.0], [29.5, 77.0], [29.6, 77.0], [29.7, 77.0], [29.8, 77.0], [29.9, 77.0], [30.0, 78.0], [30.1, 78.0], [30.2, 78.0], [30.3, 78.0], [30.4, 78.0], [30.5, 78.0], [30.6, 78.0], [30.7, 79.0], [30.8, 79.0], [30.9, 79.0], [31.0, 79.0], [31.1, 79.0], [31.2, 79.0], [31.3, 79.0], [31.4, 79.0], [31.5, 80.0], [31.6, 80.0], [31.7, 80.0], [31.8, 80.0], [31.9, 80.0], [32.0, 80.0], [32.1, 80.0], [32.2, 81.0], [32.3, 81.0], [32.4, 81.0], [32.5, 81.0], [32.6, 81.0], [32.7, 81.0], [32.8, 81.0], [32.9, 82.0], [33.0, 82.0], [33.1, 82.0], [33.2, 82.0], [33.3, 82.0], [33.4, 82.0], [33.5, 82.0], [33.6, 83.0], [33.7, 83.0], [33.8, 83.0], [33.9, 83.0], [34.0, 83.0], [34.1, 83.0], [34.2, 83.0], [34.3, 83.0], [34.4, 84.0], [34.5, 84.0], [34.6, 84.0], [34.7, 84.0], [34.8, 84.0], [34.9, 84.0], [35.0, 85.0], [35.1, 85.0], [35.2, 85.0], [35.3, 85.0], [35.4, 85.0], [35.5, 86.0], [35.6, 86.0], [35.7, 86.0], [35.8, 86.0], [35.9, 86.0], [36.0, 86.0], [36.1, 87.0], [36.2, 87.0], [36.3, 87.0], [36.4, 87.0], [36.5, 87.0], [36.6, 87.0], [36.7, 88.0], [36.8, 88.0], [36.9, 88.0], [37.0, 88.0], [37.1, 89.0], [37.2, 89.0], [37.3, 89.0], [37.4, 89.0], [37.5, 90.0], [37.6, 90.0], [37.7, 90.0], [37.8, 91.0], [37.9, 91.0], [38.0, 91.0], [38.1, 92.0], [38.2, 92.0], [38.3, 93.0], [38.4, 93.0], [38.5, 93.0], [38.6, 93.0], [38.7, 93.0], [38.8, 94.0], [38.9, 94.0], [39.0, 95.0], [39.1, 95.0], [39.2, 96.0], [39.3, 96.0], [39.4, 97.0], [39.5, 97.0], [39.6, 98.0], [39.7, 98.0], [39.8, 99.0], [39.9, 99.0], [40.0, 100.0], [40.1, 100.0], [40.2, 101.0], [40.3, 101.0], [40.4, 102.0], [40.5, 103.0], [40.6, 104.0], [40.7, 105.0], [40.8, 106.0], [40.9, 106.0], [41.0, 106.0], [41.1, 107.0], [41.2, 108.0], [41.3, 108.0], [41.4, 109.0], [41.5, 109.0], [41.6, 110.0], [41.7, 111.0], [41.8, 112.0], [41.9, 113.0], [42.0, 114.0], [42.1, 115.0], [42.2, 115.0], [42.3, 116.0], [42.4, 116.0], [42.5, 117.0], [42.6, 117.0], [42.7, 118.0], [42.8, 118.0], [42.9, 118.0], [43.0, 120.0], [43.1, 120.0], [43.2, 121.0], [43.3, 122.0], [43.4, 123.0], [43.5, 123.0], [43.6, 124.0], [43.7, 124.0], [43.8, 125.0], [43.9, 125.0], [44.0, 125.0], [44.1, 126.0], [44.2, 127.0], [44.3, 128.0], [44.4, 128.0], [44.5, 128.0], [44.6, 129.0], [44.7, 130.0], [44.8, 130.0], [44.9, 130.0], [45.0, 131.0], [45.1, 131.0], [45.2, 132.0], [45.3, 132.0], [45.4, 132.0], [45.5, 133.0], [45.6, 134.0], [45.7, 135.0], [45.8, 136.0], [45.9, 136.0], [46.0, 137.0], [46.1, 138.0], [46.2, 139.0], [46.3, 139.0], [46.4, 140.0], [46.5, 141.0], [46.6, 141.0], [46.7, 142.0], [46.8, 143.0], [46.9, 144.0], [47.0, 145.0], [47.1, 146.0], [47.2, 146.0], [47.3, 147.0], [47.4, 147.0], [47.5, 148.0], [47.6, 149.0], [47.7, 150.0], [47.8, 152.0], [47.9, 153.0], [48.0, 155.0], [48.1, 156.0], [48.2, 157.0], [48.3, 158.0], [48.4, 159.0], [48.5, 160.0], [48.6, 161.0], [48.7, 162.0], [48.8, 164.0], [48.9, 165.0], [49.0, 166.0], [49.1, 167.0], [49.2, 168.0], [49.3, 169.0], [49.4, 170.0], [49.5, 171.0], [49.6, 171.0], [49.7, 172.0], [49.8, 172.0], [49.9, 173.0], [50.0, 174.0], [50.1, 174.0], [50.2, 176.0], [50.3, 177.0], [50.4, 179.0], [50.5, 180.0], [50.6, 180.0], [50.7, 181.0], [50.8, 183.0], [50.9, 183.0], [51.0, 183.0], [51.1, 185.0], [51.2, 186.0], [51.3, 187.0], [51.4, 187.0], [51.5, 188.0], [51.6, 189.0], [51.7, 190.0], [51.8, 190.0], [51.9, 191.0], [52.0, 192.0], [52.1, 195.0], [52.2, 195.0], [52.3, 196.0], [52.4, 197.0], [52.5, 197.0], [52.6, 199.0], [52.7, 201.0], [52.8, 202.0], [52.9, 202.0], [53.0, 203.0], [53.1, 205.0], [53.2, 205.0], [53.3, 206.0], [53.4, 206.0], [53.5, 208.0], [53.6, 209.0], [53.7, 210.0], [53.8, 210.0], [53.9, 211.0], [54.0, 212.0], [54.1, 213.0], [54.2, 214.0], [54.3, 215.0], [54.4, 216.0], [54.5, 216.0], [54.6, 217.0], [54.7, 218.0], [54.8, 219.0], [54.9, 219.0], [55.0, 220.0], [55.1, 221.0], [55.2, 222.0], [55.3, 222.0], [55.4, 223.0], [55.5, 225.0], [55.6, 226.0], [55.7, 227.0], [55.8, 227.0], [55.9, 229.0], [56.0, 229.0], [56.1, 231.0], [56.2, 232.0], [56.3, 233.0], [56.4, 234.0], [56.5, 235.0], [56.6, 236.0], [56.7, 237.0], [56.8, 238.0], [56.9, 239.0], [57.0, 240.0], [57.1, 240.0], [57.2, 241.0], [57.3, 242.0], [57.4, 243.0], [57.5, 244.0], [57.6, 244.0], [57.7, 245.0], [57.8, 245.0], [57.9, 246.0], [58.0, 246.0], [58.1, 248.0], [58.2, 249.0], [58.3, 250.0], [58.4, 251.0], [58.5, 251.0], [58.6, 252.0], [58.7, 253.0], [58.8, 254.0], [58.9, 254.0], [59.0, 256.0], [59.1, 257.0], [59.2, 258.0], [59.3, 259.0], [59.4, 260.0], [59.5, 260.0], [59.6, 261.0], [59.7, 262.0], [59.8, 262.0], [59.9, 263.0], [60.0, 264.0], [60.1, 265.0], [60.2, 266.0], [60.3, 267.0], [60.4, 268.0], [60.5, 268.0], [60.6, 269.0], [60.7, 270.0], [60.8, 271.0], [60.9, 272.0], [61.0, 273.0], [61.1, 275.0], [61.2, 276.0], [61.3, 277.0], [61.4, 277.0], [61.5, 279.0], [61.6, 280.0], [61.7, 281.0], [61.8, 282.0], [61.9, 283.0], [62.0, 284.0], [62.1, 285.0], [62.2, 286.0], [62.3, 287.0], [62.4, 288.0], [62.5, 289.0], [62.6, 290.0], [62.7, 292.0], [62.8, 292.0], [62.9, 293.0], [63.0, 294.0], [63.1, 295.0], [63.2, 296.0], [63.3, 297.0], [63.4, 298.0], [63.5, 298.0], [63.6, 300.0], [63.7, 301.0], [63.8, 302.0], [63.9, 302.0], [64.0, 303.0], [64.1, 305.0], [64.2, 307.0], [64.3, 308.0], [64.4, 309.0], [64.5, 310.0], [64.6, 312.0], [64.7, 313.0], [64.8, 314.0], [64.9, 316.0], [65.0, 317.0], [65.1, 318.0], [65.2, 319.0], [65.3, 321.0], [65.4, 322.0], [65.5, 323.0], [65.6, 324.0], [65.7, 326.0], [65.8, 329.0], [65.9, 330.0], [66.0, 331.0], [66.1, 332.0], [66.2, 333.0], [66.3, 333.0], [66.4, 334.0], [66.5, 335.0], [66.6, 337.0], [66.7, 340.0], [66.8, 341.0], [66.9, 342.0], [67.0, 343.0], [67.1, 344.0], [67.2, 346.0], [67.3, 346.0], [67.4, 348.0], [67.5, 349.0], [67.6, 350.0], [67.7, 352.0], [67.8, 353.0], [67.9, 354.0], [68.0, 356.0], [68.1, 356.0], [68.2, 357.0], [68.3, 358.0], [68.4, 359.0], [68.5, 360.0], [68.6, 362.0], [68.7, 362.0], [68.8, 363.0], [68.9, 365.0], [69.0, 367.0], [69.1, 370.0], [69.2, 371.0], [69.3, 373.0], [69.4, 374.0], [69.5, 377.0], [69.6, 379.0], [69.7, 380.0], [69.8, 382.0], [69.9, 385.0], [70.0, 386.0], [70.1, 388.0], [70.2, 388.0], [70.3, 390.0], [70.4, 392.0], [70.5, 393.0], [70.6, 393.0], [70.7, 396.0], [70.8, 397.0], [70.9, 401.0], [71.0, 404.0], [71.1, 405.0], [71.2, 406.0], [71.3, 407.0], [71.4, 408.0], [71.5, 409.0], [71.6, 411.0], [71.7, 412.0], [71.8, 413.0], [71.9, 415.0], [72.0, 416.0], [72.1, 417.0], [72.2, 419.0], [72.3, 420.0], [72.4, 420.0], [72.5, 423.0], [72.6, 426.0], [72.7, 427.0], [72.8, 428.0], [72.9, 430.0], [73.0, 432.0], [73.1, 433.0], [73.2, 435.0], [73.3, 436.0], [73.4, 437.0], [73.5, 440.0], [73.6, 441.0], [73.7, 442.0], [73.8, 445.0], [73.9, 446.0], [74.0, 448.0], [74.1, 450.0], [74.2, 451.0], [74.3, 452.0], [74.4, 453.0], [74.5, 454.0], [74.6, 456.0], [74.7, 458.0], [74.8, 459.0], [74.9, 461.0], [75.0, 464.0], [75.1, 466.0], [75.2, 467.0], [75.3, 469.0], [75.4, 471.0], [75.5, 471.0], [75.6, 473.0], [75.7, 475.0], [75.8, 476.0], [75.9, 478.0], [76.0, 479.0], [76.1, 480.0], [76.2, 482.0], [76.3, 483.0], [76.4, 485.0], [76.5, 487.0], [76.6, 488.0], [76.7, 490.0], [76.8, 492.0], [76.9, 493.0], [77.0, 493.0], [77.1, 495.0], [77.2, 497.0], [77.3, 499.0], [77.4, 501.0], [77.5, 504.0], [77.6, 507.0], [77.7, 508.0], [77.8, 510.0], [77.9, 511.0], [78.0, 514.0], [78.1, 515.0], [78.2, 517.0], [78.3, 519.0], [78.4, 520.0], [78.5, 523.0], [78.6, 525.0], [78.7, 526.0], [78.8, 528.0], [78.9, 529.0], [79.0, 531.0], [79.1, 533.0], [79.2, 534.0], [79.3, 536.0], [79.4, 537.0], [79.5, 540.0], [79.6, 542.0], [79.7, 543.0], [79.8, 545.0], [79.9, 547.0], [80.0, 549.0], [80.1, 553.0], [80.2, 554.0], [80.3, 555.0], [80.4, 557.0], [80.5, 558.0], [80.6, 560.0], [80.7, 562.0], [80.8, 563.0], [80.9, 563.0], [81.0, 566.0], [81.1, 568.0], [81.2, 570.0], [81.3, 572.0], [81.4, 572.0], [81.5, 575.0], [81.6, 577.0], [81.7, 579.0], [81.8, 581.0], [81.9, 582.0], [82.0, 584.0], [82.1, 587.0], [82.2, 588.0], [82.3, 591.0], [82.4, 592.0], [82.5, 594.0], [82.6, 596.0], [82.7, 598.0], [82.8, 601.0], [82.9, 603.0], [83.0, 603.0], [83.1, 605.0], [83.2, 607.0], [83.3, 610.0], [83.4, 614.0], [83.5, 616.0], [83.6, 618.0], [83.7, 619.0], [83.8, 622.0], [83.9, 624.0], [84.0, 625.0], [84.1, 628.0], [84.2, 631.0], [84.3, 633.0], [84.4, 636.0], [84.5, 638.0], [84.6, 641.0], [84.7, 642.0], [84.8, 644.0], [84.9, 645.0], [85.0, 648.0], [85.1, 649.0], [85.2, 651.0], [85.3, 654.0], [85.4, 656.0], [85.5, 658.0], [85.6, 660.0], [85.7, 662.0], [85.8, 664.0], [85.9, 666.0], [86.0, 667.0], [86.1, 669.0], [86.2, 670.0], [86.3, 672.0], [86.4, 673.0], [86.5, 676.0], [86.6, 677.0], [86.7, 680.0], [86.8, 685.0], [86.9, 687.0], [87.0, 689.0], [87.1, 692.0], [87.2, 696.0], [87.3, 698.0], [87.4, 700.0], [87.5, 702.0], [87.6, 704.0], [87.7, 707.0], [87.8, 711.0], [87.9, 717.0], [88.0, 718.0], [88.1, 721.0], [88.2, 726.0], [88.3, 729.0], [88.4, 731.0], [88.5, 737.0], [88.6, 740.0], [88.7, 746.0], [88.8, 747.0], [88.9, 750.0], [89.0, 754.0], [89.1, 759.0], [89.2, 762.0], [89.3, 767.0], [89.4, 773.0], [89.5, 775.0], [89.6, 776.0], [89.7, 780.0], [89.8, 784.0], [89.9, 787.0], [90.0, 790.0], [90.1, 791.0], [90.2, 794.0], [90.3, 796.0], [90.4, 799.0], [90.5, 801.0], [90.6, 804.0], [90.7, 807.0], [90.8, 810.0], [90.9, 817.0], [91.0, 822.0], [91.1, 827.0], [91.2, 830.0], [91.3, 836.0], [91.4, 842.0], [91.5, 847.0], [91.6, 849.0], [91.7, 855.0], [91.8, 858.0], [91.9, 861.0], [92.0, 867.0], [92.1, 872.0], [92.2, 878.0], [92.3, 881.0], [92.4, 885.0], [92.5, 890.0], [92.6, 893.0], [92.7, 897.0], [92.8, 900.0], [92.9, 906.0], [93.0, 907.0], [93.1, 914.0], [93.2, 922.0], [93.3, 926.0], [93.4, 928.0], [93.5, 934.0], [93.6, 940.0], [93.7, 945.0], [93.8, 949.0], [93.9, 954.0], [94.0, 956.0], [94.1, 958.0], [94.2, 965.0], [94.3, 973.0], [94.4, 980.0], [94.5, 988.0], [94.6, 996.0], [94.7, 1005.0], [94.8, 1010.0], [94.9, 1018.0], [95.0, 1025.0], [95.1, 1032.0], [95.2, 1036.0], [95.3, 1041.0], [95.4, 1048.0], [95.5, 1052.0], [95.6, 1063.0], [95.7, 1069.0], [95.8, 1074.0], [95.9, 1083.0], [96.0, 1088.0], [96.1, 1096.0], [96.2, 1109.0], [96.3, 1119.0], [96.4, 1126.0], [96.5, 1134.0], [96.6, 1149.0], [96.7, 1159.0], [96.8, 1165.0], [96.9, 1169.0], [97.0, 1192.0], [97.1, 1206.0], [97.2, 1222.0], [97.3, 1233.0], [97.4, 1246.0], [97.5, 1264.0], [97.6, 1277.0], [97.7, 1297.0], [97.8, 1315.0], [97.9, 1338.0], [98.0, 1374.0], [98.1, 1393.0], [98.2, 1405.0], [98.3, 1422.0], [98.4, 1435.0], [98.5, 1471.0], [98.6, 1482.0], [98.7, 1502.0], [98.8, 1560.0], [98.9, 1630.0], [99.0, 1647.0], [99.1, 1674.0], [99.2, 1768.0], [99.3, 1839.0], [99.4, 1879.0], [99.5, 1930.0], [99.6, 1994.0], [99.7, 2057.0], [99.8, 2146.0], [99.9, 3068.0], [100.0, 3460.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 2104.0, "series": [{"data": [[0.0, 2104.0], [600.0, 244.0], [700.0, 162.0], [800.0, 122.0], [900.0, 101.0], [1000.0, 76.0], [1100.0, 49.0], [1200.0, 36.0], [1300.0, 23.0], [1400.0, 28.0], [1500.0, 10.0], [100.0, 665.0], [1600.0, 13.0], [1700.0, 7.0], [1800.0, 11.0], [1900.0, 7.0], [2000.0, 8.0], [2100.0, 4.0], [2200.0, 1.0], [2600.0, 1.0], [2700.0, 1.0], [3000.0, 1.0], [3100.0, 2.0], [200.0, 575.0], [3300.0, 2.0], [3400.0, 1.0], [300.0, 385.0], [400.0, 341.0], [500.0, 282.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3400.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 69.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 4071.0, "series": [{"data": [[0.0, 4071.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1122.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 69.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.905737704918034, "minX": 1.6038399E12, "maxY": 10.0, "series": [{"data": [[1.60384002E12, 10.0], [1.6038399E12, 9.905737704918034], [1.60384008E12, 9.95953237410072], [1.60383996E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60384008E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 314.20263057567695, "minX": 1.0, "maxY": 3460.0, "series": [{"data": [[4.0, 648.0], [8.0, 1730.0], [2.0, 3149.0], [1.0, 3068.0], [9.0, 463.3333333333333], [5.0, 1105.0], [10.0, 314.20263057567695], [6.0, 3460.0], [3.0, 3301.0], [7.0, 594.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.98707715697455, 317.73736221968954]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 2191.4666666666667, "minX": 1.6038399E12, "maxY": 1679503.5833333333, "series": [{"data": [[1.60384002E12, 1342426.75], [1.6038399E12, 64133.23333333333], [1.60384008E12, 1165088.6833333333], [1.60383996E12, 1679503.5833333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60384002E12, 19954.183333333334], [1.6038399E12, 2191.4666666666667], [1.60384008E12, 9837.0], [1.60383996E12, 13508.3]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60384008E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 256.88543441226625, "minX": 1.6038399E12, "maxY": 378.9313222079582, "series": [{"data": [[1.60384002E12, 256.88543441226625], [1.6038399E12, 275.79508196721315], [1.60384008E12, 369.69244604316543], [1.60383996E12, 378.9313222079582]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60384008E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 256.5523850085181, "minX": 1.6038399E12, "maxY": 378.35879332477475, "series": [{"data": [[1.60384002E12, 256.5523850085181], [1.6038399E12, 275.495901639344], [1.60384008E12, 369.24910071942435], [1.60383996E12, 378.35879332477475]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60384008E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0070603337612323526, "minX": 1.6038399E12, "maxY": 0.4631147540983604, "series": [{"data": [[1.60384002E12, 0.009369676320272606], [1.6038399E12, 0.4631147540983604], [1.60384008E12, 0.009892086330935253], [1.60383996E12, 0.0070603337612323526]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60384008E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 30.0, "minX": 1.6038399E12, "maxY": 3460.0, "series": [{"data": [[1.60384002E12, 2146.0], [1.6038399E12, 1338.0], [1.60384008E12, 3460.0], [1.60383996E12, 2158.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60384002E12, 33.0], [1.6038399E12, 39.0], [1.60384008E12, 33.0], [1.60383996E12, 36.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60384002E12, 34.0], [1.6038399E12, 39.0], [1.60384008E12, 33.0], [1.60383996E12, 36.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60384002E12, 33.31549971997738], [1.6038399E12, 39.0], [1.60384008E12, 33.0], [1.60383996E12, 36.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60384002E12, 31.0], [1.6038399E12, 38.0], [1.60384008E12, 30.0], [1.60383996E12, 32.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60384002E12, 129.0], [1.6038399E12, 103.5], [1.60384008E12, 206.0], [1.60383996E12, 267.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60384008E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 49.0, "minX": 1.0, "maxY": 3225.0, "series": [{"data": [[2.0, 3225.0], [3.0, 108.0], [4.0, 1401.5], [6.0, 1095.5], [7.0, 791.0], [8.0, 1173.5], [9.0, 723.0], [10.0, 791.0], [11.0, 747.0], [12.0, 705.0], [13.0, 948.0], [14.0, 696.5], [15.0, 690.0], [16.0, 405.0], [17.0, 510.0], [18.0, 489.0], [19.0, 413.0], [20.0, 543.5], [21.0, 481.5], [22.0, 390.0], [23.0, 426.0], [24.0, 439.5], [25.0, 348.5], [26.0, 264.0], [27.0, 283.0], [28.0, 315.5], [29.0, 89.0], [30.0, 240.0], [31.0, 281.0], [33.0, 86.5], [32.0, 258.0], [34.0, 127.5], [35.0, 173.5], [37.0, 197.0], [36.0, 139.5], [39.0, 82.5], [38.0, 178.0], [40.0, 118.0], [41.0, 200.0], [42.0, 100.5], [43.0, 130.0], [44.0, 79.0], [46.0, 124.5], [47.0, 62.5], [49.0, 110.0], [48.0, 49.0], [50.0, 203.0], [51.0, 119.0], [52.0, 216.5], [53.0, 54.0], [55.0, 87.5], [54.0, 141.5], [56.0, 82.0], [57.0, 87.0], [58.0, 78.5], [61.0, 58.0], [64.0, 98.0], [67.0, 88.0], [66.0, 150.5], [65.0, 71.0], [69.0, 107.0], [70.0, 126.5], [75.0, 80.0], [72.0, 98.5], [79.0, 81.0], [81.0, 59.0], [86.0, 84.5], [87.0, 73.0], [96.0, 78.0], [1.0, 3068.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 96.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 49.0, "minX": 1.0, "maxY": 3224.5, "series": [{"data": [[2.0, 3224.5], [3.0, 108.0], [4.0, 1400.5], [6.0, 1095.0], [7.0, 791.0], [8.0, 1172.5], [9.0, 722.0], [10.0, 783.0], [11.0, 745.0], [12.0, 704.0], [13.0, 948.0], [14.0, 695.5], [15.0, 690.0], [16.0, 402.5], [17.0, 510.0], [18.0, 488.0], [19.0, 413.0], [20.0, 542.5], [21.0, 481.5], [22.0, 390.0], [23.0, 424.0], [24.0, 439.5], [25.0, 348.5], [26.0, 264.0], [27.0, 282.5], [28.0, 313.5], [29.0, 89.0], [30.0, 240.0], [31.0, 281.0], [33.0, 86.5], [32.0, 257.0], [34.0, 127.5], [35.0, 173.5], [37.0, 196.0], [36.0, 139.5], [39.0, 82.5], [38.0, 178.0], [40.0, 118.0], [41.0, 200.0], [42.0, 100.5], [43.0, 130.0], [44.0, 79.0], [46.0, 124.5], [47.0, 62.0], [49.0, 110.0], [48.0, 49.0], [50.0, 202.5], [51.0, 119.0], [52.0, 215.5], [53.0, 54.0], [55.0, 87.0], [54.0, 141.5], [56.0, 81.5], [57.0, 86.0], [58.0, 78.0], [61.0, 57.0], [64.0, 97.5], [67.0, 88.0], [66.0, 150.0], [65.0, 71.0], [69.0, 107.0], [70.0, 126.5], [75.0, 80.0], [72.0, 98.0], [79.0, 81.0], [81.0, 59.0], [86.0, 84.5], [87.0, 73.0], [96.0, 78.0], [1.0, 3068.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 96.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 4.233333333333333, "minX": 1.6038399E12, "maxY": 39.13333333333333, "series": [{"data": [[1.60384002E12, 39.13333333333333], [1.6038399E12, 4.233333333333333], [1.60384008E12, 18.366666666666667], [1.60383996E12, 25.966666666666665]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60384008E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 4.066666666666666, "minX": 1.6038399E12, "maxY": 39.13333333333333, "series": [{"data": [[1.60384002E12, 39.13333333333333], [1.6038399E12, 4.066666666666666], [1.60384008E12, 18.533333333333335], [1.60383996E12, 25.966666666666665]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60384008E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 4.066666666666666, "minX": 1.6038399E12, "maxY": 39.13333333333333, "series": [{"data": [[1.60384002E12, 39.13333333333333], [1.6038399E12, 4.066666666666666], [1.60384008E12, 18.533333333333335], [1.60383996E12, 25.966666666666665]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60384008E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 4.066666666666666, "minX": 1.6038399E12, "maxY": 39.13333333333333, "series": [{"data": [[1.60384002E12, 39.13333333333333], [1.6038399E12, 4.066666666666666], [1.60384008E12, 18.533333333333335], [1.60383996E12, 25.966666666666665]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60384008E12, "title": "Total Transactions Per Second"}},
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

