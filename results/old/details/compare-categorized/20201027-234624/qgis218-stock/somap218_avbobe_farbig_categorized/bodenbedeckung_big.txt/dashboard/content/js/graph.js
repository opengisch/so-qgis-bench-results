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
        data: {"result": {"minY": 19.0, "minX": 0.0, "maxY": 13221.0, "series": [{"data": [[0.0, 19.0], [0.1, 21.0], [0.2, 22.0], [0.3, 22.0], [0.4, 24.0], [0.5, 24.0], [0.6, 25.0], [0.7, 26.0], [0.8, 26.0], [0.9, 27.0], [1.0, 27.0], [1.1, 27.0], [1.2, 28.0], [1.3, 28.0], [1.4, 28.0], [1.5, 28.0], [1.6, 29.0], [1.7, 29.0], [1.8, 29.0], [1.9, 30.0], [2.0, 30.0], [2.1, 30.0], [2.2, 31.0], [2.3, 31.0], [2.4, 31.0], [2.5, 31.0], [2.6, 31.0], [2.7, 31.0], [2.8, 32.0], [2.9, 32.0], [3.0, 32.0], [3.1, 32.0], [3.2, 33.0], [3.3, 33.0], [3.4, 33.0], [3.5, 33.0], [3.6, 33.0], [3.7, 33.0], [3.8, 34.0], [3.9, 34.0], [4.0, 34.0], [4.1, 34.0], [4.2, 35.0], [4.3, 35.0], [4.4, 35.0], [4.5, 35.0], [4.6, 35.0], [4.7, 36.0], [4.8, 36.0], [4.9, 36.0], [5.0, 36.0], [5.1, 36.0], [5.2, 36.0], [5.3, 37.0], [5.4, 37.0], [5.5, 37.0], [5.6, 37.0], [5.7, 37.0], [5.8, 38.0], [5.9, 38.0], [6.0, 38.0], [6.1, 38.0], [6.2, 39.0], [6.3, 39.0], [6.4, 39.0], [6.5, 39.0], [6.6, 39.0], [6.7, 39.0], [6.8, 40.0], [6.9, 40.0], [7.0, 40.0], [7.1, 40.0], [7.2, 40.0], [7.3, 40.0], [7.4, 40.0], [7.5, 41.0], [7.6, 41.0], [7.7, 41.0], [7.8, 41.0], [7.9, 41.0], [8.0, 42.0], [8.1, 42.0], [8.2, 42.0], [8.3, 42.0], [8.4, 43.0], [8.5, 43.0], [8.6, 43.0], [8.7, 43.0], [8.8, 43.0], [8.9, 44.0], [9.0, 44.0], [9.1, 44.0], [9.2, 44.0], [9.3, 44.0], [9.4, 44.0], [9.5, 45.0], [9.6, 45.0], [9.7, 45.0], [9.8, 45.0], [9.9, 45.0], [10.0, 46.0], [10.1, 46.0], [10.2, 46.0], [10.3, 46.0], [10.4, 46.0], [10.5, 46.0], [10.6, 47.0], [10.7, 47.0], [10.8, 47.0], [10.9, 47.0], [11.0, 47.0], [11.1, 47.0], [11.2, 48.0], [11.3, 48.0], [11.4, 48.0], [11.5, 48.0], [11.6, 49.0], [11.7, 49.0], [11.8, 49.0], [11.9, 49.0], [12.0, 49.0], [12.1, 49.0], [12.2, 50.0], [12.3, 50.0], [12.4, 50.0], [12.5, 50.0], [12.6, 50.0], [12.7, 50.0], [12.8, 51.0], [12.9, 51.0], [13.0, 51.0], [13.1, 51.0], [13.2, 51.0], [13.3, 52.0], [13.4, 52.0], [13.5, 52.0], [13.6, 52.0], [13.7, 52.0], [13.8, 52.0], [13.9, 52.0], [14.0, 52.0], [14.1, 53.0], [14.2, 53.0], [14.3, 53.0], [14.4, 53.0], [14.5, 53.0], [14.6, 53.0], [14.7, 54.0], [14.8, 54.0], [14.9, 54.0], [15.0, 54.0], [15.1, 55.0], [15.2, 55.0], [15.3, 55.0], [15.4, 55.0], [15.5, 55.0], [15.6, 56.0], [15.7, 56.0], [15.8, 56.0], [15.9, 56.0], [16.0, 56.0], [16.1, 56.0], [16.2, 57.0], [16.3, 57.0], [16.4, 57.0], [16.5, 57.0], [16.6, 57.0], [16.7, 58.0], [16.8, 58.0], [16.9, 58.0], [17.0, 58.0], [17.1, 58.0], [17.2, 58.0], [17.3, 59.0], [17.4, 59.0], [17.5, 59.0], [17.6, 59.0], [17.7, 59.0], [17.8, 60.0], [17.9, 60.0], [18.0, 60.0], [18.1, 60.0], [18.2, 60.0], [18.3, 60.0], [18.4, 61.0], [18.5, 61.0], [18.6, 61.0], [18.7, 61.0], [18.8, 62.0], [18.9, 62.0], [19.0, 62.0], [19.1, 62.0], [19.2, 62.0], [19.3, 63.0], [19.4, 63.0], [19.5, 63.0], [19.6, 63.0], [19.7, 64.0], [19.8, 64.0], [19.9, 64.0], [20.0, 64.0], [20.1, 64.0], [20.2, 64.0], [20.3, 65.0], [20.4, 65.0], [20.5, 65.0], [20.6, 65.0], [20.7, 65.0], [20.8, 66.0], [20.9, 66.0], [21.0, 66.0], [21.1, 66.0], [21.2, 67.0], [21.3, 67.0], [21.4, 67.0], [21.5, 67.0], [21.6, 67.0], [21.7, 68.0], [21.8, 68.0], [21.9, 68.0], [22.0, 68.0], [22.1, 69.0], [22.2, 69.0], [22.3, 69.0], [22.4, 69.0], [22.5, 70.0], [22.6, 70.0], [22.7, 70.0], [22.8, 71.0], [22.9, 71.0], [23.0, 71.0], [23.1, 71.0], [23.2, 71.0], [23.3, 72.0], [23.4, 72.0], [23.5, 72.0], [23.6, 72.0], [23.7, 72.0], [23.8, 73.0], [23.9, 73.0], [24.0, 73.0], [24.1, 73.0], [24.2, 74.0], [24.3, 74.0], [24.4, 74.0], [24.5, 74.0], [24.6, 75.0], [24.7, 75.0], [24.8, 76.0], [24.9, 76.0], [25.0, 76.0], [25.1, 76.0], [25.2, 77.0], [25.3, 77.0], [25.4, 77.0], [25.5, 77.0], [25.6, 77.0], [25.7, 78.0], [25.8, 78.0], [25.9, 79.0], [26.0, 79.0], [26.1, 79.0], [26.2, 79.0], [26.3, 80.0], [26.4, 80.0], [26.5, 80.0], [26.6, 81.0], [26.7, 81.0], [26.8, 81.0], [26.9, 82.0], [27.0, 82.0], [27.1, 82.0], [27.2, 83.0], [27.3, 83.0], [27.4, 83.0], [27.5, 84.0], [27.6, 84.0], [27.7, 84.0], [27.8, 85.0], [27.9, 85.0], [28.0, 85.0], [28.1, 86.0], [28.2, 86.0], [28.3, 86.0], [28.4, 86.0], [28.5, 87.0], [28.6, 87.0], [28.7, 87.0], [28.8, 88.0], [28.9, 88.0], [29.0, 89.0], [29.1, 89.0], [29.2, 90.0], [29.3, 90.0], [29.4, 90.0], [29.5, 91.0], [29.6, 91.0], [29.7, 92.0], [29.8, 92.0], [29.9, 93.0], [30.0, 93.0], [30.1, 94.0], [30.2, 94.0], [30.3, 94.0], [30.4, 95.0], [30.5, 95.0], [30.6, 95.0], [30.7, 96.0], [30.8, 96.0], [30.9, 97.0], [31.0, 97.0], [31.1, 97.0], [31.2, 98.0], [31.3, 98.0], [31.4, 99.0], [31.5, 100.0], [31.6, 100.0], [31.7, 100.0], [31.8, 102.0], [31.9, 102.0], [32.0, 103.0], [32.1, 103.0], [32.2, 104.0], [32.3, 104.0], [32.4, 105.0], [32.5, 105.0], [32.6, 106.0], [32.7, 107.0], [32.8, 107.0], [32.9, 108.0], [33.0, 109.0], [33.1, 110.0], [33.2, 111.0], [33.3, 112.0], [33.4, 113.0], [33.5, 113.0], [33.6, 114.0], [33.7, 114.0], [33.8, 115.0], [33.9, 115.0], [34.0, 116.0], [34.1, 117.0], [34.2, 118.0], [34.3, 119.0], [34.4, 119.0], [34.5, 120.0], [34.6, 121.0], [34.7, 122.0], [34.8, 123.0], [34.9, 123.0], [35.0, 124.0], [35.1, 124.0], [35.2, 125.0], [35.3, 126.0], [35.4, 126.0], [35.5, 127.0], [35.6, 128.0], [35.7, 128.0], [35.8, 129.0], [35.9, 130.0], [36.0, 131.0], [36.1, 132.0], [36.2, 133.0], [36.3, 135.0], [36.4, 136.0], [36.5, 137.0], [36.6, 138.0], [36.7, 139.0], [36.8, 139.0], [36.9, 140.0], [37.0, 142.0], [37.1, 142.0], [37.2, 144.0], [37.3, 144.0], [37.4, 146.0], [37.5, 147.0], [37.6, 148.0], [37.7, 148.0], [37.8, 149.0], [37.9, 150.0], [38.0, 151.0], [38.1, 152.0], [38.2, 152.0], [38.3, 153.0], [38.4, 154.0], [38.5, 156.0], [38.6, 157.0], [38.7, 158.0], [38.8, 159.0], [38.9, 160.0], [39.0, 161.0], [39.1, 162.0], [39.2, 162.0], [39.3, 163.0], [39.4, 164.0], [39.5, 165.0], [39.6, 166.0], [39.7, 167.0], [39.8, 167.0], [39.9, 168.0], [40.0, 169.0], [40.1, 170.0], [40.2, 170.0], [40.3, 171.0], [40.4, 172.0], [40.5, 172.0], [40.6, 173.0], [40.7, 173.0], [40.8, 174.0], [40.9, 175.0], [41.0, 175.0], [41.1, 176.0], [41.2, 177.0], [41.3, 177.0], [41.4, 177.0], [41.5, 178.0], [41.6, 178.0], [41.7, 179.0], [41.8, 179.0], [41.9, 180.0], [42.0, 181.0], [42.1, 181.0], [42.2, 182.0], [42.3, 182.0], [42.4, 183.0], [42.5, 183.0], [42.6, 183.0], [42.7, 184.0], [42.8, 184.0], [42.9, 185.0], [43.0, 185.0], [43.1, 186.0], [43.2, 186.0], [43.3, 187.0], [43.4, 187.0], [43.5, 187.0], [43.6, 188.0], [43.7, 188.0], [43.8, 189.0], [43.9, 190.0], [44.0, 190.0], [44.1, 191.0], [44.2, 191.0], [44.3, 192.0], [44.4, 192.0], [44.5, 193.0], [44.6, 194.0], [44.7, 194.0], [44.8, 195.0], [44.9, 196.0], [45.0, 197.0], [45.1, 197.0], [45.2, 198.0], [45.3, 199.0], [45.4, 199.0], [45.5, 200.0], [45.6, 201.0], [45.7, 202.0], [45.8, 203.0], [45.9, 203.0], [46.0, 204.0], [46.1, 205.0], [46.2, 205.0], [46.3, 206.0], [46.4, 206.0], [46.5, 207.0], [46.6, 207.0], [46.7, 209.0], [46.8, 209.0], [46.9, 210.0], [47.0, 211.0], [47.1, 211.0], [47.2, 212.0], [47.3, 212.0], [47.4, 213.0], [47.5, 213.0], [47.6, 214.0], [47.7, 215.0], [47.8, 216.0], [47.9, 217.0], [48.0, 218.0], [48.1, 218.0], [48.2, 219.0], [48.3, 220.0], [48.4, 220.0], [48.5, 221.0], [48.6, 222.0], [48.7, 222.0], [48.8, 223.0], [48.9, 224.0], [49.0, 225.0], [49.1, 226.0], [49.2, 226.0], [49.3, 227.0], [49.4, 228.0], [49.5, 229.0], [49.6, 229.0], [49.7, 230.0], [49.8, 231.0], [49.9, 233.0], [50.0, 234.0], [50.1, 234.0], [50.2, 235.0], [50.3, 236.0], [50.4, 236.0], [50.5, 238.0], [50.6, 239.0], [50.7, 239.0], [50.8, 240.0], [50.9, 240.0], [51.0, 241.0], [51.1, 243.0], [51.2, 245.0], [51.3, 245.0], [51.4, 246.0], [51.5, 247.0], [51.6, 247.0], [51.7, 249.0], [51.8, 250.0], [51.9, 251.0], [52.0, 252.0], [52.1, 252.0], [52.2, 253.0], [52.3, 254.0], [52.4, 255.0], [52.5, 255.0], [52.6, 256.0], [52.7, 256.0], [52.8, 257.0], [52.9, 258.0], [53.0, 258.0], [53.1, 259.0], [53.2, 260.0], [53.3, 261.0], [53.4, 261.0], [53.5, 262.0], [53.6, 263.0], [53.7, 264.0], [53.8, 265.0], [53.9, 266.0], [54.0, 266.0], [54.1, 267.0], [54.2, 268.0], [54.3, 268.0], [54.4, 269.0], [54.5, 270.0], [54.6, 272.0], [54.7, 273.0], [54.8, 275.0], [54.9, 276.0], [55.0, 276.0], [55.1, 277.0], [55.2, 278.0], [55.3, 280.0], [55.4, 280.0], [55.5, 282.0], [55.6, 283.0], [55.7, 284.0], [55.8, 284.0], [55.9, 285.0], [56.0, 286.0], [56.1, 287.0], [56.2, 288.0], [56.3, 289.0], [56.4, 290.0], [56.5, 291.0], [56.6, 291.0], [56.7, 292.0], [56.8, 293.0], [56.9, 294.0], [57.0, 295.0], [57.1, 296.0], [57.2, 298.0], [57.3, 299.0], [57.4, 300.0], [57.5, 300.0], [57.6, 301.0], [57.7, 302.0], [57.8, 302.0], [57.9, 303.0], [58.0, 304.0], [58.1, 305.0], [58.2, 305.0], [58.3, 307.0], [58.4, 307.0], [58.5, 309.0], [58.6, 310.0], [58.7, 311.0], [58.8, 312.0], [58.9, 313.0], [59.0, 314.0], [59.1, 315.0], [59.2, 316.0], [59.3, 317.0], [59.4, 317.0], [59.5, 318.0], [59.6, 318.0], [59.7, 319.0], [59.8, 320.0], [59.9, 322.0], [60.0, 323.0], [60.1, 324.0], [60.2, 324.0], [60.3, 325.0], [60.4, 327.0], [60.5, 327.0], [60.6, 329.0], [60.7, 331.0], [60.8, 331.0], [60.9, 331.0], [61.0, 332.0], [61.1, 332.0], [61.2, 333.0], [61.3, 334.0], [61.4, 335.0], [61.5, 335.0], [61.6, 336.0], [61.7, 337.0], [61.8, 339.0], [61.9, 340.0], [62.0, 340.0], [62.1, 341.0], [62.2, 342.0], [62.3, 343.0], [62.4, 343.0], [62.5, 344.0], [62.6, 344.0], [62.7, 345.0], [62.8, 345.0], [62.9, 346.0], [63.0, 347.0], [63.1, 348.0], [63.2, 349.0], [63.3, 349.0], [63.4, 350.0], [63.5, 350.0], [63.6, 351.0], [63.7, 351.0], [63.8, 353.0], [63.9, 354.0], [64.0, 354.0], [64.1, 355.0], [64.2, 356.0], [64.3, 357.0], [64.4, 358.0], [64.5, 358.0], [64.6, 360.0], [64.7, 361.0], [64.8, 362.0], [64.9, 363.0], [65.0, 364.0], [65.1, 365.0], [65.2, 367.0], [65.3, 368.0], [65.4, 368.0], [65.5, 369.0], [65.6, 370.0], [65.7, 370.0], [65.8, 372.0], [65.9, 373.0], [66.0, 374.0], [66.1, 375.0], [66.2, 377.0], [66.3, 377.0], [66.4, 379.0], [66.5, 379.0], [66.6, 379.0], [66.7, 381.0], [66.8, 382.0], [66.9, 383.0], [67.0, 384.0], [67.1, 385.0], [67.2, 385.0], [67.3, 386.0], [67.4, 387.0], [67.5, 388.0], [67.6, 390.0], [67.7, 391.0], [67.8, 392.0], [67.9, 394.0], [68.0, 395.0], [68.1, 396.0], [68.2, 397.0], [68.3, 398.0], [68.4, 398.0], [68.5, 400.0], [68.6, 401.0], [68.7, 402.0], [68.8, 403.0], [68.9, 405.0], [69.0, 405.0], [69.1, 407.0], [69.2, 407.0], [69.3, 408.0], [69.4, 409.0], [69.5, 410.0], [69.6, 411.0], [69.7, 412.0], [69.8, 413.0], [69.9, 414.0], [70.0, 415.0], [70.1, 417.0], [70.2, 417.0], [70.3, 419.0], [70.4, 422.0], [70.5, 423.0], [70.6, 425.0], [70.7, 427.0], [70.8, 428.0], [70.9, 428.0], [71.0, 430.0], [71.1, 432.0], [71.2, 433.0], [71.3, 433.0], [71.4, 434.0], [71.5, 435.0], [71.6, 436.0], [71.7, 437.0], [71.8, 437.0], [71.9, 439.0], [72.0, 440.0], [72.1, 441.0], [72.2, 442.0], [72.3, 442.0], [72.4, 443.0], [72.5, 444.0], [72.6, 445.0], [72.7, 446.0], [72.8, 447.0], [72.9, 448.0], [73.0, 449.0], [73.1, 452.0], [73.2, 454.0], [73.3, 455.0], [73.4, 456.0], [73.5, 456.0], [73.6, 458.0], [73.7, 459.0], [73.8, 460.0], [73.9, 462.0], [74.0, 463.0], [74.1, 464.0], [74.2, 464.0], [74.3, 465.0], [74.4, 467.0], [74.5, 468.0], [74.6, 469.0], [74.7, 469.0], [74.8, 471.0], [74.9, 473.0], [75.0, 475.0], [75.1, 477.0], [75.2, 477.0], [75.3, 479.0], [75.4, 480.0], [75.5, 481.0], [75.6, 482.0], [75.7, 483.0], [75.8, 485.0], [75.9, 487.0], [76.0, 488.0], [76.1, 488.0], [76.2, 490.0], [76.3, 490.0], [76.4, 492.0], [76.5, 492.0], [76.6, 494.0], [76.7, 496.0], [76.8, 497.0], [76.9, 497.0], [77.0, 499.0], [77.1, 500.0], [77.2, 500.0], [77.3, 501.0], [77.4, 503.0], [77.5, 503.0], [77.6, 503.0], [77.7, 505.0], [77.8, 506.0], [77.9, 506.0], [78.0, 508.0], [78.1, 509.0], [78.2, 511.0], [78.3, 512.0], [78.4, 514.0], [78.5, 515.0], [78.6, 516.0], [78.7, 517.0], [78.8, 518.0], [78.9, 519.0], [79.0, 520.0], [79.1, 520.0], [79.2, 521.0], [79.3, 524.0], [79.4, 526.0], [79.5, 527.0], [79.6, 529.0], [79.7, 531.0], [79.8, 532.0], [79.9, 533.0], [80.0, 534.0], [80.1, 536.0], [80.2, 537.0], [80.3, 537.0], [80.4, 538.0], [80.5, 539.0], [80.6, 540.0], [80.7, 541.0], [80.8, 542.0], [80.9, 543.0], [81.0, 544.0], [81.1, 546.0], [81.2, 548.0], [81.3, 549.0], [81.4, 549.0], [81.5, 551.0], [81.6, 553.0], [81.7, 554.0], [81.8, 555.0], [81.9, 556.0], [82.0, 557.0], [82.1, 558.0], [82.2, 559.0], [82.3, 560.0], [82.4, 561.0], [82.5, 562.0], [82.6, 563.0], [82.7, 564.0], [82.8, 565.0], [82.9, 566.0], [83.0, 566.0], [83.1, 567.0], [83.2, 567.0], [83.3, 569.0], [83.4, 569.0], [83.5, 571.0], [83.6, 573.0], [83.7, 574.0], [83.8, 576.0], [83.9, 577.0], [84.0, 578.0], [84.1, 579.0], [84.2, 580.0], [84.3, 581.0], [84.4, 582.0], [84.5, 583.0], [84.6, 584.0], [84.7, 586.0], [84.8, 588.0], [84.9, 589.0], [85.0, 590.0], [85.1, 590.0], [85.2, 591.0], [85.3, 593.0], [85.4, 593.0], [85.5, 595.0], [85.6, 599.0], [85.7, 600.0], [85.8, 602.0], [85.9, 603.0], [86.0, 604.0], [86.1, 605.0], [86.2, 608.0], [86.3, 609.0], [86.4, 611.0], [86.5, 612.0], [86.6, 614.0], [86.7, 615.0], [86.8, 616.0], [86.9, 619.0], [87.0, 620.0], [87.1, 623.0], [87.2, 624.0], [87.3, 626.0], [87.4, 627.0], [87.5, 628.0], [87.6, 628.0], [87.7, 629.0], [87.8, 631.0], [87.9, 633.0], [88.0, 633.0], [88.1, 637.0], [88.2, 639.0], [88.3, 643.0], [88.4, 644.0], [88.5, 648.0], [88.6, 650.0], [88.7, 651.0], [88.8, 652.0], [88.9, 654.0], [89.0, 657.0], [89.1, 659.0], [89.2, 661.0], [89.3, 662.0], [89.4, 663.0], [89.5, 664.0], [89.6, 666.0], [89.7, 668.0], [89.8, 669.0], [89.9, 673.0], [90.0, 674.0], [90.1, 678.0], [90.2, 682.0], [90.3, 684.0], [90.4, 687.0], [90.5, 689.0], [90.6, 692.0], [90.7, 694.0], [90.8, 697.0], [90.9, 702.0], [91.0, 704.0], [91.1, 709.0], [91.2, 711.0], [91.3, 715.0], [91.4, 719.0], [91.5, 719.0], [91.6, 721.0], [91.7, 725.0], [91.8, 729.0], [91.9, 734.0], [92.0, 737.0], [92.1, 739.0], [92.2, 742.0], [92.3, 749.0], [92.4, 755.0], [92.5, 760.0], [92.6, 768.0], [92.7, 771.0], [92.8, 777.0], [92.9, 784.0], [93.0, 789.0], [93.1, 792.0], [93.2, 798.0], [93.3, 803.0], [93.4, 806.0], [93.5, 810.0], [93.6, 814.0], [93.7, 824.0], [93.8, 827.0], [93.9, 832.0], [94.0, 841.0], [94.1, 849.0], [94.2, 860.0], [94.3, 877.0], [94.4, 891.0], [94.5, 920.0], [94.6, 927.0], [94.7, 935.0], [94.8, 964.0], [94.9, 990.0], [95.0, 1019.0], [95.1, 1040.0], [95.2, 1057.0], [95.3, 1097.0], [95.4, 1138.0], [95.5, 1188.0], [95.6, 1231.0], [95.7, 1260.0], [95.8, 1319.0], [95.9, 1341.0], [96.0, 1407.0], [96.1, 1437.0], [96.2, 1483.0], [96.3, 1559.0], [96.4, 1598.0], [96.5, 1655.0], [96.6, 1686.0], [96.7, 1750.0], [96.8, 1771.0], [96.9, 1885.0], [97.0, 1935.0], [97.1, 1977.0], [97.2, 2022.0], [97.3, 2155.0], [97.4, 2303.0], [97.5, 2531.0], [97.6, 2570.0], [97.7, 2659.0], [97.8, 2728.0], [97.9, 2929.0], [98.0, 3094.0], [98.1, 3129.0], [98.2, 3219.0], [98.3, 3373.0], [98.4, 3399.0], [98.5, 3562.0], [98.6, 3682.0], [98.7, 4008.0], [98.8, 4313.0], [98.9, 4647.0], [99.0, 4908.0], [99.1, 5309.0], [99.2, 5526.0], [99.3, 7367.0], [99.4, 8169.0], [99.5, 8804.0], [99.6, 10138.0], [99.7, 10807.0], [99.8, 11372.0], [99.9, 12557.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 1634.0, "series": [{"data": [[0.0, 1634.0], [600.0, 269.0], [700.0, 124.0], [800.0, 64.0], [900.0, 24.0], [1000.0, 21.0], [1100.0, 10.0], [1200.0, 14.0], [1300.0, 11.0], [1400.0, 11.0], [1500.0, 11.0], [1600.0, 12.0], [1700.0, 10.0], [1800.0, 5.0], [1900.0, 12.0], [2000.0, 4.0], [2100.0, 5.0], [2300.0, 3.0], [2200.0, 3.0], [2400.0, 1.0], [2500.0, 9.0], [2600.0, 5.0], [2700.0, 6.0], [2900.0, 4.0], [3000.0, 6.0], [3100.0, 7.0], [3200.0, 4.0], [3300.0, 7.0], [3400.0, 2.0], [3500.0, 5.0], [3600.0, 4.0], [3700.0, 2.0], [3900.0, 2.0], [4000.0, 2.0], [4300.0, 6.0], [4200.0, 1.0], [4600.0, 3.0], [4800.0, 3.0], [5100.0, 1.0], [4900.0, 3.0], [5000.0, 1.0], [5300.0, 2.0], [5200.0, 1.0], [5400.0, 3.0], [5500.0, 1.0], [5700.0, 1.0], [6200.0, 1.0], [6400.0, 1.0], [7200.0, 1.0], [7300.0, 1.0], [7700.0, 1.0], [7900.0, 1.0], [8000.0, 2.0], [8100.0, 1.0], [8300.0, 1.0], [8600.0, 1.0], [8500.0, 2.0], [8400.0, 1.0], [9200.0, 2.0], [8800.0, 2.0], [9400.0, 1.0], [10100.0, 2.0], [10700.0, 1.0], [10500.0, 1.0], [10300.0, 1.0], [10800.0, 1.0], [11000.0, 1.0], [10900.0, 2.0], [11600.0, 1.0], [11300.0, 2.0], [11900.0, 1.0], [11800.0, 1.0], [12200.0, 1.0], [12500.0, 2.0], [13100.0, 1.0], [13200.0, 2.0], [13000.0, 1.0], [100.0, 724.0], [200.0, 620.0], [300.0, 577.0], [400.0, 446.0], [500.0, 444.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 13200.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 197.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 4009.0, "series": [{"data": [[0.0, 4009.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 984.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 197.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.948512585812354, "minX": 1.60384236E12, "maxY": 10.0, "series": [{"data": [[1.60384242E12, 10.0], [1.6038426E12, 9.948512585812354], [1.60384248E12, 10.0], [1.60384236E12, 9.995226730310254], [1.60384254E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6038426E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 186.0, "minX": 1.0, "maxY": 7367.0, "series": [{"data": [[8.0, 421.0], [4.0, 539.0], [2.0, 600.0], [1.0, 7367.0], [9.0, 186.0], [10.0, 437.3032818532816], [5.0, 567.0], [6.0, 668.0], [3.0, 513.0], [7.0, 335.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.99094412331403, 438.6990366088631]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 3131.1, "minX": 1.60384236E12, "maxY": 6216788.166666667, "series": [{"data": [[1.60384242E12, 5553382.766666667], [1.6038426E12, 3480152.0], [1.60384248E12, 6216788.166666667], [1.60384236E12, 1583979.75], [1.60384254E12, 6127859.033333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60384242E12, 7919.216666666666], [1.6038426E12, 6877.933333333333], [1.60384248E12, 11750.133333333333], [1.60384236E12, 3131.1], [1.60384254E12, 10263.25]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6038426E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 275.3436754176611, "minX": 1.60384236E12, "maxY": 577.5096153846143, "series": [{"data": [[1.60384242E12, 577.5096153846143], [1.6038426E12, 416.7688787185356], [1.60384248E12, 393.91611624834917], [1.60384236E12, 275.3436754176611], [1.60384254E12, 446.9277736411017]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6038426E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 273.6420047732698, "minX": 1.60384236E12, "maxY": 573.921153846154, "series": [{"data": [[1.60384242E12, 573.921153846154], [1.6038426E12, 415.04347826086973], [1.60384248E12, 391.5297225891676], [1.60384236E12, 273.6420047732698], [1.60384254E12, 444.69843633655995]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6038426E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.005284015852047565, "minX": 1.60384236E12, "maxY": 0.2529832935560858, "series": [{"data": [[1.60384242E12, 0.010576923076923072], [1.6038426E12, 0.0057208237986269995], [1.60384248E12, 0.005284015852047565], [1.60384236E12, 0.2529832935560858], [1.60384254E12, 0.008935219657483232]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6038426E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 19.0, "minX": 1.60384236E12, "maxY": 13221.0, "series": [{"data": [[1.60384242E12, 11628.0], [1.6038426E12, 13221.0], [1.60384248E12, 13212.0], [1.60384236E12, 1983.0], [1.60384254E12, 9275.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60384242E12, 28.0], [1.6038426E12, 22.0], [1.60384248E12, 28.0], [1.60384236E12, 26.0], [1.60384254E12, 27.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60384242E12, 28.0], [1.6038426E12, 22.0], [1.60384248E12, 28.0], [1.60384236E12, 26.316000080108644], [1.60384254E12, 27.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60384242E12, 28.0], [1.6038426E12, 22.0], [1.60384248E12, 28.0], [1.60384236E12, 26.0], [1.60384254E12, 27.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60384242E12, 24.0], [1.6038426E12, 19.0], [1.60384248E12, 22.0], [1.60384236E12, 24.0], [1.60384254E12, 21.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60384242E12, 268.0], [1.6038426E12, 207.5], [1.60384248E12, 230.0], [1.60384236E12, 231.0], [1.60384254E12, 239.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6038426E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 59.5, "minX": 1.0, "maxY": 4568.0, "series": [{"data": [[2.0, 3261.5], [3.0, 526.0], [4.0, 410.5], [5.0, 654.0], [6.0, 450.5], [7.0, 640.0], [8.0, 527.0], [9.0, 340.0], [10.0, 416.0], [11.0, 412.0], [12.0, 446.5], [13.0, 346.0], [14.0, 326.5], [15.0, 291.0], [16.0, 291.0], [17.0, 472.0], [18.0, 458.5], [19.0, 486.0], [20.0, 306.0], [21.0, 454.0], [22.0, 367.0], [23.0, 394.0], [24.0, 407.5], [25.0, 347.5], [26.0, 328.0], [27.0, 184.0], [28.0, 228.0], [29.0, 145.5], [30.0, 288.0], [31.0, 303.0], [32.0, 240.5], [33.0, 80.5], [34.0, 276.5], [35.0, 173.0], [37.0, 228.0], [36.0, 208.5], [38.0, 199.0], [39.0, 260.0], [41.0, 188.0], [43.0, 146.0], [44.0, 132.5], [46.0, 171.5], [48.0, 182.5], [49.0, 109.0], [51.0, 98.0], [53.0, 184.5], [52.0, 174.0], [60.0, 79.5], [64.0, 81.5], [66.0, 59.5], [65.0, 62.0], [71.0, 66.0], [69.0, 82.0], [1.0, 4568.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 71.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 59.0, "minX": 1.0, "maxY": 4556.0, "series": [{"data": [[2.0, 3260.0], [3.0, 524.0], [4.0, 404.5], [5.0, 652.0], [6.0, 433.5], [7.0, 636.0], [8.0, 520.5], [9.0, 339.0], [10.0, 415.5], [11.0, 411.0], [12.0, 433.5], [13.0, 341.0], [14.0, 322.5], [15.0, 290.5], [16.0, 289.0], [17.0, 469.0], [18.0, 453.5], [19.0, 483.0], [20.0, 306.0], [21.0, 452.0], [22.0, 365.0], [23.0, 385.0], [24.0, 407.0], [25.0, 345.0], [26.0, 325.5], [27.0, 184.0], [28.0, 227.5], [29.0, 145.5], [30.0, 284.0], [31.0, 302.0], [32.0, 239.5], [33.0, 80.0], [34.0, 273.0], [35.0, 173.0], [37.0, 227.0], [36.0, 207.5], [38.0, 196.5], [39.0, 256.0], [41.0, 179.0], [43.0, 146.0], [44.0, 132.0], [46.0, 167.0], [48.0, 181.5], [49.0, 109.0], [51.0, 96.0], [53.0, 184.0], [52.0, 174.0], [60.0, 79.5], [64.0, 81.5], [66.0, 59.0], [65.0, 62.0], [71.0, 65.0], [69.0, 82.0], [1.0, 4556.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 71.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 7.15, "minX": 1.60384236E12, "maxY": 25.233333333333334, "series": [{"data": [[1.60384242E12, 17.333333333333332], [1.6038426E12, 14.4], [1.60384248E12, 25.233333333333334], [1.60384236E12, 7.15], [1.60384254E12, 22.383333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6038426E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 6.983333333333333, "minX": 1.60384236E12, "maxY": 25.233333333333334, "series": [{"data": [[1.60384242E12, 17.333333333333332], [1.6038426E12, 14.566666666666666], [1.60384248E12, 25.233333333333334], [1.60384236E12, 6.983333333333333], [1.60384254E12, 22.383333333333333]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6038426E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 6.983333333333333, "minX": 1.60384236E12, "maxY": 25.233333333333334, "series": [{"data": [[1.60384242E12, 17.333333333333332], [1.6038426E12, 14.566666666666666], [1.60384248E12, 25.233333333333334], [1.60384236E12, 6.983333333333333], [1.60384254E12, 22.383333333333333]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6038426E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 6.983333333333333, "minX": 1.60384236E12, "maxY": 25.233333333333334, "series": [{"data": [[1.60384242E12, 17.333333333333332], [1.6038426E12, 14.566666666666666], [1.60384248E12, 25.233333333333334], [1.60384236E12, 6.983333333333333], [1.60384254E12, 22.383333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6038426E12, "title": "Total Transactions Per Second"}},
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

