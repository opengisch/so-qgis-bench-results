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
        data: {"result": {"minY": 36.0, "minX": 0.0, "maxY": 3320.0, "series": [{"data": [[0.0, 36.0], [0.1, 41.0], [0.2, 41.0], [0.3, 42.0], [0.4, 42.0], [0.5, 43.0], [0.6, 43.0], [0.7, 43.0], [0.8, 43.0], [0.9, 43.0], [1.0, 44.0], [1.1, 44.0], [1.2, 44.0], [1.3, 44.0], [1.4, 44.0], [1.5, 45.0], [1.6, 45.0], [1.7, 45.0], [1.8, 45.0], [1.9, 45.0], [2.0, 45.0], [2.1, 46.0], [2.2, 46.0], [2.3, 46.0], [2.4, 46.0], [2.5, 46.0], [2.6, 46.0], [2.7, 46.0], [2.8, 46.0], [2.9, 46.0], [3.0, 46.0], [3.1, 47.0], [3.2, 47.0], [3.3, 47.0], [3.4, 47.0], [3.5, 47.0], [3.6, 47.0], [3.7, 47.0], [3.8, 47.0], [3.9, 47.0], [4.0, 48.0], [4.1, 48.0], [4.2, 48.0], [4.3, 48.0], [4.4, 48.0], [4.5, 48.0], [4.6, 48.0], [4.7, 48.0], [4.8, 48.0], [4.9, 48.0], [5.0, 49.0], [5.1, 49.0], [5.2, 49.0], [5.3, 49.0], [5.4, 49.0], [5.5, 49.0], [5.6, 49.0], [5.7, 49.0], [5.8, 49.0], [5.9, 49.0], [6.0, 49.0], [6.1, 49.0], [6.2, 50.0], [6.3, 50.0], [6.4, 50.0], [6.5, 50.0], [6.6, 50.0], [6.7, 50.0], [6.8, 50.0], [6.9, 50.0], [7.0, 50.0], [7.1, 50.0], [7.2, 50.0], [7.3, 51.0], [7.4, 51.0], [7.5, 51.0], [7.6, 51.0], [7.7, 51.0], [7.8, 51.0], [7.9, 51.0], [8.0, 51.0], [8.1, 51.0], [8.2, 51.0], [8.3, 52.0], [8.4, 52.0], [8.5, 52.0], [8.6, 52.0], [8.7, 52.0], [8.8, 52.0], [8.9, 52.0], [9.0, 52.0], [9.1, 52.0], [9.2, 52.0], [9.3, 52.0], [9.4, 52.0], [9.5, 52.0], [9.6, 53.0], [9.7, 53.0], [9.8, 53.0], [9.9, 53.0], [10.0, 53.0], [10.1, 53.0], [10.2, 53.0], [10.3, 53.0], [10.4, 53.0], [10.5, 53.0], [10.6, 54.0], [10.7, 54.0], [10.8, 54.0], [10.9, 54.0], [11.0, 54.0], [11.1, 54.0], [11.2, 54.0], [11.3, 54.0], [11.4, 54.0], [11.5, 55.0], [11.6, 55.0], [11.7, 55.0], [11.8, 55.0], [11.9, 55.0], [12.0, 55.0], [12.1, 55.0], [12.2, 55.0], [12.3, 55.0], [12.4, 55.0], [12.5, 56.0], [12.6, 56.0], [12.7, 56.0], [12.8, 56.0], [12.9, 56.0], [13.0, 56.0], [13.1, 56.0], [13.2, 56.0], [13.3, 56.0], [13.4, 56.0], [13.5, 57.0], [13.6, 57.0], [13.7, 57.0], [13.8, 57.0], [13.9, 57.0], [14.0, 57.0], [14.1, 57.0], [14.2, 58.0], [14.3, 58.0], [14.4, 58.0], [14.5, 58.0], [14.6, 59.0], [14.7, 59.0], [14.8, 59.0], [14.9, 59.0], [15.0, 59.0], [15.1, 59.0], [15.2, 60.0], [15.3, 60.0], [15.4, 60.0], [15.5, 60.0], [15.6, 60.0], [15.7, 61.0], [15.8, 61.0], [15.9, 61.0], [16.0, 62.0], [16.1, 62.0], [16.2, 62.0], [16.3, 62.0], [16.4, 62.0], [16.5, 63.0], [16.6, 63.0], [16.7, 63.0], [16.8, 64.0], [16.9, 64.0], [17.0, 64.0], [17.1, 65.0], [17.2, 65.0], [17.3, 65.0], [17.4, 66.0], [17.5, 66.0], [17.6, 67.0], [17.7, 68.0], [17.8, 68.0], [17.9, 69.0], [18.0, 69.0], [18.1, 70.0], [18.2, 71.0], [18.3, 71.0], [18.4, 72.0], [18.5, 73.0], [18.6, 74.0], [18.7, 74.0], [18.8, 75.0], [18.9, 75.0], [19.0, 76.0], [19.1, 77.0], [19.2, 77.0], [19.3, 78.0], [19.4, 78.0], [19.5, 79.0], [19.6, 79.0], [19.7, 80.0], [19.8, 80.0], [19.9, 81.0], [20.0, 81.0], [20.1, 81.0], [20.2, 82.0], [20.3, 82.0], [20.4, 83.0], [20.5, 83.0], [20.6, 83.0], [20.7, 84.0], [20.8, 84.0], [20.9, 84.0], [21.0, 84.0], [21.1, 84.0], [21.2, 85.0], [21.3, 85.0], [21.4, 85.0], [21.5, 86.0], [21.6, 86.0], [21.7, 86.0], [21.8, 86.0], [21.9, 87.0], [22.0, 87.0], [22.1, 87.0], [22.2, 87.0], [22.3, 88.0], [22.4, 88.0], [22.5, 88.0], [22.6, 88.0], [22.7, 89.0], [22.8, 89.0], [22.9, 89.0], [23.0, 89.0], [23.1, 90.0], [23.2, 90.0], [23.3, 90.0], [23.4, 90.0], [23.5, 90.0], [23.6, 90.0], [23.7, 91.0], [23.8, 91.0], [23.9, 91.0], [24.0, 91.0], [24.1, 91.0], [24.2, 91.0], [24.3, 92.0], [24.4, 92.0], [24.5, 92.0], [24.6, 92.0], [24.7, 92.0], [24.8, 92.0], [24.9, 92.0], [25.0, 92.0], [25.1, 93.0], [25.2, 93.0], [25.3, 93.0], [25.4, 93.0], [25.5, 93.0], [25.6, 93.0], [25.7, 93.0], [25.8, 94.0], [25.9, 94.0], [26.0, 94.0], [26.1, 94.0], [26.2, 94.0], [26.3, 94.0], [26.4, 95.0], [26.5, 95.0], [26.6, 95.0], [26.7, 95.0], [26.8, 95.0], [26.9, 95.0], [27.0, 96.0], [27.1, 96.0], [27.2, 96.0], [27.3, 96.0], [27.4, 96.0], [27.5, 96.0], [27.6, 96.0], [27.7, 97.0], [27.8, 97.0], [27.9, 97.0], [28.0, 97.0], [28.1, 97.0], [28.2, 97.0], [28.3, 97.0], [28.4, 97.0], [28.5, 98.0], [28.6, 98.0], [28.7, 98.0], [28.8, 98.0], [28.9, 98.0], [29.0, 98.0], [29.1, 98.0], [29.2, 99.0], [29.3, 99.0], [29.4, 99.0], [29.5, 99.0], [29.6, 99.0], [29.7, 99.0], [29.8, 99.0], [29.9, 99.0], [30.0, 100.0], [30.1, 100.0], [30.2, 100.0], [30.3, 100.0], [30.4, 100.0], [30.5, 100.0], [30.6, 100.0], [30.7, 100.0], [30.8, 101.0], [30.9, 101.0], [31.0, 101.0], [31.1, 101.0], [31.2, 101.0], [31.3, 101.0], [31.4, 101.0], [31.5, 102.0], [31.6, 102.0], [31.7, 102.0], [31.8, 102.0], [31.9, 102.0], [32.0, 103.0], [32.1, 103.0], [32.2, 103.0], [32.3, 103.0], [32.4, 103.0], [32.5, 103.0], [32.6, 104.0], [32.7, 104.0], [32.8, 104.0], [32.9, 104.0], [33.0, 104.0], [33.1, 104.0], [33.2, 104.0], [33.3, 105.0], [33.4, 105.0], [33.5, 105.0], [33.6, 105.0], [33.7, 105.0], [33.8, 105.0], [33.9, 105.0], [34.0, 106.0], [34.1, 106.0], [34.2, 106.0], [34.3, 106.0], [34.4, 106.0], [34.5, 106.0], [34.6, 106.0], [34.7, 107.0], [34.8, 107.0], [34.9, 107.0], [35.0, 107.0], [35.1, 107.0], [35.2, 107.0], [35.3, 107.0], [35.4, 108.0], [35.5, 108.0], [35.6, 108.0], [35.7, 108.0], [35.8, 108.0], [35.9, 108.0], [36.0, 109.0], [36.1, 109.0], [36.2, 109.0], [36.3, 109.0], [36.4, 109.0], [36.5, 110.0], [36.6, 110.0], [36.7, 110.0], [36.8, 110.0], [36.9, 111.0], [37.0, 111.0], [37.1, 111.0], [37.2, 112.0], [37.3, 112.0], [37.4, 112.0], [37.5, 113.0], [37.6, 113.0], [37.7, 113.0], [37.8, 113.0], [37.9, 114.0], [38.0, 114.0], [38.1, 115.0], [38.2, 115.0], [38.3, 115.0], [38.4, 115.0], [38.5, 116.0], [38.6, 116.0], [38.7, 117.0], [38.8, 118.0], [38.9, 118.0], [39.0, 118.0], [39.1, 119.0], [39.2, 119.0], [39.3, 120.0], [39.4, 120.0], [39.5, 121.0], [39.6, 121.0], [39.7, 121.0], [39.8, 122.0], [39.9, 123.0], [40.0, 123.0], [40.1, 124.0], [40.2, 124.0], [40.3, 124.0], [40.4, 125.0], [40.5, 125.0], [40.6, 127.0], [40.7, 127.0], [40.8, 128.0], [40.9, 128.0], [41.0, 129.0], [41.1, 130.0], [41.2, 131.0], [41.3, 132.0], [41.4, 134.0], [41.5, 135.0], [41.6, 136.0], [41.7, 137.0], [41.8, 138.0], [41.9, 139.0], [42.0, 140.0], [42.1, 141.0], [42.2, 142.0], [42.3, 144.0], [42.4, 144.0], [42.5, 145.0], [42.6, 145.0], [42.7, 146.0], [42.8, 148.0], [42.9, 149.0], [43.0, 149.0], [43.1, 149.0], [43.2, 151.0], [43.3, 152.0], [43.4, 152.0], [43.5, 153.0], [43.6, 153.0], [43.7, 154.0], [43.8, 155.0], [43.9, 157.0], [44.0, 157.0], [44.1, 158.0], [44.2, 159.0], [44.3, 159.0], [44.4, 160.0], [44.5, 161.0], [44.6, 162.0], [44.7, 162.0], [44.8, 163.0], [44.9, 164.0], [45.0, 164.0], [45.1, 165.0], [45.2, 166.0], [45.3, 166.0], [45.4, 167.0], [45.5, 169.0], [45.6, 169.0], [45.7, 170.0], [45.8, 170.0], [45.9, 172.0], [46.0, 173.0], [46.1, 174.0], [46.2, 174.0], [46.3, 174.0], [46.4, 176.0], [46.5, 176.0], [46.6, 177.0], [46.7, 177.0], [46.8, 178.0], [46.9, 178.0], [47.0, 179.0], [47.1, 180.0], [47.2, 180.0], [47.3, 181.0], [47.4, 181.0], [47.5, 182.0], [47.6, 183.0], [47.7, 183.0], [47.8, 184.0], [47.9, 185.0], [48.0, 186.0], [48.1, 187.0], [48.2, 188.0], [48.3, 189.0], [48.4, 190.0], [48.5, 190.0], [48.6, 191.0], [48.7, 193.0], [48.8, 194.0], [48.9, 195.0], [49.0, 196.0], [49.1, 196.0], [49.2, 197.0], [49.3, 199.0], [49.4, 200.0], [49.5, 200.0], [49.6, 201.0], [49.7, 203.0], [49.8, 204.0], [49.9, 206.0], [50.0, 207.0], [50.1, 207.0], [50.2, 209.0], [50.3, 209.0], [50.4, 210.0], [50.5, 211.0], [50.6, 212.0], [50.7, 213.0], [50.8, 215.0], [50.9, 216.0], [51.0, 217.0], [51.1, 219.0], [51.2, 219.0], [51.3, 220.0], [51.4, 221.0], [51.5, 221.0], [51.6, 223.0], [51.7, 224.0], [51.8, 224.0], [51.9, 225.0], [52.0, 226.0], [52.1, 227.0], [52.2, 227.0], [52.3, 229.0], [52.4, 230.0], [52.5, 231.0], [52.6, 232.0], [52.7, 233.0], [52.8, 234.0], [52.9, 234.0], [53.0, 235.0], [53.1, 237.0], [53.2, 239.0], [53.3, 240.0], [53.4, 241.0], [53.5, 243.0], [53.6, 244.0], [53.7, 246.0], [53.8, 246.0], [53.9, 248.0], [54.0, 249.0], [54.1, 250.0], [54.2, 250.0], [54.3, 251.0], [54.4, 252.0], [54.5, 253.0], [54.6, 254.0], [54.7, 254.0], [54.8, 255.0], [54.9, 257.0], [55.0, 258.0], [55.1, 259.0], [55.2, 261.0], [55.3, 261.0], [55.4, 261.0], [55.5, 262.0], [55.6, 262.0], [55.7, 263.0], [55.8, 264.0], [55.9, 265.0], [56.0, 266.0], [56.1, 267.0], [56.2, 267.0], [56.3, 268.0], [56.4, 269.0], [56.5, 271.0], [56.6, 271.0], [56.7, 272.0], [56.8, 273.0], [56.9, 274.0], [57.0, 275.0], [57.1, 277.0], [57.2, 278.0], [57.3, 279.0], [57.4, 280.0], [57.5, 280.0], [57.6, 281.0], [57.7, 282.0], [57.8, 283.0], [57.9, 285.0], [58.0, 286.0], [58.1, 288.0], [58.2, 289.0], [58.3, 290.0], [58.4, 291.0], [58.5, 292.0], [58.6, 293.0], [58.7, 294.0], [58.8, 295.0], [58.9, 297.0], [59.0, 298.0], [59.1, 298.0], [59.2, 300.0], [59.3, 301.0], [59.4, 302.0], [59.5, 303.0], [59.6, 304.0], [59.7, 304.0], [59.8, 306.0], [59.9, 306.0], [60.0, 308.0], [60.1, 309.0], [60.2, 310.0], [60.3, 312.0], [60.4, 313.0], [60.5, 314.0], [60.6, 315.0], [60.7, 318.0], [60.8, 319.0], [60.9, 320.0], [61.0, 322.0], [61.1, 323.0], [61.2, 324.0], [61.3, 326.0], [61.4, 326.0], [61.5, 327.0], [61.6, 328.0], [61.7, 329.0], [61.8, 330.0], [61.9, 333.0], [62.0, 334.0], [62.1, 335.0], [62.2, 337.0], [62.3, 337.0], [62.4, 339.0], [62.5, 341.0], [62.6, 342.0], [62.7, 343.0], [62.8, 347.0], [62.9, 348.0], [63.0, 349.0], [63.1, 351.0], [63.2, 353.0], [63.3, 354.0], [63.4, 356.0], [63.5, 358.0], [63.6, 359.0], [63.7, 361.0], [63.8, 362.0], [63.9, 363.0], [64.0, 366.0], [64.1, 368.0], [64.2, 369.0], [64.3, 370.0], [64.4, 371.0], [64.5, 372.0], [64.6, 374.0], [64.7, 375.0], [64.8, 376.0], [64.9, 378.0], [65.0, 379.0], [65.1, 380.0], [65.2, 380.0], [65.3, 382.0], [65.4, 383.0], [65.5, 384.0], [65.6, 386.0], [65.7, 388.0], [65.8, 389.0], [65.9, 392.0], [66.0, 393.0], [66.1, 396.0], [66.2, 398.0], [66.3, 398.0], [66.4, 400.0], [66.5, 401.0], [66.6, 402.0], [66.7, 403.0], [66.8, 404.0], [66.9, 405.0], [67.0, 406.0], [67.1, 408.0], [67.2, 409.0], [67.3, 411.0], [67.4, 412.0], [67.5, 413.0], [67.6, 414.0], [67.7, 416.0], [67.8, 419.0], [67.9, 421.0], [68.0, 421.0], [68.1, 422.0], [68.2, 423.0], [68.3, 424.0], [68.4, 427.0], [68.5, 428.0], [68.6, 430.0], [68.7, 431.0], [68.8, 433.0], [68.9, 434.0], [69.0, 435.0], [69.1, 437.0], [69.2, 437.0], [69.3, 438.0], [69.4, 440.0], [69.5, 443.0], [69.6, 445.0], [69.7, 445.0], [69.8, 447.0], [69.9, 449.0], [70.0, 450.0], [70.1, 451.0], [70.2, 452.0], [70.3, 454.0], [70.4, 457.0], [70.5, 459.0], [70.6, 460.0], [70.7, 460.0], [70.8, 461.0], [70.9, 462.0], [71.0, 463.0], [71.1, 464.0], [71.2, 465.0], [71.3, 465.0], [71.4, 467.0], [71.5, 468.0], [71.6, 469.0], [71.7, 471.0], [71.8, 472.0], [71.9, 473.0], [72.0, 475.0], [72.1, 477.0], [72.2, 479.0], [72.3, 480.0], [72.4, 480.0], [72.5, 483.0], [72.6, 485.0], [72.7, 487.0], [72.8, 489.0], [72.9, 490.0], [73.0, 492.0], [73.1, 494.0], [73.2, 496.0], [73.3, 497.0], [73.4, 499.0], [73.5, 500.0], [73.6, 502.0], [73.7, 504.0], [73.8, 506.0], [73.9, 507.0], [74.0, 509.0], [74.1, 512.0], [74.2, 514.0], [74.3, 516.0], [74.4, 521.0], [74.5, 523.0], [74.6, 524.0], [74.7, 526.0], [74.8, 527.0], [74.9, 529.0], [75.0, 531.0], [75.1, 532.0], [75.2, 534.0], [75.3, 535.0], [75.4, 537.0], [75.5, 538.0], [75.6, 543.0], [75.7, 545.0], [75.8, 547.0], [75.9, 549.0], [76.0, 550.0], [76.1, 552.0], [76.2, 553.0], [76.3, 554.0], [76.4, 557.0], [76.5, 560.0], [76.6, 561.0], [76.7, 566.0], [76.8, 568.0], [76.9, 569.0], [77.0, 572.0], [77.1, 573.0], [77.2, 577.0], [77.3, 579.0], [77.4, 581.0], [77.5, 583.0], [77.6, 586.0], [77.7, 588.0], [77.8, 590.0], [77.9, 592.0], [78.0, 593.0], [78.1, 594.0], [78.2, 595.0], [78.3, 596.0], [78.4, 597.0], [78.5, 599.0], [78.6, 602.0], [78.7, 604.0], [78.8, 607.0], [78.9, 610.0], [79.0, 611.0], [79.1, 613.0], [79.2, 615.0], [79.3, 616.0], [79.4, 619.0], [79.5, 621.0], [79.6, 624.0], [79.7, 625.0], [79.8, 629.0], [79.9, 631.0], [80.0, 634.0], [80.1, 635.0], [80.2, 637.0], [80.3, 639.0], [80.4, 640.0], [80.5, 642.0], [80.6, 643.0], [80.7, 644.0], [80.8, 647.0], [80.9, 648.0], [81.0, 651.0], [81.1, 655.0], [81.2, 657.0], [81.3, 658.0], [81.4, 659.0], [81.5, 662.0], [81.6, 663.0], [81.7, 664.0], [81.8, 665.0], [81.9, 666.0], [82.0, 669.0], [82.1, 672.0], [82.2, 673.0], [82.3, 674.0], [82.4, 677.0], [82.5, 680.0], [82.6, 684.0], [82.7, 687.0], [82.8, 689.0], [82.9, 691.0], [83.0, 693.0], [83.1, 695.0], [83.2, 696.0], [83.3, 697.0], [83.4, 699.0], [83.5, 700.0], [83.6, 703.0], [83.7, 706.0], [83.8, 707.0], [83.9, 711.0], [84.0, 712.0], [84.1, 714.0], [84.2, 718.0], [84.3, 720.0], [84.4, 722.0], [84.5, 725.0], [84.6, 727.0], [84.7, 730.0], [84.8, 733.0], [84.9, 736.0], [85.0, 738.0], [85.1, 740.0], [85.2, 742.0], [85.3, 744.0], [85.4, 750.0], [85.5, 753.0], [85.6, 756.0], [85.7, 758.0], [85.8, 761.0], [85.9, 766.0], [86.0, 767.0], [86.1, 769.0], [86.2, 773.0], [86.3, 776.0], [86.4, 776.0], [86.5, 778.0], [86.6, 780.0], [86.7, 784.0], [86.8, 785.0], [86.9, 787.0], [87.0, 789.0], [87.1, 791.0], [87.2, 792.0], [87.3, 794.0], [87.4, 796.0], [87.5, 797.0], [87.6, 800.0], [87.7, 802.0], [87.8, 803.0], [87.9, 806.0], [88.0, 808.0], [88.1, 811.0], [88.2, 813.0], [88.3, 817.0], [88.4, 818.0], [88.5, 819.0], [88.6, 821.0], [88.7, 825.0], [88.8, 828.0], [88.9, 829.0], [89.0, 832.0], [89.1, 834.0], [89.2, 837.0], [89.3, 842.0], [89.4, 845.0], [89.5, 849.0], [89.6, 850.0], [89.7, 855.0], [89.8, 857.0], [89.9, 860.0], [90.0, 863.0], [90.1, 865.0], [90.2, 867.0], [90.3, 872.0], [90.4, 874.0], [90.5, 878.0], [90.6, 883.0], [90.7, 887.0], [90.8, 888.0], [90.9, 897.0], [91.0, 898.0], [91.1, 901.0], [91.2, 905.0], [91.3, 910.0], [91.4, 921.0], [91.5, 930.0], [91.6, 934.0], [91.7, 940.0], [91.8, 946.0], [91.9, 951.0], [92.0, 963.0], [92.1, 965.0], [92.2, 977.0], [92.3, 994.0], [92.4, 1009.0], [92.5, 1018.0], [92.6, 1021.0], [92.7, 1027.0], [92.8, 1034.0], [92.9, 1040.0], [93.0, 1044.0], [93.1, 1051.0], [93.2, 1055.0], [93.3, 1062.0], [93.4, 1066.0], [93.5, 1072.0], [93.6, 1078.0], [93.7, 1081.0], [93.8, 1090.0], [93.9, 1094.0], [94.0, 1097.0], [94.1, 1105.0], [94.2, 1110.0], [94.3, 1114.0], [94.4, 1119.0], [94.5, 1121.0], [94.6, 1127.0], [94.7, 1129.0], [94.8, 1133.0], [94.9, 1136.0], [95.0, 1140.0], [95.1, 1146.0], [95.2, 1152.0], [95.3, 1159.0], [95.4, 1170.0], [95.5, 1184.0], [95.6, 1191.0], [95.7, 1196.0], [95.8, 1202.0], [95.9, 1214.0], [96.0, 1217.0], [96.1, 1228.0], [96.2, 1232.0], [96.3, 1242.0], [96.4, 1253.0], [96.5, 1263.0], [96.6, 1282.0], [96.7, 1288.0], [96.8, 1294.0], [96.9, 1305.0], [97.0, 1311.0], [97.1, 1320.0], [97.2, 1332.0], [97.3, 1344.0], [97.4, 1372.0], [97.5, 1385.0], [97.6, 1396.0], [97.7, 1408.0], [97.8, 1441.0], [97.9, 1459.0], [98.0, 1473.0], [98.1, 1493.0], [98.2, 1516.0], [98.3, 1546.0], [98.4, 1569.0], [98.5, 1619.0], [98.6, 1662.0], [98.7, 1698.0], [98.8, 1756.0], [98.9, 1806.0], [99.0, 1859.0], [99.1, 1934.0], [99.2, 2026.0], [99.3, 2142.0], [99.4, 2235.0], [99.5, 2283.0], [99.6, 2352.0], [99.7, 2442.0], [99.8, 2521.0], [99.9, 2622.0], [100.0, 3320.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 1575.0, "series": [{"data": [[0.0, 1575.0], [600.0, 260.0], [700.0, 218.0], [800.0, 182.0], [900.0, 67.0], [1000.0, 91.0], [1100.0, 87.0], [1200.0, 59.0], [1300.0, 44.0], [1400.0, 25.0], [1500.0, 18.0], [100.0, 1024.0], [1600.0, 12.0], [1700.0, 8.0], [1800.0, 12.0], [1900.0, 4.0], [2000.0, 5.0], [2100.0, 6.0], [2200.0, 8.0], [2300.0, 7.0], [2400.0, 5.0], [2500.0, 7.0], [2600.0, 1.0], [2900.0, 1.0], [3000.0, 1.0], [3100.0, 1.0], [200.0, 514.0], [3200.0, 1.0], [3300.0, 1.0], [300.0, 380.0], [400.0, 372.0], [500.0, 266.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3300.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 98.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 3868.0, "series": [{"data": [[0.0, 3868.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1296.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 98.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.903225806451612, "minX": 1.60507548E12, "maxY": 10.0, "series": [{"data": [[1.6050756E12, 10.0], [1.60507548E12, 9.967278531524363], [1.60507566E12, 9.903225806451612], [1.60507554E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60507566E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 362.8381061473853, "minX": 1.0, "maxY": 3049.0, "series": [{"data": [[4.0, 1347.0], [8.0, 779.8], [2.0, 2585.0], [1.0, 2948.0], [9.0, 658.2], [5.0, 846.0], [10.0, 362.8381061473853], [6.0, 729.0], [3.0, 3049.0], [7.0, 1107.75]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.983656404408968, 366.2939946788293]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 4094.55, "minX": 1.60507548E12, "maxY": 1347224.9333333333, "series": [{"data": [[1.6050756E12, 1347224.9333333333], [1.60507548E12, 1179612.1833333333], [1.60507566E12, 453690.2], [1.60507554E12, 1268529.25]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6050756E12, 15819.95], [1.60507548E12, 10877.316666666668], [1.60507566E12, 4094.55], [1.60507554E12, 14699.133333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60507566E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 333.2479061976552, "minX": 1.60507548E12, "maxY": 472.860215053763, "series": [{"data": [[1.6050756E12, 333.2479061976552], [1.60507548E12, 409.5411013567438], [1.60507566E12, 472.860215053763], [1.60507554E12, 340.8767826583]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60507566E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 332.8676716917926, "minX": 1.60507548E12, "maxY": 472.39354838709653, "series": [{"data": [[1.6050756E12, 332.8676716917926], [1.60507548E12, 408.9776536312854], [1.60507566E12, 472.39354838709653], [1.60507554E12, 340.4945807187685]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60507566E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.008602150537634405, "minX": 1.60507548E12, "maxY": 0.07422186751795691, "series": [{"data": [[1.6050756E12, 0.010050251256281425], [1.60507548E12, 0.07422186751795691], [1.60507566E12, 0.008602150537634405], [1.60507554E12, 0.010268111808328602]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60507566E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 36.0, "minX": 1.60507548E12, "maxY": 3320.0, "series": [{"data": [[1.6050756E12, 2313.0], [1.60507548E12, 2306.0], [1.60507566E12, 3320.0], [1.60507554E12, 2551.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6050756E12, 44.0], [1.60507548E12, 42.0], [1.60507566E12, 44.0], [1.60507554E12, 44.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6050756E12, 44.0], [1.60507548E12, 42.41460011959076], [1.60507566E12, 44.0], [1.60507554E12, 44.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6050756E12, 44.0], [1.60507548E12, 42.0], [1.60507566E12, 44.0], [1.60507554E12, 44.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.6050756E12, 40.0], [1.60507548E12, 38.0], [1.60507566E12, 43.0], [1.60507554E12, 36.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6050756E12, 199.0], [1.60507548E12, 290.0], [1.60507566E12, 279.0], [1.60507554E12, 179.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60507566E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 60.0, "minX": 1.0, "maxY": 2766.5, "series": [{"data": [[2.0, 2766.5], [3.0, 2466.0], [4.0, 2447.0], [5.0, 1075.0], [6.0, 1241.0], [7.0, 1316.0], [8.0, 1049.0], [9.0, 83.0], [10.0, 777.5], [11.0, 865.0], [12.0, 723.5], [13.0, 755.5], [14.0, 692.0], [15.0, 580.5], [16.0, 531.0], [17.0, 601.0], [18.0, 530.5], [19.0, 564.0], [20.0, 363.0], [21.0, 437.5], [22.0, 437.0], [23.0, 106.0], [24.0, 392.5], [25.0, 395.0], [26.0, 299.0], [27.0, 287.0], [28.0, 231.5], [29.0, 271.0], [30.0, 248.0], [33.0, 254.0], [32.0, 236.5], [35.0, 229.0], [34.0, 155.5], [37.0, 104.0], [36.0, 88.5], [39.0, 174.0], [41.0, 112.0], [43.0, 94.5], [42.0, 102.5], [44.0, 110.0], [45.0, 132.0], [47.0, 76.5], [46.0, 93.0], [48.0, 96.5], [49.0, 104.0], [51.0, 166.0], [52.0, 104.0], [54.0, 170.0], [55.0, 109.0], [57.0, 127.5], [58.0, 113.0], [61.0, 109.0], [63.0, 137.0], [62.0, 150.0], [64.0, 163.5], [70.0, 112.0], [69.0, 60.0], [73.0, 107.0], [85.0, 96.0], [91.0, 112.0], [1.0, 143.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 91.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 60.0, "minX": 1.0, "maxY": 2766.0, "series": [{"data": [[2.0, 2766.0], [3.0, 2465.5], [4.0, 2445.5], [5.0, 1070.0], [6.0, 1240.0], [7.0, 1315.0], [8.0, 1042.5], [9.0, 83.0], [10.0, 777.0], [11.0, 865.0], [12.0, 722.0], [13.0, 753.0], [14.0, 691.0], [15.0, 580.0], [16.0, 530.0], [17.0, 600.5], [18.0, 530.5], [19.0, 562.0], [20.0, 362.0], [21.0, 437.5], [22.0, 436.0], [23.0, 106.0], [24.0, 392.5], [25.0, 394.5], [26.0, 298.5], [27.0, 287.0], [28.0, 231.5], [29.0, 271.0], [30.0, 247.5], [33.0, 254.0], [32.0, 235.5], [35.0, 229.0], [34.0, 155.0], [37.0, 104.0], [36.0, 88.5], [39.0, 174.0], [41.0, 112.0], [43.0, 94.5], [42.0, 101.5], [44.0, 109.5], [45.0, 131.0], [47.0, 76.0], [46.0, 93.0], [48.0, 96.5], [49.0, 104.0], [51.0, 165.5], [52.0, 104.0], [54.0, 170.0], [55.0, 109.0], [57.0, 127.5], [58.0, 113.0], [61.0, 107.0], [63.0, 137.0], [62.0, 150.0], [64.0, 163.5], [70.0, 112.0], [69.0, 60.0], [73.0, 107.0], [85.0, 96.0], [91.0, 112.0], [1.0, 139.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 91.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 7.583333333333333, "minX": 1.60507548E12, "maxY": 29.85, "series": [{"data": [[1.6050756E12, 29.85], [1.60507548E12, 21.05], [1.60507566E12, 7.583333333333333], [1.60507554E12, 29.216666666666665]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60507566E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 7.75, "minX": 1.60507548E12, "maxY": 29.85, "series": [{"data": [[1.6050756E12, 29.85], [1.60507548E12, 20.883333333333333], [1.60507566E12, 7.75], [1.60507554E12, 29.216666666666665]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60507566E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 7.75, "minX": 1.60507548E12, "maxY": 29.85, "series": [{"data": [[1.6050756E12, 29.85], [1.60507548E12, 20.883333333333333], [1.60507566E12, 7.75], [1.60507554E12, 29.216666666666665]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60507566E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 7.75, "minX": 1.60507548E12, "maxY": 29.85, "series": [{"data": [[1.6050756E12, 29.85], [1.60507548E12, 20.883333333333333], [1.60507566E12, 7.75], [1.60507554E12, 29.216666666666665]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60507566E12, "title": "Total Transactions Per Second"}},
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

