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
        data: {"result": {"minY": 6.0, "minX": 0.0, "maxY": 5928.0, "series": [{"data": [[0.0, 6.0], [0.1, 7.0], [0.2, 9.0], [0.3, 11.0], [0.4, 13.0], [0.5, 14.0], [0.6, 15.0], [0.7, 16.0], [0.8, 16.0], [0.9, 17.0], [1.0, 17.0], [1.1, 18.0], [1.2, 18.0], [1.3, 19.0], [1.4, 19.0], [1.5, 20.0], [1.6, 21.0], [1.7, 22.0], [1.8, 23.0], [1.9, 23.0], [2.0, 24.0], [2.1, 24.0], [2.2, 24.0], [2.3, 25.0], [2.4, 25.0], [2.5, 26.0], [2.6, 26.0], [2.7, 27.0], [2.8, 27.0], [2.9, 28.0], [3.0, 29.0], [3.1, 29.0], [3.2, 30.0], [3.3, 31.0], [3.4, 32.0], [3.5, 32.0], [3.6, 33.0], [3.7, 34.0], [3.8, 34.0], [3.9, 35.0], [4.0, 35.0], [4.1, 35.0], [4.2, 36.0], [4.3, 37.0], [4.4, 37.0], [4.5, 37.0], [4.6, 38.0], [4.7, 38.0], [4.8, 39.0], [4.9, 40.0], [5.0, 41.0], [5.1, 41.0], [5.2, 42.0], [5.3, 42.0], [5.4, 43.0], [5.5, 43.0], [5.6, 43.0], [5.7, 44.0], [5.8, 45.0], [5.9, 45.0], [6.0, 46.0], [6.1, 47.0], [6.2, 47.0], [6.3, 48.0], [6.4, 49.0], [6.5, 49.0], [6.6, 50.0], [6.7, 51.0], [6.8, 51.0], [6.9, 52.0], [7.0, 52.0], [7.1, 53.0], [7.2, 53.0], [7.3, 54.0], [7.4, 55.0], [7.5, 55.0], [7.6, 56.0], [7.7, 56.0], [7.8, 57.0], [7.9, 58.0], [8.0, 59.0], [8.1, 60.0], [8.2, 61.0], [8.3, 62.0], [8.4, 62.0], [8.5, 63.0], [8.6, 64.0], [8.7, 64.0], [8.8, 65.0], [8.9, 66.0], [9.0, 66.0], [9.1, 67.0], [9.2, 67.0], [9.3, 68.0], [9.4, 68.0], [9.5, 68.0], [9.6, 69.0], [9.7, 70.0], [9.8, 71.0], [9.9, 71.0], [10.0, 72.0], [10.1, 73.0], [10.2, 74.0], [10.3, 74.0], [10.4, 75.0], [10.5, 76.0], [10.6, 77.0], [10.7, 78.0], [10.8, 80.0], [10.9, 81.0], [11.0, 81.0], [11.1, 82.0], [11.2, 83.0], [11.3, 84.0], [11.4, 84.0], [11.5, 85.0], [11.6, 86.0], [11.7, 86.0], [11.8, 87.0], [11.9, 87.0], [12.0, 89.0], [12.1, 89.0], [12.2, 90.0], [12.3, 90.0], [12.4, 91.0], [12.5, 92.0], [12.6, 93.0], [12.7, 94.0], [12.8, 94.0], [12.9, 95.0], [13.0, 96.0], [13.1, 97.0], [13.2, 98.0], [13.3, 99.0], [13.4, 99.0], [13.5, 100.0], [13.6, 101.0], [13.7, 101.0], [13.8, 101.0], [13.9, 102.0], [14.0, 103.0], [14.1, 104.0], [14.2, 105.0], [14.3, 106.0], [14.4, 106.0], [14.5, 107.0], [14.6, 107.0], [14.7, 108.0], [14.8, 109.0], [14.9, 109.0], [15.0, 110.0], [15.1, 110.0], [15.2, 111.0], [15.3, 112.0], [15.4, 112.0], [15.5, 113.0], [15.6, 113.0], [15.7, 114.0], [15.8, 115.0], [15.9, 116.0], [16.0, 116.0], [16.1, 117.0], [16.2, 118.0], [16.3, 119.0], [16.4, 120.0], [16.5, 121.0], [16.6, 121.0], [16.7, 122.0], [16.8, 122.0], [16.9, 123.0], [17.0, 124.0], [17.1, 124.0], [17.2, 125.0], [17.3, 125.0], [17.4, 126.0], [17.5, 126.0], [17.6, 127.0], [17.7, 127.0], [17.8, 128.0], [17.9, 128.0], [18.0, 128.0], [18.1, 129.0], [18.2, 129.0], [18.3, 130.0], [18.4, 130.0], [18.5, 131.0], [18.6, 131.0], [18.7, 132.0], [18.8, 132.0], [18.9, 133.0], [19.0, 133.0], [19.1, 134.0], [19.2, 134.0], [19.3, 135.0], [19.4, 136.0], [19.5, 136.0], [19.6, 137.0], [19.7, 138.0], [19.8, 138.0], [19.9, 139.0], [20.0, 140.0], [20.1, 141.0], [20.2, 141.0], [20.3, 142.0], [20.4, 143.0], [20.5, 143.0], [20.6, 143.0], [20.7, 144.0], [20.8, 145.0], [20.9, 146.0], [21.0, 146.0], [21.1, 147.0], [21.2, 147.0], [21.3, 148.0], [21.4, 148.0], [21.5, 149.0], [21.6, 150.0], [21.7, 151.0], [21.8, 152.0], [21.9, 152.0], [22.0, 153.0], [22.1, 154.0], [22.2, 154.0], [22.3, 154.0], [22.4, 155.0], [22.5, 155.0], [22.6, 156.0], [22.7, 157.0], [22.8, 157.0], [22.9, 157.0], [23.0, 158.0], [23.1, 158.0], [23.2, 159.0], [23.3, 159.0], [23.4, 159.0], [23.5, 160.0], [23.6, 160.0], [23.7, 161.0], [23.8, 161.0], [23.9, 162.0], [24.0, 163.0], [24.1, 163.0], [24.2, 164.0], [24.3, 164.0], [24.4, 165.0], [24.5, 165.0], [24.6, 165.0], [24.7, 166.0], [24.8, 167.0], [24.9, 167.0], [25.0, 168.0], [25.1, 168.0], [25.2, 169.0], [25.3, 169.0], [25.4, 170.0], [25.5, 170.0], [25.6, 171.0], [25.7, 171.0], [25.8, 171.0], [25.9, 172.0], [26.0, 172.0], [26.1, 172.0], [26.2, 173.0], [26.3, 173.0], [26.4, 174.0], [26.5, 174.0], [26.6, 175.0], [26.7, 175.0], [26.8, 175.0], [26.9, 176.0], [27.0, 176.0], [27.1, 176.0], [27.2, 177.0], [27.3, 177.0], [27.4, 177.0], [27.5, 178.0], [27.6, 178.0], [27.7, 178.0], [27.8, 179.0], [27.9, 179.0], [28.0, 180.0], [28.1, 180.0], [28.2, 180.0], [28.3, 181.0], [28.4, 181.0], [28.5, 181.0], [28.6, 181.0], [28.7, 182.0], [28.8, 182.0], [28.9, 182.0], [29.0, 182.0], [29.1, 183.0], [29.2, 183.0], [29.3, 183.0], [29.4, 183.0], [29.5, 184.0], [29.6, 184.0], [29.7, 184.0], [29.8, 184.0], [29.9, 185.0], [30.0, 185.0], [30.1, 185.0], [30.2, 186.0], [30.3, 186.0], [30.4, 186.0], [30.5, 186.0], [30.6, 186.0], [30.7, 186.0], [30.8, 187.0], [30.9, 187.0], [31.0, 187.0], [31.1, 188.0], [31.2, 188.0], [31.3, 188.0], [31.4, 189.0], [31.5, 189.0], [31.6, 189.0], [31.7, 190.0], [31.8, 190.0], [31.9, 190.0], [32.0, 190.0], [32.1, 191.0], [32.2, 191.0], [32.3, 192.0], [32.4, 192.0], [32.5, 193.0], [32.6, 193.0], [32.7, 193.0], [32.8, 194.0], [32.9, 194.0], [33.0, 194.0], [33.1, 195.0], [33.2, 195.0], [33.3, 195.0], [33.4, 196.0], [33.5, 196.0], [33.6, 196.0], [33.7, 196.0], [33.8, 197.0], [33.9, 197.0], [34.0, 198.0], [34.1, 198.0], [34.2, 199.0], [34.3, 199.0], [34.4, 199.0], [34.5, 199.0], [34.6, 200.0], [34.7, 200.0], [34.8, 200.0], [34.9, 201.0], [35.0, 201.0], [35.1, 201.0], [35.2, 202.0], [35.3, 202.0], [35.4, 203.0], [35.5, 203.0], [35.6, 203.0], [35.7, 204.0], [35.8, 204.0], [35.9, 205.0], [36.0, 205.0], [36.1, 205.0], [36.2, 206.0], [36.3, 207.0], [36.4, 207.0], [36.5, 208.0], [36.6, 208.0], [36.7, 208.0], [36.8, 209.0], [36.9, 209.0], [37.0, 210.0], [37.1, 210.0], [37.2, 210.0], [37.3, 210.0], [37.4, 212.0], [37.5, 212.0], [37.6, 212.0], [37.7, 213.0], [37.8, 213.0], [37.9, 214.0], [38.0, 214.0], [38.1, 215.0], [38.2, 215.0], [38.3, 215.0], [38.4, 215.0], [38.5, 216.0], [38.6, 216.0], [38.7, 217.0], [38.8, 217.0], [38.9, 218.0], [39.0, 218.0], [39.1, 218.0], [39.2, 219.0], [39.3, 219.0], [39.4, 220.0], [39.5, 221.0], [39.6, 221.0], [39.7, 222.0], [39.8, 222.0], [39.9, 223.0], [40.0, 224.0], [40.1, 224.0], [40.2, 224.0], [40.3, 225.0], [40.4, 225.0], [40.5, 226.0], [40.6, 227.0], [40.7, 227.0], [40.8, 227.0], [40.9, 227.0], [41.0, 228.0], [41.1, 229.0], [41.2, 229.0], [41.3, 230.0], [41.4, 231.0], [41.5, 231.0], [41.6, 232.0], [41.7, 233.0], [41.8, 233.0], [41.9, 234.0], [42.0, 234.0], [42.1, 234.0], [42.2, 235.0], [42.3, 236.0], [42.4, 237.0], [42.5, 237.0], [42.6, 237.0], [42.7, 238.0], [42.8, 239.0], [42.9, 239.0], [43.0, 240.0], [43.1, 240.0], [43.2, 241.0], [43.3, 241.0], [43.4, 242.0], [43.5, 243.0], [43.6, 243.0], [43.7, 244.0], [43.8, 245.0], [43.9, 245.0], [44.0, 246.0], [44.1, 246.0], [44.2, 247.0], [44.3, 247.0], [44.4, 247.0], [44.5, 248.0], [44.6, 248.0], [44.7, 249.0], [44.8, 249.0], [44.9, 249.0], [45.0, 250.0], [45.1, 250.0], [45.2, 251.0], [45.3, 252.0], [45.4, 253.0], [45.5, 253.0], [45.6, 254.0], [45.7, 254.0], [45.8, 255.0], [45.9, 255.0], [46.0, 256.0], [46.1, 256.0], [46.2, 257.0], [46.3, 257.0], [46.4, 257.0], [46.5, 257.0], [46.6, 258.0], [46.7, 258.0], [46.8, 259.0], [46.9, 259.0], [47.0, 260.0], [47.1, 260.0], [47.2, 260.0], [47.3, 260.0], [47.4, 262.0], [47.5, 262.0], [47.6, 262.0], [47.7, 263.0], [47.8, 263.0], [47.9, 264.0], [48.0, 264.0], [48.1, 264.0], [48.2, 265.0], [48.3, 265.0], [48.4, 266.0], [48.5, 266.0], [48.6, 266.0], [48.7, 267.0], [48.8, 267.0], [48.9, 268.0], [49.0, 268.0], [49.1, 268.0], [49.2, 269.0], [49.3, 269.0], [49.4, 270.0], [49.5, 270.0], [49.6, 270.0], [49.7, 271.0], [49.8, 271.0], [49.9, 271.0], [50.0, 272.0], [50.1, 272.0], [50.2, 272.0], [50.3, 273.0], [50.4, 273.0], [50.5, 274.0], [50.6, 274.0], [50.7, 275.0], [50.8, 275.0], [50.9, 276.0], [51.0, 276.0], [51.1, 276.0], [51.2, 277.0], [51.3, 277.0], [51.4, 278.0], [51.5, 278.0], [51.6, 279.0], [51.7, 279.0], [51.8, 279.0], [51.9, 280.0], [52.0, 280.0], [52.1, 281.0], [52.2, 281.0], [52.3, 281.0], [52.4, 282.0], [52.5, 282.0], [52.6, 283.0], [52.7, 283.0], [52.8, 283.0], [52.9, 283.0], [53.0, 284.0], [53.1, 285.0], [53.2, 285.0], [53.3, 286.0], [53.4, 286.0], [53.5, 287.0], [53.6, 287.0], [53.7, 287.0], [53.8, 288.0], [53.9, 289.0], [54.0, 289.0], [54.1, 290.0], [54.2, 290.0], [54.3, 291.0], [54.4, 291.0], [54.5, 292.0], [54.6, 292.0], [54.7, 292.0], [54.8, 293.0], [54.9, 294.0], [55.0, 294.0], [55.1, 295.0], [55.2, 295.0], [55.3, 296.0], [55.4, 296.0], [55.5, 297.0], [55.6, 297.0], [55.7, 297.0], [55.8, 298.0], [55.9, 299.0], [56.0, 299.0], [56.1, 300.0], [56.2, 301.0], [56.3, 301.0], [56.4, 301.0], [56.5, 302.0], [56.6, 303.0], [56.7, 303.0], [56.8, 304.0], [56.9, 305.0], [57.0, 305.0], [57.1, 306.0], [57.2, 306.0], [57.3, 307.0], [57.4, 308.0], [57.5, 309.0], [57.6, 309.0], [57.7, 310.0], [57.8, 311.0], [57.9, 312.0], [58.0, 312.0], [58.1, 313.0], [58.2, 313.0], [58.3, 314.0], [58.4, 314.0], [58.5, 315.0], [58.6, 315.0], [58.7, 315.0], [58.8, 317.0], [58.9, 317.0], [59.0, 318.0], [59.1, 319.0], [59.2, 320.0], [59.3, 320.0], [59.4, 321.0], [59.5, 322.0], [59.6, 322.0], [59.7, 323.0], [59.8, 323.0], [59.9, 324.0], [60.0, 324.0], [60.1, 325.0], [60.2, 325.0], [60.3, 326.0], [60.4, 327.0], [60.5, 328.0], [60.6, 329.0], [60.7, 329.0], [60.8, 329.0], [60.9, 330.0], [61.0, 331.0], [61.1, 332.0], [61.2, 332.0], [61.3, 333.0], [61.4, 333.0], [61.5, 334.0], [61.6, 335.0], [61.7, 336.0], [61.8, 336.0], [61.9, 337.0], [62.0, 337.0], [62.1, 338.0], [62.2, 338.0], [62.3, 339.0], [62.4, 340.0], [62.5, 340.0], [62.6, 340.0], [62.7, 341.0], [62.8, 342.0], [62.9, 342.0], [63.0, 343.0], [63.1, 343.0], [63.2, 343.0], [63.3, 344.0], [63.4, 344.0], [63.5, 345.0], [63.6, 345.0], [63.7, 346.0], [63.8, 347.0], [63.9, 348.0], [64.0, 348.0], [64.1, 349.0], [64.2, 350.0], [64.3, 351.0], [64.4, 351.0], [64.5, 352.0], [64.6, 352.0], [64.7, 352.0], [64.8, 353.0], [64.9, 353.0], [65.0, 354.0], [65.1, 354.0], [65.2, 355.0], [65.3, 356.0], [65.4, 356.0], [65.5, 357.0], [65.6, 358.0], [65.7, 358.0], [65.8, 360.0], [65.9, 361.0], [66.0, 361.0], [66.1, 361.0], [66.2, 362.0], [66.3, 362.0], [66.4, 362.0], [66.5, 363.0], [66.6, 364.0], [66.7, 364.0], [66.8, 365.0], [66.9, 366.0], [67.0, 367.0], [67.1, 368.0], [67.2, 368.0], [67.3, 368.0], [67.4, 369.0], [67.5, 369.0], [67.6, 369.0], [67.7, 370.0], [67.8, 371.0], [67.9, 371.0], [68.0, 372.0], [68.1, 372.0], [68.2, 372.0], [68.3, 373.0], [68.4, 373.0], [68.5, 374.0], [68.6, 374.0], [68.7, 375.0], [68.8, 375.0], [68.9, 376.0], [69.0, 377.0], [69.1, 377.0], [69.2, 377.0], [69.3, 378.0], [69.4, 378.0], [69.5, 379.0], [69.6, 380.0], [69.7, 380.0], [69.8, 380.0], [69.9, 381.0], [70.0, 382.0], [70.1, 382.0], [70.2, 383.0], [70.3, 384.0], [70.4, 384.0], [70.5, 385.0], [70.6, 386.0], [70.7, 387.0], [70.8, 388.0], [70.9, 388.0], [71.0, 389.0], [71.1, 390.0], [71.2, 391.0], [71.3, 392.0], [71.4, 392.0], [71.5, 393.0], [71.6, 393.0], [71.7, 394.0], [71.8, 396.0], [71.9, 396.0], [72.0, 397.0], [72.1, 398.0], [72.2, 399.0], [72.3, 399.0], [72.4, 400.0], [72.5, 400.0], [72.6, 401.0], [72.7, 402.0], [72.8, 403.0], [72.9, 404.0], [73.0, 405.0], [73.1, 406.0], [73.2, 407.0], [73.3, 407.0], [73.4, 408.0], [73.5, 408.0], [73.6, 410.0], [73.7, 411.0], [73.8, 412.0], [73.9, 413.0], [74.0, 414.0], [74.1, 414.0], [74.2, 414.0], [74.3, 415.0], [74.4, 416.0], [74.5, 417.0], [74.6, 419.0], [74.7, 419.0], [74.8, 420.0], [74.9, 421.0], [75.0, 422.0], [75.1, 422.0], [75.2, 423.0], [75.3, 423.0], [75.4, 424.0], [75.5, 425.0], [75.6, 426.0], [75.7, 426.0], [75.8, 427.0], [75.9, 428.0], [76.0, 429.0], [76.1, 429.0], [76.2, 430.0], [76.3, 431.0], [76.4, 431.0], [76.5, 432.0], [76.6, 433.0], [76.7, 433.0], [76.8, 434.0], [76.9, 435.0], [77.0, 436.0], [77.1, 437.0], [77.2, 438.0], [77.3, 439.0], [77.4, 439.0], [77.5, 440.0], [77.6, 441.0], [77.7, 442.0], [77.8, 442.0], [77.9, 443.0], [78.0, 444.0], [78.1, 445.0], [78.2, 445.0], [78.3, 446.0], [78.4, 446.0], [78.5, 448.0], [78.6, 448.0], [78.7, 449.0], [78.8, 449.0], [78.9, 450.0], [79.0, 451.0], [79.1, 452.0], [79.2, 453.0], [79.3, 454.0], [79.4, 454.0], [79.5, 456.0], [79.6, 457.0], [79.7, 458.0], [79.8, 458.0], [79.9, 459.0], [80.0, 461.0], [80.1, 461.0], [80.2, 463.0], [80.3, 463.0], [80.4, 465.0], [80.5, 466.0], [80.6, 467.0], [80.7, 468.0], [80.8, 468.0], [80.9, 469.0], [81.0, 470.0], [81.1, 471.0], [81.2, 473.0], [81.3, 473.0], [81.4, 475.0], [81.5, 477.0], [81.6, 479.0], [81.7, 479.0], [81.8, 480.0], [81.9, 480.0], [82.0, 481.0], [82.1, 482.0], [82.2, 484.0], [82.3, 484.0], [82.4, 486.0], [82.5, 487.0], [82.6, 487.0], [82.7, 488.0], [82.8, 490.0], [82.9, 491.0], [83.0, 493.0], [83.1, 493.0], [83.2, 494.0], [83.3, 496.0], [83.4, 498.0], [83.5, 499.0], [83.6, 500.0], [83.7, 501.0], [83.8, 503.0], [83.9, 504.0], [84.0, 505.0], [84.1, 507.0], [84.2, 507.0], [84.3, 510.0], [84.4, 510.0], [84.5, 512.0], [84.6, 512.0], [84.7, 513.0], [84.8, 515.0], [84.9, 517.0], [85.0, 518.0], [85.1, 519.0], [85.2, 520.0], [85.3, 522.0], [85.4, 523.0], [85.5, 525.0], [85.6, 526.0], [85.7, 527.0], [85.8, 528.0], [85.9, 529.0], [86.0, 531.0], [86.1, 532.0], [86.2, 533.0], [86.3, 534.0], [86.4, 535.0], [86.5, 535.0], [86.6, 536.0], [86.7, 537.0], [86.8, 538.0], [86.9, 539.0], [87.0, 540.0], [87.1, 542.0], [87.2, 543.0], [87.3, 545.0], [87.4, 546.0], [87.5, 547.0], [87.6, 548.0], [87.7, 549.0], [87.8, 551.0], [87.9, 553.0], [88.0, 554.0], [88.1, 555.0], [88.2, 557.0], [88.3, 558.0], [88.4, 561.0], [88.5, 562.0], [88.6, 564.0], [88.7, 567.0], [88.8, 568.0], [88.9, 570.0], [89.0, 571.0], [89.1, 572.0], [89.2, 573.0], [89.3, 574.0], [89.4, 578.0], [89.5, 580.0], [89.6, 582.0], [89.7, 584.0], [89.8, 586.0], [89.9, 589.0], [90.0, 591.0], [90.1, 593.0], [90.2, 596.0], [90.3, 599.0], [90.4, 600.0], [90.5, 603.0], [90.6, 605.0], [90.7, 607.0], [90.8, 612.0], [90.9, 616.0], [91.0, 617.0], [91.1, 619.0], [91.2, 622.0], [91.3, 624.0], [91.4, 628.0], [91.5, 630.0], [91.6, 633.0], [91.7, 635.0], [91.8, 638.0], [91.9, 640.0], [92.0, 643.0], [92.1, 644.0], [92.2, 647.0], [92.3, 648.0], [92.4, 650.0], [92.5, 655.0], [92.6, 656.0], [92.7, 659.0], [92.8, 663.0], [92.9, 664.0], [93.0, 666.0], [93.1, 671.0], [93.2, 673.0], [93.3, 676.0], [93.4, 678.0], [93.5, 681.0], [93.6, 684.0], [93.7, 691.0], [93.8, 695.0], [93.9, 699.0], [94.0, 703.0], [94.1, 710.0], [94.2, 712.0], [94.3, 716.0], [94.4, 727.0], [94.5, 737.0], [94.6, 744.0], [94.7, 747.0], [94.8, 749.0], [94.9, 754.0], [95.0, 756.0], [95.1, 762.0], [95.2, 772.0], [95.3, 783.0], [95.4, 787.0], [95.5, 791.0], [95.6, 797.0], [95.7, 805.0], [95.8, 819.0], [95.9, 825.0], [96.0, 831.0], [96.1, 838.0], [96.2, 841.0], [96.3, 849.0], [96.4, 856.0], [96.5, 863.0], [96.6, 867.0], [96.7, 875.0], [96.8, 898.0], [96.9, 906.0], [97.0, 917.0], [97.1, 928.0], [97.2, 943.0], [97.3, 981.0], [97.4, 996.0], [97.5, 1013.0], [97.6, 1029.0], [97.7, 1033.0], [97.8, 1050.0], [97.9, 1067.0], [98.0, 1078.0], [98.1, 1123.0], [98.2, 1136.0], [98.3, 1148.0], [98.4, 1190.0], [98.5, 1216.0], [98.6, 1231.0], [98.7, 1240.0], [98.8, 1267.0], [98.9, 1322.0], [99.0, 1364.0], [99.1, 1425.0], [99.2, 1476.0], [99.3, 1490.0], [99.4, 1545.0], [99.5, 1833.0], [99.6, 2420.0], [99.7, 2868.0], [99.8, 3496.0], [99.9, 3939.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 1113.0, "series": [{"data": [[0.0, 697.0], [600.0, 187.0], [700.0, 86.0], [800.0, 62.0], [900.0, 32.0], [1000.0, 34.0], [1100.0, 21.0], [1200.0, 19.0], [1300.0, 10.0], [1400.0, 14.0], [1500.0, 7.0], [100.0, 1097.0], [1600.0, 1.0], [1700.0, 2.0], [1800.0, 2.0], [2300.0, 1.0], [2200.0, 2.0], [2400.0, 2.0], [2500.0, 3.0], [2800.0, 2.0], [3100.0, 1.0], [200.0, 1113.0], [3200.0, 1.0], [3300.0, 1.0], [3400.0, 3.0], [3600.0, 1.0], [3700.0, 1.0], [3900.0, 1.0], [4200.0, 1.0], [4600.0, 1.0], [300.0, 850.0], [4800.0, 1.0], [4900.0, 1.0], [5900.0, 1.0], [400.0, 579.0], [500.0, 353.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 5900.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 36.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 4339.0, "series": [{"data": [[0.0, 4339.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 815.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 36.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.957264957264957, "minX": 1.60266498E12, "maxY": 10.0, "series": [{"data": [[1.60266498E12, 9.994863013698646], [1.60266516E12, 9.957264957264957], [1.60266504E12, 10.0], [1.6026651E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60266516E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 176.0, "minX": 1.0, "maxY": 700.0, "series": [{"data": [[8.0, 414.0], [4.0, 402.0], [2.0, 379.0], [1.0, 479.0], [9.0, 700.0], [10.0, 331.0204672716742], [5.0, 523.0], [6.0, 176.0], [3.0, 268.0], [7.0, 555.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.990751445086751, 331.28420038535756]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 3862.5833333333335, "minX": 1.60266498E12, "maxY": 1.4039845166666666E7, "series": [{"data": [[1.60266498E12, 4277693.566666666], [1.60266516E12, 7008960.6], [1.60266504E12, 1.061712715E7], [1.6026651E12, 1.4039845166666666E7]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60266498E12, 3862.5833333333335], [1.60266516E12, 7300.733333333334], [1.60266504E12, 10261.6], [1.6026651E12, 13718.85]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60266516E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 290.2142156862739, "minX": 1.60266498E12, "maxY": 394.06675479180444, "series": [{"data": [[1.60266498E12, 309.4383561643837], [1.60266516E12, 332.75688509021785], [1.60266504E12, 394.06675479180444], [1.6026651E12, 290.2142156862739]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60266516E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 288.0975490196067, "minX": 1.60266498E12, "maxY": 391.1943159286187, "series": [{"data": [[1.60266498E12, 306.0325342465753], [1.60266516E12, 330.60873694207027], [1.60266504E12, 391.1943159286187], [1.6026651E12, 288.0975490196067]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60266516E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.006609385327164583, "minX": 1.60266498E12, "maxY": 0.22431506849315105, "series": [{"data": [[1.60266498E12, 0.22431506849315105], [1.60266516E12, 0.007597340930674273], [1.60266504E12, 0.006609385327164583], [1.6026651E12, 0.01323529411764705]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60266516E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 6.0, "minX": 1.60266498E12, "maxY": 5928.0, "series": [{"data": [[1.60266498E12, 2420.0], [1.60266516E12, 5928.0], [1.60266504E12, 4964.0], [1.6026651E12, 1796.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60266498E12, 23.854999023675923], [1.60266516E12, 14.485999748706817], [1.60266504E12, 16.62599963903427], [1.6026651E12, 18.36899951338768]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60266498E12, 27.540500390529637], [1.60266516E12, 15.0], [1.60266504E12, 17.0], [1.6026651E12, 19.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60266498E12, 25.90249951183796], [1.60266516E12, 15.0], [1.60266504E12, 17.0], [1.6026651E12, 19.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60266498E12, 10.0], [1.60266516E12, 6.0], [1.60266504E12, 6.0], [1.6026651E12, 7.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60266498E12, 261.5], [1.60266516E12, 267.0], [1.60266504E12, 308.0], [1.6026651E12, 258.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60266516E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 72.0, "minX": 1.0, "maxY": 2554.0, "series": [{"data": [[33.0, 270.0], [2.0, 909.5], [32.0, 295.5], [34.0, 268.5], [35.0, 247.0], [36.0, 250.0], [37.0, 260.0], [39.0, 257.5], [38.0, 244.0], [40.0, 250.5], [41.0, 215.0], [42.0, 209.5], [43.0, 206.5], [44.0, 206.0], [46.0, 199.5], [48.0, 173.0], [50.0, 190.5], [51.0, 176.0], [53.0, 149.0], [54.0, 152.5], [57.0, 158.0], [62.0, 72.0], [4.0, 1067.5], [6.0, 560.5], [7.0, 1051.0], [10.0, 354.5], [11.0, 2554.0], [13.0, 548.5], [14.0, 649.5], [15.0, 831.0], [1.0, 567.0], [16.0, 495.0], [17.0, 317.5], [18.0, 464.5], [19.0, 477.0], [20.0, 305.0], [21.0, 395.0], [22.0, 366.5], [23.0, 347.0], [24.0, 404.5], [25.0, 339.5], [26.0, 381.0], [27.0, 322.0], [28.0, 330.0], [29.0, 338.0], [30.0, 306.0], [31.0, 283.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 62.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 71.5, "minX": 1.0, "maxY": 2553.0, "series": [{"data": [[33.0, 266.0], [2.0, 908.0], [32.0, 293.0], [34.0, 267.5], [35.0, 245.0], [36.0, 247.0], [37.0, 257.0], [39.0, 256.5], [38.0, 241.5], [40.0, 247.5], [41.0, 202.0], [42.0, 207.0], [43.0, 203.5], [44.0, 204.5], [46.0, 195.5], [48.0, 170.5], [50.0, 189.0], [51.0, 175.0], [53.0, 148.0], [54.0, 151.5], [57.0, 156.0], [62.0, 71.5], [4.0, 1066.5], [6.0, 560.0], [7.0, 1048.0], [10.0, 354.5], [11.0, 2553.0], [13.0, 547.5], [14.0, 646.0], [15.0, 827.0], [1.0, 559.0], [16.0, 492.0], [17.0, 316.5], [18.0, 463.5], [19.0, 475.0], [20.0, 304.5], [21.0, 394.0], [22.0, 364.5], [23.0, 344.0], [24.0, 402.0], [25.0, 335.5], [26.0, 375.5], [27.0, 320.0], [28.0, 324.5], [29.0, 332.0], [30.0, 303.5], [31.0, 281.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 62.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 9.9, "minX": 1.60266498E12, "maxY": 34.0, "series": [{"data": [[1.60266498E12, 9.9], [1.60266516E12, 17.383333333333333], [1.60266504E12, 25.216666666666665], [1.6026651E12, 34.0]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60266516E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 9.733333333333333, "minX": 1.60266498E12, "maxY": 34.0, "series": [{"data": [[1.60266498E12, 9.733333333333333], [1.60266516E12, 17.55], [1.60266504E12, 25.216666666666665], [1.6026651E12, 34.0]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60266516E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 9.733333333333333, "minX": 1.60266498E12, "maxY": 34.0, "series": [{"data": [[1.60266498E12, 9.733333333333333], [1.60266516E12, 17.55], [1.60266504E12, 25.216666666666665], [1.6026651E12, 34.0]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60266516E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 9.733333333333333, "minX": 1.60266498E12, "maxY": 34.0, "series": [{"data": [[1.60266498E12, 9.733333333333333], [1.60266516E12, 17.55], [1.60266504E12, 25.216666666666665], [1.6026651E12, 34.0]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60266516E12, "title": "Total Transactions Per Second"}},
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

