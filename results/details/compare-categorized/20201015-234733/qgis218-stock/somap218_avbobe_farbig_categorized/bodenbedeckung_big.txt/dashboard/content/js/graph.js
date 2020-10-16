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
        data: {"result": {"minY": 16.0, "minX": 0.0, "maxY": 13171.0, "series": [{"data": [[0.0, 16.0], [0.1, 21.0], [0.2, 21.0], [0.3, 22.0], [0.4, 23.0], [0.5, 24.0], [0.6, 24.0], [0.7, 25.0], [0.8, 26.0], [0.9, 26.0], [1.0, 26.0], [1.1, 27.0], [1.2, 27.0], [1.3, 27.0], [1.4, 27.0], [1.5, 28.0], [1.6, 28.0], [1.7, 28.0], [1.8, 28.0], [1.9, 29.0], [2.0, 29.0], [2.1, 29.0], [2.2, 30.0], [2.3, 30.0], [2.4, 31.0], [2.5, 31.0], [2.6, 31.0], [2.7, 31.0], [2.8, 32.0], [2.9, 32.0], [3.0, 32.0], [3.1, 32.0], [3.2, 32.0], [3.3, 32.0], [3.4, 33.0], [3.5, 33.0], [3.6, 33.0], [3.7, 33.0], [3.8, 34.0], [3.9, 34.0], [4.0, 34.0], [4.1, 34.0], [4.2, 34.0], [4.3, 35.0], [4.4, 35.0], [4.5, 35.0], [4.6, 35.0], [4.7, 35.0], [4.8, 35.0], [4.9, 36.0], [5.0, 36.0], [5.1, 36.0], [5.2, 36.0], [5.3, 37.0], [5.4, 37.0], [5.5, 37.0], [5.6, 37.0], [5.7, 37.0], [5.8, 37.0], [5.9, 38.0], [6.0, 38.0], [6.1, 38.0], [6.2, 38.0], [6.3, 38.0], [6.4, 39.0], [6.5, 39.0], [6.6, 39.0], [6.7, 39.0], [6.8, 39.0], [6.9, 39.0], [7.0, 40.0], [7.1, 40.0], [7.2, 40.0], [7.3, 40.0], [7.4, 40.0], [7.5, 40.0], [7.6, 41.0], [7.7, 41.0], [7.8, 41.0], [7.9, 41.0], [8.0, 41.0], [8.1, 41.0], [8.2, 41.0], [8.3, 42.0], [8.4, 42.0], [8.5, 42.0], [8.6, 42.0], [8.7, 42.0], [8.8, 43.0], [8.9, 43.0], [9.0, 43.0], [9.1, 43.0], [9.2, 43.0], [9.3, 44.0], [9.4, 44.0], [9.5, 44.0], [9.6, 44.0], [9.7, 44.0], [9.8, 44.0], [9.9, 44.0], [10.0, 44.0], [10.1, 45.0], [10.2, 45.0], [10.3, 45.0], [10.4, 45.0], [10.5, 45.0], [10.6, 46.0], [10.7, 46.0], [10.8, 46.0], [10.9, 46.0], [11.0, 47.0], [11.1, 47.0], [11.2, 47.0], [11.3, 47.0], [11.4, 47.0], [11.5, 47.0], [11.6, 48.0], [11.7, 48.0], [11.8, 48.0], [11.9, 48.0], [12.0, 48.0], [12.1, 48.0], [12.2, 49.0], [12.3, 49.0], [12.4, 49.0], [12.5, 49.0], [12.6, 49.0], [12.7, 49.0], [12.8, 49.0], [12.9, 49.0], [13.0, 50.0], [13.1, 50.0], [13.2, 50.0], [13.3, 50.0], [13.4, 50.0], [13.5, 51.0], [13.6, 51.0], [13.7, 51.0], [13.8, 51.0], [13.9, 51.0], [14.0, 51.0], [14.1, 52.0], [14.2, 52.0], [14.3, 52.0], [14.4, 52.0], [14.5, 52.0], [14.6, 53.0], [14.7, 53.0], [14.8, 53.0], [14.9, 53.0], [15.0, 53.0], [15.1, 54.0], [15.2, 54.0], [15.3, 54.0], [15.4, 54.0], [15.5, 54.0], [15.6, 55.0], [15.7, 55.0], [15.8, 55.0], [15.9, 55.0], [16.0, 55.0], [16.1, 55.0], [16.2, 55.0], [16.3, 56.0], [16.4, 56.0], [16.5, 56.0], [16.6, 56.0], [16.7, 57.0], [16.8, 57.0], [16.9, 57.0], [17.0, 57.0], [17.1, 57.0], [17.2, 57.0], [17.3, 57.0], [17.4, 58.0], [17.5, 58.0], [17.6, 58.0], [17.7, 58.0], [17.8, 58.0], [17.9, 59.0], [18.0, 59.0], [18.1, 59.0], [18.2, 59.0], [18.3, 59.0], [18.4, 59.0], [18.5, 60.0], [18.6, 60.0], [18.7, 60.0], [18.8, 60.0], [18.9, 61.0], [19.0, 61.0], [19.1, 61.0], [19.2, 61.0], [19.3, 61.0], [19.4, 62.0], [19.5, 62.0], [19.6, 62.0], [19.7, 62.0], [19.8, 62.0], [19.9, 62.0], [20.0, 63.0], [20.1, 63.0], [20.2, 63.0], [20.3, 63.0], [20.4, 63.0], [20.5, 63.0], [20.6, 64.0], [20.7, 64.0], [20.8, 64.0], [20.9, 64.0], [21.0, 64.0], [21.1, 65.0], [21.2, 65.0], [21.3, 65.0], [21.4, 65.0], [21.5, 66.0], [21.6, 66.0], [21.7, 66.0], [21.8, 67.0], [21.9, 67.0], [22.0, 67.0], [22.1, 67.0], [22.2, 68.0], [22.3, 68.0], [22.4, 68.0], [22.5, 69.0], [22.6, 69.0], [22.7, 69.0], [22.8, 70.0], [22.9, 70.0], [23.0, 70.0], [23.1, 70.0], [23.2, 70.0], [23.3, 70.0], [23.4, 71.0], [23.5, 71.0], [23.6, 71.0], [23.7, 71.0], [23.8, 72.0], [23.9, 72.0], [24.0, 72.0], [24.1, 72.0], [24.2, 72.0], [24.3, 72.0], [24.4, 73.0], [24.5, 73.0], [24.6, 73.0], [24.7, 73.0], [24.8, 74.0], [24.9, 74.0], [25.0, 74.0], [25.1, 74.0], [25.2, 74.0], [25.3, 75.0], [25.4, 75.0], [25.5, 75.0], [25.6, 76.0], [25.7, 76.0], [25.8, 77.0], [25.9, 77.0], [26.0, 77.0], [26.1, 77.0], [26.2, 78.0], [26.3, 78.0], [26.4, 78.0], [26.5, 79.0], [26.6, 79.0], [26.7, 79.0], [26.8, 80.0], [26.9, 80.0], [27.0, 80.0], [27.1, 80.0], [27.2, 81.0], [27.3, 81.0], [27.4, 81.0], [27.5, 82.0], [27.6, 82.0], [27.7, 82.0], [27.8, 82.0], [27.9, 82.0], [28.0, 83.0], [28.1, 83.0], [28.2, 84.0], [28.3, 84.0], [28.4, 84.0], [28.5, 85.0], [28.6, 85.0], [28.7, 86.0], [28.8, 86.0], [28.9, 86.0], [29.0, 87.0], [29.1, 87.0], [29.2, 88.0], [29.3, 88.0], [29.4, 89.0], [29.5, 89.0], [29.6, 89.0], [29.7, 90.0], [29.8, 90.0], [29.9, 90.0], [30.0, 91.0], [30.1, 91.0], [30.2, 92.0], [30.3, 93.0], [30.4, 93.0], [30.5, 94.0], [30.6, 95.0], [30.7, 95.0], [30.8, 96.0], [30.9, 97.0], [31.0, 97.0], [31.1, 97.0], [31.2, 98.0], [31.3, 98.0], [31.4, 99.0], [31.5, 99.0], [31.6, 99.0], [31.7, 100.0], [31.8, 100.0], [31.9, 101.0], [32.0, 102.0], [32.1, 102.0], [32.2, 103.0], [32.3, 103.0], [32.4, 103.0], [32.5, 104.0], [32.6, 104.0], [32.7, 105.0], [32.8, 106.0], [32.9, 107.0], [33.0, 108.0], [33.1, 109.0], [33.2, 110.0], [33.3, 111.0], [33.4, 111.0], [33.5, 111.0], [33.6, 112.0], [33.7, 112.0], [33.8, 113.0], [33.9, 113.0], [34.0, 113.0], [34.1, 114.0], [34.2, 115.0], [34.3, 115.0], [34.4, 116.0], [34.5, 117.0], [34.6, 118.0], [34.7, 119.0], [34.8, 119.0], [34.9, 121.0], [35.0, 121.0], [35.1, 122.0], [35.2, 123.0], [35.3, 124.0], [35.4, 125.0], [35.5, 125.0], [35.6, 126.0], [35.7, 126.0], [35.8, 127.0], [35.9, 127.0], [36.0, 128.0], [36.1, 128.0], [36.2, 129.0], [36.3, 130.0], [36.4, 132.0], [36.5, 132.0], [36.6, 133.0], [36.7, 134.0], [36.8, 136.0], [36.9, 137.0], [37.0, 138.0], [37.1, 138.0], [37.2, 139.0], [37.3, 139.0], [37.4, 140.0], [37.5, 141.0], [37.6, 141.0], [37.7, 142.0], [37.8, 143.0], [37.9, 145.0], [38.0, 146.0], [38.1, 146.0], [38.2, 147.0], [38.3, 149.0], [38.4, 150.0], [38.5, 152.0], [38.6, 154.0], [38.7, 155.0], [38.8, 156.0], [38.9, 156.0], [39.0, 158.0], [39.1, 159.0], [39.2, 159.0], [39.3, 160.0], [39.4, 161.0], [39.5, 162.0], [39.6, 163.0], [39.7, 164.0], [39.8, 164.0], [39.9, 165.0], [40.0, 166.0], [40.1, 166.0], [40.2, 167.0], [40.3, 168.0], [40.4, 168.0], [40.5, 169.0], [40.6, 169.0], [40.7, 172.0], [40.8, 172.0], [40.9, 172.0], [41.0, 173.0], [41.1, 174.0], [41.2, 175.0], [41.3, 175.0], [41.4, 175.0], [41.5, 176.0], [41.6, 176.0], [41.7, 177.0], [41.8, 178.0], [41.9, 179.0], [42.0, 180.0], [42.1, 180.0], [42.2, 181.0], [42.3, 181.0], [42.4, 182.0], [42.5, 182.0], [42.6, 183.0], [42.7, 184.0], [42.8, 184.0], [42.9, 186.0], [43.0, 186.0], [43.1, 186.0], [43.2, 187.0], [43.3, 187.0], [43.4, 188.0], [43.5, 188.0], [43.6, 189.0], [43.7, 189.0], [43.8, 190.0], [43.9, 190.0], [44.0, 191.0], [44.1, 191.0], [44.2, 191.0], [44.3, 192.0], [44.4, 193.0], [44.5, 194.0], [44.6, 194.0], [44.7, 195.0], [44.8, 196.0], [44.9, 196.0], [45.0, 197.0], [45.1, 197.0], [45.2, 198.0], [45.3, 199.0], [45.4, 199.0], [45.5, 200.0], [45.6, 200.0], [45.7, 201.0], [45.8, 202.0], [45.9, 202.0], [46.0, 203.0], [46.1, 203.0], [46.2, 204.0], [46.3, 205.0], [46.4, 206.0], [46.5, 206.0], [46.6, 207.0], [46.7, 207.0], [46.8, 208.0], [46.9, 208.0], [47.0, 209.0], [47.1, 210.0], [47.2, 211.0], [47.3, 211.0], [47.4, 212.0], [47.5, 213.0], [47.6, 213.0], [47.7, 214.0], [47.8, 215.0], [47.9, 216.0], [48.0, 217.0], [48.1, 217.0], [48.2, 217.0], [48.3, 219.0], [48.4, 220.0], [48.5, 221.0], [48.6, 222.0], [48.7, 222.0], [48.8, 222.0], [48.9, 223.0], [49.0, 224.0], [49.1, 224.0], [49.2, 224.0], [49.3, 225.0], [49.4, 226.0], [49.5, 227.0], [49.6, 227.0], [49.7, 228.0], [49.8, 229.0], [49.9, 230.0], [50.0, 231.0], [50.1, 232.0], [50.2, 232.0], [50.3, 232.0], [50.4, 233.0], [50.5, 234.0], [50.6, 234.0], [50.7, 235.0], [50.8, 236.0], [50.9, 236.0], [51.0, 237.0], [51.1, 238.0], [51.2, 239.0], [51.3, 240.0], [51.4, 240.0], [51.5, 241.0], [51.6, 242.0], [51.7, 243.0], [51.8, 244.0], [51.9, 245.0], [52.0, 246.0], [52.1, 247.0], [52.2, 248.0], [52.3, 249.0], [52.4, 250.0], [52.5, 251.0], [52.6, 252.0], [52.7, 252.0], [52.8, 253.0], [52.9, 253.0], [53.0, 253.0], [53.1, 254.0], [53.2, 254.0], [53.3, 255.0], [53.4, 256.0], [53.5, 257.0], [53.6, 257.0], [53.7, 258.0], [53.8, 260.0], [53.9, 260.0], [54.0, 262.0], [54.1, 262.0], [54.2, 263.0], [54.3, 264.0], [54.4, 264.0], [54.5, 265.0], [54.6, 266.0], [54.7, 266.0], [54.8, 267.0], [54.9, 268.0], [55.0, 268.0], [55.1, 269.0], [55.2, 269.0], [55.3, 271.0], [55.4, 271.0], [55.5, 272.0], [55.6, 273.0], [55.7, 275.0], [55.8, 277.0], [55.9, 278.0], [56.0, 279.0], [56.1, 280.0], [56.2, 281.0], [56.3, 281.0], [56.4, 282.0], [56.5, 283.0], [56.6, 284.0], [56.7, 285.0], [56.8, 286.0], [56.9, 286.0], [57.0, 287.0], [57.1, 288.0], [57.2, 288.0], [57.3, 290.0], [57.4, 291.0], [57.5, 292.0], [57.6, 293.0], [57.7, 293.0], [57.8, 294.0], [57.9, 295.0], [58.0, 295.0], [58.1, 297.0], [58.2, 298.0], [58.3, 298.0], [58.4, 299.0], [58.5, 300.0], [58.6, 301.0], [58.7, 302.0], [58.8, 302.0], [58.9, 304.0], [59.0, 306.0], [59.1, 307.0], [59.2, 309.0], [59.3, 309.0], [59.4, 310.0], [59.5, 311.0], [59.6, 312.0], [59.7, 313.0], [59.8, 314.0], [59.9, 315.0], [60.0, 315.0], [60.1, 316.0], [60.2, 317.0], [60.3, 318.0], [60.4, 319.0], [60.5, 320.0], [60.6, 320.0], [60.7, 321.0], [60.8, 322.0], [60.9, 322.0], [61.0, 323.0], [61.1, 324.0], [61.2, 324.0], [61.3, 325.0], [61.4, 326.0], [61.5, 327.0], [61.6, 327.0], [61.7, 328.0], [61.8, 328.0], [61.9, 329.0], [62.0, 329.0], [62.1, 330.0], [62.2, 331.0], [62.3, 332.0], [62.4, 333.0], [62.5, 333.0], [62.6, 334.0], [62.7, 335.0], [62.8, 335.0], [62.9, 336.0], [63.0, 337.0], [63.1, 339.0], [63.2, 340.0], [63.3, 340.0], [63.4, 341.0], [63.5, 342.0], [63.6, 343.0], [63.7, 344.0], [63.8, 344.0], [63.9, 345.0], [64.0, 346.0], [64.1, 347.0], [64.2, 348.0], [64.3, 349.0], [64.4, 349.0], [64.5, 350.0], [64.6, 350.0], [64.7, 351.0], [64.8, 352.0], [64.9, 353.0], [65.0, 354.0], [65.1, 355.0], [65.2, 355.0], [65.3, 357.0], [65.4, 357.0], [65.5, 358.0], [65.6, 359.0], [65.7, 361.0], [65.8, 362.0], [65.9, 363.0], [66.0, 364.0], [66.1, 365.0], [66.2, 366.0], [66.3, 367.0], [66.4, 368.0], [66.5, 369.0], [66.6, 371.0], [66.7, 373.0], [66.8, 374.0], [66.9, 375.0], [67.0, 376.0], [67.1, 377.0], [67.2, 378.0], [67.3, 380.0], [67.4, 381.0], [67.5, 382.0], [67.6, 383.0], [67.7, 384.0], [67.8, 384.0], [67.9, 385.0], [68.0, 386.0], [68.1, 387.0], [68.2, 388.0], [68.3, 389.0], [68.4, 389.0], [68.5, 392.0], [68.6, 393.0], [68.7, 393.0], [68.8, 394.0], [68.9, 395.0], [69.0, 395.0], [69.1, 397.0], [69.2, 397.0], [69.3, 398.0], [69.4, 399.0], [69.5, 400.0], [69.6, 402.0], [69.7, 402.0], [69.8, 403.0], [69.9, 404.0], [70.0, 405.0], [70.1, 406.0], [70.2, 407.0], [70.3, 408.0], [70.4, 409.0], [70.5, 410.0], [70.6, 411.0], [70.7, 412.0], [70.8, 414.0], [70.9, 414.0], [71.0, 415.0], [71.1, 417.0], [71.2, 417.0], [71.3, 418.0], [71.4, 420.0], [71.5, 421.0], [71.6, 422.0], [71.7, 423.0], [71.8, 424.0], [71.9, 425.0], [72.0, 426.0], [72.1, 427.0], [72.2, 430.0], [72.3, 433.0], [72.4, 434.0], [72.5, 435.0], [72.6, 436.0], [72.7, 438.0], [72.8, 439.0], [72.9, 440.0], [73.0, 441.0], [73.1, 443.0], [73.2, 443.0], [73.3, 444.0], [73.4, 445.0], [73.5, 445.0], [73.6, 446.0], [73.7, 448.0], [73.8, 449.0], [73.9, 450.0], [74.0, 451.0], [74.1, 453.0], [74.2, 455.0], [74.3, 456.0], [74.4, 456.0], [74.5, 458.0], [74.6, 459.0], [74.7, 460.0], [74.8, 461.0], [74.9, 462.0], [75.0, 463.0], [75.1, 463.0], [75.2, 464.0], [75.3, 465.0], [75.4, 466.0], [75.5, 468.0], [75.6, 468.0], [75.7, 470.0], [75.8, 471.0], [75.9, 472.0], [76.0, 473.0], [76.1, 474.0], [76.2, 475.0], [76.3, 476.0], [76.4, 477.0], [76.5, 478.0], [76.6, 479.0], [76.7, 480.0], [76.8, 481.0], [76.9, 482.0], [77.0, 483.0], [77.1, 484.0], [77.2, 485.0], [77.3, 486.0], [77.4, 486.0], [77.5, 487.0], [77.6, 488.0], [77.7, 489.0], [77.8, 490.0], [77.9, 491.0], [78.0, 492.0], [78.1, 493.0], [78.2, 494.0], [78.3, 495.0], [78.4, 496.0], [78.5, 497.0], [78.6, 499.0], [78.7, 500.0], [78.8, 502.0], [78.9, 502.0], [79.0, 503.0], [79.1, 504.0], [79.2, 504.0], [79.3, 505.0], [79.4, 506.0], [79.5, 507.0], [79.6, 509.0], [79.7, 510.0], [79.8, 511.0], [79.9, 512.0], [80.0, 514.0], [80.1, 515.0], [80.2, 516.0], [80.3, 517.0], [80.4, 519.0], [80.5, 520.0], [80.6, 521.0], [80.7, 523.0], [80.8, 523.0], [80.9, 524.0], [81.0, 525.0], [81.1, 525.0], [81.2, 526.0], [81.3, 528.0], [81.4, 529.0], [81.5, 530.0], [81.6, 532.0], [81.7, 533.0], [81.8, 534.0], [81.9, 536.0], [82.0, 537.0], [82.1, 539.0], [82.2, 541.0], [82.3, 544.0], [82.4, 545.0], [82.5, 546.0], [82.6, 547.0], [82.7, 549.0], [82.8, 551.0], [82.9, 552.0], [83.0, 552.0], [83.1, 554.0], [83.2, 554.0], [83.3, 555.0], [83.4, 557.0], [83.5, 559.0], [83.6, 561.0], [83.7, 563.0], [83.8, 565.0], [83.9, 568.0], [84.0, 570.0], [84.1, 570.0], [84.2, 572.0], [84.3, 573.0], [84.4, 574.0], [84.5, 575.0], [84.6, 577.0], [84.7, 578.0], [84.8, 579.0], [84.9, 579.0], [85.0, 580.0], [85.1, 583.0], [85.2, 585.0], [85.3, 588.0], [85.4, 589.0], [85.5, 591.0], [85.6, 592.0], [85.7, 593.0], [85.8, 594.0], [85.9, 594.0], [86.0, 596.0], [86.1, 597.0], [86.2, 598.0], [86.3, 600.0], [86.4, 602.0], [86.5, 602.0], [86.6, 603.0], [86.7, 604.0], [86.8, 605.0], [86.9, 608.0], [87.0, 610.0], [87.1, 612.0], [87.2, 613.0], [87.3, 615.0], [87.4, 615.0], [87.5, 617.0], [87.6, 617.0], [87.7, 619.0], [87.8, 622.0], [87.9, 624.0], [88.0, 625.0], [88.1, 626.0], [88.2, 629.0], [88.3, 630.0], [88.4, 631.0], [88.5, 633.0], [88.6, 635.0], [88.7, 636.0], [88.8, 640.0], [88.9, 642.0], [89.0, 645.0], [89.1, 646.0], [89.2, 648.0], [89.3, 650.0], [89.4, 653.0], [89.5, 657.0], [89.6, 659.0], [89.7, 663.0], [89.8, 666.0], [89.9, 667.0], [90.0, 670.0], [90.1, 671.0], [90.2, 672.0], [90.3, 674.0], [90.4, 676.0], [90.5, 679.0], [90.6, 681.0], [90.7, 683.0], [90.8, 684.0], [90.9, 688.0], [91.0, 688.0], [91.1, 691.0], [91.2, 694.0], [91.3, 698.0], [91.4, 700.0], [91.5, 702.0], [91.6, 706.0], [91.7, 709.0], [91.8, 711.0], [91.9, 713.0], [92.0, 716.0], [92.1, 717.0], [92.2, 729.0], [92.3, 732.0], [92.4, 734.0], [92.5, 737.0], [92.6, 746.0], [92.7, 751.0], [92.8, 756.0], [92.9, 760.0], [93.0, 762.0], [93.1, 767.0], [93.2, 776.0], [93.3, 778.0], [93.4, 781.0], [93.5, 788.0], [93.6, 800.0], [93.7, 811.0], [93.8, 817.0], [93.9, 819.0], [94.0, 828.0], [94.1, 842.0], [94.2, 859.0], [94.3, 865.0], [94.4, 869.0], [94.5, 881.0], [94.6, 887.0], [94.7, 896.0], [94.8, 934.0], [94.9, 952.0], [95.0, 985.0], [95.1, 995.0], [95.2, 1019.0], [95.3, 1067.0], [95.4, 1089.0], [95.5, 1119.0], [95.6, 1159.0], [95.7, 1216.0], [95.8, 1240.0], [95.9, 1305.0], [96.0, 1325.0], [96.1, 1350.0], [96.2, 1384.0], [96.3, 1432.0], [96.4, 1513.0], [96.5, 1605.0], [96.6, 1664.0], [96.7, 1723.0], [96.8, 1788.0], [96.9, 1847.0], [97.0, 1897.0], [97.1, 2013.0], [97.2, 2064.0], [97.3, 2151.0], [97.4, 2243.0], [97.5, 2338.0], [97.6, 2426.0], [97.7, 2524.0], [97.8, 2608.0], [97.9, 2729.0], [98.0, 2883.0], [98.1, 2928.0], [98.2, 3012.0], [98.3, 3120.0], [98.4, 3374.0], [98.5, 3555.0], [98.6, 3681.0], [98.7, 3910.0], [98.8, 4202.0], [98.9, 4449.0], [99.0, 4678.0], [99.1, 4770.0], [99.2, 5310.0], [99.3, 7346.0], [99.4, 8068.0], [99.5, 8881.0], [99.6, 9538.0], [99.7, 10416.0], [99.8, 11104.0], [99.9, 12146.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 1642.0, "series": [{"data": [[0.0, 1642.0], [600.0, 263.0], [700.0, 116.0], [800.0, 58.0], [900.0, 22.0], [1000.0, 16.0], [1100.0, 13.0], [1200.0, 11.0], [1300.0, 18.0], [1400.0, 8.0], [1500.0, 5.0], [1600.0, 9.0], [1700.0, 7.0], [1800.0, 11.0], [1900.0, 4.0], [2000.0, 6.0], [2100.0, 8.0], [2200.0, 5.0], [2300.0, 7.0], [2400.0, 3.0], [2500.0, 7.0], [2600.0, 4.0], [2700.0, 6.0], [2800.0, 3.0], [2900.0, 8.0], [3000.0, 5.0], [3100.0, 4.0], [3200.0, 1.0], [3300.0, 3.0], [3400.0, 3.0], [3500.0, 3.0], [3600.0, 3.0], [3800.0, 4.0], [3900.0, 2.0], [4000.0, 2.0], [4300.0, 2.0], [4100.0, 1.0], [4200.0, 2.0], [4600.0, 4.0], [4400.0, 3.0], [4500.0, 2.0], [4700.0, 5.0], [4800.0, 1.0], [5100.0, 1.0], [5300.0, 3.0], [5600.0, 1.0], [6600.0, 1.0], [7300.0, 1.0], [7200.0, 1.0], [7500.0, 1.0], [7900.0, 1.0], [8000.0, 3.0], [8100.0, 1.0], [8200.0, 2.0], [8700.0, 1.0], [8400.0, 1.0], [9000.0, 1.0], [8800.0, 1.0], [8900.0, 1.0], [9100.0, 1.0], [9400.0, 1.0], [9700.0, 1.0], [9500.0, 1.0], [9800.0, 2.0], [10300.0, 1.0], [10400.0, 2.0], [11000.0, 1.0], [10900.0, 2.0], [11100.0, 1.0], [11400.0, 2.0], [11500.0, 1.0], [11700.0, 1.0], [12200.0, 1.0], [12100.0, 1.0], [12500.0, 1.0], [13100.0, 1.0], [12800.0, 1.0], [12900.0, 1.0], [100.0, 716.0], [200.0, 673.0], [300.0, 571.0], [400.0, 478.0], [500.0, 398.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 13100.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 187.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 4085.0, "series": [{"data": [[0.0, 4085.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 918.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 187.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.934782608695652, "minX": 1.60280562E12, "maxY": 10.0, "series": [{"data": [[1.60280574E12, 10.0], [1.60280568E12, 10.0], [1.60280586E12, 9.954081632653065], [1.6028058E12, 10.0], [1.60280562E12, 9.934782608695652]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60280586E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 324.0, "minX": 1.0, "maxY": 8068.0, "series": [{"data": [[8.0, 650.0], [4.0, 484.0], [2.0, 536.0], [1.0, 8068.0], [9.0, 324.0], [10.0, 425.25984555984667], [5.0, 539.0], [6.0, 362.0], [3.0, 480.0], [7.0, 565.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.990751445086751, 426.8630057803464]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 361.53333333333336, "minX": 1.60280562E12, "maxY": 6901642.15, "series": [{"data": [[1.60280574E12, 6901642.15], [1.60280568E12, 5599158.15], [1.60280586E12, 3889929.25], [1.6028058E12, 6269158.95], [1.60280562E12, 302273.6666666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60280574E12, 11729.016666666666], [1.60280568E12, 9125.933333333332], [1.60280586E12, 7705.466666666666], [1.6028058E12, 11019.683333333332], [1.60280562E12, 361.53333333333336]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60280586E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 394.42935906271555, "minX": 1.60280562E12, "maxY": 528.1521739130434, "series": [{"data": [[1.60280574E12, 399.3404397068617], [1.60280568E12, 492.8432343234317], [1.60280586E12, 430.6846938775508], [1.6028058E12, 394.42935906271555], [1.60280562E12, 528.1521739130434]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60280586E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 392.4913852515498, "minX": 1.60280562E12, "maxY": 526.2608695652175, "series": [{"data": [[1.60280574E12, 396.3644237175223], [1.60280568E12, 490.2054455445544], [1.60280586E12, 428.7999999999997], [1.6028058E12, 392.4913852515498], [1.60280562E12, 526.2608695652175]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60280586E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.004663557628247847, "minX": 1.60280562E12, "maxY": 1.8260869565217395, "series": [{"data": [[1.60280574E12, 0.004663557628247847], [1.60280568E12, 0.007425742574257432], [1.60280586E12, 0.012244897959183685], [1.6028058E12, 0.0062026188835286], [1.60280562E12, 1.8260869565217395]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60280586E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 16.0, "minX": 1.60280562E12, "maxY": 13171.0, "series": [{"data": [[1.60280574E12, 13171.0], [1.60280568E12, 11050.0], [1.60280586E12, 12990.0], [1.6028058E12, 8779.0], [1.60280562E12, 1902.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60280574E12, 24.0], [1.60280568E12, 27.0], [1.60280586E12, 28.0], [1.6028058E12, 26.0], [1.60280562E12, 37.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60280574E12, 24.0], [1.60280568E12, 27.0], [1.60280586E12, 28.0], [1.6028058E12, 26.0], [1.60280562E12, 37.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60280574E12, 24.0], [1.60280568E12, 27.0], [1.60280586E12, 28.0], [1.6028058E12, 26.0], [1.60280562E12, 37.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60280574E12, 21.0], [1.60280568E12, 21.0], [1.60280586E12, 22.0], [1.6028058E12, 16.0], [1.60280562E12, 37.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60280574E12, 250.0], [1.60280568E12, 232.0], [1.60280586E12, 214.5], [1.6028058E12, 222.0], [1.60280562E12, 463.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60280586E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 47.5, "minX": 1.0, "maxY": 2207.0, "series": [{"data": [[3.0, 61.0], [4.0, 764.0], [5.0, 416.0], [6.0, 2207.0], [7.0, 491.5], [8.0, 506.5], [9.0, 395.0], [10.0, 467.5], [11.0, 402.0], [12.0, 353.0], [13.0, 323.0], [14.0, 343.0], [15.0, 350.5], [16.0, 393.5], [17.0, 365.0], [18.0, 439.5], [19.0, 436.0], [20.0, 405.5], [21.0, 416.5], [22.0, 308.0], [23.0, 328.5], [24.0, 399.0], [25.0, 200.5], [26.0, 286.0], [27.0, 342.5], [28.0, 323.0], [29.0, 189.0], [30.0, 200.0], [31.0, 358.5], [33.0, 227.0], [32.0, 252.5], [34.0, 260.0], [35.0, 230.0], [37.0, 217.0], [36.0, 178.5], [39.0, 209.0], [40.0, 182.0], [41.0, 168.0], [43.0, 225.0], [42.0, 47.5], [44.0, 224.0], [45.0, 126.5], [47.0, 164.0], [49.0, 188.0], [48.0, 86.5], [52.0, 139.0], [56.0, 72.0], [59.0, 76.0], [60.0, 190.0], [61.0, 82.0], [62.0, 68.0], [64.0, 64.0], [67.0, 67.0], [87.0, 69.0], [1.0, 1922.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 87.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 47.5, "minX": 1.0, "maxY": 2198.5, "series": [{"data": [[3.0, 61.0], [4.0, 752.5], [5.0, 412.0], [6.0, 2198.5], [7.0, 489.0], [8.0, 503.0], [9.0, 395.0], [10.0, 462.5], [11.0, 402.0], [12.0, 350.0], [13.0, 321.0], [14.0, 341.0], [15.0, 346.0], [16.0, 388.0], [17.0, 362.0], [18.0, 438.0], [19.0, 435.0], [20.0, 400.5], [21.0, 413.0], [22.0, 307.5], [23.0, 326.5], [24.0, 396.5], [25.0, 200.0], [26.0, 285.5], [27.0, 339.5], [28.0, 321.5], [29.0, 188.0], [30.0, 198.5], [31.0, 352.5], [33.0, 223.0], [32.0, 250.0], [34.0, 253.0], [35.0, 229.0], [37.0, 216.0], [36.0, 178.5], [39.0, 208.0], [40.0, 181.5], [41.0, 168.0], [43.0, 222.0], [42.0, 47.5], [44.0, 223.5], [45.0, 126.0], [47.0, 160.0], [49.0, 187.0], [48.0, 86.0], [52.0, 138.5], [56.0, 71.5], [59.0, 75.0], [60.0, 189.0], [61.0, 81.0], [62.0, 68.0], [64.0, 63.5], [67.0, 67.0], [87.0, 68.0], [1.0, 1914.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 87.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.9333333333333333, "minX": 1.60280562E12, "maxY": 25.016666666666666, "series": [{"data": [[1.60280574E12, 25.016666666666666], [1.60280568E12, 20.2], [1.60280586E12, 16.166666666666668], [1.6028058E12, 24.183333333333334], [1.60280562E12, 0.9333333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60280586E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.7666666666666667, "minX": 1.60280562E12, "maxY": 25.016666666666666, "series": [{"data": [[1.60280574E12, 25.016666666666666], [1.60280568E12, 20.2], [1.60280586E12, 16.333333333333332], [1.6028058E12, 24.183333333333334], [1.60280562E12, 0.7666666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60280586E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.7666666666666667, "minX": 1.60280562E12, "maxY": 25.016666666666666, "series": [{"data": [[1.60280574E12, 25.016666666666666], [1.60280568E12, 20.2], [1.60280586E12, 16.333333333333332], [1.6028058E12, 24.183333333333334], [1.60280562E12, 0.7666666666666667]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60280586E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.7666666666666667, "minX": 1.60280562E12, "maxY": 25.016666666666666, "series": [{"data": [[1.60280574E12, 25.016666666666666], [1.60280568E12, 20.2], [1.60280586E12, 16.333333333333332], [1.6028058E12, 24.183333333333334], [1.60280562E12, 0.7666666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60280586E12, "title": "Total Transactions Per Second"}},
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

