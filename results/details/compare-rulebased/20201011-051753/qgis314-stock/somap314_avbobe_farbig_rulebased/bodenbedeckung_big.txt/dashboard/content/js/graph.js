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
        data: {"result": {"minY": 26.0, "minX": 0.0, "maxY": 1991.0, "series": [{"data": [[0.0, 26.0], [0.1, 31.0], [0.2, 32.0], [0.3, 33.0], [0.4, 34.0], [0.5, 35.0], [0.6, 35.0], [0.7, 36.0], [0.8, 37.0], [0.9, 37.0], [1.0, 37.0], [1.1, 38.0], [1.2, 38.0], [1.3, 38.0], [1.4, 38.0], [1.5, 39.0], [1.6, 39.0], [1.7, 39.0], [1.8, 39.0], [1.9, 39.0], [2.0, 40.0], [2.1, 40.0], [2.2, 40.0], [2.3, 41.0], [2.4, 41.0], [2.5, 41.0], [2.6, 42.0], [2.7, 42.0], [2.8, 42.0], [2.9, 43.0], [3.0, 43.0], [3.1, 43.0], [3.2, 43.0], [3.3, 44.0], [3.4, 44.0], [3.5, 44.0], [3.6, 45.0], [3.7, 45.0], [3.8, 45.0], [3.9, 45.0], [4.0, 46.0], [4.1, 46.0], [4.2, 46.0], [4.3, 46.0], [4.4, 46.0], [4.5, 47.0], [4.6, 47.0], [4.7, 47.0], [4.8, 47.0], [4.9, 47.0], [5.0, 48.0], [5.1, 48.0], [5.2, 48.0], [5.3, 48.0], [5.4, 49.0], [5.5, 49.0], [5.6, 49.0], [5.7, 49.0], [5.8, 50.0], [5.9, 50.0], [6.0, 50.0], [6.1, 50.0], [6.2, 51.0], [6.3, 51.0], [6.4, 51.0], [6.5, 51.0], [6.6, 51.0], [6.7, 52.0], [6.8, 52.0], [6.9, 52.0], [7.0, 53.0], [7.1, 53.0], [7.2, 53.0], [7.3, 53.0], [7.4, 54.0], [7.5, 54.0], [7.6, 54.0], [7.7, 55.0], [7.8, 55.0], [7.9, 55.0], [8.0, 56.0], [8.1, 56.0], [8.2, 56.0], [8.3, 56.0], [8.4, 57.0], [8.5, 57.0], [8.6, 57.0], [8.7, 58.0], [8.8, 58.0], [8.9, 58.0], [9.0, 59.0], [9.1, 59.0], [9.2, 59.0], [9.3, 60.0], [9.4, 60.0], [9.5, 61.0], [9.6, 62.0], [9.7, 62.0], [9.8, 62.0], [9.9, 62.0], [10.0, 63.0], [10.1, 63.0], [10.2, 64.0], [10.3, 64.0], [10.4, 65.0], [10.5, 65.0], [10.6, 66.0], [10.7, 66.0], [10.8, 67.0], [10.9, 67.0], [11.0, 68.0], [11.1, 68.0], [11.2, 69.0], [11.3, 69.0], [11.4, 70.0], [11.5, 71.0], [11.6, 71.0], [11.7, 71.0], [11.8, 72.0], [11.9, 72.0], [12.0, 73.0], [12.1, 73.0], [12.2, 73.0], [12.3, 74.0], [12.4, 74.0], [12.5, 74.0], [12.6, 75.0], [12.7, 75.0], [12.8, 76.0], [12.9, 76.0], [13.0, 76.0], [13.1, 77.0], [13.2, 77.0], [13.3, 77.0], [13.4, 78.0], [13.5, 78.0], [13.6, 78.0], [13.7, 79.0], [13.8, 79.0], [13.9, 79.0], [14.0, 80.0], [14.1, 80.0], [14.2, 80.0], [14.3, 81.0], [14.4, 81.0], [14.5, 81.0], [14.6, 82.0], [14.7, 82.0], [14.8, 82.0], [14.9, 83.0], [15.0, 83.0], [15.1, 83.0], [15.2, 84.0], [15.3, 84.0], [15.4, 84.0], [15.5, 85.0], [15.6, 85.0], [15.7, 85.0], [15.8, 86.0], [15.9, 86.0], [16.0, 86.0], [16.1, 87.0], [16.2, 87.0], [16.3, 87.0], [16.4, 87.0], [16.5, 88.0], [16.6, 88.0], [16.7, 88.0], [16.8, 88.0], [16.9, 89.0], [17.0, 89.0], [17.1, 89.0], [17.2, 90.0], [17.3, 90.0], [17.4, 90.0], [17.5, 90.0], [17.6, 91.0], [17.7, 91.0], [17.8, 91.0], [17.9, 92.0], [18.0, 92.0], [18.1, 93.0], [18.2, 93.0], [18.3, 93.0], [18.4, 94.0], [18.5, 94.0], [18.6, 94.0], [18.7, 95.0], [18.8, 95.0], [18.9, 95.0], [19.0, 96.0], [19.1, 96.0], [19.2, 96.0], [19.3, 96.0], [19.4, 97.0], [19.5, 98.0], [19.6, 98.0], [19.7, 99.0], [19.8, 99.0], [19.9, 99.0], [20.0, 100.0], [20.1, 100.0], [20.2, 100.0], [20.3, 101.0], [20.4, 101.0], [20.5, 102.0], [20.6, 103.0], [20.7, 103.0], [20.8, 103.0], [20.9, 103.0], [21.0, 104.0], [21.1, 104.0], [21.2, 105.0], [21.3, 105.0], [21.4, 106.0], [21.5, 106.0], [21.6, 107.0], [21.7, 108.0], [21.8, 108.0], [21.9, 109.0], [22.0, 110.0], [22.1, 110.0], [22.2, 110.0], [22.3, 111.0], [22.4, 111.0], [22.5, 111.0], [22.6, 112.0], [22.7, 112.0], [22.8, 113.0], [22.9, 113.0], [23.0, 114.0], [23.1, 114.0], [23.2, 114.0], [23.3, 115.0], [23.4, 115.0], [23.5, 116.0], [23.6, 116.0], [23.7, 116.0], [23.8, 117.0], [23.9, 117.0], [24.0, 117.0], [24.1, 118.0], [24.2, 118.0], [24.3, 119.0], [24.4, 119.0], [24.5, 120.0], [24.6, 120.0], [24.7, 121.0], [24.8, 121.0], [24.9, 122.0], [25.0, 122.0], [25.1, 122.0], [25.2, 123.0], [25.3, 123.0], [25.4, 124.0], [25.5, 124.0], [25.6, 125.0], [25.7, 125.0], [25.8, 126.0], [25.9, 126.0], [26.0, 126.0], [26.1, 127.0], [26.2, 127.0], [26.3, 128.0], [26.4, 128.0], [26.5, 129.0], [26.6, 129.0], [26.7, 129.0], [26.8, 130.0], [26.9, 130.0], [27.0, 131.0], [27.1, 131.0], [27.2, 132.0], [27.3, 132.0], [27.4, 133.0], [27.5, 134.0], [27.6, 134.0], [27.7, 135.0], [27.8, 135.0], [27.9, 136.0], [28.0, 136.0], [28.1, 136.0], [28.2, 136.0], [28.3, 137.0], [28.4, 137.0], [28.5, 138.0], [28.6, 138.0], [28.7, 138.0], [28.8, 138.0], [28.9, 139.0], [29.0, 139.0], [29.1, 140.0], [29.2, 140.0], [29.3, 140.0], [29.4, 140.0], [29.5, 141.0], [29.6, 141.0], [29.7, 142.0], [29.8, 142.0], [29.9, 142.0], [30.0, 142.0], [30.1, 143.0], [30.2, 143.0], [30.3, 143.0], [30.4, 144.0], [30.5, 144.0], [30.6, 145.0], [30.7, 145.0], [30.8, 145.0], [30.9, 145.0], [31.0, 145.0], [31.1, 146.0], [31.2, 146.0], [31.3, 147.0], [31.4, 147.0], [31.5, 147.0], [31.6, 147.0], [31.7, 148.0], [31.8, 148.0], [31.9, 148.0], [32.0, 149.0], [32.1, 149.0], [32.2, 150.0], [32.3, 150.0], [32.4, 150.0], [32.5, 151.0], [32.6, 151.0], [32.7, 152.0], [32.8, 152.0], [32.9, 153.0], [33.0, 153.0], [33.1, 154.0], [33.2, 154.0], [33.3, 155.0], [33.4, 155.0], [33.5, 155.0], [33.6, 156.0], [33.7, 156.0], [33.8, 157.0], [33.9, 157.0], [34.0, 158.0], [34.1, 158.0], [34.2, 158.0], [34.3, 159.0], [34.4, 159.0], [34.5, 160.0], [34.6, 161.0], [34.7, 161.0], [34.8, 162.0], [34.9, 162.0], [35.0, 163.0], [35.1, 163.0], [35.2, 163.0], [35.3, 164.0], [35.4, 164.0], [35.5, 165.0], [35.6, 165.0], [35.7, 166.0], [35.8, 166.0], [35.9, 166.0], [36.0, 167.0], [36.1, 168.0], [36.2, 169.0], [36.3, 169.0], [36.4, 169.0], [36.5, 170.0], [36.6, 171.0], [36.7, 171.0], [36.8, 172.0], [36.9, 173.0], [37.0, 173.0], [37.1, 174.0], [37.2, 174.0], [37.3, 175.0], [37.4, 176.0], [37.5, 176.0], [37.6, 177.0], [37.7, 178.0], [37.8, 179.0], [37.9, 180.0], [38.0, 181.0], [38.1, 182.0], [38.2, 182.0], [38.3, 183.0], [38.4, 183.0], [38.5, 184.0], [38.6, 184.0], [38.7, 185.0], [38.8, 185.0], [38.9, 186.0], [39.0, 186.0], [39.1, 186.0], [39.2, 187.0], [39.3, 187.0], [39.4, 188.0], [39.5, 189.0], [39.6, 189.0], [39.7, 190.0], [39.8, 191.0], [39.9, 191.0], [40.0, 191.0], [40.1, 193.0], [40.2, 193.0], [40.3, 194.0], [40.4, 194.0], [40.5, 195.0], [40.6, 196.0], [40.7, 196.0], [40.8, 197.0], [40.9, 198.0], [41.0, 198.0], [41.1, 199.0], [41.2, 199.0], [41.3, 200.0], [41.4, 201.0], [41.5, 201.0], [41.6, 202.0], [41.7, 203.0], [41.8, 203.0], [41.9, 204.0], [42.0, 204.0], [42.1, 205.0], [42.2, 206.0], [42.3, 206.0], [42.4, 208.0], [42.5, 208.0], [42.6, 208.0], [42.7, 209.0], [42.8, 209.0], [42.9, 211.0], [43.0, 211.0], [43.1, 212.0], [43.2, 213.0], [43.3, 213.0], [43.4, 215.0], [43.5, 216.0], [43.6, 217.0], [43.7, 217.0], [43.8, 219.0], [43.9, 219.0], [44.0, 220.0], [44.1, 221.0], [44.2, 221.0], [44.3, 222.0], [44.4, 223.0], [44.5, 223.0], [44.6, 224.0], [44.7, 225.0], [44.8, 226.0], [44.9, 227.0], [45.0, 228.0], [45.1, 229.0], [45.2, 230.0], [45.3, 231.0], [45.4, 231.0], [45.5, 232.0], [45.6, 232.0], [45.7, 233.0], [45.8, 233.0], [45.9, 234.0], [46.0, 235.0], [46.1, 236.0], [46.2, 236.0], [46.3, 237.0], [46.4, 238.0], [46.5, 238.0], [46.6, 239.0], [46.7, 240.0], [46.8, 240.0], [46.9, 241.0], [47.0, 242.0], [47.1, 243.0], [47.2, 244.0], [47.3, 244.0], [47.4, 245.0], [47.5, 246.0], [47.6, 246.0], [47.7, 247.0], [47.8, 249.0], [47.9, 250.0], [48.0, 250.0], [48.1, 251.0], [48.2, 251.0], [48.3, 252.0], [48.4, 253.0], [48.5, 254.0], [48.6, 255.0], [48.7, 255.0], [48.8, 256.0], [48.9, 257.0], [49.0, 258.0], [49.1, 259.0], [49.2, 260.0], [49.3, 260.0], [49.4, 261.0], [49.5, 262.0], [49.6, 263.0], [49.7, 265.0], [49.8, 265.0], [49.9, 266.0], [50.0, 267.0], [50.1, 268.0], [50.2, 268.0], [50.3, 269.0], [50.4, 269.0], [50.5, 270.0], [50.6, 271.0], [50.7, 271.0], [50.8, 272.0], [50.9, 272.0], [51.0, 273.0], [51.1, 273.0], [51.2, 274.0], [51.3, 274.0], [51.4, 275.0], [51.5, 275.0], [51.6, 276.0], [51.7, 276.0], [51.8, 277.0], [51.9, 277.0], [52.0, 278.0], [52.1, 279.0], [52.2, 280.0], [52.3, 281.0], [52.4, 281.0], [52.5, 283.0], [52.6, 283.0], [52.7, 284.0], [52.8, 284.0], [52.9, 285.0], [53.0, 287.0], [53.1, 288.0], [53.2, 289.0], [53.3, 290.0], [53.4, 291.0], [53.5, 292.0], [53.6, 293.0], [53.7, 295.0], [53.8, 296.0], [53.9, 296.0], [54.0, 297.0], [54.1, 298.0], [54.2, 299.0], [54.3, 300.0], [54.4, 300.0], [54.5, 301.0], [54.6, 302.0], [54.7, 302.0], [54.8, 303.0], [54.9, 304.0], [55.0, 304.0], [55.1, 305.0], [55.2, 306.0], [55.3, 307.0], [55.4, 308.0], [55.5, 309.0], [55.6, 310.0], [55.7, 311.0], [55.8, 312.0], [55.9, 312.0], [56.0, 313.0], [56.1, 314.0], [56.2, 315.0], [56.3, 317.0], [56.4, 318.0], [56.5, 320.0], [56.6, 321.0], [56.7, 324.0], [56.8, 325.0], [56.9, 327.0], [57.0, 328.0], [57.1, 331.0], [57.2, 332.0], [57.3, 334.0], [57.4, 335.0], [57.5, 337.0], [57.6, 337.0], [57.7, 338.0], [57.8, 339.0], [57.9, 340.0], [58.0, 341.0], [58.1, 342.0], [58.2, 343.0], [58.3, 344.0], [58.4, 345.0], [58.5, 346.0], [58.6, 348.0], [58.7, 348.0], [58.8, 349.0], [58.9, 350.0], [59.0, 351.0], [59.1, 353.0], [59.2, 354.0], [59.3, 355.0], [59.4, 356.0], [59.5, 357.0], [59.6, 358.0], [59.7, 360.0], [59.8, 361.0], [59.9, 362.0], [60.0, 363.0], [60.1, 364.0], [60.2, 364.0], [60.3, 365.0], [60.4, 366.0], [60.5, 367.0], [60.6, 368.0], [60.7, 368.0], [60.8, 369.0], [60.9, 371.0], [61.0, 372.0], [61.1, 373.0], [61.2, 374.0], [61.3, 375.0], [61.4, 377.0], [61.5, 378.0], [61.6, 380.0], [61.7, 380.0], [61.8, 380.0], [61.9, 381.0], [62.0, 381.0], [62.1, 383.0], [62.2, 384.0], [62.3, 384.0], [62.4, 384.0], [62.5, 386.0], [62.6, 387.0], [62.7, 388.0], [62.8, 388.0], [62.9, 390.0], [63.0, 391.0], [63.1, 392.0], [63.2, 394.0], [63.3, 395.0], [63.4, 396.0], [63.5, 396.0], [63.6, 398.0], [63.7, 398.0], [63.8, 400.0], [63.9, 401.0], [64.0, 401.0], [64.1, 402.0], [64.2, 403.0], [64.3, 404.0], [64.4, 405.0], [64.5, 406.0], [64.6, 407.0], [64.7, 408.0], [64.8, 409.0], [64.9, 410.0], [65.0, 411.0], [65.1, 412.0], [65.2, 413.0], [65.3, 414.0], [65.4, 415.0], [65.5, 416.0], [65.6, 417.0], [65.7, 419.0], [65.8, 421.0], [65.9, 422.0], [66.0, 423.0], [66.1, 424.0], [66.2, 424.0], [66.3, 426.0], [66.4, 427.0], [66.5, 428.0], [66.6, 429.0], [66.7, 431.0], [66.8, 432.0], [66.9, 432.0], [67.0, 433.0], [67.1, 433.0], [67.2, 434.0], [67.3, 435.0], [67.4, 437.0], [67.5, 438.0], [67.6, 439.0], [67.7, 440.0], [67.8, 441.0], [67.9, 442.0], [68.0, 443.0], [68.1, 443.0], [68.2, 444.0], [68.3, 445.0], [68.4, 446.0], [68.5, 447.0], [68.6, 448.0], [68.7, 449.0], [68.8, 450.0], [68.9, 450.0], [69.0, 452.0], [69.1, 453.0], [69.2, 453.0], [69.3, 455.0], [69.4, 456.0], [69.5, 457.0], [69.6, 457.0], [69.7, 458.0], [69.8, 460.0], [69.9, 462.0], [70.0, 463.0], [70.1, 464.0], [70.2, 465.0], [70.3, 466.0], [70.4, 467.0], [70.5, 468.0], [70.6, 470.0], [70.7, 473.0], [70.8, 474.0], [70.9, 475.0], [71.0, 477.0], [71.1, 478.0], [71.2, 479.0], [71.3, 480.0], [71.4, 481.0], [71.5, 483.0], [71.6, 483.0], [71.7, 484.0], [71.8, 485.0], [71.9, 486.0], [72.0, 487.0], [72.1, 488.0], [72.2, 490.0], [72.3, 491.0], [72.4, 492.0], [72.5, 494.0], [72.6, 495.0], [72.7, 496.0], [72.8, 497.0], [72.9, 498.0], [73.0, 499.0], [73.1, 501.0], [73.2, 503.0], [73.3, 504.0], [73.4, 504.0], [73.5, 505.0], [73.6, 506.0], [73.7, 507.0], [73.8, 507.0], [73.9, 508.0], [74.0, 509.0], [74.1, 509.0], [74.2, 510.0], [74.3, 510.0], [74.4, 511.0], [74.5, 511.0], [74.6, 513.0], [74.7, 514.0], [74.8, 515.0], [74.9, 515.0], [75.0, 517.0], [75.1, 517.0], [75.2, 518.0], [75.3, 519.0], [75.4, 520.0], [75.5, 521.0], [75.6, 521.0], [75.7, 522.0], [75.8, 522.0], [75.9, 523.0], [76.0, 524.0], [76.1, 525.0], [76.2, 526.0], [76.3, 526.0], [76.4, 527.0], [76.5, 528.0], [76.6, 530.0], [76.7, 530.0], [76.8, 531.0], [76.9, 532.0], [77.0, 532.0], [77.1, 533.0], [77.2, 534.0], [77.3, 535.0], [77.4, 537.0], [77.5, 538.0], [77.6, 539.0], [77.7, 540.0], [77.8, 541.0], [77.9, 542.0], [78.0, 543.0], [78.1, 544.0], [78.2, 544.0], [78.3, 545.0], [78.4, 546.0], [78.5, 548.0], [78.6, 549.0], [78.7, 550.0], [78.8, 551.0], [78.9, 552.0], [79.0, 553.0], [79.1, 554.0], [79.2, 555.0], [79.3, 555.0], [79.4, 555.0], [79.5, 557.0], [79.6, 558.0], [79.7, 559.0], [79.8, 560.0], [79.9, 561.0], [80.0, 562.0], [80.1, 562.0], [80.2, 563.0], [80.3, 564.0], [80.4, 565.0], [80.5, 566.0], [80.6, 568.0], [80.7, 569.0], [80.8, 570.0], [80.9, 571.0], [81.0, 571.0], [81.1, 573.0], [81.2, 574.0], [81.3, 576.0], [81.4, 577.0], [81.5, 578.0], [81.6, 581.0], [81.7, 582.0], [81.8, 583.0], [81.9, 584.0], [82.0, 585.0], [82.1, 586.0], [82.2, 587.0], [82.3, 588.0], [82.4, 590.0], [82.5, 592.0], [82.6, 593.0], [82.7, 594.0], [82.8, 595.0], [82.9, 596.0], [83.0, 596.0], [83.1, 598.0], [83.2, 600.0], [83.3, 601.0], [83.4, 602.0], [83.5, 603.0], [83.6, 605.0], [83.7, 606.0], [83.8, 607.0], [83.9, 609.0], [84.0, 612.0], [84.1, 613.0], [84.2, 615.0], [84.3, 616.0], [84.4, 617.0], [84.5, 619.0], [84.6, 621.0], [84.7, 623.0], [84.8, 625.0], [84.9, 625.0], [85.0, 626.0], [85.1, 627.0], [85.2, 628.0], [85.3, 629.0], [85.4, 630.0], [85.5, 630.0], [85.6, 632.0], [85.7, 633.0], [85.8, 635.0], [85.9, 636.0], [86.0, 637.0], [86.1, 638.0], [86.2, 640.0], [86.3, 640.0], [86.4, 642.0], [86.5, 643.0], [86.6, 644.0], [86.7, 646.0], [86.8, 646.0], [86.9, 647.0], [87.0, 648.0], [87.1, 650.0], [87.2, 652.0], [87.3, 653.0], [87.4, 653.0], [87.5, 654.0], [87.6, 655.0], [87.7, 657.0], [87.8, 658.0], [87.9, 662.0], [88.0, 664.0], [88.1, 665.0], [88.2, 667.0], [88.3, 668.0], [88.4, 669.0], [88.5, 671.0], [88.6, 672.0], [88.7, 674.0], [88.8, 675.0], [88.9, 677.0], [89.0, 678.0], [89.1, 680.0], [89.2, 681.0], [89.3, 682.0], [89.4, 682.0], [89.5, 684.0], [89.6, 686.0], [89.7, 688.0], [89.8, 690.0], [89.9, 692.0], [90.0, 694.0], [90.1, 698.0], [90.2, 699.0], [90.3, 701.0], [90.4, 705.0], [90.5, 707.0], [90.6, 709.0], [90.7, 711.0], [90.8, 716.0], [90.9, 717.0], [91.0, 719.0], [91.1, 721.0], [91.2, 726.0], [91.3, 728.0], [91.4, 729.0], [91.5, 731.0], [91.6, 738.0], [91.7, 740.0], [91.8, 741.0], [91.9, 743.0], [92.0, 747.0], [92.1, 750.0], [92.2, 753.0], [92.3, 757.0], [92.4, 761.0], [92.5, 765.0], [92.6, 767.0], [92.7, 771.0], [92.8, 774.0], [92.9, 775.0], [93.0, 778.0], [93.1, 781.0], [93.2, 785.0], [93.3, 788.0], [93.4, 790.0], [93.5, 791.0], [93.6, 794.0], [93.7, 799.0], [93.8, 805.0], [93.9, 808.0], [94.0, 812.0], [94.1, 814.0], [94.2, 817.0], [94.3, 823.0], [94.4, 826.0], [94.5, 831.0], [94.6, 835.0], [94.7, 840.0], [94.8, 844.0], [94.9, 845.0], [95.0, 847.0], [95.1, 850.0], [95.2, 856.0], [95.3, 861.0], [95.4, 864.0], [95.5, 870.0], [95.6, 878.0], [95.7, 881.0], [95.8, 884.0], [95.9, 890.0], [96.0, 894.0], [96.1, 898.0], [96.2, 907.0], [96.3, 914.0], [96.4, 928.0], [96.5, 932.0], [96.6, 936.0], [96.7, 941.0], [96.8, 948.0], [96.9, 965.0], [97.0, 972.0], [97.1, 986.0], [97.2, 993.0], [97.3, 1001.0], [97.4, 1006.0], [97.5, 1012.0], [97.6, 1016.0], [97.7, 1024.0], [97.8, 1035.0], [97.9, 1042.0], [98.0, 1046.0], [98.1, 1050.0], [98.2, 1056.0], [98.3, 1062.0], [98.4, 1069.0], [98.5, 1075.0], [98.6, 1089.0], [98.7, 1106.0], [98.8, 1118.0], [98.9, 1136.0], [99.0, 1150.0], [99.1, 1171.0], [99.2, 1208.0], [99.3, 1227.0], [99.4, 1249.0], [99.5, 1320.0], [99.6, 1443.0], [99.7, 1542.0], [99.8, 1585.0], [99.9, 1632.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 1107.0, "series": [{"data": [[0.0, 1035.0], [600.0, 366.0], [700.0, 180.0], [800.0, 126.0], [200.0, 676.0], [900.0, 58.0], [1000.0, 71.0], [1100.0, 29.0], [1200.0, 15.0], [300.0, 491.0], [1300.0, 5.0], [1400.0, 4.0], [1500.0, 8.0], [100.0, 1107.0], [400.0, 480.0], [1600.0, 7.0], [1700.0, 2.0], [1900.0, 1.0], [500.0, 529.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1900.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 18.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 3792.0, "series": [{"data": [[0.0, 3792.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1380.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 18.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.745664739884395, "minX": 1.60239384E12, "maxY": 10.0, "series": [{"data": [[1.60239396E12, 10.0], [1.6023939E12, 10.0], [1.60239384E12, 10.0], [1.60239402E12, 9.745664739884395]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60239402E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 137.0, "minX": 1.0, "maxY": 1048.0, "series": [{"data": [[8.0, 198.0], [4.0, 276.0], [2.0, 488.0], [1.0, 1048.0], [9.0, 384.0], [10.0, 341.2841150357068], [6.0, 607.5], [3.0, 834.0], [7.0, 137.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.991522157996148, 341.5747591522152]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 1346.4166666666667, "minX": 1.60239384E12, "maxY": 5922974.4, "series": [{"data": [[1.60239396E12, 5630116.05], [1.6023939E12, 5922974.4], [1.60239384E12, 4843778.966666667], [1.60239402E12, 514366.68333333335]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60239396E12, 13656.55], [1.6023939E12, 13127.783333333333], [1.60239384E12, 11637.883333333333], [1.60239402E12, 1346.4166666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60239402E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 270.7341040462428, "minX": 1.60239384E12, "maxY": 350.9577216676452, "series": [{"data": [[1.60239396E12, 337.87478849407785], [1.6023939E12, 350.9577216676452], [1.60239384E12, 343.4153147306944], [1.60239402E12, 270.7341040462428]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60239402E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 269.71098265895955, "minX": 1.60239384E12, "maxY": 349.47739283617204, "series": [{"data": [[1.60239396E12, 336.7377326565142], [1.6023939E12, 349.47739283617204], [1.60239384E12, 341.9993510707332], [1.60239402E12, 269.71098265895955]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60239402E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.60239384E12, "maxY": 0.08111615833874104, "series": [{"data": [[1.60239396E12, 0.012408347433728142], [1.6023939E12, 0.010569583088667076], [1.60239384E12, 0.08111615833874104], [1.60239402E12, 0.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60239402E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 26.0, "minX": 1.60239384E12, "maxY": 1991.0, "series": [{"data": [[1.60239396E12, 1694.0], [1.6023939E12, 1991.0], [1.60239384E12, 1718.0], [1.60239402E12, 1048.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60239396E12, 34.96599957704544], [1.6023939E12, 37.0], [1.60239384E12, 42.87799963235855], [1.60239402E12, 55.52799966812134]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60239396E12, 35.0], [1.6023939E12, 37.0], [1.60239384E12, 43.26580014705658], [1.60239402E12, 56.780800132751466]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60239396E12, 35.0], [1.6023939E12, 37.0], [1.60239384E12, 43.0], [1.60239402E12, 56.22399983406067]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60239396E12, 26.0], [1.6023939E12, 30.0], [1.60239384E12, 33.0], [1.60239402E12, 51.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60239396E12, 254.0], [1.6023939E12, 281.0], [1.60239384E12, 270.0], [1.60239402E12, 227.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60239402E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 56.0, "minX": 1.0, "maxY": 1048.0, "series": [{"data": [[32.0, 274.5], [35.0, 178.0], [34.0, 263.5], [36.0, 254.0], [37.0, 196.0], [39.0, 234.0], [40.0, 166.0], [41.0, 245.0], [42.0, 171.0], [43.0, 156.0], [45.0, 145.0], [46.0, 174.0], [47.0, 111.0], [48.0, 97.0], [51.0, 108.0], [53.0, 155.0], [52.0, 97.0], [57.0, 129.5], [56.0, 75.5], [58.0, 111.5], [62.0, 119.5], [69.0, 148.0], [70.0, 56.0], [75.0, 78.0], [80.0, 91.5], [14.0, 600.0], [16.0, 598.5], [1.0, 1048.0], [17.0, 542.5], [18.0, 516.0], [19.0, 507.5], [20.0, 447.5], [21.0, 481.0], [22.0, 429.0], [23.0, 388.0], [24.0, 368.5], [25.0, 300.0], [26.0, 364.0], [27.0, 316.5], [28.0, 376.0], [29.0, 342.0], [30.0, 303.0], [31.0, 272.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 80.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 55.5, "minX": 1.0, "maxY": 1040.0, "series": [{"data": [[32.0, 274.0], [35.0, 177.0], [34.0, 262.5], [36.0, 252.5], [37.0, 195.0], [39.0, 233.0], [40.0, 165.0], [41.0, 244.0], [42.0, 170.5], [43.0, 156.0], [45.0, 144.5], [46.0, 173.0], [47.0, 111.0], [48.0, 97.0], [51.0, 108.0], [53.0, 154.0], [52.0, 97.0], [57.0, 128.5], [56.0, 75.5], [58.0, 110.5], [62.0, 119.5], [69.0, 148.0], [70.0, 55.5], [75.0, 77.0], [80.0, 91.0], [14.0, 600.0], [16.0, 596.0], [1.0, 1040.0], [17.0, 538.5], [18.0, 509.0], [19.0, 505.0], [20.0, 446.0], [21.0, 480.0], [22.0, 427.0], [23.0, 386.5], [24.0, 368.5], [25.0, 299.5], [26.0, 363.0], [27.0, 315.0], [28.0, 375.0], [29.0, 341.0], [30.0, 301.5], [31.0, 272.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 80.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 2.716666666666667, "minX": 1.60239384E12, "maxY": 29.55, "series": [{"data": [[1.60239396E12, 29.55], [1.6023939E12, 28.383333333333333], [1.60239384E12, 25.85], [1.60239402E12, 2.716666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60239402E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 2.8833333333333333, "minX": 1.60239384E12, "maxY": 29.55, "series": [{"data": [[1.60239396E12, 29.55], [1.6023939E12, 28.383333333333333], [1.60239384E12, 25.683333333333334], [1.60239402E12, 2.8833333333333333]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60239402E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 2.8833333333333333, "minX": 1.60239384E12, "maxY": 29.55, "series": [{"data": [[1.60239396E12, 29.55], [1.6023939E12, 28.383333333333333], [1.60239384E12, 25.683333333333334], [1.60239402E12, 2.8833333333333333]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60239402E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 2.8833333333333333, "minX": 1.60239384E12, "maxY": 29.55, "series": [{"data": [[1.60239396E12, 29.55], [1.6023939E12, 28.383333333333333], [1.60239384E12, 25.683333333333334], [1.60239402E12, 2.8833333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60239402E12, "title": "Total Transactions Per Second"}},
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

