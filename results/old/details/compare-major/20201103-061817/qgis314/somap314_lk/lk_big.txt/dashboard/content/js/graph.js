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
        data: {"result": {"minY": 44.0, "minX": 0.0, "maxY": 2202.0, "series": [{"data": [[0.0, 44.0], [0.1, 45.0], [0.2, 46.0], [0.3, 46.0], [0.4, 47.0], [0.5, 47.0], [0.6, 47.0], [0.7, 48.0], [0.8, 48.0], [0.9, 48.0], [1.0, 48.0], [1.1, 48.0], [1.2, 49.0], [1.3, 49.0], [1.4, 49.0], [1.5, 49.0], [1.6, 49.0], [1.7, 50.0], [1.8, 50.0], [1.9, 50.0], [2.0, 50.0], [2.1, 50.0], [2.2, 50.0], [2.3, 51.0], [2.4, 51.0], [2.5, 51.0], [2.6, 51.0], [2.7, 51.0], [2.8, 51.0], [2.9, 51.0], [3.0, 51.0], [3.1, 51.0], [3.2, 52.0], [3.3, 52.0], [3.4, 52.0], [3.5, 52.0], [3.6, 52.0], [3.7, 52.0], [3.8, 52.0], [3.9, 52.0], [4.0, 52.0], [4.1, 53.0], [4.2, 53.0], [4.3, 53.0], [4.4, 53.0], [4.5, 53.0], [4.6, 53.0], [4.7, 53.0], [4.8, 53.0], [4.9, 53.0], [5.0, 53.0], [5.1, 54.0], [5.2, 54.0], [5.3, 54.0], [5.4, 54.0], [5.5, 54.0], [5.6, 54.0], [5.7, 54.0], [5.8, 54.0], [5.9, 54.0], [6.0, 54.0], [6.1, 55.0], [6.2, 55.0], [6.3, 55.0], [6.4, 55.0], [6.5, 55.0], [6.6, 55.0], [6.7, 55.0], [6.8, 55.0], [6.9, 55.0], [7.0, 55.0], [7.1, 55.0], [7.2, 55.0], [7.3, 56.0], [7.4, 56.0], [7.5, 56.0], [7.6, 56.0], [7.7, 56.0], [7.8, 56.0], [7.9, 56.0], [8.0, 56.0], [8.1, 56.0], [8.2, 56.0], [8.3, 56.0], [8.4, 56.0], [8.5, 57.0], [8.6, 57.0], [8.7, 57.0], [8.8, 57.0], [8.9, 57.0], [9.0, 57.0], [9.1, 57.0], [9.2, 57.0], [9.3, 57.0], [9.4, 57.0], [9.5, 57.0], [9.6, 58.0], [9.7, 58.0], [9.8, 58.0], [9.9, 58.0], [10.0, 58.0], [10.1, 58.0], [10.2, 58.0], [10.3, 58.0], [10.4, 58.0], [10.5, 58.0], [10.6, 58.0], [10.7, 58.0], [10.8, 58.0], [10.9, 59.0], [11.0, 59.0], [11.1, 59.0], [11.2, 59.0], [11.3, 59.0], [11.4, 59.0], [11.5, 59.0], [11.6, 59.0], [11.7, 59.0], [11.8, 59.0], [11.9, 59.0], [12.0, 59.0], [12.1, 59.0], [12.2, 59.0], [12.3, 59.0], [12.4, 60.0], [12.5, 60.0], [12.6, 60.0], [12.7, 60.0], [12.8, 60.0], [12.9, 60.0], [13.0, 60.0], [13.1, 60.0], [13.2, 60.0], [13.3, 60.0], [13.4, 60.0], [13.5, 61.0], [13.6, 61.0], [13.7, 61.0], [13.8, 61.0], [13.9, 61.0], [14.0, 61.0], [14.1, 61.0], [14.2, 61.0], [14.3, 61.0], [14.4, 61.0], [14.5, 61.0], [14.6, 61.0], [14.7, 61.0], [14.8, 61.0], [14.9, 61.0], [15.0, 62.0], [15.1, 62.0], [15.2, 62.0], [15.3, 62.0], [15.4, 62.0], [15.5, 62.0], [15.6, 62.0], [15.7, 62.0], [15.8, 62.0], [15.9, 62.0], [16.0, 62.0], [16.1, 62.0], [16.2, 62.0], [16.3, 63.0], [16.4, 63.0], [16.5, 63.0], [16.6, 63.0], [16.7, 63.0], [16.8, 63.0], [16.9, 63.0], [17.0, 63.0], [17.1, 63.0], [17.2, 63.0], [17.3, 63.0], [17.4, 63.0], [17.5, 64.0], [17.6, 64.0], [17.7, 64.0], [17.8, 64.0], [17.9, 64.0], [18.0, 64.0], [18.1, 64.0], [18.2, 64.0], [18.3, 64.0], [18.4, 64.0], [18.5, 64.0], [18.6, 64.0], [18.7, 64.0], [18.8, 65.0], [18.9, 65.0], [19.0, 65.0], [19.1, 65.0], [19.2, 65.0], [19.3, 65.0], [19.4, 65.0], [19.5, 65.0], [19.6, 65.0], [19.7, 65.0], [19.8, 65.0], [19.9, 65.0], [20.0, 65.0], [20.1, 65.0], [20.2, 66.0], [20.3, 66.0], [20.4, 66.0], [20.5, 66.0], [20.6, 66.0], [20.7, 66.0], [20.8, 66.0], [20.9, 66.0], [21.0, 66.0], [21.1, 66.0], [21.2, 66.0], [21.3, 67.0], [21.4, 67.0], [21.5, 67.0], [21.6, 67.0], [21.7, 67.0], [21.8, 67.0], [21.9, 67.0], [22.0, 67.0], [22.1, 67.0], [22.2, 68.0], [22.3, 68.0], [22.4, 68.0], [22.5, 68.0], [22.6, 68.0], [22.7, 68.0], [22.8, 68.0], [22.9, 68.0], [23.0, 68.0], [23.1, 68.0], [23.2, 69.0], [23.3, 69.0], [23.4, 69.0], [23.5, 69.0], [23.6, 69.0], [23.7, 69.0], [23.8, 69.0], [23.9, 69.0], [24.0, 69.0], [24.1, 70.0], [24.2, 70.0], [24.3, 70.0], [24.4, 70.0], [24.5, 70.0], [24.6, 70.0], [24.7, 70.0], [24.8, 70.0], [24.9, 70.0], [25.0, 70.0], [25.1, 70.0], [25.2, 71.0], [25.3, 71.0], [25.4, 71.0], [25.5, 71.0], [25.6, 71.0], [25.7, 71.0], [25.8, 71.0], [25.9, 71.0], [26.0, 71.0], [26.1, 72.0], [26.2, 72.0], [26.3, 72.0], [26.4, 72.0], [26.5, 72.0], [26.6, 72.0], [26.7, 72.0], [26.8, 72.0], [26.9, 73.0], [27.0, 73.0], [27.1, 73.0], [27.2, 73.0], [27.3, 73.0], [27.4, 73.0], [27.5, 73.0], [27.6, 73.0], [27.7, 73.0], [27.8, 74.0], [27.9, 74.0], [28.0, 74.0], [28.1, 74.0], [28.2, 74.0], [28.3, 74.0], [28.4, 74.0], [28.5, 74.0], [28.6, 74.0], [28.7, 75.0], [28.8, 75.0], [28.9, 75.0], [29.0, 75.0], [29.1, 75.0], [29.2, 75.0], [29.3, 75.0], [29.4, 75.0], [29.5, 76.0], [29.6, 76.0], [29.7, 76.0], [29.8, 76.0], [29.9, 76.0], [30.0, 76.0], [30.1, 76.0], [30.2, 77.0], [30.3, 77.0], [30.4, 77.0], [30.5, 77.0], [30.6, 77.0], [30.7, 77.0], [30.8, 77.0], [30.9, 77.0], [31.0, 78.0], [31.1, 78.0], [31.2, 78.0], [31.3, 78.0], [31.4, 78.0], [31.5, 78.0], [31.6, 78.0], [31.7, 78.0], [31.8, 79.0], [31.9, 79.0], [32.0, 79.0], [32.1, 79.0], [32.2, 79.0], [32.3, 79.0], [32.4, 79.0], [32.5, 79.0], [32.6, 80.0], [32.7, 80.0], [32.8, 80.0], [32.9, 80.0], [33.0, 80.0], [33.1, 80.0], [33.2, 80.0], [33.3, 80.0], [33.4, 80.0], [33.5, 81.0], [33.6, 81.0], [33.7, 81.0], [33.8, 81.0], [33.9, 81.0], [34.0, 81.0], [34.1, 81.0], [34.2, 82.0], [34.3, 82.0], [34.4, 82.0], [34.5, 82.0], [34.6, 83.0], [34.7, 83.0], [34.8, 83.0], [34.9, 83.0], [35.0, 83.0], [35.1, 83.0], [35.2, 84.0], [35.3, 84.0], [35.4, 84.0], [35.5, 84.0], [35.6, 84.0], [35.7, 84.0], [35.8, 85.0], [35.9, 85.0], [36.0, 85.0], [36.1, 85.0], [36.2, 85.0], [36.3, 85.0], [36.4, 85.0], [36.5, 85.0], [36.6, 86.0], [36.7, 86.0], [36.8, 86.0], [36.9, 86.0], [37.0, 86.0], [37.1, 86.0], [37.2, 87.0], [37.3, 87.0], [37.4, 87.0], [37.5, 87.0], [37.6, 88.0], [37.7, 88.0], [37.8, 88.0], [37.9, 88.0], [38.0, 88.0], [38.1, 88.0], [38.2, 88.0], [38.3, 89.0], [38.4, 89.0], [38.5, 89.0], [38.6, 89.0], [38.7, 89.0], [38.8, 89.0], [38.9, 90.0], [39.0, 90.0], [39.1, 90.0], [39.2, 90.0], [39.3, 90.0], [39.4, 91.0], [39.5, 91.0], [39.6, 91.0], [39.7, 91.0], [39.8, 91.0], [39.9, 92.0], [40.0, 92.0], [40.1, 92.0], [40.2, 92.0], [40.3, 92.0], [40.4, 92.0], [40.5, 93.0], [40.6, 93.0], [40.7, 93.0], [40.8, 93.0], [40.9, 93.0], [41.0, 94.0], [41.1, 94.0], [41.2, 94.0], [41.3, 94.0], [41.4, 95.0], [41.5, 95.0], [41.6, 95.0], [41.7, 95.0], [41.8, 95.0], [41.9, 95.0], [42.0, 95.0], [42.1, 96.0], [42.2, 96.0], [42.3, 96.0], [42.4, 96.0], [42.5, 96.0], [42.6, 96.0], [42.7, 97.0], [42.8, 97.0], [42.9, 97.0], [43.0, 97.0], [43.1, 97.0], [43.2, 97.0], [43.3, 98.0], [43.4, 98.0], [43.5, 98.0], [43.6, 98.0], [43.7, 98.0], [43.8, 99.0], [43.9, 99.0], [44.0, 99.0], [44.1, 99.0], [44.2, 99.0], [44.3, 100.0], [44.4, 100.0], [44.5, 100.0], [44.6, 100.0], [44.7, 100.0], [44.8, 100.0], [44.9, 101.0], [45.0, 101.0], [45.1, 101.0], [45.2, 101.0], [45.3, 102.0], [45.4, 102.0], [45.5, 102.0], [45.6, 102.0], [45.7, 103.0], [45.8, 103.0], [45.9, 103.0], [46.0, 103.0], [46.1, 104.0], [46.2, 104.0], [46.3, 104.0], [46.4, 104.0], [46.5, 105.0], [46.6, 105.0], [46.7, 105.0], [46.8, 105.0], [46.9, 106.0], [47.0, 106.0], [47.1, 106.0], [47.2, 106.0], [47.3, 106.0], [47.4, 107.0], [47.5, 107.0], [47.6, 107.0], [47.7, 107.0], [47.8, 107.0], [47.9, 107.0], [48.0, 108.0], [48.1, 108.0], [48.2, 108.0], [48.3, 109.0], [48.4, 109.0], [48.5, 110.0], [48.6, 110.0], [48.7, 110.0], [48.8, 111.0], [48.9, 111.0], [49.0, 111.0], [49.1, 111.0], [49.2, 112.0], [49.3, 112.0], [49.4, 112.0], [49.5, 112.0], [49.6, 113.0], [49.7, 113.0], [49.8, 113.0], [49.9, 114.0], [50.0, 114.0], [50.1, 114.0], [50.2, 115.0], [50.3, 115.0], [50.4, 116.0], [50.5, 116.0], [50.6, 116.0], [50.7, 116.0], [50.8, 117.0], [50.9, 117.0], [51.0, 118.0], [51.1, 118.0], [51.2, 118.0], [51.3, 118.0], [51.4, 119.0], [51.5, 119.0], [51.6, 120.0], [51.7, 120.0], [51.8, 120.0], [51.9, 121.0], [52.0, 121.0], [52.1, 122.0], [52.2, 123.0], [52.3, 123.0], [52.4, 123.0], [52.5, 123.0], [52.6, 124.0], [52.7, 124.0], [52.8, 125.0], [52.9, 126.0], [53.0, 126.0], [53.1, 126.0], [53.2, 127.0], [53.3, 127.0], [53.4, 128.0], [53.5, 130.0], [53.6, 130.0], [53.7, 130.0], [53.8, 131.0], [53.9, 132.0], [54.0, 133.0], [54.1, 134.0], [54.2, 135.0], [54.3, 136.0], [54.4, 136.0], [54.5, 136.0], [54.6, 137.0], [54.7, 137.0], [54.8, 138.0], [54.9, 139.0], [55.0, 140.0], [55.1, 141.0], [55.2, 142.0], [55.3, 143.0], [55.4, 144.0], [55.5, 145.0], [55.6, 146.0], [55.7, 148.0], [55.8, 149.0], [55.9, 150.0], [56.0, 151.0], [56.1, 152.0], [56.2, 152.0], [56.3, 154.0], [56.4, 155.0], [56.5, 156.0], [56.6, 158.0], [56.7, 160.0], [56.8, 161.0], [56.9, 162.0], [57.0, 163.0], [57.1, 165.0], [57.2, 166.0], [57.3, 168.0], [57.4, 170.0], [57.5, 172.0], [57.6, 174.0], [57.7, 177.0], [57.8, 179.0], [57.9, 180.0], [58.0, 180.0], [58.1, 181.0], [58.2, 182.0], [58.3, 183.0], [58.4, 184.0], [58.5, 184.0], [58.6, 185.0], [58.7, 186.0], [58.8, 187.0], [58.9, 188.0], [59.0, 190.0], [59.1, 191.0], [59.2, 192.0], [59.3, 193.0], [59.4, 194.0], [59.5, 195.0], [59.6, 196.0], [59.7, 197.0], [59.8, 198.0], [59.9, 199.0], [60.0, 200.0], [60.1, 200.0], [60.2, 201.0], [60.3, 202.0], [60.4, 203.0], [60.5, 204.0], [60.6, 205.0], [60.7, 206.0], [60.8, 208.0], [60.9, 208.0], [61.0, 210.0], [61.1, 211.0], [61.2, 212.0], [61.3, 213.0], [61.4, 214.0], [61.5, 215.0], [61.6, 216.0], [61.7, 216.0], [61.8, 217.0], [61.9, 218.0], [62.0, 219.0], [62.1, 220.0], [62.2, 220.0], [62.3, 221.0], [62.4, 222.0], [62.5, 223.0], [62.6, 223.0], [62.7, 225.0], [62.8, 225.0], [62.9, 226.0], [63.0, 228.0], [63.1, 228.0], [63.2, 228.0], [63.3, 229.0], [63.4, 230.0], [63.5, 231.0], [63.6, 232.0], [63.7, 233.0], [63.8, 236.0], [63.9, 236.0], [64.0, 237.0], [64.1, 238.0], [64.2, 238.0], [64.3, 239.0], [64.4, 240.0], [64.5, 240.0], [64.6, 242.0], [64.7, 243.0], [64.8, 244.0], [64.9, 245.0], [65.0, 246.0], [65.1, 247.0], [65.2, 247.0], [65.3, 248.0], [65.4, 249.0], [65.5, 250.0], [65.6, 251.0], [65.7, 252.0], [65.8, 253.0], [65.9, 254.0], [66.0, 255.0], [66.1, 256.0], [66.2, 257.0], [66.3, 258.0], [66.4, 258.0], [66.5, 259.0], [66.6, 261.0], [66.7, 261.0], [66.8, 262.0], [66.9, 264.0], [67.0, 265.0], [67.1, 265.0], [67.2, 266.0], [67.3, 267.0], [67.4, 267.0], [67.5, 268.0], [67.6, 270.0], [67.7, 270.0], [67.8, 271.0], [67.9, 271.0], [68.0, 271.0], [68.1, 272.0], [68.2, 272.0], [68.3, 273.0], [68.4, 274.0], [68.5, 275.0], [68.6, 277.0], [68.7, 278.0], [68.8, 280.0], [68.9, 280.0], [69.0, 281.0], [69.1, 281.0], [69.2, 282.0], [69.3, 283.0], [69.4, 283.0], [69.5, 285.0], [69.6, 285.0], [69.7, 285.0], [69.8, 286.0], [69.9, 287.0], [70.0, 289.0], [70.1, 290.0], [70.2, 291.0], [70.3, 292.0], [70.4, 293.0], [70.5, 295.0], [70.6, 297.0], [70.7, 298.0], [70.8, 299.0], [70.9, 300.0], [71.0, 300.0], [71.1, 301.0], [71.2, 303.0], [71.3, 304.0], [71.4, 306.0], [71.5, 307.0], [71.6, 308.0], [71.7, 311.0], [71.8, 312.0], [71.9, 312.0], [72.0, 313.0], [72.1, 314.0], [72.2, 315.0], [72.3, 316.0], [72.4, 318.0], [72.5, 319.0], [72.6, 320.0], [72.7, 322.0], [72.8, 323.0], [72.9, 325.0], [73.0, 326.0], [73.1, 329.0], [73.2, 330.0], [73.3, 332.0], [73.4, 334.0], [73.5, 334.0], [73.6, 336.0], [73.7, 338.0], [73.8, 338.0], [73.9, 339.0], [74.0, 341.0], [74.1, 342.0], [74.2, 342.0], [74.3, 343.0], [74.4, 344.0], [74.5, 345.0], [74.6, 346.0], [74.7, 348.0], [74.8, 349.0], [74.9, 350.0], [75.0, 352.0], [75.1, 352.0], [75.2, 354.0], [75.3, 355.0], [75.4, 357.0], [75.5, 360.0], [75.6, 360.0], [75.7, 361.0], [75.8, 362.0], [75.9, 363.0], [76.0, 365.0], [76.1, 365.0], [76.2, 367.0], [76.3, 367.0], [76.4, 368.0], [76.5, 370.0], [76.6, 370.0], [76.7, 372.0], [76.8, 373.0], [76.9, 375.0], [77.0, 377.0], [77.1, 379.0], [77.2, 381.0], [77.3, 383.0], [77.4, 384.0], [77.5, 386.0], [77.6, 388.0], [77.7, 389.0], [77.8, 391.0], [77.9, 393.0], [78.0, 395.0], [78.1, 396.0], [78.2, 398.0], [78.3, 400.0], [78.4, 401.0], [78.5, 403.0], [78.6, 405.0], [78.7, 407.0], [78.8, 409.0], [78.9, 411.0], [79.0, 413.0], [79.1, 416.0], [79.2, 419.0], [79.3, 420.0], [79.4, 422.0], [79.5, 425.0], [79.6, 427.0], [79.7, 429.0], [79.8, 430.0], [79.9, 433.0], [80.0, 433.0], [80.1, 435.0], [80.2, 437.0], [80.3, 438.0], [80.4, 440.0], [80.5, 441.0], [80.6, 443.0], [80.7, 444.0], [80.8, 448.0], [80.9, 451.0], [81.0, 453.0], [81.1, 455.0], [81.2, 457.0], [81.3, 458.0], [81.4, 460.0], [81.5, 461.0], [81.6, 462.0], [81.7, 465.0], [81.8, 467.0], [81.9, 469.0], [82.0, 470.0], [82.1, 473.0], [82.2, 474.0], [82.3, 475.0], [82.4, 477.0], [82.5, 478.0], [82.6, 480.0], [82.7, 483.0], [82.8, 485.0], [82.9, 487.0], [83.0, 489.0], [83.1, 490.0], [83.2, 492.0], [83.3, 494.0], [83.4, 495.0], [83.5, 498.0], [83.6, 501.0], [83.7, 501.0], [83.8, 504.0], [83.9, 506.0], [84.0, 509.0], [84.1, 510.0], [84.2, 512.0], [84.3, 515.0], [84.4, 518.0], [84.5, 520.0], [84.6, 521.0], [84.7, 523.0], [84.8, 525.0], [84.9, 527.0], [85.0, 528.0], [85.1, 529.0], [85.2, 531.0], [85.3, 533.0], [85.4, 534.0], [85.5, 537.0], [85.6, 539.0], [85.7, 540.0], [85.8, 542.0], [85.9, 546.0], [86.0, 549.0], [86.1, 550.0], [86.2, 553.0], [86.3, 555.0], [86.4, 557.0], [86.5, 558.0], [86.6, 560.0], [86.7, 563.0], [86.8, 565.0], [86.9, 569.0], [87.0, 572.0], [87.1, 575.0], [87.2, 577.0], [87.3, 580.0], [87.4, 582.0], [87.5, 587.0], [87.6, 589.0], [87.7, 590.0], [87.8, 593.0], [87.9, 594.0], [88.0, 597.0], [88.1, 600.0], [88.2, 601.0], [88.3, 603.0], [88.4, 606.0], [88.5, 607.0], [88.6, 611.0], [88.7, 613.0], [88.8, 616.0], [88.9, 618.0], [89.0, 619.0], [89.1, 623.0], [89.2, 626.0], [89.3, 629.0], [89.4, 634.0], [89.5, 636.0], [89.6, 641.0], [89.7, 644.0], [89.8, 647.0], [89.9, 653.0], [90.0, 658.0], [90.1, 664.0], [90.2, 667.0], [90.3, 668.0], [90.4, 672.0], [90.5, 675.0], [90.6, 679.0], [90.7, 683.0], [90.8, 685.0], [90.9, 689.0], [91.0, 692.0], [91.1, 694.0], [91.2, 697.0], [91.3, 701.0], [91.4, 703.0], [91.5, 706.0], [91.6, 708.0], [91.7, 711.0], [91.8, 714.0], [91.9, 717.0], [92.0, 722.0], [92.1, 727.0], [92.2, 728.0], [92.3, 730.0], [92.4, 736.0], [92.5, 743.0], [92.6, 749.0], [92.7, 752.0], [92.8, 757.0], [92.9, 760.0], [93.0, 764.0], [93.1, 767.0], [93.2, 774.0], [93.3, 777.0], [93.4, 781.0], [93.5, 784.0], [93.6, 790.0], [93.7, 794.0], [93.8, 806.0], [93.9, 809.0], [94.0, 812.0], [94.1, 817.0], [94.2, 819.0], [94.3, 826.0], [94.4, 830.0], [94.5, 834.0], [94.6, 838.0], [94.7, 844.0], [94.8, 848.0], [94.9, 851.0], [95.0, 858.0], [95.1, 866.0], [95.2, 869.0], [95.3, 878.0], [95.4, 880.0], [95.5, 892.0], [95.6, 898.0], [95.7, 905.0], [95.8, 912.0], [95.9, 928.0], [96.0, 935.0], [96.1, 945.0], [96.2, 951.0], [96.3, 954.0], [96.4, 960.0], [96.5, 971.0], [96.6, 984.0], [96.7, 997.0], [96.8, 1004.0], [96.9, 1011.0], [97.0, 1022.0], [97.1, 1034.0], [97.2, 1045.0], [97.3, 1057.0], [97.4, 1080.0], [97.5, 1096.0], [97.6, 1103.0], [97.7, 1112.0], [97.8, 1139.0], [97.9, 1152.0], [98.0, 1174.0], [98.1, 1195.0], [98.2, 1217.0], [98.3, 1223.0], [98.4, 1236.0], [98.5, 1259.0], [98.6, 1263.0], [98.7, 1278.0], [98.8, 1300.0], [98.9, 1313.0], [99.0, 1328.0], [99.1, 1338.0], [99.2, 1349.0], [99.3, 1375.0], [99.4, 1407.0], [99.5, 1448.0], [99.6, 1485.0], [99.7, 1576.0], [99.8, 1620.0], [99.9, 1677.0], [100.0, 2202.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 2326.0, "series": [{"data": [[0.0, 2326.0], [2100.0, 1.0], [2200.0, 1.0], [600.0, 168.0], [700.0, 132.0], [200.0, 571.0], [800.0, 97.0], [900.0, 59.0], [1000.0, 43.0], [1100.0, 31.0], [300.0, 392.0], [1200.0, 34.0], [1300.0, 31.0], [1400.0, 13.0], [1500.0, 7.0], [100.0, 830.0], [400.0, 278.0], [1600.0, 9.0], [1700.0, 1.0], [1900.0, 1.0], [500.0, 237.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 2200.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 20.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 4399.0, "series": [{"data": [[0.0, 4399.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 843.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 20.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 1.60438578E12, "maxY": 10.0, "series": [{"data": [[1.60438584E12, 10.0], [1.6043859E12, 9.984133979726751], [1.60438578E12, 9.886397608370693], [1.60438596E12, 1.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60438596E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 257.923121055652, "minX": 1.0, "maxY": 1681.0, "series": [{"data": [[4.0, 457.5], [8.0, 541.2], [2.0, 1166.0], [1.0, 1681.0], [9.0, 357.6666666666667], [5.0, 415.4], [10.0, 257.923121055652], [6.0, 743.0], [3.0, 1260.0], [7.0, 399.75]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.977004941087012, 259.64082098061556]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 8.6, "minX": 1.60438578E12, "maxY": 2018953.4833333334, "series": [{"data": [[1.60438584E12, 2018953.4833333334], [1.6043859E12, 1806052.6333333333], [1.60438578E12, 423096.5833333333], [1.60438596E12, 748.7833333333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60438584E12, 19733.866666666665], [1.6043859E12, 20024.983333333334], [1.60438578E12, 5723.5], [1.60438596E12, 8.6]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60438596E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 257.12225570383134, "minX": 1.60438578E12, "maxY": 1681.0, "series": [{"data": [[1.60438584E12, 257.12225570383134], [1.6043859E12, 261.62141912736877], [1.60438578E12, 259.54409566517194], [1.60438596E12, 1681.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60438596E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 256.51743435213166, "minX": 1.60438578E12, "maxY": 1681.0, "series": [{"data": [[1.60438584E12, 256.51743435213166], [1.6043859E12, 261.20052886734237], [1.60438578E12, 258.97010463378155], [1.60438596E12, 1681.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60438596E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.60438578E12, "maxY": 0.13901345291479836, "series": [{"data": [[1.60438584E12, 0.00817907877744299], [1.6043859E12, 0.007492287351256065], [1.60438578E12, 0.13901345291479836], [1.60438596E12, 0.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60438596E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 44.0, "minX": 1.60438578E12, "maxY": 2202.0, "series": [{"data": [[1.60438584E12, 1753.0], [1.6043859E12, 2202.0], [1.60438578E12, 1121.0], [1.60438596E12, 1681.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60438584E12, 48.0], [1.6043859E12, 48.0], [1.60438578E12, 50.02999984025955], [1.60438596E12, 1681.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60438584E12, 48.0], [1.6043859E12, 48.0], [1.60438578E12, 50.633000063896176], [1.60438596E12, 1681.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60438584E12, 48.0], [1.6043859E12, 48.0], [1.60438578E12, 50.364999920129776], [1.60438596E12, 1681.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60438584E12, 44.0], [1.6043859E12, 45.0], [1.60438578E12, 48.0], [1.60438596E12, 1681.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60438584E12, 114.0], [1.6043859E12, 110.0], [1.60438578E12, 130.0], [1.60438596E12, 1681.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60438596E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 65.5, "minX": 1.0, "maxY": 1681.0, "series": [{"data": [[4.0, 1282.5], [5.0, 1082.5], [6.0, 1662.0], [8.0, 1355.5], [11.0, 700.5], [12.0, 961.0], [13.0, 866.0], [14.0, 639.0], [15.0, 838.0], [16.0, 482.0], [17.0, 811.0], [19.0, 512.0], [20.0, 375.0], [21.0, 435.0], [22.0, 312.0], [23.0, 464.0], [24.0, 405.0], [25.0, 336.0], [26.0, 202.5], [27.0, 324.0], [29.0, 96.0], [30.0, 128.5], [31.0, 160.0], [33.0, 179.0], [32.0, 244.0], [35.0, 207.5], [34.0, 129.5], [37.0, 98.0], [36.0, 87.5], [39.0, 93.0], [38.0, 95.0], [40.0, 182.5], [41.0, 246.0], [42.0, 180.0], [43.0, 88.5], [44.0, 81.0], [45.0, 92.0], [47.0, 217.5], [46.0, 187.5], [49.0, 75.0], [48.0, 80.5], [50.0, 224.5], [52.0, 105.0], [54.0, 84.5], [57.0, 129.0], [59.0, 82.0], [58.0, 98.0], [61.0, 121.0], [65.0, 85.0], [67.0, 105.0], [64.0, 70.0], [69.0, 82.0], [70.0, 112.0], [74.0, 85.0], [73.0, 71.0], [72.0, 75.5], [75.0, 109.0], [79.0, 72.0], [78.0, 77.0], [82.0, 65.5], [80.0, 77.5], [86.0, 87.0], [84.0, 68.0], [89.0, 113.0], [88.0, 74.5], [1.0, 1681.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 89.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 65.5, "minX": 1.0, "maxY": 1681.0, "series": [{"data": [[4.0, 1282.0], [5.0, 1082.0], [6.0, 1661.5], [8.0, 1353.5], [11.0, 700.5], [12.0, 954.5], [13.0, 865.0], [14.0, 638.5], [15.0, 837.0], [16.0, 481.5], [17.0, 810.0], [19.0, 512.0], [20.0, 373.0], [21.0, 434.0], [22.0, 310.5], [23.0, 463.5], [24.0, 404.0], [25.0, 335.0], [26.0, 202.5], [27.0, 323.5], [29.0, 96.0], [30.0, 128.5], [31.0, 159.0], [33.0, 179.0], [32.0, 244.0], [35.0, 207.5], [34.0, 123.0], [37.0, 97.0], [36.0, 87.5], [39.0, 93.0], [38.0, 95.0], [40.0, 182.5], [41.0, 246.0], [42.0, 180.0], [43.0, 88.5], [44.0, 81.0], [45.0, 92.0], [47.0, 217.5], [46.0, 187.5], [49.0, 75.0], [48.0, 80.5], [50.0, 224.5], [52.0, 104.5], [54.0, 84.0], [57.0, 129.0], [59.0, 82.0], [58.0, 98.0], [61.0, 121.0], [65.0, 85.0], [67.0, 105.0], [64.0, 70.0], [69.0, 82.0], [70.0, 110.0], [74.0, 85.0], [73.0, 71.0], [72.0, 75.5], [75.0, 109.0], [79.0, 72.0], [78.0, 77.0], [82.0, 65.5], [80.0, 77.5], [86.0, 87.0], [84.0, 68.0], [89.0, 111.0], [88.0, 74.5], [1.0, 1681.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 89.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 11.316666666666666, "minX": 1.60438578E12, "maxY": 38.71666666666667, "series": [{"data": [[1.60438584E12, 38.71666666666667], [1.6043859E12, 37.666666666666664], [1.60438578E12, 11.316666666666666]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6043859E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60438578E12, "maxY": 38.71666666666667, "series": [{"data": [[1.60438584E12, 38.71666666666667], [1.6043859E12, 37.81666666666667], [1.60438578E12, 11.15], [1.60438596E12, 0.016666666666666666]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60438596E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60438578E12, "maxY": 38.71666666666667, "series": [{"data": [[1.60438584E12, 38.71666666666667], [1.6043859E12, 37.81666666666667], [1.60438578E12, 11.15], [1.60438596E12, 0.016666666666666666]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60438596E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60438578E12, "maxY": 38.71666666666667, "series": [{"data": [[1.60438584E12, 38.71666666666667], [1.6043859E12, 37.81666666666667], [1.60438578E12, 11.15], [1.60438596E12, 0.016666666666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60438596E12, "title": "Total Transactions Per Second"}},
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

