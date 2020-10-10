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
        data: {"result": {"minY": 27.0, "minX": 0.0, "maxY": 4287.0, "series": [{"data": [[0.0, 27.0], [0.1, 28.0], [0.2, 29.0], [0.3, 29.0], [0.4, 30.0], [0.5, 30.0], [0.6, 30.0], [0.7, 30.0], [0.8, 30.0], [0.9, 31.0], [1.0, 31.0], [1.1, 31.0], [1.2, 31.0], [1.3, 31.0], [1.4, 32.0], [1.5, 32.0], [1.6, 32.0], [1.7, 32.0], [1.8, 32.0], [1.9, 32.0], [2.0, 32.0], [2.1, 32.0], [2.2, 32.0], [2.3, 33.0], [2.4, 33.0], [2.5, 33.0], [2.6, 33.0], [2.7, 33.0], [2.8, 33.0], [2.9, 33.0], [3.0, 34.0], [3.1, 34.0], [3.2, 34.0], [3.3, 34.0], [3.4, 34.0], [3.5, 34.0], [3.6, 34.0], [3.7, 34.0], [3.8, 34.0], [3.9, 34.0], [4.0, 34.0], [4.1, 34.0], [4.2, 35.0], [4.3, 35.0], [4.4, 35.0], [4.5, 35.0], [4.6, 35.0], [4.7, 35.0], [4.8, 35.0], [4.9, 35.0], [5.0, 35.0], [5.1, 35.0], [5.2, 35.0], [5.3, 35.0], [5.4, 35.0], [5.5, 35.0], [5.6, 35.0], [5.7, 35.0], [5.8, 35.0], [5.9, 36.0], [6.0, 36.0], [6.1, 36.0], [6.2, 36.0], [6.3, 36.0], [6.4, 36.0], [6.5, 36.0], [6.6, 36.0], [6.7, 36.0], [6.8, 36.0], [6.9, 36.0], [7.0, 36.0], [7.1, 36.0], [7.2, 36.0], [7.3, 36.0], [7.4, 36.0], [7.5, 36.0], [7.6, 36.0], [7.7, 37.0], [7.8, 37.0], [7.9, 37.0], [8.0, 37.0], [8.1, 37.0], [8.2, 37.0], [8.3, 37.0], [8.4, 37.0], [8.5, 37.0], [8.6, 37.0], [8.7, 37.0], [8.8, 37.0], [8.9, 37.0], [9.0, 37.0], [9.1, 37.0], [9.2, 37.0], [9.3, 37.0], [9.4, 37.0], [9.5, 37.0], [9.6, 38.0], [9.7, 38.0], [9.8, 38.0], [9.9, 38.0], [10.0, 38.0], [10.1, 38.0], [10.2, 38.0], [10.3, 38.0], [10.4, 38.0], [10.5, 38.0], [10.6, 38.0], [10.7, 38.0], [10.8, 38.0], [10.9, 38.0], [11.0, 38.0], [11.1, 38.0], [11.2, 38.0], [11.3, 38.0], [11.4, 38.0], [11.5, 38.0], [11.6, 38.0], [11.7, 39.0], [11.8, 39.0], [11.9, 39.0], [12.0, 39.0], [12.1, 39.0], [12.2, 39.0], [12.3, 39.0], [12.4, 39.0], [12.5, 39.0], [12.6, 39.0], [12.7, 39.0], [12.8, 39.0], [12.9, 39.0], [13.0, 39.0], [13.1, 39.0], [13.2, 39.0], [13.3, 39.0], [13.4, 39.0], [13.5, 39.0], [13.6, 40.0], [13.7, 40.0], [13.8, 40.0], [13.9, 40.0], [14.0, 40.0], [14.1, 40.0], [14.2, 40.0], [14.3, 40.0], [14.4, 40.0], [14.5, 40.0], [14.6, 40.0], [14.7, 40.0], [14.8, 40.0], [14.9, 40.0], [15.0, 41.0], [15.1, 41.0], [15.2, 41.0], [15.3, 41.0], [15.4, 41.0], [15.5, 41.0], [15.6, 41.0], [15.7, 41.0], [15.8, 41.0], [15.9, 41.0], [16.0, 41.0], [16.1, 41.0], [16.2, 41.0], [16.3, 42.0], [16.4, 42.0], [16.5, 42.0], [16.6, 42.0], [16.7, 42.0], [16.8, 42.0], [16.9, 42.0], [17.0, 42.0], [17.1, 42.0], [17.2, 43.0], [17.3, 43.0], [17.4, 43.0], [17.5, 43.0], [17.6, 43.0], [17.7, 43.0], [17.8, 43.0], [17.9, 43.0], [18.0, 44.0], [18.1, 44.0], [18.2, 44.0], [18.3, 44.0], [18.4, 44.0], [18.5, 44.0], [18.6, 44.0], [18.7, 44.0], [18.8, 44.0], [18.9, 45.0], [19.0, 45.0], [19.1, 45.0], [19.2, 45.0], [19.3, 45.0], [19.4, 45.0], [19.5, 45.0], [19.6, 45.0], [19.7, 46.0], [19.8, 46.0], [19.9, 46.0], [20.0, 46.0], [20.1, 46.0], [20.2, 47.0], [20.3, 47.0], [20.4, 47.0], [20.5, 47.0], [20.6, 48.0], [20.7, 48.0], [20.8, 48.0], [20.9, 48.0], [21.0, 48.0], [21.1, 49.0], [21.2, 49.0], [21.3, 49.0], [21.4, 50.0], [21.5, 50.0], [21.6, 50.0], [21.7, 51.0], [21.8, 51.0], [21.9, 51.0], [22.0, 51.0], [22.1, 52.0], [22.2, 52.0], [22.3, 52.0], [22.4, 53.0], [22.5, 53.0], [22.6, 53.0], [22.7, 54.0], [22.8, 54.0], [22.9, 54.0], [23.0, 54.0], [23.1, 55.0], [23.2, 55.0], [23.3, 55.0], [23.4, 56.0], [23.5, 56.0], [23.6, 56.0], [23.7, 56.0], [23.8, 57.0], [23.9, 57.0], [24.0, 57.0], [24.1, 57.0], [24.2, 57.0], [24.3, 58.0], [24.4, 58.0], [24.5, 58.0], [24.6, 58.0], [24.7, 59.0], [24.8, 59.0], [24.9, 59.0], [25.0, 59.0], [25.1, 60.0], [25.2, 60.0], [25.3, 60.0], [25.4, 60.0], [25.5, 60.0], [25.6, 60.0], [25.7, 61.0], [25.8, 61.0], [25.9, 61.0], [26.0, 61.0], [26.1, 61.0], [26.2, 62.0], [26.3, 62.0], [26.4, 62.0], [26.5, 62.0], [26.6, 62.0], [26.7, 63.0], [26.8, 63.0], [26.9, 63.0], [27.0, 63.0], [27.1, 63.0], [27.2, 64.0], [27.3, 64.0], [27.4, 64.0], [27.5, 64.0], [27.6, 64.0], [27.7, 65.0], [27.8, 65.0], [27.9, 65.0], [28.0, 65.0], [28.1, 65.0], [28.2, 65.0], [28.3, 66.0], [28.4, 66.0], [28.5, 66.0], [28.6, 66.0], [28.7, 66.0], [28.8, 66.0], [28.9, 67.0], [29.0, 67.0], [29.1, 67.0], [29.2, 67.0], [29.3, 68.0], [29.4, 68.0], [29.5, 68.0], [29.6, 68.0], [29.7, 68.0], [29.8, 68.0], [29.9, 69.0], [30.0, 69.0], [30.1, 69.0], [30.2, 69.0], [30.3, 69.0], [30.4, 70.0], [30.5, 70.0], [30.6, 70.0], [30.7, 70.0], [30.8, 70.0], [30.9, 70.0], [31.0, 70.0], [31.1, 70.0], [31.2, 71.0], [31.3, 71.0], [31.4, 71.0], [31.5, 71.0], [31.6, 71.0], [31.7, 72.0], [31.8, 72.0], [31.9, 72.0], [32.0, 72.0], [32.1, 72.0], [32.2, 72.0], [32.3, 72.0], [32.4, 72.0], [32.5, 72.0], [32.6, 73.0], [32.7, 73.0], [32.8, 73.0], [32.9, 73.0], [33.0, 73.0], [33.1, 73.0], [33.2, 73.0], [33.3, 73.0], [33.4, 73.0], [33.5, 74.0], [33.6, 74.0], [33.7, 74.0], [33.8, 74.0], [33.9, 74.0], [34.0, 74.0], [34.1, 74.0], [34.2, 74.0], [34.3, 75.0], [34.4, 75.0], [34.5, 75.0], [34.6, 75.0], [34.7, 75.0], [34.8, 75.0], [34.9, 75.0], [35.0, 75.0], [35.1, 75.0], [35.2, 76.0], [35.3, 76.0], [35.4, 76.0], [35.5, 76.0], [35.6, 76.0], [35.7, 76.0], [35.8, 77.0], [35.9, 77.0], [36.0, 77.0], [36.1, 77.0], [36.2, 78.0], [36.3, 78.0], [36.4, 78.0], [36.5, 78.0], [36.6, 78.0], [36.7, 78.0], [36.8, 79.0], [36.9, 79.0], [37.0, 79.0], [37.1, 79.0], [37.2, 79.0], [37.3, 80.0], [37.4, 80.0], [37.5, 80.0], [37.6, 80.0], [37.7, 81.0], [37.8, 81.0], [37.9, 81.0], [38.0, 81.0], [38.1, 82.0], [38.2, 82.0], [38.3, 82.0], [38.4, 82.0], [38.5, 83.0], [38.6, 83.0], [38.7, 83.0], [38.8, 84.0], [38.9, 84.0], [39.0, 85.0], [39.1, 85.0], [39.2, 86.0], [39.3, 86.0], [39.4, 87.0], [39.5, 87.0], [39.6, 87.0], [39.7, 88.0], [39.8, 88.0], [39.9, 89.0], [40.0, 89.0], [40.1, 90.0], [40.2, 91.0], [40.3, 91.0], [40.4, 91.0], [40.5, 92.0], [40.6, 92.0], [40.7, 93.0], [40.8, 94.0], [40.9, 95.0], [41.0, 96.0], [41.1, 96.0], [41.2, 97.0], [41.3, 98.0], [41.4, 98.0], [41.5, 98.0], [41.6, 99.0], [41.7, 100.0], [41.8, 101.0], [41.9, 101.0], [42.0, 102.0], [42.1, 103.0], [42.2, 104.0], [42.3, 104.0], [42.4, 105.0], [42.5, 106.0], [42.6, 106.0], [42.7, 107.0], [42.8, 108.0], [42.9, 109.0], [43.0, 109.0], [43.1, 110.0], [43.2, 110.0], [43.3, 111.0], [43.4, 111.0], [43.5, 112.0], [43.6, 112.0], [43.7, 112.0], [43.8, 114.0], [43.9, 114.0], [44.0, 114.0], [44.1, 115.0], [44.2, 116.0], [44.3, 117.0], [44.4, 118.0], [44.5, 118.0], [44.6, 119.0], [44.7, 119.0], [44.8, 120.0], [44.9, 120.0], [45.0, 121.0], [45.1, 121.0], [45.2, 122.0], [45.3, 122.0], [45.4, 123.0], [45.5, 123.0], [45.6, 124.0], [45.7, 124.0], [45.8, 125.0], [45.9, 125.0], [46.0, 126.0], [46.1, 127.0], [46.2, 128.0], [46.3, 128.0], [46.4, 129.0], [46.5, 130.0], [46.6, 131.0], [46.7, 132.0], [46.8, 132.0], [46.9, 133.0], [47.0, 133.0], [47.1, 134.0], [47.2, 135.0], [47.3, 136.0], [47.4, 137.0], [47.5, 138.0], [47.6, 140.0], [47.7, 141.0], [47.8, 142.0], [47.9, 144.0], [48.0, 145.0], [48.1, 146.0], [48.2, 147.0], [48.3, 148.0], [48.4, 149.0], [48.5, 150.0], [48.6, 153.0], [48.7, 154.0], [48.8, 156.0], [48.9, 157.0], [49.0, 158.0], [49.1, 160.0], [49.2, 161.0], [49.3, 162.0], [49.4, 162.0], [49.5, 163.0], [49.6, 164.0], [49.7, 164.0], [49.8, 165.0], [49.9, 165.0], [50.0, 166.0], [50.1, 167.0], [50.2, 168.0], [50.3, 169.0], [50.4, 171.0], [50.5, 172.0], [50.6, 172.0], [50.7, 173.0], [50.8, 175.0], [50.9, 175.0], [51.0, 176.0], [51.1, 177.0], [51.2, 178.0], [51.3, 178.0], [51.4, 178.0], [51.5, 180.0], [51.6, 181.0], [51.7, 181.0], [51.8, 182.0], [51.9, 182.0], [52.0, 183.0], [52.1, 184.0], [52.2, 184.0], [52.3, 185.0], [52.4, 186.0], [52.5, 186.0], [52.6, 187.0], [52.7, 187.0], [52.8, 187.0], [52.9, 188.0], [53.0, 188.0], [53.1, 189.0], [53.2, 190.0], [53.3, 191.0], [53.4, 191.0], [53.5, 192.0], [53.6, 192.0], [53.7, 193.0], [53.8, 194.0], [53.9, 194.0], [54.0, 194.0], [54.1, 195.0], [54.2, 196.0], [54.3, 197.0], [54.4, 198.0], [54.5, 198.0], [54.6, 199.0], [54.7, 200.0], [54.8, 200.0], [54.9, 201.0], [55.0, 202.0], [55.1, 202.0], [55.2, 203.0], [55.3, 204.0], [55.4, 204.0], [55.5, 205.0], [55.6, 206.0], [55.7, 207.0], [55.8, 208.0], [55.9, 209.0], [56.0, 210.0], [56.1, 210.0], [56.2, 211.0], [56.3, 213.0], [56.4, 214.0], [56.5, 215.0], [56.6, 215.0], [56.7, 216.0], [56.8, 217.0], [56.9, 218.0], [57.0, 218.0], [57.1, 219.0], [57.2, 220.0], [57.3, 221.0], [57.4, 222.0], [57.5, 223.0], [57.6, 224.0], [57.7, 224.0], [57.8, 225.0], [57.9, 226.0], [58.0, 227.0], [58.1, 228.0], [58.2, 229.0], [58.3, 230.0], [58.4, 232.0], [58.5, 234.0], [58.6, 234.0], [58.7, 235.0], [58.8, 236.0], [58.9, 237.0], [59.0, 237.0], [59.1, 238.0], [59.2, 238.0], [59.3, 239.0], [59.4, 239.0], [59.5, 240.0], [59.6, 241.0], [59.7, 242.0], [59.8, 243.0], [59.9, 244.0], [60.0, 245.0], [60.1, 245.0], [60.2, 247.0], [60.3, 248.0], [60.4, 249.0], [60.5, 250.0], [60.6, 250.0], [60.7, 251.0], [60.8, 251.0], [60.9, 252.0], [61.0, 254.0], [61.1, 255.0], [61.2, 255.0], [61.3, 255.0], [61.4, 256.0], [61.5, 257.0], [61.6, 258.0], [61.7, 259.0], [61.8, 260.0], [61.9, 260.0], [62.0, 261.0], [62.1, 262.0], [62.2, 263.0], [62.3, 264.0], [62.4, 265.0], [62.5, 266.0], [62.6, 267.0], [62.7, 268.0], [62.8, 269.0], [62.9, 270.0], [63.0, 271.0], [63.1, 273.0], [63.2, 274.0], [63.3, 275.0], [63.4, 277.0], [63.5, 278.0], [63.6, 279.0], [63.7, 281.0], [63.8, 282.0], [63.9, 284.0], [64.0, 285.0], [64.1, 286.0], [64.2, 287.0], [64.3, 288.0], [64.4, 290.0], [64.5, 291.0], [64.6, 292.0], [64.7, 294.0], [64.8, 295.0], [64.9, 296.0], [65.0, 299.0], [65.1, 300.0], [65.2, 302.0], [65.3, 303.0], [65.4, 304.0], [65.5, 305.0], [65.6, 307.0], [65.7, 307.0], [65.8, 308.0], [65.9, 310.0], [66.0, 311.0], [66.1, 312.0], [66.2, 313.0], [66.3, 315.0], [66.4, 317.0], [66.5, 317.0], [66.6, 318.0], [66.7, 318.0], [66.8, 321.0], [66.9, 321.0], [67.0, 323.0], [67.1, 324.0], [67.2, 325.0], [67.3, 327.0], [67.4, 328.0], [67.5, 329.0], [67.6, 330.0], [67.7, 332.0], [67.8, 333.0], [67.9, 334.0], [68.0, 336.0], [68.1, 337.0], [68.2, 339.0], [68.3, 341.0], [68.4, 342.0], [68.5, 343.0], [68.6, 344.0], [68.7, 346.0], [68.8, 348.0], [68.9, 349.0], [69.0, 352.0], [69.1, 354.0], [69.2, 355.0], [69.3, 357.0], [69.4, 359.0], [69.5, 361.0], [69.6, 363.0], [69.7, 364.0], [69.8, 367.0], [69.9, 368.0], [70.0, 369.0], [70.1, 371.0], [70.2, 373.0], [70.3, 375.0], [70.4, 377.0], [70.5, 379.0], [70.6, 381.0], [70.7, 381.0], [70.8, 382.0], [70.9, 383.0], [71.0, 386.0], [71.1, 387.0], [71.2, 389.0], [71.3, 390.0], [71.4, 392.0], [71.5, 396.0], [71.6, 398.0], [71.7, 400.0], [71.8, 401.0], [71.9, 403.0], [72.0, 407.0], [72.1, 408.0], [72.2, 410.0], [72.3, 411.0], [72.4, 412.0], [72.5, 414.0], [72.6, 415.0], [72.7, 416.0], [72.8, 417.0], [72.9, 419.0], [73.0, 420.0], [73.1, 422.0], [73.2, 423.0], [73.3, 424.0], [73.4, 425.0], [73.5, 427.0], [73.6, 429.0], [73.7, 430.0], [73.8, 432.0], [73.9, 433.0], [74.0, 434.0], [74.1, 436.0], [74.2, 436.0], [74.3, 438.0], [74.4, 438.0], [74.5, 440.0], [74.6, 441.0], [74.7, 442.0], [74.8, 443.0], [74.9, 444.0], [75.0, 446.0], [75.1, 447.0], [75.2, 448.0], [75.3, 449.0], [75.4, 450.0], [75.5, 451.0], [75.6, 451.0], [75.7, 453.0], [75.8, 455.0], [75.9, 458.0], [76.0, 460.0], [76.1, 461.0], [76.2, 463.0], [76.3, 465.0], [76.4, 466.0], [76.5, 467.0], [76.6, 468.0], [76.7, 469.0], [76.8, 470.0], [76.9, 473.0], [77.0, 475.0], [77.1, 476.0], [77.2, 478.0], [77.3, 479.0], [77.4, 480.0], [77.5, 482.0], [77.6, 485.0], [77.7, 488.0], [77.8, 489.0], [77.9, 491.0], [78.0, 492.0], [78.1, 493.0], [78.2, 496.0], [78.3, 498.0], [78.4, 501.0], [78.5, 503.0], [78.6, 505.0], [78.7, 506.0], [78.8, 508.0], [78.9, 511.0], [79.0, 512.0], [79.1, 514.0], [79.2, 516.0], [79.3, 518.0], [79.4, 519.0], [79.5, 521.0], [79.6, 522.0], [79.7, 525.0], [79.8, 527.0], [79.9, 529.0], [80.0, 530.0], [80.1, 530.0], [80.2, 533.0], [80.3, 534.0], [80.4, 536.0], [80.5, 538.0], [80.6, 540.0], [80.7, 542.0], [80.8, 544.0], [80.9, 545.0], [81.0, 547.0], [81.1, 548.0], [81.2, 551.0], [81.3, 554.0], [81.4, 556.0], [81.5, 560.0], [81.6, 561.0], [81.7, 562.0], [81.8, 564.0], [81.9, 564.0], [82.0, 566.0], [82.1, 568.0], [82.2, 570.0], [82.3, 572.0], [82.4, 573.0], [82.5, 574.0], [82.6, 576.0], [82.7, 578.0], [82.8, 579.0], [82.9, 582.0], [83.0, 582.0], [83.1, 584.0], [83.2, 586.0], [83.3, 588.0], [83.4, 591.0], [83.5, 593.0], [83.6, 593.0], [83.7, 596.0], [83.8, 598.0], [83.9, 598.0], [84.0, 600.0], [84.1, 601.0], [84.2, 604.0], [84.3, 607.0], [84.4, 608.0], [84.5, 610.0], [84.6, 614.0], [84.7, 615.0], [84.8, 618.0], [84.9, 620.0], [85.0, 622.0], [85.1, 626.0], [85.2, 627.0], [85.3, 631.0], [85.4, 632.0], [85.5, 635.0], [85.6, 636.0], [85.7, 640.0], [85.8, 642.0], [85.9, 645.0], [86.0, 647.0], [86.1, 649.0], [86.2, 650.0], [86.3, 652.0], [86.4, 654.0], [86.5, 655.0], [86.6, 657.0], [86.7, 659.0], [86.8, 660.0], [86.9, 664.0], [87.0, 665.0], [87.1, 668.0], [87.2, 670.0], [87.3, 673.0], [87.4, 674.0], [87.5, 678.0], [87.6, 682.0], [87.7, 685.0], [87.8, 689.0], [87.9, 690.0], [88.0, 691.0], [88.1, 692.0], [88.2, 694.0], [88.3, 696.0], [88.4, 697.0], [88.5, 698.0], [88.6, 703.0], [88.7, 705.0], [88.8, 707.0], [88.9, 709.0], [89.0, 712.0], [89.1, 714.0], [89.2, 717.0], [89.3, 721.0], [89.4, 723.0], [89.5, 726.0], [89.6, 731.0], [89.7, 733.0], [89.8, 736.0], [89.9, 738.0], [90.0, 740.0], [90.1, 748.0], [90.2, 751.0], [90.3, 755.0], [90.4, 758.0], [90.5, 763.0], [90.6, 765.0], [90.7, 768.0], [90.8, 774.0], [90.9, 780.0], [91.0, 783.0], [91.1, 787.0], [91.2, 792.0], [91.3, 796.0], [91.4, 801.0], [91.5, 804.0], [91.6, 810.0], [91.7, 815.0], [91.8, 818.0], [91.9, 823.0], [92.0, 825.0], [92.1, 828.0], [92.2, 832.0], [92.3, 840.0], [92.4, 843.0], [92.5, 847.0], [92.6, 853.0], [92.7, 865.0], [92.8, 870.0], [92.9, 873.0], [93.0, 878.0], [93.1, 884.0], [93.2, 889.0], [93.3, 898.0], [93.4, 904.0], [93.5, 909.0], [93.6, 912.0], [93.7, 916.0], [93.8, 922.0], [93.9, 934.0], [94.0, 941.0], [94.1, 946.0], [94.2, 960.0], [94.3, 966.0], [94.4, 971.0], [94.5, 981.0], [94.6, 988.0], [94.7, 993.0], [94.8, 996.0], [94.9, 1004.0], [95.0, 1020.0], [95.1, 1027.0], [95.2, 1033.0], [95.3, 1042.0], [95.4, 1050.0], [95.5, 1053.0], [95.6, 1067.0], [95.7, 1071.0], [95.8, 1085.0], [95.9, 1093.0], [96.0, 1118.0], [96.1, 1123.0], [96.2, 1129.0], [96.3, 1137.0], [96.4, 1145.0], [96.5, 1159.0], [96.6, 1171.0], [96.7, 1189.0], [96.8, 1199.0], [96.9, 1214.0], [97.0, 1225.0], [97.1, 1246.0], [97.2, 1275.0], [97.3, 1283.0], [97.4, 1305.0], [97.5, 1332.0], [97.6, 1357.0], [97.7, 1379.0], [97.8, 1409.0], [97.9, 1427.0], [98.0, 1447.0], [98.1, 1458.0], [98.2, 1477.0], [98.3, 1503.0], [98.4, 1518.0], [98.5, 1541.0], [98.6, 1577.0], [98.7, 1601.0], [98.8, 1616.0], [98.9, 1626.0], [99.0, 1656.0], [99.1, 1717.0], [99.2, 1787.0], [99.3, 1885.0], [99.4, 1984.0], [99.5, 2089.0], [99.6, 2195.0], [99.7, 2362.0], [99.8, 2495.0], [99.9, 3157.0], [100.0, 4287.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 2196.0, "series": [{"data": [[0.0, 2196.0], [600.0, 239.0], [700.0, 149.0], [800.0, 103.0], [900.0, 81.0], [1000.0, 56.0], [1100.0, 48.0], [1200.0, 28.0], [1300.0, 22.0], [1400.0, 28.0], [1500.0, 21.0], [100.0, 684.0], [1600.0, 20.0], [1700.0, 9.0], [1800.0, 4.0], [1900.0, 5.0], [2000.0, 5.0], [2100.0, 5.0], [2200.0, 4.0], [2300.0, 3.0], [2400.0, 4.0], [2700.0, 2.0], [3000.0, 2.0], [3100.0, 1.0], [200.0, 550.0], [3200.0, 1.0], [3700.0, 1.0], [4200.0, 2.0], [4100.0, 1.0], [300.0, 349.0], [400.0, 351.0], [500.0, 298.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 4200.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 90.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 4133.0, "series": [{"data": [[0.0, 4133.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1049.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 90.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.757281553398059, "minX": 1.60231242E12, "maxY": 10.0, "series": [{"data": [[1.60231248E12, 10.0], [1.60231254E12, 10.0], [1.60231242E12, 9.757281553398059], [1.6023126E12, 9.958217270194986]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6023126E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 303.6951474785912, "minX": 1.0, "maxY": 4286.0, "series": [{"data": [[4.0, 1649.5], [8.0, 480.0], [2.0, 3243.0], [1.0, 4286.0], [9.0, 1311.6666666666667], [5.0, 1475.6666666666667], [10.0, 303.6951474785912], [6.0, 3045.0], [3.0, 4119.0], [7.0, 617.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.986722306525044, 308.2219271623678]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 883.1, "minX": 1.60231242E12, "maxY": 1707205.3166666667, "series": [{"data": [[1.60231248E12, 1707205.3166666667], [1.60231254E12, 1424277.55], [1.60231242E12, 49095.583333333336], [1.6023126E12, 1110960.2]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60231248E12, 14818.516666666666], [1.60231254E12, 20355.2], [1.60231242E12, 883.1], [1.6023126E12, 9522.733333333334]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6023126E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 250.3643961554533, "minX": 1.60231242E12, "maxY": 363.13463324048274, "series": [{"data": [[1.60231248E12, 352.9970570924071], [1.60231254E12, 250.3643961554533], [1.60231242E12, 339.66990291262124], [1.6023126E12, 363.13463324048274]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6023126E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 250.11324697032956, "minX": 1.60231242E12, "maxY": 362.74187558031593, "series": [{"data": [[1.60231248E12, 352.5703354914657], [1.60231254E12, 250.11324697032956], [1.60231242E12, 339.45631067961165], [1.6023126E12, 362.74187558031593]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6023126E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.007104053489343913, "minX": 1.60231242E12, "maxY": 1.3398058252427192, "series": [{"data": [[1.60231248E12, 0.00882872277810479], [1.60231254E12, 0.007104053489343913], [1.60231242E12, 1.3398058252427192], [1.6023126E12, 0.008356545961002777]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6023126E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 27.0, "minX": 1.60231242E12, "maxY": 4287.0, "series": [{"data": [[1.60231248E12, 2732.0], [1.60231254E12, 2243.0], [1.60231242E12, 1216.0], [1.6023126E12, 4287.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60231248E12, 31.0], [1.60231254E12, 30.0], [1.60231242E12, 31.0], [1.6023126E12, 30.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60231248E12, 31.0], [1.60231254E12, 31.0], [1.60231242E12, 31.029600009918212], [1.6023126E12, 30.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60231248E12, 31.0], [1.60231254E12, 30.74299971461296], [1.60231242E12, 31.0], [1.6023126E12, 30.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60231248E12, 27.0], [1.60231254E12, 28.0], [1.60231242E12, 31.0], [1.6023126E12, 28.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60231248E12, 244.0], [1.60231254E12, 122.0], [1.60231242E12, 161.0], [1.6023126E12, 192.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6023126E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 45.5, "minX": 1.0, "maxY": 3681.0, "series": [{"data": [[2.0, 3681.0], [4.0, 1406.5], [5.0, 1225.0], [6.0, 1024.5], [7.0, 1922.0], [8.0, 944.0], [9.0, 848.0], [10.0, 765.0], [11.0, 687.0], [13.0, 636.0], [14.0, 630.0], [15.0, 560.0], [16.0, 573.5], [17.0, 395.0], [18.0, 627.0], [19.0, 496.5], [20.0, 450.5], [21.0, 379.0], [22.0, 402.5], [23.0, 431.0], [24.0, 241.5], [25.0, 348.5], [26.0, 303.0], [27.0, 313.0], [28.0, 186.5], [29.0, 262.0], [30.0, 246.5], [31.0, 276.5], [32.0, 221.5], [33.0, 122.0], [34.0, 82.5], [35.0, 118.0], [37.0, 221.0], [36.0, 190.5], [39.0, 153.0], [38.0, 88.5], [40.0, 62.5], [41.0, 120.0], [42.0, 136.5], [43.0, 106.0], [45.0, 78.0], [44.0, 184.0], [47.0, 82.0], [46.0, 122.5], [48.0, 126.5], [53.0, 70.0], [54.0, 75.0], [56.0, 47.0], [58.0, 132.5], [59.0, 74.0], [61.0, 81.0], [60.0, 111.0], [62.0, 74.5], [63.0, 155.0], [65.0, 109.0], [71.0, 80.0], [73.0, 119.0], [75.0, 77.0], [78.0, 97.0], [83.0, 75.0], [80.0, 45.5], [85.0, 80.0], [84.0, 105.0], [88.0, 75.5], [93.0, 64.0], [1.0, 142.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 93.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 45.5, "minX": 1.0, "maxY": 3680.5, "series": [{"data": [[2.0, 3680.5], [4.0, 1406.5], [5.0, 1225.0], [6.0, 1024.0], [7.0, 1922.0], [8.0, 941.5], [9.0, 848.0], [10.0, 764.0], [11.0, 687.0], [13.0, 636.0], [14.0, 629.0], [15.0, 557.0], [16.0, 572.0], [17.0, 395.0], [18.0, 625.5], [19.0, 496.5], [20.0, 449.0], [21.0, 379.0], [22.0, 399.5], [23.0, 431.0], [24.0, 241.5], [25.0, 348.5], [26.0, 302.0], [27.0, 313.0], [28.0, 186.5], [29.0, 260.5], [30.0, 246.5], [31.0, 275.5], [32.0, 221.5], [33.0, 122.0], [34.0, 82.5], [35.0, 118.0], [37.0, 221.0], [36.0, 190.0], [39.0, 153.0], [38.0, 88.5], [40.0, 62.5], [41.0, 120.0], [42.0, 136.5], [43.0, 106.0], [45.0, 78.0], [44.0, 183.5], [47.0, 82.0], [46.0, 122.0], [48.0, 126.5], [53.0, 70.0], [54.0, 74.5], [56.0, 47.0], [58.0, 132.0], [59.0, 74.0], [61.0, 81.0], [60.0, 110.5], [62.0, 74.5], [63.0, 155.0], [65.0, 109.0], [71.0, 80.0], [73.0, 119.0], [75.0, 77.0], [78.0, 97.0], [83.0, 75.0], [80.0, 45.5], [85.0, 80.0], [84.0, 105.0], [88.0, 75.5], [93.0, 64.0], [1.0, 138.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 93.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1.8833333333333333, "minX": 1.60231242E12, "maxY": 39.88333333333333, "series": [{"data": [[1.60231248E12, 28.316666666666666], [1.60231254E12, 39.88333333333333], [1.60231242E12, 1.8833333333333333], [1.6023126E12, 17.783333333333335]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6023126E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1.7166666666666666, "minX": 1.60231242E12, "maxY": 39.88333333333333, "series": [{"data": [[1.60231248E12, 28.316666666666666], [1.60231254E12, 39.88333333333333], [1.60231242E12, 1.7166666666666666], [1.6023126E12, 17.95]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6023126E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.7166666666666666, "minX": 1.60231242E12, "maxY": 39.88333333333333, "series": [{"data": [[1.60231248E12, 28.316666666666666], [1.60231254E12, 39.88333333333333], [1.60231242E12, 1.7166666666666666], [1.6023126E12, 17.95]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6023126E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.7166666666666666, "minX": 1.60231242E12, "maxY": 39.88333333333333, "series": [{"data": [[1.60231248E12, 28.316666666666666], [1.60231254E12, 39.88333333333333], [1.60231242E12, 1.7166666666666666], [1.6023126E12, 17.95]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6023126E12, "title": "Total Transactions Per Second"}},
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

