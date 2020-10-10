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
        data: {"result": {"minY": 3.0, "minX": 0.0, "maxY": 7415.0, "series": [{"data": [[0.0, 3.0], [0.1, 4.0], [0.2, 6.0], [0.3, 10.0], [0.4, 11.0], [0.5, 12.0], [0.6, 13.0], [0.7, 14.0], [0.8, 14.0], [0.9, 14.0], [1.0, 14.0], [1.1, 15.0], [1.2, 15.0], [1.3, 16.0], [1.4, 17.0], [1.5, 17.0], [1.6, 18.0], [1.7, 18.0], [1.8, 18.0], [1.9, 19.0], [2.0, 19.0], [2.1, 20.0], [2.2, 21.0], [2.3, 21.0], [2.4, 21.0], [2.5, 21.0], [2.6, 22.0], [2.7, 22.0], [2.8, 23.0], [2.9, 24.0], [3.0, 24.0], [3.1, 25.0], [3.2, 25.0], [3.3, 26.0], [3.4, 26.0], [3.5, 26.0], [3.6, 27.0], [3.7, 28.0], [3.8, 29.0], [3.9, 30.0], [4.0, 30.0], [4.1, 31.0], [4.2, 32.0], [4.3, 32.0], [4.4, 33.0], [4.5, 34.0], [4.6, 34.0], [4.7, 34.0], [4.8, 35.0], [4.9, 35.0], [5.0, 36.0], [5.1, 36.0], [5.2, 37.0], [5.3, 37.0], [5.4, 38.0], [5.5, 39.0], [5.6, 39.0], [5.7, 39.0], [5.8, 40.0], [5.9, 40.0], [6.0, 41.0], [6.1, 41.0], [6.2, 41.0], [6.3, 42.0], [6.4, 42.0], [6.5, 43.0], [6.6, 43.0], [6.7, 44.0], [6.8, 44.0], [6.9, 45.0], [7.0, 45.0], [7.1, 46.0], [7.2, 47.0], [7.3, 48.0], [7.4, 49.0], [7.5, 49.0], [7.6, 49.0], [7.7, 50.0], [7.8, 51.0], [7.9, 51.0], [8.0, 52.0], [8.1, 52.0], [8.2, 53.0], [8.3, 54.0], [8.4, 55.0], [8.5, 55.0], [8.6, 56.0], [8.7, 57.0], [8.8, 57.0], [8.9, 58.0], [9.0, 60.0], [9.1, 60.0], [9.2, 62.0], [9.3, 62.0], [9.4, 63.0], [9.5, 64.0], [9.6, 64.0], [9.7, 65.0], [9.8, 65.0], [9.9, 66.0], [10.0, 67.0], [10.1, 68.0], [10.2, 69.0], [10.3, 70.0], [10.4, 71.0], [10.5, 72.0], [10.6, 73.0], [10.7, 73.0], [10.8, 75.0], [10.9, 76.0], [11.0, 77.0], [11.1, 78.0], [11.2, 79.0], [11.3, 81.0], [11.4, 82.0], [11.5, 82.0], [11.6, 83.0], [11.7, 83.0], [11.8, 84.0], [11.9, 84.0], [12.0, 86.0], [12.1, 87.0], [12.2, 88.0], [12.3, 88.0], [12.4, 89.0], [12.5, 90.0], [12.6, 90.0], [12.7, 91.0], [12.8, 92.0], [12.9, 92.0], [13.0, 92.0], [13.1, 93.0], [13.2, 93.0], [13.3, 94.0], [13.4, 94.0], [13.5, 95.0], [13.6, 96.0], [13.7, 96.0], [13.8, 97.0], [13.9, 98.0], [14.0, 98.0], [14.1, 99.0], [14.2, 100.0], [14.3, 100.0], [14.4, 101.0], [14.5, 102.0], [14.6, 103.0], [14.7, 103.0], [14.8, 104.0], [14.9, 105.0], [15.0, 106.0], [15.1, 107.0], [15.2, 107.0], [15.3, 108.0], [15.4, 108.0], [15.5, 109.0], [15.6, 110.0], [15.7, 110.0], [15.8, 111.0], [15.9, 111.0], [16.0, 112.0], [16.1, 112.0], [16.2, 113.0], [16.3, 113.0], [16.4, 113.0], [16.5, 114.0], [16.6, 115.0], [16.7, 116.0], [16.8, 116.0], [16.9, 117.0], [17.0, 118.0], [17.1, 119.0], [17.2, 120.0], [17.3, 120.0], [17.4, 121.0], [17.5, 121.0], [17.6, 122.0], [17.7, 123.0], [17.8, 123.0], [17.9, 124.0], [18.0, 124.0], [18.1, 124.0], [18.2, 125.0], [18.3, 125.0], [18.4, 126.0], [18.5, 127.0], [18.6, 127.0], [18.7, 127.0], [18.8, 128.0], [18.9, 129.0], [19.0, 129.0], [19.1, 130.0], [19.2, 131.0], [19.3, 131.0], [19.4, 132.0], [19.5, 133.0], [19.6, 133.0], [19.7, 134.0], [19.8, 135.0], [19.9, 136.0], [20.0, 136.0], [20.1, 137.0], [20.2, 138.0], [20.3, 138.0], [20.4, 139.0], [20.5, 140.0], [20.6, 140.0], [20.7, 140.0], [20.8, 141.0], [20.9, 141.0], [21.0, 141.0], [21.1, 142.0], [21.2, 143.0], [21.3, 143.0], [21.4, 144.0], [21.5, 145.0], [21.6, 145.0], [21.7, 146.0], [21.8, 147.0], [21.9, 147.0], [22.0, 148.0], [22.1, 148.0], [22.2, 149.0], [22.3, 150.0], [22.4, 150.0], [22.5, 150.0], [22.6, 151.0], [22.7, 152.0], [22.8, 152.0], [22.9, 152.0], [23.0, 153.0], [23.1, 154.0], [23.2, 155.0], [23.3, 156.0], [23.4, 156.0], [23.5, 156.0], [23.6, 157.0], [23.7, 158.0], [23.8, 158.0], [23.9, 158.0], [24.0, 159.0], [24.1, 159.0], [24.2, 160.0], [24.3, 160.0], [24.4, 161.0], [24.5, 162.0], [24.6, 163.0], [24.7, 163.0], [24.8, 163.0], [24.9, 164.0], [25.0, 165.0], [25.1, 165.0], [25.2, 166.0], [25.3, 166.0], [25.4, 167.0], [25.5, 167.0], [25.6, 167.0], [25.7, 168.0], [25.8, 168.0], [25.9, 169.0], [26.0, 169.0], [26.1, 169.0], [26.2, 170.0], [26.3, 170.0], [26.4, 171.0], [26.5, 171.0], [26.6, 171.0], [26.7, 171.0], [26.8, 172.0], [26.9, 172.0], [27.0, 173.0], [27.1, 173.0], [27.2, 173.0], [27.3, 174.0], [27.4, 174.0], [27.5, 174.0], [27.6, 175.0], [27.7, 175.0], [27.8, 175.0], [27.9, 176.0], [28.0, 176.0], [28.1, 176.0], [28.2, 177.0], [28.3, 177.0], [28.4, 178.0], [28.5, 178.0], [28.6, 178.0], [28.7, 178.0], [28.8, 179.0], [28.9, 179.0], [29.0, 179.0], [29.1, 179.0], [29.2, 180.0], [29.3, 180.0], [29.4, 180.0], [29.5, 180.0], [29.6, 180.0], [29.7, 181.0], [29.8, 181.0], [29.9, 181.0], [30.0, 181.0], [30.1, 182.0], [30.2, 182.0], [30.3, 182.0], [30.4, 182.0], [30.5, 182.0], [30.6, 183.0], [30.7, 183.0], [30.8, 183.0], [30.9, 183.0], [31.0, 183.0], [31.1, 183.0], [31.2, 184.0], [31.3, 184.0], [31.4, 184.0], [31.5, 184.0], [31.6, 185.0], [31.7, 185.0], [31.8, 185.0], [31.9, 186.0], [32.0, 186.0], [32.1, 186.0], [32.2, 186.0], [32.3, 187.0], [32.4, 187.0], [32.5, 187.0], [32.6, 187.0], [32.7, 188.0], [32.8, 188.0], [32.9, 188.0], [33.0, 188.0], [33.1, 189.0], [33.2, 189.0], [33.3, 189.0], [33.4, 190.0], [33.5, 190.0], [33.6, 191.0], [33.7, 191.0], [33.8, 191.0], [33.9, 192.0], [34.0, 192.0], [34.1, 192.0], [34.2, 192.0], [34.3, 193.0], [34.4, 193.0], [34.5, 194.0], [34.6, 194.0], [34.7, 194.0], [34.8, 194.0], [34.9, 195.0], [35.0, 195.0], [35.1, 195.0], [35.2, 196.0], [35.3, 196.0], [35.4, 196.0], [35.5, 197.0], [35.6, 197.0], [35.7, 197.0], [35.8, 198.0], [35.9, 198.0], [36.0, 199.0], [36.1, 199.0], [36.2, 199.0], [36.3, 200.0], [36.4, 200.0], [36.5, 201.0], [36.6, 202.0], [36.7, 202.0], [36.8, 202.0], [36.9, 202.0], [37.0, 203.0], [37.1, 203.0], [37.2, 204.0], [37.3, 205.0], [37.4, 205.0], [37.5, 206.0], [37.6, 206.0], [37.7, 207.0], [37.8, 207.0], [37.9, 207.0], [38.0, 209.0], [38.1, 209.0], [38.2, 210.0], [38.3, 210.0], [38.4, 210.0], [38.5, 211.0], [38.6, 211.0], [38.7, 211.0], [38.8, 212.0], [38.9, 213.0], [39.0, 214.0], [39.1, 214.0], [39.2, 215.0], [39.3, 216.0], [39.4, 216.0], [39.5, 216.0], [39.6, 217.0], [39.7, 218.0], [39.8, 218.0], [39.9, 219.0], [40.0, 219.0], [40.1, 220.0], [40.2, 220.0], [40.3, 221.0], [40.4, 221.0], [40.5, 221.0], [40.6, 222.0], [40.7, 222.0], [40.8, 223.0], [40.9, 223.0], [41.0, 224.0], [41.1, 224.0], [41.2, 225.0], [41.3, 226.0], [41.4, 226.0], [41.5, 226.0], [41.6, 227.0], [41.7, 227.0], [41.8, 227.0], [41.9, 228.0], [42.0, 229.0], [42.1, 229.0], [42.2, 229.0], [42.3, 231.0], [42.4, 231.0], [42.5, 232.0], [42.6, 232.0], [42.7, 233.0], [42.8, 233.0], [42.9, 234.0], [43.0, 235.0], [43.1, 235.0], [43.2, 235.0], [43.3, 236.0], [43.4, 236.0], [43.5, 237.0], [43.6, 237.0], [43.7, 238.0], [43.8, 238.0], [43.9, 239.0], [44.0, 239.0], [44.1, 240.0], [44.2, 240.0], [44.3, 240.0], [44.4, 241.0], [44.5, 241.0], [44.6, 242.0], [44.7, 242.0], [44.8, 243.0], [44.9, 244.0], [45.0, 244.0], [45.1, 244.0], [45.2, 245.0], [45.3, 246.0], [45.4, 246.0], [45.5, 246.0], [45.6, 247.0], [45.7, 247.0], [45.8, 248.0], [45.9, 248.0], [46.0, 249.0], [46.1, 249.0], [46.2, 249.0], [46.3, 250.0], [46.4, 250.0], [46.5, 251.0], [46.6, 251.0], [46.7, 252.0], [46.8, 253.0], [46.9, 254.0], [47.0, 254.0], [47.1, 255.0], [47.2, 256.0], [47.3, 256.0], [47.4, 257.0], [47.5, 257.0], [47.6, 258.0], [47.7, 259.0], [47.8, 259.0], [47.9, 260.0], [48.0, 260.0], [48.1, 260.0], [48.2, 261.0], [48.3, 262.0], [48.4, 262.0], [48.5, 262.0], [48.6, 263.0], [48.7, 263.0], [48.8, 264.0], [48.9, 264.0], [49.0, 264.0], [49.1, 265.0], [49.2, 265.0], [49.3, 266.0], [49.4, 266.0], [49.5, 267.0], [49.6, 267.0], [49.7, 268.0], [49.8, 268.0], [49.9, 269.0], [50.0, 269.0], [50.1, 269.0], [50.2, 270.0], [50.3, 270.0], [50.4, 270.0], [50.5, 271.0], [50.6, 271.0], [50.7, 272.0], [50.8, 272.0], [50.9, 273.0], [51.0, 273.0], [51.1, 273.0], [51.2, 273.0], [51.3, 273.0], [51.4, 274.0], [51.5, 274.0], [51.6, 274.0], [51.7, 275.0], [51.8, 276.0], [51.9, 276.0], [52.0, 276.0], [52.1, 276.0], [52.2, 277.0], [52.3, 277.0], [52.4, 278.0], [52.5, 278.0], [52.6, 279.0], [52.7, 279.0], [52.8, 280.0], [52.9, 280.0], [53.0, 280.0], [53.1, 281.0], [53.2, 281.0], [53.3, 281.0], [53.4, 282.0], [53.5, 282.0], [53.6, 283.0], [53.7, 283.0], [53.8, 283.0], [53.9, 284.0], [54.0, 285.0], [54.1, 285.0], [54.2, 286.0], [54.3, 286.0], [54.4, 286.0], [54.5, 287.0], [54.6, 287.0], [54.7, 288.0], [54.8, 289.0], [54.9, 289.0], [55.0, 290.0], [55.1, 291.0], [55.2, 291.0], [55.3, 291.0], [55.4, 292.0], [55.5, 292.0], [55.6, 293.0], [55.7, 293.0], [55.8, 294.0], [55.9, 295.0], [56.0, 295.0], [56.1, 296.0], [56.2, 297.0], [56.3, 297.0], [56.4, 298.0], [56.5, 298.0], [56.6, 298.0], [56.7, 299.0], [56.8, 299.0], [56.9, 300.0], [57.0, 300.0], [57.1, 301.0], [57.2, 302.0], [57.3, 302.0], [57.4, 303.0], [57.5, 303.0], [57.6, 304.0], [57.7, 304.0], [57.8, 304.0], [57.9, 305.0], [58.0, 305.0], [58.1, 306.0], [58.2, 306.0], [58.3, 307.0], [58.4, 308.0], [58.5, 309.0], [58.6, 309.0], [58.7, 310.0], [58.8, 311.0], [58.9, 311.0], [59.0, 311.0], [59.1, 312.0], [59.2, 313.0], [59.3, 313.0], [59.4, 314.0], [59.5, 314.0], [59.6, 315.0], [59.7, 315.0], [59.8, 315.0], [59.9, 316.0], [60.0, 317.0], [60.1, 317.0], [60.2, 318.0], [60.3, 318.0], [60.4, 319.0], [60.5, 320.0], [60.6, 320.0], [60.7, 320.0], [60.8, 321.0], [60.9, 321.0], [61.0, 322.0], [61.1, 322.0], [61.2, 323.0], [61.3, 324.0], [61.4, 324.0], [61.5, 325.0], [61.6, 326.0], [61.7, 327.0], [61.8, 327.0], [61.9, 328.0], [62.0, 328.0], [62.1, 329.0], [62.2, 329.0], [62.3, 329.0], [62.4, 330.0], [62.5, 331.0], [62.6, 331.0], [62.7, 332.0], [62.8, 332.0], [62.9, 333.0], [63.0, 334.0], [63.1, 334.0], [63.2, 334.0], [63.3, 335.0], [63.4, 336.0], [63.5, 337.0], [63.6, 338.0], [63.7, 338.0], [63.8, 339.0], [63.9, 339.0], [64.0, 339.0], [64.1, 340.0], [64.2, 341.0], [64.3, 341.0], [64.4, 342.0], [64.5, 342.0], [64.6, 343.0], [64.7, 343.0], [64.8, 344.0], [64.9, 345.0], [65.0, 345.0], [65.1, 346.0], [65.2, 347.0], [65.3, 347.0], [65.4, 347.0], [65.5, 348.0], [65.6, 349.0], [65.7, 349.0], [65.8, 350.0], [65.9, 350.0], [66.0, 351.0], [66.1, 351.0], [66.2, 351.0], [66.3, 352.0], [66.4, 352.0], [66.5, 353.0], [66.6, 354.0], [66.7, 354.0], [66.8, 355.0], [66.9, 355.0], [67.0, 355.0], [67.1, 356.0], [67.2, 357.0], [67.3, 357.0], [67.4, 358.0], [67.5, 358.0], [67.6, 359.0], [67.7, 359.0], [67.8, 360.0], [67.9, 360.0], [68.0, 361.0], [68.1, 361.0], [68.2, 361.0], [68.3, 362.0], [68.4, 362.0], [68.5, 363.0], [68.6, 363.0], [68.7, 363.0], [68.8, 364.0], [68.9, 364.0], [69.0, 365.0], [69.1, 366.0], [69.2, 366.0], [69.3, 367.0], [69.4, 367.0], [69.5, 368.0], [69.6, 368.0], [69.7, 369.0], [69.8, 370.0], [69.9, 370.0], [70.0, 371.0], [70.1, 371.0], [70.2, 371.0], [70.3, 373.0], [70.4, 373.0], [70.5, 374.0], [70.6, 375.0], [70.7, 375.0], [70.8, 376.0], [70.9, 377.0], [71.0, 377.0], [71.1, 377.0], [71.2, 378.0], [71.3, 378.0], [71.4, 379.0], [71.5, 380.0], [71.6, 380.0], [71.7, 381.0], [71.8, 382.0], [71.9, 382.0], [72.0, 382.0], [72.1, 383.0], [72.2, 383.0], [72.3, 384.0], [72.4, 385.0], [72.5, 385.0], [72.6, 386.0], [72.7, 387.0], [72.8, 387.0], [72.9, 389.0], [73.0, 390.0], [73.1, 391.0], [73.2, 392.0], [73.3, 393.0], [73.4, 394.0], [73.5, 394.0], [73.6, 395.0], [73.7, 396.0], [73.8, 396.0], [73.9, 397.0], [74.0, 398.0], [74.1, 399.0], [74.2, 399.0], [74.3, 401.0], [74.4, 402.0], [74.5, 403.0], [74.6, 404.0], [74.7, 405.0], [74.8, 406.0], [74.9, 407.0], [75.0, 408.0], [75.1, 409.0], [75.2, 409.0], [75.3, 411.0], [75.4, 414.0], [75.5, 414.0], [75.6, 415.0], [75.7, 416.0], [75.8, 417.0], [75.9, 417.0], [76.0, 418.0], [76.1, 419.0], [76.2, 420.0], [76.3, 421.0], [76.4, 422.0], [76.5, 424.0], [76.6, 425.0], [76.7, 426.0], [76.8, 427.0], [76.9, 428.0], [77.0, 429.0], [77.1, 430.0], [77.2, 432.0], [77.3, 433.0], [77.4, 434.0], [77.5, 435.0], [77.6, 436.0], [77.7, 437.0], [77.8, 438.0], [77.9, 438.0], [78.0, 439.0], [78.1, 441.0], [78.2, 441.0], [78.3, 444.0], [78.4, 446.0], [78.5, 447.0], [78.6, 449.0], [78.7, 449.0], [78.8, 450.0], [78.9, 451.0], [79.0, 452.0], [79.1, 453.0], [79.2, 454.0], [79.3, 455.0], [79.4, 457.0], [79.5, 457.0], [79.6, 459.0], [79.7, 459.0], [79.8, 459.0], [79.9, 460.0], [80.0, 461.0], [80.1, 461.0], [80.2, 463.0], [80.3, 464.0], [80.4, 464.0], [80.5, 465.0], [80.6, 465.0], [80.7, 466.0], [80.8, 467.0], [80.9, 468.0], [81.0, 469.0], [81.1, 470.0], [81.2, 471.0], [81.3, 472.0], [81.4, 472.0], [81.5, 473.0], [81.6, 474.0], [81.7, 475.0], [81.8, 476.0], [81.9, 477.0], [82.0, 478.0], [82.1, 478.0], [82.2, 480.0], [82.3, 481.0], [82.4, 483.0], [82.5, 485.0], [82.6, 485.0], [82.7, 487.0], [82.8, 489.0], [82.9, 490.0], [83.0, 490.0], [83.1, 491.0], [83.2, 492.0], [83.3, 493.0], [83.4, 494.0], [83.5, 495.0], [83.6, 495.0], [83.7, 496.0], [83.8, 497.0], [83.9, 498.0], [84.0, 498.0], [84.1, 499.0], [84.2, 500.0], [84.3, 500.0], [84.4, 502.0], [84.5, 503.0], [84.6, 505.0], [84.7, 505.0], [84.8, 507.0], [84.9, 508.0], [85.0, 509.0], [85.1, 510.0], [85.2, 511.0], [85.3, 513.0], [85.4, 514.0], [85.5, 514.0], [85.6, 515.0], [85.7, 517.0], [85.8, 517.0], [85.9, 519.0], [86.0, 520.0], [86.1, 521.0], [86.2, 522.0], [86.3, 522.0], [86.4, 523.0], [86.5, 524.0], [86.6, 525.0], [86.7, 526.0], [86.8, 527.0], [86.9, 528.0], [87.0, 531.0], [87.1, 531.0], [87.2, 533.0], [87.3, 535.0], [87.4, 536.0], [87.5, 538.0], [87.6, 540.0], [87.7, 542.0], [87.8, 543.0], [87.9, 545.0], [88.0, 547.0], [88.1, 548.0], [88.2, 549.0], [88.3, 550.0], [88.4, 552.0], [88.5, 555.0], [88.6, 558.0], [88.7, 561.0], [88.8, 563.0], [88.9, 565.0], [89.0, 566.0], [89.1, 569.0], [89.2, 570.0], [89.3, 571.0], [89.4, 572.0], [89.5, 577.0], [89.6, 581.0], [89.7, 583.0], [89.8, 585.0], [89.9, 586.0], [90.0, 588.0], [90.1, 591.0], [90.2, 593.0], [90.3, 595.0], [90.4, 597.0], [90.5, 599.0], [90.6, 602.0], [90.7, 604.0], [90.8, 607.0], [90.9, 609.0], [91.0, 611.0], [91.1, 614.0], [91.2, 617.0], [91.3, 620.0], [91.4, 622.0], [91.5, 625.0], [91.6, 627.0], [91.7, 629.0], [91.8, 630.0], [91.9, 631.0], [92.0, 634.0], [92.1, 636.0], [92.2, 639.0], [92.3, 639.0], [92.4, 642.0], [92.5, 646.0], [92.6, 649.0], [92.7, 652.0], [92.8, 656.0], [92.9, 658.0], [93.0, 660.0], [93.1, 664.0], [93.2, 671.0], [93.3, 676.0], [93.4, 680.0], [93.5, 683.0], [93.6, 685.0], [93.7, 688.0], [93.8, 693.0], [93.9, 694.0], [94.0, 696.0], [94.1, 700.0], [94.2, 706.0], [94.3, 710.0], [94.4, 713.0], [94.5, 719.0], [94.6, 721.0], [94.7, 727.0], [94.8, 735.0], [94.9, 738.0], [95.0, 743.0], [95.1, 751.0], [95.2, 755.0], [95.3, 765.0], [95.4, 768.0], [95.5, 775.0], [95.6, 781.0], [95.7, 786.0], [95.8, 790.0], [95.9, 797.0], [96.0, 809.0], [96.1, 823.0], [96.2, 832.0], [96.3, 838.0], [96.4, 847.0], [96.5, 861.0], [96.6, 877.0], [96.7, 889.0], [96.8, 901.0], [96.9, 907.0], [97.0, 917.0], [97.1, 924.0], [97.2, 931.0], [97.3, 949.0], [97.4, 960.0], [97.5, 965.0], [97.6, 985.0], [97.7, 1007.0], [97.8, 1018.0], [97.9, 1023.0], [98.0, 1035.0], [98.1, 1048.0], [98.2, 1067.0], [98.3, 1089.0], [98.4, 1109.0], [98.5, 1127.0], [98.6, 1154.0], [98.7, 1185.0], [98.8, 1217.0], [98.9, 1252.0], [99.0, 1285.0], [99.1, 1331.0], [99.2, 1388.0], [99.3, 1467.0], [99.4, 1530.0], [99.5, 1714.0], [99.6, 2081.0], [99.7, 2423.0], [99.8, 3250.0], [99.9, 3802.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 1148.0, "series": [{"data": [[0.0, 735.0], [600.0, 184.0], [700.0, 97.0], [800.0, 43.0], [900.0, 46.0], [1000.0, 37.0], [1100.0, 20.0], [1200.0, 13.0], [1300.0, 11.0], [1400.0, 4.0], [1500.0, 8.0], [100.0, 1148.0], [1600.0, 2.0], [1700.0, 3.0], [1900.0, 1.0], [2000.0, 2.0], [2100.0, 2.0], [2300.0, 2.0], [2400.0, 2.0], [2500.0, 1.0], [2800.0, 1.0], [200.0, 1068.0], [3200.0, 3.0], [3400.0, 1.0], [3500.0, 1.0], [3600.0, 1.0], [3800.0, 2.0], [4100.0, 1.0], [4200.0, 1.0], [4500.0, 1.0], [300.0, 901.0], [400.0, 515.0], [7400.0, 1.0], [500.0, 333.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 7400.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 4376.0, "series": [{"data": [[0.0, 4376.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 778.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 36.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 1.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.621848739495796, "minX": 1.60232874E12, "maxY": 10.0, "series": [{"data": [[1.60232886E12, 10.0], [1.6023288E12, 10.0], [1.60232892E12, 9.621848739495796], [1.60232874E12, 9.995133819951334]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60232892E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 269.0, "minX": 1.0, "maxY": 738.0, "series": [{"data": [[8.0, 660.0], [4.0, 430.0], [2.0, 330.0], [1.0, 738.0], [9.0, 455.0], [10.0, 322.5869061413675], [5.0, 269.0], [6.0, 317.0], [3.0, 366.0], [7.0, 603.5]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.990175303409723, 322.96127913696773]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 830.6166666666667, "minX": 1.60232874E12, "maxY": 1.3315642183333334E7, "series": [{"data": [[1.60232886E12, 1.2999614633333333E7], [1.6023288E12, 1.3315642183333334E7], [1.60232892E12, 998369.9166666666], [1.60232874E12, 8630006.266666668]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60232886E12, 13320.716666666667], [1.6023288E12, 12833.166666666666], [1.60232892E12, 830.6166666666667], [1.60232874E12, 8165.3]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60232892E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 306.4073694984642, "minX": 1.60232874E12, "maxY": 360.068126520681, "series": [{"data": [[1.60232886E12, 306.4073694984642], [1.6023288E12, 316.5395225464186], [1.60232892E12, 312.02521008403363], [1.60232874E12, 360.068126520681]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60232892E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 304.40122824974344, "minX": 1.60232874E12, "maxY": 357.20843471208445, "series": [{"data": [[1.60232886E12, 304.40122824974344], [1.6023288E12, 314.1952254641913], [1.60232892E12, 309.33613445378165], [1.60232874E12, 357.20843471208445]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60232892E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0074270557029177614, "minX": 1.60232874E12, "maxY": 0.08191403081914025, "series": [{"data": [[1.60232886E12, 0.010747185261003107], [1.6023288E12, 0.0074270557029177614], [1.60232892E12, 0.008403361344537815], [1.60232874E12, 0.08191403081914025]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60232892E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 3.0, "minX": 1.60232874E12, "maxY": 7415.0, "series": [{"data": [[1.60232886E12, 2194.0], [1.6023288E12, 4243.0], [1.60232892E12, 738.0], [1.60232874E12, 7415.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60232886E12, 12.594999533891677], [1.6023288E12, 15.964999550580977], [1.60232892E12, 17.719999742507934], [1.60232874E12, 17.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60232886E12, 13.0], [1.6023288E12, 17.0], [1.60232892E12, 18.692000102996825], [1.60232874E12, 17.216600117683413]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60232886E12, 13.0], [1.6023288E12, 16.90749977529049], [1.60232892E12, 18.259999871253967], [1.60232874E12, 17.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60232886E12, 3.0], [1.6023288E12, 4.0], [1.60232892E12, 17.0], [1.60232874E12, 5.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60232886E12, 257.5], [1.6023288E12, 275.5], [1.60232892E12, 291.0], [1.60232874E12, 266.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60232892E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 64.0, "minX": 6.0, "maxY": 787.0, "series": [{"data": [[32.0, 247.5], [33.0, 276.0], [35.0, 262.0], [34.0, 280.5], [36.0, 257.0], [37.0, 253.5], [38.0, 248.5], [39.0, 231.5], [40.0, 235.0], [41.0, 220.0], [42.0, 210.5], [43.0, 212.5], [45.0, 183.0], [44.0, 236.5], [46.0, 181.0], [52.0, 136.0], [53.0, 147.5], [54.0, 137.0], [59.0, 146.0], [61.0, 64.0], [6.0, 289.5], [9.0, 506.5], [10.0, 550.0], [11.0, 787.0], [12.0, 690.0], [14.0, 586.5], [15.0, 592.5], [16.0, 491.0], [17.0, 533.0], [18.0, 486.0], [19.0, 355.0], [20.0, 376.0], [21.0, 350.5], [22.0, 370.5], [23.0, 467.5], [24.0, 372.5], [25.0, 317.0], [26.0, 405.0], [27.0, 329.0], [28.0, 318.5], [29.0, 330.0], [30.0, 319.0], [31.0, 286.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[26.0, 223.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 61.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 64.0, "minX": 6.0, "maxY": 786.0, "series": [{"data": [[32.0, 246.5], [33.0, 274.0], [35.0, 260.0], [34.0, 277.5], [36.0, 253.5], [37.0, 249.0], [38.0, 246.0], [39.0, 230.0], [40.0, 230.5], [41.0, 217.0], [42.0, 209.0], [43.0, 212.5], [45.0, 181.0], [44.0, 235.0], [46.0, 178.0], [52.0, 134.5], [53.0, 147.0], [54.0, 135.0], [59.0, 145.0], [61.0, 64.0], [6.0, 289.5], [9.0, 506.0], [10.0, 547.5], [11.0, 786.0], [12.0, 688.5], [14.0, 584.0], [15.0, 586.5], [16.0, 490.0], [17.0, 529.0], [18.0, 479.0], [19.0, 355.0], [20.0, 375.5], [21.0, 347.5], [22.0, 368.5], [23.0, 465.0], [24.0, 368.5], [25.0, 313.0], [26.0, 400.0], [27.0, 324.0], [28.0, 318.5], [29.0, 327.0], [30.0, 317.5], [31.0, 282.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[26.0, 223.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 61.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1.8166666666666667, "minX": 1.60232874E12, "maxY": 32.56666666666667, "series": [{"data": [[1.60232886E12, 32.56666666666667], [1.6023288E12, 31.416666666666668], [1.60232892E12, 1.8166666666666667], [1.60232874E12, 20.716666666666665]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60232892E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60232874E12, "maxY": 32.56666666666667, "series": [{"data": [[1.60232886E12, 32.56666666666667], [1.6023288E12, 31.4], [1.60232892E12, 1.9833333333333334], [1.60232874E12, 20.55]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.6023288E12, 0.016666666666666666]], "isOverall": false, "label": "400", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60232892E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60232874E12, "maxY": 32.56666666666667, "series": [{"data": [[1.60232886E12, 32.56666666666667], [1.6023288E12, 31.4], [1.60232892E12, 1.9833333333333334], [1.60232874E12, 20.55]], "isOverall": false, "label": "HTTP Request-success", "isController": false}, {"data": [[1.6023288E12, 0.016666666666666666]], "isOverall": false, "label": "HTTP Request-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60232892E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60232874E12, "maxY": 32.56666666666667, "series": [{"data": [[1.60232886E12, 32.56666666666667], [1.6023288E12, 31.4], [1.60232892E12, 1.9833333333333334], [1.60232874E12, 20.55]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.6023288E12, 0.016666666666666666]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60232892E12, "title": "Total Transactions Per Second"}},
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

