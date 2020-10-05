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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 5478.0, "series": [{"data": [[0.0, 1.0], [0.1, 1.0], [0.2, 2.0], [0.3, 2.0], [0.4, 2.0], [0.5, 2.0], [0.6, 2.0], [0.7, 2.0], [0.8, 2.0], [0.9, 2.0], [1.0, 2.0], [1.1, 2.0], [1.2, 2.0], [1.3, 2.0], [1.4, 2.0], [1.5, 2.0], [1.6, 2.0], [1.7, 2.0], [1.8, 2.0], [1.9, 2.0], [2.0, 2.0], [2.1, 2.0], [2.2, 2.0], [2.3, 2.0], [2.4, 2.0], [2.5, 2.0], [2.6, 2.0], [2.7, 2.0], [2.8, 2.0], [2.9, 2.0], [3.0, 2.0], [3.1, 2.0], [3.2, 2.0], [3.3, 2.0], [3.4, 2.0], [3.5, 2.0], [3.6, 2.0], [3.7, 2.0], [3.8, 2.0], [3.9, 2.0], [4.0, 2.0], [4.1, 2.0], [4.2, 2.0], [4.3, 2.0], [4.4, 2.0], [4.5, 2.0], [4.6, 2.0], [4.7, 2.0], [4.8, 2.0], [4.9, 2.0], [5.0, 3.0], [5.1, 3.0], [5.2, 3.0], [5.3, 3.0], [5.4, 3.0], [5.5, 3.0], [5.6, 3.0], [5.7, 3.0], [5.8, 3.0], [5.9, 3.0], [6.0, 3.0], [6.1, 3.0], [6.2, 3.0], [6.3, 3.0], [6.4, 3.0], [6.5, 3.0], [6.6, 3.0], [6.7, 3.0], [6.8, 3.0], [6.9, 3.0], [7.0, 3.0], [7.1, 3.0], [7.2, 3.0], [7.3, 3.0], [7.4, 3.0], [7.5, 3.0], [7.6, 3.0], [7.7, 3.0], [7.8, 3.0], [7.9, 3.0], [8.0, 3.0], [8.1, 3.0], [8.2, 3.0], [8.3, 3.0], [8.4, 3.0], [8.5, 3.0], [8.6, 3.0], [8.7, 3.0], [8.8, 3.0], [8.9, 3.0], [9.0, 3.0], [9.1, 3.0], [9.2, 3.0], [9.3, 3.0], [9.4, 3.0], [9.5, 3.0], [9.6, 3.0], [9.7, 3.0], [9.8, 3.0], [9.9, 3.0], [10.0, 3.0], [10.1, 3.0], [10.2, 3.0], [10.3, 3.0], [10.4, 3.0], [10.5, 3.0], [10.6, 3.0], [10.7, 3.0], [10.8, 3.0], [10.9, 3.0], [11.0, 3.0], [11.1, 3.0], [11.2, 3.0], [11.3, 3.0], [11.4, 3.0], [11.5, 3.0], [11.6, 3.0], [11.7, 3.0], [11.8, 3.0], [11.9, 3.0], [12.0, 3.0], [12.1, 3.0], [12.2, 3.0], [12.3, 3.0], [12.4, 3.0], [12.5, 3.0], [12.6, 3.0], [12.7, 3.0], [12.8, 3.0], [12.9, 3.0], [13.0, 3.0], [13.1, 3.0], [13.2, 3.0], [13.3, 3.0], [13.4, 3.0], [13.5, 3.0], [13.6, 3.0], [13.7, 3.0], [13.8, 3.0], [13.9, 3.0], [14.0, 3.0], [14.1, 3.0], [14.2, 3.0], [14.3, 3.0], [14.4, 3.0], [14.5, 3.0], [14.6, 3.0], [14.7, 3.0], [14.8, 3.0], [14.9, 3.0], [15.0, 3.0], [15.1, 3.0], [15.2, 3.0], [15.3, 3.0], [15.4, 3.0], [15.5, 3.0], [15.6, 3.0], [15.7, 3.0], [15.8, 3.0], [15.9, 3.0], [16.0, 3.0], [16.1, 3.0], [16.2, 3.0], [16.3, 4.0], [16.4, 4.0], [16.5, 4.0], [16.6, 4.0], [16.7, 4.0], [16.8, 4.0], [16.9, 4.0], [17.0, 4.0], [17.1, 4.0], [17.2, 4.0], [17.3, 4.0], [17.4, 4.0], [17.5, 4.0], [17.6, 4.0], [17.7, 4.0], [17.8, 4.0], [17.9, 4.0], [18.0, 4.0], [18.1, 4.0], [18.2, 4.0], [18.3, 4.0], [18.4, 4.0], [18.5, 4.0], [18.6, 4.0], [18.7, 4.0], [18.8, 4.0], [18.9, 4.0], [19.0, 4.0], [19.1, 4.0], [19.2, 4.0], [19.3, 4.0], [19.4, 4.0], [19.5, 4.0], [19.6, 4.0], [19.7, 4.0], [19.8, 4.0], [19.9, 4.0], [20.0, 4.0], [20.1, 4.0], [20.2, 4.0], [20.3, 4.0], [20.4, 4.0], [20.5, 4.0], [20.6, 4.0], [20.7, 4.0], [20.8, 4.0], [20.9, 4.0], [21.0, 4.0], [21.1, 4.0], [21.2, 4.0], [21.3, 4.0], [21.4, 4.0], [21.5, 4.0], [21.6, 4.0], [21.7, 4.0], [21.8, 4.0], [21.9, 4.0], [22.0, 4.0], [22.1, 4.0], [22.2, 4.0], [22.3, 4.0], [22.4, 4.0], [22.5, 4.0], [22.6, 4.0], [22.7, 4.0], [22.8, 4.0], [22.9, 4.0], [23.0, 4.0], [23.1, 4.0], [23.2, 4.0], [23.3, 4.0], [23.4, 4.0], [23.5, 4.0], [23.6, 4.0], [23.7, 4.0], [23.8, 4.0], [23.9, 4.0], [24.0, 5.0], [24.1, 5.0], [24.2, 5.0], [24.3, 5.0], [24.4, 5.0], [24.5, 5.0], [24.6, 5.0], [24.7, 5.0], [24.8, 5.0], [24.9, 5.0], [25.0, 5.0], [25.1, 5.0], [25.2, 5.0], [25.3, 5.0], [25.4, 5.0], [25.5, 5.0], [25.6, 5.0], [25.7, 5.0], [25.8, 5.0], [25.9, 5.0], [26.0, 5.0], [26.1, 5.0], [26.2, 5.0], [26.3, 5.0], [26.4, 5.0], [26.5, 5.0], [26.6, 5.0], [26.7, 5.0], [26.8, 5.0], [26.9, 5.0], [27.0, 5.0], [27.1, 5.0], [27.2, 6.0], [27.3, 6.0], [27.4, 6.0], [27.5, 6.0], [27.6, 6.0], [27.7, 6.0], [27.8, 6.0], [27.9, 6.0], [28.0, 6.0], [28.1, 6.0], [28.2, 6.0], [28.3, 6.0], [28.4, 6.0], [28.5, 6.0], [28.6, 6.0], [28.7, 6.0], [28.8, 6.0], [28.9, 6.0], [29.0, 6.0], [29.1, 6.0], [29.2, 6.0], [29.3, 6.0], [29.4, 6.0], [29.5, 6.0], [29.6, 6.0], [29.7, 6.0], [29.8, 6.0], [29.9, 6.0], [30.0, 7.0], [30.1, 7.0], [30.2, 7.0], [30.3, 7.0], [30.4, 7.0], [30.5, 7.0], [30.6, 7.0], [30.7, 7.0], [30.8, 7.0], [30.9, 7.0], [31.0, 7.0], [31.1, 7.0], [31.2, 7.0], [31.3, 7.0], [31.4, 7.0], [31.5, 7.0], [31.6, 7.0], [31.7, 7.0], [31.8, 7.0], [31.9, 7.0], [32.0, 7.0], [32.1, 8.0], [32.2, 8.0], [32.3, 8.0], [32.4, 8.0], [32.5, 8.0], [32.6, 8.0], [32.7, 8.0], [32.8, 8.0], [32.9, 8.0], [33.0, 8.0], [33.1, 8.0], [33.2, 8.0], [33.3, 8.0], [33.4, 8.0], [33.5, 8.0], [33.6, 8.0], [33.7, 9.0], [33.8, 9.0], [33.9, 9.0], [34.0, 9.0], [34.1, 9.0], [34.2, 9.0], [34.3, 9.0], [34.4, 9.0], [34.5, 9.0], [34.6, 9.0], [34.7, 9.0], [34.8, 9.0], [34.9, 9.0], [35.0, 10.0], [35.1, 10.0], [35.2, 10.0], [35.3, 10.0], [35.4, 10.0], [35.5, 10.0], [35.6, 10.0], [35.7, 10.0], [35.8, 10.0], [35.9, 10.0], [36.0, 11.0], [36.1, 11.0], [36.2, 11.0], [36.3, 11.0], [36.4, 11.0], [36.5, 11.0], [36.6, 11.0], [36.7, 11.0], [36.8, 11.0], [36.9, 11.0], [37.0, 12.0], [37.1, 12.0], [37.2, 12.0], [37.3, 12.0], [37.4, 12.0], [37.5, 12.0], [37.6, 13.0], [37.7, 13.0], [37.8, 13.0], [37.9, 13.0], [38.0, 13.0], [38.1, 13.0], [38.2, 14.0], [38.3, 14.0], [38.4, 14.0], [38.5, 14.0], [38.6, 15.0], [38.7, 15.0], [38.8, 15.0], [38.9, 15.0], [39.0, 16.0], [39.1, 16.0], [39.2, 17.0], [39.3, 17.0], [39.4, 18.0], [39.5, 18.0], [39.6, 19.0], [39.7, 19.0], [39.8, 20.0], [39.9, 21.0], [40.0, 22.0], [40.1, 23.0], [40.2, 24.0], [40.3, 25.0], [40.4, 27.0], [40.5, 29.0], [40.6, 30.0], [40.7, 32.0], [40.8, 32.0], [40.9, 33.0], [41.0, 33.0], [41.1, 33.0], [41.2, 34.0], [41.3, 34.0], [41.4, 34.0], [41.5, 34.0], [41.6, 35.0], [41.7, 35.0], [41.8, 35.0], [41.9, 35.0], [42.0, 35.0], [42.1, 36.0], [42.2, 36.0], [42.3, 36.0], [42.4, 36.0], [42.5, 36.0], [42.6, 36.0], [42.7, 36.0], [42.8, 37.0], [42.9, 37.0], [43.0, 37.0], [43.1, 37.0], [43.2, 37.0], [43.3, 37.0], [43.4, 37.0], [43.5, 38.0], [43.6, 38.0], [43.7, 38.0], [43.8, 38.0], [43.9, 38.0], [44.0, 38.0], [44.1, 39.0], [44.2, 39.0], [44.3, 39.0], [44.4, 39.0], [44.5, 39.0], [44.6, 39.0], [44.7, 39.0], [44.8, 39.0], [44.9, 39.0], [45.0, 40.0], [45.1, 40.0], [45.2, 40.0], [45.3, 40.0], [45.4, 40.0], [45.5, 40.0], [45.6, 40.0], [45.7, 40.0], [45.8, 40.0], [45.9, 41.0], [46.0, 41.0], [46.1, 41.0], [46.2, 41.0], [46.3, 41.0], [46.4, 41.0], [46.5, 41.0], [46.6, 41.0], [46.7, 42.0], [46.8, 42.0], [46.9, 42.0], [47.0, 42.0], [47.1, 42.0], [47.2, 42.0], [47.3, 42.0], [47.4, 43.0], [47.5, 43.0], [47.6, 43.0], [47.7, 43.0], [47.8, 43.0], [47.9, 43.0], [48.0, 43.0], [48.1, 44.0], [48.2, 44.0], [48.3, 44.0], [48.4, 44.0], [48.5, 44.0], [48.6, 45.0], [48.7, 45.0], [48.8, 45.0], [48.9, 45.0], [49.0, 45.0], [49.1, 46.0], [49.2, 46.0], [49.3, 46.0], [49.4, 47.0], [49.5, 47.0], [49.6, 48.0], [49.7, 48.0], [49.8, 48.0], [49.9, 48.0], [50.0, 49.0], [50.1, 50.0], [50.2, 50.0], [50.3, 51.0], [50.4, 52.0], [50.5, 53.0], [50.6, 54.0], [50.7, 54.0], [50.8, 55.0], [50.9, 56.0], [51.0, 56.0], [51.1, 57.0], [51.2, 58.0], [51.3, 58.0], [51.4, 59.0], [51.5, 60.0], [51.6, 60.0], [51.7, 61.0], [51.8, 62.0], [51.9, 62.0], [52.0, 63.0], [52.1, 63.0], [52.2, 64.0], [52.3, 64.0], [52.4, 65.0], [52.5, 65.0], [52.6, 66.0], [52.7, 66.0], [52.8, 67.0], [52.9, 67.0], [53.0, 67.0], [53.1, 68.0], [53.2, 68.0], [53.3, 68.0], [53.4, 69.0], [53.5, 69.0], [53.6, 69.0], [53.7, 70.0], [53.8, 70.0], [53.9, 71.0], [54.0, 71.0], [54.1, 71.0], [54.2, 72.0], [54.3, 72.0], [54.4, 72.0], [54.5, 73.0], [54.6, 73.0], [54.7, 73.0], [54.8, 74.0], [54.9, 74.0], [55.0, 74.0], [55.1, 75.0], [55.2, 75.0], [55.3, 75.0], [55.4, 76.0], [55.5, 76.0], [55.6, 76.0], [55.7, 77.0], [55.8, 77.0], [55.9, 77.0], [56.0, 78.0], [56.1, 78.0], [56.2, 79.0], [56.3, 79.0], [56.4, 80.0], [56.5, 80.0], [56.6, 81.0], [56.7, 82.0], [56.8, 82.0], [56.9, 83.0], [57.0, 84.0], [57.1, 85.0], [57.2, 85.0], [57.3, 87.0], [57.4, 88.0], [57.5, 89.0], [57.6, 90.0], [57.7, 91.0], [57.8, 91.0], [57.9, 92.0], [58.0, 95.0], [58.1, 97.0], [58.2, 98.0], [58.3, 99.0], [58.4, 100.0], [58.5, 101.0], [58.6, 102.0], [58.7, 103.0], [58.8, 104.0], [58.9, 104.0], [59.0, 106.0], [59.1, 107.0], [59.2, 107.0], [59.3, 108.0], [59.4, 109.0], [59.5, 110.0], [59.6, 111.0], [59.7, 112.0], [59.8, 113.0], [59.9, 114.0], [60.0, 115.0], [60.1, 116.0], [60.2, 117.0], [60.3, 119.0], [60.4, 120.0], [60.5, 121.0], [60.6, 123.0], [60.7, 124.0], [60.8, 127.0], [60.9, 128.0], [61.0, 129.0], [61.1, 130.0], [61.2, 132.0], [61.3, 133.0], [61.4, 134.0], [61.5, 135.0], [61.6, 137.0], [61.7, 139.0], [61.8, 142.0], [61.9, 143.0], [62.0, 144.0], [62.1, 145.0], [62.2, 147.0], [62.3, 148.0], [62.4, 150.0], [62.5, 152.0], [62.6, 154.0], [62.7, 155.0], [62.8, 156.0], [62.9, 158.0], [63.0, 160.0], [63.1, 162.0], [63.2, 164.0], [63.3, 165.0], [63.4, 165.0], [63.5, 167.0], [63.6, 168.0], [63.7, 170.0], [63.8, 171.0], [63.9, 172.0], [64.0, 174.0], [64.1, 175.0], [64.2, 176.0], [64.3, 177.0], [64.4, 178.0], [64.5, 179.0], [64.6, 180.0], [64.7, 181.0], [64.8, 182.0], [64.9, 183.0], [65.0, 184.0], [65.1, 185.0], [65.2, 186.0], [65.3, 188.0], [65.4, 189.0], [65.5, 190.0], [65.6, 192.0], [65.7, 193.0], [65.8, 194.0], [65.9, 195.0], [66.0, 197.0], [66.1, 198.0], [66.2, 200.0], [66.3, 200.0], [66.4, 202.0], [66.5, 203.0], [66.6, 204.0], [66.7, 205.0], [66.8, 207.0], [66.9, 208.0], [67.0, 209.0], [67.1, 211.0], [67.2, 212.0], [67.3, 214.0], [67.4, 215.0], [67.5, 216.0], [67.6, 218.0], [67.7, 219.0], [67.8, 221.0], [67.9, 221.0], [68.0, 224.0], [68.1, 227.0], [68.2, 229.0], [68.3, 231.0], [68.4, 233.0], [68.5, 236.0], [68.6, 240.0], [68.7, 242.0], [68.8, 244.0], [68.9, 246.0], [69.0, 248.0], [69.1, 250.0], [69.2, 252.0], [69.3, 253.0], [69.4, 256.0], [69.5, 257.0], [69.6, 259.0], [69.7, 261.0], [69.8, 262.0], [69.9, 264.0], [70.0, 265.0], [70.1, 267.0], [70.2, 268.0], [70.3, 270.0], [70.4, 272.0], [70.5, 273.0], [70.6, 275.0], [70.7, 278.0], [70.8, 280.0], [70.9, 282.0], [71.0, 284.0], [71.1, 286.0], [71.2, 288.0], [71.3, 290.0], [71.4, 291.0], [71.5, 295.0], [71.6, 296.0], [71.7, 297.0], [71.8, 299.0], [71.9, 301.0], [72.0, 304.0], [72.1, 306.0], [72.2, 308.0], [72.3, 310.0], [72.4, 313.0], [72.5, 315.0], [72.6, 318.0], [72.7, 322.0], [72.8, 324.0], [72.9, 327.0], [73.0, 330.0], [73.1, 333.0], [73.2, 335.0], [73.3, 339.0], [73.4, 341.0], [73.5, 347.0], [73.6, 349.0], [73.7, 353.0], [73.8, 355.0], [73.9, 358.0], [74.0, 359.0], [74.1, 363.0], [74.2, 366.0], [74.3, 370.0], [74.4, 374.0], [74.5, 376.0], [74.6, 379.0], [74.7, 383.0], [74.8, 386.0], [74.9, 388.0], [75.0, 392.0], [75.1, 397.0], [75.2, 399.0], [75.3, 402.0], [75.4, 403.0], [75.5, 408.0], [75.6, 411.0], [75.7, 415.0], [75.8, 420.0], [75.9, 422.0], [76.0, 427.0], [76.1, 430.0], [76.2, 433.0], [76.3, 435.0], [76.4, 439.0], [76.5, 443.0], [76.6, 447.0], [76.7, 449.0], [76.8, 454.0], [76.9, 458.0], [77.0, 461.0], [77.1, 464.0], [77.2, 468.0], [77.3, 472.0], [77.4, 474.0], [77.5, 476.0], [77.6, 479.0], [77.7, 482.0], [77.8, 485.0], [77.9, 487.0], [78.0, 490.0], [78.1, 492.0], [78.2, 496.0], [78.3, 501.0], [78.4, 503.0], [78.5, 505.0], [78.6, 508.0], [78.7, 514.0], [78.8, 516.0], [78.9, 519.0], [79.0, 521.0], [79.1, 526.0], [79.2, 530.0], [79.3, 533.0], [79.4, 539.0], [79.5, 542.0], [79.6, 547.0], [79.7, 550.0], [79.8, 552.0], [79.9, 556.0], [80.0, 558.0], [80.1, 561.0], [80.2, 565.0], [80.3, 573.0], [80.4, 575.0], [80.5, 582.0], [80.6, 587.0], [80.7, 592.0], [80.8, 595.0], [80.9, 597.0], [81.0, 601.0], [81.1, 604.0], [81.2, 608.0], [81.3, 611.0], [81.4, 616.0], [81.5, 620.0], [81.6, 624.0], [81.7, 627.0], [81.8, 630.0], [81.9, 633.0], [82.0, 636.0], [82.1, 639.0], [82.2, 643.0], [82.3, 646.0], [82.4, 650.0], [82.5, 654.0], [82.6, 658.0], [82.7, 663.0], [82.8, 664.0], [82.9, 667.0], [83.0, 673.0], [83.1, 676.0], [83.2, 680.0], [83.3, 684.0], [83.4, 688.0], [83.5, 691.0], [83.6, 697.0], [83.7, 703.0], [83.8, 707.0], [83.9, 710.0], [84.0, 715.0], [84.1, 717.0], [84.2, 722.0], [84.3, 727.0], [84.4, 731.0], [84.5, 736.0], [84.6, 738.0], [84.7, 742.0], [84.8, 745.0], [84.9, 749.0], [85.0, 755.0], [85.1, 762.0], [85.2, 766.0], [85.3, 768.0], [85.4, 771.0], [85.5, 775.0], [85.6, 780.0], [85.7, 786.0], [85.8, 791.0], [85.9, 796.0], [86.0, 801.0], [86.1, 808.0], [86.2, 815.0], [86.3, 820.0], [86.4, 829.0], [86.5, 833.0], [86.6, 838.0], [86.7, 843.0], [86.8, 859.0], [86.9, 866.0], [87.0, 874.0], [87.1, 880.0], [87.2, 887.0], [87.3, 891.0], [87.4, 900.0], [87.5, 911.0], [87.6, 916.0], [87.7, 921.0], [87.8, 930.0], [87.9, 939.0], [88.0, 941.0], [88.1, 947.0], [88.2, 952.0], [88.3, 958.0], [88.4, 965.0], [88.5, 970.0], [88.6, 977.0], [88.7, 985.0], [88.8, 988.0], [88.9, 993.0], [89.0, 1000.0], [89.1, 1009.0], [89.2, 1014.0], [89.3, 1017.0], [89.4, 1022.0], [89.5, 1025.0], [89.6, 1031.0], [89.7, 1037.0], [89.8, 1042.0], [89.9, 1045.0], [90.0, 1049.0], [90.1, 1059.0], [90.2, 1065.0], [90.3, 1074.0], [90.4, 1081.0], [90.5, 1087.0], [90.6, 1095.0], [90.7, 1099.0], [90.8, 1110.0], [90.9, 1123.0], [91.0, 1131.0], [91.1, 1144.0], [91.2, 1150.0], [91.3, 1162.0], [91.4, 1171.0], [91.5, 1178.0], [91.6, 1186.0], [91.7, 1193.0], [91.8, 1201.0], [91.9, 1209.0], [92.0, 1217.0], [92.1, 1225.0], [92.2, 1234.0], [92.3, 1245.0], [92.4, 1254.0], [92.5, 1272.0], [92.6, 1280.0], [92.7, 1287.0], [92.8, 1300.0], [92.9, 1310.0], [93.0, 1318.0], [93.1, 1328.0], [93.2, 1338.0], [93.3, 1349.0], [93.4, 1355.0], [93.5, 1363.0], [93.6, 1376.0], [93.7, 1382.0], [93.8, 1387.0], [93.9, 1393.0], [94.0, 1401.0], [94.1, 1413.0], [94.2, 1422.0], [94.3, 1432.0], [94.4, 1445.0], [94.5, 1450.0], [94.6, 1459.0], [94.7, 1468.0], [94.8, 1477.0], [94.9, 1495.0], [95.0, 1516.0], [95.1, 1532.0], [95.2, 1548.0], [95.3, 1572.0], [95.4, 1578.0], [95.5, 1599.0], [95.6, 1614.0], [95.7, 1628.0], [95.8, 1640.0], [95.9, 1657.0], [96.0, 1690.0], [96.1, 1716.0], [96.2, 1737.0], [96.3, 1754.0], [96.4, 1775.0], [96.5, 1798.0], [96.6, 1811.0], [96.7, 1835.0], [96.8, 1859.0], [96.9, 1883.0], [97.0, 1897.0], [97.1, 1916.0], [97.2, 1934.0], [97.3, 1944.0], [97.4, 1966.0], [97.5, 1983.0], [97.6, 2005.0], [97.7, 2030.0], [97.8, 2069.0], [97.9, 2105.0], [98.0, 2149.0], [98.1, 2202.0], [98.2, 2239.0], [98.3, 2293.0], [98.4, 2324.0], [98.5, 2385.0], [98.6, 2409.0], [98.7, 2495.0], [98.8, 2577.0], [98.9, 2693.0], [99.0, 2761.0], [99.1, 2872.0], [99.2, 2935.0], [99.3, 2997.0], [99.4, 3111.0], [99.5, 3361.0], [99.6, 3661.0], [99.7, 3895.0], [99.8, 4052.0], [99.9, 4493.0], [100.0, 5478.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 2.0, "minX": 0.0, "maxY": 5795.0, "series": [{"data": [[0.0, 5795.0], [600.0, 266.0], [700.0, 230.0], [800.0, 144.0], [900.0, 159.0], [1000.0, 171.0], [1100.0, 105.0], [1200.0, 101.0], [1300.0, 119.0], [1400.0, 92.0], [1500.0, 61.0], [100.0, 777.0], [1600.0, 52.0], [1700.0, 45.0], [1800.0, 53.0], [1900.0, 53.0], [2000.0, 31.0], [2100.0, 21.0], [2200.0, 24.0], [2300.0, 22.0], [2400.0, 15.0], [2500.0, 12.0], [2600.0, 8.0], [2700.0, 14.0], [2800.0, 11.0], [2900.0, 15.0], [3000.0, 7.0], [3100.0, 4.0], [200.0, 561.0], [3300.0, 4.0], [3200.0, 6.0], [3400.0, 3.0], [3500.0, 3.0], [3700.0, 4.0], [3600.0, 4.0], [3800.0, 4.0], [3900.0, 5.0], [4000.0, 6.0], [4100.0, 3.0], [4300.0, 2.0], [4600.0, 2.0], [4400.0, 4.0], [300.0, 339.0], [4700.0, 3.0], [5000.0, 2.0], [5400.0, 2.0], [400.0, 301.0], [500.0, 267.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 5400.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 471.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 4660.0, "series": [{"data": [[0.0, 3392.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1409.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 471.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 4660.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 18.908423493044815, "minX": 1.60183434E12, "maxY": 20.0, "series": [{"data": [[1.60183434E12, 18.908423493044815], [1.60183452E12, 19.813241106719364], [1.6018344E12, 20.0], [1.60183446E12, 20.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60183452E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 36.22857142857143, "minX": 1.0, "maxY": 5478.0, "series": [{"data": [[8.0, 152.8], [9.0, 168.68], [10.0, 111.78378378378379], [11.0, 97.21052631578948], [12.0, 88.92307692307692], [3.0, 4511.5], [13.0, 75.37209302325581], [14.0, 39.84210526315789], [15.0, 47.65625], [16.0, 59.224999999999994], [4.0, 5453.0], [1.0, 5478.0], [17.0, 36.22857142857143], [18.0, 74.33333333333333], [19.0, 78.94444444444446], [20.0, 335.1286648386417], [5.0, 5025.0], [6.0, 4034.0], [7.0, 321.8666666666667]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[19.696536447845315, 326.9296214256946]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 20.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 11593.1, "minX": 1.60183434E12, "maxY": 1929769.75, "series": [{"data": [[1.60183434E12, 265140.6666666667], [1.60183452E12, 563120.6333333333], [1.6018344E12, 1569112.3833333333], [1.60183446E12, 1929769.75]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60183434E12, 28066.0], [1.60183452E12, 11593.1], [1.6018344E12, 29055.266666666666], [1.60183446E12, 44718.73333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60183452E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 161.8531684698608, "minX": 1.60183434E12, "maxY": 495.11316872427903, "series": [{"data": [[1.60183434E12, 161.8531684698608], [1.60183452E12, 426.57608695652186], [1.6018344E12, 495.11316872427903], [1.60183446E12, 305.83521271143053]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60183452E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 159.81916537867087, "minX": 1.60183434E12, "maxY": 487.5876543209894, "series": [{"data": [[1.60183434E12, 159.81916537867087], [1.60183452E12, 420.2845849802372], [1.6018344E12, 487.5876543209894], [1.60183446E12, 299.9941055868787]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60183452E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.011532547411583828, "minX": 1.60183434E12, "maxY": 0.16267387944358563, "series": [{"data": [[1.60183434E12, 0.16267387944358563], [1.60183452E12, 0.017786561264822146], [1.6018344E12, 0.01604938271604945], [1.60183446E12, 0.011532547411583828]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60183452E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 29.0, "minX": 1.60183434E12, "maxY": 5478.0, "series": [{"data": [[1.60183434E12, 3383.0], [1.60183452E12, 5478.0], [1.6018344E12, 4778.0], [1.60183446E12, 4455.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60183434E12, 44.631999797821045], [1.60183452E12, 32.0], [1.6018344E12, 34.0], [1.60183446E12, 33.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60183434E12, 46.18560024261475], [1.60183452E12, 32.06870005846024], [1.6018344E12, 34.0], [1.60183446E12, 33.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60183434E12, 45.16799969673156], [1.60183452E12, 32.0], [1.6018344E12, 34.0], [1.60183446E12, 33.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60183434E12, 29.0], [1.60183452E12, 32.0], [1.6018344E12, 32.0], [1.60183446E12, 29.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60183434E12, 659.0], [1.60183452E12, 247.5], [1.6018344E12, 349.0], [1.60183446E12, 190.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60183452E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 2.0, "minX": 1.0, "maxY": 5478.0, "series": [{"data": [[662.0, 247.0], [650.0, 606.5], [673.0, 679.0], [3.0, 3997.0], [5.0, 3994.0], [6.0, 1421.5], [7.0, 1338.0], [8.0, 1191.5], [9.0, 1521.0], [10.0, 1245.5], [11.0, 1152.5], [12.0, 1090.5], [13.0, 840.0], [14.0, 906.0], [15.0, 1040.0], [16.0, 1417.0], [17.0, 1296.0], [18.0, 647.0], [19.0, 1081.0], [20.0, 1139.0], [21.0, 670.5], [23.0, 483.0], [24.0, 1036.0], [25.0, 356.0], [26.0, 228.0], [27.0, 654.0], [28.0, 642.0], [29.0, 803.0], [30.0, 499.0], [31.0, 484.5], [32.0, 374.5], [33.0, 1047.0], [34.0, 422.0], [35.0, 206.0], [37.0, 79.5], [36.0, 70.5], [38.0, 391.0], [41.0, 462.0], [40.0, 99.0], [42.0, 46.0], [43.0, 427.0], [45.0, 202.0], [44.0, 308.0], [46.0, 618.5], [47.0, 389.5], [48.0, 264.5], [49.0, 126.0], [50.0, 288.0], [51.0, 114.0], [52.0, 1999.5], [55.0, 419.0], [57.0, 198.0], [56.0, 45.0], [59.0, 194.0], [58.0, 275.5], [60.0, 352.0], [61.0, 47.0], [62.0, 390.0], [63.0, 1023.5], [71.0, 53.0], [69.0, 1232.5], [73.0, 84.0], [76.0, 222.0], [77.0, 88.0], [83.0, 1748.5], [80.0, 84.0], [81.0, 54.0], [84.0, 549.0], [87.0, 88.0], [89.0, 523.0], [90.0, 1354.5], [96.0, 113.5], [100.0, 73.0], [104.0, 273.0], [109.0, 86.0], [111.0, 180.5], [119.0, 97.5], [120.0, 183.0], [126.0, 165.0], [141.0, 108.5], [144.0, 159.0], [147.0, 255.0], [148.0, 77.0], [157.0, 214.0], [155.0, 73.5], [154.0, 150.0], [162.0, 147.0], [167.0, 228.0], [174.0, 176.0], [176.0, 137.0], [1.0, 5478.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[662.0, 9.0], [650.0, 3.0], [673.0, 8.0], [5.0, 3990.0], [9.0, 471.5], [11.0, 1153.0], [13.0, 951.0], [14.0, 889.0], [16.0, 1435.0], [17.0, 3.0], [18.0, 3.0], [19.0, 1388.0], [20.0, 854.5], [21.0, 915.0], [23.0, 731.0], [24.0, 616.0], [27.0, 373.0], [28.0, 270.5], [29.0, 341.0], [30.0, 136.5], [31.0, 937.0], [33.0, 2.0], [35.0, 4.0], [37.0, 3.0], [36.0, 4.5], [38.0, 339.0], [40.0, 2.0], [43.0, 249.0], [45.0, 259.0], [44.0, 1377.0], [46.0, 7.5], [47.0, 16.5], [48.0, 788.0], [49.0, 7.5], [50.0, 3.0], [51.0, 3.0], [52.0, 4.0], [55.0, 3.0], [57.0, 784.0], [56.0, 5.0], [59.0, 213.0], [58.0, 2035.5], [60.0, 3.0], [61.0, 3.0], [62.0, 3.0], [63.0, 4.0], [71.0, 5.0], [69.0, 3.0], [73.0, 3.0], [76.0, 4.5], [77.0, 4.0], [83.0, 4.0], [80.0, 39.0], [81.0, 3.0], [84.0, 4.0], [87.0, 4.0], [89.0, 4.0], [90.0, 3.0], [96.0, 3.0], [100.0, 4.0], [104.0, 4.0], [109.0, 5.0], [111.0, 3.0], [119.0, 5.0], [120.0, 3.0], [126.0, 4.0], [141.0, 126.0], [144.0, 73.0], [147.0, 3.0], [148.0, 3.0], [157.0, 4.0], [155.0, 5.0], [154.0, 5.0], [162.0, 4.0], [167.0, 3.0], [174.0, 3.5], [176.0, 5.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 673.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 2.0, "minX": 1.0, "maxY": 5475.0, "series": [{"data": [[662.0, 239.0], [650.0, 442.0], [673.0, 679.0], [3.0, 3989.0], [5.0, 3924.5], [6.0, 1420.0], [7.0, 1336.0], [8.0, 1164.5], [9.0, 1503.0], [10.0, 1231.0], [11.0, 1129.5], [12.0, 1066.0], [13.0, 742.0], [14.0, 892.0], [15.0, 1037.0], [16.0, 1377.0], [17.0, 1244.0], [18.0, 625.0], [19.0, 1060.0], [20.0, 1130.0], [21.0, 642.5], [23.0, 457.5], [24.0, 1036.0], [25.0, 297.0], [26.0, 222.5], [27.0, 651.0], [28.0, 635.5], [29.0, 777.0], [30.0, 479.5], [31.0, 443.5], [32.0, 374.5], [33.0, 1007.0], [34.0, 410.0], [35.0, 206.0], [37.0, 73.5], [36.0, 70.5], [38.0, 391.0], [41.0, 450.5], [40.0, 95.0], [42.0, 46.0], [43.0, 372.0], [45.0, 202.0], [44.0, 304.0], [46.0, 618.0], [47.0, 385.0], [48.0, 264.5], [49.0, 126.0], [50.0, 273.0], [51.0, 102.5], [52.0, 1999.5], [55.0, 418.0], [57.0, 198.0], [56.0, 45.0], [59.0, 194.0], [58.0, 263.5], [60.0, 345.5], [61.0, 47.0], [62.0, 389.5], [63.0, 946.5], [71.0, 53.0], [69.0, 1186.5], [73.0, 84.0], [76.0, 222.0], [77.0, 86.0], [83.0, 1747.0], [80.0, 84.0], [81.0, 54.0], [84.0, 542.0], [87.0, 88.0], [89.0, 515.0], [90.0, 1319.0], [96.0, 112.5], [100.0, 73.0], [104.0, 273.0], [109.0, 86.0], [111.0, 167.5], [119.0, 97.5], [120.0, 175.5], [126.0, 165.0], [141.0, 106.5], [144.0, 146.0], [147.0, 255.0], [148.0, 77.0], [157.0, 214.0], [155.0, 73.5], [154.0, 144.0], [162.0, 145.0], [167.0, 228.0], [174.0, 175.5], [176.0, 136.0], [1.0, 5475.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[662.0, 8.0], [650.0, 3.0], [673.0, 8.0], [5.0, 3990.0], [9.0, 471.5], [11.0, 1153.0], [13.0, 951.0], [14.0, 889.0], [16.0, 1435.0], [17.0, 3.0], [18.0, 3.0], [19.0, 1387.0], [20.0, 853.5], [21.0, 915.0], [23.0, 730.0], [24.0, 615.0], [27.0, 373.0], [28.0, 270.5], [29.0, 341.0], [30.0, 136.5], [31.0, 937.0], [33.0, 2.0], [35.0, 4.0], [37.0, 3.0], [36.0, 4.5], [38.0, 339.0], [40.0, 2.0], [43.0, 249.0], [45.0, 258.0], [44.0, 1377.0], [46.0, 7.5], [47.0, 16.5], [48.0, 788.0], [49.0, 7.0], [50.0, 3.0], [51.0, 3.0], [52.0, 4.0], [55.0, 3.0], [57.0, 784.0], [56.0, 5.0], [59.0, 213.0], [58.0, 2035.5], [60.0, 3.0], [61.0, 3.0], [62.0, 3.0], [63.0, 4.0], [71.0, 4.0], [69.0, 2.0], [73.0, 3.0], [76.0, 4.5], [77.0, 3.0], [83.0, 4.0], [80.0, 38.0], [81.0, 3.0], [84.0, 4.0], [87.0, 4.0], [89.0, 3.0], [90.0, 3.0], [96.0, 3.0], [100.0, 4.0], [104.0, 4.0], [109.0, 5.0], [111.0, 3.0], [119.0, 5.0], [120.0, 3.0], [126.0, 4.0], [141.0, 126.0], [144.0, 72.0], [147.0, 3.0], [148.0, 3.0], [157.0, 4.0], [155.0, 5.0], [154.0, 5.0], [162.0, 4.0], [167.0, 3.0], [174.0, 3.0], [176.0, 5.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 673.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 16.533333333333335, "minX": 1.60183434E12, "maxY": 65.03333333333333, "series": [{"data": [[1.60183434E12, 43.46666666666667], [1.60183452E12, 16.533333333333335], [1.6018344E12, 40.5], [1.60183446E12, 65.03333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60183452E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 4.1, "minX": 1.60183434E12, "maxY": 44.666666666666664, "series": [{"data": [[1.60183434E12, 7.05], [1.60183452E12, 10.2], [1.6018344E12, 25.95], [1.60183446E12, 44.666666666666664]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.60183434E12, 4.1], [1.60183452E12, 6.666666666666667], [1.6018344E12, 14.55], [1.60183446E12, 20.366666666666667]], "isOverall": false, "label": "400", "isController": false}, {"data": [[1.60183434E12, 31.983333333333334]], "isOverall": false, "label": "404", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60183452E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 6.666666666666667, "minX": 1.60183434E12, "maxY": 44.666666666666664, "series": [{"data": [[1.60183434E12, 36.083333333333336], [1.60183452E12, 6.666666666666667], [1.6018344E12, 14.55], [1.60183446E12, 20.366666666666667]], "isOverall": false, "label": "HTTP Request-failure", "isController": false}, {"data": [[1.60183434E12, 7.05], [1.60183452E12, 10.2], [1.6018344E12, 25.95], [1.60183446E12, 44.666666666666664]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60183452E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 6.666666666666667, "minX": 1.60183434E12, "maxY": 44.666666666666664, "series": [{"data": [[1.60183434E12, 7.05], [1.60183452E12, 10.2], [1.6018344E12, 25.95], [1.60183446E12, 44.666666666666664]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.60183434E12, 36.083333333333336], [1.60183452E12, 6.666666666666667], [1.6018344E12, 14.55], [1.60183446E12, 20.366666666666667]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60183452E12, "title": "Total Transactions Per Second"}},
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

