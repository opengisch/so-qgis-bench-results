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
        data: {"result": {"minY": 34.0, "minX": 0.0, "maxY": 5475.0, "series": [{"data": [[0.0, 34.0], [0.1, 38.0], [0.2, 40.0], [0.3, 40.0], [0.4, 41.0], [0.5, 41.0], [0.6, 41.0], [0.7, 41.0], [0.8, 42.0], [0.9, 42.0], [1.0, 43.0], [1.1, 43.0], [1.2, 43.0], [1.3, 43.0], [1.4, 44.0], [1.5, 44.0], [1.6, 44.0], [1.7, 44.0], [1.8, 44.0], [1.9, 44.0], [2.0, 45.0], [2.1, 45.0], [2.2, 45.0], [2.3, 45.0], [2.4, 45.0], [2.5, 45.0], [2.6, 45.0], [2.7, 46.0], [2.8, 46.0], [2.9, 46.0], [3.0, 46.0], [3.1, 46.0], [3.2, 46.0], [3.3, 46.0], [3.4, 46.0], [3.5, 46.0], [3.6, 47.0], [3.7, 47.0], [3.8, 47.0], [3.9, 47.0], [4.0, 47.0], [4.1, 47.0], [4.2, 47.0], [4.3, 47.0], [4.4, 47.0], [4.5, 47.0], [4.6, 47.0], [4.7, 47.0], [4.8, 48.0], [4.9, 48.0], [5.0, 48.0], [5.1, 48.0], [5.2, 48.0], [5.3, 48.0], [5.4, 48.0], [5.5, 48.0], [5.6, 48.0], [5.7, 48.0], [5.8, 48.0], [5.9, 49.0], [6.0, 49.0], [6.1, 49.0], [6.2, 49.0], [6.3, 49.0], [6.4, 49.0], [6.5, 49.0], [6.6, 49.0], [6.7, 49.0], [6.8, 49.0], [6.9, 49.0], [7.0, 49.0], [7.1, 49.0], [7.2, 49.0], [7.3, 49.0], [7.4, 49.0], [7.5, 49.0], [7.6, 49.0], [7.7, 50.0], [7.8, 50.0], [7.9, 50.0], [8.0, 50.0], [8.1, 50.0], [8.2, 50.0], [8.3, 50.0], [8.4, 50.0], [8.5, 50.0], [8.6, 50.0], [8.7, 50.0], [8.8, 50.0], [8.9, 50.0], [9.0, 50.0], [9.1, 50.0], [9.2, 50.0], [9.3, 51.0], [9.4, 51.0], [9.5, 51.0], [9.6, 51.0], [9.7, 51.0], [9.8, 51.0], [9.9, 51.0], [10.0, 51.0], [10.1, 51.0], [10.2, 51.0], [10.3, 51.0], [10.4, 51.0], [10.5, 52.0], [10.6, 52.0], [10.7, 52.0], [10.8, 52.0], [10.9, 52.0], [11.0, 52.0], [11.1, 52.0], [11.2, 52.0], [11.3, 52.0], [11.4, 52.0], [11.5, 52.0], [11.6, 52.0], [11.7, 52.0], [11.8, 52.0], [11.9, 52.0], [12.0, 52.0], [12.1, 52.0], [12.2, 53.0], [12.3, 53.0], [12.4, 53.0], [12.5, 53.0], [12.6, 53.0], [12.7, 53.0], [12.8, 53.0], [12.9, 53.0], [13.0, 53.0], [13.1, 53.0], [13.2, 53.0], [13.3, 53.0], [13.4, 53.0], [13.5, 53.0], [13.6, 53.0], [13.7, 53.0], [13.8, 54.0], [13.9, 54.0], [14.0, 54.0], [14.1, 54.0], [14.2, 54.0], [14.3, 54.0], [14.4, 54.0], [14.5, 54.0], [14.6, 54.0], [14.7, 54.0], [14.8, 54.0], [14.9, 54.0], [15.0, 55.0], [15.1, 55.0], [15.2, 55.0], [15.3, 55.0], [15.4, 55.0], [15.5, 55.0], [15.6, 55.0], [15.7, 55.0], [15.8, 55.0], [15.9, 55.0], [16.0, 55.0], [16.1, 55.0], [16.2, 56.0], [16.3, 56.0], [16.4, 56.0], [16.5, 56.0], [16.6, 56.0], [16.7, 56.0], [16.8, 56.0], [16.9, 56.0], [17.0, 56.0], [17.1, 56.0], [17.2, 56.0], [17.3, 56.0], [17.4, 56.0], [17.5, 57.0], [17.6, 57.0], [17.7, 57.0], [17.8, 57.0], [17.9, 57.0], [18.0, 57.0], [18.1, 57.0], [18.2, 57.0], [18.3, 57.0], [18.4, 57.0], [18.5, 58.0], [18.6, 58.0], [18.7, 58.0], [18.8, 58.0], [18.9, 58.0], [19.0, 58.0], [19.1, 58.0], [19.2, 58.0], [19.3, 58.0], [19.4, 58.0], [19.5, 58.0], [19.6, 59.0], [19.7, 59.0], [19.8, 59.0], [19.9, 59.0], [20.0, 59.0], [20.1, 59.0], [20.2, 59.0], [20.3, 59.0], [20.4, 59.0], [20.5, 59.0], [20.6, 59.0], [20.7, 60.0], [20.8, 60.0], [20.9, 60.0], [21.0, 60.0], [21.1, 60.0], [21.2, 60.0], [21.3, 60.0], [21.4, 60.0], [21.5, 61.0], [21.6, 61.0], [21.7, 61.0], [21.8, 61.0], [21.9, 62.0], [22.0, 62.0], [22.1, 62.0], [22.2, 62.0], [22.3, 62.0], [22.4, 62.0], [22.5, 63.0], [22.6, 63.0], [22.7, 63.0], [22.8, 63.0], [22.9, 63.0], [23.0, 63.0], [23.1, 64.0], [23.2, 64.0], [23.3, 64.0], [23.4, 64.0], [23.5, 64.0], [23.6, 65.0], [23.7, 65.0], [23.8, 65.0], [23.9, 65.0], [24.0, 65.0], [24.1, 66.0], [24.2, 66.0], [24.3, 66.0], [24.4, 66.0], [24.5, 66.0], [24.6, 67.0], [24.7, 67.0], [24.8, 67.0], [24.9, 67.0], [25.0, 68.0], [25.1, 68.0], [25.2, 68.0], [25.3, 69.0], [25.4, 69.0], [25.5, 69.0], [25.6, 69.0], [25.7, 69.0], [25.8, 70.0], [25.9, 70.0], [26.0, 70.0], [26.1, 70.0], [26.2, 70.0], [26.3, 71.0], [26.4, 71.0], [26.5, 71.0], [26.6, 72.0], [26.7, 72.0], [26.8, 72.0], [26.9, 73.0], [27.0, 73.0], [27.1, 73.0], [27.2, 73.0], [27.3, 73.0], [27.4, 74.0], [27.5, 74.0], [27.6, 74.0], [27.7, 74.0], [27.8, 75.0], [27.9, 75.0], [28.0, 75.0], [28.1, 75.0], [28.2, 75.0], [28.3, 76.0], [28.4, 76.0], [28.5, 76.0], [28.6, 77.0], [28.7, 77.0], [28.8, 77.0], [28.9, 77.0], [29.0, 78.0], [29.1, 78.0], [29.2, 78.0], [29.3, 79.0], [29.4, 79.0], [29.5, 79.0], [29.6, 80.0], [29.7, 80.0], [29.8, 80.0], [29.9, 80.0], [30.0, 80.0], [30.1, 80.0], [30.2, 81.0], [30.3, 81.0], [30.4, 81.0], [30.5, 81.0], [30.6, 82.0], [30.7, 82.0], [30.8, 82.0], [30.9, 82.0], [31.0, 83.0], [31.1, 83.0], [31.2, 83.0], [31.3, 84.0], [31.4, 85.0], [31.5, 85.0], [31.6, 85.0], [31.7, 85.0], [31.8, 86.0], [31.9, 86.0], [32.0, 86.0], [32.1, 86.0], [32.2, 87.0], [32.3, 87.0], [32.4, 87.0], [32.5, 87.0], [32.6, 88.0], [32.7, 88.0], [32.8, 88.0], [32.9, 89.0], [33.0, 89.0], [33.1, 89.0], [33.2, 90.0], [33.3, 90.0], [33.4, 90.0], [33.5, 91.0], [33.6, 91.0], [33.7, 91.0], [33.8, 92.0], [33.9, 92.0], [34.0, 93.0], [34.1, 93.0], [34.2, 93.0], [34.3, 93.0], [34.4, 94.0], [34.5, 94.0], [34.6, 94.0], [34.7, 95.0], [34.8, 95.0], [34.9, 95.0], [35.0, 96.0], [35.1, 96.0], [35.2, 97.0], [35.3, 97.0], [35.4, 97.0], [35.5, 98.0], [35.6, 98.0], [35.7, 99.0], [35.8, 99.0], [35.9, 100.0], [36.0, 100.0], [36.1, 101.0], [36.2, 101.0], [36.3, 102.0], [36.4, 102.0], [36.5, 103.0], [36.6, 103.0], [36.7, 104.0], [36.8, 104.0], [36.9, 105.0], [37.0, 105.0], [37.1, 105.0], [37.2, 106.0], [37.3, 107.0], [37.4, 107.0], [37.5, 108.0], [37.6, 109.0], [37.7, 109.0], [37.8, 109.0], [37.9, 109.0], [38.0, 110.0], [38.1, 111.0], [38.2, 112.0], [38.3, 112.0], [38.4, 112.0], [38.5, 113.0], [38.6, 113.0], [38.7, 114.0], [38.8, 114.0], [38.9, 115.0], [39.0, 116.0], [39.1, 117.0], [39.2, 117.0], [39.3, 117.0], [39.4, 118.0], [39.5, 119.0], [39.6, 120.0], [39.7, 120.0], [39.8, 120.0], [39.9, 121.0], [40.0, 122.0], [40.1, 122.0], [40.2, 123.0], [40.3, 124.0], [40.4, 125.0], [40.5, 126.0], [40.6, 127.0], [40.7, 127.0], [40.8, 128.0], [40.9, 129.0], [41.0, 129.0], [41.1, 130.0], [41.2, 131.0], [41.3, 133.0], [41.4, 133.0], [41.5, 134.0], [41.6, 135.0], [41.7, 136.0], [41.8, 137.0], [41.9, 138.0], [42.0, 139.0], [42.1, 139.0], [42.2, 140.0], [42.3, 140.0], [42.4, 141.0], [42.5, 142.0], [42.6, 143.0], [42.7, 145.0], [42.8, 146.0], [42.9, 147.0], [43.0, 148.0], [43.1, 149.0], [43.2, 150.0], [43.3, 151.0], [43.4, 152.0], [43.5, 153.0], [43.6, 153.0], [43.7, 154.0], [43.8, 154.0], [43.9, 155.0], [44.0, 156.0], [44.1, 157.0], [44.2, 158.0], [44.3, 159.0], [44.4, 159.0], [44.5, 160.0], [44.6, 161.0], [44.7, 162.0], [44.8, 163.0], [44.9, 165.0], [45.0, 165.0], [45.1, 167.0], [45.2, 167.0], [45.3, 168.0], [45.4, 170.0], [45.5, 171.0], [45.6, 172.0], [45.7, 173.0], [45.8, 173.0], [45.9, 174.0], [46.0, 175.0], [46.1, 175.0], [46.2, 175.0], [46.3, 176.0], [46.4, 177.0], [46.5, 177.0], [46.6, 178.0], [46.7, 179.0], [46.8, 180.0], [46.9, 181.0], [47.0, 182.0], [47.1, 183.0], [47.2, 183.0], [47.3, 184.0], [47.4, 185.0], [47.5, 186.0], [47.6, 186.0], [47.7, 187.0], [47.8, 188.0], [47.9, 189.0], [48.0, 190.0], [48.1, 191.0], [48.2, 191.0], [48.3, 192.0], [48.4, 192.0], [48.5, 193.0], [48.6, 195.0], [48.7, 195.0], [48.8, 196.0], [48.9, 197.0], [49.0, 198.0], [49.1, 198.0], [49.2, 198.0], [49.3, 200.0], [49.4, 201.0], [49.5, 201.0], [49.6, 203.0], [49.7, 204.0], [49.8, 205.0], [49.9, 206.0], [50.0, 206.0], [50.1, 207.0], [50.2, 208.0], [50.3, 208.0], [50.4, 210.0], [50.5, 210.0], [50.6, 211.0], [50.7, 212.0], [50.8, 213.0], [50.9, 214.0], [51.0, 215.0], [51.1, 216.0], [51.2, 216.0], [51.3, 217.0], [51.4, 218.0], [51.5, 219.0], [51.6, 219.0], [51.7, 220.0], [51.8, 220.0], [51.9, 221.0], [52.0, 222.0], [52.1, 222.0], [52.2, 223.0], [52.3, 224.0], [52.4, 225.0], [52.5, 225.0], [52.6, 226.0], [52.7, 227.0], [52.8, 228.0], [52.9, 228.0], [53.0, 229.0], [53.1, 229.0], [53.2, 230.0], [53.3, 230.0], [53.4, 231.0], [53.5, 231.0], [53.6, 232.0], [53.7, 232.0], [53.8, 233.0], [53.9, 234.0], [54.0, 235.0], [54.1, 236.0], [54.2, 237.0], [54.3, 237.0], [54.4, 238.0], [54.5, 238.0], [54.6, 239.0], [54.7, 240.0], [54.8, 241.0], [54.9, 241.0], [55.0, 242.0], [55.1, 242.0], [55.2, 243.0], [55.3, 244.0], [55.4, 244.0], [55.5, 245.0], [55.6, 246.0], [55.7, 247.0], [55.8, 248.0], [55.9, 248.0], [56.0, 250.0], [56.1, 250.0], [56.2, 251.0], [56.3, 253.0], [56.4, 254.0], [56.5, 255.0], [56.6, 256.0], [56.7, 256.0], [56.8, 257.0], [56.9, 258.0], [57.0, 259.0], [57.1, 261.0], [57.2, 262.0], [57.3, 263.0], [57.4, 263.0], [57.5, 264.0], [57.6, 265.0], [57.7, 266.0], [57.8, 267.0], [57.9, 268.0], [58.0, 268.0], [58.1, 269.0], [58.2, 271.0], [58.3, 272.0], [58.4, 273.0], [58.5, 274.0], [58.6, 275.0], [58.7, 276.0], [58.8, 277.0], [58.9, 277.0], [59.0, 279.0], [59.1, 280.0], [59.2, 281.0], [59.3, 281.0], [59.4, 283.0], [59.5, 283.0], [59.6, 283.0], [59.7, 284.0], [59.8, 285.0], [59.9, 286.0], [60.0, 286.0], [60.1, 288.0], [60.2, 289.0], [60.3, 290.0], [60.4, 291.0], [60.5, 292.0], [60.6, 294.0], [60.7, 295.0], [60.8, 295.0], [60.9, 296.0], [61.0, 296.0], [61.1, 297.0], [61.2, 298.0], [61.3, 299.0], [61.4, 300.0], [61.5, 302.0], [61.6, 303.0], [61.7, 306.0], [61.8, 308.0], [61.9, 310.0], [62.0, 310.0], [62.1, 311.0], [62.2, 311.0], [62.3, 313.0], [62.4, 314.0], [62.5, 315.0], [62.6, 316.0], [62.7, 317.0], [62.8, 318.0], [62.9, 319.0], [63.0, 320.0], [63.1, 321.0], [63.2, 323.0], [63.3, 324.0], [63.4, 326.0], [63.5, 326.0], [63.6, 328.0], [63.7, 329.0], [63.8, 330.0], [63.9, 331.0], [64.0, 332.0], [64.1, 333.0], [64.2, 334.0], [64.3, 336.0], [64.4, 337.0], [64.5, 338.0], [64.6, 339.0], [64.7, 340.0], [64.8, 342.0], [64.9, 343.0], [65.0, 344.0], [65.1, 345.0], [65.2, 346.0], [65.3, 349.0], [65.4, 349.0], [65.5, 350.0], [65.6, 351.0], [65.7, 353.0], [65.8, 354.0], [65.9, 354.0], [66.0, 355.0], [66.1, 357.0], [66.2, 357.0], [66.3, 359.0], [66.4, 360.0], [66.5, 363.0], [66.6, 365.0], [66.7, 366.0], [66.8, 367.0], [66.9, 368.0], [67.0, 369.0], [67.1, 370.0], [67.2, 372.0], [67.3, 373.0], [67.4, 374.0], [67.5, 377.0], [67.6, 377.0], [67.7, 379.0], [67.8, 380.0], [67.9, 381.0], [68.0, 383.0], [68.1, 385.0], [68.2, 386.0], [68.3, 387.0], [68.4, 388.0], [68.5, 389.0], [68.6, 389.0], [68.7, 390.0], [68.8, 391.0], [68.9, 392.0], [69.0, 393.0], [69.1, 396.0], [69.2, 399.0], [69.3, 400.0], [69.4, 401.0], [69.5, 403.0], [69.6, 406.0], [69.7, 407.0], [69.8, 409.0], [69.9, 410.0], [70.0, 412.0], [70.1, 413.0], [70.2, 415.0], [70.3, 417.0], [70.4, 419.0], [70.5, 420.0], [70.6, 421.0], [70.7, 423.0], [70.8, 424.0], [70.9, 426.0], [71.0, 428.0], [71.1, 429.0], [71.2, 430.0], [71.3, 432.0], [71.4, 433.0], [71.5, 435.0], [71.6, 436.0], [71.7, 437.0], [71.8, 438.0], [71.9, 439.0], [72.0, 440.0], [72.1, 442.0], [72.2, 443.0], [72.3, 445.0], [72.4, 446.0], [72.5, 448.0], [72.6, 450.0], [72.7, 452.0], [72.8, 453.0], [72.9, 454.0], [73.0, 455.0], [73.1, 456.0], [73.2, 457.0], [73.3, 459.0], [73.4, 460.0], [73.5, 461.0], [73.6, 464.0], [73.7, 465.0], [73.8, 467.0], [73.9, 469.0], [74.0, 470.0], [74.1, 471.0], [74.2, 471.0], [74.3, 474.0], [74.4, 477.0], [74.5, 479.0], [74.6, 481.0], [74.7, 482.0], [74.8, 483.0], [74.9, 484.0], [75.0, 486.0], [75.1, 487.0], [75.2, 490.0], [75.3, 492.0], [75.4, 494.0], [75.5, 497.0], [75.6, 499.0], [75.7, 501.0], [75.8, 502.0], [75.9, 504.0], [76.0, 507.0], [76.1, 509.0], [76.2, 512.0], [76.3, 513.0], [76.4, 514.0], [76.5, 515.0], [76.6, 518.0], [76.7, 520.0], [76.8, 524.0], [76.9, 525.0], [77.0, 527.0], [77.1, 530.0], [77.2, 531.0], [77.3, 533.0], [77.4, 535.0], [77.5, 538.0], [77.6, 539.0], [77.7, 542.0], [77.8, 544.0], [77.9, 546.0], [78.0, 546.0], [78.1, 550.0], [78.2, 551.0], [78.3, 553.0], [78.4, 556.0], [78.5, 557.0], [78.6, 559.0], [78.7, 561.0], [78.8, 562.0], [78.9, 564.0], [79.0, 565.0], [79.1, 566.0], [79.2, 567.0], [79.3, 569.0], [79.4, 572.0], [79.5, 572.0], [79.6, 574.0], [79.7, 576.0], [79.8, 578.0], [79.9, 583.0], [80.0, 586.0], [80.1, 588.0], [80.2, 591.0], [80.3, 594.0], [80.4, 596.0], [80.5, 597.0], [80.6, 599.0], [80.7, 600.0], [80.8, 602.0], [80.9, 603.0], [81.0, 605.0], [81.1, 607.0], [81.2, 608.0], [81.3, 613.0], [81.4, 617.0], [81.5, 618.0], [81.6, 620.0], [81.7, 621.0], [81.8, 623.0], [81.9, 626.0], [82.0, 629.0], [82.1, 634.0], [82.2, 637.0], [82.3, 639.0], [82.4, 641.0], [82.5, 643.0], [82.6, 645.0], [82.7, 647.0], [82.8, 649.0], [82.9, 652.0], [83.0, 656.0], [83.1, 658.0], [83.2, 660.0], [83.3, 667.0], [83.4, 672.0], [83.5, 676.0], [83.6, 677.0], [83.7, 681.0], [83.8, 683.0], [83.9, 687.0], [84.0, 689.0], [84.1, 691.0], [84.2, 694.0], [84.3, 697.0], [84.4, 701.0], [84.5, 704.0], [84.6, 707.0], [84.7, 711.0], [84.8, 712.0], [84.9, 716.0], [85.0, 719.0], [85.1, 723.0], [85.2, 731.0], [85.3, 732.0], [85.4, 734.0], [85.5, 738.0], [85.6, 740.0], [85.7, 744.0], [85.8, 746.0], [85.9, 748.0], [86.0, 752.0], [86.1, 755.0], [86.2, 761.0], [86.3, 765.0], [86.4, 770.0], [86.5, 775.0], [86.6, 779.0], [86.7, 784.0], [86.8, 791.0], [86.9, 794.0], [87.0, 799.0], [87.1, 805.0], [87.2, 809.0], [87.3, 812.0], [87.4, 817.0], [87.5, 820.0], [87.6, 823.0], [87.7, 828.0], [87.8, 832.0], [87.9, 834.0], [88.0, 839.0], [88.1, 842.0], [88.2, 848.0], [88.3, 851.0], [88.4, 858.0], [88.5, 863.0], [88.6, 868.0], [88.7, 875.0], [88.8, 879.0], [88.9, 885.0], [89.0, 893.0], [89.1, 896.0], [89.2, 902.0], [89.3, 910.0], [89.4, 915.0], [89.5, 919.0], [89.6, 925.0], [89.7, 938.0], [89.8, 939.0], [89.9, 945.0], [90.0, 952.0], [90.1, 958.0], [90.2, 962.0], [90.3, 969.0], [90.4, 972.0], [90.5, 983.0], [90.6, 990.0], [90.7, 994.0], [90.8, 1000.0], [90.9, 1005.0], [91.0, 1011.0], [91.1, 1018.0], [91.2, 1021.0], [91.3, 1029.0], [91.4, 1031.0], [91.5, 1034.0], [91.6, 1037.0], [91.7, 1042.0], [91.8, 1045.0], [91.9, 1049.0], [92.0, 1052.0], [92.1, 1056.0], [92.2, 1061.0], [92.3, 1067.0], [92.4, 1070.0], [92.5, 1077.0], [92.6, 1086.0], [92.7, 1093.0], [92.8, 1103.0], [92.9, 1107.0], [93.0, 1114.0], [93.1, 1116.0], [93.2, 1120.0], [93.3, 1125.0], [93.4, 1128.0], [93.5, 1141.0], [93.6, 1148.0], [93.7, 1154.0], [93.8, 1162.0], [93.9, 1181.0], [94.0, 1190.0], [94.1, 1195.0], [94.2, 1207.0], [94.3, 1216.0], [94.4, 1229.0], [94.5, 1237.0], [94.6, 1253.0], [94.7, 1259.0], [94.8, 1270.0], [94.9, 1277.0], [95.0, 1290.0], [95.1, 1299.0], [95.2, 1308.0], [95.3, 1324.0], [95.4, 1332.0], [95.5, 1350.0], [95.6, 1358.0], [95.7, 1372.0], [95.8, 1385.0], [95.9, 1406.0], [96.0, 1411.0], [96.1, 1422.0], [96.2, 1440.0], [96.3, 1454.0], [96.4, 1473.0], [96.5, 1487.0], [96.6, 1517.0], [96.7, 1538.0], [96.8, 1576.0], [96.9, 1604.0], [97.0, 1628.0], [97.1, 1651.0], [97.2, 1667.0], [97.3, 1674.0], [97.4, 1698.0], [97.5, 1713.0], [97.6, 1746.0], [97.7, 1766.0], [97.8, 1803.0], [97.9, 1831.0], [98.0, 1855.0], [98.1, 1888.0], [98.2, 1908.0], [98.3, 1951.0], [98.4, 1991.0], [98.5, 2015.0], [98.6, 2097.0], [98.7, 2126.0], [98.8, 2154.0], [98.9, 2211.0], [99.0, 2258.0], [99.1, 2326.0], [99.2, 2404.0], [99.3, 2511.0], [99.4, 2590.0], [99.5, 2661.0], [99.6, 2856.0], [99.7, 3078.0], [99.8, 3294.0], [99.9, 3607.0], [100.0, 5475.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 1888.0, "series": [{"data": [[0.0, 1888.0], [600.0, 196.0], [700.0, 138.0], [800.0, 113.0], [900.0, 86.0], [1000.0, 103.0], [1100.0, 73.0], [1200.0, 52.0], [1300.0, 40.0], [1400.0, 34.0], [1500.0, 19.0], [100.0, 701.0], [1600.0, 29.0], [1700.0, 19.0], [1800.0, 18.0], [1900.0, 17.0], [2000.0, 8.0], [2100.0, 15.0], [2200.0, 8.0], [2300.0, 7.0], [2400.0, 5.0], [2500.0, 7.0], [2600.0, 5.0], [2800.0, 1.0], [2700.0, 4.0], [2900.0, 4.0], [3000.0, 4.0], [3100.0, 2.0], [200.0, 639.0], [3300.0, 1.0], [3200.0, 1.0], [3400.0, 2.0], [3500.0, 1.0], [3700.0, 1.0], [3600.0, 1.0], [3800.0, 1.0], [4200.0, 1.0], [300.0, 418.0], [5100.0, 1.0], [5400.0, 1.0], [400.0, 334.0], [500.0, 264.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 5400.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 182.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 3983.0, "series": [{"data": [[0.0, 3983.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1097.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 182.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.931637519872814, "minX": 1.60248834E12, "maxY": 10.0, "series": [{"data": [[1.6024884E12, 10.0], [1.60248846E12, 10.0], [1.60248834E12, 9.989524576954059], [1.60248852E12, 9.931637519872814]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60248852E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 372.67142857142926, "minX": 2.0, "maxY": 3311.5, "series": [{"data": [[4.0, 1138.0], [8.0, 876.0], [2.0, 3311.5], [9.0, 639.0], [10.0, 372.67142857142926], [5.0, 1295.0], [6.0, 528.5], [3.0, 1961.0], [7.0, 952.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.989357658684918, 374.96769289243764]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 5706.233333333334, "minX": 1.60248834E12, "maxY": 1288271.8, "series": [{"data": [[1.6024884E12, 1231025.0166666666], [1.60248846E12, 1288271.8], [1.60248834E12, 1162656.2666666666], [1.60248852E12, 557653.7]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6024884E12, 14595.283333333333], [1.60248846E12, 15356.383333333333], [1.60248834E12, 11060.85], [1.60248852E12, 5706.233333333334]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60248852E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 353.4967513290013, "minX": 1.60248834E12, "maxY": 427.04451510333865, "series": [{"data": [[1.6024884E12, 353.4967513290013], [1.60248846E12, 354.34844025897576], [1.60248834E12, 406.0926672038686], [1.60248852E12, 427.04451510333865]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60248852E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 349.6509155345541, "minX": 1.60248834E12, "maxY": 421.2464228934815, "series": [{"data": [[1.6024884E12, 349.6509155345541], [1.60248846E12, 350.0482636845203], [1.60248834E12, 400.59629331184505], [1.60248852E12, 421.2464228934815]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60248852E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.566215420835786, "minX": 1.60248834E12, "maxY": 0.9041095890410956, "series": [{"data": [[1.6024884E12, 0.6320141760188998], [1.60248846E12, 0.566215420835786], [1.60248834E12, 0.9041095890410956], [1.60248852E12, 0.5945945945945941]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60248852E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 34.0, "minX": 1.60248834E12, "maxY": 5475.0, "series": [{"data": [[1.6024884E12, 5475.0], [1.60248846E12, 3775.0], [1.60248834E12, 3316.0], [1.60248852E12, 4242.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6024884E12, 44.0], [1.60248846E12, 41.0], [1.60248834E12, 42.0], [1.60248852E12, 41.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6024884E12, 44.0], [1.60248846E12, 41.0], [1.60248834E12, 42.29580011844635], [1.60248852E12, 41.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6024884E12, 44.0], [1.60248846E12, 41.0], [1.60248834E12, 42.0], [1.60248852E12, 41.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.6024884E12, 39.0], [1.60248846E12, 34.0], [1.60248834E12, 37.0], [1.60248852E12, 40.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6024884E12, 175.0], [1.60248846E12, 198.0], [1.60248834E12, 250.0], [1.60248852E12, 223.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60248852E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 54.0, "minX": 1.0, "maxY": 1159.0, "series": [{"data": [[3.0, 1103.0], [4.0, 1159.0], [5.0, 987.0], [7.0, 868.0], [8.0, 1039.5], [9.0, 448.0], [10.0, 733.5], [11.0, 548.5], [12.0, 721.0], [13.0, 536.0], [14.0, 461.0], [15.0, 580.5], [16.0, 546.0], [17.0, 389.0], [18.0, 432.5], [19.0, 424.0], [20.0, 296.5], [21.0, 525.0], [22.0, 336.0], [23.0, 313.5], [24.0, 206.0], [25.0, 164.0], [26.0, 189.0], [27.0, 319.0], [28.0, 256.0], [29.0, 235.0], [30.0, 160.5], [31.0, 175.0], [32.0, 170.0], [33.0, 149.0], [35.0, 216.0], [34.0, 60.0], [36.0, 264.5], [37.0, 240.0], [39.0, 119.5], [38.0, 147.0], [40.0, 59.5], [41.0, 76.0], [42.0, 198.5], [44.0, 176.5], [47.0, 131.0], [48.0, 78.5], [50.0, 84.0], [52.0, 116.5], [53.0, 91.0], [55.0, 159.0], [56.0, 104.5], [57.0, 54.0], [58.0, 134.5], [60.0, 116.5], [63.0, 81.0], [62.0, 77.0], [67.0, 78.0], [66.0, 129.0], [69.0, 64.0], [73.0, 96.5], [74.0, 96.5], [77.0, 73.0], [1.0, 174.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 77.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 54.0, "minX": 1.0, "maxY": 1159.0, "series": [{"data": [[3.0, 1103.0], [4.0, 1159.0], [5.0, 977.0], [7.0, 867.0], [8.0, 1038.0], [9.0, 447.0], [10.0, 732.5], [11.0, 529.5], [12.0, 709.5], [13.0, 535.0], [14.0, 441.5], [15.0, 563.5], [16.0, 544.5], [17.0, 388.0], [18.0, 420.0], [19.0, 419.5], [20.0, 296.5], [21.0, 518.5], [22.0, 335.0], [23.0, 313.5], [24.0, 205.5], [25.0, 163.5], [26.0, 189.0], [27.0, 319.0], [28.0, 256.0], [29.0, 234.0], [30.0, 160.5], [31.0, 174.0], [32.0, 169.5], [33.0, 149.0], [35.0, 216.0], [34.0, 60.0], [36.0, 264.0], [37.0, 239.5], [39.0, 119.0], [38.0, 147.0], [40.0, 59.5], [41.0, 76.0], [42.0, 198.5], [44.0, 176.5], [47.0, 131.0], [48.0, 78.0], [50.0, 84.0], [52.0, 116.0], [53.0, 91.0], [55.0, 159.0], [56.0, 104.5], [57.0, 54.0], [58.0, 134.0], [60.0, 116.5], [63.0, 80.0], [62.0, 76.5], [67.0, 77.5], [66.0, 129.0], [69.0, 64.0], [73.0, 96.5], [74.0, 96.0], [77.0, 73.0], [1.0, 170.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 77.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 10.316666666666666, "minX": 1.60248834E12, "maxY": 28.316666666666666, "series": [{"data": [[1.6024884E12, 28.216666666666665], [1.60248846E12, 28.316666666666666], [1.60248834E12, 20.85], [1.60248852E12, 10.316666666666666]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60248852E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 10.483333333333333, "minX": 1.60248834E12, "maxY": 28.316666666666666, "series": [{"data": [[1.6024884E12, 28.216666666666665], [1.60248846E12, 28.316666666666666], [1.60248834E12, 20.683333333333334], [1.60248852E12, 10.483333333333333]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60248852E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 10.483333333333333, "minX": 1.60248834E12, "maxY": 28.316666666666666, "series": [{"data": [[1.6024884E12, 28.216666666666665], [1.60248846E12, 28.316666666666666], [1.60248834E12, 20.683333333333334], [1.60248852E12, 10.483333333333333]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60248852E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 10.483333333333333, "minX": 1.60248834E12, "maxY": 28.316666666666666, "series": [{"data": [[1.6024884E12, 28.216666666666665], [1.60248846E12, 28.316666666666666], [1.60248834E12, 20.683333333333334], [1.60248852E12, 10.483333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60248852E12, "title": "Total Transactions Per Second"}},
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

