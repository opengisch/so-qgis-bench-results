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
        data: {"result": {"minY": 4.0, "minX": 0.0, "maxY": 4606.0, "series": [{"data": [[0.0, 4.0], [0.1, 9.0], [0.2, 10.0], [0.3, 12.0], [0.4, 13.0], [0.5, 14.0], [0.6, 15.0], [0.7, 16.0], [0.8, 16.0], [0.9, 17.0], [1.0, 17.0], [1.1, 18.0], [1.2, 18.0], [1.3, 19.0], [1.4, 19.0], [1.5, 20.0], [1.6, 21.0], [1.7, 21.0], [1.8, 22.0], [1.9, 23.0], [2.0, 23.0], [2.1, 24.0], [2.2, 25.0], [2.3, 26.0], [2.4, 26.0], [2.5, 26.0], [2.6, 27.0], [2.7, 28.0], [2.8, 28.0], [2.9, 29.0], [3.0, 29.0], [3.1, 30.0], [3.2, 32.0], [3.3, 32.0], [3.4, 33.0], [3.5, 33.0], [3.6, 35.0], [3.7, 35.0], [3.8, 35.0], [3.9, 36.0], [4.0, 37.0], [4.1, 37.0], [4.2, 37.0], [4.3, 38.0], [4.4, 39.0], [4.5, 39.0], [4.6, 40.0], [4.7, 40.0], [4.8, 41.0], [4.9, 41.0], [5.0, 42.0], [5.1, 43.0], [5.2, 43.0], [5.3, 44.0], [5.4, 44.0], [5.5, 44.0], [5.6, 45.0], [5.7, 46.0], [5.8, 46.0], [5.9, 47.0], [6.0, 48.0], [6.1, 48.0], [6.2, 49.0], [6.3, 50.0], [6.4, 50.0], [6.5, 51.0], [6.6, 51.0], [6.7, 52.0], [6.8, 52.0], [6.9, 53.0], [7.0, 54.0], [7.1, 54.0], [7.2, 55.0], [7.3, 55.0], [7.4, 56.0], [7.5, 56.0], [7.6, 57.0], [7.7, 58.0], [7.8, 58.0], [7.9, 58.0], [8.0, 59.0], [8.1, 60.0], [8.2, 60.0], [8.3, 61.0], [8.4, 62.0], [8.5, 63.0], [8.6, 64.0], [8.7, 64.0], [8.8, 65.0], [8.9, 66.0], [9.0, 68.0], [9.1, 69.0], [9.2, 70.0], [9.3, 71.0], [9.4, 72.0], [9.5, 72.0], [9.6, 73.0], [9.7, 73.0], [9.8, 74.0], [9.9, 75.0], [10.0, 75.0], [10.1, 77.0], [10.2, 78.0], [10.3, 78.0], [10.4, 79.0], [10.5, 80.0], [10.6, 81.0], [10.7, 82.0], [10.8, 83.0], [10.9, 84.0], [11.0, 85.0], [11.1, 87.0], [11.2, 87.0], [11.3, 88.0], [11.4, 89.0], [11.5, 90.0], [11.6, 91.0], [11.7, 91.0], [11.8, 92.0], [11.9, 93.0], [12.0, 94.0], [12.1, 94.0], [12.2, 95.0], [12.3, 95.0], [12.4, 96.0], [12.5, 96.0], [12.6, 97.0], [12.7, 98.0], [12.8, 98.0], [12.9, 99.0], [13.0, 99.0], [13.1, 101.0], [13.2, 102.0], [13.3, 102.0], [13.4, 103.0], [13.5, 103.0], [13.6, 103.0], [13.7, 104.0], [13.8, 104.0], [13.9, 106.0], [14.0, 106.0], [14.1, 107.0], [14.2, 107.0], [14.3, 108.0], [14.4, 109.0], [14.5, 110.0], [14.6, 110.0], [14.7, 110.0], [14.8, 111.0], [14.9, 111.0], [15.0, 112.0], [15.1, 112.0], [15.2, 113.0], [15.3, 113.0], [15.4, 114.0], [15.5, 114.0], [15.6, 115.0], [15.7, 115.0], [15.8, 116.0], [15.9, 116.0], [16.0, 117.0], [16.1, 117.0], [16.2, 118.0], [16.3, 118.0], [16.4, 119.0], [16.5, 119.0], [16.6, 120.0], [16.7, 121.0], [16.8, 122.0], [16.9, 122.0], [17.0, 123.0], [17.1, 124.0], [17.2, 124.0], [17.3, 125.0], [17.4, 126.0], [17.5, 126.0], [17.6, 127.0], [17.7, 128.0], [17.8, 129.0], [17.9, 129.0], [18.0, 130.0], [18.1, 131.0], [18.2, 131.0], [18.3, 132.0], [18.4, 132.0], [18.5, 133.0], [18.6, 134.0], [18.7, 135.0], [18.8, 136.0], [18.9, 136.0], [19.0, 137.0], [19.1, 138.0], [19.2, 138.0], [19.3, 139.0], [19.4, 139.0], [19.5, 140.0], [19.6, 140.0], [19.7, 141.0], [19.8, 141.0], [19.9, 143.0], [20.0, 143.0], [20.1, 145.0], [20.2, 145.0], [20.3, 145.0], [20.4, 146.0], [20.5, 146.0], [20.6, 147.0], [20.7, 147.0], [20.8, 148.0], [20.9, 148.0], [21.0, 149.0], [21.1, 150.0], [21.2, 150.0], [21.3, 151.0], [21.4, 151.0], [21.5, 152.0], [21.6, 152.0], [21.7, 153.0], [21.8, 154.0], [21.9, 154.0], [22.0, 154.0], [22.1, 155.0], [22.2, 155.0], [22.3, 156.0], [22.4, 156.0], [22.5, 157.0], [22.6, 158.0], [22.7, 159.0], [22.8, 159.0], [22.9, 160.0], [23.0, 160.0], [23.1, 161.0], [23.2, 161.0], [23.3, 162.0], [23.4, 162.0], [23.5, 163.0], [23.6, 164.0], [23.7, 165.0], [23.8, 166.0], [23.9, 166.0], [24.0, 167.0], [24.1, 167.0], [24.2, 168.0], [24.3, 168.0], [24.4, 169.0], [24.5, 169.0], [24.6, 170.0], [24.7, 170.0], [24.8, 171.0], [24.9, 171.0], [25.0, 171.0], [25.1, 171.0], [25.2, 172.0], [25.3, 172.0], [25.4, 173.0], [25.5, 173.0], [25.6, 174.0], [25.7, 174.0], [25.8, 175.0], [25.9, 176.0], [26.0, 176.0], [26.1, 177.0], [26.2, 177.0], [26.3, 177.0], [26.4, 178.0], [26.5, 178.0], [26.6, 178.0], [26.7, 179.0], [26.8, 179.0], [26.9, 179.0], [27.0, 180.0], [27.1, 180.0], [27.2, 180.0], [27.3, 180.0], [27.4, 181.0], [27.5, 181.0], [27.6, 181.0], [27.7, 181.0], [27.8, 182.0], [27.9, 182.0], [28.0, 182.0], [28.1, 182.0], [28.2, 182.0], [28.3, 183.0], [28.4, 183.0], [28.5, 183.0], [28.6, 183.0], [28.7, 183.0], [28.8, 184.0], [28.9, 184.0], [29.0, 184.0], [29.1, 184.0], [29.2, 185.0], [29.3, 185.0], [29.4, 185.0], [29.5, 185.0], [29.6, 186.0], [29.7, 186.0], [29.8, 186.0], [29.9, 187.0], [30.0, 187.0], [30.1, 187.0], [30.2, 188.0], [30.3, 188.0], [30.4, 188.0], [30.5, 188.0], [30.6, 188.0], [30.7, 189.0], [30.8, 189.0], [30.9, 189.0], [31.0, 189.0], [31.1, 190.0], [31.2, 190.0], [31.3, 190.0], [31.4, 191.0], [31.5, 191.0], [31.6, 191.0], [31.7, 192.0], [31.8, 192.0], [31.9, 193.0], [32.0, 193.0], [32.1, 193.0], [32.2, 194.0], [32.3, 194.0], [32.4, 194.0], [32.5, 194.0], [32.6, 194.0], [32.7, 195.0], [32.8, 196.0], [32.9, 196.0], [33.0, 196.0], [33.1, 196.0], [33.2, 196.0], [33.3, 197.0], [33.4, 197.0], [33.5, 198.0], [33.6, 198.0], [33.7, 199.0], [33.8, 199.0], [33.9, 200.0], [34.0, 200.0], [34.1, 201.0], [34.2, 201.0], [34.3, 202.0], [34.4, 202.0], [34.5, 202.0], [34.6, 203.0], [34.7, 203.0], [34.8, 203.0], [34.9, 203.0], [35.0, 204.0], [35.1, 204.0], [35.2, 204.0], [35.3, 205.0], [35.4, 205.0], [35.5, 205.0], [35.6, 206.0], [35.7, 206.0], [35.8, 207.0], [35.9, 207.0], [36.0, 208.0], [36.1, 208.0], [36.2, 208.0], [36.3, 209.0], [36.4, 210.0], [36.5, 210.0], [36.6, 211.0], [36.7, 212.0], [36.8, 212.0], [36.9, 213.0], [37.0, 214.0], [37.1, 214.0], [37.2, 215.0], [37.3, 215.0], [37.4, 216.0], [37.5, 217.0], [37.6, 217.0], [37.7, 218.0], [37.8, 219.0], [37.9, 220.0], [38.0, 220.0], [38.1, 221.0], [38.2, 221.0], [38.3, 222.0], [38.4, 222.0], [38.5, 223.0], [38.6, 224.0], [38.7, 224.0], [38.8, 224.0], [38.9, 225.0], [39.0, 226.0], [39.1, 226.0], [39.2, 227.0], [39.3, 227.0], [39.4, 228.0], [39.5, 229.0], [39.6, 230.0], [39.7, 230.0], [39.8, 231.0], [39.9, 231.0], [40.0, 232.0], [40.1, 232.0], [40.2, 233.0], [40.3, 233.0], [40.4, 234.0], [40.5, 234.0], [40.6, 235.0], [40.7, 236.0], [40.8, 236.0], [40.9, 237.0], [41.0, 237.0], [41.1, 237.0], [41.2, 238.0], [41.3, 238.0], [41.4, 238.0], [41.5, 239.0], [41.6, 240.0], [41.7, 240.0], [41.8, 241.0], [41.9, 241.0], [42.0, 242.0], [42.1, 242.0], [42.2, 242.0], [42.3, 243.0], [42.4, 243.0], [42.5, 243.0], [42.6, 243.0], [42.7, 244.0], [42.8, 245.0], [42.9, 245.0], [43.0, 246.0], [43.1, 246.0], [43.2, 246.0], [43.3, 247.0], [43.4, 248.0], [43.5, 248.0], [43.6, 249.0], [43.7, 249.0], [43.8, 250.0], [43.9, 251.0], [44.0, 251.0], [44.1, 252.0], [44.2, 253.0], [44.3, 253.0], [44.4, 254.0], [44.5, 254.0], [44.6, 255.0], [44.7, 255.0], [44.8, 256.0], [44.9, 256.0], [45.0, 257.0], [45.1, 257.0], [45.2, 258.0], [45.3, 258.0], [45.4, 258.0], [45.5, 259.0], [45.6, 260.0], [45.7, 261.0], [45.8, 261.0], [45.9, 261.0], [46.0, 262.0], [46.1, 263.0], [46.2, 263.0], [46.3, 263.0], [46.4, 264.0], [46.5, 265.0], [46.6, 265.0], [46.7, 265.0], [46.8, 265.0], [46.9, 266.0], [47.0, 266.0], [47.1, 266.0], [47.2, 267.0], [47.3, 267.0], [47.4, 268.0], [47.5, 268.0], [47.6, 269.0], [47.7, 269.0], [47.8, 270.0], [47.9, 270.0], [48.0, 270.0], [48.1, 271.0], [48.2, 271.0], [48.3, 271.0], [48.4, 272.0], [48.5, 272.0], [48.6, 273.0], [48.7, 273.0], [48.8, 274.0], [48.9, 274.0], [49.0, 275.0], [49.1, 275.0], [49.2, 276.0], [49.3, 276.0], [49.4, 277.0], [49.5, 277.0], [49.6, 278.0], [49.7, 278.0], [49.8, 279.0], [49.9, 279.0], [50.0, 279.0], [50.1, 280.0], [50.2, 280.0], [50.3, 281.0], [50.4, 282.0], [50.5, 282.0], [50.6, 282.0], [50.7, 282.0], [50.8, 283.0], [50.9, 283.0], [51.0, 284.0], [51.1, 284.0], [51.2, 285.0], [51.3, 285.0], [51.4, 285.0], [51.5, 286.0], [51.6, 286.0], [51.7, 287.0], [51.8, 287.0], [51.9, 287.0], [52.0, 287.0], [52.1, 288.0], [52.2, 288.0], [52.3, 288.0], [52.4, 289.0], [52.5, 290.0], [52.6, 290.0], [52.7, 291.0], [52.8, 291.0], [52.9, 292.0], [53.0, 292.0], [53.1, 293.0], [53.2, 294.0], [53.3, 294.0], [53.4, 295.0], [53.5, 295.0], [53.6, 296.0], [53.7, 296.0], [53.8, 297.0], [53.9, 297.0], [54.0, 298.0], [54.1, 299.0], [54.2, 299.0], [54.3, 300.0], [54.4, 300.0], [54.5, 300.0], [54.6, 301.0], [54.7, 301.0], [54.8, 302.0], [54.9, 302.0], [55.0, 302.0], [55.1, 303.0], [55.2, 304.0], [55.3, 305.0], [55.4, 305.0], [55.5, 305.0], [55.6, 305.0], [55.7, 306.0], [55.8, 307.0], [55.9, 307.0], [56.0, 308.0], [56.1, 308.0], [56.2, 309.0], [56.3, 310.0], [56.4, 310.0], [56.5, 310.0], [56.6, 311.0], [56.7, 311.0], [56.8, 311.0], [56.9, 312.0], [57.0, 312.0], [57.1, 312.0], [57.2, 313.0], [57.3, 313.0], [57.4, 314.0], [57.5, 314.0], [57.6, 314.0], [57.7, 315.0], [57.8, 315.0], [57.9, 316.0], [58.0, 316.0], [58.1, 316.0], [58.2, 317.0], [58.3, 317.0], [58.4, 318.0], [58.5, 319.0], [58.6, 319.0], [58.7, 320.0], [58.8, 320.0], [58.9, 321.0], [59.0, 321.0], [59.1, 322.0], [59.2, 322.0], [59.3, 323.0], [59.4, 324.0], [59.5, 324.0], [59.6, 324.0], [59.7, 325.0], [59.8, 326.0], [59.9, 326.0], [60.0, 327.0], [60.1, 328.0], [60.2, 328.0], [60.3, 329.0], [60.4, 330.0], [60.5, 331.0], [60.6, 332.0], [60.7, 332.0], [60.8, 333.0], [60.9, 334.0], [61.0, 334.0], [61.1, 335.0], [61.2, 336.0], [61.3, 336.0], [61.4, 337.0], [61.5, 337.0], [61.6, 338.0], [61.7, 339.0], [61.8, 339.0], [61.9, 340.0], [62.0, 340.0], [62.1, 341.0], [62.2, 341.0], [62.3, 341.0], [62.4, 342.0], [62.5, 342.0], [62.6, 343.0], [62.7, 343.0], [62.8, 344.0], [62.9, 344.0], [63.0, 345.0], [63.1, 345.0], [63.2, 346.0], [63.3, 346.0], [63.4, 347.0], [63.5, 347.0], [63.6, 347.0], [63.7, 348.0], [63.8, 349.0], [63.9, 349.0], [64.0, 350.0], [64.1, 351.0], [64.2, 351.0], [64.3, 352.0], [64.4, 353.0], [64.5, 353.0], [64.6, 354.0], [64.7, 354.0], [64.8, 355.0], [64.9, 355.0], [65.0, 356.0], [65.1, 356.0], [65.2, 357.0], [65.3, 358.0], [65.4, 358.0], [65.5, 358.0], [65.6, 359.0], [65.7, 359.0], [65.8, 360.0], [65.9, 361.0], [66.0, 361.0], [66.1, 362.0], [66.2, 363.0], [66.3, 363.0], [66.4, 364.0], [66.5, 364.0], [66.6, 365.0], [66.7, 365.0], [66.8, 365.0], [66.9, 366.0], [67.0, 366.0], [67.1, 367.0], [67.2, 367.0], [67.3, 367.0], [67.4, 368.0], [67.5, 368.0], [67.6, 368.0], [67.7, 369.0], [67.8, 370.0], [67.9, 370.0], [68.0, 370.0], [68.1, 371.0], [68.2, 372.0], [68.3, 372.0], [68.4, 373.0], [68.5, 373.0], [68.6, 374.0], [68.7, 374.0], [68.8, 374.0], [68.9, 375.0], [69.0, 375.0], [69.1, 376.0], [69.2, 377.0], [69.3, 377.0], [69.4, 378.0], [69.5, 378.0], [69.6, 379.0], [69.7, 379.0], [69.8, 380.0], [69.9, 380.0], [70.0, 381.0], [70.1, 382.0], [70.2, 382.0], [70.3, 383.0], [70.4, 383.0], [70.5, 383.0], [70.6, 384.0], [70.7, 384.0], [70.8, 384.0], [70.9, 385.0], [71.0, 385.0], [71.1, 386.0], [71.2, 386.0], [71.3, 387.0], [71.4, 388.0], [71.5, 388.0], [71.6, 389.0], [71.7, 389.0], [71.8, 390.0], [71.9, 390.0], [72.0, 391.0], [72.1, 392.0], [72.2, 392.0], [72.3, 393.0], [72.4, 394.0], [72.5, 395.0], [72.6, 395.0], [72.7, 396.0], [72.8, 398.0], [72.9, 399.0], [73.0, 400.0], [73.1, 402.0], [73.2, 403.0], [73.3, 404.0], [73.4, 405.0], [73.5, 405.0], [73.6, 406.0], [73.7, 407.0], [73.8, 407.0], [73.9, 408.0], [74.0, 409.0], [74.1, 410.0], [74.2, 411.0], [74.3, 412.0], [74.4, 413.0], [74.5, 415.0], [74.6, 416.0], [74.7, 417.0], [74.8, 418.0], [74.9, 419.0], [75.0, 420.0], [75.1, 420.0], [75.2, 422.0], [75.3, 422.0], [75.4, 424.0], [75.5, 425.0], [75.6, 426.0], [75.7, 427.0], [75.8, 428.0], [75.9, 429.0], [76.0, 431.0], [76.1, 432.0], [76.2, 433.0], [76.3, 433.0], [76.4, 435.0], [76.5, 435.0], [76.6, 436.0], [76.7, 437.0], [76.8, 437.0], [76.9, 438.0], [77.0, 439.0], [77.1, 439.0], [77.2, 440.0], [77.3, 441.0], [77.4, 442.0], [77.5, 442.0], [77.6, 442.0], [77.7, 444.0], [77.8, 444.0], [77.9, 446.0], [78.0, 446.0], [78.1, 447.0], [78.2, 447.0], [78.3, 448.0], [78.4, 449.0], [78.5, 450.0], [78.6, 452.0], [78.7, 452.0], [78.8, 453.0], [78.9, 453.0], [79.0, 454.0], [79.1, 455.0], [79.2, 456.0], [79.3, 456.0], [79.4, 457.0], [79.5, 458.0], [79.6, 458.0], [79.7, 459.0], [79.8, 459.0], [79.9, 460.0], [80.0, 461.0], [80.1, 462.0], [80.2, 463.0], [80.3, 464.0], [80.4, 464.0], [80.5, 465.0], [80.6, 466.0], [80.7, 467.0], [80.8, 468.0], [80.9, 469.0], [81.0, 469.0], [81.1, 471.0], [81.2, 471.0], [81.3, 472.0], [81.4, 473.0], [81.5, 474.0], [81.6, 474.0], [81.7, 475.0], [81.8, 476.0], [81.9, 478.0], [82.0, 478.0], [82.1, 479.0], [82.2, 480.0], [82.3, 480.0], [82.4, 481.0], [82.5, 483.0], [82.6, 484.0], [82.7, 486.0], [82.8, 486.0], [82.9, 487.0], [83.0, 488.0], [83.1, 489.0], [83.2, 490.0], [83.3, 491.0], [83.4, 493.0], [83.5, 493.0], [83.6, 494.0], [83.7, 495.0], [83.8, 496.0], [83.9, 496.0], [84.0, 497.0], [84.1, 499.0], [84.2, 500.0], [84.3, 501.0], [84.4, 502.0], [84.5, 503.0], [84.6, 505.0], [84.7, 506.0], [84.8, 507.0], [84.9, 507.0], [85.0, 508.0], [85.1, 509.0], [85.2, 511.0], [85.3, 513.0], [85.4, 514.0], [85.5, 516.0], [85.6, 516.0], [85.7, 517.0], [85.8, 518.0], [85.9, 519.0], [86.0, 520.0], [86.1, 521.0], [86.2, 522.0], [86.3, 523.0], [86.4, 524.0], [86.5, 526.0], [86.6, 527.0], [86.7, 528.0], [86.8, 529.0], [86.9, 530.0], [87.0, 532.0], [87.1, 533.0], [87.2, 536.0], [87.3, 538.0], [87.4, 539.0], [87.5, 541.0], [87.6, 543.0], [87.7, 543.0], [87.8, 544.0], [87.9, 545.0], [88.0, 546.0], [88.1, 547.0], [88.2, 549.0], [88.3, 550.0], [88.4, 552.0], [88.5, 554.0], [88.6, 555.0], [88.7, 555.0], [88.8, 557.0], [88.9, 558.0], [89.0, 559.0], [89.1, 561.0], [89.2, 566.0], [89.3, 567.0], [89.4, 568.0], [89.5, 570.0], [89.6, 573.0], [89.7, 574.0], [89.8, 575.0], [89.9, 577.0], [90.0, 579.0], [90.1, 581.0], [90.2, 583.0], [90.3, 584.0], [90.4, 584.0], [90.5, 586.0], [90.6, 589.0], [90.7, 591.0], [90.8, 593.0], [90.9, 595.0], [91.0, 598.0], [91.1, 600.0], [91.2, 601.0], [91.3, 603.0], [91.4, 604.0], [91.5, 606.0], [91.6, 609.0], [91.7, 611.0], [91.8, 614.0], [91.9, 615.0], [92.0, 618.0], [92.1, 622.0], [92.2, 625.0], [92.3, 628.0], [92.4, 629.0], [92.5, 632.0], [92.6, 633.0], [92.7, 637.0], [92.8, 641.0], [92.9, 642.0], [93.0, 645.0], [93.1, 649.0], [93.2, 654.0], [93.3, 660.0], [93.4, 664.0], [93.5, 667.0], [93.6, 671.0], [93.7, 678.0], [93.8, 683.0], [93.9, 687.0], [94.0, 692.0], [94.1, 698.0], [94.2, 700.0], [94.3, 705.0], [94.4, 707.0], [94.5, 716.0], [94.6, 721.0], [94.7, 724.0], [94.8, 731.0], [94.9, 736.0], [95.0, 743.0], [95.1, 749.0], [95.2, 754.0], [95.3, 760.0], [95.4, 765.0], [95.5, 774.0], [95.6, 780.0], [95.7, 784.0], [95.8, 788.0], [95.9, 792.0], [96.0, 798.0], [96.1, 806.0], [96.2, 813.0], [96.3, 816.0], [96.4, 825.0], [96.5, 830.0], [96.6, 838.0], [96.7, 848.0], [96.8, 852.0], [96.9, 863.0], [97.0, 875.0], [97.1, 883.0], [97.2, 899.0], [97.3, 911.0], [97.4, 926.0], [97.5, 948.0], [97.6, 961.0], [97.7, 971.0], [97.8, 1017.0], [97.9, 1034.0], [98.0, 1045.0], [98.1, 1062.0], [98.2, 1088.0], [98.3, 1100.0], [98.4, 1121.0], [98.5, 1139.0], [98.6, 1171.0], [98.7, 1214.0], [98.8, 1238.0], [98.9, 1267.0], [99.0, 1297.0], [99.1, 1331.0], [99.2, 1430.0], [99.3, 1506.0], [99.4, 1761.0], [99.5, 1914.0], [99.6, 2295.0], [99.7, 2633.0], [99.8, 3104.0], [99.9, 3476.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 1082.0, "series": [{"data": [[0.0, 675.0], [600.0, 161.0], [700.0, 96.0], [800.0, 61.0], [900.0, 26.0], [1000.0, 29.0], [1100.0, 21.0], [1200.0, 19.0], [1300.0, 7.0], [1400.0, 5.0], [1500.0, 5.0], [100.0, 1082.0], [1600.0, 1.0], [1700.0, 4.0], [1800.0, 2.0], [1900.0, 2.0], [2200.0, 4.0], [2400.0, 2.0], [2500.0, 2.0], [2600.0, 1.0], [2900.0, 2.0], [3000.0, 2.0], [3100.0, 2.0], [200.0, 1061.0], [3300.0, 3.0], [3400.0, 1.0], [3900.0, 1.0], [4100.0, 2.0], [4500.0, 1.0], [4600.0, 1.0], [300.0, 966.0], [400.0, 581.0], [500.0, 362.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 4600.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 38.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 4374.0, "series": [{"data": [[0.0, 4374.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 778.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 38.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.942307692307693, "minX": 1.60239324E12, "maxY": 10.0, "series": [{"data": [[1.6023933E12, 10.0], [1.60239342E12, 9.97178477690289], [1.60239324E12, 9.942307692307693], [1.60239336E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60239342E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 143.0, "minX": 1.0, "maxY": 880.0, "series": [{"data": [[8.0, 143.0], [4.0, 550.0], [2.0, 363.0], [1.0, 880.0], [9.0, 640.6666666666666], [10.0, 328.9696852674265], [6.0, 217.5], [3.0, 739.0], [7.0, 311.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.991136801541474, 329.3019267822732]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 356.2, "minX": 1.60239324E12, "maxY": 1.2934484766666668E7, "series": [{"data": [[1.6023933E12, 1.1503752E7], [1.60239342E12, 1.1068240883333333E7], [1.60239324E12, 437148.75], [1.60239336E12, 1.2934484766666668E7]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6023933E12, 10818.866666666667], [1.60239342E12, 10486.316666666668], [1.60239324E12, 356.2], [1.60239336E12, 13482.383333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60239342E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 299.21654135338406, "minX": 1.60239324E12, "maxY": 369.03582458307505, "series": [{"data": [[1.6023933E12, 369.03582458307505], [1.60239342E12, 325.35367454068256], [1.60239324E12, 362.1538461538462], [1.60239336E12, 299.21654135338406]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60239342E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 297.1744360902256, "minX": 1.60239324E12, "maxY": 365.84681902408965, "series": [{"data": [[1.6023933E12, 365.84681902408965], [1.60239342E12, 323.2139107611545], [1.60239324E12, 357.82692307692304], [1.60239336E12, 297.1744360902256]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60239342E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.005558987029030265, "minX": 1.60239324E12, "maxY": 1.6346153846153841, "series": [{"data": [[1.6023933E12, 0.005558987029030265], [1.60239342E12, 0.009842519685039389], [1.60239324E12, 1.6346153846153841], [1.60239336E12, 0.010025062656641623]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60239342E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 4.0, "minX": 1.60239324E12, "maxY": 4606.0, "series": [{"data": [[1.6023933E12, 4606.0], [1.60239342E12, 3029.0], [1.60239324E12, 821.0], [1.60239336E12, 1860.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6023933E12, 17.579999613761903], [1.60239342E12, 15.0], [1.60239324E12, 35.0], [1.60239336E12, 17.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6023933E12, 18.03800015449524], [1.60239342E12, 16.0], [1.60239324E12, 35.0], [1.60239336E12, 17.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6023933E12, 18.0], [1.60239342E12, 15.487499818205832], [1.60239324E12, 35.0], [1.60239336E12, 17.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.6023933E12, 8.0], [1.60239342E12, 4.0], [1.60239324E12, 35.0], [1.60239336E12, 9.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6023933E12, 281.0], [1.60239342E12, 297.0], [1.60239324E12, 336.5], [1.60239336E12, 265.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60239342E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 96.5, "minX": 1.0, "maxY": 1687.0, "series": [{"data": [[32.0, 311.0], [33.0, 282.0], [34.0, 293.0], [35.0, 287.0], [37.0, 251.0], [36.0, 266.0], [38.0, 267.0], [39.0, 238.0], [40.0, 231.0], [41.0, 227.5], [42.0, 202.0], [43.0, 191.0], [45.0, 230.0], [44.0, 262.0], [46.0, 178.0], [47.0, 169.0], [48.0, 182.0], [49.0, 191.0], [51.0, 183.0], [52.0, 158.5], [55.0, 187.0], [62.0, 96.5], [6.0, 891.0], [8.0, 326.0], [9.0, 546.5], [10.0, 553.5], [11.0, 799.5], [12.0, 600.0], [13.0, 888.0], [14.0, 709.0], [15.0, 826.0], [1.0, 1687.0], [16.0, 589.5], [18.0, 443.5], [19.0, 286.0], [20.0, 376.0], [22.0, 458.5], [23.0, 383.0], [24.0, 442.5], [25.0, 361.0], [26.0, 324.5], [27.0, 356.0], [28.0, 335.0], [29.0, 346.0], [30.0, 291.0], [31.0, 289.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 62.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 96.5, "minX": 1.0, "maxY": 1682.5, "series": [{"data": [[32.0, 309.0], [33.0, 279.0], [34.0, 292.5], [35.0, 286.5], [37.0, 247.5], [36.0, 263.5], [38.0, 263.5], [39.0, 235.0], [40.0, 229.5], [41.0, 227.0], [42.0, 201.0], [43.0, 188.0], [45.0, 228.0], [44.0, 261.0], [46.0, 173.5], [47.0, 168.0], [48.0, 180.0], [49.0, 189.0], [51.0, 181.0], [52.0, 157.0], [55.0, 187.0], [62.0, 96.5], [6.0, 888.5], [8.0, 326.0], [9.0, 546.5], [10.0, 552.0], [11.0, 798.0], [12.0, 597.5], [13.0, 886.0], [14.0, 708.5], [15.0, 820.0], [1.0, 1682.5], [16.0, 588.5], [18.0, 442.5], [19.0, 285.0], [20.0, 370.5], [22.0, 452.5], [23.0, 381.0], [24.0, 439.0], [25.0, 357.0], [26.0, 322.0], [27.0, 353.0], [28.0, 333.0], [29.0, 344.0], [30.0, 288.0], [31.0, 288.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 62.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1.0333333333333334, "minX": 1.60239324E12, "maxY": 33.25, "series": [{"data": [[1.6023933E12, 26.983333333333334], [1.60239342E12, 25.233333333333334], [1.60239324E12, 1.0333333333333334], [1.60239336E12, 33.25]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60239342E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.8666666666666667, "minX": 1.60239324E12, "maxY": 33.25, "series": [{"data": [[1.6023933E12, 26.983333333333334], [1.60239342E12, 25.4], [1.60239324E12, 0.8666666666666667], [1.60239336E12, 33.25]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60239342E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.8666666666666667, "minX": 1.60239324E12, "maxY": 33.25, "series": [{"data": [[1.6023933E12, 26.983333333333334], [1.60239342E12, 25.4], [1.60239324E12, 0.8666666666666667], [1.60239336E12, 33.25]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60239342E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.8666666666666667, "minX": 1.60239324E12, "maxY": 33.25, "series": [{"data": [[1.6023933E12, 26.983333333333334], [1.60239342E12, 25.4], [1.60239324E12, 0.8666666666666667], [1.60239336E12, 33.25]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60239342E12, "title": "Total Transactions Per Second"}},
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

