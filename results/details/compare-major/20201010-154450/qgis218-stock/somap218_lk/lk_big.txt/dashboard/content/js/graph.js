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
        data: {"result": {"minY": 5.0, "minX": 0.0, "maxY": 90094.0, "series": [{"data": [[0.0, 5.0], [0.1, 5.0], [0.2, 6.0], [0.3, 6.0], [0.4, 6.0], [0.5, 6.0], [0.6, 6.0], [0.7, 6.0], [0.8, 6.0], [0.9, 6.0], [1.0, 6.0], [1.1, 6.0], [1.2, 6.0], [1.3, 6.0], [1.4, 6.0], [1.5, 6.0], [1.6, 6.0], [1.7, 6.0], [1.8, 6.0], [1.9, 6.0], [2.0, 7.0], [2.1, 7.0], [2.2, 7.0], [2.3, 7.0], [2.4, 7.0], [2.5, 7.0], [2.6, 7.0], [2.7, 7.0], [2.8, 7.0], [2.9, 7.0], [3.0, 7.0], [3.1, 7.0], [3.2, 7.0], [3.3, 7.0], [3.4, 7.0], [3.5, 7.0], [3.6, 7.0], [3.7, 7.0], [3.8, 7.0], [3.9, 7.0], [4.0, 7.0], [4.1, 7.0], [4.2, 7.0], [4.3, 7.0], [4.4, 7.0], [4.5, 7.0], [4.6, 7.0], [4.7, 8.0], [4.8, 8.0], [4.9, 8.0], [5.0, 8.0], [5.1, 8.0], [5.2, 8.0], [5.3, 8.0], [5.4, 8.0], [5.5, 8.0], [5.6, 8.0], [5.7, 8.0], [5.8, 8.0], [5.9, 8.0], [6.0, 8.0], [6.1, 8.0], [6.2, 8.0], [6.3, 8.0], [6.4, 8.0], [6.5, 8.0], [6.6, 8.0], [6.7, 8.0], [6.8, 8.0], [6.9, 8.0], [7.0, 8.0], [7.1, 8.0], [7.2, 8.0], [7.3, 8.0], [7.4, 8.0], [7.5, 8.0], [7.6, 8.0], [7.7, 8.0], [7.8, 9.0], [7.9, 9.0], [8.0, 9.0], [8.1, 9.0], [8.2, 9.0], [8.3, 9.0], [8.4, 9.0], [8.5, 9.0], [8.6, 9.0], [8.7, 9.0], [8.8, 9.0], [8.9, 9.0], [9.0, 9.0], [9.1, 9.0], [9.2, 9.0], [9.3, 9.0], [9.4, 9.0], [9.5, 9.0], [9.6, 9.0], [9.7, 9.0], [9.8, 9.0], [9.9, 9.0], [10.0, 9.0], [10.1, 9.0], [10.2, 9.0], [10.3, 9.0], [10.4, 9.0], [10.5, 9.0], [10.6, 9.0], [10.7, 9.0], [10.8, 9.0], [10.9, 9.0], [11.0, 9.0], [11.1, 9.0], [11.2, 10.0], [11.3, 10.0], [11.4, 10.0], [11.5, 10.0], [11.6, 10.0], [11.7, 10.0], [11.8, 10.0], [11.9, 10.0], [12.0, 10.0], [12.1, 10.0], [12.2, 10.0], [12.3, 10.0], [12.4, 10.0], [12.5, 10.0], [12.6, 10.0], [12.7, 10.0], [12.8, 10.0], [12.9, 10.0], [13.0, 10.0], [13.1, 10.0], [13.2, 10.0], [13.3, 10.0], [13.4, 10.0], [13.5, 10.0], [13.6, 10.0], [13.7, 10.0], [13.8, 10.0], [13.9, 10.0], [14.0, 11.0], [14.1, 11.0], [14.2, 11.0], [14.3, 11.0], [14.4, 11.0], [14.5, 11.0], [14.6, 11.0], [14.7, 11.0], [14.8, 11.0], [14.9, 11.0], [15.0, 11.0], [15.1, 11.0], [15.2, 11.0], [15.3, 11.0], [15.4, 11.0], [15.5, 11.0], [15.6, 11.0], [15.7, 11.0], [15.8, 11.0], [15.9, 11.0], [16.0, 11.0], [16.1, 11.0], [16.2, 11.0], [16.3, 11.0], [16.4, 11.0], [16.5, 11.0], [16.6, 12.0], [16.7, 12.0], [16.8, 12.0], [16.9, 12.0], [17.0, 12.0], [17.1, 12.0], [17.2, 12.0], [17.3, 12.0], [17.4, 12.0], [17.5, 12.0], [17.6, 12.0], [17.7, 12.0], [17.8, 12.0], [17.9, 12.0], [18.0, 12.0], [18.1, 12.0], [18.2, 12.0], [18.3, 12.0], [18.4, 12.0], [18.5, 12.0], [18.6, 12.0], [18.7, 12.0], [18.8, 12.0], [18.9, 13.0], [19.0, 13.0], [19.1, 13.0], [19.2, 13.0], [19.3, 13.0], [19.4, 13.0], [19.5, 13.0], [19.6, 13.0], [19.7, 13.0], [19.8, 13.0], [19.9, 13.0], [20.0, 13.0], [20.1, 13.0], [20.2, 13.0], [20.3, 13.0], [20.4, 13.0], [20.5, 13.0], [20.6, 13.0], [20.7, 13.0], [20.8, 13.0], [20.9, 13.0], [21.0, 14.0], [21.1, 14.0], [21.2, 14.0], [21.3, 14.0], [21.4, 14.0], [21.5, 14.0], [21.6, 14.0], [21.7, 14.0], [21.8, 14.0], [21.9, 14.0], [22.0, 14.0], [22.1, 14.0], [22.2, 14.0], [22.3, 14.0], [22.4, 14.0], [22.5, 14.0], [22.6, 14.0], [22.7, 15.0], [22.8, 15.0], [22.9, 15.0], [23.0, 15.0], [23.1, 15.0], [23.2, 15.0], [23.3, 15.0], [23.4, 15.0], [23.5, 15.0], [23.6, 15.0], [23.7, 15.0], [23.8, 15.0], [23.9, 15.0], [24.0, 15.0], [24.1, 15.0], [24.2, 15.0], [24.3, 15.0], [24.4, 15.0], [24.5, 15.0], [24.6, 15.0], [24.7, 15.0], [24.8, 16.0], [24.9, 16.0], [25.0, 16.0], [25.1, 16.0], [25.2, 16.0], [25.3, 16.0], [25.4, 16.0], [25.5, 16.0], [25.6, 16.0], [25.7, 16.0], [25.8, 16.0], [25.9, 16.0], [26.0, 16.0], [26.1, 16.0], [26.2, 16.0], [26.3, 16.0], [26.4, 16.0], [26.5, 17.0], [26.6, 17.0], [26.7, 17.0], [26.8, 17.0], [26.9, 17.0], [27.0, 17.0], [27.1, 17.0], [27.2, 17.0], [27.3, 17.0], [27.4, 17.0], [27.5, 17.0], [27.6, 17.0], [27.7, 17.0], [27.8, 17.0], [27.9, 17.0], [28.0, 17.0], [28.1, 17.0], [28.2, 18.0], [28.3, 18.0], [28.4, 18.0], [28.5, 18.0], [28.6, 18.0], [28.7, 18.0], [28.8, 18.0], [28.9, 18.0], [29.0, 18.0], [29.1, 18.0], [29.2, 18.0], [29.3, 18.0], [29.4, 18.0], [29.5, 18.0], [29.6, 18.0], [29.7, 18.0], [29.8, 19.0], [29.9, 19.0], [30.0, 19.0], [30.1, 19.0], [30.2, 19.0], [30.3, 19.0], [30.4, 19.0], [30.5, 19.0], [30.6, 19.0], [30.7, 19.0], [30.8, 19.0], [30.9, 19.0], [31.0, 19.0], [31.1, 19.0], [31.2, 19.0], [31.3, 20.0], [31.4, 20.0], [31.5, 20.0], [31.6, 20.0], [31.7, 20.0], [31.8, 20.0], [31.9, 20.0], [32.0, 20.0], [32.1, 20.0], [32.2, 20.0], [32.3, 20.0], [32.4, 20.0], [32.5, 20.0], [32.6, 20.0], [32.7, 20.0], [32.8, 21.0], [32.9, 21.0], [33.0, 21.0], [33.1, 21.0], [33.2, 21.0], [33.3, 21.0], [33.4, 21.0], [33.5, 21.0], [33.6, 21.0], [33.7, 21.0], [33.8, 21.0], [33.9, 21.0], [34.0, 21.0], [34.1, 21.0], [34.2, 22.0], [34.3, 22.0], [34.4, 22.0], [34.5, 22.0], [34.6, 22.0], [34.7, 22.0], [34.8, 22.0], [34.9, 22.0], [35.0, 22.0], [35.1, 22.0], [35.2, 22.0], [35.3, 22.0], [35.4, 22.0], [35.5, 23.0], [35.6, 23.0], [35.7, 23.0], [35.8, 23.0], [35.9, 23.0], [36.0, 23.0], [36.1, 23.0], [36.2, 23.0], [36.3, 23.0], [36.4, 23.0], [36.5, 23.0], [36.6, 24.0], [36.7, 24.0], [36.8, 24.0], [36.9, 24.0], [37.0, 24.0], [37.1, 24.0], [37.2, 24.0], [37.3, 24.0], [37.4, 24.0], [37.5, 24.0], [37.6, 25.0], [37.7, 25.0], [37.8, 25.0], [37.9, 25.0], [38.0, 25.0], [38.1, 25.0], [38.2, 25.0], [38.3, 25.0], [38.4, 25.0], [38.5, 26.0], [38.6, 26.0], [38.7, 26.0], [38.8, 26.0], [38.9, 26.0], [39.0, 26.0], [39.1, 26.0], [39.2, 26.0], [39.3, 26.0], [39.4, 27.0], [39.5, 27.0], [39.6, 27.0], [39.7, 27.0], [39.8, 27.0], [39.9, 27.0], [40.0, 27.0], [40.1, 28.0], [40.2, 28.0], [40.3, 28.0], [40.4, 28.0], [40.5, 28.0], [40.6, 28.0], [40.7, 28.0], [40.8, 29.0], [40.9, 29.0], [41.0, 29.0], [41.1, 29.0], [41.2, 29.0], [41.3, 29.0], [41.4, 30.0], [41.5, 30.0], [41.6, 30.0], [41.7, 31.0], [41.8, 31.0], [41.9, 31.0], [42.0, 31.0], [42.1, 32.0], [42.2, 32.0], [42.3, 32.0], [42.4, 32.0], [42.5, 32.0], [42.6, 33.0], [42.7, 33.0], [42.8, 34.0], [42.9, 34.0], [43.0, 34.0], [43.1, 34.0], [43.2, 35.0], [43.3, 35.0], [43.4, 36.0], [43.5, 36.0], [43.6, 36.0], [43.7, 37.0], [43.8, 37.0], [43.9, 37.0], [44.0, 38.0], [44.1, 39.0], [44.2, 39.0], [44.3, 40.0], [44.4, 40.0], [44.5, 41.0], [44.6, 41.0], [44.7, 42.0], [44.8, 43.0], [44.9, 44.0], [45.0, 45.0], [45.1, 46.0], [45.2, 48.0], [45.3, 52.0], [45.4, 55.0], [45.5, 61.0], [45.6, 95.0], [45.7, 102.0], [45.8, 105.0], [45.9, 107.0], [46.0, 109.0], [46.1, 110.0], [46.2, 111.0], [46.3, 111.0], [46.4, 112.0], [46.5, 112.0], [46.6, 113.0], [46.7, 113.0], [46.8, 114.0], [46.9, 114.0], [47.0, 115.0], [47.1, 116.0], [47.2, 116.0], [47.3, 116.0], [47.4, 117.0], [47.5, 118.0], [47.6, 118.0], [47.7, 119.0], [47.8, 120.0], [47.9, 121.0], [48.0, 121.0], [48.1, 122.0], [48.2, 123.0], [48.3, 123.0], [48.4, 124.0], [48.5, 124.0], [48.6, 125.0], [48.7, 126.0], [48.8, 127.0], [48.9, 127.0], [49.0, 128.0], [49.1, 128.0], [49.2, 129.0], [49.3, 130.0], [49.4, 131.0], [49.5, 131.0], [49.6, 132.0], [49.7, 133.0], [49.8, 133.0], [49.9, 134.0], [50.0, 135.0], [50.1, 135.0], [50.2, 135.0], [50.3, 136.0], [50.4, 137.0], [50.5, 137.0], [50.6, 138.0], [50.7, 139.0], [50.8, 140.0], [50.9, 140.0], [51.0, 141.0], [51.1, 142.0], [51.2, 143.0], [51.3, 143.0], [51.4, 144.0], [51.5, 145.0], [51.6, 146.0], [51.7, 146.0], [51.8, 147.0], [51.9, 148.0], [52.0, 149.0], [52.1, 149.0], [52.2, 150.0], [52.3, 151.0], [52.4, 152.0], [52.5, 152.0], [52.6, 153.0], [52.7, 154.0], [52.8, 155.0], [52.9, 155.0], [53.0, 156.0], [53.1, 157.0], [53.2, 159.0], [53.3, 160.0], [53.4, 161.0], [53.5, 162.0], [53.6, 164.0], [53.7, 166.0], [53.8, 166.0], [53.9, 167.0], [54.0, 168.0], [54.1, 169.0], [54.2, 170.0], [54.3, 171.0], [54.4, 172.0], [54.5, 173.0], [54.6, 173.0], [54.7, 174.0], [54.8, 175.0], [54.9, 176.0], [55.0, 177.0], [55.1, 178.0], [55.2, 180.0], [55.3, 183.0], [55.4, 185.0], [55.5, 185.0], [55.6, 186.0], [55.7, 187.0], [55.8, 189.0], [55.9, 189.0], [56.0, 190.0], [56.1, 192.0], [56.2, 193.0], [56.3, 195.0], [56.4, 196.0], [56.5, 197.0], [56.6, 198.0], [56.7, 199.0], [56.8, 200.0], [56.9, 201.0], [57.0, 202.0], [57.1, 202.0], [57.2, 203.0], [57.3, 204.0], [57.4, 204.0], [57.5, 205.0], [57.6, 206.0], [57.7, 207.0], [57.8, 209.0], [57.9, 209.0], [58.0, 210.0], [58.1, 211.0], [58.2, 212.0], [58.3, 213.0], [58.4, 215.0], [58.5, 217.0], [58.6, 218.0], [58.7, 219.0], [58.8, 219.0], [58.9, 220.0], [59.0, 221.0], [59.1, 222.0], [59.2, 223.0], [59.3, 225.0], [59.4, 226.0], [59.5, 227.0], [59.6, 229.0], [59.7, 230.0], [59.8, 231.0], [59.9, 231.0], [60.0, 232.0], [60.1, 233.0], [60.2, 234.0], [60.3, 234.0], [60.4, 235.0], [60.5, 236.0], [60.6, 237.0], [60.7, 238.0], [60.8, 239.0], [60.9, 240.0], [61.0, 241.0], [61.1, 242.0], [61.2, 243.0], [61.3, 244.0], [61.4, 245.0], [61.5, 245.0], [61.6, 246.0], [61.7, 247.0], [61.8, 248.0], [61.9, 249.0], [62.0, 249.0], [62.1, 250.0], [62.2, 251.0], [62.3, 252.0], [62.4, 253.0], [62.5, 254.0], [62.6, 255.0], [62.7, 255.0], [62.8, 256.0], [62.9, 257.0], [63.0, 258.0], [63.1, 259.0], [63.2, 260.0], [63.3, 262.0], [63.4, 262.0], [63.5, 263.0], [63.6, 263.0], [63.7, 264.0], [63.8, 266.0], [63.9, 267.0], [64.0, 268.0], [64.1, 269.0], [64.2, 270.0], [64.3, 270.0], [64.4, 272.0], [64.5, 273.0], [64.6, 274.0], [64.7, 274.0], [64.8, 274.0], [64.9, 275.0], [65.0, 276.0], [65.1, 277.0], [65.2, 277.0], [65.3, 279.0], [65.4, 280.0], [65.5, 282.0], [65.6, 283.0], [65.7, 283.0], [65.8, 284.0], [65.9, 285.0], [66.0, 286.0], [66.1, 287.0], [66.2, 288.0], [66.3, 289.0], [66.4, 291.0], [66.5, 292.0], [66.6, 293.0], [66.7, 294.0], [66.8, 295.0], [66.9, 295.0], [67.0, 297.0], [67.1, 297.0], [67.2, 297.0], [67.3, 298.0], [67.4, 299.0], [67.5, 300.0], [67.6, 301.0], [67.7, 302.0], [67.8, 303.0], [67.9, 303.0], [68.0, 304.0], [68.1, 304.0], [68.2, 305.0], [68.3, 306.0], [68.4, 308.0], [68.5, 309.0], [68.6, 310.0], [68.7, 311.0], [68.8, 312.0], [68.9, 313.0], [69.0, 314.0], [69.1, 315.0], [69.2, 316.0], [69.3, 317.0], [69.4, 317.0], [69.5, 318.0], [69.6, 319.0], [69.7, 320.0], [69.8, 321.0], [69.9, 323.0], [70.0, 324.0], [70.1, 326.0], [70.2, 327.0], [70.3, 328.0], [70.4, 329.0], [70.5, 330.0], [70.6, 331.0], [70.7, 333.0], [70.8, 334.0], [70.9, 335.0], [71.0, 335.0], [71.1, 336.0], [71.2, 337.0], [71.3, 338.0], [71.4, 340.0], [71.5, 341.0], [71.6, 342.0], [71.7, 343.0], [71.8, 343.0], [71.9, 344.0], [72.0, 345.0], [72.1, 347.0], [72.2, 349.0], [72.3, 350.0], [72.4, 351.0], [72.5, 354.0], [72.6, 355.0], [72.7, 356.0], [72.8, 357.0], [72.9, 358.0], [73.0, 359.0], [73.1, 361.0], [73.2, 362.0], [73.3, 363.0], [73.4, 364.0], [73.5, 366.0], [73.6, 367.0], [73.7, 367.0], [73.8, 369.0], [73.9, 370.0], [74.0, 371.0], [74.1, 372.0], [74.2, 373.0], [74.3, 374.0], [74.4, 375.0], [74.5, 377.0], [74.6, 377.0], [74.7, 379.0], [74.8, 380.0], [74.9, 383.0], [75.0, 384.0], [75.1, 385.0], [75.2, 387.0], [75.3, 389.0], [75.4, 390.0], [75.5, 392.0], [75.6, 394.0], [75.7, 394.0], [75.8, 396.0], [75.9, 397.0], [76.0, 398.0], [76.1, 399.0], [76.2, 401.0], [76.3, 405.0], [76.4, 409.0], [76.5, 410.0], [76.6, 412.0], [76.7, 414.0], [76.8, 416.0], [76.9, 417.0], [77.0, 418.0], [77.1, 419.0], [77.2, 420.0], [77.3, 425.0], [77.4, 428.0], [77.5, 429.0], [77.6, 431.0], [77.7, 434.0], [77.8, 434.0], [77.9, 436.0], [78.0, 438.0], [78.1, 440.0], [78.2, 442.0], [78.3, 444.0], [78.4, 447.0], [78.5, 448.0], [78.6, 450.0], [78.7, 454.0], [78.8, 455.0], [78.9, 457.0], [79.0, 460.0], [79.1, 463.0], [79.2, 464.0], [79.3, 466.0], [79.4, 468.0], [79.5, 470.0], [79.6, 472.0], [79.7, 473.0], [79.8, 476.0], [79.9, 477.0], [80.0, 479.0], [80.1, 480.0], [80.2, 482.0], [80.3, 483.0], [80.4, 484.0], [80.5, 487.0], [80.6, 488.0], [80.7, 491.0], [80.8, 493.0], [80.9, 495.0], [81.0, 497.0], [81.1, 499.0], [81.2, 500.0], [81.3, 503.0], [81.4, 504.0], [81.5, 506.0], [81.6, 508.0], [81.7, 509.0], [81.8, 511.0], [81.9, 513.0], [82.0, 514.0], [82.1, 516.0], [82.2, 518.0], [82.3, 519.0], [82.4, 520.0], [82.5, 522.0], [82.6, 524.0], [82.7, 526.0], [82.8, 528.0], [82.9, 529.0], [83.0, 531.0], [83.1, 532.0], [83.2, 534.0], [83.3, 538.0], [83.4, 539.0], [83.5, 543.0], [83.6, 546.0], [83.7, 548.0], [83.8, 551.0], [83.9, 553.0], [84.0, 554.0], [84.1, 555.0], [84.2, 560.0], [84.3, 561.0], [84.4, 563.0], [84.5, 566.0], [84.6, 568.0], [84.7, 569.0], [84.8, 570.0], [84.9, 573.0], [85.0, 575.0], [85.1, 577.0], [85.2, 579.0], [85.3, 583.0], [85.4, 586.0], [85.5, 589.0], [85.6, 593.0], [85.7, 597.0], [85.8, 602.0], [85.9, 605.0], [86.0, 607.0], [86.1, 610.0], [86.2, 612.0], [86.3, 614.0], [86.4, 616.0], [86.5, 620.0], [86.6, 621.0], [86.7, 623.0], [86.8, 624.0], [86.9, 627.0], [87.0, 631.0], [87.1, 633.0], [87.2, 639.0], [87.3, 642.0], [87.4, 648.0], [87.5, 651.0], [87.6, 654.0], [87.7, 658.0], [87.8, 660.0], [87.9, 661.0], [88.0, 664.0], [88.1, 666.0], [88.2, 670.0], [88.3, 675.0], [88.4, 677.0], [88.5, 681.0], [88.6, 684.0], [88.7, 687.0], [88.8, 689.0], [88.9, 694.0], [89.0, 697.0], [89.1, 701.0], [89.2, 704.0], [89.3, 705.0], [89.4, 709.0], [89.5, 713.0], [89.6, 716.0], [89.7, 722.0], [89.8, 727.0], [89.9, 729.0], [90.0, 733.0], [90.1, 739.0], [90.2, 743.0], [90.3, 751.0], [90.4, 756.0], [90.5, 759.0], [90.6, 762.0], [90.7, 765.0], [90.8, 768.0], [90.9, 775.0], [91.0, 777.0], [91.1, 782.0], [91.2, 784.0], [91.3, 789.0], [91.4, 795.0], [91.5, 798.0], [91.6, 801.0], [91.7, 806.0], [91.8, 815.0], [91.9, 818.0], [92.0, 828.0], [92.1, 833.0], [92.2, 836.0], [92.3, 842.0], [92.4, 847.0], [92.5, 859.0], [92.6, 862.0], [92.7, 869.0], [92.8, 873.0], [92.9, 879.0], [93.0, 886.0], [93.1, 891.0], [93.2, 896.0], [93.3, 899.0], [93.4, 907.0], [93.5, 914.0], [93.6, 919.0], [93.7, 924.0], [93.8, 933.0], [93.9, 935.0], [94.0, 943.0], [94.1, 952.0], [94.2, 971.0], [94.3, 977.0], [94.4, 984.0], [94.5, 996.0], [94.6, 1004.0], [94.7, 1011.0], [94.8, 1016.0], [94.9, 1023.0], [95.0, 1029.0], [95.1, 1036.0], [95.2, 1045.0], [95.3, 1060.0], [95.4, 1071.0], [95.5, 1083.0], [95.6, 1101.0], [95.7, 1109.0], [95.8, 1115.0], [95.9, 1119.0], [96.0, 1136.0], [96.1, 1144.0], [96.2, 1147.0], [96.3, 1154.0], [96.4, 1167.0], [96.5, 1180.0], [96.6, 1196.0], [96.7, 1206.0], [96.8, 1224.0], [96.9, 1235.0], [97.0, 1250.0], [97.1, 1274.0], [97.2, 1311.0], [97.3, 1331.0], [97.4, 1352.0], [97.5, 1365.0], [97.6, 1385.0], [97.7, 1400.0], [97.8, 1418.0], [97.9, 1441.0], [98.0, 1461.0], [98.1, 1486.0], [98.2, 1531.0], [98.3, 1566.0], [98.4, 1591.0], [98.5, 1623.0], [98.6, 1741.0], [98.7, 1784.0], [98.8, 1931.0], [98.9, 2016.0], [99.0, 2064.0], [99.1, 2141.0], [99.2, 2198.0], [99.3, 2278.0], [99.4, 2430.0], [99.5, 2504.0], [99.6, 2735.0], [99.7, 2823.0], [99.8, 3240.0], [99.9, 90090.0], [100.0, 90094.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 2407.0, "series": [{"data": [[0.0, 2407.0], [600.0, 175.0], [700.0, 130.0], [800.0, 94.0], [900.0, 66.0], [1000.0, 55.0], [1100.0, 53.0], [1200.0, 31.0], [1300.0, 26.0], [1400.0, 23.0], [1500.0, 16.0], [100.0, 585.0], [1600.0, 6.0], [1700.0, 9.0], [1800.0, 3.0], [1900.0, 5.0], [2000.0, 12.0], [2100.0, 6.0], [2200.0, 6.0], [2300.0, 2.0], [2400.0, 7.0], [2500.0, 2.0], [2600.0, 3.0], [2700.0, 3.0], [2800.0, 5.0], [2900.0, 1.0], [3000.0, 1.0], [3100.0, 1.0], [200.0, 565.0], [3200.0, 1.0], [300.0, 455.0], [90000.0, 10.0], [400.0, 266.0], [500.0, 242.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 90000.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 10.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 4283.0, "series": [{"data": [[0.0, 4283.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 890.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 89.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 10.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 1.5, "minX": 1.6023447E12, "maxY": 10.0, "series": [{"data": [[1.602345E12, 1.5], [1.6023447E12, 9.97078651685392], [1.60234482E12, 10.0], [1.60234476E12, 10.0], [1.60234488E12, 9.984864864864864]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.602345E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 283.5, "minX": 1.0, "maxY": 90093.0, "series": [{"data": [[4.0, 283.5], [8.0, 812.5], [2.0, 90078.0], [1.0, 90093.0], [9.0, 584.6666666666666], [10.0, 409.4068151532456], [5.0, 1171.0], [3.0, 584.0], [6.0, 719.0], [7.0, 536.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.98406676783008, 443.983877086494]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 17.7, "minX": 1.6023447E12, "maxY": 1799414.7333333334, "series": [{"data": [[1.602345E12, 26.7], [1.6023447E12, 1417971.15], [1.60234482E12, 892337.4], [1.60234476E12, 462189.85], [1.60234488E12, 1799414.7333333334]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.602345E12, 17.7], [1.6023447E12, 11568.283333333333], [1.60234482E12, 13664.85], [1.60234476E12, 4071.15], [1.60234488E12, 16257.566666666668]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.602345E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 276.7313513513508, "minX": 1.6023447E12, "maxY": 90085.5, "series": [{"data": [[1.602345E12, 90085.5], [1.6023447E12, 324.9235955056181], [1.60234482E12, 654.9070769230766], [1.60234476E12, 327.308695652174], [1.60234488E12, 276.7313513513508]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.602345E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 276.2794594594593, "minX": 1.6023447E12, "maxY": 90085.0, "series": [{"data": [[1.602345E12, 90085.0], [1.6023447E12, 324.3011235955059], [1.60234482E12, 654.665846153846], [1.60234476E12, 326.563043478261], [1.60234488E12, 276.2794594594593]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.602345E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.6023447E12, "maxY": 0.08464419475655406, "series": [{"data": [[1.602345E12, 0.0], [1.6023447E12, 0.08464419475655406], [1.60234482E12, 0.005538461538461541], [1.60234476E12, 0.008695652173913037], [1.60234488E12, 0.007027027027027013]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.602345E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 5.0, "minX": 1.6023447E12, "maxY": 3240.0, "series": [{"data": [[1.6023447E12, 2814.0], [1.60234482E12, 3240.0], [1.60234476E12, 3127.0], [1.60234488E12, 2810.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6023447E12, 6.0239996814727785], [1.60234482E12, 6.0], [1.60234476E12, 5.148999890089035], [1.60234488E12, 6.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6023447E12, 7.0], [1.60234482E12, 6.0], [1.60234476E12, 5.563900043964386], [1.60234488E12, 6.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6023447E12, 6.691999840736388], [1.60234482E12, 6.0], [1.60234476E12, 5.379499945044517], [1.60234488E12, 6.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.6023447E12, 6.0], [1.60234482E12, 5.0], [1.60234476E12, 5.0], [1.60234488E12, 6.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6023447E12, 196.0], [1.60234482E12, 123.0], [1.60234476E12, 28.5], [1.60234488E12, 135.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60234488E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 13.0, "minX": 1.0, "maxY": 90094.0, "series": [{"data": [[2.0, 1063.5], [3.0, 632.5], [4.0, 565.5], [5.0, 239.5], [6.0, 434.0], [7.0, 585.0], [8.0, 381.5], [9.0, 349.0], [10.0, 325.5], [11.0, 415.5], [12.0, 24.5], [13.0, 525.5], [14.0, 692.5], [15.0, 32.0], [16.0, 539.5], [17.0, 485.0], [18.0, 283.5], [19.0, 373.0], [20.0, 457.0], [21.0, 156.0], [22.0, 509.5], [23.0, 290.5], [25.0, 317.5], [26.0, 302.0], [27.0, 268.0], [28.0, 297.0], [29.0, 30.0], [30.0, 195.0], [32.0, 28.0], [34.0, 248.5], [35.0, 33.0], [37.0, 136.0], [36.0, 229.0], [38.0, 21.5], [39.0, 15.0], [41.0, 17.5], [40.0, 124.0], [43.0, 24.0], [42.0, 230.0], [44.0, 139.0], [45.0, 16.0], [46.0, 194.0], [47.0, 155.0], [49.0, 52.0], [51.0, 149.0], [50.0, 148.0], [52.0, 209.0], [55.0, 23.0], [54.0, 21.0], [56.0, 124.0], [63.0, 17.0], [67.0, 21.0], [65.0, 140.0], [66.0, 19.0], [71.0, 20.0], [73.0, 20.0], [75.0, 13.0], [76.0, 13.5], [80.0, 20.5], [87.0, 20.0], [89.0, 19.0], [94.0, 14.0], [93.0, 14.0], [98.0, 19.0], [104.0, 15.5], [1.0, 1136.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[32.0, 90089.0], [1.0, 90085.5], [41.0, 90090.0], [23.0, 90093.0], [98.0, 90094.0], [55.0, 90089.5]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 104.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 13.0, "minX": 1.0, "maxY": 90094.0, "series": [{"data": [[2.0, 1063.5], [3.0, 632.0], [4.0, 564.0], [5.0, 239.5], [6.0, 434.0], [7.0, 583.0], [8.0, 380.5], [9.0, 349.0], [10.0, 325.5], [11.0, 415.5], [12.0, 24.5], [13.0, 524.5], [14.0, 692.0], [15.0, 32.0], [16.0, 530.5], [17.0, 484.5], [18.0, 283.5], [19.0, 373.0], [20.0, 456.5], [21.0, 156.0], [22.0, 508.5], [23.0, 290.5], [25.0, 317.5], [26.0, 302.0], [27.0, 268.0], [28.0, 296.5], [29.0, 30.0], [30.0, 194.0], [32.0, 28.0], [34.0, 248.5], [35.0, 33.0], [37.0, 136.0], [36.0, 229.0], [38.0, 21.0], [39.0, 15.0], [41.0, 17.5], [40.0, 124.0], [43.0, 24.0], [42.0, 230.0], [44.0, 139.0], [45.0, 16.0], [46.0, 194.0], [47.0, 155.0], [49.0, 52.0], [51.0, 149.0], [50.0, 147.5], [52.0, 209.0], [55.0, 23.0], [54.0, 21.0], [56.0, 124.0], [63.0, 17.0], [67.0, 21.0], [65.0, 140.0], [66.0, 19.0], [71.0, 20.0], [73.0, 20.0], [75.0, 13.0], [76.0, 13.5], [80.0, 20.5], [87.0, 20.0], [89.0, 19.0], [94.0, 14.0], [93.0, 14.0], [98.0, 19.0], [104.0, 15.5], [1.0, 1135.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[32.0, 90089.0], [1.0, 90085.0], [41.0, 90089.0], [23.0, 90093.0], [98.0, 90094.0], [55.0, 90089.5]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 104.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 7.666666666666667, "minX": 1.6023447E12, "maxY": 30.7, "series": [{"data": [[1.6023447E12, 22.416666666666668], [1.60234482E12, 27.083333333333332], [1.60234476E12, 7.666666666666667], [1.60234488E12, 30.7]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60234488E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.6023447E12, "maxY": 30.833333333333332, "series": [{"data": [[1.6023447E12, 22.25], [1.60234482E12, 26.95], [1.60234476E12, 7.666666666666667], [1.60234488E12, 30.833333333333332]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.602345E12, 0.03333333333333333], [1.60234482E12, 0.13333333333333333]], "isOverall": false, "label": "500", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.602345E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.6023447E12, "maxY": 30.833333333333332, "series": [{"data": [[1.6023447E12, 22.25], [1.60234482E12, 26.95], [1.60234476E12, 7.666666666666667], [1.60234488E12, 30.833333333333332]], "isOverall": false, "label": "HTTP Request-success", "isController": false}, {"data": [[1.602345E12, 0.03333333333333333], [1.60234482E12, 0.13333333333333333]], "isOverall": false, "label": "HTTP Request-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.602345E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.6023447E12, "maxY": 30.833333333333332, "series": [{"data": [[1.6023447E12, 22.25], [1.60234482E12, 26.95], [1.60234476E12, 7.666666666666667], [1.60234488E12, 30.833333333333332]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.602345E12, 0.03333333333333333], [1.60234482E12, 0.13333333333333333]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.602345E12, "title": "Total Transactions Per Second"}},
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

