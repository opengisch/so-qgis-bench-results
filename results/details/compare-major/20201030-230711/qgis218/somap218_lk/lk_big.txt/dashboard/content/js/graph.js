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
        data: {"result": {"minY": 5.0, "minX": 0.0, "maxY": 2787.0, "series": [{"data": [[0.0, 5.0], [0.1, 6.0], [0.2, 6.0], [0.3, 6.0], [0.4, 6.0], [0.5, 6.0], [0.6, 6.0], [0.7, 6.0], [0.8, 6.0], [0.9, 6.0], [1.0, 6.0], [1.1, 6.0], [1.2, 6.0], [1.3, 6.0], [1.4, 6.0], [1.5, 6.0], [1.6, 6.0], [1.7, 6.0], [1.8, 6.0], [1.9, 7.0], [2.0, 7.0], [2.1, 7.0], [2.2, 7.0], [2.3, 7.0], [2.4, 7.0], [2.5, 7.0], [2.6, 7.0], [2.7, 7.0], [2.8, 7.0], [2.9, 7.0], [3.0, 7.0], [3.1, 7.0], [3.2, 7.0], [3.3, 7.0], [3.4, 7.0], [3.5, 7.0], [3.6, 7.0], [3.7, 7.0], [3.8, 7.0], [3.9, 7.0], [4.0, 7.0], [4.1, 7.0], [4.2, 7.0], [4.3, 7.0], [4.4, 7.0], [4.5, 7.0], [4.6, 7.0], [4.7, 7.0], [4.8, 7.0], [4.9, 7.0], [5.0, 7.0], [5.1, 7.0], [5.2, 7.0], [5.3, 8.0], [5.4, 8.0], [5.5, 8.0], [5.6, 8.0], [5.7, 8.0], [5.8, 8.0], [5.9, 8.0], [6.0, 8.0], [6.1, 8.0], [6.2, 8.0], [6.3, 8.0], [6.4, 8.0], [6.5, 8.0], [6.6, 8.0], [6.7, 8.0], [6.8, 8.0], [6.9, 8.0], [7.0, 8.0], [7.1, 8.0], [7.2, 8.0], [7.3, 8.0], [7.4, 8.0], [7.5, 8.0], [7.6, 8.0], [7.7, 8.0], [7.8, 8.0], [7.9, 8.0], [8.0, 8.0], [8.1, 8.0], [8.2, 8.0], [8.3, 8.0], [8.4, 8.0], [8.5, 8.0], [8.6, 8.0], [8.7, 8.0], [8.8, 9.0], [8.9, 9.0], [9.0, 9.0], [9.1, 9.0], [9.2, 9.0], [9.3, 9.0], [9.4, 9.0], [9.5, 9.0], [9.6, 9.0], [9.7, 9.0], [9.8, 9.0], [9.9, 9.0], [10.0, 9.0], [10.1, 9.0], [10.2, 9.0], [10.3, 9.0], [10.4, 9.0], [10.5, 9.0], [10.6, 9.0], [10.7, 9.0], [10.8, 9.0], [10.9, 9.0], [11.0, 9.0], [11.1, 9.0], [11.2, 9.0], [11.3, 9.0], [11.4, 9.0], [11.5, 9.0], [11.6, 9.0], [11.7, 9.0], [11.8, 9.0], [11.9, 9.0], [12.0, 10.0], [12.1, 10.0], [12.2, 10.0], [12.3, 10.0], [12.4, 10.0], [12.5, 10.0], [12.6, 10.0], [12.7, 10.0], [12.8, 10.0], [12.9, 10.0], [13.0, 10.0], [13.1, 10.0], [13.2, 10.0], [13.3, 10.0], [13.4, 10.0], [13.5, 10.0], [13.6, 10.0], [13.7, 10.0], [13.8, 10.0], [13.9, 10.0], [14.0, 10.0], [14.1, 10.0], [14.2, 10.0], [14.3, 10.0], [14.4, 10.0], [14.5, 10.0], [14.6, 10.0], [14.7, 10.0], [14.8, 10.0], [14.9, 10.0], [15.0, 10.0], [15.1, 10.0], [15.2, 10.0], [15.3, 10.0], [15.4, 11.0], [15.5, 11.0], [15.6, 11.0], [15.7, 11.0], [15.8, 11.0], [15.9, 11.0], [16.0, 11.0], [16.1, 11.0], [16.2, 11.0], [16.3, 11.0], [16.4, 11.0], [16.5, 11.0], [16.6, 11.0], [16.7, 11.0], [16.8, 11.0], [16.9, 11.0], [17.0, 11.0], [17.1, 11.0], [17.2, 11.0], [17.3, 11.0], [17.4, 11.0], [17.5, 11.0], [17.6, 11.0], [17.7, 11.0], [17.8, 11.0], [17.9, 11.0], [18.0, 11.0], [18.1, 11.0], [18.2, 11.0], [18.3, 11.0], [18.4, 12.0], [18.5, 12.0], [18.6, 12.0], [18.7, 12.0], [18.8, 12.0], [18.9, 12.0], [19.0, 12.0], [19.1, 12.0], [19.2, 12.0], [19.3, 12.0], [19.4, 12.0], [19.5, 12.0], [19.6, 12.0], [19.7, 12.0], [19.8, 12.0], [19.9, 12.0], [20.0, 12.0], [20.1, 12.0], [20.2, 12.0], [20.3, 13.0], [20.4, 13.0], [20.5, 13.0], [20.6, 13.0], [20.7, 13.0], [20.8, 13.0], [20.9, 13.0], [21.0, 13.0], [21.1, 13.0], [21.2, 13.0], [21.3, 13.0], [21.4, 13.0], [21.5, 13.0], [21.6, 13.0], [21.7, 13.0], [21.8, 13.0], [21.9, 13.0], [22.0, 13.0], [22.1, 13.0], [22.2, 14.0], [22.3, 14.0], [22.4, 14.0], [22.5, 14.0], [22.6, 14.0], [22.7, 14.0], [22.8, 14.0], [22.9, 14.0], [23.0, 14.0], [23.1, 14.0], [23.2, 14.0], [23.3, 14.0], [23.4, 14.0], [23.5, 14.0], [23.6, 14.0], [23.7, 14.0], [23.8, 14.0], [23.9, 14.0], [24.0, 14.0], [24.1, 15.0], [24.2, 15.0], [24.3, 15.0], [24.4, 15.0], [24.5, 15.0], [24.6, 15.0], [24.7, 15.0], [24.8, 15.0], [24.9, 15.0], [25.0, 15.0], [25.1, 15.0], [25.2, 15.0], [25.3, 15.0], [25.4, 15.0], [25.5, 15.0], [25.6, 15.0], [25.7, 15.0], [25.8, 15.0], [25.9, 16.0], [26.0, 16.0], [26.1, 16.0], [26.2, 16.0], [26.3, 16.0], [26.4, 16.0], [26.5, 16.0], [26.6, 16.0], [26.7, 16.0], [26.8, 16.0], [26.9, 16.0], [27.0, 16.0], [27.1, 16.0], [27.2, 16.0], [27.3, 16.0], [27.4, 16.0], [27.5, 16.0], [27.6, 16.0], [27.7, 17.0], [27.8, 17.0], [27.9, 17.0], [28.0, 17.0], [28.1, 17.0], [28.2, 17.0], [28.3, 17.0], [28.4, 17.0], [28.5, 17.0], [28.6, 17.0], [28.7, 17.0], [28.8, 17.0], [28.9, 17.0], [29.0, 17.0], [29.1, 18.0], [29.2, 18.0], [29.3, 18.0], [29.4, 18.0], [29.5, 18.0], [29.6, 18.0], [29.7, 18.0], [29.8, 18.0], [29.9, 18.0], [30.0, 18.0], [30.1, 18.0], [30.2, 18.0], [30.3, 18.0], [30.4, 18.0], [30.5, 18.0], [30.6, 18.0], [30.7, 19.0], [30.8, 19.0], [30.9, 19.0], [31.0, 19.0], [31.1, 19.0], [31.2, 19.0], [31.3, 19.0], [31.4, 19.0], [31.5, 19.0], [31.6, 19.0], [31.7, 19.0], [31.8, 19.0], [31.9, 19.0], [32.0, 19.0], [32.1, 19.0], [32.2, 19.0], [32.3, 20.0], [32.4, 20.0], [32.5, 20.0], [32.6, 20.0], [32.7, 20.0], [32.8, 20.0], [32.9, 20.0], [33.0, 20.0], [33.1, 20.0], [33.2, 20.0], [33.3, 20.0], [33.4, 20.0], [33.5, 20.0], [33.6, 20.0], [33.7, 20.0], [33.8, 20.0], [33.9, 20.0], [34.0, 21.0], [34.1, 21.0], [34.2, 21.0], [34.3, 21.0], [34.4, 21.0], [34.5, 21.0], [34.6, 21.0], [34.7, 21.0], [34.8, 21.0], [34.9, 21.0], [35.0, 21.0], [35.1, 22.0], [35.2, 22.0], [35.3, 22.0], [35.4, 22.0], [35.5, 22.0], [35.6, 22.0], [35.7, 22.0], [35.8, 22.0], [35.9, 22.0], [36.0, 22.0], [36.1, 22.0], [36.2, 22.0], [36.3, 23.0], [36.4, 23.0], [36.5, 23.0], [36.6, 23.0], [36.7, 23.0], [36.8, 23.0], [36.9, 23.0], [37.0, 23.0], [37.1, 23.0], [37.2, 23.0], [37.3, 24.0], [37.4, 24.0], [37.5, 24.0], [37.6, 24.0], [37.7, 24.0], [37.8, 24.0], [37.9, 24.0], [38.0, 24.0], [38.1, 24.0], [38.2, 24.0], [38.3, 25.0], [38.4, 25.0], [38.5, 25.0], [38.6, 25.0], [38.7, 25.0], [38.8, 25.0], [38.9, 25.0], [39.0, 25.0], [39.1, 26.0], [39.2, 26.0], [39.3, 26.0], [39.4, 26.0], [39.5, 26.0], [39.6, 26.0], [39.7, 26.0], [39.8, 26.0], [39.9, 26.0], [40.0, 27.0], [40.1, 27.0], [40.2, 27.0], [40.3, 27.0], [40.4, 27.0], [40.5, 27.0], [40.6, 27.0], [40.7, 27.0], [40.8, 27.0], [40.9, 28.0], [41.0, 28.0], [41.1, 28.0], [41.2, 28.0], [41.3, 28.0], [41.4, 28.0], [41.5, 28.0], [41.6, 28.0], [41.7, 29.0], [41.8, 29.0], [41.9, 29.0], [42.0, 29.0], [42.1, 29.0], [42.2, 29.0], [42.3, 30.0], [42.4, 30.0], [42.5, 30.0], [42.6, 30.0], [42.7, 30.0], [42.8, 30.0], [42.9, 30.0], [43.0, 31.0], [43.1, 31.0], [43.2, 31.0], [43.3, 31.0], [43.4, 31.0], [43.5, 32.0], [43.6, 32.0], [43.7, 33.0], [43.8, 33.0], [43.9, 33.0], [44.0, 34.0], [44.1, 34.0], [44.2, 35.0], [44.3, 36.0], [44.4, 36.0], [44.5, 36.0], [44.6, 37.0], [44.7, 38.0], [44.8, 38.0], [44.9, 38.0], [45.0, 39.0], [45.1, 40.0], [45.2, 42.0], [45.3, 43.0], [45.4, 45.0], [45.5, 49.0], [45.6, 52.0], [45.7, 65.0], [45.8, 101.0], [45.9, 107.0], [46.0, 109.0], [46.1, 110.0], [46.2, 111.0], [46.3, 112.0], [46.4, 113.0], [46.5, 114.0], [46.6, 114.0], [46.7, 115.0], [46.8, 115.0], [46.9, 115.0], [47.0, 116.0], [47.1, 116.0], [47.2, 117.0], [47.3, 117.0], [47.4, 118.0], [47.5, 118.0], [47.6, 119.0], [47.7, 119.0], [47.8, 120.0], [47.9, 120.0], [48.0, 120.0], [48.1, 121.0], [48.2, 122.0], [48.3, 122.0], [48.4, 123.0], [48.5, 124.0], [48.6, 124.0], [48.7, 125.0], [48.8, 126.0], [48.9, 127.0], [49.0, 127.0], [49.1, 128.0], [49.2, 128.0], [49.3, 129.0], [49.4, 130.0], [49.5, 131.0], [49.6, 131.0], [49.7, 132.0], [49.8, 132.0], [49.9, 133.0], [50.0, 133.0], [50.1, 134.0], [50.2, 134.0], [50.3, 134.0], [50.4, 135.0], [50.5, 135.0], [50.6, 136.0], [50.7, 136.0], [50.8, 137.0], [50.9, 138.0], [51.0, 138.0], [51.1, 139.0], [51.2, 139.0], [51.3, 140.0], [51.4, 140.0], [51.5, 141.0], [51.6, 142.0], [51.7, 143.0], [51.8, 144.0], [51.9, 144.0], [52.0, 146.0], [52.1, 146.0], [52.2, 147.0], [52.3, 148.0], [52.4, 148.0], [52.5, 149.0], [52.6, 149.0], [52.7, 150.0], [52.8, 151.0], [52.9, 151.0], [53.0, 152.0], [53.1, 153.0], [53.2, 154.0], [53.3, 154.0], [53.4, 155.0], [53.5, 156.0], [53.6, 157.0], [53.7, 158.0], [53.8, 158.0], [53.9, 159.0], [54.0, 160.0], [54.1, 161.0], [54.2, 162.0], [54.3, 163.0], [54.4, 164.0], [54.5, 165.0], [54.6, 167.0], [54.7, 167.0], [54.8, 168.0], [54.9, 168.0], [55.0, 169.0], [55.1, 170.0], [55.2, 171.0], [55.3, 171.0], [55.4, 173.0], [55.5, 174.0], [55.6, 174.0], [55.7, 175.0], [55.8, 177.0], [55.9, 179.0], [56.0, 180.0], [56.1, 181.0], [56.2, 182.0], [56.3, 183.0], [56.4, 183.0], [56.5, 184.0], [56.6, 185.0], [56.7, 186.0], [56.8, 187.0], [56.9, 188.0], [57.0, 189.0], [57.1, 190.0], [57.2, 192.0], [57.3, 194.0], [57.4, 194.0], [57.5, 195.0], [57.6, 196.0], [57.7, 198.0], [57.8, 198.0], [57.9, 200.0], [58.0, 201.0], [58.1, 203.0], [58.2, 204.0], [58.3, 205.0], [58.4, 207.0], [58.5, 208.0], [58.6, 209.0], [58.7, 209.0], [58.8, 210.0], [58.9, 211.0], [59.0, 212.0], [59.1, 214.0], [59.2, 216.0], [59.3, 216.0], [59.4, 217.0], [59.5, 218.0], [59.6, 219.0], [59.7, 220.0], [59.8, 222.0], [59.9, 223.0], [60.0, 224.0], [60.1, 225.0], [60.2, 225.0], [60.3, 226.0], [60.4, 227.0], [60.5, 229.0], [60.6, 230.0], [60.7, 230.0], [60.8, 231.0], [60.9, 232.0], [61.0, 233.0], [61.1, 234.0], [61.2, 234.0], [61.3, 235.0], [61.4, 236.0], [61.5, 238.0], [61.6, 239.0], [61.7, 239.0], [61.8, 240.0], [61.9, 242.0], [62.0, 243.0], [62.1, 243.0], [62.2, 244.0], [62.3, 245.0], [62.4, 245.0], [62.5, 246.0], [62.6, 247.0], [62.7, 248.0], [62.8, 248.0], [62.9, 249.0], [63.0, 250.0], [63.1, 250.0], [63.2, 251.0], [63.3, 251.0], [63.4, 252.0], [63.5, 253.0], [63.6, 254.0], [63.7, 255.0], [63.8, 256.0], [63.9, 256.0], [64.0, 257.0], [64.1, 258.0], [64.2, 258.0], [64.3, 259.0], [64.4, 259.0], [64.5, 260.0], [64.6, 262.0], [64.7, 263.0], [64.8, 264.0], [64.9, 264.0], [65.0, 265.0], [65.1, 267.0], [65.2, 268.0], [65.3, 269.0], [65.4, 270.0], [65.5, 270.0], [65.6, 271.0], [65.7, 271.0], [65.8, 272.0], [65.9, 272.0], [66.0, 273.0], [66.1, 274.0], [66.2, 275.0], [66.3, 276.0], [66.4, 277.0], [66.5, 278.0], [66.6, 278.0], [66.7, 279.0], [66.8, 280.0], [66.9, 280.0], [67.0, 280.0], [67.1, 281.0], [67.2, 282.0], [67.3, 283.0], [67.4, 284.0], [67.5, 286.0], [67.6, 287.0], [67.7, 288.0], [67.8, 289.0], [67.9, 290.0], [68.0, 291.0], [68.1, 292.0], [68.2, 293.0], [68.3, 294.0], [68.4, 295.0], [68.5, 297.0], [68.6, 297.0], [68.7, 298.0], [68.8, 299.0], [68.9, 299.0], [69.0, 300.0], [69.1, 300.0], [69.2, 302.0], [69.3, 303.0], [69.4, 304.0], [69.5, 306.0], [69.6, 306.0], [69.7, 307.0], [69.8, 308.0], [69.9, 309.0], [70.0, 311.0], [70.1, 312.0], [70.2, 314.0], [70.3, 315.0], [70.4, 316.0], [70.5, 316.0], [70.6, 317.0], [70.7, 318.0], [70.8, 319.0], [70.9, 320.0], [71.0, 320.0], [71.1, 322.0], [71.2, 323.0], [71.3, 324.0], [71.4, 325.0], [71.5, 326.0], [71.6, 327.0], [71.7, 327.0], [71.8, 328.0], [71.9, 329.0], [72.0, 331.0], [72.1, 332.0], [72.2, 333.0], [72.3, 334.0], [72.4, 336.0], [72.5, 336.0], [72.6, 338.0], [72.7, 338.0], [72.8, 339.0], [72.9, 340.0], [73.0, 341.0], [73.1, 343.0], [73.2, 343.0], [73.3, 345.0], [73.4, 346.0], [73.5, 347.0], [73.6, 347.0], [73.7, 348.0], [73.8, 350.0], [73.9, 351.0], [74.0, 352.0], [74.1, 354.0], [74.2, 355.0], [74.3, 356.0], [74.4, 358.0], [74.5, 359.0], [74.6, 361.0], [74.7, 362.0], [74.8, 363.0], [74.9, 364.0], [75.0, 365.0], [75.1, 366.0], [75.2, 367.0], [75.3, 368.0], [75.4, 370.0], [75.5, 371.0], [75.6, 373.0], [75.7, 374.0], [75.8, 377.0], [75.9, 379.0], [76.0, 382.0], [76.1, 384.0], [76.2, 385.0], [76.3, 385.0], [76.4, 387.0], [76.5, 389.0], [76.6, 390.0], [76.7, 391.0], [76.8, 392.0], [76.9, 393.0], [77.0, 396.0], [77.1, 397.0], [77.2, 398.0], [77.3, 399.0], [77.4, 400.0], [77.5, 401.0], [77.6, 403.0], [77.7, 404.0], [77.8, 405.0], [77.9, 407.0], [78.0, 409.0], [78.1, 409.0], [78.2, 413.0], [78.3, 414.0], [78.4, 416.0], [78.5, 418.0], [78.6, 419.0], [78.7, 423.0], [78.8, 423.0], [78.9, 425.0], [79.0, 426.0], [79.1, 427.0], [79.2, 428.0], [79.3, 430.0], [79.4, 433.0], [79.5, 435.0], [79.6, 437.0], [79.7, 438.0], [79.8, 439.0], [79.9, 441.0], [80.0, 443.0], [80.1, 444.0], [80.2, 447.0], [80.3, 449.0], [80.4, 450.0], [80.5, 452.0], [80.6, 453.0], [80.7, 455.0], [80.8, 456.0], [80.9, 458.0], [81.0, 459.0], [81.1, 463.0], [81.2, 464.0], [81.3, 466.0], [81.4, 468.0], [81.5, 469.0], [81.6, 472.0], [81.7, 475.0], [81.8, 476.0], [81.9, 477.0], [82.0, 479.0], [82.1, 482.0], [82.2, 483.0], [82.3, 485.0], [82.4, 488.0], [82.5, 490.0], [82.6, 492.0], [82.7, 494.0], [82.8, 496.0], [82.9, 499.0], [83.0, 502.0], [83.1, 504.0], [83.2, 507.0], [83.3, 509.0], [83.4, 511.0], [83.5, 513.0], [83.6, 517.0], [83.7, 520.0], [83.8, 522.0], [83.9, 526.0], [84.0, 530.0], [84.1, 534.0], [84.2, 536.0], [84.3, 538.0], [84.4, 541.0], [84.5, 542.0], [84.6, 543.0], [84.7, 546.0], [84.8, 549.0], [84.9, 552.0], [85.0, 554.0], [85.1, 556.0], [85.2, 557.0], [85.3, 559.0], [85.4, 562.0], [85.5, 564.0], [85.6, 568.0], [85.7, 570.0], [85.8, 573.0], [85.9, 575.0], [86.0, 576.0], [86.1, 578.0], [86.2, 581.0], [86.3, 584.0], [86.4, 585.0], [86.5, 589.0], [86.6, 591.0], [86.7, 601.0], [86.8, 602.0], [86.9, 604.0], [87.0, 607.0], [87.1, 609.0], [87.2, 611.0], [87.3, 613.0], [87.4, 615.0], [87.5, 619.0], [87.6, 622.0], [87.7, 624.0], [87.8, 626.0], [87.9, 628.0], [88.0, 631.0], [88.1, 636.0], [88.2, 639.0], [88.3, 645.0], [88.4, 649.0], [88.5, 652.0], [88.6, 657.0], [88.7, 659.0], [88.8, 662.0], [88.9, 666.0], [89.0, 669.0], [89.1, 672.0], [89.2, 675.0], [89.3, 678.0], [89.4, 683.0], [89.5, 684.0], [89.6, 687.0], [89.7, 691.0], [89.8, 692.0], [89.9, 696.0], [90.0, 698.0], [90.1, 704.0], [90.2, 708.0], [90.3, 712.0], [90.4, 714.0], [90.5, 721.0], [90.6, 723.0], [90.7, 727.0], [90.8, 733.0], [90.9, 737.0], [91.0, 740.0], [91.1, 749.0], [91.2, 749.0], [91.3, 755.0], [91.4, 761.0], [91.5, 764.0], [91.6, 774.0], [91.7, 777.0], [91.8, 781.0], [91.9, 783.0], [92.0, 787.0], [92.1, 791.0], [92.2, 797.0], [92.3, 800.0], [92.4, 802.0], [92.5, 807.0], [92.6, 812.0], [92.7, 817.0], [92.8, 821.0], [92.9, 829.0], [93.0, 837.0], [93.1, 843.0], [93.2, 851.0], [93.3, 861.0], [93.4, 864.0], [93.5, 872.0], [93.6, 877.0], [93.7, 887.0], [93.8, 890.0], [93.9, 897.0], [94.0, 903.0], [94.1, 909.0], [94.2, 918.0], [94.3, 925.0], [94.4, 931.0], [94.5, 934.0], [94.6, 945.0], [94.7, 952.0], [94.8, 959.0], [94.9, 967.0], [95.0, 978.0], [95.1, 985.0], [95.2, 986.0], [95.3, 997.0], [95.4, 1006.0], [95.5, 1013.0], [95.6, 1022.0], [95.7, 1031.0], [95.8, 1036.0], [95.9, 1047.0], [96.0, 1057.0], [96.1, 1068.0], [96.2, 1078.0], [96.3, 1086.0], [96.4, 1101.0], [96.5, 1127.0], [96.6, 1145.0], [96.7, 1148.0], [96.8, 1165.0], [96.9, 1170.0], [97.0, 1183.0], [97.1, 1215.0], [97.2, 1231.0], [97.3, 1241.0], [97.4, 1255.0], [97.5, 1261.0], [97.6, 1276.0], [97.7, 1281.0], [97.8, 1300.0], [97.9, 1316.0], [98.0, 1326.0], [98.1, 1358.0], [98.2, 1364.0], [98.3, 1385.0], [98.4, 1430.0], [98.5, 1468.0], [98.6, 1485.0], [98.7, 1545.0], [98.8, 1570.0], [98.9, 1653.0], [99.0, 1695.0], [99.1, 1743.0], [99.2, 1883.0], [99.3, 1920.0], [99.4, 1989.0], [99.5, 2043.0], [99.6, 2103.0], [99.7, 2258.0], [99.8, 2318.0], [99.9, 2412.0], [100.0, 2787.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 2408.0, "series": [{"data": [[0.0, 2408.0], [600.0, 177.0], [700.0, 117.0], [800.0, 88.0], [900.0, 74.0], [1000.0, 55.0], [1100.0, 37.0], [1200.0, 37.0], [1300.0, 30.0], [1400.0, 13.0], [1500.0, 12.0], [100.0, 636.0], [1600.0, 9.0], [1700.0, 5.0], [1800.0, 8.0], [1900.0, 11.0], [2000.0, 6.0], [2100.0, 4.0], [2200.0, 6.0], [2300.0, 6.0], [2400.0, 2.0], [2500.0, 1.0], [2600.0, 2.0], [2700.0, 1.0], [200.0, 583.0], [300.0, 444.0], [400.0, 292.0], [500.0, 198.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 2700.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 73.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 4365.0, "series": [{"data": [[0.0, 4365.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 824.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 73.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.9485488126649, "minX": 1.60409922E12, "maxY": 10.0, "series": [{"data": [[1.60409928E12, 10.0], [1.60409934E12, 9.978313253012047], [1.60409922E12, 9.9485488126649]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60409934E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 254.4, "minX": 1.0, "maxY": 1255.0, "series": [{"data": [[4.0, 254.4], [8.0, 1255.0], [2.0, 968.0], [1.0, 1028.0], [9.0, 648.6666666666667], [10.0, 258.41502956322694], [5.0, 993.0], [6.0, 544.5], [3.0, 1237.0], [7.0, 608.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.9840364880274, 259.8042569365262]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 6511.183333333333, "minX": 1.60409922E12, "maxY": 2045775.9333333333, "series": [{"data": [[1.60409928E12, 2045775.9333333333], [1.60409934E12, 1846198.9166666667], [1.60409922E12, 680077.6666666666]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60409928E12, 20696.183333333334], [1.60409934E12, 18283.583333333332], [1.60409922E12, 6511.183333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60409934E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 248.39440098806068, "minX": 1.60409922E12, "maxY": 307.34036939313995, "series": [{"data": [[1.60409928E12, 248.39440098806068], [1.60409934E12, 255.79566265060274], [1.60409922E12, 307.34036939313995]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60409934E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 247.8773157678056, "minX": 1.60409922E12, "maxY": 306.72691292875953, "series": [{"data": [[1.60409928E12, 247.8773157678056], [1.60409934E12, 255.32530120481908], [1.60409922E12, 306.72691292875953]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60409934E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.005301204819277109, "minX": 1.60409922E12, "maxY": 0.14379947229551437, "series": [{"data": [[1.60409928E12, 0.009057225195553749], [1.60409934E12, 0.005301204819277109], [1.60409922E12, 0.14379947229551437]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60409934E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 5.0, "minX": 1.60409922E12, "maxY": 2787.0, "series": [{"data": [[1.60409928E12, 2680.0], [1.60409934E12, 2787.0], [1.60409922E12, 2412.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60409928E12, 6.0], [1.60409934E12, 6.0], [1.60409922E12, 6.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60409928E12, 6.0], [1.60409934E12, 6.0], [1.60409922E12, 6.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60409928E12, 6.0], [1.60409934E12, 6.0], [1.60409922E12, 6.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60409928E12, 5.0], [1.60409934E12, 5.0], [1.60409922E12, 6.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60409928E12, 132.0], [1.60409934E12, 61.0], [1.60409922E12, 159.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60409934E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 13.0, "minX": 4.0, "maxY": 1028.0, "series": [{"data": [[4.0, 289.5], [5.0, 1028.0], [8.0, 589.0], [9.0, 953.0], [10.0, 889.0], [11.0, 840.5], [12.0, 511.0], [13.0, 774.0], [14.0, 1013.0], [15.0, 423.0], [16.0, 794.5], [17.0, 487.0], [18.0, 421.0], [19.0, 751.0], [20.0, 414.5], [21.0, 470.0], [22.0, 409.0], [23.0, 381.0], [25.0, 316.0], [26.0, 343.0], [27.0, 337.5], [28.0, 25.0], [29.0, 286.5], [30.0, 18.0], [31.0, 297.0], [32.0, 260.0], [34.0, 18.0], [35.0, 174.0], [37.0, 171.0], [38.0, 136.0], [39.0, 200.0], [40.0, 181.5], [42.0, 258.0], [43.0, 25.0], [45.0, 35.5], [44.0, 25.0], [47.0, 127.0], [46.0, 177.5], [49.0, 29.0], [50.0, 27.0], [53.0, 20.0], [55.0, 23.0], [57.0, 139.5], [56.0, 148.0], [58.0, 26.0], [60.0, 16.0], [62.0, 24.5], [66.0, 140.5], [64.0, 123.0], [65.0, 138.0], [73.0, 19.0], [76.0, 17.0], [77.0, 14.0], [80.0, 23.0], [85.0, 14.0], [88.0, 20.5], [96.0, 18.0], [103.0, 17.0], [113.0, 17.0], [117.0, 15.0], [124.0, 13.0], [142.0, 16.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 142.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 13.0, "minX": 4.0, "maxY": 1028.0, "series": [{"data": [[4.0, 286.0], [5.0, 1028.0], [8.0, 584.5], [9.0, 952.0], [10.0, 889.0], [11.0, 828.0], [12.0, 510.0], [13.0, 773.0], [14.0, 1013.0], [15.0, 418.5], [16.0, 794.0], [17.0, 485.0], [18.0, 420.5], [19.0, 748.0], [20.0, 414.5], [21.0, 470.0], [22.0, 408.5], [23.0, 380.5], [25.0, 316.0], [26.0, 343.0], [27.0, 336.5], [28.0, 25.0], [29.0, 286.5], [30.0, 18.0], [31.0, 297.0], [32.0, 260.0], [34.0, 18.0], [35.0, 174.0], [37.0, 171.0], [38.0, 135.5], [39.0, 198.0], [40.0, 181.5], [42.0, 258.0], [43.0, 25.0], [45.0, 35.5], [44.0, 25.0], [47.0, 126.5], [46.0, 177.0], [49.0, 29.0], [50.0, 27.0], [53.0, 20.0], [55.0, 23.0], [57.0, 139.0], [56.0, 148.0], [58.0, 26.0], [60.0, 16.0], [62.0, 24.5], [66.0, 140.5], [64.0, 123.0], [65.0, 138.0], [73.0, 19.0], [76.0, 17.0], [77.0, 14.0], [80.0, 23.0], [85.0, 14.0], [88.0, 20.5], [96.0, 18.0], [103.0, 17.0], [113.0, 17.0], [117.0, 15.0], [124.0, 13.0], [142.0, 16.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 142.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 12.8, "minX": 1.60409922E12, "maxY": 40.483333333333334, "series": [{"data": [[1.60409928E12, 40.483333333333334], [1.60409934E12, 34.416666666666664], [1.60409922E12, 12.8]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60409934E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 12.633333333333333, "minX": 1.60409922E12, "maxY": 40.483333333333334, "series": [{"data": [[1.60409928E12, 40.483333333333334], [1.60409934E12, 34.583333333333336], [1.60409922E12, 12.633333333333333]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60409934E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 12.633333333333333, "minX": 1.60409922E12, "maxY": 40.483333333333334, "series": [{"data": [[1.60409928E12, 40.483333333333334], [1.60409934E12, 34.583333333333336], [1.60409922E12, 12.633333333333333]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60409934E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 12.633333333333333, "minX": 1.60409922E12, "maxY": 40.483333333333334, "series": [{"data": [[1.60409928E12, 40.483333333333334], [1.60409934E12, 34.583333333333336], [1.60409922E12, 12.633333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60409934E12, "title": "Total Transactions Per Second"}},
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

