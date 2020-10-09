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
        data: {"result": {"minY": 27.0, "minX": 0.0, "maxY": 2295.0, "series": [{"data": [[0.0, 27.0], [0.1, 32.0], [0.2, 33.0], [0.3, 34.0], [0.4, 34.0], [0.5, 36.0], [0.6, 37.0], [0.7, 37.0], [0.8, 37.0], [0.9, 37.0], [1.0, 37.0], [1.1, 37.0], [1.2, 38.0], [1.3, 38.0], [1.4, 38.0], [1.5, 38.0], [1.6, 39.0], [1.7, 39.0], [1.8, 39.0], [1.9, 39.0], [2.0, 39.0], [2.1, 40.0], [2.2, 40.0], [2.3, 40.0], [2.4, 40.0], [2.5, 41.0], [2.6, 41.0], [2.7, 41.0], [2.8, 41.0], [2.9, 41.0], [3.0, 42.0], [3.1, 42.0], [3.2, 42.0], [3.3, 42.0], [3.4, 42.0], [3.5, 43.0], [3.6, 43.0], [3.7, 43.0], [3.8, 43.0], [3.9, 44.0], [4.0, 44.0], [4.1, 44.0], [4.2, 44.0], [4.3, 44.0], [4.4, 44.0], [4.5, 44.0], [4.6, 44.0], [4.7, 45.0], [4.8, 45.0], [4.9, 45.0], [5.0, 45.0], [5.1, 45.0], [5.2, 45.0], [5.3, 45.0], [5.4, 46.0], [5.5, 46.0], [5.6, 46.0], [5.7, 46.0], [5.8, 46.0], [5.9, 46.0], [6.0, 46.0], [6.1, 47.0], [6.2, 47.0], [6.3, 47.0], [6.4, 47.0], [6.5, 47.0], [6.6, 48.0], [6.7, 48.0], [6.8, 48.0], [6.9, 48.0], [7.0, 48.0], [7.1, 49.0], [7.2, 49.0], [7.3, 49.0], [7.4, 49.0], [7.5, 50.0], [7.6, 50.0], [7.7, 50.0], [7.8, 50.0], [7.9, 50.0], [8.0, 51.0], [8.1, 51.0], [8.2, 51.0], [8.3, 51.0], [8.4, 52.0], [8.5, 52.0], [8.6, 52.0], [8.7, 52.0], [8.8, 52.0], [8.9, 53.0], [9.0, 53.0], [9.1, 53.0], [9.2, 54.0], [9.3, 54.0], [9.4, 54.0], [9.5, 55.0], [9.6, 55.0], [9.7, 55.0], [9.8, 55.0], [9.9, 56.0], [10.0, 56.0], [10.1, 56.0], [10.2, 56.0], [10.3, 57.0], [10.4, 57.0], [10.5, 57.0], [10.6, 58.0], [10.7, 58.0], [10.8, 58.0], [10.9, 59.0], [11.0, 59.0], [11.1, 59.0], [11.2, 60.0], [11.3, 60.0], [11.4, 60.0], [11.5, 60.0], [11.6, 61.0], [11.7, 61.0], [11.8, 61.0], [11.9, 62.0], [12.0, 62.0], [12.1, 63.0], [12.2, 63.0], [12.3, 63.0], [12.4, 63.0], [12.5, 64.0], [12.6, 64.0], [12.7, 65.0], [12.8, 65.0], [12.9, 65.0], [13.0, 65.0], [13.1, 66.0], [13.2, 66.0], [13.3, 66.0], [13.4, 67.0], [13.5, 67.0], [13.6, 68.0], [13.7, 68.0], [13.8, 68.0], [13.9, 68.0], [14.0, 69.0], [14.1, 69.0], [14.2, 70.0], [14.3, 70.0], [14.4, 70.0], [14.5, 71.0], [14.6, 71.0], [14.7, 72.0], [14.8, 72.0], [14.9, 72.0], [15.0, 73.0], [15.1, 73.0], [15.2, 74.0], [15.3, 74.0], [15.4, 74.0], [15.5, 74.0], [15.6, 75.0], [15.7, 75.0], [15.8, 75.0], [15.9, 75.0], [16.0, 76.0], [16.1, 76.0], [16.2, 76.0], [16.3, 76.0], [16.4, 77.0], [16.5, 77.0], [16.6, 77.0], [16.7, 78.0], [16.8, 78.0], [16.9, 78.0], [17.0, 79.0], [17.1, 79.0], [17.2, 79.0], [17.3, 79.0], [17.4, 80.0], [17.5, 80.0], [17.6, 80.0], [17.7, 80.0], [17.8, 80.0], [17.9, 81.0], [18.0, 81.0], [18.1, 81.0], [18.2, 81.0], [18.3, 82.0], [18.4, 82.0], [18.5, 83.0], [18.6, 83.0], [18.7, 83.0], [18.8, 84.0], [18.9, 84.0], [19.0, 85.0], [19.1, 85.0], [19.2, 86.0], [19.3, 86.0], [19.4, 86.0], [19.5, 87.0], [19.6, 87.0], [19.7, 88.0], [19.8, 88.0], [19.9, 88.0], [20.0, 88.0], [20.1, 89.0], [20.2, 89.0], [20.3, 90.0], [20.4, 90.0], [20.5, 91.0], [20.6, 91.0], [20.7, 91.0], [20.8, 92.0], [20.9, 92.0], [21.0, 92.0], [21.1, 93.0], [21.2, 93.0], [21.3, 93.0], [21.4, 94.0], [21.5, 94.0], [21.6, 95.0], [21.7, 95.0], [21.8, 96.0], [21.9, 96.0], [22.0, 97.0], [22.1, 97.0], [22.2, 97.0], [22.3, 97.0], [22.4, 98.0], [22.5, 98.0], [22.6, 99.0], [22.7, 99.0], [22.8, 99.0], [22.9, 100.0], [23.0, 100.0], [23.1, 101.0], [23.2, 101.0], [23.3, 102.0], [23.4, 102.0], [23.5, 102.0], [23.6, 103.0], [23.7, 104.0], [23.8, 104.0], [23.9, 105.0], [24.0, 105.0], [24.1, 107.0], [24.2, 107.0], [24.3, 108.0], [24.4, 109.0], [24.5, 109.0], [24.6, 109.0], [24.7, 110.0], [24.8, 110.0], [24.9, 111.0], [25.0, 112.0], [25.1, 112.0], [25.2, 112.0], [25.3, 113.0], [25.4, 113.0], [25.5, 114.0], [25.6, 114.0], [25.7, 115.0], [25.8, 116.0], [25.9, 116.0], [26.0, 116.0], [26.1, 117.0], [26.2, 117.0], [26.3, 117.0], [26.4, 118.0], [26.5, 118.0], [26.6, 118.0], [26.7, 119.0], [26.8, 119.0], [26.9, 120.0], [27.0, 120.0], [27.1, 121.0], [27.2, 121.0], [27.3, 121.0], [27.4, 122.0], [27.5, 122.0], [27.6, 122.0], [27.7, 123.0], [27.8, 123.0], [27.9, 123.0], [28.0, 124.0], [28.1, 124.0], [28.2, 125.0], [28.3, 125.0], [28.4, 126.0], [28.5, 126.0], [28.6, 127.0], [28.7, 127.0], [28.8, 127.0], [28.9, 128.0], [29.0, 128.0], [29.1, 128.0], [29.2, 129.0], [29.3, 129.0], [29.4, 130.0], [29.5, 130.0], [29.6, 131.0], [29.7, 132.0], [29.8, 132.0], [29.9, 133.0], [30.0, 133.0], [30.1, 134.0], [30.2, 134.0], [30.3, 135.0], [30.4, 135.0], [30.5, 135.0], [30.6, 136.0], [30.7, 136.0], [30.8, 136.0], [30.9, 136.0], [31.0, 136.0], [31.1, 137.0], [31.2, 137.0], [31.3, 137.0], [31.4, 137.0], [31.5, 138.0], [31.6, 138.0], [31.7, 138.0], [31.8, 138.0], [31.9, 138.0], [32.0, 139.0], [32.1, 139.0], [32.2, 139.0], [32.3, 139.0], [32.4, 140.0], [32.5, 140.0], [32.6, 140.0], [32.7, 140.0], [32.8, 141.0], [32.9, 141.0], [33.0, 141.0], [33.1, 141.0], [33.2, 141.0], [33.3, 142.0], [33.4, 142.0], [33.5, 142.0], [33.6, 142.0], [33.7, 142.0], [33.8, 143.0], [33.9, 143.0], [34.0, 143.0], [34.1, 143.0], [34.2, 144.0], [34.3, 144.0], [34.4, 145.0], [34.5, 145.0], [34.6, 145.0], [34.7, 146.0], [34.8, 146.0], [34.9, 146.0], [35.0, 147.0], [35.1, 147.0], [35.2, 147.0], [35.3, 148.0], [35.4, 148.0], [35.5, 148.0], [35.6, 149.0], [35.7, 149.0], [35.8, 150.0], [35.9, 150.0], [36.0, 150.0], [36.1, 151.0], [36.2, 151.0], [36.3, 152.0], [36.4, 152.0], [36.5, 153.0], [36.6, 153.0], [36.7, 154.0], [36.8, 155.0], [36.9, 155.0], [37.0, 156.0], [37.1, 156.0], [37.2, 157.0], [37.3, 157.0], [37.4, 158.0], [37.5, 158.0], [37.6, 159.0], [37.7, 159.0], [37.8, 160.0], [37.9, 160.0], [38.0, 161.0], [38.1, 162.0], [38.2, 162.0], [38.3, 163.0], [38.4, 164.0], [38.5, 164.0], [38.6, 165.0], [38.7, 165.0], [38.8, 166.0], [38.9, 166.0], [39.0, 167.0], [39.1, 168.0], [39.2, 169.0], [39.3, 169.0], [39.4, 170.0], [39.5, 170.0], [39.6, 171.0], [39.7, 172.0], [39.8, 172.0], [39.9, 173.0], [40.0, 174.0], [40.1, 175.0], [40.2, 175.0], [40.3, 176.0], [40.4, 176.0], [40.5, 176.0], [40.6, 177.0], [40.7, 177.0], [40.8, 178.0], [40.9, 179.0], [41.0, 180.0], [41.1, 180.0], [41.2, 181.0], [41.3, 182.0], [41.4, 183.0], [41.5, 183.0], [41.6, 184.0], [41.7, 185.0], [41.8, 185.0], [41.9, 186.0], [42.0, 187.0], [42.1, 188.0], [42.2, 188.0], [42.3, 189.0], [42.4, 189.0], [42.5, 190.0], [42.6, 191.0], [42.7, 192.0], [42.8, 192.0], [42.9, 193.0], [43.0, 194.0], [43.1, 194.0], [43.2, 194.0], [43.3, 195.0], [43.4, 196.0], [43.5, 197.0], [43.6, 197.0], [43.7, 198.0], [43.8, 199.0], [43.9, 199.0], [44.0, 200.0], [44.1, 201.0], [44.2, 201.0], [44.3, 202.0], [44.4, 202.0], [44.5, 203.0], [44.6, 204.0], [44.7, 205.0], [44.8, 206.0], [44.9, 206.0], [45.0, 207.0], [45.1, 208.0], [45.2, 208.0], [45.3, 209.0], [45.4, 210.0], [45.5, 210.0], [45.6, 210.0], [45.7, 211.0], [45.8, 211.0], [45.9, 213.0], [46.0, 213.0], [46.1, 214.0], [46.2, 215.0], [46.3, 216.0], [46.4, 217.0], [46.5, 218.0], [46.6, 219.0], [46.7, 220.0], [46.8, 220.0], [46.9, 220.0], [47.0, 221.0], [47.1, 222.0], [47.2, 222.0], [47.3, 223.0], [47.4, 224.0], [47.5, 224.0], [47.6, 224.0], [47.7, 226.0], [47.8, 226.0], [47.9, 227.0], [48.0, 227.0], [48.1, 228.0], [48.2, 229.0], [48.3, 229.0], [48.4, 230.0], [48.5, 231.0], [48.6, 232.0], [48.7, 232.0], [48.8, 233.0], [48.9, 234.0], [49.0, 235.0], [49.1, 236.0], [49.2, 237.0], [49.3, 238.0], [49.4, 239.0], [49.5, 240.0], [49.6, 240.0], [49.7, 241.0], [49.8, 241.0], [49.9, 242.0], [50.0, 243.0], [50.1, 244.0], [50.2, 245.0], [50.3, 245.0], [50.4, 246.0], [50.5, 247.0], [50.6, 248.0], [50.7, 249.0], [50.8, 250.0], [50.9, 251.0], [51.0, 252.0], [51.1, 252.0], [51.2, 253.0], [51.3, 254.0], [51.4, 255.0], [51.5, 255.0], [51.6, 256.0], [51.7, 258.0], [51.8, 259.0], [51.9, 260.0], [52.0, 261.0], [52.1, 262.0], [52.2, 262.0], [52.3, 263.0], [52.4, 265.0], [52.5, 265.0], [52.6, 266.0], [52.7, 267.0], [52.8, 268.0], [52.9, 269.0], [53.0, 270.0], [53.1, 270.0], [53.2, 271.0], [53.3, 272.0], [53.4, 273.0], [53.5, 274.0], [53.6, 275.0], [53.7, 276.0], [53.8, 277.0], [53.9, 277.0], [54.0, 279.0], [54.1, 279.0], [54.2, 280.0], [54.3, 281.0], [54.4, 283.0], [54.5, 284.0], [54.6, 285.0], [54.7, 286.0], [54.8, 287.0], [54.9, 288.0], [55.0, 289.0], [55.1, 290.0], [55.2, 291.0], [55.3, 291.0], [55.4, 292.0], [55.5, 293.0], [55.6, 295.0], [55.7, 295.0], [55.8, 296.0], [55.9, 298.0], [56.0, 299.0], [56.1, 301.0], [56.2, 302.0], [56.3, 303.0], [56.4, 303.0], [56.5, 304.0], [56.6, 304.0], [56.7, 307.0], [56.8, 307.0], [56.9, 308.0], [57.0, 310.0], [57.1, 312.0], [57.2, 313.0], [57.3, 314.0], [57.4, 315.0], [57.5, 316.0], [57.6, 317.0], [57.7, 319.0], [57.8, 319.0], [57.9, 321.0], [58.0, 322.0], [58.1, 325.0], [58.2, 325.0], [58.3, 326.0], [58.4, 327.0], [58.5, 329.0], [58.6, 330.0], [58.7, 331.0], [58.8, 332.0], [58.9, 333.0], [59.0, 334.0], [59.1, 335.0], [59.2, 336.0], [59.3, 337.0], [59.4, 338.0], [59.5, 340.0], [59.6, 341.0], [59.7, 342.0], [59.8, 344.0], [59.9, 346.0], [60.0, 347.0], [60.1, 348.0], [60.2, 349.0], [60.3, 350.0], [60.4, 352.0], [60.5, 352.0], [60.6, 354.0], [60.7, 354.0], [60.8, 355.0], [60.9, 357.0], [61.0, 358.0], [61.1, 360.0], [61.2, 362.0], [61.3, 362.0], [61.4, 363.0], [61.5, 364.0], [61.6, 365.0], [61.7, 365.0], [61.8, 367.0], [61.9, 367.0], [62.0, 369.0], [62.1, 370.0], [62.2, 371.0], [62.3, 373.0], [62.4, 374.0], [62.5, 375.0], [62.6, 377.0], [62.7, 378.0], [62.8, 380.0], [62.9, 381.0], [63.0, 382.0], [63.1, 383.0], [63.2, 385.0], [63.3, 386.0], [63.4, 387.0], [63.5, 388.0], [63.6, 389.0], [63.7, 390.0], [63.8, 391.0], [63.9, 393.0], [64.0, 394.0], [64.1, 395.0], [64.2, 397.0], [64.3, 398.0], [64.4, 400.0], [64.5, 400.0], [64.6, 402.0], [64.7, 402.0], [64.8, 404.0], [64.9, 405.0], [65.0, 407.0], [65.1, 408.0], [65.2, 409.0], [65.3, 410.0], [65.4, 411.0], [65.5, 412.0], [65.6, 414.0], [65.7, 415.0], [65.8, 415.0], [65.9, 416.0], [66.0, 416.0], [66.1, 417.0], [66.2, 418.0], [66.3, 419.0], [66.4, 421.0], [66.5, 423.0], [66.6, 425.0], [66.7, 426.0], [66.8, 427.0], [66.9, 428.0], [67.0, 429.0], [67.1, 431.0], [67.2, 433.0], [67.3, 434.0], [67.4, 435.0], [67.5, 437.0], [67.6, 438.0], [67.7, 439.0], [67.8, 440.0], [67.9, 441.0], [68.0, 443.0], [68.1, 445.0], [68.2, 446.0], [68.3, 448.0], [68.4, 451.0], [68.5, 453.0], [68.6, 454.0], [68.7, 455.0], [68.8, 458.0], [68.9, 459.0], [69.0, 460.0], [69.1, 461.0], [69.2, 463.0], [69.3, 464.0], [69.4, 465.0], [69.5, 467.0], [69.6, 468.0], [69.7, 470.0], [69.8, 471.0], [69.9, 472.0], [70.0, 473.0], [70.1, 473.0], [70.2, 475.0], [70.3, 476.0], [70.4, 477.0], [70.5, 478.0], [70.6, 479.0], [70.7, 480.0], [70.8, 481.0], [70.9, 483.0], [71.0, 484.0], [71.1, 484.0], [71.2, 485.0], [71.3, 487.0], [71.4, 488.0], [71.5, 489.0], [71.6, 490.0], [71.7, 491.0], [71.8, 493.0], [71.9, 494.0], [72.0, 495.0], [72.1, 496.0], [72.2, 496.0], [72.3, 497.0], [72.4, 498.0], [72.5, 500.0], [72.6, 501.0], [72.7, 502.0], [72.8, 504.0], [72.9, 504.0], [73.0, 505.0], [73.1, 506.0], [73.2, 507.0], [73.3, 508.0], [73.4, 509.0], [73.5, 509.0], [73.6, 509.0], [73.7, 510.0], [73.8, 511.0], [73.9, 512.0], [74.0, 512.0], [74.1, 512.0], [74.2, 513.0], [74.3, 514.0], [74.4, 515.0], [74.5, 516.0], [74.6, 517.0], [74.7, 518.0], [74.8, 519.0], [74.9, 519.0], [75.0, 520.0], [75.1, 521.0], [75.2, 521.0], [75.3, 522.0], [75.4, 523.0], [75.5, 523.0], [75.6, 523.0], [75.7, 524.0], [75.8, 524.0], [75.9, 525.0], [76.0, 526.0], [76.1, 526.0], [76.2, 527.0], [76.3, 528.0], [76.4, 528.0], [76.5, 529.0], [76.6, 529.0], [76.7, 530.0], [76.8, 531.0], [76.9, 531.0], [77.0, 532.0], [77.1, 533.0], [77.2, 534.0], [77.3, 535.0], [77.4, 537.0], [77.5, 537.0], [77.6, 538.0], [77.7, 540.0], [77.8, 541.0], [77.9, 542.0], [78.0, 544.0], [78.1, 545.0], [78.2, 546.0], [78.3, 547.0], [78.4, 548.0], [78.5, 549.0], [78.6, 549.0], [78.7, 550.0], [78.8, 551.0], [78.9, 552.0], [79.0, 553.0], [79.1, 553.0], [79.2, 555.0], [79.3, 556.0], [79.4, 557.0], [79.5, 558.0], [79.6, 560.0], [79.7, 560.0], [79.8, 562.0], [79.9, 563.0], [80.0, 564.0], [80.1, 566.0], [80.2, 567.0], [80.3, 568.0], [80.4, 569.0], [80.5, 570.0], [80.6, 571.0], [80.7, 572.0], [80.8, 574.0], [80.9, 574.0], [81.0, 576.0], [81.1, 577.0], [81.2, 579.0], [81.3, 580.0], [81.4, 581.0], [81.5, 582.0], [81.6, 584.0], [81.7, 585.0], [81.8, 587.0], [81.9, 589.0], [82.0, 590.0], [82.1, 590.0], [82.2, 591.0], [82.3, 592.0], [82.4, 593.0], [82.5, 594.0], [82.6, 595.0], [82.7, 595.0], [82.8, 596.0], [82.9, 598.0], [83.0, 599.0], [83.1, 600.0], [83.2, 601.0], [83.3, 603.0], [83.4, 605.0], [83.5, 606.0], [83.6, 606.0], [83.7, 608.0], [83.8, 611.0], [83.9, 614.0], [84.0, 615.0], [84.1, 616.0], [84.2, 618.0], [84.3, 622.0], [84.4, 624.0], [84.5, 628.0], [84.6, 630.0], [84.7, 631.0], [84.8, 633.0], [84.9, 635.0], [85.0, 637.0], [85.1, 639.0], [85.2, 641.0], [85.3, 644.0], [85.4, 646.0], [85.5, 649.0], [85.6, 651.0], [85.7, 653.0], [85.8, 655.0], [85.9, 656.0], [86.0, 657.0], [86.1, 659.0], [86.2, 661.0], [86.3, 662.0], [86.4, 665.0], [86.5, 666.0], [86.6, 668.0], [86.7, 671.0], [86.8, 672.0], [86.9, 674.0], [87.0, 677.0], [87.1, 679.0], [87.2, 681.0], [87.3, 684.0], [87.4, 686.0], [87.5, 689.0], [87.6, 690.0], [87.7, 693.0], [87.8, 697.0], [87.9, 698.0], [88.0, 700.0], [88.1, 702.0], [88.2, 705.0], [88.3, 706.0], [88.4, 709.0], [88.5, 712.0], [88.6, 714.0], [88.7, 717.0], [88.8, 720.0], [88.9, 721.0], [89.0, 723.0], [89.1, 724.0], [89.2, 725.0], [89.3, 728.0], [89.4, 731.0], [89.5, 734.0], [89.6, 738.0], [89.7, 740.0], [89.8, 742.0], [89.9, 744.0], [90.0, 747.0], [90.1, 750.0], [90.2, 753.0], [90.3, 757.0], [90.4, 759.0], [90.5, 761.0], [90.6, 764.0], [90.7, 766.0], [90.8, 771.0], [90.9, 776.0], [91.0, 780.0], [91.1, 782.0], [91.2, 787.0], [91.3, 789.0], [91.4, 790.0], [91.5, 794.0], [91.6, 795.0], [91.7, 796.0], [91.8, 798.0], [91.9, 802.0], [92.0, 805.0], [92.1, 809.0], [92.2, 813.0], [92.3, 815.0], [92.4, 822.0], [92.5, 826.0], [92.6, 829.0], [92.7, 834.0], [92.8, 839.0], [92.9, 842.0], [93.0, 846.0], [93.1, 849.0], [93.2, 854.0], [93.3, 861.0], [93.4, 863.0], [93.5, 865.0], [93.6, 871.0], [93.7, 875.0], [93.8, 883.0], [93.9, 885.0], [94.0, 890.0], [94.1, 895.0], [94.2, 900.0], [94.3, 911.0], [94.4, 917.0], [94.5, 920.0], [94.6, 923.0], [94.7, 930.0], [94.8, 934.0], [94.9, 939.0], [95.0, 945.0], [95.1, 948.0], [95.2, 954.0], [95.3, 958.0], [95.4, 964.0], [95.5, 976.0], [95.6, 978.0], [95.7, 981.0], [95.8, 988.0], [95.9, 995.0], [96.0, 1008.0], [96.1, 1018.0], [96.2, 1025.0], [96.3, 1029.0], [96.4, 1035.0], [96.5, 1042.0], [96.6, 1052.0], [96.7, 1059.0], [96.8, 1066.0], [96.9, 1076.0], [97.0, 1084.0], [97.1, 1089.0], [97.2, 1099.0], [97.3, 1110.0], [97.4, 1124.0], [97.5, 1142.0], [97.6, 1153.0], [97.7, 1165.0], [97.8, 1173.0], [97.9, 1176.0], [98.0, 1191.0], [98.1, 1196.0], [98.2, 1205.0], [98.3, 1221.0], [98.4, 1232.0], [98.5, 1256.0], [98.6, 1276.0], [98.7, 1292.0], [98.8, 1297.0], [98.9, 1307.0], [99.0, 1331.0], [99.1, 1363.0], [99.2, 1381.0], [99.3, 1406.0], [99.4, 1455.0], [99.5, 1487.0], [99.6, 1504.0], [99.7, 1525.0], [99.8, 1587.0], [99.9, 1662.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 1187.0, "series": [{"data": [[0.0, 1187.0], [2200.0, 1.0], [600.0, 255.0], [700.0, 203.0], [800.0, 122.0], [200.0, 628.0], [900.0, 92.0], [1000.0, 65.0], [1100.0, 47.0], [1200.0, 38.0], [300.0, 435.0], [1300.0, 22.0], [1400.0, 16.0], [1500.0, 12.0], [400.0, 420.0], [100.0, 1093.0], [1600.0, 6.0], [1700.0, 2.0], [1900.0, 1.0], [500.0, 546.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 2200.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 3767.0, "series": [{"data": [[0.0, 3767.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1401.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 22.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 1.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.752747252747252, "minX": 1.6022532E12, "maxY": 10.0, "series": [{"data": [[1.60225326E12, 10.0], [1.6022532E12, 10.0], [1.60225338E12, 9.752747252747252], [1.60225332E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60225338E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 151.0, "minX": 1.0, "maxY": 1176.0, "series": [{"data": [[8.0, 151.0], [4.0, 473.0], [2.0, 875.0], [1.0, 678.0], [9.0, 247.0], [10.0, 344.625241219605], [5.0, 731.0], [6.0, 896.0], [3.0, 740.0], [7.0, 1176.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.991331150067428, 345.1772298208424]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 1415.85, "minX": 1.6022532E12, "maxY": 5898805.95, "series": [{"data": [[1.60225326E12, 5898805.95], [1.6022532E12, 4866857.466666667], [1.60225338E12, 547108.9666666667], [1.60225332E12, 5598470.316666666]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60225326E12, 13082.716666666667], [1.6022532E12, 11682.3], [1.60225338E12, 1415.85], [1.60225332E12, 13594.816666666668]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60225338E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 290.73076923076934, "minX": 1.6022532E12, "maxY": 353.1319976428992, "series": [{"data": [[1.60225326E12, 353.1319976428992], [1.6022532E12, 348.3458306399476], [1.60225338E12, 290.73076923076934], [1.60225332E12, 340.36600566572326]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60225338E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 289.46153846153834, "minX": 1.6022532E12, "maxY": 351.76487919858545, "series": [{"data": [[1.60225326E12, 351.76487919858545], [1.6022532E12, 347.06528765352317], [1.60225338E12, 289.46153846153834], [1.60225332E12, 339.1988668555247]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60225338E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.6022532E12, "maxY": 0.07627666451195846, "series": [{"data": [[1.60225326E12, 0.01001767825574545], [1.6022532E12, 0.07627666451195846], [1.60225338E12, 0.0], [1.60225332E12, 0.010198300283286133]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60225338E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 27.0, "minX": 1.6022532E12, "maxY": 2295.0, "series": [{"data": [[1.60225326E12, 1780.0], [1.6022532E12, 2295.0], [1.60225338E12, 1201.0], [1.60225332E12, 1662.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60225326E12, 37.0], [1.6022532E12, 43.0], [1.60225338E12, 48.234999781847], [1.60225332E12, 36.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60225326E12, 37.0], [1.6022532E12, 43.0], [1.60225338E12, 49.0585000872612], [1.60225332E12, 36.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60225326E12, 37.0], [1.6022532E12, 43.0], [1.60225338E12, 48.6924998909235], [1.60225332E12, 36.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60225326E12, 32.0], [1.6022532E12, 27.0], [1.60225338E12, 45.0], [1.60225332E12, 30.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60225326E12, 262.0], [1.6022532E12, 255.0], [1.60225338E12, 185.0], [1.60225332E12, 220.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60225338E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 50.0, "minX": 7.0, "maxY": 740.0, "series": [{"data": [[32.0, 250.0], [33.0, 207.0], [34.0, 231.0], [35.0, 208.0], [36.0, 271.0], [37.0, 213.0], [39.0, 154.5], [38.0, 246.5], [41.0, 137.0], [40.0, 166.5], [42.0, 162.5], [43.0, 50.0], [45.0, 174.0], [44.0, 146.0], [51.0, 152.0], [52.0, 118.5], [54.0, 109.0], [57.0, 90.0], [58.0, 64.5], [59.0, 84.0], [61.0, 76.0], [66.0, 134.5], [70.0, 58.0], [73.0, 53.0], [87.0, 97.0], [7.0, 740.0], [11.0, 675.0], [13.0, 503.0], [15.0, 547.0], [16.0, 482.0], [17.0, 527.0], [18.0, 532.0], [19.0, 484.5], [20.0, 481.5], [21.0, 471.5], [22.0, 455.0], [23.0, 409.0], [24.0, 334.5], [25.0, 293.5], [26.0, 285.0], [27.0, 276.5], [28.0, 261.5], [29.0, 324.0], [30.0, 271.0], [31.0, 243.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[26.0, 183.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 87.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 50.0, "minX": 7.0, "maxY": 740.0, "series": [{"data": [[32.0, 249.0], [33.0, 207.0], [34.0, 230.5], [35.0, 208.0], [36.0, 269.5], [37.0, 212.0], [39.0, 154.5], [38.0, 246.0], [41.0, 136.5], [40.0, 164.5], [42.0, 161.5], [43.0, 50.0], [45.0, 174.0], [44.0, 146.0], [51.0, 151.0], [52.0, 116.5], [54.0, 109.0], [57.0, 90.0], [58.0, 64.5], [59.0, 84.0], [61.0, 75.0], [66.0, 134.0], [70.0, 57.5], [73.0, 53.0], [87.0, 96.0], [7.0, 740.0], [11.0, 675.0], [13.0, 494.0], [15.0, 544.0], [16.0, 478.5], [17.0, 522.0], [18.0, 529.5], [19.0, 477.5], [20.0, 480.5], [21.0, 469.0], [22.0, 453.0], [23.0, 407.0], [24.0, 332.5], [25.0, 293.0], [26.0, 283.0], [27.0, 274.0], [28.0, 260.5], [29.0, 324.0], [30.0, 270.0], [31.0, 242.5]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[26.0, 183.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 87.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 2.8666666666666667, "minX": 1.6022532E12, "maxY": 29.416666666666668, "series": [{"data": [[1.60225326E12, 28.283333333333335], [1.6022532E12, 25.95], [1.60225338E12, 2.8666666666666667], [1.60225332E12, 29.416666666666668]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60225338E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.6022532E12, "maxY": 29.416666666666668, "series": [{"data": [[1.60225326E12, 28.266666666666666], [1.6022532E12, 25.783333333333335], [1.60225338E12, 3.033333333333333], [1.60225332E12, 29.416666666666668]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.60225326E12, 0.016666666666666666]], "isOverall": false, "label": "400", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60225338E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.6022532E12, "maxY": 29.416666666666668, "series": [{"data": [[1.60225326E12, 28.266666666666666], [1.6022532E12, 25.783333333333335], [1.60225338E12, 3.033333333333333], [1.60225332E12, 29.416666666666668]], "isOverall": false, "label": "HTTP Request-success", "isController": false}, {"data": [[1.60225326E12, 0.016666666666666666]], "isOverall": false, "label": "HTTP Request-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60225338E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.6022532E12, "maxY": 29.416666666666668, "series": [{"data": [[1.60225326E12, 28.266666666666666], [1.6022532E12, 25.783333333333335], [1.60225338E12, 3.033333333333333], [1.60225332E12, 29.416666666666668]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.60225326E12, 0.016666666666666666]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60225338E12, "title": "Total Transactions Per Second"}},
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

