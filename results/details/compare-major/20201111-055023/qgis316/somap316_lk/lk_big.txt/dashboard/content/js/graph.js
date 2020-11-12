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
        data: {"result": {"minY": 3.0, "minX": 0.0, "maxY": 4953.0, "series": [{"data": [[0.0, 3.0], [0.1, 3.0], [0.2, 3.0], [0.3, 4.0], [0.4, 4.0], [0.5, 4.0], [0.6, 4.0], [0.7, 4.0], [0.8, 4.0], [0.9, 4.0], [1.0, 4.0], [1.1, 4.0], [1.2, 4.0], [1.3, 4.0], [1.4, 4.0], [1.5, 4.0], [1.6, 4.0], [1.7, 4.0], [1.8, 4.0], [1.9, 4.0], [2.0, 4.0], [2.1, 4.0], [2.2, 4.0], [2.3, 4.0], [2.4, 4.0], [2.5, 5.0], [2.6, 5.0], [2.7, 5.0], [2.8, 5.0], [2.9, 5.0], [3.0, 5.0], [3.1, 5.0], [3.2, 5.0], [3.3, 5.0], [3.4, 5.0], [3.5, 5.0], [3.6, 5.0], [3.7, 5.0], [3.8, 5.0], [3.9, 5.0], [4.0, 5.0], [4.1, 5.0], [4.2, 5.0], [4.3, 5.0], [4.4, 5.0], [4.5, 5.0], [4.6, 5.0], [4.7, 5.0], [4.8, 5.0], [4.9, 5.0], [5.0, 5.0], [5.1, 5.0], [5.2, 5.0], [5.3, 5.0], [5.4, 5.0], [5.5, 5.0], [5.6, 5.0], [5.7, 5.0], [5.8, 5.0], [5.9, 5.0], [6.0, 5.0], [6.1, 5.0], [6.2, 5.0], [6.3, 5.0], [6.4, 6.0], [6.5, 6.0], [6.6, 6.0], [6.7, 6.0], [6.8, 6.0], [6.9, 6.0], [7.0, 6.0], [7.1, 6.0], [7.2, 6.0], [7.3, 6.0], [7.4, 6.0], [7.5, 6.0], [7.6, 6.0], [7.7, 6.0], [7.8, 6.0], [7.9, 6.0], [8.0, 6.0], [8.1, 6.0], [8.2, 6.0], [8.3, 6.0], [8.4, 6.0], [8.5, 6.0], [8.6, 6.0], [8.7, 6.0], [8.8, 6.0], [8.9, 6.0], [9.0, 6.0], [9.1, 6.0], [9.2, 6.0], [9.3, 6.0], [9.4, 6.0], [9.5, 6.0], [9.6, 6.0], [9.7, 6.0], [9.8, 6.0], [9.9, 6.0], [10.0, 6.0], [10.1, 6.0], [10.2, 6.0], [10.3, 6.0], [10.4, 6.0], [10.5, 6.0], [10.6, 6.0], [10.7, 6.0], [10.8, 6.0], [10.9, 6.0], [11.0, 6.0], [11.1, 6.0], [11.2, 7.0], [11.3, 7.0], [11.4, 7.0], [11.5, 7.0], [11.6, 7.0], [11.7, 7.0], [11.8, 7.0], [11.9, 7.0], [12.0, 7.0], [12.1, 7.0], [12.2, 7.0], [12.3, 7.0], [12.4, 7.0], [12.5, 7.0], [12.6, 7.0], [12.7, 7.0], [12.8, 7.0], [12.9, 7.0], [13.0, 7.0], [13.1, 7.0], [13.2, 7.0], [13.3, 7.0], [13.4, 7.0], [13.5, 7.0], [13.6, 7.0], [13.7, 7.0], [13.8, 7.0], [13.9, 7.0], [14.0, 7.0], [14.1, 7.0], [14.2, 7.0], [14.3, 7.0], [14.4, 7.0], [14.5, 7.0], [14.6, 7.0], [14.7, 7.0], [14.8, 7.0], [14.9, 7.0], [15.0, 7.0], [15.1, 7.0], [15.2, 7.0], [15.3, 7.0], [15.4, 7.0], [15.5, 7.0], [15.6, 7.0], [15.7, 7.0], [15.8, 7.0], [15.9, 7.0], [16.0, 7.0], [16.1, 7.0], [16.2, 7.0], [16.3, 7.0], [16.4, 7.0], [16.5, 7.0], [16.6, 7.0], [16.7, 7.0], [16.8, 7.0], [16.9, 8.0], [17.0, 8.0], [17.1, 8.0], [17.2, 8.0], [17.3, 8.0], [17.4, 8.0], [17.5, 8.0], [17.6, 8.0], [17.7, 8.0], [17.8, 8.0], [17.9, 8.0], [18.0, 8.0], [18.1, 8.0], [18.2, 8.0], [18.3, 8.0], [18.4, 8.0], [18.5, 8.0], [18.6, 8.0], [18.7, 8.0], [18.8, 8.0], [18.9, 8.0], [19.0, 8.0], [19.1, 8.0], [19.2, 8.0], [19.3, 8.0], [19.4, 8.0], [19.5, 8.0], [19.6, 8.0], [19.7, 8.0], [19.8, 8.0], [19.9, 8.0], [20.0, 8.0], [20.1, 8.0], [20.2, 8.0], [20.3, 8.0], [20.4, 8.0], [20.5, 8.0], [20.6, 8.0], [20.7, 8.0], [20.8, 8.0], [20.9, 8.0], [21.0, 8.0], [21.1, 8.0], [21.2, 8.0], [21.3, 8.0], [21.4, 8.0], [21.5, 8.0], [21.6, 9.0], [21.7, 9.0], [21.8, 9.0], [21.9, 9.0], [22.0, 9.0], [22.1, 9.0], [22.2, 9.0], [22.3, 9.0], [22.4, 9.0], [22.5, 9.0], [22.6, 9.0], [22.7, 9.0], [22.8, 9.0], [22.9, 9.0], [23.0, 9.0], [23.1, 9.0], [23.2, 9.0], [23.3, 9.0], [23.4, 9.0], [23.5, 9.0], [23.6, 9.0], [23.7, 9.0], [23.8, 9.0], [23.9, 9.0], [24.0, 9.0], [24.1, 9.0], [24.2, 9.0], [24.3, 9.0], [24.4, 9.0], [24.5, 9.0], [24.6, 9.0], [24.7, 9.0], [24.8, 9.0], [24.9, 9.0], [25.0, 9.0], [25.1, 9.0], [25.2, 10.0], [25.3, 10.0], [25.4, 10.0], [25.5, 10.0], [25.6, 10.0], [25.7, 10.0], [25.8, 10.0], [25.9, 10.0], [26.0, 10.0], [26.1, 10.0], [26.2, 10.0], [26.3, 10.0], [26.4, 10.0], [26.5, 10.0], [26.6, 10.0], [26.7, 10.0], [26.8, 10.0], [26.9, 10.0], [27.0, 10.0], [27.1, 10.0], [27.2, 10.0], [27.3, 10.0], [27.4, 10.0], [27.5, 10.0], [27.6, 11.0], [27.7, 11.0], [27.8, 11.0], [27.9, 11.0], [28.0, 11.0], [28.1, 11.0], [28.2, 11.0], [28.3, 11.0], [28.4, 11.0], [28.5, 11.0], [28.6, 11.0], [28.7, 11.0], [28.8, 11.0], [28.9, 11.0], [29.0, 11.0], [29.1, 11.0], [29.2, 11.0], [29.3, 11.0], [29.4, 11.0], [29.5, 12.0], [29.6, 12.0], [29.7, 12.0], [29.8, 12.0], [29.9, 12.0], [30.0, 12.0], [30.1, 12.0], [30.2, 12.0], [30.3, 12.0], [30.4, 12.0], [30.5, 12.0], [30.6, 12.0], [30.7, 12.0], [30.8, 12.0], [30.9, 12.0], [31.0, 12.0], [31.1, 13.0], [31.2, 13.0], [31.3, 13.0], [31.4, 13.0], [31.5, 13.0], [31.6, 13.0], [31.7, 13.0], [31.8, 13.0], [31.9, 13.0], [32.0, 13.0], [32.1, 13.0], [32.2, 13.0], [32.3, 13.0], [32.4, 13.0], [32.5, 14.0], [32.6, 14.0], [32.7, 14.0], [32.8, 14.0], [32.9, 14.0], [33.0, 14.0], [33.1, 14.0], [33.2, 14.0], [33.3, 14.0], [33.4, 14.0], [33.5, 14.0], [33.6, 14.0], [33.7, 15.0], [33.8, 15.0], [33.9, 15.0], [34.0, 15.0], [34.1, 15.0], [34.2, 15.0], [34.3, 15.0], [34.4, 15.0], [34.5, 15.0], [34.6, 15.0], [34.7, 15.0], [34.8, 16.0], [34.9, 16.0], [35.0, 16.0], [35.1, 16.0], [35.2, 16.0], [35.3, 16.0], [35.4, 16.0], [35.5, 16.0], [35.6, 17.0], [35.7, 17.0], [35.8, 17.0], [35.9, 17.0], [36.0, 17.0], [36.1, 17.0], [36.2, 18.0], [36.3, 18.0], [36.4, 18.0], [36.5, 19.0], [36.6, 19.0], [36.7, 19.0], [36.8, 19.0], [36.9, 19.0], [37.0, 20.0], [37.1, 20.0], [37.2, 20.0], [37.3, 20.0], [37.4, 20.0], [37.5, 21.0], [37.6, 21.0], [37.7, 21.0], [37.8, 22.0], [37.9, 22.0], [38.0, 22.0], [38.1, 23.0], [38.2, 23.0], [38.3, 24.0], [38.4, 24.0], [38.5, 24.0], [38.6, 24.0], [38.7, 25.0], [38.8, 25.0], [38.9, 26.0], [39.0, 26.0], [39.1, 27.0], [39.2, 27.0], [39.3, 28.0], [39.4, 29.0], [39.5, 30.0], [39.6, 32.0], [39.7, 33.0], [39.8, 33.0], [39.9, 35.0], [40.0, 36.0], [40.1, 37.0], [40.2, 38.0], [40.3, 38.0], [40.4, 38.0], [40.5, 39.0], [40.6, 39.0], [40.7, 40.0], [40.8, 40.0], [40.9, 41.0], [41.0, 41.0], [41.1, 42.0], [41.2, 42.0], [41.3, 43.0], [41.4, 43.0], [41.5, 43.0], [41.6, 44.0], [41.7, 44.0], [41.8, 45.0], [41.9, 45.0], [42.0, 46.0], [42.1, 46.0], [42.2, 47.0], [42.3, 47.0], [42.4, 48.0], [42.5, 49.0], [42.6, 50.0], [42.7, 51.0], [42.8, 52.0], [42.9, 52.0], [43.0, 53.0], [43.1, 54.0], [43.2, 55.0], [43.3, 56.0], [43.4, 58.0], [43.5, 59.0], [43.6, 59.0], [43.7, 60.0], [43.8, 63.0], [43.9, 63.0], [44.0, 64.0], [44.1, 65.0], [44.2, 66.0], [44.3, 67.0], [44.4, 68.0], [44.5, 69.0], [44.6, 70.0], [44.7, 71.0], [44.8, 72.0], [44.9, 72.0], [45.0, 73.0], [45.1, 74.0], [45.2, 75.0], [45.3, 76.0], [45.4, 77.0], [45.5, 78.0], [45.6, 79.0], [45.7, 79.0], [45.8, 81.0], [45.9, 81.0], [46.0, 82.0], [46.1, 82.0], [46.2, 83.0], [46.3, 83.0], [46.4, 83.0], [46.5, 84.0], [46.6, 84.0], [46.7, 85.0], [46.8, 85.0], [46.9, 86.0], [47.0, 86.0], [47.1, 87.0], [47.2, 87.0], [47.3, 88.0], [47.4, 88.0], [47.5, 89.0], [47.6, 89.0], [47.7, 90.0], [47.8, 91.0], [47.9, 92.0], [48.0, 93.0], [48.1, 94.0], [48.2, 95.0], [48.3, 96.0], [48.4, 96.0], [48.5, 97.0], [48.6, 98.0], [48.7, 100.0], [48.8, 100.0], [48.9, 101.0], [49.0, 102.0], [49.1, 102.0], [49.2, 104.0], [49.3, 105.0], [49.4, 107.0], [49.5, 108.0], [49.6, 110.0], [49.7, 111.0], [49.8, 112.0], [49.9, 113.0], [50.0, 114.0], [50.1, 116.0], [50.2, 117.0], [50.3, 118.0], [50.4, 119.0], [50.5, 120.0], [50.6, 121.0], [50.7, 124.0], [50.8, 125.0], [50.9, 126.0], [51.0, 127.0], [51.1, 129.0], [51.2, 130.0], [51.3, 132.0], [51.4, 133.0], [51.5, 134.0], [51.6, 135.0], [51.7, 136.0], [51.8, 137.0], [51.9, 138.0], [52.0, 139.0], [52.1, 140.0], [52.2, 141.0], [52.3, 143.0], [52.4, 144.0], [52.5, 145.0], [52.6, 146.0], [52.7, 147.0], [52.8, 147.0], [52.9, 148.0], [53.0, 149.0], [53.1, 150.0], [53.2, 150.0], [53.3, 151.0], [53.4, 152.0], [53.5, 153.0], [53.6, 155.0], [53.7, 157.0], [53.8, 157.0], [53.9, 158.0], [54.0, 159.0], [54.1, 160.0], [54.2, 160.0], [54.3, 161.0], [54.4, 161.0], [54.5, 162.0], [54.6, 163.0], [54.7, 163.0], [54.8, 164.0], [54.9, 166.0], [55.0, 168.0], [55.1, 169.0], [55.2, 170.0], [55.3, 171.0], [55.4, 171.0], [55.5, 173.0], [55.6, 173.0], [55.7, 175.0], [55.8, 176.0], [55.9, 178.0], [56.0, 178.0], [56.1, 179.0], [56.2, 180.0], [56.3, 181.0], [56.4, 182.0], [56.5, 184.0], [56.6, 186.0], [56.7, 186.0], [56.8, 187.0], [56.9, 188.0], [57.0, 189.0], [57.1, 190.0], [57.2, 191.0], [57.3, 192.0], [57.4, 193.0], [57.5, 194.0], [57.6, 195.0], [57.7, 196.0], [57.8, 197.0], [57.9, 197.0], [58.0, 199.0], [58.1, 199.0], [58.2, 200.0], [58.3, 201.0], [58.4, 202.0], [58.5, 203.0], [58.6, 203.0], [58.7, 204.0], [58.8, 205.0], [58.9, 206.0], [59.0, 206.0], [59.1, 208.0], [59.2, 209.0], [59.3, 210.0], [59.4, 210.0], [59.5, 211.0], [59.6, 211.0], [59.7, 213.0], [59.8, 214.0], [59.9, 215.0], [60.0, 216.0], [60.1, 217.0], [60.2, 218.0], [60.3, 219.0], [60.4, 221.0], [60.5, 222.0], [60.6, 223.0], [60.7, 223.0], [60.8, 224.0], [60.9, 225.0], [61.0, 226.0], [61.1, 227.0], [61.2, 228.0], [61.3, 229.0], [61.4, 229.0], [61.5, 230.0], [61.6, 231.0], [61.7, 233.0], [61.8, 234.0], [61.9, 235.0], [62.0, 236.0], [62.1, 238.0], [62.2, 239.0], [62.3, 240.0], [62.4, 241.0], [62.5, 242.0], [62.6, 244.0], [62.7, 246.0], [62.8, 247.0], [62.9, 248.0], [63.0, 251.0], [63.1, 252.0], [63.2, 253.0], [63.3, 255.0], [63.4, 256.0], [63.5, 258.0], [63.6, 260.0], [63.7, 260.0], [63.8, 263.0], [63.9, 264.0], [64.0, 266.0], [64.1, 268.0], [64.2, 270.0], [64.3, 271.0], [64.4, 272.0], [64.5, 275.0], [64.6, 278.0], [64.7, 279.0], [64.8, 280.0], [64.9, 285.0], [65.0, 286.0], [65.1, 287.0], [65.2, 288.0], [65.3, 291.0], [65.4, 293.0], [65.5, 296.0], [65.6, 298.0], [65.7, 300.0], [65.8, 301.0], [65.9, 303.0], [66.0, 304.0], [66.1, 304.0], [66.2, 305.0], [66.3, 306.0], [66.4, 307.0], [66.5, 309.0], [66.6, 309.0], [66.7, 310.0], [66.8, 311.0], [66.9, 312.0], [67.0, 312.0], [67.1, 313.0], [67.2, 315.0], [67.3, 316.0], [67.4, 317.0], [67.5, 318.0], [67.6, 319.0], [67.7, 320.0], [67.8, 320.0], [67.9, 321.0], [68.0, 324.0], [68.1, 325.0], [68.2, 325.0], [68.3, 326.0], [68.4, 328.0], [68.5, 329.0], [68.6, 331.0], [68.7, 331.0], [68.8, 334.0], [68.9, 335.0], [69.0, 337.0], [69.1, 340.0], [69.2, 341.0], [69.3, 343.0], [69.4, 345.0], [69.5, 347.0], [69.6, 348.0], [69.7, 349.0], [69.8, 350.0], [69.9, 351.0], [70.0, 352.0], [70.1, 353.0], [70.2, 354.0], [70.3, 357.0], [70.4, 360.0], [70.5, 361.0], [70.6, 362.0], [70.7, 363.0], [70.8, 364.0], [70.9, 366.0], [71.0, 368.0], [71.1, 369.0], [71.2, 371.0], [71.3, 371.0], [71.4, 372.0], [71.5, 373.0], [71.6, 374.0], [71.7, 375.0], [71.8, 377.0], [71.9, 378.0], [72.0, 381.0], [72.1, 382.0], [72.2, 385.0], [72.3, 387.0], [72.4, 387.0], [72.5, 389.0], [72.6, 393.0], [72.7, 395.0], [72.8, 398.0], [72.9, 399.0], [73.0, 401.0], [73.1, 402.0], [73.2, 404.0], [73.3, 405.0], [73.4, 406.0], [73.5, 407.0], [73.6, 409.0], [73.7, 410.0], [73.8, 412.0], [73.9, 413.0], [74.0, 414.0], [74.1, 416.0], [74.2, 417.0], [74.3, 418.0], [74.4, 420.0], [74.5, 421.0], [74.6, 425.0], [74.7, 427.0], [74.8, 429.0], [74.9, 432.0], [75.0, 435.0], [75.1, 436.0], [75.2, 438.0], [75.3, 440.0], [75.4, 442.0], [75.5, 445.0], [75.6, 448.0], [75.7, 450.0], [75.8, 452.0], [75.9, 454.0], [76.0, 457.0], [76.1, 459.0], [76.2, 460.0], [76.3, 463.0], [76.4, 464.0], [76.5, 465.0], [76.6, 466.0], [76.7, 468.0], [76.8, 469.0], [76.9, 471.0], [77.0, 471.0], [77.1, 474.0], [77.2, 477.0], [77.3, 479.0], [77.4, 480.0], [77.5, 482.0], [77.6, 485.0], [77.7, 487.0], [77.8, 489.0], [77.9, 492.0], [78.0, 494.0], [78.1, 496.0], [78.2, 496.0], [78.3, 498.0], [78.4, 501.0], [78.5, 502.0], [78.6, 504.0], [78.7, 507.0], [78.8, 509.0], [78.9, 511.0], [79.0, 514.0], [79.1, 515.0], [79.2, 517.0], [79.3, 519.0], [79.4, 521.0], [79.5, 522.0], [79.6, 524.0], [79.7, 526.0], [79.8, 531.0], [79.9, 531.0], [80.0, 534.0], [80.1, 536.0], [80.2, 539.0], [80.3, 539.0], [80.4, 541.0], [80.5, 543.0], [80.6, 546.0], [80.7, 549.0], [80.8, 550.0], [80.9, 551.0], [81.0, 554.0], [81.1, 558.0], [81.2, 560.0], [81.3, 562.0], [81.4, 565.0], [81.5, 566.0], [81.6, 567.0], [81.7, 571.0], [81.8, 576.0], [81.9, 577.0], [82.0, 578.0], [82.1, 580.0], [82.2, 581.0], [82.3, 582.0], [82.4, 583.0], [82.5, 587.0], [82.6, 589.0], [82.7, 591.0], [82.8, 593.0], [82.9, 596.0], [83.0, 598.0], [83.1, 600.0], [83.2, 602.0], [83.3, 603.0], [83.4, 604.0], [83.5, 606.0], [83.6, 607.0], [83.7, 608.0], [83.8, 610.0], [83.9, 612.0], [84.0, 616.0], [84.1, 618.0], [84.2, 622.0], [84.3, 625.0], [84.4, 626.0], [84.5, 628.0], [84.6, 632.0], [84.7, 633.0], [84.8, 637.0], [84.9, 639.0], [85.0, 640.0], [85.1, 641.0], [85.2, 645.0], [85.3, 649.0], [85.4, 653.0], [85.5, 657.0], [85.6, 659.0], [85.7, 660.0], [85.8, 664.0], [85.9, 666.0], [86.0, 671.0], [86.1, 673.0], [86.2, 676.0], [86.3, 677.0], [86.4, 680.0], [86.5, 682.0], [86.6, 683.0], [86.7, 685.0], [86.8, 688.0], [86.9, 691.0], [87.0, 694.0], [87.1, 698.0], [87.2, 699.0], [87.3, 702.0], [87.4, 703.0], [87.5, 705.0], [87.6, 706.0], [87.7, 707.0], [87.8, 712.0], [87.9, 716.0], [88.0, 719.0], [88.1, 722.0], [88.2, 725.0], [88.3, 730.0], [88.4, 732.0], [88.5, 735.0], [88.6, 742.0], [88.7, 743.0], [88.8, 745.0], [88.9, 747.0], [89.0, 750.0], [89.1, 752.0], [89.2, 757.0], [89.3, 760.0], [89.4, 762.0], [89.5, 764.0], [89.6, 766.0], [89.7, 772.0], [89.8, 779.0], [89.9, 785.0], [90.0, 789.0], [90.1, 794.0], [90.2, 797.0], [90.3, 799.0], [90.4, 809.0], [90.5, 817.0], [90.6, 820.0], [90.7, 828.0], [90.8, 831.0], [90.9, 834.0], [91.0, 838.0], [91.1, 841.0], [91.2, 847.0], [91.3, 852.0], [91.4, 858.0], [91.5, 863.0], [91.6, 873.0], [91.7, 883.0], [91.8, 886.0], [91.9, 898.0], [92.0, 907.0], [92.1, 916.0], [92.2, 925.0], [92.3, 927.0], [92.4, 941.0], [92.5, 950.0], [92.6, 954.0], [92.7, 959.0], [92.8, 964.0], [92.9, 970.0], [93.0, 974.0], [93.1, 979.0], [93.2, 991.0], [93.3, 996.0], [93.4, 1006.0], [93.5, 1010.0], [93.6, 1016.0], [93.7, 1021.0], [93.8, 1026.0], [93.9, 1034.0], [94.0, 1045.0], [94.1, 1051.0], [94.2, 1053.0], [94.3, 1067.0], [94.4, 1075.0], [94.5, 1082.0], [94.6, 1088.0], [94.7, 1097.0], [94.8, 1105.0], [94.9, 1115.0], [95.0, 1121.0], [95.1, 1126.0], [95.2, 1137.0], [95.3, 1139.0], [95.4, 1146.0], [95.5, 1152.0], [95.6, 1166.0], [95.7, 1179.0], [95.8, 1189.0], [95.9, 1196.0], [96.0, 1207.0], [96.1, 1214.0], [96.2, 1224.0], [96.3, 1234.0], [96.4, 1247.0], [96.5, 1254.0], [96.6, 1262.0], [96.7, 1277.0], [96.8, 1285.0], [96.9, 1295.0], [97.0, 1307.0], [97.1, 1312.0], [97.2, 1322.0], [97.3, 1355.0], [97.4, 1384.0], [97.5, 1419.0], [97.6, 1440.0], [97.7, 1452.0], [97.8, 1500.0], [97.9, 1527.0], [98.0, 1555.0], [98.1, 1581.0], [98.2, 1595.0], [98.3, 1610.0], [98.4, 1666.0], [98.5, 1694.0], [98.6, 1746.0], [98.7, 1778.0], [98.8, 1837.0], [98.9, 1916.0], [99.0, 1955.0], [99.1, 1988.0], [99.2, 2019.0], [99.3, 2149.0], [99.4, 2260.0], [99.5, 2396.0], [99.6, 2515.0], [99.7, 2927.0], [99.8, 3578.0], [99.9, 3855.0], [100.0, 4953.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 2561.0, "series": [{"data": [[0.0, 2561.0], [600.0, 220.0], [700.0, 162.0], [800.0, 86.0], [900.0, 73.0], [1000.0, 74.0], [1100.0, 62.0], [1200.0, 53.0], [1300.0, 28.0], [1400.0, 18.0], [1500.0, 25.0], [100.0, 497.0], [1600.0, 13.0], [1700.0, 10.0], [1800.0, 7.0], [1900.0, 15.0], [2000.0, 6.0], [2100.0, 8.0], [2200.0, 3.0], [2300.0, 3.0], [2400.0, 4.0], [2500.0, 2.0], [2600.0, 1.0], [2700.0, 2.0], [2800.0, 1.0], [2900.0, 2.0], [3000.0, 2.0], [200.0, 397.0], [3500.0, 2.0], [3600.0, 2.0], [3700.0, 2.0], [3800.0, 1.0], [4000.0, 1.0], [300.0, 382.0], [4800.0, 2.0], [4900.0, 2.0], [400.0, 287.0], [500.0, 246.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 4900.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 115.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 4125.0, "series": [{"data": [[0.0, 4125.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1022.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 115.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.86115702479339, "minX": 1.60507632E12, "maxY": 10.0, "series": [{"data": [[1.60507638E12, 10.0], [1.6050765E12, 9.889975550122248], [1.60507632E12, 9.86115702479339], [1.60507644E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6050765E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 289.6824272588055, "minX": 1.0, "maxY": 4874.0, "series": [{"data": [[4.0, 1260.0], [8.0, 739.5], [2.0, 4851.0], [1.0, 4874.0], [9.0, 484.44444444444446], [5.0, 1917.5], [10.0, 289.6824272588055], [3.0, 1976.0], [6.0, 380.83333333333337], [7.0, 351.6]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.975484606613431, 294.5974914481194]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 3634.233333333333, "minX": 1.60507632E12, "maxY": 1867246.7333333334, "series": [{"data": [[1.60507638E12, 1867246.7333333334], [1.6050765E12, 320465.43333333335], [1.60507632E12, 352275.65], [1.60507644E12, 1709385.8666666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60507638E12, 18114.033333333333], [1.6050765E12, 3634.233333333333], [1.60507632E12, 5168.066666666667], [1.60507644E12, 18574.616666666665]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6050765E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 281.40983606557404, "minX": 1.60507632E12, "maxY": 422.4621026894865, "series": [{"data": [[1.60507638E12, 281.40983606557404], [1.6050765E12, 422.4621026894865], [1.60507632E12, 296.4363636363638], [1.60507644E12, 282.6460009465212]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6050765E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 280.94238875878176, "minX": 1.60507632E12, "maxY": 422.122249388753, "series": [{"data": [[1.60507638E12, 280.94238875878176], [1.6050765E12, 422.122249388753], [1.60507632E12, 296.11570247933855], [1.60507644E12, 282.27733080927686]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6050765E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.008518693800283954, "minX": 1.60507632E12, "maxY": 0.1404958677685952, "series": [{"data": [[1.60507638E12, 0.009836065573770522], [1.6050765E12, 0.009779951100244495], [1.60507632E12, 0.1404958677685952], [1.60507644E12, 0.008518693800283954]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6050765E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 3.0, "minX": 1.60507632E12, "maxY": 4953.0, "series": [{"data": [[1.60507638E12, 2927.0], [1.6050765E12, 4953.0], [1.60507632E12, 1595.0], [1.60507644E12, 3727.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60507638E12, 4.0], [1.6050765E12, 4.0], [1.60507632E12, 5.0], [1.60507644E12, 4.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60507638E12, 4.0], [1.6050765E12, 4.0], [1.60507632E12, 5.0], [1.60507644E12, 4.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60507638E12, 4.0], [1.6050765E12, 4.0], [1.60507632E12, 5.0], [1.60507644E12, 4.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60507638E12, 3.0], [1.6050765E12, 3.0], [1.60507632E12, 5.0], [1.60507644E12, 3.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60507638E12, 91.0], [1.6050765E12, 77.0], [1.60507632E12, 169.0], [1.60507644E12, 145.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6050765E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 7.0, "minX": 1.0, "maxY": 4904.5, "series": [{"data": [[2.0, 4353.0], [3.0, 2298.5], [4.0, 1635.5], [5.0, 1235.0], [7.0, 1221.0], [8.0, 742.0], [9.0, 709.0], [10.0, 826.0], [11.0, 706.0], [12.0, 698.0], [13.0, 614.5], [14.0, 393.5], [15.0, 600.5], [16.0, 566.5], [17.0, 468.0], [18.0, 401.0], [19.0, 355.0], [20.0, 404.5], [21.0, 373.0], [23.0, 427.0], [24.0, 321.5], [25.0, 327.0], [26.0, 381.0], [27.0, 307.0], [28.0, 150.0], [29.0, 86.0], [31.0, 210.0], [33.0, 230.0], [32.0, 225.0], [34.0, 78.5], [35.0, 248.0], [36.0, 174.5], [37.0, 7.0], [39.0, 189.0], [38.0, 188.5], [40.0, 155.0], [42.0, 117.5], [44.0, 20.5], [47.0, 19.0], [48.0, 103.5], [51.0, 7.0], [53.0, 12.0], [52.0, 7.0], [57.0, 12.0], [56.0, 15.0], [58.0, 141.5], [61.0, 92.5], [63.0, 18.0], [67.0, 43.0], [65.0, 10.0], [72.0, 11.0], [77.0, 24.0], [85.0, 118.0], [89.0, 78.0], [97.0, 9.0], [98.0, 85.0], [96.0, 7.0], [100.0, 77.5], [104.0, 62.0], [107.0, 83.0], [105.0, 8.0], [122.0, 15.5], [127.0, 10.0], [143.0, 14.0], [1.0, 4904.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 143.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 7.0, "minX": 1.0, "maxY": 4904.5, "series": [{"data": [[2.0, 4352.5], [3.0, 2297.5], [4.0, 1635.5], [5.0, 1235.0], [7.0, 1220.0], [8.0, 742.0], [9.0, 708.0], [10.0, 826.0], [11.0, 705.0], [12.0, 697.5], [13.0, 613.0], [14.0, 392.0], [15.0, 600.0], [16.0, 565.0], [17.0, 466.0], [18.0, 400.5], [19.0, 355.0], [20.0, 404.0], [21.0, 371.0], [23.0, 426.5], [24.0, 318.0], [25.0, 325.5], [26.0, 377.5], [27.0, 307.0], [28.0, 149.5], [29.0, 86.0], [31.0, 210.0], [33.0, 227.0], [32.0, 225.0], [34.0, 78.5], [35.0, 248.0], [36.0, 174.5], [37.0, 7.0], [39.0, 188.0], [38.0, 187.0], [40.0, 154.5], [42.0, 117.5], [44.0, 20.0], [47.0, 19.0], [48.0, 102.5], [51.0, 7.0], [53.0, 12.0], [52.0, 7.0], [57.0, 12.0], [56.0, 15.0], [58.0, 141.5], [61.0, 92.5], [63.0, 17.0], [67.0, 42.0], [65.0, 10.0], [72.0, 11.0], [77.0, 24.0], [85.0, 118.0], [89.0, 78.0], [97.0, 9.0], [98.0, 84.5], [96.0, 7.0], [100.0, 77.5], [104.0, 61.5], [107.0, 83.0], [105.0, 8.0], [122.0, 15.5], [127.0, 10.0], [143.0, 14.0], [1.0, 4904.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 143.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 6.65, "minX": 1.60507632E12, "maxY": 35.583333333333336, "series": [{"data": [[1.60507638E12, 35.583333333333336], [1.6050765E12, 6.65], [1.60507632E12, 10.25], [1.60507644E12, 35.21666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6050765E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 6.816666666666666, "minX": 1.60507632E12, "maxY": 35.583333333333336, "series": [{"data": [[1.60507638E12, 35.583333333333336], [1.6050765E12, 6.816666666666666], [1.60507632E12, 10.083333333333334], [1.60507644E12, 35.21666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6050765E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 6.816666666666666, "minX": 1.60507632E12, "maxY": 35.583333333333336, "series": [{"data": [[1.60507638E12, 35.583333333333336], [1.6050765E12, 6.816666666666666], [1.60507632E12, 10.083333333333334], [1.60507644E12, 35.21666666666667]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6050765E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 6.816666666666666, "minX": 1.60507632E12, "maxY": 35.583333333333336, "series": [{"data": [[1.60507638E12, 35.583333333333336], [1.6050765E12, 6.816666666666666], [1.60507632E12, 10.083333333333334], [1.60507644E12, 35.21666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6050765E12, "title": "Total Transactions Per Second"}},
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

