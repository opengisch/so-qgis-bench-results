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
        data: {"result": {"minY": 36.0, "minX": 0.0, "maxY": 2408.0, "series": [{"data": [[0.0, 36.0], [0.1, 37.0], [0.2, 38.0], [0.3, 38.0], [0.4, 39.0], [0.5, 39.0], [0.6, 39.0], [0.7, 39.0], [0.8, 40.0], [0.9, 40.0], [1.0, 40.0], [1.1, 40.0], [1.2, 40.0], [1.3, 41.0], [1.4, 41.0], [1.5, 41.0], [1.6, 41.0], [1.7, 41.0], [1.8, 41.0], [1.9, 41.0], [2.0, 41.0], [2.1, 42.0], [2.2, 42.0], [2.3, 42.0], [2.4, 42.0], [2.5, 42.0], [2.6, 42.0], [2.7, 42.0], [2.8, 42.0], [2.9, 42.0], [3.0, 42.0], [3.1, 42.0], [3.2, 42.0], [3.3, 42.0], [3.4, 43.0], [3.5, 43.0], [3.6, 43.0], [3.7, 43.0], [3.8, 43.0], [3.9, 43.0], [4.0, 43.0], [4.1, 43.0], [4.2, 43.0], [4.3, 43.0], [4.4, 43.0], [4.5, 44.0], [4.6, 44.0], [4.7, 44.0], [4.8, 44.0], [4.9, 44.0], [5.0, 44.0], [5.1, 44.0], [5.2, 44.0], [5.3, 44.0], [5.4, 44.0], [5.5, 44.0], [5.6, 44.0], [5.7, 44.0], [5.8, 45.0], [5.9, 45.0], [6.0, 45.0], [6.1, 45.0], [6.2, 45.0], [6.3, 45.0], [6.4, 45.0], [6.5, 45.0], [6.6, 45.0], [6.7, 45.0], [6.8, 45.0], [6.9, 45.0], [7.0, 45.0], [7.1, 45.0], [7.2, 46.0], [7.3, 46.0], [7.4, 46.0], [7.5, 46.0], [7.6, 46.0], [7.7, 46.0], [7.8, 46.0], [7.9, 46.0], [8.0, 46.0], [8.1, 46.0], [8.2, 46.0], [8.3, 46.0], [8.4, 46.0], [8.5, 46.0], [8.6, 46.0], [8.7, 47.0], [8.8, 47.0], [8.9, 47.0], [9.0, 47.0], [9.1, 47.0], [9.2, 47.0], [9.3, 47.0], [9.4, 47.0], [9.5, 47.0], [9.6, 47.0], [9.7, 47.0], [9.8, 47.0], [9.9, 47.0], [10.0, 47.0], [10.1, 47.0], [10.2, 47.0], [10.3, 48.0], [10.4, 48.0], [10.5, 48.0], [10.6, 48.0], [10.7, 48.0], [10.8, 48.0], [10.9, 48.0], [11.0, 48.0], [11.1, 48.0], [11.2, 48.0], [11.3, 48.0], [11.4, 48.0], [11.5, 48.0], [11.6, 48.0], [11.7, 48.0], [11.8, 48.0], [11.9, 49.0], [12.0, 49.0], [12.1, 49.0], [12.2, 49.0], [12.3, 49.0], [12.4, 49.0], [12.5, 49.0], [12.6, 49.0], [12.7, 49.0], [12.8, 49.0], [12.9, 49.0], [13.0, 49.0], [13.1, 49.0], [13.2, 49.0], [13.3, 49.0], [13.4, 50.0], [13.5, 50.0], [13.6, 50.0], [13.7, 50.0], [13.8, 50.0], [13.9, 50.0], [14.0, 50.0], [14.1, 50.0], [14.2, 50.0], [14.3, 50.0], [14.4, 50.0], [14.5, 50.0], [14.6, 50.0], [14.7, 51.0], [14.8, 51.0], [14.9, 51.0], [15.0, 51.0], [15.1, 51.0], [15.2, 51.0], [15.3, 51.0], [15.4, 51.0], [15.5, 51.0], [15.6, 51.0], [15.7, 51.0], [15.8, 51.0], [15.9, 51.0], [16.0, 52.0], [16.1, 52.0], [16.2, 52.0], [16.3, 52.0], [16.4, 52.0], [16.5, 52.0], [16.6, 52.0], [16.7, 52.0], [16.8, 52.0], [16.9, 52.0], [17.0, 52.0], [17.1, 52.0], [17.2, 52.0], [17.3, 53.0], [17.4, 53.0], [17.5, 53.0], [17.6, 53.0], [17.7, 53.0], [17.8, 53.0], [17.9, 53.0], [18.0, 53.0], [18.1, 53.0], [18.2, 53.0], [18.3, 53.0], [18.4, 53.0], [18.5, 53.0], [18.6, 53.0], [18.7, 54.0], [18.8, 54.0], [18.9, 54.0], [19.0, 54.0], [19.1, 54.0], [19.2, 54.0], [19.3, 54.0], [19.4, 54.0], [19.5, 54.0], [19.6, 54.0], [19.7, 54.0], [19.8, 54.0], [19.9, 54.0], [20.0, 55.0], [20.1, 55.0], [20.2, 55.0], [20.3, 55.0], [20.4, 55.0], [20.5, 55.0], [20.6, 55.0], [20.7, 55.0], [20.8, 55.0], [20.9, 55.0], [21.0, 55.0], [21.1, 55.0], [21.2, 56.0], [21.3, 56.0], [21.4, 56.0], [21.5, 56.0], [21.6, 56.0], [21.7, 56.0], [21.8, 56.0], [21.9, 56.0], [22.0, 56.0], [22.1, 56.0], [22.2, 56.0], [22.3, 57.0], [22.4, 57.0], [22.5, 57.0], [22.6, 57.0], [22.7, 57.0], [22.8, 57.0], [22.9, 57.0], [23.0, 57.0], [23.1, 57.0], [23.2, 57.0], [23.3, 57.0], [23.4, 57.0], [23.5, 58.0], [23.6, 58.0], [23.7, 58.0], [23.8, 58.0], [23.9, 58.0], [24.0, 58.0], [24.1, 58.0], [24.2, 58.0], [24.3, 58.0], [24.4, 59.0], [24.5, 59.0], [24.6, 59.0], [24.7, 59.0], [24.8, 59.0], [24.9, 59.0], [25.0, 59.0], [25.1, 59.0], [25.2, 59.0], [25.3, 59.0], [25.4, 60.0], [25.5, 60.0], [25.6, 60.0], [25.7, 60.0], [25.8, 60.0], [25.9, 60.0], [26.0, 60.0], [26.1, 60.0], [26.2, 60.0], [26.3, 60.0], [26.4, 60.0], [26.5, 60.0], [26.6, 61.0], [26.7, 61.0], [26.8, 61.0], [26.9, 61.0], [27.0, 61.0], [27.1, 61.0], [27.2, 61.0], [27.3, 61.0], [27.4, 61.0], [27.5, 61.0], [27.6, 62.0], [27.7, 62.0], [27.8, 62.0], [27.9, 62.0], [28.0, 62.0], [28.1, 62.0], [28.2, 62.0], [28.3, 62.0], [28.4, 62.0], [28.5, 62.0], [28.6, 63.0], [28.7, 63.0], [28.8, 63.0], [28.9, 63.0], [29.0, 63.0], [29.1, 63.0], [29.2, 63.0], [29.3, 63.0], [29.4, 63.0], [29.5, 64.0], [29.6, 64.0], [29.7, 64.0], [29.8, 64.0], [29.9, 64.0], [30.0, 64.0], [30.1, 64.0], [30.2, 64.0], [30.3, 64.0], [30.4, 64.0], [30.5, 65.0], [30.6, 65.0], [30.7, 65.0], [30.8, 65.0], [30.9, 65.0], [31.0, 65.0], [31.1, 66.0], [31.2, 66.0], [31.3, 66.0], [31.4, 66.0], [31.5, 66.0], [31.6, 66.0], [31.7, 66.0], [31.8, 66.0], [31.9, 67.0], [32.0, 67.0], [32.1, 67.0], [32.2, 67.0], [32.3, 67.0], [32.4, 67.0], [32.5, 67.0], [32.6, 67.0], [32.7, 68.0], [32.8, 68.0], [32.9, 68.0], [33.0, 68.0], [33.1, 68.0], [33.2, 68.0], [33.3, 68.0], [33.4, 68.0], [33.5, 68.0], [33.6, 69.0], [33.7, 69.0], [33.8, 69.0], [33.9, 69.0], [34.0, 69.0], [34.1, 69.0], [34.2, 69.0], [34.3, 70.0], [34.4, 70.0], [34.5, 70.0], [34.6, 70.0], [34.7, 70.0], [34.8, 70.0], [34.9, 70.0], [35.0, 71.0], [35.1, 71.0], [35.2, 71.0], [35.3, 71.0], [35.4, 71.0], [35.5, 71.0], [35.6, 72.0], [35.7, 72.0], [35.8, 72.0], [35.9, 72.0], [36.0, 72.0], [36.1, 72.0], [36.2, 72.0], [36.3, 73.0], [36.4, 73.0], [36.5, 73.0], [36.6, 73.0], [36.7, 73.0], [36.8, 73.0], [36.9, 74.0], [37.0, 74.0], [37.1, 74.0], [37.2, 74.0], [37.3, 74.0], [37.4, 74.0], [37.5, 74.0], [37.6, 75.0], [37.7, 75.0], [37.8, 75.0], [37.9, 75.0], [38.0, 75.0], [38.1, 75.0], [38.2, 76.0], [38.3, 76.0], [38.4, 76.0], [38.5, 76.0], [38.6, 76.0], [38.7, 77.0], [38.8, 77.0], [38.9, 77.0], [39.0, 77.0], [39.1, 77.0], [39.2, 77.0], [39.3, 77.0], [39.4, 78.0], [39.5, 78.0], [39.6, 78.0], [39.7, 78.0], [39.8, 78.0], [39.9, 79.0], [40.0, 79.0], [40.1, 79.0], [40.2, 79.0], [40.3, 79.0], [40.4, 79.0], [40.5, 80.0], [40.6, 80.0], [40.7, 80.0], [40.8, 80.0], [40.9, 80.0], [41.0, 80.0], [41.1, 81.0], [41.2, 81.0], [41.3, 81.0], [41.4, 81.0], [41.5, 81.0], [41.6, 82.0], [41.7, 82.0], [41.8, 82.0], [41.9, 82.0], [42.0, 82.0], [42.1, 83.0], [42.2, 83.0], [42.3, 83.0], [42.4, 83.0], [42.5, 83.0], [42.6, 83.0], [42.7, 84.0], [42.8, 84.0], [42.9, 84.0], [43.0, 85.0], [43.1, 85.0], [43.2, 85.0], [43.3, 85.0], [43.4, 86.0], [43.5, 86.0], [43.6, 86.0], [43.7, 86.0], [43.8, 86.0], [43.9, 87.0], [44.0, 87.0], [44.1, 87.0], [44.2, 87.0], [44.3, 87.0], [44.4, 87.0], [44.5, 88.0], [44.6, 88.0], [44.7, 88.0], [44.8, 88.0], [44.9, 89.0], [45.0, 89.0], [45.1, 89.0], [45.2, 89.0], [45.3, 89.0], [45.4, 90.0], [45.5, 90.0], [45.6, 90.0], [45.7, 90.0], [45.8, 91.0], [45.9, 91.0], [46.0, 91.0], [46.1, 91.0], [46.2, 91.0], [46.3, 91.0], [46.4, 91.0], [46.5, 92.0], [46.6, 92.0], [46.7, 93.0], [46.8, 93.0], [46.9, 93.0], [47.0, 93.0], [47.1, 93.0], [47.2, 93.0], [47.3, 94.0], [47.4, 94.0], [47.5, 94.0], [47.6, 95.0], [47.7, 95.0], [47.8, 95.0], [47.9, 95.0], [48.0, 95.0], [48.1, 96.0], [48.2, 96.0], [48.3, 96.0], [48.4, 96.0], [48.5, 97.0], [48.6, 97.0], [48.7, 98.0], [48.8, 98.0], [48.9, 99.0], [49.0, 99.0], [49.1, 99.0], [49.2, 100.0], [49.3, 100.0], [49.4, 101.0], [49.5, 101.0], [49.6, 101.0], [49.7, 101.0], [49.8, 102.0], [49.9, 102.0], [50.0, 102.0], [50.1, 103.0], [50.2, 103.0], [50.3, 103.0], [50.4, 104.0], [50.5, 104.0], [50.6, 105.0], [50.7, 105.0], [50.8, 105.0], [50.9, 106.0], [51.0, 106.0], [51.1, 107.0], [51.2, 108.0], [51.3, 108.0], [51.4, 109.0], [51.5, 109.0], [51.6, 109.0], [51.7, 110.0], [51.8, 110.0], [51.9, 110.0], [52.0, 111.0], [52.1, 111.0], [52.2, 112.0], [52.3, 112.0], [52.4, 113.0], [52.5, 113.0], [52.6, 113.0], [52.7, 114.0], [52.8, 115.0], [52.9, 115.0], [53.0, 116.0], [53.1, 116.0], [53.2, 116.0], [53.3, 117.0], [53.4, 117.0], [53.5, 118.0], [53.6, 118.0], [53.7, 119.0], [53.8, 119.0], [53.9, 120.0], [54.0, 120.0], [54.1, 121.0], [54.2, 122.0], [54.3, 122.0], [54.4, 123.0], [54.5, 124.0], [54.6, 124.0], [54.7, 125.0], [54.8, 125.0], [54.9, 126.0], [55.0, 127.0], [55.1, 129.0], [55.2, 129.0], [55.3, 130.0], [55.4, 131.0], [55.5, 132.0], [55.6, 133.0], [55.7, 134.0], [55.8, 135.0], [55.9, 136.0], [56.0, 137.0], [56.1, 138.0], [56.2, 138.0], [56.3, 139.0], [56.4, 140.0], [56.5, 141.0], [56.6, 142.0], [56.7, 143.0], [56.8, 144.0], [56.9, 146.0], [57.0, 147.0], [57.1, 147.0], [57.2, 148.0], [57.3, 150.0], [57.4, 151.0], [57.5, 151.0], [57.6, 152.0], [57.7, 153.0], [57.8, 156.0], [57.9, 156.0], [58.0, 159.0], [58.1, 162.0], [58.2, 163.0], [58.3, 164.0], [58.4, 166.0], [58.5, 169.0], [58.6, 171.0], [58.7, 172.0], [58.8, 173.0], [58.9, 174.0], [59.0, 175.0], [59.1, 177.0], [59.2, 177.0], [59.3, 180.0], [59.4, 181.0], [59.5, 182.0], [59.6, 183.0], [59.7, 183.0], [59.8, 185.0], [59.9, 187.0], [60.0, 188.0], [60.1, 189.0], [60.2, 190.0], [60.3, 191.0], [60.4, 193.0], [60.5, 194.0], [60.6, 195.0], [60.7, 196.0], [60.8, 197.0], [60.9, 198.0], [61.0, 199.0], [61.1, 200.0], [61.2, 201.0], [61.3, 201.0], [61.4, 202.0], [61.5, 203.0], [61.6, 203.0], [61.7, 204.0], [61.8, 204.0], [61.9, 205.0], [62.0, 206.0], [62.1, 207.0], [62.2, 207.0], [62.3, 208.0], [62.4, 209.0], [62.5, 210.0], [62.6, 211.0], [62.7, 212.0], [62.8, 213.0], [62.9, 213.0], [63.0, 214.0], [63.1, 215.0], [63.2, 215.0], [63.3, 217.0], [63.4, 218.0], [63.5, 219.0], [63.6, 219.0], [63.7, 220.0], [63.8, 221.0], [63.9, 222.0], [64.0, 222.0], [64.1, 223.0], [64.2, 223.0], [64.3, 224.0], [64.4, 225.0], [64.5, 225.0], [64.6, 226.0], [64.7, 227.0], [64.8, 227.0], [64.9, 229.0], [65.0, 229.0], [65.1, 230.0], [65.2, 230.0], [65.3, 231.0], [65.4, 232.0], [65.5, 233.0], [65.6, 234.0], [65.7, 235.0], [65.8, 236.0], [65.9, 237.0], [66.0, 237.0], [66.1, 238.0], [66.2, 239.0], [66.3, 240.0], [66.4, 241.0], [66.5, 242.0], [66.6, 243.0], [66.7, 244.0], [66.8, 244.0], [66.9, 245.0], [67.0, 246.0], [67.1, 246.0], [67.2, 247.0], [67.3, 247.0], [67.4, 249.0], [67.5, 250.0], [67.6, 250.0], [67.7, 251.0], [67.8, 253.0], [67.9, 253.0], [68.0, 254.0], [68.1, 255.0], [68.2, 256.0], [68.3, 258.0], [68.4, 258.0], [68.5, 259.0], [68.6, 259.0], [68.7, 260.0], [68.8, 261.0], [68.9, 262.0], [69.0, 262.0], [69.1, 264.0], [69.2, 265.0], [69.3, 266.0], [69.4, 267.0], [69.5, 268.0], [69.6, 270.0], [69.7, 270.0], [69.8, 271.0], [69.9, 273.0], [70.0, 275.0], [70.1, 277.0], [70.2, 278.0], [70.3, 280.0], [70.4, 281.0], [70.5, 282.0], [70.6, 283.0], [70.7, 284.0], [70.8, 284.0], [70.9, 285.0], [71.0, 287.0], [71.1, 288.0], [71.2, 289.0], [71.3, 290.0], [71.4, 291.0], [71.5, 292.0], [71.6, 293.0], [71.7, 294.0], [71.8, 297.0], [71.9, 299.0], [72.0, 300.0], [72.1, 300.0], [72.2, 301.0], [72.3, 302.0], [72.4, 303.0], [72.5, 305.0], [72.6, 306.0], [72.7, 307.0], [72.8, 309.0], [72.9, 310.0], [73.0, 312.0], [73.1, 314.0], [73.2, 315.0], [73.3, 316.0], [73.4, 317.0], [73.5, 317.0], [73.6, 318.0], [73.7, 320.0], [73.8, 322.0], [73.9, 323.0], [74.0, 324.0], [74.1, 326.0], [74.2, 327.0], [74.3, 328.0], [74.4, 330.0], [74.5, 332.0], [74.6, 334.0], [74.7, 335.0], [74.8, 337.0], [74.9, 338.0], [75.0, 341.0], [75.1, 343.0], [75.2, 343.0], [75.3, 344.0], [75.4, 345.0], [75.5, 347.0], [75.6, 349.0], [75.7, 349.0], [75.8, 350.0], [75.9, 351.0], [76.0, 353.0], [76.1, 354.0], [76.2, 355.0], [76.3, 355.0], [76.4, 357.0], [76.5, 358.0], [76.6, 359.0], [76.7, 360.0], [76.8, 361.0], [76.9, 362.0], [77.0, 364.0], [77.1, 364.0], [77.2, 366.0], [77.3, 368.0], [77.4, 369.0], [77.5, 371.0], [77.6, 372.0], [77.7, 372.0], [77.8, 373.0], [77.9, 374.0], [78.0, 375.0], [78.1, 377.0], [78.2, 378.0], [78.3, 380.0], [78.4, 381.0], [78.5, 382.0], [78.6, 385.0], [78.7, 387.0], [78.8, 389.0], [78.9, 392.0], [79.0, 394.0], [79.1, 396.0], [79.2, 399.0], [79.3, 400.0], [79.4, 404.0], [79.5, 404.0], [79.6, 406.0], [79.7, 407.0], [79.8, 408.0], [79.9, 410.0], [80.0, 412.0], [80.1, 412.0], [80.2, 414.0], [80.3, 416.0], [80.4, 417.0], [80.5, 418.0], [80.6, 419.0], [80.7, 421.0], [80.8, 423.0], [80.9, 424.0], [81.0, 427.0], [81.1, 429.0], [81.2, 431.0], [81.3, 433.0], [81.4, 436.0], [81.5, 439.0], [81.6, 440.0], [81.7, 445.0], [81.8, 446.0], [81.9, 447.0], [82.0, 449.0], [82.1, 451.0], [82.2, 453.0], [82.3, 454.0], [82.4, 456.0], [82.5, 458.0], [82.6, 460.0], [82.7, 461.0], [82.8, 462.0], [82.9, 464.0], [83.0, 465.0], [83.1, 466.0], [83.2, 468.0], [83.3, 471.0], [83.4, 472.0], [83.5, 475.0], [83.6, 476.0], [83.7, 478.0], [83.8, 480.0], [83.9, 482.0], [84.0, 485.0], [84.1, 487.0], [84.2, 491.0], [84.3, 494.0], [84.4, 495.0], [84.5, 500.0], [84.6, 501.0], [84.7, 503.0], [84.8, 504.0], [84.9, 506.0], [85.0, 509.0], [85.1, 510.0], [85.2, 514.0], [85.3, 516.0], [85.4, 519.0], [85.5, 523.0], [85.6, 524.0], [85.7, 527.0], [85.8, 528.0], [85.9, 531.0], [86.0, 536.0], [86.1, 537.0], [86.2, 540.0], [86.3, 542.0], [86.4, 544.0], [86.5, 550.0], [86.6, 552.0], [86.7, 553.0], [86.8, 559.0], [86.9, 560.0], [87.0, 564.0], [87.1, 567.0], [87.2, 574.0], [87.3, 579.0], [87.4, 582.0], [87.5, 585.0], [87.6, 588.0], [87.7, 590.0], [87.8, 593.0], [87.9, 598.0], [88.0, 600.0], [88.1, 602.0], [88.2, 606.0], [88.3, 607.0], [88.4, 611.0], [88.5, 617.0], [88.6, 624.0], [88.7, 628.0], [88.8, 630.0], [88.9, 632.0], [89.0, 636.0], [89.1, 640.0], [89.2, 641.0], [89.3, 647.0], [89.4, 649.0], [89.5, 651.0], [89.6, 654.0], [89.7, 655.0], [89.8, 657.0], [89.9, 658.0], [90.0, 662.0], [90.1, 669.0], [90.2, 673.0], [90.3, 679.0], [90.4, 684.0], [90.5, 688.0], [90.6, 690.0], [90.7, 694.0], [90.8, 697.0], [90.9, 699.0], [91.0, 703.0], [91.1, 707.0], [91.2, 710.0], [91.3, 712.0], [91.4, 714.0], [91.5, 718.0], [91.6, 722.0], [91.7, 724.0], [91.8, 727.0], [91.9, 731.0], [92.0, 734.0], [92.1, 737.0], [92.2, 739.0], [92.3, 742.0], [92.4, 753.0], [92.5, 758.0], [92.6, 769.0], [92.7, 772.0], [92.8, 777.0], [92.9, 781.0], [93.0, 787.0], [93.1, 790.0], [93.2, 793.0], [93.3, 796.0], [93.4, 799.0], [93.5, 803.0], [93.6, 808.0], [93.7, 813.0], [93.8, 816.0], [93.9, 820.0], [94.0, 827.0], [94.1, 830.0], [94.2, 832.0], [94.3, 837.0], [94.4, 841.0], [94.5, 842.0], [94.6, 846.0], [94.7, 856.0], [94.8, 861.0], [94.9, 863.0], [95.0, 865.0], [95.1, 868.0], [95.2, 879.0], [95.3, 881.0], [95.4, 884.0], [95.5, 887.0], [95.6, 892.0], [95.7, 900.0], [95.8, 904.0], [95.9, 909.0], [96.0, 918.0], [96.1, 926.0], [96.2, 933.0], [96.3, 941.0], [96.4, 950.0], [96.5, 958.0], [96.6, 968.0], [96.7, 980.0], [96.8, 989.0], [96.9, 992.0], [97.0, 1006.0], [97.1, 1010.0], [97.2, 1014.0], [97.3, 1033.0], [97.4, 1038.0], [97.5, 1044.0], [97.6, 1059.0], [97.7, 1077.0], [97.8, 1084.0], [97.9, 1092.0], [98.0, 1101.0], [98.1, 1124.0], [98.2, 1149.0], [98.3, 1154.0], [98.4, 1171.0], [98.5, 1193.0], [98.6, 1223.0], [98.7, 1233.0], [98.8, 1250.0], [98.9, 1269.0], [99.0, 1301.0], [99.1, 1314.0], [99.2, 1323.0], [99.3, 1356.0], [99.4, 1393.0], [99.5, 1435.0], [99.6, 1456.0], [99.7, 1551.0], [99.8, 1721.0], [99.9, 1870.0], [100.0, 2408.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 2584.0, "series": [{"data": [[0.0, 2584.0], [2100.0, 2.0], [600.0, 155.0], [2400.0, 1.0], [700.0, 133.0], [200.0, 576.0], [800.0, 118.0], [900.0, 67.0], [1000.0, 53.0], [1100.0, 30.0], [300.0, 380.0], [1200.0, 24.0], [1300.0, 22.0], [1400.0, 11.0], [1500.0, 7.0], [100.0, 628.0], [400.0, 278.0], [1600.0, 2.0], [1700.0, 5.0], [1800.0, 1.0], [1900.0, 2.0], [500.0, 183.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 2400.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 20.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 4449.0, "series": [{"data": [[0.0, 4449.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 793.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 20.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 8.333333333333334, "minX": 1.60438512E12, "maxY": 10.0, "series": [{"data": [[1.60438524E12, 10.0], [1.6043853E12, 8.333333333333334], [1.60438512E12, 9.722772277227731], [1.60438518E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6043853E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 246.49311136624593, "minX": 1.0, "maxY": 1721.0, "series": [{"data": [[4.0, 720.0], [8.0, 359.42857142857144], [2.0, 1182.0], [1.0, 1721.0], [9.0, 328.57142857142856], [5.0, 350.4], [10.0, 246.49311136624593], [6.0, 358.2], [3.0, 1305.0], [7.0, 377.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.975484606613431, 248.10053211706565]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 230.35, "minX": 1.60438512E12, "maxY": 2108510.3333333335, "series": [{"data": [[1.60438524E12, 1986199.5166666666], [1.6043853E12, 33821.833333333336], [1.60438512E12, 122549.55], [1.60438518E12, 2108510.3333333335]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60438524E12, 21695.533333333333], [1.6043853E12, 230.35], [1.60438512E12, 2723.85], [1.60438518E12, 20841.216666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6043853E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 230.04290429042896, "minX": 1.60438512E12, "maxY": 1407.7407407407406, "series": [{"data": [[1.60438524E12, 242.4498578968738], [1.6043853E12, 1407.7407407407406], [1.60438512E12, 230.04290429042896], [1.60438518E12, 243.2721749696231]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6043853E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 229.61716171617167, "minX": 1.60438512E12, "maxY": 1406.7777777777776, "series": [{"data": [[1.60438524E12, 242.0259845716606], [1.6043853E12, 1406.7777777777776], [1.60438512E12, 229.61716171617167], [1.60438518E12, 242.62292426083474]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6043853E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.60438512E12, "maxY": 0.33333333333333326, "series": [{"data": [[1.60438524E12, 0.009338205440519705], [1.6043853E12, 0.0], [1.60438512E12, 0.33333333333333326], [1.60438518E12, 0.006480356419603088]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6043853E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 36.0, "minX": 1.60438512E12, "maxY": 2408.0, "series": [{"data": [[1.60438524E12, 2172.0], [1.6043853E12, 2408.0], [1.60438512E12, 1089.0], [1.60438518E12, 2133.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60438524E12, 39.175999412536626], [1.6043853E12, 582.0], [1.60438512E12, 42.0], [1.60438518E12, 40.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60438524E12, 40.0], [1.6043853E12, 582.0], [1.60438512E12, 42.0096000289917], [1.60438518E12, 40.45300023555755]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60438524E12, 40.0], [1.6043853E12, 582.0], [1.60438512E12, 42.0], [1.60438518E12, 40.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60438524E12, 37.0], [1.6043853E12, 582.0], [1.60438512E12, 39.0], [1.60438518E12, 36.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60438524E12, 96.0], [1.6043853E12, 1410.0], [1.60438512E12, 81.0], [1.60438518E12, 107.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6043853E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 53.0, "minX": 1.0, "maxY": 1721.0, "series": [{"data": [[4.0, 716.5], [6.0, 1207.5], [8.0, 1412.0], [11.0, 794.0], [12.0, 790.5], [13.0, 867.0], [14.0, 720.5], [15.0, 679.5], [16.0, 575.0], [17.0, 347.5], [18.0, 442.5], [19.0, 482.0], [20.0, 463.5], [21.0, 77.0], [22.0, 464.5], [23.0, 394.0], [24.0, 406.0], [25.0, 364.0], [26.0, 387.5], [27.0, 291.0], [28.0, 296.0], [29.0, 241.0], [30.0, 147.0], [31.0, 69.5], [33.0, 224.0], [32.0, 235.0], [34.0, 139.0], [35.0, 74.0], [36.0, 215.5], [37.0, 87.5], [39.0, 201.0], [38.0, 111.0], [40.0, 67.5], [41.0, 222.0], [42.0, 215.0], [43.0, 53.0], [44.0, 76.0], [45.0, 60.0], [47.0, 214.0], [49.0, 86.5], [48.0, 112.5], [50.0, 67.5], [51.0, 122.0], [53.0, 82.0], [54.0, 79.5], [55.0, 71.0], [56.0, 65.0], [57.0, 69.0], [58.0, 104.5], [62.0, 90.5], [63.0, 74.0], [67.0, 71.0], [66.0, 107.0], [65.0, 67.0], [68.0, 98.5], [70.0, 71.0], [71.0, 112.0], [73.0, 55.0], [72.0, 92.0], [74.0, 59.5], [77.0, 77.0], [79.0, 66.0], [83.0, 57.0], [80.0, 77.5], [91.0, 60.0], [88.0, 69.5], [96.0, 102.5], [106.0, 57.0], [1.0, 1721.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 106.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 53.0, "minX": 1.0, "maxY": 1721.0, "series": [{"data": [[4.0, 716.0], [6.0, 1200.0], [8.0, 1412.0], [11.0, 793.5], [12.0, 789.0], [13.0, 866.0], [14.0, 720.5], [15.0, 678.5], [16.0, 574.0], [17.0, 347.0], [18.0, 442.5], [19.0, 482.0], [20.0, 463.0], [21.0, 77.0], [22.0, 464.0], [23.0, 391.0], [24.0, 405.5], [25.0, 363.0], [26.0, 387.0], [27.0, 291.0], [28.0, 296.0], [29.0, 240.0], [30.0, 142.0], [31.0, 69.5], [33.0, 222.0], [32.0, 233.5], [34.0, 139.0], [35.0, 74.0], [36.0, 215.5], [37.0, 87.5], [39.0, 200.0], [38.0, 111.0], [40.0, 67.5], [41.0, 222.0], [42.0, 214.5], [43.0, 53.0], [44.0, 76.0], [45.0, 60.0], [47.0, 214.0], [49.0, 86.5], [48.0, 112.5], [50.0, 67.5], [51.0, 121.0], [53.0, 82.0], [54.0, 79.5], [55.0, 71.0], [56.0, 65.0], [57.0, 69.0], [58.0, 104.0], [62.0, 90.0], [63.0, 74.0], [67.0, 71.0], [66.0, 106.5], [65.0, 67.0], [68.0, 97.5], [70.0, 71.0], [71.0, 111.0], [73.0, 55.0], [72.0, 91.0], [74.0, 59.5], [77.0, 77.0], [79.0, 65.5], [83.0, 56.0], [80.0, 77.5], [91.0, 60.0], [88.0, 69.5], [96.0, 101.5], [106.0, 57.0], [1.0, 1721.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 106.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.2833333333333333, "minX": 1.60438512E12, "maxY": 41.15, "series": [{"data": [[1.60438524E12, 41.05], [1.6043853E12, 0.2833333333333333], [1.60438512E12, 5.216666666666667], [1.60438518E12, 41.15]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6043853E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.45, "minX": 1.60438512E12, "maxY": 41.15, "series": [{"data": [[1.60438524E12, 41.05], [1.6043853E12, 0.45], [1.60438512E12, 5.05], [1.60438518E12, 41.15]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6043853E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.45, "minX": 1.60438512E12, "maxY": 41.15, "series": [{"data": [[1.60438524E12, 41.05], [1.6043853E12, 0.45], [1.60438512E12, 5.05], [1.60438518E12, 41.15]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6043853E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.45, "minX": 1.60438512E12, "maxY": 41.15, "series": [{"data": [[1.60438524E12, 41.05], [1.6043853E12, 0.45], [1.60438512E12, 5.05], [1.60438518E12, 41.15]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6043853E12, "title": "Total Transactions Per Second"}},
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

