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
        data: {"result": {"minY": 5.0, "minX": 0.0, "maxY": 5262.0, "series": [{"data": [[0.0, 5.0], [0.1, 10.0], [0.2, 13.0], [0.3, 14.0], [0.4, 14.0], [0.5, 16.0], [0.6, 16.0], [0.7, 16.0], [0.8, 17.0], [0.9, 17.0], [1.0, 18.0], [1.1, 18.0], [1.2, 18.0], [1.3, 19.0], [1.4, 20.0], [1.5, 20.0], [1.6, 21.0], [1.7, 21.0], [1.8, 22.0], [1.9, 23.0], [2.0, 23.0], [2.1, 23.0], [2.2, 23.0], [2.3, 24.0], [2.4, 24.0], [2.5, 24.0], [2.6, 25.0], [2.7, 26.0], [2.8, 27.0], [2.9, 27.0], [3.0, 28.0], [3.1, 28.0], [3.2, 29.0], [3.3, 30.0], [3.4, 31.0], [3.5, 32.0], [3.6, 32.0], [3.7, 33.0], [3.8, 33.0], [3.9, 34.0], [4.0, 35.0], [4.1, 37.0], [4.2, 37.0], [4.3, 38.0], [4.4, 39.0], [4.5, 41.0], [4.6, 41.0], [4.7, 42.0], [4.8, 42.0], [4.9, 43.0], [5.0, 44.0], [5.1, 45.0], [5.2, 45.0], [5.3, 46.0], [5.4, 46.0], [5.5, 47.0], [5.6, 47.0], [5.7, 48.0], [5.8, 48.0], [5.9, 49.0], [6.0, 50.0], [6.1, 50.0], [6.2, 51.0], [6.3, 52.0], [6.4, 52.0], [6.5, 53.0], [6.6, 54.0], [6.7, 54.0], [6.8, 55.0], [6.9, 56.0], [7.0, 57.0], [7.1, 58.0], [7.2, 59.0], [7.3, 60.0], [7.4, 60.0], [7.5, 61.0], [7.6, 61.0], [7.7, 62.0], [7.8, 62.0], [7.9, 63.0], [8.0, 64.0], [8.1, 65.0], [8.2, 65.0], [8.3, 66.0], [8.4, 67.0], [8.5, 68.0], [8.6, 68.0], [8.7, 69.0], [8.8, 70.0], [8.9, 70.0], [9.0, 72.0], [9.1, 73.0], [9.2, 75.0], [9.3, 75.0], [9.4, 76.0], [9.5, 78.0], [9.6, 78.0], [9.7, 79.0], [9.8, 80.0], [9.9, 81.0], [10.0, 82.0], [10.1, 82.0], [10.2, 83.0], [10.3, 84.0], [10.4, 85.0], [10.5, 87.0], [10.6, 88.0], [10.7, 88.0], [10.8, 89.0], [10.9, 90.0], [11.0, 91.0], [11.1, 91.0], [11.2, 92.0], [11.3, 93.0], [11.4, 93.0], [11.5, 94.0], [11.6, 95.0], [11.7, 96.0], [11.8, 96.0], [11.9, 97.0], [12.0, 97.0], [12.1, 98.0], [12.2, 99.0], [12.3, 100.0], [12.4, 100.0], [12.5, 101.0], [12.6, 101.0], [12.7, 102.0], [12.8, 102.0], [12.9, 103.0], [13.0, 104.0], [13.1, 104.0], [13.2, 105.0], [13.3, 105.0], [13.4, 106.0], [13.5, 107.0], [13.6, 108.0], [13.7, 109.0], [13.8, 110.0], [13.9, 110.0], [14.0, 111.0], [14.1, 112.0], [14.2, 112.0], [14.3, 113.0], [14.4, 114.0], [14.5, 115.0], [14.6, 116.0], [14.7, 116.0], [14.8, 117.0], [14.9, 117.0], [15.0, 118.0], [15.1, 119.0], [15.2, 119.0], [15.3, 120.0], [15.4, 121.0], [15.5, 121.0], [15.6, 122.0], [15.7, 122.0], [15.8, 123.0], [15.9, 124.0], [16.0, 125.0], [16.1, 125.0], [16.2, 126.0], [16.3, 127.0], [16.4, 127.0], [16.5, 128.0], [16.6, 128.0], [16.7, 129.0], [16.8, 129.0], [16.9, 130.0], [17.0, 130.0], [17.1, 131.0], [17.2, 131.0], [17.3, 132.0], [17.4, 132.0], [17.5, 133.0], [17.6, 134.0], [17.7, 134.0], [17.8, 134.0], [17.9, 135.0], [18.0, 135.0], [18.1, 136.0], [18.2, 136.0], [18.3, 137.0], [18.4, 137.0], [18.5, 138.0], [18.6, 139.0], [18.7, 139.0], [18.8, 139.0], [18.9, 140.0], [19.0, 141.0], [19.1, 142.0], [19.2, 143.0], [19.3, 144.0], [19.4, 145.0], [19.5, 145.0], [19.6, 146.0], [19.7, 147.0], [19.8, 147.0], [19.9, 148.0], [20.0, 149.0], [20.1, 150.0], [20.2, 151.0], [20.3, 151.0], [20.4, 152.0], [20.5, 152.0], [20.6, 153.0], [20.7, 154.0], [20.8, 154.0], [20.9, 155.0], [21.0, 155.0], [21.1, 156.0], [21.2, 156.0], [21.3, 157.0], [21.4, 158.0], [21.5, 159.0], [21.6, 159.0], [21.7, 160.0], [21.8, 161.0], [21.9, 162.0], [22.0, 163.0], [22.1, 164.0], [22.2, 164.0], [22.3, 165.0], [22.4, 166.0], [22.5, 166.0], [22.6, 166.0], [22.7, 167.0], [22.8, 168.0], [22.9, 168.0], [23.0, 169.0], [23.1, 170.0], [23.2, 170.0], [23.3, 171.0], [23.4, 172.0], [23.5, 172.0], [23.6, 173.0], [23.7, 174.0], [23.8, 174.0], [23.9, 175.0], [24.0, 175.0], [24.1, 176.0], [24.2, 176.0], [24.3, 177.0], [24.4, 177.0], [24.5, 178.0], [24.6, 179.0], [24.7, 179.0], [24.8, 180.0], [24.9, 180.0], [25.0, 181.0], [25.1, 182.0], [25.2, 182.0], [25.3, 183.0], [25.4, 183.0], [25.5, 184.0], [25.6, 184.0], [25.7, 185.0], [25.8, 185.0], [25.9, 186.0], [26.0, 186.0], [26.1, 186.0], [26.2, 187.0], [26.3, 187.0], [26.4, 187.0], [26.5, 188.0], [26.6, 189.0], [26.7, 189.0], [26.8, 189.0], [26.9, 190.0], [27.0, 190.0], [27.1, 191.0], [27.2, 191.0], [27.3, 191.0], [27.4, 191.0], [27.5, 191.0], [27.6, 192.0], [27.7, 192.0], [27.8, 192.0], [27.9, 193.0], [28.0, 193.0], [28.1, 193.0], [28.2, 194.0], [28.3, 194.0], [28.4, 194.0], [28.5, 195.0], [28.6, 195.0], [28.7, 195.0], [28.8, 195.0], [28.9, 196.0], [29.0, 196.0], [29.1, 197.0], [29.2, 197.0], [29.3, 197.0], [29.4, 197.0], [29.5, 198.0], [29.6, 198.0], [29.7, 199.0], [29.8, 199.0], [29.9, 199.0], [30.0, 200.0], [30.1, 200.0], [30.2, 200.0], [30.3, 201.0], [30.4, 201.0], [30.5, 202.0], [30.6, 202.0], [30.7, 202.0], [30.8, 202.0], [30.9, 202.0], [31.0, 203.0], [31.1, 203.0], [31.2, 203.0], [31.3, 204.0], [31.4, 204.0], [31.5, 204.0], [31.6, 204.0], [31.7, 205.0], [31.8, 205.0], [31.9, 205.0], [32.0, 206.0], [32.1, 206.0], [32.2, 206.0], [32.3, 206.0], [32.4, 207.0], [32.5, 207.0], [32.6, 208.0], [32.7, 209.0], [32.8, 209.0], [32.9, 209.0], [33.0, 210.0], [33.1, 210.0], [33.2, 211.0], [33.3, 211.0], [33.4, 211.0], [33.5, 211.0], [33.6, 212.0], [33.7, 212.0], [33.8, 212.0], [33.9, 213.0], [34.0, 213.0], [34.1, 213.0], [34.2, 214.0], [34.3, 215.0], [34.4, 215.0], [34.5, 216.0], [34.6, 217.0], [34.7, 217.0], [34.8, 218.0], [34.9, 218.0], [35.0, 218.0], [35.1, 219.0], [35.2, 219.0], [35.3, 219.0], [35.4, 220.0], [35.5, 220.0], [35.6, 221.0], [35.7, 221.0], [35.8, 222.0], [35.9, 222.0], [36.0, 222.0], [36.1, 223.0], [36.2, 223.0], [36.3, 224.0], [36.4, 224.0], [36.5, 225.0], [36.6, 226.0], [36.7, 226.0], [36.8, 226.0], [36.9, 227.0], [37.0, 227.0], [37.1, 227.0], [37.2, 228.0], [37.3, 228.0], [37.4, 229.0], [37.5, 230.0], [37.6, 230.0], [37.7, 231.0], [37.8, 232.0], [37.9, 232.0], [38.0, 233.0], [38.1, 233.0], [38.2, 234.0], [38.3, 234.0], [38.4, 234.0], [38.5, 236.0], [38.6, 236.0], [38.7, 236.0], [38.8, 237.0], [38.9, 237.0], [39.0, 238.0], [39.1, 238.0], [39.2, 239.0], [39.3, 239.0], [39.4, 240.0], [39.5, 240.0], [39.6, 241.0], [39.7, 242.0], [39.8, 242.0], [39.9, 243.0], [40.0, 243.0], [40.1, 244.0], [40.2, 245.0], [40.3, 245.0], [40.4, 245.0], [40.5, 246.0], [40.6, 247.0], [40.7, 247.0], [40.8, 248.0], [40.9, 248.0], [41.0, 249.0], [41.1, 250.0], [41.2, 250.0], [41.3, 250.0], [41.4, 250.0], [41.5, 251.0], [41.6, 251.0], [41.7, 252.0], [41.8, 253.0], [41.9, 253.0], [42.0, 253.0], [42.1, 253.0], [42.2, 254.0], [42.3, 255.0], [42.4, 256.0], [42.5, 256.0], [42.6, 257.0], [42.7, 258.0], [42.8, 258.0], [42.9, 259.0], [43.0, 259.0], [43.1, 260.0], [43.2, 260.0], [43.3, 261.0], [43.4, 261.0], [43.5, 262.0], [43.6, 262.0], [43.7, 263.0], [43.8, 263.0], [43.9, 264.0], [44.0, 264.0], [44.1, 265.0], [44.2, 266.0], [44.3, 266.0], [44.4, 266.0], [44.5, 267.0], [44.6, 267.0], [44.7, 268.0], [44.8, 269.0], [44.9, 269.0], [45.0, 270.0], [45.1, 270.0], [45.2, 271.0], [45.3, 271.0], [45.4, 272.0], [45.5, 272.0], [45.6, 273.0], [45.7, 274.0], [45.8, 274.0], [45.9, 275.0], [46.0, 275.0], [46.1, 276.0], [46.2, 276.0], [46.3, 277.0], [46.4, 278.0], [46.5, 278.0], [46.6, 278.0], [46.7, 279.0], [46.8, 279.0], [46.9, 280.0], [47.0, 280.0], [47.1, 281.0], [47.2, 281.0], [47.3, 282.0], [47.4, 282.0], [47.5, 282.0], [47.6, 283.0], [47.7, 283.0], [47.8, 284.0], [47.9, 285.0], [48.0, 285.0], [48.1, 285.0], [48.2, 286.0], [48.3, 286.0], [48.4, 287.0], [48.5, 287.0], [48.6, 288.0], [48.7, 289.0], [48.8, 289.0], [48.9, 289.0], [49.0, 290.0], [49.1, 290.0], [49.2, 291.0], [49.3, 291.0], [49.4, 292.0], [49.5, 292.0], [49.6, 293.0], [49.7, 293.0], [49.8, 294.0], [49.9, 294.0], [50.0, 295.0], [50.1, 296.0], [50.2, 296.0], [50.3, 296.0], [50.4, 297.0], [50.5, 297.0], [50.6, 298.0], [50.7, 298.0], [50.8, 299.0], [50.9, 299.0], [51.0, 300.0], [51.1, 300.0], [51.2, 301.0], [51.3, 301.0], [51.4, 302.0], [51.5, 302.0], [51.6, 303.0], [51.7, 303.0], [51.8, 304.0], [51.9, 305.0], [52.0, 306.0], [52.1, 306.0], [52.2, 307.0], [52.3, 307.0], [52.4, 308.0], [52.5, 308.0], [52.6, 308.0], [52.7, 309.0], [52.8, 309.0], [52.9, 310.0], [53.0, 311.0], [53.1, 311.0], [53.2, 312.0], [53.3, 312.0], [53.4, 313.0], [53.5, 314.0], [53.6, 315.0], [53.7, 316.0], [53.8, 316.0], [53.9, 316.0], [54.0, 317.0], [54.1, 317.0], [54.2, 318.0], [54.3, 319.0], [54.4, 319.0], [54.5, 319.0], [54.6, 320.0], [54.7, 320.0], [54.8, 321.0], [54.9, 321.0], [55.0, 323.0], [55.1, 323.0], [55.2, 323.0], [55.3, 324.0], [55.4, 325.0], [55.5, 325.0], [55.6, 326.0], [55.7, 326.0], [55.8, 327.0], [55.9, 328.0], [56.0, 328.0], [56.1, 329.0], [56.2, 329.0], [56.3, 330.0], [56.4, 330.0], [56.5, 330.0], [56.6, 331.0], [56.7, 332.0], [56.8, 332.0], [56.9, 332.0], [57.0, 333.0], [57.1, 334.0], [57.2, 334.0], [57.3, 335.0], [57.4, 335.0], [57.5, 335.0], [57.6, 336.0], [57.7, 337.0], [57.8, 337.0], [57.9, 338.0], [58.0, 338.0], [58.1, 339.0], [58.2, 339.0], [58.3, 340.0], [58.4, 340.0], [58.5, 341.0], [58.6, 341.0], [58.7, 342.0], [58.8, 342.0], [58.9, 343.0], [59.0, 344.0], [59.1, 344.0], [59.2, 345.0], [59.3, 345.0], [59.4, 345.0], [59.5, 346.0], [59.6, 347.0], [59.7, 348.0], [59.8, 348.0], [59.9, 349.0], [60.0, 350.0], [60.1, 351.0], [60.2, 351.0], [60.3, 352.0], [60.4, 353.0], [60.5, 353.0], [60.6, 354.0], [60.7, 355.0], [60.8, 355.0], [60.9, 356.0], [61.0, 356.0], [61.1, 357.0], [61.2, 358.0], [61.3, 359.0], [61.4, 360.0], [61.5, 361.0], [61.6, 361.0], [61.7, 362.0], [61.8, 363.0], [61.9, 364.0], [62.0, 364.0], [62.1, 364.0], [62.2, 366.0], [62.3, 367.0], [62.4, 367.0], [62.5, 368.0], [62.6, 368.0], [62.7, 369.0], [62.8, 370.0], [62.9, 370.0], [63.0, 370.0], [63.1, 371.0], [63.2, 371.0], [63.3, 372.0], [63.4, 372.0], [63.5, 373.0], [63.6, 374.0], [63.7, 374.0], [63.8, 375.0], [63.9, 375.0], [64.0, 375.0], [64.1, 377.0], [64.2, 378.0], [64.3, 379.0], [64.4, 380.0], [64.5, 381.0], [64.6, 382.0], [64.7, 382.0], [64.8, 383.0], [64.9, 383.0], [65.0, 384.0], [65.1, 385.0], [65.2, 385.0], [65.3, 386.0], [65.4, 387.0], [65.5, 387.0], [65.6, 387.0], [65.7, 388.0], [65.8, 389.0], [65.9, 390.0], [66.0, 390.0], [66.1, 391.0], [66.2, 392.0], [66.3, 392.0], [66.4, 392.0], [66.5, 393.0], [66.6, 394.0], [66.7, 394.0], [66.8, 395.0], [66.9, 396.0], [67.0, 396.0], [67.1, 397.0], [67.2, 398.0], [67.3, 399.0], [67.4, 399.0], [67.5, 400.0], [67.6, 400.0], [67.7, 401.0], [67.8, 402.0], [67.9, 403.0], [68.0, 404.0], [68.1, 405.0], [68.2, 406.0], [68.3, 406.0], [68.4, 407.0], [68.5, 407.0], [68.6, 408.0], [68.7, 408.0], [68.8, 409.0], [68.9, 409.0], [69.0, 411.0], [69.1, 412.0], [69.2, 413.0], [69.3, 414.0], [69.4, 415.0], [69.5, 416.0], [69.6, 416.0], [69.7, 417.0], [69.8, 417.0], [69.9, 418.0], [70.0, 419.0], [70.1, 419.0], [70.2, 420.0], [70.3, 420.0], [70.4, 422.0], [70.5, 423.0], [70.6, 424.0], [70.7, 425.0], [70.8, 425.0], [70.9, 426.0], [71.0, 427.0], [71.1, 428.0], [71.2, 429.0], [71.3, 430.0], [71.4, 430.0], [71.5, 431.0], [71.6, 431.0], [71.7, 432.0], [71.8, 433.0], [71.9, 434.0], [72.0, 434.0], [72.1, 435.0], [72.2, 435.0], [72.3, 435.0], [72.4, 436.0], [72.5, 437.0], [72.6, 438.0], [72.7, 439.0], [72.8, 440.0], [72.9, 440.0], [73.0, 441.0], [73.1, 442.0], [73.2, 443.0], [73.3, 444.0], [73.4, 445.0], [73.5, 445.0], [73.6, 446.0], [73.7, 447.0], [73.8, 448.0], [73.9, 449.0], [74.0, 450.0], [74.1, 451.0], [74.2, 452.0], [74.3, 453.0], [74.4, 454.0], [74.5, 455.0], [74.6, 456.0], [74.7, 456.0], [74.8, 457.0], [74.9, 458.0], [75.0, 458.0], [75.1, 460.0], [75.2, 461.0], [75.3, 461.0], [75.4, 463.0], [75.5, 464.0], [75.6, 465.0], [75.7, 466.0], [75.8, 466.0], [75.9, 468.0], [76.0, 469.0], [76.1, 469.0], [76.2, 470.0], [76.3, 471.0], [76.4, 472.0], [76.5, 473.0], [76.6, 473.0], [76.7, 475.0], [76.8, 476.0], [76.9, 478.0], [77.0, 479.0], [77.1, 481.0], [77.2, 481.0], [77.3, 482.0], [77.4, 483.0], [77.5, 483.0], [77.6, 484.0], [77.7, 485.0], [77.8, 486.0], [77.9, 487.0], [78.0, 488.0], [78.1, 490.0], [78.2, 491.0], [78.3, 492.0], [78.4, 493.0], [78.5, 493.0], [78.6, 495.0], [78.7, 495.0], [78.8, 496.0], [78.9, 496.0], [79.0, 498.0], [79.1, 498.0], [79.2, 499.0], [79.3, 500.0], [79.4, 501.0], [79.5, 502.0], [79.6, 504.0], [79.7, 505.0], [79.8, 507.0], [79.9, 507.0], [80.0, 508.0], [80.1, 509.0], [80.2, 510.0], [80.3, 511.0], [80.4, 514.0], [80.5, 515.0], [80.6, 517.0], [80.7, 518.0], [80.8, 518.0], [80.9, 519.0], [81.0, 520.0], [81.1, 521.0], [81.2, 522.0], [81.3, 524.0], [81.4, 525.0], [81.5, 526.0], [81.6, 527.0], [81.7, 528.0], [81.8, 530.0], [81.9, 531.0], [82.0, 532.0], [82.1, 533.0], [82.2, 534.0], [82.3, 535.0], [82.4, 536.0], [82.5, 539.0], [82.6, 540.0], [82.7, 541.0], [82.8, 542.0], [82.9, 543.0], [83.0, 544.0], [83.1, 545.0], [83.2, 547.0], [83.3, 547.0], [83.4, 548.0], [83.5, 549.0], [83.6, 551.0], [83.7, 552.0], [83.8, 553.0], [83.9, 553.0], [84.0, 555.0], [84.1, 556.0], [84.2, 557.0], [84.3, 559.0], [84.4, 561.0], [84.5, 561.0], [84.6, 562.0], [84.7, 563.0], [84.8, 564.0], [84.9, 565.0], [85.0, 566.0], [85.1, 568.0], [85.2, 569.0], [85.3, 570.0], [85.4, 571.0], [85.5, 572.0], [85.6, 573.0], [85.7, 574.0], [85.8, 575.0], [85.9, 577.0], [86.0, 578.0], [86.1, 580.0], [86.2, 581.0], [86.3, 582.0], [86.4, 585.0], [86.5, 586.0], [86.6, 589.0], [86.7, 591.0], [86.8, 593.0], [86.9, 595.0], [87.0, 596.0], [87.1, 598.0], [87.2, 601.0], [87.3, 604.0], [87.4, 606.0], [87.5, 607.0], [87.6, 608.0], [87.7, 609.0], [87.8, 611.0], [87.9, 613.0], [88.0, 614.0], [88.1, 615.0], [88.2, 616.0], [88.3, 618.0], [88.4, 620.0], [88.5, 625.0], [88.6, 626.0], [88.7, 628.0], [88.8, 629.0], [88.9, 630.0], [89.0, 632.0], [89.1, 633.0], [89.2, 635.0], [89.3, 637.0], [89.4, 638.0], [89.5, 640.0], [89.6, 641.0], [89.7, 642.0], [89.8, 645.0], [89.9, 646.0], [90.0, 650.0], [90.1, 652.0], [90.2, 655.0], [90.3, 656.0], [90.4, 659.0], [90.5, 663.0], [90.6, 667.0], [90.7, 669.0], [90.8, 670.0], [90.9, 672.0], [91.0, 674.0], [91.1, 678.0], [91.2, 681.0], [91.3, 685.0], [91.4, 686.0], [91.5, 689.0], [91.6, 690.0], [91.7, 694.0], [91.8, 695.0], [91.9, 697.0], [92.0, 703.0], [92.1, 705.0], [92.2, 709.0], [92.3, 712.0], [92.4, 715.0], [92.5, 720.0], [92.6, 725.0], [92.7, 729.0], [92.8, 733.0], [92.9, 737.0], [93.0, 743.0], [93.1, 745.0], [93.2, 751.0], [93.3, 755.0], [93.4, 757.0], [93.5, 761.0], [93.6, 763.0], [93.7, 769.0], [93.8, 774.0], [93.9, 778.0], [94.0, 782.0], [94.1, 786.0], [94.2, 790.0], [94.3, 796.0], [94.4, 799.0], [94.5, 801.0], [94.6, 804.0], [94.7, 806.0], [94.8, 811.0], [94.9, 814.0], [95.0, 816.0], [95.1, 821.0], [95.2, 826.0], [95.3, 831.0], [95.4, 836.0], [95.5, 844.0], [95.6, 849.0], [95.7, 860.0], [95.8, 866.0], [95.9, 869.0], [96.0, 876.0], [96.1, 891.0], [96.2, 899.0], [96.3, 906.0], [96.4, 910.0], [96.5, 919.0], [96.6, 923.0], [96.7, 930.0], [96.8, 934.0], [96.9, 938.0], [97.0, 950.0], [97.1, 962.0], [97.2, 976.0], [97.3, 981.0], [97.4, 997.0], [97.5, 1010.0], [97.6, 1019.0], [97.7, 1042.0], [97.8, 1053.0], [97.9, 1076.0], [98.0, 1088.0], [98.1, 1126.0], [98.2, 1145.0], [98.3, 1168.0], [98.4, 1188.0], [98.5, 1228.0], [98.6, 1245.0], [98.7, 1261.0], [98.8, 1302.0], [98.9, 1374.0], [99.0, 1451.0], [99.1, 1474.0], [99.2, 1584.0], [99.3, 1631.0], [99.4, 1752.0], [99.5, 2008.0], [99.6, 2428.0], [99.7, 2576.0], [99.8, 3490.0], [99.9, 3674.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 1087.0, "series": [{"data": [[0.0, 637.0], [600.0, 246.0], [700.0, 131.0], [800.0, 92.0], [900.0, 63.0], [1000.0, 32.0], [1100.0, 22.0], [1200.0, 17.0], [1300.0, 9.0], [1400.0, 10.0], [1500.0, 5.0], [100.0, 918.0], [1600.0, 7.0], [1700.0, 3.0], [1800.0, 2.0], [1900.0, 1.0], [2000.0, 2.0], [2100.0, 2.0], [2400.0, 6.0], [2500.0, 1.0], [3000.0, 1.0], [3100.0, 1.0], [200.0, 1087.0], [3200.0, 1.0], [3400.0, 3.0], [3500.0, 1.0], [3600.0, 3.0], [4400.0, 1.0], [300.0, 858.0], [4700.0, 2.0], [4900.0, 1.0], [5200.0, 1.0], [400.0, 613.0], [500.0, 411.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 5200.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 44.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 4118.0, "series": [{"data": [[0.0, 4118.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1028.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 44.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.957264957264957, "minX": 1.60439238E12, "maxY": 10.0, "series": [{"data": [[1.60439238E12, 9.992490613266574], [1.6043925E12, 10.0], [1.60439244E12, 10.0], [1.60439256E12, 9.957264957264957]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60439256E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 205.0, "minX": 1.0, "maxY": 624.0, "series": [{"data": [[8.0, 431.6666666666667], [4.0, 434.0], [2.0, 575.0], [1.0, 584.0], [9.0, 570.6666666666666], [10.0, 356.97508209387627], [5.0, 292.0], [6.0, 205.0], [3.0, 343.0], [7.0, 624.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.990173410404598, 357.24932562620523]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 5289.683333333333, "minX": 1.60439238E12, "maxY": 1.3021084716666667E7, "series": [{"data": [[1.60439238E12, 5449009.166666667], [1.6043925E12, 1.3021084716666667E7], [1.60439244E12, 1.0465548983333332E7], [1.60439256E12, 7008954.8]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60439238E12, 5289.683333333333], [1.6043925E12, 12459.216666666667], [1.60439244E12, 10094.133333333333], [1.60439256E12, 7300.733333333334]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60439256E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 317.76546530392636, "minX": 1.60439238E12, "maxY": 407.5530764029749, "series": [{"data": [[1.60439238E12, 360.4856070087613], [1.6043925E12, 317.76546530392636], [1.60439244E12, 407.5530764029749], [1.60439256E12, 353.8452041785372]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60439256E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 315.5309306078534, "minX": 1.60439238E12, "maxY": 404.5185936443541, "series": [{"data": [[1.60439238E12, 357.3642052565707], [1.6043925E12, 315.5309306078534], [1.60439244E12, 404.5185936443541], [1.60439256E12, 351.5109211775878]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60439256E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.007530930607853664, "minX": 1.60439238E12, "maxY": 0.135168961201502, "series": [{"data": [[1.60439238E12, 0.135168961201502], [1.6043925E12, 0.007530930607853664], [1.60439244E12, 0.013522650439486137], [1.60439256E12, 0.010446343779677106]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60439256E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 5.0, "minX": 1.60439238E12, "maxY": 5262.0, "series": [{"data": [[1.60439238E12, 4798.0], [1.6043925E12, 2159.0], [1.60439244E12, 4459.0], [1.60439256E12, 5262.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60439238E12, 21.199999809265137], [1.6043925E12, 16.0], [1.60439244E12, 18.0], [1.60439256E12, 14.485999748706817]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60439238E12, 21.920000076293945], [1.6043925E12, 17.0], [1.60439244E12, 18.6520001411438], [1.60439256E12, 15.434600100517272]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60439238E12, 21.59999990463257], [1.6043925E12, 16.66999977827072], [1.60439244E12, 18.05999982357025], [1.60439256E12, 15.012999874353408]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60439238E12, 14.0], [1.6043925E12, 9.0], [1.60439244E12, 10.0], [1.60439256E12, 5.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60439238E12, 282.0], [1.6043925E12, 280.0], [1.60439244E12, 334.0], [1.60439256E12, 296.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60439256E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 139.0, "minX": 2.0, "maxY": 2255.0, "series": [{"data": [[32.0, 289.5], [33.0, 284.0], [2.0, 2255.0], [35.0, 266.5], [34.0, 250.5], [37.0, 248.0], [36.0, 245.0], [38.0, 248.5], [39.0, 224.0], [41.0, 214.0], [40.0, 246.0], [43.0, 214.0], [42.0, 146.0], [44.0, 227.0], [49.0, 184.0], [50.0, 162.0], [53.0, 156.0], [54.0, 139.0], [56.0, 145.5], [5.0, 927.0], [7.0, 501.0], [8.0, 448.5], [10.0, 761.0], [12.0, 636.0], [13.0, 681.0], [14.0, 505.5], [15.0, 653.0], [16.0, 566.5], [17.0, 394.5], [19.0, 519.0], [20.0, 331.0], [21.0, 417.0], [22.0, 406.5], [23.0, 395.0], [24.0, 387.5], [25.0, 349.0], [26.0, 344.5], [27.0, 324.0], [28.0, 328.0], [29.0, 317.0], [30.0, 322.5], [31.0, 288.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 56.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 138.0, "minX": 2.0, "maxY": 2253.5, "series": [{"data": [[32.0, 288.0], [33.0, 283.0], [2.0, 2253.5], [35.0, 264.0], [34.0, 247.5], [37.0, 245.0], [36.0, 239.0], [38.0, 246.5], [39.0, 223.0], [41.0, 213.0], [40.0, 243.5], [43.0, 210.0], [42.0, 145.5], [44.0, 223.5], [49.0, 183.0], [50.0, 160.0], [53.0, 156.0], [54.0, 138.0], [56.0, 143.0], [5.0, 925.5], [7.0, 500.0], [8.0, 446.0], [10.0, 756.5], [12.0, 634.5], [13.0, 679.5], [14.0, 504.0], [15.0, 651.0], [16.0, 563.0], [17.0, 393.5], [19.0, 511.0], [20.0, 325.5], [21.0, 415.0], [22.0, 401.5], [23.0, 393.0], [24.0, 381.5], [25.0, 346.0], [26.0, 342.5], [27.0, 320.0], [28.0, 325.0], [29.0, 315.0], [30.0, 321.5], [31.0, 284.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 56.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 13.483333333333333, "minX": 1.60439238E12, "maxY": 30.983333333333334, "series": [{"data": [[1.60439238E12, 13.483333333333333], [1.6043925E12, 30.983333333333334], [1.60439244E12, 24.65], [1.60439256E12, 17.383333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60439256E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 13.316666666666666, "minX": 1.60439238E12, "maxY": 30.983333333333334, "series": [{"data": [[1.60439238E12, 13.316666666666666], [1.6043925E12, 30.983333333333334], [1.60439244E12, 24.65], [1.60439256E12, 17.55]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60439256E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 13.316666666666666, "minX": 1.60439238E12, "maxY": 30.983333333333334, "series": [{"data": [[1.60439238E12, 13.316666666666666], [1.6043925E12, 30.983333333333334], [1.60439244E12, 24.65], [1.60439256E12, 17.55]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60439256E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 13.316666666666666, "minX": 1.60439238E12, "maxY": 30.983333333333334, "series": [{"data": [[1.60439238E12, 13.316666666666666], [1.6043925E12, 30.983333333333334], [1.60439244E12, 24.65], [1.60439256E12, 17.55]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60439256E12, "title": "Total Transactions Per Second"}},
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

