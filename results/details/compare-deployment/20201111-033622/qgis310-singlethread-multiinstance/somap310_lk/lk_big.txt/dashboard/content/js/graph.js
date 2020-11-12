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
        data: {"result": {"minY": 32.0, "minX": 0.0, "maxY": 4086.0, "series": [{"data": [[0.0, 32.0], [0.1, 34.0], [0.2, 36.0], [0.3, 36.0], [0.4, 36.0], [0.5, 37.0], [0.6, 37.0], [0.7, 37.0], [0.8, 38.0], [0.9, 38.0], [1.0, 38.0], [1.1, 39.0], [1.2, 39.0], [1.3, 39.0], [1.4, 40.0], [1.5, 40.0], [1.6, 40.0], [1.7, 40.0], [1.8, 40.0], [1.9, 41.0], [2.0, 41.0], [2.1, 41.0], [2.2, 41.0], [2.3, 41.0], [2.4, 42.0], [2.5, 42.0], [2.6, 42.0], [2.7, 42.0], [2.8, 42.0], [2.9, 42.0], [3.0, 42.0], [3.1, 43.0], [3.2, 43.0], [3.3, 43.0], [3.4, 43.0], [3.5, 43.0], [3.6, 43.0], [3.7, 43.0], [3.8, 44.0], [3.9, 44.0], [4.0, 44.0], [4.1, 44.0], [4.2, 44.0], [4.3, 44.0], [4.4, 44.0], [4.5, 44.0], [4.6, 44.0], [4.7, 44.0], [4.8, 45.0], [4.9, 45.0], [5.0, 45.0], [5.1, 45.0], [5.2, 45.0], [5.3, 45.0], [5.4, 45.0], [5.5, 45.0], [5.6, 45.0], [5.7, 46.0], [5.8, 46.0], [5.9, 46.0], [6.0, 46.0], [6.1, 46.0], [6.2, 46.0], [6.3, 46.0], [6.4, 47.0], [6.5, 47.0], [6.6, 47.0], [6.7, 47.0], [6.8, 47.0], [6.9, 47.0], [7.0, 47.0], [7.1, 48.0], [7.2, 48.0], [7.3, 48.0], [7.4, 48.0], [7.5, 48.0], [7.6, 48.0], [7.7, 49.0], [7.8, 49.0], [7.9, 49.0], [8.0, 49.0], [8.1, 49.0], [8.2, 50.0], [8.3, 50.0], [8.4, 50.0], [8.5, 50.0], [8.6, 50.0], [8.7, 50.0], [8.8, 51.0], [8.9, 51.0], [9.0, 51.0], [9.1, 52.0], [9.2, 52.0], [9.3, 53.0], [9.4, 53.0], [9.5, 53.0], [9.6, 54.0], [9.7, 54.0], [9.8, 54.0], [9.9, 54.0], [10.0, 55.0], [10.1, 56.0], [10.2, 56.0], [10.3, 57.0], [10.4, 57.0], [10.5, 58.0], [10.6, 59.0], [10.7, 60.0], [10.8, 60.0], [10.9, 61.0], [11.0, 61.0], [11.1, 62.0], [11.2, 62.0], [11.3, 63.0], [11.4, 63.0], [11.5, 64.0], [11.6, 65.0], [11.7, 66.0], [11.8, 67.0], [11.9, 67.0], [12.0, 68.0], [12.1, 68.0], [12.2, 69.0], [12.3, 69.0], [12.4, 70.0], [12.5, 70.0], [12.6, 70.0], [12.7, 71.0], [12.8, 71.0], [12.9, 71.0], [13.0, 72.0], [13.1, 72.0], [13.2, 72.0], [13.3, 72.0], [13.4, 73.0], [13.5, 73.0], [13.6, 73.0], [13.7, 73.0], [13.8, 74.0], [13.9, 74.0], [14.0, 74.0], [14.1, 74.0], [14.2, 74.0], [14.3, 74.0], [14.4, 75.0], [14.5, 75.0], [14.6, 75.0], [14.7, 75.0], [14.8, 75.0], [14.9, 76.0], [15.0, 76.0], [15.1, 76.0], [15.2, 76.0], [15.3, 76.0], [15.4, 76.0], [15.5, 77.0], [15.6, 77.0], [15.7, 77.0], [15.8, 77.0], [15.9, 77.0], [16.0, 77.0], [16.1, 77.0], [16.2, 77.0], [16.3, 78.0], [16.4, 78.0], [16.5, 78.0], [16.6, 78.0], [16.7, 78.0], [16.8, 78.0], [16.9, 78.0], [17.0, 79.0], [17.1, 79.0], [17.2, 79.0], [17.3, 79.0], [17.4, 79.0], [17.5, 79.0], [17.6, 79.0], [17.7, 80.0], [17.8, 80.0], [17.9, 80.0], [18.0, 80.0], [18.1, 80.0], [18.2, 80.0], [18.3, 80.0], [18.4, 80.0], [18.5, 80.0], [18.6, 81.0], [18.7, 81.0], [18.8, 81.0], [18.9, 81.0], [19.0, 81.0], [19.1, 81.0], [19.2, 81.0], [19.3, 82.0], [19.4, 82.0], [19.5, 82.0], [19.6, 82.0], [19.7, 82.0], [19.8, 82.0], [19.9, 82.0], [20.0, 83.0], [20.1, 83.0], [20.2, 83.0], [20.3, 83.0], [20.4, 83.0], [20.5, 83.0], [20.6, 83.0], [20.7, 83.0], [20.8, 83.0], [20.9, 84.0], [21.0, 84.0], [21.1, 84.0], [21.2, 84.0], [21.3, 84.0], [21.4, 84.0], [21.5, 84.0], [21.6, 84.0], [21.7, 85.0], [21.8, 85.0], [21.9, 85.0], [22.0, 85.0], [22.1, 85.0], [22.2, 85.0], [22.3, 85.0], [22.4, 85.0], [22.5, 85.0], [22.6, 85.0], [22.7, 85.0], [22.8, 85.0], [22.9, 86.0], [23.0, 86.0], [23.1, 86.0], [23.2, 86.0], [23.3, 86.0], [23.4, 86.0], [23.5, 86.0], [23.6, 86.0], [23.7, 86.0], [23.8, 86.0], [23.9, 87.0], [24.0, 87.0], [24.1, 87.0], [24.2, 87.0], [24.3, 87.0], [24.4, 87.0], [24.5, 87.0], [24.6, 87.0], [24.7, 87.0], [24.8, 88.0], [24.9, 88.0], [25.0, 88.0], [25.1, 88.0], [25.2, 88.0], [25.3, 88.0], [25.4, 88.0], [25.5, 89.0], [25.6, 89.0], [25.7, 89.0], [25.8, 89.0], [25.9, 89.0], [26.0, 89.0], [26.1, 89.0], [26.2, 89.0], [26.3, 89.0], [26.4, 90.0], [26.5, 90.0], [26.6, 90.0], [26.7, 90.0], [26.8, 90.0], [26.9, 90.0], [27.0, 91.0], [27.1, 91.0], [27.2, 91.0], [27.3, 91.0], [27.4, 91.0], [27.5, 91.0], [27.6, 91.0], [27.7, 92.0], [27.8, 92.0], [27.9, 92.0], [28.0, 92.0], [28.1, 92.0], [28.2, 93.0], [28.3, 93.0], [28.4, 93.0], [28.5, 93.0], [28.6, 94.0], [28.7, 94.0], [28.8, 94.0], [28.9, 94.0], [29.0, 95.0], [29.1, 95.0], [29.2, 95.0], [29.3, 95.0], [29.4, 95.0], [29.5, 96.0], [29.6, 96.0], [29.7, 96.0], [29.8, 97.0], [29.9, 97.0], [30.0, 97.0], [30.1, 97.0], [30.2, 98.0], [30.3, 98.0], [30.4, 98.0], [30.5, 99.0], [30.6, 99.0], [30.7, 99.0], [30.8, 99.0], [30.9, 100.0], [31.0, 100.0], [31.1, 100.0], [31.2, 100.0], [31.3, 101.0], [31.4, 101.0], [31.5, 102.0], [31.6, 102.0], [31.7, 103.0], [31.8, 103.0], [31.9, 103.0], [32.0, 104.0], [32.1, 104.0], [32.2, 104.0], [32.3, 105.0], [32.4, 105.0], [32.5, 106.0], [32.6, 107.0], [32.7, 108.0], [32.8, 108.0], [32.9, 109.0], [33.0, 109.0], [33.1, 110.0], [33.2, 110.0], [33.3, 111.0], [33.4, 111.0], [33.5, 112.0], [33.6, 113.0], [33.7, 113.0], [33.8, 114.0], [33.9, 114.0], [34.0, 115.0], [34.1, 116.0], [34.2, 116.0], [34.3, 117.0], [34.4, 117.0], [34.5, 118.0], [34.6, 118.0], [34.7, 119.0], [34.8, 120.0], [34.9, 120.0], [35.0, 121.0], [35.1, 122.0], [35.2, 123.0], [35.3, 124.0], [35.4, 125.0], [35.5, 125.0], [35.6, 126.0], [35.7, 127.0], [35.8, 127.0], [35.9, 128.0], [36.0, 129.0], [36.1, 129.0], [36.2, 130.0], [36.3, 131.0], [36.4, 132.0], [36.5, 132.0], [36.6, 133.0], [36.7, 133.0], [36.8, 134.0], [36.9, 135.0], [37.0, 135.0], [37.1, 137.0], [37.2, 137.0], [37.3, 138.0], [37.4, 139.0], [37.5, 140.0], [37.6, 140.0], [37.7, 142.0], [37.8, 142.0], [37.9, 143.0], [38.0, 143.0], [38.1, 144.0], [38.2, 145.0], [38.3, 146.0], [38.4, 146.0], [38.5, 147.0], [38.6, 147.0], [38.7, 148.0], [38.8, 148.0], [38.9, 148.0], [39.0, 149.0], [39.1, 149.0], [39.2, 150.0], [39.3, 150.0], [39.4, 151.0], [39.5, 151.0], [39.6, 152.0], [39.7, 153.0], [39.8, 154.0], [39.9, 154.0], [40.0, 155.0], [40.1, 156.0], [40.2, 157.0], [40.3, 157.0], [40.4, 158.0], [40.5, 159.0], [40.6, 160.0], [40.7, 161.0], [40.8, 161.0], [40.9, 162.0], [41.0, 163.0], [41.1, 166.0], [41.2, 166.0], [41.3, 168.0], [41.4, 168.0], [41.5, 169.0], [41.6, 170.0], [41.7, 171.0], [41.8, 172.0], [41.9, 172.0], [42.0, 173.0], [42.1, 174.0], [42.2, 175.0], [42.3, 177.0], [42.4, 178.0], [42.5, 179.0], [42.6, 179.0], [42.7, 181.0], [42.8, 182.0], [42.9, 183.0], [43.0, 183.0], [43.1, 185.0], [43.2, 186.0], [43.3, 187.0], [43.4, 187.0], [43.5, 188.0], [43.6, 189.0], [43.7, 191.0], [43.8, 192.0], [43.9, 193.0], [44.0, 194.0], [44.1, 196.0], [44.2, 197.0], [44.3, 198.0], [44.4, 199.0], [44.5, 200.0], [44.6, 200.0], [44.7, 201.0], [44.8, 203.0], [44.9, 204.0], [45.0, 205.0], [45.1, 206.0], [45.2, 207.0], [45.3, 208.0], [45.4, 209.0], [45.5, 211.0], [45.6, 212.0], [45.7, 212.0], [45.8, 213.0], [45.9, 214.0], [46.0, 215.0], [46.1, 217.0], [46.2, 218.0], [46.3, 219.0], [46.4, 220.0], [46.5, 221.0], [46.6, 221.0], [46.7, 222.0], [46.8, 222.0], [46.9, 223.0], [47.0, 224.0], [47.1, 225.0], [47.2, 226.0], [47.3, 227.0], [47.4, 228.0], [47.5, 229.0], [47.6, 230.0], [47.7, 232.0], [47.8, 232.0], [47.9, 234.0], [48.0, 234.0], [48.1, 235.0], [48.2, 236.0], [48.3, 236.0], [48.4, 237.0], [48.5, 239.0], [48.6, 240.0], [48.7, 241.0], [48.8, 241.0], [48.9, 242.0], [49.0, 243.0], [49.1, 244.0], [49.2, 244.0], [49.3, 245.0], [49.4, 247.0], [49.5, 248.0], [49.6, 248.0], [49.7, 249.0], [49.8, 250.0], [49.9, 251.0], [50.0, 252.0], [50.1, 252.0], [50.2, 253.0], [50.3, 253.0], [50.4, 254.0], [50.5, 256.0], [50.6, 257.0], [50.7, 258.0], [50.8, 260.0], [50.9, 260.0], [51.0, 261.0], [51.1, 262.0], [51.2, 262.0], [51.3, 263.0], [51.4, 264.0], [51.5, 265.0], [51.6, 267.0], [51.7, 268.0], [51.8, 269.0], [51.9, 271.0], [52.0, 272.0], [52.1, 274.0], [52.2, 275.0], [52.3, 277.0], [52.4, 278.0], [52.5, 278.0], [52.6, 279.0], [52.7, 279.0], [52.8, 282.0], [52.9, 283.0], [53.0, 284.0], [53.1, 285.0], [53.2, 286.0], [53.3, 287.0], [53.4, 288.0], [53.5, 289.0], [53.6, 290.0], [53.7, 291.0], [53.8, 292.0], [53.9, 294.0], [54.0, 295.0], [54.1, 297.0], [54.2, 299.0], [54.3, 299.0], [54.4, 300.0], [54.5, 303.0], [54.6, 305.0], [54.7, 306.0], [54.8, 307.0], [54.9, 307.0], [55.0, 308.0], [55.1, 309.0], [55.2, 310.0], [55.3, 311.0], [55.4, 313.0], [55.5, 315.0], [55.6, 316.0], [55.7, 317.0], [55.8, 319.0], [55.9, 321.0], [56.0, 323.0], [56.1, 324.0], [56.2, 326.0], [56.3, 328.0], [56.4, 330.0], [56.5, 333.0], [56.6, 335.0], [56.7, 336.0], [56.8, 338.0], [56.9, 339.0], [57.0, 340.0], [57.1, 340.0], [57.2, 341.0], [57.3, 342.0], [57.4, 344.0], [57.5, 345.0], [57.6, 346.0], [57.7, 348.0], [57.8, 348.0], [57.9, 349.0], [58.0, 352.0], [58.1, 353.0], [58.2, 354.0], [58.3, 355.0], [58.4, 357.0], [58.5, 357.0], [58.6, 358.0], [58.7, 359.0], [58.8, 363.0], [58.9, 364.0], [59.0, 366.0], [59.1, 368.0], [59.2, 369.0], [59.3, 371.0], [59.4, 372.0], [59.5, 374.0], [59.6, 376.0], [59.7, 378.0], [59.8, 381.0], [59.9, 382.0], [60.0, 384.0], [60.1, 386.0], [60.2, 387.0], [60.3, 389.0], [60.4, 390.0], [60.5, 393.0], [60.6, 394.0], [60.7, 396.0], [60.8, 397.0], [60.9, 398.0], [61.0, 399.0], [61.1, 401.0], [61.2, 402.0], [61.3, 405.0], [61.4, 406.0], [61.5, 410.0], [61.6, 411.0], [61.7, 412.0], [61.8, 414.0], [61.9, 414.0], [62.0, 416.0], [62.1, 417.0], [62.2, 418.0], [62.3, 419.0], [62.4, 421.0], [62.5, 421.0], [62.6, 422.0], [62.7, 424.0], [62.8, 425.0], [62.9, 426.0], [63.0, 428.0], [63.1, 430.0], [63.2, 431.0], [63.3, 431.0], [63.4, 433.0], [63.5, 434.0], [63.6, 435.0], [63.7, 437.0], [63.8, 438.0], [63.9, 440.0], [64.0, 441.0], [64.1, 442.0], [64.2, 444.0], [64.3, 445.0], [64.4, 447.0], [64.5, 448.0], [64.6, 449.0], [64.7, 450.0], [64.8, 451.0], [64.9, 452.0], [65.0, 455.0], [65.1, 455.0], [65.2, 457.0], [65.3, 459.0], [65.4, 459.0], [65.5, 460.0], [65.6, 462.0], [65.7, 463.0], [65.8, 464.0], [65.9, 466.0], [66.0, 468.0], [66.1, 470.0], [66.2, 472.0], [66.3, 472.0], [66.4, 475.0], [66.5, 476.0], [66.6, 477.0], [66.7, 478.0], [66.8, 479.0], [66.9, 480.0], [67.0, 481.0], [67.1, 483.0], [67.2, 484.0], [67.3, 485.0], [67.4, 487.0], [67.5, 489.0], [67.6, 490.0], [67.7, 492.0], [67.8, 495.0], [67.9, 498.0], [68.0, 500.0], [68.1, 501.0], [68.2, 502.0], [68.3, 503.0], [68.4, 504.0], [68.5, 506.0], [68.6, 507.0], [68.7, 509.0], [68.8, 510.0], [68.9, 512.0], [69.0, 512.0], [69.1, 514.0], [69.2, 515.0], [69.3, 517.0], [69.4, 519.0], [69.5, 521.0], [69.6, 523.0], [69.7, 524.0], [69.8, 526.0], [69.9, 528.0], [70.0, 530.0], [70.1, 531.0], [70.2, 534.0], [70.3, 537.0], [70.4, 538.0], [70.5, 540.0], [70.6, 542.0], [70.7, 544.0], [70.8, 545.0], [70.9, 546.0], [71.0, 549.0], [71.1, 550.0], [71.2, 552.0], [71.3, 553.0], [71.4, 556.0], [71.5, 558.0], [71.6, 560.0], [71.7, 561.0], [71.8, 562.0], [71.9, 564.0], [72.0, 565.0], [72.1, 568.0], [72.2, 569.0], [72.3, 571.0], [72.4, 573.0], [72.5, 575.0], [72.6, 577.0], [72.7, 578.0], [72.8, 579.0], [72.9, 580.0], [73.0, 581.0], [73.1, 582.0], [73.2, 583.0], [73.3, 587.0], [73.4, 589.0], [73.5, 591.0], [73.6, 592.0], [73.7, 593.0], [73.8, 594.0], [73.9, 598.0], [74.0, 599.0], [74.1, 601.0], [74.2, 603.0], [74.3, 604.0], [74.4, 606.0], [74.5, 607.0], [74.6, 609.0], [74.7, 611.0], [74.8, 612.0], [74.9, 615.0], [75.0, 620.0], [75.1, 621.0], [75.2, 623.0], [75.3, 625.0], [75.4, 627.0], [75.5, 627.0], [75.6, 630.0], [75.7, 632.0], [75.8, 633.0], [75.9, 636.0], [76.0, 640.0], [76.1, 642.0], [76.2, 644.0], [76.3, 647.0], [76.4, 648.0], [76.5, 650.0], [76.6, 651.0], [76.7, 655.0], [76.8, 659.0], [76.9, 661.0], [77.0, 664.0], [77.1, 667.0], [77.2, 669.0], [77.3, 672.0], [77.4, 673.0], [77.5, 675.0], [77.6, 678.0], [77.7, 680.0], [77.8, 681.0], [77.9, 682.0], [78.0, 685.0], [78.1, 688.0], [78.2, 690.0], [78.3, 694.0], [78.4, 696.0], [78.5, 698.0], [78.6, 700.0], [78.7, 701.0], [78.8, 706.0], [78.9, 708.0], [79.0, 712.0], [79.1, 715.0], [79.2, 717.0], [79.3, 720.0], [79.4, 723.0], [79.5, 724.0], [79.6, 726.0], [79.7, 729.0], [79.8, 731.0], [79.9, 735.0], [80.0, 740.0], [80.1, 742.0], [80.2, 743.0], [80.3, 745.0], [80.4, 745.0], [80.5, 748.0], [80.6, 751.0], [80.7, 752.0], [80.8, 755.0], [80.9, 756.0], [81.0, 758.0], [81.1, 760.0], [81.2, 763.0], [81.3, 765.0], [81.4, 767.0], [81.5, 767.0], [81.6, 768.0], [81.7, 770.0], [81.8, 773.0], [81.9, 776.0], [82.0, 777.0], [82.1, 781.0], [82.2, 782.0], [82.3, 782.0], [82.4, 783.0], [82.5, 786.0], [82.6, 788.0], [82.7, 789.0], [82.8, 792.0], [82.9, 794.0], [83.0, 796.0], [83.1, 799.0], [83.2, 800.0], [83.3, 803.0], [83.4, 804.0], [83.5, 807.0], [83.6, 810.0], [83.7, 814.0], [83.8, 816.0], [83.9, 818.0], [84.0, 820.0], [84.1, 822.0], [84.2, 824.0], [84.3, 825.0], [84.4, 826.0], [84.5, 827.0], [84.6, 828.0], [84.7, 830.0], [84.8, 833.0], [84.9, 835.0], [85.0, 836.0], [85.1, 837.0], [85.2, 840.0], [85.3, 843.0], [85.4, 847.0], [85.5, 848.0], [85.6, 850.0], [85.7, 853.0], [85.8, 855.0], [85.9, 861.0], [86.0, 863.0], [86.1, 866.0], [86.2, 869.0], [86.3, 873.0], [86.4, 875.0], [86.5, 879.0], [86.6, 881.0], [86.7, 884.0], [86.8, 887.0], [86.9, 895.0], [87.0, 900.0], [87.1, 904.0], [87.2, 907.0], [87.3, 908.0], [87.4, 910.0], [87.5, 917.0], [87.6, 921.0], [87.7, 923.0], [87.8, 927.0], [87.9, 931.0], [88.0, 936.0], [88.1, 941.0], [88.2, 947.0], [88.3, 949.0], [88.4, 956.0], [88.5, 960.0], [88.6, 962.0], [88.7, 966.0], [88.8, 970.0], [88.9, 975.0], [89.0, 978.0], [89.1, 982.0], [89.2, 985.0], [89.3, 989.0], [89.4, 993.0], [89.5, 997.0], [89.6, 1000.0], [89.7, 1006.0], [89.8, 1009.0], [89.9, 1014.0], [90.0, 1020.0], [90.1, 1026.0], [90.2, 1028.0], [90.3, 1034.0], [90.4, 1039.0], [90.5, 1048.0], [90.6, 1050.0], [90.7, 1062.0], [90.8, 1072.0], [90.9, 1083.0], [91.0, 1088.0], [91.1, 1090.0], [91.2, 1098.0], [91.3, 1103.0], [91.4, 1107.0], [91.5, 1115.0], [91.6, 1117.0], [91.7, 1125.0], [91.8, 1131.0], [91.9, 1132.0], [92.0, 1139.0], [92.1, 1142.0], [92.2, 1145.0], [92.3, 1150.0], [92.4, 1156.0], [92.5, 1163.0], [92.6, 1166.0], [92.7, 1170.0], [92.8, 1176.0], [92.9, 1184.0], [93.0, 1191.0], [93.1, 1193.0], [93.2, 1203.0], [93.3, 1204.0], [93.4, 1208.0], [93.5, 1213.0], [93.6, 1217.0], [93.7, 1222.0], [93.8, 1225.0], [93.9, 1231.0], [94.0, 1234.0], [94.1, 1239.0], [94.2, 1246.0], [94.3, 1252.0], [94.4, 1261.0], [94.5, 1267.0], [94.6, 1273.0], [94.7, 1283.0], [94.8, 1289.0], [94.9, 1300.0], [95.0, 1308.0], [95.1, 1320.0], [95.2, 1329.0], [95.3, 1339.0], [95.4, 1352.0], [95.5, 1366.0], [95.6, 1378.0], [95.7, 1385.0], [95.8, 1395.0], [95.9, 1415.0], [96.0, 1426.0], [96.1, 1437.0], [96.2, 1451.0], [96.3, 1463.0], [96.4, 1475.0], [96.5, 1484.0], [96.6, 1500.0], [96.7, 1510.0], [96.8, 1528.0], [96.9, 1550.0], [97.0, 1563.0], [97.1, 1582.0], [97.2, 1597.0], [97.3, 1613.0], [97.4, 1636.0], [97.5, 1654.0], [97.6, 1675.0], [97.7, 1706.0], [97.8, 1724.0], [97.9, 1746.0], [98.0, 1757.0], [98.1, 1797.0], [98.2, 1817.0], [98.3, 1832.0], [98.4, 1871.0], [98.5, 1937.0], [98.6, 1974.0], [98.7, 1998.0], [98.8, 2039.0], [98.9, 2083.0], [99.0, 2106.0], [99.1, 2115.0], [99.2, 2214.0], [99.3, 2284.0], [99.4, 2301.0], [99.5, 2353.0], [99.6, 2494.0], [99.7, 2622.0], [99.8, 2870.0], [99.9, 3596.0], [100.0, 4086.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 1624.0, "series": [{"data": [[0.0, 1624.0], [600.0, 236.0], [700.0, 241.0], [800.0, 203.0], [900.0, 136.0], [1000.0, 86.0], [1100.0, 104.0], [1200.0, 90.0], [1300.0, 48.0], [1400.0, 42.0], [1500.0, 32.0], [100.0, 717.0], [1600.0, 23.0], [1700.0, 26.0], [1800.0, 17.0], [1900.0, 14.0], [2000.0, 11.0], [2100.0, 10.0], [2300.0, 7.0], [2200.0, 14.0], [2400.0, 4.0], [2500.0, 5.0], [2600.0, 2.0], [2800.0, 2.0], [2700.0, 2.0], [2900.0, 1.0], [3000.0, 3.0], [200.0, 518.0], [3500.0, 1.0], [3600.0, 1.0], [3700.0, 1.0], [4000.0, 3.0], [300.0, 352.0], [400.0, 366.0], [500.0, 320.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 4000.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 178.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 3583.0, "series": [{"data": [[0.0, 3583.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1501.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 178.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 10.058823529411764, "minX": 1.60506576E12, "maxY": 12.0, "series": [{"data": [[1.60506576E12, 11.0], [1.60506594E12, 12.0], [1.60506582E12, 12.0], [1.605066E12, 10.058823529411764], [1.60506588E12, 12.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.605066E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 421.08955508879114, "minX": 1.0, "maxY": 4027.0, "series": [{"data": [[4.0, 2111.5], [8.0, 825.25], [2.0, 3596.0], [1.0, 4027.0], [9.0, 1896.5], [10.0, 823.0], [5.0, 3784.0], [11.0, 622.75], [6.0, 850.3333333333334], [12.0, 421.08955508879114], [3.0, 2906.0], [7.0, 2096.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[11.978145191942236, 426.34017483846486]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 12.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 290.55, "minX": 1.60506576E12, "maxY": 1643136.15, "series": [{"data": [[1.60506576E12, 36483.666666666664], [1.60506594E12, 1643136.15], [1.60506582E12, 1472647.7333333334], [1.605066E12, 35083.28333333333], [1.60506588E12, 1063834.6]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60506576E12, 391.65], [1.60506594E12, 14093.516666666666], [1.60506582E12, 12044.65], [1.605066E12, 290.55], [1.60506588E12, 18670.583333333332]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.605066E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 331.97976080956755, "minX": 1.60506576E12, "maxY": 2027.2647058823532, "series": [{"data": [[1.60506576E12, 357.1020408163265], [1.60506594E12, 445.0439900867412], [1.60506582E12, 515.4219985621856], [1.605066E12, 2027.2647058823532], [1.60506588E12, 331.97976080956755]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.605066E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 331.67111315547385, "minX": 1.60506576E12, "maxY": 2026.735294117647, "series": [{"data": [[1.60506576E12, 356.51020408163265], [1.60506594E12, 444.54275092936757], [1.60506582E12, 514.8145219266715], [1.605066E12, 2026.735294117647], [1.60506588E12, 331.67111315547385]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.605066E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.009293680297397775, "minX": 1.60506576E12, "maxY": 2.653061224489797, "series": [{"data": [[1.60506576E12, 2.653061224489797], [1.60506594E12, 0.009293680297397775], [1.60506582E12, 0.009345794392523364], [1.605066E12, 0.05882352941176472], [1.60506588E12, 0.00965961361545538]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.605066E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 32.0, "minX": 1.60506576E12, "maxY": 4086.0, "series": [{"data": [[1.60506576E12, 1049.0], [1.60506594E12, 2870.0], [1.60506582E12, 3067.0], [1.605066E12, 4086.0], [1.60506588E12, 2438.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60506576E12, 45.0], [1.60506594E12, 37.0], [1.60506582E12, 44.0], [1.605066E12, 571.0], [1.60506588E12, 39.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60506576E12, 45.0], [1.60506594E12, 37.0], [1.60506582E12, 44.0], [1.605066E12, 571.0], [1.60506588E12, 39.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60506576E12, 45.0], [1.60506594E12, 37.0], [1.60506582E12, 44.0], [1.605066E12, 571.0], [1.60506588E12, 39.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60506576E12, 45.0], [1.60506594E12, 32.0], [1.60506582E12, 40.0], [1.605066E12, 571.0], [1.60506588E12, 32.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60506576E12, 310.0], [1.60506594E12, 290.0], [1.60506582E12, 424.0], [1.605066E12, 1838.5], [1.60506588E12, 171.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.605066E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 53.5, "minX": 1.0, "maxY": 2906.0, "series": [{"data": [[3.0, 2906.0], [4.0, 1422.0], [5.0, 1366.0], [6.0, 1679.5], [7.0, 1252.0], [8.0, 1377.5], [9.0, 1214.0], [10.0, 916.0], [11.0, 895.5], [12.0, 823.5], [13.0, 953.0], [14.0, 681.0], [15.0, 792.0], [16.0, 658.5], [17.0, 531.0], [18.0, 574.0], [19.0, 682.0], [20.0, 616.0], [21.0, 428.0], [22.0, 429.0], [23.0, 448.0], [24.0, 344.0], [25.0, 445.0], [26.0, 354.0], [27.0, 221.0], [28.0, 378.0], [29.0, 308.0], [30.0, 422.5], [31.0, 98.5], [33.0, 213.0], [32.0, 393.0], [35.0, 225.0], [37.0, 101.5], [38.0, 128.5], [39.0, 257.0], [40.0, 196.5], [41.0, 118.0], [43.0, 111.0], [42.0, 211.0], [44.0, 190.5], [45.0, 91.5], [47.0, 187.0], [49.0, 146.5], [48.0, 87.0], [50.0, 125.5], [51.0, 157.5], [55.0, 105.5], [57.0, 226.0], [56.0, 211.0], [58.0, 187.5], [60.0, 82.5], [62.0, 156.5], [65.0, 160.0], [66.0, 100.0], [71.0, 89.0], [68.0, 53.5], [75.0, 104.0], [74.0, 151.5], [72.0, 110.5], [77.0, 150.0], [84.0, 82.0], [90.0, 110.0], [1.0, 2082.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 90.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 53.5, "minX": 1.0, "maxY": 2905.0, "series": [{"data": [[3.0, 2905.0], [4.0, 1422.0], [5.0, 1365.0], [6.0, 1677.5], [7.0, 1252.0], [8.0, 1376.5], [9.0, 1214.0], [10.0, 914.5], [11.0, 895.5], [12.0, 822.5], [13.0, 952.0], [14.0, 681.0], [15.0, 789.0], [16.0, 657.0], [17.0, 528.0], [18.0, 573.5], [19.0, 682.0], [20.0, 616.0], [21.0, 427.0], [22.0, 428.0], [23.0, 448.0], [24.0, 342.0], [25.0, 445.0], [26.0, 354.0], [27.0, 219.0], [28.0, 378.0], [29.0, 308.0], [30.0, 422.5], [31.0, 93.5], [33.0, 212.0], [32.0, 393.0], [35.0, 225.0], [37.0, 101.5], [38.0, 128.5], [39.0, 257.0], [40.0, 196.5], [41.0, 118.0], [43.0, 111.0], [42.0, 210.5], [44.0, 190.5], [45.0, 91.0], [47.0, 187.0], [49.0, 146.0], [48.0, 87.0], [50.0, 125.5], [51.0, 157.5], [55.0, 105.0], [57.0, 225.0], [56.0, 210.0], [58.0, 186.5], [60.0, 82.0], [62.0, 156.5], [65.0, 160.0], [66.0, 100.0], [71.0, 89.0], [68.0, 53.5], [75.0, 104.0], [74.0, 151.0], [72.0, 110.5], [77.0, 150.0], [84.0, 82.0], [90.0, 110.0], [1.0, 2079.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 90.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.36666666666666664, "minX": 1.60506576E12, "maxY": 36.233333333333334, "series": [{"data": [[1.60506576E12, 1.0166666666666666], [1.60506594E12, 26.9], [1.60506582E12, 23.183333333333334], [1.605066E12, 0.36666666666666664], [1.60506588E12, 36.233333333333334]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.605066E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.5666666666666667, "minX": 1.60506576E12, "maxY": 36.233333333333334, "series": [{"data": [[1.60506576E12, 0.8166666666666667], [1.60506594E12, 26.9], [1.60506582E12, 23.183333333333334], [1.605066E12, 0.5666666666666667], [1.60506588E12, 36.233333333333334]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.605066E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.5666666666666667, "minX": 1.60506576E12, "maxY": 36.233333333333334, "series": [{"data": [[1.60506576E12, 0.8166666666666667], [1.60506594E12, 26.9], [1.60506582E12, 23.183333333333334], [1.605066E12, 0.5666666666666667], [1.60506588E12, 36.233333333333334]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.605066E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.5666666666666667, "minX": 1.60506576E12, "maxY": 36.233333333333334, "series": [{"data": [[1.60506576E12, 0.8166666666666667], [1.60506594E12, 26.9], [1.60506582E12, 23.183333333333334], [1.605066E12, 0.5666666666666667], [1.60506588E12, 36.233333333333334]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.605066E12, "title": "Total Transactions Per Second"}},
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

