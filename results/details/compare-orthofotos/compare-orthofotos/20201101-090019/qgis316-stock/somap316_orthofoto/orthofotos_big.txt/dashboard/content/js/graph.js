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
        data: {"result": {"minY": 5.0, "minX": 0.0, "maxY": 7425.0, "series": [{"data": [[0.0, 5.0], [0.1, 8.0], [0.2, 10.0], [0.3, 12.0], [0.4, 13.0], [0.5, 14.0], [0.6, 14.0], [0.7, 15.0], [0.8, 16.0], [0.9, 16.0], [1.0, 17.0], [1.1, 18.0], [1.2, 18.0], [1.3, 18.0], [1.4, 19.0], [1.5, 20.0], [1.6, 21.0], [1.7, 22.0], [1.8, 22.0], [1.9, 23.0], [2.0, 23.0], [2.1, 24.0], [2.2, 25.0], [2.3, 25.0], [2.4, 26.0], [2.5, 26.0], [2.6, 27.0], [2.7, 27.0], [2.8, 27.0], [2.9, 28.0], [3.0, 29.0], [3.1, 30.0], [3.2, 31.0], [3.3, 31.0], [3.4, 31.0], [3.5, 32.0], [3.6, 32.0], [3.7, 33.0], [3.8, 34.0], [3.9, 34.0], [4.0, 35.0], [4.1, 35.0], [4.2, 36.0], [4.3, 37.0], [4.4, 38.0], [4.5, 38.0], [4.6, 39.0], [4.7, 39.0], [4.8, 40.0], [4.9, 40.0], [5.0, 40.0], [5.1, 41.0], [5.2, 41.0], [5.3, 41.0], [5.4, 42.0], [5.5, 43.0], [5.6, 43.0], [5.7, 44.0], [5.8, 44.0], [5.9, 45.0], [6.0, 45.0], [6.1, 46.0], [6.2, 47.0], [6.3, 48.0], [6.4, 49.0], [6.5, 50.0], [6.6, 50.0], [6.7, 50.0], [6.8, 51.0], [6.9, 52.0], [7.0, 52.0], [7.1, 53.0], [7.2, 54.0], [7.3, 55.0], [7.4, 55.0], [7.5, 56.0], [7.6, 57.0], [7.7, 57.0], [7.8, 58.0], [7.9, 60.0], [8.0, 60.0], [8.1, 60.0], [8.2, 61.0], [8.3, 62.0], [8.4, 63.0], [8.5, 64.0], [8.6, 64.0], [8.7, 65.0], [8.8, 65.0], [8.9, 66.0], [9.0, 67.0], [9.1, 67.0], [9.2, 68.0], [9.3, 69.0], [9.4, 70.0], [9.5, 71.0], [9.6, 72.0], [9.7, 73.0], [9.8, 75.0], [9.9, 76.0], [10.0, 77.0], [10.1, 79.0], [10.2, 80.0], [10.3, 81.0], [10.4, 81.0], [10.5, 82.0], [10.6, 83.0], [10.7, 84.0], [10.8, 85.0], [10.9, 86.0], [11.0, 87.0], [11.1, 88.0], [11.2, 89.0], [11.3, 90.0], [11.4, 91.0], [11.5, 91.0], [11.6, 92.0], [11.7, 93.0], [11.8, 93.0], [11.9, 94.0], [12.0, 94.0], [12.1, 95.0], [12.2, 96.0], [12.3, 97.0], [12.4, 97.0], [12.5, 97.0], [12.6, 98.0], [12.7, 99.0], [12.8, 100.0], [12.9, 101.0], [13.0, 101.0], [13.1, 102.0], [13.2, 103.0], [13.3, 104.0], [13.4, 105.0], [13.5, 105.0], [13.6, 106.0], [13.7, 107.0], [13.8, 108.0], [13.9, 109.0], [14.0, 110.0], [14.1, 111.0], [14.2, 112.0], [14.3, 113.0], [14.4, 114.0], [14.5, 115.0], [14.6, 116.0], [14.7, 117.0], [14.8, 117.0], [14.9, 118.0], [15.0, 118.0], [15.1, 119.0], [15.2, 119.0], [15.3, 120.0], [15.4, 120.0], [15.5, 121.0], [15.6, 121.0], [15.7, 122.0], [15.8, 122.0], [15.9, 123.0], [16.0, 124.0], [16.1, 124.0], [16.2, 125.0], [16.3, 125.0], [16.4, 126.0], [16.5, 127.0], [16.6, 128.0], [16.7, 129.0], [16.8, 129.0], [16.9, 130.0], [17.0, 130.0], [17.1, 130.0], [17.2, 131.0], [17.3, 131.0], [17.4, 132.0], [17.5, 133.0], [17.6, 133.0], [17.7, 134.0], [17.8, 135.0], [17.9, 135.0], [18.0, 136.0], [18.1, 137.0], [18.2, 138.0], [18.3, 138.0], [18.4, 139.0], [18.5, 140.0], [18.6, 140.0], [18.7, 140.0], [18.8, 141.0], [18.9, 141.0], [19.0, 141.0], [19.1, 142.0], [19.2, 143.0], [19.3, 143.0], [19.4, 144.0], [19.5, 144.0], [19.6, 145.0], [19.7, 145.0], [19.8, 146.0], [19.9, 147.0], [20.0, 148.0], [20.1, 148.0], [20.2, 149.0], [20.3, 150.0], [20.4, 152.0], [20.5, 153.0], [20.6, 154.0], [20.7, 155.0], [20.8, 156.0], [20.9, 156.0], [21.0, 157.0], [21.1, 158.0], [21.2, 158.0], [21.3, 159.0], [21.4, 160.0], [21.5, 160.0], [21.6, 161.0], [21.7, 161.0], [21.8, 162.0], [21.9, 162.0], [22.0, 163.0], [22.1, 164.0], [22.2, 165.0], [22.3, 165.0], [22.4, 166.0], [22.5, 167.0], [22.6, 167.0], [22.7, 168.0], [22.8, 169.0], [22.9, 169.0], [23.0, 170.0], [23.1, 170.0], [23.2, 171.0], [23.3, 171.0], [23.4, 171.0], [23.5, 172.0], [23.6, 172.0], [23.7, 173.0], [23.8, 173.0], [23.9, 173.0], [24.0, 174.0], [24.1, 175.0], [24.2, 175.0], [24.3, 176.0], [24.4, 177.0], [24.5, 177.0], [24.6, 178.0], [24.7, 179.0], [24.8, 179.0], [24.9, 180.0], [25.0, 180.0], [25.1, 180.0], [25.2, 181.0], [25.3, 181.0], [25.4, 182.0], [25.5, 182.0], [25.6, 183.0], [25.7, 183.0], [25.8, 183.0], [25.9, 185.0], [26.0, 185.0], [26.1, 185.0], [26.2, 185.0], [26.3, 186.0], [26.4, 186.0], [26.5, 186.0], [26.6, 187.0], [26.7, 187.0], [26.8, 188.0], [26.9, 188.0], [27.0, 188.0], [27.1, 188.0], [27.2, 189.0], [27.3, 189.0], [27.4, 189.0], [27.5, 189.0], [27.6, 190.0], [27.7, 190.0], [27.8, 190.0], [27.9, 191.0], [28.0, 191.0], [28.1, 191.0], [28.2, 191.0], [28.3, 191.0], [28.4, 192.0], [28.5, 192.0], [28.6, 192.0], [28.7, 193.0], [28.8, 193.0], [28.9, 193.0], [29.0, 193.0], [29.1, 194.0], [29.2, 194.0], [29.3, 195.0], [29.4, 195.0], [29.5, 195.0], [29.6, 195.0], [29.7, 196.0], [29.8, 196.0], [29.9, 196.0], [30.0, 197.0], [30.1, 197.0], [30.2, 197.0], [30.3, 197.0], [30.4, 197.0], [30.5, 198.0], [30.6, 198.0], [30.7, 198.0], [30.8, 199.0], [30.9, 199.0], [31.0, 199.0], [31.1, 200.0], [31.2, 200.0], [31.3, 200.0], [31.4, 200.0], [31.5, 201.0], [31.6, 201.0], [31.7, 201.0], [31.8, 201.0], [31.9, 202.0], [32.0, 202.0], [32.1, 202.0], [32.2, 203.0], [32.3, 203.0], [32.4, 203.0], [32.5, 203.0], [32.6, 204.0], [32.7, 204.0], [32.8, 204.0], [32.9, 205.0], [33.0, 205.0], [33.1, 205.0], [33.2, 206.0], [33.3, 206.0], [33.4, 206.0], [33.5, 207.0], [33.6, 207.0], [33.7, 207.0], [33.8, 207.0], [33.9, 208.0], [34.0, 208.0], [34.1, 209.0], [34.2, 209.0], [34.3, 210.0], [34.4, 210.0], [34.5, 210.0], [34.6, 210.0], [34.7, 211.0], [34.8, 211.0], [34.9, 212.0], [35.0, 212.0], [35.1, 213.0], [35.2, 213.0], [35.3, 213.0], [35.4, 213.0], [35.5, 214.0], [35.6, 214.0], [35.7, 215.0], [35.8, 215.0], [35.9, 215.0], [36.0, 216.0], [36.1, 216.0], [36.2, 217.0], [36.3, 217.0], [36.4, 218.0], [36.5, 218.0], [36.6, 218.0], [36.7, 219.0], [36.8, 219.0], [36.9, 220.0], [37.0, 220.0], [37.1, 221.0], [37.2, 221.0], [37.3, 222.0], [37.4, 222.0], [37.5, 222.0], [37.6, 222.0], [37.7, 223.0], [37.8, 224.0], [37.9, 224.0], [38.0, 224.0], [38.1, 225.0], [38.2, 225.0], [38.3, 226.0], [38.4, 226.0], [38.5, 227.0], [38.6, 227.0], [38.7, 228.0], [38.8, 228.0], [38.9, 228.0], [39.0, 229.0], [39.1, 229.0], [39.2, 230.0], [39.3, 230.0], [39.4, 231.0], [39.5, 231.0], [39.6, 232.0], [39.7, 232.0], [39.8, 233.0], [39.9, 233.0], [40.0, 233.0], [40.1, 234.0], [40.2, 234.0], [40.3, 235.0], [40.4, 235.0], [40.5, 236.0], [40.6, 236.0], [40.7, 236.0], [40.8, 236.0], [40.9, 237.0], [41.0, 237.0], [41.1, 238.0], [41.2, 238.0], [41.3, 239.0], [41.4, 240.0], [41.5, 240.0], [41.6, 241.0], [41.7, 241.0], [41.8, 241.0], [41.9, 243.0], [42.0, 244.0], [42.1, 244.0], [42.2, 245.0], [42.3, 245.0], [42.4, 246.0], [42.5, 246.0], [42.6, 247.0], [42.7, 247.0], [42.8, 247.0], [42.9, 248.0], [43.0, 249.0], [43.1, 249.0], [43.2, 250.0], [43.3, 251.0], [43.4, 251.0], [43.5, 252.0], [43.6, 253.0], [43.7, 253.0], [43.8, 254.0], [43.9, 255.0], [44.0, 255.0], [44.1, 256.0], [44.2, 256.0], [44.3, 258.0], [44.4, 258.0], [44.5, 259.0], [44.6, 259.0], [44.7, 259.0], [44.8, 260.0], [44.9, 261.0], [45.0, 261.0], [45.1, 262.0], [45.2, 262.0], [45.3, 263.0], [45.4, 263.0], [45.5, 264.0], [45.6, 265.0], [45.7, 266.0], [45.8, 266.0], [45.9, 267.0], [46.0, 268.0], [46.1, 268.0], [46.2, 269.0], [46.3, 269.0], [46.4, 270.0], [46.5, 271.0], [46.6, 271.0], [46.7, 271.0], [46.8, 271.0], [46.9, 272.0], [47.0, 273.0], [47.1, 273.0], [47.2, 274.0], [47.3, 275.0], [47.4, 275.0], [47.5, 276.0], [47.6, 276.0], [47.7, 276.0], [47.8, 277.0], [47.9, 278.0], [48.0, 278.0], [48.1, 278.0], [48.2, 279.0], [48.3, 279.0], [48.4, 279.0], [48.5, 280.0], [48.6, 281.0], [48.7, 281.0], [48.8, 282.0], [48.9, 282.0], [49.0, 283.0], [49.1, 283.0], [49.2, 284.0], [49.3, 284.0], [49.4, 285.0], [49.5, 285.0], [49.6, 286.0], [49.7, 286.0], [49.8, 286.0], [49.9, 287.0], [50.0, 287.0], [50.1, 288.0], [50.2, 288.0], [50.3, 289.0], [50.4, 289.0], [50.5, 289.0], [50.6, 290.0], [50.7, 290.0], [50.8, 291.0], [50.9, 291.0], [51.0, 292.0], [51.1, 292.0], [51.2, 293.0], [51.3, 293.0], [51.4, 294.0], [51.5, 294.0], [51.6, 295.0], [51.7, 296.0], [51.8, 296.0], [51.9, 297.0], [52.0, 297.0], [52.1, 298.0], [52.2, 298.0], [52.3, 299.0], [52.4, 299.0], [52.5, 300.0], [52.6, 300.0], [52.7, 301.0], [52.8, 301.0], [52.9, 301.0], [53.0, 302.0], [53.1, 302.0], [53.2, 303.0], [53.3, 304.0], [53.4, 305.0], [53.5, 305.0], [53.6, 306.0], [53.7, 307.0], [53.8, 308.0], [53.9, 308.0], [54.0, 309.0], [54.1, 309.0], [54.2, 310.0], [54.3, 310.0], [54.4, 311.0], [54.5, 311.0], [54.6, 312.0], [54.7, 313.0], [54.8, 314.0], [54.9, 314.0], [55.0, 315.0], [55.1, 316.0], [55.2, 316.0], [55.3, 316.0], [55.4, 317.0], [55.5, 318.0], [55.6, 318.0], [55.7, 319.0], [55.8, 319.0], [55.9, 319.0], [56.0, 320.0], [56.1, 320.0], [56.2, 322.0], [56.3, 322.0], [56.4, 323.0], [56.5, 323.0], [56.6, 324.0], [56.7, 325.0], [56.8, 326.0], [56.9, 326.0], [57.0, 327.0], [57.1, 327.0], [57.2, 328.0], [57.3, 328.0], [57.4, 329.0], [57.5, 329.0], [57.6, 329.0], [57.7, 331.0], [57.8, 331.0], [57.9, 332.0], [58.0, 332.0], [58.1, 333.0], [58.2, 334.0], [58.3, 334.0], [58.4, 334.0], [58.5, 335.0], [58.6, 336.0], [58.7, 336.0], [58.8, 337.0], [58.9, 337.0], [59.0, 338.0], [59.1, 339.0], [59.2, 339.0], [59.3, 340.0], [59.4, 340.0], [59.5, 341.0], [59.6, 342.0], [59.7, 343.0], [59.8, 343.0], [59.9, 344.0], [60.0, 344.0], [60.1, 345.0], [60.2, 345.0], [60.3, 346.0], [60.4, 347.0], [60.5, 347.0], [60.6, 348.0], [60.7, 349.0], [60.8, 349.0], [60.9, 350.0], [61.0, 350.0], [61.1, 351.0], [61.2, 352.0], [61.3, 352.0], [61.4, 352.0], [61.5, 353.0], [61.6, 354.0], [61.7, 355.0], [61.8, 355.0], [61.9, 355.0], [62.0, 356.0], [62.1, 357.0], [62.2, 357.0], [62.3, 358.0], [62.4, 358.0], [62.5, 359.0], [62.6, 360.0], [62.7, 361.0], [62.8, 361.0], [62.9, 361.0], [63.0, 362.0], [63.1, 363.0], [63.2, 364.0], [63.3, 365.0], [63.4, 366.0], [63.5, 367.0], [63.6, 368.0], [63.7, 369.0], [63.8, 369.0], [63.9, 370.0], [64.0, 370.0], [64.1, 370.0], [64.2, 371.0], [64.3, 372.0], [64.4, 372.0], [64.5, 373.0], [64.6, 374.0], [64.7, 374.0], [64.8, 375.0], [64.9, 376.0], [65.0, 377.0], [65.1, 377.0], [65.2, 377.0], [65.3, 378.0], [65.4, 379.0], [65.5, 379.0], [65.6, 379.0], [65.7, 380.0], [65.8, 381.0], [65.9, 382.0], [66.0, 382.0], [66.1, 383.0], [66.2, 383.0], [66.3, 384.0], [66.4, 385.0], [66.5, 386.0], [66.6, 386.0], [66.7, 387.0], [66.8, 387.0], [66.9, 388.0], [67.0, 389.0], [67.1, 389.0], [67.2, 390.0], [67.3, 390.0], [67.4, 391.0], [67.5, 392.0], [67.6, 392.0], [67.7, 393.0], [67.8, 394.0], [67.9, 394.0], [68.0, 395.0], [68.1, 395.0], [68.2, 396.0], [68.3, 397.0], [68.4, 398.0], [68.5, 398.0], [68.6, 399.0], [68.7, 399.0], [68.8, 400.0], [68.9, 401.0], [69.0, 402.0], [69.1, 402.0], [69.2, 403.0], [69.3, 403.0], [69.4, 404.0], [69.5, 406.0], [69.6, 406.0], [69.7, 407.0], [69.8, 407.0], [69.9, 407.0], [70.0, 408.0], [70.1, 409.0], [70.2, 409.0], [70.3, 410.0], [70.4, 410.0], [70.5, 411.0], [70.6, 412.0], [70.7, 413.0], [70.8, 415.0], [70.9, 415.0], [71.0, 417.0], [71.1, 417.0], [71.2, 418.0], [71.3, 418.0], [71.4, 420.0], [71.5, 421.0], [71.6, 421.0], [71.7, 422.0], [71.8, 423.0], [71.9, 424.0], [72.0, 425.0], [72.1, 426.0], [72.2, 426.0], [72.3, 427.0], [72.4, 427.0], [72.5, 428.0], [72.6, 429.0], [72.7, 430.0], [72.8, 430.0], [72.9, 432.0], [73.0, 433.0], [73.1, 435.0], [73.2, 435.0], [73.3, 436.0], [73.4, 438.0], [73.5, 439.0], [73.6, 439.0], [73.7, 440.0], [73.8, 441.0], [73.9, 442.0], [74.0, 443.0], [74.1, 443.0], [74.2, 444.0], [74.3, 445.0], [74.4, 446.0], [74.5, 447.0], [74.6, 448.0], [74.7, 451.0], [74.8, 452.0], [74.9, 453.0], [75.0, 454.0], [75.1, 454.0], [75.2, 455.0], [75.3, 457.0], [75.4, 458.0], [75.5, 459.0], [75.6, 460.0], [75.7, 461.0], [75.8, 462.0], [75.9, 463.0], [76.0, 463.0], [76.1, 465.0], [76.2, 465.0], [76.3, 466.0], [76.4, 467.0], [76.5, 468.0], [76.6, 468.0], [76.7, 469.0], [76.8, 469.0], [76.9, 471.0], [77.0, 471.0], [77.1, 472.0], [77.2, 473.0], [77.3, 474.0], [77.4, 475.0], [77.5, 476.0], [77.6, 477.0], [77.7, 477.0], [77.8, 479.0], [77.9, 479.0], [78.0, 480.0], [78.1, 481.0], [78.2, 482.0], [78.3, 482.0], [78.4, 483.0], [78.5, 485.0], [78.6, 485.0], [78.7, 486.0], [78.8, 487.0], [78.9, 487.0], [79.0, 488.0], [79.1, 490.0], [79.2, 490.0], [79.3, 491.0], [79.4, 493.0], [79.5, 494.0], [79.6, 495.0], [79.7, 497.0], [79.8, 498.0], [79.9, 499.0], [80.0, 500.0], [80.1, 500.0], [80.2, 501.0], [80.3, 502.0], [80.4, 503.0], [80.5, 503.0], [80.6, 505.0], [80.7, 505.0], [80.8, 506.0], [80.9, 507.0], [81.0, 509.0], [81.1, 509.0], [81.2, 510.0], [81.3, 511.0], [81.4, 512.0], [81.5, 513.0], [81.6, 514.0], [81.7, 516.0], [81.8, 517.0], [81.9, 519.0], [82.0, 520.0], [82.1, 521.0], [82.2, 522.0], [82.3, 523.0], [82.4, 524.0], [82.5, 525.0], [82.6, 526.0], [82.7, 526.0], [82.8, 528.0], [82.9, 529.0], [83.0, 531.0], [83.1, 532.0], [83.2, 532.0], [83.3, 533.0], [83.4, 535.0], [83.5, 536.0], [83.6, 538.0], [83.7, 540.0], [83.8, 541.0], [83.9, 543.0], [84.0, 544.0], [84.1, 546.0], [84.2, 547.0], [84.3, 549.0], [84.4, 550.0], [84.5, 551.0], [84.6, 552.0], [84.7, 553.0], [84.8, 554.0], [84.9, 555.0], [85.0, 557.0], [85.1, 559.0], [85.2, 561.0], [85.3, 562.0], [85.4, 564.0], [85.5, 565.0], [85.6, 567.0], [85.7, 569.0], [85.8, 570.0], [85.9, 571.0], [86.0, 571.0], [86.1, 573.0], [86.2, 574.0], [86.3, 576.0], [86.4, 578.0], [86.5, 580.0], [86.6, 581.0], [86.7, 582.0], [86.8, 585.0], [86.9, 587.0], [87.0, 589.0], [87.1, 591.0], [87.2, 594.0], [87.3, 594.0], [87.4, 597.0], [87.5, 598.0], [87.6, 599.0], [87.7, 601.0], [87.8, 603.0], [87.9, 605.0], [88.0, 607.0], [88.1, 608.0], [88.2, 609.0], [88.3, 611.0], [88.4, 612.0], [88.5, 615.0], [88.6, 615.0], [88.7, 617.0], [88.8, 620.0], [88.9, 621.0], [89.0, 623.0], [89.1, 625.0], [89.2, 626.0], [89.3, 630.0], [89.4, 632.0], [89.5, 635.0], [89.6, 637.0], [89.7, 639.0], [89.8, 640.0], [89.9, 643.0], [90.0, 646.0], [90.1, 649.0], [90.2, 651.0], [90.3, 652.0], [90.4, 655.0], [90.5, 657.0], [90.6, 658.0], [90.7, 660.0], [90.8, 663.0], [90.9, 665.0], [91.0, 668.0], [91.1, 672.0], [91.2, 675.0], [91.3, 678.0], [91.4, 681.0], [91.5, 682.0], [91.6, 688.0], [91.7, 691.0], [91.8, 693.0], [91.9, 695.0], [92.0, 697.0], [92.1, 700.0], [92.2, 706.0], [92.3, 710.0], [92.4, 713.0], [92.5, 718.0], [92.6, 722.0], [92.7, 725.0], [92.8, 730.0], [92.9, 734.0], [93.0, 739.0], [93.1, 742.0], [93.2, 750.0], [93.3, 753.0], [93.4, 758.0], [93.5, 762.0], [93.6, 767.0], [93.7, 774.0], [93.8, 777.0], [93.9, 778.0], [94.0, 781.0], [94.1, 784.0], [94.2, 789.0], [94.3, 792.0], [94.4, 797.0], [94.5, 804.0], [94.6, 807.0], [94.7, 810.0], [94.8, 814.0], [94.9, 819.0], [95.0, 824.0], [95.1, 832.0], [95.2, 834.0], [95.3, 839.0], [95.4, 846.0], [95.5, 847.0], [95.6, 852.0], [95.7, 857.0], [95.8, 863.0], [95.9, 868.0], [96.0, 876.0], [96.1, 883.0], [96.2, 885.0], [96.3, 892.0], [96.4, 904.0], [96.5, 911.0], [96.6, 928.0], [96.7, 943.0], [96.8, 947.0], [96.9, 962.0], [97.0, 974.0], [97.1, 987.0], [97.2, 1002.0], [97.3, 1012.0], [97.4, 1020.0], [97.5, 1032.0], [97.6, 1038.0], [97.7, 1054.0], [97.8, 1068.0], [97.9, 1079.0], [98.0, 1088.0], [98.1, 1112.0], [98.2, 1125.0], [98.3, 1147.0], [98.4, 1157.0], [98.5, 1178.0], [98.6, 1212.0], [98.7, 1258.0], [98.8, 1273.0], [98.9, 1307.0], [99.0, 1332.0], [99.1, 1341.0], [99.2, 1374.0], [99.3, 1440.0], [99.4, 1580.0], [99.5, 1696.0], [99.6, 1857.0], [99.7, 2252.0], [99.8, 3546.0], [99.9, 3831.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 1108.0, "series": [{"data": [[0.0, 663.0], [600.0, 230.0], [700.0, 125.0], [800.0, 99.0], [900.0, 43.0], [1000.0, 45.0], [1100.0, 26.0], [1200.0, 15.0], [1300.0, 21.0], [1400.0, 4.0], [1500.0, 4.0], [100.0, 951.0], [1600.0, 7.0], [1700.0, 3.0], [1800.0, 2.0], [1900.0, 1.0], [2000.0, 1.0], [2100.0, 1.0], [2200.0, 2.0], [2500.0, 1.0], [2700.0, 1.0], [2900.0, 1.0], [200.0, 1108.0], [3500.0, 2.0], [3700.0, 3.0], [3800.0, 3.0], [3900.0, 1.0], [4500.0, 1.0], [300.0, 846.0], [400.0, 583.0], [7400.0, 1.0], [500.0, 396.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 7400.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 35.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 4158.0, "series": [{"data": [[0.0, 4158.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 997.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 35.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.915662650602407, "minX": 1.60422228E12, "maxY": 10.0, "series": [{"data": [[1.60422246E12, 9.915662650602407], [1.60422228E12, 9.99830508474578], [1.6042224E12, 10.0], [1.60422234E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60422246E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 147.0, "minX": 1.0, "maxY": 668.0, "series": [{"data": [[8.0, 319.0], [1.0, 668.0], [9.0, 512.6666666666666], [10.0, 349.5143850164125], [5.0, 172.0], [6.0, 381.0], [3.0, 364.5], [7.0, 147.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.991522157996112, 349.6088631984591]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 3468.616666666667, "minX": 1.60422228E12, "maxY": 1.259279785E7, "series": [{"data": [[1.60422246E12, 3415651.1], [1.60422228E12, 8022108.0], [1.6042224E12, 1.1914040633333333E7], [1.60422234E12, 1.259279785E7]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60422246E12, 3468.616666666667], [1.60422228E12, 7820.45], [1.6042224E12, 12060.766666666666], [1.60422234E12, 11793.933333333332]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60422246E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 324.8293172690762, "minX": 1.60422228E12, "maxY": 388.3025423728817, "series": [{"data": [[1.60422246E12, 324.8293172690762], [1.60422228E12, 388.3025423728817], [1.6042224E12, 333.40089585666243], [1.60422234E12, 347.0764774044034]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60422246E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 322.5461847389558, "minX": 1.60422228E12, "maxY": 385.1864406779663, "series": [{"data": [[1.60422246E12, 322.5461847389558], [1.60422228E12, 385.1864406779663], [1.6042224E12, 331.08734602463613], [1.60422234E12, 344.4119351100805]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60422246E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.007838745800671867, "minX": 1.60422228E12, "maxY": 0.10593220338983077, "series": [{"data": [[1.60422246E12, 0.01807228915662652], [1.60422228E12, 0.10593220338983077], [1.6042224E12, 0.007838745800671867], [1.60422234E12, 0.012746234067207419]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60422246E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 5.0, "minX": 1.60422228E12, "maxY": 7425.0, "series": [{"data": [[1.60422246E12, 2287.0], [1.60422228E12, 7425.0], [1.6042224E12, 1865.0], [1.60422234E12, 1753.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60422246E12, 16.0], [1.60422228E12, 18.628999718427657], [1.6042224E12, 15.0], [1.60422234E12, 16.542999588251114]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60422246E12, 16.0], [1.60422228E12, 19.691900112628936], [1.6042224E12, 15.0], [1.60422234E12, 18.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60422246E12, 16.0], [1.60422228E12, 19.219499859213826], [1.6042224E12, 15.0], [1.60422234E12, 17.406499794125555]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60422246E12, 7.0], [1.60422228E12, 9.0], [1.6042224E12, 5.0], [1.60422234E12, 6.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60422246E12, 264.0], [1.60422228E12, 283.0], [1.6042224E12, 286.5], [1.60422234E12, 297.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60422246E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 130.0, "minX": 1.0, "maxY": 2716.0, "series": [{"data": [[2.0, 653.5], [33.0, 262.5], [32.0, 288.5], [35.0, 278.0], [34.0, 270.5], [36.0, 278.0], [37.0, 217.5], [39.0, 258.0], [38.0, 246.5], [40.0, 220.5], [41.0, 218.5], [42.0, 200.0], [43.0, 233.0], [44.0, 206.5], [47.0, 189.0], [46.0, 178.0], [3.0, 433.5], [50.0, 191.0], [66.0, 130.0], [7.0, 751.5], [8.0, 927.0], [9.0, 790.5], [11.0, 659.0], [12.0, 851.0], [13.0, 656.0], [14.0, 200.0], [15.0, 729.0], [16.0, 282.0], [1.0, 2716.0], [17.0, 536.0], [18.0, 443.5], [19.0, 410.0], [20.0, 440.5], [21.0, 474.5], [22.0, 313.5], [23.0, 430.0], [24.0, 372.5], [25.0, 386.0], [26.0, 355.5], [27.0, 341.5], [28.0, 301.0], [29.0, 353.0], [30.0, 289.5], [31.0, 297.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 66.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 129.0, "minX": 1.0, "maxY": 2714.0, "series": [{"data": [[2.0, 647.0], [33.0, 259.5], [32.0, 284.0], [35.0, 274.5], [34.0, 267.0], [36.0, 275.0], [37.0, 215.5], [39.0, 255.0], [38.0, 242.5], [40.0, 218.5], [41.0, 216.0], [42.0, 198.0], [43.0, 231.0], [44.0, 205.0], [47.0, 188.0], [46.0, 177.0], [3.0, 430.0], [50.0, 189.5], [66.0, 129.0], [7.0, 750.5], [8.0, 925.0], [9.0, 789.0], [11.0, 659.0], [12.0, 849.5], [13.0, 650.5], [14.0, 199.5], [15.0, 726.0], [16.0, 277.5], [1.0, 2714.0], [17.0, 536.0], [18.0, 442.0], [19.0, 405.0], [20.0, 437.0], [21.0, 470.5], [22.0, 311.0], [23.0, 424.5], [24.0, 367.5], [25.0, 382.0], [26.0, 349.5], [27.0, 336.0], [28.0, 297.0], [29.0, 350.0], [30.0, 285.5], [31.0, 295.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 66.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 8.133333333333333, "minX": 1.60422228E12, "maxY": 29.766666666666666, "series": [{"data": [[1.60422246E12, 8.133333333333333], [1.60422228E12, 19.833333333333332], [1.6042224E12, 29.766666666666666], [1.60422234E12, 28.766666666666666]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60422246E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 8.3, "minX": 1.60422228E12, "maxY": 29.766666666666666, "series": [{"data": [[1.60422246E12, 8.3], [1.60422228E12, 19.666666666666668], [1.6042224E12, 29.766666666666666], [1.60422234E12, 28.766666666666666]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60422246E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 8.3, "minX": 1.60422228E12, "maxY": 29.766666666666666, "series": [{"data": [[1.60422246E12, 8.3], [1.60422228E12, 19.666666666666668], [1.6042224E12, 29.766666666666666], [1.60422234E12, 28.766666666666666]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60422246E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 8.3, "minX": 1.60422228E12, "maxY": 29.766666666666666, "series": [{"data": [[1.60422246E12, 8.3], [1.60422228E12, 19.666666666666668], [1.6042224E12, 29.766666666666666], [1.60422234E12, 28.766666666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60422246E12, "title": "Total Transactions Per Second"}},
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

