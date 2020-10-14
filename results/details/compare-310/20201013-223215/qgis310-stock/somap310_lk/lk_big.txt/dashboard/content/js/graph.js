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
        data: {"result": {"minY": 29.0, "minX": 0.0, "maxY": 3487.0, "series": [{"data": [[0.0, 29.0], [0.1, 30.0], [0.2, 31.0], [0.3, 32.0], [0.4, 32.0], [0.5, 33.0], [0.6, 33.0], [0.7, 33.0], [0.8, 34.0], [0.9, 34.0], [1.0, 34.0], [1.1, 34.0], [1.2, 35.0], [1.3, 35.0], [1.4, 35.0], [1.5, 35.0], [1.6, 36.0], [1.7, 36.0], [1.8, 36.0], [1.9, 36.0], [2.0, 36.0], [2.1, 36.0], [2.2, 36.0], [2.3, 36.0], [2.4, 36.0], [2.5, 36.0], [2.6, 36.0], [2.7, 37.0], [2.8, 37.0], [2.9, 37.0], [3.0, 37.0], [3.1, 37.0], [3.2, 37.0], [3.3, 37.0], [3.4, 37.0], [3.5, 37.0], [3.6, 37.0], [3.7, 37.0], [3.8, 37.0], [3.9, 37.0], [4.0, 37.0], [4.1, 37.0], [4.2, 38.0], [4.3, 38.0], [4.4, 38.0], [4.5, 38.0], [4.6, 38.0], [4.7, 38.0], [4.8, 38.0], [4.9, 38.0], [5.0, 38.0], [5.1, 38.0], [5.2, 38.0], [5.3, 38.0], [5.4, 38.0], [5.5, 39.0], [5.6, 39.0], [5.7, 39.0], [5.8, 39.0], [5.9, 39.0], [6.0, 39.0], [6.1, 39.0], [6.2, 39.0], [6.3, 39.0], [6.4, 39.0], [6.5, 39.0], [6.6, 39.0], [6.7, 39.0], [6.8, 40.0], [6.9, 40.0], [7.0, 40.0], [7.1, 40.0], [7.2, 40.0], [7.3, 40.0], [7.4, 40.0], [7.5, 40.0], [7.6, 40.0], [7.7, 40.0], [7.8, 40.0], [7.9, 40.0], [8.0, 40.0], [8.1, 40.0], [8.2, 40.0], [8.3, 41.0], [8.4, 41.0], [8.5, 41.0], [8.6, 41.0], [8.7, 41.0], [8.8, 41.0], [8.9, 41.0], [9.0, 41.0], [9.1, 41.0], [9.2, 41.0], [9.3, 41.0], [9.4, 41.0], [9.5, 41.0], [9.6, 42.0], [9.7, 42.0], [9.8, 42.0], [9.9, 42.0], [10.0, 42.0], [10.1, 42.0], [10.2, 42.0], [10.3, 42.0], [10.4, 42.0], [10.5, 42.0], [10.6, 42.0], [10.7, 42.0], [10.8, 43.0], [10.9, 43.0], [11.0, 43.0], [11.1, 43.0], [11.2, 43.0], [11.3, 43.0], [11.4, 43.0], [11.5, 43.0], [11.6, 43.0], [11.7, 43.0], [11.8, 43.0], [11.9, 43.0], [12.0, 43.0], [12.1, 43.0], [12.2, 43.0], [12.3, 44.0], [12.4, 44.0], [12.5, 44.0], [12.6, 44.0], [12.7, 44.0], [12.8, 44.0], [12.9, 44.0], [13.0, 44.0], [13.1, 44.0], [13.2, 45.0], [13.3, 45.0], [13.4, 45.0], [13.5, 45.0], [13.6, 45.0], [13.7, 45.0], [13.8, 45.0], [13.9, 45.0], [14.0, 45.0], [14.1, 45.0], [14.2, 45.0], [14.3, 45.0], [14.4, 46.0], [14.5, 46.0], [14.6, 46.0], [14.7, 46.0], [14.8, 46.0], [14.9, 46.0], [15.0, 46.0], [15.1, 46.0], [15.2, 46.0], [15.3, 47.0], [15.4, 47.0], [15.5, 47.0], [15.6, 47.0], [15.7, 48.0], [15.8, 48.0], [15.9, 48.0], [16.0, 48.0], [16.1, 48.0], [16.2, 48.0], [16.3, 48.0], [16.4, 48.0], [16.5, 49.0], [16.6, 49.0], [16.7, 49.0], [16.8, 49.0], [16.9, 50.0], [17.0, 50.0], [17.1, 50.0], [17.2, 50.0], [17.3, 50.0], [17.4, 51.0], [17.5, 51.0], [17.6, 51.0], [17.7, 51.0], [17.8, 52.0], [17.9, 52.0], [18.0, 52.0], [18.1, 53.0], [18.2, 53.0], [18.3, 53.0], [18.4, 54.0], [18.5, 54.0], [18.6, 55.0], [18.7, 55.0], [18.8, 56.0], [18.9, 56.0], [19.0, 56.0], [19.1, 57.0], [19.2, 57.0], [19.3, 57.0], [19.4, 58.0], [19.5, 59.0], [19.6, 59.0], [19.7, 59.0], [19.8, 59.0], [19.9, 60.0], [20.0, 60.0], [20.1, 60.0], [20.2, 61.0], [20.3, 61.0], [20.4, 62.0], [20.5, 62.0], [20.6, 62.0], [20.7, 62.0], [20.8, 62.0], [20.9, 63.0], [21.0, 63.0], [21.1, 63.0], [21.2, 63.0], [21.3, 64.0], [21.4, 64.0], [21.5, 65.0], [21.6, 65.0], [21.7, 65.0], [21.8, 65.0], [21.9, 65.0], [22.0, 66.0], [22.1, 66.0], [22.2, 66.0], [22.3, 66.0], [22.4, 66.0], [22.5, 66.0], [22.6, 67.0], [22.7, 67.0], [22.8, 67.0], [22.9, 67.0], [23.0, 67.0], [23.1, 67.0], [23.2, 68.0], [23.3, 68.0], [23.4, 68.0], [23.5, 68.0], [23.6, 68.0], [23.7, 68.0], [23.8, 68.0], [23.9, 69.0], [24.0, 69.0], [24.1, 69.0], [24.2, 69.0], [24.3, 69.0], [24.4, 70.0], [24.5, 70.0], [24.6, 70.0], [24.7, 70.0], [24.8, 70.0], [24.9, 71.0], [25.0, 71.0], [25.1, 71.0], [25.2, 71.0], [25.3, 71.0], [25.4, 71.0], [25.5, 71.0], [25.6, 71.0], [25.7, 71.0], [25.8, 72.0], [25.9, 72.0], [26.0, 72.0], [26.1, 72.0], [26.2, 72.0], [26.3, 72.0], [26.4, 72.0], [26.5, 72.0], [26.6, 73.0], [26.7, 73.0], [26.8, 73.0], [26.9, 73.0], [27.0, 73.0], [27.1, 73.0], [27.2, 73.0], [27.3, 73.0], [27.4, 74.0], [27.5, 74.0], [27.6, 74.0], [27.7, 74.0], [27.8, 74.0], [27.9, 74.0], [28.0, 74.0], [28.1, 74.0], [28.2, 74.0], [28.3, 75.0], [28.4, 75.0], [28.5, 75.0], [28.6, 75.0], [28.7, 75.0], [28.8, 75.0], [28.9, 75.0], [29.0, 75.0], [29.1, 76.0], [29.2, 76.0], [29.3, 76.0], [29.4, 76.0], [29.5, 76.0], [29.6, 76.0], [29.7, 76.0], [29.8, 76.0], [29.9, 76.0], [30.0, 77.0], [30.1, 77.0], [30.2, 77.0], [30.3, 77.0], [30.4, 77.0], [30.5, 77.0], [30.6, 77.0], [30.7, 77.0], [30.8, 78.0], [30.9, 78.0], [31.0, 78.0], [31.1, 78.0], [31.2, 78.0], [31.3, 78.0], [31.4, 78.0], [31.5, 79.0], [31.6, 79.0], [31.7, 79.0], [31.8, 79.0], [31.9, 79.0], [32.0, 79.0], [32.1, 80.0], [32.2, 80.0], [32.3, 80.0], [32.4, 80.0], [32.5, 80.0], [32.6, 80.0], [32.7, 80.0], [32.8, 80.0], [32.9, 81.0], [33.0, 81.0], [33.1, 81.0], [33.2, 81.0], [33.3, 81.0], [33.4, 82.0], [33.5, 82.0], [33.6, 82.0], [33.7, 82.0], [33.8, 82.0], [33.9, 82.0], [34.0, 83.0], [34.1, 83.0], [34.2, 83.0], [34.3, 83.0], [34.4, 84.0], [34.5, 84.0], [34.6, 84.0], [34.7, 84.0], [34.8, 84.0], [34.9, 84.0], [35.0, 85.0], [35.1, 85.0], [35.2, 85.0], [35.3, 85.0], [35.4, 85.0], [35.5, 86.0], [35.6, 86.0], [35.7, 86.0], [35.8, 86.0], [35.9, 86.0], [36.0, 87.0], [36.1, 87.0], [36.2, 87.0], [36.3, 87.0], [36.4, 87.0], [36.5, 87.0], [36.6, 88.0], [36.7, 88.0], [36.8, 88.0], [36.9, 89.0], [37.0, 89.0], [37.1, 89.0], [37.2, 89.0], [37.3, 90.0], [37.4, 90.0], [37.5, 90.0], [37.6, 91.0], [37.7, 91.0], [37.8, 91.0], [37.9, 92.0], [38.0, 92.0], [38.1, 92.0], [38.2, 93.0], [38.3, 93.0], [38.4, 93.0], [38.5, 94.0], [38.6, 95.0], [38.7, 95.0], [38.8, 96.0], [38.9, 96.0], [39.0, 96.0], [39.1, 97.0], [39.2, 98.0], [39.3, 98.0], [39.4, 99.0], [39.5, 99.0], [39.6, 99.0], [39.7, 100.0], [39.8, 100.0], [39.9, 101.0], [40.0, 102.0], [40.1, 102.0], [40.2, 103.0], [40.3, 103.0], [40.4, 104.0], [40.5, 105.0], [40.6, 106.0], [40.7, 106.0], [40.8, 107.0], [40.9, 108.0], [41.0, 108.0], [41.1, 109.0], [41.2, 109.0], [41.3, 110.0], [41.4, 110.0], [41.5, 111.0], [41.6, 111.0], [41.7, 112.0], [41.8, 112.0], [41.9, 113.0], [42.0, 113.0], [42.1, 114.0], [42.2, 115.0], [42.3, 115.0], [42.4, 116.0], [42.5, 117.0], [42.6, 117.0], [42.7, 117.0], [42.8, 118.0], [42.9, 118.0], [43.0, 119.0], [43.1, 120.0], [43.2, 120.0], [43.3, 120.0], [43.4, 121.0], [43.5, 121.0], [43.6, 122.0], [43.7, 122.0], [43.8, 123.0], [43.9, 123.0], [44.0, 123.0], [44.1, 124.0], [44.2, 124.0], [44.3, 125.0], [44.4, 125.0], [44.5, 126.0], [44.6, 126.0], [44.7, 127.0], [44.8, 127.0], [44.9, 128.0], [45.0, 128.0], [45.1, 128.0], [45.2, 129.0], [45.3, 130.0], [45.4, 130.0], [45.5, 130.0], [45.6, 130.0], [45.7, 131.0], [45.8, 131.0], [45.9, 132.0], [46.0, 133.0], [46.1, 133.0], [46.2, 134.0], [46.3, 135.0], [46.4, 135.0], [46.5, 136.0], [46.6, 137.0], [46.7, 137.0], [46.8, 138.0], [46.9, 138.0], [47.0, 139.0], [47.1, 140.0], [47.2, 140.0], [47.3, 141.0], [47.4, 142.0], [47.5, 143.0], [47.6, 143.0], [47.7, 144.0], [47.8, 144.0], [47.9, 145.0], [48.0, 145.0], [48.1, 146.0], [48.2, 147.0], [48.3, 148.0], [48.4, 149.0], [48.5, 150.0], [48.6, 151.0], [48.7, 152.0], [48.8, 153.0], [48.9, 155.0], [49.0, 156.0], [49.1, 157.0], [49.2, 158.0], [49.3, 160.0], [49.4, 161.0], [49.5, 162.0], [49.6, 163.0], [49.7, 164.0], [49.8, 165.0], [49.9, 166.0], [50.0, 167.0], [50.1, 168.0], [50.2, 168.0], [50.3, 169.0], [50.4, 170.0], [50.5, 171.0], [50.6, 172.0], [50.7, 172.0], [50.8, 174.0], [50.9, 175.0], [51.0, 176.0], [51.1, 179.0], [51.2, 179.0], [51.3, 181.0], [51.4, 182.0], [51.5, 182.0], [51.6, 184.0], [51.7, 185.0], [51.8, 186.0], [51.9, 187.0], [52.0, 188.0], [52.1, 189.0], [52.2, 190.0], [52.3, 191.0], [52.4, 192.0], [52.5, 193.0], [52.6, 194.0], [52.7, 195.0], [52.8, 196.0], [52.9, 197.0], [53.0, 198.0], [53.1, 199.0], [53.2, 199.0], [53.3, 200.0], [53.4, 201.0], [53.5, 202.0], [53.6, 203.0], [53.7, 203.0], [53.8, 204.0], [53.9, 205.0], [54.0, 205.0], [54.1, 206.0], [54.2, 207.0], [54.3, 208.0], [54.4, 208.0], [54.5, 209.0], [54.6, 210.0], [54.7, 210.0], [54.8, 212.0], [54.9, 213.0], [55.0, 215.0], [55.1, 216.0], [55.2, 217.0], [55.3, 217.0], [55.4, 219.0], [55.5, 220.0], [55.6, 221.0], [55.7, 221.0], [55.8, 222.0], [55.9, 222.0], [56.0, 223.0], [56.1, 224.0], [56.2, 224.0], [56.3, 225.0], [56.4, 226.0], [56.5, 227.0], [56.6, 228.0], [56.7, 229.0], [56.8, 229.0], [56.9, 230.0], [57.0, 231.0], [57.1, 231.0], [57.2, 231.0], [57.3, 232.0], [57.4, 233.0], [57.5, 234.0], [57.6, 235.0], [57.7, 235.0], [57.8, 236.0], [57.9, 237.0], [58.0, 238.0], [58.1, 239.0], [58.2, 240.0], [58.3, 241.0], [58.4, 241.0], [58.5, 242.0], [58.6, 243.0], [58.7, 243.0], [58.8, 244.0], [58.9, 245.0], [59.0, 247.0], [59.1, 248.0], [59.2, 249.0], [59.3, 249.0], [59.4, 250.0], [59.5, 252.0], [59.6, 254.0], [59.7, 255.0], [59.8, 256.0], [59.9, 257.0], [60.0, 258.0], [60.1, 259.0], [60.2, 260.0], [60.3, 260.0], [60.4, 262.0], [60.5, 263.0], [60.6, 264.0], [60.7, 265.0], [60.8, 266.0], [60.9, 266.0], [61.0, 267.0], [61.1, 268.0], [61.2, 269.0], [61.3, 270.0], [61.4, 270.0], [61.5, 272.0], [61.6, 273.0], [61.7, 273.0], [61.8, 275.0], [61.9, 276.0], [62.0, 277.0], [62.1, 278.0], [62.2, 279.0], [62.3, 280.0], [62.4, 281.0], [62.5, 282.0], [62.6, 284.0], [62.7, 285.0], [62.8, 286.0], [62.9, 288.0], [63.0, 289.0], [63.1, 290.0], [63.2, 291.0], [63.3, 293.0], [63.4, 294.0], [63.5, 296.0], [63.6, 297.0], [63.7, 298.0], [63.8, 299.0], [63.9, 300.0], [64.0, 300.0], [64.1, 301.0], [64.2, 302.0], [64.3, 303.0], [64.4, 303.0], [64.5, 305.0], [64.6, 305.0], [64.7, 308.0], [64.8, 308.0], [64.9, 310.0], [65.0, 311.0], [65.1, 313.0], [65.2, 313.0], [65.3, 316.0], [65.4, 317.0], [65.5, 317.0], [65.6, 319.0], [65.7, 320.0], [65.8, 321.0], [65.9, 322.0], [66.0, 323.0], [66.1, 324.0], [66.2, 325.0], [66.3, 327.0], [66.4, 328.0], [66.5, 330.0], [66.6, 331.0], [66.7, 333.0], [66.8, 334.0], [66.9, 335.0], [67.0, 337.0], [67.1, 339.0], [67.2, 341.0], [67.3, 342.0], [67.4, 344.0], [67.5, 345.0], [67.6, 345.0], [67.7, 346.0], [67.8, 347.0], [67.9, 349.0], [68.0, 351.0], [68.1, 354.0], [68.2, 357.0], [68.3, 358.0], [68.4, 359.0], [68.5, 360.0], [68.6, 362.0], [68.7, 362.0], [68.8, 363.0], [68.9, 365.0], [69.0, 366.0], [69.1, 368.0], [69.2, 370.0], [69.3, 370.0], [69.4, 372.0], [69.5, 373.0], [69.6, 375.0], [69.7, 376.0], [69.8, 378.0], [69.9, 380.0], [70.0, 381.0], [70.1, 382.0], [70.2, 384.0], [70.3, 385.0], [70.4, 386.0], [70.5, 387.0], [70.6, 388.0], [70.7, 389.0], [70.8, 391.0], [70.9, 392.0], [71.0, 394.0], [71.1, 395.0], [71.2, 398.0], [71.3, 400.0], [71.4, 401.0], [71.5, 402.0], [71.6, 402.0], [71.7, 404.0], [71.8, 405.0], [71.9, 406.0], [72.0, 406.0], [72.1, 407.0], [72.2, 409.0], [72.3, 410.0], [72.4, 412.0], [72.5, 412.0], [72.6, 413.0], [72.7, 414.0], [72.8, 415.0], [72.9, 416.0], [73.0, 418.0], [73.1, 421.0], [73.2, 424.0], [73.3, 425.0], [73.4, 427.0], [73.5, 429.0], [73.6, 430.0], [73.7, 432.0], [73.8, 434.0], [73.9, 435.0], [74.0, 436.0], [74.1, 437.0], [74.2, 439.0], [74.3, 439.0], [74.4, 440.0], [74.5, 441.0], [74.6, 443.0], [74.7, 445.0], [74.8, 446.0], [74.9, 448.0], [75.0, 451.0], [75.1, 452.0], [75.2, 454.0], [75.3, 455.0], [75.4, 457.0], [75.5, 458.0], [75.6, 459.0], [75.7, 460.0], [75.8, 461.0], [75.9, 464.0], [76.0, 465.0], [76.1, 467.0], [76.2, 468.0], [76.3, 468.0], [76.4, 471.0], [76.5, 473.0], [76.6, 475.0], [76.7, 477.0], [76.8, 478.0], [76.9, 481.0], [77.0, 482.0], [77.1, 486.0], [77.2, 487.0], [77.3, 489.0], [77.4, 491.0], [77.5, 493.0], [77.6, 494.0], [77.7, 495.0], [77.8, 497.0], [77.9, 498.0], [78.0, 500.0], [78.1, 501.0], [78.2, 503.0], [78.3, 507.0], [78.4, 508.0], [78.5, 511.0], [78.6, 512.0], [78.7, 514.0], [78.8, 515.0], [78.9, 516.0], [79.0, 518.0], [79.1, 520.0], [79.2, 524.0], [79.3, 526.0], [79.4, 529.0], [79.5, 529.0], [79.6, 531.0], [79.7, 532.0], [79.8, 533.0], [79.9, 534.0], [80.0, 535.0], [80.1, 537.0], [80.2, 539.0], [80.3, 540.0], [80.4, 542.0], [80.5, 543.0], [80.6, 547.0], [80.7, 548.0], [80.8, 549.0], [80.9, 551.0], [81.0, 553.0], [81.1, 555.0], [81.2, 556.0], [81.3, 558.0], [81.4, 561.0], [81.5, 562.0], [81.6, 563.0], [81.7, 564.0], [81.8, 566.0], [81.9, 567.0], [82.0, 568.0], [82.1, 570.0], [82.2, 572.0], [82.3, 575.0], [82.4, 575.0], [82.5, 578.0], [82.6, 581.0], [82.7, 582.0], [82.8, 584.0], [82.9, 586.0], [83.0, 588.0], [83.1, 590.0], [83.2, 592.0], [83.3, 594.0], [83.4, 596.0], [83.5, 600.0], [83.6, 601.0], [83.7, 602.0], [83.8, 603.0], [83.9, 606.0], [84.0, 608.0], [84.1, 610.0], [84.2, 611.0], [84.3, 613.0], [84.4, 615.0], [84.5, 617.0], [84.6, 620.0], [84.7, 623.0], [84.8, 624.0], [84.9, 626.0], [85.0, 627.0], [85.1, 629.0], [85.2, 631.0], [85.3, 635.0], [85.4, 637.0], [85.5, 640.0], [85.6, 641.0], [85.7, 644.0], [85.8, 646.0], [85.9, 650.0], [86.0, 651.0], [86.1, 652.0], [86.2, 654.0], [86.3, 658.0], [86.4, 660.0], [86.5, 662.0], [86.6, 664.0], [86.7, 668.0], [86.8, 671.0], [86.9, 673.0], [87.0, 675.0], [87.1, 681.0], [87.2, 685.0], [87.3, 689.0], [87.4, 691.0], [87.5, 693.0], [87.6, 695.0], [87.7, 697.0], [87.8, 699.0], [87.9, 700.0], [88.0, 702.0], [88.1, 706.0], [88.2, 710.0], [88.3, 713.0], [88.4, 716.0], [88.5, 717.0], [88.6, 719.0], [88.7, 722.0], [88.8, 725.0], [88.9, 726.0], [89.0, 728.0], [89.1, 731.0], [89.2, 735.0], [89.3, 737.0], [89.4, 741.0], [89.5, 744.0], [89.6, 748.0], [89.7, 752.0], [89.8, 754.0], [89.9, 755.0], [90.0, 758.0], [90.1, 765.0], [90.2, 766.0], [90.3, 773.0], [90.4, 775.0], [90.5, 778.0], [90.6, 779.0], [90.7, 783.0], [90.8, 790.0], [90.9, 795.0], [91.0, 799.0], [91.1, 806.0], [91.2, 807.0], [91.3, 812.0], [91.4, 815.0], [91.5, 819.0], [91.6, 826.0], [91.7, 832.0], [91.8, 837.0], [91.9, 839.0], [92.0, 844.0], [92.1, 849.0], [92.2, 854.0], [92.3, 857.0], [92.4, 862.0], [92.5, 866.0], [92.6, 868.0], [92.7, 874.0], [92.8, 879.0], [92.9, 885.0], [93.0, 888.0], [93.1, 893.0], [93.2, 899.0], [93.3, 903.0], [93.4, 910.0], [93.5, 912.0], [93.6, 916.0], [93.7, 920.0], [93.8, 922.0], [93.9, 929.0], [94.0, 938.0], [94.1, 943.0], [94.2, 948.0], [94.3, 953.0], [94.4, 963.0], [94.5, 967.0], [94.6, 974.0], [94.7, 983.0], [94.8, 996.0], [94.9, 1001.0], [95.0, 1010.0], [95.1, 1018.0], [95.2, 1024.0], [95.3, 1029.0], [95.4, 1033.0], [95.5, 1041.0], [95.6, 1045.0], [95.7, 1050.0], [95.8, 1060.0], [95.9, 1064.0], [96.0, 1074.0], [96.1, 1077.0], [96.2, 1084.0], [96.3, 1088.0], [96.4, 1098.0], [96.5, 1109.0], [96.6, 1118.0], [96.7, 1124.0], [96.8, 1133.0], [96.9, 1146.0], [97.0, 1158.0], [97.1, 1173.0], [97.2, 1181.0], [97.3, 1190.0], [97.4, 1202.0], [97.5, 1222.0], [97.6, 1238.0], [97.7, 1278.0], [97.8, 1295.0], [97.9, 1310.0], [98.0, 1332.0], [98.1, 1344.0], [98.2, 1358.0], [98.3, 1371.0], [98.4, 1398.0], [98.5, 1428.0], [98.6, 1470.0], [98.7, 1491.0], [98.8, 1530.0], [98.9, 1581.0], [99.0, 1664.0], [99.1, 1713.0], [99.2, 1769.0], [99.3, 1801.0], [99.4, 1906.0], [99.5, 1939.0], [99.6, 1989.0], [99.7, 2117.0], [99.8, 2164.0], [99.9, 2324.0], [100.0, 3487.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 2084.0, "series": [{"data": [[0.0, 2084.0], [600.0, 229.0], [700.0, 167.0], [800.0, 116.0], [900.0, 87.0], [1000.0, 83.0], [1100.0, 50.0], [1200.0, 24.0], [1300.0, 29.0], [1400.0, 16.0], [1500.0, 12.0], [100.0, 717.0], [1600.0, 7.0], [1700.0, 12.0], [1800.0, 3.0], [1900.0, 14.0], [2000.0, 4.0], [2100.0, 10.0], [2300.0, 1.0], [2400.0, 2.0], [3000.0, 1.0], [200.0, 560.0], [3400.0, 2.0], [300.0, 390.0], [400.0, 353.0], [500.0, 289.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3400.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 68.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 4106.0, "series": [{"data": [[0.0, 4106.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1088.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 68.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.93401759530792, "minX": 1.60262832E12, "maxY": 10.0, "series": [{"data": [[1.60262838E12, 10.0], [1.6026285E12, 9.93401759530792], [1.60262832E12, 9.962295081967225], [1.60262844E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6026285E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 307.5859702630591, "minX": 1.0, "maxY": 3487.0, "series": [{"data": [[4.0, 1155.5], [8.0, 1223.5], [2.0, 2164.0], [1.0, 3042.0], [9.0, 434.3333333333333], [5.0, 762.6666666666666], [10.0, 307.5859702630591], [6.0, 1035.0], [3.0, 3487.0], [7.0, 1800.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.98707715697455, 310.77023945267865]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 5208.016666666666, "minX": 1.60262832E12, "maxY": 1659751.3666666667, "series": [{"data": [[1.60262838E12, 1637747.3166666667], [1.6026285E12, 582754.3], [1.60262832E12, 370843.3], [1.60262844E12, 1659751.3666666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60262838E12, 15958.733333333334], [1.6026285E12, 6035.6], [1.60262832E12, 5208.016666666666], [1.60262844E12, 18288.6]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6026285E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 284.8554502369668, "minX": 1.60262832E12, "maxY": 363.75073313783, "series": [{"data": [[1.60262838E12, 321.1548387096775], [1.6026285E12, 363.75073313783], [1.60262832E12, 309.5114754098361], [1.60262844E12, 284.8554502369668]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6026285E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 284.44834123222705, "minX": 1.60262832E12, "maxY": 363.356304985337, "series": [{"data": [[1.60262838E12, 320.7086021505373], [1.6026285E12, 363.356304985337], [1.60262832E12, 309.1409836065574], [1.60262844E12, 284.44834123222705]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6026285E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.007331378299120228, "minX": 1.60262832E12, "maxY": 0.14590163934426237, "series": [{"data": [[1.60262838E12, 0.01182795698924733], [1.6026285E12, 0.007331378299120228], [1.60262832E12, 0.14590163934426237], [1.60262844E12, 0.01042654028436021]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6026285E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 29.0, "minX": 1.60262832E12, "maxY": 3487.0, "series": [{"data": [[1.60262838E12, 2411.0], [1.6026285E12, 3487.0], [1.60262832E12, 1344.0], [1.60262844E12, 1857.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60262838E12, 33.0], [1.6026285E12, 33.0], [1.60262832E12, 39.0], [1.60262844E12, 34.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60262838E12, 33.0], [1.6026285E12, 33.0], [1.60262832E12, 39.0], [1.60262844E12, 34.89890020132065]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60262838E12, 33.0], [1.6026285E12, 33.0], [1.60262832E12, 39.0], [1.60262844E12, 34.05449974834919]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60262838E12, 30.0], [1.6026285E12, 30.0], [1.60262832E12, 34.0], [1.60262844E12, 29.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60262838E12, 153.0], [1.6026285E12, 223.5], [1.60262832E12, 198.5], [1.60262844E12, 153.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6026285E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 49.0, "minX": 1.0, "maxY": 3042.0, "series": [{"data": [[2.0, 2825.5], [4.0, 602.0], [5.0, 1305.0], [6.0, 1152.0], [7.0, 1127.5], [8.0, 761.5], [10.0, 805.0], [11.0, 610.0], [12.0, 773.0], [13.0, 584.0], [14.0, 663.0], [15.0, 711.0], [16.0, 465.5], [17.0, 446.0], [18.0, 528.0], [19.0, 405.5], [20.0, 461.5], [21.0, 384.0], [22.0, 426.0], [23.0, 380.0], [24.0, 376.0], [25.0, 305.0], [26.0, 383.0], [27.0, 274.0], [28.0, 306.0], [29.0, 245.0], [30.0, 213.5], [31.0, 202.5], [32.0, 293.5], [34.0, 256.0], [35.0, 49.0], [37.0, 89.0], [36.0, 141.5], [39.0, 249.0], [38.0, 82.5], [41.0, 251.0], [42.0, 89.0], [43.0, 79.5], [44.0, 141.0], [45.0, 86.0], [46.0, 156.0], [47.0, 153.5], [48.0, 191.5], [49.0, 111.5], [51.0, 115.0], [50.0, 51.5], [53.0, 92.0], [55.0, 150.0], [54.0, 89.0], [57.0, 123.0], [58.0, 91.5], [61.0, 127.0], [60.0, 166.0], [62.0, 83.0], [66.0, 74.5], [65.0, 140.0], [71.0, 102.0], [74.0, 78.0], [73.0, 109.5], [78.0, 62.0], [81.0, 128.0], [80.0, 60.0], [85.0, 80.0], [88.0, 86.0], [89.0, 76.0], [93.0, 74.0], [1.0, 3042.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 93.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 49.0, "minX": 1.0, "maxY": 3042.0, "series": [{"data": [[2.0, 2825.0], [4.0, 601.0], [5.0, 1304.0], [6.0, 1151.0], [7.0, 1125.0], [8.0, 759.5], [10.0, 803.5], [11.0, 610.0], [12.0, 771.5], [13.0, 583.0], [14.0, 662.5], [15.0, 710.0], [16.0, 465.0], [17.0, 446.0], [18.0, 527.0], [19.0, 404.5], [20.0, 460.5], [21.0, 384.0], [22.0, 424.0], [23.0, 379.0], [24.0, 376.0], [25.0, 304.0], [26.0, 383.0], [27.0, 273.0], [28.0, 305.5], [29.0, 245.0], [30.0, 213.5], [31.0, 202.5], [32.0, 290.5], [34.0, 255.5], [35.0, 49.0], [37.0, 89.0], [36.0, 141.0], [39.0, 249.0], [38.0, 82.5], [41.0, 251.0], [42.0, 89.0], [43.0, 79.0], [44.0, 140.5], [45.0, 86.0], [46.0, 155.5], [47.0, 153.5], [48.0, 191.5], [49.0, 111.5], [51.0, 115.0], [50.0, 51.5], [53.0, 91.5], [55.0, 150.0], [54.0, 89.0], [57.0, 123.0], [58.0, 91.5], [61.0, 127.0], [60.0, 166.0], [62.0, 83.0], [66.0, 74.5], [65.0, 140.0], [71.0, 102.0], [74.0, 78.0], [73.0, 109.5], [78.0, 62.0], [81.0, 128.0], [80.0, 60.0], [85.0, 78.0], [88.0, 86.0], [89.0, 76.0], [93.0, 74.0], [1.0, 3042.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 93.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 10.333333333333334, "minX": 1.60262832E12, "maxY": 35.166666666666664, "series": [{"data": [[1.60262838E12, 31.0], [1.6026285E12, 11.2], [1.60262832E12, 10.333333333333334], [1.60262844E12, 35.166666666666664]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6026285E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 10.166666666666666, "minX": 1.60262832E12, "maxY": 35.166666666666664, "series": [{"data": [[1.60262838E12, 31.0], [1.6026285E12, 11.366666666666667], [1.60262832E12, 10.166666666666666], [1.60262844E12, 35.166666666666664]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6026285E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 10.166666666666666, "minX": 1.60262832E12, "maxY": 35.166666666666664, "series": [{"data": [[1.60262838E12, 31.0], [1.6026285E12, 11.366666666666667], [1.60262832E12, 10.166666666666666], [1.60262844E12, 35.166666666666664]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6026285E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 10.166666666666666, "minX": 1.60262832E12, "maxY": 35.166666666666664, "series": [{"data": [[1.60262838E12, 31.0], [1.6026285E12, 11.366666666666667], [1.60262832E12, 10.166666666666666], [1.60262844E12, 35.166666666666664]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6026285E12, "title": "Total Transactions Per Second"}},
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

