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
        data: {"result": {"minY": 6.0, "minX": 0.0, "maxY": 4891.0, "series": [{"data": [[0.0, 6.0], [0.1, 8.0], [0.2, 11.0], [0.3, 12.0], [0.4, 13.0], [0.5, 14.0], [0.6, 15.0], [0.7, 16.0], [0.8, 16.0], [0.9, 17.0], [1.0, 17.0], [1.1, 18.0], [1.2, 18.0], [1.3, 18.0], [1.4, 19.0], [1.5, 19.0], [1.6, 20.0], [1.7, 20.0], [1.8, 20.0], [1.9, 21.0], [2.0, 21.0], [2.1, 22.0], [2.2, 22.0], [2.3, 22.0], [2.4, 22.0], [2.5, 23.0], [2.6, 23.0], [2.7, 23.0], [2.8, 23.0], [2.9, 24.0], [3.0, 24.0], [3.1, 24.0], [3.2, 24.0], [3.3, 25.0], [3.4, 25.0], [3.5, 25.0], [3.6, 26.0], [3.7, 27.0], [3.8, 27.0], [3.9, 28.0], [4.0, 28.0], [4.1, 28.0], [4.2, 29.0], [4.3, 29.0], [4.4, 30.0], [4.5, 31.0], [4.6, 31.0], [4.7, 32.0], [4.8, 33.0], [4.9, 34.0], [5.0, 34.0], [5.1, 35.0], [5.2, 35.0], [5.3, 36.0], [5.4, 36.0], [5.5, 37.0], [5.6, 37.0], [5.7, 38.0], [5.8, 38.0], [5.9, 39.0], [6.0, 39.0], [6.1, 39.0], [6.2, 40.0], [6.3, 41.0], [6.4, 41.0], [6.5, 41.0], [6.6, 42.0], [6.7, 42.0], [6.8, 43.0], [6.9, 44.0], [7.0, 45.0], [7.1, 45.0], [7.2, 46.0], [7.3, 47.0], [7.4, 47.0], [7.5, 48.0], [7.6, 49.0], [7.7, 50.0], [7.8, 50.0], [7.9, 51.0], [8.0, 51.0], [8.1, 51.0], [8.2, 52.0], [8.3, 52.0], [8.4, 53.0], [8.5, 53.0], [8.6, 54.0], [8.7, 55.0], [8.8, 56.0], [8.9, 57.0], [9.0, 57.0], [9.1, 58.0], [9.2, 60.0], [9.3, 60.0], [9.4, 61.0], [9.5, 61.0], [9.6, 62.0], [9.7, 62.0], [9.8, 64.0], [9.9, 64.0], [10.0, 65.0], [10.1, 67.0], [10.2, 67.0], [10.3, 68.0], [10.4, 68.0], [10.5, 70.0], [10.6, 71.0], [10.7, 72.0], [10.8, 72.0], [10.9, 73.0], [11.0, 74.0], [11.1, 75.0], [11.2, 76.0], [11.3, 77.0], [11.4, 78.0], [11.5, 78.0], [11.6, 79.0], [11.7, 80.0], [11.8, 81.0], [11.9, 82.0], [12.0, 84.0], [12.1, 85.0], [12.2, 85.0], [12.3, 87.0], [12.4, 87.0], [12.5, 88.0], [12.6, 88.0], [12.7, 89.0], [12.8, 89.0], [12.9, 90.0], [13.0, 91.0], [13.1, 92.0], [13.2, 92.0], [13.3, 93.0], [13.4, 94.0], [13.5, 94.0], [13.6, 95.0], [13.7, 96.0], [13.8, 96.0], [13.9, 97.0], [14.0, 98.0], [14.1, 99.0], [14.2, 99.0], [14.3, 100.0], [14.4, 100.0], [14.5, 101.0], [14.6, 101.0], [14.7, 102.0], [14.8, 103.0], [14.9, 104.0], [15.0, 105.0], [15.1, 105.0], [15.2, 105.0], [15.3, 106.0], [15.4, 106.0], [15.5, 107.0], [15.6, 107.0], [15.7, 108.0], [15.8, 109.0], [15.9, 110.0], [16.0, 110.0], [16.1, 111.0], [16.2, 112.0], [16.3, 112.0], [16.4, 113.0], [16.5, 113.0], [16.6, 114.0], [16.7, 114.0], [16.8, 115.0], [16.9, 115.0], [17.0, 116.0], [17.1, 117.0], [17.2, 117.0], [17.3, 118.0], [17.4, 118.0], [17.5, 119.0], [17.6, 119.0], [17.7, 120.0], [17.8, 120.0], [17.9, 121.0], [18.0, 121.0], [18.1, 122.0], [18.2, 122.0], [18.3, 122.0], [18.4, 123.0], [18.5, 124.0], [18.6, 125.0], [18.7, 126.0], [18.8, 126.0], [18.9, 127.0], [19.0, 127.0], [19.1, 128.0], [19.2, 129.0], [19.3, 130.0], [19.4, 131.0], [19.5, 132.0], [19.6, 132.0], [19.7, 132.0], [19.8, 133.0], [19.9, 133.0], [20.0, 134.0], [20.1, 134.0], [20.2, 135.0], [20.3, 135.0], [20.4, 136.0], [20.5, 136.0], [20.6, 137.0], [20.7, 138.0], [20.8, 139.0], [20.9, 139.0], [21.0, 140.0], [21.1, 141.0], [21.2, 141.0], [21.3, 142.0], [21.4, 142.0], [21.5, 143.0], [21.6, 143.0], [21.7, 144.0], [21.8, 144.0], [21.9, 145.0], [22.0, 146.0], [22.1, 146.0], [22.2, 147.0], [22.3, 147.0], [22.4, 148.0], [22.5, 148.0], [22.6, 149.0], [22.7, 150.0], [22.8, 151.0], [22.9, 151.0], [23.0, 152.0], [23.1, 152.0], [23.2, 153.0], [23.3, 154.0], [23.4, 155.0], [23.5, 155.0], [23.6, 156.0], [23.7, 156.0], [23.8, 157.0], [23.9, 158.0], [24.0, 158.0], [24.1, 159.0], [24.2, 159.0], [24.3, 160.0], [24.4, 161.0], [24.5, 161.0], [24.6, 161.0], [24.7, 162.0], [24.8, 162.0], [24.9, 163.0], [25.0, 163.0], [25.1, 164.0], [25.2, 164.0], [25.3, 165.0], [25.4, 165.0], [25.5, 166.0], [25.6, 166.0], [25.7, 167.0], [25.8, 168.0], [25.9, 168.0], [26.0, 169.0], [26.1, 170.0], [26.2, 170.0], [26.3, 170.0], [26.4, 171.0], [26.5, 171.0], [26.6, 172.0], [26.7, 172.0], [26.8, 173.0], [26.9, 173.0], [27.0, 174.0], [27.1, 174.0], [27.2, 175.0], [27.3, 175.0], [27.4, 175.0], [27.5, 176.0], [27.6, 176.0], [27.7, 176.0], [27.8, 177.0], [27.9, 178.0], [28.0, 178.0], [28.1, 178.0], [28.2, 179.0], [28.3, 179.0], [28.4, 179.0], [28.5, 179.0], [28.6, 180.0], [28.7, 180.0], [28.8, 180.0], [28.9, 181.0], [29.0, 181.0], [29.1, 181.0], [29.2, 181.0], [29.3, 181.0], [29.4, 182.0], [29.5, 182.0], [29.6, 182.0], [29.7, 183.0], [29.8, 183.0], [29.9, 183.0], [30.0, 184.0], [30.1, 184.0], [30.2, 184.0], [30.3, 185.0], [30.4, 185.0], [30.5, 185.0], [30.6, 185.0], [30.7, 185.0], [30.8, 186.0], [30.9, 186.0], [31.0, 186.0], [31.1, 186.0], [31.2, 187.0], [31.3, 187.0], [31.4, 187.0], [31.5, 188.0], [31.6, 188.0], [31.7, 188.0], [31.8, 189.0], [31.9, 189.0], [32.0, 189.0], [32.1, 190.0], [32.2, 190.0], [32.3, 190.0], [32.4, 191.0], [32.5, 191.0], [32.6, 191.0], [32.7, 191.0], [32.8, 191.0], [32.9, 191.0], [33.0, 192.0], [33.1, 192.0], [33.2, 192.0], [33.3, 192.0], [33.4, 193.0], [33.5, 193.0], [33.6, 193.0], [33.7, 194.0], [33.8, 194.0], [33.9, 194.0], [34.0, 194.0], [34.1, 195.0], [34.2, 195.0], [34.3, 195.0], [34.4, 196.0], [34.5, 196.0], [34.6, 196.0], [34.7, 196.0], [34.8, 197.0], [34.9, 197.0], [35.0, 197.0], [35.1, 197.0], [35.2, 198.0], [35.3, 198.0], [35.4, 198.0], [35.5, 199.0], [35.6, 199.0], [35.7, 199.0], [35.8, 200.0], [35.9, 200.0], [36.0, 200.0], [36.1, 201.0], [36.2, 201.0], [36.3, 202.0], [36.4, 202.0], [36.5, 202.0], [36.6, 203.0], [36.7, 203.0], [36.8, 203.0], [36.9, 203.0], [37.0, 204.0], [37.1, 204.0], [37.2, 204.0], [37.3, 204.0], [37.4, 205.0], [37.5, 205.0], [37.6, 206.0], [37.7, 207.0], [37.8, 207.0], [37.9, 208.0], [38.0, 208.0], [38.1, 209.0], [38.2, 209.0], [38.3, 209.0], [38.4, 210.0], [38.5, 211.0], [38.6, 211.0], [38.7, 212.0], [38.8, 212.0], [38.9, 212.0], [39.0, 213.0], [39.1, 213.0], [39.2, 214.0], [39.3, 214.0], [39.4, 215.0], [39.5, 216.0], [39.6, 216.0], [39.7, 216.0], [39.8, 217.0], [39.9, 217.0], [40.0, 218.0], [40.1, 218.0], [40.2, 219.0], [40.3, 219.0], [40.4, 220.0], [40.5, 220.0], [40.6, 221.0], [40.7, 222.0], [40.8, 222.0], [40.9, 223.0], [41.0, 223.0], [41.1, 224.0], [41.2, 224.0], [41.3, 225.0], [41.4, 225.0], [41.5, 226.0], [41.6, 226.0], [41.7, 226.0], [41.8, 227.0], [41.9, 227.0], [42.0, 228.0], [42.1, 228.0], [42.2, 229.0], [42.3, 230.0], [42.4, 231.0], [42.5, 231.0], [42.6, 232.0], [42.7, 232.0], [42.8, 233.0], [42.9, 233.0], [43.0, 235.0], [43.1, 235.0], [43.2, 235.0], [43.3, 236.0], [43.4, 237.0], [43.5, 237.0], [43.6, 238.0], [43.7, 238.0], [43.8, 239.0], [43.9, 241.0], [44.0, 241.0], [44.1, 242.0], [44.2, 242.0], [44.3, 243.0], [44.4, 243.0], [44.5, 243.0], [44.6, 244.0], [44.7, 245.0], [44.8, 246.0], [44.9, 246.0], [45.0, 246.0], [45.1, 247.0], [45.2, 247.0], [45.3, 248.0], [45.4, 249.0], [45.5, 249.0], [45.6, 250.0], [45.7, 251.0], [45.8, 252.0], [45.9, 252.0], [46.0, 252.0], [46.1, 253.0], [46.2, 254.0], [46.3, 254.0], [46.4, 255.0], [46.5, 255.0], [46.6, 256.0], [46.7, 256.0], [46.8, 257.0], [46.9, 257.0], [47.0, 258.0], [47.1, 260.0], [47.2, 260.0], [47.3, 261.0], [47.4, 261.0], [47.5, 262.0], [47.6, 263.0], [47.7, 263.0], [47.8, 263.0], [47.9, 264.0], [48.0, 264.0], [48.1, 265.0], [48.2, 265.0], [48.3, 266.0], [48.4, 266.0], [48.5, 267.0], [48.6, 267.0], [48.7, 268.0], [48.8, 268.0], [48.9, 269.0], [49.0, 270.0], [49.1, 270.0], [49.2, 271.0], [49.3, 272.0], [49.4, 272.0], [49.5, 273.0], [49.6, 273.0], [49.7, 274.0], [49.8, 274.0], [49.9, 274.0], [50.0, 274.0], [50.1, 275.0], [50.2, 275.0], [50.3, 276.0], [50.4, 276.0], [50.5, 277.0], [50.6, 277.0], [50.7, 278.0], [50.8, 278.0], [50.9, 279.0], [51.0, 279.0], [51.1, 280.0], [51.2, 280.0], [51.3, 281.0], [51.4, 282.0], [51.5, 282.0], [51.6, 283.0], [51.7, 283.0], [51.8, 283.0], [51.9, 284.0], [52.0, 284.0], [52.1, 285.0], [52.2, 285.0], [52.3, 286.0], [52.4, 286.0], [52.5, 287.0], [52.6, 287.0], [52.7, 287.0], [52.8, 288.0], [52.9, 288.0], [53.0, 289.0], [53.1, 290.0], [53.2, 290.0], [53.3, 292.0], [53.4, 292.0], [53.5, 293.0], [53.6, 293.0], [53.7, 295.0], [53.8, 295.0], [53.9, 296.0], [54.0, 296.0], [54.1, 296.0], [54.2, 297.0], [54.3, 297.0], [54.4, 298.0], [54.5, 298.0], [54.6, 298.0], [54.7, 299.0], [54.8, 300.0], [54.9, 301.0], [55.0, 301.0], [55.1, 302.0], [55.2, 302.0], [55.3, 302.0], [55.4, 303.0], [55.5, 303.0], [55.6, 303.0], [55.7, 304.0], [55.8, 304.0], [55.9, 305.0], [56.0, 306.0], [56.1, 306.0], [56.2, 307.0], [56.3, 308.0], [56.4, 309.0], [56.5, 309.0], [56.6, 310.0], [56.7, 310.0], [56.8, 311.0], [56.9, 312.0], [57.0, 312.0], [57.1, 313.0], [57.2, 313.0], [57.3, 314.0], [57.4, 315.0], [57.5, 315.0], [57.6, 316.0], [57.7, 316.0], [57.8, 317.0], [57.9, 318.0], [58.0, 318.0], [58.1, 319.0], [58.2, 320.0], [58.3, 320.0], [58.4, 320.0], [58.5, 321.0], [58.6, 321.0], [58.7, 322.0], [58.8, 322.0], [58.9, 323.0], [59.0, 323.0], [59.1, 324.0], [59.2, 325.0], [59.3, 326.0], [59.4, 327.0], [59.5, 328.0], [59.6, 329.0], [59.7, 329.0], [59.8, 330.0], [59.9, 331.0], [60.0, 332.0], [60.1, 333.0], [60.2, 334.0], [60.3, 334.0], [60.4, 335.0], [60.5, 335.0], [60.6, 336.0], [60.7, 337.0], [60.8, 337.0], [60.9, 338.0], [61.0, 338.0], [61.1, 339.0], [61.2, 340.0], [61.3, 341.0], [61.4, 342.0], [61.5, 342.0], [61.6, 343.0], [61.7, 344.0], [61.8, 345.0], [61.9, 345.0], [62.0, 346.0], [62.1, 347.0], [62.2, 347.0], [62.3, 348.0], [62.4, 349.0], [62.5, 350.0], [62.6, 351.0], [62.7, 352.0], [62.8, 353.0], [62.9, 353.0], [63.0, 354.0], [63.1, 355.0], [63.2, 356.0], [63.3, 357.0], [63.4, 357.0], [63.5, 358.0], [63.6, 358.0], [63.7, 359.0], [63.8, 360.0], [63.9, 361.0], [64.0, 361.0], [64.1, 362.0], [64.2, 362.0], [64.3, 363.0], [64.4, 364.0], [64.5, 365.0], [64.6, 365.0], [64.7, 366.0], [64.8, 367.0], [64.9, 368.0], [65.0, 368.0], [65.1, 368.0], [65.2, 369.0], [65.3, 370.0], [65.4, 370.0], [65.5, 371.0], [65.6, 371.0], [65.7, 372.0], [65.8, 372.0], [65.9, 373.0], [66.0, 374.0], [66.1, 374.0], [66.2, 375.0], [66.3, 375.0], [66.4, 376.0], [66.5, 376.0], [66.6, 376.0], [66.7, 377.0], [66.8, 377.0], [66.9, 379.0], [67.0, 379.0], [67.1, 380.0], [67.2, 380.0], [67.3, 381.0], [67.4, 381.0], [67.5, 382.0], [67.6, 383.0], [67.7, 384.0], [67.8, 384.0], [67.9, 385.0], [68.0, 386.0], [68.1, 386.0], [68.2, 387.0], [68.3, 387.0], [68.4, 388.0], [68.5, 389.0], [68.6, 389.0], [68.7, 390.0], [68.8, 390.0], [68.9, 391.0], [69.0, 391.0], [69.1, 392.0], [69.2, 393.0], [69.3, 394.0], [69.4, 395.0], [69.5, 396.0], [69.6, 397.0], [69.7, 398.0], [69.8, 399.0], [69.9, 399.0], [70.0, 400.0], [70.1, 401.0], [70.2, 401.0], [70.3, 402.0], [70.4, 405.0], [70.5, 405.0], [70.6, 406.0], [70.7, 407.0], [70.8, 409.0], [70.9, 410.0], [71.0, 411.0], [71.1, 412.0], [71.2, 413.0], [71.3, 413.0], [71.4, 413.0], [71.5, 414.0], [71.6, 415.0], [71.7, 416.0], [71.8, 417.0], [71.9, 419.0], [72.0, 420.0], [72.1, 423.0], [72.2, 423.0], [72.3, 424.0], [72.4, 425.0], [72.5, 425.0], [72.6, 426.0], [72.7, 427.0], [72.8, 428.0], [72.9, 428.0], [73.0, 430.0], [73.1, 431.0], [73.2, 432.0], [73.3, 433.0], [73.4, 433.0], [73.5, 435.0], [73.6, 436.0], [73.7, 437.0], [73.8, 438.0], [73.9, 439.0], [74.0, 440.0], [74.1, 441.0], [74.2, 441.0], [74.3, 442.0], [74.4, 443.0], [74.5, 443.0], [74.6, 444.0], [74.7, 445.0], [74.8, 448.0], [74.9, 449.0], [75.0, 450.0], [75.1, 450.0], [75.2, 452.0], [75.3, 453.0], [75.4, 455.0], [75.5, 456.0], [75.6, 457.0], [75.7, 459.0], [75.8, 459.0], [75.9, 460.0], [76.0, 461.0], [76.1, 462.0], [76.2, 463.0], [76.3, 464.0], [76.4, 466.0], [76.5, 467.0], [76.6, 468.0], [76.7, 470.0], [76.8, 471.0], [76.9, 471.0], [77.0, 472.0], [77.1, 474.0], [77.2, 474.0], [77.3, 475.0], [77.4, 476.0], [77.5, 477.0], [77.6, 478.0], [77.7, 480.0], [77.8, 481.0], [77.9, 482.0], [78.0, 483.0], [78.1, 484.0], [78.2, 485.0], [78.3, 486.0], [78.4, 488.0], [78.5, 489.0], [78.6, 489.0], [78.7, 490.0], [78.8, 491.0], [78.9, 493.0], [79.0, 494.0], [79.1, 495.0], [79.2, 496.0], [79.3, 498.0], [79.4, 498.0], [79.5, 500.0], [79.6, 502.0], [79.7, 502.0], [79.8, 504.0], [79.9, 506.0], [80.0, 508.0], [80.1, 509.0], [80.2, 512.0], [80.3, 514.0], [80.4, 515.0], [80.5, 516.0], [80.6, 516.0], [80.7, 518.0], [80.8, 519.0], [80.9, 521.0], [81.0, 522.0], [81.1, 523.0], [81.2, 525.0], [81.3, 525.0], [81.4, 526.0], [81.5, 527.0], [81.6, 527.0], [81.7, 528.0], [81.8, 529.0], [81.9, 531.0], [82.0, 531.0], [82.1, 532.0], [82.2, 534.0], [82.3, 534.0], [82.4, 536.0], [82.5, 537.0], [82.6, 538.0], [82.7, 540.0], [82.8, 540.0], [82.9, 541.0], [83.0, 542.0], [83.1, 544.0], [83.2, 545.0], [83.3, 546.0], [83.4, 547.0], [83.5, 548.0], [83.6, 550.0], [83.7, 551.0], [83.8, 553.0], [83.9, 554.0], [84.0, 555.0], [84.1, 555.0], [84.2, 558.0], [84.3, 560.0], [84.4, 561.0], [84.5, 563.0], [84.6, 564.0], [84.7, 567.0], [84.8, 568.0], [84.9, 568.0], [85.0, 569.0], [85.1, 571.0], [85.2, 572.0], [85.3, 574.0], [85.4, 576.0], [85.5, 576.0], [85.6, 577.0], [85.7, 579.0], [85.8, 580.0], [85.9, 581.0], [86.0, 584.0], [86.1, 586.0], [86.2, 587.0], [86.3, 589.0], [86.4, 591.0], [86.5, 593.0], [86.6, 595.0], [86.7, 597.0], [86.8, 598.0], [86.9, 599.0], [87.0, 601.0], [87.1, 603.0], [87.2, 604.0], [87.3, 606.0], [87.4, 609.0], [87.5, 610.0], [87.6, 611.0], [87.7, 613.0], [87.8, 615.0], [87.9, 617.0], [88.0, 623.0], [88.1, 625.0], [88.2, 627.0], [88.3, 629.0], [88.4, 631.0], [88.5, 632.0], [88.6, 632.0], [88.7, 633.0], [88.8, 638.0], [88.9, 641.0], [89.0, 643.0], [89.1, 644.0], [89.2, 647.0], [89.3, 650.0], [89.4, 653.0], [89.5, 655.0], [89.6, 659.0], [89.7, 663.0], [89.8, 666.0], [89.9, 667.0], [90.0, 670.0], [90.1, 672.0], [90.2, 674.0], [90.3, 675.0], [90.4, 678.0], [90.5, 681.0], [90.6, 686.0], [90.7, 689.0], [90.8, 691.0], [90.9, 694.0], [91.0, 696.0], [91.1, 698.0], [91.2, 700.0], [91.3, 703.0], [91.4, 708.0], [91.5, 712.0], [91.6, 716.0], [91.7, 720.0], [91.8, 722.0], [91.9, 726.0], [92.0, 729.0], [92.1, 733.0], [92.2, 738.0], [92.3, 740.0], [92.4, 745.0], [92.5, 748.0], [92.6, 749.0], [92.7, 751.0], [92.8, 754.0], [92.9, 757.0], [93.0, 760.0], [93.1, 764.0], [93.2, 770.0], [93.3, 773.0], [93.4, 775.0], [93.5, 779.0], [93.6, 782.0], [93.7, 787.0], [93.8, 790.0], [93.9, 794.0], [94.0, 800.0], [94.1, 802.0], [94.2, 804.0], [94.3, 812.0], [94.4, 814.0], [94.5, 816.0], [94.6, 827.0], [94.7, 832.0], [94.8, 839.0], [94.9, 845.0], [95.0, 854.0], [95.1, 861.0], [95.2, 866.0], [95.3, 875.0], [95.4, 885.0], [95.5, 893.0], [95.6, 901.0], [95.7, 906.0], [95.8, 912.0], [95.9, 919.0], [96.0, 924.0], [96.1, 941.0], [96.2, 946.0], [96.3, 957.0], [96.4, 968.0], [96.5, 977.0], [96.6, 981.0], [96.7, 987.0], [96.8, 996.0], [96.9, 1008.0], [97.0, 1019.0], [97.1, 1037.0], [97.2, 1051.0], [97.3, 1061.0], [97.4, 1080.0], [97.5, 1088.0], [97.6, 1097.0], [97.7, 1130.0], [97.8, 1147.0], [97.9, 1167.0], [98.0, 1178.0], [98.1, 1192.0], [98.2, 1216.0], [98.3, 1240.0], [98.4, 1261.0], [98.5, 1289.0], [98.6, 1357.0], [98.7, 1387.0], [98.8, 1419.0], [98.9, 1448.0], [99.0, 1505.0], [99.1, 1610.0], [99.2, 1719.0], [99.3, 1874.0], [99.4, 2007.0], [99.5, 2169.0], [99.6, 2479.0], [99.7, 3422.0], [99.8, 3608.0], [99.9, 4480.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 1115.0, "series": [{"data": [[0.0, 739.0], [600.0, 221.0], [700.0, 144.0], [800.0, 84.0], [900.0, 64.0], [1000.0, 41.0], [1100.0, 27.0], [1200.0, 20.0], [1300.0, 10.0], [1400.0, 14.0], [1500.0, 6.0], [100.0, 1115.0], [1600.0, 5.0], [1700.0, 5.0], [1800.0, 2.0], [1900.0, 3.0], [2000.0, 4.0], [2100.0, 4.0], [2200.0, 2.0], [2400.0, 2.0], [2500.0, 2.0], [2600.0, 2.0], [200.0, 985.0], [3400.0, 4.0], [3500.0, 1.0], [3600.0, 1.0], [3700.0, 1.0], [3800.0, 1.0], [4100.0, 1.0], [4200.0, 1.0], [4500.0, 1.0], [4400.0, 1.0], [300.0, 791.0], [4800.0, 3.0], [4700.0, 1.0], [400.0, 493.0], [500.0, 389.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 4800.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 53.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 4128.0, "series": [{"data": [[0.0, 4128.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1009.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 53.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.91129032258064, "minX": 1.60249368E12, "maxY": 10.0, "series": [{"data": [[1.6024938E12, 10.0], [1.60249374E12, 10.0], [1.60249386E12, 9.91129032258064], [1.60249368E12, 9.99670239076669]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60249386E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 198.0, "minX": 1.0, "maxY": 812.0, "series": [{"data": [[8.0, 344.5], [4.0, 672.0], [2.0, 456.0], [1.0, 812.0], [9.0, 469.0], [10.0, 350.1017767477787], [6.0, 348.5], [3.0, 449.0], [7.0, 198.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.99075144508674, 350.3289017341051]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 3454.55, "minX": 1.60249368E12, "maxY": 1.2608590333333334E7, "series": [{"data": [[1.6024938E12, 1.152964925E7], [1.60249374E12, 1.2608590333333334E7], [1.60249386E12, 3403711.8333333335], [1.60249368E12, 8401675.15]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6024938E12, 11620.183333333332], [1.60249374E12, 12033.9], [1.60249386E12, 3454.55], [1.60249368E12, 8035.133333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60249386E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 327.633064516129, "minX": 1.60249368E12, "maxY": 382.5886232481449, "series": [{"data": [[1.6024938E12, 345.6567599067602], [1.60249374E12, 339.0787535410771], [1.60249386E12, 327.633064516129], [1.60249368E12, 382.5886232481449]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60249386E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 325.41935483871015, "minX": 1.60249368E12, "maxY": 379.45836768342946, "series": [{"data": [[1.6024938E12, 343.56177156177137], [1.60249374E12, 336.4872521246458], [1.60249386E12, 325.41935483871015], [1.60249368E12, 379.45836768342946]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60249386E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.00849858356940513, "minX": 1.60249368E12, "maxY": 0.10140148392415477, "series": [{"data": [[1.6024938E12, 0.009324009324009331], [1.60249374E12, 0.00849858356940513], [1.60249386E12, 0.012096774193548397], [1.60249368E12, 0.10140148392415477]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60249386E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 6.0, "minX": 1.60249368E12, "maxY": 4891.0, "series": [{"data": [[1.6024938E12, 4891.0], [1.60249374E12, 4802.0], [1.60249386E12, 2603.0], [1.60249368E12, 4861.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6024938E12, 14.0], [1.60249374E12, 18.0], [1.60249386E12, 14.4189996445179], [1.60249368E12, 19.925999710559843]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6024938E12, 14.0], [1.60249374E12, 19.0], [1.60249386E12, 15.760900142192842], [1.60249368E12, 20.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6024938E12, 14.0], [1.60249374E12, 18.776999789476392], [1.60249386E12, 15.164499822258948], [1.60249368E12, 20.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.6024938E12, 6.0], [1.60249374E12, 11.0], [1.60249386E12, 10.0], [1.60249368E12, 14.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6024938E12, 270.5], [1.60249374E12, 287.0], [1.60249386E12, 210.0], [1.60249368E12, 282.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60249386E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 25.0, "minX": 1.0, "maxY": 2679.0, "series": [{"data": [[32.0, 304.0], [33.0, 247.5], [34.0, 274.0], [35.0, 275.0], [36.0, 250.5], [37.0, 188.5], [38.0, 217.0], [39.0, 205.0], [41.0, 250.0], [40.0, 220.5], [42.0, 179.5], [44.0, 201.5], [47.0, 200.0], [49.0, 191.0], [3.0, 2679.0], [48.0, 115.5], [50.0, 194.0], [53.0, 123.0], [55.0, 110.0], [7.0, 787.5], [8.0, 344.0], [9.0, 602.5], [10.0, 782.0], [11.0, 25.0], [12.0, 684.5], [13.0, 754.0], [14.0, 571.5], [15.0, 406.0], [16.0, 585.0], [1.0, 812.0], [17.0, 270.0], [18.0, 493.0], [19.0, 377.0], [20.0, 354.5], [21.0, 316.0], [22.0, 408.5], [23.0, 332.0], [24.0, 291.0], [25.0, 368.0], [26.0, 299.5], [27.0, 304.0], [28.0, 322.0], [29.0, 289.5], [30.0, 246.5], [31.0, 278.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 55.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 25.0, "minX": 1.0, "maxY": 2676.0, "series": [{"data": [[32.0, 301.5], [33.0, 244.5], [34.0, 271.5], [35.0, 273.0], [36.0, 248.5], [37.0, 186.0], [38.0, 216.0], [39.0, 199.5], [41.0, 246.0], [40.0, 216.0], [42.0, 177.0], [44.0, 199.0], [47.0, 198.0], [49.0, 188.0], [3.0, 2676.0], [48.0, 113.0], [50.0, 191.0], [53.0, 123.0], [55.0, 109.0], [7.0, 784.0], [8.0, 341.0], [9.0, 602.5], [10.0, 778.5], [11.0, 25.0], [12.0, 680.5], [13.0, 754.0], [14.0, 565.0], [15.0, 401.0], [16.0, 585.0], [1.0, 807.0], [17.0, 267.0], [18.0, 490.5], [19.0, 376.0], [20.0, 350.0], [21.0, 314.0], [22.0, 402.0], [23.0, 329.0], [24.0, 285.5], [25.0, 365.0], [26.0, 297.5], [27.0, 300.0], [28.0, 317.5], [29.0, 286.5], [30.0, 245.0], [31.0, 276.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 55.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 8.1, "minX": 1.60249368E12, "maxY": 29.416666666666668, "series": [{"data": [[1.6024938E12, 28.6], [1.60249374E12, 29.416666666666668], [1.60249386E12, 8.1], [1.60249368E12, 20.383333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60249386E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 8.266666666666667, "minX": 1.60249368E12, "maxY": 29.416666666666668, "series": [{"data": [[1.6024938E12, 28.6], [1.60249374E12, 29.416666666666668], [1.60249386E12, 8.266666666666667], [1.60249368E12, 20.216666666666665]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60249386E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 8.266666666666667, "minX": 1.60249368E12, "maxY": 29.416666666666668, "series": [{"data": [[1.6024938E12, 28.6], [1.60249374E12, 29.416666666666668], [1.60249386E12, 8.266666666666667], [1.60249368E12, 20.216666666666665]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60249386E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 8.266666666666667, "minX": 1.60249368E12, "maxY": 29.416666666666668, "series": [{"data": [[1.6024938E12, 28.6], [1.60249374E12, 29.416666666666668], [1.60249386E12, 8.266666666666667], [1.60249368E12, 20.216666666666665]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60249386E12, "title": "Total Transactions Per Second"}},
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

