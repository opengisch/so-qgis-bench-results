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
        data: {"result": {"minY": 4.0, "minX": 0.0, "maxY": 4668.0, "series": [{"data": [[0.0, 4.0], [0.1, 6.0], [0.2, 7.0], [0.3, 9.0], [0.4, 11.0], [0.5, 13.0], [0.6, 13.0], [0.7, 14.0], [0.8, 14.0], [0.9, 15.0], [1.0, 15.0], [1.1, 15.0], [1.2, 16.0], [1.3, 16.0], [1.4, 16.0], [1.5, 17.0], [1.6, 17.0], [1.7, 18.0], [1.8, 18.0], [1.9, 19.0], [2.0, 19.0], [2.1, 20.0], [2.2, 21.0], [2.3, 21.0], [2.4, 21.0], [2.5, 21.0], [2.6, 21.0], [2.7, 22.0], [2.8, 22.0], [2.9, 23.0], [3.0, 24.0], [3.1, 24.0], [3.2, 24.0], [3.3, 25.0], [3.4, 25.0], [3.5, 25.0], [3.6, 26.0], [3.7, 26.0], [3.8, 27.0], [3.9, 28.0], [4.0, 28.0], [4.1, 29.0], [4.2, 29.0], [4.3, 30.0], [4.4, 30.0], [4.5, 30.0], [4.6, 32.0], [4.7, 32.0], [4.8, 33.0], [4.9, 34.0], [5.0, 34.0], [5.1, 36.0], [5.2, 36.0], [5.3, 37.0], [5.4, 37.0], [5.5, 38.0], [5.6, 39.0], [5.7, 40.0], [5.8, 40.0], [5.9, 41.0], [6.0, 41.0], [6.1, 42.0], [6.2, 42.0], [6.3, 42.0], [6.4, 43.0], [6.5, 44.0], [6.6, 44.0], [6.7, 45.0], [6.8, 46.0], [6.9, 46.0], [7.0, 47.0], [7.1, 48.0], [7.2, 48.0], [7.3, 50.0], [7.4, 50.0], [7.5, 51.0], [7.6, 51.0], [7.7, 52.0], [7.8, 53.0], [7.9, 53.0], [8.0, 54.0], [8.1, 55.0], [8.2, 55.0], [8.3, 57.0], [8.4, 57.0], [8.5, 58.0], [8.6, 58.0], [8.7, 59.0], [8.8, 59.0], [8.9, 60.0], [9.0, 61.0], [9.1, 62.0], [9.2, 62.0], [9.3, 63.0], [9.4, 64.0], [9.5, 65.0], [9.6, 66.0], [9.7, 67.0], [9.8, 68.0], [9.9, 68.0], [10.0, 69.0], [10.1, 70.0], [10.2, 70.0], [10.3, 71.0], [10.4, 72.0], [10.5, 72.0], [10.6, 73.0], [10.7, 74.0], [10.8, 75.0], [10.9, 76.0], [11.0, 77.0], [11.1, 78.0], [11.2, 79.0], [11.3, 79.0], [11.4, 80.0], [11.5, 81.0], [11.6, 82.0], [11.7, 82.0], [11.8, 83.0], [11.9, 84.0], [12.0, 85.0], [12.1, 85.0], [12.2, 88.0], [12.3, 89.0], [12.4, 89.0], [12.5, 90.0], [12.6, 91.0], [12.7, 91.0], [12.8, 92.0], [12.9, 93.0], [13.0, 93.0], [13.1, 94.0], [13.2, 95.0], [13.3, 95.0], [13.4, 95.0], [13.5, 96.0], [13.6, 96.0], [13.7, 97.0], [13.8, 97.0], [13.9, 98.0], [14.0, 98.0], [14.1, 99.0], [14.2, 100.0], [14.3, 100.0], [14.4, 100.0], [14.5, 101.0], [14.6, 102.0], [14.7, 103.0], [14.8, 104.0], [14.9, 104.0], [15.0, 105.0], [15.1, 106.0], [15.2, 106.0], [15.3, 107.0], [15.4, 108.0], [15.5, 108.0], [15.6, 110.0], [15.7, 110.0], [15.8, 111.0], [15.9, 111.0], [16.0, 112.0], [16.1, 112.0], [16.2, 112.0], [16.3, 113.0], [16.4, 113.0], [16.5, 115.0], [16.6, 116.0], [16.7, 116.0], [16.8, 117.0], [16.9, 118.0], [17.0, 118.0], [17.1, 119.0], [17.2, 120.0], [17.3, 120.0], [17.4, 121.0], [17.5, 122.0], [17.6, 122.0], [17.7, 123.0], [17.8, 123.0], [17.9, 124.0], [18.0, 124.0], [18.1, 124.0], [18.2, 125.0], [18.3, 125.0], [18.4, 126.0], [18.5, 126.0], [18.6, 126.0], [18.7, 127.0], [18.8, 127.0], [18.9, 128.0], [19.0, 129.0], [19.1, 129.0], [19.2, 130.0], [19.3, 130.0], [19.4, 130.0], [19.5, 131.0], [19.6, 132.0], [19.7, 132.0], [19.8, 133.0], [19.9, 133.0], [20.0, 134.0], [20.1, 135.0], [20.2, 135.0], [20.3, 135.0], [20.4, 135.0], [20.5, 136.0], [20.6, 137.0], [20.7, 138.0], [20.8, 138.0], [20.9, 139.0], [21.0, 139.0], [21.1, 140.0], [21.2, 140.0], [21.3, 141.0], [21.4, 142.0], [21.5, 143.0], [21.6, 143.0], [21.7, 144.0], [21.8, 144.0], [21.9, 145.0], [22.0, 145.0], [22.1, 145.0], [22.2, 146.0], [22.3, 147.0], [22.4, 148.0], [22.5, 148.0], [22.6, 149.0], [22.7, 150.0], [22.8, 151.0], [22.9, 152.0], [23.0, 153.0], [23.1, 153.0], [23.2, 155.0], [23.3, 155.0], [23.4, 156.0], [23.5, 157.0], [23.6, 157.0], [23.7, 159.0], [23.8, 159.0], [23.9, 160.0], [24.0, 160.0], [24.1, 161.0], [24.2, 162.0], [24.3, 163.0], [24.4, 163.0], [24.5, 164.0], [24.6, 164.0], [24.7, 165.0], [24.8, 165.0], [24.9, 165.0], [25.0, 165.0], [25.1, 166.0], [25.2, 166.0], [25.3, 167.0], [25.4, 167.0], [25.5, 168.0], [25.6, 169.0], [25.7, 170.0], [25.8, 170.0], [25.9, 170.0], [26.0, 171.0], [26.1, 171.0], [26.2, 172.0], [26.3, 173.0], [26.4, 174.0], [26.5, 174.0], [26.6, 174.0], [26.7, 175.0], [26.8, 175.0], [26.9, 176.0], [27.0, 176.0], [27.1, 177.0], [27.2, 177.0], [27.3, 178.0], [27.4, 178.0], [27.5, 178.0], [27.6, 179.0], [27.7, 179.0], [27.8, 180.0], [27.9, 180.0], [28.0, 180.0], [28.1, 181.0], [28.2, 181.0], [28.3, 181.0], [28.4, 182.0], [28.5, 182.0], [28.6, 182.0], [28.7, 182.0], [28.8, 183.0], [28.9, 183.0], [29.0, 183.0], [29.1, 184.0], [29.2, 184.0], [29.3, 184.0], [29.4, 185.0], [29.5, 185.0], [29.6, 185.0], [29.7, 185.0], [29.8, 185.0], [29.9, 185.0], [30.0, 185.0], [30.1, 186.0], [30.2, 186.0], [30.3, 186.0], [30.4, 186.0], [30.5, 186.0], [30.6, 187.0], [30.7, 187.0], [30.8, 187.0], [30.9, 188.0], [31.0, 188.0], [31.1, 188.0], [31.2, 188.0], [31.3, 189.0], [31.4, 189.0], [31.5, 189.0], [31.6, 190.0], [31.7, 190.0], [31.8, 190.0], [31.9, 190.0], [32.0, 191.0], [32.1, 191.0], [32.2, 191.0], [32.3, 191.0], [32.4, 191.0], [32.5, 191.0], [32.6, 191.0], [32.7, 192.0], [32.8, 192.0], [32.9, 192.0], [33.0, 193.0], [33.1, 193.0], [33.2, 194.0], [33.3, 194.0], [33.4, 194.0], [33.5, 194.0], [33.6, 194.0], [33.7, 194.0], [33.8, 195.0], [33.9, 195.0], [34.0, 195.0], [34.1, 195.0], [34.2, 196.0], [34.3, 196.0], [34.4, 196.0], [34.5, 196.0], [34.6, 196.0], [34.7, 197.0], [34.8, 197.0], [34.9, 197.0], [35.0, 197.0], [35.1, 198.0], [35.2, 198.0], [35.3, 198.0], [35.4, 198.0], [35.5, 199.0], [35.6, 199.0], [35.7, 199.0], [35.8, 200.0], [35.9, 200.0], [36.0, 200.0], [36.1, 201.0], [36.2, 201.0], [36.3, 201.0], [36.4, 201.0], [36.5, 202.0], [36.6, 202.0], [36.7, 203.0], [36.8, 203.0], [36.9, 203.0], [37.0, 203.0], [37.1, 204.0], [37.2, 204.0], [37.3, 204.0], [37.4, 205.0], [37.5, 205.0], [37.6, 205.0], [37.7, 205.0], [37.8, 205.0], [37.9, 206.0], [38.0, 207.0], [38.1, 207.0], [38.2, 207.0], [38.3, 208.0], [38.4, 208.0], [38.5, 208.0], [38.6, 209.0], [38.7, 209.0], [38.8, 209.0], [38.9, 210.0], [39.0, 210.0], [39.1, 211.0], [39.2, 211.0], [39.3, 212.0], [39.4, 213.0], [39.5, 213.0], [39.6, 214.0], [39.7, 214.0], [39.8, 214.0], [39.9, 215.0], [40.0, 216.0], [40.1, 217.0], [40.2, 217.0], [40.3, 217.0], [40.4, 218.0], [40.5, 218.0], [40.6, 219.0], [40.7, 219.0], [40.8, 220.0], [40.9, 220.0], [41.0, 221.0], [41.1, 222.0], [41.2, 222.0], [41.3, 223.0], [41.4, 223.0], [41.5, 224.0], [41.6, 224.0], [41.7, 225.0], [41.8, 226.0], [41.9, 226.0], [42.0, 226.0], [42.1, 227.0], [42.2, 228.0], [42.3, 228.0], [42.4, 229.0], [42.5, 229.0], [42.6, 230.0], [42.7, 230.0], [42.8, 231.0], [42.9, 232.0], [43.0, 232.0], [43.1, 233.0], [43.2, 234.0], [43.3, 235.0], [43.4, 235.0], [43.5, 236.0], [43.6, 236.0], [43.7, 237.0], [43.8, 237.0], [43.9, 238.0], [44.0, 238.0], [44.1, 239.0], [44.2, 240.0], [44.3, 240.0], [44.4, 241.0], [44.5, 242.0], [44.6, 242.0], [44.7, 243.0], [44.8, 243.0], [44.9, 244.0], [45.0, 245.0], [45.1, 245.0], [45.2, 246.0], [45.3, 246.0], [45.4, 247.0], [45.5, 247.0], [45.6, 248.0], [45.7, 249.0], [45.8, 249.0], [45.9, 249.0], [46.0, 250.0], [46.1, 251.0], [46.2, 252.0], [46.3, 252.0], [46.4, 253.0], [46.5, 253.0], [46.6, 254.0], [46.7, 254.0], [46.8, 255.0], [46.9, 255.0], [47.0, 256.0], [47.1, 256.0], [47.2, 257.0], [47.3, 257.0], [47.4, 257.0], [47.5, 258.0], [47.6, 259.0], [47.7, 259.0], [47.8, 260.0], [47.9, 260.0], [48.0, 260.0], [48.1, 261.0], [48.2, 261.0], [48.3, 262.0], [48.4, 262.0], [48.5, 263.0], [48.6, 264.0], [48.7, 264.0], [48.8, 265.0], [48.9, 265.0], [49.0, 266.0], [49.1, 266.0], [49.2, 266.0], [49.3, 267.0], [49.4, 267.0], [49.5, 268.0], [49.6, 268.0], [49.7, 268.0], [49.8, 269.0], [49.9, 269.0], [50.0, 269.0], [50.1, 271.0], [50.2, 272.0], [50.3, 272.0], [50.4, 273.0], [50.5, 273.0], [50.6, 274.0], [50.7, 274.0], [50.8, 275.0], [50.9, 275.0], [51.0, 276.0], [51.1, 276.0], [51.2, 277.0], [51.3, 277.0], [51.4, 278.0], [51.5, 278.0], [51.6, 278.0], [51.7, 279.0], [51.8, 279.0], [51.9, 280.0], [52.0, 280.0], [52.1, 280.0], [52.2, 281.0], [52.3, 282.0], [52.4, 282.0], [52.5, 283.0], [52.6, 283.0], [52.7, 284.0], [52.8, 284.0], [52.9, 284.0], [53.0, 285.0], [53.1, 285.0], [53.2, 286.0], [53.3, 286.0], [53.4, 286.0], [53.5, 287.0], [53.6, 287.0], [53.7, 287.0], [53.8, 288.0], [53.9, 288.0], [54.0, 288.0], [54.1, 289.0], [54.2, 289.0], [54.3, 290.0], [54.4, 290.0], [54.5, 291.0], [54.6, 291.0], [54.7, 291.0], [54.8, 292.0], [54.9, 293.0], [55.0, 293.0], [55.1, 294.0], [55.2, 294.0], [55.3, 295.0], [55.4, 296.0], [55.5, 297.0], [55.6, 297.0], [55.7, 298.0], [55.8, 298.0], [55.9, 299.0], [56.0, 299.0], [56.1, 300.0], [56.2, 301.0], [56.3, 301.0], [56.4, 302.0], [56.5, 302.0], [56.6, 302.0], [56.7, 303.0], [56.8, 304.0], [56.9, 304.0], [57.0, 305.0], [57.1, 305.0], [57.2, 306.0], [57.3, 306.0], [57.4, 307.0], [57.5, 308.0], [57.6, 309.0], [57.7, 309.0], [57.8, 310.0], [57.9, 310.0], [58.0, 311.0], [58.1, 311.0], [58.2, 312.0], [58.3, 313.0], [58.4, 313.0], [58.5, 313.0], [58.6, 315.0], [58.7, 315.0], [58.8, 316.0], [58.9, 316.0], [59.0, 317.0], [59.1, 317.0], [59.2, 317.0], [59.3, 318.0], [59.4, 319.0], [59.5, 320.0], [59.6, 320.0], [59.7, 320.0], [59.8, 321.0], [59.9, 321.0], [60.0, 322.0], [60.1, 322.0], [60.2, 323.0], [60.3, 324.0], [60.4, 324.0], [60.5, 325.0], [60.6, 325.0], [60.7, 326.0], [60.8, 326.0], [60.9, 328.0], [61.0, 328.0], [61.1, 329.0], [61.2, 331.0], [61.3, 332.0], [61.4, 332.0], [61.5, 333.0], [61.6, 334.0], [61.7, 334.0], [61.8, 335.0], [61.9, 336.0], [62.0, 336.0], [62.1, 338.0], [62.2, 338.0], [62.3, 339.0], [62.4, 339.0], [62.5, 340.0], [62.6, 340.0], [62.7, 341.0], [62.8, 342.0], [62.9, 342.0], [63.0, 342.0], [63.1, 343.0], [63.2, 344.0], [63.3, 344.0], [63.4, 345.0], [63.5, 346.0], [63.6, 346.0], [63.7, 347.0], [63.8, 348.0], [63.9, 348.0], [64.0, 349.0], [64.1, 350.0], [64.2, 352.0], [64.3, 353.0], [64.4, 353.0], [64.5, 354.0], [64.6, 354.0], [64.7, 355.0], [64.8, 355.0], [64.9, 356.0], [65.0, 357.0], [65.1, 358.0], [65.2, 358.0], [65.3, 359.0], [65.4, 359.0], [65.5, 360.0], [65.6, 361.0], [65.7, 361.0], [65.8, 362.0], [65.9, 363.0], [66.0, 363.0], [66.1, 364.0], [66.2, 364.0], [66.3, 365.0], [66.4, 366.0], [66.5, 366.0], [66.6, 366.0], [66.7, 367.0], [66.8, 367.0], [66.9, 368.0], [67.0, 369.0], [67.1, 369.0], [67.2, 370.0], [67.3, 370.0], [67.4, 371.0], [67.5, 371.0], [67.6, 372.0], [67.7, 373.0], [67.8, 373.0], [67.9, 374.0], [68.0, 374.0], [68.1, 374.0], [68.2, 375.0], [68.3, 375.0], [68.4, 376.0], [68.5, 376.0], [68.6, 377.0], [68.7, 377.0], [68.8, 378.0], [68.9, 378.0], [69.0, 379.0], [69.1, 379.0], [69.2, 379.0], [69.3, 380.0], [69.4, 380.0], [69.5, 381.0], [69.6, 382.0], [69.7, 383.0], [69.8, 383.0], [69.9, 384.0], [70.0, 384.0], [70.1, 385.0], [70.2, 386.0], [70.3, 387.0], [70.4, 387.0], [70.5, 388.0], [70.6, 389.0], [70.7, 390.0], [70.8, 390.0], [70.9, 391.0], [71.0, 392.0], [71.1, 393.0], [71.2, 393.0], [71.3, 394.0], [71.4, 395.0], [71.5, 396.0], [71.6, 397.0], [71.7, 398.0], [71.8, 398.0], [71.9, 399.0], [72.0, 400.0], [72.1, 401.0], [72.2, 402.0], [72.3, 403.0], [72.4, 404.0], [72.5, 404.0], [72.6, 406.0], [72.7, 406.0], [72.8, 407.0], [72.9, 408.0], [73.0, 408.0], [73.1, 409.0], [73.2, 411.0], [73.3, 412.0], [73.4, 412.0], [73.5, 413.0], [73.6, 413.0], [73.7, 415.0], [73.8, 415.0], [73.9, 416.0], [74.0, 417.0], [74.1, 418.0], [74.2, 419.0], [74.3, 421.0], [74.4, 421.0], [74.5, 423.0], [74.6, 424.0], [74.7, 425.0], [74.8, 426.0], [74.9, 427.0], [75.0, 427.0], [75.1, 429.0], [75.2, 430.0], [75.3, 431.0], [75.4, 431.0], [75.5, 432.0], [75.6, 432.0], [75.7, 435.0], [75.8, 435.0], [75.9, 436.0], [76.0, 437.0], [76.1, 438.0], [76.2, 438.0], [76.3, 439.0], [76.4, 440.0], [76.5, 440.0], [76.6, 442.0], [76.7, 442.0], [76.8, 443.0], [76.9, 443.0], [77.0, 444.0], [77.1, 445.0], [77.2, 446.0], [77.3, 446.0], [77.4, 447.0], [77.5, 449.0], [77.6, 450.0], [77.7, 451.0], [77.8, 452.0], [77.9, 452.0], [78.0, 453.0], [78.1, 454.0], [78.2, 455.0], [78.3, 456.0], [78.4, 457.0], [78.5, 457.0], [78.6, 458.0], [78.7, 459.0], [78.8, 459.0], [78.9, 460.0], [79.0, 460.0], [79.1, 461.0], [79.2, 462.0], [79.3, 462.0], [79.4, 463.0], [79.5, 465.0], [79.6, 466.0], [79.7, 467.0], [79.8, 468.0], [79.9, 469.0], [80.0, 470.0], [80.1, 471.0], [80.2, 472.0], [80.3, 473.0], [80.4, 473.0], [80.5, 474.0], [80.6, 476.0], [80.7, 477.0], [80.8, 478.0], [80.9, 479.0], [81.0, 480.0], [81.1, 482.0], [81.2, 483.0], [81.3, 484.0], [81.4, 484.0], [81.5, 486.0], [81.6, 487.0], [81.7, 488.0], [81.8, 489.0], [81.9, 490.0], [82.0, 492.0], [82.1, 493.0], [82.2, 495.0], [82.3, 496.0], [82.4, 497.0], [82.5, 499.0], [82.6, 500.0], [82.7, 501.0], [82.8, 502.0], [82.9, 503.0], [83.0, 505.0], [83.1, 506.0], [83.2, 507.0], [83.3, 508.0], [83.4, 509.0], [83.5, 510.0], [83.6, 511.0], [83.7, 513.0], [83.8, 514.0], [83.9, 514.0], [84.0, 515.0], [84.1, 516.0], [84.2, 518.0], [84.3, 519.0], [84.4, 521.0], [84.5, 522.0], [84.6, 523.0], [84.7, 525.0], [84.8, 526.0], [84.9, 528.0], [85.0, 529.0], [85.1, 530.0], [85.2, 531.0], [85.3, 532.0], [85.4, 534.0], [85.5, 535.0], [85.6, 537.0], [85.7, 538.0], [85.8, 538.0], [85.9, 539.0], [86.0, 540.0], [86.1, 542.0], [86.2, 543.0], [86.3, 543.0], [86.4, 544.0], [86.5, 545.0], [86.6, 545.0], [86.7, 546.0], [86.8, 548.0], [86.9, 549.0], [87.0, 551.0], [87.1, 554.0], [87.2, 555.0], [87.3, 557.0], [87.4, 559.0], [87.5, 560.0], [87.6, 562.0], [87.7, 563.0], [87.8, 563.0], [87.9, 565.0], [88.0, 566.0], [88.1, 566.0], [88.2, 567.0], [88.3, 570.0], [88.4, 572.0], [88.5, 575.0], [88.6, 576.0], [88.7, 577.0], [88.8, 579.0], [88.9, 580.0], [89.0, 582.0], [89.1, 583.0], [89.2, 586.0], [89.3, 588.0], [89.4, 590.0], [89.5, 591.0], [89.6, 593.0], [89.7, 597.0], [89.8, 599.0], [89.9, 601.0], [90.0, 603.0], [90.1, 607.0], [90.2, 610.0], [90.3, 611.0], [90.4, 614.0], [90.5, 617.0], [90.6, 620.0], [90.7, 624.0], [90.8, 627.0], [90.9, 629.0], [91.0, 631.0], [91.1, 634.0], [91.2, 636.0], [91.3, 638.0], [91.4, 640.0], [91.5, 641.0], [91.6, 644.0], [91.7, 648.0], [91.8, 652.0], [91.9, 653.0], [92.0, 657.0], [92.1, 660.0], [92.2, 664.0], [92.3, 669.0], [92.4, 670.0], [92.5, 672.0], [92.6, 673.0], [92.7, 679.0], [92.8, 682.0], [92.9, 685.0], [93.0, 689.0], [93.1, 692.0], [93.2, 700.0], [93.3, 703.0], [93.4, 706.0], [93.5, 710.0], [93.6, 713.0], [93.7, 718.0], [93.8, 728.0], [93.9, 732.0], [94.0, 736.0], [94.1, 741.0], [94.2, 746.0], [94.3, 753.0], [94.4, 756.0], [94.5, 764.0], [94.6, 770.0], [94.7, 773.0], [94.8, 777.0], [94.9, 781.0], [95.0, 785.0], [95.1, 788.0], [95.2, 797.0], [95.3, 803.0], [95.4, 806.0], [95.5, 810.0], [95.6, 813.0], [95.7, 820.0], [95.8, 825.0], [95.9, 838.0], [96.0, 841.0], [96.1, 845.0], [96.2, 852.0], [96.3, 854.0], [96.4, 864.0], [96.5, 878.0], [96.6, 887.0], [96.7, 902.0], [96.8, 913.0], [96.9, 926.0], [97.0, 941.0], [97.1, 954.0], [97.2, 969.0], [97.3, 977.0], [97.4, 1003.0], [97.5, 1014.0], [97.6, 1016.0], [97.7, 1028.0], [97.8, 1046.0], [97.9, 1065.0], [98.0, 1079.0], [98.1, 1090.0], [98.2, 1108.0], [98.3, 1120.0], [98.4, 1150.0], [98.5, 1160.0], [98.6, 1184.0], [98.7, 1199.0], [98.8, 1216.0], [98.9, 1222.0], [99.0, 1271.0], [99.1, 1304.0], [99.2, 1348.0], [99.3, 1437.0], [99.4, 1516.0], [99.5, 1713.0], [99.6, 1919.0], [99.7, 2592.0], [99.8, 3341.0], [99.9, 3805.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 1122.0, "series": [{"data": [[0.0, 735.0], [600.0, 175.0], [700.0, 108.0], [800.0, 72.0], [900.0, 37.0], [1000.0, 40.0], [1100.0, 29.0], [1200.0, 19.0], [1300.0, 9.0], [1400.0, 7.0], [1500.0, 2.0], [100.0, 1122.0], [1600.0, 4.0], [1700.0, 2.0], [1800.0, 2.0], [1900.0, 2.0], [2200.0, 2.0], [2300.0, 1.0], [2400.0, 1.0], [2500.0, 1.0], [2600.0, 1.0], [2900.0, 1.0], [3100.0, 1.0], [200.0, 1054.0], [3300.0, 2.0], [3400.0, 3.0], [3500.0, 1.0], [3800.0, 2.0], [4300.0, 1.0], [4200.0, 2.0], [4600.0, 1.0], [300.0, 822.0], [400.0, 552.0], [500.0, 377.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 4600.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 32.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 4291.0, "series": [{"data": [[0.0, 4291.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 867.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 32.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.913627639155468, "minX": 1.6050618E12, "maxY": 10.0, "series": [{"data": [[1.6050618E12, 9.988043478260874], [1.60506198E12, 9.913627639155468], [1.60506192E12, 10.0], [1.60506186E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60506198E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 188.0, "minX": 1.0, "maxY": 497.6666666666667, "series": [{"data": [[8.0, 462.5], [4.0, 313.0], [2.0, 321.0], [1.0, 332.0], [9.0, 278.5], [10.0, 329.8608695652171], [5.0, 188.0], [6.0, 267.0], [3.0, 413.0], [7.0, 497.6666666666667]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.989210019267858, 329.94142581888326]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 3629.55, "minX": 1.6050618E12, "maxY": 1.3384791283333333E7, "series": [{"data": [[1.6050618E12, 6010970.55], [1.60506198E12, 3526826.683333333], [1.60506192E12, 1.3022009066666666E7], [1.60506186E12, 1.3384791283333333E7]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6050618E12, 6127.333333333333], [1.60506198E12, 3629.55], [1.60506192E12, 12978.033333333333], [1.60506186E12, 12408.85]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60506198E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 308.0207468879674, "minX": 1.6050618E12, "maxY": 380.45543478260834, "series": [{"data": [[1.6050618E12, 380.45543478260834], [1.60506198E12, 326.84452975047964], [1.60506192E12, 308.0207468879674], [1.60506186E12, 328.5156507413506]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60506198E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 305.7977178423238, "minX": 1.6050618E12, "maxY": 377.61630434782666, "series": [{"data": [[1.6050618E12, 377.61630434782666], [1.60506198E12, 324.7658349328215], [1.60506192E12, 305.7977178423238], [1.60506186E12, 325.7924217462933]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60506198E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0067427385892116195, "minX": 1.6050618E12, "maxY": 0.10978260869565223, "series": [{"data": [[1.6050618E12, 0.10978260869565223], [1.60506198E12, 0.011516314779270646], [1.60506192E12, 0.0067427385892116195], [1.60506186E12, 0.01427786930258103]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60506198E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 4.0, "minX": 1.6050618E12, "maxY": 4668.0, "series": [{"data": [[1.6050618E12, 4668.0], [1.60506198E12, 1889.0], [1.60506192E12, 4293.0], [1.60506186E12, 1789.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6050618E12, 22.28899978041649], [1.60506198E12, 14.697999875545502], [1.60506192E12, 14.0], [1.60506186E12, 14.39799956560135]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6050618E12, 23.117900087833405], [1.60506198E12, 15.0], [1.60506192E12, 14.0], [1.60506186E12, 15.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6050618E12, 22.74949989020824], [1.60506198E12, 14.95899993777275], [1.60506192E12, 14.0], [1.60506186E12, 15.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.6050618E12, 6.0], [1.60506198E12, 8.0], [1.60506192E12, 4.0], [1.60506186E12, 5.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6050618E12, 273.5], [1.60506198E12, 256.0], [1.60506192E12, 260.0], [1.60506186E12, 286.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60506198E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 165.0, "minX": 4.0, "maxY": 820.0, "series": [{"data": [[33.0, 281.5], [32.0, 248.0], [35.0, 266.0], [34.0, 254.0], [37.0, 264.0], [36.0, 268.0], [39.0, 236.0], [38.0, 219.0], [41.0, 203.0], [40.0, 208.5], [43.0, 175.0], [42.0, 183.5], [44.0, 200.0], [45.0, 251.0], [46.0, 229.0], [48.0, 165.5], [49.0, 165.0], [50.0, 195.0], [52.0, 167.0], [53.0, 196.0], [54.0, 192.0], [4.0, 820.0], [6.0, 415.0], [8.0, 599.0], [9.0, 425.5], [10.0, 408.5], [11.0, 561.0], [12.0, 465.0], [13.0, 765.0], [15.0, 582.5], [16.0, 351.0], [17.0, 701.0], [18.0, 435.0], [19.0, 354.0], [20.0, 403.5], [21.0, 480.0], [22.0, 300.5], [23.0, 394.0], [24.0, 317.5], [25.0, 388.0], [26.0, 331.5], [27.0, 342.5], [28.0, 325.0], [29.0, 319.5], [30.0, 299.0], [31.0, 312.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 54.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 164.0, "minX": 4.0, "maxY": 820.0, "series": [{"data": [[33.0, 279.0], [32.0, 246.0], [35.0, 262.0], [34.0, 251.5], [37.0, 259.0], [36.0, 265.5], [39.0, 233.0], [38.0, 217.0], [41.0, 198.0], [40.0, 205.5], [43.0, 172.0], [42.0, 182.0], [44.0, 188.0], [45.0, 250.0], [46.0, 226.0], [48.0, 164.5], [49.0, 164.0], [50.0, 192.0], [52.0, 167.0], [53.0, 194.0], [54.0, 190.5], [4.0, 820.0], [6.0, 415.0], [8.0, 599.0], [9.0, 420.0], [10.0, 407.0], [11.0, 560.5], [12.0, 463.0], [13.0, 765.0], [15.0, 578.0], [16.0, 350.0], [17.0, 700.0], [18.0, 434.0], [19.0, 353.0], [20.0, 403.0], [21.0, 480.0], [22.0, 294.5], [23.0, 393.0], [24.0, 310.5], [25.0, 384.0], [26.0, 327.0], [27.0, 338.0], [28.0, 324.5], [29.0, 315.5], [30.0, 296.0], [31.0, 309.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 54.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 8.516666666666667, "minX": 1.6050618E12, "maxY": 32.13333333333333, "series": [{"data": [[1.6050618E12, 15.5], [1.60506198E12, 8.516666666666667], [1.60506192E12, 32.13333333333333], [1.60506186E12, 30.35]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60506198E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 8.683333333333334, "minX": 1.6050618E12, "maxY": 32.13333333333333, "series": [{"data": [[1.6050618E12, 15.333333333333334], [1.60506198E12, 8.683333333333334], [1.60506192E12, 32.13333333333333], [1.60506186E12, 30.35]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60506198E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 8.683333333333334, "minX": 1.6050618E12, "maxY": 32.13333333333333, "series": [{"data": [[1.6050618E12, 15.333333333333334], [1.60506198E12, 8.683333333333334], [1.60506192E12, 32.13333333333333], [1.60506186E12, 30.35]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60506198E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 8.683333333333334, "minX": 1.6050618E12, "maxY": 32.13333333333333, "series": [{"data": [[1.6050618E12, 15.333333333333334], [1.60506198E12, 8.683333333333334], [1.60506192E12, 32.13333333333333], [1.60506186E12, 30.35]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60506198E12, "title": "Total Transactions Per Second"}},
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

