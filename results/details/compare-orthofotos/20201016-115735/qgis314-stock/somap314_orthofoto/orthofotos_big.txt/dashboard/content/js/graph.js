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
        data: {"result": {"minY": 6.0, "minX": 0.0, "maxY": 5157.0, "series": [{"data": [[0.0, 6.0], [0.1, 8.0], [0.2, 9.0], [0.3, 11.0], [0.4, 12.0], [0.5, 13.0], [0.6, 15.0], [0.7, 15.0], [0.8, 16.0], [0.9, 17.0], [1.0, 17.0], [1.1, 18.0], [1.2, 18.0], [1.3, 19.0], [1.4, 19.0], [1.5, 20.0], [1.6, 21.0], [1.7, 21.0], [1.8, 22.0], [1.9, 22.0], [2.0, 22.0], [2.1, 23.0], [2.2, 23.0], [2.3, 24.0], [2.4, 24.0], [2.5, 25.0], [2.6, 26.0], [2.7, 26.0], [2.8, 26.0], [2.9, 27.0], [3.0, 27.0], [3.1, 28.0], [3.2, 28.0], [3.3, 29.0], [3.4, 29.0], [3.5, 30.0], [3.6, 30.0], [3.7, 31.0], [3.8, 31.0], [3.9, 32.0], [4.0, 33.0], [4.1, 34.0], [4.2, 35.0], [4.3, 36.0], [4.4, 36.0], [4.5, 37.0], [4.6, 37.0], [4.7, 38.0], [4.8, 38.0], [4.9, 39.0], [5.0, 39.0], [5.1, 40.0], [5.2, 40.0], [5.3, 41.0], [5.4, 41.0], [5.5, 42.0], [5.6, 42.0], [5.7, 43.0], [5.8, 43.0], [5.9, 43.0], [6.0, 45.0], [6.1, 46.0], [6.2, 46.0], [6.3, 47.0], [6.4, 48.0], [6.5, 49.0], [6.6, 50.0], [6.7, 50.0], [6.8, 51.0], [6.9, 52.0], [7.0, 52.0], [7.1, 53.0], [7.2, 53.0], [7.3, 54.0], [7.4, 54.0], [7.5, 54.0], [7.6, 55.0], [7.7, 56.0], [7.8, 56.0], [7.9, 57.0], [8.0, 58.0], [8.1, 59.0], [8.2, 60.0], [8.3, 60.0], [8.4, 61.0], [8.5, 62.0], [8.6, 62.0], [8.7, 63.0], [8.8, 64.0], [8.9, 65.0], [9.0, 66.0], [9.1, 67.0], [9.2, 67.0], [9.3, 68.0], [9.4, 69.0], [9.5, 69.0], [9.6, 70.0], [9.7, 70.0], [9.8, 71.0], [9.9, 72.0], [10.0, 73.0], [10.1, 74.0], [10.2, 75.0], [10.3, 76.0], [10.4, 77.0], [10.5, 78.0], [10.6, 79.0], [10.7, 80.0], [10.8, 81.0], [10.9, 82.0], [11.0, 84.0], [11.1, 86.0], [11.2, 86.0], [11.3, 87.0], [11.4, 88.0], [11.5, 88.0], [11.6, 89.0], [11.7, 90.0], [11.8, 91.0], [11.9, 91.0], [12.0, 92.0], [12.1, 93.0], [12.2, 94.0], [12.3, 94.0], [12.4, 95.0], [12.5, 95.0], [12.6, 96.0], [12.7, 96.0], [12.8, 97.0], [12.9, 98.0], [13.0, 99.0], [13.1, 99.0], [13.2, 99.0], [13.3, 100.0], [13.4, 101.0], [13.5, 101.0], [13.6, 102.0], [13.7, 103.0], [13.8, 103.0], [13.9, 103.0], [14.0, 104.0], [14.1, 105.0], [14.2, 106.0], [14.3, 106.0], [14.4, 107.0], [14.5, 107.0], [14.6, 108.0], [14.7, 108.0], [14.8, 109.0], [14.9, 110.0], [15.0, 111.0], [15.1, 111.0], [15.2, 112.0], [15.3, 113.0], [15.4, 113.0], [15.5, 114.0], [15.6, 115.0], [15.7, 115.0], [15.8, 116.0], [15.9, 116.0], [16.0, 117.0], [16.1, 117.0], [16.2, 117.0], [16.3, 118.0], [16.4, 120.0], [16.5, 120.0], [16.6, 120.0], [16.7, 121.0], [16.8, 122.0], [16.9, 123.0], [17.0, 124.0], [17.1, 124.0], [17.2, 124.0], [17.3, 125.0], [17.4, 126.0], [17.5, 126.0], [17.6, 126.0], [17.7, 127.0], [17.8, 127.0], [17.9, 128.0], [18.0, 128.0], [18.1, 129.0], [18.2, 130.0], [18.3, 130.0], [18.4, 131.0], [18.5, 132.0], [18.6, 133.0], [18.7, 134.0], [18.8, 134.0], [18.9, 135.0], [19.0, 137.0], [19.1, 138.0], [19.2, 139.0], [19.3, 139.0], [19.4, 140.0], [19.5, 140.0], [19.6, 141.0], [19.7, 141.0], [19.8, 142.0], [19.9, 142.0], [20.0, 143.0], [20.1, 144.0], [20.2, 145.0], [20.3, 145.0], [20.4, 146.0], [20.5, 148.0], [20.6, 149.0], [20.7, 150.0], [20.8, 151.0], [20.9, 152.0], [21.0, 153.0], [21.1, 153.0], [21.2, 154.0], [21.3, 154.0], [21.4, 155.0], [21.5, 156.0], [21.6, 156.0], [21.7, 157.0], [21.8, 157.0], [21.9, 158.0], [22.0, 159.0], [22.1, 159.0], [22.2, 160.0], [22.3, 160.0], [22.4, 161.0], [22.5, 161.0], [22.6, 162.0], [22.7, 163.0], [22.8, 163.0], [22.9, 164.0], [23.0, 165.0], [23.1, 165.0], [23.2, 166.0], [23.3, 167.0], [23.4, 167.0], [23.5, 168.0], [23.6, 168.0], [23.7, 169.0], [23.8, 169.0], [23.9, 170.0], [24.0, 170.0], [24.1, 171.0], [24.2, 171.0], [24.3, 172.0], [24.4, 172.0], [24.5, 172.0], [24.6, 173.0], [24.7, 174.0], [24.8, 174.0], [24.9, 175.0], [25.0, 175.0], [25.1, 176.0], [25.2, 176.0], [25.3, 177.0], [25.4, 177.0], [25.5, 177.0], [25.6, 177.0], [25.7, 178.0], [25.8, 178.0], [25.9, 179.0], [26.0, 179.0], [26.1, 179.0], [26.2, 180.0], [26.3, 180.0], [26.4, 180.0], [26.5, 180.0], [26.6, 181.0], [26.7, 181.0], [26.8, 181.0], [26.9, 182.0], [27.0, 182.0], [27.1, 182.0], [27.2, 182.0], [27.3, 183.0], [27.4, 183.0], [27.5, 183.0], [27.6, 184.0], [27.7, 184.0], [27.8, 185.0], [27.9, 185.0], [28.0, 185.0], [28.1, 186.0], [28.2, 186.0], [28.3, 187.0], [28.4, 187.0], [28.5, 187.0], [28.6, 187.0], [28.7, 188.0], [28.8, 188.0], [28.9, 189.0], [29.0, 189.0], [29.1, 190.0], [29.2, 190.0], [29.3, 190.0], [29.4, 191.0], [29.5, 191.0], [29.6, 191.0], [29.7, 191.0], [29.8, 192.0], [29.9, 192.0], [30.0, 192.0], [30.1, 193.0], [30.2, 193.0], [30.3, 193.0], [30.4, 194.0], [30.5, 194.0], [30.6, 195.0], [30.7, 196.0], [30.8, 196.0], [30.9, 196.0], [31.0, 197.0], [31.1, 197.0], [31.2, 197.0], [31.3, 198.0], [31.4, 198.0], [31.5, 198.0], [31.6, 199.0], [31.7, 199.0], [31.8, 200.0], [31.9, 200.0], [32.0, 200.0], [32.1, 201.0], [32.2, 201.0], [32.3, 202.0], [32.4, 202.0], [32.5, 202.0], [32.6, 203.0], [32.7, 203.0], [32.8, 203.0], [32.9, 204.0], [33.0, 204.0], [33.1, 205.0], [33.2, 205.0], [33.3, 206.0], [33.4, 206.0], [33.5, 206.0], [33.6, 207.0], [33.7, 208.0], [33.8, 208.0], [33.9, 208.0], [34.0, 209.0], [34.1, 209.0], [34.2, 210.0], [34.3, 211.0], [34.4, 211.0], [34.5, 211.0], [34.6, 212.0], [34.7, 212.0], [34.8, 213.0], [34.9, 213.0], [35.0, 213.0], [35.1, 214.0], [35.2, 214.0], [35.3, 215.0], [35.4, 215.0], [35.5, 216.0], [35.6, 217.0], [35.7, 217.0], [35.8, 217.0], [35.9, 218.0], [36.0, 219.0], [36.1, 219.0], [36.2, 220.0], [36.3, 220.0], [36.4, 221.0], [36.5, 221.0], [36.6, 222.0], [36.7, 222.0], [36.8, 223.0], [36.9, 223.0], [37.0, 224.0], [37.1, 224.0], [37.2, 224.0], [37.3, 225.0], [37.4, 225.0], [37.5, 226.0], [37.6, 226.0], [37.7, 227.0], [37.8, 227.0], [37.9, 228.0], [38.0, 228.0], [38.1, 228.0], [38.2, 229.0], [38.3, 230.0], [38.4, 231.0], [38.5, 231.0], [38.6, 231.0], [38.7, 232.0], [38.8, 232.0], [38.9, 233.0], [39.0, 233.0], [39.1, 233.0], [39.2, 233.0], [39.3, 234.0], [39.4, 235.0], [39.5, 236.0], [39.6, 236.0], [39.7, 237.0], [39.8, 238.0], [39.9, 239.0], [40.0, 240.0], [40.1, 240.0], [40.2, 240.0], [40.3, 241.0], [40.4, 241.0], [40.5, 242.0], [40.6, 243.0], [40.7, 244.0], [40.8, 244.0], [40.9, 245.0], [41.0, 245.0], [41.1, 246.0], [41.2, 246.0], [41.3, 247.0], [41.4, 247.0], [41.5, 248.0], [41.6, 248.0], [41.7, 249.0], [41.8, 249.0], [41.9, 250.0], [42.0, 251.0], [42.1, 251.0], [42.2, 251.0], [42.3, 252.0], [42.4, 252.0], [42.5, 253.0], [42.6, 253.0], [42.7, 253.0], [42.8, 254.0], [42.9, 255.0], [43.0, 255.0], [43.1, 255.0], [43.2, 256.0], [43.3, 256.0], [43.4, 256.0], [43.5, 257.0], [43.6, 257.0], [43.7, 258.0], [43.8, 258.0], [43.9, 259.0], [44.0, 259.0], [44.1, 260.0], [44.2, 260.0], [44.3, 260.0], [44.4, 260.0], [44.5, 261.0], [44.6, 261.0], [44.7, 261.0], [44.8, 262.0], [44.9, 263.0], [45.0, 263.0], [45.1, 264.0], [45.2, 264.0], [45.3, 264.0], [45.4, 265.0], [45.5, 266.0], [45.6, 266.0], [45.7, 267.0], [45.8, 268.0], [45.9, 268.0], [46.0, 268.0], [46.1, 269.0], [46.2, 269.0], [46.3, 269.0], [46.4, 270.0], [46.5, 270.0], [46.6, 271.0], [46.7, 271.0], [46.8, 272.0], [46.9, 272.0], [47.0, 273.0], [47.1, 273.0], [47.2, 273.0], [47.3, 274.0], [47.4, 274.0], [47.5, 275.0], [47.6, 276.0], [47.7, 276.0], [47.8, 276.0], [47.9, 277.0], [48.0, 278.0], [48.1, 278.0], [48.2, 279.0], [48.3, 279.0], [48.4, 279.0], [48.5, 279.0], [48.6, 280.0], [48.7, 280.0], [48.8, 280.0], [48.9, 280.0], [49.0, 280.0], [49.1, 281.0], [49.2, 281.0], [49.3, 282.0], [49.4, 283.0], [49.5, 283.0], [49.6, 283.0], [49.7, 284.0], [49.8, 284.0], [49.9, 284.0], [50.0, 284.0], [50.1, 285.0], [50.2, 286.0], [50.3, 286.0], [50.4, 287.0], [50.5, 287.0], [50.6, 287.0], [50.7, 288.0], [50.8, 288.0], [50.9, 289.0], [51.0, 289.0], [51.1, 290.0], [51.2, 290.0], [51.3, 290.0], [51.4, 291.0], [51.5, 292.0], [51.6, 292.0], [51.7, 293.0], [51.8, 293.0], [51.9, 294.0], [52.0, 294.0], [52.1, 294.0], [52.2, 295.0], [52.3, 296.0], [52.4, 296.0], [52.5, 296.0], [52.6, 297.0], [52.7, 297.0], [52.8, 298.0], [52.9, 298.0], [53.0, 299.0], [53.1, 299.0], [53.2, 300.0], [53.3, 300.0], [53.4, 301.0], [53.5, 301.0], [53.6, 301.0], [53.7, 302.0], [53.8, 302.0], [53.9, 302.0], [54.0, 302.0], [54.1, 303.0], [54.2, 303.0], [54.3, 304.0], [54.4, 305.0], [54.5, 305.0], [54.6, 305.0], [54.7, 306.0], [54.8, 306.0], [54.9, 307.0], [55.0, 307.0], [55.1, 308.0], [55.2, 308.0], [55.3, 309.0], [55.4, 310.0], [55.5, 310.0], [55.6, 311.0], [55.7, 311.0], [55.8, 312.0], [55.9, 312.0], [56.0, 313.0], [56.1, 313.0], [56.2, 313.0], [56.3, 314.0], [56.4, 316.0], [56.5, 316.0], [56.6, 317.0], [56.7, 317.0], [56.8, 318.0], [56.9, 318.0], [57.0, 319.0], [57.1, 319.0], [57.2, 320.0], [57.3, 320.0], [57.4, 320.0], [57.5, 321.0], [57.6, 321.0], [57.7, 321.0], [57.8, 322.0], [57.9, 323.0], [58.0, 324.0], [58.1, 324.0], [58.2, 324.0], [58.3, 325.0], [58.4, 326.0], [58.5, 326.0], [58.6, 327.0], [58.7, 327.0], [58.8, 328.0], [58.9, 328.0], [59.0, 329.0], [59.1, 329.0], [59.2, 330.0], [59.3, 330.0], [59.4, 331.0], [59.5, 331.0], [59.6, 332.0], [59.7, 332.0], [59.8, 333.0], [59.9, 333.0], [60.0, 333.0], [60.1, 334.0], [60.2, 334.0], [60.3, 334.0], [60.4, 335.0], [60.5, 335.0], [60.6, 335.0], [60.7, 337.0], [60.8, 338.0], [60.9, 338.0], [61.0, 339.0], [61.1, 340.0], [61.2, 340.0], [61.3, 342.0], [61.4, 342.0], [61.5, 342.0], [61.6, 343.0], [61.7, 344.0], [61.8, 345.0], [61.9, 345.0], [62.0, 346.0], [62.1, 346.0], [62.2, 348.0], [62.3, 349.0], [62.4, 349.0], [62.5, 350.0], [62.6, 350.0], [62.7, 351.0], [62.8, 352.0], [62.9, 352.0], [63.0, 353.0], [63.1, 354.0], [63.2, 354.0], [63.3, 355.0], [63.4, 355.0], [63.5, 356.0], [63.6, 357.0], [63.7, 357.0], [63.8, 358.0], [63.9, 358.0], [64.0, 358.0], [64.1, 359.0], [64.2, 359.0], [64.3, 360.0], [64.4, 360.0], [64.5, 361.0], [64.6, 362.0], [64.7, 362.0], [64.8, 363.0], [64.9, 363.0], [65.0, 364.0], [65.1, 364.0], [65.2, 365.0], [65.3, 366.0], [65.4, 366.0], [65.5, 367.0], [65.6, 367.0], [65.7, 368.0], [65.8, 369.0], [65.9, 370.0], [66.0, 370.0], [66.1, 370.0], [66.2, 371.0], [66.3, 371.0], [66.4, 371.0], [66.5, 372.0], [66.6, 373.0], [66.7, 373.0], [66.8, 373.0], [66.9, 373.0], [67.0, 374.0], [67.1, 375.0], [67.2, 375.0], [67.3, 376.0], [67.4, 377.0], [67.5, 377.0], [67.6, 378.0], [67.7, 378.0], [67.8, 379.0], [67.9, 379.0], [68.0, 379.0], [68.1, 380.0], [68.2, 381.0], [68.3, 381.0], [68.4, 381.0], [68.5, 382.0], [68.6, 383.0], [68.7, 383.0], [68.8, 384.0], [68.9, 384.0], [69.0, 385.0], [69.1, 386.0], [69.2, 387.0], [69.3, 387.0], [69.4, 388.0], [69.5, 390.0], [69.6, 390.0], [69.7, 391.0], [69.8, 391.0], [69.9, 391.0], [70.0, 392.0], [70.1, 393.0], [70.2, 393.0], [70.3, 394.0], [70.4, 395.0], [70.5, 395.0], [70.6, 396.0], [70.7, 396.0], [70.8, 397.0], [70.9, 398.0], [71.0, 400.0], [71.1, 400.0], [71.2, 401.0], [71.3, 401.0], [71.4, 402.0], [71.5, 402.0], [71.6, 403.0], [71.7, 404.0], [71.8, 405.0], [71.9, 405.0], [72.0, 406.0], [72.1, 407.0], [72.2, 407.0], [72.3, 408.0], [72.4, 409.0], [72.5, 410.0], [72.6, 411.0], [72.7, 411.0], [72.8, 412.0], [72.9, 412.0], [73.0, 413.0], [73.1, 414.0], [73.2, 415.0], [73.3, 416.0], [73.4, 416.0], [73.5, 417.0], [73.6, 419.0], [73.7, 419.0], [73.8, 421.0], [73.9, 422.0], [74.0, 422.0], [74.1, 422.0], [74.2, 425.0], [74.3, 426.0], [74.4, 426.0], [74.5, 427.0], [74.6, 427.0], [74.7, 428.0], [74.8, 428.0], [74.9, 429.0], [75.0, 430.0], [75.1, 431.0], [75.2, 432.0], [75.3, 433.0], [75.4, 434.0], [75.5, 436.0], [75.6, 436.0], [75.7, 438.0], [75.8, 438.0], [75.9, 440.0], [76.0, 440.0], [76.1, 441.0], [76.2, 443.0], [76.3, 443.0], [76.4, 444.0], [76.5, 445.0], [76.6, 446.0], [76.7, 446.0], [76.8, 447.0], [76.9, 448.0], [77.0, 450.0], [77.1, 450.0], [77.2, 452.0], [77.3, 453.0], [77.4, 454.0], [77.5, 455.0], [77.6, 456.0], [77.7, 457.0], [77.8, 458.0], [77.9, 460.0], [78.0, 460.0], [78.1, 461.0], [78.2, 462.0], [78.3, 463.0], [78.4, 464.0], [78.5, 467.0], [78.6, 468.0], [78.7, 468.0], [78.8, 469.0], [78.9, 471.0], [79.0, 472.0], [79.1, 472.0], [79.2, 473.0], [79.3, 474.0], [79.4, 474.0], [79.5, 476.0], [79.6, 476.0], [79.7, 477.0], [79.8, 478.0], [79.9, 479.0], [80.0, 479.0], [80.1, 480.0], [80.2, 482.0], [80.3, 483.0], [80.4, 483.0], [80.5, 484.0], [80.6, 486.0], [80.7, 486.0], [80.8, 487.0], [80.9, 488.0], [81.0, 489.0], [81.1, 490.0], [81.2, 491.0], [81.3, 492.0], [81.4, 494.0], [81.5, 495.0], [81.6, 497.0], [81.7, 498.0], [81.8, 499.0], [81.9, 499.0], [82.0, 501.0], [82.1, 502.0], [82.2, 504.0], [82.3, 505.0], [82.4, 506.0], [82.5, 507.0], [82.6, 507.0], [82.7, 508.0], [82.8, 509.0], [82.9, 510.0], [83.0, 511.0], [83.1, 512.0], [83.2, 514.0], [83.3, 515.0], [83.4, 515.0], [83.5, 516.0], [83.6, 518.0], [83.7, 520.0], [83.8, 521.0], [83.9, 522.0], [84.0, 524.0], [84.1, 525.0], [84.2, 525.0], [84.3, 527.0], [84.4, 528.0], [84.5, 529.0], [84.6, 530.0], [84.7, 532.0], [84.8, 533.0], [84.9, 534.0], [85.0, 535.0], [85.1, 536.0], [85.2, 537.0], [85.3, 538.0], [85.4, 539.0], [85.5, 541.0], [85.6, 542.0], [85.7, 543.0], [85.8, 544.0], [85.9, 545.0], [86.0, 547.0], [86.1, 548.0], [86.2, 549.0], [86.3, 550.0], [86.4, 552.0], [86.5, 554.0], [86.6, 555.0], [86.7, 556.0], [86.8, 557.0], [86.9, 559.0], [87.0, 560.0], [87.1, 562.0], [87.2, 564.0], [87.3, 567.0], [87.4, 568.0], [87.5, 570.0], [87.6, 571.0], [87.7, 573.0], [87.8, 575.0], [87.9, 577.0], [88.0, 579.0], [88.1, 580.0], [88.2, 582.0], [88.3, 584.0], [88.4, 586.0], [88.5, 588.0], [88.6, 589.0], [88.7, 591.0], [88.8, 594.0], [88.9, 596.0], [89.0, 596.0], [89.1, 598.0], [89.2, 600.0], [89.3, 601.0], [89.4, 603.0], [89.5, 604.0], [89.6, 608.0], [89.7, 612.0], [89.8, 614.0], [89.9, 615.0], [90.0, 617.0], [90.1, 620.0], [90.2, 622.0], [90.3, 623.0], [90.4, 626.0], [90.5, 629.0], [90.6, 633.0], [90.7, 637.0], [90.8, 638.0], [90.9, 641.0], [91.0, 643.0], [91.1, 646.0], [91.2, 647.0], [91.3, 651.0], [91.4, 654.0], [91.5, 655.0], [91.6, 659.0], [91.7, 661.0], [91.8, 663.0], [91.9, 665.0], [92.0, 672.0], [92.1, 677.0], [92.2, 684.0], [92.3, 688.0], [92.4, 692.0], [92.5, 697.0], [92.6, 698.0], [92.7, 703.0], [92.8, 706.0], [92.9, 712.0], [93.0, 715.0], [93.1, 719.0], [93.2, 722.0], [93.3, 725.0], [93.4, 730.0], [93.5, 732.0], [93.6, 736.0], [93.7, 739.0], [93.8, 741.0], [93.9, 746.0], [94.0, 756.0], [94.1, 763.0], [94.2, 769.0], [94.3, 776.0], [94.4, 779.0], [94.5, 783.0], [94.6, 786.0], [94.7, 790.0], [94.8, 797.0], [94.9, 802.0], [95.0, 812.0], [95.1, 817.0], [95.2, 819.0], [95.3, 832.0], [95.4, 840.0], [95.5, 843.0], [95.6, 849.0], [95.7, 853.0], [95.8, 860.0], [95.9, 868.0], [96.0, 871.0], [96.1, 884.0], [96.2, 889.0], [96.3, 897.0], [96.4, 911.0], [96.5, 914.0], [96.6, 923.0], [96.7, 932.0], [96.8, 942.0], [96.9, 949.0], [97.0, 957.0], [97.1, 975.0], [97.2, 988.0], [97.3, 991.0], [97.4, 996.0], [97.5, 1005.0], [97.6, 1016.0], [97.7, 1043.0], [97.8, 1050.0], [97.9, 1063.0], [98.0, 1080.0], [98.1, 1097.0], [98.2, 1110.0], [98.3, 1125.0], [98.4, 1145.0], [98.5, 1177.0], [98.6, 1196.0], [98.7, 1235.0], [98.8, 1289.0], [98.9, 1335.0], [99.0, 1380.0], [99.1, 1466.0], [99.2, 1543.0], [99.3, 1631.0], [99.4, 1701.0], [99.5, 1811.0], [99.6, 2159.0], [99.7, 2855.0], [99.8, 3487.0], [99.9, 4226.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 1110.0, "series": [{"data": [[0.0, 687.0], [600.0, 181.0], [700.0, 115.0], [800.0, 77.0], [900.0, 58.0], [1000.0, 38.0], [1100.0, 23.0], [1200.0, 10.0], [1300.0, 11.0], [1400.0, 6.0], [1500.0, 7.0], [100.0, 962.0], [1600.0, 6.0], [1700.0, 6.0], [1800.0, 1.0], [1900.0, 3.0], [2000.0, 1.0], [2100.0, 2.0], [2400.0, 1.0], [2500.0, 1.0], [2800.0, 2.0], [2700.0, 1.0], [3000.0, 1.0], [200.0, 1110.0], [3300.0, 2.0], [3400.0, 1.0], [3500.0, 2.0], [3700.0, 2.0], [4200.0, 1.0], [4400.0, 2.0], [300.0, 925.0], [4800.0, 1.0], [5100.0, 1.0], [4900.0, 1.0], [400.0, 567.0], [500.0, 375.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 5100.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 45.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 4253.0, "series": [{"data": [[0.0, 4253.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 892.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 45.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.971147540983605, "minX": 1.6028505E12, "maxY": 10.0, "series": [{"data": [[1.60285056E12, 10.0], [1.60285062E12, 10.0], [1.6028505E12, 9.986363636363636], [1.60285068E12, 9.971147540983605]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60285068E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 203.0, "minX": 2.0, "maxY": 656.0, "series": [{"data": [[8.0, 602.0], [4.0, 445.0], [2.0, 407.5], [9.0, 656.0], [10.0, 342.5701042873704], [5.0, 302.0], [6.0, 203.0], [3.0, 654.0], [7.0, 467.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.990944123314112, 342.9556840077061]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 1447.8333333333333, "minX": 1.6028505E12, "maxY": 1.237237825E7, "series": [{"data": [[1.60285056E12, 1.07693179E7], [1.60285062E12, 1.237237825E7], [1.6028505E12, 1733476.75], [1.60285068E12, 1.1068453583333334E7]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60285056E12, 10240.0], [1.60285062E12, 12966.05], [1.6028505E12, 1447.8333333333333], [1.60285068E12, 10489.883333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60285068E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 310.61770833333287, "minX": 1.6028505E12, "maxY": 390.39278688524644, "series": [{"data": [[1.60285056E12, 390.39278688524644], [1.60285062E12, 310.61770833333287], [1.6028505E12, 332.9272727272726], [1.60285068E12, 337.6793442622951]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60285068E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 308.42447916666686, "minX": 1.6028505E12, "maxY": 387.23868852459003, "series": [{"data": [[1.60285056E12, 387.23868852459003], [1.60285062E12, 308.42447916666686], [1.6028505E12, 329.4500000000003], [1.60285068E12, 335.42491803278654]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60285068E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.00937500000000004, "minX": 1.6028505E12, "maxY": 0.3363636363636366, "series": [{"data": [[1.60285056E12, 0.01508196721311478], [1.60285062E12, 0.00937500000000004], [1.6028505E12, 0.3363636363636366], [1.60285068E12, 0.011803278688524585]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60285068E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 6.0, "minX": 1.6028505E12, "maxY": 5157.0, "series": [{"data": [[1.60285056E12, 4822.0], [1.60285062E12, 2159.0], [1.6028505E12, 1147.0], [1.60285068E12, 5157.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60285056E12, 18.0], [1.60285062E12, 17.0], [1.6028505E12, 19.97799989461899], [1.60285068E12, 14.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60285056E12, 19.0], [1.60285062E12, 17.0], [1.6028505E12, 20.56370006322861], [1.60285068E12, 14.1074001455307]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60285056E12, 18.49699981808662], [1.60285062E12, 17.0], [1.6028505E12, 20.29849992096424], [1.60285068E12, 14.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60285056E12, 6.0], [1.60285062E12, 8.0], [1.6028505E12, 18.0], [1.60285068E12, 7.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60285056E12, 296.0], [1.60285062E12, 270.0], [1.6028505E12, 303.5], [1.60285068E12, 293.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60285068E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 51.5, "minX": 1.0, "maxY": 2525.0, "series": [{"data": [[32.0, 282.5], [33.0, 292.5], [35.0, 214.0], [34.0, 287.5], [36.0, 259.0], [37.0, 277.0], [39.0, 232.5], [38.0, 218.0], [41.0, 285.0], [40.0, 251.5], [42.0, 216.0], [43.0, 194.5], [44.0, 206.0], [45.0, 246.5], [47.0, 209.0], [48.0, 253.5], [51.0, 199.0], [55.0, 130.0], [54.0, 161.5], [60.0, 51.5], [4.0, 653.5], [6.0, 835.0], [7.0, 949.0], [9.0, 722.0], [10.0, 415.0], [11.0, 678.5], [12.0, 715.0], [13.0, 375.0], [14.0, 438.5], [1.0, 2525.0], [16.0, 628.0], [17.0, 392.5], [18.0, 408.5], [19.0, 548.0], [20.0, 352.0], [21.0, 413.5], [22.0, 417.5], [23.0, 331.0], [24.0, 462.5], [25.0, 399.0], [26.0, 346.0], [27.0, 320.0], [28.0, 354.0], [29.0, 298.0], [30.0, 302.5], [31.0, 300.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 60.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 51.0, "minX": 1.0, "maxY": 2523.0, "series": [{"data": [[32.0, 278.5], [33.0, 287.0], [35.0, 211.0], [34.0, 286.5], [36.0, 256.0], [37.0, 274.5], [39.0, 230.5], [38.0, 216.5], [41.0, 284.0], [40.0, 248.5], [42.0, 213.5], [43.0, 192.0], [44.0, 205.0], [45.0, 244.5], [47.0, 204.0], [48.0, 251.0], [51.0, 197.0], [55.0, 130.0], [54.0, 161.0], [60.0, 51.0], [4.0, 647.5], [6.0, 833.5], [7.0, 947.0], [9.0, 722.0], [10.0, 415.0], [11.0, 675.5], [12.0, 711.0], [13.0, 374.0], [14.0, 436.0], [1.0, 2523.0], [16.0, 626.0], [17.0, 390.0], [18.0, 406.0], [19.0, 546.0], [20.0, 349.0], [21.0, 407.5], [22.0, 414.5], [23.0, 328.0], [24.0, 459.0], [25.0, 398.0], [26.0, 339.5], [27.0, 319.0], [28.0, 351.5], [29.0, 295.0], [30.0, 298.5], [31.0, 296.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 60.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 3.8333333333333335, "minX": 1.6028505E12, "maxY": 32.0, "series": [{"data": [[1.60285056E12, 25.416666666666668], [1.60285062E12, 32.0], [1.6028505E12, 3.8333333333333335], [1.60285068E12, 25.25]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60285068E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 3.6666666666666665, "minX": 1.6028505E12, "maxY": 32.0, "series": [{"data": [[1.60285056E12, 25.416666666666668], [1.60285062E12, 32.0], [1.6028505E12, 3.6666666666666665], [1.60285068E12, 25.416666666666668]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60285068E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 3.6666666666666665, "minX": 1.6028505E12, "maxY": 32.0, "series": [{"data": [[1.60285056E12, 25.416666666666668], [1.60285062E12, 32.0], [1.6028505E12, 3.6666666666666665], [1.60285068E12, 25.416666666666668]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60285068E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 3.6666666666666665, "minX": 1.6028505E12, "maxY": 32.0, "series": [{"data": [[1.60285056E12, 25.416666666666668], [1.60285062E12, 32.0], [1.6028505E12, 3.6666666666666665], [1.60285068E12, 25.416666666666668]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60285068E12, "title": "Total Transactions Per Second"}},
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

