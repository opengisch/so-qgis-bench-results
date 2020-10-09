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
        data: {"result": {"minY": 27.0, "minX": 0.0, "maxY": 2312.0, "series": [{"data": [[0.0, 27.0], [0.1, 29.0], [0.2, 29.0], [0.3, 29.0], [0.4, 30.0], [0.5, 30.0], [0.6, 30.0], [0.7, 30.0], [0.8, 30.0], [0.9, 31.0], [1.0, 31.0], [1.1, 31.0], [1.2, 31.0], [1.3, 31.0], [1.4, 32.0], [1.5, 32.0], [1.6, 32.0], [1.7, 32.0], [1.8, 32.0], [1.9, 32.0], [2.0, 33.0], [2.1, 33.0], [2.2, 33.0], [2.3, 33.0], [2.4, 33.0], [2.5, 34.0], [2.6, 34.0], [2.7, 34.0], [2.8, 34.0], [2.9, 34.0], [3.0, 34.0], [3.1, 34.0], [3.2, 34.0], [3.3, 34.0], [3.4, 34.0], [3.5, 34.0], [3.6, 35.0], [3.7, 35.0], [3.8, 35.0], [3.9, 35.0], [4.0, 35.0], [4.1, 35.0], [4.2, 35.0], [4.3, 35.0], [4.4, 35.0], [4.5, 35.0], [4.6, 35.0], [4.7, 35.0], [4.8, 35.0], [4.9, 36.0], [5.0, 36.0], [5.1, 36.0], [5.2, 36.0], [5.3, 36.0], [5.4, 36.0], [5.5, 36.0], [5.6, 36.0], [5.7, 36.0], [5.8, 36.0], [5.9, 36.0], [6.0, 36.0], [6.1, 37.0], [6.2, 37.0], [6.3, 37.0], [6.4, 37.0], [6.5, 37.0], [6.6, 37.0], [6.7, 37.0], [6.8, 37.0], [6.9, 37.0], [7.0, 37.0], [7.1, 37.0], [7.2, 37.0], [7.3, 37.0], [7.4, 37.0], [7.5, 38.0], [7.6, 38.0], [7.7, 38.0], [7.8, 38.0], [7.9, 38.0], [8.0, 38.0], [8.1, 38.0], [8.2, 38.0], [8.3, 38.0], [8.4, 38.0], [8.5, 38.0], [8.6, 38.0], [8.7, 38.0], [8.8, 39.0], [8.9, 39.0], [9.0, 39.0], [9.1, 39.0], [9.2, 39.0], [9.3, 39.0], [9.4, 39.0], [9.5, 39.0], [9.6, 39.0], [9.7, 39.0], [9.8, 39.0], [9.9, 40.0], [10.0, 40.0], [10.1, 40.0], [10.2, 40.0], [10.3, 40.0], [10.4, 40.0], [10.5, 40.0], [10.6, 40.0], [10.7, 40.0], [10.8, 40.0], [10.9, 40.0], [11.0, 41.0], [11.1, 41.0], [11.2, 41.0], [11.3, 41.0], [11.4, 41.0], [11.5, 41.0], [11.6, 41.0], [11.7, 41.0], [11.8, 41.0], [11.9, 42.0], [12.0, 42.0], [12.1, 42.0], [12.2, 42.0], [12.3, 42.0], [12.4, 42.0], [12.5, 42.0], [12.6, 42.0], [12.7, 43.0], [12.8, 43.0], [12.9, 43.0], [13.0, 43.0], [13.1, 43.0], [13.2, 43.0], [13.3, 44.0], [13.4, 44.0], [13.5, 44.0], [13.6, 44.0], [13.7, 44.0], [13.8, 45.0], [13.9, 45.0], [14.0, 45.0], [14.1, 45.0], [14.2, 45.0], [14.3, 46.0], [14.4, 46.0], [14.5, 46.0], [14.6, 47.0], [14.7, 47.0], [14.8, 47.0], [14.9, 47.0], [15.0, 48.0], [15.1, 48.0], [15.2, 49.0], [15.3, 49.0], [15.4, 50.0], [15.5, 50.0], [15.6, 51.0], [15.7, 52.0], [15.8, 52.0], [15.9, 54.0], [16.0, 54.0], [16.1, 55.0], [16.2, 55.0], [16.3, 56.0], [16.4, 56.0], [16.5, 56.0], [16.6, 57.0], [16.7, 57.0], [16.8, 57.0], [16.9, 58.0], [17.0, 58.0], [17.1, 58.0], [17.2, 58.0], [17.3, 59.0], [17.4, 59.0], [17.5, 59.0], [17.6, 60.0], [17.7, 60.0], [17.8, 60.0], [17.9, 60.0], [18.0, 60.0], [18.1, 60.0], [18.2, 61.0], [18.3, 61.0], [18.4, 61.0], [18.5, 61.0], [18.6, 61.0], [18.7, 61.0], [18.8, 62.0], [18.9, 62.0], [19.0, 62.0], [19.1, 62.0], [19.2, 62.0], [19.3, 62.0], [19.4, 62.0], [19.5, 62.0], [19.6, 63.0], [19.7, 63.0], [19.8, 63.0], [19.9, 63.0], [20.0, 63.0], [20.1, 63.0], [20.2, 64.0], [20.3, 64.0], [20.4, 64.0], [20.5, 64.0], [20.6, 64.0], [20.7, 64.0], [20.8, 64.0], [20.9, 65.0], [21.0, 65.0], [21.1, 65.0], [21.2, 65.0], [21.3, 65.0], [21.4, 65.0], [21.5, 65.0], [21.6, 65.0], [21.7, 66.0], [21.8, 66.0], [21.9, 66.0], [22.0, 66.0], [22.1, 66.0], [22.2, 66.0], [22.3, 66.0], [22.4, 66.0], [22.5, 67.0], [22.6, 67.0], [22.7, 67.0], [22.8, 67.0], [22.9, 67.0], [23.0, 67.0], [23.1, 67.0], [23.2, 67.0], [23.3, 68.0], [23.4, 68.0], [23.5, 68.0], [23.6, 68.0], [23.7, 68.0], [23.8, 68.0], [23.9, 68.0], [24.0, 68.0], [24.1, 68.0], [24.2, 68.0], [24.3, 69.0], [24.4, 69.0], [24.5, 69.0], [24.6, 69.0], [24.7, 69.0], [24.8, 69.0], [24.9, 69.0], [25.0, 69.0], [25.1, 69.0], [25.2, 69.0], [25.3, 70.0], [25.4, 70.0], [25.5, 70.0], [25.6, 70.0], [25.7, 70.0], [25.8, 70.0], [25.9, 70.0], [26.0, 70.0], [26.1, 70.0], [26.2, 70.0], [26.3, 71.0], [26.4, 71.0], [26.5, 71.0], [26.6, 71.0], [26.7, 71.0], [26.8, 71.0], [26.9, 71.0], [27.0, 71.0], [27.1, 71.0], [27.2, 71.0], [27.3, 71.0], [27.4, 71.0], [27.5, 71.0], [27.6, 72.0], [27.7, 72.0], [27.8, 72.0], [27.9, 72.0], [28.0, 72.0], [28.1, 72.0], [28.2, 72.0], [28.3, 72.0], [28.4, 72.0], [28.5, 72.0], [28.6, 72.0], [28.7, 72.0], [28.8, 73.0], [28.9, 73.0], [29.0, 73.0], [29.1, 73.0], [29.2, 73.0], [29.3, 73.0], [29.4, 73.0], [29.5, 73.0], [29.6, 73.0], [29.7, 73.0], [29.8, 73.0], [29.9, 73.0], [30.0, 73.0], [30.1, 74.0], [30.2, 74.0], [30.3, 74.0], [30.4, 74.0], [30.5, 74.0], [30.6, 74.0], [30.7, 74.0], [30.8, 74.0], [30.9, 74.0], [31.0, 74.0], [31.1, 75.0], [31.2, 75.0], [31.3, 75.0], [31.4, 75.0], [31.5, 75.0], [31.6, 75.0], [31.7, 75.0], [31.8, 75.0], [31.9, 75.0], [32.0, 75.0], [32.1, 76.0], [32.2, 76.0], [32.3, 76.0], [32.4, 76.0], [32.5, 76.0], [32.6, 76.0], [32.7, 76.0], [32.8, 76.0], [32.9, 76.0], [33.0, 76.0], [33.1, 77.0], [33.2, 77.0], [33.3, 77.0], [33.4, 77.0], [33.5, 77.0], [33.6, 77.0], [33.7, 77.0], [33.8, 77.0], [33.9, 77.0], [34.0, 77.0], [34.1, 78.0], [34.2, 78.0], [34.3, 78.0], [34.4, 78.0], [34.5, 78.0], [34.6, 78.0], [34.7, 78.0], [34.8, 78.0], [34.9, 78.0], [35.0, 78.0], [35.1, 79.0], [35.2, 79.0], [35.3, 79.0], [35.4, 79.0], [35.5, 79.0], [35.6, 79.0], [35.7, 79.0], [35.8, 80.0], [35.9, 80.0], [36.0, 80.0], [36.1, 80.0], [36.2, 80.0], [36.3, 80.0], [36.4, 80.0], [36.5, 81.0], [36.6, 81.0], [36.7, 81.0], [36.8, 81.0], [36.9, 81.0], [37.0, 82.0], [37.1, 82.0], [37.2, 82.0], [37.3, 82.0], [37.4, 82.0], [37.5, 83.0], [37.6, 83.0], [37.7, 83.0], [37.8, 83.0], [37.9, 84.0], [38.0, 84.0], [38.1, 85.0], [38.2, 85.0], [38.3, 85.0], [38.4, 86.0], [38.5, 86.0], [38.6, 86.0], [38.7, 87.0], [38.8, 87.0], [38.9, 87.0], [39.0, 88.0], [39.1, 88.0], [39.2, 88.0], [39.3, 89.0], [39.4, 89.0], [39.5, 90.0], [39.6, 90.0], [39.7, 90.0], [39.8, 91.0], [39.9, 91.0], [40.0, 92.0], [40.1, 93.0], [40.2, 93.0], [40.3, 94.0], [40.4, 95.0], [40.5, 95.0], [40.6, 96.0], [40.7, 97.0], [40.8, 98.0], [40.9, 99.0], [41.0, 100.0], [41.1, 100.0], [41.2, 101.0], [41.3, 102.0], [41.4, 102.0], [41.5, 103.0], [41.6, 104.0], [41.7, 104.0], [41.8, 105.0], [41.9, 106.0], [42.0, 107.0], [42.1, 108.0], [42.2, 109.0], [42.3, 110.0], [42.4, 110.0], [42.5, 111.0], [42.6, 113.0], [42.7, 113.0], [42.8, 114.0], [42.9, 115.0], [43.0, 116.0], [43.1, 117.0], [43.2, 118.0], [43.3, 118.0], [43.4, 120.0], [43.5, 121.0], [43.6, 121.0], [43.7, 122.0], [43.8, 122.0], [43.9, 123.0], [44.0, 124.0], [44.1, 124.0], [44.2, 125.0], [44.3, 125.0], [44.4, 126.0], [44.5, 127.0], [44.6, 127.0], [44.7, 128.0], [44.8, 128.0], [44.9, 129.0], [45.0, 130.0], [45.1, 131.0], [45.2, 132.0], [45.3, 132.0], [45.4, 133.0], [45.5, 133.0], [45.6, 134.0], [45.7, 135.0], [45.8, 136.0], [45.9, 136.0], [46.0, 138.0], [46.1, 140.0], [46.2, 140.0], [46.3, 141.0], [46.4, 142.0], [46.5, 142.0], [46.6, 144.0], [46.7, 146.0], [46.8, 148.0], [46.9, 148.0], [47.0, 149.0], [47.1, 151.0], [47.2, 151.0], [47.3, 153.0], [47.4, 154.0], [47.5, 156.0], [47.6, 158.0], [47.7, 160.0], [47.8, 160.0], [47.9, 162.0], [48.0, 163.0], [48.1, 164.0], [48.2, 165.0], [48.3, 166.0], [48.4, 167.0], [48.5, 168.0], [48.6, 171.0], [48.7, 171.0], [48.8, 172.0], [48.9, 173.0], [49.0, 174.0], [49.1, 175.0], [49.2, 175.0], [49.3, 176.0], [49.4, 177.0], [49.5, 178.0], [49.6, 180.0], [49.7, 180.0], [49.8, 181.0], [49.9, 182.0], [50.0, 182.0], [50.1, 183.0], [50.2, 183.0], [50.3, 184.0], [50.4, 185.0], [50.5, 186.0], [50.6, 187.0], [50.7, 188.0], [50.8, 188.0], [50.9, 189.0], [51.0, 189.0], [51.1, 190.0], [51.2, 190.0], [51.3, 191.0], [51.4, 191.0], [51.5, 192.0], [51.6, 193.0], [51.7, 194.0], [51.8, 194.0], [51.9, 196.0], [52.0, 196.0], [52.1, 196.0], [52.2, 197.0], [52.3, 198.0], [52.4, 199.0], [52.5, 199.0], [52.6, 200.0], [52.7, 201.0], [52.8, 202.0], [52.9, 202.0], [53.0, 203.0], [53.1, 204.0], [53.2, 204.0], [53.3, 205.0], [53.4, 206.0], [53.5, 207.0], [53.6, 208.0], [53.7, 210.0], [53.8, 210.0], [53.9, 211.0], [54.0, 213.0], [54.1, 213.0], [54.2, 214.0], [54.3, 215.0], [54.4, 215.0], [54.5, 217.0], [54.6, 217.0], [54.7, 218.0], [54.8, 219.0], [54.9, 219.0], [55.0, 220.0], [55.1, 221.0], [55.2, 222.0], [55.3, 222.0], [55.4, 223.0], [55.5, 224.0], [55.6, 225.0], [55.7, 225.0], [55.8, 226.0], [55.9, 227.0], [56.0, 228.0], [56.1, 229.0], [56.2, 229.0], [56.3, 230.0], [56.4, 231.0], [56.5, 231.0], [56.6, 232.0], [56.7, 233.0], [56.8, 234.0], [56.9, 234.0], [57.0, 235.0], [57.1, 236.0], [57.2, 237.0], [57.3, 238.0], [57.4, 239.0], [57.5, 239.0], [57.6, 240.0], [57.7, 240.0], [57.8, 241.0], [57.9, 242.0], [58.0, 242.0], [58.1, 243.0], [58.2, 244.0], [58.3, 245.0], [58.4, 245.0], [58.5, 246.0], [58.6, 247.0], [58.7, 248.0], [58.8, 249.0], [58.9, 249.0], [59.0, 250.0], [59.1, 252.0], [59.2, 253.0], [59.3, 254.0], [59.4, 254.0], [59.5, 255.0], [59.6, 256.0], [59.7, 256.0], [59.8, 258.0], [59.9, 259.0], [60.0, 261.0], [60.1, 262.0], [60.2, 263.0], [60.3, 265.0], [60.4, 266.0], [60.5, 267.0], [60.6, 268.0], [60.7, 269.0], [60.8, 270.0], [60.9, 270.0], [61.0, 271.0], [61.1, 272.0], [61.2, 273.0], [61.3, 275.0], [61.4, 276.0], [61.5, 277.0], [61.6, 278.0], [61.7, 279.0], [61.8, 279.0], [61.9, 280.0], [62.0, 281.0], [62.1, 282.0], [62.2, 285.0], [62.3, 286.0], [62.4, 287.0], [62.5, 288.0], [62.6, 289.0], [62.7, 290.0], [62.8, 291.0], [62.9, 293.0], [63.0, 295.0], [63.1, 296.0], [63.2, 296.0], [63.3, 297.0], [63.4, 298.0], [63.5, 299.0], [63.6, 300.0], [63.7, 302.0], [63.8, 303.0], [63.9, 304.0], [64.0, 305.0], [64.1, 306.0], [64.2, 307.0], [64.3, 308.0], [64.4, 309.0], [64.5, 312.0], [64.6, 313.0], [64.7, 314.0], [64.8, 315.0], [64.9, 316.0], [65.0, 317.0], [65.1, 318.0], [65.2, 319.0], [65.3, 321.0], [65.4, 321.0], [65.5, 323.0], [65.6, 325.0], [65.7, 326.0], [65.8, 326.0], [65.9, 328.0], [66.0, 329.0], [66.1, 331.0], [66.2, 332.0], [66.3, 334.0], [66.4, 335.0], [66.5, 335.0], [66.6, 337.0], [66.7, 338.0], [66.8, 339.0], [66.9, 340.0], [67.0, 341.0], [67.1, 343.0], [67.2, 345.0], [67.3, 346.0], [67.4, 348.0], [67.5, 348.0], [67.6, 349.0], [67.7, 351.0], [67.8, 353.0], [67.9, 355.0], [68.0, 356.0], [68.1, 357.0], [68.2, 359.0], [68.3, 360.0], [68.4, 361.0], [68.5, 363.0], [68.6, 364.0], [68.7, 364.0], [68.8, 366.0], [68.9, 367.0], [69.0, 368.0], [69.1, 369.0], [69.2, 370.0], [69.3, 371.0], [69.4, 372.0], [69.5, 373.0], [69.6, 374.0], [69.7, 375.0], [69.8, 375.0], [69.9, 377.0], [70.0, 377.0], [70.1, 378.0], [70.2, 379.0], [70.3, 381.0], [70.4, 383.0], [70.5, 384.0], [70.6, 386.0], [70.7, 388.0], [70.8, 390.0], [70.9, 390.0], [71.0, 392.0], [71.1, 392.0], [71.2, 394.0], [71.3, 396.0], [71.4, 397.0], [71.5, 399.0], [71.6, 399.0], [71.7, 401.0], [71.8, 402.0], [71.9, 404.0], [72.0, 406.0], [72.1, 407.0], [72.2, 407.0], [72.3, 408.0], [72.4, 409.0], [72.5, 410.0], [72.6, 411.0], [72.7, 412.0], [72.8, 413.0], [72.9, 414.0], [73.0, 415.0], [73.1, 417.0], [73.2, 418.0], [73.3, 419.0], [73.4, 420.0], [73.5, 422.0], [73.6, 422.0], [73.7, 423.0], [73.8, 424.0], [73.9, 425.0], [74.0, 426.0], [74.1, 427.0], [74.2, 428.0], [74.3, 428.0], [74.4, 429.0], [74.5, 430.0], [74.6, 432.0], [74.7, 434.0], [74.8, 435.0], [74.9, 435.0], [75.0, 436.0], [75.1, 437.0], [75.2, 438.0], [75.3, 439.0], [75.4, 442.0], [75.5, 443.0], [75.6, 444.0], [75.7, 447.0], [75.8, 448.0], [75.9, 449.0], [76.0, 451.0], [76.1, 453.0], [76.2, 455.0], [76.3, 456.0], [76.4, 458.0], [76.5, 459.0], [76.6, 461.0], [76.7, 462.0], [76.8, 463.0], [76.9, 464.0], [77.0, 465.0], [77.1, 466.0], [77.2, 467.0], [77.3, 467.0], [77.4, 469.0], [77.5, 469.0], [77.6, 471.0], [77.7, 472.0], [77.8, 473.0], [77.9, 473.0], [78.0, 474.0], [78.1, 477.0], [78.2, 478.0], [78.3, 479.0], [78.4, 481.0], [78.5, 482.0], [78.6, 483.0], [78.7, 485.0], [78.8, 486.0], [78.9, 488.0], [79.0, 489.0], [79.1, 490.0], [79.2, 493.0], [79.3, 494.0], [79.4, 497.0], [79.5, 499.0], [79.6, 500.0], [79.7, 502.0], [79.8, 505.0], [79.9, 507.0], [80.0, 509.0], [80.1, 511.0], [80.2, 514.0], [80.3, 517.0], [80.4, 518.0], [80.5, 520.0], [80.6, 522.0], [80.7, 522.0], [80.8, 525.0], [80.9, 527.0], [81.0, 528.0], [81.1, 531.0], [81.2, 533.0], [81.3, 535.0], [81.4, 537.0], [81.5, 539.0], [81.6, 541.0], [81.7, 542.0], [81.8, 543.0], [81.9, 545.0], [82.0, 548.0], [82.1, 549.0], [82.2, 551.0], [82.3, 554.0], [82.4, 555.0], [82.5, 557.0], [82.6, 560.0], [82.7, 561.0], [82.8, 563.0], [82.9, 565.0], [83.0, 567.0], [83.1, 569.0], [83.2, 572.0], [83.3, 573.0], [83.4, 574.0], [83.5, 576.0], [83.6, 577.0], [83.7, 577.0], [83.8, 579.0], [83.9, 582.0], [84.0, 583.0], [84.1, 584.0], [84.2, 585.0], [84.3, 588.0], [84.4, 591.0], [84.5, 592.0], [84.6, 594.0], [84.7, 596.0], [84.8, 598.0], [84.9, 600.0], [85.0, 602.0], [85.1, 606.0], [85.2, 606.0], [85.3, 609.0], [85.4, 612.0], [85.5, 615.0], [85.6, 619.0], [85.7, 623.0], [85.8, 624.0], [85.9, 625.0], [86.0, 628.0], [86.1, 632.0], [86.2, 634.0], [86.3, 637.0], [86.4, 639.0], [86.5, 640.0], [86.6, 644.0], [86.7, 646.0], [86.8, 648.0], [86.9, 650.0], [87.0, 652.0], [87.1, 654.0], [87.2, 656.0], [87.3, 658.0], [87.4, 659.0], [87.5, 662.0], [87.6, 664.0], [87.7, 665.0], [87.8, 668.0], [87.9, 670.0], [88.0, 673.0], [88.1, 675.0], [88.2, 677.0], [88.3, 679.0], [88.4, 681.0], [88.5, 682.0], [88.6, 683.0], [88.7, 687.0], [88.8, 689.0], [88.9, 691.0], [89.0, 696.0], [89.1, 697.0], [89.2, 699.0], [89.3, 703.0], [89.4, 708.0], [89.5, 713.0], [89.6, 714.0], [89.7, 718.0], [89.8, 722.0], [89.9, 725.0], [90.0, 728.0], [90.1, 730.0], [90.2, 731.0], [90.3, 734.0], [90.4, 738.0], [90.5, 741.0], [90.6, 743.0], [90.7, 749.0], [90.8, 753.0], [90.9, 755.0], [91.0, 758.0], [91.1, 762.0], [91.2, 766.0], [91.3, 768.0], [91.4, 773.0], [91.5, 775.0], [91.6, 779.0], [91.7, 782.0], [91.8, 785.0], [91.9, 789.0], [92.0, 796.0], [92.1, 799.0], [92.2, 803.0], [92.3, 808.0], [92.4, 812.0], [92.5, 819.0], [92.6, 826.0], [92.7, 830.0], [92.8, 834.0], [92.9, 836.0], [93.0, 840.0], [93.1, 845.0], [93.2, 850.0], [93.3, 857.0], [93.4, 862.0], [93.5, 868.0], [93.6, 874.0], [93.7, 885.0], [93.8, 893.0], [93.9, 900.0], [94.0, 909.0], [94.1, 914.0], [94.2, 919.0], [94.3, 924.0], [94.4, 928.0], [94.5, 933.0], [94.6, 940.0], [94.7, 945.0], [94.8, 950.0], [94.9, 956.0], [95.0, 961.0], [95.1, 965.0], [95.2, 975.0], [95.3, 986.0], [95.4, 993.0], [95.5, 995.0], [95.6, 1005.0], [95.7, 1016.0], [95.8, 1019.0], [95.9, 1026.0], [96.0, 1043.0], [96.1, 1048.0], [96.2, 1057.0], [96.3, 1062.0], [96.4, 1081.0], [96.5, 1086.0], [96.6, 1096.0], [96.7, 1107.0], [96.8, 1128.0], [96.9, 1140.0], [97.0, 1146.0], [97.1, 1163.0], [97.2, 1175.0], [97.3, 1190.0], [97.4, 1199.0], [97.5, 1212.0], [97.6, 1226.0], [97.7, 1246.0], [97.8, 1268.0], [97.9, 1279.0], [98.0, 1303.0], [98.1, 1312.0], [98.2, 1332.0], [98.3, 1344.0], [98.4, 1373.0], [98.5, 1394.0], [98.6, 1416.0], [98.7, 1450.0], [98.8, 1467.0], [98.9, 1494.0], [99.0, 1525.0], [99.1, 1585.0], [99.2, 1608.0], [99.3, 1698.0], [99.4, 1755.0], [99.5, 1880.0], [99.6, 1980.0], [99.7, 2032.0], [99.8, 2109.0], [99.9, 2153.0], [100.0, 2312.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 2161.0, "series": [{"data": [[0.0, 2161.0], [2100.0, 8.0], [2200.0, 2.0], [2300.0, 1.0], [600.0, 228.0], [700.0, 154.0], [200.0, 583.0], [800.0, 93.0], [900.0, 87.0], [1000.0, 57.0], [1100.0, 41.0], [300.0, 425.0], [1200.0, 30.0], [1300.0, 29.0], [1400.0, 23.0], [1500.0, 12.0], [100.0, 607.0], [400.0, 417.0], [1600.0, 7.0], [1700.0, 8.0], [1800.0, 3.0], [1900.0, 5.0], [500.0, 282.0], [2000.0, 9.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 2300.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 55.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 4199.0, "series": [{"data": [[0.0, 4199.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1018.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 55.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.973943254198032, "minX": 1.60218642E12, "maxY": 10.0, "series": [{"data": [[1.60218648E12, 10.0], [1.60218654E12, 9.973943254198032], [1.60218642E12, 9.9802371541502]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60218654E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 300.2037671232869, "minX": 1.0, "maxY": 2045.0, "series": [{"data": [[4.0, 1046.5], [8.0, 1190.0], [2.0, 2045.0], [1.0, 2030.0], [9.0, 422.0], [5.0, 1105.5], [10.0, 300.2037671232869], [3.0, 1221.0], [6.0, 1084.0], [7.0, 1146.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.986722306525044, 302.6771623672227]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 10982.45, "minX": 1.60218642E12, "maxY": 1696416.6166666667, "series": [{"data": [[1.60218648E12, 1406287.5], [1.60218654E12, 1696416.6166666667], [1.60218642E12, 1188856.3833333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60218648E12, 19487.2], [1.60218654E12, 15109.9], [1.60218642E12, 10982.45]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60218654E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 264.1293859649126, "minX": 1.60218642E12, "maxY": 334.43320158102796, "series": [{"data": [[1.60218648E12, 264.1293859649126], [1.60218654E12, 330.3074696004628], [1.60218642E12, 334.43320158102796]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60218654E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 263.85701754385894, "minX": 1.60218642E12, "maxY": 334.0189723320154, "series": [{"data": [[1.60218648E12, 263.85701754385894], [1.60218654E12, 329.9160393746383], [1.60218642E12, 334.0189723320154]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60218654E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.005790387955993059, "minX": 1.60218642E12, "maxY": 0.07588932806324108, "series": [{"data": [[1.60218648E12, 0.008771929824561396], [1.60218654E12, 0.005790387955993059], [1.60218642E12, 0.07588932806324108]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60218654E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 27.0, "minX": 1.60218642E12, "maxY": 2312.0, "series": [{"data": [[1.60218648E12, 2215.0], [1.60218654E12, 2312.0], [1.60218642E12, 1947.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60218648E12, 31.0], [1.60218654E12, 31.551999588012695], [1.60218642E12, 30.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60218648E12, 31.0], [1.60218654E12, 32.0], [1.60218642E12, 30.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60218648E12, 31.0], [1.60218654E12, 32.0], [1.60218642E12, 30.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60218648E12, 27.0], [1.60218654E12, 29.0], [1.60218642E12, 29.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60218648E12, 132.0], [1.60218654E12, 221.0], [1.60218642E12, 237.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60218654E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 66.0, "minX": 1.0, "maxY": 2120.0, "series": [{"data": [[4.0, 1554.5], [5.0, 2120.0], [6.0, 1322.5], [7.0, 1175.0], [8.0, 720.5], [9.0, 782.0], [10.0, 938.0], [11.0, 860.0], [12.0, 666.0], [13.0, 665.0], [14.0, 665.5], [15.0, 597.0], [16.0, 579.5], [17.0, 520.0], [18.0, 474.5], [19.0, 396.0], [20.0, 481.5], [21.0, 443.5], [22.0, 335.5], [23.0, 399.0], [24.0, 428.0], [25.0, 429.0], [26.0, 370.5], [27.0, 265.0], [28.0, 298.0], [29.0, 364.0], [30.0, 302.5], [31.0, 214.0], [32.0, 233.0], [33.0, 261.0], [34.0, 75.5], [35.0, 79.5], [36.0, 186.0], [37.0, 276.0], [40.0, 89.0], [42.0, 143.5], [43.0, 76.0], [44.0, 231.0], [46.0, 163.5], [47.0, 77.5], [49.0, 93.5], [48.0, 74.0], [50.0, 114.0], [51.0, 66.0], [52.0, 80.5], [54.0, 90.0], [55.0, 182.0], [57.0, 116.0], [58.0, 79.0], [59.0, 131.0], [60.0, 104.5], [63.0, 83.0], [64.0, 123.5], [66.0, 66.0], [71.0, 148.0], [68.0, 141.0], [70.0, 120.0], [69.0, 113.0], [72.0, 72.0], [78.0, 131.0], [79.0, 76.0], [82.0, 75.0], [80.0, 116.5], [84.0, 72.5], [85.0, 73.0], [91.0, 68.0], [1.0, 1080.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 91.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 66.0, "minX": 1.0, "maxY": 2119.0, "series": [{"data": [[4.0, 1554.5], [5.0, 2119.0], [6.0, 1322.0], [7.0, 1174.0], [8.0, 719.5], [9.0, 782.0], [10.0, 935.0], [11.0, 860.0], [12.0, 663.5], [13.0, 664.0], [14.0, 663.0], [15.0, 596.0], [16.0, 577.0], [17.0, 520.0], [18.0, 474.5], [19.0, 395.5], [20.0, 481.0], [21.0, 442.5], [22.0, 335.0], [23.0, 399.0], [24.0, 427.5], [25.0, 429.0], [26.0, 370.5], [27.0, 265.0], [28.0, 297.5], [29.0, 364.0], [30.0, 302.5], [31.0, 214.0], [32.0, 233.0], [33.0, 261.0], [34.0, 75.5], [35.0, 79.5], [36.0, 185.5], [37.0, 276.0], [40.0, 89.0], [42.0, 143.5], [43.0, 76.0], [44.0, 231.0], [46.0, 163.5], [47.0, 77.5], [49.0, 93.5], [48.0, 72.5], [50.0, 114.0], [51.0, 66.0], [52.0, 80.5], [54.0, 90.0], [55.0, 182.0], [57.0, 116.0], [58.0, 79.0], [59.0, 130.0], [60.0, 104.5], [63.0, 83.0], [64.0, 123.5], [66.0, 66.0], [71.0, 148.0], [68.0, 140.5], [70.0, 120.0], [69.0, 113.0], [72.0, 72.0], [78.0, 131.0], [79.0, 76.0], [82.0, 75.0], [80.0, 116.5], [84.0, 72.5], [85.0, 73.0], [91.0, 68.0], [1.0, 1077.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 91.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 21.25, "minX": 1.60218642E12, "maxY": 38.0, "series": [{"data": [[1.60218648E12, 38.0], [1.60218654E12, 28.616666666666667], [1.60218642E12, 21.25]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60218654E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 21.083333333333332, "minX": 1.60218642E12, "maxY": 38.0, "series": [{"data": [[1.60218648E12, 38.0], [1.60218654E12, 28.783333333333335], [1.60218642E12, 21.083333333333332]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60218654E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 21.083333333333332, "minX": 1.60218642E12, "maxY": 38.0, "series": [{"data": [[1.60218648E12, 38.0], [1.60218654E12, 28.783333333333335], [1.60218642E12, 21.083333333333332]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60218654E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 21.083333333333332, "minX": 1.60218642E12, "maxY": 38.0, "series": [{"data": [[1.60218648E12, 38.0], [1.60218654E12, 28.783333333333335], [1.60218642E12, 21.083333333333332]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60218654E12, "title": "Total Transactions Per Second"}},
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

