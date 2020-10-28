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
        data: {"result": {"minY": 4.0, "minX": 0.0, "maxY": 4538.0, "series": [{"data": [[0.0, 4.0], [0.1, 7.0], [0.2, 11.0], [0.3, 14.0], [0.4, 14.0], [0.5, 15.0], [0.6, 16.0], [0.7, 16.0], [0.8, 17.0], [0.9, 18.0], [1.0, 18.0], [1.1, 19.0], [1.2, 19.0], [1.3, 20.0], [1.4, 20.0], [1.5, 20.0], [1.6, 21.0], [1.7, 22.0], [1.8, 22.0], [1.9, 23.0], [2.0, 23.0], [2.1, 23.0], [2.2, 23.0], [2.3, 24.0], [2.4, 24.0], [2.5, 25.0], [2.6, 25.0], [2.7, 25.0], [2.8, 26.0], [2.9, 26.0], [3.0, 27.0], [3.1, 28.0], [3.2, 28.0], [3.3, 29.0], [3.4, 29.0], [3.5, 30.0], [3.6, 31.0], [3.7, 32.0], [3.8, 33.0], [3.9, 34.0], [4.0, 34.0], [4.1, 35.0], [4.2, 35.0], [4.3, 36.0], [4.4, 36.0], [4.5, 37.0], [4.6, 37.0], [4.7, 38.0], [4.8, 38.0], [4.9, 39.0], [5.0, 39.0], [5.1, 39.0], [5.2, 40.0], [5.3, 40.0], [5.4, 40.0], [5.5, 41.0], [5.6, 41.0], [5.7, 42.0], [5.8, 43.0], [5.9, 44.0], [6.0, 44.0], [6.1, 45.0], [6.2, 46.0], [6.3, 46.0], [6.4, 47.0], [6.5, 47.0], [6.6, 49.0], [6.7, 49.0], [6.8, 50.0], [6.9, 50.0], [7.0, 51.0], [7.1, 52.0], [7.2, 53.0], [7.3, 53.0], [7.4, 54.0], [7.5, 55.0], [7.6, 55.0], [7.7, 56.0], [7.8, 56.0], [7.9, 57.0], [8.0, 58.0], [8.1, 59.0], [8.2, 59.0], [8.3, 60.0], [8.4, 61.0], [8.5, 61.0], [8.6, 62.0], [8.7, 63.0], [8.8, 64.0], [8.9, 64.0], [9.0, 66.0], [9.1, 66.0], [9.2, 68.0], [9.3, 69.0], [9.4, 69.0], [9.5, 70.0], [9.6, 70.0], [9.7, 71.0], [9.8, 72.0], [9.9, 74.0], [10.0, 74.0], [10.1, 76.0], [10.2, 76.0], [10.3, 77.0], [10.4, 77.0], [10.5, 78.0], [10.6, 79.0], [10.7, 79.0], [10.8, 80.0], [10.9, 81.0], [11.0, 83.0], [11.1, 83.0], [11.2, 85.0], [11.3, 86.0], [11.4, 86.0], [11.5, 88.0], [11.6, 88.0], [11.7, 88.0], [11.8, 90.0], [11.9, 91.0], [12.0, 91.0], [12.1, 92.0], [12.2, 93.0], [12.3, 94.0], [12.4, 94.0], [12.5, 94.0], [12.6, 95.0], [12.7, 95.0], [12.8, 96.0], [12.9, 97.0], [13.0, 98.0], [13.1, 98.0], [13.2, 99.0], [13.3, 100.0], [13.4, 102.0], [13.5, 102.0], [13.6, 103.0], [13.7, 103.0], [13.8, 103.0], [13.9, 104.0], [14.0, 104.0], [14.1, 105.0], [14.2, 106.0], [14.3, 106.0], [14.4, 107.0], [14.5, 107.0], [14.6, 108.0], [14.7, 109.0], [14.8, 109.0], [14.9, 110.0], [15.0, 110.0], [15.1, 111.0], [15.2, 111.0], [15.3, 112.0], [15.4, 113.0], [15.5, 114.0], [15.6, 114.0], [15.7, 115.0], [15.8, 115.0], [15.9, 115.0], [16.0, 116.0], [16.1, 116.0], [16.2, 116.0], [16.3, 117.0], [16.4, 118.0], [16.5, 118.0], [16.6, 119.0], [16.7, 119.0], [16.8, 120.0], [16.9, 121.0], [17.0, 121.0], [17.1, 122.0], [17.2, 123.0], [17.3, 124.0], [17.4, 124.0], [17.5, 125.0], [17.6, 125.0], [17.7, 126.0], [17.8, 126.0], [17.9, 127.0], [18.0, 127.0], [18.1, 128.0], [18.2, 129.0], [18.3, 129.0], [18.4, 129.0], [18.5, 130.0], [18.6, 130.0], [18.7, 132.0], [18.8, 132.0], [18.9, 133.0], [19.0, 134.0], [19.1, 134.0], [19.2, 135.0], [19.3, 136.0], [19.4, 137.0], [19.5, 137.0], [19.6, 138.0], [19.7, 139.0], [19.8, 140.0], [19.9, 140.0], [20.0, 140.0], [20.1, 141.0], [20.2, 142.0], [20.3, 142.0], [20.4, 143.0], [20.5, 144.0], [20.6, 145.0], [20.7, 145.0], [20.8, 146.0], [20.9, 146.0], [21.0, 147.0], [21.1, 148.0], [21.2, 148.0], [21.3, 149.0], [21.4, 150.0], [21.5, 150.0], [21.6, 151.0], [21.7, 152.0], [21.8, 153.0], [21.9, 153.0], [22.0, 153.0], [22.1, 154.0], [22.2, 154.0], [22.3, 155.0], [22.4, 155.0], [22.5, 156.0], [22.6, 157.0], [22.7, 158.0], [22.8, 158.0], [22.9, 158.0], [23.0, 158.0], [23.1, 159.0], [23.2, 159.0], [23.3, 160.0], [23.4, 160.0], [23.5, 161.0], [23.6, 162.0], [23.7, 162.0], [23.8, 163.0], [23.9, 163.0], [24.0, 164.0], [24.1, 165.0], [24.2, 166.0], [24.3, 167.0], [24.4, 167.0], [24.5, 167.0], [24.6, 168.0], [24.7, 168.0], [24.8, 169.0], [24.9, 170.0], [25.0, 170.0], [25.1, 170.0], [25.2, 171.0], [25.3, 171.0], [25.4, 172.0], [25.5, 172.0], [25.6, 173.0], [25.7, 174.0], [25.8, 175.0], [25.9, 175.0], [26.0, 175.0], [26.1, 176.0], [26.2, 176.0], [26.3, 176.0], [26.4, 177.0], [26.5, 177.0], [26.6, 177.0], [26.7, 177.0], [26.8, 178.0], [26.9, 178.0], [27.0, 178.0], [27.1, 179.0], [27.2, 179.0], [27.3, 179.0], [27.4, 180.0], [27.5, 180.0], [27.6, 180.0], [27.7, 180.0], [27.8, 180.0], [27.9, 181.0], [28.0, 181.0], [28.1, 181.0], [28.2, 182.0], [28.3, 182.0], [28.4, 182.0], [28.5, 182.0], [28.6, 182.0], [28.7, 182.0], [28.8, 183.0], [28.9, 183.0], [29.0, 183.0], [29.1, 183.0], [29.2, 183.0], [29.3, 184.0], [29.4, 184.0], [29.5, 184.0], [29.6, 184.0], [29.7, 185.0], [29.8, 185.0], [29.9, 185.0], [30.0, 185.0], [30.1, 185.0], [30.2, 186.0], [30.3, 186.0], [30.4, 186.0], [30.5, 187.0], [30.6, 187.0], [30.7, 187.0], [30.8, 187.0], [30.9, 187.0], [31.0, 188.0], [31.1, 188.0], [31.2, 188.0], [31.3, 188.0], [31.4, 189.0], [31.5, 189.0], [31.6, 190.0], [31.7, 190.0], [31.8, 190.0], [31.9, 190.0], [32.0, 191.0], [32.1, 192.0], [32.2, 192.0], [32.3, 192.0], [32.4, 193.0], [32.5, 193.0], [32.6, 193.0], [32.7, 194.0], [32.8, 194.0], [32.9, 194.0], [33.0, 195.0], [33.1, 195.0], [33.2, 195.0], [33.3, 196.0], [33.4, 196.0], [33.5, 197.0], [33.6, 197.0], [33.7, 198.0], [33.8, 198.0], [33.9, 199.0], [34.0, 199.0], [34.1, 200.0], [34.2, 201.0], [34.3, 201.0], [34.4, 201.0], [34.5, 201.0], [34.6, 202.0], [34.7, 202.0], [34.8, 203.0], [34.9, 203.0], [35.0, 203.0], [35.1, 204.0], [35.2, 205.0], [35.3, 205.0], [35.4, 206.0], [35.5, 207.0], [35.6, 207.0], [35.7, 207.0], [35.8, 208.0], [35.9, 208.0], [36.0, 208.0], [36.1, 209.0], [36.2, 209.0], [36.3, 209.0], [36.4, 210.0], [36.5, 210.0], [36.6, 211.0], [36.7, 211.0], [36.8, 211.0], [36.9, 212.0], [37.0, 212.0], [37.1, 213.0], [37.2, 213.0], [37.3, 213.0], [37.4, 214.0], [37.5, 214.0], [37.6, 215.0], [37.7, 216.0], [37.8, 216.0], [37.9, 217.0], [38.0, 217.0], [38.1, 218.0], [38.2, 219.0], [38.3, 219.0], [38.4, 220.0], [38.5, 221.0], [38.6, 222.0], [38.7, 222.0], [38.8, 223.0], [38.9, 223.0], [39.0, 224.0], [39.1, 224.0], [39.2, 224.0], [39.3, 225.0], [39.4, 225.0], [39.5, 226.0], [39.6, 226.0], [39.7, 226.0], [39.8, 227.0], [39.9, 227.0], [40.0, 228.0], [40.1, 228.0], [40.2, 229.0], [40.3, 230.0], [40.4, 230.0], [40.5, 231.0], [40.6, 231.0], [40.7, 232.0], [40.8, 232.0], [40.9, 232.0], [41.0, 234.0], [41.1, 234.0], [41.2, 234.0], [41.3, 235.0], [41.4, 236.0], [41.5, 236.0], [41.6, 237.0], [41.7, 237.0], [41.8, 238.0], [41.9, 238.0], [42.0, 239.0], [42.1, 239.0], [42.2, 240.0], [42.3, 240.0], [42.4, 241.0], [42.5, 242.0], [42.6, 243.0], [42.7, 243.0], [42.8, 244.0], [42.9, 244.0], [43.0, 244.0], [43.1, 245.0], [43.2, 246.0], [43.3, 246.0], [43.4, 247.0], [43.5, 247.0], [43.6, 248.0], [43.7, 249.0], [43.8, 249.0], [43.9, 250.0], [44.0, 250.0], [44.1, 251.0], [44.2, 251.0], [44.3, 252.0], [44.4, 252.0], [44.5, 253.0], [44.6, 253.0], [44.7, 254.0], [44.8, 254.0], [44.9, 255.0], [45.0, 255.0], [45.1, 255.0], [45.2, 256.0], [45.3, 257.0], [45.4, 257.0], [45.5, 257.0], [45.6, 258.0], [45.7, 258.0], [45.8, 259.0], [45.9, 259.0], [46.0, 260.0], [46.1, 260.0], [46.2, 261.0], [46.3, 262.0], [46.4, 262.0], [46.5, 263.0], [46.6, 263.0], [46.7, 263.0], [46.8, 264.0], [46.9, 265.0], [47.0, 265.0], [47.1, 266.0], [47.2, 266.0], [47.3, 267.0], [47.4, 267.0], [47.5, 268.0], [47.6, 268.0], [47.7, 269.0], [47.8, 269.0], [47.9, 270.0], [48.0, 270.0], [48.1, 271.0], [48.2, 271.0], [48.3, 271.0], [48.4, 272.0], [48.5, 272.0], [48.6, 273.0], [48.7, 273.0], [48.8, 274.0], [48.9, 274.0], [49.0, 275.0], [49.1, 275.0], [49.2, 275.0], [49.3, 275.0], [49.4, 276.0], [49.5, 276.0], [49.6, 277.0], [49.7, 277.0], [49.8, 277.0], [49.9, 277.0], [50.0, 278.0], [50.1, 279.0], [50.2, 279.0], [50.3, 279.0], [50.4, 280.0], [50.5, 280.0], [50.6, 281.0], [50.7, 282.0], [50.8, 282.0], [50.9, 282.0], [51.0, 283.0], [51.1, 284.0], [51.2, 284.0], [51.3, 284.0], [51.4, 285.0], [51.5, 285.0], [51.6, 285.0], [51.7, 285.0], [51.8, 286.0], [51.9, 286.0], [52.0, 286.0], [52.1, 287.0], [52.2, 287.0], [52.3, 288.0], [52.4, 289.0], [52.5, 289.0], [52.6, 289.0], [52.7, 290.0], [52.8, 290.0], [52.9, 291.0], [53.0, 291.0], [53.1, 292.0], [53.2, 293.0], [53.3, 294.0], [53.4, 294.0], [53.5, 295.0], [53.6, 295.0], [53.7, 296.0], [53.8, 297.0], [53.9, 297.0], [54.0, 297.0], [54.1, 298.0], [54.2, 298.0], [54.3, 299.0], [54.4, 299.0], [54.5, 300.0], [54.6, 300.0], [54.7, 300.0], [54.8, 301.0], [54.9, 301.0], [55.0, 302.0], [55.1, 302.0], [55.2, 303.0], [55.3, 304.0], [55.4, 304.0], [55.5, 304.0], [55.6, 305.0], [55.7, 305.0], [55.8, 306.0], [55.9, 306.0], [56.0, 307.0], [56.1, 308.0], [56.2, 308.0], [56.3, 308.0], [56.4, 309.0], [56.5, 309.0], [56.6, 310.0], [56.7, 310.0], [56.8, 310.0], [56.9, 311.0], [57.0, 312.0], [57.1, 312.0], [57.2, 313.0], [57.3, 314.0], [57.4, 315.0], [57.5, 315.0], [57.6, 316.0], [57.7, 316.0], [57.8, 317.0], [57.9, 318.0], [58.0, 318.0], [58.1, 319.0], [58.2, 319.0], [58.3, 319.0], [58.4, 320.0], [58.5, 321.0], [58.6, 322.0], [58.7, 323.0], [58.8, 323.0], [58.9, 323.0], [59.0, 324.0], [59.1, 324.0], [59.2, 325.0], [59.3, 326.0], [59.4, 326.0], [59.5, 327.0], [59.6, 327.0], [59.7, 328.0], [59.8, 328.0], [59.9, 329.0], [60.0, 330.0], [60.1, 331.0], [60.2, 331.0], [60.3, 332.0], [60.4, 332.0], [60.5, 333.0], [60.6, 334.0], [60.7, 334.0], [60.8, 335.0], [60.9, 336.0], [61.0, 336.0], [61.1, 337.0], [61.2, 337.0], [61.3, 338.0], [61.4, 338.0], [61.5, 338.0], [61.6, 339.0], [61.7, 339.0], [61.8, 340.0], [61.9, 340.0], [62.0, 340.0], [62.1, 341.0], [62.2, 342.0], [62.3, 342.0], [62.4, 343.0], [62.5, 343.0], [62.6, 344.0], [62.7, 344.0], [62.8, 345.0], [62.9, 345.0], [63.0, 346.0], [63.1, 347.0], [63.2, 347.0], [63.3, 348.0], [63.4, 348.0], [63.5, 348.0], [63.6, 349.0], [63.7, 349.0], [63.8, 350.0], [63.9, 350.0], [64.0, 351.0], [64.1, 351.0], [64.2, 352.0], [64.3, 353.0], [64.4, 353.0], [64.5, 354.0], [64.6, 355.0], [64.7, 355.0], [64.8, 356.0], [64.9, 356.0], [65.0, 357.0], [65.1, 357.0], [65.2, 358.0], [65.3, 358.0], [65.4, 359.0], [65.5, 359.0], [65.6, 360.0], [65.7, 360.0], [65.8, 361.0], [65.9, 361.0], [66.0, 362.0], [66.1, 363.0], [66.2, 363.0], [66.3, 364.0], [66.4, 364.0], [66.5, 364.0], [66.6, 365.0], [66.7, 365.0], [66.8, 366.0], [66.9, 366.0], [67.0, 366.0], [67.1, 367.0], [67.2, 367.0], [67.3, 368.0], [67.4, 369.0], [67.5, 370.0], [67.6, 371.0], [67.7, 371.0], [67.8, 371.0], [67.9, 372.0], [68.0, 372.0], [68.1, 372.0], [68.2, 373.0], [68.3, 374.0], [68.4, 374.0], [68.5, 375.0], [68.6, 375.0], [68.7, 376.0], [68.8, 376.0], [68.9, 377.0], [69.0, 377.0], [69.1, 378.0], [69.2, 378.0], [69.3, 379.0], [69.4, 379.0], [69.5, 380.0], [69.6, 381.0], [69.7, 381.0], [69.8, 382.0], [69.9, 382.0], [70.0, 383.0], [70.1, 383.0], [70.2, 384.0], [70.3, 384.0], [70.4, 385.0], [70.5, 386.0], [70.6, 386.0], [70.7, 386.0], [70.8, 388.0], [70.9, 388.0], [71.0, 389.0], [71.1, 389.0], [71.2, 391.0], [71.3, 392.0], [71.4, 393.0], [71.5, 393.0], [71.6, 394.0], [71.7, 395.0], [71.8, 396.0], [71.9, 396.0], [72.0, 397.0], [72.1, 398.0], [72.2, 399.0], [72.3, 399.0], [72.4, 400.0], [72.5, 401.0], [72.6, 402.0], [72.7, 403.0], [72.8, 404.0], [72.9, 404.0], [73.0, 405.0], [73.1, 406.0], [73.2, 406.0], [73.3, 407.0], [73.4, 408.0], [73.5, 408.0], [73.6, 409.0], [73.7, 410.0], [73.8, 411.0], [73.9, 412.0], [74.0, 413.0], [74.1, 414.0], [74.2, 415.0], [74.3, 416.0], [74.4, 417.0], [74.5, 418.0], [74.6, 419.0], [74.7, 421.0], [74.8, 422.0], [74.9, 423.0], [75.0, 423.0], [75.1, 424.0], [75.2, 424.0], [75.3, 425.0], [75.4, 426.0], [75.5, 426.0], [75.6, 427.0], [75.7, 428.0], [75.8, 430.0], [75.9, 430.0], [76.0, 431.0], [76.1, 432.0], [76.2, 432.0], [76.3, 433.0], [76.4, 434.0], [76.5, 434.0], [76.6, 435.0], [76.7, 435.0], [76.8, 436.0], [76.9, 437.0], [77.0, 438.0], [77.1, 439.0], [77.2, 440.0], [77.3, 440.0], [77.4, 442.0], [77.5, 442.0], [77.6, 443.0], [77.7, 443.0], [77.8, 443.0], [77.9, 444.0], [78.0, 445.0], [78.1, 446.0], [78.2, 447.0], [78.3, 447.0], [78.4, 449.0], [78.5, 450.0], [78.6, 450.0], [78.7, 451.0], [78.8, 452.0], [78.9, 453.0], [79.0, 454.0], [79.1, 455.0], [79.2, 456.0], [79.3, 457.0], [79.4, 458.0], [79.5, 458.0], [79.6, 459.0], [79.7, 461.0], [79.8, 462.0], [79.9, 462.0], [80.0, 463.0], [80.1, 464.0], [80.2, 466.0], [80.3, 467.0], [80.4, 467.0], [80.5, 469.0], [80.6, 470.0], [80.7, 471.0], [80.8, 473.0], [80.9, 474.0], [81.0, 475.0], [81.1, 476.0], [81.2, 477.0], [81.3, 478.0], [81.4, 480.0], [81.5, 481.0], [81.6, 484.0], [81.7, 484.0], [81.8, 485.0], [81.9, 486.0], [82.0, 486.0], [82.1, 487.0], [82.2, 488.0], [82.3, 489.0], [82.4, 490.0], [82.5, 492.0], [82.6, 493.0], [82.7, 494.0], [82.8, 495.0], [82.9, 497.0], [83.0, 498.0], [83.1, 499.0], [83.2, 501.0], [83.3, 502.0], [83.4, 505.0], [83.5, 506.0], [83.6, 506.0], [83.7, 507.0], [83.8, 509.0], [83.9, 511.0], [84.0, 512.0], [84.1, 516.0], [84.2, 517.0], [84.3, 517.0], [84.4, 518.0], [84.5, 519.0], [84.6, 520.0], [84.7, 522.0], [84.8, 523.0], [84.9, 525.0], [85.0, 525.0], [85.1, 526.0], [85.2, 528.0], [85.3, 529.0], [85.4, 530.0], [85.5, 531.0], [85.6, 532.0], [85.7, 534.0], [85.8, 535.0], [85.9, 536.0], [86.0, 538.0], [86.1, 539.0], [86.2, 539.0], [86.3, 541.0], [86.4, 542.0], [86.5, 543.0], [86.6, 546.0], [86.7, 547.0], [86.8, 550.0], [86.9, 552.0], [87.0, 554.0], [87.1, 556.0], [87.2, 557.0], [87.3, 559.0], [87.4, 561.0], [87.5, 562.0], [87.6, 562.0], [87.7, 563.0], [87.8, 567.0], [87.9, 568.0], [88.0, 569.0], [88.1, 571.0], [88.2, 573.0], [88.3, 575.0], [88.4, 576.0], [88.5, 578.0], [88.6, 579.0], [88.7, 580.0], [88.8, 581.0], [88.9, 583.0], [89.0, 587.0], [89.1, 590.0], [89.2, 593.0], [89.3, 594.0], [89.4, 596.0], [89.5, 598.0], [89.6, 599.0], [89.7, 600.0], [89.8, 602.0], [89.9, 604.0], [90.0, 605.0], [90.1, 608.0], [90.2, 610.0], [90.3, 612.0], [90.4, 613.0], [90.5, 615.0], [90.6, 617.0], [90.7, 621.0], [90.8, 623.0], [90.9, 627.0], [91.0, 628.0], [91.1, 631.0], [91.2, 633.0], [91.3, 634.0], [91.4, 636.0], [91.5, 638.0], [91.6, 641.0], [91.7, 643.0], [91.8, 647.0], [91.9, 650.0], [92.0, 655.0], [92.1, 658.0], [92.2, 660.0], [92.3, 663.0], [92.4, 665.0], [92.5, 668.0], [92.6, 670.0], [92.7, 674.0], [92.8, 680.0], [92.9, 682.0], [93.0, 686.0], [93.1, 688.0], [93.2, 689.0], [93.3, 692.0], [93.4, 695.0], [93.5, 700.0], [93.6, 702.0], [93.7, 705.0], [93.8, 716.0], [93.9, 720.0], [94.0, 722.0], [94.1, 726.0], [94.2, 732.0], [94.3, 744.0], [94.4, 748.0], [94.5, 749.0], [94.6, 753.0], [94.7, 755.0], [94.8, 760.0], [94.9, 763.0], [95.0, 766.0], [95.1, 768.0], [95.2, 775.0], [95.3, 780.0], [95.4, 785.0], [95.5, 787.0], [95.6, 793.0], [95.7, 799.0], [95.8, 805.0], [95.9, 810.0], [96.0, 813.0], [96.1, 820.0], [96.2, 827.0], [96.3, 833.0], [96.4, 839.0], [96.5, 851.0], [96.6, 860.0], [96.7, 872.0], [96.8, 889.0], [96.9, 901.0], [97.0, 906.0], [97.1, 915.0], [97.2, 927.0], [97.3, 936.0], [97.4, 949.0], [97.5, 957.0], [97.6, 973.0], [97.7, 983.0], [97.8, 994.0], [97.9, 1016.0], [98.0, 1049.0], [98.1, 1068.0], [98.2, 1104.0], [98.3, 1129.0], [98.4, 1153.0], [98.5, 1183.0], [98.6, 1207.0], [98.7, 1234.0], [98.8, 1253.0], [98.9, 1278.0], [99.0, 1378.0], [99.1, 1415.0], [99.2, 1483.0], [99.3, 1535.0], [99.4, 1582.0], [99.5, 2033.0], [99.6, 2218.0], [99.7, 2658.0], [99.8, 3258.0], [99.9, 3600.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 1080.0, "series": [{"data": [[0.0, 686.0], [600.0, 201.0], [700.0, 115.0], [800.0, 61.0], [900.0, 50.0], [1000.0, 18.0], [1100.0, 19.0], [1200.0, 21.0], [1300.0, 6.0], [1400.0, 10.0], [1500.0, 7.0], [100.0, 1080.0], [1600.0, 1.0], [1700.0, 3.0], [2000.0, 4.0], [2100.0, 1.0], [2200.0, 2.0], [2300.0, 1.0], [2400.0, 1.0], [2500.0, 1.0], [2600.0, 2.0], [2700.0, 1.0], [2900.0, 1.0], [3000.0, 1.0], [3100.0, 1.0], [200.0, 1060.0], [3200.0, 3.0], [3400.0, 2.0], [3600.0, 1.0], [3700.0, 1.0], [3800.0, 1.0], [4200.0, 1.0], [4400.0, 1.0], [4500.0, 1.0], [300.0, 931.0], [400.0, 556.0], [500.0, 338.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 4500.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 38.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 4317.0, "series": [{"data": [[0.0, 4317.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 835.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 38.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.973317161916311, "minX": 1.6038819E12, "maxY": 10.0, "series": [{"data": [[1.60388202E12, 9.973317161916311], [1.6038819E12, 9.998076923076924], [1.60388196E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60388202E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 331.5, "minX": 1.0, "maxY": 769.0, "series": [{"data": [[8.0, 417.0], [4.0, 620.0], [1.0, 345.0], [9.0, 408.5], [10.0, 332.56342923344386], [5.0, 491.0], [6.0, 769.0], [3.0, 331.5], [7.0, 629.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.99094412331411, 332.8543352601147]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 10402.583333333334, "minX": 1.6038819E12, "maxY": 1.3126434983333332E7, "series": [{"data": [[1.60388202E12, 1.1593539083333334E7], [1.6038819E12, 1.1223652416666666E7], [1.60388196E12, 1.3126434983333332E7]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60388202E12, 11271.966666666667], [1.6038819E12, 10402.583333333334], [1.60388196E12, 13469.216666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60388202E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 301.0085815244822, "minX": 1.6038819E12, "maxY": 371.0346153846153, "series": [{"data": [[1.60388202E12, 334.9921164342023], [1.6038819E12, 371.0346153846153], [1.60388196E12, 301.0085815244822]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60388202E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 298.85815244825864, "minX": 1.6038819E12, "maxY": 367.8980769230765, "series": [{"data": [[1.60388202E12, 332.73317161916236], [1.6038819E12, 367.8980769230765], [1.60388196E12, 298.85815244825864]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60388202E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.008076728924785453, "minX": 1.6038819E12, "maxY": 0.07948717948717941, "series": [{"data": [[1.60388202E12, 0.010915706488781086], [1.6038819E12, 0.07948717948717941], [1.60388196E12, 0.008076728924785453]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60388202E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 4.0, "minX": 1.6038819E12, "maxY": 4538.0, "series": [{"data": [[1.60388202E12, 2658.0], [1.6038819E12, 4538.0], [1.60388196E12, 2768.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60388202E12, 18.0], [1.6038819E12, 19.0], [1.60388196E12, 16.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60388202E12, 18.0], [1.6038819E12, 19.453900148868563], [1.60388196E12, 17.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60388202E12, 18.0], [1.6038819E12, 19.0], [1.60388196E12, 16.828999763727186]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60388202E12, 5.0], [1.6038819E12, 12.0], [1.60388196E12, 4.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60388202E12, 298.0], [1.6038819E12, 285.5], [1.60388196E12, 259.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60388202E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 76.0, "minX": 4.0, "maxY": 2124.5, "series": [{"data": [[32.0, 289.5], [33.0, 283.0], [35.0, 254.0], [34.0, 296.5], [36.0, 248.0], [37.0, 273.0], [39.0, 195.0], [38.0, 244.5], [40.0, 257.5], [41.0, 241.0], [42.0, 227.5], [43.0, 210.0], [44.0, 197.5], [45.0, 199.0], [46.0, 185.0], [49.0, 148.5], [50.0, 171.5], [52.0, 76.0], [53.0, 153.0], [54.0, 199.5], [58.0, 164.0], [4.0, 536.5], [5.0, 500.0], [6.0, 2124.5], [8.0, 624.5], [10.0, 556.5], [11.0, 636.0], [12.0, 318.5], [13.0, 880.5], [14.0, 673.0], [15.0, 608.0], [16.0, 316.5], [17.0, 537.0], [19.0, 327.0], [20.0, 393.5], [21.0, 461.0], [22.0, 361.5], [23.0, 392.0], [25.0, 338.0], [26.0, 318.5], [27.0, 307.0], [28.0, 338.5], [29.0, 315.5], [30.0, 317.0], [31.0, 309.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 58.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 75.0, "minX": 4.0, "maxY": 2120.5, "series": [{"data": [[32.0, 287.5], [33.0, 282.0], [35.0, 252.0], [34.0, 294.5], [36.0, 246.5], [37.0, 271.0], [39.0, 194.0], [38.0, 242.5], [40.0, 253.5], [41.0, 239.0], [42.0, 227.0], [43.0, 209.5], [44.0, 190.5], [45.0, 195.0], [46.0, 183.5], [49.0, 147.5], [50.0, 169.0], [52.0, 75.0], [53.0, 151.0], [54.0, 197.5], [58.0, 162.5], [4.0, 536.5], [5.0, 500.0], [6.0, 2120.5], [8.0, 623.5], [10.0, 553.0], [11.0, 636.0], [12.0, 315.5], [13.0, 878.0], [14.0, 671.0], [15.0, 607.0], [16.0, 315.0], [17.0, 531.0], [19.0, 324.0], [20.0, 393.0], [21.0, 457.5], [22.0, 356.5], [23.0, 389.5], [25.0, 335.0], [26.0, 318.0], [27.0, 303.0], [28.0, 335.0], [29.0, 314.0], [30.0, 315.0], [31.0, 307.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 58.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 26.166666666666668, "minX": 1.6038819E12, "maxY": 33.016666666666666, "series": [{"data": [[1.60388202E12, 27.316666666666666], [1.6038819E12, 26.166666666666668], [1.60388196E12, 33.016666666666666]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60388202E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 26.0, "minX": 1.6038819E12, "maxY": 33.016666666666666, "series": [{"data": [[1.60388202E12, 27.483333333333334], [1.6038819E12, 26.0], [1.60388196E12, 33.016666666666666]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60388202E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 26.0, "minX": 1.6038819E12, "maxY": 33.016666666666666, "series": [{"data": [[1.60388202E12, 27.483333333333334], [1.6038819E12, 26.0], [1.60388196E12, 33.016666666666666]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60388202E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 26.0, "minX": 1.6038819E12, "maxY": 33.016666666666666, "series": [{"data": [[1.60388202E12, 27.483333333333334], [1.6038819E12, 26.0], [1.60388196E12, 33.016666666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60388202E12, "title": "Total Transactions Per Second"}},
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

