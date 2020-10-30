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
        data: {"result": {"minY": 4.0, "minX": 0.0, "maxY": 5384.0, "series": [{"data": [[0.0, 4.0], [0.1, 6.0], [0.2, 7.0], [0.3, 8.0], [0.4, 10.0], [0.5, 13.0], [0.6, 15.0], [0.7, 15.0], [0.8, 15.0], [0.9, 16.0], [1.0, 17.0], [1.1, 17.0], [1.2, 17.0], [1.3, 18.0], [1.4, 18.0], [1.5, 19.0], [1.6, 19.0], [1.7, 20.0], [1.8, 20.0], [1.9, 21.0], [2.0, 21.0], [2.1, 22.0], [2.2, 22.0], [2.3, 23.0], [2.4, 23.0], [2.5, 24.0], [2.6, 24.0], [2.7, 24.0], [2.8, 25.0], [2.9, 25.0], [3.0, 26.0], [3.1, 26.0], [3.2, 27.0], [3.3, 27.0], [3.4, 28.0], [3.5, 29.0], [3.6, 29.0], [3.7, 30.0], [3.8, 31.0], [3.9, 31.0], [4.0, 31.0], [4.1, 32.0], [4.2, 32.0], [4.3, 33.0], [4.4, 33.0], [4.5, 34.0], [4.6, 34.0], [4.7, 35.0], [4.8, 36.0], [4.9, 36.0], [5.0, 37.0], [5.1, 37.0], [5.2, 38.0], [5.3, 39.0], [5.4, 40.0], [5.5, 40.0], [5.6, 41.0], [5.7, 41.0], [5.8, 42.0], [5.9, 42.0], [6.0, 43.0], [6.1, 43.0], [6.2, 44.0], [6.3, 45.0], [6.4, 46.0], [6.5, 47.0], [6.6, 47.0], [6.7, 48.0], [6.8, 49.0], [6.9, 50.0], [7.0, 51.0], [7.1, 51.0], [7.2, 51.0], [7.3, 51.0], [7.4, 52.0], [7.5, 52.0], [7.6, 53.0], [7.7, 53.0], [7.8, 53.0], [7.9, 54.0], [8.0, 55.0], [8.1, 55.0], [8.2, 56.0], [8.3, 56.0], [8.4, 56.0], [8.5, 57.0], [8.6, 57.0], [8.7, 57.0], [8.8, 58.0], [8.9, 59.0], [9.0, 59.0], [9.1, 60.0], [9.2, 60.0], [9.3, 62.0], [9.4, 63.0], [9.5, 64.0], [9.6, 65.0], [9.7, 66.0], [9.8, 67.0], [9.9, 68.0], [10.0, 68.0], [10.1, 69.0], [10.2, 70.0], [10.3, 71.0], [10.4, 73.0], [10.5, 73.0], [10.6, 75.0], [10.7, 76.0], [10.8, 76.0], [10.9, 77.0], [11.0, 78.0], [11.1, 80.0], [11.2, 81.0], [11.3, 82.0], [11.4, 83.0], [11.5, 85.0], [11.6, 85.0], [11.7, 86.0], [11.8, 87.0], [11.9, 89.0], [12.0, 89.0], [12.1, 91.0], [12.2, 91.0], [12.3, 92.0], [12.4, 92.0], [12.5, 92.0], [12.6, 93.0], [12.7, 94.0], [12.8, 95.0], [12.9, 95.0], [13.0, 96.0], [13.1, 97.0], [13.2, 97.0], [13.3, 98.0], [13.4, 99.0], [13.5, 99.0], [13.6, 100.0], [13.7, 101.0], [13.8, 101.0], [13.9, 102.0], [14.0, 103.0], [14.1, 103.0], [14.2, 104.0], [14.3, 104.0], [14.4, 105.0], [14.5, 106.0], [14.6, 107.0], [14.7, 109.0], [14.8, 110.0], [14.9, 111.0], [15.0, 112.0], [15.1, 113.0], [15.2, 113.0], [15.3, 113.0], [15.4, 114.0], [15.5, 115.0], [15.6, 115.0], [15.7, 116.0], [15.8, 117.0], [15.9, 118.0], [16.0, 119.0], [16.1, 119.0], [16.2, 120.0], [16.3, 120.0], [16.4, 121.0], [16.5, 121.0], [16.6, 121.0], [16.7, 122.0], [16.8, 122.0], [16.9, 123.0], [17.0, 123.0], [17.1, 124.0], [17.2, 125.0], [17.3, 125.0], [17.4, 126.0], [17.5, 127.0], [17.6, 127.0], [17.7, 127.0], [17.8, 128.0], [17.9, 129.0], [18.0, 130.0], [18.1, 130.0], [18.2, 131.0], [18.3, 131.0], [18.4, 132.0], [18.5, 133.0], [18.6, 134.0], [18.7, 134.0], [18.8, 135.0], [18.9, 136.0], [19.0, 137.0], [19.1, 137.0], [19.2, 138.0], [19.3, 139.0], [19.4, 139.0], [19.5, 140.0], [19.6, 141.0], [19.7, 142.0], [19.8, 142.0], [19.9, 143.0], [20.0, 143.0], [20.1, 144.0], [20.2, 145.0], [20.3, 146.0], [20.4, 147.0], [20.5, 147.0], [20.6, 148.0], [20.7, 149.0], [20.8, 150.0], [20.9, 150.0], [21.0, 151.0], [21.1, 151.0], [21.2, 152.0], [21.3, 153.0], [21.4, 153.0], [21.5, 154.0], [21.6, 155.0], [21.7, 155.0], [21.8, 156.0], [21.9, 157.0], [22.0, 157.0], [22.1, 158.0], [22.2, 159.0], [22.3, 159.0], [22.4, 160.0], [22.5, 161.0], [22.6, 161.0], [22.7, 162.0], [22.8, 163.0], [22.9, 163.0], [23.0, 164.0], [23.1, 165.0], [23.2, 166.0], [23.3, 166.0], [23.4, 168.0], [23.5, 168.0], [23.6, 170.0], [23.7, 170.0], [23.8, 171.0], [23.9, 171.0], [24.0, 172.0], [24.1, 172.0], [24.2, 173.0], [24.3, 173.0], [24.4, 174.0], [24.5, 175.0], [24.6, 175.0], [24.7, 176.0], [24.8, 176.0], [24.9, 176.0], [25.0, 177.0], [25.1, 177.0], [25.2, 178.0], [25.3, 178.0], [25.4, 178.0], [25.5, 179.0], [25.6, 179.0], [25.7, 180.0], [25.8, 181.0], [25.9, 181.0], [26.0, 182.0], [26.1, 183.0], [26.2, 183.0], [26.3, 184.0], [26.4, 184.0], [26.5, 184.0], [26.6, 185.0], [26.7, 185.0], [26.8, 185.0], [26.9, 186.0], [27.0, 186.0], [27.1, 186.0], [27.2, 187.0], [27.3, 187.0], [27.4, 187.0], [27.5, 188.0], [27.6, 188.0], [27.7, 189.0], [27.8, 190.0], [27.9, 190.0], [28.0, 191.0], [28.1, 191.0], [28.2, 191.0], [28.3, 191.0], [28.4, 192.0], [28.5, 192.0], [28.6, 192.0], [28.7, 193.0], [28.8, 193.0], [28.9, 193.0], [29.0, 194.0], [29.1, 194.0], [29.2, 194.0], [29.3, 194.0], [29.4, 195.0], [29.5, 195.0], [29.6, 195.0], [29.7, 195.0], [29.8, 196.0], [29.9, 196.0], [30.0, 196.0], [30.1, 196.0], [30.2, 197.0], [30.3, 197.0], [30.4, 197.0], [30.5, 198.0], [30.6, 198.0], [30.7, 198.0], [30.8, 198.0], [30.9, 198.0], [31.0, 199.0], [31.1, 199.0], [31.2, 199.0], [31.3, 200.0], [31.4, 200.0], [31.5, 200.0], [31.6, 200.0], [31.7, 200.0], [31.8, 200.0], [31.9, 201.0], [32.0, 201.0], [32.1, 202.0], [32.2, 202.0], [32.3, 202.0], [32.4, 202.0], [32.5, 203.0], [32.6, 203.0], [32.7, 203.0], [32.8, 204.0], [32.9, 204.0], [33.0, 205.0], [33.1, 205.0], [33.2, 205.0], [33.3, 206.0], [33.4, 206.0], [33.5, 206.0], [33.6, 207.0], [33.7, 207.0], [33.8, 208.0], [33.9, 208.0], [34.0, 209.0], [34.1, 209.0], [34.2, 209.0], [34.3, 209.0], [34.4, 210.0], [34.5, 210.0], [34.6, 210.0], [34.7, 211.0], [34.8, 211.0], [34.9, 211.0], [35.0, 211.0], [35.1, 212.0], [35.2, 212.0], [35.3, 212.0], [35.4, 213.0], [35.5, 213.0], [35.6, 213.0], [35.7, 213.0], [35.8, 214.0], [35.9, 215.0], [36.0, 215.0], [36.1, 215.0], [36.2, 216.0], [36.3, 217.0], [36.4, 217.0], [36.5, 218.0], [36.6, 218.0], [36.7, 219.0], [36.8, 219.0], [36.9, 219.0], [37.0, 220.0], [37.1, 220.0], [37.2, 220.0], [37.3, 221.0], [37.4, 221.0], [37.5, 222.0], [37.6, 222.0], [37.7, 222.0], [37.8, 223.0], [37.9, 223.0], [38.0, 224.0], [38.1, 224.0], [38.2, 224.0], [38.3, 225.0], [38.4, 225.0], [38.5, 226.0], [38.6, 226.0], [38.7, 226.0], [38.8, 227.0], [38.9, 228.0], [39.0, 228.0], [39.1, 229.0], [39.2, 229.0], [39.3, 230.0], [39.4, 231.0], [39.5, 231.0], [39.6, 232.0], [39.7, 232.0], [39.8, 233.0], [39.9, 233.0], [40.0, 234.0], [40.1, 235.0], [40.2, 235.0], [40.3, 235.0], [40.4, 236.0], [40.5, 236.0], [40.6, 237.0], [40.7, 237.0], [40.8, 237.0], [40.9, 238.0], [41.0, 238.0], [41.1, 239.0], [41.2, 239.0], [41.3, 240.0], [41.4, 241.0], [41.5, 241.0], [41.6, 242.0], [41.7, 242.0], [41.8, 243.0], [41.9, 243.0], [42.0, 244.0], [42.1, 245.0], [42.2, 245.0], [42.3, 246.0], [42.4, 246.0], [42.5, 247.0], [42.6, 247.0], [42.7, 248.0], [42.8, 249.0], [42.9, 249.0], [43.0, 250.0], [43.1, 251.0], [43.2, 252.0], [43.3, 252.0], [43.4, 253.0], [43.5, 253.0], [43.6, 254.0], [43.7, 254.0], [43.8, 255.0], [43.9, 255.0], [44.0, 255.0], [44.1, 256.0], [44.2, 256.0], [44.3, 257.0], [44.4, 258.0], [44.5, 259.0], [44.6, 259.0], [44.7, 260.0], [44.8, 260.0], [44.9, 261.0], [45.0, 262.0], [45.1, 262.0], [45.2, 263.0], [45.3, 264.0], [45.4, 265.0], [45.5, 265.0], [45.6, 266.0], [45.7, 266.0], [45.8, 267.0], [45.9, 267.0], [46.0, 268.0], [46.1, 268.0], [46.2, 269.0], [46.3, 270.0], [46.4, 270.0], [46.5, 271.0], [46.6, 272.0], [46.7, 273.0], [46.8, 273.0], [46.9, 274.0], [47.0, 275.0], [47.1, 275.0], [47.2, 276.0], [47.3, 277.0], [47.4, 277.0], [47.5, 278.0], [47.6, 278.0], [47.7, 279.0], [47.8, 280.0], [47.9, 280.0], [48.0, 281.0], [48.1, 282.0], [48.2, 282.0], [48.3, 282.0], [48.4, 282.0], [48.5, 283.0], [48.6, 284.0], [48.7, 284.0], [48.8, 285.0], [48.9, 286.0], [49.0, 286.0], [49.1, 286.0], [49.2, 287.0], [49.3, 287.0], [49.4, 288.0], [49.5, 288.0], [49.6, 289.0], [49.7, 289.0], [49.8, 289.0], [49.9, 290.0], [50.0, 290.0], [50.1, 290.0], [50.2, 291.0], [50.3, 291.0], [50.4, 291.0], [50.5, 291.0], [50.6, 292.0], [50.7, 292.0], [50.8, 292.0], [50.9, 293.0], [51.0, 293.0], [51.1, 293.0], [51.2, 294.0], [51.3, 294.0], [51.4, 295.0], [51.5, 295.0], [51.6, 296.0], [51.7, 296.0], [51.8, 297.0], [51.9, 297.0], [52.0, 297.0], [52.1, 298.0], [52.2, 299.0], [52.3, 300.0], [52.4, 300.0], [52.5, 300.0], [52.6, 300.0], [52.7, 301.0], [52.8, 301.0], [52.9, 302.0], [53.0, 302.0], [53.1, 302.0], [53.2, 303.0], [53.3, 304.0], [53.4, 305.0], [53.5, 305.0], [53.6, 306.0], [53.7, 306.0], [53.8, 307.0], [53.9, 308.0], [54.0, 308.0], [54.1, 309.0], [54.2, 310.0], [54.3, 311.0], [54.4, 312.0], [54.5, 312.0], [54.6, 313.0], [54.7, 313.0], [54.8, 313.0], [54.9, 314.0], [55.0, 314.0], [55.1, 315.0], [55.2, 315.0], [55.3, 316.0], [55.4, 317.0], [55.5, 317.0], [55.6, 317.0], [55.7, 318.0], [55.8, 318.0], [55.9, 319.0], [56.0, 320.0], [56.1, 321.0], [56.2, 322.0], [56.3, 322.0], [56.4, 322.0], [56.5, 323.0], [56.6, 323.0], [56.7, 323.0], [56.8, 324.0], [56.9, 325.0], [57.0, 325.0], [57.1, 326.0], [57.2, 326.0], [57.3, 327.0], [57.4, 327.0], [57.5, 327.0], [57.6, 328.0], [57.7, 328.0], [57.8, 328.0], [57.9, 329.0], [58.0, 330.0], [58.1, 330.0], [58.2, 331.0], [58.3, 332.0], [58.4, 332.0], [58.5, 333.0], [58.6, 333.0], [58.7, 334.0], [58.8, 335.0], [58.9, 336.0], [59.0, 336.0], [59.1, 337.0], [59.2, 338.0], [59.3, 338.0], [59.4, 339.0], [59.5, 340.0], [59.6, 341.0], [59.7, 341.0], [59.8, 342.0], [59.9, 342.0], [60.0, 342.0], [60.1, 343.0], [60.2, 344.0], [60.3, 345.0], [60.4, 345.0], [60.5, 345.0], [60.6, 346.0], [60.7, 347.0], [60.8, 348.0], [60.9, 349.0], [61.0, 349.0], [61.1, 350.0], [61.2, 351.0], [61.3, 351.0], [61.4, 352.0], [61.5, 353.0], [61.6, 354.0], [61.7, 354.0], [61.8, 355.0], [61.9, 355.0], [62.0, 356.0], [62.1, 356.0], [62.2, 357.0], [62.3, 358.0], [62.4, 359.0], [62.5, 360.0], [62.6, 360.0], [62.7, 361.0], [62.8, 362.0], [62.9, 363.0], [63.0, 363.0], [63.1, 364.0], [63.2, 364.0], [63.3, 365.0], [63.4, 366.0], [63.5, 367.0], [63.6, 368.0], [63.7, 368.0], [63.8, 369.0], [63.9, 369.0], [64.0, 370.0], [64.1, 370.0], [64.2, 371.0], [64.3, 371.0], [64.4, 372.0], [64.5, 372.0], [64.6, 373.0], [64.7, 374.0], [64.8, 374.0], [64.9, 374.0], [65.0, 375.0], [65.1, 375.0], [65.2, 377.0], [65.3, 377.0], [65.4, 377.0], [65.5, 378.0], [65.6, 379.0], [65.7, 380.0], [65.8, 380.0], [65.9, 381.0], [66.0, 381.0], [66.1, 382.0], [66.2, 382.0], [66.3, 382.0], [66.4, 383.0], [66.5, 383.0], [66.6, 384.0], [66.7, 385.0], [66.8, 386.0], [66.9, 387.0], [67.0, 387.0], [67.1, 388.0], [67.2, 388.0], [67.3, 389.0], [67.4, 389.0], [67.5, 389.0], [67.6, 390.0], [67.7, 391.0], [67.8, 392.0], [67.9, 392.0], [68.0, 393.0], [68.1, 394.0], [68.2, 395.0], [68.3, 396.0], [68.4, 396.0], [68.5, 397.0], [68.6, 397.0], [68.7, 398.0], [68.8, 399.0], [68.9, 399.0], [69.0, 400.0], [69.1, 401.0], [69.2, 402.0], [69.3, 402.0], [69.4, 403.0], [69.5, 405.0], [69.6, 407.0], [69.7, 408.0], [69.8, 409.0], [69.9, 410.0], [70.0, 411.0], [70.1, 413.0], [70.2, 413.0], [70.3, 414.0], [70.4, 414.0], [70.5, 415.0], [70.6, 416.0], [70.7, 417.0], [70.8, 417.0], [70.9, 418.0], [71.0, 418.0], [71.1, 419.0], [71.2, 420.0], [71.3, 421.0], [71.4, 422.0], [71.5, 422.0], [71.6, 422.0], [71.7, 423.0], [71.8, 424.0], [71.9, 425.0], [72.0, 425.0], [72.1, 426.0], [72.2, 428.0], [72.3, 428.0], [72.4, 429.0], [72.5, 430.0], [72.6, 430.0], [72.7, 431.0], [72.8, 432.0], [72.9, 433.0], [73.0, 433.0], [73.1, 435.0], [73.2, 436.0], [73.3, 438.0], [73.4, 438.0], [73.5, 439.0], [73.6, 440.0], [73.7, 442.0], [73.8, 443.0], [73.9, 445.0], [74.0, 445.0], [74.1, 447.0], [74.2, 448.0], [74.3, 448.0], [74.4, 450.0], [74.5, 451.0], [74.6, 453.0], [74.7, 454.0], [74.8, 456.0], [74.9, 457.0], [75.0, 457.0], [75.1, 458.0], [75.2, 459.0], [75.3, 460.0], [75.4, 461.0], [75.5, 462.0], [75.6, 463.0], [75.7, 463.0], [75.8, 464.0], [75.9, 465.0], [76.0, 466.0], [76.1, 466.0], [76.2, 467.0], [76.3, 468.0], [76.4, 469.0], [76.5, 470.0], [76.6, 471.0], [76.7, 472.0], [76.8, 475.0], [76.9, 476.0], [77.0, 477.0], [77.1, 478.0], [77.2, 479.0], [77.3, 481.0], [77.4, 482.0], [77.5, 482.0], [77.6, 483.0], [77.7, 485.0], [77.8, 485.0], [77.9, 486.0], [78.0, 488.0], [78.1, 490.0], [78.2, 491.0], [78.3, 491.0], [78.4, 492.0], [78.5, 495.0], [78.6, 496.0], [78.7, 497.0], [78.8, 498.0], [78.9, 498.0], [79.0, 500.0], [79.1, 501.0], [79.2, 502.0], [79.3, 504.0], [79.4, 505.0], [79.5, 507.0], [79.6, 507.0], [79.7, 509.0], [79.8, 509.0], [79.9, 510.0], [80.0, 512.0], [80.1, 514.0], [80.2, 515.0], [80.3, 516.0], [80.4, 517.0], [80.5, 518.0], [80.6, 520.0], [80.7, 521.0], [80.8, 522.0], [80.9, 523.0], [81.0, 524.0], [81.1, 526.0], [81.2, 526.0], [81.3, 528.0], [81.4, 528.0], [81.5, 529.0], [81.6, 530.0], [81.7, 532.0], [81.8, 532.0], [81.9, 533.0], [82.0, 534.0], [82.1, 535.0], [82.2, 536.0], [82.3, 536.0], [82.4, 538.0], [82.5, 540.0], [82.6, 542.0], [82.7, 542.0], [82.8, 544.0], [82.9, 547.0], [83.0, 549.0], [83.1, 551.0], [83.2, 552.0], [83.3, 555.0], [83.4, 557.0], [83.5, 559.0], [83.6, 560.0], [83.7, 562.0], [83.8, 566.0], [83.9, 567.0], [84.0, 569.0], [84.1, 570.0], [84.2, 573.0], [84.3, 575.0], [84.4, 576.0], [84.5, 576.0], [84.6, 578.0], [84.7, 579.0], [84.8, 581.0], [84.9, 582.0], [85.0, 584.0], [85.1, 585.0], [85.2, 587.0], [85.3, 589.0], [85.4, 590.0], [85.5, 591.0], [85.6, 592.0], [85.7, 594.0], [85.8, 595.0], [85.9, 597.0], [86.0, 598.0], [86.1, 601.0], [86.2, 602.0], [86.3, 603.0], [86.4, 606.0], [86.5, 608.0], [86.6, 609.0], [86.7, 610.0], [86.8, 611.0], [86.9, 612.0], [87.0, 615.0], [87.1, 615.0], [87.2, 616.0], [87.3, 617.0], [87.4, 619.0], [87.5, 620.0], [87.6, 624.0], [87.7, 625.0], [87.8, 627.0], [87.9, 630.0], [88.0, 632.0], [88.1, 634.0], [88.2, 636.0], [88.3, 638.0], [88.4, 642.0], [88.5, 645.0], [88.6, 647.0], [88.7, 647.0], [88.8, 649.0], [88.9, 654.0], [89.0, 657.0], [89.1, 658.0], [89.2, 660.0], [89.3, 662.0], [89.4, 664.0], [89.5, 666.0], [89.6, 669.0], [89.7, 672.0], [89.8, 675.0], [89.9, 678.0], [90.0, 681.0], [90.1, 684.0], [90.2, 685.0], [90.3, 686.0], [90.4, 689.0], [90.5, 692.0], [90.6, 698.0], [90.7, 701.0], [90.8, 702.0], [90.9, 704.0], [91.0, 707.0], [91.1, 712.0], [91.2, 715.0], [91.3, 717.0], [91.4, 719.0], [91.5, 723.0], [91.6, 727.0], [91.7, 730.0], [91.8, 734.0], [91.9, 738.0], [92.0, 741.0], [92.1, 743.0], [92.2, 750.0], [92.3, 752.0], [92.4, 754.0], [92.5, 757.0], [92.6, 761.0], [92.7, 763.0], [92.8, 765.0], [92.9, 770.0], [93.0, 775.0], [93.1, 778.0], [93.2, 782.0], [93.3, 784.0], [93.4, 788.0], [93.5, 791.0], [93.6, 793.0], [93.7, 799.0], [93.8, 803.0], [93.9, 806.0], [94.0, 809.0], [94.1, 814.0], [94.2, 817.0], [94.3, 824.0], [94.4, 827.0], [94.5, 833.0], [94.6, 835.0], [94.7, 838.0], [94.8, 841.0], [94.9, 845.0], [95.0, 848.0], [95.1, 852.0], [95.2, 862.0], [95.3, 871.0], [95.4, 875.0], [95.5, 881.0], [95.6, 892.0], [95.7, 897.0], [95.8, 899.0], [95.9, 906.0], [96.0, 912.0], [96.1, 917.0], [96.2, 924.0], [96.3, 931.0], [96.4, 939.0], [96.5, 946.0], [96.6, 949.0], [96.7, 958.0], [96.8, 978.0], [96.9, 989.0], [97.0, 1006.0], [97.1, 1012.0], [97.2, 1020.0], [97.3, 1031.0], [97.4, 1038.0], [97.5, 1049.0], [97.6, 1064.0], [97.7, 1076.0], [97.8, 1087.0], [97.9, 1104.0], [98.0, 1137.0], [98.1, 1157.0], [98.2, 1185.0], [98.3, 1202.0], [98.4, 1218.0], [98.5, 1263.0], [98.6, 1317.0], [98.7, 1362.0], [98.8, 1399.0], [98.9, 1438.0], [99.0, 1491.0], [99.1, 1569.0], [99.2, 1668.0], [99.3, 1765.0], [99.4, 1929.0], [99.5, 2270.0], [99.6, 2753.0], [99.7, 3216.0], [99.8, 3501.0], [99.9, 4455.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 1090.0, "series": [{"data": [[0.0, 702.0], [600.0, 240.0], [700.0, 161.0], [800.0, 107.0], [900.0, 59.0], [1000.0, 48.0], [1100.0, 20.0], [1200.0, 15.0], [1300.0, 13.0], [1400.0, 11.0], [1500.0, 6.0], [100.0, 921.0], [1600.0, 4.0], [1700.0, 5.0], [1800.0, 2.0], [1900.0, 7.0], [2100.0, 1.0], [2200.0, 2.0], [2400.0, 1.0], [2500.0, 1.0], [2800.0, 3.0], [2700.0, 2.0], [3000.0, 1.0], [200.0, 1090.0], [3200.0, 3.0], [3300.0, 2.0], [3500.0, 1.0], [3800.0, 1.0], [4000.0, 1.0], [4100.0, 1.0], [4300.0, 1.0], [4400.0, 1.0], [4500.0, 2.0], [300.0, 864.0], [4800.0, 1.0], [4700.0, 1.0], [5300.0, 1.0], [400.0, 520.0], [500.0, 368.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 5300.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 51.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 4102.0, "series": [{"data": [[0.0, 4102.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1037.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 51.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.950495049504953, "minX": 1.60405536E12, "maxY": 10.0, "series": [{"data": [[1.60405542E12, 10.0], [1.60405536E12, 9.99885974914481], [1.60405554E12, 9.950495049504953], [1.60405548E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60405554E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 338.0, "minX": 1.0, "maxY": 672.0, "series": [{"data": [[8.0, 672.0], [4.0, 649.0], [2.0, 362.0], [1.0, 459.0], [9.0, 522.0], [10.0, 358.488416988417], [5.0, 501.0], [6.0, 463.0], [3.0, 338.0], [7.0, 639.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.991136801541433, 358.7855491329482]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 5829.6, "minX": 1.60405536E12, "maxY": 1.2453792866666667E7, "series": [{"data": [[1.60405542E12, 1.16385225E7], [1.60405536E12, 5721073.2], [1.60405554E12, 6131209.016666667], [1.60405548E12, 1.2453792866666667E7]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60405542E12, 10996.566666666668], [1.60405536E12, 5829.6], [1.60405554E12, 6306.916666666667], [1.60405548E12, 12010.683333333332]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60405554E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 332.83621169916427, "minX": 1.60405536E12, "maxY": 411.50285062713755, "series": [{"data": [[1.60405542E12, 371.562461155997], [1.60405536E12, 411.50285062713755], [1.60405554E12, 336.5500550055002], [1.60405548E12, 332.83621169916427]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60405554E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 330.5949860724229, "minX": 1.60405536E12, "maxY": 408.5324971493723, "series": [{"data": [[1.60405542E12, 368.7371037911746], [1.60405536E12, 408.5324971493723], [1.60405554E12, 334.37513751375127], [1.60405548E12, 330.5949860724229]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60405554E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.009470752089136511, "minX": 1.60405536E12, "maxY": 0.15051311288483477, "series": [{"data": [[1.60405542E12, 0.01056556867619641], [1.60405536E12, 0.15051311288483477], [1.60405554E12, 0.009900990099009906], [1.60405548E12, 0.009470752089136511]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60405554E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 4.0, "minX": 1.60405536E12, "maxY": 5384.0, "series": [{"data": [[1.60405542E12, 5384.0], [1.60405536E12, 4562.0], [1.60405554E12, 1969.0], [1.60405548E12, 4740.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60405542E12, 16.0], [1.60405536E12, 21.901999790668487], [1.60405554E12, 13.0], [1.60405548E12, 16.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60405542E12, 16.939000153541564], [1.60405536E12, 22.692200083732605], [1.60405554E12, 13.009000086784363], [1.60405548E12, 16.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60405542E12, 16.294999808073044], [1.60405536E12, 22.340999895334242], [1.60405554E12, 13.0], [1.60405548E12, 16.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60405542E12, 4.0], [1.60405536E12, 7.0], [1.60405554E12, 4.0], [1.60405548E12, 7.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60405542E12, 307.0], [1.60405536E12, 290.0], [1.60405554E12, 291.0], [1.60405548E12, 269.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60405554E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 82.0, "minX": 3.0, "maxY": 883.5, "series": [{"data": [[32.0, 254.0], [33.0, 269.0], [34.0, 273.5], [35.0, 255.0], [36.0, 272.0], [37.0, 278.5], [39.0, 222.5], [38.0, 259.5], [41.0, 212.0], [43.0, 204.5], [42.0, 263.0], [44.0, 186.5], [46.0, 182.0], [47.0, 161.0], [3.0, 730.0], [48.0, 214.0], [49.0, 165.0], [51.0, 153.0], [52.0, 179.5], [68.0, 83.5], [7.0, 748.5], [8.0, 778.0], [9.0, 883.5], [10.0, 82.0], [11.0, 581.5], [12.0, 637.5], [13.0, 751.0], [14.0, 653.5], [15.0, 572.5], [16.0, 516.5], [17.0, 546.0], [18.0, 337.5], [19.0, 508.0], [20.0, 420.5], [21.0, 381.0], [22.0, 325.5], [23.0, 342.0], [24.0, 335.5], [25.0, 328.5], [26.0, 336.0], [27.0, 328.0], [28.0, 300.0], [29.0, 308.0], [30.0, 291.5], [31.0, 288.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 68.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 81.5, "minX": 3.0, "maxY": 881.0, "series": [{"data": [[32.0, 252.0], [33.0, 266.0], [34.0, 271.5], [35.0, 254.0], [36.0, 265.5], [37.0, 277.5], [39.0, 221.0], [38.0, 258.0], [41.0, 209.0], [43.0, 200.5], [42.0, 260.5], [44.0, 184.0], [46.0, 177.5], [47.0, 160.0], [3.0, 726.0], [48.0, 210.0], [49.0, 165.0], [51.0, 152.0], [52.0, 177.0], [68.0, 83.0], [7.0, 747.5], [8.0, 776.0], [9.0, 881.0], [10.0, 81.5], [11.0, 580.0], [12.0, 635.5], [13.0, 750.0], [14.0, 651.5], [15.0, 571.5], [16.0, 515.0], [17.0, 544.5], [18.0, 335.5], [19.0, 497.0], [20.0, 419.0], [21.0, 375.0], [22.0, 321.5], [23.0, 340.0], [24.0, 331.5], [25.0, 324.5], [26.0, 331.5], [27.0, 325.0], [28.0, 298.0], [29.0, 305.0], [30.0, 290.5], [31.0, 286.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 68.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 14.783333333333333, "minX": 1.60405536E12, "maxY": 29.916666666666668, "series": [{"data": [[1.60405542E12, 26.816666666666666], [1.60405536E12, 14.783333333333333], [1.60405554E12, 14.983333333333333], [1.60405548E12, 29.916666666666668]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60405554E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 14.616666666666667, "minX": 1.60405536E12, "maxY": 29.916666666666668, "series": [{"data": [[1.60405542E12, 26.816666666666666], [1.60405536E12, 14.616666666666667], [1.60405554E12, 15.15], [1.60405548E12, 29.916666666666668]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60405554E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 14.616666666666667, "minX": 1.60405536E12, "maxY": 29.916666666666668, "series": [{"data": [[1.60405542E12, 26.816666666666666], [1.60405536E12, 14.616666666666667], [1.60405554E12, 15.15], [1.60405548E12, 29.916666666666668]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60405554E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 14.616666666666667, "minX": 1.60405536E12, "maxY": 29.916666666666668, "series": [{"data": [[1.60405542E12, 26.816666666666666], [1.60405536E12, 14.616666666666667], [1.60405554E12, 15.15], [1.60405548E12, 29.916666666666668]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60405554E12, "title": "Total Transactions Per Second"}},
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

